'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { put } from '@vercel/blob'
import { verifyToken } from '@/lib/auth'
import { cookies } from 'next/headers'
import fs from 'fs'
import path from 'path'
import * as ftp from 'basic-ftp'
import { Readable } from 'stream'

async function checkAuth() {
    const cookieStore = await cookies()
    const token = cookieStore.get('adminToken')?.value
    if (!token) throw new Error('Unauthorized')
    const payload = await verifyToken(token)
    if (!payload) throw new Error('Unauthorized')
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('adminToken')
    redirect('/admin/login')
}

export async function uploadImage(formData: FormData) {
    await checkAuth()
    const file = formData.get('imageFile') as File
    if (!file || file.size === 0) return ''

    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
    const buffer = Buffer.from(await file.arrayBuffer())

    // Save locally into public/blog_images so Next.js serves it reliably
    const blogImagesDir = path.join(process.cwd(), 'public', 'blog_images')
    if (!fs.existsSync(blogImagesDir)) {
        fs.mkdirSync(blogImagesDir, { recursive: true })
    }
    fs.writeFileSync(path.join(blogImagesDir, filename), buffer)
    console.log(`Saved image locally to public/blog_images/${filename}`)

    // Also upload to FTP server if configured as remote backup
    const host = process.env.FTP_HOST
    const user = process.env.FTP_USER
    const password = process.env.FTP_PASS

    if (host && user && password) {
        try {
            const client = new ftp.Client()
            client.ftp.verbose = false
            await client.access({ host, user, password, secure: false })
            await client.ensureDir('/blog_images')
            const source = Readable.from(buffer)
            await client.uploadFrom(source, `/blog_images/${filename}`)
            client.close()
            console.log(`FTP backup upload complete for ${filename}`)
        } catch (ftpErr: any) {
            console.warn("FTP backup upload warning:", ftpErr?.message || ftpErr)
        }
    }

    return `/blog_images/${filename}`
}

export async function createBlog(formData: FormData) {
    try {
        await checkAuth()

        const title = formData.get('title') as string
        const slug = formData.get('slug') as string
        const content = formData.get('content') as string
        const metaTitle = formData.get('metaTitle') as string
        const metaDescription = formData.get('metaDescription') as string
        const keywords = formData.get('keywords') as string
        const category = formData.get('category') as string
        const author = formData.get('author') as string
        const isExternal = formData.get('isExternal') === 'true'
        const published = formData.get('published') === 'true'

        let imageUrl = formData.get('imageUrl') as string || '';
        const imageFile = formData.get('imageFile') as File;

        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(formData)
        }

        await prisma.blog.create({
            data: {
                title,
                slug,
                content,
                metaTitle,
                metaDescription,
                keywords,
                category,
                author,
                isExternal,
                imageUrl,
                published,
            },
        })

        revalidatePath('/admin/blogs')
        revalidatePath(`/${slug}`)
        revalidatePath(`/blog/${slug}`)
        revalidatePath('/blog')
    } catch (error: any) {
        console.error('Create blog error:', error)
        return { error: error.message || 'Failed to create blog' }
    }
    redirect('/admin/blogs')
}

export async function updateBlog(id: string, formData: FormData) {
    try {
        await checkAuth()

        const title = formData.get('title') as string
        const slug = formData.get('slug') as string
        const content = formData.get('content') as string
        const metaTitle = formData.get('metaTitle') as string
        const metaDescription = formData.get('metaDescription') as string
        const keywords = formData.get('keywords') as string
        const category = formData.get('category') as string
        const author = formData.get('author') as string
        const isExternal = formData.get('isExternal') === 'true'
        const published = formData.get('published') === 'true'

        let imageUrl = formData.get('imageUrl') as string || '';
        const imageFile = formData.get('imageFile') as File;

        if (imageFile && imageFile.size > 0) {
            imageUrl = await uploadImage(formData)
        }

        await prisma.blog.update({
            where: { id },
            data: {
                title,
                slug,
                content,
                metaTitle,
                metaDescription,
                keywords,
                category,
                author,
                isExternal,
                imageUrl,
                published,
            },
        })

        revalidatePath('/admin/blogs')
        revalidatePath(`/${slug}`)
        revalidatePath(`/blog/${slug}`)
        revalidatePath('/blog')
    } catch (error: any) {
        console.error('Update blog error:', error)
        return { error: error.message || 'Failed to update blog' }
    }
    redirect('/admin/blogs')
}

export async function deleteBlog(id: string) {
    await checkAuth()
    await prisma.blog.delete({ where: { id } })
    revalidatePath('/admin/blogs')
    revalidatePath('/blog')
}

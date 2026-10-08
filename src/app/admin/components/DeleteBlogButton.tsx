'use client'

import { useState, useTransition } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteBlog } from '../actions'

export default function DeleteBlogButton({ id, title }: { id: string; title: string }) {
    const [isPending, startTransition] = useTransition()

    const handleDelete = async () => {
        if (confirm(`Are you sure you want to delete "${title}"?`)) {
            startTransition(async () => {
                await deleteBlog(id)
            })
        }
    }

    return (
        <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium transition disabled:opacity-50"
        >
            <Trash2 className="h-4 w-4" />
            {isPending ? 'Deleting...' : 'Delete'}
        </button>
    )
}

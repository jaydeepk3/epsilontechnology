import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function getNextIntakeDate(): string {
  const d = new Date();
  const nextMonthIndex = (d.getMonth() + 1) % 12;
  const year = d.getMonth() === 11 ? d.getFullYear() + 1 : d.getFullYear();
  return `${MONTH_NAMES[nextMonthIndex]} ${year}`;
}

import { twMerge } from 'tailwind-merge'
import clsx from "clsx";

export default function CN(...inputs: any[]) {
    // Merge class names
    return twMerge(clsx(inputs));
}
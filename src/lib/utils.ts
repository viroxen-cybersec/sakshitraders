import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes (shadcn convention, used by 21st.dev components). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

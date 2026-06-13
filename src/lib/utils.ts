import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Standard shadcn `cn` helper: merge conditional class lists and de-dupe
// conflicting Tailwind utilities. Used by components under @/components/ui.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

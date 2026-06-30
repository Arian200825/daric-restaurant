import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a numeric price with the configured currency symbol. */
export function formatPrice(value: number, symbol: string) {
  return `${symbol}${value % 1 === 0 ? value : value.toFixed(2)}`;
}

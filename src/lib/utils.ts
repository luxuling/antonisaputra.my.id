import { clsx, type ClassValue } from 'clsx';
import * as tailwindMerge from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return tailwindMerge.twMerge(clsx(inputs));
}

export const waLinkRedirect = (phone: string, text: string) => {
  const encodedText = encodeURIComponent(text);
  const link = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(link, '_blank');
};

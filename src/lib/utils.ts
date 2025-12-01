import { clsx, type ClassValue } from 'clsx';
import * as tailwindMerge from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return tailwindMerge.twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const waLinkRedirect = (phone: string, text: string) => {
  const encodedText = encodeURIComponent(text);
  const link = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(link, '_blank');
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return 'Copied to clipboard!';
  } catch (error: any) {
    throw error;
  }
};

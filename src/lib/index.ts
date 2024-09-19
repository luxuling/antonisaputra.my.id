import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tw-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export const convertToSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const timeAgo = (date: string) => {
  let value;
  const diff = (new Date().getTime() - new Date(date).getTime()) / 1000;
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  const rtf = new Intl.RelativeTimeFormat('id-ID', { numeric: 'auto' });

  if (years > 0) {
    value = rtf.format(0 - years, 'year');
  } else if (months > 0) {
    value = rtf.format(0 - months, 'month');
  } else if (days > 0) {
    value = rtf.format(0 - days, 'day');
  } else if (hours > 0) {
    value = rtf.format(0 - hours, 'hour');
  } else if (minutes > 0) {
    value = rtf.format(0 - minutes, 'minute');
  } else {
    value = rtf.format(0 - Math.floor(diff), 'second');
  }
  return value;
};

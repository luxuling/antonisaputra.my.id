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

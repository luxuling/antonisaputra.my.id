import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/core/dialog';

import LazyImage, { LazyImageProps } from './lazy-image';

export default function ImageWithModal({
  src,
  alt,
  className,
}: LazyImageProps) {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className={cn(
          'w-full overflow-hidden rounded-md',
          className
        )}
      >
        <LazyImage src={src} alt={alt} />
      </DialogTrigger>
      <DialogContent className="w-full max-w-xs sm:max-w-md md:max-w-3xl xl:max-w-7xl">
        <div className="relative h-full w-full scale-100 overflow-hidden rounded-md">
          <LazyImage src={src} alt={alt}  className='object-contain'/>
        </div>
      </DialogContent>
    </Dialog>
  );
}

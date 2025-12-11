import { XIcon } from 'lucide-react';

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from '@/components/core/morphing-dialog';

import { LazyImageProps } from './lazy-image';

export default function MorphingImage({ src, alt }: LazyImageProps) {
  return (
    <MorphingDialog
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <MorphingDialogTrigger className="w-full">
        <MorphingDialogImage
          src={src}
          alt={alt}
          className="w-full rounded-md"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-full h-fit overflow-visible">
          <MorphingDialogImage
            src={src}
            alt={alt}
            className="mx-auto h-auto w-full max-w-xl rounded-[4px] object-cover md:max-w-3xl lg:h-[90vh] lg:max-w-6xl"
          />
          <MorphingDialogClose
            className="absolute top-[93%] left-1/2 -translate-x-1/2 h-fit w-fit rounded-full bg-white p-1"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

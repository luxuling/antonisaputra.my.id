'use client';

import { useGlitch } from 'react-powerglitch';

import Typography from '@/components/typography';

const asciiArt = `
██╗  ██╗ ██████╗ ██╗  ██╗
██║  ██║██╔═████╗██║  ██║
███████║██║██╔██║███████║
╚════██║████╔╝██║╚════██║
     ██║╚██████╔╝     ██║
     ╚═╝ ╚═════╝      ╚═╝
                         
  `;

export default function NontFound() {
  const glitchRef = useGlitch();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <pre
        style={{
          lineHeight: '1',
          letterSpacing: '0',
          fontFamily: 'Consolas, Monaco, "Courier New", monospace',
        }}
        className="text-accent h-[100px] scale-50 md:h-[150px] md:scale-100"
        ref={glitchRef?.ref}
      >
        {asciiArt}
      </pre>
      <Typography variant="small" className="text-center">
        Page Not Found
      </Typography>
    </div>
  );
}

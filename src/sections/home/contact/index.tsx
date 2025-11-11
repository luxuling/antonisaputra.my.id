import { Mail } from 'lucide-react';

import Button from '@/components/button';
import { SITE_CONFIG } from '@/lib/config';
import Container from '@/components/container';
import Typography from '@/components/typography';
import Dither from '@/components/dither-background';

export default function Contact() {
  return (
    <Container>
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
        <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/60 p-4 text-center text-white">
          <Typography variant="h1">
            Want to build <br /> something?
          </Typography>
          <Typography variant="base">
            Feel free to reach out for collaborations or <br /> just a friendly
            chat.
          </Typography>
          <Button href={`mailto:${SITE_CONFIG.email}`} target="_blank">
            <Mail />
            Say Hello
          </Button>
        </div>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
    </Container>
  );
}

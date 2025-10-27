import { Send, User } from 'lucide-react';

import Light from '@/components/light';
import Button from '@/components/button';
import { SITE_CONFIG } from '@/lib/config';
import { waLinkRedirect } from '@/lib/utils';
import Container from '@/components/container';
import { NAVIGATION_PATHS } from '@/lib/config';
import Typography from '@/components/typography';
import { TextLoop } from '@/components/core/text-loop';

import CurrentProject from './components/current-project';

export default function HomeHero() {
  return (
    <Container className="relative flex min-h-screen flex-col justify-center gap-10 pt-20">
      <Light className="fixed -top-10 -left-10 -z-3" />
      <CurrentProject />
      <div>
        <Typography variant="h1">
          Hi, I&#39;m{' '}
          <TextLoop
            className="overflow-y-clip"
            transition={{
              type: 'spring',
              stiffness: 900,
              damping: 80,
              mass: 10,
            }}
            variants={{
              initial: {
                y: 20,
                rotateX: 90,
                opacity: 0,
                filter: 'blur(4px)',
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
                filter: 'blur(0px)',
              },
              exit: {
                y: -20,
                rotateX: -90,
                opacity: 0,
                filter: 'blur(4px)',
              },
            }}
          >
            <span>Antoni Saputra.</span>
            <span>Lixu Ling.</span>
          </TextLoop>
        </Typography>
        <Typography color="muted" className="mt-4 max-w-lg">
          A Software Engineer who loves Linux & Open Source, like to build some
          fun projects, and always learning new things.
        </Typography>
      </div>
      <div className="flex gap-3">
        <Button
          onClick={() =>
            waLinkRedirect(SITE_CONFIG.phoneNumber, SITE_CONFIG.whatsappMessage)
          }
        >
          Contact Me
          <Button variant="icon">
            <Send size={14} />
          </Button>
        </Button>
        <Button href={NAVIGATION_PATHS.about} variant="primary">
          About Me
          <Button variant="icon">
            <User size={14} />
          </Button>
        </Button>
      </div>
    </Container>
  );
}

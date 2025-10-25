import { Send, User } from 'lucide-react';

import Light from '@/components/light';
import Button from '@/components/button';
import { SITE_CONFIG } from '@/lib/config';
import { waLinkRedirect } from '@/lib/utils';
import Container from '@/components/container';
import { NAVIGATION_PATHS } from '@/lib/config';
import Typography from '@/components/typography';

import CurrentProject from './components/current-project';

export default function HomeHero() {
  return (
    <Container className="relative flex min-h-screen flex-col justify-center gap-10 pt-20">
      <Light className="fixed -top-10 -left-10 -z-3" />
      <CurrentProject />
      <div>
        <Typography variant="h1">Hi, I&#39;m Antoni Saputra.</Typography>
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
          My Resume
          <Button variant="icon">
            <User size={14} />
          </Button>
        </Button>
      </div>
    </Container>
  );
}

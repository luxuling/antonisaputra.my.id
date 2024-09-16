import profilePng from '@/../public/PP.png';

import DiscordIcon from '../../public/icons/discord';
import EmailIcon from '../../public/icons/email';
import ThreadsIcon from '../../public/icons/threads';
import TiktokIcon from '../../public/icons/tiktok';
import { Github } from 'lucide-react';

const DATA = {
  name: 'Antoni',
  description:
    "A person who enjoys coding and building things, I enjoy assisting others in their projects. Let's get in touch!",
  profilePicture: profilePng,
  summary:
    'I started my first “Hello World” in 2022 after I graduated from High School, after that I joined a Full Stack Bootcamp scholarship in **[Dicoding](https://www.dicoding.com/)** and joined an internship program in a Software House as A Software Engineer. Okay, enough of the story, now I work as a freelancer and am self-employed in **[Flex Studio ID](https://www.flexstudio.id/)**, build some open source projects, and like to share my learning experience on the internet, that’s it, don’t forget to see some meme content in **[Instagram](https://www.instagram.com/flexstudio.id_official/)**, **[TikTok](https://www.tiktok.com/@flex.studio.id)**, thanks 🫰 hehehe.',
  animateDelay: 0.04,
  skills: [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'TailwindCSS',
    'ReactJS',
    'VueJS',
    'NextJS',
    'NuxtJS',
    'SQL',
    'Postgresql',
    'Node.JS',
    'Express',
  ],
  workExperiences: [
    {
      company: 'Flex Studio ID',
      href: 'https://flexstudio.id',
      badges: [],
      location: 'Jogja - Indonesia',
      title: 'Founder',
      logoUrl: '/flx.png',
      start: 'Jan 2024',
      end: 'Now',
      description:
        "Building my first agency brand for People who search services that provide coding and designing, I'm working on several Web projects based on ReactJS for corporate and brand",
    },
    {
      company: 'Refactory',
      href: 'https://refactory.id',
      badges: [],
      location: 'Jogja - Indonesia',
      title: 'Software Engineer',
      logoUrl: '/rf.jpeg',
      start: 'Agu 2023',
      end: 'Nov 2023',
      description:
        'Contributed to several projects, including e-commerce and management apps, using multiple languages and frameworks. Started with VueJS and NuxtJS and ended with C# and .NET.',
    },
  ],
  socialMedia: [
    {
      label: 'Threads',
      icon: ThreadsIcon,
      url: 'https://www.threads.net/@codewithlixu',
    },
    {
      label: 'Discord',
      icon: DiscordIcon,
      url: 'https://discord.gg/j7aYx3cASj',
    },
    {
      label: 'Tiktok',
      icon: TiktokIcon,
      url: 'https://www.tiktok.com/@lixu_flexstudio.id',
    },
    {
      label: 'Github',
      icon: Github,
      url: 'https://github.com/luxuling',
    },
    {
      label: 'Email',
      icon: EmailIcon,
      url: 'antonisaputra049@gmail.com',
    },
  ],
};

export default DATA;

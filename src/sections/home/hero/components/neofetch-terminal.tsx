import * as React from 'react';

export default function NeofetchTerminal() {
  return (
    <div className="from-background-secondary to-background shadow-foreground/5 group absolute top-3/5 -left-40 -z-10 flex h-[500px] w-[900px] rotate-x-45 rotate-z-45 flex-col items-end gap-2 rounded-lg bg-linear-to-b p-7 shadow perspective-dramatic transform-3d md:top-2/5 md:left-8/12 md:z-0 lg:left-7/12">
      <TerminalHeader />
      <TerminalContent />
    </div>
  );
}

const TerminalHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-500" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
};

const TerminalContent = () => {
  const [displayedText, setDisplayedText] = React.useState('');

  const neofetchOutput = `
          A             
         ooo           ┌──────────────────────────────────────┐ 
        ooooo            OS: Arch Linux 
       ooooooo           Host: MS-7C95 1.0 
      ooooooooo          Kernel: 6.14.6-arch1-1 
     ooooo ooooo         Uptime: 7 hours, 2 mins 
    ooooo   ooooo        Packages: 1005 (pacman), 5 (flatpak) 
   ooooo     ooooo       Shell: zsh 5.9 
  ooooo  <oooooooo>      Resolution: 1920x1080 
 ooooo      <oooooo>     DE: Hyprland 
ooooo          <oooo>    WM: sway 
                         Terminal: kitty 
                         CPU: AMD Ryzen 5 5600G with Radeon Graphics (12) @ 4.465GHz 
                         GPU: AMD ATI Radeon Vega Series / Radeon Vega Mobile Series 
                         Memory: 9689MiB / 13860MiB 
                       └──────────────────────────────────────┘ 
  `;

  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < neofetchOutput.length) {
        setDisplayedText(neofetchOutput.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setTimeout(() => {}, 500);
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-foreground border-foreground/20 bg-background-secondary group-hover:shadow-foreground/25 relative h-full w-full rounded-md p-2 text-sm font-semibold shadow transition-all duration-300 ease-in-out group-hover:-translate-x-3 group-hover:-translate-y-3">
      <div>
        <p>
          <span className="text-accent">lixuling@archlinux</span>:{' '}
          <span className="text-lime-200">neofetch</span>
        </p>
        <pre className="text-sm font-thin">{displayedText}</pre>
      </div>
    </div>
  );
};

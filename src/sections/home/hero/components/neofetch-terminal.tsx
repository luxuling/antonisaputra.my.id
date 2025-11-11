import * as React from 'react';

export default function NeofetchTerminal() {
  return (
    <div className="group linear-gradient absolute top-5/5 -left-40 -z-10 rotate-x-45 rotate-z-45 rounded-lg perspective-dramatic transform-3d md:top-2/5 md:left-8/12 md:z-0 lg:left-7/12">
      <div className="bg-background-secondary border-foreground/5 flex h-[500px] w-[900px] flex-col items-end gap-2 rounded-lg border p-7">
        <TerminalHeader />
        <TerminalContent />
      </div>
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
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠀⠀⠀⠀⠈⠉⠙⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠐⠁⠀⢀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿      lixuling@archlinux
⣿⣿⣿⣿⣿⣿⡿⠃⠂⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⢀⠀⠀⠈⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿      distribution    •  Arch Linux x86_64
⣿⣿⢿⣿⠟⠃⠀⠀⠀⠀⡈⠄⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⢻⣿⣿⣿⣿      linux kernel    •  Linux 6.14.6-arch1-1
⣿⣿⣷⡶⠂⠀⠀⠀⢀⠀⠷⠀⣷⠀⢇⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⢸⣿⠡⠖⢸      packages        •  1031 (pacman)
⣿⣿⣿⣧⠀⠄⠀⠀⢈⣡⣄⣩⣿⣿⣾⡷⠄⢊⡀⠀⠀⠀⠀⠀⠠⡮⢹⣷⣾⣿      unix shell      •  zsh 5.9
⣿⣿⣿⣿⡄⠀⠀⠀⠊⢭⣿⣿⣷⣶⣿⣿⣶⡦⠀⠀⠀⠀⠀⠀⠎⢈⠢⣂⢿⣿      terminal        •  tmux 3.5a
⣿⣿⣿⠟⠀⠀⠀⠀⠙⢿⣿⣷⣿⣾⣭⣿⣿⡥⠍⠂⠀⠀⠀⠀⠀⠀⣬⣶⣿⣿      window manager  •  Hyprland (Wayland)
⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠟⠛⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⡇⠁⠀⠀⠀⡀⣶⣶⣶⣶⠂⢀⣠⣴⡆⢄⣤⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿      ● ● ● ● ● ● ● ●
⣿⣿⠋⠀⠀⠀⠤⡦⢍⣿⣿⡇⣔⡻⠿⠿⣱⣿⡏⠀⠀⠀⠀⠐⠀⠀⠀⠀⠹⣿
⡿⠁⠀⠀⠀⠀⠈⠈⢸⡿⣿⢯⣛⣛⢛⣼⣿⣿⠁⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠹
⡁⠀⠀⠀⣠⠂⠀⠐⡠⠎⢸⢸⣿⣏⣾⣿⡿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣄⠀⡀⠀⠀⢠⠀⠀⠀⠹⣸⡿⣼⠟⠉⠔⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀
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
    <div className="text-foreground bg-background-secondary group-hover:border-foreground/5 border-foreground/0 relative h-full w-full rounded-md border p-2 text-sm font-semibold transition-all duration-300 ease-in-out group-hover:-translate-x-3 group-hover:-translate-y-5">
      <div>
        <p>
          <span className="text-accent brightness-150">lixuling@archlinux</span>
          : <span className="text-lime-200 brightness-150">fastfetch</span>
        </p>
        <pre className="text-sm leading-4 font-thin brightness-150">
          {displayedText}
        </pre>
      </div>
    </div>
  );
};

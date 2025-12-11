'use client';

import { LucideIcon } from 'lucide-react';
import { MessageCircleDashed, Rose, Share } from 'lucide-react';

export default function SocialActions() {
  return (
    <div className="bg-background/40 border-foreground/10 fixed bottom-10 left-1/2 z-[55] flex h-fit w-fit -translate-x-1/2 space-x-4 rounded-xl border p-2 backdrop-blur-sm">
      <Action Icon={Rose} onClick={() => {}} />
      <Action Icon={MessageCircleDashed} onClick={() => {}} />
      <Action Icon={Share} onClick={() => {}} />
    </div>
  );
}

function Action({ Icon, onClick }: { Icon: LucideIcon; onClick: () => void }) {
  return (
    <button
      type="button"
      className="hover:bg-foreground/20 text-foreground/50 hover:text-foreground relative flex h-9 w-9 shrink-0 scale-100 appearance-none items-center justify-center rounded-lg transition-colors select-none focus-visible:ring-2 active:scale-[0.98]"
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}

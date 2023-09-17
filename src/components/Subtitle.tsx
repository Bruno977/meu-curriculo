import React from 'react';

type SubtitleProps = React.PropsWithChildren;

export function Subtitle({ children }: SubtitleProps) {
  return (
    <p
      className="text-sm text-gray-400 pt-4 flex items-center justify-center gap-4
        after:content-[''] after:inline-block after:w-6 after:h-[2px] after:bg-emerald-500
        before:content-[''] before:inline-block before:w-6 before:h-[2px] before:bg-emerald-500"
    >
      {children}
    </p>
  );
}

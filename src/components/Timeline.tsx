import { CalendarIcon } from '@heroicons/react/20/solid';
import React from 'react';

type TimelinePropos = {
  date: string;
  role: string;
  company: string;
  description: string;
};

export function Timeline({ date, role, company, description }: TimelinePropos) {
  return (
    <div
      className={`relative pl-7 pb-8 ml-2 last:pb-0 
      before:contents-[''] before:block before:bg-emerald-500 
      before:w-[1px] before:h-full before:absolute before:top-0 before:left-0 before:bottom-0 before:mr-5
      
      after:contents-[''] after:absolute after:top-0 after:left-[-9px] 
      after:w-5 after:h-5 after:rounded-full after:bg-zinc-950 after:border-2 after:border-emerald-500`}
    >
      <div>
        <small className="flex items-center gap-2 text-gray-400">
          <CalendarIcon className="h-5 w-5" /> {date}
        </small>
        <h4 className="text-white text-sm py-2 uppercase">
          {role} -{' '}
          <strong className="font-black text-emerald-500">{company}</strong>
        </h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

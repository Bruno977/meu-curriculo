import React from 'react';

type ProgressSkillsProps = {
  skill: string;
  progress: number;
};
export function ProgressSkills({ skill, progress }: ProgressSkillsProps) {
  return (
    <div>
      <p className="text-xs uppercase font-semibold text-white pb-4">{skill}</p>
      <div className={`progress-skill w-full h-[1px] bg-zinc-800 relative`}>
        <span
          className={`block bg-emerald-500 absolute top-0  h-[1px] z-10`}
          style={{ width: progress + '%' }}
        />
        <span
          className={`border border-emerald-500 absolute top-[-40px]  px-2 py-1 rounded-md text-sm text-emerald-500
          before:absolute before:content-'' before:inline-block before:p-1 before:transform before:-translate-y-[4px] before:translate-x-[19px] before:rotate-45 before:skew-x-3 before:skew-y-3 
          before:left-0 before:top-full before:bg-gray-950 before:border-solid before:border-green-500 before:border-l-0 before:border-t-0 before:border-r-[1px] before:border-b-[1px]
          `}
          style={{ left: `calc(${progress}% - 25px)` }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}

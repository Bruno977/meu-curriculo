'use client';
import { ProjectType } from '@/types/projectType';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

type ProjectItemProps = {
  project: ProjectType;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setProjectId: Dispatch<SetStateAction<number | null>>;
};

export function ProjectItem({
  project,
  setIsOpen,
  setProjectId,
}: ProjectItemProps) {
  function handleClickModal() {
    setIsOpen(true);
    setProjectId(project.id);
  }

  return (
    <div
      className="rounded-lg overflow-hidden group cursor-pointer"
      onClick={handleClickModal}
    >
      {/* <Image src={project.thumb} alt={project.name} className="transition" /> */}
      <div className="h-60 w-full bg-zinc-800 flex items-center justify-center">
        <h4 className="uppercase font-bold text-xl">{project.name}</h4>
      </div>
      <div className="bg-zinc-900 p-8 h-full">
        {/* <p className="text-xl font-bold text-white pb-2">{project.name}</p> */}
        <ul className="inline-flex items-center gap-2 flex-wrap">
          {project.skills.map((skill) => (
            <li
              key={skill.id}
              className="border-2 border-emerald-500 text-emerald-500 rounded-md h-6 px-2 
            text-xs font-black leading-5 lowercase
            flex items-center justify-center"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

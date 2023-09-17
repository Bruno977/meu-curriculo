import { Title } from '@/components/Title';
import { ProjectType } from '@/types/projectType';
import Image from 'next/image';
import React from 'react';

interface ProjectProps {
  params: {
    projectId: string;
  };
}

async function getProject(projectId: string) {
  const res = await fetch(`http://localhost:3000/api/${projectId}`);
  if (!res.ok) {
    throw new Error('Não foi possivel esxecutar esta ação no momento!');
  }
  return res.json();
}

async function Project({ params }: ProjectProps) {
  const project: ProjectType = await getProject(params.projectId);
  return (
    <>
      <section className="container mx-auto px-4 py-20 lg:py-14">
        {/* <div className="text-center mb-10">
          <Title>{project.name}</Title>
        </div> */}
        <div className="flex items-center justify-center gap-10">
          <div>
            <h1 className="text-3xl font-bold uppercase">{project.name}</h1>
            <p className="pt-10">{project.shortDescription}</p>
          </div>
          <div>
            <Image
              src={project.src}
              alt={project.name}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;

'use client';
import { ProjectItem } from '@/components/ProjectItem';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';
import React, { useState } from 'react';
import { ProjectsReact } from '@/data/projects';
import { ModalProject } from '@/components/ModalProject';

function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projectId, setProjectId] = useState<number | null>(null);
  return (
    <>
      <section className="container mx-auto px-4 py-20 lg:py-14">
        <div className="text-center mb-10">
          <Title>
            Meu <strong className="text-emerald-500">Portfólio</strong>
          </Title>
          <Subtitle>ALGUNS PROJETOS QUE TRABALHEI.</Subtitle>
        </div>
        {ProjectsReact.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {ProjectsReact.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                setIsOpen={setModalIsOpen}
                setProjectId={setProjectId}
              />
            ))}
          </div>
        )}
      </section>
      <ModalProject
        isOpen={modalIsOpen}
        projectId={projectId}
        setIsOpen={setModalIsOpen}
      />
    </>
  );
}

export default Portfolio;

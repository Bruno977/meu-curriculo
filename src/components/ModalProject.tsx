'use client';
import Image from 'next/image';
import { Dispatch, SetStateAction, Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ProjectType } from '@/types/projectType';
import FsLightbox from 'fslightbox-react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { LoadingComponent } from './Loading';

interface ModalProjectProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  projectId: number | null;
}

export function ModalProject({
  isOpen,
  setIsOpen,
  projectId,
}: ModalProjectProps) {
  const [project, setProject] = useState<ProjectType | null>(null);

  const [toggler, setToggler] = useState(false);
  const [loading, setLoading] = useState(false);

  async function getProject() {
    setLoading(true);
    try {
      const response = await fetch(`/api/${projectId}`);
      const responseJson = await response.json();
      setProject(responseJson);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (projectId) {
      getProject();
    }
  }, [projectId]);

  if (loading) return <LoadingComponent />;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                  {project && (
                    <>
                      <div className="flex items-center justify-between pb-4">
                        <h2 className="text-lg uppercase font-bold leading-6 text-white">
                          {project.name}
                        </h2>
                        <button
                          type="button"
                          className=" bg-zinc-700 rounded"
                          onClick={handleCloseModal}
                        >
                          <XMarkIcon className="h-6 w-6 text-white" />
                        </button>
                      </div>
                      {project.thumb && (
                        <div onClick={() => setToggler(!toggler)}>
                          <Image
                            src={project.thumb}
                            width={1920}
                            height={1080}
                            alt={project.name}
                            className="rounded-lg max-w-full"
                          />
                        </div>
                      )}
                      {project.description && (
                        <div
                          className="pt-8"
                          dangerouslySetInnerHTML={{
                            __html: project.description,
                          }}
                        />
                      )}
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {project && project.images.length > 0 && (
        <FsLightbox
          toggler={toggler}
          sources={project.images.map((image) => image)}
        />
      )}
    </>
  );
}

import { NextResponse } from 'next/server';
import { ProjectsReact } from '@/app/data/projects';

interface ContextProps {
  params: {
    projectId: string;
  };
}

export async function GET(request: Request, context: ContextProps) {
  const projectId = context.params.projectId;
  return NextResponse.json(
    ProjectsReact.find((project) => project.id === Number(projectId))
  );
}

// src/components/ProjectCard.tsx
import { ReactNode } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
}

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
      onClick={onClick}
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={400}
        height={250}
        objectFit="cover"
        className="group-hover:scale-105 transition-transform"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white font-semibold text-lg">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-200">{project.category}</p>
      </div>
    </div>
  );
}

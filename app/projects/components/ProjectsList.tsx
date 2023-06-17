import { fetchProjects } from "@/lib/github";
import ProjectCard from "./ProjectCard";

const ProjectsList = async () => {
  const projects = await fetchProjects();
  return (
    <ul className="flex flex-col w-full gap-3">
      {projects.map((project, index) => (
        <ProjectCard
          customDelay={ index / 10 + 0.3}
          project={project}
          key={project.name}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;
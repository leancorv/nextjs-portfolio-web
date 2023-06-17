import { Action } from "./Action";
import { AiOutlineHome } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AnimateComponent } from "@/utils/AnimateComponent";

const ProjectCard = ({ project, customDelay }) => {
  return (
    <AnimateComponent customDelay={customDelay}>
      <li
        key={project.name}
        className="bg-gray-50 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm border border-gray-200 dark:border-gray-500 rounded-lg transition ease-in-out duration-300"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex flex-1 items-center justify-start w-full">
            {project.icon && typeof project.icon === "string" ? (
              <>{project.icon}</>
            ) : (
              <>🌐</>
            )}
            <div className="min-w-0 flex-1 px-4">
              <h1 className="text-gray-600 dark:text-white text-lg font-bold">
                {project.name}
              </h1>
              {project.description && (
                <p className="flex items-center mt-1 text-gray-500 dark:text-gray-400 text-xs">
                  {project.description}
                </p>
              )}
            </div>
          </div>

          <div className="inline-flex items-center justify-end space-x-2 gap-2 w-full sm:w-auto mt-4 sm:mt-1">
            {project.homepage && (
              <Action
                href={project.homepage}
                ariaLabel={project.name + "homepage"}
              >
                <span className="sr-only">{project.name + "homepage"}</span>
                <AiOutlineHome size={20} />
              </Action>
            )}
            <Action href={project.url} ariaLabel={"GitHub Repository"}>
              <span className="sr-only">GitHub Repository</span>
              <FiGithub size={20} />
            </Action>
          </div>
        </div>
      </li>
    </AnimateComponent>
  );
};

export default ProjectCard;
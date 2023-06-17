import { AnimateComponent } from "@/utils/AnimateComponent";

const skills = [
  {
    title: "Lenguajes",
    techs: ["Dart","Kotlin", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frameworks y Librerias",
    techs: ["Flutter","JetPack Compose", "React", "Next.js", "Vue", "Django"],
  },
  {
    title: "Backend stack",
    techs: [
        "SQL",
        "Firebase",
        "MongoDB",
      "Node.js",
      "Express.js",
      "GraphQl",
      "Sequelize",
      "PostgreSQL",
    ],
  },
  {
    title: "Softwares and tools",
    techs: ["Photoshop", "AfterEffects", "Premiere", "Figma",],
  },
  {
    title: "Metodologias agiles",
    techs: ["SCRUM","KanBan"],
  },
];

const SkillsAndTools = () => {
  return (
    <AnimateComponent customClassName="w-full flex flex-col gap-5 mb-8">
      <div>
        <h2 className="font-bold text-2xl md:text-2xl tracking-tight text-black dark:text-white text-start">
          Habilidades y herramientas
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-400">
          Estas son las herramientas que suelo utilizar para trabajar, desde
          lenguajes de programación hasta bibliotecas y herramientas específicas
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 mt-3">
        {skills.map(({ title, techs }) => (
          <div key={title}>
            <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-black dark:text-white text-start">
              {title}
            </h3>

            <div className="flex items-center flex-wrap gap-3 mb-5">
              {techs.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimateComponent>
  );
};

export default SkillsAndTools;
import { AnimateComponent } from "@/utils/AnimateComponent";

const skills = [
  {
    title: "☁️ Cloud & Infrastructure",
    techs: ["Docker", "Terraform", "AWS (Learning)", "Linux", "Firebase", "Google IT Support Certified"],
  },
  {
    title: "👨‍💻 Lenguajes & Scripting",
    techs: ["Python", "Bash", "Java", "JavaScript", "TypeScript", "Dart", "Kotlin"],
  },
  {
    title: "🚀 Frameworks & Librerías",
    techs: ["Next.js", "React", "Node.js", "Flutter", "Django", "Express.js"],
  },
  {
    title: "🗄️ Backend Stack",
    techs: ["PostgreSQL", "MongoDB", "SQL", "GraphQL", "Sequelize"],
  },
  {
    title: "🛠️ Software & Tools",
    techs: ["Git", "GitHub Actions", "Figma", "Photoshop"],
  },
  {
    title: "🤝 Metodologías",
    techs: ["SCRUM", "KanBan"],
  },
];

const SkillsAndTools = () => {
  return (
    <AnimateComponent customClassName="w-full flex flex-col gap-5 mb-8">

      <div className="flex flex-col items-start gap-3 mt-3">
        {skills.map(({ title, techs }) => (
          <div key={title}>
            <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-black dark:text-white text-start">
              {title}
            </h3>

            <div className="flex items-center flex-wrap gap-3 mb-5">
              {techs.map((tech) => (
                <p key={tech} className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20 text-sm font-medium">
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimateComponent>
  );
};

export default SkillsAndTools;
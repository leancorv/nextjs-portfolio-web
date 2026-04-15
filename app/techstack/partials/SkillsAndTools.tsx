import { AnimateComponent } from "@/utils/AnimateComponent";

const skills = [
  {
    title: "📊 Data & Analysis",
    techs: ["Pandas", "NumPy", "SQL", "Streamlit", "Matplotlib", "Jupyter Notebooks"],
  },
  {
    title: "☁️ Cloud & Infrastructure",
    techs: ["Google Cloud","Docker", "Terraform", "AWS", "CI/CD"],
  },
  {
    title: "👨‍💻 Software Dev",
    techs: ["Python", "Bash", "Java", "JavaScript", "TypeScript", "React", "Next.js"],
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
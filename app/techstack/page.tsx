import { AnimateComponent } from "@/utils/AnimateComponent";
import SkillsAndTools from "./partials/SkillsAndTools";

const page = () => {
  return (
    <section className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <div className="w-full flex flex-col gap-6">
        <AnimateComponent>
          <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-1 text-black dark:text-white text-center">
            Tech Stack
          </h2>
        </AnimateComponent>
        <SkillsAndTools />
      </div>
    </section>
  );
};

export default page;
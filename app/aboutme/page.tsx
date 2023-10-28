import { AnimateComponent } from "@/utils/AnimateComponent";
import SkillsAndTools from "./partials/SkillsAndTools";

const page = () => {
  return (
    <section className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16 px-5">
      <div className="w-full flex flex-col gap-6">
        <AnimateComponent>
          <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-8 text-black dark:text-white text-center">
            Sobre mi
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hola! Mi nombre es Leandro Corvalan soy estudiante de Ciencias de la Computación y Desarrollador Mobile. Me encanta ser parte de proyectos y aprender nuevas tecnologias. Soy fan de aportar mi mejor esfuerzo, tener iniciativa y comunicación. En mis tiempos libres me gusta entrenar💪, ir al cine🍿, y leer📕 
          </p>
        </AnimateComponent>
        <SkillsAndTools />
      </div>
    </section>
  );
};

export default page;
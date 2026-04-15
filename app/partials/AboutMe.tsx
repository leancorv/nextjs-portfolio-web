import { AnimateComponent } from "@/utils/AnimateComponent";

export const AboutMe = () => {
  return (
    <AnimateComponent customClassName="w-full mb-16 mt-11">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Sobre mi 
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400">
        Soy estudiante de Ciencia de Datos en la UBA con una sólida formación en algoritmos y arquitectura de sistemas. Mi enfoque se centra en modelar sistemas reales y optimizar la toma de decisiones mediante el análisis de datos y la construcción de infraestructura escalable.
        <br />
        Cuento con experiencia práctica en Python, SQL y entornos containerizados, buscando optimizar procesos mediante la automatización y el modelado estadístico.
        <br />
        Mi objetivo es evolucionar hacia el ecosistema MLOps, uniendo la ingeniería de software con la ciencia de datos para crear soluciones de alto impacto.
      </p>
    </AnimateComponent>
  );
};
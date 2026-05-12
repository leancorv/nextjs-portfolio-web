import { AnimateComponent } from "@/utils/AnimateComponent";

export const AboutMe = () => {
  return (
    <AnimateComponent customClassName="w-full mb-16 mt-11">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Sobre mi 
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400">
        Soy estudiante de Ciencias de Datos en la UBA con una sólida formación en algoritmos y arquitectura de sistemas. Mi enfoque se centra en modelar sistemas reales y optimizar la toma de decisiones mediante el análisis de datos y la construcción de infraestructura escalable.
        <br />
        Cuento con experiencia práctica en Python, SQL y entornos containerizados, buscando optimizar procesos mediante la automatización y el modelado estadístico.
        <br />
        Me enfoco en unir la ingeniería de software con la Ciencia de Datos para crear productos de alto impacto, optimizando procesos mediante la automatización y la inteligencia artificial en entornos escalables
      </p>
    </AnimateComponent>
  );
};
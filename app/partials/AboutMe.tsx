import { AnimateComponent } from "@/utils/AnimateComponent";

export const AboutMe = () => {
  return (
    <AnimateComponent customClassName="w-full mb-16 mt-11">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Sobre mi 
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400">
        Soy estudiante de Licenciatura en Ciencias de la Computación en la UBA y estoy orientando mi carrera profesional hacia la cultura DevOps y el ecosistema Cloud. 
        Me apasiona la intersección entre el desarrollo de software y la infraestructura, enfocándome en la automatización, containerización y el despliegue de soluciones escalables.
        <br />
        Actualmente dedico mi formación a dominar herramientas como Docker, Terraform y AWS, aplicando la rigurosidad académica de mi formación universitaria para resolver problemas complejos de infraestructura
      </p>
    </AnimateComponent>
  );
};
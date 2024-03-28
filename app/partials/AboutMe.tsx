import { AnimateComponent } from "@/utils/AnimateComponent";

export const AboutMe = () => {
  return (
    <AnimateComponent customClassName="w-full mb-16 mt-11">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Sobre mi 
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400">
        Soy Software Developer y estudiante de Ciencias de la Computación.📱
        Estoy en la búsqueda de desarrollar mi carrera profesional y hacer lo que amo: La tecnología y la programación.🚀
        Siempre con muchas ganas de aprender, desarrollarme, sobrepasar expectativas, trabajar en equipo y apuntar hacia el futuro.✨
        <br></br>
        <br></br>
        Skills/Intereses: JavaScript, TypeScript, ReactJS, Java, Flutter, Kotlin, Node.js, MongoDB, HTML, CSS, Git, Firebase.
      </p>
    </AnimateComponent>
  );
};
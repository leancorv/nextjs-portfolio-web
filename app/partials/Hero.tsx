"use client";
import { AnimateComponent } from "@/utils/AnimateComponent";
import Image from "next/image";
import { BsDownload, BsPhone } from "react-icons/bs";

const items = [

  {
    icon: <BsPhone size={20} />,
    href: "/#contact",
    title: "Hablemos!",
  },
  {
    icon: <BsDownload size={20} />,
    href: "https://drive.google.com/file/d/1cenuob1RvCD6WfxY4VLwzjL9IuwuFkqA/view",
    title: "CV",
    external: true,
  },
];

export const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4 w-full">
        <div className="relative h-[20rem] rounded-3xl p-10 flex flex-col gap-16 bg-cover bg-center transition-all duration-500 border border-blue-400 dark:border-blue-500 shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)] bg-[url('/gradient-bg.jpg')] dark:bg-[url('/gradient-bg-dark.jpg')] overflow-hidden">
          <AnimateComponent customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
            <h1 className="font-bold text-4xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-black mx-auto lg:mx-0">
              Leandro Corvalan
            </h1>

            <h2 className="flex items-center gap-2 text-3xl lg:text-4xl text-gray-800  mb-8 mx-auto lg:mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
              <span className="font-semibold tracking-tight text-base">Software Developer</span>
              | <span className="text-base">Cloud & MLOps Enthusiast</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </h2>

            <p className="w-full text-base text-center lg:text-start mb-5 lg:mb-0 text-gray-800 dark:text-gray-800 mx-auto lg:mx-0">
              Estudiante de Ciencia de Datos (UBA) enfocado en el desarrollo de software y arquitecturas de datos para resolver problemas complejos.
            </p>
          </AnimateComponent>
        </div>
        <div className="h-[20rem] rounded-3xl p-8 bg-[url('/leancorvdev.jpg')] bg-cover bg-center" />
      </section>
    </>
  );
};
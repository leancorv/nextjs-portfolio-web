import Image from "next/image";
import { AnimateComponent } from "@/utils/AnimateComponent";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

const lastProjects = [
  {
    image:
      "https://i.postimg.cc/mDZQ9F98/My-Movies-App.png",
    title: "MyMovies App",
    repo: "https://github.com/leancorv/mymovies",
    link: "https://github.com/leancorv/mymovies",
    description:
      "Aplicación de Películas. Desarrollada en Flutter, con arquitectura limpia. Disponible en GooglePlay",
  },
  {
    image:
      "https://raw.githubusercontent.com/leancorv/nextjs-spotify/main/public/screenshots/nextjs-spotify-searching.png",
    title: "Spotify Clone Web App",
    repo: "https://github.com/leancorv/nextjs-spotify",
    link: "https://nextjs-spotify-rho.vercel.app/",
    description:
    "Spotify Clone (Next.js, Spotify API, NextAuth, Tailwind CSS, Recoil)",
  },
];

const myGithub = "https://github.com/leancorv";

const LastProjects = () => {
  return (
    <AnimateComponent customClassName="w-full flex flex-col justify-center text-center lg:items-start mb-16">
      <h2 className="font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start">
        Ultimos Proyectos
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-400 mb-10 text-start">
        Lo último que estuve trabajando. Ver más en mi {""}
        <a
          href={myGithub}
          aria-label="github"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white hover:underline transition-all ease"
        >
          GitHub
        </a>
        .
      </p>

      <ul className="flex flex-col lg:flex-row gap-6 w-[80%] mx-auto lg:w-full">
        {lastProjects.map((p) => (
          <li
            key={p.title}
            className=" w-full bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 bg-opacity-20 backdrop-filter backdrop-blur-sm  rounded-xl dark:border-gray-700 border border-gray-300"
          >
            <div className="relative rounded-[15px] p-6">
              <div className="space-y-3">
                <div className="w-[200px] lg:w-[400px] flex flex-col items-center justify-center mx-auto h-[300px]">
                  <Image
                    width={400}
                    height={400}
                    src={p.image}
                    alt={p.title}
                    className="rounded mx-auto"
                  />
                </div>
                <p className="text-3xl dark:text-gray-50 font-semibold text-slate-800">
                  {p.title}
                </p>
                <p className="font-md text-slate-500">{p.description}</p>
              </div>
            </div>
            <div className="flex mx-auto items-center justify-center mb-6 gap-6">
              <Link
                href={p.repo}
                target="_blank"
                aria-label={p.title}
                title={p.title}
                className="group w-10 h-15 bg-dark rounded-lg bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-10 ring-1 ring-gray-200 hover:ring-gray-200 dark:ring-gray-700 dark:hover:ring-gray-600  group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-200 flex items-center justify-center transition ease"
              >
                <AiFillGithub className="w-full h-full"/>
              </Link>
              <Link
                href={p.link}
                target="_blank"
                className=" self-end w-10 h-15 bg-dark rounded-lg bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-10 ring-1 ring-gray-200 hover:ring-gray-200 dark:ring-gray-700 dark:hover:ring-gray-600  group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-200 flex items-center justify-center transition ease"
              >
                <AiOutlineLink className="w-full h-full"/>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </AnimateComponent>
  );
};

export default LastProjects;
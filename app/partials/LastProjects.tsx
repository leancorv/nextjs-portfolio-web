import Image from "next/image";
import { AnimateComponent } from "@/utils/AnimateComponent";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

const lastProjects = [
    {
    image:
      "https://i.postimg.cc/NjtmgwcV/bet-analyzer-ai.png",
    title: "BetAnalyzer AI",
    repo: "https://github.com/leancorv/bet-analyzer",
    link: "https://bet-analyzer-481449893584.us-central1.run.app/",
    description:
      "Agente de IA que analiza partidos de fútbol cruzando estadísticas reales",
  },
  {
    image:
      "https://i.postimg.cc/nLnR7vQG/Anatomia-Gol-Messi.png",
    title: "Anatomía Gol Messi",
    repo: "https://github.com/leancorv/AnatomiaGolMessi",
    link: "https://anatomiagolmessi.streamlit.app/",
    description:
      "Análisis exploratorio de datos de los goles de Messi",
  },
  {
    image:
      "https://i.postimg.cc/9Xk9bhx5/Cada-Dia-Con-Messi.png",
    title: "Cada Día con Messi",
    repo: "https://github.com/leancorv/CalendarioGolesMessi",
    link: "https://calendario-goles-messi.vercel.app/",
    description:
    "Calendario de Goles. Proyecto Vibe-Coding",
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

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[80%] mx-auto lg:w-full">
        {lastProjects.map((p) => (
          <li
            key={p.title}
            className="w-full h-full bg-gray-50 dark:bg-gray-900 dark:bg-opacity-20 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl border border-gray-400 dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image
                width={500}
                height={300}
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col p-6">
              <p className="text-xl lg:text-2xl dark:text-gray-50 font-semibold text-slate-800 line-clamp-2 mb-3">
                {p.title}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex-1 line-clamp-3 mb-4">
                {p.description}
              </p>
              <div className="flex items-center justify-center gap-6 mt-auto pt-4 border-t border-gray-400 dark:border-slate-700">
                <Link
                  href={p.link}
                  target="_blank"
                  className="group w-10 h-10 bg-gray-700 dark:bg-gray-300 text-white dark:text-black ring-1 ring-gray-600 dark:ring-gray-400 hover:ring-gray-800 dark:hover:ring-gray-500 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                >
                  <AiOutlineLink className="w-5 h-5"/>
                </Link>
                <Link
                  href={p.repo}
                  target="_blank"
                  aria-label={p.title}
                  title={p.title}
                  className="group w-10 h-10 bg-gray-700 dark:bg-gray-300 text-white dark:text-black ring-1 ring-gray-600 dark:ring-gray-400 hover:ring-gray-800 dark:hover:ring-gray-500 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                >
                  <AiFillGithub className="w-5 h-5"/>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </AnimateComponent>
  );
};

export default LastProjects;
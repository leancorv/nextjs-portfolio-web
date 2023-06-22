import Link from "next/link";
import { AnimateComponent } from "../../utils/AnimateComponent";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { RiFilePaperFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="w-full lg:min-w-xs lg:max-w-screen-md flex flex-col justify-center items-center mx-auto">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <AnimateComponent customClassName="w-full max-w-2xl grid place-items-center grid-cols-3 gap-1 lg:gap-4 pb-8 sm:grid-cols-3 mx-3">
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                clipRule="evenodd"
              />
            </svg>
            Inicio
          </Link>

          {/* <Link
            href="/sobremi"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
            Sobre mi
          </Link> */}

          <Link
            href="/proyectos"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z"
                clipRule="evenodd"
              />
            </svg>
            Proyectos
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <a
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
            target="_blank"
            rel="noreferrer"
            href={"https://github.com/leancorv"}
          >
            <AiFillGithub className="w-5 h-5" />
            Github
          </a>
          <a
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
            target="_blank"
            rel="noreferrer"
            href={"https://www.linkedin.com/in/leancorv/"}
          >
            <AiFillLinkedin className="w-5 h-5" />
            Linkedin
          </a>
        </div>

        <div className="flex flex-col space-y-4">

          <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                clipRule="evenodd"
              />
            </svg>
            Contacto
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1ulSGOQEaTJj_kjjw7sta3Jb3bYn2LTXz/view"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600 transition ease"
          >
            <RiFilePaperFill className="w-5 h-5" />
            Curriculum
          </a>
        </div>
      </AnimateComponent>
    </footer>
  );
};
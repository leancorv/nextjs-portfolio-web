import { BiArchive, BiHomeAlt2 } from "react-icons/bi";
import { BsPerson, BsDownload } from "react-icons/bs";
import { AnimateComponent } from "@/utils/AnimateComponent";
import MobileNav from "./MobileNav";
import NavItem from "./NavItem";
import ThemeButton from "./ThemeButton";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const items = [
  {
    icon: <BiHomeAlt2 size={20} />,
    href: "/",
    title: "Inicio",
  },
  {
    icon: <BiArchive size={20} />,
    href: "/projects",
    title: "Proyectos",
  },
  {
    icon: <BsPerson size={20} />,
    href: "/aboutme",
    title: "Sobre mi",
  },
  {
    icon: <BsDownload size={20} />,
    href: "https://drive.google.com/file/d/13dCnaFS_OoPAmZRLpa_-i4BsDjb6LguP/view",
    title: "Curriculum",
    external: true,
  },
  {
    icon: <AiFillGithub size={20} />,
    href: "https://github.com/leancorv",
    title: "Github",
    external: true,
  },
  {
    icon: <AiFillLinkedin size={20} />,
    href: "https://www.linkedin.com/in/leancorv/",
    title: "Linkedin",
    external: true,
  },
];

const Header = () => {
  return (
    <div className="w-full  lg:min-w-xs  backdrop-blur-sm lg:max-w-screen-lg rounded-b-3xl sticky top-0 flex flex-col justify-center items-center z-10 transition ease-in-out mx-auto">
      <nav className="w-full flex items-center justify-start lg:justify-between flex-row-reverse lg:flex-row relative border-gray-200 dark:border-gray-700 px-5 py-8 sm:pb-8 text-gray-900 bg-opacity-60 dark:text-gray-100 gap-5 lg:gap-0">
        <AnimateComponent>
          <div className="flex gap-2">
            <div className="lg:flex gap-2 hidden">
              {items.map((item) => (
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                  external={item.external}
                />
              ))}
            </div>
            <MobileNav items={items} />
          </div>
        </AnimateComponent>
        <ThemeButton />
      </nav>
    </div>
  );
};

export default Header;
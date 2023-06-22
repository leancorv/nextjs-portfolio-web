import { AnimateComponent } from "@/utils/AnimateComponent";
import Link from "next/link";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsMailbox2,
  BsTelegram,
} from "react-icons/bs";

const contactItems = [
  {
    name: "Correo",
    value: "leancorv@gmail.com",
    href: "mailto:leancorv@gmail.com",
    blank: true,
    icon: <BsMailbox2 size={30} />,
  },
  {
    name: "Celular",
    value: "+5491132782801",
    href: "https://wa.link/97yd31",
    blank: true,
    icon: <BsFillTelephoneFill size={30} />,
  },
  {
    name: "Linkedin",
    value: "Leandro Corvalan",
    href: "https://www.linkedin.com/in/leancorv/",
    blank: true,
    icon: <BsLinkedin size={30} />,
  },
  {
    name: "Telegram",
    value: "@leancorv",
    href: "https://t.me/leancorv",
    blank: true,
    icon: <BsTelegram size={30} />,
  },
];

export const ContactMe = () => {
  return (
    <AnimateComponent>
      <h2
        id="contact"
        className="font-bold text-2xl md:text-2xl tracking-tight text-black dark:text-white text-start"
      >
        Contacto
      </h2>
      <p className="text-base text-gray-600 dark:text-gray-400">
        Trabajemos juntos!
      </p>
      <div className="w-full flex justify-between items-center flex-wrap flex-col lg:flex-row gap-6 my-10">
        {contactItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            rel="noreferrer"
            aria-label={item.value}
            title={item.name}
            target={item.blank && "_blank"}
            className="group w-full"
          >
            <div className="flex gap-6 items-center  rounded-3xl border border-gray-200 dark:border-gray-800   bg-gray-50 dark:bg-gray-900 p-4 hover:border-gray-700 dark:hover:border-gray-300  sm:p-6 transition ease">
              {item.icon}
              <div>
                <h6 className="font-bold text-1xl tracking-tight text-black dark:text-white text-start">
                  {item.name}
                </h6>
                <p className="text-base  text-gray-600 dark:text-gray-400">
                  {item.value}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AnimateComponent>
  );
};
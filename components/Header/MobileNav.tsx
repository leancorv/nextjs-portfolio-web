"use client";
import { Menu, Transition } from "@headlessui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";
import Link from "next/link";

const MobileNav = ({ items }) => {
  return (
    <Menu as="div" className="relative lg:hidden inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={clsx(
              "group w-9 h-9 text-gray-600 rounded-lg  bg-white bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-80 ring-1 ring-gray-200 hover:ring-gray-200 dark:ring-gray-700 dark:hover:ring-gray-600  group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-200 flex items-center justify-center transition ease"
            )}
          >
            <RxHamburgerMenu />
          </Menu.Button>

          <Transition
            appear={true}
            enter="transition ease-in-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            show={open}
          >
            <Menu.Items
              className={clsx(
                "absolute w-[calc(100vw-1rem)] sm:w-56 mt-2 bg-gray-50 bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90  backdrop-filter backdrop-blur-md border border-gray-200 dark:border-gray-500 rounded-md  divide-y divide-gray-100 dark:divide-gray-800 focus:outline-none",
                "origin-top-right -right-5"
              )}
            >
              {items.map((item, index) => (
                <div className="py-2" key={index}>
                  <Menu.Item key={index}>
                    {({ active }) => {
                      return (
                        <Link
                          className={clsx(
                            "flex items-center  px-4 py-2 gap-2 text-sm tracking-wide cursor-pointer transition-all",
                            active
                              ? " text-gray-900 dark:text-gray-50"
                              : "text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                          )}
                          href={item.href}
                        >
                          {item.icon}
                          {item.title}
                        </Link>
                      );
                    }}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MobileNav;
import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  ariaLabel: string;
}

export function Action({ children, href, ariaLabel }: Props): JSX.Element {
  return (
    <Link
      aria-label={ariaLabel}
      rel="noopener noreferrer"
      title={ariaLabel}
      target="_blank"
      className={clsx(
        "relative inline-flex justify-center w-full sm:w-10 h-10 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-700 dark:hover:text-white border border-gray-200 dark:border-gray-500 rounded-lg text-sm font-medium default-transition default-focus"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
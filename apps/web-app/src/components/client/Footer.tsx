"use client";

import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HomeIcon,
  StarIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SolidHomeIcon,
  StarIcon as SolidStarIcon,
  InformationCircleIcon as SolidInformationCircleIcon,
} from "@heroicons/react/24/solid";

const links = [
  {
    href: "/",
    InactiveIcon: HomeIcon,
    ActiveIcon: SolidHomeIcon,
  },
  {
    href: "/saved",
    InactiveIcon: StarIcon,
    ActiveIcon: SolidStarIcon,
  },
  {
    href: "/about",
    InactiveIcon: InformationCircleIcon,
    ActiveIcon: SolidInformationCircleIcon,
  },
];

export const Footer: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 w-full">
      <nav className="container bg-white flex justify-around items-center border-t">
        {links.map(({ href, InactiveIcon, ActiveIcon }) => (
          <Link key={href} href={href} passHref className="px-4 py-6">
            {href === pathname ? (
              <ActiveIcon className="size-6 text-primary" />
            ) : (
              <InactiveIcon className="size-6 text-primary" />
            )}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

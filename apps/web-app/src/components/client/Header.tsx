import { FunctionComponent } from "react";
import { siteData } from "app-data/site-data";
import Link from "next/link";

export const Header: FunctionComponent = () => {
  return (
    <header className="fixed z-10 w-full bg-primary text-white">
      <div className="container h-16 flex justify-center items-center">
        <Link href="/">
          <h1 className="text-2xl font-medium">{siteData.name}</h1>
        </Link>
      </div>
    </header>
  );
};

"use client";
import Link from "next/link";
import { ILink } from "./domain/interfaces/navbar-interface";
import BubbleTittle from "../BubbleTittle/BubbleTittle";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCurrentPage } from "./store/store";
import usePage from "./hooks/usePage";

interface ILinkProps {
  link: ILink;
  pathname: string;
}

function Li({ link, pathname }: ILinkProps): JSX.Element {
  const { liRef, handleChangeCurrentPage } = usePage(link.href, pathname);

  return (
    <li
      className="relative group h-12 flex justify-center"
      ref={liRef}
      onClick={() => handleChangeCurrentPage(liRef.current?.offsetTop ?? 0)}
    >
      <BubbleTittle
        name={link.name}
        className="h-full left-[100%] flex items-center justify-center"
      />
      <Link
        href={link.href}
        className="flex items-center justify-center w-full"
      >
        <Image
          src={link.icon}
          alt={`Icon ${link.icon}`}
          width={30}
          height={30}
        />
      </Link>
    </li>
  );
}

interface ILinksProps {
  links: ILink[];
  pathname: string;
}

function Links({ links, pathname }: ILinksProps): JSX.Element[] {
  return links.map((link) => (
    <Li key={link.id} link={link} pathname={pathname} />
  ));
}

interface INavbarProps {
  links: ILink[];
}

export default function Navbar({ links }: INavbarProps): JSX.Element {
  const pathname = usePathname();
  const { currentPage } = useCurrentPage();

  return (
    <nav className="w-full">
      <ul className="relative flex flex-col gap-6">
        <li
          className="absolute z-10 bg-[#F9A109] h-[48px] w-[6px] rounded-r-md rounded-b-md transition-all"
          style={{
            transform: `translateY(${currentPage}px)`,
            opacity: `${currentPage === "loading" ? "0" : "1"}`,
          }}
        />
        <Links pathname={pathname} links={links} />
      </ul>
    </nav>
  );
}

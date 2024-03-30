import Link from "next/link";
import { ILink } from "./domain/interfaces/navbar-interface";
import BubbleTittle from "../BubbleTittle/BubbleTittle";

interface ILinkProps {
  link: ILink;
}

function Li({ link }: ILinkProps): JSX.Element {
  return (
    <li className="relative">
      <BubbleTittle
        name={link.name}
        className="h-full left-[100%] flex items-center justify-center"
      />
      <Link
        href={link.href}
        className="flex items-center justify-center bg-slate-500"
      >
        {link.name}
      </Link>
    </li>
  );
}

interface ILinksProps {
  links: ILink[];
}

function Links({ links }: ILinksProps): JSX.Element[] {
  return links.map((link) => <Li key={link.id} link={link} />);
}

interface INavbarProps {
  links: ILink[];
}

export default function Navbar({ links }: INavbarProps): JSX.Element {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-4">
        <Links links={links} />
      </ul>
    </nav>
  );
}

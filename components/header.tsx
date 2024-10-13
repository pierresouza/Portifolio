import { ModeToggle } from "../components/ModeToggle";
import Stars from "../public/stars.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between px-20 py-4">
      <div className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:text-gray-500">
        <Image
          src={Stars}
          className="fill-black dark:fill-white"
          alt="Estrelas"
          width={22}
          height={22}
        />
        <span>Pierre souza</span>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              className="text-lg transition-all duration-300 ease-in-out hover:scale-105"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-lg transition-all duration-300 ease-in-out hover:scale-105"
              href="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="text-lg transition-all duration-300 ease-in-out hover:scale-105"
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="border-r border-black dark:border-white">&nbsp;</li>
          <ModeToggle />
          <Button variant="outline" className="bg-black dark:bg-white">
            <Link
              href="/Pierre_Souza_Resume.pdf"
              download="Pierre_Souza_Resume.pdf"
              target="_blank"
              className="text-white dark:text-black"
            >
              Download CV
            </Link>
          </Button>
        </ul>
      </div>
    </header>
  );
};

export default Header;

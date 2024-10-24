"use client";
import { ModeToggle } from "../components/ModeToggle";
import Stars from "../public/stars.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaList } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-around py-4">
      <Button className="md:hidden" variant={"outline"}>
        <FaList size={24} />
      </Button>
      <Link href="/">
        <div className="flex cursor-pointer items-center gap-2 transition-all duration-300 ease-in-out hover:text-gray-500">
          <Image
            src={Stars}
            className="fill-black dark:fill-white"
            alt="Estrelas"
            width={22}
            height={22}
          />
          <span className="text-sm md:text-lg">Pierre Souza</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <ul className="flex items-center justify-center gap-4">
          <div className="hidden gap-8 md:flex">
            <li className="text-lg transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/about">About</Link>{" "}
              {/* Correção: usar Link do Next.js */}
            </li>
            <li className="text-lg transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/projects">Projetos</Link>{" "}
              {/* Correção: usar Link do Next.js */}
            </li>
            <li className="text-lg transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/experience">Experiência</Link>{" "}
              {/* Correção: usar Link do Next.js */}
            </li>
          </div>
          <li className="hidden border-r border-black dark:border-white md:flex">
            &nbsp;
          </li>
          <ModeToggle />
          <Button
            size={"sm"}
            variant="outline"
            className="bg-black dark:bg-white"
          >
            <Link
              href="/Pierre_Souza_Resume.pdf"
              target="_blank"
              download={true}
              className="text-sm text-white dark:text-black md:text-base"
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

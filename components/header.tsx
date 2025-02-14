"use client";
import { ModeToggle } from "../components/ModeToggle";
import Stars from "../public/stars.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaList } from "react-icons/fa6";
import Link from "next/link";
import Swal from "sweetalert2";
import { MdFileDownload } from "react-icons/md";
import "animate.css";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  return (
    <header className="mb-4 flex h-[10vh] items-center justify-evenly border-b border-black/40 dark:border-white/40 md:justify-around">
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="dar:hover:bg-gray-100 border border-black transition-all duration-500 ease-in-out hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <FaList className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/">Página Inicial</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/projects">Projetos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/about">Sobre</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/experience">Experiência</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Link href="/">
        <div className="flex cursor-pointer items-center gap-2 transition-all duration-300 ease-in-out hover:text-gray-500">
          <Image
            src={Stars}
            className="fill-black dark:fill-white"
            alt="Estrelas"
            width={22}
            height={22}
          />
          <span className="text-md md:text-lg">Pierre Souza</span>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <ul className="flex items-center justify-center gap-4">
          <div className="hidden gap-8 md:flex">
            <li className="text-lg transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="text-lg transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/projects">Projetos</Link>
            </li>
            <li className="text-lg transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="text-lg transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="/experience">Experiência</Link>
            </li>
          </div>
          <li className="hidden border-r border-black dark:border-white md:flex">
            &nbsp;
          </li>
          <ModeToggle />
          <Button
            size={"sm"}
            variant="outline"
            className="bg-black p-2 flex items-center justify-center text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            onClick={() => {
              Swal.fire({
                title: "Baixe meu currículo",
                showCloseButton: true,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
                },

                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
                },
                html: `
                  <div class="flex flex-col justify-center items-center space-y-4">
                    <a
                      href="/Pierre Souza.pdf"
                      download="Pierre Souza.pdf"
                      class="block w-[250px] h-[50px] bg-black text-white font-bold text-center leading-[50px] rounded-md hover:bg-gray-800 transition-colors duration-300"
                    >
                      CV Português
                    </a>
                    <a
                      href="/Pierre Souza - resume.pdf"
                      download="Pierre Souza English.pdf"
                      class="block w-[250px] h-[50px] bg-black text-white font-bold text-center leading-[50px] rounded-md hover:bg-gray-800 transition-colors duration-300"
                    >
                      CV English
                    </a>
                  </div>
                `,
                showConfirmButton: false, // Remove o botão "OK"
                allowOutsideClick: true, // Permite fechar clicando fora do modal
              });
            }}
          >
            <MdFileDownload size={16} />
            CV
          </Button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
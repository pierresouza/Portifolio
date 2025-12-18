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
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Página Inicial" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/experience", label: "Experiência" },
];

const Header = () => {
  const pathname = usePathname();

  const handleDownloadCV = () => {
    Swal.fire({
      title: "Baixe meu currículo",
      showCloseButton: true,
      showClass: {
        popup: `animate__animated animate__fadeInUp animate__faster`,
      },
      hideClass: {
        popup: `animate__animated animate__fadeOutDown animate__faster`,
      },
      html: `
        <div class="flex flex-col justify-center items-center space-y-4">
          <a
            href="/Pierre_Souza.pdf"
            download="Pierre_Souza.pdf"
            class="block w-[250px] h-[50px] bg-black text-white font-bold text-center leading-[50px] rounded-md hover:bg-gray-800 transition-colors duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            CV Português
          </a>
          <a
            href="/Pierre_Souza - Resume.pdf"
            download="Pierre_Souza - Resume.pdf"
            class="block w-[250px] h-[50px] bg-black text-white font-bold text-center leading-[50px] rounded-md hover:bg-gray-800 transition-colors duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            CV English
          </a>
        </div>
      `,
      showConfirmButton: false,
      allowOutsideClick: true,
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile menu */}
        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-border"
                aria-label="Abrir menu"
              >
                <FaList className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Navegação</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Stars}
              alt="Logo estrelas"
              width={20}
              height={20}
              className="opacity-80"
            />
            <span className="text-sm font-semibold leading-none">
              Pierre Souza
            </span>
          </Link>
        </div>

        {/* Desktop brand */}
        <Link
          href="/"
          className="hidden items-center gap-2 font-semibold transition-colors hover:text-foreground/80 md:flex"
        >
          <Image src={Stars} alt="Logo estrelas" width={22} height={22} />
          <span className="text-base md:text-lg">Pierre Souza</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative font-medium transition-colors hover:text-foreground/90 ${
                      active
                        ? "text-foreground after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <div className="hidden h-6 w-px bg-border md:block" />
          <Button
            size="sm"
            variant="outline"
            onClick={handleDownloadCV}
            className="gap-2"
          >
            <MdFileDownload size={16} />
            <span className="hidden sm:inline">CV</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

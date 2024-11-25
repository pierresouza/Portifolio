"use client";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Profilephoto from "./../public/profile_photo.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-[85vh] flex-col items-center gap-4">
      <div className="flex h-full flex-col items-center justify-center gap-2 px-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-10 md:flex-row">
            <span className="flex flex-col justify-center gap-6">
              <p className="text-sm font-bold sm:text-sm md:text-lg lg:text-xl xl:text-3xl">
                Olá meu nome é Pierre Souza
              </p>
              <p className="max-w-screen-md text-justify text-sm sm:text-sm md:text-lg lg:text-xl">
                Sou desenvolvedor Front-End com 2 anos de experiência, meu
                objetivo é criar interfaces que proporcionem uma experiência de
                usuário incrível e funcional, utilizando as melhores práticas e
                ferramentas do mercado. Atualmente, estou envolvido em um
                projeto voluntário que me permite aprimorar minhas habilidades
                em desenvolvimento Front-End, incorporando tecnologias e
                frameworks sofisticados e profissionais.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 lg:flex-row">
                  <span className="flex items-center gap-2 text-xs sm:gap-4 sm:text-sm md:text-base">
                    <TfiLocationPin />
                    São Paulo, Brasil
                  </span>
                  <span className="flex max-w-64 text-nowrap rounded-full border border-green-400 bg-green-400/25 px-3 py-1 text-xs text-green-500 dark:border-green-300 dark:bg-green-300/25 dark:text-green-300 sm:text-sm md:max-w-72 md:text-base">
                    Disponível para novas oportunidades
                  </span>
                </div>
                <div className="flex h-12 items-center gap-4">
                  <Link
                    className="rounded-xl border border-gray-500 p-2 transition-all duration-500 ease-in-out hover:scale-125 dark:border-white"
                    target="_blank"
                    href="https://github.com/pierresouza"
                  >
                    <FiGithub size={24} title="Github" />
                  </Link>
                  <Link
                    className="rounded-xl border border-gray-500 p-2 transition-all duration-500 ease-in-out hover:scale-125 dark:border-white"
                    target="_blank"
                    href="https://x.com/Baronetee"
                  >
                    <FaSquareXTwitter size={24} title="Twitter" />
                  </Link>
                  <Link
                    className="rounded-xl border border-gray-500 p-2 transition-all duration-500 ease-in-out hover:scale-125 dark:border-white"
                    target="_blank"
                    href="https://www.linkedin.com/in/pierre-souza/"
                  >
                    <FaLinkedin size={24} title="Linkedin" />
                  </Link>
                </div>
              </div>
            </span>
            <div className="flex items-center justify-center md:w-2/4">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
                <Image
                  src={Profilephoto}
                  alt="foto de perfil"
                  className="rounded-full"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

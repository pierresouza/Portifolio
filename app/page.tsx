import Profilephoto from "./../public/profile_photo.jpeg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[85vh] flex-col items-center justify-center px-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-8 px-4 md:flex-row">
            <span className="flex flex-col justify-center gap-6">
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl">
                Olá meu nome é pierre Souza
              </p>
              <p className="max-w-screen-md text-justify font-serif text-xs italic sm:text-sm md:text-lg lg:text-xl">
                Como desenvolvedor Front-End com 2 anos de experiência, meu
                objetivo é criar interfaces que proporcionem uma experiência de
                usuário incrível e funcional, utilizando as melhores práticas e
                ferramentas do mercado. Atualmente, estou envolvido em um
                projeto voluntário que me permite aprimorar minhas habilidades
                em desenvolvimento Front-End, incorporando tecnologias e
                frameworks sofisticados e profissionais, como{" "}
                <strong className="md:text-md max-w-screen-sm text-justify font-serif text-xs italic sm:text-sm">
                  Axios, Tailwind CSS, React, Nextjs e TypeScript.
                </strong>
              </p>
            </span>
            <div className="flex w-full items-center justify-center">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96">
                <Image
                  src={Profilephoto}
                  alt="Profile photo"
                  className="rounded-full"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-4">
              <TfiLocationPin />
              São Paulo, Brasil
            </span>
            <span className="flex items-center gap-4">
              <span className="h-[10px] w-[10px] rounded-full bg-green-400">
                &nbsp;
              </span>
              Disponível para novas oportunidades
            </span>
          </div>
          <div className="flex h-12 items-center gap-4">
            <Link
              className="transition-all duration-500 ease-in-out hover:scale-125"
              target="_blank"
              href="https://github.com/pierresouza"
            >
              <FiGithub size={24} title="Github" />
            </Link>
            <Link
              className="transition-all duration-500 ease-in-out hover:scale-125"
              target="_blank"
              href="https://x.com/Baronetee"
            >
              <FaSquareXTwitter size={24} title="Twitter" />
            </Link>
            <Link
              className="transition-all duration-500 ease-in-out hover:scale-125"
              target="_blank"
              href="https://www.linkedin.com/in/pierre-souza/"
            >
              <FaLinkedin size={24} title="Linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

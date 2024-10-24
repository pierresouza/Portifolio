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
    <div className="flex flex-col gap-8">
      <div className="flex h-[80vh] flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="flex gap-12">
            <span className="flex flex-col justify-center gap-8">
              <p className="max-w-screen-sm text-[10px] sm:text-sm md:text-lg lg:text-4xl">
                Olá meu nome é pierre Souza e construo páginas web
              </p>
              <p className="min-w max-w-screen-sm text-justify text-[10px] sm:text-sm md:text-lg lg:text-xl">
                Como desenvolvedor Front-End com 2 anos de experiência, meu
                objetivo é criar interfaces que proporcionem uma experiência de
                usuário incrível e funcional, utilizando as melhores práticas e
                ferramentas do mercado. Atualmente, estou envolvido em um
                projeto voluntário que me permite aprimorar minhas habilidades
                em desenvolvimento Front-End, incorporando tecnologias e
                frameworks sofisticados e profissionais, como Axios, Tailwind
                CSS, React, Nextjs e TypeScript.
              </p>
            </span>
            <Image
              src={Profilephoto}
              alt=""
              width={384}
              height={384}
              className="min-w-12 max-w-96 rounded-full"
            />
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
        <Footer />
      </div>
    </div>
  );
}

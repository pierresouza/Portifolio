import Profilephoto from "./../public/profile_photo.jpeg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiLocationPin } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Footer from "../components/footer";
import Header from "../components/header";
import About from "../components/about";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col gap-8">
          <div className="flex gap-12">
            <span className="flex flex-col gap-8">
              <p className="max-w-screen-sm text-5xl">
                Olá meu nome é pierre Souza e construo páginas web
              </p>
              <p className="text-md max-w-screen-sm text-justify">
                Como desenvolvedor Front-End com 2 anos de experiência, meu
                objetivo é criar interfaces que proporcionem uma experiência de
                usuário incrível e funcional, utilizando as melhores práticas e
                ferramentas do mercado. Atualmente, estou envolvido em um
                projeto voluntário que me permite aprimorar minhas habilidades
                em desenvolvimento Front-End, incorporando tecnologias e
                frameworks sofisticados e profissionais, como Axios, Tailwind
                CSS, React e TypeScript.
              </p>
            </span>
            <Image
              src={Profilephoto}
              alt=""
              width={384}
              height={384}
              className="w-96 rounded-full"
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
          <div className="flex gap-6">
            <FiGithub size={24} />
            <FaSquareXTwitter size={24} />
            <FaLinkedin size={24} />
          </div>
        </div>
        <About />
        <Footer />
      </div>
    </div>
  );
}

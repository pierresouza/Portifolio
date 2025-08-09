import { StaticImageData } from "next/image";
import DescoInvest from "../../public/DescoInvest.png";
import CapSyncLogo from "../../public/CapSync.jpg";
import BiocidadeLogo from "../../public/Biocidade.jpg";
import Portifolio from "../../public/portifolio.png";
import RocketVisuals from "../../public/RocketVisuals.png";

interface ProjectsProps {
  repoURL: string;
  deployURL?: string;
  name: string;
  description?: string;
  image: StaticImageData | string;
  Techs: string[];
}

interface Projects {
  Project: ProjectsProps[];
}

export const ProjectsMock: Projects = {
  Project: [
    {
      repoURL: "https://github.com/Projeto-Integrador-BioCidade",
      deployURL: "https://main--biocidade.netlify.app/",
      image: BiocidadeLogo,
      description:
        "Biocidade é uma plataforma de mapeamento de áreas verdes e de preservação ambiental, desenvolvida como Projeto Integrador do curso de Desenvolvimento Fullstack javascript Da Generation Brasil.",
      name: "Biocidade",
      Techs: ["React", "Node.js", "MySQL", "TypeScript"],
    },
    {
      repoURL: "https://github.com/Capivara-s-Team",
      deployURL: "",
      image: CapSyncLogo,
      description:
        "Capsync é uma plataforma de gerenciamento de projetos para facilitar a comunicação e organização de equipes, desenvolvida durante o Primeiro Hackathon da Comunidade Bichinhos da TI.",
      name: "CapSync",
      Techs: ["React", "Node.js", "MongoDB", "TypeScript"],
    },
    {
      repoURL: "https://github.com/DescoInvest",
      deployURL: "https://desco-invest-front.vercel.app/",
      image: DescoInvest,
      description:
        "Desco Invest é uma plataforma de investimentos que democratiza o acesso ao conhecimento sobre finanças, utilizando inteligência artificial para tornar o aprendizado mais acessível e prático.",
      name: "Desco Invest",
      Techs: ["React", "Node.js", "MongoDB", "TypeScript"],
    },
    {
      repoURL: "https://github.com/pierresouza/Portifolio",
      deployURL: "https://pierre-souza.vercel.app/",
      image: Portifolio,
      description:
        "Portfólio desenvolvido com Next.js, Tailwind CSS e Typescript, com o intuito de apresentar meus projetos e habilidades como desenvolvedor Front-End.",
      name: "Portfólio",
      Techs: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn"],
    },
    {
      repoURL: "https://github.com/pierresouza/rocketvisual",
      deployURL: "https://visualrocket.vercel.app/",
      image: RocketVisuals,
      description:
        "Rocket Visuals é uma plataforma de visualização de dados que utiliza inteligência artificial para gerar insights a partir de conjuntos de dados complexos.",
      name: "Rocket Visuals",
      Techs: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Radix UI"],
    }
  ]
};

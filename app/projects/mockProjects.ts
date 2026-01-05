import { StaticImageData } from "next/image";
import DescoInvest from "../../public/DescoInvest.png";
import CapSyncLogo from "../../public/CapSync.jpg";
import BiocidadeLogo from "../../public/Biocidade.jpg";
import Portifolio from "../../public/portifolio.png";
import RocketVisuals from "../../public/RocketVisuals.png";
import seikopartners from "../../public/seikopartners.png";
import powermanutencao from "../../public/powermanutencao.png";

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
      repoURL: "https://github.com/Capivara-s-Team/CapSync-Front-End",
      deployURL: "https://capsync.netlify.app/",
      image: CapSyncLogo,
      description:
        "Capsync é uma plataforma de gerenciamento de projetos para facilitar a comunicação e organização de equipes, desenvolvida durante o Primeiro Hackathon da Comunidade Bichinhos da TI.",
      name: "CapSync",
      Techs: ["React", "Node.js", "MongoDB", "TypeScript"],
    },
    {
      repoURL: "https://github.com/pierresouza/DescoInvest-front",
      deployURL: "https://descoinvest.netlify.app/",
      image: DescoInvest,
      description:
        "Desco Invest é uma plataforma de investimentos que democratiza o acesso ao conhecimento sobre finanças, utilizando inteligência artificial para tornar o aprendizado mais acessível e prático.",
      name: "Desco Invest",
      Techs: ["React", "Node.js", "MongoDB", "TypeScript"],
    },
    {
      repoURL: "https://github.com/pierresouza/Portifolio",
      deployURL: "https://pierresouza.software/",
      image: Portifolio,
      description:
        "Portfólio desenvolvido com Next.js, Tailwind CSS e Typescript, com o intuito de apresentar meus projetos e habilidades como desenvolvedor Front-End.",
      name: "Portfólio",
      Techs: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn"],
    },
  ],
};

export const freelanceProject: ProjectsProps[] = [
  {
    repoURL: "",
    deployURL: "https://rocket-visuals.netlify.app/",
    image: RocketVisuals,
    description:
      "Rocket Visuals é uma produtora de vídeos especializada em VFX e motion design, transformando ideias em experiências visuais impactantes que elevam a comunicação e geram resultados reais para marcas e empresas.",
    name: "Rocket Visuals",
    Techs: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Radix UI"],
  },
  {
    repoURL: "",
    deployURL: "https://seikopartners.com.br/",
    image: seikopartners,
    description:
      "Site institucional desenvolvido para a Seiko Partners, uma empresa de consultoria empresarial focada em soluções inovadoras para seus clientes.",
    name: "Seiko Partners",
    Techs: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    repoURL: "",
    deployURL: "https://powermanutencao.com.br/",
    image: powermanutencao,
    description:
      "Site institucional desenvolvido para a Power Manutenção, empresa especializada em manutenção automotiva, oferecendo serviços de reprogramação eletrônica (Remap), mecânica de caminhões e agrícola, retífica de motores e ar condicionado.",
    name: "Power Manutenção",
    Techs: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

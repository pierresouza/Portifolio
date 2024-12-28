import { StaticImageData } from "next/image";
import DescoInvest from "../../public/DescoInvest.png";
import CapSyncLogo from "../../public/CapSync.jpg";
import BiocidadeLogo from "../../public/Biocidade.jpg";

interface ProjectsProps {
  repoURL: string;
  deployURL?: string | "Indisponível";
  name: string;
  description?: string;
  image: StaticImageData | string;
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
    },
    {
      repoURL: "https://github.com/Capivara-s-Team",
      deployURL: "",
      image: CapSyncLogo,
      description:
        "Capsync é uma plataforma de gerenciamento de projetos para facilitar a comunicação e organização de equipes, desenvolvida durante o Primeiro Hackathon da Comunidade Bichinhos da TI.",
      name: "CapSync",
    },
    {
      repoURL: "https://github.com/DescoInvest",
      deployURL: "https://desco-invest-front.vercel.app/",
      image: DescoInvest,
      description:
        "Desco Invest é uma plataforma de investimentos que democratiza o acesso ao conhecimento sobre finanças, utilizando inteligência artificial para tornar o aprendizado mais acessível e prático.",
      name: "Desco Invest",
    },
  ].map((project) => ({
    ...project,
    deployURL: project.deployURL || "Indisponível",
  })),
};

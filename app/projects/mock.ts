import { StaticImageData } from "next/image";
import DescoInvestLogo from "../../public/DescoInvest.png";
import CapSyncLogo from "../../public/CapSync.jpg";
import BiocidadeLogo from "../../public/Biocidade.jpg";

interface ProjectsProps {
  repoURL: string;
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
      repoURL: "https://github.com/DescoInvest",
      image: DescoInvestLogo,
      description:
        "Desco Invest é uma plataforma de investimentos que tem como objetivo facilitar o acesso de investidores a projetos de infraestrutura, com foco em projetos de saneamento básico. A plataforma foi desenvolvida para a disciplina de Projeto de Software, do curso de Engenharia de Software da Universidade de Brasília.",
      name: "DesconInvest",
    },
    {
      repoURL: "https://github.com/Capivara-s-Team/CapSync-Front-End",
      image: CapSyncLogo,
      description:
        "Capsync é uma plataforma de gerenciamento de projetos que tem como objetivo facilitar a comunicação e organização de equipes de trabalho. A plataforma foi desenvolvida para a disciplina de Projeto de Software, do curso de Engenharia de Software da Universidade de Brasília.",
      name: "CapSync",
    },
    {
      repoURL: "https://github.com/Projeto-Integrador-BioCidade",
      image: BiocidadeLogo,
      description:
        "Biocidade é uma plataforma de mapeamento de áreas verdes e de preservação ambiental. A plataforma foi desenvolvida para a disciplina de Projeto de Software, do curso de Engenharia de Software da Universidade de Brasília.",
      name: "Biocidade",
    },
  ],
};

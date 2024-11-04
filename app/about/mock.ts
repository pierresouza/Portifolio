import { IconType } from "react-icons";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { SiAxios } from "react-icons/si";
import { VscTerminalPowershell } from "react-icons/vsc";
import { VscTerminalBash } from "react-icons/vsc";
import { TbBrandGraphql } from "react-icons/tb";
import { SiInsomnia } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaLess } from "react-icons/fa";

interface aboutProps {
  title: string;
  aboutTechs: IconType[];
}

export const knowledge: aboutProps[] = [
  {
    title: "HTML",
    aboutTechs: [RiHtml5Fill],
  },
  {
    title: "JavaScript",
    aboutTechs: [RiJavascriptFill],
  },
  {
    title: "React",
    aboutTechs: [RiReactjsFill],
  },
  {
    title: "Next.js",
    aboutTechs: [RiNextjsFill],
  },
  {
    title: "CSS",
    aboutTechs: [RiCss3Fill],
  },
  {
    title: "Sass",
    aboutTechs: [FaSass],
  },
  {
    title: "Less",
    aboutTechs: [FaLess],
  },
  {
    title: "Styled Components",
    aboutTechs: [SiStyledcomponents],
  },
  {
    title: "ShadcnUI",
    aboutTechs: [SiShadcnui],
  },
  {
    title: "PowerShell",
    aboutTechs: [VscTerminalPowershell],
  },
  {
    title: "Bash",
    aboutTechs: [VscTerminalBash],
  },
  {
    title: "GitHub",
    aboutTechs: [VscGithubInverted],
  },
];

export const studying: aboutProps[] = [
  {
    title: "React Hook Form",
    aboutTechs: [SiReacthookform],
  },
  {
    title: "Tailwind CSS",
    aboutTechs: [RiTailwindCssFill],
  },
  {
    title: "MySQL",
    aboutTechs: [SiMysql],
  },
  {
    title: "NestJS",
    aboutTechs: [SiNestjs],
  },
  {
    title: "Insomnia",
    aboutTechs: [SiInsomnia],
  },
  {
    title: "Postman",
    aboutTechs: [SiPostman],
  },
  {
    title: "Axios",
    aboutTechs: [SiAxios],
  },
  {
    title: "GraphQL",
    aboutTechs: [TbBrandGraphql],
  },
];

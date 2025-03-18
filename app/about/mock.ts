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
import { FaSass } from "react-icons/fa";
import { FaLess } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";

interface aboutProps {
  title: string;
  aboutTechs: IconType;
  color: string;
}

export const knowledge: aboutProps[] = [
  {
    title: "HTML",
    aboutTechs: RiHtml5Fill,
    color: "#E34F26",
  },
  {
    title: "JavaScript",
    aboutTechs: RiJavascriptFill,
    color: "#F7DF1E",
  },
  {
    title: "React",
    aboutTechs: RiReactjsFill,
    color: "#61DAFB",
  },
  {
    title: "Next.js",
    aboutTechs: RiNextjsFill,
    color: "#000000",
  },
  {
    title: "CSS",
    aboutTechs: RiCss3Fill,
    color: "#1572B6",
  },
  {
    title: "Sass",
    aboutTechs: FaSass,
    color: "#CC6699",
  },
  {
    title: "Less",
    aboutTechs: FaLess,
    color: "#1D365D",
  },
  {
    title: "Styled Components",
    aboutTechs: SiStyledcomponents,
    color: "#DB7093",
  },
  {
    title: "ShadcnUI",
    aboutTechs: SiShadcnui,
    color: "#000000",
  },
  {
    title: "PowerShell",
    aboutTechs: VscTerminalPowershell,
    color: "#012456",
  },
  {
    title: "Bash",
    aboutTechs: VscTerminalBash,
    color: "#4EAA25",
  },
  {
    title: "GitHub",
    aboutTechs: VscGithubInverted,
    color: "#181717",
  },
];

export const studying: aboutProps[] = [
  {
    title: "React Hook Form",
    aboutTechs: SiReacthookform,
    color: "#EC5990",
  },
  {
    title: "Tailwind CSS",
    aboutTechs: RiTailwindCssFill,
    color: "#06B6D4",
  },
  {
    title: "MySQL",
    aboutTechs: SiMysql,
    color: "#4479A1",
  },
  {
    title: "Python",
    aboutTechs: FaPython,
    color: "#3776AB",
  },
  {
    title: "AWS",
    aboutTechs: FaAws,
    color: "#FF9900",
  },
  {
    title: "PHP",
    aboutTechs: FaPhp,
    color: "#777BB4",
  },
  {
    title: "NestJS",
    aboutTechs: SiNestjs,
    color: "#E0234E",
  },
  {
    title: "Axios",
    aboutTechs: SiAxios,
    color: "#5A29E4",
  },
  {
    title: "GraphQL",
    aboutTechs: TbBrandGraphql,
    color: "#E10098",
  },
];

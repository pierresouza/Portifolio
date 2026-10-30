export interface EducationItem {
  id: string;
  translationKey: string;
  Level: string;
  Course: string;
  Institution: string;
  Period?: string;
  Description?: string;
  Technologies?: string[];
}

interface Education {
  Studies: EducationItem[];
}

export const EducationMock: Education = {
  Studies: [
    {
      id: "0",
      translationKey: "eduUtfpr",
      Level: "Formação Complementar",
      Course: "Web Programming Course, Computer Programming, Specific Applications",
      Institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
      Period: "06/2026",
      Description:
        "Curso de programação web com foco no desenvolvimento de software e aplicações específicas.",
      Technologies: ["Programação Web", "Computer Programming", "Aplicações Específicas"],
    },
    {
      id: "1",
      translationKey: "edu0",
      Level: "Ensino Superior",
      Course: "Curso Superior de Tecnologia (CST), Tecnologia da Informação",
      Institution: "UNINTER Centro Universitário Internacional",
      Period: "07/2025 - 12/2027",
      Description:
        "CST em TI com base teórico-prática nas áreas de desenvolvimento e infraestrutura. Ênfase em HTML, CSS, JavaScript, Java (POO), MySQL, versionamento com Git/GitHub e metodologias ágeis (Scrum/Kanban).",
      Technologies: [
        "React.js",
        "MySQL",
        "Java",
        "Git",
        "GitHub",
        "Scrum",
        "Kanban",
      ],
    },
    {
      id: "2",
      translationKey: "eduSerasa",
      Level: "Programa de Formação",
      Course: "Desenvolvimento de Software",
      Institution: "Serasa Experian",
      Period: "09/2025 - 12/2025",
      Description:
        "Programa de imersão e capacitação prática focado em engenharia e desenvolvimento de software corporativo.",
      Technologies: ["Desenvolvimento", "Capacitação Profissional", "Boas Práticas"],
    },
    {
      id: "3",
      translationKey: "edu1",
      Level: "Curso Técnico Integrado",
      Course: "Língua Inglesa e Literaturas de Língua Inglesa",
      Institution: "EF International Language Campuses",
      Period: "09/2024 - 09/2025",
      Description:
        "Desenvolvimento de fluência e confiança para comunicação em inglês em contextos profissionais e imersão corporativa.",
      Technologies: ["Comunicação", "Inglês Profissional", "ESL"],
    },
    {
      id: "4",
      translationKey: "edu4",
      Level: "Bootcamp / Ensino Técnico",
      Course: "Pessoa Desenvolvedora Fullstack – JavaScript, Tecnologia da Informação",
      Institution: "Generation Brasil",
      Period: "06/2024 - 09/2024",
      Description:
        "Bootcamp intensivo Fullstack JavaScript com foco prático em front-end, back-end, versionamento com Git e soft skills.",
      Technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "MySQL",
        "NestJS",
        "Git",
      ],
    },
    {
      id: "5",
      translationKey: "edu6",
      Level: "Ensino Técnico",
      Course: "Desenvolvimento Web Java",
      Institution: "Instituto Proa",
      Period: "08/2021 - 12/2021",
      Description:
        "Programa intensivo Pro Profissão focado em desenvolvimento web, competências técnicas e preparação para o mercado.",
      Technologies: ["HTML5", "CSS", "JavaScript", "MySQL", "Java"],
    },
    {
      id: "6",
      translationKey: "edu7",
      Level: "Ensino Técnico",
      Course: "Desenvolvimento de Sistemas",
      Institution: "ETEC - Escola Técnica Estadual de São Paulo",
      Period: "08/2019 - 12/2020",
      Description:
        "Formação técnica com fundamentos de computação, desenvolvimento de software, bancos de dados, engenharia de software e redes.",
      Technologies: ["Computação", "Algoritmos", "Bancos de Dados", "Redes"],
    },
  ],
};

export interface EducationItem {
  id: string;
  Level: string; // Ex.: Ensino Superior, Ensino técnico, Curso técnico
  Course: string;
  Institution: string;
  Period?: string; // Opcional, caso queira adicionar datas depois
  Description?: string;
  Technologies?: string[];
}

interface Education {
  Studies: EducationItem[];
}

export const EducationMock: Education = {
  Studies: [
    {
      id: "uninter-ti",
      Level: "Ensino Superior",
      Course: "Tecnologia da Informação (CST)",
      Institution: "UNINTER Centro Universitário Internacional",
      Period: "07/2025 - 12/2027",
      Description:
        "CST em TI com base teórico-prática nas áreas de desenvolvimento e infraestrutura. Ênfase em HTML, CSS, JavaScript, Java (POO), MySQL, versionamento com Git/GitHub e metodologias ágeis (Scrum/Kanban). Projetos acadêmicos que simulam desafios reais do mercado.",
      Technologies: [
        "React.js",
        "MySQL",
        "Java",
        "Programação lógica",
        "Git",
        "GitHub",
        "Scrum",
        "Kanban",
      ],
    },
    {
      id: "uniamerica-ti",
      Level: "Ensino Superior",
      Course: "Tecnologia da Informação (CST)",
      Institution: "Uniamérica Descomplica",
      Period: "08/2023 - 07/2025",
      Description:
        "Formação superior com fundamentos de computação, desenvolvimento de software (web e mobile), bancos de dados, engenharia de software e redes. Foco em resolução de problemas e práticas ágeis.",
      Technologies: [
        "Resolução de problemas",
        "CSS",
        "Metodologias ágeis e em cascata",
        "Banco de dados",
        "HTML5",
        "JavaScript",
      ],
    },
    {
      id: "descomplica-ads",
      Level: "Ensino Superior",
      Course: "Análise e Desenvolvimento de Sistemas",
      Institution: "Descomplica Faculdade Digital",
      Period: "08/2023 - 12/2025",
      Description:
        "Graduação em ADS com base sólida em desenvolvimento de software e sistemas. Conteúdos: lógica de programação, algoritmos e estrutura de dados; desenvolvimento web e mobile; modelagem e SQL; metodologias ágeis, análise de requisitos e testes; redes de computadores.",
      Technologies: [
        "Resolução de problemas",
        "CSS",
        "Metodologias ágeis e em cascata",
        "Banco de dados",
        "Comunicação",
        "HTML5",
        "JavaScript",
      ],
    },
    {
      id: "proa-java-web",
      Level: "Ensino técnico",
      Course: "Desenvolvimento Web Java",
      Institution: "Instituto Proa",
      Period: "08/2021 - 12/2021",
      Description:
        "Programa intensivo Pro Profissão focado em empregabilidade, com trilhas de desenvolvimento pessoal, competências técnicas (TI e áreas correlatas) e preparação para o mercado (currículo, entrevistas, dinâmicas).",
      Technologies: [
        "Resolução de problemas",
        "MySQL",
        "Responsividade",
        "CSS",
        "Banco de dados",
        "Trabalho em equipe",
        "Comunicação",
        "HTML5",
        "JavaScript",
      ],
    },
    {
      id: "generation-fullstack",
      Level: "Ensino técnico",
      Course: "Desenvolvimento Fullstack",
      Institution: "Generation Brasil",
      Period: "06/2024 - 09/2024",
      Description:
        "Bootcamp Fullstack JavaScript com foco prático em front-end e back-end. Projetos ágeis, versionamento com Git/GitHub e ênfase em soft skills (comunicação, trabalho em equipe, resolução de problemas).",
      Technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "MySQL",
        "Banco de dados",
        "NestJS",
        "Git",
        "GitHub",
        "Programação lógica",
      ],
    },
    {
      id: "ef-ingles",
      Level: "Curso técnico",
      Course: "Língua Inglesa e Literaturas de Língua Inglesa",
      Institution: "Education First",
      Period: "09/2024 - 09/2025",
      Description:
        "Desenvolvimento de fluência e confiança para comunicação em inglês em contextos profissionais, acesso a conteúdos e ferramentas de imersão e participação em mentorias e lives com executivos.",
      Technologies: ["Comunicação", "ESL (Inglês como segunda língua)"],
    },
    {
      id: "etec-ads",
      Level: "Ensino técnico",
      Course: "Desenvolvimento de sistemas",
      Institution: "ETEC - Escola Técnica Estadual de São Paulo",
      Period: "08/2019 - 12/2020",
      Description:
        "Formação técnica com fundamentos de computação, desenvolvimento de software, bancos de dados, engenharia de software e redes, preparando para desafios reais do mercado.",
      Technologies: [
        "Resolução de problemas",
        "MySQL",
        "Responsividade",
        "CSS",
        "Metodologias ágeis e em cascata",
        "Banco de dados",
        "Trabalho em equipe",
        "Linux",
        "Comunicação",
        "HTML5",
        "JavaScript",
      ],
    },
    {
      id: "dio-campus-expert",
      Level: "Programa",
      Course: "Embaixador da DIO Campus Expert",
      Institution: "DIO",
      Period: "02/2024 - 04/2024",
      Description:
        "Programa para universitários acelerarem a carreira e liderança em comunidades acadêmicas por meio de mentorias com profissionais referência no mercado.",
    },
  ],
};

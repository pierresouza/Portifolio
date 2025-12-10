interface Job {
  id: string;
  Company: string;
  Role: string;
  Period: string;
  Description: string;
  Description2?: string;
  Technologies: string[];
}

interface Experience {
  Job: Job[];
}

export const ExperienceMock: Experience = {
  Job: [
    {
      id: "freelancer",
      Company: "Baloon consultoria de marketing",
      Role: "Desenvolvedor wordpress",
      Period: "11/2025 - Atual",
      Description:
        "Atuo como desenvolvedor WordPress, responsável pela criação e manutenção de sites utilizando temas personalizados e plugins para atender às necessidades dos clientes. Minhas responsabilidades incluem a implementação de funcionalidades específicas, otimização de desempenho e garantia de uma experiência de usuário fluida e responsiva. Trabalho em estreita colaboração com designers e outros desenvolvedores para garantir que os projetos sejam entregues dentro do prazo e atendam aos padrões de qualidade estabelecidos.",
      Technologies: [
        "WordPress",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
        "Elementor",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "zanthus",
      Company: "Zanthus - Tecnologia de Resultados",
      Role: "Estagiário de Desenvolvimento de Software",
      Period: "11/2024 - 08/2025",
      Description:
        "Durante meu estágio, tive a oportunidade de trabalhar em diversas áreas do desenvolvimento de software. Participei ativamente na criação e manutenção de aplicações, colaborando com a equipe para resolver problemas e implementar novas funcionalidades. Aprendi a utilizar diferentes tecnologias e frameworks, aprimorando minhas habilidades técnicas e de trabalho em equipe.",
      Technologies: [
        "React",
        "TypeScript",
        "Storybook",
        "Kotlin",
        "Git",
        "GitLab",
      ],
    },
    {
      id: "selo-esg",
      Company: "SELO ESG PRO Brasil",
      Role: "Desenvolvedor Front-End - Freelancer",
      Period: "07/2024 - 08/2024",
      Description:
        "Atuei como desenvolvedor front-end, utilizando o framework Next.js, junto com Tailwind CSS e Material UI, para estruturar e arquitetar o projeto. Fui responsável por criar interfaces inovadoras e funcionais que proporcionam uma experiência de usuário envolvente e responsiva, sempre alinhado às diretrizes estabelecidas pelo designer.",
      Technologies: [
        "Next.js",
        "Tailwind CSS",
        "Material UI",
        "React Hooks",
        "Axios",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "picpay",
      Company: "PicPay Invest",
      Role: "Assistente de analista de sistemas",
      Description:
        "Atuei como desenvolvedor front end, com ênfase em criação de interfaces produzindo uma experiência inovadora e funcional para usuários da plataforma. Durante este projeto trouxe responsividade ativa entre os usuários, seguindo as diretrizes profissionais do designer",
      Description2:
        "Assumi a responsabilidade pela execução de testes no back-end utilizando Cypress, além de iniciar a implementação de testes no front-end com Ruby e Capybara. Contribuir para a qualidade e robustez do código é uma parte essencial do meu compromisso com a excelência no desenvolvimento de software.",
      Period: "08/2023 - 12/2023",
      Technologies: [
        "React",
        "React Hooks",
        "TypeScript",
        "StyleSheet",
        "Sass",
        "Styled Components",
        "Less",
        "Cypress",
        "Capybara",
        "Gherkin",
        "Ruby",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "lionx",
      Company: "LionX",
      Role: "Assistente de analista de sistemas",
      Description:
        "Atuei como Assistente de Analista de Sistemas, com foco no desenvolvimento de componentes e diagramação de telas, contribuindo para a entrega de soluções visuais eficazes e alinhadas às necessidades dos usuários. Durante esse período, criei e validei templates de e-mail marketing, garantindo a compatibilidade e usabilidade em diferentes plataformas, sempre seguindo as diretrizes estabelecidas pelo time de design.",
      Description2:
        "Assumi a responsabilidade pela execução de testes e validações dos templates, assegurando o funcionamento adequado e a consistência visual em todas as aplicações. Meu compromisso com a qualidade inclui o cuidado nos detalhes e a busca por aprimorar processos, proporcionando um impacto positivo nos resultados do projeto",
      Period: "03/2023 - 12/2023",
      Technologies: [
        "HTML",
        "CSS",
        "Sass",
        "Less",
        "Styled Components",
        "JavaScript",
        "React",
        "TypeScript",
        "Git",
        "GitHub",
      ],
    },
  ],
};

interface Job {
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

export const ExperenceMock: Experience = {
  Job: [
    {
      Company: "PicPay Bu Investment",
      Role: "Assistente de analista de sistemas",
      Description:
        "Atuei como desenvolvedor front end, com ênfase em criação de interfaces produzindo uma experiência inovadora e funcional para usuários da plataforma. Durante este projeto trouxe responsividade ativa entre os usuários, seguindo as diretrizes profissionais do designer",
      Description2:
        "Assumi a responsabilidade pela execução de testes no back-end utilizando Cypress, além de iniciar a implementação de testes no front-end com Ruby e Capybara. Contribuir para a qualidade e robustez do código é uma parte essencial do meu compromisso com a excelência no desenvolvimento de software.",
      Period: "03/2022 - 12/2023",
      Technologies: [
        "React",
        "React Hooks",
        "Typescript",
        "StyleSheet",
        "Sass",
        "Styled Componentes",
        "Less",
        "Testes unitários",
        "Cypress",
        "Capybara",
        "Gherkin",
        "Ruby",
      ],
    },
    {
      Company: "SELO ESG PRO Brasil",
      Role: "Desenvolvedor Front-End Jr. - Freelancer",
      Period: "07/2024 - 08/2023",
      Description:
        "Atuei como desenvolvedor front-end, utilizando o framework Next.js, junto com Tailwind CSS e Material UI, para estruturar e arquitetar o projeto. Fui responsável por criar interfaces inovadoras e funcionais que proporcionam uma experiência de usuário envolvente e responsiva, sempre alinhado às diretrizes estabelecidas pelo designer.",
      Technologies: [
        "Next.js",
        "Tailwind CSS",
        "Material UI",
        "React Hooks",
        "Axios",
      ],
    },
  ],
};

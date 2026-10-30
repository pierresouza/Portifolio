interface Job {
  id: string;
  translationKey: string;
  Company: string;
  Role: string;
  Period: string;
  Description: string;
  Description2?: string;
  Technologies: string[];
  type?: "corporate" | "freelance_startup";
}

interface Experience {
  Job: Job[];
}

export const ExperienceMock: Experience = {
  Job: [
    {
      id: "0",
      translationKey: "job0",
      type: "corporate",
      Company: "Secretaria Municipal de Urbanismo e Licenciamento (SMUL)",
      Role: "Estagiário de desenvolvimento fullstack",
      Period: "02/2026 - Presente",
      Description:
        "Atuo como Desenvolvedor na SMUL, focando na criação de aplicações web escaláveis para a automação de processos internos. Trabalho em ambiente ágil no ecossistema Next.js, TypeScript, Node.js e Prisma com NestJS.",
      Description2:
        "Digitalização de Sistemas (Subvenção 2026 e sistema-caf); Criação do Design System da SMUL e biblioteca de componentes (React, Next.js, Storybook e shadcn/ui); Desenvolvimento da nova Intranet e repaginação do portal da CIPA; Arquitetura CMS reutilizável com Payload CMS e Next.js.",
      Technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Prisma",
        "NestJS",
        "Storybook",
        "shadcn/ui",
        "Payload CMS",
        "React",
      ],
    },
    {
      id: "1",
      translationKey: "job1",
      type: "freelance_startup",
      Company: "Billink AI",
      Role: "Desenvolvedor web",
      Period: "02/2026 - Presente",
      Description:
        "Atuo no desenvolvimento de um SaaS voltado para auditoria de custos de infraestrutura de IA e cloud, democratizando o acesso ao FinOps para startups e transformando regras de negócio complexas em uma interface funcional e escalável.",
      Description2:
        "Criação de dashboards interativos de FinOps para análise de economia e tendências de custo; Implementação de Design System neo-brutalista; Frontend responsivo em Next.js e Tailwind CSS; Conexão completa com Supabase (PostgreSQL, Auth e Storage); Fluxo de upload e monitoramento do pipeline de agentes de IA; Gestão de planos e monetização com Stripe e AbacatePay.",
      Technologies: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Stripe API",
        "AbacatePay",
        "TypeScript",
        "PostgreSQL",
      ],
    },
    {
      id: "2",
      translationKey: "job4",
      type: "corporate",
      Company: "Zanthus - Tecnologia de Resultados",
      Role: "Estagiário de desenvolvimento",
      Period: "11/2024 - 08/2025",
      Description:
        "Atuei no desenvolvimento com foco na criação e evolução de interfaces modernas, dinâmicas e responsivas utilizando React.js e CSS, assegurando usabilidade intuitiva e acessibilidade.",
      Description2:
        "Manutenção e criação de stories no Storybook para documentação e padronização de componentes; Controle de versão colaborativo via GitLab; Atuação em ambiente ágil com Kanban no Jira; Estudo e aplicação de Kotlin.",
      Technologies: [
        "React.js",
        "CSS",
        "Storybook",
        "GitLab",
        "Jira",
        "Kotlin",
      ],
    },
    {
      id: "3",
      translationKey: "job5",
      type: "freelance_startup",
      Company: "Selo ESG Pro Brasil",
      Role: "Desenvolvedor web front end",
      Period: "08/2024 - 08/2024",
      Description:
        "Atuei como desenvolvedor front-end utilizando Next.js, Tailwind CSS e Material UI para estruturar e arquitetar o projeto com interfaces funcionais e responsivas.",
      Description2:
        "Implementação de interfaces responsivas e estilização de componentes; Utilização de React Hooks para gerenciamento de estado; Integração com APIs via Axios; Tipagem estrita via props.",
      Technologies: [
        "Next.js",
        "Tailwind CSS",
        "Material UI",
        "React Hooks",
        "Axios",
        "TypeScript",
      ],
    },
    {
      id: "4",
      translationKey: "job6",
      type: "corporate",
      Company: "PicPay",
      Role: "Desenvolvedor web front end - PicPay Invest",
      Period: "04/2023 - 12/2023",
      Description:
        "Atuei como desenvolvedor front-end no PicPay Invest, com ênfase na criação de interfaces modernas, responsivas e funcionais para usuários da plataforma financeira.",
      Description2:
        "Execução de testes automatizados no back-end com Cypress e início de testes no front-end com Ruby e Capybara; Navegação com React Router Dom; Estilização com StyleSheet, Styled Components e Less; Testes unitários.",
      Technologies: [
        "React",
        "React Router Dom",
        "StyleSheet",
        "Styled Components",
        "Less",
        "Cypress",
        "Ruby",
        "Capybara",
      ],
    },
    {
      id: "5",
      translationKey: "job7",
      type: "corporate",
      Company: "LionX",
      Role: "Assistente de analista de sistemas",
      Period: "03/2022 - 04/2023",
      Description:
        "Atuei no desenvolvimento de componentes e diagramação de telas, além da criação e validação de templates de e-mail marketing responsivos e consistentes.",
      Description2:
        "Execução de testes e validações de templates multiplataforma, assegurando compatibilidade visual e excelência técnica em todas as aplicações.",
      Technologies: [
        "HTML",
        "CSS",
        "Less",
        "Sass",
        "JavaScript",
        "React.js",
        "TypeScript",
      ],
    },
  ],
};

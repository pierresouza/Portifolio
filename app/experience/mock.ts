interface Job {
  id: string;
  translationKey: string;
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
      id: "0",
      translationKey: "job0",
      Company: "Secretaria Municipal de Urbanismo e Licenciamento",
      Role: "Estagiário de desenvolvimento fullstack",
      Period: "01/2026 - Atual",
      Description: ` Atuo no desenvolvimento e evolução de aplicações web modernas e escaláveis, utilizando Next.js, TypeScript e Prisma. Minha responsabilidade central é desenvolver soluções eficientes, seguras e com foco total na experiência do usuário.Minhas principais atividades incluem:
      Desenvolvimento Full Stack: Construção de interfaces responsivas com Tailwind CSS e integração de APIs seguras.    
      Modelagem de Dados: Planejamento e manutenção de bancos de dados com Prisma, garantindo performance e integridade.
      Versionamento e Agilidade: Utilização de Git para colaboração em equipe e atuação em ambiente ágil para entregas contínuas.
      Otimização de Processos: Implementação de funcionalidades que apoiem e automatizem os processos internos da Secretaria. `,
      Technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Animate on Scroll",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "1",
      translationKey: "job1",
      Company: "Billink AI",
      Role: "Desenvolvedor Web",
      Period: "01/2026 - Atual",
      Description: `Atuo no desenvolvimento de um SaaS voltado para auditoria de custos de infraestrutura de IA e cloud, com o objetivo de democratizar o acesso ao FinOps para startups. Minha missão é transformar regras de negócio complexas em uma interface funcional, escalável e de alta performance.
      Dashboard de FinOps: Criação de painéis interativos para análise de economia potencial, detalhamento de gastos e tendências de custo, com foco em hierarquia visual clara e insights acionáveis.
      Interface Neo-Brutalista: Implementação de um Design System exclusivo baseado no neo-brutalismo brasileiro, utilizando bordas sólidas, sombras pesadas e tipografia forte para uma estética crua e funcional.
      Frontend e UX: Desenvolvimento de interfaces responsivas e de alta performance com Next.js e Tailwind CSS, garantindo usabilidade intuitiva, acessibilidade e consistência visual em toda a aplicação.
      Integração com Backend: Conexão completa com Supabase para autenticação, gerenciamento de banco de dados PostgreSQL e armazenamento seguro de arquivos (CSV e PDFs).
      Fluxo de Dados de IA: Desenvolvimento da interface de upload e monitoramento em tempo real do pipeline de agentes de IA, incluindo estados de processamento e extração de dados de billing.
      Gestão de Planos e Monetização: Implementação de lógica de acesso baseada em planos (Free, Pro e Business), com integração ao Stripe para upgrades instantâneos e recorrência.
`,
      Technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Supabase",
        "Stripe API",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "2",
      translationKey: "job2",
      Company: "Baloon Consultoria de Marketing",
      Role: "Desenvolvedor Web Jr.",
      Period: "01/2026 - Atual",
      Description: `Desenvolvedor Web Júnior com experiência em Next.js, Tailwind CSS, Shadcn UI e Animate on Scroll, atuando na criação de landing pages modernas e responsivas. Responsável por manter e otimizar usabilidade e desempenho, além de conduzir processos de build, deploy e CI/CD.  <br> 
      Também contribuo na reestruturação de projetos, garantindo escalabilidade e organização do código. Tenho foco em entregar soluções eficientes e bem estruturadas, sempre buscando aprimorar a experiência do usuário e evoluir continuamente como profissional.
      `,
      Technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Animate on Scroll",
        "Git",
        "GitHub",
      ],
    },
    {
      id: "3",
      translationKey: "job3",
      Company: "Baloon Consultoria de Marketing",
      Role: "Desenvolvedor WordPress",
      Period: "11/2025 - 12/2025",
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
      id: "4",
      translationKey: "job4",
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
      id: "5",
      translationKey: "job5",
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
      id: "6",
      translationKey: "job6",
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
      id: "7",
      translationKey: "job7",
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

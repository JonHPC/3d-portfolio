import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    docker,
    java,
    python,
    csharp,
    unity,
    bellzi,
    capitalone,
    teabunnystudios,
    shareprompt,
    admindashboard,
    colada,
    sqlizer,
    blastertrainingvr,
    calculator,
    etchasketch,
    nanobiotics,
    octolog,
    squarepop,
    teatumble,
    rngee,
    parker,
    vaughn,
    daniel
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Hobbyist Game Developer",
        icon: creator,
    },
    {
        title: "Lifelong Learner",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker,
    },
    // {
    //     name: "Figma",
    //     icon: figma,
    // },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "Unity",
        icon: unity,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "Capital One",
        icon: capitalone,
        iconBg: "#383E56",
        date: "2022 - 2024",
        points: [
            "Developing and maintaining web applications using Java Spring Boot and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing highly scalable patterns and automated testing frameworks",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Systems Engineer",
        company_name: "Bellzi",
        icon: bellzi,
        iconBg: "#E6DEDD",
        date: "2018 - 2022",
        points: [
            "Architected the company’s e-commerce webstore and its connections to cloud-based services, such as Shipstation, Amazon FBA, and Quickbooks Enterprise, to decrease order errors and increase efficiency.",
            "Prototyped an AR app with C# and Unity to enhance the customer experience for product release.",
            "Conducted beta testing through Testflight prior to deployment and distribution to ensure product integrity."
        ],
    },
    {
        title: "Game Developer",
        company_name: "Indie",
        icon: teabunnystudios,
        iconBg: "#383E56",
        date: "2016 - 2021",
        points: [
            "Developed indie games using C# and the Unity game engine.",
            "Participated in Game Jams while designing assets, developing the game, and deploying.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Jonathan is extremely hard-working and takes challenges head on. He is determined to do the necessary research to arrive at the optimal solution. ",
        name: "Parker Steinberg",
        designation: "Software Engineer",
        company: "JPMorgan Chase & Co.",
        image: parker,
    },
    {
        testimonial:
            "Jonathan is not only an excellent engineer, but he also has exceptional attention to detail, organizational skills, and he’s a natural leader. ",
        name: "Vaughn Sulit",
        designation: "Software Engineer",
        company: "Northspyre",
        image: vaughn,
    },
    {
        testimonial:
            "He is a highly talented engineer with an impressive ability to quickly pick up new technologies and libraries from reading documentation. ",
        name: "Daniel Steinbrook",
        designation: "Software Engineer",
        company: "",
        image: daniel,
    },
];

const projects = [
    {
        name: "Share Prompt",
        description:
          "A full-stack Next JS 14 application meant for creating and sharing AI prompt snippets. Utilizes Google Auth and MongoDB, deployed with Vercel.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: shareprompt,
        source_code_link: "https://github.com/jonhpc/share-prompt",
        live_link: "https://share-prompt-steel.vercel.app/"
    },
    {
        name: "Admin Dashboard",
        description:
          "An admin dashboard with drag and drop capabilities made with TypeScript, GraphQL, and Ant Design. Uses the Refine framework and deployed with Netlify. ",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "graphql",
                color: "green-text-gradient",
            },
            {
                name: "antd",
                color: "pink-text-gradient",
            },
        ],
        image: admindashboard,
        source_code_link: "https://github.com/jonhpc/admin-dashboard",
        live_link: "https://jonathanchen-admin-dashboard.netlify.app/"
    },
    {
        name: "Colada",
        description:
          "A Chrome extension that enables time-travel debugging for Pinia, Vue's official state management library, to increase developer experience and efficiency.",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient",
            },
            {
                name: "pinia",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: colada,
        source_code_link: "https://github.com/orgs/team-colada/repositories",
        live_link: "https://colada.dev"
    },
    // {
    //     name: "SQLizer",
    //     description:
    //       "A semantic management tool for SQL that allows organizations to store and share frequently used SQL queries across teams.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "postgresql",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "sass",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: sqlizer,
    //     source_code_link: "https://github.com/SQLizr/SQLizr",
    //     live_link: ""
    // },
    // {
    //     name: "Octolog",
    //     description:
    //       "A scuba diving stat tracker and visualizer.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "postgresql",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: octolog,
    //     source_code_link: "https://github.com/JonHPC/octolog",
    //     live_link: ""
    // },
    // {
    //     name: "Blaster Training VR",
    //     description:
    //       "A simple VR blaster game inspired by the gameplay of the classic arcade game 'Police Trainer'",
    //     tags: [
    //         {
    //             name: "csharp",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "unity",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: blastertrainingvr,
    //     source_code_link: "",
    //     live_link: ""
    // },
    {
        name: "Nanobiotics",
        description:
          "A classic \"Shoot 'em up\" created in 3 days during the 2020 Quarantine Jam",
        tags: [
            {
                name: "csharp",
                color: "blue-text-gradient",
            },
            {
                name: "unity",
                color: "green-text-gradient",
            },
        ],
        image: nanobiotics,
        source_code_link: "https://github.com/JonHPC/Nanobiotics",
        live_link: "https://teabunnystudios.itch.io/nanobiotics"
    },
    {
        name: "Square Pop",
        description:
          "Get green. Dodge red.",
        tags: [
            {
                name: "csharp",
                color: "blue-text-gradient",
            },
            {
                name: "unity",
                color: "green-text-gradient",
            },
        ],
        image: squarepop,
        source_code_link: "https://github.com/JonHPC/Project-Square",
        live_link: "https://teabunnystudios.itch.io/square-pop"
    },
    {
        name: "Tea Tumble",
        description:
          "A \"Falldown\" inspired game",
        tags: [
            {
                name: "csharp",
                color: "blue-text-gradient",
            },
            {
                name: "unity",
                color: "green-text-gradient",
            },
        ],
        image: teatumble,
        source_code_link: "https://github.com/JonHPC/Tea-Tumble",
        live_link: "https://teabunnystudios.itch.io/tea-tumble"
    },
    // {
    //     name: "Calculator",
    //     description:
    //       "A simple toy calculator",
    //     tags: [
    //         {
    //             name: "javascript",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: calculator,
    //     source_code_link: "https://github.com/JonHPC/calculator",
    //     live_link: "https://jonhpc.github.io/calculator/"
    // },
    // {
    //     name: "Etch a Sketch",
    //     description:
    //       "A toy 'Etch-a-Sketch'",
    //     tags: [
    //         {
    //             name: "javascript",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: etchasketch,
    //     source_code_link: "https://github.com/JonHPC/etch-a-sketch",
    //     live_link: "https://jonhpc.github.io/etch-a-sketch/"
    // },
    // {
    //     name: "Rngee",
    //     description:
    //       "A simple library for generating random values",
    //     tags: [
    //         {
    //             name: "javascript",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "npm",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: rngee,
    //     source_code_link: "https://github.com/JonHPC/rngee",
    //     live_link: "https://www.npmjs.com/package/rngee"
    // },
];

export { services, technologies, experiences, testimonials, projects };
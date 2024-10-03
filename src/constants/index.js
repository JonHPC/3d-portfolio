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
    meta,
    starbucks,
    tesla,
    shopify,
    bellzi,
    capitalone,
    teabunnystudios,
    carrent,
    jobit,
    tripguide,
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
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Hobbyist Game Developer",
        icon: creator,
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
        name: "Python",
        icon: python,
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
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
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
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Game Developer",
        company_name: "Indie",
        icon: teabunnystudios,
        iconBg: "#383E56",
        date: "2016 - 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
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
        image: carrent,
        source_code_link: "https://github.com/",
        live_link: ""
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
        live_link: "https://github.com"
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
        live_link: ""
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
                color: "blue-text-gradient",
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
    {
        name: "SQLizer",
        description:
          "A semantic management tool for SQL that allows organizations to store and share frequently used SQL queries across teams.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
        ],
        image: sqlizer,
        source_code_link: "https://github.com/SQLizr/SQLizr",
        live_link: ""
    },
    {
        name: "Octolog",
        description:
          "A scuba diving stat tracker and visualizer.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: octolog,
        source_code_link: "https://github.com/JonHPC/octolog",
        live_link: ""
    },
    {
        name: "Blaster Training VR",
        description:
          "A simple VR blaster game inspired by the gameplay of the classic arcade game 'Police Trainer'",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "csharp",
                color: "green-text-gradient",
            },
        ],
        image: blastertrainingvr,
        source_code_link: "",
        live_link: ""
    },
    {
        name: "Nanobiotics",
        description:
          "A classic \"Shoot 'em up\" created in 3 days during the 2020 Quarantine Jam",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "csharp",
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
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "csharp",
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
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "csharp",
                color: "green-text-gradient",
            },
        ],
        image: teatumble,
        source_code_link: "https://github.com/JonHPC/Tea-Tumble",
        live_link: "https://teabunnystudios.itch.io/tea-tumble"
    },
    {
        name: "Calculator",
        description:
          "A simple toy calculator",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: calculator,
        source_code_link: "https://github.com/JonHPC/calculator",
        live_link: "https://jonhpc.github.io/calculator/"
    },
    {
        name: "Etch a Sketch",
        description:
          "A toy 'Etch-a-Sketch'",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: etchasketch,
        source_code_link: "https://github.com/JonHPC/etch-a-sketch",
        live_link: "https://jonhpc.github.io/etch-a-sketch/"
    },
];

export { services, technologies, experiences, testimonials, projects };
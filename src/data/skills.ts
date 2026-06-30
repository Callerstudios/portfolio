import { FaNodeJs, FaGitAlt, FaJs } from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiTypescript,
  SiSwagger,
  SiJsonwebtokens,
  SiRender,
  SiPostman,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: FaJs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Swagger",
        icon: SiSwagger,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
      },
    ],
  },
  {
    title: "Deployment",
    skills: [
      {
        name: "Render",
        icon: SiRender,
      },
    ],
  },
];

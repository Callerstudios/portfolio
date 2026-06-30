import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: 1,

    title: "Restaurant Ordering API",

    description:
      "Production-style REST API for restaurant ordering with JWT authentication, role-based authorization, transaction-safe order processing, and comprehensive Swagger documentation.",

    images: {
      preview: "/images/restaurant/restaurant-preview.png",
      architecture: "/images/restaurant/restaurant-architecture.png",
      workflow: "/images/restaurant/restaurant-workflow.png",
      erd: "/images/restaurant/restaurant-erd.png",
    },

    techStack: ["Node.js", "Express", "TypeScript", "MySQL"],

    features: [
      { title: "JWT Authentication" },
      { title: "Role-Based Authorization" },
      { title: "SQL Transactions" },
      { title: "Order Lifecycle" },
      { title: "Pagination" },
      { title: "Swagger Documentation" },
    ],

    architecture: [
      "Client",
      "Routes",
      "Controllers",
      "Services",
      "Repositories",
      "MySQL",
    ],

    deployment: [
      { label: "Live API" },
      { label: "Swagger" },
      { label: "GitHub" },
      { label: "MySQL" },
      { label: "Render" },
    ],

    links: [
      {
        label: "Live API",
        url: "https://restaurant-ordering-api-uav0.onrender.com/",
      },
      {
        label: "Swagger Docs",
        url: "https://restaurant-ordering-api-uav0.onrender.com/docs/",
      },
      {
        label: "GitHub",
        url: "https://github.com/Callerstudios/restaurant-ordering-api",
      },
    ],
  },

  {
    id: 2,

    title: "URL Shortener",

    description:
      "REST API and web application for creating short URLs with reliable redirection and click tracking.",

    images: {
      preview: "/images/shortener/url-preview.png",
      architecture: "/images/shortener/url-shortener-architecture.png",
      workflow: "/images/shortener/url-flow.png",
    },

    techStack: ["Node.js", "Express", "TypeScript", "MySQL"],

    features: [
      { title: "Short URL Generation" },
      { title: "Redirect Service" },
      { title: "Click Tracking" },
      { title: "RESTful API" },
    ],

    architecture: [
      "Client",
      "Routes",
      "Controllers",
      "Services",
      "Repositories",
      "MySQL",
    ],

    deployment: [
      { label: "Live App" },
      { label: "GitHub" },
      { label: "MySQL" },
      { label: "Render" },
    ],

    links: [
      {
        label: "Try Live",
        url: "https://url-shortener-o4su.onrender.com/",
      },
      {
        label: "GitHub",
        url: "https://github.com/Callerstudios/url-shortener",
      },
    ],
  },
];

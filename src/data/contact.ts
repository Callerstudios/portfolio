import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const contacts = [
  {
    title: "GitHub",
    description: "Explore my backend projects and source code.",
    href: "https://github.com/Callerstudios",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    description: "Let's connect professionally.",
    href: "https://www.linkedin.com/in/busariroqeeb",
    icon: FaLinkedin,
  },
  {
    title: "Email",
    description: "Have an opportunity or question? Reach out.",
    href: "mailto:busariroqeeb16@gmail.com",
    icon: Mail,
  },
  {
    title: "Resume",
    description: "Download my latest resume.",
    href: "/resume.pdf",
    icon: FileText,
  },
];

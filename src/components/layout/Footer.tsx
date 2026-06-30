import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            Busari Roqeeb
          </h3>

          <p className="mt-1 text-slate-400">Backend/API Engineer</p>

          <p className="mt-3 text-sm text-slate-500">
            © {year} Busari Roqeeb. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Callerstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors duration-200 hover:text-blue-400"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors duration-200 hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:busariroqeeb16@gmail.com"
            className="text-slate-400 transition-colors duration-200 hover:text-blue-400"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

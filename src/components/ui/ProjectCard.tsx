import { motion } from "framer-motion";

import type { Project } from "../../types/projects";

import Badge from "./Badge";
import ProjectButton from "./ProjectButton";
import ProjectFigure from "../projects/ProjectFigure";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 text-slate-100 shadow-lg"
    >
      {/* Header */}

      <header className="mb-10">
        <h3 className="text-3xl font-bold">{project.title}</h3>

        <p className="mt-4 max-w-3xl leading-7 text-slate-300">
          {project.description}
        </p>
      </header>

      {/* Preview + Details */}

      <div className="grid gap-10 lg:grid-cols-2">
        <ProjectFigure
          title="Preview"
          image={project.images.preview}
          alt={project.title}
          caption="Public interface of the project."
          height="h-80"
        />

        <div className="space-y-8">
          {/* Tech Stack */}

          <section>
            <h4 className="mb-4 text-lg font-semibold">Tech Stack</h4>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>

          {/* Features */}

          <section>
            <h4 className="mb-4 text-lg font-semibold">Features</h4>

            <ul className="space-y-2 text-slate-300">
              {project.features.map((feature) => (
                <li key={feature.title}>• {feature.title}</li>
              ))}
            </ul>
          </section>

          {/* Deployment */}

          <section>
            <h4 className="mb-4 text-lg font-semibold">Deployment</h4>

            <div className="flex flex-wrap gap-2">
              {project.deployment.map((item) => (
                <Badge key={item.label}>✓ {item.label}</Badge>
              ))}
            </div>
          </section>

          {/* Links */}

          <section>
            <h4 className="mb-4 text-lg font-semibold">Explore</h4>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <ProjectButton
                  key={link.label}
                  label={link.label}
                  url={link.url}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Technical Deep Dive */}

      <div className="mt-14">
        <h4 className="mb-6 text-2xl font-semibold">Technical Deep Dive</h4>

        <div className="grid gap-8 lg:grid-cols-2">
          <ProjectFigure
            title="Architecture"
            image={project.images.architecture}
            alt={`${project.title} Architecture`}
            caption="High-level architecture showing the request flow through the application."
          />

          {project.images.erd && (
            <ProjectFigure
              title="Database Design"
              image={project.images.erd}
              alt={`${project.title} ER Diagram`}
              caption="Normalized relational database schema used by the application."
            />
          )}
        </div>

        <div className="mt-8">
          <ProjectFigure
            title="Workflow"
            image={project.images.workflow}
            alt={`${project.title} Workflow`}
            caption="Core business workflow implemented by the API."
            height="h-64"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

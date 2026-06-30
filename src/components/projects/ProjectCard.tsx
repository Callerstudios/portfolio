import ProjectDeployment from "./ProjectDeployment";
import ProjectFeatures from "./ProjectFeatures";
import ProjectHeader from "./ProjectHeader";
import ProjectImage from "./ProjectImage";
import ProjectImagePreview from "./ProjectImagePreview";
import ProjectLinks from "./ProjectLinks";
import ProjectTechStack from "./ProjectTechStack";

import Card from "../ui/Card";
import type { Project } from "../../types/projects";

interface Props {
  project: Project;
}

function ProjectCard({ project }: Props) {
  return (
    <article className="space-y-8">
      <ProjectHeader title={project.title} description={project.description} />

      {/* Hero + Details */}

      <div className="grid gap-8 lg:grid-cols-2">
        <ProjectImage image={project.images.preview} title={project.title} />

        <Card>
          <ProjectTechStack techStack={project.techStack} />

          <div className="my-8" />

          <ProjectFeatures features={project.features} />

          <div className="mt-10">
            <ProjectLinks links={project.links} />
          </div>
        </Card>
      </div>

      {/* Architecture + ER Diagram */}

      <div className="grid gap-8 lg:grid-cols-2">
        <ProjectImagePreview
          title="Architecture"
          image={project.images.architecture}
        />

        {project.images.erd && (
          <ProjectImagePreview
            title="Database Design (ER Diagram)"
            image={project.images.erd}
          />
        )}
      </div>

      {/* Workflow + Deployment */}

      <div className="grid gap-8 lg:grid-cols-2">
        <ProjectImagePreview title="Workflow" image={project.images.workflow} />

        <ProjectDeployment deployment={project.deployment} />
      </div>
    </article>
  );
}

export default ProjectCard;

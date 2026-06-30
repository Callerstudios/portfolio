import Badge from "../ui/Badge";

interface ProjectTechStackProps {
  techStack: string[];
}

function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  return (
    <div>
      <h4 className="mb-4 font-semibold">Tech Stack</h4>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
}

export default ProjectTechStack;

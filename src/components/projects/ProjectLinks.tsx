import ProjectButton from "../ui/ProjectButton";

interface ProjectLinksProps {
  links: {
    label: string;
    url: string;
  }[];
}

function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <ProjectButton key={link.label} {...link} />
      ))}
    </div>
  );
}

export default ProjectLinks;

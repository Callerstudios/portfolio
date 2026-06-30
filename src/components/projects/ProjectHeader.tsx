interface ProjectHeaderProps {
  title: string;
  description: string;
}

function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default ProjectHeader;

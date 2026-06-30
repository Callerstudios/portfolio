interface ProjectButtonProps {
  label: string;
  url: string;
}

function ProjectButton({ label, url }: ProjectButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600"
    >
      {label}
    </a>
  );
}

export default ProjectButton;

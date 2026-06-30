import Badge from "../ui/Badge";

interface ProjectDeploymentProps {
  deployment: {
    label: string;
  }[];
}

function ProjectDeployment({ deployment }: ProjectDeploymentProps) {
  return (
    <section>
      <h4 className="mb-4 text-lg font-semibold">Deployment</h4>

      <div className="flex flex-wrap gap-3">
        {deployment.map((item) => (
          <Badge key={item.label}>✓ {item.label}</Badge>
        ))}
      </div>
    </section>
  );
}

export default ProjectDeployment;

import { CheckCircle2 } from "lucide-react";

interface ProjectFeaturesProps {
  features: {
    title: string;
  }[];
}

function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <div>
      <h4 className="mb-4 font-semibold">Features</h4>

      <div className="grid gap-3 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-3">
            <CheckCircle2 size={18} className="text-blue-600" />

            <span>{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectFeatures;

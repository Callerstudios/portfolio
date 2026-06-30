import Card from "../ui/Card";

interface Props {
  title: string;
  image: string;
}

function ProjectImagePreview({ title, image }: Props) {
  return (
    <Card>
      <h4 className="mb-5 text-lg font-semibold">{title}</h4>

      <img
        src={image}
        alt={title}
        className="rounded-xl border border-slate-200"
      />
    </Card>
  );
}

export default ProjectImagePreview;

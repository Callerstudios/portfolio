import Card from "../ui/Card";

interface Props {
  image: string;
  title: string;
}

function ProjectImage({ image, title }: Props) {
  return (
    <Card className="p-0 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="aspect-video w-full object-cover"
      />
    </Card>
  );
}

export default ProjectImage;

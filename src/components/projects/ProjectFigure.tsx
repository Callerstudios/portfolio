interface ProjectFigureProps {
  title: string;
  image: string;
  alt: string;
  caption?: string;
  height?: string;
}

function ProjectFigure({
  title,
  image,
  alt,
  caption,
  height = "h-72",
}: ProjectFigureProps) {
  return (
    <figure>
      <h4 className="mb-3 text-lg font-semibold text-slate-100">{title}</h4>

      <div
        className={`flex ${height} items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-4`}
      >
        <img
          src={image}
          alt={alt}
          className="max-h-full max-w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>

      {caption && (
        <figcaption className="mt-3 text-sm leading-6 text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default ProjectFigure;

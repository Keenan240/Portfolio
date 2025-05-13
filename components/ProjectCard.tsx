import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  link?: string;
}

export default function ProjectCard({ title, description, image, color, link }: ProjectCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className="projectCardBox"
      onClick={handleClick}
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <div className="projectCardBoxChild" />
      
      <Image
        className="projectIcon"
        src={image}
        alt={title}
        width={140}
        height={140}
      />
      
      <div className="projectLabel" style={{ backgroundColor: color }}>
        <b className="projectTitle">{title}</b>
      </div>
      
      <div className="projectDescription">
        <span className="projectText">{description}</span>
      </div>
    </div>
  );
}

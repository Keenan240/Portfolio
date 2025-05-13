import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function ProjectCard({ title, description, image, color }: ProjectCardProps) {
  return (
    <div className="projectCardBox">
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

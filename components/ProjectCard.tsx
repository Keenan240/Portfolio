import Image from "next/image";
import { useRouter } from "next/router";

interface ProjectCardProps {
  title: string;
  description: string[];
  iconSrc: string;
  arrowIcon: string;
  color: string;
  image1Src: string;
  image2Src: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  iconSrc,
  arrowIcon,
  color,
  image1Src,
  image2Src,
  link,
}: ProjectCardProps) {

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank"); // or use router.push(link) for internal
    }
  };

  return (
    <div
      className="project cursor-pointer hover:opacity-90 transition"
      onClick={handleClick}
    >
      {/* Project preview images */}
      <Image
        className="project-child-img"
        src={image1Src}
        alt="Project visual 1"
        width={303}
        height={282}
      />
      <Image
        className="project-item-img"
        src={image2Src}
        alt="Project visual 2"
        width={494}
        height={304}
      />

      {/* Title and Description */}
      <div className="project-title">{title}</div>
      <div className="description-container">
        {description.map((line, idx) => (
          <p className="description-line" key={idx}>
            {line}
          </p>
        ))}
      </div>

      {/* Red box and icon */}
      <div className="color-box" style={{ backgroundColor: color }} />
      <div className="icon-wrapper">
        <Image src={iconSrc} alt="Project icon" width={30} height={30} />
      </div>

      {/* Arrow icon */}
      <Image
        className="arrow-icon"
        src={arrowIcon}
        alt="Arrow icon"
        width={51}
        height={51}
      />
    </div>
  );
}

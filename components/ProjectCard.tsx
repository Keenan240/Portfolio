'use client';

import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";

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
    if (link) window.open(link, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full max-w-[500px] bg-[#f3f3f3] rounded-[25px] cursor-pointer p-6 transition-transform duration-200 ease-in-out hover:-translate-y-2 "
    >
      {/* Top section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Colored icon background with centered icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <Image src={iconSrc} alt="icon" width={24} height={24} />
          </div>
          <h3 className="text-3xl font-semibold">{title}</h3>
        </div>

        <Image src={arrowIcon} alt="arrow" width={40} height={40} />
      </div>

      {/* Description */}
      <div className="mt-4 space-y-1 text-[#878787] text-base font-medium">
        {description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Image stack */}
      <div className="mt-10 relative h-[275px]">
        <div className="absolute top-6 left-6 z-10 rotate-[-2deg] rounded-xl border-4 border-white overflow-hidden w-[50%]">
          <Image
            src={image1Src}
            alt="project image 1"
            width={600}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-0 right-6 z-0 rounded-xl border-4 border-white overflow-hidden w-[55%]">
          <Image
            src={image2Src}
            alt="project image 2"
            width={600}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from "next/image";

export default function HeaderProfile() {
  return (
    <div className="hidden sm:block mt-24 ml-[550px] max-w-[250px]">
      <a
        href="https://www.linkedin.com/in/keenan-yang-5155682a2/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Image
          src="/Ellipse 1.png"
          alt="My Photo"
          width={64}
          height={64}
          className="mr-4 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Keenan Yang</h1>
          <div className="flex items-center">
            <div className="rounded-full bg-[#8AFF8E] w-2.5 h-2.5 mr-2" />
            <h1 className="text-base font-medium mt-1">Looking For Work</h1>
          </div>
        </div>
      </a>
    </div>
  );
}

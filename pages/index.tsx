'use client';

import Navbar from '../components/Navbar';
import Experiences from '../components/Bio';
import QuickLinks from '../components/QuickLinks';
import ProjectsSection from '../components/ProjectSection';
import Link from "next/link";


export default function HomePage() {
  const copyEmail = () => {
    navigator.clipboard.writeText('keenanyang1027@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <div className="min-h-screen mt-28">
      <Navbar />
      {/* Main Content Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-6 mt-40">
        {/* Hero Section */}
        <div className="text-center ">
          <h1 className="text-4xl sm:text-6xl font-bold">Hey, I’m Keenan Yang!</h1>

          <div className="gap-2 mt-6 text-2xl sm:text-4xl">
            <span className="font-medium text-[#a9a9a9] mr-2">I am a</span>
            <span className="font-semibold mr-2">Computer Science Student</span>
            <span className="font-medium text-[#a9a9a9] mr-2">at</span>
            <span className="font-bold bg-gradient-to-r from-[#004292] via-[#b90e32] to-[#fabc0f] [background-clip:text] [-webkit-background-clip:text] text-transparent [-webkit-text-fill-color:transparent] ">
              Queen’s University
            </span>
          </div>
        </div>

        {/* Experiences and Quick Links */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
          <Experiences />
          <QuickLinks copyEmail={copyEmail} />
        </div>

        {/* Projects Section */}
        <div className="w-full flex flex-col items-center mt-32 px-4 ">
          <h1 className="text-5xl font-bold text-center">Projects</h1>
          <p className="mt-6 text-3xl font-medium text-[#a9a9a9] break-words max-w-[1000px] text-center">
            Check out some of my work! — This Summer my goal was to build as many 
            projects as I could, so take a peek at some of my work! (some are a WIP :D)
          </p>

          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}

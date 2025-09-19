import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";

export default function Projects() {
  return (
    <div>
        <Navbar />
        <div className="mt-32"> 
            <ProjectsSection />
        </div>
    </div>
  );
}

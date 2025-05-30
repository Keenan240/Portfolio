import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col items-center gap-12 mt-28 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-items-center">
        <ProjectCard
          title="Student Stars"
          description={[
            "A platform designed for Grade 12 Students to research",
            "Ontario universities more efficiently and guide them through",
            "the difficult admissions process",
          ]}
          iconSrc="/grad-hat.png"
          arrowIcon="/arrow-square-right.png"
          color="#c51c41"
          image1Src="/projects/projectcard1a.png"
          image2Src="/projects/projectcard1b.png"
          link="https://student-stars.vercel.app"
        />

        <ProjectCard
          title="Internship Tracker"
          description={[
            "Developed a dashboard to track internship applications,",
            "which allows users to upload links to job postings,",
            "track their status, and manage all their applications in one place.",
          ]}
          iconSrc="/langchain.png"
          arrowIcon="/arrow-square-right.png"
          color="black"
          image1Src="/projects/projectcard2a.png"
          image2Src="/projects/projectcard2b.png"
          link="https://internship-tracker-nine.vercel.app"
        />


      </div>
    </section>
  );
}

import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <b className="projects">Projects</b>
      <div className="checkOutSome">
        Check out some of my work! — This Summer my goal was to build as many projects as I could, so take a peek at some of my work! (some are a WIP :D)
      </div>

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
        link="https://student-stars.vercel.app" // 🔗 Replace with your actual URL
      />

      <ProjectCard
        title="Internship Tracker"
        description={[
          "Developed a dashboard to track internship applications, ",
          "which allows users to upload links to job postings, ",
          "track their status, and manage all their applications in one place.",
        ]}
        iconSrc="/langchain.png"
        arrowIcon="/arrow-square-right.png"
        color="black"
        image1Src="/projects/projectcard2a.png"
        image2Src="/projects/projectcard2b.png"
        link="https://internship-tracker-nine.vercel.app" // 🔗 Replace with your deployed tracker URL
      />

      {/* Future projects can be added here */}
    </section>
  );
}

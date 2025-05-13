import type { NextPage } from 'next';
import Experiences from '../components/Experiences';
import ProjectCard from '../components/ProjectCard';

const HomePage: NextPage = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("keenanyang1027@gmail.com");
    alert("Email copied to clipboard!");
  };

const projects = [
    {
      title: "StudentStars",
      description: "Designed a Website to help Grade 12 Students understand & research Ontario Universities more efficiently and guide them through the admissions process ",
      image: "/grad-hat.png",
      color: "#c51c41",
      link: "https://student-stars.vercel.app/",
    },
    {
      title: "LangChain Bot",
      description: "Created a LangChain Chatbot for a Dental Office that scrapes it’s website for information and provides the user specific answers on the company using the website’s information - Project for Auxio.AI",
      image: "/langchain.png",
      color: "#00bcd4",
      link: "https://langchain-chatbot-teal.vercel.app/",
    },
    {
      title: "LinkedIn Scraper",
      description: "Created an automated Python Script that will scrape LinkedIn job postings for information and upload them to a Google Spreadsheet",
      image: "/scraper.png",
      color: "#1C6BC5",
    },
  ];

  return (
    <div className="homePage reveal">
      <div className="heroSection">
        <a href="https://www.linkedin.com/in/keenan-yang-5155682a2/" className="profileContainer">
          <img src="/Ellipse 1.png" alt="My Photo" />
          <div className="groupItem" />
          <div className="lookingForWork">Looking For Work</div>
          <b className="keenanYang">Keenan Yang</b>
        </a>
        
        <b className="intro">Hey, I’m Keenan Yang!</b>
        
        <div className="descContainer">
          <span className="descMain">
            <span className="descSide">{`I am a `}</span>
            <span>Computer Science Student</span>
            <span className="descSide"> at</span>
          </span>
          <span className="descSide">
            <span>{` `}</span>
          </span>
          <b className="queensUniversity">{`Queen’s University `}</b>
        </div>
      </div>

      <div className="experienceSection">
        <Experiences />
      </div> 

      <div className="quickLinks">
        <a href="https://docs.google.com/document/d/10qlqZVFDV_D6MUNa9RuC4EwqFTjKMolasIogbjmZ1xc/edit?usp=sharing" className="resumeParent">
          <img className="FirstIcons" src="/File.png" alt="Resume" />
          <div className="frameChild" />
          <div className="label">
            <b className="myExperience">Resume</b>
          </div>
        </a>

        <div className="emailParent" onClick={copyEmail}>
          <img className="FirstIcons" src="/email.png" alt="Email" />
          <div className="frameChild" />
          <div className="label">
            <b className="myExperience">Email</b>
          </div>
        </div>

        <a href="https://www.linkedin.com/in/keenan-yang-5155682a2/" className="linkedInParent">
          <img className="FirstIcons" src="/linkedin.png" alt="LinkedIn" />
          <div className="frameChild" />
          <div className="label">
            <b className="myExperience">LinkedIn</b>
          </div>
        </a>

        <a href="https://github.com/Keenan240" className="githubParent">
          <img className="FirstIcons" src="/github.png" alt="GitHub" />
          <div className="frameChild" />
          <div className="label">
            <b className="myExperience">GitHub</b>
          </div>
        </a>
      </div>

      <div className="projectsSection">
        <b className="projects">Projects</b>
        <div className="checkOutSome">
          Check out some of my work! — This Summer my goal was to build as many projects as I could. Real Code or Vibe Code, any code to me is experience learning, so take a peek at some of my projects!
        </div>
      </div>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            color={project.color}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

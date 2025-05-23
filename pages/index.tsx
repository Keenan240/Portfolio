import type { NextPage } from 'next';
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import ProjectsSection from "../components/ProjectsSection";

const HomePage: NextPage = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("keenanyang1027@gmail.com");
    alert("Email copied to clipboard!");
  };

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

      <Skills skills={["Python", "React", "HTML", "CSS", "Figma"]} />

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
        <ProjectsSection />
      </div>
      
    </div>
  );
};

export default HomePage;

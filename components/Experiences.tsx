export default function Experiences() {
  const experiences = [
    {
      title: "UI/UX Designer",
      detail: "2025 - Club - Queen’s UX Club",
      icon: "uxclub.jfif"
    },
    {
      title: "UI/UX Designer",
      detail: "2025 - Club - Queen’s Technology & Media Association",
      icon: "qtma.png"
    },
    {
      title: "Full Stack Developer",
      detail: "2025 - Internship - CCIA Solutions",
      icon: "CCIA.jfif"
    },
    {
      title: "AI Design Team Member",
      detail: "2024 - Club - QMINDS",
      icon: "qminds.jfif"
    },
    {
      title: "Junior UI/UX Designer",
      detail: "2024 - Club - Queen’s Technology & Media Association",
      icon: "qtma.png"
    },

  ];

  return (
    <div className="experienceBox">
      <div className="experienceBoxChild" />
      <div className="myExperienceWrapper">
        <b className="myExperience">My Experience</b>
      </div>

      <div className="rolesContainer">
        {experiences.map((exp, index) => (
          <div className="roleEntry" key={index}>
            <img className="roleIcon" src={exp.icon} alt="" />
            <div className="roleText">
              <div className="title">{exp.title}</div>
              <div className="detail">{exp.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

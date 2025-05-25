export default function Experiences() {
  const experiences = [
    {
      title: "UI/UX Designer",
      detail: "2025 - Club - Queen’s UX Club",
      icon: "/uxclub.jfif",
    },
    {
      title: "UI/UX Designer",
      detail: "2025 - Club - Queen’s Technology & Media Association",
      icon: "/qtma.png",
    },
    {
      title: "Full Stack Developer",
      detail: "2025 - Internship - CCIA Solutions",
      icon: "/CCIA.jfif",
    },
    {
      title: "AI Design Team Member",
      detail: "2024 - Club - QMINDS",
      icon: "/qminds.jfif",
    },
    {
      title: "Junior UI/UX Designer",
      detail: "2024 - Club - Queen’s Technology & Media Association",
      icon: "/qtma.png",
    },
  ];

  return (
    <div className="cursor-pointer relative mt-10 w-[350px] h-[350px] text-sm rounded-[25px] bg-[#f8f8f8] shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      {/* Inner shadow background layer */}
      <div className="absolute inset-0 rounded-[25px] bg-[#f8f8f8] border-[5px] border-white z-0" />

      {/* Header label */}
      <div className="absolute top-5 left-5 bg-white rounded-[25px] z-10 px-5 py-2 text-[20px] font-semibold">
        My Experience
      </div>

      {/* Scrollable experience list */}
      <div className="absolute top-[84px] left-5 right-5 bottom-5 overflow-y-auto pr-2 z-10">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-6 flex flex-col items-start">
            <img
              src={exp.icon}
              alt=""
              className="w-[50px] h-[50px] rounded-[15px] object-contain mb-1"
            />
            <div className="flex flex-col">
              <span className="text-[14px] font-medium">{exp.title}</span>
              <span className="text-[10px] text-[#878787]">{exp.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

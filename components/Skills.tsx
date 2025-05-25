interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="text-4xl mt-5 flex flex-wrap justify-left ">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="inline-block m-2 px-4 py-2 border 
          border-black rounded-full text-base font-medium
          shadow-md cursor-pointer transition-transform duration-300 ease-in-out 
          hover:-translate-y-1 hover:shadow-lg"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

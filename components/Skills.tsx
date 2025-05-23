interface SkillTagsProps {
  skills: string[];
}

export default function SkillTags({ skills }: SkillTagsProps) {
  return (
    <div className="skillsContainer">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="skillsBox"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

const Skills = () => {
  const Languages = ['JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'];
  const Frameworks = [
    'ReactJs', 'TailwindCSS', 'Express',
    'NextJs'
  ];
  const BackendandDatabases = ['PostgreSql', 'Nodejs', 'MongoDB', 'Firebase']
  const Versioncontrol  = ['Git and Github']
  const Deployment = ['Vercel', 'Github Actions']
  const other = ['Web Performance Optimization', 'Testing', ' Bash scripting']
  const softSkills = ['Collaborative', 'Curious', 'Adaptable'];



  const SkillGroup = ({ title, items }) => (
    <div className="mb-6">
      <h1 className="text-xl md:text-2xl font-semibold text-black/80 mb-2">{title}</h1>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="bg-primary/25 text-sm md:text-base px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full page-shadow bg-white px-10 overflow-y-auto">
      <div className="relative mb-4">
        <div className="text-center text-6xl xl:text-8xl font-bold text-black/5">
          SKILLS
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold md:text-4xl">
          My Strengths
        </h1>
      </div>

      <SkillGroup title="Languages" items={Languages} />
      <SkillGroup title="Framework/Libraries" items={Frameworks} />
      <SkillGroup title="Backend/Databases" items={BackendandDatabases} />
      <SkillGroup title="Versioncontrol" items={Versioncontrol} />
      <SkillGroup title="Other skills" items={other} />
      <SkillGroup title="Deployment" items={Deployment} />
      <SkillGroup title="Soft Skills" items={softSkills} />
    </div>
  );
};

export default Skills;
import SkillCard from "../../components/SkillCard/SkillCard";

const Skills = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto pt-16 box-border">
        <div className="w-full h-auto pt-32 box-border mb-12">
          <div className="w-full p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            <h1 className="font-semibold text-5xl text-black">Skills</h1>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-16 p-6 md:p-0">
          <SkillCard skillTitle="Languages" frontEndSkills={languagesSkills} />
          <SkillCard
            skillTitle="Frameworks"
            frontEndSkills={frameworksSkills}
          />
          <SkillCard
            skillTitle="Cloud Computing"
            frontEndSkills={cloudComputingSkills}
          />
          <SkillCard skillTitle="Test" frontEndSkills={testingSkills} />
          <SkillCard skillTitle="Libraries" frontEndSkills={librariesSkills} />
          <SkillCard
            skillTitle="Project Management"
            frontEndSkills={proyectManagementSkills}
          />
          <SkillCard
            skillTitle="Version Control"
            frontEndSkills={versionControlSkills}
          />
          <SkillCard skillTitle="Tools" frontEndSkills={toolsSkills} />
        </div>
      </div>
    </div>
  );
};

const languagesSkills = [
  "Typescript",
  "Javascript",
  "Python (Mid)",
  "MongoDB",
  "MySQL",
  "SSML",
  "HTML / CSS / SCSS",
];

const frameworksSkills = ["Angular", "FastApi (Python)", "ExpressJS"];

const cloudComputingSkills = ["AWS EC2, S3", "Firebase", "Docker (Basics)"];

const testingSkills = ["Karma", "Jasmine", "Jest"];

const librariesSkills = [
  "React JS",
  "Pymongo",
  "Mongoose",
  "Mysql2",
  "Google Maps API",
  "JWT",
];

const proyectManagementSkills = ["Jira", "Azure DevOps"];

const versionControlSkills = ["Git (Github, Bitbucket)"];

const toolsSkills = ["Figma", "AdobeXD", "Prettier", "ESLint"];

export default Skills;

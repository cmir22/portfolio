import SkillCard from "../../components/SkillCard/SkillCard";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skillsContainer">
        <div className="skillsTitle">
          <h1>Skills</h1>
        </div>

        <div className="skillsCardContainer">
          <SkillCard
            skillTitle="Languages"
            frontEndSkills={languagesSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Frameworks"
            frontEndSkills={frameworksSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Cloud Computing"
            frontEndSkills={cloudComputingSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Test"
            frontEndSkills={testingSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Libraries"
            frontEndSkills={librariesSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Project Management"
            frontEndSkills={proyectManagementSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Version Control"
            frontEndSkills={versionControlSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Tools"
            frontEndSkills={toolsSkills}
          ></SkillCard>
        </div>
      </div>
    </>
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

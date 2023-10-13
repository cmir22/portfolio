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
            skillTitle="Front-End"
            frontEndSkills={frontEndSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Back-End"
            frontEndSkills={backEndSkills}
          ></SkillCard>
          <SkillCard
            skillTitle="Languages"
            frontEndSkills={languagesSkills}
          ></SkillCard>
          <SkillCard skillTitle="More" frontEndSkills={moreSkills}></SkillCard>
        </div>
      </div>
    </>
  );
};

const frontEndSkills = [
  "Angular",
  "React",
  "Google Maps API",
  "Prettier",
  "ESlint",
  "Tailwind",
  "Bootstrap",
  "Axios",
];

const backEndSkills = [
  "NodeJS (ExpressJS)",
  "FastAPI (Python)",
  "AWS EC2, S3",
  "MongoDB and Pymongo, Mongoose",
  "Firebase",
  "SQL, SSMS",
  "JWT",
  "Docker",
];

const languagesSkills = [
  "Javascript, Typescript",
  "Python",
  "SQL, SSMS",
  "HTML, CSS / SCSS",
];

const moreSkills = [
  "Jira, Azure DevOps",
  "JWT",
  "Prettier, ESlint",
  "AWS EC2, S3",
  "Git (Github, Bitbucket, Azure DevOps)",
];

export default Skills;

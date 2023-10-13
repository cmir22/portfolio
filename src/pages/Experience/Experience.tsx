import "./Experience.scss";

const Experience = () => {
  return (
    <>
      <div className="experienceContainer">
        <div className="experienceTitle">
          <h1>Experience</h1>
        </div>

        <div className="experienceCardContainer">
          {/* <div className="roadmapLine"></div> */}
          <div className="experienceStuffs">
            <ExperienceStuff></ExperienceStuff>
            &nbsp;
            <hr></hr>
            &nbsp;
            <ExperienceSerialleStuff></ExperienceSerialleStuff>
            &nbsp;
            <hr></hr>
            &nbsp;
            <ExperienceFeelancerStuff></ExperienceFeelancerStuff>
          </div>
        </div>
      </div>
    </>
  );
};

const ExperienceStuff = () => {
  return (
    <>
      <div className="experienceName">
        <p>Tata Consultancy Services (TCS) Web Developer</p>
        <p>May 2022 - Current</p>
      </div>

      <div className="experienceInfo">
        <p className="infoFather">Proficient in Front-End Development:</p>
        <li className="infoChild">
          Extensive experience as a Web Developer, specializing in Angular 8+
          framework.
        </li>
        <li className="infoChild">
          Proficient in leveraging Angular features and best practices to create
          dynamic, interactive, and user-friendly web applications.
        </li>
        <p className="infoFather">Strong Command of State Management:</p>
        <li className="infoChild">
          Expertise in utilizing NgRx for state management in Angular
          applications, ensuring efficient data flow and application stability.
        </li>
        <p className="infoFather">Rigorous Testing and Quality Assurance:</p>
        <li className="infoChild">
          Proficient in writing unit tests using Jasmine and conducting
          integration tests with Karma to ensure robust code quality and
          functionality.
        </li>
        <p className="infoFather">Version Control and CI/CD:</p>
        <li className="infoChild">
          Utilized Azure DevOps for version control, continuous integration, and
          continuous deployment, streamlining the development process and
          ensuring seamless collaboration.
        </li>
        <p className="infoFather">Code Quality and Security:</p>
        <li className="infoChild">
          Implemented code analysis tools such as SonarCloud to assess and
          enhance code quality, ensuring adherence to best practices and
          identifying areas for improvement.
        </li>
        <p></p>
      </div>
    </>
  );
};

const ExperienceSerialleStuff = () => {
  return (
    <>
      <div className="experienceName">
        <p>Serialle Entrepreneurs Full Stack Web Developer</p>
        <p>January 2021 - May 2022</p>
      </div>

      <div className="experienceInfo">
        {/* ------------------------ */}
        <p className="infoFather">
          Proficient Full Stack Web Developer with expertise in:
        </p>
        <li className="infoChild">
          Node.js and Express.js for backend development
        </li>
        <li className="infoChild">
          AWS services including S3 and EC2 for cloud deployment
        </li>
        <li className="infoChild">SQL Server for database management</li>
        <li className="infoChild">
          Designing and optimizing stored procedures for efficient data
          retrieval and manipulation
        </li>
        <li className="infoChild">Angular for front-end development</li>
        {/* ------------------------ */}

        <p className="infoFather">Demonstrated leadership skills by:</p>
        <li className="infoChild">
          Leading and managing projects from inception to completion
        </li>
        <li className="infoChild">
          Planning project timelines, setting goals, and defining business
          requirements
        </li>
        <li className="infoChild">
          Assigning tasks and responsibilities to team members, ensuring
          efficient workflow
        </li>

        {/* ------------------------ */}
        <p className="infoFather">Extensive experience in API development:</p>
        <li className="infoChild">
          Designing, implementing, and maintaining robust APIs to facilitate
          seamless communication between different parts of applications
        </li>

        {/* ------------------------ */}
        <p className="infoFather">
          Proven track record in application maintenance and development:
        </p>
        <li className="infoChild">
          Successfully maintained existing applications, troubleshooting and
          implementing updates as necessary
        </li>
        <li className="infoChild">
          Designed and developed new applications to meet evolving business
          needs
        </li>

        <p></p>
      </div>
    </>
  );
};

const ExperienceFeelancerStuff = () => {
  return (
    <>
      <div className="experienceName">
        <p>Freelancer Web Developer and Designer</p>
        <p>March 2020</p>
      </div>
      &nbsp;
      <p>
        During my time as a freelancer, I specialized in providing comprehensive
        solutions for businesses
      </p>
      &nbsp;
      <div className="experienceInfo">
        <li className="infoChild">
          Specialized in providing comprehensive design solutions for businesses
        </li>
        <li className="infoChild">Proficient in logo design and development</li>
        <li className="infoChild">Skilled in HTML/CSS website development</li>
        <li className="infoChild">
          Implemented QR code solutions tailored for restaurant establishments
        </li>
        <li className="infoChild">
          Designed promotional images for businesses
        </li>
        <li className="infoChild">
          Managed advertising campaigns and social media presence
        </li>
        <li className="infoChild">
          Crafted customized UI/UX web pages for local businesses
        </li>
        <li className="infoChild">
          Demonstrated effective communication and collaboration with clients
        </li>
        <li className="infoChild">
          Translated client visions into tangible design outcomes
        </li>
      </div>
    </>
  );
};

export default Experience;

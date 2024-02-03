const Experience = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-auto pt-16 box-border">
          <div className="w-full p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            <h1 className="font-semibold text-3xl text-black">Experience</h1>
          </div>
        </div>

        <div className="w-full h-auto p-4 md:p-8">
          <div className="w-full flex flex-col gap-8 max-w-2xl mx-auto">
            <ExperienceStuff />
            <hr className="my-8 border-t border-white" />
            <ExperienceSerialleStuff />
            <hr className="my-8 border-t border-white" />
            <ExperienceFeelancerStuff />
          </div>
        </div>
      </div>
    </>
  );
};

const ExperienceStuff = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-12">
          <p className="text-blue-400">
            Tata Consultancy Services (TCS) Web Developer
          </p>
          <p className="text-white">May 2022 - Current</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white">Proficient in Front-End Development:</p>
          <li className="pl-8 text-white">
            Extensive experience as a Web Developer, specializing in Angular 8+
            framework.
          </li>
          <li className="pl-8 text-white">
            Proficient in leveraging Angular features and best practices to
            create dynamic, interactive, and user-friendly web applications.
          </li>
          <p className="text-white">Strong Command of State Management:</p>
          <li className="pl-8 text-white">
            Expertise in utilizing NgRx for state management in Angular
            applications, ensuring efficient data flow and application
            stability.
          </li>
          <p className="text-white">Rigorous Testing and Quality Assurance:</p>
          <li className="pl-8 text-white">
            Proficient in writing unit tests using Jasmine and conducting
            integration tests with Karma to ensure robust code quality and
            functionality.
          </li>
          <p className="text-white">Version Control and CI/CD:</p>
          <li className="pl-8 text-white">
            Utilized Azure DevOps for version control, continuous integration,
            and continuous deployment, streamlining the development process and
            ensuring seamless collaboration.
          </li>
          <p className="text-white">Code Quality and Security:</p>
          <li className="pl-8 text-white">
            Implemented code analysis tools such as SonarCloud to assess and
            enhance code quality, ensuring adherence to best practices and
            identifying areas for improvement.
          </li>
        </div>
      </div>
    </>
  );
};

const ExperienceSerialleStuff = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-12">
          <p className="text-blue-400">
            Serialle Entrepreneurs Full Stack Web Developer
          </p>
          <p className="text-white">January 2021 - May 2022</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white">
            Proficient Full Stack Web Developer with expertise in:
          </p>
          <li className="pl-8 text-white">
            Node.js and Express.js for backend development
          </li>
          <li className="pl-8 text-white">
            AWS services including S3 and EC2 for cloud deployment
          </li>
          <li className="pl-8 text-white">
            SQL Server for efficient database management
          </li>
          <li className="pl-8 text-white">
            Designed and optimized stored procedures for efficient data
            retrieval and manipulation.
          </li>
          <li className="pl-8 text-white">
            Utilized Angular for front-end development
          </li>
          <li className="pl-8 text-white">
            Demonstrated leadership skills by leading and managing projects from
            inception to completion.
          </li>
          <li className="pl-8 text-white">
            Planned project timelines, set goals, and defined business
            requirements.
          </li>
          <li className="pl-8 text-white">
            Assigned tasks and responsibilities to team members, ensuring
            efficient workflow.
          </li>
          <p className="text-white">Extensive experience in API development:</p>
          <li className="pl-8 text-white">
            Designed, implemented, and maintained robust APIs to facilitate
            seamless communication between different parts of applications.
          </li>
          <p className="text-white">
            Proven track record in application maintenance and development:
          </p>
          <li className="pl-8 text-white">
            Successfully maintained existing applications, troubleshooting and
            implementing updates as necessary.
          </li>
          <li className="pl-8 text-white">
            Designed and developed new applications to meet evolving business
            needs.
          </li>
        </div>
      </div>
    </>
  );
};

const ExperienceFeelancerStuff = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-12">
          <p className="text-blue-400">Freelancer Web Developer and Designer</p>
          <p className="text-white">March 2020</p>
        </div>
        <p className="text-white">
          During my time as a freelancer, I specialized in providing
          comprehensive solutions for businesses. I was responsible for various
          aspects of web development and design projects.
        </p>

        <div className="flex flex-col gap-2">
          <li className="pl-8 text-white">
            Specialized in providing comprehensive design solutions for
            businesses, creating visually appealing and user-friendly websites.
          </li>
          <li className="pl-8 text-white">
            Proficient in logo design and development, ensuring brand
            consistency and identity across different platforms.
          </li>
          <li className="pl-8 text-white">
            Developed and maintained responsive websites, ensuring optimal user
            experience across devices.
          </li>
          <li className="pl-8 text-white">
            Collaborated with clients to understand their vision and
            requirements, translating them into effective design solutions.
          </li>
          <li className="pl-8 text-white">
            Utilized HTML, CSS, and JavaScript to implement interactive and
            dynamic features on websites.
          </li>
          <li className="pl-8 text-white">
            Managed and executed advertising campaigns, enhancing the online
            presence of clients' businesses.
          </li>
          <li className="pl-8 text-white">
            Crafted customized UI/UX web pages for local businesses, aligning
            design with business goals and user expectations.
          </li>
          <li className="pl-8 text-white">
            Demonstrated effective communication and collaboration with clients
            throughout the project lifecycle.
          </li>
          <li className="pl-8 text-white">
            Translated client visions into tangible design outcomes, ensuring
            client satisfaction and project success.
          </li>
        </div>
      </div>
    </>
  );
};

export default Experience;

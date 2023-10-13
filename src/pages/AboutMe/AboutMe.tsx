import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <>
      <div className="aboutMeContainer">
        <div className="aboutMeTitle">
          <h1>About Me</h1>
        </div>

        <div className="aboutMeCardContainer">
          <p>
            Hello! I'm Cruz Ibarra, a dedicated developer proudly from México. I
            hold a degree in Computer Systems Engineering with a specialization
            in databases from the Instituto Tecnológico de Tijuana.
          </p>

          <p>
            With a deep passion for coding and proficiency in both front-end and
            back-end development, I'm enthusiastic about crafting software
            solutions that meet functional requirements with a focus on
            performance and efficiency. My academic journey has equipped me with
            a solid foundation in computer science, and I'm eager to apply this
            knowledge to real-world projects.
          </p>

          <p>
            I thrive in collaborative environments and enjoy tackling challenges
            head-on. When I'm not coding, you can find me exploring new
            technologies, honing my development skills, or immersing myself in
            the rich culture and cuisine of México.
          </p>

          <p>
            Looking forward to creating innovative and impactful software
            solutions!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

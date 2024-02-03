const AboutMe = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto pt-16 box-border">
        <div className="w-full p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          <h1 className="font-semibold text-3xl text-black">About me</h1>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-16 mt-6 p-8">
        <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl">
          Hello! I'm Cruz Ibarra, a dedicated developer proudly from México. I
          hold a degree in Computer Systems Engineering with a specialization in
          databases from the Instituto Tecnológico de Tijuana.
        </p>

        <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl">
          With a deep passion for coding and proficiency in both front-end and
          back-end development, I'm enthusiastic about crafting software
          solutions that meet functional requirements with a focus on
          performance and efficiency. My academic journey has equipped me with a
          solid foundation in computer science, and I'm eager to apply this
          knowledge to real-world projects.
        </p>

        <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl">
          I thrive in collaborative environments and enjoy tackling challenges
          head-on. When I'm not coding, you can find me exploring new
          technologies, honing my development skills, or immersing myself in the
          rich culture and cuisine of México.
        </p>

        <p className="text-white text-base md:text-lg lg:text-xl xl:text-2xl">
          Looking forward to creating innovative and impactful software
          solutions!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

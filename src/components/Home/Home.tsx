const Home = () => {
  return (
    <div className="home min-h-screen flex items-start justify-center">
      <div className="homeContainer w-full lg:w-70 min-h-screen flex flex-col items-start justify-center p-5 lg:p-10 gap-5 lg:gap-10">
        <div className="title">
          <h1 className="text-white text-3xl lg:text-4xl font-light">
            Hello World
          </h1>
        </div>
        <div className="description">
          <p className="text-white text-base lg:text-lg font-light">
            Hello! I'm Cruz Ibarra, a passionate developer. Here, you'll find a
            showcase of my projects and a glimpse into my journey in the world
            of software development. From crafting efficient back-end solutions
            to designing sleek front-end interfaces, I'm dedicated to building
            innovative and impactful applications. Feel free to explore my work
            and get in touch if you'd like to collaborate or learn more about my
            skills and experience.
          </p>
          <p className="text-white text-base lg:text-lg pt-3">
            Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import aboutimg from "../../assets/about-img.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="home-banner">
        <h2>about us</h2>
      </div>

      <div className="about-us">
        <div className="about-textbox">
          <h3>about MUTC</h3>
          <h2>MUTC fosters tech enthusiasts to thrive and innovate</h2>
          <p>
            We aim to bridge the gap between theoretical knowledge and practical
            application, preparing our members for the future of
            technology-driven industries.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutimg} alt="about image" />
        </div>
      </div>
    </section>
  );
};

export default About;

import "../Home/home.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-textbox">
        <h2 className="hero-textbox-subheading">welcome to:</h2>
        <h1 className="hero-textbox-mainheading">
          murang'a university tech club
        </h1>
        <p>
          Murang'a University Tech Club is the technology club at Murang'a
          University, dedicated to advancing members' knowledge in programming
          and technology
        </p>
        <div className="hero-ctas">
          <a href="#about" className="hero-cta-btn">
            about us
          </a>
          <a href="#testimonials" className="hero-cta-btn">
            testimonials
          </a>
        </div>
      </div>
      {/* <div className="background-img">
        <video src={background} autoPlay loop muted />
      </div> */}
    </section>
  );
};

export default Hero;

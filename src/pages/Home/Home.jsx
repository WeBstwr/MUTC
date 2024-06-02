import "../Home/home.css";
import Hero from "./Hero";
import About from "./About";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
      <Testimonials />
    </section>
  );
};

export default Home;

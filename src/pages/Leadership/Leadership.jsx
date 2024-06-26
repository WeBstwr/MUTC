import Banner from "../../components/Banner/Banner";
import Leader from "./Leader";
import "./leadership.css";
import leaders from "../../data/leaders";
const Leadership = () => {
  return (
    <>
      <Banner
        mainText="our leaders"
        subText="
Welcome to MUTC's leadership page. Meet our passionate leaders driving innovation, fostering learning, and empowering our tech community."
      />

      <section className="leaders-sec">
        {leaders.map((currentLeader, i) => (
          <Leader
            key={i}
            image={currentLeader.Image}
            xUrl={currentLeader.xUrl}
            fbUrl={currentLeader.fbUrl}
            inUrl={currentLeader.inUrl}
            igUrl={currentLeader.igUrl}
            fullName={currentLeader.fullName}
            role={currentLeader.role}
            biography={currentLeader.biography}
          />
        ))}
      </section>
    </>
  );
};

export default Leadership;

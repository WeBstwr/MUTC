import {
  TbZodiacPisces,
  TbZodiacAquarius,
  TbZodiacAries,
  TbZodiacTaurus,
} from "react-icons/tb";

const Feedback = ({ icon, title, reason, altColor }) => {
  return (
    <div
      className={altColor === true ? `feedback feedback-alt-Color` : `feedback`}
    >
      <div className="feedback-icon-wrapper">{icon}</div>
      <div className="feedback-title">{title}</div>
      <div className="feedback-reason">{reason}</div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="home-banner">
        <h2>testimonials</h2>
      </div>
      <div className="testimonials-wrapper">
        <Feedback
          icon={<TbZodiacPisces />}
          title="webster ifedha"
          reason="MUTC provided invaluable experiences and enhanced my skills significantly."
        />
        <Feedback
          altColor={true}
          icon={<TbZodiacAries />}
          title="denzel lawrence"
          reason="MUTC has greatly expanded my network and deepened my understanding of technology."
        />
        <Feedback
          icon={<TbZodiacAquarius />}
          title="ian kimani"
          reason="Joining Murang'a University Tech club was one of the best decisions for my career."
        />
        <Feedback
          altColor={true}
          icon={<TbZodiacTaurus />}
          title="owen flavian"
          reason="MUTC inspires creativity and technological innovation. It is the best club to join."
        />
      </div>
    </section>
  );
};

export default Testimonials;

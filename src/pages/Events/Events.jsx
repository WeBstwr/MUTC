import Banner from "../../components/Banner/Banner";
import "./events.css";

const Events = () => {
  return (
    <>
      <Banner mainText="our events" subText="This is our weekly schedule" />

      <section className="events">
        <div className="events-section">
          <div className="event-day-mon">
            <div className="event-content">
              <h2 className="event-title">cyber security</h2>
              <h3 className="event-lead">webster ifedha</h3>
              <p className="event-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ipsa.
              </p>
              <h2 className="event-time">monday: 4-7pm</h2>
              <h3>Comp Lab F04</h3>
            </div>
            <p className="book">book sit &rarr;</p>
          </div>

          <div className="event-day-tue">
            <div className="event-content">
              <h2 className="event-title">UI/UX</h2>
              <h3 className="event-lead">manase gunga</h3>
              <p className="event-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ipsa.
              </p>
              <h2 className="event-time">tuesday: 5-8pm</h2>
              <h3>Comp Lab F04</h3>
            </div>
            <p className="book">book sit &rarr;</p>
          </div>

          <div className="event-day-wed">
            <div className="event-content">
              <h2 className="event-title">web dev</h2>
              <h3 className="event-lead">carol githenduka</h3>
              <p className="event-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ipsa.
              </p>
              <h2 className="event-time">wednesday: 6-9pm</h2>
              <h3>Comp Lab F04</h3>
            </div>
            <p className="book">book sit &rarr;</p>
          </div>

          <div className="event-day-thur">
            <div className="event-content">
              <h2 className="event-title">mobile dev</h2>
              <h3 className="event-lead">stanley amunze</h3>
              <p className="event-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ipsa.
              </p>
              <h2 className="event-time">thursday: 4-7pm</h2>
              <h3>Comp Lab F04</h3>
            </div>
            <p className="book">book sit &rarr;</p>
          </div>

          <div className="event-day-fri">
            <div className="event-content">
              <h2 className="event-title">cloud engineering</h2>
              <h3 className="event-lead">paul karanja</h3>
              <p className="event-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ipsa.
              </p>
              <h2 className="event-time">friday: 3-6pm</h2>
              <h3>Comp Lab F04</h3>
            </div>
            <p className="book">book sit &rarr;</p>
          </div>

          <div className="event-day-sat">
            <div className="event-content">
              <h2 className="event-title">power platform</h2>
              <h3 className="event-lead">evyonn mbithe</h3>
              <p className="event-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                ipsa.
              </p>
              <h2 className="event-time">saturday: 1-4pm</h2>
              <h3>Comp Lab F04</h3>
            </div>
            <p className="book">book sit &rarr;</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;

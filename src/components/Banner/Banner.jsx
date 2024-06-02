import "./banner.css";

const Banner = ({ mainText, subText }) => {
  return (
    <div className="banner">
      <h2>{mainText}</h2>
      <p>{subText}</p>
    </div>
  );
};

export default Banner;

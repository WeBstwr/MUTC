const Track = ({ image, title, description }) => {
  return (
    <div className="track">
      <div className="track-img-wrapper">
        <img src={image} alt={title} className="track-img" />
      </div>
      <div className="track-content">
        <h3 className="track-title">{title}</h3>
        <p className="track-description">{description}</p>
      </div>
    </div>
  );
};

export default Track;

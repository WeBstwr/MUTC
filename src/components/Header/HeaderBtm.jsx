import "./header.css";

const HeaderBtm = () => {
  return (
    <div className="header-btm">
      <nav className="header-nav">
        <ol className="header-nav-list">
          <li className="header-nav-item">
            <a href="">home</a>
          </li>
          <li className="header-nav-item">
            <a href="">leadership</a>
          </li>
          <li className="header-nav-item">
            <a href="">tracks</a>
          </li>
          <li className="header-nav-item">
            <a href="">events</a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default HeaderBtm;

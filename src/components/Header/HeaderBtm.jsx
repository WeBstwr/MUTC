import { Link } from "react-router-dom";
import "./header.css";

const HeaderBtm = () => {
  return (
    <div className="header-btm">
      <nav className="header-nav">
        <ol className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/">home</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Leadership">leadership</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Tracks">tracks</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Events">events</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default HeaderBtm;

import "./footer.css";
import today from "../../utilities/date";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {today()} Webster Ifedha. All rights reserved</p>
    </div>
  );
};

export default Footer;

import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import "./header.css";

const Socials = ({ icon, label }) => {
  return (
    <div className="socials">
      <div className="socials-icon-wrapper">{icon}</div>
      {label}
    </div>
  );
};

const HeaderTop = () => {
  return (
    <div className="header-top">
      <h1 className="logo">MUT.CLUB</h1>
      <div className="header-social">
        <Socials icon={<MdEmail />} label={"info@mutc.com"} />
        <Socials icon={<IoLogoWhatsapp />} label={"+254715652746"} />
      </div>
    </div>
  );
};

export default HeaderTop;

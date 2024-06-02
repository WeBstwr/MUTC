import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Leaders = ({image, xUrl, igUrl, fbUrl, inUrl, fullName, role, biography}) => {
    return(
        <div className="leader">
            <div className="leader-image">
                <img src={image} alt={`an image of ${fullName}`} />
                <div className="social-media">
                    {xUrl && <Link to={xUrl}><FaXTwitter/></Link>}
                    {igUrl && <Link to={igUrl}><FaInstagram/></Link>}
                    {fbUrl && <Link to={fbUrl}><FaFacebook/></Link>}
                    {inUrl && <Link to={inUrl}><FaLinkedin/></Link>}
                </div>
            </div>
            <div className="leader-body">
                <h3>{fullName}</h3>
                <p className="leader-body-role">{role}</p>
                <p className="leader-body-bio">{biography}</p>
            </div>
        </div>
    )
};

export default Leaders;
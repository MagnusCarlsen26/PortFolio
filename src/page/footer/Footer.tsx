import "./footer.css";
import PhoneSvg from "../../assets/svgs/PhoneSvg";
import EmailSvg from "../../assets/svgs/EmailSvg";
import LinkedInSvg from "../../assets/svgs/LinkedInSvg";
import TwitterSvg from "../../assets/svgs/TwitterSvg";

export default function Footer() {
    return (
        <footer>
            <p>&copy; Khushal Sindhav</p>
            <div className="footer-contact">
                <p><a href="tel:+919328576258"><PhoneSvg /> +91-9328576258</a></p>
                <p><a href="mailto:khushal.sindhav26@gmail.com"><EmailSvg /> khushal.sindhav26@gmail.com</a></p>
                <p>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <LinkedInSvg /> 
                    </a>
                </p>
                <p>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                    <TwitterSvg /> 
                    </a>
                </p>
            </div>
        </footer>
    );
}

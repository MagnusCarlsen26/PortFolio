import "./footer.css";
import PhoneSvg from "../../assets/svgs/PhoneSvg";
import EmailSvg from "../../assets/svgs/EmailSvg";
import LinkedInSvg from "../../assets/svgs/LinkedInSvg";
import TwitterSvg from "../../assets/svgs/TwitterSvg";
import GitHubSvg from "../../assets/svgs/GitHubSvg";

export default function Footer() {
    return (
        <footer>
            <p>&copy; Khushal Sindhav</p>
            <div className="footer-contact">
                <p><a href="tel:+919328576258"><PhoneSvg /> +91-9328576258</a></p>
                <p><a href="mailto:khushal.sindhav26@gmail.com"><EmailSvg /> khushal.sindhav26@gmail.com</a></p>
                <p>
                    <a href="https://www.linkedin.com/in/khushal-sindhav-109602229/" target="_blank" rel="noopener noreferrer">
                        <LinkedInSvg /> 
                    </a>
                </p>
                <p>
                    <a href="https://x.com/KHUSHALSINDHAV2" target="_blank" rel="noopener noreferrer">
                    <TwitterSvg /> 
                    </a>
                </p>
                <p>
                    <a href="http://github.com/MagnusCarlsen26/" target="_blank" rel="noopener noreferrer">
                        <GitHubSvg /> 
                    </a>
                </p>
            </div>
        </footer>
    );
}

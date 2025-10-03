import "./navbar.css"
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav>
            {/* Empty Divs. Don't Delete. */}
            <div></div>
        
            <section className="navbar-main">
                <div 
                    onMouseDown={() => navigate("/")} 
                    className={`navbar-home-link ${isActive('/') ? 'active' : ''}`}
                >
                    $ cd /home
                </div>
                <div 
                    onMouseDown={() => navigate("/about")}
                    className={`navbar-home-link ${isActive('/about') ? 'active' : ''}`}
                >
                    $ cd /About Me
                </div>
                <div 
                    onMouseDown={() => navigate("/blogs")}
                    className={`navbar-home-link ${isActive('/blogs') ? 'active' : ''}`}
                >
                    $ cd /Blogs
                </div>
                <div 
                    onMouseDown={() => navigate("/contact")}
                    className={`navbar-home-link ${isActive('/contact') ? 'active' : ''}`}
                >
                    $ cd /Contact
                </div>
            </section>

            {/* Empty Divs. Don't Delete. */}
            <div></div>
        </nav>
    );
}
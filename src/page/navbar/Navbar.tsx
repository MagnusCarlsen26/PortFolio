import "./navbar.css"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if ( location.pathname.includes("blog/") ) return path === "/blogs"
        return location.pathname === path
    };

    const handleNavClick = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav>
                {/* Mobile Hamburger Menu - Hidden on Desktop */}
                <button
                    className="hamburger-menu"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>

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

                {/* Mobile Active Page Indicator - Hidden on Desktop */}
                <div className="mobile-active-page">
                    {isActive('/') && '$ /home'}
                    {isActive('/about') && '$ /About Me'}
                    {isActive('/blogs') && '$ /Blogs'}
                    {isActive('/contact') && '$ /Contact'}
                </div>

                {/* Empty Divs. Don't Delete. */}
                <div></div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                    <div className="mobile-menu-header">
                        <span className="mobile-menu-title">$ navigation</span>
                        <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close menu">
                            ×
                        </button>
                    </div>
                    <div className="mobile-menu-items">
                        <div
                            onClick={() => handleNavClick("/")}
                            className={`mobile-menu-item ${isActive('/') ? 'active' : ''}`}
                        >
                            $ cd /home
                        </div>
                        <div
                            onClick={() => handleNavClick("/about")}
                            className={`mobile-menu-item ${isActive('/about') ? 'active' : ''}`}
                        >
                            $ cd /About Me
                        </div>
                        <div
                            onClick={() => handleNavClick("/blogs")}
                            className={`mobile-menu-item ${isActive('/blogs') ? 'active' : ''}`}
                        >
                            $ cd /Blogs
                        </div>
                        <div
                            onClick={() => handleNavClick("/contact")}
                            className={`mobile-menu-item ${isActive('/contact') ? 'active' : ''}`}
                        >
                            $ cd /Contact
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
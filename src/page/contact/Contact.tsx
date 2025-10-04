import './contact.css';

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-content">
                
                <div className="terminal-prompt">
                    <span className="prompt-char">$</span> contact
                </div>

                <div className="contact-methods">

                    <div className="method-item">
                        <span className="method-label">&gt; phone</span>
                        <span className="method-value"><a href="tel:+919328576258">+91-9328576258</a></span>
                    </div>

                    <div className="method-item">
                        <span className="method-label">&gt; email</span>
                        <span className="method-value"><a href="mailto:khushal.sindhav26@gmail.com">khushal.sindhav26@gmail.com</a></span>
                    </div>

                    <div className="method-item">
                        <span className="method-label">&gt; github</span>
                        <span className="method-value"><a href="http://github.com/MagnusCarlsen26/" target="_blank" rel="noopener noreferrer">/MagnusCarlsen26</a></span>
                    </div>

                    <div className="method-item">
                        <span className="method-label">&gt; linkedin</span>
                        <span className="method-value"><a href="https://www.linkedin.com/in/khushal-sindhav-109602229/" target="_blank" rel="noopener noreferrer">/khushal-sindhav-109602229</a></span>
                    </div>

                    <div className="method-item">
                        <span className="method-label">&gt; twitter</span>
                        <span className="method-value"><a href="https://x.com/KHUSHALSINDHAV2" target="_blank" rel="noopener noreferrer">@KHUSHALSINDHAV2</a></span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

import { useNavigate } from 'react-router-dom';
import './home.css';

// TODO: Write proper semantic tags in JSX
// TODO: Better animation for name
// TODO: 3 buttons imporving button
export default function Home() {

    const navigate = useNavigate()

    return (

        <div className="home-container">

            <div className="name-display">
                <h1>KHUSHAL SINDHAV</h1>
            </div>

            <div className="you-are-here-for-section">

                <p>Pick your adventure</p>

                <div className="buttons-container">

                    <div onMouseDown={() => navigate("/about")} className="terminal-button">
                        <span className="terminal-prefix">A.</span> Recruiter mode
                    </div>
                    <div onMouseDown={() => navigate("/blogs")} className="terminal-button">
                        <span className="terminal-prefix">B.</span> Blog mode
                    </div>
                    <div onMouseDown={() => navigate("/blogs")} className="terminal-button">
                        <span className="terminal-prefix">C.</span> Project mode
                    </div>
                    

                </div>
            </div>

        </div>

    );

};
import { useNavigate } from 'react-router-dom'
import './tools.css'

export default function Tools() {

    const navigate = useNavigate()

    return (

        <div className="tools-outer">
            <div></div>

            <div onMouseDown={() => navigate("/tools/pasteIO")} className="terminal-button">
                <div className="terminal-prefix">
                    <p style={{ textAlign: 'center' }}>PasteIO</p>
                </div>
            </div>

            <div></div>
        </div>
    )
}
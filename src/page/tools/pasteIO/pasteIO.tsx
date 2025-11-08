import { useState } from "react";
import { getClipboardAccess } from '../../../utils/getClipboardAccess'
import './../tools.css'

export default function PasteIO() {
    const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied' | 'unsupported'>('prompt');

    return (
        <div className="pasteIO-outer">
            <h2>PasteIO</h2>
            {permissionStatus === "granted" ? (<></>) : 
            permissionStatus === "unsupported" ? (
                <div style={{ color: "orange" }}>
                    Clipboard Permissions API not supported in this browser.
                </div>
            ) : (
                <ClipBoardAccessButton
                    setPermissionStatus={setPermissionStatus}
                />
            )}
            
        </div>
    );
}

function ClipBoardAccessButton({
    setPermissionStatus
}: ClipBoardAccessButtonProps) {
    return (
        <div 
            className="terminal-button"
            onMouseDown={() => getClipboardAccess( setPermissionStatus )}
        >
            <div className="terminal-prefix">
                Allow clipboard access
            </div>
        </div>
    )
}
type ClipBoardAccessButtonProps = {
    setPermissionStatus: (status: 'prompt' | 'granted' | 'denied' | 'unsupported') => void;
};
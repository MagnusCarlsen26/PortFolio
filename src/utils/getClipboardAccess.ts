export async function getClipboardAccess (
    setPermissionStatus: (status: 'prompt' | 'granted' | 'denied' | 'unsupported') => void
) {


    if (!("permissions" in navigator) || !navigator.clipboard) {
        setPermissionStatus("unsupported");
        alert("Clipboard Permissions API not supported in this browser.");
        return;
    }

    try {
        // @ts-ignore (clipboard-read is possibly not in the type definitions)
        const result: any = await navigator.permissions.query({ name: "clipboard-read" });

        if (result && result.state === "granted") {
            setPermissionStatus("granted");
        } else if (result && result.state === "denied") {
            setPermissionStatus("denied");
        } else {

            try {
                await navigator.clipboard.readText();
                setPermissionStatus("granted");
            } catch (e) {
                setPermissionStatus("denied");
                alert("Permission denied by user.");
            }
        }

    } catch (e: any) {
        setPermissionStatus("denied");
        alert("Error requesting permission: " + (e?.message ?? e));
    }
};

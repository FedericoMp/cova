export const postDataForm = async (data) => {
    const scriptID ="AKfycbyFd7fp8hixKOOK0xq0LPRKerONIir4bwUzYelc_snqJ4TggeYhj0yIZmnFlJ4NTkiyCQ";
    const sheetUri = `https://script.google.com/macros/s/${scriptID}/exec`

    const response = await fetch(sheetUri, {
        redirect: "follow",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
    });

    if (!response.ok) {
        // Error to catch on the promise .catch()
        throw new Error(`Response status: ${response.status}`);
    }
    
    // Response Object
    return response
}
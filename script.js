const apkURL = "https://www.dropbox.com/scl/fi/s8ecfjn2aa1pjkce0gd3g/E.M.P.O.W.E.R.apk?rlkey=65a40qlagvdnzxeyf78qltxbg&st=hnkcrwge&dl=1";

const downloadBtn = document.getElementById("downloadBtn");
const statusText = document.getElementById("statusText");

function startDownload(url) {
    statusText.textContent = "Download starting...";
    
    const link = document.createElement("a");
    link.href = url;
    link.download = "SLP-App.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadBtn.addEventListener("click", () => {
    startDownload(apkURL);
});

window.addEventListener("load", () => {
    try {
        startDownload(apkURL);
    } catch (e) {
        statusText.textContent = "Download did not start automatically. Please click the button above.";
    }
});

const apkURL = "https://www.dropbox.com/scl/fi/r8f8klsyadlahx7z1ard8/E.M.P.O.W.E.R.apk?rlkey=cv24188xm2i57khrz5rh27vyx&st=n6xgl1yg&dl=1";
const AUTO_DOWNLOAD = true;

const downloadBtn = document.getElementById("downloadBtn");

function startDownload(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "E.M.P.O.W.E.R.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadBtn.addEventListener("click", () => {
    startDownload(apkURL);
});

window.addEventListener("load", () => {
    if (AUTO_DOWNLOAD) {
        startDownload(apkURL);
    }
});
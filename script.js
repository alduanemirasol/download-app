const apkURL = "https://www.dropbox.com/scl/fi/s8ecfjn2aa1pjkce0gd3g/E.M.P.O.W.E.R.apk?rlkey=65a40qlagvdnzxeyf78qltxbg&st=wowu5t3q&dl=1";
const AUTO_DOWNLOAD = 1;

const downloadBtn = document.getElementById("downloadBtn");

function startDownload(url) {
    const uniqueURL = url + "?t=" + new Date().getTime();
    const link = document.createElement("a");
    link.href = uniqueURL;
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

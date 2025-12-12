const apkURL = "https://www.dropbox.com/scl/fi/s8ecfjn2aa1pjkce0gd3g/SLP.apk?rlkey=65a40qlagvdnzxeyf78qltxbg&st=52k2xs7v&dl=1";

const downloadBtn = document.getElementById("downloadBtn");

function startDownload(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "App.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadBtn.addEventListener("click", () => {
    startDownload(apkURL);
});

window.addEventListener("load", () => {
    startDownload(apkURL);
});

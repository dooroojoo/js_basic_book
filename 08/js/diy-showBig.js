var bicPic = document.querySelector("#cup");
var smallPics = document.querySelector(".small");

function showBig() {
    var newPic = this.src;
    bicPic.setAttribute("src", newPic);

}
function newRegister() {
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);
    nameList.appendChild(newP);
    userName.value="";

}
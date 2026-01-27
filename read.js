var url = new URLSearchParams(window.location.search);
var name = url.get("username");
var place = url.get("continent")
document.getElementByld("result").innerText = "So, your name is " + name + " and you are from " + place + ".";

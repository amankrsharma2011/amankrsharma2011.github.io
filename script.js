var url = new URLSearchParams(window.location.search);
var name = url.get("username");
document.getElementByld("text").innerText = "Welcome " + name;

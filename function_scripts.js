function multiForm() {
//document.getElementById('form').innerHTML = "Button pressed";
var form = document.createElement("form");
var node = document.createElement("input");
node.setAttribute("type", "text");

form.appendChild(node);
document.getElementById("form-container").appendChild(form);
}

var form = document.createElement("form");
var node = document.createElement("input");
node.setAttribute("type", "text");

form.appendChild(node);

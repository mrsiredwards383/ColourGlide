


function colourCan() {

var c = document.getElementById("colourCanvas");
var ctx = c.getContext("2d");
c.setAttribute('width', window.innerWidth);
c.setAttribute('height', window.innerHeight);


ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, c.width, c.height);

};

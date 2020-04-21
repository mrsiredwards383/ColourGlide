


function colourCanR() {

var c = document.getElementById("colourCanvas");
var ctx = c.getContext("2d");

c.setAttribute('width', window.innerWidth);
c.setAttribute('height', window.innerHeight);

var x1 = 100;   // x of 1. circle center point
var y1 = 100;   // y of 1. circle center point
var r1 = 30;    // radius of 1. circle

var x2 = 100;   // x of 2. circle center point
var y2 = 100;   // y of 2. circle center point
var r2 = 100;   // radius of 2. circle

var radialGradient1 = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);

radialGradient1.addColorStop(0, 'rgb(0,   0, 255)');
radialGradient1.addColorStop(1, 'rgb(0, 255,   0)');

ctx.fillStyle = radialGradient1;
ctx.fillRect(0, 0, c.width, c.height);

};

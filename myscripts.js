




function colourCanR() { // Make Radial gradient

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

// Radiant gradient moves with mouse

};

function showCoords(event) {
  var c = document.getElementById("colourCanvas");
  var ctx = c.getContext("2d");

  c.setAttribute('width', window.innerWidth);
  c.setAttribute('height', window.innerHeight);

  var a1 = event.clientX;
  var b1 = event.clientY;
  var c1 = 30;

  var a2 = event.clientX;
  var b2 = event.clientY;
  var c2 = 100;

  var radialGradient1 = ctx.createRadialGradient(a1, b1, c1, a2, b2, c2);

  var redInt = parseInt((a1/c.width)*255);
  var blueInt = parseInt((b1/c.width)*255);
  var rgbColor1 = 'rgb(255,'+ redInt.toString() + ',' + blueInt.toString() +')';
  var rgbColor2 = 'rgb('+ blueInt.toString() +',' + redInt.toString() + ',255)';


  radialGradient1.addColorStop(0, rgbColor1);
  radialGradient1.addColorStop(1, rgbColor2);


  ctx.fillStyle = radialGradient1;
  ctx.fillRect(0, 0, c.width, c.height);
  
}

//----------------------------------
    
    
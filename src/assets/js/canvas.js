var canvas = document.getElementById("maincanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var r = document.getElementById("box3");
console.log(r.innerHTML);

var c = canvas.getContext("2d");

c.font = "14px Arial";

var copyDataName = undefined;

function copyData(x,y) {
  c.fillStyle = "#83BDEC";
  c.fillRect(x, y, 200, 120);
  c.fillStyle = "#0B79D9";
  c.fillRect(x, y, 200, 40);
  c.fillStyle = "green";
  c.fillRect(x + 200, y + 40, 10, 20);
  c.font = "30px Arial";
  c.fillText(copyDataName, x, y+69);
}
copyDataName = "jello";
copyData(100,100);

let stack = [];

stack.push(copyData);
console.log(stack);

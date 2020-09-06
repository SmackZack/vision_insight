function setupCanvas(canvas) {
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = window.innerWidth*dpr;
  canvas.height = window.innerHeight*dpr;

  var ctx = canvas.getContext("2d");
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

function Link(sourceNode, targetNode) {
  this.sourceNode = sourceNode;
  this.targetNode = targetNode;
  this.sourceX = this.sourceNode.x + this.sourceNode.width + 8;
  this.sourceY = this.sourceNode.y + this.sourceNode.height / 2;
  this.targetX = this.targetNode.x;
  this.targetY = this.targetNode.y + this.targetNode.height / 2;
}

Link.prototype.draw = function () {
  // ctx.strokeStyle = '#0fab0f';
  ctx.strokeStyle = "#007000";
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(this.sourceX - panX, this.sourceY - panY);
  // ctx.lineTo(this.sourceX - panX + 15, this.sourceY - panY);
  // ctx.lineTo(this.targetX - panX - 15, this.targetY - panY);
  if (this.targetX - this.sourceX > 16) {
    if (this.sourceY - this.targetY < -6) {
      ctx.lineTo(
        (this.targetX + this.sourceX) / 2 - panX - 2,
        this.sourceY - panY
      );
      ctx.arc(
        (this.targetX + this.sourceX) / 2 - panX - 2,
        this.sourceY - panY + 2,
        2,
        (3 * Math.PI) / 2,
        0,
        false
      );
      ctx.lineTo(
        (this.targetX + this.sourceX) / 2 - panX,
        this.targetY - panY - 2
      );
      ctx.arc(
        (this.targetX + this.sourceX) / 2 - panX + 2,
        this.targetY - panY - 2,
        2,
        Math.PI,
        Math.PI / 2,
        true
      );
      // ctx.moveTo((this.targetX + this.sourceX)/2 - panX + 2, this.targetY - panY);
    } else if (this.sourceY - this.targetY > 6) {
      ctx.lineTo(
        (this.targetX + this.sourceX) / 2 - panX - 2,
        this.sourceY - panY
      );
      ctx.arc(
        (this.targetX + this.sourceX) / 2 - panX - 2,
        this.sourceY - panY - 2,
        2,
        Math.PI / 2,
        0,
        true
      );
      ctx.lineTo(
        (this.targetX + this.sourceX) / 2 - panX,
        this.targetY - panY + 2
      );
      ctx.arc(
        (this.targetX + this.sourceX) / 2 - panX + 2,
        this.targetY - panY + 2,
        2,
        Math.PI,
        (3 * Math.PI) / 2,
        false
      );
    }
  } else {
    if (this.sourceY - this.targetY < -6) {
      ctx.lineTo(this.sourceX - panX + 14, this.sourceY - panY);
      ctx.arc(
        this.sourceX - panX + 14,
        this.sourceY - panY + 2,
        2,
        (3 * Math.PI) / 2,
        0,
        false
      );
      ctx.lineTo(
        this.sourceX - panX + 16,
        (this.targetY + this.sourceY) / 2 - panY - 2
      );
      ctx.arc(
        this.sourceX - panX + 14,
        (this.targetY + this.sourceY) / 2 - panY - 2,
        2,
        0,
        Math.PI / 2,
        false
      );
      ctx.lineTo(
        this.targetX - panX - 14,
        (this.targetY + this.sourceY) / 2 - panY
      );
      ctx.arc(
        this.targetX - panX - 14,
        (this.targetY + this.sourceY) / 2 - panY + 2,
        2,
        (3 * Math.PI) / 2,
        Math.PI,
        true
      );
      ctx.lineTo(this.targetX - panX - 16, this.targetY - panY - 2);
      ctx.arc(
        this.targetX - panX - 14,
        this.targetY - panY - 2,
        2,
        Math.PI,
        Math.PI / 2,
        true
      );
    } else if (this.sourceY - this.targetY > 6) {
      ctx.lineTo(this.sourceX - panX + 14, this.sourceY - panY);
      ctx.arc(
        this.sourceX - panX + 14,
        this.sourceY - panY - 2,
        2,
        Math.PI / 2,
        0,
        true
      );
      ctx.lineTo(
        this.sourceX - panX + 16,
        (this.targetY + this.sourceY) / 2 - panY + 2
      );
      ctx.arc(
        this.sourceX - panX + 14,
        (this.targetY + this.sourceY) / 2 - panY + 2,
        2,
        0,
        (3 * Math.PI) / 2,
        true
      );
      ctx.lineTo(
        this.targetX - panX - 14,
        (this.targetY + this.sourceY) / 2 - panY
      );
      ctx.arc(
        this.targetX - panX - 14,
        (this.targetY + this.sourceY) / 2 - panY - 2,
        2,
        Math.PI / 2,
        Math.PI,
        false
      );
      ctx.lineTo(this.targetX - panX - 16, this.targetY - panY + 2);
      ctx.arc(
        this.targetX - panX - 14,
        this.targetY - panY + 2,
        2,
        Math.PI,
        (3 * Math.PI) / 2,
        false
      );
    }
  }
  ctx.lineTo(this.targetX - panX, this.targetY - panY);
  ctx.stroke();

  ctx.fillStyle = "#0fab0f";
  ctx.beginPath();
  ctx.moveTo(this.targetX - panX, this.targetY - panY);
  ctx.lineTo(this.targetX - panX - 10, this.targetY - panY - 6);
  ctx.lineTo(this.targetX - panX - 10, this.targetY - panY + 6);
  ctx.closePath();
  ctx.fill();
};

function Nodebox(id, label, x, y) {
  this.id = id;
  this.label = label;
  this.x = x;
  this.y = y;
  this.isSelected = false;
}

Nodebox.prototype.width = 130;
Nodebox.prototype.height = 85;

Nodebox.prototype.isCollidingWithBox = function (x, y) {
  return (
    x > this.x &&
    x < this.x + this.width &&
    y > this.y &&
    y < this.y + this.height
  );
};

Nodebox.prototype.isCollidingWithLinkBtn = function (x, y) {
  return (
    x > this.x + this.width &&
    x < this.x + this.width + 8 &&
    y > this.y + this.height / 2 - 5 &&
    y < this.y + this.height / 2 + 5
  );
};

Nodebox.prototype.isCollidingWithDelete = function (x, y) {
  return (
    x > this.x + this.width - 32 &&
    x < this.x + this.width - 13 &&
    y > this.y + this.height / 2 + 18 &&
    y < this.y + this.height / 2 + 40
  );
};

Nodebox.prototype.drag = function (newX, newY) {
  this.x = newX - this.width * 0.5;
  this.y = newY - this.height * 0.5;
};

Nodebox.prototype.draw = function () {
  let cornerRadius = 2;
  let x = this.x - panX;
  let y = this.y - panY;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#cae2fc";
  // if(selectedBox === node) {
  //   ctx.lineWidth = 2;
  //   ctx.strokeStyle = '#0fab0f';
  //   ctx.fillStyle = 'white';
  // }
  ctx.beginPath();
  ctx.arc(
    x + cornerRadius,
    y + cornerRadius,
    cornerRadius,
    Math.PI,
    (3 * Math.PI) / 2,
    false
  );
  ctx.lineTo(x + this.width - cornerRadius, y);
  ctx.arc(
    x + this.width - cornerRadius,
    y + cornerRadius,
    cornerRadius,
    (3 * Math.PI) / 2,
    0,
    false
  );
  ctx.lineTo(x + this.width, y + this.height - cornerRadius);
  ctx.arc(
    x + this.width - cornerRadius,
    y + this.height - cornerRadius,
    cornerRadius,
    0,
    Math.PI / 2,
    false
  );
  ctx.lineTo(x + cornerRadius, y + this.height);
  ctx.arc(
    x + cornerRadius,
    y + this.height - cornerRadius,
    cornerRadius,
    Math.PI / 2,
    Math.PI,
    false
  );
  ctx.lineTo(x, y + cornerRadius);
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = "#0078d4";
  ctx.beginPath();
  ctx.arc(
    x + cornerRadius,
    y + cornerRadius,
    cornerRadius,
    Math.PI,
    (3 * Math.PI) / 2,
    false
  );
  ctx.lineTo(x + this.width - cornerRadius, y);
  ctx.arc(
    x + this.width - cornerRadius,
    y + cornerRadius,
    cornerRadius,
    (3 * Math.PI) / 2,
    0,
    false
  );
  ctx.lineTo(x + this.width, y + this.height / 5);
  ctx.lineTo(x, y + this.height / 5);
  ctx.lineTo(x, y + cornerRadius);
  ctx.fill();

  ctx.fillStyle = "#0fab0f";
  ctx.fillRect(x + this.width, y + this.height / 2 - 5, 8, 10);

  ctx.fillStyle = "black";
  ctx.font = "13px arial";
  if (this.label.length < 16)
    ctx.fillText(
      this.label,
      x + this.width / 5 + 5,
      y + this.height / 2,
      x + this.width - cornerRadius
    );
  else {
    let labelSplits = this.label.split(" ");
    //case for single long string remaining
    let line1 = "";
    let i = 0;
    while ((line1 + " " + labelSplits[i]).length < 16) {
      line1 += labelSplits[i] + " ";
      i++;
    }
    let line2 = "";
    for (; i < labelSplits.length; i++) {
      line2 += labelSplits[i] + " ";
    }
    ctx.fillText(
      line1,
      x + this.width / 5 + 5,
      y + this.height / 2,
      x + this.width - cornerRadius
    );
    ctx.fillText(
      line2,
      x + this.width / 5 + 5,
      y + this.height / 2 + 16,
      x + this.width - cornerRadius
    );
  }

  ctx.drawImage(trash, x + this.width - 30, y + this.height / 2 + 20, 15, 15);
  ctx.drawImage(database, x + 10, y + this.height / 2 - 15, 18, 18);
};

function draw() {
  ctx.clearRect(0, 0, bounds.width, bounds.height);
  var box = null;
  var link = null;
  var xMin = 0;
  var xMax = 0;
  var yMin = 0;
  var yMax = 0;
  for (var i = 0; i < linkArray.length; ++i) {
    link = linkArray[i];
    link.draw();
  }
  for (var i = 0; i < boxArray.length; ++i) {
    box = boxArray[i];
    // xMin = box.x - panX;
    // xMax = box.x + box.width - panX;
    // yMin = box.y - panY;
    // yMax = box.y + box.height - panY;
    box.draw();
    // if (xMax > 0 && xMin < imageWidth && yMax > 0 && yMin < imageHeight) {
    //     box.draw();
    // }
  }

  if (newLinkNode) {
    drawTempLink();
  }
}

function drawTempLink() {
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(
    newLinkNode.x + newLinkNode.width + 8 - panX,
    newLinkNode.y + newLinkNode.height / 2 - panY
  );
  ctx.lineTo(
    newLinkNode.x + newLinkNode.width + 8 - panX + 10,
    newLinkNode.y + newLinkNode.height / 2 - panY
  );
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 4, 0, 2 * Math.PI);
  ctx.fill();
}

function getNode(id) {
  return boxArray.find((box) => box.id == id);
}

function getLinksFrom(nodeID) {
  return linkArray.filter((link) => link.sourceNode.id == nodeID);
}

function getLinksTo(nodeID) {
  return linkArray.filter((link) => link.targetNode.id == nodeID);
}

window.onload = function () {};

window.onunload = function () {
  canvas = null;
  ctx = null;
  bounds = null;
  selectedBox = null;
  boxArray = null;
};

let trash = new Image();
trashsrc = "icons/icons/trash.png";
trash.src = trashsrc;
let database = new Image();
databasesrc = `icons/icons/database.png`;
database.src = databasesrc;

const beginX = 10;
const beginY = 10;
const nextX = 180;
const nextY = 140;
const dpr = window.devicePixelRatio || 1;
var staticPipelineNodes = [
  new Nodebox("dataPull", "Data Pull", beginX, beginY),
  new Nodebox("dataCleanse", "Data Cleanse", beginX + nextX, beginY),
  new Nodebox("dataEmbed", "Data Embed", beginX + 2 * nextX, beginY),
  new Nodebox("dataEmbed2", "Data Embed", beginX + 2 * nextX, beginY + nextY),
  new Nodebox("dataDedup", "Data Dedup", beginX + 3 * nextX, beginY),
  new Nodebox(
    "deepLearningMatcher",
    "Deep Learning Matcher",
    beginX + 3 * nextX,
    beginY + nextY
  ),
  new Nodebox(
    "stdMapper",
    "Std Mapper",
    beginX + 3 * nextX,
    beginY + 2 * nextY
  ),
  new Nodebox(
    "joinAndRelationship",
    "Join and Relationship",
    beginX + 3 * nextX,
    beginY + 3 * nextY
  ),
  new Nodebox("dataMerge", "Data Merge", beginX + 4 * nextX, beginY),
  new Nodebox("dataCheck", "Data Check", beginX + 5 * nextX, beginY),
  new Nodebox("finalize", "Finalize", beginX + 6 * nextX, beginY),
];

let boxArray = staticPipelineNodes;

var staticPipelineLinks = [
  new Link(getNode("dataPull"), getNode("dataCleanse")),
  new Link(getNode("dataCleanse"), getNode("dataEmbed")),
  new Link(getNode("dataEmbed"), getNode("dataDedup")),
  new Link(getNode("dataDedup"), getNode("dataMerge")),
  new Link(getNode("dataMerge"), getNode("dataCheck")),
  new Link(getNode("dataCheck"), getNode("finalize")),
];

var linkArray = staticPipelineLinks;

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = setupCanvas(canvas);
let bounds = canvas.getBoundingClientRect();
let selectedBox = null;
let newLinkNode = null;
let panX = 0;
let panY = 0;
let mouseX = 0;
let mouseY = 0;
let oldMouseX = 0;
let oldMouseY = 0;
let mouseHeld = false;

trash.onload = () => {
  database.onload = () => {
    draw();
    requestAnimationFrame(draw);
    // console.log(trashsrc);
    // ctx.fillStyle = 'black';

    // ctx.drawImage(database, 10, 10, 50, 50);
  };
};
// requestAnimationFrame(draw);

canvas.onmousedown = function (e) {
  mouseHeld = true;

  if (!selectedBox) {
    for (var i = boxArray.length - 1; i > -1; --i) {
      if (boxArray[i].isCollidingWithBox(mouseX + panX, mouseY + panY)) {
        selectedBox = boxArray[i];
        selectedBox.isSelected = true;
        requestAnimationFrame(draw);
        return;
      }
      if (boxArray[i].isCollidingWithLinkBtn(mouseX + panX, mouseY + panY)) {
        newLinkNode = boxArray[i];
        requestAnimationFrame(draw);
        return;
      }
    }
  }
};

canvas.onmousemove = function (e) {
  bounds = canvas.getBoundingClientRect();
  mouseX = e.clientX - bounds.left;
  mouseY = e.clientY - bounds.top;

  if (mouseHeld) {
    if (!selectedBox && !newLinkNode) {
      panX += oldMouseX - mouseX;
      panY += oldMouseY - mouseY;
    } else if (selectedBox) {
      selectedBox.x = mouseX - selectedBox.width * 0.5 + panX;
      selectedBox.y = mouseY - selectedBox.height * 0.5 + panY;
      getLinksFrom(selectedBox.id).forEach((link) => {
        link.sourceX = selectedBox.x + selectedBox.width + 8;
        link.sourceY = selectedBox.y + selectedBox.height / 2;
      });
      getLinksTo(selectedBox.id).forEach((link) => {
        link.targetX = selectedBox.x;
        link.targetY = selectedBox.y + selectedBox.height / 2;
      });
    }
  } else {
    for (var i = boxArray.length - 1; i > -1; --i) {
      if (
        boxArray[i].isCollidingWithBox(mouseX + panX, mouseY + panY) ||
        boxArray[i].isCollidingWithLinkBtn(mouseX + panX, mouseY + panY)
      ) {
        canvas.style.cursor = "pointer";
        return;
      } else {
        canvas.style.cursor = "default";
      }
    }
  }

  oldMouseX = mouseX;
  oldMouseY = mouseY;

  requestAnimationFrame(draw);
};

canvas.onmouseup = function (e) {
  mouseHeld = false;

  if (selectedBox) {
    if (selectedBox.isCollidingWithDelete(mouseX + panX, mouseY + panY)) {
      getLinksFrom(selectedBox.id).forEach((link) => {
        var index = linkArray.indexOf(
          linkArray.find((l) => l.sourceNode == link.sourceNode)
        );
        if (index > -1) {
          linkArray.splice(index, 1);
        }
      });
      getLinksTo(selectedBox.id).forEach((link) => {
        var index = linkArray.indexOf(
          linkArray.find((l) => l.targetNode == link.targetNode)
        );
        if (index > -1) {
          linkArray.splice(index, 1);
        }
      });
      var index = boxArray.indexOf(
        boxArray.find((box) => box.id == selectedBox.id)
      );
      if (index > -1) {
        boxArray.splice(index, 1);
      }
    }
    selectedBox.isSelected = false;
    selectedBox = null;
    requestAnimationFrame(draw);
  }

  if (newLinkNode) {
    for (var i = boxArray.length - 1; i > -1; --i) {
      if (boxArray[i].isCollidingWithBox(mouseX + panX, mouseY + panY)) {
        linkArray.push(new Link(newLinkNode, boxArray[i]));
        newLinkNode = null;
        requestAnimationFrame(draw);
        return;
      }
    }
    newLinkNode = null;
    requestAnimationFrame(draw);
  }
};

// staticPipelineNodes.forEach(node => {
//     drawNode(node);
// });

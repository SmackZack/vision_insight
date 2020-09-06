var $ = go.GraphObject.make;
var diagram = $(go.Diagram, "myDiagramDiv", {
  allowHorizontalScroll: false,
  allowVerticalScroll: false,
  contentAlignment: go.Spot.Center,
  "undoManager.isEnabled": true,
});
var blue = "#0078d4";
var lightblue = "#deecf9";
// the template we defined earlier
diagram.nodeTemplate = $(
  go.Node,
  "Spot",

  new go.Binding("location", "loc", go.Point.parse),
  {
    selectionAdorned: false,
    doubleClick: function (e, node) {
      var data = node.data;
      console.log(data);
    },
    shadowColor: "rgba(0,0,0,.16)",
    mouseEnter: function (e, node) {
      if (!node.isSelected) node.isShadowed = true;
    },
    mouseLeave: function (e, node) {
      node.isShadowed = false;
    },
    click: function (e, node) {
      node.isShadowed = true;
    },
  },
  $(go.Shape, "RoundedRectangle", {
    fill: lightblue,
    parameter1: "4",
    stroke: blue,
    strokeWidth: 1,
    width: 180,
    height: 110,
  }),

  // Near bottom-left corner:
  $(go.TextBlock, {
    font: "12pt  Segoe UI,sans-serif",
    width: 179,
    height: 30,
    alignment: go.Spot.Left,
    verticalAlignment: go.Spot.Center,
    background: blue,
    stroke: "white",
    alignment: new go.Spot(0.5, 0, 0, 17.5),
  }),
  $(
    go.TextBlock,
    "Copy Data",
    {
      font: "12pt  Segoe UI,sans-serif",
      background: lightblue,
      alignment: new go.Spot(0.5, 0.5, 0, 0),
    },
    new go.Binding("text", "name")
  ),
  $(go.Picture, "js/1.png", {
    width: 20,
    height: 20,
    alignment: new go.Spot(0.3, 1, 0, -20),
  }),
  $(go.Picture, "js/2.png", {
    width: 20,
    height: 20,
    alignment: new go.Spot(0.7, 1, 0, -20),
  })

  // Near bottom-right corner:
);

var nodeDataArray = [
  // the "key" and "parent" property itemss are required,
  // but you can add whatever data properties you need for your app
  { name: "Data Pull", key: "1", items: "2", loc: "0 0" },
  { name: "Data Cleanse", key: "2", items: "2", loc: "250 0" },
  { name: "Data Validate", key: "3", items: "2", loc: "500 0" },
  { name: "Data Embed", key: "4a", items: "2", loc: "750 0" },
  { name: "Data Train", key: "4b", items: "2", loc: "750 150" },

  { name: "Data Map", key: "5a", items: "3", loc: "1000 0" },
  { name: "Data Relationship", key: "5b", loc: "1000 150" },
  { name: "Data Join", key: "5c", items: "5c", loc: "1000 300" },
  { name: "Data Merge", key: "6", items: "6", loc: "1250 0" },
  { name: "Data Check", key: "7", items: "7", loc: "1500 0" },
  { name: "Data Finalize", key: "8", items: "8", loc: "1750 0" },
];

var linkDataArray = [
  { from: "1", to: "2" },
  { from: "2", to: "3" },
  { from: "3", to: "4a" },
  { from: "4a", to: "4b" },
  { from: "4a", to: "5a" },
  { from: "5a", to: "5b" },
  { from: "5b", to: "5c" },
  { from: "5a", to: "6" },
  { from: "6", to: "7" },
  { from: "7", to: "8" },
];

diagram.linkTemplate = $(
  go.Link,
  // default routing is go.Link.Normal
  // default corner is 0
  { routing: go.Link.Orthogonal, corner: 5, routing: go.Link.AvoidsNodes },
  // the link path, a Shape
  $(go.Shape, { strokeWidth: 1, stroke: "green" }),
  $(go.Shape, { fromArrow: "Block", stroke: "green", fill: "green" }),
  $(go.Shape, { toArrow: "Triangle", stroke: "green", fill: "green" })

  // if we wanted an arrowhead we would also add another Shape with toArrow defined:
  // $(go.Shape, { toArrow: "Standard", stroke: null }
);

diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

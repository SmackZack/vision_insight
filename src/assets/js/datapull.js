var $$ = go.GraphObject.make; // for conciseness in defining templates

var myDiagram = $$(
  go.Diagram,
  "myDiagramDiv", // must name or refer to the DIV HTML element
  {

    "animationManager.isEnabled": true,
  }
);
var blue = "#0078d4";
var lightblue = "#DDF0FF";
function deletef(e, obj) {
  e.diagram.commandHandler.deleteSelection();
};

function callbtmmenu() {
  console.log('dsd');
};
// This is the actual HTML context menu:
var cxElement = document.getElementById("contextMenu");

// Since we have only one main element, we don't have to declare a hide method,
// we can set mainElement and GoJS will hide it automatically
var myContextMenu = $$(go.HTMLInfo, {
  show: showContextMenu,
  hide: hideContextMenu,
});

myDiagram.nodeTemplate = $$(
  go.Node,
  "Spot",

  {
    selectionAdorned: false,
    locationSpot: go.Spot.Center,
    fromSpot: go.Spot.Right,
    toSpot: go.Spot.Left,
  },
  new go.Binding("location", "loc", go.Point.parse),
  $$(go.Shape, "RoundedRectangle", {
    fill: "white",
    parameter1: "2.5",
    portId: "in",
    toSpot: go.Spot.Left,
    toLinkable: true,
    stroke: blue,
    strokeWidth: 1,
    width: 180,
    height: 104,
  }),
  $$(go.Shape, "RoundedRectangle", {
    fill: lightblue,
    parameter1: "2.5",
    portId: "in",
    toSpot: go.Spot.Left,
    toLinkable: true,
    stroke: "white",
    strokeWidth: 0,
    width: 180,
    height: 100,
  }),

  $$(
    go.TextBlock,
    {
      click: openbtmmenu,
      font: "10pt  Segoe UI,sans-serif",
      width: 80,
      background: lightblue,
      textAlign: "center",
      alignment: new go.Spot(0.53, 0.45, 0, 0),
      margin: 9,
    },
    new go.Binding("text", "text").makeTwoWay()
  ),
  $$(go.Picture, "js/database.png", {
    width: 20,
    height: 20,
    alignment: new go.Spot(0.21, 0.45, 0, 0),
  }),
  $$(go.Shape, "RoundedRectangle", {
    fill: lightblue,
    width: 20,
    stroke: lightblue,
    height: 22,
    alignment: new go.Spot(0.25, 0.49, 0, 0),
  }),
  $$(go.Picture, "js/database.png", {
    width: 20,
    height: 20,
    alignment: new go.Spot(0.25, 0.49, 0, 0),
  }),

  $$(go.Shape, "Rectangle", {
    width: 180,
    height: 23,
    fill: blue,
    stroke: blue,
    alignment: new go.Spot(0.5, 0, 0, 14.5),
  }),
  $$(go.TextBlock, "CopyData", {
    font: "10pt Segoe UI,sans-serif",
    width: 165,
    height: 22,
    alignment: go.Spot.Left,
    verticalAlignment: go.Spot.Center,
    background: blue,
    stroke: "white",
    alignment: new go.Spot(0.5, 0, 0, 14.5),
  }),

  $$(go.Picture, "js/1.png", {
    click: deletef,
    width: 15,
    height: 15,
    alignment: new go.Spot(0.2, 1, 0, -20),
  }),
  $$(
    go.Picture,
    "js/2.png",
    { contextMenu: myContextMenu },
    {
      width: 15,
      height: 15,
      alignment: new go.Spot(0.8, 1, 0, -20),
    }
  ),
  $$(
    go.Panel,
    "Vertical",
    { alignment: new go.Spot(1, 0.4, 5, 0) },
    $$(go.Shape, "Rectangle", {
      fill: "green",
      stroke: "green",
      portId: "1",
      fromSpot: go.Spot.Right,
      fromLinkable: true,
      width: 10,
      height: 10,
      margin: 1.5,
    }),
    $$(go.Shape, "Rectangle", {
      fill: "green",
      stroke: "green",
      portId: "2",
      fromSpot: go.Spot.Right,
      fromLinkable: true,
      width: 10,
      height: 10,
      margin: 1.5,
    }),
    $$(go.Shape, "Rectangle", {
      fill: "green",
      stroke: "green",
      portId: "3",
      fromSpot: go.Spot.Right,
      fromLinkable: true,
      width: 10,
      height: 10,
      margin: 1.5,
    }),
    $$(go.Shape, "Rectangle", {
      fill: "green",
      stroke: "green",
      portId: "4",
      fromSpot: go.Spot.Right,
      fromLinkable: true,
      width: 10,
      height: 10,
      margin: 1.5,
    }),
  ),

  $$(go.Shape, "Circle", {
    fill: "transparent",
    stroke: "red",
    width: 15,
    height: 15,
    alignment: new go.Spot(1, 0, -10, -12),
  })
);

$(".dragme").draggable({
  stack: "#myDiagramDiv",
  revert: true,
  revertDuration: 0,
});

$("#myDiagramDiv").droppable({
  activeClass: "ui-state-highlight",
  drop: function (event, ui) {
    var elt = ui.draggable.first();
    var text = elt[0].textContent;
    var x = ui.offset.left - $(this).offset().left;
    var y = ui.offset.top - $(this).offset().top;
    var p = new go.Point(x, y);
    var q = myDiagram.transformViewToDoc(p);
    var model = myDiagram.model;
    model.startTransaction("drop");
    model.addNodeData({
      text: text,
      loc: go.Point.stringify(q),
    });
    model.commitTransaction("drop");
  },
});




myDiagram.linkTemplate = $$(
  go.Link,
  // default routing is go.Link.Normal
  // default corner is 0
  { routing: go.Link.AvoidsNodes, corner: 3 },
  // the link path, a Shape
  $$(go.Shape, { strokeWidth: 1, stroke: "green" }),
  $$(
    go.Shape,
    { toArrow: "Triangle", fill: "green", stroke: "green" },
    new go.Binding("fill", "color")
  )

  // if we wanted an arrowhead we would also add another Shape with toArrow defined:
  // $(go.Shape, { toArrow: "Standard", stroke: null }
);

myDiagram.model = $$(go.GraphLinksModel, {
  linkFromPortIdProperty: "fromPort", // required information:
  linkToPortIdProperty: "toPort", // identifies data property names

});

function openbtmmenu() {
  document.getElementById("btmmenu").style.height = "240px"
}

 myDiagram.contextMenu = myContextMenu;

      // We don't want the div acting as a context menu to have a (browser) context menu!
      cxElement.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        return false;
      }, false);

      function hideCX() {
        if (myDiagram.currentTool instanceof go.ContextMenuTool) {
          myDiagram.currentTool.doCancel();
        }
      }

      function showContextMenu(obj, diagram, tool) {
        // Show only the relevant buttons given the current state.
        var cmd = diagram.commandHandler;
        var hasMenuItem = false;
        function maybeShowItem(elt, pred) {
          if (pred) {
            elt.style.display = "block";
            hasMenuItem = true;
          } else {
            elt.style.display = "none";
          }
        }
        maybeShowItem(document.getElementById("cut"), cmd.canCutSelection());
        maybeShowItem(document.getElementById("copy"), cmd.canCopySelection());
        maybeShowItem(document.getElementById("paste"), cmd.canPasteSelection(diagram.toolManager.contextMenuTool.mouseDownPoint));
        maybeShowItem(document.getElementById("delete"), cmd.canDeleteSelection());
        // Now show the whole context menu element
        if (hasMenuItem) {
          cxElement.classList.add("show-menu");
          // we don't bother overriding positionContextMenu, we just do it here:
          var mousePt = diagram.lastInput.viewPoint;
          cxElement.style.left = mousePt.x + 5 + "px";
          cxElement.style.top = mousePt.y + "px";
        }

        // Optional: Use a `window` click listener with event capture to
        //           remove the context menu if the user clicks elsewhere on the page
        window.addEventListener("click", hideCX, true);
      }

      function hideContextMenu() {
        cxElement.classList.remove("show-menu");
        // Optional: Use a `window` click listener with event capture to
        //           remove the context menu if the user clicks elsewhere on the page
        window.removeEventListener("click", hideCX, true);
      }


    // This is the general menu command handler, parameterized by the name of the command.
    function cxcommand(event, val) {
      if (val === undefined) val = event.currentTarget.id;
      var diagram = myDiagram;
      switch (val) {
        case "cut": diagram.commandHandler.cutSelection(); break;
        case "copy": diagram.commandHandler.copySelection(); break;
        case "paste": diagram.commandHandler.pasteSelection(diagram.toolManager.contextMenuTool.mouseDownPoint); break;
        case "delete": diagram.commandHandler.deleteSelection(); break;

      }
      diagram.currentTool.stopTool();
    }




  //above






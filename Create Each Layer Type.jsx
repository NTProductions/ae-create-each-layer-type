// create each layer type
app.beginUndoGroup("Layers Creation");

var comp = app.project.activeItem;

var nullLayer = comp.layers.addNull(app.project.activeItem.duration);

var solidLayer = comp.layers.addSolid([1, 1, 1], "Solid Layer", 500, 500, 1, comp.duration);

var textLayer = comp.layers.addText("Textttt");

var cameraLayer = comp.layers.addCamera("Camera 1", [comp.width/2, comp.height/2]);

var lightLayer = comp.layers.addLight("Light 2", [comp.width/2, comp.height/2]);

var shapeLayer = comp.layers.addShape();

app.endUndoGroup();
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 26,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ba2.png", id:"ba2"},
		{src:"images/ba2_03.png", id:"ba2_03"},
		{src:"images/ba2_06.png", id:"ba2_06"},
		{src:"images/ba2_09.png", id:"ba2_09"},
		{src:"images/ba2_152.png", id:"ba2_152"},
		{src:"images/ba2_15.png", id:"ba2_15"},
		{src:"images/ba2_18.png", id:"ba2_18"},
		{src:"images/ba2_21.png", id:"ba2_21"},
		{src:"images/ba2_25.png", id:"ba2_25"},
		{src:"images/ba2_27.png", id:"ba2_27"},
		{src:"images/fofo.jpg", id:"fofo"},
		{src:"images/Hands25.png", id:"Hands25"},
		{src:"images/Hands26.png", id:"Hands26"},
		{src:"images/Hands27.png", id:"Hands27"},
		{src:"images/Hands28.png", id:"Hands28"}
	]
};



// symbols:



(lib.ba2 = function() {
	this.initialize(img.ba2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,70);


(lib.ba2_03 = function() {
	this.initialize(img.ba2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,221);


(lib.ba2_06 = function() {
	this.initialize(img.ba2_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,180);


(lib.ba2_09 = function() {
	this.initialize(img.ba2_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,102);


(lib.ba2_152 = function() {
	this.initialize(img.ba2_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,160);


(lib.ba2_15 = function() {
	this.initialize(img.ba2_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,160);


(lib.ba2_18 = function() {
	this.initialize(img.ba2_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,136);


(lib.ba2_21 = function() {
	this.initialize(img.ba2_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,340);


(lib.ba2_25 = function() {
	this.initialize(img.ba2_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,148);


(lib.ba2_27 = function() {
	this.initialize(img.ba2_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,60);


(lib.fofo = function() {
	this.initialize(img.fofo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,482);


(lib.Hands25 = function() {
	this.initialize(img.Hands25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,51);


(lib.Hands26 = function() {
	this.initialize(img.Hands26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,38);


(lib.Hands27 = function() {
	this.initialize(img.Hands27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,31);


(lib.Hands28 = function() {
	this.initialize(img.Hands28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,201);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjlOGIAA8LIHLAAIAAcLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-90.2,46.1,180.5);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AgZQxIAAhNIASAAIAAAcIAMAAQAGAAAEABQAFACAEAEQADADACAEQACAFAAAGQAAAGgCAEQgCAFgEADIgIAEQgFACgFAAgAgHQiIAMAAQAEAAACgDQACgDAAgEQAAgEgCgCQgCgDgEAAIgMAAgAgHNLIAAg9IgSAAIAAgQIAzAAIAAAQIgRAAIAAA9gAADJlQgFAAgFgCQgFgCgEgDQgDgDgCgEQgBgFAAgEIAAggQAAgEABgEQACgEADgDQADgDAGgCQAFgCAFAAIAWAAIAAAQIgWAAQgDAAgCADQgCACAAAEIAAAbQAAAEACACQACADADAAIAWAAIAAAQgAgIF/IgHgDQgEAAgCgDIgFgFIgDgFIgCgHQgCgFAAgLIACgPIACgHIADgGIAFgEIAGgEIAHgCIAIgBIAJABIAHACIAGAEQADACACACIADAGIACAHIACAPQAAALgCAFIgCAHIgDAFIgEAFIgGADIgIADIgJABIgIgBgAgHFDQgDACgCAEIgCAHIgBAIQABAMACAEQABAEAEACQADACAEAAQAFAAAEgCQADgCABgEQADgEAAgMIgBgIIgCgHQgBgEgDgCQgEgCgFAAQgEAAgDACgAAMCZIAAgfIgWAAIAAAfIgSAAIAAhNIASAAIAAAeIAWAAIAAgeIASAAIAABNgAgHhLIAAg9IgSAAIAAgQIAzAAIAAAQIgRAAIAAA9gAABkxQgEAAgGgCQgFgCgDgDQgEgDgBgFQgCgEAAgEIAAgfQAAgFACgEQABgEADgDQAEgEAFgBQAFgCAFAAIAYAAIAAAQIgYAAQgCAAgCACQgDADAAAEIAAAGIAbAAIAAAQIgbAAIAAAFQAAAEADADQACACACAAIAYAAIAAAQgAAZoXIAAgiIABgXIgTA5IgOAAIgTg5IABAXIAAAiIgQAAIAAhNIAaAAIAPA0IASg0IAYAAIAABNgAAQr9IgDgNIgZAAIgDANIgSAAIAQhCIADgFIADgFIAGgCIAFAAIAHAAIAFACIAEAFIADAFIAQBCgAAKsZIgIgiQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgHAiIASAAgAgYvjIAAgQIAYAAQAEAAACgCQACgCAAgEQAAgDgCgDQgDgBgDAAIgSAAIAAgQIARAAQACAAACgBQADgCAAgEQAAgEgDgBQgCgCgCAAIgXAAIAAgQIAYAAQAEAAAFACIAIADQAEAEABADQACAFAAAFQAAAGgDADQgCAEgDADIAEACIADAEIACAFIABAGQAAAGgCAEQgCADgDAEQgEACgFABQgEACgGAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.2,-107.3,8.6,214.7);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgKAqIAVhSIANAAIgYBSgAg4AjIgHgCIgGgEIgEgEQgCgEgDgJIgBgNIABgQIACgHIADgFIAEgFIAGgEIAHgCIAIgBIAJABIAHACQAEABACADIAEAFIAEAFIACAHIAAAQQAAAGgBAHIgFANIgEAEIgGAEIgHACIgJABIgIgBgAg2gXQgDACgCADIgCAIIAAAJQAAAKACAEIAFAFQACABAEAAQAFAAADgBIAEgFQACgEABgKIgBgJIgCgIQgCgDgCgCQgDgCgFAAQgEAAgCACgAAzAjIgIgBIgHgEQgEgDgDgEIgBgGIgBgGIASAAIABAGQABACAFAAIAEAAQAEAAACgCQACgCAAgEQAAgFgCgCQgCgDgGAAIgPAAIAAgKIASgQIgbAAIAAgPIAvAAIAAAPIgTAQIAAAAQAGAAADABQAFACACACQADADACACQABAEAAAGIgBAJQgCAEgCADQgDAEgEACQgHACgFAAg");
	this.shape.setTransform(31.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AADAtIgBgOIgdAAIgBAOIgQAAIAAgaQAKgDABgSIACgXIArAAIAAAqIAFAAIAAAcgAgSgBQgCAQgDACIAUAAIAAgdIgOAAgAjTAeQgFgBgDgCIgDgFIgDgFQgBgFAAgKIABgNIADgGIADgEIAIgEIALgBIALABIAHAEIAEAEIADAGIABANIgBAPIgDAFIgEAFQgDACgEABIgLABIgLgBgAjPgKIgDAFIAAAHIAAAJIADAFQACACAFAAQAFAAACgCQACgCAAgDIAAgJIAAgHQAAgEgCgBQgCgCgFAAQgFAAgCACgAEYAfIAAgSIATAAIAAASgAD9AfIAAgaIABgJIAAAAIgEAHIgCACIgPAaIgQAAIAAg4IAQAAIAAAYIgCAKIABAAIAGgKIAOgYIAQAAIAAA4gAC7AfIAAgaIABgJIgBAAIgEAJIgPAaIgRAAIAAg4IAQAAIAAAYIgBAKIABAAIAGgKIANgYIARAAIAAA4gAB6AfIAAgWIgSAAIAAAWIgRAAIAAg4IARAAIAAAVIASAAIAAgVIAQAAIAAA4gAAsAfIgGgBIgHgDIgDgFIgBgHIAAgFIABgHIADgDIAHgCIAGAAIAOAAIAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgDgBgDAAIgVAAIAAgOIAXAAIAIABIAHADQADADACADQABAEAAAEIAAAmgAArAIQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAADQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAEABIALAAIAAgLIgLAAIgEABgAhSAfIgHgBIgFgDIgEgFIgBgHIAAgFIABgHIAEgDIAFgCIAHAAIAOAAIAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgDgBgDAAIgVAAIAAgOIAXAAIAIABIAHADQADADABADQACAEAAAEIAAAmgAhTAIQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIAAADQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIADABIAMAAIAAgLIgMAAIgDABgAiBAfIAAgqIgRAAIAAAqIgQAAIAAg4IAzAAIAAA4gAkBAfIAAg7IgXAAIAAA7IgSAAIAAhLIA8AAIAABLgAEYgIIAAgRIATAAIAAARgADwgeIgGgBIgEgCIgDgEIAAgFIAKAAIABADQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAIAFAAIADgBIABgDIAKAAIgBAFIgCAEIgFACIgBABIgEAAg");
	this.shape_1.setTransform(-9.9,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.8,-4.6,79.8,9.3);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF0000").ss(3,1,1).p("AAAIfIpyw9ITlAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.3,-55.8,128.6,111.7);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ba2_15();
	this.instance.setTransform(-63.5,-80);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-80,127,160);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Hands25();
	this.instance.setTransform(-45,-25.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-25.5,90,51);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666633").s().p("AhIAsQgcgcATAJQAUAIA2ASQA0ASAJhJQAKhMANAJQANAJAAAoQAAAmgcAcQgcAcgmAAQgoAAgcgcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-7.3,18.1,14.6);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Hands26();
	this.instance.setTransform(-34.5,-19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.5,-19,69,38);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Hands27();
	this.instance.setTransform(-43.5,-15.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-15.5,87,31);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Hands28();
	this.instance.setTransform(-97,-100.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97,-100.5,194,201);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiGE4IAApvIENAAIAAJvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,-31.2,27.2,62.4);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AhX27ICvAAMAAAAt3IivAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-147.8,19.6,295.6);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AHuCBIAAj9IA8AAIAABbIAuAAQATAAAQAHQAQAFAMALQALAKAGAPQAHAQgBASQAAASgGAPQgHAPgLALQgMAKgQAGQgQAFgSAAgAIqBOIAuAAQAOAAAGgJQAGgHAAgPQAAgOgGgHQgGgJgOAAIguAAgAGBCBIAAhoIhQAAIAABoIg9AAIAAj9IA9AAIAABiIBQAAIAAhiIA9AAIAAD9gACLCBIAAh3QAAgUAEgSIgBAAQgKAXgHAMIhCB6Ig5AAIAAj9IA5AAIAAB2QgBARgDAYIABAAQAJgWAJgRIBBh4IA6AAIAAD9gAhbCBIgThBQgFgUgKgJQgJgJgNAAIgUAAIAABnIg8AAIAAj9IA8AAIAABlIATAAIA0hlIBFAAIhCBzQAUAJASAqIAfBXgAlBCBIgKgqIhZAAIgKAqIg9AAIA2jZQADgLAFgHQAFgIAIgEQAIgGAKgBQAJgDANAAQAOAAAKADQAKABAIAGQAIAEAEAIQAGAHACALIA2DZgAlWAiIgZhqQAAgHgJAAQgGAAgCAHIgXBqIBBAAgAqtCBIAAg1IBWAAQAOAAAHgGQAFgHAAgNQABgMgIgGQgHgHgOAAIhAAAIAAgxIA5AAQANAAAIgFQAHgHABgLQAAgOgIgFQgGgFgQAAIhMAAIAAg1IBSAAQAUAAAPAFQAPAEAMAJQALAKAGAOQAGAOgBASQgBARgIAOQgHALgMAIQAIABAGAGQAHAFAEAHQAFAIACAJQACAJABALQgBASgGAOQgGANgMAKQgLAJgQAFQgQAEgTAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.7,-12.9,137.4,25.9);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AOJB/QgOgCgLgFQgLgFgJgGQgJgHgGgJQgHgIgEgLQgFgKgCgMQgEgPgBglQAAgQAFgiQADgMAEgJQAFgLAGgIQAHgKAIgGQAJgHALgEQAMgFANgDQAOgCARAAQARAAAOACQANADAMAFQALAEAIAHQAJAGAHAKQAGAIAFALQAEAJADAMQAFAiAAAQQgCAlgDAPQgDAMgEAKQgFALgGAIQgGAJgJAHQgJAGgLAFQgLAFgOACQgOADgRAAQgRAAgOgDgAOKhEQgKAGgGALQgEAKgCAPIgCAaQABAnAHAPQAGALAKAGQAMAHASAAQASAAAMgHQAKgGAGgLQAHgPABgnIgBgaQgCgPgFgKQgGgLgKgGQgMgHgSABQgSgBgMAHgALRCAIAAhoIhQAAIAABoIg9AAIAAj9IA9AAIAABiIBQAAIAAhiIA8AAIAAD9gAGsCAIAAjIIg5AAIAAg1ICuAAIAAA1Ig6AAIAADIgAEJCAQgWAAgSgGQgRgGgLgLQgLgKgGgPQgFgNAAgPIAAhnQAAgOAFgNQAFgOALgKQALgLARgFQASgHAXAAIBPAAIAAA1IhPAAQgOgBgIAKQgIAIAAAOIAAARIBeAAIAAAzIheAAIAAAUQAAAMAIAHQAJAJANAAIBPAAIAAA1gABLCAIAAhyQAAgVAFg0IAAAAIhBC7IgxAAIhBi7IAAAAQAFA0AAAVIAAByIg3AAIAAj9IBWAAIA7CoIA4ioIBRAAIAAD9gAjyCAIgKgqIhZAAIgKAqIg9AAIA2jZQADgKAFgIQAFgHAIgFQAHgGAKgBQAKgDANAAQAOAAAKADQAKABAIAGQAHAFAFAHQAGAIACAKIA2DZgAkHAhIgZhqQgBgHgIAAQgGAAgCAHIgYBqIBCAAgApfCAIAAg1IBXAAQAOAAAGgGQAGgHAAgOQAAgLgHgGQgHgHgOAAIhAAAIAAgxIA5AAQANABAHgHQAIgGABgMQAAgNgIgFQgHgGgPABIhNAAIAAg1IBTAAQATAAAQAFQAPAEALAJQAMAKAFAOQAGAOAAASQgBARgIAOQgHALgMAJQAIAAAGAGQAGAFAFAHQAEAIADAJQACAJAAALQAAASgGAOQgGANgMAKQgLAJgQAFQgQAEgTAAgArNCAQgWAAgSgGQgRgGgLgLQgLgKgGgPQgFgNAAgPIAAhnQAAgOAFgNQAFgOALgKQALgLARgFQASgHAXAAIBPAAIAAA1IhPAAQgOgBgIAKQgIAIAAAOIAAARIBeAAIAAAzIheAAIAAAUQAAAMAIAHQAJAJANAAIBPAAIAAA1gAuMCAIAAhoIhQAAIAABoIg9AAIAAj9IA9AAIAABiIBQAAIAAhiIA8AAIAAD9g");
	this.shape.setTransform(13,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-13,210.1,26.1);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlpB/QgOgDgLgEQgLgFgJgHQgJgHgGgJQgHgIgEgLQgFgKgCgMQgEgPgBgkQAAgRAFghQADgMAEgKQAFgLAGgIQAHgJAIgHQAJgHALgEQAMgFANgDQAOgCARAAQARAAAOACQANADAMAFQALAEAIAHQAJAHAHAJQAGAIAFALQAEAKADAMQAFAhAAARQgCAkgDAPQgDAMgEAKQgFALgGAIQgGAJgJAHQgJAHgLAFQgLAEgOADQgOACgRAAQgRAAgOgCgAlohFQgKAGgGAMQgEAJgCAPIgCAbQABAmAHAPQAGALAKAGQAMAHASAAQASAAAMgHQAKgGAGgLQAHgPABgmIgBgbQgCgPgFgJQgGgMgKgGQgMgGgSAAQgSAAgMAGgAtUB/QgOgDgMgEQgLgFgJgHQgIgHgHgJQgGgIgFgLQgEgKgDgMQgDgPgCgkQAAgRAFghQADgMAFgKQAEgLAGgIQAHgJAJgHQAJgHALgEQALgFAOgDQAOgCAQAAQARAAAOACQAOADALAFQALAEAJAHQAJAHAGAJQAGAIAFALQAFAKACAMQAFAhAAARQgBAkgEAPQgCAMgFAKQgEALgGAIQgHAJgIAHQgJAHgLAFQgMAEgNADQgPACgRAAQgQAAgOgCgAtThFQgKAGgGAMQgFAJgCAPIgBAbQABAmAHAPQAFALALAGQALAHASAAQATAAALgHQALgGAFgLQAIgPAAgmIgBgbQgCgPgFgJQgFgMgLgGQgLgGgTAAQgSAAgLAGgAOpB/IAAg1IAoAAQAPAAAHgHQAGgHADgOIgKAAQgLAAgKgDQgJgDgHgGQgHgFgFgJQgFgIgEgLIgrh/IBAAAIAfBuQACAHADACQAEACAIAAIAMAAIAdh5IBBAAIgxCxQgGAVgGANQgHAPgJAJQgLAJgOAFQgPAEgVAAgAM2B/IgThBQgFgUgJgJQgJgJgOAAIgUAAIAABnIg8AAIAAj9IA8AAIAABmIAUAAIA0hmIBEAAIhCBzQAVAJARAqIAgBXgAJCB/IAAhoIhQAAIAABoIg9AAIAAj9IA9AAIAABiIBQAAIAAhiIA8AAIAAD9gAFMB/IAAh2QAAgVAEgSIgCAAQgJAXgIAMIhCB6Ig4AAIAAj9IA4AAIAAB3QAAAQgDAYIABAAQAIgWAKgQIBBh5IA5AAIAAD9gAiuB/IAAj9IA8AAIAADIIBHAAIAAjIIA6AAIAADIIBHAAIAAjIIA9AAIAAD9gAqaB/IAAj9IBqAAQATAAARAHQAQAGALAMQANALAGARQAGAPAAATQAAARgEAOQgFAOgJALQgHAIgIAFQgHAGgKADQgRAHgVAAIgtAAIAABRgApdgFIAtAAQAPAAAGgHQAGgIAAgTQAAgJgBgGQgCgHgFgGQgHgGgMAAIgtAAgAxaB/IAAj9ICWAAIAAA1IhaAAIAADIg");
	this.shape.setTransform(28.6,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.9,-12.9,223.1,26);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AtEbPQlbrSAAv9QAAv8FbrTQFbrSHpAAQHqAAFaLSQFcLTAAP8QAAP9lcLSQlaLTnqAAQnpAAlbrTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.4,-246.7,236.9,493.4);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fofo();
	this.instance.setTransform(241,-400,1,1,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-241,-400,482,800);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ba2_06();
	this.instance.setTransform(-88.5,-90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.5,-90,177,180);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ba2_27();
	this.instance.setTransform(-27.5,-30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-30,55,60);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE4817","#C33A2A"],[0,1],-23.3,-18,-0.6,19.6).s().p("AhSFsQAFgUAFhaQAEhJhWiJIAAmTQAYgHAagDQBngLBUCSQBWCTgRCLQgRCNgyA+QgyA+g8AhQgmAVgNAAQgHAAABgHg");
	this.shape.setTransform(-0.9,-0.6);

	// Слой 1
	this.instance = new lib.ba2();
	this.instance.setTransform(-18.5,-35);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-37.7,37,74.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ba2_25();
	this.instance.setTransform(-33.8,-79.3,1,1.001,0,6.2,3.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.8,-79.3,115.8,153.3);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98221D").s().p("AgUBMQgRgQAAgSQAAgKAFgSIgDAFIgDgBIALgVIAGgTIAEgOIAAgHQgBgPANgSIAEgEIAEgTQAGgSAUAFQAMAHgDBHQgCBEgHBQIgDAAIgugmgAAFhaIAAABIABgCIgBABg");
	this.shape.setTransform(-51.4,20.5);

	// Слой 1
	this.instance = new lib.ba2_18();
	this.instance.setTransform(-50,-68);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.4,-68,105.4,136);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ba2_09();
	this.instance.setTransform(-59,-51);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,-51,118,102);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ba2_03();
	this.instance.setTransform(-24.5,-110.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.5,-110.5,49,221);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE4817","#C33A2A"],[0,1],-14.4,-22.6,12.3,22.6).s().p("AA8GoQAGgUgEhsQgFhsiVjdQiXjggeArIA8hfQBPh9ByAGQBwAFBdCZQBeCYgGCnQgFCqg1BEQg0BEg3AsQgmAegIAAQgEAAACgFg");
	this.shape.setTransform(-16.2,105.9);

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FE4817","#C33A2A"],[0,1],-20.6,-34.9,5.8,5.3).s().p("ABvCZIgIACQgTgWgJgXQgfhRiqgLIDli+QAeDFgIBbQgFA5gEAAQgCAAgDgUg");
	this.shape_1.setTransform(-12.2,61.3);

	// Слой 1
	this.instance = new lib.ba2_21();
	this.instance.setTransform(-96.5,-170);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.5,-170,193,340);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF0000").ss(3,1,1).p("ACFAAQAAA3gnAnQgnAng3AAQg2AAgmgnQgognAAg3QAAg2AogmQAmgoA2AAQA3AAAnAoQAnAmAAA2g");
	this.shape.setTransform(7.2,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// Слой 3
	this.instance = new lib.Символ42();
	this.instance.setTransform(8.4,28.1,1.444,1.444);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:90,x:0,y:0.1,alpha:1},9).to({scaleX:0.46,scaleY:0.46,rotation:180,y:0,alpha:0},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(11.2,28.1,1.444,1.444);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:90,x:0,y:0.1,alpha:1},9).to({scaleX:0.46,scaleY:0.46,rotation:180,y:0,alpha:0},10).wait(3));

	// Слой 1
	this.instance_2 = new lib.Символ42();
	this.instance_2.setTransform(8.4,28.1,1.444,1.444);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:90,x:0,y:0.1,alpha:1},9).to({scaleX:0.46,scaleY:0.46,rotation:180,y:0,alpha:0},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-52.6,185.7,161.3);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(-4.4,-4.5,0.481,0.481);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.1,-29.8,89.4,77.6);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.instance_1 = new lib.ba2_152();
	this.instance_1.setTransform(-63.5,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-80,127,160);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(0.6,2.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC66").s().p("AgugIQAdgcAmAAQAdAAAWAPIgHgBQg4ghhRBcQAGgbAUgSg");
	this.shape.setTransform(-1.1,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669933").s().p("AhDBEQgcgdAAgnQAAgmAcgdQAdgcAmAAQAnAAAdAcQAcAdAAAmQAAAngcAdQgdAcgnAAQgmAAgdgcgAg5g0QgUAUgGAbQBSheA3AiIAHAAQgXgPgdAAQgmAAgcAcg");

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-9.6,19.2,19.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.8,x:-1.7,y:3.9},10,cjs.Ease.get(-1)).to({rotation:-10.9,x:-4,y:9},13,cjs.Ease.get(1)).to({rotation:-5.3,x:-2.1,y:4.5},11,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-25.5,90,51);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.59,y:12.8},19).to({scaleY:1,y:0},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-31.2,27.2,62.4);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.setTransform(0.4,-10.4);

	// Слой 1
	this.instance_1 = new lib.Символ25();

	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(0,115.6,0.647,1);

	// Слой 3
	this.instance_3 = new lib.Символ45();
	this.instance_3.setTransform(0,-2.1,0.382,1.603);
	this.instance_3.alpha = 0.578;

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-147.8,19.6,295.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ22();
	this.instance.setTransform(-252.7,-76);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-86.3,alpha:1},14,cjs.Ease.get(0.96)).wait(45).to({x:48.1,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(-215.3,-31.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:-48.9,alpha:1},14,cjs.Ease.get(0.96)).wait(45).to({x:85.5,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(3));

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(-208.8,12.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:-42.4,alpha:1},14,cjs.Ease.get(0.96)).wait(45).to({x:92,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321.4,-89,137.4,25.9);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(-631.6,0);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-151.2,0);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(329.2,0);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(809.6,0);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-872.6,-400,1923.2,800);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-80,127,160);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(4.8,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.96,skewY:-7.9,x:9.2,y:20.5},9).to({scaleX:1,scaleY:1,skewY:0,x:4.8,y:16},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.7,-64,127,160);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(2.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.2,x:-2.4,y:5.2},14).to({rotation:0,x:2.5,y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-90,177,180);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ba2_09.png
	this.instance = new lib.Символ6();
	this.instance.setTransform(-89.6,139.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-47.5,x:-46.8,y:175.3},19).to({rotation:0,x:-89.6,y:139.1},20).wait(1));

	// ba2_18.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-0.4,101.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-19.8,x:9.1,y:94.8},19).to({rotation:0,x:-0.4,y:101.3},20).wait(1));

	// ba2_06.png
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(52.2,-163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// ba2_15.png
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(-32.4,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// ba2_21.png
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(52.1,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// ba2.png
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(62,101.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:15.2,x:49.1,y:99.4},19).to({rotation:0,x:62,y:101.7},20).wait(1));

	// ba2_03.png
	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(136.1,84.2,1,1,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0,x:106.1,y:91.2},19).to({rotation:-20.2,x:136.1,y:84.2},20).wait(1));

	// ba2_25.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(9.6,144.8,1,1,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:0,x:-0.4,y:149.7},19).to({rotation:17.4,x:9.6,y:144.8},20).wait(1));

	// ba2_27.png
	this.instance_8 = new lib.Символ10();
	this.instance_8.setTransform(53.8,193.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:42.9,x:26,y:192.4},19).to({rotation:0,x:53.8,y:193.7},20).wait(1));

	// Слой 1
	this.instance_9 = new lib.Символ18();
	this.instance_9.setTransform(159.4,151.6,0.738,0.878,0,65.6,32.7,0.1,0);
	this.instance_9.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.6,-253.5,578.8,541.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 33
	this.instance = new lib.Символ33();
	this.instance.setTransform(-25.8,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:18.5,x:-22.9,y:-4},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:32.5,x:-20.7,y:-3.8},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:17.3,x:-23.1,y:-3.9},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-25.8,y:-4.1},8,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(-2.1,17.1,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.81,x:-2.5},8,cjs.Ease.get(-1)).to({scaleX:0.82,x:-2.8},6,cjs.Ease.get(1)).to({scaleX:0.81,x:-2.5},7,cjs.Ease.get(-1)).to({scaleX:0.79,x:-2.1},8,cjs.Ease.get(1)).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(0.9,-19.9,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.76,skewY:-0.3,x:2.2,y:-19.7},8,cjs.Ease.get(-1)).to({scaleX:0.74,skewY:-0.7,x:3.1,y:-19.5},6,cjs.Ease.get(1)).to({scaleX:0.77,skewY:-0.3,x:2.1,y:-19.7},7,cjs.Ease.get(-1)).to({scaleX:0.79,skewY:0,x:0.9,y:-19.9},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-32.2,70.8,64.5);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(-88.4,-52.5);

	// Символ 31
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(-82.2,-89.3,0.794,0.794);

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(0.3,1.6,0.794,0.794);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.8,-109.6,201.1,191);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:480},67).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-872.6,-400,1923.2,800);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-17.9,6.8,0.736,0.736);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.8},9).to({y:16.4},4).to({y:6.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.3,-179.8,426.1,398.8);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(23.3,14.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.5,-95.4,201.1,191);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(30.2,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:42.5},9,cjs.Ease.get(-1)).to({y:33.6},10,cjs.Ease.get(1)).to({y:42},10,cjs.Ease.get(-1)).to({y:50.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.4,-45,201.1,191);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-31.2},19,cjs.Ease.get(-1)).to({x:-64},20,cjs.Ease.get(1)).to({x:-32},20,cjs.Ease.get(-1)).to({x:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.3,-179.8,426.1,398.8);


(lib.woma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-85.7,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16},9,cjs.Ease.get(-1)).to({scaleX:1.33,scaleY:1.33},10,cjs.Ease.get(0.98)).to({scaleX:1.17,scaleY:1.17},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-199.4,426.1,398.8);


// stage content:



(lib.kosinka600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		stage.canvas.style.cursor = "none";
		this.prik.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		this.cel.alpha=0;
		this.prik.alpha=0;
		
		function fl_CustomMouseCursor() {
			this.cel.x = stage.mouseX;
			this.cel.y = stage.mouseY;
			this.prik.x = stage.mouseX;
		}
		
		
		
		
		document.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.hand.alpha=0;
			this.cel.alpha=1;
			this.prik.alpha=1;
			this.woma.gotoAndPlay(1);
		
		}
		
		document.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.hand.alpha=1;
			this.cel.alpha=0;
			this.prik.alpha=0;
			this.woma.gotoAndPlay(21);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 16
	this.cel = new lib.Символ40();
	this.cel.setTransform(1167.3,158.3);

	this.timeline.addTween(cjs.Tween.get(this.cel).wait(1));

	// Слой 14
	this.prik = new lib.Символ27();
	this.prik.setTransform(783.8,231.8,1,1,28.7);

	this.hand = new lib.Символ27();
	this.hand.setTransform(189.4,235.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hand},{t:this.prik}]}).wait(1));

	// Слой 13
	this.instance = new lib.Символ23();
	this.instance.setTransform(585,152.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(184.9,121.9);
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ba2_09.png
	this.instance_2 = new lib.Символ43();
	this.instance_2.setTransform(75.4,292,1.674,1.674);

	this.woma = new lib.woma();
	this.woma.setTransform(520.7,172.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.woma},{t:this.instance_2}]}).wait(1));

	// Слой 11
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(103.5,173.3,0.578,0.578,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,47.1,1631.5,561.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
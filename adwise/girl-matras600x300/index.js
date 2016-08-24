(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/girl1.png", id:"girl1"},
		{src:"images/matrass.png", id:"matrass"},
		{src:"images/nogn.png", id:"nogn"},
		{src:"images/nogn2.png", id:"nogn2"},
		{src:"images/puzir.png", id:"puzir"},
		{src:"images/rq.png", id:"rq"},
		{src:"images/shilo1.png", id:"shilo1"},
		{src:"images/shilo2.png", id:"shilo2"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,184);


(lib.matrass = function() {
	this.initialize(img.matrass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,182);


(lib.nogn = function() {
	this.initialize(img.nogn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,74);


(lib.nogn2 = function() {
	this.initialize(img.nogn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,74);


(lib.puzir = function() {
	this.initialize(img.puzir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,145);


(lib.rq = function() {
	this.initialize(img.rq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,184);


(lib.shilo1 = function() {
	this.initialize(img.shilo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,27);


(lib.shilo2 = function() {
	this.initialize(img.shilo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,27);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhYAoIgHgCIgHgEIgFgFIgEgGIgDgHIgCgIIgBgIIABgHIACgIIADgHIAFgGIAFgFIAHgEIAIgDIAIAAIAJAAIAIADIAGAEIAGAFIAEAGIADAHQADAKAAAFIgBAIIgCAIIgEAIIgEAGIgGAFIgHADIgIACIgIABIgJgBgAhWgYQgEACgDAEQgCAEgBAFQgCAFAAAEQAAAFACAFQABAFADAEQACAEAEACQADACAFAAQAFAAADgDQAEgCACgDQADgEABgFIABgKIgBgJQgBgFgDgEQgCgEgEgCQgEgCgEAAQgFAAgDACgAj7AoIgHgCIgHgEIgFgFIgEgGIgDgHIgCgIIgBgIIABgHIACgIIADgHIAFgGIAFgFIAHgEIAIgDIAIAAIAJAAIAIADIAGAEIAGAFIAEAGIADAHQADAKAAAFIgBAIIgCAIIgEAIIgEAGIgGAFIgHADIgIACIgIABIgJgBgAj5gYQgEACgDAEQgCAEgBAFQgCAFAAAEQAAAFACAFQABAFADAEQACAEAEACQADACAFAAQAFAAADgDQAEgCACgDQADgEABgFIABgKIgBgJQgBgFgDgEQgCgEgEgCQgEgCgEAAQgFAAgDACgAmZAoIgIgCIgGgEIgGgFIgEgGIgDgHIgCgIIgBgIIABgHIACgIIAEgHIAEgGIAGgFIAHgEIAHgDIAJAAIAJAAIAHADIAHAEIAFAFIAFAGIADAHQACAKAAAFIgBAIIgCAIIgDAIIgFAGIgGAFIgGADIgIACIgJABIgIgBgAmYgYQgEACgCAEQgDAEgBAFQgBAFAAAEQAAAFABAFQABAFADAEQADAEADACQAEACAEAAQAFAAAEgDQADgCADgDQACgEACgFIABgKIgBgJQgCgFgCgEQgDgEgDgCQgEgCgFAAQgEAAgEACgAIqAoIgIgCIgHgEIgGgFQgDgCgCgEIgDgGIgCgIIgBgJIABgHIACgJIAEgHIAGgGIAGgFIAIgEIAIgCIAJAAIAMABIAIACIgEAPQgJgDgGAAQgGAAgEABIgIAFQgEAEgCAFQgCAFAAAFQAAAFACAFQACAFADAEQADADAFACQAFACAGAAQAGAAAJgDIADAOIgIADIgNABIgKgBgAAkAnIAAhOIASAAIAAAcIAKgBQAHAAAGACQAGACAEADQAEADADADQACAHAAAFQAAAFgBAFQgCAEgDADQgDADgEACIgIADIgJACIgKABQgMAAgIgCgAA2ABIAAAZIAHABIAGgBIAFgCIAEgFQABgCAAgEQAAgDgBgCIgDgFIgFgCIgHgBgAjHAaIAGgBIAEgDIADgFIABgGQACgHAAgIIAAgjIA2AAIAABPIgSAAIAAhAIgSAAIAAATIgBANIgCAMIgFAKQgDAEgEADIgIADIgIABgAHvAoIgGgVIgXAAIgGAVIgTAAIAZhPIAYAAIAZBPgAHnAFIgKgeIgIAeIASAAgAF6AoIAAhOIAYgCQAJAAAGACQAGABAEAEQAEADACAFQADAFAAAGQAAAFgCAFQgCAEgEADIgFADIgGADIgPACIgGAAIAAAdgAGMgZIAAAYIAGAAIAGgBIAFgCIAEgEIABgGIgBgFIgDgEIgFgCIgGgBIgHABgAFIAoIAAhAIgWAAIAAgPIA+AAIAAAPIgWAAIAABAgAEaAoIgGgVIgXAAIgGAVIgTAAIAZhPIAXAAIAaBPgAERAFIgJgeIgJAeIASAAgADKAoIgBgfIgBgfIgBAAIgJAdIgJAfIgPAAIgIgfIgIgdIgDA+IgRAAIAGhPIAYAAIAIAbIAHAbIAIgbIAIgbIAYAAIAFBPgAgMAoIAAhAIgVAAIAAgPIA8AAIAAAPIgWAAIAABAgAkxAoIgDgJIgDgJIgCgGIgDgFIgFgEQgDgBgDAAIgEAAIAAAiIgSAAIAAhPIASAAIAAAhIACAAIAWghIAWAAIgcAkQAEABADACIAFACIAEAGIADAGIAEANIAFANgAn4AoIAAhOIAYgCQAJAAAGACQAGABAEAEQAEADACAFQADAFAAAGQAAAFgCAFQgCAEgEADIgFADIgGADIgPACIgGAAIAAAdgAnmgZIAAAYIAGAAIAGgBIAFgCIAEgEIABgGIgBgFIgDgEIgFgCIgGgBIgHABgAoaAoIAAhAIgdAAIAABAIgSAAIAAhPIBBAAIAABPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.7,-4.2,117.4,8.4);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak6AwQgGgBgFgDIAEgOQAMAFAHAAIAGAAIAGgDIACgDQAAAAABgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgEgBgCQgBgCgEgBQgDgCgIAAIgIAAIAAgOIAIAAQAGAAAEAAIAEgEQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgEgDQgCgCgHAAIgJABIgIAEIgEgNQAEgDAGgBQAHgDAIAAQAGAAAFACIAJAEQAEADACAEQACADAAAFQAAAEgBADQgBADgDABIgFADQgDADgEAAIAAABIAIABIAGAEIAEAGQACAEgBAEIAAAGIgCAFQgDAFgFADIgLADQgGACgGAAQgHAAgGgCgABTAjIAGgBIAEgEIADgEIACgHQABgGAAgKIAAgiIA2AAIAABPIgSAAIAAhAIgSAAIAAASIgBAPIgCAMIgFAKQgDAEgEACIgHADIgJACgAhwAwIAAhPIASAAIAAAdIALgBQAGAAAGACQAGABAEABQAEAEADAEQADAIgBAEQABAGgCAFQgCAEgDADQgCADgEACIgJADIgJACIgKABQgMAAgIgCgAheAJIAAAaIAHAAIAHAAIAEgCQADgCABgDQABgDAAgDQAAgDgBgCIgDgFIgFgCIgHgBgAG2AwIAAgXIACghIgBAAQgJATgFAIIgQAdIgVAAIAAhPIARAAIAAAYIgBAjIABAAIAOgcIARgfIATAAIAABPgAFoAwIgEgIIgDgKIgCgFIgDgGIgFgDQgDgBgDAAIgEAAIAAAhIgSAAIAAhPIASAAIAAAgIACAAIAXggIAVAAIgcAiQAEACADACIAFADIAEAHIADAGIAEANIAFAMgAEbAwIAAgXIACghIgBAAQgJATgFAIIgQAdIgVAAIAAhPIARAAIAAAYIgBAjIABAAIANgcIASgfIATAAIAABPgACpAwIAAhPIAyAAIAAAPIgfAAIAAAQIAdAAIAAAPIgdAAIAAATIAhAAIAAAOgAgQAwIAAhPIAQAAIAABBIAUAAIAAhBIASAAIAABBIAUAAIAAhBIASAAIAABPgAihAwIAAg/IgWAAIAAgQIA+AAIAAAQIgWAAIAAA/gAjPAwIgHgUIgWAAIgGAUIgTAAIAZhPIAXAAIAZBPgAjYAOIgJgfIgJAfIASAAgAmBAwIAAhPIAzAAIAAAPIggAAIAAAQIAdAAIAAAPIgdAAIAAATIAhAAIAAAOgAnGAwIAAhNIAYgCQAJAAAGACQAHABAEADQADAEADAEQACAFAAAGQAAAGgCADQgCAFgEADIgFAEIgGADIgPACIgGgBIAAAdgAm0gRIAAAXIAGAAIAHgBIAEgDIAEgCIABgGIgBgEIgDgEIgEgDIgHAAIgHAAgAEDgjIgGgCIgDgGIgBgGIAMAAQAAAEABABQABABAAAAQAAABABAAQAAAAABAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIACgFIAMAAQAAAEgCADIgDAFIgGACIgHABIgHgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-5,91.1,10.1);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.nogn2, null, new cjs.Matrix2D(0.582,0.384,-0.384,0.582,-25.5,-53.3)).s().p("Al2AGIAAhEQCiAKChAQQAkAEAgAPIAugKIBFAvQBQA3BZAlQAlAQAlANIAACBIhrChgAAmiUQhzgHhyg2QhcgqhbgtIAAg2IAigzIBiAAIAAgdICNAAIGnEYQhUADhTAAIh1gBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-43.1,75,86.4);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.nogn2, null, new cjs.Matrix2D(0.582,0.384,-0.384,0.582,-27.7,-46)).s().p("AEXC5QhYglhRg3IhEgxIgsAKQgjgPgjgEQjcgVjcgMIgSgJIAtiHIA/heQBnA0BqAwQByA2B0AHQCNADCOgFIDnCXIhsCjQhKgWhGgeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.1,-23.8,106.3,47.6);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shilo2();
	this.instance.setTransform(36.8,34.4,1,1,-152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.2,-34.3,98.5,68.7);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shilo1();
	this.instance.setTransform(13,37.8,0.794,0.794,-124.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.6,-37.7,61.3,75.6);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.puzir();
	this.instance.setTransform(-45.3,-44.6,0.616,0.616);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.3,-44.6,90.6,89.4);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.matrass();
	this.instance.setTransform(-175,-91);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-175,-91,350,182);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.girl1, null, new cjs.Matrix2D(1,0,0,1,-43.7,-58.9)).s().p("Am0JHIABgBIABgCIgCgBIAAp8QAKhQAMhPQANhQgEhSQgFhxAYhhIMMAAQAKAKAEARQAsDBgYDKIgqASQgJBYgcBWQgRA1gIA4QgbCqhpBwIgIAAIgFAHIgIAAIgFAIIgSAGIgGAHQgEAEgEgBQgIADgHAIIgVAKIglAAQgtgDgoAEQgCgegkAPQgnAQAAAQIABACIgCAEIgNAKQgRAKgUABIg/AXQgHgDgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIhCATIhUANQgFABgFgBQgLAAAAAIQgJgDgFADQgGADgIACIgJAHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.7,-58.9,87.5,117.9);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjDDqIAAigIhxAAIE0kzIE1EzIh5AAIAACgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,-23.5,62,47);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eg2MAEJIAAoRMBsZAAAIAAIRg");
	this.shape.setTransform(346.9,26.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,693.9,53.2);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#957680").s().p("AhhASQgKgEAAgGQAAgGAKgCQAKgFAOAAQAOAAAKAFQAKACAAAGQAAAGgKAEQgKAFgOAAQgOAAgKgFgAA+ABQgKgCAAgGQAAgGAKgEQAKgEAOgBQAOAAACAFIAFAKQACAGgEACQgFAFgOAAQgOAAgKgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-2.3,21.7,4.6);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkpCVQDSh2BXizQBcCpDOCAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.8,-14.9,59.7,29.9);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AFE3F7").s().p("AiDB5IgCgxIhwAAIgDAxIggAAIgChSIAQgBIAKgVIAIgTQAEgOACgQQACgQAAgSIAAgzIB9AAIAACbIATABIgCBSgAjIg4QAAARgDAPQgCAQgEANQgFASgIAOIA/AAIAAh3IgpAAgAMWBEQgIgHAAgLQAAgMAIgHQAHgHALAAQALAAAHAHQAHAHAAAMQAAALgHAHQgHAHgLAAQgLAAgHgHgAA5AoQAHgBAGgCIAJgHQAEgEADgHIAFgPQACgNAAgYIAAhUICBAAIAAC9IgrAAIAAiZIgrAAIAAAtQAAAUgCAPQgBAOgEANQgEAOgHAJQgHALgLAGQgHAEgJACQgLADgKAAgAnSBJQgJgBgJgEQgIgEgHgFQgHgFgGgHQgGgGgEgIQgFgIgDgJIgEgQIgCgUQAAgLACgKIAFgTIAIgRQAEgIAHgGQAGgHAHgFQAHgGAJgDQAIgEAKgCQAKgCAKAAQALAAAKACQAKACAIAEQAIADAIAGQAHAFAGAHIAKAOQAEAIADAIQAGAZAAANQAAALgCALIgFASQgDAJgFAIQgFAIgGAHQgGAGgIAFQgHAFgJAEIgSAFIgUABQgKAAgKgCgAnQhRQgIAFgGAJQgGAJgDALQgDAMAAAOQAAAOADAKQADAMAGAIQAGAJAJAEQAJAFAKAAQALAAAJgFQAIgFAGgIQAGgJADgMQADgKAAgOQAAgNgDgLQgDgMgGgJQgGgJgIgFQgJgFgLAAQgLAAgJAFgAJXBHIAAi8IArAAIAABDIAYgCQAQAAANAEQAOAEAKAHQALAIAGALQAGARAAAJQAAANgEALQgEAKgHAIQgHAHgKAFQgIAEgLADIgWAEIgXABQgbAAgUgDgAKCgSIAAA7IAQABQAIAAAHgCQAHgCAFgEQAGgEACgGQADgGAAgIQAAgIgDgEQgCgGgGgDQgEgEgHgCQgHgCgIAAgAHhBIIAAiZIgzAAIAAgkICTAAIAAAkIg0AAIAACZgAF1BIIgPgxIg2AAIgOAxIgtAAIA7i9IA4AAIA7C9gAFggHIgWhOIAAAAIgUBOIAqAAgAhIBIIAAi9IB0AAIAAAkIhJAAIAAAnIBFAAIAAAjIhFAAIAAAsIBNAAIAAAjgAqFBIIAAiZIgzAAIAAgkICTAAIAAAkIg0AAIAACZgAr6BIIAAhNIgBAAQgKAFgLABQgKACgMAAQgNAAgLgDQgLgCgHgHQgJgHgEgLQgEgMAAgPIAAg/IArAAIAAA3QAAAJACAGQACAGAEAEQAEAEAGACQAGACAIAAQAJAAATgHIAAhRIArAAIAAC9gAMWALIAAgIQgBgJAEgLQAEgLAJgLIAMgQQAFgHAAgHQAAgIgFgEQgGgEgKgBQgHAAgIACQgHADgGAEIgKgfQAJgFALgDQAOgEAOAAQANAAALAEQAKADAHAGQAHAGADAIQADAIAAAJQAAAIgCAHQgCAHgEAGQgEAHgMANQgIAJgDAIQgEAJABAHIAAAGg");
	this.shape.setTransform(-27.2,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.8,-12.1,173.4,24.3);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.nogn();
	this.instance.setTransform(35.7,-13.5,0.485,0.485,131.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.7,-37.2,71.5,74.4);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ43();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.7,-4.2,117.4,8.4);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-5,91.1,10.1);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:11,x:1.4,y:1.4},5).to({rotation:0,x:0,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-23.8,106.3,47.6);


(lib.Символ37 = function() {
	this.initialize();

	// Символ 38
	this.instance = new lib.Символ40();
	this.instance.setTransform(1.2,-2.1);

	// Слой 1
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(-0.6,5.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.nogn2, null, new cjs.Matrix2D(0.582,0.384,-0.384,0.582,-20.8,-40.5)).s().p("AGmEMQAjANAjAKIhGBqgAm7A4IB1AHIAABHgAnrAZIBLhxIgtCFgAlhi2IAbgpIAAA2IgbgNgAjDkvIAAhdICNBdg");
	this.shape.setTransform(-5.4,-7.6);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.6,-47.4,109,95.7);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAYQgKgKAAgOQAAgNAKgLQALgKANABQAOgBAKAKQALALAAANQAAAOgLAKQgKALgOAAQgNAAgLgLg");
	this.shape.setTransform(-49.1,-33);

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(-10.5,-4.5);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.1,-52,109,95.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAYQgLgKABgOQgBgNALgKQAKgKANAAQAOAAAKAKQALAKAAANQAAAOgLAKQgKALgOgBQgNABgKgLg");
	this.shape.setTransform(-45.7,-27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(13,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-6,y:6},4).to({x:13,y:21},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-31.3,111.5,86.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15.7},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-37.7,61.3,75.6);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.7,-37.2,71.5,74.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:25.2},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.7,-37.2,71.5,74.4);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(-1.1,1.6);

	// Слой 1
	this.instance_1 = new lib.puzir();
	this.instance_1.setTransform(-45.3,-44.6,0.616,0.616);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.3,-44.6,90.6,89.4);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.setTransform(0,-2);

	// Слой 1
	this.instance_1 = new lib.Символ29();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.3,-44.6,90.6,89.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(2.4,-134.9,2.339,2.339);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("AgNDFQgGgGgBgUIAAgVQAAgpALgzQAJg0AAgRQAAgOgGhKQgBgNgGgfIgJgVQgIgUAAgEQAAgHAFgBIAQAAQAXAhAKAoQAHAdAAAqQAAASgIAvIgKA7QgCAcgHAjIAAAfQAAAUgGALg");
	this.shape.setTransform(45,-9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.498)").s().p("AgTAWQgSg2AAgTQAAgGADgKQADgKAAgIQAAgSASAdQARAdACAdQAWAhADAIQAHAQAAAYIAAAPQgCANgLAAQgYAAgUhHg");
	this.shape_1.setTransform(-10,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,0,0.498)").s().p("AgRDxQgHgBgBgHIAAgKQAAgeAMhLIAFgxQAEgrAAgLQAAgPgCgIIAAhHIgDghIAAg6QgCgGAAgOQAAgWACgHQAFgYARAEQAFAJABAPIABAYIAABRQACAEACAZIADAfQAAAtgOBzQgNB9gHAGg");
	this.shape_2.setTransform(15.7,-11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.498)").s().p("AgrB9IAAgXIAAguQABgVAHgeIAAh0QAFgHgEgRQACgKANgDIAfADQAgAFAAAIQAAAGgMAcIgMAeQgDAJgDAWQgDAVgFAKIAAB+IgDAQQgDANgQAAQgXAAgEgYg");
	this.shape_3.setTransform(-43.6,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,255,0,0.498)").s().p("AngFJIgGgdIADiJQgDgfAFgYQAIgxAlAAQAlAAA1AMQAyAKAXgBIBUAAQAcgPAIgdQAEggAHgMQAehAAPgdQAlhHAPgVQAkgzA3grQAOgJARgJQAYgMARgKQAHgEATgTQAWgOAaAQQAxAPBBAMQBTAQAfAHQAwAMAMAcQADAHACAqQABATAAAlIgBAlIABBCQABAngEAYIgHAhQgFAUgJANQgNAThAALQhHAJgUAFIhdABIgiAJIgkADIgqABQgugBghATIgsAcIgcAOQgPAIgeAEQgZADgNAHIgaANQg9AZhqA9QhFAogsAAQgTAAgKgdg");
	this.shape_4.setTransform(0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA8QAQgYgmgQgVQgZgmgmgaQhkhDjPgYQh/gOgWgEQhMgMgogZQhng/hEiBQgqhRgNgUQgjg4gwgoIhihSQg9grhSgVQiZgng9gZQhQghgigwQgwhDghghQgxg0g+gkQhQgvh5gVQgkgGgLgMQgQgPAAgoQABiQBtheQCBhuFfhyQEQhZDOhHQBDgXA9gmQAbgRBCgyQAzgmAjgQQAwgYA5gCIENAAQF+gDDABUQBIAfBBA0QBFA8AjAeQA0A2AlAhQBEA9BUAdQBGAZBaASQBmAUA+ATQHOCNCxC7QCDCMgBDVQAACdgqBbQhRCtjlAXIjKADQjSARgkAoQgLAMgIADQgIADgHAuQgHAtgyApQgyApgngCIjCAcQjmAVg6AZQgaAKgSATIgnAqQgSAQgQAVQgQAWgDADQgEAEgDATQgDATgKAJQgcAYhdAAQhqAAgsg9g");
	var mask_graphics_1 = new cjs.Graphics().p("AC4Q6QhUgHgngyQgaglgQgTIgGgJQgYgegigXIgWgMQhUgwiVgZIg0gIQh9gQgWgFQhJgNgogcIgDgCQhOgzg+hYQgQgXgOgZQgrhOgPgTIgFgIQgkgxgsgmIgVgSQhIg9gEgEIgYgRQgxgfhDgSIgSgEQh1gfg5gZIgTgIQhFgeglgnIgKgLQgxhAgigfIgJgIQgugtg5giIgMgHQg9gjhSgTQgWgFgWgEQgjgGgLgLIgBgBQgQgPAAgnIAAgBQABiRBthdIACgCQCChtFbhyIAHgCQEMhXDMhGIALgEQA+gWA3gjIALgIQAbgSA2gpIALgIQAtggAegOIANgHQArgSAxgBIAQAAID9AAIASAAQFwgCC8BSIAXAKQA7AdA2ArIATARIBWBJIASATQAoAqAfAbIAVASQA7AvBHAZIAdAKQA7ASBJAPIAeAGQBRARA1AQIAfAKQG1CJCqC0IAbAfQBoCDABC+IgBAsQgDB4glBIIgFAJQhHCOi1AtQgaAHgeAEQhiAHhlACIgMABQi9ATgpAiIgEAEQgLALgJAEQgIADgIAqIgDAKQgMAlgtAhIgBABQguAhgjADIgHAAIhrASIhTAPIgdAEIhpARQgyAJgmAIQgoAIgWAJQgYALgTASIgMALIgdAdQgPAMgLAOIgHAJQgPAUgFAEQgEADgEASIAAABQgEARgJAHQgMAJgUAGQggAJg6AAIgbgBg");
	var mask_graphics_2 = new cjs.Graphics().p("AC6Q3QhVgGgngvQgagjgRgTIgIgHQgWgdglgXIgVgMQhUguiVgcQgZgFgbgDQh6gTgYgGQhFgPgogeIgDgCQhNg1hAhWQgQgWgPgYQgthLgQgSIgGgIQgkgugtgmIgVgTQhGg8gFgGIgWgRQgvgghFgTIgSgFQh0gfg4gbIgTgJQhDgfgnglIgKgLQgyg8gkgeIgJgHQgvgrg4gkIgMgHQg9glhRgTIgrgKQgjgGgLgLIgBgBQgQgPAAgnIAAgBQABiQBtheIACgCQCBhtFbhxIAHgCQEMhXDMhGIAMgEQA8gXA4giIALgIQAcgSA1gpIAMgIQAsggAegPIAOgGQArgSAwgCIAQAAID9AAIASAAQFwgBC8BRIAWAKQA8AdA2ArIATAQQA3AwAfAaIASATQApApAeAbIAUASQA8AwBHAZIAcAKQA7ASBIAPIAgAGQBRARA0AQIAgAKQGzCICsC0IAaAeQBqCEABC9IgBAsQgEB7gmBCIgGAJQhICGi1A1QgaAIgcAGQhfANhlABIgMABQi9AWgqAhIgDADQgLALgJADQgJADgJAoIgEAJQgNAjgsAdIgDABQgtAdgkAEIgGAAIhqAVIhRASIgdAFQg7AMgrAKIhVAUQgoAJgXAJQgYAKgUASIgLALQgNAKgQARQgSALgIAOIgHAIQgQATgFADQgFADgEARIAAAAQgFAQgKAHQgLAIgVAGQgfAIg5AAIgcgBg");
	var mask_graphics_3 = new cjs.Graphics().p("AC8Q1QhWgFgngtQgcghgRgSIgHgHQgXgcgmgWIgVgMQhUgtiVgeIgzgJQh6gVgWgHQhEgQgnghIgDgCQhLg3hChTQgRgVgQgYQguhHgSgSIgGgHQgmgsgtgnIgVgSQhEg8gFgIIgWgSQgsgghGgUIgSgFQh0ggg2gdIgTgKQhAghgqgjIgKgKQg0g5glgcIgJgHQgxgpg3glIgMgIQg7gmhRgTIgrgKQgjgHgLgKIgBgBQgPgPAAgnIAAgBQAAiQBtheIACgCQCBhtFchxIAHgCQELhYDLhGIAMgEQA9gWA4gjIALgHQAbgSA2gpIALgIQAsggAfgPIANgGQArgSAxgCIAQAAID8AAIATAAQFugCC9BRIAWAKQA8AdA2ArIATAQIBWBKIATASQAnApAfAcIAVASQA7AwBGAZIAcAKQA8ASBIAPIAfAGQBRARA1AQIAfAKQGzCICsCzQAOAPANAPQBqCDACC9QABAXgBAVQgEB9gqA9IgGAIQhJB/i1A9QgZAJgbAHQhbAThnACIgMABQi8AZgpAeIgEAEQgLAKgJADQgLADgJAlIgEAIQgQAggsAaIgCABQgtAZgkAGIgGAAIhpAYIhQAUIgdAGQg4APgpAMIhUAXQgnAJgXAKQgZAKgTARIgMALQgNAJgRAQQgTAKgGANIgIAIQgPASgGACQgFADgFAPIAAABQgGAOgJAHQgNAHgTAFQgeAIg8ABIgbgBg");
	var mask_graphics_4 = new cjs.Graphics().p("AC+QzQhYgFgmgpQgdgggRgRIgIgHQgXgagngWIgWgMQhTgsiVggIgygKQh5gWgXgJQhAgRgogkIgDgCQhIg4hFhRQgSgVgQgWQgwhFgTgRIgHgGQgmgqgugnIgVgTQhCg7gGgKIgVgSQgpgihIgUIgRgFQh0ggg1ghIgSgJQg/gjgrghIgLgKQg1g1gmgbIgKgHQgygng2gmIgMgIQg6gohRgTIgqgKQgjgIgLgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCBhtFbhyIAHgCQEMhXDLhGIAMgEQA9gWA3gjIAMgHQAagSA3gpIALgIQArggAfgPIAOgGQAqgSAxgDIAQAAID8AAIATAAQFugCC9BRIAWAKQA8AcA2ArIATARIBWBJIATATQAnApAfAbIAVASQA6AxBHAZIAcAKQA7ATBIAOIAfAGQBRASA1APIAgAKQGyCHCtCzIAaAeQBsCCACC9QABAXgBAVQgEB/gtA5IgGAHQhKB2i1BGQgYALgaAHQhYAZhnACIgMABQi8AcgpAdIgEADQgLAKgJACQgMADgKAjIgEAHQgSAegsAWIgCABQgtAVglAHIgGABIhnAaIhPAXIgcAIQg3AQgnAPQgsAPgmAKQgmAKgYAKQgYAKgUARIgNALQgOAIgRAPQgUAJgEANIgIAHQgPARgHABQgFADgFAOIgBAAQgGAOgKAFQgNAHgTAFQgdAIg8AAIgbAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AC/QwQhYgEglgmIgBAAQgegfgSgQIgIgGQgWgYgpgVIgWgMQhUgriUgjIgygLQh3gYgXgKQg9gSgognIgDgCQhGg6hIhOQgTgUgQgWQgxhBgWgRIgGgGQgogmgugpIgVgTQhBg6gGgMIgTgTQgngihKgVIgRgFQh0ghgzgjIgRgKQg9gkgugfIgLgJQg2gzgogZIgJgHIhphMIgMgIQg5gqhQgUIgrgKQgjgHgKgLIgBgBQgPgPAAgnIAAAAQAAiQBtheIACgCQCBhtFbhxIAHgCQELhXDLhGIAMgEQA9gWA4gjIALgHQAbgSA2gpIALgIQAsggAegPIAOgGQArgTAwgCIAQAAID8AAIATAAQFugCC9BQIAWAKQA8AcA2ArIATAQIBWBKIATASQAnApAfAcIAUASQA7AwBGAaIAcAKQA7ATBJAOIAfAHQBQARA1APIAgAKQGyCHCtCyIAbAeQBsCCADC9IAAArQgDCBgxA0IgGAHQhMBui1BOQgWAMgZAJQhVAehoACIgLABQi8AggpAbIgEACQgLAJgKADQgMADgMAfIgEAHQgUAbgrATIgCABQgtARgmAJIgFAAQgyAOg0APIhNAaIgcAJQg2ATglARQgpAQgmAMQglAKgaALQgYAKgVAQIgMAKQgPAIgRAOQgVAIgCANIgIAGQgQAPgHACQgGACgGANIgBAAQgGAMgKAFQgNAGgTAFQgcAHg9ABIgcgBg");
	var mask_graphics_6 = new cjs.Graphics().p("ADBQuQhZgEglgjIgBAAIgygsIgJgGQgVgWgrgVIgWgMQhTgqiUglIgxgLQh3gbgWgLQg7gUgogpIgCgCQhEg8hLhLQgTgUgRgUQgyg+gYgQIgHgGIhXhOIgVgTQg/g5gHgNIgSgUQgkgjhLgWIgSgFQhzghgygmIgRgLQg6gmgwgdIgLgIQg4gvgpgZIgKgGQg0gjg1goIgMgIQg5gshPgUIgqgKQgjgIgKgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCAhtFbhyIAHgCQELhXDMhFIALgEQA9gWA4gjIALgHQAbgSA2gpIAMgIQArggAfgPIANgHQArgSAwgCIAQgBID8AAIATAAQFtgCC+BQIAVAKQA8AcA3ArIATAQIBWBJIATASQAnAqAfAbIAUASQA7AxBGAaIAcAKQA7ATBIAPIAfAGQBRARA1APIAfAKQGxCHCvCxIAaAeQBtCBAEC9IAAArQgDCDg0AwIgHAGQhMBmi1BWQgVANgYAKQhSAkhoADIgMAAQi7AjgpAZIgEADQgLAIgKACQgNADgNAdIgFAGQgVAZgsAPIgCAAIhSAYIgFABQgyAOgzASIhMAdIgbAJQg0AWgkATQgnASgmANQgkALgbALQgYAKgVAPIgNAKQgPAHgRANQgXAIAAALIgIAGQgQAOgIABQgGACgGALIgBABQgHAKgKAFIggAKQgcAHg+AAIgbAAg");
	var mask_graphics_7 = new cjs.Graphics().p("ADCQsQhagEgkggIgBAAQghgbgTgOIgJgGQgVgUgsgVIgWgMQhTgoiUgoIgxgMQh1gdgWgNQg4gUgogsIgDgDIiPiGQgUgSgRgUQg0g7gZgPIgIgFQgqgigugqIgVgTQg9g5gIgPIgRgVQghgjhNgYIgRgFQhzghgxgpIgQgLQg4gngzgbIgLgIQg4gsgsgZIgKgDQg1gig0gpIgMgJQg4gthOgUIgqgKQgjgJgKgKIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCBhtFbhyIAHgCQELhXDLhGIAMgEQA9gWA3giIAMgHQAagRA3gqIALgIQArggAfgPIANgHQArgSAwgDIAQAAID8AAIATAAQFtgDC9BQIAWAKQA8AcA3AqIATAQIBWBKIATASQAnApAfAcIAUASQA6AxBGAaIAcAKQA7ATBIAPIAfAGQBRARA1APIAfAKQGxCGCvCxIAbAdQBuCCAEC8IAAArQgDCGg2AqIgIAGQhOBei0BeQgUAPgXALQhPAqhoACIgMABQi7AlgpAYIgEACQgMAIgKACQgOACgNAbIgFAGQgYAWgrALIgCAAQgsAKgnAMIgFABQgxAPgyATIhLAgIgaAKQgzAZgiAVQgkAUgnAOQgjALgcALQgYAKgVAPIgNAKQgQAGgRAMQgYAHACALIgJAFQgQANgIAAQgHACgGAKIgCAAQgIAKgKADIggAJQgaAHg/ABIgcAAg");
	var mask_graphics_8 = new cjs.Graphics().p("ADEQpQhbgDgkgdIgBAAIg1gmIgKgFQgVgTgtgVIgXgLQhTgoiTgqIgwgNQh0gfgXgOQg1gVgngvIgDgDQg/g+hRhHQgUgSgTgSQg0g4gcgPIgHgFQgrgfgvgrIgVgTQg7g4gIgRIgRgVQgegkhPgZIgRgFQhzghgugsIgQgMQg3gog0gaIgMgHQg5gogtgYIgLgEQg2gegzgrIgMgJQg3gvhOgUIgqgLQgigJgKgJIgBgBQgPgPAAgnIAAgBQAAiQBshdIACgCQCBhtFbhxIAHgCQEKhXDLhGIAMgEQA9gWA4giIALgHQAagRA3gqIALgIQAsggAegPIAOgHQAqgSAwgDIAQgBID8AAIATAAQFsgCC+BPIAWAKQA8AcA3AqIATAQIBWBKIATARQAnAqAfAbIAUASQA6AxBGAbIAcAKQA6ATBJAPIAeAGQBRARA1APIAgAKQGwCGCwCwIAaAdQBvCBAFC8IAAArQgCCIg6AmIgIAFQhPBVi0BnQgTAQgWAMQhMAwhpACIgLABQi7ApgpAVIgEACQgMAIgKABQgPADgOAYIgGAFQgZATgrAIIgCAAQgsAGgnANIgFABQgxARgyAUIhIAjIgaAMQgyAbgfAXQgjAWgnAPQgiALgdAMQgYAKgVAOIgOAKQgRAFgQALQgaAGAEAKIgJAFQgPAMgKAAQgHABgHAJIgBAAQgJAIgKADIggAIQgaAHg/AAIgcAAg");
	var mask_graphics_9 = new cjs.Graphics().p("ADGQmQhcgCgkgaIgBAAQgjgYgUgMIgKgFQgVgRgugVIgXgKQhTgniSgsIgxgOQhyghgXgPQgygXgogxIgCgDQg9hAhUhEIgogjQg2g1gdgOIgIgFQgsgdgvgrIgVgTQg6g3gIgTIgQgWQgbgkhQgaIgSgFQhygigtgvIgPgMQg1gqg2gYIgMgGQg7glgugWIgLgFQg4gcgygrIgMgKQg2gxhNgUIgqgLQgjgJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCBhtFahxIAHgCQELhXDLhGIALgEQA9gVA4gjIAMgHQAZgRA3gpIAMgJQArgfAfgQIANgGQAqgTAxgDIAPgBID8AAIATAAQFsgCC+BOIAWAKQA8AcA3AqIATAQIBWBKIATARQAnAqAfAcIAUARQA6AyBFAaIAcAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGwCGCwCwIAbAdQBvCAAGC7IAAAsQgCCKg9AhIgJAEQhPBOi1BuQgRASgVANQhJA2hpACIgMABQi5AsgqATIgEACQgMAHgKACQgQACgQAVIgFAEQgcASgrADIgCAAQgrACgoAPIgFABQgvASgyAWIhHAmIgZAMQgxAfgdAYQggAZgoAQQghALgeAMQgXAKgWAOIgOAJQgSAFgQAJQgbAGAGAJIgJAFQgQAKgKAAQgIAAgHAIIgCAAQgJAHgKACIggAHQgZAHhAAAIgOABIgOgBg");
	var mask_graphics_10 = new cjs.Graphics().p("ADHQkQhcgCgkgXIgBAAQglgXgUgKIgKgFQgVgPgwgVIgXgKQhSgmiSguIgxgPQhxgjgWgQQgwgYgng0IgDgDQg6hChXhCIgpghQg3gygfgNIgJgEQgtgbgwgrIgUgUQg4g2gJgVIgPgXQgZglhRgaIgRgGQhygigsgxIgOgNQgzgsg5gVIgMgGQg8gigwgVIgLgEQg5gagygsIgLgKQg1gzhMgUIgqgLQgjgJgJgKIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCBhtFahyIAHgCQEKhWDLhGIAMgEQA9gWA3giIAMgHQAZgRA4gpIALgJQArggAfgPIANgHQAqgTAxgDIAPAAID8AAIASAAQFtgDC+BOIAWAKQA8AcA3AqIATAQIBWBJIASASQAoApAfAcIAUASQA5AxBGAbIAbAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGwCFCwCwIAcAcQBvCAAHC7QABAWgBAWQgCCMhAAcIgJAEQhRBGi0B2QgQATgUAOQhGA8hpADIgMAAQi5AvgqASIgEACQgMAFgLACQgRACgQASIgGAEQgeAPgqAAIgCAAQgsgCgnARIgFABQgvATgxAXIhFApIgZANQgwAhgbAbQgdAbgpAQQggAMggANQgWAJgWAOIgPAIQgSAFgQAIQgdAFAIAJIgJAEQgQAIgLAAQgIAAgIAGIgBAAQgKAGgKACQgQACgQAEQgYAGhCABIgOAAIgOAAg");
	var mask_graphics_11 = new cjs.Graphics().p("ADJQhQhdgBgkgUIgBAAQgmgVgVgJIgKgEQgUgOgygVIgXgKQhTgkiRgxIgwgQQhwglgWgRQgtgZgog3IgCgDQg4hEhag/IgqggQg5gughgMIgIgFQgvgYgwgsIgUgUQg2g1gKgXIgNgYQgXglhTgbIgRgGQhygjgqgzIgOgOQgwgtg7gUIgNgFQg9gegxgUIgMgEQg5gXgyguIgLgKQg0g1hMgUIgqgMQgigJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCAhtFahxIAHgCQELhXDLhFIALgEQA9gWA4giIALgHQAagRA3gpIAMgJQArggAegPIANgHQArgTAwgDIAPgBID8AAIASAAQFsgCC/BNIAVAKQA9AcA3AqIATAPIBWBKIASARQAoApAfAdIATARQA6AyBFAbIAcAKQA6AUBJAPIAeAGQBQARA2APIAfAJQGvCFCyCvIAbAcQBwCAAIC6QABAWgBAWQgBCOhEAXIgJAEQhSA9i0B/QgPAUgTAQQhDBBhqADIgLAAQi5AygqAQIgEACQgMAFgLACQgSABgRAQIgHADQgfANgqgEIgCgBQgsgFgoASIgFABQguAUgwAaIhEArIgYAPQguAjgZAdQgcAdgoARIhBAaQgWAJgXANIgPAIQgSAEgQAHQgfAFAKAHIgJAEQgPAHgNgBQgIAAgIAFIgCAAQgKAEgKACQgRABgPAEQgYAFhCABIgOABIgOgBg");
	var mask_graphics_12 = new cjs.Graphics().p("ABJQNIgBAAQgngTgWgJIgKgDQgUgMgzgVIgYgKQhSgjiRgzIgwgRQhugmgWgUQgrgZgng6IgCgEQg3hEhbg9IgsgeQg6gsgjgLIgJgEQgwgWgwgsIgUgUQg1g1gKgZQgHgNgFgLQgUgmhUgdIgSgFQhxgjgpg3IgNgOQgugug+gSIgMgFQg/gbgzgSIgMgEQg6gVgxgvIgLgLQgzg2hLgUIgqgMQgjgKgIgJIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCAhtFahxIAHgCQEKhXDLhGIALgEQA9gVA4giIAMgHQAZgQA3gqIAMgJQArggAegPIANgHQArgTAwgEIAQAAID7AAIASAAQFsgDC+BNIAWAKQA9AbA3AqIATAQIBWBKIASARQAoApAfAcIATASQA6AyBFAbIAbAKQA7AUBIAPIAfAGQBPARA3APIAeAJQGvCECyCvIAcAcQBxB/AIC6QABAWgBAWQgBCQhGATIgLADQhTA1i0CHQgOAVgRARQhABHhqADIgMABQi4A1gqAOIgEABQgMAFgMABQgSACgTANIgGADQgiAJgqgHIgCgBQgrgJgoAUIgFABQguAVgvAbIhDAuIgYAQQgsAmgXAfQgZAfgpASIhBAaQgWAJgXANIgPAIQgTADgQAGQggAEAMAHIgJADQgQAGgNgCQgJAAgIAEIgCgBQgLADgLABQgQABgQADQgWAGhDABIgdAAQhegBgjgRg");
	var mask_graphics_13 = new cjs.Graphics().p("ABKQOIgBAAQgpgRgVgIIgLgDQgUgKg1gVIgXgJQhSgiiRg2IgvgRQhugpgWgVQgngbgng8IgDgEQg0hGheg6IgtgdQg8gogkgLIgKgDQgwgUgxgtIgUgUQgzg0gLgbIgLgZQgRgmhWgeIgRgFQhxgkgog5IgMgPQgtgwg/gQIgNgEQhAgXg0gRIgNgEQg7gTgwgwIgLgLQgzg4hKgUIgpgMQgjgLgIgIIgBgBQgPgPAAgnIAAgBQAAiPBshdIACgCQCAhtFahyIAHgCQEKhWDKhGIAMgEQA9gVA3giIAMgHQAZgQA4gqIALgJQArggAfgQIANgGQAqgTAwgEIAQgBID7AAIASAAQFrgDC/BNIAWAKQA8AbA4AqIATAPIBWBKIASARQAoApAfAdIATARQA5AyBFAcIAcAKQA6AUBIAPIAfAGQBQARA2APIAfAJQGuCECzCuIAbAcQByB/AJC5QABAWgBAWQgBCShJAOIgLADQhUAti0CPQgNAWgQATQg9BMhqAEIgMAAIjiBEIgEACQgMAEgMABQgTABgUALIgHACQgjAHgqgLIgCgBQgrgNgpAVIgFACQgtAWguAcIhBAxIgYARQgrApgVAhQgXAhgpATIhBAbQgWAJgXAMIgQAIQgUACgPAFQgiADAOAGIgJADQgQAFgOgCQgJgBgJACIgCAAIgWACQgRAAgPADQgWAFhEABIgcABQhfgBgjgOg");
	var mask_graphics_14 = new cjs.Graphics().p("ABLQPIgCAAQgpgQgWgGIgKgDIhMgcIgXgKIjjhZIgugSQhsgrgWgWQgkgcgog/IgCgEQgyhIhhg3IgvgbQg8glgngLIgJgDQgygQgxgvIgVgUQgxgzgKgdQgIgNgDgMQgOgnhYgfIgSgFQhwgkglg8IgNgQQgqgxhCgOIgNgDQhBgVg2gPIgNgEQg8gTgwgvIgKgLQgyg6hKgVIgpgMQgigKgJgJIgBgBQgPgPAAgnQAAiQBshdIACgCQCBhtFZhxIAHgCQEKhXDLhFIAKgEQA+gVA3giIAMgHQAZgQA3gqIANgJQArggAegQIAMgGQArgUAwgDIAQgBID7AAIASAAQFqgDDABMIAVAKQA9AbA4AqIASAPIBWBKIATAQQAoAqAeAcIAUASQA5AyBFAcIAbAKQA6AUBIAPIAfAHQBQAQA2APIAfAJQGuCECzCtIAcAcQByB+AJC6IABArQgBCUhMAKIgLACQhWAli0CXQgLAYgPATQg6BShrAEIgLAAQi5A7gpALIgEABQgMADgNABQgUABgUAIIgIACQglAFgqgPIgCgBQgqgRgqAXIgEABQgtAXguAfIg/AzIgXASQgqAsgTAjQgUAigqAVIhBAcQgWAJgXALIgQAHQgVACgPAEQgkACARAGIgKACQgQADgPgCQgJgBgKABIgCAAIgXAAQgRgBgOADQgWAFhEABIgdAAQhgAAgigLg");
	var mask_graphics_15 = new cjs.Graphics().p("ABMQQIgCAAQgrgOgWgGIgKgCIhMgaIgZgKIjihaIgugTQhrgtgVgXQgigdgnhCIgDgEQgvhJhlg2IgvgZQg9gigpgKIgKgCQgzgOgxgvIgUgVQgwgygMgfQgGgOgDgMQgLgnhaggIgRgGQhwgkgkg/IgMgQQgpgyhEgMIgMgDIh6gfIgNgDQg+gSgugwIgKgLQgyg9hJgUIgpgMQgigLgJgJIgBgBQgPgPAAgnQAAiPBshdIACgCQCAhtFahyIAHgCQEJhWDLhFIALgEQA9gWA4ghIALgIQAZgPA4gqIAMgJQArggAegQIANgGQAqgUAwgEIAQgBID7AAIASAAQFqgDC/BMIAWAKQA9AbA4ApIATAQIBVBJIATARQAoApAeAdIATARQA6AzBEAcIAbAKQA7AUBIAPIAeAHQBQAQA2APIAfAJQGtCDC0CtIAcAbQB0B/AJC5IABAsQgBCWhPAEIgMACQhWAcizCgQgLAZgOAVQg3BYhrADIgMAAQi3A/gqAJIgEAAQgNADgNABQgUABgVAFIgIABQgoACgpgSIgCgBQgrgVgqAYIgDACQgsAYguAgIg+A2IgWAUQgoAugSAlQgSAkgqAWQgcANglAPIguAUIgQAHQgWABgPADQglABATAGIgKABQgQACgPgDIgUgBIgDgBIgXgCQgSgBgOADQgUAEhFABIgdABIgMAAQhXAAgggIg");
	var mask_graphics_16 = new cjs.Graphics().p("AGWQVIgUgEIgDAAIgYgEQgSgDgOADQgTAEhHACIgcABQhiABgigGIgCAAQgsgMgXgFIgKgCQgVgFg5gTIgYgJQhRgfiRg9IgtgUQhqgvgVgYQgggegnhFIgCgEQguhLhmgzIgxgYQg/gegrgJIgKgCQg0gMgxgwIgVgUQgtgygNghQgFgOgDgMQgJgohaghIgSgGQhwglgihBIgLgRQgng0hFgKIgOgCIh9gaIgNgDQg/gQgtgxIgKgMQgxg+hJgUIgogMQgjgMgIgIIgBgBQgPgPAAgnQABiPBrhdIACgCQCAhtFahyIAHgCQEIhWDLhGIAMgEQA8gVA5giIALgHQAYgPA4gqIAMgJQArggAfgQIAMgGQAqgUAwgEIAQgBID7AAIASAAQFqgEC/BMIAWAJQA9AcA3ApIAUAPIBVBKIATAQQAnApAfAdIATASQA5AyBEAdIAbAKQA7AUBIAPIAeAHQBPAQA4APIAeAJQGtCDC1CsIAbAbQB1B+AKC5QABAVAAAXQAACYhTgBIgMABQhYAVizCnQgKAbgMAWQg0BehsAEIgLAAQi3BBgqAHIgEABIgaACIgsAEIgIAAQgqAAgpgWIgCgCQgqgYgqAaIgEACQgrAZgtAhIg8A5IgXAVQgmAxgQAnQgPAmgrAXQgbANgmAQIgtATIgRAHIgmACQgmABAVAEIgKABIgIAAQgNAAgMgCg");
	var mask_graphics_17 = new cjs.Graphics().p("AG6QYQgPAAgRgEIgVgFIgDgBIgZgFQgUgEgNADQgSAEhHABIgdABQhjACghgDIgCAAQgtgKgXgEIgMgBQgUgEg6gTIgYgJQhSgeiPg/IgtgUQhpgxgWgaQgcgggnhHIgCgEQgshNhpgwIgygWQhBgcgrgIIgLgCQg1gJgzgwIgUgVQgrgxgNgiQgGgPgBgNQgHgohcgiIgSgGQhuglgihEIgKgSQglg1hIgIIgOgCQhEgKg7gMIgNgCQhBgNgtgzIgKgMQgvhAhIgUIgogNQgjgMgIgIIgBgBQgPgPAAgnQABiPBrhdIACgCQCAhtFZhxIAHgCQEJhWDLhGIALgEQA8gVA5giIALgHQAYgPA4gqIAMgJQArggAegQIAOgHQApgTAxgFIAPgBID7AAIASAAQFpgDDABLIAWAJQA8AbA4AqIAUAPIBVBKIATAQQAnApAfAdIATARQA5AzBEAdIAbAKQA6AUBIAQIAfAGQBPAQA3APIAeAJQGtCCC1CsIAcAbQB1B9ALC5QABAVAAAXQAACahVgFIgOAAQhYANizCvQgIAdgMAWQgxBkhsAEIgLAAQi3BEgqAGIgEAAQgNACgNAAIguABIgJgBQgrgCgpgaIgBgCQgrgcgrAbIgEACQgpAbguAiIg6A9IgWAVQglA0gNApQgOAogqAYQgbAOgnAQIguASIgRAHIgmAAQgnAAAWAEIgLAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AGEQLQglgNgVAEQgUAEhjACIiEADQg+gMgWgBQgYgBhQgcQhRgdiPhCQiQhCgaghQgaghgphOQgohOhtguQhtguhBgIQhBgIg7hEQg8hFgDgsQgDgshvgmQhvglgghHQghhIhVgHQhXgIhIgMQhHgNgwg/QgvhBhHgVQhGgVgMgMQgQgPAAgoQABiQBtheQCBhuFfhyQEQhZDOhHQBDgXA9gmQAbgRBCgyQAzgmAjgQQAwgYA5gCIENAAQF+gDDABUQBIAfBBA0QBFA8AjAeQA0A2AlAhQBEA9BUAdQBGAZBaASQBmAUA+ATQHOCNCxC7QCDCMgBDVQAACdhYgKQhZgKjCDGQgnCliQgCQi2BHgqAEQgqADgugFQgtgFgqggQgqgfgrAcQgrAcgvAmIhOBWQgkA2gLArQgLArgsAYQgrAYhVAfQhZgDAiAEQgggBgmgNg");
	var mask_graphics_19 = new cjs.Graphics().p("AGZQUIgVgFIgCgBQgOgDgLgCQgUgDgNADQgSADhIACIgdABQhiABghgDIgCAAQgtgKgXgEIgLgCQgVgDg6gUIgYgJQhSgdiPhAIgtgUQhpgwgVgaQgdgfgohIIgCgDQgrhNhqgwIgxgXQhBgcgrgIIgLgCQg1gKgygwIgUgUQgsgygNgiQgFgOgCgNQgHgohcgiIgRgGQhwglghhEQgFgJgFgIQglg1hIgJIgOgBQhEgLg7gMIgNgCQhAgOgugyIgKgMQgvhAhIgUIgogNQgjgLgIgJIgBgBQgPgPAAgnQABiPBrhdIACgCQCAhtFZhxIAHgCQEJhWDLhGIALgEQA9gVA4giIALgHQAYgPA5gqIALgJQAsggAegQIANgHQApgTAxgFIAPgBID7AAIASAAQFqgDC/BLIAWAJQA9AcA3ApIAUAPIBVBKIATAQQAnApAfAdIATARQA5AzBEAdIAbAKQA6AUBJAQIAeAGQBPAQA4APIAdAJQGtCCC1CsIAcAbQB1B+ALC4QABAWAAAWQAACahVgFIgNABQhZAOiyCuQgJAcgLAXQgxBjhtAEIgLAAQi3BEgqAFIgEAAQgNACgNAAIguACIgJgBQgqgCgpgZIgCgCQgrgbgqAaIgEACQgrAbgsAiIg7A8IgWAVQglA0gNAoQgOApgsAXQgaAOgnAQIguATIgRAGIgmAAQgnABAWADIgKABQgQAAgRgEg");
	var mask_graphics_20 = new cjs.Graphics().p("AGWQVIgVgDIgDAAIgXgEQgTgCgOADQgTAEhHACIgcAAQhhABgjgGIgBAAQgsgNgWgFIgLgBQgVgGg4gUIgZgJQhRgfiQg8IgugUQhqgugVgYQgggegnhEIgCgEQgvhLhmgzIgwgYQg/gggqgJIgKgCQg0gNgxgvIgUgUQgvgzgMgfQgGgPgDgMQgJgohaggIgSgGQhwglgihBIgLgQQgng0hGgKIgOgDIh8gbIgMgDQg/gQgugxIgKgMQgxg9hJgUIgogNQgjgLgIgJIgBgBQgPgPAAgnQAAiPBshdIACgCQCAhtFahxIAHgCQEJhXDLhFIALgEQA8gVA5giIALgHQAYgQA4gqIAMgJQArgfAfgRIAMgGQAqgUAwgEIAQgBID8AAIASAAQFpgDC/BMIAXAJQA8AbA4AqIATAPQA1AuAgAcIATAQQAnApAfAdIATASQA6AyBEAdIAbAJQA6AVBJAPIAeAHQBPAQA3AOIAeAKQGuCCC0CtIAcAbQBzB+ALC5QABAVAAAXQAACXhSABIgMABQhYAXizClQgJAbgNAVQg1BdhsADIgLABQi4BAgpAIIgEAAQgNADgNAAQgWABgVADIgJABQgoAAgpgVIgDgCQgqgXgqAaIgEABQgrAZgtAhIg9A5IgWAUQgnAwgRAnQgQAmgqAWQgcANglAQIguATIgQAHIgmACQgmACAVAEIgLABIgKAAQgLAAgKgCg");
	var mask_graphics_21 = new cjs.Graphics().p("ABLQQIgBAAQgrgPgWgGIgJgCIhNgcIgYgJIjihaIgugTQhrgsgWgWQgjgdgnhBIgDgEQgwhJhjg2IgvgaQg+gjgngKIgKgCQgzgQgxguIgUgVQgwgzgMgdQgGgOgEgMQgMgnhYggIgSgFQhwglglg9IgMgQQgpgyhDgNIgNgDIh5ghIgNgDQg9gSgvgwIgKgLQgxg8hKgUIgpgMQgigLgJgJIgBgBQgPgPAAgnQAAiPBshdIACgCQCBhtFZhyIAHgCQEKhWDKhFIALgEQA+gWA3giIALgHQAZgPA4gqIAMgJQArggAfgQIAMgGQArgUAvgEIAQgBID8AAIASAAQFqgDC/BMIAWAKQA8AbA4AqIATAPIBVBKIAUAQQAmApAfAdIAUASQA5AyBEAcIAcAKQA6AUBIAPIAfAHQBQAQA2APIAfAJQGtCDC0CtIAbAcQB0B+AJC6IABArQgBCWhOAGIgMACQhVAgi0CcQgLAZgOAUQg4BWhrADIgMAAQi3A9gqAKIgFABQgMADgNABQgUABgVAGIgIABQgnADgpgRIgBgBQgrgTgqAYIgEABQgsAYguAfIg/A2IgWASQgpAugSAkQgTAkgqAVIhBAcIgtAUIgRAHQgUABgQAEQgkABARAGIgJABQgQADgPgDIgUgBIgCAAIgYgBQgRgCgOADQgUAFhGABIgdABIgJAAQhZAAghgJg");
	var mask_graphics_22 = new cjs.Graphics().p("ABKQPIgBAAQgpgRgWgHIgKgDIhKgdIgXgKQhTghiQg3IgvgSQhtgqgWgVQgmgbgng+IgDgEQgzhHhfg5IgugcQg8gmglgLIgKgDQgxgSgxguIgUgUQgyg0gLgcQgIgNgDgMQgPgmhYgeIgRgGQhxgkgmg6IgNgQQgrgwhBgPIgMgEQhBgWg1gQIgNgDQg7gVgxguIgKgLQgyg6hLgUIgogMQgjgKgIgJIgBgBQgPgPgBgnIAAAAQAAiQBshdIACgCQCAhtFahxIAIgCQEJhXDLhFIALgEQA9gWA4ghIALgIQAagPA3gqIAMgJQAqggAfgQIANgGQArgUAvgDIAQgBID8AAIASAAQFrgDC/BNIAVAJQA8AbA4AqIATAPIBWBKIATARQAnApAfAdIAUARQA5AyBFAcIAbAKQA6AUBIAPIAfAHQBQAQA2APIAfAJQGuCECzCuQAOANANAOQBzB/AIC6IABAsQgBCThLALIgLADQhVApizCSQgNAYgPATQg8BPhqAEIgMAAQi4A5gqAMIgDABQgNAEgMABQgUABgTAJIgIACQglAGgpgNIgCgBQgrgOgpAVIgFACQgsAWgvAeIhAAyIgXASQgrAqgTAiQgWAhgpAUIhCAcQgVAJgYALIgPAIQgVACgPAEQgjADAPAGIgJACQgQAEgOgCQgJgBgKACIgCAAIgXABQgQgBgPADQgWAFhEABIgcABQhgAAgjgNg");
	var mask_graphics_23 = new cjs.Graphics().p("ABJQNIgBAAIg9gaIgLgEQgUgLgzgUIgYgKQhSgjiRg0IgvgRQhvgogVgTQgqgagng7IgCgEQg2hFhdg8IgsgdQg6grgkgLIgJgDQgwgVgwgtIgVgUQgzg1gLgZQgHgNgFgMQgSgmhVgdIgSgFQhxgkgog3IgNgPQgugug+gSIgNgEQg/gagzgRIgMgEQg7gVgxgvIgKgLQg0g3hLgUIgpgMQgjgKgIgJIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCAhtFahxIAHgCQEKhXDLhFIALgEQA9gWA4giIALgHQAZgQA4gqIAMgJQArgfAegQIANgHQAqgTAxgEIAPAAID8AAIASAAQFrgDC/BNIAWAKQA8AbA3AqIAUAPQA1AvAgAbIATARQAnApAfAdIAUARQA5AyBFAcIAcAKQA6AUBIAPIAfAGQBQARA2APIAfAJQGuCECzCuIAbAcQBxB/AJC7QABAVgBAWQgBCRhHARIgLADQhTAyi0CKQgOAWgQARQg/BJhrADIgLABQi5A2gqANIgDACQgNAEgMABQgSACgTAMIgHACQgiAJgqgJIgCAAQgrgLgpAUIgEACQguAVgvAcIhCAvIgYAQQgsAngWAgQgYAfgpATIhBAbQgWAJgXAMIgPAIQgUADgQAFQggAEANAHIgKACQgQAGgNgCQgJAAgIADIgCAAQgLACgLABQgRAAgPAEQgWAFhEABIgcAAQhegBgkgQg");
	var mask_graphics_24 = new cjs.Graphics().p("ADJQhQhdgBgkgUIgBAAQgmgUgVgJIgLgEQgUgNgygVIgXgKQhSgkiSgyIgvgPQhwgmgWgSQgsgZgog4IgCgDQg4hDhag/IgrgfQg5gughgMIgJgEQgvgYgwgsIgUgUQg2g1gKgYQgIgMgFgLQgVgmhUgcIgRgFQhygjgqg0IgNgOQgwgtg8gUIgMgFQg+gdgygTIgLgFQg6gWgxguIgLgLQg1g1hLgUIgqgLQgigKgJgJIgBgBQgPgPAAgnIAAgBQAAiPBshdIACgCQCAhtFahyIAHgCQELhXDKhFIAMgEQA9gWA4giIALgHQAZgQA4gqIALgJQArgfAfgQIANgHQAqgTAxgDIAPgBID8AAIASAAQFsgCC+BNIAWAKQA8AbA4AqIATAQIBVBKIATARQAoApAeAcIAUASQA6AyBFAbIAbAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGvCFCyCuIAbAdQBwB/AIC7QABAWgBAWQgBCOhEAWIgKAEIkGC7QgPAVgSAQQhDBDhqADIgLAAQi5AzgqAPIgDACQgNAFgLABQgSACgSAPIgGADQggAMgqgFIgCAAQgsgGgoASIgEABQgvAUgwAaIhDAsIgYAPQguAkgZAeQgbAdgoASIhAAZQgXAJgWANIgPAJQgTADgQAHQgfAEALAIIgKADQgPAHgNgBQgIAAgIAFIgCgBQgKAEgLACQgQABgQAEQgXAFhDABIgcAAg");
	var mask_graphics_25 = new cjs.Graphics().p("ADHQkQhcgCgkgXIgBAAIg5ghIgKgEQgVgPgwgVIgXgKQhTgliSgvIgwgPQhxgjgWgRQgvgYgog0IgCgEQg7hBhWhCIgqghQg3gxgggNIgIgEQgtgbgwgrIgVgUQg3g2gJgWIgPgWQgYglhSgbIgRgFQhygjgsgxIgOgNQgygsg6gVIgMgGQg8ghgwgVIgLgFQg5gZgygsIgLgKQg1g0hNgTIgpgMQgjgJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCBhtFahxIAHgCQEKhXDLhFIAMgEQA9gWA3giIAMgIQAZgQA4gqIALgIQArggAfgQIANgGQAqgTAxgDIAPgBID8AAIASAAQFsgCC/BOIAVAJQA9AcA3AqIATAQIBWBKIASARQAoApAfAcIATASQA6AyBGAbIAbAJQA7AUBIAPIAfAGQBQARA2APIAfAKQGvCFCxCvQAPAOAMAPQBwCAAHC7QABAVgBAWQgCCMhAAcIgJAEQhRBEi1B4QgQATgTAPQhGA8hpACIgMABQi5AvgqASIgEACQgMAFgLACQgRACgQASIgGAEQgeAOgqAAIgCgBQgsgCgoARIgFABQgvATgwAYIhFApIgZAOQgvAhgbAbQgeAbgoARQggALggANQgXAKgWANIgOAJQgSAEgRAIQgdAFAJAJIgJADQgQAJgMgBQgIAAgHAHIgCAAQgKAFgKACQgQACgQAEQgYAGhCABIgcAAg");
	var mask_graphics_26 = new cjs.Graphics().p("ADGQmQhcgCgkgaIgBAAQgjgYgUgMIgKgFQgVgRgugVIgXgKQhTgniSgsIgxgOQhyghgXgPQgygXgogxIgCgDQg9hAhUhEIgogjQg2g1gdgOIgIgFQgsgdgvgrIgVgTQg6g3gIgTIgQgWQgbgkhQgaIgSgFQhygigtgvIgPgMQg1gqg2gYIgMgGQg7glgugWIgLgFQg4gcgygrIgMgKQg2gxhNgUIgqgLQgjgJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCBhtFahxIAHgCQELhXDLhGIALgEQA9gVA4gjIAMgHQAZgRA3gpIAMgJQArgfAfgQIANgGQAqgTAxgDIAPgBID8AAIATAAQFsgCC+BOIAWAKQA8AcA3AqIATAQIBWBKIATARQAnAqAfAcIAUARQA6AyBFAaIAcAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGwCGCwCwIAbAdQBvCAAGC7IAAAsQgCCKg9AhIgJAEQhPBOi1BuQgRASgVANQhJA2hpACIgMABQi5AsgqATIgEACQgMAHgKACQgQACgQAVIgFAEQgcASgrADIgCAAQgrACgoAPIgFABQgvASgyAWIhHAmIgZAMQgxAfgdAYQggAZgoAQQghALgeAMQgXAKgWAOIgOAJQgSAFgQAJQgbAGAGAJIgJAFQgQAKgKAAQgIAAgHAIIgCAAQgJAHgKACIggAHQgZAHhAAAIgOABIgOgBg");
	var mask_graphics_27 = new cjs.Graphics().p("ADEQpQhbgDgkgdIgBAAIg1gnIgKgFQgVgTgtgVIgWgLQhTgoiTgqIgxgNQh0gegWgOQg2gVgogvIgCgCQhAg/hQhHQgUgSgTgTQg0g4gbgOIgIgFQgrgggvgrIgUgTQg8g4gIgRIgRgVQgfgjhNgZIgSgFQhzgigvgrIgPgMQg3gog0gaIgMgHQg5gpgtgYIgLgDQg2gfgzgqIgMgKQg3gvhNgUIgrgKQgigJgKgKIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCBhtFbhyIAHgCQEKhXDLhFIAMgEQA9gWA4gjIALgHQAagRA3gpIALgJQAsggAegPIAOgGQAqgTAwgDIAQAAID8AAIATAAQFtgDC9BPIAWAKQA8AcA3ArIATAQIBWBJIATASQAnApAfAcIAUASQA6AxBGAaIAcAKQA7ATBIAPIAfAHQBQAQA2AQIAfAJQGwCGCwCxIAbAdQBuCBAFC8IAAArQgCCHg6AnIgIAFQhPBXi0BlQgTAQgVAMQhNAvhpADIgLAAQi7AogpAWIgEACQgMAIgKACQgPACgOAYIgGAFQgZAUgrAIIgCAAQgsAHgnANIgFABQgwAQgyAUIhJAjIgaALQgyAcggAWQgiAWgoAPQgiALgdAMQgXAJgWAPIgOAJQgQAGgQALQgaAGADAKIgIAGQgQALgJAAQgHABgHAJIgBAAQgJAJgKADIggAIQgaAHg/AAIgOAAIgOAAg");
	var mask_graphics_28 = new cjs.Graphics().p("ADCQsQhagEglghIAAAAQghgbgSgOIgJgGQgWgVgrgVIgXgMQhTgpiTgmIgygNQh1gcgWgMQg5gUgogrIgCgDQhCg9hNhJQgUgTgSgUQgzg8gZgPIgHgGQgqgigugqIgVgTQg+g5gHgPIgSgUQgigjhMgXIgRgFQhzgigxgoIgQgLQg5gngygbIgLgIQg4gtgrgYIgLgFQg0ghg1gpIgLgJQg4gthPgUIgqgKQgjgJgKgKIgBgBQgPgPAAgnIAAAAQAAiQBthdIACgCQCAhtFbhyIAHgCQELhXDLhGIAMgEQA9gWA3giIAMgHQAagSA3gpIALgIQAsggAegPIAOgHQAqgSAwgDIAQAAID9AAIASAAQFtgCC+BPIAWAKQA8AcA2ArIATAQIBWBJIATASQAnApAfAcIAUASQA7AxBGAaIAcAKQA7ATBIAPIAfAGQBQARA2APIAfAKQGxCGCuCyIAbAdQBuCBAEC8IAAAsQgDCFg2ArIgHAGQhOBgi0BcQgUAPgXAKQhQAphoACIgMABQi7AlgpAYIgEACQgMAIgKACQgOADgNAbIgFAGQgXAWgrAMIgCABQgsAKgnAMIgFABQgxAPgzASIhKAgIgbAKQgzAYgiAUQglAUgnAOQgkAKgcAMQgXAKgVAPIgOAKQgPAGgRAMQgYAHABALIgIAGQgQANgIAAQgHACgGAKIgBABQgIAJgKAEIggAKQgbAGg+ABIgcAAg");
	var mask_graphics_29 = new cjs.Graphics().p("ADAQvQhZgEglglIAAAAQgfgdgTgPIgIgGQgWgXgqgWIgWgLQhTgriUgkIgygLQh2gagXgLQg8gTgogoIgCgCQhFg7hKhNQgTgTgRgVQgxg/gXgRIgHgFQgogmgvgpIgUgTQhAg5gHgNIgTgUQglgihKgWIgRgFQh0ghgyglIgRgLIhrhCIgLgJQg3gwgpgZIgKgGQgzgkg1goIgMgIQg5grhPgUIgrgKQgjgIgKgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCBhtFbhyIAHgCQELhXDLhFIAMgEQA9gXA3giIAMgHQAagSA3gpIALgIQArggAfgPIANgHQArgSAwgCIAQgBID9AAIASAAQFugCC9BQIAWAKQA8AcA3ArIASAQIBWBKIATASQAoApAeAcIAVASQA6AwBGAaIAcAKQA7ATBJAPIAfAGQBQARA1APIAgAKQGxCHCuCyIAbAdQBtCCADC9IAAArQgDCDgzAxIgGAGQhNBpi0BTQgWANgYAJQhUAihnADIgMAAQi7AigpAaIgEACQgMAJgJACQgNADgMAeIgFAHQgVAZgrAQIgCABQgtAPgmAKIgFAAQgyAOgzARIhNAcIgbAJQg1AVgkASQgoASgmAMQglAKgaALQgYAKgVAQIgNAKQgOAIgRAMQgXAJgBALIgIAHQgPAOgIABQgGACgGAMIgBAAQgHALgKAFIggAKQgcAIg9AAIgcAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AC+QxQhXgEgmgoIAAAAIgwgwIgIgGQgWgZgogWIgWgMQhUgriUghQgZgGgZgFQh4gYgXgJQg/gRgnglIgDgDQhHg5hHhPQgSgVgQgWQgxhCgVgRIgGgHQgngogugoIgVgTQhBg6gGgLIgUgTQgpghhIgVIgSgFQh0ghgzghIgSgLQg+gjgtggIgKgJQg2g0gngbIgKgGQgygmg2gmIgMgJQg6gphQgTIgrgKQgigIgLgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCBhtFbhyIAHgCQELhXDMhGIALgEQA9gWA4giIALgIQAbgRA2gpIAMgJQArggAfgPIANgGQArgSAwgCIAQgBID9AAIASAAQFugCC9BRIAWAKQA8AcA3ArIATAQIBWBKIASASQAoApAfAcIAUASQA7AwBGAaIAcAJQA7ATBJAPIAfAGQBQARA1AQIAgAKQGyCHCtCzQAOAOANAPQBrCCADC9IAAAsQgDCAgvA2IgHAIQhLByi0BJQgXAMgaAIQhXAbhnADIgMAAQi7AegqAcIgDADQgMAJgJADQgMADgLAhIgEAHQgTAcgsAUIgCABQgsAUgmAIIgFAAIhnAcIhOAZIgcAIQg2ASgnAPQgqAQgmALQglAKgaALQgYAKgUAQIgNAKQgOAJgRANQgUAKgEAMIgHAHQgQAQgHABQgGACgFAOIgBABQgGAMgKAGQgNAGgTAFQgdAHg8ABIgcgBg");
	var mask_graphics_31 = new cjs.Graphics().p("AC9Q0QhXgFgmgrIgBAAIgtgzIgIgHQgWgagngWIgVgMQhUgtiUgfIgzgJQh6gWgWgIQhDgQgngiIgDgCQhKg3hEhTQgRgVgPgXQgvhGgTgSIgGgGQgmgrgugoIgUgSQhEg7gFgJIgVgSQgsghhGgUIgSgFQh0ggg2gfIgSgJQhAgigqgiIgLgKQg0g4gmgcIgJgHQgxgog2glIgNgIQg7gnhQgTIgrgKQgjgHgLgKIgBgBQgPgPAAgnIAAgBQAAiQBtheIACgCQCBhtFbhxIAHgCQEMhYDLhFIAMgEQA9gXA4giIALgIQAbgSA2gpIALgIQAsggAegPIAOgGQArgSAwgCIAQAAID9AAIASAAQFvgCC9BRIAWAKQA7AcA3ArIATARIBWBJIASATQAoApAfAbIAUASQA7AxBHAZIAcAJQA7ATBJAPIAeAGQBRARA1AQIAgAKQGyCICtCzQAOAOAMAQQBrCCACC+QABAWgBAVQgEB+grA8IgGAHQhKB7i1BBQgYAKgaAHQhbAVhnACIgLABQi9AagpAeIgDADQgMAKgJADQgLADgKAkIgDAIQgRAfgsAYIgCABQgtAYglAGIgFABIhpAYIhPAWIgdAHQg4APgoANIhTAYQgmAJgYAKQgZAKgTARIgNALIgeAYQgTAKgGANIgHAIQgQARgGACQgFACgFAQIAAAAQgGAOgKAGQgMAHgUAGQgeAIg7AAIgbgBg");
	var mask_graphics_32 = new cjs.Graphics().p("AC7Q3QhXgGglguIgBAAQgagjgRgTIgIgHQgXgdgkgWIgVgNQhUguiWgcIgzgIQh6gTgYgHQhEgPgpgfIgCgCQhNg1hAhVQgRgWgOgYQguhKgQgTIgHgHQgkgtgtgnIgVgSQhFg8gGgHIgVgSQgvgghFgTIgSgEQh0ggg4gbIgSgJQhDgggoglIgKgKQgyg8gkgdIgJgHQgwgrg3gkIgNgHQg7glhSgTIgrgKQgjgHgLgKIgBgBQgQgPAAgnIAAgBQABiRBthdIACgCQCBhtFbhxIAHgCQENhYDLhGIAMgEQA8gWA4gjIALgHQAbgSA2gpIALgIQAtggAegPIAOgGQAqgSAxgCIAQAAID9AAIASAAQFwgCC8BRIAWAKQA8AdA2ArIASARIBXBJIASATQAoApAfAcIAUASQA7AvBHAaIAdAJQA7ATBIAOIAfAHQBRARA1AQIAfAKQGzCICsCzIAaAeQBrCEABC9IgBAsQgEB7goBBIgEAJQhJCEi1A3QgaAJgbAFQheAPhmACIgMABQi9AWgpAgIgDAEQgMALgIADQgKADgKAnIgDAIQgOAigsAdIgDABQgtAcgkAFIgFAAIhqAVIhSATIgcAFQg6AMgrALIhVAUQgnAKgYAJQgYAKgTASIgMALQgMAKgRAQQgSALgIAOIgIAIQgPATgFACQgFADgEARIAAAAQgGAQgJAHQgMAHgUAGQgfAIg6ABIgbgBg");
	var mask_graphics_33 = new cjs.Graphics().p("AC5Q5QhVgGgngyQgagkgQgUIgHgIQgXgfgigWIgWgNQhUgviVgZIg0gIQh9gRgWgFQhJgOgngbIgEgDQhOgzg9hYQgRgXgOgZQgrhNgPgTIgGgIQgigwgugmIgVgTQhHg8gEgFIgYgRQgxgfhDgSIgSgFQh1geg4gZIgUgIQhEgfgmgmIgKgLQgxhAgigfIgJgHQgugtg5giIgMgIQg+gjhRgTIgsgJQgjgGgLgLIgBgBQgQgPAAgnIAAgBQABiRBthdIACgCQCChtFbhyIAHgCQEMhXDMhGIALgEQA+gWA3gjIALgIQAbgSA2gpIALgIQAsggAfgOIANgHQArgRAxgCIAQAAID9AAIASAAQFwgCC8BSIAWAKQA8AdA2ArIATARQA3AwAfAZIASATQAoAqAfAbIAUASQA8AvBHAZIAcAKQA8ASBIAPIAfAGQBRARA1AQIAfAKQG0CJCrC0QAOAPANAPQBoCEABC+IgBAsQgDB4glBHIgFAJQhHCNi2AuQgaAHgdAFQhiAIhlABIgMABQi+AUgoAiIgEAEQgLALgJADQgIADgIArIgDAJQgMAlgtAgIgBACQguAfgkAEIgGAAIhrASIhTAPIgdAFQg8AJgtAIQgyAJglAIQgoAJgWAJQgZALgSASIgMALIgdAcQgQAMgKAPIgHAIQgQAVgEADQgFADgDASIAAABQgFARgJAHQgMAJgUAFQggAJg5AAIgbgBg");
	var mask_graphics_34 = new cjs.Graphics().p("AA8QAQgYgmgQgVQgZgmgmgaQhkhDjPgYQh/gOgWgEQhMgMgogZQhng/hEiBQgqhRgNgUQgjg4gwgoIhihSQg9grhSgVQiZgng9gZQhQghgigwQgwhDghghQgxg0g+gkQhQgvh5gVQgkgGgLgMQgQgPAAgoQABiQBtheQCBhuFfhyQEQhZDOhHQBDgXA9gmQAbgRBCgyQAzgmAjgQQAwgYA5gCIENAAQF+gDDABUQBIAfBBA0QBFA8AjAeQA0A2AlAhQBEA9BUAdQBGAZBaASQBmAUA+ATQHOCNCxC7QCDCMgBDVQAACdgqBbQhRCtjlAXIjKADQjSARgkAoQgLAMgIADQgIADgHAuQgHAtgyApQgyApgngCIjCAcQjmAVg6AZQgaAKgSATIgnAqQgSAQgQAVQgQAWgDADQgEAEgDATQgDATgKAJQgcAYhdAAQhqAAgsg9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:10.6,y:-25.4}).wait(1).to({graphics:mask_graphics_1,x:10.6,y:-25.6}).wait(1).to({graphics:mask_graphics_2,x:10.6,y:-25.9}).wait(1).to({graphics:mask_graphics_3,x:10.6,y:-26.1}).wait(1).to({graphics:mask_graphics_4,x:10.6,y:-26.4}).wait(1).to({graphics:mask_graphics_5,x:10.6,y:-26.6}).wait(1).to({graphics:mask_graphics_6,x:10.6,y:-26.9}).wait(1).to({graphics:mask_graphics_7,x:10.6,y:-27.1}).wait(1).to({graphics:mask_graphics_8,x:10.6,y:-27.4}).wait(1).to({graphics:mask_graphics_9,x:10.6,y:-27.6}).wait(1).to({graphics:mask_graphics_10,x:10.6,y:-27.8}).wait(1).to({graphics:mask_graphics_11,x:10.6,y:-28.1}).wait(1).to({graphics:mask_graphics_12,x:10.6,y:-28.3}).wait(1).to({graphics:mask_graphics_13,x:10.6,y:-28.6}).wait(1).to({graphics:mask_graphics_14,x:10.6,y:-28.8}).wait(1).to({graphics:mask_graphics_15,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_16,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_17,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_18,x:10.6,y:-29}).wait(1).to({graphics:mask_graphics_19,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_20,x:10.6,y:-29.2}).wait(1).to({graphics:mask_graphics_21,x:10.6,y:-29}).wait(1).to({graphics:mask_graphics_22,x:10.6,y:-28.7}).wait(1).to({graphics:mask_graphics_23,x:10.6,y:-28.4}).wait(1).to({graphics:mask_graphics_24,x:10.6,y:-28.2}).wait(1).to({graphics:mask_graphics_25,x:10.6,y:-27.9}).wait(1).to({graphics:mask_graphics_26,x:10.6,y:-27.6}).wait(1).to({graphics:mask_graphics_27,x:10.6,y:-27.3}).wait(1).to({graphics:mask_graphics_28,x:10.6,y:-27}).wait(1).to({graphics:mask_graphics_29,x:10.6,y:-26.8}).wait(1).to({graphics:mask_graphics_30,x:10.6,y:-26.5}).wait(1).to({graphics:mask_graphics_31,x:10.6,y:-26.2}).wait(1).to({graphics:mask_graphics_32,x:10.6,y:-25.9}).wait(1).to({graphics:mask_graphics_33,x:10.6,y:-25.6}).wait(1).to({graphics:mask_graphics_34,x:10.6,y:-25.4}).wait(1));

	// Слой 1
	this.instance = new lib.Символ24();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-91,350,174.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(-34.4,55.4,1,1,0.6,0,0,-34.4,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.1,x:-33.4,y:55.7},24).to({rotation:0.6,x:-34.4,y:55.4},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-59.6,88.8,118.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-24},6).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-23.5,62,47);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(955.3,551.2);

	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(953.3,556.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(906,519.9,111.5,86.7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rq();
	this.instance.setTransform(-101,-92);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.girl1, null, new cjs.Matrix2D(1,0,0,1,-2.5,-58.6)).s().p("AgXJGIABABIgBACIAAABgAgXpJIAvAAQgXBhAEBxQAEBSgLBQQgMBPgJBPg");
	this.shape.setTransform(-98.5,-33.4);

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-57.2,-32.3);

	this.addChild(this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101,-92,202.1,184);


(lib.Символ7копия = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(51.5,-36.2);

	// Слой 3
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(103.9,0.2,0.404,0.404,-91.5);

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(-19.8,-19.2,0.404,0.404,-179);

	// Слой 1
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(-0.1,0);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.2,-92,214.9,184);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(51.5,-36.2);

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-0.1,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.2,-92,202.1,184);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(0,-8.4,1.044,1.644);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-73.4},11).to({y:-138.4},12).to({y:-170.9},13).wait(20));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiYDDIAAmFIEyAAIAAGFQiQitiiCtg");
	this.shape.setTransform(0.7,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiYDgIAAm/IEyAAIAAG/QiQjGiiDGg");
	this.shape_1.setTransform(0.7,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiYD9IAAn5IEyAAIAAH5QiQjgiiDgg");
	this.shape_2.setTransform(0.7,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiYEaIAAozIEyAAIAAIzQiQj5iiD5g");
	this.shape_3.setTransform(0.7,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiYE3IAAptIEyAAIAAJtQiQkTiiETg");
	this.shape_4.setTransform(0.7,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiYFUIAAqnIEyAAIAAKnQiQktiiEtg");
	this.shape_5.setTransform(0.7,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiYFxIAArhIEyAAIAALhQiQlHiiFHg");
	this.shape_6.setTransform(0.7,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiYGOIAAscIEyAAIAAMcQiQlgiiFgg");
	this.shape_7.setTransform(0.7,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiYGrIAAtWIEyAAIAANWQiQl6iiF6g");
	this.shape_8.setTransform(0.7,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiYHIIAAuPIEyAAIAAOPQiQmUiiGUg");
	this.shape_9.setTransform(0.7,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiYHmIAAvLIEyAAIAAPLQiQmuiiGug");
	this.shape_10.setTransform(0.7,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiYIDIAAwFIEyAAIAAQFQiQnIiiHIg");
	this.shape_11.setTransform(0.7,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiYIeIAAw7IEyAAIAAQ7QiQnfiiHfg");
	this.shape_12.setTransform(0.7,-2.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiYI5IAAxxIEyAAIAARxQiQn3iiH3g");
	this.shape_13.setTransform(0.7,-5.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiYJUIAAynIEyAAIAASnQiQoPiiIPg");
	this.shape_14.setTransform(0.7,-8.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiYJvIAAzeIEyAAIAATeQiQoniiIng");
	this.shape_15.setTransform(0.7,-11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiYKLIAA0VIEyAAIAAUVQiQpAiiJAg");
	this.shape_16.setTransform(0.7,-13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiYKmIAA1LIEyAAIAAVLQiQpXiiJXg");
	this.shape_17.setTransform(0.7,-16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiYLBIAA2BIEyAAIAAWBQiQpviiJvg");
	this.shape_18.setTransform(0.7,-19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiYLcIAA24IEyAAIAAW4QiQqHiiKHg");
	this.shape_19.setTransform(0.7,-21.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AiYL3IAA3uIEyAAIAAXuQiQqfiiKfg");
	this.shape_20.setTransform(0.7,-24.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiYMTIAA4lIEyAAIAAYlQiQq4iiK4g");
	this.shape_21.setTransform(0.7,-27.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiYMuIAA5bIEyAAIAAZbQiQrPiiLPg");
	this.shape_22.setTransform(0.7,-30);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiYNJIAA6RIEyAAIAAaRQiQrniiLng");
	this.shape_23.setTransform(0.7,-32.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiYNVIAA6qIEyAAIAAaqQiQryiiLyg");
	this.shape_24.setTransform(0.7,-34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiYNiIAA7DIEyAAIAAbDQiQr+iiL+g");
	this.shape_25.setTransform(0.7,-35.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiYNuIAA7bIEyAAIAAbbQiQsIiiMIg");
	this.shape_26.setTransform(0.7,-36.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiYN6IAA70IEyAAIAAb0QiQsSiiMSg");
	this.shape_27.setTransform(0.7,-37.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiYOHIAA8NIEyAAIAAcNQiQseiiMeg");
	this.shape_28.setTransform(0.7,-38.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiYOTIAA8lIEyAAIAAclQiQspiiMpg");
	this.shape_29.setTransform(0.7,-40.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiYOfIAA89IEyAAIAAc9QiQsziiMzg");
	this.shape_30.setTransform(0.7,-41.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiYOsIAA9XIEyAAIAAdXQiQs/iiM/g");
	this.shape_31.setTransform(0.7,-42.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiYO4IAA9vIEyAAIAAdvQiQtJiiNJg");
	this.shape_32.setTransform(0.7,-43.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiYPEIAA+HIEyAAIAAeHQiQtUiiNUg");
	this.shape_33.setTransform(0.7,-45.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiYPRIAA+hIEyAAIAAehQiQtfiiNfg");
	this.shape_34.setTransform(0.7,-46.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiYPdIAA+5IEyAAIAAe5QiQtqiiNqg");
	this.shape_35.setTransform(0.7,-47.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiYPpIAA/RIEyAAIAAfRQiQt1iiN1g");
	this.shape_36.setTransform(0.7,-48.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiZOrIAA9VIEyAAIAAdVQiPs+ijM+g");
	this.shape_37.setTransform(0.7,-55.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AiYNtIAA7ZIEyAAIAAbZQiQsHiiMHg");
	this.shape_38.setTransform(0.6,-61.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiZMvIAA5dIEyAAIAAZdQiPrQijLQg");
	this.shape_39.setTransform(0.6,-67.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiZLxIAA3hIEzAAIAAXhQiQqaijKag");
	this.shape_40.setTransform(0.5,-73.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AiYKzIAA1lIExAAIAAVlQiPpjiiJjg");
	this.shape_41.setTransform(0.5,-80.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AiZJ1IAAzpIEzAAIAATpQiQosijIsg");
	this.shape_42.setTransform(0.4,-86.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiYI3IAAxtIEyAAIAARtQiQn1iiH1g");
	this.shape_43.setTransform(0.4,-92.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AiZH5IAAvxIEyAAIAAPxQiPm+ijG+g");
	this.shape_44.setTransform(0.3,-99.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AiYG7IAAt1IEyAAIAAN1QiQmIiiGIg");
	this.shape_45.setTransform(0.3,-105.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AiZF9IAAr5IEyAAIAAL5QiPlRijFRg");
	this.shape_46.setTransform(0.2,-111.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AiYE/IAAp9IEyAAIAAJ9QiQkaiiEag");
	this.shape_47.setTransform(0.2,-118);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AiZEBIAAoBIEyAAIAAIBQiPjkijDkg");
	this.shape_48.setTransform(0.1,-124.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AiZDDIAAmFIEzAAIAAGFQiQitijCtg");
	this.shape_49.setTransform(0.1,-130.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-32.9,62.3,84.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(13,-0.6,1.226,1.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.45,scaleY:1.45},19).to({scaleX:1.23,scaleY:1.23},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,-15.5,212.6,29.8);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(0.1,0.1,2.057,2.057);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.36,scaleY:2.36},4).to({scaleX:2.06,scaleY:2.06},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.7,-8.6,241.4,17.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(3.5,-191);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("A6QosIBmBgIL8IKIDfCeIHpExIEsCrIAPAHQAVAHAZADQBPAHBagsQCQhICnhZQDShcAAAAQDChCAAABQCnhTAAABQDLhdAAABQB6goAAAAIAKgEQAMgHAKgPQAggxgChqQgBhAgHgRQgGgQgSAKQgcAVgWAPQgqAbgrAOQhZAbhrArQhaAlAAACIjiBjIi4BIQAAABjiBYIihA7QAAAAhfAdQgmAKg6gCQhzgEhlg1QiehVikhjQkNioAAABQjpiMAAABQjFhzAAAAQjPiEAAABQjBh6AAAAQiAhZAAABQhmhCAAAAQhIg/AAABQgIASgEAcQgHA6AWA1g");
	this.shape.setTransform(1.5,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.498)").s().p("AEDLJQgZgDgVgHIgPgHIksirInpkxIjfieIr8oKIhmhgQgWg1AHg6QAEgcAIgSIBIA+IBmBCICABYIDBB6IDPCDIDFBzIDpCLIENCnQCkBjCeBVQBlA1BzAEQA6ACAmgKIBfgdIChg7IDihZIC4hIIDihjQAAgCBaglQBrgrBZgbQArgOAqgbIAygkQASgKAGAQQAHARABBAQACBqggAxQgKAPgMAHIgKAEIh6AoIjLBcIinBSIjCBBIjSBcQinBZiQBIQhNAmhFAAIgXgBg");
	this.shape_1.setTransform(1.5,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ16();
	this.instance.setTransform(-104.4,46.7,0.69,0.69,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AA8QAQgYgmgQgVQgZgmgmgaQhkhDjPgYQh/gOgWgEQhMgMgogZQhng/hEiBQgqhRgNgUQgjg4gwgoIhihSQg9grhSgVQiZgng9gZQhQghgigwQgwhDghghQgxg0g+gkQhQgvh5gVQgkgGgLgMQgQgPAAgoQABiQBtheQCBhuFfhyQEQhZDOhHQBDgXA9gmQAbgRBCgyQAzgmAjgQQAwgYA5gCIENAAQF+gDDABUQBIAfBBA0QBFA8AjAeQA0A2AlAhQBEA9BUAdQBGAZBaASQBmAUA+ATQHOCNCxC7QCDCMgBDVQAACdgqBbQhRCtjlAXIjKADQjSARgkAoQgLAMgIADQgIADgHAuQgHAtgyApQgyApgngCIjCAcQjmAVg6AZQgaAKgSATIgnAqQgSAQgQAVQgQAWgDADQgEAEgDATQgDATgKAJQgcAYhdAAQhqAAgsg9g");
	var mask_graphics_1 = new cjs.Graphics().p("AC4Q6QhUgHgngyQgaglgQgTIgGgJQgYgegigXIgWgMQhUgwiVgZIg0gIQh9gQgWgFQhJgNgogcIgDgCQhOgzg+hYQgQgXgOgZQgrhOgPgTIgFgIQgkgxgsgmIgVgSQhIg9gEgEIgYgRQgxgfhDgSIgSgEQh1gfg5gZIgTgIQhFgeglgnIgKgLQgxhAgigfIgJgIQgugtg5giIgMgHQg9gjhSgTQgWgFgWgEQgjgGgLgLIgBgBQgQgPAAgnIAAgBQABiRBthdIACgCQCChtFbhyIAHgCQEMhXDMhGIALgEQA+gWA3gjIALgIQAbgSA2gpIALgIQAtggAegOIANgHQArgSAxgBIAQAAID9AAIASAAQFwgCC8BSIAXAKQA7AdA2ArIATARIBWBJIASATQAoAqAfAbIAVASQA7AvBHAZIAdAKQA7ASBJAPIAeAGQBRARA1AQIAfAKQG1CJCqC0IAbAfQBoCDABC+IgBAsQgDB4glBIIgFAJQhHCOi1AtQgaAHgeAEQhiAHhlACIgMABQi9ATgpAiIgEAEQgLALgJAEQgIADgIAqIgDAKQgMAlgtAhIgBABQguAhgjADIgHAAIhrASIhTAPIgdAEIhpARQgyAJgmAIQgoAIgWAJQgYALgTASIgMALIgdAdQgPAMgLAOIgHAJQgPAUgFAEQgEADgEASIAAABQgEARgJAHQgMAJgUAGQggAJg6AAIgbgBg");
	var mask_graphics_2 = new cjs.Graphics().p("AC6Q3QhVgGgngvQgagjgRgTIgIgHQgWgdglgXIgVgMQhUguiVgcQgZgFgbgDQh6gTgYgGQhFgPgogeIgDgCQhNg1hAhWQgQgWgPgYQgthLgQgSIgGgIQgkgugtgmIgVgTQhGg8gFgGIgWgRQgvgghFgTIgSgFQh0gfg4gbIgTgJQhDgfgnglIgKgLQgyg8gkgeIgJgHQgvgrg4gkIgMgHQg9glhRgTIgrgKQgjgGgLgLIgBgBQgQgPAAgnIAAgBQABiQBtheIACgCQCBhtFbhxIAHgCQEMhXDMhGIAMgEQA8gXA4giIALgIQAcgSA1gpIAMgIQAsggAegPIAOgGQArgSAwgCIAQAAID9AAIASAAQFwgBC8BRIAWAKQA8AdA2ArIATAQQA3AwAfAaIASATQApApAeAbIAUASQA8AwBHAZIAcAKQA7ASBIAPIAgAGQBRARA0AQIAgAKQGzCICsC0IAaAeQBqCEABC9IgBAsQgEB7gmBCIgGAJQhICGi1A1QgaAIgcAGQhfANhlABIgMABQi9AWgqAhIgDADQgLALgJADQgJADgJAoIgEAJQgNAjgsAdIgDABQgtAdgkAEIgGAAIhqAVIhRASIgdAFQg7AMgrAKIhVAUQgoAJgXAJQgYAKgUASIgLALQgNAKgQARQgSALgIAOIgHAIQgQATgFADQgFADgEARIAAAAQgFAQgKAHQgLAIgVAGQgfAIg5AAIgcgBg");
	var mask_graphics_3 = new cjs.Graphics().p("AC8Q1QhWgFgngtQgcghgRgSIgHgHQgXgcgmgWIgVgMQhUgtiVgeIgzgJQh6gVgWgHQhEgQgnghIgDgCQhLg3hChTQgRgVgQgYQguhHgSgSIgGgHQgmgsgtgnIgVgSQhEg8gFgIIgWgSQgsgghGgUIgSgFQh0ggg2gdIgTgKQhAghgqgjIgKgKQg0g5glgcIgJgHQgxgpg3glIgMgIQg7gmhRgTIgrgKQgjgHgLgKIgBgBQgPgPAAgnIAAgBQAAiQBtheIACgCQCBhtFchxIAHgCQELhYDLhGIAMgEQA9gWA4gjIALgHQAbgSA2gpIALgIQAsggAfgPIANgGQArgSAxgCIAQAAID8AAIATAAQFugCC9BRIAWAKQA8AdA2ArIATAQIBWBKIATASQAnApAfAcIAVASQA7AwBGAZIAcAKQA8ASBIAPIAfAGQBRARA1AQIAfAKQGzCICsCzQAOAPANAPQBqCDACC9QABAXgBAVQgEB9gqA9IgGAIQhJB/i1A9QgZAJgbAHQhbAThnACIgMABQi8AZgpAeIgEAEQgLAKgJADQgLADgJAlIgEAIQgQAggsAaIgCABQgtAZgkAGIgGAAIhpAYIhQAUIgdAGQg4APgpAMIhUAXQgnAJgXAKQgZAKgTARIgMALQgNAJgRAQQgTAKgGANIgIAIQgPASgGACQgFADgFAPIAAABQgGAOgJAHQgNAHgTAFQgeAIg8ABIgbgBg");
	var mask_graphics_4 = new cjs.Graphics().p("AC+QzQhYgFgmgpQgdgggRgRIgIgHQgXgagngWIgWgMQhTgsiVggIgygKQh5gWgXgJQhAgRgogkIgDgCQhIg4hFhRQgSgVgQgWQgwhFgTgRIgHgGQgmgqgugnIgVgTQhCg7gGgKIgVgSQgpgihIgUIgRgFQh0ggg1ghIgSgJQg/gjgrghIgLgKQg1g1gmgbIgKgHQgygng2gmIgMgIQg6gohRgTIgqgKQgjgIgLgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCBhtFbhyIAHgCQEMhXDLhGIAMgEQA9gWA3gjIAMgHQAagSA3gpIALgIQArggAfgPIAOgGQAqgSAxgDIAQAAID8AAIATAAQFugCC9BRIAWAKQA8AcA2ArIATARIBWBJIATATQAnApAfAbIAVASQA6AxBHAZIAcAKQA7ATBIAOIAfAGQBRASA1APIAgAKQGyCHCtCzIAaAeQBsCCACC9QABAXgBAVQgEB/gtA5IgGAHQhKB2i1BGQgYALgaAHQhYAZhnACIgMABQi8AcgpAdIgEADQgLAKgJACQgMADgKAjIgEAHQgSAegsAWIgCABQgtAVglAHIgGABIhnAaIhPAXIgcAIQg3AQgnAPQgsAPgmAKQgmAKgYAKQgYAKgUARIgNALQgOAIgRAPQgUAJgEANIgIAHQgPARgHABQgFADgFAOIgBAAQgGAOgKAFQgNAHgTAFQgdAIg8AAIgbAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AC/QwQhYgEglgmIgBAAQgegfgSgQIgIgGQgWgYgpgVIgWgMQhUgriUgjIgygLQh3gYgXgKQg9gSgognIgDgCQhGg6hIhOQgTgUgQgWQgxhBgWgRIgGgGQgogmgugpIgVgTQhBg6gGgMIgTgTQgngihKgVIgRgFQh0ghgzgjIgRgKQg9gkgugfIgLgJQg2gzgogZIgJgHIhphMIgMgIQg5gqhQgUIgrgKQgjgHgKgLIgBgBQgPgPAAgnIAAAAQAAiQBtheIACgCQCBhtFbhxIAHgCQELhXDLhGIAMgEQA9gWA4gjIALgHQAbgSA2gpIALgIQAsggAegPIAOgGQArgTAwgCIAQAAID8AAIATAAQFugCC9BQIAWAKQA8AcA2ArIATAQIBWBKIATASQAnApAfAcIAUASQA7AwBGAaIAcAKQA7ATBJAOIAfAHQBQARA1APIAgAKQGyCHCtCyIAbAeQBsCCADC9IAAArQgDCBgxA0IgGAHQhMBui1BOQgWAMgZAJQhVAehoACIgLABQi8AggpAbIgEACQgLAJgKADQgMADgMAfIgEAHQgUAbgrATIgCABQgtARgmAJIgFAAQgyAOg0APIhNAaIgcAJQg2ATglARQgpAQgmAMQglAKgaALQgYAKgVAQIgMAKQgPAIgRAOQgVAIgCANIgIAGQgQAPgHACQgGACgGANIgBAAQgGAMgKAFQgNAGgTAFQgcAHg9ABIgcgBg");
	var mask_graphics_6 = new cjs.Graphics().p("ADBQuQhZgEglgjIgBAAIgygsIgJgGQgVgWgrgVIgWgMQhTgqiUglIgxgLQh3gbgWgLQg7gUgogpIgCgCQhEg8hLhLQgTgUgRgUQgyg+gYgQIgHgGIhXhOIgVgTQg/g5gHgNIgSgUQgkgjhLgWIgSgFQhzghgygmIgRgLQg6gmgwgdIgLgIQg4gvgpgZIgKgGQg0gjg1goIgMgIQg5gshPgUIgqgKQgjgIgKgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCAhtFbhyIAHgCQELhXDMhFIALgEQA9gWA4gjIALgHQAbgSA2gpIAMgIQArggAfgPIANgHQArgSAwgCIAQgBID8AAIATAAQFtgCC+BQIAVAKQA8AcA3ArIATAQIBWBJIATASQAnAqAfAbIAUASQA7AxBGAaIAcAKQA7ATBIAPIAfAGQBRARA1APIAfAKQGxCHCvCxIAaAeQBtCBAEC9IAAArQgDCDg0AwIgHAGQhMBmi1BWQgVANgYAKQhSAkhoADIgMAAQi7AjgpAZIgEADQgLAIgKACQgNADgNAdIgFAGQgVAZgsAPIgCAAIhSAYIgFABQgyAOgzASIhMAdIgbAJQg0AWgkATQgnASgmANQgkALgbALQgYAKgVAPIgNAKQgPAHgRANQgXAIAAALIgIAGQgQAOgIABQgGACgGALIgBABQgHAKgKAFIggAKQgcAHg+AAIgbAAg");
	var mask_graphics_7 = new cjs.Graphics().p("ADCQsQhagEgkggIgBAAQghgbgTgOIgJgGQgVgUgsgVIgWgMQhTgoiUgoIgxgMQh1gdgWgNQg4gUgogsIgDgDIiPiGQgUgSgRgUQg0g7gZgPIgIgFQgqgigugqIgVgTQg9g5gIgPIgRgVQghgjhNgYIgRgFQhzghgxgpIgQgLQg4gngzgbIgLgIQg4gsgsgZIgKgDQg1gig0gpIgMgJQg4gthOgUIgqgKQgjgJgKgKIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCBhtFbhyIAHgCQELhXDLhGIAMgEQA9gWA3giIAMgHQAagRA3gqIALgIQArggAfgPIANgHQArgSAwgDIAQAAID8AAIATAAQFtgDC9BQIAWAKQA8AcA3AqIATAQIBWBKIATASQAnApAfAcIAUASQA6AxBGAaIAcAKQA7ATBIAPIAfAGQBRARA1APIAfAKQGxCGCvCxIAbAdQBuCCAEC8IAAArQgDCGg2AqIgIAGQhOBei0BeQgUAPgXALQhPAqhoACIgMABQi7AlgpAYIgEACQgMAIgKACQgOACgNAbIgFAGQgYAWgrALIgCAAQgsAKgnAMIgFABQgxAPgyATIhLAgIgaAKQgzAZgiAVQgkAUgnAOQgjALgcALQgYAKgVAPIgNAKQgQAGgRAMQgYAHACALIgJAFQgQANgIAAQgHACgGAKIgCAAQgIAKgKADIggAJQgaAHg/ABIgcAAg");
	var mask_graphics_8 = new cjs.Graphics().p("ADEQpQhbgDgkgdIgBAAIg1gmIgKgFQgVgTgtgVIgXgLQhTgoiTgqIgwgNQh0gfgXgOQg1gVgngvIgDgDQg/g+hRhHQgUgSgTgSQg0g4gcgPIgHgFQgrgfgvgrIgVgTQg7g4gIgRIgRgVQgegkhPgZIgRgFQhzghgugsIgQgMQg3gog0gaIgMgHQg5gogtgYIgLgEQg2gegzgrIgMgJQg3gvhOgUIgqgLQgigJgKgJIgBgBQgPgPAAgnIAAgBQAAiQBshdIACgCQCBhtFbhxIAHgCQEKhXDLhGIAMgEQA9gWA4giIALgHQAagRA3gqIALgIQAsggAegPIAOgHQAqgSAwgDIAQgBID8AAIATAAQFsgCC+BPIAWAKQA8AcA3AqIATAQIBWBKIATARQAnAqAfAbIAUASQA6AxBGAbIAcAKQA6ATBJAPIAeAGQBRARA1APIAgAKQGwCGCwCwIAaAdQBvCBAFC8IAAArQgCCIg6AmIgIAFQhPBVi0BnQgTAQgWAMQhMAwhpACIgLABQi7ApgpAVIgEACQgMAIgKABQgPADgOAYIgGAFQgZATgrAIIgCAAQgsAGgnANIgFABQgxARgyAUIhIAjIgaAMQgyAbgfAXQgjAWgnAPQgiALgdAMQgYAKgVAOIgOAKQgRAFgQALQgaAGAEAKIgJAFQgPAMgKAAQgHABgHAJIgBAAQgJAIgKADIggAIQgaAHg/AAIgcAAg");
	var mask_graphics_9 = new cjs.Graphics().p("ADGQmQhcgCgkgaIgBAAQgjgYgUgMIgKgFQgVgRgugVIgXgKQhTgniSgsIgxgOQhyghgXgPQgygXgogxIgCgDQg9hAhUhEIgogjQg2g1gdgOIgIgFQgsgdgvgrIgVgTQg6g3gIgTIgQgWQgbgkhQgaIgSgFQhygigtgvIgPgMQg1gqg2gYIgMgGQg7glgugWIgLgFQg4gcgygrIgMgKQg2gxhNgUIgqgLQgjgJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCBhtFahxIAHgCQELhXDLhGIALgEQA9gVA4gjIAMgHQAZgRA3gpIAMgJQArgfAfgQIANgGQAqgTAxgDIAPgBID8AAIATAAQFsgCC+BOIAWAKQA8AcA3AqIATAQIBWBKIATARQAnAqAfAcIAUARQA6AyBFAaIAcAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGwCGCwCwIAbAdQBvCAAGC7IAAAsQgCCKg9AhIgJAEQhPBOi1BuQgRASgVANQhJA2hpACIgMABQi5AsgqATIgEACQgMAHgKACQgQACgQAVIgFAEQgcASgrADIgCAAQgrACgoAPIgFABQgvASgyAWIhHAmIgZAMQgxAfgdAYQggAZgoAQQghALgeAMQgXAKgWAOIgOAJQgSAFgQAJQgbAGAGAJIgJAFQgQAKgKAAQgIAAgHAIIgCAAQgJAHgKACIggAHQgZAHhAAAIgOABIgOgBg");
	var mask_graphics_10 = new cjs.Graphics().p("ADHQkQhcgCgkgXIgBAAQglgXgUgKIgKgFQgVgPgwgVIgXgKQhSgmiSguIgxgPQhxgjgWgQQgwgYgng0IgDgDQg6hChXhCIgpghQg3gygfgNIgJgEQgtgbgwgrIgUgUQg4g2gJgVIgPgXQgZglhRgaIgRgGQhygigsgxIgOgNQgzgsg5gVIgMgGQg8gigwgVIgLgEQg5gagygsIgLgKQg1gzhMgUIgqgLQgjgJgJgKIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCBhtFahyIAHgCQEKhWDLhGIAMgEQA9gWA3giIAMgHQAZgRA4gpIALgJQArggAfgPIANgHQAqgTAxgDIAPAAID8AAIASAAQFtgDC+BOIAWAKQA8AcA3AqIATAQIBWBJIASASQAoApAfAcIAUASQA5AxBGAbIAbAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGwCFCwCwIAcAcQBvCAAHC7QABAWgBAWQgCCMhAAcIgJAEQhRBGi0B2QgQATgUAOQhGA8hpADIgMAAQi5AvgqASIgEACQgMAFgLACQgRACgQASIgGAEQgeAPgqAAIgCAAQgsgCgnARIgFABQgvATgxAXIhFApIgZANQgwAhgbAbQgdAbgpAQQggAMggANQgWAJgWAOIgPAIQgSAFgQAIQgdAFAIAJIgJAEQgQAIgLAAQgIAAgIAGIgBAAQgKAGgKACQgQACgQAEQgYAGhCABIgOAAIgOAAg");
	var mask_graphics_11 = new cjs.Graphics().p("ADJQhQhdgBgkgUIgBAAQgmgVgVgJIgKgEQgUgOgygVIgXgKQhTgkiRgxIgwgQQhwglgWgRQgtgZgog3IgCgDQg4hEhag/IgqggQg5gughgMIgIgFQgvgYgwgsIgUgUQg2g1gKgXIgNgYQgXglhTgbIgRgGQhygjgqgzIgOgOQgwgtg7gUIgNgFQg9gegxgUIgMgEQg5gXgyguIgLgKQg0g1hMgUIgqgMQgigJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCAhtFahxIAHgCQELhXDLhFIALgEQA9gWA4giIALgHQAagRA3gpIAMgJQArggAegPIANgHQArgTAwgDIAPgBID8AAIASAAQFsgCC/BNIAVAKQA9AcA3AqIATAPIBWBKIASARQAoApAfAdIATARQA6AyBFAbIAcAKQA6AUBJAPIAeAGQBQARA2APIAfAJQGvCFCyCvIAbAcQBwCAAIC6QABAWgBAWQgBCOhEAXIgJAEQhSA9i0B/QgPAUgTAQQhDBBhqADIgLAAQi5AygqAQIgEACQgMAFgLACQgSABgRAQIgHADQgfANgqgEIgCgBQgsgFgoASIgFABQguAUgwAaIhEArIgYAPQguAjgZAdQgcAdgoARIhBAaQgWAJgXANIgPAIQgSAEgQAHQgfAFAKAHIgJAEQgPAHgNgBQgIAAgIAFIgCAAQgKAEgKACQgRABgPAEQgYAFhCABIgOABIgOgBg");
	var mask_graphics_12 = new cjs.Graphics().p("ABJQNIgBAAQgngTgWgJIgKgDQgUgMgzgVIgYgKQhSgjiRgzIgwgRQhugmgWgUQgrgZgng6IgCgEQg3hEhbg9IgsgeQg6gsgjgLIgJgEQgwgWgwgsIgUgUQg1g1gKgZQgHgNgFgLQgUgmhUgdIgSgFQhxgjgpg3IgNgOQgugug+gSIgMgFQg/gbgzgSIgMgEQg6gVgxgvIgLgLQgzg2hLgUIgqgMQgjgKgIgJIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCAhtFahxIAHgCQEKhXDLhGIALgEQA9gVA4giIAMgHQAZgQA3gqIAMgJQArggAegPIANgHQArgTAwgEIAQAAID7AAIASAAQFsgDC+BNIAWAKQA9AbA3AqIATAQIBWBKIASARQAoApAfAcIATASQA6AyBFAbIAbAKQA7AUBIAPIAfAGQBPARA3APIAeAJQGvCECyCvIAcAcQBxB/AIC6QABAWgBAWQgBCQhGATIgLADQhTA1i0CHQgOAVgRARQhABHhqADIgMABQi4A1gqAOIgEABQgMAFgMABQgSACgTANIgGADQgiAJgqgHIgCgBQgrgJgoAUIgFABQguAVgvAbIhDAuIgYAQQgsAmgXAfQgZAfgpASIhBAaQgWAJgXANIgPAIQgTADgQAGQggAEAMAHIgJADQgQAGgNgCQgJAAgIAEIgCgBQgLADgLABQgQABgQADQgWAGhDABIgdAAQhegBgjgRg");
	var mask_graphics_13 = new cjs.Graphics().p("ABKQOIgBAAQgpgRgVgIIgLgDQgUgKg1gVIgXgJQhSgiiRg2IgvgRQhugpgWgVQgngbgng8IgDgEQg0hGheg6IgtgdQg8gogkgLIgKgDQgwgUgxgtIgUgUQgzg0gLgbIgLgZQgRgmhWgeIgRgFQhxgkgog5IgMgPQgtgwg/gQIgNgEQhAgXg0gRIgNgEQg7gTgwgwIgLgLQgzg4hKgUIgpgMQgjgLgIgIIgBgBQgPgPAAgnIAAgBQAAiPBshdIACgCQCAhtFahyIAHgCQEKhWDKhGIAMgEQA9gVA3giIAMgHQAZgQA4gqIALgJQArggAfgQIANgGQAqgTAwgEIAQgBID7AAIASAAQFrgDC/BNIAWAKQA8AbA4AqIATAPIBWBKIASARQAoApAfAdIATARQA5AyBFAcIAcAKQA6AUBIAPIAfAGQBQARA2APIAfAJQGuCECzCuIAbAcQByB/AJC5QABAWgBAWQgBCShJAOIgLADQhUAti0CPQgNAWgQATQg9BMhqAEIgMAAIjiBEIgEACQgMAEgMABQgTABgUALIgHACQgjAHgqgLIgCgBQgrgNgpAVIgFACQgtAWguAcIhBAxIgYARQgrApgVAhQgXAhgpATIhBAbQgWAJgXAMIgQAIQgUACgPAFQgiADAOAGIgJADQgQAFgOgCQgJgBgJACIgCAAIgWACQgRAAgPADQgWAFhEABIgcABQhfgBgjgOg");
	var mask_graphics_14 = new cjs.Graphics().p("ABLQPIgCAAQgpgQgWgGIgKgDIhMgcIgXgKIjjhZIgugSQhsgrgWgWQgkgcgog/IgCgEQgyhIhhg3IgvgbQg8glgngLIgJgDQgygQgxgvIgVgUQgxgzgKgdQgIgNgDgMQgOgnhYgfIgSgFQhwgkglg8IgNgQQgqgxhCgOIgNgDQhBgVg2gPIgNgEQg8gTgwgvIgKgLQgyg6hKgVIgpgMQgigKgJgJIgBgBQgPgPAAgnQAAiQBshdIACgCQCBhtFZhxIAHgCQEKhXDLhFIAKgEQA+gVA3giIAMgHQAZgQA3gqIANgJQArggAegQIAMgGQArgUAwgDIAQgBID7AAIASAAQFqgDDABMIAVAKQA9AbA4AqIASAPIBWBKIATAQQAoAqAeAcIAUASQA5AyBFAcIAbAKQA6AUBIAPIAfAHQBQAQA2APIAfAJQGuCECzCtIAcAcQByB+AJC6IABArQgBCUhMAKIgLACQhWAli0CXQgLAYgPATQg6BShrAEIgLAAQi5A7gpALIgEABQgMADgNABQgUABgUAIIgIACQglAFgqgPIgCgBQgqgRgqAXIgEABQgtAXguAfIg/AzIgXASQgqAsgTAjQgUAigqAVIhBAcQgWAJgXALIgQAHQgVACgPAEQgkACARAGIgKACQgQADgPgCQgJgBgKABIgCAAIgXAAQgRgBgOADQgWAFhEABIgdAAQhgAAgigLg");
	var mask_graphics_15 = new cjs.Graphics().p("ABMQQIgCAAQgrgOgWgGIgKgCIhMgaIgZgKIjihaIgugTQhrgtgVgXQgigdgnhCIgDgEQgvhJhlg2IgvgZQg9gigpgKIgKgCQgzgOgxgvIgUgVQgwgygMgfQgGgOgDgMQgLgnhaggIgRgGQhwgkgkg/IgMgQQgpgyhEgMIgMgDIh6gfIgNgDQg+gSgugwIgKgLQgyg9hJgUIgpgMQgigLgJgJIgBgBQgPgPAAgnQAAiPBshdIACgCQCAhtFahyIAHgCQEJhWDLhFIALgEQA9gWA4ghIALgIQAZgPA4gqIAMgJQArggAegQIANgGQAqgUAwgEIAQgBID7AAIASAAQFqgDC/BMIAWAKQA9AbA4ApIATAQIBVBJIATARQAoApAeAdIATARQA6AzBEAcIAbAKQA7AUBIAPIAeAHQBQAQA2APIAfAJQGtCDC0CtIAcAbQB0B/AJC5IABAsQgBCWhPAEIgMACQhWAcizCgQgLAZgOAVQg3BYhrADIgMAAQi3A/gqAJIgEAAQgNADgNABQgUABgVAFIgIABQgoACgpgSIgCgBQgrgVgqAYIgDACQgsAYguAgIg+A2IgWAUQgoAugSAlQgSAkgqAWQgcANglAPIguAUIgQAHQgWABgPADQglABATAGIgKABQgQACgPgDIgUgBIgDgBIgXgCQgSgBgOADQgUAEhFABIgdABIgMAAQhXAAgggIg");
	var mask_graphics_16 = new cjs.Graphics().p("AGWQVIgUgEIgDAAIgYgEQgSgDgOADQgTAEhHACIgcABQhiABgigGIgCAAQgsgMgXgFIgKgCQgVgFg5gTIgYgJQhRgfiRg9IgtgUQhqgvgVgYQgggegnhFIgCgEQguhLhmgzIgxgYQg/gegrgJIgKgCQg0gMgxgwIgVgUQgtgygNghQgFgOgDgMQgJgohaghIgSgGQhwglgihBIgLgRQgng0hFgKIgOgCIh9gaIgNgDQg/gQgtgxIgKgMQgxg+hJgUIgogMQgjgMgIgIIgBgBQgPgPAAgnQABiPBrhdIACgCQCAhtFahyIAHgCQEIhWDLhGIAMgEQA8gVA5giIALgHQAYgPA4gqIAMgJQArggAfgQIAMgGQAqgUAwgEIAQgBID7AAIASAAQFqgEC/BMIAWAJQA9AcA3ApIAUAPIBVBKIATAQQAnApAfAdIATASQA5AyBEAdIAbAKQA7AUBIAPIAeAHQBPAQA4APIAeAJQGtCDC1CsIAbAbQB1B+AKC5QABAVAAAXQAACYhTgBIgMABQhYAVizCnQgKAbgMAWQg0BehsAEIgLAAQi3BBgqAHIgEABIgaACIgsAEIgIAAQgqAAgpgWIgCgCQgqgYgqAaIgEACQgrAZgtAhIg8A5IgXAVQgmAxgQAnQgPAmgrAXQgbANgmAQIgtATIgRAHIgmACQgmABAVAEIgKABIgIAAQgNAAgMgCg");
	var mask_graphics_17 = new cjs.Graphics().p("AG6QYQgPAAgRgEIgVgFIgDgBIgZgFQgUgEgNADQgSAEhHABIgdABQhjACghgDIgCAAQgtgKgXgEIgMgBQgUgEg6gTIgYgJQhSgeiPg/IgtgUQhpgxgWgaQgcgggnhHIgCgEQgshNhpgwIgygWQhBgcgrgIIgLgCQg1gJgzgwIgUgVQgrgxgNgiQgGgPgBgNQgHgohcgiIgSgGQhuglgihEIgKgSQglg1hIgIIgOgCQhEgKg7gMIgNgCQhBgNgtgzIgKgMQgvhAhIgUIgogNQgjgMgIgIIgBgBQgPgPAAgnQABiPBrhdIACgCQCAhtFZhxIAHgCQEJhWDLhGIALgEQA8gVA5giIALgHQAYgPA4gqIAMgJQArggAegQIAOgHQApgTAxgFIAPgBID7AAIASAAQFpgDDABLIAWAJQA8AbA4AqIAUAPIBVBKIATAQQAnApAfAdIATARQA5AzBEAdIAbAKQA6AUBIAQIAfAGQBPAQA3APIAeAJQGtCCC1CsIAcAbQB1B9ALC5QABAVAAAXQAACahVgFIgOAAQhYANizCvQgIAdgMAWQgxBkhsAEIgLAAQi3BEgqAGIgEAAQgNACgNAAIguABIgJgBQgrgCgpgaIgBgCQgrgcgrAbIgEACQgpAbguAiIg6A9IgWAVQglA0gNApQgOAogqAYQgbAOgnAQIguASIgRAHIgmAAQgnAAAWAEIgLAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AGEQLQglgNgVAEQgUAEhjACIiEADQg+gMgWgBQgYgBhQgcQhRgdiPhCQiQhCgaghQgaghgphOQgohOhtguQhtguhBgIQhBgIg7hEQg8hFgDgsQgDgshvgmQhvglgghHQghhIhVgHQhXgIhIgMQhHgNgwg/QgvhBhHgVQhGgVgMgMQgQgPAAgoQABiQBtheQCBhuFfhyQEQhZDOhHQBDgXA9gmQAbgRBCgyQAzgmAjgQQAwgYA5gCIENAAQF+gDDABUQBIAfBBA0QBFA8AjAeQA0A2AlAhQBEA9BUAdQBGAZBaASQBmAUA+ATQHOCNCxC7QCDCMgBDVQAACdhYgKQhZgKjCDGQgnCliQgCQi2BHgqAEQgqADgugFQgtgFgqggQgqgfgrAcQgrAcgvAmIhOBWQgkA2gLArQgLArgsAYQgrAYhVAfQhZgDAiAEQgggBgmgNg");
	var mask_graphics_19 = new cjs.Graphics().p("AGZQUIgVgFIgCgBQgOgDgLgCQgUgDgNADQgSADhIACIgdABQhiABghgDIgCAAQgtgKgXgEIgLgCQgVgDg6gUIgYgJQhSgdiPhAIgtgUQhpgwgVgaQgdgfgohIIgCgDQgrhNhqgwIgxgXQhBgcgrgIIgLgCQg1gKgygwIgUgUQgsgygNgiQgFgOgCgNQgHgohcgiIgRgGQhwglghhEQgFgJgFgIQglg1hIgJIgOgBQhEgLg7gMIgNgCQhAgOgugyIgKgMQgvhAhIgUIgogNQgjgLgIgJIgBgBQgPgPAAgnQABiPBrhdIACgCQCAhtFZhxIAHgCQEJhWDLhGIALgEQA9gVA4giIALgHQAYgPA5gqIALgJQAsggAegQIANgHQApgTAxgFIAPgBID7AAIASAAQFqgDC/BLIAWAJQA9AcA3ApIAUAPIBVBKIATAQQAnApAfAdIATARQA5AzBEAdIAbAKQA6AUBJAQIAeAGQBPAQA4APIAdAJQGtCCC1CsIAcAbQB1B+ALC4QABAWAAAWQAACahVgFIgNABQhZAOiyCuQgJAcgLAXQgxBjhtAEIgLAAQi3BEgqAFIgEAAQgNACgNAAIguACIgJgBQgqgCgpgZIgCgCQgrgbgqAaIgEACQgrAbgsAiIg7A8IgWAVQglA0gNAoQgOApgsAXQgaAOgnAQIguATIgRAGIgmAAQgnABAWADIgKABQgQAAgRgEg");
	var mask_graphics_20 = new cjs.Graphics().p("AGWQVIgVgDIgDAAIgXgEQgTgCgOADQgTAEhHACIgcAAQhhABgjgGIgBAAQgsgNgWgFIgLgBQgVgGg4gUIgZgJQhRgfiQg8IgugUQhqgugVgYQgggegnhEIgCgEQgvhLhmgzIgwgYQg/gggqgJIgKgCQg0gNgxgvIgUgUQgvgzgMgfQgGgPgDgMQgJgohaggIgSgGQhwglgihBIgLgQQgng0hGgKIgOgDIh8gbIgMgDQg/gQgugxIgKgMQgxg9hJgUIgogNQgjgLgIgJIgBgBQgPgPAAgnQAAiPBshdIACgCQCAhtFahxIAHgCQEJhXDLhFIALgEQA8gVA5giIALgHQAYgQA4gqIAMgJQArgfAfgRIAMgGQAqgUAwgEIAQgBID8AAIASAAQFpgDC/BMIAXAJQA8AbA4AqIATAPQA1AuAgAcIATAQQAnApAfAdIATASQA6AyBEAdIAbAJQA6AVBJAPIAeAHQBPAQA3AOIAeAKQGuCCC0CtIAcAbQBzB+ALC5QABAVAAAXQAACXhSABIgMABQhYAXizClQgJAbgNAVQg1BdhsADIgLABQi4BAgpAIIgEAAQgNADgNAAQgWABgVADIgJABQgoAAgpgVIgDgCQgqgXgqAaIgEABQgrAZgtAhIg9A5IgWAUQgnAwgRAnQgQAmgqAWQgcANglAQIguATIgQAHIgmACQgmACAVAEIgLABIgKAAQgLAAgKgCg");
	var mask_graphics_21 = new cjs.Graphics().p("ABLQQIgBAAQgrgPgWgGIgJgCIhNgcIgYgJIjihaIgugTQhrgsgWgWQgjgdgnhBIgDgEQgwhJhjg2IgvgaQg+gjgngKIgKgCQgzgQgxguIgUgVQgwgzgMgdQgGgOgEgMQgMgnhYggIgSgFQhwglglg9IgMgQQgpgyhDgNIgNgDIh5ghIgNgDQg9gSgvgwIgKgLQgxg8hKgUIgpgMQgigLgJgJIgBgBQgPgPAAgnQAAiPBshdIACgCQCBhtFZhyIAHgCQEKhWDKhFIALgEQA+gWA3giIALgHQAZgPA4gqIAMgJQArggAfgQIAMgGQArgUAvgEIAQgBID8AAIASAAQFqgDC/BMIAWAKQA8AbA4AqIATAPIBVBKIAUAQQAmApAfAdIAUASQA5AyBEAcIAcAKQA6AUBIAPIAfAHQBQAQA2APIAfAJQGtCDC0CtIAbAcQB0B+AJC6IABArQgBCWhOAGIgMACQhVAgi0CcQgLAZgOAUQg4BWhrADIgMAAQi3A9gqAKIgFABQgMADgNABQgUABgVAGIgIABQgnADgpgRIgBgBQgrgTgqAYIgEABQgsAYguAfIg/A2IgWASQgpAugSAkQgTAkgqAVIhBAcIgtAUIgRAHQgUABgQAEQgkABARAGIgJABQgQADgPgDIgUgBIgCAAIgYgBQgRgCgOADQgUAFhGABIgdABIgJAAQhZAAghgJg");
	var mask_graphics_22 = new cjs.Graphics().p("ABKQPIgBAAQgpgRgWgHIgKgDIhKgdIgXgKQhTghiQg3IgvgSQhtgqgWgVQgmgbgng+IgDgEQgzhHhfg5IgugcQg8gmglgLIgKgDQgxgSgxguIgUgUQgyg0gLgcQgIgNgDgMQgPgmhYgeIgRgGQhxgkgmg6IgNgQQgrgwhBgPIgMgEQhBgWg1gQIgNgDQg7gVgxguIgKgLQgyg6hLgUIgogMQgjgKgIgJIgBgBQgPgPgBgnIAAAAQAAiQBshdIACgCQCAhtFahxIAIgCQEJhXDLhFIALgEQA9gWA4ghIALgIQAagPA3gqIAMgJQAqggAfgQIANgGQArgUAvgDIAQgBID8AAIASAAQFrgDC/BNIAVAJQA8AbA4AqIATAPIBWBKIATARQAnApAfAdIAUARQA5AyBFAcIAbAKQA6AUBIAPIAfAHQBQAQA2APIAfAJQGuCECzCuQAOANANAOQBzB/AIC6IABAsQgBCThLALIgLADQhVApizCSQgNAYgPATQg8BPhqAEIgMAAQi4A5gqAMIgDABQgNAEgMABQgUABgTAJIgIACQglAGgpgNIgCgBQgrgOgpAVIgFACQgsAWgvAeIhAAyIgXASQgrAqgTAiQgWAhgpAUIhCAcQgVAJgYALIgPAIQgVACgPAEQgjADAPAGIgJACQgQAEgOgCQgJgBgKACIgCAAIgXABQgQgBgPADQgWAFhEABIgcABQhgAAgjgNg");
	var mask_graphics_23 = new cjs.Graphics().p("ABJQNIgBAAIg9gaIgLgEQgUgLgzgUIgYgKQhSgjiRg0IgvgRQhvgogVgTQgqgagng7IgCgEQg2hFhdg8IgsgdQg6grgkgLIgJgDQgwgVgwgtIgVgUQgzg1gLgZQgHgNgFgMQgSgmhVgdIgSgFQhxgkgog3IgNgPQgugug+gSIgNgEQg/gagzgRIgMgEQg7gVgxgvIgKgLQg0g3hLgUIgpgMQgjgKgIgJIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCAhtFahxIAHgCQEKhXDLhFIALgEQA9gWA4giIALgHQAZgQA4gqIAMgJQArgfAegQIANgHQAqgTAxgEIAPAAID8AAIASAAQFrgDC/BNIAWAKQA8AbA3AqIAUAPQA1AvAgAbIATARQAnApAfAdIAUARQA5AyBFAcIAcAKQA6AUBIAPIAfAGQBQARA2APIAfAJQGuCECzCuIAbAcQBxB/AJC7QABAVgBAWQgBCRhHARIgLADQhTAyi0CKQgOAWgQARQg/BJhrADIgLABQi5A2gqANIgDACQgNAEgMABQgSACgTAMIgHACQgiAJgqgJIgCAAQgrgLgpAUIgEACQguAVgvAcIhCAvIgYAQQgsAngWAgQgYAfgpATIhBAbQgWAJgXAMIgPAIQgUADgQAFQggAEANAHIgKACQgQAGgNgCQgJAAgIADIgCAAQgLACgLABQgRAAgPAEQgWAFhEABIgcAAQhegBgkgQg");
	var mask_graphics_24 = new cjs.Graphics().p("ADJQhQhdgBgkgUIgBAAQgmgUgVgJIgLgEQgUgNgygVIgXgKQhSgkiSgyIgvgPQhwgmgWgSQgsgZgog4IgCgDQg4hDhag/IgrgfQg5gughgMIgJgEQgvgYgwgsIgUgUQg2g1gKgYQgIgMgFgLQgVgmhUgcIgRgFQhygjgqg0IgNgOQgwgtg8gUIgMgFQg+gdgygTIgLgFQg6gWgxguIgLgLQg1g1hLgUIgqgLQgigKgJgJIgBgBQgPgPAAgnIAAgBQAAiPBshdIACgCQCAhtFahyIAHgCQELhXDKhFIAMgEQA9gWA4giIALgHQAZgQA4gqIALgJQArgfAfgQIANgHQAqgTAxgDIAPgBID8AAIASAAQFsgCC+BNIAWAKQA8AbA4AqIATAQIBVBKIATARQAoApAeAcIAUASQA6AyBFAbIAbAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGvCFCyCuIAbAdQBwB/AIC7QABAWgBAWQgBCOhEAWIgKAEIkGC7QgPAVgSAQQhDBDhqADIgLAAQi5AzgqAPIgDACQgNAFgLABQgSACgSAPIgGADQggAMgqgFIgCAAQgsgGgoASIgEABQgvAUgwAaIhDAsIgYAPQguAkgZAeQgbAdgoASIhAAZQgXAJgWANIgPAJQgTADgQAHQgfAEALAIIgKADQgPAHgNgBQgIAAgIAFIgCgBQgKAEgLACQgQABgQAEQgXAFhDABIgcAAg");
	var mask_graphics_25 = new cjs.Graphics().p("ADHQkQhcgCgkgXIgBAAIg5ghIgKgEQgVgPgwgVIgXgKQhTgliSgvIgwgPQhxgjgWgRQgvgYgog0IgCgEQg7hBhWhCIgqghQg3gxgggNIgIgEQgtgbgwgrIgVgUQg3g2gJgWIgPgWQgYglhSgbIgRgFQhygjgsgxIgOgNQgygsg6gVIgMgGQg8ghgwgVIgLgFQg5gZgygsIgLgKQg1g0hNgTIgpgMQgjgJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCBhtFahxIAHgCQEKhXDLhFIAMgEQA9gWA3giIAMgIQAZgQA4gqIALgIQArggAfgQIANgGQAqgTAxgDIAPgBID8AAIASAAQFsgCC/BOIAVAJQA9AcA3AqIATAQIBWBKIASARQAoApAfAcIATASQA6AyBGAbIAbAJQA7AUBIAPIAfAGQBQARA2APIAfAKQGvCFCxCvQAPAOAMAPQBwCAAHC7QABAVgBAWQgCCMhAAcIgJAEQhRBEi1B4QgQATgTAPQhGA8hpACIgMABQi5AvgqASIgEACQgMAFgLACQgRACgQASIgGAEQgeAOgqAAIgCgBQgsgCgoARIgFABQgvATgwAYIhFApIgZAOQgvAhgbAbQgeAbgoARQggALggANQgXAKgWANIgOAJQgSAEgRAIQgdAFAJAJIgJADQgQAJgMgBQgIAAgHAHIgCAAQgKAFgKACQgQACgQAEQgYAGhCABIgcAAg");
	var mask_graphics_26 = new cjs.Graphics().p("ADGQmQhcgCgkgaIgBAAQgjgYgUgMIgKgFQgVgRgugVIgXgKQhTgniSgsIgxgOQhyghgXgPQgygXgogxIgCgDQg9hAhUhEIgogjQg2g1gdgOIgIgFQgsgdgvgrIgVgTQg6g3gIgTIgQgWQgbgkhQgaIgSgFQhygigtgvIgPgMQg1gqg2gYIgMgGQg7glgugWIgLgFQg4gcgygrIgMgKQg2gxhNgUIgqgLQgjgJgJgJIgBgBQgPgPAAgnIAAgBQAAiPBsheIACgCQCBhtFahxIAHgCQELhXDLhGIALgEQA9gVA4gjIAMgHQAZgRA3gpIAMgJQArgfAfgQIANgGQAqgTAxgDIAPgBID8AAIATAAQFsgCC+BOIAWAKQA8AcA3AqIATAQIBWBKIATARQAnAqAfAcIAUARQA6AyBFAaIAcAKQA7AUBIAPIAfAGQBQARA2APIAfAJQGwCGCwCwIAbAdQBvCAAGC7IAAAsQgCCKg9AhIgJAEQhPBOi1BuQgRASgVANQhJA2hpACIgMABQi5AsgqATIgEACQgMAHgKACQgQACgQAVIgFAEQgcASgrADIgCAAQgrACgoAPIgFABQgvASgyAWIhHAmIgZAMQgxAfgdAYQggAZgoAQQghALgeAMQgXAKgWAOIgOAJQgSAFgQAJQgbAGAGAJIgJAFQgQAKgKAAQgIAAgHAIIgCAAQgJAHgKACIggAHQgZAHhAAAIgOABIgOgBg");
	var mask_graphics_27 = new cjs.Graphics().p("ADEQpQhbgDgkgdIgBAAIg1gnIgKgFQgVgTgtgVIgWgLQhTgoiTgqIgxgNQh0gegWgOQg2gVgogvIgCgCQhAg/hQhHQgUgSgTgTQg0g4gbgOIgIgFQgrgggvgrIgUgTQg8g4gIgRIgRgVQgfgjhNgZIgSgFQhzgigvgrIgPgMQg3gog0gaIgMgHQg5gpgtgYIgLgDQg2gfgzgqIgMgKQg3gvhNgUIgrgKQgigJgKgKIgBgBQgPgPAAgnIAAAAQAAiQBshdIACgCQCBhtFbhyIAHgCQEKhXDLhFIAMgEQA9gWA4gjIALgHQAagRA3gpIALgJQAsggAegPIAOgGQAqgTAwgDIAQAAID8AAIATAAQFtgDC9BPIAWAKQA8AcA3ArIATAQIBWBJIATASQAnApAfAcIAUASQA6AxBGAaIAcAKQA7ATBIAPIAfAHQBQAQA2AQIAfAJQGwCGCwCxIAbAdQBuCBAFC8IAAArQgCCHg6AnIgIAFQhPBXi0BlQgTAQgVAMQhNAvhpADIgLAAQi7AogpAWIgEACQgMAIgKACQgPACgOAYIgGAFQgZAUgrAIIgCAAQgsAHgnANIgFABQgwAQgyAUIhJAjIgaALQgyAcggAWQgiAWgoAPQgiALgdAMQgXAJgWAPIgOAJQgQAGgQALQgaAGADAKIgIAGQgQALgJAAQgHABgHAJIgBAAQgJAJgKADIggAIQgaAHg/AAIgOAAIgOAAg");
	var mask_graphics_28 = new cjs.Graphics().p("ADCQsQhagEglghIAAAAQghgbgSgOIgJgGQgWgVgrgVIgXgMQhTgpiTgmIgygNQh1gcgWgMQg5gUgogrIgCgDQhCg9hNhJQgUgTgSgUQgzg8gZgPIgHgGQgqgigugqIgVgTQg+g5gHgPIgSgUQgigjhMgXIgRgFQhzgigxgoIgQgLQg5gngygbIgLgIQg4gtgrgYIgLgFQg0ghg1gpIgLgJQg4gthPgUIgqgKQgjgJgKgKIgBgBQgPgPAAgnIAAAAQAAiQBthdIACgCQCAhtFbhyIAHgCQELhXDLhGIAMgEQA9gWA3giIAMgHQAagSA3gpIALgIQAsggAegPIAOgHQAqgSAwgDIAQAAID9AAIASAAQFtgCC+BPIAWAKQA8AcA2ArIATAQIBWBJIATASQAnApAfAcIAUASQA7AxBGAaIAcAKQA7ATBIAPIAfAGQBQARA2APIAfAKQGxCGCuCyIAbAdQBuCBAEC8IAAAsQgDCFg2ArIgHAGQhOBgi0BcQgUAPgXAKQhQAphoACIgMABQi7AlgpAYIgEACQgMAIgKACQgOADgNAbIgFAGQgXAWgrAMIgCABQgsAKgnAMIgFABQgxAPgzASIhKAgIgbAKQgzAYgiAUQglAUgnAOQgkAKgcAMQgXAKgVAPIgOAKQgPAGgRAMQgYAHABALIgIAGQgQANgIAAQgHACgGAKIgBABQgIAJgKAEIggAKQgbAGg+ABIgcAAg");
	var mask_graphics_29 = new cjs.Graphics().p("ADAQvQhZgEglglIAAAAQgfgdgTgPIgIgGQgWgXgqgWIgWgLQhTgriUgkIgygLQh2gagXgLQg8gTgogoIgCgCQhFg7hKhNQgTgTgRgVQgxg/gXgRIgHgFQgogmgvgpIgUgTQhAg5gHgNIgTgUQglgihKgWIgRgFQh0ghgyglIgRgLIhrhCIgLgJQg3gwgpgZIgKgGQgzgkg1goIgMgIQg5grhPgUIgrgKQgjgIgKgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCBhtFbhyIAHgCQELhXDLhFIAMgEQA9gXA3giIAMgHQAagSA3gpIALgIQArggAfgPIANgHQArgSAwgCIAQgBID9AAIASAAQFugCC9BQIAWAKQA8AcA3ArIASAQIBWBKIATASQAoApAeAcIAVASQA6AwBGAaIAcAKQA7ATBJAPIAfAGQBQARA1APIAgAKQGxCHCuCyIAbAdQBtCCADC9IAAArQgDCDgzAxIgGAGQhNBpi0BTQgWANgYAJQhUAihnADIgMAAQi7AigpAaIgEACQgMAJgJACQgNADgMAeIgFAHQgVAZgrAQIgCABQgtAPgmAKIgFAAQgyAOgzARIhNAcIgbAJQg1AVgkASQgoASgmAMQglAKgaALQgYAKgVAQIgNAKQgOAIgRAMQgXAJgBALIgIAHQgPAOgIABQgGACgGAMIgBAAQgHALgKAFIggAKQgcAIg9AAIgcAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AC+QxQhXgEgmgoIAAAAIgwgwIgIgGQgWgZgogWIgWgMQhUgriUghQgZgGgZgFQh4gYgXgJQg/gRgnglIgDgDQhHg5hHhPQgSgVgQgWQgxhCgVgRIgGgHQgngogugoIgVgTQhBg6gGgLIgUgTQgpghhIgVIgSgFQh0ghgzghIgSgLQg+gjgtggIgKgJQg2g0gngbIgKgGQgygmg2gmIgMgJQg6gphQgTIgrgKQgigIgLgKIgBgBQgPgPAAgnIAAgBQAAiQBthdIACgCQCBhtFbhyIAHgCQELhXDMhGIALgEQA9gWA4giIALgIQAbgRA2gpIAMgJQArggAfgPIANgGQArgSAwgCIAQgBID9AAIASAAQFugCC9BRIAWAKQA8AcA3ArIATAQIBWBKIASASQAoApAfAcIAUASQA7AwBGAaIAcAJQA7ATBJAPIAfAGQBQARA1AQIAgAKQGyCHCtCzQAOAOANAPQBrCCADC9IAAAsQgDCAgvA2IgHAIQhLByi0BJQgXAMgaAIQhXAbhnADIgMAAQi7AegqAcIgDADQgMAJgJADQgMADgLAhIgEAHQgTAcgsAUIgCABQgsAUgmAIIgFAAIhnAcIhOAZIgcAIQg2ASgnAPQgqAQgmALQglAKgaALQgYAKgUAQIgNAKQgOAJgRANQgUAKgEAMIgHAHQgQAQgHABQgGACgFAOIgBABQgGAMgKAGQgNAGgTAFQgdAHg8ABIgcgBg");
	var mask_graphics_31 = new cjs.Graphics().p("AC9Q0QhXgFgmgrIgBAAIgtgzIgIgHQgWgagngWIgVgMQhUgtiUgfIgzgJQh6gWgWgIQhDgQgngiIgDgCQhKg3hEhTQgRgVgPgXQgvhGgTgSIgGgGQgmgrgugoIgUgSQhEg7gFgJIgVgSQgsghhGgUIgSgFQh0ggg2gfIgSgJQhAgigqgiIgLgKQg0g4gmgcIgJgHQgxgog2glIgNgIQg7gnhQgTIgrgKQgjgHgLgKIgBgBQgPgPAAgnIAAgBQAAiQBtheIACgCQCBhtFbhxIAHgCQEMhYDLhFIAMgEQA9gXA4giIALgIQAbgSA2gpIALgIQAsggAegPIAOgGQArgSAwgCIAQAAID9AAIASAAQFvgCC9BRIAWAKQA7AcA3ArIATARIBWBJIASATQAoApAfAbIAUASQA7AxBHAZIAcAJQA7ATBJAPIAeAGQBRARA1AQIAgAKQGyCICtCzQAOAOAMAQQBrCCACC+QABAWgBAVQgEB+grA8IgGAHQhKB7i1BBQgYAKgaAHQhbAVhnACIgLABQi9AagpAeIgDADQgMAKgJADQgLADgKAkIgDAIQgRAfgsAYIgCABQgtAYglAGIgFABIhpAYIhPAWIgdAHQg4APgoANIhTAYQgmAJgYAKQgZAKgTARIgNALIgeAYQgTAKgGANIgHAIQgQARgGACQgFACgFAQIAAAAQgGAOgKAGQgMAHgUAGQgeAIg7AAIgbgBg");
	var mask_graphics_32 = new cjs.Graphics().p("AC7Q3QhXgGglguIgBAAQgagjgRgTIgIgHQgXgdgkgWIgVgNQhUguiWgcIgzgIQh6gTgYgHQhEgPgpgfIgCgCQhNg1hAhVQgRgWgOgYQguhKgQgTIgHgHQgkgtgtgnIgVgSQhFg8gGgHIgVgSQgvgghFgTIgSgEQh0ggg4gbIgSgJQhDgggoglIgKgKQgyg8gkgdIgJgHQgwgrg3gkIgNgHQg7glhSgTIgrgKQgjgHgLgKIgBgBQgQgPAAgnIAAgBQABiRBthdIACgCQCBhtFbhxIAHgCQENhYDLhGIAMgEQA8gWA4gjIALgHQAbgSA2gpIALgIQAtggAegPIAOgGQAqgSAxgCIAQAAID9AAIASAAQFwgCC8BRIAWAKQA8AdA2ArIASARIBXBJIASATQAoApAfAcIAUASQA7AvBHAaIAdAJQA7ATBIAOIAfAHQBRARA1AQIAfAKQGzCICsCzIAaAeQBrCEABC9IgBAsQgEB7goBBIgEAJQhJCEi1A3QgaAJgbAFQheAPhmACIgMABQi9AWgpAgIgDAEQgMALgIADQgKADgKAnIgDAIQgOAigsAdIgDABQgtAcgkAFIgFAAIhqAVIhSATIgcAFQg6AMgrALIhVAUQgnAKgYAJQgYAKgTASIgMALQgMAKgRAQQgSALgIAOIgIAIQgPATgFACQgFADgEARIAAAAQgGAQgJAHQgMAHgUAGQgfAIg6ABIgbgBg");
	var mask_graphics_33 = new cjs.Graphics().p("AC5Q5QhVgGgngyQgagkgQgUIgHgIQgXgfgigWIgWgNQhUgviVgZIg0gIQh9gRgWgFQhJgOgngbIgEgDQhOgzg9hYQgRgXgOgZQgrhNgPgTIgGgIQgigwgugmIgVgTQhHg8gEgFIgYgRQgxgfhDgSIgSgFQh1geg4gZIgUgIQhEgfgmgmIgKgLQgxhAgigfIgJgHQgugtg5giIgMgIQg+gjhRgTIgsgJQgjgGgLgLIgBgBQgQgPAAgnIAAgBQABiRBthdIACgCQCChtFbhyIAHgCQEMhXDMhGIALgEQA+gWA3gjIALgIQAbgSA2gpIALgIQAsggAfgOIANgHQArgRAxgCIAQAAID9AAIASAAQFwgCC8BSIAWAKQA8AdA2ArIATARQA3AwAfAZIASATQAoAqAfAbIAUASQA8AvBHAZIAcAKQA8ASBIAPIAfAGQBRARA1AQIAfAKQG0CJCrC0QAOAPANAPQBoCEABC+IgBAsQgDB4glBHIgFAJQhHCNi2AuQgaAHgdAFQhiAIhlABIgMABQi+AUgoAiIgEAEQgLALgJADQgIADgIArIgDAJQgMAlgtAgIgBACQguAfgkAEIgGAAIhrASIhTAPIgdAFQg8AJgtAIQgyAJglAIQgoAJgWAJQgZALgSASIgMALIgdAcQgQAMgKAPIgHAIQgQAVgEADQgFADgDASIAAABQgFARgJAHQgMAJgUAFQggAJg5AAIgbgBg");
	var mask_graphics_34 = new cjs.Graphics().p("AA8QAQgYgmgQgVQgZgmgmgaQhkhDjPgYQh/gOgWgEQhMgMgogZQhng/hEiBQgqhRgNgUQgjg4gwgoIhihSQg9grhSgVQiZgng9gZQhQghgigwQgwhDghghQgxg0g+gkQhQgvh5gVQgkgGgLgMQgQgPAAgoQABiQBtheQCBhuFfhyQEQhZDOhHQBDgXA9gmQAbgRBCgyQAzgmAjgQQAwgYA5gCIENAAQF+gDDABUQBIAfBBA0QBFA8AjAeQA0A2AlAhQBEA9BUAdQBGAZBaASQBmAUA+ATQHOCNCxC7QCDCMgBDVQAACdgqBbQhRCtjlAXIjKADQjSARgkAoQgLAMgIADQgIADgHAuQgHAtgyApQgyApgngCIjCAcQjmAVg6AZQgaAKgSATIgnAqQgSAQgQAVQgQAWgDADQgEAEgDATQgDATgKAJQgcAYhdAAQhqAAgsg9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:10.6,y:-25.4}).wait(1).to({graphics:mask_graphics_1,x:10.6,y:-25.6}).wait(1).to({graphics:mask_graphics_2,x:10.6,y:-25.9}).wait(1).to({graphics:mask_graphics_3,x:10.6,y:-26.1}).wait(1).to({graphics:mask_graphics_4,x:10.6,y:-26.4}).wait(1).to({graphics:mask_graphics_5,x:10.6,y:-26.6}).wait(1).to({graphics:mask_graphics_6,x:10.6,y:-26.9}).wait(1).to({graphics:mask_graphics_7,x:10.6,y:-27.1}).wait(1).to({graphics:mask_graphics_8,x:10.6,y:-27.4}).wait(1).to({graphics:mask_graphics_9,x:10.6,y:-27.6}).wait(1).to({graphics:mask_graphics_10,x:10.6,y:-27.8}).wait(1).to({graphics:mask_graphics_11,x:10.6,y:-28.1}).wait(1).to({graphics:mask_graphics_12,x:10.6,y:-28.3}).wait(1).to({graphics:mask_graphics_13,x:10.6,y:-28.6}).wait(1).to({graphics:mask_graphics_14,x:10.6,y:-28.8}).wait(1).to({graphics:mask_graphics_15,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_16,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_17,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_18,x:10.6,y:-29}).wait(1).to({graphics:mask_graphics_19,x:10.6,y:-29.1}).wait(1).to({graphics:mask_graphics_20,x:10.6,y:-29.2}).wait(1).to({graphics:mask_graphics_21,x:10.6,y:-29}).wait(1).to({graphics:mask_graphics_22,x:10.6,y:-28.7}).wait(1).to({graphics:mask_graphics_23,x:10.6,y:-28.4}).wait(1).to({graphics:mask_graphics_24,x:10.6,y:-28.2}).wait(1).to({graphics:mask_graphics_25,x:10.6,y:-27.9}).wait(1).to({graphics:mask_graphics_26,x:10.6,y:-27.6}).wait(1).to({graphics:mask_graphics_27,x:10.6,y:-27.3}).wait(1).to({graphics:mask_graphics_28,x:10.6,y:-27}).wait(1).to({graphics:mask_graphics_29,x:10.6,y:-26.8}).wait(1).to({graphics:mask_graphics_30,x:10.6,y:-26.5}).wait(1).to({graphics:mask_graphics_31,x:10.6,y:-26.2}).wait(1).to({graphics:mask_graphics_32,x:10.6,y:-25.9}).wait(1).to({graphics:mask_graphics_33,x:10.6,y:-25.6}).wait(1).to({graphics:mask_graphics_34,x:10.6,y:-25.4}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-91,350,174.2);


(lib.Символ19 = function() {
	this.initialize();

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(-8.4,-36.3);

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(0,37.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184.4,-128.3,390,256.8);


(lib.Символ12копия = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.setTransform(166.5,344.6,0.69,0.69,61.2);

	// Слой 6
	this.button_1 = new lib.Символ26();
	this.button_1.setTransform(641.2,258.9);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ26(), 3);

	this.instance_1 = new lib.Символ7копия();
	this.instance_1.setTransform(627.7,242.2);

	this.button_2 = new lib.Символ25();
	this.button_2.setTransform(636.1,315.9);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.Символ25(), 3);

	this.instance_2 = new lib.Символ23копия();
	this.instance_2.setTransform(636.1,315.9);

	// Слой 4
	this.instance_3 = new lib.back();
	this.instance_3.setTransform(328,98.5);

	this.addChild(this.instance_3,this.instance_2,this.button_2,this.instance_1,this.button_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(142,98.5,826,308.5);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:97.5},88).to({x:64.7},30).to({x:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.4,-128.3,390,256.8);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 13
	this.cir = new lib.sprite113();
	this.cir.setTransform(908.8,122.8,0.499,0.499,0,0,0,27.6,27.6);

	// Слой 12
	this.instance = new lib.Символ1();
	this.instance.setTransform(658.4,125.9);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(654.8,123.6,1,1,0,0,0,346.9,26.6);

	// Слой 6
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(567.6,278.5);

	// Слой 3
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(879.8,347);

	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(388,347.9);

	// Слой 5
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(195.9,271.2,0.502,0.502,70.2);

	// Слой 4
	this.instance_6 = new lib.back();
	this.instance_6.setTransform(328,98.5);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.cir);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(169.1,97,832.7,309.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(600,106.1,1,1,0,0,0,600,204.1);

	this.main1 = new lib.Символ12копия();
	this.main1.setTransform(600,106.1,1,1,0,0,0,600,204.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.main1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(169.1,-1,832.7,309.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{main:0});

	// timeline functions:
	this.frame_0 = function() {
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		 function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndStop(0);
		}
		
		
		this.main.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_4.bind(this));
		
		function fl_CustomMouseCursor_4() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		
		this.main.main1.button_1.addEventListener("mouseover", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.pricel.gotoAndStop(1);
		}
		
		this.main.main1.button_2.addEventListener("mouseover", fl_ClickToGoToAndStopAtFrame_1.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_1()
		{
			this.pricel.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.pricel = new lib.Символ11();
	this.pricel.setTransform(720.4,153,1,1,0,0,0,913.6,523.2);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 5
	this.main = new lib.Символ13();
	this.main.setTransform(151,155.1,1,1,0,0,0,484.9,155.1);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.1,149,989.1,309.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
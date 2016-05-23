(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/girl_03.png", id:"girl_03"},
		{src:"images/girl_07.png", id:"girl_07"},
		{src:"images/girl_10.png", id:"girl_10"},
		{src:"images/girl_14.png", id:"girl_14"},
		{src:"images/girl_17.png", id:"girl_17"},
		{src:"images/girl_21.png", id:"girl_21"},
		{src:"images/girl_25.png", id:"girl_25"},
		{src:"images/girl_28.png", id:"girl_28"},
		{src:"images/mouth_18.png", id:"mouth_18"},
		{src:"images/mouth_25.png", id:"mouth_25"},
		{src:"images/pulya.png", id:"pulya"},
		{src:"images/zombie_03.png", id:"zombie_03"},
		{src:"images/zombie_06.png", id:"zombie_06"},
		{src:"images/zombie_09.png", id:"zombie_09"},
		{src:"images/zombie_11.png", id:"zombie_11"},
		{src:"images/zombie_17.png", id:"zombie_17"},
		{src:"images/zombie_19.png", id:"zombie_19"},
		{src:"images/zombie_23.png", id:"zombie_23"},
		{src:"images/zombie_25.png", id:"zombie_25"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,854,600);


(lib.girl_03 = function() {
	this.initialize(img.girl_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,14);


(lib.girl_07 = function() {
	this.initialize(img.girl_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,76);


(lib.girl_10 = function() {
	this.initialize(img.girl_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,271);


(lib.girl_14 = function() {
	this.initialize(img.girl_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,58);


(lib.girl_17 = function() {
	this.initialize(img.girl_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,35);


(lib.girl_21 = function() {
	this.initialize(img.girl_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,216);


(lib.girl_25 = function() {
	this.initialize(img.girl_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.girl_28 = function() {
	this.initialize(img.girl_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,75);


(lib.mouth_18 = function() {
	this.initialize(img.mouth_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,30);


(lib.mouth_25 = function() {
	this.initialize(img.mouth_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,39);


(lib.pulya = function() {
	this.initialize(img.pulya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,110);


(lib.zombie_03 = function() {
	this.initialize(img.zombie_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,136);


(lib.zombie_06 = function() {
	this.initialize(img.zombie_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,95);


(lib.zombie_09 = function() {
	this.initialize(img.zombie_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.zombie_11 = function() {
	this.initialize(img.zombie_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.zombie_17 = function() {
	this.initialize(img.zombie_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,45);


(lib.zombie_19 = function() {
	this.initialize(img.zombie_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,149);


(lib.zombie_23 = function() {
	this.initialize(img.zombie_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,72);


(lib.zombie_25 = function() {
	this.initialize(img.zombie_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,148);


(lib.Символ91 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pulya();
	this.instance.setTransform(28.5,0,1,1,15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,112.7);


(lib.Символ90 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEC8QgegJgggaIgPgMQgEgGgBgFQgBgEADgDIAGgFQANgIASABQARACAOAGQARAJAQAEQAPAFAMgBQANgBAKgGQAKgFAKgIQAIgJAEgJQAEgJABgIQABgIgDgGQgCgHgEgDQgJgIgLAAQgKgBgQACQgVADgUgLQgSgLgOgVQgGgJABgFQACgGAJgDQAqgOAegOQAegOASgOQASgNAGgKQAFgKgFgHQgDgFgIAAIgLACIgOAFIgcAPQgJAHgMACQgLACgNgBQgNgCgKgEQgLgFgIgGQgIgHgBgHQgBgHAGgHIASgVIAXgTIAcgQQAQgHAPgDIAbgDQAOgCAOAEQAPADARAJQAPAKAMALQANALAMAdQANAegFAOQgEAOgIAOQgHAOgLAJQgNAMgRAJQgSAJgWAJIAVAIQALAEAJAHQARAOAIAPQAIAQABAPQABAPgFAPQgFAPgKANQgMANgOAKQgOAJgPAFQgdALgmAAQgbAAgegKgAjGBWIgHgEIgHgGIgFgGIgDgFIABgDIACgFIAxhCIgkhQIgBgFQgBgDABgCQABgCAHgBIADgBIAYABQAHABAEAEQAFAEADAGIAQApIAug6QAFgFAEAAIAFABIAFADIAKAJIAIALQADAGgBAFQgBAFgEAEIg7BDIAgBLQADAEgCACQgBACgFABQgLABgMgBQgFgBgEgCQgDgCgEgGIgUgnIgmAxQgDADgEAAIgBAAQgDAAgDgCg");
	this.shape.setTransform(22.1,19.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.2,39.7);


(lib.Символ88 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AD6BjIgFgBIgSgJIgMgIIgHgJIgBgFIAAgGIALhzIgqCQQgCAEgCACQgCACgGgCIgKgCIgJgEQgFgDgCgDQgBgDABgGIAUhbIg0BhIgCACIgDABIgFgBIgPgEIgEgCIgDgCIgDgEIgCgHQgEgQgEgUIgIgpIgQBoQgBAEgCACQgCABgFgBIgUgHQgGgDgBgDQgBgDABgFIAAgVIAQiLQACgHAEgCQADgCAIABIAUAEIARAFIAIAFIAFAFIACAGIACAHIAAAFIAKA/IAwhaQAEgGAEgDQAEgEAFAAQAFgBAHACIAnAOQAEACACACQAAgFAEgCQADgCAMgCIBOgIIAGABIAEABIAEADIADAFQAGAKABAJQABAGgBACQgCACgHABIg5AHIgIAeIgDANQATgDAPADQAPACAKAFQAJAEAGAIQAFAIACAIQABAKgDAIQgBAFgCADQgDAHgJAGQgGAGgHAEIgiAPIgYAHgAEOAaIgQADIgHAjQAMgDAJgEQAKgEAGgEQAHgFADgEQADgFgBgDQgBgDgDgBQgDgCgGgBIgEAAIgJABgAndBjIgGgBIgdgRIgHgJIgCgFIAAgGIAMiKIAUgJIAXgHQAMgDAMgBQAMgBALAAQALABAKADQAJADAGAGQAIAHAFAJQAFAJACAMQABAGgBAGIgEAMIgHAKIgJAJIgLAGIgNAIQAJAEAFAIQAGAIACAIQABAKgEAHQgEAHgIAGQgGAGgIAEIgiAPIgYAHgAnJAaIgQADIgHAjQALgDAKgEQAJgEAHgEQAGgFAEgEQADgFgBgDQgBgDgDgBQgEgCgFgBIgEAAIgJABgAm1g1QgIACgJAEIgLAqQAOgFALgGQAMgHAHgGQAIgGADgGQAEgGgBgEQgBgCgEgCQgEgBgGAAIgPADgAj1BiQgIgBgFgDIgXgNIgFgFIgGgJQgCgDAAgDQALgNAOAGQANAGAHABQAIAAAIgCQAJgDAFgFQAFgEADgFQADgEgDgGQgBgDgEgBQgDgCgKAAQgJAAgKgCQgEgBgFgEIgKgKQgJgMAWgCQATgFALgGQALgHAHgGQAHgGADgGQADgGgCgEQgBgCgEgCQgEgBgGAAQgHAAgEADIgPAIQgJAHgSgJQgIgEgEgEQgEgEACgDQACgHAJgHQAIgHAHgEQAHgEALgEQALgDAMAAQALABAJADQAKADAGAGQAJAHAFAJQAGAJAEAMQACAGgBAGQgBAGgCAGQgCAFgEAFIgIAJIgKAGIgNAIQAJAEAIAIQAHAIABAIQABAKgDAHQgDAHgGAGQgFAGgIAFQgHAFgLAFQgKAFgLADQgKACgGAAIgCAAgAhTBgIgSgDQgIgCgIgDQgGgDgFgFQgGgFgDgGQgGgKgCgNQgDgNAAgOQABgOADgNQADgOAGgOQAGgOAIgMQAJgNALgKQAIgGALgDQAKgDAKACQANACALAEQALAEAIAGQAIAHAEAHQAEAIACAKQABAQAAATQgDAWgEANQgIAYgGALQgEAIgGAHQgFAHgHAGQgJAHgJACIgOACIgIgBgAhBg1QgGAFgFAJQgGAKgFALQgFALgDAJQgDAKgCALIAAAVQAAAKADAGQACAHAFACQAFABAFgDQAFgEAFgHQAFgHAFgLIAIgXIAEgVIACgXQAAgLgCgIQgCgIgFgBIgCgBQgEAAgEAFgAF+BfIgKgDQgGgBgFgDQgFgDgBgDQgCgDAAgGIAXieQABgHAEgBQAEgCAHACIAgALQAHADgFAQIgYBfIA7hlIANgSIAFgFIACgBQAEgCAHACIAGABIAKAFIAHAEQAGAEABAEQABAEgCAGIgoCaQgCAIgMgCQgKgCgKgEQgKgEAPhAIACgKIgSAcIgRAZIgRAVQgHAIgEACIgBABIgDAAIgFgBg");
	this.shape.setTransform(52.2,9.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104.5,19.9);


(lib.Символ87 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AnHB4QgKAAgJgDIgPgEQgGgDgFgEQgGgFgEgGQgFgKgDgNQgCgMABgPQAAgPAEgPQAEgPAGgNQAGgPAJgNQAGgJAPgOQAJgIAJgDQAKgCAIABIANACIAYAJIAKAGIAHAGIAFAHIACAIIABAIIgBAVIgGAVIgCACIgDABIgGAAQgHgBgFgDQgFgCgEgDIgFgGIgDgJIgBgVQgBgGgEgCQgFgBgGAGQgGAHgGAKQgGAKgFAKQgGANgDAKIgEAWQgCALABAJQAAAJADAGQACAGAFABQAJADASgSQANgNAVAGQAIACAAAEQABAFgEAHQgEAIgGAGIgNALIgHAEIgTAEgAjGB3IgVgHQgEgCgCgDQgCgEABgGQACgFACgMIALh0QACgKACgBIAngSIAWgGIAVgDQAKAAAJADQAJACAGAGQAIAJAGAJQAGAKAEAOQABAGgBAGQAAAGgDAEIgGAKIgJAJQgHAIgLAHQgKAHgNAGQgMAGgNAFIgbAIIgJAwQgBADgCABIgDABIgFgBgAh9geQgHAAgHACQgIABgIAEIgOAxQAQgFAMgHQALgHAIgHQAHgGADgHQADgHgBgFQgBgDgEgBIgHgBIgDAAgAk3B2IgRgFIgGgEQgDgCgBgDQgBgDABgEIAUh8IgWAEQgGABgDgBQgEgBgEgEQgFgFgEgHIgGgMQgDgFACgCQABgBAEgBIB+gOIAKABIAFAEIAHALIAEAMQACAFgBACQgCACgGAAIgoAEIgjCUQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAAAIgFABgAE3B2IgIgDQgJgCgFgEQgFgEACgIIAGgnIgEAAIgxA2QgFAFgEABIgHAAIgHgCIgGgDQgEgCAAgCQgBgDACgEIAZgjIAJgOQgGgCgFgFIgMgOQgEgGgEgOQgCgNAFgKQAHgPASgNQASgMAYgLQAcgMAQgBIACAAIAIABIANAFIANAHQAFAEACADQABADgCAGQgDAQgGAVIghB7QAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAIgEABgAEegXQgMAIgIAHQgIAIgDAFQgEAHABADQACADAEACQAEACAGAAIAOgCQAIgBALgEIALgyQgOAFgMAHgACqB2IgNgCQgFgBgCgDQgCgCgBgGIgCgOIAAggIAGhZIhKCRQgCADgCABQgDABgFgCIgGgDIgMgGIgDgDIgBgEIABgIIA0h2IAUgmQADgGAFgEQAGgEAKABIAdAEIAVAGQAHACABAEQACAEAAAGIgKB5QgBAWAAATQAAAEgCABQgBACgGAAIgKgBgAF9B1IgLgDQgFgBgFgDQgFgDgCgDQgBgDAAgGIAWieQACgHAEgBQAEgCAGACIAgALQAHADgFAQIgYBfIA8hlIAMgSIAFgFIADgBQADgCAHACIAGABIALAFIAGAEQAHAEAAAEQABAEgCAGIgoCaQgBAIgMgCQgKgCgLgEQgJgEAOhAIADgKIgTAcIgRAZIgRAVQgGAIgFACIgBABIgCAAIgFgBgAgtB2IgIgEIgPgLQgDgDgCgEQgDgFABgFIAViRIBFgOIAagCQAHAAAEADQAEACACAFIAEAKIACAJQABAGgCACQgCACgGABIg3AGIgNApIAZgCIAKABQAEACACAEIAEAJIADAIQABAGgBABQgBACgHABIgzAKIgHAaIAmgFQAGgBAEACQADABADAEIAHAQQABAFgBABQgBACgGABIg2ALIgKABIgEAAgAHChKQgIAAgGgCIgJgFIgGgFIgFgHQgDgFABgIQACgHAFgCQAEgBAIAEIAKAFIAHACQAEAAADgBIAHgEIAHgFIAFgDIAGgBQAFAAAEADQAFAFAAAEQgBAFgEAGQgFAGgIAGQgPAKgLAAIgCAAg");
	this.shape.setTransform(52.1,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104.3,24.2);


(lib.Символ83 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.4).p("AEsAAQAAB8hYBYQg3A3hFAUQgpANgvAAQgtAAgqgNQhFgUg3g3QhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7g");
	this.shape.setTransform(30,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.3,-3.2,80.7,66.4);


(lib.Символ82 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("AGiAAQAAish7h6Qh6h7itAAQisAAh6B7Qh7B6AACsQAACtB7B6QB6B7CsAAQCtAAB6h7QB7h6AAitg");
	this.shape.setTransform(41.8,41.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DF1020").ss(8).p("Ah7AAID3AA");
	this.shape_1.setTransform(12.6,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DF1020").ss(8).p("Ah9AAID7AA");
	this.shape_2.setTransform(70.8,41.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DF1020").ss(8).p("AAAh8IAAD5");
	this.shape_3.setTransform(41.8,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DF1020").ss(8).p("AAAh9IAAD7");
	this.shape_4.setTransform(41.8,71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("AmfAAIM/AA");
	this.shape_5.setTransform(41.8,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("AAAmjIAANH");
	this.shape_6.setTransform(41.8,42);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-4,91.3,92);


(lib.Символ79 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.Символ78 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.Символ73 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ72 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ71 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ70 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhdgyIAAgtQABABBBArQA/AqAhAiQAiAkgNAfQgCAEgGAAQgfAAiQiSg");
	this.shape.setTransform(9.4,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.7,18.9,19.3);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrBbIAAgdIhcAAIgDAdIgOAAIAAgsIANAAIAGgOIAFgRIADgUIABguIBRAAIAABhIARAAIgDAsgAisgTQgBAagDALQgFAWgEAHIA9AAIAAhSIgwAAgAktA9QgKgFgIgHQgIgJgEgKIgEgMIgBgMQAAgLAEgLQAEgKAIgJQAHgIAKgEQAKgFAMAAQAIAAAOAFQAKAEAHAJQAHAIADALQAEALAAAKIgBAGIhaAAQABAJAEAHQADAHAGAFQAFAFAHADQAHACAHAAQALAAAKgEQAIgEAHgIIALAKQgMALgIAEIgMAEQgHACgIAAQgMAAgKgEgAj1AAQgBgHgDgHQgCgHgFgFQgFgGgGgDQgHgDgIAAQgHAAgGADQgHADgFAFQgFAFgDAHQgDAHgBAIIBKAAIAAAAgAo2A+QgIgCgGgEQgGgFgDgHQgEgHAAgIQAAgJAEgHQADgHAHgFQAGgDAJgCQAJgCALAAQAOAAAUAFIAAgEQAAgIgCgFQgCgGgEgEQgFgEgGgCQgGgCgIAAQgKAAgJACQgHACgJAEIgFgOIATgHQALgCAMAAQAMAAAJADQAJADAGAGQAGAGADAJQADAIAAALIAABDIgRAAIAAgRQgGAJgJAFQgGADgGABQgGACgHAAQgJAAgHgDgAotAHQgGABgEADQgEADgCAFQgDAEAAAFQAAAGADAEQACAEAEADIAJAEQAFACAGAAQAIAAAHgCQAGgCAGgFQAFgEADgFQADgGAAgHIAAgKQgUgFgOAAQgHAAgHACgAKRA+IAAhwIARAAIAAArIAeAAQAKAAAIACQAIACAGADQAGADAEAHQADAHAAAIQAAAJgDAHQgDAGgFAFQgGAFgIADQgIACgKAAgAKiAvIAfAAQAGAAAFgBQAFgBAEgDQADgDACgEQACgEAAgFQAAgFgCgEQgCgEgDgCQgEgDgFgBQgFgBgHAAIgeAAgAHKA+IAAhwIARAAIAABhIA3AAIAAhhIARAAIAABhIA3AAIAAhhIASAAIAABwgAGTA+IAAhwIARAAIAABwgAEjA+IAAhwIARAAIAAArIAeAAQAJAAAIACQAJACAGADQAGADADAHQAEAHAAAIQAAAJgDAHQgDAGgGAFQgGAFgHADQgIACgKAAgAE0AvIAeAAQAHAAAFgBQAFgBADgDQAEgDACgEQACgEAAgFQAAgFgCgEQgCgEgEgCQgDgDgGgBQgFgBgGAAIgeAAgADsA+IAAhUIgqA3Igqg3IAABUIgQAAIAAhwIAQAAIAqA6IArg6IAQAAIAABwgAAPA+IAAhYIhCBYIgQAAIAAhwIARAAIAABZIBChZIAQAAIAABwgAnJA+IAAhwIA3AAQAIAAAHADQAHABAFAEQAFAEACAFQADAGAAAGQAAAFgCAFQgBAEgDADQgFAEgIADQALADAHAHQADADACAFQACAEAAAGQAAAHgDAGQgDAGgFAEQgGAEgHACQgIACgJAAgAm4AwIAlAAQAGAAAFgCQAFgBAEgCQADgDACgDQACgEAAgEQAAgFgCgDQgCgDgEgCQgDgDgGgBIgMgBIgjAAgAm4gBIAjAAQAKAAAGgEIAFgGQACgDAAgFQAAgHgGgEQgGgFgLAAIgjAAgAqCA+IAAhDIhZAAIAABDIgRAAIAAiYIARAAIAABFIBZAAIAAhFIARAAIAACYg");
	this.shape.setTransform(75,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,18.3);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHaBuQgCgCAAgDIABgMIADgOIhGAFIgGAAIgEgCIgSgNQgEgDgCgEQgCgEABgFIACgVIAbiFQACgHADgBQAEgBAHACIAOAFIAOAHQAGAEABADQACADgCAGIgiB+IAngEIAgiPQACgHAEgBQADgBAHACIAOAFIANAHQAFAEABADQACADgCAGIgjB4IACAAQALAAAFAEQAFAEgBAIIgIAgIgFANQgDADgHAEQgIAEgJAAQgIAAgCgCgABwBXIgFgBIgegRIgHgJIgBgFIAAgGIAMiKIATgJIAXgHQAMgDAMgBQANgBALAAQALABAJADQAJADAGAGQAIAHAFAJQAFAJADAMQABAGgBAGIgEAMIgHAKIgJAJIgLAIIgNAIQAIACAGAIQAFAIACAIQABAKgEAHQgDAHgJAGQgGAGgHAEIgRAIIgiAMIgHACgACEAOIgQADIgHAjQAMgDAJgEQAKgEAGgEQAHgFADgEQADgFgBgDQgBgDgDgBQgDgCgGgBIgEAAIgJABgACZhBQgIACgKAEIgKAqQAOgFALgGQALgHAIgGQAHgGAEgGQADgGgBgEQAAgCgEgCQgEgBgHAAIgOADgAioBWQgLAAgIgDIgPgEQgGgDgGgEQgGgFgDgGQgGgKgCgNQgDgMABgPQABgNADgPQAEgQAGgOQAHgPAJgNQAGgJAOgOQAJgIAKgDQAJgCAJABIAMACIAZAJIAKAGIAHAGIAEAHIACAIIABAIIgBAVIgFAXIgCACIgEABIgGAAQgHgBgFgDQgFgCgDgDIgFgHIgDgKIgCgVQAAgGgFgCQgEgBgGAGQgGAHgGAKQgGAKgGAMQgFANgDAKIgFAUQgBALAAAJQABAJACAGQADAGAEABQAJADASgSQANgNAVAGQAIACABAEQAAAFgEAHQgEAIgGAGIgMALIgIAEIgSAEgAJdBWIgPgCQgJgCgGgDIgLgHQgFgEgDgFIgFgKQgDgEgBgEIABgIQABgGADgCQAEgDAIADQAaAIAAAJIACAIQABADAGABQAEAAAFgIQAEgHAFgNIAEgNQgKADgPABQgKAAgJgCQgJgCgHgFQgOgKACgRIAJhSQACgHADgCQADgBAHACIAPAGIAOAHIAFAEIADADIAAAEIgOA/QgEANALAAIAOgCQAGgCAEgDIAPhXQABgHAEgBQADgCAHACIAPAFQAIADAGAEIAFAEIADADIABAEIgBAFIgMA7QgGAZgHAUQgHAUgJAOQgIANgKAHQgHAEgLACIgIABIgEAAgAn/BVIgVgHQgEgCgCgDQgCgEABgGQACgFACgMIALh0QABgKADgBIAngSIAWgGIAVgDQAKAAAJADQAIACAHAGQAHAJAGAJQAHAKADAOQACAGgBAGQgBAGgCAGIgHAKIgIAJQgIAIgKAFQgLAHgMAGQgMAGgOAFIgbAIIgJAwQgBADgCABIgDABIgEgBgAm3hAQgGAAgIACQgIABgIAEIgNAzQAPgFAMgHQAMgHAHgIQAIgHADgHQADgHgCgFQAAgDgEgBIgIgBIgDAAgAqjBRQgKgCgEgEQgFgEABgJIAWijQACgGADgBQAEgCAGACIAPAGQAIADAGAEIAFAEIADADIABAEIgPA+IBLhTQAEgFADAAQAEAAAFAEIAHAKIAHALQABAEAAAFQgBAFgEAHIgNASIg8A8IAdArIAIAJQAEAEgBACQAAADgFACIgHADIgIABQgFACgGgBQgGgBgGgGIgkgsIgJAwQAAABgBABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAgAAjBUQgFAAgFgCQgGgBgCgDQgCgCgBgGIgDgfIgeAFQgRACgMADIgOAfQgCADgDABQgCABgFgCIgNgGIgFgDIgDgDIgBgEIABgIIA0h2IATgmQAEgGAFgEQAFgEAKABIAPACIAhAIQAHACACAEQACAEgBAGIgECiQAAAEgBABQgCACgGAAIgKgBgAgdAIIAngEIgBhFgAkGBUQgFAAgFgCQgFgBgCgDQgCgCgBgGIgDgfIghAFQgQACgNADIgOAfQgCADgCABQgDABgFgCIgNgGIgFgDIgDgDIgBgEIABgIIA0h2IAUgmQADgGAFgEQAGgEAKABIAdAEIAVAGQAHACABAEQACAEAAAGIgECiQAAAEgCABQgCACgFAAIgLgBgAlHAIIAogEIAAhFgAD0BTIgKgDQgGgBgFgDQgFgDgBgDQgCgDAAgGIAXieQABgHAEgBQAEgCAHACIAgALQAHADgFAQIgYBfIA7hlQAFgJAIgJIAFgFIACgBQAEgCAHACIAGABIAKAFIAHAEQAGAEABAEQABAEgCAGIgoCaQgCAIgMgCQgKgCgKgEQgKgEAPhAIACgJIgSAbIgRAZIgRAVQgHAIgEACIgBABIgDAAIgFgBg");
	this.shape.setTransform(69.5,11.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139,22.5);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACFBjQgKgBgJgCIgPgFQgGgCgFgFQgGgFgEgGQgFgJgDgNQgCgNABgPQAAgOAEgOQAEgPAGgPQAGgPAJgNQAGgJAPgOQAJgIAJgCQAKgDAIABIANACIAYAJIAKAGIAHAHIAFAHIACAHIABAJIgBAVIgGAXIgCACIgDABIgGAAQgHgCgFgCQgFgCgEgEIgFgHIgDgKIgBgVQgBgGgEgBQgFgCgGAHQgGAGgGAKQgGAKgFANQgGAMgDAJIgEAWQgCAKABAJQAAAJADAGQACAHAFABQAJADASgTQANgNAVAGQAIACAAAFQABAEgEAHQgEAIgGAHIgNALIgHAEIgTAEgAk4BjQgLgBgIgCIgPgFQgGgCgGgFQgGgFgDgGQgGgJgCgNQgDgNABgPQABgOADgOQAEgPAGgPQAHgPAJgNQAGgJAOgOQAJgIAKgCQAJgDAJABIAMACIAZAJIAKAGIAHAHIAEAHIACAHIABAJIgBAVIgFAXIgCACIgEABIgGAAQgHgCgFgCQgFgCgDgEIgFgHIgDgKIgCgVQAAgGgFgBQgEgCgGAHQgGAGgGAKQgGAKgGANQgFAMgDAJIgFAWQgBAKAAAJQABAJACAGQADAHAEABQAJADASgTQANgNAVAGQAIACABAFQAAAEgEAHQgEAIgGAHIgMALIgIAEIgSAEgAjMBhIgMgEIgKgEQgFgCgCgDQgCgDABgGQAEgPACgUIALhUIAFghQACgHAGgCIAPgEIBJgHQAFAAAHABIAOAFIANAIQAFAEABADQACADgCAGIgtCfQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgFABIgGgBIgJgCQgJgDgFgEQgFgDACgIIADgTIAYhvIgkAFIgeCNQgBAEgCABIgCAAIgFAAgAAoBhQgFAAgFgCQgGgCgCgCQgCgDgBgGIgDgeIgeAEQgRACgMAEIgOAeQgCAEgDABQgCAAgFgCIgHgCIgLgGIgDgDIgBgFIABgHIA0h3IATgmQAEgGAFgDQAFgEAIABIAdAEIAVAFQAHADACAEQACAEgBAGIgEChQAAAEgBACQgCABgGAAIgKAAgAgYAVIAngFIgBhFgADuBgIgLgDQgFgBgFgEQgFgCgCgDQgBgDAAgGIAWieQACgHAEgCQAEgBAGABIAgAMQAHACgFAQIgYBfIA8hlIAMgSIAFgFIADgBQADgBAHABIAGACIALAEIAGAEQAHAEAAAEQABAEgCAGIgoCaQgBAJgMgDQgKgCgLgEQgJgDAOhBIADgJIgTAcIgRAZIgRAVQgGAIgFACIgBAAIgCABIgFgBg");
	this.shape.setTransform(37.9,10);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.7,19.9);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E93841").s().p("A1JMmQoxlOAAnYQAAnXIxlOQIxlOMYAAQMZAAIxFOQIxFOAAHXQAAHYoxFOQoxFOsZAAQsYAAoxlOg");
	this.shape.setTransform(191.6,114.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,383.1,228.1);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mouth_18();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,30);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mouth_25();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89,39);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AliiaIBSBQQA8ASAAAAQB/gpAAAAQA+gPAAAAQBPAIAAABIB9AsQA6AAAAABQA6gVAAABQA9hCAAABIgdBwIhBBbIhaBFIh7AaQAAAAirgKQAAAAhFgjQAAAAhOg7QAAABg6hHIgghcg");
	this.shape.setTransform(35.8,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ah4CRIhFgjIhOg7Ig6hGIgghcIADgrIBSBQIA8ASIB/gpIA+gPIBPAJIB9AsIA6ABIA6gUIA9hBIgdBwIhBBbIhaBFIh7AaIAAAAIirgKg");
	this.shape_1.setTransform(35.8,15.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.7,33.1);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A0iBUQohgjAAgxQAAgwIhgjQIhgkMBAAQMCAAIhAkQIhAjAAAwQAAAxohAjQohAksCAAQsBAAohgkg");
	this.shape.setTransform(186.1,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,372.1,24);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ArMCUQkqg+AAhWQAAhWEqg+QEpg9GjAAQGkAAEpA9QEqA+AABWQAABWkqA+QkpA+mkAAQmjAAkpg+g");
	this.shape.setTransform(101.6,21.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.1,42.1);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117,95);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,136);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_17();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,113,45);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_23();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,131,72);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_19();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,149);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zombie_25();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,148);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A4A4A4").ss(1,1,1).p("APtAAI/ZAA");
	this.shape.setTransform(100.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,203.1,2);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C7C7C").s().p("EgscAHvIAAvdMBY4AAAIAAPdg");
	this.shape.setTransform(284.5,49.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,569,99);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyMsQisAAiRiTQgtgwgng5QgRgZgOgbIjgnFQghhBAYhHQAYhIBDgiQBKgmBMAfQA8AYA1BFIAAoSQAAhLA1g0QA1g1BKAAQBLAAA0A1QA1A1AABKIAADZQAegNAgAAQA+AAAyAmQAxAmAQA5QAigNAhAAQBBAAAyApQAxApAMA+QAfgMAhAAQBLABA0A0QA1A1AABIIABFdQAAC+iHCHQiGCHi9AAgAo5hQQgYAMgIAZQgJAYAMAVIDfHDQAJASAQAYQAeAsAjAlQBvB0B8AAIE+AAQCMAABjhjQBjhlAAiMIgBldQAAgXgRgRQgSgRgZAAQgZAAgRARQgSARAAAXIAACFIh4AAIAAkHQAAgZgRgRQgSgSgZAAQgZAAgRASQgSARAAAZIAADOIh4AAIAAlGQAAgYgTgSQgTgSgaAAQgZAAgTAUQgRATAAAaIAAEtIh5AAIAAqyQAAgZgRgRQgSgSgZAAQgZAAgRASQgSARAAAZIAAMiIhnAkIgTg6QgYhGgnhCQgxhOgtgSQgKgEgLAAQgOAAgOAHg");
	this.shape.setTransform(72.6,81.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,162.5);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222,271);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C685").s().p("AofAJQDmBBCPhNQCOhNAjAIQAnAJAZgBQAbgDB+AjQB/AgA+gYQBAgbBDA1QgrgVgzAcQgxAehLAAQhMABhsgiQhsgfhWAfQhYAghlAdQgXAGgeAAQhfAAiahAg");
	this.shape.setTransform(52.5,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C685").s().p("AogACQDyBPCPhRQCQhRAfAEQAkAEASAGICVAqQCCAgBAgbQBCgeBCA1Qgsgag1AeQgyAhhLAFQhLAGhqgsQhqgqhVAnQhXAohkAdQgVAGgbAAQhgAAikhNg");
	this.shape_1.setTransform(52.4,50.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8C685").s().p("AodAUQDWAsCNhGQCNhHApAOQApAPAkgMQAmgOB5AhQB4AfA+gTQA+gVBCA1QgpgQgwAZQguAchOgHQhNgGhugUQhugShYAVQhaAWhlAbQgdAHglAAQhaAAiKgug");
	this.shape_2.setTransform(52.7,50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8C685").s().p("AoaAuQC7AICLg7QCKg9AwAaQAwAaA3gfQA4ghBvAdQBwAcA6gKQA7gLBCA1QgmgJgrAXQgqAXhRgTQhQgThxAFIjNAJQheAEhmAZQgtALg8AAQhLAAhjgSg");
	this.shape_3.setTransform(53,49.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8C685").s().p("AjvgIQCIgyA3AlQA2AjBLgwQBKgzBmAZQBnAYA3AAQA3gCBCA1QgiABgnASQgmAThTgfQhSgdh2AbQh2AdhegOQhggOhpAXQhnAWiiADQChgcCIgxg");
	this.shape_4.setTransform(53.3,49.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8C685").s().p("AkKgRQCFgpA/AxQBAAvBahEQBdhGBdAVQBdAVA0AJQA0AJBCA1QgfAJgjAPQghAOhWgrQhVgqh5A0Qh5A1hjghQhjgghqAVQhpAViQAlQCFhACFgmg");
	this.shape_5.setTransform(53.6,49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8C685").s().p("AkkgbQCCgeBGA6QBGA8BthXQBvhYBVARQBUARAxATQAwASBCA1QgdATgcAKQgeAJhYg1QhZg4h9BMQh9BOhkgzQhogwhqARQhqATiCBHQBqhkCEgcg");
	this.shape_6.setTransform(53.9,49.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8C685").s().p("AkJgRQCGgpA+AwQA/AvBahDQBchFBdAVQBeAVA0AJQA0AIBCA1QgfAJgjAPQghAOhWgrQhVgph5AzQh6A0hhggQhkgfhpAVQhpAViRAjQCGg+CFgng");
	this.shape_7.setTransform(53.6,49.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8C685").s().p("AjtgHQCIgzA3AkQA2AjBIgvQBIgyBoAZQBnAZA4gBQA3gCBCA1QgjAAgnATQgmAShSgeQhTgch1AZQh2AbhegMQhggNhoAXQhnAXijAAQCjgZCIgyg");
	this.shape_8.setTransform(53.3,49.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8C685").s().p("AobArQC/AMCLg8QCLg+AvAYQAvAZA1gdQA1geBxAdQBxAcA6gLQA7gMBDA1QgngKgsAXQgqAYhQgRQhQgRhxABQhyAChaAGQhdAGhnAaQgqAKg3AAQhOAAhqgVg");
	this.shape_9.setTransform(52.9,49.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8C685").s().p("AoeARQDbAyCOhIQCNhJAoANQAnANAigJQAigLB6AhQB7AgA+gVQA+gWBDA1QgqgSgxAaQgvAdhNgFQhNgEhtgYQhugWhXAYIi/A0QgbAHgiAAQhcAAiPgzg");
	this.shape_10.setTransform(52.6,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Слой 9
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8C685").s().p("AFiChQggABgxhCQgyhBhqgFQhrgEg+g4QhAg7hYgSQhXgTh7gjID3ARQB1AIAdA+QAaA+BYgZQBXgbBBA5QBAA3AmAXQAnAZAdBKQgcgHghACg");
	this.shape_11.setTransform(64.9,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8C685").s().p("AFdCjQglAEgzg3Qgzg3hggXQhggXhCgoQhFgrhXgRQhXgQh6hEQCGAuB8ABQB7AAAcAzQAZAzBEgQQBFgRBFA9QBGA+AsARQAsARAdBLQgbgQgmAEg");
	this.shape_12.setTransform(65,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8C685").s().p("AFZClQgqAGg2gsQg1gshVgqQhVgphHgZQhIgbhXgOQhWgOh6hmQCMBVCBgHQCBgHAYAmQAbAoAxgHQAygHBKBDQBLBEAxAKQAyALAdBKQgagYgqAGg");
	this.shape_13.setTransform(65.1,24.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8C685").s().p("AFUCnQgvAIg3ghQg4ghhKg9QhLg6hKgKIijgXQhWgNh4iGQCRB7CHgPQCEgPAZAbQAZAcAfADQAfACBPBJQBPBKA3ADQA3AEAdBKQgYgggvAIg");
	this.shape_14.setTransform(65.2,24.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8C685").s().p("AFQCpQgzALg7gWQg6gXg/hPQhAhNhPAFQhQAGhWgKQhWgLh3ioQCXCiCMgXQCKgXAXAQQAaARAKAMIBhBbQBVBPA7gDQA+gDAcBKQgXgqgzALg");
	this.shape_15.setTransform(65.3,23.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8C685").s().p("AFYClQgqAHg2grQg2gqhTgtQhUgqhHgYQhJgZhXgOQhWgOh6hqQCNBaCCgJQCCgHAYAkQAaAnAvgGQAvgFBLBDQBLBFAyAKQAzAJAdBKQgagZgrAGg");
	this.shape_16.setTransform(65.1,24.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8C685").s().p("AFhChQgiACgyg+Qgxg/hogKQhogKg/g0QhCg1hXgTQhXgSh7grQCBASB5AGQB3AHAcA7QAaA7BTgXQBSgYBCA6QBCA5AoAVQAoAXAdBKQgcgJgiACg");
	this.shape_17.setTransform(64.9,26.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8C685").s().p("AFqCuQgZgDguhTQgthTh8AZQh6Aag6hSQg6hUhYgWQhYgVh8ASQB2g1BuAUQBuAVAfBQQAdBPB0gnQB1gpA6AvQA4AtAdAjQAeAjAdBKQgYAGgUAAIgLAAg");
	this.shape_18.setTransform(64.7,26.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8C685").s().p("AFoCqQgbgCguhPQgvhOh3ARQh4ASg6hLQg7hOhYgVQhYgUh7AEQB4glBwARQBwASAeBLQAeBLBsgjQBugmA6AyQA7AvAgAgQAfAhAdBKQgXADgWAAIgLAAg");
	this.shape_19.setTransform(64.7,26.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8C685").s().p("AFmCmQgdgBgvhKQgwhKhyAKQh0ALg7hGQg9hHhYgUQhXgUh8gIQB6gXB0APQByAOAdBHQAcBIBlghQBngiA8A0IBfBPQAiAeAdBKIgdAAIgdAAg");
	this.shape_20.setTransform(64.8,26.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8C685").s().p("AFkChQgeABgxhGQgwhGhvACQhvAEg8g/QhAhBhXgTQhYgTh6gWQB8gHB2ALQBzALAeBDQAbBDBegdQBfgeA/A2QA+A0AlAbQAkAbAcBKQgcgDgfAAg");
	this.shape_21.setTransform(64.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Слой 12
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B98348").s().p("AH5DiQgzgDhMhDQhMhEiKgkQiLgkhgg4Qhkg7h6gfQh6ggiyhVQC9A+CsAXQCuAWApA7QApA8BjgHQBlgGBkBIQBlBLA9AaQA+AaAuBTQgngUgygCg");
	this.shape_22.setTransform(48.3,16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B98348").s().p("AHyDjQg6gBhOg4QhPg4h7g3Qh8g2hlgnQhpgrh6gcQh5gfizh4QDJBpC0APQC0APAlAuQApAvBIAAQBJABBsBPQBsBTBFAUQBGATAtBTQglgdg5gBg");
	this.shape_23.setTransform(48.5,15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B98348").s().p("AHrDkQhBABhQgtQhSgrhshKQhthIhrgYIjmg0Qh5gcizicQDUCVC7AHQC8AHAjAhQAmAjAsAHQAtAHB0BYQB0BaBOANQBNAMAtBTQglgmg/AAg");
	this.shape_24.setTransform(48.6,14.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B98348").s().p("AHjDmQhGAChUghQhTgfhehdQhehbhwgIQhxgIh6gYQh4gai0jAQDhDADBgBQDBAAAjAUQAkAWAQAOQASAPB8BeQB8BiBVAGQBUAGAuBTQgkgwhHADg");
	this.shape_25.setTransform(48.7,14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B98348").s().p("AHrDkQhAABhRgtQhRgshthJQhuhHhqgaQhsgah6gaQh6gciyibQDUCTC6AHQC7AIAkAiQAmAjAtAHQAvAHBzBXQB1BZBNAOQBLANAuBTQglgmg/AAg");
	this.shape_26.setTransform(48.6,14.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B98348").s().p("AHyDjQg5gChOg5QhOg3h9g3IjiheQhogrh6geQh6geiyh0QDIBlCyAPQC0AQAmAvQApAxBKgBQBLgBBsBQQBsBSBFAUQBEAUAtBTQgmgdg4AAg");
	this.shape_27.setTransform(48.5,15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B98348").s().p("AH5DhQgygChLhGQhLhEiNgjQiNghhfg7Qhig+h8gfQh7ggiwhOQC8A3CqAYQCsAXArA9QApA+BngIQBogIBkBIQBjBJA9AcQA8AbAuBTQgngTgygDg");
	this.shape_28.setTransform(48.3,16.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B98348").s().p("AIADgQgrgFhIhSQhIhQidgPQidgNhahNQhdhPh8giQh8gjiugoQCvAKCjAfQCkAgAtBLQAtBLCDgPQCFgQBcBAQBbBCA0AiQA0AiAuBTQgogJgrgEg");
	this.shape_29.setTransform(48.2,17.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B98348").s().p("AIHDnQgjgHhHhdQhEhdisAEQitAHhUheQhZhih9gkQh8glitgCQCigkCbAoQCdAoAwBYQAvBWCfgTQCjgZBUA5QBTA6AsApQArApAuBTIgMAAQgiAAgfgFg");
	this.shape_30.setTransform(48.1,17.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B98348").s().p("AIBDgQgqgFhIhTQhHhSifgNQifgLhZhOQhdhRh8giQh7gkivgkQCuAGCiAgQCkAgAtBMQAtBNCGgQQCJgRBZBAICOBjQAzAjAuBTQgogHgqgFg");
	this.shape_31.setTransform(48.2,17.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B98348").s().p("AH7DhQgxgEhKhHQhLhIiQgeQiRgdheg+QhhhBh7ggQh7giiwhFQC5AuCpAZQCqAYArBAQAqBCBtgKQBvgKBiBGQBiBIA5AcQA7AdAuBTQgngPgwgEg");
	this.shape_32.setTransform(48.3,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).wait(1));

	// Слой 8
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8C685").s().p("AGYAmQhfggiOAVQiOAVhwgPQhygPh8AUQh+ASjDgHQDGgRCngtQCogwA9AmQA+AkBYgrQBaguB6AdQB5AdBDAAQBDAABKA3QgqgCgxASQgQAGgXAAQgqAAg/gVg");
	this.shape_33.setTransform(40.8,39.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F8C685").s().p("AGPAtQhdgUiIgCQiIgChtACQhvADh9AVQh7AUjTgoQDiASCrg3QCrg5A3AbQA2AbBCgcQBDgdCDAiQCFAgBHgJQBHgJBLA3QgugLg1AWQgcALgmAAQgkAAgugKg");
	this.shape_34.setTransform(40.5,39.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F8C685").s().p("AqHAFQD+A2CuhBQCwhEAsAQQAxARAsgLQAsgLCOAlQCOAjBMgRQBMgSBKA3QgwgUg7AaQg7AahcgJQhbgJiBgZQiBgWhsASQhuATh6AYQgcAFgiAAQhwAAiug5g");
	this.shape_35.setTransform(40.2,39.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8C685").s().p("AqKgMQEaBXCyhLQCzhNAmAFQAqAGAVAHICtAuQCYAnBRgaQBRgbBKA3QgzgchBAdQhAAehaADQhZADh7gwQh7guhpAkQhsAlh5AZQgWAEgZAAQh1AAjGhVg");
	this.shape_36.setTransform(40,40);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8C685").s().p("AqHAGQD8A0CvhBQCuhCAuAQQAxARAtgLQAugMCNAkQCNAjBMgQQBMgSBKA3QgwgTg7AZQg6AahcgKQhcgJiBgYQiCgVhrARQhuATh6AXQgdAFghAAQhxAAitg3g");
	this.shape_37.setTransform(40.3,39.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F8C685").s().p("AGQAsQhdgViJAAIj2ABQhvABh9AVQh8AUjQglQDfAPCqg2QCrg4A3AcQA3AcBEgeQBGgeCCAhQCDAgBHgIQBHgJBKA4QgtgKg1AVQgaAKgkAAQglAAgwgLg");
	this.shape_38.setTransform(40.5,39.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F8C685").s().p("AGaAlQhgghiPAYQiPAZhvgSQhzgSh+AUQh9ASjAgDQDBgWCngsQCnguA+AoQA+AmBdguQBcgxB5AdQB4AcBCACQBCABBLA3QgrgBgvASQgQAFgUAAQgrAAhAgXg");
	this.shape_39.setTransform(40.8,39);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F8C685").s().p("Ak4gWQCjgjBHAzQBHAxByhAQB1hDBtAZQBuAYA9ALQA+ALBKA3QgoAJgpANQgqAMhiguQhigsiWAuQiVAxhygkQh0gkiAARQh/ARiwAgQCkg7Cjgig");
	this.shape_40.setTransform(41.1,39);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F8C685").s().p("AlXghQCfgZBPA9QBPA+CKhSQCMhVBjAVQBjAUA5AVQA4AUBKA3QgkASgkAJQgkAIhkg7Qhkg4idBGQicBKh0g3Qh3g0iAANQiCAPifBCQCGheCfgZg");
	this.shape_41.setTransform(41.4,39.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8C685").s().p("Ak7gXQCjgiBHA0QBIAyB1hCQB3hFBsAZQBtAYA9AMQA8ALBLA4QgoAJgoANQgpAMhjgwQhigtiWAxQiWAzhzgmQh0gmiAASQh/AQiuAjQCgg/Cjggg");
	this.shape_42.setTransform(41.1,39);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8C685").s().p("AGcAkQhhgkiQAdQiQAehxgWQhygVh+ATQh+ASi9AEQC8geClgpQCngsBAAqQBAAoBhgyQBig0B1AcQB2AbBCAEQBBADBKA3QgpABguARQgOAEgSAAQgrAAhEgZg");
	this.shape_43.setTransform(40.9,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	// Слой 7
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8C685").s().p("AFIA6QhNgMhtgZQhsgYhaAOQhcAPhmAUQhnATi8hJQDSA1CSg8QCRg9AoATQAnASAngLQAogNB2ApQB2AkA+gOQBAgOA+A5QgpgVgwAYQggARgsAAQgXAAgagFg");
	this.shape_44.setTransform(37.7,32.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8C685").s().p("AFEBBQhMgFhqgmQhqglhZAYQhaAZhmAVQhlAUjEhcQDfBJCThBQCUhDAiANQAmAMAdgCQAdgDB6ArQB7AmBAgTQBCgTA+A5Qgpgag0AbQgpAVg5AAIgcgBg");
	this.shape_45.setTransform(37.5,32.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8C685").s().p("ACOAWQhogxhXAhQhZAjhlAWQhlAVjLhvQDsBeCVhHQCVhIAfAGQAjAGASAHICRA0QCAApBCgZQBEgYA+A5Qgrgeg2AcQg1AehLAAIgCAAQhKAAhlgyg");
	this.shape_46.setTransform(37.4,32.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F8C685").s().p("AFMAyQhOgThvgLQhxgMhbAFQhcAEhoATQhmASi0g2QDCAhCQg2QCQg4ArAaQAsAaAygWQA0gXBwAmQBxAiA8gHQA9gKA+A4QgngOgtAWQgYALghAAQgeAAglgKg");
	this.shape_47.setTransform(37.8,32.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F8C685").s().p("AFZAjQhRgmh5AbQh5AdhegaQhggbhpAPQhqAPicAFQCZgfCLgkQCKgmA3AtQA1ArBUgyQBUg0BiAeQBhAeA2AHQA2AFA+A5QgiACgmAOQgKAEgNAAQgkAAg8geg");
	this.shape_48.setTransform(38.2,32.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F8C685").s().p("AFmAXQhUg7iCBDQiCBFhhg5Qhjg4hsANQhsAKiFA+QBwhbCFgUQCEgWBCA+QBDBBByhPQB0hRBUAWQBSAYAwAVQAvAWA+A5QgeARgdAIIgHABQghAAhLg3g");
	this.shape_49.setTransform(38.6,31.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8C685").s().p("AFhAdQhUgzh9AyQh/A0hfgsQhigqhrAMQhrANiPAlQCChACHgcQCHgdA+A4QA9A2BlhCQBlhEBaAZICMAqQAyAOA+A5IhBAVQgGACgHAAQgiAAhFgrg");
	this.shape_50.setTransform(38.4,31.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8C685").s().p("AFbAiQhSgqh6AhQh6AihegeQhhgdhqANQhqAOiZANIEdhJQCKgjA4AvQA4AuBYg2QBYg4BgAdQBgAdA0AIQA2AIA+A5QgiAEglANQgJAEgLAAQgkAAg+ghg");
	this.shape_51.setTransform(38.2,32);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8C685").s().p("AFWAnQhRgjh2ASQh3AShdgSQhegShpARQhpAQijgNQClgMCMgpQCLgrA0AnQAzAlBKgpQBKgrBnAgQBlAgA4ACQA4ABA+A5QgjgDgoAQQgNAGgSAAQgjAAg2gYg");
	this.shape_52.setTransform(38.1,32.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8C685").s().p("AFQAtQhPgahyABQhzAAhbgEQhegFhoASQhoARitgmQC3APCOgwQCOgzAvAfQAuAfA8geQA9gfBsAjQBtAjA6gFQA7gGA+A5QglgKgsAUQgTAJgZAAQghAAgtgPg");
	this.shape_53.setTransform(37.9,32.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8C685").s().p("AFLA1QhOgRhugQQhvgRhbAJQhcAIhnAUQhnASi3g9QDJAoCQg4QCRg5AqAWQAqAXAugSQAugSBzAmQBzAkA9gKQA+gMA+A5QgngRgwAWQgaAOglAAQgbAAghgIg");
	this.shape_54.setTransform(37.7,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).wait(1));

	// Слой 16
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B98348").s().p("AG5BrQg0ARhJgbQhKgZhmgrQhngrhcAAQhcgBhoACQhoABithqQDFBaCagjQCagjAiAZQAmAYAogDQApgGBtA6QBuA7BAgEQBBgFAzBFQgkgbg0APg");
	this.shape_55.setTransform(37.9,29);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B98348").s().p("AG1BtQg2AThJgUQhLgThgg4Qhig2hcAKQhdAIhoADQhnAAixh7QDPBwCcgoQCdgoAfARQAkATAcAEQAeABBwA9QBzA+BCgIQBEgKAzBGQgkghg4ARg");
	this.shape_56.setTransform(37.9,28.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B98348").s().p("AGyBvQg4AUhKgNQhKgMhdhEQhchChdATQheARhnAEQhnADi1iQQDYCFChgsQCdgtAeALQAhAMARALICHBKQB2BABFgMQBIgOAzBFQgkgmg8ATg");
	this.shape_57.setTransform(37.8,28);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B98348").s().p("AG8BqQgwAOhJgiQhKghhsgdQhtgdhagMQhcgMhpABQhpAAinhVQC6BCCXgeQCXgdAnAgQAmAhA2gNQA2gNBpA4QBoA2A9ABQA+ABAyBFQgjgVgxANg");
	this.shape_58.setTransform(37.9,29.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B98348").s().p("AFVA/QhJg3h8AIQh8AHhYgoQhagrhrgCQhqgEibgXQCcgDCPgOQCPgOAuA2QAtA2BcgkQBbglBcAvQBaAsA0APQA1APAyBFQgigFgnAIIgMACQgmAAg/gvg");
	this.shape_59.setTransform(38,30.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B98348").s().p("AFoAzQhJhJiMAsQiMAshWhHQhXhJhtgGQhsgIiOAnQB+hICHADQCGABA2BLQA2BJCAg6QB/g8BQAlQBMAmArAbQArAdAzBFQghAMgeACIgCAAQgfAAhGhIg");
	this.shape_60.setTransform(38.2,30);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B98348").s().p("AFgA3QhJhAiFAcQiFAdhXg6QhYg9htgEQhrgHiTANQCLgrCKgDQCKgFAzBBQAyBABwgwQBwgyBUAqICCA+QAvAXAzBFIhEAKIgFAAQgjAAhDg+g");
	this.shape_61.setTransform(38.1,30.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B98348").s().p("AFYA9QhKg6h9AOQh+AMhZgsQhZgvhrgEQhrgEiZgOIEmgYQCOgMAvA5QAuA5BhgoQBggoBaAtQBZAsAyARQAzARAzBFQgigDgmAHIgJABQgmAAhAgyg");
	this.shape_62.setTransform(38.1,30.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B98348").s().p("AFQBDQhJgxh4gDQh3gDhZgfQhbgjhqgBQhqgDiegpQCkARCRgSQCRgSAtAvQArAwBRgeQBRgeBfAyQBeAvA2ALQA4ALAzBFQgjgKgrAKQgHABgIAAQgnAAg8gng");
	this.shape_63.setTransform(38,30.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B98348").s().p("AG+BoQgtANhJgnQhKgohwgTQhxgThagSQhbgVhpgBQhqgBikhDQCyAuCUgZQCVgZApAnQAoAmBAgTQBBgUBmA1QBkA0A6AFQA7AEAzBFQgjgRgvAMg");
	this.shape_64.setTransform(38,30);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B98348").s().p("AG6BrQgxAPhJgfQhKgehpgjQhrgihbgHQhbgIhpABQhpAAiqhdQC/BMCYggQCZgfAkAdQAmAdAwgJQAygKBqA6QBrA3A9gBQBAgCAzBFQgkgYgzAPg");
	this.shape_65.setTransform(37.9,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).wait(1));

	// Слой 6
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F8C685").s().p("AG4B/QgxAKhIglQhHgmhtghQhrgfhagSQhagThqgEQhpgFijhZQC1BHCYgWQCYgVAlAkQAmAkA4gLQA5gNBlA8QBmA6A7AFQA+AFAvBHQgigWgwALg");
	this.shape_66.setTransform(40.2,22.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F8C685").s().p("AG1CAQgzAMhJggQhHghhogqQhngphagJQhcgLhpgEQhogEimhpQC9BZCZgaQCagZAiAeQAmAfAugGQAvgHBpA+QBpA+A+ABQBAABAvBHQgigagzAMg");
	this.shape_67.setTransform(40.2,22);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F8C685").s().p("AGyCBQg1AOhJgbQhIgbhjg0QhigzhcgBIjFgFQhngEiph5QDEBsCcgfQCcgcAhAYQAkAZAkAAQAlgCBrBBQBsBABBgCQBDgDAwBHQgjgeg2ANg");
	this.shape_68.setTransform(40.1,21.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F8C685").s().p("AGwCCQg4AQhJgWQhJgVheg+Qheg9hcAHQheAFhogBQhngDiriJQDKB+CfgiQCfgiAfATQAiAUAaAFQAaAFBwBDQBvBDBEgGQBFgHAwBHQgjgig4AOg");
	this.shape_69.setTransform(40.1,21.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F8C685").s().p("AGtCDQg7AShIgRQhKgQhZhHQhahHhdAPQheAMhoAAQhmgBiuiaQDRCSCignQCfgmAfANQAhAOAPALICDBQQBzBHBGgKQBIgKAwBHQgjgng7APg");
	this.shape_70.setTransform(40.1,20.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F8C685").s().p("AG0CAQg0ANhHggIivhLQhngrhagIQhcgJhpgEQhngEinhrQC9BcCbgbQCbgaAhAeQAmAdAsgFQAtgGBpA+QBpA/A/ABQBBAAAvBHQgigag0ALg");
	this.shape_71.setTransform(40.2,22);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F8C685").s().p("AG7B9QgsAIhHguQhHgvh0gRQh0gRhXgdQhagghqgGQhpgHieg9QCpAoCUgQQCUgOAoAtQAoAuBJgVQBKgWBgA4QBfA1A4AMQA4AKAwBHQgigOgtAIg");
	this.shape_72.setTransform(40.2,23.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F8C685").s().p("AFWBGQhGg/iAALQiBALhVg0QhXg3hrgJIkBgYQCVgNCNgDQCNgDAtA9QAtA9BmglQBngmBWAxQBVAuAxAVQAxAVAwBHQgigCgmAFIgFAAQglAAhCg6g");
	this.shape_73.setTransform(40.2,23.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F8C685").s().p("AFlBAQhFhMiNAkQiOAnhThLQhUhOhsgMQhrgMiQAgQCChCCGAJQCGAIAyBOQAyBLCCg0QCDg2BNApQBLApAqAeQAqAfAvBHQghAKgfABIAAAAQgeAAhGhNg");
	this.shape_74.setTransform(40.3,23.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F8C685").s().p("AFUBHQhGg8h/AHQh+AHhWgxQhXg0hrgIQhqgKiYgVIEmgKQCOgFAtA7QArA7BigjQBjgkBXAyQBXAvAyAUQAyATAwBHQgigDgnAFIgGABQgmAAhBg4g");
	this.shape_75.setTransform(40.2,23.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F8C685").s().p("AG5B+QguAKhIgrQhHgqhwgZQhwgZhYgWQhagahqgFQhpgHighKQCvA3CVgTQCWgRAnApQAmAoBBgQQBCgSBiA7QBjA3A5AJQA7AHAwBHQgigSgvAKg");
	this.shape_76.setTransform(40.2,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66}]}).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).wait(1));

	// Слой 13
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B98348").s().p("ApaAJQEABBCdhNQCehNAnAIQArAJAcgBQAegDCLAjQCMAgBGgYQBHgbBKA1QgwgVg4AcQg2AehUAAQhUABh3giQh4gfhgAfQhhAghwAdQgaAGghAAQhpAAirhAg");
	this.shape_77.setTransform(45.7,44.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B98348").s().p("ApbACQEMBPCfhRQCfhRAjAEQAoAEATAGICmAqQCQAgBHgbQBJgeBJA1Qgxgag6AeQg4AhhTAFQhTAGh1gsQh2gqhfAnQhfAohvAdQgYAGgeAAQhqAAi2hNg");
	this.shape_78.setTransform(45.5,44.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B98348").s().p("ApYAUQDuAsCchGQCdhHAtAOQAtAPApgMQAqgOCFAhQCGAfBDgTQBGgVBJA1QgugQg1AZQgzAchWgHQhWgGh6gUQh5gShjAVQhiAWhxAbQggAHgpAAQhkAAiZgug");
	this.shape_79.setTransform(45.9,44.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B98348").s().p("ApVAuQDQAICag7QCZg9A2AaQA0AaA9gfQA+ghB8AdQB8AcBAgKQBBgLBKA1QgqgJgwAXQgvAXhZgTQhZgTh+AFIjjAJQhnAEhyAZQgyALhCAAQhUAAhugSg");
	this.shape_80.setTransform(46.2,43.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B98348").s().p("AkJgIQCWgyA+AlQA9AjBRgwQBSgzByAZQByAYA8AAQA+gCBJA1QgnABgqASQgqAThcgfQhcgdiCAbQiCAdhpgOQhrgOhzAXQhzAWiyADQCxgcCXgxg");
	this.shape_81.setTransform(46.5,43.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B98348").s().p("AkmgRQCTgpBGAxQBGAvBkhEQBmhGBpAVQBnAVA5AJQA5AJBKA1QgkAJglAPQgmAOhfgrQhegqiGA0QiGA1htghQhuggh1AVQh0AVihAlQCThACVgmg");
	this.shape_82.setTransform(46.9,43.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B98348").s().p("AlEgbQCQgeBOA6QBOA8B5hXQB6hYBfARQBdARA1ATQA2ASBKA1QggATggAKQghAJhig1Qhig4iKBMQiLBOhwgzQhygwh2ARQh2ATiPBHQB1hkCSgcg");
	this.shape_83.setTransform(47.2,43.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B98348").s().p("AklgRQCTgpBGAwQBGAvBjhDQBlhFBpAVQBoAVA5AJQA6AIBJA1QgjAJgmAPQglAOhfgrQhfgpiGAzQiGA0hsggQhvgfh0AVQh0AViiAjQCUg+CVgng");
	this.shape_84.setTransform(46.8,43.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B98348").s().p("AkHgHQCXgzA9AkQA8AjBQgvQBQgyBzAZQByAZA+gBQA9gCBKA1QgnAAgrATQgrAShbgeQhcgciCAZQiCAbhogMQhrgNhzAXQhzAXizAAQCzgZCXgyg");
	this.shape_85.setTransform(46.5,43.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B98348").s().p("ApVArQDTAMCag8QCag+A0AYQA0AZA7gdQA7geB+AdQB8AcBBgLQBBgMBKA1QgrgKgwAXQgvAYhZgRQhYgRh+ABQh9AChlAGQhnAGhyAaQguAKg9AAQhXAAh1gVg");
	this.shape_86.setTransform(46.2,43.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B98348").s().p("ApZARQDzAyCdhIQCdhJAsANQAsANAlgJQAmgLCHAhQCIAgBFgVQBFgWBKA1QgvgSg1AaQg1AdhVgFQhVgEh5gYQh6gWhhAYIjUA0QgdAHgmAAQhmAAifgzg");
	this.shape_87.setTransform(45.8,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77}]}).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).wait(1));

	// Слой 5
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F8C685").s().p("AE4BYQhLgGhhg8Qhig6hbAbQhcAYhnANQhmAMjAiAQDjByCbg5QCag6AfAJQAiAJARAJICNA+QB7A3BEgTQBGgTA4BAQgogig4AYQgsASg3AAIgfgBg");
	this.shape_88.setTransform(47.6,26.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F8C685").s().p("AFCBIQhMgShpglQhqgihaAIQhdAIhoAJQhnAJi1hcQDNBLCXgvQCWgxAlAWQAnAVAmgHQAngHByAzQByAwBAgKQBBgLA5BBQgmgZgzAUQgaALghAAQgfAAgkgKg");
	this.shape_89.setTransform(47.7,26.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F8C685").s().p("AFLA9QhMgfhxgOIjMgVQhdgLhpAJQhoAHirg5QC4AlCTgnQCTgnArAiQAqAhA8gWQA8gYBqAuQBpArA8gBQA7gBA5BAQglgOgtAQQgPAFgUAAQglAAgygUg");
	this.shape_90.setTransform(47.9,26.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F8C685").s().p("AFVAxQhNgrh5AKQh5AKhagbQhdgdhrAHQhpAGiggWQCigDCPgdQCOgdAxAuQAwAuBRgnQBRgnBhApQBiAoA2AGQA3AIA5BAQgjgFgpANQgJACgLAAQglAAg8gig");
	this.shape_91.setTransform(48,27);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8C685").s().p("AFfAnQhOg2iBAfQh/AihcgwQhdgthsAEQhrAEiUAOQCMgqCLgTQCKgTA2A6QA3A4Blg0QBlg3BaAjQBZAkAxARQAzAOA4BBQghAFgjAIIgLACQgjAAhDgxg");
	this.shape_92.setTransform(48.2,27);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F8C685").s().p("AFoAdQhPhCiHA3QiIA5hchCQhdhAhtACQhsACiKAyQB3hSCHgJQCGgJA8BGQA8BEB6hEQB6hGBRAeQBRAfAtAaQAtAXA5BBQggAOgeAFIgEABQgfAAhKhBg");
	this.shape_93.setTransform(48.3,26.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F8C685").s().p("AFgAlQhOg4iBAkQiCAlhbgyQhdgxhsAEQhrAEiTAUQCJgxCKgRQCJgSA4A8QA4A6Bng3QBqg5BYAjICIA1QAxAQA5BAIhEAPIgIAAQgjAAhFgzg");
	this.shape_94.setTransform(48.2,27);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F8C685").s().p("AFYAtQhNgth7AQQh7AShbgiQhdgjhrAGQhrAGibgKQCbgQCNgaQCNgZAzAxQAxAyBYgsQBYgsBfAnQBeAnA1ALQA2AIA4BBQgigCgnALQgHACgJAAQglAAg/gng");
	this.shape_95.setTransform(48.1,27);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F8C685").s().p("AFQA3QhMgmh1gBQh1gChbgRQhdgUhqAIQhpAGilgoQCtASCRgiQCQgiAvAnQAtAoBGgeQBGggBmAsQBmAoA5AEQA5ADA5BAQgkgJgrAOQgMAEgPAAQgmAAg3gbg");
	this.shape_96.setTransform(47.9,27);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F8C685").s().p("AFIBBQhMgbhugVQhvgThbgEQhcgFhpAKQhpAGithEQC/AyCTgqQCUgqAqAdQApAeA1gRQA1gTBsAwQBtAtA9gEQA9gFA5BBQgmgSgvARQgSAHgXAAQgkAAgugQg");
	this.shape_97.setTransform(47.8,26.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F8C685").s().p("AFABLQhLgRhogoQhpgnhaAMIjFAUQhnAKi2hiQDQBRCYgxQCXgyAjATQAmAUAjgEQAkgFBzAzQB0AxBBgLQBBgMA5BAQgmgag0AVQgdALgjAAQgdAAgigHg");
	this.shape_98.setTransform(47.7,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88}]}).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_88}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-8.1,131.4,66.1);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_03();
	this.instance.setTransform(1.5,0,1,1,6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,15.9);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,14);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_17();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,35);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAAIgagfQABABAxAUQAxARAAAFQAAAUgUAAQgWABgfghgAgyggIABABIgBgBg");
	this.shape.setTransform(5.1,3.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,6.6);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_21();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,333,216);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_28();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,75);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_25();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49,58);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-427,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-427,-300,854,600);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-427,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-427,-300,854,600);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-427,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-427,-300,854,600);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-427,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-427,-300,854,600);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 88
	this.instance = new lib.Символ88();
	this.instance.setTransform(-23.6,39.8,1.447,1.447,0,0,0,52.2,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.8},4,cjs.Ease.get(0.94)).to({y:39.8},5,cjs.Ease.get(0.94)).wait(1));

	// Символ 87
	this.instance_1 = new lib.Символ87();
	this.instance_1.setTransform(-24.6,-2.4,1.447,1.447,0,0,0,52.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-5.4},4,cjs.Ease.get(-1)).to({y:-2.4},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-19.9,152.1,74.1);


(lib.Символ85 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ90();
	this.instance.setTransform(59,104.8,1,1,0,0,0,21.9,19.9);

	// Слой 1
	this.instance_1 = new lib.Символ91();
	this.instance_1.setTransform(27.2,95.7,0.62,0.62,0,0,0,26.4,56.4);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FA3C46").s().p("AkjD0Qh5hlAAiPQAAiOB5hlQB5hlCqAAQCrAAB5BlQB5BlAACOQAACPh5BlQh5BlirAAQiqAAh5hlg");
	this.shape.setTransform(47.4,102.6);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.1,60.8,82.6,76.4);


(lib.Символ81 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AEtAAQAAB9hZBXQhXBZh9AAQh8AAhYhZQhYhXAAh9QAAh8BYhYQBYhYB8AAQB9AABXBYQBZBYAAB8g");
	this.shape.setTransform(0.1,-0.6);

	// Слой 2
	this.instance = new lib.Символ83();
	this.instance.setTransform(0,-0.4,1,1,0,0,0,30,30);

	// Слой 1
	this.instance_1 = new lib.Символ82();
	this.instance_1.setTransform(0,-0.5,0.51,0.51,0,0,0,41.8,42);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.3,-33.6,80.7,66.4);


(lib.Символ80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ81();
	this.instance.setTransform(0,-0.5,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:720},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-33.6,80.7,66.4);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.setTransform(8,12,1,1,0,0,0,8,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},2).to({scaleX:1,scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.setTransform(13.5,12,1,1,0,0,0,13.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83,rotation:-1,x:14.3},2).to({scaleX:1,scaleY:1,rotation:0,x:13.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ73();
	this.instance.setTransform(-511,207.2,1,1,0,0,0,12.5,12.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:-645.1,y:143.6,alpha:0},15).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ72();
	this.instance_1.setTransform(-549.7,203.6,1,1,0,0,0,12.5,12.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:-638.5,y:157.1,alpha:0},16).to({_off:true},1).wait(14));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ71();
	this.instance_2.setTransform(-493.3,189.5,1,1,0,0,0,12.5,12.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-625.1,y:140.1,alpha:0},20).to({_off:true},1).wait(5));

	// Слой 1
	this.instance_3 = new lib.Символ70();
	this.instance_3.setTransform(-479.2,217.7,1,1,0,0,0,12.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-645.1,y:145.9,alpha:0},24).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491.7,205.4,24.9,24.7);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 62
	this.instance = new lib.Символ62();
	this.instance.setTransform(0,41.7,0.79,0.79,0,0,0,69.5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:39.2},12,cjs.Ease.get(-1)).to({y:41.7},7,cjs.Ease.get(0.98)).wait(1));

	// Символ 61
	this.instance_1 = new lib.Символ61();
	this.instance_1.setTransform(0.1,10.1,1.6,1.6,0,0,0,37.9,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:12.1},12,cjs.Ease.get(-1)).to({y:10.1},7,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-5.9,121.1,56.5);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(641,300);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(458,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},30).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({_off:true,x:458},29).wait(1));

	// Слой 1
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(457,300);

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.setTransform(215,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},30).to({state:[]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:215},30).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,0,854,600);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth_25.png
	this.instance = new lib.Символ54();
	this.instance.setTransform(44.2,25.4,1,1,0,0,0,44.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:43.9,y:27.2},1,cjs.Ease.get(1)).to({x:44.2,y:25.4},1,cjs.Ease.get(1)).wait(1));

	// mouth_18.png
	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(43,15,1,1,0,0,0,43,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:43.4,y:12.9},1,cjs.Ease.get(1)).to({x:43,y:15},1,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(42.6,22,1,1,0,0,0,35.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,89,44.9);


(lib.Символ37_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(150.5,0,0.54,1,0,0,0,100.5,0);

	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(100.5,10,1,1,0,0,0,100.5,0);

	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(85.5,20,0.65,1,0,0,0,100.5,0);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,205.6,21);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ37_1();
	this.instance.setTransform(77.3,-10,1,1,0,0,0,102.3,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-689.7},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-20.5,205.6,21);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 2 - копия
	this.instance = new lib.Символ35();
	this.instance.setTransform(646.5,35.2,1,1,0,0,0,100.5,0);

	// Слой 2
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(526.5,75.2,0.7,0.7,0,0,0,100.5,0);

	// Слой 1
	this.instance_2 = new lib.Символ34();
	this.instance_2.setTransform(284.5,49.5,1,1,0,0,0,284.5,49.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726.1,99);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(284.5,49.5,1,1,0,0,0,284.5,49.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,726.1,99);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(427,300,1,1,0,0,0,427,300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30,0,854,600);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(10.2,8,1.09,1.09,0,0,0,10.2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.7,22.2,17.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(9.5,7,1,1,0,0,0,9.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,14);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(15.5,17.5,1,1,0,0,0,15.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:17.6,rotation:-11,y:17.6},2,cjs.Ease.get(1)).to({regY:17.5,rotation:0,y:17.5},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,35);


(lib.Символ17 = function() {
	this.initialize();

	// Layer 4 - копия: 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(75.8,45.3,1.067,0.88,0,169.8,3.5,67.8,13.4);

	// Слой 1
	this.instance_1 = new lib.girl_07();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,0,197.5,76);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B4A9F").s().p("AllCdQAUh7g1hFQg2hIhFgzIg7gmQA3gxBwALQBvALBQgeQBPgdB6AiQB4AiBQAjQCAA3CLgcQBFgNAsgZIAEATQADAWgBAWQgEBEgzAgQgoAYingDQi3gFgqALQh+Ali7B3QheA7hDA0QAVgvAKg/g");
	this.shape.setTransform(49.4,117);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B4A9F").s().p("AnlDcIAEgvQAKhaAZgxQAJgYgEgTQgBgggggjQglgpgxgaQghgRgkgOQAQgRAUgOQAxghBZACQAuACAuABQBCAAA4gLQBRgNBdAMQAYADAYAEQBUAMA/AIQAoAEAmALIBdAbQBlAdBmgQQARgDARgEQA0gMAjgUIAGAVQABAPAAAOIgBAUQgGAtgdAbQgPAPgZANQgqAUhrAMIhOAEQijAGhbASQhJARhYAeQhjAhhjAvQhxAyhLAvQgGgOgFgSg");
	this.shape_1.setTransform(43.7,118.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B4A9F").s().p("ApcC9QAHhiBEgoQAcgSAJgTQAWgfgngsQgogsg5gYQgmgQgrgHIAkgmQAuguBlgCQAwgBA2ADQBHAEA+gDQBigEBdAGIA0ADQBhAEBDgGQAqgEAuAIQAwAKA3ASQBxAmBrgOIAlgGQA8gNAjgVIAFAYQACARAAAPQgBAMgCAKQgIAvgmAbQgSANgeANQg1AVhuATQglAHgvAHQiOAPiNAXQhSAQhkAXQh3AZhoAjQiDAohUAqIgsAFQgCgbABgYg");
	this.shape_2.setTransform(37.9,119.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B4A9F").s().p("ApkBDQCJgkhFhOQhGhQiDgFIAkguQBAhRDLATQDMATCVgBQCTgBBZgZQBYgYB7AuQCUA3CDgZQBBgNAkgXIAFASQAEAXgCAVQgEBFg6AfQg3AeiwAtQiwAumuA5QmwA5iIBcQgciaCKgkg");
	this.shape_3.setTransform(32.1,121.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B4A9F").s().p("AoOBEQA4gThNhKQg6g+hjgNQBHg1A7gMQBagzCqAOQCqAOB9gJQB6gJBegBQBkACB4AXQB1AgBhgZQAtgFAYgNQADAOABANQABAmgRAZQgTA3hYAlQhXAhjvAyQjwAzkmATQkaAWgvAsQAZh4A5gUg");
	this.shape_4.setTransform(36.1,117.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B4A9F").s().p("AmUCwQiGgNArgFQBOhXgZgCQgZgChUhFQguguhDgUQB7hTBlgCQB0gVCJAJQCIAJBigQQBkgRBjAXQBxAcB0gBQBWAJBAgYQAXACAOgBQADASgBARQgBA1ghAcQghAph3AqQh2ApkwA1QjhAoiSAAQgxAAgogEg");
	this.shape_5.setTransform(40.1,114.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B4A9F").s().p("AoSCqQAQgwCEg1QCDg1hqAOQhrAPhahBIhGg4QCwhxCOAJQCOAJBnAEQBlAEBLgYQBLgZBpAuQB+A3BvgZQA4gNAfgXIAEASQADAXgBAVQgEBFgxAfQgvAciWAvQiWAultA5Qi6AdhiAAQhfAAgLgbg");
	this.shape_6.setTransform(44.2,115.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B4A9F").s().p("AnxDNQAAgEABgEQAZglA1gsQANgNAQgMQBZg9hRgIIgcgGQhOgUhLg2IgKgHIg+gtIgBAAQBVg5BkgVQBKgSBBABIBQgBQBVAABRAKIA9AFQA+AEA0gGQA7gEBBAUQAaAIAbAKQB7AwB1gYQA6gNAggTQAOARAEAHIABATQAAAXgFAUQgJAmgcAXQgRANgcALQgvAWhqAUQghAHgrAHQiMAQh9AXQhMAPhcAXQhyAahdAYQhrAUguAAQgPAAgJgCg");
	this.shape_7.setTransform(43,115.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B4A9F").s().p("AmfCQIARggQAwhEg4geIgXgPQhEgshKg0IgLgHIhAgpIAAAAQBJg1B0gSQBMgMBAgEIBQgGQBNgFBaAQIA9ALQA8ALA0AGQA/AJA7AUIA1ASQB5AnB6gWQA6gLAjgQIAdADIADATQACAXgDAVQgGAngZAZQgPAQgaANQgqAShzAMIhNAHQiwAFhXASQhKARhZAeQhnAhhlArQh4Ang1AUIgHABQAYgrAgg1g");
	this.shape_8.setTransform(41.9,115.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B4A9F").s().p("AmbCoQAXh7g9hFQg+hIhQgzIhDgmQA/gxCDgNQCDgNBagOQBagOCLArQCJAqBcAjQCUA3CfgcQBPgNAzgZIAEATQAEAWgBAWQgFBEg6AgQguAWjAgDQjTgDgxALQiRAljXB3QhrA7hOA0QAYgvAMg/g");
	this.shape_9.setTransform(40.8,115.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Слой 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B6C9F").s().p("An+EiIhTgpQArgSAgggQA/g/g9hIQg+hFhZhCIhOgzQBAgxBZgwQCzhfCAAIQBGAECAAkQB7AiCUA3QCUA3DdgRQBwgIBRgUQgkAeguAlQheBIg6AdQgyAciQAdQidAdg5AOQgoALhqgBQhhAAhBAZQglAPgvA6Qg3BDgXAPQgYARgjAAQgkAAgxgSg");
	this.shape_10.setTransform(49.4,127.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B6C9F").s().p("AoFEhQABgIgIgVIgCgHQgDgZgQgcQAAgbgRgiIgGgLQglhAg9g7IghggQgjglgUgfQAFgMAJgKQA7guBGgmIAcgPQCihTB5AFQBUAHB0AhIALADQB3AjCQA3QCQA2DogQIAjgDQBagIBIgOQAGAIACAJIgWATQgqAjgpAfQglAcgdASQg1AmhCAVQgZAJgoACQhJAHhPgEIhIAAQhEgDhOAAQgRAAgNACQg+AIhCAeIgLAFQgqAWgnAiQgjAbgWAPIghAZQgYARgfAQQgiATgiACQgOAEgLgBIgJABQgXAAgbgHg");
	this.shape_11.setTransform(43.7,126.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B6C9F").s().p("AomEgQgugSglgZQAAgZgMgnQgZhPg9hIQg9hGgCgzQAAgQAGgMIAFgJQA/gwBYguQCwhdCBAKQBEAFB/AmQB8AlCQA5QCSA5EPgWQCIgMBqgXQguAsg7AxQhyBgg6AeQgrAXi3glQjDgng0ALQg0ANhXAsQhrA3guASQgmAOgvA6Qg1BBgXAQQgXAPghAAQglAAgxgTg");
	this.shape_12.setTransform(41,127.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1B6C9F").s().p("AoPEWIgLgJIg8g1QgCgRgIgXIgHgUQgdhMghhNQg8g9gQgrQgGgNAGgMQAbgZAcgRQAwgeA2gbQByg5BegLQAwgHAwAGQArAFBBAQQAnAKAuAOQBcAbBnAnIBHAaQB3ApC+gHQAygCA0gFQA2gFAwgHIA9ADIAQAAQgyAsg3AsIgUAPQhYBEhJAcQhQAViLgWIgZgCQhNgLhFgEQgygEgbAFQglAIgwAVQgYALgbAQQgZAPgWAPQhBAqggAOQgmARgzAnQgRANgPAKQgfAXgUAEQgMAFgNABIgFABQgSAAgfgUg");
	this.shape_13.setTransform(43,126.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B6C9F").s().p("An/EiQACgDgNgZIgDgLQgHgegdgjQgEgRgKgVIgJgSQghhIgEhRQg7g0ggglQgLgKAHgMQAYgYAfgSQAxgdA1gYQBzg1BcgGQAtgEAzAIQAsAHA+AQQAoAKAsAOQBaAbBnAnQAiANAlALQB6AmC4gJQAygDAygGQA1gFAugJQAMALACAOIADAGQg2Atg0AlIgUAPQhLA1heAcQhkAXhwgKIgZAAIiTgGQgtgDgdAFQgrAHgsATQgXAKgbATQgWAPgWASQg9AygdAOQgmAUg3AWQgSAHgSAEQgfAKgXgCIgMABIgMgBg");
	this.shape_14.setTransform(45,126);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1B6C9F").s().p("AnqEjQgfgCgbgJIgYgFQAYgLAJgcIAEgNQANgkgZgoQgGgRgMgSIgKgRQgmhEAZhWQg6gqgvgfQgQgHAHgNQAXgVAhgTQAzgdAygVQB0gyBcAAQApgBA2AKQAtAIA7ARIBUAXQBZAcBmAmQAhANAlAKQB8AiCygLQAzgEAwgGQA0gGAtgKQgMAVgWAZIgLAMQg6AugwAgIgVANQg9AnhzAcQh3AZhXACIgZACQg0AEhdgCQgsgBggAFQgtAGgpARQgWAJgaAVQgVAQgUAVQg5A6gbAPQgmAXg7AEIgRABIgWgCg");
	this.shape_15.setTransform(49.1,126.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1B6C9F").s().p("AotEiIhUgpQAsgSAgggQA/g/g9hIQg+hFBChsIh7gxQgugJBZgwQCyhfCBAIQBFAECBAkQB9AiCSA3QCUA3DdgRQBvgIBRgUQgjAegvAlQhdBIg6AdQgzAciPAdQieAdg4AOQgoALhrgBQhgAAhBAZQglAPgwA6Qg2BDgXAPQgYARgjAAQgkAAgxgSg");
	this.shape_16.setTransform(54.1,127.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B6C9F").s().p("AoMEiQgNgCgQgFQgngSgrgdQAFgGAEgIQAdAAAagRQAmgdAGgwQACgbgNgaQgYg3gMg2QgGgYAEgaIhQggQgagKgMgJIgBAAIgEgFQgEgLBCghQBQgmA/ghQBRgpBQADIAiACQA+AIBnAeQB7AkCCAzIAUAIQCIAyDUgPIAagCQBqgJBRgTQggAhgtAlIgLAJQhVBGg1AdQgMAIgPAGQgxAVh3AGIgeABQiGAHg2AIIgiAFIhtASIgWAEQhTASg0AVIgMAGQghAQgpAzQgzBCghAEIgLACIgfABQgiAAgngEg");
	this.shape_17.setTransform(52.2,126.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1B6C9F").s().p("AmVEeQgHAAgFgCQg2gNgxAEQgOACgQgGQgjgOgtgmIgGgSQAeAQAcgMQAkgSAVg1QAKgbgDgZQgDg9gugqQgTgUgLgSIhQggQgggLgDgKIgBAAIABgHQAUgLA0gYQBUgjA6grQBHg1BYAAQAQAAASACQA9AGBpAgQB7AmCDA3IAUAHQCGAxDcgSIAbgCQBqgKBUgUQglAmgsAnIgLAJQhTBIg0AhQgNAIgNAHQgrAViAgMIgfgDQiFgLg6ADIggAEQgpAJhDAXIgWAIQhSAhgxAUIgMAGQggAPgqA1QgsA5gmAAIgIAAg");
	this.shape_18.setTransform(50.4,125.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1B6C9F").s().p("AmcEQQg7gdgrAPQgrAOhVhfQBABEBDhrQBDhshogqQhogtgkgMQglgNAFgLIAFgJQCTgjBLhMQBMhMB1AKQA+AFB0AmQBwAkCEA6QCFA5D2gXQB8gLBggXQgqArg1AxQhoBhg1AeQgnAXimgmQiygogwAMQgvANhPAtQhhA3gqASQgiANgrA6QgiAtgmAAQgRAAgTgJg");
	this.shape_19.setTransform(48.3,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	// Слой 2 - копия: 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B4A9F").s().p("AmbDXQAXh7g9hIQg+hFhQg0IhDgmQA/gxBZgvQCyhgCCAIQAwADB6BJQCWBbBdAiQCUA3CfgbQBQgOAygYIAEASQAEAXgBAVQgFBFg6AdQguAZjAgEQjTgEgxAMQiRAmjXB3QhrA7hOA0QAYgwAMg+g");
	this.shape_20.setTransform(48.3,136.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1B4A9F").s().p("AmODFQAThrhCg/QhCg8hQg0IhDgmQA/gxBZgwQCyhfCCAIQAwADB6BIQCWBbBdAjQCUA3CfgbQBQgOAygZQAIApgBAWQgFBDg6AfQguAYjAgDQjTgFgwgEQhwALjCBqQh7BCgsBGQgiguAKhCg");
	this.shape_21.setTransform(48.3,135.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1B4A9F").s().p("AmACzQANhahGg3QhGg0hQg0IhDgmQA/gxBZgwQCyhfCCAIQAwADB6BIQCWBbBdAjQCUA3CfgbQBQgOAygZQAIApgBAWQgFBDg6AfQguAYjAgDQjTgFgvgWQhQgNisBdQiLBJgKBYQhcguAJhFg");
	this.shape_22.setTransform(48.3,133.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B4A9F").s().p("AlyChQAHhKhKguQhKgshQg0IhDgmQA/gxBZgvQCyhgCCAIQAwADB6BJQCWBbBdAiQCUA3CfgbQBQgOAygYIAEASQAEAXgBAVQgFBDg6AfQguAZjAgEQjTgEgvgnQgugoiYBQQiaBQAZBqQiXgsAIhJg");
	this.shape_23.setTransform(48.3,132.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1B4A9F").s().p("AmbCbQAchHg7gwQg7gvhQg0IhWhKQBSgNBZgvQCyhgCBAIQAxADB6BJQCWBbBdAiQCTA3CggbQBPgOAygYQAJApgCAVQgEBDg6AfQguAZjBgEQjTgEgvgWQhQgOisBdQiKBJg1BJQhpg8AchHg");
	this.shape_24.setTransform(47.3,132.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1B4A9F").s().p("AnECWQAwhEgsgzQgsgxhQg0IhphvQBlAYBZgwQCyhfCBAIQAxADB6BIQCWBbBdAjQCTA3CggbQBPgOAygZQAJApgCAWQgEBDg6AfQguAYjBgDQjTgFgwgEQhxALjBBqQh7BCiAAoQg8hMAwhEg");
	this.shape_25.setTransform(46.4,133.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1B4A9F").s().p("AntCQQBEhBgdg2Qgdg0hQgzIh7iTQB3A8BZgwQCyhfCCAIQAwADB6BIQCWBbBdAjQCUA3CfgbQBQgOAygZIAEATQAEAWgBAWQgFBDg6AfQguAYjAgDQjTgFgxANQiRAljXB3QhrA7jOAHQgOhcBEhCg");
	this.shape_26.setTransform(45.5,134.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1B4A9F").s().p("AnRCoQA0hVgng7Qgog6hQg0IhphuQBlAXBZgvQCyhgCBAIQAxADB6BJQCWBbBdAiQCTA3CggbQBPgOAygYQAJApgCAVQgEBDg6AfQguAZjBgEQjTgEgwAMQiRAmjXB3QhsA7ijAWQgBhNAyhBg");
	this.shape_27.setTransform(46.4,135.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1B4A9F").s().p("Am2DAQAmhpgzhBQgyg/hQg0IhWhKQBSgNBZgwQCyhfCBAIQAxADB6BIQCWBbBdAjQCTA3CggbQBPgOAygZQAJApgCAWQgEBDg6AfQguAYjBgDQjTgFgwANQiRAljXB3QhsA7h4AlQALg+Afg/g");
	this.shape_28.setTransform(47.3,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(111,135.5,1,1,0,0,0,111,135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,0,247.2,271);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(42.5,43,1,1,0,0,0,42.5,43);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(166.5,108,1,1,0,0,0,166.5,108);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,333,216);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(33.5,16,1,1,0,0,0,10.2,8);

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(13,6,1,1,0,0,0,9.5,7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.5,-1,41.1,25.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ65();
	this.instance.setTransform(17,16.1,1,1,0,0,0,4.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:5.3,rotation:24,x:15.5,y:17.5},1,cjs.Ease.get(1)).to({regY:5.4,rotation:0,x:17,y:16.1},1,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(15.5,17.5,1,1,0,0,0,15.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.2,35);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(42.5,43,1,1,0,0,0,42.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:720},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(57.5,76,1,1,0,0,0,42.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(46,37.5,1,1,0,0,0,46,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:47,y:38.5},9,cjs.Ease.get(1)).to({x:46,y:37.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,119);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.setTransform(72.6,81.2,1,1,0,0,0,72.6,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.2},10,cjs.Ease.get(1)).to({x:72.6},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,162.5);


(lib.Символ89 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ86();
	this.instance.setTransform(143.5,38.6,0.88,0.88,0,0,0,52.5,31.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.3,-6.2,133.8,65.2);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 1
	this.pric = new lib.Символ80();
	this.pric.setTransform(30.8,72.9,1,1,0,0,0,0.7,42.1);
	this.pric.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-2.9,80.7,66.4);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ69();
	this.instance.setTransform(475,-220.1,1,1,0,0,0,7.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAhAtQg+gNhEAEQhFADgCgdQgBgaBGgWQBHgWBAAPQBCAPAkAQQAjAPgFAQQgGARghAMQgQAGgXAAQgYAAghgHg");
	this.shape.setTransform(31,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AifBGQgLgbA8grQA8gqA+gYQBAgZArAZQArAXAAARQgBARgaAFQgaAEhAACQg+ADhCAuQgqAcgTAAQgLAAgEgJg");
	this.shape_1.setTransform(31.9,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F304F").s().p("AiXBiQhHgFAOhDQAOhBA+gIQA9gJBTgaQBVgZA+AJQA+AJgMBCQgMBAg5AdQg6AdhSACIgmAAQg8AAg1gDg");
	this.shape_2.setTransform(21.2,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F304F").s().p("AhyBiQgsgSgRg7QgQg4A7gkQA7gkBTgCQBVgCAkAQQAkAQAKBAQALA+gyAaQgxAbhRAIQgWADgVAAQgxAAgegNg");
	this.shape_3.setTransform(21.4,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-22.5,72.5,42.9);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(161.7,-7.7,0.14,0.14,0,0,0,73.2,81.5);

	// Слой 1
	this.instance_1 = new lib.Символ64();
	this.instance_1.setTransform(76,-6.9,0.82,0.82,0,0,0,75,9.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.5,-19.1,157.3,22.8);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ63();
	this.instance.setTransform(173.2,214.8,1,1,0,0,0,75,9.1);

	// Слой 2
	this.instance_1 = new lib.Символ60();
	this.instance_1.setTransform(191.6,131.1,1.47,1.47,0,0,0,0,22.3);

	this.text = new cjs.Text("", "22px 'KomikaAxis'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.setTransform(254.1,250.8);

	// Слой 1
	this.instance_2 = new lib.Символ59();
	this.instance_2.setTransform(191.6,130,1,1,0,0,0,191.6,114);

	this.addChild(this.instance_2,this.text,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,16,383.1,274.7);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 4
	this.instance = new lib.Символ89();
	this.instance.setTransform(192.8,147.8,1.24,1.24,0,0,0,76.2,37);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ85();
	this.instance_1.setTransform(154.5,188.7,1.08,1.08,0,0,0,12.5,55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(191.6,114,1,1,0,0,0,191.6,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-136},3,cjs.Ease.get(1)).wait(1).to({y:114},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16,383.1,274.7);


(lib.Символ44 = function(mode,startPosition,loop) {
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

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.setTransform(50,32,1,1,0,0,0,13.5,12);

	this.instance_1 = new lib.Символ76();
	this.instance_1.setTransform(50,32,1,1,0,0,0,13.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Символ 48
	this.instance_2 = new lib.Символ48();
	this.instance_2.setTransform(80.5,32,1,1,0,0,0,8,12);

	this.instance_3 = new lib.Символ77();
	this.instance_3.setTransform(80.5,32,1,1,0,0,0,8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ52();
	this.instance_4.setTransform(69.4,57.6,0.71,0.71,-6,0,0,44.5,25.3);

	this.instance_5 = new lib.Символ75();
	this.instance_5.setTransform(70,55.8,1,1,0,0,0,21.2,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ49();
	this.instance_6.setTransform(59.5,29.5,1,1,0,0,0,58.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-18,117,95);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// zombie_06.png
	this.head = new lib.Символ44();
	this.head.setTransform(-193.5,-70.5,1,1,0,0,0,68.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.head).to({rotation:14,y:-66.5},4,cjs.Ease.get(1)).to({rotation:0,y:-70.5},5,cjs.Ease.get(1)).to({rotation:14,y:-66.5},4,cjs.Ease.get(1)).to({rotation:0,y:-70.5},5,cjs.Ease.get(1)).to({rotation:14,x:-190.5,y:-67.5},4,cjs.Ease.get(1)).to({rotation:0,x:-193.5,y:-70.5},5,cjs.Ease.get(1)).wait(1));

	// zombie_23.png
	this.instance = new lib.Символ43();
	this.instance.setTransform(-207.5,-25,1,1,0,0,0,11.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-17},4,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(1)).to({rotation:-17},4,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(1)).to({rotation:-17},4,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(1)).wait(1));

	// zombie_19.png
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(-199.5,-23.5,1,1,0,0,0,42.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:7,x:-198.5},4,cjs.Ease.get(1)).to({rotation:0,x:-199.5},5,cjs.Ease.get(1)).to({rotation:-2,x:-198.5,y:-23.6},4,cjs.Ease.get(1)).to({rotation:0,x:-199.5,y:-23.5},5,cjs.Ease.get(1)).to({rotation:5,y:-23.6},4,cjs.Ease.get(1)).to({rotation:0,y:-23.5},5,cjs.Ease.get(1)).wait(1));

	// zombie_17.png
	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(-199.5,-41.5,1,1,0,0,0,10.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.6,rotation:-20},4,cjs.Ease.get(1)).to({regX:10.5,rotation:0},5,cjs.Ease.get(1)).to({regX:10.6,rotation:-20},4,cjs.Ease.get(1)).to({regX:10.5,rotation:0},5,cjs.Ease.get(1)).to({regX:10.6,rotation:-20},4,cjs.Ease.get(1)).to({regX:10.5,rotation:0},5,cjs.Ease.get(1)).wait(1));

	// nog1
	this.instance_3 = new lib.Символ41();
	this.instance_3.setTransform(-193.5,32,1,1,0,0,0,65.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},1,cjs.Ease.get(1)).wait(1));

	// nog2
	this.instance_4 = new lib.Символ46();
	this.instance_4.setTransform(-201.5,21.9,1,1,0,0,0,29.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},1,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_5 = new lib.Символ50();
	this.instance_5.setTransform(-175.4,155.3,1,1,0,0,0,101.5,21.1);
	this.instance_5.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.9,-177,203.1,353.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.zomb_1 = new lib.Символ40();
	this.zomb_1.setTransform(71.5,74.5,1,1,0,0,0,71.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.zomb_1).to({x:111.5},14,cjs.Ease.get(1)).to({x:91.5},15,cjs.Ease.get(1)).to({x:71.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.9,-177,203.1,353.3);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(148.1,75,1,1,0,0,0,119.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5},12,cjs.Ease.get(1)).to({rotation:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,0,197.5,76);


(lib.Символ5 = function(mode,startPosition,loop) {
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

	// eye
	this.instance = new lib.Символ10();
	this.instance.setTransform(121.2,37.4,1,1,0,0,0,9.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// rot
	this.instance_1 = new lib.Символ69();
	this.instance_1.setTransform(582.4,-199,1,1,0,0,0,7.8,7.8);

	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(124.4,64.5,0.86,0.86,0,0,0,15.5,17.5);

	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(123.5,64.5,1,1,0,0,0,5.1,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	// head
	this.instance_4 = new lib.Символ31();
	this.instance_4.setTransform(71.3,35.5,1,1,0,0,0,99.8,38);

	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(85.5,38,1,1,0,0,0,85.5,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-2.5,197.5,82);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_07.png
	this.head = new lib.Символ5();
	this.head.setTransform(162.5,-40.6,1,1,0,0,0,85.5,38);

	this.timeline.addTween(cjs.Tween.get(this.head).to({regY:38.1,rotation:-7.5,x:172.5,y:-30.5},14).to({regY:38,rotation:0,x:162.5,y:-40.6},15).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(1).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(2).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(1).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(2));

	// Символ 16
	this.instance = new lib.Символ16();
	this.instance.setTransform(132.6,108,1,1,0,0,0,111,135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3.8,x:141.6},14).to({scaleY:1,skewX:0,x:132.6},15).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(1).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(2).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(1).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(2));

	// siska
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(185,29.4,1,1,0,0,0,24.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:28.9,rotation:15,x:189,y:28.4},14).to({regY:29,rotation:0,x:185,y:29.4},16).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(1).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(2).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(1).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(311.6,217,1,1,0,0,0,46,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({rotation:-4,x:314.4,y:213.8},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(1).to({rotation:3,x:309.1,y:229.7},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(2).to({rotation:-3,x:313.8,y:216.2},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(1).to({rotation:-2,x:313,y:218.5},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(2));

	// Символ 11
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(164.6,153,1,1,0,0,0,166.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({rotation:-4,x:163.3,y:160.3},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(1).to({rotation:3,x:165.6,y:158.1},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(2).to({rotation:-3,x:163.6,y:160},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(1).to({rotation:-2,x:163.9,y:159.6},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(2));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(64.1,255.5,1,1,0,0,0,42.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({rotation:-4,x:70.3,y:269.5},5,cjs.Ease.get(-0.57)).to({rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(1).to({rotation:3,x:59.9,y:255.2},5,cjs.Ease.get(-0.57)).to({rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(2).to({regY:43.1,rotation:-3,x:68.6,y:267.6},5,cjs.Ease.get(-0.57)).to({regY:43,rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-2,x:67,y:265.5},5,cjs.Ease.get(-0.57)).to({rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(2));

	// Слой 2
	this.instance_5 = new lib.Символ51();
	this.instance_5.setTransform(199.5,294.8,1,1,0,0,0,186.1,12);
	this.instance_5.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({y:306.8},5).to({y:294.8},5).wait(1).to({y:306.8},5).to({y:294.8},5).wait(2).to({y:305.8},5).to({y:294.8},5).wait(1).to({y:303.8},5).to({y:295.8},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-81.1,389.1,387.9);


(lib.Символ93 = function() {
	this.initialize();

	// Слой 1
	this.zomb = new lib.Символ39();
	this.zomb.setTransform(348.4,251.5,1,1,0,0,0,71.5,74.5);

	this.addChild(this.zomb);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203.1,353.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl_1 = new lib.Символ2();
	this.girl_1.setTransform(168.5,237.2,1,1,0,0,0,166.5,135.5);

	this.timeline.addTween(cjs.Tween.get(this.girl_1).to({x:218.5},15,cjs.Ease.get(-1)).to({x:268.5},15,cjs.Ease.get(1)).to({x:216.8},15,cjs.Ease.get(-1)).to({x:168.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,20.6,389.1,387.8);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.girl = new lib.Символ32();
	this.girl.setTransform(157.6,152.6,0.85,0.85,0,0,0,183.7,200.1);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1).to({scaleX:1.01,scaleY:1.01,x:187.3,y:181.3},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.85,scaleY:0.85,x:157.6,y:152.6},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,330.8,329.7);


// stage content:



(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.pric.gotoAndPlay(1);
			_this.zomb_2.zomb.zomb_1.head.gotoAndPlay(0);
			_this.text.gotoAndPlay(1);
			_this.girl_2.girl.girl_1.head.gotoAndPlay(1);
			
			
			
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.pric.gotoAndPlay(2);
			_this.zomb_2.zomb.zomb_1.head.gotoAndPlay(1);
			_this.text.gotoAndPlay(5);
			_this.girl_2.girl.girl_1.head.gotoAndPlay(0);
			
			
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pric
	this.pric = new lib.Символ84();
	this.pric.setTransform(-94.6,204.4,1,1,0,0,0,30.1,35);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// text
	this.text = new lib.Символ57();
	this.text.setTransform(150.1,53,1,1,0,0,0,191.6,114);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// girl
	this.girl_2 = new lib.Символ92();
	this.girl_2.setTransform(303.2,328.5,1,1,0,0,0,274.4,81.3);

	this.timeline.addTween(cjs.Tween.get(this.girl_2).wait(1));

	// zombie
	this.zomb_2 = new lib.Символ93();
	this.zomb_2.setTransform(132.2,404.6,1,1,0,0,0,174.2,176.7);

	this.timeline.addTween(cjs.Tween.get(this.zomb_2).wait(1));

	// road
	this.instance = new lib.Символ25();
	this.instance.setTransform(196.5,551.5,1,1,0,0,0,284.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(173,300,1,1,0,0,0,427,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,255,862.1,646.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
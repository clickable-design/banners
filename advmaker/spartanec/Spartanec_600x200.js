(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 200,
	fps: 28,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/crackedglassEPW.png", id:"crackedglassEPW"},
		{src:"images/fire.png", id:"fire"},
		{src:"images/lance.png", id:"lance"},
		{src:"images/spark.png", id:"spark"},
		{src:"images/spartanec_03.png", id:"spartanec_03"},
		{src:"images/spartanec_06.png", id:"spartanec_06"},
		{src:"images/spartanec_10.png", id:"spartanec_10"},
		{src:"images/spartanec_14.png", id:"spartanec_14"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,848,390);


(lib.crackedglassEPW = function() {
	this.initialize(img.crackedglassEPW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,315);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,996,85);


(lib.lance = function() {
	this.initialize(img.lance);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,86);


(lib.spark = function() {
	this.initialize(img.spark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,145);


(lib.spartanec_03 = function() {
	this.initialize(img.spartanec_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,166);


(lib.spartanec_06 = function() {
	this.initialize(img.spartanec_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,59);


(lib.spartanec_10 = function() {
	this.initialize(img.spartanec_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,86);


(lib.spartanec_14 = function() {
	this.initialize(img.spartanec_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,229);


(lib.Символ79 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhsFuQABgBg7iJQg8iJABAAQABgBABhkQABgBgNiGQABgBAEhyQACgCAUgtQAEgJAXgVQAXgUAAAAIA1gjQBAgHABgBQBmgEABgBQAAAAAeAKQAeALAAgBQAAAAAvAhQAwAhAAgBQAAAAAEAYQAEAbACAHQACAGACAdQACAgABAIQADAKgGBoIgHBjQgVB7ABgBQguBRABgBQhOCXABgBQABgBhPAdQABgBgigCQgjgCAAAAQABgBgRgIQgRgIABgBQAAAAgGgIQgGgIgBgBg");
	this.shape.setTransform(23.7,40.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbGTIgjgCIgQgJIgRgJIgGgIIgGgJIg7iKIg7iJQABgBAChkQAAgBgNiGQABgBAEhyQACgCAVgtQADgJAYgVIAWgUIA1gjQBAgHABgBQBmgEABgBIAeAKIAeAKIAwAhIAvAgIAEAYQAEAbACAHQACAGACAdQACAgABAIQACAKgFBoIgGBjQgWB7ACgBIgtBQIhOCWIhOAcIgggDgABTF6IAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(23.7,40.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,49.3,83.3);


(lib.Символ77 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spartanec_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,166);


(lib.Символ76 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.crackedglassEPW();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,315);


(lib.Символ73 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI2B6QgHgHAAgJQAAgKAHgHQAHgIAKAAQAKAAAHAIQAHAHAAAKQAAAJgHAHQgHAHgKAAQgKAAgHgHgAGrB+IAAgNQAOgBAJgCQAJgDAAgEIgBgIIgVg4IhXAAIgOAnIgDAMIgBAIQAAAHALAEQALAEAOAAIAAANIheAAIAAgNIALgCIAMgEQAHgFAEgFIAHgOIBSjQIAOAAIBTDVIAGALIAKAIIAKAFIALABIAAANgAGvAYIgmhfIglBfIBLAAgABWB+IAAgNIAagDQAFgCADgFQACgEAAgGIAAiyQAAgGgCgFQgCgEgGgDIgNgEIgNgCIAAgNIDAAAIAABGIgNAAIgEgOIgJgSIgMgPQgGgGgIgBIhDgCIAADGQAAAGADAFQADAEAGADIAMADIAPACIAAANgAgWB+IAAgNQAOgBAIgCQAIgDAAgEIgCgIIgSg4IhYAAIgOAnIgDAMIgBAIQAAAHALAEQAMAEANAAIAAANIhdAAIAAgNIALgCIALgEQAHgFAEgFIAIgOIBSjQIAOAAIBRDVIAGALIAJAIIALAFIALABIAAANgAgTAYIgmhfIglBfIBLAAgAlzB+IAAgNIANgBIALgCQAFgDADgEQACgEAAgHIAAiyIgCgLQgCgFgGgDIgZgEIAAgNIByAAQAjAAAWARQAVARAAAcQAAATgHAPQgIAPgNAKQgOAIgQAFQgQAEgSAAIgcAAIAABMQAAAGACAFQACAEAHADIALACIAPABIAAANgAksABIASAAQATAAAMgEQAMgGAGgJQAGgIACgJIACgQQAAgKgDgLQgCgKgGgIQgGgIgKgFQgKgEgPAAIgZAAgApeB+IAAgNIAYgEQAFgCADgEQACgFAAgGIAAixQAAgGgCgFQgCgFgGgCIgMgEIgLgCIAAgNIBzAAQAOAAAMADQAMADALAGQALAGAGALQAHALAAAPQAAANgFAKQgFAKgIAIQgIAHgLAFQgKAEgMADIAAACQAKABAOAEQANACAKAIQALAHAHAMQAIAMAAARQAAARgIANQgHANgNAIQgLAIgPAFQgPAEgQAAgAoXACIAABYQAAALAJAFQAJAGAQAAQAaAAAOgPQAOgQAAgdQAAgXgPgOQgOgOgcAAgAoXhrIAABgIAXAAQAOAAAKgEQAKgEAHgHQAGgIADgJQACgJAAgMQAAgVgLgLQgLgMgYAAgAJAAyIgPiaQAAgKAGgHQAGgHAKAAQAKAAAGAHQAHAGAAALIgQCag");
	this.shape.setTransform(60.8,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121.6,26);


(lib.Символ72 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD835").s().p("AkfBlQgGgFAAgHQAAgFAEgEQADgFAGAAQADABADABIAFAFIAEAFIADAFQAJgCAFgHIALgQIg0hiIgEgFQgDgEgEgCIgHgCIgHgCIAAgIIBDAAIAAAIIgNACQgHABAAACIABAEIAqBPIAghJIABgGQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgGgCIgOgDIAAgIIA7AAIAAAIIgHACIgIACQgDADgDADIguBgQgHAOgGAJQgHAJgGAFQgHAGgFABQgGACgGAAQgJAAgHgFgAD5BnIAAgIIAIAAIAHgCQAEgBABgCQACgDAAgFIAAhhIhNBeIAAADIABAGQABACAEACIAHACIAIABIAAAIIhCAAIAAgIIAIAAIAHgCIAFgDQACgDAAgFIAAhxQAAgEgCgCQgBgDgEgCIgHgCIgIgCIAAgIIBCAAIAAAIIgIABIgHACQgDABgCADIgBAHIAABfIBNheQAAgEgBgDQgCgCgDgCIgQgEIAAgIIBCAAIAAAIIgIABIgGACQgEABgCADIgBAHIAABxIABAHQACADAEABIAGACIAIABIAAAIgAAABnIAAgIIAOgCQAEgBABgDQACgDAAgEIAAhxQAAgEgCgCQgBgDgEgCIgIgCIgGgCIAAgIIB5AAIAAAnIgIAAQgCgJgIgJQgHgKgHgBIgIgBIgkAAIAAA+IARAAQAJAAAEgCQAEgCADgDQADgEABgFIADgIIAIAAIAAA8IgIAAIgDgMIgEgJQgDgEgFgBQgEgBgIAAIgRAAIAAAwIABAKQABAFACACQADACAFAAIAZABIATgCQAEgBACgCQAFgFAGgLQAGgMABgFIAIAAIgDAvgAiVBnIAAgIIAQgCQADgBACgDQABgDAAgEIAAhxQAAgDgBgEQgBgCgEgCIgIgDIgHgBIAAgIIB4AAIAAAnIgJAAQgCgJgHgJQgIgKgGgBIgJgBIgiAAIAAA5IAWgBQAMABAMACQALACAJAFQAJAGAFAJQAFAIAAAMQAAANgFAIQgFAKgIAFQgIAGgJADQgKACgKAAgAhnBQQAAAIAEADQAFAEANgBQARAAAJgKQAJgKAAgTQAAgPgKgKQgLgIgRgBIgTAAgADVhEQgIgCgFgFQgFgDgCgFQgCgEAAgFQAAgFADgEQADgEAFAAQAEABAEACQAEADAAAFIgCAIIgCAGQAFAFAGABIAMACIANgCQAHgBAFgFIgDgGIgBgIQAAgFADgDQAEgCAEgBQAFAAAEAEQADAEAAAFQAAAEgDAFQgCAFgFADQgFAFgIACQgHADgOAAQgLAAgJgDg");
	this.shape.setTransform(31.6,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.2,21.2);


(lib.Символ69 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spartanec_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,154,59);


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spartanec_10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,178,86);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spartanec_14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,291,229);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADtDgIAAgLIAOgCQAEgBACgDQACgEAAgGIAAhlQAAgFgCgEQgCgDgEgCIgQgEIAAgKIBPAAIAAAKIgRACQgEACgDAEQgBADAAAFIAAAmIAXgBQAQAAAMADQALACAIAFQAKAFAFAJQAFAIAAANQAAANgFAJQgGAJgJAGQgIAFgLADQgJADgMAAgAEhCQIAAA4QAAAGAEAEQAFADANAAQAKAAAIgDQAHgEAEgFQAEgGABgGIACgOQAAgNgJgJQgKgKgTAAgAgqDgIAAgLIAPgCQAEgBACgDQADgEAAgGIAAhlQAAgFgDgEQgBgDgFgCIgPgEIAAgKIBJAAIAAAKIgIABIgFABQgFACgCAEIgCAIIAABnQAAAIAEADQAEADAHAAIAIABIAdgBQAHAAABgDIABgJIAAhnIgCgJQgBgDgEgCIgPgEIAAgKIBJAAIAAAKIgIABIgFABQgFACgCAEIgCAIIAABnQAAAIAFADQAEADAHAAIAIABIATAAIAJgBQAHAAABgDQACgCAAgHIAAhnIgCgJQgBgDgFgCIgPgEIAAgKIBLAAIAAAKIgIABIgGABQgEACgDADQgCAEAAAFIAABmQAAAFACAEQACADAFACIAIADIAHAAIAAALgAiMDgIAAgLIAOgCQAFgBACgDQADgEAAgGIAAhlQAAgFgDgEQgCgDgFgCIgPgEIAAgKIBNAAIAAAKIgIABIgGABQgFACgCADQgDAEAAAFIAABmQAAAFADAEQACADAEACIAIADIAHAAIAAALgAkeDgIAAgLIAOgCQAEgBACgDQACgEAAgGIAAhlQAAgFgCgEQgCgDgEgCIgQgEIAAgKIBPAAIAAAKIgRACQgFACgCAEQgBADAAAFIAAAmIAXgBQAQAAAMADQALACAIAFQAJAFAGAJQAFAIAAANQAAANgGAJQgFAJgJAGQgIAFgLADQgKADgMAAgAjqCQIAAA4QAAAGAEAEQAFADANAAQAKAAAIgDQAHgEAEgFQAEgGABgGIACgOQAAgNgKgJQgJgKgTAAgAmCDgIAAgLIAIAAIAGgCQAFgBACgEQADgDAAgGIAAhxIgEAAIg1CJIgKAAIgxiLIgEAAIAABtQAAAIACAFQADAEAEACIAIADIAHAAIAAALIg8AAIAAgLIAOgCQAFgBABgEQACgFAAgIIAAhfQAAgHgCgDQgCgEgEgCIgQgEIAAgKIBBAAIAoBwIAmhoIABgIIBCAAIAAAKIgIABIgGABQgFACgCADQgCAEAAAFIAABmQAAAFACAEQACADAFACIAHADIAHAAIAAALgAE6gRQgDgQgIgOQgIgOgJgCIhcAAQgJABgIAPQgJAOgDAQIgLAAIAAg6IAQAAQAPgVAMghQAMgiAAgWQAAgJgCgDQgCgEgFgDIgUgEIAAgKICNAAIAAAKIgHAAIgHACQgEABgCAEQgCADAAAGIAABlQAAAJADADQADAEALAAIAKAAIAAA6gADXiEQgLAigQAXIBFAAQAGAAADgDQADgCAAgFIAAh5IgrAAQgBApgKAhgAAxhBQgPgHgJgLQgJgLgEgQQgFgPAAgRQAAgPAFgPQAFgPAJgLQAJgLAOgHQANgHAQAAQASAAAMAFQAMAGAIAJQAHAJAEAMQADAMAAAOIAAAKIhnAAQAAAQADAMQACANAHAJQAGAKAKAFQAKAFAOAAQAOAAAKgGQAKgHAKgRIALAHQgKASgQALQgRAMgVAAQgTAAgOgHgABvifIgCgTQgBgKgEgGQgDgIgHgEQgGgFgKAAQgRAAgKAOQgMANAAAZIBIAAgAk1hGQgLgKAAgSQAAgIADgIQACgHAFgGIAKgIIAMgGIAegKQAVgHAIgFIgBgXQgBgGgDgFQgDgGgGgEQgFgEgLAAQgIAAgFACIgJAFIACAVQAAAGgFAEQgFAFgIAAQgIAAgEgGQgDgGAAgHQAAgHAEgHQAFgGAJgGQAHgEAKgDQAKgDAKAAQANAAAKACQAKABAIAHQAIAFAFALQADAKAAAPIAABOQAAAHACADQACAFAEACIAIABIAKABIAAAKIgMAEIgOABQgMAAgHgFQgHgGgDgLIAAAAQgLAMgMAFQgLAHgRAAQgSAAgLgMgAj9iNIgTAJQgHAFgFAIQgFAIAAAKQAAANAIAGQAHAGAKAAQALAAAJgGQAIgEAGgIIABg3gAG9g/IAAgKIAPgCQAEgCACgCQADgFAAgFIAAhSIhIBNIAAADQAAAGACADQACAEAEABIAIADIAIABIAAAKIhMAAIAAgKIAOgCQAFgCACgCQACgFAAgFIAAhlQAAgGgCgDQgCgEgFgCIgPgDIAAgKIBMAAIAAAKIgIAAIgHACQgEABgCAEQgCADAAAGIAABRIBIhOQAAgHgCgDQgCgEgFgCIgQgDIAAgKIBMAAIAAAKIgIAAIgGACQgEABgCAEQgDADAAAGIAABlQAAAGACADQACAEAEABIAIADIAIABIAAAKgAieg/IAAgKIAOgCQAEgCACgCQACgFAAgFIAAhlQAAgGgCgDQgCgEgEgCIgPgDIAAgKIBkABQALACAIADQAIAEAFAHQAEAHAAAKQAAAQgKAKQgJAIgQAEIAAACIAQADQAIACAGAFQAGAFAEAHQAEAGAAAKQAAAMgFAIQgGAIgJAGQgIAFgLACQgLACgMAAgAhqiKIAAA0QAAAGAFADQAFAEALAAQAMAAAHgEQAIgCAFgFQAEgFACgHIACgMQAAgOgLgIQgKgJgTAAgAhqiWIAPAAQALAAAHgDQAIgDADgEQAFgEABgGIACgMQAAgIgDgFQgDgFgFgDQgFgDgGgBIgeAAgAmkg/IAAgKIAHgBIAHgBQAFgCACgCQACgFAAgFIAAgyIhFAAIAAAwQAAAGACADQACAEAEABIAIADIAIABIAAAKIhMAAIAAgKIAOgCQAEgCACgCQACgFAAgFIAAhlQAAgGgCgDQgCgEgEgCIgQgDIAAgKIBMAAIAAAKIgHAAIgHACQgEABgCAEQgCADAAAGIAAAoIBFAAIAAgmQAAgGgCgDQgCgEgFgCIgPgDIAAgKIBMAAIAAAKIgIAAIgGACQgEABgCAEQgCADAAAGIAABlQAAAGACADQABAEAFABIAHADIAIABIAAAKg");
	this.shape.setTransform(52.1,22.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104.3,45);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fire();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,996,85);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("AE/8MMCcTAAAEihRgcMMCZAAAAAhl1AMAAACfjEgBliKiMAAABoQ");
	this.shape.setTransform(-1.7,2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1035,-885.2,2066.6,1775.5);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.lance();
	this.instance.setTransform(-130.8,-141.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130.8,-141.5,183,86);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AuaU/MAAAgp9Ic1AAMAAAAp9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-134.4,184.8,268.8);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("ABQAAQAAAhgYAXQgXAYghAAQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgg");
	this.shape.setTransform(-0.2,0,1,1,0,0,0,-0.2,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spark();
	this.instance.setTransform(-30,-72.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-72.6,60,145);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-424,-195);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-424,-195,848,390);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-424,-195);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-424,-195,848,390);


(lib.ClipGroup = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD835").s().p("AjwcHQk/igjZkkIo+sBQiwjrhMkaQhJkOAdkbQAckZB+j8QCBkDDXjBQhChEhWgpQhYgphdgDIiZADQiMACg1gKQhCgNglg4Qgmg5ANhCQANhCA4gmQA5glBCANQAbAFB3gDICUgDQCoAGCcBNQCZBLBuCBQCrhiC9gyQC+gyDGAAQFoAAE/CgQE/CgDaEkII9MBQC6D4BJEqQBIEhgqEoQgqEoiVECQiaELj2C6QjJCXjoBOQjpBPj4AAQlrAAk8ihgAtBLVIE+GsQCrDlD6B+QD4B9EdAAQDDAAC2g9QC2g9Cch2QDDiTB5jTQB1jLAhjpQAhjqg4jjQg6jqiRjDIk+mqgAzDtFQhYDDgRDWQgQDXA6DOQA8DUCGCzIA8BQIM5ptIsDwKQibCahaDIgArK1tIMBQKIM6pvIg9hSQirjlj6h+Qj6h+kbAAQk3AAkNCYg");
	this.shape.setTransform(196,196);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,392,392.1);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.setTransform(23.7,40.6,1,1,0,0,0,23.7,40.6);
	this.instance.alpha = 0.621;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-3,-3,53,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.621},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,70,104);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ73();
	this.instance.setTransform(72.3,62.4,1.2,1.2,0,0,0,60.8,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:89},9,cjs.Ease.get(1)).to({x:72.3},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ72();
	this.instance_1.setTransform(57.5,16.4,1.884,1.884,0,0,0,31.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:47.3},9,cjs.Ease.get(1)).to({x:57.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-3.5,147.3,81.6);


(lib.Символ68 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ78();
	this.instance.setTransform(59.6,110,1,1,0,0,0,23.7,40.6);

	// Слой 1
	this.instance_1 = new lib.Символ77();
	this.instance_1.setTransform(57.5,83,1,1,0,0,0,57.5,83);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,166);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(33.3,33.5,0.17,0.17,0,0,0,195.9,196.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.6,66.7);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ60();
	this.instance.setTransform(498,42.5,1,1,0,0,0,498,42.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:46.5,alpha:0.32},19,cjs.Ease.get(1)).to({y:42.5,alpha:1},2,cjs.Ease.get(1)).to({alpha:0.32},3,cjs.Ease.get(1)).to({alpha:1},25,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ60();
	this.instance_1.setTransform(498,42.5,1,1,0,0,0,498,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:46.5,alpha:0.32},19,cjs.Ease.get(1)).to({y:42.5,alpha:1},2,cjs.Ease.get(1)).to({alpha:0.32},3,cjs.Ease.get(1)).to({alpha:1},25,cjs.Ease.get(1)).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,996,85);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:618.7},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:662.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:598.6},68).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(75,-2.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.8,-144.2,183,86);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,y:3.6},15,cjs.Ease.get(-1)).to({rotation:4.2,y:7.2},15,cjs.Ease.get(1)).to({rotation:2,y:3.5},15,cjs.Ease.get(-1)).to({rotation:0,y:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-144.2,183,86);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:546.2},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,0,2.36,2.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.69,scaleY:0.69},4).to({scaleX:2.36,scaleY:2.36},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40.1,40.1);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("AGjAAQAACth7B7Qh7B7itAAQisAAh7h7Qh7h7AAitQAAisB7h7QB7h7CsAAQCtAAB7B7QB7B7AACsg");
	this.shape.setTransform(-0.8,0.8);

	// Слой 3
	this.instance = new lib.Символ16();
	this.instance.setTransform(0,0.1);

	// Слой 1
	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(11.4,175.9);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1023.6,-709.3,2066.6,1775.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,-721.2,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1202},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-754.2,27.3,65.9);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spartanec_14.png
	this.instance = new lib.Символ66();
	this.instance.setTransform(109.6,27.5,1,1,0,0,0,178.1,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1.17,scaleY:1.17,x:107.8,y:-17.5},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:109.6,y:27.5},5,cjs.Ease.get(1)).wait(11));

	// spartanec_03.png
	this.instance_1 = new lib.Символ68();
	this.instance_1.setTransform(106.9,-99.5,1,1,0,0,0,61.5,134.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:61.6,regY:134.9,rotation:11},9,cjs.Ease.get(1)).to({regX:61.5,regY:134.8,rotation:0},10,cjs.Ease.get(1)).to({regY:134.9,rotation:-10,x:105.7,y:-129.5},5,cjs.Ease.get(1)).to({regY:134.8,rotation:0,x:106.9,y:-99.5},5,cjs.Ease.get(1)).wait(11));

	// spartanec_10.png
	this.instance_2 = new lib.Символ67();
	this.instance_2.setTransform(111.9,-78.4,1,1,0,0,0,89,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({x:110.7,y:-108.4},5,cjs.Ease.get(1)).to({x:111.9,y:-78.4},5,cjs.Ease.get(1)).wait(11));

	// spartanec_06.png
	this.instance_3 = new lib.Символ69();
	this.instance_3.setTransform(54.7,-44.1,1,1,0,0,0,149.2,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({regX:149.3,rotation:7,x:31.1,y:-81},5,cjs.Ease.get(1)).to({regX:149.2,rotation:0,x:54.7,y:-44.1},5,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,-234.3,317,360.6);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(29,29,0.87,0.87,0,0,0,33.3,33.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.setTransform(28.9,29,1,1,0,0,0,28.9,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:17.2},9,cjs.Ease.get(1)).to({x:28.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.setTransform(161.8,-53.4,0.632,0.632,0,0,0,28.9,29);

	// Слой 1
	this.instance_1 = new lib.Символ62();
	this.instance_1.setTransform(224.5,-52.4,0.68,0.68,0,0,0,52.1,22.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(143.5,-71.8,116.5,36.7);


(lib.Символ55 = function(mode,startPosition,loop) {
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
	this.pric = new lib.Символ14();
	this.pric.setTransform(0.1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1023.5,-706.6,2066.6,1775.5);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.setTransform(50.7,443.3,1,1,180);

	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(123.3,443.3,1,1,180);

	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(192.2,443.3,1,1,180);

	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(256.1,181.6,0.363,0.363,180);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ49();
	this.instance_4.setTransform(31.9,419.4,1,1,180);

	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(100.8,419.4,1,1,180);

	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(164.7,157.7,0.363,0.363,180);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Символ58();
	this.instance_7.setTransform(311.3,443.3,1,1,180);

	this.instance_8 = new lib.Символ57();
	this.instance_8.setTransform(375.1,443.3,1,1,180);

	this.instance_9 = new lib.Символ49();
	this.instance_9.setTransform(447.8,443.3,1,1,180);

	this.instance_10 = new lib.Символ35();
	this.instance_10.setTransform(516.7,443.3,1,1,180);

	this.instance_11 = new lib.Символ7();
	this.instance_11.setTransform(580.6,181.6,0.363,0.363,180);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.Символ58();
	this.instance_12.setTransform(219.8,419.4,1,1,180);

	this.instance_13 = new lib.Символ57();
	this.instance_13.setTransform(283.7,419.4,1,1,180);

	this.instance_14 = new lib.Символ49();
	this.instance_14.setTransform(356.3,419.4,1,1,180);

	this.instance_15 = new lib.Символ35();
	this.instance_15.setTransform(425.2,419.4,1,1,180);

	this.instance_16 = new lib.Символ7();
	this.instance_16.setTransform(489.1,157.7,0.363,0.363,180);
	this.instance_16.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},39).wait(1));

	// Слой 4
	this.instance_17 = new lib.Символ59();
	this.instance_17.setTransform(345.5,226.4,1,1,0,0,0,498,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(40));

	// Слой 3
	this.instance_18 = new lib.bg();
	this.instance_18.setTransform(-76.5,-39.5);

	this.instance_19 = new lib.Анимация3("synched",0);
	this.instance_19.setTransform(347.5,145.5);
	this.instance_19._off = true;

	this.instance_20 = new lib.Анимация4("synched",0);
	this.instance_20.setTransform(347.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.instance_19}]},24).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({_off:false},0).to({y:155.5},1,cjs.Ease.get(1)).to({y:151.5},1).to({_off:true,y:155.5},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-39.5,996,494.9);


(lib.Символ48 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ71();
	this.instance.setTransform(-230.6,-11.7,1,1,0,0,0,31.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Слой 1
	this.instance_1 = new lib.Символ61();
	this.instance_1.setTransform(248,58.9,1,1,0,0,0,37,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-91.9},0).to({y:-75.1},3,cjs.Ease.get(1)).wait(1).to({y:58.9},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.3,-30.7,735.2,86.5);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ76();
	this.instance.setTransform(291,150.5,1,1,0,0,0,180,157.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(10).to({alpha:0},5,cjs.Ease.get(1)).wait(25).to({alpha:1},0).wait(10).to({alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();
	this.instance_1.setTransform(129.1,263.4,1,1,0,0,0,34.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:229.1,y:243.4},24,cjs.Ease.get(-1)).to({x:309.1,y:263.4},15,cjs.Ease.get(1)).to({x:229.1,y:243.4},25,cjs.Ease.get(-1)).to({x:129.1,y:263.4},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317,360.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 3
	this.instance = new lib.Символ75();
	this.instance.setTransform(40.4,14.7,1,1,0,0,0,158.5,180.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:220.4},13,cjs.Ease.get(1)).wait(1).to({x:40.4},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-165.6,317,360.6);


// stage content:



(lib.Spartanec_600x200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		this.but1.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.girl.gotoAndPlay(2);
			this.mouse.gotoAndPlay(1);
			
		
		}
		
		this.but1.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.girl.gotoAndStop(0);
			this.mouse.gotoAndPlay(5);
		
		
		}
		
		
		
		//---------------
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		    this.girl.gotoAndPlay(16);
			this.mouse.gotoAndPlay(1);
		
		}
		
		this.but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{   
			this.girl.gotoAndStop(0);
			this.mouse.gotoAndPlay(5);
		
		}
		
		
		//----------------
		
		this.pric.alpha=0;
		this.gun.alpha=0;
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
			this.gun.x = stage.mouseX;
		}
		
		
		
		
		
		//---------------
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.gun2.alpha=0;
			this.gun.alpha=1;
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.gun2.alpha=1;
			this.gun.alpha=0;
		
		}
		
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
		
		
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// gun
	this.gun2 = new lib.Символ37();
	this.gun2.setTransform(436.1,261.2,0.929,0.929);

	this.gun = new lib.Символ37();
	this.gun.setTransform(750.1,261.2,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gun},{t:this.gun2}]}).wait(1));

	// pric
	this.pric = new lib.Символ55();
	this.pric.setTransform(-281.8,496.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// knopki
	this.but2 = new lib.Символ34();
	this.but2.setTransform(492,160.7,1.688,1.224);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ34(), 3);

	this.but1 = new lib.Символ34();
	this.but1.setTransform(134.4,160.7,1.688,1.224);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// mouse
	this.mouse = new lib.Символ48();
	this.mouse.setTransform(223.9,34.6,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// spartanec
	this.girl = new lib.Символ30();
	this.girl.setTransform(330.4,122.2,1,1,0,0,0,213.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// bg
	this.fon = new lib.Символ50();
	this.fon.setTransform(-54,-17.4,1,1,0,0,0,-7,38);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1005.3,-110,2173.6,1775.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
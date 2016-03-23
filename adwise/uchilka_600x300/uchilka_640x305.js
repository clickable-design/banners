(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arrow_1.png", id:"arrow_1"},
		{src:"images/baba_03.png", id:"baba_03"},
		{src:"images/baba_06.png", id:"baba_06"},
		{src:"images/baba_09.png", id:"baba_09"},
		{src:"images/baba_13.png", id:"baba_13"},
		{src:"images/baba_16.png", id:"baba_16"},
		{src:"images/baba_19.png", id:"baba_19"},
		{src:"images/baba_22.png", id:"baba_22"},
		{src:"images/baba_24.png", id:"baba_24"},
		{src:"images/baba_26.png", id:"baba_26"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/lineyka.png", id:"lineyka"},
		{src:"images/mouse.png", id:"mouse"},
		{src:"images/scissors1.png", id:"scissors1"},
		{src:"images/scissors2.png", id:"scissors2"}
	]
};



// symbols:



(lib.arrow_1 = function() {
	this.initialize(img.arrow_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,67);


(lib.baba_03 = function() {
	this.initialize(img.baba_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,121);


(lib.baba_06 = function() {
	this.initialize(img.baba_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,106);


(lib.baba_09 = function() {
	this.initialize(img.baba_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,73);


(lib.baba_13 = function() {
	this.initialize(img.baba_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,106);


(lib.baba_16 = function() {
	this.initialize(img.baba_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,117);


(lib.baba_19 = function() {
	this.initialize(img.baba_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,124);


(lib.baba_22 = function() {
	this.initialize(img.baba_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,123);


(lib.baba_24 = function() {
	this.initialize(img.baba_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,147);


(lib.baba_26 = function() {
	this.initialize(img.baba_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,139);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,838,300);


(lib.lineyka = function() {
	this.initialize(img.lineyka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,204);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.scissors1 = function() {
	this.initialize(img.scissors1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,225);


(lib.scissors2 = function() {
	this.initialize(img.scissors2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,109);


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.lineyka();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,204);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkNCeIAAglQAPAAAEgFQAGgEAAgRIAHjCIBzAAIAAEBIgpAAIAAjdIgkAAIgECbQgBASgEANQgDAMgHAHQgHAJgLADQgLAEgQAAgAG8CeIAAi1IgzC1IgqAAIAAkBIAkAAIAAChIAwihIAtAAIAAEBgAEjCeIgHgwIgyAAIgHAwIglAAIApkBIA8AAIApEBgADvBMIAoAAIgUiCgACCCeIAAjdIguAAIAADdIgpAAIAAkBICBAAIAAEBgAhbCeIAAkBIBtAAIAAAkIhEAAIAABGIA2AAIAAAlIg2AAIAABNIBEAAIAAAlgAnfCeIAAkBIAoAAIAADcIAjAAIAAjcIApAAIAADcIAjAAIAAjcIApAAIAAEBgAGOh3QgIgDgGgFQgFgGgCgHQgDgIAAgJIAZAAQABAKAEAEQAEADAIAAQAJAAAEgDQAFgEABgKIAYAAQAAAJgCAIQgDAHgFAGQgGAFgIADQgIADgLAAQgKAAgIgDg");
	this.shape.setTransform(48.1,15.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.2,31.7);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.arrow_1();
	this.instance.setTransform(0,42,1,1,-69);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78.7,66);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhwjDIgUBVIgFBEIAKA1QAWA6AAACQArA9AAABQAAABAeASQAeASAAABQAAABAgAKQAhALAAAAQAAABAbABQAaAAAAABQAAABAJgCQAIgCAAAAIAFggQAAABgUg4QAAABggg2QAAAChBhrQAAABhJhgQAAABg8gxg");
	this.shape.setTransform(13.9,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AB0DEIgagBQgbgBAAgBIghgLQgggKAAgBIgegTQgegSAAgBQAAgBgrg9IgWg8IgKg1IAFhEIAUhVQA8AxAAgBQBJBgAAgBQBBBrAAgCQAgA2AAgBIAUA3IgFAgIgIACIgIABIgBAAgACKChIAAAAg");
	this.shape_1.setTransform(13.9,19.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.8,41.3);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_16();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,117);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,838,300);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC8CBIAAkBIApAAIAABhIATAAQAPAAAMAFQALADAIAJQAHAIAEAKQAEAMAAAPIAAAiQAAAQgEAMQgEAMgHAHQgIAJgLAEQgMAEgPAAgADlBcIATAAQAKAAAFgGQAFgFAAgOIAAgmQAAgOgFgFQgFgGgKAAIgTAAgACBCBIglhzIgKAUIAABfIgoAAIAAhfIgKgUIgjBzIgqAAIAxiXIgxhqIApAAIAuBpIAAhpIAoAAIAABpIAwhpIApAAIgyBpIAyCYgAipCBIAAkBIBvAAIAAAlIhGAAIAABIIA4AAIAAAjIg4AAIAABMIBGAAIAAAlgAk0CBIAAkBIA8AAQAPAAAMAFQALADAIAIQAHAIAEAMQAEANAAAPIAAAhQAAAQgEAMQgEAKgHAIQgIAIgLAFQgMADgPAAIgTAAIAABigAkLgDIATAAQAKAAAFgFQAFgHAAgNIAAgnQAAgNgFgGQgFgFgKAAIgTAAg");
	this.shape.setTransform(34.4,16.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.5,3.9,61.9,25.9);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.scissors2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,248,109);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.scissors1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,225);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgfAfQgNgNAAgSQAAgRANgOQAOgNARAAQASAAANANQAOAOAAARQAAASgOANQgNAOgSAAQgRAAgOgOg");
	this.shape.setTransform(4.5,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,106);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al6u3IINg+IDoetIoNA+g");
	this.shape.setTransform(38,101.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.9,202.9);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjRL9IAA35IGjAAIAAX5g");
	this.shape.setTransform(21,76.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,153);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.scissors1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,225);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkIP3IAA/tIIRAAIAAftg");
	this.shape.setTransform(26.5,101.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,203);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AhGCZIAAkyIAwAAIAAB0IAWAAQARAAAOAFQANAFAJAKQAJAJAFANQAEAOAAASIAAApQAAASgEAOQgFAOgJAKQgJAJgNAGQgOAEgRAAgAgWBtIAWAAQALABAGgHQAGgGAAgRIAAguQAAgPgGgIQgGgFgLAAIgWAAg");
	this.shape.setTransform(7.2,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,30.8);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AgXCZIAAkFIgyAAIAAgtICTAAIAAAtIgyAAIAAEFg");
	this.shape.setTransform(7.5,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,30.8);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AAkCZIgJg4Ig6AAIgIA4IgsAAIAxkyIBFAAIAxEygAAUA3IgViZIgXCZIAsAAg");
	this.shape.setTransform(8.5,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.9,30.8);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AhWCaIAAgsQASAAAFgGQAHgGAAgUIAIjnICHAAIAAEyIgxAAIAAkGIgpAAIgFC4QgBAWgEAOQgEAPgJAKQgIAJgNAEQgNAFgSAAg");
	this.shape.setTransform(8.7,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17.5,30.9);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AhBCZIAAkyICDAAIAAAtIhSAAIAABVIBBAAIAAAqIhBAAIAABaIBSAAIAAAsg");
	this.shape.setTransform(6.6,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.2,30.8);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AAzCuIAAgpIhmAAIAAApIgvAAIAAhUIATAAQAGgIADgKQACgIABgOIALjfICGAAIAAEHIAVAAIAABUgAgTAxQgBARgEAJQgDAJgGAGIA9AAIAAjbIgnAAg");
	this.shape.setTransform(9.9,17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,35);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AgeCYQgNgFgJgLQgJgJgFgOQgFgPAAgSIAAifQAAgSAFgPQAFgOAJgKQAJgJANgGQAOgFAQAAQARAAAOAFQANAGAJAJQAJAKAFAOQAFAPAAASIAAAeIguAAIAAggQAAgQgHgIQgGgHgMAAQgKAAgGAHQgHAIAAAQIAACjQAAARAHAHQAGAHAKAAQAMAAAGgHQAHgHAAgRIAAgsIAuAAIAAAqQAAASgFAPQgFAOgJAJQgJALgNAFQgOAFgRAAQgQAAgOgFg");
	this.shape.setTransform(7.2,15.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,31.5);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AgeCYQgNgFgKgLQgKgJgEgOQgFgPAAgSIAAifQAAgSAFgPQAEgOAKgKQAKgJANgGQAOgFAQAAQASAAANAFQAOAGAJAJQAKAKAEAOQAFAPAAASIAACfQAAASgFAPQgEAOgKAJQgJALgOAFQgNAFgSAAQgQAAgOgFgAgQhpQgIAIABAQIAACjQgBARAIAHQAFAHALAAQAMAAAGgHQAHgHgBgRIAAijQABgQgHgIQgGgHgMAAQgLAAgFAHg");
	this.shape.setTransform(7.4,15.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,31.5);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AgXCZIAAkFIgyAAIAAgtICTAAIAAAtIgyAAIAAEFg");
	this.shape.setTransform(7.5,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,30.8);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AAaCZIAAh8QgIAJgMAEQgJAFgKgBQgPAAgLgEQgMgGgHgJQgHgJgFgNQgEgLAAgQIAAiDIAxAAIAAB+QAAAPAIAJQAIAFAKAAQAMAAAHgGQAGgJAAgOIAAh+IAxAAIAAEyg");
	this.shape.setTransform(7.5,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,30.8);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBkIAAgYIg4AAIAAAYIgbAAIAAgwIALAAIAEgKIACgNIAGh+IBLAAIAACVIAMAAIAAAwgAgFAdQgBAJgCAGQgBAEgDAEIAiAAIAAh8IgWAAgAh5BLQgHgDgGgFQgFgGgDgIQgCgIAAgLIAAgTIAaAAIAAAVQAAAJAEAEQAEAEAGAAQAHAAAEgEQADgEAAgLIAAgOQAAgMgEgFQgEgDgKAAIgHAAIAAgaIAJAAQAIAAAEgEQAEgEAAgKIAAgKQAAgLgDgFQgEgEgHAAQgGAAgFAEQgDAEAAAJIAAAPIgaAAIAAgNQABgLACgIQADgIAEgGQAGgFAHgDQAIgDAKAAQAKAAAIADQAIADAEAGQAGAFADAJQACAIAAAKIAAAFQAAAOgEAJQgGAJgJAEQAFACADAEQAEADADAFQAEAHAAANIAAAOQAAALgCAIQgDAIgGAGQgEAFgIADQgIADgKAAQgKAAgIgDgAECBMIAAitIAbAAIAABCIANAAQAKAAAIADQAHADAGAFQAFAGADAIQACAGAAAKIAAAXQAAALgCAIQgDAIgFAFQgGAGgHACQgIADgKAAgAEdAzIANAAQAHAAADgDQADgEABgJIAAgaQgBgJgDgCQgDgEgHAAIgNAAgAC9BMIAAiUIgdAAIAAgZIBWAAIAAAZIgeAAIAACUgABNBMIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAXIglAAIAAAzIAvAAIAAAZgAi2BMIgGgfIgiAAIgEAfIgZAAIAcitIAoAAIAcCtgAi/AVIgOhXIgMBXIAaAAgAlSBMIAAitIAoAAQALAAAHADQAIADAFAFQAGAGACAIQADAIAAALIAAAWQAAALgDAIQgCAIgGAEQgFAFgIADQgHACgLAAIgMAAIAABCgAk2gMIAMAAQAIAAACgEQAEgEAAgJIAAgaQAAgJgEgEQgCgEgIAAIgMAAg");
	this.shape.setTransform(34,10);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.9,20.1);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.scissors2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,248,109);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am0BWQgIgDgFgGQgGgFgCgIQgDgIAAgLIAAhZQAAgKADgJQACgIAGgFQAFgGAIgDQAIgDAKAAQAKAAAIADQAHADAGAGQAFAFADAIQADAJAAAKIAABZQAAALgDAIQgDAIgFAFQgGAGgHADQgIADgKAAQgKAAgIgDgAmtg7QgDAEAAAJIAABdQAAAJADAEQAEAEAHAAQAHAAADgEQAEgEAAgJIAAhdQAAgJgEgEQgDgEgHAAQgHAAgEAEgAF8BXIAAitIAbAAIAABCIANAAQALgBAHADQAIAEAFAFQAFAFADAHQACAIAAAKIAAAXQAAALgCAHQgDAJgFAFQgFAGgIACQgHADgLAAgAGXA+IANAAQAHAAADgEQAEgEAAgIIAAgaQAAgKgEgEQgDgDgHAAIgNAAgAE4BXIAAiUIgdAAIAAgZIBVAAIAAAZIgdAAIAACUgAD7BXIgFgfIgiAAIgFAfIgZAAIAcitIAoAAIAcCtgADyAfIgNhWIgNBWIAaAAgACNBXIAAiUIgfAAIAACUIgbAAIAAitIBXAAIAACtgAgHBXIAAitIBJAAIAAAZIgwAAIAAAxIAmAAIAAAXIgmAAIAAAzIAwAAIAAAZgAg4BXIAAiUIgYAAIgDBoQgBAMgCAIQgCAJgFAFQgFAFgIADQgHACgKAAIgFAAIAAgZQAKAAAEgDQADgDABgMIAEiCIBOAAIAACtgAkOBXIAAitIAcAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAbAAIAACtgAlSBXIAAiUIgdAAIAAgZIBVAAIAAAZIgdAAIAACUg");
	this.shape.setTransform(46.2,9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,17.9);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mouse();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGmDJQgPgFgKgMQgLgKgFgQQgFgQAAgUIAAisQAAgUAFgQQAFgQALgLQAKgKAPgGQAPgGATAAQAUAAAOAGQAQAGAKAKQAKALAFAQQAFAQAAAUIAACsQAAAUgFAQQgFAQgKAKQgKAMgQAFQgOAGgUAAQgTAAgPgGgAG1hPQgIAIAAARIAACzQAAASAIAIQAGAIANAAQAOAAAGgIQAHgIAAgSIAAizQAAgRgHgIQgGgIgOAAQgNAAgGAIgAtsDJQgPgFgKgMQgJgKgFgQQgGgQAAgUIAAisQAAgUAGgQQAFgQAJgLQAKgKAPgGQAPgGATAAQATAAAPAGQAPAGAKAKQAJALAGAQQAFAQAAAUIAAAgIgyAAIAAgkQAAgRgHgIQgHgIgOAAQgNAAgGAIQgIAIAAARIAACzQAAASAIAIQAGAHANAAQAOAAAHgHQAHgIAAgSIAAgwIAyAAIAAAtQAAAUgFAQQgGAQgJAKQgKAMgPAFQgPAGgTAAQgTAAgPgGgApsDLIAAgvQAVACALgFQALgHADgRIABgDIhJkBIA0AAIAuDAIALhNIAZhzIA3AAIg5D4QgFAZgGAPQgIARgLALQgMALgSAFQgOADgSAAIgOgBgAgvDLIAAgwQAUAAAGgGQAHgGAAgWIAJj8ICTAAIAAFOIg2AAIAAkeIguAAIgGDJQgBAXgEAQQgFAQgJALQgJAJgNAFQgNAFgUAAgAMrDLIAAgzIA0AAIAAAzgAKyDLIAAjrIhCDrIg2AAIAAlOIAvAAIAADTIA/jTIA5AAIAAFOgAEuDLIgziGIgQAfIAABnIg1AAIAAlOIA1AAIAACQIBFiQIA0AAIhJCTIBJC7gAh0DLIAAjrIhCDrIg2AAIAAlOIAvAAIAADTIA+jTIA6AAIAAFOgAlIDLIAAiHQgIAIgNAFQgMAFgLAAQgRAAgMgFQgMgGgJgKQgIgKgEgPQgEgOAAgRIAAiMIA0AAIAACHQAAARAKAIQAIAJANAAQANAAAHgJQAHgJAAgRIAAiGIA1AAIAAFOgAMuCBQgDgJAAgMQAAglAdgqQAOgUAFgMIAIgXIACgcQAAgRgHgIQgHgIgMAAQgOAAgGAIQgHAIAAARIAAAlIgyAAIAAghQAAgUAFgQQAFgQAKgLQAKgKAOgGQAPgGATAAQATAAAOAGQAPAGAKAKQAJALAFAQQAGAQAAAUQAAAPgDAOIgHAWQgHAQgPAVQgfApAAAfIACATgAJ3idQgLgDgGgHQgHgGgEgLQgEgJAAgNIAhAAQABANAGAFQAFAEALAAQALAAAFgEQAGgFABgNIAhAAQAAAMgEAKQgDAKgIAHQgHAHgKADQgLAEgNAAQgOAAgKgEg");
	this.shape.setTransform(95.4,16.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.2,-4.4,184.5,41.4);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_22();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50,123);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_13();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,106);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_26();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,139);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_24();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,147);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,121);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,73);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_19();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,124);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.setTransform(176.9,193.2,1,1,0,0,0,176.9,193.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,rotation:6},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,204);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(13.8,19.7,1,1,0,0,0,13.8,19.7);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,34,45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,36,47);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scissors1.png
	this.instance = new lib.Символ56();
	this.instance.setTransform(122,117.5,1,1,0,0,0,61,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

	// scissors2.png
	this.instance_1 = new lib.Символ57();
	this.instance_1.setTransform(122,117.5,1,1,0,0,0,122,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-14,y:117.6},9,cjs.Ease.get(1)).to({rotation:0,y:117.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,248,225);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 5
	this.instance = new lib.Символ55();
	this.instance.setTransform(-159.2,-37.4,0.74,0.74,0,0,0,124,117.5);

	// Objects
	this.instance_1 = new lib.arrow_1();
	this.instance_1.setTransform(-12.5,1.4,0.999,0.999,0,56.9,-123.1);

	// Слой 3
	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(66.6,4.1,1,1,0,0,0,159,56.6);

	// Слой 1
	this.instance_3 = new lib.Символ54();
	this.instance_3.setTransform(4.5,4.5,1,1,0,0,0,4.5,4.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-250.9,-120.6,260,166.5);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(12.1,61.2,1.42,1.42,-15,0,0,38,101.4);
	this.instance.alpha = 0.328;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,80,207);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.3,-93.9,186,313);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.setTransform(38,101.4,1,1,0,0,0,38,101.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-177.6,y:151},24,cjs.Ease.get(1)).wait(10).to({x:38,y:101.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-93.9,186,313);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(-27,89.5,1.59,1.59,8,0,0,21,76.5);
	this.instance.alpha = 0.27;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-2,46,157);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82,-40.6,114,263);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(21,76.5,1,1,0,0,0,21,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-189.9},29,cjs.Ease.get(1)).wait(10).to({x:21},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-40.6,114,263);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(26.5,101.6,1.15,1.15,13,0,0,26.4,101.5);
	this.instance.alpha = 0.262;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(28, 28, 1)];
	this.instance.cache(-2,-2,57,207);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.4,-33,143,273);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(26.5,101.5,1,1,0,0,0,26.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-379.4},29).wait(15).to({x:26.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-33,143,273);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmMLcQAAAAhugFIgFi0QAAgBFAnZQG8o9gBAAIEEjoQqWRXgBgCQj0FkgBAAIAAgBg");
	mask.setTransform(90.8,73.3);

	// Слой 4
	this.instance = new lib.Символ46();
	this.instance.setTransform(227.5,46.1,1,1,0,0,0,21,76.5);

	this.instance.mask = mask;

	// Слой 1 - копия
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(71,112.5,1,1,0,0,0,71,112.5);

	this.instance_1.mask = mask;

	// Слой 1
	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(71,112.5,1,1,0,0,0,71,112.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,225);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.setTransform(79.1,40.4,1.38,1.38,-52,0,0,34,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:71.1,y:55.4},9,cjs.Ease.get(1)).to({x:79.1,y:40.4},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(71,112.5,1,1,0,0,0,71,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-71,238.5,296.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(-42,195.5,1,1,0,0,0,62,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:62.1,rotation:9.5,x:-41.9},9).to({regX:62,rotation:0,x:-42},10).wait(1));

	// 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(-42,195.5,1,1,-5.5,0,0,120,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-12.7},9).to({rotation:-5.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.3,12,301.9,296.1);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuytaICzidIaxdTIisCcg");
	mask.setTransform(94.7,103.1);

	// Слой 4
	this.instance = new lib.Символ49();
	this.instance.setTransform(233.6,119.8,1,1,0,0,0,38,101.4);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.lineyka();

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.4,189.4,203.4);


(lib.Символ18 = function() {
	this.initialize();

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.setTransform(23,38.1,0.92,0.92,0,0,0,25.6,8.8);

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(27.6,17,0.92,0.92,0,0,0,30.6,9.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,7.9,56.2,38.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(23.5,36.2,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[23.5,36.1,19.3,35.7,16.2,32.7,12.8,29.3,12.8,24.4,12.8,23.3,13,22.2]}},9).to({guide:{path:[13.2,22.3,13.8,18.8,16.4,16.2,19.7,12.8,24.5,12.8,29.3,12.8,32.8,16.2,32.8,16.3,32.8,16.3]}},10).to({guide:{path:[32.9,16.6,36.2,19.8,36.2,24.5,36.2,29.4,32.8,32.8,29.4,36.2,24.5,36.2,24,36.2,23.5,36.2]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,7.2,46,58);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// text
	this.instance = new lib.Символ18();
	this.instance.setTransform(85.5,32,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:265.5},8,cjs.Ease.get(1)).wait(1).to({x:85.5},4,cjs.Ease.get(1)).wait(1));

	// mouse
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(21,31.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:201},8,cjs.Ease.get(1)).wait(1).to({x:21},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,11.9,94.9,41.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 41
	this.instance = new lib.Символ41();
	this.instance.setTransform(177,19.6,1,1,0,0,0,7.2,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({y:14.6},3,cjs.Ease.get(1)).to({y:19.6},5,cjs.Ease.get(1)).wait(1));

	// Символ 40
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(160.2,19.6,1,1,0,0,0,7.5,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({y:14.6},3,cjs.Ease.get(1)).to({y:19.6},5,cjs.Ease.get(1)).wait(2));

	// Символ 39
	this.instance_2 = new lib.Символ39();
	this.instance_2.setTransform(143.4,19.6,1,1,0,0,0,8.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({y:14.6},3,cjs.Ease.get(1)).to({y:19.6},5,cjs.Ease.get(1)).wait(3));

	// Символ 38
	this.instance_3 = new lib.Символ38();
	this.instance_3.setTransform(123.8,19.6,1,1,0,0,0,8.7,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({y:14.6},3,cjs.Ease.get(1)).to({y:19.6},5,cjs.Ease.get(1)).wait(4));

	// Символ 37
	this.instance_4 = new lib.Символ37();
	this.instance_4.setTransform(106.9,19.6,1,1,0,0,0,6.6,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({y:14.6},3,cjs.Ease.get(1)).to({y:19.6},5,cjs.Ease.get(1)).wait(5));

	// Символ 36
	this.instance_5 = new lib.Символ36();
	this.instance_5.setTransform(87.7,21.6,1,1,0,0,0,9.9,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({y:16.6},3,cjs.Ease.get(1)).to({y:21.6},5,cjs.Ease.get(1)).wait(6));

	// Символ 35
	this.instance_6 = new lib.Символ35();
	this.instance_6.setTransform(68.7,19.7,1,1,0,0,0,7.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({y:14.7},3,cjs.Ease.get(1)).to({y:19.7},5,cjs.Ease.get(1)).wait(7));

	// Символ 34
	this.instance_7 = new lib.Символ34();
	this.instance_7.setTransform(44.7,19.7,1,1,0,0,0,7.4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({y:14.7},3,cjs.Ease.get(1)).to({y:19.7},5,cjs.Ease.get(1)).wait(8));

	// Символ 33
	this.instance_8 = new lib.Символ33();
	this.instance_8.setTransform(28.1,19.6,1,1,0,0,0,7.5,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({y:14.6},3,cjs.Ease.get(1)).to({y:19.6},5,cjs.Ease.get(1)).wait(9));

	// Символ 32
	this.instance_9 = new lib.Символ32();
	this.instance_9.setTransform(11,19.6,1,1,0,0,0,7.5,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({y:14.6},3,cjs.Ease.get(1)).to({y:19.6},5,cjs.Ease.get(1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,3.9,180.7,35.3);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1TJXIAAyaMAqngAUIk2Sug");
	mask.setTransform(136.5,60);

	// Слой 3
	this.instance = new lib.Символ42();
	this.instance.setTransform(322.5,57.5,1,1,0,0,0,26.5,101.5);

	this.instance.mask = mask;

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6A1B99").s().p("A1TJXIAAyaMAqngAUIk2Sug");
	this.shape.setTransform(136.5,60);

	this.shape.mask = mask;

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,273,120);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(127.6,84.1,1,1,0,0,0,96.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-152.4},8,cjs.Ease.get(1)).wait(1).to({x:127.6},4,cjs.Ease.get(1)).wait(1));

	// 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(127.5,42.3,1,1,0,0,0,96.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-152.5},8,cjs.Ease.get(1)).wait(1).to({x:127.5},4,cjs.Ease.get(1)).wait(1));

	// bg
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(136.4,57,1,1,0,0,0,136.4,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-143.6},8,cjs.Ease.get(1)).wait(1).to({x:136.4},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-80,396.6,273);


(lib.Символ9 = function(mode,startPosition,loop) {
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

	// Слой 6
	this.instance = new lib.Символ66();
	this.instance.setTransform(239.5,-47.3,0.68,0.68,0,0,0,94.5,102);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ65();
	this.instance_1.setTransform(184.6,12.2,1,1,0,0,0,48.1,15.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:204.6,y:1.2,alpha:1},3,cjs.Ease.get(1)).wait(1).to({x:184.6,y:12.2,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ64();
	this.instance_2.setTransform(169.7,51.4,1,1,0,0,0,39.4,33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:189.7,y:40.4,alpha:1},3,cjs.Ease.get(1)).wait(1).to({x:169.7,y:51.4,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ62();
	this.instance_3.setTransform(118.3,64.8,1,1,0,0,0,13.8,19.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ61();
	this.instance_4.setTransform(71.5,58.5,1,1,0,0,0,71.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,117);


(lib.Символ6 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(68.5,90.1,1,1,0,0,0,4.5,4.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(61.5,53,1,1,0,0,0,61.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.9,-35,310,166.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_78 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_157 = function() {
		this.gotoAndPlay(98);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(78).call(this.frame_78).wait(79).call(this.frame_157).wait(8));

	// baba_03.png
	this.instance = new lib.Символ5();
	this.instance.setTransform(80.5,21.5,1,1,0,0,0,64.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:86.5},19,cjs.Ease.get(1)).to({x:80.5},20,cjs.Ease.get(1)).to({rotation:-16,x:87.5,y:23.6},19,cjs.Ease.get(1)).to({rotation:0,x:80.5,y:21.5},20,cjs.Ease.get(1)).wait(1).to({x:64.5},19,cjs.Ease.get(1)).to({x:58.5},20,cjs.Ease.get(1)).to({rotation:-16,x:65.5,y:23.6},19,cjs.Ease.get(1)).to({rotation:0,x:64.5,y:21.5},20,cjs.Ease.get(1)).to({x:53.5},1,cjs.Ease.get(1)).to({x:80.5},6,cjs.Ease.get(1)).wait(1));

	// baba_22.png
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(156,102.4,1,1,0,0,0,25,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-1,x:150,y:110.4},19,cjs.Ease.get(1)).to({rotation:0,x:156,y:102.4},20,cjs.Ease.get(1)).to({rotation:-1,x:150,y:110.4},19,cjs.Ease.get(1)).to({rotation:0,x:156,y:102.4},20,cjs.Ease.get(1)).wait(1).to({rotation:-1,x:128,y:110.4},19,cjs.Ease.get(1)).to({rotation:0,x:134,y:102.4},20,cjs.Ease.get(1)).to({rotation:-1,x:128,y:110.4},19,cjs.Ease.get(1)).wait(20).to({x:117},1,cjs.Ease.get(1)).to({rotation:0,x:156,y:102.4},6,cjs.Ease.get(1)).wait(1));

	// baba_06.png
	this.sisi = new lib.Символ6();
	this.sisi.setTransform(78.5,45,1,1,0,0,0,73.5,48);

	this.timeline.addTween(cjs.Tween.get(this.sisi).to({scaleX:1.08,scaleY:1.08,x:84.6,y:47},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:78.5,y:45},20,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:84.6,y:47},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:78.5,y:45},20,cjs.Ease.get(1)).wait(1).to({scaleX:1.08,scaleY:1.08,x:62.6,y:47},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:56.5,y:45},20,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:62.6,y:47},19,cjs.Ease.get(1)).wait(20).to({x:51.6},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:78.5,y:45},6,cjs.Ease.get(1)).wait(1));

	// baba_19.png
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(43.5,83.1,1,1,4,0,0,63.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1,y:83},19,cjs.Ease.get(1)).to({rotation:4,y:83.1},20,cjs.Ease.get(1)).to({rotation:1,y:83},19,cjs.Ease.get(1)).to({rotation:4,y:83.1},20,cjs.Ease.get(1)).wait(1).to({rotation:1,x:21.5,y:83},19,cjs.Ease.get(1)).to({rotation:4,y:83.1},20,cjs.Ease.get(1)).to({rotation:1,y:83},19,cjs.Ease.get(1)).wait(20).to({x:10.5},1,cjs.Ease.get(1)).to({rotation:4,x:43.5,y:83.1},6,cjs.Ease.get(1)).wait(1));

	// baba_16.png
	this.ass = new lib.Символ9();
	this.ass.setTransform(80.5,103.5,1,1,0,0,0,59.5,20);

	this.timeline.addTween(cjs.Tween.get(this.ass).to({rotation:8,x:83.5},19,cjs.Ease.get(1)).to({rotation:0,x:80.5},20,cjs.Ease.get(1)).to({rotation:8,x:83.5},19,cjs.Ease.get(1)).to({rotation:0,x:80.5},20,cjs.Ease.get(1)).wait(1).to({rotation:8,x:61.5},19,cjs.Ease.get(1)).to({rotation:0,x:58.5},20,cjs.Ease.get(1)).to({rotation:8,x:61.5},19,cjs.Ease.get(1)).wait(20).to({x:50.5},1,cjs.Ease.get(1)).to({rotation:0,x:80.5},6,cjs.Ease.get(1)).wait(1));

	// baba_13.png
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(113.5,27.5,1,1,0,0,0,27.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:19.9,rotation:11,x:123.5,y:27.4},19,cjs.Ease.get(1)).to({regY:20,rotation:0,x:113.5,y:27.5},20,cjs.Ease.get(1)).to({regY:19.9,rotation:11,x:123.5,y:27.4},19,cjs.Ease.get(1)).to({regY:20,rotation:0,x:113.5,y:27.5},20,cjs.Ease.get(1)).wait(1).to({regY:19.9,rotation:11,x:101.5,y:27.4},19,cjs.Ease.get(1)).to({regY:20,rotation:0,x:91.5,y:27.5},20,cjs.Ease.get(1)).to({regY:19.9,rotation:11,x:101.5,y:27.4},19,cjs.Ease.get(1)).wait(20).to({x:90.5},1,cjs.Ease.get(1)).to({regY:20,rotation:0,x:113.5,y:27.5},6,cjs.Ease.get(1)).wait(1));

	// baba_09.png
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(73,27.5,1,1,0,0,0,57,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:80,y:19.5},19,cjs.Ease.get(1)).to({x:73,y:27.5},20,cjs.Ease.get(1)).to({x:80,y:19.5},19,cjs.Ease.get(1)).to({x:73,y:27.5},20,cjs.Ease.get(1)).wait(1).to({x:58,y:19.5},19,cjs.Ease.get(1)).to({x:51,y:27.5},20,cjs.Ease.get(1)).to({x:58,y:19.5},19,cjs.Ease.get(1)).wait(20).to({x:47},1,cjs.Ease.get(1)).to({x:73,y:27.5},6,cjs.Ease.get(1)).wait(1));

	// baba_26.png
	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(124.5,168,1,1,0,0,0,33.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:113.5,y:169},19,cjs.Ease.get(1)).to({x:124.5,y:168},20,cjs.Ease.get(1)).to({x:113.5,y:169},19,cjs.Ease.get(1)).to({x:124.5,y:168},20,cjs.Ease.get(1)).wait(1).to({x:91.5,y:169},19,cjs.Ease.get(1)).to({x:102.5,y:168},20,cjs.Ease.get(1)).to({x:91.5,y:169},19,cjs.Ease.get(1)).wait(20).to({x:80.5},1,cjs.Ease.get(1)).to({x:124.5,y:168},6,cjs.Ease.get(1)).wait(1));

	// baba_24.png
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(65.5,161,1,1,0,0,0,51.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:57.5,y:162},19,cjs.Ease.get(1)).to({x:65.5,y:161},20,cjs.Ease.get(1)).to({x:57.5,y:162},19,cjs.Ease.get(1)).to({x:65.5,y:161},20,cjs.Ease.get(1)).wait(1).to({x:35.5,y:162},19,cjs.Ease.get(1)).to({x:43.5,y:161},20,cjs.Ease.get(1)).to({x:35.5,y:162},19,cjs.Ease.get(1)).wait(20).to({x:24.5},1,cjs.Ease.get(1)).to({x:65.5,y:161},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.9,-70.5,364,365.5);


(lib.Символ1 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ60();
	this.instance.setTransform(419,150,1,1,0,0,0,419,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,838,300);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// noghnici
	this.noghnici = new lib.Символ55();
	this.noghnici.setTransform(74.8,68.7,0.47,0.47,22,0,0,124,112.5);
	this.noghnici._off = true;

	this.timeline.addTween(cjs.Tween.get(this.noghnici).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.setTransform(73.9,53.9,1.35,1.35,47,0,0,46.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87.6,y:69.7},10,cjs.Ease.get(1)).to({x:73.9,y:53.9},9,cjs.Ease.get(1)).wait(1));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(94.5,119.6,1,1,0,0,0,94.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-58,302.3,314);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(189,204.1,1,1,0,0,0,189,221.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.7},9,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-75.5,302.3,313);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// scissors
	this.instance = new lib.Символ26();
	this.instance.setTransform(-110,43,1,1,0,0,0,124,112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-269,y:208.9},8,cjs.Ease.get(1)).wait(1).to({x:-110,y:43},4,cjs.Ease.get(1)).wait(1));

	// lineyka
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(91.5,105,1,1,0,0,0,94.5,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:257.5,y:302.4},8,cjs.Ease.get(1)).wait(1).to({x:91.5,y:105},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.3,-72.5,700.6,313);


// stage content:



(lib.uchilka_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.classroom.x = - stage.mouseX / 40;
		
		}
		
		
		//in
		
		stage.canvas.onmouseover = fl_MouseOverHandler_56;
		
		  function fl_MouseOverHandler_56()
		{
		    _this.objects.gotoAndPlay(1);
			_this.text.gotoAndPlay(1);
			_this.classroom.gotoAndPlay(1);
			_this.mouse.gotoAndPlay(1);
			_this.baba.sisi.gotoAndPlay(1);
			_this.baba.ass.gotoAndPlay(1);
			_this.baba.gotoAndPlay(79);
		   
		}
		
		
		//out
		
		stage.canvas.onmouseout = fl_MouseOutHandler_28;
		
		  function fl_MouseOutHandler_28()
		{
		    _this.objects.gotoAndPlay(10);
			_this.text.gotoAndPlay(10);
			_this.classroom.gotoAndPlay(5);
			_this.mouse.gotoAndPlay(10);
			_this.baba.sisi.gotoAndPlay(5);
			_this.baba.ass.gotoAndPlay(5);
			_this.baba.gotoAndPlay(158);
		    
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// kursor
	this.kursor = new lib.Символ59();
	this.kursor.setTransform(157.1,397.5,1,1,0,0,0,73.8,70.8);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// objects
	this.objects = new lib.Символ22();
	this.objects.setTransform(499,233,1,1,0,0,0,94.5,102);

	this.timeline.addTween(cjs.Tween.get(this.objects).wait(1));

	// mouse
	this.mouse = new lib.Символ16();
	this.mouse.setTransform(483,61,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// text
	this.text = new lib.Символ12();
	this.text.setTransform(105,59,1,1,0,0,0,121,59);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// baba
	this.baba = new lib.Символ2();
	this.baba.setTransform(312,158,1,1,0,0,0,75,73.5);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// bg
	this.classroom = new lib.Символ1();
	this.classroom.setTransform(53.1,-35,1.04,1.04,0,0,0,172,-35);

	this.timeline.addTween(cjs.Tween.get(this.classroom).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(194.2,72.5,871.5,459.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
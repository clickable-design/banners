(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1469699981004", id:"back"},
		{src:"images/u1_03.png?1469699981004", id:"u1_03"},
		{src:"images/u1_05.png?1469699981004", id:"u1_05"},
		{src:"images/u1_10.png?1469699981004", id:"u1_10"},
		{src:"images/u1_12.png?1469699981005", id:"u1_12"},
		{src:"images/u1_14.png?1469699981005", id:"u1_14"},
		{src:"images/u1_16.png?1469699981005", id:"u1_16"},
		{src:"images/u1_23.png?1469699981005", id:"u1_23"},
		{src:"images/u1_26.png?1469699981005", id:"u1_26"},
		{src:"images/u1_28.png?1469699981005", id:"u1_28"},
		{src:"images/u1_30.png?1469699981005", id:"u1_30"},
		{src:"images/u1_31.png?1469699981005", id:"u1_31"},
		{src:"images/u1_32.png?1469699981005", id:"u1_32"},
		{src:"images/u2rez_03.png?1469699981005", id:"u2rez_03"},
		{src:"images/u2rez_05.png?1469699981005", id:"u2rez_05"},
		{src:"images/u2rez_08.png?1469699981005", id:"u2rez_08"},
		{src:"images/u2rez_14.png?1469699981005", id:"u2rez_14"},
		{src:"images/u2rez_17.png?1469699981005", id:"u2rez_17"},
		{src:"images/u2rez_22.png?1469699981005", id:"u2rez_22"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,561);


(lib.u1_03 = function() {
	this.initialize(img.u1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,299);


(lib.u1_05 = function() {
	this.initialize(img.u1_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,236);


(lib.u1_10 = function() {
	this.initialize(img.u1_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,70);


(lib.u1_12 = function() {
	this.initialize(img.u1_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.u1_14 = function() {
	this.initialize(img.u1_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.u1_16 = function() {
	this.initialize(img.u1_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.u1_23 = function() {
	this.initialize(img.u1_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,102);


(lib.u1_26 = function() {
	this.initialize(img.u1_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,73);


(lib.u1_28 = function() {
	this.initialize(img.u1_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,72);


(lib.u1_30 = function() {
	this.initialize(img.u1_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,71);


(lib.u1_31 = function() {
	this.initialize(img.u1_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.u1_32 = function() {
	this.initialize(img.u1_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,70);


(lib.u2rez_03 = function() {
	this.initialize(img.u2rez_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,66);


(lib.u2rez_05 = function() {
	this.initialize(img.u2rez_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,66);


(lib.u2rez_08 = function() {
	this.initialize(img.u2rez_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,62);


(lib.u2rez_14 = function() {
	this.initialize(img.u2rez_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,144);


(lib.u2rez_17 = function() {
	this.initialize(img.u2rez_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,19);


(lib.u2rez_22 = function() {
	this.initialize(img.u2rez_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,68);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,561);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ABqGoQgcgDgbgVQgSgPgagfQgWgbgLgHQgIgGgPgHIgYgLQgKgFgPgMIgagRQg1ggg8AMQgtAJgOAeQgEAIgGATQgGAPgKAFQgLAGgOgHQgMgGgFgNQgFgKAAgPIADgbIAijaQAIgrAGgWQAShFAHgjQAMg7gGgtIgEgZIgDgYQgCgZAKgeQAGgTAPgiQAOgeAQgCIABAAQAIACAGAGQAGAGABAIQDJAmDGAKQAlABAOAOQASASgHAjQgDAUgLAjQgMAkgDASQgEAVAAArIABBzQAAAsAIAUQAJAWAbAaQAlAjAHAJQAGAHAHAMIAMAVIARAbQAKAQAEANQAIAUABAbQABARgCAgQgBAdgQADQgLACgJgNIgOgWQgIgNgPgEQgPgFgOAEQggArgvAdQglAWgfAAIgMgBg");
	this.shape.setTransform(37,42.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,85.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhoGyQgFgHgCgLIgDgVQgEgggShDQgMgrgIgWQgOgjgSgZQgbgkg2giQgUgLgKgKQgOgPABgQQACgNAQgTQAYgZAUgRQAQgNADgJQABgFAAgHIgBgMQAAgKAEgOIAJgWQAMggAAhBQABh1gChTQgBgOAFgLQAGgNALABIAAgCQDbALDTgKQAhgBANAIQALAIAGARQADALACAUQAFBNgPBeQgIA7gaBvIggCJQgEAUgIAGQgEATACAZIADAtQAFA4gWAdQgHAKgNAJIgYAQQgrAcgbAUIgpAeQgjAYgjAQQgaAMgUAAQgdgBgMgTg");
	this.shape.setTransform(31.3,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,90.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF00","#000000","#4E4E00","#FFFF00"],[0,0.086,0.153,1],-31.8,14.7,-2.4,-14.7).s().p("Ah6j1ID0D1Ij0D2g");
	this.shape.setTransform(12.3,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.6,49.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("Aq2jMIVtAAQAAAZAZAAIAAFnQgZAAAAAZI1tAAQAAgZgZAAIAAlnQAZAAAAgZg");
	this.shape.setTransform(72,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Aq2DNQAAgZgZAAIAAlnQAZAAAAgZIVtAAQAAAZAZAAIAAFnQgZAAAAAZg");
	this.shape_1.setTransform(72,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,148.1,45.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("Aq2jMIVtAAQAAAZAZAAIAAFnQgZAAAAAZI1tAAQAAgZgZAAIAAlnQAZAAAAgZg");
	this.shape.setTransform(72,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.8)").s().p("Aq2DNQAAgZgZAAIAAlnQAZAAAAgZIVtAAQAAAZAZAAIAAFnQgZAAAAAZg");
	this.shape_1.setTransform(72,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,148.1,45.1);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5.8,0,5.9,0).s().p("AgeBnQgGgCgDgFQgOgHAAgDQAAgFAFgHIgFiYQgEgHAAgFQAAgFAEgEQAFgDAJAAQAIABAFABIAHABIAMgEQAIgDAOAAQAPAAAJAFQAKAEADAJQADAIAAAHQAAAdggAaIANgBQATAAADAaQAAAMgHAQQgIAPgQATQgdAkgRACQgGgBgFgDgAgBAJQgIAEgJAKIADAtQAHgFAOgPQAQgPADgSQAAgMgMAAQgIAAgGAGgAgFhJQgHACgJAGIACA3QAoglAAgQQAAgMgOAAQgHAAgFACg");
	this.shape.setTransform(5.9,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5.7,0,5.8,0).s().p("AgbBlIgMgHIgIgHQgDgFAAgBIABgGIAEgHIgGiSIgCgGIgDgJQAAgFAFgCQADgDAIAAIAKABIAJAEQAEACADADQADADAAADQAAAGgDAEIgGAHIADAxIARgGIAIgCIAIgBQATAAALAJQAGAEADAIQACAHAAAIQAAAJgDAJQgDAJgFAJQgFAIgGAIIgbAbIgMAJQgCAGgEACIgGACQgGAAgFgDgAgFAAQgHAEgEAFIACAwIAKgGQAEgEAHgIQAGgGAFgHQAEgIAAgGQABgIgEgEQgDgBgHAAQgIAAgGABg");
	this.shape_1.setTransform(18.7,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-2.3,0,2.3,0).s().p("AgJBhQgKgFAAgEQABgFAEgHIgEiZQgDgHAAgEQgBgGAFgDQAEgDAKAAQAIAAAJAFQAHAGAAAFQAAADgGAMIADCUQAFAHAAAHQgBAEgDACQgEACgHAAQgIAAgJgEg");
	this.shape_2.setTransform(27.2,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-7,0,7,0).s().p("Ag7BkQgHgFgBgEQAAgEAFgIIgCidQgFgIAAgEQABgGAEgDQAFgDAIAAQALAAAJAGQAHAFAAAFQAAADgGANIADBmQAbhCAag1IgBgFQAAgMARAAQAKAAAJAFQAJAEAAAIQAAADgHALIAACTQAEAJABAGQAAAIgPAAQgJAAgJgEQgLgFABgEQgBgEAFgIIAAhiQgSAqgjBLIgCAFQgEAGgIACIgFABQgHAAgJgFg");
	this.shape_3.setTransform(37.8,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5.8,0,5.9,0).s().p("AgwBkQgJgFAAgEQAAgEAFgIIAAiUQgFgHAAgEQAAgGAFgDQAEgDAJAAQAHAAAFACIA4gHQAIgGADAAQAHgBAGAKQAFAJAAAIQAAAGgDAEQgFAFgDAAQgFAAgLgEIgxAHIAACNQAEAIAAAGQAAAEgDACQgEACgIAAQgIAAgLgEg");
	this.shape_4.setTransform(51.9,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5.5,0,5.5,0).s().p("AgsBjQgKgEABgEQAAgFAEgHIAAiZQgEgHAAgEQAAgGAEgDQAFgDAJAAQAJAAAJAEQAWgKANAAQALAAAHAFIAOANQAEAGAAAJQABAXgXAqQgYAqgPAAQgDAAgFgGIAAAyQAFAIAAAHQAAAEgEACQgEACgHAAQgJAAgKgFgAgPg2IAAA3QADAAAFgFQAGgGAGgOQAHgNAEgLQAEgKAAgHQAAgJgHAAQgKAAgSAUg");
	this.shape_5.setTransform(64.4,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5.7,0,5.8,0).s().p("AgcBlIgKgHIgIgHQgEgFAAgBIABgGIADgHIgFiSIgDgGIgCgJQAAgFAEgCQAFgDAHAAIAKABIAKAEQADACADADQADADAAADQAAAGgDAEIgGAHIADAxIARgGIAIgCIAHgBQAUAAALAJQAFAEADAIQADAHAAAIQAAAJgDAJQgDAJgFAJQgFAIgHAIIgbAbIgKAJQgCAGgFACIgHACQgEAAgHgDgAgEAAQgIAEgFAFIADAwIAKgGQAFgEAFgIQAHgGAEgHQAGgIAAgGQgBgIgDgEQgDgBgIAAQgHAAgFABg");
	this.shape_6.setTransform(76.8,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-2.3,0,2.3,0).s().p("AgIBhQgKgFAAgEQgBgFAFgHIgDiZQgFgHAAgEQABgGAEgDQAFgDAIAAQAKAAAHAFQAIAGAAAFQAAADgGAMIAECUQADAHAAAHQABAEgEACQgDACgIAAQgIAAgIgEg");
	this.shape_7.setTransform(85.3,10.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-1.6,0,1.7,0).s().p("AgJARQgGgCAAgGIABgFIACgEIAAgIQAAgGADgDQADgCAGAAQAEAAAGACQAFADABAFIAAAHIgCAFIgBAIQAAAEgDADQgCACgHAAQgFAAgFgDg");
	this.shape_8.setTransform(117.1,18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-9.4,0,9.5,0).s().p("AhDBnQgPgBgKgWQAAgIAGgHIgDiRQgEgKAAgEQAAgFAEgCQADgCAIAAQAJAAAJAFQAKAEAAAEQABAFgFAIIABCOIAngCIgDiPQgFgKAAgEQAAgFAEgCQAEgCAHAAQAHAAAJAFQALAEgBAEQABAFgFAIIABCKIAlgDIgCiHQgEgNgBgEQAAgFAFgCQADgCAIAAQAJAAAJAFQAKAEAAAEQAAAFgFAIIAACCQADAAADADQADACAAAHQgFAXgLACIgRgBIhrAHQgIAIgLAAIgCgBg");
	this.shape_9.setTransform(98.6,10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-1.6,0,1.7,0).s().p("AgJARQgGgCAAgGIABgFIACgEIAAgJQAAgFADgDQACgDAHABQAEAAAGACQAFADABAFIAAAHIgCAFIgBAIQgBAEgCACQgCADgHABQgFgBgFgDg");
	this.shape_10.setTransform(117.9,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-6.8,0,6.9,0).s().p("AgCBgQgFgFgDgFQgCgFABgEQAAgCAEgFQAEgFAAgGIAAgaQgMAEgTACIgHAEQgDADgEgBQgGgBgHgIQgHgJABgIQAAgGAFgDQAGgDABgCIAyhYQACgCgBgGQAAgHADgCQABgEAFAAQAFAAAFACQAGADAFAFQAMAKAAAJQAAAFgGAMQgGAMAAAHIAAAnQAGgDAOgDQAIAAAHAFQAHAEAAAIQABAHgGAFQgFAFgHAAIgLgCIgNABIgBAmQAAAFADAIQAEAIAAADQAAAJgOAGIgEABQgJAAgIgJgAgYAIIAVgEIABglg");
	this.shape_11.setTransform(133.8,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5,0,5,0).s().p("AgTBjQgGgCgIgIQgIgHgEgHQgDgHAAgGQAAgHACgHIAIgRIAUgfQgegNACghQAAgHAEgIQADgJAIgJQAHgJAIgFQAIgFAIgCIALgCQARAAAKANQAJALgBARQAAAHgCAHQgBAHgEAHQgDAHgOAUQAOANAGAJQADAHADAGQACAIAAAIQAAAPgXAWQgKAKgKAGQgHAFgHAAQgGAAgGgEgAgGAuQgJANAAAGQAAAEAFABQADgBAFgDQACgEAGgIQAGgHAAgJQAAgJgGgDgAABg/QgDAEgCAFQgFAJAAAGQAAAIAIAFQAQghAAgEQAAgFgFAAQgEAAgFAFg");
	this.shape_12.setTransform(147.4,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-1.8,0,1.9,0).s().p("AgHAJQgKgDAAgDQgBgJAFgDQADgCAHAAQAGAAAHACQAHACAAACIABAEQAAAIgOAFIgCAAQgCAAgHgDg");
	this.shape_13.setTransform(175.5,19.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5.4,0,5.5,0).s().p("AAABnQgPAAgLgJQgKgJgHgSQgKgbAAgpQAAgQADgQQADgQAGgPQAQgnAbAAQANAAALAJQAKAJAHARQALAcAAAnQAAATgDASQgDASgGAPQgIASgKAIQgLAJgNAAIAAgBgAgMgtQgFAWgBAWIABAXQABAMACALQADANADAHQADAGAFAAQAFAAAHgaQAGgZAAgVQAAgfgCgNQgCgMgFgFQgEgGgFAAQgGAAgGAXg");
	this.shape_14.setTransform(161.6,11);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-5.6,0,5.7,0).s().p("AgeA2QgHgFgEgFQgEgFABgEQAAgGAMAAQAKABAJADIAKAGQADABAGgLQAIgKAAgFQAAgDgEAAIgqADQgSAAgFgLIAAgCQAAgLAWgaQAYgcAQAAQAMAAANAKQAOAIgBAEQgDAQgRABIgGgBQgDgBgEgFQgDgFgEABQgEAAgKAMQgLAMAAAGIACAAIAWgEQAVgEALgBQAKABAFADQAFAEAAAGQAAAQgTAaQgSAYgRAAQgPAAgRgLg");
	this.shape_15.setTransform(175.1,10.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFF00","#FFFF00","#FFFF00"],[0,0.086,1],-1.9,0,2,0).s().p("AgJAJQgHgBAAgCQgFgKAJgFQACgCAFABQAGAAAGABQAFACADADQAEABAAADQAAAHgGADQgEACgHAAQgEgBgHgCg");
	this.shape_16.setTransform(175.7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.8,21.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.847)").s().p("EgiEAUFQABgZgZAAMAAAgnYQAZABgBgZMBEJAAAQgBAZAZgBMAAAAnYQgZAAABAZg");
	this.shape.setTransform(220.6,128.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,441.1,257.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u2rez_14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,144);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u2rez_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,66);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u2rez_08();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,62);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u2rez_22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407,68);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u2rez_17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,19);


(lib.Символ7копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_32();
	this.instance.setTransform(1,490);

	this.instance_1 = new lib.u1_31();
	this.instance_1.setTransform(0,69);

	this.instance_2 = new lib.u1_30();
	this.instance_2.setTransform(2,350);

	this.instance_3 = new lib.u1_28();
	this.instance_3.setTransform(1,0);

	this.instance_4 = new lib.u1_16();
	this.instance_4.setTransform(0,419);

	this.instance_5 = new lib.u1_14();
	this.instance_5.setTransform(1,138);

	this.instance_6 = new lib.u1_12();
	this.instance_6.setTransform(0,279);

	this.instance_7 = new lib.u1_10();
	this.instance_7.setTransform(1,209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,560);


(lib.Символ7копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_32();
	this.instance.setTransform(0,279);

	this.instance_1 = new lib.u1_31();
	this.instance_1.setTransform(0,69);

	this.instance_2 = new lib.u1_30();
	this.instance_2.setTransform(0,419);

	this.instance_3 = new lib.u1_28();
	this.instance_3.setTransform(0,139);

	this.instance_4 = new lib.u1_16();
	this.instance_4.setTransform(0,349);

	this.instance_5 = new lib.u1_14();

	this.instance_6 = new lib.u1_12();
	this.instance_6.setTransform(0,489);

	this.instance_7 = new lib.u1_10();
	this.instance_7.setTransform(1,209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,560);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_32();
	this.instance.setTransform(0,279);

	this.instance_1 = new lib.u1_31();
	this.instance_1.setTransform(0,349);

	this.instance_2 = new lib.u1_30();
	this.instance_2.setTransform(0,419);

	this.instance_3 = new lib.u1_28();
	this.instance_3.setTransform(0,139);

	this.instance_4 = new lib.u1_16();
	this.instance_4.setTransform(0,70);

	this.instance_5 = new lib.u1_14();
	this.instance_5.setTransform(0,489);

	this.instance_6 = new lib.u1_12();

	this.instance_7 = new lib.u1_10();
	this.instance_7.setTransform(1,209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,560);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,102);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_26();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,73);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("A/7mjMA/3AAAIAANHMg/3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("A/7GkIAAtGMA/3AAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-44,413,88);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("A/7mjMA/3AAAIAANHMg/3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("A/7GkIAAtGMA/3AAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-44,413,88);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("A/7mjMA/3AAAIAANHMg/3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("A/7GkIAAtGMA/3AAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-44,413,88);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("A/7mjMA/3AAAIAANHMg/3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("A/7GkIAAtGMA/3AAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-44,413,88);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("A/7mjMA/3AAAIAANHMg/3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("A/7GkIAAtGMA/3AAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-44,413,88);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("A2OmjMAsdAAAIAANHMgsdAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("A2OGkIAAtGMAsdAAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.3,-44,288.8,88);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("Ap0mjITpAAIAANHIzpAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("Ap0GkIAAtGITpAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-44,129.9,88);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,1,1).p("AikmjIFJAAIAANHIlJAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.247)").s().p("AijGkIAAtGIFHAAIAANGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-44,37,88);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u2rez_05();
	this.instance.setTransform(-31,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-33,62,66);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(31.4,45.4,1,1,0,0,0,31.4,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,90.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(31.4,45.4,1,1,0,0,0,31.4,45.4);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(31.4,45.4,1,1,0,0,0,31.4,45.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(37,42.6,1,1,0,0,0,37,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,85.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(12.3,24.6,1,1,0,0,0,12.3,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.7},3).to({x:12.3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.6,49.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgVBPIgJgFIgHgGIgCgFIABgEIACgFIgEhzIgCgEIgBgEIgBgEQAAgEAEgCQADgCAGAAIAIABIAHADIAFAEQADACAAADQAAAFgDACIgEAGIACAnIAGgDIAHgCIAGgBIAGgBQAPAAAJAHQAEADADAGQACAGAAAGQAAAHgCAHIgHAOQgEAHgFAGIgLAMIgKAJIgIAHQgCAFgDABIgGACQgEAAgEgDgAgDAAQgGADgEAEIACAmIAIgFIAIgJIAJgLQADgGAAgEQAAgHgCgDQgCAAgHAAQgGAAgDAAg");
	this.shape.setTransform(106.3,20.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgJBSQgIgEAAgDQAAgEAEgGIAAhwIgQACQgFAFgEABQgKABgCgOIAAgEQAAgGADgDQADgEAFgBIAKAAIA3gIQAGgFADgBQAFgBAFAIQAFAGABAGQAAAFgCAEQgDAEgDAAIgMgDIgTADIAAB3QADAHAAAFQAAADgDABQgDACgFAAQgGAAgHgDg");
	this.shape_1.setTransform(96,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgaBLQgJgGAAgEIABgDIAAgFIAAh6IAAgCIgBgCQAAgHAMAAQAJAAACADIAWgEIADgCQAEgCADAAQAGAAAFAHQAFAFAAAGQAAAEgCACQgEAEgGAAIgJABIgWAEIAAAuIAHgCIAFgBQAGAAAIAFQAHADAAAGIgBADQgDAHgHAAIgNABIgJACIAAAgIAPgDQADgDAEAAQAHAAAGAGQAGAFAAAGQAAAFgHADIgGAAIgJACIgaAHQgFAAgHgHg");
	this.shape_2.setTransform(86.8,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAjBdQgIgDAAgEQAAgDADgGIACgZIhBAHIAAATQAEAHgBAFQAAADgDACQgCABgGAAQgKABgGgEQgHgEABgDQAAgEADgGIAAgbQgDgFAAgEQAAgFADgCQACgCAHAAQABAAAEACIAOgzQAIgbAHghQgEgGAAgDQAAgEAEgDQADgCAIAAQAFAAAEACIAJAEQAEgCAGgBQAJABAHAEQAGAEAAAFIgFAMIAGBaIAGgBQAHAAADAFQADAEABAFQAAACgGAJIgCAgQAEAGAAAGQAAADgDABQgDACgGAAQgHAAgHgEgAgRAfIAjgDIgHhgIgDgBg");
	this.shape_3.setTransform(75.4,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgeBFIgJgJQgEgFAAgDQAAgGAEgDQADgDAFAAQAFAAADACIAGAEQAEACADABQACAAADgEIAJgMQAMgRAAgHQAAgBAAgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgEAAgJAGQgIAGgCAAQgIAAgGgFQgDgCgCgEQgBgDAAgEQAAgCAHgDQAJgDADgCQAJgIAIgLQAEgFADgFQADgGAAgDQgBgEgEAAQgKADgOAMIgGAEQgEADgDAAIgHgCIgGgEQgFgHgBgJQAAgFAHgBIALgCIAZgNQAMgHAKAAQAEABAFABQADACADADIAFAIQABAFAAAFQAAALgGAMIgFALIgIAJQALADAHAEQAFAFAAAFQABAIgGAMQgFAMgMAOQgWAegLgBQgGAAgOgLg");
	this.shape_4.setTransform(63.3,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgtBQQgHgCgGgGQgGgGABgDQABgDAFgFIATg9QAMgkAJgYQgCgHACgCQACgFAGAAIAFAAIAEAAQAGABAFACQAHACABADQABACgDALQAHAeAMAqQAJgFAGABQAGABAEAGQADAGAAAGQAAAKgNAAIgEAAIgEgBIAHAXQAGAHAAAFQAAAFgJADIgJABQgMAAgBgFQgCgJAAgCIgIgZIgqAHIgFASQACAHgCAFQgBAEgFAAIgHgBgAgTAVIAbgFIgKgsg");
	this.shape_5.setTransform(51.2,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgiBOQgIgDAAgEQAAgDADgGIAAh4QgCgGAAgDQAAgEADgDQAEgCAGAAQAIgBAGAEQARgIALAAQAIAAAGAEIAGAFIAFAGQAEAEAAAHQAAASgSAhQgSAhgMAAQgCAAgEgFIAAAoQAEAGAAAGQAAADgEABQgCACgHAAQgGAAgIgEgAgLgrIAAArQACAAAEgCQAFgGADgLQAHgKACgIQADgJAAgFQABgHgGAAQgIAAgNAPg");
	this.shape_6.setTransform(39.3,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(72,20.5,1,1,0,0,0,72,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,148.1,45.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgUBLIgIgFIgHgGIgCgEIABgEIACgFIgEhsIgCgFIgBgDIgBgDQABgEADgCQADgCAGAAIAHABIAHACIAFAEQACACAAADQAAAEgCADIgEAFIABAlIAGgCIAHgDIAGgBIAFgBQAPAAAIAHQAEADADAFQACAGAAAGQgBAGgCAHQgCAHgEAGQgEAGgEAGIgKALIgLAKIgHAGQgCAEgDACIgFABQgEAAgEgCgAgDAAQgFADgEADIACAlIAHgFIAIgIIAIgLQADgFABgFQgBgGgCgDQgCAAgGAAQgGAAgDAAg");
	this.shape.setTransform(104.4,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgJBNQgHgDAAgEQAAgDADgFIAAhrIgOADQgFAEgEABQgJABgCgNIAAgEQAAgFADgEQACgDAGgBIAJAAIAzgIQAGgFADAAQAFgBAEAHQAFAGABAGQAAAFgCADQgDADgDABIgLgDIgSADIAABwQADAGAAAFQAAADgCACQgDABgGAAQgEAAgIgDg");
	this.shape_1.setTransform(94.7,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgqBMQgHgCgGgGQgGgFABgDIAGgIQAKgjAIgXQALgiAJgWQgBgHABgCQACgFAGABIAEAAIAEAAQAFAAAGACQAGACABAEIgBAMQAFAcAMAoQAJgGAFABQAGABADAGQAEAFAAAGQAAAJgNAAIgEAAIgDAAIAGAWQAGAGAAAFQAAAFgJACIgIABQgLAAgBgEIgCgLIgIgXIgnAGIgFARQABAIgBADQgBAFgFAAIgGgBgAgSAUIAagFIgJgqg");
	this.shape_2.setTransform(82.9,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AghBKQgGgEAAgDQgBgDAEgGIAAhxQgEgFABgDQgBgFAEgCQADgCAHAAQAHAAAHADQAPgHAKAAQAIgBAFAEIAGAGIAFAEQADAFABAGQgBARgQAgQgSAegLABQgCAAgDgFIAAAlQACAHAAAEQABADgDACQgDABgGAAQgGAAgIgDgAgKgoIAAApQABgBAFgCIAHgPIAJgSQACgIABgFQAAgGgGgBQgHAAgMAPg");
	this.shape_3.setTransform(71.8,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgdBIQgIgHAAgDQAAgEADgFIgFhrQgDgGAAgEQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQADgCACAAIAHAAQAHAAAFABIAlgGQAGgEADAAQAFAAADAIQAEAHAAAGQAAAEgDADQgDADgDAAQgEAAgHgDIglAGIACAhQAFgDAGgCQAFgCAJAAQAeAAAAAaQABAIgHAOQgSAegVAPQgDAFgHABIgBAAQgHAAgIgIgAgMAIIABAmQALgHAGgIQAHgIADgJQABgHgDgDQgCgDgFgBQgMABgHAHg");
	this.shape_4.setTransform(62.6,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgqBMQgHgCgGgGQgGgFABgDIAGgIQAKgjAIgXQALgiAJgWQgBgHABgCQACgFAGABIAEAAIAEAAQAFAAAGACQAGACABAEIgBAMQAFAcAMAoQAJgGAFABQAGABADAGQAEAFAAAGQAAAJgNAAIgEAAIgDAAIAGAWQAGAGAAAFQAAAFgJACIgIABQgLAAgBgEIgCgLIgIgXIgnAGIgFARQABAIgBADQgBAFgFAAIgGgBgAgSAUIAagFIgJgqg");
	this.shape_5.setTransform(51.2,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgcBBIgKgJQgDgEAAgDQAAgGAEgCQADgDAFAAQAEAAADABIAGAFIAGADQACgBADgDIAIgMQAMgPAAgHQAAgBAAgBQgBAAAAgBQAAAAgBAAQgBgBAAAAQgDABgJAFQgHAGgDABQgHgBgGgFIgEgFQgCgDAAgEQAAgBAHgDIALgGQAJgGAHgLQAFgFACgFQACgEABgFQgBgCgEgBQgJACgOAMIgFAEQgEADgDAAQgDAAgDgCIgGgDQgFgHAAgJQAAgEAGgBIALgCIAXgNQALgGAJAAQAFAAAEACQAEACACADIAEAHIABAKQAAAKgEALIgGAKIgIAIQALADAGAFQAGAEAAAEQAAAJgFAKQgGALgKAOQgVAcgKAAQgHAAgMgLg");
	this.shape_6.setTransform(39.7,20);

	this.instance = new lib.Символ29();
	this.instance.setTransform(72,20.5,1,1,0,0,0,72,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,148.1,45.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(83.9,16.5,1,1,0,0,0,90.4,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,5.7,180.8,21.6);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(72,20.5,1,1,0,0,0,72,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,148.1,45.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(72,20.5,1,1,0,0,0,72,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,148.1,45.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(17.5,9.5,0.714,0.714,0,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,2.7,25,13.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ21();
	this.instance.setTransform(217.5,43.3,0.997,0.997,53.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:0,y:329.5},17).wait(1).to({y:9.5},0).to({regX:17.6,scaleX:1,scaleY:1,rotation:1136.9,x:217.6,y:26.4},1).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(137.5,77,0.998,0.998,160.2,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,y:329.5},15).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1250.7,y:60.1},3).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(57.6,110.5,0.998,0.998,-70.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:0,x:57.5,y:329.5},13).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1364.1,y:93.7},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(177.5,144.2,0.997,0.997,34.6,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:0,y:329.5},11).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1117.9,y:127.4},7).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(341.5,177.9,0.997,0.997,136.4,0,0,17.6,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.5,regY:9.5,scaleX:1,scaleY:1,rotation:0,y:329.5},9).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1231.7,y:161.1},9).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_5 = new lib.Символ21();
	this.instance_5.setTransform(257.5,211.6,0.999,0.999,-82.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:0,y:329.5},7).wait(1).to({y:9.5},0).to({rotation:1345.4,y:194.8},11).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_6 = new lib.Символ21();
	this.instance_6.setTransform(297.5,245.4,0.998,0.998,15.6,0,0,17.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:9.5,scaleX:1,scaleY:1,rotation:0,y:329.5},5).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1098.8,y:228.5},13).wait(1));

	// Слой 1 - копия: 2
	this.instance_7 = new lib.Символ21();
	this.instance_7.setTransform(383.5,279.1,0.998,0.998,99.3,0,0,17.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,y:329.5},3).wait(1).to({y:9.5},0).to({regX:17.6,scaleX:1,scaleY:1,rotation:1212.6,y:262.3},15).wait(1));

	// Слой 1 - копия
	this.instance_8 = new lib.Символ21();
	this.instance_8.setTransform(97.6,312.6,0.998,0.998,-56.9,0,0,17.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,x:97.5,y:329.5},1).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1326.4,y:295.8},17).wait(1));

	// Слой 1
	this.instance_9 = new lib.Символ21();
	this.instance_9.setTransform(7.5,9.5,1,1,0,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:1080,y:329.5},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,2.7,397.3,324.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(31,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,66);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2-rez_08.png
	this.instance = new lib.Символ15();
	this.instance.setTransform(32,13,1,1,0,0,0,4,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.6,y:13.1},7,cjs.Ease.get(-1)).to({rotation:7.4,y:13},7,cjs.Ease.get(1)).to({rotation:3.3,x:31.9},8,cjs.Ease.get(-1)).to({rotation:0,x:32},7,cjs.Ease.get(1)).wait(1));

	// 2-rez_03.png
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(10,19,1,1,0,0,0,33,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4.8},7,cjs.Ease.get(-1)).to({rotation:-10,y:19.1},7,cjs.Ease.get(1)).to({rotation:-4.5,y:19},8,cjs.Ease.get(-1)).to({rotation:0},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(31,33,1,1,0,0,0,31,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-21,99,87);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2-rez_05.png
	this.instance = new lib.Символ17();
	this.instance.setTransform(86,78.1,1,1,0,0,0,21,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4},19).to({rotation:0},20).wait(1));

	// 2-rez_14.png
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(63.5,131,1,1,0,0,0,63.5,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,141,202);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
		this.parent.win.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Слой 7
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(204.7,389);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(204.6,389);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация5("synched",0);
	this.instance_2.setTransform(204.7,389);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация6("synched",0);
	this.instance_3.setTransform(205.7,389);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация7("synched",0);
	this.instance_4.setTransform(206.7,389);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация8("synched",0);
	this.instance_5.setTransform(206.7,389);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация9("synched",0);
	this.instance_6.setTransform(206.7,389);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация10("synched",0);
	this.instance_7.setTransform(206.7,389);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true,x:204.6},2).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},2).to({_off:true,x:204.7},2).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},2).to({_off:true,x:205.7},2).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58).to({_off:false},2).to({_off:true,x:206.7},2).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},2).to({_off:true,alpha:0},2).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:false},2).to({_off:true,alpha:1},3).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(64).to({_off:false},3).to({_off:true,alpha:0},3).to({_off:false,alpha:1},6).to({_off:true,alpha:0},5).to({_off:false,alpha:1},5).to({startPosition:0},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},3).to({_off:true,alpha:1},6).to({_off:false,alpha:0},5).to({_off:true,alpha:1},5).wait(4));

	// Слой 1
	this.instance_8 = new lib.Символ7();
	this.instance_8.setTransform(40.5,280,1,1,0,0,0,41.5,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:272},4).to({y:542},10).to({y:280},1).to({y:542},9).to({y:280},1).to({y:426},9).wait(56));

	// Символ 7
	this.instance_9 = new lib.Символ7();
	this.instance_9.setTransform(289.5,280,1,1,0,0,0,41.5,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({y:272},4).to({y:542},10).to({y:280},1).to({y:542},9).to({y:280},1).to({y:426},9).wait(54));

	// Символ 7 - копия
	this.instance_10 = new lib.Символ7копия();
	this.instance_10.setTransform(122.5,280,1,1,0,0,0,41.5,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({y:272},4).to({y:542},10).to({y:280},1).to({y:542},9).to({y:280},1).to({y:426},9).wait(52));

	// Символ 7 - копия 2
	this.instance_11 = new lib.Символ7копия2();
	this.instance_11.setTransform(205.5,280,1,1,0,0,0,41.5,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({y:272},4).to({y:542},10).to({y:280},1).to({y:542},9).to({y:280},1).to({y:426},9).wait(48));

	// Символ 7 - копия 2
	this.instance_12 = new lib.Символ7копия2();
	this.instance_12.setTransform(371.5,280,1,1,0,0,0,41.5,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({y:272},4).to({y:542},10).to({y:280},1).to({y:542},9).to({y:280},1).to({y:426},9).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,415,560);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(37,42.6,1,1,0,0,0,37,42.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(88.8,15.8,1,1,0,0,0,88.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,5.7,180.8,21.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(71,101.5,1,1,0,0,0,71,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:111.5},29).to({y:101.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,141,202);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggBAQBMAAAggBMBADAAAMAAAAgBg");
	mask.setTransform(224.1,34.6);

	// 2-rez_08.png
	this.instance = new lib.Символ14();
	this.instance.setTransform(322,66.5,0.817,0.817,0,0,180,71,101.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 2-rez_22.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(225.5,106,1.01,1.01,0,0,0,203.5,34);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 2-rez_17.png
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(402.4,-134.5,1,1,0,0,180,17.5,9.5);

	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(47.5,-140.5,1,1,0,0,0,17.5,9.5);

	this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,-67.9,409.2,205.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.parent.rol.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AifiuIE/AAIAAFdIk/AAg");
	this.shape.setTransform(-306,-200.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AifCvIAAlcIE/AAIAAFcg");
	this.shape_1.setTransform(-306,-200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},92).wait(58));

	// Слой 9 - копия
	this.instance = new lib.Символ32();
	this.instance.setTransform(19.7,221.9,0.805,0.805,180,0,0,12.3,24.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:18.2,y:33.7,alpha:1},7).wait(135).to({x:19.7,y:221.9,alpha:0},7).wait(1));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EggLAQLMAAAggVMBAXAAAMAAAAgVg");
	var mask_graphics_142 = new cjs.Graphics().p("EggLAQLMAAAggVMBAXAAAMAAAAgVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:225.1,y:34.6}).wait(142).to({graphics:mask_graphics_142,x:225.1,y:34.6}).wait(8));

	// Слой 9
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(195.7,-156.5,0.805,0.805,0,0,0,12.3,24.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:201.4,y:-32.7},7).wait(135).to({x:195.7,y:-156.5},7).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(556.9,-34.7,1,1,0,0,0,88.8,15.8);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(333.7,-35.5,0.921,0.921,0,0,0,88.8,15.8);

	this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},135).to({state:[{t:this.instance_2}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:0.92,scaleY:0.92,x:333.7,y:-35.5,alpha:1},7).wait(142).to({_off:false,scaleX:1,scaleY:1,x:556.9,y:-34.7,alpha:0},0).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(-89.9,-33.4,1,1,0,0,0,72,20.5);
	this.instance_4.alpha = 0;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:110.1,alpha:1},7).wait(135).to({x:-89.9,alpha:0},7).wait(1));

	// Слой 5
	this.instance_5 = new lib.Символ23();
	this.instance_5.setTransform(-89.9,33.6,1,1,0,0,0,72,20.5);
	this.instance_5.alpha = 0;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:110.1,alpha:1},7).wait(135).to({x:-89.9,alpha:0},7).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ10();
	this.instance_6.setTransform(203.5,72,1,1,0,0,0,203.5,72);
	this.instance_6.alpha = 0;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.01,scaleY:1.01,y:73,alpha:1},4).wait(140).to({scaleX:1,scaleY:1,y:72},0).to({alpha:0},5).wait(1));

	// Слой 8
	this.instance_7 = new lib.Символ25();
	this.instance_7.setTransform(224.7,-252.4,1,1,0,0,0,220.6,128.6);
	this.instance_7.alpha = 0;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:27.6,alpha:1},4).wait(141).to({y:-252.4,alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-219,754,460.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(57.2,182.4,1,1,0,0,0,31.4,45.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ36(), 3);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(111.6,167,1,1,0,0,0,37,42.6);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ35(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.u1_03();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,299);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1_23.png
	this.instance = new lib.Символ5();
	this.instance.setTransform(139,194,1,1,0,0,0,39,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.5},29).to({rotation:0},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(87.5,149.5,1,1,0,0,0,87.5,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// 1_26.png
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(29.5,205.5,1,1,0,0,0,38.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4.2},29).to({rotation:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,0,184,299);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.win = new lib.Символ9();
	this.win.setTransform(203.1,155,1,1,0,0,0,203.5,72);

	this.timeline.addTween(cjs.Tween.get(this.win).wait(1));

	// Слой 1
	this.instance = new lib.u1_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ATNQCIAAgFIAA/xIAAgEIM2AAIAAf6gAGRP9IAAgMIAA/lIAIAAIgIAAIAAflIslAAIgEAAIAA/hIAAgIIMxAAIAAAEIM0AAIAAfxgAzHP5IAA/pIAAfpIs8AAIAA/6IM8AAIAAARIMvAAIAAfhIAEAAIAAAIgAmUPxg");
	mask.setTransform(224.3,117.4);

	// Слой 2
	this.rol = new lib.Символ8();
	this.rol.setTransform(60,8,1,1,0,0,0,41.5,280);

	this.rol.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rol).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.9,-298,964.9,622.7);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(96.5,149.5,1,1,0,0,0,87.5,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:154.5},39).to({y:149.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,299);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 30;
		this.fon.y = - stage.mouseY / 30;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.setTransform(83,162.5,1,1,0,0,0,92,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(400,154,1,1,0,0,0,224.5,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.fon = new lib.Символ40();
	this.fon.setTransform(0,55.2,1,1,0,0,0,25,194.2);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172.5,-109.6,964.9,684.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
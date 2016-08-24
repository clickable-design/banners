(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/aa1.png", id:"aa1"},
		{src:"images/aa2.png", id:"aa2"},
		{src:"images/aa3.png", id:"aa3"},
		{src:"images/aa4.png", id:"aa4"},
		{src:"images/aa5.png", id:"aa5"},
		{src:"images/aa6.png", id:"aa6"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/big_chain.png", id:"big_chain"},
		{src:"images/body.png", id:"body"},
		{src:"images/brest.png", id:"brest"},
		{src:"images/head.png", id:"head"},
		{src:"images/left.png", id:"left"},
		{src:"images/right.png", id:"right"},
		{src:"images/saw.png", id:"saw"},
		{src:"images/small_chain.png", id:"small_chain"}
	]
};



// symbols:



(lib.aa1 = function() {
	this.initialize(img.aa1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,44);


(lib.aa2 = function() {
	this.initialize(img.aa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.aa3 = function() {
	this.initialize(img.aa3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,17);


(lib.aa4 = function() {
	this.initialize(img.aa4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,85);


(lib.aa5 = function() {
	this.initialize(img.aa5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,21);


(lib.aa6 = function() {
	this.initialize(img.aa6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,44);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.big_chain = function() {
	this.initialize(img.big_chain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,123);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,267);


(lib.brest = function() {
	this.initialize(img.brest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,90);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,98);


(lib.left = function() {
	this.initialize(img.left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,88);


(lib.right = function() {
	this.initialize(img.right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,157);


(lib.saw = function() {
	this.initialize(img.saw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,114);


(lib.small_chain = function() {
	this.initialize(img.small_chain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,24);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa3();
	this.instance.setTransform(0.3,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.1,16,17);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa2();
	this.instance.setTransform(0.3,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.1,13,13);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa5();
	this.instance.setTransform(1,0.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0.2,15,21);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("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AHAAIAIAFQgDAEAAAIIACANIAAANQgCAGgFgBQgNgFAAgGIAAgGIgiAAQgFALAAATIADAcIACAyQAUAFAjAAQAGgCAAgMIABgIQACgEAEgCQAOAAAAAcQAAAGgOAMgAQ4CJQgHgBgFgDQgIgFgBgFQgBgFAEgFQAFgJANgGQAGAAAEACQAFADAFAGQAHAJgNARQgEADgFAAIgFgBgAQxBJQgDgEAEgHQAAgIANgVIATgcIATgfQAHgVAAgMQgBgJgCgHQgDgIgHgGQgFgIgPgFQgHgDgGgBQgHAAgFACQgHACgGAEQgIAFgEAGQgFAHgCAIQgCAHADAIQACAEAGABIALACQAQACAEADQAHAEAAAEQABAEgDAEQgFADgGABQgIACgHgDQgJAAgGgDQgFgEgFgIQgGgGgEgIQgCgIAAgKQAAgJACgIQAEgJAGgFQAHgLAZgEQAOAAAMABIAUAFQAIAEAIAEIAOALQAOAaAAAQQAAAIgDAIIgRApQgZAfgHAQQgEADgGAOQgCAEgDACQgEADgHAAQgFAAgCgFgAN8iQQgKgDgGgIQgGgGgCgJQAEgFAMgEQAEACADAIQACAHAFACQAOABAHgBQAKgBAIgFIAAABQAGgHAFAAQALADABAHQgHAGgIAGIgGAEQgNAEgMAAIgDABQgJAAgKgDg");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C6400").s().p("AJUCwQgEgCACgMQABgMgCgDQgEgFgEAAIg2gBQhFgBgWAEQgNgGAEgLQACgIAAgPQAEgdAAhFIgBg4QAAgRgGgpQAAgFgPgFIAAgMIAIAAIAggCQAUgBAMABQAFAAABABIAAAGQgEAHgFAEQgFAEAAACQgDAjgBASQgBAHADAPQACAQgBAIQgCAeAAARQACAWAAAMIAAArIABAFQABABAFAAIAOAAIA2AAIABAAQAEgegGg4IgCg0IACgSIAAhPIgMgEQgFgCABgEIAAgHQABgBAFgBQANgDAXACQAWACACADQACAGgIAFQgIAEAAAGIAABPQgBAlABATQACAfACBAIAIAAQAHAAAFADIAHALQACAOAAAUQABAGgKADIgFABQgGAAgFgEgANFCPQgEgCgDgGQgDgGAAgJIAAgXQAAgWADgeIABgVIgBgYIAAhGQgEgGAAgOQAAgOgEgFQgGAAgHgHQgHgFAHgFIAbAAIAUgDQALgBAHAEQAGAAAEADQAEAEAAADQAAAEgIACIgMABQgCABgCAJIADA4IgCA6IgBA0QAFgKAGgSQAHgOAAgDQATgjAAgDIAxhlQABgHADgEQAFgEAHAAIAfAAQAKAEAAAJQAAAKgKAAQgEAHgCANIgBB2QAAAOAEAfQADAgAAAOIAKAFQAEACAAAEIAAAGQAAADgGACQgIACgDgBIgyAAQgFgEACgCIAFgGQABgDAGgDQAHgDAAgCQADgQAAgTIgBgkIgChEIAAgcQAAgYgBgNIgZA3IgGAIQgMAWgDAJQgNAhgHAOQgQAfgFAMIgPAfQgFAJgFADQgDABgCAAIgFgBgADiCPQgEgCgEgGQgDgGABgJIAAgXQAAgWADghIACgZQgBgOgCgMIAAg9QgDgGAAgOQAAgOgDgFQgHAAgIgHQgGgFAGgFIAcAAIAUgDQAKgBAIAEQAGAAADADQAFAEAAADQAAAEgIACIgMABQgDABgBAJIACA4IgBA6IgBA0QAFgKAGgSQAIgOgBgDIATgmIAxhlQAAgHAEgEQAFgEAIAAIAhAAQALAEAAAJQAAAKgLAAQgFAHgBANIgBB2QAAAOAEAfQADAgAAAOIAKAFQAEACAAAEIAAAJIgHACQgGACgEgBIg2AAQgEgEABgCIAGgGQAAgDAHgDQAHgDAAgCQADgQgBgTIAAgkIgChEIAAgcQAAgYgCgNIgZA3IgFAIQgMAWgDAJQgNAhgHAOIgVArIgPAfQgEAJgGADIgGABIgEgBgAClCPIgoAAQgEgEAAgCIAGgGQABgDAGgDQAHgDAAgCQACgQABgTIgBgkIgChEQAAgGgHAAQgHgCgKAAIgRAAIgiACQgKAIgCAJQgCAHAAAOIAABOQADAGAAAJQAAAIAEAGQAHAAAEAGQAFAHgJADIgiADQgTABgNgEQgIgKAIgGIALAAIAAi+QgDgGAAgOQgBgOgDgFQgEAAgIgHQgGgFAGgFIAZAAIAZgDQAPgBAJAEQAFAAAEADQAEAEABADQgBAEgHACIgNABQgEACABAHIADANIgDAUQgBANAEAHQAVADAUAAQAVAAAUgDIgBggQgBgTgFgLQgEgEgKAAQgKAAgDgDIAAgKQAKgFAJgBQALgBAKABIAWAAQAKAEAAAJQAAAKgKAAQgFAHgCANIgBB2QABAOADAfQAEAgAAAOQABACAIADQAFACgBAEIAAAMQgCgFgEAEIgJABIgCAAgAgpCPIgnAAQgFgEABgCIAGgGQAAgDAHgDQAGgDABgCQACgQAAgTIAAgkIgChEQgBgGgGAAQgIgCgJAAIgSAAIgiACQgJAIgDAJQgCAHABAOIAABOQACAGAAAJQAAAIAFAGQAGAAAFAGQAEAHgJADIgiADQgSABgQgEQgHgKAHgGIAOAAIAAi+QgEgGAAgOQAAgOgEgFQgGAAgHgHQgHgFAHgFIAbAAIAZgDQAPgBAIAEQAGAAADADQAFAEAAADQAAAEgIACIgMABQgFACABAHIAEANIgEAUQgBANAFAHQAUADAUAAQAVAAAVgDIgBggQgCgTgEgLQgEgEgKAAQgLAAgCgDIAAgKQAKgFAJgBQAKgBALABIAWAAQAKAEAAAJQAAAKgKAAQgGAHgBANIgBB2QAAAOADAfQAFAgAAAOQAAACAJADQAEACAAAEIAAAMQgCgFgEAEIgKABIgCAAgAm+COQgZgCgKADQgFgIADgGQACgEAHgFQgGgUgDgVIgGhPIgEgnIgGgIQgDgDgFAAQgDAVgHAYIgNApQgQA6gEAfQADABADACQAFADACAAIAAAFQABAHgIAAQghgCgMACQgEgGAAgGQAAgDAEgCIAOgBQAEgGABgKIACgRQAGgjAWhDQAIgcAEgdQAGgdABgcIAHgFQARgFAJACQAGABADAEQAEADACAGQANBQAJAoIAYB7QAIABADABQAGACAEAHQAAAFgHACIgIAAIgZgBgAwnCMIgegFQgdgRgNgRQgVhAgBghIAKgqQAFgbAHgQQADgDADgGQADgFAEgEQAGgGAIgGQAIgGAJgFQALgFALgDQAMgDANAAIAbAHQANADAJAHQAAADADADQAEACAAADQAAAdgHABQgHAAgDgNQgDgPgBgCQgQgDgPAAQgPAAgKADQgDAEgIALQgHAMgEADQAAAGgGAFQgGAQAAAQIgBBFIAGAbQAFAOAFALQAHAOAHAHQAJALAKAEQAJADALgCIAWgIQADgFAAgPQAAgOADgGQAJAAAFADIAIADIAAApQgDAEgFAEQgEAEgHADQgLADgTAAQgNAAgUgDgAsVCMQgEAAgBgDIgBgGQAAgEAEgCIAJgFIAAiUQAAgOACggIABgYQAAgOgDgLIgMgBQgIgBAAgDQAHgLAhAEICOAAQAKAAgDAJQgDAJgLAAIABDdQACAQAEAHQAAACAIACQAGABAAAHQgKABgMABIgWAAIgsgCQAAgMAHAAIAGAAQAIgsgBhqIAAg4IACgVQACgLgEgGIg9AAIgDBNQgDAyAAAaIgBBPQABAFAHAFQAJAFgDAGQgBAEgHABIgQACIgFAAQgQAAgQgDgALnCPQhFAAgpgHIAAgLIAcAAQACgMABgMIAAgXIgDgxIAAiLIgcAAIAAgLQAOgDAcgDIApgGIBEAAQAHAGAAAGQAEANAAAIQAAAFgEAEQgDAEgLgBQgDgCAAgJQAAgJgDgCIgOgGQgjABgNAFQgFADgBAIIgBAzIACAWQACALgEAHQAHAFAiAAIABgLQACgFAEAAIAHAAIAHAFQgCAEAAAIIABANIAAANQgCAGgEgBQgOgGAAgFIAAgGIgiAAQgEALAAATIACAcIACAyQAVAFAiAAQAHgDAAgKIABgJQABgEAEgCQAOAAAAAcQAAAGgOAMgAkZCPQhGAAgpgHIAAgLIAcAAQADgMAAgMIAAgXIgDgxIAAiLIgcAAIAAgLQAPgDAbgDIAqgGIBDAAQAIAGAAAGQAEANgBAIQABAFgEAEQgEAEgKgBQgDgCgBgJQAAgJgDgCIgOgGQgiABgNAFQgGADAAAIIgCAzIADAWQABALgEAHQAIAFAiAAIABgLQABgFAEAAIAHAAIAIAFQgDAEAAAIIACANIAAANQgCAGgFgBQgNgGAAgFIAAgGIgiAAQgFALAAATIADAcIACAyQAUAFAjAAQAGgDAAgKIABgJQACgEAEgCQAOAAAAAcQAAAGgOAMgAQ4CJQgHgBgFgDQgIgFgBgFQgBgFAEgFQAFgJANgGQAGAAAEACQAFADAFAGQAHAJgNARQgEADgFAAIgFgBgAQxBJQgDgEAEgIQAAgHANgVIATgcIATgfQAHgUAAgNQgBgJgCgHQgDgIgHgGQgFgHgPgGQgHgDgGgBQgHAAgFACQgHACgGAEQgIAFgEAGQgFAHgCAIQgCAHADAIQACAEAGABIALACQAQACAEADQAHADAAAFQABAEgDAEQgFADgGABQgIABgHgCQgJAAgGgDQgFgEgFgIQgGgGgEgIQgCgIAAgKQAAgKACgHQAEgJAGgFQAHgLAZgEQAOAAAMABIAUAFQAIADAIAFIAOALQAOAbAAAPQAAAHgDAJIgRApQgZAfgHAQQgEADgGAOQgCAEgDACQgEADgHAAQgFAAgCgFgAN8iQQgKgDgGgIQgGgGgCgJQAEgFAMgEQAEACADAIQACAHAFACQAOABAHgBQAKgBAIgEIAAAAQAGgHAFAAQALADABAHQgHAGgIAGIgGAEQgNAEgMAAIgDABQgJAAgKgDg");
	this.shape_1.setTransform(0,1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.8,-18,231.6,37.1);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("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");

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C6400").s().p("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");
	this.shape_1.setTransform(0,1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.8,-15.9,173.6,32.9);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0rONIAA8ZMApXAAAIAAcZg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4CCQgDgCgBgGQAAgRgDgHQgDgOAFAAIAFAAQACgBAIAAQADgGABgHIABgPQAEgcAPg5QAFgXADgXQAEgYABgXIAFgFQAJgEAHACQADABADADQACACACAFQAJBDAGAjIARBkQAGAAADADIADACIABADIABABIAAABQACAKAAAVQAAAFgEABQgDAAgHgBQgDgDAAgKQAAgLgCgDQgDgEgCgBIgfAAIg+AAIACARQABAOgDADIgEABQgDAAgCgCgAgFgiIgJAmQgNA1gCAaIAyAAIAAgEQgBgZgGgrIgGhAQAAgHgCgGQgCgIgEAAQAAARgFAXgAjjBgQAAgEAFgHQAFgHADAAIAAgtQgBgPgEgZIgRgDQgNgCgIAAQgDADgBAHIgBANQgDANgCATIAAAkQACACAFAAQAFAAACACIAAAKQgFADgGABQgEABgHgBQgOgCgHADIgKgKQAJgJAGAAQADAAABgDIABgHIAOhpQAAgKADgLQADgKAEgIQAFgTATgdQAKgLAJAFQAEACAEAFIAGAJQAHALAAAIIAFANIACANIAGA8IAFBbQAAADAEAFQACAEgGADIgGgBIgcABIgIABQgFAAAAgDgAjuhjIgPAwQgEATAAAGQAOAEAYAAIAAgdQAAgKgCgOIgHgYQAAgFgFAAgAFnBgIgOgCQgJAAgCgCQgDgBAAgHIAAgFIAOAAQABgIAAgKIgCgoQAAgMABgJIACgvIABgZQAAgNgBgLIAAAAIgCgSIgHAAQgCgBAAgEIAAgFQAAgEALAAIATgCQAMgBAGADQADAEgDAFQgDAFgHAAQgBAJAAAMIAAAmIAKgBQAHABAOAIQAHAEAJAJQAGAGAFAJQAFAKACAKIABAMQABAMgBANQgCAMgEAKQgFALgGAJQgHAIgJAGQgHADgIABIgSAAQgFAAgJgCgAF2gbIgBBqIANAAQAHgBADgDIAKgKQAEgEACgNQADgFAAgGQADgFgBgKIgDgWIgFgQQgCgBgCgFQgHgHgGgEQgHgEgHAAQgDAEgBAGgAiBBhQgIgBgIgGQgIgHgDgIQgCgDAAgHIAAgRQABgVADgPQABgFAIAAQAIAAAAAFQgCARAAAbQABAJACAGQACAGAEABQAFAAAGgDIAIgHQAHgLAAgIQACgEAAgIQAFgJgFgWIABgJIgCgLIgBgFQgCgEgEgFQgFgDgHgBIgMAAQgEAAAAgKQABgJADAAIAEAAQAJgFAEgPQAEgKAAgMQAAgLgDgHIgFgDIgGgBIgMABIgJAFIgBAQQAAAKgDACQgEABgCgCQgCgCAAgFIgDgTIgCgKQgCgHADgCQABgFAJACQAFAAgBAGQAFAAAFgEQALgDAFABIAOADQAHACAEAEQAKAPAAAOQABAFgBAHQgCAGgDAHQgHAMgJAJIAPAJQAIAJAGALIAFANQACAFAAAIQACAJgBAKQgBAKgDAJQgFASgFAHQgFAIgGAFIgNAJQgHADgLABgADvBhQgDAAgCgDIAAgGIAHgCQAFgDACAAIAAisQgBgMgEgKQgHgCgHAAQgIAAgGADQgGADgCAFQgDAGABAJQgEAFgFgFIgCgRQgBgLADgGIAOgGQAJgCAJAAIAxgCQARAAAJACIALACQAFADABADQAEAQgBAGQgBAGgDACQgDAEgFAAQgDgDAAgHQAAgJgCgFQgDgDgKABIgQACQgDAGACALIABAQIAACWQgBAIABADQABACAHABQAHABAAAGQgFAEgFAAgACXBhQgvAAgcgFIAAgJIASAAQACgKAAgKIAAgUIgCgoIAAhzIgSAAIAAgJQAJgDATgCIAcgFIAvAAQAFAFAAAFQACALAAAGQAAAFgCADQgDADgHAAQgCgDAAgHQAAgHgDgCIgJgFQgXAAgKAFQgDADgBAGIAAAqIABATQABAJgCAGQAEAEAYAAIAAgJQABgFADAAIAFABIAFAEQgCADAAAHIABAMIAAAKQgBADgDAAQgJgDAAgEIAAgFIgYAAQgDAJABANIABAYIABApQAOAFAYAAQAFgCAAgKIAAgGQABgEADgBQAKAAAAAXQAAAFgKAJgAmuBeQgFgFAAgFIAFgEIAJAAQADgDAAgIIgBgNQAAgfABguIAAglQgBgKABgaIAAgKQAAgEgDgBIgHgCQgEAAgDgCQgJgGAMgJQAYgEAtABIAKAAQAHABAGAFQAGAFAGAIIAIAQQAEAJABAJQAAAdgEAKQgCAFgDAFIgIAJIgQAPQgHADgIABIgTABQgFAAAAACIgCA/QAAAIACAHQAMAAAEADQABABAAAAQABABAAABQAAAAAAABQABAAgBABQAAADgDADIgfACIgGAAQgNAAgIgCgAmFhiIAAASIACAkIAAAYQAEAEAGAAQAGABADgCQAHgEAFgIQAGgHACgIIACgMIABgQQAAgKgCgLQgCgLgEgHIgIgDQgGgCgFAAIgPAAQgCAIAAAKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44,-13.2,88,26.5);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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gHANQgFAKgIAEQgFAEgGACQgGACgGAAIgGABQgIAAgHgDgAAlhlQgEAHgEALQgDAGgBAIIgBAOQgBAOAAAOIAAAbQABAQAFAfQACADADAKQACAIADACQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIACAFQADACAFABIAKAAQAGgBAEgDQAFgCABgDQAIgVAEgSQAFgOAAgaIABgYIgBgcIgFgOIgFgPIgHgPQgFgJgGgDIgTgBQgHAHgEAIgAjgBfQgKgDgIgHQgIgHgFgIQgJgTgFgOQgEgSAAgkIgBgNQgBgIACgHIACgSIADgOQABgIADgDIAKgPQAGgJAFgFQAHgIAIgDQAJgDAMABQANAAAJAFIAIAFIAHAJQAFAEAFAFQAEAGAEAHQAEAHACAJQACAIABAJIABAZQABAfgFARQgDARgGAOQgFAOgHANQgFAKgIAEQgFAEgGACQgGACgGAAIgGABQgIAAgHgDgAjkhlQgEAHgEALQgDAGgBAIIgBAOQgBAOAAAOIAAAbQABAQAFAfQACADADAKQACAIADACQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIACAFQADACAFABIAKAAQAGgBAEgDQAFgCABgDQAIgVAEgSQAFgOAAgaIABgYIgBgcIgFgOIgFgPIgHgPQgFgJgGgDIgTgBQgHAHgEAIgApmBfQgKgDgIgHQgIgHgFgIQgJgTgFgOQgEgSAAgkIgBgNQgBgIACgHIACgSIADgOQABgIADgDIAKgPQAGgJAFgFQAHgIAIgDQAJgDAMABQANAAAJAFIAIAFIAHAJQAFAEAFAFQAEAGAEAHQAEAHACAJQACAIABAJIABAZQABAfgFARQgDARgGAOQgFAOgHANQgFAKgIAEQgFAEgGACQgGACgGAAIgGABQgIAAgHgDgApqhlQgEAHgEALQgDAGgBAIIgBAOQgBAOAAAOIAAAbQABAQAFAfQACADADAKQACAIADACQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIACAFQADACAFABIAKAAQAGgBAEgDQAFgCABgDQAIgVAEgSQAFgOAAgaIABgYIgBgcIgFgOIgFgPIgHgPQgFgJgGgDIgTgBQgHAHgEAIgAHQBhQgDAAgBgDIgBgGIAIgCQAEgDADAAIgBisQgBgMgDgKQgIgCgHAAQgHAAgGADQgGADgDAFQgDAGACAJQgFAFgFgFIgCgRQgBgLADgGIAPgGQAIgCAKAAIAxgCQARAAAIACIALACQAFADACADQADAQgBAGQgBAGgDACQgDAEgFAAQgCgDAAgHQAAgJgDgFQgCgDgKABIgQACQgDAGABALIACAQIgBCWQgBAIACADQABACAHABQAGABAAAGQgFAEgEAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.5,-13.2,133.1,26.5);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.saw();
	this.instance.setTransform(-51.5,-57);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.5,-57,103,114);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,255,0,0.949)").s().p("AIaJKQk/hckrjRQi9CNjjB/Ighg8QDMiECqiCQj6i7jukMIAwgoQEKEIDxC0QH3mMC7lyQA4AMgSAzQjeGjmwFTQFEDoEWBKQgBAugnAAIgKgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.5,-58.7,129,117.5);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkCLmQg5lriylbIADAAQg4gRg5gvQiFhyAFjSQAEjTEDh3QEDh3iNB9QiNB9CSDYQCRDXB2gKQB0gLh7A4Ii1BRIElg5QgBgzAdhHQBHivCFiMQCEiMA8gaQA9gbB7B0QB7BzgaCtQgHAzgOAtIgbB3QkIHACaCqQmVDLlYAAQgoAAgngDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.3,-74.5,146.6,149.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],0.1,11.8,-0.1,-11.8).s().p("AyBB6IAAjzMAkDAAAIAADzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.5,-12.2,231,24.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa1();
	this.instance.setTransform(-22,-22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.small_chain();
	this.instance.setTransform(-39,-12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-12,78,24);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.brest();
	this.instance.setTransform(-74,-45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74,-45,148,90);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.949)").s().p("Ag6AeIAAg9IB1ACIAAA9Qg7gZg6AXg");
	this.shape.setTransform(0,-0.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-3.6,12,6.6);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head();
	this.instance.setTransform(-41,-49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-49,82,98);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.right();
	this.instance.setTransform(-26.5,-78.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-78.5,53,157);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-320,-152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.left();
	this.instance.setTransform(-23,-44);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-44,46,88);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.left();
	this.instance.setTransform(-23,-44);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23,-44,46,88);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aa4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой 2
	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(8.2,8.9,1,1,0,0,0,7.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:8.6,rotation:-15,x:6.5,y:10.6},14).to({regY:8.7,rotation:0,x:8.2,y:8.9},15).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ54();
	this.instance_2.setTransform(18,5.7,1,1,0,0,0,6.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:6.6,scaleY:1,skewX:-13.5,skewY:-8,x:16.5,y:6.3},14).to({regX:6.5,scaleY:1,skewX:0,skewY:0,x:18,y:5.7},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,85);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(9,25.3,1,1,0,0,0,7.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7.7,rotation:15,x:9.3,y:24.7},14).to({regX:7.6,rotation:0,x:9,y:25.3},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.aa6();
	this.instance_1.setTransform(0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.1,24,44);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.setTransform(175.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1.03,scaleY:1.03},4,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(-204.7,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},4,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13},5,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.5,-18.2,583,37.5);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ43();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.14,scaleY:1.14,x:-6,y:-1.8},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-9.6,y:-2.9},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-12.1,y:-3.7},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-14.2,y:-4.3},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:-15.9,y:-4.9},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-17.3,y:-5.3},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:-18.4,y:-5.6},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:-19.1,y:-5.9},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.45,scaleY:1.45,x:-19.6,y:-6.1},0).wait(1).to({regX:0,regY:0,scaleX:1.44,scaleY:1.44,x:-19.2,y:-5.8},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:-18.5,y:-5.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-17.6,y:-5.3},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-16.4,y:-4.9},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-14.9,y:-4.5},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-13,y:-3.9},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-10.8,y:-3.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-8.2,y:-2.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-4.8,y:-1.4},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-13.2,88,26.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(9));

	// Слой 1
	this.instance = new lib.Символ42();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:6.3,y:-1.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:10.3,y:-2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:13.1,y:-2.6},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:15.5,y:-3.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:17.4,y:-3.4},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:18.8,y:-3.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:19.8,y:-3.9},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:20.6,y:-4.1},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:21.3,y:-4.2},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:20.3,y:-4},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:19.2,y:-3.8},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:17.6,y:-3.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:15.6,y:-3.1},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:13,y:-2.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:9.7,y:-1.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:5.5,y:-1.1},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-13.2,133.1,26.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2.8,y:2.8},5,cjs.Ease.get(-1)).to({x:6,y:6},6,cjs.Ease.get(1)).to({x:3.3,y:3.3},6,cjs.Ease.get(-1)).to({x:0,y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-57,103,114);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.small_chain();
	this.instance.setTransform(8.4,-24,1,1,-18.5);

	this.instance_1 = new lib.small_chain();
	this.instance_1.setTransform(-25.7,-53.1,1,1,23.7);

	this.instance_2 = new lib.Символ39();
	this.instance_2.setTransform(41,-4);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.4,-61,127.9,114);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-66,-61,133,122);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-65.7,146,134);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.alpha = 0.551;
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-75,-76,151,153);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.3,-81.5,164,166);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-65.7,146,134);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).to({alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-81.5,164,166);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(0,0,1,2.265);
	this.instance.alpha = 0.461;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.5,-27.7,231,55.5);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.alpha = 0.672;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-22,44,44);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},3).to({y:0},3).wait(1).to({y:5},3).to({y:0},3).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-3.6,12,6.6);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah6AlQgPgBgLgGQgKgGgGgNQgFgLANgCIAggGQATgDAPAJQAOAHAFAMQAGAMgUAEQgSAEgPAAIgEAAgABCgGQAIgbAKgCQAKgBAXAAQAXAAANAIQANAJAAAKQAAAJgOAFQgPAGgXAEQgYAEgQAAIAAAAQgQAAAIgZg");
	mask.setTransform(-19.2,0);

	// Слой 3
	this.instance = new lib.Символ10();
	this.instance.setTransform(-8.4,-5.6);

	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(-31.3,-2.6);

	this.instance.mask = this.instance_1.mask = mask;

	// Слой 1
	this.instance_2 = new lib.Символ9();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-49,82,98);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(15.4,28,1,1,0,0,0,15.4,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:15.5,rotation:-1.3,x:15.9},6,cjs.Ease.get(-1)).to({regX:15.4,rotation:-3.2,x:16.2},8,cjs.Ease.get(1)).wait(15).to({regX:15.5,rotation:-1.6,x:15.9,y:28.1},7,cjs.Ease.get(-1)).to({regX:15.4,rotation:0,x:15.4,y:28},8,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-49,82,98);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.03,y:-1.4},13).to({scaleY:1,y:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-45,148,90);


(lib.Символ50_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(45.2,42.2,1,1,0,0,0,25.8,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 2
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(12.1,40.4,1,1,0,0,0,11.9,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:12,regY:22.1,scaleY:1,skewX:1.9,skewY:5,x:12.7,y:38.9},29).to({regX:11.9,regY:22,scaleY:1,skewX:0,skewY:0,x:12.1,y:40.4},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,70.6,85);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50_1();
	this.instance.setTransform(-2.2,9.9,1,1,0,0,0,38,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:8.2},0).wait(1).to({y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({y:9.3},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:11.3},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:9.9},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:12.9},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:11.2},0).wait(1).to({y:11.1},0).wait(2).to({y:11},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.5},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:11.4},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:9.4},0).wait(1).to({y:9.2},0).wait(1).to({y:8.9},0).wait(1).to({y:8.7},0).wait(1).to({y:8.6},0).wait(1).to({y:8.4},0).wait(1).to({y:8.3},0).wait(2).to({y:8.2},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:9.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-34.2,70.7,85);


(lib.Символ45_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(-41,4);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.4,-57,127.9,114);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(59.5,9.6,1,1,-11.2,0,0,38,44.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-65.9,82.3,93.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ22();
	this.instance.setTransform(-13.5,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-21.5},9).to({x:-13.5},6).to({x:-21.5},9).to({x:-14.5},4).to({x:-7.5},7).to({x:-14.5},5).to({x:-7.5},9).to({x:-13.5},4).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.8,-32.8,163,166);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(-11.4,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.4,y:8.7},9).to({x:-10.4},6).to({x:-17.4},9).to({x:-9.4},4).to({x:-3.4},7).to({x:-11.4},5).to({x:-2.4},9).to({x:-11.4,y:7.7},4).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-58,146,135);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:-235},20).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-27.7,231,55.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkCLmQg5lriylbIACAAQg4gRg4gvQiFhyAEjSQAFjTEDh3QEDh3iNB9QiNB9CRDYQCSDXB2gKQBzgLh6A4Ii1BRIElg5QgBgzAdhHQBHiuCFiNQCEiMA8gaQA9gbB7B0QB7BzgaCtQgHAzgPAtIgaB3QkJHACbCqQmVDLlYAAQgoAAgngDg");
	mask.setTransform(-13.6,48.8);

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(-6,171.3);

	this.instance.mask = mask;

	// Слой 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-13.5,21);

	// Слой 1
	this.instance_2 = new lib.body();
	this.instance_2.setTransform(-87.5,-133.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-133.5,175,267);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ16();
	this.instance.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-168.5,y:-114.5},19).wait(56));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(-158,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-3,y:-138.6},18).to({x:-5.5,y:-148},1).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-10.5,202,47.5);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AIaJKQk/hckrjRQi9CNjjB/Ighg8QDMiECqiCQj6i7jukMIAwgoQEKEIDxC0QH3mMC7lyQA4AMgSAzQjeGjmwFTQFEDoEWBKQgBAugnAAIgKgBg");
	mask.setTransform(-2.5,-0.3);

	// Слой 3
	this.instance = new lib.Символ17();
	this.instance.setTransform(81.3,68.5);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.big_chain();
	this.instance_1.setTransform(-65,-61.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.9,-61.5,132,123);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 5
	this.instance = new lib.Символ14();
	this.instance.setTransform(9.6,-60.8);

	// Слой 4
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-8.8,9.6);

	// Слой 1
	this.instance_2 = new lib.Символ18();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.5,-133.5,231,332.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.small_chain();
	this.instance.setTransform(41.8,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85));

	// Слой 5
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(82.1,68.6,1,1,0,0,0,-4.8,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2.5},4,cjs.Ease.get(-1)).to({regY:13.7,rotation:-5.7,y:68.7},5,cjs.Ease.get(1)).to({rotation:-2.8},3,cjs.Ease.get(-1)).to({regY:13.6,rotation:0,y:68.6},3,cjs.Ease.get(1)).to({rotation:-2.5},4,cjs.Ease.get(-1)).to({regY:13.7,rotation:-5.7,y:68.7},5,cjs.Ease.get(1)).to({rotation:-2.8},2,cjs.Ease.get(-1)).to({regY:13.6,rotation:0,y:68.6},2,cjs.Ease.get(1)).to({rotation:2.3},3,cjs.Ease.get(-1)).to({rotation:5.5,x:82},4,cjs.Ease.get(1)).to({rotation:0,x:82.1},5).to({rotation:2.3},4,cjs.Ease.get(-1)).to({rotation:5.5,x:82},5,cjs.Ease.get(0.99)).to({rotation:0,x:82.1},4,cjs.Ease.get(-1)).wait(32));

	// Слой 3
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(7,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-2,x:3.8},4,cjs.Ease.get(-1)).to({rotation:-4.9,x:-0.2},5,cjs.Ease.get(1)).to({rotation:-2.3,x:3.4},3,cjs.Ease.get(-1)).to({rotation:0,x:7},3,cjs.Ease.get(1)).to({rotation:-2,x:3.8},4,cjs.Ease.get(-1)).to({rotation:-4.9,x:-0.2},5,cjs.Ease.get(1)).to({rotation:-2.3,x:3.4},2,cjs.Ease.get(-1)).to({rotation:0,x:7},2,cjs.Ease.get(1)).to({rotation:2.5,x:10.8},3,cjs.Ease.get(-1)).to({rotation:6.2,x:15.8},4,cjs.Ease.get(1)).to({rotation:0,x:7},5).to({rotation:2.8,x:10.9},4,cjs.Ease.get(-1)).to({rotation:6.2,x:15.8},5,cjs.Ease.get(0.99)).to({rotation:0,x:7},4,cjs.Ease.get(-1)).wait(32));

	// Слой 1
	this.instance_3 = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-2.8},4,cjs.Ease.get(-1)).to({x:-6.4},5,cjs.Ease.get(1)).to({x:-3.2},3,cjs.Ease.get(-1)).to({x:0},3,cjs.Ease.get(1)).to({x:-2.8},4,cjs.Ease.get(-1)).to({x:-6.4},5,cjs.Ease.get(1)).to({x:-3.2},2,cjs.Ease.get(-1)).to({x:0},2,cjs.Ease.get(1)).to({x:3.5},3,cjs.Ease.get(-1)).to({x:8},4,cjs.Ease.get(1)).to({x:0},5).to({x:3.6},4,cjs.Ease.get(-1)).to({x:8},5,cjs.Ease.get(0.99)).to({x:0},4,cjs.Ease.get(-1)).wait(32));

	// Слой 8
	this.instance_4 = new lib.small_chain();
	this.instance_4.setTransform(-102.2,70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85));

	// Слой 4
	this.instance_5 = new lib.Анимация3("synched",0);
	this.instance_5.setTransform(-66.7,90.5);

	this.instance_6 = new lib.Анимация4("synched",0);
	this.instance_6.setTransform(-66.7,90.5,1,1,-8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-3.5},4,cjs.Ease.get(-1)).to({_off:true,rotation:-8},5,cjs.Ease.get(1)).wait(3).to({_off:false,rotation:0},3,cjs.Ease.get(1)).to({rotation:-3.5},4,cjs.Ease.get(-1)).to({_off:true,rotation:-8},5,cjs.Ease.get(1)).wait(2).to({_off:false,rotation:0},2,cjs.Ease.get(1)).to({rotation:3.1},3,cjs.Ease.get(-1)).to({rotation:7.5},4,cjs.Ease.get(1)).to({rotation:0},5).to({rotation:3.3},4,cjs.Ease.get(-1)).to({rotation:7.5},5,cjs.Ease.get(0.99)).to({rotation:0},4,cjs.Ease.get(-1)).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},5,cjs.Ease.get(1)).to({rotation:-3.8},3,cjs.Ease.get(-1)).to({_off:true,rotation:0},3,cjs.Ease.get(1)).wait(4).to({_off:false,rotation:-8},5,cjs.Ease.get(1)).to({rotation:-3.8},2,cjs.Ease.get(-1)).to({_off:true,rotation:0},2,cjs.Ease.get(1)).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-160,241.4,359.1);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(11.5,-7.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-65.7,146,134);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(13.6,-48.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.3,-81.5,164,166);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 18
	this.instance = new lib.Символ48();
	this.instance.setTransform(16,-73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.5,regY:0.9,x:14.5,y:-67,alpha:0.812},0).wait(1).to({y:-62.2,alpha:0.651},0).wait(1).to({y:-58.1,alpha:0.516},0).wait(1).to({y:-54.7,alpha:0.401},0).wait(1).to({y:-51.7,alpha:0.302},0).wait(1).to({y:-49.1,alpha:0.216},0).wait(1).to({y:-46.8,alpha:0.138},0).wait(1).to({y:-44.6,alpha:0.066},0).wait(1).to({regX:0,regY:0,x:16,y:-43.6,alpha:0},0).wait(1).to({regX:-1.5,regY:0.9,x:14.5,y:-47.8,alpha:0.171},0).wait(1).to({y:-52.2,alpha:0.319},0).wait(1).to({y:-56,alpha:0.446},0).wait(1).to({y:-59.3,alpha:0.555},0).wait(1).to({y:-62.1,alpha:0.65},0).wait(1).to({y:-64.7,alpha:0.733},0).wait(1).to({y:-66.9,alpha:0.808},0).wait(1).to({y:-69,alpha:0.877},0).wait(1).to({y:-70.9,alpha:0.941},0).wait(1).to({regX:0,regY:0,x:16,y:-73.6,alpha:1},0).wait(1));

	// title2
	this.title2 = new lib.Символ41();
	this.title2.setTransform(213,15.7,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get(this.title2).wait(1).to({regX:-19.7,regY:-6,scaleX:0.87,scaleY:0.87,x:196,y:-4.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:195.4,y:-13.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:194.9,y:-20.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:194.7,y:-25.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:194.4,y:-29.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:194.2,y:-32.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:194.1,y:-35.3},0).wait(1).to({scaleX:1,scaleY:1,x:193.9,y:-37.2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:213.6,y:-32.7},0).wait(1).to({regX:-19.7,regY:-6,scaleX:0.95,scaleY:0.95,x:194.7,y:-25},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:195.2,y:-15.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:195.7,y:-9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:196,y:-3.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:196.2,y:0.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:196.4,y:3.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:196.6,y:5.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:196.7,y:7.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:196.8,y:9.5},0).wait(1).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:213,y:15.7},0).wait(1));

	// title1
	this.title1 = new lib.Символ40();
	this.title1.setTransform(-211.5,15.7,0.818,0.818);

	this.timeline.addTween(cjs.Tween.get(this.title1).wait(1).to({regX:21.2,regY:-4.2,scaleX:0.87,scaleY:0.87,x:-193.4,y:-2.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-192.9,y:-11.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-192.5,y:-18.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-192.3,y:-23.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-192.1,y:-27.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-191.9,y:-30.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-191.8,y:-32.6},0).wait(1).to({scaleX:1,scaleY:1,x:-191.7,y:-34.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-212.9,y:-31.7},0).wait(1).to({regX:21.2,regY:-4.2,scaleX:0.95,scaleY:0.95,x:-192.3,y:-22.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-192.8,y:-13.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-193.1,y:-7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-193.4,y:-2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-193.6,y:1.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-193.8,y:5},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:7.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-194,y:9.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:11},0).wait(1).to({regX:0,regY:0,scaleX:0.82,scaleY:0.82,x:-211.5,y:15.7},0).wait(1));

	// Слой 3
	this.chain = new lib.Символ31();
	this.chain.setTransform(-10.4,26.2);

	this.timeline.addTween(cjs.Tween.get(this.chain).wait(1).to({regX:1,regY:0.5,scaleX:1.02,scaleY:1.02,x:-9.6,y:29.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-9.8,y:32.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-9.9,y:33.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-10,y:35.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-10.1,y:36.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:37.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:38},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-10.2,y:38.6},0).wait(1).to({regX:0,regY:0,scaleX:1.09,scaleY:1.09,x:-11.3,y:38.5},0).wait(1).to({regX:1,regY:0.5,scaleX:1.06,scaleY:1.06,x:-10,y:35.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-9.8,y:33.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-9.7,y:31.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-9.6,y:30.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:29.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-9.5,y:28.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:28},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:27.5},0).wait(1).to({scaleX:1,scaleY:1,x:-9.4,y:27.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-10.4,y:26.2},0).wait(1));

	// Слой 4
	this.suite = new lib.Символ30();
	this.suite.setTransform(-12,66.3);

	this.timeline.addTween(cjs.Tween.get(this.suite).wait(1).to({regX:-1,scaleX:1.02,scaleY:1.02,x:-13.3,y:70.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-13.5,y:73.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-13.7,y:75.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-13.8,y:77.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-13.9,y:78.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:79.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-14.1,y:80.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:81.4},0).wait(1).to({regX:0,scaleX:1.09,scaleY:1.09,x:-13.1,y:82.1},0).wait(1).to({regX:-1,scaleX:1.06,scaleY:1.06,x:-13.8,y:77.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-13.6,y:74.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-13.5,y:72.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-13.4,y:70.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-13.2,y:69.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:68.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-13.1,y:67.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:67.3},0).wait(1).to({scaleX:1,scaleY:1,x:-13,y:66.8},0).wait(1).to({regX:0,scaleX:1,scaleY:1,x:-12,y:66.3},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(0,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:9.9,regY:-14.3,scaleX:1.02,scaleY:1.02,x:10.1,y:6.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:10.3,y:8.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:10.4,y:9.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:10.5,y:10.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:10.6,y:11.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:10.7,y:12.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:13.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:10.8,y:13.6},0).wait(1).to({regX:0,regY:0,scaleX:1.09,scaleY:1.09,x:0,y:29.5},0).wait(1).to({regX:9.9,regY:-14.3,scaleX:1.06,scaleY:1.06,x:10.5,y:11.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:10.4,y:9.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:10.3,y:7.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:10.2,y:6.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:10.1,y:5.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:5.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:10,y:4.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:4.3},0).wait(1).to({scaleX:1,scaleY:1,y:4},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:18},0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.02,scaleY:1.02,y:2.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:4.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:5.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:6.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:7.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:8.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:9.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:9.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:10},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:7.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:5.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:3.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:2.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:2.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:1.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:1.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:0.7},0).wait(1).to({scaleX:1,scaleY:1,y:0.3},0).wait(1).to({scaleX:1,scaleY:1,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,369.5);


// stage content:



(lib._10_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Prepare
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		this.main.chain.visible = false;
		this.main.suite.visible = false;
		
		
		//clickTAG
		
		this.main.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		this.knopke.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		this.kno.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open(clickTAG, "_blank");
		}
		
		
		//Stage
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		 function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(2);
		}
		
		stage.canvas.onmouseout = qwe;
		
		function qwe()
		{
		    _this.main.gotoAndPlay(10);
		}
		
		
		
		
		//Buttons
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.knopke.addEventListener("mouseover", fl_MouseOverHandler_3);
		
		function fl_MouseOverHandler_3()
		{
			_this.main.chain.visible = true;
			_this.main.title1.gotoAndPlay(1);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.knopke.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.chain.visible = false;
			_this.main.title1.gotoAndPlay(10);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.kno.addEventListener("mouseover", fl_MouseOverHandler_4);
		
		function fl_MouseOverHandler_4()
		{
			_this.main.suite.visible = true;
			_this.main.title2.gotoAndPlay(1);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.kno.addEventListener("mouseout", fl_MouseOutHandler_2);
		
		function fl_MouseOutHandler_2()
		{
			_this.main.suite.visible = false;
			_this.main.title2.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.kno = new lib.Символ46();
	this.kno.setTransform(525.5,243);
	new cjs.ButtonHelper(this.kno, 0, 1, 2, false, new lib.Символ46(), 3);

	this.knopke = new lib.Символ46();
	this.knopke.setTransform(113.5,243);
	new cjs.ButtonHelper(this.knopke, 0, 1, 2, false, new lib.Символ46(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.knopke},{t:this.kno}]}).wait(1));

	// Слой 2
	this.instance = new lib.Символ45_1();
	this.instance.setTransform(112,241);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(518.5,249.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.main = new lib.Символ1();
	this.main.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(301,152.5,677,369.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
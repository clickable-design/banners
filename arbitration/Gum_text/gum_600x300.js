(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/baba_bg1.jpg", id:"baba_bg1"},
		{src:"images/baba_bg2.jpg", id:"baba_bg2"},
		{src:"images/baba_bg3.jpg", id:"baba_bg3"},
		{src:"images/girl.png", id:"girl"}
	]
};



// symbols:



(lib.baba_bg1 = function() {
	this.initialize(img.baba_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,300);


(lib.baba_bg2 = function() {
	this.initialize(img.baba_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,300);


(lib.baba_bg3 = function() {
	this.initialize(img.baba_bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,300);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,294);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32090B").s().p("AtuEEQhoAAhJhKQhJhJAAhnIAAgSQAAhoBJhKQBJhIBogBIbdAAQBoABBJBIQBJBKAABoIAAASQAABnhJBJQhJBKhoAAg");
	this.shape.setTransform(113,26);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5DSQgMAAAAgMIAAhyIhPB4QgDAGgGAAIiRAAQgIAAgEgGQgCgGAFgGIBsiNQgVgGgSgMQgOgMgNgQQgJgNgGgVQgFgSAAgYQAAgSACgPQAEgPAIgPQAGgMAJgMQAKgJAPgJQAYgSAkgGQAkgJArAAICsAAQALAAABAMIAAGLQgBAMgLAAgAgHhoQgMAMAAAVQAAAYAMAJQAHAMASAAIAbAAIAAhXIgbAAQgPAAgKAJg");
	this.shape.setTransform(20.2,21.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.4,42.2);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyDVQgYgDgVgJIgngSQgSgMgMgPQgPgPgMgSQgJgPgGgVQgJgSgDgYQgDgVAAgYQAAgXADgVQADgYAJgSQAGgVAJgSQAMgPAPgPQAMgPASgMIAngSQAVgJAYgDQAYgDAaAAQAaAAAbADQAZADAVAJQAVAJAPAJQASAMAPAPQAPAPAJAPIASAnQAGASADAYQADAVAAAXQAAAYgDAVQgDAYgGASQgJAVgJAPQgJASgPAPQgPAPgSAMQgPAJgVAJQgVAJgZADQgbADgaAAQgaAAgYgDgAgahrQgMAJgGAMQgJAPgDAVQgDAVAAAdQAAAeADAVQADAVAJAPQAGAMAMAJQAMAGAOAAQAOAAAMgGQAMgJAJgMQAGgPADgVQAEgVAAgeQAAgdgEgVQgDgVgGgPQgJgMgMgJQgMgGgOAAQgOAAgMAGg");
	this.shape.setTransform(22.3,21.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.6,43.4);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai5DSQgMAAAAgMIAAmLQAAgMAMAAIC1AAQArAAAkAGQAhAJAYAMQAYAPAMAVQAMAYAAAbQAAAbgJAVQgGAJgJAJQgMAJgMAGQASAGAMAKQAMAKAJAMQAJAMADAPQADAPAAAPIgDAeQgDAPgGAMQgMAYgbAPQgYASgkAGQglAJgvAAgAgoB4IAkAAQASAAANgMQAIgMABgSQgBgSgIgJQgNgMgSAAIgkAAgAgogyIAhAAQAPAAAKgJQAFgJAAgPQAAgSgFgJQgKgJgPAAIghAAg");
	this.shape.setTransform(19.9,21.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.7,42.2);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEDSQgMAAAAgMIAAkrIhgAAQgMAAAAgMIAAhUQAAgMAMAAIFhAAQAMAAAAAMIAABUQAAAMgMAAIhgAAIAAErQAAAMgMAAg");
	this.shape.setTransform(19,21.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,42.2);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C53336").s().p("Egu3AXbMAAAgu2MBdvAAAMAAAAu2g");
	this.shape.setTransform(300,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32090B").s().p("AjuBOQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAgRIgkAAIAAARQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAIgqAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAguQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAJAAQAEgPAGgeQACgRACghQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIBaAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAABfIAJAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABIAAAuQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAgAkFgIQgDARgEAPIARAAIAAhCIgHAAIgDAigAACA6IgMgEIgNgGQgFgEgEgEIgIgKIgGgMIgDgNQgBgFAAgIQAAgHABgHIADgOIAGgLIAIgKQAEgFAFgDIANgHQAGgCAGgBQAIgCAIAAQAJAAAIACQAIABAGACIAMAHIAKAIIAIAKIAGALIADAOIABAOIgBANIgDANIgGAMIgIAKIgKAIIgMAGIgOAEQgIABgJAAQgIAAgIgBgAAKgqQgEADgCAEIgEALIAAAQIAAAOIAEALQACAFAEACQAEACAEAAQAFAAAEgCQAEgCACgFQACgEACgHIABgOIgBgQQgCgGgCgFQgCgEgEgDQgEgCgFAAQgEAAgEACgAmmA6IgOgEIgMgGQgGgEgEgEIgIgKIgFgMIgDgNQgCgFAAgIQAAgHACgHIADgOIAFgLIAIgKQAEgFAGgDIAMgHQAHgCAHgBQAIgCAJAAQAJAAAIACQAHABAHACIAMAHIAKAIIAIAKIAFALIADAOIABAOIgBANIgDANIgFAMIgIAKIgKAIIgMAGIgOAEQgIABgJAAQgJAAgIgBgAmegqQgDADgDAEIgDALIgBAQIABAOIADALQADAFADACQAEACAFAAQAFAAADgCQAEgCACgFQADgEABgHIABgOIgBgQQgBgGgDgFQgCgEgEgDQgDgCgFAAQgFAAgEACgAIJA5QgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAh8QAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIBkAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAZQAAAEgDAAIg1AAIAAASIAxAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAXQAAAEgDAAIgxAAIAAASIA2AAQAEAAAAAEIAAAZQAAAEgEAAgAGKA5QgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAh8QAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIBkAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAZQAAAEgDAAIg1AAIAAASIAxAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAXQAAAEgDAAIgxAAIAAASIA2AAQAEAAAAAEIAAAZQAAAEgEAAgAFAA5QgEAAAAgEIAAgxIgeAAIAAAxQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgsAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAh8QAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIAsAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAqIAeAAIAAgqQAAgDAEAAIAsAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAB8QAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAgABtA5QgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAgBIAAh8QAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIBeAAQABAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAAZQAAAEgEAAIgwAAIAAAOIAMAAQANAAAJADQAKADAHAFQAGAGAEAIQADAGAAAKQAAALgDAIQgEAIgGAFQgHAGgKADQgJADgNAAgACbAYIAHAAQAFAAACgDQADgCAAgGQAAgFgDgDQgCgDgFAAIgHAAgAivA5QgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAh8QAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIA2AAQAPAAALACIAKAEIAJAFQAEADADAEIAGAIIADAKIABALIgBAMIgDAJIgGAGIgHAHQgMAHgHACQgLACgPAAIgJAAIAAAjQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAgAiCgLIALAAQAHAAADgDQAEgEAAgJQAAgJgEgDQgDgEgHAAIgLAAgAocA5QgEAAAAgEIAAhdIgeAAIAABdQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgsAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAh8QAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIB9AAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABIAAB8QAAABAAABQAAAAgBABQAAAAgBABQAAAAgBAAg");
	this.shape.setTransform(62.6,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125.3,15.7);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AtuEEQhoAAhJhKQhJhJAAhnIAAgSQAAhoBJhKQBJhIBogBIbdAAQBoABBJBIQBJBKAABoIAAASQAABnhJBJQhJBKhoAAg");
	this.shape.setTransform(113,26);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,226,52);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEA02").s().p("AgZAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBIAEgRIgUgvQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAWAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAHAcIAGgcQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAUAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgUBBQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAgAjEAaQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgIIgRAAIAAAIQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgVAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAgUQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAFAAIAEgQIACgSQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIArAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAiIAEAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAUQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAjOgJIgEALIAHAAIAAgXIgCAAIgBAMgADDAQQgDgBgCgCIgEgFIgBgHQAAgCACgDQABgEADgCIAIgEIALgBIAGAAIAAgCQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgGgBIgIABIgIACIgCAAIAAgBIgCgKQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIALgDIAMgBIAMABQAFACAEACQADADABAEQACADAAAGIAAAcQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgUAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgCQgDADgEABIgIABIgGgBgADQgBQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIADABQADAAACgBIAAgFIgFAAIgDABgAiSARIgGgCIgGgCIgEgDIgEgEIgCgFQgCgDAAgGQAAgEACgHIACgFIAEgEQADgDAGgCQADgBAJgBIALACIAGADIADADIAEAEIACAFIACALIAAAEQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIghAAIACACIADACQADACAGAAIAGgBIAGgCQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIABAJQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgIACIgKAAgAiIgOQAAgEgCgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABIgCAFIAMAAIAAAAgACdAQQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAIgIgTIAAASQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgWAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBIAAguQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAWAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAATIAIgTQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAYAAIACABIAAACIgMAWIAMAWIAAACIgBABgAAbAQQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAguQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAiIAHAAIAAgiQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAVAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAAAiIAGAAIAAgiQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAUAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAAuQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAhoAQQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAguQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAbAAIAMABIAKADIAFAFQACADAAAEIgBAEQgBADgCACQAEACABACQACADAAACQAAAEgCADQgCADgEACQgEACgFABIgOABgAhRADIAEAAIAEgBIABgCIgBgBIgEgBIgEAAgAhRgOIADAAIAEgBIACgCIgCgDIgEAAIgDAAg");
	this.shape.setTransform(24.1,3.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.2,7.3);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEA02").s().p("Ag5AiIgFgCIgEgEQgDgEgDgFIgDgKIgFAAIAAAYQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgWAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAhBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAWAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAZIAFAAIADgLQADgGADgDIAEgEIAFgCQAEgBAIgBIAIABIAGACIAGADIAEAEIADAGIACAGIACANIgCAOIgCAGIgDAGIgEAEIgGADIgGACIgIAAQgIAAgEgBgAgwgOIgBAOIABAPQABADACAAQADAAABgDQABgEAAgLIgBgOQgBgDgDAAQgCAAgBADgAjFAiQgBgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIABgOIABgBIACgBQADABAEABQAEgBABgBQACgCAAgEIAAgqQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIA7AAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAABBQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgWAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgxIgMAAIAAAZQAAAHgCAFQgBAFgDADIgEADIgFACIgMABQgKAAgFgBgACwAjQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgTIgOAUIgBABIgYAAIgCgBIAAgCIASgYIgGgDIgFgFIgCgEIgBgGIAAgGIACgFIADgEIAEgDQAEgDAGgBQAGgBAHgBIAdAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAABBQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAgAClgQQgCACAAAEQAAAEACABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAFAAIAAgOIgFAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAgABqAjQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBgBAAAAIgCgKIgRAAIgCAKQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABgBAAIgXAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBIAThAQAAAAABgBQAAAAAAAAQAAAAABAAQAAgBAAAAIAjAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIATBAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAgABiAFIgFgWIgEAWIAJAAgAgDAjQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAhBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIAvAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAOQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgZAAIAAAIIAGAAQAHAAAFACQAFABADADQAEACACADQABAEAAAFQAAAGgBAEQgCAFgEACQgDADgFACQgFABgHABgAATASIAEAAQAAgBABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgEAAg");
	this.shape.setTransform(20,3.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.1,7.2);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggAyQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAFgSIgWg0QAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAYAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABAAIAHAeIAHgeQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAVAAQABAAABAAQAAAAAAABQAAAAABABQAAAAgBABIgWBIQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAgAh3AyQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAhIQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAZAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAAADQADgEAEgBQAEgCAEABQAFAAAEABQAFADADAEQADAEACAFQABAGAAAEQAAAIgBAFQgCAGgDAEQgDADgFACQgEACgFABQgEAAgDgCQgFgBgDgDIAAAXQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAgAhdgKIAAAXQABAAAAABQABAAAAAAQABAAAAAAQABABABAAQACAAACgEQACgCgBgJQABgFgCgEQgCgCgCAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAgABoAdIgDgCIgCgDIgBgGIABgFIACgEIADgCIAGAAIAFAAIAEACIACAEIAAAFIAAAGIgCADIgEACIgFACIgGgCgAAwAdIgIgBIgFgDIgFgFIgEgEIgDgHIgCgHIAAgFIAAgLIADgJQACgEADgDIAFgHIAJgFIALgEIAMgCIAQgBQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIABAMQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgLABIgIACIgGADIgEAFIAFgDIAFgBQAFAAAFACQADACAEAEQADAEABAFQACAFAAAEQAAAHgCAFQgEAHgDADQgGAFgEABQgJADgFAAIgHgCgAAzgJIgBAJIABALQABABAAABQABAAAAABQABAAAAAAQAAABABAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBQACgDAAgHQAAgGgCgDQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAg");
	this.shape.setTransform(12.2,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.4,10.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABJDHQgKAAgBgJIgNg8IhhAAIgMA8QgDAJgKAAIiHAAQgNAAAEgOIBsl3QACgIAKAAIDEAAQAJAAADAIIBrF3QAEAOgNAAgAAbAcIgbiDIgbCDIA2AAg");
	this.shape.setTransform(22,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,39.9);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYDJQgmgGgegKQgIgEABgHIAHhXQAAgGAFgDQAEgCAFACQAZAMAdAGQAdAHAbAAQAWgBAKgFQAKgGAAgMQAAgHgGgGQgEgGgMgEQgugHgqAAQgLgBAAgKIAAhPQAAgLALAAQAqgBAsgJQAMgEAEgFQAFgGAAgIQAAgIgHgFQgJgEgUAAQgZABgcAGQgbAHgXALQgFABgFgCQgEgCgBgGIgIhPIABgIIAFgGQAdgMAkgHQAmgHAmAAQApAAAgAIQAgAHAWAQQAVANAKAWQALAUAAAaQAAAYgNAWQgGANgLAKQgLAKgOAIQAPAGALAIQALAJAHAMQAHAMAEAOQADAMAAAOQAAAdgLAWQgMAXgXARQgXAQgiAJQgxAJgcAAQgjAAglgFg");
	this.shape.setTransform(16.5,20.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,41.3);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoDKQgTgDgSgIQgRgHgOgKQgPgLgMgOQgMgNgJgQQgKgRgGgSQgGgUgDgVIgDgsIADgsQADgVAGgTQAGgTAKgQQAJgRAMgNQAMgOAPgKQAOgKARgIQASgGATgEQAUgEAUAAQAVAAAUAEQAUAEARAGQARAIAPAKQAOAKAMAOQAMANAKARQAJAQAGATQAGATADAVIADAsIgDAsQgDAVgGAUQgGASgJARQgKAQgMANQgMAOgOALQgPAKgRAHQgRAIgUADQgUAEgVAAQgUAAgUgEgAgMhmQgHAGgDAMQgIArAAApQACBFAGAQQADANAHAFQAFAEAHAAQAIAAAFgEQAHgFADgNQAGgQAChFQAAgpgIgrQgDgMgHgGQgFgFgIAAQgHAAgFAFg");
	this.shape.setTransform(18.6,20.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.2,41.3);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPDKQgLABAAgLIAAhGQAAgEAFgEQAggYBJhCQAagYALgSQALgWAAgWQAAgWgLgJQgNgLgeABQgUAAgUAEQgUAFgQAJQgFADgEgDQgFgCAAgHIgFhIQAAgKAIgEQAagKAfgFQAggHAjAAQAbAAAvAKQAgAJAVARQAVARAKAYQAKAYAAAfQAAARgEAQQgDAQgGAQQgWAkgRASQgPAPgXAQQgWAPgUAKIB3AAQALAAAAALIAABMQAAALgLgBg");
	this.shape.setTransform(15.5,20.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.1,40.6);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBDHQgKAAAAgLIAAj4Ig8AqQgJAFgGgIIgsg+QgFgHAHgGIB2hbQANgLAUAAIBkAAQAKAAAAAKIAAF4QAAALgKAAg");
	this.shape.setTransform(13.4,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.8,39.9);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBDHQgKAAAAgLIAAj4Ig8AqQgJAFgGgIIgsg+QgFgHAHgGIB2hbQANgLAUAAIBkAAQAKAAAAAKIAAF4QAAALgKAAg");
	this.shape.setTransform(13.4,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.8,39.9);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040404").s().p("EgnDAGjIAAtGMBOHAAAIAANGg");
	this.shape.setTransform(250,42);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,500,84);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,294);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_bg1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,316,300);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_bg2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,327,300);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_bg3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287,300);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.setTransform(151.7,21.7,1,1,0,0,0,20.2,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:17},3,cjs.Ease.get(1)).to({y:21.7},5,cjs.Ease.get(1)).wait(1));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(107.4,21.7,1,1,0,0,0,22.2,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:17},3,cjs.Ease.get(1)).to({y:21.7},5,cjs.Ease.get(1)).wait(2));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(62.1,21.7,1,1,0,0,0,19.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({y:17},3,cjs.Ease.get(1)).to({y:21.7},5,cjs.Ease.get(1)).wait(3));

	// Символ 32
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(18.9,21.7,1,1,0,0,0,18.9,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:17},3,cjs.Ease.get(1)).to({y:21.7},5,cjs.Ease.get(1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.9,43.4);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(112.7,27.1,1,1,0,0,0,62.6,7.8);

	// Слой 1
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(112.5,26,1,1,0,0,0,113,26);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,0,226,52);


(lib.Символ26 = function(mode,startPosition,loop) {
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

	// btn2
	this.instance = new lib.Символ27();
	this.instance.setTransform(113,26,1,1,0,0,0,113,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.17,scaleY:1.17},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,226,52);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(74.5,-0.8,1,1,0,0,0,85.9,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-22.5,171.9,43.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(23.6,20.5,1.46,1.46,0,0,0,24.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,scaleY:1.19},9,cjs.Ease.get(1)).to({scaleX:1.46,scaleY:1.46},10,cjs.Ease.get(1)).wait(1));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(23.7,8.3,1.25,1.25,0,0,0,20.1,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.48,scaleY:1.48},9,cjs.Ease.get(1)).to({scaleX:1.25,scaleY:1.25},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,3.8,70.4,22.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ20();
	this.instance.setTransform(241.7,4.5,0.97,0.97,0,0,0,12.2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({y:-5.6},8,cjs.Ease.get(1)).to({y:4.5},5,cjs.Ease.get(1)).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(53.7,20.6,1,1,0,0,0,21.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({y:10.5},8,cjs.Ease.get(1)).to({y:20.6},5,cjs.Ease.get(1)).wait(2));

	// Символ 18
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(16.4,20.7,1,1,0,0,0,16.4,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({y:10.6},8,cjs.Ease.get(1)).to({y:20.7},5,cjs.Ease.get(1)).wait(3));

	// Символ 17
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(210.7,20.7,1,1,0,0,0,18.6,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({y:10.6},8,cjs.Ease.get(1)).to({y:20.7},5,cjs.Ease.get(1)).wait(4));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(174.9,20.3,1,1,0,0,0,15.5,20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({y:10.2},8,cjs.Ease.get(1)).to({y:20.3},5,cjs.Ease.get(1)).wait(5));

	// Символ 15
	this.instance_5 = new lib.Символ15();
	this.instance_5.setTransform(142.3,20.6,1,1,0,0,0,13.3,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({y:10.5},8,cjs.Ease.get(1)).to({y:20.6},5,cjs.Ease.get(1)).wait(6));

	// Символ 14
	this.instance_6 = new lib.Символ14();
	this.instance_6.setTransform(113.3,20.6,1,1,0,0,0,13.3,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:10.5},8,cjs.Ease.get(1)).to({y:20.6},5,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,253.5,41.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(90,294,1,1,0,0,0,90,294);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:293.9,rotation:-3,x:78.9,y:301.7},9,cjs.Ease.get(1)).to({regY:294,rotation:0,x:90,y:294},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,294);


(lib.Символ9 = function(mode,startPosition,loop) {
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

	// girl
	this.girl = new lib.Символ11();
	this.girl.setTransform(90,157,0.94,0.94,0,0,0,90,147);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1).to({scaleX:1,scaleY:1,x:91,y:152},8).wait(1).to({x:81},0).to({scaleX:0.94,scaleY:0.94,x:90,y:157},4,cjs.Ease.get(1)).wait(1));

	// tvoya
	this.instance = new lib.Символ24();
	this.instance.setTransform(383.3,158.5,1,1,0,0,0,14.2,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// lubaya
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(275.2,151.1,2.25,2.25,0,0,0,24.1,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// 1120
	this.text = new lib.Символ13();
	this.text.setTransform(374.4,66.7,1.39,1.39,0,0,0,125.2,20.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({scaleX:1.54,scaleY:1.54,x:370.5,y:56.7},8).wait(1).to({scaleX:1.39,scaleY:1.39,x:374.4,y:66.7},4,cjs.Ease.get(1)).wait(1));

	// line
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(351,156,1,1,0,0,0,250,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.4,18.8,595.6,276.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(786.4,150,1,1,0,0,0,143.5,150);

	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(479.5,150,1,1,0,0,0,163.5,150);

	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(158,150,1,1,0,0,0,158,150);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,929.9,300);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(1185.9,108,1,1,0,0,0,464.9,150);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({x:585.9},100).wait(1));

	// 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(584.9,108,1,1,0,0,0,464.9,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:255.9},79).to({x:-344.1},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,-42,929.9,300);


(lib.Символ7 = function(mode,startPosition,loop) {
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

	// bg
	this.bg = new lib.Символ3();
	this.bg.setTransform(42.5,192,1,1,0,0,0,163.5,150);
	this.bg.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1).to({alpha:0.488},3,cjs.Ease.get(1)).wait(1).to({alpha:0.148},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,929.9,300);


// stage content:



(lib.gum_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
		 _this.btn2.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
		 _this.btn2.gotoAndPlay(5);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		//link
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		//over
		
		stage.canvas.onmouseover = qwe;
		
		  function qwe()
		{
		    _this.an.gotoAndPlay(1);
			_this.girls.gotoAndPlay(1);
			
		}
		
		
		
		//out
		
		stage.canvas.onmouseout = qwe2;
		
		  function qwe2()
		{
		    _this.an.gotoAndPlay(10);
			_this.girls.gotoAndPlay(5);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// knopka
	this.knopka = new lib.Символ36();
	this.knopka.setTransform(398.5,248,1,1,0,0,0,113,26);
	new cjs.ButtonHelper(this.knopka, 0, 1, 2, false, new lib.Символ36(), 3);

	this.timeline.addTween(cjs.Tween.get(this.knopka).wait(1));

	// btn
	this.btn2 = new lib.Символ26();
	this.btn2.setTransform(399,248,1,1,0,0,0,113,26);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(1));

	// an
	this.an = new lib.Символ9();
	this.an.setTransform(114,153,1,1,0,0,0,90,147);

	this.timeline.addTween(cjs.Tween.get(this.an).wait(1));

	// girls
	this.girls = new lib.Символ7();
	this.girls.setTransform(465.4,150,1,1,0,0,0,464.9,150);
	this.girls.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.girls).wait(1));

	// bg
	this.instance = new lib.Символ30();
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.5,150,929.9,301.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/dd1.png", id:"dd1"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/pet.jpg", id:"pet"},
		{src:"images/spu.png", id:"spu"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.dd1 = function() {
	this.initialize(img.dd1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.pet = function() {
	this.initialize(img.pet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,250);


(lib.spu = function() {
	this.initialize(img.spu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,84);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzHHCIiXuDMAq9AAAIAAODg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.5,-45,275,90);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spu();
	this.instance.setTransform(-81,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81,-42,162,84);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183,-13,366,26);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AU8BnIgPgDIgMgFIgLgIIgJgIIgGgLQgGgKgDgOIgVAAIAAAwQAAAIgHAAIggAAQgIAAAAgIIAAiEQAAgHAIAAIAgAAQAHAAAAAHIAAAwIAVAAQACgIAHgPIAGgLIAJgJQAFgEAGgDIAMgFIAPgDIARgCQAKAAAIACQAJABAHADQAHACAHAFQAHADAFAGIAJALQAEAGACAHQADAGACAIIABARIgBASQgCAIgDAHQgCAHgEAHIgJALQgFAFgHAEIgOAHQgHACgJABQgIACgKAAgAVAgOQgGADgEAFQgEAGgDAGQgCAIAAALQAAALACAJQADAIAEAFQAEAGAGACQAGADAHAAQAHAAAGgDQAFgCAFgGQAEgFACgIQADgJAAgLQAAgLgDgIQgCgGgEgGQgFgFgFgDQgGgCgHAAQgHAAgGACgAW9BkQgFAAgDgEQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIAVAAQAEAAADADQADADAAAEIAAAPQAAAEgDADQgDAEgEAAgAREBkQgHAAAAgIIAAgVQAAgHAHAAIAUAAIAAhLIgUAAQgHAAAAgHIAAgWQAAgHAHAAIBYAAQAHAAAAAHIAAAWQAAAHgHAAIgVAAIAABLIAVAAQAHAAAAAHIAAAVQAAAIgHAAgAOLBkQgHAAAAgIIAAiEQAAgHAHAAIAgAAQAHAAAAAHIAABoIA8AAIAAhoQAAgHAHAAIAgAAQAIAAAAAHIAABoIAOAAQAHAAAAAHIAAAVQAAAIgHAAgAM9BkQgIAAAAgIIAAhNIgCAAIg1BNQgHAIgFAAIgkAAQgHAAAAgIIAAiEQAAgHAHAAIAgAAQAHAAAAAHIAABMIACAAIA2hMIAEgFQAEgCADAAIAkAAQAIAAAAAHIAACEQAAAIgIAAgAJYBkQgHAAAAgIIAAhnIgtAAQgIAAAAgHIAAgWQAAgHAIAAICIAAQAIAAAAAHIAAAWQAAAHgIAAIgsAAIAABnQAAAIgIAAgAGJBkQgHAAAAgIIAAiEQAAgHAHAAICCAAQAHAAAAAHIAAAWQAAAHgHAAIhbAAIAAARIBDAAQAIAAAAAIIAAAVQAAAHgIAAIhDAAIAAAWIBbAAQAHAAAAAHIAAAVQAAAIgHAAgAE6BkQgHAAAAgIIAAhnIg+AAIAABnQAAAIgHAAIggAAQgHAAAAgIIAAiEQAAgHAHAAICMAAQAIAAAAAHIAACEQAAAIgIAAgAA+BkQgIAAAAgIIAAhNIgCAAIg0BNQgGAIgFAAIgkAAQgHAAAAgIIAAiEQAAgHAHAAIAgAAQAHAAAAAHIAABMIACAAIAzhMIAFgFQAEgCADAAIAkAAQAIAAAAAHIAACEQAAAIgIAAgAhwBkQgHAAgDgIIgIgTIhDAAIgHATQgDAIgGAAIgjAAQgDAAgCgCQgBgDABgDIA8iEQADgHAGAAIAsAAQAGAAADAHIA8CEQABADgBADQgCACgDAAgAiQAmIgRgpIgDAAIgSApIAmAAgAk1BkQgHAAAAgIIAAhGIgCAAIgdBGQgBADgDACQgDADgFAAIgZAAQgFAAgDgDQgDgCgBgDIgdhGIgCAAIAABGQAAAIgHAAIggAAQgIAAAAgIIAAiEQAAgHAIAAIAsAAQAFAAADACIAEAFIAlBZIACAAIAmhZQABgCADgDQADgCAEAAIAtAAQAIAAAAAHIAACEQAAAIgIAAgAohBkQgHAAAAgIIAAhNIgCAAIg1BNQgHAIgFAAIgkAAQgIAAAAgIIAAiEQAAgHAIAAIAfAAQAIAAAAAHIAABMIACAAIA1hMIAFgFQAEgCADAAIAkAAQAIAAAAAHIAACEQAAAIgIAAgAtABkQgHAAAAgIIAAiEQAAgHAHAAIBLAAQAMAAAUAEIANAFIAKAGIAIAIQAEAFACAFQAEAJAAAKQAAAMgEAKIgGAJIgIAIQgEAEgGACIgNAFQgUAEgMAAIgjAAIAAAhQAAAIgIAAgAsYAZIAjAAQAFAAAFgBQAFgCADgDIAFgGQABgEAAgEQAAgFgBgBQgCgEgDgCQgDgDgFgCQgFgBgFAAIgjAAgAu2BkQgHAAAAgIIAAhnIgtAAQgHAAAAgHIAAgWQAAgHAHAAICIAAQAIAAAAAHIAAAWQAAAHgIAAIgsAAIAABnQAAAIgIAAgAy0BkQgHAAAAgIIAAgVQAAgHAHAAIAMAAIAOg6QADgLAGgKQAGgKAIgIQAGgEAPgHQAIgCAUgBIA+AAQAHAAAAAHIAABoIAOAAQAHAAAAAHIAAAVQAAAIgHAAgAxbgKQgEABgDADQgGAFgCAHIgOA6IA9AAIAAhLIgXAAIgJABgA0hBkQgIAAAAgIIAAgVQAAgHAIAAIAUAAIAAhLIgUAAQgIAAAAgHIAAgWQAAgHAIAAIBXAAQAHAAAAAHIAAAWQAAAHgHAAIgUAAIAABLIAUAAQAHAAAAAHIAAAVQAAAIgHAAgA1nBkQgIAAAAgIIAAhnIg9AAIAABnQAAAIgIAAIggAAQgHAAAAgIIAAiEQAAgHAHAAICMAAQAIAAAAAHIAACEQAAAIgIAAgAW9AZQgFAAgDgDQgDgDAAgEIAAgPQAAgCADgEQADgDAFAAIAVAAQAEAAADADQADAEAAACIAAAPQAAAEgDADQgDADgEAAgAACg/QgGgCgGgGQgGgFgDgHQgDgHAAgIQAAgFAFAAIASAAQAEAAABAFQABAFADADQAFADAFAAQAFAAAEgDQAEgDABgFQAAgFAFAAIAUAAQAFAAAAAFQAAAIgDAHQgDAHgGAFQgGAGgHACQgJADgKAAQgKAAgIgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.1,-10.4,300.2,20.9);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AU8BnIgPgDIgMgFIgLgIIgJgIIgGgLQgGgKgDgOIgVAAIAAAwQAAAIgHAAIggAAQgIAAAAgIIAAiEQAAgHAIAAIAgAAQAHAAAAAHIAAAwIAVAAQACgIAHgPIAGgLIAJgJQAFgEAGgDIAMgFIAPgDIARgCQAKAAAIACQAJABAHADQAHACAHAFQAHADAFAGIAJALQAEAGACAHQADAGACAIIABARIgBASQgCAIgDAHQgCAHgEAHIgJALQgFAFgHAEIgOAHQgHACgJABQgIACgKAAgAVAgOQgGADgEAFQgEAGgDAGQgCAIAAALQAAALACAJQADAIAEAFQAEAGAGACQAGADAHAAQAHAAAGgDQAFgCAFgGQAEgFACgIQADgJAAgLQAAgLgDgIQgCgGgEgGQgFgFgFgDQgGgCgHAAQgHAAgGACgAW9BkQgFAAgDgEQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIAVAAQAEAAADADQADADAAAEIAAAPQAAAEgDADQgDAEgEAAgAREBkQgHAAAAgIIAAgVQAAgHAHAAIAUAAIAAhLIgUAAQgHAAAAgHIAAgWQAAgHAHAAIBYAAQAHAAAAAHIAAAWQAAAHgHAAIgVAAIAABLIAVAAQAHAAAAAHIAAAVQAAAIgHAAgAOLBkQgHAAAAgIIAAiEQAAgHAHAAIAgAAQAHAAAAAHIAABoIA8AAIAAhoQAAgHAHAAIAgAAQAIAAAAAHIAABoIAOAAQAHAAAAAHIAAAVQAAAIgHAAgAM9BkQgIAAAAgIIAAhNIgCAAIg1BNQgHAIgFAAIgkAAQgHAAAAgIIAAiEQAAgHAHAAIAgAAQAHAAAAAHIAABMIACAAIA2hMIAEgFQAEgCADAAIAkAAQAIAAAAAHIAACEQAAAIgIAAgAJYBkQgHAAAAgIIAAhnIgtAAQgIAAAAgHIAAgWQAAgHAIAAICIAAQAIAAAAAHIAAAWQAAAHgIAAIgsAAIAABnQAAAIgIAAgAGJBkQgHAAAAgIIAAiEQAAgHAHAAICCAAQAHAAAAAHIAAAWQAAAHgHAAIhbAAIAAARIBDAAQAIAAAAAIIAAAVQAAAHgIAAIhDAAIAAAWIBbAAQAHAAAAAHIAAAVQAAAIgHAAgAE6BkQgHAAAAgIIAAhnIg+AAIAABnQAAAIgHAAIggAAQgHAAAAgIIAAiEQAAgHAHAAICMAAQAIAAAAAHIAACEQAAAIgIAAgAA+BkQgIAAAAgIIAAhNIgCAAIg0BNQgGAIgFAAIgkAAQgHAAAAgIIAAiEQAAgHAHAAIAgAAQAHAAAAAHIAABMIACAAIAzhMIAFgFQAEgCADAAIAkAAQAIAAAAAHIAACEQAAAIgIAAgAhwBkQgHAAgDgIIgIgTIhDAAIgHATQgDAIgGAAIgjAAQgDAAgCgCQgBgDABgDIA8iEQADgHAGAAIAsAAQAGAAADAHIA8CEQABADgBADQgCACgDAAgAiQAmIgRgpIgDAAIgSApIAmAAgAk1BkQgHAAAAgIIAAhGIgCAAIgdBGQgBADgDACQgDADgFAAIgZAAQgFAAgDgDQgDgCgBgDIgdhGIgCAAIAABGQAAAIgHAAIggAAQgIAAAAgIIAAiEQAAgHAIAAIAsAAQAFAAADACIAEAFIAlBZIACAAIAmhZQABgCADgDQADgCAEAAIAtAAQAIAAAAAHIAACEQAAAIgIAAgAohBkQgHAAAAgIIAAhNIgCAAIg1BNQgHAIgFAAIgkAAQgIAAAAgIIAAiEQAAgHAIAAIAfAAQAIAAAAAHIAABMIACAAIA1hMIAFgFQAEgCADAAIAkAAQAIAAAAAHIAACEQAAAIgIAAgAtABkQgHAAAAgIIAAiEQAAgHAHAAIBLAAQAMAAAUAEIANAFIAKAGIAIAIQAEAFACAFQAEAJAAAKQAAAMgEAKIgGAJIgIAIQgEAEgGACIgNAFQgUAEgMAAIgjAAIAAAhQAAAIgIAAgAsYAZIAjAAQAFAAAFgBQAFgCADgDIAFgGQABgEAAgEQAAgFgBgBQgCgEgDgCQgDgDgFgCQgFgBgFAAIgjAAgAu2BkQgHAAAAgIIAAhnIgtAAQgHAAAAgHIAAgWQAAgHAHAAICIAAQAIAAAAAHIAAAWQAAAHgIAAIgsAAIAABnQAAAIgIAAgAy0BkQgHAAAAgIIAAgVQAAgHAHAAIAMAAIAOg6QADgLAGgKQAGgKAIgIQAGgEAPgHQAIgCAUgBIA+AAQAHAAAAAHIAABoIAOAAQAHAAAAAHIAAAVQAAAIgHAAgAxbgKQgEABgDADQgGAFgCAHIgOA6IA9AAIAAhLIgXAAIgJABgA0hBkQgIAAAAgIIAAgVQAAgHAIAAIAUAAIAAhLIgUAAQgIAAAAgHIAAgWQAAgHAIAAIBXAAQAHAAAAAHIAAAWQAAAHgHAAIgUAAIAABLIAUAAQAHAAAAAHIAAAVQAAAIgHAAgA1nBkQgIAAAAgIIAAhnIg9AAIAABnQAAAIgIAAIggAAQgHAAAAgIIAAiEQAAgHAHAAICMAAQAIAAAAAHIAACEQAAAIgIAAgAW9AZQgFAAgDgDQgDgDAAgEIAAgPQAAgCADgEQADgDAFAAIAVAAQAEAAADADQADAEAAACIAAAPQAAAEgDADQgDADgEAAgAACg/QgGgCgGgGQgGgFgDgHQgDgHAAgIQAAgFAFAAIASAAQAEAAABAFQABAFADADQAFADAFAAQAFAAAEgDQAEgDABgFQAAgFAFAAIAUAAQAFAAAAAFQAAAIgDAHQgDAHgGAFQgGAGgHACQgJADgKAAQgKAAgIgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.1,-10.4,300.2,20.9);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AxMEYIAAovMAiZAAAIAAIvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.2,-28,220.4,56.2);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMGBEQgHAAAAgHIAAhFIgCAAIgxBFQgGAHgFAAIghAAQgHAAAAgHIAAh5QAAgHAHAAIAdAAQAHAAAAAHIAABFIACAAIAxhFIAEgEQADgDAEAAIAhAAQAHAAAAAHIAAB5QAAAHgHAAgAIzBEQgHAAAAgHIAAhfIgpAAQgHABAAgIIAAgTQAAgHAHAAIB9AAQAHAAAAAHIAAATQAAAIgHgBIgpAAIAABfQAAAHgHAAgAHTBEQgHAAgCgHIgHgRIg+AAIgHARQgCAHgGAAIggAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgCgCABgDIA3h5QADgHAGAAIAoAAQAGAAADAGIA3B6QABADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAG1ALIgPglIgCAAIgRAlIAiAAgAEeBEQgHAAAAgHIAAg+IgCAAIgaA+QgBADgDABQgDADgEAAIgYAAQgEAAgDgDQgDgBgBgDIgag+IgCAAIAAA+QAAAHgHAAIgdAAQgHAAAAgHIAAh5QAAgHAHAAIApAAQAEAAADADQADABABADIAiBRIACAAIAihRQABgDADgBQADgDAEAAIApAAQAHAAAAAHIAAB5QAAAHgHAAgABFBEQgHAAAAgHIAAhFIgCAAIgxBFQgGAHgFAAIgfAAQgHAAAAgHIAAh5QAAgHAHAAIAdAAQAFAAAAAHIAABFIACAAIAxhFIAEgEQADgDAEAAIAhAAQAHAAAAAHIAAB5QAAAHgHAAgAjCBEQgHAAAAgHIAAh5QAAgHAHAAIBFAAQALAAATAEIALAEIAKAGIAHAIIAFAIQAEAJAAALQAAAKgEAHIgFAJIgHAIQgEADgGADIgLAEQgTAEgLAAIghAAIAAAeQAAAHgGAAgAieAAIAhAAQAFAAAFAAQAEgBADgDIAEgFQABgEAAgEQAAgEgBgEIgEgGIgHgEIgKAAIghAAgAkvBEQgGAAAAgHIAAhfIgpAAQgHABAAgIIAAgTQAAgHAHAAIB9AAQAHAAAAAHIAAATQAAAIgHgBIgpAAIAABfQAAAHgHAAgAoYBEQgHAAAAgHIAAgTQAAgIAHABIAKAAIANgzQADgMAFgJQAGgKAIgGQAFgEAOgGQAHgDATgBIA4AAQAHAAAAAHIAABfIANAAQAHgBAAAIIAAATQAAAHgHAAgAnHghQgEABgCADQgGAEgCAJIgNAzIA4AAIAAhFIgUAAIgJABgAp9BEQgHAAAAgHIAAgTQAAgIAHABIATAAIAAhFIgTAAQgHABAAgIIAAgTQAAgHAHAAIBQAAQAHAAAAAHIAAATQAAAIgHgBIgSAAIAABFIASAAQAHgBAAAIIAAATQAAAHgHAAgAq+BEQgHAAAAgHIAAhfIg5AAIAABfQAAAHgGAAIgeAAQgHAAAAgHIAAh5QAAgHAHAAICCAAQAGAAAAAHIAAB5QAAAHgGAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81,-6.8,162.1,13.7);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1EE81A","#628602"],[0.008,1],-0.1,-47.7,0.2,47.7).s().p("A41GRIAAshMAxrAAAIAAMhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159,-40.1,318.2,80.2);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg3cAFeIAAq7MBu5AAAIAAK7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-355,-35,710,70);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pet();
	this.instance.setTransform(-177.5,-125);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-177.5,-125,355,250);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg9tAeeMAAAg87MB7bAAAMAAAA87g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-395,-195,790,390);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("Eg2rAErIAApVMBtXAAAIAAJVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-350,-30,700,60);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-12.6,-63.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,-63.8,600,300);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhuA/IAAgXIhDAAIAAAXIgaAAIAAgvIALAAQAJgXAAggIAAgXIBXAAIAABOIALAAIAAAvgAiagjQAAAWgIAdIAiAAIAAg0IgaAAgAImAoIAAhmIAgAAIAAAoIARAAQAXAAAMAJQAMAIAAAQQAAAOgLAIQgLAHgTAAgAJGASIARAAQAOAAAAgLQAAgIgOAAIgRAAgAGFAoIAAhmIAgAAIAABNIAVAAIAAhNIAhAAIAABNIAVAAIAAhNIAhAAIAABmgAFPAoIAAhmIAgAAIAABmgADoAoIAAhmIAgAAIAAAoIARAAQAYAAALAJQAMAIAAAQQAAAOgLAIQgLAHgTAAgAEIASIAQAAQAPAAAAgLQAAgIgPAAIgQAAgAC5AoIAAhNIgVBNIgXAAIgUhNIAABNIgaAAIAAhmIApAAIARA+IAQg+IAqAAIAABmgAgDAoIAAg3IgnA3IgeAAIAAhmIAeAAIAAA6IAng6IAcAAIAABmgAkqAoIAAhmIBVAAIAAAXIg1AAIAAAQIAyAAIAAAVIgyAAIAAATIA3AAIAAAXgAmcAoIAAhmIA9AAQAPAAAIAIQAIAHAAALQAAAJgGAHQgDAEgIADQALADAFAGQAGAFAAAKQAAAIgEAGQgDAHgIADQgDADgJABIgOABgAl7ASIARAAQAIAAADgDQAEgDgBgFQAAgFgCgCQgEgBgIAAIgRAAgAl7gVIAOAAQAHAAAEgCQADgDAAgFQAAgFgDgCQgEgDgHAAIgOAAgAnHAoIgFgRIglAAIgFARIghAAIAohmIAjAAIAmBmgAnTABIgLgkIgMAkIAXAAgApBAoIAAgoIgjAAIAAAoIghAAIAAhmIAhAAIAAAlIAjAAIAAglIAfAAIAABmg");
	this.shape.setTransform(67.2,13.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,6.9,129.2,12.7);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81,-42,162,84);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.5},7,cjs.Ease.get(-1)).to({y:9},7,cjs.Ease.get(1)).to({y:4.8},7,cjs.Ease.get(-1)).to({y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-42,162,84);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:0.449},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.1,-10.4,300.2,20.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},4,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-13,366,26);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-40.1,325,87);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ19();

	// Слой 1
	this.instance_1 = new lib.Символ20();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.1,-10.4,300.2,20.9);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.shadow = new cjs.Shadow("#000000",0,0,17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-186.5,-134,376,272);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.alpha = 0.609;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-395,-195,790,390);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(8.9,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-79.4},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.1,-15.4,366,26);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au1ImIksjJIAAvmMAnDAAAIhkPmIxNAAIjGEtg");
	mask.setTransform(125,-85);

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(158,-77);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.dd1();
	this.instance_1.setTransform(-300,-150);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,6.9,129.2,12.7);


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


(lib.Символ15 = function() {
	this.initialize();

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw0ERIAAohMAhpAAAIAAIhg");
	mask.setTransform(-0.6,0);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],7.2,-47.1,0,7.2,-47.1,41.3).s().p("AwxEUIAAonIELAAIZNAAIELAAIAAIng");
	this.shape.setTransform(0,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],5.4,-19.7,0,5.4,-19.7,41.3).s().p("AsmACIAAgDIZNAAIAAADg");
	this.shape_1.setTransform(0,-27.2);

	this.shape.mask = this.shape_1.mask = mask;

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(0,0,0.972,0.972);

	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(0,0,0.675,0.675);

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.4,-27.3,218.1,58.3);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.alpha = 0.262;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ15();

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E81A1C","#860202"],[0.008,1],-0.1,-31.6,0.1,31.6).s().p("AwdEJIAAoRMAg7AAAIAAIRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_1,p:{scaleX:1.026,scaleY:1.026}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-27.5,219,58.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// Слой 5
	this.instance = new lib.Символ16();
	this.instance.setTransform(-48.2,240,1.008,1.008);
	this.instance.shadow = new cjs.Shadow("#000000",0,0,17);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ16(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,scaleY:1.19,y:120},8).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(-47.6,-182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-132.5},5).wait(4));

	// Слой 2
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(-45,12,0.085,0.085);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,scaleY:1.04,alpha:1},6).to({scaleX:1,scaleY:1},2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-25,-125);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.391},4).wait(5));

	// Слой 1
	this.instance_4 = new lib.Символ7();
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,-195,790,492.3);


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


(lib.Символ9_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.addChild(this.cir,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.2,-19,176.3,38.1);


// stage content:
(lib.lu_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.k1.gotoAndPlay(1);
		this.k2.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.k1.gotoAndStop(0);
			
			this.k2.gotoAndStop(0);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.k2 = new lib.Символ6();
	this.k2.setTransform(345,145);

	this.timeline.addTween(cjs.Tween.get(this.k2).wait(1));

	// Слой 4
	this.k1 = new lib.Символ3();
	this.k1.setTransform(189,23.9);

	this.timeline.addTween(cjs.Tween.get(this.k1).wait(1));

	// Слой 7
	this.instance = new lib.Символ9_1();
	this.instance.setTransform(567,268);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(530,275);
	this.instance_1.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(320,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.fon = new lib.Символ2();
	this.fon.setTransform(-6,38,1.133,1.133);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,100,790,479.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
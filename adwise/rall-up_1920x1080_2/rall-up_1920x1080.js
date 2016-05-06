(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ball.png", id:"ball"},
		{src:"images/desktopwallpapersorgua23861.jpg", id:"desktopwallpapersorgua23861"},
		{src:"images/dollar1.png", id:"dollar1"},
		{src:"images/dollar2.png", id:"dollar2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/man.png", id:"man"},
		{src:"images/money.png", id:"money"}
	]
};



// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.desktopwallpapersorgua23861 = function() {
	this.initialize(img.desktopwallpapersorgua23861);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.dollar1 = function() {
	this.initialize(img.dollar1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.dollar2 = function() {
	this.initialize(img.dollar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,50);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,377,111);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,491);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,395);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0044B3").s().p("Eii9AQYMAAAggvMExNAAFIUuAAMgTYAgqg");
	this.shape.setTransform(1043,104.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2086,209.8);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmOIIAA8PIJNAAIAAcPg");
	this.shape.setTransform(29.6,90.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,180.9);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ball();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.man();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239,491);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwcNPQm1lfAAnwQAAnvG1lfQG0lfJoAAQJpAAG0FfQG1FfAAHvQAAHwm1FfQm0FfppAAQpoAAm0lfg");
	this.shape.setTransform(149,119.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,298.1,239.7);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.money();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,376,395);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqIQWIgNAAIANgWIJKveIJ/w3IBVAAMgTMAgrg");
	this.shape.setTransform(66.3,104.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132.5,209.3);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AphAAITDAA");
	this.shape.setTransform(61,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,124,2);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAB+QgKgEgIgFQgHgGgGgHQgHgHgEgIIgCgFIgEgNQgCgJAAgLIANhXQADgPAMgaIAMgQIAOgOQALgIAbgKQAPgFAggCQATAAAPAEQAQAEALAIQALAIAHAMQAHAMADAQQACAIgDAFQgCAEgJADIglAMQgJADgDgCQgEgCgCgIQgDgNgHgFQgIgGgPAAQgKAAgGACQgIADgGAEQgFAFgEAHQgDAHgCAKIgMA/QgBAKABAHQABAHAEAEQAEAFAHACQAHADAKAAQAMAAALgGQAKgGAHgMQAFgIAEgCQAEgCAIADIAlAOQAHACACAFQABAFgEAHQgIAQgLAMQgMALgOAIQgPAIgSAEQgRAEgTAAQgggDgNgEg");
	this.shape.setTransform(11.6,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.2,26.7);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkB+QgJgEgIgFQgIgGgGgHQgGgHgEgIQgFgJgCgJQgCgJAAgLIAOhXQADgPALgaIAMgQIAPgOQALgIAbgKQAOgFAigCQAUAAAPAEQAPAEALAIQALAIAIAMQAHAMADAQQACAIgDAFQgDAEgJADIglAMQgIADgEgCQgEgCgCgIQgCgNgIgFQgHgGgPAAQgLAAgIACQgHADgGAEQgGAFgDAHQgEAHgCAKIgLA/QgCAKABAHQABAHAEAEQAEAFAHACQAHADALAAQAOAAAKgGQALgGAGgMQAFgIAFgCQAEgCAHADIAmAOQAHACABAFQACAFgEAHQgJAQgLAMQgMALgOAIQgPAIgRAEQgSAEgUAAQghgDgNgEgAHzB/QgJAAgDgDQgCgEABgIIAojfQACgJAEgDQADgDAJAAICXAAQAIAAADADQADADgBAJIgGAgQgBAJgEADQgFAEgIAAIhfAAIgGAgIBMAAQAJAAACADQADADgBAJIgGAeQgCAJgEADQgEAEgIAAIhMAAIgGAiIBiAAQAJAAACADQADAEgCAIIgFAhQgCAJgEADQgEADgIAAgAFQB/QgIAAgDgDQgDgEACgIIAfivIg1AAQgJAAgDgEQgCgDABgJIAGggQACgJADgDQAEgDAJAAICyAAQAJAAADADQACAEgBAIIgGAgQgCAJgEADQgEAEgIAAIg2AAIgfCvQgCAJgEADQgDADgJAAgAigB/QgIAAgDgDQgDgEACgIIAnjfQACgJAEgDQAEgDAIAAICVAAQAJAAADADQADADgCAJIgGAgQgBAJgEADQgEAEgIAAIheAAIgFAgIBLAAQAHAAADADQADADgCAJIgGAeQgCAJgDADQgCAEgJAAIhLAAIgHAiIBhAAQAIAAADADQACAEgBAIIgGAhQgBAJgEADQgEADgHAAgAkKB/QgJAAgDgDQgCgDABgJIAJgzQADgTAIgYQAIgVANgcIgDAAQgPAegUAbIgbApQgHAKgMAAIgYAAQgHAAgDgCQgDgCgCgGIgOgpQgFgOgHgrIgDAAQACAdgBAWQAAAYgEARIgIAzQgCAJgEADQgEADgIAAIgmAAQgJAAgDgDQgCgDABgJIAojgQABgIAEgEQAEgDAJAAIAhAAQAKAAAEACQAEADACAGIAmB1IBQh0QAFgHAEgDQAEgCAKAAIAkAAQAJAAACADQADAEgBAIIgoDgQgCAJgEADQgEADgIAAgAq2B/QgIAAgDgDQgDgEACgIIAnjfQACgJAEgDQAEgEAIAAIBqAAQASAAAOAFQAOAFAJAJQAJAKADANQADANgCAQQgEASgIAMQgIALgQAKIAAABQAhAOgIAxQgDARgJANQgIAMgNAJQgNAIgRAFQgRAEgTAAgApzBFIAqAAQALAAAHgFQAGgGACgKQACgLgFgFQgEgFgMAAIgqAAgApigdIAjAAQALAAAGgFQAHgFABgKQACgJgEgGQgFgFgLAAIgjAAg");
	this.shape.setTransform(70.8,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141.7,26.7);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(108.1,16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216.3,33.9);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmjAAINHAA");
	this.shape.setTransform(42,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,86,2);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AvOAAIedAA");
	this.shape.setTransform(97.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,197,2);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EgmRAAAMBMjAAA");
	this.shape.setTransform(245.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,492.2,2);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAQWMAAAggrITVAAIBYAAIhYCUIooOjIpYP0gA0fQWIgNAAIANgWIJKveIKBw3IBUAAMAAAAgrg");
	this.shape.setTransform(132.6,104.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,265.1,209.3);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJACdQgJAAgCgDQgDgDABgJIAHgnIiDAAIgHAnQgCAJgEADQgEADgIAAIgoAAQgIAAgDgDQgDgDABgJIAQhXQACgJAEgEQADgCAJgBIAIAAQAIgGAHgIQAHgJAGgLQAFgIAEgPIAXh2QABgJAEgDQAEgDAIAAICeAAQAJAAACADQADAEgCAIIgeCvIARAAQAIABADACQACAEgBAJIgPBXQgCAJgEADQgEADgJAAgAIFg2QgFAfgJAXQgIAXgLAQIBAAAIAXh/IgwAAgAm0CdQgIAAgDgDQgCgDABgJIAHgnIiEAAIgHAnQgBAJgEADQgEADgJAAIgoAAQgIAAgDgDQgCgDABgJIAPhXQACgJAEgEQAEgCAIgBIAIAAQAJgGAHgIQAHgJAFgLQAGgIAEgPIAWh2QACgJAEgDQAEgDAIAAICdAAQAJAAADADQADAEgCAIIgfCvIARAAQAJABACACQADAEgBAJIgQBXQgBAJgEADQgEADgJAAgAnug2QgGAfgIAXQgJAXgLAQIBBAAIAWh/IgvAAgADJBlQgKgEgIgFQgIgFgGgIQgGgGgEgJQgEgIgCgJQgCgKAAgKIACgXIALg/QADgQAMgaIAMgRIAOgNQALgIAbgLQAOgEAigDIAYACQAMACAJAEQAKAEAIAFQAIAFAGAHQAGAIAEAIQAEAIACAKQACAKAAAKIgCAXIgLA/QgIAdgHAMIgLAQIgPAOQgXAPgPAEQgeAGgSAAQgggCgNgFgAEHhcQgHADgGAEQgGAFgDAGQgEAHgCAIIgMBGQgCAIACAGQABAHAEAEQAFAEAHACQAHADAJAAQAoAAAGgiIAMhGQACgIgCgHQgBgGgFgFQgEgEgHgDQgGgCgKAAQgKAAgIACgAkZBlQgJgEgIgFQgIgFgGgIQgGgGgEgJQgFgIgCgJQgCgKAAgKIACgXIAMg/QACgQAMgaIAMgRIAPgNQAKgIAbgLQAOgEAigDIAZACQALACAKAEQAJAEAIAFQAIAFAGAHQAHAIAEAIQAEAIACAKQACAKAAAKIgCAXIgMA/QgHAdgHAMIgMAQIgOAOQgYAPgOAEQgfAGgRAAQghgCgNgFgAjahcQgIADgGAEQgFAFgEAGQgEAHgBAIIgNBGQgBAIABAGQACAHAEAEQAEAEAHACQAHADAKAAQAnAAAGgiIANhGQABgIgBgHQgCgGgEgFQgEgEgHgDQgHgCgJAAQgKAAgIACgAA9BnQgOgBgFgCQgFgCgEgJIgXg7IgqA7QgGAJgGACQgFACgPABIgtAAQgIgBgBgEQgBgEAFgHIBfhxIgzhvQgDgGACgEQADgEAHAAIArAAQAPAAADACQAEADAEAHIAXA4IApg4QAHgIAFgCQAGgCAMAAIAvAAQAHAAABAEQACAEgGAGIhbBvIA3BxQAEAGgDAFQgDAEgIABg");
	this.shape.setTransform(65.2,15.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130.4,31.6);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(124.8,16.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,249.6,33.9);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AClB+QgJgEgIgFQgIgGgGgHQgGgHgEgIQgFgIgCgKQgCgJAAgLIACgWIAMhAQACgPAMgaIAMgRIAPgNQAKgJAbgKQAOgEAigDIAZACQALACAKADQAJAEAIAGQAIAFAGAHQAHAHAEAJQAEAIACAJQACAKAAALIgCAWIgMBAQgHAdgHAMIgMAQIgOAOQgYAOgOAEQgfAHgRAAQghgDgNgEgADkhDQgIADgGAEQgFAEgEAHQgEAGgBAJIgNBFQgBAJABAGQACAHAEAEQAEAEAHACQAHADAKAAQAnAAAGgjIANhFQABgJgBgGQgCgGgEgFQgEgEgHgDQgHgCgJAAQgKAAgIACgAkiCAQgRgEgMgIQgMgIgIgLQgIgMgDgPQgCgPAPgFIAmgMQAIgDAEACQAEACACAIQACAMAJAGQAJAGAQAAQAoAAAFgjIACgHIg8AAQgIAAgDgEQgDgDACgJIAFgcQABgJAEgDQAEgEAJAAIA8AAIABgGQABgIgBgGQgCgGgEgEQgEgFgHgCQgHgCgKAAQgQAAgLAGQgLAGgHAMQgFAIgEACQgEACgIgDIghgMQgHgDgBgFQgCgEAEgIQAJgPALgMQAMgMAOgIQAPgIARgEQASgEAUAAIAZACQALACAJADQAKAEAIAGQAHAFAGAHQAHAHADAJQAEAIACAJQACAKAAALIgNBWQgIAdgGAMIgMAQIgOAOQgXAOgOAEQgfAHgRAAQgVAAgQgFgAguB/QgIAAgDgDQgDgEACgIIAfivIg1AAQgJAAgDgEQgCgDABgJIAGggQACgJADgDQAEgDAJAAICwAAQAJAAADADQACAEgBAIIgGAgQgCAJgEADQgEAEgIAAIg2AAIgfCvQgCAJgEADQgDADgHAAg");
	this.shape.setTransform(35.2,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.3,26.7);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAeQgIAAgDgDQgDgEACgIIAFgdQABgIAEgEQAFgDAJAAIBRAAQAIAAACADQADAEgBAIIgFAdQgCAIgEAEQgDADgJAAg");
	this.shape.setTransform(6,3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,6.1);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7B+QgJgEgIgFQgIgGgGgHQgGgHgEgIQgFgIgCgKQgCgJAAgLIACgWIAMhAQACgPAMgaIAMgRIAPgNQAKgJAbgKQAOgEAggDIAZACQALACAKADQAJAEAIAGQAIAFAGAHQAHAHAEAJQAEAIACAJQACAKAAALIgCAWIgMBAQgHAdgHAMIgMAQIgOAOQgYAOgOAEQgfAHgPAAQghgDgNgEgAAChDQgGADgGAEQgFAEgEAHQgEAGgBAJIgNBFQgBAJABAGQACAHAEAEQAEAEAHACQAHADAKAAQAlAAAGgjIANhFQABgJgBgGQgCgGgEgFQgEgEgHgDQgHgCgJAAQgKAAgIACgAoaB+QgKgEgIgFQgHgGgGgHQgHgHgEgIQgEgJgCgJQgCgJAAgLIANhXQADgPAMgaIAMgQIAOgOQALgIAbgKQAPgFAigCQATAAAPAEQAQAEALAIQALAIAHAMQAHAMADAQQACAIgDAFQgCAEgJADIglAMQgJADgDgCQgEgCgCgIQgDgNgHgFQgIgGgPAAQgKAAgIACQgIADgGAEQgFAFgEAHQgDAHgCAKIgMA/QgBAKABAHQABAHAEAEQAEAFAHACQAHADAKAAQAOAAALgGQAKgGAHgMQAFgIAEgCQAEgCAIADIAlAOQAHACACAFQABAFgEAHQgIAQgLAMQgMALgOAIQgPAIgSAEQgRAEgVAAQgggDgNgEgAGlB/QgIAAgDgDQgDgEACgIIAfivIg1AAQgJAAgDgEQgCgDABgJIAGggQACgJADgDQAEgDAJAAICyAAQAJAAADADQACAEgBAIIgGAgQgCAJgEADQgEAEgIAAIg2AAIgfCvQgCAJgEADQgDADgJAAgACGB/QgIAAgDgDQgDgEACgIIAnjfQACgJAEgDQAEgDAIAAIBkAAQAqAAAUAaQALANADARQADARgDAWQgEAVgJAOQgJAPgOALQgNAKgSAFQgSAGgWAAIgsAAIgLA9QgCAJgDADQgEADgJAAgADXgKIAjAAQANAAAJgIQAIgHACgMQACgMgGgHQgGgHgMAAIgkAAgAjZB/QgJAAgCgDQgDgDABgJIAgivIhEAAIgfCvQgCAJgEADQgEADgIAAIgpAAQgJAAgDgDQgCgEABgIIAojfQACgJAEgDQADgDAJAAIC0AAQAIAAADADQADADgBAJIgoDfQgCAJgEADQgEADgIAAg");
	this.shape.setTransform(59,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118,26.7);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.desktopwallpapersorgua23861();
	this.instance.setTransform(-3.9,9.8,1.02,1.02);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,9.8,1958.4,1101.6);


(lib.Символ29_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dollar2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,50);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dollar1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(-8.8,90.4,1.13,1.13,5,0,0,29.6,90.4);
	this.instance.alpha = 0.559;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance.cache(-2,-2,63,185);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-25.3,110,235);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(29.6,90.4,1,1,0,0,0,29.6,90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:573.2},19).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-25.3,110,235);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(119.5,245.5,1,1,0,0,0,119.5,245.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239,491);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(138,53.8,1.85,1.85,0,0,0,149,119.8);
	this.instance.alpha = 0.301;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(89, 89, 1)];
	this.instance.cache(-2,-2,302,244);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-182.6,-212.9,644,536);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(149,479.8,1,1,0,0,0,149,119.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:119.8},34).to({alpha:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,147.1,644,537);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9OEiIEPnLIAAAAIhGhIIAAAAIGymIIgbhaII6kUIAAAAIAKh/IJ9gtIAAAAIApiAIKIDUIAAAAIBVhwIAAAAIFMDwIBhhIIAAAAIHUJvIBdgUIAAAAIA+D5IA3HaIAjAFIgPDFIg6E0IheF+IsAi0IAAAAIoziHIAAAAIhmisIAAAAIgti3IhaivIhIgyIAAAAIg4ADIAAAAIg8AdIgpAfIgRBBIAABSIARBYIBOClIBlDNIibFUIAAAAIAAAAI8JvygA9OEiIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_1 = new cjs.Graphics().p("A9OE8IEInOIAAAAIhHhHIAAAAIGtmPIgdhZII2kcIAAAAIAIiAIJ9g2IAAAAIAmiAIKMDLIAAAAIBThyIAAAAIFPDrIBhhKIAAAAIHcJoIBdgVIAAAAIBCD5IA+HYIAjAEIgMDGIg1E1IhaF/IsCioIAAAAIo0h/IAAAAIhpirIAAAAIgwi2IhciuIhKgxIAAAAIg3AEIAAAAIg8AfIgoAeIgQBCIABBSIATBXIBQCkIBoDMIiXFWIAAAAIAAAAI8XvYgA9OE8IAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_2 = new cjs.Graphics().p("A9NFUIEBnRIAAAAIhIhHIAAAAIGomUIgehZIIzkjIAAAAIAGiAIJ8g/IAAAAIAkiAIKPDCIAAAAIBRhzIAAAAIFTDnIBfhLIAAAAIHlJiIBcgXIAAAAIBFD4IBEHYIAjAEIgJDGIgxE1IhVGAIsEieIAAAAIo2h4IAAAAIhripIAAAAIgyi2IhfisIhKgwIAAAAIg3AEIAAAAIg8AgIgnAfIgQBBIADBTIAUBXIBSCjIBqDKIiSFYIAAAAIAAAAI8jvAgA9NFUIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_3 = new cjs.Graphics().p("A9NFoID9nUIAAAAIhJhFIAAAAIGjmaIgfhYIIvkqIAAAAIAFiAIJ8hFIAAAAIAjiBIKQC7IAAAAIBQh0IAAAAIFVDjIBfhMIAAAAIHrJcIBcgXIAAAAIBID3IBJHXIAkADIgIDGIgtE2IhQGBIsGiWIAAAAIo3hxIAAAAIhuioIAAAAIg0i1IhgirIhLgvIAAAAIg3AEIAAAAIg7AhIgnAfIgPBCIADBSIAVBXIBSCiIBvDJIiOFaIAAAAIAAAAI8vusgA9NFoIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_4 = new cjs.Graphics().p("A9MF6ID4nXIAAAAIhJhFIAAAAIGfmdIgghYIIskvIAAAAIAEiAIJ7hMIAAAAIAiiBIKRC1IAAAAIBQh1IAAAAIFXDgIBehNIAAAAIHxJYIBbgZIAAAAIBLD3IBOHWIAjADIgGDGIgqE2IhNGCIsHiOIAAAAIo4hsIAAAAIhvinIAAAAIg2i0IhiirIhLguIAAAAIg3AFIAAAAIg7AhIgmAgIgPBBIAEBTIAWBWIBTChIBxDIIiLFcIAAAAIAAAAI83uagA9MF6IAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_5 = new cjs.Graphics().p("A9LGIID0nZIAAAAIhKhEIAAAAIGdmgIghhZIIqkzIAAAAIACh/IJ6hRIAAAAIAhiCIKTCwIAAAAIBPh1IAAAAIFZDdIBdhOIAAAAIH2JUIBbgZIAAAAIBMD2IBSHVIAjADIgEDGIgoE3IhJGCIsJiIIAAAAIo5hoIAAAAIhwimIAAAAIg3i0IhkipIhLguIAAAAIg3AFIAAAAIg7AiIgmAgIgOBCIAFBSIAWBXIBVCgIByDHIiIFdIAAAAIAAAAI8+uMgA9LGIIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_6 = new cjs.Graphics().p("A9KGTIDxnaIAAAAIhKhEIAAAAIGZmjIghhYIIok2IAAAAIACiAIJ6hVIAAAAIAgiBIKUCrIAAAAIBOh1IAAAAIFaDbIBdhPIAAAAIH5JRIBbgaIAAAAIBOD2IBUHVIAjACIgCDGIgnE3IhHGDIsJiEIAAAAIo5hjIAAAAIhximIAAAAIg5i0IhkipIhMgtIAAAAIg3AGIAAAAIg7AiIgmAgIgNBCIAFBSIAXBXIBWCgIBzDGIiGFdIAAAAIAAAAI9DuAgA9KGTIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_7 = new cjs.Graphics().p("A9KGaIDvnaIAAAAIhKhEIAAAAIGYmlIgihYIInk4IAAAAIABiAIJ5hXIAAAAIAgiCIKVCpIAAAAIBNh2IAAAAIFbDZIBdhPIAAAAIH7JPIBbgaIAAAAIBPD1IBXHUIAjADIgCDGIglE3IhFGEIsKiBIAAAAIo6hhIAAAAIhyimIAAAAIg5izIhlioIhMgtIAAAAIg3AGIAAAAIg6AiIgmAgIgNBCIAFBTIAXBWIBXCfIB0DGIiFFeIAAAAIAAAAI9Ht5gA9KGaIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_8 = new cjs.Graphics().p("A9KGfIDvnbIAAAAIhLhEIAAAAIGXmlIgihYIIlk6IAAAAIACiAIJ4hZIAAAAIAgiCIKVCnIAAAAIBNh2IAAAAIFcDZIBchPIAAAAIH9JNIBbgbIAAAAIBQD2IBXHUIAkACIgCDGIgkE3IhEGEIsKh/IAAAAIo7hgIAAAAIhyilIAAAAIg5izIhmioIhMgtIAAAAIg3AHIAAAAIg6AiIgmAgIgNBCIAGBTIAXBWIBXCfIB1DFIiEFfIAAAAIAAAAI9Kt0gA9KGfIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_9 = new cjs.Graphics().p("A9JGhIDtncIAAAAIhLhDIAAAAIGXmmIgihYIIlk7IAAAAIACiAIJ4hZIAAAAIAfiCIKWCnIAAAAIBNh2IAAAAIFcDYIBchPIAAAAIH+JMIBagaIAAAAIBQD1IBYHUIAjACIgBDHIgkE3IhEGDIsKh+IAAAAIo6hfIAAAAIhyilIAAAAIg6izIhmioIhMgtIAAAAIg3AGIAAAAIg6AjIgmAgIgNBCIAGBTIAXBWIBXCfIB1DFIiEFfIAAAAIAAAAI9JtygA9JGhIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("A9LGJID0nZIAAAAIhKhEIAAAAIGcmhIgghYIIpkzIAAAAIADiAIJ6hRIAAAAIAgiCIKUCwIAAAAIBOh1IAAAAIFZDcIBdhNIAAAAIH2JTIBcgZIAAAAIBMD2IBSHVIAjADIgEDGIgoE3IhJGCIsIiIIAAAAIo6hnIAAAAIhwimIAAAAIg3i0IhkipIhLguIAAAAIg3AFIAAAAIg7AiIgmAgIgOBCIAFBSIAWBXIBVCgIByDHIiIFdIAAAAIAAAAI8+uLgA9LGJIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_11 = new cjs.Graphics().p("A9MFzID5nWIAAAAIhJhFIAAAAIGhmbIgfhZIItktIAAAAIAEh/IJ7hKIAAAAIAiiBIKSC3IAAAAIBPh0IAAAAIFXDhIBehNIAAAAIHvJaIBbgZIAAAAIBKD3IBMHWIAjAEIgGDGIgsE2IhNGCIsHiSIAAAAIo4htIAAAAIhuioIAAAAIg1i0IhiirIhLgvIAAAAIg3AFIAAAAIg7AhIgnAgIgOBBIADBTIAWBWIBTCiIBwDIIiNFbIAAAAIAAAAI8zuhgA9MFzIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_12 = new cjs.Graphics().p("A9NFgID/nTIAAAAIhJhGIAAAAIGlmXIgehZIIwknIAAAAIAGiAIJ7hCIAAAAIAkiBIKPC+IAAAAIBRhzIAAAAIFUDkIBfhMIAAAAIHpJfIBcgXIAAAAIBHD3IBHHXIAjAEIgIDGIgvE2IhSGBIsFiaIAAAAIo3h0IAAAAIhsipIAAAAIg0i0IhfisIhLgwIAAAAIg3AFIAAAAIg7AgIgnAfIgQBCIADBSIAVBXIBSCiIBtDKIiQFZIAAAAIAAAAI8qu0gA9NFgIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_13 = new cjs.Graphics().p("A9NFPIECnQIAAAAIhHhHIAAAAIGpmTIgehZIIzkiIAAAAIAGiAIJ9g9IAAAAIAkiAIKODEIAAAAIBShzIAAAAIFSDoIBghLIAAAAIHjJjIBcgXIAAAAIBED5IBDHXIAjAEIgKDGIgxE2IhWGAIsDihIAAAAIo2h5IAAAAIhriqIAAAAIgxi1IhfitIhKgwIAAAAIg3AEIAAAAIg8AgIgnAfIgQBBIACBTIAUBXIBSCjIBqDKIiTFYIAAAAIAAAAI8hvFgA9NFPIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_14 = new cjs.Graphics().p("A9OFBIEHnOIAAAAIhIhHIAAAAIGtmQIgehaII2kdIAAAAIAHiAIJ9g4IAAAAIAmiAIKMDJIAAAAIBThyIAAAAIFQDqIBghKIAAAAIHeJnIBdgWIAAAAIBCD5IBAHYIAjAEIgMDGIg0E1IhYF/IsDimIAAAAIo0h9IAAAAIhqirIAAAAIgwi2IhditIhKgxIAAAAIg3AEIAAAAIg8AfIgnAeIgRBCIACBSIATBXIBQCkIBpDLIiWFXIAAAAIAAAAI8avTgA9OFBIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_15 = new cjs.Graphics().p("A9OE2IEJnNIAAAAIhGhIIAAAAIGumNIgchaII3kaIAAAAIAIh/IJ9g0IAAAAIAniAIKKDNIAAAAIBUhxIAAAAIFPDsIBhhKIAAAAIHaJqIBcgVIAAAAIBCD5IA8HZIAjAEIgNDGIg2E0IhbF/IsBirIAAAAIo0iBIAAAAIhpirIAAAAIgvi2IhbiuIhKgxIAAAAIg3ADIAAAAIg8AfIgoAeIgRBBIABBTIATBXIBPCkIBnDMIiXFWIAAAAIAAAAI8UvegA9OE2IAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_16 = new cjs.Graphics().p("A9OEtIEMnMIAAAAIhHhIIAAAAIGxmLIgchaII4kXIAAAAIAJh/IJ9gxIAAAAIAniAIKKDQIAAAAIBVhxIAAAAIFNDuIBhhJIAAAAIHYJsIBcgVIAAAAIBAD6IA6HZIAjAEIgODGIg3E0IhdF/IsBivIAAAAIoziEIAAAAIhnirIAAAAIgvi3IhbiuIhJgyIAAAAIg3ADIAAAAIg8AfIgoAeIgRBBIAABSIASBYIBPCkIBmDNIiZFVIAAAAIAAAAI8PvngA9OEtIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_17 = new cjs.Graphics().p("A9OEnIENnLIAAAAIhGhIIAAAAIGymKIgchaII5kVIAAAAIAKiAIJ9guIAAAAIAoiAIKJDTIAAAAIBVhxIAAAAIFMDvIBihJIAAAAIHVJuIBcgUIAAAAIBAD5IA4HZIAjAFIgODGIg5E0IheF+IsAiyIAAAAIoziFIAAAAIhnisIAAAAIgti3IhbiuIhJgyIAAAAIg3ACIAAAAIg8AfIgoAeIgSBBIABBSIARBYIBOCkIBmDNIibFVIAAAAIAAAAI8LvtgA9OEnIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_18 = new cjs.Graphics().p("A9OEjIEOnKIAAAAIhGhJIAAAAIGzmJIgchaII6kUIAAAAIAKh/IJ9gtIAAAAIAoiAIKJDUIAAAAIBVhxIAAAAIFMDwIBihIIAAAAIHUJuIBcgUIAAAAIA/D6IA3HZIAjAFIgPDGIg5E0IhfF+IsAi0IAAAAIoyiGIAAAAIhnitIAAAAIgti2IhaivIhIgyIAAAAIg4ACIAAAAIg8AfIgoAeIgSBBIAABSIASBYIBNCkIBlDNIibFVIAAAAIAAAAI8JvxgA9OEjIAAAAIAAAAIAAAAIAAAAIAAAAg");
	var mask_graphics_19 = new cjs.Graphics().p("A9OEiIEPnLIAAAAIhGhIIAAAAIGymIIgbhaII6kUIAAAAIAKh/IJ9gtIAAAAIApiAIKIDUIAAAAIBVhwIAAAAIFMDwIBhhIIAAAAIHUJvIBdgUIAAAAIA+D5IA3HaIAjAFIgPDFIg6E0IheF+IsAi0IAAAAIoziHIAAAAIhmisIAAAAIgti3IhaivIhIgyIAAAAIg4ADIAAAAIg8AdIgpAfIgRBBIAABSIARBYIBOClIBlDNIibFUIAAAAIAAAAI8JvygA9OEiIAAAAIAAAAIAAAAIAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:188.1,y:149.2}).wait(1).to({graphics:mask_graphics_1,x:184.7,y:149.7}).wait(1).to({graphics:mask_graphics_2,x:181.7,y:150.1}).wait(1).to({graphics:mask_graphics_3,x:179,y:150.4}).wait(1).to({graphics:mask_graphics_4,x:176.8,y:150.7}).wait(1).to({graphics:mask_graphics_5,x:175,y:150.9}).wait(1).to({graphics:mask_graphics_6,x:173.6,y:151.1}).wait(1).to({graphics:mask_graphics_7,x:172.5,y:151.2}).wait(1).to({graphics:mask_graphics_8,x:171.9,y:151.3}).wait(1).to({graphics:mask_graphics_9,x:171.8,y:151.4}).wait(1).to({graphics:mask_graphics_10,x:174.9,y:151}).wait(1).to({graphics:mask_graphics_11,x:177.7,y:150.6}).wait(1).to({graphics:mask_graphics_12,x:180.2,y:150.3}).wait(1).to({graphics:mask_graphics_13,x:182.3,y:150}).wait(1).to({graphics:mask_graphics_14,x:184.1,y:149.8}).wait(1).to({graphics:mask_graphics_15,x:185.6,y:149.6}).wait(1).to({graphics:mask_graphics_16,x:186.7,y:149.5}).wait(1).to({graphics:mask_graphics_17,x:187.5,y:149.4}).wait(1).to({graphics:mask_graphics_18,x:188,y:149.3}).wait(1).to({graphics:mask_graphics_19,x:188.1,y:149.2}).wait(1));

	// Слой 3
	this.instance = new lib.Символ42();
	this.instance.setTransform(215.6,294.1,1,1,0,0,0,149,119.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4,x:207.2,y:293.6},9,cjs.Ease.get(1)).to({rotation:0,x:215.6,y:294.1},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(188.8,216.4,1,1,0,0,0,188,197.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:197.6,rotation:-4,x:175.1,y:218.2},9,cjs.Ease.get(1)).to({regY:197.5,rotation:0,x:188.8,y:216.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,18.9,376,395);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(66.2,104.6,1,1,0,0,0,66.2,104.6);
	this.instance.alpha = 0.211;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132.5,209.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(66.2,104.6,1,1,0,0,0,66.2,104.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2586.8},79).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.5,209.3);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(61,0,1,1,0,0,0,61,0);
	this.instance.alpha = 0.461;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,123,1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(61,0,1,1,0,0,0,61,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).to({x:2461},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(331.1,411.5,1,1,-106,0,0,331.1,411.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4,y:411.6},19,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,113.3,932.5,746);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9aIXIAVinIAziMIBcitIBIhcQgDABAUgnIiziVIC1jKICnh7IB8DbIB5hOIB8ghICigwIDCgCIhOJ4IiGAKIhGAaIgVATIC7FaQAAABk3jpIgeAZIgTAmIgrCxgApioeMAm9gAHIh/REMgm0AACIB2w/g");
	mask.setTransform(188.7,55);

	// Слой 3
	this.instance = new lib.Символ50();
	this.instance.setTransform(-30.4,70.9,1,1,0,0,0,29.6,90.4);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.logo();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,377,111);


(lib.Символ28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(-965.2,-101,1,1,0,0,0,188,197.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:-765.2,alpha:1},9,cjs.Ease.get(1)).to({x:-785.2},5,cjs.Ease.get(1)).wait(75).to({x:-825.2},5,cjs.Ease.get(1)).to({x:-605.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(191.1,15.1,0.89,0.89,0,0,0,188.5,55.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:391.1,alpha:1},9,cjs.Ease.get(1)).to({x:371.1},5,cjs.Ease.get(1)).wait(31).to({scaleX:0.99,scaleY:0.99},6,cjs.Ease.get(1)).to({scaleX:0.89,scaleY:0.89},5,cjs.Ease.get(1)).wait(36).to({x:331.1},5,cjs.Ease.get(1)).to({x:551.1,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 31
	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(-29.8,24,1.95,1.95,0,0,0,11.6,13.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:170.2,alpha:1},9,cjs.Ease.get(1)).to({x:150.2},5,cjs.Ease.get(1)).wait(28).to({scaleX:2.3,scaleY:2.3,x:150.3},6,cjs.Ease.get(1)).to({scaleX:1.95,scaleY:1.95,x:150.2},5,cjs.Ease.get(1)).wait(42).to({x:110.2},5,cjs.Ease.get(1)).to({x:330.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_4 = new lib.Символ30();
	this.instance_4.setTransform(-203.7,24,1.95,1.95,0,0,0,70.9,13.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({x:-3.7,alpha:1},9,cjs.Ease.get(1)).to({x:-23.7},5,cjs.Ease.get(1)).wait(24).to({scaleX:2.08,scaleY:2.08,y:23.9},6,cjs.Ease.get(1)).to({scaleX:1.95,scaleY:1.95,y:24},5,cjs.Ease.get(1)).wait(48).to({x:-63.7},5,cjs.Ease.get(1)).to({x:156.3,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Символ 29
	this.instance_5 = new lib.Символ29();
	this.instance_5.setTransform(-577.6,16.9,1.95,1.95,0,0,0,108.1,16.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-377.6,alpha:1},9,cjs.Ease.get(1)).to({x:-397.6},5,cjs.Ease.get(1)).wait(20).to({scaleX:2.12,scaleY:2.12,x:-397.7,y:17},6,cjs.Ease.get(1)).to({scaleX:1.95,scaleY:1.95,x:-397.6,y:16.9},5,cjs.Ease.get(1)).wait(54).to({x:-437.6},5,cjs.Ease.get(1)).to({x:-217.6,alpha:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-788.4,-16,421.7,66);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(42,0,1,1,0,0,0,42,0);
	this.instance.alpha = 0.461;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,85,1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(42,0,1,1,0,0,0,42,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({x:2466},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(97.5,0,1,1,0,0,0,97.5,0);
	this.instance.alpha = 0.461;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,196,1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(97.5,0,1,1,0,0,0,97.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2437.5},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,196,1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(132.6,104.6,1,1,0,0,0,132.6,104.6);
	this.instance.alpha = 0.211;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,265.1,209.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(132.6,104.6,1,1,0,0,0,132.6,104.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({x:2400.3},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(245.1,0,1,1,0,0,0,245.1,0);
	this.instance.alpha = 0.461;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,491.2,1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(245.1,0,1,1,0,0,0,245.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2865.1},54).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,491.2,1);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(1043,104.9,1,1,0,0,0,1043,104.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2086,209.8);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(119.5,245.5,1,1,0,0,0,119.5,245.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239,491);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(65.2,15.8,1,1,0,0,0,65.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.6},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.4,31.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(124.8,16.9,1,1,0,0,0,124.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:130.2},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249.6,33.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(35.1,13.3,1,1,0,0,0,35.1,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:40.5},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.3,26.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(6,3,1,1,0,0,0,6,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:11.4},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,6.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(119.5,245.5,1,1,0,0,0,119.5,245.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:141.5,y:243.5},100,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239,491);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eii9AQYMAAAggvMExNAAFIUuAAMgTYAgqg");
	mask.setTransform(1043,104.9);

	// Слой 5 - копия
	this.instance = new lib.Символ25();
	this.instance.setTransform(-126,43,1,1,0,0,0,42,0);

	this.instance.mask = mask;

	// Слой 7
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(-345.4,94.6,1,1,0,0,0,66.2,104.6);

	this.instance_1.mask = mask;

	// Слой 6
	this.instance_2 = new lib.Символ34();
	this.instance_2.setTransform(-155.5,119.1,1,1,0,0,0,61,0);

	this.instance_2.mask = mask;

	// Слой 5
	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(-160.5,79,1,1,0,0,0,97.5,0);

	this.instance_3.mask = mask;

	// Слой 3
	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(-139.7,94.6,1,1,0,0,0,132.6,104.6);

	this.instance_4.mask = mask;

	// Слой 2
	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(-316.9,148,1,1,0,0,0,245.1,0);

	this.instance_5.mask = mask;

	// Слой 1
	this.instance_6 = new lib.Символ15();
	this.instance_6.setTransform(1043,104.9,1,1,0,0,0,1043,104.9);

	this.instance_6.mask = mask;

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2086,209.8);


(lib.Символ30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29 - копия: 2 - копия: 2
	this.instance = new lib.Символ29_1();
	this.instance.setTransform(-22.6,17.9,0.659,0.659,-1.2,0,0,43.5,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:25,rotation:9.1,x:42.3,y:3},0).wait(1).to({rotation:16.1,x:86.9,y:-7.3},0).wait(1).to({rotation:20.5,x:114.8,y:-13.8},0).wait(1).to({rotation:23.3,x:132.4,y:-17.8},0).wait(1).to({rotation:24.9,x:142.8,y:-20.3},0).wait(1).to({rotation:25.8,x:148.6,y:-21.6},0).wait(1).to({rotation:26.4,x:152.5,y:-22.6},0).wait(1).to({rotation:26.9,x:155.3,y:-23.2},0).wait(1).to({rotation:27.2,x:157.2,y:-23.6},0).wait(1).to({rotation:27.4,x:158.7,y:-24},0).wait(1).to({rotation:27.6,x:159.8,y:-24.2},0).wait(1).to({rotation:27.7,x:160.6,y:-24.4},0).wait(1).to({rotation:27.8,x:161.2,y:-24.5},0).wait(1).to({rotation:27.9,x:161.9,y:-24.7},0).wait(1).to({rotation:28,x:162.4,y:-24.8},0).wait(1).to({rotation:28.1,x:163.2,y:-25},0).wait(1).to({rotation:28.3,x:164.1,y:-25.2},0).wait(1).to({rotation:28.5,x:165.6,y:-25.5},0).wait(1).to({rotation:28.8,x:167.8,y:-26.1},0).to({regX:43.4,regY:25.1,rotation:58.8,x:252.8,y:-55.8,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(38.5,-20,0.659,0.659,88.8,0,0,33,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:32,rotation:58,x:84.3,y:-23.4},0).wait(1).to({rotation:41,x:109.4,y:-25.3},0).wait(1).to({rotation:31,x:124.2,y:-26.4},0).wait(1).to({rotation:24.1,x:134.4,y:-27.2},0).wait(1).to({rotation:18.7,x:142.3,y:-27.8},0).wait(1).to({rotation:14.5,x:148.6,y:-28.3},0).wait(1).to({rotation:11.2,x:153.5,y:-28.6},0).wait(1).to({rotation:8.5,x:157.5,y:-29},0).wait(1).to({rotation:6.3,x:160.8,y:-29.2},0).wait(1).to({rotation:4.5,x:163.5,y:-29.4},0).wait(1).to({rotation:3,x:165.7,y:-29.6},0).wait(1).to({rotation:1.8,x:167.4,y:-29.7},0).wait(1).to({rotation:0.8,x:168.9,y:-29.8},0).wait(1).to({rotation:0,x:170.1,y:-29.9},0).wait(1).to({rotation:-0.6,x:171.1,y:-30},0).wait(1).to({regX:33.1,regY:31.9,rotation:-1.2,x:171.9},0).to({regY:32,x:269.6,y:-99,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29 - копия: 2 - копия
	this.instance_2 = new lib.Символ29_1();
	this.instance_2.setTransform(47.5,171,0.999,0.999,-18,0,0,43.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-7.8,x:135,y:120.6},0).wait(1).to({rotation:-0.8,x:195.1,y:86.1},0).wait(1).to({rotation:3.6,x:232.6,y:64.5},0).wait(1).to({rotation:6.4,x:256.4,y:50.8},0).wait(1).to({rotation:8.1,x:270.5,y:42.8},0).wait(1).to({rotation:9,x:278.3,y:38.2},0).wait(1).to({rotation:9.6,x:283.5,y:35.3},0).wait(1).to({rotation:10,x:287.2,y:33.1},0).wait(1).to({rotation:10.3,x:289.9,y:31.6},0).wait(1).to({rotation:10.6,x:291.9,y:30.5},0).wait(1).to({rotation:10.7,x:293.4,y:29.7},0).wait(1).to({rotation:10.9,x:294.5,y:29},0).wait(1).to({rotation:11,x:295.3,y:28.5},0).wait(1).to({x:296.1,y:28.1},0).wait(1).to({rotation:11.1,x:296.9,y:27.6},0).wait(1).to({rotation:11.3,x:297.9,y:27.1},0).wait(1).to({rotation:11.4,x:299.2,y:26.3},0).wait(1).to({rotation:11.6,x:301.1,y:25.1},0).wait(1).to({regY:25.1,rotation:12,x:304.1,y:23.5},0).to({regY:25,rotation:42,x:414.5,y:-57,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия: 2 - копия
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(29.9,83.2,0.999,0.999,72,0,0,33,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:41.1,x:94.8,y:58.1},0).wait(1).to({rotation:24.1,x:130.4,y:44.3},0).wait(1).to({rotation:14.2,x:151.3,y:36.3},0).wait(1).to({rotation:7.3,x:165.8,y:30.6},0).wait(1).to({rotation:1.9,x:177.1,y:26.3},0).wait(1).to({rotation:-2.3,x:185.9,y:22.9},0).wait(1).to({rotation:-5.6,x:192.9,y:20.2},0).wait(1).to({rotation:-8.3,x:198.6,y:18},0).wait(1).to({rotation:-10.5,x:203.2,y:16.2},0).wait(1).to({rotation:-12.3,x:207,y:14.8},0).wait(1).to({rotation:-13.8,x:210.1,y:13.6},0).wait(1).to({rotation:-15,x:212.6,y:12.6},0).wait(1).to({rotation:-16,x:214.7,y:11.8},0).wait(1).to({rotation:-16.8,x:216.4,y:11.1},0).wait(1).to({rotation:-17.5,x:217.8,y:10.6},0).wait(1).to({rotation:-18,x:218.9,y:10.1},0).to({x:330.3,y:-133,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29 - копия: 2
	this.instance_4 = new lib.Символ29_1();
	this.instance_4.setTransform(33.4,95.2,0.769,0.769,14.8,0,0,43.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:25.1,x:111,y:99.2},0).wait(1).to({rotation:32.1,x:164.4,y:101.9},0).wait(1).to({rotation:36.5,x:197.7,y:103.6},0).wait(1).to({rotation:39.3,x:218.8,y:104.7},0).wait(1).to({rotation:40.9,x:231.3,y:105.3},0).wait(1).to({rotation:41.8,x:238.2,y:105.7},0).wait(1).to({rotation:42.4,x:242.8,y:105.9},0).wait(1).to({rotation:42.9,x:246.1,y:106.1},0).wait(1).to({rotation:43.2,x:248.5,y:106.2},0).wait(1).to({rotation:43.4,x:250.3,y:106.3},0).wait(1).to({rotation:43.6,x:251.6,y:106.4},0).wait(1).to({rotation:43.7,x:252.5},0).wait(1).to({rotation:43.8,x:253.3,y:106.5},0).wait(1).to({rotation:43.9,x:254},0).wait(1).to({rotation:44,x:254.7,y:106.6},0).wait(1).to({rotation:44.1,x:255.6},0).wait(1).to({rotation:44.3,x:256.8,y:106.7},0).wait(1).to({rotation:44.5,x:258.5,y:106.8},0).wait(1).to({regY:25.1,rotation:44.8,x:261.1,y:106.9},0).to({regY:25,rotation:74.8,x:366.1,y:101,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия: 2
	this.instance_5 = new lib.Символ28();
	this.instance_5.setTransform(58.8,31,0.769,0.769,104.8,0,0,33,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:32,rotation:74,x:111.1,y:41.9},0).wait(1).to({rotation:57,x:139.9,y:47.9},0).wait(1).to({rotation:47,x:156.8,y:51.4},0).wait(1).to({rotation:40.1,x:168.5,y:53.8},0).wait(1).to({rotation:34.7,x:177.6,y:55.7},0).wait(1).to({rotation:30.5,x:184.8,y:57.2},0).wait(1).to({rotation:27.2,x:190.5,y:58.3},0).wait(1).to({rotation:24.5,x:195.1,y:59.3},0).wait(1).to({rotation:22.3,x:198.8,y:60.1},0).wait(1).to({rotation:20.5,x:201.9,y:60.7},0).wait(1).to({rotation:19,x:204.3,y:61.3},0).wait(1).to({rotation:17.8,x:206.4,y:61.6},0).wait(1).to({rotation:16.8,x:208.1,y:62},0).wait(1).to({rotation:16,x:209.5,y:62.3},0).wait(1).to({rotation:15.4,x:210.6,y:62.5},0).wait(1).to({regY:31.9,rotation:14.8,x:211.5,y:62.7},0).to({regY:32,x:343.4,y:16.6,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29 - копия
	this.instance_6 = new lib.Символ29_1();
	this.instance_6.setTransform(32.4,74.4,0.81,0.81,-11.8,0,0,43.6,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:43.5,rotation:-1.6,x:107.2,y:41.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:5.4,x:158.7,y:19},0).wait(1).to({rotation:9.8,x:190.8,y:4.9},0).wait(1).to({rotation:12.6,x:211.2,y:-4},0).wait(1).to({rotation:14.2,x:223.2,y:-9.4},0).wait(1).to({rotation:15.2,x:229.8,y:-12.2},0).wait(1).to({rotation:15.8,x:234.4,y:-14.3},0).wait(1).to({rotation:16.2,x:237.5,y:-15.6},0).wait(1).to({rotation:16.5,x:239.8,y:-16.7},0).wait(1).to({rotation:16.8,x:241.5,y:-17.4},0).wait(1).to({rotation:16.9,x:242.8,y:-17.9},0).wait(1).to({rotation:17.1,x:243.7,y:-18.4},0).wait(1).to({rotation:17.2,x:244.5,y:-18.6},0).wait(1).to({x:245.1,y:-18.9},0).wait(1).to({rotation:17.3,x:245.8,y:-19.3},0).wait(1).to({rotation:17.5,x:246.7,y:-19.6},0).wait(1).to({rotation:17.6,x:247.8,y:-20.1},0).wait(1).to({rotation:17.8,x:249.4,y:-20.8},0).wait(1).to({regX:43.6,regY:24.9,rotation:18.2,x:252.1,y:-22},0).to({regX:43.5,regY:25,rotation:48.2,x:347.9,y:-77.1,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия
	this.instance_7 = new lib.Символ28();
	this.instance_7.setTransform(25.9,2.2,0.81,0.81,78.2,0,0,33,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:32,rotation:47.3,x:80.2,y:-12.3},0).wait(1).to({rotation:30.3,x:110.1,y:-20.3},0).wait(1).to({rotation:20.4,x:127.7,y:-24.9},0).wait(1).to({rotation:13.5,x:139.9,y:-28.2},0).wait(1).to({rotation:8.1,x:149.4,y:-30.7},0).wait(1).to({rotation:3.9,x:156.8,y:-32.7},0).wait(1).to({rotation:0.6,x:162.6,y:-34.3},0).wait(1).to({rotation:-2.1,x:167.4,y:-35.5},0).wait(1).to({rotation:-4.3,x:171.3,y:-36.5},0).wait(1).to({rotation:-6.1,x:174.4,y:-37.4},0).wait(1).to({rotation:-7.6,x:177.1,y:-38.1},0).wait(1).to({rotation:-8.8,x:179.2,y:-38.7},0).wait(1).to({rotation:-9.8,x:180.9,y:-39.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-10.6,x:182.4,y:-39.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-11.3,x:183.5,y:-39.8},0).wait(1).to({regY:31.9,rotation:-11.8,x:184.5,y:-40.2},0).to({regY:32,x:286.7,y:-145.6,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29
	this.instance_8 = new lib.Символ29_1();
	this.instance_8.setTransform(31.9,22.9,0.95,0.95,0,0,0,43.6,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:43.5,rotation:10.2,x:125.8,y:3.1},0).wait(1).to({rotation:17.3,x:190.3,y:-10.4},0).wait(1).to({rotation:21.6,x:230.6,y:-18.9},0).wait(1).to({rotation:24.4,x:256.1,y:-24.3},0).wait(1).to({rotation:26.1,x:271.2,y:-27.5},0).wait(1).to({rotation:27,x:279.6,y:-29.2},0).wait(1).to({rotation:27.6,x:285.2,y:-30.4},0).wait(1).to({rotation:28,x:289.2,y:-31.3},0).wait(1).to({rotation:28.3,x:292.1,y:-31.9},0).wait(1).to({rotation:28.6,x:294.2,y:-32.3},0).wait(1).to({rotation:28.7,x:295.8,y:-32.7},0).wait(1).to({rotation:28.9,x:297,y:-32.9},0).wait(1).to({rotation:29,x:297.9,y:-33.1},0).wait(1).to({rotation:29.1,x:298.7,y:-33.3},0).wait(1).to({rotation:29.2,x:299.6,y:-33.4},0).wait(1).to({rotation:29.3,x:300.6,y:-33.7},0).wait(1).to({rotation:29.4,x:302.1,y:-33.9},0).wait(1).to({rotation:29.7,x:304.1,y:-34.4},0).wait(1).to({regY:25.1,rotation:30,x:307.4,y:-35},0).to({regX:43.4,regY:25,rotation:60,x:430.8,y:-75.4,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_9 = new lib.Символ28();
	this.instance_9.setTransform(41.8,-61.7,0.95,0.95,90,0,0,33,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:59.1,x:107.8,y:-65.2},0).wait(1).to({rotation:42.1,x:144.1,y:-67.2},0).wait(1).to({rotation:32.2,x:165.4,y:-68.3},0).wait(1).to({rotation:25.3,x:180.1,y:-69.1},0).wait(1).to({rotation:19.9,x:191.7,y:-69.7},0).wait(1).to({rotation:15.7,x:200.6,y:-70.3},0).wait(1).to({rotation:12.4,x:207.7,y:-70.7},0).wait(1).to({rotation:9.7,x:213.5,y:-71},0).wait(1).to({rotation:7.5,x:218.2,y:-71.2},0).wait(1).to({rotation:5.7,x:222.1,y:-71.4},0).wait(1).to({rotation:4.2,x:225.2,y:-71.6},0).wait(1).to({rotation:3,x:227.8,y:-71.7},0).wait(1).to({rotation:2,x:230,y:-71.8},0).wait(1).to({rotation:1.2,x:231.6,y:-72},0).wait(1).to({rotation:0.5,x:233},0).wait(1).to({rotation:0,x:234.2,y:-72.1},0).to({x:377,y:-168.8,alpha:0},8,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-93,148.1,301.2);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(59,13.3,1,1,0,0,0,59,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:67.1},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,26.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 6
	this.instance = new lib.Символ28_1();
	this.instance.setTransform(1398.6,127.6,1,1,0,0,0,200.3,16.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).wait(110).to({_off:true},1).wait(50));

	// 5
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(1584.1,130.2,1.947,1.947,0,0,0,65.2,15.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:1624.1,alpha:1},10,cjs.Ease.get(1)).to({x:1604.1},5,cjs.Ease.get(1)).wait(45).to({scaleX:2.23,scaleY:2.23,y:130.3},10,cjs.Ease.get(1)).to({scaleX:1.95,scaleY:1.95,y:130.2},10,cjs.Ease.get(1)).wait(6).to({x:1584.1},5,cjs.Ease.get(1)).to({x:1784.1,alpha:0},4,cjs.Ease.get(1)).wait(110).to({_off:true},1).wait(50));

	// 4
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(1184.8,122.2,1.947,1.947,0,0,0,124.8,16.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:1224.8,alpha:1},10,cjs.Ease.get(1)).to({x:1204.8},5,cjs.Ease.get(1)).wait(41).to({scaleX:2.14,scaleY:2.14,x:1204.7},6,cjs.Ease.get(1)).to({scaleX:1.95,scaleY:1.95,x:1204.8},6,cjs.Ease.get(1)).wait(20).to({x:1184.8},5,cjs.Ease.get(1)).to({x:1384.8,alpha:0},4,cjs.Ease.get(1)).wait(110).to({_off:true},1).wait(50));

	// 3
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(839.9,128.5,1.947,1.947,0,0,0,35.2,13.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:879.9,alpha:1},10,cjs.Ease.get(1)).to({x:859.9},5,cjs.Ease.get(1)).wait(37).to({scaleX:2.35,scaleY:2.35,y:128.4},6,cjs.Ease.get(1)).to({scaleX:1.95,scaleY:1.95,y:128.5},6,cjs.Ease.get(1)).wait(26).to({x:839.9},5,cjs.Ease.get(1)).to({x:1039.9,alpha:0},4,cjs.Ease.get(1)).wait(110).to({_off:true},1).wait(50));

	// 2
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(716.3,129.1,1.947,1.947,0,0,0,6,3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({x:756.3,alpha:1},10,cjs.Ease.get(1)).to({x:736.3},5,cjs.Ease.get(1)).wait(34).to({scaleX:2.94,scaleY:2.94},5,cjs.Ease.get(1)).to({scaleX:1.95,scaleY:1.95},6,cjs.Ease.get(1)).wait(32).to({x:716.3},5,cjs.Ease.get(1)).to({x:916.3,alpha:0},4,cjs.Ease.get(1)).wait(110).to({_off:true},1).wait(50));

	// man
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(621,26,1,1,0,0,0,119.5,245.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:661,alpha:1},10,cjs.Ease.get(1)).to({x:641},5,cjs.Ease.get(1)).wait(79).to({x:621},5,cjs.Ease.get(1)).to({x:821,alpha:0},4,cjs.Ease.get(1)).wait(110).to({_off:true},1).wait(50));

	// 1
	this.instance_6 = new lib.Symbol();
	this.instance_6.setTransform(340.9,128.4,2.13,2.13,0,0,0,59,13.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({x:380.9,alpha:1},10,cjs.Ease.get(1)).to({x:360.9},5,cjs.Ease.get(1)).wait(16).to({scaleX:2.72,scaleY:2.72,x:361},8,cjs.Ease.get(1)).to({scaleX:2.13,scaleY:2.13,x:360.9},11,cjs.Ease.get(1)).wait(46).to({x:340.9},5,cjs.Ease.get(1)).to({x:540.9,alpha:0},4,cjs.Ease.get(1)).wait(110).to({_off:true},1).wait(50));

	// Слой 3
	this.instance_7 = new lib.Символ48();
	this.instance_7.setTransform(-104.5,111.1,1,1,0,0,0,100,100);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:2035.5},14,cjs.Ease.get(1)).wait(254));

	// Слой 2
	this.instance_8 = new lib.Символ30_1();
	this.instance_8.setTransform(1878.6,130.7,1.36,1.36,0,0,180,43.5,73.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(29).to({_off:true},1).wait(226));

	// plaha
	this.instance_9 = new lib.Символ3();
	this.instance_9.setTransform(-1159,130.9,1,1,0,0,0,981,104.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({x:981},14,cjs.Ease.get(1)).wait(203).to({x:-1159},5,cjs.Ease.get(1)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.rallup_1920x1080 = function() {
	this.initialize();

	// an
	this.instance = new lib.Символ2();
	this.instance.setTransform(961,977.2,1,1,0,0,0,981,104.9);

	// m (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr+AAAMAAACovg");
	mask.setTransform(960,540);

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(956.3,535.6,1,1,0,0,0,978.2,550.2);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
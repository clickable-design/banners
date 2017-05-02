(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/backgr_600x300.jpeg", id:"backgr_600x300"},
		{src:"images/binarium_logo_ru.png", id:"binarium_logo_ru"},
		{src:"images/white.png", id:"white"}
	]
};



// symbols:



(lib.backgr_600x300 = function() {
	this.initialize(img.backgr_600x300);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.binarium_logo_ru = function() {
	this.initialize(img.binarium_logo_ru);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,80);


(lib.white = function() {
	this.initialize(img.white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,364);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFE").s().rr(-42.15,-25.9,84.3,51.8,2.9);
	this.shape.setTransform(38,20.8,0.901,0.804);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.9,41.6);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtyEAQgdAAAAgdIAAnFQAAgdAdAAIblAAQAdAAAAAdIAAHFQAAAdgdAAg");
	this.shape.setTransform(91.2,25.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,51.3);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtyEAQgdAAAAgdIAAnFQAAgdAdAAIblAAQAdAAAAAdIAAHFQAAAdgdAAg");
	this.shape.setTransform(91.2,25.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,51.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AtyEIQgdAAAAgeIAAnTQAAgeAdAAIblAAQAdAAAAAeIAAHTQAAAegdAAg");
	this.shape.setTransform(91.2,26.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AtyEIQgdAAAAgdIAAnUQAAgeAdAAIblAAQAdAAAAAeIAAHUQAAAdgdAAg");
	this.shape.setTransform(91.2,26.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.white();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,364);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrgQIAuAAIAAhJIB6AAIAABJIAvAAIhsBqg");
	this.shape.setTransform(10.8,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,18.2);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACFBdIAAglIhaAAIAAAlIgeAAIgCg9IAMAAIAGgIIAHgLQADgHACgJQACgLABgQIAEg+IBiAAIAAB8IARAAIgCA9gABJgJIgDAPIgGAPIgFALIA4AAIAAhiIgmAAgAl+A6IgCAAIAAgZIABAAIADAAIAEAAIAHgBIAFgCIAEgFIAEgMIg0hpIAhAAIAiBIIAbhIIAhAAIg5CDQgDAFgFAFQgFAEgHADQgGACgJAAgAFNA4IAAh6IgtAAIAAgaIB5AAIAAAaIguAAIAAB6gACzA4IAAiUIBjAAIAAAaIhFAAIAAAjIA8AAIAAAYIg8AAIAAAnIBGAAIAAAYgAgWA4IgLgfIg2AAIgKAfIghAAIA5iUIAcAAIA1CUgAgpAAIgTg2IgSA2IAlAAgAivA4IAAh6Ig7AAIAAB6IgfAAIAAiUIB6AAIAACUg");
	this.shape.setTransform(41,9.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81.9,18.6);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BaIAAhJIgvAAIBrhqIBsBqIguAAIAABJg");
	this.shape.setTransform(10.8,9.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,18.2);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABPBHQgMgFgHgJQgIgJgFgOQgEgNAAgQIAAgIQAAgRAEgNQAFgNAIgKQAIgJALgFQAMgFAOAAQAOAAALAEQAKAEAIAHQAHAHAFAKQAEAJABAMIgfAAQAAgHgCgFQgCgFgDgEQgEgDgFgCQgFgCgIAAQgPAAgIAMQgIALAAAYIAAAIQAAALACAJQACAJADAFQAEAGAGADQAFADAJAAQAHAAAFgBQAGgCADgDQAEgEACgFQACgFAAgGIAfAAQgBALgEAJQgFAKgHAHQgIAHgLAEQgKADgOAAQgPAAgLgFgAHUBKIAAh6IgtAAIAAgZIB5AAIAAAZIgtAAIAAB6gAE6BKIAAiTIBkAAIAAAZIhFAAIAAAjIA7AAIAAAXIg7AAIAAAoIBFAAIAAAYgADcBKIAAh6IgtAAIAAgZIB6AAIAAAZIguAAIAAB6gAABBKIgIgfIg2AAIgKAfIghAAIA4iTIAcAAIA2CTgAgPATIgTg2IgTA2IAmAAgAjiBKIAAiTIA6AAQANAAALAEQAKADAHAHQAHAHAEAJQAEAJAAAKQAAALgEAJQgEAHgHAGQgHAGgKADQgLAEgNAAIgcAAIAAA0gAjEgBIAcAAQAGAAAFgCIAIgEQADgDABgEIACgJQAAgFgCgFQgBgEgDgEQgDgDgFgCQgFgCgGAAIgcAAgAkcBKIAAiTIAfAAIAACTgAmZBKIAAiTIAfAAIAAA2IAYAAQANAAALADQALAEAHAGQAHAGAEAHQAEAIAAALQAAALgEAJQgEAIgHAHQgHAGgLAEQgLADgNAAgAl6AyIAYAAQAHAAAFgCQAFgCADgDQADgEACgEQABgEAAgFQAAgFgBgEQgCgEgDgDQgDgDgFgCQgFgBgHAAIgYAAgAofBKIAAiTIA0AAQANAAAKACQAKADAIAFQAHAFADAIQAEAHAAALIgBAKIgEAJIgHAHQgEADgFACQAGABAFACQAFAEADAEQADAFABAFQACAFAAAFQAAAWgOALQgOALgaAAgAoBAyIAbAAQAGAAAEgCQAEgBADgDIAEgGQACgEAAgEIgBgJIgEgGQgDgDgEgBQgEgCgGAAIgcAAgAoBgKIAXAAQAMgBAGgEQAFgFAAgJQAAgKgFgFQgGgEgNAAIgWAAg");
	this.shape.setTransform(54.5,7.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,15.4);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AncCLIAAg2IiGAAIAAA2IgrAAIgDhbIARAAIAKgKQAFgGAEgLQAFgKADgPQAEgQAAgYIAGhbICSAAIAAC3IAaAAIgEBbgAo0gNIgGAYIgHAVIgJAQIBUAAIAAiSIg4AAgAIfBYIgDgBIgBgkIADAAIAEAAIAFAAIAMgBQAEgCADgDIAFgGIAHgSIhNicIAxAAIAxBpIAohpIAyAAIhVDCQgFAJgHAGQgHAGgKAEQgKAEgNAAgAstBYIgDgBIAAgkIADAAIADAAIAFAAIAMgBQAEgCADgDIAFgGIAIgSIhOicIAxAAIAxBpIAohpIAyAAIhVDCQgFAJgHAGQgHAGgKAEQgKAEgNAAgASSBQQgRgHgMgOQgNgOgHgUQgHgVAAgXIAAgKQAAgZAHgUQAHgVAMgOQANgOARgIQARgHAWAAQAUAAASAHQARAIANAOQAMAOAHAVQAHAUAAAZIAAAKQAAAXgHAVQgHAUgMAOQgNAOgRAHQgSAIgUAAQgVAAgSgIgASVhSQgNASAAAjIAAAKQAAARAEAMQADANAGAJQAGAJAJAFQAJAEAMAAQAXAAAMgSQAMgSAAghIAAgKQAAgjgMgSQgMgSgXAAQgXAAgNASgAPEBQQgSgHgLgOQgMgOgGgTQgHgUAAgXIAAgOQAAgZAHgUQAGgTANgOQALgOARgIQARgHAWAAQAUAAAQAGQAQAGALAKQALAKAGAPQAHAOABARIgtAAQgBgKgDgHQgCgIgFgFQgFgFgIgDQgIgCgLAAQgYAAgLAQQgLARAAAkIAAAOQAAARACALQADANAFAJQAFAJAJAEQAJAEAMAAQALAAAIgCQAHgDAGgEQAFgFADgIQADgHABgKIAtAAQgBARgHAOQgGAOgLAKQgLAKgQAGQgRAGgUAAQgWAAgQgIgABUBQQgSgHgLgOQgMgOgGgTQgHgUAAgXIAAgOQAAgZAHgUQAGgTANgOQALgOARgIQARgHAWAAQAUAAAQAGQAQAGALAKQALAKAGAPQAHAOABARIgtAAQgBgKgDgHQgCgIgFgFQgFgFgIgDQgIgCgLAAQgYAAgLAQQgLARAAAkIAAAOQAAARACALQADANAFAJQAFAJAJAEQAJAEAMAAQALAAAIgCQAHgDAGgEQAFgFADgIQADgHABgKIAtAAQgBARgHAOQgGAOgLAKQgLAKgQAGQgRAGgUAAQgWAAgQgIgAz6BQQgRgHgNgOQgNgOgGgUQgIgVAAgXIAAgKQAAgZAIgUQAGgVAMgOQANgOASgIQARgHAVAAQAVAAARAHQARAIANAOQAMAOAHAVQAHAUAAAZIAAAKQAAAXgHAVQgHAUgMAOQgMAOgSAHQgRAIgVAAQgVAAgRgIgAz4hSQgMASAAAjIAAAKQAAARADAMQADANAHAJQAGAJAJAFQAJAEALAAQAXAAAMgSQANgSAAghIAAgKQAAgjgNgSQgMgSgXAAQgXAAgNASgAZ0BVQgFgCgDgDQgDgDgCgFQgCgEAAgFQAAgFACgEIAFgHQADgDAFgCQAFgCAFAAQAGAAAEACQAFACADADIAFAHQACAEAAAFQAAAFgCAEQgCAFgDADQgDADgFACQgEACgGAAQgFAAgFgCgAXzBVIAFikIg8CkIggAAIg7ijIAFCjIguAAIAAjcIA7AAIA6CfIA4ifIA8AAIAADcgALMBVIAAjcIBXAAQAUAAAPAFQAPAGALAKQALAKAFANQAGAOAAAPQAAAQgGAOQgFAMgLAJQgLAKgPADQgPAFgUAAIgpAAIAABOgAL6gdIApAAQAKAAAHgCQAHgCAEgFQAFgEACgGQACgGAAgHQAAgHgCgHQgCgHgFgFQgEgFgHgDQgHgDgKAAIgpAAgAHABVIg5hZIgbAAIAABZIgtAAIAAjcIAtAAIAABZIAVAAIA2hZIA4AAIhEBpIBLBzgAiyBVIAAi3IhDAAIAAglIC1AAIAAAlIhEAAIAAC3gAmXBVIAAjcICVAAIAAAlIhnAAIAAA1IBYAAIAAAkIhYAAIAAA5IBnAAIAAAlgAwIBVIAAjcICRAAIAAAlIhjAAIAAArIAlAAQATAAAQAFQAPAFALAJQALAJAGANQAGANAAAOQAAAQgGANQgGANgLAKQgLAJgPAGQgQAFgTAAgAvaAwIAlAAQAJAAAHgDQAIgDAFgFQAEgEADgGQACgHAAgHQAAgHgCgGQgDgFgEgEQgFgEgIgDQgHgCgJAAIglAAgA23BVIAAi3IhDAAIAAglIC0AAIAAAlIhEAAIAAC3gA5CBVIAAhUIgiAEIgKAAQgUAAgQgEQgPgDgMgJQgLgJgGgNQgGgPAAgTIAAhEIAuAAIAABEQAAALACAIQADAGAFAEQAFAFAHACIASABIAKAAIAigEIAAhlIAuAAIAADcgAZqARIABgRQABgIADgHQADgHAEgGIAcgdIAFgJIACgKQAAgOgGgGQgGgGgMAAIgJACQgEABgEADQgEADgBAFQgDAFAAAHIgsAAQAAgQAFgMQAGgMAKgHQAJgIAMgDQANgEAOAAQAQAAANAEQAMAEAJAHQAJAIAFALQAEALAAAPQAAAKgDAIQgDAIgFAHIgMAOIgOANIgHAIIgFAIIgCAIIgBALg");
	this.shape.setTransform(183.4,14.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.1,0.8,346.8,28);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4698C9").s().p("AguBVIA/inIARAAIg/CngADsBJIgNgEIgNgHQgFgEgFgFQgEgGgCgGQgDgHAAgHIAWAAQAAAHACAGQADAGAGAEQAGADAGACQAHACAIAAQAQAAAJgGQAJgHAAgLQAAgGgCgEQgCgEgEgEQgFgDgGgDIgTgHIgVgFQgJgEgHgGQgGgGgEgGQgEgIABgJQAAgJADgIQAEgIAHgFQAHgGAKgDQAKgEAMAAQANAAAKAFQALAEAGAGQAHAGAFAJQADAIAAAKIgVAAQAAgGgCgHQgCgFgEgEQgFgEgGgDQgHgCgIAAQgIAAgHACQgGADgEACQgEAEgCAFQgCAEAAAGQAAAEACAFQADAEAEAEQAFADAGADIARAFQANAEAKAEQAKAFAGAEQAGAGADAHQADAHAAAKQAAAJgDAHQgFAJgHAFQgHAFgKADQgKADgMAAIgPgBgABaBHQgLgDgHgHQgIgGgEgKQgEgLgBgNIAAhnIAVAAIAABnQAAAKADAGQACAHAFAEQAEAFAIACQAGACAIAAQAIAAAHgCQAHgCAEgFQAFgEACgHQADgGAAgKIAAhnIAVAAIAABnQAAANgFALQgFAKgHAGQgIAHgKADQgLADgLAAQgMAAgKgDgAkWBHQgKgDgIgHQgIgGgDgKQgFgLAAgNIAAhnIAUAAIAABnQAAAKADAGQACAHAGAEQAEAFAHACQAHACAHAAQAJAAAGgCQAHgCAEgFQAFgEADgHQACgGAAgKIAAhnIAWAAIAABnQAAANgGALQgEAKgHAGQgJAHgKADQgKADgMAAQgLAAgLgDgAFMBIIAAiaIAsAAQAPgBANAGQAMAFAKAKQAJAJAFANQAFAPAAARIAAAIQAAAQgFANQgFAOgKAKQgIAJgNAFQgOAFgQAAgAFgA3IAWAAQAMAAAKgEQAJgEAHgIQAGgGADgLQAEgKgBgMIAAgJQABgOgEgKQgDgKgGgIQgHgHgJgDQgJgEgLgBIgYAAgAinBIIAAiaIA0AAQAMAAAJACQAKADAGAFQAHAFADAHQAEAJAAAKQAAALgHAIQgFAJgMAFQAIACAEADQAGADADADQADAGACAGQACAGAAAGQAAALgDAIQgFAIgGAHQgHAFgJADQgKADgMAAgAiRA3IAhAAQAHAAAHgCQAFgCAEgEQAEgDADgFQACgGAAgGQAAgGgCgFQgCgGgEgDQgDgEgGgCQgGgBgHAAIgjAAgAiRgQIAeAAQAHAAAFgBQAGgCAEgEQAEgDACgEQACgFAAgGQAAgMgHgHQgIgFgPgBIgeAAgAlgBIIgig/IglAAIAAA/IgVAAIAAiaIA0AAQAbAAAOAMQANAMAAAXQABAOgIALQgIAKgOAEIAkBDIAAABgAmngGIAfAAQAJAAAGgCQAHgDADgEQAFgDACgGQACgFAAgGQAAgHgCgGQgCgFgEgEQgFgEgGgCQgHgCgIgBIgfAAg");
	this.shape.setTransform(745.2,39.1);

	// Слой 1
	this.instance = new lib.binarium_logo_ru();

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,789.8,80);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Ah7B8Qg0gzAAhJQAAhIA0g0QAzg0BIABQBJgBA0A0QA0A0gBBIQABBJg0AzQg0A0hJAAQhIAAgzg0g");
	this.shape.setTransform(27.9,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,204,255,0.298)").s().p("AjDDEQhShRAAhzQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAABzhSBRQhRBShzAAQhyAAhRhSgAh7h8Qg0A0AABIQAABJA0AzQAzA0BIAAQBJAAA0g0QA0gzgBhJQABhIg0g0Qg0g0hJABQhIgBgzA0g");
	this.shape_1.setTransform(27.9,27.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,55.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFEBE1").s().p("Ap/JwIAAzfIT+AAIAATfg");
	this.shape.setTransform(64,62.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128,125);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.backgr_600x300();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(38,20.8,1,1,0,0,0,38,20.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.9,41.6);


(lib.Символ20 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ26();
	this.instance.setTransform(91.2,26.4,1,1,0,0,0,91.2,26.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ26(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 3
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(137.2,10.1,1,1,0,0,0,10.8,9.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:16.3,alpha:0.377},0).wait(1).to({y:19.6,alpha:0.576},0).wait(1).to({y:21.6,alpha:0.695},0).wait(1).to({y:23.2,alpha:0.796},0).wait(1).to({y:24.5,alpha:0.874},0).wait(1).to({y:25.5,alpha:0.931},0).wait(1).to({y:26.1,alpha:0.97},0).wait(1).to({y:26.5,alpha:0.993},0).wait(1).to({y:26.6,alpha:1},0).wait(1).to({y:20.9,alpha:0.652},0).wait(1).to({y:17.6,alpha:0.453},0).wait(1).to({y:15.7,alpha:0.339},0).wait(1).to({y:14.1,alpha:0.242},0).wait(1).to({y:12.8,alpha:0.162},0).wait(1).to({y:11.8,alpha:0.101},0).wait(1).to({y:11,alpha:0.055},0).wait(1).to({y:10.5,alpha:0.024},0).wait(1).to({y:10.2,alpha:0.006},0).wait(1).to({y:10.1,alpha:0},0).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(90.9,28,1,1,0,0,0,41,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:85.5},0).wait(1).to({x:82.6},0).wait(1).to({x:80.9},0).wait(1).to({x:79.4},0).wait(1).to({x:78.3},0).wait(1).to({x:77.5},0).wait(1).to({x:76.9},0).wait(1).to({x:76.6},0).wait(1).to({x:76.5},0).wait(1).to({x:81.5},0).wait(1).to({x:84.4},0).wait(1).to({x:86},0).wait(1).to({x:87.4},0).wait(1).to({x:88.6},0).wait(1).to({x:89.4},0).wait(1).to({x:90.1},0).wait(1).to({x:90.6},0).wait(1).to({x:90.8},0).wait(1).to({x:90.9},0).wait(1));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(91.2,25.7,1,1,0,0,0,91.2,25.7);
	this.instance_3.alpha = 0;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.25},9).to({alpha:0},10).wait(1));

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AtyEAQgdAAAAgdIAAnFQAAgdAdAAIblAAQAdAAAAAdIAAHFQAAAdgdAAg");
	this.shape.setTransform(91.2,25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AtyEAQgdAAAAgdIAAnGQAAgcAdAAIblAAQAdAAAAAcIAAHGQAAAdgdAAg");
	this.shape_1.setTransform(91.2,27.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,52.9);


(lib.Символ19 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ27();
	this.instance.setTransform(91.2,26.4,1,1,0,0,0,91.2,26.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ27(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 3
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(151.2,37.9,1,1,0,0,0,10.8,9.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:33.1,alpha:0.404},0).wait(1).to({y:30.3,alpha:0.634},0).wait(1).to({y:28.7,alpha:0.763},0).wait(1).to({y:27.8,alpha:0.846},0).wait(1).to({y:27.1,alpha:0.899},0).wait(1).to({y:26.7,alpha:0.936},0).wait(1).to({y:26.3,alpha:0.963},0).wait(1).to({y:26.1,alpha:0.984},0).wait(1).to({y:25.9,alpha:1},0).wait(1).to({y:30.3,alpha:0.63},0).wait(1).to({y:33.1,alpha:0.4},0).wait(1).to({y:34.7,alpha:0.271},0).wait(1).to({y:35.7,alpha:0.182},0).wait(1).to({y:36.4,alpha:0.125},0).wait(1).to({y:36.9,alpha:0.085},0).wait(1).to({y:37.2,alpha:0.055},0).wait(1).to({y:37.5,alpha:0.032},0).wait(1).to({y:37.7,alpha:0.015},0).wait(1).to({y:37.9,alpha:0},0).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(92.4,25.8,1,1,0,0,0,54.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:84.5},0).wait(1).to({x:80},0).wait(1).to({x:77.5},0).wait(1).to({x:75.9},0).wait(1).to({x:74.8},0).wait(1).to({x:74.1},0).wait(1).to({x:73.6},0).wait(1).to({x:73.2},0).wait(1).to({x:72.9},0).wait(1).to({x:80.1},0).wait(1).to({x:84.6},0).wait(1).to({x:87.1},0).wait(1).to({x:88.8},0).wait(1).to({x:89.9},0).wait(1).to({x:90.7},0).wait(1).to({x:91.3},0).wait(1).to({x:91.7},0).wait(1).to({x:92.1},0).wait(1).to({x:92.4},0).wait(1));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(91.2,25.7,1,1,0,0,0,91.2,25.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0.25},9).to({alpha:0},10).wait(1));

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AtyEAQgdAAAAgdIAAnFQAAgdAdAAIblAAQAdAAAAAdIAAHFQAAAdgdAAg");
	this.shape.setTransform(91.2,25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AtyEAQgdAAAAgcIAAnGQAAgdAdAAIblAAQAdAAAAAdIAAHGQAAAcgdAAg");
	this.shape_1.setTransform(91.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,52.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(187.2,18.6,1,1,0,0,0,183.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,y:18.7},6,cjs.Ease.get(-1)).to({scaleX:0.9,scaleY:0.9,y:18.6},6,cjs.Ease.get(1)).to({scaleX:0.95,scaleY:0.95},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg9tAFVQgvAAAAgeIAAptQAAgeAvAAMB7bAAAQAvAAAAAeIAAJtQAAAegvAAg");
	this.shape.setTransform(190.7,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-17.7,799.5,68.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHBOIAAh2IglAMIAAgaIBBgXIADAAIAACbgAhUBOIA9iCIhOAAIAAgZIBsAAIAAASIg6CJg");
	this.shape.setTransform(25.3,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALBPIAAgWIA8g/IAGgJIAEgIIABgHQAAgLgFgGQgGgGgJAAQgGAAgEACQgEACgDAEQgDADgCAFQgBAFAAAGIgfAAQAAgLAEgJQADgKAHgHQAHgHALgEQAKgEAMAAQAMAAAKADQAJADAHAGQAGAGAEAIQADAIAAALQAAAHgCAIQgDAHgEAHQgFAGgGAHIgqAtIBDAAIAAAZgAhkBPIA9iCIhOAAIAAgZIBuAAIAAASIg8CJg");
	this.shape_1.setTransform(26.9,25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBNQgJgCgIgGQgHgGgFgIQgEgJgBgLIAgAAQAAAEABAEQACAEADACIAHAEQAFACAEAAQAGAAAEgCQAEgBADgDIAGgHQABgEAAgFQAAgGgCgEQgBgFgEgCQgEgDgEgCIgLgBIgRAAIAAgWIARAAQAMAAAGgGQAGgGAAgKQAAgEgCgEQgBgEgDgCIgHgEQgDgCgGAAQgEAAgEACIgGADQgEACgBAEQgCADABAEIggAAQABgKAEgIQAEgIAGgFQAHgGAKgDQAJgDAKAAQAMAAAKADQAKADAHAGQAHAFAEAJQADAIABALIgCAKQgBAFgEAEIgHAIIgKAGQANADAHAKQAGAJAAANQAAALgEAIQgEAJgIAGQgIAGgJADQgKADgNAAQgKAAgJgDgAhjBOIA9iCIhOAAIAAgZIBuAAIAAASIg8CJg");
	this.shape_2.setTransform(26.8,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABHBOIAAgiIhAAAIgCgUIBBhlIAgAAIAABgIARAAIAAAZIgRAAIAAAigAAkATIAjAAIAAg1gAhlBOIA9iCIhOAAIAAgZIBuAAIAAASIg8CJg");
	this.shape_3.setTransform(27,25.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAtBMQgJgDgHgGQgIgGgEgIQgFgJAAgLIAfAAQABAKAGAFQAFAGAKAAQAGAAAEgCQAEgDADgEQACgDACgGIABgLQAAgGgCgFQgBgFgDgEQgDgEgFgBQgFgBgGAAIgIABIgFAAIgFADIgDADIgZgGIAJhOIBYAAIAAAaIg/AAIgDAiIAJgEIAOgCQALAAAJAEQAJADAGAHQAGAHAEAHQADAKAAANQAAAKgDAJQgEAKgGAHQgHAHgKAFQgKAEgNAAQgKAAgKgDgAhkBNIA9iCIhOAAIAAgZIBvAAIAAASIg9CJg");
	this.shape_4.setTransform(26.8,25.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBMQgKgEgHgIQgHgIgEgNQgEgMAAgSIAAgZQAAgSAEgMQAEgNAHgIQAHgIAKgEQAJgEAMAAQAMAAAKAEQAJAEAHAIQAHAIAEANQAEAMAAASIAAAZQAAASgEAMQgDANgHAIQgHAIgKAEQgKAEgMAAQgLAAgKgEgAA3g0QgEACgDAFQgDAEgBAHQgBAHAAALIAAAhQAAALABAHQACAHACAFQADAEAEACQAEACAFAAQAGAAAEgCQAEgCADgEQACgFACgHQABgHAAgLIAAghQAAgLgBgHQgCgHgDgEQgCgFgFgCQgEgCgFAAQgFAAgEACgAhjBOIA9iCIhOAAIAAgZIBuAAIAAASIg8CJg");
	this.shape_5.setTransform(26.8,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBLQgKgEgHgIQgHgJgEgLQgFgMAAgNIAAgMQABgRAFgQQAGgQAJgLQALgMAOgGQAQgGASAAIAFAAIAAAZIgCAAQgLAAgJADQgJADgGAFQgGAGgFAHQgDAIgBAJQAFgGAIgDQAIgEAKAAQALAAAIAEQAIAFAHAHQAFAHADAIQACAJAAALQAAAMgDAJQgEAKgHAHQgHAIgJAEQgKAEgMAAQgMAAgLgFgAhDAAIgGACIgGAFIgDAFIAAAKQAAAIACAGQABAHADAEQAEAEAEACQAEACAFAAQAFAAAEgCQAFgCADgEQACgEACgFQACgFAAgGQAAgHgCgFQgCgFgCgEQgDgEgFgCQgEAAgGAAgAAhBPIAAgaIACAAQAMAAAIgCQAJgDAGgFQAGgEADgHQADgIABgJQgGAGgGADQgIADgIAAQgLAAgIgEQgKgEgFgHQgGgHgDgIQgDgJAAgLQAAgMAEgKQADgKAIgHQAGgIAKgEQAKgFAMAAQAMAAAJAFQALAEAGAJQAHAIAEAMQAEAMAAAOIAAALQAAARgFAQQgFAQgKALQgKALgPAGQgPAGgUAAgAA1gzQgFACgCAEQgDAFgBAFQgCAFAAAGQAAAGACAFQABAGADAEQACADAFABQAEACAGAAQAHAAAFgDQAGgCACgGIAAgNQABgIgCgGQgCgGgCgFQgEgEgDgCQgFgCgEAAQgGAAgDADg");
	this.shape_6.setTransform(26.9,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApBNQgJgDgHgFQgHgGgEgJQgFgIAAgLQAAgNAHgKQAHgJALgEQgKgFgGgJQgFgJAAgLQAAgLAEgIQADgIAHgGQAGgFAJgDQAJgDALAAQALAAAJADQAJADAHAFQAHAGADAIQAEAIAAALQAAALgGAJQgGAJgKAFQAMAEAGAJQAHAKAAANQAAALgEAIQgEAJgHAGQgHAFgKADQgJADgMAAQgLAAgKgDgAA1AMQgEABgCADQgDADgCAEQgBAEAAAGQAAAFABAEQACAEADADQACADAEABQAEACAFAAQALAAAFgGQAGgGAAgKQAAgGgBgEIgFgHQgDgDgEgBQgEgCgFAAQgFAAgEACgAAxgwQgFAFAAAJQAAAKAFAFQAFAGAIAAQAJAAAFgGQAFgFAAgKQAAgJgFgFQgFgGgJAAQgIAAgFAGgAhSBLQgKgEgHgIQgHgJgEgLQgEgMAAgNIAAgMQAAgRAFgQQAGgQAKgLQAKgMAPgGQAPgGATAAIAEAAIAAAZIgCAAQgLAAgJADQgIADgHAFQgGAGgEAHQgEAIgBAJQAFgGAIgDQAIgEAKAAQALAAAJAEQAIAFAGAHQAFAHADAIQADAJAAALQAAAMgEAJQgEAKgHAHQgGAIgKAEQgKAEgMAAQgMAAgLgFgAhEAAIgGACIgFAFIgEAFIAAAKQAAAIACAGQABAHAEAEQADAEAEACQAEACAFAAQAGAAAEgCQAEgCADgEQADgEABgFQACgFAAgGQAAgHgCgFQgBgFgDgEQgDgEgFgCQgEAAgFAAg");
	this.shape_7.setTransform(27,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhSBLQgKgFgHgHQgIgJgEgMQgEgLAAgNIAAgNQAAgQAGgRQAFgPAKgMQALgLAOgGQAPgGATAAIAFAAIAAAZIgCAAQgLAAgJADQgJADgGAFQgHAGgEAHQgEAHgBAJQAGgFAIgEQAIgDAKAAQALAAAIAEQAIAFAGAGQAGAIACAHQADAKAAALQAAAMgDAJQgEAKgHAHQgHAIgKADQgJAEgMABQgNAAgKgFgAhEAAIgHACIgFAEIgDAGIAAAJQAAAJABAGQACAHADAEQADADAFADQAEACAFAAQAFAAAEgCQAEgDADgDQADgEACgFQABgFAAgGQAAgHgBgFQgCgGgDgDQgDgEgEgCQgEAAgGAAgAAWBNIA9iBIhOAAIAAgZIBvAAIAAASIg9CIg");
	this.shape_8.setTransform(27,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AApBLQgKgFgHgHQgHgJgEgMQgFgLAAgNIAAgNQABgQAFgRQAGgPAJgMQALgLAOgGQAQgGATAAIAEAAIAAAZIgCAAQgLAAgJADQgJADgGAFQgGAGgFAHQgDAHgBAJQAFgFAIgEQAIgDAKAAQALAAAIAEQAIAFAHAGQAFAIADAHQACAKAAALQAAAMgDAJQgEAKgHAHQgHAIgJADQgKAEgMABQgMAAgLgFgAA3AAIgGACIgFAEIgEAGIAAAJQAAAJACAGQABAHADAEQAEADAEADQAEACAFAAQAFAAAEgCQAFgDACgDQADgEACgFQACgFAAgGQAAgHgCgFQgCgGgDgDQgCgEgFgCQgEAAgGAAgAhTBLQgKgFgHgHQgHgJgEgMQgFgLAAgNIAAgNQABgQAFgRQAGgPAJgMQALgLAOgGQAQgGASAAIAFAAIAAAZIgCAAQgLAAgJADQgJADgGAFQgGAGgFAHQgDAHgBAJQAFgFAIgEQAIgDAKAAQALAAAIAEQAIAFAHAGQAFAIADAHQACAKAAALQAAAMgDAJQgEAKgHAHQgHAIgJADQgKAEgMABQgMAAgLgFgAhFAAIgGACIgGAEIgDAGIAAAJQAAAJACAGQABAHADAEQAEADAEADQAEACAFAAQAFAAAEgCQAFgDADgDQACgEACgFQACgFAAgGQAAgHgCgFQgCgGgCgDQgDgEgFgCQgEAAgGAAg");
	this.shape_9.setTransform(27.1,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBMQgJgCgHgHQgIgFgEgIQgFgJAAgLIAfAAQABAKAGAFQAFAFAKABQAGAAAEgCQAEgDADgEQACgDACgGIABgLQAAgGgCgGQgBgEgDgFQgDgDgFgCQgFAAgGAAIgIAAIgFABIgFACIgDADIgZgFIAJhOIBYAAIAAAaIg/AAIgDAiIAJgEIAOgCQALAAAJADQAJAEAGAGQAGAIAEAHQADAKAAANQAAAKgDAJQgEAKgGAHQgHAHgKAEQgKAEgNABQgKgBgKgDgAhSBLQgKgFgHgHQgIgJgEgMQgEgLAAgNIAAgNQAAgQAGgRQAFgPAKgMQALgLAOgGQAPgGATAAIAFAAIAAAZIgCAAQgLAAgJADQgJADgGAFQgHAGgEAHQgEAHgBAJQAGgFAIgEQAIgDAKAAQALAAAIAEQAIAFAGAGQAGAIACAHQADAKAAALQAAAMgDAJQgEAKgHAHQgHAIgKADQgJAEgMABQgNAAgKgFgAhEAAIgHACIgFAEIgDAGIAAAJQAAAJABAGQACAHADAEQADADAFADQAEACAFAAQAFAAAEgCQAEgDADgDQADgEACgFQABgFAAgGQAAgHgBgFQgCgGgDgDQgDgEgEgCQgEAAgGAAg");
	this.shape_10.setTransform(27,25.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AArBLQgKgFgHgHQgIgJgEgMQgDgLAAgNIAAgNQgBgQAGgRQAFgPAKgMQALgLAPgGQAOgGAUAAIAEAAIAAAZIgCAAQgLAAgJADQgJADgGAFQgGAGgEAHQgFAHgBAJQAGgFAIgEQAIgDAKAAQALAAAJAEQAHAFAGAGQAGAIACAHQAEAKAAALQAAAMgEAJQgEAKgHAHQgHAIgKADQgJAEgMABQgMAAgLgFgAA5AAIgHACIgEAEIgEAGIAAAJQAAAJABAGQACAHAEAEQADADAEADQAEACAFAAQAFAAAFgCQADgDAEgDQACgEACgFQACgFgBgGQABgHgCgFQgCgGgCgDQgDgEgFgCQgEAAgFAAgAhlBNIA+iBIhPAAIAAgZIBvAAIAAASIg8CIg");
	this.shape_11.setTransform(27,25.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYBOIA9iCIhOAAIAAgZIBvAAIAAASIg9CJgAhkBOIA9iCIhOAAIAAgZIBvAAIAAASIg9CJg");
	this.shape_12.setTransform(26.9,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AArBNQgJgDgHgFQgHgGgEgJQgFgIAAgLQAAgNAHgKQAHgJALgEQgKgFgGgJQgFgJAAgLQAAgLAEgIQADgIAHgGQAGgFAJgDQAJgDALAAQALAAAJADQAJADAHAFQAHAGADAIQAEAIAAALQAAALgGAJQgGAJgKAFQAMAEAGAJQAHAKAAANQAAALgEAIQgEAJgHAGQgHAFgKADQgJADgMAAQgLAAgKgDgAA3AMQgEABgCADQgDADgCAEQgBAEAAAGQAAAFABAEQACAEADADQACADAEABQAEACAFAAQALAAAFgGQAGgGAAgKQAAgGgBgEIgFgHQgDgDgEgBQgEgCgFAAQgFAAgEACgAAzgwQgFAFAAAJQAAAKAFAFQAFAGAIAAQAJAAAFgGQAFgFAAgKQAAgJgFgFQgFgGgJAAQgIAAgFAGgAhjBOIA9iCIhOAAIAAgZIBuAAIAAASIg8CJg");
	this.shape_13.setTransform(26.8,25.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAiBQIAAgbIACAAQAMABAJgDQAJgDAGgFQAGgEADgHQAEgHABgJQgHAFgHADQgHAEgIgBQgLAAgJgDQgIgFgGgGQgGgIgDgHQgDgKAAgLQAAgLAEgLQAEgKAGgHQAIgHAJgFQAJgEANgBQAMABAKAEQAKAFAHAIQAGAJAEALQAEAMgBAOIAAALQABARgFAQQgFAQgKALQgKAMgPAFQgPAHgUAAgAA2gzQgEADgCADQgDAFgCAFQgBAFAAAGQAAAHABAFQACAFADAEQACADAEABQAFACAFABQAIAAAGgEQAFgCADgGIAAgMQgBgJgBgGQgCgGgDgEQgCgEgFgDQgDgCgGAAQgEABgFACgAhjBOIA+iCIhPAAIAAgZIBvAAIAAASIg8CJg");
	this.shape_14.setTransform(26.8,25.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AApBMQgKgEgGgIQgIgIgDgNQgFgMAAgSIAAgZQAAgSAFgMQADgNAIgIQAGgIAKgEQAKgEALAAQAMAAAKAEQAKAEAGAIQAIAIADANQAFAMAAASIAAAZQAAASgFAMQgDANgHAIQgHAIgKAEQgJAEgNAAQgLAAgKgEgAA1g0QgEACgDAFQgCAEgBAHQgCAHAAALIAAAhQAAALACAHQABAHACAFQADAEAEACQAFACAEAAQAGAAAEgCQAEgCADgEQADgFABgHQABgHAAgLIAAghQAAgLgBgHQgBgHgDgEQgDgFgEgCQgFgCgFAAQgEAAgFACgAhSBNQgKgDgHgFQgHgGgEgJQgEgIgBgLQAAgNAIgKQAGgJAMgEQgKgFgHgJQgFgJAAgLQAAgLAEgIQAEgIAGgGQAGgFAKgDQAIgDALAAQAMAAAIADQAKADAGAFQAHAGADAIQAEAIAAALQAAALgFAJQgHAJgKAFQAMAEAGAJQAIAKAAANQAAALgFAIQgDAJgIAGQgGAFgLADQgJADgMAAQgLAAgJgDgAhHAMQgDABgDADQgDADgBAEQgCAEAAAGQAAAFACAEQABAEADADQADADADABQAFACAEAAQALAAAGgGQAFgGAAgKQAAgGgBgEIgEgHQgDgDgEgBQgFgCgFAAQgEAAgFACgAhLgwQgFAFAAAJQAAAKAFAFQAFAGAIAAQAJAAAGgGQAEgFAAgKQAAgJgFgFQgEgGgKAAQgIAAgFAGg");
	this.shape_15.setTransform(27,25.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBNQgKgDgHgFQgHgGgEgJQgEgIgBgLQAAgNAIgKQAGgJAMgEQgKgFgHgJQgFgJAAgLQAAgLAEgIQAEgIAGgGQAGgFAKgDQAIgDALAAQAMAAAIADQAKADAGAFQAHAGADAIQACAIAAALQAAALgDAJQgHAJgKAFQAMAEAGAJQAGAKAAANQAAALgFAIQgBAJgIAGQgGAFgLADQgJADgMAAQgLAAgJgDgAg4AMQgDABgDADQgDADgBAEQgCAEAAAGQAAAFACAEQABAEADADQADADADABQAFACAEAAQALAAAGgGQAFgGAAgKQAAgGgBgEIgEgHQgDgDgEgBQgFgCgFAAQgEAAgFACgAg8gwQgFAFAAAJQAAAKAFAFQAFAGAIAAQAJAAAGgGQAEgFAAgKQAAgJgFgFQgEgGgKAAQgIAAgFAGgABFBOIAAh2IglAMIAAgaIBBgXIAEAAIAACbg");
	this.shape_16.setTransform(25.5,25.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhTBNQgKgDgHgFQgHgGgEgJQgEgIgBgLQAAgNAIgKQAGgJAMgEQgKgFgHgJQgFgJAAgLQAAgLAEgIQAEgIAGgGQAGgFAKgDQAIgDALAAQAMAAAIADQAKADAGAFQAHAGADAIQAEAIAAALQAAALgFAJQgHAJgKAFQAMAEAGAJQAIAKAAANQAAALgFAIQgDAJgIAGQgGAFgLADQgJADgMAAQgLAAgJgDgAhIAMQgDABgDADQgDADgBAEQgCAEAAAGQAAAFACAEQABAEADADQADADADABQAFACAEAAQALAAAGgGQAFgGAAgKQAAgGgBgEIgEgHQgDgDgEgBQgFgCgFAAQgEAAgFACgAhMgwQgFAFAAAJQAAAKAFAFQAFAGAIAAQAJAAAGgGQAEgFAAgKQAAgJgFgFQgEgGgKAAQgIAAgFAGgAAJBOIAAgWIA9g/IAGgJIADgIIABgHQAAgLgFgGQgFgGgKAAQgFAAgFACQgEACgDAEQgDADgCAFQgBAFAAAGIgfAAQAAgLAEgJQAEgKAGgHQAIgHAKgEQAKgEANAAQAMAAAJADQAJADAHAGQAGAGAEAIQAEAIAAALQAAAHgDAIQgDAHgEAHQgFAGgGAHIgqAtIBDAAIAAAZg");
	this.shape_17.setTransform(27.1,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAoBNQgJgCgIgGQgHgGgFgIQgEgJAAgLIAfAAQAAAEABAEQACAEADACIAHAEQAFACAFAAQAFAAAEgCQAFgBADgDIAFgHQABgEAAgFQAAgGgCgEQgBgFgEgCQgDgDgFgCIgKgBIgRAAIAAgWIARAAQALAAAGgGQAGgGAAgKQAAgEgCgEQgBgEgCgCIgHgEQgEgCgFAAQgFAAgEACIgGADQgDACgCAEQgBADAAAEIgfAAQAAgKAEgIQAEgIAHgFQAGgGAKgDQAJgDALAAQAMAAAJADQAKADAHAGQAHAFAEAJQAEAIAAALIgCAKQgBAFgDAEIgIAIIgKAGQANADAHAKQAGAJAAANQAAALgEAIQgEAJgIAGQgHAGgKADQgKADgMAAQgKAAgKgDgAhSBNQgKgDgHgFQgHgGgEgJQgEgIAAgLQAAgNAHgKQAGgJAMgEQgKgFgGgJQgGgJAAgLQAAgLAEgIQAEgIAGgGQAHgFAJgDQAJgDALAAQALAAAJADQAJADAGAFQAHAGAEAIQADAIAAALQAAALgFAJQgGAJgKAFQALAEAHAJQAHAKAAANQAAALgEAIQgEAJgHAGQgHAFgKADQgKADgLAAQgLAAgKgDgAhGAMQgEABgDADQgDADgBAEQgCAEAAAGQAAAFACAEQABAEADADQADADAEABQAEACAFAAQAKAAAGgGQAGgGAAgKQAAgGgCgEIgEgHQgDgDgEgBQgEgCgFAAQgFAAgEACgAhLgwQgFAFAAAJQAAAKAFAFQAFAGAJAAQAJAAAFgGQAEgFAAgKQAAgJgFgFQgEgGgJAAQgJAAgFAGg");
	this.shape_18.setTransform(27,25.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhUBNQgKgDgHgFQgHgGgEgJQgEgIgBgLQAAgNAIgKQAGgJAMgEQgKgFgHgJQgFgJAAgLQAAgLAEgIQAEgIAGgGQAGgFAKgDQAIgDALAAQAMAAAIADQAKADAGAFQAHAGADAIQAEAIAAALQAAALgFAJQgHAJgKAFQAMAEAGAJQAIAKAAANQAAALgFAIQgDAJgIAGQgGAFgLADQgJADgMAAQgLAAgJgDgAhJAMQgDABgDADQgDADgBAEQgCAEAAAGQAAAFACAEQABAEADADQADADADABQAFACAEAAQALAAAGgGQAFgGAAgKQAAgGgBgEIgEgHQgDgDgEgBQgFgCgFAAQgEAAgFACgAhNgwQgFAFAAAJQAAAKAFAFQAFAGAIAAQAJAAAGgGQAEgFAAgKQAAgJgFgFQgEgGgKAAQgIAAgFAGgABFBOIAAgiIhAAAIgBgUIBBhlIAfAAIAABgIARAAIAAAZIgRAAIAAAigAAiATIAjAAIAAg1g");
	this.shape_19.setTransform(27.2,25.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AArBNQgJgDgHgGQgHgGgFgIQgFgJABgLIAeAAQABAKAGAFQAFAGAKAAQAGAAAEgCQAFgDACgEQACgDACgGIABgLQAAgGgBgFQgCgFgDgEQgDgEgFgCQgFAAgGAAIgIAAIgFABIgFADIgDADIgZgGIAJhOIBYAAIAAAaIg+AAIgEAiIAKgEIANgCQAMAAAIAEQAKADAFAHQAGAHAEAHQADAKAAANQAAAKgDAJQgEAKgGAHQgHAHgKAFQgKAEgNAAQgKAAgKgDgAhTBNQgJgDgIgFQgHgGgEgJQgEgIAAgLQAAgNAHgKQAGgJAMgEQgKgFgGgJQgFgJgBgLQAAgLAEgIQAEgIAHgGQAGgFAJgDQAJgDALAAQALAAAJADQAJADAGAFQAIAGADAIQADAIAAALQAAALgFAJQgGAJgKAFQAMAEAGAJQAHAKAAANQAAALgEAIQgEAJgHAGQgHAFgKADQgJADgMAAQgLAAgKgDgAhHAMQgEABgCADQgDADgCAEQgBAEgBAGQABAFABAEQACAEADADQACADAEABQAEACAFAAQAKAAAGgGQAGgGAAgKQAAgGgBgEIgFgHQgDgDgEgBQgEgCgFAAQgFAAgEACgAhLgwQgFAFgBAJQABAKAFAFQAEAGAJAAQAJAAAFgGQAFgFAAgKQgBgJgFgFQgEgGgJAAQgJAAgEAGg");
	this.shape_20.setTransform(27.1,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:25.3}}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_3}]},14).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape,p:{x:25.6}}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_9}]},13).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape,p:{x:25.6}}]},18).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_11}]},14).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},16).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_19}]},17).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_3}]},16).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape,p:{x:25.3}}]},2).wait(16));

	// Слой 4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYBUQgGgCgFgFQgFgFgDgGQgCgHAAgHIAAgJQAAgHACgHQADgGAFgFQAFgFAGgCQAHgDAJAAQAJAAAIADQAGACAFAFQAFAFACAGQACAHAAAHIAAAJQAAAHgCAHQgCAGgFAFQgFAFgGACQgHADgJAAQgJAAgIgDgAAiAdIgEADIgEAFIgBAGIAAAJIACAGIADAFIAEADQADACAEAAQADAAAEgCIAEgDIACgFIABgGIAAgJIgBgGIgDgFIgEgDQgDgCgEAAQgDAAgDACgAgxA/IBRiDIARAJIhRCDgAg3gKQgHgDgFgEQgEgFgDgGQgCgHAAgHIAAgJQAAgHACgHQADgGAEgFQAFgFAGgDQAIgCAJAAQAIAAAIACQAHADAFAFQAEAFADAGQACAHAAAHIAAAJQAAAHgCAHQgDAGgEAFQgFAEgHADQgHADgJAAQgJAAgHgDgAguhBIgEADIgDAFIgBAGIAAAJIABAGIADAFIAEADQADACAEAAQAEAAACgCIAFgDIACgFIABgGIgBgPIgCgFIgFgDQgCgCgEAAQgEAAgDACg");
	this.shape_21.setTransform(53,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(206));

	// Слой 3 - копия
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().rr(-42.15,-25.9,84.3,51.8,2.9);
	this.shape_22.setTransform(37.2,25.9,0.883,0.774);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(206));

	// Слой 3
	this.instance = new lib.Символ33();
	this.instance.setTransform(37.3,25.9,1,1,0,0,0,38,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,5.1,75.9,41.6);


(lib.Символ6копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(309.9,101.2,0.5,0.5,0,0,0,27.9,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[310,101.3,321.6,109.2,333.2,117.2,376.7,61.2,420.2,5.2,471.7,109.1,523.2,213.1,582.4,152.2,641.5,91.4,684.4,117.7,727.3,144,814.8,91.1,902.3,38.2,930.8,130.6,959.3,223.1,1061.3,116.6,1163.2,10.2,1190.7,100.1,1218.2,190,1247.2,149.1,1276.2,108.2,1319.2,144.6,1362.2,181,1413.3,110.6,1464.3,40.2,1524.8,130.6,1585.3,221.1,1617.8,110.6,1650.3,0.2,1683.8,120.6,1717.3,241.1,1792.2,185.5,1867.1,130,1919.1,161,1971.1,192,2023.7,112.1,2076.2,32.2,2126.4,66.6,2176.5,101]}},309).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A5Tb0MAAAg3nMAynAAAMAAAA3ng");
	var mask_graphics_1 = new cjs.Graphics().p("A55b0MAAAg3nMAzzAAAMAAAA3ng");
	var mask_graphics_2 = new cjs.Graphics().p("A6gb0MAAAg3nMA1BAAAMAAAA3ng");
	var mask_graphics_3 = new cjs.Graphics().p("A7Gb0MAAAg3nMA2NAAAMAAAA3ng");
	var mask_graphics_4 = new cjs.Graphics().p("A7nb0MAAAg3nMA3PAAAMAAAA3ng");
	var mask_graphics_5 = new cjs.Graphics().p("A8Ib0MAAAg3nMA4RAAAMAAAA3ng");
	var mask_graphics_6 = new cjs.Graphics().p("A8pb0MAAAg3nMA5TAAAMAAAA3ng");
	var mask_graphics_7 = new cjs.Graphics().p("A9Kb0MAAAg3nMA6VAAAMAAAA3ng");
	var mask_graphics_8 = new cjs.Graphics().p("A9sb0MAAAg3nMA7ZAAAMAAAA3ng");
	var mask_graphics_9 = new cjs.Graphics().p("A+Nb0MAAAg3nMA8bAAAMAAAA3ng");
	var mask_graphics_10 = new cjs.Graphics().p("A+ub0MAAAg3nMA9dAAAMAAAA3ng");
	var mask_graphics_11 = new cjs.Graphics().p("A/Pb0MAAAg3nMA+fAAAMAAAA3ng");
	var mask_graphics_12 = new cjs.Graphics().p("A/wb0MAAAg3nMA/hAAAMAAAA3ng");
	var mask_graphics_13 = new cjs.Graphics().p("EggSAb0MAAAg3nMBAlAAAMAAAA3ng");
	var mask_graphics_14 = new cjs.Graphics().p("EggzAb0MAAAg3nMBBnAAAMAAAA3ng");
	var mask_graphics_15 = new cjs.Graphics().p("EghUAb0MAAAg3nMBCpAAAMAAAA3ng");
	var mask_graphics_16 = new cjs.Graphics().p("Egh1Ab0MAAAg3nMBDrAAAMAAAA3ng");
	var mask_graphics_17 = new cjs.Graphics().p("EgiNAb0MAAAg3nMBEbAAAMAAAA3ng");
	var mask_graphics_18 = new cjs.Graphics().p("EgikAb0MAAAg3nMBFJAAAMAAAA3ng");
	var mask_graphics_19 = new cjs.Graphics().p("Egi8Ab0MAAAg3nMBF5AAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EgjUAb0MAAAg3nMBGpAAAMAAAA3ng");
	var mask_graphics_21 = new cjs.Graphics().p("EgjrAb0MAAAg3nMBHXAAAMAAAA3ng");
	var mask_graphics_22 = new cjs.Graphics().p("EgkDAb0MAAAg3nMBIHAAAMAAAA3ng");
	var mask_graphics_23 = new cjs.Graphics().p("EgkaAb0MAAAg3nMBI1AAAMAAAA3ng");
	var mask_graphics_24 = new cjs.Graphics().p("EgkyAb0MAAAg3nMBJlAAAMAAAA3ng");
	var mask_graphics_25 = new cjs.Graphics().p("EglJAb0MAAAg3nMBKTAAAMAAAA3ng");
	var mask_graphics_26 = new cjs.Graphics().p("EglhAb0MAAAg3nMBLDAAAMAAAA3ng");
	var mask_graphics_27 = new cjs.Graphics().p("Egl5Ab0MAAAg3nMBLzAAAMAAAA3ng");
	var mask_graphics_28 = new cjs.Graphics().p("EgmQAb0MAAAg3nMBMhAAAMAAAA3ng");
	var mask_graphics_29 = new cjs.Graphics().p("EgmoAb0MAAAg3nMBNRAAAMAAAA3ng");
	var mask_graphics_30 = new cjs.Graphics().p("Egm/Ab0MAAAg3nMBN/AAAMAAAA3ng");
	var mask_graphics_31 = new cjs.Graphics().p("EgnXAb0MAAAg3nMBOvAAAMAAAA3ng");
	var mask_graphics_32 = new cjs.Graphics().p("EgnvAb0MAAAg3nMBPfAAAMAAAA3ng");
	var mask_graphics_33 = new cjs.Graphics().p("EgoGAb0MAAAg3nMBQNAAAMAAAA3ng");
	var mask_graphics_34 = new cjs.Graphics().p("EgoeAb0MAAAg3nMBQ9AAAMAAAA3ng");
	var mask_graphics_35 = new cjs.Graphics().p("Ego1Ab0MAAAg3nMBRrAAAMAAAA3ng");
	var mask_graphics_36 = new cjs.Graphics().p("EgpNAb0MAAAg3nMBSbAAAMAAAA3ng");
	var mask_graphics_37 = new cjs.Graphics().p("EgplAb0MAAAg3nMBTLAAAMAAAA3ng");
	var mask_graphics_38 = new cjs.Graphics().p("Egp8Ab0MAAAg3nMBT5AAAMAAAA3ng");
	var mask_graphics_39 = new cjs.Graphics().p("EgqhAb0MAAAg3nMBVDAAAMAAAA3ng");
	var mask_graphics_40 = new cjs.Graphics().p("EgrGAb0MAAAg3nMBWNAAAMAAAA3ng");
	var mask_graphics_41 = new cjs.Graphics().p("EgrrAb0MAAAg3nMBXXAAAMAAAA3ng");
	var mask_graphics_42 = new cjs.Graphics().p("EgsQAb0MAAAg3nMBYhAAAMAAAA3ng");
	var mask_graphics_43 = new cjs.Graphics().p("Egs1Ab0MAAAg3nMBZrAAAMAAAA3ng");
	var mask_graphics_44 = new cjs.Graphics().p("EgtaAb0MAAAg3nMBa1AAAMAAAA3ng");
	var mask_graphics_45 = new cjs.Graphics().p("Egt/Ab0MAAAg3nMBb/AAAMAAAA3ng");
	var mask_graphics_46 = new cjs.Graphics().p("EgukAb0MAAAg3nMBdJAAAMAAAA3ng");
	var mask_graphics_47 = new cjs.Graphics().p("EgvIAb0MAAAg3nMBeRAAAMAAAA3ng");
	var mask_graphics_48 = new cjs.Graphics().p("EgvtAb0MAAAg3nMBfbAAAMAAAA3ng");
	var mask_graphics_49 = new cjs.Graphics().p("EgwSAb0MAAAg3nMBglAAAMAAAA3ng");
	var mask_graphics_50 = new cjs.Graphics().p("Egw3Ab0MAAAg3nMBhvAAAMAAAA3ng");
	var mask_graphics_51 = new cjs.Graphics().p("EgxcAb0MAAAg3nMBi5AAAMAAAA3ng");
	var mask_graphics_52 = new cjs.Graphics().p("EgyBAb0MAAAg3nMBkDAAAMAAAA3ng");
	var mask_graphics_53 = new cjs.Graphics().p("EgymAb0MAAAg3nMBlNAAAMAAAA3ng");
	var mask_graphics_54 = new cjs.Graphics().p("EgzLAb0MAAAg3nMBmXAAAMAAAA3ng");
	var mask_graphics_55 = new cjs.Graphics().p("Egz3Ab0MAAAg3nMBnvAAAMAAAA3ng");
	var mask_graphics_56 = new cjs.Graphics().p("Eg0iAb0MAAAg3nMBpFAAAMAAAA3ng");
	var mask_graphics_57 = new cjs.Graphics().p("Eg1OAb0MAAAg3nMBqdAAAMAAAA3ng");
	var mask_graphics_58 = new cjs.Graphics().p("Eg16Ab0MAAAg3nMBr1AAAMAAAA3ng");
	var mask_graphics_59 = new cjs.Graphics().p("Eg2lAb0MAAAg3nMBtLAAAMAAAA3ng");
	var mask_graphics_60 = new cjs.Graphics().p("Eg3RAb0MAAAg3nMBujAAAMAAAA3ng");
	var mask_graphics_61 = new cjs.Graphics().p("Eg39Ab0MAAAg3nMBv7AAAMAAAA3ng");
	var mask_graphics_62 = new cjs.Graphics().p("Eg4pAb0MAAAg3nMBxTAAAMAAAA3ng");
	var mask_graphics_63 = new cjs.Graphics().p("Eg5UAb0MAAAg3nMBypAAAMAAAA3ng");
	var mask_graphics_64 = new cjs.Graphics().p("Eg6AAb0MAAAg3nMB0BAAAMAAAA3ng");
	var mask_graphics_65 = new cjs.Graphics().p("Eg6tAb0MAAAg3nMB1bAAAMAAAA3ng");
	var mask_graphics_66 = new cjs.Graphics().p("Eg7bAb0MAAAg3nMB23AAAMAAAA3ng");
	var mask_graphics_67 = new cjs.Graphics().p("Eg8IAb0MAAAg3nMB4RAAAMAAAA3ng");
	var mask_graphics_68 = new cjs.Graphics().p("Eg82Ab0MAAAg3nMB5tAAAMAAAA3ng");
	var mask_graphics_69 = new cjs.Graphics().p("Eg9jAb0MAAAg3nMB7HAAAMAAAA3ng");
	var mask_graphics_70 = new cjs.Graphics().p("Eg+QAb0MAAAg3nMB8hAAAMAAAA3ng");
	var mask_graphics_71 = new cjs.Graphics().p("Eg++Ab0MAAAg3nMB99AAAMAAAA3ng");
	var mask_graphics_72 = new cjs.Graphics().p("Eg/rAb0MAAAg3nMB/XAAAMAAAA3ng");
	var mask_graphics_73 = new cjs.Graphics().p("EhAZAb0MAAAg3nMCAzAAAMAAAA3ng");
	var mask_graphics_74 = new cjs.Graphics().p("EhBGAb0MAAAg3nMCCNAAAMAAAA3ng");
	var mask_graphics_75 = new cjs.Graphics().p("EhBzAb0MAAAg3nMCDnAAAMAAAA3ng");
	var mask_graphics_76 = new cjs.Graphics().p("EhChAb0MAAAg3nMCFDAAAMAAAA3ng");
	var mask_graphics_77 = new cjs.Graphics().p("EhDOAb0MAAAg3nMCGdAAAMAAAA3ng");
	var mask_graphics_78 = new cjs.Graphics().p("EhD8Ab0MAAAg3nMCH5AAAMAAAA3ng");
	var mask_graphics_79 = new cjs.Graphics().p("EhEpAb0MAAAg3nMCJTAAAMAAAA3ng");
	var mask_graphics_80 = new cjs.Graphics().p("EhFWAb0MAAAg3nMCKtAAAMAAAA3ng");
	var mask_graphics_81 = new cjs.Graphics().p("EhGEAb0MAAAg3nMCMJAAAMAAAA3ng");
	var mask_graphics_82 = new cjs.Graphics().p("EhGxAb0MAAAg3nMCNjAAAMAAAA3ng");
	var mask_graphics_83 = new cjs.Graphics().p("EhHfAb0MAAAg3nMCO/AAAMAAAA3ng");
	var mask_graphics_84 = new cjs.Graphics().p("EhHuAb0MAAAg3nMCPdAAAMAAAA3ng");
	var mask_graphics_85 = new cjs.Graphics().p("EhH+Ab0MAAAg3nMCP9AAAMAAAA3ng");
	var mask_graphics_86 = new cjs.Graphics().p("EhIOAb0MAAAg3nMCQdAAAMAAAA3ng");
	var mask_graphics_87 = new cjs.Graphics().p("EhIeAb0MAAAg3nMCQ9AAAMAAAA3ng");
	var mask_graphics_88 = new cjs.Graphics().p("EhIuAb0MAAAg3nMCRdAAAMAAAA3ng");
	var mask_graphics_89 = new cjs.Graphics().p("EhI9Ab0MAAAg3nMCR7AAAMAAAA3ng");
	var mask_graphics_90 = new cjs.Graphics().p("EhJNAb0MAAAg3nMCSbAAAMAAAA3ng");
	var mask_graphics_91 = new cjs.Graphics().p("EhJdAb0MAAAg3nMCS7AAAMAAAA3ng");
	var mask_graphics_92 = new cjs.Graphics().p("EhJtAb0MAAAg3nMCTbAAAMAAAA3ng");
	var mask_graphics_93 = new cjs.Graphics().p("EhJ9Ab0MAAAg3nMCT7AAAMAAAA3ng");
	var mask_graphics_94 = new cjs.Graphics().p("EhKNAb0MAAAg3nMCUbAAAMAAAA3ng");
	var mask_graphics_95 = new cjs.Graphics().p("EhKcAb0MAAAg3nMCU5AAAMAAAA3ng");
	var mask_graphics_96 = new cjs.Graphics().p("EhKsAb0MAAAg3nMCVZAAAMAAAA3ng");
	var mask_graphics_97 = new cjs.Graphics().p("EhK8Ab0MAAAg3nMCV5AAAMAAAA3ng");
	var mask_graphics_98 = new cjs.Graphics().p("EhLMAb0MAAAg3nMCWZAAAMAAAA3ng");
	var mask_graphics_99 = new cjs.Graphics().p("EhLcAb0MAAAg3nMCW5AAAMAAAA3ng");
	var mask_graphics_100 = new cjs.Graphics().p("EhLrAb0MAAAg3nMCXXAAAMAAAA3ng");
	var mask_graphics_101 = new cjs.Graphics().p("EhL7Ab0MAAAg3nMCX3AAAMAAAA3ng");
	var mask_graphics_102 = new cjs.Graphics().p("EhMfAb0MAAAg3nMCY/AAAMAAAA3ng");
	var mask_graphics_103 = new cjs.Graphics().p("EhNDAb0MAAAg3nMCaHAAAMAAAA3ng");
	var mask_graphics_104 = new cjs.Graphics().p("EhNoAb0MAAAg3nMCbRAAAMAAAA3ng");
	var mask_graphics_105 = new cjs.Graphics().p("EhOMAb0MAAAg3nMCcZAAAMAAAA3ng");
	var mask_graphics_106 = new cjs.Graphics().p("EhOwAb0MAAAg3nMCdhAAAMAAAA3ng");
	var mask_graphics_107 = new cjs.Graphics().p("EhPUAb0MAAAg3nMCepAAAMAAAA3ng");
	var mask_graphics_108 = new cjs.Graphics().p("EhP4Ab0MAAAg3nMCfxAAAMAAAA3ng");
	var mask_graphics_109 = new cjs.Graphics().p("EhQdAb0MAAAg3nMCg7AAAMAAAA3ng");
	var mask_graphics_110 = new cjs.Graphics().p("EhRBAb0MAAAg3nMCiDAAAMAAAA3ng");
	var mask_graphics_111 = new cjs.Graphics().p("EhRlAb0MAAAg3nMCjLAAAMAAAA3ng");
	var mask_graphics_112 = new cjs.Graphics().p("EhSJAb0MAAAg3nMCkTAAAMAAAA3ng");
	var mask_graphics_113 = new cjs.Graphics().p("EhStAb0MAAAg3nMClbAAAMAAAA3ng");
	var mask_graphics_114 = new cjs.Graphics().p("EhTRAb0MAAAg3nMCmjAAAMAAAA3ng");
	var mask_graphics_115 = new cjs.Graphics().p("EhT2Ab0MAAAg3nMCntAAAMAAAA3ng");
	var mask_graphics_116 = new cjs.Graphics().p("EhUaAb0MAAAg3nMCo1AAAMAAAA3ng");
	var mask_graphics_117 = new cjs.Graphics().p("EhU+Ab0MAAAg3nMCp9AAAMAAAA3ng");
	var mask_graphics_118 = new cjs.Graphics().p("EhViAb0MAAAg3nMCrFAAAMAAAA3ng");
	var mask_graphics_119 = new cjs.Graphics().p("EhWGAb0MAAAg3nMCsNAAAMAAAA3ng");
	var mask_graphics_120 = new cjs.Graphics().p("EhWqAb0MAAAg3nMCtVAAAMAAAA3ng");
	var mask_graphics_121 = new cjs.Graphics().p("EhXPAb0MAAAg3nMCufAAAMAAAA3ng");
	var mask_graphics_122 = new cjs.Graphics().p("EhXzAb0MAAAg3nMCvnAAAMAAAA3ng");
	var mask_graphics_123 = new cjs.Graphics().p("EhYXAb0MAAAg3nMCwvAAAMAAAA3ng");
	var mask_graphics_124 = new cjs.Graphics().p("EhY7Ab0MAAAg3nMCx3AAAMAAAA3ng");
	var mask_graphics_125 = new cjs.Graphics().p("EhZfAb0MAAAg3nMCy/AAAMAAAA3ng");
	var mask_graphics_126 = new cjs.Graphics().p("EhaEAb0MAAAg3nMC0JAAAMAAAA3ng");
	var mask_graphics_127 = new cjs.Graphics().p("EhaoAb0MAAAg3nMC1RAAAMAAAA3ng");
	var mask_graphics_128 = new cjs.Graphics().p("EhbMAb0MAAAg3nMC2ZAAAMAAAA3ng");
	var mask_graphics_129 = new cjs.Graphics().p("EhbwAb0MAAAg3nMC3hAAAMAAAA3ng");
	var mask_graphics_130 = new cjs.Graphics().p("EhcAAb0MAAAg3nMC4BAAAMAAAA3ng");
	var mask_graphics_131 = new cjs.Graphics().p("EhcQAb0MAAAg3nMC4hAAAMAAAA3ng");
	var mask_graphics_132 = new cjs.Graphics().p("EhcgAb0MAAAg3nMC5BAAAMAAAA3ng");
	var mask_graphics_133 = new cjs.Graphics().p("EhcwAb0MAAAg3nMC5hAAAMAAAA3ng");
	var mask_graphics_134 = new cjs.Graphics().p("EhdAAb0MAAAg3nMC6BAAAMAAAA3ng");
	var mask_graphics_135 = new cjs.Graphics().p("EhdQAb0MAAAg3nMC6hAAAMAAAA3ng");
	var mask_graphics_136 = new cjs.Graphics().p("EhdgAb0MAAAg3nMC7BAAAMAAAA3ng");
	var mask_graphics_137 = new cjs.Graphics().p("EhdwAb0MAAAg3nMC7hAAAMAAAA3ng");
	var mask_graphics_138 = new cjs.Graphics().p("EheAAb0MAAAg3nMC8BAAAMAAAA3ng");
	var mask_graphics_139 = new cjs.Graphics().p("EheQAb0MAAAg3nMC8hAAAMAAAA3ng");
	var mask_graphics_140 = new cjs.Graphics().p("EhegAb0MAAAg3nMC9BAAAMAAAA3ng");
	var mask_graphics_141 = new cjs.Graphics().p("EhewAb0MAAAg3nMC9hAAAMAAAA3ng");
	var mask_graphics_142 = new cjs.Graphics().p("Ehe/Ab0MAAAg3nMC9/AAAMAAAA3ng");
	var mask_graphics_143 = new cjs.Graphics().p("EhfPAb0MAAAg3nMC+fAAAMAAAA3ng");
	var mask_graphics_144 = new cjs.Graphics().p("EhffAb0MAAAg3nMC+/AAAMAAAA3ng");
	var mask_graphics_145 = new cjs.Graphics().p("EhfvAb0MAAAg3nMC/fAAAMAAAA3ng");
	var mask_graphics_146 = new cjs.Graphics().p("Ehf/Ab0MAAAg3nMC//AAAMAAAA3ng");
	var mask_graphics_147 = new cjs.Graphics().p("EhgPAb0MAAAg3nMDAfAAAMAAAA3ng");
	var mask_graphics_148 = new cjs.Graphics().p("EhgtAb0MAAAg3nMDBbAAAMAAAA3ng");
	var mask_graphics_149 = new cjs.Graphics().p("EhhKAb0MAAAg3nMDCVAAAMAAAA3ng");
	var mask_graphics_150 = new cjs.Graphics().p("EhhoAb0MAAAg3nMDDRAAAMAAAA3ng");
	var mask_graphics_151 = new cjs.Graphics().p("EhiFAb0MAAAg3nMDELAAAMAAAA3ng");
	var mask_graphics_152 = new cjs.Graphics().p("EhijAb0MAAAg3nMDFHAAAMAAAA3ng");
	var mask_graphics_153 = new cjs.Graphics().p("EhjAAb0MAAAg3nMDGBAAAMAAAA3ng");
	var mask_graphics_154 = new cjs.Graphics().p("EhjeAb0MAAAg3nMDG9AAAMAAAA3ng");
	var mask_graphics_155 = new cjs.Graphics().p("Ehj7Ab0MAAAg3nMDH3AAAMAAAA3ng");
	var mask_graphics_156 = new cjs.Graphics().p("EhkYAb0MAAAg3nMDIxAAAMAAAA3ng");
	var mask_graphics_157 = new cjs.Graphics().p("Ehk2Ab0MAAAg3nMDJtAAAMAAAA3ng");
	var mask_graphics_158 = new cjs.Graphics().p("EhlfAb0MAAAg3nMDK/AAAMAAAA3ng");
	var mask_graphics_159 = new cjs.Graphics().p("EhmHAb0MAAAg3nMDMPAAAMAAAA3ng");
	var mask_graphics_160 = new cjs.Graphics().p("EhmwAb0MAAAg3nMDNhAAAMAAAA3ng");
	var mask_graphics_161 = new cjs.Graphics().p("EhnYAb0MAAAg3nMDOxAAAMAAAA3ng");
	var mask_graphics_162 = new cjs.Graphics().p("EhoBAb0MAAAg3nMDQDAAAMAAAA3ng");
	var mask_graphics_163 = new cjs.Graphics().p("EhoqAb0MAAAg3nMDRVAAAMAAAA3ng");
	var mask_graphics_164 = new cjs.Graphics().p("EhpSAb0MAAAg3nMDSlAAAMAAAA3ng");
	var mask_graphics_165 = new cjs.Graphics().p("Ehp7Ab0MAAAg3nMDT3AAAMAAAA3ng");
	var mask_graphics_166 = new cjs.Graphics().p("EhqkAb0MAAAg3nMDVJAAAMAAAA3ng");
	var mask_graphics_167 = new cjs.Graphics().p("EhrMAb0MAAAg3nMDWZAAAMAAAA3ng");
	var mask_graphics_168 = new cjs.Graphics().p("EhrrAb0MAAAg3nMDXXAAAMAAAA3ng");
	var mask_graphics_169 = new cjs.Graphics().p("EhsLAb0MAAAg3nMDYXAAAMAAAA3ng");
	var mask_graphics_170 = new cjs.Graphics().p("EhsqAb0MAAAg3nMDZVAAAMAAAA3ng");
	var mask_graphics_171 = new cjs.Graphics().p("EhtJAb0MAAAg3nMDaTAAAMAAAA3ng");
	var mask_graphics_172 = new cjs.Graphics().p("EhtoAb0MAAAg3nMDbRAAAMAAAA3ng");
	var mask_graphics_173 = new cjs.Graphics().p("EhuIAb0MAAAg3nMDcRAAAMAAAA3ng");
	var mask_graphics_174 = new cjs.Graphics().p("EhunAb0MAAAg3nMDdPAAAMAAAA3ng");
	var mask_graphics_175 = new cjs.Graphics().p("EhvGAb0MAAAg3nMDeNAAAMAAAA3ng");
	var mask_graphics_176 = new cjs.Graphics().p("EhvlAb0MAAAg3nMDfLAAAMAAAA3ng");
	var mask_graphics_177 = new cjs.Graphics().p("EhwFAb0MAAAg3nMDgLAAAMAAAA3ng");
	var mask_graphics_178 = new cjs.Graphics().p("EhwkAb0MAAAg3nMDhJAAAMAAAA3ng");
	var mask_graphics_179 = new cjs.Graphics().p("EhxDAb0MAAAg3nMDiHAAAMAAAA3ng");
	var mask_graphics_180 = new cjs.Graphics().p("EhxiAb0MAAAg3nMDjFAAAMAAAA3ng");
	var mask_graphics_181 = new cjs.Graphics().p("EhyCAb0MAAAg3nMDkFAAAMAAAA3ng");
	var mask_graphics_182 = new cjs.Graphics().p("EhyhAb0MAAAg3nMDlDAAAMAAAA3ng");
	var mask_graphics_183 = new cjs.Graphics().p("EhzAAb0MAAAg3nMDmBAAAMAAAA3ng");
	var mask_graphics_184 = new cjs.Graphics().p("EhzfAb0MAAAg3nMDm/AAAMAAAA3ng");
	var mask_graphics_185 = new cjs.Graphics().p("Ehz8Ab0MAAAg3nMDn5AAAMAAAA3ng");
	var mask_graphics_186 = new cjs.Graphics().p("Eh0ZAb0MAAAg3nMDozAAAMAAAA3ng");
	var mask_graphics_187 = new cjs.Graphics().p("Eh02Ab0MAAAg3nMDptAAAMAAAA3ng");
	var mask_graphics_188 = new cjs.Graphics().p("Eh1TAb0MAAAg3nMDqnAAAMAAAA3ng");
	var mask_graphics_189 = new cjs.Graphics().p("Eh1vAb0MAAAg3nMDrfAAAMAAAA3ng");
	var mask_graphics_190 = new cjs.Graphics().p("Eh2MAb0MAAAg3nMDsZAAAMAAAA3ng");
	var mask_graphics_191 = new cjs.Graphics().p("Eh2pAb0MAAAg3nMDtTAAAMAAAA3ng");
	var mask_graphics_192 = new cjs.Graphics().p("Eh3GAb0MAAAg3nMDuNAAAMAAAA3ng");
	var mask_graphics_193 = new cjs.Graphics().p("Eh3jAb0MAAAg3nMDvHAAAMAAAA3ng");
	var mask_graphics_194 = new cjs.Graphics().p("Eh3/Ab0MAAAg3nMDv/AAAMAAAA3ng");
	var mask_graphics_195 = new cjs.Graphics().p("Eh4cAb0MAAAg3nMDw5AAAMAAAA3ng");
	var mask_graphics_196 = new cjs.Graphics().p("Eh45Ab0MAAAg3nMDxzAAAMAAAA3ng");
	var mask_graphics_197 = new cjs.Graphics().p("Eh5WAb0MAAAg3nMDytAAAMAAAA3ng");
	var mask_graphics_198 = new cjs.Graphics().p("Eh5zAb0MAAAg3nMDznAAAMAAAA3ng");
	var mask_graphics_199 = new cjs.Graphics().p("Eh6PAb0MAAAg3nMD0fAAAMAAAA3ng");
	var mask_graphics_200 = new cjs.Graphics().p("Eh6sAb0MAAAg3nMD1ZAAAMAAAA3ng");
	var mask_graphics_201 = new cjs.Graphics().p("Eh7JAb0MAAAg3nMD2TAAAMAAAA3ng");
	var mask_graphics_202 = new cjs.Graphics().p("Eh7mAb0MAAAg3nMD3NAAAMAAAA3ng");
	var mask_graphics_203 = new cjs.Graphics().p("Eh8CAb0MAAAg3nMD4FAAAMAAAA3ng");
	var mask_graphics_204 = new cjs.Graphics().p("Eh8fAb0MAAAg3nMD4/AAAMAAAA3ng");
	var mask_graphics_205 = new cjs.Graphics().p("Eh88Ab0MAAAg3nMD55AAAMAAAA3ng");
	var mask_graphics_206 = new cjs.Graphics().p("Eh9LAb0MAAAg3nMD6XAAAMAAAA3ng");
	var mask_graphics_207 = new cjs.Graphics().p("Eh9bAb0MAAAg3nMD63AAAMAAAA3ng");
	var mask_graphics_208 = new cjs.Graphics().p("Eh9qAb0MAAAg3nMD7VAAAMAAAA3ng");
	var mask_graphics_209 = new cjs.Graphics().p("Eh95Ab0MAAAg3nMD7zAAAMAAAA3ng");
	var mask_graphics_210 = new cjs.Graphics().p("Eh+JAb0MAAAg3nMD8TAAAMAAAA3ng");
	var mask_graphics_211 = new cjs.Graphics().p("Eh+YAb0MAAAg3nMD8xAAAMAAAA3ng");
	var mask_graphics_212 = new cjs.Graphics().p("Eh+nAb0MAAAg3nMD9PAAAMAAAA3ng");
	var mask_graphics_213 = new cjs.Graphics().p("Eh+3Ab0MAAAg3nMD9vAAAMAAAA3ng");
	var mask_graphics_214 = new cjs.Graphics().p("Eh/GAb0MAAAg3nMD+NAAAMAAAA3ng");
	var mask_graphics_215 = new cjs.Graphics().p("Eh/VAb0MAAAg3nMD+rAAAMAAAA3ng");
	var mask_graphics_216 = new cjs.Graphics().p("Eh/lAb0MAAAg3nMD/LAAAMAAAA3ng");
	var mask_graphics_217 = new cjs.Graphics().p("Eh/0Ab0MAAAg3nMD/pAAAMAAAA3ng");
	var mask_graphics_218 = new cjs.Graphics().p("EiADAb0MAAAg3nMEAHAAAMAAAA3ng");
	var mask_graphics_219 = new cjs.Graphics().p("EiATAb0MAAAg3nMEAnAAAMAAAA3ng");
	var mask_graphics_220 = new cjs.Graphics().p("EiAiAb0MAAAg3nMEBFAAAMAAAA3ng");
	var mask_graphics_221 = new cjs.Graphics().p("EiAxAb0MAAAg3nMEBjAAAMAAAA3ng");
	var mask_graphics_222 = new cjs.Graphics().p("EiBBAb0MAAAg3nMECDAAAMAAAA3ng");
	var mask_graphics_223 = new cjs.Graphics().p("EiBQAb0MAAAg3nMEChAAAMAAAA3ng");
	var mask_graphics_224 = new cjs.Graphics().p("EiBfAb0MAAAg3nMEC/AAAMAAAA3ng");
	var mask_graphics_225 = new cjs.Graphics().p("EiBvAb0MAAAg3nMEDfAAAMAAAA3ng");
	var mask_graphics_226 = new cjs.Graphics().p("EiB+Ab0MAAAg3nMED9AAAMAAAA3ng");
	var mask_graphics_227 = new cjs.Graphics().p("EiCMAb0MAAAg3nMEEZAAAMAAAA3ng");
	var mask_graphics_228 = new cjs.Graphics().p("EiCaAb0MAAAg3nMEE1AAAMAAAA3ng");
	var mask_graphics_229 = new cjs.Graphics().p("EiCoAb0MAAAg3nMEFRAAAMAAAA3ng");
	var mask_graphics_230 = new cjs.Graphics().p("EiC2Ab0MAAAg3nMEFtAAAMAAAA3ng");
	var mask_graphics_231 = new cjs.Graphics().p("EiDEAb0MAAAg3nMEGJAAAMAAAA3ng");
	var mask_graphics_232 = new cjs.Graphics().p("EiDSAb0MAAAg3nMEGlAAAMAAAA3ng");
	var mask_graphics_233 = new cjs.Graphics().p("EiDgAb0MAAAg3nMEHBAAAMAAAA3ng");
	var mask_graphics_234 = new cjs.Graphics().p("EiDuAb0MAAAg3nMEHdAAAMAAAA3ng");
	var mask_graphics_235 = new cjs.Graphics().p("EiD8Ab0MAAAg3nMEH5AAAMAAAA3ng");
	var mask_graphics_236 = new cjs.Graphics().p("EiEJAb0MAAAg3nMEITAAAMAAAA3ng");
	var mask_graphics_237 = new cjs.Graphics().p("EiEXAb0MAAAg3nMEIvAAAMAAAA3ng");
	var mask_graphics_238 = new cjs.Graphics().p("EiElAb0MAAAg3nMEJLAAAMAAAA3ng");
	var mask_graphics_239 = new cjs.Graphics().p("EiEzAb0MAAAg3nMEJnAAAMAAAA3ng");
	var mask_graphics_240 = new cjs.Graphics().p("EiFBAb0MAAAg3nMEKDAAAMAAAA3ng");
	var mask_graphics_241 = new cjs.Graphics().p("EiFPAb0MAAAg3nMEKfAAAMAAAA3ng");
	var mask_graphics_242 = new cjs.Graphics().p("EiFdAb0MAAAg3nMEK7AAAMAAAA3ng");
	var mask_graphics_243 = new cjs.Graphics().p("EiFrAb0MAAAg3nMELXAAAMAAAA3ng");
	var mask_graphics_244 = new cjs.Graphics().p("EiF5Ab0MAAAg3nMELzAAAMAAAA3ng");
	var mask_graphics_245 = new cjs.Graphics().p("EiGHAb0MAAAg3nMEMPAAAMAAAA3ng");
	var mask_graphics_246 = new cjs.Graphics().p("EiGVAb0MAAAg3nMEMrAAAMAAAA3ng");
	var mask_graphics_247 = new cjs.Graphics().p("EiGjAb0MAAAg3nMENHAAAMAAAA3ng");
	var mask_graphics_248 = new cjs.Graphics().p("EiGxAb0MAAAg3nMENjAAAMAAAA3ng");
	var mask_graphics_249 = new cjs.Graphics().p("EiG/Ab0MAAAg3nMEN/AAAMAAAA3ng");
	var mask_graphics_250 = new cjs.Graphics().p("EiHNAb0MAAAg3nMEObAAAMAAAA3ng");
	var mask_graphics_251 = new cjs.Graphics().p("EiH3Ab0MAAAg3nMEPvAAAMAAAA3ng");
	var mask_graphics_252 = new cjs.Graphics().p("EiIgAb0MAAAg3nMERBAAAMAAAA3ng");
	var mask_graphics_253 = new cjs.Graphics().p("EiJKAb0MAAAg3nMESVAAAMAAAA3ng");
	var mask_graphics_254 = new cjs.Graphics().p("EiJ0Ab0MAAAg3nMETpAAAMAAAA3ng");
	var mask_graphics_255 = new cjs.Graphics().p("EiKdAb0MAAAg3nMEU7AAAMAAAA3ng");
	var mask_graphics_256 = new cjs.Graphics().p("EiLHAb0MAAAg3nMEWPAAAMAAAA3ng");
	var mask_graphics_257 = new cjs.Graphics().p("EiLxAb0MAAAg3nMEXjAAAMAAAA3ng");
	var mask_graphics_258 = new cjs.Graphics().p("EiMaAb0MAAAg3nMEY1AAAMAAAA3ng");
	var mask_graphics_259 = new cjs.Graphics().p("EiNEAb0MAAAg3nMEaJAAAMAAAA3ng");
	var mask_graphics_260 = new cjs.Graphics().p("EiNuAb0MAAAg3nMEbdAAAMAAAA3ng");
	var mask_graphics_261 = new cjs.Graphics().p("EiOXAb0MAAAg3nMEcvAAAMAAAA3ng");
	var mask_graphics_262 = new cjs.Graphics().p("EiPBAb0MAAAg3nMEeDAAAMAAAA3ng");
	var mask_graphics_263 = new cjs.Graphics().p("EiPrAb0MAAAg3nMEfXAAAMAAAA3ng");
	var mask_graphics_264 = new cjs.Graphics().p("EiQUAb0MAAAg3nMEgpAAAMAAAA3ng");
	var mask_graphics_265 = new cjs.Graphics().p("EiQ+Ab0MAAAg3nMEh9AAAMAAAA3ng");
	var mask_graphics_266 = new cjs.Graphics().p("EiRoAb0MAAAg3nMEjRAAAMAAAA3ng");
	var mask_graphics_267 = new cjs.Graphics().p("EiSRAb0MAAAg3nMEkjAAAMAAAA3ng");
	var mask_graphics_268 = new cjs.Graphics().p("EiS7Ab0MAAAg3nMEl3AAAMAAAA3ng");
	var mask_graphics_269 = new cjs.Graphics().p("EiTqAb0MAAAg3nMEnVAAAMAAAA3ng");
	var mask_graphics_270 = new cjs.Graphics().p("EiUZAb0MAAAg3nMEozAAAMAAAA3ng");
	var mask_graphics_271 = new cjs.Graphics().p("EiVIAb0MAAAg3nMEqRAAAMAAAA3ng");
	var mask_graphics_272 = new cjs.Graphics().p("EiV3Ab0MAAAg3nMErvAAAMAAAA3ng");
	var mask_graphics_273 = new cjs.Graphics().p("EiWmAb0MAAAg3nMEtNAAAMAAAA3ng");
	var mask_graphics_274 = new cjs.Graphics().p("EiXVAb0MAAAg3nMEurAAAMAAAA3ng");
	var mask_graphics_275 = new cjs.Graphics().p("EiYFAb0MAAAg3nMEwLAAAMAAAA3ng");
	var mask_graphics_276 = new cjs.Graphics().p("EiY0Ab0MAAAg3nMExpAAAMAAAA3ng");
	var mask_graphics_277 = new cjs.Graphics().p("EiZjAb0MAAAg3nMEzHAAAMAAAA3ng");
	var mask_graphics_278 = new cjs.Graphics().p("EiaSAb0MAAAg3nME0lAAAMAAAA3ng");
	var mask_graphics_279 = new cjs.Graphics().p("EibBAb0MAAAg3nME2DAAAMAAAA3ng");
	var mask_graphics_280 = new cjs.Graphics().p("EibeAb0MAAAg3nME29AAAMAAAA3ng");
	var mask_graphics_281 = new cjs.Graphics().p("Eib6Ab0MAAAg3nME31AAAMAAAA3ng");
	var mask_graphics_282 = new cjs.Graphics().p("EicXAb0MAAAg3nME4vAAAMAAAA3ng");
	var mask_graphics_283 = new cjs.Graphics().p("EiczAb0MAAAg3nME5nAAAMAAAA3ng");
	var mask_graphics_284 = new cjs.Graphics().p("EidQAb0MAAAg3nME6hAAAMAAAA3ng");
	var mask_graphics_285 = new cjs.Graphics().p("EidtAb0MAAAg3nME7bAAAMAAAA3ng");
	var mask_graphics_286 = new cjs.Graphics().p("EieJAb0MAAAg3nME8TAAAMAAAA3ng");
	var mask_graphics_287 = new cjs.Graphics().p("EiemAb0MAAAg3nME9NAAAMAAAA3ng");
	var mask_graphics_288 = new cjs.Graphics().p("EifDAb0MAAAg3nME+HAAAMAAAA3ng");
	var mask_graphics_289 = new cjs.Graphics().p("EiffAb0MAAAg3nME+/AAAMAAAA3ng");
	var mask_graphics_290 = new cjs.Graphics().p("Eif8Ab0MAAAg3nME/5AAAMAAAA3ng");
	var mask_graphics_291 = new cjs.Graphics().p("EigZAb0MAAAg3nMFAzAAAMAAAA3ng");
	var mask_graphics_292 = new cjs.Graphics().p("Eig1Ab0MAAAg3nMFBrAAAMAAAA3ng");
	var mask_graphics_293 = new cjs.Graphics().p("EihSAb0MAAAg3nMFClAAAMAAAA3ng");
	var mask_graphics_294 = new cjs.Graphics().p("EihvAb0MAAAg3nMFDfAAAMAAAA3ng");
	var mask_graphics_295 = new cjs.Graphics().p("EiiLAb0MAAAg3nMFEXAAAMAAAA3ng");
	var mask_graphics_296 = new cjs.Graphics().p("EiioAb0MAAAg3nMFFRAAAMAAAA3ng");
	var mask_graphics_297 = new cjs.Graphics().p("EijFAb0MAAAg3nMFGLAAAMAAAA3ng");
	var mask_graphics_298 = new cjs.Graphics().p("EijwAb0MAAAg3nMFHhAAAMAAAA3ng");
	var mask_graphics_299 = new cjs.Graphics().p("EikbAb0MAAAg3nMFI3AAAMAAAA3ng");
	var mask_graphics_300 = new cjs.Graphics().p("EilGAb0MAAAg3nMFKNAAAMAAAA3ng");
	var mask_graphics_301 = new cjs.Graphics().p("EilwAb0MAAAg3nMFLhAAAMAAAA3ng");
	var mask_graphics_302 = new cjs.Graphics().p("EimbAb0MAAAg3nMFM3AAAMAAAA3ng");
	var mask_graphics_303 = new cjs.Graphics().p("EinGAb0MAAAg3nMFONAAAMAAAA3ng");
	var mask_graphics_304 = new cjs.Graphics().p("EinxAb0MAAAg3nMFPjAAAMAAAA3ng");
	var mask_graphics_305 = new cjs.Graphics().p("EiocAb0MAAAg3nMFQ5AAAMAAAA3ng");
	var mask_graphics_306 = new cjs.Graphics().p("EipHAb0MAAAg3nMFSPAAAMAAAA3ng");
	var mask_graphics_307 = new cjs.Graphics().p("EipyAb0MAAAg3nMFTlAAAMAAAA3ng");
	var mask_graphics_308 = new cjs.Graphics().p("EiqdAb0MAAAg3nMFU7AAAMAAAA3ng");
	var mask_graphics_309 = new cjs.Graphics().p("EirIAb0MAAAg3nMFWRAAAMAAAA3ng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:148.1,y:124.5}).wait(1).to({graphics:mask_graphics_1,x:151.9,y:124.5}).wait(1).to({graphics:mask_graphics_2,x:155.7,y:124.5}).wait(1).to({graphics:mask_graphics_3,x:159.5,y:124.5}).wait(1).to({graphics:mask_graphics_4,x:162.8,y:124.5}).wait(1).to({graphics:mask_graphics_5,x:166.2,y:124.5}).wait(1).to({graphics:mask_graphics_6,x:169.5,y:124.5}).wait(1).to({graphics:mask_graphics_7,x:172.8,y:124.5}).wait(1).to({graphics:mask_graphics_8,x:176.1,y:124.5}).wait(1).to({graphics:mask_graphics_9,x:179.4,y:124.5}).wait(1).to({graphics:mask_graphics_10,x:182.7,y:124.5}).wait(1).to({graphics:mask_graphics_11,x:186,y:124.5}).wait(1).to({graphics:mask_graphics_12,x:189.3,y:124.5}).wait(1).to({graphics:mask_graphics_13,x:192.7,y:124.5}).wait(1).to({graphics:mask_graphics_14,x:196,y:124.5}).wait(1).to({graphics:mask_graphics_15,x:199.3,y:124.5}).wait(1).to({graphics:mask_graphics_16,x:202.7,y:124.5}).wait(1).to({graphics:mask_graphics_17,x:205,y:124.5}).wait(1).to({graphics:mask_graphics_18,x:207.4,y:124.5}).wait(1).to({graphics:mask_graphics_19,x:209.7,y:124.5}).wait(1).to({graphics:mask_graphics_20,x:212.1,y:124.5}).wait(1).to({graphics:mask_graphics_21,x:214.5,y:124.5}).wait(1).to({graphics:mask_graphics_22,x:216.8,y:124.5}).wait(1).to({graphics:mask_graphics_23,x:219.2,y:124.5}).wait(1).to({graphics:mask_graphics_24,x:221.5,y:124.5}).wait(1).to({graphics:mask_graphics_25,x:223.9,y:124.5}).wait(1).to({graphics:mask_graphics_26,x:226.3,y:124.5}).wait(1).to({graphics:mask_graphics_27,x:228.6,y:124.5}).wait(1).to({graphics:mask_graphics_28,x:231,y:124.5}).wait(1).to({graphics:mask_graphics_29,x:233.3,y:124.5}).wait(1).to({graphics:mask_graphics_30,x:235.7,y:124.5}).wait(1).to({graphics:mask_graphics_31,x:238.1,y:124.5}).wait(1).to({graphics:mask_graphics_32,x:240.4,y:124.5}).wait(1).to({graphics:mask_graphics_33,x:242.8,y:124.5}).wait(1).to({graphics:mask_graphics_34,x:245.1,y:124.5}).wait(1).to({graphics:mask_graphics_35,x:247.5,y:124.5}).wait(1).to({graphics:mask_graphics_36,x:249.8,y:124.5}).wait(1).to({graphics:mask_graphics_37,x:252.2,y:124.5}).wait(1).to({graphics:mask_graphics_38,x:254.6,y:124.5}).wait(1).to({graphics:mask_graphics_39,x:258.3,y:124.5}).wait(1).to({graphics:mask_graphics_40,x:262,y:124.5}).wait(1).to({graphics:mask_graphics_41,x:265.6,y:124.5}).wait(1).to({graphics:mask_graphics_42,x:269.3,y:124.5}).wait(1).to({graphics:mask_graphics_43,x:273,y:124.5}).wait(1).to({graphics:mask_graphics_44,x:276.7,y:124.5}).wait(1).to({graphics:mask_graphics_45,x:280.4,y:124.5}).wait(1).to({graphics:mask_graphics_46,x:284.1,y:124.5}).wait(1).to({graphics:mask_graphics_47,x:287.8,y:124.5}).wait(1).to({graphics:mask_graphics_48,x:291.5,y:124.5}).wait(1).to({graphics:mask_graphics_49,x:295.2,y:124.5}).wait(1).to({graphics:mask_graphics_50,x:298.9,y:124.5}).wait(1).to({graphics:mask_graphics_51,x:302.6,y:124.5}).wait(1).to({graphics:mask_graphics_52,x:306.3,y:124.5}).wait(1).to({graphics:mask_graphics_53,x:309.9,y:124.5}).wait(1).to({graphics:mask_graphics_54,x:313.6,y:124.5}).wait(1).to({graphics:mask_graphics_55,x:318,y:124.5}).wait(1).to({graphics:mask_graphics_56,x:322.4,y:124.5}).wait(1).to({graphics:mask_graphics_57,x:326.7,y:124.5}).wait(1).to({graphics:mask_graphics_58,x:331.1,y:124.5}).wait(1).to({graphics:mask_graphics_59,x:335.4,y:124.5}).wait(1).to({graphics:mask_graphics_60,x:339.8,y:124.5}).wait(1).to({graphics:mask_graphics_61,x:344.2,y:124.5}).wait(1).to({graphics:mask_graphics_62,x:348.5,y:124.5}).wait(1).to({graphics:mask_graphics_63,x:352.9,y:124.5}).wait(1).to({graphics:mask_graphics_64,x:357.4,y:124.5}).wait(1).to({graphics:mask_graphics_65,x:361.9,y:124.5}).wait(1).to({graphics:mask_graphics_66,x:366.4,y:124.5}).wait(1).to({graphics:mask_graphics_67,x:371,y:124.5}).wait(1).to({graphics:mask_graphics_68,x:375.5,y:124.5}).wait(1).to({graphics:mask_graphics_69,x:380.1,y:124.5}).wait(1).to({graphics:mask_graphics_70,x:384.6,y:124.5}).wait(1).to({graphics:mask_graphics_71,x:389.1,y:124.5}).wait(1).to({graphics:mask_graphics_72,x:393.7,y:124.5}).wait(1).to({graphics:mask_graphics_73,x:398.2,y:124.5}).wait(1).to({graphics:mask_graphics_74,x:402.8,y:124.5}).wait(1).to({graphics:mask_graphics_75,x:407.3,y:124.5}).wait(1).to({graphics:mask_graphics_76,x:411.8,y:124.5}).wait(1).to({graphics:mask_graphics_77,x:416.4,y:124.5}).wait(1).to({graphics:mask_graphics_78,x:420.9,y:124.5}).wait(1).to({graphics:mask_graphics_79,x:425.5,y:124.5}).wait(1).to({graphics:mask_graphics_80,x:430,y:124.5}).wait(1).to({graphics:mask_graphics_81,x:434.5,y:124.5}).wait(1).to({graphics:mask_graphics_82,x:439.1,y:124.5}).wait(1).to({graphics:mask_graphics_83,x:443.6,y:124.5}).wait(1).to({graphics:mask_graphics_84,x:445.2,y:124.5}).wait(1).to({graphics:mask_graphics_85,x:446.8,y:124.5}).wait(1).to({graphics:mask_graphics_86,x:448.4,y:124.5}).wait(1).to({graphics:mask_graphics_87,x:449.9,y:124.5}).wait(1).to({graphics:mask_graphics_88,x:451.5,y:124.5}).wait(1).to({graphics:mask_graphics_89,x:453.1,y:124.5}).wait(1).to({graphics:mask_graphics_90,x:454.7,y:124.5}).wait(1).to({graphics:mask_graphics_91,x:456.3,y:124.5}).wait(1).to({graphics:mask_graphics_92,x:457.8,y:124.5}).wait(1).to({graphics:mask_graphics_93,x:459.4,y:124.5}).wait(1).to({graphics:mask_graphics_94,x:461,y:124.5}).wait(1).to({graphics:mask_graphics_95,x:462.6,y:124.5}).wait(1).to({graphics:mask_graphics_96,x:464.2,y:124.5}).wait(1).to({graphics:mask_graphics_97,x:465.7,y:124.5}).wait(1).to({graphics:mask_graphics_98,x:467.3,y:124.5}).wait(1).to({graphics:mask_graphics_99,x:468.9,y:124.5}).wait(1).to({graphics:mask_graphics_100,x:470.5,y:124.5}).wait(1).to({graphics:mask_graphics_101,x:472.1,y:124.5}).wait(1).to({graphics:mask_graphics_102,x:475.7,y:124.5}).wait(1).to({graphics:mask_graphics_103,x:479.3,y:124.5}).wait(1).to({graphics:mask_graphics_104,x:482.9,y:124.5}).wait(1).to({graphics:mask_graphics_105,x:486.5,y:124.5}).wait(1).to({graphics:mask_graphics_106,x:490.2,y:124.5}).wait(1).to({graphics:mask_graphics_107,x:493.8,y:124.5}).wait(1).to({graphics:mask_graphics_108,x:497.4,y:124.5}).wait(1).to({graphics:mask_graphics_109,x:501,y:124.5}).wait(1).to({graphics:mask_graphics_110,x:504.6,y:124.5}).wait(1).to({graphics:mask_graphics_111,x:508.2,y:124.5}).wait(1).to({graphics:mask_graphics_112,x:511.9,y:124.5}).wait(1).to({graphics:mask_graphics_113,x:515.5,y:124.5}).wait(1).to({graphics:mask_graphics_114,x:519.1,y:124.5}).wait(1).to({graphics:mask_graphics_115,x:522.7,y:124.5}).wait(1).to({graphics:mask_graphics_116,x:526.3,y:124.5}).wait(1).to({graphics:mask_graphics_117,x:529.9,y:124.5}).wait(1).to({graphics:mask_graphics_118,x:533.6,y:124.5}).wait(1).to({graphics:mask_graphics_119,x:537.2,y:124.5}).wait(1).to({graphics:mask_graphics_120,x:540.8,y:124.5}).wait(1).to({graphics:mask_graphics_121,x:544.4,y:124.5}).wait(1).to({graphics:mask_graphics_122,x:548,y:124.5}).wait(1).to({graphics:mask_graphics_123,x:551.6,y:124.5}).wait(1).to({graphics:mask_graphics_124,x:555.3,y:124.5}).wait(1).to({graphics:mask_graphics_125,x:558.9,y:124.5}).wait(1).to({graphics:mask_graphics_126,x:562.5,y:124.5}).wait(1).to({graphics:mask_graphics_127,x:566.1,y:124.5}).wait(1).to({graphics:mask_graphics_128,x:569.7,y:124.5}).wait(1).to({graphics:mask_graphics_129,x:573.4,y:124.5}).wait(1).to({graphics:mask_graphics_130,x:574.9,y:124.5}).wait(1).to({graphics:mask_graphics_131,x:576.5,y:124.5}).wait(1).to({graphics:mask_graphics_132,x:578.1,y:124.5}).wait(1).to({graphics:mask_graphics_133,x:579.7,y:124.5}).wait(1).to({graphics:mask_graphics_134,x:581.3,y:124.5}).wait(1).to({graphics:mask_graphics_135,x:582.9,y:124.5}).wait(1).to({graphics:mask_graphics_136,x:584.5,y:124.5}).wait(1).to({graphics:mask_graphics_137,x:586.1,y:124.5}).wait(1).to({graphics:mask_graphics_138,x:587.7,y:124.5}).wait(1).to({graphics:mask_graphics_139,x:589.3,y:124.5}).wait(1).to({graphics:mask_graphics_140,x:590.9,y:124.5}).wait(1).to({graphics:mask_graphics_141,x:592.5,y:124.5}).wait(1).to({graphics:mask_graphics_142,x:594.1,y:124.5}).wait(1).to({graphics:mask_graphics_143,x:595.7,y:124.5}).wait(1).to({graphics:mask_graphics_144,x:597.3,y:124.5}).wait(1).to({graphics:mask_graphics_145,x:598.9,y:124.5}).wait(1).to({graphics:mask_graphics_146,x:600.5,y:124.5}).wait(1).to({graphics:mask_graphics_147,x:602.1,y:124.5}).wait(1).to({graphics:mask_graphics_148,x:605,y:124.5}).wait(1).to({graphics:mask_graphics_149,x:608,y:124.5}).wait(1).to({graphics:mask_graphics_150,x:610.9,y:124.5}).wait(1).to({graphics:mask_graphics_151,x:613.9,y:124.5}).wait(1).to({graphics:mask_graphics_152,x:616.8,y:124.5}).wait(1).to({graphics:mask_graphics_153,x:619.8,y:124.5}).wait(1).to({graphics:mask_graphics_154,x:622.7,y:124.5}).wait(1).to({graphics:mask_graphics_155,x:625.6,y:124.5}).wait(1).to({graphics:mask_graphics_156,x:628.6,y:124.5}).wait(1).to({graphics:mask_graphics_157,x:631.5,y:124.5}).wait(1).to({graphics:mask_graphics_158,x:635.6,y:124.5}).wait(1).to({graphics:mask_graphics_159,x:639.7,y:124.5}).wait(1).to({graphics:mask_graphics_160,x:643.7,y:124.5}).wait(1).to({graphics:mask_graphics_161,x:647.8,y:124.5}).wait(1).to({graphics:mask_graphics_162,x:651.9,y:124.5}).wait(1).to({graphics:mask_graphics_163,x:655.9,y:124.5}).wait(1).to({graphics:mask_graphics_164,x:660,y:124.5}).wait(1).to({graphics:mask_graphics_165,x:664,y:124.5}).wait(1).to({graphics:mask_graphics_166,x:668.1,y:124.5}).wait(1).to({graphics:mask_graphics_167,x:672.2,y:124.5}).wait(1).to({graphics:mask_graphics_168,x:675.3,y:124.5}).wait(1).to({graphics:mask_graphics_169,x:678.4,y:124.5}).wait(1).to({graphics:mask_graphics_170,x:681.5,y:124.5}).wait(1).to({graphics:mask_graphics_171,x:684.7,y:124.5}).wait(1).to({graphics:mask_graphics_172,x:687.8,y:124.5}).wait(1).to({graphics:mask_graphics_173,x:690.9,y:124.5}).wait(1).to({graphics:mask_graphics_174,x:694,y:124.5}).wait(1).to({graphics:mask_graphics_175,x:697.2,y:124.5}).wait(1).to({graphics:mask_graphics_176,x:700.3,y:124.5}).wait(1).to({graphics:mask_graphics_177,x:703.4,y:124.5}).wait(1).to({graphics:mask_graphics_178,x:706.5,y:124.5}).wait(1).to({graphics:mask_graphics_179,x:709.7,y:124.5}).wait(1).to({graphics:mask_graphics_180,x:712.8,y:124.5}).wait(1).to({graphics:mask_graphics_181,x:715.9,y:124.5}).wait(1).to({graphics:mask_graphics_182,x:719,y:124.5}).wait(1).to({graphics:mask_graphics_183,x:722.2,y:124.5}).wait(1).to({graphics:mask_graphics_184,x:725.3,y:124.5}).wait(1).to({graphics:mask_graphics_185,x:728.2,y:124.5}).wait(1).to({graphics:mask_graphics_186,x:731.1,y:124.5}).wait(1).to({graphics:mask_graphics_187,x:733.9,y:124.5}).wait(1).to({graphics:mask_graphics_188,x:736.8,y:124.5}).wait(1).to({graphics:mask_graphics_189,x:739.7,y:124.5}).wait(1).to({graphics:mask_graphics_190,x:742.6,y:124.5}).wait(1).to({graphics:mask_graphics_191,x:745.5,y:124.5}).wait(1).to({graphics:mask_graphics_192,x:748.3,y:124.5}).wait(1).to({graphics:mask_graphics_193,x:751.2,y:124.5}).wait(1).to({graphics:mask_graphics_194,x:754.1,y:124.5}).wait(1).to({graphics:mask_graphics_195,x:757,y:124.5}).wait(1).to({graphics:mask_graphics_196,x:759.8,y:124.5}).wait(1).to({graphics:mask_graphics_197,x:762.7,y:124.5}).wait(1).to({graphics:mask_graphics_198,x:765.6,y:124.5}).wait(1).to({graphics:mask_graphics_199,x:768.5,y:124.5}).wait(1).to({graphics:mask_graphics_200,x:771.4,y:124.5}).wait(1).to({graphics:mask_graphics_201,x:774.2,y:124.5}).wait(1).to({graphics:mask_graphics_202,x:777.1,y:124.5}).wait(1).to({graphics:mask_graphics_203,x:780,y:124.5}).wait(1).to({graphics:mask_graphics_204,x:782.9,y:124.5}).wait(1).to({graphics:mask_graphics_205,x:785.8,y:124.5}).wait(1).to({graphics:mask_graphics_206,x:787.3,y:124.5}).wait(1).to({graphics:mask_graphics_207,x:788.8,y:124.5}).wait(1).to({graphics:mask_graphics_208,x:790.4,y:124.5}).wait(1).to({graphics:mask_graphics_209,x:791.9,y:124.5}).wait(1).to({graphics:mask_graphics_210,x:793.4,y:124.5}).wait(1).to({graphics:mask_graphics_211,x:795,y:124.5}).wait(1).to({graphics:mask_graphics_212,x:796.5,y:124.5}).wait(1).to({graphics:mask_graphics_213,x:798,y:124.5}).wait(1).to({graphics:mask_graphics_214,x:799.5,y:124.5}).wait(1).to({graphics:mask_graphics_215,x:801.1,y:124.5}).wait(1).to({graphics:mask_graphics_216,x:802.6,y:124.5}).wait(1).to({graphics:mask_graphics_217,x:804.1,y:124.5}).wait(1).to({graphics:mask_graphics_218,x:805.7,y:124.5}).wait(1).to({graphics:mask_graphics_219,x:807.2,y:124.5}).wait(1).to({graphics:mask_graphics_220,x:808.7,y:124.5}).wait(1).to({graphics:mask_graphics_221,x:810.3,y:124.5}).wait(1).to({graphics:mask_graphics_222,x:811.8,y:124.5}).wait(1).to({graphics:mask_graphics_223,x:813.3,y:124.5}).wait(1).to({graphics:mask_graphics_224,x:814.9,y:124.5}).wait(1).to({graphics:mask_graphics_225,x:816.4,y:124.5}).wait(1).to({graphics:mask_graphics_226,x:817.9,y:124.5}).wait(1).to({graphics:mask_graphics_227,x:819.3,y:124.5}).wait(1).to({graphics:mask_graphics_228,x:820.7,y:124.5}).wait(1).to({graphics:mask_graphics_229,x:822.1,y:124.5}).wait(1).to({graphics:mask_graphics_230,x:823.5,y:124.5}).wait(1).to({graphics:mask_graphics_231,x:824.9,y:124.5}).wait(1).to({graphics:mask_graphics_232,x:826.3,y:124.5}).wait(1).to({graphics:mask_graphics_233,x:827.6,y:124.5}).wait(1).to({graphics:mask_graphics_234,x:829,y:124.5}).wait(1).to({graphics:mask_graphics_235,x:830.4,y:124.5}).wait(1).to({graphics:mask_graphics_236,x:831.8,y:124.5}).wait(1).to({graphics:mask_graphics_237,x:833.2,y:124.5}).wait(1).to({graphics:mask_graphics_238,x:834.6,y:124.5}).wait(1).to({graphics:mask_graphics_239,x:835.9,y:124.5}).wait(1).to({graphics:mask_graphics_240,x:837.3,y:124.5}).wait(1).to({graphics:mask_graphics_241,x:838.7,y:124.5}).wait(1).to({graphics:mask_graphics_242,x:840.1,y:124.5}).wait(1).to({graphics:mask_graphics_243,x:841.5,y:124.5}).wait(1).to({graphics:mask_graphics_244,x:842.9,y:124.5}).wait(1).to({graphics:mask_graphics_245,x:844.2,y:124.5}).wait(1).to({graphics:mask_graphics_246,x:845.6,y:124.5}).wait(1).to({graphics:mask_graphics_247,x:847,y:124.5}).wait(1).to({graphics:mask_graphics_248,x:848.4,y:124.5}).wait(1).to({graphics:mask_graphics_249,x:849.8,y:124.5}).wait(1).to({graphics:mask_graphics_250,x:851.4,y:124.5}).wait(1).to({graphics:mask_graphics_251,x:855.6,y:124.5}).wait(1).to({graphics:mask_graphics_252,x:859.8,y:124.5}).wait(1).to({graphics:mask_graphics_253,x:863.9,y:124.5}).wait(1).to({graphics:mask_graphics_254,x:868.1,y:124.5}).wait(1).to({graphics:mask_graphics_255,x:872.3,y:124.5}).wait(1).to({graphics:mask_graphics_256,x:876.4,y:124.5}).wait(1).to({graphics:mask_graphics_257,x:880.6,y:124.5}).wait(1).to({graphics:mask_graphics_258,x:884.8,y:124.5}).wait(1).to({graphics:mask_graphics_259,x:888.9,y:124.5}).wait(1).to({graphics:mask_graphics_260,x:893.1,y:124.5}).wait(1).to({graphics:mask_graphics_261,x:897.3,y:124.5}).wait(1).to({graphics:mask_graphics_262,x:901.4,y:124.5}).wait(1).to({graphics:mask_graphics_263,x:905.6,y:124.5}).wait(1).to({graphics:mask_graphics_264,x:909.8,y:124.5}).wait(1).to({graphics:mask_graphics_265,x:913.9,y:124.5}).wait(1).to({graphics:mask_graphics_266,x:918.1,y:124.5}).wait(1).to({graphics:mask_graphics_267,x:922.3,y:124.5}).wait(1).to({graphics:mask_graphics_268,x:926.4,y:124.5}).wait(1).to({graphics:mask_graphics_269,x:931.2,y:124.5}).wait(1).to({graphics:mask_graphics_270,x:935.9,y:124.5}).wait(1).to({graphics:mask_graphics_271,x:940.6,y:124.5}).wait(1).to({graphics:mask_graphics_272,x:945.3,y:124.5}).wait(1).to({graphics:mask_graphics_273,x:950,y:124.5}).wait(1).to({graphics:mask_graphics_274,x:954.7,y:124.5}).wait(1).to({graphics:mask_graphics_275,x:959.4,y:124.5}).wait(1).to({graphics:mask_graphics_276,x:964.1,y:124.5}).wait(1).to({graphics:mask_graphics_277,x:968.8,y:124.5}).wait(1).to({graphics:mask_graphics_278,x:973.5,y:124.5}).wait(1).to({graphics:mask_graphics_279,x:978.2,y:124.5}).wait(1).to({graphics:mask_graphics_280,x:981.1,y:124.5}).wait(1).to({graphics:mask_graphics_281,x:983.9,y:124.5}).wait(1).to({graphics:mask_graphics_282,x:986.8,y:124.5}).wait(1).to({graphics:mask_graphics_283,x:989.6,y:124.5}).wait(1).to({graphics:mask_graphics_284,x:992.5,y:124.5}).wait(1).to({graphics:mask_graphics_285,x:995.3,y:124.5}).wait(1).to({graphics:mask_graphics_286,x:998.2,y:124.5}).wait(1).to({graphics:mask_graphics_287,x:1001,y:124.5}).wait(1).to({graphics:mask_graphics_288,x:1003.9,y:124.5}).wait(1).to({graphics:mask_graphics_289,x:1006.7,y:124.5}).wait(1).to({graphics:mask_graphics_290,x:1009.6,y:124.5}).wait(1).to({graphics:mask_graphics_291,x:1012.4,y:124.5}).wait(1).to({graphics:mask_graphics_292,x:1015.3,y:124.5}).wait(1).to({graphics:mask_graphics_293,x:1018.1,y:124.5}).wait(1).to({graphics:mask_graphics_294,x:1021,y:124.5}).wait(1).to({graphics:mask_graphics_295,x:1023.8,y:124.5}).wait(1).to({graphics:mask_graphics_296,x:1026.7,y:124.5}).wait(1).to({graphics:mask_graphics_297,x:1029.8,y:124.5}).wait(1).to({graphics:mask_graphics_298,x:1034.1,y:124.5}).wait(1).to({graphics:mask_graphics_299,x:1038.4,y:124.5}).wait(1).to({graphics:mask_graphics_300,x:1042.6,y:124.5}).wait(1).to({graphics:mask_graphics_301,x:1046.9,y:124.5}).wait(1).to({graphics:mask_graphics_302,x:1051.1,y:124.5}).wait(1).to({graphics:mask_graphics_303,x:1055.4,y:124.5}).wait(1).to({graphics:mask_graphics_304,x:1059.7,y:124.5}).wait(1).to({graphics:mask_graphics_305,x:1063.9,y:124.5}).wait(1).to({graphics:mask_graphics_306,x:1068.2,y:124.5}).wait(1).to({graphics:mask_graphics_307,x:1072.5,y:124.5}).wait(1).to({graphics:mask_graphics_308,x:1076.7,y:124.5}).wait(1).to({graphics:mask_graphics_309,x:1081.3,y:124.5}).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(4,2,0,3).p("EjD9ABsIQQJsIQb4+ITYNSINmxhMAQGAgfISfzBINaIPIbWwiII6c4MAf5ghQIImcGIJCsyINcLYIP92AIS6cQMAKKgihMAKeAlpIXaxWIQQJsIQb4+ITYNSINmxhMAQGAgfISdzC");
	this.shape.setTransform(1254.2,119.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(310));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-6,326.5,250.5);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(576,54.4,1,1.128,0,0,0,64,62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.65,y:84.4},36).to({scaleY:0.39,y:100.5},32).to({regY:62.1,scaleY:2.03,y:-2.8},31).to({scaleY:1.7,y:18.3},32).to({scaleY:0.94,y:65.7},32).to({regY:62.4,scaleY:1.13,y:54.4},27).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(448,66.3,1,0.939,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.15,y:53.3},36).to({scaleY:0.94,y:66.3},32).to({scaleY:1.58,y:26.4},31).to({scaleY:0.78,y:76.4},32).to({scaleY:1.96,y:2.9},32).to({scaleY:0.94,y:66.3},27).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(320,89,1,0.575,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:62.4,scaleY:1.53,y:29.4},36).to({regY:62.5,scaleY:0.57,y:89},32).to({scaleY:1.16,y:52.5},31).to({scaleY:0.63,y:85.5},32).to({scaleY:1.65,y:22.1},32).to({scaleY:0.57,y:89},27).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(192,66.3,1,0.939,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.19,y:50.8},36).to({scaleY:1.5,y:31.4},32).to({regY:62.4,scaleY:0.62,y:86.3},31).to({regY:62.5,scaleY:1.47,y:33.3},32).to({regY:62.6,scaleY:0.62,y:86.4},32).to({regY:62.5,scaleY:0.94,y:66.3},27).wait(1));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(64,55.1,1,1.119,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.61,y:87.1},36).to({scaleY:1.12,y:55.1},32).to({scaleY:1.87,y:8.1},31).to({scaleY:0.94,y:66.1},32).to({scaleY:2.3,y:-18.4},32).to({scaleY:1.12,y:55.1},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,640,141);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(576,54.4,1,1.128,0,0,0,64,62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.65,y:84.4},31).to({scaleY:0.39,y:100.5},32).to({regY:62.1,scaleY:2.03,y:-2.8},31).to({scaleY:1.7,y:18.3},32).to({scaleY:0.94,y:65.7},32).to({regY:62.4,scaleY:1.13,y:54.4},32).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(448,66.3,1,0.939,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.15,y:53.3},31).to({scaleY:0.94,y:66.3},32).to({scaleY:1.58,y:26.4},31).to({scaleY:0.78,y:76.4},32).to({scaleY:1.96,y:2.9},32).to({scaleY:0.94,y:66.3},32).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(320,89,1,0.575,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:62.4,scaleY:1.53,y:29.4},31).to({regY:62.5,scaleY:0.57,y:89},32).to({scaleY:1.16,y:52.5},31).to({scaleY:0.63,y:85.5},32).to({scaleY:1.65,y:22.1},32).to({scaleY:0.57,y:89},32).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(192,66.3,1,0.939,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.19,y:50.8},31).to({scaleY:1.5,y:31.4},32).to({regY:62.4,scaleY:0.62,y:86.3},31).to({regY:62.5,scaleY:1.47,y:33.3},32).to({regY:62.6,scaleY:0.62,y:86.4},32).to({regY:62.5,scaleY:0.94,y:66.3},32).wait(1));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(64,55.1,1,1.119,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.61,y:87.1},31).to({scaleY:1.12,y:55.1},32).to({scaleY:1.87,y:8.1},31).to({scaleY:0.94,y:66.1},32).to({scaleY:2.3,y:-18.4},32).to({scaleY:1.12,y:55.1},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,640,141);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(2177.9,156.1,1.04,1.04,0,0,180,300,150.1);

	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(1557,156.1,1.04,1.04,0,0,0,300,150.1);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(933,156.1,1.04,1.04,0,0,180,300,150.1);

	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(312,156.1,1.04,1.04,0,0,0,300,150.1);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2489.9,312);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 - копия
	this.instance = new lib.Символ6копия3();
	this.instance.setTransform(1253.2,155.2,1,1,0,0,0,1254.2,119.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-613.3},309).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,2525,356.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/ABLIAAiVMBj/AAAIAACVg");
	this.shape.setTransform(320.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(310));

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(934.5,156,1,1,0,0,0,934.5,156);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-309.5},309).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2489.9,312);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn_green = new lib.Символ19();
	this.btn_green.setTransform(91.2,25.7,1,1,0,0,0,91.2,25.7);

	this.timeline.addTween(cjs.Tween.get(this.btn_green).wait(29).to({regY:25.6,scaleX:0.97,scaleY:0.97,y:25.6},4,cjs.Ease.get(-1)).to({regY:25.7,scaleX:1,scaleY:1,y:25.7},5,cjs.Ease.get(1)).to({regY:25.6,scaleX:0.97,scaleY:0.97,y:25.6},5,cjs.Ease.get(-1)).to({regY:25.7,scaleX:1,scaleY:1,y:25.7},5,cjs.Ease.get(1)).to({regY:25.6,scaleX:0.97,scaleY:0.97,y:25.6},5,cjs.Ease.get(-1)).to({regY:25.7,scaleX:1,scaleY:1,y:25.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,52.9);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.btn_red = new lib.Символ20();
	this.btn_red.setTransform(91.2,26.4,1,1,0,0,0,91.2,26.4);

	this.timeline.addTween(cjs.Tween.get(this.btn_red).to({scaleX:0.97,scaleY:0.97},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:0.97},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.5,52.9);


// stage content:



(lib.binarium_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		var _this = this;
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.btn_green_2.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.btn_green_2.btn_green.gotoAndPlay(1);
		}
		
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.btn_green_2.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.btn_green_2.btn_green.gotoAndPlay(10);
		}
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.btn_red_2.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2()
		{
			_this.btn_red_2.btn_red.gotoAndPlay(1);
		}
		
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.btn_red_2.addEventListener("mouseout", fl_MouseOutHandler_2);
		
		function fl_MouseOutHandler_2()
		{
			_this.btn_red_2.btn_red.gotoAndPlay(10);
		}
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.btn_green_2 = new lib.Символ31();
	this.btn_green_2.setTransform(529.3,104.9,1,1,0,0,0,91.2,26.4);

	this.btn_red_2 = new lib.Символ29();
	this.btn_red_2.setTransform(529.3,193.6,1,1,0,0,0,91.2,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_red_2},{t:this.btn_green_2}]}).wait(1));

	// Слой 7
	this.instance = new lib.Символ18();
	this.instance.setTransform(314.2,276.2,0.809,0.809,0,0,0,183.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(135.6,151.4,1.974,1.974,0,0,0,27.6,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(117.6,37.9,0.761,0.761,0,0,0,132.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,2,0,3).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");
	this.shape.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(565,150.8,1,1,180,0,0,75,182);

	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(74,150.8,1,1,0,0,0,75,182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 1 - копия
	this.instance_5 = new lib.Символ2копия();
	this.instance_5.setTransform(312,151,1,1,0,0,0,312,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(312,151,1,1,0,0,0,312,156);
	this.instance_6.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 2
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(64,264.8,1,0.677,0,0,0,64,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 2 - копия
	this.instance_8 = new lib.Символ5копия();
	this.instance_8.setTransform(64,249.2,1,0.925,0,0,0,64,62.4);
	this.instance_8.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(305,121.3,2525,364.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
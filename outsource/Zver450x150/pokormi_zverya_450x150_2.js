(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 450,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/angry_03.png?1469520799384", id:"angry_03"},
		{src:"images/angry_07.png?1469520799384", id:"angry_07"},
		{src:"images/angry_10.png?1469520799384", id:"angry_10"},
		{src:"images/angry_12.png?1469520799384", id:"angry_12"},
		{src:"images/bone.png?1469520799384", id:"bone"},
		{src:"images/btn.png?1469520799384", id:"btn"},
		{src:"images/cube.png?1469520799384", id:"cube"},
		{src:"images/fish.png?1469520799384", id:"fish"},
		{src:"images/good_03.png?1469520799384", id:"good_03"},
		{src:"images/good_06.png?1469520799384", id:"good_06"},
		{src:"images/good_10.png?1469520799384", id:"good_10"},
		{src:"images/good_12.png?1469520799384", id:"good_12"},
		{src:"images/good_13.png?1469520799384", id:"good_13"},
		{src:"images/gwregw.jpg?1469520799384", id:"gwregw"},
		{src:"images/nimb.png?1469520799384", id:"nimb"}
	]
};



// symbols:



(lib.angry_03 = function() {
	this.initialize(img.angry_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,78);


(lib.angry_07 = function() {
	this.initialize(img.angry_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,169);


(lib.angry_10 = function() {
	this.initialize(img.angry_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,169);


(lib.angry_12 = function() {
	this.initialize(img.angry_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,235);


(lib.bone = function() {
	this.initialize(img.bone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,214,56);


(lib.cube = function() {
	this.initialize(img.cube);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.fish = function() {
	this.initialize(img.fish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.good_03 = function() {
	this.initialize(img.good_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,140);


(lib.good_06 = function() {
	this.initialize(img.good_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,75);


(lib.good_10 = function() {
	this.initialize(img.good_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,172);


(lib.good_12 = function() {
	this.initialize(img.good_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,103);


(lib.good_13 = function() {
	this.initialize(img.good_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,86);


(lib.gwregw = function() {
	this.initialize(img.gwregw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,550);


(lib.nimb = function() {
	this.initialize(img.nimb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,122);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4rMbIAA41MAxXAAAIAAY1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-79.5,316.1,159.1);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gwregw();
	this.instance.setTransform(-278.3,-647.2,1.822,1.822);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.3,-647.2,1002,1002);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlKCmQg9AAgSgFQgigJAAghIACg1QAEgzAEgpQAOiIATgDQAJgCAHAHQAEAEAHALQAHAOAFABQAJACAvAAQAvAAAIgCQAFgBAHgOQAHgLAEgEQAHgHAJACQAIABAGASQAKAgAJBYQAKBoAAApQAAAhgiAJQgSAFg9AAgAmPidQgMAEgNB7QgLBnAAAuQAAAOAHAIQAGAIAPAEQASAFA7AAIAxAAQA7AAASgFQAPgEAGgIQAHgIAAgOQAAgugLhnQgNh7gMgEQgIgBgKARQgKARgHACQgIACgyAAQgzAAgIgCQgHgCgKgRIgHgMQgEgEgFAAIgCAAgAhdCMQgRgLgGgUIAXgKQAJAdAZAAQAbAAAAgYQAAgYghAAIgKAAIAAgWIAKAAQAZAAAAgWQAAgKgGgGQgGgFgKAAQgTAAgHAUIgVgIQAGgSAOgJQALgFAPAAQAWAAANAKQAMAMAAATQAAATgPAMQAXAKAAAbQAAAVgPAMQgPAMgZAAQgQAAgOgJgAGjCTIAAg4IgSAAIgaA4IgbAAIAeg9QgcgNAAgeQAAgXARgNQAPgKAXAAIAnAAIAACWgAF3ArQAAAZAeAAIAOAAIAAgyIgOAAQgeAAAAAZgAD0CTIAAiWIAnAAQA2AAAAAyQAAA0g2AAIgNAAIAAAwgAEOBMIAKAAQAQAAAHgFQAJgGAAgSQAAgSgJgGQgHgFgQAAIgKAAgACKCTIAAiWIBSAAIAAAVIg5AAIAAAnIArAAIAAAXIgrAAIAAAsIA5AAIAAAXgAAMCTIAAiWIAtAAQAwAAAAAoQAAAUgOAJQAWAMAAAZQAAAsg8AAgAAmB9IAXAAQAaAAAAgWQAAgXgaAAIgXAAgAAmA6IASAAQAXAAAAgVQAAgUgXAAIgSAAgAlkAkQgUgEgLgFQgNgFgHgPQgGgNAFgPQAEgMARAAIAIABIADABIABADQABAJACAHQADAHADAAQALAAADgWIAAgEIAFAAQATADAXAAQAWAAATgDIAFAAIAAAEIADALQAEALAHAAQADAAADgHQACgIABgIIABgDIADgBIAIgBQASAAADAMQAFAOgGAOQgHAPgNAFQgLAFgWAEQgaAFgYAAQgXAAgagFgACEgnQgFgKAAgXIAAgdQAAgXAFgKQAHgNASAAQATAAAHANQAFAKAAAXIAAAdQAAAXgFAKQgHANgTAAQgSAAgHgNgACMiEQgFAIAAAXIAAAdQAAAXAFAIQAFAHAMAAQANAAAEgHQAGgIAAgXIAAgdQAAgXgGgIQgEgHgNAAQgMAAgFAHgAgPgnQgGgKAAgXIAAgdQAAgXAGgKQAHgNAQAAQATAAAHANQAFAKAAAXIAAAdQAAAXgFAKQgHANgTAAQgQAAgHgNgAgHiEQgFAIAAAXIAAAdQAAAXAFAIQAFAHAKAAQANAAAEgHQAGgIAAgXIAAgdQAAgXgGgIQgEgHgNAAQgKAAgFAHgAG0gdIABhkIgvBkIgJAAIAAh0IAJAAIgCBlIAvhlIAJAAIAAB0gAFdgdIABhjIgaBJIgKAAIgahJIABBjIgIAAIAAh0IAJAAIAdBQIAdhQIAJAAIAAB0gADRgdIAAh0IAVAAQAhAAAAApQAAAVgHAJQgIALgSAAIgMAAIAAAigADahGIAMAAQAMAAAGgGQAHgIAAgUQAAgTgHgIQgGgGgMAAIgMAAgABrgdIgbg2IgMAAIAAA2IgIAAIAAh0IAIAAIAAA3IAMAAIAbg3IAKAAIgeA6IAeA6gAgygdIAAhsIgnAAIAABsIgIAAIAAh0IA4AAIAAB0gAkEg/QgEgFAAgGQAAgGAEgEQAEgEAGAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEgAkBhKQAAAHAHAAQAHAAAAgHQAAgHgHAAQgHAAAAAHgAl5g/QgEgFAAgGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgGAAQgGAAgEgEgAl2hKQAAAHAHAAQAHAAAAgHQAAgHgHAAQgHAAAAAHg");
	this.shape.setTransform(44.5,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,33.4);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214,56);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.setTransform(0,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.5,214,56);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bone();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("ArtkSIXbAAIAAIlI3bAAg");
	this.shape.setTransform(75,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,152,57);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AF6CwIAXh6IALAAIgDAMQAGgGAHgEQAHgDAIAAQAGAAAGACQAEACADAEQADAEABAGQABAFABAGQgBAJgCALQgCALgFAIQgEAJgIAHIgIADQgFACgGAAQgIAAgGgEQgGgDgDgGIAAAAIgKAvgAGpBAIgHAEQgFAEgEAIQgEAHgBAIQgCAIAAAHIABAIIADAHQACACADACQAEACAEAAIAIgBQAFgBACgCQAGgGADgHQAEgGACgJIABgPQAAgKgEgFQgCgDgDgBIgIgBIgIAAgAneCwIAYh6IALAAIgCAMQAFgGAHgEQAHgDAIAAQAHAAAEACQAFACADAEQADAEACAGIABALQAAAJgCALQgDALgEAIQgFAJgIAHQgDACgGABQgEACgGAAQgIAAgFgEQgHgDgDgGIAAAAIgKAvgAmuBAIgHAEQgFAEgDAIQgEAHgCAIIgCAPIABAIIADAHQACACADACQAEACAFAAIAIgBQAEgBADgCQAFgGAEgHIAFgPIABgPQAAgKgEgFQgCgDgDgBIgIgBIgIAAgAhOCHIAJgGIAIgHQADgEACgIIAFgSIAHgmIA3AAIgPBXIgKAAIAOhNIgjAAIgGAdQgDANgDAJQgDAJgEAFQgEAGgGADQgFAEgHABgADtCMQgFgBgFgCQgEgEgDgEQgCgFAAgHIAAgFIAHgfQAAgFADgFQADgGAFgDQAFgFAGgBQAIgDAIAAQAHAAAFACQAGABADADQAEAEACADIABAHQAAAGgDAFQgEAGgGACQAHACADAFQADAEAAAGQAAAHgDAFQgDAHgGAEQgGAFgHACQgHADgKABQgGgBgGgCgAD7BBIgIAFQgEADgBADIgCAHIgHAbIAAAEQAAAJAGAFQAFAEAJAAQAHAAAGgCQAGgCAEgDQADgEADgDQACgFAAgDQAAgGgFgDQgDgDgJAAIgNAAIACgLIAKAAQAIAAAFgDQAEgEAAgFQAAgFgEgEQgFgDgIAAQgHAAgEACgAiKCLQgFgCgEgFQgEgEgBgFQgCgFAAgGQAAgJADgKQACgKAGgJQAEgHAIgFQAEgDAFgBQAEgBAFAAIAIABQAEABADACIAGAFIAEAIIABAAIABgQIgBgNQgBgGgDgEQgDgEgEgCQgGgDgHAAIgKABIgKACIgDgJIANgDIALgBQAJAAAHADQAGADAEAFQAIAKAAAVIAAAPIgDASQgCAKgEAJQgDAJgFAHQgFAIgHAEQgIAEgJABQgJgBgHgDgAh/BIQgGAFgEAHQgDAGgBAIIgCANIABAIQABADACAEQADADAEABQAEACAGAAQAIAAAFgEQAHgEADgHQADgHACgHIACgPQAAgJgFgFQgDgDgEgCQgEgBgFgBQgJABgFAEgAIzCGQgHgJADgQIALg3IAKAAIgKA2IgBAKQABAEACADQAEAHAMgBQAFAAAEgCQAFgBAEgDIAGgIQACgFABgFIALg1IALAAIgRBXIgMAAIAEgMIgBAAQgGAHgHADQgHADgIAAQgOAAgGgIgAHhCHQgEgFgBgGQgCgFAAgIQAAgKADgKQACgLAFgIIAGgIQADgDAEgDIAKgEIAKgBIANABQAFACAEADQAIAGAAALQAAAFgDAGQgBAFgHAEQgFAEgKACQgPACgKAAIgKAAIgBAHQAAAFABAFIAEAGIAGAEIAIABIANgDIALgFIAFAIQgFAFgJACQgIADgIAAQgPAAgHgHgAH4BBQgFADgDAFQgEAEgCAGIgDALIALABQAMAAAHgCQAIgCAEgCQAEgDABgDIABgGQAAgHgEgEQgGgDgIAAQgIAAgFACgAE4CHQgDgFgCgGQgBgFAAgIQAAgKACgKQADgLAFgIIAFgIIAIgGIAJgEIALgBIANABQAFACAEADQAHAGABALQgBAFgCAGQgCAFgGAEQgGAEgJACQgQACgKAAIgKAAIgBAHQAAAFABAFIAEAGIAGAEIAJABIAMgDIAMgFIAFAIQgGAFgIACQgJADgHAAQgPAAgIgHgAFQBBQgFADgEAFQgDAEgDAGIgDALIALABQANAAAHgCQAHgCAFgCQAEgDABgDIABgGQAAgHgFgEQgFgDgJAAQgHAAgFACgACTCLQgHgCgFgFIAHgIQADADAGACQAGADAHAAQAOAAAFgFIAGgHIABgIQAAgGgFgDQgFgEgHABIgKAAIABgKIASAAIAHgDIAEgFQABgDAAgEQABgGgGgDQgFgDgIAAQgGAAgGACQgGACgEADIgHgIQAHgFAIgCQAIgCAIAAQAPAAAGAFQAEADABAEQACAEAAAFIgBAFQgBADgCACQgBADgDADQgEADgFABQAIADACAFQADAFAAAFQAAAHgDAFQgCAFgFAEQgEAEgHACQgGADgKAAQgKAAgIgDgAkHCLQgFgCgDgDQgDgFgBgFIgBgNIAAgMIADgOQACgGAEgGQAEgGAEgEQAFgFAGgCQAFgDAIAAIAGAAIAIADIAEAEQADACABAEIABAAIACgMIAKAAIgQBXIgLAAIADgMIgCAAQgFAGgGAEQgGADgIAAQgHAAgFgDgAj6BEQgFAGgEAHQgFAHgBAJIgBAOIABAIIADAGQACADADABQAEACAFAAQAIAAAGgEQAGgGAEgHQADgHACgIQACgJAAgGQABgKgFgFQgEgHgKABQgJgBgGAGgAoYCMQgGgCgDgDQgEgEgDgGQgCgFAAgIQAAgMACgKQADgLAFgIQAGgJAIgFIAKgDIAKgBQAGAAAGACQAFACAEAEQAFAEACAGQACAFAAAHQAAAKgCALQgCALgFAIQgGAJgHAFQgIAFgNAAQgHAAgGgCgAoIBAIgHADQgGAGgDAHQgEAHgCAIIgBAQIABAHQABAEACADQADADADACQAEACAGAAIAIgBIAHgDQAGgFADgGQAEgHACgJIACgRQgBgFgBgFIgEgHIgHgDIgIgBIgIABgABGCNIAHgmIgYAAQgGAAgGACQgFADgDAJIgKAYIgLAAIAKgZIAGgLQAEgEAGgBQgHgDgCgFQgDgFAAgGQAAgGACgFQACgFAEgEIAJgFQAFgCAHAAIAqAAIgQBXgAAxBBQgEAAgDACIgEAHQgBACAAAGQAAAFAEAEQAGADAHAAIAZAAIAGgeIgdAAIgHABgAk4CNIAMhAIgkAzIgJAAIgRgzIgMBAIgKAAIAQhXIALAAIATA+IAsg+IAKAAIgRBXgApICNIgDgbQAAgIgEgDQgEgDgFABIgUAAIgIAoIgLAAIARhXIAMAAIgIAmIAVgBIAGgBIAEgFIAFgGIAMgZIANAAIgOAYQgCAGgEAFQgEAEgGABQAHACABAFQACAEABAHIADAdgAJUAkQgEgCgDgDQgDgEAAgDIAAgHIAKAAQgBAFADAEQADADAGAAQAHAAAEgEQAFgDABgFIAKAAIgDAHQgCAEgEADQgDADgFACQgFACgGAAQgHAAgDgCgAnZgPIAXh7IALAAIgDANQAGgHAHgDQAHgDAJgBQAFAAAGACQAEADADAEQADAEABAFQACAGgBAFQABAKgDALQgCAKgFAJQgEAJgIAGIgIAFIgLAAQgHAAgHgCQgGgEgEgHIAAABIgJAvgAmqh/QgEABgDADQgGAFgDAGQgEAIgBAIQgCAHAAAHIABAIIADAHQACADAEACQACABAGABIAHgBIAHgEQAHgFACgHQAEgHACgIIABgPQAAgKgEgFQgCgDgDgCQgEgBgFAAIgHABgAGZgyQgGgCgFgDQgDgDgDgFQgCgFgBgGIAAgFIAHggQABgEADgGQADgFAEgEQAFgEAHgCQAHgCAIgBQAHAAAGACQAFACAEAEIAFAGIABAHQAAAFgDAGQgDAGgHABQAIADACAEQADAFAAAGQAAAGgDAHQgDAFgFAFQgGAFgIADQgHACgKAAQgGAAgFgBgAGmh+QgFACgDADIgFAHIgCAGIgGAaIgBAFQABAJAFAEQAGAFAIAAQAHAAAGgCQAGgCAEgEQAEgDACgEQACgDAAgFQAAgFgEgEQgDgDgKAAIgMAAIACgKIAKAAQAHAAAFgDQAEgFABgEQgBgFgEgDQgFgFgIAAQgHABgEACgAhJgzQgFgDgFgFIgEgJQgCgFAAgGQAAgKADgKQACgKAFgHQAFgIAIgFIAIgEIAKgBIAHABIAIADIAGAFQACADACAEIABAAIAAgPIAAgNQgCgGgCgEQgDgEgFgDQgFgCgHgBIgKABIgLAEIgCgJQAGgEAGgBIALgBQAJABAHACQAGADAEAFQAJALgBAVIAAAOIgCASIgGATQgDAKgFAGQgFAIgIAFQgHAEgKAAQgIAAgHgCgAg+h3QgHAFgDAHQgDAGgCAHIgBAOQgBAEACADQAAAFADACQADADADADQAFABAFAAQAJAAAGgEQAFgFAEgGQAEgHABgHQACgJAAgGQAAgJgFgGQgDgDgEgBIgJgBQgJgBgFAFgAlmgyQgGgCgEgDQgEgDgDgFQgCgFAAgGIAAgFIAGggQABgEADgGQADgFAFgEQAEgEAHgCQAGgCAJgBQAIAAAFACQAGACADAEIAFAGIACAHQAAAFgEAGQgDAGgHABQAIADACAEQADAFABAGQAAAGgEAHQgCAFgHAFQgFAFgHADQgIACgKAAQgFAAgGgBgAlZh+QgFACgDADIgFAHIgDAGIgFAaIAAAFQgBAJAGAEQAFAFAJAAQAHAAAGgCQAGgCAEgEQAEgDABgEQADgDAAgFQAAgFgEgEQgEgDgIAAIgOAAIACgKIAKAAQAJAAAEgDQAFgFgBgEQABgFgFgDQgEgFgKAAQgFABgFACgAI3g6QgIgIADgQIALg4IALAAIgKA2QgBAGAAAEQABAFACADQAEAGALAAQAGAAAEgBQAFgCADgEIAGgIQADgEABgGIALg1IAKAAIgRBYIgLAAIADgMIgBAAQgFAHgIADQgIACgGAAQgOAAgGgIgAE+gzQgFgCgDgFQgDgEgBgFIgBgMIABgNIADgNQACgIAEgFQACgGAGgFQAEgEAGgDQAGgCAHgBIAHABIAHACIAEAFIAFAGIAAAAIADgNIAKAAIgRBYIgLAAIACgLIAAgBQgFAGgHAEQgFACgJAAQgHAAgFgBgAFMh7QgHAFgDAHQgEAIgBAIIgBAPIABAHIACAHQACADAEACQADABAFAAQAJAAAFgFQAHgEADgIQAEgHACgJIABgOQAAgKgDgFQgFgHgKAAQgIAAgGAGgABZg6QgEgFgCgGQgCgHAAgHQAAgKADgLQADgKAFgHQAGgIAKgFQAIgEAMgBQAHABAHACQAHADAFAFIgJAIQgEgEgEgCQgFgCgFAAQgJAAgHAEQgHADgDAHQgEAGgDAIQgCAIAAAIQAAAMAGAGQACADAEACIALABQAFAAAGgCIAKgGIAFAIQgGAFgHADQgIACgIAAQgQAAgHgIgAAPgzQgGgCgEgEQgEgEgBgFQgBgGAAgHQAAgMABgLQACgKAGgJQAFgHAIgGIAJgEIAKgBQAHAAAGACIAKAGQADAFACAFQADAFAAAIQgBALgCAKQgCAKgEAJQgGAIgIAFQgHAGgMgBQgJAAgFgBgAAeiAIgHAFQgFAFgEAGQgDAIgBAJQgCAIAAAHIABAGIADAHQACAEAEACQADACAHAAQAFAAADgBQADgBADgCQAHgFADgHQAEgGABgJQACgJAAgIQAAgGgCgEQgBgEgCgCIgHgFIgIgBIgJABgAjCg6QgEgFgCgGQgBgHAAgHQAAgKADgLQADgKAFgHQAGgIAJgFQAIgEAMgBQAHABAIACQAHADAEAFIgJAIQgDgEgFgCQgFgCgFAAQgIAAgIAEQgGADgEAHQgEAGgCAIQgCAIAAAIQAAAMAGAGQACADAEACIALABQAFAAAFgCIAKgGIAGAIQgHAFgHADQgIACgHAAQgRAAgHgIgAkbg6QgHgIAEgQIALg4IAKAAIgKA2QgCAGABAEQAAAFACADQAFAGAMAAQAEAAAFgBQAFgCADgEIAHgIQACgEABgGIAKg1IALAAIgRBYIgLAAIACgMQgFAHgIADQgIACgHAAQgNAAgHgIgAoag5QgEgEgCgGQgCgGABgHQgBgKADgLQADgKAEgJIAHgHIAHgGQAEgDAFgBQAFgBAGgBQAHABAFABQAGACADADQAJAGgBALQAAAFgCAGQgCAEgGAFQgGAEgKACQgOACgLABIgKAAIgBAGQAAAFABAFQACAEADACQACADADABQAEABAEAAIAOgCIALgGIAFAIQgGAFgIACQgJACgIAAQgPAAgGgHgAoEh+QgEADgEAFQgDAEgCAGIgEALIAMABQAMgBAHgBQAIgCADgDQAEgCACgEIABgFQAAgHgFgDQgFgFgIAAQgIABgGACgApjgyIgIgDQgIgEgEgGQgFgGgBgJQgCgIADgJIAHgjQABgJAEgIQADgIAHgFQAGgHAJgDQAHgEALAAQAPABAJAGQAFADADAFIAFAKIgLAEQgCgIgHgFQgEgCgEgBQgDgCgFAAQgJAAgHADQgGADgFAFQgEAEgDAHQgDAGgBAGIgHAiQgBAHABAGQAAAHADAEQADAFAFADQAGACAJABQAKAAAIgGQAJgFAFgJIALAFQgHANgMAGIgMAGIgNAAgAIQgyIgCgbQgBgJgDgCQgEgDgGAAIgTAAIgIApIgMAAIARhYIAMAAIgHAmIAVAAIAFgCIAFgDIAFgIIAMgZIAMAAIgNAZQgCAHgFADQgDAFgGABQAHACABAEIADAMIADAdgAEJgyIALg2IABgJQAAgFgCgDQgCgDgDgCQgEgCgGAAQgGAAgEACIgJAFIgGAIIgFAKIgKA1IgLAAIALg2IABgJQAAgEgCgEQgCgDgDgCQgEgCgHAAQgFAAgEACQgFABgDAEQgEADgDAFQgDAEgBAGIgKA1IgKAAIAQhYIALAAIgCANIAAAAQAGgHAHgEQAHgDAIAAQAKAAAFAFQAGADACAIIABAAQAHgJAHgDQAJgDAIgBQAHABAFACQAGACACAFQADAEACAFQAAAHAAAGIgMA5g");
	this.shape.setTransform(64.1,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.1,35.4);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57307B").s().p("AhZA7IAAgnICzAAIAAAngAhZgTIAAgnICzAAIAAAng");
	this.shape.setTransform(9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,11.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57307B").s().p("AlzCFIAAgpIhyAAIAAApIggAAIAAhJIATgEIAHgJQAEgFABgHQADgHABgLIAFhjIB4AAIAACMIASAAIAABLgAnAAbIgDAQQgDAIgEAHIA/AAIAAhoIgwAAgAkbBYQgNgGgIgJQgIgKgFgMQgEgMAAgOIAAgnQAAgOAEgMQAFgNAIgKQAIgJANgFIAOgFQAIgBAIAAIAPABIANAFQANAEAJAJQAJAKAFAMQAFANAAAPIAAAnQAAAPgFANQgFANgJAJQgJAJgNAFQgNAEgPABQgRgBgNgFgAkKgsQgGACgDAEQgEAFgBAEQgCAGAAAFIAAAuQAAAFACAGQABAFAEAEQADAEAGACQAFADAIAAQAGAAAGgCQAGgCADgEQAIgJAAgMIAAguQAAgLgIgJQgHgIgOAAQgIAAgFACgAHfBcIAAhoIgBAAIhGBoIgjAAIAAiuIAnAAIAABsIABAAIBJhsIAgAAIAACugAErBcIAAiuIAnAAIAACugACVBcIAAiuIAnAAIAABEIAkAAQAQAAALAEQALAFAHAFQAIAIAEAIQAEAKAAAKQAAAagQAPQgJAIgLADQgLAEgPAAgAC8A5IAjAAQAFAAAFgBQAEgCADgDQAGgGgBgHQABgIgGgGQgFgGgMAAIgjAAgAgCBcIAAiuIBGAAQANAAAMAFQALADAJAIQAHAGAFALQAFAKAAANQgBANgFAKQgEAHgIAJQgJAGgLAFQgKAEgNAAIgjAAIAABAgAAigFIAhAAQAKAAAGgGQAHgGAAgJQAAgLgGgEQgGgGgMAAIggAAgAihBcIAAiuIB1AAIAAAjIhOAAIAAAhIAkAAQAPAAAMAEQALAFAIAFQAIAIAEAIQADAKAAAKQAAAagQAPQgIAIgMADQgLAEgPAAgAh6A5IAjAAQAGAAAEgBQAFgCACgDQAGgGAAgHQAAgIgGgGQgEgGgNAAIgjAAgAGshfQgHgFgFgGQgEgGgCgHIgDgNIAZAAIABAFIADAGIAEAEQADACADAAQADAAADgCIAFgEIACgGIABgFIAZAAIgCANQgCAHgFAGQgFAGgHAFQgHADgLAAQgLAAgHgDg");
	this.shape.setTransform(51.9,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.7,26.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57307B").s().p("AnqBtQgZgQgLgcIAygUQAEALANAIQAMAKAQgBQAQAAAMgHQAFgEADgGQACgFABgHQgBgNgIgGQgKgHgNAAIgfAAIAAgrIAhAAQAMAAAJgHQAIgGAAgLQAAgGgDgFQgDgEgEgDIgKgEIgMgBQgRAAgMAIQgLAIgGALIgugYQANgYAWgOQAWgPAjgBQASAAAQAEQAPAFAMAIQALAIAHAMQAHANAAARIgBANQgCAHgEAHQgEAHgGAHQgHAGgLAEIAAACQAKADAIAFQAGAGAFAIQAEAHACAJIACAOQAAAKgCAIQgCAJgFAHQgIAOgMAJQgNAJgSAEQgRAEgRABQgjAAgYgPgAFSB6IAAjyIA2AAIAABeIAyAAQAVAAAQAGQAPAGALAKQALAIAFAOQAFAMAAAOQABAlgXAUQgMALgPAFQgQAFgUAAgAGIBJIAwAAQAJABAFgCQAHgDADgEQAIgIAAgKQAAgLgIgIQgHgIgRAAIgwAAgAB+B6IAAjyIBkAAQATAAAQAGQAPAFAMALQALAJAGAPQAGAPAAARQABARgIAOQgGAMgMAKQgKAKgQAHQgPAFgSAAIgvAAIAABZgAC0gNIAtAAQANAAAJgIQAKgIgBgNQAAgPgIgHQgJgIgQABIgrAAgAhNB6IAAjyICqAAIAAAxIh0AAIAAAxIBjAAIAAAsIhjAAIAAAzIB0AAIAAAxgAksB6IAAjyIBnAAQATABAPAFQAPAFALAIQAKAKAGANQAEANAAAOQAAANgGAOQgIANgQAIIAAABQAIACAHAFQAGAHAFAHQAEAHACAIQACAIABAHQgBARgGAOQgGANgKAJQgKAJgOAGQgOAFgQAAgAj2BJIAuAAQARABAIgJQAHgHAAgLIgBgKQgDgFgDgEQgEgEgGgCQgHgCgIAAIguAAgAj2gXIAqAAQARABAGgJQAIgHgBgLQABgKgIgGQgGgHgRABIgqAAg");
	this.shape.setTransform(52.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.4,24.8);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57307B").s().p("AnqBtQgZgQgLgcIAygUQAEALANAIQAMAKAQgBQAQAAAMgHQAFgEADgGQACgFABgHQgBgNgIgGQgKgHgNAAIgfAAIAAgrIAhAAQAMAAAJgHQAIgGAAgLQAAgGgDgFQgDgEgEgDIgKgEIgMgBQgRAAgMAIQgLAIgGALIgugYQANgYAWgOQAWgPAjgBQASAAAQAEQAPAFAMAIQALAIAHAMQAHANAAARIgBANQgCAHgEAHQgEAHgGAHQgHAGgLAEIAAACQAKADAIAFQAGAGAFAIQAEAHACAJIACAOQAAAKgCAIQgCAJgFAHQgIAOgMAJQgNAJgSAEQgRAEgRABQgjAAgYgPgAFSB6IAAjyIA2AAIAABeIAyAAQAVAAAQAGQAPAGALAKQALAIAFAOQAFAMAAAOQABAlgXAUQgMALgPAFQgQAFgUAAgAGIBJIAwAAQAJABAFgCQAHgDADgEQAIgIAAgKQAAgLgIgIQgHgIgRAAIgwAAgAB+B6IAAjyIBkAAQATAAAQAGQAPAFAMALQALAJAGAPQAGAPAAARQABARgIAOQgGAMgMAKQgKAKgQAHQgPAFgSAAIgvAAIAABZgAC0gNIAtAAQANAAAJgIQAKgIgBgNQAAgPgIgHQgJgIgQABIgrAAgAhNB6IAAjyICqAAIAAAxIh0AAIAAAxIBjAAIAAAsIhjAAIAAAzIB0AAIAAAxgAksB6IAAjyIBnAAQATABAPAFQAPAFALAIQAKAKAGANQAEANAAAOQAAANgGAOQgIANgQAIIAAABQAIACAHAFQAGAHAFAHQAEAHACAIQACAIABAHQgBARgGAOQgGANgKAJQgKAJgOAGQgOAFgQAAgAj2BJIAuAAQARABAIgJQAHgHAAgLIgBgKQgDgFgDgEQgEgEgGgCQgHgCgIAAIguAAgAj2gXIAqAAQARABAGgJQAIgHgBgLQABgKgIgGQgGgHgRABIgqAAg");
	this.shape.setTransform(52.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.4,24.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57307B").s().p("AogCcQgKgCgJgEQgSgHgLgMQgMgNgGgRQgGgSAAgVIAAg5QAAgRAGgRQAGgRAMgOQALgNASgHQAJgEAKgCQAKgCAMAAQAjAAAYARQAXARAJAcIgzASQgDgMgKgJQgFgEgHgDQgHgCgIAAQgKAAgHAEQgIADgFAGQgFAFgCAHQgDAIAAAFIAABCQAAAIADAHQACAIAFAFQAFAGAIADQAHAEAKAAQAQAAALgJQAKgIADgOIAzAUQgFAOgIAMQgIALgMAIQgXAQgjAAgAIzCbIAAiTIgBAAIhiCTIgwAAIAAjxIA2AAIAACWIABAAIBliWIAtAAIAADxgAE5CbIAAjxIA2AAIAADxgABqCbIAAjxIA2AAIAABbIAyAAQAVAAAQAGQAPAGALAKQAKALAFANQAGAMAAAOQAAAlgXAVQgLAKgQAFQgQAFgUAAgACfBrIAwAAQAJAAAGgCQAGgCAEgEQAHgJAAgKQAAgLgHgIQgIgIgRAAIgwAAgAgqCbIAAjBIhDAAIAAgwIC5AAIAAAwIhCAAIAADBgAi9CbIAAjxIA2AAIAADxgAmNCbIAAjxIA2AAIAABbIAyAAQAVAAAQAGQAQAGAKAKQALALAFANQAFAMAAAOQAAAlgWAVQgMAKgPAFQgQAFgUAAgAlXBrIAwAAQAIAAAGgCQAHgCADgEQAIgJAAgKQAAgLgIgIQgHgIgRAAIgwAAgAHshpQgKgGgGgJQgGgIgDgKIgEgSIAjAAIABAIIAEAHIAGAGQADADAFAAQAFAAAEgDIAGgGIAEgHIABgIIAjAAIgEASQgDAKgGAIQgGAJgLAGQgKAFgPAAQgPAAgKgFg");
	this.shape.setTransform(61.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.5,31.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nimb();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,122);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.good_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,75);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.good_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,172);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.good_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,140);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.good_13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,86);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.good_12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,103);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57307B").s().p("AiwBlQgEgDAAgFQAAgFAEgEQADgDAFAAIAEABIA6hmQAJAXAVAFIAHABQAQAAAPgNQAOgPAHgXIAFgUIANgBQAwAAAiAZQAiAYAAAgIgBAJQAeAHASgLQAIgGAAgEQABgEgHgJQgLgPgCgKQgCgMAFgLQAGgNANgGIADAIQgLAFgEALQgDAIABAIQACAJAJAOQAKALgCAIQgBAHgLAIQgNAIgSAAQgMAAgKgDQgJAcgeASQgeATgpABIiigEQgEAHgHAAQgFAAgDgDgAhrAcQgGAGAAAIQAAAIAGAGQAFAFAJAAQAIAAAFgFQAGgGAAgIQAAgIgGgGQgFgGgIAAQgJAAgFAGgAhoA0QgDgEAAgFQAAgFADgDQAEgDAFAAIgBADQAAAHAHAAQADAAACgCIABADQAAAFgEAEQgDADgFAAQgFAAgEgDgAhLABQgQgCgIgTQgKgUAHgXQAGgVAXgMQAVgLARAFQAaAHgOA0QgHAXgPAOQgLAIgMAAIgHgBg");
	this.shape.setTransform(18.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.2,21);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58307B").s().p("AhnBEIAAgaIhIAAIAAAaIgVAAIAAguIAMgCIAFgGIADgIIADgJIADhBIBMAAIAABYIAMAAIAAAwgAiYACIgCAKQgCAFgCADIAoAAIAAhBIgfAAgAIBAqIAAhuIAZAAIAAAsIAXAAQAKAAAGACQAIADAFAFQAFAFADAFQACAFAAAGQAAARgKAJQgGAFgHACQgIACgIAAgAIaAUIAWAAIAGAAIAGgDQACgEAAgFQAAgFgCgDQgEgCgIAAIgWAAgAFnAqIAAhuIAZAAIAABYIAdAAIAAhYIAZAAIAABYIAcAAIAAhYIAZAAIAABugAE4AqIAAhuIAZAAIAABugADZAqIAAhuIAYAAIAAAsIAYAAQAJAAAIACQAHADAFAFQAEAFADAFQACAFAAAGQAAARgKAJQgFAFgIACQgHACgJAAgADxAUIAXAAIAGAAIAFgDQAEgEgBgFQABgFgEgDQgEgCgHAAIgXAAgACrAqIAAgyIgBAAIgRAkIgTAAIgSgkIAAAAIAAAyIgZAAIAAhuIAXAAIAdBCIAAAAIAdhCIAYAAIAABugAAAAqIAAhBIAAAAIgsBBIgWAAIAAhuIAYAAIAABFIABAAIAthFIAUAAIAABugAkaAqIAAhuIBPAAIAAAXIg2AAIAAAWIAuAAIAAAWIguAAIAAAVIA2AAIAAAWgAmBAqIAAhuIAwAAQAIABAHACQAHADAGADQAEAFACAFQADAHAAAHQAAAFgEAHQgCAGgJAEIAAAAIAIAEIAEAGIAEAFIABAIQAAAHgDAGQgDAGgEAEQgGAFgGACQgGACgIAAgAloAUIAVAAQAIAAAEgDQADgEAAgFIgBgFIgCgDIgFgCIgHAAIgVAAgAlogXIATAAQAIAAADgDQAEgEAAgEQAAgGgEgCQgDgDgIAAIgTAAgAmmAqIgJgWIglAAIgIAWIgaAAIArhuIATAAIAsBugAm2AAIgLgiIgBAAIgKAiIAWAAgAoaAqIAAgrIgkAAIAAArIgZAAIAAhuIAZAAIAAAtIAkAAIAAgtIAZAAIAABug");
	this.shape.setTransform(60.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.1,13.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angry_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,78);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58307B").s().p("ArUCEQASgEAKgIQALgJAFgOQAFgNABgSIACinIC4AAIAAEWIg9AAIAAjeIhCAAIAABBQAAAggDAdQgHAkgHAPQgFALgIAJQgIAJgJAHQgKAGgNAEQgOAEgQAAgAkaCrQgVgJgMgPQgNgPgGgUQgGgUAAgWIAAgHIgdAAIAAByIg+AAIAAkWIA+AAIAABuIAdAAIAAgFQAAgUAGgTQAHgUAMgPQAOgPAUgJQAKgEALgDQAMgCAOAAIAZACQAMACAJAFQAUAIANAOQANAOAGAUQAHAVAAAVIAABCQAAAZgIAVQgHAUgOAOQgNAOgUAIQgUAIgZAAQgbAAgTgJgAj/gpQgIADgFAHQgFAHgCAIIgDAQIAABLIADARQACAJAEAGQAGAGAHAEQAIAEAMAAQALAAAJgDQAIgDAFgHQAKgOAAgTIAAhLQAAgSgKgNQgFgHgIgEQgIgDgLAAQgMAAgIAEgAKXCxIAAipIgCAAIhwCpIg3AAIAAkWIA+AAIAACuIABAAIB1iuIAzAAIAAEWgAF4CxIAAkWIA+AAIAAEWgACJCxIAAkWIA+AAIAABqIA6AAQAYAAASAHQASAHAMALQAMAMAGAPQAGAOAAARQAAAqgaAYQgNALgSAHQgSAFgXAAgADHB5IA3AAQAKAAAGgCQAIgCAEgFQAJgJAAgNQAAgMgJgJQgJgJgTAAIg3AAgAghCxIAAjfIhNAAIAAg3IDVAAIAAA3IhMAAIAADfgAJGh7QgNgHgGgJQgHgKgEgMIgEgUIAoAAIABAJIAFAJIAHAGQAEADAFAAQAGAAAEgDIAHgGIAFgJIABgJIAoAAIgFAUQgDAMgHAKQgHAJgMAHQgLAHgSAAQgRAAgLgHg");
	this.shape.setTransform(72.5,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.1,36.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58307B").s().p("ArNCfQgkgXgPgoIBJgfQAGARASANQASANAXgBQAYABAQgLQAIgGAFgIQADgJAAgKQAAgSgNgKQgOgKgTAAIgtAAIAAg/IAwAAQARAAANgJQANgLAAgOQgBgKgEgHQgEgGgGgEIgPgHIgRgBQgZAAgRAMQgRALgIARIhDgkQASgiAhgWQAggVAzgBQAaAAAWAHQAYAFARANQAQAMALASQAKASAAAaIgDASQgCAKgFAKQgGAKgKAJQgLAKgQAHIABACQAPAFALAHQAKAKAHALQAGALADAMIABAVQAAAOgCANQgEAMgFALQgMAUgTANQgTANgZAHQgYAFgaAAQgyAAglgVgAHuCzIAAliIBPAAIAACJIBJAAQAdgBAYAJQAXAJAQAOQAQAOAHATQAIASAAAUQAAA2ghAfQgRAOgXAIQgXAHgdABgAI9BrIBFAAQANAAAJgCQAJgDAFgGQAMgNAAgPQAAgPgMgMQgKgMgaAAIhFAAgAC3CzIAAliICTAAQAcAAAXAIQAXAHARAQQAPAOAKAWQAJAUAAAbQAAAYgLAVQgJARgQAQQgRAPgXAJQgWAHgZABIhGAAIAACCgAEGgTIBCAAQATgBAOgMQAOgLAAgUQAAgVgNgKQgMgLgZAAIg/AAgAhxCzIAAliID5AAIAABGIirAAIAABIICSAAIAABCIiSAAIAABKICrAAIAABIgAm2CzIAAliICWAAQAcAAAWAHQAWAHAPAOQAPAOAIARQAHAUAAAWQAAATgKATQgLAUgXALIAAACQAMADAJAIQAJAJAHALQAGAKADAMQAEALAAALQAAAZgKATQgIAUgPANQgPAOgUAHQgVAJgWAAgAlnBrIBCAAQAaAAAKgLQALgMAAgPIgDgPQgCgHgGgGQgFgFgJgDQgJgDgNgBIhCAAgAlngiIA8AAQAYAAAKgLQALgLAAgPQAAgPgLgKQgKgJgYAAIg8AAg");
	this.shape.setTransform(77,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.9,36.2);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58307B").s().p("AB0C4IAAg4IibAAIAAA4IgtAAIAAhlIAagGQAGgFAFgGQAEgHADgKQACgKACgPIAIiJICjAAIAADBIAZAAIAABogAAMANIgHAwQgDALgEAIIBUAAIAAiRIhCAAgAoeBZQAPgEAJgHQAJgIAEgMQAFgLABgQIACiQICgAAIAADxIg1AAIAAjBIg6AAIAAA6QAAAagDAaQgFAfgGANQgFAJgHAIQgGAIgJAGQgIAGgMADQgMADgOAAgAjzB6QgRgHgMgNQgMgOgFgRQgGgRAAgTIAAg4QAAgSAGgSQAFgQAMgOQAMgNARgIQAKgDAKgCQAKgCAMAAIAVACIASAFQATAHALANQANAMAHASQAHASgBATIAAA4QAAAWgGASQgHARgNAMQgMANgSAGQgRAHgWAAQgYAAgSgIgAjbg9QgHACgGAHQgEAFgCAHQgEAHAAAIIAABAQAAAIAEAHQACAIAEAFQAGAFAHAEQAIADAKAAQAJAAAIgDQAIgCAFgGQAKgMAAgRIAAhAQAAgRgKgLQgLgMgTAAQgKAAgIAEgAq9B6QgRgHgMgNQgLgOgGgRQgGgRAAgTIAAg4QAAgSAGgSQAGgQALgOQAMgNARgIQAKgDAKgCQAKgCAMAAIAVACIASAFQATAHAMANQAMAMAHASQAHASgBATIAAA4QAAAWgGASQgHARgMAMQgNANgSAGQgRAHgWAAQgXAAgTgIgAqlg9QgHACgGAHQgEAFgCAHQgEAHAAAIIAABAQAAAIAEAHQACAIAEAFQAGAFAHAEQAIADAKAAQAJAAAIgDQAHgCAGgGQAKgMAAgRIAAhAQAAgRgKgLQgLgMgTAAQgKAAgIAEgAN4CAIAAiSIgBAAIhhCSIgwAAIAAjxIA2AAIAACWIABAAIBliWIAsAAIAADxgAJ+CAIAAjxIA2AAIAADxgAGvCAIAAjxIA2AAIAABdIAyAAQAVAAAQAGQAPAGALAIQALAKAEANQAGANAAAOQAAAkgWAWQgMAJgPAGQgRAFgTAAgAHkBPIAwAAQAJAAAGgCQAGgCAEgDQAHgJABgLQgBgKgHgIQgHgIgSAAIgwAAgAFKCAIAAhjIhQAAIAABjIg3AAIAAjxIA3AAIAABhIBQAAIAAhhIA1AAIAADxgAutCAIAAjxICsAAIAAAvIh2AAIAADCgAMxiEQgKgHgGgIQgGgIgDgLIgEgSIAjAAIABAJIAEAHIAGAGQAEADAFAAQAEAAAEgDIAGgGIAEgHIABgJIAjAAIgEASQgDALgGAIQgGAIgKAHQgLAFgOAAQgPAAgLgFg");
	this.shape.setTransform(94.3,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.5,37);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58307B").s().p("AnqBtQgZgQgLgcIAygUQAEALANAIQAMAKAQgBQAQAAAMgHQAFgEADgGQACgFABgHQgBgNgIgGQgKgHgNAAIgfAAIAAgrIAhAAQAMAAAJgHQAIgGAAgLQAAgGgDgFQgDgEgEgDIgKgEIgMgBQgRAAgMAIQgLAIgGALIgugYQANgYAWgOQAWgPAjgBQASAAAQAEQAPAFAMAIQALAIAHAMQAHANAAARIgBANQgCAHgEAHQgEAHgGAHQgHAGgLAEIAAACQAKADAIAFQAGAGAFAIQAEAHACAJIACAOQAAAKgCAIQgCAJgFAHQgIAOgMAJQgNAJgSAEQgRAEgRABQgjAAgYgPgAFSB6IAAjyIA2AAIAABeIAyAAQAVAAAQAGQAPAGALAKQALAIAFAOQAFAMAAAOQABAlgXAUQgMALgPAFQgQAFgUAAgAGIBJIAwAAQAJABAFgCQAHgDADgEQAIgIAAgKQAAgLgIgIQgHgIgRAAIgwAAgAB+B6IAAjyIBkAAQATAAAQAGQAPAFAMALQALAJAGAPQAGAPAAARQABARgIAOQgGAMgMAKQgKAKgQAHQgPAFgSAAIgvAAIAABZgAC0gNIAtAAQANAAAJgIQAKgIgBgNQAAgPgIgHQgJgIgQABIgrAAgAhNB6IAAjyICqAAIAAAxIh0AAIAAAxIBjAAIAAAsIhjAAIAAAzIB0AAIAAAxgAksB6IAAjyIBnAAQATABAPAFQAPAFALAIQAKAKAGANQAEANAAAOQAAANgGAOQgIANgQAIIAAABQAIACAHAFQAGAHAFAHQAEAHACAIQACAIABAHQgBARgGAOQgGANgKAJQgKAJgOAGQgOAFgQAAgAj2BJIAuAAQARABAIgJQAHgHAAgLIgBgKQgDgFgDgEQgEgEgGgCQgHgCgIAAIguAAgAj2gXIAqAAQARABAGgJQAIgHgBgLQABgKgIgGQgGgHgRABIgqAAg");
	this.shape.setTransform(52.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.4,24.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angry_07();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,169);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angry_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,169);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angry_12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,235);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.cube();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish();
	this.instance.setTransform(-407.9,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.9,-22,158,158);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.setTransform(268.1,-176,1.204,1.204,0,0,0,222.7,-146.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.6},0).wait(1).to({rotation:7.3,x:268.2,y:-175.9},0).wait(1).to({rotation:10.9,x:268.1},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:25.5},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:61.8},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.1,x:268},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.6},0).wait(1).to({rotation:87.3,y:-175.8},0).wait(1).to({rotation:90.9,y:-175.9},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138.2},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.1},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:167.3,x:267.9,y:-176},0).wait(1).to({rotation:170.9,x:268,y:-175.9},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:178.2,y:-176},0).wait(1).to({rotation:181.8,y:-175.9},0).wait(1).to({rotation:185.5,y:-176},0).wait(1).to({rotation:189.1,y:-175.9},0).wait(1).to({rotation:192.7,y:-176},0).wait(1).to({rotation:196.4,x:267.9},0).wait(1).to({rotation:200,x:268},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:221.8},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:243.6},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.9,y:-176.1},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:258.2,y:-176},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:265.5,y:-176.1},0).wait(1).to({rotation:269.1,x:268.1,y:-176},0).wait(1).to({rotation:272.7,x:268},0).wait(1).to({rotation:276.4,y:-176.1},0).wait(1).to({rotation:280,x:268.1,y:-176},0).wait(1).to({rotation:283.6,x:268,y:-176.1},0).wait(1).to({rotation:287.3,x:268.1,y:-176},0).wait(1).to({rotation:290.9,x:268,y:-176.1},0).wait(1).to({rotation:294.5,y:-176},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:301.8,x:268.1,y:-176.1},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:309.1,y:-176},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:316.4,x:268},0).wait(1).to({rotation:320},0).wait(1).to({rotation:323.6,x:268.1},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.1,-779.1,1206.3,1206.2);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ60();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(1).to({alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.1,-779.1,1206.3,1206.2);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ54();
	this.instance.setTransform(107,28,1,1,0,0,0,107,28);
	this.instance.alpha = 0.352;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214,56);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(107,28,1,1,0,0,0,107,28);

	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(107,21,1,1,0,0,0,107,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.5,214,56);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(107,28,1,1,0,0,0,107,28);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,214,56.5);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(487,101,1,1,0,0,0,79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(64,17.7,1,1,0,0,0,64,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.1,35.4);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(-50.9,40.2,1,1,0,0,0,64,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(-50.8,39.2,1,1,0,0,0,75,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.3,11.2,151,56);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ55();
	this.instance.setTransform(82.3,-27.3,1.26,1.26,0,0,0,44.5,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.3,-48.4,112.1,42.1);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(52.8,13.3,1,1,0,0,0,51.9,13.3);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(52.7,43.8,1,1,0,0,0,52.7,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.4,56.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(53.7,45.1,1,1,0,0,0,52.7,12.4);

	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(53.7,13.8,0.87,0.87,0,0,0,61.7,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.4,57.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ30();
	this.instance.setTransform(430.5,-4,1,1,0,0,0,78,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4},15,cjs.Ease.get(1)).to({y:-4},14,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(428.1,74,1,1,2,0,0,68,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.98,scaleY:0.98,rotation:5},10,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:0.99,x:428,y:74.6},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:2,x:428.1,y:74},9,cjs.Ease.get(1)).wait(1));

	// Символ 26
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(427,70,1,1,0,0,0,83,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344,-65,166,205.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// good_13.png
	this.instance = new lib.Символ25();
	this.instance.setTransform(78.5,179,1,1,4,0,0,40,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9,x:81.5},19,cjs.Ease.get(1)).to({rotation:4,x:78.5},20,cjs.Ease.get(1)).wait(1));

	// good_12.png
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(226.1,187,1,1,-6,0,0,83.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:51.5,rotation:6,x:222.6},19,cjs.Ease.get(1)).to({regY:51.6,rotation:-6,x:226.1},20,cjs.Ease.get(1)).wait(1));

	// good_06.png
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(152,156,1,1,0,0,0,430,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:4,x:148.5},10,cjs.Ease.get(1)).to({rotation:-4,x:155.5},18,cjs.Ease.get(1)).to({rotation:0,x:152},11,cjs.Ease.get(1)).wait(1));

	// good_10.png
	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(154,184,1,1,0,0,0,90,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.9,-32,219.9,302.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(68.4,49,1,1,0,0,0,18.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-26.6},24,cjs.Ease.get(1)).wait(1).to({skewY:180},0).to({x:62.6},23,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.3,38.5,36.2,21);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(44.5,-75.1,1,1,0,0,0,18.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(46.1,-16.1,1,1,0,0,0,60.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-47.1,126.9,37.9);


(lib.Символ15копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16_1();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15копия();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(76.9,-27.5,1,1,0,0,0,72.5,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(77,18.1,1,1,0,0,0,77,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-45.7,153.9,82);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(73.2,-32.9,0.817,0.817,0,0,0,94.2,18.5);

	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(73.3,10.2,1.462,1.462,0,0,0,52.7,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-48,154.2,76.3);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(73.3,-119.8,1,1,0,0,0,77,18.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({y:20.2},9,cjs.Ease.get(1)).to({y:13.2},5,cjs.Ease.get(1)).wait(16).to({y:0.2},5).to({y:60.2,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// 1
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(94.2,-95.8,1,1,0,0,0,94.2,34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:44.2},9,cjs.Ease.get(1)).to({y:34.2},5,cjs.Ease.get(1)).wait(15).to({y:24.2},5,cjs.Ease.get(1)).to({y:84.2,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-178,154.2,76.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(74,39,1,1,0,0,0,74,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95,rotation:2,y:41.1},3,cjs.Ease.get(1)).to({rotation:-3,x:74.7,y:39},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:74},3,cjs.Ease.get(0.86)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,78);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// angry_03.png
	this.instance = new lib.Символ6();
	this.instance.setTransform(-296.9,96.1,1.04,1.04,0,0,0,74,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:97.6},0).wait(1));

	// angry_12.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-300.9,131.2,1,1,0,0,0,90,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// angry_10.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-245.5,133.9,1,1,-9,0,0,35.4,105.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:35.5,rotation:8,x:-246.9,y:127.7},9,cjs.Ease.get(1)).to({regX:35.4,rotation:-9,x:-245.5,y:133.9},10,cjs.Ease.get(1)).wait(1));

	// angry_07.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(-361.2,128.4,1,1,-14,0,0,96.8,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:12,x:-361.1,y:125},9,cjs.Ease.get(1)).to({rotation:-14,x:-361.2,y:128.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.1,13.7,323.1,235);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16_1();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15копия();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(98.6,-4.3,1.064,1.064,0,0,0,9,5.9);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(98.7,44,1.011,1.011,0,0,0,52.6,28.2);

	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(98,-56.6,0.931,0.931,0,0,0,53.7,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.5,-83.4,106.6,155.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ44();
	this.instance.setTransform(112.7,23.1,1,1,0,0,0,64,17.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({y:16.1,alpha:1},10,cjs.Ease.get(1)).to({y:23.1},5,cjs.Ease.get(1)).wait(31).to({y:33.1},5,cjs.Ease.get(1)).to({y:-126.9},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(-47.2,22.4,1.33,1.33,0,0,0,50,19.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({y:15.4,alpha:1},10,cjs.Ease.get(1)).to({y:22.4},5,cjs.Ease.get(1)).wait(40).to({y:32.4},5,cjs.Ease.get(1)).to({y:-127.6},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ42();
	this.instance_2.setTransform(-5.7,-78.7,1,1,0,0,0,98.2,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:31.3},9,cjs.Ease.get(1)).to({y:21.3},5,cjs.Ease.get(1)).wait(15).to({y:31.3},5,cjs.Ease.get(1)).to({y:-88.7},5,cjs.Ease.get(1)).to({_off:true},2).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-183.6,106.6,155.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(55.1,118.1,1,1,0,0,0,90,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:123.1},25,cjs.Ease.get(1)).to({y:118.1},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,219.9,302.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(212,77,1,1,0,0,0,109.9,151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.1,-74,219.9,302.1);


(lib.Символ15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(129.2,176.9,0.84,0.84,-4,0,0,-304.2,223.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-304.3,regY:223.7,rotation:6,x:129.1,y:177},9,cjs.Ease.get(1)).to({regX:-304.2,regY:223.6,rotation:-4,x:129.2,y:176.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-4.4,278.3,207.5);


(lib.Символ13копия6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(20.5,22.5,0.651,0.652,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,45);


(lib.Символ13копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,0.651,0.651,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,12.1,41,44.9);


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

	// btn
	this.instance = new lib.Символ50();
	this.instance.setTransform(528.5,45,1,1,0,0,0,107,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.78,scaleY:0.78,x:454.2,y:-166.8},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:528.5,y:45},4,cjs.Ease.get(1)).wait(1));

	// mouse
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(83.2,-73.1,1,1,0,0,0,60.1,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:84.1,y:118.7},0).to({alpha:0},3,cjs.Ease.get(1)).wait(1).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

	// 2
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(141.6,-17.1,1,1,0,0,0,61.7,34.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:-139.9,alpha:1},3,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1.41,scaleY:1.41,x:84.6,y:-26.3},1,cjs.Ease.get(1)).to({regX:61.7,regY:34.2,scaleX:1,scaleY:1,x:141.6,y:-17.1,alpha:0},4,cjs.Ease.get(1)).wait(1));

	// 1
	this.instance_3 = new lib.Символ8_1();
	this.instance_3.setTransform(94.2,-159.5,1,1,0,0,0,94.2,34.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:1.2},0).to({alpha:0},3,cjs.Ease.get(1)).wait(1).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-371.7,639.3,438.2);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 12
	this.instance = new lib.Символ49();
	this.instance.setTransform(287.6,407.6,0.35,0.35,0,0,0,79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:448.1,y:374.6},29).to({_off:true},1).wait(62));

	// Слой 11
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(289.7,405,0.25,0.25,0,0,0,79,79);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:104.8,y:422},29).to({_off:true},9).wait(45));

	// cube_3
	this.cube_3 = new lib.Символ13копия2();
	this.cube_3.setTransform(289.4,407.2,0.479,0.479,180,0,0,31.5,34.6);
	this.cube_3.alpha = 0.379;
	this.cube_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_3).wait(20).to({_off:false},0).to({x:84.4,y:222.1},29).to({_off:true},7).wait(36));

	// cube_5
	this.cube_5 = new lib.Символ13копия6();
	this.cube_5.setTransform(289.4,407.2,1,1,0,0,0,31.5,34.5);
	this.cube_5.alpha = 0.379;
	this.cube_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_5).wait(32).to({_off:false},0).to({x:145.7,y:654.5},29).to({_off:true},5).wait(26));

	// cube_3
	this.cube_3_1 = new lib.Символ13копия2();
	this.cube_3_1.setTransform(292.3,405.1,0.728,0.728,180,0,0,31.5,34.5);
	this.cube_3_1.alpha = 0.379;
	this.cube_3_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_3_1).wait(46).to({_off:false},0).to({x:76.5,y:539.2},29).to({_off:true},3).wait(14));

	// cube_1
	this.cube_1 = new lib.Символ13копия7();
	this.cube_1.setTransform(289.4,407.2,0.638,0.638,0,0,0,31.5,34.5);
	this.cube_1.alpha = 0.379;
	this.cube_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_1).wait(62).to({_off:false},0).to({x:104.5,y:200.1},29).wait(1));

	// cube_5
	this.cube_5_1 = new lib.Символ13копия4();
	this.cube_5_1.setTransform(289.4,407.2,1,1,0,0,0,31.5,34.5);
	this.cube_5_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_5_1).wait(46).to({_off:false},0).to({x:93,y:301.6},29).to({_off:true},3).wait(14));

	// cube_4
	this.cube_4 = new lib.Символ13копия3();
	this.cube_4.setTransform(289.8,407.7,1,1,0,0,0,20.5,22.5);
	this.cube_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_4).wait(32).to({_off:false},0).to({x:491.7,y:481.8},29).to({_off:true},5).wait(26));

	// cube_3
	this.cube_3_2 = new lib.Символ13копия2();
	this.cube_3_2.setTransform(289.4,407.2,1,1,180,0,0,31.5,34.5);
	this.cube_3_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_3_2).wait(20).to({_off:false},0).to({x:45.1,y:374.6},29).to({_off:true},7).wait(36));

	// cube_2
	this.cube_2 = new lib.Символ13копия();
	this.cube_2.setTransform(289.8,407.7,1,1,0,180,0,31.5,34.5);
	this.cube_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cube_2).wait(9).to({_off:false},0).to({x:532.7,y:228},29).to({_off:true},9).wait(45));

	// cube_1
	this.cube_1_1 = new lib.Символ13_1();
	this.cube_1_1.setTransform(289.4,407.2,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.cube_1_1).to({x:472,y:585.5},29).to({_off:true},1).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(257.9,372.7,63,69);


(lib.Символ40 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ41();
	this.instance.setTransform(295.2,97,1,1,0,0,0,295.2,97);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(257.9,372.7,63,69);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15_1();
	this.instance.setTransform(140.4,95.9,1.086,1.086,0,0,0,123,98.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:123.1,regY:98.8,scaleX:1.22,scaleY:1.22,x:152.7,y:91.1},29,cjs.Ease.get(1)).to({regX:123,scaleX:1.09,scaleY:1.09,x:197.8,y:97.2},30,cjs.Ease.get(1)).to({regY:98.7,x:140.4,y:95.9},40,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-16.1,302.1,225.3);


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

	// good
	this.instance = new lib.Символ22();
	this.instance.setTransform(65,475.4,0.856,0.856,0,0,0,90,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-62.5},0).to({x:-59.9,y:227},3,cjs.Ease.get(1)).wait(1).to({x:-62.5,y:475.4},4,cjs.Ease.get(1)).wait(1));

	// evil
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(60.4,254,1,1,0,0,0,142.2,107.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:474},3,cjs.Ease.get(1)).wait(1).to({y:254},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,130,368.4,467);


// stage content:



(lib.pokormi_zverya_450x150_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		
		
		
		
		//this.cursor = "none";
		
		//stage.canvas.style.cursor = "none";
		//this.pric.mouseEnabled = false;
		//this.addEventListener("tick", qwe4.bind(this));
		
		//function qwe4() {
			//this.pric.x = stage.mouseX;
			//this.pric.y = stage.mouseY;
			
		//}
		
		
		//_this.pric.visible=false;
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.fon.gotoAndPlay(1);
			_this.cat.gotoAndPlay(1);
			_this.text.gotoAndPlay(1);
			_this.bg.gotoAndPlay(1);
			_this.pric.visible=true;
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.fon.gotoAndPlay(6);    
			_this.cat.gotoAndPlay(5);
			_this.text.gotoAndPlay(5);
			_this.bg.gotoAndPlay(5);
			_this.pric.visible=false;
		}
	}
	this.frame_719 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(719).call(this.frame_719).wait(1));

	// text
	this.text = new lib.Символ7();
	this.text.setTransform(95.6,236.6,0.77,0.77,0,0,0,94.2,34.3);

	this.instance = new lib.btn();
	this.instance.setTransform(299.2,58,0.643,0.643);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.instance}]},719).wait(1));

	// zver
	this.cat = new lib.Символ1();
	this.cat.setTransform(264.5,27.9,0.628,0.628,0,0,0,90,117.5);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(196.4,116,0.528,0.528,4,0,0,40,33);

	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(274.3,120.2,0.528,0.528,-6,0,0,83.5,51.6);

	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(235.5,36.7,0.528,0.528,0,0,0,78,61);

	this.instance_4 = new lib.Символ28();
	this.instance_4.setTransform(234.2,78,0.528,0.528,2,0,0,68,37.4);

	this.instance_5 = new lib.Символ26();
	this.instance_5.setTransform(233.6,75.9,0.528,0.528,0,0,0,82.9,70);

	this.instance_6 = new lib.Символ27();
	this.instance_6.setTransform(236.2,118.6,0.528,0.528,0,0,0,90,86);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cat}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},719).wait(1));

	// box
	this.bg = new lib.Символ40();
	this.bg.setTransform(249.4,-82.4,0.553,0.553,0,0,0,295.2,97);

	this.instance_7 = new lib.Символ44();
	this.instance_7.setTransform(197.1,87.6,0.934,0.934,0,0,0,64,17.7);

	this.instance_8 = new lib.Символ43();
	this.instance_8.setTransform(48.7,97.9,1.242,1.242,0,0,0,50,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bg}]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},719).wait(1));

	// ramka
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EA8lgYzIhIAAIAAAHMgrcAAAIAAXPIgKAAIAADsEA/sgKvIkPAAAP34sIAKAAEg6YgYzIEMAAIAAAHIALAAIAAXPIAAUZEg2BgBdIgLAAIAA3PEg2MAlsMAAAgnJAP3hdMhF4AAAEg2BgYsMBF4AAAEA7dgBdMgrcAAAEg8cgKvIjPAAEAP3glrIAAM/Eg2BgdfIAAEz");
	this.shape.setTransform(347,158.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("EA58gajIhJAAIAAAHEA9DgMfIkQAAIAAt9AOt6cIAKAAIAAXPIgKAAIAAPtEg3IAAYIAAjlIAA3PMBF1AAAAOtjNMhF1AAAIhuAAIAApSIjPAAAO36cMAp8AAAEA4zgDNMgp8AAAEg9CgajIEMAAIAAAHIBuAAIAAgZEg42Aj8MAAAgnJEAOtgj7IAAJf");
	this.shape_1.setTransform(354,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},719).wait(1));

	// Слой 4
	this.instance_9 = new lib.Символ61();
	this.instance_9.setTransform(3,73.5);
	this.instance_9.alpha = 0.809;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},719).wait(1));

	// Слой 3
	this.fon = new lib.Символ56();
	this.fon.setTransform(-45,252.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).to({_off:true},719).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.1,-451.6,1206.3,1206.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
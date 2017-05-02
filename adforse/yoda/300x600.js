(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/adforcelogo.png?1469435044921", id:"adforcelogo"},
		{src:"images/body.png?1469435044921", id:"body"},
		{src:"images/fon.jpg?1469435044921", id:"fon"},
		{src:"images/g4.png?1469435044921", id:"g4"},
		{src:"images/gerd.png?1469435044921", id:"gerd"},
		{src:"images/geree.png?1469435044921", id:"geree"},
		{src:"images/had.png?1469435044921", id:"had"},
		{src:"images/hand.png?1469435044921", id:"hand"},
		{src:"images/leg.png?1469435044921", id:"leg"},
		{src:"images/leg2.png?1469435044921", id:"leg2"},
		{src:"images/planet.png?1469435044921", id:"planet"},
		{src:"images/sword.png?1469435044921", id:"sword"},
		{src:"images/v4.png?1469435044921", id:"v4"},
		{src:"images/v4b4.png?1469435044921", id:"v4b4"},
		{src:"images/yho2.png?1469435044922", id:"yho2"},
		{src:"images/yho2_1.png?1469435044922", id:"yho2_1"}
	]
};



// symbols:



(lib.adforcelogo = function() {
	this.initialize(img.adforcelogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,93);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,87);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,366);


(lib.g4 = function() {
	this.initialize(img.g4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,52);


(lib.gerd = function() {
	this.initialize(img.gerd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,69);


(lib.geree = function() {
	this.initialize(img.geree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,90);


(lib.had = function() {
	this.initialize(img.had);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,96);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,82);


(lib.leg = function() {
	this.initialize(img.leg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,68);


(lib.leg2 = function() {
	this.initialize(img.leg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,32);


(lib.planet = function() {
	this.initialize(img.planet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,245);


(lib.sword = function() {
	this.initialize(img.sword);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,124);


(lib.v4 = function() {
	this.initialize(img.v4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,24);


(lib.v4b4 = function() {
	this.initialize(img.v4b4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,19);


(lib.yho2 = function() {
	this.initialize(img.yho2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,56);


(lib.yho2_1 = function() {
	this.initialize(img.yho2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,56);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90140A").s().p("AkcCDQgIAAAAgIIAAgmIiVAAIAAAmQAAAIgIAAIgNAAQgIAAAAgIIAAg5QAAgIAIAAIAJAAQAHgEAEgGQAEgGAFgMQAEgMADgVQADgWAAgfIAAg+QAAgIAHAAIB3AAQAJAAAAAIIAACwIARAAQAIAAAAAIIAAA5QAAAIgIAAgAmNgRQgBARgDAOQgDAPgFALQgEALgGAHIBlAAIAAidIhOAAgAgGBVQgPgGgLgKQgLgKgFgOQgGgOAAgSIAAhCQAAgSAGgPQAFgOALgKQALgKAPgFQAJgDAZgCQAOAAAWAFQAPAFALAKQALAKAGAOQAFAPAAASIAABCQAAASgFAOQgGAOgLAKQgLAKgPAGQgWAFgOAAQgZgCgJgDgAAFhkQgIADgHAHQgHAGgEAJQgEAKAAAMIAABCQAAAMAEAJQAEAKAHAGQAHAGAIADQAKAEANAAQANAAALgEQAKgDAHgGQAHgGADgKQAEgJAAgMIAAhCQAAgMgEgKQgDgJgHgGQgHgHgKgDQgLgDgNAAQgNAAgKADgApiBVQgQgGgKgKQgLgKgGgOQgFgOAAgSIAAhCQAAgSAFgPQAGgOALgKQAKgKAQgFQAKgDAagCQANAAAWAFQAQAFALAKQALAKAFAOQAGAPAAASIAABCQAAASgGAOQgFAOgLAKQgLAKgQAGQgWAFgNAAQgagCgKgDgApWhkQgKADgHAHQgHAGgEAJQgDAKAAAMIAABCQAAAMADAJQAEAKAHAGQAHAGAKADQAKAEAOAAQANAAAKgEQAKgDAHgGQAHgGAEgKQAEgJAAgMIAAhCQAAgMgEgKQgEgJgHgGQgHgHgKgDQgKgDgNAAQgOAAgKADgALUBVQgIAAAAgIIAAjDQAAgIAIAAIB4AAQAIAAAAAIIAAALQAAAIgIAAIhjAAIAABBIBWAAQAHAAAAAIIAAALQAAAIgHAAIhWAAIAABBIBnAAQAIAAAAAIIAAALQAAAIgIAAgAInBVQgHAAAAgIIAAjDQAAgIAHAAIB5AAQAIAAAAAIIAAALQAAAIgIAAIhjAAIAABBIBVAAQAIAAAAAIIAAALQAAAIgIAAIhVAAIAABBIBmAAQAIAAAAAIIAAALQAAAIgIAAgAHeBVQgHAAAAgIIAAhUIhnAAIAABUQAAAIgIAAIgNAAQgIAAAAgIIAAjDQAAgIAIAAIANAAQAIAAAAAIIAABUIBnAAIAAhUQAAgIAHAAIAOAAQAHAAAAAIIAADDQAAAIgHAAgACeBVQgIAAAAgHIAAjEQAAgIAIAAIB/AAQAIAAAAAIIAAALQAAAIgIAAIhqAAIAAA8IBBAAQAOAAAMAEQAMAEAIAJQAJAIAEALQAFAKAAAPQAAAPgFALQgEAMgJAIQgIAJgMAEQgMAEgOAAgACzA6IA+AAQAIAAAHgCQAHgDAFgFQAFgEACgHQACgHAAgIQAAgIgCgHQgCgHgFgCQgFgFgHgDQgHgCgIAAIg+AAgAjkBVQgHAAAAgIIAAjDQAAgIAHAAIBQAAQAQAAANAFQANAFAJAIQAJAJAFANQAEANAAAPQAAAQgEANQgFAMgJAJQgJAIgNADQgNAFgQAAIg6AAIAABFQAAAIgJAAgAjOgRIA4AAQAJAAAIgDQAIgDAFgFQAGgFACgIQADgHAAgKQAAgJgDgIQgCgHgGgGQgFgFgIgDQgIgDgJAAIg4AAgArNBVQgIAAAAgIIAAiwIhlAAIAACwQAAAIgIAAIgNAAQgIAAAAgIIAAjDQAAgIAIAAICPAAQAIAAAAAIIAADDQAAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.6,-13.2,171.3,26.4);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AyQFeQiCAAAAiDIAAm1QAAiDCCAAMAkhAAAQCCAAAACDIAAG1QAACDiCAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-35,260,70);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(1,1,1).p("AB6AAQAAAygkAkQgkAkgyAAQgyAAgkgkQgjgkAAgyQAAgyAjgkQAkgjAyAAQAyAAAkAjQAkAkAAAyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-13.2,26.5,26.5);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("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ADAFAIIAJARQABAGAEAHIAPA3QADARABAQIgEAMIgFAMQgKAIgNAHIgjAGQgbgEgJgCgAIsnBQgGADAAAGQgBAFABAJIANA5QAAAHAFAHQADAFAHAFQAEAEAIADIAQACIAOgCIALgHIADgLIgBgOIgPg5QgCgKgCgEIgIgJQgIgFgFAAQgHgDgIACQgKgBgEADIgCAAQgGAAAAAFgAEuklIgHgDQgEgEAFgFIAVgyIhEh5QgEgHACgBQAAgDAGABIAWgBQAKAAAEACQACAAAFAHIAoBHIAahHQAAgIAEAAQABgDAKABIAZgBQADgBADAFIABAHIg9CtIgEAKIgOACgABHoZIgFgBQgDgDABgCIAFgjQgBgFADAAQAAgBAFAAIADAAQADgFAEgCQABgFAEgDIAHgfIACgfQAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAgCAFABIBEgCQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABIACAFIgCBNIAIgBQACgBADACIABAFIgBAiIAAAGIgGACIgOAAIgFgCQgDgCAAgDIACgSIhJACIAAASQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIgHACgAB9qFIgBAPIgEAaIgIAUIAngBIADg9gApOoqQgBgDADgDIAyhcQgBgEAEAAQABgCAEABIBOgCQABAAABAAQABAAAAAAQABAAAAAAQAAABABAAIgCAFIgqBcIgEAFIgHACIgOAAIgFgBQgBgDADgDIAlhNIgnAAIgoBNIgEAGQgDAAgCABIgOABIgGgBgAnXosQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABgBIAqhcQABgEADgBQAAgCAGABIBBgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAABABIgBAFIgDAIIgDAFIgGABIgvABIgHASIAmAAQABgBAAAAQABAAAAAAQAAAAABABQAAAAABABIAAAEIgDAKIgEAFIgGACIgnAAIgJAVIAygBQADAAACACIgCAFIgEAKIgCAFQgDAAgDACIhIABIgGgCgAlxotQgCgCADgEIAkhbQgBgEAFgCQgBgBAGAAIArAAQAIgBAHADQAGABAFAGQADAEABAHQAAAGgCAJQgCAHgGAIIgLAJIgPAIQgKABgJABIgYAAIgLAcIgEAGIgGACIgNABIgGgCgAlBplIAVAAIANgFQAGgFACgFQABgHgCgCQgEgFgGACIgWgBgAkCovQgCgCADgDIAdhcQAAgEADgBQAAAAAAgBQAAAAABAAQABAAAAAAQABAAACAAIBDgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQABAAABAFIgDAIIgDAGIgFABIguAAIgHATIAogBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIABAFIgCAJQgDADgBACIgFACIgoAAIgGAWIAxgBQAEgBACACIABAGIgCAIIgEAGIgGACIhHABIgHgCgAgNowIgIgFQgEgDgBgCQgOgMAEgTIAGgdQgBgHAGgJQADgJAIgCQAGgGAIgBQAEgDAQgBQAHAAAOADQADABAFACQADABAEAEIAEAGQACAAACAHIACAPIgEAfIgEARIgLAMIgRAIIgWADIgVgCgAAJpFQAFgBAGAAIAIgFQABgDAEgCIACgHIAEgeIgBgJIgCgFQgFgDgDABQgFgDgEACQgVgBgBASIgFAeQgCAEACAEQgBACAFACQABADADACIACAAIAHABgAiiouQgBgBgBAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQgCgCAFgEIAvgwIgWgsQgBgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQABgCAEABIAPgBQAEgBAFADIADADIANAaIAWgaQADgFAEABQACgCAFABIAPAAQADgBACADIgCADIgqAsIAbAwIAAAFIgFACIgQAAIgIAAQgFgDgBgDIgOgdIgbAeIgFAGQgDgBgHACgADYozIgHgCQgCgCACgDIAAhcQgBgEACgBQABgCAFABIANAAQADgBADACIAAAEIACAhIgBARIgEAUIACAAIAPggIAdgqQAAgCAGABIAOAAQADgBACABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAHBdIgBAGIgGAAIgNABIgHgBQgDgCACgEIgCgjQgDgMAEgLIADgMIgCAAQgEAIgCAHIgIAOIgfAtIgGAEgAF5o1IgHgBQgCgDABgDIgKhdQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgCAGABIAMAAQACgBADACIACADIAFAhIAoAAIgFgiQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAIAOAAQAAAAABgBQABAAAAAAQABAAAAABQABAAAAAAIADAEIAQBdIgBAFIgFABIgOABIgGgBQgDgDAAgCIgGgmIgoABIAEAlIgCAFIgEACgAHqo3IgGgBQgCgDACgCIAXheQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAABABQABgCAFAAIANAAIABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAABABABIBBBcIAAAGIgDACIgNABIgLgDQgDgBAAgDIgIgPIgtACIgCAOIgEAFIgJABgAINp3IgEAYIAcAAIgOgYQgIgLAAgHIAAgCIgCAAIAAAUg");
	this.shape.setTransform(-5.1,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-70,214.2,134.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.adforcelogo();
	this.instance.setTransform(-150,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-46.5,300,93);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.g4();
	this.instance.setTransform(-42,-41.2,1.587,1.587);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-41.2,84.1,82.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v4();
	this.instance.setTransform(-18.2,-19,1.587,1.587);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-19,36.5,38.1);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(133.5,196);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30).to({_off:false},0).wait(4));

	// Слой 14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EAS9AnlQgGgCgBgIQgBgDADgKQAFgOABgIQABgIgBgDQgDgHgGADQACATgEASIgNADQgEgJgFgHIgFgJQgDgEgCgLIgGgcQgEgQgFgMIgBAuIgBAMQgDAHgGAAIgKgFQADgZgNgYIABA7QAAAKgEAEQgGAFgJgFIgMgMQgIgHgBgDIgBgJQABgGgCgDIgGgJQgDgFAAgKQABgNgBgEIAPgCQAFADAAAIIABAMQADAJAHgDQgEgbAQgWIANgBIAAABIAggBQAGAAACACQADACACAFQAFAPABAMQAEgCAAgFQAAgFABgCQACgCAGgBQAGgBAGABQAGADAGALQAHAOAAAJIAKADQAHACABAFQACAFgHALQgHAMgEAcQgCAGgDAEQgDAEgEAAIgDAAgEgM9Aj0QgDgBgEgEIgYgZQgHAEABAGQgKAFgKgEQgLgEgFgKQgDgHgCgDIgIgFQgGgDgEgGIgFgLQgGgIgIgBIgIgBQgFgBgCgCQgDgDgBgGIAAgKQgBgHACgCIAEgFIAFgDQAOAHAFABQALADAIgFQADgBAHgIQAFgGAFgBIAKAAQAHAAADgBIAFgFIAEgGQAHgJALAEQAKAEAJATIAIAUIAFAUQACAMAEAHIAFAJQACAFgBAEQgCADgEABQgEACgEgCQgFgBgIgIIgNgOQgIgJgGADQgDADACAHQABADAFAFIAYAXQAQAPgCALIgLACIgDAAgAvtT5QgIgCAAgPIAAg5QAAgUgCgKQgDALgNADQgKADgLgFQgVgJgIgUIgLAnQgCAIgEACIgHABIgHAAIgHgBQgFgCgCgFIgLgQQgGgJgIgCIgCAMQgBAHgDAEQgEAFgKAAQgOAAgWgUIgfgeQgFgFAAgDQgBgHALgFQAKAEASATQARARANACQAHgOAGgFQAIgEAQACQAHAAADADQAEACADAMQADAKAFABQAHAAABgMIACgUQAAgJADgDQAFgFAJABQAPADAJALIAKANQAGAHAIgBQAFAAAAgIIAAgJQABgEAFgEIAJgHQAGgHgBgQQgBgUABgEQAHgDAIAAIAAAAQACABAFAPQADAIALAQQAFAIAFAUQAHAeAHA+QABAKgBAFQgDAIgHACQgNgDgGgWIgLghIAAAyQAAAJgCAEQgEAGgEAAIgCAAgARbpxIABhHQgFgCgFAHQgGAOgEAdQgBAIgEAIQgFAKgGADQgDACgFgBQgEAAgCgEIgBgYQAAgPACgKIAHgVQACgLAAgRIAAgdQAGgCAOgBQgCgPAEgPIANAAQAHALgDAMQAQAFADAJIABAKIABBfQAAAVgDAKIgMACQgGgEAAgOgEgAigkCQgFgBgDgGIgBgKIABgaQAAgIgCgDIgHgLQgIgIgDgLIgBgPIAAgdQAAgOACgGQACgGAHgOQAHgRACgOIACgNQACgHAHgEQAHgEAIABQAFAGAAANIgBAuIgBARIACARQABAHgDALIgFATQgEAOAAAVIABAkQAAAJgCAEQgDAGgGAAIgBAAg");
	this.shape_1.setTransform(147.4,204.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(28).to({_off:false},0).to({_off:true},4).wait(2));

	// Слой 13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AH3V0IgYgIQgMgEgIgFQgHgEgKgKQgNgNgFgIIgHgKQgFgEgFgBIgFAAQgGgCgBgMQgBgUAEgJQAFgGABgEQAAgHACgDQAEgGAKACQALADADgBIABgHQAHgDAIAAIAAAAQAGAIgBAOIgBALQAAAHABAFQAKAEAKABIAAgHIAOgDQAIAHgDARQgDAPgJAEQgEACgKAAIgHgBQgGgCgDgKIgKAIIAQAQQAKAKAGAEQAHAEARAHQARAGAHAGQACADgCADQgCAEgEABIgDAAQgEAAgGgCgAQ8OwIAAgQQgCgJgMgKQgGALAAAOIAAAOQgCAKgIAAIgJgFIAAhCQgBgHACgEQADgDAGgDIAJgFQADgCAEgIIAHgLIAMgBIAAABQACABACAGQABAHACACQABACADAEQAEAEAAAKIAAAuQAAAUgDAKIgMACQgGgDAAgLgAwaLYQgEgBgGgHQgQgPgHgJQgJgMgHgdQgDgLgBgIIgBgZIAAgSQAAgGABgCQAGgDABgDQACgCAAgGQACgHAGgFQAFgFAHAAIAAgDIAAAAQAPAAAEAHQACADAAAGIAAAvQAAAJgFAEQgDACgHAAIgLgBQgEALAGAUQAHATAFAIQAGAGANALQALAMgBALIgLACIgDAAgAAmgIQgIgBgEgGIgCgJQgDgSgGgSQABAOgKALQgEAEgDABQgGACgDgDQgCgDgBgGIgBgKQgBgFgEgGIgHgLQgFADgIgCQgGgCgFgFQgDgFAAgJQAIgFAMgDQgCgHAEgGQAEgHAGgCIAIgFQANgBAIALIAJARQADAHAJAOIAIAVQAEAOAEAGQAIAJABAEQABAFgDALQgGACgEAAIgEgBgADXzYQgBgfAJgNIgPgDQgHgBgEgGQgCgCAAgHQgBgTACgKQABgIAEgPQAJgaAHgNIAIAAIAAgDIAAAAQARABAGAIQAEAFAEAOQAHAIABAFQACAEgDAGIgDAJQgEAHgGAdQgDAPgEAKIgFAPQgDAIAAAGIAAANQAAAHgDAFIgNADQgEgGAAgPg");
	this.shape_2.setTransform(156.5,92.9);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(27).to({_off:false},0).to({_off:true},3).wait(4));

	// Слой 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EAYSAnvQAAgMgCgDQgCgDgIgFQgSgLgHgVIgCgLQgBgMABghQgPgCgEgHQgCgEAAgIQAAgLACgEQACgFAHgGQAOgPAKADQAFAGALAAIAPACQAIABADADQADADAAAKIABBEIgBAmIgBATIABAQQABAKgDAHIgMABQgFgCgBgMgEAYIAmNIABAAIgBAoQAAAHADADIAIgCIgBgyIgDAAQgEAAgDACgEACKAhPQgGgEgEgBQgDgBgIgCQgHgBgEgCIgFgFIgGgGIgFgEQgDgCgBgDIgCgIIgCgJIgGgMQgCgFAAgJQAAgXADgIIAIAAIgBgCIABAAQAQgBAKANIAIALQAFAFANACQANABADAGQACAEAAAEIAAAvQAAANgGACIgFABIgGgBgABff/IAAADQgCAFADAHIAFAKQAEAGgBAEIALgFQgCgGgIgMIgGgJQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAIgBAAgAwuZGQgEgBgFgGQgIgKgMgDQgLgEgMAEQgHABgCgBIgEgCQgDgCgEABIgLACIgLAEQgEAAgJgBIgOAAQgLACgVgCIgIgCIgGgDIgPgEQgKgCgBgHQAAgFAFgCIAKgBIAMAAIAHABIAHADQAFACAIgBQAKgDADABQACgOAEgKQADgEAAgEIgDgGQgEgJAAgQIAAgbQAIgDAHABIABgBQAMAEAHgDIAFgDQADAAAEADQATAOANASIASAaQAJAKACAFIABAJQAAAGABADIAFAGIAQAPQAKAKgDAKIgHABIgFABIgCgBgA3c8fQgGgEgDgJIgFgPQACAIgDAHQgFAIgHgDQgHgDAAgNIAAgdQgJgFgKAAQgBAGABANQgBAFgEAEQgDADgFgBQgEgBgCgGQgCgCAAgIIAAg/QAAgHACgEQACgFAGgHQAPgOAKACIABAAIAFAHIgVAbQALAFAKABQgCgHACgGQADgHAGgDQAMAHgBASQgBAJABADQABADAEAEQAEAFAEALIAFAXQADAPAEAIQAFAOgDAFQgCADgFAAIgBAAQgEAAgCgCgEABMgkfQgEgDgDgJQgEgPgEgaIgHgoIgGgXQgDgNgBgJQgDgCgMgDQgJgCgDgFQgDgDAAgKQAAgSACgGIAGgRQAEgLABgGIAMAAIABAAQAGAIgBANIgBAMQAAAHABAFIARAGQALADAFAFQAHAHgEAHIgEAEQgDADAAAFIABAJIgCAQQAAAJABAJQAIA0AJAZQAFALgEAGQgEADgEAAQgFgBgDgDg");
	this.shape_3.setTransform(99.5,201.1);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(25).to({_off:false},0).to({_off:true},5).wait(4));

	// Слой 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiWZWQgCgBgDgDIgLgLQgGgEAAgEIgBgNQABgEgCgEIgFgFQgIgHgGgLQACgHALgDIAJgCQAFgCADgCIAGgJIAGgMIAIgBIAAgCIAQABQAKABAGAFQADAEADAJIAKAdQACAGgBADQgBAFgIAEQgLgBgCgLIgFAAQAAAIgIADQgIACgGgGIgCgPQgHAJgBAFQgDAJAEAGQADAEAFAEQAKAJgCAMIgHABIgFABIgCAAgAxMGlQgHgCgEgGQgDgGAAgLQgBgYAGgKIgCgFQgDAJgCADQgGAGgFgCQgHgDAAgNIAAgeQAAgNACgHIANABQAEAEAKADQALAEAAAHIABAGQABADAEABIAIABQAGADABANIAAANIgBAKQgEAIgQAGQgBAFAFAKQAFAKgCAFQgDACgEAAIgGgBgAQ73EQgJgCgCgPIgEgVQgDADAAAHIAAAKQgCAGgFACQgFACgFgEQgDgDAAgHIgBgKIgEgIIgFgIQgCgIAFgMQAHgPAAgFIAAgKQABgFAGgCQAFgDAFADQABgEAGgHQAFgHABgFIAAgJQAAgGACgCIAMAAIAAAAQAGAGALABIATACQAJADABAGQgHAKgXAEQALALgBAfIgBAmQAAAQgFAHQgEAGgLACQgGACgEAAIgBAAg");
	this.shape_4.setTransform(150.5,197.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(21).to({_off:false},0).to({_off:true},2).wait(11));

	// Слой 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWA/QgDgGAHgIQAIgIACgEQgGgFAAgNQABgOgEgFIgFgFQgDgDABgGQABgTAWgXQADgGAFgCQAGgDAGACIABgBQAFAIAAAUQgBARgBAEIgHAQQgDAFAAANIACATQABALgGAIQgDAEgJAFQgHADgEAAQgHAAgCgEg");
	this.shape_5.setTransform(218.5,-6);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(18).to({_off:false},0).to({_off:true},4).wait(12));

	// Слой 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGAeQgMAIgHABQgFABgFgCQgFgCgCgEQgCgEAAgHQAAgMACgGIAHgMIACgJQABgGADgCIAGgEQACgDAAgCIAIgBIgBgCIABAAQAIgBAFAFIAIAGQAGADAJgEQAEgCAHgHQAKAGABAPQAAAGgCARQgBAKgDADIgHAHIgJAIQgFAEgFABIgDAAQgJAAgHgJg");
	this.shape_6.setTransform(155.5,86);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(16).to({_off:false},0).wait(2).to({_off:true},1).wait(15));

	// Слой 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAHAyIgCgIIgBAAIgIgEIAAgHIgQgGQgLgDgDgHQAHgGADgJIAAgCIAAgPQAAgQADgGQAHgNALACIAAgDQANABADAHIABAFQAAgFADgFIAMAAIAAAAQAGAFAAAOIAAAmQgBALgCADQgCACgGACIABALQAAAIgCAEQgEAFgFAAQgEAAgDgDg");
	this.shape_7.setTransform(38.5,232.5);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(14).to({_off:false},0).to({_off:true},2).wait(18));

	// Слой 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AqqDSQgEgCgGgHIgagaQgIgHADgFIgVgBQgEAAgBABIgDAFQgDADgFAAIgIABQgDgBgCgHQgBgIgDgCQgDgCgHABQgJAAgDgCQgEgCAAgIIgBgMQgBgDgLgLQgJgHABgIQALgGAWAEIALgXQAGgOAGgFQAHgGARgDIABgCIAAAAIAHABIAHAAQAKAAAEAGQACADgBAMQgBALADAJIAPgCQAJABADAHQACAEAAAFIAAAYQAAAOgDAGIgGANQgDAJAKALIAPAPQAHAIgEAGQgCADgFABQgEAAgEgCgAMChgIgEgFQgHgPgEgCQgGADgIgCQgGgDgGgFQgJgHgDgFQgCgFAAgIQgBgEACgEIAFgFQALgIADgMIAAgOQAAgJADgEIAMAAIAAgBQAGAHgBAOQgBAQADAGQAMgDAgAAQAMABADADQADACADAJQADAHAAAFQAAACgGANQgEAIAAAIQAAAOgFADIgjABIgFgBgAMbh2QgBgIAEgHIAEgHQACgFgCgDIgHgCIAAACIAAAAIgBAOQgBAIgLAIIANAAIAAAAg");
	this.shape_8.setTransform(143.5,5.5);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(12).to({_off:false},0).to({_off:true},3).wait(19));

	// Слой 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag2DqQgSgCgUgRQgEgDgCgEIgBgHIAAgMIgCABIgDAEQgEAGgHABQgIABgFgFQgBgKAAgIQABgLAGgFQAGgGAIAAIAAgDIAKACIAAgkQAHgDAHAAQAHAGgBAJQADACAMABQAKABADAGQACADAAAFIABAIQACADAFACIAHAFQAFAFAAAMIgBATQgDAKgGALQgBAEgDADQgDADgGAAIgDgBgABiiSQgIAAgEgBQgGgBgFgHQgMgMgDgTQgDgSAIgQQAGgMAIABIAAgCIABgBQAPAEAZAIQAEABACADQADACABAJQAAAegBAIIgBALIABAGQgCAGgMAAg");
	this.shape_9.setTransform(28,63.5);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(10).to({_off:false},0).wait(2).to({_off:true},1).wait(21));

	// Слой 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgJA4IgFgGIgEgFQgCgCgGgCIgIgDQgFgEAAgNQgBgSAGgHIADgFIACgFIAAgLIAFgJQAGgJACgMIAHAAIABgCIAAAAQAFABAOAAQAOAAAHAHQAGAGABAQIABAcQAAAKgDAEQgBACgKAGQgMAGgJAMQADAHgBAIQgGACgDAAQgEAAgDgCg");
	this.shape_10.setTransform(10,310.9);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(8).to({_off:false},0).wait(2).to({_off:true},1).wait(23));

	// Слой 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACAdIgIgBQgEAAgDgCIgHgEQgJgDgEgCQgFgDgBgLQgBgKAEgJQAGgKAMAAIAAgCIAoABQAMgBAEAHQACADAAAGIAAAOQAAAHgCAEQgCAEgHACIgKAFIgJAFIgEABIgEgBg");
	this.shape_11.setTransform(226,100);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(6).to({_off:false},0).wait(2).to({_off:true},1).wait(25));

	// Слой 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVArQgMAAgDgGQgCgCAAgIIgBghQAAgJACgDQACgFAGgHQAPgPAKADQAEACADAHIAGALQAEAEAEACIAKAFQAFADACAEQAEAEABAHQABAJgBALQAAAIgEAEQgDAEgMAAg");
	this.shape_12.setTransform(157,85.7);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(4).to({_off:false},0).wait(2).to({_off:true},1).wait(27));

	// Слой 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAFA0QgFgFgGgNIgBAAQgIgCgHgHIgFgIQgCgDAAgIIAAgRIABgFIgBAAQgHgCgDgDQAAgKAIgFQAIgHAJACIAFADIACgCQAHgLAJAAIAAgCIABAAIAHABIAHAAQAKAAAEAFQACADAAAHQAAANgGALIgFAKQAEACADABQAGAIgDAMQgCAIgHAMIgEAKQgDAEgHABQgGAAgFgDg");
	this.shape_13.setTransform(39,231.6);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(2).to({_off:false},0).to({_off:true},3).wait(29));

	// Слой 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAEAfIgEgDIgLgFQgGgDgCgFIAAgHQgBgCgEgDQgEgCgBgBQgBgDACgEIAFgGQAGgGgCgJQAGgDAJAAIAAAAIAJAAQAGAAAEABQADACAEAGQAIAKAAAJQAAAEgEAHIgHANQgEAKgGABIgBAAIgEgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},2).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3.2,6.1,6.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(183,-325,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-325,366,650);


(lib.Символ27копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.792],0,0,0,0,0,10.1).s().p("AhGBGQgcgdAAgpQAAgoAcgeQAegcAoAAQApAAAdAcQAeAegBAoQAAAegQAYIgzgtQgIAKgIAJIA1ArQgdAcgoAAQgoAAgegdg");
	this.shape.setTransform(-13.9,-10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.686)").s().p("AiahyIg2grQAJgJAHgKIA0AtIFdE0g");
	this.shape_1.setTransform(8.6,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-20.9,53.5,46.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.had();
	this.instance.setTransform(-50.4,-47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.4,-47.8,101,96);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(157,245,57,0)","#A3FD1F","rgba(165,250,22,0)"],[0.02,0.486,1],-50.1,6.5,49.8,6.5).s().p("AnyGUIBCqzQFQlgHtFzIBnKgQjCA3j6AAQj4AAkyg3g");
	this.shape.setTransform(3.4,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.6,-52.3,100,92);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sword();
	this.instance.setTransform(-92,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-62,184,124);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.geree();
	this.instance.setTransform(-33.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-45,67,90);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.setTransform(-84,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-43.5,168,87);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.leg();
	this.instance.setTransform(-37,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-34,74,68);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg2();
	this.instance.setTransform(-23.1,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-15.3,46,32);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gerd();
	this.instance.setTransform(-47,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-34.5,94,69);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.yho2_1();
	this.instance.setTransform(-33,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-28,66,56);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-42,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-41,84,82);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.yho2();
	this.instance.setTransform(-35,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-28,70,56);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.v4b4();
	this.instance.setTransform(-14.3,-15,1.587,1.587);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-15,28.6,30.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.planet();
	this.instance.setTransform(-333.7,-199.4,1.63,1.63);

	this.instance_1 = new lib.planet();
	this.instance_1.setTransform(-317.4,-194.4,1.587,1.587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.7,-199.4,652.2,399.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoQDgQg9gEgigJQgwgMg+gkQgKgGgBgEQgDgHAHgOQARgZArgsQAwgwAegTQAvghAtgEQAagDAHgCQALgEASgUIBFhMIACADQAtgJA5ARQAaAHBIAfQA6AYB2AnQAkAMAOAPQAQAOAFAiIAKA6IAFAXQACANgEAIQgHAQgbAIQg1ARg9AMQhWAShhAIQhGAGhMAAQhBAAhFgEgAGJBGIg3AAQgdAAgJgNQgGgHABgTIAAgCIgCAAIgDgEIgBgFQgBgCgEgDQgDgEACgCQgHABgFgCQgCgCgFgGQgEgHgLgLIgdgaIgjgeQgRgRgCgQIALgBIAAgBQASAUAXAKIAAgCIADgDIgCAAQgHgDAFgLQAEgKAPgWQANgUAFgOQACgJAEgDQACgCALgBQAJgCAOgHQAPgIAIgCQAIgCAOABQAQAAAGgBQAMgCAXgIIAngGQAXgDANgIIAAABQBcAAAlADQAYACAQAGQAUAJAXAXQAoAqANAqQAKAfgCA9QAAAUgKAGQgFADgKABQh2AMhyAYQgoAJgPABIgaABIgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.6,-22.8,149.4,45.7);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDC900","rgba(255,188,0,0)"],[0,0.792],0,0,0,0,0,10.1).s().p("AhGBGQgcgdAAgpQAAgoAcgeQAegcAoAAQApAAAdAcQAeAegBAoQABApgeAdQgdAegpgBQgoABgegeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(1.9,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.8,-20.9,223.7,40.9);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.setTransform(-1.8,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-35,260,70);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:13.88,scaleY:13.88,alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-12.7,25.5,25.5);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ48("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(15));

	// Слой 2
	this.instance_1 = new lib.Символ48("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},15).wait(6));

	// Слой 1
	this.instance_2 = new lib.Символ48("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},15).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-13.2,26.5,26.5);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,x:1,y:-0.9},3,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:2.3,y:-2.2},4,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,x:1.3,y:-1.2},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-41,84,82);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(5.1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.762},14,cjs.Ease.get(-1)).to({alpha:0.5},15,cjs.Ease.get(1)).to({alpha:0.75},15,cjs.Ease.get(-1)).to({alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.1,-67.4,214.2,134.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.2},10,cjs.Ease.get(-1)).to({y:8},9,cjs.Ease.get(1)).to({y:4},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-15.1,28.6,30.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27копия2();
	this.instance.setTransform(-176.9,40,1.539,1.613,0,93.8,-86.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({x:240,y:520},8).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.5,-8,80.2,87);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.setTransform(-123,-225.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183,-325,366,650);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(-13.9,-10.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,187,6,0.686)").s().p("AjAiRIAQgSIFwFHg");
	this.shape.setTransform(4.7,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-20.9,47.9,41.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.alpha = 0.309;
	this.instance.shadow = new cjs.Shadow("#000000",0,0,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.6,-35.8,178,74);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(14,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,47.9,41.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlMBZIgJgFQgKgHgJgIIgSgOIgIgJIgEgJIgGgIIgCgCIAAgFIACgIIABgCIAFgKIgDgCIASgTQAJgKAKgDQAGgCAQABIAaADIAXAHIAWAHQAWAGAuAHIAiAEIgBACQAOAKARAJQAGAEACADIABABIAAAAIAAABQABAHgLAEQgTAXgZATIgKAHIgMAFIgKACQgGACgVABIgOAAIgbAAIgFACIgJABQgQgBgagOgAlggeIgDABIgCABIgBABIgCAAIAAABIACgBIADAAIAAgBIACgBIABgBIACAAIABAAIgBgBIgCABgADtAmIgLgCIgLACIgRgCIgWgGIgZgIIgIgCQgFgCgCgEIAAgDIgBgBQgHAIgGgFQgEgCABgEQAAgEADgBQACAEAEAAQAAgGAIgGQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAJgDIAFgEIAFgFQAGgEAJgDIAPgGQAKgDANgGIAXgMQAbgOAygRIAmgMIAAAAQAVADAIAGIAIAGQAMANABAJQABAIgDAJQgGAOgFAHQgJAOgQAPQgQASgNAGQgJAEgSACIgkAEQgSADgLAAIgDAAg");
	this.shape.setTransform(11,-47.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(82).to({_off:false},0).to({_off:true},2).wait(11));

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(10.2,-54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-102,101,96);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(-19.7,-8.6,0.577,2.153,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-98.3,219.5,160.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.5},9,cjs.Ease.get(-1)).to({rotation:-16},10,cjs.Ease.get(1)).to({rotation:-7.8},10,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-19,36.5,38.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.5},14,cjs.Ease.get(-1)).to({rotation:-12.2},12,cjs.Ease.get(1)).to({rotation:-6},11,cjs.Ease.get(-1)).to({rotation:0},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-41.2,84.1,82.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.setTransform(-7.9,-49.3,0.419,0.419);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(-5,51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-68.8,214.2,187.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ15();
	this.instance.setTransform(280,188);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9.6,x:275.5,y:190.3},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:20.5,x:270.5,y:192.8},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:10.1,x:275.3,y:190.4},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:280,y:188},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(221.5,198);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-5.8,x:222.9,y:201.2},9,cjs.Ease.get(-1)).to({rotation:-12.4,x:224.4,y:204.7},10,cjs.Ease.get(1)).to({rotation:-6.1,x:223,y:201.3},10,cjs.Ease.get(-1)).to({rotation:0,x:221.5,y:198},10,cjs.Ease.get(1)).wait(1));

	// Слой 13
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(170,211.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.02,skewY:-7.8,x:172.7,y:221.8},9,cjs.Ease.get(-1)).to({scaleX:1.04,skewY:-16.6,x:175.8,y:233.1},10,cjs.Ease.get(1)).to({scaleX:1.02,skewY:-8.3,x:172.9,y:222.3},10,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:170,y:211.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(268.5,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.01,skewX:-5,x:269.4,y:230.3},9,cjs.Ease.get(-1)).to({scaleY:1.02,skewX:-10.7,x:270.4,y:237.3},10,cjs.Ease.get(1)).to({scaleY:1.01,skewX:-5.3,x:269.4,y:230.7},10,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:268.5,y:224},10,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(238,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:225.1},9,cjs.Ease.get(-1)).to({y:229.2},10,cjs.Ease.get(1)).to({y:225.4},10,cjs.Ease.get(-1)).to({y:221.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(191,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1,skewX:2.8,x:192.8},9,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:6.3,x:194.8},10,cjs.Ease.get(1)).to({scaleY:1,skewX:3,x:192.9},10,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:191},10,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ13();
	this.instance_6.setTransform(167,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:8,y:137.1},9,cjs.Ease.get(-1)).to({rotation:17,y:130.6},10,cjs.Ease.get(1)).to({rotation:8.3,y:136.8},10,cjs.Ease.get(-1)).to({rotation:0,y:143},10,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(109,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:8.3,x:127.1,y:68.2},9,cjs.Ease.get(-1)).to({rotation:17.4,x:147.2,y:66.2},10,cjs.Ease.get(1)).to({rotation:8.6,x:128.1,y:68.1},10,cjs.Ease.get(-1)).to({rotation:0,x:109,y:70},10,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_8 = new lib.Символ16();
	this.instance_8.setTransform(302,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,rotation:-9.3,x:293,y:124.5},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-20,x:282.9,y:119.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-9.8,x:292.5,y:124.3},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:302,y:129},10,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ19();
	this.instance_9.setTransform(253,259);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:1.01,skewX:-4.5,x:251.7,y:259.1},9,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:-9.7,x:250.2,y:259},10,cjs.Ease.get(1)).to({scaleY:1.01,skewX:-4.8,x:251.6,y:259.1},10,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:253,y:259},10,cjs.Ease.get(1)).wait(1));

	// Слой 20
	this.instance_10 = new lib.Символ17();
	this.instance_10.setTransform(203.5,276.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-28.3,353.5,344.9);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(-43.4,0.6,1,1,0,-44.2,135.8);

	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(43.6,-0.6,1,1,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-59.3,204.4,118.6);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(-43.4,0.6,1,1,0,-44.2,135.8);

	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(43.6,-0.6,1,1,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-59.3,204.4,118.6);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.setTransform(-2,9.7,1.077,1.077);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AzqF5QiNgBAAiMIAAnXQAAiMCNgBMAnVAAAQCNABAACMIAAHXQAACMiNABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},1).to({state:[]},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ49();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-35,260,70);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.7},9,cjs.Ease.get(-1)).to({y:-10},10,cjs.Ease.get(1)).to({y:-5},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-19,36.5,38.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.6},6,cjs.Ease.get(-1)).to({y:10},7,cjs.Ease.get(1)).to({y:5},6,cjs.Ease.get(-1)).to({y:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-41.3,84.1,82.6);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(0,0,1.108,1.108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.7,-360,405.4,720);


(lib.Символ27копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-13.9,-10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({rotation:14.7},0).to({rotation:12,x:-220,y:-410},11).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-20.9,47.9,41.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-13.9,-10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-410,y:-260},11).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-20.9,47.9,41.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-57.7,-187.5,0.734,0.734);

	this.instance_1 = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-333.7,-208.2,652.2,408.3);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(232.9,191);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(232.9,191);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},4,cjs.Ease.get(-1)).to({_off:true},5,cjs.Ease.get(1)).wait(5).to({_off:false},5,cjs.Ease.get(1)).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},5,cjs.Ease.get(1)).to({startPosition:0},5,cjs.Ease.get(-1)).to({_off:true},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(221.5,198);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:221,y:201.5},4,cjs.Ease.get(-1)).to({x:220.3,y:205.8},5,cjs.Ease.get(1)).to({x:220.9,y:201.9},5,cjs.Ease.get(-1)).to({x:221.5,y:198},5,cjs.Ease.get(1)).wait(1));

	// Слой 13
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(170,211.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-4.8,x:175.6,y:214.2},4,cjs.Ease.get(-1)).to({rotation:-10.7,x:182.6,y:217.5},5,cjs.Ease.get(1)).to({rotation:-5.3,x:176.4,y:214.6},5,cjs.Ease.get(-1)).to({rotation:0,x:170,y:211.5},5,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(268.5,224);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.05,scaleY:1.05,x:270.3,y:226.4},4,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:272.5,y:229.4},5,cjs.Ease.get(1)).to({scaleX:1.06,scaleY:1.06,x:270.5,y:226.6},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:268.5,y:224},5,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_5 = new lib.Символ21();
	this.instance_5.setTransform(238,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.94,scaleY:0.94},4,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86},5,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93,x:238.1},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:238},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ20();
	this.instance_6.setTransform(191,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1.04,y:258.7},4,cjs.Ease.get(-1)).to({scaleY:1.09,y:257},5,cjs.Ease.get(1)).to({scaleY:1.04,y:258.6},5,cjs.Ease.get(-1)).to({scaleY:1,y:260},5,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_7 = new lib.Символ13();
	this.instance_7.setTransform(167,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:4.8,x:169.7,y:140.4},4,cjs.Ease.get(-1)).to({rotation:10.7,x:173,y:137},5,cjs.Ease.get(1)).to({rotation:5.3,x:170,y:140.1},5,cjs.Ease.get(-1)).to({rotation:0,x:167,y:143},5,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_8 = new lib.Символ16();
	this.instance_8.setTransform(302,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-6.5,x:299.1,y:126.4},4,cjs.Ease.get(-1)).to({rotation:-14.7,x:295.4,y:123},5,cjs.Ease.get(1)).to({rotation:-7.3,x:298.7,y:126},5,cjs.Ease.get(-1)).to({rotation:0,x:302,y:129},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ19();
	this.instance_9.setTransform(253,259);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:1.05,y:258.2},4,cjs.Ease.get(-1)).to({scaleY:1.11,y:257.1},5,cjs.Ease.get(1)).to({scaleY:1.06,y:258.1},5,cjs.Ease.get(-1)).to({scaleY:1,y:259},5,cjs.Ease.get(1)).wait(1));

	// Слой 20
	this.instance_10 = new lib.Символ17();
	this.instance_10.setTransform(203.5,276.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.8,96,219.3,220.5);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-37.7,280,75.4);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(0,91,0.692,0.692);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08,y:0},7).to({scaleX:1,scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,66.8,180,48.5);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ1копия();
	this.instance.setTransform(-62.7,-229.2,0.917,0.917);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(9.5,5.2,1.25,1.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.6,-244.1,815.3,499.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(7.6,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8.1},9,cjs.Ease.get(-1)).to({y:-21.8},10,cjs.Ease.get(1)).to({y:-8.8},10,cjs.Ease.get(-1)).to({y:4.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.1,-204.1,652.2,408.3);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:20.5},20,cjs.Ease.get(-1)).to({x:40},19,cjs.Ease.get(1)).to({x:20},20,cjs.Ease.get(-1)).to({x:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.1,-204.1,652.2,408.3);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(0,0,1,1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.1},18,cjs.Ease.get(-1)).to({rotation:1.4},15,cjs.Ease.get(1)).to({rotation:0},14,cjs.Ease.get(-1)).to({rotation:-1.7},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.8,-205,664,419);


(lib.Символ10 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ55();
	this.instance.setTransform(110,93);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(107.6,-36);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Символ 6
	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(-7.6,7);

	this.instance_3 = new lib.Символ44();
	this.instance_3.setTransform(-44.6,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	// Символ 8
	this.instance_4 = new lib.Символ34();
	this.instance_4.setTransform(42.1,-189.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

	// Символ 7
	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(190,-153.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.4,-231.2,664,452.2);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.yoda.gotoAndStop(1);
		}
		
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.yoda.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(150.1,86.9,1.079,1.079);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(272.5,517);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.yoda = new lib.Символ10();
	this.yoda.setTransform(41.3,459.4);

	this.timeline.addTween(cjs.Tween.get(this.yoda).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(195.5,-195.7);

	this.instance_3 = new lib.Символ27копия();
	this.instance_3.setTransform(-90,90,1,1,93.8);

	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(414,180.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_5 = new lib.Символ31();
	this.instance_5.setTransform(150,290);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.1,96.2,736.1,884.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
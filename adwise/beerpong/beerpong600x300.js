(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon.jpg?1467295627300", id:"fon"},
		{src:"images/handball.png?1467295627300", id:"handball"},
		{src:"images/mouse.png?1467295627300", id:"mouse"},
		{src:"images/stakan.png?1467295627300", id:"stakan"},
		{src:"images/stringi.png?1467295627300", id:"stringi"},
		{src:"images/telka_03.png?1467295627300", id:"telka_03"},
		{src:"images/telka_05.png?1467295627300", id:"telka_05"},
		{src:"images/telka_07.png?1467295627300", id:"telka_07"},
		{src:"images/telka_13.png?1467295627300", id:"telka_13"},
		{src:"images/telka_15.png?1467295627300", id:"telka_15"},
		{src:"images/telka_18.png?1467295627300", id:"telka_18"},
		{src:"images/telka_21.png?1467295627300", id:"telka_21"},
		{src:"images/winning_at_beer_pong_by_slimmckenzied98wchi.png?1467295627300", id:"winning_at_beer_pong_by_slimmckenzied98wchi"}
	]
};



// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,462);


(lib.handball = function() {
	this.initialize(img.handball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,212);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.stakan = function() {
	this.initialize(img.stakan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,125);


(lib.stringi = function() {
	this.initialize(img.stringi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,67);


(lib.telka_03 = function() {
	this.initialize(img.telka_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,62);


(lib.telka_05 = function() {
	this.initialize(img.telka_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,57);


(lib.telka_07 = function() {
	this.initialize(img.telka_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,79);


(lib.telka_13 = function() {
	this.initialize(img.telka_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,144);


(lib.telka_15 = function() {
	this.initialize(img.telka_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,166);


(lib.telka_18 = function() {
	this.initialize(img.telka_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,184);


(lib.telka_21 = function() {
	this.initialize(img.telka_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,50);


(lib.winning_at_beer_pong_by_slimmckenzied98wchi = function() {
	this.initialize(img.winning_at_beer_pong_by_slimmckenzied98wchi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,342);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D97B2").s().p("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");
	this.shape.setTransform(71.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,0,122.3,22.6);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE786A").s().p("ABRBuQgFgEgBgHIgBgdIiCAAIAAAbQgBAIgFAEQgFADgGAAQgGAAgFgDQgFgEgBgHIAAgrQACgNAQAAIAVAAQAJgYAFgWQAEgXAAgZIAAgXQgCgIAFgFQAFgEAJgBIBIAAQAGACAEADQADACACAGIAAB5IAWAAIAKAFQADADACAFIAAALIAAALIABALIAAALQgBAIgFAEQgFAEgGAAQgGAAgFgEgAAAhAIAAAMQAAAYgDAYQgFAWgIAYIA1gBIAAhqgAoKBWQgFgCgDgEQgEgFAAgGIAAg0QgGgDgCgEQgDgEABgFQAAgCACgEQADgEAFgDIAAhLIADgGIAEgGIAHgDQADgBADABIAWgHQALgDALAAQALgBALADQALACAKAHQAIAFAGAIQAGAIAEAIQAEAIABAIQACAHgBAIQAAAPgHAOQgGAMgMAJQgMAKgQAFQgMADgNAAIgYgCIAAAqIgBAHIgDAGQgDAFgFACIgFAAIgGgBgAnbhNQgNACgLAFIAAA/QANACAOgBQAOgBAMgIQAIgFAEgIQADgJgBgIQgBgJgFgIQgFgIgHgEQgJgEgJAAIgHABgAGKBSQgGgBgEgGQgCgDgBgEIgBgHIAAgyIhDAAIAAAxIAAAHIgCAFQgEAHgGACQgFACgGgCQgFgCgEgFQgEgGAAgHIAAiTQAAgHAEgGQAFgFAGgCQAFgDAGACQAGACADAHIABAFIAABFIBDAAIAAg+QAAgGADgFQADgGAGgDQAGgCAFABQAGABAEAFQAEAEAAAIIAABCQAHACAEAFQADAFAAAGQAAAFgEAEQgDAFgHABIAAAyQAAAIgDAFQgEAGgFACIgHABIgEAAgAj3BSQgFgCgEgFQgEgFAAgFIgCgLQgDgQgFgRIhGABIgLAqQgBAGgEAFQgFAGgGABQgFAAgFgCQgEgDgDgFQgDgGABgGQABgJADgJIAEgRQAHgZAIgWQAJgYAKgXIAQggIAGgHQAEgDAFAAQAIAAAFAFQAJAKAIALQAIALAHAMQAMAZAKAZIAMAAQAGABAEAFQAFADAAADQABAFgCAEQgBAEgEADQgDAEgGABIAJApIAAACQgBAHgDAEQgEAFgEABIgGABIgEAAgAlJgLIAtgBIgLgZQgGgNgIgMgACuBNIgMgBQgGgBgFgDQgJgGAAgLIAAh4IgFgGIgDgHQAAgEABgDQACgEADgDQAGgEAHgCIAPgCQAPgDAPAAIApgBQAGgBAFACQAFACADAEQADAFABAFQAAAFgCAEQgCAFgGACQgIADgIAAIg7ACIAAAoIA8gDQAGABAEAEQADAFABAFQAAAFgCAGQgDADgFACQgFACgJABIgyACIAAAjQAQACAQgBQAQgCAPgEIACAAQAGAAADADQAEACADAEQACADABAFQAAAEgCAFIgEAEIgFAEQgZAGgNAAIgQABIgWgBgAHFBGQgFgDgBgHIAAiLQACgHAFgDQAEgDAGAAQAGAAAEADQAFADACAHIAAAnIAIgDIAIgBQAMgCAJAGQAJAFAGAIQAGAJADAKQADAJAAAJQAAAMgDANQgEAMgKAKQgGAGgHADQgHADgIAAQgFAAgFgCIgKgEQgCAFgEADQgFADgFAAQgGAAgFgEgAHtgKIgBAEIgCAEQgCAFAAAHIAAAJIACAHIAEAJQACAFADAAQACAAADgDIADgGIADgKIABgKIgBgLIgEgJQgEgGgDAAQgDAAgDAFgAi+BGQgJgEgOgLIgFgGIgCgHQACgGAFgEQAFgDAFAAQAHAAAFAEIAFAFIAGAEQACAAAEgCIAXgcQADgGADgGIgGgBQgMAAgMAGQgFAEgFAAQgFAAgEgCIgGgFQgCgCAAgDIACgGQACgEAEgDIAbgUQAHgGAFgHQAGgHACgJIgOAFIgUALQgKADgGgEQgHgEAAgHQAAgGAHgHIAhgQIAPgFQAIgCAGABQAKACAFAHQAHAJAAAKQAAAMgGALQgGAKgHAJQALAEAGAIQADAEAAAGQABAEgBAFQgCAHgGALQgGAKgJAKQgIAKgKAIQgKAHgIADIgIABQgFAAgGgCg");
	this.shape.setTransform(67.1,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.5,0,109.2,22.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D97B2").s().p("AGRCKQgHgFgBgJIgBglIioAAIAAAiQAAAKgGAFQgIAFgHAAQgHAAgHgFQgGgEgBgKIAAg2QADgQATAAIAbAAQALgfAHgcQAFgdABgfIgBgdQgDgLAGgGQAHgGALAAIBdgBQAIADAGAEQAEACABAIIABCZIAcAAIAMAGQAFAEACAGIAAAPIABAOIAAAOIAAAOQAAAKgIAEQgGAGgIAAQgHAAgGgFgAEphTIAAAQQAAAegFAeQgGAdgLAeIBHgBIgBiHgAlrBoQgKgCgHgEQgQgEgLgKQgKgKgIgMQgGgNgFgOQgDgPgBgOQgCgVAGgYQAGgYANgVQAGgKAHgJQAJgJAJgHQATgPAZgFQAOgCALABQAOAAANAFIASAIQAJAFAIAHQAKAKAIAMQAHAMAEAOQADARAAARQAAAQgDARQgGASgKATQgJAUgOAPIgPAOIgRALQgTAJgWAAQgRAAgIgCgAlQhhQgMACgKAIQgOALgIAPQgIAOgGARQgCAPgBAPQAAANAFAOQAEAKAIAIQAHAJAKAEQAKAFALABQAMAAAKgFQALgEAIgIQAJgIAFgJQAHgKADgKIAIgUIADgcQgBgPgFgNQgFgLgLgIQgKgHgMgEQgIgCgJAAIgJABgACLBmQgHgCgGgGQgEgHAAgGIgCgPQgEgUgIgVIhYABIgOA2QgBAHgFAHQgFAHgGABQgIABgFgEQgFgDgFgHQgDgGABgJQABgLAFgLIAFgWQAIgeAKgeQAJgeANgdIAUgpIAIgIQAGgEAGAAQAKAAAFAGQANANAKANQAKAOAIAQQAQAfANAgIAPAAQAHABAFAGQAGAFABAFQAAAFgBAFQgDAFgDAEQgFAFgHABIAMA0IAAADQgCAIgFAGQgDAFgHACQgDACgDAAIgFgBgAAigQIA6gBIgPggQgIgQgJgPgAhfBXQgGgEgBgJIgBiZIg3gBIgBCYQgBAKgGAEQgHAFgHAAQgIAAgGgEQgHgEAAgKIAAirQABgGADgDQAEgEAJgDIBigFQALAAAGAEQAGADACAJIABCvQAAALgHAEQgGAFgIAAQgHAAgHgFgAn6BXQgHgEgBgJIgBiZIg3gBIgBCYQAAAKgHAEQgHAFgHAAQgIAAgFgEQgIgEgBgKIAAirQACgGAEgDQADgEAJgDIBigFQAMAAAFAEQAGADADAJIABCvQgCALgGAEQgGAFgIAAQgGAAgHgFgAJEBXQgHgEgBgKIgBhbIg6BfQgEAGgFACIgKABQgIAAgGgEQgGgFgBgJIgCiqQACgJAHgEQAFgEAIAAQAHAAAFAEQAGAEAEAIIAABjIA4hhQAEgFAFgDQAFgDAGAAQAGAAAGAEQAHAFACAHIADCoQAAAKgIAEQgGAFgIAAQgHAAgGgEg");
	this.shape.setTransform(61.5,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,28.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FA7972").s().p("AhwBdQgHgBgEgEQgFgFgBgHIAAh/IgjAAQgIgBgFgDQgEgDgCgDQgCgFACgEQABgFADgDQADgEAFgCQAXgBAWAAIBGABIACAAQAFACADAFQAEAFABAFQAAAFgCAEQgDAEgHACQgMACgLAAIgTgBIAACCQgBAIgFADQgEADgGAAIgBAAgAkRBbIgNgEQgGgDgGgFQgGgEgFgGQgGgIgDgHQgFgIgDgJQgDgNABgOQAAgMAEgNQAFgNAHgMQAHgLALgIIAQgLIAogQIAKgBQAGABAGACIAHAFIAIAGIAGAIIADAIIABAHQgBAEgCADIgFAFIgHACQgFABgFgCQgDgCgBgDIgFgHQgCgDgDgBIgEAAIgSAHQgJAEgJAGQgIAGgFAIQgHAIgCAKQgEAKABAMQABAMAGAKQADAHAFAEQAGAFAHACQAGACAHAAQAHgBAGgEIAKgJIAIgMQAFgEAFgBQAFAAAFABQAFADACAFQADAEgBAHQgCAHgFAFIgJAKQgGAGgFAEIgNAHIgNAEIgNABgAIcBbQgGgBgEgGQgCgDgBgDIAAgHIAAgvIhAAAIAAAuIAAAHIgCAFQgEAHgFABQgGACgFgCQgFgBgEgGQgEgFAAgHIAAiLQAAgIAFgFQADgFAHgCQAEgCAHACQAFABADAHIABAEIAABCIBAAAIAAg6QAAgGACgFQAEgGAEgCQAHgDAEABQAGACAEAEQAEAEAAAHIAAA/QAGACAEAFQADADAAAGQgBAFgCAFQgEAFgGABIAAAvQAAAIgDAFQgEAFgEACIgIACIgDgBgAGLBbQgEgCgFgEQgCgFgBgFIgBgLQgEgPgFgQIhCABIgLAoQgBAGgDAFQgFAFgFABQgGAAgEgCQgEgCgDgGQgCgFABgGQAAgJACgIIAFgQQAGgYAIgVQAJgWAJgWIAPgfQADgEAEgCQADgDAFAAQAHAAAFAFQAJAJAIAKQAHAKAGAMQAMAYAKAWIALAAQAGAAAEAFQAEAEAAAEQABAFgCAEQgBAEgDADQgDADgGABIAJAnIAAACQgBAGgEAFQgDAEgEABIgFACIgFgBgAE9AAIAsAAIgMgWQgFgNgIgLgABaBbQgFgCgEgEQgDgFgBgFIgBgLQgDgPgGgQIhCABIgJAoQAAAGgEAFQgFAFgFABQgFAAgEgCQgFgCgDgGQgCgFABgGQAAgJADgIIAFgQQAGgYAHgVIASgsIAOgfIAGgGQADgDAGAAQAGAAAFAFQAJAJAIAKQAIAKAFAMQAMAYAKAWIAMAAQAEAAAFAFQAFAEAAAEIgBAJQgBAEgEADQgEADgEABIAIAnIAAACQgBAGgDAFQgDAEgFABIgFACIgEgBgAAMAAIArAAIgLgWQgGgNgHgLgACEBZQgFgBgCgHQgBgDgBgIIAAiKQABgIABgDQADgEADgCQAEgCAEABQADAAAEACQADACADAEIADADIABAEIgBA0QAKgGAIgIQAIgHAIgJIAWgcIAHgFQAGgDAFABQAGAAADAEQAEADABAGQABAFgEAGIgCAEIgQAVIggAgIA5A7QAGAHAAADQABAGgBAFQgDAEgDADQgEADgFABQgFAAgFgEIgFgEIg/hEIgFADIABA5QgBAHgEAEQgEAFgFABIgFABIgFgBgAouBRQgDgGACgIIAAhtQgEAAgDgCQgDgDgCgDQgDgEAAgEQAAgEADgEQAFgIAJgFIASgIQAOgEAPAAQAPgBAOAGQANAHAHAJQAHAKACALQACALgDAKQgCAGgEAFIgIALQAGAEAFADQAFAFACAFQAFAMAAAMQgCAMgGALIgIALIgKAJQgHAEgKADQgIADgLABIgmAAQgMgBgCgHgAoNA4IANAAIANgCIAMgFQAFgEADgFQABgHgBgEQgBgGgGgDIgKgFIgJgDIgUAAgAoNg4IAAAjIATgBIAJgDQAFgCAEgEQAFgGgCgGQgBgHgGgEQgHgEgJAAQgJAAgIACg");
	this.shape.setTransform(57.6,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.1,18.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stakan();
	this.instance.setTransform(0,13.9,0.535,0.535,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,78.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egy4AZzMAAAgzlMBlxAAAMAAAAzlg");
	this.shape.setTransform(325.8,165.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651.6,330.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00D602","#00FF02"],[0,1],0,18.2,0,-18).s().p("AhQE+IgqhMIAzAAQgRkdBokgIBrAAQizEYAgElIAwAAIhDBMIgVAOg");
	this.shape.setTransform(12.4,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.7,66.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00D602","#00FF02"],[0,1],-5.1,-36.5,5.2,36.6).s().p("AAnGIQBDmTkYl9IBrAAQDFEgAtHwg");
	this.shape.setTransform(17.6,39.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.1,78.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handball();
	this.instance.setTransform(0,0,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.2,177);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhBPIgGgCIgEgDQgCgBAAgDQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBIAEgBQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAHABIAEAAQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAgBIgFgBIgKAAIgEgCQgFACgFAAQgGAAgGgCQgFgDgDgFIgEgIIgFAIQgDAFgFADQgFACgGAAQgGAAgGgCQgFgDgDgFQgEgGgDgJIgEgPIgBgQIAAgjQAAgEADgCQADgCADAAQADAAADACQADACABAEIgBAWQAAANACALQACAOAFALIADADIACAAIACAAIACgCQADgHACgIIAEgQIACgfIAAgEIAAgDQABgEADgCIAGgCQADABADABQADACABAEIgBATQAAANACAMIADANIAFAMIABAAIABACIABAAIABAAIABAAQAEgFACgGIADgPQADgMAAgKIABgaQABgEADgCQACgCAEAAQADAAADACQACABABAFIAAAUIgCAUIgEAVIgCAIIABADIABAGQAIABAFACQAFADABAHQAAAMgHAFQgDADgEABQgFACgFAAgAFgA9IgIgDQgGgCgFgEQgFgFgDgGQgEgGgCgGIgCgNQgBgLADgJQADgLAGgJQACgFAEgEIAIgHQAJgHALgCIAMgBIAMACIAIAFQAEACAEADQAFAEADAGQADAFACAHIABAPIgBANQgDAKgEAIQgFAKgGAGIgHAHIgIAEQgIAFgLAAIgLgBgAFtgeQgGABgEAEQgGAFgEAGQgEAHgCAHIgCAMQAAAHACAHQACAEAEAEIAHAGQAFACAFAAQAFAAAFgCQAFgCAEgDIAGgIIAFgJIADgKIACgMQAAgGgDgGQgDgFgEgDQgFgEgGgCIgGAAIgFAAgAEIA6QgDgDAAgFIAAhLIgNAAIgJgBIgIgCQgCgBgBgDQgBgDABgCQAAgDACgCQACgDADAAIAbgBIAsABIAFAEQACACAAAEQABADgCACQgBADgEABIgPABIgLAAIAABOQAAAEgDACQgDACgEAAQgEgBgDgCgAABA8IgGgDQgEgBgDgDIgHgHIgGgJQgCgEgBgGQgCgIAAgIQAAgIACgHQADgHAEgHQAFgHAHgGIAJgGIAPgHIAHgDIAHAAIAHACIAEADIAFADIADAFIACAFIABAEIgCAEIgDAEIgEABQgEAAgCgBIgDgEIgCgDIgEgDIgCABIgLADIgLAHQgDADgDAFQgEAFgCAEQgCAHABAHQAAAIAEAGQACAEADADQACADAEABIAIABQAEAAAEgDIAGgGIAEgGQADgEADAAQAEAAADABIAEAFQACACgBAFQgBADgDADIgGAHIgHAGIgHAEIgIADIgIAAgACAA8QgDgBgDgDIgCgEIAAghIgnAAIAAAgIgBAEQgCADgEABQgDACgDgCQgDgBgCgDQgDgDAAgFIAAhTQAAgEADgDQADgEADgBQADgBAEABQADABACAEIAAACIAAApIAnAAIAAgkQAAgDACgDQABgEAEgCQADgBADAAQAEABACADQACADAAAEIAAAmQAEAAACACQACAEAAADQAAADgCADQgCACgEACIAAAcQAAAEgCAEQgCADgDABIgEABIgCAAgAH5A6QgGgBgFgCQgFgEgEgFQgIgLgDgMIgBgNQAAgGABgEQACgKADgJIAFgJIAGgHQAFgGAHgDQAHgDAGAAQAHgBAHAEQAHACAFAGQAGAFADAGIAFANQABAHAAAFQAAAIgCAGQgCAMgGALQgGALgLAIQgFACgHABIgEAAIgIgBgAH9gZIgGADQgEAGgDAHQgCAIgBAFQAAAIABAGIABAHIAEAHQACAEADABQADADAEgBQAGABAEgDQAEgCADgFQADgDABgFIADgKIAAgBIABgLQAAgGgCgGQgCgGgEgFQgFgDgHAAIgHABgAG0A4QgEgDgBgHQAAgGADgEQAFgEAFAAQAFAAAEADQAEADAAAHQAAAHgEADQgEADgFAAQgEAAgEgCgAoZA6QgHAAgBgEQgCgEACgFIAAhBIgFgCIgDgDQgCgCAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQADgGAFgCIALgFQAJgDAJAAQAJAAAIADQAIAEAFAGQAEAGABAHQABAGgCAHIgDAGIgFAFIAHAFIAEAGQADAIAAAHQgBAHgEAHIgFAGIgGAGQgEACgGACIgLACgAoNAnIAIgBIAIgBIAHgDQADgCACgDQABgEgBgDQgBgDgDgCIgGgEIgGgBIgMAAgAoNgdIAAAWIAMAAIAFgCIAFgFQADgDgBgEQAAgDgEgDQgFgDgFAAIgKABgAjrA5IgGgBQgEAAgDgCQgFgEAAgFIAAhFIgDgDIgCgFIABgEQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABgBQADgCAFgBIAIgBIARgCIAYgBQADAAADABQADABACADIACAFIgBAFQgBADgEACQgEABgFAAIgiABIAAAXIAjgBQADABACACQACAAABADQAAADgBAEQgCACgDABQgDACgFABIgKABIgTAAIAAAUQAJABAJgBQAKgBAJgCIABAAQADAAACACIAEADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQABACgCACIgCAEIgDACQgOADgHAAIgMABIgLgBgAm9A5IgGgBQgEAAgDgCQgFgEAAgFIAAhFIgDgDIgCgFIABgEQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABgBQADgCAFgBIAIgBIARgCIAYgBQADAAADABQADABACADIACAFIgBAFQgBADgEACQgEABgFAAIgiABIAAAXIAjgBQADABACACQACAAABADQAAADgBAEQgCACgDABQgDACgFABIgdABIAAAUQAJABAJgBQAKgBAJgCIABAAQADAAACACIAEADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQABACgCACIgCAEIgDACQgOADgHAAIgMABIgLgBgACeA3QgCgCAAgEIABgFIAcgfIgCgCIgDgBQgIgEgFgFQgGgFgCgHIgBgHQAAgFACgGQADgFAFgDQAEgDAGgCQAGgCAGACIAOAEQACgCAFAAQADAAACABQADACABAEIAABQQAAAFgDACQgDADgDgBQgEAAgDgBQgDgDAAgEIAAgZIgdAgIgEABIgDABQgEAAgDgCgAC3gZIgEACIgCADIAAAFQABADADAEIAFAEIAHAEIAIAAIAAgSIgHgFQgDgDgEAAIgEABgAh9A1QgDgCAAgFIgBgqIgaAsIgEAEIgFABQgDAAgDgDQgDgCAAgEIgBhMQABgFADgBQACgCAEAAIAGABQACACACAEIAAArIAagqIADgDIAFgBQAEAAACABQADACABADIABBMQAAAFgDACQgDACgDAAQgEAAgDgCgAG0AFQgEgDgBgFQAAgDABgDQACgEADgBIAGgCQAEAAADABQADABACADQACADAAAEQAAAFgEADQgEAEgFAAIgBAAQgEAAgDgDgAiXgwQgHgCgEgFIgEgFIgCgGQAAgDABgDQAAgDAEgCIACgBIADAAQAEABACACIADAGIAEAEQADADAFAAIADgBIADgBIADgDIAEgFIACgDIAEgCIAFABIAEAEQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAEgCAEIgEAHQgFAFgGACQgGADgHAAQgHAAgGgEg");
	this.shape.setTransform(55.6,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.3,15.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBMQgDgCgBgEIAAgRIhNAAIAAAQQAAAEgDACQgDADgDAAQgEAAgDgCQgDgCAAgFIAAgZQABgHAJAAIAMAAQAGgOACgNQADgMAAgOIAAgOQgBgEADgDQACgDAFAAIArAAQAEABACACQACABABADIAABFIANAAIAFADQACACABADIAAAGIAAAHIABAGIAAAGQgBAFgDACQgDACgDAAQgDAAgDgCgAg0AlIgBg9IgVABIAAAHQAAAOgDAMQgDANgFAOIAhAAgAl4A9IgIgDQgHgCgFgEQgFgFgDgGQgDgFgCgHIgCgNQgBgKADgJQACgMAGgJQADgFAEgEIAIgHQAIgHAMgCIALgBIAMADIAJAEQAEACADADQAFAEADAGQAEAGABAGIACAPIgBANQgDAKgFAJQgEAJgGAGIgHAHIgIAFQgIAEgLAAIgLgBgAlrgeQgGABgFAEQgGAFgEAHQgEAGgCAHIgCAMQAAAHADAHQABAEAEAEIAIAGQAFACAFAAQAFABAFgDQAFgCADgDIAHgIIAFgJIADgKIABgLQAAgHgDgGQgCgFgFgDQgEgEgGgBIgHgBIgEAAgACmA8QgDgBgDgDIgCgEIAAghIgnAAIAAAgIgBAEQgCAEgEABQgDABgDgBQgDgCgCgDQgDgDAAgEIAAhUQAAgEADgDQADgEADgBQADgBAEABQADABACAEIAAADIAAAoIAnAAIAAgkQAAgDACgDQABgEAEgBQADgCADABQAEABACACQACADAAAEIAAAmQAEAAACACQACAEAAADQAAADgCADQgCADgEABIAAAdQAAAEgCADQgCADgDACIgEAAIgCAAgABPA8QgDgBgDgDQgCgDAAgDIgBgGIgFgTIgoAAIgGAZIgDAGQgDADgDABQgEAAgCgBQgDgCgBgDQAAgDAAgEIABgKIACgKIAJgbIALgaIAJgTIAEgEQACgBADAAQAEAAADADIAKALIAIAOQAIAOAFANIAHAAQAEAAACADQADACAAADIgBAFQAAACgDACQgCACgDABIAFAYIAAABQAAAEgCACIgFAEIgCAAIgDAAgAAfAFIAbAAIgHgNIgIgOgAiTA8QgDgBgCgDQgCgDAAgDIgBgGIgFgTIgpAAIgGAZIgDAGQgDADgDABQgDAAgDgBQgCgCgCgDQgBgDAAgEIACgKIADgKIAIgbIALgaIAJgTIAEgEQACgBADAAQAEAAADADIALALIAIAOQAHAOAGANIAHAAQADAAADADQACACAAADIAAAFQgBACgCACQgCACgDABIAFAYIAAABQgBAEgCACIgEAEIgDAAIgDAAgAjCAFIAaAAIgHgNIgIgOgAG5A7QgGgBgFgDQgGgDgDgFQgJgMgCgMIgBgMQgBgHACgEQABgKAEgJIAEgJIAGgHQAGgGAGgDQAHgDAHAAQAHAAAHADQAGACAGAGQAFAFAEAGIAEANQACAHgBAFQAAAIgBAHQgCAMgGALQgGALgLAHQgGACgGABIgEAAIgIAAgAG8gZIgFAEQgFAFgCAHQgDAIAAAFQgBAIABAGIACAHIADAIQACADADACQADACAFAAQAFAAAFgDQAEgCACgEQADgEACgFIADgKIAAgBIABgLQAAgFgDgHQgCgGgEgEQgEgEgHAAIgIABgAFzA4QgEgDAAgHQgBgGAEgEQAEgDAFAAQAFgBAEADQAFAEAAAGQAAAHgEADQgEADgFABQgFAAgEgDgAFIA1QgDgCAAgEIgBgrIgaAtIgEADIgFABQgDAAgDgCQgDgDAAgEIgBhMQABgEADgCQACgCAEAAIAGACQACACACAEIAAArIAagrIADgDIAFgBQAEAAACABQADACABAEIABBLQAAAFgDACQgDACgDAAQgEAAgDgCgAD1A1QgDgCgBgEIAAgrIgbAtIgEADIgEABQgEAAgDgCQgCgDgBgEIAAhMQAAgEADgCQADgCADAAIAGACQADACABAEIAAArIAagrIAEgDIAFgBQADAAADABQADACABAEIABBLQAAAFgDACQgDACgEAAQgDAAgDgCgAj+A1QgDgCAAgEIgBhFIgTAAIgGAAIAABEQgBAFgDACQgCACgEAAQgDAAgDgCQgDgCgBgEIAAhNQABgDACgCIAFgDIAtgCQAFAAADACQACABACAFIAABOQAAAFgDACQgDACgEAAQgDAAgDgCgAm5A1QgDgCgBgEIAAhFIgTAAIgHAAIAABEQAAAFgDACQgDACgEAAQgDAAgDgCQgDgCAAgEIAAhNQAAgDACgCIAGgDIAsgCQAFAAADACQADABABAFIABBOQgBAFgDACQgDACgDAAQgDAAgDgCgAFzAFQgEgDAAgEQgBgEACgDQACgDADgCIAGgCQADAAADACQADABACADQACACAAAFQAAAEgEAEQgDADgFAAIgBAAQgEAAgEgDgAEugvQgHgDgEgFIgEgFIgCgGIABgGQAAgCAEgCIACgBIADAAQAEAAACADIADAFIAEAFQADACAFAAIADgBIADgBIADgCIAEgGIACgDIAEgBIAFABIAEADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAEgCADIgEAHQgFAFgGACQgGADgHAAQgHAAgGgDg");
	this.shape.setTransform(49.2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.4,15.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_15();
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,123.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_18();
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.1,137.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_21();
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,37.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_13();
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,107.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_05();
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.8,42.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_07();
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,59);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_03();
	this.instance.setTransform(0,0,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,46.3);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.mouse();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stringi();
	this.instance.setTransform(-52.6,-17.9,0.923,0.923,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-41.8,105.2,83.7);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.3,22.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(85.6,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},9).to({rotation:15},10).to({rotation:0},10).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(186.4,28,1,1,0,0,0,54.6,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:170.2},9,cjs.Ease.get(-1)).to({x:186.4},5).to({x:198.9},5).to({x:186.4},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(189.3,62.9,1,1,0,0,0,56.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:199.3},9,cjs.Ease.get(-1)).to({x:189.3},5).to({x:166.8},5).to({x:189.3},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#333333"],[0,1],69.5,-85.5,-70.5,77.9).s().p("A1NoXMAqbAAAIiwORMglDACeg");
	this.shape.setTransform(142.1,53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.3,0,271.7,107.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ33();
	this.instance.setTransform(36,43.4,1,1,0,0,0,34.5,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15,y:43.3},14).to({rotation:0,y:43.4},15).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(147.7,25.3,1,1,0,0,0,61.5,14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:127.7},14,cjs.Ease.get(-1)).to({x:147.7},15,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(150.3,60.7,1,1,0,0,0,57.6,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:170.3},14,cjs.Ease.get(-1)).to({x:150.3},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#333333"],[0,1],-69.5,85.6,70.5,-77.8).s().p("A1NIYICvuRMAlFgCeICnQvg");
	this.shape.setTransform(107.2,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-19.1,271.7,107.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(334.3,222.8,1,1,0,0,0,325.8,165.2);
	this.instance.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.fon();
	this.instance_1.setTransform(0,0,0.986,0.854);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,689.9,394.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(31.4,39.3,1,1,0,0,0,17.6,39.3);

	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(12.3,33.2,1,1,0,0,0,12.3,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,78.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия: 2 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhuCHIDPlpICfBcIjSFpg");
	var mask_graphics_1 = new cjs.Graphics().p("AhUCyIBqmTICxAwIhsGTg");
	var mask_graphics_2 = new cjs.Graphics().p("Agti9IC0gLIAXGGIi0ALg");
	var mask_graphics_3 = new cjs.Graphics().p("Ai1haICShuIDZEjIiSBug");
	var mask_graphics_4 = new cjs.Graphics().p("Ai+gNIBoiWIEVDAIhoCWg");
	var mask_graphics_5 = new cjs.Graphics().p("AivBzIA0itIErBYIg0Cvg");
	var mask_graphics_6 = new cjs.Graphics().p("AigCwIAqiwIEXBAIgqCyg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai2DPIBNilIEgCHIhNClg");
	var mask_graphics_8 = new cjs.Graphics().p("AjCEkIA1ivIFQBmIg1Cvg");
	var mask_graphics_9 = new cjs.Graphics().p("Ag8HTIA4l+ICzAbIg4F+g");
	var mask_graphics_10 = new cjs.Graphics().p("AhlH5IAAi3IGhAAIAAC3g");
	var mask_graphics_11 = new cjs.Graphics().p("Ah4EiIGegxIAWC2ImfAxg");
	var mask_graphics_12 = new cjs.Graphics().p("AiHEDIGWhhIAqCyImVBhg");
	var mask_graphics_13 = new cjs.Graphics().p("AiRDmIGIiQIA/CsImICQg");
	var mask_graphics_14 = new cjs.Graphics().p("AiWDKIF0i8IBSCjIl0C8g");
	var mask_graphics_15 = new cjs.Graphics().p("AiXCvIFcjlIBlCXIlcDng");
	var mask_graphics_16 = new cjs.Graphics().p("AiTCUIE/kLIB1CKIk/EOg");
	var mask_graphics_17 = new cjs.Graphics().p("AiLB7IEdkvICGB9IkeEvg");
	var mask_graphics_18 = new cjs.Graphics().p("Ah/BxID5lOICSBtIj6FOg");
	var mask_graphics_19 = new cjs.Graphics().p("AhuCHIDPlpICfBcIjSFpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:25.6,y:9.9}).wait(1).to({graphics:mask_graphics_1,x:20,y:6.7}).wait(1).to({graphics:mask_graphics_2,x:15.9,y:12.1}).wait(1).to({graphics:mask_graphics_3,x:6.7,y:12.7}).wait(1).to({graphics:mask_graphics_4,x:5.8,y:17.9}).wait(1).to({graphics:mask_graphics_5,x:7.5,y:20.5}).wait(1).to({graphics:mask_graphics_6,x:11.2,y:24.3}).wait(1).to({graphics:mask_graphics_7,x:5.3,y:34.3}).wait(1).to({graphics:mask_graphics_8,x:4,y:39.4}).wait(1).to({graphics:mask_graphics_9,x:17.5,y:49.5}).wait(1).to({graphics:mask_graphics_10,x:31.7,y:50.6}).wait(1).to({graphics:mask_graphics_11,x:31.6,y:47.2}).wait(1).to({graphics:mask_graphics_12,x:31.4,y:43.8}).wait(1).to({graphics:mask_graphics_13,x:31,y:40.2}).wait(1).to({graphics:mask_graphics_14,x:30.5,y:36.6}).wait(1).to({graphics:mask_graphics_15,x:29.8,y:32.8}).wait(1).to({graphics:mask_graphics_16,x:29,y:28.9}).wait(1).to({graphics:mask_graphics_17,x:28,y:24.9}).wait(1).to({graphics:mask_graphics_18,x:26.9,y:19.1}).wait(1).to({graphics:mask_graphics_19,x:25.6,y:9.9}).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ25();
	this.instance.setTransform(24.4,39.3,1,1,0,0,0,24.4,39.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 2 - копия: 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AhlH5IAAi3IGhAAIAAC3g");
	var mask_1_graphics_1 = new cjs.Graphics().p("Ah4EiIGegxIAWC2ImfAxg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiHEDIGWhhIAqCyImVBhg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AiRDmIGIiQIA/CsImICQg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AiWDKIF0i8IBSCjIl0C8g");
	var mask_1_graphics_5 = new cjs.Graphics().p("AiXCvIFcjlIBlCXIlcDng");
	var mask_1_graphics_6 = new cjs.Graphics().p("AiTCUIE/kLIB1CKIk/EOg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AiLB7IEdkvICGB9IkeEvg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ah/BxID5lOICSBtIj6FOg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AhuCHIDPlpICfBcIjSFpg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AhuCHIDPlpICfBcIjSFpg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AhUCyIBqmTICxAwIhsGTg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Agti9IC0gLIAXGGIi0ALg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ai1haICShuIDZEjIiSBug");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ai+gNIBoiWIEVDAIhoCWg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AivBzIA0itIErBYIg0Cvg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AigCwIAqiwIEXBAIgqCyg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Ai5CMIBziMIEADOIhzCPg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjIDpIFvhFIAiC0IlvBFg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhlH5IAAi3IGhAAIAAC3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:31.7,y:50.6}).wait(1).to({graphics:mask_1_graphics_1,x:31.6,y:47.2}).wait(1).to({graphics:mask_1_graphics_2,x:31.4,y:43.8}).wait(1).to({graphics:mask_1_graphics_3,x:31,y:40.2}).wait(1).to({graphics:mask_1_graphics_4,x:30.5,y:36.6}).wait(1).to({graphics:mask_1_graphics_5,x:29.8,y:32.8}).wait(1).to({graphics:mask_1_graphics_6,x:29,y:28.9}).wait(1).to({graphics:mask_1_graphics_7,x:28,y:24.9}).wait(1).to({graphics:mask_1_graphics_8,x:26.9,y:19.1}).wait(1).to({graphics:mask_1_graphics_9,x:25.6,y:9.9}).wait(1).to({graphics:mask_1_graphics_10,x:25.6,y:9.9}).wait(1).to({graphics:mask_1_graphics_11,x:20,y:6.7}).wait(1).to({graphics:mask_1_graphics_12,x:15.9,y:12.1}).wait(1).to({graphics:mask_1_graphics_13,x:6.7,y:12.7}).wait(1).to({graphics:mask_1_graphics_14,x:5.8,y:17.9}).wait(1).to({graphics:mask_1_graphics_15,x:7.5,y:20.5}).wait(1).to({graphics:mask_1_graphics_16,x:11.2,y:24.3}).wait(1).to({graphics:mask_1_graphics_17,x:9.9,y:34.9}).wait(1).to({graphics:mask_1_graphics_18,x:2.1,y:41.3}).wait(1).to({graphics:mask_1_graphics_19,x:31.7,y:50.6}).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(24.4,39.3,1,1,0,0,0,24.4,39.3);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 3
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(24.4,39.3,1,1,0,0,0,24.4,39.3);
	this.instance_2.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,78.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handball();
	this.instance.setTransform(0,0,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(26.5,-17.2,1,1,0,0,0,24.4,39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-69.3,125.2,246.3);


(lib.Символ14копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(62.6,88.5,1,1,0,0,0,62.6,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:74},14,cjs.Ease.get(-1)).to({x:82.1},10,cjs.Ease.get(1)).to({x:74.3},10,cjs.Ease.get(-1)).to({x:62.6},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.2,177);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(62.6,88.5,1,1,0,0,0,62.6,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:46.6},4).to({x:62.6},5).to({x:86.6},5).to({x:62.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-69.3,125.2,246.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ18();
	this.instance.setTransform(59.9,2.1,1,1,0,0,0,55.6,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(52.4,-15.7,1,1,0,0,0,49.1,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#333333"],[0,1],41,-50.3,-41.5,45.9).s().p("Asfk6IY+AAIhmIZI11Bcg");
	this.shape.setTransform(65,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-33.5,160,63.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// telka_03.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(41.1,62,1,1,0,0,0,23.5,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2,x:39.3,y:62.1},14).to({rotation:0,x:41.1,y:62},15).wait(1));

	// telka_07.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(75.2,126.8,1,1,0,0,0,8.1,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-15,x:73.9,y:127.5},14).to({rotation:0,x:75.2,y:126.8},15).wait(1));

	// telka_05.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(40.1,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1.5,x:38.8,y:88.6},14).to({rotation:0,x:40.1,y:87.9},15).wait(1));

	// telka_13.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(23.5,154.6,1,1,0,0,0,26,94.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewY:-0.6,x:21.7,y:155.2},14).to({skewY:0,x:23.5,y:154.6},15).wait(1));

	// telka_21.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(24.1,161.4,1,1,0,0,0,24.4,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:24.2,regY:11.3,scaleY:1,skewX:-0.8,skewY:-3.3,x:22.4,y:161.6},14).to({regX:24.4,regY:11.4,scaleY:1,skewX:0,skewY:0,x:24.1,y:161.4},15).wait(1));

	// telka_18.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(19.9,172.7,1,1,0,0,0,20.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,skewX:0.9,skewY:-1.4,x:18.5,y:172.2},14).to({scaleX:1,skewX:0,skewY:0,x:19.9,y:172.7},15).wait(1));

	// telka_15.png
	this.instance_6 = new lib.Символ8();
	this.instance_6.setTransform(39,173.5,1,1,0,0,0,15.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewY:-0.7,x:37.7,y:173.6},14).to({skewY:0,x:39,y:173.5},15).wait(1));

	// Слой 2
	this.instance_7 = new lib.winning_at_beer_pong_by_slimmckenzied98wchi();
	this.instance_7.setTransform(10.2,112.2,0.878,0.589);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,38.8,321.7,274.9);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21_1();
	this.instance.setTransform(92.1,330.8,1,1,0,0,0,23,29);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,50,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Символ18_1();
	this.instance.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(144.5,30.4,1,1,0,0,0,115.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-189.2},14).to({x:144.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271.7,107.3);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(-195.4,-58.9,1,1,0,0,0,135.8,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:132.1,y:-66.4},14).to({x:-195.4,y:-58.9},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325,-112.5,271.7,107.3);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(62.6,88.5,1,1,0,0,0,62.6,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-69.3,125.2,246.3);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(63.8,71.4,1.342,1.342,0,0,0,45,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:91.9,scaleX:1.56,scaleY:1.56,x:63.1,y:52.8},14,cjs.Ease.get(-1)).to({regY:92,scaleX:1.34,scaleY:1.34,x:63.8,y:71.4},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.5,368.8);


(lib.Символ42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.mouse = new lib.Символ16();
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


// stage content:



(lib.beerpong600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		_this.kursor.visible=false;
		_this.kursor2.visible=true;
		
		stage.canvas.onmouseover = CanvasOver;
		
		function CanvasOver(){
			_this.kursor.visible=true;
			_this.kursor2.visible=false;
			_this.text2.gotoAndPlay(1)
			_this.text3.gotoAndPlay(1)
			_this.telka.gotoAndPlay(1)
			
		}
		
		stage.canvas.onmouseout = CanvasOut;
		
		function CanvasOut(){
			_this.kursor.visible=false;
			_this.kursor2.visible=true;
			_this.text2.gotoAndPlay(14)
			_this.text3.gotoAndPlay(14)
			_this.telka.gotoAndPlay(14)
		}
		
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
			
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text3
	this.text3 = new lib.Символ41();
	this.text3.setTransform(123.4,200.2,1,1,0,0,0,135.8,53.6);

	this.timeline.addTween(cjs.Tween.get(this.text3).wait(1));

	// text2
	this.text2 = new lib.Символ42();
	this.text2.setTransform(124.9,73.1,1,1,0,0,0,135.8,53.6);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text
	this.instance = new lib.Символ9();
	this.instance.setTransform(524.2,45.9,1,1,0,0,0,50.8,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kursor2
	this.kursor2 = new lib.Символ14копия();
	this.kursor2.setTransform(480,263,1,1,0,0,0,62.6,88.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).wait(1));

	// kursor
	this.kursor = new lib.Символ20_1();
	this.kursor.setTransform(480,263,1,1,0,0,0,62.6,88.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// telka
	this.telka = new lib.Символ19_1();
	this.telka.setTransform(487,188.3,1,1,0,0,0,215.8,184.4);

	this.timeline.addTween(cjs.Tween.get(this.telka).wait(1));

	// mouse
	this.mouse = new lib.Символ42_1();
	this.mouse.setTransform(34.9,182.1,1,1,0,0,0,31.3,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// fon
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(311.2,125.5,1,1,0,0,0,344.9,197.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.4,78.3,1040.2,444.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
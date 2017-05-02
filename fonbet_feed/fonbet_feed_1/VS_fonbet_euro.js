(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#669933",
	manifest: [
		{src:"images/blick.png?1465555129459", id:"blick"},
		{src:"images/circle_blick.png?1465555129459", id:"circle_blick"},
		{src:"images/gaz.jpg?1465555129459", id:"gaz"},
		{src:"images/zagl.png?1465555129459", id:"zagl"},
		{src:"images/zagl_2.png?1465555129459", id:"zagl_2"}
	]
};



// symbols:



(lib.blick = function() {
	this.initialize(img.blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,46);


(lib.circle_blick = function() {
	this.initialize(img.circle_blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.gaz = function() {
	this.initialize(img.gaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.zagl = function() {
	this.initialize(img.zagl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.zagl_2 = function() {
	this.initialize(img.zagl_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu2AXcMAAAgu3MBdtAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circle_blick();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGKBJQgIAAAAgIIAAgmIgcAAIgdAmQgHAIgHAAIgkAAQgEAAgCgCQgBgDABgDIAngwIAAgDQgfgGAAgeQAAgKAFgKQADgIAJgIIAJgFIANgFQAIgDAWgBIBLAAQAHAAAAAIIAACBQAAAIgHAAgAFOgiQgEAFAAAHQAAAIAEAFQAHAEAJAAIAkAAIAAghIgkAAQgJAAgHAEgAB4BJQgGAAAAgIIAAiBQAAgIAGAAIAgAAQAIAAAAAIIAAAkIAiAAQAMAAATAEQAKACANAJIAHAHIAFAHQAFAKgBAKQABAMgFAJIgFAJIgHAIQgNAHgKADQgTAEgMAAgACgAnIAiAAQAGAAAEgBQAEgBACgCQAGgFAAgJQAAgIgGgFQgCgCgEgBQgEgCgGAAIgiAAgAAsBJQgIAAAAgIIAAgoQgTAEgRAAIgOgBIgNgDIgLgFIgKgHIgHgIIgGgHQgDgHgBgRIAAgmQAAgIAHAAIAgAAQAHAAAAAIIAAAmQAAAFACAEQACADADAEQADACAFABQAEACAHAAQAMAAARgEIAAg3QAAgIAIAAIAfAAQAHAAAAAIIAACBQAAAIgHAAgAiDBJQgHAAAAgIIAAhKIgCAAIg1BKQgGAIgFAAIgkAAQgHAAAAgIIAAiBQAAgIAHAAIAgAAQAHAAAAAIIAABKIACAAIA1hKIAEgGQAEgCADAAIAkAAQAHAAAAAIIAACBQAAAIgHAAgAk9BJQgIAAABgIIAAgvIg+AAIAAAvQAAAIgHAAIgfAAQgIAAABgIIAAiBQgBgIAIAAIAfAAQAHAAAAAIIAAAwIA+AAIAAgwQgBgIAIAAIAfAAQAHAAABAIIAACBQgBAIgHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-7.3,86.6,14.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE6BJQgHAAgCgIIgIgSIhCAAIgHASQgDAIgHAAIghAAQgEAAgBgCQgCgCABgEIA7iBQAEgIAGAAIArAAQAGAAADAHIA7CCQABAEgBACQgCACgDAAgAEbAMIgRgoIgCAAIgSAoIAlAAgABSBJQgIAAAAgIIAAhlIgsAAQgHAAAAgIIAAgUQAAgIAHAAICHAAQAHAAAAAIIAAAUQAAAIgHAAIgsAAIAABlQAAAIgIAAgAgUBJQgGAAgDgIIgHgSIhCAAIgIASQgDAIgGAAIgiAAQgDAAgCgCQgBgCABgEIA7iBQADgIAGAAIArAAQAGAAAEAHIA4CCQACAEgCACQgCACgDAAgAgzAMIgRgoIgCAAIgSAoIAlAAgAlbBJQgIAAAAgIIAAgUQAAgIAIAAIALAAIAOg2QADgNAFgKQAGgKAJgIQAGgEAOgGQAJgDATgBIA9AAQAHAAAAAIIAABlIAOAAQAHAAAAAIIAAAUQAAAIgHAAgAkEgjIgHAEQgGAEgCAKIgOA2IA8AAIAAhJIgWAAQgFgBgEACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-7.3,71.2,14.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwjQkQm4m4AApsQAApsG4m4QG2m2JtgBQJuABG2G2QG4G4AAJsQAAJtm4G3Qm2G4puAAQptAAm2m4gAwAwBQmpGpAAJYQAAJYGpGpQGoGoJYAAQJZAAGomoQGpmpAApYQAApYmpmpQmomopZAAQpYAAmoGog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#174613").s().p("AmtCgIAAk/INbAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-16,86,32);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#174613").s().p("AmtCgIAAk/INbAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-16,86,32);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD0000","#FF3300"],[0.176,1],0,50,0,-50).s().p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8C0000","#FF0000"],[0,1],0,50,0,-50).s().p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak5CWIgMgDIgKgEIgJgHIgHgIQgDgEgCgFIgDgLQgCgGABgGQgBgHACgFIADgLQACgFADgFIAHgIIAJgGIAKgFIAMgDIAPgBQAIAAAOADQAHACAKAHQAHAFAEAGQADAHAAAGQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgSAAQgDAAgDgBIgDgFQgEgFgEgDIgGgCIgGgBQgHAAgFACQgFACgEAEQgDAEgCAFQgCAGAAAIQAAAHACAGQACAGADAEQAEAEAFACQAFABAHAAIAHgBQADAAADgCQAFgDADgGIADgFQADgBADAAIATAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAHgEAGQgGAJgFADQgKAHgHACQgPADgIAAIgPgBgAETCUQgGAAAAgFIAAgRQAAgFAGAAIAGAAIAKACIACAAQAEAAADgDQAEgCABgDIAAgCIgDAAQgJAAgIgCQgHgCgGgFQgFgEgEgGQgEgGgEgJIgMgfQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQABAAABAAIAWAAQABAAAAAAQABAAAAABQABAAAAAAQABAAABABIADADIAMAfQACAEADADQADACAEAAIAMAAIAPgoIADgDQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAIAXAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgZBDQgDAIgDAGQgEAGgGAEQgFAFgIACQgGACgKAAgADVCUQgEAAgCgBQgCgBgBgDIgQgcQgCgEgDgBQgCgCgHAAIgNAAIAAAjQAAAFgFAAIgWAAQgFAAgBgFIAAhfQABgFAFAAIAWAAQAFAAAAAFIAAAiIALAAQAGAAADgCQADgBACgEIAOgbQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQACgCAEAAIAXAAQABAAAAAAQABABABAAQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAgBAAQAAABAAAAIgOAbQgIAPgKADIAAABQAKADAKASIAPAcQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAAGCUQgFAAAAgFIAAhfQAAgFAFAAIA2AAQAIAAAMADQAIACAFAEQAGAEACAFQAEAFAAAHQAAAPgPAEIAAABQAWAFgBATQAAAHgCAFQgDAGgGAEQgFAEgIADQgNACgIAAgAAiB8IAgAAQAFAAADgCQADgDAAgEQAAgEgDgCQgDgDgFAAIggAAgAAiBSIAaAAQAFAAADgCQACgCAAgDQAAgEgCgCQgDgCgFAAIgaAAgAgmCUQgEAAgDgFIgFgNIgvAAIgGANQgCAFgEAAIgZAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAgBABAAQAAgBAAAAIAqhfQADgFADAAIAfAAQAFAAACAFIAqBfQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAgAg9BpIgLgeIgCAAIgNAeIAaAAgAjECUQgEAAAAgFIAAhKIggAAQgFAAAAgFIAAgQQAAgFAFAAIBgAAQAGAAgBAFIAAAQQABAFgGAAIggAAIAABKQABAFgGAAgAl+goIgMgDIgKgFIgJgGIgIgIQgDgFgBgFIgDgLQgBgFgBgHQABgGABgGIADgLQABgFADgEIAIgIIAJgHIAKgEIAMgDIAOgBQAJAAAPADQAHACAJAGQAHAFAEAHQADAGAAAHQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIgTAAQgDAAgCgCIgEgEQgDgGgEgCIgFgDIgIgBQgGAAgFACQgFACgDAEQgEAEgCAGQgCAGAAAHQAAAIACAGQACAFAEAEQADAEAFACQAFACAGAAIAIgBQAEgBADgCQAEgDADgGIAEgEQACgCADAAIATAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAHgEAHQgGAIgEAEQgLAGgHACQgOAEgKAAIgOgBgAFIgqQgFAAAAgGIAAheQAAgFAFAAIAWAAQAFAAABAFIAAAaIAYAAQAJAAAOADQAGACAKAGIAFAFIAEAGQADAHAAAIQAAAIgDAHIgEAGIgFAFQgKAGgGACQgOADgJAAgAFkhCIAYAAIAHgBIAGgDQADgDAAgGQAAgGgDgDIgGgDIgHgBIgYAAgAD0gqQgEAAAAgGIAAhKIggAAQgFAAAAgFIAAgPQAAgFAFAAIBgAAQAGAAgBAFIAAAPQABAFgGAAIggAAIAABKQABAGgGAAgAC0gqQgFAAgCgGIgFgNIgwAAIgEANQgDAGgFAAIgYAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABgBQAAAAAAgBIAqheQACgFAEAAIAgAAQAEAAACAFIAqBeQAAABAAAAQABABAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgACehWIgNgeIgBAAIgNAeIAbAAgAAqgqQgFAAgBgGIAAhKIgSAAIgGABIgFADQgEADgCAHIgMA8QgCAGgEAAIgXAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAABgBIAOg8QADgJAEgIQAEgHAGgFQAEgDAKgEQAFgCANgBIAuAAQAGAAAAAFIAABeQAAAGgGAAgAiXgqQgEAAAAgGIAAheQAAgFAEAAIBcAAQAFAAAAAFIAAAPQAAAFgFAAIhAAAIAAAOIAvAAQAGAAAAAFIAAAPQAAAFgGAAIgvAAIAAAPIBAAAQAFAAAAAGIAAAOQAAAGgFAAgAkugqQgFAAAAgGIAAgOQAAgGAFAAIAIAAIAKgoQADgJADgIQAFgHAFgFQAFgDALgEQAFgCAOgBIAsAAQAFAAAAAFIAABKIAJAAQAGAAAAAGIAAAOQAAAGgGAAgAjwh5IgEADQgFADgBAHIgKAoIArAAIAAg2IgQAAIgHABg");
	this.shape.setTransform(33.8,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,9,86.2,30.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHnBSQgHAAgEgEQgEgDAAgIIAAgHQAAgHAEgEQAEgFAHAAIAOAAQAIAAAEAFQAEAEAAAHIAAAHQAAAIgEADQgEAEgIAAgAGYBRQgEAAgEgDQgDgDAAgFIAAgcIhRAAIgIAcQgBAFgEADQgEADgFAAIgWAAQgFAAgCgDQgDgCACgFIAchsIAFgMQADgFAEgFQAHgJALgFQAJgEANgDQALgCAOAAIA+AAQAEABADADQADADAAAEIAACOQAAAFgEACQgDADgEAAgAFigvQgFABgEADIgHAHIgEAKIgKAjIBJAAIAAg6IggAAQgGAAgFACgADUBRQgEAAgEgDQgDgCAAgFIAAgtIgsAAQgQABgNgEQgNgDgJgIQgFgDgEgFQgEgEgCgEQgDgHgBgGQgBgHAAgIIAAgnQAAgEADgDQADgDAFgBIAVAAQAFABADADQADADAAAEIAAAnQAAAHACAFQACAGADADQAEAEAFABQAFACAHAAIAsAAIAAhDQAAgEADgDQAEgDAEgBIAWAAQAEABADADQAEADAAAEIAACNQAAAFgEADQgDADgEAAgAgTBRQgEAAgEgDQgDgCAAgFIAAh4IgzAAQgFAAgDgDQgDgDAAgFIAAgLQAAgEADgDQADgDAFgBICQAAQAEABAEADQADADAAAEIAAALQAAAFgDADQgEADgEAAIgzAAIAAB4QAAAFgEACQgDADgEAAgAiPBRQgEAAgEgDQgDgDAAgFIAAgcIhRAAIgIAcQgBAFgEADQgEADgFAAIgWAAQgFAAgCgDQgDgCACgFIAchsIAFgMQADgFAEgFQAHgJALgFQAJgEANgDQALgCAOAAIA+AAQAEABADADQADADAAAEIAACOQAAAFgEACQgDADgEAAgAjFgvQgFABgEADIgHAHIgEAKIgKAjIBJAAIAAg6IggAAQgGAAgFACgAlSBRQgEAAgEgDQgDgDAAgFIAAhuIgoBvQgCAFgEACQgEADgEAAIgRAAQgEAAgEgDQgEgCgCgFIgohvIAABuQAAAFgDADQgEADgEAAIgVAAQgEAAgEgDQgDgDAAgFIAAiMQAAgFADgDQADgDAFgBIAvAAQAEABAEADQAEADACAEIAhBgIAihgQACgEAEgDQAEgDAEgBIAvAAQAEABAEADQADADAAAFIAACMQAAAFgDADQgEADgEAAgAHlAhQgEAAgDgDQgDgDgBgFIgDhdQAAgEADgDQADgDAFgBIAZAAQAEABADADQAEADgBAEIgDBdQAAAFgDADQgDADgFAAg");
	this.shape.setTransform(51.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.6,16.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE0BRQgKgDgGgDQgIgEgGgFQgFgFgFgHQgFgHgDgIQgDgIgBgKQgCgKAAgLQAAgKACgKQABgKADgIQADgIAFgGQAFgHAFgGQAGgEAIgFQAGgDAKgCQAKgEAdgCIAUACQAKABAJADIAQAFQAHAFAGAEQAGAGAFAHQAEAGADAIQADAIACAKQABAKAAAKQAAALgBAKQgCAKgDAIQgDAIgEAHQgFAHgGAFQgGAFgHAEIgQAGIgTAEIgUAAQgdgBgKgDgAFEgxQgKADgFAHQgGAHgDAKQgDAKAAAMQAAANADAKQADAKAGAHQAFAIAKADQAKAEANAAQAMAAAKgEQAKgDAFgIQAGgHADgKQADgKAAgNQAAgMgDgKQgDgKgGgHQgFgHgKgDQgKgEgMgBQgNABgKAEgAgiBRQgIgDgHgDQgIgEgGgFQgFgFgFgHQgFgHgDgIQgDgIgBgKQgCgKAAgLQAAgKACgKQABgKADgIQADgIAFgGQAFgHAFgGQAGgEAIgFQAHgDAIgCQAMgEAagCIAUACQALABAIADIAQAFQAHAFAGAEQAGAGAFAHQAEAGADAIQADAIACAKQABAKAAAKQAAALgBAKQgCAKgDAIQgDAIgEAHQgFAHgGAFQgGAFgHAEIgQAGIgTAEIgUAAQgagBgMgDgAgRgxQgKADgFAHQgGAHgDAKQgDAKAAAMQAAANADAKQADAKAGAHQAFAIAKADQAJAEAMAAQANAAAJgEQAJgDAGgIQAGgHADgKQADgKAAgNQAAgMgDgKQgDgKgGgHQgGgHgJgDQgJgEgNgBQgMABgJAEgAmMBQQgMgDgJgHQgKgGgGgIIgDgKQgCgGAAgGQAAgKAMgCIANAAQAGAAADADQAEADAEAGQAEAIAGAEQAIAFAKgBIAXAAQALAAAIgBQAHgCAFgFQAFgEADgGQADgHABgKIg+AAQgFAAgDgDQgEgDAAgFIAAgIQAAgEAEgDQADgDAFAAIA+AAQgCgKgCgGQgDgIgFgDQgFgFgHgCQgIgBgLAAIgUAAQgLAAgHAEQgHAEgEAIQgDAHgEADQgEACgFAAIgOAAQgEABgDgDQgFgEABgGIABgMIAEgJQAFgJAKgGQAKgGALgDQAMgEAMAAIAuABIARAFQAIABAHAFQAGADAGAGQAFAFAEAGQAEAHADAHIAEARQABAKAAAJQAAAKgBAKIgEARQgDAHgEAHQgEAGgFAGQgGAFgGAEQgHAEgIACQgIADgJABIgwABQgMAAgMgDgACDBSQgFAAgEgDQgCgDAAgEIAAiOQAAgEACgDQAEgEAFAAIBuAAQAFAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgFAAIhOAAIAAB5QAAAEgEADQgDADgEAAgAi3BSQgFAAgDgDQgDgDAAgEIAAh5Ig0AAQgFAAgDgCQgCgEAAgEIAAgLQAAgEACgDQADgEAFAAICSAAQAEAAAEAEQADADAAAEIAAALQAAAEgDAEQgEACgEAAIgzAAIAAB5QAAAEgDADQgDADgFAAg");
	this.shape.setTransform(44,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.9,17.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJBRQgJgDgFgDQgIgEgFgFQgGgFgFgHQgEgHgEgIQgDgIgBgKQgCgKAAgLQAAgKACgKQABgKADgIQAEgIAEgGQAFgHAGgGQAFgEAIgFQAFgDAJgCQALgEAcgCIAVACQAKABAIADIAQAFQAHAFAGAEQAGAGAFAHQAEAGADAIQADAIACAKQABAKAAAKQAAALgBAKQgCAKgDAIQgDAIgEAHQgFAHgGAFQgGAFgHAEIgQAGIgSAEIgVAAQgcgBgLgDgAAZgxQgJADgGAHQgGAHgDAKQgBAKAAAMQAAANABAKQADAKAGAHQAGAIAJADQAKAEANAAQANAAAJgEQAKgDAGgIQAFgHADgKQADgKAAgNQAAgMgDgKQgDgKgFgHQgGgHgKgDQgJgEgNgBQgNABgKAEgAIGBSQgEAAgEgDQgDgEAAgEIAAhvIgoBwQgCAEgEADQgEADgEAAIgRAAQgEAAgEgDQgEgDgCgEIgohwIAABvQAAAEgDAEQgEADgEAAIgVAAQgEAAgEgDQgDgEAAgEIAAiMQAAgGADgCQADgEAFAAIAvAAQAEAAAEAEQAEADACAEIAhBgIAihgQACgEAEgDQAEgEAEAAIAvAAQAEAAAEAEQADACAAAGIAACMQAAAEgDAEQgEADgEAAgACvBSQgEAAgEgDQgDgEAAgEIAAiNQAAgEADgDQAEgEAEAAICFAAQAEAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgEAAIhkAAIAAAiIBWAAQAEAAADADQAEADAAAFIAAAIQAAAFgEADQgDADgEAAIhWAAIAAAiIBjAAQAFAAADADQADADAAAFIAAALQAAAEgDAEQgDADgFAAgAjTBSQgEAAgEgDQgDgEAAgEIAAiNQAAgEADgDQADgEAFAAIBYAAQAQAAANAEIAMAFIAKAGIAIAJQADAFACAGQADAHABAHIABAPIgBAPQgBAGgDAGQgCAGgDAFIgIAJIgKAHIgMAEQgNAFgQAAIg3AAIAAAZQAAAEgEAEQgDADgEAAgAiyANIApAAQAKAAAGgBQAIgCAFgDQAFgDADgFQADgGAAgKQAAgJgDgHQgDgGgFgDQgFgEgIgBQgGgBgKgBIgpAAgAmCBSQgFAAgDgDQgDgEAAgEIAAiNQAAgEADgDQADgEAFAAICEAAQAFAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgFAAIhkAAIAAAiIBWAAQAFAAADADQADADAAAFIAAAIQAAAFgDADQgDADgFAAIhWAAIAAAiIBkAAQAEAAADADQAEADAAAFIAAALQAAAEgEAEQgDADgEAAgAoaBSQgEAAgEgDQgDgDAAgEIAAiOQAAgEADgDQAEgEAEAAIBvAAQAFAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgFAAIhOAAIAAB5QAAAEgEADQgDADgEAAg");
	this.shape.setTransform(55,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.1,17.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmDBSQgJgCgIgCQgIgCgHgEQgGgEgGgFQgFgGgEgGQgEgHgDgHIgEgSQgBgIAAgLQAAgJABgJIAEgRQADgJAEgGQAEgHAFgEIAMgJQAHgFAIgCIARgDIAugCQAMAAALAEQANADAJAGQAKAHAFAJIAEAKQACAGAAAGQAAAHgFADQgDADgEAAIgOAAQgFAAgEgDQgEgDgDgHQgEgJgHgEQgHgFgKAAIgVAAQgNAAgIACQgIADgFAGQgFAFgCAKQgCAKAAANQAAAPACAIQACALAFAFQAFAGAIADQAIACANAAIAXAAQAKAAAIgEQAGgFAEgJQADgGAFgEQAEgDAFAAIANAAQAMADAAAKQAAAHgBAFQgCAGgDAFQgFAJgKAGQgJAGgMAEQgMADgMAAgAEtBSQgEAAgDgDQgDgDAAgFIAAiNQAAgFADgDQADgDAFAAIAVAAQAFAAADADQADADAAAFIAAAtIA5AAQANAAALADQAMAFAIAGQAJAHAEAIQAFAPAAAJIgBAMIgEALQgEAKgJAHQgIAHgMAEQgLADgNAAgAFOAxIA5AAQAKAAAEgFQAFgGAAgKQAAgLgFgGQgEgFgKgBIg5AAgADhBSQgEAAgEgDQgDgDAAgEIAAg8IhPAAIAAA8QAAAEgDADQgDADgFAAIgVAAQgFAAgDgDQgDgDAAgFIAAiNQAAgFADgDQADgDAFAAIAVAAQAFAAADADQADADAAAFIAAA0IBPAAIAAg0QAAgFADgDQAEgDAEAAIAVAAQAFAAADADQADADAAAFIAACNQAAAFgDADQgDADgFAAgAAbBSQgFAAgDgDQgDgDAAgFIAAgdIhQAAIgIAdQgBAFgEADQgEADgEAAIgXAAQgFAAgCgDQgCgDABgEIAdhsIAFgNQACgFAEgFQAHgIALgFQAKgFANgCQALgCANAAIA8AAQAEAAADADQADADAAAFIAACOQAAAEgDADQgDADgFAAgAgZgvQgFACgEADIgHAHIgEAKIgKAjIBHAAIAAg7IgfAAQgFAAgFACgAjEBSQgFAAgDgDQgDgDAAgEIAAh5Ig0AAQgEAAgDgCQgDgDAAgFIAAgLQAAgFADgDQADgDAEAAICSAAQAFAAADADQADADAAAFIAAALQAAAFgDADQgDACgFAAIgzAAIAAB5QAAAEgDADQgDADgFAAg");
	this.shape.setTransform(45.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.8,16.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHhGIAngLIAoBLIgXhRIAjgLIA0CpIgkAKIgshPIAYBWIgjALg");
	this.shape.setTransform(49.3,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBQQgKgBgHgEQgJgFgFgHIg9g7QgQgOAAgRQAAgRARgSQARgRASAAQARAAAOAPIA8A8QAHAFAFAJQAFAJABAIQABAJgEAJQgEAJgJAKQgJAJgKAEQgHADgHAAIgEAAgAgjgnIgDACIgCADQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABIABADIAFAHIADACIAAABIAyAxIACADIAEACIADADIAEABQABAAAAAAQAAABABAAQAAAAABgBQABAAAAAAIAEgCIACgDIAAgEIgCgDIgFgHIgCgCIgBgBIgxgwIgCgCIgHgGIgCgCIgDgBIgCAAg");
	this.shape_1.setTransform(28.1,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaANIAWhJIAhAJIgKAmIAbAHIAKgkIAfAKIgKAhIBOAWIgLAmg");
	this.shape_2.setTransform(15,47.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0049B1").s().p("AhKBpIgBgWQAAhlA4hWIBfBHQghA0gBBAQABALABALg");
	this.shape_3.setTransform(34.8,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0049B1").s().p("AhigZQBPguBbAAIAbABIAAB2QgNgCgOAAQg3AAgwAag");
	this.shape_4.setTransform(54.4,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0049B1").s().p("AiRCzIgBgRQAAhdAchXQAbhWAyhLIC8CJQg+BcABBwIAAARg");
	this.shape_5.setTransform(15.5,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0049B1").s().p("AisgyQCShbCrAAIAcABIAADnIgcgBQhlAAhWA0g");
	this.shape_6.setTransform(47.1,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0B0B0").s().p("AlBiDIArhCQA+hOBcg4IG+KXg");
	this.shape_7.setTransform(32.3,33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUDaQgQgEgJgGQgJgGgEgIQgFgIgCgJQgBgHAAgKIAAjpIgVAAIAAhEIAVAAIAAhQICBAAIAABQIAZAAIAABEIgZAAIAADRIABAIIABAFQACAEADABQADABAFAAIAKgBIAAA9QgcAHgtAAQgVAAgOgEg");
	this.shape_8.setTransform(254.1,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqDBQgSgEgNgHQgNgHgIgKQgKgMgFgKQgGgLgCgNQgEgOgBgMIgBi0QAAg1AigcQAhgcA6AAQB6AAAABtIAAAcIgBBGIiRAAIAABIIABAQIADANQACAHAFADQAFAEAGAAQAIAAAGgGQAEgEADgLQACgLAAgGIABgUQAAgWgBgCIBlAAIAAAVQAAAjgGAUQgFAYgOARQgNASgaAJQgZAJgkAAQgWAAgTgEgAgKh7QgFADgDAIIgEAPIAAA0IAtAAIAAgoQAAgqgWAAQgGAAgFAEg");
	this.shape_9.setTransform(231,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVC0IAAAoIhoAAIAAm8IBoAAIAABWQAXgXAfAAIAXABIANADIAOAGQAJAEAEAEQAHAHAEAGQAHAIADAKQAEAJACAOQADAQAAAOIAAC1QAAASgEASQgFASgFAIQgGAKgJAJQgJAIgIAEQgLAFgGABIgPADIgMABQgnAAgSgtgAgOhSQgHAIAAAXIAACcQAAAcAGALQAHAKAKAAQANAAAEgKQAEgKAAgdIAAibQAAgYgFgIQgFgIgLAAQgJAAgHAIg");
	this.shape_10.setTransform(201.4,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYC+IAAkXQAAgLgFgKQgFgJgMAAQgGAAgFAEQgFAEgCAEIgEAMIgCAMIAAERIhlAAIAAl3IBlAAIAAAsQAGgZAQgLQAQgMAYAAQAoAAAWAWQAWAXAAAuIAAEgg");
	this.shape_11.setTransform(170.7,34.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah9BMIAAiXQAAg2AiggQAiggA5AAQA5AAAjAgQAiAgAAA2IAACXQAAA8ggAdQggAdg+AAQh9AAAAh2gAgWhZIAAC4QAAAPAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgPIAAi4QAAghgXAAQgWAAAAAhg");
	this.shape_12.setTransform(141.6,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiDgIAAm/IDFAAIAABYIhjAAIAABHIBeAAIAABVIheAAIAADLg");
	this.shape_13.setTransform(116.4,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0049B1").s().p("AxmFHIAAqNMAjNAAAIAAKNg");
	this.shape_14.setTransform(181.9,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.7,67);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#174613").s().p("Eg2bANMIAA6XMBs3AAAIAAaXg");
	this.shape.setTransform(348.5,84.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,697,169);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("Ag6A7QgagZAAgiQAAghAagZQAZgaAhAAQAiAAAZAaQAaAZAAAhQAAAigaAZQgZAagiAAQghAAgZgag");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blick();
	this.instance.setTransform(-48.2,-23,0.433,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-23,96.5,46);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blick();
	this.instance.setTransform(-102.5,-23,0.919,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-23,205,46);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#570000","#8E0000"],[0,1],0,50,0,-50).s().p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhAnVICBAAIAAOrIiBAA");
	this.shape.setTransform(6.5,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,15,96);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ACVJrQgjgcghghQjljoAAlGQAAlGDljnQAhghAjgc");
	this.shape.setTransform(15,62);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,126);


(lib.kom_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(" ", "bold 20px 'Roboto Condensed'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 86;
	this.text.setTransform(-44.8,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-13.7,89.7,27.5);


(lib.kom_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(" ", "bold 20px 'Roboto Condensed'", "#FFFFFF");
	this.text.lineHeight = 25;
	this.text.lineWidth = 86;
	this.text.setTransform(-44.8,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.8,-13.7,89.7,27.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23));

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,alpha:0},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ22();
	this.instance.setTransform(650.9,17.1,1,1,0,0,0,51.8,8.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:518.9},19,cjs.Ease.get(1)).wait(34).to({scaleX:1.29,scaleY:1.29},5).to({scaleX:1,scaleY:1},5).wait(46).to({x:-99.8,y:17},10,cjs.Ease.get(-1)).wait(16));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(650.9,17,1,1,0,0,0,44,8.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({x:412.5},19,cjs.Ease.get(1)).wait(38).to({regY:8.7,scaleX:1.24,scaleY:1.24,y:17.1},5).to({regY:8.6,scaleX:1,scaleY:1,y:17},5).wait(49).to({x:-98},10,cjs.Ease.get(-1)).wait(21));

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(650.9,17,1,1,0,0,0,55,8.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:303},19,cjs.Ease.get(1)).wait(40).to({regY:8.7,scaleX:1.19,scaleY:1.19,y:17.1},5).to({regY:8.6,scaleX:1,scaleY:1,y:17},5).wait(52).to({x:-96.6},10,cjs.Ease.get(-1)).wait(26));

	// Символ 19
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(638.4,17,1,1,0,0,0,45.4,8.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:192.4},19,cjs.Ease.get(1)).wait(41).to({scaleX:1.23,scaleY:1.23},5).to({scaleX:1,scaleY:1},5).wait(55).to({x:-96.6},10,cjs.Ease.get(-1)).wait(31));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(664.4,14.9,0.444,0.444,0,0,0,147.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:65.4,y:16.6},19,cjs.Ease.get(1)).wait(115).to({x:-121.6,y:14.9},10,cjs.Ease.get(-1)).wait(36));

	// Слой 2
	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(281.5,-117.4,1,1.87,0,0,0,348.4,84.5);
	this.instance_5.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.9,-275.4,796.7,316);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(0,0,1,0.087);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleY:1},3,cjs.Ease.get(-1)).to({scaleY:0.09,alpha:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(339.5,135.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:341.8,y:137.8},9,cjs.Ease.get(-1)).to({x:344.5,y:140.5},10,cjs.Ease.get(1)).to({x:342.5,y:142.5},10,cjs.Ease.get(-1)).to({x:340.5,y:144.5},10,cjs.Ease.get(1)).to({x:340,y:140},10,cjs.Ease.get(-1)).to({x:339.5,y:135.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(339.5,80.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:341.8,y:82.8},9,cjs.Ease.get(-1)).to({x:344.5,y:85.5},10,cjs.Ease.get(1)).to({x:347,y:88},10,cjs.Ease.get(-1)).to({x:349.5,y:90.5},10,cjs.Ease.get(1)).to({x:344.5,y:85.5},10,cjs.Ease.get(-1)).to({x:339.5,y:80.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(339.5,19.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:341.4,y:17.6},9,cjs.Ease.get(-1)).to({x:343.5,y:15.5},10,cjs.Ease.get(1)).to({x:346,y:13},10,cjs.Ease.get(-1)).to({x:348.5,y:10.5},10,cjs.Ease.get(1)).to({x:344,y:15},10,cjs.Ease.get(-1)).to({x:339.5,y:19.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(384.5,184.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:386.4,y:182.6},9,cjs.Ease.get(-1)).to({x:388.5,y:180.5},10,cjs.Ease.get(1)).to({x:390,y:177.5},10,cjs.Ease.get(-1)).to({x:391.5,y:174.5},10,cjs.Ease.get(1)).to({x:388,y:179.5},10,cjs.Ease.get(-1)).to({x:384.5,y:184.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(380.5,-27.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:382.4,y:-25.6},9,cjs.Ease.get(-1)).to({x:384.5,y:-23.5},10,cjs.Ease.get(1)).to({x:387.5,y:-20.5},10,cjs.Ease.get(-1)).to({x:390.5,y:-17.5},10,cjs.Ease.get(1)).to({x:385.5,y:-22.5},10,cjs.Ease.get(-1)).to({x:380.5,y:-27.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(299.5,114.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:297.6,y:116.8},9,cjs.Ease.get(-1)).to({x:295.5,y:119.5},10,cjs.Ease.get(1)).to({x:298.5,y:122.5},10,cjs.Ease.get(-1)).to({x:301.5,y:125.5},10,cjs.Ease.get(1)).to({x:300.5,y:120},10,cjs.Ease.get(-1)).to({x:299.5,y:114.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_6 = new lib.Символ11();
	this.instance_6.setTransform(299.5,59.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:297.1,y:57.1},9,cjs.Ease.get(-1)).to({x:294.5,y:54.5},10,cjs.Ease.get(1)).to({x:297,y:57},10,cjs.Ease.get(-1)).to({x:299.5,y:59.5},10,cjs.Ease.get(1)).wait(21));

	// Символ 11
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(257.5,168.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:255.1,y:166.1},9,cjs.Ease.get(-1)).to({x:252.5,y:163.5},10,cjs.Ease.get(1)).to({x:255,y:165},10,cjs.Ease.get(-1)).to({x:257.5,y:166.5},10,cjs.Ease.get(1)).to({y:167.5},10,cjs.Ease.get(-1)).to({y:168.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(257.5,83.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:258.9,y:85.4},9,cjs.Ease.get(-1)).to({x:260.5,y:87.5},10,cjs.Ease.get(1)).to({x:257,y:84.5},10,cjs.Ease.get(-1)).to({x:253.5,y:81.5},10,cjs.Ease.get(1)).to({x:255.5,y:82.5},10,cjs.Ease.get(-1)).to({x:257.5,y:83.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_9 = new lib.Символ11();
	this.instance_9.setTransform(257.5,2.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:255.6,y:4.4},9,cjs.Ease.get(-1)).to({x:253.5,y:6.5},10,cjs.Ease.get(1)).to({x:256,y:4},10,cjs.Ease.get(-1)).to({x:258.5,y:1.5},10,cjs.Ease.get(1)).to({x:258,y:2},10,cjs.Ease.get(-1)).to({x:257.5,y:2.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_10 = new lib.Символ11();
	this.instance_10.setTransform(129.5,184.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:180.7},9,cjs.Ease.get(-1)).to({y:176.5},10,cjs.Ease.get(1)).to({y:173},10,cjs.Ease.get(-1)).to({y:169.5},10,cjs.Ease.get(1)).to({y:177},10,cjs.Ease.get(-1)).to({y:184.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_11 = new lib.Символ11();
	this.instance_11.setTransform(129.5,-10.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:-7.7},9,cjs.Ease.get(-1)).to({y:-4.5},10,cjs.Ease.get(1)).to({x:131.5,y:-2},10,cjs.Ease.get(-1)).to({x:133.5,y:0.5},10,cjs.Ease.get(1)).to({x:131.5,y:-5},10,cjs.Ease.get(-1)).to({x:129.5,y:-10.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_12 = new lib.Символ11();
	this.instance_12.setTransform(71.5,175.4,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:73.8,y:177.8},9,cjs.Ease.get(-1)).to({x:76.5,y:180.4},10,cjs.Ease.get(1)).to({x:79.5,y:177.4},10,cjs.Ease.get(-1)).to({x:82.5,y:174.4},10,cjs.Ease.get(1)).to({x:77,y:174.9},10,cjs.Ease.get(-1)).to({x:71.5,y:175.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_13 = new lib.Символ11();
	this.instance_13.setTransform(71.5,114.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:117.8},9,cjs.Ease.get(-1)).to({y:121.5},10,cjs.Ease.get(1)).to({x:74,y:119},10,cjs.Ease.get(-1)).to({x:76.5,y:116.5},10,cjs.Ease.get(1)).to({x:74,y:115.5},10,cjs.Ease.get(-1)).to({x:71.5,y:114.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_14 = new lib.Символ11();
	this.instance_14.setTransform(71.5,59.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:74.3,y:59},9,cjs.Ease.get(-1)).to({x:77.5,y:58.5},10,cjs.Ease.get(1)).to({x:74.5,y:61.5},10,cjs.Ease.get(-1)).to({x:71.5,y:64.5},10,cjs.Ease.get(1)).to({y:62},10,cjs.Ease.get(-1)).to({y:59.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_15 = new lib.Символ11();
	this.instance_15.setTransform(71.5,-1.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:69.1,y:-4.3},9,cjs.Ease.get(-1)).to({x:66.5,y:-7.5},10,cjs.Ease.get(1)).to({x:71.5,y:-2.5},10,cjs.Ease.get(-1)).to({x:76.5,y:2.5},10,cjs.Ease.get(1)).to({x:74,y:0.5},10,cjs.Ease.get(-1)).to({x:71.5,y:-1.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_16 = new lib.Символ11();
	this.instance_16.setTransform(8.5,175.4,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:6.2,y:177.8},9,cjs.Ease.get(-1)).to({x:3.5,y:180.4},10,cjs.Ease.get(1)).to({x:0.5,y:177.4},10,cjs.Ease.get(-1)).to({x:-2.5,y:174.4},10,cjs.Ease.get(1)).to({x:3,y:174.9},10,cjs.Ease.get(-1)).to({x:8.5,y:175.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_17 = new lib.Символ11();
	this.instance_17.setTransform(8.5,114.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:10.9,y:117.8},9,cjs.Ease.get(-1)).to({x:13.5,y:121.5},10,cjs.Ease.get(1)).to({x:16.5},10,cjs.Ease.get(-1)).to({x:19.5},10,cjs.Ease.get(1)).to({x:14,y:118},10,cjs.Ease.get(-1)).to({x:8.5,y:114.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_18 = new lib.Символ11();
	this.instance_18.setTransform(8.5,59.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:5.7,y:62.3},9,cjs.Ease.get(-1)).to({x:2.5,y:65.5},10,cjs.Ease.get(1)).to({x:-1,y:62},10,cjs.Ease.get(-1)).to({x:-4.5,y:58.5},10,cjs.Ease.get(1)).to({x:2,y:59},10,cjs.Ease.get(-1)).to({x:8.5,y:59.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_19 = new lib.Символ11();
	this.instance_19.setTransform(8.5,-1.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:11.4,y:1.4},9,cjs.Ease.get(-1)).to({x:14.5,y:4.5},10,cjs.Ease.get(1)).to({x:19.5,y:-0.5},10,cjs.Ease.get(-1)).to({x:24.5,y:-5.5},10,cjs.Ease.get(1)).to({x:16.5,y:-3.5},10,cjs.Ease.get(-1)).to({x:8.5,y:-1.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-36,393,229);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(81,-322,1,1,0,0,0,69,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,-445,393,229);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(0,0,1,0.087);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleY:1},4,cjs.Ease.get(-1)).to({scaleY:0.09,alpha:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(603.5,154,1,1,180,0,0,6.5,47);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(6.5,154,1,1,0,0,0,6.5,47);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(91,154,0.742,0.742,180,0,0,15.1,62);

	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(518.1,154.1,0.742,0.742,0,0,0,15.1,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAvLgN+Ir3AAIAAaFIL3AAAAKtRQFHAADoDoQDnDnAAFHQAAFFjnDoQjoDolHAAQkXAAjSiqQgjgdggghQjojoAAlFQAAlHDojnQAgghAjgcQDSirEXAAIAAYrIAALuAAK3HIAAJ2EgvKgN+IL3AAIAAaFIr3AA");
	this.shape.setTransform(305,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,11,612,298);


(lib.koef_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.blick = new lib.Символ15();
	this.blick.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 1
	this.text = new cjs.Text("  ", "bold 21px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 82;
	this.text.setTransform(-2.2,-12.4);

	this.instance = new lib.Символ29();
	this.instance.setTransform(0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-16.4,86.5,35.8);


(lib.koef_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.blick = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 1
	this.text = new cjs.Text(" ", "bold 21px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 82;
	this.text.setTransform(-2.2,-12.3);

	this.instance = new lib.Символ30();
	this.instance.setTransform(0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-16.5,86.3,36);


(lib.koef_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.blick = new lib.Символ15();
	this.blick.setTransform(1.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 1
	this.text = new cjs.Text("  ", "bold 21px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 82;
	this.text.setTransform(-2.2,-12.4);

	this.instance = new lib.Символ29();
	this.instance.setTransform(0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-16.4,86.5,35.8);


(lib.flag_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.blick = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 2
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.zagl_2();
	this.instance_1.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.flag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.blick = new lib.Символ35();
	this.blick.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 2
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.zagl();
	this.instance_1.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.blick = new lib.Символ9();
	this.blick.setTransform(158,1.7);

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 1
	this.text = new cjs.Text("  ", "bold 20px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 187;
	this.text.setTransform(153.8,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(0.5,0.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#174613").s().p("Au3CPIAAkdIdvAAIAAEdg");
	this.shape.setTransform(155.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.1,-14.3,291.1,57.3);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(50.1,50.1,1,1,0,0,0,33.6,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:51.2},0).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(50,51.1,1,1,0,0,0,50,50);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// Символ 26
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(50,55.5,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,105.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(50,52.7,1,1,0,0,0,50,52.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,105.5);


// stage content:
(lib.VS_fonbet_euro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var lastEventKey = null;
		var monts = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		var flags = {
			'австрия': 'austria.png',
			'албания': 'albania.png',
			'англия': 'england.png',
			'бельгия': 'belgium.png',
			'венгрия': 'hungary.png',
			'германия': 'germany.png',
			'ирландия': 'ireland.png',
			'исландия': 'iceland.png',
			'испания': 'spain.png',
			'италия': 'italy.png',
			'польша': 'poland.png',
			'португалия': 'portugal.png',
			'россия': 'russia.png',
			'румыния': 'romania.png',
			'сев. ирландия': 'north_ireland.png',
			'словакия': 'slovakia.png',
			'турция': 'turkey.png',
			'украина': 'ukraine.png',
			'уэльс': 'wales.png',
			'франция': 'france.png',
			'хорватия': 'croatia.png',
			'чехия': 'czech.png',
			'швейцария': 'switzerland.png',
			'швеция': 'sweden.png',
		
			'венесуэла': 'venezuela.png',
			'уругвай': 'uruguay.png',
			'сша': 'usa.png',
			'перу': 'peru.png',
			'парагвай': 'paraguay.png',
			'панама': 'panama.png',
			'мексика': 'mexico.png',
			'ямайка': 'jamaica.png',
			'гаити': 'haiti.png',
			'эквадор': 'ecuador.png',
			'коста-рика': 'costa_rica.png',
			'колумбия': 'colombia.png',
			'чили': 'chile.png',
			'бразилия': 'brazil.png',
			'боливия': 'bolivia.png',
			'аргентина': 'argentina.png',
		};
		
		window.fonbet_callback = function (data) {
		
			var rootId = 1; // футбол
			var events = [];
			var currentTime = new Date().getTime() / 1000;
		
			if (data && typeof data === 'object') {
				for (var i in data) {
					var obj = data[i];
					if (obj && obj.sportRoot && obj.sportRoot == rootId && obj.startTime > currentTime) {
						events.push(obj);
					}
				}
			}
		
			if (events.length === 1) {
		
				showEvent(events[0]);
			} else if (events.length > 1) {
		
				showEvent(getRand(events));
				setInterval(function () {
					showEvent(getNext(events));
				}, 5 * 1000);
			}
		}
		
		showEvent = function (event) {
		
			var winFirst = event.factors[0]; // выиграет первая команда
			var winNoBody = event.factors[1]; // ничья
			var winSecond = event.factors[2]; // выиграет вторая команда
			winFirst.name; // название ставки , Англия
			winFirst.value; // ставка , 2.10
		
			event.team1; // название первой команды
			event.team2; // название второй команды
		
			var date = new Date();
			date.setTime(event.startTime * 1000);
		
			// дата начала матча
			date = lpadTime(date.getDate()) + " " + monts[date.getMonth()] + " " + date.toTimeString().substr(0, 5);
		
		
			_this.kom_1.text.text = winFirst.name;
			_this.kom_2.text.text = winSecond.name;
		
			_this.flag_1.instance_1.image.src = getFlag(winFirst.name);
			_this.flag_2.instance_1.image.src = getFlag(winSecond.name);
		
		
			_this.koef_1.text.text = winFirst.value;
			_this.koef_3.text.text = winNoBody.value;
			_this.koef_2.text.text = winSecond.value;
		
			_this.date.text.text = date;
		
			_this.koef_1.blick.gotoAndPlay(1);
			_this.koef_3.blick.gotoAndPlay(1);
			_this.koef_2.blick.gotoAndPlay(1);
			_this.date.blick.gotoAndPlay(1);
			_this.flag_1.blick.gotoAndPlay(1);
			_this.flag_2.blick.gotoAndPlay(1);
		
		}
		
		function lpadTime(num) {
			return ("00" + num).slice(-2);
		}
		
		
		function getFlag(country) {
		
			var key = ("" + country).toLowerCase();
			if (flags[key] !== undefined) {
				//~ return '/media/flags_fonbet/' + flags[key];
				return 'http://img1458.r.worldssl.net/media/flags_fonbet/' + flags[key];
			}
		}
		
		function getRand(array) {
		
			var key;
			do {
				key = parseInt(Math.random() * array.length);
			} while (key == lastEventKey);
		
			lastEventKey = key;
		
			return array[lastEventKey];
		}
		
		function getNext(array) {
		
			lastEventKey++;
			if (lastEventKey >= array.length) {
				lastEventKey = 0;
			}
			return array[lastEventKey];
		}
		
		function createRequest() {
		
			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "http://root-srv.fonbet.com/BetsService/line/news/all/ru?callback=fonbet_callback&" + Math.random();
		
			document.head.appendChild(script);
		}
		
		createRequest();
		//tweens
		
		var tween = createjs.Tween.get(this.flag_1, {
			loop: true
		}).to({
			y: 239
		}, 1000, createjs.Ease.quadInOut).to({
			y: 113
		}, 1000, createjs.Ease.quadInOut);
		var tween_2 = createjs.Tween.get(this.flag_2, {
			loop: true
		}).to({
			y: 113
		}, 1000, createjs.Ease.quadInOut).to({
			y: 239
		}, 1000, createjs.Ease.quadInOut);
		
		//clickTAG
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", MouseOver);
		function MouseOver() {
			_this.black.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", MouseOut);
		function MouseOut() {
			_this.black.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.date = new lib.date();
	this.date.setTransform(192.1,70.2);

	this.timeline.addTween(cjs.Tween.get(this.date).wait(1));

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(299.6,22.6,1,1,0,0,0,287.6,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(300.1,174,0.967,0.967,0,0,0,50.1,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.flag_2 = new lib.flag_2();
	this.flag_2.setTransform(537.3,239,0.327,0.327);

	this.flag_1 = new lib.flag_1();
	this.flag_1.setTransform(60.3,113,0.327,0.327);

	this.kom_2 = new lib.kom_2();
	this.kom_2.setTransform(431.6,134.7);
	this.kom_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,4);

	this.kom_1 = new lib.kom_1();
	this.kom_1.setTransform(166.2,134.4);
	this.kom_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kom_1},{t:this.kom_2},{t:this.flag_1},{t:this.flag_2}]}).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(243.1,269.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,4);

	this.koef_3 = new lib.koef_3();
	this.koef_3.setTransform(354.3,269);

	this.koef_2 = new lib.koef_2();
	this.koef_2.setTransform(432.7,178.5);

	this.koef_1 = new lib.koef_1();
	this.koef_1.setTransform(167.8,178.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.koef_1},{t:this.koef_2},{t:this.koef_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(298.9,177,1,1,0,0,0,304.9,154);
	this.instance_3.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 10
	this.black = new lib.Символ40();
	this.black.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(176,588,1,1,0,0,0,69,87);
	this.instance_4.alpha = 0.781;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 5
	this.instance_5 = new lib.gaz();
	this.instance_5.setTransform(295,-44);

	this.instance_6 = new lib.gaz();
	this.instance_6.setTransform(-200,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,-118.6,995,724.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
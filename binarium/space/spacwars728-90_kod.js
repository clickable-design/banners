(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg_main.jpg?1465911860638", id:"bg_main"},
		{src:"images/jojo.png?1465911860638", id:"jojo"},
		{src:"images/mans.png?1465911860638", id:"mans"}
	]
};



// symbols:



(lib.bg_main = function() {
	this.initialize(img.bg_main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.jojo = function() {
	this.initialize(img.jojo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,63);


(lib.mans = function() {
	this.initialize(img.mans);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1195,187);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgWBwQgQgDgRgFQgSgHgLgNQgFgIgCgIQgDgIAAgLIAAhfQAAgSAIgNQAHgNALgHQALgHAPgEQAQgFAMAAIAxAAQANAAAPAFQAQAEALAHQALAHAHANQAIANAAASIAABfQAAATgKANQgKAOgRAHQgRAGgRAEQgQACgUAAQgPAAgQgCgAgbhGQgHAEgDAFQgDAGAAAJIAABfQAAAKAEAEQAFAHAIACIAQADIAkAAIAQgDQAIgCAFgHQAEgEAAgKIAAhfQAAgJgDgGQgEgFgGgEQgHgDgJgBIgXgCQgZAAgMAGgAFlBvIAAjdIBfAAQA5AAAZANQAMAHAHAOQAGANAAAUIAABZQAAASgGAOQgGAMgMAHQgLAHgVADQgVADgdABgAGbBIIAnAAQAgABALgFQAGgCADgGQADgFAAgJIAAhaQAAgQgNgGQgNgHgbAAIgpAAgACeBvIAAjdIA2AAIAAC2IBuAAIAAAngAksBvIAAjdICuAAIAAAlIh4AAIAAA3IBtAAIAAAkIhtAAIAABdgAmSBvIhsiaIAACaIgwAAIAAjdIA2AAIBtCWIAAiWIAwAAIAADdg");
	this.shape.setTransform(55.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.9,22.9);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AOiCNIAAg5IiAAAIAAA5IgwAAIAAhfIAUAAQAPgZAHgcQADgPACgYIABhbICaAAIAAC3IAXAAIAABfgANXhSQAAArgHAgQgFAfgNAWIBIAAIAAiRIgvAAgAJLBVQgQgCgRgGQgSgHgLgNQgEgHgDgJQgCgIgBgLIAAhfQABgSAHgNQAIgNAKgHQALgGAQgFQAPgEANgBIAzAAQAMABAQAEQAPAFALAGQALAHAIANQAHANABASIAABfQAAATgLAOQgKANgQAHQgSAHgQADQgRACgTAAQgSAAgQgCgAJGhgQgGADgEAGQgDAFAAAJIAABfQAAAKAFAFQAEAGAIACIARADIAmAAIAQgDQAHgCAFgGQAFgFAAgKIAAhfQAAgJgEgFQgEgGgGgDQgGgEgKgBIgWgCQgbAAgNAHgABsBVQgQgCgRgGQgTgHgKgNQgFgHgDgJQgCgIAAgLIAAhfQAAgSAIgNQAHgNALgHQALgGAQgFQAPgEAMgBIAzAAQAMABAQAEQAQAFAKAGQALAHAJANQAHANAAASIAABfQAAATgKAOQgKANgRAHQgRAHgRADQgQACgTAAQgSAAgQgCgABmhgQgGADgDAGQgEAFABAJIAABfQgBAKAFAFQAFAGAIACIARADIAmAAIAPgDQAJgCAEgGQAFgFgBgKIAAhfQAAgJgDgFQgEgGgGgDQgGgEgLgBIgWgCQgbAAgNAHgAm/BVQgPgCgSgGQgSgHgKgNQgFgHgDgJQgDgIAAgLIAAhfQAAgSAJgNQAHgNALgHQALgGAPgFQAQgEAMgBIAzAAQANABAPAEQAPAFAMAGQAKAHAIANQAIANAAASIAABfQAAATgLAOQgJANgRAHQgRAHgRADQgRACgTAAQgSAAgQgCgAnEhgQgGADgEAGQgDAFAAAJIAABfQABAKAEAFQAEAGAJACIAQADIAmAAIAQgDQAIgCAEgGQAFgFAAgKIAAhfQAAgJgDgFQgEgGgHgDQgGgEgKgBIgWgCQgbAAgNAHgAGzBUIgqhCQgNgTgKgFQgJgFgSAAIAABfIg1AAIAAjdIA1AAIAABYQANAAAFgCQAFgCAFgIIAZgnQAOgYAMgHQAMgGAbAAIAZAAIAAAmIgOAAQgRAAgFADQgEACgJAMIgNAXQgHAKgFAFQgGAEgIAEQAJACAOANQAOAMAPAUIAwBJgAg2BUIAAikIgBAAIg5CkIgqAAIg7ikIgBAAIAACkIgyAAIAAjdIBNAAIA3CdIA3idIBHAAIAADdgArZBUIAAjdIBaAAQAvAAAUAKQALAFAFALQAFAJgBAQIAAAqQAAARgEALQgGALgLAFQgMAFgRADQgTADgYAAIgeAAIAABJgAqjgXIAiAAQAVAAAJgGQAIgFAAgLIAAglQAAgKgIgEQgIgDgXAAIghAAgAs/BUIAAi3IhdAAIAAC3Ig2AAIAAjdIDJAAIAADdg");
	this.shape.setTransform(97.9,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.8,28.3);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AD/CLIAAg4IiAAAIAAA4IgwAAIAAheIATAAQARgZAGgdQADgPACgYIABhbICaAAIAAC4IAWAAIAABegACzhUQAAAsgGAgQgFAegNAXIBJAAIAAiSIgxAAgAHzBTIAAidIhmCdIg6AAIAAjeIA0AAIAACaIBliaIA6AAIAADegAhwBTIAAjeICoAAIAAAmIhzAAIAAA0IBnAAIAAAmIhnAAIAAA4IB3AAIAAAmgAlLBTIAAjeIBbAAQAYABAQACQAQACAJAGQAIAFAEAKQAFAJgBANIAAAbQAAAKgHAIQgIAJgJADIAAACQAMABALAJQALALAAALIAAAhQAAAcgWALQgMAFgQADQgRACgVABgAkVAtIAmAAQAVAAAIgFQAHgFABgJIAAgTQAAgJgHgGQgGgFgQAAIguAAgAkVgwIAlAAQATAAAFgEQAFgGABgMIAAgMQgBgKgFgEQgEgFgVAAIgkAAgAomBTIAAjeIBbAAQAYABARACQAPACAJAGQAIAFAFAKQAEAJAAANIAAAbQAAAKgIAIQgHAJgKADIAAACQAMABAMAJQALALgBALIAAAhQAAAcgVALQgMAFgQADQgRACgWABgAnvAtIAlAAQAVAAAIgFQAIgFAAgJIAAgTQAAgJgGgGQgHgFgQAAIgtAAgAnvgwIAkAAQAUAAAFgEQAFgGAAgMIAAgMQAAgKgFgEQgGgFgUAAIgjAAg");
	this.shape.setTransform(55.1,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.2,28);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("AD9BWQgLgCgOgFQgNgFgIgKQgEgGgCgGQgCgGAAgIIAAhIQAAgOAGgJQAGgKAHgGQAJgFAMgDQAMgDAJgBIAnAAQAJABAMADQAMADAIAFQAJAGAFAKQAHAJgBAOIAABIQABAOgJAKQgHALgMAFQgNAFgOACQgMACgPAAIgagBgAD6g0QgFACgCAFQgDAEAAAHIAABIQAAAHADAEQAEAEAGACIANADIAdAAIALgDQAGgCAEgEQAEgEAAgHIAAhIQAAgHgDgEQgDgFgFgCIgMgDIgSgCQgTAAgKAFgAnWBWQgKAAgLgDQgMgEgIgFQgIgFgFgJQgFgJgBgNIAAhIQAAgaAUgNQATgNAoAAQANAAApAGIAAAeIgdgFQgNgCgLAAIgPABIgLACQgHACgDAFQgDAEAAAIIAABGQAAAMALAFQAKAGAVAAQANAAAmgHIAAAfQglAFgSAAgAGIBVIAAioIBFAAQASAAANACQAMACAGAEQAHAEADAHQADAHAAAKIAAAVQAAAHgGAHQgGAGgHACIAAACQAJABAJAEQAIAIAAAKIAAAaQAAAVgRAIQgJAEgLADQgOACgQAAgAGxA4IAdAAQAPAAAHgEQAFgDAAgIIAAgNQAAgKgEgEQgGgEgLAAIgjAAgAGxgOIAcAAQAPAAADgEQAFgEAAgJIAAgJQAAgIgFgDQgEgDgPAAIgbAAgAB9BVIAAhJIhIAAIAABJIgpAAIAAioIApAAIAABEIBIAAIAAhEIApAAIAACogAg9BVIAAh3IhMB3IgsAAIAAioIAnAAIAAB0IBNh0IArAAIAACogAkDBVIAAiLIhHAAIAACLIgoAAIAAioICYAAIAACog");
	this.shape.setTransform(53.1,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.2,17.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("An9BWQgJAAgMgDQgLgEgIgFQgIgFgFgJQgGgJAAgNIAAhIQAAgaATgNQAVgNAnAAQAMAAAqAGIAAAeIgdgFQgOgCgLAAIgOABIgMACQgGACgDAFQgDAEAAAIIAABGQAAAMAKAFQALAGAVAAQAMAAAmgHIAAAfQglAFgRAAgAjpBVIAAgbIAOABQAIAAAEgDQAEgFAAgJIAAh9ICSAAIAACoIgpAAIAAiLIhBAAIAABmQAAAKgCAHQgDAIgFAEQgDAEgHACIgOADIgOAAIgWgBgANTBVIgmg8IgoA8IgvAAIA/hVIg7hTIAvAAIAkA4IAkg4IAvAAIg8BTIA/BVgAKZBVIAAioIApAAIAACogAHxBVIAAioIAoAAIAABAIA9ABIAPACIALAEQAGACADAEQAEAEABADQADAGAAAHIAAAeQAAAUgRAKQgRALgjAAgAIZA4IAiAAQAPAAAHgFQAHgEAAgJIAAgQQAAgIgIgDQgGgDgPAAIgiAAgAGjBVIAAhJIhIAAIAABJIgpAAIAAioIApAAIAABEIBIAAIAAhEIApAAIAACogAC+BVIAAiLIg0AAIAAgdICRAAIAAAdIg0AAIAACLgABcBVIgPgtIg/AAIgOAtIgnAAIA9ioIAyAAIA9CogABDANIgUg+IgBAAIgXA+IAsAAgAkpBVIAAiLIhHAAIAACLIgoAAIAAioICYAAIAACogArTBVIAAioICBAAIAAAdIhZAAIAAAnIBQAAIAAAbIhQAAIAAAsIBcAAIAAAdgAuCBVIAAioICEAAIAAAdIhcAAIAAAjIA+ABIAOACIALAEQAGACAEAEQADAEACADQADAGAAAHIAAAeQgBAUgRAKQgRALgiAAgAtaA4IAiAAQAQAAAGgFQAIgEgBgJIAAgQQAAgIgHgDQgHgDgOAAIgjAAg");
	this.shape.setTransform(90,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.9,17.5);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("AA4BWQgIAAgJgCQgJgDgFgFQgGgFgEgJQgEgJAAgNIAAhPQAAgMAEgJQAEgJAGgGQAFgEAJgDIARgDIAkAAIAQADQAKADAFAEQAGAGAEAJQAEAJAAAMIAABPQAAANgEAJQgEAJgGAFQgFAFgKADQgJACgHAAgAA2g5QgEADAAANIAABUQAAANAEADQAEAEAQAAQAQAAAEgEQAEgDAAgNIAAhUQAAgNgEgDQgEgEgQAAQgQAAgEAEgAiIBVIAAgnQAAgPAIgKQAIgKAMgGIAXgGQAMgEAIgGQAJgEAAgIIAAgVQAAgJgHgCQgHgDgPAAQgcACgTAFIAAgdQAagGAcAAQAeAAAQAJQAPAKAAAWIAAAXQAAAOgIAJQgJAJgMAFIgYAJQgLAEgJAFQgIAGAAAJIAAAIIBRAAIAAAdg");
	this.shape.setTransform(13.7,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,17.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E6FFFF","#C4FFFF"],[0,1],-8.7,0,8.8,0).s().p("AhWBUIAAgbIANABQAIAAAEgEQAEgEAAgJIAAh9ICQAAIAACoIgpAAIAAiLIg+AAIAABlQAAALgDAGQgCAIgFAFQgEAEgHACIgNADIgPAAIgVgBg");
	this.shape.setTransform(45.4,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E6FFFF","#C4FFFF"],[0,1],-8,0,8.1,0).s().p("Ag/BTIAAgeQALAEAIAAQAIAAAGgEQAFgEAEgHIAHgPIhBhvIAqAAIApBMIAihMIAqAAIhBCGQgIASgKAJQgNAIgVAAQgMAAgOgCg");
	this.shape_1.setTransform(64.2,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E6FFFF","#C4FFFF"],[0,1],-7.3,0,7.4,0).s().p("AAgBUIAAhJQgCAMgLAEQgTADgRAAQgdAAgNgJQgGgFgEgIQgDgHAAgJIAAhLIApAAIAABDQAAAMAFAEQAEABAFABIAPABQASAAAIgDQAIgDAAgKIAAhGIApAAIAACng");
	this.shape_2.setTransform(81.6,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E6FFFF","#C4FFFF"],[0,1],-8,0,8,0).s().p("AAoBUIAAh2IhKB2IgsAAIAAinIAmAAIAAB0IBLh0IAtAAIAACng");
	this.shape_3.setTransform(100.5,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E6FFFF","#C4FFFF"],[0,1],-8,0,8.1,0).s().p("AgYBVQgMgCgNgEQgOgFgJgLQgEgFgBgGQgCgHAAgIIAAhIQAAgNAFgKQAHgKAIgFQAIgFALgEQANgDAIAAIAmAAQAJAAAMADQALAEAJAFQAIAFAGAKQAGAKAAANIAABIQAAAPgIAKQgHAKgNAFQgNAGgNACQgNABgNAAIgYgBgAgdg1QgEADgDAEQgCAFgBAGIAABIQABAHADAEQAEAFAGACIAMACIAbAAIAMgCQAGgCAEgFQADgEAAgHIAAhIQAAgGgCgFQgEgEgEgDQgFgCgIgBIgQgBQgTAAgKAEg");
	this.shape_4.setTransform(26.6,8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E6FFFF","#C4FFFF"],[0,1],0,-7.6,0,7.6).s().p("AAjBUIAAiKIhFAAIAACKIgpAAIAAinICXAAIAACng");
	this.shape_5.setTransform(7.6,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.5,17.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACmCxIAAgfIhHAAIAAAfIgbAAIAAg0IALAAQAJgOAEgRQACgIAAgNIABgzIBVAAIAABnIAMAAIAAA0gAB8A1QAAAYgDASQgEASgGAMIAoAAIAAhRIgbAAgAgVCSQgJgBgKgDQgJgEgGgHQgDgEgCgFQgBgEAAgGIAAg2QAAgKAEgHQAEgHAGgEQAGgEAJgCQAIgCAHgBIAbAAQAGABAJACQAIACAHAEQAGAEAEAHQAEAHAAAKIAAA2QAAAKgGAIQgFAHgJAEQgKAEgJABQgJACgJAAQgKAAgIgCgAgYAtQgEACgCADQgBADAAAFIAAA2QAAAFACADQACADAFABIAJACIATAAIAJgCQAEgBADgDQACgDAAgFIAAg2QAAgFgCgDQgBgDgEgCQgEgCgFgBIgLAAQgOAAgHADgAhpCSIgXglQgIgLgFgDQgFgDgKAAIAAA2IgdAAIAAh8IAdAAIAAAyQAHAAADgCQADgBADgEIANgWQAIgNAHgEQAGgEAQAAIANAAIAAAWIgIAAQgJAAgDABQgCABgFAHIgHANIgHAIQgDADgEABQAEABAIAHQAIAIAIALIAbApgAAvgyIgPgDQgJgCgFgEQgGgDgEgHQgEgHAAgJIAAg2QAAgTAOgJQAOgJAdAAQAJAAAeAEIAAAWIgVgEIgSgBIgKAAIgJACQgEABgCAEQgCADAAAFIAAA1QAAAIAHAEQAIAFAPAAQAJAAAcgGIAAAWQgbAFgNAAgAFAgzIAAhYIg4BYIgfAAIAAh8IAcAAIAABXIA4hXIAgAAIAAB8gACUgzIAAhmIgmAAIAAgWIBqAAIAAAWIgmAAIAABmgAhrgzIAAh8IBeAAIAAAWIhAAAIAAAcIA6AAIAAAVIg6AAIAAAgIBCAAIAAAVgAjjgzIAAh8IAyAAQANAAAJACQAIABAFADQAFADACAFQACAGAAAHIAAAPQAAAFgEAFQgEAEgFACIAAABQAHABAGAFQAGAFAAAHIAAATQAAAQgMAGQgHADgJABQgJACgMAAgAjGhIIAVAAQALAAAFgDQAEgCAAgGIAAgKQAAgGgDgDQgEgDgJAAIgZAAgAjGh8IAVAAQAKAAADgDQADgDAAgHIAAgGQAAgGgDgCQgDgCgLAAIgUAAgAlcgzIAAh8IAyAAQANAAAJACQAJABAFADQAEADADAFQACAGAAAHIAAAPQAAAFgEAFQgFAEgFACIAAABQAHABAGAFQAGAFAAAHIAAATQAAAQgMAGQgGADgJABQgKACgMAAgAk+hIIAVAAQALAAAEgDQAFgCAAgGIAAgKQAAgGgEgDQgDgDgJAAIgZAAgAk+h8IAUAAQALAAACgDQADgDAAgHIAAgGQAAgGgDgCQgCgCgMAAIgTAAg");
	this.shape.setTransform(34.9,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.9,35.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjhIBQgvgfgrgnQjFi0AAj+QAAj8DFi1QA5g0BAgkILDAAIAAQBg");
	this.shape.setTransform(51.4,51.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.7,102.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AjhIBQgvgfgrgnQjFi0AAj+QAAj8DFi1QA5g0BAgkILDAAIAAQBg");
	this.shape.setTransform(51.4,51.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.7,102.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAsQgGgBgEgDIADgJQAMAGAJAAQADAAAFgCQADgBADgDQACgDABgDIABgGQAAgFgCgDQgCgDgDgDQgDgCgFgBIgGgBIgHAAIAAgHIAHAAIAGgCIAFgCIAFgFQACgDAAgEQAAgGgEgDIgFgEIgFgBQgFAAgFADIgIAEIgDgKQAEgCAGgDQAHgCAGAAQAFAAAFACQAFACADADQADADACAEIABAIIgBAHIgDAGIgFAFIgHADIAAABIAIACIAGAEQADACABAFQACAEAAAEQAAAGgCAFQgCAEgEAFQgFADgGACQgGADgGAAQgHAAgHgDg");
	this.shape.setTransform(12.6,504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAlIAKgBIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAFgFACQgFACgFABQgGAAgFgCQgFgDgEgDQgDgEgCgEQgCgEAAgGQAAgGACgHQACgGAFgEQAEgFAFgCQAGgCAFgBQAHABAGACQAFADAEAFQAEAFACAHQACAHAAAJIgBAMIgDALIgFAKIgGAHQgGAFgHAEQgEADgIABIgLABgAgGgjIgGAFQgCADgBAEQgCAEAAAFIABAIIAEAGIAFACQAEABADABQAFAAAFgDQAEgBADgEIABgFIgBgLIgEgJQgCgDgEgCQgDgCgEAAQgDAAgDABg");
	this.shape_1.setTransform(5.6,504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAtIAlhOIAAgBIgqAAIAAgKIA3AAIAAAIIglBRg");
	this.shape_2.setTransform(12.8,488);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADAtIAAhNIgBAAIgNAIIgDgJIASgLIALAAIAABZg");
	this.shape_3.setTransform(5,488);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAkIAKAAIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAEgFADQgFACgFAAQgGAAgFgCQgFgBgEgFQgDgDgCgEQgCgFAAgFQAAgHACgFQACgGAFgFQAEgEAFgDQAGgCAFAAQAHAAAGACQAFADAEAFQAEAFACAHQACAHAAAJIgBALIgDANIgFAJIgGAIQgGAFgHADQgEADgIAAIgLABgAgGgiIgGAEQgCADgBAEQgCAEAAAFIABAHIAEAHIAFACQAEABADAAQAFAAAFgDQAEAAADgFIABgDIgBgLIgEgJQgCgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_4.setTransform(5.6,472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAuIAAgIIAJgJIAPgPIAJgMQAEgEACgFQACgFAAgFIgBgGIgDgGIgFgEQgEgCgDAAQgGAAgGADIgHAFIgFgJQAFgEAHgCQAHgDAHAAQAFAAAGADQAFACADAEQAEADACAFQABAFAAAFQAAAGgCAGQgCAFgFAFIgJALIgLAOIgHAGIAmAAIAAALg");
	this.shape_5.setTransform(12.7,455.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADAtIAAhOIgBAAIgNAJIgDgKIASgKIALAAIAABZg");
	this.shape_6.setTransform(5,456);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAsQgGgCgEgDQgEgDgCgEQgCgFAAgFQAAgEABgEIAEgHIAFgFIAIgDIAAAAIgHgEIgEgFQgEgFAAgGQAAgFADgFQACgEADgEIAJgFQAGgBAEgBQAGAAAFACQAFACADAEQAEACABAFQACAEAAAEQAAAGgDAGIgFAEIgHAFIAAAAIAIACIAFAGIAEAHIABAHQAAAGgCAFQgCAEgFAFQgEACgFACQgGACgGABQgFgBgGgCgAgHAFIgFAEIgDAFIgBAHQgBADACADQABADACADQADACADABQADACADAAIAHgCIAGgDIAEgFIABgGIgBgIIgEgGIgHgDIgGgDIgHADgAgFgkIgFAEIgDAEIgBAGIABAGIAEAFIAFADIAFADQAHgDADgDIADgFIABgGQAAgGgDgEIgFgEIgHgBIgFABg");
	this.shape_7.setTransform(12.7,440);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAtIAlhPIAAAAIgqAAIAAgKIA3AAIAAAIIglBRg");
	this.shape_8.setTransform(5.7,440);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAuIAAgIIAKgJIAPgPIAIgMQAFgEACgFQACgFAAgFIgBgGIgDgGIgGgEQgEgCgCAAQgGAAgGADIgIAFIgDgJQAFgEAGgCQAHgDAHAAQAFAAAGADQAFACAEAEQADADABAFQACAFAAAFQAAAGgCAGQgCAFgEAFIgKALIgLAOIgIAGIAoAAIAAALg");
	this.shape_9.setTransform(5.6,423.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAIAtIAAgZIgoAAIAAgIIAng4IANAAIAAA2IANAAIAAAKIgNAAIAAAZgAABgSIgUAcIAbAAIAAgcIABgOIgBAAg");
	this.shape_10.setTransform(12.7,408);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAsQgFgDgFgFQgEgFgCgHQgCgIAAgIIABgLIACgLIAGgKIAFgIQAGgFAIgDQAFgEAJAAIAJgBIAAAKIgJAAQgHABgGADIgIAIQgEAEgCAFQgCAGgBAFIAAAAQAEgEAFgDIAGgCIAGgBQAFAAAGACQAEACAEAEQAEAEABADQADAGAAAGQAAAGgDAHQgCAGgDAEQgFAEgFADQgFACgIAAQgFAAgGgCgAgJAAQgFABgCAEQgBADgBADQABAGABAEIAEAIIAGAGQAEACACAAQAFAAACgBQAEgCADgDIADgHQABgEAAgFQAAgEgBgEQgBgFgDgCQgCgBgEgBQgDgBgEgBQgEAAgFAEg");
	this.shape_11.setTransform(5.6,408);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAkIAKAAIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAEgFADQgFACgFAAQgGAAgFgCQgFgCgEgDQgDgEgCgDQgCgGAAgFQAAgHACgFQACgGAFgFQAEgEAFgDQAGgDAFABQAHgBAGADQAFADAEAFQAEAFACAHQACAHAAAJIgBAMIgDAMIgFAJIgGAIQgGAEgHAEQgEADgIAAIgLABgAgGgiIgGAEQgCADgBAEQgCAEAAAFIABAHIAEAHIAFACQAEABADAAQAFAAAFgDQAEAAADgFIABgDIgBgLIgEgJQgCgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_12.setTransform(12.8,392);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AADAtIAAhOIgBAAIgNAJIgDgKIASgKIALAAIAABZg");
	this.shape_13.setTransform(5,392);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAsQgGgDgEgFQgEgFgDgHQgCgHAAgKIABgKIAEgLIAEgKIAHgHQAFgGAHgDQAGgDAJgCIAIAAIAAAJIgJABQgGABgGAEIgIAHQgDAEgDAGQgDAFAAAGIABAAQADgFAFgDIAGgCIAFgBQAGAAAFACQAGACADAEQAEAEACAEQABAFAAAHQAAAFgBAGQgCAHgFADQgEAFgFADQgGACgGAAQgGAAgGgCgAgJAAQgFABgCAFQgBACAAADQAAAFABAGIADAIIAHAFQAEACADAAQADAAAEgCQADgBACgDIAEgHQABgEABgFQgBgFgBgEQgBgDgDgDQgDgBgDgBQgDgBgEAAQgEAAgFADg");
	this.shape_14.setTransform(12.8,376);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAsQgFgBgEgDIADgJQALAFAJAAIAGgCQAEgBADgCIAFgHQABgDAAgFQAAgEgBgEQgCgEgDgCQgDgCgFgBQgDgBgHAAIgNABIAGgsIAqAAIAAALIghAAIgDAXIAHgBIAIACQAGABAEACQAFAEAEADIADAHIABAIQAAAGgDAGQgCAGgFAEQgEAEgHACQgGADgFAAQgHAAgHgCg");
	this.shape_15.setTransform(5.4,376);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJAtIAAgYIgpAAIAAgJIAmg4IAOAAIAAA3IANAAIAAAKIgNAAIAAAYgAABgTIgVAeIAdAAIAAgdIAAgOIAAAAg");
	this.shape_16.setTransform(5.6,360);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAtIAlhOIAAgBIgqAAIAAgKIA3AAIAAAIIglBRg");
	this.shape_17.setTransform(5.7,344);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAkIAKAAIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAEgFADQgFACgFAAQgGAAgFgCQgFgBgEgFQgDgDgCgEQgCgFAAgFQAAgHACgFQACgGAFgFQAEgEAFgDQAGgCAFAAQAHAAAGACQAFADAEAFQAEAFACAHQACAHAAAJIgBALIgDANIgFAJIgGAIQgGAFgHADQgEADgIAAIgLABgAgGgiIgGAEQgCADgBAEQgCAEAAAFIABAHIAEAHIAFACQAEABADAAQAFAAAFgDQAEAAADgFIABgDIgBgLIgEgJQgCgEgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_18.setTransform(12.8,328);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADAtIAAhOIgBAAIgNAJIgDgKIASgKIALAAIAABZg");
	this.shape_19.setTransform(5,328);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRAsQgGgBgEgCIADgKQAMAGAJgBQADABAFgCQADgCADgCQACgDABgDIABgGQAAgFgCgDQgCgDgDgDIgIgDIgGgBIgHAAIAAgIIAHAAIAGgBIAFgCIAFgFQACgDAAgEQAAgGgEgEIgFgDIgFAAQgFgBgFACIgIAFIgDgJQAEgEAGgCQAHgBAGAAQAFAAAFABQAFACADADQADADACAEIABAIIgBAHIgDAGIgFAFIgHAEIAAAAIAIACIAGAEQADADABADQACAEAAAFQAAAGgCAEQgCAGgEADQgFAFgGABQgGACgGAAQgHAAgHgCg");
	this.shape_20.setTransform(12.6,312);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgLAsQgGgCgEgDQgEgDgCgEQgCgFAAgFQAAgFABgDIAEgHIAFgGIAIgBIAAgBIgHgEIgEgFQgEgFAAgGQAAgGADgEQACgEADgEIAJgFQAGgCAEABQAGAAAFABQAFACADAEQAEACABAEQACAFAAAEQAAAGgDAGIgFAEIgHAFIAAABIAIABIAFAGIAEAHIABAHQAAAGgCAFQgCAEgFAFQgEADgFABQgGACgGAAQgFAAgGgCgAgHAFIgFAEIgDAFIgBAGQgBADACAEQABADACADQADACADABQADABADAAIAHgBIAGgDIAEgFIABgGIgBgIIgEgGIgHgDIgGgEIgHAEgAgFgjIgFACIgDAGIgBAFIABAGIAEAFIAFADIAFACQAHgCADgDIADgFIABgGQAAgGgDgEIgFgDIgHgBIgFABg");
	this.shape_21.setTransform(5.6,312);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAsQgFgDgFgFQgEgFgCgHQgCgHAAgKIABgKIACgLIAGgJIAFgIQAGgGAIgDQAFgEAJgBIAJgBIAAAKIgJABQgHACgGADIgIAHQgEAEgCAGQgCAFgBAGIAAAAQAEgFAFgDIAGgCIAGgBQAFAAAGACQAEACAEAEQAEAEABAEQADAFAAAGQAAAGgDAGQgCAHgDADQgFAGgFACQgFADgIAAQgFAAgGgDgAgJgBQgFACgCAEQgBADgBADQABAGABAFIAEAIIAGAFQAEACACAAQAFAAACgCQAEgBADgDIADgHQABgEAAgFQAAgFgBgEQgBgDgDgDQgCgBgEgBQgDgCgEABQgEAAgFACg");
	this.shape_22.setTransform(5.6,296);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAIAtIAAgYIgoAAIAAgJIAng4IANAAIAAA3IANAAIAAAKIgNAAIAAAYgAABgTIgUAeIAbAAIAAgdIABgOIgBAAg");
	this.shape_23.setTransform(12.7,280);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcAuIAAgIIAKgJIAPgPIAIgMQAFgEACgFQACgFAAgFIgBgGIgDgGIgGgEQgEgCgCAAQgGAAgGADIgIAFIgDgJQAFgEAGgCQAHgDAHAAQAFAAAGADQAFACAEAEQADADABAFQACAFAAAFQAAAGgCAGQgCAFgEAFIgKALIgLAOIgIAGIAoAAIAAALg");
	this.shape_24.setTransform(5.6,279.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAtQgGgCgEgDIADgJQAMAFAJABQADgBAFgBQADgCADgDQACgCABgDIABgGQAAgEgCgEQgCgEgDgCIgIgDIgGgBIgHAAIAAgHIAHAAIAGgBIAFgDIAFgFQACgDAAgEQAAgGgEgEIgFgCIgFgBQgFAAgFACIgIADIgDgJQAEgDAGgBQAHgCAGAAQAFAAAFACQAFABADADQADADACAEIABAIIgBAHIgDAGIgFAFIgHADIAAABIAIACIAGADQADADABAEQACAEAAAFQAAAGgCAEQgCAFgEAEQgFAEgGADQgGACgGgBQgHABgHgCg");
	this.shape_25.setTransform(5.4,264);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgRAsQgGgBgEgCIADgKQAMAFAJAAQADABAFgCQADgBADgEQACgCABgDIABgGQAAgFgCgDQgCgDgDgDIgIgDIgGgBIgHAAIAAgIIAHAAIAGAAIAFgDIAFgFQACgDAAgEQAAgGgEgEIgFgDIgFAAQgFAAgFABIgIAFIgDgJQAEgEAGgCQAHgBAGAAQAFAAAFABQAFACADADQADADACAEIABAIIgBAHIgDAGIgFAFIgHAEIAAAAIAIACIAGADQADAEABADQACAFAAAEQAAAGgCAEQgCAGgEADQgFAFgGABQgGACgGAAQgHAAgHgCg");
	this.shape_26.setTransform(12.6,248);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgVAkIAKAAIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAEgFADQgFACgFAAQgGAAgFgCQgFgCgEgDQgDgEgCgDQgCgGAAgFQAAgHACgFQACgGAFgFQAEgEAFgDQAGgDAFABQAHgBAGADQAFADAEAFQAEAFACAHQACAHAAAJIgBAMIgDAMIgFAJIgGAIQgGAEgHAEQgEADgIAAIgLABgAgGgjIgGAFQgCADgBAEQgCAEAAAFIABAHIAEAHIAFACQAEABADAAQAFAAAFgDQAEAAADgFIABgDIgBgLIgEgJQgCgEgEgCQgDgCgEAAQgDAAgDABg");
	this.shape_27.setTransform(5.6,248);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAtIAlhPIAAAAIgqAAIAAgKIA3AAIAAAIIglBRg");
	this.shape_28.setTransform(12.8,232);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AADAtIAAhOIgBAAIgNAJIgDgKIASgKIALAAIAABZg");
	this.shape_29.setTransform(5,232);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAlIAKgBIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAFgFACQgFACgFABQgGAAgFgCQgFgCgEgFQgDgDgCgDQgCgFAAgGQAAgGACgHQACgGAFgEQAEgFAFgCQAGgCAFgBQAHABAGACQAFADAEAFQAEAFACAHQACAHAAAJIgBALIgDAMIgFAKIgGAHQgGAFgHAEQgEADgIABIgLABgAgGgjIgGAFQgCADgBAEQgCAEAAAFIABAIIAEAGIAFACQAEABADABQAFAAAFgDQAEgBADgEIABgFIgBgLIgEgJQgCgDgEgCQgDgCgEAAQgDAAgDABg");
	this.shape_30.setTransform(5.6,216);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgbAuIAAgIIAJgJIAPgPIAJgMQAEgEACgFQACgFAAgFIgBgGIgDgGIgFgEQgEgCgDAAQgGAAgGADIgHAFIgFgJQAFgEAHgCQAHgDAHAAQAFAAAGADQAFACADAEQAEADACAFQABAFAAAFQAAAGgCAGQgCAFgFAFIgJALIgLAOIgHAGIAmAAIAAALg");
	this.shape_31.setTransform(12.7,199.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AADAtIAAhNIgBAAIgNAIIgDgJIASgLIALAAIAABZg");
	this.shape_32.setTransform(5,200);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLAtQgGgCgEgEQgEgDgCgFQgCgEAAgFQAAgEABgEIAEgHIAFgGIAIgBIAAgBIgHgEIgEgFQgEgFAAgHQAAgFADgEQACgFADgDIAJgFQAGgBAEAAQAGAAAFACQAFABADADQAEAEABADQACAFAAAEQAAAGgDAFIgFAFIgHAFIAAABIAIACIAFAFIAEAGIABAIQAAAGgCAFQgCAEgFAEQgEAEgFACQgGABgGAAQgFAAgGgBgAgHAEIgFAFIgDAFIgBAGQgBADACAEQABADACADQADACADABQADACADgBIAHgBIAGgDIAEgFIABgHIgBgHIgEgFIgHgFIgGgDIgHADgAgFgjIgFACIgDAGIgBAFIABAGQABADADABIAFAEIAFACQAHgBADgFIADgEIABgGQAAgGgDgEIgFgDIgHgBIgFABg");
	this.shape_33.setTransform(12.7,184);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgWAtIAlhPIAAAAIgqAAIAAgKIA3AAIAAAIIglBRg");
	this.shape_34.setTransform(5.7,184);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgcAuIAAgIIAKgJIAPgPIAIgMQAFgEACgFQACgFAAgFIgBgGIgDgGIgGgEQgEgCgCAAQgGAAgGADIgIAFIgDgJQAFgEAGgCQAHgDAHAAQAFAAAGADQAFACAEAEQADADABAFQACAFAAAFQAAAGgCAGQgCAFgEAFIgKALIgLAOIgIAGIAoAAIAAALg");
	this.shape_35.setTransform(5.6,167.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAIAtIAAgYIgoAAIAAgJIAng4IANAAIAAA3IANAAIAAAKIgNAAIAAAYgAABgTIgUAeIAbAAIAAgdIABgOIgBAAg");
	this.shape_36.setTransform(12.7,152);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgLAsQgFgDgFgFQgEgFgCgHQgCgHAAgKIABgKIACgLIAGgJIAFgIQAGgGAIgDQAFgEAJgBIAJgBIAAAKIgJABQgHACgGADIgIAHQgEAEgCAGQgCAFgBAGIAAAAQAEgFAFgDIAGgCIAGgBQAFAAAGACQAEACAEAEQAEAEABAEQADAFAAAGQAAAGgDAGQgCAHgDADQgFAGgFACQgFADgIAAQgFAAgGgDgAgJgBQgFACgCAFQgBACgBADQABAGABAFIAEAIIAGAFQAEACACAAQAFAAACgCQAEgBADgDIADgHQABgEAAgFQAAgFgBgEQgBgDgDgDQgCgBgEgBQgDgCgEABQgEAAgFACg");
	this.shape_37.setTransform(5.6,152);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVAlIAKgBIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAFgFACQgFACgFABQgGgBgFgBQgFgDgEgEQgDgDgCgEQgCgEAAgGQAAgGACgGQACgHAFgEQAEgEAFgDQAGgDAFAAQAHAAAGADQAFADAEAFQAEAFACAHQACAHAAAJIgBALIgDAMIgFAKIgGAHQgGAGgHADQgEADgIABIgLABgAgGgiIgGAEQgCADgBAEQgCAEAAAFIABAIIAEAGIAFACQAEABADAAQAFAAAFgCQAEgBADgEIABgFIgBgLIgEgJQgCgDgEgCQgDgCgEAAQgDAAgDACg");
	this.shape_38.setTransform(12.8,136);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AADAtIAAhNIgBAAIgNAIIgDgJIASgLIALAAIAABZg");
	this.shape_39.setTransform(5,136);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgLAsQgGgDgEgFQgEgFgDgHQgCgIAAgIIABgLIAEgLIAEgKIAHgIQAFgFAHgDQAGgEAJAAIAIgBIAAAKIgJAAQgGABgGADQgEADgEAFQgDAEgDAFQgDAGAAAFIABAAQADgEAFgDIAGgCIAFgBQAGAAAFACQAGACADAEQAEAEACADQABAGAAAGQAAAGgBAHQgCAGgFAEQgEAEgFADQgGACgGABQgGgBgGgCgAgJAAQgFABgCAEQgBADAAADQAAAGABAEIADAIIAHAGQAEACADAAQADAAAEgBQADgCACgDIAEgHQABgEABgFQgBgEgBgEQgBgEgDgDQgDgBgDgBQgDgBgEgBQgEAAgFAEg");
	this.shape_40.setTransform(12.8,120);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAsQgFgBgEgDIADgJQALAFAJAAIAGgCQAEgBADgCIAFgHQABgDAAgFQAAgEgBgEQgCgEgDgCQgDgCgFgBQgDgBgHAAIgNABIAGgsIAqAAIAAALIghAAIgDAXIAHgBQADAAAFACQAGABAEACQAFAEAEADIADAHIABAIQAAAGgDAGQgCAGgFAEQgEAEgHACQgGADgFAAQgHAAgHgCg");
	this.shape_41.setTransform(5.4,120);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAJAtIAAgZIgpAAIAAgIIAmg4IAOAAIAAA2IANAAIAAAKIgNAAIAAAZgAABgSIgVAcIAdAAIAAgcIAAgOIAAAAg");
	this.shape_42.setTransform(5.6,104);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWAtIAlhPIAAAAIgqAAIAAgKIA3AAIAAAIIglBRg");
	this.shape_43.setTransform(5.7,88);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgVAlIAKgBIAKgDIAHgGQAEgEADgGQAEgGABgIIgBAAQgEAFgFACQgFACgFABQgGAAgFgCQgFgCgEgFQgDgDgCgEQgCgEAAgGQAAgGACgHQACgGAFgEQAEgFAFgCQAGgCAFgBQAHABAGACQAFADAEAFQAEAFACAHQACAHAAAJIgBALIgDAMIgFAKIgGAHQgGAFgHAEQgEADgIABIgLABgAgGgjIgGAFQgCADgBAEQgCAEAAAFIABAIIAEAGIAFACQAEABADABQAFAAAFgDQAEgBADgEIABgFIgBgLIgEgJQgCgDgEgCQgDgCgEAAQgDAAgDABg");
	this.shape_44.setTransform(12.8,72);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AADAtIAAhNIgBAAIgNAIIgDgJIASgLIALAAIAABZg");
	this.shape_45.setTransform(5,72);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgRAtQgGgCgEgDIADgJQAMAFAJABQADgBAFgBQADgCADgDQACgCABgDIABgGQAAgEgCgEQgCgEgDgCIgIgDIgGgBIgHAAIAAgHIAHAAIAGgBIAFgDIAFgFQACgDAAgEQAAgGgEgEIgFgCIgFgBQgFAAgFACIgIADIgDgJQAEgCAGgCQAHgCAGgBQAFABAFACQAFABADADQADADACAEIABAIIgBAHIgDAGIgFAFIgHADIAAABIAIACIAGADQADAEABAEQACADAAAFQAAAGgCAFQgCAEgEAEQgFAFgGACQgGACgGAAQgHAAgHgCg");
	this.shape_46.setTransform(12.6,56);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgLAtQgGgCgEgEQgEgDgCgFQgCgEAAgFQAAgFABgDIAEgHIAFgFIAIgDIAAAAIgHgEIgEgFQgEgFAAgHQAAgEADgFQACgFADgDIAJgFQAGgCAEAAQAGABAFACQAFABADADQAEADABAEQACAEAAAFQAAAGgDAFIgFAGIgHAEIAAAAIAIADIAFAFIAEAGIABAIQAAAGgCAFQgCAFgFADQgEAEgFACQgGACgGAAQgFAAgGgCgAgHAEIgFAFIgDAFIgBAGQgBADACAEQABADACACQADADADABQADABADABIAHgBIAGgEIAEgFIABgHIgBgHIgEgFIgHgFIgGgCIgHACgAgFgjIgFADIgDAEIgBAGIABAGIAEAEIAFAEIAFADQAHgCADgFIADgEIABgGQAAgGgDgEIgFgDIgHgCIgFACg");
	this.shape_47.setTransform(5.6,56);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLAsQgFgDgFgFQgEgFgCgHQgCgIAAgIIABgLIACgLIAGgKIAFgIQAGgFAIgDQAFgDAJgBIAJgBIAAAKIgJAAQgHABgGADIgIAIQgEAEgCAFQgCAGgBAFIAAAAQAEgEAFgDIAGgCIAGgBQAFAAAGACQAEACAEAEQAEAEABADQADAGAAAHQAAAFgDAHQgCAFgDAEQgFAFgFADQgFADgIgBQgFABgGgDgAgJAAQgFAAgCAGQgBACgBADQABAFABAFIAEAIIAGAGQAEACACAAQAFAAACgBQAEgCADgDIADgHQABgEAAgFQAAgEgBgEQgBgEgDgDQgCgBgEgBQgDgCgEAAQgEAAgFAEg");
	this.shape_48.setTransform(5.6,40);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAIAtIAAgZIgoAAIAAgIIAng4IANAAIAAA2IANAAIAAAKIgNAAIAAAZgAABgSIgUAcIAbAAIAAgcIABgOIgBAAg");
	this.shape_49.setTransform(12.7,24);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgcAuIAAgIIAKgJIAPgPIAIgMQAFgEACgFQACgFAAgFIgBgGIgDgGIgGgEQgEgCgCAAQgGAAgGADIgIAFIgDgJQAFgEAGgCQAHgDAHAAQAFAAAGADQAFACAEAEQADADABAFQACAFAAAFQAAAGgCAGQgCAFgEAFIgKALIgLAOIgIAGIAoAAIAAALg");
	this.shape_50.setTransform(5.6,23.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgRAsQgGgBgEgCIADgKQAMAGAJgBQADAAAFgBQADgBADgDQACgDABgDIABgGQAAgEgCgEQgCgDgDgDIgIgDIgGgBIgHAAIAAgIIAHAAIAGgBIAFgCIAFgFQACgDAAgEQAAgGgEgDIgFgEIgFgBQgFAAgFACIgIAFIgDgJQAEgEAGgCQAHgCAGAAQAFAAAFACQAFACADADQADADACAEIABAIIgBAHIgDAGIgFAFIgHAEIAAAAIAIACIAGAEQADACABAFQACAEAAAEQAAAGgCAFQgCAEgEAFQgFADgGACQgGACgGABQgHgBgHgCg");
	this.shape_51.setTransform(5.4,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,514);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_main();
	this.instance.setTransform(0,0,0.651,0.651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,666.6,500);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.mans, null, new cjs.Matrix2D(0.615,0,0,0.615,-37.4,-57.5)).s().p("Al0I/IAAx9ILpAAIAAR9g");
	this.shape.setTransform(37.4,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.8,115);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.mans, null, new cjs.Matrix2D(0.615,0,0,0.615,-209.2,-57.5)).s().p("AnkI/IAAx9IPJAAIAAR9g");
	this.shape.setTransform(48.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,115);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.mans, null, new cjs.Matrix2D(0.615,0,0,0.615,-296.2,-57.5)).s().p("AmAI/IAAx9IMBAAIAAR9g");
	this.shape.setTransform(38.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,115);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.mans, null, new cjs.Matrix2D(0.615,0,0,0.615,-382.7,-57.5)).s().p("AnfI/IAAx9IO/AAIAAR9g");
	this.shape.setTransform(48,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,115);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.mans, null, new cjs.Matrix2D(0.615,0,0,0.615,-470.8,-57.5)).s().p("AmQI/IAAx9IMhAAIAAR9g");
	this.shape.setTransform(40.1,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,115);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(57.3,52,1,1,0,0,0,34.9,17.8);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(58.8,51.4,1,1,0,0,0,51.4,51.4);

	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(51.4,51.4,1,1,0,0,0,51.4,51.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("AjhIBQgvgfgrgnQjFi0AAj+QAAj8DFi1QA5g0BAgkILDAAIAAQBg");
	this.shape.setTransform(58.7,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399CC").s().p("ABbIBQgvgfgrgnQjDi0AAj+QAAj8DDi1QA5g0BAgkIBJAAQhAAkg5A0QjDC1AAD8QAAD+DDC0QArAnAvAfg");
	this.shape_1.setTransform(19.6,51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.1,102.7);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(55,51.4,1,1,0,0,0,55,51.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.1,102.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.setTransform(54.3,51.4,1,1,0,0,0,55,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:57.2},9,cjs.Ease.get(-1)).to({x:60.3},10,cjs.Ease.get(1)).to({x:57.3},10,cjs.Ease.get(-1)).to({x:54.3},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0,110.1,102.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(9.3,-139.2,1,1,0,0,0,9.3,160.8);
	this.instance.alpha = 0.281;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:162.8},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-300,18.5,514);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 36
	this.instance = new lib.Символ36();
	this.instance.setTransform(332.2,-63.2,1,1,0,0,0,55.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:334,y:10.7},7,cjs.Ease.get(1)).wait(8).to({rotation:0,x:332.2,y:44.8},7,cjs.Ease.get(1)).wait(49).to({y:48.4},0).wait(25).to({rotation:8.7,y:74.9},5,cjs.Ease.get(1)).wait(7).to({x:329.8,y:135.5},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Символ 35
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(163.5,-60.6,1,1,0,0,0,97.9,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:98,rotation:-2.5,x:157.8,y:6.6},7,cjs.Ease.get(1)).wait(8).to({regX:97.9,rotation:0,x:163.5,y:47.4},7,cjs.Ease.get(1)).wait(49).to({regX:98,rotation:2.7,x:163.6,y:47.5},4).wait(10).to({rotation:-7.5,x:166.7,y:67.4},5).wait(6).to({rotation:-7.5},0).to({y:94},5,cjs.Ease.get(1)).wait(7).to({y:136.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Символ 34
	this.instance_2 = new lib.Символ34();
	this.instance_2.setTransform(-6.6,-60.4,1,1,0,0,0,55.1,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.2,x:-2.7,y:15.3},7,cjs.Ease.get(1)).wait(8).to({rotation:0,x:-6.6,y:47.6},7,cjs.Ease.get(1)).wait(56).to({regY:14.1,rotation:5,y:58.3},4).wait(14).to({y:76},5,cjs.Ease.get(1)).wait(7).to({x:-6.3,y:131.8},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Символ 33
	this.instance_3 = new lib.Символ33();
	this.instance_3.setTransform(350.9,-97.5,1,1,0,0,0,53.1,8.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({rotation:3.7,x:344.5,y:-3.5},8,cjs.Ease.get(-1)).to({rotation:0,x:333.2,y:12.5},7,cjs.Ease.get(1)).wait(49).to({regY:8.8,rotation:-8.5,x:331.5,y:20.3},4).wait(21).to({regY:8.7,rotation:5.2,x:337,y:52.2},5,cjs.Ease.get(1)).wait(7).to({rotation:5.2},0).to({y:109.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Символ 32
	this.instance_4 = new lib.Символ32();
	this.instance_4.setTransform(200.3,-97.5,1,1,0,0,0,90,8.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({rotation:-2.2,x:197.1,y:-14.2},8,cjs.Ease.get(-1)).to({rotation:0,x:182.6,y:12.5},7,cjs.Ease.get(1)).wait(49).to({rotation:5.2,x:181.4,y:20.6},4).wait(10).to({rotation:-7.5,x:183.8,y:40.5},5).wait(6).to({rotation:-7.5},0).to({y:67.1},5,cjs.Ease.get(1)).wait(7).to({x:185,y:122.7},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Символ 31
	this.instance_5 = new lib.Символ31();
	this.instance_5.setTransform(87.4,-97.5,1,1,0,0,0,13.7,8.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({regY:8.8,rotation:15,x:89.1,y:-8.9},8,cjs.Ease.get(-1)).to({regY:8.7,rotation:0,x:69.7,y:12.5},7,cjs.Ease.get(1)).wait(56).to({rotation:-13.9,y:19.5},4).wait(3).to({regY:8.8,rotation:14.5,x:74.2,y:52.9},4).wait(7).to({rotation:14.5},0).to({y:79.4},5,cjs.Ease.get(1)).wait(7).to({x:71,y:124.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Символ 30
	this.instance_6 = new lib.Символ30();
	this.instance_6.setTransform(10.1,-97.4,1,1,0,0,0,54.2,8.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).to({rotation:-5.7,y:-12.7},8,cjs.Ease.get(-1)).to({rotation:0,x:-7.6,y:12.6},7,cjs.Ease.get(1)).wait(56).to({rotation:7.7,x:-7.5,y:37.3},4).wait(14).to({y:55},5,cjs.Ease.get(1)).wait(7).to({y:104.8},6,cjs.Ease.get(1)).to({_off:true},1).wait(68));

	// Символ 5
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(91.7,40.1,0.964,0.964,0,0,0,47.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({rotation:-7.5,y:57.8},4,cjs.Ease.get(1)).wait(6).to({y:157.2},3,cjs.Ease.get(1)).wait(64).to({x:95.6,y:-74.1},0).to({x:88.4,y:2},5).wait(9).to({y:28.2},5,cjs.Ease.get(1)).wait(7).to({rotation:0,x:91.7,y:40.1},6,cjs.Ease.get(1)).wait(11).to({y:44},4,cjs.Ease.get(-1)).to({y:48.9},5,cjs.Ease.get(1)).to({y:45.4},4,cjs.Ease.get(-1)).to({y:40.1},6,cjs.Ease.get(1)).to({y:44},4,cjs.Ease.get(-1)).to({y:48.9},5,cjs.Ease.get(1)).to({y:44.5},5,cjs.Ease.get(-1)).to({y:40.1},5,cjs.Ease.get(1)).to({y:44},4,cjs.Ease.get(-1)).to({y:48.9},5,cjs.Ease.get(1)).to({y:44.5},5,cjs.Ease.get(-1)).to({y:40.1},5,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_8 = new lib.Символ3();
	this.instance_8.setTransform(-10.7,46.9,0.964,0.964,0,0,0,48,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({rotation:8.5,y:55.8},4,cjs.Ease.get(1)).wait(6).to({y:155.2},3,cjs.Ease.get(1)).wait(57).to({x:-25.3,y:-73.6},0).to({x:-10.7,y:-11.7},6).wait(15).to({y:9.3},5,cjs.Ease.get(1)).wait(7).to({rotation:0,y:46.9},6,cjs.Ease.get(1)).wait(7).to({y:50.9},4,cjs.Ease.get(-1)).to({y:55.8},5,cjs.Ease.get(1)).to({y:52.2},4,cjs.Ease.get(-1)).to({y:46.9},6,cjs.Ease.get(1)).to({y:50.9},4,cjs.Ease.get(-1)).to({y:55.8},5,cjs.Ease.get(1)).to({y:51.4},5,cjs.Ease.get(-1)).to({y:46.9},5,cjs.Ease.get(1)).to({y:50.9},4,cjs.Ease.get(-1)).to({y:55.8},5,cjs.Ease.get(1)).to({y:51.4},5,cjs.Ease.get(-1)).to({y:46.9},5,cjs.Ease.get(1)).to({y:42.4},4).wait(1));

	// Символ 7
	this.instance_9 = new lib.Символ7();
	this.instance_9.setTransform(183.6,37,0.964,0.964,0,0,0,37.3,57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({y:54.7},4,cjs.Ease.get(1)).wait(6).to({y:154.2},3,cjs.Ease.get(1)).wait(74).to({x:181.2,y:-69.1},0).to({y:10.6},5).wait(11).to({x:183.6,y:37},6,cjs.Ease.get(1)).wait(15).to({y:41},4,cjs.Ease.get(-1)).to({y:45.9},5,cjs.Ease.get(1)).to({y:42.3},4,cjs.Ease.get(-1)).to({y:37},6,cjs.Ease.get(1)).to({y:41},4,cjs.Ease.get(-1)).to({y:45.9},5,cjs.Ease.get(1)).to({y:41.5},5,cjs.Ease.get(-1)).to({y:37},5,cjs.Ease.get(1)).to({y:41},4,cjs.Ease.get(-1)).to({y:45.9},5,cjs.Ease.get(1)).to({y:41.5},5,cjs.Ease.get(-1)).to({y:39.9},1,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_10 = new lib.Символ4();
	this.instance_10.setTransform(371.1,47.8,0.964,0.964,0,0,0,38.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({rotation:-32.5,y:65.6},4,cjs.Ease.get(1)).wait(6).to({y:165},3,cjs.Ease.get(1)).wait(83).to({y:-65.1},0).to({rotation:4,x:372,y:43.1},7).to({rotation:0,x:371.1,y:47.8},6,cjs.Ease.get(1)).wait(9).to({y:51.8},4,cjs.Ease.get(-1)).to({y:56.7},5,cjs.Ease.get(1)).to({y:53.1},4,cjs.Ease.get(-1)).to({y:47.8},6,cjs.Ease.get(1)).to({y:51.8},4,cjs.Ease.get(-1)).to({y:56.7},5,cjs.Ease.get(1)).to({y:52.3},5,cjs.Ease.get(-1)).to({y:47.8},5,cjs.Ease.get(1)).to({y:51.8},4,cjs.Ease.get(-1)).to({y:56.7},5,cjs.Ease.get(1)).to({y:52.3},5,cjs.Ease.get(-1)).to({y:47.8},5,cjs.Ease.get(1)).to({y:52.3},2).wait(1));

	// Символ 2
	this.instance_11 = new lib.Символ2();
	this.instance_11.setTransform(276.7,45.1,0.964,0.964,0,0,0,40.1,57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({rotation:9,y:54},4,cjs.Ease.get(1)).wait(6).to({y:153.4},3,cjs.Ease.get(1)).wait(46).to({y:-75.4},0).to({y:-19.6},8).wait(24).to({regY:57.4,scaleX:0.96,scaleY:0.96,rotation:8.8,x:276.8,y:15.7},5,cjs.Ease.get(1)).wait(7).to({regY:57.5,scaleX:0.96,scaleY:0.96,rotation:0,x:276.7,y:45.1},6,cjs.Ease.get(1)).wait(6).to({y:49.1},4,cjs.Ease.get(-1)).to({y:54},5,cjs.Ease.get(1)).to({y:50.4},4,cjs.Ease.get(-1)).to({y:45.1},6,cjs.Ease.get(1)).to({y:49.1},4,cjs.Ease.get(-1)).to({y:54},5,cjs.Ease.get(1)).to({y:49.6},5,cjs.Ease.get(-1)).to({y:45.1},5,cjs.Ease.get(1)).to({y:49.1},4,cjs.Ease.get(-1)).to({y:54},5,cjs.Ease.get(1)).to({y:49.6},5,cjs.Ease.get(-1)).to({y:45.1},5,cjs.Ease.get(1)).to({y:42.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-74.7,469.9,177.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(31.2,230.8,0.809,0.809,0,0,0,38.5,57.5);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(36.3,137.9,0.809,0.809,0,0,0,40.1,57.5);

	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(31.5,46.6,0.809,0.809,0,0,0,38.5,57.6);

	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(31.2,514.8,0.809,0.809,0,0,0,38.5,57.5);

	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(36.3,421.9,0.809,0.809,0,0,0,40.1,57.5);

	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(31.5,330.6,0.809,0.809,0,0,0,38.5,57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.7,561.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(34.5,58.3,0.809,0.809,0,0,0,38.5,57.6);

	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(38.4,239.7,0.809,0.809,0,0,0,47.5,56.5);

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(38.8,147.5,0.809,0.809,0,0,0,48,57.5);

	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(38.4,523.7,0.809,0.809,0,0,0,47.5,56.5);

	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(38.8,431.5,0.809,0.809,0,0,0,48,57.5);

	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(38.7,330.6,0.809,0.809,0,0,0,37.3,57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.7,78.5,559.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(33.5,226.8,0.809,0.809,0,0,0,37.4,57.5);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(32.5,133.9,0.809,0.809,0,0,0,38.5,57.6);

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(38.8,46.5,0.809,0.809,0,0,0,48,57.5);

	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(33.5,510.8,0.809,0.809,0,0,0,37.4,57.5);

	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(32.5,417.9,0.809,0.809,0,0,0,38.5,57.6);

	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(38.8,330.5,0.809,0.809,0,0,0,48,57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.7,557.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(39.6,230.8,0.809,0.809,0,0,0,48,57.5);

	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(38.4,134.6,0.809,0.809,0,0,0,47.5,56.5);

	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(35,46.5,0.809,0.809,0,0,0,40.1,57.5);

	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(39.6,514.8,0.809,0.809,0,0,0,48,57.5);

	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(38.4,418.6,0.809,0.809,0,0,0,47.5,56.5);

	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(35,330.5,0.809,0.809,0,0,0,40.1,57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.5,561.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(38,237.4,0.809,0.809,0,0,0,40.1,57.5);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(35.8,134.7,0.809,0.809,0,0,0,37.4,57.5);

	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(38.4,45.7,0.809,0.809,0,0,0,47.4,56.5);

	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(38,521.4,0.809,0.809,0,0,0,40.1,57.5);

	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(35.8,418.7,0.809,0.809,0,0,0,37.4,57.5);

	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(38.4,329.7,0.809,0.809,0,0,0,47.4,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.5,567.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(40.2,280.7,1,1,0,0,0,34.4,280.7);

	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(39.2,847.2,1,1,0,0,0,39.2,283.9);

	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(39.4,1419,1,1,0,0,0,34.4,280.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.5,1699.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(40,285.5,1,1,0,0,0,39.2,285.5);

	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(39.2,851.9,1,1,0,0,0,39.2,285.5);

	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(39.2,1423.8,1,1,0,0,0,39.2,285.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.7,79.2,1697.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(40,278.6,1,1,0,0,0,38.8,278.6);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(39.2,850,1,1,0,0,0,39.2,280.7);

	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(39.3,1416.9,1,1,0,0,0,38.8,278.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.9,1695.6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(40,280.7,1,1,0,0,0,39.2,280.7);

	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(39.6,849,1,1,0,0,0,38.8,278.6);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(39.2,1419,1,1,0,0,0,39.2,280.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.2,1699.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(40,283.9,1,1,0,0,0,39.2,283.9);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(39.2,856.9,1,1,0,0,0,34.4,280.7);

	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(39.2,1422.2,1,1,0,0,0,39.2,283.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.2,1706.2);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.setTransform(398,-600.8,1,1,0,0,0,39.2,849.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:-626.7},4,cjs.Ease.get(-1)).to({y:-174.2},15).to({y:-187.1},5,cjs.Ease.get(1)).wait(20).to({y:-200.1},5,cjs.Ease.get(-1)).to({y:550},15).to({y:-587.4},1,cjs.Ease.get(1)).to({y:-600.8},4,cjs.Ease.get(1)).wait(3));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(314.2,-601.7,1,1,0,0,0,39.6,854.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({y:-627.6},4,cjs.Ease.get(-1)).to({y:-175},15).to({y:-188},5,cjs.Ease.get(1)).wait(20).to({y:-200.9},5,cjs.Ease.get(-1)).to({y:544.2},15).to({y:-588.2},1,cjs.Ease.get(1)).to({y:-601.7},4,cjs.Ease.get(1)).wait(4));

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(234.6,-598.8,1,1,0,0,0,39.4,847.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({y:-624.7},4,cjs.Ease.get(-1)).to({y:-172.1},15).to({y:-185.1},5,cjs.Ease.get(1)).wait(20).to({y:-198},5,cjs.Ease.get(-1)).to({x:235.2,y:547.8},15).to({x:234.6,y:-585.3},1,cjs.Ease.get(1)).to({y:-598.8},3,cjs.Ease.get(1)).wait(5));

	// Символ 16
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(145.9,-600.8,1,1,0,0,0,39.6,849.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:-626.7},4,cjs.Ease.get(-1)).to({y:-174.2},15).to({y:-187.1},5,cjs.Ease.get(1)).wait(20).to({y:-200.1},5,cjs.Ease.get(-1)).to({y:548.8},15).to({y:-587.4},1,cjs.Ease.get(1)).to({y:-600.8},4,cjs.Ease.get(1)).wait(5));

	// Символ 15
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(57.3,-600,1,1,0,0,0,39.6,853.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-625.9},4,cjs.Ease.get(-1)).to({y:-173.4},15).to({y:-186.3},5,cjs.Ease.get(1)).wait(20).to({y:-199.3},5,cjs.Ease.get(-1)).to({y:551.4},15).to({y:-586.6},1,cjs.Ease.get(1)).to({y:-600},4,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.7,-1453.1,419.5,1706.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(183.9,1334.6,0.853,0.853,0,0,0,233.1,110.5);

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(547,1334.6,0.853,0.853,0,0,0,233.1,110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,721.2,1456.2);


// stage content:



(lib.spacwars72890_kod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ25();
	this.instance.setTransform(679,45.7,1,1,0,0,0,51.4,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.jojo();
	this.instance_1.setTransform(21.7,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(452.6,75,0.903,0.903,0,0,0,228,63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(360.6,-479.8,1,1,0,0,0,360.6,728.1);
	this.instance_3.alpha = 0.102;
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ24();
	this.instance_4.setTransform(8.9,206.3,0.957,0.957,0,0,0,9.3,301.9);

	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(719.2,206.3,0.957,0.957,0,0,0,9.3,301.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 3
	this.instance_6 = new lib.Символ20();
	this.instance_6.setTransform(377.4,120.2,1.132,0.864,0,0,0,333.3,249.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,-1162.9,754.8,1544.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
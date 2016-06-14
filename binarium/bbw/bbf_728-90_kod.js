(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bbg.png?1465911866018", id:"bbg"},
		{src:"images/bigbadwolfwolf_03.png?1465911866018", id:"bigbadwolfwolf_03"},
		{src:"images/bigbadwolfwolf_05.png?1465911866018", id:"bigbadwolfwolf_05"},
		{src:"images/bigbadwolfwolf_07.png?1465911866018", id:"bigbadwolfwolf_07"},
		{src:"images/bigbadwolfwolf_10.png?1465911866018", id:"bigbadwolfwolf_10"},
		{src:"images/fon2.jpg?1465911866018", id:"fon2"},
		{src:"images/one.png?1465911866018", id:"one"},
		{src:"images/p1.png?1465911866018", id:"p1"},
		{src:"images/p2.png?1465911866018", id:"p2"},
		{src:"images/p3.png?1465911866018", id:"p3"},
		{src:"images/three.png?1465911866018", id:"three"},
		{src:"images/two.png?1465911866018", id:"two"}
	]
};



// symbols:



(lib.bbg = function() {
	this.initialize(img.bbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,87);


(lib.bigbadwolfwolf_03 = function() {
	this.initialize(img.bigbadwolfwolf_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,169);


(lib.bigbadwolfwolf_05 = function() {
	this.initialize(img.bigbadwolfwolf_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,98);


(lib.bigbadwolfwolf_07 = function() {
	this.initialize(img.bigbadwolfwolf_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,90);


(lib.bigbadwolfwolf_10 = function() {
	this.initialize(img.bigbadwolfwolf_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,116);


(lib.fon2 = function() {
	this.initialize(img.fon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,980,152);


(lib.one = function() {
	this.initialize(img.one);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,215);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,143);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,111);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,132);


(lib.three = function() {
	this.initialize(img.three);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,216);


(lib.two = function() {
	this.initialize(img.two);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,216);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bigbadwolfwolf_03, null, new cjs.Matrix2D(0.575,0.045,-0.045,0.575,-50.6,-45.9)).s().p("AgVDBQgLgMgDgNQgShIgSg9IgCgQQgJhDAQg1IgBgDQgGhDAThAICAgFIAEAHIglHaQgkgRgagfg");
	this.shape.setTransform(6.2,25.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,1.1,15.6,48.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bbg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,87);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,143);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,111);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.p3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,132);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-412,-87.5,824,175,8.3);
	this.shape.setTransform(412,87.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,824,175);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon2();
	this.instance.setTransform(0,35,0.757,0.757);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,35,741.5,115);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.two();
	this.instance.setTransform(-37.5,-324);

	this.instance_1 = new lib.two();
	this.instance_1.setTransform(-37.5,-108);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.two, null, new cjs.Matrix2D(1,0,0,1,-37.5,-108)).s().p("Al2Q3MAAAghuILtAAMAAAAhug");
	this.shape.setTransform(0,-432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-540,75,648);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.one();
	this.instance.setTransform(-37,-322.5);

	this.instance_1 = new lib.one();
	this.instance_1.setTransform(-37,-107.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.one, null, new cjs.Matrix2D(1,0,0,1,-37,-34.8)).s().p("AlwFcIAAq3ILhAAIAAK3g");
	this.shape.setTransform(0,-501.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.one, null, new cjs.Matrix2D(1,0,0,1,-37,-179.7)).s().p("AlwFgIAAq/ILhAAIAAK/g");
	this.shape_1.setTransform(0,-431.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.one, null, new cjs.Matrix2D(1,0,0,1,-37,-106.9)).s().p("AlwF0IAArnILhAAIAALng");
	this.shape_2.setTransform(0,-358.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-536.1,74,643.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.three();
	this.instance.setTransform(-37,-539.1);

	this.instance_1 = new lib.three();
	this.instance_1.setTransform(-37.6,-323.6);

	this.instance_2 = new lib.three();
	this.instance_2.setTransform(-37,-108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.6,-539.1,74.6,647.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIMBSIAAgcIg7AAIAAAcIgcAAIAAgvIAIAAQASgcAAgmIAAgPIBQAAIAABRIAJAAIAAAvgAHsgWQAAANgEAPQgGAVgEAIIAiAAIAAg+IgUAAgAiPA4IgLgCQgHAAgFgDIgIgGQgFgDgCgHQgCgGAAgIIAAggQAAgIACgFQACgGACgEIAIgHIAIgEIALgCIAWgBQALAAAUAEIAAAUQgagFgHAAQgLAAgFADQgGAEAAAHIAAAkQAAAIAGAEQAGAEAMAAQALAAAVgFIAAAUQgSAEgQAAgAkeAwQgOgJAAgQIAAgjQAAgTANgJQAGgEAKgCQAJgCAMAAQAYAAAMAIQAFAEADAHQADAHAAAKIAAAXIhCAAIAAAJQAAAFACADQABADADACQADACAGABIAOABQAPAAATgFIAAAUQgaAEgOAAQgbAAgNgIgAkJgaQgEACAAAFIAAAPIAlAAIAAgPQAAgFgEgCQgEgDgKAAQgLAAgEADgAFmA3IgOgCQgHgCgFgEQgEgEgEgHQgDgHAAgKIAAgcQAAgLADgHQAEgIAEgEQAFgDAIgDIANgDIAeAAIANADQAIADAEADQAFAEADAIQAEAHAAALIAAAcQAAAKgEAHQgDAHgEAEQgFAEgHACIgOACgAFkgaQgEAEAAAIIAAAkQAAAIAEAEQAEADANAAQANAAAEgDQAEgEAAgIIAAgkQAAgIgEgEQgEgDgNAAQgNAAgEADgAEYA2IgUgdQgGgJgEgCQgDgCgIAAIAAAqIgfAAIAAhkIAfAAIAAApIAGgBQACgBACgDIAKgRQAJgOAEgCQAFgDATAAIAKAAIAAATIgDAAQgIAAgEACQgDABgEAFIgFAIQgGAIgFADQAKACAKAOIAbAmgABpA2IAAhIIgtBIIgjAAIAAhkIAdAAIAABGIAshGIAjAAIAABkgAg2A2IAAhRIggAAIAAgTIBcAAIAAATIgeAAIAABRgAmjA2IAAhkIA2AAQAOAAAIACQAIABAEAEQAEAEABAEIABAKIAAADQAAAJgFAEQgEADgKACIAAAAQALABAHAGQAEACABAEQACADAAAFIAAAGQAAAHgDAFQgCAFgFADQgKAHgYAAgAmEAjIAPAAQANAAAFgDQAGgCAAgGIAAgEQAAgGgFgCQgFgCgNAAIgQAAgAmEgGIAOAAQANAAADgDQAEgCAAgGIAAgBIgBgFQgBgBgFgCIgOgBIgNAAgAonA2IAAiHIA4AAQAOAAAKACQAKACAFADQAFADADAGQACAGAAAIIAAAQQAAAGgEAFQgFAFgGACIAAABQAIABAGAGQAHAGAAAFIAAAVQAAARgNAHQgHADgKACQgKACgOAAgAoGAeIAYAAQALAAAGgCQAFgDAAgGIAAgLQAAgIgEgBQgEgDgKAAIgcAAgAoGgZIAXAAQALAAADgDQAEgDAAgIIAAgGQAAgHgDgDQgEgCgMAAIgWAAg");
	this.shape.setTransform(55.2,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,16.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("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");
	this.shape.setTransform(63.4,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("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");
	this.shape_1.setTransform(63.4,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-16,272.8,48);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(132.8,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("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");
	this.shape_1.setTransform(132.8,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265.6,19.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ABmA4QgIgBgJgDQgJgDgFgHQgDgDgBgFQgBgEAAgFIAAgvQAAgIAEgHQADgGAGgEQAFgDAIgCQAIgDAGAAIAMgBIAOABQAGAAAHADQAIACAGADQAFAEAEAGQAEAGAAAJIAAAvQAAAJgFAHQgFAHgJADQgIADgJACIgSABIgQgBgABjgiQgDACgCADQgBADAAAEIAAAvQAAAFACACQACADAEABIAIACIAUAAIAHgCQAFgBACgDQACgCAAgFIAAgvQAAgEgCgDQgBgDgEgCIgIgCIgLAAQgNAAgHACgAElA3IAAhtIAvAAQAdgBAMAIQAGADADAIQAEAGAAAJIAAAsQAAAJgDAHQgEAGgFAEQgGADgKACQgLACgOgBgAFAAkIATAAQAQAAAGgCQADgBABgDQABgDAAgEIAAgsQAAgIgGgDQgHgDgNAAIgUAAgADBA3IAAhtIAbAAIAABaIA3AAIAAATgAgjA3IAAhtIBVAAIAAATIg6AAIAAAcIA1AAIAAAQIg1AAIAAAugAhRA3IgdgsIgNAAIAAAsIgbAAIAAhtIAzAAQALAAAIACQAIABAFACQAKAFAAANIAAAUQAAALgIACQgDADgEACQgFACgGABIAhAtgAh7gEIAXAAQAKAAADgDQAEgCAAgHIAAgJQAAgFgEgDQgEgCgJAAIgXAAgAjrA3IgphtIAbAAIAeBXIABAAIAehXIAbAAIgqBtgAk7A3Ig2hLIAABLIgYAAIAAhtIAcAAIA2BKIAAhKIAXAAIAABtg");
	this.shape.setTransform(147.5,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AG8BHIAAgdIhAAAIAAAdIgYAAIAAgwIAKAAQAIgMADgOIACgTIACguIBMAAIAABbIALAAIAAAwgAGWgoQAAAVgDAQQgCAPgHALIAkAAIAAhIIgYAAgAERAqQgJgBgIgDQgJgDgFgHIgEgIIgBgJIAAgvQAAgIAEgHQADgGAGgEQAFgDAIgCQAIgDAGAAIAMgBIAOABQAFAAAIADQAIACAGADQAFAEAEAGQAEAGgBAJIAAAvQAAAJgEAHQgFAHgJADQgIAEgJABIgSABIgQgBgAEOgvQgDABgCADQgBADAAAEIAAAvQAAAFACACQACADAEACIAIABIAUAAIAHgBQAFgCABgDQADgCAAgFIAAgvQAAgEgCgDQgCgDgCgBIgJgDIgMAAQgNAAgGADgAAhAqQgIgBgJgDQgJgDgFgHIgCgIIgBgJIAAgvQAAgIABgHQAEgGAGgEQAGgDAHgCQAIgDAGAAIANgBIAMABQAHAAAIADQAHACAFADQAHAEADAGQAEAGAAAJIAAAvQAAAJgFAHQgFAHgIADQgJAEgIABIgSABIgRgBgAAegvQgDABgCADQgBADAAAEIAAAvQgBAFADACQACADAEACIAJABIATAAIAIgBQADgCACgDQADgCAAgFIAAgvQAAgEgBgDQgCgDgEgBIgIgDIgLAAQgNAAgHADgAjzAqQgIgBgJgDQgIgDgGgHIgEgIIgBgJIAAgvQAAgIADgHQAFgGAFgEQAFgDAIgCQAIgDAGAAIANgBIAMABQAHAAAIADQAHACAFADQAHAEADAGQAEAGAAAJIAAAvQAAAJgFAHQgFAHgIADQgJAEgIABIgSABIgRgBgAj2gvQgDABgCADQgBADgBAEIAAAvQABAFACACQACADAEACIAJABIATAAIAIgBQADgCADgDQACgCAAgFIAAgvQAAgEgBgDQgCgDgEgBIgIgDIgLAAQgNAAgHADgAHjAqIAAgYIAbAAIAAAYgADFAqIgVghQgHgJgEgCQgGgDgIAAIAAAvIgbAAIAAhuIAbAAIAAAtQAGAAADgCQADgBACgEIAMgTQAHgMAGgDQAGgEAOAAIAMAAIAAATIgHAAQgIAAgDABQgDACgDAGIgHALIgGAIQgDACgEACQAFABAGAGQAHAHAIAIIAYAlgAgvAqIAAhRIgBAAIgbBRIgXAAIgchRIgBAAIAABRIgZAAIAAhuIAmAAIAcBOIAbhOIAlAAIAABugAmBAqIAAhuIAtAAQAYAAAKAFQAGADACAFQACAFAAAIIAAAVQAAAIgCAGQgDAFgGACQgFACgJACIgWABIgPAAIAAAlgAlmgLIARAAQALAAAFgDQADgCAAgGIAAgSQAAgFgDgCQgFgCgLAAIgRAAgAmzAqIAAhbIgvAAIAABbIgbAAIAAhuIBlAAIAABugAHjgQIAAgXIAbAAIAAAXg");
	this.shape_1.setTransform(51.1,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.9,14.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bigbadwolfwolf_07();
	this.instance.setTransform(5,5.2,0.511,0.582);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.2,27.6,52.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.bigbadwolfwolf_03, null, new cjs.Matrix2D(0.577,0,-0.011,0.577,-29.1,-48.8)).s().p("Ak0HnIASvNIJXAAIgECzIgEgHIiCAPQgPBBALBDIAAACQgMA3AMBFIAEAOQAWA7AWBGQADAMAMALQAeAeAkANIgFE/g");
	this.shape.setTransform(33.3,52.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,3.5,61.9,97.6);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bigbadwolfwolf_05();
	this.instance.setTransform(2.4,14.4,0.516,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,14.4,52.1,57.6);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bigbadwolfwolf_10();
	this.instance.setTransform(15.5,8.5,0.336,0.382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.5,8.5,12.8,44.4);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(51.1,57.5,0.804,0.804,0,0,0,63.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.2,115);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(45.1,44.7,0.804,0.804,0,0,0,56,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.1,89.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(48.7,53.1,0.804,0.804,0,0,0,60.5,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.3,106.2);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(37.6,1828.2);

	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(37.6,1184.8);

	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(37.6,539.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.6,1936.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(37,1822.9);

	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(37,1179.5);

	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(37,536.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,1930.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(37.5,1829.1);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(37.5,1185.7);

	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(37.5,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,1937.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(17.1,23.8,1,1,11.4,0,0,7,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,-0.6,24.9,50.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(367.1,160,1,1,0,0,0,367.1,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:164.9},14,cjs.Ease.get(-1)).to({y:170},15,cjs.Ease.get(1)).to({y:165},15,cjs.Ease.get(-1)).to({y:160},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,35,741.5,115);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ22();
	this.instance.setTransform(185.2,-255.9,1,1,0,0,0,37.5,968.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({y:-278.8},4,cjs.Ease.get(-1)).to({y:107.6},15,cjs.Ease.get(1)).wait(25).to({y:84.7},5,cjs.Ease.get(-1)).to({y:537},15,cjs.Ease.get(1)).wait(20).to({y:514.1},5,cjs.Ease.get(-1)).to({y:1465.8},20,cjs.Ease.get(1)).wait(1).to({y:-255.9},0).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(111.7,-256.9,1,1,0,0,0,37,965.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:-279.8},4,cjs.Ease.get(-1)).to({y:181.8},15,cjs.Ease.get(1)).wait(25).to({y:186.6},0).to({y:163.7},5,cjs.Ease.get(-1)).to({y:536},15,cjs.Ease.get(1)).wait(20).to({y:513.1},5,cjs.Ease.get(-1)).to({y:1395.4},20,cjs.Ease.get(1)).wait(1).to({y:-255.8},0).wait(5));

	// Символ 12
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(37.3,-256.4,1,1,0,0,0,37.3,968.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-279.3},4,cjs.Ease.get(-1)).to({y:107.1},15,cjs.Ease.get(1)).wait(25).to({y:84.2},5,cjs.Ease.get(-1)).to({y:536.5},15,cjs.Ease.get(1)).wait(20).to({y:513.6},5,cjs.Ease.get(-1)).to({y:1465.3},20,cjs.Ease.get(1)).wait(1).to({y:-256.4},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1224.5,222.7,1937.1);


(lib.Символ10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(79.3,18.2,0.843,0.843,0,0,0,55.2,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF6600","#FF8920"],[0,1],-78.9,0,79,0).s().p("ArOC/QhGAAAAhGIAAjxQAAhGBGAAIWdAAQBGAAAABGIAADxQAABGhGAAg");
	this.shape_1.setTransform(79,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#678F1B","#8DC11D"],[0,1],-78.9,0,79,0).s().p("ArOC/QhGAAAAhGIAAjxQAAhGBGAAIWdAAQBGAAAABGIAADxQAABGhGAAg");
	this.shape_2.setTransform(79,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,38.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(132.6,7,1,1,0,0,0,132.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.539},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-16,272.8,48);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(13.8,-4.3,1,1,-97.3,0,0,5.2,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.8,regY:31.4,rotation:-60.9,x:31,y:-5.2},0).wait(1).to({rotation:-32.6,x:28.6,y:7.6},0).wait(1).to({rotation:-12.4,x:23.9,y:16},0).wait(1).to({rotation:-0.3,x:20,y:20.4},0).wait(1).to({regX:5.3,regY:16.1,rotation:3.7,x:6.1,y:5.6},0).to({regX:5.2,rotation:-105,x:13.8,y:-4},14).to({scaleX:1,scaleY:1,rotation:-98,x:13.9,y:-4.3},9).to({scaleX:1,scaleY:1,rotation:-97.3,x:13.8},11).wait(1).to({regX:18.8,regY:31.4,rotation:-60.9,x:31,y:-5.2},0).wait(1).to({rotation:-32.6,x:28.6,y:7.6},0).wait(1).to({rotation:-12.4,x:23.9,y:16},0).wait(1).to({rotation:-0.3,x:20,y:20.4},0).wait(1).to({regX:5.3,regY:16.1,rotation:3.7,x:6.1,y:5.6},0).to({regX:5.2,rotation:-105,x:13.8,y:-4},15).to({scaleX:1,scaleY:1,rotation:-98,x:13.9,y:-4.3},9).to({scaleX:1,scaleY:1,rotation:-97.3,x:13.8},11).wait(1).to({regX:18.8,regY:31.4,rotation:-60.9,x:31,y:-5.2},0).wait(1).to({rotation:-32.6,x:28.6,y:7.6},0).wait(1).to({rotation:-12.4,x:23.9,y:16},0).wait(1).to({rotation:-0.3,x:20,y:20.4},0).wait(1).to({regX:5.3,regY:16.1,rotation:3.7,x:6.1,y:5.6},0).to({regX:5.2,rotation:9.7,x:2.3,y:6},15).wait(140).to({rotation:-97.3,x:13.8,y:-4.3},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(8,-20.7,1,0.823,0,-7.1,-8.3,11.1,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:16.2,regY:24.6,skewX:-1.7,skewY:-2.9,x:13.4,y:-17.8},0).wait(1).to({skewX:2.5,skewY:1.3,x:13.6,y:-15.3},0).wait(1).to({skewX:5.5,skewY:4.3,x:13.7,y:-13.4},0).wait(1).to({skewX:7.3,skewY:6.1,y:-12.2},0).wait(1).to({regX:11.2,regY:24.4,skewX:7.9,skewY:6.7,x:8.8,y:-12.7},0).to({regX:11.1,skewX:-7.1,skewY:-8.3,x:8,y:-19.2},14).to({skewX:-7,y:-20.5},9).to({skewX:-7.1,y:-20.7},11).wait(1).to({regX:16.2,regY:24.6,skewX:-1.7,skewY:-2.9,x:13.4,y:-17.8},0).wait(1).to({skewX:2.5,skewY:1.3,x:13.6,y:-15.3},0).wait(1).to({skewX:5.5,skewY:4.3,x:13.7,y:-13.4},0).wait(1).to({skewX:7.3,skewY:6.1,y:-12.2},0).wait(1).to({regX:11.2,regY:24.4,skewX:7.9,skewY:6.7,x:8.8,y:-12.7},0).to({regX:11.1,skewX:-7.1,skewY:-8.3,x:8,y:-19.2},15).to({skewX:-7,y:-20.5},9).to({skewX:-7.1,y:-20.7},11).wait(1).to({regX:16.2,regY:24.6,skewX:-1.7,skewY:-2.9,x:13.4,y:-17.8},0).wait(1).to({skewX:2.5,skewY:1.3,x:13.6,y:-15.3},0).wait(1).to({skewX:5.5,skewY:4.3,x:13.7,y:-13.4},0).wait(1).to({skewX:7.3,skewY:6.1,y:-12.2},0).wait(1).to({regX:11.2,regY:24.4,skewX:7.9,skewY:6.7,x:8.8,y:-12.7},0).to({regX:11.1,regY:24.3,skewX:13.9,skewY:12.7,x:6.9,y:-11.9},15).wait(140).to({regY:24.4,skewX:-7.1,skewY:-8.3,x:8,y:-20.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-41.5,55.4,40.5);


(lib.Символ3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bigbadwolf-wolf_21.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(73,228.4,1,1,0,0,0,28.4,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// bigbadwolf-wolf_18.png
	this.instance_2 = new lib.Символ5_1();
	this.instance_2.setTransform(60.5,212.4,1,1.001,0,7,4,18.6,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:18.5,scaleY:1,skewX:7.6,skewY:3.8,x:60.9,y:212.5},9,cjs.Ease.get(-1)).to({regY:47.7,scaleY:1,skewX:8.5,skewY:4,x:61.6,y:212.6},10,cjs.Ease.get(1)).to({regY:47.6,scaleY:1,skewX:7.8,skewY:3.8,x:61,y:212.5},12,cjs.Ease.get(-1)).to({regX:18.6,scaleY:1,skewX:7,skewY:4,x:60.5,y:212.4},13,cjs.Ease.get(1)).wait(1));

	// bigbadwolf-wolf_12.png
	this.instance_3 = new lib.Символ6_1();
	this.instance_3.setTransform(59.8,152.2,1,1.001,0,-11.9,-15,18.8,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:18.7,regY:45.2,scaleX:1,scaleY:1,skewX:-12.5,skewY:-14.8,x:59.3,y:152.4},9,cjs.Ease.get(-1)).to({regX:18.8,regY:45.1,scaleX:1,skewX:-13.2,skewY:-15,x:58.7},10,cjs.Ease.get(1)).to({scaleX:1,skewX:-12.5,skewY:-14.8,x:59.3},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:-11.9,skewY:-15,x:59.8,y:152.2},13,cjs.Ease.get(1)).wait(1));

	// bigbadwolf-wolf_10.png
	this.instance_4 = new lib.Символ7_1();
	this.instance_4.setTransform(28.2,141.2,1,1,0,0,0,20.2,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.96,scaleY:0.96,rotation:-7,x:32,y:141.6},9,cjs.Ease.get(-1)).to({regX:20.3,scaleX:0.92,scaleY:0.92,rotation:-15,x:36.3,y:142.2},10,cjs.Ease.get(1)).to({regX:20.4,scaleX:0.96,scaleY:0.96,rotation:-7.8,x:32.5,y:141.6},12,cjs.Ease.get(-1)).to({regX:20.2,scaleX:1,scaleY:1,rotation:0,x:28.2,y:141.2},13,cjs.Ease.get(1)).wait(1));

	// bigbadwolf-wolf_05.png
	this.instance_5 = new lib.Символ9_1();
	this.instance_5.setTransform(74.9,53.9,1,1,7,0,0,35.9,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:45.8,scaleX:1,scaleY:1,rotation:9.5,x:76.3,y:55.9},9,cjs.Ease.get(-1)).to({regX:35.8,regY:45.9,scaleX:1,scaleY:1,rotation:12.7,x:77.7,y:58.3},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:9.8,x:76.4,y:56.2},12,cjs.Ease.get(-1)).to({regX:35.9,scaleX:1,scaleY:1,rotation:7,x:74.9,y:53.9},13,cjs.Ease.get(1)).wait(1));

	// bigbadwolf-wolf_03.png
	this.instance_6 = new lib.Символ10();
	this.instance_6.setTransform(48.5,101.4,1,1,7.7,0,0,29.8,54.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0,skewX:7,skewY:7.6,x:48.7,y:102.4},9,cjs.Ease.get(-1)).to({skewX:6.5,skewY:7.7,x:48.8,y:103.5},10,cjs.Ease.get(1)).to({skewX:7,skewY:7.6,x:48.7,y:102.5},12,cjs.Ease.get(-1)).to({rotation:7.7,skewX:0,skewY:0,x:48.5,y:101.4},13,cjs.Ease.get(1)).wait(1));

	// bigbadwolf-wolf_07.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(77.3,140.5,1,1,0,0,0,18.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.1,18.6,98.9,137.3);


(lib.копияСимвол10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxdQ9MAAAgh5MAi6AAAMAAAAh5g");
	mask.setTransform(-11,23.4);

	// Слой 4
	this.instance = new lib.Символ16();
	this.instance.setTransform(-10.6,-148.6,1,1,0,0,0,111.3,396.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.9,-85.1,222.7,217.2);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10_1();
	this.instance.setTransform(79,19.2,1,1,0,0,0,79,19.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,38.4);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(133,-200.9,1,1,0,0,0,132.8,9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:59.9,y:-200.5,alpha:1},9,cjs.Ease.get(1)).wait(61).to({x:60.5,y:-165.9,alpha:0},9).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(132.6,-178,1,1,0,0,0,132.6,7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:-163,alpha:1},9,cjs.Ease.get(1)).wait(51).to({y:-143,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-209.9,265.6,19.8);


(lib.Символ20 = function(mode,startPosition,loop) {
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

	// Символ 32
	this.instance = new lib.Символ32();
	this.instance.setTransform(-438.9,-75.5,1,1,0,0,0,90,43.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({y:30.5},8,cjs.Ease.get(1)).to({y:-75.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 31
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(-9.4,171,1,1,0,0,0,51.1,57.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:-10.2,y:42},8,cjs.Ease.get(1)).wait(3).to({x:-9.4,y:171},15,cjs.Ease.get(1)).wait(1));

	// Символ 30
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(48,179.4,1,1,0,0,0,45,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:47.3,y:50.4},9,cjs.Ease.get(1)).wait(5).to({x:48,y:179.4},15,cjs.Ease.get(1)).wait(1));

	// Символ 29
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(109.3,163,1,1,0,0,0,48.6,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:108.5,y:34},14,cjs.Ease.get(1)).to({x:109.3,y:163},15,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(79.9,6,0.843,0.843,0,0,0,93.4,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-195.1},14,cjs.Ease.get(1)).to({x:79.9},15,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(79,40.9,1,1,0,0,0,79,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-196},14,cjs.Ease.get(1)).to({x:79},15,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_6 = new lib.Символ25();
	this.instance_6.setTransform(-165,8,1,1,0,0,0,411.9,87.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.781},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-576.9,-79.5,824,303.6);


// stage content:



(lib.bbf_72890_kod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pig.gotoAndPlay(2);
		
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pig.gotoAndPlay(16);
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.pig = new lib.Символ20();
	this.pig.setTransform(630.3,45.4,1,1,0,0,0,79.3,30);

	this.instance = new lib.Символ4_1();
	this.instance.setTransform(188.7,20.3,0.827,0.827,0,0,0,133,-201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.pig}]}).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(381.9,37.5,1,1,0,0,0,411.9,87.5);
	this.instance_1.alpha = 0.672;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.копияСимвол10();
	this.instance_2.setTransform(443.4,-12,0.939,0.939);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ3_1();
	this.instance_3.setTransform(281.6,130.7,1.328,1.328,-8.2,0,0,48.1,129.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(364,102,1,1,0,0,0,367.1,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(338.1,-1628.3,824,1912.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
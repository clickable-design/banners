(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/girl_03.png?1467441574630", id:"girl_03"},
		{src:"images/girl_05.png?1467441574630", id:"girl_05"},
		{src:"images/girl_08.png?1467441574630", id:"girl_08"},
		{src:"images/girl_11.png?1467441574630", id:"girl_11"},
		{src:"images/girl_15.png?1467441574630", id:"girl_15"},
		{src:"images/girl_18.png?1467441574630", id:"girl_18"},
		{src:"images/girl_23.png?1467441574630", id:"girl_23"},
		{src:"images/girl_27.png?1467441574630", id:"girl_27"},
		{src:"images/monster_.jpg?1467441574630", id:"monster_"},
		{src:"images/mouse.png?1467441574630", id:"mouse"},
		{src:"images/topor12.png?1467441574630", id:"topor12"}
	]
};



// symbols:



(lib.girl_03 = function() {
	this.initialize(img.girl_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,70);


(lib.girl_05 = function() {
	this.initialize(img.girl_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,105);


(lib.girl_08 = function() {
	this.initialize(img.girl_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,136);


(lib.girl_11 = function() {
	this.initialize(img.girl_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,136);


(lib.girl_15 = function() {
	this.initialize(img.girl_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,97);


(lib.girl_18 = function() {
	this.initialize(img.girl_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,191);


(lib.girl_23 = function() {
	this.initialize(img.girl_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,41);


(lib.girl_27 = function() {
	this.initialize(img.girl_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,34);


(lib.monster_ = function() {
	this.initialize(img.monster_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,519);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.topor12 = function() {
	this.initialize(img.topor12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,177);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#150000","#210000"],[0.157,1],0,0,0,0,0,170.1).s().p("A4lqDMAxLABgIhQPfMgqyADIg");
	this.shape.setTransform(157.4,64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314.8,129);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ACtG6QgGgDgOgIQgMgHgIgDQgLgDgOABIgbADIhhASQgXADgJgFQgJgFgEgOQgCgIAAgRQgBhNgihwQgTg9gahBQgVg0gUglQgIgPgKgRQgMgTgCgLQgCgNAJgYIAihbQAVg3AKgVIAOgfQAIgTAEgNIAEgVIABgBIAEgCIABgMIAAgMIAEgVQAAgNACgFQADgKAIgFIADgCQAFgCAFAAIA2BZIAWArQAfA/ASApQAVAxAbBLIAJAbIABACIADAJQAiCPAfCVQAXBqAQAtQAJAcgIAMQgGAIgMACIgEAAQgJAAgJgEg");
	this.shape.setTransform(21.8,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,89.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AE+FLIhSgHQgrgChAAEIgNABIhigGIjxgTQg/gGgVgDQgRgDghgHIgzgLIhQgKQgugHgdgRIgogZQgLgdgLgwIgEgSIAAgCIgBgGIgBgJIAAgDIAAgHQAEgqALggQAMggAWgaIAhgkQAEgFAEgDIAFgCQAwgkA9ghQAygbBqgyIABADQDHhBBsgVQCvghCMAaQAvAJADAaQACARgRANQgOAKgVAFQgyALhUABQhqABgdADQg+AGhuAdQhxAeg+AUIgCAEQgFAFgIADQgTAFgKAEQgHADgNAKQgNAKgHADIgJADQgFACgFAFQgNAKgNAHIgaANIgIAIIghAiQgqAkgFAHQgYAcACAbQABAUAPARQANAPAUAJQAaALA3ACIC6AIQCkAGBEACQCEADBngCQBwgDAjACQBCAECNAaQATAEAEAKQADAGgEAHQgEAHgHAEQgFADgJACIgOAFQgJAEgMAKIgSASQg2AxhjACIgGAAQgeAAgtgFg");
	this.shape.setTransform(63.3,33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.6,67.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.topor12();
	this.instance.setTransform(0,0,0.835,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,177);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.monster_();
	this.instance.setTransform(0,0,0.871,0.871);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653.2,452);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1lAduMAAAg7bMBrLAAAMAAAA7bg");
	this.shape.setTransform(343.1,190.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,686.2,380.6);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AivCOQgHgIAAgOQAAggAgAAQAHAAANADQADgDAKgUQAJgUAAgEIAAgDQgKgDgOgSQgKgOgNgXIgTgmQgJgSgDgCIgOgHIgBgBQgGgFAAgDIAAgfQAAgFAJgKQAJgKAFgBIAHgBQALAAAIAHQAGAGAFALIADAKIA0BjIAJAIIAuhkIAAgCQAAgGgDgLQAAgMAJgFQAHgEANAAQAIAAADAEQAGAEAAAIQAAAMgGAJQgFAIgLAFIgoBcIgCAHIgKAVIgFAOIgoBXQgGALgMAIQgMAIgMAAQgOAAgGgIgAl/CRQgRgOAAgIIAAgbQAAgCAHgIQAGgIAAgFQAAgPgIgQQgHgQAAgFQAAgLAHgHIAIgFQAAgOgFgaIgBgaIABgKIAAgSQgFADgHAAQgHAAgEgEQgDgDAAgHQAAgIAJgIQAIgGANgGQAQgHAdgEIAhAAQAQACAMADQAOAEALAHQAMAJALANQAMAQAAAIIAAAqQAAAJgFAJQgEAHgIAIQgYAZgLAJQgFAEgKADQgSAHgPACIgQADQgHACAAABQAAAHAFAdQAHAIADAHQAFAIAAAIQAAASgKAJQgJAJgSAAQgOAAgHgFgAlohsQgCACAAAGQAAAJADAEIALBTIAGABIAJgBIAXgGQARgEAEgEQAMgKAGgMQAHgMAAgPQAAgOgJgKQgHgIgNgEQgLgEgPgBIgigBQgFAAgCABgAEUB/QgKgJAAgIIgHg4IAAgHIgSiOIAAgbQAAgGAHgDQAFgDAGAAQAGAAAIAGQAIAGABAFQAPCIAEAEIAvh0QAEgFAIgSQAEgHAFgEQAHgEAIAAQAJAAAFADQAEADADAFQACAOADADQAEAIAAADIgCALQgDAHAAAEIABAFIAJCOIAAANQAAALgEAGQgGAIgLAAQgKAAgHgKIgCgyQgCgigFgPQgLgXAAgFIAAALIgqBtIABAHQAAALgHAKQgIAKgKAAQgIAAgLgJgAAeB/QgIgIAAgQQAAgLAMgSIAAgmQgFgFAAgIIACgHQAFgKAAgKIAAgCQAAgggFg/QgJgHAAgLQAAgLAIgEQAPgKAKAAQAIAAAGAFIBtACQAEAAAHgDQAGgEADAAQAHAAADAEQADADAAAGIgFAvQAAAEAKAKIAAABQAAAUgDAHQgDAGgFADQgGADgJAAQgNAAgHgGQgGgHAAgOQAAgKAHgNQAHgNAAgOIAAgNQhZAFgMAHIAAAfQAAAsAEAWIBOAJQAOACALADQAKAFAHAJQAGAIAEALQADALAAAPQAAASgGAOQgHAPgNAKQgUANgLABIgdABIgHgBQgfgHgFAAIgLAFQgLAFgJAAQgQAAgIgJgABRAeQgDAIAAAaIAAADIABAQIAfAIQAVAFAIAAQASAAAJgIQAFgEACgHQADgHAAgIQAAgNgJgHQgGgFgOgDQgdgFgYAAg");
	this.shape.setTransform(22.2,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-3.3,84,30.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("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");
	this.shape.setTransform(93.7,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-4.6,222.7,34.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("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");
	this.shape.setTransform(116.2,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,2.7,233.8,31.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AkuCPIgCgTQgDg5gChwIAAgrIgJggQAAgKAFgHQAGgHAKgBIBlgOIAcAAQBDAAAAAZQAAAMgLAFQgIAEgPABIAABcQAABCADAFIAIASQACAGAAAPQAAANgIAGQgHAGgOAAQgJAAgIgDQgIgDgGgFQgHgGgDgHQgEgIAAgJQAAgKAPgOIAAhNIACg4QAAgYgCgJQhLAIgIAIIAAAGIAHAGIAADnQgDAJgFAEQgGAEgIAAQgSAAgFgRgAGXCAQgKgJAAgIIgHg4IAAgHIgSiOIAAgbQAAgGAHgDQAFgDAGAAQAGAAAIAGQAIAGABAFQAPCIAEAEIAvh0QAEgFAIgSQAEgHAFgEQAHgEAIAAQAJAAAFADQAEADADAFQACAOADADQAEAIAAADIgCALQgDAHAAAEIABAFIAJCOIAAANQAAALgEAGQgGAIgLAAQgKAAgHgKIgCgyQgCgigFgPQgLgXAAgFIAAALIgqBtIABAHQAAALgHAKQgIAKgKAAQgIAAgLgJgADmB/QgkgRgRgMQgNgKgIgMQgJgMgCgOIABg6QABgQAFgOQAGgSAJgPQAJgQAMgMQANgNAOgIQAQgJASgBQAZgDAdAAIACgCQAKgIAJAAQAJAAAGADQAGADAEAFQAGAJAAARQAAAMgHAGQgHAFgNAAQgEAAgRgHQgRgIgPAAIgXACQgLACgIAEQgRAHgKAOQgKANgFAUQgEASAAAWIAAANIABAJQAAAGAFAIIAKANQAKALAPAJQAOAJAJAAQAEAAAVgGIABgBQAGgMAKgHQAJgHAOAAQASAAAIAJQAJAKAAASIgBANQAAACgVAVQgDADgNAAQgOgDgGAAQgUAGgHABIgOABQgQAAgGgDgAnQB/QgkgRgRgMQgNgKgIgMQgJgMgCgOIABg6QABgQAFgOQAGgSAJgPQAJgQAMgMQANgNAOgIQAQgJASgBQAZgDAdAAIACgCQAKgIAJAAQAJAAAGADQAGADAEAFQAGAJAAARQAAAMgHAGQgHAFgNAAQgEAAgRgHQgRgIgPAAIgXACQgLACgIAEQgRAHgKAOQgKANgFAUQgEASAAAWIAAANIABAJQAAAGAFAIIAKANQAKALAPAJQAOAJAJAAQAEAAAVgGIABgBQAGgMAKgHQAJgHAOAAQASAAAIAJQAJAKAAASIgBANQAAACgVAVQgDADgNAAQgOgDgGAAQgUAGgHABIgOABQgQAAgGgDgAhWB3QgFgHAAgNIABgMQACgHAFgCQAMgIAHgHQAJgIAFgKQgHgDAAgHQAAgIAagNIApheIgWgwQAAgMADgGQAEgIAIAAQAMAAAQASQALANADAGIBJCYQADAHAEATQAGANABAEIAAAHQAAALgEAGQgFAGgLAAQgMAAgFgKQgIgMgJgVIgOgjIgUAAQgYAAggADIghA2IABAOQAAANgFAGQgGAHgOAAQgLAAgGgIgAgBAGIAAAFIAzADIAGAAIgeg+IgDgCg");
	this.shape.setTransform(53.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,1.1,110.2,32.2);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_08();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.9,130.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_11();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,130.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_23();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,39.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_27();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.4,32.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_18();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.4,183);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_03();
	this.instance.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,67.1);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgSgqIAAAVIB8AAIAAAwIh8AAIAAAQQiuglCugwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-4.3,21.3,8.6);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgSgqIAAAVIB8AAIAAAwIh8AAIAAAQQiuglCugwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-4.3,21.3,8.6);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.setTransform(25.4,46.6,1,1,0,0,0,21.8,44.6);
	this.instance.alpha = 0.469;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.girl_15();
	this.instance_1.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,92.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(78.1,31.5,1,1,0,0,0,63.2,33.6);
	this.instance.alpha = 0.469;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.girl_05();
	this.instance_1.setTransform(0,0,0.958,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.9,100.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(10.7,4.3);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(16.3,4.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgSgqIAAAVIB8AAIAAAwIh8AAIAAAQQiuglCugwg");
	this.shape.setTransform(10.7,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.shape}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:16.3},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.3,8.7);


(lib.Символ18 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(43.4,34.8,1,1,0,0,0,0,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:15.1,rotation:-15,x:43.5,y:34.7},9,cjs.Ease.get(-1)).to({regX:0,regY:15.2,rotation:0,x:43.4,y:34.8},5).to({regX:-0.1,regY:15.1,rotation:15,y:34.7},5).to({x:42.1},5).to({x:44.6},5).to({regX:0,regY:15.2,rotation:0,x:43.4,y:34.8},5).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(154.1,79.5,1,1,0,0,0,111.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:149.8},19).to({x:157},10).to({x:154.1},5).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333333","#000000"],[0.231,1],143.9,14.4,-361,101.3).s().p("A3UG8IhRvfMAxLgBgIlJUHg");
	this.shape.setTransform(156.1,57.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-6.5,314.8,129);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(77.8,12.2,1,1,0,0,0,55.1,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8.5},14,cjs.Ease.get(-1)).to({y:12.2},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(140.9,56.6,1,1,0,0,0,116.9,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:60.3},14,cjs.Ease.get(-1)).to({y:56.6},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(145.8,39,1.146,1,0,0,0,157.4,64.5);
	this.instance_2.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-25.5,360.7,129);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(167,88.5,1,1,0,0,0,167,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-15},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,177);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(326.6,226,1,1,0,0,0,326.6,226);
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-2,-2,657,456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,663,462);


(lib.Символ10 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(326,262.1,1,1,0,0,0,343.1,190.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.238},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(326.6,226,1,1,0,0,0,326.6,226);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06,x:324.6,y:240},9).to({scaleX:1,scaleY:1,x:326.6,y:226},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-3,686.2,462);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(27.3,46.5,1,1,0,0,0,27.3,46.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,92.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(80.9,50.2,1,1,0,0,0,80.9,50.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.1,161.9,102.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_03.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(38.2,-7.5,1,1,0,0,0,28.7,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:28.8,rotation:6.7,x:42.9},14,cjs.Ease.get(-1)).to({regX:28.7,rotation:0,x:38.2},15,cjs.Ease.get(1)).to({regX:28.8,rotation:-5.5,x:39.2},15,cjs.Ease.get(-1)).to({regX:28.7,rotation:0,x:38.2},15,cjs.Ease.get(1)).wait(1));

	// girl_18.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(42.7,101.2,1,1,0,0,0,64.2,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:91.4,rotation:2.2},14,cjs.Ease.get(-1)).to({regY:91.5,rotation:0},15,cjs.Ease.get(1)).to({regY:91.4,rotation:2.2},15,cjs.Ease.get(-1)).to({regY:91.5,rotation:0},15,cjs.Ease.get(1)).wait(1));

	// girl_27.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(3.7,91.2,1,1,0,0,0,72.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15},14,cjs.Ease.get(-1)).to({rotation:-30,x:3.8,y:89.1},5).to({rotation:-15,x:3.7,y:91.2},10,cjs.Ease.get(1)).to({rotation:-30,x:3.8,y:89.1},5).to({rotation:0,x:3.7,y:91.2},10,cjs.Ease.get(-1)).wait(16));

	// girl_23.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(83.8,143.9,1,1,0,0,0,20.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:15,x:83.1},14,cjs.Ease.get(-1)).to({rotation:30,x:84.6},5).to({rotation:15,x:84.5},10,cjs.Ease.get(1)).to({rotation:30,x:84.9},5).to({rotation:0,x:82},10,cjs.Ease.get(-1)).to({x:83.8},15,cjs.Ease.get(1)).wait(1));

	// girl_11.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(58.3,203,1,1,0,0,0,22.5,65.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:22.4,rotation:-3.2,x:57.6,y:203.7},14,cjs.Ease.get(-1)).to({regX:22.5,scaleX:1,rotation:0,skewY:-2.2,x:58.3,y:203},15,cjs.Ease.get(1)).to({scaleX:1,rotation:-5.5,skewY:0,x:57.7,y:203.7},15,cjs.Ease.get(-1)).to({rotation:0,x:58.3,y:203},15,cjs.Ease.get(1)).wait(1));

	// girl_08.png
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(21.6,203.2,1,1,0,0,0,23.9,65.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:65.2,rotation:2.3,x:16.3,y:203.3},14,cjs.Ease.get(-1)).to({regY:65.1,scaleX:1.01,rotation:0,skewY:7.8,x:21.6,y:203.2},15,cjs.Ease.get(1)).to({scaleX:1,rotation:6,skewY:0,x:15},15,cjs.Ease.get(-1)).to({rotation:0,x:21.6},15,cjs.Ease.get(1)).wait(1));

	// girl_05.png
	this.instance_6 = new lib.Символ8();
	this.instance_6.setTransform(-65.1,34,1,1,0,0,0,80.9,50.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1.02,skewX:-12.3},14,cjs.Ease.get(-1)).to({scaleY:1.02,skewX:-0.3,x:-53.7},5,cjs.Ease.get(1)).to({scaleY:1.01,skewX:9.2,x:-44.7},10).to({skewX:8.4,skewY:-0.7,x:-36.6,y:26},5,cjs.Ease.get(-1)).to({scaleY:1.05,skewX:21.5,skewY:3.8,x:-32.6},10).to({scaleY:1,skewX:0,skewY:0,x:-65.1,y:34},15).wait(1));

	// girl_15.png
	this.instance_7 = new lib.Символ9();
	this.instance_7.setTransform(83.4,228.6,1,1,0,0,0,27.3,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.02,skewY:12.4},14,cjs.Ease.get(-1)).to({y:241},15,cjs.Ease.get(1)).wait(15).to({scaleX:1,skewY:0,y:228.6},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-41,256.7,316.1);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(92.1,330.8,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Символ18();
	this.instance.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.instance_1 = new lib.Символ17_1();
	this.instance_1.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_109 = function() {
		this.gotoAndPlay(85);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(30).call(this.frame_109).wait(1));

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(302.8,231.7,1,1,-21.3,0,0,10.7,4.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({x:352.8,y:241.7},15).to({x:302.8,y:231.7},15).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-14.2,147.7,1,1,135,0,0,10.7,4.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({x:88.8,y:86.7},15).to({x:-14.2,y:147.7},15).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(230.6,136.6,1,1,-13,0,0,84.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1,x:272.3,y:147.7},19,cjs.Ease.get(-1)).to({rotation:15.8,x:316.1,y:159.3},20,cjs.Ease.get(1)).to({rotation:0.5,x:271.3,y:147.4},21,cjs.Ease.get(-1)).to({rotation:-13,x:230.6,y:136.6},19,cjs.Ease.get(1)).to({rotation:0.5,x:271.3,y:147.4},8).to({regX:84.4,regY:95.4,rotation:10,x:316.1,y:154.6},7,cjs.Ease.get(1)).to({regX:84.5,regY:95.5,rotation:0.5,x:271.3,y:147.4},7,cjs.Ease.get(-1)).to({rotation:-13,x:230.6,y:136.6},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,7.5,315.5,317.2);


(lib.Символ24 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ17();
	this.instance.setTransform(157.4,64.5,1,1,0,0,0,157.4,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-471.3},14).to({x:157.4},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-6.5,314.8,129);


(lib.Символ16_1 = function(mode,startPosition,loop) {
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
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(135.8,58.2,1,1,0,0,0,116.9,32.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:448.3},14).to({x:135.8},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,0,360.7,129);


// stage content:



(lib.redhead600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
			this.kursor.y = stage.mouseY;
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.text.gotoAndPlay(1);
			this.text2.gotoAndPlay(1);
			this.girl.gotoAndPlay(95);
			this.fon.gotoAndPlay(1);
			
		    
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.text.gotoAndPlay(15);
			this.text2.gotoAndPlay(15);
			this.girl.gotoAndPlay(80);
		    this.fon.gotoAndPlay(10);
		}
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		 this.cursor = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// kursor
	this.kursor = new lib.Символ12();
	this.kursor.setTransform(442.1,251.8,0.72,0.72,0,0,0,83.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// mouse
	this.mouse = new lib.Символ16();
	this.mouse.setTransform(53,272.4,1,1,0,0,0,71.8,237);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// girl
	this.girl = new lib.Символ31();
	this.girl.setTransform(213.6,160.9,1,1,0,0,0,128.3,158);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// text2
	this.text2 = new lib.Символ24();
	this.text2.setTransform(1021.9,64.1,0.828,0.828,0,0,0,157.3,64.5);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text
	this.text = new lib.Символ16_1();
	this.text.setTransform(488.7,64.1,0.828,0.828,0,0,0,157.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// fon
	this.fon = new lib.Символ10();
	this.fon.setTransform(296.6,124.6,0.976,0.976,0,0,0,326.6,226.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(261.3,51.1,1189.8,450);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
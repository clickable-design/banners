(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/baba_03.png?1465831967449", id:"baba_03"},
		{src:"images/baba_06.png?1465831967449", id:"baba_06"},
		{src:"images/baba_11.png?1465831967449", id:"baba_11"},
		{src:"images/baba_13.png?1465831967449", id:"baba_13"},
		{src:"images/baba_16.png?1465831967449", id:"baba_16"},
		{src:"images/bg.jpg?1465831967449", id:"bg"},
		{src:"images/chains_transparent_1.png?1465831967449", id:"chains_transparent_1"},
		{src:"images/chains_transparent_2.png?1465831967449", id:"chains_transparent_2"},
		{src:"images/mouse.png?1465831967449", id:"mouse"},
		{src:"images/rot.png?1465831967449", id:"rot"},
		{src:"images/rot_up.png?1465831967449", id:"rot_up"},
		{src:"images/stolb.png?1465831967449", id:"stolb"},
		{src:"images/yazik.png?1465831967449", id:"yazik"}
	]
};



// symbols:



(lib.baba_03 = function() {
	this.initialize(img.baba_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,92);


(lib.baba_06 = function() {
	this.initialize(img.baba_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.baba_11 = function() {
	this.initialize(img.baba_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,136);


(lib.baba_13 = function() {
	this.initialize(img.baba_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.baba_16 = function() {
	this.initialize(img.baba_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,207);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,829,305);


(lib.chains_transparent_1 = function() {
	this.initialize(img.chains_transparent_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,111);


(lib.chains_transparent_2 = function() {
	this.initialize(img.chains_transparent_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,164);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,39);


(lib.rot = function() {
	this.initialize(img.rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,767,571);


(lib.rot_up = function() {
	this.initialize(img.rot_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,192);


(lib.stolb = function() {
	this.initialize(img.stolb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,607);


(lib.yazik = function() {
	this.initialize(img.yazik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,322);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE834").s().p("AD/B+QgKAAAAgKIAAgHQAAgHgHAAIgsAAQgGAAAAAHIAAAHQAAAKgKAAIgmAAQgJAAgBgKIAAg+QABgJAJAAQAHgBAAgGIAAh5QAAgIADgIQADgHAGgHQAGgGAIgDQAIgDAJAAIBWAAQALAAAAAJIAAChIAGAAQAKAAAAAJIAAA+QAAAKgKAAgADMg9IAABqIAYAAIAAhqQAAgHgGAAIgLAAQgHAAAAAHgAJ8BmQgJAAgBgKIAAjQQABgJAJAAIAmAAQAKAAAAAJIAAAqQAAAGAGAAIAhAAQAJAAAIAEQAHADAGAGQANANAAARIAABUQAAASgNANQgGAGgHADQgIADgJAAgAKsgDIAAApQAAAHAGAAIAMAAQAGAAAAgHIAAgpQAAgHgGAAIgMAAQgGAAAAAHgAILBmQgKAAAAgKIAAiZQAAgGgHAAIgXAAQgJgBgBgKIAAgmQABgJAJAAIB1AAQALAAAAAJIAAAmQAAAKgLAAIgXAAQgGAAgBAHIAACZQAAAKgJAAgAGaBmQgKAAAAgKIAAhEIgYBEQgDAKgHAAIgmAAQgKAAAAgKIAAjQQAAgJAKAAIAmAAQAKAAAAAJIAABHIAYhHQADgJAHAAIAmAAQAKAAAAAJIAADQQAAAKgKAAgAATBmQgKAAgHgDQgGgDgGgGQgGgHgEgHQgDgIAAgJIAAiOQAAgIADgIQAEgHAGgHQAGgGAGgDQAHgDAKAAIA1AAQAJAAAIADQAHADAGAGQANANAAARIAACOQAAASgNANQgGAGgHADQgIADgJAAgAAhg9IAABjQAAAHAGAAIALAAQAHAAAAgHIAAhjQAAgHgHAAIgLAAQgGAAAAAHgAinBmQgLAAABgKIAAjQQgBgJALAAIBtAAQAKAAAAAJIAAAmQAAAKgKAAIg3AAQgGAAgBAGIAAAGQAAAGAHAAIAgAAQAJAAAHADQAIADAHAHQAMANAAARIAABCQAAASgMANQgHAGgIADQgHADgJAAgAh4AMIAAAaQAAAHAHAAIAKAAQAHAAAAgHIAAgaQAAgGgHAAIgKAAQgHAAAAAGgAkiBmQgIAAgJgDQgHgDgGgGQgGgHgDgHQgDgIAAgJIAAiOQAAgIADgIQADgHAGgHQAGgGAHgDQAJgDAIAAIA2AAQAJAAAHADQAIADAHAGQAMANAAARIAACOQAAASgMANQgHAGgIADQgHADgJAAgAkTg9IAABjQAAAHAHAAIALAAQAGAAAAgHIAAhjQAAgHgGAAIgLAAQgHAAAAAHgAneBmQgJAAgBgKIAAjQQABgJAJAAIBXAAQAJAAAIADQAHADAGAGQANANAAARIAAAwQAAAKgHAHQgHAHgJAAQAJABAHAHQAHAFAAAKIAAAvQAAASgNANQgGAGgHADQgIADgJAAgAmuANIAAAZQAAAHAGAAIAMAAQAGAAAAgHIAAgZQAAgHgGAAIgMAAQgGAAAAAHgAmug9IAAAZQAAAHAGAAIAMAAQAGAAAAgHIAAgZQAAgHgGAAIgMAAQgGAAAAAHgAo3BmQgJAAgIgDQgHgDgHgGQgGgHgDgHQgDgIAAgJIAAiOQAAgIADgIQADgHAGgHQAHgGAHgDQAIgDAJAAIA2AAQAKAAAAAJIAAAmQAAAKgKAAIghAAQgGAAgBAHIAABjQABAHAGAAIAhAAQAKAAAAAJIAAAmQAAAKgKAAgArSBmQgJAAgIgDQgIgDgFgGQgHgHgDgHQgDgIAAgJIAAiOQAAgIADgIQADgHAHgHQAFgGAIgDQAIgDAJAAIA1AAQAKAAAHADQAIADAGAGQAMANAAARIAACOQAAASgMANQgGAGgIADQgHADgKAAgArDg9IAABjQAAAHAGAAIALAAQAHAAAAgHIAAhjQAAgHgHAAIgLAAQgGAAAAAHg");
	this.shape.setTransform(76.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.3,25.4);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AvLFoIgfg5IilkvIDElnMAhbAAAIAALPg");
	this.shape.setTransform(116.9,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJ/ByQgKAAAAgKIAAjQQAAgJAKAAIAlAAQAKAAAAAJIAAAqQAAAGAHAAIAgAAQAJAAAIAEQAHADAHAGQAMANAAARIAABUQAAASgMANQgHAGgHADQgIADgJAAgAKuAHIAAArQAAAHAHAAIALAAQAGAAAAgHIAAgrQAAgHgGAAIgLAAQgHAAAAAHgAINByQgKAAAAgKIAAiZQAAgGgGAAIgXAAQgKgBAAgKIAAgmQAAgJAKAAIB1AAQAKAAAAAJIAAAmQAAAKgKAAIgYAAQgGAAAAAHIAACZQAAAKgKAAgAGcByQgKAAAAgKIAAhEIgYBEQgDAKgHAAIglAAQgKAAAAgKIAAjQQAAgJAKAAIAlAAQAKAAAAAJIAABHIAYhHQAEgJAGAAIAmAAQAKAAAAAJIAADQQAAAKgKAAgADZByQgKAAAAgKIAAiZQAAgGgGAAIgXAAQgKgBAAgKIAAgmQAAgJAKAAIB1AAQAKAAAAAJIAAAmQAAAKgKAAIgYAAQgGAAAAAHIAACZQAAAKgKAAgAA4ByQgJAAgIgDQgIgDgGgGQgGgHgDgHQgDgIAAgJIAAiOQAAgIADgIQADgHAGgHQAGgGAIgDQAIgDAJAAIA1AAQAJAAAIADQAHADAHAGQAMANAAARIAACOQAAASgMANQgHAGgHADQgIADgJAAgABGgxIAABjQAAAHAHAAIALAAQAGAAAAgHIAAhjQAAgHgGAAIgLAAQgHAAAAAHgAgxByQgKAAAAgKIAAiZQAAgHgGAAIgLAAQgHAAAAAHIAAB4QAAAJgDAIQgDAHgGAHQgHAGgHADQgIADgJAAIgVAAQgKAAAAgKIAAgmQAAgJAKAAQAHAAAAgHIAAh5QAAgIADgIQADgHAGgHQAGgGAIgDQAIgDAIAAIBXAAQAKAAAAAJIAADQQAAAKgKAAgAkkByQgKAAAAgKIAAjQQAAgJAKAAIBtAAQAKAAAAAJIAAAmQAAAKgKAAIg3AAQgHAAAAAHIAACZQAAAKgKAAgAmeByQgJAAgIgDQgIgDgGgGQgGgHgDgHQgDgIAAgJIAAiOQAAgIADgIQADgHAGgHQAGgGAIgDQAIgDAJAAIA1AAQAJAAAIADQAHADAHAGQAMANAAARIAACOQAAASgMANQgHAGgHADQgIADgJAAgAmQgxIAABjQAAAHAHAAIALAAQAGAAAAgHIAAhjQAAgHgGAAIgLAAQgHAAAAAHgApaByQgKAAAAgKIAAjQQAAgJAKAAIBWAAQAJAAAIADQAHADAHAGQAMANAAARIAABVQAAARgMANQgHAGgHADQgIAEgJAAIggAAQgHAAAAAGIAAApQAAAKgKAAgAorgxIAAArQAAAGAHAAIALAAQAGAAAAgGIAAgrQAAgHgGAAIgLAAQgHAAAAAHgAqkByQgKAAAAgKIAAiZQAAgHgGAAIgLAAQgHAAAAAHIAACZQAAAKgKAAIglAAQgKAAAAgKIAAjQQAAgJAKAAIAlAAQAKAAAAAJIAAAPQAMgYAbAAQAJAAAIADQAHADAHAGQAMANAAARIAACvQAAAKgKAAg");
	this.shape.setTransform(76.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.8,23);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,39);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhfAyIAAgTIgzAAIgCATIgTAAIAAgnIAJAAQADgGAEgQIABgeIAAgGIBBAAIAAA6IALAAIgCAngAiBgaIgBAUIgEARIAbAAIAAgnIgWAAgAjkAeQgIgDgFgGQgGgFgDgIIgDgIIAAgHQAAgJADgHQADgIAFgFQAGgHAGgCIAIgDIAJgBIAJABIAIADIAGAEIAGAGQAFAFADAJQABAHAAAJIAAAFIg3AAIACAGIAFAEIAFAEIAHABQAGAAAEgCQAFgDAEgEIAOAMIgHAGIgHAFIgJADIgKABIgRgDgAjEgOIgDgGQgBgEgCgCIgFgDIgGgBIgHABIgFADIgEAGIgCAGIAjAAIAAAAgAmgAfQgFgCgEgDQgDgDgCgFQgCgFgBgGQAAgGADgDQACgEAEgEQAFgDAGgCQAFgBAIAAQAIAAALADIAAgBIgBgGQgBgDgCgCQgCgCgEgBIgHgBQgGAAgGACIgKACIgGgRIAOgEQAIgCAKAAQAIAAAHACQAHADAFAEQAEAEACAHQADAGAAAIIAAAtIgXAAIAAgIQgEAEgGACQgGAEgIAAQgGgBgFgBgAmXAAQgDABAAAGQAAAFADACQADACAGABIAHgBIAGgDIADgFIABgGIAAgCQgFgCgJAAQgHAAgFACgAHEAfIAAhOIAWAAIAAAaIARAAQAHAAAGACQAGABAEADQAEAEADAFQACAFAAAFQAAAGgCAFQgCAFgEAEQgEAEgGABQgGACgHAAgAHaANIAPAAQAGAAADgDQACgCAAgEQAAgEgDgBQgDgCgFAAIgPAAgAE3AfIAAhOIAYAAIAAA6IAZAAIAAg6IAXAAIAAA6IAZAAIAAg6IAYAAIAABOgAENAfIAAhOIAWAAIAABOgAC6AfIAAhOIAXAAIAAAaIARAAQAHAAAGACQAGABAEADQAEAEACAFQADAFAAAFQAAAGgCAFQgCAFgEAEQgEAEgGABQgGACgHAAgADRANIAPAAQAGAAADgDQACgCAAgEQAAgEgDgBQgCgCgGAAIgPAAgACQAfIAAgvIgXAgIgWgfIAAAuIgXAAIAAhOIAYAAIAVAhIAXghIAWAAIAABOgAgIAfIAAgtIggAtIgVAAIAAhOIAVAAIAAAvIAggvIATAAIAABOgAlTAfIAAhOIAsAAQAGAAAFABIAJAEQADACABAEQADAEAAAFIgBAGIgDAFQgDAFgGACIAGACIAGAFIADADIAAAIQAAAFgBAEQgDAFgEACQgDADgGABQgGACgGAAgAk9ANIASAAQAFAAADgCQACgCAAgEQAAgEgCgBQgDgBgGAAIgRAAgAk9gPIAQAAQAFAAADgDQACgCAAgDQAAgDgCgCQgDgCgFAAIgQAAgAnXAfIAAgfIgcAAIAAAfIgXAAIAAhOIAXAAIAAAeIAcAAIAAgeIAXAAIAABOg");
	this.shape.setTransform(52.4,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.7,10.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhIvAb5MAAAg3xMCRfAAAMAAAA3xg");
	this.shape.setTransform(465.6,178.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,931.3,357.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.yazik, null, new cjs.Matrix2D(1,0,0,1,-41,-161)).s().p("AmZZKMAAAgyTIMyAAMAAAAyTg");
	this.shape.setTransform(41,161);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,322);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE834").s().p("AL+CZQgMAAgKgEQgLgFgHgJQgJgHgEgLQgFgKABgLIAAi/QgBgLAFgKQAEgKAJgJQAHgIALgFQAKgEAMAAIBnAAQANAAgBANIAAAzQABAOgNAAIhLAAQgIgBgBAJIAAAWQABAJAIAAIBLAAQANAAgBANIAAAwQABAOgNAAIhLAAQgIAAgBAIIAAATQABAJAIgBIBLAAQANAAgBAOIAAAzQABANgNAAgAJwCZQgNAAAAgNIAAhVQAAgJgJAAIgPAAQgIAAgBAJIAABVQAAANgMAAIgzAAQgNAAAAgNIAAkXQAAgNANAAIAzAAQAMAAAAANIAABqQABAKAIgBIAPAAQAJABAAgKIAAhqQAAgNANAAIAyAAQAOAAAAANIAABrQAAAOgKAKQgJAIgMAAQAMAAAJAJQAKAJAAAPIAABrQAAANgOAAgADHCZQgNAAAAgNIAAkXQAAgNANAAIAzAAQANAAgBANIAADOQABAJAIgBIAPAAQAJABAAgJIAAjOQAAgNANAAIAzAAQANAAAAANIAADQQABAGAHAAIAPAAQAJABAAgJIAAjOQAAgNANAAIAzAAQANAAAAANIAAEXQAAANgNAAgABlCZQgNAAAAgNIAAkXQAAgNANAAIAzAAQANAAAAANIAAEXQAAANgNAAgAhzCZQgNAAAAgNIAAkXQAAgNANAAIAzAAQANAAgBANIAAA4QAAAIAJABIArAAQALAAAJADQAKAEAJAJQARARAAAYIAABxQAAAWgRARQgJAJgKAEQgJAEgLABgAg0AJIAAA6QAAAJAJgBIAPAAQAJABAAgJIAAg6QAAgJgJAAIgPAAQgJAAAAAJgAjVCZQgNAAAAgNIAAjOQAAgJgJABIgPAAQgJgBAAAJIAACiQAAALgDAKQgFALgJAHQgIAJgKAFQgKAEgLAAIgdAAQgOAAAAgNIAAgzQAAgOAOAAQAJABAAgJIAAiiQgBgLAFgKQAEgKAIgJQAIgIALgFQAKgEAMAAIB0AAQANAAgBANIAAEXQABANgNAAgAm6CZQgOAAAAgNIAAg4QAAgIgIgBIgOAAQgJABAAAIIAAA4QAAANgOAAIgyAAQgOAAAAgNIAAkDQAAgOAKgJQAKgKAOAAIB3AAQAPAAAJAKQAKAJAAAOIAAEDQAAANgOAAgAnnhCIAABQQAAAJAJAAIAOAAQAIAAAAgJIAAhQQAAgJgIABIgOAAQgJgBAAAJgAqJCZQgNAAAAgNIAAhTIggBTQgEANgKAAIgyAAQgJAAgFgNIgfhTIAABTQAAANgOAAIgyAAQgOAAAAgNIAAkXQAAgNAOAAIAyAAQAJAAAFANIBGCwIBHiwQAFgNAIAAIAyAAQAOAAAAANIAAEXQAAANgOAAg");
	this.shape.setTransform(88.2,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.4,30.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGIBkQgJAAAAgIIAAg8IgWA8QgDAIgFAAIghAAQgJAAAAgIIAAi2QAAgJAJAAIAhAAQAJAAgBAJIAAA+IAWg+QADgJAGAAIAhAAQAJAAgBAJIAAC2QABAIgJAAgADABkQgJAAABgIIAAi2QgBgJAJAAIBgAAQAKAAgBAJIAAAhQABAJgKgBIgwAAQgGAAAAAGIAACHQAAAIgJAAgABVBkQgIABgHgDQgGgDgGgFQgFgGgDgGQgDgIAAgHIAAh8QAAgJADgGQADgHAFgFQAGgGAGgDQAHgCAIAAIAvAAQAIAAAGACQAHADAGAGQALALAAAQIAAB8QAAAQgLALQgGAFgHADQgGADgIgBgABhgrIAABXQAAAGAHAAIAJAAQAGAAAAgGIAAhXQAAgGgGAAIgJAAQgHAAAAAGgAgHBkQgJAAAAgIIAAg2IgVA2QgDAIgFAAIgiAAQgGAAgDgIIgVg2IAAA2QAAAIgIAAIgiAAQgJAAAAgIIAAi2QAAgJAJAAIAiAAQAFAAADAJIAvBzIAuhzQADgJAGAAIAgAAQAIAAAAAJIAAC2QAAAIgIAAgAkDBkQgHABgHgDQgGgDgGgFQgFgGgEgGQgCgIAAgHIAAh8QAAgJACgGQAEgHAFgFQAGgGAGgDQAHgCAHAAIAwAAQAIAAAGACQAHADAFAGQAMALAAAQIAAB8QAAAQgMALQgFAFgHADQgGADgIgBgAj1grIAABXQAAAGAFAAIAKAAQAGAAAAgGIAAhXQAAgGgGAAIgKAAQgFAAAAAGgAlgBkQgIAAAAgIIAAiHQAAgGgHAAIgJAAQgGAAAAAGIAACHQAAAIgIAAIgiAAQgIAAAAgIIAAi2QAAgJAIAAIAiAAQAIAAAAAJIAAAMQALgWAXABQAJAAAGACQAGADAGAGQALALAAAQIAACZQAAAIgIAAg");
	this.shape.setTransform(26.6,26.9,1.75,1.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,9.2,151.9,35.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chains_transparent_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,164);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chains_transparent_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,111);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba_16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,207);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba_13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,136);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,92);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.baba_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("AntDNQjNhVgBh4QABh2DNhWQDMhUEhgBQEiABDNBUQDNBWAAB2QAAB4jNBVQjNBUkiAAQkhAAjMhUg");
	this.shape.setTransform(70,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,58);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.rot_up, null, new cjs.Matrix2D(1,0,0,1,-167,-94.3)).s().p("A0mOuQiqgDiHgMQgYgCgWAGIAA6FQAMAtAPAyQBGDrANBAQAOBAAUCCQAVBzAcBIIAfBHQASArAIAdQAMAuAHBlQAGBiAPAxQAJAcAXAuQAaA0AHAVIAFAKIgFADQgKAJgEAOQgGAYARAbQAMAQAaAVIAVASQAeAZARAMQAeATApARQAZAKAyAQIBoAgQAyAQAYALQAUAIAWAMIinABIiVABIidgBgAq9OoQgXgOgjgbQgbgUgQgJQgVgLgwgRIjQhDQgdgJgOgHQgXgKgQgNQgRgSgKgIQgEgEgZgQIgCgCQAIgKABgQQABgSgJgVQgKgcgmhFQghg8gKgmQgLgmAAhDQgChNgEgdQgIgtgYg9QgdhEgNgjQgdhNgWh+IgmjQQgNg6g7jJQgwifgMhlIgCgQMAyJAAAIgWAyQgNAagKASIgVAgIgjBDQgVAogVAWQgWASgIALQgQAUACASIABACIgQAPIgeAdQgRARgLANQhEBIhGCHQhmDEgQAaQgKAPgFAMQgMAHgOANQgYAXgNAPQgTAXgJAVIgIAZQgGAPgGAIQgHALgQALQgRALgZAMIgqATQgWAKgcAPQghASgIAUQgDAKABAMQACAMAHAIQAIAJALADQALAEAMgDQAKgCAPgKQARgNAHgDIAQgFIARgGQAHgDALgIQANgKAFgDQAMgGAYgJQAYgMAcgfQARgUAGgNQAKgRAMgjQANgcAZgUIARgOIAFgEIAJgGQAMgIAJgOQAGgJAKgSIBYitQA5hwAlgzQAcgpArgvQAagcA0g1IBIhIQAmgmAQgYQAOgVAVgvQAOgfALgUIAAbmMgk6AAPIgIgEg");
	this.shape.setTransform(167,94.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334,188.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stolb();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,607);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rot();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,767,571);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(107.9,38.1,1,1,0,0,0,76.7,12.7);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(116.9,36,1,1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(107.9,38.1,1,1,0,0,0,76.7,12.7);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(116.9,36,1,1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(120.3,38.4,1,1,0,0,0,76.9,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE834").s().p("AyPFoIAArPMAhaAAAIDFFnIjFFog");
	this.shape.setTransform(116.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(120.3,38.4,1,1,0,0,0,76.9,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE834").s().p("AyPFoIAArPMAhaAAAIDFFnIjFFog");
	this.shape.setTransform(116.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(116.9,36,1,1,0,0,0,116.9,36);

	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(116.9,36,1.1,1.1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(-53.5,7.2,1,1,-5,0,0,10.8,36);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.9,rotation:5},14,cjs.Ease.get(1)).to({regX:10.8,rotation:-5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.4,-50.8,259.6,99.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(48,19.5,1,1,0,0,0,48,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,39);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(48,19.5,1,1,0,0,0,48,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-32},24,cjs.Ease.get(1)).to({scaleX:1.06,skewY:180},1).to({x:38},14,cjs.Ease.get(1)).wait(1).to({scaleX:1,skewY:0,x:48},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,39);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(41,161,1,1,0,0,0,41,161);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:170},4,cjs.Ease.get(1)).to({y:161},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,322);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(16.1,88.5,1,1,0,0,0,88.2,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:112.4},5,cjs.Ease.get(1)).to({y:88.5},5,cjs.Ease.get(1)).wait(11));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(21.5,3.2,1.15,1.15,0,0,0,30.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:27.1},14,cjs.Ease.get(-1)).wait(10).to({y:3.2},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.1,2.2,176.6,101.6);


(lib.Символ17 = function(mode,startPosition,loop) {
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

	// mouse
	this.instance = new lib.Символ25();
	this.instance.setTransform(50,142.9,0.6,0.6,0,0,0,48,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:270},3,cjs.Ease.get(1)).wait(1).to({x:50},4,cjs.Ease.get(1)).wait(1));

	// text
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(20.4,162.6,1,1,0,0,0,52.4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:240.4},3,cjs.Ease.get(1)).wait(1).to({x:20.4},4,cjs.Ease.get(1)).wait(1));

	// text
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(30.5,-2.9,0.92,0.92,0,0,0,30.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:250.5},3,cjs.Ease.get(1)).wait(1).to({x:30.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.9,-10.2,162.5,177.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// baba_06.png
	this.instance = new lib.Символ10();
	this.instance.setTransform(58.5,45.5,1,1,0,0,0,48.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:36,x:23.6,y:42.2},14).to({rotation:0,x:72.5,y:48.5},10,cjs.Ease.get(1)).to({x:58.5,y:45.5},10).wait(1));

	// baba_11.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(24,156.5,1,1,0,0,0,48,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:48.1,rotation:-15,x:24.1},14).to({regX:48,rotation:7,x:23.1,y:156.6},10,cjs.Ease.get(1)).to({rotation:0,x:24,y:156.5},10).wait(1));

	// baba_16.png
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(24,156.6,1,1,0,0,0,35,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:25,y:153.6},14).to({rotation:-5,x:23,y:155.6},10,cjs.Ease.get(1)).to({rotation:0,x:24,y:156.6},10).wait(1));

	// baba_13.png
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(5.5,103.5,1,1,0,0,0,43.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:3.5,y:104.5},14).to({regX:43.6,rotation:6,x:12.6,y:103.5},10,cjs.Ease.get(1)).to({regX:43.5,rotation:0,x:5.5},10).wait(1));

	// baba_03.png
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(-4.5,65,1,1,0,0,0,33.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-16,x:-8.5},14).to({rotation:-13,x:5.6,y:63},10,cjs.Ease.get(1)).to({rotation:0,x:-4.5,y:65},10).wait(1));

	// Слой 8
	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(3.5,13.7,1,1,0,0,0,15.5,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:135.1,rotation:13,x:-14.5,y:13.8},14).to({regY:135,rotation:0,x:1.5,y:13.7},10,cjs.Ease.get(1)).to({x:3.5},10).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ15();
	this.instance_6.setTransform(43.5,9,1,1,26,0,0,117.2,87.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:87.7,rotation:36,x:30.5},14).to({regY:87.8,rotation:15,x:54.5,y:10},10,cjs.Ease.get(1)).to({rotation:26,x:43.5,y:9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-121.3,177.2,469.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(70,29,1,1,0,0,0,70,29);
	this.instance.filters = [new cjs.BlurFilter(71, 71, 1)];
	this.instance.cache(-2,-2,144,62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,216,134);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_79 = function() {
		this.gotoAndPlay(67);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(30).call(this.frame_79).wait(6));

	// rot_up
	this.instance = new lib.Символ6();
	this.instance.setTransform(389.5,97,1,1,0,0,0,167,96);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:379.5,y:135},29,cjs.Ease.get(1)).to({x:389.5,y:145},10,cjs.Ease.get(1)).to({y:97},10,cjs.Ease.get(-1)).wait(1).to({x:509.5,y:135},17,cjs.Ease.get(1)).to({x:519.5,y:205},5,cjs.Ease.get(1)).to({x:509.5,y:135},7,cjs.Ease.get(-1)).wait(1).to({x:389.5,y:97},4,cjs.Ease.get(1)).wait(1));

	// shadow
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(385,108,1,1,0,0,0,70,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:375,y:146},29,cjs.Ease.get(1)).to({x:385,y:156},10,cjs.Ease.get(1)).to({y:108},10,cjs.Ease.get(-1)).wait(1).to({x:505,y:146},17,cjs.Ease.get(1)).to({x:515,y:216},5,cjs.Ease.get(1)).to({x:505,y:146},7,cjs.Ease.get(-1)).wait(1).to({x:385,y:108},4,cjs.Ease.get(1)).wait(1));

	// yazik
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(361.5,190,1,1,0,0,0,41,161);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:351.5,y:250},29,cjs.Ease.get(1)).to({x:361.5,y:240},10,cjs.Ease.get(1)).to({y:190},10,cjs.Ease.get(-1)).wait(1).to({x:481.5,y:250},17,cjs.Ease.get(1)).to({x:491.5,y:280},5,cjs.Ease.get(1)).to({x:481.5,y:250},7,cjs.Ease.get(-1)).wait(1).to({x:361.5,y:190},4,cjs.Ease.get(1)).wait(1));

	// baba
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(431.5,269,1,1,0,0,0,52.5,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:421.5},29,cjs.Ease.get(1)).to({x:431.5},10,cjs.Ease.get(1)).wait(11).to({x:551.5},17,cjs.Ease.get(1)).to({x:561.5},5,cjs.Ease.get(1)).to({x:551.5},7,cjs.Ease.get(-1)).wait(1).to({x:431.5},4,cjs.Ease.get(1)).wait(1));

	// stolb
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(401.5,403,1,1,0,0,0,47,303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:391.5},29,cjs.Ease.get(1)).to({x:401.5},10,cjs.Ease.get(1)).wait(11).to({x:521.5},17,cjs.Ease.get(1)).to({x:531.5},5,cjs.Ease.get(1)).to({x:521.5},7,cjs.Ease.get(-1)).wait(1).to({x:401.5},4,cjs.Ease.get(1)).wait(1));

	// rot
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(383.5,286.5,1,1,0,0,0,383.5,285.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:373.5,y:324.5},29,cjs.Ease.get(1)).to({x:383.5,y:334.5},10,cjs.Ease.get(1)).to({y:286.5},10,cjs.Ease.get(-1)).wait(1).to({x:503.5,y:324.5},17,cjs.Ease.get(1)).to({x:513.5,y:394.5},5,cjs.Ease.get(1)).to({x:503.5,y:324.5},7,cjs.Ease.get(-1)).wait(1).to({x:383.5,y:286.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,767,705.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(420.6,159.6,1,1,0,0,0,465.6,178.6);
	this.instance.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-19,931.3,357.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(116.9,36,1,1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(116.9,36,1,1,0,0,0,116.9,36);

	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(116.9,36,1.1,1.1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233.7,72);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(233.7,36,1,1,5,0,0,233.7,36);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5},14,cjs.Ease.get(1)).to({rotation:5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-22.9,259.6,99.4);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(326.9,36,1,1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:106.9},8,cjs.Ease.get(1)).wait(1).to({x:326.9},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(207.8,-20.2,239.1,92.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(141.3,40.4,1,1,0,0,0,76.9,11.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-78.7,alpha:1},0).to({x:141.3},8,cjs.Ease.get(1)).wait(1).to({x:-98.7},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-19.2,239.1,92.1);


// stage content:



(lib.SosiBabu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 20;
		
		}
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.rot.gotoAndPlay(50);
			_this.text.gotoAndPlay(1);
			_this.proglotit.gotoAndPlay(1);
			_this.osvobodit.gotoAndPlay(1);
			
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.rot.gotoAndPlay(80);
			_this.text.gotoAndPlay(5);
			_this.proglotit.gotoAndPlay(10);
			_this.osvobodit.gotoAndPlay(10);
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// osvobodit
	this.osvobodit = new lib.Символ35();
	this.osvobodit.setTransform(519.1,132.8,1,1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get(this.osvobodit).wait(1));

	// proglotit
	this.proglotit = new lib.Символ31();
	this.proglotit.setTransform(95.9,149,1,1,0,0,0,116.9,36);

	this.timeline.addTween(cjs.Tween.get(this.proglotit).wait(1));

	// text
	this.text = new lib.Символ17();
	this.text.setTransform(496.7,84.9,1,1,0,0,0,30.5,10.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// rot
	this.rot = new lib.Символ2();
	this.rot.setTransform(163.5,165.5,1,1,0,0,0,383.5,285.5);

	this.timeline.addTween(cjs.Tween.get(this.rot).wait(1));

	// bg
	this.fon = new lib.Символ1();
	this.fon.setTransform(43.4,150,1,1,0,0,0,67.4,150);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,31,1082.2,705.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
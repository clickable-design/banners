(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1464271843626", id:"back"},
		{src:"images/hand.png?1464271843627", id:"hand"},
		{src:"images/kabinan1.png?1464271843627", id:"kabinan1"},
		{src:"images/oblakos.png?1464271843627", id:"oblakos"},
		{src:"images/sam11.png?1464271843627", id:"sam11"},
		{src:"images/sam2.png?1464271843627", id:"sam2"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1464271843627", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,734,450);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,44);


(lib.kabinan1 = function() {
	this.initialize(img.kabinan1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,561,313);


(lib.oblakos = function() {
	this.initialize(img.oblakos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,112);


(lib.sam11 = function() {
	this.initialize(img.sam11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,51);


(lib.sam2 = function() {
	this.initialize(img.sam2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,155);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AB9AAQAAAzglAlQglAlgzAAQgzAAgkglQglglAAgzQAAgzAlgkQAkglAzAAQAzAAAlAlQAlAkAAAzg");
	this.shape.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27,27);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AB9AAQAAAzglAlQglAlgzAAQgzAAgkglQglglAAgzQAAgzAlgkQAkglAzAAQAzAAAlAlQAlAkAAAzg");
	this.shape.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27,27);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA1g8ICHAAAgBh6IAABhAAyABIBhAAADNAAQAABVg8A8Qg8A8hVAAQhUAAg8g8Qg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUgAi9g8ICGAAAiUABIBiAAAiUA9IBiAAAAyA9IBhAAAgyBrIBgAAAgyAwQAyg0AuA0");
	this.shape.setTransform(20.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43,43);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.098)").ss(3,1,1).p("AjzjgIHnAAIAAHBInnAAg");
	this.shape.setTransform(24.4,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AjzDhIAAnBIHmAAIAAHBg");
	this.shape_1.setTransform(24.4,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,51.8,48.2);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kabinan1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,561,313);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA+BaQgGABgDgEQgDgEAAgEIAAghIhZAAIgIAhQgCAEgEAEQgEAEgFgBIgZAAQgFABgDgEQgCgDABgFIAgh3IAFgOIAHgLQAIgJAMgGQALgFAOgDQAKgCAPAAIBFAAQAEABADADQADADAAAFIAACdQAAAFgDADQgEAEgFgBgAACg0IgIAFQgEADgDAGQgEAEgBAGIgLAmIBPAAIAAhAIglAAQgGABgFABg");
	this.shape.setTransform(9.8,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.6,18.2);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA6BbQgFAAgGgEQgFgDgDgFIgXgkQgIgNgHgFQgCgEgFgCQgFgCgGAAIgcAAIAAA+QAAAFgDADQgEAEgFAAIgYAAQgEAAgEgEQgEgDAAgFIAAicQAAgFAEgEQAEgEAEAAIAYAAQAFAAAEAEQADAEAAAFIAAA9IAcAAQALAAAGgHQAJgGAHgNIAUgjQADgGAFgEQAFgDAFAAIAeAAQAEAAABAEQABADgDAGIgbAyQgGALgGAGQgMAJgJABQAJAAAJAKQAIAIAHAKIAgAzQADAFgBADQgCAEgFAAg");
	this.shape.setTransform(9.4,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,18.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA6BaQgFABgEgEQgDgEAAgEIAAh0IhAB0QgDAEgGAEQgFAEgFgBIgqAAQgFABgEgEQgDgEAAgEIAAidQAAgFADgDQAEgDAFgBIAWAAQAFABAEADQADADAAAFIAAB9IBGh9QADgFAFgDQAFgDAFgBIAlAAQAFABAEADQADADAAAFIAACdQAAAEgDAEQgEAEgFgBg");
	this.shape.setTransform(9.3,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,18.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA4BaQgFABgEgEQgDgDAAgFIAAhBIhWAAIAABBQAAAFgEADQgDAEgFgBIgXAAQgFABgEgEQgEgEAAgEIAAidQAAgFAEgDQAEgDAFgBIAXAAQAFABADADQAEADAAAFIAAA6IBWAAIAAg6QAAgFADgDQAEgDAFgBIAXAAQAFABADADQAEADAAAFIAACdQAAAEgEAEQgDAEgFgBg");
	this.shape.setTransform(9.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,18.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhRBaQgFABgDgEQgEgEAAgEIAAidQAAgFAEgDQADgDAFgBIBmAAQAMABAMACQAMAEAJAFQAKAGAFAKQADAFABAGIACANQAAALgEAHQgEAIgJAIQAGADAFADQAEAEADAGQADAFACAHIABAMQAAANgGALQgFAKgJAHQgKAHgMADQgMAEgNgBgAgtA4IBHAAQAKAAAFgGQAFgFAAgLQAAgJgFgHQgFgFgKAAIhHAAgAgtgTIBCAAQAIAAAFgFQAFgEAAgJQAAgIgFgGQgFgEgIAAIhCAAg");
	this.shape.setTransform(9.4,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,18.2);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA6BaQgFABgEgEQgDgEAAgEIAAh0IhAB0QgDAEgGAEQgFAEgFgBIgqAAQgFABgEgEQgDgEAAgEIAAidQAAgFADgDQAEgDAFgBIAWAAQAFABAEADQADADAAAFIAAB9IBGh9QADgFAFgDQAFgDAFgBIAlAAQAFABAEADQADADAAAFIAACdQAAAEgDAEQgEAEgFgBg");
	this.shape.setTransform(9.3,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,18.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLBaQgEABgEgEQgEgDAAgFIAAiFIg4AAQgFAAgEgDQgDgDAAgFIAAgNQAAgFADgDQAEgDAFgBICfAAQAFABAEADQADADAAAFIAAANQAAAFgDADQgEADgFAAIg5AAIAACFQAAAFgDADQgEAEgFgBg");
	this.shape.setTransform(9.3,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,18.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgqBZQgJgCgIgFQgIgEgHgFQgGgHgFgHQgFgHgEgJQgDgJgCgLQgCgLAAgMQAAgLACgLQACgLADgJQAEgJAFgHQAFgHAGgHQAHgFAIgEQAIgEAJgDQANgDAdgDIAXACQALABAJADQAKADAIAEQAIAEAGAFQAHAHAFAHQAFAHADAJIAFAUQACALAAALQAAAMgCALIgFAUQgDAJgFAHQgFAHgHAHQgGAFgIAEQgIAFgKACQgJADgLABIgXABQgdgCgNgDgAgXg3QgKAEgHAIQgHAHgDAMQgDAKAAAOQAAAPADAKQADAMAHAIQAHAHAKAEQAKAEANAAQAOAAALgEQAKgEAHgHQAGgIADgMQADgKAAgPQAAgOgDgKQgDgMgGgHQgHgIgKgEQgLgEgOAAQgNAAgKAEg");
	this.shape.setTransform(10.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,19);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPBaQgFABgEgEQgDgEAAgEIAAidQAAgFADgDQAEgDAFgBIBfAAQASAAAOAEIANAGIALAIQAFAEAEAGQAEAFACAGQADAIABAHIABARIgBASQgBAFgDAHQgCAGgEAGQgEAGgFAEIgLAIIgNAFQgOAEgSAAIg7AAIAAAdQAAAEgEAEQgDAEgFgBgAgrAOIAsAAIARgBQAJgCAFgEQAGgDADgFQAEgHAAgLQAAgKgEgHQgDgIgGgDQgFgEgJgCIgRgBIgsAAg");
	this.shape.setTransform(9.3,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,18.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA6BaQgFABgDgEQgEgEAAgEIAAiFIhbAAIAACFQAAAEgDAEQgEAEgFgBIgYAAQgFABgDgEQgEgEAAgEIAAidQAAgFAEgDQADgDAFgBICjAAQAFABADADQAEADAAAFIAACdQAAAEgEAEQgDAEgFgBg");
	this.shape.setTransform(9.4,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,18.2);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA6B4QgFAAgEgEQgDgDAAgFIAAh0IhAB0QgDAFgGADQgFAEgFAAIgqAAQgFAAgEgEQgDgDAAgFIAAicQAAgFADgEQAEgDAFAAIAWAAQAFAAAEADQADAEAAAFIAAB9IBGh9QADgFAFgEQAFgDAFAAIAlAAQAFAAAEADQADAEAAAFIAACcQAAAFgDADQgEAEgFAAgAgQhNQgIgDgFgFQgGgFgDgGQgDgIAAgIQAAgHAHAAIAKAAQAHAAACAHQACAEAEADQAEACAFAAQAGAAAEgCQAEgDACgEQACgHAHAAIAKAAQAHAAAAAHQAAAIgDAIQgDAGgGAFQgFAFgIADQgIACgJAAQgIAAgIgCg");
	this.shape.setTransform(9.3,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,24.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhIBaQgFABgDgEQgEgEAAgEIAAidQAAgFAEgDQAEgDAEgBICRAAQAFABADADQAEADAAAFIAAANQAAAFgEADQgDADgFAAIhtAAIAAAlIBdAAQAFABAEADQADADAAAFIAAAKQAAAFgDAEQgEADgFAAIhdAAIAAAlIBtAAQAEABAEADQADADAAAGIAAAMQAAAEgDAEQgEAEgFgBg");
	this.shape.setTransform(8.5,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,18.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhNBaQgFABgDgEQgDgDgBgFIAAidQABgFADgDQADgDAFgBICNAAQAFABAEADQAEADAAAFIAAANQAAAFgEADQgEADgEAAIhqAAIAAAfIA9AAQAPAAAMAEQANADAKAHQAJAHAFAJQAFAQABAKIgCANIgEANQgFAKgJAIQgKAGgNAEQgMAEgPgBgAgpA2IA9AAQALABAFgGQAGgFAAgLQAAgLgGgFQgFgGgLAAIg9AAg");
	this.shape.setTransform(9,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,18.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBaQgKgBgJgDQgJgDgHgEQgIgEgGgGQgGgGgEgGIgIgQIgEgTQgCgLAAgLQAAgKACgKIAEgTIAIgQQAEgIAGgFQAGgGAIgEQAHgEAJgDQAJgDAKgBIAwgCQAOABAMADQAOADAKAIQALAHAGAKQADAFABAHQACAGAAAGQAAAIgFADQgEAEgEAAIgPAAQgGAAgEgEQgFgDgDgIQgFgJgHgFQgIgFgLgBIgVAAQgOABgJACQgKADgFAGQgFAHgCALQgDAKAAAPQAAAQADAKQACALAFAGQAFAHAKADQAJACAOAAIAXAAQAMAAAIgEQAHgGAEgKQAEgHAFgEQAEgCAGAAIAPAAQANACAAALQAAAHgCAHIgFALQgGAKgLAIQgKAGgNAEQgNADgNAAg");
	this.shape.setTransform(9.9,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,18.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.oblakos();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,112);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.098)").ss(3,1,1).p("AJv2/QB/YbIpVkAqd2HQijW5nWU/");
	this.shape.setTransform(86.8,150.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:true},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,2.1,263.6,297.5);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sam2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,572,155);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.498,1],-20.2,0,20.3,0).s().p("AjJHFIAAuJIGTAAIAAOJg");
	this.shape.setTransform(20.2,45.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,90.7);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sam11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,51);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-57.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-22,115,44);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-367,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367,-225,734,450);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFASQgGgCgEgGQgEgFABgFQAAgHAEgFIAFgDQADgCAGAAIAAgBQAGAAAFAEIAEADIADAHIABAEQABAEgEAGQgEAGgGACIgGABIgFgBg");
	this.shape.setTransform(12.4,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// Слой 1 - копия
	this.instance = new lib.Символ50();
	this.instance.setTransform(12.5,12.5,0.328,0.328,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.14,scaleY:0.14},2).wait(1).to({scaleX:1,scaleY:1},0).to({scaleX:0.42,scaleY:0.42},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(12.5,12.5,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.14,scaleY:0.14},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27,27);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.setTransform(12.5,12.5,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(12.5,12.5,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27,27);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(57.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,44);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(57.5,22,1,1,0,0,0,57.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:53.9},6,cjs.Ease.get(-1)).to({x:37.5},8,cjs.Ease.get(1)).to({x:48.2},8).to({x:57.5},7,cjs.Ease.get(1)).wait(15).to({x:62.2},7).to({x:67.5},8,cjs.Ease.get(1)).to({x:62.2},8).to({x:57.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,44);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ41();
	this.instance.setTransform(283.2,126.1,1,1,0,0,0,20.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(283.3,126.3,1,1,0,0,0,24.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ39();
	this.instance_2.setTransform(280.5,156.5,1,1,0,0,0,280.5,156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,561,313);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 34
	this.instance = new lib.Символ34();
	this.instance.setTransform(297,18.7,1,1,0,0,0,9.8,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:9.2,rotation:11},2).to({regY:9.1,rotation:0},2).wait(1));

	// Символ 33
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(277.5,18.6,1,1,0,0,0,9.4,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:9.5,rotation:-8},2).to({regX:9.4,rotation:0},2).wait(1));

	// Символ 32
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(255.1,18.7,1,1,0,0,0,9.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:9.3,rotation:7,x:255.2},2).to({regX:9.2,rotation:0,x:255.1},2).wait(1));

	// Символ 31
	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(233.2,18.7,1,1,0,0,0,9.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-9.2,y:18.8},2).to({rotation:0,y:18.7},2).wait(1));

	// Символ 30
	this.instance_4 = new lib.Символ30();
	this.instance_4.setTransform(212,18.7,1,1,0,0,0,9.4,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:9.3,rotation:9,x:211.9},2).to({regX:9.4,rotation:0,x:212},2).wait(1));

	// Символ 29
	this.instance_5 = new lib.Символ29();
	this.instance_5.setTransform(189.6,18.7,1,1,0,0,0,9.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-6.2,x:189.7},2).to({rotation:0,x:189.6},2).wait(1));

	// Символ 28
	this.instance_6 = new lib.Символ28();
	this.instance_6.setTransform(169.1,18.7,1,1,0,0,0,9.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:8.5},2).to({rotation:0},2).wait(1));

	// Символ 27
	this.instance_7 = new lib.Символ27();
	this.instance_7.setTransform(148.6,18.7,1,1,0,0,0,10.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-17},2).to({rotation:0},2).wait(1));

	// Символ 26
	this.instance_8 = new lib.Символ26();
	this.instance_8.setTransform(127.8,18.7,1,1,0,0,0,9.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:9.2,rotation:11},2).to({regY:9.1,rotation:0},2).wait(1));

	// Символ 25
	this.instance_9 = new lib.Символ25();
	this.instance_9.setTransform(105.6,18.7,1,1,0,0,0,9.4,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-7.2},2).to({rotation:0},2).wait(1));

	// Символ 24
	this.instance_10 = new lib.Символ24();
	this.instance_10.setTransform(74.1,15.7,1,1,0,0,0,9.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:9.3,rotation:9.7},2).to({regX:9.2,rotation:0},2).wait(1));

	// Символ 23
	this.instance_11 = new lib.Символ23();
	this.instance_11.setTransform(54.1,18.7,1,1,0,0,0,8.5,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-8.5},2).to({rotation:0},2).wait(1));

	// Символ 22
	this.instance_12 = new lib.Символ22();
	this.instance_12.setTransform(34,18.7,1,1,0,0,0,9,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:8.7},2).to({rotation:0},2).wait(1));

	// Символ 21
	this.instance_13 = new lib.Символ21();
	this.instance_13.setTransform(12.7,18.7,1,1,0,0,0,9.9,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-9.4,x:12.6},2).to({rotation:0,x:12.7},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,3.7,304,24.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(902.1,34.2,0.338,0.338,0,0,0,124.5,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:56,scaleX:1,scaleY:1,x:739.3,y:83.3},23).to({scaleX:1.79,scaleY:1.79,x:848.2,y:470.5},10,cjs.Ease.get(1)).wait(30).to({scaleX:1,scaleY:1},0).wait(1).to({regY:55.9,scaleX:0.19,scaleY:0.19,x:938.7,y:23.1},0).to({regY:56,scaleX:1,scaleY:1,x:848.2,y:182.5},39,cjs.Ease.get(-1)).to({scaleX:1.96,scaleY:1.96,y:470.5},10,cjs.Ease.get(1)).wait(31).to({regY:55.9,scaleX:0.19,scaleY:0.19,x:938.7,y:23.1},0).to({regX:124.4,scaleX:0.31,scaleY:0.31,x:909.2,y:32},15,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(206.2,32.8,0.273,0.273,0,0,0,124.5,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:56,scaleX:1,scaleY:1,x:294.3,y:99.2},39,cjs.Ease.get(-1)).to({scaleX:1.87,scaleY:1.87,y:427.2},10,cjs.Ease.get(1)).wait(31).to({regY:56.1,scaleX:0.27,scaleY:0.27,x:206.2,y:32.8},0).to({regY:56,scaleX:1,scaleY:1,x:398.4,y:176.9},39,cjs.Ease.get(-1)).to({scaleX:1.64,scaleY:1.64,x:294.3,y:403.2},10,cjs.Ease.get(1)).wait(30).to({scaleX:1,scaleY:1,y:387.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172.2,15.3,772,37.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(367,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,734,450);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(-91.6,116.1,1,1,0,0,0,124.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(367,225,1,1,0,0,0,367,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,0,778,450);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(367,225,1,1,0,0,0,367,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:228.9},24,cjs.Ease.get(-1)).to({y:241},25,cjs.Ease.get(1)).to({y:233},25).to({y:225},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,0,778,450);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkVEVQhyhyAAijQAAihByh0QBzhyCiAAQCjAAByByQBzB0AAChQAACjhzByQhyB0ijgBQiiABhzh0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:18.9,y:45.3}).wait(99).to({graphics:null,x:0,y:0}).wait(1));

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(18.9,45.3,1,1,0,0,0,20.2,45.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5400,x:20.2},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,6,40.5,78.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(68.5,25.5,1,1,0,0,0,68.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(67.8,12.7,0.496,0.496,0,0,0,20.2,45.4);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(67.7,65.1,1,1,0,0,0,85.7,42.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,-9.9,263.6,331.8);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.setTransform(312.8,249.9,1,1,0,0,0,57.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(280.5,124.5,1,1,0,0,0,280.5,156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(288.3,173,6.379,6.379,0,0,0,20.2,45.3);
	this.instance_2.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-115.9,561,578.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(152.8,13.5,1,1,0,0,0,155.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304,24.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ47();
	this.instance.setTransform(286.5,-52.9,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(286,77.5,1,1,0,0,0,286,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(288.8,28.1,1.924,1.924,0,0,0,20.2,45.3);
	this.instance_2.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-66.4,572,221.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(68.5,32.4,1,1,0,0,0,68.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.5,x:11.6},9,cjs.Ease.get(-1)).to({rotation:-7.5,x:-51.5,y:32.5},10,cjs.Ease.get(1)).to({rotation:-3.6,x:8.5,y:32.4},10,cjs.Ease.get(-1)).to({rotation:0,x:68.5},10,cjs.Ease.get(1)).to({rotation:3,x:134.5},11,cjs.Ease.get(-1)).to({regY:25.6,rotation:5.5,x:188.6,y:32.5},9,cjs.Ease.get(1)).to({rotation:2.6,x:128.5,y:32.4},10,cjs.Ease.get(-1)).to({regY:25.5,rotation:0,x:68.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,-3,263.6,331.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(68.5,20.5,1,1,0,0,0,68.5,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:36},14,cjs.Ease.get(-1)).to({y:52.5},15,cjs.Ease.get(1)).wait(30).to({y:36.5},15,cjs.Ease.get(-1)).to({y:20.5},15,cjs.Ease.get(1)).to({y:4.5},15,cjs.Ease.get(-1)).to({y:-11.5},15,cjs.Ease.get(1)).wait(30).to({y:4.5},15,cjs.Ease.get(-1)).to({y:20.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.1,-9.9,263.6,331.8);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ44 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ35();
	this.instance.setTransform(152,12.2,1,1,0,0,0,152,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-77.8},4).to({y:12.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304,24.5);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(280.5,188.5,1,1,0,0,0,280.5,156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:193.5},7,cjs.Ease.get(-1)).to({y:198.5},7,cjs.Ease.get(1)).to({y:193.2},8,cjs.Ease.get(-1)).to({y:188.5},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-83.9,561,578.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(286,125.1,1,1,0,0,0,286,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:115.4},14,cjs.Ease.get(-1)).to({y:105.1},15,cjs.Ease.get(1)).to({y:115.1},15,cjs.Ease.get(-1)).to({y:125.1},15,cjs.Ease.get(1)).to({y:132.5},14,cjs.Ease.get(-1)).to({y:141.1},16,cjs.Ease.get(1)).to({y:132.5},16,cjs.Ease.get(-1)).to({y:125.1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18.9,572,221.5);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ46 = function(mode,startPosition,loop) {
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
	this.cir = new lib.sprite113();
	this.cir.setTransform(20.1,18.2,0.499,0.499,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).wait(4).to({x:80.1},0).wait(5).to({x:20.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,39,38.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(280.5,156.5,1,1,0,0,0,280.5,156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-83.9,561,578.3);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(286,95.5,1,1,0,0,0,286,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:278.3},11,cjs.Ease.get(-1)).to({rotation:-2.2,x:270},12,cjs.Ease.get(1)).to({rotation:0,x:278},12,cjs.Ease.get(-1)).to({x:286},12,cjs.Ease.get(1)).to({x:294},12,cjs.Ease.get(-1)).to({rotation:1.4,x:302},12,cjs.Ease.get(1)).to({rotation:0,x:293.5},13,cjs.Ease.get(-1)).to({x:286},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18.9,572,221.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.parent.fon.x = - stage.mouseX / 10;
		this.parent.fon.y = - stage.mouseY / 10;
			
		this.parent.sm1.x = - stage.mouseX / 10;
		this.parent.sm1.y = - stage.mouseY / 10;
		}
	}
	this.frame_16 = function() {
		this.parent.fon.x=0-30;
		this.parent.fon.y=25;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1).call(this.frame_16).wait(16));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(286,48,1,1,0,0,0,286,95.5);

	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(287.7,-30.4,1,1,0,0,0,280.5,156.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.41,scaleY:2.41,x:294,y:75.2},14).to({_off:true},1).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:286,y:48},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-66.4,572,221.5);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.my.gotoAndPlay(1);
			    _this.txt.gotoAndPlay(1);
				_this.mmm.gotoAndPlay(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.my.gotoAndPlay(17);
			    _this.txt.gotoAndPlay(5);
				_this.mmm.gotoAndPlay(5);
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.mmm = new lib.Символ46();
	this.mmm.setTransform(612,279.6,1,1,0,0,0,19.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.mmm).wait(1));

	// Слой 4
	this.txt = new lib.Символ44();
	this.txt.setTransform(323.3,36.9,1,1,0,0,0,152,12.2);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 3
	this.my = new lib.Символ9();
	this.my.setTransform(323,270,1,1,0,0,0,286,77.5);

	this.timeline.addTween(cjs.Tween.get(this.my).wait(1));

	// Слой 2
	this.sm1 = new lib.Символ2();
	this.sm1.setTransform(-41.4,12,1,1,0,0,0,-296.4,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.sm1).wait(1));

	// Слой 1
	this.fon = new lib.Символ15();
	this.fon.setTransform(-30,26,1,1,0,0,0,7,80);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(239.1,98.5,778,487.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
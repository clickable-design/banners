(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/e3.png?1474537877967", id:"e3"},
		{src:"images/f4f4f411.png?1474537877967", id:"f4f4f411"},
		{src:"images/fon1.jpg?1474537877967", id:"fon1"},
		{src:"images/q11.png?1474537877967", id:"q11"},
		{src:"images/q33.png?1474537877967", id:"q33"},
		{src:"images/q44.png?1474537877967", id:"q44"},
		{src:"images/q55.png?1474537877967", id:"q55"},
		{src:"images/q66.png?1474537877967", id:"q66"},
		{src:"images/r4.png?1474537877967", id:"r4"},
		{src:"images/r441111.png?1474537877967", id:"r441111"},
		{src:"images/w21111.png?1474537877967", id:"w21111"}
	]
};



// symbols:



(lib.e3 = function() {
	this.initialize(img.e3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,122);


(lib.f4f4f411 = function() {
	this.initialize(img.f4f4f411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,46);


(lib.fon1 = function() {
	this.initialize(img.fon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,739,370);


(lib.q11 = function() {
	this.initialize(img.q11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,67);


(lib.q33 = function() {
	this.initialize(img.q33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,33);


(lib.q44 = function() {
	this.initialize(img.q44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,16);


(lib.q55 = function() {
	this.initialize(img.q55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,12);


(lib.q66 = function() {
	this.initialize(img.q66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,10);


(lib.r4 = function() {
	this.initialize(img.r4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,74);


(lib.r441111 = function() {
	this.initialize(img.r441111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,125);


(lib.w21111 = function() {
	this.initialize(img.w21111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,210);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AhCHGQgQgGACgQIACgBQgKgUgCggIAAhHQAAgUAPgrQgGgNgCgVQgBg5gBgQQgEgkgWgcQgZggg2gaIgigCIgOgBQiLAAgnBEQgJARgNAdQgNAVgbAAQgaAAgJgRIAAgBIgIgCIAAgXIAVgmIAEgJIAEgMIACgMQAAgMgfiWQAAg3A4hOQA8hVBOglIBNAAQBFACANAGQAMAFAYAAQAXAAAPgFIAAgHQAAguAnAHIAAAAIABgIQAggjBYAQQAwAJBQAZQBEAOAqAYQAYAOA0AtQA1AtAsBOQAtBQAAA3QAAASgNAhQgNAgAAAXQgDAEgGADIgFgLIAAAAQgLAkgRAAQgPAAgGgLIgBgEQgQAAgGgGQgEgJgGgEIgkAAQhpAPgwBDQgPAXg5ASQgLAEgQATQgKAMgWADIgIAaQgIAdgFAbIgEBIIgBAIIABAeQADAgAMAQIgDAGQgDACgIAAgACnBmQAHgDAJgJQAHgHAAgCgAFxg2IADAAIAEgCIgHACg");
	this.shape.setTransform(52.2,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.5,90.9);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q33();
	this.instance.setTransform(-5.9,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-21.5,20,33);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FFFFF").s().p("AprBhQgMgBgKgEQgKgDgJgFQgJgFgHgHQgHgGgFgIQgFgIgEgJQgDgJgCgLQgCgKAAgLQAAgKACgKQACgKADgKQAEgJAFgIQAFgHAHgHQAHgHAJgFQAJgFAKgDQAKgEAMgCQAMgCAOAAQAPAAAbAHQAMADASALQAMAJAHAMQAGALAAAMQAAAGgDACQgDADgFAAIgiAAQgFAAgEgDQgEgCgDgGQgGgJgHgFIgKgEQgGgCgHAAQgMAAgJADQgJAEgGAHQgGAHgEAKQgDALAAAMQAAANADALQAEAKAGAHQAGAHAJAEQAJADAMAAQAHAAAHgCQAGgCAFgDQAIgFAGgLQADgFADgDQAEgDAGAAIAiAAQAFAAADADQADADAAAFQAAAMgHAMQgLAQgIAGQgTALgMAFQgbAFgQAAQgOAAgMgCgEggWABhQgMgBgKgEQgLgDgIgFQgJgFgHgHQgHgGgFgIQgGgIgDgJQgEgJgCgLQgCgKAAgLQAAgKACgKQACgKAEgKQADgJAGgIQAFgHAHgHQAHgHAJgFQAIgFALgDQAKgEAMgCQAMgCANAAQAQAAAaAHQAMADASALQAMAJAHAMQAGALAAAMQAAAGgDACQgCADgGAAIghAAQgGAAgEgDQgDgCgDgGQgGgJgIgFIgKgEQgGgCgHAAQgLAAgJADQgJAEgGAHQgHAHgDAKQgEALAAAMQAAANAEALQADAKAHAHQAGAHAJAEQAJADALAAQAIAAAGgCQAGgCAFgDQAIgFAGgLQADgFAEgDQAEgDAFAAIAiAAQAFAAADADQADADAAAFQAAAMgHAMQgKAQgJAGQgTALgMAFQgbAFgQAAQgNAAgMgCgEAhAABeQgFAAgEgEQgEgFAAgFIAAgTQAAgEAEgEQAEgFAFAAIAbAAQAFAAAEAFQAFAEAAAEIAAATQAAAFgFAFQgEAEgFAAgAdpBeQgJAAAAgJIAAioQAAgKAJAAIClAAQAKAAAAAKIAAAbQAAAJgKAAIhzAAIAAAYIBVAAQAKAAAAAJIAAAZQAAAKgKAAIhVAAIAAAbIBzAAQAKAAAAAKIAAAbQAAAJgKAAgAaUBeQgJAAAAgJIAAioQAAgKAJAAIClAAQAKAAAAAKIAAAbQAAAJgKAAIhzAAIAAAYIBVAAQAKAAAAAJIAAAZQAAAKgKAAIhVAAIAAAbIBzAAQAKAAAAAKIAAAbQAAAJgKAAgAYxBeQgKAAAAgJIAAg9IhOAAIAAA9QAAAJgKAAIgoAAQgJAAAAgJIAAioQAAgKAJAAIAoAAQAKAAAAAKIAAA/IBOAAIAAg/QAAgKAKAAIAoAAQAKAAAAAKIAACoQAAAJgKAAgARgBeQgJAAAAgJIAAioQAAgKAJAAIApAAQAJAAAAAKIAACDIA2AAIAAiDQAAgKAKAAIAoAAQAKAAAAAKIAACDIA2AAIAAiDQAAgKAJAAIApAAQAJAAAAAKIAACoQAAAJgJAAgAP9BeQgKAAAAgJIAAhhIgCAAIhEBhQgIAJgHAAIguAAQgJAAAAgJIAAioQAAgKAJAAIApAAQAJAAAAAKIAABgIADAAIBEhgIAFgHQAFgDAEAAIAuAAQAKAAAAAKIAACoQAAAJgKAAgAMNBeQgKAAAAgJIAAiEIggAAQgHAAgFACQgFABgEADQgHAHgDALIgbBsQgDAJgIAAIgpAAQgFAAgCgDQgDgCABgEIAbhsQAEgQAHgNQAIgNALgJQAHgGATgIQAKgEAagBIBSAAQAJAAAAAKIAACoQAAAJgJAAgAHNBeQgKAAAAgJIAAhhIgCAAIhEBhQgIAJgHAAIguAAQgJAAAAgJIAAioQAAgKAJAAIApAAQAJAAAAAKIAABgIADAAIBEhgIAFgHQAFgDAEAAIAuAAQAKAAAAAKIAACoQAAAJgKAAgADdBeQgKAAAAgJIAAhXIgCAAIglBXQgBADgEADQgEADgFAAIghAAQgGAAgEgDQgEgDgBgDIgkhXIgDAAIAABXQAAAJgKAAIgoAAQgJAAAAgJIAAioQAAgKAJAAIA5AAQAFAAAEADQAEADACAEIAvBwIACAAIAwhwQABgEAEgDQAEgDAGAAIA4AAQAKAAAAAKIAACoQAAAJgKAAgAhNBeQgJAAAAgJIAAhhIgDAAIhDBhQgIAJgHAAIguAAQgJAAAAgJIAAioQAAgKAJAAIAoAAQAKAAAAAKIAABgIADAAIBDhgIAGgHQAEgDAFAAIAuAAQAJAAAAAKIAACoQAAAJgJAAgAk9BeQgJAAAAgJIAAg9IhPAAIAAA9QAAAJgJAAIgpAAQgJAAAAgJIAAioQAAgKAJAAIApAAQAJAAAAAKIAAA/IBPAAIAAg/QAAgKAJAAIApAAQAJAAAAAKIAACoQAAAJgJAAgAtVBeQgIAAgEgJIgJgYIhVAAIgKAYQgEAJgIAAIgrAAQgEAAgDgDQgCgDACgDIBMioQAEgKAIAAIA3AAQAIAAAEAJIBMCpQACADgDADQgCADgEAAgAt9AQIgWg0IgDAAIgXA0IAwAAgAzQBeQgJAAAAgJIAAioQAAgKAJAAIBiAAQAOAAAVAEQAPAEAKAHQAKAIAFAJQAEAKAAAKQAAAbgbAJIAAADQApAFAAAjQAAAMgFAKQgFAKgKAIQgLAHgPAEQgWAFgPAAgAyeAzIA6AAQAKAAAGgFQAFgEAAgHQAAgHgFgFQgGgEgKgBIg6AAgAyegXIAwAAQAIAAAFgEQAEgDAAgGQAAgGgEgEQgEgEgJAAIgwAAgA2wBeQgJAAAAgJIAAioQAAgKAJAAIBfAAQAQAAAZAFQAJADAHAEQAIADAFAFQAGAEAEAGQAFAGACAFQAGANAAAPQAAAPgGAKQgCAGgFAGQgEAGgGAEQgFAFgIADQgHAEgJACQgZAGgQAAIgtAAIAAAqQAAAJgJAAgA1+AAIAtAAQAHAAAGAAQAGgCAEgEQAEgDACgFQACgEAAgGQAAgGgCgFQgCgEgEgEQgEgDgGgCQgGgCgHAAIgtAAgA6FBeQgJAAAAgJIAAioQAAgKAJAAIClAAQAKAAAAAKIAAAbQAAAJgKAAIhzAAIAAAYIBVAAQAKAAAAAJIAAAZQAAAKgKAAIhVAAIAAAbIBzAAQAKAAAAAKIAAAbQAAAJgKAAgA7oBeQgKAAAAgJIAAiEIhOAAIAACEQAAAJgKAAIgoAAQgJAAAAgJIAAioQAAgKAJAAICyAAQAKAAAAAKIAACoQAAAJgKAAgEAg9AAhQgJAAAAgJIgGhrQAAgFADgCQADgDAEAAIArAAQAEAAADADQADACAAAFIgGBrQAAAJgJAAg");
	this.shape.setTransform(215.7,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.5,20);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q44();
	this.instance.setTransform(-6,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6.3,15,16);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q66();
	this.instance.setTransform(-4.3,-6.3,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6.3,13.3,12.5);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.q55();
	this.instance.setTransform(-6.2,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.3,15,12);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("EhKbAEiIAApDMCU3AAAIAAJDg");
	this.shape.setTransform(476.5,29.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,953,58.1);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgMBeQgFAAgEgEQgEgFAAgFIAAgSQAAgFAEgEQAEgFAFAAIAZAAQAFAAAEAFQAFAEAAAFIAAASQAAAFgFAFQgEAEgFAAgAgPAhQgJAAAAgJIgGhrQAAgFADgCQADgDAEAAIApAAQAEAAADADQADACAAAFIgGBrQAAAJgJAAg");
	this.shape.setTransform(3.1,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.3,18.9);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAxCBQgJAAAAgKIAAhiIgDAAIhBBiQgIAKgHAAIguAAQgJAAAAgKIAAioQAAgJAJAAIAoAAQAKAAAAAJIAABhIADAAIBBhhIAGgGQAEgDAFAAIAuAAQAJAAAAAJIAACoQAAAKgJAAgAgZhOQgKgEgHgGQgHgGgEgKQgEgIAAgLQAAgFAGAAIAZAAQAGAAABAFQABAGAFAEQAFAFAHAAQAFAAAEgFQAFgEABgGQABgFAGAAIAaAAQAFAAAAAFQAAALgEAIQgDAKgHAGQgIAGgKAEQgKAEgLAAQgNAAgLgEg");
	this.shape.setTransform(10,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,25.9);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhRBeQgJAAAAgKIAAinQAAgKAJAAICjAAQAJAAAAAKIAAAbQAAAJgJAAIhxAAIAAAYIBTAAQAJAAAAAJIAAAZQAAAKgJAAIhTAAIAAAbIBxAAQAJAAAAAJIAAAbQAAAKgJAAg");
	this.shape.setTransform(9.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.4,18.9);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAwBeQgJAAAAgKIAAg8IhNAAIAAA8QAAAKgKAAIgoAAQgJAAAAgKIAAinQAAgKAJAAIAoAAQAKAAAAAKIAAA/IBNAAIAAg/QAAgKAJAAIAoAAQAKAAAAAKIAACnQAAAKgKAAg");
	this.shape.setTransform(9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,18.9);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiFBeQgJAAAAgKIAAinQAAgKAJAAIApAAQAKAAAAAKIAACDIA2AAIAAiDQgBgKAKAAIAmAAQAKAAAAAKIAACDIA2AAIAAiDQAAgKAJAAIApAAQAKAAAAAKIAACnQAAAKgKAAg");
	this.shape.setTransform(14.3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.6,18.9);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgTBeQgJAAAAgKIAAinQAAgKAJAAIAnAAQAJAAAAAKIAACnQAAAKgJAAg");
	this.shape.setTransform(3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,18.9);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhUBeQgJAAAAgKIAAinQAAgKAJAAIApAAQAJAAAAAKIAAAvIAmAAQAPgBAZAGQALADARALIAKAJIAHAJQAFANAAAOQAAAPgFALIgHALIgKAKQgRALgLADQgZAFgPAAgAgiAzIAmAAQAHAAAFgCQAFgCAEgDQAHgGAAgKQAAgKgHgHQgEgDgFgBQgFgCgHAAIgmAAg");
	this.shape.setTransform(9.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,18.9);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhYBeQgJAAAAgKIAAinQAAgKAJAAIBcAAQAQAAAaAFQAIACAIAFQAHADAGAFQAGAFAEAFQAFAGACAFQAGANAAAPQAAAPgGAKQgCAHgFAFQgEAFgGAFQgGAEgHAEQgIAEgIACQgaAGgQAAIgqAAIAAApQAAAKgKAAgAgmAAIAqAAQAIAAAGAAQAGgCAEgEQADgDACgFQADgFAAgFQAAgGgDgFQgCgEgDgEQgEgDgGgCQgGgCgIAAIgqAAg");
	this.shape.setTransform(9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,18.9);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AA+BeQgIAAgEgKIgJgXIhTAAIgKAXQgEAKgIAAIgrAAQgEAAgDgDQgCgCACgFIBMinQAEgKAIAAIA1AAQAIAAAEAJIBMCoQACAFgDACQgCADgEAAgAAWAQIgWg0IgBAAIgXA0IAuAAg");
	this.shape.setTransform(11.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,18.9);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhYBeQgJAAAAgKIAAinQAAgKAJAAICgAAQAKAAAAAKIAAAbQAAAJgKAAIhuAAIAAAWIA0AAQAPAAAWAEQAQAFAKAIQAKAIAGAJQAFALAAANQAAANgFALQgGALgKAJQgKAIgQAEQgWAFgPAAgAgmAzIA0AAQAKAAAGgGQAGgEAAgIQAAgHgGgFQgGgGgKABIg0AAg");
	this.shape.setTransform(9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,18.9);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgSBhQgNgBgJgEQgLgDgJgFQgIgFgHgHQgHgGgGgIQgFgIgEgJQgDgJgCgLQgCgKAAgLQAAgKACgKQACgKADgKQAEgJAFgIQAGgHAHgHQAHgHAIgFQAJgFALgDQAJgEANgCQALgCAMAAQAPAAAbAHQAMADASALQAMAJAHAMQAGALAAAMQAAAGgDACQgDADgFAAIghAAQgGAAgEgDQgDgCgDgGQgHgJgHgFIgKgEQgGgCgHAAQgKAAgIADQgKAEgFAHQgHAHgDAKQgEALAAAMQAAANAEALQADAKAHAHQAFAHAKAEQAIADAKAAQAHAAAHgCQAGgCAFgDQAIgFAGgLQADgFAEgDQADgDAGAAIAiAAQAFAAADADQADADAAAFQAAAMgHAMQgLAQgIAGQgTALgMAFQgbAFgQAAQgMAAgLgCg");
	this.shape.setTransform(10.6,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,20);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAxCBQgJAAAAgKIAAhiIgDAAIhBBiQgIAKgHAAIguAAQgJAAAAgKIAAioQAAgJAJAAIAoAAQAKAAAAAJIAABhIADAAIBBhhIAGgGQAEgDAFAAIAuAAQAJAAAAAJIAACoQAAAKgJAAgAgZhOQgKgEgHgGQgHgGgEgKQgEgIAAgLQAAgFAGAAIAZAAQAGAAABAFQABAGAFAEQAFAFAHAAQAFAAAEgFQAFgEABgGQABgFAGAAIAaAAQAFAAAAAFQAAALgEAIQgDAKgHAGQgIAGgKAEQgKAEgLAAQgNAAgLgEg");
	this.shape.setTransform(10,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,25.9);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AA+BeQgIAAgEgKIgJgXIhTAAIgKAXQgEAKgIAAIgrAAQgEAAgDgDQgCgCACgFIBMinQAEgKAIAAIA1AAQAIAAAEAJIBMCoQACAFgDACQgCADgEAAgAAWAQIgWg0IgBAAIgXA0IAuAAg");
	this.shape.setTransform(11.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,18.9);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhYBeQgJAAAAgKIAAinQAAgKAJAAIBcAAQAQAAAaAFQAIACAIAFQAHADAGAFQAGAFAEAFQAFAGACAFQAGANAAAPQAAAPgGAKQgCAHgFAFQgEAFgGAFQgGAEgHAEQgIAEgIACQgaAGgQAAIgqAAIAAApQAAAKgKAAgAgmAAIAqAAQAIAAAGAAQAGgCAEgEQADgDACgFQADgFAAgFQAAgGgDgFQgCgEgDgEQgEgDgGgCQgGgCgIAAIgqAAg");
	this.shape.setTransform(9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,18.9);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhLBeQgJAAAAgKIAAinQAAgKAJAAICWAAQAKAAAAAKIAAAbQAAAJgKAAIhjAAIAACDQAAAKgKAAg");
	this.shape.setTransform(8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,18.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAxBeQgJAAAAgKIAAhgIgDAAIhBBgQgIAKgHAAIguAAQgJAAAAgKIAAinQAAgKAJAAIAoAAQAKAAAAAKIAABgIADAAIBBhgIAGgHQAEgDAFAAIAuAAQAJAAAAAKIAACnQAAAKgJAAg");
	this.shape.setTransform(10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,18.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgYBhQgMgBgKgEQgKgDgJgFQgJgFgHgHQgHgGgFgIQgFgIgEgJQgDgJgCgLQgCgKAAgLQAAgKACgKQACgKADgKQAEgJAFgIQAFgHAHgHQAHgHAJgFQAJgFAKgDQAKgEAMgCQAMgCAMAAQANAAAMACQAMACAKAEQAKADAJAFQAJAFAHAHQAHAHAFAHIAJARQAEAKACAKQABAKAAAKQAAALgBAKQgCALgEAJQgEAJgFAIQgFAIgHAGQgHAHgJAFQgJAFgKADQgKAEgMABQgMACgNAAQgMAAgMgCgAgTgzQgJAEgGAHQgGAHgEAKQgDALAAAMQAAANADALQAEAKAGAHQAGAHAJAEQAJADAKAAQALAAAJgDQAJgEAGgHQAGgHAEgKQADgLAAgNQAAgMgDgLQgEgKgGgHQgGgHgJgEQgJgDgLAAQgKAAgJADg");
	this.shape.setTransform(11.1,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,20);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAwBeQgJAAAAgKIAAiDIhNAAIAACDQAAAKgKAAIgoAAQgJAAAAgKIAAinQAAgKAJAAICwAAQAKAAAAAKIAACnQAAAKgKAAg");
	this.shape.setTransform(9.9,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,18.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgVDcQgLgJAAgIIABgQQgHgGgDgVIgEgrQgDgcAAgtQAAgTAEgSQAEgQABgFQAAgHgSgpIgTgtQgEgPgJglIgGgfIgEgBQgHgBAAgIQAAgSApgFQAigFAFAMIADAAQALAAAJAGIADAFQAIABAJAFIAFADQADgMAYAWQAbAaAAAZQAAAYgSAeQgVAjgiAIIAAAFIgDAXIAJACQAJACARAAQAJAAALAGQALAFAKALIAQASQAPAUAAAzQAAASgDAHQgGAOgSAJQgEACgEAEIgKAHQgVAIgCACQgGAFgNAGIgGACIgHARQgHASgMAAIACABIgBABQgDAAgHgGgAgaAMQgEARAAAQQAAApAGAsIAGAqIAFABIAJAAQABgFAIAAIADABIALgGIAngQQAUgLAHgLQADgHAAgOQABhfhMAAQgPAAgJgCIgJABIgEgBIgCAFgAgOg3IASgBQACgEALgGQAMgGACgCQAKgNADgIQAOggAAgHQgBgNgRgVIgOgPQgCADgGAAQgKAAgLgHIgIgGQgHgBgJgEQgFgDgCgDIgRAAQgKAAgKAJIgEAFIADAIQADAIAAAFQgBAUALAgIAUAuIAFANIAFAAQANAAACADg");
	this.shape.setTransform(10.8,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,45.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAZHxQgTgGgPgDQgGgBAAgDIAAAAQgegIgdgLQg4gXAAgNIABgEQgPgUgBg1IAEhWQAAgFgDgLIgEgPIgBgBIg6BBIgkApQgBAVgPAAQgMAAgIgIQgHgGAAgGQAAgLAKACIADABIAkhDQAnhKAAhEIgDgGIgEgHQAAgXAOgfQAGgOADAGIAagaIAtgoQAMgMAWAAQAVABAUgVQAMgLAMgIQAEghAAgMIgBgKIAAhAQgOhDgKgeIgRgzQgOgoAAgFQAAgJAGgDIADgBIgCgaQAAgPADgOQAEgbAKAAIAEABIANgHQATgJAZgGIAWAAIAbABQCKAsAsAnQAEgFAHAGQAPAKADAbQAGApAAATQAAARgBADIgBADIgBAFQAAAGgHAXQgGAUADAIQAEAOAAAGQAAAegEAhIgBAFQgHA0gQAAQgHAAgBgEIAAgEIAJgmIAFgaIAAgGIgBgNQgDgEgCgGIgDgQIAAgCQgDgIgGgHIgDgFQgJgCgPAAQgEAYgFBPQgFA4gJAJIAAAWQAAAfgCAWIgBAgQgBAVgKAAIgDgBQgFA2gkBkQgWA/gkBdIAAAGQAQAAACAHQABAEgEAJQAIAGA3AbQAiAQAAAQQAAATgaAMg");
	this.shape.setTransform(28.8,49.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.6,99.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgbALQgGgGAAgLQAAgSAhACQAiACAAAZQAAASgSAAQgeAAgNgMg");
	this.shape.setTransform(3.5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,4.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhECcQgSAAgIgKQgFgGAAgEIABgFIgBgEQAAgEAIgRQAIgRAAgPQAAgNAHgbQAIghACgNIAJgsIAAgDIgCgEIgBgGQgBggAagYQAXgWAfgHQAhgHAWALQAaALAAAeQAAACgPARQgPARgCAEQgEAUAAARQgBAGAEAHQADAHAAAHIgVAhQgUAkgCAOIgCAtQgJAjgsAAIgogCg");
	this.shape.setTransform(10.1,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,31.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AggATQgDgDAAgGQAAgLAIgKQAPgRAmADQAMADgCANQAAAJgKAKQgMAQgVAAQgTAAgGgHg");
	this.shape.setTransform(3.6,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.3,5.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.f4f4f411();
	this.instance.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.7,42,46);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.w21111();
	this.instance.setTransform(-0.6,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,257,210);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhuD7QgDg4gBgKIgOg/QgIgdAAgcIgNgmIgchZQAAh8COhyIDCAAQAKADAFAGQAEAEAAAEQAAAkg2AuQhIA+gOAXQgHAJgcBQIgHAYIA3AQQA+AZAaAeQAXAcAFATQACAGgBAfQAAAmgBAEQgEATgbAaQgNANg3AWQhDAbguAAQg1AAgMgygAiMhAQAAAgALAfIABgHQAGgnAAgzQAAgbAEgXQgWAtAAAng");
	this.shape.setTransform(17.9,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.7,60.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0nNlQgRgJAAgPQAAgHAmgsQAtg1AjgOQAjgPBTgsQBQgmBAgHQDpgZCEA6QBpAuAABGQAAARghAbQgrAig7AAIg9gGIg9gGIilAFQgvAOguALQhZAXg2AAQiFAAgqgWgAmNLNIgCgKQAAgSBPghQBSgiA6gDIAKgEQgKhEgbhuQggiIgJguIAAiyQgFgYAAguQAAhHAfhFQAhhLBEg/QAVgUAxg4QAxgyAsgYQCHhEDIB1QAMAQAMASQANgTARgSQBjhuDsiYQAYgPCShzQBohTBNgbQCDgtAtB2QAVA2AABfQAAAGgFAcIgEAiQAAAbAQA8IAQA5QAAADgVA1QgWA6gGAcQgBAEADAcQADAagFARQgRA1hvAAQgTAAgOgGQgGARgOAhIgnBZQgXAyhTBjQgPAAgDgUIgBgVQAAgKAKg7QAMhGAIgTQAPgjAegwQAPgZAxgMIALgCQgEgIgDgKQgFgSgBgVIABgTQAJhiAAgMIAAguQgGglgbAAQglAAhIByQhfCVgKALIg6BFQgkAsgiAYQgzAogtAeQg8AngjANQAIBFAABEQAAAugKAUQgTAkhGAuIhgBMQgwAmhKAbQgqAPhlAwQhMAmg4AdQhaAwjgBHQgRAAgGgKg");
	this.shape.setTransform(133.8,89.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.6,178.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.fon1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,739,370);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(-0.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.8,-27.3,278.8,56.9);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-28.2,152.5,56.3);


(lib.Символ28копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("APel0QGbCbAADZQAADambCaQmbCbpDAAQpDAAmaibQmbiaAAjaQAAjZGbibQGaiaJDAAQJDAAGbCag");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.98)").s().p("AvdF0QmbiaAAjaQAAjZGbibQGaiaJDAAQJDAAGbCaQGbCbAADZQAADambCaQmbCbpDAAQpDAAmaibg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.1,-53.7,282.3,107.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.8)").s().p("AgCCCIh/kCIEDAAIh/ECg");
	this.shape.setTransform(22,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.setTransform(52.2,45.4,1,1,0,0,0,52.2,45.4);
	this.instance.alpha = 0.371;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(215.7,10,1,1,0,0,0,215.7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.5,20);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ56();
	this.instance.setTransform(218.2,17.5,1,1,0,0,0,215.7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AprBiQgMgCgKgEQgKgDgJgFQgJgFgHgHQgHgGgFgJQgFgHgEgKQgDgIgCgLQgCgKAAgLQAAgKACgLQACgKADgJQAEgJAFgIQAFgIAHgGQAHgHAJgFQAJgFAKgDQAKgEAMgBQAMgCAOAAQAPAAAbAFQAMAEASALQAMAKAHALQAGAMAAALQAAAFgDAEQgDACgFAAIgiAAQgFAAgEgCQgEgDgDgGQgGgJgHgFIgKgEQgGgCgHAAQgMAAgJADQgJAEgGAHQgGAHgEAKQgDALAAAMQAAANADALQAEAKAGAHQAGAGAJAFQAJADAMAAQAHAAAHgCQAGgCAFgDQAIgGAGgKQADgFADgDQAEgDAGAAIAiAAQAFAAADADQADADAAAFQAAANgHALQgLAQgIAGQgTAMgMADQgbAHgQgBQgOAAgMgBgEggWABiQgMgCgKgEQgLgDgIgFQgJgFgHgHQgHgGgFgJQgGgHgDgKQgEgIgCgLQgCgKAAgLQAAgKACgLQACgKAEgJQADgJAGgIQAFgIAHgGQAHgHAJgFQAIgFALgDQAKgEAMgBQAMgCANAAQAQAAAaAFQAMAEASALQAMAKAHALQAGAMAAALQAAAFgDAEQgCACgGAAIghAAQgGAAgEgCQgDgDgDgGQgGgJgIgFIgKgEQgGgCgHAAQgLAAgJADQgJAEgGAHQgHAHgDAKQgEALAAAMQAAANAEALQADAKAHAHQAGAGAJAFQAJADALAAQAIAAAGgCQAGgCAFgDQAIgGAGgKQADgFAEgDQAEgDAFAAIAiAAQAFAAADADQADADAAAFQAAANgHALQgKAQgJAGQgTAMgMADQgbAHgQgBQgNAAgMgBgEAhAABeQgFAAgEgEQgEgFAAgEIAAgTQAAgGAEgDQAEgFAFAAIAbAAQAFAAAEAFQAFADAAAGIAAATQAAAEgFAFQgEAEgFAAgAdpBeQgJAAAAgKIAAioQAAgJAJAAIClAAQAKAAAAAJIAAAbQAAAKgKAAIhzAAIAAAYIBVAAQAKAAAAAJIAAAZQAAAKgKAAIhVAAIAAAbIBzAAQAKAAAAAJIAAAbQAAAKgKAAgAaUBeQgJAAAAgKIAAioQAAgJAJAAIClAAQAKAAAAAJIAAAbQAAAKgKAAIhzAAIAAAYIBVAAQAKAAAAAJIAAAZQAAAKgKAAIhVAAIAAAbIBzAAQAKAAAAAJIAAAbQAAAKgKAAgAYxBeQgKAAAAgKIAAg8IhOAAIAAA8QAAAKgKAAIgoAAQgJAAAAgKIAAioQAAgJAJAAIAoAAQAKAAAAAJIAABAIBOAAIAAhAQAAgJAKAAIAoAAQAKAAAAAJIAACoQAAAKgKAAgARgBeQgJAAAAgKIAAioQAAgJAJAAIApAAQAJAAAAAJIAACEIA2AAIAAiEQAAgJAKAAIAoAAQAKAAAAAJIAACEIA2AAIAAiEQAAgJAJAAIApAAQAJAAAAAJIAACoQAAAKgJAAgAP9BeQgKAAAAgKIAAhgIgCAAIhEBgQgIAKgHAAIguAAQgJAAAAgKIAAioQAAgJAJAAIApAAQAJAAAAAJIAABhIADAAIBEhhIAFgGQAFgDAEAAIAuAAQAKAAAAAJIAACoQAAAKgKAAgAMNBeQgKAAAAgKIAAiDIggAAQgHAAgFACQgFACgEACQgHAHgDALIgbBrQgDAKgIAAIgpAAQgFAAgCgDQgDgDABgEIAbhrQAEgRAHgMQAIgNALgJQAHgGATgIQAKgEAagBIBSAAQAJAAAAAJIAACoQAAAKgJAAgAHNBeQgKAAAAgKIAAhgIgCAAIhEBgQgIAKgHAAIguAAQgJAAAAgKIAAioQAAgJAJAAIApAAQAJAAAAAJIAABhIADAAIBEhhIAFgGQAFgDAEAAIAuAAQAKAAAAAJIAACoQAAAKgKAAgADdBeQgKAAAAgKIAAhXIgCAAIglBXQgBAEgEADQgEADgFAAIghAAQgGAAgEgDQgEgDgBgEIgkhXIgDAAIAABXQAAAKgKAAIgoAAQgJAAAAgKIAAioQAAgJAJAAIA5AAQAFAAAEADQAEADACADIAvBxIACAAIAwhxQABgDAEgDQAEgDAGAAIA4AAQAKAAAAAJIAACoQAAAKgKAAgAhNBeQgJAAAAgKIAAhgIgDAAIhDBgQgIAKgHAAIguAAQgJAAAAgKIAAioQAAgJAJAAIAoAAQAKAAAAAJIAABhIADAAIBDhhIAGgGQAEgDAFAAIAuAAQAJAAAAAJIAACoQAAAKgJAAgAk9BeQgJAAAAgKIAAg8IhPAAIAAA8QAAAKgJAAIgpAAQgJAAAAgKIAAioQAAgJAJAAIApAAQAJAAAAAJIAABAIBPAAIAAhAQAAgJAJAAIApAAQAJAAAAAJIAACoQAAAKgJAAgAtVBeQgIAAgEgKIgJgXIhVAAIgKAXQgEAKgIAAIgrAAQgEAAgDgDQgCgCACgFIBMioQAEgJAIAAIA3AAQAIAAAEAJIBMCoQACAFgDACQgCADgEAAgAt9AQIgWg0IgDAAIgXA0IAwAAgAzQBeQgJAAAAgKIAAioQAAgJAJAAIBiAAQAOAAAVAFQAPAEAKAGQAKAIAFAKQAEAJAAAKQAAAbgbAJIAAACQApAHAAAiQAAAMgFAKQgFAKgKAIQgLAIgPAEQgWAEgPAAgAyeAzIA6AAQAKAAAGgFQAFgEAAgHQAAgIgFgEQgGgEgKAAIg6AAgAyegXIAwAAQAIAAAFgDQAEgEAAgGQAAgHgEgDQgEgEgJAAIgwAAgA2wBeQgJAAAAgKIAAioQAAgJAJAAIBfAAQAQAAAZAFQAJADAHAEQAIADAFAFQAGAFAEAFQAFAGACAFQAGANAAAPQAAAPgGAKQgCAGgFAGQgEAFgGAFQgFAEgIAEQgHAEgJACQgZAFgQABIgtAAIAAApQAAAKgJAAgA1+AAIAtAAQAHAAAGAAQAGgCAEgEQAEgDACgFQACgFAAgFQAAgGgCgEQgCgFgEgDQgEgEgGgCQgGgCgHAAIgtAAgA6FBeQgJAAAAgKIAAioQAAgJAJAAIClAAQAKAAAAAJIAAAbQAAAKgKAAIhzAAIAAAYIBVAAQAKAAAAAJIAAAZQAAAKgKAAIhVAAIAAAbIBzAAQAKAAAAAJIAAAbQAAAKgKAAgA7oBeQgKAAAAgKIAAiDIhOAAIAACDQAAAKgKAAIgoAAQgJAAAAgKIAAioQAAgJAJAAICyAAQAKAAAAAJIAACoQAAAKgKAAgEAg9AAhQgJAAAAgJIgGhsQAAgDADgDQADgDAEAAIArAAQAEAAADADQADADAAADIgGBsQAAAJgJAAg");
	this.shape.setTransform(218.2,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AprBhQgMgBgKgDQgKgEgJgFQgJgFgHgHQgHgGgFgIQgFgIgEgKQgDgJgCgKQgCgKAAgLQAAgKACgLQACgKADgJQAEgJAFgIQAFgIAHgGQAHgHAJgFQAJgFAKgEQAKgDAMgBQAMgCAOgBQAPABAbAFQAMAEASAMQAMAIAHAMQAGALAAANQAAAEgDAEQgDACgFAAIgiAAQgFAAgEgCQgEgDgDgFQgGgKgHgFIgKgEQgGgCgHAAQgMAAgJAEQgJADgGAHQgGAHgEALQgDAKAAAMQAAANADAKQAEALAGAHQAGAGAJAEQAJAEAMAAQAHAAAHgCQAGgBAFgEQAIgGAGgKQADgGADgCQAEgDAGAAIAiAAQAFAAADADQADADAAAFQAAAMgHAMQgLAPgIAHQgTAMgMAEQgbAFgQABQgOAAgMgDgEggWABhQgMgBgKgDQgLgEgIgFQgJgFgHgHQgHgGgFgIQgGgIgDgKQgEgJgCgKQgCgKAAgLQAAgKACgLQACgKAEgJQADgJAGgIQAFgIAHgGQAHgHAJgFQAIgFALgEQAKgDAMgBQAMgCANgBQAQABAaAFQAMAEASAMQAMAIAHAMQAGALAAANQAAAEgDAEQgCACgGAAIghAAQgGAAgEgCQgDgDgDgFQgGgKgIgFIgKgEQgGgCgHAAQgLAAgJAEQgJADgGAHQgHAHgDALQgEAKAAAMQAAANAEAKQADALAHAHQAGAGAJAEQAJAEALAAQAIAAAGgCQAGgBAFgEQAIgGAGgKQADgGAEgCQAEgDAFAAIAiAAQAFAAADADQADADAAAFQAAAMgHAMQgKAPgJAHQgTAMgMAEQgbAFgQABQgNAAgMgDgEAhAABeQgFAAgEgEQgEgEAAgFIAAgUQAAgEAEgFQAEgEAFAAIAbAAQAFAAAEAEQAFAFAAAEIAAAUQAAAFgFAEQgEAEgFAAgAdpBeQgJAAAAgKIAAioQAAgJAJAAIClAAQAKAAAAAJIAAAbQAAAKgKAAIhzAAIAAAYIBVAAQAKAAAAAKIAAAZQAAAJgKAAIhVAAIAAAbIBzAAQAKAAAAAKIAAAaQAAAKgKAAgAaUBeQgJAAAAgKIAAioQAAgJAJAAIClAAQAKAAAAAJIAAAbQAAAKgKAAIhzAAIAAAYIBVAAQAKAAAAAKIAAAZQAAAJgKAAIhVAAIAAAbIBzAAQAKAAAAAK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");
	this.shape_1.setTransform(219.7,19);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,7.5,433,21.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 53
	this.instance = new lib.Символ53();
	this.instance.setTransform(404.6,16.5,1,1,0,0,0,3.1,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({alpha:0},4).wait(20).to({alpha:1},7).wait(1));

	// Символ 52
	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(388.2,13,1,1,0,0,0,10,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({alpha:0},4).wait(20).to({alpha:1},7).wait(2));

	// Символ 51
	this.instance_2 = new lib.Символ51();
	this.instance_2.setTransform(366.1,16.5,1,1,0,0,0,9.2,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({alpha:0},4).wait(20).to({alpha:1},7).wait(3));

	// Символ 50
	this.instance_3 = new lib.Символ50();
	this.instance_3.setTransform(343,16.5,1,1,0,0,0,9.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({alpha:0},4).wait(20).to({alpha:1},7).wait(4));

	// Символ 49
	this.instance_4 = new lib.Символ49();
	this.instance_4.setTransform(314.8,16.5,1,1,0,0,0,14.3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({alpha:0},4).wait(20).to({alpha:1},7).wait(5));

	// Символ 48
	this.instance_5 = new lib.Символ48();
	this.instance_5.setTransform(293.5,16.5,1,1,0,0,0,3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({alpha:0},4).wait(20).to({alpha:1},7).wait(6));

	// Символ 47
	this.instance_6 = new lib.Символ47();
	this.instance_6.setTransform(278.6,16.5,1,1,0,0,0,9.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({alpha:0},4).wait(20).to({alpha:1},7).wait(7));

	// Символ 46
	this.instance_7 = new lib.Символ46();
	this.instance_7.setTransform(256.6,16.5,1,1,0,0,0,9.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({alpha:0},4).wait(20).to({alpha:1},7).wait(8));

	// Символ 45
	this.instance_8 = new lib.Символ45();
	this.instance_8.setTransform(233.2,16.5,1,1,0,0,0,11.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({alpha:0},4).wait(20).to({alpha:1},7).wait(9));

	// Символ 44
	this.instance_9 = new lib.Символ44();
	this.instance_9.setTransform(210.9,16.5,1,1,0,0,0,9.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({alpha:0},4).wait(20).to({alpha:1},7).wait(10));

	// Символ 43
	this.instance_10 = new lib.Символ43();
	this.instance_10.setTransform(179.3,16.5,1,1,0,0,0,10.6,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({alpha:0},4).wait(20).to({alpha:1},7).wait(11));

	// Символ 42
	this.instance_11 = new lib.Символ42();
	this.instance_11.setTransform(147.2,13,1,1,0,0,0,10,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({alpha:0},4).wait(20).to({alpha:1},7).wait(12));

	// Символ 41
	this.instance_12 = new lib.Символ41();
	this.instance_12.setTransform(123.6,16.5,1,1,0,0,0,11.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({alpha:0},4).wait(20).to({alpha:1},7).wait(13));

	// Символ 40
	this.instance_13 = new lib.Символ40();
	this.instance_13.setTransform(101.4,16.5,1,1,0,0,0,9.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({alpha:0},4).wait(20).to({alpha:1},7).wait(14));

	// Символ 39
	this.instance_14 = new lib.Символ39();
	this.instance_14.setTransform(80.8,16.5,1,1,0,0,0,8.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({alpha:0},4).wait(20).to({alpha:1},7).wait(15));

	// Символ 38
	this.instance_15 = new lib.Символ38();
	this.instance_15.setTransform(58.3,16.5,1,1,0,0,0,10,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({alpha:0},4).wait(20).to({alpha:1},7).wait(16));

	// Символ 37
	this.instance_16 = new lib.Символ37();
	this.instance_16.setTransform(34,16.5,1,1,0,0,0,11.1,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({alpha:0},4).wait(20).to({alpha:1},7).wait(17));

	// Символ 36
	this.instance_17 = new lib.Символ36();
	this.instance_17.setTransform(9.8,16.5,1,1,0,0,0,9.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({alpha:0},4).wait(20).to({alpha:1},7).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407.8,26.5);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(10.8,22.6,1,1,0,0,0,10.8,22.6);
	this.instance.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgVDcQgLgJAAgIIABgQQgHgGgDgVIgEgrQgDgcAAgtQAAgTAEgSQAEgQABgFQAAgHgSgpIgTgtQgEgPgJglIgGgfIgEgBQgHgBAAgIQAAgSApgFQAigFAFAMIADAAQALAAAJAGIADAFQAIABAJAFIAFADQADgMAYAWQAbAaAAAZQAAAYgSAeQgVAjgiAIIAAAFIgDAXIAJACQAJACARAAQAJAAALAGQALAFAKALIAQASQAPAUAAAzQAAASgDAHQgGAOgSAJQgEACgEAEIgKAHQgVAIgCACQgGAFgNAGIgGACIgHARQgHASgMAAIACABIgBABQgDAAgHgGgAgaAMQgEARAAAQQAAApAGAsIAGAqIAFABIAJAAQABgFAIAAIADABIALgGIAngQQAUgLAHgLQADgHAAgOQABhfhMAAQgPAAgJgCIgJABIgEgBIgCAFgAgOg3IASgBQACgEALgGQAMgGACgCQAKgNADgIQAOggAAgHQgBgNgRgVIgOgPQgCADgGAAQgKAAgLgHIgIgGQgHgBgJgEQgFgDgCgDIgRAAQgKAAgKAJIgEAFIADAIQADAIAAAFQgBAUALAgIAUAuIAFANIAFAAQANAAACADg");
	this.shape.setTransform(10.8,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(28.8,49.8,1,1,0,0,0,28.8,49.8);
	this.instance.alpha = 0.48;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.setTransform(194.6,12.3,1,1,0,0,0,203.8,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkJCCQgMgCgKgDQgKgEgJgFQgJgFgHgHQgHgGgFgIQgFgIgEgJQgDgJgCgLQgCgKAAgLQAAgMACgKQACgKADgIQAEgJAFgIQAFgHAHgHQAHgHAJgFQAJgFAKgDQAKgEAMgBQAMgCAOAAQAPAAAbAGQAMADASAMQAMAJAHALQAGAMAAAMQAAADgDADQgDACgFAAIgiAAQgFAAgEgCQgEgDgDgDQgGgKgHgFIgKgEQgGgCgHAAQgMAAgJAEQgJADgGAHQgGAHgEAJQgDAKAAAOQAAANADALQAEAKAGAHQAGAHAJAEQAJADAMAAQAHAAAHgCQAGgBAFgEQAIgFAGgLQADgFADgDQAEgDAGAAIAiAAQAFAAADADQADADAAAFQAAANgHALQgLAQgIAGQgTAMgMAEQgbAGgQAAQgOAAgMgCgA67CCQgMgCgKgDQgKgEgJgFQgJgFgHgHQgHgGgFgIQgFgIgEgJQgDgJgCgLQgCgKAAgLQAAgMACgKQACgKADgIQAEgJAFgIQAFgHAHgHQAHgHAJgFQAJgFAKgDQAKgEAMgBQAMgCAOAAQANAAAMACQAMABAKAEQAKADAJAFQAJAFAHAHQAHAHAFAHIAJARQAEAIACAKQABAKAAAMQAAALgBAKQgCALgEAJQgEAJgFAIQgFAIgHAGQgHAHgJAFQgJAFgKAEQgKADgMACQgMACgNAAQgOAAgMgCgA62gSQgJADgGAHQgGAHgEAJQgDAKAAAOQAAANADALQAEAKAGAHQAGAHAJAEQAJADAMAAQALAAAJgDQAJgEAGgHQAGgHAEgKQADgLAAgNQAAgOgDgKQgEgJgGgHQgGgHgJgDQgJgEgLAAQgMAAgJAEgAfKB+QgGAAgEgEQgEgEAAgFIAAgTQAAgFAEgEQAEgFAGAAIAbAAQAFAAAEAFQAEAEAAAFIAAATQAAAFgEAEQgEAEgFAAgAdkB+QgJAAAAgJIAAhjIgDAAIhDBjQgIAJgHAAIguAAQgJAAAAgJIAAioQAAgKAJAAIAoAAQAKAAAAAKIAABgIADAAIBDhgIAGgHQAEgDAFAAIAuAAQAJAAAAAKIAACoQAAAJgJAAgAYDB+QgJAAAAgJIAAioQAAgKAJAAIClAAQAJAAAAAKIAAAbQAAAJgJAAIhzAAIAAAWIBVAAQAJAAAAAKIAAAbQAAAJgJAAIhVAAIAAA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");
	this.shape.setTransform(194.6,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkJCCQgMgCgKgDQgKgEgJgFQgJgFgHgHQgHgGgFgIQgFgIgEgJQgDgJgCgLQgCgKAAgLQAAgMACgKQACgKADgIQAEgJAFgIQAFgHAHgHQAHgHAJgFQAJgFAKgDQAKgEAMgBQAMgCAOAAQAPAAAbAGQAMADASAMQAMAJAHALQAGAMAAAMQAAADgDADQgDACgFAAIgiAAQgFAAgEgCQgEgDgDgDQgGgKgHgFIgKgEQgGgCgHAAQgMAAgJAEQgJADgGAHQgGAHgEAJQgDAKAAAOQAAANADALQAEAKAGAHQAGAHAJAEQAJADAMAAQAHAAAHgCQAGgBAFgEQAIgFAGgLQADgFADgDQAEgDAGAAIAiAAQAFAAADADQADADAAAFQAAANgHALQgLAQgIAGQgTAMgMAEQgbAGgQAAQgOAAgMgCgA67CCQgMgCgKgDQgKgEgJgFQgJgFgHgHQgHgGgFgIQgFgIgEgJQgDgJgCgLQgCgKAAgLQAAgMACgKQACgKADgIQAEgJAFgIQAFgHAHgHQAHgHAJgFQAJgFAKgDQAKgEAMgBQAMgCAOAAQANAAAMACQAMABAKAEQAKADAJAFQAJAFAHAHQAHAHAFAHIAJARQAEAIACAKQABAKAAAMQAAALgBAKQgCALgEAJQgEAJgFAIQgFAIgHAGQgHAHgJAFQgJAFgKAEQgKADgMACQgMACgNAAQgOAAgMgCgA62gSQgJADgGAHQgGAHgEAJQgDAKAAAOQAAANADALQAEAKAGAHQAGAHAJAEQAJADAMAAQALAAAJgDQAJgEAGgHQAGgHAEgKQADgLAAgNQAAgOgDgKQgEgJgGgHQgGgHgJgDQgJgEgLAAQgMAAgJAEgAfKB+QgGAAgEgEQgEgEAAgFIAAgTQAAgFAEgEQAEgFAGAAIAbAAQAFAAAEAFQAEAEAAAFIAAATQAAAFgEAEQgEAEgFAAgAdkB+QgJAAAAgJIAAhjIgDAAIhDBjQgIAJgHAAIguAAQgJAAAAgJIAAioQAAgKAJAAIAoAAQAKAAAAAKIAABgIADAAIBDhgIAGgHQAEgDAFAAIAuAAQAJAAAAAKIAACoQAAAJgJAAgAYDB+QgJAAAAgJIAAioQAAgKAJAAIClAAQAJAAAAAKIAAAbQAAAJgJAAIhzAAIAAAWIBVAAQAJAAAAAKIAAAbQAAAJgJAAIhVAAIAAA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");
	this.shape_1.setTransform(196.6,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-0.9,409.8,28.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(3.6,2.6,1,1,0,0,0,3.6,2.6);
	this.instance.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.23},7,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.23},7,cjs.Ease.get(-1)).to({alpha:0.469},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.3,5.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(10.1,15.8,1,1,0,0,0,10.1,15.8);
	this.instance.alpha = 0.422;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},3).to({alpha:0.422},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,31.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(3.5,2.4,1,1,0,0,0,3.5,2.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.469},5).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,4.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGCTQgDgGAAgEQAAhMAZgSQALgGAHALQAJAMAAAbQAAAXgEAOQgHAggXAAQgJAAgGgJgAgdhXQgNgRAAgJQAAg7AfAYQAKAIAJAPQAKANAAAEQAAALgEAMQgFASgIAAQgPAAgPgUg");
	this.shape.setTransform(65.6,24.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50).to({_off:false},0).to({_off:true},1).wait(24));

	// Слой 3
	this.instance = new lib.Символ33();
	this.instance.setTransform(67.4,26.2,1,1,0,0,0,10.8,22.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// Слой 1
	this.instance_1 = new lib.r4();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,74);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31_1();
	this.instance.setTransform(29.3,74.2,1,1,0,0,0,28.8,49.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ31_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.r441111();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,125);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(85.3,77.1,1,1,0,0,0,3.5,2.4);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(124.4,6.6,1,1,0,0,0,3.6,2.6);

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(115.8,42.9,1,1,0,0,0,10.1,15.8);

	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(102.5,81.7,1,1,0,0,0,3.5,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_4 = new lib.e3();

	this.instance_5 = new lib.Символ6();
	this.instance_5.setTransform(129.7,64.3,1,1,0,0,0,17.9,30.2);
	this.instance_5.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.5,122);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 18
	this.instance = new lib.Символ63();
	this.instance.setTransform(216,246.9,1,1,0,0,0,52.2,45.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ63(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(384.5,200.5,1,1,0,0,0,30.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.98,skewX:0.8,skewY:3.3,x:384.7,y:201},14,cjs.Ease.get(-1)).to({scaleY:0.96,skewX:1.6,skewY:7,x:384.9,y:201.6},15,cjs.Ease.get(1)).to({regX:30.6,scaleY:0.98,skewX:0.8,skewY:3.3,y:201.1},15,cjs.Ease.get(-1)).to({regX:30.5,scaleY:1,skewX:0,skewY:0,x:384.5,y:200.5},15,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(137.5,288,1,1,0,0,0,48.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.5,y:290.1},14,cjs.Ease.get(-1)).to({rotation:-7.5,y:292.5},15,cjs.Ease.get(1)).to({rotation:-3.6,y:290.2},15,cjs.Ease.get(-1)).to({rotation:0,y:288},15,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(228,239,1,1,0,0,0,26,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.03,scaleY:1.03,x:228.9,y:239.2},14,cjs.Ease.get(-1)).to({regX:26.1,scaleX:1.05,scaleY:1.07,x:229.9,y:239.4},15,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.04,x:229,y:239.3},15,cjs.Ease.get(-1)).to({regX:26,scaleX:1,scaleY:1,x:228,y:239},15,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(186.5,232.5,1,1,0,0,0,22.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.02,x:187.3,y:233.1},14,cjs.Ease.get(-1)).to({regX:22.6,scaleX:1.05,scaleY:1.05,x:187.4,y:232.5},15,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1,y:233.1},15,cjs.Ease.get(-1)).to({regX:22.5,scaleX:1,x:186.5,y:232.5},15,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(289,133,1,1,0,0,0,21,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:23.1,scaleY:1.04,y:134.6},14,cjs.Ease.get(-1)).to({regY:23,scaleY:1.09,y:136.2},15,cjs.Ease.get(1)).to({scaleY:1.04,y:134.6},15,cjs.Ease.get(-1)).to({scaleY:1,y:133},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(288.5,215,1,1,0,0,0,128.5,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewY:0.8,y:217.2},14,cjs.Ease.get(-1)).to({scaleX:1,skewY:2,y:219.6},15,cjs.Ease.get(1)).to({regX:128.6,scaleX:1,skewY:1,x:288.6,y:217.3},15,cjs.Ease.get(-1)).to({regX:128.5,skewY:0,x:288.5,y:215},15,cjs.Ease.get(1)).wait(1));

	// Слой 16
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(260.9,236.9,1,1,0,0,0,133.8,89.1);
	this.instance_7.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:89.2,scaleY:0.97,rotation:-1,y:237.7},14,cjs.Ease.get(-1)).to({scaleY:0.94,rotation:-2.5,y:238.5},15,cjs.Ease.get(1)).to({regX:133.7,scaleY:0.97,rotation:-1.1,y:237.8},15,cjs.Ease.get(-1)).to({regX:133.8,regY:89.1,scaleY:1,rotation:0,y:236.9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89,109.3,327.4,216.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ7();
	this.instance.setTransform(443.5,254.1,1,1,0,0,0,73.7,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(29.2,-8,1,1,0,0,0,7.2,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(369.5,185,1,1,0,0,0,369.5,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,739,370);


(lib.Символ29копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ31();
	this.instance.setTransform(-30.8,5.4,0.259,0.259);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({scaleX:0.83,scaleY:0.83,alpha:1},8).wait(66).to({y:61.9,alpha:0},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(-27.1,1.9,0.644,0.644);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(56).to({y:58.4,alpha:0},7).to({_off:true},1).wait(98));

	// Символ 28
	this.instance_2 = new lib.Символ28копия();
	this.instance_2.setTransform(-15.3,99.1,0.247,0.247);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleX:0.06,scaleY:0.06,alpha:1},0).to({scaleX:0.33,scaleY:0.33},5).to({scaleX:0.25,scaleY:0.25},2).wait(61).to({y:155.6,alpha:0},7).wait(13).to({scaleX:0.06,scaleY:0.06,y:99.1,alpha:1},0).to({scaleX:0.33,scaleY:0.33},5).to({scaleX:0.25,scaleY:0.25},2).wait(71).to({y:155.6,alpha:0},7).wait(7));

	// Символ 28
	this.instance_3 = new lib.Символ28копия();
	this.instance_3.setTransform(-28.9,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({scaleX:0.13,scaleY:0.13,alpha:1},0).to({scaleX:1.11,scaleY:1.11},5).to({scaleX:1,scaleY:1},2).wait(62).to({y:56.5,alpha:0},7).wait(12).to({scaleX:0.13,scaleY:0.13,y:0,alpha:1},0).to({scaleX:1.11,scaleY:1.11},5).to({scaleX:1,scaleY:1},2).wait(72).to({y:56.5,alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.5,-53.2,281.3,165.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(13,13,1,1,0,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23},7,cjs.Ease.get(-1)).to({y:33},7,cjs.Ease.get(1)).to({y:22.4},8,cjs.Ease.get(-1)).to({y:13},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-2.3,26,26);


(lib.shape105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.setTransform(17.7,32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9.3,x:18.5,y:32.2},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:22.1,x:19.5,y:31.6},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:10.3,x:18.6,y:32.1},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:17.7,y:32.7},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(24.2,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:6.3,x:25.1},4,cjs.Ease.get(-1)).to({rotation:15,x:26.4},6,cjs.Ease.get(1)).to({rotation:6.8,x:25.2,y:21.9},6,cjs.Ease.get(-1)).to({rotation:0,x:24.2,y:22},5,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(37.9,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.3,x:38.2,y:22.2},4,cjs.Ease.get(-1)).to({rotation:15,x:38.5,y:22.9},6,cjs.Ease.get(1)).to({rotation:6.8,x:38.1,y:22.3},6,cjs.Ease.get(-1)).to({rotation:0,x:37.9,y:21.6},5,cjs.Ease.get(1)).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ61();
	this.instance_3.setTransform(15.1,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3.3,x:15.8,y:64.4},4,cjs.Ease.get(-1)).to({rotation:-8.5,x:16.9,y:66.3},6,cjs.Ease.get(1)).to({rotation:-3.8,x:15.9,y:64.6},6,cjs.Ease.get(-1)).to({rotation:0,x:15.1,y:63.2},5,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.instance_4 = new lib.q11();
	this.instance_4.setTransform(3.6,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,15.2,58,70.1);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(15.8,65.4,0.77,0.77,-67.4,0,0,12.9,12.8);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(148.1,109.8,0.77,0.77,120,0,0,12.8,12.9);

	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(2.7,108.6,0.289,0.289,-22.4,0,0,12.9,12.8);

	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(23.1,179.9,0.289,0.289,165,0,0,12.8,13);

	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(343,73.3,0.6,0.6,105,0,0,13.1,13);

	this.instance_5 = new lib.Символ29();
	this.instance_5.setTransform(203.6,-21.8,0.6,0.6,45,0,0,13,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30,352.6,215.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Слой 7
	this.instance = new lib.Символ29копия();
	this.instance.setTransform(146.9,145.2,0.594,0.594,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.49,scaleY:0.49,x:146.8,y:130.2,alpha:0},4).wait(4));

	// Слой 6
	this.instance_1 = new lib.Символ65();
	this.instance_1.setTransform(343.7,181.3,1,1,0,0,0,176.2,107.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:193.3,alpha:1},4).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ55();
	this.instance_2.setTransform(418.1,379.1,1,1,0,0,0,275.8,17.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:338.6},5).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(359.5,339.6,1,1,0,0,0,207.7,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:392.1},6).wait(2));

	// Слой 4
	this.instance_4 = new lib.Символ54();
	this.instance_4.setTransform(418.9,347.5,1,1,0,0,0,476.4,29.1);
	this.instance_4.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8));

	// Слой 1
	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(369.5,185,1,1,0,0,0,369.5,185);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1.16,scaleY:1.16,x:400.9,y:159.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:409.3,y:152.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:414.3,y:148.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:417.5,y:146.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:419.7,y:144.4},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:421.2,y:143.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:422.5,y:142},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,0,953,376.5);


(lib.sprite106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape105();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,15.2,58,70.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.main1 = new lib.sprite106();
	this.main1.setTransform(34,40.8,0.85,0.85,15,0,0,40,48);

	this.timeline.addTween(cjs.Tween.get(this.main1).to({rotation:0,y:40.9},29).to({rotation:15,y:40.8},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,8.5,62.4,67.8);


// stage content:



(lib.csexy_leg_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
			_this.qwe.gotoAndPlay(1);
		}
		
		
		
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
			_this.qwe.gotoAndStop(0);
		}
		
		
		
		
		this.qwe.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.pricel = new lib.Symbol4();
	this.pricel.setTransform(903,110.8,0.601,0.601,-15,0,0,33.9,40.8);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 2
	this.qwe = new lib.Символ4();
	this.qwe.setTransform(318.8,145.1,0.878,0.878,0,0,0,369.6,185.1);

	this.timeline.addTween(cjs.Tween.get(this.qwe).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.8,135.1,970.3,330.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
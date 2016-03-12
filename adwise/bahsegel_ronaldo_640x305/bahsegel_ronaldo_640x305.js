(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bahsegel_logo.png", id:"bahsegel_logo"},
		{src:"images/bg_pole.jpg", id:"bg_pole"},
		{src:"images/btn1.png", id:"btn1"},
		{src:"images/dollar1.png", id:"dollar1"},
		{src:"images/dollar2.png", id:"dollar2"},
		{src:"images/girl_left.png", id:"girl_left"},
		{src:"images/girl_right.png", id:"girl_right"},
		{src:"images/hui.png", id:"hui"},
		{src:"images/ronaldo3.png", id:"ronaldo3"},
		{src:"images/ronaldo_1.png", id:"ronaldo_1"},
		{src:"images/ronaldo_2.png", id:"ronaldo_2"}
	]
};



// symbols:



(lib.bahsegel_logo = function() {
	this.initialize(img.bahsegel_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,50);


(lib.bg_pole = function() {
	this.initialize(img.bg_pole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,922,305);


(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,60);


(lib.dollar1 = function() {
	this.initialize(img.dollar1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.dollar2 = function() {
	this.initialize(img.dollar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,50);


(lib.girl_left = function() {
	this.initialize(img.girl_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,255);


(lib.girl_right = function() {
	this.initialize(img.girl_right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,268);


(lib.hui = function() {
	this.initialize(img.hui);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.ronaldo3 = function() {
	this.initialize(img.ronaldo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,285);


(lib.ronaldo_1 = function() {
	this.initialize(img.ronaldo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,300);


(lib.ronaldo_2 = function() {
	this.initialize(img.ronaldo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,287);


(lib.Символ74 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AjbEPQgUgIgNgPQgOgOgGgWQgHgUAAgcIAAlZIBIAAIAAFdQAAAYAJAKQAKALASAAQARAAAKgLQAJgKAAgYIAAldIBEAAIAAFZQAAAcgHAUQgGAWgOAOQgNAPgUAIQgUAHgaAAQgbAAgUgHgASIEOQgUgIgNgPQgOgOgHgVQgGgVAAgbIAAgcIBDAAIAAAgQAAAXAKALQAJAKASAAQASAAAJgKQALgLAAgXQAAgRgGgPQgGgOgKgNQgLgNgmgjQghgfgPgYQgKgPgFgTQgGgUAAgYQAAgbAGgVQAHgVANgPQAOgOATgIQAUgIAaABQAagBAUAIQATAIAOAOQANAPAHAVQAGAVAAAbIAAAPIhDAAIAAgTQAAgXgKgMQgIgKgSABQgSgBgIAKQgKAMAAAXQAAARAGAPQAFAOALANQAKANAmAhQAhAfAPAYQALARAFATQAGAUAAAYQAAAbgHAVQgHAVgNAOQgOAPgTAIQgVAIgagBQgaABgUgIgArfEOQgUgIgOgPQgNgOgHgVQgHgVAAgbIAAjsQAAgbAHgVQAHgVANgPQAOgOAUgIQAUgIAaABQAagBAUAIQAUAIAOAOQANAPAHAVQAHAVAAAbIAAAtIhEAAIAAgxQAAgXgKgMQgJgKgSABQgSgBgJAKQgKAMAAAXIAAD0QAAAXAKALQAJAKASAAQASAAAJgKQAKgLAAgXIAAhUIggAAIAAhBIBkAAIAACRQAAAbgHAVQgHAVgNAOQgOAPgUAIQgUAIgagBQgaABgUgIgAvfEOQgUgIgOgPQgNgOgHgVQgIgVAAgbIAAjsQAAgbAIgVQAHgVANgPQAOgOAUgIQAVgIAaABQAagBAUAIQAVAIANAOQAOAPAHAVQAIAVAAAbIAADsQAAAbgIAVQgHAVgOAOQgNAPgVAIQgUAIgagBQgaABgVgIgAvLhvQgKAMAAAXIAAD0QAAAXAKALQAJALASAAQASAAAJgLQAKgLAAgXIAAj0QAAgXgKgMQgJgKgSABQgSgBgJAKgANoERIAAnGIDDAAIAABBIh8AAIAAB+IBiAAIAABAIhiAAIAACGIB8AAIAABBgAL4ERQgGgUAAgkIAAhIQAAgfgMgNQgKgOgZAAIgZAAIAAC6IhHAAIAAnGIBsAAQAbABAVAGQAUAHAMAMQANAOAGATQAHAUAAAaIAAAkQAAAjgMAVQgLAXgYALQANAGAJAJQAJAJAGAMQAKAYAAAlIAABHQAAAkAIATgAKqAWIAcAAQAVABALgLQALgMAAgYIAAgsQAAgZgJgLQgIgMgTAAIgjAAgAFaERIAAnGIBxAAQAaAAAVAIQAUAHANAOQANAOAHAWQAGAUAAAcIAADkQAAAbgGAWQgHAVgNAOQgNAOgUAHQgVAIgaAAgAGhDQIAoAAQASAAAJgLQAKgKAAgXIAAjsQAAgXgKgKQgJgLgSAAIgoAAgADxERIgNhTIhYAAIgMBTIhBAAIBInGIBpAAIBJHGgADaCAIgijkIgiDkIBEAAgAmDERQgHgUAAgkIAAhIQAAgfgLgNQgLgOgZAAIgYAAIAAC6IhIAAIAAnGIBsAAQAcABAUAGQAUAHANAMQANAOAGATQAGAUAAAaIAAAkQAAAjgLAVQgMAXgYALQAOAGAJAJQAJAJAFAMQALAYAAAlIAABHQAAAkAHATgAnRAWIAcAAQAVABAKgLQALgMAAgYIAAgsQAAgZgIgLQgJgMgTAAIgiAAgA0gERIAAnGIBxAAQAbAAAUAIQAUAHAOAOQANAOAGAWQAHAUAAAcIAADkQAAAbgHAWQgGAVgNAOQgOAOgUAHQgUAIgbAAgAzYDQIAoAAQASAAAJgLQAJgKAAgXIAAjsQAAgXgJgKQgJgLgSAAIgoAAgArSjQQgNgEgJgKQgJgKgFgOQgEgOAAgRIAqAAQABASAIAHQAGAGAPAAQAPAAAHgGQAHgHACgSIAqAAQAAARgFAOQgEAOgJAKQgKAKgNAEQgOAGgSAAQgSAAgOgGg");
	this.shape.setTransform(131.3,27.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,262.7,55.7);


(lib.Символ73 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF47").s().p("AE+DbQgMgGAAgPIAAgEIAiAAIAAADQAAAJAKAAQALAAAAgLQAAgLgRAAIgEAAIAAgYQgQgCgMgGQgMgGgIgKQgIgKgEgOQgEgOAAgSIAAimQAAgTAFgPQAFgPAJgKQAKgLAOgFQAOgFATAAQASAAAPAFQAOAFAJALQAJAKAGAPQAEAPAAATIAAAgIgwAAIAAgjQAAgQgHgIQgGgHgNAAQgNAAgGAHQgHAIAAAQIAACsQAAARAHAHQAGAIANAAQANAAAGgIQAHgHAAgRIAAguIAwAAIAAArQAAASgEAOQgEAOgIALQgJAKgMAGQgNAGgQABIAAAPQASAAAIAFQAJAFAAAMQAAARgNAGQgKAFgXAAQgVAAgLgGgAgNCbQgOgFgJgKQgKgLgFgPQgEgPAAgTIAAgUIAwAAIAAAXQgBARAIAHQAEAIANAAQANAAAGgIQAHgHAAgRQAAgMgFgKQgDgKgIgJQgHgKgZgZQgYgTgKgRQgHgMgEgNQgEgPAAgRQAAgTAEgPQAGgPAJgKQAJgLAOgFQAMgFASAAQATAAAOAFQANAFAKALQAJAKAGAPQAEAPAAATIAAALIgwAAIAAgOQAAgQgHgIQgFgHgNAAQgNAAgGAHQgFAIAAAQQAAAMAEALQACAJAIAKQAHAJAbAZQAXAUALARQAIAMADANQAFAPgBAQQAAATgEAPQgFAPgKALQgKAKgNAFQgOAGgTAAQgSAAgNgGgAKNCdIg/jnIAADnIguAAIAAlAIBAAAIA0C/IAAi/IAtAAIAAFAgAHKCdIAAlAIAyAAIAAFAgADBCdIAAlAIAzAAIAAFAgAiGCdIAAlAIAyAAIAAFAgAjfCdIAAiKIg5AAIAACKIgzAAIAAlAIAzAAIAACKIA5AAIAAiKIA0AAIAAFAgAmVCdIgIg6Ig/AAIgIA6IgvAAIAzlAIBLAAIAzFAgAmkA3IgZihIgYChIAxAAgArACdIAAlAIBNAAQATAAAOAFQAPAEAIAKQAKAJAEAOQAFANgBATIAAAMQAAAZgIAQQgHAQgRAIQAJAEAIAGQAHAEAFAJQAIARAAAbIAAAaQAAATgFAOQgEAOgKAKQgJAJgPAFQgPAFgTAAgAqOBvIAdAAQAOAAAGgHQAGgHAAgRIAAgdQAAgWgHgIQgIgJgRAAIgXAAgAqOggIAUAAQAPAAAIgHQAHgIABgTIAAgSQgBgRgGgIQgFgIgOAAIgZAAgAHNi0IAAgsIAsAAIAAAsgADFi0IAAgsIAsAAIAAAsgAiEi0IAAgsIAtAAIAAAsg");
	this.shape.setTransform(70.6,22.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141.1,45.1);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AveEhIADpCIe6AAIgDJCg");
	this.shape.setTransform(99.2,29);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ69 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.setTransform(-18,0,0.995,0.983);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,0,189,60);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AgjDqIAAnTIBHAAIAAHTg");
	this.shape.setTransform(3.7,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.4,46.9);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AhFDpIAAhDIAZABQAUAAAKgJQANgLAAgZIAAlkIBHAAIAAFfQAAAhgIAZQgJAWgPAOQgOAMgUAGQgPAGgXAAg");
	this.shape.setTransform(7.1,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,47.1);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AhjDqIAAnTIDHAAIAABDIh9AAIAACDIBjAAIAABBIhjAAIAACJIB9AAIAABDg");
	this.shape.setTransform(10,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,46.9);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AgjDqIAAmQIhOAAIAAhDIDjAAIAABDIhOAAIAAGQg");
	this.shape.setTransform(11.4,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,46.9);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AA2DqIgMhVIhZAAIgNBVIhEAAIBLnTIBqAAIBMHTgAAfBVIghjrIgkDrIBFAAg");
	this.shape.setTransform(12.9,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.8,46.9);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AAnDqQgHgUAAgmIAAhJQAAghgLgNQgLgOgYAAIgZAAIAAC/IhKAAIAAnTIBvAAQAaAAAVAGQAVAHANANQANAOAHAUQAGAVAAAbIAAAlQABAkgMAXQgMAYgZAKQANAGAKAJQAJAJAGANQALAYAAAnIAABIQAAAmAIATgAgngWIAcAAQAUAAAKgKQAMgNABgbIAAguQgBgZgIgMQgJgLgSAAIgjAAg");
	this.shape.setTransform(11.5,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,46.9);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AgjDqIAAmQIhOAAIAAhDIDjAAIAABDIhOAAIAAGQg");
	this.shape.setTransform(11.4,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,46.9);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AguDoQgUgIgPgPQgNgPgIgWQgGgWAAgcIAAgdIBFAAIAAAhQAAAZALALQAJAKATAAQAQAAAJgKQALgLAAgZQAAgRgGgPQgGgOgLgOQgKgOglgkQgjgegPgYQgLgSgFgTQgGgVAAgYQAAgcAGgWQAHgWAOgPQAOgPAUgIQAUgIAZAAQAbAAAUAIQAVAIANAPQAOAPAHAWQAHAWAAAcIAAAPIhGAAIAAgUQAAgYgKgMQgJgKgSAAQgQAAgJAKQgJAMAAAYQAAARAFAQQAGAOALAOQAKANAlAkQAjAeAPAZQALASAFATQAGAVAAAYQAAAcgHAWQgHAWgNAPQgOAPgVAIQgVAHgaAAQgZAAgVgHg");
	this.shape.setTransform(11,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,48);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF47").s().p("AAnDqQgHgUAAgmIAAhJQAAghgLgNQgLgOgYAAIgZAAIAAC/IhKAAIAAnTIBvAAQAaAAAVAGQAVAHANANQANAOAHAUQAGAVAAAbIAAAlQABAkgMAXQgMAYgZAKQANAGAKAJQAJAJAGANQALAYAAAnIAABIQAAAmAIATgAgngWIAcAAQAUAAAKgKQAMgNABgbIAAguQgBgZgIgMQgJgLgSAAIgjAAg");
	this.shape.setTransform(11.5,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,46.9);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF47").s().p("AhjDqIAAnTIDHAAIAABDIh9AAIAACDIBjAAIAABBIhjAAIAACJIB9AAIAABDg");
	this.shape.setTransform(10,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,46.9);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF47").s().p("AhgDqIAAnTIDBAAIAABDIh3AAIAACOIBcAAIAABAIhcAAIAADCg");
	this.shape.setTransform(9.8,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,46.9);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF47").s().p("AA2DqIgMhVIhZAAIgNBVIhEAAIBLnTIBqAAIBMHTgAAfBVIghjrIgkDrIBFAAg");
	this.shape.setTransform(12.9,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.8,46.9);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF47").s().p("AhrDqIAAhCICLlOIiEAAIAAhDIDQAAIAABCIiLFOICLAAIAABDg");
	this.shape.setTransform(10.8,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.6,46.9);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_right();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187,268);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girl_left();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137,255);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ronaldo_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149,287);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgnbAbGMgMgg2LMBn3AAAMAAAA2Lg");
	this.shape.setTransform(332.5,173.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665,347);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dollar2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87,50);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dollar1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,64);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ronaldo_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,254,300);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF47").s().p("AjJDhQgVgHgNgPIgHgJQgJgMgFgOQgIgWAAgcIAAjsQAAgaAIgWQAHgVAOgPQANgOAVgJQAVgHAaAAQAaAAAVAHQAUAJAOAOQANAPAHAVQAIAWAAAaIAADsQAAAcgIAWQgEAOgJAMIgHAJQgOAPgUAHQgVAIgaAAQgaAAgVgIgAi2icQgKAKABAYIAAD1QgBAYAKALQAJAKATAAQASAAAJgKQAKgLAAgYIAAj1QAAgYgKgKQgJgKgSAAQgTAAgJAKgAq6DhQgTgHgOgPIgHgJQgIgMgGgOQgGgWAAgcIAAgcIBDAAIAAAhQAAAYAKAKQAJALATAAQASAAAJgLQAKgKAAgYQAAgRgFgPQgHgOgKgNQgKgNgmgkQghgdgPgXQgLgSgFgSQgGgVAAgYQgBgbAIgVQAGgVAOgPQANgOATgJQAVgHAaAAQAaAAATAHQAUAJANAOQAOAPAHAVQAHAVgBAbIAAAQIhDAAIAAgUQAAgYgKgKQgIgKgSAAQgTAAgIAKQgKAKABAYQAAARAFAPQAFAOALANQAKAOAnAiQAiAeAOAYQALARAFATQAGAUAAAXQAAAcgHAWQgFAOgIAMIgHAJQgOAPgUAHQgTAIgbAAQgaAAgVgIgAKvDkIgMhTIhZAAIgMBTIhCAAIBKnHIBoAAIBJHHgAKZBTIgjjlIgjDlIBGAAgAEFDkIAAnHIBxAAQAbAAAVAIQATAHAOAOQANAOAHAWQAGAUAAAcIAADlQAAAcgGAUQgGASgKANIgEAFQgOAPgTAHQgVAHgbAAgAFMCjIApAAQASAAAJgLQAKgKAAgYIAAjsQAAgXgKgLQgJgKgSAAIgpAAgACVDkQgFgMgBgWIgBgWIAAhIQAAgfgLgOQgLgNgZAAIgZAAIAAC6IhGAAIAAnHIBrAAQAcAAATAHQAVAGANAOQANAMAGAUQAGATABAbIAAAkQAAAkgMAXQgMAWgYAKQANAGAJAIQAJAJAHANQAKAXAAAmIAABGIABAWQACAWAFAMgABGgVIAcAAQAWAAAJgKQAMgMABgbIAAgsQAAgZgJgLQgJgMgTAAIgjAAgAn3DkIAAnHIBqAAQAbAAATAIQAVAHANAOQAOAOAGAWQAHAUAAAcIAAA7QAAAcgHAVQgGATgOAOQgNAPgVAHQgTAIgbAAIgiAAIAACrgAmvgHIAiAAQARAAAJgKQAIgKABgXIAAhEQgBgYgIgLQgJgJgRAAIgiAAg");
	this.shape.setTransform(59.4,18.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-5.1,152,46.7);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C3F2").s().p("AKpDbQgMgGAAgPIAAgEIAiAAIAAADQAAAJAKAAQALAAAAgLQABgLgRAAIgFAAIAAgYQgQgCgLgGQgMgGgIgKQgJgKgEgOQgDgOAAgSIAAimQAAgTAEgPQAFgPAKgKQAJgLAOgFQAOgFATAAQATAAAOAFQAOAFAJALQAKAKAFAPQAFAPgBATIAAAgIgvAAIAAgjQgBgQgGgIQgHgHgNAAQgMAAgGAHQgIAIAAAQIAACsQAAARAIAHQAGAIAMAAQANAAAHgIQAGgHABgRIAAguIAvAAIAAArQAAASgDAOQgEAOgJALQgJAKgMAGQgMAGgQABIAAAPQASAAAIAFQAJAFAAAMQgBARgNAGQgJAFgYAAQgVAAgLgGgAP4CdIg/jnIAADnIgtAAIAAlAIA/AAIA0C/IAAi/IAtAAIAAFAgAM2CdIAAlAIAyAAIAAFAgAItCdIAAlAIAzAAIAAFAgAGbCdIgxiAIgQAdIAABjIgyAAIAAlAIAyAAIAACNIBCiNIAzAAIhGCQIBGCwgADdCdIgIg6Ig/AAIgIA6IgvAAIA0lAIBKAAIA0FAgADOA3IgYihIgZChIAxAAgAAYCdIAAjlIghDlIgvAAIgmjiIAADiIgsAAIAAlAIBHAAIAlDjIAgjjIBHAAIAAFAgAjiCdIg/jnIAADnIgtAAIAAlAIA/AAIA0C/IAAi/IAtAAIAAFAgAmYCdIgIg6Ig/AAIgJA6IguAAIA0lAIBKAAIAzFAgAmoA3IgYihIgYChIAwAAgAq6CdIAAgtIBfjlIhbAAIAAguICQAAIAAAtIhhDlIBhAAIAAAugAr9CdIgJg6Ig+AAIgJA6IguAAIA0lAIBJAAIA0FAgAsMA3IgZihIgZChIAyAAgAu4CdIgxiAIgQAdIAABjIgyAAIAAlAIAyAAIAACNIBCiNIAzAAIhHCQIBHCwgAM4i0IAAgsIAtAAIAAAsgAIwi0IAAgsIAtAAIAAAsg");
	this.shape.setTransform(93.5,20.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-2.2,213.8,45.1);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hui();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape.setTransform(4,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg_pole();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,922,305);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egz7AbGMAAAg2LMBn3AAAMgMgA2Lg");
	this.shape.setTransform(332.5,173.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665,347);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bahsegel_logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157,50);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ronaldo3();
	this.instance.setTransform(-103.5,-142.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.5,-142.5,207,285);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ronaldo3();
	this.instance.setTransform(-103.5,-142.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.5,-142.5,207,285);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ronaldo3();
	this.instance.setTransform(-103.5,-142.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.5,-142.5,207,285);


(lib.Символ68 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ69();
	this.instance.setTransform(94,29.5,1,1,0,0,0,94,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.06,scaleY:1.06},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,0,189,60);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 55
	this.instance = new lib.Символ55();
	this.instance.setTransform(173.5,24,1,1,0,0,0,3.6,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({y:22.2},4,cjs.Ease.get(1)).to({y:24},5,cjs.Ease.get(1)).wait(1));

	// Символ 54
	this.instance_1 = new lib.Символ54();
	this.instance_1.setTransform(157.7,24.1,1,1,0,0,0,7,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({y:22.1},4,cjs.Ease.get(1)).to({y:24.1},5,cjs.Ease.get(1)).wait(2));

	// Символ 53
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(138.1,24,1,1,0,0,0,10,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({y:22},4,cjs.Ease.get(1)).to({y:24},5,cjs.Ease.get(1)).wait(3));

	// Символ 52
	this.instance_3 = new lib.Символ52();
	this.instance_3.setTransform(113.4,24,1,1,0,0,0,11.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({y:21.7},4,cjs.Ease.get(1)).to({y:24},5,cjs.Ease.get(1)).wait(4));

	// Символ 51
	this.instance_4 = new lib.Символ51();
	this.instance_4.setTransform(87.9,24,1,1,0,0,0,12.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({y:21.7},4,cjs.Ease.get(1)).to({y:24},5,cjs.Ease.get(1)).wait(5));

	// Символ 49
	this.instance_5 = new lib.Символ49();
	this.instance_5.setTransform(61.6,24,1,1,0,0,0,11.5,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({y:21.7},4,cjs.Ease.get(1)).to({y:24},5,cjs.Ease.get(1)).wait(6));

	// Символ 48
	this.instance_6 = new lib.Символ48();
	this.instance_6.setTransform(35.4,24,1,1,0,0,0,11.4,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({y:21.7},4,cjs.Ease.get(1)).to({y:24},5,cjs.Ease.get(1)).wait(7));

	// Символ 47
	this.instance_7 = new lib.Символ47();
	this.instance_7.setTransform(11,23.9,1,1,0,0,0,11,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({y:21.9},4,cjs.Ease.get(1)).to({y:23.9},5,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.2,48);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.setTransform(112.3,23.4,1,1,0,0,0,11.5,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:21.9},4,cjs.Ease.get(1)).to({y:23.4},5,cjs.Ease.get(1)).wait(12));

	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(86.2,23.4,1,1,0,0,0,10,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:21.9},4,cjs.Ease.get(1)).to({y:23.4},5,cjs.Ease.get(1)).wait(13));

	// Символ 44
	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(63,23.4,1,1,0,0,0,9.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({y:21.9},4,cjs.Ease.get(1)).to({y:23.4},5,cjs.Ease.get(1)).wait(14));

	// Символ 43
	this.instance_3 = new lib.Символ43();
	this.instance_3.setTransform(36.9,23.4,1,1,0,0,0,12.9,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:21.9},4,cjs.Ease.get(1)).to({y:23.4},5,cjs.Ease.get(1)).wait(15));

	// Символ 42
	this.instance_4 = new lib.Символ42();
	this.instance_4.setTransform(10.8,23.4,1,1,0,0,0,10.8,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:21.9},4,cjs.Ease.get(1)).to({y:23.4},5,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.7,46.9);


(lib.Символ39 = function() {
	this.initialize();

	// Символ 41
	this.instance = new lib.Символ41();
	this.instance.setTransform(92.2,90.7,1,1,0,0,0,88.6,23.9);

	// Символ 40
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(65.5,36.8,1,1,0,0,0,61.9,23.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.6,13.4,177.2,101.4);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ74();
	this.instance.setTransform(61.9,14.5,0.89,0.89,0,0,0,131.3,27.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-10.2,233.8,49.6);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ73();
	this.instance.setTransform(87,19.1,1.21,1.21,0,0,0,70.5,22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.7,-8.1,170.8,54.5);


(lib.Символ33 = function() {
	this.initialize();

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.setTransform(158.9,75.5,1,1,0,0,0,76,17.9);

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(171.3,26,1,1,0,0,0,82.8,21.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27.9,-4,233.7,100.9);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(332.4,173.5,1,1,0,0,0,332.4,173.5);
	this.instance.alpha = 0.531;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665,347);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29 - копия: 2 - копия: 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(-22.6,17.9,0.659,0.659,-1.2,0,0,43.5,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:25,rotation:9.1,x:42.3,y:3},0).wait(1).to({rotation:16.1,x:86.9,y:-7.3},0).wait(1).to({rotation:20.5,x:114.8,y:-13.8},0).wait(1).to({rotation:23.3,x:132.4,y:-17.8},0).wait(1).to({rotation:24.9,x:142.8,y:-20.3},0).wait(1).to({rotation:25.8,x:148.6,y:-21.6},0).wait(1).to({rotation:26.4,x:152.5,y:-22.6},0).wait(1).to({rotation:26.9,x:155.3,y:-23.2},0).wait(1).to({rotation:27.2,x:157.2,y:-23.6},0).wait(1).to({rotation:27.4,x:158.7,y:-24},0).wait(1).to({rotation:27.6,x:159.8,y:-24.2},0).wait(1).to({rotation:27.7,x:160.6,y:-24.4},0).wait(1).to({rotation:27.8,x:161.2,y:-24.5},0).wait(1).to({rotation:27.9,x:161.9,y:-24.7},0).wait(1).to({rotation:28,x:162.4,y:-24.8},0).wait(1).to({rotation:28.1,x:163.2,y:-25},0).wait(1).to({rotation:28.3,x:164.1,y:-25.2},0).wait(1).to({rotation:28.5,x:165.6,y:-25.5},0).wait(1).to({rotation:28.8,x:167.8,y:-26.1},0).to({regX:43.4,regY:25.1,rotation:58.8,x:252.8,y:-55.8,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(38.5,-20,0.659,0.659,88.8,0,0,33,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:32,rotation:58,x:84.3,y:-23.4},0).wait(1).to({rotation:41,x:109.4,y:-25.3},0).wait(1).to({rotation:31,x:124.2,y:-26.4},0).wait(1).to({rotation:24.1,x:134.4,y:-27.2},0).wait(1).to({rotation:18.7,x:142.3,y:-27.8},0).wait(1).to({rotation:14.5,x:148.6,y:-28.3},0).wait(1).to({rotation:11.2,x:153.5,y:-28.6},0).wait(1).to({rotation:8.5,x:157.5,y:-29},0).wait(1).to({rotation:6.3,x:160.8,y:-29.2},0).wait(1).to({rotation:4.5,x:163.5,y:-29.4},0).wait(1).to({rotation:3,x:165.7,y:-29.6},0).wait(1).to({rotation:1.8,x:167.4,y:-29.7},0).wait(1).to({rotation:0.8,x:168.9,y:-29.8},0).wait(1).to({rotation:0,x:170.1,y:-29.9},0).wait(1).to({rotation:-0.6,x:171.1,y:-30},0).wait(1).to({regX:33.1,regY:31.9,rotation:-1.2,x:171.9},0).to({regY:32,x:269.6,y:-99,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29 - копия: 2 - копия
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(47.5,171,0.999,0.999,-18,0,0,43.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-7.8,x:135,y:120.6},0).wait(1).to({rotation:-0.8,x:195.1,y:86.1},0).wait(1).to({rotation:3.6,x:232.6,y:64.5},0).wait(1).to({rotation:6.4,x:256.4,y:50.8},0).wait(1).to({rotation:8.1,x:270.5,y:42.8},0).wait(1).to({rotation:9,x:278.3,y:38.2},0).wait(1).to({rotation:9.6,x:283.5,y:35.3},0).wait(1).to({rotation:10,x:287.2,y:33.1},0).wait(1).to({rotation:10.3,x:289.9,y:31.6},0).wait(1).to({rotation:10.6,x:291.9,y:30.5},0).wait(1).to({rotation:10.7,x:293.4,y:29.7},0).wait(1).to({rotation:10.9,x:294.5,y:29},0).wait(1).to({rotation:11,x:295.3,y:28.5},0).wait(1).to({x:296.1,y:28.1},0).wait(1).to({rotation:11.1,x:296.9,y:27.6},0).wait(1).to({rotation:11.3,x:297.9,y:27.1},0).wait(1).to({rotation:11.4,x:299.2,y:26.3},0).wait(1).to({rotation:11.6,x:301.1,y:25.1},0).wait(1).to({regY:25.1,rotation:12,x:304.1,y:23.5},0).to({regY:25,rotation:42,x:414.5,y:-57,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия: 2 - копия
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(29.9,83.2,0.999,0.999,72,0,0,33,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:41.1,x:94.8,y:58.1},0).wait(1).to({rotation:24.1,x:130.4,y:44.3},0).wait(1).to({rotation:14.2,x:151.3,y:36.3},0).wait(1).to({rotation:7.3,x:165.8,y:30.6},0).wait(1).to({rotation:1.9,x:177.1,y:26.3},0).wait(1).to({rotation:-2.3,x:185.9,y:22.9},0).wait(1).to({rotation:-5.6,x:192.9,y:20.2},0).wait(1).to({rotation:-8.3,x:198.6,y:18},0).wait(1).to({rotation:-10.5,x:203.2,y:16.2},0).wait(1).to({rotation:-12.3,x:207,y:14.8},0).wait(1).to({rotation:-13.8,x:210.1,y:13.6},0).wait(1).to({rotation:-15,x:212.6,y:12.6},0).wait(1).to({rotation:-16,x:214.7,y:11.8},0).wait(1).to({rotation:-16.8,x:216.4,y:11.1},0).wait(1).to({rotation:-17.5,x:217.8,y:10.6},0).wait(1).to({rotation:-18,x:218.9,y:10.1},0).to({x:330.3,y:-133,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29 - копия: 2
	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(33.4,95.2,0.769,0.769,14.8,0,0,43.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:25.1,x:111,y:99.2},0).wait(1).to({rotation:32.1,x:164.4,y:101.9},0).wait(1).to({rotation:36.5,x:197.7,y:103.6},0).wait(1).to({rotation:39.3,x:218.8,y:104.7},0).wait(1).to({rotation:40.9,x:231.3,y:105.3},0).wait(1).to({rotation:41.8,x:238.2,y:105.7},0).wait(1).to({rotation:42.4,x:242.8,y:105.9},0).wait(1).to({rotation:42.9,x:246.1,y:106.1},0).wait(1).to({rotation:43.2,x:248.5,y:106.2},0).wait(1).to({rotation:43.4,x:250.3,y:106.3},0).wait(1).to({rotation:43.6,x:251.6,y:106.4},0).wait(1).to({rotation:43.7,x:252.5},0).wait(1).to({rotation:43.8,x:253.3,y:106.5},0).wait(1).to({rotation:43.9,x:254},0).wait(1).to({rotation:44,x:254.7,y:106.6},0).wait(1).to({rotation:44.1,x:255.6},0).wait(1).to({rotation:44.3,x:256.8,y:106.7},0).wait(1).to({rotation:44.5,x:258.5,y:106.8},0).wait(1).to({regY:25.1,rotation:44.8,x:261.1,y:106.9},0).to({regY:25,rotation:74.8,x:366.1,y:101,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия: 2
	this.instance_5 = new lib.Символ28();
	this.instance_5.setTransform(58.8,31,0.769,0.769,104.8,0,0,33,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:32,rotation:74,x:111.1,y:41.9},0).wait(1).to({rotation:57,x:139.9,y:47.9},0).wait(1).to({rotation:47,x:156.8,y:51.4},0).wait(1).to({rotation:40.1,x:168.5,y:53.8},0).wait(1).to({rotation:34.7,x:177.6,y:55.7},0).wait(1).to({rotation:30.5,x:184.8,y:57.2},0).wait(1).to({rotation:27.2,x:190.5,y:58.3},0).wait(1).to({rotation:24.5,x:195.1,y:59.3},0).wait(1).to({rotation:22.3,x:198.8,y:60.1},0).wait(1).to({rotation:20.5,x:201.9,y:60.7},0).wait(1).to({rotation:19,x:204.3,y:61.3},0).wait(1).to({rotation:17.8,x:206.4,y:61.6},0).wait(1).to({rotation:16.8,x:208.1,y:62},0).wait(1).to({rotation:16,x:209.5,y:62.3},0).wait(1).to({rotation:15.4,x:210.6,y:62.5},0).wait(1).to({regY:31.9,rotation:14.8,x:211.5,y:62.7},0).to({regY:32,x:343.4,y:16.6,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29 - копия
	this.instance_6 = new lib.Символ29();
	this.instance_6.setTransform(32.4,74.4,0.81,0.81,-11.8,0,0,43.6,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:43.5,rotation:-1.6,x:107.2,y:41.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:5.4,x:158.7,y:19},0).wait(1).to({rotation:9.8,x:190.8,y:4.9},0).wait(1).to({rotation:12.6,x:211.2,y:-4},0).wait(1).to({rotation:14.2,x:223.2,y:-9.4},0).wait(1).to({rotation:15.2,x:229.8,y:-12.2},0).wait(1).to({rotation:15.8,x:234.4,y:-14.3},0).wait(1).to({rotation:16.2,x:237.5,y:-15.6},0).wait(1).to({rotation:16.5,x:239.8,y:-16.7},0).wait(1).to({rotation:16.8,x:241.5,y:-17.4},0).wait(1).to({rotation:16.9,x:242.8,y:-17.9},0).wait(1).to({rotation:17.1,x:243.7,y:-18.4},0).wait(1).to({rotation:17.2,x:244.5,y:-18.6},0).wait(1).to({x:245.1,y:-18.9},0).wait(1).to({rotation:17.3,x:245.8,y:-19.3},0).wait(1).to({rotation:17.5,x:246.7,y:-19.6},0).wait(1).to({rotation:17.6,x:247.8,y:-20.1},0).wait(1).to({rotation:17.8,x:249.4,y:-20.8},0).wait(1).to({regX:43.6,regY:24.9,rotation:18.2,x:252.1,y:-22},0).to({regX:43.5,regY:25,rotation:48.2,x:347.9,y:-77.1,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28 - копия
	this.instance_7 = new lib.Символ28();
	this.instance_7.setTransform(25.9,2.2,0.81,0.81,78.2,0,0,33,31.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:32,rotation:47.3,x:80.2,y:-12.3},0).wait(1).to({rotation:30.3,x:110.1,y:-20.3},0).wait(1).to({rotation:20.4,x:127.7,y:-24.9},0).wait(1).to({rotation:13.5,x:139.9,y:-28.2},0).wait(1).to({rotation:8.1,x:149.4,y:-30.7},0).wait(1).to({rotation:3.9,x:156.8,y:-32.7},0).wait(1).to({rotation:0.6,x:162.6,y:-34.3},0).wait(1).to({rotation:-2.1,x:167.4,y:-35.5},0).wait(1).to({rotation:-4.3,x:171.3,y:-36.5},0).wait(1).to({rotation:-6.1,x:174.4,y:-37.4},0).wait(1).to({rotation:-7.6,x:177.1,y:-38.1},0).wait(1).to({rotation:-8.8,x:179.2,y:-38.7},0).wait(1).to({rotation:-9.8,x:180.9,y:-39.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-10.6,x:182.4,y:-39.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-11.3,x:183.5,y:-39.8},0).wait(1).to({regY:31.9,rotation:-11.8,x:184.5,y:-40.2},0).to({regY:32,x:286.7,y:-145.6,alpha:0},8,cjs.Ease.get(1)).wait(6));

	// Символ 29
	this.instance_8 = new lib.Символ29();
	this.instance_8.setTransform(31.9,22.9,0.95,0.95,0,0,0,43.6,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:43.5,rotation:10.2,x:125.8,y:3.1},0).wait(1).to({rotation:17.3,x:190.3,y:-10.4},0).wait(1).to({rotation:21.6,x:230.6,y:-18.9},0).wait(1).to({rotation:24.4,x:256.1,y:-24.3},0).wait(1).to({rotation:26.1,x:271.2,y:-27.5},0).wait(1).to({rotation:27,x:279.6,y:-29.2},0).wait(1).to({rotation:27.6,x:285.2,y:-30.4},0).wait(1).to({rotation:28,x:289.2,y:-31.3},0).wait(1).to({rotation:28.3,x:292.1,y:-31.9},0).wait(1).to({rotation:28.6,x:294.2,y:-32.3},0).wait(1).to({rotation:28.7,x:295.8,y:-32.7},0).wait(1).to({rotation:28.9,x:297,y:-32.9},0).wait(1).to({rotation:29,x:297.9,y:-33.1},0).wait(1).to({rotation:29.1,x:298.7,y:-33.3},0).wait(1).to({rotation:29.2,x:299.6,y:-33.4},0).wait(1).to({rotation:29.3,x:300.6,y:-33.7},0).wait(1).to({rotation:29.4,x:302.1,y:-33.9},0).wait(1).to({rotation:29.7,x:304.1,y:-34.4},0).wait(1).to({regY:25.1,rotation:30,x:307.4,y:-35},0).to({regX:43.4,regY:25,rotation:60,x:430.8,y:-75.4,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_9 = new lib.Символ28();
	this.instance_9.setTransform(41.8,-61.7,0.95,0.95,90,0,0,33,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:59.1,x:107.8,y:-65.2},0).wait(1).to({rotation:42.1,x:144.1,y:-67.2},0).wait(1).to({rotation:32.2,x:165.4,y:-68.3},0).wait(1).to({rotation:25.3,x:180.1,y:-69.1},0).wait(1).to({rotation:19.9,x:191.7,y:-69.7},0).wait(1).to({rotation:15.7,x:200.6,y:-70.3},0).wait(1).to({rotation:12.4,x:207.7,y:-70.7},0).wait(1).to({rotation:9.7,x:213.5,y:-71},0).wait(1).to({rotation:7.5,x:218.2,y:-71.2},0).wait(1).to({rotation:5.7,x:222.1,y:-71.4},0).wait(1).to({rotation:4.2,x:225.2,y:-71.6},0).wait(1).to({rotation:3,x:227.8,y:-71.7},0).wait(1).to({rotation:2,x:230,y:-71.8},0).wait(1).to({rotation:1.2,x:231.6,y:-72},0).wait(1).to({rotation:0.5,x:233},0).wait(1).to({rotation:0,x:234.2,y:-72.1},0).to({x:377,y:-168.8,alpha:0},8,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-93,148.1,301.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.setTransform(-127.4,32.4,1,1,0,0,0,59.4,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:42.6},9,cjs.Ease.get(1)).to({x:62.6},5,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(102.6,37.5,1.17,1.17,0,0,0,85,17.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:80.5,alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.4,9,152,46.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ15();
	this.instance.setTransform(371,-4,1,1,0,0,0,30,30);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(36));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(103,5,1,1,0,0,0,30,30);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(278,5,1,1,0,0,0,30,30);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(29));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(498,24,1,1,0,0,0,30,30);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(12));

	// Слой 1 - копия
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(206,36,1,1,0,0,0,30,30);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(24));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_5 = new lib.Символ15();
	this.instance_5.setTransform(5,24,1,1,0,0,0,30,30);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(43));

	// Слой 1 - копия: 2
	this.instance_6 = new lib.Символ15();
	this.instance_6.setTransform(577,5,1,1,0,0,0,30,30);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(6));

	// Слой 1
	this.instance_7 = new lib.Символ15();
	this.instance_7.setTransform(-89,5,1,1,0,0,0,30,30);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({alpha:1},4).to({alpha:0},5).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(4.1,4.1,2.11,2.11,0,0,0,4,4);
	this.instance.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance.cache(-2,-2,12,12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-10.4,32,32);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 18
	this.instance = new lib.Символ10();
	this.instance.setTransform(832,-2.5,1,1,0,0,0,4,4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(4));

	// 17
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(779,-0.5,1,1,0,0,0,4,4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(5));

	// 16
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(728.5,0.5,1,1,0,0,0,4,4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(6));

	// 15
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(676.5,0.5,1,1,0,0,0,4,4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(7));

	// 14
	this.instance_4 = new lib.Символ10();
	this.instance_4.setTransform(624.5,2,1,1,0,0,0,4,4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(8));

	// 13
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(573,2.5,1,1,0,0,0,4,4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(9));

	// 12
	this.instance_6 = new lib.Символ10();
	this.instance_6.setTransform(521,3.5,1,1,0,0,0,4,4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(10));

	// 11
	this.instance_7 = new lib.Символ10();
	this.instance_7.setTransform(469.5,3.5,1,1,0,0,0,4,4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(11));

	// 10
	this.instance_8 = new lib.Символ10();
	this.instance_8.setTransform(417.5,3.5,1,1,0,0,0,4,4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(12));

	// 9
	this.instance_9 = new lib.Символ10();
	this.instance_9.setTransform(365.5,4,1,1,0,0,0,4,4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(13));

	// 8
	this.instance_10 = new lib.Символ10();
	this.instance_10.setTransform(314.5,3.5,1,1,0,0,0,4,4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(14));

	// 7
	this.instance_11 = new lib.Символ10();
	this.instance_11.setTransform(263,5,1,1,0,0,0,4,4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(15));

	// 6
	this.instance_12 = new lib.Символ10();
	this.instance_12.setTransform(210.5,5,1,1,0,0,0,4,4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(16));

	// 5
	this.instance_13 = new lib.Символ10();
	this.instance_13.setTransform(159.5,4,1,1,0,0,0,4,4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(17));

	// 4
	this.instance_14 = new lib.Символ10();
	this.instance_14.setTransform(107.5,5,1,1,0,0,0,4,4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(18));

	// 3
	this.instance_15 = new lib.Символ10();
	this.instance_15.setTransform(55,5,1,1,0,0,0,4,4);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(18));

	// 2
	this.instance_16 = new lib.Символ10();
	this.instance_16.setTransform(4,4,1,1,0,0,0,4,4);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(19));

	// 1
	this.instance_17 = new lib.Символ10();
	this.instance_17.setTransform(-50,2,1,1,0,0,0,4,4);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},4).to({alpha:0},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,-12.4,33,32);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(332.4,173.5,1,1,0,0,0,332.4,173.5);
	this.instance.alpha = 0.531;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665,347);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(127,150,1,1,0,0,0,127,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,254,300);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_174 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_194 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(20).call(this.frame_194).wait(11));

	// ron2
	this.instance = new lib.Символ36();
	this.instance.setTransform(387,427,1,1,0,0,0,74.5,143.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).to({y:137},9,cjs.Ease.get(1)).to({y:147},10,cjs.Ease.get(1)).wait(1).to({y:138},4,cjs.Ease.get(1)).to({y:447},5,cjs.Ease.get(1)).wait(1));

	// girl2
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(754,146.5,1,1,0,0,0,93.5,134);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).to({x:414},9,cjs.Ease.get(1)).to({x:424},10,cjs.Ease.get(1)).wait(1).to({y:150.5},4,cjs.Ease.get(1)).to({y:446.5},5,cjs.Ease.get(1)).wait(1));

	// girl1
	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(-102,153,1,1,0,0,0,68.5,127.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175).to({_off:false},0).to({x:338},9,cjs.Ease.get(1)).to({x:328},10,cjs.Ease.get(1)).wait(1).to({y:158},4,cjs.Ease.get(1)).to({y:453},5,cjs.Ease.get(1)).wait(1));

	// text
	this.instance_3 = new lib.Символ39();
	this.instance_3.setTransform(-101,135.6,1,1,0,0,0,107,82.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(175).to({_off:false},0).to({x:149},9,cjs.Ease.get(1)).to({x:139},10,cjs.Ease.get(1)).wait(1).to({x:769},9,cjs.Ease.get(1)).wait(1));

	// ron3
	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.setTransform(772.1,136);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация2("synched",0);
	this.instance_5.setTransform(252.1,136);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация3("synched",0);
	this.instance_6.setTransform(146.1,136);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({_off:true,x:252.1},10,cjs.Ease.get(1)).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},10,cjs.Ease.get(1)).to({_off:true,x:146.1},47).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},47).to({x:156.1},5,cjs.Ease.get(1)).to({x:-153.9},5,cjs.Ease.get(1)).wait(3).to({startPosition:0},0).wait(31));

	// logo
	this.instance_7 = new lib.Символ3();
	this.instance_7.setTransform(-280,25,1,1,0,0,0,78.5,25);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:110},9,cjs.Ease.get(1)).wait(1).to({x:120},62).to({x:110},8,cjs.Ease.get(1)).to({x:730},10,cjs.Ease.get(1)).wait(8).to({x:761},0).to({x:521},10,cjs.Ease.get(1)).to({x:411},48).to({x:421},5,cjs.Ease.get(1)).to({x:-199},5,cjs.Ease.get(1)).wait(7).to({x:-100},0).to({x:120},9,cjs.Ease.get(1)).to({x:110},10,cjs.Ease.get(1)).wait(1).to({x:750},9,cjs.Ease.get(1)).wait(1));

	// btn.png
	this.btn = new lib.Символ68();
	this.btn.setTransform(-121,207,1,1,0,0,0,94,29.5);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(16).to({_off:false},0).to({x:159},9,cjs.Ease.get(1)).to({x:149},8,cjs.Ease.get(1)).to({x:199},40).to({x:164},9,cjs.Ease.get(1)).to({x:749},9,cjs.Ease.get(1)).wait(22).to({x:496.5},9,cjs.Ease.get(1)).to({x:520},10,cjs.Ease.get(1)).to({x:506},26).to({x:516},5,cjs.Ease.get(1)).to({x:-124},5,cjs.Ease.get(1)).wait(7).to({x:156},9,cjs.Ease.get(1)).to({x:143},10,cjs.Ease.get(1)).wait(1).to({x:783},8,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// text2
	this.instance_8 = new lib.Символ33();
	this.instance_8.setTransform(717,120,1,1,0,0,0,129,54);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(99).to({_off:false},0).to({x:467},12,cjs.Ease.get(1)).to({x:417},45).to({x:427},5,cjs.Ease.get(1)).to({x:-193},5,cjs.Ease.get(1)).wait(39));

	// text
	this.instance_9 = new lib.Символ16();
	this.instance_9.setTransform(-296.6,111,1,1,0,0,0,112,54);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({x:143.4},9,cjs.Ease.get(1)).wait(1).to({x:193.4},56).to({x:183.4},7,cjs.Ease.get(1)).to({x:1053.4},10,cjs.Ease.get(1)).wait(114));

	// ronaldo_1.png - копия
	this.instance_10 = new lib.Символ4();
	this.instance_10.setTransform(-174,132,1,1,0,0,0,127,139);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({x:396},17,cjs.Ease.get(1)).to({x:416},53).to({x:406},5,cjs.Ease.get(1)).to({x:896},8,cjs.Ease.get(1)).wait(118));

	// money
	this.instance_11 = new lib.Символ30();
	this.instance_11.setTransform(402.1,167.8,0.78,0.78,0,0,0,43.5,73.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).to({_off:true},29).wait(63).to({_off:false,skewY:180,x:252},0).to({_off:true},29).wait(63));

	// black2
	this.instance_12 = new lib.Символ31();
	this.instance_12.setTransform(990.9,132,1,1,0,0,0,332.4,173.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(95).to({_off:false},0).to({x:550.9},14,cjs.Ease.get(1)).to({x:470.9},55).to({x:480.9},5,cjs.Ease.get(1)).to({scaleX:1.57,x:130.9,alpha:0},5,cjs.Ease.get(1)).wait(31));

	// black
	this.instance_13 = new lib.Символ6();
	this.instance_13.setTransform(-375.5,133.1,1,1,0,0,0,332.4,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:94.5},17,cjs.Ease.get(1)).wait(1).to({x:144.5},56).to({x:134.5},10,cjs.Ease.get(1)).to({scaleX:1.41,x:315.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(80).to({_off:false,scaleX:1,x:-365.5,alpha:1},0).to({x:104.5},9,cjs.Ease.get(1)).to({x:94.5},10,cjs.Ease.get(1)).wait(1).to({x:-365.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-707.9,-40.4,665,347);


(lib.Символ1 = function() {
	this.initialize();

	// blik2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(856.2,168.3,1,1,0,0,0,11,11);

	// blik2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(671.3,225.2,1,1,0,0,0,11,11);

	// blik2 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(501.3,172.3,1,1,0,0,0,11,11);

	// blik2 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(352.3,230.2,1,1,0,0,0,11,11);

	// blik2 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(220.3,180.3,1,1,0,0,0,11,11);

	// blik2 - копия: 2 - копия
	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(90.3,217.2,1,1,0,0,0,11,11);

	// blik2 - копия: 2
	this.instance_6 = new lib.Символ14();
	this.instance_6.setTransform(289.3,45.3,1,1,0,0,0,11,11);

	// blik2 - копия
	this.instance_7 = new lib.Символ14();
	this.instance_7.setTransform(609.3,45.3,1,1,0,0,0,11,11);

	// blik2
	this.instance_8 = new lib.Символ14();
	this.instance_8.setTransform(339.3,105.3,1,1,0,0,0,11,11);

	// blik
	this.instance_9 = new lib.Символ14();
	this.instance_9.setTransform(279.3,112.3,1,1,0,0,0,11,11);

	// light2 
	this.instance_10 = new lib.Символ9();
	this.instance_10.setTransform(57,167,1,1,0,0,0,4,4);

	// light
	this.instance_11 = new lib.Символ9();
	this.instance_11.setTransform(57,67,1,1,0,0,0,4,4);

	// bg
	this.instance_12 = new lib.Символ8();
	this.instance_12.setTransform(461,152.5,1,1,0,0,0,461,152.5);

	this.addChild(this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,0,933.4,305);


// stage content:
(lib.bahsegel_ronaldo_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.oblast.addEventListener("mouseover", fl_MouseOverHandler_7);
		
		function fl_MouseOverHandler_7()
		{
		 _this.an.btn.gotoAndPlay(1);
			
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.oblast.addEventListener("mouseout", fl_MouseOutHandler_5);
		
		function fl_MouseOutHandler_5()
		{
		 _this.an.btn.gotoAndPlay(5);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		
		//link
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		//bg
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.bg.x = - stage.mouseX / 50;
		}
		
		
		
		//over
		
		stage.canvas.onmouseover = qwe;
		
		  function qwe()
		{
		    _this.an.gotoAndPlay(175);
		
		}
		
		
		
		//out
		
		stage.canvas.onmouseout = qwe2;
		
		  function qwe2()
		{
		    _this.an.gotoAndPlay(195);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.oblast = new lib.Символ71();
	this.oblast.setTransform(146.4,234,0.985,1,0,0,0,99.1,29);
	new cjs.ButtonHelper(this.oblast, 0, 1, 2, false, new lib.Символ71(), 3);

	this.timeline.addTween(cjs.Tween.get(this.oblast).wait(1));

	// an
	this.an = new lib.Символ2();
	this.an.setTransform(245.5,176.5,1,1,0,0,0,234.5,150);

	this.timeline.addTween(cjs.Tween.get(this.an).wait(1));

	// BG
	this.bg = new lib.Символ1();
	this.bg.setTransform(93,152.5,1,1,0,0,0,259,152.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377,138.5,1453,347);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
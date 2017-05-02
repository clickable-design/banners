(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 26,
	color: "#FFFFFF",
	manifest: [
		{src:"images/afafaf.png?1466593852117", id:"afafaf"},
		{src:"images/agagagagagaga.png?1466593852117", id:"agagagagagaga"},
		{src:"images/arm.png?1466593852117", id:"arm"},
		{src:"images/asdfdasasfasfafdas.png?1466593852117", id:"asdfdasasfasfafdas"},
		{src:"images/body.png?1466593852117", id:"body"},
		{src:"images/fhhfhf.png?1466593852117", id:"fhhfhf"},
		{src:"images/gghhghhg.png?1466593852118", id:"gghhghhg"},
		{src:"images/gsgsg.png?1466593852118", id:"gsgsg"},
		{src:"images/head.png?1466593852118", id:"head"},
		{src:"images/tors.png?1466593852118", id:"tors"},
		{src:"images/vulk.png?1466593852118", id:"vulk"}
	]
};



// symbols:



(lib.afafaf = function() {
	this.initialize(img.afafaf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.agagagagagaga = function() {
	this.initialize(img.agagagagagaga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,71);


(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,139);


(lib.asdfdasasfasfafdas = function() {
	this.initialize(img.asdfdasasfasfafdas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,96);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,555);


(lib.fhhfhf = function() {
	this.initialize(img.fhhfhf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,512,512);


(lib.gghhghhg = function() {
	this.initialize(img.gghhghhg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.gsgsg = function() {
	this.initialize(img.gsgsg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,96);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.tors = function() {
	this.initialize(img.tors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.vulk = function() {
	this.initialize(img.vulk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,136);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gsgsg();
	this.instance.setTransform(-41,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-48,82,96);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agagagagagaga();
	this.instance.setTransform(-28,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-35.5,56,71);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ANHDAIAAkkIBNAAIAACOICUiPIAbAAIAAEkIhMAAIAAiQIiVCRgAhLDAIAAkkIBLAAIAACOICUiPIAbAAIAAEkIhOAAIAAiQIiRCRgALXC/IgSgkIh0AAIgRAkIhJAAIAAgKICEkcIAgAAICEEcIAAAKgAJqBaIBCAAIgihMgAD6C/IAAkjICAAAQAjAAAsAiQANAPAHAVQAGATABASQgBAVgGAUQgHATgNAPQgNAQgUAJQgJAFgLACQgNACgNAAIg2AAIAABLgAFEAxIA2AAQAOAAAKgNQAHgMABgRQAAgPgIgMQgEgFgGgEQgHgEgHAAIg2AAgAluC/IAAkjIDTAAIAABDIiIAAIAAAiIA2AAQASAAAcAIQAUAIANANQANAOAHARQAHARgBASQABASgHARQgHARgNAOQgNAOgUAHQgcAIgSAAgAkjB8IA2AAQAOAAAJgIQAHgIAAgNQAAgLgHgIQgJgJgOAAIg2AAgAoDC/IAAkjIBLAAIAAEjgAskC/IAAkjIBLAAIAABYIA2AAQARAAAdAJQATAGAOAPQAMAOAIATQAGASAAATQAAAUgGASQgIATgMAOQgOAPgTAJQgdAIgRAAgArZB8IA2AAQAOAAAKgLQAHgKAAgOQgBgPgIgKQgIgKgOAAIg2AAgAxCC/IAAkjIB9AAQASAAARAIQARAGANAMQAMANAHAQQAGARABATQAAALgHAOQgGAOgLAJQASAJAJAQQAIAPAAAUQAAAUgFAQQgGARgLAMQgNANgQAHQgSAHgWAAgAv6B9IA7AAQALAAAGgIQAGgHAAgKQAAgKgGgHQgHgIgKAAIg7AAgAv6AMIAvAAQAKAAAHgHQAFgFAAgJQAAgKgGgGQgFgIgMAAIguAAgAOyh4QgNgFgJgJQgJgJgGgNQgFgOAAgRIArgEQABALAHAGQAHAGAOAAQAOAAAHgFQAIgGACgMIArAEQAAARgGAOQgFANgIAJQgKAJgOAFQgNAEgRAAQgSAAgNgEg");
	this.shape.setTransform(13.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-19.3,218.4,38.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AOpB6IAAgOQgKgBgJgCQgPgFgLgIQgMgJgHgMQgDgGgCgHQgCgIAAgIIAyAAQAAAJAKAGIALADIAAgjQgOgBgKgDQgOgEgJgHQgKgHgFgJQgGgMAAgQQAAgWAYgcQALgIAOgEQAJgDAKgBIAAgVIAYAAIAAAWIAOADQAOAEALAIQAMAJAGAMIAFANQABAIAAAIIgxAAQAAgKgJgFIgFgDIAAAnIATADQAQADAKAFQAMAFAGALQADAGACAHQABAIAAAJQgKAlgPALQgMAIgPAEQgIADgJABIAAAOgAPBA9IAJgEQAKgFAAgIQAAgFgDgEQgDgDgFgCIgIgCgAOggxQgJAFAAAJQgBAGACADQADAEAEACIAKAEIAAgkIgJADgALZBoQgOgFgLgJQgKgJgGgNIgEgOIgCgQIAAhFQAAgLAGgSQAGgNAKgJQALgJAOgFQANgEAQAAQAQAAANAEQAOAFALAJQAKAJAGANQAGASAAALIAABFIgBAQIgFAOQgGANgKAJQgLAJgOAFQgNAEgQAAQgQAAgNgEgALjgwQgIAHAAALIAABDQAAAMAIAHQAHAGAMAAQAMAAAHgGQAIgHAAgMIAAhDQAAgLgIgHQgHgGgMAAQgMAAgHAGgAIUBoQgOgFgLgJQgKgJgGgNIgEgOIgCgQIAAhFQAAgLAGgSQAGgNAKgJQALgJAOgFQANgEAQAAQAQAAANAEQAOAFALAJQAKAJAGANQAGASAAALIAABFIgBAQIgFAOQgGANgKAJQgLAJgOAFQgNAEgQAAQgQAAgNgEgAIegwQgIAHAAALIAABDQAAAMAIAHQAHAGAMAAQAMAAAHgGQAIgHAAgMIAAhDQAAgLgIgHQgHgGgMAAQgMAAgHAGgAr0BmQgJgDgIgFQgJgFgHgHQgHgHgGgIQgGgIgFgKQgEgKgCgLQgCgMAAgNQAAhEBogjQANAAAZAGQAJAEAJAFQAIAFAHAGQAIAHAGAIQAGAIAEAKQAEAKACALQADAMAAALQAABGhoAjQgagCgNgEgArgguQgJADgHAHQgIAHgEAKQgEALAAALQAAANAEALQAEAKAIAHQAHAHAJAEQAJADAKAAQAKAAAIgDQAKgEAHgHQAHgHAEgKQAFgLAAgNQAAgLgFgLQgEgKgHgHQgHgHgKgDQgIgEgKAAQgKAAgJAEgAAYBpIAAjKIA1AAIAABiIBnhjIATAAIAADKIg2AAIAAhkIhmBlgAE3BoIAAgIIBNhtQAEgGACgGQADgIAAgFQAAgHgDgEQgFgEgJAAQgJAAgFAEQgGAFAAAKIgsAAQAAgQAFgNQAFgLAJgJQAJgIAMgEQALgFAOAAQALAAAJACQAKACAHAFQAIAEAGAHQAFAGAEAHQAEAIABAIQACAJgBAJQAAAJgEAJQgDAJgFAHIgpA5IA8AAIAAAugAhOBoIAAhHIgLAAQgNAAgLgBQgLgCgJgDQgKgEgHgFQgHgFgGgGQgGgHgEgGQgEgJgDgKQgDgNgCgiIAAgZIA2AAIAAAZQAAAgAGAKQAFAIAIAEQAJAEAPAAIAKAAIAAhTIA1AAIAADJgAlkBoIAAgFIAghCIhFh6IAAgIIA7AAIAmBLIABAAIAjhLIA4AAIAAAIIhgDBgAm9BoIg1h1IgzB1IgzAAIAAgHIBbjEIAXAAIBbDEIAAAHgAuSBoIAAiZIg+AAIAACZIg1AAIAAjJICpAAIAADJg");
	this.shape.setTransform(1.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,206.2,24.5);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AleCQIAAgWIh3AAIAAAWIgrAAIAAhEIAUAAIBGieIAWAAIBICeIAVAAIAABEgAm4BMIA6AAIgdhKgALjB6IAAjKIA1AAIAABiIBnhjIATAAIAADKIg2AAIAAhkIhnBlgAkZB6IAAjKIA1AAIAABiIBnhjIASAAIAADKIg1AAIAAhkIhmBlgArHB6IAAjKIA1AAIAABiIBmhjIATAAIAADKIg2AAIAAhkIhmBlgAQ7B5IgthOIgUABIAABNIg1AAIAAjJIA1AAIAABNIAEAAQAJAAAIgCQAIgBAFgEQAKgGAEgLQAGgPgBgmIA2AAQAAApgEASQgFAOgIAJQgNAPgJAHIA3BZIAAAIgAIaB5IAAjJIBZAAQAZAAAeAYQAJAKAEAOQAFAOAAAOQAAAMgFAOQgEANgJALQgJALgOAGQgHADgHACQgJABgJAAIglAAIAAA0gAJOAXIAlAAQAKAAAGgJQAFgJABgJQAAgMgFgIQgEgEgDgDQgFgCgFAAIglAAgAHNB5IgMgZIhQAAIgMAZIgzAAIAAgHIBbjEIAXAAIBcDEIAAAHgAGCAzIAuAAIgYgzgAAXB5IAAjJIA1AAIAACZIAxAAIAAiZIA2AAIAACZIAwAAIAAiZIA1AAIAADJgAsWB5IgMgZIhQAAIgMAZIgyAAIAAgHIBajEIAXAAIBcDEIAAAHgAthAzIAuAAIgYgzgAwAB5IAAhRIg/AAIAABRIg1AAIAAjJIA1AAIAABKIA/AAIAAhKIA1AAIAADJgAp+heQgJgDgHgGQgFgHgEgJQgEgJAAgMIAegDQAAAIAGAEQAEAEAKAAQAJAAAGgEQAFgEACgIIAdADQAAAMgEAJQgDAJgHAHQgGAGgJADQgKADgMAAQgMAAgJgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.1,-14.4,228.2,29);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.afafaf();
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#560000").s().p("Ag6DbIBJjhIAsAAIh0DhgAgpgGIAAjUIAhAxIAACjg");
	this.shape.setTransform(5.9,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA0000").s().p("AhegGIA7AAIAAijIBJgxIAADUIAgAAIAZgBIAAABIhKDhg");
	this.shape_1.setTransform(-2.2,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,23.6,23.6,44);


(lib.Символ12 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.asdfdasasfasfafdas();
	this.instance.setTransform(-30.9,-22.6,0.472,0.472);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tors();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vulk();
	this.instance.setTransform(1.2,-156.9,4.351,4.351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,-156.9,870.2,591.7);


(lib.Символ12копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gghhghhg();
	this.instance.setTransform(-11,-11,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arm();
	this.instance.setTransform(-31.7,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-69.5,64,139);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agagagagagaga();
	this.instance.setTransform(-28,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(0.3,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-35.5,56,71);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agagagagagaga();
	this.instance.setTransform(-28,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(1.5,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-35.5,56,71);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agagagagagaga();
	this.instance.setTransform(-28,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(0.2,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-35.5,56,71);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(1.1,1.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-35.5,56,71);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:13.6,scaleX:1.04,scaleY:1.04,x:14.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:14.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:14.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:15},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:15.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:15.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:15.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:15.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:15.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:15.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:15.9},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:16},0).wait(1).to({regX:0,scaleX:1.18,scaleY:1.18,x:0},0).wait(1).to({regX:13.6,scaleX:1.14,scaleY:1.14,x:15.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:15.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:14.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:14.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:14.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:14.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:14.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:14.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:14},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:13.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:13.8},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:13.7},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:0,scaleX:1,scaleY:1,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-19.3,218.4,38.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(-6,53.7,1.665,1.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.2,scaleX:1.57,scaleY:1.57,x:-4.1},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:-4.2},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-4.3},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-4.4},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-4.5},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-4.6},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({regX:0,scaleX:1.12,scaleY:1.12,x:-6},0).wait(1).to({regX:1.2,scaleX:1.21,scaleY:1.21,x:-4.5},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-4.4},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-4.3},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:-4.2},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.51,scaleY:1.51},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:-4.1},0).wait(1).to({scaleX:1.56,scaleY:1.56},0).wait(1).to({scaleX:1.57,scaleY:1.57},0).wait(1).to({scaleX:1.59,scaleY:1.59},0).wait(1).to({scaleX:1.6,scaleY:1.6},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:-4},0).wait(1).to({scaleX:1.62,scaleY:1.62},0).wait(1).to({scaleX:1.63,scaleY:1.63},0).wait(1).to({scaleX:1.64,scaleY:1.64},0).wait(1).to({scaleX:1.65,scaleY:1.65},0).wait(1).to({scaleX:1.66,scaleY:1.66},0).wait(1).to({regX:0,scaleX:1.67,scaleY:1.67,x:-6},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(-6,10,1.249,1.249);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.35,scaleY:1.35},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({scaleX:1.38,scaleY:1.38},0).wait(1).to({scaleX:1.4,scaleY:1.4},0).wait(1).to({scaleX:1.41,scaleY:1.41},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.44,scaleY:1.44},0).wait(1).to({scaleX:1.45,scaleY:1.45},0).wait(1).to({scaleX:1.46,scaleY:1.46},0).wait(1).to({scaleX:1.46,scaleY:1.46},0).wait(1).to({scaleX:1.47,scaleY:1.47},0).wait(1).to({scaleX:1.47,scaleY:1.47},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.48,scaleY:1.48},0).wait(1).to({scaleX:1.49,scaleY:1.49},0).wait(1).to({scaleX:1.45,scaleY:1.45},0).wait(1).to({scaleX:1.42,scaleY:1.42},0).wait(1).to({scaleX:1.39,scaleY:1.39},0).wait(1).to({scaleX:1.37,scaleY:1.37},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({scaleX:1.34,scaleY:1.34},0).wait(1).to({scaleX:1.33,scaleY:1.33},0).wait(1).to({scaleX:1.32,scaleY:1.32},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(1).to({scaleX:1.29,scaleY:1.29},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.28,scaleY:1.28},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.27,scaleY:1.27},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.7,-8,343.3,82.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ17();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:79.1},5,cjs.Ease.get(1)).wait(20).to({x:154.5},5,cjs.Ease.get(1)).wait(20).to({x:231.4},5,cjs.Ease.get(1)).wait(20).to({x:154.5},5,cjs.Ease.get(1)).wait(20).to({x:78.3},5,cjs.Ease.get(1)).wait(20).to({x:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,23.6,23.6,44);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-47.8,82,96);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(50,54,1,1,0,0,0,50,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.01,y:54.5},14).to({scaleX:1,scaleY:1,y:54},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-47.8,82,96);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-47.8,82,96);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(36.5,36.1,1,1,0,0,0,36.5,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:36,y:36},0).wait(1).to({rotation:0.1,y:36.1},0).wait(1).to({rotation:0.3,x:36.6,y:36.2},0).wait(1).to({rotation:0.5,y:36.4},0).wait(1).to({rotation:0.9,x:36.7,y:36.6},0).wait(1).to({rotation:1.2,x:36.8,y:36.9},0).wait(1).to({rotation:1.7,y:37.2},0).wait(1).to({rotation:2.2,x:36.9,y:37.5},0).wait(1).to({regY:36.1,rotation:2.8,x:37,y:38},0).wait(1).to({regY:36,rotation:3.4,x:37.2,y:38.3},0).wait(1).to({rotation:3.9,y:38.7},0).wait(1).to({rotation:4.4,x:37.3,y:39},0).wait(1).to({rotation:4.8,y:39.2},0).wait(1).to({rotation:5.2,x:37.4,y:39.5},0).wait(1).to({rotation:5.5,x:37.5,y:39.7},0).wait(1).to({rotation:5.7,y:39.8},0).wait(1).to({rotation:5.9,y:39.9},0).wait(1).to({rotation:6,y:40},0).wait(1).to({regY:36.1,x:37.6,y:40.1},0).wait(1).to({regY:36,x:37.5,y:40},0).wait(1).to({rotation:5.9,y:39.9},0).wait(1).to({rotation:5.7,y:39.8},0).wait(1).to({rotation:5.5,y:39.7},0).wait(1).to({rotation:5.2,x:37.4,y:39.5},0).wait(1).to({rotation:4.8,x:37.3,y:39.3},0).wait(1).to({rotation:4.4,y:39},0).wait(1).to({rotation:4,x:37.2,y:38.7},0).wait(1).to({rotation:3.4,x:37.1,y:38.3},0).wait(1).to({regY:36.1,rotation:2.8,y:38.1},0).wait(1).to({regY:36,rotation:2.3,x:36.9,y:37.6},0).wait(1).to({rotation:1.8,x:36.8,y:37.3},0).wait(1).to({rotation:1.4,y:37},0).wait(1).to({rotation:1,x:36.7,y:36.7},0).wait(1).to({rotation:0.7,x:36.6,y:36.5},0).wait(1).to({rotation:0.4,y:36.3},0).wait(1).to({rotation:0.3,y:36.2},0).wait(1).to({rotation:0.1,x:36.5,y:36.1},0).wait(1).to({rotation:0,y:36},0).wait(1).to({regY:36.1,y:36.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-46.3,82,96);


(lib.Символ13копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12копия();
	this.instance.setTransform(0,6.3,0.568,0.568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,0,12.5,12.5);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(-5.5,48,1,1,0,0,0,-5.5,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,regY:0,x:0.2,y:0},0).wait(2).to({rotation:0.1},0).wait(1).to({x:0.3},0).wait(1).to({rotation:0.2},0).wait(1).to({x:0.4},0).wait(1).to({rotation:0.3,x:0.5},0).wait(1).to({rotation:0.4,y:0.1},0).wait(1).to({rotation:0.5,x:0.6},0).wait(1).to({rotation:0.7,x:0.7},0).wait(1).to({regX:-5.5,regY:48,rotation:0.8,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:1,x:1,y:0.1},0).wait(1).to({rotation:1.1,x:1.2},0).wait(1).to({rotation:1.3,x:1.3},0).wait(1).to({rotation:1.4,x:1.4,y:0.2},0).wait(1).to({rotation:1.6,x:1.5},0).wait(1).to({rotation:1.7,x:1.6},0).wait(1).to({rotation:1.8,x:1.7},0).wait(2).to({rotation:1.9,x:1.8},0).wait(3).to({regX:-5.5,regY:48,rotation:2,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:1.9,x:1.8,y:0.2},0).wait(3).to({rotation:1.8},0).wait(1).to({x:1.7},0).wait(1).to({rotation:1.7,x:1.6},0).wait(1).to({rotation:1.6,x:1.5},0).wait(1).to({rotation:1.5},0).wait(1).to({rotation:1.4,x:1.3},0).wait(1).to({rotation:1.3,x:1.2},0).wait(1).to({rotation:1.1,x:1.1},0).wait(1).to({rotation:1,x:1},0).wait(1).to({regX:-5.5,regY:48,rotation:0.8,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:0.7,x:0.8,y:0.1},0).wait(1).to({rotation:0.6,x:0.7},0).wait(1).to({rotation:0.4,x:0.6},0).wait(1).to({x:0.5,y:0},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2,x:0.4},0).wait(1).to({rotation:0.1},0).wait(1).to({x:0.3},0).wait(1).to({rotation:0},0).wait(3).to({regX:-5.5,regY:48,x:-5.5,y:48},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-69.5,64,139);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 10
	this.instance = new lib.Symbol11();
	this.instance.setTransform(62.3,-139.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-163.2,-151.2,1,1,0,0,0,-110.3,53);

	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(18,-238.4,1,1,0,0,0,36.5,36.1);

	this.instance_3 = new lib.body();
	this.instance_3.setTransform(-92.1,-277.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-277.5,188,555);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1.4},7,cjs.Ease.get(-1)).to({y:3},8,cjs.Ease.get(1)).to({y:1.5},7,cjs.Ease.get(-1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-277.5,188,555);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(-1.6,0,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.1},15,cjs.Ease.get(-1)).to({x:14},20,cjs.Ease.get(1)).to({x:6.1},27,cjs.Ease.get(-1)).to({x:-1.6},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-231.6,156.9,463.2);


(lib.Символ33 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ30();
	this.instance.setTransform(-1,0.5,0.881,0.881,0,0,0,-7.2,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:36.7},3).to({y:-119.5},6).wait(1).to({y:36.7},6).to({y:0.5},3).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(-14.5,20.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:-3.6,alpha:1},3).wait(1).to({y:20.4,alpha:0},3).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-36.2,302.6,72.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15_1();
	this.instance.setTransform(0,22,0.546,0.546,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:115.7,regY:45.5,scaleY:0.5,x:63.2,y:51.9},0).wait(1).to({scaleY:0.46,y:55.7},0).wait(1).to({scaleY:0.44,y:58.6},0).wait(1).to({scaleY:0.41,y:60.9},0).wait(1).to({scaleY:0.39,y:62.9},0).wait(1).to({scaleY:0.38,y:64.4},0).wait(1).to({scaleY:0.37,y:65.6},0).wait(1).to({scaleY:0.36,y:66.7},0).wait(1).to({regX:0,regY:-0.1,scaleY:0.35,x:0,y:51.8},0).wait(1).to({regX:115.7,regY:45.5,scaleY:0.39,x:63.2,y:63.1},0).wait(1).to({scaleY:0.43,y:59.5},0).wait(1).to({scaleY:0.45,y:56.8},0).wait(1).to({scaleY:0.47,y:54.5},0).wait(1).to({scaleY:0.49,y:52.5},0).wait(1).to({scaleY:0.51,y:51},0).wait(1).to({scaleY:0.52,y:49.7},0).wait(1).to({scaleY:0.53,y:48.7},0).wait(1).to({scaleY:0.54,y:47.7},0).wait(1).to({regX:0,regY:-0.1,scaleY:0.55,x:0,y:22},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,34.9,12.9,24);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 14
	this.instance = new lib.Символ16();
	this.instance.setTransform(66.8,-84.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).to({alpha:1},5).wait(75).to({alpha:0},5).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(193.7,19,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({x:193.4,y:19.1},0).to({x:67.4,y:19},10).to({x:151.3,y:19.2},9).to({x:109.5,y:19},10).wait(86));

	// Слой 3
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(151.6,19,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({guide:{path:[151.6,19.1,170.5,107.7,193.3,19]}},10).to({guide:{path:[193.3,18.8,193.4,18.4,193.5,18,149.8,-95.6,108.1,18,107.2,21.2,106.4,24.2]}},9).to({guide:{path:[106.5,24.4,84.5,104.8,66.3,19.3]}},10).wait(86));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("AD+FfIAAkbIGDAAIAAEbg");
	var mask_graphics_14 = new cjs.Graphics().p("AD+FUIAAkaIGDAAIAAEag");
	var mask_graphics_15 = new cjs.Graphics().p("AD+FKIAAkaIGDAAIAAEag");
	var mask_graphics_16 = new cjs.Graphics().p("AD+FAIAAkbIGDAAIAAEbg");
	var mask_graphics_17 = new cjs.Graphics().p("AD+E2IAAkbIGDAAIAAEbg");
	var mask_graphics_18 = new cjs.Graphics().p("AD+ErIAAkaIGDAAIAAEag");
	var mask_graphics_19 = new cjs.Graphics().p("AD+EhIAAkaIGDAAIAAEag");
	var mask_graphics_20 = new cjs.Graphics().p("AD+EXIAAkZIGDAAIAAEZg");
	var mask_graphics_21 = new cjs.Graphics().p("AD+ENIAAkZIGDAAIAAEZg");
	var mask_graphics_22 = new cjs.Graphics().p("AD+ECIAAkYIGDAAIAAEYg");
	var mask_graphics_31 = new cjs.Graphics().p("AD+ECIAAkYIGDAAIAAEYg");
	var mask_graphics_32 = new cjs.Graphics().p("AD+EPIAAkYIGDAAIAAEYg");
	var mask_graphics_33 = new cjs.Graphics().p("AD+EcIAAkbIGDAAIAAEbg");
	var mask_graphics_34 = new cjs.Graphics().p("AD+EpIAAkbIGDAAIAAEbg");
	var mask_graphics_35 = new cjs.Graphics().p("AD+E2IAAkbIGDAAIAAEbg");
	var mask_graphics_36 = new cjs.Graphics().p("AD+FDIAAkbIGDAAIAAEbg");
	var mask_graphics_37 = new cjs.Graphics().p("AD+FPIAAkaIGDAAIAAEag");
	var mask_graphics_38 = new cjs.Graphics().p("AD+FcIAAkaIGDAAIAAEag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:64.2,y:35.1}).wait(1).to({graphics:mask_graphics_14,x:64.2,y:34.1}).wait(1).to({graphics:mask_graphics_15,x:64.2,y:33.1}).wait(1).to({graphics:mask_graphics_16,x:64.2,y:32}).wait(1).to({graphics:mask_graphics_17,x:64.2,y:31}).wait(1).to({graphics:mask_graphics_18,x:64.2,y:30}).wait(1).to({graphics:mask_graphics_19,x:64.2,y:29}).wait(1).to({graphics:mask_graphics_20,x:64.2,y:27.9}).wait(1).to({graphics:mask_graphics_21,x:64.2,y:26.9}).wait(1).to({graphics:mask_graphics_22,x:64.2,y:25.9}).wait(9).to({graphics:mask_graphics_31,x:64.2,y:25.9}).wait(1).to({graphics:mask_graphics_32,x:64.2,y:27.2}).wait(1).to({graphics:mask_graphics_33,x:64.2,y:28.4}).wait(1).to({graphics:mask_graphics_34,x:64.2,y:29.7}).wait(1).to({graphics:mask_graphics_35,x:64.2,y:31}).wait(1).to({graphics:mask_graphics_36,x:64.2,y:32.3}).wait(1).to({graphics:mask_graphics_37,x:64.2,y:33.6}).wait(1).to({graphics:mask_graphics_38,x:64.2,y:34.9}).wait(1).to({graphics:null,x:0,y:0}).wait(125));

	// Слой 5
	this.instance_3 = new lib.Символ13копия();
	this.instance_3.setTransform(109,29.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({_off:true},26).wait(125));

	// Слой 2
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(109.5,19,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({y:0.5},9).wait(9).to({y:19},7).wait(11).to({guide:{path:[109.5,19.1,119.7,57.2,129.4,60.2,129.5,60.2,129.6,60.3,134.5,61.7,139.3,54.1,144,46.5,148.6,29.9,149.2,27.6,149.8,25.2,150.4,22.7,151.1,20,151.2,19.5,151.3,19.1,151.3,19.1,151.3,19.1]}},10).to({guide:{path:[151.3,19.1,151.3,19.2,151.3,19.2,151.2,19.6,151.1,20,150.4,22.8,149.8,25.3,149.2,27.6,148.6,29.9,139,67.1,129.9,86.8,118.8,110.4,108.1,110.4,97.5,110.4,87.3,87.6,77.1,64.8,67.3,19.2,67.3,19.2,67.4,19.1]}},9).to({guide:{path:[67.4,18.9,67.4,18.9,67.4,18.8,145.8,-81.6,193.5,18.5]}},10).wait(86));

	// Слой 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(67.4,19,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({x:67,y:18.9},0).to({guide:{path:[66.9,18.8,87.4,-68,109.4,19]}},10).to({guide:{path:[109.5,19.2,109.5,19.3,109.5,19.4,109.6,19.6,109.6,19.8,144.4,124.3,193.2,19.3,193.2,19.3,193.2,19.2]}},9).to({guide:{path:[193.1,19,172.1,-70.6,151.1,18.3]}},10).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.2,-4,162.6,46);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text1 = new lib.Символ33();
	this.text1.setTransform(58.5,-236.5);

	this.text = new cjs.Text("", "29px 'Intro'", "#FF0000");
	this.text.lineHeight = 31;
	this.text.lineWidth = 100;
	this.text.setTransform(-59.6,-252.4);

	this.nap = new lib.Символ4();
	this.nap.setTransform(55,-89.4,1.415,1.415,0,0,0,130.2,20.6);

	this.instance = new lib.Символ57();
	this.instance.setTransform(-223.2,-47,1,1,0,0,0,-29.7,0);

	this.instance_1 = new lib.fhhfhf();
	this.instance_1.setTransform(-166.8,-132.2,0.853,0.853);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(0,-152.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.nap},{t:this.text},{t:this.text1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-304.6,640,609.3);


(lib.Символ10 = function(mode,startPosition,loop) {
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
	this.main1 = new lib.Символ11();
	this.main1.setTransform(-20.7,0,1,1,0,0,0,-20.7,0);

	this.timeline.addTween(cjs.Tween.get(this.main1).to({regX:229.3,regY:-250.1,scaleX:1.19,scaleY:1.19,x:219.2,y:-244},6).to({regY:-250.2,scaleX:1.11,scaleY:1.11,y:-244.1},3).wait(1).to({regY:-250.1,scaleX:1.19,scaleY:1.19,y:-244},3).to({regX:-20.7,regY:0,scaleX:1,scaleY:1,x:-20.7,y:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-304.6,640,609.3);


// stage content:



(lib.bratva600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_3.bind(this));
		
		function fl_CustomMouseCursor_3() {
			this.kursor.x = stage.mouseX;
			this.kursor.y = stage.mouseY;
		}
		 this.cursor = "none";
		
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.main.main1.text1.gotoAndPlay(1);
			_this.main.main1.nap.gotoAndStop(85);
			_this.kursor.gotoAndStop(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
			_this.main.gotoAndPlay(10);
			_this.main.main1.text1.gotoAndPlay(11);
			_this.main.main1.nap.gotoAndPlay(1);
			_this.kursor.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.kursor = new lib.Символ12();
	this.kursor.setTransform(-98,180.1);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(546.3,269.2,0.122,0.122,0,0,0,432.1,142.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.main = new lib.Символ10();
	this.main.setTransform(259.3,304.7,1,1,0,0,0,-20.7,0);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260,150,640,609.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
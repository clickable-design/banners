(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg?1471870517634", id:"bg"},
		{src:"images/bgg.png?1471870517634", id:"bgg"},
		{src:"images/dib.png?1471870517634", id:"dib"},
		{src:"images/logostforexcom2.png?1471870517634", id:"logostforexcom2"},
		{src:"images/white.png?1471870517634", id:"white"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.bgg = function() {
	this.initialize(img.bgg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.dib = function() {
	this.initialize(img.dib);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,250);


(lib.logostforexcom2 = function() {
	this.initialize(img.logostforexcom2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,81);


(lib.white = function() {
	this.initialize(img.white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,364);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("Egu3AXbMAAAgu2MBdvAAAMAAAAu2g");
	this.shape.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("AwbE4IAApvMAg3AAAIAAJvg");
	this.shape.setTransform(105.2,31.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dib();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284,250);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AJ7B6IAIhGIgWAAIgcitIAXAAIAZCVIAEAAIASiVIAYAAIgdDzgAICB6IAAjzIBGAAIAAAXIgvAAIAADcgAHPB6IAAhwIAHhUIgDgBIgwDFIggAAIAAjzIAXAAIAABwIgGBYIADABIAwjJIAfAAIAADzgAFRB6IAAh6IgsAAIAAB6IgXAAIAAjzIAXAAIAABmIAsAAIAAhmIAWAAIAADzgADkB6Iggh6IgJAAIAAB6IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgxQAAgHADgGQADgHAEgEQAFgFAGgDQAHgDAHAAIABAAIAAAXIgBAAQgMABAAALIAAAzQAAAKgFAIQgFAKgJADIAgB+gAgNB6IAAjzIAVAAIAABRIAgAAQAOAAAJAKQAKAJAAAOIAABgQAAAOgKAKQgJAJgOAAgAAIBjIAgAAQAKAAAAgKIAAhiQAAgKgKAAIggAAgAhXB6IAAjcIgdAAIAAgXIBQAAIAAAXIgcAAIAADcgAiaB6IgKhIIgqAAIgKBIIgXAAIAhjzIAqAAIAhDzgAinAcIgRh+IgCAAIgRB+IAkAAgAkbB6IAAhkIghAAQgNAAgKgJQgKgKAAgMIAAhwIAXAAIAAByQAAAHAKAAIAhAAIAAh5IAXAAIAADzgAmIB6IgLhIIgpAAIgKBIIgYAAIAijzIApAAIAhDzgAmWAcIgRh+IgBAAIgSB+IAkAAgAoBB6Iggh6IgJAAIAAB6IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgxQAAgHADgGQADgHAEgEQAFgFAGgDQAHgDAHAAIACAAIAAAXIgCAAQgMABAAALIAAAzQAAAKgFAIQgFAKgKADIAiB+gAqMB6QgOAAgKgJQgKgKAAgOIAAixQAAgOAKgJQAKgKAOAAIAOAAQAOAAAKAKQAJAJAAAOIAAAbIgXAAIAAgbQAAgKgKAAIgOAAQgKAAAAAKIAACxQAAAKAKAAIAOAAQAKAAAAgKIAAglIAXAAIAAAlQAAAOgJAKQgKAJgOAAg");
	this.shape.setTransform(68.7,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.4,24.5);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AEODHIADhmQACgzAFgmQAGgqALgnQAMgqAUgrIAAgDIhkAAIAAglICJAAIAAAsQgUAqgMAqQgLAngGApQgFAmgCAyIgCBlgAAPDHQgTAAgPgPQgPgPAAgWIAAklQAAgVAPgQQAQgPASAAIAUAAQAWAAAPAQQAPAPAAAVIAAElQAAAWgPAQQgQAOgVAAgAABA9IAABTQAAAHAFAGQAGAEAGAAIAPAAQAHAAAFgFQAFgFAAgHIAAiqgAAGibQgFAFAAAGIAACQIAxhYIAAg4QAAgGgGgFQgFgGgGAAIgPAAQgHABgFAFgAiYDHQgVAAgPgPQgPgPAAgWIAAklQAAgVAPgQQAQgPAUAAIAUAAQAWAAAPAQQAPAPAAAVIAAElQAAAWgPAQQgQAOgVAAgAimA9IAABTQAAAHAFAGQAGAEAGAAIAPAAQAHAAAFgFQAFgFAAgHIAAiqgAihibQgFAFAAAGIAACQIAxhYIAAg4QAAgGgGgFQgFgGgGAAIgPAAQgHABgFAFgAlrDHIAAgmIAmAAIAAlCIgoAAIAAglIBOAAIAAFnIAmAAIAAAmg");
	this.shape.setTransform(38.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,10.8,73.4,39.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ7B6IAIhGIgWAAIgcitIAXAAIAZCVIAEAAIASiVIAYAAIgdDzgAICB6IAAjzIBGAAIAAAXIgvAAIAADcgAHPB6IAAhwIAHhUIgDgBIgwDFIggAAIAAjzIAXAAIAABwIgGBYIADABIAwjJIAfAAIAADzgAFRB6IAAh6IgsAAIAAB6IgXAAIAAjzIAXAAIAABmIAsAAIAAhmIAWAAIAADzgADkB6Iggh6IgJAAIAAB6IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgxQAAgHADgGQADgHAEgEQAFgFAGgDQAHgDAHAAIABAAIAAAXIgBAAQgMABAAALIAAAzQAAAKgFAIQgFAKgJADIAgB+gAgNB6IAAjzIAVAAIAABRIAgAAQAOAAAJAKQAKAJAAAOIAABgQAAAOgKAKQgJAJgOAAgAAIBjIAgAAQAKAAAAgKIAAhiQAAgKgKAAIggAAgAhXB6IAAjcIgdAAIAAgXIBQAAIAAAXIgcAAIAADcgAiaB6IgKhIIgqAAIgKBIIgXAAIAhjzIAqAAIAhDzgAinAcIgRh+IgCAAIgRB+IAkAAgAkbB6IAAhkIghAAQgNAAgKgJQgKgKAAgMIAAhwIAXAAIAAByQAAAHAKAAIAhAAIAAh5IAXAAIAADzgAmIB6IgLhIIgpAAIgKBIIgYAAIAijzIApAAIAhDzgAmWAcIgRh+IgBAAIgSB+IAkAAgAoBB6Iggh6IgJAAIAAB6IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgxQAAgHADgGQADgHAEgEQAFgFAGgDQAHgDAHAAIACAAIAAAXIgCAAQgMABAAALIAAAzQAAAKgFAIQgFAKgKADIAiB+gAqMB6QgOAAgKgJQgKgKAAgOIAAixQAAgOAKgJQAKgKAOAAIAOAAQAOAAAKAKQAJAJAAAOIAAAbIgXAAIAAgbQAAgKgKAAIgOAAQgKAAAAAKIAACxQAAAKAKAAIAOAAQAKAAAAgKIAAglIAXAAIAAAlQAAAOgJAKQgKAJgOAAg");
	this.shape.setTransform(68.7,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.4,24.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.white();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,364);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(248,188,2,0.298)").s().p("AjDDEQhShRAAhzQAAhyBShRQBRhSByAAQBzAABRBSQBSBRAAByQAABzhSBRQhRBShzAAQhyAAhRhSgAh7h8Qg0A0AABIQAABJA0AzQAzA0BIAAQBJAAA0g0QA0gzgBhJQABhIg0g0Qg0g0hJABQhIgBgzA0g");
	this.shape.setTransform(27.9,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8BC02").s().p("Ah7B8Qg0gzAAhJQAAhIA0g0QAzg0BIABQBJgBA0A0QA0A0gBBIQABBJg0AzQg0A0hJAAQhIAAgzg0g");
	this.shape_1.setTransform(27.9,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,55.7);


(lib.Анимация97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAglIAnAAIAAlEIgpAAIAAgmIBMAAIAAFqIAnAAIAAAlgEgBFAhTIAAg4QAAgTAEgTQAEgSAKgTIA8iDQAGgOAAgZIAAgsQAAgGgFgFQgFgFgFgBIgRAAQgHAAgFAGQgFAFAAAGIAAAsIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAjgJASIg9CFQgPAmAAAVIAAASIBSAAIAAAmgAgUXPQgWAAgPgQQgPgPAAgVIAAg/IAmAAIAAA8QAAASARAAIARAAQARAAAAgSIAAiSQAAgHgGgHQgFgEgGAAQgLAAgHAEQgHAFgGALIgggOIBMiUIhVAAIAAgmIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMANQAMANAAAWIAACaQAAAVgPAPQgPAQgWAAgAAINLIAAhQIhTAAIAAgiIBFkdIA0AAIAAEdIAhAAIAAAiIghAAIAABQgAglLZIAtAAIAAhqIAHiEgAgUDHQgVAAgQgQQgPgPAAgVIAAg/IAmAAIAAA8QAAAHAFAFQAFAGAHAAIASAAQARAAAAgSIAAiQQAAgHgGgGQgHgFgGgBQgSAAgIAOQgHAKAAAYIgmAAIAAjjIB3AAIAAAmIhRAAIAAB1QAOgNAVAAQAWAAAQAPQARAQAAAVIAACXQAAAVgPAPQgQAQgVAAgAgUm7QgWAAgPgPQgPgQAAgVIAAknQAAgVAPgQQAPgPAWAAIAXAAQAWAAAPAPQAPAQAAAVIAAAuIglAAIAAgsQAAgGgFgFQgFgFgHgBIgSAAQgHABgFAFQgFAFAAAGIAABpQAQgOATAAQAXAAAQAPQAPAPAAAWIAACWQAAAVgPAQQgPAPgWAAgAgbqEQgHAMAAAWIAABwQAAAHAFAFQAFAFAHAAIASAAQARAAAAgRIAAiRQAAgGgFgGQgFgEgHgBQgSABgKAPgAglw/IADhmQACgzAFgmQAGgsALgoQAKgqAUgqIAAgCIhiAAIAAgmICHAAIAAAsQgUAqgMAqQgLAngGAsQgFAlgCAyIgBBlgAgU7DQgVAAgQgQQgPgPAAgVIAAiOQAAgRAJgLQAIgKANgEQgLgEgIgKQgIgJAAgNIAAhLQAAgVAPgQQAPgPAWAAIAQAAQATAAAPAPQAQAQAAAVIAABLQAAANgJALQgIAJgKADQAdAQAAAaIAACOQAAAVgPAPQgPAQgVAAgAgi+KIAACQQAAARARABIAQAAQAPgBAAgRIAAiQQAAgSgPAAIgQAAQgRAAAAASgEgAaggnQgGAFAAAHIAABJQAAARASAAIAKAAQAPAAAAgRIAAhJQAAgRgPgBIgKAAQgHABgFAFgEgAUglHQgWAAgPgPQgPgPAAgWIAAg+IAlAAIAAA7QAAAHAFAFQAGAGAHgBIARAAQAHABAGgGQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgUIAAiDQAAgVAPgQQAPgPAWAAIAXAAQAVAAAQAPQAPAQAAAVIAAEnQAAAWgPAPQgQAPgVAAgEgAegqrQgFAFAAAGIAAB9QAAAHAFAGQAGAEAHAAQASABAJgQQAIgMAAgVIAAheQAAgGgFgFQgGgGgHAAIgRAAQgHAAgGAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAgmIAnAAIAAlEIgpAAIAAglIBMAAIAAFpIAnAAIAAAmgEgBFAhTIAAg3QAAgVAEgSQAEgSAKgTIA8iCQAGgOAAgaIAAgrQAAgHgFgGQgFgEgFAAIgRAAQgHgBgFAGQgFAFAAAHIAAArIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAigJATIg9CFQgPAlAAAXIAAASIBSAAIAAAlgAgUXPQgWAAgPgPQgPgQAAgVIAAg+IAmAAIAAA7QAAARARAAIARAAQARAAAAgRIAAiSQAAgHgGgHQgFgEgGAAQgLAAgHAEQgHAFgGALIgggNIBMiWIhVAAIAAglIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMAOQAMAMAAAWIAACaQAAAVgPAQQgPAPgWAAgAAINLIAAhQIhTAAIAAgiIBFkdIA0AAIAAEdIAhAAIAAAiIghAAIAABQgAglLZIAtAAIAAhqIAHiEgAgUDHQgVAAgQgQQgPgPAAgVIAAg/IAmAAIAAA8QAAAHAFAFQAFAFAHABIASAAQARgBAAgRIAAiQQAAgHgGgGQgHgFgGAAQgSAAgIANQgHALAAAWIgmAAIAAjiIB3AAIAAAlIhRAAIAAB1QAOgMAVAAQAWAAAQAPQARAPAAAWIAACXQAAAVgPAPQgQAQgVAAgAgUm7QgWAAgPgPQgPgPAAgWIAAknQAAgVAPgQQAPgPAWAAIAXAAQAWAAAPAPQAPAQAAAVIAAAuIglAAIAAgsQAAgGgFgFQgFgGgHAAIgSAAQgHAAgFAGQgFAFAAAGIAABpQAQgOATAAQAXAAAQAPQAPAPAAAVIAACXQAAAWgPAPQgPAPgWAAgAgbqFQgHAMAAAWIAABxQAAAHAFAFQAFAGAHgBIASAAQARAAAAgRIAAiRQAAgGgFgGQgFgFgHABQgSAAgKAOgAglw/IADhmQACgzAFgmQAGgsALgnQAKgrAUgqIAAgCIhiAAIAAgmICHAAIAAAsQgUAqgMAqQgLAngGArQgFAmgCAyIgBBlgAgU7DQgVAAgQgPQgPgPAAgWIAAiOQAAgQAJgMQAIgJANgGQgLgEgIgIQgIgLAAgNIAAhKQAAgWAPgPQAPgPAWAAIAQAAQATAAAPAPQAQAPAAAWIAABKQAAAPgJAKQgIAJgKACQAdARAAAaIAACOQAAAWgPAPQgPAPgVAAgAgi+KIAACQQAAARARAAIAQAAQAPAAAAgRIAAiQQAAgRgPgBIgQAAQgRABAAARgEgAaggnQgGAFAAAGIAABKQAAARASAAIAKAAQAPAAAAgRIAAhKQAAgRgPAAIgKAAQgHAAgFAGgEgAUglHQgWAAgPgQQgPgPAAgVIAAg/IAlAAIAAA8QAAAHAFAFQAGAFAHABIARAAQAHgBAGgFQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgUIAAiDQAAgWAPgPQAPgPAWAAIAXAAQAVAAAQAPQAPAPAAAWIAAEnQAAAVgPAPQgQAQgVAAgEgAegqrQgFAFAAAHIAAB9QAAAHAFAFQAGAEAHAAQASAAAJgOQAIgNAAgWIAAhcQAAgHgFgFQgGgGgHABIgRAAQgHgBgGAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAglIAnAAIAAlEIgpAAIAAgmIBMAAIAAFqIAnAAIAAAlgEgBFAhTIAAg4QAAgTAEgTQAEgSAKgSIA8iEQAGgOAAgZIAAgsQAAgGgFgFQgFgGgFAAIgRAAQgHABgFAFQgFAFAAAGIAAAsIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAigJAUIg9CEQgPAlAAAWIAAASIBSAAIAAAmgAgUXPQgWAAgPgQQgPgOAAgWIAAg+IAmAAIAAA7QAAARARABIARAAQARgBAAgRIAAiSQAAgIgGgFQgFgGgGAAQgLAAgHAGQgHAEgGALIgggOIBMiUIhVAAIAAgmIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMANQAMANAAAXIAACZQAAAWgPAOQgPAQgWAAgAAINLIAAhQIhTAAIAAgjIBFkcIA0AAIAAEcIAhAAIAAAjIghAAIAABQgAglLYIAtAAIAAhpIAHiEgAgUDHQgVAAgQgPQgPgPAAgWIAAg+IAmAAIAAA7QAAAHAFAFQAFAGAHgBIASAAQARAAAAgRIAAiQQAAgHgGgFQgHgHgGAAQgSAAgIAOQgHAKAAAYIgmAAIAAjjIB3AAIAAAlIhRAAIAAB1QAOgMAVAAQAWAAAQAPQARAQAAAVIAACXQAAAWgPAPQgQAPgVAAgAgUm7QgWAAgPgQQgPgPAAgVIAAknQAAgWAPgPQAPgPAWAAIAXAAQAWAAAPAPQAPAPAAAWIAAAuIglAAIAAgrQAAgHgFgFQgFgFgHAAIgSAAQgHAAgFAFQgFAFAAAHIAABoQAQgOATAAQAXAAAQAPQAPAPAAAWIAACWQAAAVgPAPQgPAQgWAAgAgbqEQgHAMAAAVIAABxQAAAHAFAFQAFAFAHABIASAAQARAAAAgSIAAiQQAAgIgFgFQgFgEgHgBQgSABgKAPgAglw/IADhmQACgzAFgmQAGgsALgoQAKgqAUgqIAAgDIhiAAIAAglICHAAIAAAsQgUArgMApQgLAngGAsQgFAkgCAzIgBBlgAgU7DQgVAAgQgQQgPgPAAgVIAAiPQAAgPAJgMQAIgKANgEQgLgFgIgJQgIgKAAgMIAAhLQAAgWAPgPQAPgPAWAAIAQAAQATAAAPAPQAQAPAAAWIAABLQAAAOgJAKQgIAIgKAEQAdAQAAAZIAACPQAAAVgPAPQgPAQgVAAgAgi+KIAACQQAAASARAAIAQAAQAPAAAAgSIAAiQQAAgRgPAAIgQAAQgRAAAAARgEgAaggnQgGAFAAAHIAABJQAAASASAAIAKAAQAPAAAAgSIAAhJQAAgSgPABIgKAAQgHgBgFAGgEgAUglHQgWAAgPgPQgPgPAAgWIAAg+IAlAAIAAA7QAAAHAFAFQAGAGAHgBIARAAQAHABAGgGQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgVIAAiCQAAgVAPgQQAPgPAWAAIAXAAQAVAAAQAPQAPAQAAAVIAAEnQAAAWgPAPQgQAPgVAAgEgAegqrQgFAFAAAGIAAB9QAAAIAFAEQAGAGAHAAQASgBAJgPQAIgMAAgWIAAhdQAAgGgFgFQgGgFgHgBIgRAAQgHABgGAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAgmIAnAAIAAlEIgpAAIAAglIBMAAIAAFpIAnAAIAAAmgEgBFAhTIAAg3QAAgVAEgSQAEgSAKgTIA8iCQAGgOAAgaIAAgsQAAgGgFgGQgFgEgFAAIgRAAQgHgBgFAGQgFAFAAAGIAAAsIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAigJATIg9CFQgPAlAAAXIAAASIBSAAIAAAlgAgUXPQgWAAgPgQQgPgPAAgVIAAg/IAmAAIAAA8QAAARARABIARAAQARgBAAgRIAAiSQAAgHgGgHQgFgEgGAAQgLAAgHAEQgHAFgGALIgggNIBMiWIhVAAIAAglIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMANQAMAOAAAVIAACaQAAAVgPAPQgPAQgWAAgAAINLIAAhQIhTAAIAAgiIBFkdIA0AAIAAEdIAhAAIAAAiIghAAIAABQgAglLZIAtAAIAAhqIAHiEgAgUDHQgVAAgQgQQgPgPAAgVIAAg/IAmAAIAAA8QAAAHAFAFQAFAFAHABIASAAQARAAAAgSIAAiQQAAgHgGgGQgHgFgGAAQgSAAgIANQgHAKAAAXIgmAAIAAjiIB3AAIAAAmIhRAAIAAB1QAOgNAVAAQAWAAAQAPQARAPAAAWIAACXQAAAVgPAPQgQAQgVAAgAgUm7QgWAAgPgPQgPgPAAgWIAAknQAAgWAPgPQAPgPAWAAIAXAAQAWAAAPAPQAPAPAAAWIAAAuIglAAIAAgsQAAgGgFgFQgFgGgHAAIgSAAQgHAAgFAGQgFAFAAAGIAABpQAQgOATAAQAXAAAQAPQAPAPAAAWIAACWQAAAWgPAPQgPAPgWAAgAgbqFQgHAMAAAXIAABwQAAAHAFAFQAFAGAHgBIASAAQARAAAAgRIAAiRQAAgGgFgGQgFgFgHAAQgSAAgKAPgAglw/IADhmQACgzAFgmQAGgsALgoQAKgqAUgqIAAgCIhiAAIAAgmICHAAIAAAsQgUAqgMAqQgLAngGArQgFAlgCAzIgBBlgAgU7DQgVAAgQgPQgPgPAAgWIAAiOQAAgQAJgMQAIgJANgGQgLgEgIgIQgIgLAAgNIAAhKQAAgVAPgQQAPgPAWAAIAQAAQATAAAPAPQAQAQAAAVIAABKQAAAPgJAKQgIAJgKACQAdARAAAaIAACOQAAAWgPAPQgPAPgVAAgAgi+KIAACQQAAARARAAIAQAAQAPAAAAgRIAAiQQAAgSgPAAIgQAAQgRAAAAASgEgAaggnQgGAFAAAGIAABKQAAARASAAIAKAAQAPAAAAgRIAAhKQAAgQgPgBIgKAAQgHABgFAFgEgAUglHQgWAAgPgQQgPgPAAgVIAAg/IAlAAIAAA8QAAAHAFAFQAGAGAHAAIARAAQAHAAAGgGQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgUIAAiDQAAgWAPgPQAPgPAWAAIAXAAQAVAAAQAPQAPAPAAAWIAAEnQAAAVgPAPQgQAQgVAAgEgAegqrQgFAFAAAHIAAB8QAAAHAFAGQAGAEAHAAQASAAAJgOQAIgNAAgVIAAhdQAAgHgFgFQgGgGgHABIgRAAQgHgBgGAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAglIAnAAIAAlEIgpAAIAAgmIBMAAIAAFqIAnAAIAAAlgEgBFAhTIAAg4QAAgTAEgTQAEgSAKgSIA8iEQAGgOAAgZIAAgrQAAgHgFgFQgFgGgFAAIgRAAQgHABgFAFQgFAFAAAHIAAArIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAigJAUIg9CEQgPAlAAAWIAAASIBSAAIAAAmgAgUXPQgWAAgPgPQgPgPAAgWIAAg/IAmAAIAAA8QAAARARABIARAAQARgBAAgRIAAiSQAAgIgGgFQgFgFgGgBQgLABgHAFQgHAEgGALIgggOIBMiUIhVAAIAAgmIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMAOQAMAMAAAXIAACZQAAAWgPAPQgPAPgWAAgAAINLIAAhQIhTAAIAAgjIBFkcIA0AAIAAEcIAhAAIAAAjIghAAIAABQgAglLYIAtAAIAAhpIAHiEgAgUDHQgVAAgQgPQgPgPAAgWIAAg+IAmAAIAAA7QAAAHAFAFQAFAGAHgBIASAAQARAAAAgRIAAiQQAAgHgGgFQgHgHgGAAQgSAAgIAOQgHAKAAAYIgmAAIAAjjIB3AAIAAAlIhRAAIAAB1QAOgMAVAAQAWAAAQAPQARAQAAAVIAACXQAAAWgPAPQgQAPgVAAgAgUm7QgWAAgPgQQgPgPAAgVIAAknQAAgWAPgPQAPgPAWAAIAXAAQAWAAAPAPQAPAPAAAWIAAAuIglAAIAAgrQAAgHgFgFQgFgFgHAAIgSAAQgHAAgFAFQgFAFAAAHIAABoQAQgOATAAQAXAAAQAPQAPAPAAAWIAACWQAAAVgPAPQgPAQgWAAgAgbqEQgHAMAAAVIAABxQAAAHAFAFQAFAFAHABIASAAQARAAAAgSIAAiQQAAgIgFgFQgFgEgHgBQgSABgKAPgAglw/IADhmQACgzAFgmQAGgsALgoQAKgqAUgqIAAgDIhiAAIAAglICHAAIAAAsQgUArgMApQgLAngGAsQgFAkgCAzIgBBlgAgU7DQgVAAgQgQQgPgPAAgVIAAiPQAAgPAJgMQAIgKANgEQgLgFgIgJQgIgKAAgMIAAhLQAAgWAPgPQAPgPAWAAIAQAAQATAAAPAPQAQAPAAAWIAABLQAAAOgJAKQgIAIgKAEQAdAQAAAZIAACPQAAAVgPAPQgPAQgVAAgAgi+KIAACQQAAASARAAIAQAAQAPAAAAgSIAAiQQAAgRgPAAIgQAAQgRAAAAARgEgAaggnQgGAFAAAHIAABJQAAASASAAIAKAAQAPAAAAgSIAAhJQAAgSgPABIgKAAQgHgBgFAGgEgAUglHQgWAAgPgPQgPgPAAgWIAAg+IAlAAIAAA7QAAAHAFAFQAGAGAHgBIARAAQAHABAGgGQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgVIAAiCQAAgVAPgQQAPgPAWAAIAXAAQAVAAAQAPQAPAQAAAVIAAEnQAAAWgPAPQgQAPgVAAgEgAegqrQgFAFAAAGIAAB9QAAAIAFAEQAGAGAHAAQASgBAJgPQAIgMAAgWIAAhdQAAgGgFgFQgGgFgHgBIgRAAQgHABgGAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAglIAnAAIAAlFIgpAAIAAglIBMAAIAAFqIAnAAIAAAlgEgBFAhTIAAg4QAAgTAEgTQAEgSAKgTIA8iCQAGgOAAgaIAAgsQAAgGgFgFQgFgFgFgBIgRAAQgHAAgFAGQgFAFAAAGIAAAsIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAigJATIg9CFQgPAmAAAVIAAASIBSAAIAAAmgAgUXPQgWAAgPgQQgPgPAAgVIAAg/IAmAAIAAA8QAAASARAAIARAAQARAAAAgSIAAiSQAAgHgGgHQgFgEgGAAQgLAAgHAEQgHAFgGALIgggOIBMiUIhVAAIAAgmIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMANQAMAOAAAVIAACaQAAAVgPAPQgPAQgWAAgAAINLIAAhQIhTAAIAAgiIBFkdIA0AAIAAEdIAhAAIAAAiIghAAIAABQgAglLZIAtAAIAAhqIAHiEgAgUDHQgVAAgQgQQgPgPAAgVIAAg/IAmAAIAAA8QAAAHAFAFQAFAFAHABIASAAQARAAAAgSIAAiQQAAgHgGgGQgHgFgGAAQgSAAgIANQgHAKAAAXIgmAAIAAjiIB3AAIAAAmIhRAAIAAB1QAOgNAVAAQAWAAAQAPQARAPAAAWIAACXQAAAVgPAPQgQAQgVAAgAgUm7QgWAAgPgPQgPgPAAgWIAAknQAAgVAPgQQAPgPAWAAIAXAAQAWAAAPAPQAPAQAAAVIAAAuIglAAIAAgsQAAgGgFgFQgFgFgHgBIgSAAQgHABgFAFQgFAFAAAGIAABpQAQgOATAAQAXAAAQAPQAPAPAAAWIAACWQAAAWgPAPQgPAPgWAAgAgbqFQgHAMAAAXIAABwQAAAHAFAFQAFAGAHgBIASAAQARAAAAgRIAAiRQAAgGgFgGQgFgFgHAAQgSAAgKAPgAglw/IADhmQACgzAFgmQAGgsALgoQAKgpAUgrIAAgCIhiAAIAAgmICHAAIAAAsQgUAqgMAqQgLAngGAsQgFAkgCAzIgBBlgAgU7DQgVAAgQgPQgPgQAAgVIAAiOQAAgRAJgLQAIgKANgFQgLgEgIgIQgIgKAAgOIAAhKQAAgVAPgQQAPgPAWAAIAQAAQATAAAPAPQAQAQAAAVIAABKQAAAOgJALQgIAJgKACQAdARAAAaIAACOQAAAVgPAQQgPAPgVAAgAgi+KIAACQQAAARARAAIAQAAQAPAAAAgRIAAiQQAAgSgPAAIgQAAQgRAAAAASgEgAaggnQgGAFAAAGIAABKQAAARASAAIAKAAQAPAAAAgRIAAhKQAAgQgPgBIgKAAQgHABgFAFgEgAUglHQgWAAgPgQQgPgOAAgWIAAg/IAlAAIAAA8QAAAHAFAFQAGAGAHAAIARAAQAHAAAGgGQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgUIAAiDQAAgWAPgPQAPgPAWAAIAXAAQAVAAAQAPQAPAPAAAWIAAEnQAAAWgPAOQgQAQgVAAgEgAegqrQgFAFAAAGIAAB9QAAAHAFAGQAGAEAHAAQASABAJgPQAIgNAAgVIAAheQAAgGgFgFQgGgGgHABIgRAAQgHgBgGAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAgmIAnAAIAAlEIgpAAIAAglIBMAAIAAFpIAnAAIAAAmgEgBFAhTIAAg3QAAgVAEgSQAEgSAKgTIA8iCQAGgOAAgaIAAgrQAAgHgFgGQgFgEgFAAIgRAAQgHgBgFAGQgFAFAAAHIAAArIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAjgJASIg9CFQgPAlAAAXIAAASIBSAAIAAAlgAgUXPQgWAAgPgPQgPgPAAgWIAAg+IAmAAIAAA7QAAARARAAIARAAQARAAAAgRIAAiSQAAgIgGgFQgFgGgGABQgLgBgHAGQgHAEgGALIgggNIBMiWIhVAAIAAglIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMAOQAMANAAAWIAACZQAAAWgPAPQgPAPgWAAgAAINLIAAhQIhTAAIAAgjIBFkcIA0AAIAAEcIAhAAIAAAjIghAAIAABQgAglLYIAtAAIAAhpIAHiEgAgUDHQgVAAgQgPQgPgQAAgVIAAg+IAmAAIAAA7QAAAHAFAFQAFAFAHAAIASAAQARAAAAgRIAAiQQAAgHgGgFQgHgHgGABQgSAAgIANQgHALAAAWIgmAAIAAjiIB3AAIAAAlIhRAAIAAB1QAOgMAVAAQAWAAAQAPQARAPAAAWIAACXQAAAVgPAQQgQAPgVAAgAgUm7QgWAAgPgQQgPgOAAgWIAAknQAAgWAPgPQAPgPAWAAIAXAAQAWAAAPAPQAPAPAAAWIAAAuIglAAIAAgsQAAgGgFgFQgFgGgHABIgSAAQgHgBgFAGQgFAFAAAGIAABpQAQgOATAAQAXAAAQAPQAPAPAAAVIAACXQAAAWgPAOQgPAQgWAAgAgbqFQgHAMAAAWIAABxQAAAHAFAFQAFAGAHAAIASAAQARgBAAgRIAAiQQAAgIgFgFQgFgFgHABQgSAAgKAOgAglw/IADhmQACgzAFgmQAGgsALgnQAKgqAUgrIAAgDIhiAAIAAglICHAAIAAAsQgUAqgMAqQgLAngGArQgFAmgCAyIgBBlgAgU7DQgVAAgQgPQgPgPAAgWIAAiPQAAgPAJgMQAIgJANgGQgLgDgIgJQgIgLAAgNIAAhKQAAgVAPgQQAPgPAWAAIAQAAQATAAAPAPQAQAQAAAVIAABKQAAAOgJALQgIAIgKADQAdARAAAZIAACPQAAAWgPAPQgPAPgVAAgAgi+KIAACQQAAARARAAIAQAAQAPAAAAgRIAAiQQAAgRgPAAIgQAAQgRAAAAARgEgAaggnQgGAFAAAGIAABKQAAARASAAIAKAAQAPAAAAgRIAAhKQAAgRgPAAIgKAAQgHAAgFAGgEgAUglHQgWAAgPgQQgPgPAAgVIAAg/IAlAAIAAA8QAAAHAFAFQAGAFAHABIARAAQAHgBAGgFQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgVIAAiCQAAgWAPgPQAPgPAWAAIAXAAQAVAAAQAPQAPAPAAAWIAAEnQAAAVgPAPQgQAQgVAAgEgAegqrQgFAFAAAHIAAB9QAAAHAFAEQAGAFAHABQASAAAJgPQAIgNAAgWIAAhcQAAgHgFgFQgGgFgHAAIgRAAQgHAAgGAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGArXIAAglIAnAAIAAlEIgpAAIAAgmIBMAAIAAFqIAnAAIAAAlgEgBFAhTIAAg4QAAgTAEgTQAEgSAKgTIA8iDQAGgOAAgZIAAgsQAAgGgFgFQgFgFgFgBIgRAAQgHAAgFAGQgFAFAAAGIAAAsIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAjgJATIg9CEQgPAmAAAVIAAASIBSAAIAAAmgAgUXPQgWAAgPgQQgPgPAAgVIAAg/IAmAAIAAA8QAAASARAAIARAAQARAAAAgSIAAiSQAAgHgGgHQgFgEgGAAQgLAAgHAEQgHAFgGALIgggOIBMiUIhVAAIAAgmIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMANQAMANAAAWIAACaQAAAVgPAPQgPAQgWAAgAAINLIAAhQIhTAAIAAgiIBFkdIA0AAIAAEdIAhAAIAAAiIghAAIAABQgAglLZIAtAAIAAhqIAHiEgAgUDHQgVAAgQgQQgPgPAAgVIAAg/IAmAAIAAA8QAAAHAFAFQAFAGAHAAIASAAQARAAAAgSIAAiQQAAgHgGgGQgHgFgGgBQgSAAgIAOQgHAKAAAYIgmAAIAAjjIB3AAIAAAmIhRAAIAAB1QAOgNAVAAQAWAAAQAPQARAQAAAVIAACXQAAAVgPAPQgQAQgVAAgAgUm7QgWAAgPgPQgPgQAAgVIAAknQAAgVAPgQQAPgPAWAAIAXAAQAWAAAPAPQAPAQAAAVIAAAuIglAAIAAgsQAAgGgFgFQgFgFgHgBIgSAAQgHABgFAFQgFAFAAAGIAABpQAQgOATAAQAXAAAQAPQAPAPAAAWIAACWQAAAVgPAQQgPAPgWAAgAgbqEQgHAMAAAWIAABwQAAAHAFAFQAFAFAHAAIASAAQARAAAAgRIAAiRQAAgGgFgGQgFgEgHgBQgSABgKAPgAglw/IADhmQACgzAFgmQAGgsALgoQAKgqAUgqIAAgCIhiAAIAAgmICHAAIAAAsQgUAqgMAqQgLAngGAsQgFAlgCAyIgBBlgAgU7DQgVAAgQgQQgPgPAAgVIAAiOQAAgRAJgLQAIgKANgEQgLgEgIgKQgIgJAAgNIAAhLQAAgVAPgQQAPgPAWAAIAQAAQATAAAPAPQAQAQAAAVIAABLQAAANgJALQgIAJgKADQAdAQAAAaIAACOQAAAVgPAPQgPAQgVAAgAgi+KIAACQQAAARARAAIAQAAQAPAAAAgRIAAiQQAAgSgPAAIgQAAQgRAAAAASgEgAaggnQgGAFAAAHIAABJQAAARASAAIAKAAQAPAAAAgRIAAhJQAAgRgPgBIgKAAQgHABgFAFgEgAUglHQgWAAgPgPQgPgPAAgWIAAg+IAlAAIAAA7QAAAHAFAFQAGAGAHgBIARAAQAHABAGgGQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgUIAAiDQAAgVAPgQQAPgPAWAAIAXAAQAVAAAQAPQAPAQAAAVIAAEnQAAAWgPAPQgQAPgVAAgEgAegqrQgFAFAAAGIAAB9QAAAHAFAGQAGAEAHAAQASABAJgQQAIgMAAgVIAAheQAAgGgFgFQgGgGgHAAIgRAAQgHAAgGAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,-277.5,15.9,555.1);


(lib.Анимация88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ag3DHIAAglIAnAAIAAlCIgpAAIAAgmIBMAAIAAFoIAnAAIAAAlg");
	this.shape.setTransform(-1.6,287.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ag7DHIAAg4QAAgTAEgTQAEgSAKgSIA8iCQAGgOAAgZIAAgsQAAgGgFgFQgFgGgHAAIgPAAQgHABgFAFQgFAFAAAGIAAAsIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAigJAUIg9CCQgPAmAAAVIAAASIBSAAIAAAmg");
	this.shape_1.setTransform(-1.1,223.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgLDHQgVAAgQgQQgPgPABgVIAAg/IAlAAIAAA8QAAASARAAIARAAQARAAAAgSIAAiQQAAgIgGgGQgFgEgHgBQgKABgHAEQgHAFgGAJIgfgMIBLiUIhUAAIAAgmIB4AAIAAAxIg3BlQAGgFAJAAQAWAAAMANQAMANAAAWIAACYQgBAVgPAPQgPAQgWAAg");
	this.shape_2.setTransform(-1,159);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AAHDHIAAhQIhTAAIAAgiIBFkbIAzAAIAAEbIAhAAIAAAiIghAAIAABQgAgmBVIAtAAIAAhoIAHiEg");
	this.shape_3.setTransform(0.1,94.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgLDHQgWAAgQgQQgPgOABgWIAAg+IAlAAIAAA7QAAAHAFAFQAFAGAIAAIARAAQARgBAAgRIAAiQQAAgHgGgGQgHgFgIgBQgQAAgHAOQgIAKAAAYIglAAIAAjjIB2AAIAAAmIhRAAIAAB1QAOgNAVAAQAWAAAQAPQASAPgBAWIAACXQAAAWgPAOQgPAQgWAAg");
	this.shape_4.setTransform(-0.9,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgMDHQgVAAgPgQQgPgPAAgVIAAklQAAgVAPgQQAPgPAVAAIAYAAQAWAAAPAPQAPAQAAAVIAAAuIglAAIAAgrQAAgHgFgFQgGgFgGgBIgTAAQgHABgFAFQgEAFgBAHIAABoQARgOATAAQAXAAAQAPQAPAPAAAWIAACUQAAAVgPAPQgPAQgWAAgAgSAAQgIAKAAAWIAABwQABAHAEAFQAFAFAHAAIATAAQARAAAAgRIAAiQQAAgFgFgGQgFgEgHgBQgTABgJAPg");
	this.shape_5.setTransform(-0.9,-34.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgaDHIAChmQADgzAEgmQAHgqAKgoQAKgqAVgqIAAgDIhiAAIAAglICHAAIAAAsQgUArgMApQgLAngGAqQgFAkgCAzIgDBlg");
	this.shape_6.setTransform(-1.1,-98.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgJDHQgVAAgQgQQgPgPAAgVIAAiPQAAgNAJgMQAIgKANgEQgLgFgIgJQgJgJABgNIAAhLQAAgWAPgPQAPgPAWAAIANAAQAWAAAPAPQAQAPAAAWIAABLQAAANgJALQgIAJgKADQAdAQAAAXIAACPQAAAVgPAPQgPAQgWAAgAgYAAIAACQQABASARAAIANAAQARAAABgSIAAiQQgBgQgRAAIgNAAQgRAAgBAQgAgQibQgFAFAAAHIAABJQAAASASAAIAIAAQARAAAAgSIAAhJQAAgRgRAAIgIAAQgHAAgGAFg");
	this.shape_7.setTransform(-1.1,-163);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgMDHQgVAAgPgPQgPgPAAgWIAAg+IAlAAIAAA7QAAAHAFAFQAGAGAGgBIASAAQAHABAGgGQAEgFAAgHIAAh9QgQAPgTAAQgVAAgRgPQgQgQAAgTIAAiCQAAgWAPgPQAPgPAVAAIAYAAQAVAAAQAPQAPAPAAAWIAAElQAAAWgPAPQgQAPgVAAgAgVibQgFAFAAAGIAAB9QAAAIAFAEQAGAGAGgBQASAAAKgPQAIgMgBgVIAAheQAAgGgEgFQgGgGgHAAIgSAAQgGAAgGAGg");
	this.shape_8.setTransform(-0.9,-227.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("Ag3DHIAAglIAnAAIAAlCIgpAAIAAgmIBMAAIAAFoIAnAAIAAAlg");
	this.shape_9.setTransform(-1.6,-291.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-324,23.5,648);


(lib.Анимация87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBGAwZIAAglIAnAAIAAlEIgpAAIAAgmIBMAAIAAFqIAnAAIAAAlgEgBFAmVIAAg4QAAgTAEgTQAEgSAKgSIA8iEQAGgOAAgZIAAgsQAAgGgFgFQgFgGgFAAIgRAAQgHABgFAFQgFAFAAAGIAAAsIgmAAIAAguQAAgVAQgQQAPgPAVAAIAVAAQAVAAAQAQQAPAPAAAVIAAAuQAAAigJAUIg9CEQgPAmAAAVIAAASIBSAAIAAAmgAgUcRQgWAAgPgQQgPgPAAgVIAAg/IAmAAIAAA8QAAASARAAIARAAQARAAAAgSIAAiSQAAgIgGgFQgFgFgGgBQgLABgHAFQgHAEgGALIgggOIBMiUIhVAAIAAgmIB5AAIAAAxIg1BlQAEgFAJAAQAVAAAMANQAMANAAAWIAACaQAAAVgPAPQgPAQgWAAgAAISNIAAhQIhTAAIAAgiIBFkdIA0AAIAAEdIAhAAIAAAiIghAAIAABQgAglQbIAtAAIAAhqIAHiEgAgUIJQgVAAgQgQQgPgOAAgWIAAg+IAmAAIAAA7QAAAHAFAFQAFAGAHAAIASAAQARgBAAgRIAAiQQAAgJgGgGQgHgFgGgBQgSAAgIAOQgHAMAAAYIgmAAIAAjlIB3AAIAAAmIhRAAIAAB1QAOgNAVAAQAWAAAQAPQARAPAAAWIAACZQAAAWgPAOQgQAQgVAAgAgUh5QgWAAgPgQQgPgPAAgVIAAknQAAgVAPgQQAPgPAWAAIAXAAQAWAAAPAPQAPAQAAAVIAAAuIglAAIAAgrQAAgHgFgFQgFgFgHgBIgSAAQgHABgFAFQgFAFAAAHIAABoQAQgOATAAQAXAAAQAPQAPAPAAAWIAACWQAAAVgPAPQgPAQgWAAgAgblCQgHAMAAAWIAABwQAAAHAFAFQAFAFAHAAIASAAQARAAAAgRIAAiRQAAgGgFgGQgFgEgHgBQgSABgKAPgAglr9IADhmQACgzAFgmQAGgsALgoQAKgqAUgqIAAgDIhiAAIAAglICHAAIAAAsQgUArgMApQgLAngGAsQgFAkgCAzIgBBlgAgU2BQgVAAgQgQQgPgPAAgVIAAiPQAAgPAJgMQAIgKANgEQgLgFgIgJQgIgJAAgNIAAhLQAAgWAPgPQAPgPAWAAIAQAAQATAAAPAPQAQAPAAAWIAABLQAAANgJALQgIAJgKADQAdAQAAAZIAACPQAAAVgPAPQgPAQgVAAgAgi5IIAACQQAAASARAAIAQAAQAPAAAAgSIAAiQQAAgSgPAAIgQAAQgRAAAAASgAga7lQgGAFAAAHIAABJQAAASASAAIAKAAQAPAAAAgSIAAhJQAAgRgPAAIgKAAQgHAAgFAFgEgAUggFQgWAAgPgPQgPgPAAgWIAAg+IAlAAIAAA7QAAAHAFAFQAGAGAHgBIARAAQAHABAGgGQAFgFAAgHIAAh9QgRAPgSAAQgWAAgQgPQgRgQAAgVIAAiCQAAgWAPgPQAPgPAWAAIAXAAQAVAAAQAPQAPAPAAAWIAAEnQAAAWgPAPQgQAPgVAAgEgAeglpQgFAFAAAGIAAB9QAAAIAFAEQAGAGAHgBQASAAAJgPQAIgMAAgVIAAheQAAgGgFgFQgGgGgHAAIgRAAQgHAAgGAGgEgBGgqJIAAglIAnAAIAAlEIgpAAIAAgmIBMAAIAAFqIAnAAIAAAlg");
	this.shape.setTransform(-0.1,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-311.7,15.9,619.5);


(lib.Анимация67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ABBCHIAAhoIAKh7Ig4DjIglAAIg4jjIAKB9IAABmIgfAAIAAkNIAqAAIA1DeIA2jeIAqAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.3,27.2);


(lib.Анимация64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAiAAQAUAAAOAOQANAOAAATIAACvQAAAUgNANQgOAOgUAAgAgghXIAACvQAAAQAPAAIAiAAQAQAAAAgQIAAivQAAgPgQAAIgiAAQgPAAAAAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,13,27.2);


(lib.Анимация61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ABBCHIAAhoIAKh7Ig4DjIglAAIg4jjIAKB9IAABmIgfAAIAAkNIAqAAIA1DeIA2jeIAqAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.3,27.2);


(lib.Анимация58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgKCuIAKhNIgaAAIgokOIAgAAIAiDuIADAAIAhjuIAfAAIgvFbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-17.4,13.5,34.9);


(lib.Анимация55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgLCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAXAAQAUAAANAOQAOAOAAATIAAAaIggAAIAAgaQAAgPgPAAIgXAAQgPAAAAAPIAACvQAAAQAPAAIAXAAQAPAAAAgQIAAgrIAgAAIAAArQAAAUgOANQgNAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-13.5,11.8,27.2);


(lib.Анимация52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgPATQgPAAgJgKQgKgJAAgOIAAgEIAZAAIAAAFQAAALAKAAIAdAAQAKAAAAgLIAAgFIAZAAIAAAEQAAAOgKAJQgKAKgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1.9,10.1,3.9);


(lib.Анимация49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AApCHIAAhwIAHh9IhLDtIgrAAIAAkNIAeAAIAAB+IgIBwIBMjuIAsAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-13.5,14.4,27.2);


(lib.Анимация46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQAAgUANgOQAPgNAUAAIAbAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgcAJQgEAFAAAGIAABHQAAAOAPAAIAHAAIAqgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag/CHIAAkNIBRAAQASAAAOAOQAOAOAAATIAAArQAAAMgIAKQgHAKgMAEQAMADAIAKQAHAJAAANIAAA9QAAAUgNANQgPAOgSAAgAggBoIAyAAQAPAAAAgQIAAg7QAAgKgHgGQgHgHgKAAIgpAAgAgggXIApAAQAKAAAHgIQAHgGAAgKIAAgoQAAgPgPAAIgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,12.9,27.2);


(lib.Анимация40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAkNIAdAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-13.5,3.2,27.2);


(lib.Анимация37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAjtIgrAAIAAggIBzAAIAAAgIgrAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-13.5,11.7,27.2);


(lib.Анимация34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CHIAAkNIAgAAIAABPIAoAAQAUAAAPAPQAHAHADAJQAEAJAAAKIAABaQAAAKgEAKQgDAJgHAGQgHAHgJAEQgJAEgKAAgAgcBoIAtAAQANAAAAgNIAAhlQAAgNgNAAIgtAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-13.5,12.4,27.2);


(lib.Анимация31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNATAAIAwAAIAAhAQAAgPgQAAIgcAAQgGAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQgBgUAOgOQAPgNATAAIAcAAQATAAAOAOQAOAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgUAAgMgLgAgcAJQgEAFAAAGIAABHQAAAOAQAAIAFAAIArgQIAAhUIgwAAQgGAAgGAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCvQgSAAgOgOQgOgOAAgTIAAjPQAAgRAFgMQAFgMAKgHQAMgLAfgKQAQgFAGgEQAKgHAAgKIAgAAQAAANgFAKQgDAIgJAHQgJAIgdAJQgpALAAAcIAAAGIAigMIAOgDQAUAAAOANQAOAOAAAUIAACqQAAATgOAOQgPAOgTAAgAANg5IgtAQIAACpQAAAGAEAFQAFAFAFAAIAjAAQAQAAAAgQIAAiqQAAgQgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-17.5,12.9,35.2);


(lib.Анимация25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgFAEQgEAEAAAHIAAAaIggAAIAAgaQAAgUAOgOQAPgNATAAIAcAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgbAJQgFAFAAAGIAABHQAAAOAPAAIAGAAIArgQIAAhUIgxAAQgFAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CvIAAlbIAaAAIAGAMIAcgMQAGgCAJAAQATAAANANQAOAMAAATIAAC6QAAATgNAMQgNAMgVABQgIgBgGgCIgcgMIAABagAAJiOIglAPIAAC0IAlAOIAFABQAQAAAAgNIAAi3QAAgOgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-17.5,12.3,35.1);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAPgNASAAIAxAAIAAhAQAAgPgQAAIgcAAQgGAAgFAEQgFAEABAHIAAAaIggAAIAAgaQAAgUAOgOQAOgNAUAAIAcAAQATAAAOAOQANAOAAATIAADeIgaAAIgFgMIghAMIgSACQgVAAgMgLgAgbAJQgEAFgBAGIAABHQABAOAPAAIAGAAIArgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgICvQgTAAgOgOQgOgOAAgTIAAg2IAhAAIAAA2QAAAOAOAAIARAAQAOAAAAgOIAAhlQAAgPgHgFQgGgGgNAAIgQAAIAAgdIAQAAQAMAAAHgKQAHgJAAgOIAAhCQAAgOgOAAIgRAAQgOAAAAAOIAAAnIghAAIAAgnQAAgTAOgOQAOgOATAAIARAAQATAAAOAOQAOAOAAATIAABDQAAAPgHALQgGANgOAFQANAFAHAKQAHAIAAAOIAABrQAAATgOAOQgOAOgTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-17.5,11.4,35.2);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ApqD0QgkAAAAgiIAAmiQAAgkAkAAITWAAQAiAAABAkIAAGiQgBAigiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-24.5,131,49);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(1500,150,1,1,0,0,0,300,150);

	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(900,150,1,1,0,0,180,300,150);

	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1800,300);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация67("synched",0);
	this.instance.setTransform(9.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,27.2);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация64("synched",0);
	this.instance.setTransform(6.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,27.2);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация61("synched",0);
	this.instance.setTransform(9.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,27.2);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация58("synched",0);
	this.instance.setTransform(6.8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,34.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация55("synched",0);
	this.instance.setTransform(5.9,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,27.2);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация52("synched",0);
	this.instance.setTransform(7.2,2);

	this.instance_1 = new lib.Анимация49("synched",0);
	this.instance_1.setTransform(7.2,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,35.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация46("synched",0);
	this.instance.setTransform(6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,27.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация43("synched",0);
	this.instance.setTransform(6.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,27.2);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация40("synched",0);
	this.instance.setTransform(16.5,14);

	this.instance_1 = new lib.Анимация34("synched",0);
	this.instance_1.setTransform(6.2,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,27.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация37("synched",0);
	this.instance.setTransform(5.9,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.7,27.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация31("synched",0);
	this.instance.setTransform(6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,27.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация28("synched",0);
	this.instance.setTransform(6.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,35.2);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация25("synched",0);
	this.instance.setTransform(6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,27.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация22("synched",0);
	this.instance.setTransform(6.1,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.3,35.1);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация19("synched",0);
	this.instance.setTransform(6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,27.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация17("synched",0);
	this.instance.setTransform(5.7,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.4,35.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ45();
	this.instance.setTransform(905.8,175.7,1,1,0,0,0,900,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-294.2},299).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(305.8,186.5,1,1,180,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},49).to({alpha:1},50).to({alpha:0},49).to({alpha:1},50).to({alpha:0},49).to({alpha:1},52).wait(1));

	// Слой 1
	this.text = new cjs.Text("", "35px 'BravoRG'", "#212B37");
	this.text.lineHeight = 40;
	this.text.lineWidth = 100;
	this.text.setTransform(505.4,-61.8);

	this.instance_2 = new lib.Символ42();
	this.instance_2.setTransform(305.8,186.5,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text}]}).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,-61.8,1800,398.3);


(lib.Символ14 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ26();
	this.instance.setTransform(5.7,18,1,1,0,0,0,5.7,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.5},9).to({y:18},75).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(21.6,21.7,1,1,0,0,0,6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:18.2},9).to({y:21.7},71).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(37.6,25.4,1,1,0,0,0,6.1,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:21.9},9).to({y:25.4},66).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(53.7,21.7,1,1,0,0,0,6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({y:18.2},9).to({y:21.7},61).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ30();
	this.instance_4.setTransform(70.1,17.6,1,1,0,0,0,6.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({y:14.1},9).to({y:17.6},56).wait(1));

	// Слой 8
	this.instance_5 = new lib.Символ31();
	this.instance_5.setTransform(86.5,21.7,1,1,0,0,0,6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({y:18.2},9).to({y:21.7},51).wait(1));

	// Слой 10
	this.instance_6 = new lib.Символ32();
	this.instance_6.setTransform(101,21.6,1,1,0,0,0,5.9,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({y:18.1},9).to({y:21.6},46).wait(1));

	// Слой 9
	this.instance_7 = new lib.Символ33();
	this.instance_7.setTransform(118.1,21.8,1,1,0,0,0,9,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({y:18.3},9).to({y:21.8},41).wait(1));

	// Слой 12
	this.instance_8 = new lib.Символ34();
	this.instance_8.setTransform(137.8,21.6,1,1,0,0,0,6.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({y:18.1},9).to({y:21.6},36).wait(1));

	// Слой 13
	this.instance_9 = new lib.Символ35();
	this.instance_9.setTransform(154.2,21.7,1,1,0,0,0,6.5,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({y:18.2},9).to({y:21.7},31).wait(1));

	// Слой 14
	this.instance_10 = new lib.Символ36();
	this.instance_10.setTransform(171.3,17.5,1,1,0,0,0,7.2,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({y:14},9).to({y:17.5},26).wait(1));

	// Слой 16
	this.instance_11 = new lib.Символ37();
	this.instance_11.setTransform(196.9,21.6,1,1,0,0,0,5.9,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({y:18.1},9).to({y:21.6},21).wait(1));

	// Слой 17
	this.instance_12 = new lib.Символ38();
	this.instance_12.setTransform(220.8,25.4,1,1,0,0,0,6.8,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({y:21.9},9).to({y:25.4},16).wait(1));

	// Слой 18
	this.instance_13 = new lib.Символ39();
	this.instance_13.setTransform(239.8,21.6,1,1,0,0,0,9.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64).to({y:18.1},9).to({y:21.6},11).wait(1));

	// Слой 19
	this.instance_14 = new lib.Символ40();
	this.instance_14.setTransform(259.4,21.6,1,1,0,0,0,6.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(69).to({y:18.1},9).to({y:21.6},6).wait(1));

	// Слой 20
	this.instance_15 = new lib.Символ41();
	this.instance_15.setTransform(279,21.6,1,1,0,0,0,9.7,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(74).to({y:18.1},9).wait(1).to({y:21.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.3,288.6,43.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(96.9,29.3,1,1,0,0,0,68.7,12.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A9500","#00CC00"],[0,1],-96.2,0,96.3,0).s().rr(-96.25,-25.05,192.5,50.1,25);
	this.shape.setTransform(96.2,28,1,1.119);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().rr(-96.25,-25.05,192.5,50.1,25);
	this.shape_1.setTransform(96.2,29.2,1,1.119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.5,57.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(142,125,1,1,0,0,0,142,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:127.3},14,cjs.Ease.get(-1)).to({y:125},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284,250);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(96.9,29.3,1,1,0,0,0,68.7,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF9900","#FFCC33"],[0,1],-32.9,35.8,-14.6,-32.7).s().rr(-96.25,-25.05,192.5,50.1,25);
	this.shape_2.setTransform(96.2,28,1,1.119);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D28A0D").s().rr(-96.25,-25.05,192.5,50.1,25);
	this.shape_3.setTransform(96.2,29.2,1,1.119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.5,57.2);


(lib.Символ6копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(309.9,101.2,0.5,0.5,0,0,0,27.9,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[310,101.3,321.6,109.2,333.2,117.2,376.7,61.2,420.2,5.2,471.7,109.1,523.2,213.1,582.4,152.2,641.5,91.4,684.4,117.7,727.3,144,814.8,91.1,902.3,38.2,930.8,130.6,959.3,223.1,1061.3,116.6,1163.2,10.2,1190.7,100.1,1218.2,190,1247.2,149.1,1276.2,108.2,1319.2,144.6,1362.2,181,1413.3,110.6,1464.3,40.2,1524.8,130.6,1585.3,221.1,1617.8,110.6,1650.3,0.2,1683.8,120.6,1717.3,241.1,1792.2,185.5,1867.1,130,1919.1,161,1971.1,192,2023.7,112.1,2076.2,32.2,2126.4,66.6,2176.5,101]}},309).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A5Tb0MAAAg3nMAynAAAMAAAA3ng");
	var mask_graphics_1 = new cjs.Graphics().p("A55b0MAAAg3nMAzzAAAMAAAA3ng");
	var mask_graphics_2 = new cjs.Graphics().p("A6gb0MAAAg3nMA1BAAAMAAAA3ng");
	var mask_graphics_3 = new cjs.Graphics().p("A7Gb0MAAAg3nMA2NAAAMAAAA3ng");
	var mask_graphics_4 = new cjs.Graphics().p("A7nb0MAAAg3nMA3PAAAMAAAA3ng");
	var mask_graphics_5 = new cjs.Graphics().p("A8Ib0MAAAg3nMA4RAAAMAAAA3ng");
	var mask_graphics_6 = new cjs.Graphics().p("A8pb0MAAAg3nMA5TAAAMAAAA3ng");
	var mask_graphics_7 = new cjs.Graphics().p("A9Kb0MAAAg3nMA6VAAAMAAAA3ng");
	var mask_graphics_8 = new cjs.Graphics().p("A9sb0MAAAg3nMA7ZAAAMAAAA3ng");
	var mask_graphics_9 = new cjs.Graphics().p("A+Nb0MAAAg3nMA8bAAAMAAAA3ng");
	var mask_graphics_10 = new cjs.Graphics().p("A+ub0MAAAg3nMA9dAAAMAAAA3ng");
	var mask_graphics_11 = new cjs.Graphics().p("A/Pb0MAAAg3nMA+fAAAMAAAA3ng");
	var mask_graphics_12 = new cjs.Graphics().p("A/wb0MAAAg3nMA/hAAAMAAAA3ng");
	var mask_graphics_13 = new cjs.Graphics().p("EggSAb0MAAAg3nMBAlAAAMAAAA3ng");
	var mask_graphics_14 = new cjs.Graphics().p("EggzAb0MAAAg3nMBBnAAAMAAAA3ng");
	var mask_graphics_15 = new cjs.Graphics().p("EghUAb0MAAAg3nMBCpAAAMAAAA3ng");
	var mask_graphics_16 = new cjs.Graphics().p("Egh1Ab0MAAAg3nMBDrAAAMAAAA3ng");
	var mask_graphics_17 = new cjs.Graphics().p("EgiNAb0MAAAg3nMBEbAAAMAAAA3ng");
	var mask_graphics_18 = new cjs.Graphics().p("EgikAb0MAAAg3nMBFJAAAMAAAA3ng");
	var mask_graphics_19 = new cjs.Graphics().p("Egi8Ab0MAAAg3nMBF5AAAMAAAA3ng");
	var mask_graphics_20 = new cjs.Graphics().p("EgjUAb0MAAAg3nMBGoAAAMAAAA3ng");
	var mask_graphics_21 = new cjs.Graphics().p("EgjrAb0MAAAg3nMBHXAAAMAAAA3ng");
	var mask_graphics_22 = new cjs.Graphics().p("EgkDAb0MAAAg3nMBIHAAAMAAAA3ng");
	var mask_graphics_23 = new cjs.Graphics().p("EgkaAb0MAAAg3nMBI1AAAMAAAA3ng");
	var mask_graphics_24 = new cjs.Graphics().p("EgkyAb0MAAAg3nMBJlAAAMAAAA3ng");
	var mask_graphics_25 = new cjs.Graphics().p("EglJAb0MAAAg3nMBKTAAAMAAAA3ng");
	var mask_graphics_26 = new cjs.Graphics().p("EglhAb0MAAAg3nMBLDAAAMAAAA3ng");
	var mask_graphics_27 = new cjs.Graphics().p("Egl5Ab0MAAAg3nMBLzAAAMAAAA3ng");
	var mask_graphics_28 = new cjs.Graphics().p("EgmQAb0MAAAg3nMBMhAAAMAAAA3ng");
	var mask_graphics_29 = new cjs.Graphics().p("EgmoAb0MAAAg3nMBNRAAAMAAAA3ng");
	var mask_graphics_30 = new cjs.Graphics().p("Egm/Ab0MAAAg3nMBN/AAAMAAAA3ng");
	var mask_graphics_31 = new cjs.Graphics().p("EgnXAb0MAAAg3nMBOvAAAMAAAA3ng");
	var mask_graphics_32 = new cjs.Graphics().p("EgnvAb0MAAAg3nMBPfAAAMAAAA3ng");
	var mask_graphics_33 = new cjs.Graphics().p("EgoGAb0MAAAg3nMBQNAAAMAAAA3ng");
	var mask_graphics_34 = new cjs.Graphics().p("EgoeAb0MAAAg3nMBQ9AAAMAAAA3ng");
	var mask_graphics_35 = new cjs.Graphics().p("Ego1Ab0MAAAg3nMBRrAAAMAAAA3ng");
	var mask_graphics_36 = new cjs.Graphics().p("EgpNAb0MAAAg3nMBSbAAAMAAAA3ng");
	var mask_graphics_37 = new cjs.Graphics().p("EgplAb0MAAAg3nMBTLAAAMAAAA3ng");
	var mask_graphics_38 = new cjs.Graphics().p("Egp8Ab0MAAAg3nMBT5AAAMAAAA3ng");
	var mask_graphics_39 = new cjs.Graphics().p("EgqhAb0MAAAg3nMBVDAAAMAAAA3ng");
	var mask_graphics_40 = new cjs.Graphics().p("EgrGAb0MAAAg3nMBWNAAAMAAAA3ng");
	var mask_graphics_41 = new cjs.Graphics().p("EgrrAb0MAAAg3nMBXXAAAMAAAA3ng");
	var mask_graphics_42 = new cjs.Graphics().p("EgsQAb0MAAAg3nMBYhAAAMAAAA3ng");
	var mask_graphics_43 = new cjs.Graphics().p("Egs1Ab0MAAAg3nMBZrAAAMAAAA3ng");
	var mask_graphics_44 = new cjs.Graphics().p("EgtaAb0MAAAg3nMBa1AAAMAAAA3ng");
	var mask_graphics_45 = new cjs.Graphics().p("Egt/Ab0MAAAg3nMBb/AAAMAAAA3ng");
	var mask_graphics_46 = new cjs.Graphics().p("EgukAb0MAAAg3nMBdJAAAMAAAA3ng");
	var mask_graphics_47 = new cjs.Graphics().p("EgvIAb0MAAAg3nMBeRAAAMAAAA3ng");
	var mask_graphics_48 = new cjs.Graphics().p("EgvtAb0MAAAg3nMBfbAAAMAAAA3ng");
	var mask_graphics_49 = new cjs.Graphics().p("EgwSAb0MAAAg3nMBglAAAMAAAA3ng");
	var mask_graphics_50 = new cjs.Graphics().p("Egw3Ab0MAAAg3nMBhvAAAMAAAA3ng");
	var mask_graphics_51 = new cjs.Graphics().p("EgxcAb0MAAAg3nMBi5AAAMAAAA3ng");
	var mask_graphics_52 = new cjs.Graphics().p("EgyBAb0MAAAg3nMBkDAAAMAAAA3ng");
	var mask_graphics_53 = new cjs.Graphics().p("EgymAb0MAAAg3nMBlNAAAMAAAA3ng");
	var mask_graphics_54 = new cjs.Graphics().p("EgzLAb0MAAAg3nMBmXAAAMAAAA3ng");
	var mask_graphics_55 = new cjs.Graphics().p("Egz3Ab0MAAAg3nMBnvAAAMAAAA3ng");
	var mask_graphics_56 = new cjs.Graphics().p("Eg0iAb0MAAAg3nMBpFAAAMAAAA3ng");
	var mask_graphics_57 = new cjs.Graphics().p("Eg1OAb0MAAAg3nMBqdAAAMAAAA3ng");
	var mask_graphics_58 = new cjs.Graphics().p("Eg16Ab0MAAAg3nMBr1AAAMAAAA3ng");
	var mask_graphics_59 = new cjs.Graphics().p("Eg2lAb0MAAAg3nMBtLAAAMAAAA3ng");
	var mask_graphics_60 = new cjs.Graphics().p("Eg3RAb0MAAAg3nMBujAAAMAAAA3ng");
	var mask_graphics_61 = new cjs.Graphics().p("Eg39Ab0MAAAg3nMBv7AAAMAAAA3ng");
	var mask_graphics_62 = new cjs.Graphics().p("Eg4pAb0MAAAg3nMBxTAAAMAAAA3ng");
	var mask_graphics_63 = new cjs.Graphics().p("Eg5UAb0MAAAg3nMBypAAAMAAAA3ng");
	var mask_graphics_64 = new cjs.Graphics().p("Eg6AAb0MAAAg3nMB0BAAAMAAAA3ng");
	var mask_graphics_65 = new cjs.Graphics().p("Eg6tAb0MAAAg3nMB1bAAAMAAAA3ng");
	var mask_graphics_66 = new cjs.Graphics().p("Eg7bAb0MAAAg3nMB23AAAMAAAA3ng");
	var mask_graphics_67 = new cjs.Graphics().p("Eg8IAb0MAAAg3nMB4RAAAMAAAA3ng");
	var mask_graphics_68 = new cjs.Graphics().p("Eg82Ab0MAAAg3nMB5tAAAMAAAA3ng");
	var mask_graphics_69 = new cjs.Graphics().p("Eg9jAb0MAAAg3nMB7HAAAMAAAA3ng");
	var mask_graphics_70 = new cjs.Graphics().p("Eg+QAb0MAAAg3nMB8hAAAMAAAA3ng");
	var mask_graphics_71 = new cjs.Graphics().p("Eg++Ab0MAAAg3nMB99AAAMAAAA3ng");
	var mask_graphics_72 = new cjs.Graphics().p("Eg/rAb0MAAAg3nMB/XAAAMAAAA3ng");
	var mask_graphics_73 = new cjs.Graphics().p("EhAZAb0MAAAg3nMCAzAAAMAAAA3ng");
	var mask_graphics_74 = new cjs.Graphics().p("EhBGAb0MAAAg3nMCCNAAAMAAAA3ng");
	var mask_graphics_75 = new cjs.Graphics().p("EhBzAb0MAAAg3nMCDnAAAMAAAA3ng");
	var mask_graphics_76 = new cjs.Graphics().p("EhChAb0MAAAg3nMCFDAAAMAAAA3ng");
	var mask_graphics_77 = new cjs.Graphics().p("EhDOAb0MAAAg3nMCGdAAAMAAAA3ng");
	var mask_graphics_78 = new cjs.Graphics().p("EhD8Ab0MAAAg3nMCH5AAAMAAAA3ng");
	var mask_graphics_79 = new cjs.Graphics().p("EhEpAb0MAAAg3nMCJTAAAMAAAA3ng");
	var mask_graphics_80 = new cjs.Graphics().p("EhFWAb0MAAAg3nMCKtAAAMAAAA3ng");
	var mask_graphics_81 = new cjs.Graphics().p("EhGEAb0MAAAg3nMCMJAAAMAAAA3ng");
	var mask_graphics_82 = new cjs.Graphics().p("EhGxAb0MAAAg3nMCNjAAAMAAAA3ng");
	var mask_graphics_83 = new cjs.Graphics().p("EhHfAb0MAAAg3nMCO/AAAMAAAA3ng");
	var mask_graphics_84 = new cjs.Graphics().p("EhHuAb0MAAAg3nMCPdAAAMAAAA3ng");
	var mask_graphics_85 = new cjs.Graphics().p("EhH+Ab0MAAAg3nMCP9AAAMAAAA3ng");
	var mask_graphics_86 = new cjs.Graphics().p("EhIOAb0MAAAg3nMCQdAAAMAAAA3ng");
	var mask_graphics_87 = new cjs.Graphics().p("EhIeAb0MAAAg3nMCQ9AAAMAAAA3ng");
	var mask_graphics_88 = new cjs.Graphics().p("EhIuAb0MAAAg3nMCRdAAAMAAAA3ng");
	var mask_graphics_89 = new cjs.Graphics().p("EhI9Ab0MAAAg3nMCR7AAAMAAAA3ng");
	var mask_graphics_90 = new cjs.Graphics().p("EhJNAb0MAAAg3nMCSbAAAMAAAA3ng");
	var mask_graphics_91 = new cjs.Graphics().p("EhJdAb0MAAAg3nMCS7AAAMAAAA3ng");
	var mask_graphics_92 = new cjs.Graphics().p("EhJtAb0MAAAg3nMCTbAAAMAAAA3ng");
	var mask_graphics_93 = new cjs.Graphics().p("EhJ9Ab0MAAAg3nMCT7AAAMAAAA3ng");
	var mask_graphics_94 = new cjs.Graphics().p("EhKNAb0MAAAg3nMCUbAAAMAAAA3ng");
	var mask_graphics_95 = new cjs.Graphics().p("EhKcAb0MAAAg3nMCU5AAAMAAAA3ng");
	var mask_graphics_96 = new cjs.Graphics().p("EhKsAb0MAAAg3nMCVZAAAMAAAA3ng");
	var mask_graphics_97 = new cjs.Graphics().p("EhK8Ab0MAAAg3nMCV5AAAMAAAA3ng");
	var mask_graphics_98 = new cjs.Graphics().p("EhLMAb0MAAAg3nMCWZAAAMAAAA3ng");
	var mask_graphics_99 = new cjs.Graphics().p("EhLcAb0MAAAg3nMCW5AAAMAAAA3ng");
	var mask_graphics_100 = new cjs.Graphics().p("EhLrAb0MAAAg3nMCXXAAAMAAAA3ng");
	var mask_graphics_101 = new cjs.Graphics().p("EhL7Ab0MAAAg3nMCX3AAAMAAAA3ng");
	var mask_graphics_102 = new cjs.Graphics().p("EhMfAb0MAAAg3nMCY/AAAMAAAA3ng");
	var mask_graphics_103 = new cjs.Graphics().p("EhNDAb0MAAAg3nMCaHAAAMAAAA3ng");
	var mask_graphics_104 = new cjs.Graphics().p("EhNoAb0MAAAg3nMCbRAAAMAAAA3ng");
	var mask_graphics_105 = new cjs.Graphics().p("EhOMAb0MAAAg3nMCcZAAAMAAAA3ng");
	var mask_graphics_106 = new cjs.Graphics().p("EhOwAb0MAAAg3nMCdhAAAMAAAA3ng");
	var mask_graphics_107 = new cjs.Graphics().p("EhPUAb0MAAAg3nMCepAAAMAAAA3ng");
	var mask_graphics_108 = new cjs.Graphics().p("EhP4Ab0MAAAg3nMCfxAAAMAAAA3ng");
	var mask_graphics_109 = new cjs.Graphics().p("EhQdAb0MAAAg3nMCg7AAAMAAAA3ng");
	var mask_graphics_110 = new cjs.Graphics().p("EhRBAb0MAAAg3nMCiDAAAMAAAA3ng");
	var mask_graphics_111 = new cjs.Graphics().p("EhRlAb0MAAAg3nMCjLAAAMAAAA3ng");
	var mask_graphics_112 = new cjs.Graphics().p("EhSJAb0MAAAg3nMCkTAAAMAAAA3ng");
	var mask_graphics_113 = new cjs.Graphics().p("EhStAb0MAAAg3nMClbAAAMAAAA3ng");
	var mask_graphics_114 = new cjs.Graphics().p("EhTRAb0MAAAg3nMCmjAAAMAAAA3ng");
	var mask_graphics_115 = new cjs.Graphics().p("EhT2Ab0MAAAg3nMCntAAAMAAAA3ng");
	var mask_graphics_116 = new cjs.Graphics().p("EhUaAb0MAAAg3nMCo1AAAMAAAA3ng");
	var mask_graphics_117 = new cjs.Graphics().p("EhU+Ab0MAAAg3nMCp9AAAMAAAA3ng");
	var mask_graphics_118 = new cjs.Graphics().p("EhViAb0MAAAg3nMCrFAAAMAAAA3ng");
	var mask_graphics_119 = new cjs.Graphics().p("EhWGAb0MAAAg3nMCsNAAAMAAAA3ng");
	var mask_graphics_120 = new cjs.Graphics().p("EhWqAb0MAAAg3nMCtVAAAMAAAA3ng");
	var mask_graphics_121 = new cjs.Graphics().p("EhXPAb0MAAAg3nMCufAAAMAAAA3ng");
	var mask_graphics_122 = new cjs.Graphics().p("EhXzAb0MAAAg3nMCvnAAAMAAAA3ng");
	var mask_graphics_123 = new cjs.Graphics().p("EhYXAb0MAAAg3nMCwvAAAMAAAA3ng");
	var mask_graphics_124 = new cjs.Graphics().p("EhY7Ab0MAAAg3nMCx3AAAMAAAA3ng");
	var mask_graphics_125 = new cjs.Graphics().p("EhZfAb0MAAAg3nMCy/AAAMAAAA3ng");
	var mask_graphics_126 = new cjs.Graphics().p("EhaEAb0MAAAg3nMC0JAAAMAAAA3ng");
	var mask_graphics_127 = new cjs.Graphics().p("EhaoAb0MAAAg3nMC1RAAAMAAAA3ng");
	var mask_graphics_128 = new cjs.Graphics().p("EhbMAb0MAAAg3nMC2ZAAAMAAAA3ng");
	var mask_graphics_129 = new cjs.Graphics().p("EhbwAb0MAAAg3nMC3hAAAMAAAA3ng");
	var mask_graphics_130 = new cjs.Graphics().p("EhcAAb0MAAAg3nMC4BAAAMAAAA3ng");
	var mask_graphics_131 = new cjs.Graphics().p("EhcQAb0MAAAg3nMC4hAAAMAAAA3ng");
	var mask_graphics_132 = new cjs.Graphics().p("EhcgAb0MAAAg3nMC5BAAAMAAAA3ng");
	var mask_graphics_133 = new cjs.Graphics().p("EhcwAb0MAAAg3nMC5hAAAMAAAA3ng");
	var mask_graphics_134 = new cjs.Graphics().p("EhdAAb0MAAAg3nMC6BAAAMAAAA3ng");
	var mask_graphics_135 = new cjs.Graphics().p("EhdQAb0MAAAg3nMC6hAAAMAAAA3ng");
	var mask_graphics_136 = new cjs.Graphics().p("EhdgAb0MAAAg3nMC7BAAAMAAAA3ng");
	var mask_graphics_137 = new cjs.Graphics().p("EhdwAb0MAAAg3nMC7hAAAMAAAA3ng");
	var mask_graphics_138 = new cjs.Graphics().p("EheAAb0MAAAg3nMC8BAAAMAAAA3ng");
	var mask_graphics_139 = new cjs.Graphics().p("EheQAb0MAAAg3nMC8hAAAMAAAA3ng");
	var mask_graphics_140 = new cjs.Graphics().p("EhegAb0MAAAg3nMC9BAAAMAAAA3ng");
	var mask_graphics_141 = new cjs.Graphics().p("EhewAb0MAAAg3nMC9hAAAMAAAA3ng");
	var mask_graphics_142 = new cjs.Graphics().p("Ehe/Ab0MAAAg3nMC9/AAAMAAAA3ng");
	var mask_graphics_143 = new cjs.Graphics().p("EhfPAb0MAAAg3nMC+fAAAMAAAA3ng");
	var mask_graphics_144 = new cjs.Graphics().p("EhffAb0MAAAg3nMC+/AAAMAAAA3ng");
	var mask_graphics_145 = new cjs.Graphics().p("EhfvAb0MAAAg3nMC/fAAAMAAAA3ng");
	var mask_graphics_146 = new cjs.Graphics().p("Ehf/Ab0MAAAg3nMC//AAAMAAAA3ng");
	var mask_graphics_147 = new cjs.Graphics().p("EhgPAb0MAAAg3nMDAfAAAMAAAA3ng");
	var mask_graphics_148 = new cjs.Graphics().p("EhgtAb0MAAAg3nMDBbAAAMAAAA3ng");
	var mask_graphics_149 = new cjs.Graphics().p("EhhKAb0MAAAg3nMDCVAAAMAAAA3ng");
	var mask_graphics_150 = new cjs.Graphics().p("EhhoAb0MAAAg3nMDDRAAAMAAAA3ng");
	var mask_graphics_151 = new cjs.Graphics().p("EhiFAb0MAAAg3nMDELAAAMAAAA3ng");
	var mask_graphics_152 = new cjs.Graphics().p("EhijAb0MAAAg3nMDFHAAAMAAAA3ng");
	var mask_graphics_153 = new cjs.Graphics().p("EhjAAb0MAAAg3nMDGBAAAMAAAA3ng");
	var mask_graphics_154 = new cjs.Graphics().p("EhjeAb0MAAAg3nMDG9AAAMAAAA3ng");
	var mask_graphics_155 = new cjs.Graphics().p("Ehj7Ab0MAAAg3nMDH3AAAMAAAA3ng");
	var mask_graphics_156 = new cjs.Graphics().p("EhkYAb0MAAAg3nMDIxAAAMAAAA3ng");
	var mask_graphics_157 = new cjs.Graphics().p("Ehk2Ab0MAAAg3nMDJtAAAMAAAA3ng");
	var mask_graphics_158 = new cjs.Graphics().p("EhlfAb0MAAAg3nMDK/AAAMAAAA3ng");
	var mask_graphics_159 = new cjs.Graphics().p("EhmHAb0MAAAg3nMDMPAAAMAAAA3ng");
	var mask_graphics_160 = new cjs.Graphics().p("EhmwAb0MAAAg3nMDNhAAAMAAAA3ng");
	var mask_graphics_161 = new cjs.Graphics().p("EhnYAb0MAAAg3nMDOxAAAMAAAA3ng");
	var mask_graphics_162 = new cjs.Graphics().p("EhoBAb0MAAAg3nMDQDAAAMAAAA3ng");
	var mask_graphics_163 = new cjs.Graphics().p("EhoqAb0MAAAg3nMDRVAAAMAAAA3ng");
	var mask_graphics_164 = new cjs.Graphics().p("EhpSAb0MAAAg3nMDSlAAAMAAAA3ng");
	var mask_graphics_165 = new cjs.Graphics().p("Ehp7Ab0MAAAg3nMDT3AAAMAAAA3ng");
	var mask_graphics_166 = new cjs.Graphics().p("EhqkAb0MAAAg3nMDVJAAAMAAAA3ng");
	var mask_graphics_167 = new cjs.Graphics().p("EhrMAb0MAAAg3nMDWZAAAMAAAA3ng");
	var mask_graphics_168 = new cjs.Graphics().p("EhrrAb0MAAAg3nMDXXAAAMAAAA3ng");
	var mask_graphics_169 = new cjs.Graphics().p("EhsLAb0MAAAg3nMDYXAAAMAAAA3ng");
	var mask_graphics_170 = new cjs.Graphics().p("EhsqAb0MAAAg3nMDZVAAAMAAAA3ng");
	var mask_graphics_171 = new cjs.Graphics().p("EhtJAb0MAAAg3nMDaTAAAMAAAA3ng");
	var mask_graphics_172 = new cjs.Graphics().p("EhtoAb0MAAAg3nMDbRAAAMAAAA3ng");
	var mask_graphics_173 = new cjs.Graphics().p("EhuIAb0MAAAg3nMDcRAAAMAAAA3ng");
	var mask_graphics_174 = new cjs.Graphics().p("EhunAb0MAAAg3nMDdPAAAMAAAA3ng");
	var mask_graphics_175 = new cjs.Graphics().p("EhvGAb0MAAAg3nMDeNAAAMAAAA3ng");
	var mask_graphics_176 = new cjs.Graphics().p("EhvlAb0MAAAg3nMDfLAAAMAAAA3ng");
	var mask_graphics_177 = new cjs.Graphics().p("EhwFAb0MAAAg3nMDgLAAAMAAAA3ng");
	var mask_graphics_178 = new cjs.Graphics().p("EhwkAb0MAAAg3nMDhJAAAMAAAA3ng");
	var mask_graphics_179 = new cjs.Graphics().p("EhxDAb0MAAAg3nMDiHAAAMAAAA3ng");
	var mask_graphics_180 = new cjs.Graphics().p("EhxiAb0MAAAg3nMDjFAAAMAAAA3ng");
	var mask_graphics_181 = new cjs.Graphics().p("EhyCAb0MAAAg3nMDkFAAAMAAAA3ng");
	var mask_graphics_182 = new cjs.Graphics().p("EhyhAb0MAAAg3nMDlDAAAMAAAA3ng");
	var mask_graphics_183 = new cjs.Graphics().p("EhzAAb0MAAAg3nMDmBAAAMAAAA3ng");
	var mask_graphics_184 = new cjs.Graphics().p("EhzfAb0MAAAg3nMDm/AAAMAAAA3ng");
	var mask_graphics_185 = new cjs.Graphics().p("Ehz8Ab0MAAAg3nMDn5AAAMAAAA3ng");
	var mask_graphics_186 = new cjs.Graphics().p("Eh0ZAb0MAAAg3nMDozAAAMAAAA3ng");
	var mask_graphics_187 = new cjs.Graphics().p("Eh02Ab0MAAAg3nMDptAAAMAAAA3ng");
	var mask_graphics_188 = new cjs.Graphics().p("Eh1TAb0MAAAg3nMDqnAAAMAAAA3ng");
	var mask_graphics_189 = new cjs.Graphics().p("Eh1vAb0MAAAg3nMDrfAAAMAAAA3ng");
	var mask_graphics_190 = new cjs.Graphics().p("Eh2MAb0MAAAg3nMDsZAAAMAAAA3ng");
	var mask_graphics_191 = new cjs.Graphics().p("Eh2pAb0MAAAg3nMDtTAAAMAAAA3ng");
	var mask_graphics_192 = new cjs.Graphics().p("Eh3GAb0MAAAg3nMDuNAAAMAAAA3ng");
	var mask_graphics_193 = new cjs.Graphics().p("Eh3jAb0MAAAg3nMDvHAAAMAAAA3ng");
	var mask_graphics_194 = new cjs.Graphics().p("Eh3/Ab0MAAAg3nMDv/AAAMAAAA3ng");
	var mask_graphics_195 = new cjs.Graphics().p("Eh4cAb0MAAAg3nMDw5AAAMAAAA3ng");
	var mask_graphics_196 = new cjs.Graphics().p("Eh45Ab0MAAAg3nMDxzAAAMAAAA3ng");
	var mask_graphics_197 = new cjs.Graphics().p("Eh5WAb0MAAAg3nMDytAAAMAAAA3ng");
	var mask_graphics_198 = new cjs.Graphics().p("Eh5zAb0MAAAg3nMDzmAAAMAAAA3ng");
	var mask_graphics_199 = new cjs.Graphics().p("Eh6PAb0MAAAg3nMD0fAAAMAAAA3ng");
	var mask_graphics_200 = new cjs.Graphics().p("Eh6sAb0MAAAg3nMD1ZAAAMAAAA3ng");
	var mask_graphics_201 = new cjs.Graphics().p("Eh7JAb0MAAAg3nMD2TAAAMAAAA3ng");
	var mask_graphics_202 = new cjs.Graphics().p("Eh7mAb0MAAAg3nMD3NAAAMAAAA3ng");
	var mask_graphics_203 = new cjs.Graphics().p("Eh8CAb0MAAAg3nMD4FAAAMAAAA3ng");
	var mask_graphics_204 = new cjs.Graphics().p("Eh8fAb0MAAAg3nMD4/AAAMAAAA3ng");
	var mask_graphics_205 = new cjs.Graphics().p("Eh88Ab0MAAAg3nMD55AAAMAAAA3ng");
	var mask_graphics_206 = new cjs.Graphics().p("Eh9LAb0MAAAg3nMD6XAAAMAAAA3ng");
	var mask_graphics_207 = new cjs.Graphics().p("Eh9bAb0MAAAg3nMD63AAAMAAAA3ng");
	var mask_graphics_208 = new cjs.Graphics().p("Eh9qAb0MAAAg3nMD7VAAAMAAAA3ng");
	var mask_graphics_209 = new cjs.Graphics().p("Eh95Ab0MAAAg3nMD7zAAAMAAAA3ng");
	var mask_graphics_210 = new cjs.Graphics().p("Eh+JAb0MAAAg3nMD8TAAAMAAAA3ng");
	var mask_graphics_211 = new cjs.Graphics().p("Eh+YAb0MAAAg3nMD8xAAAMAAAA3ng");
	var mask_graphics_212 = new cjs.Graphics().p("Eh+nAb0MAAAg3nMD9PAAAMAAAA3ng");
	var mask_graphics_213 = new cjs.Graphics().p("Eh+3Ab0MAAAg3nMD9vAAAMAAAA3ng");
	var mask_graphics_214 = new cjs.Graphics().p("Eh/GAb0MAAAg3nMD+NAAAMAAAA3ng");
	var mask_graphics_215 = new cjs.Graphics().p("Eh/VAb0MAAAg3nMD+rAAAMAAAA3ng");
	var mask_graphics_216 = new cjs.Graphics().p("Eh/lAb0MAAAg3nMD/LAAAMAAAA3ng");
	var mask_graphics_217 = new cjs.Graphics().p("Eh/0Ab0MAAAg3nMD/pAAAMAAAA3ng");
	var mask_graphics_218 = new cjs.Graphics().p("EiADAb0MAAAg3nMEAHAAAMAAAA3ng");
	var mask_graphics_219 = new cjs.Graphics().p("EiATAb0MAAAg3nMEAnAAAMAAAA3ng");
	var mask_graphics_220 = new cjs.Graphics().p("EiAiAb0MAAAg3nMEBFAAAMAAAA3ng");
	var mask_graphics_221 = new cjs.Graphics().p("EiAxAb0MAAAg3nMEBjAAAMAAAA3ng");
	var mask_graphics_222 = new cjs.Graphics().p("EiBBAb0MAAAg3nMECDAAAMAAAA3ng");
	var mask_graphics_223 = new cjs.Graphics().p("EiBQAb0MAAAg3nMEChAAAMAAAA3ng");
	var mask_graphics_224 = new cjs.Graphics().p("EiBfAb0MAAAg3nMEC/AAAMAAAA3ng");
	var mask_graphics_225 = new cjs.Graphics().p("EiBvAb0MAAAg3nMEDfAAAMAAAA3ng");
	var mask_graphics_226 = new cjs.Graphics().p("EiB+Ab0MAAAg3nMED9AAAMAAAA3ng");
	var mask_graphics_227 = new cjs.Graphics().p("EiCMAb0MAAAg3nMEEZAAAMAAAA3ng");
	var mask_graphics_228 = new cjs.Graphics().p("EiCaAb0MAAAg3nMEE1AAAMAAAA3ng");
	var mask_graphics_229 = new cjs.Graphics().p("EiCoAb0MAAAg3nMEFRAAAMAAAA3ng");
	var mask_graphics_230 = new cjs.Graphics().p("EiC2Ab0MAAAg3nMEFtAAAMAAAA3ng");
	var mask_graphics_231 = new cjs.Graphics().p("EiDEAb0MAAAg3nMEGJAAAMAAAA3ng");
	var mask_graphics_232 = new cjs.Graphics().p("EiDSAb0MAAAg3nMEGlAAAMAAAA3ng");
	var mask_graphics_233 = new cjs.Graphics().p("EiDgAb0MAAAg3nMEHBAAAMAAAA3ng");
	var mask_graphics_234 = new cjs.Graphics().p("EiDuAb0MAAAg3nMEHdAAAMAAAA3ng");
	var mask_graphics_235 = new cjs.Graphics().p("EiD8Ab0MAAAg3nMEH5AAAMAAAA3ng");
	var mask_graphics_236 = new cjs.Graphics().p("EiEJAb0MAAAg3nMEITAAAMAAAA3ng");
	var mask_graphics_237 = new cjs.Graphics().p("EiEXAb0MAAAg3nMEIvAAAMAAAA3ng");
	var mask_graphics_238 = new cjs.Graphics().p("EiElAb0MAAAg3nMEJLAAAMAAAA3ng");
	var mask_graphics_239 = new cjs.Graphics().p("EiEzAb0MAAAg3nMEJnAAAMAAAA3ng");
	var mask_graphics_240 = new cjs.Graphics().p("EiFBAb0MAAAg3nMEKDAAAMAAAA3ng");
	var mask_graphics_241 = new cjs.Graphics().p("EiFPAb0MAAAg3nMEKfAAAMAAAA3ng");
	var mask_graphics_242 = new cjs.Graphics().p("EiFdAb0MAAAg3nMEK7AAAMAAAA3ng");
	var mask_graphics_243 = new cjs.Graphics().p("EiFrAb0MAAAg3nMELXAAAMAAAA3ng");
	var mask_graphics_244 = new cjs.Graphics().p("EiF5Ab0MAAAg3nMELzAAAMAAAA3ng");
	var mask_graphics_245 = new cjs.Graphics().p("EiGHAb0MAAAg3nMEMPAAAMAAAA3ng");
	var mask_graphics_246 = new cjs.Graphics().p("EiGVAb0MAAAg3nMEMrAAAMAAAA3ng");
	var mask_graphics_247 = new cjs.Graphics().p("EiGjAb0MAAAg3nMENHAAAMAAAA3ng");
	var mask_graphics_248 = new cjs.Graphics().p("EiGxAb0MAAAg3nMENjAAAMAAAA3ng");
	var mask_graphics_249 = new cjs.Graphics().p("EiG/Ab0MAAAg3nMEN/AAAMAAAA3ng");
	var mask_graphics_250 = new cjs.Graphics().p("EiHNAb0MAAAg3nMEObAAAMAAAA3ng");
	var mask_graphics_251 = new cjs.Graphics().p("EiH3Ab0MAAAg3nMEPvAAAMAAAA3ng");
	var mask_graphics_252 = new cjs.Graphics().p("EiIgAb0MAAAg3nMERBAAAMAAAA3ng");
	var mask_graphics_253 = new cjs.Graphics().p("EiJKAb0MAAAg3nMESVAAAMAAAA3ng");
	var mask_graphics_254 = new cjs.Graphics().p("EiJ0Ab0MAAAg3nMETpAAAMAAAA3ng");
	var mask_graphics_255 = new cjs.Graphics().p("EiKdAb0MAAAg3nMEU7AAAMAAAA3ng");
	var mask_graphics_256 = new cjs.Graphics().p("EiLHAb0MAAAg3nMEWPAAAMAAAA3ng");
	var mask_graphics_257 = new cjs.Graphics().p("EiLxAb0MAAAg3nMEXjAAAMAAAA3ng");
	var mask_graphics_258 = new cjs.Graphics().p("EiMaAb0MAAAg3nMEY1AAAMAAAA3ng");
	var mask_graphics_259 = new cjs.Graphics().p("EiNEAb0MAAAg3nMEaJAAAMAAAA3ng");
	var mask_graphics_260 = new cjs.Graphics().p("EiNuAb0MAAAg3nMEbdAAAMAAAA3ng");
	var mask_graphics_261 = new cjs.Graphics().p("EiOXAb0MAAAg3nMEcvAAAMAAAA3ng");
	var mask_graphics_262 = new cjs.Graphics().p("EiPBAb0MAAAg3nMEeDAAAMAAAA3ng");
	var mask_graphics_263 = new cjs.Graphics().p("EiPrAb0MAAAg3nMEfXAAAMAAAA3ng");
	var mask_graphics_264 = new cjs.Graphics().p("EiQUAb0MAAAg3nMEgpAAAMAAAA3ng");
	var mask_graphics_265 = new cjs.Graphics().p("EiQ+Ab0MAAAg3nMEh9AAAMAAAA3ng");
	var mask_graphics_266 = new cjs.Graphics().p("EiRoAb0MAAAg3nMEjRAAAMAAAA3ng");
	var mask_graphics_267 = new cjs.Graphics().p("EiSRAb0MAAAg3nMEkjAAAMAAAA3ng");
	var mask_graphics_268 = new cjs.Graphics().p("EiS7Ab0MAAAg3nMEl3AAAMAAAA3ng");
	var mask_graphics_269 = new cjs.Graphics().p("EiTqAb0MAAAg3nMEnVAAAMAAAA3ng");
	var mask_graphics_270 = new cjs.Graphics().p("EiUZAb0MAAAg3nMEozAAAMAAAA3ng");
	var mask_graphics_271 = new cjs.Graphics().p("EiVIAb0MAAAg3nMEqRAAAMAAAA3ng");
	var mask_graphics_272 = new cjs.Graphics().p("EiV3Ab0MAAAg3nMErvAAAMAAAA3ng");
	var mask_graphics_273 = new cjs.Graphics().p("EiWmAb0MAAAg3nMEtNAAAMAAAA3ng");
	var mask_graphics_274 = new cjs.Graphics().p("EiXVAb0MAAAg3nMEurAAAMAAAA3ng");
	var mask_graphics_275 = new cjs.Graphics().p("EiYFAb0MAAAg3nMEwLAAAMAAAA3ng");
	var mask_graphics_276 = new cjs.Graphics().p("EiY0Ab0MAAAg3nMExpAAAMAAAA3ng");
	var mask_graphics_277 = new cjs.Graphics().p("EiZjAb0MAAAg3nMEzHAAAMAAAA3ng");
	var mask_graphics_278 = new cjs.Graphics().p("EiaSAb0MAAAg3nME0lAAAMAAAA3ng");
	var mask_graphics_279 = new cjs.Graphics().p("EibBAb0MAAAg3nME2DAAAMAAAA3ng");
	var mask_graphics_280 = new cjs.Graphics().p("EibeAb0MAAAg3nME29AAAMAAAA3ng");
	var mask_graphics_281 = new cjs.Graphics().p("Eib6Ab0MAAAg3nME31AAAMAAAA3ng");
	var mask_graphics_282 = new cjs.Graphics().p("EicXAb0MAAAg3nME4vAAAMAAAA3ng");
	var mask_graphics_283 = new cjs.Graphics().p("EiczAb0MAAAg3nME5nAAAMAAAA3ng");
	var mask_graphics_284 = new cjs.Graphics().p("EidQAb0MAAAg3nME6hAAAMAAAA3ng");
	var mask_graphics_285 = new cjs.Graphics().p("EidtAb0MAAAg3nME7bAAAMAAAA3ng");
	var mask_graphics_286 = new cjs.Graphics().p("EieJAb0MAAAg3nME8TAAAMAAAA3ng");
	var mask_graphics_287 = new cjs.Graphics().p("EiemAb0MAAAg3nME9NAAAMAAAA3ng");
	var mask_graphics_288 = new cjs.Graphics().p("EifDAb0MAAAg3nME+HAAAMAAAA3ng");
	var mask_graphics_289 = new cjs.Graphics().p("EiffAb0MAAAg3nME+/AAAMAAAA3ng");
	var mask_graphics_290 = new cjs.Graphics().p("Eif8Ab0MAAAg3nME/5AAAMAAAA3ng");
	var mask_graphics_291 = new cjs.Graphics().p("EigZAb0MAAAg3nMFAzAAAMAAAA3ng");
	var mask_graphics_292 = new cjs.Graphics().p("Eig1Ab0MAAAg3nMFBrAAAMAAAA3ng");
	var mask_graphics_293 = new cjs.Graphics().p("EihSAb0MAAAg3nMFClAAAMAAAA3ng");
	var mask_graphics_294 = new cjs.Graphics().p("EihvAb0MAAAg3nMFDfAAAMAAAA3ng");
	var mask_graphics_295 = new cjs.Graphics().p("EiiLAb0MAAAg3nMFEXAAAMAAAA3ng");
	var mask_graphics_296 = new cjs.Graphics().p("EiioAb0MAAAg3nMFFRAAAMAAAA3ng");
	var mask_graphics_297 = new cjs.Graphics().p("EijFAb0MAAAg3nMFGLAAAMAAAA3ng");
	var mask_graphics_298 = new cjs.Graphics().p("EijwAb0MAAAg3nMFHhAAAMAAAA3ng");
	var mask_graphics_299 = new cjs.Graphics().p("EikbAb0MAAAg3nMFI3AAAMAAAA3ng");
	var mask_graphics_300 = new cjs.Graphics().p("EilGAb0MAAAg3nMFKNAAAMAAAA3ng");
	var mask_graphics_301 = new cjs.Graphics().p("EilwAb0MAAAg3nMFLhAAAMAAAA3ng");
	var mask_graphics_302 = new cjs.Graphics().p("EimbAb0MAAAg3nMFM3AAAMAAAA3ng");
	var mask_graphics_303 = new cjs.Graphics().p("EinGAb0MAAAg3nMFONAAAMAAAA3ng");
	var mask_graphics_304 = new cjs.Graphics().p("EinxAb0MAAAg3nMFPjAAAMAAAA3ng");
	var mask_graphics_305 = new cjs.Graphics().p("EiocAb0MAAAg3nMFQ5AAAMAAAA3ng");
	var mask_graphics_306 = new cjs.Graphics().p("EipHAb0MAAAg3nMFSPAAAMAAAA3ng");
	var mask_graphics_307 = new cjs.Graphics().p("EipyAb0MAAAg3nMFTlAAAMAAAA3ng");
	var mask_graphics_308 = new cjs.Graphics().p("EiqdAb0MAAAg3nMFU7AAAMAAAA3ng");
	var mask_graphics_309 = new cjs.Graphics().p("EirIAb0MAAAg3nMFWRAAAMAAAA3ng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:148.1,y:124.5}).wait(1).to({graphics:mask_graphics_1,x:151.9,y:124.5}).wait(1).to({graphics:mask_graphics_2,x:155.7,y:124.5}).wait(1).to({graphics:mask_graphics_3,x:159.5,y:124.5}).wait(1).to({graphics:mask_graphics_4,x:162.8,y:124.5}).wait(1).to({graphics:mask_graphics_5,x:166.2,y:124.5}).wait(1).to({graphics:mask_graphics_6,x:169.5,y:124.5}).wait(1).to({graphics:mask_graphics_7,x:172.8,y:124.5}).wait(1).to({graphics:mask_graphics_8,x:176.1,y:124.5}).wait(1).to({graphics:mask_graphics_9,x:179.4,y:124.5}).wait(1).to({graphics:mask_graphics_10,x:182.7,y:124.5}).wait(1).to({graphics:mask_graphics_11,x:186,y:124.5}).wait(1).to({graphics:mask_graphics_12,x:189.3,y:124.5}).wait(1).to({graphics:mask_graphics_13,x:192.7,y:124.5}).wait(1).to({graphics:mask_graphics_14,x:196,y:124.5}).wait(1).to({graphics:mask_graphics_15,x:199.3,y:124.5}).wait(1).to({graphics:mask_graphics_16,x:202.7,y:124.5}).wait(1).to({graphics:mask_graphics_17,x:205,y:124.5}).wait(1).to({graphics:mask_graphics_18,x:207.4,y:124.5}).wait(1).to({graphics:mask_graphics_19,x:209.7,y:124.5}).wait(1).to({graphics:mask_graphics_20,x:212.1,y:124.5}).wait(1).to({graphics:mask_graphics_21,x:214.5,y:124.5}).wait(1).to({graphics:mask_graphics_22,x:216.8,y:124.5}).wait(1).to({graphics:mask_graphics_23,x:219.2,y:124.5}).wait(1).to({graphics:mask_graphics_24,x:221.5,y:124.5}).wait(1).to({graphics:mask_graphics_25,x:223.9,y:124.5}).wait(1).to({graphics:mask_graphics_26,x:226.3,y:124.5}).wait(1).to({graphics:mask_graphics_27,x:228.6,y:124.5}).wait(1).to({graphics:mask_graphics_28,x:231,y:124.5}).wait(1).to({graphics:mask_graphics_29,x:233.3,y:124.5}).wait(1).to({graphics:mask_graphics_30,x:235.7,y:124.5}).wait(1).to({graphics:mask_graphics_31,x:238.1,y:124.5}).wait(1).to({graphics:mask_graphics_32,x:240.4,y:124.5}).wait(1).to({graphics:mask_graphics_33,x:242.8,y:124.5}).wait(1).to({graphics:mask_graphics_34,x:245.1,y:124.5}).wait(1).to({graphics:mask_graphics_35,x:247.5,y:124.5}).wait(1).to({graphics:mask_graphics_36,x:249.8,y:124.5}).wait(1).to({graphics:mask_graphics_37,x:252.2,y:124.5}).wait(1).to({graphics:mask_graphics_38,x:254.6,y:124.5}).wait(1).to({graphics:mask_graphics_39,x:258.3,y:124.5}).wait(1).to({graphics:mask_graphics_40,x:261.9,y:124.5}).wait(1).to({graphics:mask_graphics_41,x:265.6,y:124.5}).wait(1).to({graphics:mask_graphics_42,x:269.3,y:124.5}).wait(1).to({graphics:mask_graphics_43,x:273,y:124.5}).wait(1).to({graphics:mask_graphics_44,x:276.7,y:124.5}).wait(1).to({graphics:mask_graphics_45,x:280.4,y:124.5}).wait(1).to({graphics:mask_graphics_46,x:284.1,y:124.5}).wait(1).to({graphics:mask_graphics_47,x:287.8,y:124.5}).wait(1).to({graphics:mask_graphics_48,x:291.5,y:124.5}).wait(1).to({graphics:mask_graphics_49,x:295.2,y:124.5}).wait(1).to({graphics:mask_graphics_50,x:298.9,y:124.5}).wait(1).to({graphics:mask_graphics_51,x:302.6,y:124.5}).wait(1).to({graphics:mask_graphics_52,x:306.3,y:124.5}).wait(1).to({graphics:mask_graphics_53,x:309.9,y:124.5}).wait(1).to({graphics:mask_graphics_54,x:313.6,y:124.5}).wait(1).to({graphics:mask_graphics_55,x:318,y:124.5}).wait(1).to({graphics:mask_graphics_56,x:322.4,y:124.5}).wait(1).to({graphics:mask_graphics_57,x:326.7,y:124.5}).wait(1).to({graphics:mask_graphics_58,x:331.1,y:124.5}).wait(1).to({graphics:mask_graphics_59,x:335.4,y:124.5}).wait(1).to({graphics:mask_graphics_60,x:339.8,y:124.5}).wait(1).to({graphics:mask_graphics_61,x:344.2,y:124.5}).wait(1).to({graphics:mask_graphics_62,x:348.5,y:124.5}).wait(1).to({graphics:mask_graphics_63,x:352.9,y:124.5}).wait(1).to({graphics:mask_graphics_64,x:357.4,y:124.5}).wait(1).to({graphics:mask_graphics_65,x:361.9,y:124.5}).wait(1).to({graphics:mask_graphics_66,x:366.4,y:124.5}).wait(1).to({graphics:mask_graphics_67,x:371,y:124.5}).wait(1).to({graphics:mask_graphics_68,x:375.5,y:124.5}).wait(1).to({graphics:mask_graphics_69,x:380.1,y:124.5}).wait(1).to({graphics:mask_graphics_70,x:384.6,y:124.5}).wait(1).to({graphics:mask_graphics_71,x:389.1,y:124.5}).wait(1).to({graphics:mask_graphics_72,x:393.7,y:124.5}).wait(1).to({graphics:mask_graphics_73,x:398.2,y:124.5}).wait(1).to({graphics:mask_graphics_74,x:402.8,y:124.5}).wait(1).to({graphics:mask_graphics_75,x:407.3,y:124.5}).wait(1).to({graphics:mask_graphics_76,x:411.8,y:124.5}).wait(1).to({graphics:mask_graphics_77,x:416.4,y:124.5}).wait(1).to({graphics:mask_graphics_78,x:420.9,y:124.5}).wait(1).to({graphics:mask_graphics_79,x:425.5,y:124.5}).wait(1).to({graphics:mask_graphics_80,x:430,y:124.5}).wait(1).to({graphics:mask_graphics_81,x:434.5,y:124.5}).wait(1).to({graphics:mask_graphics_82,x:439.1,y:124.5}).wait(1).to({graphics:mask_graphics_83,x:443.6,y:124.5}).wait(1).to({graphics:mask_graphics_84,x:445.2,y:124.5}).wait(1).to({graphics:mask_graphics_85,x:446.8,y:124.5}).wait(1).to({graphics:mask_graphics_86,x:448.4,y:124.5}).wait(1).to({graphics:mask_graphics_87,x:449.9,y:124.5}).wait(1).to({graphics:mask_graphics_88,x:451.5,y:124.5}).wait(1).to({graphics:mask_graphics_89,x:453.1,y:124.5}).wait(1).to({graphics:mask_graphics_90,x:454.7,y:124.5}).wait(1).to({graphics:mask_graphics_91,x:456.3,y:124.5}).wait(1).to({graphics:mask_graphics_92,x:457.8,y:124.5}).wait(1).to({graphics:mask_graphics_93,x:459.4,y:124.5}).wait(1).to({graphics:mask_graphics_94,x:461,y:124.5}).wait(1).to({graphics:mask_graphics_95,x:462.6,y:124.5}).wait(1).to({graphics:mask_graphics_96,x:464.2,y:124.5}).wait(1).to({graphics:mask_graphics_97,x:465.7,y:124.5}).wait(1).to({graphics:mask_graphics_98,x:467.3,y:124.5}).wait(1).to({graphics:mask_graphics_99,x:468.9,y:124.5}).wait(1).to({graphics:mask_graphics_100,x:470.5,y:124.5}).wait(1).to({graphics:mask_graphics_101,x:472.1,y:124.5}).wait(1).to({graphics:mask_graphics_102,x:475.7,y:124.5}).wait(1).to({graphics:mask_graphics_103,x:479.3,y:124.5}).wait(1).to({graphics:mask_graphics_104,x:482.9,y:124.5}).wait(1).to({graphics:mask_graphics_105,x:486.5,y:124.5}).wait(1).to({graphics:mask_graphics_106,x:490.2,y:124.5}).wait(1).to({graphics:mask_graphics_107,x:493.8,y:124.5}).wait(1).to({graphics:mask_graphics_108,x:497.4,y:124.5}).wait(1).to({graphics:mask_graphics_109,x:501,y:124.5}).wait(1).to({graphics:mask_graphics_110,x:504.6,y:124.5}).wait(1).to({graphics:mask_graphics_111,x:508.2,y:124.5}).wait(1).to({graphics:mask_graphics_112,x:511.9,y:124.5}).wait(1).to({graphics:mask_graphics_113,x:515.5,y:124.5}).wait(1).to({graphics:mask_graphics_114,x:519.1,y:124.5}).wait(1).to({graphics:mask_graphics_115,x:522.7,y:124.5}).wait(1).to({graphics:mask_graphics_116,x:526.3,y:124.5}).wait(1).to({graphics:mask_graphics_117,x:529.9,y:124.5}).wait(1).to({graphics:mask_graphics_118,x:533.6,y:124.5}).wait(1).to({graphics:mask_graphics_119,x:537.2,y:124.5}).wait(1).to({graphics:mask_graphics_120,x:540.8,y:124.5}).wait(1).to({graphics:mask_graphics_121,x:544.4,y:124.5}).wait(1).to({graphics:mask_graphics_122,x:548,y:124.5}).wait(1).to({graphics:mask_graphics_123,x:551.6,y:124.5}).wait(1).to({graphics:mask_graphics_124,x:555.3,y:124.5}).wait(1).to({graphics:mask_graphics_125,x:558.9,y:124.5}).wait(1).to({graphics:mask_graphics_126,x:562.5,y:124.5}).wait(1).to({graphics:mask_graphics_127,x:566.1,y:124.5}).wait(1).to({graphics:mask_graphics_128,x:569.7,y:124.5}).wait(1).to({graphics:mask_graphics_129,x:573.4,y:124.5}).wait(1).to({graphics:mask_graphics_130,x:574.9,y:124.5}).wait(1).to({graphics:mask_graphics_131,x:576.5,y:124.5}).wait(1).to({graphics:mask_graphics_132,x:578.1,y:124.5}).wait(1).to({graphics:mask_graphics_133,x:579.7,y:124.5}).wait(1).to({graphics:mask_graphics_134,x:581.3,y:124.5}).wait(1).to({graphics:mask_graphics_135,x:582.9,y:124.5}).wait(1).to({graphics:mask_graphics_136,x:584.5,y:124.5}).wait(1).to({graphics:mask_graphics_137,x:586.1,y:124.5}).wait(1).to({graphics:mask_graphics_138,x:587.7,y:124.5}).wait(1).to({graphics:mask_graphics_139,x:589.3,y:124.5}).wait(1).to({graphics:mask_graphics_140,x:590.9,y:124.5}).wait(1).to({graphics:mask_graphics_141,x:592.5,y:124.5}).wait(1).to({graphics:mask_graphics_142,x:594.1,y:124.5}).wait(1).to({graphics:mask_graphics_143,x:595.7,y:124.5}).wait(1).to({graphics:mask_graphics_144,x:597.3,y:124.5}).wait(1).to({graphics:mask_graphics_145,x:598.9,y:124.5}).wait(1).to({graphics:mask_graphics_146,x:600.5,y:124.5}).wait(1).to({graphics:mask_graphics_147,x:602.1,y:124.5}).wait(1).to({graphics:mask_graphics_148,x:605,y:124.5}).wait(1).to({graphics:mask_graphics_149,x:608,y:124.5}).wait(1).to({graphics:mask_graphics_150,x:610.9,y:124.5}).wait(1).to({graphics:mask_graphics_151,x:613.9,y:124.5}).wait(1).to({graphics:mask_graphics_152,x:616.8,y:124.5}).wait(1).to({graphics:mask_graphics_153,x:619.8,y:124.5}).wait(1).to({graphics:mask_graphics_154,x:622.7,y:124.5}).wait(1).to({graphics:mask_graphics_155,x:625.6,y:124.5}).wait(1).to({graphics:mask_graphics_156,x:628.6,y:124.5}).wait(1).to({graphics:mask_graphics_157,x:631.5,y:124.5}).wait(1).to({graphics:mask_graphics_158,x:635.6,y:124.5}).wait(1).to({graphics:mask_graphics_159,x:639.7,y:124.5}).wait(1).to({graphics:mask_graphics_160,x:643.7,y:124.5}).wait(1).to({graphics:mask_graphics_161,x:647.8,y:124.5}).wait(1).to({graphics:mask_graphics_162,x:651.9,y:124.5}).wait(1).to({graphics:mask_graphics_163,x:655.9,y:124.5}).wait(1).to({graphics:mask_graphics_164,x:660,y:124.5}).wait(1).to({graphics:mask_graphics_165,x:664,y:124.5}).wait(1).to({graphics:mask_graphics_166,x:668.1,y:124.5}).wait(1).to({graphics:mask_graphics_167,x:672.2,y:124.5}).wait(1).to({graphics:mask_graphics_168,x:675.3,y:124.5}).wait(1).to({graphics:mask_graphics_169,x:678.4,y:124.5}).wait(1).to({graphics:mask_graphics_170,x:681.5,y:124.5}).wait(1).to({graphics:mask_graphics_171,x:684.7,y:124.5}).wait(1).to({graphics:mask_graphics_172,x:687.8,y:124.5}).wait(1).to({graphics:mask_graphics_173,x:690.9,y:124.5}).wait(1).to({graphics:mask_graphics_174,x:694,y:124.5}).wait(1).to({graphics:mask_graphics_175,x:697.2,y:124.5}).wait(1).to({graphics:mask_graphics_176,x:700.3,y:124.5}).wait(1).to({graphics:mask_graphics_177,x:703.4,y:124.5}).wait(1).to({graphics:mask_graphics_178,x:706.5,y:124.5}).wait(1).to({graphics:mask_graphics_179,x:709.7,y:124.5}).wait(1).to({graphics:mask_graphics_180,x:712.8,y:124.5}).wait(1).to({graphics:mask_graphics_181,x:715.9,y:124.5}).wait(1).to({graphics:mask_graphics_182,x:719,y:124.5}).wait(1).to({graphics:mask_graphics_183,x:722.2,y:124.5}).wait(1).to({graphics:mask_graphics_184,x:725.3,y:124.5}).wait(1).to({graphics:mask_graphics_185,x:728.2,y:124.5}).wait(1).to({graphics:mask_graphics_186,x:731.1,y:124.5}).wait(1).to({graphics:mask_graphics_187,x:733.9,y:124.5}).wait(1).to({graphics:mask_graphics_188,x:736.8,y:124.5}).wait(1).to({graphics:mask_graphics_189,x:739.7,y:124.5}).wait(1).to({graphics:mask_graphics_190,x:742.6,y:124.5}).wait(1).to({graphics:mask_graphics_191,x:745.4,y:124.5}).wait(1).to({graphics:mask_graphics_192,x:748.3,y:124.5}).wait(1).to({graphics:mask_graphics_193,x:751.2,y:124.5}).wait(1).to({graphics:mask_graphics_194,x:754.1,y:124.5}).wait(1).to({graphics:mask_graphics_195,x:757,y:124.5}).wait(1).to({graphics:mask_graphics_196,x:759.8,y:124.5}).wait(1).to({graphics:mask_graphics_197,x:762.7,y:124.5}).wait(1).to({graphics:mask_graphics_198,x:765.6,y:124.5}).wait(1).to({graphics:mask_graphics_199,x:768.5,y:124.5}).wait(1).to({graphics:mask_graphics_200,x:771.4,y:124.5}).wait(1).to({graphics:mask_graphics_201,x:774.2,y:124.5}).wait(1).to({graphics:mask_graphics_202,x:777.1,y:124.5}).wait(1).to({graphics:mask_graphics_203,x:780,y:124.5}).wait(1).to({graphics:mask_graphics_204,x:782.9,y:124.5}).wait(1).to({graphics:mask_graphics_205,x:785.8,y:124.5}).wait(1).to({graphics:mask_graphics_206,x:787.3,y:124.5}).wait(1).to({graphics:mask_graphics_207,x:788.8,y:124.5}).wait(1).to({graphics:mask_graphics_208,x:790.3,y:124.5}).wait(1).to({graphics:mask_graphics_209,x:791.9,y:124.5}).wait(1).to({graphics:mask_graphics_210,x:793.4,y:124.5}).wait(1).to({graphics:mask_graphics_211,x:794.9,y:124.5}).wait(1).to({graphics:mask_graphics_212,x:796.5,y:124.5}).wait(1).to({graphics:mask_graphics_213,x:798,y:124.5}).wait(1).to({graphics:mask_graphics_214,x:799.5,y:124.5}).wait(1).to({graphics:mask_graphics_215,x:801.1,y:124.5}).wait(1).to({graphics:mask_graphics_216,x:802.6,y:124.5}).wait(1).to({graphics:mask_graphics_217,x:804.1,y:124.5}).wait(1).to({graphics:mask_graphics_218,x:805.7,y:124.5}).wait(1).to({graphics:mask_graphics_219,x:807.2,y:124.5}).wait(1).to({graphics:mask_graphics_220,x:808.7,y:124.5}).wait(1).to({graphics:mask_graphics_221,x:810.3,y:124.5}).wait(1).to({graphics:mask_graphics_222,x:811.8,y:124.5}).wait(1).to({graphics:mask_graphics_223,x:813.3,y:124.5}).wait(1).to({graphics:mask_graphics_224,x:814.9,y:124.5}).wait(1).to({graphics:mask_graphics_225,x:816.4,y:124.5}).wait(1).to({graphics:mask_graphics_226,x:817.9,y:124.5}).wait(1).to({graphics:mask_graphics_227,x:819.3,y:124.5}).wait(1).to({graphics:mask_graphics_228,x:820.7,y:124.5}).wait(1).to({graphics:mask_graphics_229,x:822.1,y:124.5}).wait(1).to({graphics:mask_graphics_230,x:823.5,y:124.5}).wait(1).to({graphics:mask_graphics_231,x:824.9,y:124.5}).wait(1).to({graphics:mask_graphics_232,x:826.2,y:124.5}).wait(1).to({graphics:mask_graphics_233,x:827.6,y:124.5}).wait(1).to({graphics:mask_graphics_234,x:829,y:124.5}).wait(1).to({graphics:mask_graphics_235,x:830.4,y:124.5}).wait(1).to({graphics:mask_graphics_236,x:831.8,y:124.5}).wait(1).to({graphics:mask_graphics_237,x:833.2,y:124.5}).wait(1).to({graphics:mask_graphics_238,x:834.6,y:124.5}).wait(1).to({graphics:mask_graphics_239,x:835.9,y:124.5}).wait(1).to({graphics:mask_graphics_240,x:837.3,y:124.5}).wait(1).to({graphics:mask_graphics_241,x:838.7,y:124.5}).wait(1).to({graphics:mask_graphics_242,x:840.1,y:124.5}).wait(1).to({graphics:mask_graphics_243,x:841.5,y:124.5}).wait(1).to({graphics:mask_graphics_244,x:842.9,y:124.5}).wait(1).to({graphics:mask_graphics_245,x:844.2,y:124.5}).wait(1).to({graphics:mask_graphics_246,x:845.6,y:124.5}).wait(1).to({graphics:mask_graphics_247,x:847,y:124.5}).wait(1).to({graphics:mask_graphics_248,x:848.4,y:124.5}).wait(1).to({graphics:mask_graphics_249,x:849.8,y:124.5}).wait(1).to({graphics:mask_graphics_250,x:851.4,y:124.5}).wait(1).to({graphics:mask_graphics_251,x:855.6,y:124.5}).wait(1).to({graphics:mask_graphics_252,x:859.8,y:124.5}).wait(1).to({graphics:mask_graphics_253,x:863.9,y:124.5}).wait(1).to({graphics:mask_graphics_254,x:868.1,y:124.5}).wait(1).to({graphics:mask_graphics_255,x:872.3,y:124.5}).wait(1).to({graphics:mask_graphics_256,x:876.4,y:124.5}).wait(1).to({graphics:mask_graphics_257,x:880.6,y:124.5}).wait(1).to({graphics:mask_graphics_258,x:884.8,y:124.5}).wait(1).to({graphics:mask_graphics_259,x:888.9,y:124.5}).wait(1).to({graphics:mask_graphics_260,x:893.1,y:124.5}).wait(1).to({graphics:mask_graphics_261,x:897.3,y:124.5}).wait(1).to({graphics:mask_graphics_262,x:901.4,y:124.5}).wait(1).to({graphics:mask_graphics_263,x:905.6,y:124.5}).wait(1).to({graphics:mask_graphics_264,x:909.8,y:124.5}).wait(1).to({graphics:mask_graphics_265,x:913.9,y:124.5}).wait(1).to({graphics:mask_graphics_266,x:918.1,y:124.5}).wait(1).to({graphics:mask_graphics_267,x:922.3,y:124.5}).wait(1).to({graphics:mask_graphics_268,x:926.4,y:124.5}).wait(1).to({graphics:mask_graphics_269,x:931.2,y:124.5}).wait(1).to({graphics:mask_graphics_270,x:935.9,y:124.5}).wait(1).to({graphics:mask_graphics_271,x:940.6,y:124.5}).wait(1).to({graphics:mask_graphics_272,x:945.3,y:124.5}).wait(1).to({graphics:mask_graphics_273,x:950,y:124.5}).wait(1).to({graphics:mask_graphics_274,x:954.7,y:124.5}).wait(1).to({graphics:mask_graphics_275,x:959.4,y:124.5}).wait(1).to({graphics:mask_graphics_276,x:964.1,y:124.5}).wait(1).to({graphics:mask_graphics_277,x:968.8,y:124.5}).wait(1).to({graphics:mask_graphics_278,x:973.5,y:124.5}).wait(1).to({graphics:mask_graphics_279,x:978.2,y:124.5}).wait(1).to({graphics:mask_graphics_280,x:981.1,y:124.5}).wait(1).to({graphics:mask_graphics_281,x:983.9,y:124.5}).wait(1).to({graphics:mask_graphics_282,x:986.8,y:124.5}).wait(1).to({graphics:mask_graphics_283,x:989.6,y:124.5}).wait(1).to({graphics:mask_graphics_284,x:992.5,y:124.5}).wait(1).to({graphics:mask_graphics_285,x:995.3,y:124.5}).wait(1).to({graphics:mask_graphics_286,x:998.2,y:124.5}).wait(1).to({graphics:mask_graphics_287,x:1001,y:124.5}).wait(1).to({graphics:mask_graphics_288,x:1003.9,y:124.5}).wait(1).to({graphics:mask_graphics_289,x:1006.7,y:124.5}).wait(1).to({graphics:mask_graphics_290,x:1009.6,y:124.5}).wait(1).to({graphics:mask_graphics_291,x:1012.4,y:124.5}).wait(1).to({graphics:mask_graphics_292,x:1015.3,y:124.5}).wait(1).to({graphics:mask_graphics_293,x:1018.1,y:124.5}).wait(1).to({graphics:mask_graphics_294,x:1021,y:124.5}).wait(1).to({graphics:mask_graphics_295,x:1023.8,y:124.5}).wait(1).to({graphics:mask_graphics_296,x:1026.7,y:124.5}).wait(1).to({graphics:mask_graphics_297,x:1029.8,y:124.5}).wait(1).to({graphics:mask_graphics_298,x:1034.1,y:124.5}).wait(1).to({graphics:mask_graphics_299,x:1038.4,y:124.5}).wait(1).to({graphics:mask_graphics_300,x:1042.6,y:124.5}).wait(1).to({graphics:mask_graphics_301,x:1046.9,y:124.5}).wait(1).to({graphics:mask_graphics_302,x:1051.1,y:124.5}).wait(1).to({graphics:mask_graphics_303,x:1055.4,y:124.5}).wait(1).to({graphics:mask_graphics_304,x:1059.7,y:124.5}).wait(1).to({graphics:mask_graphics_305,x:1063.9,y:124.5}).wait(1).to({graphics:mask_graphics_306,x:1068.2,y:124.5}).wait(1).to({graphics:mask_graphics_307,x:1072.5,y:124.5}).wait(1).to({graphics:mask_graphics_308,x:1076.7,y:124.5}).wait(1).to({graphics:mask_graphics_309,x:1081.3,y:124.5}).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(4,2,0,3).p("EjD9ABsIQQJsIQb4+ITYNSINmxhMAQGAgfISfzBINaIPIbWwiII6c4MAf5ghQIImcGIJCsyINcLYIP92AIS6cQMAKKgihMAKeAlpIXaxWIQQJsIQb4+ITYNSINmxhMAQGAgfISdzC");
	this.shape.setTransform(1254.2,119.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(310));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-6,326.5,250.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.parent.second.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(11));

	// Слой 4
	this.instance = new lib.Анимация87("synched",0);
	this.instance.setTransform(108.8,-257.4);

	this.instance_1 = new lib.Анимация88("synched",0);
	this.instance_1.setTransform(108.8,322.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-191.8},9).to({y:-128.4},10).to({y:-64.1},10).to({y:0.7},10).to({y:65},10).to({y:129.7},10).to({y:193.8},10).to({y:258.4},10).to({_off:true,y:322.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.8,-569.1,15.8,619.5);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 - копия
	this.instance = new lib.Символ6копия3();
	this.instance.setTransform(1253.2,155.2,1,1,0,0,0,1254.2,119.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-613.3},309).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17.5,2525,356.2);


(lib.Анимация89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация87("synched",0);
	this.instance.setTransform(0.2,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-342.3,15.9,619.5);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(9));

	// Слой 5
	this.instance = new lib.Символ13();
	this.instance.setTransform(96.2,28.5,1,1,0,0,0,105.2,31.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AGUCMQgRgRAAgZQAAgZARgSQASgRAZAAQAYAAASARQARASAAAZQAAAZgRARQgSASgYAAQgZAAgSgSg");
	var mask_graphics_2 = new cjs.Graphics().p("AFZCWQggggAAgtQAAgtAggeQAgggAtAAQAtAAAgAgQAgAeAAAtQAAAtggAgQggAggtAAQgtAAggggg");
	var mask_graphics_3 = new cjs.Graphics().p("ACoC1QhLhLAAhqQAAhoBLhLQBLhLBqAAQBqAABLBLQBKBLAABoQAABqhKBLQhLBLhqAAQhqAAhLhLg");
	var mask_graphics_4 = new cjs.Graphics().p("Ah9FhQiTiSAAjPQAAjOCTiSQCQiTDPAAQDPAACTCTQCSCSAADOQAADPiSCSQiTCTjPAAQjPAAiQiTg");
	var mask_graphics_5 = new cjs.Graphics().p("AnjIFQjqjXAAkuQAAktDqjWQDpjXFIAAQFKAADpDXQDqDWAAEtQAAEujqDXQjpDWlKAAQlIAAjpjWg");
	var mask_graphics_6 = new cjs.Graphics().p("ArHJ6QkokHAAlzQAAlyEokGQEnkHGgAAQGhAAEoEHQEnEGAAFyQAAFzknEHQkoEGmhAAQmgAAknkGg");
	var mask_graphics_7 = new cjs.Graphics().p("AshLAQlNkkAAmcQAAmbFNkjQFMkkHVAAQHWAAFNEkQFMEjAAGbQAAGclMEkQlNEjnWAAQnVAAlMkjg");
	var mask_graphics_8 = new cjs.Graphics().p("As/LXQlZktAAmqQAAmoFZkuQFZktHmAAQHnAAFaEtQFYEuAAGoQAAGqlYEtQlaEtnnAAQnmAAlZktg");
	var mask_graphics_9 = new cjs.Graphics().p("AsjLCQlOklAAmdQAAmcFOkkQFNklHWAAQHXAAFOElQFNEkAAGcQAAGdlNElQlOEknXAAQnWAAlNkkg");
	var mask_graphics_10 = new cjs.Graphics().p("ArPKBQkrkKAAl3QAAl2ErkKQEqkKGlAAQGmAAErEKQEqEKAAF2QAAF3kqEKQkrEKmmAAQmlAAkqkKg");
	var mask_graphics_11 = new cjs.Graphics().p("AoBIWQjxjdAAk5QAAk4DxjdQDwjeFTAAQFUAADxDeQDwDdAAE4QAAE5jwDdQjxDelUAAQlTAAjwjeg");
	var mask_graphics_12 = new cjs.Graphics().p("AiyGAQigifAAjhQAAjgCgifQCfigDfAAQDiAACfCgQCgCfAADgQAADhigCfQifCgjiAAQjfAAifigg");
	var mask_graphics_13 = new cjs.Graphics().p("ABLDrQhfhiAAiJQAAiIBfhhQBihiCJAAQCKAABhBiQBiBhAACIQAACJhiBiQhhBhiKAAQiJAAhihhg");
	var mask_graphics_14 = new cjs.Graphics().p("AECClQg1g1AAhLQAAhJA1g1QA1g1BLAAQBLAAA1A1QA1A1AABJQAABLg1A1Qg1A1hLAAQhLAAg1g1g");
	var mask_graphics_15 = new cjs.Graphics().p("AFwCSQgbgaAAglQAAgmAbgaQAagZAlAAQAmAAAaAZQAbAaAAAmQAAAlgbAaQgaAbgmAAQglAAgagbg");
	var mask_graphics_16 = new cjs.Graphics().p("AGUCMQgRgRAAgZQAAgZARgSQASgRAZAAQAYAAASARQARASAAAZQAAAZgRARQgSASgYAAQgZAAgSgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:50.7,y:15.8}).wait(1).to({graphics:mask_graphics_2,x:53.1,y:18.3}).wait(1).to({graphics:mask_graphics_3,x:60.5,y:25.6}).wait(1).to({graphics:mask_graphics_4,x:72.7,y:25.7}).wait(1).to({graphics:mask_graphics_5,x:87.5,y:25.7}).wait(1).to({graphics:mask_graphics_6,x:95.3,y:25.7}).wait(1).to({graphics:mask_graphics_7,x:95.3,y:25.7}).wait(1).to({graphics:mask_graphics_8,x:95.4,y:25.7}).wait(1).to({graphics:mask_graphics_9,x:95.4,y:25.6}).wait(1).to({graphics:mask_graphics_10,x:95.4,y:25.6}).wait(1).to({graphics:mask_graphics_11,x:88.8,y:25.6}).wait(1).to({graphics:mask_graphics_12,x:74.9,y:25.7}).wait(1).to({graphics:mask_graphics_13,x:64.3,y:25.7}).wait(1).to({graphics:mask_graphics_14,x:56.7,y:21.9}).wait(1).to({graphics:mask_graphics_15,x:52.2,y:17.3}).wait(1).to({graphics:mask_graphics_16,x:50.7,y:15.8}).wait(1));

	// Слой 2 - копия
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(96.2,28.6,1,1,0,0,0,96.2,28.6);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:1.04,scaleY:1.04},3,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,x:96.3,y:28.7},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:96.2,y:28.6},4,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ7_1();
	this.instance_2.setTransform(96.2,28.6,1,1,0,0,0,96.2,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.05,scaleY:1.05},4,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,x:96.3,y:28.7},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:96.2,y:28.6},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-2.7,210.5,62.6);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(10).call(this.frame_69).wait(10).call(this.frame_79).wait(1));

	// Слой 3
	this.instance = new lib.Анимация89("synched",0);
	this.instance.setTransform(101.1,-226.3);

	this.instance_1 = new lib.Анимация90("synched",0);
	this.instance_1.setTransform(101.1,-162.3);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация91("synched",0);
	this.instance_2.setTransform(101.1,-97.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация92("synched",0);
	this.instance_3.setTransform(101.1,-33.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация93("synched",0);
	this.instance_4.setTransform(101.1,30.6);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация94("synched",0);
	this.instance_5.setTransform(101.1,95.3);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация95("synched",0);
	this.instance_6.setTransform(101.1,159.7);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация96("synched",0);
	this.instance_7.setTransform(101.1,224.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация97("synched",0);
	this.instance_8.setTransform(101.1,288.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-162.3},9).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,y:-97.5},10).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},10).to({_off:true,y:-33.5},10).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},10).to({_off:true,y:30.6},10).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},10).to({_off:true,y:95.3},10).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},10).to({_off:true,y:159.7},10).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},10).to({_off:true,y:224.1},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(59).to({_off:false},10).to({_off:true,y:288.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(93.3,-568.6,15.8,619.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApqD0QgkAAAAgiIAAmiQAAgkAkAAITWAAQAiAAABAkIAAGiQgBAigiAAg");
	mask.setTransform(65.5,24.5);

	// Слой 5
	this.instance = new lib.Символ5();
	this.instance.setTransform(48.3,26.1,1,1,0,0,0,40.1,33.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2 - копия
	this.second = new lib.Символ4копия();
	this.second.setTransform(55,25.9,1,1,0,0,0,57.1,33.6);

	this.second.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.second).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(65.7,26.2,1,1,0,0,0,57.1,33.6);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Анимация9("synched",0);
	this.instance_2.setTransform(65.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,49);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(60.3,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(79.9,24.5,1,1,0,0,0,65.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-576.5,289.5,628.8);


// stage content:
(lib.stforex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    
			this.blind.gotoAndPlay(1);
		   
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    
			this.blind.gotoAndPlay(10);
		    
		}
		
		stage.enableMouseOver();
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		this.btn.addEventListener("mouseout", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler(){_this.btn.gotoAndPlay(1);}
		function fl_MouseOverHandler_2(){_this.btn.gotoAndPlay(9);}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ATVCVIAHg2IgTAAIgci7IAXAAIAZCmIADAAIAWimIAWAAIgiDxgADzCVIAAjxIASAAIAEAIIAUgIQAGgBAFAAQANAAAKAIQAJAJAAANIAACBQAAANgJAJQgIAIgPAAQgGAAgFgBIgUgIIAAA+gAEJg9IAAB9IAbAKIADABQALgBAAgIIAAiAQAAgJgLgBIgDAAgAicCVIAAjxIASAAIADAIIAVgIQAFgBAHAAQAMAAAJAIQAKAJAAANIAACBQAAANgJAJQgJAIgOAAQgGAAgFgBIgVgIIAAA+gAiHg9IAAB9IAcAKIAEABQAKgBABgIIAAiAQgBgJgKgBIgEAAgAmxCVIAAg2IhcAAIAAA2IgYAAIAAhNIAOAAQAGgKADgOQADgNACgPQADgVABghIAAhyIBXAAIAADcIATAAIAABNgAnvgiQABAfgDAVQgGAlgHARIA5AAIAAjFIgqAAgAvFCVIAAjxIASAAIADAIIAUgIQAGgBAGAAQANAAAJAIQAJAJAAANIAACBQABANgKAJQgIAIgOAAQgGAAgGgBIgUgIIAAA+gAuwg9IAAB9IAbAKIAEABQALgBAAgIIAAiAQAAgJgLgBIgEAAgA1hCVIAAg2IhbAAIAAA2IgYAAIAAhNIAOAAQAFgKAEgOQAEgNABgPQAEgVAAghIAAhyIBXAAIAADcIAUAAIAABNgA2egiQAAAfgCAVQgGAlgHARIA5AAIAAjFIgqAAgASRCDIAAgkIhZAAIAAAkIgWAAIAAg5IAPAAQAHgSAGgjQABgTAAgjIAAg7IBXAAIAACmIARAAIAAA5gARWghQAABHgNAkIA3AAIAAiQIgqAAgAWhBfIAAilIgeAAIAAgWIBRAAIAAAWIgdAAIAAClgAU+BfQgOAAgJgKQgKgKABgNIAAh5QAAgOAJgKQAKgJANAAIAVAAQANAAAKAJQAKALAAANIAABAIhBAAIAAA5QAAAMALAAIAVAAQALAAAAgMIAAgeIAWAAIAAAeQAAANgKALQgKAJgNAAgAUzg7IAAAsIArAAIAAgsQAAgLgLAAIgVAAQgLAAAAALgAP/BfIAAhaIgwAAIAABaIgWAAIAAi7IAWAAIAABNIAwAAIAAhNIAVAAIAAC7gANsBfQgOAAgKgKQgJgKAAgNIAAh5QAAgOAKgKQAJgJAOAAIAVAAQANAAAJAJQALALAAANIAABAIhCAAIAAA5QAAAMAMAAIAVAAQALAAgBgMIAAgeIAXAAIAAAeQAAANgLALQgJAJgNAAgANgg7IAAAsIArAAIAAgsQABgLgLAAIgVAAQgMAAAAALgAMdBfIAAhIIAHhWIgoCeIgbAAIgmieIAHBXIAABHIgWAAIAAi7IAdAAIAmCaIAmiaIAdAAIAAC7gAJaBfQgOAAgJgJQgJgKAAgOIAAh5QAAgNAJgLQAJgJAOAAIAZAAQANAAAKAJQAKALAAANIAAB5QAAAOgKAKQgKAJgNAAgAJPg7IAAB5QAAAMALAAIAZAAQALAAAAgMIAAh5QAAgLgLAAIgZAAQgLAAAAALgAIRBfIgihaIgLAAIAABaIgVAAIAAi7IAVAAIAABNIASAAQAHAAADgFQAFgEAAgGIAAgbQAAgPAKgKQAEgFAHgDQAFgCAHAAIACAAIAAAWIgCAAQgLAAgBANIAAAcQAAAKgFAJQgGAIgJADIAiBegAGBBfQgNAAgLgKQgIgKgBgNIAAh5QAAgOAKgKQAKgJANAAIAVAAQAOAAAJAJQAKALAAANIAABAIhBAAIAAA5QAAAMALAAIAVAAQALAAAAgMIAAgeIAWAAIAAAeQAAANgKALQgJAJgOAAgAF2g7IAAAsIArAAIAAgsQAAgLgLAAIgVAAQgLAAAAALgABCBfIAAi7IA5AAQANAAAKAJQAKALAAANIAAAeQgBAIgFAHQgEAHgJADQAJACAFAGQAFAHAAAJIAAAqQgBAOgIAKQgLAJgNAAgABYBKIAjAAQALAAAAgMIAAgpQAAgGgFgGQgEgEgIAAIgdAAgABYgPIAdAAQAIAAAEgFQAFgFAAgGIAAgcQAAgLgLAAIgjAAgAgOBfQgNAAgKgJQgKgKABgOIAAh5QgBgNAKgLQAKgJANAAIAXAAQAOAAAJAJQAKALAAANIAAB5QAAAOgKAKQgJAJgOAAgAgZg7IAAB5QAAAMALAAIAXAAQALAAAAgMIAAh5QAAgLgLAAIgXAAQgLAAAAALgAjtBfQgOAAgKgKQgJgJAAgOIAAiQQAAgMADgIQAEgIAHgGQAIgHAWgGQAMgEAFgDQAGgFABgHIAWAAQgBAJgCAHQgDAGgGAFQgHAFgTAHQgfAHAAATIAAAFIAZgIIAKgDQAOAAAKAKQAKAKAAANIAAB2QAAANgKALQgLAJgNAAgAjZhCIggAKIAAB2QABAEADAEQACAEAFAAIAZAAQALAAAAgMIAAh2QAAgLgLAAgAk8BfIAAhOIAGhXIg3ClIgeAAIAAi7IAWAAIAABYIgGBOIA3imIAdAAIAAC7gAqMBfIAAhOIAFhXIg2ClIgeAAIAAi7IAVAAIAABYIgFBOIA3imIAeAAIAAC7gAsJBfIAAhOIAFhXIg2ClIgeAAIAAi7IAVAAIAABYIgFBOIA3imIAdAAIAAC7gAwJBfIAAilIgeAAIAAgWIBRAAIAAAWIgdAAIAAClgAxMBfIAAhOIAFhXIg2ClIgeAAIAAi7IAVAAIAABYIgFBOIA3imIAdAAIAAC7gAzJBfIAAhIIAHhWIgoCeIgbAAIgnieIAIBXIAABHIgWAAIAAi7IAdAAIAmCaIAmiaIAdAAIAAC7gAq1h4QgLAAgGgIQgHgHAAgKIAAgDIARAAIAAAEQABAHAGAAIAWAAQAHAAAAgHIAAgEIARAAIAAADQAAAKgHAHQgHAIgJAAg");
	this.shape.setTransform(430,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.instance = new lib.Символ12();
	this.instance.setTransform(434.5,96.7,1,1,0,0,0,144.3,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// schet
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(440.1,174,1,1,0,0,0,65.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn
	this.btn = new lib.Символ43();
	this.btn.setTransform(436.7,255.7,1,1,0,0,0,96.2,28);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// logo
	this.instance_2 = new lib.logostforexcom2();
	this.instance_2.setTransform(326.8,5.5,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dibro
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(147.5,175.5,1,1,0,0,0,142,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// blind
	this.blind = new lib.Символ14();
	this.blind.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.blind).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(524.4,150,1,1,180,0,0,75,182);

	this.instance_5 = new lib.Символ25();
	this.instance_5.setTransform(74.8,150,1,1,0,0,0,75,182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 6
	this.instance_6 = new lib.Символ2копия();
	this.instance_6.setTransform(313,149.5,1,1,0,0,0,312,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// fon
	this.instance_7 = new lib.Символ19();
	this.instance_7.setTransform(322.4,169.5,1,1,0,0,0,328.4,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,-277,2525,759.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/btn1.png?1471851565706", id:"btn1"},
		{src:"images/btn2.png?1471851565706", id:"btn2"},
		{src:"images/dib.png?1471851565706", id:"dib"},
		{src:"images/LightGreyBackgroundHd51.jpg?1471851565706", id:"LightGreyBackgroundHd51"},
		{src:"images/logostforexcom2.png?1471851565706", id:"logostforexcom2"}
	]
};



// symbols:



(lib.btn1 = function() {
	this.initialize(img.btn1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,127);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,127);


(lib.dib = function() {
	this.initialize(img.dib);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,250);


(lib.LightGreyBackgroundHd51 = function() {
	this.initialize(img.LightGreyBackgroundHd51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,438);


(lib.logostforexcom2 = function() {
	this.initialize(img.logostforexcom2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,81);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(69.3,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.6,66.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIEFoQgLgdgTgPQgSgOgcgEQgSgDggAAImAABIg6gBQghgBgagEQg0gIhNgfQhkgnhbgxIgTgZIhGhXQgXgcgJgTQgGgJgIgZIgCgIQgCgbABgvQABgoACgVQAEghALgZQALgXAVgYQAKgMAQgQIALgIIAegWIAIgGIA5gZIAXgGQAzgOAygTQAPAOABAUQABAhgrAjQggAbgkAYQgiAXgMAMQgpApgGBIQgEBKAjAwQAcAoBDAlQCUBSCUAPQAqAFBaAAIDFAAIAzgBQAcgBAXgEIA1gJQAegCASAOQAOAKAJAWIAOAmIANAeQAIATAEALQALAmgQAYQgKAPgTAGIgDABQgGgegHgRg");
	this.shape.setTransform(57.1,43.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.6,114.2,81.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AJ7B6IAIhGIgWAAIgcitIAXAAIAYCVIAFAAIASiVIAYAAIgdDzgAICB6IAAjzIBGAAIAAAXIgvAAIAADcgAHPB6IAAhwIAGhUIgCgBIgwDFIggAAIAAjzIAYAAIAABvIgHBZIACAAIAxjIIAfAAIAADzgAFRB6IAAh6IgrAAIAAB6IgYAAIAAjzIAYAAIAABmIArAAIAAhmIAWAAIAADzgADkB6Iggh6IgJAAIAAB6IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgwQAAgHADgIQACgFAFgFQAFgFAGgDQAGgDAIAAIABAAIAAAXIgBAAQgMABAAAMIAAAyQAAAKgFAIQgFAKgJADIAgB+gAgNB6IAAjzIAVAAIAABRIAgAAQAOAAAJAKQAKAJAAAOIAABgQAAAOgKAKQgJAJgOAAgAAIBjIAgAAQAKAAAAgKIAAhiQAAgKgKAAIggAAgAhXB6IAAjcIgdAAIAAgXIBQAAIAAAXIgcAAIAADcgAiaB6IgKhIIgqAAIgKBIIgXAAIAhjzIAqAAIAhDzgAinAcIgRh+IgCAAIgRB+IAkAAgAkbB6IAAhkIggAAQgOAAgKgJQgKgKAAgMIAAhwIAYAAIAAByQgBAHALAAIAgAAIAAh5IAXAAIAADzgAmJB6IgKhIIgpAAIgKBIIgXAAIAhjzIApAAIAhDzgAmVAcIgSh+IgBAAIgSB+IAlAAgAoBB6Iggh6IgJAAIAAB6IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgwQAAgHADgIQADgFAEgFQAFgFAGgDQAGgDAIAAIACAAIAAAXIgCAAQgMABAAAMIAAAyQAAAKgFAIQgFAKgJADIAhB+gAqMB6QgOAAgKgJQgKgKABgOIAAixQgBgOAKgJQAKgKAOAAIAOAAQAOAAAKAKQAKAJAAAOIAAAbIgYAAIAAgbQAAgKgKAAIgOAAQgLAAAAAKIAACxQAAAKALAAIAOAAQAKAAAAgKIAAglIAYAAIAAAlQAAAOgKAKQgKAJgOAAg");
	this.shape.setTransform(109.1,40.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#212B37").s().p("AJ7B6IAIhHIgWAAIgcisIAXAAIAYCWIAFAAIASiWIAYAAIgdDzgAICB6IAAjzIBGAAIAAAXIgvAAIAADcgAHPB6IAAhvIAGhWIgCAAIgwDFIggAAIAAjzIAYAAIAABvIgHBZIACAAIAxjIIAfAAIAADzgAFRB6IAAh5IgrAAIAAB5IgYAAIAAjzIAYAAIAABmIArAAIAAhmIAWAAIAADzgADkB6Iggh5IgJAAIAAB5IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgwQAAgIADgHQACgGAFgFQAFgEAGgDQAGgDAIAAIABAAIAAAXIgBAAQgMABAAAMIAAAyQAAAKgFAJQgFAIgJAEIAgB+gAgNB6IAAjzIAVAAIAABRIAgAAQAOAAAJAJQAKAKAAAOIAABgQAAANgKAKQgJAKgOAAgAAIBjIAgAAQAKAAAAgKIAAhiQAAgKgKAAIggAAgAhXB6IAAjcIgdAAIAAgXIBQAAIAAAXIgcAAIAADcgAiaB6IgKhIIgqAAIgKBIIgXAAIAhjzIAqAAIAhDzgAinAdIgRh/IgCAAIgRB/IAkAAgAkbB6IAAhkIggAAQgOAAgKgKQgKgJAAgMIAAhwIAYAAIAAByQgBAIALAAIAgAAIAAh6IAXAAIAADzgAmJB6IgKhIIgpAAIgKBIIgXAAIAhjzIApAAIAhDzgAmVAdIgSh/IgBAAIgSB/IAlAAgAoBB6Iggh5IgJAAIAAB5IgXAAIAAjzIAXAAIAABmIAKAAQAIAAAFgFQAFgFAAgIIAAgwQAAgIADgHQADgGAEgFQAFgEAGgDQAGgDAIAAIACAAIAAAXIgCAAQgMABAAAMIAAAyQAAAKgFAJQgFAIgJAEIAhB+gAqMB6QgOAAgKgKQgKgKABgNIAAixQgBgOAKgJQAKgKAOAAIAOAAQAOAAAKAKQAKAJAAAOIAAAcIgYAAIAAgcQAAgKgKAAIgOAAQgLAAAAAKIAACxQAAAKALAAIAOAAQAKAAAAgKIAAgmIAYAAIAAAmQAAANgKAKQgKAKgOAAg");
	this.shape_1.setTransform(109.1,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Слой 1
	this.instance = new lib.btn1();
	this.instance.setTransform(0,0,0.63,0.63);

	this.instance_1 = new lib.btn2();
	this.instance_1.setTransform(0.6,3,0.634,0.634);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.5,80);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvFT1QgfgQgPgqQgLgdgEgyQgKiNAHhVQAKh8AuhZQAkhHBChCIAYgXIABgBQApg2BJg2ICChcIBCgtQAngZAggOQAhgOAtgIQAYgFA5gHQBjgMA1gOQChgoB7hyIAagYQAYgtgGgrQgEgZgSgeQgFgJgdgpQhVh4ghiSQgiiRAWiRQAIg8Adh0QANgvAIgWQANglARgbQAmg8BYg1QBgg5BugcQBtgcBwAEIAAgGIADAAQAvAHBJAVQBuAgBDArQAvAfA2A3IADADIgJAJQgZAZgvgFQgbgDg4gTQiTgzifAkQigAkhuBuQguAtgWArQgzBfAWCAQAPBWA6BzQAhBABECAQA0BtAIBkQAKB1g4BTQghAwg6AmQgqAchHAhQkKB7j9AxQiTAdgfAJQhiAdg5A2QhVBQgZCcQgHAvgFBVQgGBegEAmQgLBUgfApQgWAcghAMQgPAFgOAAQgSAAgRgIg");
	this.shape.setTransform(103.3,127.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.7,255.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EgBEAvmIAAglIAlAAIAAk+IgnAAIAAglIBKAAIAAFjIAmAAIAAAlgEgAUAlpQgVAAgPgPQgOgPAAgVIAAg+IAkAAIAAA7QAAAHAFAFQAFAFAIAAIAQAAQAIAAAEgFQAFgFABgHIAAh7QgRAPgRAAQgWAAgQgPQgQgQAAgUIAAiAQAAgVAOgPQAPgPAVAAIAXAAQAVAAAPAPQAPAPABAVIAAEiQgBAVgPAPQgPAPgVAAgEgAdAgLQgFAFAAAHIAAB6QAAAHAFAFQAFAFAIAAQARAAAJgPQAIgMAAgVIAAhbQgBgHgFgFQgEgFgIAAIgQAAQgIAAgFAFgAgTbwQgWAAgPgPQgOgPAAgVIAAiMQAAgQAJgLQAHgKANgFQgLgDgHgJQgJgKAAgNIAAhJQAAgVAPgPQAPgPAWAAIAPAAQATAAAOAPQAPAPAAAVIAABJQAAAOgIAKQgIAIgJADQAcAQAAAaIAACMQAAAVgOAPQgQAPgUAAgAghYsIAACOQAAARARAAIAPAAQAOAAAAgRIAAiOQAAgRgOAAIgPAAQgRAAAAARgAgZWSQgGAFAAAHIAABIQAAARARAAIAKAAQAPAAAAgRIAAhIQAAgRgPAAIgKAAQgHAAgEAFgAgkR3IADhlQABgxAGgmQAFgrALgnQAKgpAUgqIAAgCIhhAAIAAglICFAAIAAArQgTAqgMApQgLAmgGAqQgFAlgBAxIgCBkgAgUH+QgVAAgPgPQgOgPAAgVIAAkiQAAgVAOgPQAPgPAVAAIAXAAQAWAAAOAPQAPAPABAVIAAAtIglAAIAAgqQAAgHgFgFQgFgFgHAAIgRAAQgHAAgGAFQgEAFAAAHIAABmQAPgOATAAQAWAAAQAPQAPAPABAVIAACUQgBAVgPAPQgOAPgWAAgAgaE4QgIAMABAVIAABvQAAAHAEAFQAGAFAHAAIARAAQARAAAAgRIAAiOQAAgHgGgFQgFgFgGAAQgSAAgJAPgAgTh5QgWAAgPgPQgOgPAAgVIAAg+IAlAAIAAA7QAAAHAEAFQAGAFAHAAIASAAQAQAAAAgRIAAiOQAAgJgGgFQgHgGgGAAQgRAAgIANQgHAMAAAXIglAAIAAjgIB1AAIAAAlIhQAAIAAByQANgMAWAAQAUAAAQAPQARAPAAAVIAACXQAAAVgPAPQgPAPgVAAgAAIryIAAhPIhSAAIAAgiIBEkXIAzAAIAAEXIAgAAIAAAiIggAAIAABPgAgktjIAsAAIAAhoIAHiBgAgU1rQgVAAgPgPQgOgPAAgVIAAg+IAlAAIAAA7QgBARASAAIAQAAQARAAAAgRIAAiQQAAgHgGgGQgGgFgFAAQgLAAgHAFQgGAFgHAKIgegNIBJiSIhSAAIAAglIB1AAIAAAwIgzBjQAFgFAIAAQAUAAAMANQANANAAAWIAACXQAAAVgQAPQgOAPgWAAgAhE/kIAAg3QAAgTAEgSQAFgSAJgSIA7iBQAGgOAAgZIAAgqQAAgHgFgGQgGgEgEAAIgQAAQgIAAgFAFQgEAFAAAHIAAAqIglAAIAAgtQAAgVAOgPQAQgPAUAAIAVAAQAVAAAPAPQAPAPAAAVIAAAtQAAAigJATIg7CCQgPAkAAAWIAAASIBQAAIAAAlgEgBEgpdIAAglIAlAAIAAk+IgnAAIAAglIBKAAIAAFjIAmAAIAAAlg");
	this.shape.setTransform(7.8,304.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.6,609.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgZDDIAChkQACgxAFgnQAGgpAKgmQALgqATgpIAAgCIhgAAIAAgmICFAAIAAArQgUAqgLApQgLAngGAoQgFAlgCAxIgCBjg");
	this.shape.setTransform(69.6,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgIDDQgWAAgPgPQgOgOAAgWIAAkgQAAgUAPgQQAPgPAVAAIARAAQAVABAPAPQAPAPAAAUIAAEgQAAAWgPAPQgPAOgVAAgAgWA8IAABRQAAAIAFAEQAFAGAHAAIALAAQAHAAAFgGQAFgFAAgHIAAingAgRiYQgFAFAAAGIAACNIAthXIAAg2QAAgGgFgGQgFgFgHABIgLAAQgIgBgEAGg");
	this.shape_1.setTransform(42.9,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgIDDQgWAAgPgPQgOgOAAgWIAAkgQAAgUAPgQQAPgPAVAAIARAAQAVABAPAPQAPAPAAAUIAAEgQAAAWgPAPQgPAOgVAAgAgWA8IAABRQAAAIAFAEQAFAGAHAAIALAAQAHAAAFgGQAFgFAAgHIAAingAgRiYQgFAFAAAGIAACNIAthXIAAg2QAAgGgFgGQgFgFgHABIgLAAQgIgBgEAGg");
	this.shape_2.setTransform(26.3,31.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ag2DDIAAgkIAmAAIAAk8IgoAAIAAgmIBKAAIAAFiIAnAAIAAAkg");
	this.shape_3.setTransform(10,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.2,67.3);


(lib.Анимация68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ABBCHIAAhoIAKh7Ig4DjIglAAIg4jjIAKB9IAABmIgfAAIAAkNIAqAAIA1DeIA2jeIAqAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.3,27.2);


(lib.Анимация67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ABBCHIAAhoIAKh7Ig4DjIglAAIg4jjIAKB9IAABmIgfAAIAAkNIAqAAIA1DeIA2jeIAqAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.3,27.2);


(lib.Анимация66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAiAAQAUAAAOAOQANAOAAATIAACvQAAAUgNANQgOAOgUAAgAgghXIAACvQAAAQAPAAIAiAAQAQAAAAgQIAAivQAAgPgQAAIgiAAQgPAAAAAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,13,27.2);


(lib.Анимация65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAiAAQAUAAAOAOQANAOAAATIAACvQAAAUgNANQgOAOgUAAgAgghXIAACvQAAAQAPAAIAiAAQAQAAAAgQIAAivQAAgPgQAAIgiAAQgPAAAAAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,13,27.2);


(lib.Анимация64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAiAAQAUAAAOAOQANAOAAATIAACvQAAAUgNANQgOAOgUAAgAgghXIAACvQAAAQAPAAIAiAAQAQAAAAgQIAAivQAAgPgQAAIgiAAQgPAAAAAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,13,27.2);


(lib.Анимация63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ABBCHIAAhoIAKh7Ig4DjIglAAIg4jjIAKB9IAABmIgfAAIAAkNIAqAAIA1DeIA2jeIAqAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.3,27.2);


(lib.Анимация62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ABBCHIAAhoIAKh7Ig4DjIglAAIg4jjIAKB9IAABmIgfAAIAAkNIAqAAIA1DeIA2jeIAqAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.3,27.2);


(lib.Анимация61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("ABBCHIAAhoIAKh7Ig4DjIglAAIg4jjIAKB9IAABmIgfAAIAAkNIAqAAIA1DeIA2jeIAqAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-13.5,19.3,27.2);


(lib.Анимация60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgKCuIAKhNIgaAAIgokOIAgAAIAiDuIADAAIAhjuIAfAAIgvFbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-17.4,13.5,34.9);


(lib.Анимация59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgKCuIAKhNIgaAAIgokOIAgAAIAiDuIADAAIAhjuIAfAAIgvFbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-17.4,13.5,34.9);


(lib.Анимация58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgKCuIAKhNIgaAAIgokOIAgAAIAiDuIADAAIAhjuIAfAAIgvFbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-17.4,13.5,34.9);


(lib.Анимация57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgLCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAXAAQAUAAANAOQAOAOAAATIAAAaIggAAIAAgaQAAgPgPAAIgXAAQgPAAAAAPIAACvQAAAQAPAAIAXAAQAPAAAAgQIAAgrIAgAAIAAArQAAAUgOANQgNAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-13.5,11.8,27.2);


(lib.Анимация56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgLCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAXAAQAUAAANAOQAOAOAAATIAAAaIggAAIAAgaQAAgPgPAAIgXAAQgPAAAAAPIAACvQAAAQAPAAIAXAAQAPAAAAgQIAAgrIAgAAIAAArQAAAUgOANQgNAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-13.5,11.8,27.2);


(lib.Анимация55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgLCHQgTAAgOgOQgNgNAAgUIAAivQAAgTANgOQAOgOATAAIAXAAQAUAAANAOQAOAOAAATIAAAaIggAAIAAgaQAAgPgPAAIgXAAQgPAAAAAPIAACvQAAAQAPAAIAXAAQAPAAAAgQIAAgrIAgAAIAAArQAAAUgOANQgNAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-13.5,11.8,27.2);


(lib.Анимация54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgPATQgPAAgJgKQgKgJAAgOIAAgEIAZAAIAAAFQAAALAKAAIAdAAQAKAAAAgLIAAgFIAZAAIAAAEQAAAOgKAJQgKAKgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1.9,10.1,3.9);


(lib.Анимация53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgPATQgPAAgJgKQgKgJAAgOIAAgEIAZAAIAAAFQAAALAKAAIAdAAQAKAAAAgLIAAgFIAZAAIAAAEQAAAOgKAJQgKAKgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1.9,10.1,3.9);


(lib.Анимация52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgPATQgPAAgJgKQgKgJAAgOIAAgEIAZAAIAAAFQAAALAKAAIAdAAQAKAAAAgLIAAgFIAZAAIAAAEQAAAOgKAJQgKAKgPAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-1.9,10.1,3.9);


(lib.Анимация51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AApCHIAAhwIAHh9IhLDtIgrAAIAAkNIAeAAIAAB+IgIBwIBMjuIAsAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-13.5,14.4,27.2);


(lib.Анимация50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AApCHIAAhwIAHh9IhLDtIgrAAIAAkNIAeAAIAAB+IgIBwIBMjuIAsAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-13.5,14.4,27.2);


(lib.Анимация49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AApCHIAAhwIAHh9IhLDtIgrAAIAAkNIAeAAIAAB+IgIBwIBMjuIAsAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-13.5,14.4,27.2);


(lib.Анимация48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQAAgUANgOQAPgNAUAAIAbAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgcAJQgEAFAAAGIAABHQAAAOAPAAIAHAAIAqgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQAAgUANgOQAPgNAUAAIAbAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgcAJQgEAFAAAGIAABHQAAAOAPAAIAHAAIAqgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQAAgUANgOQAPgNAUAAIAbAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgcAJQgEAFAAAGIAABHQAAAOAPAAIAHAAIAqgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag/CHIAAkNIBRAAQASAAAOAOQAOAOAAATIAAArQAAAMgIAKQgHAKgMAEQAMADAIAKQAHAJAAANIAAA9QAAAUgNANQgPAOgSAAgAggBoIAyAAQAPAAAAgQIAAg7QAAgKgHgGQgHgHgKAAIgpAAgAgggXIApAAQAKAAAHgIQAHgGAAgKIAAgoQAAgPgPAAIgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,12.9,27.2);


(lib.Анимация44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag/CHIAAkNIBRAAQASAAAOAOQAOAOAAATIAAArQAAAMgIAKQgHAKgMAEQAMADAIAKQAHAJAAANIAAA9QAAAUgNANQgPAOgSAAgAggBoIAyAAQAPAAAAgQIAAg7QAAgKgHgGQgHgHgKAAIgpAAgAgggXIApAAQAKAAAHgIQAHgGAAgKIAAgoQAAgPgPAAIgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,12.9,27.2);


(lib.Анимация43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag/CHIAAkNIBRAAQASAAAOAOQAOAOAAATIAAArQAAAMgIAKQgHAKgMAEQAMADAIAKQAHAJAAANIAAA9QAAAUgNANQgPAOgSAAgAggBoIAyAAQAPAAAAgQIAAg7QAAgKgHgGQgHgHgKAAIgpAAgAgggXIApAAQAKAAAHgIQAHgGAAgKIAAgoQAAgPgPAAIgyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.5,12.9,27.2);


(lib.Анимация42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAkNIAdAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-13.5,3.2,27.2);


(lib.Анимация41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAkNIAdAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-13.5,3.2,27.2);


(lib.Анимация40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAkNIAdAAIAAENg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-13.5,3.2,27.2);


(lib.Анимация39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAjtIgrAAIAAggIBzAAIAAAgIgrAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-13.5,11.7,27.2);


(lib.Анимация38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAjtIgrAAIAAggIBzAAIAAAgIgrAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-13.5,11.7,27.2);


(lib.Анимация37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgOCHIAAjtIgrAAIAAggIBzAAIAAAgIgrAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-13.5,11.7,27.2);


(lib.Анимация36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CHIAAkNIAgAAIAABPIAoAAQAUAAAPAPQAHAHADAJQAEAJAAAKIAABaQAAAKgEAKQgDAJgHAGQgHAHgJAEQgJAEgKAAgAgcBoIAtAAQANAAAAgNIAAhlQAAgNgNAAIgtAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-13.5,12.4,27.2);


(lib.Анимация35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CHIAAkNIAgAAIAABPIAoAAQAUAAAPAPQAHAHADAJQAEAJAAAKIAABaQAAAKgEAKQgDAJgHAGQgHAHgJAEQgJAEgKAAgAgcBoIAtAAQANAAAAgNIAAhlQAAgNgNAAIgtAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-13.5,12.4,27.2);


(lib.Анимация34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CHIAAkNIAgAAIAABPIAoAAQAUAAAPAPQAHAHADAJQAEAJAAAKIAABaQAAAKgEAKQgDAJgHAGQgHAHgJAEQgJAEgKAAgAgcBoIAtAAQANAAAAgNIAAhlQAAgNgNAAIgtAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-13.5,12.4,27.2);


(lib.Анимация33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNATAAIAwAAIAAhAQAAgPgQAAIgcAAQgGAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQgBgUAOgOQAPgNATAAIAcAAQATAAAOAOQAOAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgUAAgMgLgAgcAJQgEAFAAAGIAABHQAAAOAQAAIAFAAIArgQIAAhUIgwAAQgGAAgGAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNATAAIAwAAIAAhAQAAgPgQAAIgcAAQgGAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQgBgUAOgOQAPgNATAAIAcAAQATAAAOAOQAOAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgUAAgMgLgAgcAJQgEAFAAAGIAABHQAAAOAQAAIAFAAIArgQIAAhUIgwAAQgGAAgGAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNATAAIAwAAIAAhAQAAgPgQAAIgcAAQgGAAgEAEQgFAEAAAHIAAAaIgfAAIAAgaQgBgUAOgOQAPgNATAAIAcAAQATAAAOAOQAOAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgUAAgMgLgAgcAJQgEAFAAAGIAABHQAAAOAQAAIAFAAIArgQIAAhUIgwAAQgGAAgGAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCvQgSAAgOgOQgOgOAAgTIAAjPQAAgRAFgMQAFgMAKgHQAMgLAfgKQAQgFAGgEQAKgHAAgKIAgAAQAAANgFAKQgDAIgJAHQgJAIgdAJQgpALAAAcIAAAGIAigMIAOgDQAUAAAOANQAOAOAAAUIAACqQAAATgOAOQgPAOgTAAgAANg5IgtAQIAACpQAAAGAEAFQAFAFAFAAIAjAAQAQAAAAgQIAAiqQAAgQgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-17.5,12.9,35.2);


(lib.Анимация29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCvQgSAAgOgOQgOgOAAgTIAAjPQAAgRAFgMQAFgMAKgHQAMgLAfgKQAQgFAGgEQAKgHAAgKIAgAAQAAANgFAKQgDAIgJAHQgJAIgdAJQgpALAAAcIAAAGIAigMIAOgDQAUAAAOANQAOAOAAAUIAACqQAAATgOAOQgPAOgTAAgAANg5IgtAQIAACpQAAAGAEAFQAFAFAFAAIAjAAQAQAAAAgQIAAiqQAAgQgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-17.5,12.9,35.2);


(lib.Анимация28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgRCvQgSAAgOgOQgOgOAAgTIAAjPQAAgRAFgMQAFgMAKgHQAMgLAfgKQAQgFAGgEQAKgHAAgKIAgAAQAAANgFAKQgDAIgJAHQgJAIgdAJQgpALAAAcIAAAGIAigMIAOgDQAUAAAOANQAOAOAAAUIAACqQAAATgOAOQgPAOgTAAgAANg5IgtAQIAACpQAAAGAEAFQAFAFAFAAIAjAAQAQAAAAgQIAAiqQAAgQgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-17.5,12.9,35.2);


(lib.Анимация27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgFAEQgEAEAAAHIAAAaIggAAIAAgaQAAgUAOgOQAPgNATAAIAcAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgbAJQgFAFAAAGIAABHQAAAOAPAAIAGAAIArgQIAAhUIgxAAQgFAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgFAEQgEAEAAAHIAAAaIggAAIAAgaQAAgUAOgOQAPgNATAAIAcAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgbAJQgFAFAAAGIAABHQAAAOAPAAIAGAAIArgQIAAhUIgxAAQgFAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAOgNASAAIAxAAIAAhAQAAgPgQAAIgbAAQgHAAgFAEQgEAEAAAHIAAAaIggAAIAAgaQAAgUAOgOQAPgNATAAIAcAAQAUAAAOAOQANAOAAATIAADeIgaAAIgFgMIgiAMIgSACQgTAAgNgLgAgbAJQgFAFAAAGIAABHQAAAOAPAAIAGAAIArgQIAAhUIgxAAQgFAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CvIAAlbIAaAAIAGAMIAcgMQAGgCAJAAQATAAANANQAOAMAAATIAAC6QAAATgNAMQgNAMgVABQgIgBgGgCIgcgMIAABagAAJiOIglAPIAAC0IAlAOIAFABQAQAAAAgNIAAi3QAAgOgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-17.5,12.3,35.1);


(lib.Анимация23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CvIAAlbIAaAAIAGAMIAcgMQAGgCAJAAQATAAANANQAOAMAAATIAAC6QAAATgNAMQgNAMgVABQgIgBgGgCIgcgMIAABagAAJiOIglAPIAAC0IAlAOIAFABQAQAAAAgNIAAi3QAAgOgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-17.5,12.3,35.1);


(lib.Анимация22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("Ag8CvIAAlbIAaAAIAGAMIAcgMQAGgCAJAAQATAAANANQAOAMAAATIAAC6QAAATgNAMQgNAMgVABQgIgBgGgCIgcgMIAABagAAJiOIglAPIAAC0IAlAOIAFABQAQAAAAgNIAAi3QAAgOgQAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-17.5,12.3,35.1);


(lib.Анимация21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAPgNASAAIAxAAIAAhAQAAgPgQAAIgcAAQgGAAgFAEQgFAEABAHIAAAaIggAAIAAgaQAAgUAOgOQAOgNAUAAIAcAAQATAAAOAOQANAOAAATIAADeIgaAAIgFgMIghAMIgSACQgVAAgMgLgAgbAJQgEAFgBAGIAABHQABAOAPAAIAGAAIArgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAPgNASAAIAxAAIAAhAQAAgPgQAAIgcAAQgGAAgFAEQgFAEABAHIAAAaIggAAIAAgaQAAgUAOgOQAOgNAUAAIAcAAQATAAAOAOQANAOAAATIAADeIgaAAIgFgMIghAMIgSACQgVAAgMgLgAgbAJQgEAFgBAGIAABHQABAOAPAAIAGAAIArgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgzB9QgMgMAAgTIAAhKQAAgTAOgMQAPgNASAAIAxAAIAAhAQAAgPgQAAIgcAAQgGAAgFAEQgFAEABAHIAAAaIggAAIAAgaQAAgUAOgOQAOgNAUAAIAcAAQATAAAOAOQANAOAAATIAADeIgaAAIgFgMIghAMIgSACQgVAAgMgLgAgbAJQgEAFgBAGIAABHQABAOAPAAIAGAAIArgQIAAhUIgxAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-13.6,12.9,27.4);


(lib.Анимация18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("AgICvQgTAAgOgOQgOgOAAgTIAAg2IAhAAIAAA2QAAAOAOAAIARAAQAOAAAAgOIAAhlQAAgPgHgFQgGgGgNAAIgQAAIAAgdIAQAAQAMAAAHgKQAHgJAAgOIAAhCQAAgOgOAAIgRAAQgOAAAAAOIAAAnIghAAIAAgnQAAgTAOgOQAOgOATAAIARAAQATAAAOAOQAOAOAAATIAABDQAAAPgHALQgGANgOAFQANAFAHAKQAHAIAAAOIAABrQAAATgOAOQgOAOgTAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-17.5,11.4,35.2);


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


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFJDfQiRA1i4AAQkAAAi1hmQi2hnAAiPQAAiRC2hmQC1hnEAAAQEAAAC2BnQC2BmAACRQAACPi2BnIgJAEIAAD1g");
	this.shape.setTransform(62.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.setTransform(51.9,44.7,1,1,0,0,0,57.1,42.1);
	this.instance.alpha = 0.398;
	this.instance.filters = [new cjs.BlurFilter(13, 13, 3)];
	this.instance.cache(-2,1,118,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-12.8,153,121);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(60.6,35.5,0.576,0.576,0,0,0,69.2,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(62.1,42.4,1,1,0,0,0,62.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-12.8,153,121);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация17("synched",0);
	this.instance.setTransform(5.7,17.6);

	this.instance_1 = new lib.Анимация18("synched",0);
	this.instance_1.setTransform(5.7,16.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:16.7},9).to({_off:false,y:17.6},34).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,y:17.6},34).wait(1));

	// Слой 4
	this.instance_2 = new lib.Анимация19("synched",0);
	this.instance_2.setTransform(21.5,21.7);

	this.instance_3 = new lib.Анимация20("synched",0);
	this.instance_3.setTransform(21.5,21.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация21("synched",0);
	this.instance_4.setTransform(21.5,20.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(9).to({_off:false},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},2).to({_off:true,y:20.8},9).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},9).to({_off:true,y:21.7},32).wait(1));

	// Слой 5
	this.instance_5 = new lib.Анимация22("synched",0);
	this.instance_5.setTransform(37.6,25.4);

	this.instance_6 = new lib.Анимация23("synched",0);
	this.instance_6.setTransform(37.6,25.4);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация24("synched",0);
	this.instance_7.setTransform(37.6,24.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},4).wait(9).to({_off:false},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},4).to({_off:true,y:24.5},9).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},9).to({_off:true,y:25.4},30).wait(1));

	// Слой 6
	this.instance_8 = new lib.Анимация25("synched",0);
	this.instance_8.setTransform(53.7,21.7);

	this.instance_9 = new lib.Анимация26("synched",0);
	this.instance_9.setTransform(53.7,21.7);
	this.instance_9._off = true;

	this.instance_10 = new lib.Анимация27("synched",0);
	this.instance_10.setTransform(53.7,20.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},6).wait(9).to({_off:false},28).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},6).to({_off:true,y:20.8},9).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},9).to({_off:true,y:21.7},28).wait(1));

	// Слой 7
	this.instance_11 = new lib.Анимация28("synched",0);
	this.instance_11.setTransform(70.1,17.6);

	this.instance_12 = new lib.Анимация29("synched",0);
	this.instance_12.setTransform(70.1,17.6);
	this.instance_12._off = true;

	this.instance_13 = new lib.Анимация30("synched",0);
	this.instance_13.setTransform(70.1,16.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},8).wait(9).to({_off:false},26).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:false},8).to({_off:true,y:16.7},9).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},9).to({_off:true,y:17.6},26).wait(1));

	// Слой 8
	this.instance_14 = new lib.Анимация31("synched",0);
	this.instance_14.setTransform(86.5,21.7);

	this.instance_15 = new lib.Анимация32("synched",0);
	this.instance_15.setTransform(86.5,21.7);
	this.instance_15._off = true;

	this.instance_16 = new lib.Анимация33("synched",0);
	this.instance_16.setTransform(86.5,20.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},10).wait(9).to({_off:false},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:false},10).to({_off:true,y:20.8},9).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},9).to({_off:true,y:21.7},24).wait(1));

	// Слой 9
	this.instance_17 = new lib.Анимация34("synched",0);
	this.instance_17.setTransform(115.2,21.6);

	this.instance_18 = new lib.Анимация35("synched",0);
	this.instance_18.setTransform(115.2,21.6);
	this.instance_18._off = true;

	this.instance_19 = new lib.Анимация36("synched",0);
	this.instance_19.setTransform(115.2,20.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},12).wait(9).to({_off:false},22).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:false},12).to({_off:true,y:20.7},9).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(12).to({_off:false},9).to({_off:true,y:21.6},22).wait(1));

	// Слой 10
	this.instance_20 = new lib.Анимация37("synched",0);
	this.instance_20.setTransform(101,21.6);

	this.instance_21 = new lib.Анимация38("synched",0);
	this.instance_21.setTransform(101,21.6);
	this.instance_21._off = true;

	this.instance_22 = new lib.Анимация39("synched",0);
	this.instance_22.setTransform(101,20.7);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},14).wait(9).to({_off:false},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:false},14).to({_off:true,y:20.7},9).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(14).to({_off:false},9).to({_off:true,y:21.6},20).wait(1));

	// Слой 11
	this.instance_23 = new lib.Анимация40("synched",0);
	this.instance_23.setTransform(126.2,21.6);

	this.instance_24 = new lib.Анимация41("synched",0);
	this.instance_24.setTransform(126.2,21.6);
	this.instance_24._off = true;

	this.instance_25 = new lib.Анимация42("synched",0);
	this.instance_25.setTransform(126.2,20.7);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},16).wait(9).to({_off:false},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:false},16).to({_off:true,y:20.7},9).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(16).to({_off:false},9).to({_off:true,y:21.6},18).wait(1));

	// Слой 12
	this.instance_26 = new lib.Анимация43("synched",0);
	this.instance_26.setTransform(137.7,21.6);

	this.instance_27 = new lib.Анимация44("synched",0);
	this.instance_27.setTransform(137.7,21.6);
	this.instance_27._off = true;

	this.instance_28 = new lib.Анимация45("synched",0);
	this.instance_28.setTransform(137.7,20.7);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({_off:true},18).wait(9).to({_off:false},16).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({_off:false},18).to({_off:true,y:20.7},9).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(18).to({_off:false},9).to({_off:true,y:21.6},16).wait(1));

	// Слой 13
	this.instance_29 = new lib.Анимация46("synched",0);
	this.instance_29.setTransform(154.1,21.7);

	this.instance_30 = new lib.Анимация47("synched",0);
	this.instance_30.setTransform(154.1,21.7);
	this.instance_30._off = true;

	this.instance_31 = new lib.Анимация48("synched",0);
	this.instance_31.setTransform(154.1,20.8);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({_off:true},20).wait(9).to({_off:false},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({_off:false},20).to({_off:true,y:20.8},9).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(20).to({_off:false},9).to({_off:true,y:21.7},14).wait(1));

	// Слой 14
	this.instance_32 = new lib.Анимация49("synched",0);
	this.instance_32.setTransform(171.3,21.6);

	this.instance_33 = new lib.Анимация50("synched",0);
	this.instance_33.setTransform(171.3,21.6);
	this.instance_33._off = true;

	this.instance_34 = new lib.Анимация51("synched",0);
	this.instance_34.setTransform(171.3,20.7);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({_off:true},22).wait(9).to({_off:false},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({_off:false},22).to({_off:true,y:20.7},9).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(22).to({_off:false},9).to({_off:true,y:21.6},12).wait(1));

	// Слой 15
	this.instance_35 = new lib.Анимация52("synched",0);
	this.instance_35.setTransform(171.1,2);

	this.instance_36 = new lib.Анимация53("synched",0);
	this.instance_36.setTransform(171.1,2);
	this.instance_36._off = true;

	this.instance_37 = new lib.Анимация54("synched",0);
	this.instance_37.setTransform(171.1,1.1);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({_off:true},24).wait(9).to({_off:false},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({_off:false},24).to({_off:true,y:1.1},9).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(24).to({_off:false},9).to({_off:true,y:2},10).wait(1));

	// Слой 16
	this.instance_38 = new lib.Анимация55("synched",0);
	this.instance_38.setTransform(196.9,21.6);

	this.instance_39 = new lib.Анимация56("synched",0);
	this.instance_39.setTransform(196.9,21.6);
	this.instance_39._off = true;

	this.instance_40 = new lib.Анимация57("synched",0);
	this.instance_40.setTransform(196.9,20.7);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({_off:true},26).wait(9).to({_off:false},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({_off:false},26).to({_off:true,y:20.7},9).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(26).to({_off:false},9).to({_off:true,y:21.6},8).wait(1));

	// Слой 17
	this.instance_41 = new lib.Анимация58("synched",0);
	this.instance_41.setTransform(220.8,25.5);

	this.instance_42 = new lib.Анимация59("synched",0);
	this.instance_42.setTransform(220.8,25.5);
	this.instance_42._off = true;

	this.instance_43 = new lib.Анимация60("synched",0);
	this.instance_43.setTransform(220.8,24.6);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({_off:true},28).wait(9).to({_off:false},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).to({_off:false},28).to({_off:true,y:24.6},9).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(28).to({_off:false},9).to({_off:true,y:25.5},6).wait(1));

	// Слой 18
	this.instance_44 = new lib.Анимация61("synched",0);
	this.instance_44.setTransform(239.7,21.6);

	this.instance_45 = new lib.Анимация62("synched",0);
	this.instance_45.setTransform(239.7,21.6);
	this.instance_45._off = true;

	this.instance_46 = new lib.Анимация63("synched",0);
	this.instance_46.setTransform(239.7,20.7);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({_off:true},30).wait(9).to({_off:false},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({_off:false},30).to({_off:true,y:20.7},9).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(30).to({_off:false},9).to({_off:true,y:21.6},4).wait(1));

	// Слой 19
	this.instance_47 = new lib.Анимация64("synched",0);
	this.instance_47.setTransform(259.3,21.6);

	this.instance_48 = new lib.Анимация65("synched",0);
	this.instance_48.setTransform(259.3,21.6);
	this.instance_48._off = true;

	this.instance_49 = new lib.Анимация66("synched",0);
	this.instance_49.setTransform(259.3,20.7);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({_off:true},32).wait(9).to({_off:false},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({_off:false},32).to({_off:true,y:20.7},9).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(32).to({_off:false},9).to({_off:true,y:21.6},2).wait(1));

	// Слой 20
	this.instance_50 = new lib.Анимация67("synched",0);
	this.instance_50.setTransform(279,21.6);

	this.instance_51 = new lib.Анимация68("synched",0);
	this.instance_51.setTransform(279,21.6);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({_off:true},34).to({_off:false},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({_off:false},34).to({_off:true},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288.6,42.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dib();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(103.5,131.6,1,1,0,0,0,103.3,127.7);
	this.instance_1.alpha = 0.43;
	this.instance_1.filters = [new cjs.BlurFilter(24, 24, 1)];
	this.instance_1.cache(-2,-2,211,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-8.1,295.8,284);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(142,125,1,1,0,0,0,142,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:127.3},14,cjs.Ease.get(-1)).to({y:125},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-8.1,295.8,284);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_66 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_82 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_97 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(8).call(this.frame_14).wait(7).call(this.frame_21).wait(7).call(this.frame_28).wait(7).call(this.frame_35).wait(9).call(this.frame_44).wait(7).call(this.frame_51).wait(7).call(this.frame_58).wait(8).call(this.frame_66).wait(8).call(this.frame_74).wait(8).call(this.frame_82).wait(7).call(this.frame_89).wait(8).call(this.frame_97).wait(7).call(this.frame_104).wait(1));

	// Слой 3
	this.instance = new lib.Символ7();
	this.instance.setTransform(108.8,284.9,1,1,0,0,0,7.8,272.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:221.4},6).to({y:158.4},8).to({y:95},7).to({y:31.5},7).to({y:-94.9},7).to({y:-158.4},9).to({y:-221.8},7).to({y:284.9},7).to({y:158.4},8).to({y:95},8).to({y:31.5},8).to({y:-94.9},7).to({y:-157.9},8).to({y:-221.7},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101,12.1,15.6,609.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_58 = function() {
		this.parent.second.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1));

	// Слой 3
	this.instance = new lib.Символ7();
	this.instance.setTransform(108.8,284.9,1,1,0,0,0,7.8,272.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:221.4},6).to({y:158.4},8).to({y:95},7).to({y:31.5},7).to({y:-94.9},7).to({y:-158.4},9).to({y:-221.8},7).to({y:-285.1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101,12.1,15.6,609.4);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApqD0QgkAAAAgiIAAmiQAAgkAkAAITWAAQAiAAABAkIAAGiQgBAigiAAg");
	mask.setTransform(65.5,24.5);

	// Слой 5
	this.instance = new lib.Символ5();
	this.instance.setTransform(47.6,26.1,1,1,0,0,0,40.1,33.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2 - копия
	this.second = new lib.Символ4копия();
	this.second.setTransform(46.9,25.9,1,1,0,0,0,57.1,33.6);

	this.second.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.second).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(65.7,25.9,1,1,0,0,0,57.1,33.6);

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
p.nominalBounds = new cjs.Rectangle(-84.4,-7.5,289.5,621.2);


(lib.Символ18 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ14();
	this.instance.setTransform(67.4,42.4,1,1,0,0,0,62.1,42.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-12.8,154,121);


// stage content:



(lib.stforex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.dialog.gotoAndPlay(1);
		   
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.dialog.gotoAndPlay(10);
		   
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212B37").s().p("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");
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
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(438.7,258,1,1,0,0,0,110.2,40);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// logo
	this.instance_3 = new lib.logostforexcom2();
	this.instance_3.setTransform(326.8,5.5,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// dialog
	this.dialog = new lib.Символ18();
	this.dialog.setTransform(67,51.4,1,1,0,0,0,64.7,43.4);

	this.timeline.addTween(cjs.Tween.get(this.dialog).wait(1));

	// dibro
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(147.5,175.5,1,1,0,0,0,142,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// fon
	this.instance_5 = new lib.LightGreyBackgroundHd51();
	this.instance_5.setTransform(-6,-36,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.3,66.5,666.6,846.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
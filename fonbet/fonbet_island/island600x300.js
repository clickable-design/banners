(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/button.png?1468330069893", id:"button"},
		{src:"images/button2.png?1468330069893", id:"button2"},
		{src:"images/fon.jpg?1468330069893", id:"fon"},
		{src:"images/logo.png?1468330069893", id:"logo"},
		{src:"images/tip.png?1468330069893", id:"tip"}
	]
};



// symbols:



(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,103);


(lib.button2 = function() {
	this.initialize(img.button2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,103);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,406);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,120);


(lib.tip = function() {
	this.initialize(img.tip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,281);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AE3BwQgsgqAAhGQAAhGAtgqQAsgqBMAAQBMAAAtAqQAsAqAABGQAABHgsAqQgtAqhOAAQhKAAgtgrgAFshTQgZAgAAAzQAAAzAZAgQAZAfAqAAQArAAAagfQAZgfAAg0QAAgzgZggQgagfgqAAQgqAAgaAfgAoaCbIAAgqIAIAAQAlAAAPgHQAPgIARgaIAFgJIh0jSIBJAAIBPCQIBQiQIFUAAIAAApIhzAAIAAD9IhEAAIAAj9Ih1AAIAAgEIhiCwQgdA1gaATQgWARhFAAgAMkCTIAAj9IhWAAIAAAXQAACFgPAkQgNAfgZAOQgaANgzADIAAgrQAhgCAOgTQANgTACgxIAEiiIDaAAIAAEmgAAfCTIAAkmIDCAAIAAApIh/AAIAABTIAWAAQAsAAASACQASAEAQAJQAmATAAAuQAAAxgrAZQgdAQhKAAgABiBtIARAAQAkAAASgMQASgMAAgaQAAgXgRgLQgSgMgiAAIgUAAgAroCTIAAgpQg4AAgkgeQgjgeAAguQAAguAjgdQAkgeA4AAIAAgqIA/AAIAAAqQA3AAAkAeQAkAdAAAuQAAAugkAeQgkAeg3AAIAAApgAqpBDQAcAAASgTQASgSAAgeQAAgdgSgTQgSgSgcgBgAsXgwQgSATAAAdQAAAeASASQASATAdAAIAAiGQgdABgSASg");
	this.shape.setTransform(87.3,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.6,31.1);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AInBnIAAgcIidAAIAAiHIAeAAIAAB0IAmAAIAAh0IAeAAIAAB0IAnAAIAAh0IAeAAIAAB0IAUAAIAAAvgAqDBnIAAgcIhhAAIAAAcIgeAAIAAgvIALAAQAQgUAHgZQAIgXAAghIAAgPIBfAAIAAB0IAVAAIAAAvgAq8goQAAAdgHAZQgIAbgMAPIBAAAIAAhiIglAAgAB7A7QgVgUAAghQAAgfAVgUQAVgSAjgBQAjABAVASQAUAUAAAfQAAAhgUAUQgVATgkAAQgjAAgUgTgACTgeQgLAOAAAWQAAAZALAOQAMAOATAAQAVAAALgOQAMgPAAgYQAAgWgMgOQgMgPgTAAQgUAAgMAPgAiNA7QgVgSAAgjQAAggAVgTQAVgTAnAAQAXABAYAEIAAgBICKAAIAAATIg2AAIAAB0IggAAIAAh0IgyAAIAAAFQgcgJgTAAQgYAAgMAOQgNANAAAYQAAAZAOAOQANANAZAAQAWABAXgKIAAAUQgWAKgegBQglABgVgUgAM/BLIAAhiIhEBiIgcAAIAAiHIAeAAIAABiIBEhiIAcAAIAACHgAKqBLIAAhiIhEBiIgcAAIAAiHIAeAAIAABiIBEhiIAcAAIAACHgAFSBLIAAg4IgKAAQgLALgXAnIgDAGIgoAAQAIgIAIgNIAOgUQALgOAMgHQgSgDgKgKQgJgHAAgPQAAgTAPgKQAHgGAJgBQAJgCAWAAIAoAAIAACHgAEyglQgIAFAAALQAAAMAJAGQAIAEARAAIAGAAIAAgrIgIAAQgQgBgIAGgAjABLIgPgkIg/AAIgQAkIgWAAIA6iHIAgAAIA7CHgAjXAUIgYg0IgXA0IAvAAgAlaBLIAAg+Ig+AAIAAA+IggAAIAAiHIAgAAIAAA4IA+AAIAAg4IAfAAIAACHgApcBLIAAiHIBfAAIAAATIg/AAIAAAmIAzAAIAAAQIgzAAIAAArIBDAAIAAATgAtcBLIAAiHIBcAAIAAATIg9AAIAAB0gAMDhPQgJgIAAgPIAWAAIAAACQAAAIADAFQADADAGAAQAGAAAEgEQADgDAAgJIAAgCIAVAAQAAAPgIAIQgJAHgRAAQgRAAgIgHg");
	this.shape.setTransform(86.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.4,20.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ANHCYQAcgSAIgSQgFAEgGABQgPgBgIgHQgJgIAAgOQAAgOALgKQAKgJAPAAQAKAAAJADQAIAFAGAFQAGAHADAIQADAIAAAJQAAANgFAMQgEALgJAJQgIAIgLAIIgWALgALnBxIAAjXIhNDEIg1AAIhMjHIAADaIg1AAIAAkfIBYAAIBNDKIBPjKIBMAAIAAEfgAGRBxIghhMIiEAAIghBMIgwAAIB8kfIBCAAIB8EfgAFgAAIgyh0IgxB0IBjAAgAgFBxIAAj3IhyAAIAAgoIElAAIAAAoIhyAAIAAD3gAkpBxIAAkfIBBAAIAAEfgAolBxIAAkfIBBAAIAAB5IAVAAQBHAAAaAPQAlAUAAArQAAAxgqAXQgcARhKgBgAnkBMIATAAQAkAAARgMQASgMAAgYQAAgXgRgJQgSgMgjABIgUAAgAqNBxIAAjXIhODEIg1AAIhMjHIAADaIg0AAIAAkfIBYAAIBMDKIBPjKIBNAAIAAEfg");
	this.shape.setTransform(91.4,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,35);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrgCQAhgFAEgkQAIAfAqgBQgdAbANAYQgcgPgYAVQAHgfgagPg");
	this.shape.setTransform(4.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,8.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrgCQAhgFAEgkQAIAfAqgBQgdAbANAYQgcgPgYAVQAHgfgagPg");
	this.shape.setTransform(4.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,8.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrgCQAhgFAEgkQAIAfAqgBQgdAbANAYQgcgPgYAVQAHgfgagPg");
	this.shape.setTransform(4.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,8.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tip();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,281);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFRBCIAAgWIhNAAIAAAWIgYAAIAAglIAJAAQAMgPAGgSQAGgUAAgZIAAgNIBLAAIAABbIARAAIAAAlgAEjguQAAAXgGAVQgFATgKAMIAyAAIAAhNIgdAAgAiGAfQgQgPAAgYQAAgaARgPQAQgQAcAAQAbAAARAQQAQAPAAAaQAAAYgQAQQgRAPgcAAQgbAAgRgQgAhygnQgJAMAAATQAAARAJAMQAJALAPAAQAQAAAKgLQAJgMAAgRQAAgTgKgMQgJgLgPAAQgQAAgJALgAlmAfQgQgPAAgYQAAgaAQgPQAQgQAcAAQAcAAAQAQQARAPAAAaQAAAYgRAQQgQAPgdAAQgbAAgQgQgAlTgnQgJAMAAATQAAARAJAMQAKALAPAAQAQAAAJgLQAJgMAAgRQAAgTgJgMQgJgLgQAAQgPAAgKALgAI+AsIAAhqIAZAAIAAAtIAIAAIAYABQAHABAGAEQAOAHAAAPQAAASgQAJQgLAGgbAAgAJXAeIAHAAQAOAAAGgEQAHgFAAgJQAAgIgHgEQgHgDgNAAIgHAAgAITAsIAAgvIgxAAIAAAvIgZAAIAAhqIAZAAIAAAsIAxAAIAAgsIAZAAIAABqgAFvAsIAAhqIBLAAIAAAPIgyAAIAAAeIApAAIAAAOIgpAAIAAAgIA1AAIAAAPgABwAsIAAhqIApAAQASAAAJAGQAJAGAAAMQAAAUgcAIQAhAHAAAUQAAANgKAHQgJAHgTAAgACHAdIAGAAQAPAAAGgDQAGgDAAgIQAAgJgIgFQgIgEgMAAIgFAAgACHgRIAGAAQALAAAGgFQAGgEAAgIQAAgIgFgDQgFgCgNAAIgGAAgAgTAsIAAhqIAmAAQASAAAKAGQAJAGAAAMQAAAUgdAIQAiAHAAAUQAAANgKAHQgKAHgSAAgAACAdIAFAAQAQAAAGgDQAGgDAAgIQAAgJgIgFQgIgEgMAAIgFAAgAACgRIAGAAQAKAAAHgFQAGgEAAgIQAAgIgFgDQgFgCgOAAIgFAAgAiyAsIgPgYQgKgQgIgHIgJAAIAAAvIgYAAIAAhqIAYAAIAAAuQAHgBADgCIANgRIAEgHQAIgMAFgDQAGgEALAAIAGAAIAAAOQgHAAgDABQgCACgFAGIgKAQQgFAIgLAFQAKACAGAFQAGADAHAMIAUAggAnKAsIAAhqIApAAQAWAAAJAHQAKAGAAAQQAAARgNAKQgMAIgXAAIgKAAIAAAqgAmygLIAFAAQANAAAHgFQAHgGAAgJQAAgQgWAAIgKAAgAobAsIAAhqIBIAAIAAAPIgwAAIAABbgApFAsIAAhNIg2BNIgWAAIAAhqIAYAAIAABNIA2hNIAWAAIAABqg");
	this.shape.setTransform(57.3,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,0.2,131.7,13.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0033FF","#0066FF"],[0,1],137.5,0,-137.4,0).s().p("AxtICIjwwDMAq7AAAIAAQDg");
	this.shape.setTransform(137.5,51.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,102.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ALyCZQgPgCgNgGQgOgFgLgHQgMgJgLgJQgKgLgHgMQgIgNgGgOQgFgOgDgRQgDgPAAgTQAAgPADgSQADgPAFgPQAGgPAIgMQAIgMAKgLQAKgKAMgIQAMgIAOgFQANgFAPgDQAPgDAQAAQAQAAAOADQAPADANAFQAOAFAMAIQAMAIAJAJQAKAKAIANQAIANAGAOQAFAOADAQQADARAAARQAAAQgDASQgDAQgFAOQgGAPgIAMQgIANgKAKQgKAKgMAIQgMAHgNAGQgNAFgPADQgPADgQAAQgQAAgPgDgAL4hXQgMAFgIAMQgJAMgEARQgFATAAAWQAAAYAFASQAEASAJALQAIALAMAGQAMAGAOAAQAOgBALgFQAMgFAIgMQAIgMAEgQQAFgTAAgYQAAgWgFgSQgEgSgJgMQgIgMgMgFQgLgGgOABQgOgBgLAGgAG8CZQgPgCgNgGQgOgFgLgHQgMgJgLgJQgKgLgHgMQgIgNgGgOQgFgOgDgRQgDgPAAgTQAAgPADgSQADgPAFgPQAGgPAIgMQAIgMAKgLQAKgKAMgIQAMgIAOgFQANgFAPgDQAPgDAQAAQAQAAAOADQAPADANAFQAOAFAMAIQAMAIAJAJQAKAKAIANQAIANAGAOQAFAOADAQQADARAAARQAAAQgDASQgDAQgFAOQgGAPgIAMQgIANgKAKQgKAKgMAIQgMAHgNAGQgNAFgPADQgPADgQAAQgQAAgPgDgAHChXQgMAFgIAMQgJAMgEARQgFATAAAWQAAAYAFASQAEASAJALQAIALAMAGQAMAGAOAAQAOgBALgFQAMgFAIgMQAIgMAEgQQAFgTAAgYQAAgWgFgSQgEgSgJgMQgIgMgMgFQgLgGgOABQgOgBgLAGgACGCZQgPgCgNgGQgOgFgLgHQgMgJgLgJQgKgLgHgMQgIgNgGgOQgFgOgDgRQgDgPAAgTQAAgPADgSQADgPAFgPQAGgPAIgMQAIgMAKgLQAKgKAMgIQAMgIAOgFQANgFAPgDQAPgDAQAAQAQAAAOADQAPADANAFQAOAFAMAIQAMAIAJAJQAKAKAIANQAIANAGAOQAFAOADAQQADARAAARQAAAQgDASQgDAQgFAOQgGAPgIAMQgIANgKAKQgKAKgMAIQgMAHgNAGQgNAFgPADQgPADgQAAQgQAAgPgDgACMhXQgMAFgIAMQgJAMgEARQgFATAAAWQAAAYAFASQAEASAJALQAIALAMAGQAMAGAOAAQAOgBALgFQAMgFAIgMQAIgMAEgQQAFgTAAgYQAAgWgFgSQgEgSgJgMQgIgMgMgFQgLgGgOABQgOgBgLAGgAjuCZQgPgCgNgGQgOgFgLgHQgMgJgLgJQgKgLgHgMQgIgNgGgOQgFgOgDgRQgDgPAAgTQAAgPADgSQADgPAFgPQAGgPAIgMQAIgMAKgLQAKgKAMgIQAMgIAOgFQANgFAPgDQAPgDAQAAQAQAAAOADQAPADANAFQAOAFAMAIQAMAIAJAJQAKAKAIANQAIANAGAOQAFAOADAQQADARAAARQAAAQgDASQgDAQgFAOQgGAPgIAMQgIANgKAKQgKAKgMAIQgMAHgNAGQgNAFgPADQgPADgQAAQgQAAgPgDgAjohXQgMAFgIAMQgJAMgEARQgFATAAAWQAAAYAFASQAEASAJALQAIALAMAGQAMAGAOAAQAOgBALgFQAMgFAIgMQAIgMAEgQQAFgTAAgYQAAgWgFgSQgEgSgJgMQgIgMgMgFQgLgGgOABQgOgBgLAGgAokCZQgPgCgNgGQgOgFgLgHQgMgJgLgJQgKgLgHgMQgIgNgGgOQgFgOgDgRQgDgPAAgTQAAgPADgSQADgPAFgPQAGgPAIgMQAIgMAKgLQAKgKAMgIQAMgIAOgFQANgFAPgDQAPgDAQAAQAQAAAOADQAPADANAFQAOAFAMAIQAMAIAJAJQAKAKAIANQAIANAGAOQAFAOADAQQADARAAARQAAAQgDASQgDAQgFAOQgGAPgIAMQgIANgKAKQgKAKgMAIQgMAHgNAGQgNAFgPADQgPADgQAAQgQAAgPgDgAoehXQgMAFgIAMQgJAMgEARQgFATAAAWQAAAYAFASQAEASAJALQAIALAMAGQAMAGAOAAQAOgBALgFQAMgFAIgMQAIgMAEgQQAFgTAAgYQAAgWgFgSQgEgSgJgMQgIgMgMgFQgLgGgOABQgOgBgLAGgAt1CVQgegIgSgKIAag0QANAFAYAEQAbAFASABIAVgDQAKgCAIgEQAIgFAEgIQAFgHAAgKQAAgLgHgIQgGgHgLgEQgJgEgNgCIgzgCIAAgyIAgAAQAbAAAOgFQAIgEAEgEQAFgGAAgIQAAgIgFgGQgEgHgHgDQgNgHgVAAQgQAAgWAEIgdAGIgXg1QA3gVAxAAQAbAAAWAFQAVAHAQAKQAQALAIAPQAJAQAAATQgDAZgHAMQgGAKgJAHQgLAJgOAEQANAEALAEQALAGAIAKQAIAKAEAMQAFANAAAPQAAAKgDAKQgCAKgFAIQgKAQgTALQgSALgaAGQgYAFgeAAQgugDgTgEg");
	this.shape.setTransform(81.6,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,4.3,187,31.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijAvQgTgSAAgdQAAgdATgRQASgRAgAAQAfAAATARQASARAAAdQAAAdgSASQgTARggAAQgfAAgSgRgAiOgiQgKANAAAVQAAAVAKANQALANARAAQATAAAKgNQALgNAAgVQAAgVgLgNQgLgNgRAAQgSAAgLANgADAA9IAAh6IBVAAIAAARIg5AAIAAAjIAvAAIAAAOIgvAAIAAAnIA9AAIAAARgABZA9IAAh6IBWAAIAAARIg6AAIAAAjIAvAAIAAAOIgvAAIAAAnIA9AAIAAARgAAoA9IAAhpIgkAAIAAAKQAAA2gFAPQgFANgLAGQgLAGgUABIAAgSQAOgBAFgIQAFgIACgUIABhDIBZAAIAAB6gAkYA9IAAh6IBRAAIAAARIg1AAIAAAjIAJAAIAaABQAHABAHAEQAPAHAAATQABAVgTAKQgMAHgeAAgAj8AtIAHAAQAOAAAIgFQAHgFAAgLQABgJgIgFQgGgFgPAAIgIAAg");
	this.shape.setTransform(28.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.9,56.3,13);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjwBbIAAgtQgKAKgOgBQgSAAgMgOQgMgPAAgWQAAgVAMgPQANgPASAAQAPABAIAIIAAg0IAbAAIAAA0QAIgIAPgBQATAAAMAPQAMAPAAAVQAAAWgMAPQgMAOgSAAQgOABgKgKIAAAtgAjVgXIAAA3QAIAFAHAAQAKAAAGgJQAGgJAAgPQAAgMgGgKQgHgKgKABQgGgBgIAFgAkOgSQgHAKAAAMQAAAPAHAJQAFAJALAAQAGAAAIgFIAAg3QgHgFgHABQgKgBgGAKgAmUBbIAAgtQgKAKgOgBQgRAAgMgOQgMgPAAgWQAAgVAMgPQAMgPASAAQAQABAHAIIAAg0IAcAAIAAA0QAHgIAQgBQASAAANAPQALAPAAAVQAAAWgLAPQgNAOgRAAQgPABgJgKIAAAtgAl4gXIAAA3QAIAFAGAAQAKAAAGgJQAGgJAAgPQAAgMgGgKQgHgKgJABQgHgBgHAFgAmxgSQgIAKABAMQAAAPAGAJQAGAJAKAAQAGAAAIgFIAAg3QgHgFgHABQgJgBgGAKgABSBNIAAgWIhYAAIAAhkIAcAAIAABRIAoAAIAAhRIAeAAIAABRIATAAIAAApgAJNArQgPgPAAgZQAAgWAQgOQAPgPAaAAQAbAAAQAPQAQAOAAAWQAAAagQAOQgPAOgcAAQgaAAgQgOgAJlgVQgHAKAAAOQAAARAHAKQAGAJAMAAQAaABAAglQABgOgIgKQgGgKgNAAQgMAAgGAKgAEDArQgQgPgBgZQAAgWAPgOQAPgPAYAAQAZAAALAPQAMAOgBAcIhFAAQADAdAgAAQAQAAASgGIAAATQgVAGgTAAQgdAAgPgOgAE6gFQAAgagSAAQgUAAgDAaIApAAIAAAAgAo/A0IAAgSQAPAFAQAAQARABAIgIQAJgHABgPIgnAAIAAgPIAnAAQgBgMgHgHQgIgGgPgBQgQAAgQAHIAAgTQARgFARAAQAdAAAPAOQAQANAAAXQAAAcgPAOQgPANgdAAQgVAAgRgFgAqnArQgPgPAAgZQAAgWAPgOQAQgPAaAAQAbAAAQAPQAPAOABAWQgBAagPAOQgPAOgcAAQgaAAgQgOgAqPgVQgHAKAAAOQAAARAHAKQAGAJAMAAQAaABAAglQABgOgIgKQgGgKgNAAQgMAAgGAKgALBA3IAAhkIAsAAQAWAAAMAFQALAGAAAMQABAJgHAHQgGAGgMABQAOAEAHAGQAIAHAAAKQAAAPgLAFQgLAHgYAAgALdAmIAIAAQARAAAGgCQAFgDAAgHQAAgIgGgFQgIgDgNAAIgJAAgALdgEIAJAAQALAAAGgDQAGgEAAgHQAAgGgGgCQgGgDgKAAIgKAAgAH7A3IAAhSIgjAAIAAgSIBlAAIAAASIgjAAIAABSgAGyA3IAAguIgoAAIAAAuIgfAAIAAhkIAfAAIAAAnIAoAAIAAgnIAeAAIAABkgADHA3IAAhFIgtBFIgdAAIAAhkIAbAAIAABDIAthDIAeAAIAABkgAg7A3IAAhFIgtBFIgeAAIAAhkIAcAAIAABDIAthDIAeAAIAABkgAraA3IgHgMQgNgWgKgJIgKAAIAAArIgcAAIAAhkIAcAAIAAAqQAJAAAEgDQADgDAIgNIADgFQAHgLAHgEQAFgDAPAAIAEAAIAAARIgDAAQgFAAgDACQgCACgEAGIgHALQgFAHgMACQAKADAGAFQAFAEAHAMIAUAdg");
	this.shape.setTransform(84.2,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.2,-2.1,159.9,18.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ALjCdQgPgDgOgFQgOgGgMgIQgMgHgLgLQgKgLgIgMQgIgNgGgOQgFgPgDgRQgDgQAAgTQAAgQADgRQADgQAGgPQAFgPAJgNQAIgNAKgLQAKgKANgIQAMgIAOgFQAOgGAPgDQAPgDAQAAQAQAAAQADQAOADAOAGQAOAFAMAHQAMAJAKAKQALAKAIANQAIANAFAOQAGAPADAQQADARAAASQAAARgDARQgDARgGAPQgFAPgIANQgJAMgKAKQgKALgMAIQgMAIgOAGQgOAFgPADQgPACgRAAQgQAAgPgCgALphZQgMAGgJALQgJANgEARQgFATAAAXQAAAYAFATQAFARAIAMQAJAMAMAGQAMAGAOAAQAPAAALgGQAMgFAIgMQAJgMAEgSQAFgSAAgZQAAgWgFgTQgFgSgIgNQgJgLgMgGQgLgGgPAAQgOAAgLAGgAGlCdQgPgDgOgFQgNgGgMgIQgNgHgKgLQgKgLgIgMQgIgNgGgOQgGgPgDgRQgCgQAAgTQAAgQADgRQACgQAGgPQAGgPAIgNQAIgNALgLQAKgKAMgIQAMgIAOgFQAOgGAPgDQAQgDAQAAQAQAAAPADQAPADAOAGQANAFANAHQAMAJAKAKQAKAKAIANQAIANAGAOQAFAPADAQQADARAAASQAAARgDARQgDARgFAPQgGAPgIANQgIAMgKAKQgKALgNAIQgMAIgOAGQgNAFgPADQgQACgQAAQgQAAgQgCgAGrhZQgMAGgIALQgJANgFARQgEATAAAXQAAAYAEATQAFARAJAMQAJAMAMAGQALAGAPAAQAOAAAMgGQALgFAJgMQAIgMAFgSQAEgSAAgZQAAgWgFgTQgEgSgJgNQgIgLgMgGQgMgGgOAAQgOAAgMAGgABoCdQgPgDgOgFQgOgGgMgIQgMgHgLgLQgKgLgIgMQgIgNgEgOQgFgPgDgRQgDgQAAgTQAAgQADgRQADgQAGgPQADgPAJgNQAIgNAKgLQAKgKANgIQAMgIAOgFQAOgGAPgDQAPgDAQAAQAQAAAQADQAOADAOAGQAOAFAMAHQAMAJAKAKQALAKAIANQAIANAFAOQAGAPADAQQADARAAASQAAARgDARQgDARgGAPQgFAPgIANQgJAMgKAKQgKALgMAIQgMAIgOAGQgOAFgPADQgPACgRAAQgQAAgPgCgABuhZQgMAGgJALQgJANgEARQgFATAAAXQAAAYAFATQAFARAIAMQAJAMAMAGQAMAGAOAAQAPAAALgGQAMgFAIgMQAJgMAEgSQAFgSAAgZQAAgWgFgTQgFgSgIgNQgJgLgMgGQgLgGgPAAQgOAAgLAGgAkZCdQgPgDgOgFQgNgGgMgIQgNgHgKgLQgKgLgIgMQgIgNgGgOQgGgPgDgRQgCgQAAgTQAAgQADgRQACgQAGgPQAGgPAIgNQAIgNALgLQAKgKAMgIQAMgIAOgFQAOgGAPgDQAQgDAQAAQAQAAAPADQAPADAOAGQANAFANAHQAMAJAKAKQAKAKAIANQAIANAGAOQAFAPADAQQADARAAASQAAARgDARQgDARgFAPQgGAPgIANQgIAMgKAKQgKALgNAIQgMAIgOAGQgNAFgPADQgQACgQAAQgQAAgQgCgAkThZQgMAGgIALQgJANgFARQgEATAAAXQAAAYAEATQAFARAJAMQAJAMAMAGQALAGAPAAQAOAAAMgGQALgFAJgMQAIgMAFgSQAEgSAAgZQAAgWgFgTQgEgSgJgNQgIgLgMgGQgMgGgOAAQgOAAgMAGgApWCdQgPgDgOgFQgOgGgMgIQgMgHgLgLQgKgLgIgMQgIgNgGgOQgFgPgDgRQgDgQAAgTQAAgQADgRQADgQAGgPQAFgPAJgNQAIgNAKgLQAKgKANgIQAMgIAOgFQAOgGAPgDQAPgDAQAAQAQAAAQADQAOADAOAGQAOAFAMAHQAMAJAKAKQALAKAIANQAIANAFAOQAGAPADAQQADARAAASQAAARgDARQgDARgGAPQgFAPgIANQgJAMgKAKQgKALgMAIQgMAIgOAGQgOAFgPADQgPACgRAAQgQAAgPgCgApQhZQgMAGgJALQgJANgEARQgFATAAAXQAAAYAFATQAFARAIAMQAJAMAMAGQAMAGAOAAQAPAAALgGQAMgFAIgMQAJgMAEgSQAFgSAAgZQAAgWgFgTQgFgSgIgNQgJgLgMgGQgLgGgPAAQgOAAgLAGgAtMCZIAAjbIgzARIgbg1IBhgzIA/AAIAAEyg");
	this.shape.setTransform(90.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0.4,184.7,32);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0033FF","#0066FF"],[0,1],-137.4,0,137.5,0).s().p("A1dICIAAwDMAq7AAAIjwQDg");
	this.shape.setTransform(137.5,54);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.6,275,102.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.button();

	this.instance_1 = new lib.button2();
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,103);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(104.9,36,0.699,0.699,0,0,0,150.1,51.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:51.4,scaleX:0.75,scaleY:0.75,x:104.3,y:34.6},19,cjs.Ease.get(-1)).to({regY:51.5,scaleX:0.7,scaleY:0.7,x:104.9,y:36},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.4,72);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrgCQAhgFAEgkQAIAfAqgBQgdAbANAYQgcgPgYAVQAHgfgagPg");
	this.shape.setTransform(4.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(4.8,4.8,1,1,0,0,0,4.4,4.5);
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-2,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-4.7,22,22);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrgCQAhgFAEgkQAIAfAqgBQgdAbANAYQgcgPgYAVQAHgfgagPg");
	this.shape.setTransform(4.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(4.6,4.7,1,1,0,0,0,4.4,4.5);
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-2,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-4.8,21,22);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrgCQAhgFAEgkQAIAfAqgBQgdAbANAYQgcgPgYAVQAHgfgagPg");
	this.shape.setTransform(4.4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(4.4,4.5,1,1,0,0,0,4.4,4.5);
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-2,-2,13,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,20,20);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ23();
	this.instance.setTransform(3.8,4.5,1,1,0,0,0,4.4,4.5);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regY:4.4,scaleX:1.39,scaleY:1.39,x:4.8,y:3.5,alpha:1},4).to({rotation:67.7},5).to({rotation:0},5).to({regY:4.5,scaleX:1,scaleY:1,x:3.8,y:4.5,alpha:0.07},5).wait(6));

	// Слой 6
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-62.6,-8.1,1,1,0,0,0,4.4,4.5);
	this.instance_1.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regY:4.4,scaleX:1.23,scaleY:1.23,x:-61.8,y:-7.6,alpha:1},4).to({rotation:75,y:-7.7},5).to({rotation:0,y:-7.6},5).to({regY:4.5,scaleX:1,scaleY:1,x:-62.6,y:-8.1,alpha:0.07},5).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(-49.7,-4.5,1,1,0,0,0,4.4,4.5);
	this.instance_2.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.39,scaleY:1.39,x:-50.6,alpha:1},4).to({rotation:75},5).to({rotation:0},5).to({scaleX:1,scaleY:1,x:-49.7,alpha:0.07},5).wait(10));

	// Слой 4
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(145.1,-0.6,1,1,0,0,0,4.4,4.5);
	this.instance_3.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({regY:4.4,scaleX:1.21,scaleY:1.21,x:146,y:-1.7,alpha:1},4).to({rotation:75},5).to({rotation:0},5).to({regY:4.5,scaleX:1,scaleY:1,x:145.1,y:-0.6,alpha:0.07},5).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(133.9,1,1,1,0,0,0,4.4,4.5);
	this.instance_4.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.19,scaleY:1.19,x:133.5,y:1.6,alpha:1},4).to({regY:4.4,rotation:75,x:133.4,y:1.5},5).to({regY:4.5,rotation:0,x:133.5,y:1.6},5).to({scaleX:1,scaleY:1,x:133.9,y:1,alpha:0.07},5).wait(10));

	// Слой 2
	this.instance_5 = new lib.Символ19();
	this.instance_5.setTransform(-123.1,-27.4,1,1,0,0,0,4.4,4.5);
	this.instance_5.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({scaleX:1.21,scaleY:1.21,x:-122.8,y:-28,alpha:1},4).to({rotation:75,x:-122.7},5).to({rotation:0,x:-122.8},5).to({scaleX:1,scaleY:1,x:-123.1,y:-27.4,alpha:0.07},5).wait(6));

	// Слой 3
	this.instance_6 = new lib.Символ21();
	this.instance_6.setTransform(15.5,5.1,1,1,0,0,0,4.4,4.5);
	this.instance_6.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.19,scaleY:1.19,x:16.4,y:4.2,alpha:1},4).to({rotation:60,x:16.3,y:4.3},5).to({rotation:0,x:16.4,y:4.2},5).to({scaleX:1,scaleY:1,x:15.5,y:5.1,alpha:0.07},5).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5,-35.9,289.6,53.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(100,145.3,1,1,0,0,0,100,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:130.9},19,cjs.Ease.get(-1)).to({y:145.3},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.8,200,281);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ12();
	this.instance.setTransform(127.4,84.3,1.365,1.365,0,0,0,61.2,6.2);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(166.8,27.2,1.177,1.177,0,0,0,20,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(33.9,32,1.039,1.039);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(137.5,51.4,1,1,0,0,0,137.5,51.4);
	this.instance_3.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,102.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(94.5,26.7,1.177,1.177,0,0,0,20,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(157.6,80.5,1.105,1.105,0,0,0,82.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(153.2,54.5,1,1,0,0,0,82,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(137.5,53.4,1,1,0,0,0,137.5,56);
	this.instance_3.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,102.9);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANHCYQAcgSAIgSQgFAFgGAAQgPAAgIgIQgJgIAAgPQAAgNALgJQAKgKAPAAQAKAAAJADQAIAFAGAFQAGAHADAIQADAIAAAJQAAANgFAMQgEAKgJAKQgIAJgLAGIgWAMgALnByIAAjYIhNDEIg1AAIhMjIIAADcIg1AAIAAkfIBYAAIBNDJIBPjJIBMAAIAAEfgAGRByIghhOIiEAAIghBOIgwAAIB8kfIBCAAIB8EfgAFgAAIgyh0IgxB0IBjAAgAgFByIAAj4IhyAAIAAgnIElAAIAAAnIhyAAIAAD4gAkpByIAAkfIBBAAIAAEfgAolByIAAkfIBBAAIAAB4IAVAAQBHAAAaAPQAlAVAAAqQAAAwgqAZQgcAPhKABgAnkBMIATAAQAkAAARgMQASgMAAgZQAAgWgRgJQgSgMgjAAIgUAAgAqNByIAAjYIhODEIg1AAIhMjIIAADcIg0AAIAAkfIBYAAIBMDJIBPjJIBNAAIAAEfg");
	this.shape.setTransform(7.9,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(7.4,10.7,1,1,0,0,0,91.4,17.5);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-2,-2,187,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-10.8,194,46);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AInBnIAAgcIidAAIAAiIIAeAAIAAB0IAmAAIAAh0IAeAAIAAB0IAnAAIAAh0IAeAAIAAB0IAUAAIAAAwgAqDBnIAAgcIhhAAIAAAcIgeAAIAAgwIALAAQAQgSAHgaQAIgXAAghIAAgQIBfAAIAAB0IAVAAIAAAwgAq8goQAAAdgHAZQgIAagMAPIBAAAIAAhiIglAAgAB7A7QgVgUAAghQAAgfAVgUQAVgSAjgBQAjABAVASQAUAUAAAfQAAAigUATQgVAUgkAAQgjAAgUgUgACTgeQgLAOAAAWQAAAZALAOQAMAPATAAQAVAAALgPQAMgOAAgZQAAgWgMgOQgMgPgTAAQgUAAgMAPgAiNA8QgVgUAAgiQAAghAVgSQAVgTAnAAQAXABAYAEIAAgCICKAAIAAATIg2AAIAAB1IggAAIAAh1IgyAAIAAAGQgcgJgTAAQgYAAgMAOQgNAOAAAXQAAAZAOAOQANAOAZAAQAWgBAXgJIAAAUQgWAKgeAAQglgBgVgSgAM/BLIAAhjIhEBjIgcAAIAAiIIAeAAIAABjIBEhjIAcAAIAACIgAKqBLIAAhjIhEBjIgcAAIAAiIIAeAAIAABjIBEhjIAcAAIAACIgAFSBLIAAg5IgKAAQgLAMgXAnIgDAGIgoAAQAIgJAIgMIAOgUQALgOAMgHQgSgEgKgJQgJgHAAgPQAAgSAPgMQAHgFAJgBQAJgDAWAAIAoAAIAACIgAEyglQgIAGAAALQAAALAJAGQAIAEARgBIAGAAIAAgrIgIAAQgQAAgIAGgAjABLIgPgkIg/AAIgQAkIgWAAIA6iIIAgAAIA7CIgAjXAUIgYg1IgXA1IAvAAgAlaBLIAAg+Ig+AAIAAA+IggAAIAAiIIAgAAIAAA5IA+AAIAAg5IAfAAIAACIgApcBLIAAiIIBfAAIAAATIg/AAIAAAnIAzAAIAAAQIgzAAIAAAqIBDAAIAAAUgAtcBLIAAiIIBcAAIAAAUIg9AAIAAB0gAMDhPQgJgIAAgOIAWAAIAAABQAAAJADADQADAEAGAAQAGAAAEgEQADgDAAgJIAAgBIAVAAQAAAOgIAIQgJAHgRAAQgRAAgIgHg");
	this.shape.setTransform(2.6,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(1.9,8.3,1,1,0,0,0,86.2,10.3);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-2,-2,176,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.3,-6,184,32);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE1BwQgtgqAAhGQAAhFAtgqQAsgqBMAAQBKAAAtAqQAsAqAABFQAABHgsApQgtAqhNAAQhJAAgsgqgAFphSQgZAgAAAyQAAAzAZAfQAZAfApAAQArAAAagfQAZgeAAg0QAAgygZggQgagegpAAQgrAAgZAegAoWCaIAAgqIAIAAQAkAAAQgHQAPgIAQgaIAGgIIh0jRIBIAAIBPCQIBQiQIFQAAIAAApIhyAAIAAD7IhDAAIAAj7Ih0AAIAAgDIhhCuQgdA0gZAUQgWAQhFAAgAMeCSIAAj7IhWAAIAAAXQAACEgPAjQgNAggZAOQgZAMgzADIAAgrQAhgCANgTQANgSADgxIADihIDZAAIAAEkgAAfCSIAAkkIDAAAIAAApIh+AAIAABSIAWAAQAsAAARADQASADAQAJQAlAUAAAtQAAAxgqAYQgcAQhKAAgABhBtIARAAQAjAAASgNQATgMAAgZQAAgXgSgLQgRgMgiAAIgUAAgAriCSIAAgpQg4AAgjgdQgjgeAAguQAAgtAjgdQAjgeA4AAIAAgqIA+AAIAAAqQA3AAAkAeQAjAdAAAtQAAAugjAeQgkAdg3AAIAAApgAqkBDQAcAAASgTQASgTAAgdQAAgdgSgSQgSgTgcAAgAsRgvQgRASAAAdQAAAdARATQASATAdAAIAAiFQgdAAgSATg");
	this.shape.setTransform(3.1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(3.3,6.5,0.992,0.992,0,0,0,87.2,15.6);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-2,-2,179,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-13,184,42);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(351.1,51.4,1,1,0,0,0,137.5,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:123.4},30,cjs.Ease.get(1)).to({x:130.3},20,cjs.Ease.get(-1)).to({x:124.6},41,cjs.Ease.get(1)).to({x:351.1},30,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(213.6,0,275,102.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-81.7,51.4,1,1,0,0,0,137.5,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:26.1},29,cjs.Ease.get(-1)).to({x:142.1},30,cjs.Ease.get(1)).to({x:131.8},20,cjs.Ease.get(-1)).to({x:142.1},41,cjs.Ease.get(1)).to({x:-81.7},30,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.2,0,275,102.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(152.9,63.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:169.4},19,cjs.Ease.get(-1)).to({x:152.9},20,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(153.3,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},19,cjs.Ease.get(-1)).to({startPosition:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Анимация6("synched",0);
	this.instance_2.setTransform(153.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:130.2},19,cjs.Ease.get(-1)).to({x:153.3},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65,-9.4,195.3,103.1);


// stage content:



(lib.island600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(-7.6,-4.7,0.627,0.627);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text3
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(423.8,42.2,0.906,0.906,0,0,0,76.3,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// text2
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(526.8,177,1,1,0,0,0,137.5,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// text1
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(78.5,177,1,1,0,0,0,137.5,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// blink
	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(262.4,43.7,1,1,0,0,0,10,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// button
	this.instance_5 = new lib.Символ25();
	this.instance_5.setTransform(299.4,272.5,1,1,0,0,0,105.2,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// tip
	this.instance_6 = new lib.Символ14();
	this.instance_6.setTransform(294.5,143,1,1,0,0,0,100,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// fon
	this.instance_7 = new lib.fon();
	this.instance_7.setTransform(-49,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.8,102,1156,406);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
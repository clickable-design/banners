(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/button.png?1468317562475", id:"button"},
		{src:"images/button2.png?1468317562475", id:"button2"},
		{src:"images/fon.jpg?1468317562475", id:"fon"},
		{src:"images/logo.png?1468317562475", id:"logo"},
		{src:"images/tip.png?1468317562475", id:"tip"}
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


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFOB2QgqgtAAhJQAAhKAqgsQAsgsBHAAQBJAAAqAsQArAsAABKQAABLgrAsQgrAshJAAQhHAAgrgtgAGBhWQgZAgAAA2QAAA2AZAhQAYAhAnAAQAqAAAYghQAYghAAg2QABg2gZggQgYghgpAAQgoAAgYAhgAopCjIAAgtIAHAAQAjAAAPgHQAPgIAPgcIAGgJIhvjcIBFAAIBMCXIAAAAIBMiXIA6AAIhxDgQgbA3gaAUQgVAShBAAgANECbIAAkKIhTAAIAAAYQAACLgOAnQgLAggZAPQgYAOgxADIAAguQAggCAMgUQANgUADgzIADiqIDQAAIAAE1gAArCbIAAk1IC5AAIAAArIh5AAIAABXIAUAAQArAAARADQARADAQAKQAjAUAAAwQAAA0gpAZQgbAShHAAgABrBzIAQAAQAiAAASgNQARgNAAgbQAAgYgRgMQgQgMgiAAIgSAAgAiuCbIAAkKIhwAAIAAgrIEeAAIAAArIhtAAIAAEKgAsMCbIAAgsQg0AAgigfQgjggAAgwQAAgwAjgfQAigfA0AAIAAgsIA8AAIAAAsQA1AAAjAfQAhAfABAwQgBAwghAgQgjAfg1AAIAAAsgArQBHQAcAAARgUQARgUAAgfQAAgegRgUQgRgUgcAAgAs4gyQgRAUAAAeQAAAfARAUQARAUAbAAIAAiNQgbAAgRAUg");
	this.shape.setTransform(90.2,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.4,32.7);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AI/BsIAAgdIiXAAIAAiPIAdAAIAAB6IAlAAIAAh6IAdAAIAAB6IAkAAIAAh6IAdAAIAAB6IAUAAIAAAygAqtBsIAAgdIhdAAIAAAdIgdAAIAAgyIALAAQAPgTAHgbQAHgZAAgiIAAgRIBbAAIAAB6IAUAAIAAAygArkgqQAAAegHAaQgHAdgMAPIA9AAIAAhnIgjAAgACKA+QgUgVAAgjQAAggAUgVQAUgUAiAAQAhAAAUAUQAUAVAAAgQAAAkgUAUQgUAVgiAAQghAAgUgVgACiggQgMAPAAAXQAAAaALAQQAMAPASAAQATAAAMgPQALgPAAgbQAAgXgLgPQgMgQgSAAQgTAAgLAQgAiLA/QgUgVAAgkQAAgiAUgUQAUgTAlAAQAXAAAYAGIAAAXQgbgKgSAAQgWAAgNAPQgMAOAAAZQAAAaANAPQANAPAYAAQAVAAAWgLIAAAWQgVAKgdAAQgkgBgTgTgANsBPIAAhoIhCBoIgbAAIAAiPIAdAAIAABoIBChoIAaAAIAACPgALPBPIAAhoIhCBoIgbAAIAAiPIAdAAIAABoIBChoIAaAAIAACPgAFnBPIAAg7IgJAAQgLAMgWApIgDAGIgmAAQAHgJAJgNIANgVQAKgPAMgHQgSgEgJgJQgJgJAAgPQAAgTAPgNQAHgFAIgCQAIgCAWAAIAmAAIAACPgAFJgnQgIAGAAAMQAAAMAIAFQAIAFARAAIAFAAIAAguIgHAAQgQAAgHAGgAAaBPIAAh6IgyAAIAAgVICEAAIAAAVIg0AAIAAB6gAjJBPIgPgnIg8AAIgPAnIgWAAIA4iPIAeAAIA5CPgAjgAVIgWg3IgXA3IAtAAgAlrBPIAAhCIg8AAIAABCIgeAAIAAiPIAeAAIAAA7IA8AAIAAg7IAeAAIAACPgAp5BPIAAiPIBaAAIAAAVIg8AAIAAAnIAxAAIAAASIgxAAIAAAsIBBAAIAAAVgAuHBPIAAiPIBYAAIAAAVIg6AAIAAB6gAMyhUQgIgHAAgQIAUAAIAAADQAAAHADAEQADAEAGABQAGgBADgEQADgDAAgJIAAgCIAVAAQAAAQgIAHQgJAJgQgBQgQABgIgJg");
	this.shape.setTransform(90.5,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,21.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AMWCwIAkiOIBOAAIgzCOgAK+BpIAAjTIhEDAIgwAAIhCjCIAADVIgvAAIAAkYIBOAAIBEDFIBGjFIBEAAIAAEYgAF1BpIgdhLIh1AAIgdBLIgrAAIBukYIA6AAIBuEYgAFKgGIgshwIgsBwIBYAAgAgLBpIAAjxIhlAAIAAgnIEDAAIAAAnIhlAAIAADxgAlFBpIAAkYIA5AAIAAEYgAolBpIAAkYIA5AAIAAB2IATAAQA/AAAYAOQAgAVAAAoQAAAwglAXQgZAQhBAAgAnsBFIASAAQAgAAAPgMQAPgMAAgYQABgVgQgJQgPgMggAAIgSAAgAqiBpIAAjTIhEDAIgwAAIhCjCIAADVIgvAAIAAkYIBOAAIBEDFIBFjFIBFAAIAAEYg");
	this.shape.setTransform(90.5,17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.9,35.3);


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
	this.shape.graphics.f("#FFFFFF").s().p("AE4A9IAAgUIhDAAIAAAUIgRAAIAAgjIABAAQAJAAAHgIQAHgHAAgNIAAg3IBFAAIAABTIAIAAIAAAjgAEOgCQAAAJgFAIQgDAHgGAEIAvAAIAAhFIghAAgAiCAfQgQgPAAgYQAAgVALgOQAOgRAYAAQAWAAAOAPQANAOgBAYQABAOgIANQgDAHgHAFQgNALgSAAQgUAAgNgMgAh2glQgKAKAAATQAAAMAGAKQADAGAHAEQAHAEAJAAQANAAAIgKQAEgEADgJQACgFAAgIQAAgOgGgIQgIgPgQAAQgNAAgJAIgAlQAfQgPgPAAgYQAAgVALgOQAOgRAYAAQAVAAAOAPQANAOAAAYQAAAOgHANQgEAHgHAFQgNALgRAAQgVAAgNgMgAlDglQgLAKAAATQAAAMAGAKQAEAGAGAEQAIAEAIAAQANAAAIgKQAFgEACgJQACgFAAgIQABgOgGgIQgIgPgRAAQgNAAgIAIgAIYApIAAhiIARAAIAAAnIAaAAQALABAHAEQAHADAEAHQAEAFAAAJQAAAOgJAIQgJAHgOABgAIpAaIAaAAQAHAAAEgFQAFgEAAgGQgBgIgFgDQgDgDgHAAIgaAAgAHyApIAAgrIgvAAIAAArIgRAAIAAhiIARAAIAAAnIAvAAIAAgnIASAAIAABigAFYApIAAhiIBJAAIAAAOIg3AAIAAAbIAyAAIAAAOIgyAAIAAAbIA3AAIAAAQgABmApIAAhiIAqAAQALAAAHABQAHADAFAHQAFAFAAAJQAAAIgGAHQgDAEgFACQATAFAAARQAAAMgIAIQgFAGgIACQgFABgJABgAB3AaIAZAAQAKAAAFgCQAGgEAAgJQABgKgIgCIgDgBIgNgBIgXAAgAB3gQIAWAAQAKAAAFgDQAFgDABgHQgBgJgFgDQgEgCgLAAIgWAAgAggApIAAhiIApAAQALAAAGABQAIADAFAHQAEAFAAAJQAAAIgFAHQgEAEgEACQASAFAAARQAAAMgHAIQgGAGgHACQgGABgIABgAgOAaIAWAAQALAAAEgCQAHgEAAgJQAAgKgHgCIgEgBIgNgBIgUAAgAgOgQIATAAQALAAAEgDQAGgDAAgHQAAgJgGgDQgEgCgKAAIgUAAgAisApIghguIgPAMIAAAiIgSAAIAAhiIASAAIAAAuIAIgJIAlglIAWAAIgoAnIAsA7gAm2ApIAAhiIAnAAQAPAAAGACQAKAFAEAKQADAGAAAGQAAAUgOAHQgHADgOAAIgZAAIAAAngAmlgKIAWAAQAMAAAFgFQADgEAAgIQABgJgIgEQgEgDgKAAIgVAAgAn8ApIAAhiIA6AAIAAAOIgpAAIAABUgAoiApIAAhFIgxBFIgQAAIAAhiIARAAIAABFIAxhFIARAAIAABig");
	this.shape.setTransform(61.3,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.5,12.3);


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
	this.shape.graphics.f("#FFCC00").s().p("AKTB3QgWgsAAhLQAAhJAWguQAfg6BEAAQAsAAAeAaQAtApAABwQAABHgWAtQgcA8hFAAQhFAAgeg7gAK/hWQgJAfAAA7QAAA1AKAeQAOArAoABQAoAAAMgrQAKgiAAg1QAAg2gKghQgNgsgoAAQgpAAgNAsgAF1B3QgWgsAAhLQAAhJAXguQAdg6BFAAQAsAAAeAaQAtApAABwQAABHgWAtQgdA8hEAAQhFAAgeg7gAGihWQgKAfAAA7QAAA1AKAeQANArApABQApAAALgrQAKgiAAg1QAAg2gKghQgMgsgoAAQgqAAgMAsgABXB3QgWgsAAhLQAAhJAXguQAdg6BFAAQAsAAAeAaQAtApAABwQAABHgVAtQgdA8hFAAQhFAAgeg7gACEhWQgKAfAAA7QAAA1AKAeQANArApABQAoAAANgrQAJgiAAg1QAAg2gKghQgMgsgoAAQgqAAgMAsgAkVB3QgWgsAAhLQAAhJAWguQAeg6BFAAQAsAAAdAaQAuApAABwQAABHgWAtQgcA8hFAAQhFAAgeg7gAjphWQgJAfAAA7QAAA1AKAeQAOArAoABQApAAALgrQAKgiAAg1QAAg2gKghQgMgsgpAAQgpAAgNAsgAozB3QgWgsAAhLQAAhJAWguQAfg6BEAAQAsAAAeAaQAtApAABwQAABHgWAtQgdA8hEAAQhFAAgeg7gAoHhWQgJAfAAA7QAAA1AKAeQAOArAoABQAoAAAMgrQAKgiAAg1QAAg2gKghQgNgsgoAAQgpAAgNAsgAtUCJQgYgcAAgsIABgIIA2AAQACBKBBAAQAhgBAQgSQAPgSAAgaQAAgcgUgQQgRgOgiAAIgSABIAAgpQAgAAAPgFQARgGAHgQQAGgKAAgNQAAgYgRgOQgOgMgXAAQghAAgOAaQgJAQgBAZIg2AAQAAgoATgbQAdgvBAAAQAwAAAdAYQAfAbAAAqQAAAigWAVQgMALgOAFQAUAGAQALQAaAXAAAoQAAAxgkAhQghAdg2AAQg+AAgigpg");
	this.shape.setTransform(79.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,0,175.5,35.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsAiQgNgNAAgVQAAgRAJgMQAMgPAVAAQATAAAMANQALANAAASQAAAOgGALQgDAGgGAFQgLAJgQAAQgRAAgMgLgAhhgYQgJAJAAAPQAAALAFAJQADAFAGAEQAGADAHAAQAMAAAHgIQAEgFACgHQACgGAAgGQAAgLgFgIQgHgMgPAAQgLAAgHAHgACIArIAAhVIA/AAIAAANIgvAAIAAAXIAsAAIAAAKIgsAAIAAAaIAwAAIAAANgAA7ArIAAhVIA/AAIAAANIgwAAIAAAXIAsAAIAAAKIgsAAIAAAaIAwAAIAAANgAAbArIAAhIIgeAAIAAAuQAAAMgGAHQgGAHgJAAIgGAAIAAgNIAHgCQAFgDAAgIIAAg7IA8AAIAABVgAjHArIAAhVIA9AAIAAANIgtAAIAAAXIAVAAQARAAAHAFQAIAGAAAMQAAAIgEAGQgEAHgJADQgFACgKAAgAi3AeIAWAAQAJAAADgDQAEgEAAgGQAAgHgFgDQgDgDgIAAIgWAAg");
	this.shape.setTransform(20,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.1,9.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(82.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.7,11.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AKCB3QgWgsAAhLQAAhJAXguQAeg6BEAAQAsAAAeAaQAtApAABwQAABHgWAtQgdA8hEAAQhFAAgeg7gAKuhWQgJAfAAA7QAAA1AKAeQANArApABQAoAAAMgrQAKgiAAg1QAAg2gKghQgNgsgoAAQgpAAgNAsgAFkB3QgWgsAAhLQAAhJAXguQAdg6BFAAQAsAAAeAaQAtApAABwQAABHgVAtQgeA8hEAAQhFAAgeg7gAGRhWQgKAfAAA7QAAA1AKAeQANArApABQApAAAMgrQAJgiAAg1QAAg2gKghQgMgsgoAAQgqAAgMAsgABGB3QgWgsAAhLQAAhJAXguQAdg6BFAAQAsAAAdAaQAuApAABwQAABHgVAtQgdA8hFAAQhFAAgeg7gABzhWQgKAfAAA7QAAA1AKAeQANArApABQAoAAANgrQAJgiAAg1QAAg2gKghQgNgsgnAAQgqAAgMAsgAkmB3QgWgsAAhLQAAhJAWguQAfg6BEAAQAsAAAdAaQAuApAABwQAABHgWAtQgcA8hFAAQhFAAgeg7gAj6hWQgJAfAAA7QAAA1AKAeQAOArAoABQAoAAAMgrQAKgiAAg1QAAg2gKghQgMgsgpAAQgpAAgNAsgApEB3QgWgsAAhLQAAhJAXguQAeg6BEAAQAsAAAeAaQAtApAABwQAABHgWAtQgdA8hEAAQhFAAgeg7gAoYhWQgJAfAAA7QAAA1AKAeQANArApABQAoAAAMgrQAKgiAAg1QAAg2gKghQgNgsgoAAQgpAAgNAsgAsECsIAAjuIhXAAIAAgrQAyAAAagTQASgNAIgjIAtAAIAAFcg");
	this.shape.setTransform(86.1,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.1,35.7);


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
	this.instance.setTransform(149.1,82.1,1,1,0,0,0,61.2,6.2);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(186.3,25,1.177,1.177,0,0,0,20,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(126.1,53.3,1,1,0,0,0,83.8,17.9);

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
	this.instance.setTransform(94.5,25.4,1.177,1.177,0,0,0,20,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(157.2,81.8,1.046,1.046,0,0,0,82.4,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(153.2,54.1,1,1,0,0,0,82,17.9);

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

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMWCwIAkiNIBOAAIgzCNgAK+BpIAAjTIhEDAIgwAAIhCjCIAADVIgvAAIAAkYIBOAAIBEDEIBGjEIBEAAIAAEYgAF1BpIgdhLIh1AAIgdBLIgrAAIBukYIA6AAIBuEYgAFKgGIgshwIgsBwIBYAAgAgLBpIAAjxIhlAAIAAgnIEDAAIAAAnIhlAAIAADxgAlFBpIAAkYIA5AAIAAEYgAolBpIAAkYIA5AAIAAB2IATAAQA/AAAYAOQAgAVAAAoQAAAwglAXQgZAQhBAAgAnsBFIASAAQAgAAAPgMQAPgMAAgYQABgVgQgJQgPgMggAAIgSAAgAqiBpIAAjTIhEDAIgwAAIhCjCIAADVIgvAAIAAkYIBOAAIBEDEIBFjEIBFAAIAAEYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(2.2,1.8,1,1,0,0,0,90.5,17.7);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-2,-2,185,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.3,-19.9,192,46);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AI/BsIAAgdIiXAAIAAiOIAdAAIAAB6IAlAAIAAh6IAdAAIAAB6IAkAAIAAh6IAdAAIAAB6IAUAAIAAAxgAqtBsIAAgdIhdAAIAAAdIgdAAIAAgxIALAAQAPgVAHgaQAHgZAAghIAAgRIBbAAIAAB6IAUAAIAAAxgArkgqQAAAfgHAaQgHAcgMAQIA9AAIAAhnIgjAAgACKA+QgUgVAAgiQAAghAUgUQAUgVAiAAQAhAAAUAVQAUAUAAAhQAAAjgUAUQgUAVgigBQghABgUgVgACiggQgMAPAAAYQAAAZALAPQAMAPASAAQATAAAMgPQALgOAAgaQAAgYgLgPQgMgPgSAAQgTAAgLAPgAiLA+QgUgUAAgjQAAgjAUgTQAUgUAlAAQAXAAAYAFIAAAYQgbgKgSABQgWAAgNAOQgMAPAAAZQAAAaANAOQANAPAYAAQAVAAAWgLIAAAWQgVAJgdAAQgkAAgTgUgANsBPIAAhoIhCBoIgbAAIAAiOIAdAAIAABnIBChnIAaAAIAACOgALPBPIAAhoIhCBoIgbAAIAAiOIAdAAIAABnIBChnIAaAAIAACOgAFnBPIAAg8IgJAAQgLANgWApIgDAGIgmAAQAHgJAJgNIANgVQAKgPAMgHQgSgEgJgKQgJgIAAgPQAAgUAPgLQAHgGAIgCQAIgCAWABIAmAAIAACOgAFJgnQgIAGAAALQAAAMAIAGQAIAFARAAIAFAAIAAguIgHAAQgQAAgHAGgAAaBPIAAh7IgyAAIAAgTICEAAIAAATIg0AAIAAB7gAjJBPIgPgmIg8AAIgPAmIgWAAIA4iOIAeAAIA5COgAjgAVIgWg4IgXA4IAtAAgAlrBPIAAhCIg8AAIAABCIgeAAIAAiOIAeAAIAAA6IA8AAIAAg6IAeAAIAACOgAp5BPIAAiOIBaAAIAAATIg8AAIAAAoIAxAAIAAASIgxAAIAAAtIBBAAIAAAUgAuHBPIAAiOIBYAAIAAAUIg6AAIAAB6gAMyhTQgIgIAAgQIAUAAIAAACQAAAIADAFQADADAGAAQAGAAADgDQADgFAAgIIAAgCIAVAAQAAAQgIAIQgJAHgQAAQgQAAgIgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(3.3,0.2,1,1,0,0,0,90.5,10.8);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-2,-2,185,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-14.6,192,33);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFOB2QgqgtAAhJQAAhKAqgsQArgsBJAAQBHAAAsAsQAqAsAABKQAABLgqAsQgsAshJAAQhHAAgrgtgAGBhWQgYAggBA2QABA2AYAhQAYAhAoAAQApAAAYghQAZghAAg2QgBg2gYggQgYghgoAAQgpAAgYAhgAoqCjIAAgtIAIAAQAkAAAOgHQAOgIAQgcIAGgJIhwjcIBGAAIBLCXIABAAIBMiXIA6AAIhxDgQgcA3gZAUQgVAShCAAgANECbIAAkKIhSAAIAAAYQgBCLgOAnQgMAggYAPQgYAOgxADIAAguQAggCANgUQAMgUADgzIADiqIDQAAIAAE1gAAsCbIAAk1IC4AAIAAArIh5AAIAABXIAUAAQArAAARADQARADAPAKQAkAUAAAwQAAA0goAZQgcAShHAAgABrBzIAQAAQAiAAARgNQASgNAAgbQAAgYgRgMQgRgMghAAIgSAAgAiuCbIAAkKIhwAAIAAgrIEeAAIAAArIhtAAIAAEKgAsMCbIAAgsQg1AAghgfQgjggABgwQgBgwAjgfQAhgfA1AAIAAgsIA9AAIAAAsQA0AAAjAfQAhAfAAAwQAAAwghAgQgjAfg0AAIAAAsgArPBHQAbAAARgUQARgUAAgfQAAgegRgUQgRgUgbAAgAs4gyQgRAUAAAeQAAAfARAUQARAUAbAAIAAiNQgbAAgRAUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(4.9,0,1,1,0,0,0,90.2,16.3);
	this.instance.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance.cache(-2,-2,184,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-20.3,192.9,44);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(351.1,51.4,1,1,0,0,0,137.5,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({x:130.3},30,cjs.Ease.get(1)).to({x:134.9},20,cjs.Ease.get(-1)).to({x:130.3},41,cjs.Ease.get(1)).to({x:351.1},30,cjs.Ease.get(-1)).wait(1));

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
p.nominalBounds = new cjs.Rectangle(61,-18.5,194.6,107);


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
	this.instance_6.setTransform(298,143,1,1,0,0,0,100,140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// fon
	this.instance_7 = new lib.fon();
	this.instance_7.setTransform(-49,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.8,102,1156,406);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
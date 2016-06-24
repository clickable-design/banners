(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.png?1466778449611", id:"bg"},
		{src:"images/golova.png?1466778449611", id:"golova"},
		{src:"images/predp.png?1466778449611", id:"predp"},
		{src:"images/qqq.png?1466778449611", id:"qqq"},
		{src:"images/rrr.png?1466778449611", id:"rrr"},
		{src:"images/stol.png?1466778449611", id:"stol"},
		{src:"images/telo.png?1466778449611", id:"telo"},
		{src:"images/top.png?1466778449611", id:"top"},
		{src:"images/ttt.png?1466778449611", id:"ttt"},
		{src:"images/vavavavv.png?1466778449611", id:"vavavavv"},
		{src:"images/wsdfghserfhstfhwr.png?1466778449611", id:"wsdfghserfhstfhwr"},
		{src:"images/www.png?1466778449611", id:"www"},
		{src:"images/xxxccxc.png?1466778449611", id:"xxxccxc"},
		{src:"images/yyy.png?1466778449611", id:"yyy"},
		{src:"images/zzzz.png?1466778449611", id:"zzzz"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,167);


(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,71);


(lib.predp = function() {
	this.initialize(img.predp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,79);


(lib.qqq = function() {
	this.initialize(img.qqq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,46);


(lib.rrr = function() {
	this.initialize(img.rrr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,156);


(lib.stol = function() {
	this.initialize(img.stol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,176);


(lib.top = function() {
	this.initialize(img.top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,123);


(lib.ttt = function() {
	this.initialize(img.ttt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,138);


(lib.vavavavv = function() {
	this.initialize(img.vavavavv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,81);


(lib.wsdfghserfhstfhwr = function() {
	this.initialize(img.wsdfghserfhstfhwr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,103);


(lib.www = function() {
	this.initialize(img.www);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,535,161);


(lib.xxxccxc = function() {
	this.initialize(img.xxxccxc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,26);


(lib.yyy = function() {
	this.initialize(img.yyy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,138);


(lib.zzzz = function() {
	this.initialize(img.zzzz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,322,269);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rrr();
	this.instance.setTransform(-30.5,-16.7,0.33,0.237,0,-25.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-16.7,61,33.5);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.1,0,-10).s().p("AAYBlIAAi1IgvAAIAAC1IgXAAIAAjJIBdAAIAADJg");
	this.shape.setTransform(-8.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.5,0,-10.5).s().p("AgtBlIAAjJIAtAAQAYAAALANQAGAHADAJQACAJAAAMIAABlQAAALgCAKQgDAJgGAHQgLANgYAAgAgWBQIAWAAQAMAAAGgHQAGgIAAgNIAAhnQAAgNgGgIQgGgHgMgBIgWAAg");
	this.shape_1.setTransform(-24.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.4,0,-10.4).s().p("AgTBjQgJgDgFgHQgLgOAAgXIAAgOIAVAAIAAAPQAAAOAGAIQAFAHAMAAQALABAGgJQAFgHAAgQIAAgQQAAgOgGgIQgGgIgLABIgMAAIAAgTIANAAQAJgBAHgGQAGgIAAgNIAAgJQAAgQgFgHQgDgFgFgCQgEgCgFAAQgMAAgFAIQgGAIAAAOIAAAKIgVAAIAAgJQAAgLACgKQADgJAGgIQAFgGAJgDQAIgEALAAQALAAAJAEQAIADAGAGQAFAIADAJQADAKAAALIAAAFQAAAQgGALQgDAFgFAEQgEADgHADQAHADAFABQAEAEADAGQAGAKAAAQIAAAQQAAAMgDAJQgDAJgFAHQgLAOgXAAQgKAAgJgEg");
	this.shape_2.setTransform(-36.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.2,0,-10.1).s().p("AgrBlIAAjJIArAAQAXAAALANQAFAHADAJQACAJABALIAAAZQAAAYgMAKQgFAHgJADQgKADgKAAIgUAAIAABQgAgVAAIAUAAQALABAGgFQAGgGAAgPIAAgbQAAgOgFgGQgFgIgMAAIgVAAg");
	this.shape_3.setTransform(36.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.2,0,-10.1).s().p("AgoBlIAAjJIBRAAIAAAUIg6AAIAABGIAvAAIAAASIgvAAIAABIIA6AAIAAAVg");
	this.shape_4.setTransform(25.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.2,0,-10.1).s().p("AAbBlIgqhYIgLAUIAABEIgXAAIAAjJIAXAAIAABiIAzhiIAXAAIgxBcIAzBtg");
	this.shape_5.setTransform(14.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.3,0,-10.2).s().p("AghBZQgHgHgCgJQgDgKAAgLIAAhnQAAgLADgKQACgJAHgIQAFgGAJgDQAIgEALAAQALAAAJAEQAIADAGAGQAGAIADAJQADAKAAALIAABnQAAALgDAKQgDAJgGAHQgLAOgXAAQgXAAgKgOgAgRhJQgGAHAAAOIAABpQAAAOAGAIQAGAHALAAQALAAAHgHQAFgIAAgOIAAhpQAAgOgFgHQgHgJgLABQgLgBgGAJg");
	this.shape_6.setTransform(2.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-10.3,81.5,20.7);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAMQgFgCgEgEQgIgGgBgNIAOAAQABAJAEADQAFABAGAAQAHAAAEgBQAFgDABgJIAOAAQAAANgJAGQgEAEgFACQgGACgHAAQgGAAgGgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-1.4,6.3,2.8);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbBlIAAigIgyCgIgXAAIAAjJIAUAAIAACWIAwiWIAZAAIAADJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-10.1,9.6,20.3);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBZQgGgHgDgJQgDgKABgLIAAhnQgBgLADgKQADgJAGgIQAFgGAIgDQAIgEAMAAQALAAAJAEQAJADAGAGQAGAIADAJQACAKAAALIAABnQAAALgCAKQgDAJgGAHQgMAOgXAAQgYAAgJgOgAAIhJQgFAHgBAOIAABpQABAOAFAIQAGAHANAAQAMAAAGgHQAGgIAAgOIAAhpQAAgOgGgHQgGgJgMABQgNgBgGAJgAl8BjQgJgDgGgHQgLgOAAgXIAAgOIAVAAIAAAPQAAAOAGAIQAGAHAMAAQANABAFgJQAGgHgBgQIAAgQQAAgOgFgIQgHgIgNABIgMAAIAAgTIAOAAQAKgBAHgGQAHgIgBgNIAAgJQABgQgGgHQgDgFgEgCQgFgCgGAAQgMAAgGAIQgGAIAAAOIAAAKIgVAAIAAgJQAAgLACgKQADgJAGgIQAFgGAJgDQAJgEAMAAQALAAAJAEQAIADAGAGQAGAIADAJQADAKAAALIAAAFQgBAQgGALQgDAFgFAEQgEADgHADQAHADAFABQAEAEADAGQAHAKAAAQIAAAQQAAAMgDAJQgDAJgGAHQgLAOgXAAQgMAAgIgEgAE9BlIAAjJIAsAAQAYAAALANQAFAHAEAJQACAJAAALIAAAZQAAAYgMAKQgFAHgJADQgJADgMAAIgUAAIAABQgAFUAAIAUAAQANABAFgFQAHgGAAgPIAAgbQAAgOgGgGQgFgIgNAAIgVAAgADVBlIAAjJIBTAAIAAAUIg8AAIAABGIAyAAIAAASIgyAAIAABIIA8AAIAAAVgACsBlIgrhYIgMAUIAABEIgWAAIAAjJIAWAAIAABiIA2hiIAXAAIgzBcIA1BtgAg+BlIAAi1IgxAAIAAC1IgXAAIAAjJIBgAAIAADJgAklBlIAAjJIAwAAQAYAAAKANQAGAHADAJQADAJAAAMIAABlQAAALgDAKQgDAJgGAHQgKANgYAAgAkOBQIAZAAQALAAAHgHQAFgIAAgNIAAhnQAAgNgFgIQgHgHgMgBIgYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-10.3,81.5,20.7);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFXBlIAAjJIAXAAIAADJgADqBlIAAjJIAYAAIAABQIATAAQANAAAIADQAKADAFAGQAGAGADAIQACAJAAAMIAAAZQABAWgLAOQgGAHgJADQgIADgMAAgAECBQIAVAAQAMABAGgIQAFgGAAgOIAAgbQAAgPgGgGQgGgFgNAAIgTAAgAB5BlIAAjJIAuAAQALAAAJADQAJADAEAFQAKAMAAAWIAAAKQAAAPgEALQgDAFgFAEQgEADgHACQAIACAEADQAGADADAFQADAGACAHIABAhQAAAXgLAMQgFAGgKADQgJADgLAAgACQBQIAYAAQAMABAGgIQAGgGAAgOIAAgSQAAgIgCgHQgCgFgDgEQgHgHgPABIgTAAgACQgOIARAAQAOAAAGgFQAEgDACgFQABgGAAgIIAAgMQABgNgGgHQgFgGgMgBIgWAAgAAOBlIAAjJIAsAAQAYAAALANQAFAHADAJQADAJAAALIAAAZQAAAYgMAKQgGAHgIADQgJADgNAAIgUAAIAABQgAAkAAIAUAAQANABAGgFQAGgGAAgPIAAgbQAAgOgFgGQgFgIgNAAIgWAAgAhZBlIAAjJIBUAAIAAAUIg8AAIAABGIAxAAIAAASIgxAAIAABIIA8AAIAAAVgAiGBlIAAi1IgyAAIAAC1IgWAAIAAjJIBfAAIAADJgAltBlIAAjJIAuAAQAMAAAJADQAIADAFAFQAKAMAAAWIAAAKQAAAPgFALQgCAFgFAEQgFADgGACQAHACAFADQAGADACAFQADAGACAHIACAhQAAAXgMAMQgFAGgJADQgJADgLAAgAlVBQIAYAAQALABAHgIQAFgGAAgOIAAgSQAAgIgCgHQgBgFgEgEQgGgHgPABIgTAAgAlVgOIARAAQANAAAHgFQAEgDABgFQACgGAAgIIAAgMQAAgNgFgHQgGgGgMgBIgVAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-10.1,73.2,20.3);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD8B6IAAifIg0CfIgXAAIAAjJIAUAAIAACWIAziWIAZAAIAADJgACJB6IgIgpIgzAAIgIApIgUAAIAmjJIAhAAIAnDJgAB+A+IgWhzIgXBzIAtAAgAgzB6IAAjJIAtAAQAWAAALAOQAFAGADAJQADAJgBAMIAAAYQAAAWgLAMQgFAHgKADQgIADgLAAIgTAAIAABQgAgbAVIATAAQALAAAGgFQAGgHAAgNIAAgbQAAgNgFgIQgGgGgKgBIgVAAgAiZB6IAAjJIBRAAIAAAUIg7AAIAAC1gAjFB6IAAifIg0CfIgXAAIAAjJIAUAAIAACWIAyiWIAaAAIAADJgADVheQgFgCgEgEQgJgHAAgOIAOAAQABAJAEADQAFADAHAAQAHAAAFgDQAFgDAAgJIAPAAQAAAOgJAHQgEAEgFACQgHACgHAAQgHAAgGgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-12.2,54.7,24.5);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zzzz();
	this.instance.setTransform(-54.2,-45.3,0.337,0.337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-45.3,108.5,90.6);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.xxxccxc();
	this.instance.setTransform(-91.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-13,183,26);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglFBQgIgJgEgMQgDgMAAgPIAAiKQAAgQADgMQAEgNAIgIQAGgJANgFQALgFANAAQAfAAAOATQAIAJADAMQADAMAAAQIAAAYIgcAAIAAgaQAAgSgHgKQgHgLgQAAQgOAAgIALQgIAKAAASIAACNQAAASAIALQAIAKAOAAQAQAAAHgKQAHgLAAgSIAAgiIAcAAIAAAhQAAAPgDAMQgDAMgIAJQgOATgfAAQgdAAgOgTgABcFRIAAkLIBvAAIAAAbIhQAAIAABbIBBAAIAAAbIhBAAIAABfIBQAAIAAAbgAjHFRIAAkLIA7AAQAQAAALAEQALADAHAIQAOAPAAAdIAAANQgBAVgGAOQgEAGgGAFQgGAEgJADQAKADAHAFQAHAFAEAHQAEAIACAJIACArQAAAegOAQQgIAIgLAEQgMAEgPAAgAipE2IAgAAQAPAAAIgJQAIgJAAgSIAAgYQAAgLgCgIQgCgIgFgEQgKgJgSAAIgaAAgAipC3IAWAAQASAAAJgHQAFgDACgIQADgHAAgKIAAgQQAAgSgHgIQgHgJgQAAIgdAAgACeA2IAAgiIAaAAIAAAigABuA2IAAgiIAbAAIAAAigAGGhHQgLgEgIgKQgIgJgDgMQgEgMAAgPIAAg4IgnAAIAAB4IgeAAIAAkLIAeAAIAAB5IAnAAIAAg4QAAgfAPgTQAIgIALgFQAMgFAPAAQAQAAALAFQAMAFAHAIQAPATAAAfIAACKQABAPgEAMQgEAMgIAJQgHAKgMAEQgLAFgQAAQgPAAgMgFgAGKktQgJAKABASIAACNQgBATAJAKQAGAKARAAQARAAAHgKQAIgKAAgTIAAiNQAAgSgIgKQgHgLgRAAQgRAAgGALgAnQhVQgHgJgEgMQgCgMAAgPIAAiKQAAgQACgMQAEgNAHgIQAIgJAMgFQALgFAPAAQAfAAAOATQAIAJAEAMQADAMAAAQIAAAYIgcAAIAAgaQAAgSgIgKQgHgLgQAAQgQAAgIALQgIAKAAASIAACNQAAATAIAKQAIAKAQAAQAQAAAHgKQAIgKAAgTIAAgiIAcAAIAAAhQAAAPgDAMQgEAMgIAJQgOATgfAAQgfAAgPgTgABuhEIAAgbQAKAAAFgDQAGgCADgFQAEgFAAgHIAJjbIBuAAIAAELIgfAAIAAjwIgyAAIgHCuQAAAQgEAMQgCANgGAIQgGAJgKAEQgKAFgPAAgAgdhFIAAkLIA6AAQAPAAAMAEQALADAGAIQAOAPAAAdIAAANQAAAVgHAOQgDAGgGAFQgHAEgIADQAJADAHAFQAIAFADAIQAFAHACAJIABArQAAAegOAQQgHAIgMAEQgMAEgPAAgAAAhgIAfAAQAQAAAHgJQAJgJgBgSIAAgYQAAgLgCgIQgCgIgFgEQgJgJgTAAIgZAAgAAAjfIAVAAQATAAAIgHQAFgDACgHQADgIAAgKIAAgQQAAgSgHgIQgHgJgQAAIgcAAgAhRhFIgKg2IhFAAIgKA2IgbAAIAzkLIArAAIAzELgAhgiUIgdiaIgeCaIA7AAgAkihFIAAjwIgyAAIAAgbICAAAIAAAbIgwAAIAADwg");
	this.shape.setTransform(4.1,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-30.7,95.8,68.1);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmnFWQgIgJgEgLQgDgMAAgPIAAiIQAAgPADgNQAEgMAIgJQAHgIALgFQALgFAPAAQAfAAAOASQAHAJAEAMQADANAAAPIAAAXIgcAAIAAgZQAAgSgHgKQgHgKgQAAQgQAAgHAKQgIAKAAASIAACLQAAASAIAKQAHAKAQAAQAQAAAHgKQAHgKAAgSIAAgiIAcAAIAAAhQAAAPgDAMQgEALgHAJQgOASgfAAQgeAAgOgSgAE4FnIAAgbQARAAAIgFQAJgGAEgPIAGgSIg9jBIAeAAIAsCdIAnidIAfAAIg5DNQgDAOgFAMQgFALgIAIQgHAHgMAEQgJADgNAAIgIAAgAD7FmIg5hyIgPAaIAABYIgeAAIAAkHIAeAAIAAB/IBGh/IAdAAIhCB4IBFCPgAACFmIAAkHIA7AAQAQAAALADQALAEAGAHQANAPAAAdIAAAMQAAAVgGAOQgDAGgGAFQgHAEgIADQAKADAGAEQAHAFAEAIQAEAHACAJIACAqQAAAegOAQQgHAIgMAEQgMAEgPAAgAAgFMIAfAAQAQAAAIgJQAHgKAAgRIAAgYQAAgKgCgJQgCgHgFgEQgJgJgTAAIgZAAgAAgDOIAWAAQASAAAJgHQAEgDACgHQADgHAAgLIAAgQQAAgRgHgIQgHgJgPABIgdAAgAgwFmIgJg1IhDAAIgKA1IgbAAIAykHIArAAIAyEHgAg+EXIgdiXIgdCXIA6AAgAj9FmIAAjsIgxAAIAAgbIB/AAIAAAbIgwAAIAADsgAkAgGIAAgkIhsAAIAAAkIgcAAIAAg+IARAAQAHgIACgJIANjcIBqAAIAADtIATAAIAAA+gAlPhrQAAAPgDAJQgDAIgFAHIBFAAIAAjSIgxAAgAhLgqIAAgaQAJAAAGgDQAFgCADgFQADgEABgHIAJjYIBqAAIAAEHIgeAAIAAjsIgwAAIgHCrQAAAQgDALQgDANgFAIQgGAIgLAFQgJAEgPAAgAFhgqIAAjRIhDDRIgfAAIAAkHIAaAAIAADFIBCjFIAhAAIAAEHgADLgqIgJg1IhDAAIgLA1IgaAAIAykHIArAAIAyEHgAC9h5IgdiXIgdCXIA6AAgAjKgqIAAkHIBsAAIAAAbIhPAAIAABaIBBAAIAAAaIhBAAIAABdIBPAAIAAAbgAEulEQgHgDgFgFQgLgKgBgRIATAAQAAALAGAEQAHAEAJAAQAJAAAGgEQAHgEAAgLIATAAQAAARgMAKQgFAFgHADQgIABgJAAQgKAAgHgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-36.1,87.9,72.2);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlJDNQhJghgtgkIliBfIDWjnQCPiZBzgyQDChVERAAQETAADDBVQDCBVAAB2QAAB3jCBWQjDBUkTAAQkRAAjChUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.2,-28.9,160.5,57.9);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.xxxccxc();
	this.instance.setTransform(-39.7,-5.6,0.435,0.435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-5.6,79.6,11.3);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.xxxccxc();
	this.instance.setTransform(-53.5,-19.4,0.585,0.585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-19.4,107,15.2);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vavavavv();
	this.instance.setTransform(-56.3,-19.5,0.481,0.481);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-19.5,112.7,39);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.xxxccxc();
	this.instance.setTransform(-91.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-13,183,26);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.yyy();
	this.instance.setTransform(35.5,-35.5,0.515,0.515,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.yyy();
	this.instance.setTransform(35.5,-35.5,0.515,0.515,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ttt();
	this.instance.setTransform(-35.5,-35.5,0.514,0.514);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ttt();
	this.instance.setTransform(-35.5,-35.5,0.514,0.514);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABaA9QgEgFgCgGQgCgGAAgJIAAgIIAPAAIAAAJQAAAKADAFQAFAFAIAAQAIAAAEgFQAEgFAAgKQAAgHgEgGIgIgLIgLgJIgLgIQgFgGgDgGQgEgIAAgKQAAgIABgGQADgGADgFQAIgJAPAAQAIAAAGACQAGADADAEQAIAKAAAPIAAAEIgPAAIAAgEQAAgJgEgGQgDgFgIAAQgIAAgFAFQgDAFAAAKQAAAHADAGQAEAGAFAFIALAJIALAJQAFAFAEAHQADAHAAAJQAAAJgBAGQgCAGgFAFQgHAJgQAAQgQAAgHgJgAARA9QgEgFgCgGQgCgGAAgJIAAgIIAPAAIAAAJQAAAKADAFQAEAFAIAAQAJAAAEgFQAEgFgBgKQAAgHgCgGIgJgLIgLgJIgMgIQgFgGgDgGQgDgIAAgKQAAgIABgGQACgGAEgFQAIgJAPAAQAIAAAGACQAGADADAEQAIAKAAAPIAAAEIgPAAIAAgEQAAgJgDgGQgEgFgIAAQgJAAgEAFQgDAFAAAKQAAAHADAGQAEAGAFAFIALAJIALAJQAFAFAEAHQAEAHgBAJQAAAJgBAGQgDAGgEAFQgHAJgQAAQgQAAgHgJgAgOBFIgFgcIgjAAIgGAcIgNAAIAaiJIAWAAIAZCJgAgWAbIgPhNIgPBNIAeAAgAiPBFIAAiJIAeAAQARABAHAIQADAFACAHQACAFAAAIIAAARQAAARgIAGQgDAEgHACQgGACgJAAIgMAAIAAA3gAh/AAIAMAAQAJAAAFgCQADgEAAgKIAAgTQAAgJgDgFQgEgEgIAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-7,29,14.1);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACnBFIgjhuIAABuIgOAAIAAiJIATAAIAhBiIAAhiIANAAIAACJgABXBFIAAiJIAQAAIAACJgAgdBFIAAiJIAPAAIAAB6IAmAAIAAAPgAhgBFIAAiJIAQAAIAAB6IAnAAIAAAPgAh7BFIgEgcIgjAAIgGAcIgOAAIAaiJIAWAAIAbCJgAiCAbIgPhNIgQBNIAfAAgAAjAHIAAgNIAlAAIAAANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-6.9,36.7,13.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0JD8IAAn3MAoTAAAIAAH3g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wsdfghserfhstfhwr();
	this.instance.setTransform(-61.5,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-51.5,123,103);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.www();
	this.instance.setTransform(-90.9,-18.3,0.34,0.228);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.9,-18.3,181.9,36.8);


(lib.top_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,123);


(lib.telo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,176);


(lib.stol_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stol();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,120);


(lib.predp_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.predp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,79);


(lib.kist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.qqq();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,46);


(lib.golova_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,71);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,167);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ72();
	this.instance.alpha = 0.309;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ72();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-16.7,61,33.5);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ62();
	this.instance_1.setTransform(2.5,38);
	this.instance_1.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-45.3,183,96.3);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ60();
	this.instance.setTransform(-1.9,-0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},13).wait(50).to({alpha:0},12).to({_off:true},1).wait(13));

	// Слой 1
	this.instance_1 = new lib.Символ59();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},24).wait(50).to({alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-36.1,87.9,72.2);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.setTransform(-180.1,93.7,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(-192.2,95.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.5,66.6,160.5,57.9);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ69();
	this.instance.setTransform(-122.2,35.8,1.809,1.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ66();
	this.instance_1.setTransform(-122.2,35.8,1.809,1.809);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-43,-12,86,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.9,15.1,155,45);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10,0,-9.9).s().p("AAbBlIAAigIgyCgIgYAAIAAjJIAUAAIAACWIAxiWIAaAAIAADJg");
	this.shape.setTransform(30.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,3.2,0,-3.1).s().p("AgMAMQgFgCgEgEQgIgGgBgNIAOAAQABAJAEADQAFABAGAAQAHAAAEgBQAFgDABgJIAOAAQAAANgJAGQgEAEgFACQgGACgHAAQgGAAgGgCg");
	this.shape_1.setTransform(30.2,-12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.3,0,-10.2).s().p("AgJBlIAAjJIATAAIAADJg");
	this.shape_2.setTransform(22.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.1,0,-10).s().p("AgrBlIAAjJIArAAQAXAAALANQAFAHADAJQACAJABALIAAAZQAAAYgMAKQgFAHgKADQgJADgKAAIgUAAIAABQgAgVAAIAUAAQALABAGgFQAGgGAAgPIAAgbQAAgOgFgGQgFgIgMAAIgVAAg");
	this.shape_3.setTransform(-7.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.8,0,-10.8).s().p("AgoBlIAAjJIBRAAIAAAUIg6AAIAABGIAvAAIAAASIgvAAIAABIIA6AAIAAAVg");
	this.shape_4.setTransform(-18,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.1,0,-10).s().p("AAYBlIAAi1IgvAAIAAC1IgXAAIAAjJIBdAAIAADJg");
	this.shape_5.setTransform(-29.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.3,0,-10.3).s().p("AgtBlIAAjJIAtAAQAKAAAJADQAJADAEAFQALAMgBAWIAAAKQAAAPgEALQgDAFgEAEQgGADgGACQAIACAFADQAFADADAFQADAGABAHIACAhQAAAXgLAMQgGAGgIADQgJADgMAAgAgWBQIAWAAQAMABAGgIQAGgGAAgOIAAgSQAAgIgCgHQgCgFgDgEQgHgHgMABIgUAAgAgWgOIARAAQAMAAAHgFQADgDABgFQADgGAAgIIAAgMQgBgNgFgHQgFgGgKgBIgWAAg");
	this.shape_6.setTransform(-45.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.8,0,-10.8).s().p("AgsBlIAAjJIAXAAIAABQIAUAAQALAAAJADQAIADAGAGQAFAGADAIQADAJAAAMIAAAZQAAAWgLAOQgFAHgIADQgJADgLAAgAgVBQIAVAAQALABAGgIQAFgGAAgOIAAgbQAAgPgGgGQgGgFgLAAIgUAAg");
	this.shape_7.setTransform(14.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFE59A","#FF9600","#FFE59A"],[0,0.51,1],0,10.8,0,-10.8).s().p("AgtBlIAAjJIAtAAQALAAAIADQAIADAGAFQAJAMABAWIAAAKQAAAPgGALQgCAFgFAEQgFADgGACQAHACAGADQAFADADAFQADAGABAHIACAhQAAAXgLAMQgFAGgKADQgJADgLAAgAgWBQIAWAAQAMABAGgIQAGgGAAgOIAAgSQAAgIgCgHQgBgFgEgEQgHgHgMABIgUAAgAgWgOIARAAQAMAAAHgFQADgDABgFQACgGAAgIIAAgMQAAgNgEgHQgGgGgKgBIgWAAg");
	this.shape_8.setTransform(3.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.instance = new lib.Символ68();
	this.instance.setTransform(30.2,-12.8);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-5,-3,10,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ67();
	this.instance_1.setTransform(30.1,0);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-7,-12,14,24);

	this.instance_2 = new lib.Символ65();
	this.instance_2.setTransform(-13.2,0);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-39,-12,77,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-16.3,92.1,32.2);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD991","#FF9600","#FFE59A"],[0,0.51,1],0,10.7,0,-10.7).s().p("AAgBlIgIgpIgxAAIgIApIgVAAIAnjJIAfAAIAnDJgAgWApIArAAIgVhzg");
	this.shape.setTransform(-4.2,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFD991","#FF9600","#FFE59A"],[0,0.51,1],0,11,0,-10.9).s().p("AgrBlIAAjJIArAAQAXAAALAOQAFAGADAJQACAJABAMIAAAYQAAAYgMAKQgFAHgKADQgJADgKAAIgUAAIAABQgAgVAAIAUAAQALAAAGgDQAGgHAAgPIAAgbQAAgNgFgIQgFgGgMgBIgVAAg");
	this.shape_1.setTransform(-15.4,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFD991","#FF9600","#FFE59A"],[0,0.51,1],0,10.2,0,-10.2).s().p("AgnBlIAAjJIBPAAIAAAUIg4AAIAAC1g");
	this.shape_2.setTransform(-26.1,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFD991","#FF9600","#FFE59A"],[0,0.51,1],0,10,0,-9.9).s().p("AAbBlIAAifIgyCfIgXAAIAAjJIATAAIAACWIAxiWIAZAAIAADJg");
	this.shape_3.setTransform(-37.2,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFD991","#FF9600","#FFE59A"],[0,0.51,1],0,9.5,0,-9.4).s().p("AAbBlIAAifIgyCfIgXAAIAAjJIATAAIAACWIAxiWIAaAAIAADJg");
	this.shape_4.setTransform(7.9,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFD991","#FF9600","#FFE59A"],[0,0.51,1],0,3.2,0,-3.1).s().p("AgMAMQgFgCgEgEQgIgGgBgNIAOAAQABAJAEADQAFABAGAAQAHAAAEgBQAFgDABgJIAOAAQAAANgJAGQgEAEgFACQgGACgHAAQgGAAgGgCg");
	this.shape_5.setTransform(8,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.setTransform(-14.7,0);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-29,-14,59,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-14.2,62,32);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 55
	this.instance = new lib.Символ55();
	this.instance.setTransform(90.1,-337.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-220.9},11).to({y:-230.7},2).wait(42).to({y:-240.5},3).to({y:-205.2,alpha:0},8).wait(23));

	// Символ 54
	this.instance_1 = new lib.Символ54();
	this.instance_1.setTransform(6.1,-337.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:-220.9},11).to({y:-230.7},2).wait(38).to({y:-240.5},3).to({y:-205.2,alpha:0},8).wait(25));

	// Символ 53
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(-64.6,-339.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({y:-223},11).to({y:-232.8},2).wait(34).to({y:-242.6},3).to({y:-207.3,alpha:0},8).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.6,-353.9,155,76.4);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance.setTransform(0,0,1.197,1.197);
	this.instance.alpha = 0.32;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.yyy();
	this.instance_1.setTransform(35.5,-35.5,0.515,0.515,90);

	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(0,0,1.197,1.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC01").s().p("ABaA9QgEgFgCgGQgCgGAAgJIAAgIIAPAAIAAAJQAAAKADAFQAFAFAIAAQAIAAAEgFQAEgFAAgKQAAgHgEgGIgIgLIgLgJIgLgIQgFgGgDgGQgEgIAAgKQAAgIABgGQADgGADgFQAIgJAPAAQAIAAAGACQAGADADAEQAIAKAAAPIAAAEIgPAAIAAgEQAAgJgEgGQgDgFgIAAQgIAAgFAFQgDAFAAAKQAAAHADAGQAEAGAFAFIALAJIALAJQAFAFAEAHQADAHAAAJQAAAJgBAGQgCAGgFAFQgHAJgQAAQgQAAgHgJgAARA9QgEgFgCgGQgCgGAAgJIAAgIIAPAAIAAAJQAAAKADAFQAEAFAIAAQAJAAAEgFQAEgFgBgKQAAgHgCgGIgJgLIgLgJIgMgIQgFgGgDgGQgDgIAAgKQAAgIABgGQACgGAEgFQAIgJAPAAQAIAAAGACQAGADADAEQAIAKAAAPIAAAEIgPAAIAAgEQAAgJgDgGQgEgFgIAAQgJAAgEAFQgDAFAAAKQAAAHADAGQAEAGAFAFIALAJIALAJQAFAFAEAHQAEAHgBAJQAAAJgBAGQgDAGgEAFQgHAJgQAAQgQAAgHgJgAgOBFIgFgcIgjAAIgGAcIgNAAIAaiJIAWAAIAZCJgAgWAbIgPhNIgPBNIAeAAgAiPBFIAAiJIAeAAQARABAHAIQADAFACAHQACAFAAAIIAAARQAAARgIAGQgDAEgHACQgGACgJAAIgMAAIAAA3gAh/AAIAMAAQAJAAAFgCQADgEAAgKIAAgTQAAgJgDgFQgEgEgIAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(0.3,0.6);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-16,-9,33,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,-7.4,34,19);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-42.5,85,85);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("ACnBFIgjhuIAABuIgOAAIAAiJIATAAIAhBiIAAhiIANAAIAACJgABXBFIAAiJIAQAAIAACJgAgdBFIAAiJIAPAAIAAB6IAmAAIAAAPgAhgBFIAAiJIAQAAIAAB6IAnAAIAAAPgAh7BFIgEgcIgjAAIgGAcIgOAAIAaiJIAWAAIAbCJgAiCAbIgPhNIgQBNIAfAAgAAjAHIAAgNIAlAAIAAANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(0.4,0.3);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-20,-9,41,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-7.6,41,19);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.setTransform(0,0,1.197,1.197);
	this.instance.alpha = 0.52;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.ttt();
	this.instance_1.setTransform(-35.5,-35.5,0.514,0.514);

	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(0,0,1.197,1.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:-3.9},0).wait(1).to({y:-5.6},0).wait(1).to({y:-7.1},0).wait(1).to({y:-8.5},0).wait(1).to({y:-9.7},0).wait(1).to({y:-10.8},0).wait(1).to({y:-11.8},0).wait(1).to({y:-12.7},0).wait(1).to({y:-13.5},0).wait(1).to({y:-14.2},0).wait(1).to({y:-14.9},0).wait(1).to({y:-15.5},0).wait(1).to({y:-16.1},0).wait(1).to({y:-16.6},0).wait(1).to({y:-17},0).wait(1).to({y:-17.4},0).wait(1).to({y:-17.8},0).wait(1).to({y:-18.1},0).wait(1).to({y:-18.4},0).wait(1).to({y:-18.6},0).wait(1).to({y:-18.8},0).wait(1).to({y:-19},0).wait(1).to({y:-19.2},0).wait(1).to({y:-19.4},0).wait(1).to({y:-19.5},0).wait(1).to({y:-19.7},0).wait(1).to({y:-19.9},0).wait(1).to({y:-20},0).wait(1).to({y:-18},0).wait(1).to({y:-16.2},0).wait(1).to({y:-14.6},0).wait(1).to({y:-13.1},0).wait(1).to({y:-11.7},0).wait(1).to({y:-10.5},0).wait(1).to({y:-9.4},0).wait(1).to({y:-8.5},0).wait(1).to({y:-7.6},0).wait(1).to({y:-6.8},0).wait(1).to({y:-6},0).wait(1).to({y:-5.4},0).wait(1).to({y:-4.7},0).wait(1).to({y:-4.2},0).wait(1).to({y:-3.7},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2.8},0).wait(1).to({y:-2.4},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.8},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1.3},0).wait(1).to({y:-1.1},0).wait(1).to({y:-0.9},0).wait(1).to({y:-0.8},0).wait(1).to({y:-0.6},0).wait(1).to({y:-0.4},0).wait(1).to({y:-0.3},0).wait(1).to({y:-0.1},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-51.5,123,103);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.setTransform(2.9,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-16.7,61,33.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_33 = function() {
		this.gotoAndPlay(28);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(7).call(this.frame_33).wait(1));

	// Слой 1 - копия
	this.instance = new lib.Символ21();
	this.instance.setTransform(-43.2,16.1,1,1.027,0,13.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:2.9,x:-40.7,y:14.5},0).wait(1).to({x:-41.2,y:12.3},0).wait(1).to({x:-41.9,y:9.7},0).wait(1).to({x:-42.5,y:7.4},0).wait(1).to({x:-42.9,y:5.7},0).wait(1).to({x:-43.2,y:4.6},0).wait(1).to({x:-43.3,y:3.8},0).wait(1).to({x:-43.5,y:3.3},0).wait(1).to({x:-43.6,y:2.8},0).wait(1).to({x:-43.7,y:2.3},0).wait(1).to({x:-43.9,y:1.7},0).wait(1).to({x:-44,y:1},0).wait(1).to({regX:0,x:-47.2,y:0},0).wait(1).to({regX:2.9,x:-43.9,y:1.6},0).wait(1).to({x:-43.4,y:3.8},0).wait(1).to({x:-42.7,y:6.3},0).wait(1).to({x:-42.1,y:8.7},0).wait(1).to({x:-41.7,y:10.4},0).wait(1).to({x:-41.4,y:11.5},0).wait(1).to({x:-41.3,y:12.2},0).wait(1).to({x:-41.1,y:12.8},0).wait(1).to({x:-41,y:13.3},0).wait(1).to({x:-40.9,y:13.8},0).wait(1).to({x:-40.7,y:14.3},0).wait(1).to({x:-40.6,y:15},0).wait(1).to({regX:0,x:-43.2,y:16.1},0).wait(2).to({regX:2.9,x:-42.6,y:6.7},0).wait(1).to({x:-43.6,y:2.9},0).wait(1).to({regX:0,x:-47.2,y:0},0).wait(1).to({regX:2.9,x:-42,y:9.3},0).wait(1).to({x:-41,y:13.1},0).wait(1).to({regX:0,x:-43.2,y:16.1},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:2.9,x:3.4,y:1},0).wait(1).to({x:4.2,y:2.4},0).wait(1).to({x:5.1,y:3.9},0).wait(1).to({x:5.9,y:5.4},0).wait(1).to({x:6.5,y:6.5},0).wait(1).to({x:6.8,y:7.1},0).wait(1).to({x:7.1,y:7.6},0).wait(1).to({x:7.3,y:8},0).wait(1).to({x:7.5,y:8.3},0).wait(1).to({x:7.6,y:8.6},0).wait(1).to({x:7.8,y:8.9},0).wait(1).to({x:8.1,y:9.4},0).wait(1).to({regX:0,x:5.5,y:10},0).wait(1).to({regX:2.9,x:7.9,y:9},0).wait(1).to({x:7.1,y:7.6},0).wait(1).to({x:6.2,y:6.1},0).wait(1).to({x:5.4,y:4.6},0).wait(1).to({x:4.8,y:3.5},0).wait(1).to({x:4.5,y:2.9},0).wait(1).to({x:4.2,y:2.4},0).wait(1).to({x:4,y:2},0).wait(1).to({x:3.8,y:1.7},0).wait(1).to({x:3.7,y:1.4},0).wait(1).to({x:3.5,y:1.1},0).wait(1).to({x:3.2,y:0.6},0).wait(1).to({regX:0,x:0,y:0},0).wait(2).to({regX:2.9,x:6.1,y:5.8},0).wait(1).to({x:7.4,y:8.2},0).wait(1).to({regX:0,x:5.5,y:10},0).wait(1).to({regX:2.9,x:5.2,y:4.2},0).wait(1).to({x:3.9,y:1.8},0).wait(1).to({regX:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.7,-16.7,108.2,49.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.karta = new lib.Символ20();
	this.karta.setTransform(77.3,10.9);

	this.timeline.addTween(cjs.Tween.get(this.karta).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(-38.3,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-7.3,240,51);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova_1();
	this.instance.setTransform(0,0,1,1,0,0,0,38,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-35.5,76,71);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo_1();
	this.instance.setTransform(0,0,1,1,0,0,0,69.5,88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-88,139,176);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.predp_1();
	this.instance.setTransform(0,0,1,1,0,0,0,13,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-39.5,26,79);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kist();
	this.instance.setTransform(26.2,20,1,1,0,0,0,61.2,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:35,regY:23,rotation:2.7,x:1,y:-1.2},0).wait(1).to({rotation:5.4,x:2,y:-2.3},0).wait(1).to({rotation:7.8,x:3,y:-3.3},0).wait(1).to({rotation:10.2,x:4,y:-4.2},0).wait(1).to({rotation:12.4,x:5,y:-5.1},0).wait(1).to({rotation:14.4,x:5.9,y:-5.8},0).wait(1).to({rotation:16.3,x:6.7,y:-6.6},0).wait(1).to({rotation:18.1,x:7.5,y:-7.1},0).wait(1).to({rotation:19.7,x:8.4,y:-7.6},0).wait(1).to({rotation:21.3,x:9.1,y:-8.1},0).wait(1).to({rotation:22.7,x:9.8,y:-8.5},0).wait(1).to({rotation:24,x:10.4,y:-8.9},0).wait(1).to({rotation:25.3,x:11.1,y:-9.2},0).wait(1).to({rotation:26.4,x:11.7,y:-9.5},0).wait(1).to({rotation:27.5,x:12.3,y:-9.8},0).wait(1).to({rotation:28.6,x:12.9,y:-10.1},0).wait(1).to({rotation:29.6,x:13.4,y:-10.3},0).wait(1).to({rotation:30.6,x:13.9,y:-10.5},0).wait(1).to({rotation:31.5,x:14.4,y:-10.7},0).wait(1).to({rotation:32.4,x:14.8,y:-10.9},0).wait(1).to({rotation:33.3,x:15.4,y:-11.1},0).wait(1).to({rotation:34.1,x:15.8,y:-11.2},0).wait(1).to({rotation:35,x:16.2,y:-11.4},0).wait(1).to({rotation:35.7,x:16.6,y:-11.5},0).wait(1).to({rotation:36.5,x:17,y:-11.6},0).wait(1).to({rotation:37.1,x:17.4,y:-11.7},0).wait(1).to({rotation:37.7,x:17.7,y:-11.8},0).wait(1).to({rotation:38.3,x:18.1,y:-11.9},0).wait(1).to({rotation:38.8,x:18.4,y:-12},0).wait(1).to({rotation:39.3,x:18.6,y:-12.1},0).wait(1).to({rotation:39.7,x:18.8},0).wait(1).to({rotation:40.1,x:19.1},0).wait(1).to({rotation:40.5,x:19.3,y:-12.2},0).wait(1).to({rotation:40.9,x:19.5},0).wait(1).to({rotation:41.2,x:19.7,y:-12.3},0).wait(1).to({rotation:41.5,x:19.9},0).wait(1).to({rotation:41.8,x:20.1},0).wait(1).to({rotation:42.1,x:20.2,y:-12.4},0).wait(1).to({rotation:42.4,x:20.4},0).wait(1).to({rotation:42.7,x:20.5},0).wait(1).to({rotation:43,x:20.7},0).wait(1).to({rotation:43.2,x:20.8,y:-12.5},0).wait(1).to({rotation:43.5,x:21},0).wait(1).to({rotation:43.7,x:21.1,y:-12.6},0).wait(1).to({rotation:44,x:21.3},0).wait(1).to({rotation:44.3,x:21.4},0).wait(1).to({rotation:44.5,x:21.6},0).wait(1).to({rotation:44.8,x:21.7},0).wait(1).to({regX:61.2,regY:43,rotation:45,x:26.2,y:20},0).wait(1).to({regX:35,regY:23,rotation:42.3,x:20.3,y:-12.4},0).wait(1).to({rotation:39.7,x:18.8,y:-12.1},0).wait(1).to({rotation:37.3,x:17.5,y:-11.8},0).wait(1).to({rotation:35,x:16.2,y:-11.3},0).wait(1).to({rotation:32.9,x:15.1,y:-11},0).wait(1).to({rotation:30.8,x:14,y:-10.6},0).wait(1).to({rotation:29,x:13,y:-10.2},0).wait(1).to({rotation:27.2,x:12.1,y:-9.7},0).wait(1).to({rotation:25.6,x:11.2,y:-9.3},0).wait(1).to({rotation:24,x:10.5,y:-8.9},0).wait(1).to({rotation:22.6,x:9.8,y:-8.5},0).wait(1).to({rotation:21.3,x:9.1,y:-8.1},0).wait(1).to({rotation:20.1,x:8.5,y:-7.7},0).wait(1).to({rotation:18.9,x:7.9,y:-7.4},0).wait(1).to({rotation:17.8,x:7.4,y:-7},0).wait(1).to({rotation:16.7,x:6.9,y:-6.6},0).wait(1).to({rotation:15.7,x:6.5,y:-6.3},0).wait(1).to({rotation:14.8,x:6,y:-5.9},0).wait(1).to({rotation:13.9,x:5.6,y:-5.6},0).wait(1).to({rotation:13,x:5.2,y:-5.3},0).wait(1).to({rotation:12.1,x:4.9,y:-5},0).wait(1).to({rotation:11.2,x:4.4,y:-4.7},0).wait(1).to({rotation:10.4,x:4.1,y:-4.4},0).wait(1).to({rotation:9.6,x:3.8,y:-4},0).wait(1).to({rotation:8.9,x:3.5,y:-3.8},0).wait(1).to({rotation:8.2,x:3.2,y:-3.5},0).wait(1).to({rotation:7.6,x:2.9,y:-3.2},0).wait(1).to({rotation:7,x:2.7,y:-3},0).wait(1).to({rotation:6.5,x:2.5,y:-2.8},0).wait(1).to({rotation:6,x:2.3,y:-2.6},0).wait(1).to({rotation:5.5,x:2.1,y:-2.4},0).wait(1).to({rotation:5.1,x:1.9,y:-2.2},0).wait(1).to({rotation:4.7,x:1.8,y:-2},0).wait(1).to({rotation:4.4,x:1.6,y:-1.9},0).wait(1).to({rotation:4,x:1.5,y:-1.7},0).wait(1).to({rotation:3.7,x:1.4,y:-1.6},0).wait(1).to({rotation:3.4,x:1.3,y:-1.5},0).wait(1).to({rotation:3.1,x:1.2,y:-1.3},0).wait(1).to({rotation:2.8,x:1,y:-1.2},0).wait(1).to({rotation:2.5,y:-1.1},0).wait(1).to({rotation:2.3,x:0.8,y:-0.9},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1.7,x:0.7,y:-0.7},0).wait(1).to({rotation:1.5,x:0.6,y:-0.6},0).wait(1).to({rotation:1.2,x:0.5,y:-0.5},0).wait(1).to({rotation:1,x:0.4,y:-0.4},0).wait(1).to({rotation:0.7,x:0.3,y:-0.3},0).wait(1).to({rotation:0.5,x:0.2,y:-0.2},0).wait(1).to({rotation:0.2,x:0.1,y:-0.1},0).wait(1).to({regX:61.2,regY:43,rotation:0,x:26.2,y:20},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-23,70,46);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.zzzz();
	this.instance.setTransform(-229.2,-92.7,0.386,0.29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(-164.2,-23);
	this.instance_1.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.stol_1();
	this.instance_2.setTransform(0,0,1,1,0,0,0,320,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-92.7,640,152.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.top_1();
	this.instance.setTransform(0,0,1,1,0,0,0,320,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-61.5,640,123);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_1();
	this.instance.setTransform(0,0,1,1,0,0,0,320,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-83.5,640,167);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(32.6,356.7,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-50.1,177.9,87.2);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(0,-0.1);

	this.instance_1 = new lib.Символ32();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(0,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-36.7},0).wait(1).to({y:-33},0).wait(1).to({y:-29.3},0).wait(1).to({y:-25.9},0).wait(1).to({y:-22.7},0).wait(1).to({y:-19.9},0).wait(1).to({y:-17.5},0).wait(1).to({y:-15.4},0).wait(1).to({y:-13.5},0).wait(1).to({y:-11.8},0).wait(1).to({y:-10.2},0).wait(1).to({y:-8.9},0).wait(1).to({y:-7.7},0).wait(1).to({y:-6.6},0).wait(1).to({y:-5.8},0).wait(1).to({y:-5},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.6},0).wait(1).to({y:-3},0).wait(1).to({y:-2.4},0).wait(1).to({y:-1.8},0).wait(1).to({y:-1.2},0).wait(1).to({y:-0.6},0).wait(1).to({y:0},0).wait(1).to({y:-3.6},0).wait(1).to({y:-7.2},0).wait(1).to({y:-10.8},0).wait(1).to({y:-14.1},0).wait(1).to({y:-17.2},0).wait(1).to({y:-20},0).wait(1).to({y:-22.4},0).wait(1).to({y:-24.5},0).wait(1).to({y:-26.3},0).wait(1).to({y:-28},0).wait(1).to({y:-29.6},0).wait(1).to({y:-31},0).wait(1).to({y:-32.2},0).wait(1).to({y:-33.3},0).wait(1).to({y:-34.2},0).wait(1).to({y:-35},0).wait(1).to({y:-35.7},0).wait(1).to({y:-36.4},0).wait(1).to({y:-37},0).wait(1).to({y:-37.6},0).wait(1).to({y:-38.2},0).wait(1).to({y:-38.8},0).wait(1).to({y:-39.3},0).wait(1).to({y:-39.9},0).wait(1).to({y:-40.5},0).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(0.5,45.6);
	this.instance_1.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.35,scaleY:1.35,alpha:1},24).to({scaleX:1,scaleY:1,alpha:0.32},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-76,79.6,127.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-42.5,85,85);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-88,139,176);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-35.5,76,71);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(-6.5,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(28.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-60,83,120);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-92.7,640,152.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-61.5,640,123);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-83.5,640,167);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(-0.1,-0.1);

	this.instance_1 = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.5,71,71);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-6.6},0).wait(1).to({y:-12.2},0).wait(1).to({y:-17},0).wait(1).to({y:-21.1},0).wait(1).to({y:-24.6},0).wait(1).to({y:-27.7},0).wait(1).to({y:-30.4},0).wait(1).to({y:-32.9},0).wait(1).to({y:-35.2},0).wait(1).to({y:-37.4},0).wait(1).to({y:-39.6},0).wait(1).to({y:-41.5},0).wait(1).to({y:-43.2},0).wait(1).to({y:-44.7},0).wait(1).to({y:-46},0).wait(1).to({y:-47.1},0).wait(1).to({y:-48.1},0).wait(1).to({y:-49},0).wait(1).to({y:-49.8},0).wait(1).to({y:-50.6},0).wait(1).to({y:-51.3},0).wait(1).to({y:-52},0).wait(1).to({y:-52.8},0).wait(1).to({y:-53.5},0).wait(1).to({y:-47.1},0).wait(1).to({y:-41.7},0).wait(1).to({y:-37},0).wait(1).to({y:-33},0).wait(1).to({y:-29.5},0).wait(1).to({y:-26.5},0).wait(1).to({y:-23.8},0).wait(1).to({y:-21.4},0).wait(1).to({y:-19.1},0).wait(1).to({y:-16.9},0).wait(1).to({y:-14.8},0).wait(1).to({y:-12.9},0).wait(1).to({y:-11.1},0).wait(1).to({y:-9.6},0).wait(1).to({y:-8.2},0).wait(1).to({y:-7.1},0).wait(1).to({y:-6.1},0).wait(1).to({y:-5.2},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.6},0).wait(1).to({y:-2.8},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.4},0).wait(1).to({y:-0.7},0).wait(1).to({y:0},0).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(-0.5,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.49,scaleY:0.49,alpha:0.32},24).to({scaleX:1,scaleY:1,alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-35.5,107,88.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(2.8,34.8,1,1,0,0,0,2.8,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:0.8,x:0.5,y:0},0).wait(1).to({rotation:1.6,x:1,y:-0.1},0).wait(1).to({rotation:2.4,x:1.5},0).wait(1).to({rotation:3.1,x:1.9},0).wait(1).to({rotation:3.8,x:2.3},0).wait(1).to({rotation:4.5,x:2.7},0).wait(1).to({rotation:5.1,x:3.1},0).wait(1).to({rotation:5.7,x:3.4},0).wait(1).to({rotation:6.2,x:3.8},0).wait(1).to({rotation:6.7,x:4.1},0).wait(1).to({rotation:7.2,x:4.4},0).wait(1).to({rotation:7.6,x:4.6},0).wait(1).to({rotation:8,x:4.9},0).wait(1).to({rotation:8.4,x:5.1,y:0},0).wait(1).to({rotation:8.8,x:5.4},0).wait(1).to({rotation:9.1,x:5.6},0).wait(1).to({rotation:9.5,x:5.8},0).wait(1).to({rotation:9.8,x:6},0).wait(1).to({rotation:10.1,x:6.2},0).wait(1).to({rotation:10.4,x:6.3,y:0.1},0).wait(1).to({rotation:10.7,x:6.5},0).wait(1).to({rotation:11,x:6.7},0).wait(1).to({rotation:11.3,x:6.9},0).wait(1).to({rotation:11.5,x:7},0).wait(1).to({rotation:11.7,x:7.1,y:0.2},0).wait(1).to({rotation:12,x:7.3},0).wait(1).to({rotation:12.2,x:7.4},0).wait(1).to({rotation:12.4,x:7.5},0).wait(1).to({rotation:12.5,x:7.6},0).wait(1).to({rotation:12.7,x:7.7},0).wait(1).to({rotation:12.9,x:7.8},0).wait(1).to({rotation:13,x:7.9,y:0.3},0).wait(1).to({rotation:13.2,x:8},0).wait(1).to({rotation:13.3,x:8.1},0).wait(1).to({rotation:13.4,x:8.2},0).wait(1).to({rotation:13.6},0).wait(1).to({rotation:13.7,x:8.3},0).wait(1).to({rotation:13.8,x:8.4},0).wait(1).to({rotation:13.9,x:8.5},0).wait(1).to({rotation:14},0).wait(1).to({rotation:14.1,x:8.6,y:0.4},0).wait(1).to({rotation:14.2,x:8.7},0).wait(1).to({rotation:14.4},0).wait(1).to({rotation:14.5,x:8.8},0).wait(1).to({rotation:14.6,x:8.9},0).wait(1).to({rotation:14.7},0).wait(1).to({rotation:14.8,x:9},0).wait(1).to({rotation:14.9},0).wait(1).to({regX:2.8,regY:34.8,rotation:15,x:2.8,y:34.8},0).wait(1).to({regX:0,regY:0,rotation:14.5,x:8.8,y:0.4},0).wait(1).to({rotation:14,x:8.5},0).wait(1).to({rotation:13.6,x:8.3},0).wait(1).to({rotation:13.1,x:8,y:0.3},0).wait(1).to({rotation:12.7,x:7.7},0).wait(1).to({rotation:12.3,x:7.5,y:0.2},0).wait(1).to({rotation:11.9,x:7.2},0).wait(1).to({rotation:11.5,x:7},0).wait(1).to({rotation:11.1,x:6.7},0).wait(1).to({rotation:10.7,x:6.5,y:0.1},0).wait(1).to({rotation:10.4,x:6.3},0).wait(1).to({rotation:10,x:6.1},0).wait(1).to({rotation:9.7,x:5.9},0).wait(1).to({rotation:9.4,x:5.7},0).wait(1).to({rotation:9,x:5.5,y:0},0).wait(1).to({rotation:8.7,x:5.3},0).wait(1).to({rotation:8.5,x:5.2},0).wait(1).to({rotation:8.2,x:5},0).wait(1).to({rotation:7.9,x:4.8},0).wait(1).to({rotation:7.7,x:4.7},0).wait(1).to({rotation:7.4,x:4.5},0).wait(1).to({rotation:7.2,x:4.4},0).wait(1).to({rotation:6.9,x:4.2},0).wait(1).to({rotation:6.7,x:4.1},0).wait(1).to({rotation:6.5,x:4},0).wait(1).to({rotation:6.3,x:3.8,y:-0.1},0).wait(1).to({rotation:6.1,x:3.7},0).wait(1).to({rotation:5.9,x:3.6},0).wait(1).to({rotation:5.7,x:3.5},0).wait(1).to({rotation:5.5,x:3.3},0).wait(1).to({rotation:5.3,x:3.2},0).wait(1).to({rotation:5.1,x:3.1},0).wait(1).to({rotation:4.9,x:3},0).wait(1).to({rotation:4.8,x:2.9},0).wait(1).to({rotation:4.6,x:2.8},0).wait(1).to({rotation:4.4,x:2.7},0).wait(1).to({rotation:4.3,x:2.6},0).wait(1).to({rotation:4.1,x:2.5},0).wait(1).to({rotation:4,x:2.4},0).wait(1).to({rotation:3.8,x:2.3},0).wait(1).to({rotation:3.7,x:2.2},0).wait(1).to({rotation:3.5,x:2.1},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:3.2,x:2},0).wait(1).to({rotation:3.1,x:1.9},0).wait(1).to({rotation:3,x:1.8},0).wait(1).to({rotation:2.9,x:1.7,y:0},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:2.6,x:1.6},0).wait(1).to({rotation:2.5,x:1.5},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:2.3,x:1.4},0).wait(2).to({rotation:2.2,x:1.3},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:2,x:1.2},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1.8,x:1.1},0).wait(1).to({rotation:1.7},0).wait(1).to({x:1},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.5,x:0.9},0).wait(2).to({rotation:1.4,x:0.8},0).wait(1).to({rotation:1.3},0).wait(1).to({rotation:1.2},0).wait(1).to({x:0.7},0).wait(1).to({rotation:1.1},0).wait(1).to({x:0.6},0).wait(1).to({rotation:1},0).wait(1).to({rotation:0.9},0).wait(1).to({x:0.5},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:0.7,x:0.4},0).wait(2).to({rotation:0.6},0).wait(1).to({rotation:0.5,x:0.3},0).wait(2).to({rotation:0.4},0).wait(1).to({x:0.2},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2,x:0.1},0).wait(2).to({rotation:0.1},0).wait(1).to({x:0},0).wait(1).to({regX:2.8,regY:34.8,rotation:0,x:2.8,y:34.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-35.5,76,71);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(36.5,53.3,1,1,0,0,0,36.5,53.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.4,regY:-15.4,rotation:-0.3,x:7.2,y:-15.3},0).wait(1).to({rotation:-0.5,x:6.8,y:-15.1},0).wait(1).to({rotation:-0.8,x:6.5,y:-15},0).wait(1).to({rotation:-1,x:6.3,y:-14.9},0).wait(1).to({rotation:-1.3,x:5.9,y:-14.7},0).wait(1).to({rotation:-1.5,x:5.7,y:-14.6},0).wait(1).to({rotation:-1.8,x:5.4,y:-14.5},0).wait(1).to({rotation:-2,x:5.1,y:-14.3},0).wait(1).to({rotation:-2.2,x:4.8,y:-14.2},0).wait(1).to({rotation:-2.5,x:4.5,y:-14.1},0).wait(1).to({rotation:-2.7,x:4.2,y:-14},0).wait(1).to({rotation:-2.9,x:4,y:-13.9},0).wait(1).to({rotation:-3.2,x:3.7,y:-13.7},0).wait(1).to({rotation:-3.4,x:3.5,y:-13.6},0).wait(1).to({rotation:-3.6,x:3.2,y:-13.4},0).wait(1).to({rotation:-3.8,x:2.9,y:-13.3},0).wait(1).to({rotation:-4,x:2.7,y:-13.2},0).wait(1).to({rotation:-4.2,x:2.5,y:-13.1},0).wait(1).to({rotation:-4.5,x:2.2,y:-12.9},0).wait(1).to({rotation:-4.7,x:2,y:-12.8},0).wait(1).to({rotation:-4.9,x:1.7,y:-12.7},0).wait(1).to({rotation:-5.1,x:1.5,y:-12.6},0).wait(1).to({rotation:-5.3,x:1.3,y:-12.5},0).wait(1).to({rotation:-5.4,x:1.1,y:-12.4},0).wait(1).to({rotation:-5.6,x:0.8,y:-12.3},0).wait(1).to({rotation:-5.8,x:0.6,y:-12.1},0).wait(1).to({rotation:-6,x:0.4,y:-11.9},0).wait(1).to({rotation:-6.2,x:0.2},0).wait(1).to({rotation:-6.4,x:0,y:-11.7},0).wait(1).to({rotation:-6.5,x:-0.2},0).wait(1).to({rotation:-6.7,x:-0.4,y:-11.5},0).wait(1).to({rotation:-6.9,x:-0.6},0).wait(1).to({rotation:-7,x:-0.7,y:-11.3},0).wait(1).to({rotation:-7.2,x:-0.9},0).wait(1).to({rotation:-7.4,x:-1.1,y:-11.1},0).wait(1).to({rotation:-7.5,x:-1.3,y:-11},0).wait(1).to({rotation:-7.7,x:-1.4,y:-10.9},0).wait(1).to({rotation:-7.8,x:-1.6,y:-10.8},0).wait(1).to({rotation:-8,x:-1.8,y:-10.7},0).wait(1).to({rotation:-8.1,x:-1.9,y:-10.6},0).wait(1).to({rotation:-8.3,x:-2.1,y:-10.5},0).wait(1).to({rotation:-8.4,x:-2.3},0).wait(1).to({rotation:-8.5,x:-2.5,y:-10.4},0).wait(1).to({rotation:-8.7,x:-2.6,y:-10.2},0).wait(1).to({rotation:-8.8,x:-2.7,y:-10.1},0).wait(1).to({rotation:-8.9,x:-2.9,y:-10},0).wait(1).to({rotation:-9.1,x:-3,y:-9.9},0).wait(1).to({rotation:-9.2,x:-3.1},0).wait(1).to({rotation:-9.3,x:-3.3,y:-9.8},0).wait(1).to({rotation:-9.5,x:-3.4,y:-9.7},0).wait(1).to({rotation:-9.6,x:-3.5},0).wait(1).to({rotation:-9.7,x:-3.7,y:-9.6},0).wait(1).to({rotation:-9.8,x:-3.8,y:-9.4},0).wait(1).to({rotation:-9.9,x:-3.9},0).wait(1).to({rotation:-10,x:-4.1,y:-9.3},0).wait(1).to({rotation:-10.2,x:-4.2,y:-9.2},0).wait(1).to({rotation:-10.3,x:-4.3,y:-9.1},0).wait(1).to({rotation:-10.4,x:-4.4},0).wait(1).to({rotation:-10.5,x:-4.5,y:-9},0).wait(1).to({rotation:-10.6,x:-4.7,y:-8.9},0).wait(1).to({rotation:-10.7,x:-4.8,y:-8.8},0).wait(1).to({rotation:-10.8,x:-4.9},0).wait(1).to({rotation:-10.9,x:-5,y:-8.7},0).wait(1).to({rotation:-11,x:-5.1,y:-8.6},0).wait(1).to({rotation:-11.1,x:-5.2,y:-8.5},0).wait(1).to({rotation:-11.2,x:-5.3},0).wait(1).to({rotation:-11.3,x:-5.4,y:-8.4},0).wait(1).to({rotation:-11.4,x:-5.6,y:-8.3},0).wait(1).to({rotation:-11.5,y:-8.2},0).wait(1).to({rotation:-11.6,x:-5.8},0).wait(1).to({rotation:-11.7,y:-8.1},0).wait(1).to({rotation:-11.8,x:-5.9,y:-8},0).wait(1).to({rotation:-11.9,x:-6,y:-7.9},0).wait(1).to({rotation:-12,x:-6.1},0).wait(1).to({rotation:-12.1,x:-6.2,y:-7.8},0).wait(1).to({x:-6.3,y:-7.7},0).wait(1).to({rotation:-12.2,x:-6.4},0).wait(1).to({rotation:-12.3,x:-6.5},0).wait(1).to({rotation:-12.4,x:-6.6,y:-7.6},0).wait(1).to({regX:36.6,regY:53.3,rotation:-12.5,x:36.6,y:53.3},0).wait(1).to({regX:7.4,regY:-15.4,rotation:-11.8,x:-6,y:-8},0).wait(1).to({rotation:-11.1,x:-5.3,y:-8.5},0).wait(1).to({rotation:-10.4,x:-4.5,y:-9},0).wait(1).to({rotation:-9.8,x:-3.9,y:-9.4},0).wait(1).to({rotation:-9.2,x:-3.2,y:-9.9},0).wait(1).to({rotation:-8.7,x:-2.6,y:-10.2},0).wait(1).to({rotation:-8.2,x:-2,y:-10.6},0).wait(1).to({rotation:-7.7,x:-1.5,y:-10.9},0).wait(1).to({rotation:-7.2,x:-1,y:-11.3},0).wait(1).to({rotation:-6.8,x:-0.5,y:-11.5},0).wait(1).to({rotation:-6.4,x:0,y:-11.7},0).wait(1).to({rotation:-6,x:0.4,y:-12},0).wait(1).to({rotation:-5.6,x:0.8,y:-12.3},0).wait(1).to({rotation:-5.3,x:1.2,y:-12.5},0).wait(1).to({rotation:-5,x:1.5,y:-12.6},0).wait(1).to({rotation:-4.7,x:1.9,y:-12.8},0).wait(1).to({rotation:-4.4,x:2.2,y:-13},0).wait(1).to({rotation:-4.1,x:2.6,y:-13.1},0).wait(1).to({rotation:-3.9,x:2.9,y:-13.3},0).wait(1).to({rotation:-3.6,x:3.2,y:-13.4},0).wait(1).to({rotation:-3.4,x:3.4,y:-13.6},0).wait(1).to({rotation:-3.1,x:3.7,y:-13.7},0).wait(1).to({rotation:-2.9,x:3.9,y:-13.9},0).wait(1).to({rotation:-2.7,x:4.2,y:-14},0).wait(1).to({rotation:-2.5,x:4.4,y:-14.1},0).wait(1).to({rotation:-2.4,x:4.6,y:-14.2},0).wait(1).to({rotation:-2.2,x:4.8,y:-14.3},0).wait(1).to({rotation:-2.1,x:5},0).wait(1).to({rotation:-1.9,x:5.1,y:-14.4},0).wait(1).to({rotation:-1.8,x:5.2,y:-14.5},0).wait(1).to({rotation:-1.7,x:5.4},0).wait(1).to({rotation:-1.6,x:5.5,y:-14.6},0).wait(1).to({rotation:-1.5,x:5.6},0).wait(1).to({rotation:-1.4,x:5.8,y:-14.7},0).wait(1).to({rotation:-1.3,x:5.9},0).wait(1).to({rotation:-1.2,x:6,y:-14.8},0).wait(1).to({rotation:-1.1,x:6.1},0).wait(1).to({rotation:-1,y:-14.9},0).wait(1).to({x:6.3},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-0.8,x:6.5,y:-15},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-0.6,x:6.7,y:-15.1},0).wait(1).to({rotation:-0.5,x:6.8},0).wait(1).to({rotation:-0.4,x:6.9,y:-15.2},0).wait(1).to({x:7},0).wait(1).to({rotation:-0.3,x:7.1,y:-15.3},0).wait(1).to({rotation:-0.2,x:7.2},0).wait(1).to({rotation:-0.1,x:7.3},0).wait(1).to({regX:36.5,regY:53.3,rotation:0,x:36.5,y:53.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-60,83,120);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ14();
	this.instance.setTransform(-54,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(26,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 10
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(-5,-75.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-111.2,191,224.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-111.2,191,224.8);


(lib.Символ26 = function(mode,startPosition,loop) {
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

	// Слой 13
	this.instance = new lib.Символ61();
	this.instance.setTransform(201.6,69.5,1.099,1.099);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:191.8,y:59.7},2).to({x:245.7,y:103.8,alpha:0},2).to({_off:true},1).wait(10).to({_off:false},0).to({x:191.8,y:59.7,alpha:1},2).to({x:201.6,y:69.5},2).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(290.6,-223.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({alpha:1},6).wait(1).to({alpha:0},6).to({_off:true},1).wait(3));

	// Слой 9
	this.instance_2 = new lib.Символ70();
	this.instance_2.setTransform(181,-70.3,1,1,0,0,0,24.2,141.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-40.9},3).to({y:-271.2},6).wait(1).to({y:-40.9},6).to({y:-70.3},3).wait(1));

	// Символ 31
	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(225.4,226.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:67.7},6).to({y:78.7},3).wait(1).to({y:67.7},3).to({y:226.3},6).wait(1));

	// Символ 27
	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(138.3,226.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:49.2},6).to({y:78.7},3).wait(1).to({y:49.2},3).to({y:226.3},6).wait(1));

	// Символ 23
	this.instance_5 = new lib.Символ23();
	this.instance_5.setTransform(-208.9,118.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:98.5},3).to({y:278.6},6).wait(1).to({y:98.5},6).to({y:118.5},3).wait(1));

	// karti
	this.karti = new lib.Символ18();
	this.karti.setTransform(-2.7,81.8);

	this.timeline.addTween(cjs.Tween.get(this.karti).to({scaleX:1.32,scaleY:1.32},6).to({scaleX:1.16,scaleY:1.16},3).wait(1).to({scaleX:1.32,scaleY:1.32},3).to({scaleX:1,scaleY:1},6).wait(1));

	// Символ 6
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(0,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.2,scaleY:1.2,y:94.7},6).to({scaleX:1.13,scaleY:1.13,y:88.3},3).wait(1).to({scaleX:1.2,scaleY:1.2,y:94.7},3).to({scaleX:1,scaleY:1,y:76},6).wait(1));

	// Символ 12
	this.instance_7 = new lib.Символ12();
	this.instance_7.setTransform(-23.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.2,scaleY:1.2,x:-28.2,y:-52.3},6).to({scaleX:1.13,scaleY:1.13,x:-26.6,y:-50.3},3).wait(1).to({scaleX:1.2,scaleY:1.2,x:-28.2,y:-52.3},3).to({scaleX:1,scaleY:1,x:-23.5,y:-46.5},6).wait(1));

	// Символ 4
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(0,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.2,scaleY:1.2,y:-126.7},6).to({scaleX:1.13,scaleY:1.13,y:-120.5},3).wait(1).to({scaleX:1.2,scaleY:1.2,y:-126.7},3).to({scaleX:1,scaleY:1,y:-108.5},6).wait(1));

	// Символ 2
	this.instance_9 = new lib.Символ2();
	this.instance_9.setTransform(0,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.1,scaleY:1.1,y:-39.5},3).to({scaleX:1.2,scaleY:1.2,y:-41.5},3).to({scaleX:1.13,scaleY:1.13,y:-40.1},3).wait(1).to({scaleX:1.2,scaleY:1.2,y:-41.5},3).to({scaleX:1,scaleY:1,y:-37.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-261.9,640,541.3);


// stage content:



(lib.poker600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 600 * 2;
		stage.canvas.height = 300 * 2;
		stage.canvas.style.width = '600px';
		stage.canvas.style.height = '300px';
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(11);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.kartabtn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.karti.karta.gotoAndPlay(28);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.kartabtn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.karti.karta.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dffd
	this.instance = new lib.Символ43();
	this.instance.setTransform(87.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 12
	this.kartabtn = new lib.Символ24();
	this.kartabtn.setTransform(247.8,254.8,0.708,1.209);
	new cjs.ButtonHelper(this.kartabtn, 0, 1, 2, false, new lib.Символ24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.kartabtn).wait(1));

	// Слой 10
	this.main = new lib.Символ26();
	this.main.setTransform(325.5,166.5,1.02,1.02);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299,49.2,653,552.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
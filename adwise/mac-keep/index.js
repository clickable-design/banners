(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bot.png?1467382939256", id:"bot"},
		{src:"images/city.png?1467382939256", id:"city"},
		{src:"images/forrez_031.png?1467382939256", id:"forrez_031"},
		{src:"images/forrez_05.png?1467382939256", id:"forrez_05"},
		{src:"images/forrez_06.png?1467382939256", id:"forrez_06"},
		{src:"images/forrez_08.png?1467382939256", id:"forrez_08"},
		{src:"images/forrez_11.png?1467382939256", id:"forrez_11"},
		{src:"images/forrez_17.png?1467382939256", id:"forrez_17"},
		{src:"images/forrez_22.png?1467382939256", id:"forrez_22"},
		{src:"images/forrez_25.png?1467382939256", id:"forrez_25"},
		{src:"images/forrez_30.png?1467382939256", id:"forrez_30"}
	]
};



// symbols:



(lib.bot = function() {
	this.initialize(img.bot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,383);


(lib.city = function() {
	this.initialize(img.city);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,345);


(lib.forrez_031 = function() {
	this.initialize(img.forrez_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,157);


(lib.forrez_05 = function() {
	this.initialize(img.forrez_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,119);


(lib.forrez_06 = function() {
	this.initialize(img.forrez_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,120);


(lib.forrez_08 = function() {
	this.initialize(img.forrez_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,100);


(lib.forrez_11 = function() {
	this.initialize(img.forrez_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,89);


(lib.forrez_17 = function() {
	this.initialize(img.forrez_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,15);


(lib.forrez_22 = function() {
	this.initialize(img.forrez_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,147);


(lib.forrez_25 = function() {
	this.initialize(img.forrez_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,81);


(lib.forrez_30 = function() {
	this.initialize(img.forrez_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,730,45);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.city();
	this.instance.setTransform(0,0,1.104,1.104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,698,381.1);


(lib.Символ31копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAzA5IglAHIgmAFIgDgOIADgCQAFgEAHgMQAEgIAIgXIggAAIAAgOIApAAIAAgYIghAAIAAgQIAhAAIAAgXIARAAIAAAXIAnAAIAAAQIgnAAIAAAYIArAAIAAAOIgzAAIgMAbIgJASIAvgIIgMgXIAQgEIANAXIALAaIgQAHgAhGBAIANgbIAMgcIAOAGQgOAngIARgAg6gKIgNgNIALgLQASAQAGAIIgMAKIgKgKgAg1gvIgPgMIAMgLQATAPAHAIIgMAMIgLgMg");
	this.shape.setTransform(197.4,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhFA+QAJgHAMgNQAGgHAGgMIAHgSQACgJAAgLIABgTIgrAAIAAgPIBCAAIgKgRIANgHQAJAOADAKIA6AAIAAAPIhQAAIgBAXIA/AAIgBApIgDAXIgEAIIgFAGQgEACgDABQgEABgEAAIgTAAIgFgPIAWABQAEAAADgEQADgDABgHIACgoIgvAAIgGARQgCAIgFAIQgHANgGAHQgMAMgHAGg");
	this.shape_1.setTransform(181.7,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAAArQAHgCAOgFQAKgEAHgFIAFgGIAEgGQACgGABgKIgBgJIgDgIQgCgEgDgDIgGgHQgGgEgHgDQgGgCgIgBIgDAdIgFAXIgFARIgGAJIgGAHIgHADIgIABQgQAAgJgMQgEgGgCgIQgDgGAAgJQAAgGACgFIADgLIAGgLIAIgJQAFgGAGgEIAMgGQAGgDAIgBQAHgCAGAAIANABIAMAEIALAEIAJAHIAIAJIAGAJIADALQACAGAAAGQAAAFgCAGIgDALQgCAGgDAEQgDAFgFADQgLAIgIAEQgRAFgKACgAghgcIgHAHIgFAJIgDAJIgBAJQAAAGACAFQABAEACAFIAFAEQADACAEAAQANAAAIglIAFgkQgPACgMALg");
	this.shape_2.setTransform(165.9,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag1A6QAKgFASgLIAMgJIAKgLIAOgWQAEgIAHgUIhcAAIAAgPIBoAAIAJAGQgHAagFAKIgIAOIgJAOIgLANQgEAHgIAGIgPAKQgIAFgKAEgAAvgmIgFgEIgEgGIgBgGIABgGIAEgGIAFgEIAHgBIAHABIAFAEQADADABADQABADAAADQAAADgBADQgBADgDADIgFAEIgHABIgHgBgAAwg7QgCACAAADQAAADACACQADACADAAQADAAACgCQADgCAAgDQAAgDgDgCQgCgCgDAAQgDAAgDACg");
	this.shape_3.setTransform(150.8,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgcAhIAOgFIAMgHIAIgIIAJgKQAEgEAHgOIAIgbIARADQgHAhgPATQgRAXgeALgAgygeIAOgIIAVAjIgNAGIgWghgAgWgmIANgIIAKARIAKARIgMAIQgGgMgPgWg");
	this.shape_4.setTransform(134.4,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgzAvQAKgFAIgGQAHgGAEgGQAFgIACgIQADgIgBgKIAAgWIAQAAIAAAWQAAAYgIARIgHAJIgIAHQgMAKgIAEgAAJgIQAUgRAKgSIhlAAIAAgRIB1AAIAJAIIgSAeIgLAOIgOAJg");
	this.shape_5.setTransform(119,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag4AuIASgEIARgIIAPgJIANgKIANgMIALgMIAJgPIAIgPIARAGIgJASIgKAPIgMAOIgNANIgPAMIgPAKIgTAHIgUAGgAgpghIgXgNIAJgPIAYAOIAaARIgLANIgZgQg");
	this.shape_6.setTransform(103,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag7AIIAAgPIB3AAIAAAPg");
	this.shape_7.setTransform(87.2,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgWAvIANgDIAKgFIAJgHIAHgIQAEgFAFgLQACgHABgNIAAgyIARAAIAAAzIgBANIgDAMIgEAMIgHAKQgQAUgdAHgAgtAPIAAhKIARAAIAABKg");
	this.shape_8.setTransform(71.4,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgmAzQALgDARgJQAIgGAMgLQAWgWAHgdIguAAIgHAKIgOAQQgIAGgKAHIgMgKIARgOIANgPQAHgJAEgJQAFgJADgJIAPAEIgGAQIAxAAIAKAFQgBAKgDAJIgGASIgJANIgKAPIgMANIgOALIgOAKIgSAIg");
	this.shape_9.setTransform(55.1,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("Ag7AkIgDgfQAAgJADgYQABgLAGgZIARAEQgGAWgBALIgCAgQABATABAJIAHAaIgPAGQgHgTgCgKgAACA4QgIgCgGgDQgIgDgDgGQgDgFgBgHQABgHACgHIAIgQIAQAGIgHANQgCAFAAAFQAAADACACQADADAEACIALACIAPAAQARAAASgCIABARIgkACQgNAAgLgCgAgZgsQAogDAqAAIgBARIhOACg");
	this.shape_10.setTransform(40.4,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhGA+QALgSAJgFIAAgrIgUAAIAAgPIAkAAIAAA7IABACQAGAGAFADQAEACAFAAIANACIAdAAIAZAAIASgBIgEAQIglAAIgcgBQgQAAgGgCQgGgBgDgDIgIgHQgDgDgDAAQgDAAgEAFIgKAPgAAiAyIgDgKIgfAAIAAgiIAOAAIAAgGIgRAAIAAgNIARAAIAAgIIgWAAIAABGIgPAAIAAhUIAUAAIgGgJIAIgDIgZAAIAAgPIAmAAIgEgHIARgDIAEAKIApAAIAAAPIgWAAIAGACIgHAKIATAAIAABHQAAAHgDADQgEAEgHAAgAAcAGIAQAAIAAAfIADAAQAFAAAAgEIAAg2IgYAAIAAAIIASAAIAAANIgSAAgAAKAcIAVAAIAAgKIgVAAgAALgjIATAAIAHgMIghAAQAEAGADAGgAg2guIgOgOIALgKQATAQAGAJIgLALIgLgMg");
	this.shape_11.setTransform(24.2,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAxA8QgHgFgFgGIgKgOIgIgPQgDAIgEAIQgEAIgFAGIgJAMQgHAFgHAEIgKgNIANgIIAKgKIAHgNQADgHACgIIgaAAIAAgOIAdAAQACgJAAgKIAAgNIgZAAIAAgPIAZAAIAAgWIAQAAIAAAWIAhAAIAAAvIAKAAIAAAOIgmAAIAIAOIAJAMIAMALIAOAKIgMANIgNgMgAAagaIgCAYIATAAIAAggIgRAAgAgzBIIAAiPIAQAAIAAAfIALgFIAMAjIgOADQgCgKgHgVIAABugAhJAAQADgIABgLIACgVIAMABQAAAMgBAKIgEAVg");
	this.shape_12.setTransform(8.4,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.9,23.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#049ED4").s().p("AAzA5IglAHIgmAFIgDgOIADgCQAFgEAHgMQAEgIAIgXIggAAIAAgOIApAAIAAgYIghAAIAAgQIAhAAIAAgXIARAAIAAAXIAnAAIAAAQIgnAAIAAAYIArAAIAAAOIgzAAIgMAbIgJASIAvgIIgMgXIAQgEIANAXIALAaIgQAHgAhGBAIANgbIAMgcIAOAGQgOAngIARgAg6gKIgNgNIALgLQASAQAGAIIgMAKIgKgKgAg1gvIgPgMIAMgLQATAPAHAIIgMAMIgLgMg");
	this.shape.setTransform(197.4,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#049ED4").s().p("AhFA+QAJgHAMgNQAGgHAGgMIAHgSQACgJAAgLIABgTIgrAAIAAgPIBCAAIgKgRIANgHQAJAOADAKIA6AAIAAAPIhQAAIgBAXIA/AAIgBApIgDAXIgEAIIgFAGQgEACgDABQgEABgEAAIgTAAIgFgPIAWABQAEAAADgEQADgDABgHIACgoIgvAAIgGARQgCAIgFAIQgHANgGAHQgMAMgHAGg");
	this.shape_1.setTransform(181.7,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#049ED4").s().p("AAAArQAHgCAOgFQAKgEAHgFIAFgGIAEgGQACgGABgKIgBgJIgDgIQgCgEgDgDIgGgHQgGgEgHgDQgGgCgIgBIgDAdIgFAXIgFARIgGAJIgGAHIgHADIgIABQgQAAgJgMQgEgGgCgIQgDgGAAgJQAAgGACgFIADgLIAGgLIAIgJQAFgGAGgEIAMgGQAGgDAIgBQAHgCAGAAIANABIAMAEIALAEIAJAHIAIAJIAGAJIADALQACAGAAAGQAAAFgCAGIgDALQgCAGgDAEQgDAFgFADQgLAIgIAEQgRAFgKACgAghgcIgHAHIgFAJIgDAJIgBAJQAAAGACAFQABAEACAFIAFAEQADACAEAAQANAAAIglIAFgkQgPACgMALg");
	this.shape_2.setTransform(165.9,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#049ED4").s().p("Ag1A6QAKgFASgLIAMgJIAKgLIAOgWQAEgIAHgUIhcAAIAAgPIBoAAIAJAGQgHAagFAKIgIAOIgJAOIgLANQgEAHgIAGIgPAKQgIAFgKAEgAAvgmIgFgEIgEgGIgBgGIABgGIAEgGIAFgEIAHgBIAHABIAFAEQADADABADQABADAAADQAAADgBADQgBADgDADIgFAEIgHABIgHgBgAAwg7QgCACAAADQAAADACACQADACADAAQADAAACgCQADgCAAgDQAAgDgDgCQgCgCgDAAQgDAAgDACg");
	this.shape_3.setTransform(150.8,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#049ED4").s().p("AgcAhIAOgFIAMgHIAIgIIAJgKQAEgEAHgOIAIgbIARADQgHAhgPATQgRAXgeALgAgygeIAOgIIAVAjIgNAGIgWghgAgWgmIANgIIAKARIAKARIgMAIQgGgMgPgWg");
	this.shape_4.setTransform(134.4,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#049ED4").s().p("AgzAvQAKgFAIgGQAHgGAEgGQAFgIACgIQADgIgBgKIAAgWIAQAAIAAAWQAAAYgIARIgHAJIgIAHQgMAKgIAEgAAJgIQAUgRAKgSIhlAAIAAgRIB1AAIAJAIIgSAeIgLAOIgOAJg");
	this.shape_5.setTransform(119,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#049ED4").s().p("Ag4AuIASgEIARgIIAPgJIANgKIANgMIALgMIAJgPIAIgPIARAGIgJASIgKAPIgMAOIgNANIgPAMIgPAKIgTAHIgUAGgAgpghIgXgNIAJgPIAYAOIAaARIgLANIgZgQg");
	this.shape_6.setTransform(103,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#049ED4").s().p("Ag7AIIAAgPIB3AAIAAAPg");
	this.shape_7.setTransform(87.2,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#049ED4").s().p("AgWAvIANgDIAKgFIAJgHIAHgIQAEgFAFgLQACgHABgNIAAgyIARAAIAAAzIgBANIgDAMIgEAMIgHAKQgQAUgdAHgAgtAPIAAhKIARAAIAABKg");
	this.shape_8.setTransform(71.4,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#049ED4").s().p("AgmAzQALgDARgJQAIgGAMgLQAWgWAHgdIguAAIgHAKIgOAQQgIAGgKAHIgMgKIARgOIANgPQAHgJAEgJQAFgJADgJIAPAEIgGAQIAxAAIAKAFQgBAKgDAJIgGASIgJANIgKAPIgMANIgOALIgOAKIgSAIg");
	this.shape_9.setTransform(55.1,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#049ED4").s().p("Ag7AkIgDgfQAAgJADgYQABgLAGgZIARAEQgGAWgBALIgCAgQABATABAJIAHAaIgPAGQgHgTgCgKgAACA4QgIgCgGgDQgIgDgDgGQgDgFgBgHQABgHACgHIAIgQIAQAGIgHANQgCAFAAAFQAAADACACQADADAEACIALACIAPAAQARAAASgCIABARIgkACQgNAAgLgCgAgZgsQAogDAqAAIgBARIhOACg");
	this.shape_10.setTransform(40.4,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#049ED4").s().p("AhGA+QALgSAJgFIAAgrIgUAAIAAgPIAkAAIAAA7IABACQAGAGAFADQAEACAFAAIANACIAdAAIAZAAIASgBIgEAQIglAAIgcgBQgQAAgGgCQgGgBgDgDIgIgHQgDgDgDAAQgDAAgEAFIgKAPgAAiAyIgDgKIgfAAIAAgiIAOAAIAAgGIgRAAIAAgNIARAAIAAgIIgWAAIAABGIgPAAIAAhUIAUAAIgGgJIAIgDIgZAAIAAgPIAmAAIgEgHIARgDIAEAKIApAAIAAAPIgWAAIAGACIgHAKIATAAIAABHQAAAHgDADQgEAEgHAAgAAcAGIAQAAIAAAfIADAAQAFAAAAgEIAAg2IgYAAIAAAIIASAAIAAANIgSAAgAAKAcIAVAAIAAgKIgVAAgAALgjIATAAIAHgMIghAAQAEAGADAGgAg2guIgOgOIALgKQATAQAGAJIgLALIgLgMg");
	this.shape_11.setTransform(24.2,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#049ED4").s().p("AAxA8QgHgFgFgGIgKgOIgIgPQgDAIgEAIQgEAIgFAGIgJAMQgHAFgHAEIgKgNIANgIIAKgKIAHgNQADgHACgIIgaAAIAAgOIAdAAQACgJAAgKIAAgNIgZAAIAAgPIAZAAIAAgWIAQAAIAAAWIAhAAIAAAvIAKAAIAAAOIgmAAIAIAOIAJAMIAMALIAOAKIgMANIgNgMgAAagaIgCAYIATAAIAAggIgRAAgAgzBIIAAiPIAQAAIAAAfIALgFIAMAjIgOADQgCgKgHgVIAABugAhJAAQADgIABgLIACgVIAMABQAAAMgBAKIgEAVg");
	this.shape_12.setTransform(8.4,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.9,23.1);


(lib.Символ30копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgoA8IAAh3IAQAAIAAAsQAMACAVAHIAgAKIgHAOQgPgHgOgEQgSgHgLAAIAAA8g");
	this.shape.setTransform(289.2,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgmApQAJgEAQgKQAIgFALgMIAKgKIAIgLIAHgMIAFgOIhaAAIAAgPIBlAAIAIAGIgFARIgHAQIgIANIgKANQgFAGgGAGIgNALIgNAJIgQAIg");
	this.shape_1.setTransform(272.1,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgnArIARgHIAOgIIALgLIALgMQAUgXAIgmIAQADQgIAngVAbQgYAfgjANgAgmgUQgFgIgNgQIAMgKIATAZQALASAEAJIgPAFQgDgGgKgRg");
	this.shape_2.setTransform(258.2,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgNA2QgFgBgFgDQgFgDgCgEQgCgEAAgFQAAgEABgFIAFgHQAEgDAFgBQAEgCAHAAQAGAAAFACQAGADAFAEQAFAGAEALQAHgFAEgEQADgFAAgHQAAgEgCgFQgBgEgFgCQgCgCgGAAQgEAAgGgBQgJAAgGABIgPAFIgOAIIgNAKIgJgKIBBg2Ig2ADIAAgPIBIgCIAIAKIgrAkIAIgDIALgCQATAAALAKQALAGAAAPIgBAJIgEAHIgEAHIgHAFIgIAFIgKADQgNADgIAAQgGAAgHgCgAgPAbQgCADAAAEQgBADAEADIAHACIAHABIALgBIgDgIIgFgEQgCgDgBgBIgGgBQgFAAgEACg");
	this.shape_3.setTransform(243.7,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgdAwIAVgIIAIgFIAGgIQgDADgDABIgGABQgHAAgFgCQgGgCgEgEQgEgEgCgFQgCgFAAgGQAAgEACgFQACgEAEgFQAEgEAGgCQAFgCAHgBQAGABACABQAEACADAEIgBgOIhEABIAAgNIBDgBIAAgTIAPAAIAAATIAngBIAAANIgnABIABAhQgBAPgCAHIgDAIIgFAHQgIAHgEAEIgWAKgAgMgIQgDABgDACIgDAFIgBAEIABAGIADAEIAFAEIAHABIAGgBQACgBACgDQAEgEAAgGIgBgEIgDgFIgEgDIgGgBIgGABg");
	this.shape_4.setTransform(229.4,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag2AhIgCgcQAAgIACgWIAHghIAPADIgGAfIgCAdIACAaQABAIAGAPIgPAFIgIgagAACAzQgHgBgGgDQgHgDgDgFQgDgFAAgHQAAgGACgGQADgIAFgHIAOAGIgGALQgCAGAAADQAAADACADQADACADABIAKACIAOABQAPAAARgCIABAPIghACQgNAAgJgCgAgXgoQAkgDAnAAIgBAQIhHACg");
	this.shape_5.setTransform(215.3,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhAA4QAKgQAJgEIAAgnIgTAAIAAgOIAhAAIAAA2IABABQAFAGAFADIAIACIAMABIAbAAIAWAAIAQgBIgDAPIghAAIgaAAQgPgCgGgBQgEgBgEgDIgHgFQgDgEgCAAQgDAAgDAFIgJAOgAAfAuIgCgJIgdAAIAAggIANAAIAAgFIgQAAIAAgMIAQAAIAAgHIgUAAIAABAIgOAAIAAhNIATAAQgDgFgEgEIAIgCIgXAAIAAgOIAjAAIgEgGIAQgDIAEAJIAlAAIAAAOIgUAAIAFABIgGAKIASAAIAABAQAAAHgEAEQgDADgHAAgAAZAFIAPAAIAAAdIADAAQAEAAAAgEIAAgxIgWAAIAAAHIARAAIAAAMIgRAAgAAJAaIATAAIAAgKIgTAAgAAKggIASAAIAGgLIgeAAQAEAFACAGgAgxgqIgNgMIAKgKQARAPAGAHIgKALIgKgLg");
	this.shape_6.setTransform(200.6,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAtA3IgLgLIgJgMQgEgHgDgHIgHAPQgEAHgEAGIgJALIgMAJIgJgNIALgHIAKgKIAGgLQACgHACgHIgXAAIAAgMIAbAAQABgJAAgKIAAgLIgWAAIAAgOIAWAAIAAgUIAOAAIAAAUIAfAAIAAAsIAKAAIAAAMIgkAAIAIANIAJALQAEAFAGAFQAGAFAGAEIgKAMIgMgLgAAXgXIgBAWIARAAIAAgeIgQAAgAgvBCIAAiDIAPAAIAAAcIAKgDQAIATACAMIgLADIgJgdIAABlgAhDAAIAEgRIACgUIALABIgBAVIgDASg");
	this.shape_7.setTransform(186.1,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgOAuQAYgLAKgNQADgEAEgMQACgGABgMIgBgWQgCgKgDgKIAQgEQAGAUAAAaIgBAMIgCALIgEAKIgFAJIgHAIIgJAHQgPAKgIADgAgnAQQgDgEgBgGQgCgGAAgLIACgaQABgJAEgMIAPAEIgFAXIgCAUIABAPIADgIQABgFADgEIAMAHIgHALIgFARIgMACQgDgDgCgFg");
	this.shape_8.setTransform(171.7,10.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgjA5IgKgFQgEgDgCgEQgDgEAAgFQAAgGADgEQACgFAEgDQAJgIASAAIAOACIgFhGIAOAAIACAcIAngCIAAAOIgmACIABAgIALAEIASAKIARAMIgJALQgGgFgIgEIgRgKIgGgCIgDALIgGAIQgCAEgGACQgGACgIAAQgHAAgGgCgAgiAbIgDADIgBAGQAAADADADQAFADAIAAQAFAAADgCQAEgCACgDQADgEABgIQgIgCgGAAQgKAAgGADg");
	this.shape_9.setTransform(157.2,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgCADQgIgGgIgHIAIgIQAHAEAJALIANAOIgKAIIgLgQg");
	this.shape_10.setTransform(139.3,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag2AhIgCgcQAAgIACgWIAHghIAPADIgGAfIgCAdIACAaQABAIAGAPIgPAFIgIgagAACAzQgHgBgGgDQgHgDgDgFQgDgFAAgHQAAgGACgGQADgIAFgHIAOAGIgGALQgCAGAAADQAAADACADQADACADABIAKACIAOABQAPAAARgCIABAPIghACQgNAAgJgCgAgXgoQAkgDAnAAIgBAQIhHACg");
	this.shape_11.setTransform(128.9,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ag7BBIAAgPIA1AAIAAgWIgoAAIAAgOIAoAAIAAgSIggAAIAAgNIgVALIgHgOIASgJIAQgKIAPgMIANgNIAJAAQAbAcAjAQIgHAOIgUgLIAAANIghAAIAAASIAoAAIAAAOIgoAAIAAAWIA2AAIAAAPgAAmgTQgLgGgKgIIgRgRIgQARIgUAOIBKAAIAAAAg");
	this.shape_12.setTransform(114,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAHAsIgKAKQgHAEgIACQgJADgJACQgJABgJAAIgJgOQAjAAAVgPIgmgOIAOgXIggAAIAAgMIAoAAIAMgWIANAEIgHASIBFAAIAAAMIgcAAQgDAKgGAIIgJAPIArAVIgKANQgdgQgPgHgAgYARIAcAKIAJgMIAHgPIghAAgAAugTIAAgTIhcAAIAAATIgPAAIAAghIA1AAQgBgGgEgFIAOgDIAGAOIA2AAIAAAhg");
	this.shape_13.setTransform(99.7,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgHA7QgJgBgFgDQgHgDgDgFQgEgGAAgHQAAgEACgEQACgFAEgEIAJgIIAMgHIAIgDIgCgEIgEgBQgRAAgYAaIgLgKQAMgKAQgVIAEgHIgcAAIAAgOIAkAAIAIgSIAMAFIgEANQASAAAdgCIABANIg3ADIgLAPQAEgDAEgBQAEgBAFAAQAEAAAEACQAFACADAEIACADIAkgKIAEAOQgZAEgMAEIAAAHIAAAZIgOAAIAAgaIgKAGIgIAGQgEADgBADQgCADAAACQAAAEACACQADADAEABQAGACAOABIAUgBIATgDIABAOQgbAEgNAAQgKAAgHgCg");
	this.shape_14.setTransform(85.2,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgDAhQgFgCgEgEQgDgFgCgHQgDgGAAgJQAAgGADgHQACgHAEgEQAEgFAGgDQAFgDAGAAQAHAAAEACIgDAPIgHgBQgDAAgDABIgFAFIAAAGIgBAHIABAIIAAAHIAFAEIAGABQAEAAADgBIABAPQgEACgHAAQgHAAgEgDg");
	this.shape_15.setTransform(76,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgNAiQgEgBgCgDIgEgHQgCgEAAgFQAAgGADgFQADgDAFgEQAEgDAGgBIAKgCIAAgBQAAgFgDgCQgCgDgDAAIgIABIgHADIgDgNIAJgDIALgCQAIAAAFADQAFACACAEQADAEABAGIABAKIAAAZIABAQIgRAAIgBgHQgDAEgEACQgCACgFAAQgEAAgDgCgAgCADIgDADQgCADAAADQAAAFADADQACACACAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQACgCABgDIAAgDIAAgNQgGABgCACg");
	this.shape_16.setTransform(70.2,12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAXAwIgCgiIAAgeIgBAAQgCAPgEAMIgIAjIgMAAIgIghIgGgdIAAAAIgCAfIgBAhIgQAAIAHhfIATAAIAIAjIAFAgIAHggIAHgjIAUAAIAGBfg");
	this.shape_17.setTransform(62.7,10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAAAnIATgFQAKgFAGgEIAEgFQACgDACgEQABgFABgJIgBgIIgCgHIgEgHIgGgGQgFgEgHgCQgGgCgGgBIgDAaIgFAVQgBAKgEAGIgEAIIgHAGIgGAEIgHABQgPAAgIgMQgEgGgCgGQgCgHAAgIIABgJIAEgLIAEgJIAIgJQAEgFAGgEIALgGIANgDIALgBIANABIAKACIAKAFIAJAGQAFADADAFIAEAIQADAFABAFIABALIgBAKIgDAKIgFAJIgHAIQgKAHgHADQgPAGgLACgAgdgZQgEACgDAFQgDADgCAEIgDAJIgBAHIABAKIAEAIIAFAFQACACAEgBQAMABAHgjIAFghQgOADgKAKg");
	this.shape_18.setTransform(51,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Ag5A4QAGgMAEgOIAJgeIAGgWIgbABIgBgPIAfgBIAEgXIAPACIgDAVIAdgDIADAOIgjADIgGAaIgJAfIgKAbgAAKA7QgIgCgEgCQgFgDgDgEQgCgFAAgFQAAgGACgGQACgGAFgGIAMAHIgGAIQgCAEAAADQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQACACAEABQAHACANAAQALAAAUgDIABAPQgUACgMAAQgLAAgIgBgAgGgPIBBgCIAAAOQgqABgWACg");
	this.shape_19.setTransform(36.4,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgQA4QgGgDgCgEQgDgFAAgGQAAgGADgFQACgEAFgDQAIgGALAAQAIAAAIACIgBgfIAPgBIACAlQAPAHAQAOIgJALIgWgQIgDAKQgCAFgEADQgEADgFACQgGACgHAAQgLAAgIgGgAgHAfQgEADAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAFAEQAEACAEAAIAHgBIAFgEIACgFIABgIQgIgCgIAAQgFAAgEADgAhAAhQAHgKAFgLQAGgLAFgLIAFgOIgXABIAAgPIAbAAIAGgXIAPAEIgFATIAWgCIABAOIgbACIgHAUQgKAYgOAVgAAigZIgUgJIAGgOIAWALQAHAEAOAKIgKALIgTgNg");
	this.shape_20.setTransform(22.2,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AACAxIATgEQAHgCAGgDQAFgEADgGQADgFAAgHQAAgGgDgFQgDgFgGgCIgHgCIgHAPIgIAOIgKANQgEAFgGAEQgGADgGACQgHACgHAAQgFAAgFgCQgEgCgEgDQgDgEgCgEQgBgFAAgGIABgKIAEgJIAGgIIAJgGQAFgEAMgGIABgRIgkAAIAAgOIAmAAIADgRIAPADIgDAOIA8gCIABANQgnACgYAAIgBAOQAHgCALAAIAFAAIACgHIAOADIgCAHQAHACAHAFIAHAGQADADACABIADAIIABAJIgBAKIgCAIIgFAHIgGAGQgJAGgHACIgWAFgAgcAFIgIAGIgEAGQgDADgBADIgBAHQAAAGADADQACADAFAAIAJgBIAIgDQgEgRAAgUgAgHgDQABAUABAJIAFgGIAFgNIAHgMIgBAAQgLAAgHACg");
	this.shape_21.setTransform(7.7,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.7,21.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#049ED4").s().p("AgoA8IAAh3IAQAAIAAAsQAMACAVAHIAgAKIgHAOQgPgHgOgEQgSgHgLAAIAAA8g");
	this.shape.setTransform(289.2,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#049ED4").s().p("AgmApQAJgEAQgKQAIgFALgMIAKgKIAIgLIAHgMIAFgOIhaAAIAAgPIBlAAIAIAGIgFARIgHAQIgIANIgKANQgFAGgGAGIgNALIgNAJIgQAIg");
	this.shape_1.setTransform(272.1,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#049ED4").s().p("AgnArIARgHIAOgIIALgLIALgMQAUgXAIgmIAQADQgIAngVAbQgYAfgjANgAgmgUQgFgIgNgQIAMgKIATAZQALASAEAJIgPAFQgDgGgKgRg");
	this.shape_2.setTransform(258.2,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#049ED4").s().p("AgNA2QgFgBgFgDQgFgDgCgEQgCgEAAgFQAAgEABgFIAFgHQAEgDAFgBQAEgCAHAAQAGAAAFACQAGADAFAEQAFAGAEALQAHgFAEgEQADgFAAgHQAAgEgCgFQgBgEgFgCQgCgCgGAAQgEAAgGgBQgJAAgGABIgPAFIgOAIIgNAKIgJgKIBBg2Ig2ADIAAgPIBIgCIAIAKIgrAkIAIgDIALgCQATAAALAKQALAGAAAPIgBAJIgEAHIgEAHIgHAFIgIAFIgKADQgNADgIAAQgGAAgHgCgAgPAbQgCADAAAEQgBADAEADIAHACIAHABIALgBIgDgIIgFgEQgCgDgBgBIgGgBQgFAAgEACg");
	this.shape_3.setTransform(243.7,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#049ED4").s().p("AgdAwIAVgIIAIgFIAGgIQgDADgDABIgGABQgHAAgFgCQgGgCgEgEQgEgEgCgFQgCgFAAgGQAAgEACgFQACgEAEgFQAEgEAGgCQAFgCAHgBQAGABACABQAEACADAEIgBgOIhEABIAAgNIBDgBIAAgTIAPAAIAAATIAngBIAAANIgnABIABAhQgBAPgCAHIgDAIIgFAHQgIAHgEAEIgWAKgAgMgIQgDABgDACIgDAFIgBAEIABAGIADAEIAFAEIAHABIAGgBQACgBACgDQAEgEAAgGIgBgEIgDgFIgEgDIgGgBIgGABg");
	this.shape_4.setTransform(229.4,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#049ED4").s().p("Ag2AhIgCgcQAAgIACgWIAHghIAPADIgGAfIgCAdIACAaQABAIAGAPIgPAFIgIgagAACAzQgHgBgGgDQgHgDgDgFQgDgFAAgHQAAgGACgGQADgIAFgHIAOAGIgGALQgCAGAAADQAAADACADQADACADABIAKACIAOABQAPAAARgCIABAPIghACQgNAAgJgCgAgXgoQAkgDAnAAIgBAQIhHACg");
	this.shape_5.setTransform(215.3,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#049ED4").s().p("AhAA4QAKgQAJgEIAAgnIgTAAIAAgOIAhAAIAAA2IABABQAFAGAFADIAIACIAMABIAbAAIAWAAIAQgBIgDAPIghAAIgaAAQgPgCgGgBQgEgBgEgDIgHgFQgDgEgCAAQgDAAgDAFIgJAOgAAfAuIgCgJIgdAAIAAggIANAAIAAgFIgQAAIAAgMIAQAAIAAgHIgUAAIAABAIgOAAIAAhNIATAAQgDgFgEgEIAIgCIgXAAIAAgOIAjAAIgEgGIAQgDIAEAJIAlAAIAAAOIgUAAIAFABIgGAKIASAAIAABAQAAAHgEAEQgDADgHAAgAAZAFIAPAAIAAAdIADAAQAEAAAAgEIAAgxIgWAAIAAAHIARAAIAAAMIgRAAgAAJAaIATAAIAAgKIgTAAgAAKggIASAAIAGgLIgeAAQAEAFACAGgAgxgqIgNgMIAKgKQARAPAGAHIgKALIgKgLg");
	this.shape_6.setTransform(200.6,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#049ED4").s().p("AAtA3IgLgLIgJgMQgEgHgDgHIgHAPQgEAHgEAGIgJALIgMAJIgJgNIALgHIAKgKIAGgLQACgHACgHIgXAAIAAgMIAbAAQABgJAAgKIAAgLIgWAAIAAgOIAWAAIAAgUIAOAAIAAAUIAfAAIAAAsIAKAAIAAAMIgkAAIAIANIAJALQAEAFAGAFQAGAFAGAEIgKAMIgMgLgAAXgXIgBAWIARAAIAAgeIgQAAgAgvBCIAAiDIAPAAIAAAcIAKgDQAIATACAMIgLADIgJgdIAABlgAhDAAIAEgRIACgUIALABIgBAVIgDASg");
	this.shape_7.setTransform(186.1,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#049ED4").s().p("AgOAuQAYgLAKgNQADgEAEgMQACgGABgMIgBgWQgCgKgDgKIAQgEQAGAUAAAaIgBAMIgCALIgEAKIgFAJIgHAIIgJAHQgPAKgIADgAgnAQQgDgEgBgGQgCgGAAgLIACgaQABgJAEgMIAPAEIgFAXIgCAUIABAPIADgIQABgFADgEIAMAHIgHALIgFARIgMACQgDgDgCgFg");
	this.shape_8.setTransform(171.7,10.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#049ED4").s().p("AgjA5IgKgFQgEgDgCgEQgDgEAAgFQAAgGADgEQACgFAEgDQAJgIASAAIAOACIgFhGIAOAAIACAcIAngCIAAAOIgmACIABAgIALAEIASAKIARAMIgJALQgGgFgIgEIgRgKIgGgCIgDALIgGAIQgCAEgGACQgGACgIAAQgHAAgGgCgAgiAbIgDADIgBAGQAAADADADQAFADAIAAQAFAAADgCQAEgCACgDQADgEABgIQgIgCgGAAQgKAAgGADg");
	this.shape_9.setTransform(157.2,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#049ED4").s().p("AgCADQgIgGgIgHIAIgIQAHAEAJALIANAOIgKAIIgLgQg");
	this.shape_10.setTransform(139.3,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#049ED4").s().p("Ag2AhIgCgcQAAgIACgWIAHghIAPADIgGAfIgCAdIACAaQABAIAGAPIgPAFIgIgagAACAzQgHgBgGgDQgHgDgDgFQgDgFAAgHQAAgGACgGQADgIAFgHIAOAGIgGALQgCAGAAADQAAADACADQADACADABIAKACIAOABQAPAAARgCIABAPIghACQgNAAgJgCgAgXgoQAkgDAnAAIgBAQIhHACg");
	this.shape_11.setTransform(128.9,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#049ED4").s().p("Ag7BBIAAgPIA1AAIAAgWIgoAAIAAgOIAoAAIAAgSIggAAIAAgNIgVALIgHgOIASgJIAQgKIAPgMIANgNIAJAAQAbAcAjAQIgHAOIgUgLIAAANIghAAIAAASIAoAAIAAAOIgoAAIAAAWIA2AAIAAAPgAAmgTQgLgGgKgIIgRgRIgQARIgUAOIBKAAIAAAAg");
	this.shape_12.setTransform(114,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#049ED4").s().p("AAHAsIgKAKQgHAEgIACQgJADgJACQgJABgJAAIgJgOQAjAAAVgPIgmgOIAOgXIggAAIAAgMIAoAAIAMgWIANAEIgHASIBFAAIAAAMIgcAAQgDAKgGAIIgJAPIArAVIgKANQgdgQgPgHgAgYARIAcAKIAJgMIAHgPIghAAgAAugTIAAgTIhcAAIAAATIgPAAIAAghIA1AAQgBgGgEgFIAOgDIAGAOIA2AAIAAAhg");
	this.shape_13.setTransform(99.7,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#049ED4").s().p("AgHA7QgJgBgFgDQgHgDgDgFQgEgGAAgHQAAgEACgEQACgFAEgEIAJgIIAMgHIAIgDIgCgEIgEgBQgRAAgYAaIgLgKQAMgKAQgVIAEgHIgcAAIAAgOIAkAAIAIgSIAMAFIgEANQASAAAdgCIABANIg3ADIgLAPQAEgDAEgBQAEgBAFAAQAEAAAEACQAFACADAEIACADIAkgKIAEAOQgZAEgMAEIAAAHIAAAZIgOAAIAAgaIgKAGIgIAGQgEADgBADQgCADAAACQAAAEACACQADADAEABQAGACAOABIAUgBIATgDIABAOQgbAEgNAAQgKAAgHgCg");
	this.shape_14.setTransform(85.2,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#049ED4").s().p("AgDAhQgFgCgEgEQgDgFgCgHQgDgGAAgJQAAgGADgHQACgHAEgEQAEgFAGgDQAFgDAGAAQAHAAAEACIgDAPIgHgBQgDAAgDABIgFAFIAAAGIgBAHIABAIIAAAHIAFAEIAGABQAEAAADgBIABAPQgEACgHAAQgHAAgEgDg");
	this.shape_15.setTransform(76,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#049ED4").s().p("AgNAiQgEgBgCgDIgEgHQgCgEAAgFQAAgGADgFQADgDAFgEQAEgDAGgBIAKgCIAAgBQAAgFgDgCQgCgDgDAAIgIABIgHADIgDgNIAJgDIALgCQAIAAAFADQAFACACAEQADAEABAGIABAKIAAAZIABAQIgRAAIgBgHQgDAEgEACQgCACgFAAQgEAAgDgCgAgCADIgDADQgCADAAADQAAAFADADQACACACAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQACgCABgDIAAgDIAAgNQgGABgCACg");
	this.shape_16.setTransform(70.2,12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#049ED4").s().p("AAXAwIgCgiIAAgeIgBAAQgCAPgEAMIgIAjIgMAAIgIghIgGgdIAAAAIgCAfIgBAhIgQAAIAHhfIATAAIAIAjIAFAgIAHggIAHgjIAUAAIAGBfg");
	this.shape_17.setTransform(62.7,10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#049ED4").s().p("AAAAnIATgFQAKgFAGgEIAEgFQACgDACgEQABgFABgJIgBgIIgCgHIgEgHIgGgGQgFgEgHgCQgGgCgGgBIgDAaIgFAVQgBAKgEAGIgEAIIgHAGIgGAEIgHABQgPAAgIgMQgEgGgCgGQgCgHAAgIIABgJIAEgLIAEgJIAIgJQAEgFAGgEIALgGIANgDIALgBIANABIAKACIAKAFIAJAGQAFADADAFIAEAIQADAFABAFIABALIgBAKIgDAKIgFAJIgHAIQgKAHgHADQgPAGgLACgAgdgZQgEACgDAFQgDADgCAEIgDAJIgBAHIABAKIAEAIIAFAFQACACAEgBQAMABAHgjIAFghQgOADgKAKg");
	this.shape_18.setTransform(51,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#049ED4").s().p("Ag5A4QAGgMAEgOIAJgeIAGgWIgbABIgBgPIAfgBIAEgXIAPACIgDAVIAdgDIADAOIgjADIgGAaIgJAfIgKAbgAAKA7QgIgCgEgCQgFgDgDgEQgCgFAAgFQAAgGACgGQACgGAFgGIAMAHIgGAIQgCAEAAADQAAABAAAAQAAABABABQAAAAAAABQABAAAAABQACACAEABQAHACANAAQALAAAUgDIABAPQgUACgMAAQgLAAgIgBgAgGgPIBBgCIAAAOQgqABgWACg");
	this.shape_19.setTransform(36.4,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#049ED4").s().p("AgQA4QgGgDgCgEQgDgFAAgGQAAgGADgFQACgEAFgDQAIgGALAAQAIAAAIACIgBgfIAPgBIACAlQAPAHAQAOIgJALIgWgQIgDAKQgCAFgEADQgEADgFACQgGACgHAAQgLAAgIgGgAgHAfQgEADAAAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAFAEQAEACAEAAIAHgBIAFgEIACgFIABgIQgIgCgIAAQgFAAgEADgAhAAhQAHgKAFgLQAGgLAFgLIAFgOIgXABIAAgPIAbAAIAGgXIAPAEIgFATIAWgCIABAOIgbACIgHAUQgKAYgOAVgAAigZIgUgJIAGgOIAWALQAHAEAOAKIgKALIgTgNg");
	this.shape_20.setTransform(22.2,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#049ED4").s().p("AACAxIATgEQAHgCAGgDQAFgEADgGQADgFAAgHQAAgGgDgFQgDgFgGgCIgHgCIgHAPIgIAOIgKANQgEAFgGAEQgGADgGACQgHACgHAAQgFAAgFgCQgEgCgEgDQgDgEgCgEQgBgFAAgGIABgKIAEgJIAGgIIAJgGQAFgEAMgGIABgRIgkAAIAAgOIAmAAIADgRIAPADIgDAOIA8gCIABANQgnACgYAAIgBAOQAHgCALAAIAFAAIACgHIAOADIgCAHQAHACAHAFIAHAGQADADACABIADAIIABAJIgBAKIgCAIIgFAHIgGAGQgJAGgHACIgWAFgAgcAFIgIAGIgEAGQgDADgBADIgBAHQAAAGADADQACADAFAAIAJgBIAIgDQgEgRAAgUgAgHgDQABAUABAJIAFgGIAFgNIAHgMIgBAAQgLAAgHACg");
	this.shape_21.setTransform(7.7,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.7,21.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(249,222,6,0)","#F5CF07","rgba(245,207,7,0)"],[0,0.502,1],-9.8,0,9.9,0).s().p("AhhFFIAAqJIDDAAIAAKJg");
	this.shape.setTransform(9.9,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,65.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#049ED4").s().p("Ag1BUIAAhfIgXATIgGgSIARgQIAPgSIAMgSIAKgVIARAIIgKAWQgGAKgHAKIAAB1gAAXBRQgGAAgEgBQgEgCgDgDQgDgDgBgEQgCgEABgGIAAgwIgRAJIgJgSIAagMIAAhFIASAAIAAA6QAagSAUgVIANAPIgcAZQgUAPgLAGIAAA4QAAADACACQACACAFAAIAaAAQAFAAADgEQADgEABgYIARAGIgDAZQgCAKgDACQgCADgFADQgEABgIAAg");
	this.shape.setTransform(45.6,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#049ED4").s().p("AhRBHQANgUALgGIAAgxIgYAAIAAgSIAqAAIAABEIABACQAHAHAGADQAEACAGACIAOABIAiAAIAcAAIAVgBIgEASIgqAAIggAAQgTgBgIgCIgKgFIgJgIQgEgDgDAAQgCgBgFAGQgFAGgGAMgAAnA5IgDgLIglAAIAAgnIARAAIAAgHIgUAAIAAgPIAUAAIAAgJIgaAAIAABQIgQAAIAAhgIAXAAIgIgLIAJgDIgdAAIAAgRIAtAAIgFgIIAUgEIAEAMIAvAAIAAARIgZAAIAHACIgIAMIAWAAIAABRQAAAIgEAFQgEADgJAAgAAgAHIASAAIAAAjIAEABQAFgBAAgEIAAg+IgbAAIAAAJIAVAAIAAAPIgVAAgAALAgIAZAAIAAgMIgZAAgAANgoIAWAAIAHgOIglAAQAFAGADAIgAg+g1IgQgQIAMgLQAVATAIAJIgNANIgMgOg");
	this.shape_1.setTransform(27.8,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#049ED4").s().p("AArBAIgOAJIgPAIIgKgPQAPgFALgJQgHgHgEgIIgHgRIgFAAIAAgPIA/AAIAAAOIgGASQgEAIgGAHQAIAFASAIIgJAQQgVgLgHgGgAAiAfIAHAKIAHgKIAFgLIgZAAIAGALgAgQBRIAAgPIg9AGIgCgQIAPgBIAAg4IgPAAIAAgPICeAAIAAAPIhPAAIAAAyIAJgBIAAAOIgJACIAAARgAgvA2IAfgDIAAgIIgfAAgAgvAeIAfAAIAAgKIgfAAgAgvAGIAfAAIAAgHIgfAAgAg7gYIAAg4IB2AAIAAA4gAgpglIBSAAIAAgIIhSAAgAgpg6IBSAAIAAgIIhSAAg");
	this.shape_2.setTransform(9.7,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.4,26.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bot();
	this.instance.setTransform(0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.1,114.8);


(lib.Символ22копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhHBHQgdgdgBgqQABgpAdgeQAegdApgBQAqABAdAdQAfAeAAApQAAAqgfAdQgdAfgqAAQgpAAgegfg");
	this.shape.setTransform(10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,20.4);


(lib.Символ22копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhHBHQgdgdgBgqQABgpAdgeQAegdApgBQAqABAdAdQAfAeAAApQAAAqgfAdQgdAfgqAAQgpAAgegfg");
	this.shape.setTransform(10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,20.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhHBHQgdgdgBgqQABgpAdgeQAegdApgBQAqABAdAdQAfAeAAApQAAAqgfAdQgdAfgqAAQgpAAgegfg");
	this.shape.setTransform(10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,20.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_06();
	this.instance.setTransform(0,0,0.405,0.405);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.8,48.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,15);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,89);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,119);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,147);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,81);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_031();
	this.instance.setTransform(-0.4,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,1.5,250,157);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_08();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,100);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF"],[0,0.318],0.1,-64.5,0.1,64.6).s().p("A5XKFIAA0JMAyvAAAIAAUJg");
	this.shape.setTransform(192.9,263.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(192.7,105.3,0.552,0.552,0,0,0,349,190.6);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385.4,328.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ30копия();
	this.instance.setTransform(147.3,10.6,1,1,0,0,0,147.3,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(147.3,10.6,1,1,0,0,0,147.3,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// 快適にクリーンアップの方法
	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(103.9,37.4,1,1,0,0,0,102.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},9).to({alpha:1},10).wait(1));

	// 快適にクリーンアップの方法 - копия
	this.instance_3 = new lib.Символ31копия();
	this.instance_3.setTransform(103.9,37.4,1,1,0,0,0,102.9,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.7,49);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(22.3,32.5,1.457,1.03,0,13.8,0,9.8,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:132.6},9).wait(25).to({x:22.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.7,65.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRBHQANgUALgGIAAAAIAAgwIgYAAIAAgSIAqAAIAABDIABADQAHAGAGAEIAAAAQAEACAGABIAAAAIAOABIAiAAIAcAAIAVgBIAAAAIgEASIgqAAIggAAQgTgBgIgCIAAAAIgKgFIAAAAIgJgHIAAAAQgEgEgDAAIAAAAQgCAAgFAGIAAAAQgFAFgGANIAAAAgAiIBDIgNAJIAAAAIgQAIIAAAAIgJgPQAOgFALgJIAAAAQgHgHgEgIIAAAAIgHgRIAAAAIgFAAIAAgPIA/AAIAAAOIgGASIAAAAQgEAIgGAHIAAAAQAIAFASAIIAAAAIgJAQQgVgLgHgGgAiRAiIAHAKIAAAAIAHgKIAFgLIAAAAIgZAAIAGALgAjFBUIAAgPIg9AGIAAAAIgCgQIAPgBIAAg6IgPAAIAAgMICgAAIAAAMIhPAAIAAA0IAJgBIAAAOIgJACIAAARgAjkA6IAfgEIAAgIIgfAAgAjkAhIAfAAIAAgKIgfAAgAjkAJIAfAAIAAgJIgfAAgAB7BUIAAhgIgWATIAAAAIgGgSIARgQIAAAAIAOgSIAAAAIAMgSIAAAAIAKgVIAAAAIASAJIgLAVIAAAAQgFAKgIAKIAAAAIAAB2gADJBQQgFAAgFgBIAAAAQgEgCgDgCIAAAAQgDgDgBgFIAAAAQgBgEAAgFIAAAAIAAgxIgTAJIgJgSIAcgLIAAAAIAAhGIASAAIAAA7QAagSAUgWIAAAAIANAPIgcAaIAAAAQgUAOgLAHIAAAAIAAA3QAAAEACABIAAAAQADACAEAAIAAAAIAaAAQAGAAACgEIAAAAQADgEABgXIAAAAIARAFIgDAZIAAAAQgCAKgCADIAAAAQgDADgEACIAAAAQgFABgHAAIAAAAgAAnA6IgDgMIglAAIAAgnIARAAIAAgHIgUAAIAAgPIAUAAIAAgJIgaAAIAABRIgQAAIAAhgIAXAAIgIgMIAAAAIAJgDIgdAAIAAgRIAtAAIgFgIIAUgEIAEAMIAvAAIAAARIgZAAIAHACIgIANIAAAAIAWAAIAABQQAAAIgEAFIAAAAQgEAEgJAAIAAAAgAAgAHIASAAIAAAjIAEABQAFAAAAgFIAAAAIAAg+IgbAAIAAAJIAVAAIAAAPIgVAAgAALAhIAZAAIAAgMIgZAAgAANgnIAWAAIAHgPIAAAAIglAAQAFAHADAIgAjvgVIAAg3IB3AAIAAA3gAjdgiIBTAAIAAgIIhTAAgAjdg3IBTAAIAAgIIhTAAgAg+g1IgQgPIAMgMQAVATAIAJIAAAAIgNANIgMgOg");
	mask.setTransform(27.8,13.3);

	// Слой 3
	this.instance = new lib.Символ28();
	this.instance.setTransform(-22.3,10.2,1,1,0,0,0,22.4,32.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(27.7,13.2,1,1,0,0,0,27.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.4,26.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(45.6,57.4,1,1,0,0,0,45.6,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:67.4},49).to({y:57.4},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.1,114.8);


(lib.Символ21копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22копия();
	this.instance.setTransform(10.2,10.2,1,1,0,0,0,10.2,10.2);

	this.instance_1 = new lib.Символ22копия2();
	this.instance_1.setTransform(10.2,10.2,1,1,0,0,0,10.2,10.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0},4).to({_off:false,alpha:1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4).to({_off:true,alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,20.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(10.2,10.2,1,1,0,0,0,10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,20.4);


(lib.Символ20копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21копия();
	this.instance.setTransform(25.2,23.7,1,1,0,0,0,10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(64.4,24.3,1,1,0,0,0,64.4,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.8,48.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(25.2,23.7,1,1,0,0,0,10.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(64.4,24.3,1,1,0,0,0,64.4,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.8,48.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(74.6,23.4,1,1,0,0,0,27.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(64.4,24.3,1,1,0,0,0,64.4,24.3);

	this.instance_2 = new lib.Символ20копия();
	this.instance_2.setTransform(64.4,24.3,1,1,0,0,0,64.4,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12.2,128.8,65.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(25,7.5,1,1,0,0,0,25,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,15);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(28.3,78.2,1,1,0,0,0,28.3,78.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.76,y:80.8},49).to({scaleY:1,y:78.2},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,89);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(16.8,115.1,1,1,0,0,0,16.8,115.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.81,y:115.9},49).to({scaleY:1,y:115.1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,119);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(74,73.5,1,1,0,0,0,74,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,147);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(144.5,40.5,1,1,0,0,0,144.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,81);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(51.5,50,1,1,0,0,0,51.5,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,100);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(45.6,57.4,1,1,0,0,0,45.6,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(654).to({regY:57.3,scaleX:0.07,scaleY:0.07,x:-51.7,y:19.7},5).to({skewY:180},1).to({regY:57.4,scaleX:1,scaleY:1,x:-157.8,y:77.2},5).wait(445));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.1,114.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// for-rez_05.png
	this.instance = new lib.Символ11();
	this.instance.setTransform(100.8,17.5,1,1,0,0,0,17.8,116.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:116,rotation:-10,y:17.4},44).to({regY:116.1,rotation:0,y:17.5},45).wait(1));

	// for-rez_17.png
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(128.1,34.2,1,1,0,0,0,5.8,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-17.4,x:128.2},44).to({rotation:0,x:128.1},45).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(71,76.4,1,1,0,0,0,71,76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	// for-rez_11.png
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(86.2,19.8,1,1,-9,0,0,25.9,75.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:12.5,x:86.3},44).to({rotation:-9,x:86.2},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-98.6,172.3,245.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(125,78.5,1,1,0,0,0,125,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2EjIg2gDQgcgBgQgDQgYgEgRgJQgagNgZghQgagkgIgiQgKgoAIg3QAJg0ARgtQAPgkARgfQAohFA+gxQBBgzBJgRIAAABQApAAAXABQAjACAcAHQBGARAkAwQAXAhAHAxQAFAggCA6QgCA5gIAcQgJAdggAuQgxBEg0ApQhBAzhDAKQgVADgZAAIgIAAg");
	mask.setTransform(61,60.2);

	// for-rez_08.png
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(62.3,62.3,1,1,0,0,0,51.5,50);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,1.5,250,157);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// for-rez_03.png
	this.instance = new lib.Символ4();
	this.instance.setTransform(192.9,125.5,1,1,0,0,0,170.2,112.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:112.3,rotation:-3.2,y:125.4},29).to({rotation:2.2,x:195.8,y:125.5},30).to({regY:112.4,rotation:0,x:192.9},30).wait(1));

	// for-rez_25.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(122.8,145.4,1,1,0,0,0,144.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,x:131.7},29).wait(30).to({scaleX:1,x:122.8},30).wait(1));

	// for-rez_22.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(274.5,112.1,1,1,0,0,0,74,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({scaleX:1.18,x:288},30).to({scaleX:1,x:274.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-60,394.5,245.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(58,49.6,0.341,0.341,-1.7,0,0,144.3,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:218},1099).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0.6,134.3,87.4);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ19();
	this.instance.setTransform(151.4,217.5,1.435,1.435,0,0,0,64.4,24.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(150.3,27.1,1,1,0,0,0,147.3,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(74.3,128.7,1,1,0,0,0,68.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.forrez_30();
	this.instance_3.setTransform(0.9,165.3,0.408,0.408);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 10
	this.instance_4 = new lib.Символ32();
	this.instance_4.setTransform(252.4,88.1,1,1,0,0,0,45.6,57.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 3
	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(148.7,58.4,0.964,0.964,0,0,0,192.7,105.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.9,81.9,371.6,316.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
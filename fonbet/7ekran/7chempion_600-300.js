(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bra.jpg?1468325490619", id:"bra"},
		{src:"images/cube.png?1468325490619", id:"cube"},
		{src:"images/fi.jpg?1468325490619", id:"fi"},
		{src:"images/fo.jpg?1468325490619", id:"fo"},
		{src:"images/fra.jpg?1468325490619", id:"fra"},
		{src:"images/ger.jpg?1468325490619", id:"ger"},
		{src:"images/ita.jpg?1468325490619", id:"ita"},
		{src:"images/on.jpg?1468325490619", id:"on"},
		{src:"images/si.jpg?1468325490619", id:"si"},
		{src:"images/spa.jpg?1468325490619", id:"spa"},
		{src:"images/tr.jpg?1468325490619", id:"tr"},
		{src:"images/tw.jpg?1468325490619", id:"tw"}
	]
};



// symbols:



(lib.bra = function() {
	this.initialize(img.bra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,18);


(lib.cube = function() {
	this.initialize(img.cube);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,200);


(lib.fi = function() {
	this.initialize(img.fi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,417);


(lib.fo = function() {
	this.initialize(img.fo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,417);


(lib.fra = function() {
	this.initialize(img.fra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,18);


(lib.ger = function() {
	this.initialize(img.ger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,18);


(lib.ita = function() {
	this.initialize(img.ita);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,18);


(lib.on = function() {
	this.initialize(img.on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.si = function() {
	this.initialize(img.si);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,417);


(lib.spa = function() {
	this.initialize(img.spa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,18);


(lib.tr = function() {
	this.initialize(img.tr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,417);


(lib.tw = function() {
	this.initialize(img.tw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,417);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372,200);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s("#000000").ss(1,1,1).rr(-316,-164.5,632,329,16.9);
	this.shape.setTransform(316,164.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,634,331);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAjIAAgBQgEgEgCgGQgCgGAAgJIAAgRQAAgRAIgIQAIgJANAAQAOAAAHAJQAIAIAAARIAAARQAAAJgCAGQgCAGgDAEIgBABQgHAIgOAAQgNAAgIgIgAAZgYQgDAEAAAKIAAAVQAAAIADAFIABACQADAEAFAAQAGAAADgEIABgCQACgFAAgIIAAgVQAAgKgDgEQgDgFgGAAQgGAAgDAFgAg1AjIgBgBQgDgEgCgGQgCgGAAgJIAAgRQAAgRAIgIQAHgJAOAAQANAAAIAJQAIAIAAARIAAARQAAAJgCAGQgCAGgEAEIAAABQgIAIgNAAQgNAAgIgIgAgpgYQgDAEAAAKIAAAVQAAAIACAFIABACQADAEAGAAQAGAAADgEIABgCQACgFAAgIIAAgVQAAgKgDgEQgDgFgGAAQgGAAgDAFgABJAqIAAgLIAbgeQAGgEADgFQACgFAAgEQAAgFgDgEQgDgDgFAAQgGAAgDAEQgDAEAAAHIgRAAIAAgBQAAgLAIgIQAIgIANAAQANAAAIAHQAHAGAAAMQAAAIgEAGIgBACIgNANIgPARIAAAAIAWAAIABgIIANAAIAAAVgAiAAqIAAgLIAbgeQAGgEADgFQACgFAAgEQAAgFgDgEQgDgDgFAAQgGAAgDAEQgDAEAAAHIgRAAIAAgBQAAgLAIgIQAIgIANAAQANAAAIAHQAHAGAAAMQAAAIgEAGQgEAFgKAKIgPARIAAAAIAWAAIABgIIANAAIAAAVg");
	this.shape.setTransform(-21.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.bra();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,0,65,18);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bra();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMArIgIgDIACgMIAHACIAJAAQAGAAAFgFQADgFAAgLIAAgBQgCAEgEACQgEACgFAAQgMAAgGgIQgGgIABgMQAAgNAGgJQAIgIAMAAQAOAAAHAJQAJAJgBAQIAAARQABAQgKAJQgIAJgOAAIgKAAgAAQgYQgDAFAAAHQAAAIACAEQADADAGAAQAFAAADgCQADgBABgBIAAgJQAAgJgDgFQgDgFgGAAQgEAAgEAFgAg1ArIgIgDIACgMIAHACIAJAAQAGAAAFgFQAEgFAAgLIAAgBQgCAEgFACQgDACgGAAQgLAAgHgIQgHgIAAgMQAAgNAIgJQAJgIAMAAQANAAAIAJQAIAJAAAQIAAARQAAAQgJAJQgJAJgOAAIgKAAgAgwgYQgEAFAAAHQAAAIADAEQADADAGAAQAEAAADgCQADgBACgBIAAgJQAAgJgDgFQgDgFgGAAQgFAAgDAFgABXAqIAAgKIAJgCIAAgIIgjAAIgBgJIAkg2IASAAIAAAzIAJAAIAAAMIgJAAIAAAIIAJACIAAAKgABNAKIATAAIAAgcgAh5AqIAAgKIANgCIAAg4IgOAAIAAgJIAggGIAABHIAOACIAAAKg");
	this.shape.setTransform(-22.3,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,0,64.7,18);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIAlQgIgGAAgMQAAgHAEgFQADgGAHgBQgGgCgDgFQgDgFAAgGQAAgMAHgGQAHgGANAAQAMAAAHAGQAIAGAAAMQAAAGgEAFQgDAFgGACQAHABAEAGQAEAFAAAHQAAAMgIAGQgIAGgNAAQgNAAgIgGgABUAJQgDADAAAGQAAAGADADQADADAGAAQAFAAADgDQAEgDAAgGQAAgGgEgDQgDgEgFAAQgGAAgDAEgABVgaQgCADAAAFQAAAGACADQADADAFAAQAEAAADgDQADgDAAgGQAAgFgDgDQgDgDgEAAQgFAAgDADgAANArIgIgDIACgMIAHACIAJAAQAGAAAFgFQAEgFAAgLIAAgBQgDAEgEACQgEACgFAAQgLAAgHgIQgFgIAAgMQAAgNAGgJQAIgIANAAQANAAAIAJQAIAJAAAQIAAARQAAAQgJAJQgJAJgOAAIgKAAgAARgYQgDAFAAAHQAAAIADAEQADADAFAAQAFAAADgCQADgBACgBIAAgJQAAgJgDgFQgEgFgFAAQgFAAgEAFgAgzArIgJgDIACgMIAIACIAIAAQAHAAAEgFQAEgFAAgLIAAgBQgCAEgEACQgEACgFAAQgMAAgHgIQgHgIAAgMQAAgNAJgJQAIgIAMAAQANAAAIAJQAIAJAAAQIAAARQAAAQgJAJQgJAJgOAAIgJAAgAgvgYQgDAFAAAHQAAAIACAEQADADAGAAQAEAAADgCQAEgBABgBIAAgJQAAgJgDgFQgDgFgGAAQgFAAgDAFgAh4AqIAAgKIAOgCIAAg4IgPAAIAAgJIAggGIAABHIAOACIAAAKg");
	this.shape.setTransform(-21.4,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.fra();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,0,63.7,18);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAjQgIgJAAgRIAAgRQAAgRAIgIQAHgJAOAAQANAAAIAJQAGAIAAARIAAARQAAARgGAJQgIAIgNAAQgNAAgIgIgAgigYQgDAEAAAKIAAAVQAAAKADAFQADAEAGAAQAGAAADgEQADgFAAgKIAAgVQAAgKgDgEQgDgFgGAAQgGAAgDAFgABYAqIAAgKIAJgCIAAgIIgiAAIgBgJIAjg2IASAAIAAAzIAJAAIAAAMIgJAAIAAAIIAJACIAAAKgABOAKIATAAIAAgcgAALAqIAAgKIAOgCIAAg4IgPAAIAAgJIAggGIAABHIAOACIAAAKgAh5AqIAAgLIAbgeQAGgEADgFQACgFAAgEQAAgFgDgEQgDgDgFAAQgGAAgDAEQgDAEAAAHIgRAAIAAgBQAAgLAIgIQAIgIANAAQANAAAIAHQAHAGAAAMQAAAIgEAGQgEAFgKAKIgPARIAAAAIAWAAIABgIIANAAIAAAVg");
	this.shape.setTransform(-22,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.ger();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,0,64.5,18);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABRAiQgIgJAAgQIAAgNQAAgSAJgKQAKgKAPAAIAJABIAIACIgDANIgHgCIgHgBQgIAAgEAGQgFAFAAALQADgDAFgBQAEgCAFAAQAMAAAGAIQAHAGAAANQAAANgIAIQgIAIgNAAQgNAAgJgJgABfAAQgEABgBADIAAAFQAAAKADAGQAEAFAGAAQAFAAAEgEQADgFAAgHQAAgHgEgFQgDgCgFAAQgFAAgDAAgAAMAjQgIgJAAgRIAAgRQAAgRAIgIQAIgJANAAQAOAAAHAJQAIAIAAARIAAARQAAARgIAJQgHAIgOAAQgNAAgIgIgAAYgYQgDAEAAAKIAAAVQAAAKAEAFQADAEAFAAQAGAAADgEQADgFAAgKIAAgVQAAgKgDgEQgDgFgGAAQgGAAgDAFgAg2AjQgIgJAAgRIAAgRQAAgRAIgIQAHgJAOAAQANAAAIAJQAIAIAAARIAAARQAAARgIAJQgIAIgNAAQgNAAgIgIgAgqgYQgDAEAAAKIAAAVQAAAKADAFQADAEAGAAQAGAAADgEQADgFAAgKIAAgVQAAgKgDgEQgDgFgGAAQgGAAgDAFgAiBAqIAAgLIAbgeQAGgEADgFQACgFAAgEQAAgFgDgEQgDgDgFAAQgGAAgDAEQgDAEAAAHIgRAAIAAgBQAAgLAIgIQAIgIANAAQANAAAIAHQAHAGAAAMQAAAIgEAGQgEAFgKAKIgPARIAAAAIAWAAIABgIIANAAIAAAVg");
	this.shape.setTransform(-21.7,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.ita();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,0,65,18);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABKAjIAAAAQgFgFgBgHQgCgGAAgIIAAgRIAAgHIABgFQACgIAFgFQAHgJAOAAQANAAAIAJQAEAFACAIIABAFIABAHIAAARQAAAIgCAGQgCAHgEAFIgBAAQgHAIgNAAQgNAAgIgIgABWgYIgCAEIgBAFIAAAFIAAAVQAAAHACAFIABADQADAEAGAAQAGAAADgEIABgDQACgFAAgHIAAgVIAAgFIgBgFIgCgEQgDgFgGAAQgGAAgDAFgAgtAjIgBAAQgIgJAAgRIAAgRQAAgRAIgIQAIgJANAAQAOAAAHAJQAGAIAAARIAAARQAAAQgFAJIgBABIAAAAQgIAIgNAAQgMAAgIgIgAgigYQgDAEAAAKIAAAVQAAAKAEAFQADAEAFAAQAGAAADgEQADgFAAgKIAAgVQAAgKgDgEQgDgFgGAAQgGAAgDAFgAALAqIAAgKIAOgCIAAg4IgOAAIAAgJIAggGIAABHIAOACIAAAKgAh5AqIAAgLIAcgeQAGgEACgFQADgFAAgEQAAgFgDgEQgDgDgFAAQgGAAgDAEQgEAEAAAHIgQAAIAAgBQgBgLAIgIQAIgIAOAAQANAAAHAHQAIAGAAAMQAAAIgEAGQgFAFgKAKIgPARIAAAAIAXAAIAAgIIANAAIAAAVg");
	this.shape.setTransform(-20.6,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.spa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,0,63,18);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(215.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.4,26.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("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");
	this.shape.setTransform(215.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.4,26.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOsB9IgIgBIADgVIAFABIAGAAQAJgBAFgGQAFgIAEgJIAGgPIgvh3IgNgCIAAgQIA5AAIAAAQIgQADIAZBEIAFATIABAAIAdhXIgQgDIAAgQIA6AAIAAAQIgNACIg3CQQgFAPgKAKQgKAKgRAAgAr3BuIAAgqIhjAAIAAAqIgXAAIgDg/IAMAAQALgMAFgOQAGgOACgaIABgiIgUgDIAAgQICIAAIAAAQIgWAEIAABjIATAAIgCA/gAs2gTQgBAWgGAQQgFARgIALIBAAAIAAhhIgrAAgAHFA8QgMgLAAgUQAAgUARgJQAQgLAdAAIAbAAIAAgQQAAgNgIgHQgIgIgOAAQgKAAgHACQgIADgFAFIgCAOIgUAAIAAgbQAJgIAOgEQAOgFAQgBQAZAAAPANQAPAMAAAYIAABNIALACIAAAQIgiAAIgDgUQgIAKgLAGQgLAHgNAAQgWAAgMgLgAHdAMQgKAHAAALQAAAJAGAFQAGAFAMAAQANAAAKgGQALgHAFgIIAAgXIgcAAQgQgBgJAIgACbAzQgRgVAAgeIAAgEQAAgeARgVQAQgUAfgBQARABAOAFQANAGAJAKIACAfIgVAAIgGgWQgEgEgIgDQgHgDgJAAQgUAAgJAPQgJAOAAAWIAAAEQAAAVAJAPQAIAPAVAAQANgBAKgHQAKgJAAgLIAXAAIAAABQABASgRAOQgRAPgXAAQgfAAgQgUgAl5A8QgMgLAAgUQAAgUAQgJQARgLAcAAIAbAAIAAgQQAAgNgIgHQgIgIgOAAQgKAAgHACQgHADgFAFIgDAOIgUAAIAAgbQAKgIAOgEQAOgFAQgBQAYAAAPANQAPAMAAAYIAABIIABAFIAKACIAAAQIgiAAIgDgUQgHAKgLAGQgMAHgNAAQgWAAgLgLgAliAMQgJAHAAALQAAAJAGAFQAGAFALAAQANAAALgGQALgHAEgIIAAgXIgcAAQgPgBgKAIgAqzAzQgSgUAAgfIAAgFQAAgeASgUQASgUAZgBQAdABAPARQAPARAAAeIAAANIhdAAIAAABQAAAVAKANQAKAOASAAQANAAAKgEQAKgEAHgHIALARQgIAHgNAGQgMAFgSAAQgeAAgRgUgAqegsQgJALgCARIAAAAIBCAAIAAgDQAAgPgJgKQgIgLgQAAQgNAAgJALgAwJArQgYgcAAgoIAAgCQAAgqAYgcQAXgbAngBQAVABARAIQARAJAIAKIAAAiIgSAAIgFgbQgHgGgJgEQgJgFgNAAQgeAAgQAXQgQAVAAAiIAAACQAAAgAQAVQAQAXAcAAQANAAAKgFQALgDAGgHIAFgbIASAAIAAAjQgIAKgRAIQgRAJgVAAQgmAAgYgcgANlBEIgwg8IgRAAIAAAnIAVAFIAAAQIhEAAIAAgQIAVgFIAAhjIgVgEIAAgQIBEAAIAAAQIgVAEIAAAnIAOAAIAegoQAIgKAHgHQAIgFAKAAQAGAAAEACIAJAEIgEARIgHgBIgDAAQgFABgFADQgEADgEAFIgbAkIAsA1IATAEIAAAQgAJNBEIAAgQIAWgFIAAhjIgWgEIAAgQIBOAAQAcAAAPAJQAQAKAAATQAAALgGAHQgGAJgLADQANAEAIAHQAHAJAAALQAAAVgOAJQgPALgaAAgAJ8AwIAoAAQAOAAAIgFQAHgGAAgKQAAgLgHgFQgIgGgOABIgoAAgAJ8gNIAfAAQAQAAAJgEQAIgFAAgKQAAgKgIgFQgJgGgQAAIgfAAgAE7BEIAAgQIAVgFIAAhkIgeAAIgCAXIgWAAIAAgqICHAAIAAAqIgWAAIgCgXIgfAAIAABkIAWAFIAAAQgAhVBEIAAgQIAVgFIAAhjIgVgEIAAgQIBEAAIAAAQIgVAEIAAAcIAjAAQAYABAOANQAOAKAAAUQAAAWgOAMQgOAOgYAAgAgmAvIAjAAQAMAAAHgGQAHgIAAgMQAAgKgHgJQgHgFgMgBIgjAAgAjTBEIAAgQIAVgFIAAhkIgeAAIgCAXIgWAAIAAgqICHAAIAAAqIgWAAIgCgXIgfAAIAABkIAWAFIAAAQgAnjBEIAAgQIAVgFIAAhjIgwAAIAAApQAAAngLAUQgLAUgbAAIgIAAIABgWIAFgBQAOAAAGgNQAFgOAAgdIAAgpIgVgEIAAgQICPAAIAAAQIgWAEIAABjIAWAFIAAAQg");
	this.shape.setTransform(105.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.7,25.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egy1Ab0MAAAg3nMBlrAAAMAAAA3ng");
	this.shape.setTransform(325.5,178);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651,356);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fi();
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,335.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fo();
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,335.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.on();
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,563.8,402.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.si();
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,335.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tr();
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,335.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tw();
	this.instance.setTransform(0,0,0.805,0.805);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,633,335.9);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlYFZIAAqxIKxAAIAAKxg");
	mask.setTransform(34.6,34.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BiQAChuA1hWIA4AmQguBJABBWg");
	this.shape.setTransform(37.5,59.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgAAQBWg1BsAAIAAA/QhfAGhAAmg");
	this.shape_1.setTransform(59.3,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBWQgOgBgJgKIhXhWQgKgKAAgMQAAgMAJgJIAdgYQAKgJANABQAOABAKAKIBWBWQAKALAAAMQAAAMgJAJIgdAZQgJAHgLAAIgDgBgAg1g2QgFAEAEAIQADAFAKAJIBJBJQAJAJAFADQAHAEAFgEQAFgFgEgGQgCgEgKgKIhJhIQgKgLgFgCQgEgDgDAAQgDAAgCACg");
	this.shape_2.setTransform(30.1,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATBSIhWgaQgOgEgHgLQgHgMAEgMIAIgVIgNgEIANglIANAEIAHgUQAEgNANgFQANgGAOAEIBWAaQAOAEAHALQAHAMgEAMIgHASIANAEIgNAmIgNgEIgIAWQgEANgNAFQgHADgIAAQgGAAgGgBgAgsAUIBDAVQANADAHgBQAHgBAFgHIh4gjQAAAOAVAGgAg1gkIB5AkQABgIgEgFQgFgGgOgEIhEgVQgGgCgGAAQgMAAgHAKg");
	this.shape_3.setTransform(15.4,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlTiIQAjg5A1g1QA2g3A9glIHcKlg");
	this.shape_4.setTransform(34.9,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiLgIQAahfA6hSIDeCTQgiAugPA8QgNAwgEBFIkLABQAChuAZhUg");
	this.shape_5.setTransform(16.7,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhKhOIAngKIAZBPIAPgGIgWhOIAigKIA6C2IglAKIgbhYIgPAFIAZBXIglALg");
	this.shape_6.setTransform(53.5,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ai6g5QCrhpDKgDIAAEIQh5AKhlA5g");
	this.shape_7.setTransform(50.4,16.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,69.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(315.9,164.5,1,1,0,0,0,315.9,164.5);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,633,330);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(303,468,1,1,0,0,0,186,100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({y:150,alpha:0},0).to({y:100,alpha:1},7,cjs.Ease.get(1)).wait(8).to({y:150,alpha:0},7,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(315.9,170.5,1,1,0,0,0,315.9,164.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,5.5,633,562.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ger.jpg
	this.instance = new lib.Символ18();
	this.instance.setTransform(136.5,80,1,1,0,0,0,15,9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({_off:false},0).to({alpha:1},4).wait(51).to({alpha:0},5).wait(1));

	// spa.jpg
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(136.5,80,1,1,0,0,0,15,9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(239).to({_off:false},0).to({alpha:1},4).wait(50).to({alpha:0},5).to({_off:true},1).wait(61));

	// ita.jpg
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(136.5,80,1,1,0,0,0,15,9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179).to({_off:false},0).to({alpha:1},4).wait(50).to({alpha:0},5).to({_off:true},1).wait(121));

	// Слой 7
	this.instance_3 = new lib.Символ21();
	this.instance_3.setTransform(136.5,80,1,1,0,0,0,15,9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).to({alpha:1},4).wait(50).to({alpha:0},5).to({_off:true},1).wait(181));

	// fra.jpg
	this.instance_4 = new lib.Символ19();
	this.instance_4.setTransform(136.5,80,1,1,0,0,0,15,9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({alpha:1},4).wait(50).to({alpha:0},5).to({_off:true},1).wait(240));

	// bra.jpg
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(136.5,80,1,1,0,0,0,15,9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},4).wait(50).to({alpha:0},5).to({_off:true},1).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.9,71,64.7,18);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(218.6,23,1,1,0,0,0,215.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(220.1,24.4,1,1,0,0,0,215.7,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,9.8,432.9,27.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(165,49,1,1,0,0,0,105.8,12.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#348CBD").s().rr(-165,-49,330,98,16.9);
	this.shape.setTransform(165,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330,98);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(305.4,-68.3,1,1,0,0,0,325.4,178);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).wait(50).to({alpha:1},0).to({alpha:0},9).wait(50).to({alpha:1},0).to({alpha:0},9).wait(50).to({alpha:1},0).to({alpha:0},9).wait(50).to({alpha:1},0).to({alpha:0},9).wait(50).to({alpha:1},0).to({alpha:0},9).to({_off:true},1).wait(55));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(298.5,-64.1,1,1,0,0,0,316.5,167.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:168,scaleX:1.06,scaleY:1.06,y:-64},59).to({_off:true},1).wait(300));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(295.5,-66.1,1,1,0,0,0,316.5,167.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({scaleX:1.06,scaleY:1.06},59).to({_off:true},1).wait(241));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(290.5,-64.1,1,1,0,0,0,316.5,167.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118).to({_off:false},0).to({regX:316.4,scaleX:1.07,scaleY:1.07,x:290.4},59).to({_off:true},1).wait(182));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(301.5,-67.1,1,1,0,0,0,316.5,167.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(177).to({_off:false},0).to({regY:168,scaleX:1.05,scaleY:1.05,y:-67},59).to({_off:true},1).wait(123));

	// Символ 2
	this.instance_5 = new lib.Символ2();
	this.instance_5.setTransform(298.5,-62.1,1,1,0,0,0,316.5,167.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(236).to({_off:false},0).to({scaleX:1.05,scaleY:1.05},59).to({_off:true},1).wait(64));

	// Символ 5
	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(298.6,-18.6,1.07,1.07,0,0,0,281.9,201.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(295).to({_off:false},0).to({regX:281.8,scaleX:1.12,scaleY:1.12,x:298.5},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-246.3,651,356);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlYFZIAAqxIKxAAIAAKxg");
	mask.setTransform(34.6,34.5);

	// Слой 3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(34.6,34.5,1,1,0,0,0,34.6,34.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,69.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(136,40.4,0.824,0.824,0,0,0,165,49);

	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(136,40.4,0.824,0.824,0,0,0,105.8,12.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().rr(-165,-49,330,98,16.9);
	this.shape.setTransform(136,40.4,0.824,0.824);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,80.8);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(34.6,34.5,1,1,0,0,0,34.6,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,69.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQhLIAogMIAyBLIgXhTIAmgMIA4C3IgqAMIgwhMIAXBUIgmAMg");
	this.shape.setTransform(53.5,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhiAOIAXhQIAlAKIgKAiIAkAKIAIgeIAiALIgJAeIBPAUIgPAwg");
	this.shape_1.setTransform(15.1,52.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmDFQgkAAgOgDQgOgDgNgLQgMgLgDgOQgDgOAAg0IAAivIgXAAIAAg4IAXAAIAAg2IBpAAIAAA2IAcAAIAAA4IgcAAIAAC4QAAAjADADQAEAFAaAAIAAA4g");
	this.shape_2.setTransform(227.4,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3CrQgZgKgPgRQgPgSgFgUQgFgUAAgnIAAhjQAAgvAMgZQAMgaAdgPQAbgOAlAAQArAAAdARQAdARALAcQAMAcAAAyIAAAsIiHAAIAABMQAAAYADAHQADAHAIAAQAMgBAFgIQAEgLAAgZIAAgtIBkAAIAAAZQAAAfgEASQgFATgOASQgOAUgYAKQgWAKgkAAQggAAgZgJgAgMhvQgCAIAAAcIAAAaIAdAAIAAgaQAAgagDgJQgDgHgJgBQgJABgDAGg");
	this.shape_3.setTransform(205.4,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANDPQgPgIgMgQIgHAaIhkAAIAAmnIBrAAIAABkQAMgOAPgIQAQgIATAAQAXAAAPAHQAQAHAIAMQAJANABALQACAMAAAnIAACbQAAAngFASQgGATgSANQgTAOgaAAQgTAAgQgIgAgMhLQgCAIAAAdIAACUQAAAcADAIQAEAIAHAAQAKAAADgJQADgHAAggIAAiQQAAgcgEgIQgDgIgJAAQgJAAgDAHg");
	this.shape_4.setTransform(177.8,35.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQCxIAAjvQAAgjgDgJQgCgIgLAAQgJAAgDAJQgDAKAAAmIAADqIhqAAIAAlaIBsAAIgCAgQALgTAPgKQARgKAWAAQAcAAARANQARANAFAUQAFASAAAvIAADyg");
	this.shape_5.setTransform(149.7,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5CtQgZgJgNgPQgOgQgGgWQgFgXAAgrIAAhYQAAgwALgcQAKgbAbgRQAcgQAqAAQAiAAAZALQAZAJAPATQAOAQAFATQAFAQAAAnIAABTQAAAvgEAWQgGAXgPASQgPATgZAJQgYAJggAAQghAAgYgHgAgLhvQgDAIAAAbIAACaQAAAaADAHQADAIAIAAQAJAAADgHQADgHAAgXIAAieQAAgbgDgIQgDgGgJgBQgIABgDAGg");
	this.shape_6.setTransform(121.9,38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcDUIAAmnIC5AAIAABVIhNAAIAABRIBFAAIAABPIhFAAIAACyg");
	this.shape_7.setTransform(98.3,35.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#348CBD").s().p("Ag3BiQAChuA2hWIA3AmQgtBHAABYg");
	this.shape_8.setTransform(37.4,59.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#348CBD").s().p("AhgAAQBVg1BsAAIAAA/QheAGhAAmg");
	this.shape_9.setTransform(59.3,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBWQgOgBgKgKIhWhWQgKgKAAgMQgBgMAKgJIAdgYQAJgJAOACQANAAAKAKIBXBXQAKAJAAANQAAAMgJAJIgdAYQgJAIgLAAIgDgBgAg1g2QgGAFAEAHQADAFALAJIBIBJQAKAJAFADQAHAEAEgEQAFgEgDgHQgCgEgKgKIhJhIQgKgKgFgDQgEgDgDAAQgDAAgCACg");
	this.shape_10.setTransform(30.1,29.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8DA8B2").s().p("AlTiHQAjg6A1g1QA2g3A9gmIHcKng");
	this.shape_11.setTransform(34.9,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#348CBD").s().p("AiMgIQAbhfA6hSIDeCTQgiAugQA8QgMAwgEBFIkLABQAChuAYhUg");
	this.shape_12.setTransform(16.7,50.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#348CBD").s().p("Ai5g5QCohnDLgFIAAEJQh3AJhmA5g");
	this.shape_13.setTransform(50.4,16.7);

	this.instance = new lib.Group();
	this.instance.setTransform(35,35,1,1,0,0,0,34.6,34.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235.6,69.5);


// stage content:
(lib._7chempion_600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.addEventListener("mouseover", MouseOver);
		function MouseOver() {
			_this.cube.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", MouseOut);
		function MouseOut() {
			_this.cube.gotoAndPlay(16);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ12();
	this.instance.setTransform(368,263.9,1.147,1.147,0,0,0,279,93.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(300,248.1,1,1,0,0,0,136,40.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Режим изоляции
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(64.3,20,0.468,0.468,0,0,0,117.7,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 6
	this.cube = new lib.Символ23();
	this.cube.setTransform(306.9,139.5,1,1,0,0,0,315.9,164.5);

	this.timeline.addTween(cjs.Tween.get(this.cube).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(518,-46,1,1,0,0,0,78,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(316.5,431.6,1,1,0,0,0,316.5,202.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,130.5,651,562.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
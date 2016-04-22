(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 60,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Path_0.png?1461339339214", id:"Path_0"},
		{src:"images/Path_1_0.png?1461339339214", id:"Path_1_0"},
		{src:"images/Path_2_0.png?1461339339214", id:"Path_2_0"},
		{src:"images/Path_3_0.png?1461339339214", id:"Path_3_0"},
		{src:"images/Path_4_0.png?1461339339214", id:"Path_4_0"},
		{src:"images/blik.png?1461339339214", id:"blik"},
		{src:"images/cofr.png?1461339339214", id:"cofr"},
		{src:"images/light.png?1461339339214", id:"light"},
		{src:"images/shadow.png?1461339339214", id:"shadow"}
	]
};



// symbols:



(lib.Path_0 = function() {
	this.initialize(img.Path_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,103);


(lib.Path_1_0 = function() {
	this.initialize(img.Path_1_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,101);


(lib.Path_2_0 = function() {
	this.initialize(img.Path_2_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,103);


(lib.Path_3_0 = function() {
	this.initialize(img.Path_3_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,102);


(lib.Path_4_0 = function() {
	this.initialize(img.Path_4_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,536,131);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,30);


(lib.cofr = function() {
	this.initialize(img.cofr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,57);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,50);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Egj6AEiQgNgBgJgIQgIgJgBgNIAAoFQABgNAIgJQAJgJANAAMBH2AAAQAMAAAIAJQAKAJgBANIAAIFQABANgKAJQgIAIgMABg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF6600","#FFCC00","#FF6600"],[0,0.502,1],-233,0,233,0).s().p("Egj6AEiQgNgBgJgIQgIgJgBgNIAAoFQABgNAIgJQAJgJANAAMBH2AAAQAMAAAIAJQAKAJgBANIAAIFQABANgKAJQgIAIgMABg");
	this.shape.setTransform(0,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A75D00").s().p("Egj6AEiQgNAAgJgJQgIgJgBgMIAAoGQABgNAIgJQAJgJANAAMBH2AAAQAMAAAIAJQAKAJgBANIAAIGQABAMgKAJQgIAJgMAAg");
	this.shape_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-29.5,466,59);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#008200","#00C520","#008200"],[0,0.502,1],-233,0,233,0).s().p("Egj6AEiQgNgBgJgIQgIgJgBgNIAAoFQABgNAIgJQAJgJANAAMBH2AAAQAMAAAIAJQAKAJgBANIAAIFQABANgKAJQgIAIgMABg");
	this.shape.setTransform(0,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006511").s().p("Egj6AEiQgNAAgJgJQgIgJgBgMIAAoGQABgNAIgJQAJgJANAAMBH2AAAQAMAAAIAJQAKAJgBANIAAIGQABAMgKAJQgIAJgMAAg");
	this.shape_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-29.5,466,59);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AHGAAIuLAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-1,92.9,2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1FlIAAggIFDlFIlDlEIAAggIAEgEIFnFoIlnFog");
	this.shape.setTransform(18.3,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,72.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AGcAAIs3AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-1,84.5,2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.537)").s().p("ABGA1IgIgEIgGgFIgEgJIgCgJQgBgIACgSQABgKAEgQIAFgJIAFgIIAHgFQAEgCAFgCQAGgCAPAAIALAAIAKACIAIAEIAFAFIAEAIIACAKIABAMIgBANQgEAUgDAHIgEAJIgGAIIgHAGIgIADQgMADgJgBQgPgBgFgBgABcgiQgFACgDAEQgCAEgDAHIgEARIgBARQAAAIABADQADAFADACQAEABAGAAQAGAAAEgCQAFgBACgFQAEgEACgHIADgRIACgRQAAgIgCgDQgCgEgDgCQgEgCgGABQgHgBgDACgAklA2IgIgBIgGgFQgEgCgCgDIgCgIIgCgKQgCgIADgRQABgKAEgQIAFgJIAEgIIAGgFQAEgCAEgCQAGgCANAAIALAAIAJACIAHAFIAEAFIAEAIIABAKQAAAQgBAIQgDATgDAHIgDAJIgGAIQgDAEgDABIgHAFIgJABIgLABgAkXgjIgHAHQgCAEgCAHQgCAHgBAKIgCARQAAAIABAEQACAEADACQACABAGAAQAGAAAEgBQAEgCACgEQADgFACgHIADgRIABgRIgBgLQgBgFgDgCQgDgBgFAAQgGAAgEABgAmGA2IgIgBIgHgFQgDgCgCgDQgCgEgBgEIgCgKQgBgIACgRIAFgaIAFgJQACgEADgEIAGgFQAEgCADgCQAGgCANAAIALAAIAJACQAEACACADIAGAFQACAEABAEIABAKQABAQgCAIQgDATgDAHIgDAJQgCAFgEADQgCAEgDABIgIAFIgJABIgKABgAl5gjQgDADgDAEIgFALIgDARIgCARQAAAIABAEQACAEADACQADABAFAAQAGAAAEgBQAEgCADgEQACgFABgHIAEgRIACgRQAAgIgCgDQAAgFgEgCQgDgBgGAAQgFAAgEABgAETA2IgNgBIAEgSIAMABIAHgBQADgBABgCQADgCACgEIACgDIgFAAQgGAAgDgEQgDgCgBgGIgNhAIAYAAIAJA3QAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAIAFAAIAag5IAaAAIgnBPQgHAQgFAEIgIAHIgKACIgCAAIgLgBgAGAA2IgJgCIgIgEIgGgGQgCgDgBgFQgCgEAAgGQgBgHACgRIAFgaIAFgJIAFgIIAHgFQAEgCAEgCQAHgCAOAAIATABIAOACIgDASIgegBQgHAAgDABQgFABgDAFQgCADgDAHQgCAIgBAJIgCARQAAAGACAEQABAEAEACQAEABAFABIAhgBIABARQgIACgIABIgTABgAiHA2QgFgCgDgFQgDgDgBgHQAAgGABgJQABgJACgGQADgGADgBQADgEAFgCQAFgCAIAAQAHAAAFACQAFACADAEQADACABAGQABAGgBAKIgEAOQgDAHgDADQgDAEgFACQgGABgHAAQgIAAgEgBgAh6AFIgDADQgCAEgCAMQgCALABADQACAFAFAAQAEgBACgBIADgDQADgDACgNQABgLgBgDQgCgEgFgBIgGACgAgvA2IAPhrQARgBASAAIAkABIgEASIgtAAIgFAaIAPAAQAKAAAHABQAJACADAFQAEABACAHQABAGgBAKQgCAJgCAGQgDAGgEAEQgFADgHADIgOAAIgtAAgAgVAkIAWAAIAFgCQACgDABgDIACgIIABgHIgCgFQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAIgXAAgAHGA2QgFgBgBgCQgCgCABgEIABgIQAAgEACgBQACgCAEAAIAFAAQAFAAABACQACACgBAEIAAAHQAAAEgDADQgCABgEABgADXA2IAHgxIgnAAIgGAxIgYAAIAQhrIAXAAIgFAqIAlAAIAGgqIAXAAIgOBrgAjMA2IBQhrIAQAAIhQBrgAnTA2IAKhMIACgLIgaAHIgBgQIAegLIAXAAIgPBrgAHEATIAHhIIAYAAIgNBIgAjPAGQgFgCgDgEQgCgCgBgGIAAgQIADgOQADgGADgEQADgDAGgCQAEgCAIABQAHgBAFACQAGACACAEQADADABAHQABAGgBAJIgEAPQgCAGgDABQgEAEgFACQgFABgIABQgHAAgFgCgAjCgpQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQgCAEgCAMQgCALABAEQACADAFAAIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAgBQADgDACgNQACgLgCgDQgBgEgGAAIgGABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-5.6,96.6,11.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.setTransform(-145,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-15,290,30);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.4,-8.2,276.9,16.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egj7AEiQgMAAgJgKQgJgIAAgMIAAoGQAAgNAJgJQAJgJAMABMBH3AAAQAMgBAJAJQAJAJAAANIAAIGQAAAMgJAIQgJAKgMAAgEgkMgEUQgIAHABALIAAIGQgBAJAIAIQAHAIAKgBMBH3AAAQAJABAIgIQAIgIgBgJIAAoGQABgLgIgHQgIgHgJgBMhH3AAAQgKABgHAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-29,466,58);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cofr();
	this.instance.setTransform(-25.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-28.5,51,57);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path_4_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,536,131);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path_3_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,102);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path_2_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,103);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path_1_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,101);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,103);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmMABZIAAixMBMYAAAIAACxg");
	mask.setTransform(244.5,8.9);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.4)","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,233).s().p("A5uAaQqrgLABgPQgBgOKrgKQKpgLPFAAQPFAAKqALQKrAKgBAOQABAPqrALQqsAKvDAAQvCAAqsgKg");
	this.shape.setTransform(247,17.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,14.2,466,3.7);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgmMABYIAAivMBMYAAAIAACvg");
	mask.setTransform(244.5,12.6);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.4)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,233).s().p("A5uAZQqqgKgBgPQABgOKqgKQKsgLPCAAQPDAAKsALQKrAKAAAOQAAAPqrAKQqsALvDAAQvCAAqsgLg");
	this.shape.setTransform(242,3.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,3.7,466,3.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(23));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzUDEQgXgXAAghQAAghAXgYQAYgXAhAAQAhAAAYAXQAXAYAAAhQAAAhgXAXQgYAYghAAQghAAgYgYg");
	var mask_graphics_1 = new cjs.Graphics().p("A2vMmQlOlOAAnYQAAnXFOlOQFOlOHYAAQHZAAFMFOQFOFOAAHXQAAHYlOFOQlMFOnZAAQnYAAlOlOg");
	var mask_graphics_2 = new cjs.Graphics().p("A5rWnQpYpXAAtQQAAtPJYpYQJYpXNQAAQNOAAJYJXQJYJYAANPQAANQpYJXQpYJYtOAAQtQAApYpYg");
	var mask_graphics_3 = new cjs.Graphics().p("A9+d+QsasbAAxjQAAxiMascQMcsaRiAAQRkAAMaMaQMbMcAARiQAARjsbMbQsaMbxkAAQxiAAscsbg");
	var mask_graphics_4 = new cjs.Graphics().p("Egi9Ai+QugufAA0fQAA0eOgufQOfugUeAAQUfAAOfOgQOgOfAAUeQAAUfugOfQufOg0fAAQ0eAAufugg");
	var mask_graphics_5 = new cjs.Graphics().p("EgmiAmiQv9v+AA2kQAA2jP9v/QP/v9WjAAQWlAAP9P9QP+P/AAWjQAAWkv+P+Qv9P+2lAAQ2jAAv/v+g");
	var mask_graphics_6 = new cjs.Graphics().p("EgpWApWQxIxIAA4OQAA4NRIxJQRJxIYNAAQYOAARIRIQRJRJAAYNQAAYOxJRIQxIRJ4OAAQ4NAAxJxJg");
	var mask_graphics_7 = new cjs.Graphics().p("EgrvArwQyIyIAA5oQAA5nSIyIQSIyIZnAAQZoAASISIQSISIAAZnQAAZoyISIQyISI5oAAQ5nAAyIyIg");
	var mask_graphics_8 = new cjs.Graphics().p("EgtsAttQy8y8AA6xQAA6wS8y8QS8y8awAAQaxAAS8S8QS8S8AAawQAAaxy8S8Qy8S86xAAQ6wAAy8y8g");
	var mask_graphics_9 = new cjs.Graphics().p("EgvQAvRQzlzlAA7sQAA7rTlzlQTlzlbrAAQbsAATlTlQTlTlAAbrQAAbszlTlQzlTl7sAAQ7rAAzlzlg");
	var mask_graphics_10 = new cjs.Graphics().p("EgwhAwiQ0H0HAA8bQAA8aUH0HQUH0HcaAAQcbAAUHUHQUHUHAAcaQAAcb0HUHQ0HUH8bAAQ8aAA0H0Hg");
	var mask_graphics_11 = new cjs.Graphics().p("EgxjAxjQ0h0iAA9BQAA9AUh0jQUj0hdAAAQdCAAUhUhQUiUjAAdAQAAdB0iUiQ0hUi9CAAQ9AAA0j0ig");
	var mask_graphics_12 = new cjs.Graphics().p("EgyYAyYQ0403AA9hQAA9gU404QU404dgAAQdhAAU3U4QU5U4AAdgQAAdh05U3Q03U59hAAQ9gAA0405g");
	var mask_graphics_13 = new cjs.Graphics().p("EgzDAzEQ1K1KAA96QAA95VK1KQVK1Kd5AAQd6AAVKVKQVKVKAAd5QAAd61KVKQ1KVK96AAQ95AA1K1Kg");
	var mask_graphics_14 = new cjs.Graphics().p("EgznAznQ1Y1YAA+PQAA+OVY1ZQVZ1YeOAAQePAAVYVYQVZVZAAeOQAAeP1ZVYQ1YVZ+PAAQ+OAA1Z1Zg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg0EA0FQ1l1lAA+gQAA+fVl1lQVl1lefAAQehAAVkVlQVlVlAAefQAAeg1lVlQ1kVl+hAAQ+fAA1l1lg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg0dA0eQ1v1vAA+vQAA+uVv1vQVv1veuAAQevAAVvVvQVvVvAAeuQAAev1vVvQ1vVv+vAAQ+uAA1v1vg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg0yA0zQ1414AA+7QAA+6V414QV414e6AAQe8AAV3V4QV4V4AAe6QAAe714V4Q13V4+8AAQ+6AA1414g");
	var mask_graphics_18 = new cjs.Graphics().p("Eg1FA1GQ2A2AAA/GQAA/FWA2AQWA2AfFAAQfHAAV/WAQWAWAAAfFQAAfG2AWAQ1/WA/HAAQ/FAA2A2Ag");
	var mask_graphics_19 = new cjs.Graphics().p("Eg1XA1XQ2G2HAA/QQAA/PWG2IQWI2GfPAAQfRAAWGWGQWHWIAAfPQAAfQ2HWHQ2GWH/RAAQ/PAA2I2Hg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg1nA1oQ2O2OAA/aQAA/ZWO2OQWO2OfZAAQfaAAWOWOQWOWOAAfZQAAfa2OWOQ2OWO/aAAQ/ZAA2O2Og");
	var mask_graphics_21 = new cjs.Graphics().p("Eg14A14Q2U2UAA/kQAA/jWU2VQWV2UfjAAQfkAAWUWUQWVWVAAfjQAAfk2VWUQ2UWV/kAAQ/jAA2V2Vg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg2IA2JQ2c2bAA/uQAA/tWc2cQWb2bftAAQfuAAWbWbQWcWcAAftQAAfu2cWbQ2bWc/uAAQ/tAA2b2cg");
	var mask_graphics_23 = new cjs.Graphics().p("EgqbAqbQxkxlAA42QAA41RkxmQRmxkY1AAQY3AARkRkQRlRmAAY1QAAY2xlRlQxkRl43AAQ41AAxmxlg");
	var mask_graphics_24 = new cjs.Graphics().p("EggZAgaQtbtbAAy/QAAy+NbtbQNbtbS+AAQS/AANbNbQNbNbAAS+QAAS/tbNbQtbNby/AAQy+AAtbtbg");
	var mask_graphics_25 = new cjs.Graphics().p("A6ZZDQqYqYAAurQAAuqKYqYQKZqYOrAAQOpAAKYKYQKZKYAAOqQAAOrqZKYQqYKYupAAQurAAqZqYg");
	var mask_graphics_26 = new cjs.Graphics().p("A47UDQoUoUAArvQAAruIUoUQIUoULwAAQLuAAITIUQIUIUAALuQAALvoUIUQoTIUruAAQrwAAoUoUg");
	var mask_graphics_27 = new cjs.Graphics().p("A34QfQm1m1AApqQAAppG1m1QG1m1JqAAQJpAAG1G1QG1G1AAJpQAAJqm1G1Qm1G1ppAAQpqAAm1m1g");
	var mask_graphics_28 = new cjs.Graphics().p("A3DNrQlrlrAAoAQAAn/FrlrQFqlqIBAAQIBAAFoFqQFrFrAAH/QAAIAlrFrQloFqoBAAQoBAAlqlqg");
	var mask_graphics_29 = new cjs.Graphics().p("A2WLRQkrkrAAmmQAAmlErkrQErkrGmAAQGnAAEpErQErErAAGlQAAGmkrErQkpErmnAAQmmAAkrkrg");
	var mask_graphics_30 = new cjs.Graphics().p("A1yJVQj3j4AAldQAAlcD3j4QD3j3FeAAQFeAAD3D3QD2D4AAFcQAAFdj2D4Qj3D3leAAQleAAj3j3g");
	var mask_graphics_31 = new cjs.Graphics().p("A1VHwQjNjNAAkjQAAkiDNjNQDOjOEjAAQEjAADODOQDODNAAEiQAAEjjODNQjODOkjAAQkjAAjOjOg");
	var mask_graphics_32 = new cjs.Graphics().p("A09GfQisisAAjzQAAjyCsisQCsitD0AAQD0AACsCtQCsCsAADyQAADzisCsQisCtj0AAQj0AAisitg");
	var mask_graphics_33 = new cjs.Graphics().p("A0qFeQiRiRAAjNQAAjMCRiRQCSiRDNAAQDNAACRCRQCRCRAADMQAADNiRCRQiRCRjNAAQjNAAiSiRg");
	var mask_graphics_34 = new cjs.Graphics().p("A0aEpQh7h7AAiuQAAitB7h7QB7h7CuAAQCuAAB7B7QB7B7AACtQAACuh7B7Qh7B7iuAAQiuAAh7h7g");
	var mask_graphics_35 = new cjs.Graphics().p("A0ND+QhphpAAiVQAAiSBphqQBphpCUAAQCVAABpBpQBpBqAACSQAACVhpBpQhpBpiVAAQiUAAhphpg");
	var mask_graphics_36 = new cjs.Graphics().p("A0DD0QhahbAAiAQAAh9BahbQBahaCAAAQCAAABbBaQBaBbAAB9QAACAhaBbQhbBaiAAAQiAAAhahag");
	var mask_graphics_37 = new cjs.Graphics().p("Az6DrQhOhOAAhvQAAhsBOhOQBOhPBuAAQBvAABOBPQBOBOAABsQAABvhOBOQhOBOhvAAQhuAAhOhOg");
	var mask_graphics_38 = new cjs.Graphics().p("AzzDkQhEhEAAhgQAAheBEhEQBEhEBgAAQBgAABEBEQBEBEAABeQAABghEBEQhEBEhgAAQhgAAhEhEg");
	var mask_graphics_39 = new cjs.Graphics().p("AztDeQg7g8AAhTQAAhSA7g7QA7g7BUAAQBTAAA8A7QA7A7AABSQAABTg7A8Qg8A7hTAAQhUAAg7g7g");
	var mask_graphics_40 = new cjs.Graphics().p("AznDYQg0gzAAhJQAAhIA0gyQAzgzBJAAQBIAAAzAzQA0AyAABIQAABJg0AzQgzAzhIAAQhJAAgzgzg");
	var mask_graphics_41 = new cjs.Graphics().p("AziDTQgsgsAAg/QAAg+AsgqQAsgsA+AAQA/AAAsAsQAsAqAAA+QAAA/gsAsQgsAsg/AAQg+AAgsgsg");
	var mask_graphics_42 = new cjs.Graphics().p("AzdDOQgmglAAg1QAAg1AmglQAlgjA1AAQA0AAAmAjQAlAlAAA1QAAA1glAlQgmAlg0AAQg1AAglglg");
	var mask_graphics_43 = new cjs.Graphics().p("AzZDJQgegeAAgrQAAgrAegfQAfgeArAAQArAAAfAeQAeAfAAArQAAArgeAeQgfAfgrAAQgrAAgfgfg");
	var mask_graphics_44 = new cjs.Graphics().p("AzUDEQgXgXAAghQAAghAXgYQAYgXAhAAQAhAAAYAXQAXAYAAAhQAAAhgXAXQgYAYghAAQghAAgYgYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-126.1,y:22}).wait(1).to({graphics:mask_graphics_1,x:-179.1,y:36.1}).wait(1).to({graphics:mask_graphics_2,x:-224.4,y:36.1}).wait(1).to({graphics:mask_graphics_3,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_4,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_5,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_6,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_7,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_8,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_9,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_10,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_11,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_12,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_13,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_14,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_15,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_16,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_17,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_18,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_19,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_20,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_21,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_22,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_23,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_24,x:-244.1,y:36.1}).wait(1).to({graphics:mask_graphics_25,x:-235.4,y:36.1}).wait(1).to({graphics:mask_graphics_26,x:-212.8,y:36.1}).wait(1).to({graphics:mask_graphics_27,x:-196.7,y:36.1}).wait(1).to({graphics:mask_graphics_28,x:-183.9,y:36.1}).wait(1).to({graphics:mask_graphics_29,x:-173.1,y:36.1}).wait(1).to({graphics:mask_graphics_30,x:-164.3,y:36.1}).wait(1).to({graphics:mask_graphics_31,x:-157.2,y:36.1}).wait(1).to({graphics:mask_graphics_32,x:-151.5,y:36.1}).wait(1).to({graphics:mask_graphics_33,x:-146.8,y:36.1}).wait(1).to({graphics:mask_graphics_34,x:-143.1,y:36.1}).wait(1).to({graphics:mask_graphics_35,x:-140,y:36}).wait(1).to({graphics:mask_graphics_36,x:-137.5,y:33.5}).wait(1).to({graphics:mask_graphics_37,x:-135.4,y:31.4}).wait(1).to({graphics:mask_graphics_38,x:-133.6,y:29.6}).wait(1).to({graphics:mask_graphics_39,x:-132.1,y:28.1}).wait(1).to({graphics:mask_graphics_40,x:-130.8,y:26.8}).wait(1).to({graphics:mask_graphics_41,x:-129.6,y:25.6}).wait(1).to({graphics:mask_graphics_42,x:-128.4,y:24.4}).wait(1).to({graphics:mask_graphics_43,x:-127.3,y:23.2}).wait(1).to({graphics:mask_graphics_44,x:-126.1,y:22}).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(427.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(9).to({alpha:1},2).to({alpha:0},3).wait(3));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(416.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).wait(8).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(3));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(405.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).wait(7).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(4));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(395.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).wait(6).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(5));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ19();
	this.instance_4.setTransform(384.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).wait(5).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(6));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_5 = new lib.Символ19();
	this.instance_5.setTransform(373.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(32).to({_off:false},0).wait(4).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(7));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_6 = new lib.Символ19();
	this.instance_6.setTransform(362.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).wait(3).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(8));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_7 = new lib.Символ19();
	this.instance_7.setTransform(351.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).wait(2).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(9));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_8 = new lib.Символ19();
	this.instance_8.setTransform(340.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({x:341.7},1).to({x:340.7,alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(10));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_9 = new lib.Символ19();
	this.instance_9.setTransform(327.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).wait(9).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(12));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_10 = new lib.Символ19();
	this.instance_10.setTransform(316.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(22).to({_off:false},0).wait(8).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(13));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_11 = new lib.Символ19();
	this.instance_11.setTransform(305.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(22).to({_off:false},0).wait(7).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(14));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_12 = new lib.Символ19();
	this.instance_12.setTransform(295.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(22).to({_off:false},0).wait(6).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(15));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_13 = new lib.Символ19();
	this.instance_13.setTransform(284.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(22).to({_off:false},0).wait(5).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(16));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_14 = new lib.Символ19();
	this.instance_14.setTransform(273.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22).to({_off:false},0).wait(4).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(17));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_15 = new lib.Символ19();
	this.instance_15.setTransform(262.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(22).to({_off:false},0).wait(3).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(18));

	// Слой 1 - копия: 2
	this.instance_16 = new lib.Символ19();
	this.instance_16.setTransform(251.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(22).to({_off:false},0).wait(2).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(19));

	// Слой 1 - копия: 2
	this.instance_17 = new lib.Символ19();
	this.instance_17.setTransform(240.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(22).to({_off:false},0).wait(1).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(20));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_18 = new lib.Символ19();
	this.instance_18.setTransform(227.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(10).to({_off:false},0).wait(9).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(24));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_19 = new lib.Символ19();
	this.instance_19.setTransform(216.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10).to({_off:false},0).wait(8).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(25));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_20 = new lib.Символ19();
	this.instance_20.setTransform(205.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(10).to({_off:false},0).wait(7).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(26));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_21 = new lib.Символ19();
	this.instance_21.setTransform(195.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10).to({_off:false},0).wait(6).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(27));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_22 = new lib.Символ19();
	this.instance_22.setTransform(184.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(10).to({_off:false},0).wait(5).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(28));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_23 = new lib.Символ19();
	this.instance_23.setTransform(173.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(10).to({_off:false},0).wait(4).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(29));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_24 = new lib.Символ19();
	this.instance_24.setTransform(162.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(10).to({_off:false},0).wait(3).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(30));

	// Слой 1 - копия: 2
	this.instance_25 = new lib.Символ19();
	this.instance_25.setTransform(151.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(10).to({_off:false},0).wait(2).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(31));

	// Слой 1 - копия: 2
	this.instance_26 = new lib.Символ19();
	this.instance_26.setTransform(140.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(10).to({_off:false},0).to({x:141.7},1).to({x:140.7,alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(32));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_27 = new lib.Символ19();
	this.instance_27.setTransform(127.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(9).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(34));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_28 = new lib.Символ19();
	this.instance_28.setTransform(116.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(8).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(35));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_29 = new lib.Символ19();
	this.instance_29.setTransform(105.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(7).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(36));

	// Слой 1 - копия: 2 - копия
	this.instance_30 = new lib.Символ19();
	this.instance_30.setTransform(95.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(6).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(37));

	// Слой 1 - копия: 2
	this.instance_31 = new lib.Символ19();
	this.instance_31.setTransform(84.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(5).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(38));

	// Слой 1 - копия: 2
	this.instance_32 = new lib.Символ19();
	this.instance_32.setTransform(73.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(4).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(39));

	// Слой 1 - копия: 2
	this.instance_33 = new lib.Символ19();
	this.instance_33.setTransform(62.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(3).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(40));

	// Слой 1 - копия
	this.instance_34 = new lib.Символ19();
	this.instance_34.setTransform(51.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(2).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(41));

	// Слой 1
	this.instance_35 = new lib.Символ19();
	this.instance_35.setTransform(40.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.5,0,123.8,72.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},22).to({alpha:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-15,290,30);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(146.5,58,1,1,0,0,0,173.5,85);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},20).to({alpha:1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233,-29,466,58);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ4();
	this.instance.setTransform(-2,0,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(-19,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-22,43,50);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,-21.9,1,1,0,0,0,244.5,10.7);
	this.instance.alpha = 0.801;

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(0,22,1,1,0,0,0,244.5,10.8);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.5,-32.6,489,65.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path();
	this.instance.setTransform(229,14,1,1,0,0,0,40,51.5);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(229,-15,1,1,0,0,0,40,50.5);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(-229,-14,1,1,0,0,0,40,51.5);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(-229,14.5,1,1,0,0,0,40,51);

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(1,0,1,1,0,0,0,268,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-65.5,538,131);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(-1.5,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-15,290,30);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(116.1,90.6,1,1,0,0,0,144.6,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:498.1,y:89.7},19,cjs.Ease.get(-1)).to({x:900.2,y:88.6},20,cjs.Ease.get(1)).to({_off:true},1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,7.5,347,170);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(23));

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(190.2,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:189.3,y:13.6},0).wait(1).to({x:188.4,y:14.5},0).wait(1).to({x:187.6,y:15.3},0).wait(1).to({x:187,y:15.9},0).wait(1).to({x:186.7,y:16.2},0).wait(1).to({x:186.4,y:16.5},0).wait(1).to({x:186.2,y:16.7},0).wait(1).to({x:186,y:16.9},0).wait(1).to({x:185.8,y:17.1},0).wait(1).to({x:185.7,y:17.2},0).wait(1).to({x:185.6,y:17.3},0).wait(1).to({x:185.5,y:17.4},0).wait(1).to({x:185.4,y:17.5},0).wait(3).to({x:185.3,y:17.6},0).wait(3).to({x:185.2,y:17.7},0).wait(4).to({x:186.1,y:16.8},0).wait(1).to({x:187,y:15.9},0).wait(1).to({x:187.8,y:15.1},0).wait(1).to({x:188.4,y:14.5},0).wait(1).to({x:188.7,y:14.2},0).wait(1).to({x:189,y:13.9},0).wait(1).to({x:189.2,y:13.7},0).wait(1).to({x:189.4,y:13.5},0).wait(1).to({x:189.6,y:13.3},0).wait(1).to({x:189.7,y:13.2},0).wait(1).to({x:189.8,y:13.1},0).wait(1).to({x:189.9,y:13},0).wait(1).to({x:190,y:12.9},0).wait(3).to({x:190.1,y:12.8},0).wait(3).to({x:190.2,y:12.7},0).wait(4));

	// Слой 3
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(206,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:206.9,y:-15.1},0).wait(1).to({x:207.8,y:-16},0).wait(1).to({x:208.6,y:-16.8},0).wait(1).to({x:209.2,y:-17.3},0).wait(1).to({x:209.5,y:-17.7},0).wait(1).to({x:209.8,y:-17.9},0).wait(1).to({x:210,y:-18.1},0).wait(1).to({x:210.2,y:-18.4},0).wait(1).to({x:210.4,y:-18.5},0).wait(1).to({x:210.5,y:-18.7},0).wait(1).to({x:210.6,y:-18.8},0).wait(1).to({x:210.7},0).wait(1).to({x:210.8,y:-18.9},0).wait(1).to({y:-19},0).wait(2).to({x:210.9},0).wait(1).to({y:-19.1},0).wait(2).to({x:211},0).wait(4).to({x:210.1,y:-18.2},0).wait(1).to({x:209.2,y:-17.3},0).wait(1).to({x:208.4,y:-16.5},0).wait(1).to({x:207.8,y:-16},0).wait(1).to({x:207.5,y:-15.6},0).wait(1).to({x:207.2,y:-15.4},0).wait(1).to({x:207,y:-15.2},0).wait(1).to({x:206.8,y:-14.9},0).wait(1).to({x:206.6,y:-14.8},0).wait(1).to({x:206.5,y:-14.6},0).wait(1).to({x:206.4,y:-14.5},0).wait(1).to({x:206.3},0).wait(1).to({x:206.2,y:-14.4},0).wait(1).to({y:-14.3},0).wait(2).to({x:206.1},0).wait(1).to({y:-14.2},0).wait(2).to({x:206},0).wait(3).to({y:-14.1},0).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(197.6,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.06,scaleY:1.06,x:193.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:189.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:186.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:184},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:182.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:181.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:180.4},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:179.5},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:178.8},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:178.2},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:177.7},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:177.4},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:177.1},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:176.9},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:176.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:176.6},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:176.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:176.3},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:176.2},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:176.1},0).wait(1).to({scaleX:1.31,scaleY:1.31},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:180.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:184},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:187.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:189.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:191.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:192.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:193.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:194.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:194.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:195.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:195.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:196.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:196.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:196.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:196.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:197},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:197.2},0).wait(1).to({scaleX:1,scaleY:1,x:197.3},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:197.4},0).wait(1).to({scaleX:1,scaleY:1,x:197.5},0).wait(1).to({scaleX:1,scaleY:1,x:197.6},0).wait(1));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(1.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.97,scaleY:0.97,x:-2.5,y:1.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-6.4,y:1.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-9.7,y:1.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-12},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-13.5,y:1.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-14.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-15.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-16.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-17.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-17.8,y:1.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-18.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-18.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-18.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-19.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-19.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-19.4},0).wait(1).to({x:-19.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-19.7},0).wait(2).to({scaleX:0.86,scaleY:0.86,x:-19.8},0).wait(1).to({x:-19.9},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-15.9,y:1.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-12,y:1.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-8.7,y:1.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-6.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-4.9,y:1.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-3.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-2.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-1.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-1.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-0.6,y:1.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-0.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:0.5},0).wait(1).to({scaleX:1,scaleY:1,x:0.7},0).wait(1).to({scaleX:1,scaleY:1,x:0.9},0).wait(1).to({scaleX:1,scaleY:1,x:1},0).wait(1).to({x:1.2},0).wait(1).to({scaleX:1,scaleY:1,x:1.3},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({x:1.4},0).wait(1).to({scaleX:1,scaleY:1,x:1.5},0).wait(1).to({x:1.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.4,-14.6,391.2,31.5);


// stage content:



(lib.button_468x60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.tekst.gotoAndPlay(1);
		    _this.hoover.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.tekst.gotoAndPlay(23);
		    _this.hoover.gotoAndPlay(23);
		}
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(link1, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4 - копия: 2
	this.button_1 = new lib.Символ29();
	this.button_1.setTransform(234,29.5);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ29(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	// Слой 8
	this.tekst = new lib.Символ6();
	this.tekst.setTransform(160.5,30.3);

	this.timeline.addTween(cjs.Tween.get(this.tekst).wait(1));

	// Слой 7
	this.instance = new lib.Символ5();
	this.instance.setTransform(435.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(234,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(234,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(234,29.5);
	this.instance_3.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 4 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egj2AEkQgMAAgJgJQgJgJAAgMIAAoGQAAgMAJgJQAJgJAMAAMBH3AAAQAMAAAJAJQAJAJAAAMIAAIGQAAAMgJAJQgJAJgMAAg");
	mask.setTransform(233.5,29.3);

	// Слой 5
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(-164.1,-26.4,1.538,1.538,0,0,0,144.6,56.1);
	this.instance_4.alpha = 0.551;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 6
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(23.7,29,1,1,0,0,0,18.2,36.1);
	this.instance_5.alpha = 0.148;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4 - копия: 2
	this.hoover = new lib.Символ26();
	this.hoover.setTransform(234,30);

	this.timeline.addTween(cjs.Tween.get(this.hoover).wait(1));

	// Слой 4
	this.instance_6 = new lib.Символ22();
	this.instance_6.setTransform(234,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199,-5.5,538,131);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
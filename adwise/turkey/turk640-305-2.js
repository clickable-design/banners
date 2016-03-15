(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#333333",
	manifest: [
		{src:"images/ball.png", id:"ball"},
		{src:"images/bashegel.png", id:"bashegel"},
		{src:"images/buton.png", id:"buton"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/Grad.png", id:"Grad"},
		{src:"images/orig.png", id:"orig"},
		{src:"images/orig2.png", id:"orig2"},
		{src:"images/tekt.png", id:"tekt"},
		{src:"images/turk.png", id:"turk"},
		{src:"images/vander.png", id:"vander"},
		{src:"images/verder.png", id:"verder"}
	]
};



// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.bashegel = function() {
	this.initialize(img.bashegel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,45);


(lib.buton = function() {
	this.initialize(img.buton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,135);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.Grad = function() {
	this.initialize(img.Grad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,368,384);


(lib.orig = function() {
	this.initialize(img.orig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,300);


(lib.orig2 = function() {
	this.initialize(img.orig2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,500);


(lib.tekt = function() {
	this.initialize(img.tekt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1044,76);


(lib.turk = function() {
	this.initialize(img.turk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,332);


(lib.vander = function() {
	this.initialize(img.vander);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,392);


(lib.verder = function() {
	this.initialize(img.verder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,384);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.orig2();
	this.instance.setTransform(19.8,-105.7,0.434,0.423,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.7,-105.7,39.5,211.5);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.orig2();
	this.instance.setTransform(19.8,-105.7,0.434,0.423,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.7,-105.7,39.5,211.5);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.orig();
	this.instance.setTransform(-6.7,-39.9,0.266,0.266);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-39.9,13.6,79.8);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.orig2();
	this.instance.setTransform(-13.2,-72.7,0.291,0.291);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-72.7,26.5,145.5);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.orig();
	this.instance.setTransform(-10.8,-63.4,0.423,0.423);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-63.4,21.6,126.9);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.orig2();
	this.instance.setTransform(-13.2,-72.7,0.291,0.291);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-72.7,26.5,145.5);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2CDLQgnitgWiCQgYiNKyAGIAqAAIZ/APIAAgBIA5ACIASAAIAAABQH2AOgEBIQgEBIgUBwQgUBygHBHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147.3,-23.7,294.8,47.4);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg9kAm1MAAAhNpMB7JAAAMAAABNpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-394.1,-248.5,788.2,497.1);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ball();
	this.instance.setTransform(-31,-31,0.621,0.621);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,-31,62.1,62.1);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.buton();
	this.instance.setTransform(-210.8,-50.5,0.967,0.967);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-210.8,-50.5,417.6,130.5);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.verder();
	this.instance.setTransform(-89,-192);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89,-192,178,384);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.turk();
	this.instance.setTransform(-97.5,-166);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.5,-166,195,332);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.vander();
	this.instance.setTransform(-123,-196);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123,-196,246,392);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-350,-250);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-350,-250,700,500);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Grad();
	this.instance.setTransform(-184,-165.4,1.01,1,0,0,-8.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184,-218.5,368,437.1);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Grad();
	this.instance.setTransform(-184,-165.4,1.01,1,0,0,-8.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184,-218.5,368,437.1);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.93,y:-7.5},24).to({scaleY:1,y:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-105.7,39.5,211.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance.cache(-22,-108,44,216);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.93,y:-7.2},12,cjs.Ease.get(-1)).to({scaleY:0.86,y:-14.5},12,cjs.Ease.get(1)).to({scaleY:0.93,y:-6.9},13,cjs.Ease.get(-1)).to({scaleY:1,y:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-105.7,39.5,211.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.filters = [new cjs.ColorFilter(0.15, 0.15, 0.15, 1, 216.75, 0, 0, 0)];
	this.instance.cache(-13,-65,26,131);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.97,y:-1.9},14,cjs.Ease.get(-1)).to({scaleY:0.93,y:-4.5},19,cjs.Ease.get(1)).to({scaleY:0.97,y:-2},19,cjs.Ease.get(-1)).to({scaleY:1,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-63.4,21.6,126.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.filters = [new cjs.ColorFilter(0.15, 0.15, 0.15, 1, 216.75, 0, 0, 0)];
	this.instance.cache(-15,-75,31,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.06,y:4.6},16,cjs.Ease.get(-1)).to({scaleY:1.14,y:9.8},18,cjs.Ease.get(1)).to({scaleY:1.07,y:5.3},19,cjs.Ease.get(-1)).to({scaleY:1,y:0},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-72.7,26.5,145.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.filters = [new cjs.ColorFilter(0.15, 0.15, 0.15, 1, 216.75, 0, 0, 0)];
	this.instance.cache(-9,-42,18,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.07,y:2.6},19,cjs.Ease.get(-1)).to({scaleY:1.13,y:5.3},20,cjs.Ease.get(1)).to({scaleY:1.07,y:2.7},20,cjs.Ease.get(-1)).to({scaleY:1,y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-39.9,13.6,79.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.filters = [new cjs.ColorFilter(0.15, 0.15, 0.15, 1, 216.75, 0, 0, 0)];
	this.instance.cache(-22,-108,44,216);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.97,y:-3.5},18,cjs.Ease.get(-1)).to({scaleY:0.92,y:-8.2},24,cjs.Ease.get(1)).to({scaleY:0.96,y:-4.1},19,cjs.Ease.get(-1)).to({scaleY:1,y:0},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-105.7,39.5,211.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(-20,-12);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance.cache(-15,-75,31,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.06,y:-7.6},19,cjs.Ease.get(-1)).to({scaleY:1.12,y:-3.2},19,cjs.Ease.get(1)).to({scaleY:1.06,y:-7.5},26,cjs.Ease.get(-1)).to({scaleY:1,y:-12},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-84.8,26.5,145.5);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("APqAuIAAg3IAPAAIAAA3gAORAuIAAg3IAQAAIAAA3gAMtAuIgBgBQgIgJAAgPQgBgQAMgHQAMgJAUAAQAUAAARAHIgFAMQgRgHgQAAQgNAAgGAFQgIAGABAJQgBAHADAFQACAEAHAEIAKAFgAL3AuIAAg3IAQAAIAAA3gAKfAuIAAg3IAQAAIAAA3gAJuAuIgBg3IAOAAIAAA3gAI3AuIgYgkIAAAAIABAkIgOAAIAAg3IASAAIAlA3gAHiAuQgBgUgJgLQgLgOgXAAQgXAAgLAOQgKALgCAUIgRAAQADgaANgPQARgRAeAAQAdAAAQARQAOAQACAZgAE6AuQAHgCAEgDQAIgFAAgMQAAgMgJgFQgIgFgSAAIgXAAIAAAsIgQAAIAAg3IAnAAQAaAAAMAIQAMAGAAARQABAMgHAIIgEAEgACHAuIAcgrIhGAAIAAgMIBZAAIAAAKIgdAtgAAxAuIAAg3IARAAIAAA3gAAAAuIAAg3IAMAAIAAA3gAg3AuIgWgkIgBAAIABAkIgPAAIAAg3IASAAIAmA3gAiQAuIAAg3IAQAAIAAA3gAjAAuQgCgTgKgLQgOgOgaAAIgWAAIAAAsIgRAAIAAg3IAqAAQAgAAARAPQAPAPACAZgAl9AuIAAg3IAQAAIAAA3gAnnAuIAAg3IBNAAIAAAMIg9AAIAAArgAp3AuQACgPAGgMQAIgQAQgGQAQgIAWAAQAVAAAUAIIgHAMQgSgIgRAAQgZAAgOAPQgLALgCATgArWAuIgBgBQgIgJAAgPQgBgQAMgHQAMgJAUAAQAUAAARAHIgFAMQgRgHgQAAQgMAAgIAFQgGAGAAAJQAAAHACAFQADAEAGAEIAKAFgAsIAuQgBgUgJgLQgLgOgXAAQgXAAgLAOQgKALgCAUIgRAAQADgaANgPQARgRAeAAQAdAAAQARQAOAQACAZgAuhAuIAAg3IAQAAIAAA3gAv4AuIAAg3IAQAAIAAA3gAAzgbQgCgCgBgFQABgGACgCQADgDADAAQAEAAADADQADACgBAGQABAFgDACQgDADgEAAQgDAAgDgDgAiOgbQgDgCAAgFQAAgGADgCQACgDAEAAQADAAADADQADACAAAGQAAAFgDACQgDADgDAAQgEAAgCgDg");
	this.shape.setTransform(34.4,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ADoAgIAAg8IAlAAIAAA8gACPAgIAAggIghAAIAAgcIBnAAIAAAcIghAAIAAAggAAOAgQgBgSgCgIQgDgHgHAAQgEgBgEAIQgCAHgBATIgkAAQABggALgNQANgSAWABQAZAAAMARQALAOABAfgAhgAgQAAgSgCgIQgDgHgHAAQgHgBgDAIQgCAHAAATIglAAQABggALgNQAMgSAZABQAYAAANARQALAOABAfgAj3AgIAAgKIAJAAQAcAAAAgPQAAgFgFgCQgDgBgIAAQgNAAgOAHIgPgXQALgIAMgDQALgCAOAAQAVgBAMAJQAMAIAAAOQAAAMgHAJQgHAHgKAEg");
	this.shape_1.setTransform(-109.1,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag8AUQgMgSAAggIAAgGIAkAAIAAAGQAAAXADAHQAEAIAGAAQAHAAADgIQACgIABgWIAAgGIAiAAIAAAGQAAAigMAQQgMARgXAAQgYAAgNgRgAirAUQgMgSAAggIAAgGIAlAAIAAAGQAAAXACAHQADAIAHAAQAHAAADgIQACgIAAgWIAAgGIAlAAIAAAGQAAAigMAQQgMARgZAAQgYAAgNgRgAkSAkIgUgGIAAgeQAJAEAJACQAJACAIAAQAMAAAGgDQAFgEABgFQAAgFgEgDQgDgDgGgCQgHgBgJAAIgJAAIAAgSIAwAAIgGACIAAAAQAiAFAAAbQAAARgPALQgPALgaAAQgLAAgKgBgADOAjIAAhHIAlAAIAAAqIA0AAIAAAdgAB1AjIAAhHIAlAAIAABHg");
	this.shape_2.setTransform(-106.5,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F0006").s().p("ArMA9IAAgKIAJABQAIgBADgBQAFgCAAgFQAAgEgFgDQgDgCgKgBIAHgPQgXAAgMgHIAAgMQAIABAKACQAKACAKAAQAQAAAHgEQAIgGAAgLQAAgGgDgFQgCgFgHgDQgGgEgOgFQgSgHgIgJIAcAAIAJAEQAVAIAIAIQAIAJAAAOQAAASgNAIQgLAIgPABIgFAJQARAFAAAMQAAAJgHAEQgIAGgNAAgAOfAFQgNgMgBgXIAAgfIAQAAIAAAgQAAARAKAJQAJAHARAAQASAAAJgHQAKgJAAgRIAAggIAPAAIAAAfQAAAYgOALQgOANgYAAQgZAAgNgNgAMiALIAAgMQAIABAKACQAKACAJAAQAQAAAJgEQAHgGAAgLQAAgGgDgFQgDgFgGgDQgHgEgNgFQgSgHgIgJIAcAAIAJAEQAVAIAIAIQAIAJAAAOQAAASgNAIQgNAKgWAAQgYAAgNgHgAKtAFQgOgMAAgXIAAgfIAQAAIAAAgQAAARAJAJQAKAHARAAQARAAAKgHQAJgJAAgRIAAggIAQAAIAAAfQAAAYgOALQgOANgYAAQgZAAgNgNgAGHAAQgQgRAAghIAAgLIARAAIAAALQAAAbAMAPQALAMAWAAQAXAAALgMQAMgPAAgbIgBgLIARAAIABALQAAAggRASQgQASgeAAQgeAAgQgSgApmAAQgSgRAAghIABgLIARAAIgBALQABAbANAPQANAMAaAAQAOAAANgDIAAgoIgdAAIAAgOIAuAAIAABAQgMADgLACQgKACgPAAQgfAAgRgSgAtjAAQgQgRAAghIAAgLIARAAIAAALQAAAbAMAPQALAMAWAAQAXAAALgMQAMgPAAgbIgBgLIARAAIABALQAAAggRASQgQASgeAAQgeAAgQgSgAJpAQIgyhNIASAAIAlA4IAAAAIAAg4IANAAIAABNgAISAQIAAhNIAOAAIAAACIAABLgAEDAQIAAhNIAQAAIAAABIAaAAIANgBIAYAAQgGAFgKACIAAABQAfAFAAAcQAAASgMAIQgNAKgVAAgAETACIAcAAQAQABAJgFQAIgGAAgNQAAgNgIgHQgJgFgRAAIgbAAgABbAQIAAgMIAshBIASAAIgqA+IBJAAIAAAPgAAxAQIAAhNIARAAIAABNgAgEAQIgzhNIATAAIAkA4IAAAAIAAg4IAMAAIAABNgAhcAQIAAhNIAPAAIAAACIAABLgAiQAQIAAhNIAQAAIAABNgAkbAQIAAhNIARAAIAAA/IASAAQAdAAAOgLQAOgPAAgbIgBgKIARAAIABAKQAAAhgTASQgSAQgiAAgAl9AQIAAhNIAQAAIAAA+IA8AAIAAAPgAnnAQIAAhNIAQAAIAAABIA4AAIAAAOIg4AAIAAAwIA9AAIAAAOgAuhAQIAAg+IhHAAIAAA+IgQAAIAAhNIAQAAIAAABIBHAAIAAgBIAQAAIAABNg");
	this.shape_3.setTransform(34.4,4.6);

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(0.4,1.7);
	this.instance.alpha = 0.809;

	this.addChild(this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-146.9,-22,294.8,47.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(183.8,191.7,1,0.903);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.97,rotation:360,guide:{path:[183.7,191.6,-7.8,-87.7,-194.6,160.9]}},19).to({rotation:0,guide:{path:[-195.2,160.4,-123.5,-44.6,-13.1,110.4]}},20).to({rotation:360,guide:{path:[-10.4,108.8,108.3,-42.6,185.6,195.3]}},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152.8,163.7,62.1,56);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-210.8,-50.5,417.6,130.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(-111.9,-258);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(1315.5,-258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:1315.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.9,-476.5,368,437.1);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EBLjADsIigi5IglAAIAAC5IhiAAIAAnXIELAAQA5AAAbAbQAbAbAAAtIAABdQAAAugdAYQgdAYgxAAIgTAAICmC5gEBIegAVICOAAQAWAAAJgIQAJgJAAgSIAAhCQAAgTgKgKQgJgKgWAAIiNAAgEBEjADsIgrh9IisAAIgqB9IhtAAICynXIB6AAICwHXgEBDdAAgIg7iyIg8CyIB3AAgEA62ADsIivnXIBvAAIB7FqIB8lqIBqAAIixHXgEAzFADsIgrh9IisAAIgrB9IhsAAICynXIB5AAICwHXgEAx/AAgIg8iyIg7CyIB3AAgEAl5ADsIAAnXIEwAAQA1AAAcAbQAcAbAAArIAAETQAAAzgcAYQgdAYg0AAgEAncACiICsAAQAaAAAJgIQAJgJgBgVIAAj2QABgUgHgKQgFgJgZAAIizAAgAeMDsIAAg7IEElSIj6AAIAAhKIF9AAIAAA5IkJFUIEMAAIAABKgAbkDsIAAnXIBhAAIAAHXgAXoDsIAAkgIiMEZIgphiIhmi1IAAEeIhiAAIAAnXIBjAAICOECICLkCIBjAAIAAHXgANvDsIAAnXIBiAAIAAHXgAKCDsIjDk1IAAE1IhiAAIAAnXIBqAAIDIE9IAAk9IBiAAIAAHXgACPDsIgqh9IirAAIgqB9IhaAAIAAgvICfmoIB4AAICwHXgABKAgIg8iyIg6CyIB2AAgAlzDsIiRi6IgnArIAACPIhiAAIAAnXIBiAAIAADQICxjQIBzAAIi8DdIC5DoIAKgdIAAAvgAwvDsIAAkgIiMEHIiPkFIAAEeIhiAAIAAnXIBjAAICOECICLkCIBjAAIAAHXgA6oDsIAAnXIBiAAIAAHXgEgiVADsIAAg7IEElSIj6AAIAAhKIF9AAIAAA5IkJFUIELAAIAABKgEgk9ADsIAAnXIBhAAIAAHXgEgsYADsIAAnXIEFAAQA8AAAaAbQAbAbAAAtIAAA+QAAAUgHANQgGANgJAIIgRAKIgLACIAMAEIAVAIQALAHAJANQAJAOAAAVIAABOQAAAVgGASQgGASgNAOQgNANgVAIQgUAHgeAAgEgq2ACiICUAAQAYAAAJgIQAJgJAAgSIAAg6QgBglgpAAIiUAAgEgq2gAoICJAAQAWAAAJgIQAKgIAAgTIAAgwQAAgRgIgLQgJgKgYAAIiJAAgEgyhADsIigi5IglAAIAAC5IhiAAIAAnXIELAAQA5AAAbAbQAbAbAAAtIAABdQAAAugdAYQgdAYgwAAIgUAAICnC5gEg1mgAVICOAAQAXAAAJgIQAIgJABgSIAAhCQAAgTgKgKQgJgKgXAAIiNAAgEg9gADsQg1AAgbgZQgbgZAAgvIAAkVQAAgZAIgSQAJgTAPgMQAOgMAVgFQATgGAWAAIDJAAQA1AAAcAaQAdAZAAAtIAAEWQAAAugbAaQgbAZg2AAgEg9ggCYQgJAKAAASIAAD4QAAAXAJAIQAJAHAXAAICMAAIAXgCIAMgIIAGgMIABkIQAAgSgKgKQgKgJgXAAIiKAAQgYAAgJAJgEhGPADsIAAnXIEPAAQA6AAAbAbQAbAbAAAtIAABrQAAAugdAYQgdAYgwAAIizAAIAACrgEhEtgAHICSAAQAYAAAJgIQAIgJAAgSIAAhQQAAgTgJgKQgKgKgXAAIiRAAgEhMAADsQgaAAgQgEIgdgJIgVgMIAAgxIDtAAQAVAAAJgIQAKgIAAgSIAAg6QAAgkgqAAIh+AAQg5AAgbgaQgagYAAgsIAAhNQAAgwAegZQAegZAzAAICZAAQAZAAASAEIAcAJQAMAFAIAHIAAAxIjZAAQgTAAgKAJQgLAIAAARIAAA2QAAAjAmAAICBAAQA2AAAcAaQAdAZAAAsIAABOQAAAvgZAbQgaAbg8AAg");
	mask.setTransform(1.4,-2.5);

	// Слой 3
	this.instance = new lib.Символ12();
	this.instance.setTransform(-573.7,245);
	this.instance.alpha = 0.488;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.tekt();
	this.instance_1.setTransform(-522,-38);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-522,-38,1044,76);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(20,-20,1.02,1.02);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.2},49,cjs.Ease.get(-1)).to({x:-20},50,cjs.Ease.get(1)).to({x:0.4},51,cjs.Ease.get(-1)).to({x:20},49,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336.9,-274.9,713.9,509.9);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-869.6,-231.6,1391.6,437.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2.5},20,cjs.Ease.get(-1)).to({y:-7.2},19,cjs.Ease.get(1)).to({y:-2.3},23,cjs.Ease.get(-1)).to({y:2.4},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-163.6,195,332);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.3},29,cjs.Ease.get(-1)).to({y:10.8},30,cjs.Ease.get(1)).to({y:5.3},30,cjs.Ease.get(-1)).to({y:0},29,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-192,178,384);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.7},23,cjs.Ease.get(-1)).to({y:12.1},26,cjs.Ease.get(1)).to({y:6.1},25,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-196,246,392);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.setTransform(-319.6,-159.3,1,0.313);
	this.instance.alpha = 0.461;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({scaleY:1,x:-329.6,y:2},2,cjs.Ease.get(1)).to({scaleY:0.82,y:-17.8},5,cjs.Ease.get(-1)).to({scaleY:1,y:2},5,cjs.Ease.get(1)).to({scaleY:0.19,x:-340.6,y:-143.6,alpha:1},22,cjs.Ease.get(-1)).wait(1));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(-292.3,-173.9,1,0.313);
	this.instance_1.alpha = 0.461;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,x:-302.3,y:-44.3},9,cjs.Ease.get(1)).to({scaleY:0.82,y:-55.8},5,cjs.Ease.get(-1)).to({scaleY:1,y:-44.3},4,cjs.Ease.get(1)).to({scaleY:0.19,x:-313.3,y:-152.6,alpha:1},21,cjs.Ease.get(-1)).wait(1));

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(-266,-170,1,0.313);
	this.instance_2.alpha = 0.461;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleY:1,x:-276,y:-32},4,cjs.Ease.get(1)).to({scaleY:0.82,y:-45.7},5,cjs.Ease.get(-1)).to({scaleY:1,y:-32},5,cjs.Ease.get(1)).to({scaleY:0.99,x:-276.1,y:-33},2,cjs.Ease.get(-1)).to({scaleY:0.19,x:-287,y:-150.2,alpha:1},20).wait(1));

	// Символ 27
	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(228.8,-181.2,1,0.313);
	this.instance_3.alpha = 0.461;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({scaleY:1,x:218.8,y:-67.8},5,cjs.Ease.get(1)).to({scaleY:0.82,y:-75},5,cjs.Ease.get(-1)).to({scaleY:1,y:-67.8},5,cjs.Ease.get(1)).to({scaleY:0.99,x:218.7,y:-68.6},2,cjs.Ease.get(-1)).to({scaleY:0.19,x:207.8,y:-157.1,alpha:1},20).wait(1));

	// Символ 26
	this.instance_4 = new lib.Символ26();
	this.instance_4.setTransform(258.5,-159.3,1,0.313);
	this.instance_4.alpha = 0.461;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({scaleY:1,x:248.5,y:2},5,cjs.Ease.get(1)).to({scaleY:0.82,y:-17.8},5,cjs.Ease.get(-1)).to({scaleY:1,y:2},4,cjs.Ease.get(1)).to({scaleY:0.19,x:237.5,y:-143.6,alpha:1},20,cjs.Ease.get(-1)).wait(1));

	// Символ 24
	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(312.1,-170,1,0.313);
	this.instance_5.alpha = 0.461;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({scaleY:1,x:302.1,y:-32},5,cjs.Ease.get(1)).to({scaleY:0.82,y:-45.7},5,cjs.Ease.get(-1)).to({scaleY:1,y:-32},5,cjs.Ease.get(1)).to({scaleY:1,y:-32.2},1,cjs.Ease.get(-1)).to({scaleY:0.19,x:291.1,y:-150.2,alpha:1},20).wait(1));

	// Слой 3
	this.instance_6 = new lib.Символ22();
	this.instance_6.setTransform(5.3,-20.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.672},19).to({alpha:0},20).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(-24,-79.6,0.434,0.434);

	this.instance_8 = new lib.bashegel();
	this.instance_8.setTransform(-193.8,-62.6,0.459,0.459);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(40));

	// Слой 1
	this.instance_9 = new lib.Символ7();
	this.instance_9.setTransform(-20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.2,-269.1,800.6,524.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(-4.1,-29.4,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,x:-7.5,y:-9.7},19,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91,x:-4.1,y:-29.4},20,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(169.7,-5.8,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.07,scaleY:1.07,x:174.9,y:14.2},19,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91,x:169.7,y:-5.8},20,cjs.Ease.get(1)).wait(1));

	// Символ 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(-138.8,2.3,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.07,scaleY:1.07,x:-115.4,y:29.7},19,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91,x:-138.8,y:2.3},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.5,-180.2,501,360.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.8,-50.5,417.6,130.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-210.8,-50.5,417.6,130.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.3},12,cjs.Ease.get(-1)).to({y:8.5},12,cjs.Ease.get(1)).to({y:4.1},13,cjs.Ease.get(-1)).to({y:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.8,-50.5,417.6,130.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(0,0,0.775,0.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83},19,cjs.Ease.get(1)).to({scaleX:0.78,scaleY:0.78},20,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.4,-39.1,323.7,101.2);


// stage content:



(lib.turk6403052 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		document.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
			this.fon.gotoAndPlay(1);
			this.bt.gotoAndPlay(1);
			this.fut.gotoAndPlay(1);
		}
		
		document.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
			this.fon.gotoAndPlay(21);
			this.bt.gotoAndPlay(21);
			this.fut.gotoAndPlay(21);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 6
	this.bt = new lib.Символ20();
	this.bt.setTransform(317,248);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(314.5,203.1,0.946,0.946);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(335,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 3
	this.fut = new lib.Символ19();
	this.fut.setTransform(326.3,218.3);

	this.timeline.addTween(cjs.Tween.get(this.fut).wait(1));

	// Символ 5
	this.fon = new lib.Символ21();
	this.fon.setTransform(344.8,106.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.6,-10.6,800.6,561.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
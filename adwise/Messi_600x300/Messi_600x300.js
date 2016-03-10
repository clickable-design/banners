(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ball.png", id:"ball"},
		{src:"images/bg_1.jpg", id:"bg_1"},
		{src:"images/cash.png", id:"cash"},
		{src:"images/free.png", id:"free"},
		{src:"images/kubok.png", id:"kubok"},
		{src:"images/line.png", id:"line"},
		{src:"images/live.png", id:"live"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/Messi.png", id:"Messi"},
		{src:"images/money.png", id:"money"}
	]
};



// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,129);


(lib.bg_1 = function() {
	this.initialize(img.bg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.cash = function() {
	this.initialize(img.cash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,48);


(lib.free = function() {
	this.initialize(img.free);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,48);


(lib.kubok = function() {
	this.initialize(img.kubok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,147);


(lib.line = function() {
	this.initialize(img.line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,300);


(lib.live = function() {
	this.initialize(img.live);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,48);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,94);


(lib.Messi = function() {
	this.initialize(img.Messi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,412);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,39);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("A9cIXQhkgBAAhjIAAtlQAAhjBkgBMA65AAAQBkABAABjIAANlQAABjhkABg");
	this.shape.setTransform(198.6,53.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgpMAIUQxEjcAAk4QAAk3REjdQREjdYIAAQYIAAREDdQRFDdAAE3QAAE4xFDcQxEDe4IAAQ4IAAxEjeg");
	this.shape.setTransform(373,75.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,745.9,150.9);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Au7B0IAAgkIhfAAIAAAkIg7AAIAAhUQAHgBAEgDQAHgDADgFQAFgFACgIQADgHACgOIAMhiICXAAIAACNIARAAIAABXgAv6gJQgBAKgFAKQgFAKgIAIIBBAAIAAhZIgnAAgARwBQQgNgEgKgFIAHAJIhHAAIgshEIgLAPIAAA1Ig6AAIAAjAIA6AAIAABJIA0hJICBAAIAkBPIAkhPIBCAAIhNCZQgGAJgFAIQgIAIgIAGQgJAFgLAEQgMACgNAAQgPABgNgEgAQUgWIBDBZIAXgsIALAGQAHADAHAAQAHAAAFgDQAEgBADgGIhBiAgADkBRQgKgBgKgEQgKgDgIgGQgJgFgHgGQgHgHgGgIQgFgIgEgJQgEgJgCgKQgDgJAAgLQAAgLADgKQACgKAEgJQAEgKAFgHQAGgJAHgGQAHgHAJgEQAIgGAKgDQAKgEAKgCQALgCALAAQASAAAQAGQANAEAMAIQAKAIAIAKQAGAKAFAKIgzAYQgDgMgKgHQgFgFgGgBQgHgDgGAAQgKAAgJAEQgJADgGAHQgGAGgEAJQgDAJAAAKQAAALADAGQAEAJAGAHQAGAGAJAEQAJAEAKAAQAGAAAHgDQAGgCAFgDQAKgJADgMIAzAYQgFAKgGAJQgIALgKAIQgMAIgNAGQgVAEgNAAQgLAAgLgCgArKAgQAHAAAEgDQAGgCAEgFQAEgGADgJQADgHACgOIAMhiICXAAIAADAIg7AAIAAiMIgnAAIgHAzIgEAYQgDALgEAKQgFAJgFAHQgFAHgGAFQgGAGgHADIgOAHQgOADgSAAgAzLBRQgLgBgJgEQgKgDgIgGQgJgFgHgGQgIgHgFgIQgFgIgFgJQgEgJgBgKQgDgJAAgLQAAgLADgKQABgKAEgJQAFgKAFgHQAFgJAIgGQAHgHAJgEQAIgGAKgDQAJgEALgCQALgCAKAAQATAAAPAGQAOAEALAIQALAIAHAKQAHAKAEAKIgyAYQgDgMgLgHQgFgFgGgBQgGgDgHAAQgJAAgKAEQgIADgGAHQgHAGgDAJQgDAJgBAKQABALADAGQADAJAHAHQAGAGAIAEQAKAEAJAAQAHAAAGgDQAGgCAFgDQALgJADgMIAyAYQgEAKgHAJQgHALgKAIQgMAIgOAGQgVAEgNAAQgKAAgLgCgALeBQIAAjAIB1AAQAPAAALAFQALAEAHAHQAHAIADAJQAEAIAAAJQAAAJgDAIQgCAHgFAFQgEAGgGAEQgGAEgHABQAIABAGAEQAHAFAFAFQAGAFACAIQADAIAAAJQAAALgDAJQgFAJgGAIQgIAHgKAEQgLAFgOAAgAMZAfIAvAAQAGAAAEgDQADgEAAgFQAAgGgDgDQgEgEgGABIgvAAgAMZgoIAtAAQAEAAAEgDQADgEABgFQgBgEgDgEQgEgCgEAAIgtAAgAKSBQIgHgXIhGAAIgHAXIhCAAIBHjAIBKAAIBHDAgAJ7AHIgTg9IgTA9IAmAAgAGOBQIAAiMIg0AAIAAg0ICiAAIAAA0Ig0AAIAACMgAhtBQIAAjAIA7AAIAAA9IAtAAQAOAAANAGQANAFAJAJQAJAJAFAMQAEAKAAANQAAAOgEAMQgFANgJAJQgJAIgNAGQgNAFgOAAgAgyAdIAlAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgEgCgIAAIglAAgAjwBQIAAiMIg0AAIAAg0ICjAAIAAA0Ig1AAIAACMgAlmBQIgGgXIhGAAIgIAXIhBAAIBHjAIBJAAIBIDAgAl8AHIgTg9IgTA9IAmAAgAttBQIAAjAICTAAIAAA0IhZAAIAAATIBXAAIAAAxIhXAAIAAAVIBZAAIAAAzg");
	this.shape.setTransform(131.4,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,262.7,23.2);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F83542").s().p("A8MG4QhkAAAAhkIAAqnQAAhkBkAAMA4ZAAAQBkAAAABkIAAKnQAABkhkAAg");
	this.shape.setTransform(190.6,44);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,381.1,88.1);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(160.1,10.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-6.8,442.1,34.1);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("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AAIAAhqIAVAAIAAAqIAkAAIAAgqIAWAAIAABqgACFgVIAAgtIgjAAIAAAtIgWAAIAAhqIAWAAIAAAqIAjAAIAAgqIAWAAIAABqgAAAgVIAAhqIA9AAIAAASIgoAAIAAAZIAmAAIAAASIgmAAIAAAaIAoAAIAAATgAhXgVIAAhqIAsAAQAGAAAGACQAFACAEAEQADADACAFQACAFAAAGQAAAFgBAEIgEAHIgFAFIgHADQADABAEACQAEACACAEIAEAIIABAJQABAHgCAFQgCAFgEAEQgDAEgGACQgFACgHAAgAhCgnIASAAQAGAAADgEQAEgDAAgHQAAgFgEgEQgDgEgGAAIgSAAgAhChUIARAAQAGAAADgEQADgDAAgGQAAgFgDgDQgDgEgGAAIgRAAgAjjgVIAAgtIgkAAIAAAtIgVAAIAAhqIAVAAIAAAqIAkAAIAAgqIAWAAIAABqgAlngVIAAhqIA8AAIAAASIgnAAIAABYgAmQgVIAAhFIgXBFIgJAAIgYhFIAABFIgVAAIAAhqIAdAAIAUA7IAVg7IAdAAIAABqgAGgiJQgFgDgFgGIAJgHQADAEAEACQAEACAEAAQAEAAAFgCQAEgCACgEIAJAHQgFAGgGADQgFADgIAAQgHAAgHgDg");
	this.shape.setTransform(52.9,15.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,105.8,30.9);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.money();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,39);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AghB7QAEAAACgBQADgCACgDIADgKIADgSIAFg4IA9AAIAABrIgWAAIAAhYIgVAAIgEAmQgDAUAAAHIgDAJIgFAGQgFAGgGACQgFACgJAAgAE5CMIAAhrIAVAAIAABrgADoCMIAAhrIAWAAIAAAnIASAAQAIAAAGADQAGACAEAFQAFAEACAHQACAGAAAHQAAAHgCAGQgCAGgFAFQgEAEgGAEQgGACgIAAgAD+B5IAPAAQAHAAADgEQAEgEAAgHQAAgHgEgEQgDgFgHAAIgPAAgACvCMIAAhYIgYAAIAAgTIBFAAIAAATIgYAAIAABYgAB8CMIgEgTIghAAIgFATIgXAAIAfhrIAaAAIAgBrgABzBnIgLgvIgNAvIAYAAgAhCCMIAAhYIgkAAIAABYIgWAAIAAhrIBPAAIAABrgAikCMIAAhrIAVAAIAABrgAj0CMIAAhrIAVAAIAAAnIASAAQAIAAAGADQAGACAFAFQAEAEACAHQACAGAAAHQAAAHgCAGQgCAGgEAFQgFAEgGAEQgGACgIAAgAjfB5IAPAAQAGAAAEgEQAEgEAAgHQAAgHgEgEQgEgFgGAAIgPAAgAlOCMIAAhrIAtAAQAGAAAGACQAFACAEAEQADAEACAFQACAFAAAFQAAAFgBAEIgEAIIgFAFIgIADQAEAAAEADQAEACACAEIAEAIIABAJQABAHgCAEQgCAGgEADQgDAFgGACQgFACgHAAgAk4B6IASAAQAGgBADgDQAEgEAAgGQAAgGgEgDQgDgEgGAAIgSAAgAk4BNIARAAQAGgBADgDQADgDAAgGQAAgFgDgDQgDgEgGAAIgRAAgAhPgfIgJgEIgHgEIgGgHIgGgIIgDgKQgDgGgBgQQAAgIAEgOIADgKIAGgIIAGgGIAHgFIAJgDIAKgBQAHAAAHADQAFACAFADIAHAIIAFAJIgSAIQgDgGgEgEQgFgEgGAAQgFAAgFADQgDADgDAFQgEAEgBAHQgCAHAAAHQAAAIACAHQABAHAEAEQADAFADACQAFAEAFAAQAGAAAGgFQAEgEACgHIASAIQgHANgFAFQgFAEgFACQgHACgHABIgKgBgAEDggIAAhrIA9AAIAAATIgoAAIAAAYIAnAAIAAATIgnAAIAAAZIAoAAIAAAUgADbggIAAhrIAVAAIAABrgACKggIAAhrIAWAAIAAAmIARAAQAJABAGACQAGADAEAEQAEAFACAGQADAGAAAIQAAAGgDAGQgCAHgEAEQgEAFgGADQgGADgJAAgACgg0IAPAAQAGAAAEgDQADgFAAgGQAAgIgDgDQgEgFgGAAIgPAAgAA1ggIAAhrIAoAAQAIAAAFACQAGADAFAFQAEAFACAGQADAGgBAHQABAHgDAGQgCAGgEAFQgFAEgGADQgFADgIAAIgSAAIAAAngABLhaIAPAAQAGAAADgEQAFgEAAgHQAAgHgFgEQgDgFgGABIgPAAgAgDggIAAhYIgYAAIAAgTIBEAAIAAATIgZAAIAABYgAiWggIAAhrIAWAAIAABrgAjnggIAAhrIAWAAIAAAmIASAAQAIABAGACQAGADAFAEQADAFACAGQADAGAAAIQAAAGgDAGQgCAHgDAEQgFAFgGADQgGADgIAAgAjRg0IAQAAQAGAAADgDQAEgFAAgGQAAgIgEgDQgDgFgGAAIgQAAgAk8ggIAAhrIBCAAIAAATIgsAAIAAAUIASAAQAIAAAGACQAGADAEAFQAEAFADAFQACAGAAAIQAAAGgCAGQgDAHgEAEQgEAFgGADQgGADgIAAgAkmg0IAPAAQAGAAAEgDQAEgEAAgHQAAgHgEgEQgEgEgGgBIgPAAg");
	this.shape.setTransform(33.5,14.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,28.5);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cash();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,48);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("Ag+A2IgJgDIgHgFIgHgHIgGgIIgDgJQgCgHgCgPQAAgHAEgOIADgJIAGgIIAHgHIAHgFIAJgDIAJgBQAIAAAGADQAGACAEADIAIAJIAEAJIgSAIQgCgHgEgEQgFgEgHAAQgFAAgEADQgEADgDAFQgDAEgCAHQgBAHAAAGQAAAHABAHQACAHADAEQADAFAEADQAEADAFAAQAHAAAFgFQAFgEACgHIARAIQgGANgGAFQgEAEgGACQgGADgIAAIgJgBgAGHA1IAAhAIgkBAIgUAAIAAhpIAVAAIAAA9IAjg9IAWAAIAABpgAEtA1IgZgqIgIAMIAAAeIgVAAIAAhpIAVAAIAAAxIAfgxIAYAAIghAyIAkA3gACeA1IAAhpIAsAAQAHAAAFACQAGACADAEQAEAEACAFQABAFAAAFQABAFgCAEIgDAIIgGAFIgHADQAEAAAEABQADACADAEIADAHIACAKQAAAGgCAFQgCAGgDADQgEAEgFACQgFADgIAAgACzAiIATAAQAFAAAEgDQADgEAAgGQAAgGgDgDQgEgEgFAAIgTAAgACzgJIASAAQAFAAADgDQAEgDAAgGQAAgGgEgDQgDgDgFAAIgSAAgAB9A1IgEgTIghAAIgFATIgYAAIAhhpIAaAAIAfBpgAB0APIgMgsIgMAsIAYAAgAAMA1IAAhWIgWAAIAAgTIBDAAIAAATIgYAAIAABWgAjUA1IAAhpIA8AAIAAATIgnAAIAAAYIAmAAIAAARIgmAAIAAAaIAnAAIAAATgAkXA1IgghpIAXAAIAWBPIAVhPIAYAAIggBpgAlVA1IAAhpIAWAAIAABpgAmcA1IAAhpIAWAAIAABWIAjAAIAAATgAiMAWIAAgQIAhAAIAAAQg");
	this.shape.setTransform(41.4,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82.7,11.1);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("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");
	this.shape.setTransform(45,15.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,30.3);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.free();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,48);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.live();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,48);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6OFTQq4iMAAjHQAAjFK4iOQK4iMPWAAQPXAAK4CMQK4COAADFQAADHq4CMQq4CNvXAAQvWAAq4iNg");
	this.shape.setTransform(237.6,48.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475.1,96.1);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0800B5").ss(1,1,1).p("Egu3gXbMBdvAAAMAAAAu3MhdvAAAg");
	this.shape.setTransform(300,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,602,302);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ball();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133,129);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArBBXIgPgHIgOgKIgLgMQgFgGgEgIIgFgQQgBgIAAgJQAAgLABgIQADgLAEgJQAEgKAFgIQAGgIAHgHQAHgHAIgGQAJgGAJgEQAKgEALgCQALgCALAAQANAAAXAGIAQAHQAHAEAGAGQAGAFAFAGQAFAHADAHQAEAIABAIQACAIAAAJQAAALgCAJQgBAKgFAJQgEAKgFAIQgGAJgHAHQgHAHgJAGQgIAFgKAEQgKAEgKACQgKADgMAAgAqnguQgJAFgIAIQgIAIgEALQgEALAAALQAAAJADAJQADAIAHAFQAGAGAJADQAHADALAAQALAAAKgEQALgFAHgIQAIgJAEgLQAEgLAAgKQAAgKgEgIQgDgIgGgGQgGgGgIgDQgIgDgKAAQgMAAgLAFgATCBZIAOg8IgUAAIgrA8Ig6AAIA0hDQgKgGgIgLQgDgFgCgFQgCgIAAgIQAAgLAEgLQADgMAJgKQAFgFAFgEQAGgFAIgDQAHgDAKgCQAJgCALAAIBaAAIgpCygASqgqQgIAGAAAKQAAAIAFAEQAFAEAJAAIAkAAIAIgmIgkAAQgMAAgHAGgAOxBZIAniyICNAAIgJApIheAAIgFAXIAjAAQAOAAAMAEQAKAEAJAHQAHAGADAIQAEAJAAAKQAAALgDAKQgFAMgIAKQgNAMgLAFQgHADgJABQgJACgLAAgAPoAxIAmAAQAMAAAGgGQAIgGgBgJQAAgHgEgEQgFgEgHAAIgnAAgAMSBZIAoiyICEAAIgKApIhUAAIgHAcIBUAAIgJAmIhUAAIgHAfIBWAAIgJAogAKbBZIAfiJIgyAAIAJgpICSAAIgIApIgyAAIgfCJgAHvBZIgDgaIhHAAIgPAaIg3AAIBsiyIA5AAIAdCygAHoAXIgIhCIgmBCIAuAAgAEjBZIAQhIIhKAAIgRBIIguAAIAoiyIAuAAIgOBDIBKAAIAPhDIAvAAIgoCygAgQBZIAdiJIgwAAIAJgpICQAAIgIApIgyAAIgfCJgAjXBZIAoiyICEAAIgJApIhWAAIgGAcIBUAAIgJAmIhUAAIgHAfIBWAAIgJAogAkWBZIgEgaIhGAAIgPAaIg3AAIBsiyIA5AAIAdCygAkdAXIgIhCIgmBCIAuAAgAoJBZIAeiJIgyAAIAJgpICTAAIgJApIgzAAIgeCJgAuuBZIAniyICNAAIgJApIheAAIgFAXIAjAAQAOAAAMAEQALAEAIAHQAHAGADAIQAEAJABAKQAAALgEAKQgFAMgIAKQgNAMgLAFQgHADgJABQgJACgLAAgAt3AxIAmAAQAMAAAGgGQAIgGgBgJQABgHgFgEQgFgEgHAAIgnAAgAvtBZIgDgaIhHAAIgPAaIg3AAIBsiyIA5AAIAdCygAv0AXIgIhCIgmBCIAuAAgA0XBZIAniyIBXAAQAMAAAKAEQAKAEAHAHQAHAHADAKQAFAJAAALQAAALgFAKQgEANgIAIQgNANgLAEQgHADgJACQgKACgLAAIgqAAIgOA8gAzTgKIAlAAQAMAAAHgGQAIgGAAgKQgBgIgFgEQgFgEgJAAIgjAAg");
	this.shape.setTransform(132.7,17.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.2,8.6,261,18.7);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F02B37").s().p("AHGDqIgsgLIgpgSQgUgLgQgNQgQgOgNgRQgNgRgJgTQgKgUgEgVQgGgXAAgYQAAgbAGgcQAGgbAKgYQALgYAPgWQAOgUATgSQATgRAWgOQAXgNAYgKQAagJAagFQAcgFAcAAQAiAAA3AOQAkAMAcAXQAaAVARAcQARAaAIAdIiGAqQgDgQgIgNQgIgNgMgKQgNgKgPgFQgQgFgSAAQgbAAgYALQgXALgRATQgRASgJAYQgJAYAAAYQAAAUAHARQAHASAOANQANAOATAIQAUAIAXAAQAbAAAbgQQAcgPALgXIBuBHQgVAegcAVQgZAUgeANQgaALgdAGQgaAFgZAAgAgYDqIgtgLIgpgSQgTgLgQgNQgRgOgNgRQgNgRgJgTQgJgUgFgVQgFgXAAgYQAAgbAGgcQAFgbALgYQAKgYAPgWQAPgUATgSQATgRAWgOQAWgNAZgKQAZgJAZgFQAbgFAdAAQAhAAA3AOQAkAMAdAXQAZAVASAcQAQAaAJAdIiGAqQgEgQgIgNQgIgNgMgKQgMgKgQgFQgQgFgSAAQgbAAgYALQgUALgRATQgRASgJAYQgKAYAAAYQAAAUAIARQAHASANANQAOAOATAIQASAIAXAAQAbAAAbgQQAbgPAMgXIBtBHQgUAegcAVQgZAUgeANQgaALgeAGQgZAFgaAAgAQDDlIA1jtIjeDtIiGAAIBlnKICMAAIgyDgIDSjgICPAAIhlHKgAqGDlIBlnKIFdAAIgbB5IjRAAIgKAuIDNAAIgbB3IjNAAIgLAzIDSAAIgbB5gAtcDlIA9kSIikESIg+AAIgqkSIg9ESIiLAAIBlnKIC8AAIAfDdICCjdIDGAAIhmHKg");
	this.shape.setTransform(128.9,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,18.7,253.8,47.6);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALtAvIgKgDIgJgEIgHgFIgGgHIgFgJIgDgJIgBgKIABgJIADgJIAFgIIAGgHQADgEAEgCQAEgDAFgBIAKgDIAKgBQAIAAAHACQAGACAFAEQAFAEAEAEIAGAJIgVAKQgCgGgGgDIgGgDIgGgBQgGAAgFACQgEACgEADQgDAEgCAFQgCAFAAAEQAAAFACAFQACAFADAEQAEAEAEACQAFACAGAAIAGgBIAGgDQAGgEACgGIAVAKIgGAJQgEAFgFADQgFAEgGACQgHACgIAAIgKgBgAIgAvIgLgDIgKgFIgGgGIAMgQQADADAKAEQAHADAHAAQAIAAAEgDQAFgCAAgEQAAgFgEgBQgEgCgKAAIgTAAIAAgTIATAAQAHAAAFgCQAEgCAAgEQAAgEgFgCQgEgCgIAAQgGAAgHACQgHACgFAFIgLgPIAHgGIAJgFIAKgDIANgBQAIAAAIABQAHACAFADQAFAEADAFQACAEAAAGQAAAEgBAEQgCADgDADIgGAFIgIACQAEAAADAAQAFACADACIAFAHQACAEAAAFQAAAGgDAFQgDAFgGAEQgFAEgHACQgIACgJAAIgMgBgAk4AvIgKgDIgIgEIgIgFIgGgHIgEgJIgDgJIgBgKIABgJIADgJIAEgIIAGgHQAEgEAEgCQAEgDAEgBIAKgDIAKgBQAJAAAGACQAHACAFAEQAFAEADAEIAGAJIgVAKQgCgGgFgDIgGgDIgHgBQgFAAgFACQgFACgDADQgEAEgCAFQgCAFAAAEQAAAFACAFQACAFAEAEQADAEAFACQAFACAFAAIAHgBIAGgDQAFgEACgGIAVAKIgGAJQgDAFgFADQgFAEgHACQgGACgJAAIgKgBgAsGAvIgKgDIgJgEIgHgGIgGgHIgEgIIgDgJIgBgKIABgJIADgJIAEgIIAGgHIAHgGIAJgEIAKgDIAKgBIAKABIAKADIAIAEIAIAGIAFAHQADAEACAEIADAJIABAJIgBAKIgDAJQgCAFgDADIgFAHIgIAGIgIAEIgKADIgKABIgKgBgAsHgXQgEACgEADQgDAEgCAFQgCAFAAAEQAAAFACAFQACAFADAEQAEAEAEACQAFACAGAAQAGAAAEgCQAFgCADgEQAEgEABgFQACgFAAgFQAAgEgCgFQgBgFgEgEQgDgDgFgCQgEgCgGAAQgGAAgFACgAKgAuIAAg3IgnA3IgXAAIAAhbIAYAAIAAA1IAmg1IAYAAIAABbgAHiAuIAAg3IgoA3IgXAAIAAhbIAYAAIAAA1IAmg1IAZAAIAABbgAFJAuIAAhbIAvAAQAIAAAGACQAGADAEAEQAEAEACAGQACAGAAAGQAAAGgCAGQgCAEgEAEQgEAEgGACQgGADgIAAIgXAAIAAAfgAFhgEIAUAAQAFAAADgDQADgCAAgFQAAgFgDgCQgDgDgFAAIgUAAgAElAuIgZgjIgGAIIAAAbIgYAAIAAhbIAYAAIAAAmIAcgmIAeAAIgkAsIAmAvgAB4AuIAAhbIBFAAIAAAVIgtAAIAAAOIAsAAIAAATIgsAAIAAAQIAtAAIAAAVgABPAuIAAglIgmAAIAAAlIgYAAIAAhbIAYAAIAAAjIAmAAIAAgjIAZAAIAABbgAgPAuIgFgNIglAAIgEANIgcAAIAjhbIAfAAIAhBbgAgbAMIgMghIgLAhIAXAAgAipAuIAAhbIAvAAQAIAAAGACQAGADAEAEQAEAEACAGQACAGAAAGQAAAGgCAGQgCAEgEAEQgEAEgGACQgGADgIAAIgXAAIAAAfgAiRgEIAUAAQAFAAADgDQADgCAAgFQAAgFgDgCQgDgDgFAAIgUAAgAjmAuIAAhGIgaAAIAAgVIBMAAIAAAVIgaAAIAABGgAneAuIAAhbIA1AAQAHAAAFACQAFACAEADIAFAIIABAJIgBAIIgDAGIgFAFIgHACQAEAAADABQAEACACADIAEAHIABAIQAAAFgCAFQgBAEgEAEQgDADgFACQgGACgGAAgAnGAaIAYAAQAFAAACgCQADgDAAgDQAAgEgDgCQgCgDgFAAIgYAAgAnGgJIAYAAQADAAADgCQACgDAAgDQAAgEgCgCQgDgCgDAAIgYAAgAojAuIgFgNIglAAIgEANIg2AAIgZgjIgGAIIAAAbIgYAAIAAhbIAYAAIAAAmIAcgmIAeAAIgkAsIAkAtIAihZIAfAAIAjBbgAovAMIgMghIgLAhIAXAAgAtSAuIAAhGIgnAAIAABGIgYAAIAAhbIBXAAIAABbgAMlAVIAAgSIBtAAIAAASg");
	this.shape.setTransform(94.3,10.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.9,5.4,182.9,9.7);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kubok();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,147);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,164,94);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.line();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,519,300);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Messi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,632,412);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(372.9,75.4,0.93,1.38,0,0,0,372.9,75.4);
	this.instance.alpha = 0.891;
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-2,-2,750,155);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,-53.6,747,261);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.setTransform(190,46,1.09,1.09,0,0,0,131.3,11.6);

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(190.6,44,1,1,0,0,0,190.6,44);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,381.1,88.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// btn
	this.instance = new lib.Символ36();
	this.instance.setTransform(190.6,44,1,1,0,0,0,190.6,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.13,scaleY:1.13},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,381.1,88.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3A4QgYgXAAghQAAggAYgXQAXgYAgABQAggBAYAYQAYAXgBAgQABAhgYAXQgYAYggAAQggAAgXgYg");
	this.shape.setTransform(-45.1,-210.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(299));

	// btn
	this.btn = new lib.Символ35();
	this.btn.setTransform(161.5,311.2,1,1,0,0,0,190.6,44);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(202).to({_off:false},0).to({y:91.2},5,cjs.Ease.get(1)).to({y:101.2},5,cjs.Ease.get(1)).wait(40).to({scaleX:1.12,scaleY:1.12},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(24).to({y:91.2},5,cjs.Ease.get(1)).to({y:321.2},5,cjs.Ease.get(1)).wait(4));

	// text
	this.instance = new lib.Символ34();
	this.instance.setTransform(160,222.2,1,1,0,0,0,159,12.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({y:2.2},5,cjs.Ease.get(1)).to({y:12.2},5,cjs.Ease.get(1)).wait(30).to({scaleX:1.1,scaleY:1.1},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(40).to({y:2.2},5,cjs.Ease.get(1)).to({y:232.2},5,cjs.Ease.get(1)).wait(1));

	// white
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(159.5,306,1,1,0,0,0,372.9,75.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).to({y:46},5,cjs.Ease.get(1)).to({y:56},5,cjs.Ease.get(1)).wait(80).to({y:46},5,cjs.Ease.get(1)).to({y:316},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-218.9,16,16);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(238.6,46.2,1.48,1.9,0,0,0,237.6,48.1);
	this.instance.filters = [new cjs.BlurFilter(90, 90, 1)];
	this.instance.cache(-2,-2,479,100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158,-90.2,797,276);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(38.5,73.3,1,1,0,0,0,52.9,15.4);

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(37,19.5,1,1,0,0,0,37,19.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,0,105.8,88.7);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.setTransform(28.5,77.4,1,1,0,0,0,33.5,14.2);

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(28.5,24,1,1,0,0,0,28.5,24);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,0,67,91.7);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(26.8,78.3,1,1,0,0,0,45,15.1);

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(30,25,1,1,0,0,0,30,25);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.2,0,90,93.5);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ28();
	this.instance.setTransform(26.1,68.7,1,1,0,0,0,41.4,5.5);

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(27.5,24,1,1,0,0,0,27.5,24);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,0,82.7,74.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag0A1QgVgXAAgeQAAgdAVgXQAXgWAdABQAegBAWAWQAXAXgBAdQABAegXAXQgWAVgeAAQgdAAgXgVg");
	this.shape.setTransform(-120,-234.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// money.png
	this.instance = new lib.Символ20();
	this.instance.setTransform(318,240,1,1,0,0,0,37,19.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({y:-10},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(1)).wait(35).to({y:-10},3,cjs.Ease.get(1)).to({y:0},4,cjs.Ease.get(1)).wait(32).to({y:-10},5,cjs.Ease.get(1)).to({y:230},5,cjs.Ease.get(1)).to({_off:true},1).wait(100));

	// live.png
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-90.5,240,1,1,0,0,0,27.5,24);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({y:-10},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(1)).wait(14).to({y:-10},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(1)).wait(50).to({y:-10},5,cjs.Ease.get(1)).to({y:230},5,cjs.Ease.get(1)).to({_off:true},1).wait(100));

	// free.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(33,240,1,1,0,0,0,27.5,24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101).to({_off:false},0).to({y:-10},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(1)).wait(25).to({y:-10},5,cjs.Ease.get(1)).to({y:0},4,cjs.Ease.get(1)).wait(44).to({y:-10},5,cjs.Ease.get(1)).to({y:230},5,cjs.Ease.get(1)).to({_off:true},1).wait(100));

	// cash.png
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(174.5,240,1,1,0,0,0,28.5,24);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101).to({_off:false},0).to({y:-10},5,cjs.Ease.get(1)).to({y:0},5,cjs.Ease.get(1)).wait(31).to({y:-10},6,cjs.Ease.get(1)).to({y:0},4,cjs.Ease.get(1)).wait(37).to({y:-10},5,cjs.Ease.get(1)).to({y:230},5,cjs.Ease.get(1)).to({_off:true},1).wait(100));

	// white
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(115.1,269.1,1,1,0,0,0,237.6,48.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({y:19.1},5,cjs.Ease.get(1)).to({y:29.1},5,cjs.Ease.get(1)).wait(80).to({y:19.1},5,cjs.Ease.get(1)).to({y:259.1},5,cjs.Ease.get(1)).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-242,15,15);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kubok.png
	this.instance = new lib.Символ6();
	this.instance.setTransform(10.9,179.6,1,1,0,0,0,52,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({x:-59.1},9,cjs.Ease.get(1)).wait(274).to({x:27.9},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,106.1,104,147);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line.png
	this.instance = new lib.Символ4();
	this.instance.setTransform(-113.5,226,1,1,0,0,0,259.5,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:376.5},9,cjs.Ease.get(1)).wait(281).to({x:-123.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-373,76,519,300);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo.png
	this.instance = new lib.Символ5();
	this.instance.setTransform(-279.9,48,1,1,0,0,0,82,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({y:128},9,cjs.Ease.get(1)).wait(275).to({y:25},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-361.9,1,164,94);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(66.5,64.5,1,1,0,0,0,66.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13,x:102.5},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,129);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgsAtQgUgSABgbQgBgaAUgSQASgUAaABQAagBAUAUQASASABAaQgBAbgSASQgUATgaAAQgaAAgSgTg");
	this.shape.setTransform(29.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(300));

	// text3
	this.instance = new lib.Символ10();
	this.instance.setTransform(-140,177.4,1,1,0,0,0,146,18.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:190},9,cjs.Ease.get(1)).to({x:195},74,cjs.Ease.get(1)).to({x:445,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(200));

	// text2
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(-144.5,177.1,1,1,0,0,0,126.5,87);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:175.5},9,cjs.Ease.get(1)).to({x:190.5},76,cjs.Ease.get(1)).to({x:440.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(200));

	// text1
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(18,110.4,1,1,0,0,0,239,29.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:298},9,cjs.Ease.get(1)).to({x:318},78,cjs.Ease.get(1)).to({x:568,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(200));

	// Messi.png
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(953,221,1,1,0,0,0,316,206);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:453},9,cjs.Ease.get(1)).to({x:436},76,cjs.Ease.get(1)).to({x:126,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(200));

	// ball.png
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(-102.4,-1.5,1,1,0,0,0,66.5,64.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({x:79.5},9,cjs.Ease.get(1)).wait(72).to({x:169.5,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23,-106,13,13);


// stage content:



(lib.Messi_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseover", fl_MouseOverHandler_11);
		
		function fl_MouseOverHandler_11()
		{
		 _this.kadr3.btn.gotoAndPlay(1);
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseout", fl_MouseOutHandler_22);
		
		function fl_MouseOutHandler_22()
		{
		 _this.kadr3.btn.gotoAndPlay(5);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ramka
	this.instance = new lib.Символ12();
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// knopka
	this.knopka = new lib.Символ41();
	this.knopka.setTransform(299.7,226.1,1.224,1.224,0,0,0,198.6,53.5);
	new cjs.ButtonHelper(this.knopka, 0, 1, 2, false, new lib.Символ41(), 3);

	this.timeline.addTween(cjs.Tween.get(this.knopka).wait(1));

	// logo
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(590,-78,1,1,0,0,0,10,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	//  kadr3
	this.kadr3 = new lib.Символ33();
	this.kadr3.setTransform(298.2,124.1,1,1,0,0,0,159,12.2);

	this.timeline.addTween(cjs.Tween.get(this.kadr3).wait(1));

	// kadr2
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(217.6,159,1,1,0,0,0,37,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// kadr1
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(316,206,1,1,0,0,0,316,206);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// kubok
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(676.5,-79.5,1,1,0,0,0,10.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// line
	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(-109.5,-66.5,1,1,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.bg = new lib.Символ1();
	this.bg.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.5,43,1220.3,407.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
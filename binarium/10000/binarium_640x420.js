(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 420,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/banner_static.jpg", id:"banner_static"}
	]
};



// symbols:



(lib.banner_static = function() {
	this.initialize(img.banner_static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,420);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0.02)"],[0,0.569,1],-25,0,25,0).s().p("AldJYIAAyvIK7AAIAASvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-60,70,120);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().rr(-160,-25,320,50,3.2);
	this.shape.setTransform(0,0,0.998,0.96);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.6,-24,319.3,48);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.banner_static();
	this.instance.setTransform(-320,-210);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-210,640,420);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(0,0,1,2.358,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101,-140,202.1,280.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.alpha = 0.25;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:460},29).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-140,202.1,280.1);


// stage content:



(lib.binarium_640x420 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		  bodyStyle.margin = 0;
		  bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgvYJMAw3AAAQAJAAAHAEQAHAEAFAHQAEAHAAAIIAAGjQAAAIgEAHQgFAHgHAEQgHAEgJABMgw3AAAQgOgBgJgIQgJgJAAgNIAAmjQAAgIAEgHQAFgHAHgEQAHgEAJAAg");
	mask.setTransform(311.2,202.5);

	// Слой 3
	this.instance = new lib.Символ7();
	this.instance.setTransform(220.1,376);
	this.instance.alpha = 0.551;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(462.9,381);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(320,210);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,210,640,420);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
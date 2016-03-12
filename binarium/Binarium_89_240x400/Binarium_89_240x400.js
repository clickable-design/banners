(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/btn.png", id:"btn"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,428,115);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,428,115);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#178EC3").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,242,402);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai4J5QhfAAAAhgIAAwyQAAhfBfAAIFxAAQBfAAAABfIAAQyQAABghfAAg");
	this.shape.setTransform(28,63.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.1,126.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au+DfIAAm9Id9AAIAAG9g");
	this.shape.setTransform(96,22.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ4 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.bg();
	this.instance.setTransform(0.5,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,1,240,400);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-2.4,63.3,1,1,-21,0,0,28.1,63.3);
	this.instance.alpha = 0.629;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(48, 48, 1)];
	this.instance.cache(-2,-2,60,131);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.3,-29.8,149,189);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(28,63.3,1,1,0,0,0,28,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:489.9,y:53.8},24,cjs.Ease.get(1)).wait(25).to({x:28,y:63.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-29.8,149,189);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(102.7,24.2,0.9,0.9,0,0,0,214,57.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.9,-27.5,385.2,103.5);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AueD1QhmAAAAhoIAAkZQAAhoBmAAIc9AAQBmAAAABoIAAEZQAABohmAAg");
	mask.setTransform(102,23.5);

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.setTransform(-52.3,32.6,1,1,0,0,0,28,63.3);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(101,23.6,0.95,0.95,0,0,0,101,23.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.4,-25,366,98.3);


(lib.Символ3 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(101,23.5,1,1,0,0,0,101,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},3).wait(1).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.6,-60.6,441.2,189);


// stage content:



(lib.Binarium_89_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseover", fl_MouseOverHandler_23);
		
		function fl_MouseOverHandler_23()
		{
		 _this.btn.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseout", fl_MouseOutHandler_34);
		
		function fl_MouseOutHandler_34()
		{
		 _this.btn.gotoAndPlay(5);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ramka
	this.instance = new lib.Символ13();
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// knopka
	this.knopka = new lib.Символ5();
	this.knopka.setTransform(120.1,199.8,1.251,8.957,0,0,0,96,22.3);
	new cjs.ButtonHelper(this.knopka, 0, 1, 2, false, new lib.Символ5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.knopka).wait(1));

	// btn
	this.btn = new lib.Символ3();
	this.btn.setTransform(119.5,359.9,1,1,0,0,0,101,23.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// bg
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,199.5,441.2,467.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
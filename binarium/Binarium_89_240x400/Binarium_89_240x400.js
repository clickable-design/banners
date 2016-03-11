(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
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
p.nominalBounds = new cjs.Rectangle(0,0,202,47);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AumCqQhjgBgBhjIAAiLQABhjBjgBIdNAAQBjABABBjIAACLQgBBjhjABg");
	this.shape.setTransform(103.5,17);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207,34);


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

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202,47);


(lib.Symbol = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AuKDqQhkAAAAhkIAAkLQAAhkBkAAIcVAAQBkAAAABkIAAELQAABkhkAAg");
	this.shape.setTransform(100.8,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,201.5,46.9);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(103.5,17,1,1,0,0,0,103.5,17);
	this.instance.alpha = 0.629;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(28, 28, 1)];
	this.instance.cache(-2,-2,211,38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-14,239,66);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(103.5,17,1,1,0,0,0,103.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:-185},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-14,239,66);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApAIDIAAh9IMAAUIGGh4IAACHImGBugAo7FAIgKiCIMFAUIGBh5IAFCDImBBzgAo7ByIAAh/IL2AbIGLh7IAACFImGB5gApAhKIAAiHIMAAQIGBhqIAFB9ImBBqgApFklIAFhzIGLh+IL2AUIAFCHImBBug");
	mask.setTransform(58.3,53.5);

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(60,137,1,1,0,0,0,103.5,17);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,106,116.5,1);


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


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AteDfQhgAAAAhfIAAj/QAAhfBgAAIa+AAQBfAAAABfIAAD/QAABfhfAAg");
	mask.setTransform(101,23.5);

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.setTransform(-52.3,32.6,1,1,0,0,0,28,63.3);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(101,23.6,0.95,0.95,0,0,0,101,23.6);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,1.2,191.9,44.7);


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

	// Слой 3
	this.instance = new lib.Symbol();
	this.instance.setTransform(101,25.5,1,1,0,0,0,100.8,23.4);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(11, 11, 1)];
	this.instance.cache(-2,-2,206,51);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.07},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(101,23.5,1,1,0,0,0,101,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.05,scaleY:1.05},3).wait(1).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.6,-60.6,352.6,189);


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

	// Слой 6
	this.instance = new lib.Символ9();
	this.instance.setTransform(82.7,187.5,1,1,0,0,0,58.2,53.5);

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
p.nominalBounds = new cjs.Rectangle(-17.2,200,377.2,466.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
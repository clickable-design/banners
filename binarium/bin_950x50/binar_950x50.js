(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 950,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/light.png", id:"light"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,50);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.light();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(248.6,10.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,497.2,21.7);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-9.1,-7.9,-5.6,-3.3).s().p("AhlgnQAAgfAfAAICsAAQinAVgkB4g");
	this.shape.setTransform(10.3,7.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,14.3);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,950,50);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A3D4EB","#007CC0"],[0,0.271],-15.6,-18.5,15.6,18.7).s().p("AijCtQgHAAgFgGQgGgFAAgHIAAk0QAAgIAGgGQAFgFAHAAIFHAAQAHAAAGAFQAFAGAAAIIAAE0QAAAHgFAFQgGAGgHAAgAhshqQgFAFAAAHIAAC9QAAAHAFAGQAFAEAGAAIDDAAQAHAAAFgEQAFgGAAgHIAAi9QAAgHgFgFQgFgFgHAAIjDAAQgGAAgFAFg");
	this.shape.setTransform(18.2,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007CC0").s().p("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");
	this.shape_1.setTransform(93.1,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFABSIAAgMQAKAEAMAAQAJAAAGgCQAGgDAGgGQAFgHAHgPIhGh9IAOAAIA2BhQAFAHADAJIABAAIA2hxIAOAAIg5B1IgLAVQgEAKgHAHQgGAHgIAEQgIADgMAAQgOAAgJgDgAJ5BTIAAh+IABgcIgBAAIhCCaIgIAAIhCiaIgBAAIABAdIAAB9IgMAAIAAinIATAAIA/CTIABAAIA+iTIATAAIAACngAEQBTIAAhrIACgpIgBAAIhpCUIgNAAIAAinIAMAAIAABtIgBAnIABAAIBpiUIAMAAIAACngAAKBTIAAinIArAAQBAAAAAAxQAAAYgSALQgRAOggAAIgcAAIAABFgAAWADIAZAAQAeAAANgHQANgKAAgVQAAgTgMgKQgNgJgaAAIgeAAgAgbBTIgZg7IhIAAIgZA7IgNAAIBHinIAIAAIBGCngAhfguIgZA7IBAAAIgYg7IgHgUIgIAUgAjIBTIAAhTIhoAAIAABTIgNAAIAAinIANAAIAABLIBoAAIAAhLIAMAAIAACngAl7BTIAAhrIACgpIgBAAIhpCUIgNAAIAAinIAMAAIAABtIgBAnIABAAIBpiUIAMAAIAACngAqEBTIAAinIBkAAIAAALIhXAAIAABAIAjAAQAfAAAPAJQAQALAAAXQAAAYgQAMQgPANgcAAgAp3BJIAkAAQAYAAAMgJQALgKAAgUQAAgTgMgIQgMgHgaAAIghAAg");
	this.shape_2.setTransform(111,10.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175.9,35.7);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(146.5,58,1,1,0,0,0,173.5,85);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(144.6,56.1,1,1,0,0,0,144.6,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:292.7,y:109.9},9,cjs.Ease.get(-1)).to({x:457.2,y:169.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtKCyQgkAAAAgkIAAkbQAAgkAkAAIaVAAQAkAAAAAkIAAEbQAAAkgkAAg");
	mask.setTransform(88,17.9);

	// Слой 5
	this.instance = new lib.Символ11();
	this.instance.setTransform(-69.1,-37.2,1,1,0,0,0,144.6,56.1);

	this.instance.mask = mask;

	// Слой 4 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApuA8QgMgFgJgKQgJgJgFgMQgFgMAAgMQAAgOAFgLQAGgMAJgIQAKgJAMgFQAMgFANABQANgBANAFQAMAFAJAJQAKAIAFAMQAGALAAAOQAAAMgFAMQgGAMgIAJQgKAKgMAFQgMAEgPAAQgOAAgNgEgApkgcQgIAFgFAHQgEAIAAAIQAAAIAEAIQAFAIAIAFQAIAFAJAAQAKAAAIgFQAIgFAEgIQAEgIAAgIQAAgIgEgIQgFgHgHgFQgIgEgKgBQgJABgIAEgADrA8QgMgGgJgJQgUgQAAgdQAAgLAFgLQAEgMAJgJQAGgGAHgEQAIgEAJgDQAIgCAJAAQANAAAPAGIAAAmQgEgHgIgDQgHgEgIAAQgKAAgHAFQgIAEgEAIQgEAIAAAHQAAAJAEAIQAEAHAIAFQAHAEAKAAQAIAAAHgEQAHgCAFgHIAAAnIgQAEQgFABgHAAQgNAAgLgEgAKFA8IgFgDIgCgEQgBgCAAgDIABgFQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBIAFgDIAFgBIAGABIAEADIACAEIABAFIgBAFIgCAEIgEADIgGABIgFgBgAIWA9IAAheIgaAAIAAgbIBTAAIAAAbIgaAAIAABegAGsA9IAAh5IBFAAIAAAbIglAAIAAAVIAkAAIAAAZIgkAAIAAAVIAlAAIAAAbgAF4A9IAAgyIgNAGQgJADgLAAQgHAAgHgCQgHgDgGgFQgFgFgDgFQgDgHAAgHIAAguIAgAAIAAAqQAAAGAEAEQAFADAHAAQAGAAAHgDIAKgEIAAgwIAfAAIAAB5gAAsA9IAAh5IAfAAIAAApIASAAQAOAAAKAEQAJAFAGAKQAEAGAAAOQAAAOgFAJQgFAJgKAEQgLAEgNABgABLAjIAGAAIAMAAQAFgCACgDQADgDAAgIQAAgGgDgEQgDgCgEgBIgSgBgAgXA9IAAheIgaAAIAAgbIBRAAIAAAbIgaAAIAABegAhcA9IAAh5IAfAAIAAB5gAjGA9IAAh5IAfAAIAAApIASAAQAOAAAKAEQAKAFAFAKQAEAGAAAOQAAAOgFAJQgFAJgLAEQgKAEgNABgAinAjIAGAAIAMAAQAEgCADgDQAEgDAAgIQAAgGgEgEQgDgCgEgBIgSgBgAkxA9IAAh5IAwAAQAOABAKAEQAKAFAFAIQAFAJAAAOQAAAKgCAJQgDAFgFAFQgGAFgIADQgIACgKAAIgSAAIAAApgAkRgEIARAAQAFgBADgDQADgDAAgHQAAgHgDgEQgDgDgFgBIgMgBIgFAAgAliA9Igpg1IAAAAIAAA1IggAAIAAh5IAgAAIAAAzIAAAAIAmgzIAnAAIgwA7IA1A+gAnwA9IAAheIgaAAIAAgbIBTAAIAAAbIgZAAIAABegAKAAXIgChRIAZAAIgDBRg");
	this.shape.setTransform(87.2,18.5);

	// Слой 3
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(10.5,7.4,1,1,0,0,0,10.2,7.1);
	this.instance_1.alpha = 0.289;

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AtoCYIAAkbQAAgkAkAAIaVAAQAPAAAIAGQ6kAcgpEtQgDgHAAgJg");
	this.shape_1.setTransform(87.3,16.8);

	// Слой 1 - копия
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00B200","#00FF00","#00B200"],[0,0.471,1],-87.9,0,88,0).s().p("AtKCyQgkAAAAgkIAAkbQAAgkAkAAIaVAAQAkAAAAAkIAAEbQAAAkgkAAg");
	this.shape_2.setTransform(88,17.9);

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("AtKCyQgkAAAAgkIAAkbQAAgkAkAAIaVAAQAkAAAAAkIAAEbQAAAkgkAAg");
	this.shape_3.setTransform(88,18.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175.9,36.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(98.8,20.1,1.122,1.122,0,0,0,88,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:18.2,scaleX:1.18,scaleY:1.18,x:94.9,y:20.7},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:93.5,y:20.8},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:92.7,y:20.9},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:92},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:91.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:91.3,y:21},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:91},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:90.9},0).wait(1).to({regY:17.9,scaleX:1.25,scaleY:1.25,x:90.8,y:20.6},0).wait(1).to({regY:18.2,scaleX:1.19,scaleY:1.19,x:94.5,y:20.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:95.9,y:20.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:96.7,y:20.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:97.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:97.8,y:20.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:98.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:98.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:98.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:98.7},0).wait(1).to({regY:17.9,scaleX:1.12,scaleY:1.12,x:98.8,y:20.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.1,-135,467.6,190.8);


// stage content:



(lib.binar_950x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.btn.gotoAndPlay(1);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.btn.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ6();
	this.instance.setTransform(461.1,26.4,1.02,1.02,0,0,0,248.6,10.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.btn = new lib.Символ14();
	this.btn.setTransform(845.7,24.5,1,1,0,0,0,98.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(96.3,25.5,1,1,0,0,0,88,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.086)").s().p("AvTD7IAAn1IenAAIAAH1g");
	this.shape.setTransform(98,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(475,25,1,1,0,0,0,475,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(475,-105.9,950,190.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
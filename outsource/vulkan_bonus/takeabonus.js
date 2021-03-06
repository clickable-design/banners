(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/btn.png?1473166795918", id:"btn"},
		{src:"images/btn2.png?1473166795918", id:"btn2"},
		{src:"images/element_03.png?1473166795918", id:"element_03"},
		{src:"images/element_06.png?1473166795918", id:"element_06"},
		{src:"images/element_08.png?1473166795918", id:"element_08"},
		{src:"images/element_18.png?1473166795918", id:"element_18"},
		{src:"images/element_21.png?1473166795918", id:"element_21"},
		{src:"images/element_23.png?1473166795918", id:"element_23"},
		{src:"images/element_28.png?1473166795918", id:"element_28"},
		{src:"images/element_30.png?1473166795918", id:"element_30"},
		{src:"images/element_32.png?1473166795918", id:"element_32"},
		{src:"images/fon.jpg?1473166795918", id:"fon"},
		{src:"images/logo.png?1473166795918", id:"logo"},
		{src:"images/telka_03.png?1473166795918", id:"telka_03"},
		{src:"images/telka_06.png?1473166795918", id:"telka_06"},
		{src:"images/telka_09.png?1473166795918", id:"telka_09"},
		{src:"images/text.png?1473166795918", id:"text"}
	]
};



// symbols:



(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.element_03 = function() {
	this.initialize(img.element_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,70);


(lib.element_06 = function() {
	this.initialize(img.element_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,62);


(lib.element_08 = function() {
	this.initialize(img.element_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,62);


(lib.element_18 = function() {
	this.initialize(img.element_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,61);


(lib.element_21 = function() {
	this.initialize(img.element_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.element_23 = function() {
	this.initialize(img.element_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,52);


(lib.element_28 = function() {
	this.initialize(img.element_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,134);


(lib.element_30 = function() {
	this.initialize(img.element_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,145);


(lib.element_32 = function() {
	this.initialize(img.element_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,325);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,168);


(lib.telka_03 = function() {
	this.initialize(img.telka_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,224);


(lib.telka_06 = function() {
	this.initialize(img.telka_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,222);


(lib.telka_09 = function() {
	this.initialize(img.telka_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,209);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,100);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.8)").s().p("AnHOrIAA9VIOPAAIAAdVg");
	this.shape.setTransform(33.9,95.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.8)").s().p("AnVOLIAA8VIOrAAIAAcVg");
	this.shape.setTransform(39.9,91.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.8)").s().p("AnPOMIAA8XIOfAAIAAcXg");
	this.shape.setTransform(38.1,89.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_28();
	this.instance.setTransform(0,0,1.084,1.084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.2,145.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_30();
	this.instance.setTransform(0,0,0.464,0.464);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,67.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_06();
	this.instance.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,65,62);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AF6BNIAWiaIAoAAIgIA2IAYAAQAPAAALADQAKADAGAHQAFAGACAIQABAIgBAMQgCAMgFAKQgFAJgIAHQgJAIgKAEQgLADgNAAgAGnArIAXAAQAFAAAEgCQADgBADgDQAEgFABgJQABgIgEgEQgEgFgIAAIgXAAgAEZBNIARh2IgqAAIAFgkIB8AAIgGAkIgqAAIgQB2gADEBNIgFgfIgqAAIgOAfIgqAAIBMiaIAkAAIAiCagAC6AMIgEgsIgCAAIgRAsIAXAAgAgbBNIAViaIA9AAQAHABAGABQAGABAFADQAJAEAHAIQAGAIACAKQACAKgBALQgBALgFAJQgFAIgIAIQgIAHgLAFQgPAEgKAAIgZAAIgGAtgAAVgBIAXAAQAFAAADgCQAEgBADgDQAFgFABgKQABgHgEgFQgEgGgIAAIgXAAgAijBNIAWiaIBrAAIgFAiIhDAAIgDAYIAWAAQARAAAKADQALADAFAGQAGAGACAHQABAJgBAMQgCALgFAJQgFAKgJAHQgIAHgLADQgKAEgNgBgAh2ArIAXAAQAJAAAFgFQAFgEABgKQABgHgEgFQgEgFgJABIgWAAgAjjBNIAWiaIAnAAIgWCagAlwBNIAWiaIAoAAIgIA2IAYAAQAPAAALADQAKADAGAHQAFAGACAIQABAIgBAMQgCAMgFAKQgFAJgIAHQgJAIgKAEQgLADgNAAgAlDArIAXAAQAFAAAEgCQADgBADgDQAEgFABgJQABgIgEgEQgEgFgIAAIgXAAgAn5BNIAWiaIA+AAQAMABAIADQAJADAGAGQAHAGACAJQACAKgCAKQgBAGgEAIQgGAHgIAEQAHAEAEAEQAEAFACAGQABAGgBAGQAAAGgBAEQgDAKgFAHQgFAHgIAGQgHAFgKADQgLACgMAAgAnMArIAWAAQAJAAAFgFQAFgEABgHQABgHgEgEQgEgFgIAAIgXAAgAnEgPIAXAAQAHAAAEgFQAEgEABgFQABgGgDgEQgDgEgHAAIgXAAg");
	this.shape.setTransform(50.6,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.2,15.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,52);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_18();
	this.instance.setTransform(0,0,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,55.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AgbDOIgBAAIgHAAQgNAAgLgIQgKgIgEgMQgGgTAMgQQANgQAUAAQAJAAAHAEIAFgBIAAAAQAKAAAIAFQAJAFAFAJQAFAIABALQAAALgEAJQgKAUgUABIgEAAQgIAAgGgDgAgMByQgNgCgIgKQgNgOABgeQABgaAHgOQAKgTAZgNIAQgIQAKgFAGgGQAKgLABgWIAAgjQAAgNgEgEQgDgEgJgCQgOgDgMgBIAGAJQAMAOACAHQAIAUgOARQgMAQgUAAQgUgBgOgQIgCgCIgGAAIgOADQgLABgKgEQgKgEgGgJQgGgIgBgLQgCgLAFgKQAHgOASgIQAGgCAIgCIgHgLQgGgMADgNIAEgIIAGgDIAHgEIABAAIAGgCIAsgMIATAAQAaAAAUAGQAZAHASAPQAUAQAHAWQAEANABATIgBAhIABAYQgBAOgCAKQgGAdgqAlQgPAOgKACQgIACgCACQgCACABALQABAMgGAMQgHAMgLAFQgIAEgHAAIgIgBg");
	this.shape.setTransform(12.1,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,42);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text();
	this.instance.setTransform(-150,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-50,300,100);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_32();
	this.instance.setTransform(-29.7,-37.1,0.496,0.619);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-37.1,59.6,74.3);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_03();
	this.instance.setTransform(-31.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-35,63,70);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_08();
	this.instance.setTransform(-31.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31,63,62);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация15("synched",0);
	this.instance.setTransform(150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,100);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(150,50,1,1,0,0,0,150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:60.4},14,cjs.Ease.get(-1)).to({y:50},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,100);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация13("synched",0);
	this.instance.setTransform(29.8,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.6,74.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(63.4,112.5,1,1,0,0,0,29.8,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.12,scaleY:2.12,x:59.1,y:74.9},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:63.4,y:112.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.6,75.4,59.6,74.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(58.5,115,0.525,0.525,0,0,0,59.6,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:72.6,scaleX:1,scaleY:1,x:59.6,y:72.6},14,cjs.Ease.get(1)).to({regY:72.5,scaleX:0.53,scaleY:0.53,x:58.5,y:115},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,77,62.6,76.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(82.7,129.2,1,1,0,0,0,33.9,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:33.8,regY:33.5,scaleX:2.87,scaleY:2.87,x:79.6,y:66.7},14,cjs.Ease.get(1)).to({regX:33.9,regY:33.6,scaleX:1,scaleY:1,x:82.7,y:129.2},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.8,95.6,67.7,67.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(33.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,4,63,70);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(33.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,8,63,62);


(lib.Символ11копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ11();
	this.instance.setTransform(155.7,63.3,1,1,0,0,0,50.6,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:64.5},0).wait(1));

	// btn.png
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(43.7,8.5,0.747,0.747);

	this.instance_2 = new lib.btn2();
	this.instance_2.setTransform(43.9,9.2,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.7,8.5,224,112);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(34.8,26.4,1,1,0,0,0,31.5,26);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-2,-2,67,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-3.6,75,63);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_18();
	this.instance.setTransform(0,0,0.908,0.908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(38.2,27.3,1,1,0,0,0,34.5,27.7);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0), new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-2,-2,73,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-4.4,81,67);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(16.3,21.4,1,1,0,0,0,12.1,21);
	this.instance_1.alpha = 0.672;
	this.instance_1.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_1.cache(-2,-2,28,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.6,36.2,53);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.setTransform(37.2,92.3,1,1,0,0,0,31.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:26.1,scaleX:1.08,scaleY:1.08,x:36.8,y:94.3},9,cjs.Ease.get(-1)).to({regY:26,scaleX:1,scaleY:1,x:37.2,y:92.3},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(42.5,151.3,1,1,0,0,0,31.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:31.6,rotation:-5,x:42.6,y:151.2},4).to({regX:31.5,regY:35.1,rotation:5.7,x:42.5,y:151.3},10).to({regY:35,rotation:0},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.telka_06();
	this.instance_2.setTransform(0,0,0.796,0.796);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,190.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.setTransform(49.5,96.5,1,1,0,0,0,15,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:15.1,scaleX:1.14,scaleY:1.14,x:50.5,y:97.9},9,cjs.Ease.get(-1)).to({regX:15,scaleX:1,scaleY:1,x:49.5,y:96.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(49.5,149.5,1,1,0,0,0,31.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:31.1,rotation:-5.7},4).to({regX:31.6,regY:31,rotation:6.9,x:49.6,y:149.4},10).to({regX:31.5,rotation:0,x:49.5,y:149.5},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.telka_03();
	this.instance_2.setTransform(0,0,0.819,0.819);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.6,188.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(34.5,28.1,1,1,0,0,0,34.5,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-4,81,67);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(33.9,87.1,1,1,0,0,0,36.4,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14,x:35,y:90.9},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:33.9,y:87.1},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(43.5,142.6,1,1,0,0,0,32.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-10.5},5).to({regY:30.9,rotation:6.2,y:142.5},9).to({regY:31,rotation:0,y:142.6},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.telka_09();
	this.instance_2.setTransform(0,0,0.819,0.819);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,88,176.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// telka_09.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(-42,128.2,1,1,0,0,0,42.6,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:126.2},14,cjs.Ease.get(-1)).to({y:128.2},15,cjs.Ease.get(1)).wait(10));

	// telka_03.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(52.7,108.7,1,1,0,0,0,46.2,91.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:106.7},14,cjs.Ease.get(-1)).to({y:108.7},15,cjs.Ease.get(1)).wait(6));

	// telka_06.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(164.8,123.4,1,1,0,0,0,46.2,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:121.4},14,cjs.Ease.get(-1)).to({y:123.4},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,17,298.4,208.3);


// stage content:



(lib.takeabonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.scaleX = stage.scaleY = 2;
		 stage.canvas.width = 300 * 2;
		 stage.canvas.height = 250 * 2;
		 stage.canvas.style.width = '300px';
		 stage.canvas.style.height = '250px';   
		
		
		var _this = this;
		this.hit1.addEventListener("mouseover", fl_Clickover);
		
		function fl_Clickover()
		{
		    _this.effect.gotoAndPlay(1);
		   
		}
		
		this.hit1.addEventListener("mouseout", fl_Clickout);
		
		function fl_Clickout()
		{
		    _this.effect.gotoAndPlay(15);
		  
		}
		
		this.hit2.addEventListener("mouseover", fl_Clickover1);
		
		function fl_Clickover1()
		{
		    _this.effect2.gotoAndPlay(1);
		   
		}
		
		this.hit2.addEventListener("mouseout", fl_Clickout1);
		
		function fl_Clickout1()
		{
		    _this.effect2.gotoAndPlay(15);
		  
		}
		
		this.hit3.addEventListener("mouseover", fl_Clickover2);
		
		function fl_Clickover2()
		{
		    _this.effect3.gotoAndPlay(1);
		   
		}
		
		this.hit3.addEventListener("mouseout", fl_Clickout2);
		
		function fl_Clickout2()
		{
		    _this.effect3.gotoAndPlay(15);
		  
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(-25.6,175,0.593,0.593);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(149.9,13.2,1,1,0,0,0,150,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// btn1
	this.instance_2 = new lib.Символ11копия();
	this.instance_2.setTransform(148.8,200,0.929,0.929,0,0,0,157.5,46.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hit1
	this.hit3 = new lib.Символ25();
	this.hit3.setTransform(253.4,125.1,1,1,0,0,0,36.8,84.2);
	new cjs.ButtonHelper(this.hit3, 0, 1, 2, false, new lib.Символ25(), 3);

	this.hit2 = new lib.Символ24();
	this.hit2.setTransform(148,101.1,1,1,0,0,0,38.1,79.4);
	new cjs.ButtonHelper(this.hit2, 0, 1, 2, false, new lib.Символ24(), 3);

	this.hit1 = new lib.Символ23();
	this.hit1.setTransform(48.2,127.9,1,1,0,0,0,36.9,79.8);
	new cjs.ButtonHelper(this.hit1, 0, 1, 2, false, new lib.Символ23(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit1},{t:this.hit2},{t:this.hit3}]}).wait(1));

	// telki
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(139,96.7,1,1,0,0,0,47.5,91.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// effect3
	this.effect3 = new lib.Символ19();
	this.effect3.setTransform(249.7,137.2,1,1,0,0,0,60,74.9);

	this.timeline.addTween(cjs.Tween.get(this.effect3).wait(1));

	// effect2
	this.effect2 = new lib.Символ18();
	this.effect2.setTransform(149.1,108,1,1,0,0,0,59.6,72.6);

	this.timeline.addTween(cjs.Tween.get(this.effect2).wait(1));

	// effect
	this.effect = new lib.Символ17();
	this.effect.setTransform(42.5,135.6,1,1,0,0,0,82,81.4);

	this.timeline.addTween(cjs.Tween.get(this.effect).wait(1));

	// fon
	this.instance_4 = new lib.fon();
	this.instance_4.setTransform(-63,-23,0.849,0.849);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,88.2,424.6,311.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/baba.png", id:"baba"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/cream.png", id:"cream"},
		{src:"images/finger.png", id:"finger"},
		{src:"images/fror.png", id:"fror"},
		{src:"images/honey.png", id:"honey"},
		{src:"images/klubnika.png", id:"klubnika"},
		{src:"images/klubnika_1.png", id:"klubnika_1"},
		{src:"images/klubnika_2.png", id:"klubnika_2"},
		{src:"images/klubnika_3.png", id:"klubnika_3"},
		{src:"images/left_hand.png", id:"left_hand"},
		{src:"images/mouse.png", id:"mouse"},
		{src:"images/nogi.png", id:"nogi"},
		{src:"images/nuttella.png", id:"nuttella"},
		{src:"images/right_hand.png", id:"right_hand"},
		{src:"images/sisi.png", id:"sisi"}
	]
};



// symbols:



(lib.baba = function() {
	this.initialize(img.baba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,342);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,870,305);


(lib.cream = function() {
	this.initialize(img.cream);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,104);


(lib.finger = function() {
	this.initialize(img.finger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,45);


(lib.fror = function() {
	this.initialize(img.fror);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.honey = function() {
	this.initialize(img.honey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,113);


(lib.klubnika = function() {
	this.initialize(img.klubnika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,97);


(lib.klubnika_1 = function() {
	this.initialize(img.klubnika_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,84);


(lib.klubnika_2 = function() {
	this.initialize(img.klubnika_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,84);


(lib.klubnika_3 = function() {
	this.initialize(img.klubnika_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,84);


(lib.left_hand = function() {
	this.initialize(img.left_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,169);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,42);


(lib.nogi = function() {
	this.initialize(img.nogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,138);


(lib.nuttella = function() {
	this.initialize(img.nuttella);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,94);


(lib.right_hand = function() {
	this.initialize(img.right_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.sisi = function() {
	this.initialize(img.sisi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,90);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.honey();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,113);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cream();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,104);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.nuttella();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,94);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.finger();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,45);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.klubnika_1();
	this.instance.setTransform(-46,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46,-42,92,84);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.klubnika_2();
	this.instance.setTransform(-46.5,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-42,93,84);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.klubnika_3();
	this.instance.setTransform(-46.5,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-42,93,84);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxIEMQnGhwAAicQAAicHGhvQHGhvKCAAQKCAAHHBvQHGBvAACcQAACcnGBwQnHBvqCAAQqCAAnGhvg");
	this.shape.setTransform(155.2,38);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,310.4,76);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlIFIQiIiIAAjAQAAi/CIiJQCJiIC/AAQDAAACICIQCICJAAC/QAADAiICIQiICIjAAAQi/AAiJiIg");
	this.shape.setTransform(46.5,46.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,93);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,870,305);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mouse();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,42);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.klubnika();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,97);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AksEuQh9h9gBixQABiwB9h8QB8h9CwgBQCxABB9B9QB8B8ABCwQgBCxh8B9Qh9B8ixABQiwgBh8h8g");
	this.shape.setTransform(42.7,42.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85.4,85.4);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXDXIgmgTIgZgSIgQgTIgDgKIAAgPIAFg+IAmkNQADgQAIgDQAHgCAQADQAOACAPAGIAeANQANAJADAGQADAHgCAMIggCQQBUgLAtAbQATAKAMASQANARACATQADAagKAWQgKAXgTAOQgMALgPAKIgkASIhLAaIgPADIgNABgAheA6QgQACgTAGIgQBMQAZgGAVgJQAVgJAOgKQAOgJAHgKQAHgKgCgIQgCgFgHgEQgHgEgMgBIgKgBIgSACgASYDYIghgFQgSgFgOgGQgOgHgKgJQgKgJgHgKIgLgVQgHgJgBgJIAAgQQADgPAIgEQAHgFASAGQA4ASABASIAFARQACAIAMABQAKABAJgRQAKgRAKgcIAIgcQgUAIghABQgXABgTgFQgTgFgPgLQgegVADgpIAUizQAEgPAHgDQAHgDAOAFIAhAMQASAHANAJIALAIIAGAIIABAJIgCALIgdB8QgJAdAZgBQAQgBANgDQANgEAJgFIAhi/QADgOAIgDQAIgDAPAEIAgAKQARAHAOAIIALAJIAFAHIACAJIgCALQgMBGgNA6QgOA4gPAsQgQAsgSAeQgSAegVAOQgRAJgXAFQgKACgLAAIgGAAgA0cDVIgrgPQgMgFgEgHQgEgHABgMIAGhpIAhj2QAFgQAIgEQAIgEAQACIBRAVQALAEAHAFIAKALIAGANIAaCoIBojHQAIgOAJgHQAIgIALgBQALgBAQAFIBVAdQAOAHAEAJQADAJgFAQIhhFRQgEAJgEAEQgEAEgNgDIgWgGIgUgIQgLgFgEgHQgEgIADgMIAQhXIAchzIhyDWIgEAFIgGABIgKgBIgigJIgJgDIgHgGIgFgJIgFgOQgJgigJgtIgQhbIglDlQgBAJgFADQgCABgEAAIgKgBgALgDNQgWgFgJgJQgKgJABgSIADgrIAuk7QADgNAIgEQAIgDAOAEQAPAEASAIQARAIANAIIAMAJIAGAHIABAJIggCHICji1QAIgKAIAAQAIAAAKAIQALAKAGALIAOAXQADALgBAKQgBAKgJAPQgLASgTAXIiCCFIArBAIAnAyQAIAIgBAFQgCAFgKAFIgPAGIgRADQgMADgNgBQgNgCgNgOIhPhgIgUBqQAAAHgDADQgDADgHAAgAENDWIgJgDIgogeQgIgHgEgIQgEgIACgMIANhkIAyjuQAFgOAHgDQAIgCAOAEIAhALQARAHANAIQAMAJADAHQAEAHgFAMIg6DPIgQBGIBJgFIAkjSIAbhzQAFgOAHgCQAHgDAPAEIAhALQARAHANAJQAMAJADAGQAEAHgFANIg6DOIgQBGIBEgFIBFk6QAEgPAIgCQAIgCAPAEIAcALIAdAPQAMAKADAGQADAHgEANIg3C2IgmCQQgEAMgIAGQgHAGgMgBQh2AHivAGgAB9DUIgtgQQgLgFgDgHQgEgHACgNIALhlIAuj6QAEgOAIgDQAHgDAPAEIAgAMQASAHANAJQANAJADAHQACAHgDANIguCpIgmCrQgDAJgEACQgCABgEAAIgLgBgAk6DUIgbgEQgLgEgFgFQgFgFgBgOIgEgeQgBgRABg1IALjFIhWCjIhKCcQgEAIgFACQgGABgLgEIgdgMIgKgHIgHgGIgCgKIACgQIAehOIBUi4QAWguAUgkQAIgNALgIQAMgJAWACIAjADIBKASQAPAFAEAJQAEAIgCAOIgVEJQgCAwAAApQAAAJgDAEQgEADgNAAIgWgBgAqFDUQgKAAgLgEQgMgEgEgFQgFgFgCgOIgGhCIhIAJQgkAFgbAIIgfBCQgEAIgFACQgGABgLgEIgcgMIgKgHIgHgGIgDgKIADgQIAehOIBTi4QAXguAUgkQAHgNAMgIQALgJAXACIAjADIBJASQAPAFAEAJQAEAIgBAOIgJFiQAAAJgEAEQgDADgNAAIgXgBgAsTAuIBYgJIgBiag");
	this.shape.setTransform(137.2,21.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,274.4,43.7);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(148.8,24.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297.6,49.8);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.nogi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,154,138);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sisi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,124,90);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.right_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149,149);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.left_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,169);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fror();
	this.instance.setTransform(-26.3,-25.9,0.74,0.74,0,-1,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-25.9,52.7,51.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(0.2,-0.3,0.61,0.61,0,0,0,23.1,22.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// klubnika_3.png
	this.instance_1 = new lib.Символ33();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1));

	// klubnika_2.png
	this.instance_2 = new lib.Символ34();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// klubnika_1.png
	this.instance_3 = new lib.Символ35();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(34,47,1,1,0,0,0,34,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,94);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(40,56.5,1,1,0,0,0,40,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:0.89,scaleY:0.89},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,113);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(37.5,52,1,1,0,0,0,37.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.87,scaleY:0.87},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,104);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(46.5,46.5,1,1,0,0,0,46.5,46.5);
	this.instance.alpha = 0.32;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(52, 52, 1)];
	this.instance.cache(-2,-2,97,97);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:99.3},26,cjs.Ease.get(1)).to({y:46.5},33,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-52,205,205);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ19();
	this.instance.setTransform(81,46.5,1,1,0,0,0,12.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87},9,cjs.Ease.get(1)).to({x:81},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(46,35.5,1,1,0,0,0,37,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 1
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(67.7,42.7,1,1,0,0,0,42.7,42.7);
	this.instance_2.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-13,101.4,98.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ16();
	this.instance.setTransform(18.2,40.2,1,1,0,0,0,42.7,42.7);

	// 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(211,64.2,0.735,0.735,0,0,0,137.2,21.9);

	// 1
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(223.8,25.5,0.735,0.735,0,0,0,148.8,24.9);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,348.7,98.5);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(159.3,54.7,1,1,0,0,0,151.7,49.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-10.5,348.7,98.5);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 4 - копия: 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(337.5,51.1,2.05,2.05,0,0,0,46.5,46.5);
	this.instance.alpha = 0.391;

	// Слой 4 - копия: 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(493.4,299.2,2.04,2.04,0,180,0,46.5,46.5);
	this.instance_1.alpha = 0.391;

	// Слой 4 - копия
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(142.5,267,1.51,1.51,0,0,0,46.5,46.5);
	this.instance_2.alpha = 0.391;

	// Слой 4
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(644.7,43.8,2.4,2.4,0,0,0,46.5,46.5);
	this.instance_3.alpha = 0.391;

	// Слой 1
	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(435,152.5,1,1,0,0,0,435,152.5);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-93.8,870,518.2);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация11("synched",0);
	this.instance.setTransform(26.4,25.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,51.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(26.6,25.3,1,1.01,0,7.9,0,26.4,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:0,x:26.4,y:25.9},9).to({scaleY:1.01,skewX:7.9,x:26.6,y:25.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-0.6,59.9,51.8);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(127.5,137.1,1,1,0,0,0,26.4,25.9);

	// Слой 1
	this.instance_1 = new lib.baba();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203,342);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(199,223.7,1,1.005,0,1.5,7.5,62.1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,scaleY:1.02,skewX:0.8,skewY:3.8,x:196.5,y:217.8},14,cjs.Ease.get(-1)).to({regX:62,scaleX:1.03,scaleY:1.03,skewX:0,skewY:0,x:193.7,y:211.3},15,cjs.Ease.get(1)).to({regX:62.1,scaleX:1.01,scaleY:1.02,skewX:0.8,skewY:3.6,x:196.4,y:217.5},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:1.5,skewY:7.5,x:199,y:223.7},15,cjs.Ease.get(1)).wait(1));

	// 2016-03-04+10-18-41_09.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(176.4,176.1,1,1,7.5,0,0,101.5,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.01,scaleY:1.01,rotation:3.8,x:171,y:171.2},14,cjs.Ease.get(-1)).to({scaleX:1.03,scaleY:1.03,rotation:0,x:165.3,y:165.9},15,cjs.Ease.get(1)).to({regX:101.4,regY:171.1,scaleX:1.01,scaleY:1.01,rotation:3.6,x:170.8,y:171.1},15,cjs.Ease.get(-1)).to({regX:101.5,regY:171,scaleX:1,scaleY:1,rotation:7.5,x:176.4,y:176.1},15,cjs.Ease.get(1)).wait(1));

	// 2016-03-04+10-18-41_05.png
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(278.2,155,1,1,7.5,0,0,74.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.01,scaleY:1.01,rotation:11,x:269.5,y:141.7},14,cjs.Ease.get(-1)).to({scaleX:1.03,scaleY:1.03,rotation:15,x:260.2,y:127.5},15,cjs.Ease.get(1)).to({scaleX:1.01,scaleY:1.01,rotation:11.1,x:269.2,y:141.3},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:7.5,x:278.2,y:155},15,cjs.Ease.get(1)).wait(1));

	// 2016-03-04+10-18-41_02.png
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(84.8,171.4,1,1,7.5,0,0,67.5,84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.01,scaleY:1.01,rotation:0.5,x:82.8,y:174.6},14,cjs.Ease.get(-1)).to({scaleX:1.03,scaleY:1.03,rotation:-6.9,x:80.7,y:178.1},15,cjs.Ease.get(1)).to({regX:67.6,scaleX:1.01,scaleY:1.01,rotation:0.3,x:82.8,y:174.8},15,cjs.Ease.get(-1)).to({regX:67.5,scaleX:1,scaleY:1,rotation:7.5,x:84.8,y:171.4},15,cjs.Ease.get(1)).wait(1));

	// 2016-03-04+10-18-41_15.png
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(163.1,360.9,0.958,1.002,0,-3.8,0,76.9,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.98,scaleY:1,skewX:0.3,x:164.6,y:361.7},14,cjs.Ease.get(-1)).to({regX:77,scaleX:1,scaleY:1,skewX:5,x:166.2,y:362.6},15,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:1,skewX:0.5,x:164.6,y:361.8},15,cjs.Ease.get(-1)).to({regX:76.9,scaleX:0.96,scaleY:1,skewX:-3.8,x:163.1,y:360.9},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ31();
	this.instance_5.setTransform(104.5,382.6,1.1,1.1,0,0,0,155.2,37.9);
	this.instance_5.alpha = 0.109;
	this.instance_5.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance_5.cache(-2,-2,314,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({regY:38,scaleX:0.97,rotation:8,x:124.1,y:382.7},15,cjs.Ease.get(1)).to({regY:37.9,scaleX:1.1,rotation:0,x:104.5,y:382.6},15,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-6.6,438,449.5);


(lib.Символ10 = function(mode,startPosition,loop) {
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
	this.baba = new lib.Символ1();
	this.baba.setTransform(122.4,170.9,0.764,0.764,0,0,0,167.1,217.1);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1).to({scaleX:0.91,scaleY:0.91,x:130.4,y:194.9},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.76,scaleY:0.76,x:122.4,y:170.9},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,0,331.8,338.4);


// stage content:



(lib.sladkaya_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.nut.addEventListener("mouseover", qwe1);
		
		function qwe1()
		{
		 _this.kursor.gotoAndPlay(4);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.honey.addEventListener("mouseover", qwe2);
		
		function qwe2()
		{
		 _this.kursor.gotoAndPlay(3);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.cream.addEventListener("mouseover", qwe3);
		
		function qwe3()
		{
		 _this.kursor.gotoAndPlay(2);
		}
		
		
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
			this.kursor.x = stage.mouseX;
			this.kursor.y = stage.mouseY;
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.bg.x = - stage.mouseX / 20;
		
		}
		
		
		var _this = this;
		
		stage.canvas.onmouseout = qwe;
		
		  function qwe()
		{
		    _this.kursor.gotoAndPlay(0);
		    _this.dama.gotoAndPlay(5);
		}
		
		
		//baba
		
		stage.canvas.onmouseover = baba;
		
		  function baba()
		{
		    _this.dama.gotoAndPlay(1);
		    _this.kursor.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cursor
	this.kursor = new lib.Символ32();
	this.kursor.setTransform(824.5,173.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// nut
	this.nut = new lib.Символ30();
	this.nut.setTransform(83,213.5,1,1,0,0,0,34,47);

	this.timeline.addTween(cjs.Tween.get(this.nut).wait(1));

	// honey
	this.honey = new lib.Символ29();
	this.honey.setTransform(179.7,204.5,1,1,0,0,0,40,56.5);

	this.timeline.addTween(cjs.Tween.get(this.honey).wait(1));

	// cream
	this.cream = new lib.Символ28();
	this.cream.setTransform(273.5,206.5,1,1,0,0,0,37.5,52);

	this.timeline.addTween(cjs.Tween.get(this.cream).wait(1));

	// dama
	this.dama = new lib.Символ10();
	this.dama.setTransform(494.5,174.1,1,1,0,0,180,135.5,166.7);

	this.timeline.addTween(cjs.Tween.get(this.dama).wait(1));

	// text
	this.text = new lib.Символ11();
	this.text.setTransform(250.5,133.9,1,1,0,0,0,209.5,104.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.bg = new lib.Символ9();
	this.bg.setTransform(31,152.5,1,1,0,0,0,110,152.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(241,58.7,870,518.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
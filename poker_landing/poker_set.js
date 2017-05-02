(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1238,
	height: 365,
	fps: 40,
	color: "#006633",
	opacity: 0.00,
	manifest: [
		{src:"images/ace_bubna.png?1474985108441", id:"ace_bubna"},
		{src:"images/back.png?1474985108441", id:"back"},
		{src:"images/five_chirva.png?1474985108441", id:"five_chirva"},
		{src:"images/frame.png?1474985108441", id:"frame"},
		{src:"images/seven_pika.png?1474985108441", id:"seven_pika"},
		{src:"images/seven_trefa.png?1474985108441", id:"seven_trefa"},
		{src:"images/three_poka.png?1474985108441", id:"three_poka"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.ace_bubna = function() {
	this.initialize(img.ace_bubna);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.five_chirva = function() {
	this.initialize(img.five_chirva);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,305);


(lib.seven_pika = function() {
	this.initialize(img.seven_pika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.seven_trefa = function() {
	this.initialize(img.seven_trefa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.three_poka = function() {
	this.initialize(img.three_poka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.three_pika = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.three_poka();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.hight_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AszW5QizAAgBi0MAAAgoJQABi0CzAAIZmAAQC1AAgBC0MAAAAoJQABC0i1AAg");
	this.shape.setTransform(100,146.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,293.1);


(lib.five_chirva_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.five_chirva();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.card_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.frame();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212,305);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hight_light();
	this.instance.parent = this;
	this.instance.setTransform(100,146.5,1,1,0,0,0,100,146.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,293.1);


(lib.card_frames = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card_frame();
	this.instance.parent = this;
	this.instance.setTransform(830.4,152.5,1,1,0,0,0,106,152.5);

	this.instance_1 = new lib.card_frame();
	this.instance_1.parent = this;
	this.instance_1.setTransform(588.9,152.5,1,1,0,0,0,106,152.5);

	this.instance_2 = new lib.card_frame();
	this.instance_2.parent = this;
	this.instance_2.setTransform(347.5,152.5,1,1,0,0,0,106,152.5);

	this.instance_3 = new lib.card_frame();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1071.9,152.5,1,1,0,0,0,106,152.5);

	this.instance_4 = new lib.card_frame();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106,152.5,1,1,0,0,0,106,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1177.9,305);


(lib.ace_bubna_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// Layer 5
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(115.6,159.5,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(99));

	// Layer 1
	this.instance_1 = new lib.ace_bubna();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.seven_trefa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(116.1,159.1,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.seven_trefa();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.seven_pika_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(116.6,159.5,1,1,0,0,0,100,146.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.seven_pika();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,325);


(lib.main_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_177 = function() {
		this.stop();
		this.ace_bubna.gotoAndPlay(1);
		this.seven_pika.gotoAndPlay(1);
		this.seven_trefa.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(177).call(this.frame_177).wait(1));

	// three_pika
	this.instance = new lib.three_pika();
	this.instance.parent = this;
	this.instance.setTransform(1071.8,155.3,0.06,1,0,0,0,116,162.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165).to({_off:false},0).to({scaleX:1.05,scaleY:1.05},6,cjs.Ease.get(1)).to({regY:162.4,scaleX:1,scaleY:1,x:1071.9,y:155.2},6,cjs.Ease.get(1)).wait(1));

	// back
	this.instance_1 = new lib.back_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1072.1,155.5,1.376,1.376,0,0,0,116,162.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regY:162.5,scaleX:1.26,scaleY:1.26,x:1072,y:155.7,alpha:0.308},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.506},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.635},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.727},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.857},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:1071.9,alpha:0.898},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:1072,alpha:0.927},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.947},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.962},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:1071.9,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:1072,alpha:0.982},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,y:155.6,alpha:1},0).wait(128).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(-1)).to({scaleX:0.06,x:1072.1},6,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

	// five_chirva
	this.instance_2 = new lib.five_chirva_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(830.2,155.6,0.051,1,0,0,0,116,162.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:false},0).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(38));

	// back
	this.instance_3 = new lib.back_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(830.1,155.5,1.376,1.376,0,0,0,116,162.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).wait(1).to({regY:162.5,scaleX:1.26,scaleY:1.26,x:830,y:155.7,alpha:0.308},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.506},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.635},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.727},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.857},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:829.9,alpha:0.898},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:830,alpha:0.927},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.947},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.962},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:829.9,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:830,alpha:0.982},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,y:155.6,alpha:1},0).wait(93).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(-1)).to({regX:116.6,scaleX:0.05,x:830.2},6,cjs.Ease.get(-1)).to({_off:true},1).wait(49));

	// seven_pika
	this.seven_pika = new lib.seven_pika_1();
	this.seven_pika.parent = this;
	this.seven_pika.setTransform(589.1,155.6,0.052,1.055,0,0,0,116.5,162.5);
	this.seven_pika._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seven_pika).wait(80).to({_off:false},0).to({regX:116,scaleX:1.06,x:588.9},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(85));

	// back
	this.instance_4 = new lib.back_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(589,155.5,1.376,1.376,0,0,0,116,162.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).wait(1).to({regY:162.5,scaleX:1.26,scaleY:1.26,x:588.9,y:155.7,alpha:0.308},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.506},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.635},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.727},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.857},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:588.8,alpha:0.898},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:588.9,alpha:0.927},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.947},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.962},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:588.8,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:588.9,alpha:0.982},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,y:155.6,alpha:1},0).wait(46).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(-1)).to({regX:116.5,scaleX:0.05,x:589.1},7,cjs.Ease.get(-1)).to({_off:true},1).wait(97));

	// seven_trefa
	this.seven_trefa = new lib.seven_trefa_1();
	this.seven_trefa.parent = this;
	this.seven_trefa.setTransform(347.3,155.6,0.052,1.055,0,0,0,116.5,162.5);
	this.seven_trefa._off = true;

	this.timeline.addTween(cjs.Tween.get(this.seven_trefa).wait(76).to({_off:false},0).to({regX:116,scaleX:1.06,x:347.1},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(88));

	// back
	this.instance_5 = new lib.back_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(347.2,155.5,1.376,1.376,0,0,0,116,162.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1).to({regY:162.5,scaleX:1.26,scaleY:1.26,x:347.1,y:155.7,alpha:0.308},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.506},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.635},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.727},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.857},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:347,alpha:0.898},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:347.1,alpha:0.927},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.947},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.962},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:347,alpha:0.973},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:347.1,alpha:0.982},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.994},0).wait(1).to({scaleX:1,scaleY:1,y:155.6,alpha:1},0).wait(45).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(-1)).to({regX:116.5,scaleX:0.05,x:347.3},6,cjs.Ease.get(-1)).to({_off:true},1).wait(101));

	// ace_bubna
	this.ace_bubna = new lib.ace_bubna_1();
	this.ace_bubna.parent = this;
	this.ace_bubna.setTransform(106,155.6,0.054,1.055,0,0,0,116.1,162.5);
	this.ace_bubna._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ace_bubna).wait(73).to({_off:false},0).to({regX:116,scaleX:1.06,x:106.1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(92));

	// back
	this.instance_6 = new lib.back_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(106.1,155.6,1.394,1.394,0,0,0,116,162.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:1.28,scaleY:1.28,x:106.2,alpha:0.292},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:106.1,alpha:0.485},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:106.2,alpha:0.614},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:106.1,alpha:0.706},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.779},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.838},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.881},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.913},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.937},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.954},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:106.2,alpha:0.966},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:106.1,alpha:0.976},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.983},0).wait(1).to({scaleX:1,scaleY:1,x:106.2,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,x:106.1,alpha:1},0).wait(45).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(-1)).to({regX:115.9,scaleX:0.05},6,cjs.Ease.get(-1)).to({_off:true},1).wait(104));

	// card_frames
	this.instance_7 = new lib.card_frames();
	this.instance_7.parent = this;
	this.instance_7.setTransform(589,152.5,1,1,0,0,0,589,152.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},9).wait(169));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-70.9,1233.5,453);


// stage content:



(lib.poker_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main
	this.instance = new lib.main_scene();
	this.instance.parent = this;
	this.instance.setTransform(619,182.5,1,1,0,0,0,589,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(593.4,141.6,1233.5,453);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
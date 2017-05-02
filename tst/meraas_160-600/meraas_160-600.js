(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Agent = function() {
	this.initialize(img.Agent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,32);


(lib.b2ARA_AStunningWaterfront = function() {
	this.initialize(img.b2ARA_AStunningWaterfront);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,86);


(lib.b3ARA_NexttoAin = function() {
	this.initialize(img.b3ARA_NexttoAin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,111);


(lib.b4ARA_Spaciousapt = function() {
	this.initialize(img.b4ARA_Spaciousapt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,85);


(lib.b4bARA_Paymentplan = function() {
	this.initialize(img.b4bARA_Paymentplan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,42);


(lib.b4cARA_Movein = function() {
	this.initialize(img.b4cARA_Movein);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,59);


(lib.b5ARA_SalesSuite = function() {
	this.initialize(img.b5ARA_SalesSuite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,65);


(lib.b5bARA_FindoutMore = function() {
	this.initialize(img.b5bARA_FindoutMore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,15);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,52);


(lib.BWlogo = function() {
	this.initialize(img.BWlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,62);


(lib.core_logo = function() {
	this.initialize(img.core_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,113);


(lib.ExclIslandLiving = function() {
	this.initialize(img.ExclIslandLiving);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,69);


(lib.Image1 = function() {
	this.initialize(img.Image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image2 = function() {
	this.initialize(img.Image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image3 = function() {
	this.initialize(img.Image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image41 = function() {
	this.initialize(img.Image41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image42 = function() {
	this.initialize(img.Image42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Image43 = function() {
	this.initialize(img.Image43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.Meraaslogo = function() {
	this.initialize(img.Meraaslogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,76);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BWlogo();
	this.instance.parent = this;
	this.instance.setTransform(163,23,0.647,0.647);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuWFgQgzAAAAgxIAApcQAAgyAzgBIctAAQAzABAAAyIAAJcQAAAxgzAAg");
	this.shape.setTransform(197.9,35.3,2.041,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0.1,0,395.7,70.5), null);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Agent();
	this.instance.parent = this;
	this.instance.setTransform(29,8,0.984,0.984);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(29,8,130.8,31.5), null);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.core_logo();
	this.instance.parent = this;
	this.instance.setTransform(48,62,0.562,0.562);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(48,62,131.6,63.6), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(60,9,1.192,1.192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(60,9,158.6,62), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b5bARA_FindoutMore();
	this.instance.parent = this;
	this.instance.setTransform(40,55,1.412,1.412);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyqGGQhkAAAAhkIAApDQAAhkBkAAMAlVAAAQBkAAAABkIAAJDQAABkhkAAg");
	this.shape.setTransform(117.2,64.9,0.729,0.729);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(22.8,36.5,188.8,56.9), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image43();
	this.instance.parent = this;
	this.instance.setTransform(-44,-45,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-44,-45,343.9,343.9), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image42();
	this.instance.parent = this;
	this.instance.setTransform(-27,-51,0.689,0.689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-27,-51,344.6,344.6), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image41();
	this.instance.parent = this;
	this.instance.setTransform(-29,-36,0.668,0.668);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-29,-36,333.9,333.9), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image3();
	this.instance.parent = this;
	this.instance.setTransform(-59,-63,1.338,1.338);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(-59,-63,669,669), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image2();
	this.instance.parent = this;
	this.instance.setTransform(-39,1,1.275,1.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(-39,1,637.5,637.5), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image1();
	this.instance.parent = this;
	this.instance.setTransform(-31,-3,1.266,1.266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-31,-3,633.2,633.2), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ExclIslandLiving();
	this.instance.parent = this;
	this.instance.setTransform(37,68,1.93,1.93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(37,68,167.9,133.2), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b5ARA_SalesSuite();
	this.instance.parent = this;
	this.instance.setTransform(47,46,1.653,1.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(47,46,176.9,107.5), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b4cARA_Movein();
	this.instance.parent = this;
	this.instance.setTransform(70,32,1.889,1.889);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(70,32,164.3,111.5), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b4bARA_Paymentplan();
	this.instance.parent = this;
	this.instance.setTransform(74,66,1.681,1.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(74,66,149.7,70.6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b4ARA_Spaciousapt();
	this.instance.parent = this;
	this.instance.setTransform(43,46,1.563,1.563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(43,46,175.1,132.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b3ARA_NexttoAin();
	this.instance.parent = this;
	this.instance.setTransform(117,18,1.58,1.58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(117,18,156.4,175.4), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b2ARA_AStunningWaterfront();
	this.instance.parent = this;
	this.instance.setTransform(39,32,1.763,1.763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(39,32,165.8,151.7), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ExclIslandLiving();
	this.instance.parent = this;
	this.instance.setTransform(66,33,1.718,1.718);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(66,33,149.5,118.6), null);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// Symbol 36
	this.instance = new lib.Symbol36();
	this.instance.parent = this;
	this.instance.setTransform(131.2,119.4,0.673,0.673,0,0,0,149.8,20.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(52));

	// Symbol 35
	this.instance_1 = new lib.Symbol35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.1,59.1,0.673,0.673,0,0,0,129.6,39);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60.2,57.4,127.2,38.3);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 39
	this.instance = new lib.Symbol39();
	this.instance.parent = this;
	this.instance.setTransform(0,149.8,1,1,0,0,0,98.4,20);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({alpha:1},14).wait(55));

	// Symbol 38
	this.instance_1 = new lib.Symbol38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,56.5,1,1,0,0,0,117,56.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,62,131.6,63.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_374 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// Symbol 40
	this.instance = new lib.Symbol40();
	this.instance.parent = this;
	this.instance.setTransform(1.3,-27.3,1,1,0,0,0,126.4,62.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(318).to({_off:false},0).wait(57));

	// Symbol 37
	this.instance_1 = new lib.Symbol37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100.1,-35.8,0.844,0.844,0,0,0,117,84.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(273).to({_off:false},0).wait(40).to({alpha:0},5).to({_off:true},1).wait(56));

	// Symbol 34
	this.instance_2 = new lib.Symbol34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(109.3,0,1.016,1.016,0,0,0,150.9,125.9);
	this.instance_2.alpha = 0.441;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(206).to({_off:false},0).to({x:57.6,alpha:0.711},9,cjs.Ease.get(-1)).to({regX:151,regY:126,x:0.2,y:0.1,alpha:1},10,cjs.Ease.get(1)).to({_off:true},49).wait(101));

	// Symbol 33
	this.instance_3 = new lib.Symbol33();
	this.instance_3.parent = this;
	this.instance_3.setTransform(91.2,0.1,1.016,1.016,0,0,0,151,126);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({_off:false},0).to({regX:150.9,regY:125.9,x:45.7,y:0,alpha:0.5},9,cjs.Ease.get(-1)).to({regX:151,regY:126,x:0.2,y:0.1,alpha:1},10,cjs.Ease.get(1)).to({_off:true},45).wait(150));

	// Symbol 32
	this.instance_4 = new lib.Symbol32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(99.4,0.1,1.016,1.016,0,0,0,151,126);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({_off:false},0).to({regX:150.9,regY:125.9,x:49.7,y:0,alpha:0.5},9,cjs.Ease.get(-1)).to({regX:151,regY:126,x:0.2,y:0.1,alpha:1},10,cjs.Ease.get(1)).to({_off:true},46).wait(195));

	// Symbol 31
	this.instance_5 = new lib.Symbol31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(23.2,-90.5,0.517,0.517,0,0,0,149.9,91);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({regX:149.8,regY:90.9,x:-20.5,alpha:0.461},8,cjs.Ease.get(-1)).to({regX:149.9,regY:91,x:-70.5,alpha:1},10,cjs.Ease.get(1)).to({_off:true},45).wait(240));

	// Symbol 30
	this.instance_6 = new lib.Symbol30();
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.1,-91.2,0.557,0.557,0,0,0,151,125.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({regX:150.8,regY:125.8,x:-28.8,alpha:0.5},9,cjs.Ease.get(-1)).to({regX:151,regY:125.9,x:-76.5,alpha:1},10,cjs.Ease.get(1)).to({_off:true},46).wait(285));

	// Symbol 29
	this.instance_7 = new lib.Symbol29();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-71.5,-93,0.546,0.546,0,0,0,150.8,125.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},45).wait(330));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.7,-205.3,345.7,445.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_374 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(374).call(this.frame_374).wait(1));

	// Symbol 14
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(1179.5,56.4,1,1,0,0,0,123,52.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(320).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(46));

	// Symbol 12
	this.instance_1 = new lib.Symbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1179.4,56.1,1,1,0,0,0,138.8,39);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(275).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(31).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(54));

	// Symbol 11
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1179.5,55.3,1,1,0,0,0,155.5,39);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(227).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(36).to({alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// Symbol 10
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1179.5,69.8,1,1,0,0,0,145.2,20);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({y:56.3,alpha:1},8,cjs.Ease.get(1)).wait(30).to({y:42.9,alpha:0},9,cjs.Ease.get(-1)).to({_off:true},1).wait(147));

	// Symbol 9
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1179.5,54.3,1,1,0,0,0,132.7,58);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(134).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(29).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(194));

	// Symbol 8
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1179.5,54.5,1,1,0,0,0,194.3,58);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(27).to({alpha:0.98},0).to({alpha:0},9).to({_off:true},1).wait(240));

	// Symbol 7
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1179.4,54.3,1,1,0,0,0,122,58);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(28).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(285));

	// Symbol 6
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1179.4,56.3,1,1,0,0,0,139.5,20);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},8,cjs.Ease.get(1)).wait(28).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(330));

	// Layer 2
	this.instance_8 = new lib.Meraaslogo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1084,316,0.629,0.629);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(375));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgccAgcMAAAhA3MA45AAAMAAABA3g");
	this.shape.setTransform(1175.7,188.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(375));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(993.6,-19.1,364.2,415.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(599).call(this.frame_599).wait(1));

	// Layer 1
	this.instance = new lib.Symbol42();
	this.instance.parent = this;
	this.instance.setTransform(91,28.1,1,1,0,0,0,97,35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-7.2,395.7,70.5);


// stage content:
(lib.meraas_160600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(72.7,20.7,0.89,0.89,0,0,0,191.7,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.4,407.1,0.637,0.637,0,0,0,1175.2,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back
	this.instance_2 = new lib.Symbol28();
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.7,212.9,1.046,1.046);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,289.5,368.8,623);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Agent.png?1493737289105", id:"Agent"},
		{src:"images/b2ARA_AStunningWaterfront.png?1493737289105", id:"b2ARA_AStunningWaterfront"},
		{src:"images/b3ARA_NexttoAin.png?1493737289105", id:"b3ARA_NexttoAin"},
		{src:"images/b4ARA_Spaciousapt.png?1493737289105", id:"b4ARA_Spaciousapt"},
		{src:"images/b4bARA_Paymentplan.png?1493737289105", id:"b4bARA_Paymentplan"},
		{src:"images/b4cARA_Movein.png?1493737289105", id:"b4cARA_Movein"},
		{src:"images/b5ARA_SalesSuite.png?1493737289105", id:"b5ARA_SalesSuite"},
		{src:"images/b5bARA_FindoutMore.png?1493737289105", id:"b5bARA_FindoutMore"},
		{src:"images/Bitmap3.png?1493737289105", id:"Bitmap3"},
		{src:"images/BWlogo.png?1493737289105", id:"BWlogo"},
		{src:"images/core_logo.jpg?1493737289105", id:"core_logo"},
		{src:"images/ExclIslandLiving.png?1493737289105", id:"ExclIslandLiving"},
		{src:"images/Image1.jpg?1493737289105", id:"Image1"},
		{src:"images/Image2.jpg?1493737289105", id:"Image2"},
		{src:"images/Image3.jpg?1493737289105", id:"Image3"},
		{src:"images/Image41.jpg?1493737289105", id:"Image41"},
		{src:"images/Image42.jpg?1493737289105", id:"Image42"},
		{src:"images/Image43.jpg?1493737289105", id:"Image43"},
		{src:"images/Meraaslogo.png?1493737289105", id:"Meraaslogo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
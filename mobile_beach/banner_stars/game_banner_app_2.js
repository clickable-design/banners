(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#00CCCC",
	manifest: [
		{src:"images/bg.png?1464180115892", id:"bg"},
		{src:"images/blink.png?1464180115892", id:"blink"},
		{src:"images/btn.png?1464180115892", id:"btn"},
		{src:"images/car.png?1464180115892", id:"car"},
		{src:"images/circle.png?1464180115892", id:"circle"},
		{src:"images/cloud.png?1464180115892", id:"cloud"},
		{src:"images/flag.png?1464180115892", id:"flag"},
		{src:"images/light.png?1464180115892", id:"light"},
		{src:"images/net.png?1464180115892", id:"net"},
		{src:"images/score.png?1464180115892", id:"score"},
		{src:"images/title.png?1464180115892", id:"title"},
		{src:"images/win_star.png?1464180115892", id:"win_star"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1700,645);


(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,287);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,362,113);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,94);


(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,550);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,119);


(lib.flag = function() {
	this.initialize(img.flag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,557,175);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,123);


(lib.net = function() {
	this.initialize(img.net);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,181);


(lib.score = function() {
	this.initialize(img.score);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,223);


(lib.title = function() {
	this.initialize(img.title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,160);


(lib.win_star = function() {
	this.initialize(img.win_star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,411,390);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.setTransform(-181,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-58,362,113);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flag();
	this.instance.setTransform(-278.2,-87.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.2,-87.6,557,175);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.win_star();
	this.instance.setTransform(-205.7,-193.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAHgPIAIAPg");
	this.shape.setTransform(0,-194.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.7,-195.6,411,391.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circle();
	this.instance.setTransform(-275,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-274.9,550,550);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud();
	this.instance.setTransform(-139,-32,0.597,0.597);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-32,195.1,71);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.light();
	this.instance.setTransform(-62,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.light();
	this.instance_1.setTransform(-62,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-61.5,124,123);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.569)").s().p("EiRHBnxMAAAjPhMEiOAAAMAAADPhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-928.8,-664.1,1857.6,1328.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("AkDPMQmThrjRlqQjQlpBrmRQBsmTFpjRQFqjQGRBsQGTBrDRFpQDRFrhtGRQhsGSlpDRQjuCJkAAAQiDAAiJglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-100.9,202,201.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink();
	this.instance.setTransform(-240.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.5,-143.5,481,287);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.net();
	this.instance.setTransform(-101,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-90.5,202,181);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#427881").s().p("EhH3AJ0IjjgEIBEsGIGBAMIAAEvIXkh8IBml7IM7grIgMHtIfohHIORqfIXDAOIAULYMAkngA9IAAJEg");
	this.shape.setTransform(30.3,128.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AC7CD").s().p("Egg4AUoIAAnPIAWABIAAu8IEAAAIAAWKgAQElxICdAJIAAu/IFtAAIAAOhIH0gdIA3HLIAAACIw1Bmg");
	this.shape_1.setTransform(-235.2,-25.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F8D97").s().p("EhQJgdlIKigXMAAAAnVIAAHPIEWAAIAA2KIAAxCILuAAMAAAAkEIPug8MgBEgpDIiBAAIgzhdIWVAAIgWAwIg8AtIAASuIAAIDIQ1hmIAAgCIABulIhnAAIDNjZIL2hCICTDCIiTAAIBmbVITkgEIgksDIL1AQIBvMbIXeBbMAAqgnhIMQgbMAAAAy1MgknAA9IgVraI3CgOIuSKhI/oBHIAMnuIs7AqIhmF9I3jB9IAAkxImBgMIhFMHIDjAEItAADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513,-191.8,1026,383.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAGgImaDYIBPnJIlNlDIHMhCIDMmhIDNGhIHMBCIlNFDIBPHJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-63.3,133.1,126.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF4E4E","#CB3737"],[0,1],0,0,0,0,0,101.6).s().p("AkDPMQmThrjRlqQjQlpBrmRQBsmTFpjRQFqjQGRBsQGTBrDRFpQDRFrhtGRQhsGSlpDRQjuCJkAAAQiDAAiJglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-100.9,202,201.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.car();
	this.instance.setTransform(-93.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-47,187,94);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,-274.9,550,550);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(0,0,2.627,2.627);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:337},11,cjs.Ease.get(-1)).to({x:735.2},13,cjs.Ease.get(1)).to({_off:true},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.8,-161.5,325.7,323.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
		this.parent.win.addEventListener("click", ClickToGoToWebPage);
		function ClickToGoToWebPage() {
			window.open("http://clickable.design", "_blank");
			document.location.reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(1));

	// Слой 6
	this.instance = new lib.Символ26();
	this.instance.setTransform(6.1,320.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({y:200.7,alpha:1},20).to({y:240.7},7,cjs.Ease.get(1)).wait(1));

	// Режим изоляции
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(0.5,116.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,x:0.7,y:84.6,alpha:0.198},0).wait(1).to({y:59,alpha:0.358},0).wait(1).to({y:39.5,alpha:0.48},0).wait(1).to({y:24.8,alpha:0.571},0).wait(1).to({y:13.4,alpha:0.643},0).wait(1).to({y:3.8,alpha:0.703},0).wait(1).to({y:-4.6,alpha:0.756},0).wait(1).to({y:-12.1,alpha:0.803},0).wait(1).to({y:-18.5,alpha:0.843},0).wait(1).to({y:-23.8,alpha:0.876},0).wait(1).to({y:-28,alpha:0.902},0).wait(1).to({y:-31.3,alpha:0.922},0).wait(1).to({y:-34,alpha:0.939},0).wait(1).to({y:-36.2,alpha:0.953},0).wait(1).to({y:-38,alpha:0.965},0).wait(1).to({y:-39.7,alpha:0.975},0).wait(1).to({y:-41.1,alpha:0.984},0).wait(1).to({y:-42.5,alpha:0.992},0).wait(1).to({regX:0,regY:0,x:0.5,y:-43.5,alpha:1},0).to({y:-3.5},8,cjs.Ease.get(1)).wait(3));

	// Режим изоляции
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(0,-80,0.089,0.089,-105);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,scaleX:0.31,scaleY:0.31,rotation:-81.6,x:0.1,y:-79.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-62.9,y:-79.8},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-48.9,x:0},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-38.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-30.4,y:-79.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-23.6,x:-0.1,y:-79.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-17.5,y:-79.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-12.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-7.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-4.4,x:-0.2,y:-79.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-1.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:0.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:2.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:3.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:4.9,y:-79.7},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:6},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:7,x:-0.3,y:-79.8},0).wait(1).to({regX:0,regY:0,scaleX:1.16,scaleY:1.16,rotation:8,x:0,y:-80},0).to({scaleX:1,scaleY:1,rotation:0},10,cjs.Ease.get(1)).wait(4));

	// Режим изоляции
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(0.3,-79.7,0.171,0.171);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({scaleX:0.29,scaleY:0.29},0).wait(1).to({scaleX:0.39,scaleY:0.39},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.61,scaleY:0.61},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(1).to({scaleX:0.87,scaleY:0.87},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ17();
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({alpha:0.166},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.42},0).wait(1).to({alpha:0.51},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.736},0).wait(1).to({alpha:0.777},0).wait(1).to({alpha:0.814},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:0.942},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.963},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.994},0).wait(1).to({alpha:1},0).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AD1LnQgGgGgCgIQgCgIABgRIABgXQACgSAEgMQAGggAlgEQAEgSAKgfIAehUQAPgpATgrQATgtARgdQAGgLALgIQAKgIAUACQAUABAMACQAOACALADIAVAFIAUAGQAOAEADAIQAEAJgBAMIgTD5IAAAAQApAAgGAhQgCARgEANIgJAfQgGARgFAIQgFAHgOAIQgRAIgRAAQgRAAgEgEQgDgDgDgIIAEgXIAGgZQgTgBg2ACQg2ACghADIgDAOIgEAQQgFANgIAFQgHAFgVAFQgJADgIAAQgIAAgHgDgAGpHkQgVAxgVBLIBLgFIAAgmIADhRIAHhiQgSAigZBAgAKlKyIgLgDQgGgBgGgEIgXgMIgWgQIgJgJIgGgIIgDgJIAAgNQABgWAEgjIAWihQAFgnAIgsQACgOAHgDQAHgCAOADQAOADAMAEQAOAFANAHQAMAIADAFQADAFgCANQgIAegJAsIgMA3QBLgKArAbQARAJALAQQALAPADARQACAYgJAUQgJAUgQANQgNALgOAIQgRAKgPAGQgUAJgPAFIghAJIgOADIgIABIgDAAgALNIhQgQADgQAFIgNBFQAXgGASgIQARgHAOgKQAOgJAFgIQAHgJgCgIQgDgEgGgDQgGgEgLgBIgLgBIgOABgAnKKyIgLgDQgHgCgFgDQgOgGgJgGIgWgQIgJgJIgGgIQgCgEgBgFQgBgFABgIIAFg9IAPiQQADgfABgoQARgJAVgIQAYgIAWgFQAXgFAYgDQAcgDASACQAWABASAGQATAFALAMQAPAPAKARQALARAEAXQADAOgDALQgCALgGALQgFALgJAJQgLANgHAFIgVAQQgKAHgPAIQARAJAKAPQALAPADARQADATgIAOQgHAOgRANQgLAKgPAJIggAQQgUAJgPAFIghAJIgOADIgJABIgCAAgAmiIhQgRADgPAFIgHAjIgHAiQAZgHAQgHQARgHAPgKQAOgJAFgIQAHgJgCgIQgCgEgHgDQgGgEgLgBIgLgBIgOABgAleF9QgKABgSAEQgRAFgSAIIgKAnQgEAUgGAXQAagJAXgMQAWgNAPgNQAOgLAIgNQAHgLgCgHQgCgGgHgDQgHgCgKAAIgEAAgABaKvQgOgBgKgFIgVgLIgYgQIgKgJIgGgIIgFgJQgEgGABgHQATgZAbAMQAbALAOACQAOABARgGQARgFAKgJQAJgIAHgKQAFgJgFgMQgCgEgHgDQgHgEgTABQgSAAgTgEQgTgEgSgbQgTgbAsgEQAlgKAVgMQAXgNAMgMQAOgMAGgMQAGgMgDgGQgCgGgIgDQgIgCgMAAQgMABgKAEQgKAFgSAMQgTAOgigSQgigRAFgNQAFgMAQgPQARgPAOgHQAOgIAWgHQAWgHAVACQAWABATAGQATAFAMAMQASAQAKAQQAMARAHAXQADANgBAMQgBAKgFAMQgEAKgIAKQgJALgHAHIgUAQIgYAPQASAJAOAPQAOAQADAQQACATgGAOQgGAOgLALQgLAMgPAKQgPALgUAKQgVAJgVAGQgSAEgMAAIgHgBgAriKvQgOgBgLgFIgUgLIgZgQIgJgJQgEgEgCgEIgHgJQgEgGABgHQAVgZAbAMQAaALAPACQAOABARgGQAQgFALgJQAKgJAFgJQAGgJgFgMQgDgEgHgDQgGgEgTABQgTAAgSgEQgTgEgTgbQgSgbArgEQAlgKAWgMQAVgMAOgNQAMgLAIgNQAFgMgCgGQgDgGgHgDQgIgCgNAAQgLABgKAEQgKAFgTAMQgTAOgigSQgigRAGgNQAFgNAQgOQAPgOAPgIQAPgIAVgHQAWgHAWACQAWABASAGQATAFANAMQAQAPAMARQAMARAHAXQADAOgCALQgBAMgEAKQgGAMgHAIQgIALgIAHIgTAQQgJAHgPAIQARAIAOAQQAOAPADARQADATgHAOQgHAPgKAKQgKAMgPAKQgPALgVAKQgUAKgWAFQgSAEgMAAIgGgBgAOVKsIgWgGQgNgEgGgEQgKgEgDgHQgDgGABgLIALhcIApjiQAEgNAGgDQAHgDANAEQAMADASAIQARAHAKAHQALAIADAGQADAHgDALIgNAtIg2DcIgJAsQgDAIgDACIgFABIgKgCgAi+KsQgJgDgGgEIgegXQgHgFgFgJQgEgJABgLIApkgIAqgKIAvgJIAzgIQAWgCAegCQAWAAAIATQAGAMACAHIAEATQACALgEAEQgDAEgNABIg0AHIg6AHIgMAoIgMAsIAZgCIAcgCQAOAAAFACQAHADAFAJQAEAHAEAKIAFARQADAKgDADQgCADgNADIg1AJQgaAEgaAGIgMAyIAmgFIAogDQALgCAIADQAHADAEAHQAGAJACAIIAHAPQACAJgCADQgCAEgMABIhvAWQgMADgIAAIgGgBgAc3EyQgqgLgtgSQgngTBMkVIAMgpIgQAWQglAwgeAuQgfAvgxA6QgwA9gcAdQgcAggUAIIgDACQgJAEgYgIIgtgOQgWgIgVgOIgCgBIAAAIQgBASgIAGQgGAHgZgCIgsgEQgVgDgVgIQgWgIgIgLQgIgKgDgcQgDgbgBgiIgBhJIiNANQhDAFg5ANIgkBEIgeA9QgJAQgKACQgKADgXgJIgZgMQgSgJgLgHIgTgOQgIgGgEgHQgEgJAAgMQAAgLAHgUQAbhGAnhRQAohYAvhdQArhYAzhgQAvhZAshIQAQgZAXgPQAXgQArAHQAiADAiAHQAeAGAZAGIAsAPIAqAPQAcAMAHASQAIARgFAdQgIA+gJBeQgIBSgGBZQAOhMANg+QALg+AQhHQAOg/ANgyQAHgdASgGQARgHAcAKIBDAZQAfALAkAUQAcAOgZBDIhREJIgqCaQBBhgAjg4QAkg6Agg4IA8hjQAagpAVgfQAWgkAjgpQALgLAMgHIAJgGQARgGAcAKIAZAIQAJACANAGIAVANQANAIAPALQAaATACARQACASgIAZQgYBEgdBcIg4C1Ig1CyIgsCbQgGAagbAAQgLAAgNgEgAR9jnQguBQgyBcQApgFArgCQAwgDAmgBIAFidQAFheAEg+Qg0BYgkBAgAsQEgQgNgBgLgEQgMgFgOgHQgcgNgWgOIgxgkIgTgUQgIgJgEgIQgFgIgCgNQgCgLACgTQACg0AIhRIACgNQgWBFgiBCQgmBIg4AyQgmAegqAKQgqAKg1gGQgmgEgkgIQglgHgggRQgbgPgXgUQgZgVgOgbQgXgsgLg4QgLg3ABg9QABg5AKg3IgGgCQgdgFgXgKQgWgLgOgOQgOgNgIgTQgJgSgEgYQgCgTAAgTQAAghgDgXQgEgZgTgHQgTgGgZAbQgaAdgaAsQgcAvgWA0QgXA2gNAuQgMAwgHAwQgGAuACAnQACAnAKAbQAKAbAUAGQAmAMBOhRQA4g6BZAbQAkAJACAUQABAVgQAeQgRAhgaAeQgZAcgcAUQgNAIgTAJQgUAIgTAEQgRAEgaADQgVACgWgCQgtgDgjgLQgkgLgcgKQgZgKgagVQgagUgOgbQgZgqgJg3QgLg4ADg/QADhBAQhDQAPhBAchEQAchBAlg4QAng6AxgrQAogjApgKQAngLAlADQAdADAaAHQAXAGAgALQAbALAXAMQAXALAUANQASAPALAPQANAQAGAPQAHAOADASQADATABARIAAAJQAQgcASgbQAlg3AxgqQAhgaAugOQAugNAqAGQA3AJAvASQAyATAfAZQAjAeASAiQAQAgAIAsIADAYQAHhSAChKQACgbAPgGQAQgHAygJQA0gKA3gHQAvgGBDgGQA/gFA0gBIAYABQAKACAIAEQAHADAJAJQAHAIAIAOQAaAsAEApQAEAZgHAIQgHAIgcAEQgpAGhMAJQhFAHg8AJQgNAmgUBgIgOA4QChgVBdA5QAmAVAYAjQARAZAIAaIAKhgQAKhOAKg+IAViGQAKg6ALg4QAHgdARgHQARgIAdAIIBEAVQAfAKAmASQAdANgVBEIhEENIgiCdQA8hlAgg5IBAh2IA1hmQAWgnAWgjQAVglAhgqQALgMALgIQAEgEAFgCQAQgHAeAIIAZAHQAKACAMAFIAYAMQAMAHAQAKQAbASAEARQACAKgCANQAdgQAogTQAsgVAugRQAxgRAsgLQAxgLApgBQArgBAmALQAlALAcAcQAjAnAYAnQAbApAPA+QAHAegDAZQgEAagLAYQgLAYgQAUQgOATgWAXQghAhgtAeQgqAeg3AcQg2Abg5ATQg4AWg7AQIgVBqQgJApgJA7QgFAPgIAFQgJAFgZgFIgvgNQgYgGgSgKQgRgKgJgQQgJgPAFgZQAJgXAHg3QAHg2AGhFIAXkcIACgZIgNAwIgvC4IgsC1IglCdQgFAkgzgLQgrgJgsgQQgqgRA+kYIAJgqIgOAXQghAzgdAuQgdAxgtA8QgqA6gfAkQgbAigTAIIgEACQgJAFgYgHIgugLQgYgHgVgNQgVgLgHgOQgHgNACgaIAJhVQgQAfgkAcQgYAWgiAUQghAUgmARQgpASgiALQgnAOghAIQgUAFgLACIgPABIgJAAgAy1mBQgXAWgaAqQgYAogWAyQgWA0gMAsQgNAsgGAyQgGAxACAoQACApALAeQAMAeAVAHQAUAHAWgQQAWgPAVggQAVgfAVgwQAUguANg1QANgwAHg0QAHg0AAgyQAAgvgIgjQgJgigTgGIgJgCQgRAAgTATgAq5ggQghAFgkAMIgQBMIgOBMQAzgNAngSQAogRAdgUQAbgTAPgVQAOgUgEgOQgFgKgOgHQgOgIgYgDIgVgBQgQAAgSACgAKMl+QgcABghAIQghAIgjAPQgRA8gMAwIgcB0QBCgUA0ggQAxgfAhghQAfghAOgfQANgggHgVQgDgLgRgGQgQgGgWAAIgHAAgAc1oiQgjgCgcgKQgbgKgNgKQgMgKgMgLQgJgKgNgWQgNgXAGggQAGghAVgHQAUgIAgASQAcAQARAIQAQAHAPABQAOACAPgGQAOgFAQgOQAPgOANgIQALgHANgFQAMgFANABQAVABASAOQAVATgBAUQgDAWgTAZQgRAXgnAcQg9AwgwAAIgHgBg");
	mask.setTransform(-0.2,0.6);

	// Слой 5
	this.instance = new lib.Символ19();
	this.instance.setTransform(-358,6.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.title();
	this.instance_1.setTransform(-220,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220,-80,440,160);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Символ 4
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5).to({_off:false,scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(0,0,0.053,0.053);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-100.9,202,201.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513,-191.8,1026,383.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-63.3,133.1,126.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ3();
	this.instance.setTransform(-1512.4,114.1,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({x:34},69).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1536.3},69).to({_off:true},1).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-47,187,94);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.parent.title.gotoAndPlay(1);
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
		this.parent.win.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(15).call(this.frame_20).wait(20).call(this.frame_40).wait(20).call(this.frame_60).wait(1));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABREqQg4gLg8gcQg+gbg4gnQhHg4gegiQgXgZgQgbQgRgagKgaQgPgoAFgiQAFgjATgpIAdg0QARgbAWgWQAQgOAXgOQAXgOAZgEQAogEAuAIQAuAHAtASQAvARAuAbQAuAbAnAkQAoAkAfArQAfAsARAxQAMAigEAnQgEAngQAeQgWAogbAhQgaAhgcARQgiAVgeADIgZACQgSAAgUgDgAipiZQgZABgLAPQgLAOAGAWQAEAVASAZQATAaAdAbQAeAaAnAYIBFAqQAjATAlAPQAmAPAcADQAcAEAKgOQAKgOgJgaQgKgagVgfQgXgegggdQgggfgigZQgggXgkgRQgkgSgfgIQgbgIgXAAIgHABg");
	this.shape.setTransform(-2.3,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACwDTIibhtIlKjRQgLgJgCgIQgBgHAMgSIAVggQALgPAPgPQANgLANgBQANgBATAJICnBUIDLB4IAWgTIAQgKQAHgCAIAEIAQAMIAqAvIAkAxIAJASIADAOIgDAQIgLARIggAmIgoAhQgVAQgMABIgCABQgMAAgOgNg");
	this.shape_1.setTransform(-2.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABrFGQgbgEgWgNQgXgNgUgUIgmguQgWgdgWgmIgrhRIgmhXIgdhYIghB5QgFARgKAJQgKAKgRAEIgfAIIgdACQgPACgDgHQgDgGAEgSIAiiIIAfieIAIgRIAJgKIAvgeIA4gYIAQgBIANAGQAGAFAEALQAOAyAYA5IAyBxIA1BpIA0BXQAaAkATATQATASAKgHQAKgHABgQQABgPgEgVIgkhhQgGgRABgSQACgTAFgSIAPgkIAVggIAOgNQAHgFAKACQAJABALAIIAbAYQAuA5AXBBQAVBDgLBBQgGAngTAfQgRAegXAVQgYAXgaANQgbAOgWAGQgTADgQAAQgMAAgLgCg");
	this.shape_2.setTransform(-3.9,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB3FDQgjgBgbgNQgcgMgTgVQgRgVgJgXQgLgdgGgiQgGgkgBgqIgbAgQgNAOgSAKQgiAUgeAEQgeAFgagHQgagHgVgSQgWgSgOgZQgQgcgIgcQgJgdABgaQABg3AWg+QARgvAiguQAigtA+glIAfgRQAMgEAHABQAHACAEAFIAEANQAGAcgNAcQgMAcgTASQgbAbgQAXQgPAYgHAVQgGAWACAUQACAUAKAVQAKATANAKQAMAMANAGQAMAGANgBQAMAAAIgFQARgKAIgPQAHgPAHgdQAHglAegaQAcgbAsgLQATgFAKAHQAJAFABARQgEBSAGA5QAGA6ALAnQAKAlAOAPQAOARAOgFQALgDAFgNIADgVIgBgZIgIg3QgGgTAEgVQADgWAKgSQAKgTAOgRQAPgRAPgJQARgKAMADQANADAJANIAWArIARAyIAKA6QACAegEAcIgKAtQgGAZgOAWQgPAYgZAUQgZAVgoAPQgmANggAAIgHAAg");
	this.shape_3.setTransform(-3.1,-4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},20).to({state:[{t:this.shape_3}]},20).wait(16));

	// Символ 4
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5).to({_off:false,scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.63,scaleY:0.63},0).wait(1).to({scaleX:0.71,scaleY:0.71},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(0,0,0.053,0.053);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({scaleX:0.05,scaleY:0.05},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

	// Слой 4 - копия
	this.instance_2 = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61));

	// Слой 1
	this.instance_3 = new lib.score();
	this.instance_3.setTransform(-111.7,-111.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.7,-111.7,223,223);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(443.1,-133.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-1154.1,-608.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(-302.9,-271.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1154.1,-608.5,1700,645);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB2B2","#F54A4A","#FD4D4D"],[0,0.835,1],0,0,0,0,0,42.1).s().p("AAAEOIkJCMIAzkpIjYjRIEqgrICEkOICFEOIEqArIjYDRIAzEpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF8282","#CE3B3B","#FF4E4E"],[0,0.424,1],0,0,0,0,0,86.4).s().p("AAAIqIoiEfIBpphIm6mtIJjhZIEQoqIERIqIJjBZIm6GtIBoJhg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D2A2A").s().p("AAAIqIoiEfIBpphIm6mtIJjhZIEQoqIERIqIJjBZIm6GtIBoJhg");
	this.shape_2.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-84.1,176.9,171.3);


(lib.net_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(0,12.5,0.445,0.313);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:6.1,y:57.3},6).to({alpha:0},7).wait(1));

	// net.png
	this.instance_1 = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.08,y:7.2},5,cjs.Ease.get(1)).to({scaleY:0.89,y:-10},5,cjs.Ease.get(-1)).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 13 - копия: 2 - копия
	this.star_4 = new lib.star();
	this.star_4.setTransform(29.9,31.1,0.622,0.622,-15,0,0,-0.1,1.6);

	this.timeline.addTween(cjs.Tween.get(this.star_4).to({regX:0,x:25.3,y:42.8},5,cjs.Ease.get(1)).to({regX:-0.1,x:23.4,y:-4.9},5,cjs.Ease.get(-1)).to({x:29.9,y:31.1},4,cjs.Ease.get(1)).wait(1));

	// Слой 13 - копия: 2
	this.star_3 = new lib.star();
	this.star_3.setTransform(-19.8,34.1,0.622,0.622,15,0,0,-0.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.star_3).to({regX:0,x:-24.4,y:45.8},5,cjs.Ease.get(1)).to({x:-26.3,y:-1.9},5,cjs.Ease.get(-1)).to({regX:-0.1,x:-19.8,y:34.1},4,cjs.Ease.get(1)).wait(1));

	// Слой 13 - копия
	this.star_2 = new lib.star();
	this.star_2.setTransform(36.6,-24.2,0.622,0.622,15,0,0,-0.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.star_2).to({regX:0,regY:1.5,x:32,y:-12.5},5,cjs.Ease.get(1)).to({regX:-0.1,regY:1.4,x:30,y:-60.2},5,cjs.Ease.get(-1)).to({x:36.6,y:-24.2},4,cjs.Ease.get(1)).wait(1));

	// Слой 13
	this.star_1 = new lib.star();
	this.star_1.setTransform(-38,-19.6,0.622,0.622,0,0,0,0,1.6);

	this.timeline.addTween(cjs.Tween.get(this.star_1).to({x:-42.6,y:-7.9},5,cjs.Ease.get(1)).to({x:-44.5,y:-55.6},5,cjs.Ease.get(-1)).to({x:-38,y:-19.6},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-90.5,204.6,190.3);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1490.4},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189,-32,195.1,71);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:7},7,cjs.Ease.get(-1)).to({y:15},8,cjs.Ease.get(1)).to({y:7.5},7,cjs.Ease.get(-1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520.9,-155.1,740.9,323.1);


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:7.5,scaleX:0.93,scaleY:0.93,y:23.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:35.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:43.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:49.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,y:54.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:57.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:60.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:62},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:63.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:64.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:64.9},0).wait(1).to({regY:0,scaleX:0.75,scaleY:0.75,y:60},0).wait(1).to({regY:7.5,scaleX:0.75,scaleY:0.75,y:61.9,alpha:0.991},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:55,alpha:0.974},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:43.8,alpha:0.947},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:27.2,alpha:0.907},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:4.4,alpha:0.851},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:-24.8,alpha:0.781},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:-58.1,alpha:0.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-92,alpha:0.618},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:-128.1,alpha:0.531},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:-173.8,alpha:0.42},0).wait(1).to({scaleX:0.69,scaleY:0.69,y:-240.8,alpha:0.257},0).wait(1).to({regY:0,scaleX:0.67,scaleY:0.67,y:-352.1,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520.9,-155.1,740.9,323.1);


(lib.star_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.star.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_1.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.star.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:120,y:1508.9},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-85.6,176.9,171.3);


(lib.star_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.star.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_2.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.star.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:120,y:1660.9},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-85.6,176.9,171.3);


(lib.star_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.star.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_4.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.star.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:120,y:1495.5},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-85.6,176.9,171.3);


(lib.star_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.star.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_3.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.stop();
		this.star.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:120,y:1554.2},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-85.6,176.9,171.3);


// stage content:



(lib.game_banner_app_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
			
			_this.bg.x = windowSize.width/2;
			_this.bg.y = windowSize.height;
			
			_this.win.x = windowSize.width/2;
			_this.win.y = windowSize.height/2;
			
			_this.title.x = windowSize.width/2;
			_this.title.y = 0 + (windowSize.height/7);
			
			_this.cloud.x = windowSize.width/2;
			_this.cloud.y = windowSize.height/4;
			
			_this.net.x = windowSize.width;
			_this.net.y = windowSize.height;
			
			_this.score.x = 0;
			_this.score.y = windowSize.height;
			
			_this.star_1.x = windowSize.width/4;
			_this.star_1.y = 0;
			
			_this.star_2.x = windowSize.width/4;
			_this.star_2.y = 0;
			
			_this.star_3.x = (windowSize.width/2)+(windowSize.width/4);
			_this.star_3.y = 0;
			
			_this.star_4.x = (windowSize.width/2)+(windowSize.width/4);
			_this.star_4.y = 0;
			
			//Scale
		
			_this.star_1.scaleX = 0.8;
			_this.star_1.scaleY = 0.8;
			
			_this.star_2.scaleX = 0.8;
			_this.star_2.scaleY = 0.8;
			
			_this.star_3.scaleX = 0.8;
			_this.star_3.scaleY = 0.8;
			
			_this.star_4.scaleX = 0.8;
			_this.star_4.scaleY = 0.8;
			
			_this.net.scaleX = 0.8;
			_this.net.scaleY = 0.8;
			
			_this.score.scaleX = 0.8;
			_this.score.scaleY = 0.8;
			
			if(windowSize.width < 767) {
				
			_this.win.scaleX = 0.6;
			_this.win.scaleY = 0.6;
				
			_this.net.scaleX = 0.5;
			_this.net.scaleY = 0.5;
				
			_this.cloud.scaleX = 0.5;
			_this.cloud.scaleY = 0.5;
				
			_this.star_1.scaleX = 0.5;
			_this.star_1.scaleY = 0.5;
			
			_this.star_2.scaleX = 0.5;
			_this.star_2.scaleY = 0.5;
			
			_this.star_3.scaleX = 0.5;
			_this.star_3.scaleY = 0.5;
			
			_this.star_4.scaleX = 0.5;
			_this.star_4.scaleY = 0.5;
			
			_this.score.scaleX = 0.4;
			_this.score.scaleY = 0.4;
			
			}
			
			if(windowSize.width < 767 && windowSize.width > windowSize.height) {
			
			_this.bg.scaleX = 0.7;
			_this.bg.scaleY = 0.7;
				
			_this.title.scaleX = 0.5;
			_this.title.scaleY = 0.5;
				
			_this.bg.x = windowSize.width/2;
			_this.bg.y = windowSize.height * 1.4;
				
			_this.win.scaleX = 0.5;
			_this.win.scaleY = 0.5;
				
			}
			
			if(windowSize.width < 767 && windowSize.width < windowSize.height) {
				
			_this.bg.scaleX = 0.6;
			_this.bg.scaleY = 0.6;
				
			_this.title.scaleX = 0.6;
			_this.title.scaleY = 0.6;
				
			_this.win.scaleX = 0.6;
			_this.win.scaleY = 0.6;
				
			}
		}
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		
		//Actions
		
		_this.net.star_1.visible = false;
		_this.net.star_2.visible = false;
		_this.net.star_3.visible = false;
		_this.net.star_4.visible = false;
		
		
		
		_this.star_1.addEventListener("click", Star_1); 
		function Star_1() {
			console.log('star_1');
			_this.star_1.star.visible = false;
			_this.star_1.star.gotoAndPlay(1);
			_this.net.play();
			_this.score.play();
			_this.net.star_1.visible = true;
			event.preventDefault();
		}
		
		_this.star_2.addEventListener("click", Star_2); 
		function Star_2() {
			console.log('star_2');
			_this.star_2.star.visible = false;
			_this.star_2.star.gotoAndPlay(1);
			_this.net.play();
			_this.score.play();
			_this.net.star_2.visible = true;
			event.preventDefault();
		}
		
		_this.star_3.addEventListener("click", Star_3); 
		function Star_3() {
			console.log('star_3');
			_this.star_3.star.visible = false;
			_this.star_3.star.gotoAndPlay(1);
			_this.net.play();
			_this.score.play();
			_this.net.star_3.visible = true;
			event.preventDefault();
		}
		
		_this.star_4.addEventListener("click", Star_4); 
		function Star_4() {
			console.log('star_1');
			_this.star_4.star.visible = false;
			_this.star_4.star.gotoAndPlay(1);
			_this.net.play();
			_this.score.play();
			_this.net.star_4.visible = true;
			event.preventDefault();
		}
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 11
	this.win = new lib.Символ16();
	this.win.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.win).wait(1));

	// Слой 6
	this.title = new lib.title_1();
	this.title.setTransform(513.1,107.1);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Режим изоляции
	this.star_4 = new lib.star_4();
	this.star_4.setTransform(655.6,-1,1,1,0,0,0,-2,148);

	this.star_3 = new lib.star_3();
	this.star_3.setTransform(889.2,-0.9,1,1,-0.3,0,0,1.3,147.7);

	this.star_2 = new lib.star_2();
	this.star_2.setTransform(141.3,-0.9,1,1,0.1,0,0,2.2,146.5);

	this.star_1 = new lib.star_1();
	this.star_1.setTransform(361.8,-1,1,1,0,0,0,0,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star_1},{t:this.star_2},{t:this.star_3},{t:this.star_4}]}).wait(1));

	// Слой 2
	this.net = new lib.net_1();
	this.net.setTransform(1020.3,767,1,1,0,-30,150,-29.3,96.9);

	this.timeline.addTween(cjs.Tween.get(this.net).wait(1));

	// Слой 1
	this.score = new lib.Символ2();
	this.score.setTransform(0,767.1,1,1,-110,0,0,-46,-90.9);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Слой 5
	this.bg = new lib.Символ1();
	this.bg.setTransform(523.9,765,1,1,0,0,0,-292.2,33.4);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// Слой 10
	this.cloud = new lib.cloud_1();
	this.cloud.setTransform(512.1,224.2,1,1,0,0,0,749.1,6);

	this.timeline.addTween(cjs.Tween.get(this.cloud).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.9,149.4,1788.1,1070.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
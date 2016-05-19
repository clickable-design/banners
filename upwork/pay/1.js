(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 200,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.png?1463664606527", id:"bg"},
		{src:"images/bitcoin.png?1463664606527", id:"bitcoin"},
		{src:"images/cash.png?1463664606527", id:"cash"},
		{src:"images/danske.jpg?1463664606527", id:"danske"},
		{src:"images/ideal.png?1463664606527", id:"ideal"},
		{src:"images/maybank.png?1463664606527", id:"maybank"},
		{src:"images/mc.jpg?1463664606527", id:"mc"},
		{src:"images/multy.png?1463664606527", id:"multy"},
		{src:"images/op.png?1463664606527", id:"op"},
		{src:"images/paysafe.png?1463664606527", id:"paysafe"},
		{src:"images/prze.png?1463664606527", id:"prze"},
		{src:"images/qiwi.png?1463664606527", id:"qiwi"},
		{src:"images/rujyo.png?1463664606527", id:"rujyo"},
		{src:"images/sof.png?1463664606527", id:"sof"},
		{src:"images/tp.png?1463664606527", id:"tp"},
		{src:"images/trus.png?1463664606527", id:"trus"},
		{src:"images/vzriv.png?1463664606527", id:"vzriv"},
		{src:"images/wm.png?1463664606527", id:"wm"},
		{src:"images/wu.png?1463664606527", id:"wu"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.bitcoin = function() {
	this.initialize(img.bitcoin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,23);


(lib.cash = function() {
	this.initialize(img.cash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,86);


(lib.danske = function() {
	this.initialize(img.danske);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,87);


(lib.ideal = function() {
	this.initialize(img.ideal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,100);


(lib.maybank = function() {
	this.initialize(img.maybank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,440);


(lib.mc = function() {
	this.initialize(img.mc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,126);


(lib.multy = function() {
	this.initialize(img.multy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,114);


(lib.op = function() {
	this.initialize(img.op);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,32);


(lib.paysafe = function() {
	this.initialize(img.paysafe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,182);


(lib.prze = function() {
	this.initialize(img.prze);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,22);


(lib.qiwi = function() {
	this.initialize(img.qiwi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,160);


(lib.rujyo = function() {
	this.initialize(img.rujyo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,83);


(lib.sof = function() {
	this.initialize(img.sof);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1743,536);


(lib.tp = function() {
	this.initialize(img.tp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,100);


(lib.trus = function() {
	this.initialize(img.trus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,69);


(lib.vzriv = function() {
	this.initialize(img.vzriv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,65);


(lib.wm = function() {
	this.initialize(img.wm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,100);


(lib.wu = function() {
	this.initialize(img.wu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vzriv();
	this.instance.setTransform(-12.7,-3.1,0.111,0.367,-51.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-8.6,23.1,20.3);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vzriv();
	this.instance.setTransform(-8.4,-8.7,0.269,0.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-8.7,17,17.5);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ideal();
	this.instance.setTransform(-22.5,-18.8,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-18.8,45.1,37.6);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.paysafe();
	this.instance.setTransform(-51,-8.5,0.101,0.101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-8.5,103.6,18.4);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sof();
	this.instance.setTransform(-26,-7.7,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-7.7,51.1,15.7);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bitcoin();
	this.instance.setTransform(-56,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-11.5,112,23);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mc();
	this.instance.setTransform(-23.6,-14.8,0.232,0.232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-14.8,46.3,29.2);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.op();
	this.instance.setTransform(-55.5,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-16,111,32);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.danske();
	this.instance.setTransform(-46.8,-6.5,0.154,0.154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-6.5,89.4,13.4);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.maybank();
	this.instance.setTransform(-20.6,-19,0.086,0.086);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-19,41.1,37.7);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.multy();
	this.instance.setTransform(-13.6,-16.2,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-16.2,27.2,32.3);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.trus();
	this.instance.setTransform(-40.5,-12.6,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-12.6,80.1,25.2);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wm();
	this.instance.setTransform(-38.4,-19.4,0.368,0.368);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-19.4,73.6,36.8);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wu();
	this.instance.setTransform(-26,-26.2,0.203,0.203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26.2,52,52);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.qiwi();
	this.instance.setTransform(-23.3,-10.5,0.117,0.117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-10.5,49,18.7);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.cash();
	this.instance.setTransform(-23.5,-6,0.144,0.144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-6,48.6,12.4);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tp();
	this.instance.setTransform(-26.5,-6.5,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-6.5,53.6,13.5);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prze();
	this.instance.setTransform(-31.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-11,63,22);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0cQjMAAAghFMAo5AAAMAAAAhFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.9,-105.9,261.9,211.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1ERAMAAAgh/MAqJAAAMAAAAh/g");
	this.shape.setTransform(0,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-34.2,270,217.7);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-6.5,235.1,13);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.danske();
	this.instance.setTransform(-42.5,-6.2,0.146,0.146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-6.2,85,12.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.maybank();
	this.instance.setTransform(-19,-17.4,0.079,0.079);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-17.4,38.1,35);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wu();
	this.instance.setTransform(-5.9,-52.4,0.309,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-52.4,79.2,79.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.prze();
	this.instance.setTransform(2.6,-8.3,0.677,0.677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,-8.3,42.7,14.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.tp();
	this.instance.setTransform(-24.4,-5.9,0.123,0.123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-5.9,48.8,12.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cash();
	this.instance.setTransform(-25.5,-6.4,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-6.4,50.6,12.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.multy();
	this.instance.setTransform(-16.5,-19.5,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-19.5,32.7,38.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wm();
	this.instance.setTransform(-45.9,-21.6,0.432,0.432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-21.6,86.4,43.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.mc();
	this.instance.setTransform(-25,-15.8,0.248,0.248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-15.8,49.7,31.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.ideal();
	this.instance.setTransform(-22.8,-18.7,0.382,0.382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-18.7,45.9,38.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.op();
	this.instance.setTransform(-55.5,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-16,111,32);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.qiwi();
	this.instance.setTransform(-22.1,-8.6,0.105,0.105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-8.6,44.2,16.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bitcoin();
	this.instance.setTransform(-56,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-11.5,112,23);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.paysafe();
	this.instance.setTransform(-51.2,-9.2,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-9.2,102.3,18.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.trus();
	this.instance.setTransform(-39.9,-12.9,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-12.9,79.8,25);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sof();
	this.instance.setTransform(-25.7,-7.9,0.03,0.03);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-7.9,51.7,15.9);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-11,63,22);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Растровое изображение 22
	this.instance = new lib.Символ55();
	this.instance.setTransform(85.2,54.1,0.958,0.958);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 16
	this.instance_1 = new lib.Символ57();
	this.instance_1.setTransform(84.8,27.4,1.126,1.126,0,0,0,0,-0.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 15
	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(-67,-76.2,2.179,2.178,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 13
	this.instance_3 = new lib.Символ59();
	this.instance_3.setTransform(81.9,87.3,1.308,1.307);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 12
	this.instance_4 = new lib.Символ60();
	this.instance_4.setTransform(19.7,-75.4,0.958,0.958);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 11
	this.instance_5 = new lib.Символ61();
	this.instance_5.setTransform(88.2,-3.4,0.958,0.958);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 10
	this.instance_6 = new lib.Символ62();
	this.instance_6.setTransform(-64.4,81.3,1.324,1.323);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 9
	this.instance_7 = new lib.Символ63();
	this.instance_7.setTransform(18.7,69.6,1.764,1.763);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 8
	this.instance_8 = new lib.Символ64();
	this.instance_8.setTransform(19.5,-29.2,1.214,1.214);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 7
	this.instance_9 = new lib.Символ65();
	this.instance_9.setTransform(-62.4,48.4,1.187,1.186);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 6
	this.instance_10 = new lib.Символ66();
	this.instance_10.setTransform(-64.8,-39.3,0.958,0.958);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 5
	this.instance_11 = new lib.Символ67();
	this.instance_11.setTransform(20.1,16.6,1.083,1.083);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 4
	this.instance_12 = new lib.Символ68();
	this.instance_12.setTransform(-64.4,18,0.958,0.958);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 3
	this.instance_13 = new lib.Символ69();
	this.instance_13.setTransform(87.3,-76.2,1.38,1.38);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 2
	this.instance_14 = new lib.Символ70();
	this.instance_14.setTransform(-65.8,-10.7,1.024,1.024);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// Слой 1
	this.instance_15 = new lib.Символ71();
	this.instance_15.setTransform(71.3,-42.6,1.06,1.06);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-100.5,240,198.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(-11.5,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2.5},24,cjs.Ease.get(-1)).to({y:0},25,cjs.Ease.get(1)).to({y:-2.8},28,cjs.Ease.get(-1)).to({y:-5},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.5,-155,300,300);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,0,1.362,1.362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-25.5,62.5,52.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-9.2,102.3,18.2);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-7.9,51.7,15.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-11.5,112,23);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-15.8,49.7,31.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-16,111,32);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-15.2,1.9,1.215,1.215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-21.8,39.8,47.2);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(13.8,4.5,1.344,1.344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-12.9,107.2,33.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(-49.5,37.1,0.89,0.89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,17.8,76.9,38.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-8.6,44.2,16.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-6.4,50.6,12.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(0,0,1.595,1.595);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-9.5,77.9,19.7);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ72();
	this.instance.setTransform(663.8,-4,3,3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({scaleX:1.82,scaleY:1.82,alpha:0},2).wait(1).to({scaleX:2.89,scaleY:2.89,x:677.7,y:58.3,alpha:1},0).to({scaleX:4.83,scaleY:4.83,x:678.1,y:69.5,alpha:0},2).wait(2).to({scaleX:2.85,scaleY:2.85,x:823.7,y:-9,alpha:1},0).to({scaleX:4.27,scaleY:4.27,x:833.2,y:-11.6,alpha:0},2).wait(36).to({scaleX:3.12,scaleY:3.12,x:738.9,y:34,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:731.4,y:30.8,alpha:0},1).wait(2).to({scaleX:3.41,scaleY:3.41,x:706.1,y:-21,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:703,y:-22.2,alpha:0},1).wait(2).to({scaleX:3.4,scaleY:3.4,x:840.5,y:-17.3,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:835.8,y:-16.3,alpha:0},1).wait(38).to({scaleX:2.66,scaleY:2.66,x:708.9,y:59.9,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:758.3,y:58.7,alpha:0},1).wait(2).to({scaleX:3.24,scaleY:3.24,x:699.4,y:-2.2,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:698.2,y:-2.9,alpha:0},1).wait(2).to({scaleX:3.7,scaleY:3.7,x:794,y:-2.2,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:792.3,y:-2.9,alpha:0},1).wait(33).to({scaleX:3.4,scaleY:3.4,x:790.5,y:-2.1,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:793.6,y:-3.2,alpha:0},1).wait(2).to({scaleX:3.4,scaleY:3.4,x:692.1,y:68.4,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:687.7,y:69.2,alpha:0},1).wait(2).to({scaleX:3.4,scaleY:3.4,x:695,y:12.4,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:701.4,y:5.6,alpha:0},1).wait(40).to({scaleX:3.4,scaleY:3.4,x:784.4,y:41.4,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:786,y:42.8,alpha:0},1).wait(2).to({scaleX:3.4,scaleY:3.4,x:678.2,y:41.4,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:677.3,y:42.8,alpha:0},1).wait(2).to({scaleX:4.2,scaleY:4.2,x:794.9,y:-6.7,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:801.5,y:-0.9,alpha:0},1).wait(2).to({scaleX:4.2,scaleY:4.2,x:688.2,y:-6.7,alpha:1},0).to({scaleX:4.32,scaleY:4.32,x:690.9,y:-0.9,alpha:0},1).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ73();
	this.instance_1.setTransform(794.9,43.2);
	this.instance_1.alpha = 0.469;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(37).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(38).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Растровое изображение 19.png
	this.instance_2 = new lib.rujyo();
	this.instance_2.setTransform(795,36.9,0.705,0.705);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(3).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(37).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(38).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(33).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(40).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2).to({scaleX:0.8,scaleY:0.8,x:789,y:33},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:795,y:36.9},0).wait(2));

	// mb
	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(551.4,-7.2,1.438,1.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:852.8},9).to({x:847.8},2).wait(25).to({alpha:0},3).to({_off:true},1).wait(179));

	// wm
	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(438.8,-5.7,1.705,1.705);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:792.8},10).to({x:803.8},2).wait(16).to({x:787.8,alpha:0},3).to({_off:true},1).wait(183));

	// 24
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(326.2,-7.2,2.367,2.367);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:572.2,y:-7.3},7).to({x:677.7},3).to({x:660.7},2).wait(8).to({x:672.7},0).to({alpha:0},3).to({_off:true},1).wait(186));

	// trust pay
	this.instance_6 = new lib.Символ20();
	this.instance_6.setTransform(213.6,-7.2,1.983,1.983);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({x:553.6,y:48.8},0).to({x:760.9,y:36.3},10).to({x:741.3},3).wait(8).to({scaleX:2.21,scaleY:2.21,alpha:0},3).to({_off:true},1).wait(141));

	// cash
	this.instance_7 = new lib.Символ21();
	this.instance_7.setTransform(101,-7.7,2.066,2.066);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({x:441},0).to({x:727.8,y:-17.9},10).to({x:699.8},3).wait(19).to({x:707.8},0).to({scaleX:2.26,scaleY:2.26,alpha:0},3).to({_off:true},1).wait(138));

	// sofort
	this.instance_8 = new lib.Символ33();
	this.instance_8.setTransform(-11.6,-7.2,2.079,2.079);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({x:328.4},0).to({x:849.9,y:-23.6},10).to({x:804.7},3).wait(28).to({x:812.7,alpha:0},3).to({_off:true},1).wait(135));

	// mister card
	this.instance_9 = new lib.Символ31();
	this.instance_9.setTransform(533.1,-2.1,1.87,1.87);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(84).to({_off:false},0).to({x:812.5},10).to({x:792.5},3).wait(28).to({scaleX:2.14,scaleY:2.14,alpha:0},3).to({_off:true},1).wait(90));

	// maybank
	this.instance_10 = new lib.Символ28();
	this.instance_10.setTransform(440.5,-1.1,1.546,1.546);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(88).to({_off:false},0).to({x:719.9},10).to({x:699.9},3).wait(21).to({scaleX:1.92,scaleY:1.92,alpha:0},3).to({_off:true},1).wait(93));

	// paysafe
	this.instance_11 = new lib.Символ34();
	this.instance_11.setTransform(493,57.9,1.56,1.56);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(92).to({_off:false},0).to({x:772.4},10).to({x:752.4},3).wait(14).to({scaleX:1.67,scaleY:1.67,alpha:0},3).to({_off:true},1).wait(96));

	// ideal
	this.instance_12 = new lib.Символ35();
	this.instance_12.setTransform(-477,-7.2,1.753,1.753);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(139).to({scaleX:1.53,scaleY:1.53,x:939,y:-4.7},0).to({x:806.5,y:-1.6},10).to({x:818.5},3).wait(10).to({_off:true},1).wait(56));

	// trustly
	this.instance_13 = new lib.Символ26();
	this.instance_13.setTransform(-584.6,-6.2,1.544,1.544);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(134).to({scaleX:1.35,scaleY:1.35,x:751.8,y:190},0).to({x:693,y:56.4},10).to({y:64.4},3).wait(15).to({alpha:0},3).to({_off:true},1).wait(53));

	// wu
	this.instance_14 = new lib.Символ24();
	this.instance_14.setTransform(-688.7,-7.2,1.231,1.231);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(129).to({scaleX:1.08,scaleY:1.08,x:664.9,y:189.1},0).to({y:-11.7},10).to({y:13.3},3).wait(23).to({x:660.9,y:21.3},0).to({scaleX:1.29,scaleY:1.29,alpha:0},3).to({_off:true},1).wait(50));

	// qivi
	this.instance_15 = new lib.Символ23();
	this.instance_15.setTransform(-782.3,-7.2,2.411,2.411);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(181).to({x:814,y:229.2},0).to({y:27.4},10).to({y:43.5},3).wait(12).to({scaleX:2.69,scaleY:2.69,alpha:0},3).to({_off:true},1).wait(9));

	// op
	this.instance_16 = new lib.Символ30();
	this.instance_16.setTransform(-902.4,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(177).to({x:693.9,y:229.2},0).to({y:27.4},10).to({y:43.5},3).wait(19).to({alpha:0},3).to({_off:true},1).wait(6));

	// bitcoin
	this.instance_17 = new lib.Символ32();
	this.instance_17.setTransform(-1025,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(173).to({x:811.7,y:182.6},0).to({y:-19.2},10).to({y:-3.2},3).wait(26).to({alpha:0},3).to({_off:true},1).wait(3));

	// danske
	this.instance_18 = new lib.Символ29();
	this.instance_18.setTransform(-1137.6,-7.2,1.259,1.259);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(169).to({x:692.1,y:182.6},0).to({y:-19.2},10).to({y:-3.2},3).wait(33).to({alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1191.1,-71.7,2077.1,167.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.fon = new lib.Символ39();
	this.fon.setTransform(1,5);

	this.timeline.addTween(cjs.Tween.get(this.fon).to({x:5.9},24,cjs.Ease.get(-1)).to({x:11},25,cjs.Ease.get(1)).to({x:5.8},26,cjs.Ease.get(-1)).to({x:1},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-150,300,300);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Слой 3
	this.instance = new lib.Символ53();
	this.instance.setTransform(751.9,-15.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1).to({alpha:0},9).wait(1));

	// Слой 21
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(-5.6,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:1,alpha:0},9).wait(1).to({alpha:1},9).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ54();
	this.instance_2.setTransform(753.1,19.2,1,0.674);
	this.instance_2.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,y:-13.3,alpha:1},9).wait(1).to({scaleY:0.67,y:19.2,alpha:0.73},9).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ47();
	this.instance_3.setTransform(753.9,-84.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-184.1},9).wait(1).to({y:-84.1},9).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ48();
	this.instance_4.setTransform(754.7,-112.5,1,0.329);
	this.instance_4.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1,y:-89.5,alpha:0},9).wait(1).to({scaleY:0.33,y:-112.5,alpha:0.641},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1196.8,-123.7,2086.5,214.3);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(10.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,rotation:-1},24,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04,rotation:-2.5},25,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02,rotation:-1.1},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


// stage content:



(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		 function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(0);
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 16
	this.main = new lib.Символ52();
	this.main.setTransform(-628.7,114.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 3
	this.instance = new lib.Символ43();
	this.instance.setTransform(111.8,106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1700.5,56.8,2087.3,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
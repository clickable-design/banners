(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arrow.png?1461931062069", id:"arrow"},
		{src:"images/bg_field.png?1461931062069", id:"bg_field"},
		{src:"images/bow.png?1461931062069", id:"bow"},
		{src:"images/cloud.png?1461931062069", id:"cloud"},
		{src:"images/grass.png?1461931062069", id:"grass"},
		{src:"images/light.png?1461931062069", id:"light"},
		{src:"images/sqare.png?1461931062069", id:"sqare"},
		{src:"images/star_shape.png?1461931062069", id:"star_shape"},
		{src:"images/stars.png?1461931062069", id:"stars"},
		{src:"images/target.png?1461931062069", id:"target"}
	]
};



// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,61);


(lib.bg_field = function() {
	this.initialize(img.bg_field);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1113,349);


(lib.bow = function() {
	this.initialize(img.bow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,421);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,102);


(lib.grass = function() {
	this.initialize(img.grass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,159);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,150);


(lib.sqare = function() {
	this.initialize(img.sqare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.star_shape = function() {
	this.initialize(img.star_shape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,45);


(lib.stars = function() {
	this.initialize(img.stars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,41);


(lib.target = function() {
	this.initialize(img.target);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,389);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.star_shape();
	this.instance.setTransform(-116.9,-21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-21.6,234,45);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B96800").s().p("AHcM7IwdhFQh2gIhOhWQhOhWAIh0IBDwGQAIhyBXhMQBahLB1AHIQdBFQB2AIBNBWQBOBXgIByIhDQGQgIBzhXBMQhRBFhoAAIgVgBg");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-107.8,169,165.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B86700").ss(1,1,1).p("AqrsGIRuibQB+gRBmBKQBlBLARB8ICXRUQARB8hNBjQhNBkh/ASIxtCaQh/AShmhMQhlhKgRh8IiWxUQgRh8BMhkQBOhjB+gRg");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.1,-119.4,192.2,188.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFA400","#FF7B00"],[0,1],0,0,0,0,0,715.5).s().p("EhOVBOWUggdggdAAAgt5UAAAgt4AgdggdUAgdggdAt4AAAUAt5AAAAgdAgdUAgdAgdAAAAt4UAAAAt5ggdAgdUggdAgdgt5AAAUgt4AAAggdggdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-709.1,-709.1,1418.3,1418.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrow();
	this.instance.setTransform(-57,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-30.5,114,61);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.447)").s().p("EiOeBq3MAAAjVtMEc9AAAMAAADVtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-911.9,-683.9,1823.9,1367.9);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud();
	this.instance.setTransform(-93,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-51,186,102);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud();
	this.instance.setTransform(-93,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-51,186,102);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(-74.9,-74.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-74.9,150,150);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgpWhIAAkyQm6gPk+k9QlElFgJnHIAAATIkyAAIAAhVIEyAAIAAATQAJnHFElEQE+k+G6gOIAAkxIBWAAIAAExQG7AOE9E+QEOEOAzFoQAJA/ADBDIEvAAIAABVIkvAAQgDBDgJBAQgzFokOEOQk9E9m7APIAAEygAsAsDQlAFAAAHDQAAHDFAE/QFAFAHBAAQHEAAE/lAQFAk/AAnDQAAnDlAlAQk/k/nEAAQnBAAlAE/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.1,-144.1,288.3,288.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bow();
	this.instance.setTransform(-141.5,-210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-210.5,283,421);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.grass();
	this.instance.setTransform(1485,-79.5);

	this.instance_1 = new lib.grass();
	this.instance_1.setTransform(486.7,-79.5);

	this.instance_2 = new lib.grass();
	this.instance_2.setTransform(-512,-79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-79.5,3021,159);


(lib.title_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ВЫ ВЫИГРАЛИ ИГРУ", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 486;
	this.text.setTransform(-2,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.8,-59.5,489.8,144);


(lib.title_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ПОБЕДА", "bold 50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 487;
	this.text.setTransform(-2,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.3,-15.8,490.6,106.6);


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text(" ПОЛУЧИ ПРИЗ", "bold 45px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 506;
	this.text.setTransform(-2,-131.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.9,-131.7,509.8,263.5);


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ПОПАДИ В ЦЕЛЬ", "bold 45px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 530;
	this.text.setTransform(-2,-54.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.7,-54.2,533.6,108.5);


(lib.rate_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxtDSIAAmjMAjbAAAIAAGjg");

	// Слой 1
	this.instance = new lib.stars();
	this.instance.setTransform(-113.4,-20.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.4,-20.6,226.9,41);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sqare();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТАНОВИТЬ", "bold 30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 325;
	this.text.setTransform(-2.1,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-44.1,329.5,88.2);


(lib.bg_field_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_field();
	this.instance.setTransform(-556.5,-174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-556.5,-174.5,1113,349);


(lib.app_name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("BEST GAME", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 619;
	this.text.setTransform(-2,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.4,-39.3,623,78.7);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7B00").s().p("AkekOIAAAAII9AAIkfIdg");
	this.shape.setTransform(0,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C45E00").s().p("AkeklIAAAAIEeIdIEfoeIkfJNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-29.5,57.4,59);


(lib.Символ16 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ17();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-911.9,-683.9,1823.9,1367.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.bow = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.bow).to({y:13.7},6,cjs.Ease.get(-1)).to({y:25},5,cjs.Ease.get(1)).to({y:13.5},6,cjs.Ease.get(-1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-210.5,283,421);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(577.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1348.5},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.7,-51,186,102);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(-301.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:943.6},500).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394.2,-51,186,102);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Symbol();
	this.instance.setTransform(0,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:27.3},6,cjs.Ease.get(-1)).to({y:2.3},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-27.2,57.4,59);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(0,0,0.983,0.983);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},6).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.6,-73.6,147.5,147.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.1,-144.1,288.3,288.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(0.3,-88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.target();
	this.instance_1.setTransform(-85.5,-194.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-194.5,171,389);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ10();
	this.instance.setTransform(-2.2,-260.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({x:-107.2,y:-231.2,alpha:0.281},7,cjs.Ease.get(-1)).to({x:-227.2,y:-197.8,alpha:1},8,cjs.Ease.get(1)).wait(28).to({x:-10.8,alpha:0.281},7,cjs.Ease.get(-1)).to({x:236.5,alpha:1},8,cjs.Ease.get(1)).wait(25).to({x:109.2,y:-231.2,alpha:0.281},8,cjs.Ease.get(-1)).to({x:-2.2,y:-260.3,alpha:1},7,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(235,175,0.839,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({scaleY:0.43,y:111.2},5,cjs.Ease.get(-1)).to({scaleY:0.84,y:31.3},5,cjs.Ease.get(1)).wait(31).to({scaleY:0.47,y:103.2},4,cjs.Ease.get(-1)).to({scaleY:0.1,y:175},5,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-231.2,175,0.839,0.101);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({scaleY:0.43,y:111.1},5,cjs.Ease.get(-1)).wait(1).to({scaleY:0.66,y:65.5},0).wait(1).to({scaleY:0.76,y:45.9},0).wait(1).to({scaleY:0.81,y:36.3},0).wait(1).to({scaleY:0.83,y:32.2},0).wait(1).to({scaleY:0.84,y:31.3},0).wait(28).to({scaleY:0.47,y:103.1},5,cjs.Ease.get(-1)).to({scaleY:0.1,y:175},5,cjs.Ease.get(1)).to({_off:true},1).wait(46));

	// Символ 4
	this.instance_3 = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({scaleY:0.55,y:87.5},5,cjs.Ease.get(-1)).to({scaleY:0.1,y:175},5,cjs.Ease.get(1)).to({_off:true},1).wait(72).to({_off:false},0).to({scaleY:0.5,y:97.2},4,cjs.Ease.get(-1)).to({scaleY:1,y:0},5,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-287.5,171,482.1);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.title_2 = new lib.title_2();
	this.title_2.setTransform(0,122.1);
	this.title_2.alpha = 0;
	this.title_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_2).wait(31).to({_off:false},0).wait(1).to({y:104.8,alpha:0.381},0).wait(1).to({y:96.4,alpha:0.566},0).wait(1).to({y:90.7,alpha:0.689},0).wait(1).to({y:86.5,alpha:0.783},0).wait(1).to({y:83.3,alpha:0.852},0).wait(1).to({y:81,alpha:0.904},0).wait(1).to({y:79.2,alpha:0.944},0).wait(1).to({y:77.7,alpha:0.975},0).wait(1).to({y:76.6,alpha:1},0).wait(23).to({y:77.9,alpha:0.972},0).wait(1).to({y:79.4,alpha:0.939},0).wait(1).to({y:81.4,alpha:0.895},0).wait(1).to({y:84.1,alpha:0.835},0).wait(1).to({y:88,alpha:0.75},0).wait(1).to({y:93,alpha:0.64},0).wait(1).to({y:98.9,alpha:0.509},0).wait(1).to({y:107.8,alpha:0.315},0).wait(1).to({y:122.1,alpha:0},0).to({_off:true},1).wait(9));

	// Слой 1
	this.title_1 = new lib.title_1();

	this.timeline.addTween(cjs.Tween.get(this.title_1).wait(23).to({y:1.3,alpha:0.972},0).wait(1).to({y:2.8,alpha:0.939},0).wait(1).to({y:4.8,alpha:0.895},0).wait(1).to({y:7.5,alpha:0.835},0).wait(1).to({y:11.4,alpha:0.75},0).wait(1).to({y:16.4,alpha:0.64},0).wait(1).to({y:22.3,alpha:0.509},0).wait(1).to({y:31.2,alpha:0.315},0).wait(1).to({y:45.5,alpha:0},0).to({_off:true},1).wait(39).to({_off:false},0).wait(1).to({y:28.2,alpha:0.381},0).wait(1).to({y:19.8,alpha:0.566},0).wait(1).to({y:14.1,alpha:0.689},0).wait(1).to({y:9.9,alpha:0.783},0).wait(1).to({y:6.7,alpha:0.852},0).wait(1).to({y:4.4,alpha:0.904},0).wait(1).to({y:2.6,alpha:0.944},0).wait(1).to({y:1.1,alpha:0.975},0).wait(1).to({y:0,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.7,-54.2,533.6,108.5);


(lib.rate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.rate_in = new lib.rate_in();

	this.timeline.addTween(cjs.Tween.get(this.rate_in).wait(1));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(0,3.4,1,1,0,0,0,0,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-21.6,234,45);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.btn_txt = new lib.btn_txt();
	this.btn_txt.setTransform(-0.6,4.1);

	this.timeline.addTween(cjs.Tween.get(this.btn_txt).wait(1));

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#009300","#00CC00"],[0,1],-164.6,0,164.6,0).s().p("A4YGpQhVAAAAhnIAAqDQAAhnBVAAMAwxAAAQBVAAAABnIAAKDQAABnhVAAg");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("A4YGpQhVAAAAhnIAAqDQAAhnBVAAMAwxAAAQBVAAAABnIAAKDQAABnhVAAg");
	this.shape_1.setTransform(0,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.3,-67.5,330,115.7);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(-331.8,-109.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(234.3,-68.7,0.608,0.608);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00A6FF","#00B5FE","#00DBFE","#00DCFE"],[0,0.333,0.976,1],0,384,0,-384).s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(0,108.8,1.347,1.797);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-726,-581.5,1415.5,1380.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Aq7K7QkikiAAmZQAAmZEikiQEikiGZAAQGaAAEiEiQEiEiAAGZQAAGZkiEiQkiEjmaAAQmZAAkikjgAqeqfQkXEXAAGIQAAGJEXEWQEWEWGIAAQGJAAEWkWQEXkWAAmJQAAmIkXkXQkWkWmJAAQmIAAkWEWgAh9B+Qg0g1AAhJQAAhJA0g0QA1g0BIAAQBKAAA0A0QA0A0AABJQAABJg0A1Qg0A0hKAAQhIAAg1g0gAh3h4QgzAyAABGQAABGAzAyQAyAzBFAAQBHAAAygzQAygyAAhGQAAhGgygyQgygyhHAAQhFAAgyAygAhoBpQgrgrAAg9QAAg7ArgtQAtgrA7AAQA9AAArArQAsAtAAA7QAAA9gsArQgrAsg9AAQg7AAgtgsg");
	this.shape.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.1,-144.1,288.3,288.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16).call(this.frame_30).wait(1));

	// Слой 1
	this.target = new lib.Символ1();
	this.target.setTransform(0,46.6);

	this.timeline.addTween(cjs.Tween.get(this.target).wait(1).to({regX:1.9,regY:-46.5,scaleX:1.05,scaleY:1.05,x:2,y:-2.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:2.1,y:-3.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-4.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:-5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:2.2,y:-5.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:-5.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:-6.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-6.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-6.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-6.7},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-6.8},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-6.9},0).wait(1).to({regX:0,regY:0,scaleX:1.15,scaleY:1.15,x:0,y:46.6},0).wait(1).to({regX:1.9,regY:-46.5,scaleX:1.11,scaleY:1.11,x:2.1,y:-4.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-3.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:2,y:-2.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-2.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-1.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:-1.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-0.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-0.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:1.9,y:-0.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-0.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-0.2},0).wait(1).to({scaleX:1,scaleY:1,y:-0.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,y:0},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:46.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-241,171,482.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// Слой 3
	this.instance = new lib.Символ19();
	this.instance.setTransform(408,273.2,1,1,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({x:403.3,y:269.8},0).wait(1).to({x:397,y:265.3},0).wait(1).to({x:387.3,y:258.2},0).wait(1).to({x:371.5,y:246.8},0).wait(1).to({x:344.7,y:227.3},0).wait(1).to({x:296.5,y:192.4},0).wait(1).to({x:204.3,y:125.5},0).wait(1).to({x:52.8,y:15.6},0).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1,scaleY:1.1},3,cjs.Ease.get(1)).to({scaleX:0.31,scaleY:0.31,x:-0.2,alpha:0},12,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.3,-144,288.3,288.3);


(lib.victory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// Слой 12
	this.btn = new lib.btn();
	this.btn.setTransform(-4.1,545.7);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(44).to({_off:false},0).wait(1).to({regX:-0.4,regY:-9.7,x:-4.5,y:529.8,alpha:0.316},0).wait(1).to({y:525.9,alpha:0.514},0).wait(1).to({y:523.3,alpha:0.647},0).wait(1).to({y:521.4,alpha:0.747},0).wait(1).to({y:519.9,alpha:0.822},0).wait(1).to({y:518.8,alpha:0.88},0).wait(1).to({y:517.9,alpha:0.924},0).wait(1).to({y:517.3,alpha:0.957},0).wait(1).to({y:516.8,alpha:0.982},0).wait(1).to({regX:0,regY:0,x:-4.1,y:526.2,alpha:1},0).wait(1));

	// Слой 11
	this.app_name = new lib.app_name();
	this.app_name.setTransform(0,469.2);
	this.app_name.alpha = 0;
	this.app_name._off = true;

	this.timeline.addTween(cjs.Tween.get(this.app_name).wait(41).to({_off:false},0).wait(1).to({y:457,alpha:0.324},0).wait(1).to({y:449,alpha:0.536},0).wait(1).to({y:443.6,alpha:0.68},0).wait(1).to({y:439.5,alpha:0.79},0).wait(1).to({y:436.4,alpha:0.872},0).wait(1).to({y:434.5,alpha:0.924},0).wait(1).to({y:433.3,alpha:0.956},0).wait(1).to({y:432.4,alpha:0.98},0).wait(1).to({y:431.7,alpha:1},0).wait(5));

	// Слой 9
	this.rate = new lib.rate();
	this.rate.setTransform(0,358.5);
	this.rate.alpha = 0;
	this.rate._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rate).wait(37).to({_off:false},0).wait(1).to({regY:0.9,y:350.4,alpha:0.449},0).wait(1).to({y:346.4,alpha:0.648},0).wait(1).to({y:343.9,alpha:0.773},0).wait(1).to({y:342.2,alpha:0.858},0).wait(1).to({y:341,alpha:0.915},0).wait(1).to({y:340.3,alpha:0.954},0).wait(1).to({y:339.7,alpha:0.981},0).wait(1).to({regY:0,y:338.5,alpha:1},0).wait(10));

	// Слой 6
	this.icon = new lib.icon();
	this.icon.setTransform(0,205.1,0.055,0.055,-15);
	this.icon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(27).to({_off:false},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:-9.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-6.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-4.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-2.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-0.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-0.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-0.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:0},0).wait(18));

	// Слой 8
	this.instance = new lib.Символ22();
	this.instance.setTransform(1.4,231.3,0.192,0.192,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).wait(1).to({regY:-25,scaleX:0.55,scaleY:0.55,rotation:16.8,x:5.3,y:218.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:11.5,x:4.8,y:214.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:8.3,x:4.2,y:212},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:5.6,x:3.4,y:210.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:3.7,x:2.8,y:208.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:2.4,x:2.4,y:207.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:1.4,x:2,y:207.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.8,x:1.7,y:206.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.3,x:1.5,y:206.5},0).wait(1).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:1.4,y:231.3},0).wait(12));

	// Слой 7
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(1.3,231.2,0.304,0.304,-45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({regY:-25,scaleX:0.59,scaleY:0.59,rotation:-26.3,x:-5.2,y:217.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-18.4,x:-4.3,y:214.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-13.6,x:-3.3,y:212},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.7,x:-2.2,y:210.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-6.7,x:-1.3,y:209},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-4.6,x:-0.5,y:208.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-3,x:0.1,y:207.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-1.8,x:0.5,y:207},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-1,x:0.9,y:206.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.4,x:1.2,y:206.4},0).wait(1).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:1.3,y:231.2},0).wait(5));

	// Слой 13
	this.title_4 = new lib.title_4();
	this.title_4.setTransform(0.6,148);
	this.title_4.alpha = 0;
	this.title_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_4).wait(27).to({_off:false},0).wait(1).to({regY:12.5,y:149.6,alpha:0.291},0).wait(1).to({y:141.9,alpha:0.495},0).wait(1).to({y:137.3,alpha:0.62},0).wait(1).to({y:133.5,alpha:0.72},0).wait(1).to({y:130.3,alpha:0.806},0).wait(1).to({y:127.9,alpha:0.868},0).wait(1).to({y:126.3,alpha:0.912},0).wait(1).to({y:125,alpha:0.946},0).wait(1).to({y:124,alpha:0.974},0).wait(1).to({regY:0,y:110.5,alpha:1},0).wait(18));

	// Слой 4
	this.title_3 = new lib.title_3();
	this.title_3.setTransform(0,96.8);
	this.title_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_3).wait(20).to({_off:false},0).wait(1).to({regY:37.5,y:106.5},0).wait(1).to({y:87},0).wait(1).to({y:74.3},0).wait(1).to({y:65.1},0).wait(1).to({y:57.4},0).wait(1).to({y:50.8},0).wait(1).to({y:45.7},0).wait(1).to({y:42.1},0).wait(1).to({y:39.6},0).wait(1).to({y:37.8},0).wait(1).to({y:36.4},0).wait(1).to({y:35.3},0).wait(1).to({regY:0,y:-3.2},0).wait(22));

	// Слой 5
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(0,277.7,0.037,0.037);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:0.49,scaleY:0.49,y:270.7},7,cjs.Ease.get(-1)).to({scaleX:1.24,scaleY:1.24,y:262.7},12,cjs.Ease.get(1)).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.game_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var clickkyTAG = clickkyTAG;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
		window.onmessage = function(message) {
			if(
			typeof message === 'object'
			&& typeof message.data === 'object'
			&& typeof message.data.key === 'string'
			&& message.data.key === 'clickky_banner_59407'
			) {
									
			_this.victory_mc.icon.instance.image.src = message.data.icon;
			_this.victory_mc.title_3.text.text = message.data.title_3;
			_this.victory_mc.app_name.text.text = message.data.app_name;
			_this.victory_mc.title_4.text.text = message.data.title_4;
			_this.victory_mc.btn.btn_txt.text.text = message.data.button;
			_this.title.title_1.text.text = message.data.title_1;
			_this.title.title_2.text.text = message.data.title_2;
			clickkyTAG = message.data.target_url;
			
			var rate = parseFloat(message.data.rating);
			if(rate < 0) {rate = 0;}
			if(rate > 5) {rate = 5;}
			var x = (5 - rate) * (_this.victory_mc.rate.rate_in.instance.image.width / 5) * -1;
			_this.victory_mc.rate.rate_in.instance.mask.x = x;
		
			}
		};
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		_this.pricel.visible = false;
		
		//Resize
		
		window._setCanvasSize = function() {
			
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
			
			_this.bg.x = windowSize.width/2;
			_this.bg.y = 0;
			
			_this.mishen.x = windowSize.width/2;
			_this.mishen.y = windowSize.height;
			
			_this.grass.x = windowSize.width/2;
			_this.grass.y = windowSize.height;
			
			_this.bg_field.x = windowSize.width/2;
			_this.bg_field.y = windowSize.height;
			
			_this.title.x = windowSize.width/2;
			_this.title.y = 0;
			
			_this.boww.x = windowSize.width;
			_this.boww.y = windowSize.height;
			
			_this.black.x = windowSize.width/2;
			_this.black.y = windowSize.height/2;
			
			_this.victory_mc.x = windowSize.width/2;
			_this.victory_mc.y = windowSize.height/2;
			
			
			//Scale
		
			_this.bg.scaleX = 1.2;
			_this.bg.scaleY = 1.2;
			
			
			if(windowSize.width < 767){
				
			_this.mishen.scaleX = 0.6;
			_this.mishen.scaleY = 0.6;
			
			_this.bg.scaleX = 0.8;
			_this.bg.scaleY = 0.8;
				
			_this.bg.scaleX = 0.8;
			_this.bg.scaleY = 0.8;
				
			_this.boww.scaleX = 0.6;
			_this.boww.scaleY = 0.6;
				
			_this.title.scaleX = 0.7;
			_this.title.scaleY = 0.7;
				
			_this.grass.scaleX = 0.6;
			_this.grass.scaleY = 0.6;
				
			_this.bg_field.scaleX = 0.6;
			_this.bg_field.scaleY = 0.6;
			
			_this.pricel.scaleX = 0.6;
			_this.pricel.scaleY = 0.6;
			
			_this.victory_mc.scaleX = 0.7;
			_this.victory_mc.scaleY = 0.7;
				
			}
			
			if(windowSize.width < 766 && windowSize.width > windowSize.height){
				
			_this.mishen.scaleX = 0.5;
			_this.mishen.scaleY = 0.5;
			
			_this.bg.scaleX = 0.7;
			_this.bg.scaleY = 0.7;
				
			_this.bg.scaleX = 0.7;
			_this.bg.scaleY = 0.7;
				
			_this.boww.scaleX = 0.5;
			_this.boww.scaleY = 0.5;
				
			_this.title.scaleX = 0.45;
			_this.title.scaleY = 0.45;
				
			_this.grass.scaleX = 0.7;
			_this.grass.scaleY = 0.7;
				
			_this.bg_field.scaleX = 0.7;
			_this.bg_field.scaleY = 0.7;
			
			_this.pricel.scaleX = 0.6;
			_this.pricel.scaleY = 0.6;
			
			_this.victory_mc.scaleX = 0.45;
			_this.victory_mc.scaleY = 0.45;
				
			}
			
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		//Actions
			
		var onTouchStart = function() {
			console.log('start');
			var touch = event.targetTouches[0];
			
			_this.pricel.visible = true;
			_this.pricel.x = touch.pageX; 
			_this.pricel.y = touch.pageY;
			
			_this.bg.gotoAndPlay(1);
			_this.mishen.gotoAndPlay(1);
			
			_this.black.gotoAndPlay(1);
			
			event.preventDefault(); 
		};
		
		var onTouchMove = function() {
			console.log('move');
			var touch = event.targetTouches[0];
			
			_this.pricel.x = touch.pageX; 
			_this.pricel.y = touch.pageY;
			_this.grass.x = -touch.pageX/20;
			
			event.preventDefault(); 
		};
		
		var onTouchEnd = function() {
			console.log('end');
			var touch = event.targetTouches[0];
			
			_this.pricel.gotoAndPlay(1);
			_this.victory_mc.gotoAndPlay(1);
			//_this.mishen.gotoAndPlay(15);
			_this.bg.gotoAndPlay(15);
			_this.title.gotoAndPlay(81);
			_this.boww.visible = false;
			_this.black.gotoAndPlay(15);
			_this.mishen.target.stop();
			
			
			event.preventDefault();
			
			stage.canvas.removeEventListener('touchmove', onTouchMove);
			stage.canvas.removeEventListener('touchstart', onTouchStart);
			stage.canvas.removeEventListener('touchend', onTouchEnd);
			
			stage.canvas.addEventListener("click", onClick);
		};
		
		var onClick = function(evt) {
			console.log('click')
			if(clickkyTAG){
			window.open(clickkyTAG, "_blank");
			}
		};
		
		stage.canvas.addEventListener('touchmove', onTouchMove, false);
		stage.canvas.addEventListener('touchstart', onTouchStart, false);
		stage.canvas.addEventListener('touchend', onTouchEnd, false);
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 10
	this.victory_mc = new lib.victory_mc();
	this.victory_mc.setTransform(512.1,380.1,1,1,0,0,0,0.1,264.1);

	this.timeline.addTween(cjs.Tween.get(this.victory_mc).wait(1));

	// Слой 9
	this.title = new lib.title();
	this.title.setTransform(510.8,0,1,1,0,0,0,-1.2,-113.9);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Слой 6
	this.boww = new lib.Символ15();
	this.boww.setTransform(1024.1,767.1,1,1,0,0,0,89.2,100.4);

	this.timeline.addTween(cjs.Tween.get(this.boww).wait(1));

	// Слой 7
	this.pricel = new lib.Символ5();
	this.pricel.setTransform(514.4,394.9);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 5
	this.grass = new lib.Символ2();
	this.grass.setTransform(297.6,767,1,1,0,0,0,784,78.5);

	this.timeline.addTween(cjs.Tween.get(this.grass).wait(1));

	// Слой 4
	this.mishen = new lib.Символ18();
	this.mishen.setTransform(514.5,767.1,1,1,0,0,0,2.5,331.2);

	this.timeline.addTween(cjs.Tween.get(this.mishen).wait(1));

	// Слой 2
	this.bg_field = new lib.bg_field_1();
	this.bg_field.setTransform(512.1,767,1,1,0,0,0,0.1,172.1);

	this.timeline.addTween(cjs.Tween.get(this.bg_field).wait(1));

	// Слой 8
	this.black = new lib.Символ16();
	this.black.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// Слой 3
	this.bg = new lib.bg();
	this.bg.setTransform(514.6,0,1,1,0,0,0,2.6,-384);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.4,84.1,3021,1483);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
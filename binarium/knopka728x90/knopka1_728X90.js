(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/KNOPKA.png", id:"KNOPKA"},
		{src:"images/KNOPKA15.png", id:"KNOPKA15"}
	]
};



// symbols:



(lib.KNOPKA = function() {
	this.initialize(img.KNOPKA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.KNOPKA15 = function() {
	this.initialize(img.KNOPKA15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(68,68,68,0)"],[0,0.51,1],-32.7,-18.9,32.8,18.9).s().p("AztWWMAdMgylIKPF6MgdMAylg");
	this.shape.setTransform(68.3,-51);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.9,-231.8,252.5,361.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация8("synched",0);
	this.instance.setTransform(-100.4,136);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:487.5},39).to({x:486.5},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.4,-95.8,252.5,361.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(27.5,135.9,1,1,0,0,0,27.5,135.9);
	this.instance.alpha = 0.43;
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158.4,-95.8,252.5,361.7);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggEAEDQhuABhPhNQhOhMAAhrQAAhqBOhMQBPhNBuAAMBAIAAAQBuAABOBNQBPBMAABqQAABrhPBMQhOBNhugBg");
	mask.setTransform(385.4,236.8);

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(185.9,231.8,1,1,0,0,0,27.5,135.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(153.4,210.8,99,52);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-24.2,-25.5,1,1,0,0,0,126.2,180.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Слой 1
	this.instance_1 = new lib.KNOPKA();
	this.instance_1.setTransform(0,0.5);

	this.instance_2 = new lib.KNOPKA15();
	this.instance_2.setTransform(-0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgkEgD2MBIJAAAIAAHtMhIJAAAg");
	this.shape.setTransform(233,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC66").s().p("EgkEAD3IAAntMBIJAAAIAAHtg");
	this.shape_1.setTransform(233,31.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-206.3,618.5,361.7);


// stage content:



(lib.knopka1_728X90 = function() {
	this.initialize();

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(364.1,44.2,1.551,1.508,0,0,0,234,30.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ2(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(131.9,-267.5,959,545.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
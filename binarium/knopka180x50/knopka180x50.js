(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 180,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/gerbrossii1.png", id:"gerbrossii1"},
		{src:"images/KNOPKA.png", id:"KNOPKA"},
		{src:"images/knopka180x50_1.png", id:"knopka180x50_1"},
		{src:"images/KNOPKA2.png", id:"KNOPKA2"},
		{src:"images/knopka2_180x50.png", id:"knopka2_180x50"}
	]
};



// symbols:



(lib.gerbrossii1 = function() {
	this.initialize(img.gerbrossii1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,325);


(lib.KNOPKA = function() {
	this.initialize(img.KNOPKA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,90);


(lib.knopka180x50_1 = function() {
	this.initialize(img.knopka180x50_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,50);


(lib.KNOPKA2 = function() {
	this.initialize(img.KNOPKA2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.knopka2_180x50 = function() {
	this.initialize(img.knopka2_180x50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,50);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:208.5,y:135},39).to({startPosition:0},61).wait(1));

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
	mask.graphics.p("AsNECQgqAAgdhMQgehMAAhqQAAhpAehMQAdhMAqAAIYaAAQAqAAAeBMQAeBMAABpQAABqgeBMQgeBMgqAAg");
	mask.setTransform(239.8,231.9);

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(185.9,231.8,1,1,0,0,0,27.5,135.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(151.4,206.1,101,51.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-24.2,-25.5,1,1,0,0,0,126.2,180.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Слой 1
	this.instance_1 = new lib.knopka180x50_1();
	this.instance_1.setTransform(0,2);

	this.instance_2 = new lib.knopka2_180x50();
	this.instance_2.setTransform(0,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4RgGVMBwjAAAIAAMrMhwjAAAg");
	this.shape.setTransform(363.5,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC66").s().p("Eg4RAGWIAAsrMBwjAAAIAAMrg");
	this.shape_1.setTransform(363.5,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-206.3,330.5,361.7);


// stage content:



(lib.knopka180x50 = function() {
	this.initialize();

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(234,29,1,1,0,0,0,234,30);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ2(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.4,-182.3,330.5,361.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
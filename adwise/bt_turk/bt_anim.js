(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1000,
	height: 400,
	fps: 24,
	color: "#333333",
	manifest: [
		{src:"images/blink.png", id:"blink"},
		{src:"images/bt_1.png", id:"bt_1"}
	]
};



// symbols:



(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,96);


(lib.bt_1 = function() {
	this.initialize(img.bt_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,515,134);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bt_1();
	this.instance.setTransform(-243.3,-63.3,0.945,0.945);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-243.3,-63.3,486.7,126.7);


(lib.Символ8 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.blink();
	this.instance.setTransform(-394,-48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-394,-48,788,96);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bt_1();
	this.instance.setTransform(-257.5,-67);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-257.5,-67,515,134);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.setTransform(0,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88,y:-42},19,cjs.Ease.get(-1)).to({scaleX:0.75,scaleY:0.75,y:-41.1},20,cjs.Ease.get(1)).to({scaleX:0.87,scaleY:0.87,y:-42.1},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:-43},20,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(-4.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.98,scaleY:0.98,x:-4.4,y:23.5},19,cjs.Ease.get(-1)).to({scaleX:0.96,scaleY:0.96,x:-4.3,y:23},20,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98,x:-4.4,y:23.5},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-4.5,y:24},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394,-91,788,182);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(0,-42.9,0.998,0.998);

	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-4.5,24,0.998,0.998);
	this.instance_2.shadow = new cjs.Shadow("#FF0000",0,0,60);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 8, 0))];
	this.instance_2.cache(-259,-69,519,138);

	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(-4.2,22.7);
	this.instance_3.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-245,-65,491,131);

	this.instance_4 = new lib.bt_1();
	this.instance_4.setTransform(-247.6,-40.6,0.945,0.945);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394,-91,788,182);


// stage content:



(lib.bt_anim = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(512,174);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ9(), 3);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(512,388.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(618,283,788,215.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arrow.png?1461760847743", id:"arrow"},
		{src:"images/button.png?1461760847743", id:"button"},
		{src:"images/front_plate.png?1461760847743", id:"front_plate"},
		{src:"images/green.png?1461760847743", id:"green"},
		{src:"images/plate.png?1461760847743", id:"plate"},
		{src:"images/stripe.png?1461760847743", id:"stripe"}
	]
};



// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,115);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,156);


(lib.front_plate = function() {
	this.initialize(img.front_plate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,104);


(lib.green = function() {
	this.initialize(img.green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,69);


(lib.plate = function() {
	this.initialize(img.plate);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,507,287);


(lib.stripe = function() {
	this.initialize(img.stripe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,199);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#FFFFFF","#999999"],[0,1],0,0,0,0,0,640).beginStroke().moveTo(-512,384).lineTo(-512,-384).lineTo(512,-384).lineTo(512,384).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#FFFFFF","#D9D9D9"],[0,1],0,0,0,0,0,640).beginStroke().moveTo(-512,384).lineTo(-512,-384).lineTo(512,-384).lineTo(512,384).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF9900").beginStroke().moveTo(-243.1,65.1).lineTo(-243.1,60.1).lineTo(243.1,60.1).lineTo(243.1,65.1).closePath().moveTo(-243.1,-60.1).lineTo(-243.1,-65.1).lineTo(243.1,-65.1).lineTo(243.1,-60.1).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243,-65.1,486.1,130.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_87 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(87).call(this.frame_87).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#656565").beginStroke().moveTo(4.4,11.6).curveTo(2.9,10,2.9,6.7).curveTo(2.9,3.2,4.4,1.6).curveTo(5.9,0,8.4,0).curveTo(11,0,12.5,1.6).curveTo(14,3.2,14,6.7).curveTo(14,10,12.5,11.6).curveTo(11,13.3,8.5,13.2).curveTo(5.9,13.3,4.4,11.6).closePath().moveTo(7.3,3.3).curveTo(6.6,4.2,6.6,6.6).curveTo(6.6,9.1,7.3,9.8).curveTo(7.7,10.5,8.4,10.5).curveTo(9.2,10.5,9.6,9.9).curveTo(10.1,9,10.2,6.6).curveTo(10.1,4.2,9.6,3.3).curveTo(9.2,2.7,8.4,2.7).curveTo(7.7,2.7,7.3,3.3).closePath().moveTo(-8.4,13.2).lineTo(4.9,-13.2).lineTo(8.4,-13.2).lineTo(-4.9,13.2).closePath().moveTo(-12.5,-1.6).curveTo(-14,-3.3,-14,-6.6).curveTo(-14,-10,-12.5,-11.6).curveTo(-11,-13.2,-8.5,-13.2).curveTo(-5.9,-13.2,-4.4,-11.6).curveTo(-2.9,-10,-2.9,-6.6).curveTo(-2.9,-3.3,-4.4,-1.6).curveTo(-5.9,0,-8.4,0).curveTo(-11,-0,-12.5,-1.6).closePath().moveTo(-9.6,-10).curveTo(-10.3,-9.1,-10.3,-6.7).curveTo(-10.3,-4.2,-9.6,-3.3).curveTo(-9.3,-2.8,-8.5,-2.8).curveTo(-7.7,-2.8,-7.3,-3.3).curveTo(-6.8,-4.2,-6.8,-6.7).curveTo(-6.8,-9.1,-7.3,-9.9).curveTo(-7.7,-10.6,-8.5,-10.5).curveTo(-9.3,-10.5,-9.6,-10).closePath();
	this.shape.setTransform(14.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#656565").beginStroke().moveTo(0.7,12.6).lineTo(0.7,-5.5).curveTo(-1.9,-3.1,-5.5,-1.9).lineTo(-5.5,-6.2).curveTo(-3.6,-6.9,-1.4,-8.6).curveTo(0.8,-10.3,1.6,-12.6).lineTo(5.5,-12.6).lineTo(5.5,12.6).closePath();
	this.shape_1.setTransform(-21.9,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#656565").beginStroke().moveTo(-5.8,10.7).curveTo(-8,8.8,-8.4,5.7).lineTo(-3.6,5.2).curveTo(-3.4,6.8,-2.4,7.8).curveTo(-1.4,8.7,-0.1,8.7).curveTo(1.4,8.7,2.4,7.5).curveTo(3.5,6.3,3.5,3.8).curveTo(3.5,1.5,2.5,0.4).curveTo(1.4,-0.8,-0.2,-0.8).curveTo(-2.3,-0.8,-3.9,1).lineTo(-7.8,0.5).lineTo(-5.4,-12.6).lineTo(7.3,-12.6).lineTo(7.3,-8.1).lineTo(-1.7,-8.1).lineTo(-2.5,-3.8).curveTo(-0.9,-4.6,0.8,-4.6).curveTo(4,-4.6,6.2,-2.3).curveTo(8.4,0,8.4,3.7).curveTo(8.4,6.8,6.6,9.2).curveTo(4.2,12.6,-0.1,12.6).curveTo(-3.6,12.6,-5.8,10.7).closePath();
	this.shape_2.setTransform(-20.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#656565").beginStroke().moveTo(4.4,11.6).curveTo(2.9,10,2.9,6.7).curveTo(2.9,3.2,4.4,1.6).curveTo(5.9,0,8.4,0).curveTo(11,0,12.5,1.6).curveTo(14,3.2,14,6.7).curveTo(14,10,12.5,11.6).curveTo(11,13.3,8.5,13.2).curveTo(5.9,13.3,4.4,11.6).closePath().moveTo(7.2,3.3).curveTo(6.7,4.2,6.6,6.6).curveTo(6.7,9.1,7.2,9.8).curveTo(7.6,10.5,8.4,10.5).curveTo(9.2,10.5,9.6,9.9).curveTo(10.2,9,10.1,6.6).curveTo(10.2,4.2,9.6,3.3).curveTo(9.2,2.7,8.4,2.7).curveTo(7.6,2.7,7.2,3.3).closePath().moveTo(-8.4,13.2).lineTo(4.9,-13.2).lineTo(8.4,-13.2).lineTo(-4.8,13.2).closePath().moveTo(-12.5,-1.6).curveTo(-14,-3.3,-14,-6.6).curveTo(-14,-10,-12.5,-11.6).curveTo(-11,-13.2,-8.5,-13.2).curveTo(-5.9,-13.2,-4.4,-11.6).curveTo(-2.9,-10,-2.9,-6.6).curveTo(-2.9,-3.3,-4.4,-1.6).curveTo(-5.9,0,-8.4,0).curveTo(-11,-0,-12.5,-1.6).closePath().moveTo(-9.7,-10).curveTo(-10.2,-9.1,-10.2,-6.7).curveTo(-10.2,-4.2,-9.7,-3.3).curveTo(-9.2,-2.8,-8.5,-2.8).curveTo(-7.7,-2.8,-7.3,-3.3).curveTo(-6.7,-4.2,-6.8,-6.7).curveTo(-6.7,-9.1,-7.3,-9.9).curveTo(-7.7,-10.6,-8.5,-10.5).curveTo(-9.2,-10.5,-9.7,-10).closePath();
	this.shape_3.setTransform(24.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#656565").beginStroke().moveTo(-5.9,9.9).curveTo(-8.1,7.2,-8.2,-0.1).curveTo(-8.2,-7.2,-5.7,-10.2).curveTo(-3.6,-12.8,-0,-12.8).curveTo(3.7,-12.8,5.7,-10.2).curveTo(8.2,-7.2,8.2,0).curveTo(8.2,7.1,5.7,10.2).curveTo(3.7,12.8,-0,12.8).curveTo(-3.7,12.8,-5.9,9.9).closePath().moveTo(-1.5,-8.3).curveTo(-2.3,-7.7,-2.6,-6.3).curveTo(-3.1,-4.4,-3.1,0).curveTo(-3.1,4.4,-2.6,6).curveTo(-2.2,7.7,-1.5,8.2).curveTo(-0.9,8.8,-0,8.8).curveTo(0.9,8.8,1.5,8.2).curveTo(2.3,7.7,2.6,6.2).curveTo(3.1,4.4,3.1,0).curveTo(3.1,-4.4,2.6,-6).curveTo(2.3,-7.7,1.5,-8.3).curveTo(0.9,-8.8,-0,-8.8).curveTo(-0.9,-8.8,-1.5,-8.3).closePath();
	this.shape_4.setTransform(-10.8,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#656565").beginStroke().moveTo(-8.4,12.6).curveTo(-8.1,10,-6.8,7.8).curveTo(-5.4,5.5,-1.4,1.8).curveTo(1.9,-1.3,2.6,-2.3).curveTo(3.6,-3.8,3.6,-5.3).curveTo(3.6,-6.9,2.8,-7.7).curveTo(1.9,-8.6,0.4,-8.6).curveTo(-1.1,-8.6,-2,-7.7).curveTo(-2.9,-6.8,-3.1,-4.7).lineTo(-7.8,-5.2).curveTo(-7.4,-9.1,-5.2,-10.9).curveTo(-2.9,-12.6,0.5,-12.6).curveTo(4.2,-12.6,6.3,-10.6).curveTo(8.4,-8.6,8.4,-5.6).curveTo(8.4,-3.9,7.8,-2.4).curveTo(7.2,-0.9,5.9,0.8).curveTo(5,1.9,2.8,4).lineTo(-0.1,6.8).lineTo(-1.1,8.1).lineTo(8.4,8.1).lineTo(8.4,12.6).closePath();
	this.shape_5.setTransform(-30.6,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#656565").beginStroke().moveTo(-5.7,10.8).curveTo(-8,8.8,-8.3,5.7).lineTo(-3.7,5.1).curveTo(-3.4,6.9,-2.5,7.9).curveTo(-1.5,8.8,-0.1,8.8).curveTo(1.4,8.8,2.4,7.7).curveTo(3.4,6.6,3.4,4.6).curveTo(3.4,2.8,2.4,1.7).curveTo(1.5,0.7,0.1,0.7).curveTo(-0.9,0.7,-2.1,1).lineTo(-1.6,-2.9).curveTo(0.3,-2.8,1.4,-3.7).curveTo(2.4,-4.6,2.4,-6.1).curveTo(2.4,-7.4,1.6,-8.1).curveTo(0.9,-8.9,-0.4,-8.9).curveTo(-1.6,-8.9,-2.5,-8).curveTo(-3.3,-7.2,-3.5,-5.5).lineTo(-8,-6.3).curveTo(-7.5,-8.5,-6.5,-9.9).curveTo(-5.6,-11.2,-4,-12).curveTo(-2.3,-12.8,-0.2,-12.8).curveTo(3.3,-12.8,5.4,-10.5).curveTo(7.2,-8.7,7.2,-6.4).curveTo(7.2,-3.1,3.6,-1.1).curveTo(5.8,-0.7,7.1,0.9).curveTo(8.3,2.6,8.3,4.9).curveTo(8.3,8.1,5.9,10.5).curveTo(3.5,12.8,-0.1,12.8).curveTo(-3.5,12.8,-5.7,10.8).closePath();
	this.shape_6.setTransform(-30.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#656565").beginStroke().moveTo(1.2,12.6).lineTo(1.2,7.5).lineTo(-9,7.5).lineTo(-9,3.3).lineTo(1.8,-12.6).lineTo(5.9,-12.6).lineTo(5.9,3.3).lineTo(9,3.3).lineTo(9,7.5).lineTo(5.9,7.5).lineTo(5.9,12.6).closePath().moveTo(-4.5,3.3).lineTo(1.2,3.3).lineTo(1.2,-5.2).closePath();
	this.shape_7.setTransform(-30.2,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#656565").beginStroke().moveTo(-5.8,10.7).curveTo(-8,8.8,-8.4,5.7).lineTo(-3.6,5.2).curveTo(-3.4,6.8,-2.4,7.8).curveTo(-1.4,8.7,-0.1,8.7).curveTo(1.4,8.7,2.4,7.5).curveTo(3.5,6.3,3.5,3.8).curveTo(3.5,1.5,2.5,0.4).curveTo(1.4,-0.8,-0.2,-0.8).curveTo(-2.3,-0.8,-3.9,1).lineTo(-7.8,0.5).lineTo(-5.4,-12.6).lineTo(7.3,-12.6).lineTo(7.3,-8.1).lineTo(-1.7,-8.1).lineTo(-2.5,-3.8).curveTo(-0.9,-4.6,0.8,-4.6).curveTo(4,-4.6,6.2,-2.3).curveTo(8.4,0,8.4,3.7).curveTo(8.4,6.8,6.6,9.2).curveTo(4.2,12.6,-0.1,12.6).curveTo(-3.6,12.6,-5.8,10.7).closePath();
	this.shape_8.setTransform(-29.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#656565").beginStroke().moveTo(-5.9,9.8).curveTo(-8.4,6.9,-8.3,0.1).curveTo(-8.4,-6.7,-5.8,-9.8).curveTo(-3.2,-12.8,0.8,-12.8).curveTo(3.7,-12.8,5.5,-11.2).curveTo(7.4,-9.6,7.9,-6.6).lineTo(3.3,-6).curveTo(3.1,-7.5,2.4,-8.2).curveTo(1.6,-8.8,0.5,-8.9).curveTo(-1,-8.9,-2,-7.5).curveTo(-3.1,-6.1,-3.4,-1.8).curveTo(-1.6,-3.9,1,-3.9).curveTo(4.1,-3.9,6.2,-1.7).curveTo(8.4,0.7,8.3,4.3).curveTo(8.3,8.1,6.1,10.5).curveTo(3.9,12.8,0.3,12.8).curveTo(-3.5,12.8,-5.9,9.8).closePath().moveTo(-2,0.7).curveTo(-3,1.8,-3,3.9).curveTo(-3,6.3,-1.9,7.6).curveTo(-0.9,8.8,0.6,8.8).curveTo(1.9,8.8,2.8,7.8).curveTo(3.6,6.7,3.6,4.3).curveTo(3.6,1.9,2.7,0.7).curveTo(1.7,-0.4,0.3,-0.4).curveTo(-1.1,-0.4,-2,0.7).closePath();
	this.shape_9.setTransform(-30,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#656565").beginStroke().moveTo(4.4,11.6).curveTo(2.9,10,2.9,6.7).curveTo(2.9,3.2,4.4,1.6).curveTo(5.9,0,8.4,0).curveTo(11,0,12.5,1.6).curveTo(14,3.2,14,6.7).curveTo(14,10,12.5,11.6).curveTo(11,13.3,8.5,13.2).curveTo(5.9,13.3,4.4,11.6).closePath().moveTo(7.2,3.3).curveTo(6.7,4.2,6.6,6.6).curveTo(6.7,9.1,7.2,9.8).curveTo(7.6,10.5,8.4,10.5).curveTo(9.2,10.5,9.6,9.9).curveTo(10.2,9,10.1,6.6).curveTo(10.2,4.2,9.6,3.3).curveTo(9.2,2.7,8.4,2.7).curveTo(7.6,2.7,7.2,3.3).closePath().moveTo(-8.4,13.2).lineTo(5,-13.2).lineTo(8.4,-13.2).lineTo(-4.8,13.2).closePath().moveTo(-12.5,-1.6).curveTo(-14,-3.3,-14,-6.6).curveTo(-14,-10,-12.5,-11.6).curveTo(-11,-13.2,-8.5,-13.2).curveTo(-5.9,-13.2,-4.4,-11.6).curveTo(-2.9,-10,-2.9,-6.6).curveTo(-2.9,-3.3,-4.4,-1.6).curveTo(-5.9,0,-8.4,0).curveTo(-11,-0,-12.5,-1.6).closePath().moveTo(-9.7,-10).curveTo(-10.2,-9.1,-10.2,-6.7).curveTo(-10.2,-4.2,-9.7,-3.3).curveTo(-9.2,-2.8,-8.5,-2.8).curveTo(-7.7,-2.8,-7.3,-3.3).curveTo(-6.7,-4.2,-6.7,-6.7).curveTo(-6.7,-9.1,-7.3,-9.9).curveTo(-7.7,-10.6,-8.5,-10.5).curveTo(-9.2,-10.5,-9.7,-10).closePath();
	this.shape_10.setTransform(19.4,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#656565").beginStroke().moveTo(-5.9,9.8).curveTo(-8.4,6.9,-8.3,0.1).curveTo(-8.4,-6.7,-5.8,-9.8).curveTo(-3.3,-12.8,0.8,-12.8).curveTo(3.7,-12.8,5.5,-11.2).curveTo(7.4,-9.6,7.9,-6.6).lineTo(3.3,-6).curveTo(3.1,-7.5,2.4,-8.2).curveTo(1.6,-8.8,0.5,-8.9).curveTo(-1,-8.9,-2,-7.5).curveTo(-3.1,-6.1,-3.4,-1.8).curveTo(-1.6,-3.9,1,-3.9).curveTo(4.1,-3.9,6.2,-1.7).curveTo(8.4,0.7,8.3,4.3).curveTo(8.3,8.1,6.1,10.5).curveTo(3.9,12.8,0.3,12.8).curveTo(-3.5,12.8,-5.9,9.8).closePath().moveTo(-2,0.7).curveTo(-3,1.8,-3,3.9).curveTo(-3,6.3,-1.9,7.6).curveTo(-0.8,8.8,0.6,8.8).curveTo(1.9,8.8,2.8,7.8).curveTo(3.6,6.7,3.6,4.3).curveTo(3.6,1.9,2.7,0.7).curveTo(1.7,-0.4,0.3,-0.4).curveTo(-1,-0.4,-2,0.7).closePath();
	this.shape_11.setTransform(-25.1,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#656565").beginStroke().moveTo(-5.5,11).curveTo(-8.2,8.9,-8.2,5.2).curveTo(-8.2,3.1,-7.2,1.5).curveTo(-6.2,-0.2,-4,-1.2).curveTo(-5.9,-2,-6.7,-3.3).curveTo(-7.6,-4.7,-7.6,-6.4).curveTo(-7.6,-9.2,-5.6,-11).curveTo(-3.7,-12.8,-0.1,-12.8).curveTo(3.5,-12.8,5.4,-11).curveTo(7.5,-9.2,7.4,-6.4).curveTo(7.4,-4.6,6.5,-3.2).curveTo(5.7,-1.9,4,-1.2).curveTo(6.1,-0.3,7.1,1.3).curveTo(8.3,2.9,8.2,5).curveTo(8.2,8.5,6.1,10.6).curveTo(3.8,12.8,0.1,12.8).curveTo(-3.3,12.8,-5.5,11).closePath().moveTo(-2.7,2.1).curveTo(-3.5,3.3,-3.5,4.8).curveTo(-3.5,6.7,-2.5,7.8).curveTo(-1.4,8.9,0,8.9).curveTo(1.6,9,2.5,7.9).curveTo(3.5,6.8,3.5,4.8).curveTo(3.5,3,2.5,1.9).curveTo(1.5,0.9,0,0.9).curveTo(-1.8,0.9,-2.7,2.1).closePath().moveTo(-2.2,-8.2).curveTo(-3,-7.3,-3,-6).curveTo(-3,-4.5,-2.2,-3.8).curveTo(-1.5,-2.9,-0.1,-3).curveTo(1.3,-2.9,2.1,-3.8).curveTo(3,-4.6,2.9,-6).curveTo(3,-7.3,2.1,-8.2).curveTo(1.3,-9,-0.1,-9).curveTo(-1.4,-9,-2.2,-8.2).closePath();
	this.shape_12.setTransform(-10.7,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#656565").beginStroke().moveTo(-5.9,9.9).curveTo(-8.1,7.2,-8.2,-0.1).curveTo(-8.2,-7.2,-5.7,-10.2).curveTo(-3.6,-12.8,0,-12.8).curveTo(3.7,-12.8,5.7,-10.2).curveTo(8.1,-7.2,8.1,0).curveTo(8.1,7.1,5.7,10.2).curveTo(3.7,12.8,0,12.8).curveTo(-3.7,12.8,-5.9,9.9).closePath().moveTo(-1.5,-8.3).curveTo(-2.3,-7.7,-2.6,-6.3).curveTo(-3.1,-4.4,-3.1,0).curveTo(-3.1,4.4,-2.7,6).curveTo(-2.2,7.7,-1.5,8.2).curveTo(-0.9,8.8,0,8.8).curveTo(0.9,8.8,1.5,8.2).curveTo(2.3,7.7,2.6,6.2).curveTo(3.1,4.4,3.1,0).curveTo(3.1,-4.4,2.6,-6).curveTo(2.3,-7.7,1.5,-8.3).curveTo(0.9,-8.8,0,-8.8).curveTo(-0.9,-8.8,-1.5,-8.3).closePath();
	this.shape_13.setTransform(-5.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:-21.9}},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{x:-20.2}},{t:this.shape}]},3).to({state:[{t:this.shape_1,p:{x:-31.6}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_1,p:{x:-31.6}},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_5,p:{x:-30.6}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_5,p:{x:-30.6}},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_6},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_7,p:{x:-30.2}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_7,p:{x:-30.2}},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_2,p:{x:-29.9}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_8},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_5,p:{x:-11.1}},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_7,p:{x:-10.7}},{t:this.shape_3}]},3).to({state:[{t:this.shape_11},{t:this.shape_9,p:{x:-5.7}},{t:this.shape_10}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_12},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_7,p:{x:-10.7}},{t:this.shape_3}]},19).to({state:[{t:this.shape_11},{t:this.shape_13},{t:this.shape_10}]},7).to({state:[{t:this.shape_2,p:{x:-29.9}},{t:this.shape_12},{t:this.shape_3}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-21.5,104,43.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#666666").beginStroke().moveTo(-7.4,90.1).lineTo(-6.8,80.4).curveTo(-3.5,80.7,0.1,80.6).curveTo(3.5,80.7,6.8,80.4).lineTo(7.4,90.1).closePath().moveTo(-39.9,81.2).lineTo(-35.9,72.4).curveTo(-29.8,75.5,-23.2,77.4).lineTo(-26.3,86.5).closePath().moveTo(25.8,76.8).curveTo(32.4,74.6,38.4,71.3).lineTo(42.6,79.8).lineTo(29.1,85.7).closePath().moveTo(52.1,61.8).curveTo(54.6,59.6,57.1,57.1).curveTo(59.6,54.6,61.8,52.1).lineTo(68.9,58.6).lineTo(58.6,68.9).closePath().moveTo(-68.9,58.4).lineTo(-61.6,51.9).curveTo(-59.4,54.5,-56.9,57.1).curveTo(-54.5,59.5,-51.9,61.6).lineTo(-58.6,68.8).closePath().moveTo(-85.6,29.2).lineTo(-76.4,25.8).curveTo(-74.3,32.3,-71,38.3).lineTo(-79.7,42.6).closePath().moveTo(72.5,36).curveTo(75.6,29.8,77.6,23.2).lineTo(86.4,26.2).lineTo(81.1,39.9).closePath().moveTo(80.5,6.8).curveTo(80.8,3.5,80.7,0).curveTo(80.8,-3.5,80.5,-6.8).lineTo(90.1,-7.4).lineTo(90.1,7.4).closePath().moveTo(-90.1,-7.4).lineTo(-80.2,-6.8).curveTo(-80.5,-3.5,-80.5,0).curveTo(-80.5,3.5,-80.2,6.8).lineTo(-90.1,7.4).closePath().moveTo(-86.5,-26).lineTo(-81.2,-39.8).lineTo(-72.4,-35.7).curveTo(-75.5,-29.6,-77.4,-23).closePath().moveTo(71.3,-38.4).lineTo(79.7,-42.6).lineTo(85.4,-29.2).lineTo(76.8,-25.8).curveTo(74.6,-32.4,71.3,-38.4).closePath().moveTo(-68.9,-58.4).lineTo(-58.6,-68.8).lineTo(-51.9,-61.5).curveTo(-54.5,-59.4,-56.9,-57).curveTo(-59.4,-54.5,-61.6,-51.8).closePath().moveTo(57.1,-57).curveTo(54.6,-59.5,52,-61.7).lineTo(58.6,-68.9).lineTo(68.9,-58.6).lineTo(61.8,-52).curveTo(59.6,-54.5,57.1,-57).closePath().moveTo(-42.7,-79.6).lineTo(-29.3,-85.4).lineTo(-25.9,-76.4).curveTo(-32.5,-74.3,-38.4,-71).closePath().moveTo(23.1,-77.5).lineTo(26.2,-86.5).lineTo(39.8,-81.2).lineTo(35.8,-72.5).curveTo(29.7,-75.6,23.1,-77.5).closePath().moveTo(0.1,-80.6).curveTo(-3.5,-80.6,-6.8,-80.3).lineTo(-7.4,-90.1).lineTo(7.4,-90.1).lineTo(6.8,-80.3).curveTo(3.5,-80.6,0.1,-80.6).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180.1,180.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CCCCCC").beginStroke().moveTo(0,40).lineTo(-0.1,40).lineTo(-7.5,-40).lineTo(7.5,-40).lineTo(0.1,40).lineTo(0,40).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-40,14.9,80);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#ADCA03").beginStroke().moveTo(-1.5,-10.4).lineTo(-0.7,-10.5).lineTo(11.3,3.9).lineTo(11,4.6).lineTo(-11.3,10.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-10.5,22.6,21.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.067)").beginStroke().moveTo(-63.4,63.3).curveTo(-89.5,37.1,-89.6,0).curveTo(-89.5,-37.1,-63.4,-63.4).curveTo(-37.1,-89.5,0,-89.6).curveTo(37.1,-89.5,63.3,-63.4).curveTo(89.6,-37.1,89.5,0).curveTo(89.6,37.1,63.3,63.3).curveTo(37.1,89.6,0,89.5).curveTo(-37.1,89.6,-63.4,63.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-89.5,179.1,179.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.front_plate();
	this.instance.setTransform(-95.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-52,191,104);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stripe();
	this.instance.setTransform(-3.1,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-99.6,6,199);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.green();
	this.instance.setTransform(-34,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-34.5,68,69);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#666666").beginStroke().moveTo(-11.5,11.5).curveTo(-16.2,6.7,-16.3,0).curveTo(-16.2,-6.7,-11.5,-11.5).curveTo(-6.7,-16.2,0,-16.3).curveTo(6.7,-16.2,11.5,-11.5).curveTo(16.2,-6.7,16.3,0).curveTo(16.2,6.7,11.5,11.5).curveTo(6.7,16.2,0,16.3).curveTo(-6.7,16.2,-11.5,11.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.title_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ПРОТЕСТИРУЙ СВОЙ", "bold 35px 'Arial'", "#656565");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 527;
	this.text.setTransform(-2,-103.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.5,-103.7,531.1,207.5);


(lib.title_device = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ДЕВАЙС", "bold 35px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 527;
	this.text.setTransform(-2,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.5,-42.1,531,84.2);


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТАНОВИТЕ ПРИЛОЖЕНИЕ\nДЛЯ УЛУЧШЕНИЯ РАБОТЫ\nВАШЕГО УСТРОЙСТВА", "bold 30px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 596;
	this.text.setTransform(-2,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-67.3,600.2,207.5);


(lib.pannel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,2.9).curveTo(-4.1,1.8,-4.7,0.6).curveTo(-5.5,-0.7,-6.5,-1.2).lineTo(-6.2,-3.2).lineTo(6.5,-1.3).lineTo(6.2,1.1).lineTo(-3,-0.2).curveTo(-1.9,1.3,-1.7,3.2).closePath();
	this.shape.setTransform(-138.7,92.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,3.6).curveTo(-6.3,2.8,-6.5,0.9).curveTo(-6.8,-0.9,-5.5,-2.3).curveTo(-4.2,-3.6,-0.6,-4.2).curveTo(3.1,-4.6,4.8,-3.6).curveTo(6.2,-2.7,6.5,-0.9).curveTo(6.7,1,5.6,2.2).curveTo(4.2,3.7,0.6,4.1).lineTo(-1.6,4.3).curveTo(-3.6,4.3,-4.8,3.6).closePath().moveTo(-0.2,-1.6).curveTo(-2.5,-1.3,-3.3,-0.9).curveTo(-4.1,-0.6,-4.3,-0.2).curveTo(-4.6,0.2,-4.5,0.6).curveTo(-4.5,1,-4.1,1.3).curveTo(-3.8,1.7,-3,1.8).curveTo(-2,1.9,0.2,1.6).curveTo(2.5,1.3,3.3,1).curveTo(4,0.6,4.3,0.2).curveTo(4.5,-0.2,4.5,-0.6).curveTo(4.4,-1.1,4.1,-1.4).curveTo(3.7,-1.7,3,-1.8).lineTo(2.5,-1.8).curveTo(1.5,-1.8,-0.2,-1.6).closePath();
	this.shape_1.setTransform(137,93.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,3.6).curveTo(-6.3,2.7,-6.5,0.9).curveTo(-6.8,-1,-5.5,-2.3).curveTo(-4.2,-3.7,-0.6,-4.1).curveTo(3.1,-4.7,4.8,-3.6).curveTo(6.2,-2.8,6.5,-0.9).curveTo(6.7,0.9,5.6,2.2).curveTo(4.2,3.7,0.6,4.2).lineTo(-1.6,4.3).curveTo(-3.6,4.3,-4.8,3.6).closePath().moveTo(-0.2,-1.6).curveTo(-2.5,-1.3,-3.3,-1).curveTo(-4.1,-0.6,-4.3,-0.3).curveTo(-4.6,0.1,-4.5,0.6).curveTo(-4.5,1.1,-4.1,1.4).curveTo(-3.8,1.7,-3,1.8).curveTo(-2,1.9,0.2,1.6).curveTo(2.5,1.3,3.3,0.9).curveTo(4,0.6,4.3,0.2).curveTo(4.5,-0.2,4.5,-0.6).curveTo(4.4,-1.1,4.1,-1.4).curveTo(3.7,-1.7,3,-1.8).lineTo(2.5,-1.8).curveTo(1.5,-1.8,-0.2,-1.6).closePath();
	this.shape_2.setTransform(135.7,84);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.6,1).lineTo(2.6,-0.3).curveTo(1.2,-1.4,0.4,-3.2).lineTo(2.6,-3.4).curveTo(3,-2.5,4,-1.5).curveTo(5.1,-0.6,6.3,-0.3).lineTo(6.6,1.7).lineTo(-6.2,3.5).closePath();
	this.shape_3.setTransform(134.5,73.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.7,4.2).curveTo(-6.8,2.8,-6.8,1.3).curveTo(-6.7,-0.2,-5.6,-1.4).lineTo(-3.9,0.4).curveTo(-4.5,1,-4.5,1.7).curveTo(-4.6,2.4,-4.2,2.9).curveTo(-3.7,3.6,-2.9,3.6).curveTo(-2,3.7,-1,2.9).curveTo(-0.1,2.2,0,1.4).curveTo(0.2,0.6,-0.4,-0.1).curveTo(-1,-0.9,-2.3,-1).lineTo(-3.3,-2.8).lineTo(2.8,-5.9).lineTo(6.8,-0.7).lineTo(5,0.7).lineTo(2.1,-3).lineTo(0.2,-1.9).curveTo(1,-1.6,1.5,-0.9).curveTo(2.5,0.4,2.3,2.1).curveTo(2.1,3.7,0.5,4.9).curveTo(-0.7,5.9,-2.3,5.9).lineTo(-2.4,5.9).curveTo(-4.4,5.9,-5.7,4.2).closePath();
	this.shape_4.setTransform(119.4,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.1,3.6).curveTo(-5,2,-2.1,1.2).curveTo(0.7,0.3,3.5,0.4).lineTo(0.1,-4.1).lineTo(1.9,-5.5).lineTo(7.1,1.2).lineTo(5.7,2.3).curveTo(4.2,2.1,2,2.4).curveTo(-0.2,2.7,-2.2,3.6).curveTo(-4.3,4.5,-5.6,5.5).closePath();
	this.shape_5.setTransform(113.2,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,5.6).curveTo(-5,4.6,-5.3,2.7).curveTo(-5.5,0.9,-3.5,-2.2).curveTo(-1.6,-5.3,0.3,-6).curveTo(1.9,-6.5,3.5,-5.6).curveTo(5.1,-4.6,5.3,-2.9).curveTo(5.5,-0.9,3.6,2.2).curveTo(1.7,5.3,-0.3,6).curveTo(-0.9,6.2,-1.4,6.2).curveTo(-2.4,6.2,-3.4,5.6).closePath().moveTo(1.6,-4).curveTo(1.1,-4,0.6,-3.4).curveTo(-0.1,-2.8,-1.3,-0.9).curveTo(-2.5,1.1,-2.8,1.9).curveTo(-3.1,2.7,-2.9,3.2).curveTo(-2.8,3.6,-2.4,3.8).curveTo(-2,4.1,-1.6,4).curveTo(-1.1,4,-0.5,3.5).curveTo(0.2,2.8,1.4,0.8).curveTo(2.6,-1.1,2.8,-1.9).curveTo(3.1,-2.8,2.9,-3.2).curveTo(2.8,-3.6,2.4,-3.9).curveTo(2.1,-4,1.7,-4).lineTo(1.6,-4).closePath();
	this.shape_6.setTransform(70.4,-11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,5.5).curveTo(-5.1,4.5,-5.4,2.5).curveTo(-5.7,0.6,-3.9,-2.3).curveTo(-2,-5.3,-0,-6).curveTo(1.9,-6.6,3.7,-5.5).curveTo(4.9,-4.7,5.3,-3.5).curveTo(5.7,-2.3,5.1,-0.8).lineTo(2.9,-1.9).curveTo(3.2,-2.6,3.1,-3).curveTo(3,-3.5,2.5,-3.9).curveTo(1.8,-4.3,1,-4).curveTo(0.2,-3.6,-1.2,-1.8).curveTo(0.2,-2.3,1.4,-1.5).curveTo(2.7,-0.7,3,0.9).curveTo(3.3,2.4,2.3,4).curveTo(1.3,5.7,-0.4,6.1).lineTo(-1.3,6.2).curveTo(-2.4,6.2,-3.5,5.5).closePath().moveTo(-1.3,-0.4).curveTo(-1.9,-0.2,-2.5,0.7).curveTo(-3.2,1.8,-3.1,2.6).curveTo(-2.9,3.5,-2.3,3.9).curveTo(-1.8,4.2,-1.1,4).curveTo(-0.4,3.8,0.3,2.8).curveTo(0.9,1.7,0.8,0.9).curveTo(0.7,0.2,0.1,-0.2).curveTo(-0.3,-0.5,-0.7,-0.5).lineTo(-1.3,-0.4).closePath();
	this.shape_7.setTransform(62.2,-16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,5.6).curveTo(-4.1,4.7,-4.3,3.1).lineTo(-1.9,2.8).curveTo(-1.8,3.6,-1.2,4.1).curveTo(-0.7,4.6,-0,4.5).curveTo(0.7,4.5,1.3,3.9).curveTo(1.8,3.3,1.8,2).curveTo(1.7,0.8,1.2,0.2).curveTo(0.7,-0.4,-0.2,-0.4).curveTo(-1.2,-0.3,-2.1,0.6).lineTo(-4.1,0.4).lineTo(-2.9,-6.4).lineTo(3.6,-6.5).lineTo(3.7,-4.2).lineTo(-1,-4.1).lineTo(-1.4,-1.9).curveTo(-0.6,-2.3,0.3,-2.3).curveTo(2,-2.3,3.1,-1.2).curveTo(4.3,-0,4.3,1.9).curveTo(4.3,3.5,3.5,4.7).curveTo(2.2,6.5,-0,6.5).lineTo(-0.2,6.5).curveTo(-1.9,6.5,-2.9,5.6).closePath();
	this.shape_8.setTransform(4.9,-33.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.6,3.9).lineTo(-4.6,4).lineTo(-4.7,1.8).lineTo(0.8,-6.5).lineTo(2.9,-6.5).lineTo(3,1.7).lineTo(4.6,1.7).lineTo(4.7,3.9).lineTo(3,3.9).lineTo(3.1,6.4).lineTo(0.7,6.5).closePath().moveTo(-2.4,1.8).lineTo(0.6,1.7).lineTo(0.5,-2.7).closePath();
	this.shape_9.setTransform(-5.3,-33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.6,5.9).curveTo(-1.2,5.5,-3.4,2.5).curveTo(-5.5,-0.4,-5.4,-2.5).curveTo(-5.5,-4.1,-3.9,-5.3).curveTo(-2.4,-6.4,-0.8,-5.9).curveTo(1.2,-5.4,3.4,-2.4).curveTo(5.5,0.5,5.5,2.5).curveTo(5.5,4.2,3.9,5.3).curveTo(2.9,6.1,1.7,6.1).curveTo(1.2,6.1,0.6,5.9).closePath().moveTo(-2.7,-3.6).curveTo(-3,-3.3,-3.2,-2.9).curveTo(-3.3,-2.5,-3,-1.8).curveTo(-2.6,-0.9,-1.3,1).curveTo(0,2.8,0.8,3.4).curveTo(1.4,3.9,1.9,3.9).curveTo(2.3,4,2.7,3.7).curveTo(3,3.4,3.1,3).curveTo(3.3,2.5,3,1.8).curveTo(2.6,0.9,1.2,-0.9).curveTo(-0.1,-2.8,-0.8,-3.3).curveTo(-1.4,-3.8,-1.9,-3.8).lineTo(-2,-3.9).curveTo(-2.4,-3.9,-2.7,-3.6).closePath();
	this.shape_10.setTransform(-68.9,-17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,6.1).curveTo(-0.5,6,-1.7,4.8).lineTo(0.1,3.2).curveTo(0.7,3.8,1.4,3.9).curveTo(2.1,4,2.7,3.6).curveTo(3.3,3.2,3.4,2.3).curveTo(3.4,1.6,2.9,0.8).curveTo(2.3,0,1.6,-0.1).curveTo(0.9,-0.2,0.3,0.2).lineTo(-0.5,1).lineTo(-1.5,-0.8).curveTo(-0.7,-1.3,-0.5,-2).curveTo(-0.4,-2.7,-0.9,-3.3).curveTo(-1.2,-3.8,-1.8,-3.9).curveTo(-2.3,-4,-2.8,-3.6).curveTo(-3.4,-3.2,-3.4,-2.6).curveTo(-3.5,-2,-3.1,-1.3).lineTo(-5.2,-0.2).curveTo(-5.7,-1.3,-5.7,-2.2).curveTo(-5.7,-3,-5.3,-3.9).curveTo(-4.8,-4.7,-4,-5.3).curveTo(-2.5,-6.4,-0.9,-6.1).curveTo(0.3,-5.9,1.1,-4.9).curveTo(2.1,-3.6,1.2,-1.6).curveTo(2.2,-2.1,3.2,-1.8).curveTo(4.3,-1.6,5,-0.6).curveTo(6,0.7,5.7,2.4).curveTo(5.4,4.2,3.9,5.3).curveTo(2.7,6.1,1.4,6.1).lineTo(1,6.1).closePath();
	this.shape_11.setTransform(-77,-11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0,5.8).lineTo(1.3,3.7).curveTo(2,4.1,2.7,4).curveTo(3.5,3.9,3.9,3.4).curveTo(4.4,2.8,4.2,2).curveTo(4,1.2,3,0.4).curveTo(2.1,-0.3,1.3,-0.3).curveTo(0.5,-0.3,-0,0.4).curveTo(-0.7,1.2,-0.4,2.5).lineTo(-1.9,3.9).lineTo(-6.4,-1.3).lineTo(-2.3,-6.4).lineTo(-0.5,-5).lineTo(-3.4,-1.3).lineTo(-1.9,0.4).curveTo(-1.8,-0.5,-1.2,-1.2).curveTo(-0.2,-2.5,1.5,-2.7).curveTo(3.1,-2.8,4.6,-1.6).curveTo(5.8,-0.6,6.2,0.8).curveTo(6.8,2.9,5.4,4.7).curveTo(4.3,6.1,2.8,6.3).lineTo(2.1,6.4).curveTo(1,6.4,-0,5.8).closePath();
	this.shape_12.setTransform(-115.8,30.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,-0.8).curveTo(-3,1,-3.6,2.8).lineTo(-5.4,1.5).curveTo(-5,0.5,-5,-0.9).curveTo(-5,-2.4,-5.7,-3.4).lineTo(-4.4,-5).lineTo(5.7,3.1).lineTo(4.2,5).closePath();
	this.shape_13.setTransform(-121.2,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.plate();
	this.instance.setTransform(253.5,-143.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.5,-143.5,507,287);


(lib.button_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("НАЧАТЬ ТЕСТ", "bold 35px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 470;
	this.text.setTransform(-2,-62.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-62.6,474.2,125.3);


(lib.button_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("УСТАНОВИТЬ", "bold 35px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 295;
	this.text.setTransform(-2,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#666666").setStrokeStyle(3,2,0,3).moveTo(-221.4,-53.5).lineTo(221.4,-53.5).lineTo(221.4,53.5).lineTo(-221.4,53.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.9,-54.9,445.8,160.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(9));

	// Слой 1 - копия
	this.instance = new lib.Символ24();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},8).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.53,alpha:0.5},6,cjs.Ease.get(-1)).to({scaleX:0.06,alpha:0},8,cjs.Ease.get(1)).to({scaleX:0.5,alpha:0.465},7,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243,-65.1,486.1,130.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-40,14.9,80);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180.1,180.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,50,1,1,0,0,0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},139).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-40,14.9,80);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-15.4,y:12.8},7,cjs.Ease.get(-1)).to({x:0,y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-10.5,22.6,21.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pannel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.5,-143.5,507,287);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11_1();
	this.instance.setTransform(170.9,-143.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(-66,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-153.6,248.2,211.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ4();
	this.instance.setTransform(126,0,1,0.019);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(108,0,1,0.019);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(90,0,1,0.019);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(72,0,1,0.019);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(54,0,1,0.019);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(36,0,1,0.019);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// Слой 1 - копия
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(18,0,1,0.019);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// Слой 1
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(0,0,1,0.019);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-1.9,6,3.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(60.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.26,scaleY:1.26},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({scaleX:1.26,scaleY:1.26},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(3));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-60.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.28,scaleY:1.28},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,-16.2,153.5,32.5);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.title_main = new lib.title_main();
	this.title_main.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.title_main).wait(1));

	// Слой 2
	this.title_device = new lib.title_device();
	this.title_device.setTransform(-0.5,-15.6);

	this.timeline.addTween(cjs.Tween.get(this.title_device).wait(1));

	// Слой 2 - копия
	this.instance = new lib.Символ21();
	this.instance.setTransform(0,-58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266,-123.5,531.6,229.3);


(lib.plate_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.parent.bg.gotoAndPlay(15);
	}
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(10).call(this.frame_139).wait(1));

	// Слой 7
	this.title_2 = new lib.title_2();
	this.title_2.setTransform(0,-189);
	this.title_2.alpha = 0;
	this.title_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_2).wait(133).to({_off:false},0).to({alpha:1},6).wait(1));

	// Слой 6
	this.instance = new lib.Символ12();
	this.instance.setTransform(0,-216,0.659,0.659);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({alpha:1},5).wait(90).to({alpha:0},6).to({_off:true},1).wait(25));

	// Слой 4
	this.title = new lib.title();
	this.title.setTransform(0,-176);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1).to({regX:-0.2,regY:-8.9,x:-0.2,y:-192.8,alpha:0.802},0).wait(1).to({y:-199.4,alpha:0.637},0).wait(1).to({y:-204.3,alpha:0.515},0).wait(1).to({y:-207.8,alpha:0.427},0).wait(1).to({y:-210.6,alpha:0.358},0).wait(1).to({y:-212.9,alpha:0.3},0).wait(1).to({y:-215,alpha:0.248},0).wait(1).to({y:-216.7,alpha:0.204},0).wait(1).to({y:-218.3,alpha:0.166},0).wait(1).to({y:-219.5,alpha:0.134},0).wait(1).to({y:-220.6,alpha:0.107},0).wait(1).to({y:-221.6,alpha:0.083},0).wait(1).to({y:-222.4,alpha:0.064},0).wait(1).to({y:-223,alpha:0.047},0).wait(1).to({y:-223.6,alpha:0.032},0).wait(1).to({y:-224.1,alpha:0.02},0).wait(1).to({y:-224.5,alpha:0.009},0).wait(1).to({regX:0,regY:0,x:0,y:-216,alpha:0},0).to({_off:true},1).wait(121));

	// Слой 3
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(0.6,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(129).to({y:89.3},5,cjs.Ease.get(-1)).to({y:120.3},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(-0.6,93.8,1,1,-140.3,0,0,-66.2,45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({scaleX:1,scaleY:1,rotation:-73.9,x:-0.7},18,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-0.6,y:93.9},19,cjs.Ease.get(1)).to({rotation:-4},3).to({rotation:0},3).to({rotation:-4},3).to({rotation:0},3).to({rotation:-4},3).to({rotation:0},3).to({rotation:-4},3).to({rotation:0},3).to({rotation:-4},3).to({rotation:0},3).to({regX:-66.3,scaleX:1,scaleY:1,rotation:-12.8},10,cjs.Ease.get(-1)).to({regX:-66.2,scaleX:1,scaleY:1,rotation:-30,y:93.8},10,cjs.Ease.get(1)).wait(15).to({scaleX:1,scaleY:1,rotation:-29.9,x:-0.7,y:124.8},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,x:-0.6,y:155.8},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({y:31},5,cjs.Ease.get(-1)).to({y:62},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.1,-299.5,584.7,472.7);


(lib.button_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Символ3();
	this.instance.setTransform(1.5,2.1);
	this.instance.alpha = 0.828;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},12).to({alpha:0.828},12).wait(1));

	// Слой 1
	this.instance_1 = new lib.button();
	this.instance_1.setTransform(-78.5,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

	// Слой 2
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(-0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.83,scaleY:0.83},12,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-90.3,179.1,179.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(0,0.1);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(0,-50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90.2,180.1,180.4);


(lib.button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(139).call(this.frame_139).wait(1));

	// Слой 2
	this.button_txt = new lib.button_txt();
	this.button_txt.setTransform(0,-81.1);

	this.timeline.addTween(cjs.Tween.get(this.button_txt).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.608},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.198},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(120));

	// Слой 1
	this.button_in = new lib.button_in();
	this.button_in.setTransform(0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.button_in).wait(1).to({regX:-0.3,regY:-0.8,scaleX:0.82,scaleY:0.82,x:0.1,y:0.2,alpha:0.774},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:0.2,y:0.3,alpha:0.608},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:0.493},0).wait(1).to({scaleX:0.54,scaleY:0.54,y:0.4,alpha:0.409},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0.344},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:0.5,alpha:0.287},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:0.3,alpha:0.238},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.198},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:0.6,alpha:0.163},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.134},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.109},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.087},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.068},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.052},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.038},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.026},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.015},0).wait(1).to({scaleX:0.22,scaleY:0.22,y:0.7,alpha:0.007},0).wait(1).to({regX:0,regY:0,scaleX:0.21,scaleY:0.21,x:0.4,y:0.8,alpha:0},0).to({_off:true},1).wait(120));

	// Слой 9
	this.button_2 = new lib.button_2();
	this.button_2.setTransform(0,99);
	this.button_2.alpha = 0;
	this.button_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(133).to({_off:false},0).wait(1).to({regY:25.3,y:76.4,alpha:0.479},0).wait(1).to({y:55.3,alpha:0.69},0).wait(1).to({y:41.3,alpha:0.83},0).wait(1).to({y:32.7,alpha:0.916},0).wait(1).to({y:27.5,alpha:0.968},0).wait(1).to({regY:0,y:-1,alpha:1},0).wait(1));

	// Слой 7
	this.instance = new lib.Символ19();
	this.instance.setTransform(-2,0.9);
	this.instance.alpha = 0.039;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({alpha:1},4).wait(99).to({regX:-0.5,regY:-0.1,x:-2.5,y:0.8,alpha:0.985},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.558},0).wait(1).to({alpha:0.344},0).wait(1).to({regX:0,regY:0,x:-2,y:0.9,alpha:0},0).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(0,-0.1,0.267,0.267);
	this.instance_1.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.042},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.047},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.054},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.062},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.072},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.085},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.118},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.14},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.167},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.198},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.236},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.284},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.338},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.404},0).wait(1).to({scaleX:0.61,scaleY:0.61,alpha:0.49},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.612},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.785},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).to({scaleX:1.25,scaleY:1.25},4,cjs.Ease.get(1)).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(99).to({scaleX:0.99,scaleY:0.99,alpha:0.985},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.965},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.906},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.859},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.793},0).wait(1).to({scaleX:0.79,scaleY:0.79,alpha:0.694},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.558},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.344},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-143.7,474.2,233.3);


// stage content:



(lib.app_2_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var clickkyTAG = clickkyTAG;
		
		window.onmessage = function(message) {
			if(
			typeof message === 'object'
			&& typeof message.data === 'object'
			&& typeof message.data.key === 'string'
			&& message.data.key === 'clickky_banner_70096'
			) {
									
			_this.plate.title.title_main.text.text = message.data.header_1;
			_this.plate.title_2.text.text = message.data.header_2;
			_this.button.button_txt.text.text = message.data.button;
			_this.button.button_2.text.text = message.data.button_2;
			clickkyTAG = message.data.target_url;
			}
		};
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
			iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    iPad: function() {
		        return navigator.userAgent.match(/iPad/i);
		    },
			iPhone: function() {
		        return navigator.userAgent.match(/iPhone/i);
		    },
			iPod: function() {
		        return navigator.userAgent.match(/iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		};
		
		if( isMobile.Android() ){ 
			_this.plate.title.title_device.text.text = 'ANDROID';
		}
		
		if( isMobile.Windows() ){ 
			_this.plate.title.title_device.text.text = 'WINDOWS PHONE';
		}
		if( isMobile.iPad() ){ 
			_this.plate.title.title_device.text.text = 'IPAD';
		}
		if( isMobile.iPhone() ){ 
			_this.plate.title.title_device.text.text = 'IPHONE';
		}
		if( isMobile.iPod() ){ 
			_this.plate.title.title_device.text.text = 'IPOD';
		}
		
		
		//Resize
		
		window._setCanvasSize = function() {
			
			var windowSize = getWindowSize();
			stage.canvas.width = windowSize.width;
			stage.canvas.height = windowSize.height;
			
			_this.bg.x = stage.canvas.width/2;
			_this.bg.y = stage.canvas.height/2;
			
			_this.shape_left.x = 0;
			_this.shape_left.y = stage.canvas.height/2;
			
			_this.shape_right.x = stage.canvas.width;
			_this.shape_right.y = stage.canvas.height/2;
			
			_this.plate.x = stage.canvas.width/2;
			_this.plate.y = stage.canvas.height/3;
			
			_this.button.x = stage.canvas.width/2;
			_this.button.y = (stage.canvas.height/2)+(stage.canvas.height/3);
			
			//Scale
		
			_this.bg.scaleX = 0.9;
			_this.bg.scaleY = 0.9;
			
			_this.shape_right.scaleX = 0.6;
			_this.shape_right.scaleY = 0.6;
			
			_this.shape_left.scaleX = 0.6;
			_this.shape_left.scaleY = 0.6;
		
			_this.plate.scaleX = 0.6;
			_this.plate.scaleY = 0.6;
			
			_this.button.scaleX = 0.6;
			_this.button.scaleY = 0.6;
			
			if(stage.canvas.width > 767){
			
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
			
			_this.shape_left.scaleX = 1.5;
			_this.shape_left.scaleY = 1.5;
				
			_this.shape_right.scaleX = 1.5;
			_this.shape_right.scaleY = 1.5;
		
			_this.plate.scaleX = 1;
			_this.plate.scaleY = 1;
				
			_this.button.scaleX = 0.9;
			_this.button.scaleY = 0.9;
			
			}
			
			if(stage.canvas.width > stage.canvas.height && stage.canvas.width < 767){
			
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
			
			_this.shape_left.scaleX = 1.5;
			_this.shape_left.scaleY = 1.5;
				
			_this.shape_right.scaleX = 1.5;
			_this.shape_right.scaleY = 1.5;
		
			_this.plate.scaleX = 0.5;
			_this.plate.scaleY = 0.5;
				
			_this.button.scaleX = 0.5;
			_this.button.scaleY = 0.5;
			
			_this.button.x = (stage.canvas.width/2)+(stage.canvas.width/4);
			_this.button.y = stage.canvas.height/1.8;
				
			_this.plate.x = stage.canvas.width/3.1;
			_this.plate.y = stage.canvas.height/2;
				
			}
		
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		//Actions
			
		var onClick_1 = function() {
			_this.plate.gotoAndPlay(1);
			_this.button.gotoAndPlay(1);
			_this.bg.gotoAndPlay(1);
			 event.preventDefault(); 
			
			stage.canvas.removeEventListener("click", onClick_1);
			stage.canvas.addEventListener("click", onClick);
		};
		
		var onClick = function(evt) {
			console.log('click')
			if(clickkyTAG){
			window.open(clickkyTAG, "_blank");
			}
		};
		
		stage.canvas.addEventListener("click", onClick_1, false);
		
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.plate = new lib.plate_1();
	this.plate.setTransform(513,248,1,1,0,0,0,0,-105);

	this.timeline.addTween(cjs.Tween.get(this.plate).wait(1));

	// Слой 2
	this.button = new lib.button_1();
	this.button.setTransform(511.7,624.7);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 4
	this.shape_right = new lib.Символ5();
	this.shape_right.setTransform(1026.1,426.3,1.628,4.137,0,0,180,-67,4.9);
	this.shape_right.alpha = 0.039;

	this.shape_left = new lib.Символ5();
	this.shape_left.setTransform(-1.9,426.3,1.628,4.137,0,0,0,-70.2,4.9);
	this.shape_left.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_left},{t:this.shape_right}]}).wait(1));

	// Слой 1 - копия
	this.bg = new lib.Символ22();
	this.bg.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1024,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
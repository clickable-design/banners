(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 685,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg?1460733414344", id:"bg"},
		{src:"images/head.png?1460733414344", id:"head"},
		{src:"images/icecream.png?1460733414344", id:"icecream"},
		{src:"images/ss.png?1460733414344", id:"ss"},
		{src:"images/sss.png?1460733414344", id:"sss"},
		{src:"images/ssss.png?1460733414344", id:"ssss"},
		{src:"images/stripes.png?1460733414344", id:"stripes"},
		{src:"images/tounge.png?1460733414344", id:"tounge"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,231);


(lib.icecream = function() {
	this.initialize(img.icecream);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,375);


(lib.ss = function() {
	this.initialize(img.ss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,48);


(lib.sss = function() {
	this.initialize(img.sss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,54);


(lib.ssss = function() {
	this.initialize(img.ssss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,48);


(lib.stripes = function() {
	this.initialize(img.stripes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,614,8);


(lib.tounge = function() {
	this.initialize(img.tounge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,170);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tounge();
	this.instance.setTransform(-58.5,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-85,117,170);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stripes();
	this.instance.setTransform(-888.1,-4);

	this.instance_1 = new lib.stripes();
	this.instance_1.setTransform(-307,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-888.1,-4,1195.2,8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.847)").s().p("A+xH4QhGAAAAhMIAAtXQAAhMBGAAMA9jAAAQBGAAAABMIAANXQAABMhGAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-50.5,408.1,101);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ssss();
	this.instance.setTransform(-138.7,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.7,-24.1,277,48);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sss();
	this.instance.setTransform(-149.6,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-26.9,299,54);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ss();
	this.instance.setTransform(-116.1,-23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.1,-23.8,232,48);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-319.8,-342.5,1.066,2.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.8,-342.5,639.7,685);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icecream();
	this.instance.setTransform(-76.5,-139);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-139,190,375);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.setTransform(-120.5,-115.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-115.5,241,231);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-610.9,0);

	this.instance_1 = new lib.Символ34();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1499.1,-4,1806.1,8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.alpha = 0.809;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},15).to({alpha:0.809},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-50.5,408.1,101);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#69150D").s().p("ArSCKQgcgLgVgVQgWgVgLgdQgLgcAAggQAAgfAMgaQANgbAWgUQAVgTAdgKQAcgLAeAAQAeAAAcALQAcAKAXATQAVAUANAbQAMAaAAAfQAAAggLAcQgLAdgVAVQgVAVgdALQgcALgiAAQghAAgdgLgAq7hDQgSALgLARQgMAQAAATQAAAXAMATQAKATATALQASALAVAAQAWAAASgLQASgLALgTQALgTAAgXQgBgTgKgQQgLgRgTgLQgRgLgWAAQgVAAgSALgAnzBVQAPAAAIgGQAHgGAEgVQAEgVAAgnIABiDIDSAAIAAEXIhJAAIAAjZIhDAAQAABJgDAkQgCAmgJAaQgJAbgUAMQgWANglAAgAN3CMIAAkXIBJAAIAABdIApAAQAgAAAXALQAWAJALAWQAMATAAAhQgBAfgMAVQgNAUgXAKQgXAKgeAAgAPABRIAMAAQATAAAKgCQAKgCAHgHQAGgIAAgQQAAgQgHgIQgHgIgKgBIgogCgALXCMIAAjZIg8AAIAAg+IDBAAIAAA+Ig8AAIAADZgAI3CMIAAiqIgBAAIiFCqIhJAAIAAkXIBJAAIAACqIABAAICFiqIBJAAIAAEXgADwCMIAAhzQgJAFgVAIQgVAIgZAAQgRAAgQgFQgQgHgMgLQgMgKgIgOQgHgPAAgSIAAhpIBJAAIAABdQAAAQALAJQALAHARAAQANAAAQgFIAXgLIAAhtIBIAAIAAEXgAiPCMIAihHIh5jQIBUAAIBJCHIA6iHIBKAAIh/EXgAuZCMIAAjdIhqAAIAADdIhJAAIAAkXID7AAIAAEXg");
	this.shape.setTransform(0.9,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 - копия
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().rr(-204.05,-46,408.1,92,7);
	this.shape_1.setTransform(0,1.5,1,1.131);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-50.5,408.1,104.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.setTransform(-8.6,67.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({scaleX:1.08,scaleY:1.08,x:1.8,y:69.7},4,cjs.Ease.get(-1)).to({regX:-0.1,scaleX:1.17,scaleY:1.17,x:14.8,y:72},5,cjs.Ease.get(1)).to({regX:0,scaleX:1.09,scaleY:1.09,x:3.2,y:70},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-8.6,y:67.9},5,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:1.06,scaleY:1.06,x:8.9,y:2.8},4,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:20,y:2.4},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:10,y:2.7},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:3},5,cjs.Ease.get(1)).wait(20));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-33.5,-68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.06,scaleY:1.06,x:-26.4,y:-69.6},4,cjs.Ease.get(-1)).to({regX:-0.1,regY:-0.1,scaleX:1.14,scaleY:1.14,x:-17.6,y:-71.5},5,cjs.Ease.get(1)).to({scaleX:1.07,scaleY:1.07,x:-25.6,y:-69.8},5,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-33.5,y:-68.1},5,cjs.Ease.get(1)).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-92,299,183.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},25).to({alpha:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.8,-342.5,639.7,685);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-319.8,342.5,1.066,2.283,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.8,-342.5,639.7,685);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.setTransform(-132.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1,x:-132.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.2,y:27.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.3,x:-132.3,y:27.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.5,x:-132.1,y:27.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.7,x:-132,y:27.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:1,x:-131.8,y:27.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:1.3,x:-131.5,y:28},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:1.7,x:-131.3,y:28.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:2,x:-131,y:28.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:2.5,x:-130.7,y:28.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:2.9,x:-130.4,y:29.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:3.3,x:-130.1,y:29.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:3.7,x:-129.9,y:29.8},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:4,x:-129.7,y:30},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:4.2,x:-129.5,y:30.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:4.5,x:-129.4,y:30.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:4.6,x:-129.3,y:30.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:4.8,x:-129.2,y:30.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:4.9,x:-129.1,y:30.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-129,y:30.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:4.9,x:-129.1,y:30.7},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:4.8,x:-129.2,y:30.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:4.6,x:-129.3,y:30.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:4.4,x:-129.4,y:30.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:4.2,x:-129.6,y:30.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:3.9,x:-129.7,y:30},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:3.6,x:-129.9,y:29.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:3.2,x:-130.2,y:29.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:2.8,x:-130.5,y:29.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:2.3,x:-130.7,y:28.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:1.9,x:-131.1,y:28.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:1.5,x:-131.3,y:28.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:1.2,x:-131.6,y:28},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:0.9,x:-131.8,y:27.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.7,x:-132,y:27.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.5,x:-132.1,y:27.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.3,x:-132.3,y:27.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.2,x:-132.4,y:27.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1,y:27},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-132.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(-94.5,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:18.5,regY:48.5,x:-75.9,y:114.5},0).wait(1).to({x:-75.7,y:114.8},0).wait(1).to({scaleX:1,scaleY:1,x:-75.5,y:115.3},0).wait(1).to({x:-75.2,y:116},0).wait(1).to({scaleX:1,scaleY:1,x:-74.7,y:116.8},0).wait(1).to({scaleX:1,scaleY:1,x:-74.1,y:117.9},0).wait(1).to({scaleX:1,scaleY:1,x:-73.5,y:119.1},0).wait(1).to({scaleX:1,scaleY:1,x:-72.8,y:120.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-71.9,y:122.2},0).wait(1).to({regX:0,regY:0,scaleX:0.99,scaleY:0.99,x:-89.3,y:75.9},0).wait(1).to({regX:18.5,regY:48.5,scaleX:0.99,scaleY:0.99,x:-69.9,y:125.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-69,y:127.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-68.2,y:129.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-67.4,y:130.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-66.7,y:132.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-66.2,y:133.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-65.7,y:134.1},0).wait(1).to({x:-65.3,y:134.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-65,y:135.5},0).wait(1).to({x:-64.7,y:135.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-64.6,y:136.2},0).wait(1).to({regX:0,regY:0,x:-82.7,y:88.7},0).wait(1).to({regX:18.5,regY:48.5,x:-64.6,y:136.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-64.7,y:135.9},0).wait(1).to({x:-65,y:135.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-65.3,y:134.8},0).wait(1).to({x:-65.8,y:134},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-66.3,y:133},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-66.9,y:131.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-67.6,y:130.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-68.4,y:129},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-69.3,y:127.3},0).wait(1).to({regX:0,regY:0,scaleX:0.99,scaleY:0.99,x:-88.6,y:77.4},0).wait(1).to({regX:18.5,regY:48.5,scaleX:0.99,scaleY:0.99,x:-71.3,y:123.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-72.1,y:121.8},0).wait(1).to({scaleX:1,scaleY:1,x:-73,y:120.3},0).wait(1).to({scaleX:1,scaleY:1,x:-73.6,y:118.9},0).wait(1).to({scaleX:1,scaleY:1,x:-74.3,y:117.7},0).wait(1).to({scaleX:1,scaleY:1,x:-74.8,y:116.7},0).wait(1).to({scaleX:1,scaleY:1,x:-75.2,y:115.9},0).wait(1).to({x:-75.5,y:115.3},0).wait(1).to({scaleX:1,scaleY:1,x:-75.8,y:114.8},0).wait(1).to({x:-75.9,y:114.5},0).wait(1).to({regX:0,regY:0,x:-94.5,y:66},0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(40,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:-0.1,x:39.9,y:-0.1},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.4,x:39.8,y:-0.2},0).wait(1).to({rotation:-0.6,x:39.7,y:-0.3},0).wait(1).to({rotation:-0.8,x:39.5,y:-0.5},0).wait(1).to({rotation:-1.1,x:39.4,y:-0.6},0).wait(1).to({rotation:-1.4,x:39.2,y:-0.8},0).wait(1).to({rotation:-1.8,x:38.9,y:-1.1},0).wait(1).to({rotation:-2.3,x:38.7,y:-1.3},0).wait(1).to({rotation:-2.7,x:38.4,y:-1.6},0).wait(1).to({rotation:-3.2,x:38.2,y:-1.8},0).wait(1).to({rotation:-3.5,x:38,y:-2},0).wait(1).to({rotation:-3.9,x:37.8,y:-2.2},0).wait(1).to({rotation:-4.2,x:37.6,y:-2.4},0).wait(1).to({rotation:-4.5,x:37.4,y:-2.6},0).wait(1).to({rotation:-4.7,x:37.3,y:-2.7},0).wait(1).to({rotation:-4.9,x:37.2,y:-2.8},0).wait(1).to({rotation:-5,x:37.1,y:-2.9},0).wait(1).to({rotation:-5.1,x:37,y:-3},0).wait(1).to({rotation:-5.2},0).wait(3).to({rotation:-5.1,x:37.1,y:-2.9},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-4.9,x:37.2,y:-2.8},0).wait(1).to({rotation:-4.7,x:37.3,y:-2.7},0).wait(1).to({rotation:-4.4,x:37.5,y:-2.5},0).wait(1).to({rotation:-4.1,x:37.6,y:-2.4},0).wait(1).to({rotation:-3.8,x:37.8,y:-2.2},0).wait(1).to({rotation:-3.4,x:38,y:-2},0).wait(1).to({rotation:-3,x:38.3,y:-1.7},0).wait(1).to({rotation:-2.5,x:38.6,y:-1.4},0).wait(1).to({rotation:-2.1,x:38.8,y:-1.2},0).wait(1).to({rotation:-1.7,x:39,y:-1},0).wait(1).to({rotation:-1.3,x:39.2,y:-0.8},0).wait(1).to({rotation:-1,x:39.4,y:-0.6},0).wait(1).to({rotation:-0.8,x:39.6,y:-0.4},0).wait(1).to({rotation:-0.5,x:39.7,y:-0.3},0).wait(1).to({rotation:-0.3,x:39.8,y:-0.2},0).wait(1).to({rotation:-0.2,x:39.9,y:-0.1},0).wait(1).to({rotation:-0.1,x:40,y:0},0).wait(1).to({rotation:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-115.5,351.5,417.5);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(15.3,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.7,-160.2,351.5,417.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(305.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:876.5},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1193.6,-3.5,1806.1,8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(54.8,-1.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlORMMAAAgiXIKdAAMAAAAiXg");
	this.shape.setTransform(-170.9,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2F0504","rgba(56,6,6,0)"],[0,1],-237.5,0,237.6,0).s().p("EglGARMMAAAgiXMBKNAAAMAAAAiXg");
	this.shape_1.setTransform(33.1,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.4,-112.6,475.2,220);


// stage content:
(lib.adult = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		//Resize
		
		window._setCanvasSize = function() {
			
		    console.log(stage.canvas.width);
			
			stage.canvas.width = window.innerWidth;
			stage.canvas.height = window.innerHeight;
			
			_this.icecream.x = stage.canvas.width;
			_this.icecream.y = 0;
			
			_this.title.x = 0;
			_this.title.y = stage.canvas.height/2;
			
			_this.bg.x = stage.canvas.width/2;
			_this.bg.y = stage.canvas.height/2;
			
			_this.button.x = stage.canvas.width/2;
			_this.button.y = stage.canvas.height-60;
			
			_this.stripe1.x = stage.canvas.width;
			_this.stripe1.y = stage.canvas.height;
			
			_this.stripe2.x = stage.canvas.width;
			_this.stripe2.y = 0;
			
			
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		
		//Scale
		
			_this.icecream.scaleX = 0.9;
			_this.icecream.scaleY = 0.9;
		
			_this.title.scaleX = 0.7;
			_this.title.scaleY = 0.7;
		
			_this.bg.scaleX = 2;
			_this.bg.scaleY = 2;
		
			_this.button.scaleX = 0.8;
			_this.button.scaleY = 0.8;	
			
		window.onresize();
		
		//Touch Actions
			
		var onClick = function(evt) {
			console.log('click');
			window.open("https://www.google.com.ua", "_blank");
		};
		
		stage.canvas.addEventListener("click", onClick);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.button = new lib.Символ22();
	this.button.setTransform(322.1,601.7);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 4
	this.title = new lib.Символ14();
	this.title.setTransform(0,416.1,1,1,0,0,0,-204.5,17.4);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Слой 1
	this.icecream = new lib.Символ41();
	this.icecream.setTransform(616.7,1,1,1,0,0,0,153.2,-149.2);

	this.timeline.addTween(cjs.Tween.get(this.icecream).wait(1));

	// Слой 3
	this.stripe2 = new lib.Символ36();
	this.stripe2.setTransform(639.2,1,1,2,0,0,0,612.4,-3);

	this.stripe1 = new lib.Символ36();
	this.stripe1.setTransform(639.2,684.4,1,2,0,0,0,612.4,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stripe1},{t:this.stripe2}]}).wait(1));

	// Слой 2
	this.bg = new lib.Символ7();
	this.bg.setTransform(320,342.5);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-846.8,332.5,1806.7,695);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
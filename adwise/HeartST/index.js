(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 720,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1463500103313", id:"back"},
		{src:"images/bbn9.png?1463500103313", id:"bbn9"},
		{src:"images/mm03.png?1463500103313", id:"mm03"},
		{src:"images/rou_03.png?1463500103313", id:"rou_03"},
		{src:"images/rou_06.png?1463500103313", id:"rou_06"},
		{src:"images/trt6.png?1463500103313", id:"trt6"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,155);


(lib.bbn9 = function() {
	this.initialize(img.bbn9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,36);


(lib.mm03 = function() {
	this.initialize(img.mm03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,253);


(lib.rou_03 = function() {
	this.initialize(img.rou_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,83);


(lib.rou_06 = function() {
	this.initialize(img.rou_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,81);


(lib.trt6 = function() {
	this.initialize(img.trt6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,519);


(lib.Символ36копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(153,0,51,0)","#990000"],[0,1],0,0,0,0,0,37.2).s().p("AkDEFQhthtAAiYQAAiXBthsQBshtCXAAQCYAABtBtQBrBsAACXQAACYhrBtQhtBriYAAQiXAAhshrg");
	this.shape.setTransform(36.9,36.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,73.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,204,0)","#000099"],[0,1],0,0,0,0,0,37.2).s().p("AkDEFQhthtAAiYQAAiXBthsQBshtCXAAQCYAABtBtQBrBsAACXQAACYhrBtQhtBriYAAQiXAAhshrg");
	this.shape.setTransform(36.9,36.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,73.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,155);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.trt6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299,519);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAqIgIgdIgFAKIAAATIgUAAIAAhTIAUAAIAAAhIAMghIAXAAIgTAmIATAtg");
	this.shape.setTransform(5.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.7,15.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgQAAIAAgPIAxAAIAAAPIgPAAIAABEg");
	this.shape.setTransform(4.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,15.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAqQgFgBgDgDQgIgIABgNIAAglQgBgEACgFQACgFADgDQAEgDAFgBQAFgCAGgBQAHABAFACQAGABADADIAFAIQABAEAAAGIAAAkQAAANgGAIQgDADgGACQgFABgHAAQgGAAgFgCgAgEgaQgCACAAAEIAAApQAAAEACACQACACACAAIAEgCQADgCAAgEIAAgpQAAgEgDgCIgEgCQgCABgCABg");
	this.shape.setTransform(5.3,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,15.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAqIAAhEIgLAAIAABEIgVAAIAAhTIA1AAIAABTg");
	this.shape.setTransform(5.4,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.9,15.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAqQgFgBgDgDQgIgIABgNIAAglQgBgEACgFQACgFADgDQAEgDAFgBQAFgCAGgBQAHABAFACQAGABADADIAFAIQABAEAAAGIAAAkQAAANgGAIQgDADgGACQgFABgHAAQgGAAgFgCgAgEgaQgCACAAAEIAAApQAAAEACACQACACACAAIAEgCQADgCAAgEIAAgpQAAgEgDgCIgEgCQgCABgCABg");
	this.shape.setTransform(5.3,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,15.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAtAAIAAAPIgYAAIAAARIAHAAIAJACQAEABAEADQAEADACADQACAGAAAHIAAAHIgCAHQgCAEgEAEQgEACgEABIgJABgAgFAbIADAAIACgBIADgBIADgDIAAgGIgBgFIgCgEIgDgCIgCAAIgDAAg");
	this.shape.setTransform(5.4,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,15.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAqIAAhTIAvAAIAAAPIgaAAIAAARIAXAAIAAAPIgXAAIAAAUIAaAAIAAAQg");
	this.shape.setTransform(5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,15.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAzIAAgRIgdAAIAAARIgUAAIAAgiIADAAIAEgHIACgJIACgKIAAgRIAAgYIA1AAIAABDIAFAAIAAAigAgDgSIAAAMIgBAHIgCAJIgDAHIATAAIAAgzIgNAAg");
	this.shape.setTransform(5.8,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.7,15.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAqIAAgTIABgIIABgJIAAgHIABgHIgQAyIgTAAIAAhTIATAAIAAAUIAAAJIgBAIIgBAHIgBAIIABAAIAPg0IAUAAIAABTg");
	this.shape.setTransform(5.3,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.8,15.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgQAAIAAgPIAxAAIAAAPIgPAAIAABEg");
	this.shape.setTransform(4.7,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,15.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIArIAAgTIARAAIAAATgAgIAQIAAgHIABgHIACgEIACgDIADgDIAAgCIADgCIACgEIABgEQAAgEgCgCQgBgBgDAAQgCAAgCACQgCAEAAAFIgSAAIABgJQABgEADgFQADgEAFgCQAFgDAGAAQAGAAAEACQAFACADADQAEADABAEQACADAAAEQAAAHgCAFIgFAHIgFADIgDAFIgBAEIAAAFIAAACg");
	this.shape.setTransform(4.7,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,15.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyKR4QgQAAgBgQMAAAgjPQABgQAQgBMAkVAAAQAQABAAAQMAAAAjPQAAAQgQAAg");
	this.shape.setTransform(118,114.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AwwRuQgQAAgBgQMAAAgi7QABgQAQgBMAhhAAAQAQABAAAQMAAAAi7QAAAQgQAAg");
	this.shape.setTransform(109,113.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAQAqIh+AAQgHAAAAgIIAAhIQAAgHAHAAIB+AAIAAg6IBkBkQAFADgGAFIhjBjg");
	this.shape.setTransform(11.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,20.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00F2F2").s().p("AAQAqIh+AAQgHAAAAgIIAAhIQAAgHAHAAIB+AAIAAg6IBkBkQAFADgGAFIhjBjg");
	this.shape.setTransform(11.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,20.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(153,0,0,0)","#FF0000"],[0,1],-318.9,0,319,0).s().p("EgxkAOxQgQAAAAgRIAA8/QAAgQAQgBMBjJAAAQAQABAAAQIAAc/QAAARgQAAg");
	this.shape.setTransform(319,94.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,638,189);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#012C74","rgba(20,232,221,0)"],[0,1],-219,0,219,0).s().p("Egh8AMbQgQAAgBgRIAA4TQABgQAQgBMBD5AAAQARABAAAQIAAYTQAAARgRAAg");
	this.shape.setTransform(219,79.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,438,159);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.trt6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299,519);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mm03();
	this.instance.setTransform(-109,-126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-126.5,218,253);


(lib.Символ35копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("ADKAAQAABNg7A3Qg7A3hUAAQhSAAg8g3Qg7g3AAhNQAAhMA7g3QA8g2BSAAQBUAAA7A2QA7A3AABMg");
	this.shape.setTransform(17.9,210.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,255,0,0)","#00FF00"],[0,1],0,0,0,0,0,20.3).s().p("AiOCDQg7g2AAhNQAAhMA7g3QA8g3BSABQBTgBA8A3QA7A3AABMQAABNg7A2Qg8A3hTAAQhSAAg8g3g");
	this.shape_1.setTransform(17.9,210.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Слой 1
	this.instance = new lib.Символ36копия2();
	this.instance.setTransform(37.9,20.4,1,1,0,0,0,36.9,36.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,-16.5,78.1,246.4);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("ADKAAQAABNg7A3Qg7A3hUAAQhSAAg8g3Qg7g3AAhNQAAhMA7g3QA8g2BSAAQBUAAA7A2QA7A3AABMg");
	this.shape.setTransform(17.9,210.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,255,0,0)","#00FF00"],[0,1],0,0,0,0,0,20.3).s().p("AiOCDQg7g2AAhNQAAhMA7g3QA8g3BSABQBTgBA8A3QA7A3AABMQAABNg7A2Qg8A3hTAAQhSAAg8g3g");
	this.shape_1.setTransform(17.9,210.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(36.9,36.9,1,1,0,0,0,36.9,36.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.9,y:31.9,alpha:1},9).to({x:36.9,y:36.9,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,0,77.1,229.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(400,77.5,1,1,0,0,0,400,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:380},29).to({x:400},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,155);


(lib.Символ15копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(109,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:133.6},9).to({y:126.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218,253);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(109,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,218,253);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(7,6.2,0.586,0.586,180,0,0,11.8,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1},4).to({x:7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,12.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(11.8,10.5,1,1,0,0,0,11.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:28.9},4).to({x:11.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.7,20.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ?
	this.instance = new lib.Символ17();
	this.instance.setTransform(71.9,7.5,1,1,0,0,0,5.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({y:4.5},4).to({y:7.5},5).wait(1));

	// Т
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(66.4,7.5,1,1,0,0,0,5.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({y:4.5},4).to({y:7.5},5).wait(3));

	// И
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(60.1,7.5,1,1,0,0,0,5.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({y:4.5},4).to({y:7.5},5).wait(5));

	// Д
	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(53.1,7.5,1,1,0,0,0,5.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({y:4.5},4).to({y:7.5},5).wait(7));

	// Е
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(46.6,7.5,1,1,0,0,0,5.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({y:4.5},4).to({y:7.5},5).wait(9));

	// Б
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(40.3,7.5,1,1,0,0,0,5.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({y:4.5},4).to({y:7.5},5).wait(11));

	// О
	this.instance_6 = new lib.Символ23();
	this.instance_6.setTransform(33.7,7.5,1,1,0,0,0,5.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({y:4.5},4).to({y:7.5},5).wait(13));

	// П
	this.instance_7 = new lib.Символ24();
	this.instance_7.setTransform(27.1,7.5,1,1,0,0,0,5.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({y:4.5},4).to({y:7.5},5).wait(15));

	// О
	this.instance_8 = new lib.Символ25();
	this.instance_8.setTransform(17.3,7.5,1,1,0,0,0,5.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({y:4.5},4).to({y:7.5},5).wait(17));

	// Т
	this.instance_9 = new lib.Символ26();
	this.instance_9.setTransform(11.6,7.5,1,1,0,0,0,5.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({y:4.5},4).to({y:7.5},5).wait(19));

	// К
	this.instance_10 = new lib.Символ27();
	this.instance_10.setTransform(5.3,7.5,1,1,0,0,0,5.3,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:4.5},4).to({y:7.5},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,15.1);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(149.5,259.5,1,1,0,0,0,149.5,259.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:269.9},9).to({y:259.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299,519);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQArQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIAAgPIADABIADAAIACgBQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAAAIgUhCIAWAAIAIAlIAAAFIAAALIAAAAIAAgLIABgFIAIglIAWAAIgTBAIgEALQgBAEgDACQgDACgCABIgJABg");
	this.shape.setTransform(58.5,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGArIgIgeIgFAKIAAAUIgUAAIAAhVIAUAAIAAAjIAMgjIAXAAIgTAmIATAvg");
	this.shape_1.setTransform(52.2,48.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAfAAIAIABIAGAEQAEADABAEQACAEAAAGIgBAIIgDAFIgEAEIgDABQAGACADADQADAFAAAJQAAAGgBAFQgCAFgDADQgHAHgNAAgAgGAbIAFAAQAEAAACgCQACgDAAgGQAAgFgCgDQgCgDgEAAIgFAAgAgGgIIAGAAQADAAABgDQACgCAAgFQAAgEgCgCQgBgCgDAAIgGAAg");
	this.shape_2.setTransform(45.5,48.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKArIgDgSIgOAAIgCASIgVAAIAThVIAXAAIATBVgAAFAKIgFgkIgEAkIAJAAg");
	this.shape_3.setTransform(38.9,48.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHArIAAhEIgRAAIAAgRIAxAAIAAARIgPAAIAABEg");
	this.shape_4.setTransform(33,48.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmQgDgDgCgGQgCgFAAgHIAAgkQAAgFACgFQACgEADgDQADgEAGgCQAFgCAGAAQAHAAAFACQAFACAEAEQADADACAEQACAFAAAFIAAAGIgVAAIAAgIIgBgDIgCgCIgCgBIgCgBIgEACQgCABAAAEIAAApQAAAFACACQACACACAAQADAAACgCQACgCAAgFIAAgLIAVAAIAAAIQAAAHgCAFQgCAGgDADQgHAHgOAAQgNAAgHgHg");
	this.shape_5.setTransform(26.9,48.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAVAAIAAAiIAHAAIAJABQAFABADADQAEADACADQACAFAAAIIAAAIIgCAGQgCAFgEADQgDADgFABIgJABgAgFAbIADAAIACAAIAEgCIACgDIAAgFIAAgGIgDgDIgDgCIgBgBIgEAAg");
	this.shape_6.setTransform(62.2,35.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHArIAAhEIgRAAIAAgRIAxAAIAAARIgQAAIAABEg");
	this.shape_7.setTransform(56.2,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKArIgCgSIgOAAIgDASIgVAAIAThVIAXAAIATBVgAAEAKIgEgkIgFAkIAJAAg");
	this.shape_8.setTransform(50.2,35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaArIgFgCIAAgPIACABIACAAIAEgBQAAgBABAAQAAAAAAgBQAAAAABgBQAAgBAAAAIABgJIAAgOIAAgpIA0AAIAABUIgUAAIAAhEIgMAAIAAAcIgBAUQgCAIgCAFQgCAEgEACQgEACgFAAIgGAAg");
	this.shape_9.setTransform(43.2,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXArIAAhVIAvAAIAAARIgaAAIAAARIAXAAIAAAOIgXAAIAAAUIAaAAIAAARg");
	this.shape_10.setTransform(36.9,35.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAzIAAgRIgcAAIAAARIgUAAIAAgiIADAAIAEgHIACgJIACgKIAAgRIAAgYIA1AAIAABDIAFAAIAAAigAgDgSIAAAMIgBAIIgCAIIgDAHIASAAIAAgzIgMAAg");
	this.shape_11.setTransform(30.2,36.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAmQgDgDgCgGQgCgFAAgHIAAgkQAAgFACgFQACgEADgDQADgEAGgCQAFgCAGAAQAHAAAFACQAFACAEAEQADADACAEQACAFAAAFIAAAGIgVAAIAAgIIgBgDIgCgCIgCgBIgCgBIgEACQgCABAAAEIAAApQAAAFACACQACACACAAQADAAACgCQACgCAAgFIAAgLIAVAAIAAAIQAAAHgCAFQgCAGgDADQgHAHgOAAQgNAAgHgHg");
	this.shape_12.setTransform(23.1,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ35копия();
	this.instance.setTransform(40.4,57.4,1,1,0,0,0,36.9,36.9);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.rou_03();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,249.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQArQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIAAgPIADABIADAAIACgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAIgUhCIAWAAIAIAlIAAAFIAAALIAAAAIAAgLIABgFIAIglIAWAAIgTBAIgEALQgBAEgDACQgDACgCABIgJABg");
	this.shape.setTransform(59.5,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGArIgHgeIgGAKIAAAUIgUAAIAAhVIAUAAIAAAjIANgjIAWAAIgTAmIATAvg");
	this.shape_1.setTransform(53.2,46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAfAAIAIABIAGAEQAEADABAEQACAEAAAGIgBAIIgDAFIgEAEIgDABQAGACADADQADAFAAAJQAAAGgBAFQgCAFgDADQgHAHgNAAgAgGAbIAFAAQAEAAACgCQACgDAAgGQAAgFgCgDQgCgDgEAAIgFAAgAgGgIIAGAAQADAAABgDQACgCAAgFQAAgEgCgCQgBgCgDAAIgGAAg");
	this.shape_2.setTransform(46.5,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKArIgCgSIgPAAIgCASIgVAAIAThVIAXAAIATBVgAAEAKIgEgkIgFAkIAJAAg");
	this.shape_3.setTransform(40,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIArIAAhEIgQAAIAAgRIAxAAIAAARIgQAAIAABEg");
	this.shape_4.setTransform(34.1,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmQgDgDgCgGQgCgFAAgHIAAgkQAAgFACgFQACgEADgDQADgEAGgCQAFgCAGAAQAHAAAFACQAFACAEAEQADADACAEQACAFAAAFIAAAGIgVAAIAAgIIgBgDIgCgCIgCgBIgCgBIgEACQgCABAAAEIAAApQAAAFACACQACACACAAQADAAACgCQACgCAAgFIAAgLIAVAAIAAAIQAAAHgCAFQgCAGgDADQgHAHgOAAQgNAAgHgHg");
	this.shape_5.setTransform(28,46.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAVAAIAAAiIAHAAIAJABQAFABADADQAEADACADQACAFAAAIIAAAIIgCAGQgCAFgEADQgDADgFABIgJABgAgFAbIADAAIACAAIAEgCIACgDIAAgFIAAgGIgDgDIgDgCIgBgBIgEAAg");
	this.shape_6.setTransform(63.3,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHArIAAhEIgRAAIAAgRIAxAAIAAARIgPAAIAABEg");
	this.shape_7.setTransform(57.2,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALArIgEgSIgNAAIgDASIgVAAIAThVIAXAAIATBVgAAFAKIgFgkIgEAkIAJAAg");
	this.shape_8.setTransform(51.3,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaArIgGgCIAAgPIADABIACAAIAEgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIABgJIAAgOIAAgpIA1AAIAABUIgWAAIAAhEIgLAAIAAAcIgBAUQgCAIgCAFQgDAEgDACQgEACgFAAIgGAAg");
	this.shape_9.setTransform(44.2,33.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXArIAAhVIAvAAIAAARIgaAAIAAARIAXAAIAAAOIgXAAIAAAUIAaAAIAAARg");
	this.shape_10.setTransform(38,33.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAzIAAgRIgcAAIAAARIgUAAIAAghIADAAIAEgIIACgJIACgKIAAgRIAAgYIA1AAIAABEIAFAAIAAAhgAgDgSIAAAMIgBAIIgCAIIgDAIIASAAIAAg0IgMAAg");
	this.shape_11.setTransform(31.2,34.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAmQgDgDgCgGQgCgFAAgHIAAgkQAAgFACgFQACgEADgDQADgEAGgCQAFgCAGAAQAHAAAFACQAFACAEAEQADADACAEQACAFAAAFIAAAGIgVAAIAAgIIgBgDIgCgCIgCgBIgCgBIgEACQgCABAAAEIAAApQAAAFACACQACACACAAQADAAACgCQACgCAAgFIAAgLIAVAAIAAAIQAAAHgCAFQgCAGgDADQgHAHgOAAQgNAAgHgHg");
	this.shape_12.setTransform(24.1,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 13
	this.instance = new lib.Символ35();
	this.instance.setTransform(46.9,45,1,1,0,0,0,36.9,36.9);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.rou_06();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,237.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(38.4,7.5,1,1,0,0,0,38.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,15.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ10();
	this.instance.setTransform(84,6.7,0.381,0.381,0,0,0,11.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-7.5,6.3,0.651,0.651,0,0,0,6.9,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(38.4,7.5,1,1,0,0,0,38.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,0,100.6,15.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 5
	this.instance = new lib.Символ38();
	this.instance.setTransform(205.5,93,1,1,0,0,0,42,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},9).to({scaleX:1,scaleY:1},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5копия();
	this.instance_1.setTransform(98.5,183.5,0.619,0.619,0,0,0,149.5,259.5);

	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(100.5,211.5,0.773,0.773,0,0,0,149.5,259.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,scaleX:0.77,scaleY:0.77,x:100.5,y:211.5},9).to({_off:false,scaleX:0.62,scaleY:0.62,x:98.5,y:183.5},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},9).to({_off:true,scaleX:0.62,scaleY:0.62,x:98.5,y:183.5},10).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(721.9,90.5,1,1,0,0,0,318.9,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:81.9},9).to({x:721.9},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,-4,1034.9,348.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.instance = new lib.Символ37();
	this.instance.setTransform(-33.5,65.5,1,1,0,0,0,42.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06},9).to({scaleX:1,scaleY:1},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15копия();
	this.instance_1.setTransform(86,89.5,0.655,0.655,0,0,0,109,126.5);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(98,106.5,0.861,0.861,0,0,0,109,126.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,scaleX:0.86,scaleY:0.86,x:98,y:106.5},9).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},9).to({scaleX:0.66,scaleY:0.66,x:86,y:89.5},10).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(-233.5,68.1,1,1,0,0,0,219,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:106.5},9).to({x:-233.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452.5,-11.4,610,273.9);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		this.mag.gotoAndPlay(1);
		}
		
		this.bt1.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.mag.gotoAndPlay(10);
		}
		
		
		
		this.bt2.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		this.rog.gotoAndPlay(1);
		}
		
		this.bt2.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
		this.rog.gotoAndPlay(10);
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.bt2 = new lib.Символ14();
	this.bt2.setTransform(602,76.5,1,1,0,0,0,118,114.5);
	new cjs.ButtonHelper(this.bt2, 0, 1, 2, false, new lib.Символ14(), 3);

	this.bt1 = new lib.Символ13();
	this.bt1.setTransform(108,75.5,1,1,0,0,0,109,113.5);
	new cjs.ButtonHelper(this.bt1, 0, 1, 2, false, new lib.Символ13(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt1},{t:this.bt2}]}).wait(1));

	// Слой 7
	this.instance = new lib.Символ4();
	this.instance.setTransform(348.5,66.6,2.25,2.25,0,0,0,38.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.bbn9();
	this.instance_1.setTransform(274,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.rog = new lib.Символ2();
	this.rog.setTransform(618.5,211.5,1,1,0,0,0,149.5,259.5);

	this.timeline.addTween(cjs.Tween.get(this.rog).wait(1));

	// Слой 2
	this.mag = new lib.Символ1();
	this.mag.setTransform(188.5,107,1,1,0,0,0,109,126.5);

	this.timeline.addTween(cjs.Tween.get(this.mag).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(363,16.5,1,1,0,0,0,400,77.5);

	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(385.5,46.4,1,1,0,0,0,400,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-16,1882.9,357.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
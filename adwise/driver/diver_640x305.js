(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/backn.jpg", id:"backn"},
		{src:"images/for_03.png", id:"for_03"},
		{src:"images/for_06.png", id:"for_06"},
		{src:"images/for_09.png", id:"for_09"},
		{src:"images/for_14.png", id:"for_14"},
		{src:"images/for_16.png", id:"for_16"},
		{src:"images/for_20.png", id:"for_20"},
		{src:"images/for_24.png", id:"for_24"},
		{src:"images/for_27.png", id:"for_27"},
		{src:"images/for_33.png", id:"for_33"},
		{src:"images/for_36.png", id:"for_36"},
		{src:"images/maska.png", id:"maska"},
		{src:"images/puzir.png", id:"puzir"},
		{src:"images/ruggo.png", id:"ruggo"},
		{src:"images/shark_03.png", id:"shark_03"},
		{src:"images/shark_06.png", id:"shark_06"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,758,379);


(lib.backn = function() {
	this.initialize(img.backn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,719,378);


(lib.for_03 = function() {
	this.initialize(img.for_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,236);


(lib.for_06 = function() {
	this.initialize(img.for_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,66);


(lib.for_09 = function() {
	this.initialize(img.for_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,52);


(lib.for_14 = function() {
	this.initialize(img.for_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,67);


(lib.for_16 = function() {
	this.initialize(img.for_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,47);


(lib.for_20 = function() {
	this.initialize(img.for_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,193);


(lib.for_24 = function() {
	this.initialize(img.for_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,110);


(lib.for_27 = function() {
	this.initialize(img.for_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,105);


(lib.for_33 = function() {
	this.initialize(img.for_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,95);


(lib.for_36 = function() {
	this.initialize(img.for_36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,119);


(lib.maska = function() {
	this.initialize(img.maska);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,541,341);


(lib.puzir = function() {
	this.initialize(img.puzir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.ruggo = function() {
	this.initialize(img.ruggo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,300);


(lib.shark_03 = function() {
	this.initialize(img.shark_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,121);


(lib.shark_06 = function() {
	this.initialize(img.shark_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,83);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruggo();
	this.instance.setTransform(-64,-272);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-272,71,300);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABpA7IgHgCIAAgQIAGABQAEAAACgCIAEgHIgfhZIAYAAIASA7IASg7IAYAAIggBbIgEALIgGAIQgDADgDACIgHABgAkMA5QgHgBgFgFQgEgFgDgHQgCgFgBgNIAAgoQAAgLADgHQADgIAEgFQAFgEAHgCQAHgDAJAAQAIAAAHADQAHABAFAFQAEAFADAIQADAHAAALIAAAoQAAALgDAHQgDAIgEAFQgFAEgHACQgHACgIAAQgJAAgHgDgAkIgkIgDAGIgBAIIAAAuIABAIIADAFQAEAFAIAAQAHAAAEgFIACgFIABgIIAAguIgBgHIgCgHQgCgCgDgCQgDgBgDAAQgIAAgEAFgACwA7IgGgCIAAgPIAHABQABAAAAgBQABAAABAAQAAAAAAAAQABgBAAAAQACgBABgFIACgOIABhNIBCAAIAABxIgWAAIAAhgIgXAAIAAAqQAAAPgBAKQgCALgCAHQgDAHgFADQgFADgHAAgAEQA5IAAgVIATAAIAAAVgAA1A5IgTguIgIAMIAAAiIgWAAIAAhxIAWAAIAAAxIAagxIAZAAIgdAxIAeBAgAgbA5IgEgXIgcAAIgFAXIgXAAIAdhxIAdAAIAaBxgAgiAQIgKg6IgMA6IAWAAgAiyA5IAAhgIgbAAIAAgRIBMAAIAAARIgbAAIAABggAEUAbIgEhTIATAAIgCBTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-6,58.4,12);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDCNQgRgIgKgOQgKgMgDgSQgEgRAAgTIAAhmQAAgzAWgYQAXgYAsAAQAoAAAVAXQALALAGAQQAFAPAAAUIAAAOIg2AAIAAgGIgCgYQgCgJgDgFQgGgLgRAAQgIAAgHADQgGADgEAFQgIALAAAbIAABuIACAYQACAKAEAFQAIALAQAAQARAAAHgLQAHgLAAgcIAAgPIA2AAIAAAMQAAAUgEARQgDASgKAMQgKAOgRAIQgIADgJACIgXADQgbgBgRgHgArECNQgQgIgLgOQgJgMgEgSQgEgRAAgTIAAhmQAAgzAXgYQAWgYAsAAQAqAAAWAXQALALAFAQQAFAPABAUIAAAOIg2AAIAAgGIgDgYQgBgJgEgFQgIgLgRAAQgIAAgHADQgFADgFAFQgHALgBAbIAABuIADAYQACAKADAFQAIALARAAQARAAAIgLQAHgLABgcIAAgPIA2AAIAAAMQAAAUgEARQgEASgKAMQgKAOgQAIQgJADgKACIgYADQgbgBgRgHgAJYCOIAAkdICZAAIAAAtIhjAAIAABCIBaAAIAAApIhaAAIAABZIBjAAIAAAsgAGdCOIAAkdICZAAIAAAtIhjAAIAABCIBaAAIAAApIhaAAIAABZIBjAAIAAAsgADlCOIABijQABgXAFgUIgBAAIhPDOIg6AAIAAkdIAzAAIgEC6IgDAUIBPjOIA6AAIAAEdgAi9COIgKg7IhGAAIgMA7Ig7AAIBJkdIBIAAIBAEdgAjOApIgaiTIgdCTIA3AAgAmfCOIAAjwIhHAAIAADwIg3AAIAAkdIC1AAIAAEdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.3,-14.9,150.6,29.8);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ACpAAQAABGgyAxQgyAyhFAAQhFAAgygyQgxgxAAhGQAAhFAxgxQAygyBFAAQBFAAAyAyQAyAxAABFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-17.9,35.8,35.8);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruggo();
	this.instance.setTransform(-85.4,-112.6,0.73,0.73,-30.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.4,-138.8,155.6,215);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shark_06();
	this.instance.setTransform(-23.5,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-41.5,47,83);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shark_03();
	this.instance.setTransform(-119.5,-60.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.5,-60.5,239,121);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-379,-189.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-379,-189.5,758,379);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shark_06();
	this.instance.setTransform(-23.5,-41.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-41.5,47,83);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shark_03();
	this.instance.setTransform(-119.5,-60.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.5,-60.5,239,121);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_06();
	this.instance.setTransform(-26.5,-33);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-33,53,66);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_09();
	this.instance.setTransform(-18.5,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-26,37,52);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_14();
	this.instance.setTransform(-26.5,-33.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-33.5,53,67);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_16();
	this.instance.setTransform(-28,-23.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-23.5,56,47);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_24();
	this.instance.setTransform(-22,-55);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-55,44,110);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_27();
	this.instance.setTransform(-21,-52.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-52.5,42,105);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_33();
	this.instance.setTransform(-41.5,-47.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-47.5,83,95);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_36();
	this.instance.setTransform(-39,-59.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-59.5,78,119);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_03();
	this.instance.setTransform(-40.5,-118);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-118,81,236);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.for_20();
	this.instance.setTransform(-75.5,-96.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-96.5,151,193);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.backn();
	this.instance.setTransform(-359.5,-189);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-359.5,-189,719,378);


(lib.shape12 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.puzir();
	this.instance.setTransform(-2.3,-3.1,0.542,0.542);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-3.1,28.7,28.7);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(16.8,26.3,0.211,0.211,-21.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABeDKQgUgJgNgOQgOgPgFgTQgGgWAAgXIAAgYIBEAAIAAAPQAAAZAJASQAJAQAWAAQAOAAAJgFQAHgEAGgJQADgJAAgNIAAg6QgDgPgGgHQgFgHgJgEQgJgDgNAAIgiAAIAAg2IAWAAQAUAAAKgHQALgHAFgLQAGgLACgLIABgVQAAgUgJgNQgHgKgVAAQgSAAgLAMQgLANAAAXIAAAOIhEAAIAAgSQAAgVAHgUQAIgTAOgOQAOgPAUgJQAUgHAZAAQAbAAATAHQAWAGAOAOQAPANAHATQAHASAAAZQAAAUgEAQQgDAQgJAJQgPAVgaALQAQAEAKAJQANAFAJANQAOAaAAAuQAAAfgHAaQgHAXgQAOQgfAdg5AAQgdAAgTgJgAiBCIIglhfIgoBfIg1AAIA9iFIg7h8IA5AAIAiBVIAihVIA3AAIhAB8IBCCFg");
	this.shape.setTransform(54.1,-2.4);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-27.7,96.7,64.4);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(-256.5,-127);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-273,-154.7,96.7,64.4);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-359.5,-189,719,378);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-9.3},19).to({x:15.5,y:0},20).to({x:-10.8,y:4.7},20).to({x:9.3,y:7.8},20).to({x:14,y:-3.1},21).to({x:0,y:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359.5,-189,719,378);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(0,0,1.472,1.472);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.8,-21.9,221.7,43.9);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(0.1,0,3.924,3.924);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.5,-23.5,229,47.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.setTransform(-33,125.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({scaleY:1.76,y:143},5,cjs.Ease.get(-1)).to({scaleY:1,y:162.3},5,cjs.Ease.get(1)).wait(1).to({scaleY:1.76,y:143},6,cjs.Ease.get(-1)).to({scaleY:1,y:125.1},6,cjs.Ease.get(1)).wait(13));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(-32.6,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.8,y:48.2},6,cjs.Ease.get(-1)).to({scaleY:1,y:66.4},6,cjs.Ease.get(1)).wait(23).to({scaleY:1.8,y:48.2},6,cjs.Ease.get(-1)).to({scaleY:1,y:30.7},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,8.8,229,139.9);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(107.4,113.7,1,1,0,0,0,90,105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10.7,y:49.7},14).to({rotation:0,y:113.7},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-131,155.6,215);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlyEUIAAonILlAAIAAIng");
	this.shape.setTransform(25.3,335.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,307.5,74.2,55.3);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(-178.4,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// shark_06.png
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-59.3,-26.1,1,1,0,0,0,-18.6,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:17.5},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.9,-101.5,280.7,121);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(1159.6,0,1.51,1.51);

	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(9.2,0,1.574,1.51,0,0,180);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(-1159.5,0,1.51,1.51);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1731.7,-286.1,3463.6,572.2);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(1404.6,110);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-327.1,-176.1,3463.6,572.2);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(0.7,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAggIAAjHAj3AJIDKAAQAAgQANgMQAMgNASAAQABAAABAAQAOABAMAMQAMAMAAAQIDSAAAAADoIAAi/");
	this.shape.setTransform(0.8,-61.9);

	// Слой 1
	this.instance_1 = new lib.maska();
	this.instance_1.setTransform(-278.3,-175.4,1.029,1.029);

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("EiD+hMoMEH9AAAMgABCZRMkH8AAAgEglQgQZQl9J9HrSeQFnGhI1DhQHUjiC5nXQLN6kPncGQCLGqI6CJIJYlkQL0xGnvvZQvBmguwFSQvOCVvEkrIgWAAQq5AAmbDug");
	this.shape_1.setTransform(-11.9,-2.4);

	this.addChild(this.shape_1,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-856.6,-493,1689.5,981.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(-20.1,10.5,1,1,0,0,0,-20.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-41.5,47,83);


(lib.Символ15 = function() {
	this.initialize();

	// shark_06.png
	this.instance = new lib.Символ17();
	this.instance.setTransform(-216,-6.2,1,1,0,0,0,-17.7,10.4);

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(-222,-5.8,1,1,0,0,0,114.8,14.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-456.3,-80.8,281.5,121);


(lib.sprite13 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.shape12("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-3.1,28.7,28.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnIF7IAAr0IORAAIAAL0g");
	this.shape.setTransform(343.5,-747.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

	// Слой 3
	this.instance = new lib.Символ21();
	this.instance.setTransform(0,59.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.8,-785.6,91.6,75.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(0.1,1.9,1.326,1.326,0,0,0,-157.5,-39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5.8},11).to({y:1.9},13).to({y:15.9},12).to({y:6.2},9).to({y:1.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,-80.2,372.3,160.5);


(lib.Символ19копия = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(315.6,20.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.7,-60.5,281.5,121);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(315.6,20.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.7,-60.5,281.5,121);


(lib.sprite14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite13();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.49,x:-0.9,y:-6.1},4).to({scaleX:1.47,scaleY:1.11,x:-6.2,y:-1.3},4).to({scaleX:1,scaleY:1,x:0,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-3.1,28.7,28.7);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(0,0,0.81,0.8,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.8,-64.2,301.7,128.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(104.3,24.1,1,1,0,0,0,87.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-411.8,y:8.8},46).to({x:-894.1,y:-5.6},43).wait(81));

	// Символ 19 - копия
	this.instance_1 = new lib.Символ19копия();
	this.instance_1.setTransform(-981.6,136.4,0.888,1,0,0,180,-0.9,2.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({_off:false},0).to({x:-14.5,y:167.7},89).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.9,-36.4,281.5,121);


(lib.sprite15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 28
	this.instance = new lib.sprite14();
	this.instance.setTransform(12.8,24.2,0.072,0.072,-4.3);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.22,scaleY:0.22,x:7.1,y:30.1},3).to({scaleX:0.26,scaleY:0.26,x:4.8,y:31.4},1).to({scaleX:0.34,scaleY:0.34,x:0.9,y:28.1},3).to({scaleX:0.35,scaleY:0.35,x:0.6,y:27},1).to({scaleX:0.34,scaleY:0.34,x:-0.1,y:15},6).to({scaleX:0.33,scaleY:0.33,x:-0.6,y:11.3},1).to({scaleX:0.31,scaleY:0.31,x:-9,y:-5.5},4).to({scaleX:0.26,scaleY:0.26,x:2.5,y:-44.9},6).to({scaleX:0.21,scaleY:0.21,x:0,y:-54.6,alpha:0.109},6).to({scaleX:0.2,scaleY:0.2,x:-3.2,y:-55.8,alpha:0},1).to({_off:true},1).wait(27));

	// Layer 21
	this.instance_1 = new lib.sprite13();
	this.instance_1.setTransform(22.7,36.5,0.074,0.072,0,-16.4,163.7);
	this.instance_1.alpha = 0.75;
	this.instance_1._off = true;

	this.instance_2 = new lib.sprite14();
	this.instance_2.setTransform(14.4,20.1,0.331,0.321,0,-16.4,163.7);
	this.instance_2.alpha = 0.75;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({scaleX:0.12,scaleY:0.12,skewX:-16.3,skewY:163.9,x:20.8,y:37.1},1).to({scaleX:0.19,scaleY:0.19,x:17.9,y:33.4},2).to({scaleX:0.23,scaleY:0.22,skewX:-16.4,skewY:163.8,x:16.9,y:31.2},2).to({scaleX:0.31,scaleY:0.3,skewX:-16.3,skewY:163.9,x:14.8,y:23},3).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:0.25,scaleY:0.24,skewX:-16.3,x:3.6,y:-27},14).to({scaleX:0.24,scaleY:0.23,x:0.9,y:-32.5},1).to({scaleX:0.23,scaleY:0.22,x:-1,y:-38.4},1).to({scaleX:0.21,scaleY:0.2,skewX:-16.4,x:0.1,y:-53.8},2).to({skewX:-16.3,x:3.2,y:-58.8,alpha:0.078},8).to({skewX:-16.4,x:4,y:-59.9,alpha:0},1).to({_off:true},1).wait(18));

	// Layer 19
	this.instance_3 = new lib.sprite14();
	this.instance_3.setTransform(19,22.5,0.072,0.072,-4.3);
	this.instance_3.alpha = 0.75;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({scaleX:0.2,scaleY:0.2,x:10,y:30.7},8).to({scaleX:0.2,scaleY:0.2,x:9.9,y:30.8},1).to({scaleX:0.2,scaleY:0.2,x:9,y:31},1).to({scaleX:0.16,scaleY:0.16,rotation:-4.2,x:10,y:-17.1},12).to({scaleX:0.13,scaleY:0.13,rotation:-4.3,x:14.2,y:-46.5},4).to({scaleX:0.2,scaleY:0.2,x:12.5,y:-58.8,alpha:0},8).to({_off:true},1).wait(15));

	// Layer 17
	this.instance_4 = new lib.sprite14();
	this.instance_4.setTransform(19.1,29.9,0.071,0.072,0,4.2,-175.7);
	this.instance_4.alpha = 0.75;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({scaleX:0.12,scaleY:0.12,skewX:4,x:21,y:31.9},1).to({scaleX:0.25,scaleY:0.25,x:28.2,y:36.5},4).to({scaleX:0.31,scaleY:0.31,x:30.1,y:34.5},4).to({scaleX:0.34,scaleY:0.34,skewX:4.1,x:30.4,y:33.9},2).to({scaleX:0.35,scaleY:0.35,x:30.9,y:29.3},5).to({scaleX:0.31,scaleY:0.32,x:26.4,y:5},7).to({scaleX:0.28,scaleY:0.28,x:31.2,y:-25.7},5).to({scaleX:0.26,scaleY:0.26,skewX:4.2,x:34.5,y:-40.3},2).to({scaleX:0.25,scaleY:0.25,skewX:4.1,x:34.7,y:-41.6,alpha:0.641},1).to({scaleX:0.2,scaleY:0.2,skewX:4.2,x:35,y:-50,alpha:0},6).to({_off:true},1).wait(8));

	// Layer 10
	this.instance_5 = new lib.sprite13();
	this.instance_5.setTransform(15.2,23.9,0.073,0.072,0,-5.1,175);
	this.instance_5.alpha = 0.75;
	this.instance_5._off = true;

	this.instance_6 = new lib.sprite14();
	this.instance_6.setTransform(4.4,26.9,0.328,0.322,0,-5.1,175);
	this.instance_6.alpha = 0.75;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({scaleX:0.21,scaleY:0.2,skewX:-5,x:12.1,y:32.3},4).to({scaleX:0.23,scaleY:0.23,x:10.2,y:32.6},1).to({scaleX:0.28,scaleY:0.27,x:7.2,y:31},2).to({scaleX:0.32,scaleY:0.31,x:5,y:27.8},3).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({scaleX:0.28,scaleY:0.27,skewX:-5,x:11.1,y:-5},11).to({scaleX:0.2,scaleY:0.2,skewX:-5.1,x:9.3,y:-55.1},7).to({x:7.9,y:-65.7,alpha:0},9).to({_off:true},1).wait(4));

	// Layer 8
	this.instance_7 = new lib.sprite14();
	this.instance_7.setTransform(10.2,15.5,0.155,0.155,-4.2);
	this.instance_7.alpha = 0.75;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({scaleX:0.16,scaleY:0.16,x:10.9,y:17.2},1).to({scaleX:0.17,scaleY:0.17,rotation:-4.3,x:12.1,y:22.6},5).to({scaleX:0.17,scaleY:0.17,x:13.1,y:23.2},2).to({x:13.6,y:23.1},1).to({rotation:-4.2,x:13.4},1).to({scaleX:0.17,scaleY:0.17,x:12.9,y:22.9},1).to({scaleX:0.17,scaleY:0.17,x:11.1,y:19},1).to({scaleX:0.09,scaleY:0.09,rotation:-4.3,x:10.6,y:-46.2},15).to({scaleX:0.19,scaleY:0.19,rotation:-4.2,y:-58.1,alpha:0.09},7).to({scaleX:0.2,scaleY:0.2,rotation:-4.3,x:11.5,y:-59.5,alpha:0},1).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_8 = new lib.sprite13();
	this.instance_8.setTransform(20.7,26,0.07,0.072,0,-4.9,174.7);
	this.instance_8.alpha = 0.75;
	this.instance_8._off = true;

	this.instance_9 = new lib.sprite14();
	this.instance_9.setTransform(8.4,21,0.17,0.175,0,-4.9,174.7);
	this.instance_9.alpha = 0.75;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({scaleX:0.17,scaleY:0.17,skewX:-4.8,x:8.4,y:21.5},15).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33).to({_off:false},0).to({scaleX:0.17,skewX:-4.8,x:8.1,y:20.2},1).to({scaleX:0.16,scaleY:0.16,x:22.4,y:-8.8},9).to({scaleX:0.13,scaleY:0.14,skewX:-4.9,x:16.3,y:-65.1},7).to({scaleX:0.19,scaleY:0.19,skewX:-4.8,skewY:174.8,x:13.2,y:-74.8,alpha:0.078},8).to({scaleX:0.19,scaleY:0.2,skewX:-4.9,skewY:174.7,x:14.7,y:-76.9,alpha:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.7,23.8,2.2,2.2);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.setTransform(480.2,-6,1,1,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({x:-530.1,y:160.1},56).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(-581.1,8,1,1,0,0,0,-12,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:477.2,y:16},39).to({_off:true},1).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-719.9,-60.2,301.7,128.5);


(lib.Символ13копия = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(530,14.4);

	// pizir
	this.instance_1 = new lib.sprite15();
	this.instance_1.setTransform(288.8,109.8,1.381,1.381,0,0,0,13.8,24.9);

	// Слой 1
	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(511.1,30.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-189.9,-145.7,3837.5,572.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pizir1
	this.instance = new lib.sprite15();
	this.instance.setTransform(28.1,-190.1,2.433,2.351,0,0,180,13.8,24.9);

	this.instance_1 = new lib.sprite15();
	this.instance_1.setTransform(-0.1,-184.8,2.171,2.171,0,0,0,13.8,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(20));

	// for_36.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(-23.8,160.7,1,1,0,0,0,19.6,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:-52.9,rotation:17.4,x:-27.4,y:162.3},9).to({regY:-53,rotation:0,x:-23.8,y:160.7},10).wait(1));

	// for_33.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(49.4,-34.5,1,1,0,0,0,32.4,-41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:32.5,rotation:-5.2,x:48.4,y:-35.5},9).to({regX:32.4,rotation:0,x:49.4,y:-34.5},10).wait(1));

	// for_20.png
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(-4.3,37.7,1,1,0,0,0,-67.3,-88.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-67.4,regY:-88.8,rotation:12.7,x:-2.8,y:40.2},9).to({regX:-67.3,regY:-88.9,rotation:0,x:-4.3,y:37.7},10).wait(1));

	// for_24.png
	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(-5.9,-29.1,1,1,0,0,0,0.5,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:4.2},9).to({rotation:0},10).wait(1));

	// for_27.png
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(-8.2,65.3,1,1,0,0,0,5.2,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:5.1,rotation:-3,x:-16,y:65.9},9).to({regX:5.2,rotation:0,x:-8.2,y:65.3},10).wait(1));

	// for_16.png
	this.instance_7 = new lib.Символ9();
	this.instance_7.setTransform(77.7,-117.5,1,1,0,0,0,23.1,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:7.5,x:81.7,y:-123.6},9).to({rotation:0,x:77.7,y:-117.5},10).wait(1));

	// for_09.png
	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(-52.8,-107.8,1,1,0,0,0,-11.8,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-62.8,y:-115.3},9).to({x:-52.8,y:-107.8},10).wait(1));

	// for_06.png
	this.instance_9 = new lib.Символ12();
	this.instance_9.setTransform(35,-169.1,1,1,0,0,0,-21.1,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-7.2,y:-169.2},9).to({rotation:0,y:-169.1},10).wait(1));

	// for_03.png
	this.instance_10 = new lib.Символ4();
	this.instance_10.setTransform(18,-135.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

	// for_14.png
	this.instance_11 = new lib.Символ10();
	this.instance_11.setTransform(-14.4,-160.2,1,1,0,0,0,19.5,-23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:-23.6,rotation:10.2},9).to({regY:-23.7,rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.4,-253.1,221,526.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-6.4},14).to({y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.4,-253.1,221,526.3);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ34();
	this.instance.setTransform(373.5,-115.4);

	// Слой 3
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(626.8,112.6);

	// akula
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(1088.5,-60.1,1,1,0,0,0,87.4,0);

	// Слой 1
	this.instance_3 = new lib.Символ39();
	this.instance_3.setTransform(513.6,33.6);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(154.1,-155.4,1004.6,541.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 3
	this.instance = new lib.Символ33();
	this.instance.setTransform(10.7,-102.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAggQAOABAMAMQAMAMAAAQIDSAAAj3AJIDKAAQAAgQANgMQAMgNASAAQABAAABAAIAAjHAAADoIAAi/");
	this.shape.setTransform(10.9,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-511.1,-105.4);

	this.instance_2 = new lib.Символ13копия();
	this.instance_2.setTransform(-511.1,-105.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357,-260.8,1004.6,541.2);


// stage content:
(lib.diver_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.mask.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.mask.x = stage.mouseX;
			this.mask.y = stage.mouseY;
		}
		
		 var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.main.gotoAndPlay(1);
			    _this.mask.gotoAndPlay(1);
				_this.rug.gotoAndPlay(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.main.gotoAndPlay(0);
			    _this.mask.gotoAndPlay(0);
				_this.rug.gotoAndPlay(0);
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// klv
	this.klv = new lib.Символ41();
	this.klv.setTransform(295.8,374.9);

	this.timeline.addTween(cjs.Tween.get(this.klv).wait(1));

	// mask
	this.mask = new lib.Символ29();
	this.mask.setTransform(-425.6,163.5);

	this.timeline.addTween(cjs.Tween.get(this.mask).wait(1));

	// rug
	this.rug = new lib.Символ30();
	this.rug.setTransform(509.3,319.5);

	this.timeline.addTween(cjs.Tween.get(this.rug).wait(1));

	// main
	this.main = new lib.Символ14();
	this.main.setTransform(245.4,203.7,1,1,0,0,0,-66.1,-35.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.1,-469.7,1087,1304.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
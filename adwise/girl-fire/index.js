(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/angel.png", id:"angel"},
		{src:"images/back1.jpg", id:"back1"},
		{src:"images/devil.png", id:"devil"},
		{src:"images/g1_03.png", id:"g1_03"},
		{src:"images/g1_06.png", id:"g1_06"},
		{src:"images/g1_09.png", id:"g1_09"},
		{src:"images/g1_14.png", id:"g1_14"},
		{src:"images/g1_17.png", id:"g1_17"},
		{src:"images/kluch.png", id:"kluch"},
		{src:"images/ruka1.png", id:"ruka1"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.angel = function() {
	this.initialize(img.angel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,160);


(lib.back1 = function() {
	this.initialize(img.back1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,768,432);


(lib.devil = function() {
	this.initialize(img.devil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,158);


(lib.g1_03 = function() {
	this.initialize(img.g1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,434);


(lib.g1_06 = function() {
	this.initialize(img.g1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,77);


(lib.g1_09 = function() {
	this.initialize(img.g1_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,39);


(lib.g1_14 = function() {
	this.initialize(img.g1_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,54);


(lib.g1_17 = function() {
	this.initialize(img.g1_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,62);


(lib.kluch = function() {
	this.initialize(img.kluch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,46);


(lib.ruka1 = function() {
	this.initialize(img.ruka1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,76);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ruka1();
	this.instance.setTransform(-70,-38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70,-38,140,76);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kluch();
	this.instance.setTransform(-42.1,-13.3,0.581,0.581);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.1,-13.3,84.2,26.7);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.8,-8.5,175.7,17);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back1();
	this.instance.setTransform(-384,-216);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-384,-216,768,432);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.686)").s().p("AlREpQgsiRgHgqQgEgeAAhoIgBguQABgyAFgpQAQiAA3AAQASAAA3BEQBABNAUANQAbASBKA7QBDAyAdAAQAwAABfhgQBXhYAcg7QAwhkAdBnQAVBJAABSQAAAlgDAMQgCALgKAKQgrAogjA7QgWAkgKAuQgFAXgKBFIgCABQgCACgIAAQgBAAgngmQgvgugcgXIiGACQgaANgaAYQgbAagQANQg6AwhkAVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-29.8,78.9,59.6);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.686)").s().p("AogQ0IhOgoQgOgIAAgTQAAgVAdgNQALgEA0gPQBdgaAAg2QAAg/g1hcQg5hjgIhCIgTi6QgNgGgGguIgDg2QAAg6AXhuQAYh5AEgwQABgTAdiQQAbiIgBgkQABgGgxhRQgwhRgBgcQABgGA/hbICBi1QAhgvAohTQAvhiAUghQAFACACADQADAEAAAHQAMAYANAxQAXA5A0AhQAsAcA6AyQA/A5AQALIA8ADQAFACAIAHIBQgCQAYgGB3g5IByg5QANAAgBADQABALAAAdQAAAMgHAZQgJAZABAMQgBAGAvA0QAuA+AAA1IABAQQgBAJgOAFQgoAMingMQgMBOgmCQQgdB0gPBHQAkAQARAyQAeBXALAQQACAJAmBOQAlBRAAAXIgeBnQgfBpAAAWQAAATAfBJIAACGIgFACIgFADIgLgLIAAgDIgsABQgWAXgEAOQgBAFAAAbQAAAmAMAZQANAZAAAqQAAA3hwAAQgMAAgIgDQgihXgRg3IAAnAIgGAIQgrhMgDiBQADiOgHhFIgYjRQgMh6AAhTQh/AwhKBmQgVAcgkA6QgQAYgPATQBPA/AqB1QAkBlAAB4QAAAtgIBAQgHBAAAAqQAABCA4BuQAwBfARA7QAFAJABAOIABAGIAAABIAAAAIAAATQAABRgFAhQgHAsgTAXQgUAYguAQQglAMhXASQgzAzgXAaQg3A8gMAfIAAACQgBABgIAAQhfgehDgmgAGwNGQgFgIgBgDQABgKAhg+QAmhDAGgcQAagGAUAUQAcAeArAKQAPAPABAMQAAAehGAmQhGAng1AAQgGAAgGgKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.7,-114.4,127.4,228.9);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjLgvICDAAIAAhrICOAAIAABrICGAAIjMDKg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-15.6,40.8,31.2);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,255,0,0.8)").ss(5,1,1).p("ApiAHQKxD8IUlv");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.7,-13.5,127.4,27);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBGIAAgXIguAAIAAAXIgVAAIAAgpIAGAAIAFgMIAEgNIAChHIBAAAIAABgIAHAAIAAApgAAAgFIgDAXIgFALIAfAAIAAhOIgWAAgAhiAwQgGgCgFgEQgFgEgEgGQgDgHAAgJIAWAAIAAAGQABADACACQABACADACIAHABQAIAAADgFQADgFAAgJQAAgLgEgCQgFgEgHAAIgEAAIAAgQIAEAAQAGAAAFgEIADgEIABgHIgBgGIgCgFIgEgEQgCgBgDAAQgEAAgCABQgDABgBADQgEAFAAAHIgVAAQAAgHADgGQACgHAEgFQAFgEAGgDQAGgDAJAAIALACQAHABAFAEQAFADADAGQADAGAAAJQAAAJgFAHIgFAGIgIADIAIADIAGAGQADAEABADQACAFAAAHQAAARgJAJQgJAIgSAAIgOgBgADeAvIAAhyIAWAAIAAAtIASAAQAHAAAFADQAGADAEAFQADAFACAGQACAEAAAGQAAAIgBAHQgCAHgEAFQgDAEgFADQgFADgHAAgAD0AeIAMAAQAGAAAEgEQADgEAAgKQAAgIgDgEQgCgCgCgBQgDgCgDAAIgMAAgACiAvIAAhgIgbAAIAAgSIBMAAIAAASIgbAAIAABggABAAvIAAhyIA+AAIAAASIgoAAIAAAbIAlAAIAAARIglAAIAAAiIAoAAIAAASgAiWAvIgEgYIgcAAIgFAYIgXAAIAdhyIAdAAIAaBygAidAGIgKg6IgMA6IAWAAgAkiAvIAAhyIApAAQAHAAAGADQAFADAEAEQAEAFACAGQADAGAAAHQAAAHgDAHQgCAGgEAFQgEAEgFADQgGABgHAAIgTAAIAAAvgAkMgPIALAAQAEAAADgCQADgBACgCQAEgEAAgJIgBgHQgBgDgCgCIgFgEIgHgBIgLAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,-7,58.4,14.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBkQgMgFgIgJQgGgKgDgNQgDgMAAgOIAAhIQAAgkAQgRQAQgRAeAAQAeAAAQAQQAHAIAEALQAEALAAAOIAAAKIgnAAIAAgFIgBgPQgBgIgDgDQgFgIgMAAQgHAAgCACQgFACgCAEQgGAIAAASIABBgQABAIADADQAGAIAKAAQAMAAAGgIQAFgIAAgUIAAgLIAnAAIAAAJQAAAOgDAMQgDANgHAKQgHAJgMAFIgNAFIgQABQgSAAgMgGgAiyBpIgLgDIAAgeIAEACIAHABQAFAAAFgEQAEgEADgIIg4igIAsAAIAfBqIAghqIAqAAIg4CjIgIAUQgEAJgFAFQgGAFgFADQgGACgIAAgApyBmQgMgDgJgJQgJgHgFgNQgDgKgBgXIAAhIQAAgUAEgNQAFgNAJgIQAJgJAMgDQANgEAOAAQAPAAAMAEQAMADAJAJQAIAIAFANQAFAOAAATIAABIQAAATgFAOQgFANgIAIQgJAIgMADQgMAEgPAAQgOAAgNgEgAprhBQgEAEgBAHQgCAGAAAIIAABSQAAAIACAGQABAGAEAEQAGAJAOAAQANAAAGgJQAEgEABgGQACgGAAgIIAAhRQAAgIgCgGQgBgHgEgEQgDgFgEgCQgGgDgGAAQgOAAgGAJgAIfBlIAAjKIAnAAIAABOIAgAAQAMAAAKAGQAJAFAIAJQAGAHAEAKQADALAAAKQAAAPgDAMQgDAMgGAJQgHAIgIAGQgKAEgLAAgAJGBIIAWAAQALAAAGgIQAGgGAAgSQAAgPgGgJQgDgFgEgCQgFgDgFABIgWAAgAG1BlIAAirIgwAAIAAgfICHAAIAAAfIgwAAIAACrgAFOBlIABh0QABgRADgNIAAAAIg5CSIgqAAIAAjKIAlAAIAABMIgGBGIABAAIA5iSIApAAIAADKgACGBlIAAirIgwAAIAAgfICHAAIAAAfIgwAAIAACrgAkPBlIAAirIg0AAIAACrIgmAAIAAjKICAAAIAADKgAnTBlIAAirIgwAAIAAgfICHAAIAAAfIgxAAIAACrg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.7,-10.6,133.4,21.3);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AoAIBQjUjVAAksQAAkrDUjVQDVjUErAAQEsAADUDUQDVDVAAErQAAEsjVDVQjUDUksAAQkrAAjVjUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.6,-72.5,145.1,145.1);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.devil();
	this.instance.setTransform(-52,-55.5,0.703,0.703);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-55.5,104,111.1);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.588)").s().p("AoAIBQjUjVAAksQAAkrDUjVQDVjUErAAQEsAADUDUQDVDVAAErQAAEsjVDVQjUDUksAAQkrAAjVjUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.5,-72.5,145.1,145.1);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.angel();
	this.instance.setTransform(-48.5,-53.5,0.669,0.669);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.5,-53.5,97,107);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C7BA").s().p("AgUAIQgJgEAAgEQAAgDAJgFQAJgDALAAQAMAAAJADQAJAFAAADQAAAEgJAEQgJAEgMAAQgLAAgJgEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-1.2,6.1,2.5);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g1_17();
	this.instance.setTransform(-38.5,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-31,77,62);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g1_03();
	this.instance.setTransform(-111.5,-217);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-217,223,434);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g1_14();
	this.instance.setTransform(-32.5,-27);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.5,-27,65,54);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g1_06();
	this.instance.setTransform(-27.5,-38.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.5,-38.5,55,77);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.g1_09();
	this.instance.setTransform(-69.5,-19.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.5,-19.5,139,39);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("НАВЕДИ МЫШЬ", "bold 22px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.setTransform(65.5,0,0.66,0.66);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,142,33);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16},4).to({x:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-38,140,76);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:16},4).to({x:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-13.3,84.2,26.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.8,-8.5,175.7,17);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(-19.7,148.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({alpha:0},6).to({alpha:1},6).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},6).to({alpha:1},5).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,-29.8,127.4,292.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20},4).to({y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-15.6,40.8,31.2);


(lib.Символ16копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ35();
	this.instance.setTransform(99.6,31.1,0.503,0.503,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 3
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(240.6,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(-0.6,-141.6,2.132,2.132);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-131.6},9).to({y:-141.6},10).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(-8.8,50.4,1,1,0,0,0,0,55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.9},9).to({rotation:0},10).wait(1));

	// Символ 18
	this.instance_4 = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-156.7,357.2,356.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(0,-109.1,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-8.8,50.4,1,1,0,0,0,0,55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:7.9},9).to({rotation:0},10).wait(1));

	// Символ 18
	this.instance_2 = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-120.4,145.1,193);


(lib.Символ12копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ33();
	this.instance.setTransform(-145.3,17.2,0.693,0.804,0,27.7,-152.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 4
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-237.3,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},4).to({alpha:1},5).to({alpha:0},5).to({alpha:1},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(1.3,-146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-156.3},9).to({y:-146.3},10).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(8.8,49.5,1,1,0,0,0,0,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-7.5},9).to({rotation:0},10).wait(1));

	// Символ 15
	this.instance_4 = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301,-156.9,373.7,229.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(5,-109.1,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(8.8,49.5,1,1,0,0,0,0,53);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.5},9).to({rotation:0},10).wait(1));

	// Символ 15
	this.instance_2 = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-120.4,145.1,193);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();

	this.instance_1 = new lib.Символ12копия();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-120.4,145.1,193);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.instance_1 = new lib.Символ16копия();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-120.4,145.1,193);


(lib.Символ9 = function() {
	this.initialize();

	// devil.png
	this.instance = new lib.Символ10();
	this.instance.setTransform(-231.4,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	// angel.png
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(231.5,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-304,-156.9,608.2,356.5);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.5,-19.5,139,39);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ7();
	this.instance.setTransform(20.7,-149.6,1.464,1.464,-32.4);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(2.6,-141.7,1.464,1.464,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},17).to({state:[]},1).wait(17));

	// Слой 1
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(18,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(51.4,-47.1,1,1,0,0,0,-25.6,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(-41.6,-53.4,1,1,0,0,0,18.4,-35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// Слой 5
	this.instance_5 = new lib.Символ6();
	this.instance_5.setTransform(3.5,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35));

	// Символ 4
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(-2,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-224,223,434);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ7();
	this.instance.setTransform(20.7,-149.6,1.464,1.464,-32.4);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(2.6,-141.7,1.464,1.464,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},17).to({state:[]},1).wait(17));

	// Слой 1
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(18,-68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.03,y:-69.6},17).to({scaleY:1,y:-68.5},17).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(51.4,-47.1,1,1,0,0,0,-25.6,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-24,rotation:22.2,y:-47},17).to({regY:-24.1,rotation:0,y:-47.1},17).wait(1));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(-41.6,-53.4,1,1,0,0,0,18.4,-35.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-11.7},17).to({rotation:0},17).wait(1));

	// Слой 5
	this.instance_5 = new lib.Символ6();
	this.instance_5.setTransform(3.5,-3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.82,scaleY:0.82,rotation:-2.2,y:-0.5},17).to({scaleX:1,scaleY:1,rotation:0,y:-3.5},17).wait(1));

	// Символ 4
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(-2,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-224,223,434);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,142,33);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1).call(this.frame_60).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(2,7);

	this.instance_1 = new lib.Символ1копия();
	this.instance_1.setTransform(2,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance}]},30).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:12.5},29).to({y:7},30).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-217,223,434);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ9_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_2 = new lib.Symbol26();
	this.instance_2.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.addChild(this.cir,this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.7,-19,181.8,38.1);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.but1.addEventListener("mouseover", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
		this.girl.gotoAndStop(60);
		}
		
		this.but1.addEventListener("mouseout", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
		this.girl.gotoAndPlay(0);
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 50;
		this.fon.y = - stage.mouseY / 20;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.instance = new lib.Символ9_1();
	this.instance.setTransform(606.3,28.4,0.601,0.601);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(127.1,29.8,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.but1 = new lib.Символ9();
	this.but1.setTransform(320.3,222);

	this.timeline.addTween(cjs.Tween.get(this.but1).wait(1));

	// Слой 2
	this.girl = new lib.Символ8();
	this.girl.setTransform(308.5,210);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 1
	this.fon = new lib.Символ30();
	this.fon.setTransform(-33.2,10.6,1,1,0,0,0,-367.2,-186.4);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,133.5,768,446);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
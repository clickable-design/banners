(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/afgfbsdfgsf.png?1473170264173", id:"afgfbsdfgsf"},
		{src:"images/agagaga.png?1473170264173", id:"agagaga"},
		{src:"images/bg.jpg?1473170264173", id:"bg"},
		{src:"images/bomb.png?1473170264173", id:"bomb"},
		{src:"images/btn.png?1473170264173", id:"btn"},
		{src:"images/counter.png?1473170264173", id:"counter"},
		{src:"images/shshshs.png?1473170264173", id:"shshshs"},
		{src:"images/silach.png?1473170264173", id:"silach"},
		{src:"images/vul.png?1473170264173", id:"vul"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.afgfbsdfgsf = function() {
	this.initialize(img.afgfbsdfgsf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,170);


(lib.agagaga = function() {
	this.initialize(img.agagaga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,69);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.bomb = function() {
	this.initialize(img.bomb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,358);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,82);


(lib.counter = function() {
	this.initialize(img.counter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,146);


(lib.shshshs = function() {
	this.initialize(img.shshshs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,271);


(lib.silach = function() {
	this.initialize(img.silach);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,229);


(lib.vul = function() {
	this.initialize(img.vul);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,179);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shshshs();
	this.instance.parent = this;
	this.instance.setTransform(-32.5,-33.5,0.247,0.247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-33.5,65,67);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyQFqIAArTMAkhAAAIAALTg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agagaga();
	this.instance.parent = this;
	this.instance.setTransform(-112,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-35,226,69);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.afgfbsdfgsf();
	this.instance.parent = this;
	this.instance.setTransform(-52,-31,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-31,90.7,88.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgU/Ag4MAAAhBvMAp/AAAMAAABBvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,-210.5,269,421);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgBGAn+QgbgdAAgzIAAhLQAAgzAbgdQAbgdArAAQAsAAAcAdQAbAdAAAzIAABLQAAAzgbAdQgbAdgtAAQgrAAgbgdgEgAXAk3QgIAOAAAaIAABUQAAAaAJAOQAIAOAOAAQAQAAAJgOQAIgOAAgaIAAhUQAAgagJgOQgIgNgQAAQgOAAgJANgEgAlAgwQgQgEgOgFIALgwIAYAHIAZACQAQAAAMgOQALgPAAgYIAAgRQgJAMgNAGQgLAGgOgBQgnAAgWgZQgWgbAAgrQAAgqAcgdQAbgdArAAQAqAAAcAeQAcAeAAA0IAABIQAAAxgeAeQgfAegsgBQgOAAgQgCgAgXdPQgJAPAAAUQAAAVAIAOQAIANAPAAQAKABAJgFQAIgEAGgIIAAgfQAAgZgJgMQgJgNgOAAQgOAAgJAOgAhGY0QgegXAAgnQAAgXAOgSQAOgRAXgKQgTgJgLgQQgLgQAAgVQAAglAbgVQAagUApgBQApABAZAUQAZAUAAAmQAAAUgKAQQgLAQgSAKQAXAKANARQANASAAAXQAAAogcAWQgdAWgsAAQgsAAgegWgAgWXWQgLAMAAAQQAAARALAKQALAKAPAAQAPAAAKgKQAKgKAAgRQAAgQgKgMQgKgKgPAAQgPAAgLAKgAgQVhQgHAHAAAQQAAAPAIAJQAIAJALAAQAMAAAHgJQAGgJAAgPQAAgQgHgHQgGgJgMAAQgMAAgIAJgAgpRdIAAglQAAg5AUgwQAVgvAmgsIiMAAIAAgzIDLAAIAAAzQgtA0gRArQgQAsAAA5IAAAlgAhGJbQgdgfAAg1IAAg6QAAg4AhggQAhggAzAAQAQAAANACQANADAQAGIgLAxIgYgGIgXgCQgWgBgPASQgOARAAAiIAAADQAKgLAQgGQAOgGATAAQAlAAAUAbQAUAaAAArQAAAqgcAbQgcAbgsAAQgtAAgcgegAgSHvQgKAEgFAHIAAANQAAAeAKARQAKARAQAAQAPAAAJgOQAKgNAAgTQAAgVgJgMQgJgMgPAAQgMgBgKAEgAhDB8QgegWABgkIAAgBIBBgDQAAAOAKAJQAJAJAOAAQASAAAHgMQAHgLAAgVQAAgYgIgOQgIgMgSAAQgMAAgIAFQgIAFgDAJIg7gDIAQieIClAAIAAA0IhvAAIgHA6QAIgFAMgEQAKgDAPAAQAogCAVAaQAVAXAAAuQAAApgXAbQgYAbgzAAQgnAAgegUgAALlaIAAg8IhvAAIgEgpIBzi3IAAAAIBCAAIAACtIAcAAIAAAzIgcAAIAAA8gAACoTIgyBKIA7AAIAAhZIgCAAgAhGtUQgegUABgoIABgCIBAAAQAAAOAKAKQAJAJAPAAQAQAAALgKQAMgKAAgPQAAgVgLgIQgLgKgSAAIgfAAIAAgxIAfAAQAQAAAJgKQAKgKAAgRQAAgNgKgJQgJgJgPAAQgNAAgIAHQgJAIAAAMIhAAAIAAgCQgCgiAcgVQAcgVAoAAQAsAAAcAVQAcAVAAAnQAAAUgMAQQgMAQgUAKQAXAIANARQAMAQAAAZQAAAngeAWQgeAXgsAAQgoAAgegWgAhe0rIAAgrIBXhgQAQgUAIgQQAIgPAAgMQAAgQgHgKQgHgKgPAAQgPAAgJANQgIAMAAAUIhBAAIAAgBQgBgoAbgbQAbgcAsABQAtAAAZAWQAaAXAAAoQAAAbgOAWQgOAUgmApIghApIABABIBsAAIAAAzgAgQ8TIAAjlIg5AAIAAgyIB5gKIAAEhgEgBGgkSQgbgdAAgzIAAhLQAAg0AbgcQAbgdArAAQAsAAAcAdQAbAdAAAzIAABLQAAAzgbAdQgbAcgtAAQgrAAgbgcgEgAXgnZQgIANAAAaIAABUQAAAbAJAOQAIANAOAAQAQAAAJgNQAIgOAAgbIAAhUQAAgagJgNQgIgOgQAAQgOAAgJAOg");
	this.shape.setTransform(0,-24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-283,21.2,517.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhAYvQgbgdAAgzIAAhMQAAgzAbgcQAbgdArAAQAsAAAcAdQAbAdAAAyIAABMQAAAzgbAdQgbAcgtAAQgrAAgbgcgAgRVnQgIAOAAAaIAABUQAAAaAJAOQAIAOAOAAQAQAAAJgOQAIgOAAgaIAAhUQAAgagJgOQgIgNgQAAQgOAAgJANgAhDROQgegWABgjIAAgBIBBgEQAAAPAKAIQAJAJAOAAQASAAAHgLQAHgLAAgWQAAgYgIgNQgIgOgSAAQgMAAgIAGQgIAFgDAJIg7gDIAQigIClAAIAAA0IhvAAIgHA7QAIgGAMgDQAKgEAPAAQAogBAVAZQAVAZAAAuQAAApgXAcQgYAbgzAAQgnAAgegVgAALJ2IAAg8IhvAAIgEgoIBzi4IAAAAIBCAAIAACtIAcAAIAAAzIgcAAIAAA8gAACG9IgyBKIA7AAIAAhYIgCgBgAhGB9QgegVABgoIABgBIBAAAQAAAOAKAJQAJAJAPAAQAQAAALgKQAMgKAAgOQAAgVgLgJQgLgKgSAAIgfAAIAAgvIAfAAQAQAAAJgKQAKgJAAgRQAAgNgKgKQgJgJgPAAQgNAAgIAHQgJAIAAAMIhAAAIAAgCQgCgiAcgVQAcgVAoAAQAsAAAcAWQAcAVAAAnQAAATgMAQQgMAQgUAKQAXAGANARQAMARAAAYQAAAngeAXQgeAWgsAAQgoAAgegVgAhelZIAAgrIBXhgQAQgUAIgPQAIgQAAgMQAAgQgHgKQgHgJgPAAQgPAAgJAMQgIANAAATIhBAAIAAgBQgBgnAbgcQAbgbAsAAQAtAAAZAXQAaAXAAAoQAAAbgOAVQgOAUgmApIghApIABABIBsAAIAAAzgAgQtBIAAjkIg5AAIAAgzIB5gKIABAAIAAEhgAhF1CQgbgdAAgzIAAhMQAAgzAbgcQAbgdArAAQAsAAAcAdQAbAdAAAyIAABMQAAAzgbAdQgbAcgtAAQgrAAgbgcgAgW4KQgIAOAAAaIAABUQAAAaAJAOQAIAOAOAAQAQAAAJgOQAIgOAAgaIAAhUQAAgagJgOQgIgNgQAAQgOAAgJANg");
	this.shape.setTransform(0,-24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-185.6,21.2,322.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRGEIAAjkIg5AAIAAgzIB5gKIAAEhgAhHh7QgbgdAAgzIAAhMQAAgzAbgcQAbgdAsAAQAsAAAbAdQAbAdAAAyIAABMQAAAzgbAdQgbAcgsAAQgrAAgcgcgAgYlDQgIAOAAAaIAABUQAAAaAJAOQAIAOAPAAQAPAAAJgOQAJgOAAgaIAAhUQgBgagIgOQgJgNgPAAQgOAAgKANg");
	this.shape.setTransform(0,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-63,19.8,77.7);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhHB1QgbgdAAgzIAAhJQAAgzAbgdQAbgdAsAAQAsAAAbAdQAbAdAAAzIAABJQAAAzgbAdQgbAdgsAAQgsAAgbgdgAgXhQQgJANAAAaIAABSQAAAbAJAOQAJANAOAAQAPAAAJgNQAIgOAAgbIAAhSQABgagJgNQgJgOgPAAQgPAAgIAOg");
	this.shape.setTransform(0.3,-122.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-136.7,19.8,29.3);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-120,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-41,240,82);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-120,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-41,240,82);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(-120,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bomb();
	this.instance.parent = this;
	this.instance.setTransform(-130,-125,0.694,0.694);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-125,262.5,248.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.counter();
	this.instance.parent = this;
	this.instance.setTransform(-141.5,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-73,283,146);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vul();
	this.instance.parent = this;
	this.instance.setTransform(-122,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-89.5,244,179);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shshshs();
	this.instance.parent = this;
	this.instance.setTransform(-131.5,-135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5,-135.5,263,271);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.silach();
	this.instance.parent = this;
	this.instance.setTransform(-120,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-114.5,240,229);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-9.2,185.9,18.5);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.9},0).wait(1).to({rotation:9.7},0).wait(1).to({rotation:14.6},0).wait(1).to({rotation:19.5},0).wait(1).to({rotation:24.3},0).wait(1).to({rotation:29.2},0).wait(1).to({rotation:34.1},0).wait(1).to({rotation:38.9},0).wait(1).to({rotation:43.8},0).wait(1).to({rotation:48.6},0).wait(1).to({rotation:53.5},0).wait(1).to({rotation:58.4},0).wait(1).to({rotation:63.2},0).wait(1).to({rotation:68.1},0).wait(1).to({rotation:73},0).wait(1).to({rotation:77.8},0).wait(1).to({rotation:82.7},0).wait(1).to({rotation:87.6},0).wait(1).to({rotation:92.4},0).wait(1).to({rotation:97.3},0).wait(1).to({rotation:102.2},0).wait(1).to({rotation:107},0).wait(1).to({rotation:111.9},0).wait(1).to({rotation:116.8},0).wait(1).to({rotation:121.6},0).wait(1).to({rotation:126.5},0).wait(1).to({rotation:131.4},0).wait(1).to({rotation:136.2},0).wait(1).to({rotation:141.1},0).wait(1).to({rotation:145.9},0).wait(1).to({rotation:150.8},0).wait(1).to({rotation:155.7},0).wait(1).to({rotation:160.5},0).wait(1).to({rotation:165.4},0).wait(1).to({rotation:170.3},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:180},0).wait(1).to({rotation:184.9},0).wait(1).to({rotation:189.7},0).wait(1).to({rotation:194.6},0).wait(1).to({rotation:199.5},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:209.2},0).wait(1).to({rotation:214.1},0).wait(1).to({rotation:218.9},0).wait(1).to({rotation:223.8},0).wait(1).to({rotation:228.6},0).wait(1).to({rotation:233.5},0).wait(1).to({rotation:238.4},0).wait(1).to({rotation:243.2},0).wait(1).to({rotation:248.1},0).wait(1).to({rotation:253},0).wait(1).to({rotation:257.8},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:267.6},0).wait(1).to({rotation:272.4},0).wait(1).to({rotation:277.3},0).wait(1).to({rotation:282.2},0).wait(1).to({rotation:287},0).wait(1).to({rotation:291.9},0).wait(1).to({rotation:296.8},0).wait(1).to({rotation:301.6},0).wait(1).to({rotation:306.5},0).wait(1).to({rotation:311.4},0).wait(1).to({rotation:316.2},0).wait(1).to({rotation:321.1},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:330.8},0).wait(1).to({rotation:335.7},0).wait(1).to({rotation:340.5},0).wait(1).to({rotation:345.4},0).wait(1).to({rotation:350.3},0).wait(1).to({rotation:355.1},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-33.5,65,67);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(1).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-35,226,69);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(1.8,1.5,0.44,0.44,0,0,0,-6.7,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-17.9,39.9,38.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0ZTxIAAqQMAozAAAIAAKQg");
	mask.setTransform(-92.5,126.6);

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.parent = this;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:48.5},9,cjs.Ease.get(1)).wait(20).to({y:96.8},5,cjs.Ease.get(1)).wait(25).to({y:145.3},5,cjs.Ease.get(1)).wait(25).to({y:195.6},5,cjs.Ease.get(1)).wait(25).to({y:244.1},5,cjs.Ease.get(1)).wait(25).to({y:292.8},5,cjs.Ease.get(1)).wait(25).to({y:341.8},5,cjs.Ease.get(1)).wait(25).to({y:390.8},5,cjs.Ease.get(1)).wait(25).to({y:439.8},5,cjs.Ease.get(1)).wait(25).to({y:488.4},5,cjs.Ease.get(1)).wait(25).to({y:0},0).to({y:47.7},5,cjs.Ease.get(1)).wait(25).to({y:97},5,cjs.Ease.get(1)).wait(25).to({y:144.7},5,cjs.Ease.get(1)).wait(25).to({y:194},5,cjs.Ease.get(1)).wait(25).to({y:243.3},5,cjs.Ease.get(1)).wait(25).to({y:291},5,cjs.Ease.get(1)).wait(25).to({y:340.3},5,cjs.Ease.get(1)).wait(25).to({y:388.8},5,cjs.Ease.get(1)).wait(25).to({y:438.1},5,cjs.Ease.get(1)).wait(25).to({y:485.8},5,cjs.Ease.get(1)).wait(25).to({y:0},0).to({y:47.7},5,cjs.Ease.get(1)).wait(25).to({y:97},5,cjs.Ease.get(1)).wait(25).to({y:144.7},5,cjs.Ease.get(1)).wait(25).to({y:194},5,cjs.Ease.get(1)).wait(25).to({y:243.3},5,cjs.Ease.get(1)).wait(25).to({y:291},5,cjs.Ease.get(1)).wait(25).to({y:340.3},5,cjs.Ease.get(1)).wait(25).to({y:388.8},5,cjs.Ease.get(1)).wait(25).to({y:438.1},5,cjs.Ease.get(1)).wait(25).to({y:485.8},5,cjs.Ease.get(1)).wait(25).to({y:0},0).to({y:47.7},5,cjs.Ease.get(1)).wait(25).to({y:97},5,cjs.Ease.get(1)).wait(25).to({y:144.7},5,cjs.Ease.get(1)).wait(25).to({y:194},5,cjs.Ease.get(1)).wait(25).to({y:243.3},5,cjs.Ease.get(1)).wait(25).to({y:291},5,cjs.Ease.get(1)).wait(25).to({y:340.3},5,cjs.Ease.get(1)).wait(25).to({y:388.8},5,cjs.Ease.get(1)).wait(25).to({y:438.1},5,cjs.Ease.get(1)).wait(25).to({y:485.8},5,cjs.Ease.get(1)).wait(25).to({y:-1.2},0).to({y:47.8},5).wait(25).to({y:47.7},0).to({y:97},5,cjs.Ease.get(1)).wait(25).to({y:144.7},5,cjs.Ease.get(1)).wait(25).to({y:194},5,cjs.Ease.get(1)).wait(25).to({y:243.3},5,cjs.Ease.get(1)).wait(25).to({y:291},5,cjs.Ease.get(1)).wait(25).to({y:340.3},5,cjs.Ease.get(1)).wait(25).to({y:388.8},5,cjs.Ease.get(1)).wait(25).to({y:438.1},5,cjs.Ease.get(1)).wait(25).to({y:487},5).wait(25).to({y:-1.7},0).to({y:47},5).wait(25).to({y:47.7},0).to({y:97},5,cjs.Ease.get(1)).wait(25).to({y:144.7},5,cjs.Ease.get(1)).wait(25).to({y:194},5,cjs.Ease.get(1)).wait(25).to({y:243.3},5,cjs.Ease.get(1)).wait(25).to({y:291},5,cjs.Ease.get(1)).wait(25).to({y:340.3},5,cjs.Ease.get(1)).wait(25).to({y:388.8},5,cjs.Ease.get(1)).wait(25).to({y:438.1},5,cjs.Ease.get(1)).wait(25).to({y:487},5).wait(25).to({y:-1.7},0).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.3,97.7);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:146.2},9,cjs.Ease.get(1)).wait(290).to({y:193.9},5,cjs.Ease.get(1)).wait(295).to({y:243.2},5,cjs.Ease.get(1)).wait(295).to({y:291.7},5,cjs.Ease.get(1)).wait(295).to({y:340.7},5).wait(295).to({y:389.4},5).wait(296));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-130.5,219.8);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:268.3},9,cjs.Ease.get(1)).wait(1791));

	// Символ 28
	this.instance_3 = new lib.Символ28();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-191.1,341.8);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1800));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.7,187.5,211.4,46.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(0,-220,1.21,1.21,0,0,0,0,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.2,-220,290.4,484);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.alpha = 0.48;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14,cjs.Ease.get(1)).to({alpha:0.48},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-41,240,82);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(95.9,-204.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-487.9,283,583.3);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-89.5,244,179);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.6},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:10.9},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:18.2},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:25.5},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:40},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:47.3},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:54.5},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:61.8},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80},0).wait(1).to({rotation:83.6},0).wait(1).to({rotation:87.3},0).wait(1).to({rotation:90.9},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:105.5},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:112.7},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:138.2},0).wait(1).to({rotation:141.8},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:149.1},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:160},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:167.3},0).wait(1).to({rotation:170.9},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:178.2},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:185.5},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:192.7},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:200},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:207.3},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:214.5},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:221.8},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:243.6},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:250.9},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:258.2},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:280},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:287.3},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:301.8},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:309.1},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:316.4},0).wait(1).to({rotation:320},0).wait(1).to({rotation:323.6},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:338.2},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:345.5},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5,-135.5,263,271);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-67.5,-98.7,0.75,0.75,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.486,1],-140.3,0,140.4,0).s().p("A16BuIAAjbMAr1AAAIAADbg");
	this.shape.setTransform(-63.1,-98.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.4,-109.7,280.7,22.2);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},19).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-33.5,65,67);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,-3,0.506,0.506);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:-0.1,scaleY:0.68,rotation:90,y:-3.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-12.1,20.2,19.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(83.1,-34.9,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.1,-38.8);

	this.instance_2 = new lib.Символ46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-47.9,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-135.2,262.5,248.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.redbtn = new lib.Символ39();
	this.redbtn.parent = this;
	this.redbtn.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.redbtn).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-41,240,82);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.211},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5,-135.5,263,271);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(99.8,-42.5,0.349,0.349);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.1,-89.3,0.349,0.349);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-136.6,265.6,251.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.5},19,cjs.Ease.get(1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-136.6,265.6,251.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7));

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(-4.4,-184.5,0.484,0.484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.5,55.7,0.493,0.493,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.65,scaleY:0.65,x:-6.4,y:26.4},6,cjs.Ease.get(1)).wait(1).to({scaleX:0.49,scaleY:0.49,x:-4.5,y:55.7},6).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.7,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:104.3,alpha:0},6,cjs.Ease.get(0.95)).wait(1).to({y:124.8,alpha:1},6).wait(1));

	// Символ 22
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.4,-2.9,1.179,1.179);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.55,scaleY:1.55,y:-52},6,cjs.Ease.get(1)).wait(1).to({scaleX:1.18,scaleY:1.18,y:-2.9},6).wait(1));

	// Символ 20
	this.but = new lib.Символ20();
	this.but.parent = this;
	this.but.setTransform(-6.3,133.6,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.but).to({scaleX:0.91,scaleY:0.91,y:123.6},6,cjs.Ease.get(1)).wait(1).to({scaleX:0.79,scaleY:0.79,y:133.6},6).wait(1));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(8.1,-83.2,0.827,0.827);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:56.8,alpha:0},6,cjs.Ease.get(1)).wait(1).to({y:-83.2,alpha:1},6).wait(1));

	// Слой 8
	this.instance_5 = new lib.Символ34();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6.4,-15.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0.578},6,cjs.Ease.get(1)).wait(1).to({alpha:0},6).wait(1));

	// Символ 24
	this.instance_6 = new lib.Символ24();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-5.9,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.8,-242,309.5,484);


// stage content:



(lib.circusman240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 240 * 2;
		stage.canvas.height = 400 * 2;
		stage.canvas.style.width = '240px';
		stage.canvas.style.height = '400px';
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(8);
		}
		
		
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.button.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.but.redbtn.gotoAndPlay(1);
		}
		
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.button.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.but.redbtn.gotoAndPlay(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bomb.png
	this.button = new lib.Символ40();
	this.button.parent = this;
	this.button.setTransform(120.5,356.2);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// vul.png
	this.main = new lib.Символ33();
	this.main.parent = this;
	this.main.setTransform(125.9,222);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(94.1,180,309.5,484);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
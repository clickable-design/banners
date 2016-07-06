(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg?1467816333560", id:"bg"},
		{src:"images/girl_03.png?1467816333560", id:"girl_03"},
		{src:"images/girl_04.png?1467816333560", id:"girl_04"},
		{src:"images/girl_06.png?1467816333561", id:"girl_06"},
		{src:"images/girl_10.png?1467816333561", id:"girl_10"},
		{src:"images/logo.png?1467816333561", id:"logo"},
		{src:"images/slot_04.png?1467816333561", id:"slot_04"},
		{src:"images/slot_06.png?1467816333561", id:"slot_06"},
		{src:"images/slot_11.png?1467816333561", id:"slot_11"},
		{src:"images/slot_14.png?1467816333561", id:"slot_14"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,792,616);


(lib.girl_03 = function() {
	this.initialize(img.girl_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,320);


(lib.girl_04 = function() {
	this.initialize(img.girl_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,278);


(lib.girl_06 = function() {
	this.initialize(img.girl_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,117);


(lib.girl_10 = function() {
	this.initialize(img.girl_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,174);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,49);


(lib.slot_04 = function() {
	this.initialize(img.slot_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,151);


(lib.slot_06 = function() {
	this.initialize(img.slot_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,99);


(lib.slot_11 = function() {
	this.initialize(img.slot_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.slot_14 = function() {
	this.initialize(img.slot_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,138);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,151);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,151);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,138);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("AAAiuIAAFd");
	this.shape.setTransform(0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,38);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("AAAiuIAAFd");
	this.shape.setTransform(0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,38);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("ACvAAIldAA");
	this.shape.setTransform(17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,38,2.9);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("ACvAAIldAA");
	this.shape.setTransform(17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,38,2.9);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,2,0,3).p("AgcAcIA5AAAgcgbIAAAp");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,8.8,8.5);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,138);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_06();
	this.instance.setTransform(0,0,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.8,113.9);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slot_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,99);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1kJeIAAy7MArJAAAIAAS7g");
	this.shape.setTransform(138.2,60.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.3,121.3);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0F914").s().p("AgWB6QgJAAgGgGQgGgHAAgIIAAjJQAAgIAGgHQAGgGAJAAIAtAAQAJAAAGAGQAGAHAAAIIAADJQAAAIgGAHQgGAGgJAAgAgMBEIAAAWIAZAAIAAhSgAgMgIIAZg/IAAgTIgZAAg");
	this.shape.setTransform(4.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,24.5);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADIB6QgIAAgGgGQgHgHAAgIIAAibQAAgJAHgGQAGgHAIABIAwAAQAJgBAGAHQAGAGAAAJIAACbQAAAIgGAHQgGAGgJAAgADTBaIAaAAIAAiGIgaAAgABmB6IAAimIgcAAIAAgfIBYAAIAAAfIgcAAIAACmgAAZB6IAAhoIgkBoIgfAAIAAjFIAgAAIAABmIAjhmIAgAAIAADFgAibB6IAAjFIBPAAIAAAfIgwAAIAAAxIAlAAQAJAAAGAFQAGAHAAAIIAABMQAAAIgGAHQgGAGgJAAgAh8BaIAbAAIAAg2IgbAAgAj3B6QgIAAgGgGQgHgHAAgIIAAjJQAAgIAHgHQAGgGAIAAIAwAAQAJAAAGAGQAGAHAAAIIAAA1IggAAIAAgrIgaAAIAAC0IAaAAIAAgqIAgAAIAAA1QAAAIgGAHQgGAGgJAAg");
	this.shape.setTransform(26.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.9,24.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0F914").s().p("AA8W+QhFgygdhVIlKvGIvGlKQhSgcgzhCQgzhFgChWQgChYAuhHQAuhIBQghMAm7gQBQA0gVA2AAQBEAAA8AgQA9AhAnA6QAnA5AGBEQAHBDgbBBMgQBAm7QggBPhEAtQhFAuhVAAQhaAAhHgzgAS/0mMgm6AQBQgxAVAAA3QAEA4AxARIP0FXQAtAQAQAtIFXPzQALAgAcAOQARAIATAAQATAAARgIQAZgMAMgdMAQCgm7QAQgngXghQgLgRgSgKQgRgKgTAAQgPAAgRAGg");
	this.shape.setTransform(152.2,152.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,304.4,304.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0F914").s().p("Ak8E9QgdgdAAgpQAAgoAdgdIHvnuQAdgdAoAAQApAAAcAdQAdAdAAApQAAAogdAdInuHuQgdAdgpAAQgoAAgdgdg");
	this.shape.setTransform(34.7,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,69.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0F914").s().p("ArxLyQgdgcAAgoQAAgpAdgdIVZ1ZQAdgdAoAAQAoAAAdAdQAdAdAAAoQAAAogdAdI1YVZQgdAdgpAAQgpAAgcgdg");
	this.shape.setTransform(78.4,78.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.8,156.7);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0F914").s().p("Ak8E9QgdgcAAgqQABgoAdgdIHunuQAcgcApgBQAoABAdAcQAdAdAAApQAAAngdAeInuHuQgdAdgpAAQgpAAgcgdg");
	this.shape.setTransform(34.7,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,69.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AluFvQiYiYgBjXQABjWCYiYQCYiYDWgBQDXABCYCYQCYCYABDWQgBDXiYCYQiYCYjXABQjWgBiYiYg");
	this.shape.setTransform(52,52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,104);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXDzQgCAAgDgCQgCgCAAgDIAAgZIBGAAIAAALIgeAAIAAAOQAAADgCACQgCACgDAAgAgTDnIATAAIAAgJIgTAAgAgeDJIAAg6IBGAAIAAAMIg7AAIAAALIA7AAIAAAMIg7AAIAAAMIA7AAIAAALgAgeCFIAAgLIBGAAIAAALgAgXB2QgCAAgDgDQgCgBAAgEIAAgZIBGAAIAAAMIgeAAIAAANQAAAEgCABQgCADgDAAgAgTBqIATAAIAAgJIgTAAgAgeBMIAAgMIAlAAIgbgJIAAgJIAbgJIglAAIAAgMIBGAAIAAAMIgoANIAoAOIAAAMgAgeADIAAgJIAkAAIgkgOIAAgLIBGAAIAAALIgmAAIAmAOIAAAJgAgngmIAAgLIAJAAIAAgWIgJAAIAAgLIAUAAIAAAGIAzAAQADAAADACQACACAAAEIAAAZIg7AAIAAAFgAgTg3IAwAAIAAgKIgwAAgAgehXIAAgeIBGAAIAAAdIgLAAIAAgRIgTAAIAAAMIgKAAIAAgMIgTAAIAAASgAgXh9QgCAAgDgDQgCgCAAgCIAAgZIBGAAIAAAXQAAADgCACQgDACgDAAIgUAAQgGAAgBgDQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAAAAAAAgAgTiJIATAAIAAgJIgTAAgAAKiKIATAAIAAgIIgTAAgAgeiwIAMgBIAAgMIgMgCIAAgLIBGAJIAAAUIhGAJgAgGizIAjgFIgjgEgAgejSIAAgLIAeAAIAAgJIgeAAIAAgMIBGAAIAAAMIgfAAIAAAJIAfAAIAAALg");
	this.shape.setTransform(4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.1,48.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgBZAguMAAAhBbICzAAMAAABBbg");
	this.shape.setTransform(9,209.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,419);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEAB8QgLAAgHgHQgIgJAAgKIAAjDQAAgLAIgHQAHgIALAAIA7AAQAMAAAHAIQAIAHAAALIAAAwIgoAAIAAgjIghAAIAACpIAhAAIAAgkIAoAAIAAAxQAAAKgIAJQgHAHgMAAgABrB8IAAgnIARAAIAIgoIgUAAIgjioIApAAIAaB6IAah6IApAAIgvDdQgCAMgHAHQgHAHgLAAgAATB8IAAhoIgfAAIAABoIgnAAIAAj3IAnAAIAABqIAfAAIAAhqIAoAAIAAD3gAisB8QgLAAgHgHQgIgJAAgKIAAjDQAAgLAIgHQAHgIALAAIA7AAQAMAAAHAIQAIAHAAALIAADDQAAAKgIAJQgHAHgMAAgAifBVIAhAAIAAipIghAAgAlVB8IAAj3IBjAAIAAAnIg7AAIAAA/IAuAAQALAAAIAIQAHAIAAAIIAABfQAAAKgHAJQgIAHgLAAgAktBVIAhAAIAAhEIghAAg");
	this.shape.setTransform(34.2,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1F73A").s().p("AEwB6IAAhoIgmBoIgfAAIAAjFIAgAAIAABmIAlhmIAgAAIAADFgACwB6IAAhTIglAAQgIAAgHgGQgGgGAAgJIAAhdIAfAAIAABTIAbAAIAAhTIAgAAIAADFgAAUB6IAAggIANAAIAHgfIgRAAIgZiGIAfAAIAUBfIAVhfIAhAAIgmCwQgCAJgFAGQgFAGgJAAgAgpB6IAAimIgbAAIAACRQAAAIgGAHQgGAGgJAAIgYAAIAAggIANAAIAAiQQAAgJAHgGQAGgHAJABIBEAAIAADFgAjLB6QgIAAgHgGQgGgHAAgIIAAibQAAgJAGgGQAHgHAIABIAvAAQAJgBAHAHQAFAGAAAJIAACbQAAAIgFAHQgHAGgJAAgAjBBaIAbAAIAAiGIgbAAgAkUB6IAAjUIgbAAIAADUIggAAIAAjzIBaAAIAADzg");
	this.shape_1.setTransform(34.3,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.5,54);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,117);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,174);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,278);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,320);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,49);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,792,616);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ72();
	this.instance.setTransform(63.5,75.5,1,1,0,0,0,63.5,75.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot_04();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,151);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.setTransform(63.5,75.5,1,1,0,0,0,63.5,75.5);

	this.instance_1 = new lib.Символ70();
	this.instance_1.setTransform(63.5,75.5,1.21,1.21,0,0,0,63.5,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,151);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 66
	this.instance = new lib.Символ66();
	this.instance.setTransform(44,74.3,1,1,0,0,0,0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:76.8},10,cjs.Ease.get(1)).to({y:74.3},9,cjs.Ease.get(1)).wait(1));

	// Символ 65
	this.instance_1 = new lib.Символ65();
	this.instance_1.setTransform(43.5,17.5,1,1,0,0,0,0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:15},10,cjs.Ease.get(1)).to({y:17.5},9,cjs.Ease.get(1)).wait(1));

	// Символ 64
	this.instance_2 = new lib.Символ64();
	this.instance_2.setTransform(72.3,45,1,1,0,0,0,17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:74.8},10,cjs.Ease.get(1)).to({x:72.3},9,cjs.Ease.get(1)).wait(1));

	// Символ 63
	this.instance_3 = new lib.Символ63();
	this.instance_3.setTransform(15.5,45,1,1,0,0,0,17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:13},10,cjs.Ease.get(1)).to({x:15.5},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_4 = new lib.Символ62();
	this.instance_4.setTransform(58.3,32.9,1,1,180,0,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:3,scaleX:0.87,scaleY:0.87,x:56.4,y:34.5},10,cjs.Ease.get(1)).to({regX:2.9,scaleX:1,scaleY:1,x:58.3,y:32.9},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_5 = new lib.Символ62();
	this.instance_5.setTransform(58.5,57.1,1,1,0,0,180,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.87,scaleY:0.87,x:56.6,y:55.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:58.5,y:57.1},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_6 = new lib.Символ62();
	this.instance_6.setTransform(29.1,32.9,1,1,0,180,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.87,scaleY:0.87,x:31,y:34.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:29.1,y:32.9},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_7 = new lib.Символ62();
	this.instance_7.setTransform(28.9,57.1,1,1,0,0,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:3,scaleX:0.87,scaleY:0.87,x:30.9,y:55.5},10,cjs.Ease.get(1)).to({regX:2.9,scaleX:1,scaleY:1,x:28.9,y:57.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-1.4,94.8,94.8);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ68();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot_14();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,138);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);

	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(78,69,1.15,1.15,0,0,0,78,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,138);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ57();
	this.instance.setTransform(72,61,1,1,0,0,0,72,61);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot_11();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(72,61,1,1,0,0,0,72,61);

	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(72,61,1.21,1.21,0,0,0,72,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ53();
	this.instance.setTransform(75.9,56.9,1,1,0,0,0,75.9,56.9);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.slot_06();
	this.instance_1.setTransform(0,0,1.15,1.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.8,113.9);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(66,49.5,1,1,0,0,0,66,49.5);

	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(66,49.5,1,1,0,0,0,75.9,56.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,99);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(4.5,12.2,1,1,0,0,0,4.5,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.441},7,cjs.Ease.get(1)).to({alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9,24.5);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAnjKIhNGV");
	this.shape.setTransform(67,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWB6QgJAAgGgGQgHgHABgHIAAg2IAfAAIAAAqIAYAAIAAhOIg3AAIAAiFIBYAAIAAAfIg5AAIAABIIAjAAQAJAAAGAGQAGAHAAAGIAABlQAAAHgGAHQgGAGgJAAg");
	this.shape_1.setTransform(81.1,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(54.1,38.7,1,1,0,0,0,4.5,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(10.9,38.2,1,1,0,0,0,26.9,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ47();
	this.instance_2.setTransform(34.2,58.2,1,1,0,0,0,138.2,60.6);
	this.instance_2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-2.4,276.3,121.3);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.setTransform(63.5,75.5,1,1,0,0,0,63.5,75.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-15.8,153.7,182.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(66,49.5,1,1,0,0,0,66,49.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-7.4,151.8,113.9);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(72,61,1,1,0,0,0,72,61);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-12.8,174.3,147.6);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-10.3,179.4,158.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(34.6,34.6,1,1,0,0,0,34.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,69.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(52,52,1,1,0,0,0,52,52);
	this.instance.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,104);


(lib.Символ13 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(6,183.4,1.2,1.2,0,0,0,4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(6,209.5,1.36,1,0,0,0,9,209.5);
	this.instance_1.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,0,24.5,419);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ11();
	this.instance.setTransform(34.2,21.1,1.09,1.09,-4,0,0,34.2,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4},14,cjs.Ease.get(1)).to({rotation:-4},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(34.2,21.1,1.47,1.47,0,0,0,34.2,27.1);
	this.instance_1.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:27,scaleX:1.32,scaleY:1.32,rotation:1.3,y:21},6,cjs.Ease.get(1)).to({regY:27.1,scaleX:1.4,scaleY:1.4,rotation:-0.8,y:21.1,alpha:0.121},8,cjs.Ease.get(1)).to({regX:34.1,scaleX:1.32,scaleY:1.32,rotation:1,alpha:0.27},7,cjs.Ease.get(1)).to({regX:34.2,scaleX:1.47,scaleY:1.47,rotation:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,-18.7,100.6,79.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(33.6,27,1,1,0,0,0,34.2,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},3,cjs.Ease.get(1)).wait(1).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-18.7,100.6,79.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_10.png
	this.instance = new lib.Символ7();
	this.instance.setTransform(133,227,1,1,0,0,0,64,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-10,x:133.1},5,cjs.Ease.get(1)).to({rotation:16,x:133},10,cjs.Ease.get(1)).to({rotation:-12},10,cjs.Ease.get(1)).to({rotation:0},14,cjs.Ease.get(1)).wait(1));

	// girl_06.png
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(86,228.1,1,1,0,0,0,86,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(1));

	// girl_03.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(86,228,1,1,0,0,0,86,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// girl_04.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(42.5,279,1,1,0,0,0,87.5,203);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4},10,cjs.Ease.get(1)).to({rotation:-10},19,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,68,242,321);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.setTransform(46.6,44,1,1,0,0,0,44.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38.1},9,cjs.Ease.get(1)).to({x:46.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,94.8,94.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.setTransform(45.9,45.9,1,1,0,0,0,45.9,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:40.9},15,cjs.Ease.get(1)).to({y:45.9},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,94.8,94.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(131,92,1,1,0,0,0,86,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:87},19,cjs.Ease.get(1)).to({y:92},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,321);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(220.8,119.3,0.9,0.9,0,0,0,72,61);

	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(70,198.8,0.9,0.9,0,0,0,66,49.5);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(186.3,238.5,0.66,0.66,0,0,0,63.5,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.6,288.3);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(220.8,119.3,0.9,0.9,0,0,0,72,61);

	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(70,198.8,0.9,0.9,0,0,0,66,49.5);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(186.3,238.5,0.66,0.66,0,0,0,63.5,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.6,288.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(220.8,119.3,0.9,0.9,0,0,0,72,61);

	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(70,198.8,0.9,0.9,0,0,0,66,49.5);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(186.3,238.5,0.66,0.66,0,0,0,63.5,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.6,288.3);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(220.8,119.3,0.9,0.9,0,0,0,72,61);

	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(70,198.8,0.9,0.9,0,0,0,66,49.5);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(186.3,238.5,0.66,0.66,0,0,0,63.5,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.6,288.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(220.8,119.3,0.9,0.9,0,0,0,72,61);

	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(70,198.8,0.9,0.9,0,0,0,66,49.5);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(186.3,238.5,0.66,0.66,0,0,0,63.5,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.6,288.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(78,69,1,1,0,0,0,78,69);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(220.8,119.3,0.9,0.9,0,0,0,72,61);

	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(70,198.8,0.9,0.9,0,0,0,66,49.5);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(186.3,238.5,0.66,0.66,0,0,0,63.5,75.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,285.6,288.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// slot_14.png - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ32();
	this.instance.setTransform(378,-258.8,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// slot_14.png - копия: 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(119,-259.8,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// slot_14.png - копия: 2 - копия: 2 - копия
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(-114,-269.8,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// slot_14.png - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ33();
	this.instance_3.setTransform(-214,-18.8,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// slot_14.png - копия: 2 - копия
	this.instance_4 = new lib.Символ36();
	this.instance_4.setTransform(-48,277.2,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// slot_14.png - копия: 2
	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(230,263.2,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// slot_14.png - копия
	this.instance_6 = new lib.Символ34();
	this.instance_6.setTransform(279,5.2,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// slot_14.png
	this.instance_7 = new lib.Символ37();
	this.instance_7.setTransform(42,2.2,1,1,0,0,0,142.8,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.8,-414,877.6,835.3);


(lib.Символ24 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_58 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1));

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(239.7,152.2,1,1,0,0,0,152.2,152.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(34.6,243.7,1,1,0,0,0,34.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({x:-16.8,y:295.1},8,cjs.Ease.get(1)).to({x:34.6,y:243.7},6,cjs.Ease.get(1)).wait(15).to({x:-16.8,y:295.1},8,cjs.Ease.get(1)).to({x:34.6,y:243.7},6,cjs.Ease.get(1)).wait(6));

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(85.6,306.4,1,1,0,0,0,78.4,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({x:34.2,y:357.8},8,cjs.Ease.get(1)).to({x:85.6,y:306.4},6,cjs.Ease.get(1)).wait(15).to({x:34.2,y:357.8},8,cjs.Ease.get(1)).to({x:85.6,y:306.4},6,cjs.Ease.get(1)).wait(11));

	// Символ 19
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(148.2,357.1,1,1,0,0,0,34.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:96.8,y:408.5},8).to({x:148.2,y:357.1},6,cjs.Ease.get(1)).wait(15).to({x:96.8,y:408.5},8).to({x:148.2,y:357.1},6,cjs.Ease.get(1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.9,391.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(121,321,1,1,-5,0,0,121,321);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:121.1},27,cjs.Ease.get(1)).to({rotation:-5,x:121},27,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-7.1,268.4,333.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(468.9,1266.7,1,1,0,0,0,78,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(1115,782.6,1,1,0,0,0,78,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(434.8,489.5,1,1,0,0,0,78,75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1557.8,1612.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(13.7,13.7,0.07,0.07,0,0,0,195.8,195.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:18.3,y:8.6},21,cjs.Ease.get(1)).to({x:13.7,y:13.7},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,27.4);


(lib.Символ16 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(78.5,20,1,1,0,0,0,13.7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(65,35,1,1,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,-17,104,104);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// mouse
	this.instance = new lib.Символ16();
	this.instance.setTransform(-226,408,1,1,0,0,0,52,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-296,y:478},3,cjs.Ease.get(1)).wait(1).to({x:-226,y:408},4,cjs.Ease.get(1)).wait(1));

	// text
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(9,209.5,1,1,0,0,0,9,209.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:49},3,cjs.Ease.get(1)).wait(1).to({x:9},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265,0,283.3,443);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 3
	this.instance = new lib.Символ43();
	this.instance.setTransform(74,245.8,1,1,0,0,0,26.9,12.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(76,228.5,1,1,0,0,0,121,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0},3,cjs.Ease.get(1)).wait(1).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,60.9,291.2,333.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(578.8,619.8,1,1,0,0,0,438.8,409.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.2,y:73.1},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,210.1,1557.8,1612.5);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(778.9,556.1,1,1,0,0,0,778.9,556.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,210.1,1557.8,1612.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// art
	this.instance = new lib.Символ39();
	this.instance.setTransform(422.1,142.1,1,1,0,0,0,778.9,556.1);
	this.instance.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0.309},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.8,-203.9,1557.8,1612.5);


// stage content:



(lib.bonus_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		
		
		
		
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
			
		}
		
		
		_this.pric.visible=false;
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.baba.gotoAndPlay(1);
			_this.text.gotoAndPlay(1);
			_this.slot.gotoAndPlay(1);
			_this.mouse.gotoAndPlay(1);
			_this.pric.visible=true;
		
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		   _this.baba.gotoAndPlay(5);
			_this.text.gotoAndPlay(5);
			_this.slot.gotoAndPlay(5);
			_this.mouse.gotoAndPlay(5);
			_this.pric.visible=false;
			
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pric
	this.pric = new lib.Символ48();
	this.pric.setTransform(-150.4,270.6,1,1,0,0,0,49.6,49.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// logo
	this.instance = new lib.Символ2();
	this.instance.setTransform(120,49,1,1,0,0,0,59.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.mouse = new lib.Символ12();
	this.mouse.setTransform(231,209.5,1,1,0,0,0,9,209.5);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// text
	this.text = new lib.Символ9();
	this.text.setTransform(120,116.1,1,1,0,0,0,33.6,25.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// girl
	this.baba = new lib.Символ3();
	this.baba.setTransform(124,239,1,1,0,0,0,86,160);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// art
	this.slot = new lib.Символ26();
	this.slot.setTransform(78,244,1,1,0,0,0,78,75.5);

	this.timeline.addTween(cjs.Tween.get(this.slot).wait(1));

	// bg
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(142,133.1,1,1,0,0,0,396,308);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,25.1,1595,1751.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/aa2.png", id:"aa2"},
		{src:"images/aa3.png", id:"aa3"},
		{src:"images/aa4.png", id:"aa4"},
		{src:"images/aa5.png", id:"aa5"},
		{src:"images/aa6.png", id:"aa6"},
		{src:"images/frame.png", id:"frame"},
		{src:"images/green.png", id:"green"},
		{src:"images/Group3copy.png", id:"Group3copy"},
		{src:"images/katana.png", id:"katana"},
		{src:"images/Layer1.png", id:"Layer1"},
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer4.jpg", id:"Layer4"},
		{src:"images/Layer5.png", id:"Layer5"},
		{src:"images/light.png", id:"light"},
		{src:"images/zip1.png", id:"zip1"},
		{src:"images/zip2.png", id:"zip2"},
		{src:"images/zip3.png", id:"zip3"}
	]
};



// symbols:



(lib.aa2 = function() {
	this.initialize(img.aa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.aa3 = function() {
	this.initialize(img.aa3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,17);


(lib.aa4 = function() {
	this.initialize(img.aa4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,85);


(lib.aa5 = function() {
	this.initialize(img.aa5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,21);


(lib.aa6 = function() {
	this.initialize(img.aa6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,44);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,321);


(lib.green = function() {
	this.initialize(img.green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,91);


(lib.Group3copy = function() {
	this.initialize(img.Group3copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,361);


(lib.katana = function() {
	this.initialize(img.katana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,231);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,44);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,62);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,277,305);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.zip1 = function() {
	this.initialize(img.zip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,36);


(lib.zip2 = function() {
	this.initialize(img.zip2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,60);


(lib.zip3 = function() {
	this.initialize(img.zip3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,60);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa3();
	this.instance.setTransform(0.3,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.1,16,17);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa2();
	this.instance.setTransform(0.3,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.1,13,13);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.aa5();
	this.instance.setTransform(1,0.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0.2,15,21);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zip2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,60);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zip3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,60);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.zip1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,36);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABACqIAAgvIiHAAIAAAvIhHAAIAAhpQAQAAAIgNQAJgNAEgaQAEgYABgmIABhxIDUAAIAADjIAWAAIAABpgAgkAOQgCATgEAMQgDAMgHAIIBXAAIAAikIhEAAgAlqBiIAgg8QAiAdAgABQAlgBAAggQAAgOgLgIQgKgIgRAAIgrAAIAAg3IApAAQAOAAAIgHQAIgJAAgOQgBgLgIgJQgJgGgOgBQgOABgOAEQgPAGgKAJIgeg7QATgLAZgGQAYgGAWAAQAdAAAWAJQAXAJAMAUQAMASAAAdQAAATgKAPQgLAOgRAHQAPAFAMAKQAMAKAGALQAHAOAAANQAAAYgIASQgIATgOALQgPANgUAFQgVAHgZgBQg2AAgvgggAKjB7IAAkdIBLAAIAABgIAqAAQAhAAAWAKQAXAKAMAWQALAVAAAgQAAAggNAVQgNAVgXAKQgXAKggAAgALuA/IAMAAQATAAAKgCQALgBAHgJQAHgHAAgSQAAgPgIgIQgHgGgKgBIgpgCgAIoB7IAAh2IhrAAIAAB2IhLAAIAAkdIBLAAIAABvIBrAAIAAhvIBLAAIAAEdgAChB7IAAkdICjAAIAAA/IhYAAIAAAxIBUAAIAAA9IhUAAIAAAxIBYAAIAAA/gAm/B7IgTgxIhnAAIgTAxIhPAAIBukdIBRAAIBsEdgAnmAQIgehZIgBAAIgfBZIA+AAgAt8B7IAAkdIByAAQAfABAXAJQAYALANAVQANAVAAAgQAAAZgHATQgHARgNAKQgNANgSAFQgTAGgZAAIgqAAIAABfgAsygeIApgCQALgBAHgIQAHgHAAgRQAAgRgHgIQgHgIgKgCQgLgCgSAAIgNAAg");
	this.shape.setTransform(89.4,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,178.8,34.1);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EgzkAZtMAAAgzZMBnJAAAMAAAAzZg");
	this.shape.setTransform(330.1,164.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,660.2,329.1);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABzCqIAAgvIiHAAIAAAvIhHAAIAAhpQAQAAAJgNQAIgNAEgaQAEgYABgmIABhxIDUAAIAADjIAWAAIAABpgAAOAOQgCATgFAMQgDAMgFAIIBXAAIAAikIhGAAgAk3BiIAgg8QAiAdAgABQAlgBAAggQAAgOgLgIQgKgIgRAAIgrAAIAAg3IApAAQAOAAAIgHQAIgJAAgOQgBgLgIgJQgJgGgNgBQgOABgPAEQgPAGgKAJIgdg7QASgLAZgGQAYgGAWAAQAeAAAVAJQAXAJAMAUQAMASAAAdQABATgLAPQgLAOgRAHQAPAFAMAKQAMAKAGALQAIAOgBANQAAAYgIASQgHATgPALQgPANgUAFQgUAHgZgBQg3AAgvgggAJwB7IAAkdIBLAAIAABgIApAAQAhAAAXAKQAXAKALAWQAMAVAAAgQAAAggNAVQgNAVgYAKQgWAKggAAgAK7A/IAMAAQASAAALgCQALgBAGgJQAIgHgBgSQAAgPgHgIQgHgGgLgBIgogCgAHNB7IAAjeIg9AAIAAg/IDFAAIAAA/Ig9AAIAADegADVB7IAAkdICjAAIAAA/IhZAAIAAAxIBUAAIAAA9IhUAAIAAAxIBZAAIAAA/gAmMB7IgSgxIhoAAIgTAxIhPAAIBukdIBSAAIBsEdgAmzAQIgehZIgBAAIgeBZIA9AAgAtJB7IAAkdIByAAQAgABAWAJQAYALANAVQANAVAAAgQAAAZgHATQgHARgMAKQgOANgSAFQgTAGgZAAIgpAAIAABfgAr+geIAogCQALgBAHgIQAHgHAAgRQABgRgIgIQgGgIgLgCQgLgCgSAAIgMAAg");
	this.shape.setTransform(84.3,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,168.5,34.1);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjOCsQgcgMgWgVQgWgVgMgeQgLgdAAgiQAAgeAMgbQANgbAXgUQAWgUAdgKQAdgLAfAAQAfAAAcALQAdAKAWAUQAWAUALAbQANAbAAAeQAAAigMAdQgKAegVAVQgWAVgcAMQgeALghAAQgjAAgdgLgAi3glQgTAKgKASQgLAPAAAUQAAAYALATQAKAUATALQASALAXAAQAVAAATgLQATgLAKgUQAMgTAAgYQgBgUgLgPQgKgSgUgKQgSgLgVAAQgWAAgTALgAxLCsQgcgMgWgVQgWgVgLgeQgLgdAAgiQAAgeAMgbQANgbAWgUQAXgUAdgKQAcgLAfAAQAfAAAcALQAdAKAXAUQAVAUAOAbQANAbgBAeQAAAigLAdQgMAegWAVQgVAVgdAMQgdALgiAAQgjAAgdgLgAwzglQgTAKgLASQgLAPAAAUQAAAYALATQAKAUAUALQASALAWAAQAWAAATgLQASgLALgUQALgTAAgYQgBgUgKgPQgLgSgTgKQgTgLgVAAQgWAAgSALgAUqCuIAAkdICjAAIAAA/IhYAAIAAAwIBTAAIAAA9IhTAAIAAAyIBYAAIAAA/gARZCuIAAkdICjAAIAAA/IhYAAIAAAwIBUAAIAAA9IhUAAIAAAyIBYAAIAAA/gAMfCuIAAiuIgBAAIiICuIhKAAIAAkdIBKAAIAACtIABAAICIitIBLAAIAAEdgAFnCuIAihIIh6jVIBVAAIBKCIIA8iIIBNAAIiEEdgAAwCuIAAkdIC9AAIAAA/IhzAAIAAAoIArAAQAgAAAXAIQAWALANAVQAMAVgBAeQAAAegNAUQgNAUgXALQgYAKgfAAgAB6ByIArgCQALgCAHgHQAIgHAAgPQAAgOgIgHQgHgHgLgCIgrgBgAoZCuIAAkdIBxAAQAgAAAXAKQAYAKAMAWQANAVABAgQgBAXgGASQgHASgNAMQgNAMgTAGQgSAGgZAAIgqAAIAABfgAnPATIApgCQALgCAGgHQAIgIAAgOQAAgRgHgIQgHgIgKgCQgLgCgTAAIgMAAgAqVCuIAAjiIhrAAIAADiIhKAAIAAkdIEAAAIAAEdgA0WCuIAAjiIhrAAIAADiIhLAAIAAkdIEAAAIAAEdgAK4h9QgRgIgJgOQgLgPAAgUIAqAAQACAMAJAHQAIAGAMAAQANAAAIgGQAJgHACgMIAqAAQgBAUgKAPQgJAOgRAIQgRAHgUAAQgUAAgQgHg");
	this.shape.setTransform(148.6,18.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297.1,36.8);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArDCSQgegMgXgWQgWgVgMggQgMgeAAghQAAgiANgcQAOgbAXgVQAWgVAfgLQAegMAgAAQAgAAAdAMQAeALAXAVQAXAVAOAbQANAcAAAiQAAAhgMAeQgMAggWAVQgXAWgeAMQgeAMgjAAQgkAAgegMgAqrhHQgUALgLASQgMATAAATQAAAXAMAVQALAUAUAMQATALAXAAQAXABATgMQATgMAMgUQALgVAAgXQAAgTgLgTQgMgSgUgLQgTgMgWAAQgXAAgTAMgANzCUIAAkoIBNAAIAABjIAsAAQAiAAAXALQAYALAMAXQAMAUAAAiQAAAhgNAXQgOAWgYAKQgYAKghAAgAPABWIANAAQAUAAAKgCQALgCAHgIQAIgIAAgSQAAgRgIgIQgHgHgLgDIgrgBgALKCUIAAjmIhBAAIAAhCIDNAAIAABCIg/AAIAADmgAI2CUIgUgzIhrAAIgUAzIhSAAIBykoIBVAAIBwEogAINAmIgfheIgBAAIggBeIBAAAgABnCUIAAkoIB3AAQAgAAAYALQAZALANAWQAOAVAAAiQAAAagHATQgHARgOANQgOAMgTAFQgTAGgaAAIgsAAIAABjgAC0gLIArgCQALgCAHgIQAIgHAAgRQAAgSgHgIQgHgIgLgCQgLgCgUAAIgNAAgAheCUIAAkoICpAAIAABCIhbAAIAADmgAjeCUIAAi0IgBAAIiNC0IhOAAIAAkoIBOAAIAAC0IABAAICNi0IBNAAIAAEogAuXCUIAAjqIhvAAIAADqIhOAAIAAkoIEKAAIAAEog");
	this.shape.setTransform(111,15.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222,31.8);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkMCSQgegMgWgWQgXgWgMgfQgMgeAAghQAAghANgdQAOgbAXgVQAXgVAegLQAegLAgAAQAgAAAeALQAdALAYAVQAXAVANAbQAOAdAAAhQgBAhgMAeQgMAfgWAXQgWAVgeAMQgfAMgjAAQgkAAgegMgAj0hHQgTALgMASQgLASAAAVQAAAWALAVQALAUAUAMQATALAXAAQAXAAATgMQATgLAMgUQALgVAAgWQAAgVgLgSQgMgSgUgLQgTgMgWAAQgWAAgUAMgAIoCUIAAjmIhAAAIAAhCIDNAAIAABCIhAAAIAADmgAElCUIAAkoICqAAIAABCIhcAAIAAAyIBXAAIAAA/IhXAAIAAA0IBcAAIAABBgACmCUIAAh6QgKAGgWAIQgWAJgbAAQgSAAgRgGQgRgGgNgMQgNgMgHgOQgGgRAAgSIAAhwIBLAAIAABkQAAAQAMAJQALAIATAAQANAAARgGIAZgMIAAhzIBNAAIAAEogAnTCUIg+hhIhFBhIheAAIB1idIhfiLIBfAAIAuBNIAthNIBfAAIhfCLIBuCdg");
	this.shape.setTransform(69.3,15.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,138.7,31.8);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnwBXQAQAAAHgHQAIgGAFgWQACgTACghIAAgMIABiLIDfAAIAAEoIhOAAIAAjnIhIAAIgBBWIgBAdQgCApgJAcQgGAPgJALQgIAJgJAGQgXANgnAAgARLCRIgTg0IhrAAIgUA0IixAAIhkiBIgBAAIAACBIhNAAIAAkoIBNAAIAAB6IABAAIBdh6IBhAAIh2CNIB9CWIBvkjIBWAAIBwEogAQjAiIggheIgBAAIggBeIBBAAgADLCRIAAkoIBNAAIAADrIA4AAIAAjrIBOAAIAADrIA4AAIAAjrIBNAAIAAEogABLCRIAAkoIBOAAIAAEogAi1CRIAAkoIBNAAIAABjIArAAQAjAAAXAKQAWALAMAXIAFAIQAHATAAAbQAAAhgOAXQgIANgMAJQgIAGgIAEQgXALghAAgAhoBSIANAAQATAAALgCQALgBAHgJQAIgIAAgSQgBgRgHgHQgIgJgKgBIgrgCgAo9CRIgTg0IhsAAIgUA0IhSAAIBykoIBWAAIBvEogApmAiIgfheIgBAAIggBeIBAAAgAt1CRIgWiqIgBAAIhHCqIgeAAIhFiqIgBAAIgZCqIhNAAIAzkoIBMAAIA8CdIBAidIBNAAIAtEog");
	this.shape.setTransform(118.3,15.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,236.5,30.6);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.light();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.green();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,91);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.frame();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,656,321);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+AgQgcgHgCgPQgCgMAagOQAbgNAmgFQAlgEAdAHQAcAHACAPQACANgbANQgaAOgnAEQgMABgNAAQgWAAgSgEg");
	this.shape.setTransform(9.4,3.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,7.4);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.katana();
	this.instance.setTransform(-2,0,0.89,0.89);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,0,218,205.6);


(lib.Layer5_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,277,305);


(lib.Layer4_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Layer2_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,62);


(lib.Layer1_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,44);


(lib.Group3copy_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Group3copy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227,361);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aa4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой 2
	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(8.2,8.9,1,1,0,0,0,7.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:8.6,rotation:-15,x:6.5,y:10.6},14).to({regY:8.7,rotation:0,x:8.2,y:8.9},15).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ54();
	this.instance_2.setTransform(18,5.7,1,1,0,0,0,6.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:6.6,scaleY:1,skewX:-13.5,skewY:-8,x:16.5,y:6.3},14).to({regX:6.5,scaleY:1,skewX:0,skewY:0,x:18,y:5.7},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,85);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(9,25.3,1,1,0,0,0,7.6,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:7.7,rotation:15,x:9.3,y:24.7},14).to({regX:7.6,rotation:0,x:9,y:25.3},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.aa6();
	this.instance_1.setTransform(0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.1,24,44);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.setTransform(21.7,18.3,1,1,0,0,0,9.3,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:9.5,regY:18,x:21.9,y:37.2},0).wait(1).to({y:49.5},0).wait(1).to({y:56.8},0).wait(1).to({y:61.9},0).wait(1).to({y:66.3},0).wait(1).to({y:69.8},0).wait(1).to({y:72.6},0).wait(1).to({y:74.8},0).wait(1).to({y:76.6},0).wait(1).to({y:78},0).wait(1).to({y:79.1},0).wait(1).to({y:80.1},0).wait(1).to({y:80.8},0).wait(1).to({regX:9.3,regY:17.9,x:21.7,y:81.3},0).wait(7).to({regX:9.5,regY:18,x:21.9,y:80.6},0).wait(1).to({y:79.7},0).wait(1).to({y:78.5},0).wait(1).to({y:77},0).wait(1).to({y:75.1},0).wait(1).to({y:72.9},0).wait(1).to({y:70.1},0).wait(1).to({y:66.7},0).wait(1).to({y:62.4},0).wait(1).to({y:57.7},0).wait(1).to({y:52.1},0).wait(1).to({y:44.8},0).wait(1).to({y:34},0).wait(1).to({regX:9.3,regY:17.9,x:21.7,y:18.3},0).wait(6));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_1 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_2 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_3 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_4 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_5 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_6 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_7 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_8 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_9 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_10 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_11 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_12 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_13 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_14 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_19 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_20 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_21 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_22 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_23 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_24 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_25 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_26 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_27 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_28 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_29 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_30 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_31 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_32 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_33 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");
	var mask_graphics_34 = new cjs.Graphics().p("AkaFLIAAqVII1AAIAAKVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:21.7,y:-33}).wait(1).to({graphics:mask_graphics_1,x:21.7,y:-14.2}).wait(1).to({graphics:mask_graphics_2,x:21.7,y:-1.9}).wait(1).to({graphics:mask_graphics_3,x:21.7,y:5.4}).wait(1).to({graphics:mask_graphics_4,x:21.7,y:10.5}).wait(1).to({graphics:mask_graphics_5,x:21.7,y:14.9}).wait(1).to({graphics:mask_graphics_6,x:21.7,y:18.4}).wait(1).to({graphics:mask_graphics_7,x:21.7,y:21.2}).wait(1).to({graphics:mask_graphics_8,x:21.7,y:23.4}).wait(1).to({graphics:mask_graphics_9,x:21.7,y:25.2}).wait(1).to({graphics:mask_graphics_10,x:21.7,y:26.6}).wait(1).to({graphics:mask_graphics_11,x:21.7,y:27.7}).wait(1).to({graphics:mask_graphics_12,x:21.7,y:28.7}).wait(1).to({graphics:mask_graphics_13,x:21.7,y:29.4}).wait(1).to({graphics:mask_graphics_14,x:21.7,y:30}).wait(5).to({graphics:mask_graphics_19,x:21.7,y:30}).wait(1).to({graphics:mask_graphics_20,x:21.7,y:30}).wait(1).to({graphics:mask_graphics_21,x:21.7,y:29.2}).wait(1).to({graphics:mask_graphics_22,x:21.7,y:28.3}).wait(1).to({graphics:mask_graphics_23,x:21.7,y:27.1}).wait(1).to({graphics:mask_graphics_24,x:21.7,y:25.6}).wait(1).to({graphics:mask_graphics_25,x:21.7,y:23.7}).wait(1).to({graphics:mask_graphics_26,x:21.7,y:21.5}).wait(1).to({graphics:mask_graphics_27,x:21.7,y:18.7}).wait(1).to({graphics:mask_graphics_28,x:21.7,y:15.3}).wait(1).to({graphics:mask_graphics_29,x:21.7,y:11}).wait(1).to({graphics:mask_graphics_30,x:21.7,y:6.3}).wait(1).to({graphics:mask_graphics_31,x:21.7,y:0.7}).wait(1).to({graphics:mask_graphics_32,x:21.7,y:-6.6}).wait(1).to({graphics:mask_graphics_33,x:21.7,y:-17.4}).wait(1).to({graphics:mask_graphics_34,x:21.7,y:-33}).wait(6));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(10.4,29.9,1,1,30,0,0,10.4,29.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:10.5,regY:30,rotation:21,x:10.5,y:30.1},0).wait(1).to({rotation:15.2},0).wait(1).to({rotation:11.7},0).wait(1).to({rotation:9.3},0).wait(1).to({rotation:7.2,y:30},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:3.1,y:30.1},0).wait(1).to({rotation:2.3},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.1},0).wait(1).to({rotation:0.6,y:30},0).wait(1).to({rotation:0.3},0).wait(1).to({regX:10.4,regY:29.9,rotation:0,x:10.4,y:29.9},0).wait(7).to({regX:10.5,regY:30,rotation:0.4,x:10.5,y:30},0).wait(1).to({rotation:0.8,y:30.1},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:3,y:30},0).wait(1).to({rotation:4.1,x:10.4},0).wait(1).to({rotation:5.4,x:10.5,y:30.1},0).wait(1).to({rotation:7},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:11.3,y:30},0).wait(1).to({rotation:13.9,y:30.1},0).wait(1).to({rotation:17.4,x:10.4},0).wait(1).to({rotation:22.6,x:10.5},0).wait(1).to({regX:10.4,regY:29.9,rotation:30,x:10.4,y:29.9},0).wait(6));

	// Символ 36
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(33.1,30,1,1,-30,0,0,10.3,29.9);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:10.5,regY:30,rotation:-21,x:33.3},0).wait(1).to({rotation:-15.2,x:33.4},0).wait(1).to({rotation:-11.7},0).wait(1).to({rotation:-9.3},0).wait(1).to({rotation:-7.2,x:33.3},0).wait(1).to({rotation:-5.5,x:33.4},0).wait(1).to({rotation:-4.2,x:33.3},0).wait(1).to({rotation:-3.1,x:33.4},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.1,x:33.3},0).wait(1).to({rotation:-0.6,x:33.4},0).wait(1).to({rotation:-0.3,x:33.3},0).wait(1).to({regX:10.4,regY:29.9,rotation:0,x:33.2,y:29.9},0).wait(7).to({regX:10.5,regY:30,rotation:-0.4,x:33.3,y:30},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-7,y:29.9},0).wait(1).to({rotation:-9.1,y:30},0).wait(1).to({rotation:-11.3},0).wait(1).to({rotation:-13.9,y:29.9},0).wait(1).to({rotation:-17.4,y:30},0).wait(1).to({rotation:-22.6,y:29.9},0).wait(1).to({regX:10.3,regY:29.9,rotation:-30,x:33.1,y:30},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-1.3,56.8,37.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.setTransform(497.8,78.5,1,1,0,0,0,84.2,17.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).wait(1).to({x:394.1},0).wait(1).to({x:300.5},0).wait(1).to({x:239.9},0).wait(1).to({x:202.5},0).wait(1).to({x:176.9},0).wait(1).to({x:157.3},0).wait(1).to({x:141.8},0).wait(1).to({x:129.4},0).wait(1).to({x:119.4},0).wait(1).to({x:111.4},0).wait(1).to({x:105.2},0).wait(1).to({x:100.7},0).wait(1).to({x:97.8},0).wait(1).to({x:98.8},0).wait(1).to({x:100.8},0).wait(1).to({x:105.6},0).wait(1).to({x:117.8},0).to({regY:17,scaleX:1.15,scaleY:1.15,rotation:7.4,x:114.1,y:82},31).wait(1).to({regY:17.1,scaleX:1.14,scaleY:1.14,rotation:7.1,x:114.2,y:81.8,alpha:0.989},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:6.7,x:114.3,y:81.5,alpha:0.976},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:6.3,x:114.4,y:81.1,alpha:0.961},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:5.8,x:114.6,y:80.7,alpha:0.944},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:5.2,x:114.8,y:80.2,alpha:0.924},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:4.5,x:115,y:79.6,alpha:0.902},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:3.7,x:115.2,y:78.9,alpha:0.876},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:2.8,x:115.5,y:78.2,alpha:0.846},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:1.7,x:115.9,y:77.2,alpha:0.809},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:0.3,x:116.3,y:76,alpha:0.762},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.6,x:116.9,y:74.4,alpha:0.699},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-4,x:117.6,y:72.4,alpha:0.62},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.4,x:118.7,y:69.4,alpha:0.504},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-13.7,x:120.7,y:64.1,alpha:0.294},0).wait(1).to({regY:17.2,scaleX:0.28,scaleY:0.28,rotation:-22.6,x:123.5,y:56.6,alpha:0},0).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(497.2,29.6,1,1,0,0,0,148.6,18.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).wait(1).to({x:393.5},0).wait(1).to({x:300},0).wait(1).to({x:239.4},0).wait(1).to({x:201.9},0).wait(1).to({x:176.3},0).wait(1).to({x:156.8},0).wait(1).to({x:141.3},0).wait(1).to({x:128.9},0).wait(1).to({x:118.9},0).wait(1).to({x:110.9},0).wait(1).to({x:104.7},0).wait(1).to({x:100.2},0).wait(1).to({x:97.2},0).wait(1).to({x:98.3},0).wait(1).to({x:100.3},0).wait(1).to({x:105.1},0).wait(1).to({x:117.2},0).wait(3).to({scaleX:1.15,scaleY:1.15,rotation:7.4,x:120.7,y:26.4},31).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:7.1,y:26.6,alpha:0.989},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:6.7,y:26.8,alpha:0.976},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:6.3,y:27.1,alpha:0.961},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:5.8,x:120.6,y:27.4,alpha:0.944},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:5.2,y:27.7,alpha:0.924},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:4.5,x:120.5,y:28.1,alpha:0.902},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:3.7,x:120.4,y:28.5,alpha:0.876},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:2.8,y:29.1,alpha:0.846},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:1.7,x:120.3,y:29.7,alpha:0.809},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:0.3,x:120.1,y:30.5,alpha:0.762},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.6,x:120,y:31.6,alpha:0.699},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-4,x:119.8,y:33,alpha:0.62},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-7.4,x:119.4,y:35,alpha:0.504},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-13.7,x:118.8,y:38.7,alpha:0.294},0).wait(1).to({regY:18.5,scaleX:0.28,scaleY:0.28,rotation:-22.6,x:118,y:43.9,alpha:0},0).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(118.7,255,1,1,0,0,0,111,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:199.9},0).wait(1).to({y:166.4},0).wait(1).to({y:145.8},0).wait(1).to({y:131.7},0).wait(1).to({y:120.9},0).wait(1).to({y:113.1},0).wait(1).to({y:107.4},0).wait(1).to({y:103.3},0).wait(1).to({y:100.4},0).wait(1).to({y:98.4},0).wait(1).to({y:97.1},0).wait(1).to({y:96.4},0).wait(1).to({y:96},0).wait(3).to({y:96.1},0).wait(1).to({y:96.4},0).wait(1).to({y:96.7},0).wait(1).to({y:97.1},0).wait(1).to({y:97.6},0).wait(1).to({y:98.2},0).wait(1).to({y:99},0).wait(1).to({y:99.9},0).wait(1).to({y:100.9},0).wait(1).to({y:102.2},0).wait(1).to({y:103.9},0).wait(1).to({y:106},0).to({regY:16,scaleX:1.11,scaleY:1.11,rotation:6.7,x:112.8,y:110.7},37).wait(1).to({regY:15.9,scaleX:1.11,scaleY:1.11,rotation:6.6,x:112.9,y:110.5,alpha:0.997},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:6.4,x:113,y:110.2,alpha:0.988},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:5.9,x:113.2,y:109.7,alpha:0.973},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:5.3,x:113.5,y:108.9,alpha:0.951},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:4.4,x:113.9,y:107.9,alpha:0.923},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:3.3,x:114.2,y:106.7,alpha:0.886},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:2,x:114.8,y:105.1,alpha:0.842},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:0.4,x:115.5,y:103.3,alpha:0.79},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-1.4,x:116.3,y:101.2,alpha:0.729},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-3.4,x:117.1,y:98.9,alpha:0.661},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-5.8,x:118.1,y:96.2,alpha:0.584},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-8.6,x:119.3,y:93,alpha:0.49},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-12.2,x:120.9,y:88.9,alpha:0.369},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-17,x:122.9,y:83.3,alpha:0.208},0).wait(1).to({regX:110.9,scaleX:0.34,scaleY:0.34,rotation:-23.3,x:125.6,y:76.2,alpha:0},0).to({_off:true},1).wait(60));

	// Символ 28
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(117.5,60.4,0.259,0.259,0,0,0,69.4,15.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({regX:69.3,regY:15.9,scaleX:0.67,scaleY:0.67,x:117.4,alpha:0.445},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.684},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:117.3,alpha:0.824},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.913},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.968},0).wait(1).to({regY:15.8,scaleX:1.19,scaleY:1.19,x:117.5,alpha:1},0).to({scaleX:1,scaleY:1},4).to({scaleX:1.11,scaleY:1.11,rotation:6.7,y:60.2},37).wait(1).to({regY:15.9,scaleX:1.11,scaleY:1.11,rotation:6.6,x:117.4,y:60.3,alpha:0.997},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:6.4,alpha:0.988},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:5.9,x:117.5,alpha:0.973},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:5.3,x:117.6,y:60.4,alpha:0.951},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:4.4,x:117.7,alpha:0.923},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:3.3,x:117.8,alpha:0.886},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:2,x:118,alpha:0.842},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:0.4,x:118.2,y:60.5,alpha:0.79},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-1.4,x:118.4,alpha:0.729},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-3.4,x:118.7,y:60.6,alpha:0.661},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-5.8,x:119,y:60.7,alpha:0.584},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-8.6,x:119.3,alpha:0.49},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-12.2,x:119.8,y:60.9,alpha:0.369},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-17,x:120.3,y:61,alpha:0.208},0).wait(1).to({regX:69.4,regY:15.8,scaleX:0.34,scaleY:0.34,rotation:-23.3,x:121.1,y:61.1,alpha:0},0).to({_off:true},1).wait(60));

	// Символ 27
	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(118.2,-120.8,1,1,0,0,0,118.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:15.3,y:-70.1},0).wait(1).to({y:-39.4},0).wait(1).to({y:-20.5},0).wait(1).to({y:-7.5},0).wait(1).to({y:2.4},0).wait(1).to({y:9.6},0).wait(1).to({y:14.9},0).wait(1).to({y:18.6},0).wait(1).to({y:21.2},0).wait(1).to({y:23},0).wait(1).to({y:24.2},0).wait(1).to({y:24.9},0).wait(1).to({y:25.2},0).wait(1).to({regY:15.2},0).wait(1).to({regY:15.3,y:25.3},0).wait(1).to({y:25.1},0).wait(1).to({y:24.9},0).wait(1).to({y:24.6},0).wait(1).to({y:24.2},0).wait(1).to({y:23.7},0).wait(1).to({y:23},0).wait(1).to({y:22.3},0).wait(1).to({y:21.4},0).wait(1).to({y:20.4},0).wait(1).to({y:19.1},0).wait(1).to({y:17.4},0).wait(1).to({regY:15.2,y:15.2},0).to({scaleX:1.11,scaleY:1.11,rotation:6.7,x:124.2,y:10.6},37).wait(1).to({regY:15.3,scaleX:1.11,scaleY:1.11,rotation:6.6,y:10.8,alpha:0.997},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:6.4,x:124.1,y:11.1,alpha:0.988},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:5.9,x:123.9,y:11.8,alpha:0.973},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:5.3,x:123.7,y:12.6,alpha:0.951},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:4.4,x:123.3,y:13.7,alpha:0.923},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:3.3,x:122.9,y:15.1,alpha:0.886},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:2,x:122.4,y:16.7,alpha:0.842},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:0.4,x:121.9,y:18.7,alpha:0.79},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-1.4,x:121.2,y:21.1,alpha:0.729},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-3.4,x:120.5,y:23.7,alpha:0.661},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-5.8,x:119.6,y:26.6,alpha:0.584},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-8.6,x:118.6,y:30.2,alpha:0.49},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-12.2,x:117.3,y:34.9,alpha:0.369},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-17,x:115.6,y:41,alpha:0.208},0).wait(1).to({regY:15.5,scaleX:0.34,scaleY:0.34,rotation:-23.3,x:113.3,y:49.1,alpha:0},0).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-136,236.5,406.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(7.9,5.4,0.214,0.214,0,0,0,10.5,10.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.45,scaleY:0.45,x:8.6,y:6.9,alpha:0.299},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:9.2,y:7.9,alpha:0.5},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:9.5,y:8.6,alpha:0.615},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:9.7,y:9,alpha:0.695},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:9.9,y:9.3,alpha:0.766},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:10,y:9.6,alpha:0.824},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:10.2,y:9.9,alpha:0.871},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:10.3,y:10,alpha:0.908},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:10.2,alpha:0.938},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:10.4,y:10.3,alpha:0.961},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:10.4,alpha:0.978},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:10.5,alpha:0.99},0).wait(1).to({scaleX:1,scaleY:1,y:10.5,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(1).to({x:14.1,y:27.9},0).wait(1).to({x:16.4,y:38.9},0).wait(1).to({x:18,y:46.4},0).wait(1).to({x:19.1,y:51.8},0).wait(1).to({x:20,y:56.1},0).wait(1).to({x:20.7,y:59.5},0).wait(1).to({x:21.3,y:62.4},0).wait(1).to({x:21.8,y:64.8},0).wait(1).to({x:22.2,y:66.8},0).wait(1).to({x:22.6,y:68.5},0).wait(1).to({x:22.9,y:69.9},0).wait(1).to({x:23.1,y:71.1},0).wait(1).to({x:23.3,y:72.1},0).wait(1).to({x:23.5,y:73},0).wait(1).to({x:23.6,y:73.7},0).wait(1).to({x:23.8,y:74.3},0).wait(1).to({x:23.9,y:74.9},0).wait(1).to({x:24,y:75.4},0).wait(1).to({x:24.1,y:75.8},0).wait(1).to({x:24.2,y:76.2},0).wait(1).to({y:76.5},0).wait(1).to({x:24.3,y:76.8},0).wait(1).to({x:24.4,y:77.2},0).wait(1).to({y:77.5},0).wait(1).to({x:24.5,y:77.8},0).to({alpha:0},10).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.6,3.2,4.5,4.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(15.5,45.5,1,1,0,0,0,15.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,91);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(328,160.5,1,1,0,0,0,328,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},12).to({alpha:1},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,656,321);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ12();
	this.instance.setTransform(-16.6,5.3,1,1,6.6,0,0,9.3,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.1,y:12.7},5,cjs.Ease.get(-1)).to({x:-16.6,y:5.3},5,cjs.Ease.get(1)).wait(1).to({x:-18.1,y:12.7},5,cjs.Ease.get(-1)).to({x:-16.6,y:5.3},5,cjs.Ease.get(1)).to({_off:true},1).wait(58));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(9.3,3.6,1,1,0,0,0,9.3,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:9.8,y:10.9},5,cjs.Ease.get(-1)).to({x:9.3,y:3.6},5,cjs.Ease.get(1)).wait(1).to({x:9.8,y:10.9},5,cjs.Ease.get(-1)).to({x:9.3,y:3.6},5,cjs.Ease.get(1)).to({_off:true},1).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,0,45,10);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer2_1();
	this.instance.setTransform(53,31,1,1,0,0,0,53,31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,62);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjPATQAjgNATgUQAygHAWAsQglAKgeAAQgiAAgZgOgABCAKQA6hJBUA0QgfAegzAAQgbAAghgJg");
	mask.setTransform(100.7,67.6);

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.setTransform(114,59.8,1,1,0,0,0,9.3,3.6);

	this.instance.mask = mask;

	// Слой 5
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(103.1,194.2,1,1,0,0,0,10.5,10.5);

	// Слой 4
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(110,227.4,1,1,0,0,0,15.5,45.5);

	// Слой 1
	this.instance_3 = new lib.Group3copy_1();
	this.instance_3.setTransform(113.5,180.5,1,1,0,0,0,113.5,180.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227,361);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer1_1();
	this.instance.setTransform(21.5,22,1,1,0,0,0,21.5,22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,44);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer5_1();
	this.instance.setTransform(138.5,152.5,1,1,0,0,0,138.5,152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,277,305);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Layer4_1();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(45.2,42.2,1,1,0,0,0,25.8,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 2
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(12.1,40.4,1,1,0,0,0,11.9,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:12,regY:22.1,scaleY:1,skewX:1.9,skewY:5,x:12.7,y:38.9},29).to({regX:11.9,regY:22,scaleY:1,skewX:0,skewY:0,x:12.1,y:40.4},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0,70.6,85);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.setTransform(-2.2,9.9,1,1,0,0,0,38,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:8.2},0).wait(1).to({y:8.3},0).wait(1).to({y:8.4},0).wait(1).to({y:8.5},0).wait(1).to({y:8.6},0).wait(1).to({y:8.8},0).wait(1).to({y:9},0).wait(1).to({y:9.3},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:11.3},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:9.9},0).wait(1).to({y:10.2},0).wait(1).to({y:10.4},0).wait(1).to({y:10.6},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:12.9},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:11.2},0).wait(1).to({y:11.1},0).wait(2).to({y:11},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.5},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:11.4},0).wait(1).to({regX:35.6,regY:42.4,x:-4.6,y:9.4},0).wait(1).to({y:9.2},0).wait(1).to({y:8.9},0).wait(1).to({y:8.7},0).wait(1).to({y:8.6},0).wait(1).to({y:8.4},0).wait(1).to({y:8.3},0).wait(2).to({y:8.2},0).wait(1).to({regX:38,regY:44.1,x:-2.2,y:9.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-34.2,70.7,85);


(lib.Символ37_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(59.5,9.6,1,1,-11.2,0,0,38,44.1);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-65.9,82.3,93.5);


(lib.Символ40 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ37_1();
	this.instance.setTransform(-11.1,17.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(46.4,27.2,0.875,0.875,0,0,0,53,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.9,y:26.6},15,cjs.Ease.get(-1)).to({scaleY:0.92,y:26},14,cjs.Ease.get(1)).to({scaleY:0.9,y:26.6},15,cjs.Ease.get(-1)).to({scaleY:0.88,y:27.2},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.8,54.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ10();
	this.instance.setTransform(117.2,142.4,1,1,0,0,0,107.2,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8,x:124.8,y:140.2},7,cjs.Ease.get(-1)).to({rotation:-3.9,x:132.3,y:137.9},7,cjs.Ease.get(1)).to({rotation:-2,x:125.3,y:140},7,cjs.Ease.get(-1)).to({rotation:0,x:117.2,y:142.4},8,cjs.Ease.get(1)).to({rotation:-1.5,x:123.7,y:140.4},6,cjs.Ease.get(-1)).to({rotation:-3.9,x:132.3,y:137.9},8,cjs.Ease.get(1)).to({rotation:-2,x:125.3,y:140},7,cjs.Ease.get(-1)).to({rotation:0,x:117.2,y:142.4},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-13,x:104.1,y:126.7},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,x:87.4,y:106.5},9,cjs.Ease.get(1)).to({regY:101.1,rotation:-24.5,x:98.5,y:106.6},3).to({regY:101,rotation:-30,x:87.4,y:106.5},3).to({regY:101.1,rotation:-24.5,x:98.5,y:106.6},3).to({regY:101,rotation:-30,x:87.4,y:106.5},6).wait(7).to({regX:107.1,regY:101.1,scaleX:1,scaleY:1,rotation:-14.8,x:102.3,y:124.6},5,cjs.Ease.get(-1)).to({regX:107.2,regY:101,scaleX:1,scaleY:1,rotation:0,x:117.2,y:142.4},5,cjs.Ease.get(1)).wait(6));

	// Символ 6
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(129.1,170,1,1,0,0,0,46.4,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(140,173.1,0.875,0.875,0,0,0,113.5,180.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(54.2,220.8,0.875,0.875,0,0,0,21.5,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:22,rotation:-0.3,x:55.7,y:220.7},0).wait(1).to({rotation:-0.5,x:57.1},0).wait(1).to({rotation:-0.8,x:58.6,y:220.6},0).wait(1).to({rotation:-1,x:60.1},0).wait(1).to({rotation:-1.3,x:61.6},0).wait(1).to({rotation:-1.5,x:63.1},0).wait(1).to({regX:21.4,rotation:-1.8,x:64.5},0).to({regX:21.6,regY:22.1,rotation:-3.9,x:74.9,y:220.4},7,cjs.Ease.get(1)).to({rotation:-2,x:65.3,y:220.5},7,cjs.Ease.get(-1)).to({regX:21.5,rotation:0,x:54.2,y:220.8},8,cjs.Ease.get(1)).wait(1).to({regY:22,rotation:-0.3,x:55.7,y:220.7},0).wait(1).to({rotation:-0.5,x:57.1},0).wait(1).to({rotation:-0.8,x:58.6,y:220.6},0).wait(1).to({rotation:-1,x:60.1},0).wait(1).to({rotation:-1.3,x:61.6},0).wait(1).to({regX:21.4,regY:22.1,rotation:-1.5,x:63,y:220.7},0).to({regX:21.6,rotation:-3.9,x:74.9,y:220.4},8,cjs.Ease.get(1)).to({rotation:-2,x:65.3,y:220.5},7,cjs.Ease.get(-1)).to({regX:21.5,rotation:0,x:54.2,y:220.8},8,cjs.Ease.get(1)).to({regX:21.4,scaleX:0.87,scaleY:0.87,rotation:-13,x:62,y:214.4},9,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88,rotation:-30,x:72,y:206},9,cjs.Ease.get(1)).to({regY:22,rotation:-24.5,x:73.7,y:204},3).to({regY:22.1,rotation:-30,x:72,y:206},3).to({regY:22,rotation:-24.5,x:73.7,y:204},3).to({regY:22.1,rotation:-30,x:72,y:206},6).wait(7).to({regY:22.2,scaleX:0.87,scaleY:0.87,rotation:-14.8,x:63.1,y:213.4},5,cjs.Ease.get(-1)).to({regX:21.5,regY:22.1,scaleX:0.88,scaleY:0.88,rotation:0,x:54.2,y:220.8},5,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,15.1,235.3,315.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(140,165.4,1,1,0,0,0,148,180.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:167.7},11,cjs.Ease.get(-1)).to({y:170.4},13,cjs.Ease.get(1)).to({y:167.8},13,cjs.Ease.get(-1)).to({y:165.4},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,233.3,315.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(447.6,198,1,1,0,0,0,21.8,49.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},9).to({alpha:0},9).to({_off:true},1).wait(11));

	// Слой 16
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(782.2,107.7,1,1,0,0,0,89.4,17.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(1).to({x:700.5},0).wait(1).to({x:632},0).wait(1).to({x:582.7},0).wait(1).to({x:548.5},0).wait(1).to({x:524},0).wait(1).to({x:505.5},0).wait(1).to({x:490.7},0).wait(1).to({x:478.7},0).wait(1).to({x:468.9},0).wait(1).to({x:460.9},0).wait(1).to({x:454.7},0).wait(1).to({x:450.1},0).wait(1).to({x:447.1},0).wait(1).to({x:446.1},0).wait(1).to({x:552.5},0).wait(1).to({x:616.3},0).wait(1).to({x:654.9},0).wait(1).to({x:682.6},0).wait(1).to({x:705.1},0).wait(1).to({x:722.9},0).wait(1).to({x:737.3},0).wait(1).to({x:749},0).wait(1).to({x:758.6},0).wait(1).to({x:766.3},0).wait(1).to({x:772.4},0).wait(1).to({x:777},0).wait(1).to({x:780.2},0).wait(1).to({x:782.2},0).to({_off:true},1).wait(6));

	// Слой 14
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(450,147.9,1,1,0,0,0,118.2,60.9);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:297.2,regY:67.4,x:628.4,y:154.4,alpha:0.84},0).wait(1).to({x:627.8,alpha:0.705},0).wait(1).to({x:627.4,alpha:0.589},0).wait(1).to({x:627,alpha:0.488},0).wait(1).to({x:626.6,alpha:0.402},0).wait(1).to({x:626.3,alpha:0.331},0).wait(1).to({x:626.1,alpha:0.274},0).wait(1).to({x:625.9,alpha:0.229},0).wait(1).to({x:625.8,alpha:0.192},0).wait(1).to({x:625.6,alpha:0.161},0).wait(1).to({x:625.5,alpha:0.133},0).wait(1).to({x:625.4,alpha:0.108},0).wait(1).to({x:625.3,alpha:0.086},0).wait(1).to({alpha:0.067},0).wait(1).to({x:625.2,alpha:0.049},0).wait(1).to({x:625.1,alpha:0.033},0).wait(1).to({alpha:0.02},0).wait(1).to({x:625,alpha:0.008},0).wait(1).to({regX:118.2,regY:60.9,x:446,y:147.9,alpha:0},0).wait(9).to({regX:297.2,regY:67.4,x:625.8,y:154.4,alpha:0.21},0).wait(1).to({x:626.5,alpha:0.378},0).wait(1).to({x:627,alpha:0.509},0).wait(1).to({x:627.4,alpha:0.612},0).wait(1).to({x:627.8,alpha:0.698},0).wait(1).to({x:628.1,alpha:0.768},0).wait(1).to({x:628.3,alpha:0.826},0).wait(1).to({x:628.5,alpha:0.875},0).wait(1).to({x:628.7,alpha:0.917},0).wait(1).to({x:628.8,alpha:0.951},0).wait(1).to({x:628.9,alpha:0.979},0).wait(1).to({regX:118.2,regY:60.9,x:450,y:147.9,alpha:1},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(189.5,171.1,1,1,0,0,0,130.5,158);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:87.1,regY:135.2,scaleX:1.01,scaleY:1.01,x:147,y:148.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:147.8,y:148},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:148.4,y:147.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:149},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149.4,y:147.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149.9,y:147.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.4,y:147.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:150.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:151,y:147.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:151.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:151.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:151.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:151.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:151.6},0).wait(1).to({y:147.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:151.7},0).wait(1).to({regX:130.5,regY:158,scaleX:1.07,scaleY:1.07,x:198,y:171.8},0).wait(1).to({regX:87.1,regY:135.2,scaleX:1.06,scaleY:1.06,x:151,y:147.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.3,y:147.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149.3,y:147.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:148.9,y:147.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:148.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:148.2,y:148},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:147.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:147.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:147.4,y:148.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:147.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:147,y:148.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:146.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:146.7},0).wait(1).to({scaleX:1,scaleY:1,x:146.6},0).wait(1).to({scaleX:1,scaleY:1,x:146.4},0).wait(1).to({scaleX:1,scaleY:1,x:146.3,y:148.3},0).wait(1).to({scaleX:1,scaleY:1,x:146.2},0).wait(1).to({scaleX:1,scaleY:1,x:146.1},0).wait(1).to({regX:130.5,regY:158,scaleX:1,scaleY:1,x:189.5,y:171.1},0).wait(1));

	// Layer 2
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(188.2,153.4,1.359,0.995,0,0,0,138.5,152.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:152.5,scaleX:1.37,scaleY:1.01,x:189.6,y:153.2},0).wait(1).to({scaleX:1.39,scaleY:1.01,x:190.7},0).wait(1).to({scaleX:1.4,scaleY:1.02,x:191.7,y:153.1},0).wait(1).to({scaleX:1.4,scaleY:1.03,x:192.5,y:153},0).wait(1).to({scaleX:1.41,scaleY:1.03,x:193.2},0).wait(1).to({scaleX:1.42,scaleY:1.04,x:193.8,y:152.9},0).wait(1).to({scaleX:1.42,scaleY:1.04,x:194.3},0).wait(1).to({scaleX:1.43,scaleY:1.05,x:194.7},0).wait(1).to({scaleX:1.43,scaleY:1.05,x:195},0).wait(1).to({scaleX:1.43,scaleY:1.05,x:195.2,y:152.8},0).wait(1).to({scaleX:1.44,scaleY:1.05,x:195.5},0).wait(1).to({scaleX:1.44,scaleY:1.05,x:195.7},0).wait(1).to({scaleX:1.44,scaleY:1.06,x:195.8},0).wait(1).to({scaleX:1.44,scaleY:1.06,x:196},0).wait(1).to({scaleX:1.44,scaleY:1.06,x:196.2},0).wait(1).to({scaleX:1.45,scaleY:1.06,x:196.3},0).wait(1).to({scaleX:1.45,x:196.4},0).wait(1).to({scaleX:1.45,scaleY:1.06,x:196.5},0).wait(1).to({regY:152.6,scaleX:1.45,scaleY:1.06,x:196.6},0).wait(1).to({regY:152.5,scaleX:1.44,scaleY:1.05,x:195.5},0).wait(1).to({scaleX:1.43,scaleY:1.05,x:194.5,y:152.9},0).wait(1).to({scaleX:1.42,scaleY:1.04,x:193.7},0).wait(1).to({scaleX:1.41,scaleY:1.03,x:192.9,y:153},0).wait(1).to({scaleX:1.4,scaleY:1.03,x:192.3},0).wait(1).to({scaleX:1.4,scaleY:1.02,x:191.8,y:153.1},0).wait(1).to({scaleX:1.39,scaleY:1.02,x:191.3},0).wait(1).to({scaleX:1.39,scaleY:1.02,x:190.9},0).wait(1).to({scaleX:1.38,scaleY:1.01,x:190.5},0).wait(1).to({scaleX:1.38,scaleY:1.01,x:190.2,y:153.2},0).wait(1).to({scaleX:1.38,scaleY:1.01,x:189.9},0).wait(1).to({scaleX:1.37,scaleY:1.01,x:189.6},0).wait(1).to({scaleX:1.37,scaleY:1,x:189.4},0).wait(1).to({scaleX:1.37,scaleY:1,x:189.1},0).wait(1).to({scaleX:1.37,scaleY:1,x:188.9},0).wait(1).to({scaleX:1.36,scaleY:1,x:188.8},0).wait(1).to({scaleX:1.36,scaleY:1,x:188.6},0).wait(1).to({scaleX:1.36,scaleY:1,x:188.4},0).wait(1).to({scaleX:1.36,scaleY:1,x:188.3},0).wait(1).to({regY:152.6,scaleX:1.36,scaleY:1,x:188.2,y:153.4},0).wait(1));

	// Слой 15
	this.instance_5 = new lib.Символ32();
	this.instance_5.setTransform(320.1,153.5,1,1,0,0,0,330.1,164.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:319.5,alpha:0.16},0).wait(1).to({x:319,alpha:0.295},0).wait(1).to({x:318.5,alpha:0.411},0).wait(1).to({x:318.1,alpha:0.512},0).wait(1).to({x:317.8,alpha:0.598},0).wait(1).to({x:317.5,alpha:0.669},0).wait(1).to({x:317.2,alpha:0.726},0).wait(1).to({x:317.1,alpha:0.771},0).wait(1).to({x:316.9,alpha:0.808},0).wait(1).to({x:316.8,alpha:0.839},0).wait(1).to({x:316.7,alpha:0.867},0).wait(1).to({x:316.6,alpha:0.892},0).wait(1).to({x:316.5,alpha:0.914},0).wait(1).to({x:316.4,alpha:0.933},0).wait(1).to({x:316.3,alpha:0.951},0).wait(1).to({alpha:0.967},0).wait(1).to({x:316.2,alpha:0.98},0).wait(1).to({alpha:0.992},0).wait(1).to({x:316.1,alpha:1},0).wait(1).to({x:316.7,alpha:0.869},0).wait(1).to({x:317.1,alpha:0.753},0).wait(1).to({x:317.5,alpha:0.653},0).wait(1).to({x:317.9,alpha:0.566},0).wait(1).to({x:318.2,alpha:0.491},0).wait(1).to({x:318.4,alpha:0.427},0).wait(1).to({x:318.7,alpha:0.369},0).wait(1).to({x:318.9,alpha:0.318},0).wait(1).to({x:319.1,alpha:0.272},0).wait(1).to({x:319.2,alpha:0.232},0).wait(1).to({x:319.4,alpha:0.196},0).wait(1).to({x:319.5,alpha:0.163},0).wait(1).to({x:319.6,alpha:0.134},0).wait(1).to({x:319.7,alpha:0.107},0).wait(1).to({x:319.8,alpha:0.083},0).wait(1).to({x:319.9,alpha:0.062},0).wait(1).to({x:320,alpha:0.043},0).wait(1).to({alpha:0.026},0).wait(1).to({x:320.1,alpha:0.012},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 4
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:1.01,scaleY:1.01,x:322.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:325.1,y:152.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:327.1,y:152.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:328.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:330.2,y:152.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:331.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:332.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:333.2,y:152.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:333.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:334.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:334.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:335.2,y:152},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:335.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:335.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:336.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:336.5},0).wait(1).to({x:336.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:336.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:337.1,y:151.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:334.9,y:152},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:332.9,y:152.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:331.1,y:152.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:329.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:328.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:327.3,y:152.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:326.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:325.5,y:152.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:324.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:324},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:323.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:322.8,y:152.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:322.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:321.9},0).wait(1).to({scaleX:1,scaleY:1,x:321.5},0).wait(1).to({scaleX:1,scaleY:1,x:321.1},0).wait(1).to({scaleX:1,scaleY:1,x:320.8},0).wait(1).to({scaleX:1,scaleY:1,x:320.5},0).wait(1).to({scaleX:1,scaleY:1,x:320.3},0).wait(1).to({scaleX:1,scaleY:1,x:320},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-65.1,660.2,445);


// stage content:



(lib.katana_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		//clickTAG
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		//MiuseEvents
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.girl.gotoAndPlay(1);
			_this.ruka.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		 function fl_MouseOutHandler_2()
		{
		    _this.girl.gotoAndPlay(20);
			_this.ruka.gotoAndPlay(0);
		}
		
		//cursor
		
		stage.canvas.style.cursor = "none";
		this.ruka.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.ruka.x = stage.mouseX;
			this.ruka.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.ruka = new lib.Символ40();
	this.ruka.setTransform(-73.3,282,1,1,0,0,0,2.7,0);

	this.timeline.addTween(cjs.Tween.get(this.ruka).wait(1));

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(321.5,154,1,1,0,0,0,328,160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.girl = new lib.Символ1();
	this.girl.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310,95.4,660.2,426);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#00FF00",
	manifest: [
		{src:"images/ddd.png?1467384574575", id:"ddd"},
		{src:"images/mac_03.png?1467384574575", id:"mac_03"},
		{src:"images/mac_05.png?1467384574575", id:"mac_05"},
		{src:"images/mac_09.png?1467384574575", id:"mac_09"},
		{src:"images/mac_12.png?1467384574575", id:"mac_12"},
		{src:"images/mac_16.png?1467384574575", id:"mac_16"},
		{src:"images/mac_18.png?1467384574575", id:"mac_18"},
		{src:"images/mac_20.png?1467384574575", id:"mac_20"},
		{src:"images/sdfasfasdf.jpg?1467384574575", id:"sdfasfasdf"}
	]
};



// symbols:



(lib.ddd = function() {
	this.initialize(img.ddd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2840,90);


(lib.mac_03 = function() {
	this.initialize(img.mac_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,104);


(lib.mac_05 = function() {
	this.initialize(img.mac_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,125);


(lib.mac_09 = function() {
	this.initialize(img.mac_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,52);


(lib.mac_12 = function() {
	this.initialize(img.mac_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,121);


(lib.mac_16 = function() {
	this.initialize(img.mac_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,104);


(lib.mac_18 = function() {
	this.initialize(img.mac_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,45);


(lib.mac_20 = function() {
	this.initialize(img.mac_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,57);


(lib.sdfasfasdf = function() {
	this.initialize(img.sdfasfasdf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAjDAJ/IAAgEMh7iAAAIAAz5MCpLAAAIH0T9g");
	this.shape.setTransform(-395.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-961.8,-64,1132.9,128);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ddd();
	this.instance.setTransform(-1420,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1420,-45,2840,90);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,-14.1,293.8,28.2);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Av1DeQBFgJDMgGQEzgKGxAAQGyAAEzAKQDLAGBGAJgArkjQQjMgGhFgHIfrAAQhGAHjLAGQkzAHmyAAQmxAAkzgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.4,-22.2,202.8,44.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8893C","#FF2300","#F8893C"],[0.004,0.502,1],-104.6,0,104.6,0).s().p("AwVDdIAAm5MAgrAAAIAAG5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-22.1,209.3,44.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-13.4,207.2,26.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-13.2,198.1,26.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(-17,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-12.8,204.8,25.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(-15.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.8,-13.1,196.3,26.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AKaBsQgCgHgHgLQARAAAfgHQAOgDAZgLQAJgGAGgFQAHgGAEgHQAFgGACgHQACgHAAgIQAAgIgCgGQgDgEgGgEQgGgFgIgBQgJgDgLAAQgnADgWAEQgqAHgMAFIgIglQAHAAAagFQAfgFAVgCQAVgCASAAQASAAANACQAOADAKAGQAHAEAFAFQAFAGAEAHQAEAHABAGQACAIAAAIQAAANgDAMQgEALgHALQgHALgKAIQgLAKgNAHQgXAMgOAFQgfAHgXAEQgCgMgEgHgAFoB8QgJgBgIgEQgHgDgGgEIgKgLQgHgMAAgOQAAgLAFgKQAFgJAKgHQAKgHANgEQANgEAPABQASAAAJACIAAgCQgBgLgDhxIgBgaIAmAAQgDANAAAgIABATQAaAAAWgDQAXgCAOgFIADAjIgTACQgtAFgXAAQAAAeADAgQAQAFAdAPQAKAGAcATIAIAFIgWAhQgHgIgOgLQgXgQgPgIIgKgFIABAJQAAANgEAJQgEAJgJAGQgIAGgNAEQgMADgQAAgAFnA8QgKAGAAAJQAAAGACADQADAEAFADQAJAEAMAAQAIAAAHgCQAHgCAEgDQAGgGAAgLIAAgOQgNgDgOAAQgQABgKAFgAsIBtIgNgSQAWgDAOgGQAOgFANgIQAKgHAHgIQAHgGAFgJQAEgJADgLQADgKABgNQABgPAAghIAAgkQAAgUgBgIIAoAAIgBAbIAAAnQgBAjgBARQgCAVgEANQgDALgFAJQgFAKgHAIQgHAJgKAHQgJAIgLAGQgMAHgMAFIghAKIgHgRgABkB2QgNgDgJgGQgIgGgFgGQgFgHgEgJQgDgJgCgLQgBgMAAgPIABiZIApABQgCAJgCAdIgDBpQAAAUACAKQABAKAFAGQAFAIAKADQAKAFAOAAQALAAALgEQAKgDAJgGQAJgHAHgIQAIgKAFgMIAIgWIAFgYQAQAKATAJQgJAegHAQQgIARgKALQgJAKgJAHQgJAHgLAFQgLAEgMACQgNACgNABQgPAAgOgEgAkFBLQASgBAYgFQAYgGATgJQAOgFAMgIQAMgHAKgIQALgKAKgKQAJgJAIgMQAKgNAHgOQAHgNAGgSIAOAPIARAOQgKATgJARQgKAPgLANQgMAOgMAMQgNAMgPAKQgfARgTAIQgmANgXAFIgTAFgAlsASIiaAAQgkAAgMABIAAgmQAPACAgAAICbAAQAgAAAPgCIAAAmQgMgBgjAAgAsxAOQABgLAAgNIAAhQQAAgQgBgKIAnAAIgBAaIAABQIABAYgAjegwQgTgPgUgKIAYgeIAqAdQAQAMARAQIgZAfQgRgTgSgOgALEhOQgqgHgVgFIALgjQAQAGAnAHQAVADAtACIAIAAIgFAjQgygDgWgDg");
	this.shape.setTransform(-11,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-12.7,163.8,25.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sdfasfasdf();
	this.instance.setTransform(-319.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.5,-45,728,90);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mac_03();
	this.instance.setTransform(-45,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-52,90,104);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mac_09();
	this.instance.setTransform(-37.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-26,75,52);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mac_16();
	this.instance.setTransform(-71.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-52,143,104);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mac_18();
	this.instance.setTransform(-32.5,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-22.5,65,45);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mac_20();
	this.instance.setTransform(-30.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-28.5,61,57);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mac_05();
	this.instance.setTransform(-81,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-62.5,162,125);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mac_12();
	this.instance.setTransform(-85,-60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-60.5,170,121);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.004,0.502,1],-40.2,-23.2,40.2,23.2).s().p("A2QYEMAf8g3XIMlHRMgf9A3Wg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-200.4,285,400.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.004,0.502,1],-40.2,-23.2,40.2,23.2).s().p("A2QYEMAf8g3XIMlHRMgf9A3Wg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.5,-200.4,285,400.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqxAFvIAArdMBVjAAAIAALdg");
	mask.setTransform(-1092.5,3.8);

	// Слой 1
	this.instance = new lib.Символ40();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-714.2},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1366.3,-32.9,547.6,73.6);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwVEVIAAopMAgrAAAIAAIpg");

	// Слой 2
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(-161.7,-45.1);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(283.9,-45.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_1}]},50).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:283.9},49).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-27.8,85.4,55.6);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(-0.3,0,1,0.997);
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-22.1,209.3,44.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.setTransform(0.7,-1.8,1.139,1.139,0,0,0,0,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:13.5,scaleX:1,scaleY:1,y:-1.7},14,cjs.Ease.get(1)).to({regY:13.4,scaleX:1.14,scaleY:1.14,y:-1.8},15,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(0,2.3,1.053,1.053,0,0,0,0,-13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.28,scaleY:1.28},14,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.2,-32.4,235.9,62.6);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.setTransform(-18.6,-243,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:-122.4},9).to({y:-129.9},2).wait(41).to({y:-137.4},3).to({y:-40.3,alpha:0},7).wait(11));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(-18.6,-218.6,0.796,0.796);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:-98},9).to({y:-105.5},2).wait(40).to({y:-113},3).to({y:-15.9,alpha:0},7).wait(14));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(-18.6,-192.1,0.954,0.954);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-71.5},9).to({y:-79},2).wait(39).to({y:-86.5},3).to({y:10.6,alpha:0},7).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.8,-252.7,158.8,72.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(-294.4,7.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1256.3,-56.5,1132.9,128);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(8.2,11.2,1,1,0,0,0,8.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-1.4,x:-0.3,y:0.2},0).wait(1).to({rotation:-2.5,x:-0.5,y:0.4},0).wait(1).to({rotation:-3.4,x:-0.6,y:0.5},0).wait(1).to({rotation:-4,x:-0.8,y:0.6},0).wait(1).to({rotation:-4.6,x:-0.9,y:0.7},0).wait(1).to({rotation:-5.1,x:-1,y:0.8},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.9,x:-1.1,y:0.9},0).wait(1).to({rotation:-6.2,x:-1.2,y:1},0).wait(1).to({rotation:-6.4},0).wait(1).to({rotation:-6.6},0).wait(1).to({rotation:-6.8,x:-1.3,y:1.1},0).wait(1).to({rotation:-6.9},0).wait(1).to({regX:8.2,regY:11.2,rotation:-7.1,x:8.3,y:11.3},0).wait(1).to({regX:0,regY:0,rotation:-5.6,x:-1,y:0.9},0).wait(1).to({rotation:-4.5,x:-0.9,y:0.7},0).wait(1).to({rotation:-3.7,x:-0.7,y:0.6},0).wait(1).to({rotation:-3,x:-0.6,y:0.5},0).wait(1).to({rotation:-2.5,x:-0.5,y:0.4},0).wait(1).to({rotation:-2,x:-0.4,y:0.3},0).wait(1).to({rotation:-1.5,x:-0.3},0).wait(1).to({rotation:-1.1,x:-0.2,y:0.2},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.6,x:-0.1,y:0.1},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.1,x:0},0).wait(1).to({regX:8.2,regY:11.2,rotation:0,x:8.2,y:11.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-26,75,52);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-52,143,104);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(20,5.5,1,1,0,0,0,20,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:3.3,x:0.4,y:-1.1},0).wait(1).to({rotation:6.2,x:0.7,y:-2.1},0).wait(1).to({rotation:8.8,x:1.1,y:-3},0).wait(1).to({rotation:11,x:1.4,y:-3.7},0).wait(1).to({rotation:12.8,x:1.7,y:-4.3},0).wait(1).to({rotation:14.4,x:2,y:-4.8},0).wait(1).to({rotation:15.8,x:2.3,y:-5.2},0).wait(1).to({rotation:17.1,x:2.5,y:-5.6},0).wait(1).to({rotation:18.3,x:2.7,y:-6},0).wait(1).to({rotation:19.3,x:3,y:-6.3},0).wait(1).to({rotation:20.2,x:3.1,y:-6.6},0).wait(1).to({rotation:20.9,x:3.3,y:-6.8},0).wait(1).to({rotation:21.6,x:3.4,y:-7},0).wait(1).to({rotation:22.2,x:3.6,y:-7.1},0).wait(1).to({rotation:22.7,x:3.7,y:-7.3},0).wait(1).to({rotation:23.2,x:3.8,y:-7.4},0).wait(1).to({rotation:23.6,x:3.9,y:-7.6},0).wait(1).to({rotation:24.1,x:4,y:-7.7},0).wait(1).to({regX:20,regY:5.5,rotation:24.5,x:20,y:5.5},0).wait(1).to({regX:0,regY:0,rotation:21.3,x:3.4,y:-6.9},0).wait(1).to({rotation:18.5,x:2.8,y:-6.1},0).wait(1).to({rotation:16,x:2.3,y:-5.3},0).wait(1).to({rotation:13.9,x:1.9,y:-4.7},0).wait(1).to({rotation:12.1,x:1.6,y:-4.1},0).wait(1).to({rotation:10.6,x:1.4,y:-3.6},0).wait(1).to({rotation:9.2,x:1.1,y:-3.1},0).wait(1).to({rotation:7.9,x:1,y:-2.7},0).wait(1).to({rotation:6.7,x:0.8,y:-2.3},0).wait(1).to({rotation:5.7,x:0.6,y:-2},0).wait(1).to({rotation:4.8,x:0.5,y:-1.7},0).wait(1).to({rotation:4,x:0.4,y:-1.4},0).wait(1).to({rotation:3.3,y:-1.2},0).wait(1).to({rotation:2.7,x:0.3,y:-0.9},0).wait(1).to({rotation:2.2,x:0.2,y:-0.8},0).wait(1).to({rotation:1.7,y:-0.6},0).wait(1).to({rotation:1.3,x:0.1,y:-0.4},0).wait(1).to({rotation:0.8,y:-0.3},0).wait(1).to({rotation:0.4,x:0,y:-0.1},0).wait(1).to({regX:20,regY:5.5,rotation:0,x:20,y:5.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-22.5,65,45);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-28.5,61,57);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:2.3},0).wait(1).to({y:4.1},0).wait(1).to({y:5.6},0).wait(1).to({y:6.9},0).wait(1).to({y:8},0).wait(1).to({y:8.9},0).wait(1).to({y:9.8},0).wait(1).to({y:10.6},0).wait(1).to({y:11.3},0).wait(1).to({y:11.9},0).wait(1).to({y:12.4},0).wait(1).to({y:12.9},0).wait(1).to({y:13.3},0).wait(1).to({y:13.7},0).wait(1).to({y:14},0).wait(1).to({y:14.2},0).wait(1).to({y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({y:14.8},0).wait(1).to({y:12.6},0).wait(1).to({y:10.9},0).wait(1).to({y:9.4},0).wait(1).to({y:8.2},0).wait(1).to({y:7.1},0).wait(1).to({y:6.2},0).wait(1).to({y:5.3},0).wait(1).to({y:4.5},0).wait(1).to({y:3.8},0).wait(1).to({y:3.2},0).wait(1).to({y:2.7},0).wait(1).to({y:2.2},0).wait(1).to({y:1.7},0).wait(1).to({y:1.4},0).wait(1).to({y:1},0).wait(1).to({y:0.8},0).wait(1).to({y:0.5},0).wait(1).to({y:0.3},0).wait(1).to({y:0.1},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-52,90,104);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-62.5,162,125);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-60.5,170,121);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,0,1.051,1.315);
	this.instance.alpha = 0.539;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(0,0,1,1.252);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.05,scaleY:1.32},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-27.7,209.3,55.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ38();
	this.instance.setTransform(0,-0.2,0.574,0.574,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ36();
	this.instance_1.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ39();
	this.instance_2.setTransform(0,0.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.2,-245.5,414.2,400.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(-18.7,1.1,0.758,0.758);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-23.4,178.8,47.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(15,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(-13,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-29.5,91,59);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(11.3,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:33.2,x:75.5},9,cjs.Ease.get(1)).wait(41).to({rotation:0,x:11.3},9,cjs.Ease.get(1)).wait(40).to({skewY:180,x:-15.7,y:-8.2},0).to({skewX:-20,skewY:160,x:-75},12).wait(54).to({skewX:0,skewY:180,x:-15.7},12).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,-68,90,104);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.2,-245.5,408.9,400.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(35,18.2,1,1,0,0,0,35,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.3,regY:-9.6,rotation:2.1,x:-0.3,y:-10.9},0).wait(1).to({rotation:4,x:0.7,y:-12},0).wait(1).to({rotation:5.6,x:1.6,y:-13},0).wait(1).to({rotation:6.9,x:2.3,y:-13.8},0).wait(1).to({rotation:8.1,x:3,y:-14.4},0).wait(1).to({rotation:9.1,x:3.5,y:-15},0).wait(1).to({rotation:10,x:4,y:-15.5},0).wait(1).to({rotation:10.8,x:4.5,y:-15.9},0).wait(1).to({rotation:11.5,x:5,y:-16.2},0).wait(1).to({rotation:12.1,x:5.3,y:-16.5},0).wait(1).to({rotation:12.6,x:5.7,y:-16.8},0).wait(1).to({rotation:13,x:5.9,y:-17},0).wait(1).to({rotation:13.3,x:6.1,y:-17.2},0).wait(1).to({rotation:13.6,x:6.3,y:-17.3},0).wait(1).to({rotation:13.9,x:6.4,y:-17.4},0).wait(1).to({rotation:14.2,x:6.6,y:-17.6},0).wait(1).to({rotation:14.4,x:6.8,y:-17.7},0).wait(1).to({rotation:14.7,x:7,y:-17.9},0).wait(1).to({regX:35,regY:18.2,rotation:15,x:35,y:18.2},0).wait(1).to({regX:-1.3,regY:-9.6,rotation:13,x:5.9,y:-17},0).wait(1).to({rotation:11.2,x:4.8,y:-16.1},0).wait(1).to({rotation:9.7,x:3.8,y:-15.2},0).wait(1).to({rotation:8.3,x:3.1,y:-14.5},0).wait(1).to({rotation:7.2,x:2.4,y:-13.9},0).wait(1).to({rotation:6.2,x:1.9,y:-13.3},0).wait(1).to({rotation:5.3,x:1.4,y:-12.8},0).wait(1).to({rotation:4.5,x:1,y:-12.3},0).wait(1).to({rotation:3.8,x:0.6,y:-11.9},0).wait(1).to({rotation:3.2,x:0.3,y:-11.5},0).wait(1).to({rotation:2.7,x:0,y:-11.2},0).wait(1).to({rotation:2.3,x:-0.2,y:-11},0).wait(1).to({rotation:1.9,x:-0.4,y:-10.8},0).wait(1).to({rotation:1.6,x:-0.5,y:-10.6},0).wait(1).to({rotation:1.3,x:-0.7,y:-10.4},0).wait(1).to({rotation:1.1,x:-0.8,y:-10.2},0).wait(1).to({rotation:0.8,x:-0.9,y:-10},0).wait(1).to({rotation:0.5,x:-1,y:-9.9},0).wait(1).to({rotation:0.3,x:-1.2,y:-9.7},0).wait(1).to({regX:35,regY:18.2,rotation:0,x:35,y:18.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-29.5,91,59);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(39.7,-26.4,0.828,0.828);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(-40.6,14.1,0.828,0.828);

	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(38.1,11.3,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-48,175.5,102.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mac_09.png
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:8.1,regY:1.8,x:8.1,y:0.6},0).wait(1).to({y:-0.4},0).wait(1).to({y:-1.3},0).wait(1).to({y:-2.1},0).wait(1).to({y:-2.8},0).wait(1).to({y:-3.4},0).wait(1).to({y:-3.9},0).wait(1).to({y:-4.4},0).wait(1).to({y:-4.8},0).wait(1).to({y:-5.2},0).wait(1).to({y:-5.5},0).wait(1).to({y:-5.8},0).wait(1).to({y:-6.1},0).wait(1).to({y:-6.3},0).wait(1).to({y:-6.5},0).wait(1).to({y:-6.7},0).wait(1).to({y:-6.9},0).wait(1).to({y:-7.1},0).wait(1).to({regX:0,regY:0,x:0,y:-9.1},0).wait(1).to({regX:8.1,regY:1.8,x:8.1,y:-6.1},0).wait(1).to({y:-5.1},0).wait(1).to({y:-4.2},0).wait(1).to({y:-3.5},0).wait(1).to({y:-2.8},0).wait(1).to({y:-2.2},0).wait(1).to({y:-1.7},0).wait(1).to({y:-1.2},0).wait(1).to({y:-0.7},0).wait(1).to({y:-0.4},0).wait(1).to({y:0},0).wait(1).to({y:0.3},0).wait(1).to({y:0.5},0).wait(1).to({y:0.7},0).wait(1).to({y:0.9},0).wait(1).to({y:1.1},0).wait(1).to({y:1.3},0).wait(1).to({y:1.5},0).wait(1).to({y:1.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-48,175.5,102.3);


(lib.Символ8 = function(mode,startPosition,loop) {
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

	// Слой 10
	this.instance = new lib.Символ35();
	this.instance.setTransform(264.5,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.21,scaleY:1.21},4).to({scaleX:1.13,scaleY:1.13},2).wait(1).to({scaleX:1.21,scaleY:1.21},2).to({scaleX:1,scaleY:1},4).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(79.9,-16.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:63.9,alpha:1},6).wait(1).to({x:79.9,alpha:0},6).wait(1));

	// Слой 8
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(-201,88.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},6).wait(1).to({alpha:1},6).wait(1));

	// Символ 3
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(-9.9,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.53,x:-219.9,alpha:0},6).wait(1).to({scaleX:1,x:-9.9,alpha:1},6).wait(1));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(-9.9,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-219.9,alpha:0},6).wait(1).to({x:-9.9,alpha:1},6).wait(1));

	// Символ 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(-267.6,4.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-111.6,alpha:1},4).to({x:-139.6},2).wait(1).to({x:-111.6},2).to({x:-267.6,alpha:0},4).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ41();
	this.instance_6.setTransform(1411,-14.3);
	this.instance_6.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:1231,alpha:0},3).to({_off:true},1).wait(6).to({_off:false},0).to({x:1411,alpha:0.551},3).wait(1));

	// Символ 5
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(-193.9,-3.7,0.759,1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,x:-231.4,alpha:1},6).wait(1).to({scaleX:0.76,x:-193.9,alpha:0},6).wait(1));

	// Слой 7
	this.instance_8 = new lib.Символ21();
	this.instance_8.setTransform(31.7,-15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-8.3},2).to({x:779.9,y:-16.7,alpha:0.672},4).wait(1).to({x:11.7,y:-15.7,alpha:1},4).to({x:31.7},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1224.6,-258.9,4055.6,400.8);


// stage content:



(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 1
	this.main = new lib.Символ8();
	this.main.setTransform(326.4,58.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 6
	this.instance = new lib.Символ20();
	this.instance.setTransform(313.6,45,1.135,1.248);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-534.2,-155.2,4055.6,400.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/avto.png?1467818902464", id:"avto"},
		{src:"images/baseGameBackground.jpg?1467818902464", id:"baseGameBackground"},
		{src:"images/Bonus_text.png?1467818902464", id:"Bonus_text"},
		{src:"images/button.png?1467818902464", id:"button"},
		{src:"images/button2.png?1467818902464", id:"button2"},
		{src:"images/goldconfetti1.png?1467818902464", id:"goldconfetti1"},
		{src:"images/lobbymockupM1mid_01.png?1467818902464", id:"lobbymockupM1mid_01"},
		{src:"images/lobbymockupM1mid_03.png?1467818902464", id:"lobbymockupM1mid_03"},
		{src:"images/lobbymockupM1mid_06.png?1467818902464", id:"lobbymockupM1mid_06"},
		{src:"images/LogoChase.png?1467818902464", id:"LogoChase"},
		{src:"images/ramka.png?1467818902464", id:"ramka"},
		{src:"images/reelGridFrame.png?1467818902464", id:"reelGridFrame"},
		{src:"images/slot.png?1467818902464", id:"slot"}
	]
};



// symbols:



(lib.avto = function() {
	this.initialize(img.avto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,86);


(lib.baseGameBackground = function() {
	this.initialize(img.baseGameBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,422);


(lib.Bonus_text = function() {
	this.initialize(img.Bonus_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,58);


(lib.button = function() {
	this.initialize(img.button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,109);


(lib.button2 = function() {
	this.initialize(img.button2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,109);


(lib.goldconfetti1 = function() {
	this.initialize(img.goldconfetti1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,188);


(lib.lobbymockupM1mid_01 = function() {
	this.initialize(img.lobbymockupM1mid_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,78);


(lib.lobbymockupM1mid_03 = function() {
	this.initialize(img.lobbymockupM1mid_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,74);


(lib.lobbymockupM1mid_06 = function() {
	this.initialize(img.lobbymockupM1mid_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,87);


(lib.LogoChase = function() {
	this.initialize(img.LogoChase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,47);


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,281);


(lib.reelGridFrame = function() {
	this.initialize(img.reelGridFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,307);


(lib.slot = function() {
	this.initialize(img.slot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,630);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACFBUIhJgQQhBgLiTgGQgzgBgZAEQgiAIgRADQgZAEgjgEIg8gHQhTAAgpgDQhHgFgogeQgegUgDgcQgCgWASgSQASgSAWADQAQABAXAPQAbASAKADQAMAEATAAIAggBQARAAA6AHQAvAFAcgFQAKgBASgFIAcgHQAbgEA9AFICOAGQBTACA2AMIA3AOQAjAJAUAEQApAFA1gBQAiAAA8gEQBRgGAqgHQBCgKAzgUIABACQAPgBANAKQgYATgmARIhSAoIgRALIgGAAQgXAAgtAHIgDgHIhOAOQgvAIggADQgwAFg9AAIgfAAg");
	this.shape.setTransform(66.8,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.7,17);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMMBQQgZAAgFgRIAAgDQgBgLAVgjQA0hZADgDIAsAAIABABQg4BfgFAKIAAAFQAAAHAQAAIAtAAIBGh2IAtAAIAAABIABAAIhcCdgAKdBQQAAgCAxhUIASgfIgwAAQgXAAgRAjIgwBSIAAAAIgrAAIgBAAQA+hyAHgJQAcgiAlAAIByAAIABAAIhbCdgAF8BQIAAAAIBJh9QASgUAMgFQAOgIAPgBIBFAAQAbAAAIAQIABAFIAAACQAAAKgTAeIg5BgIgtAAIAWgoIhFAAIgXAoIAAAAgAHdgIIgFAIIBEAAQASgZAAgDIAAgDQAAgHgQAAIgYAAQgbAAgOAegADMBQIgBAAIBdieIg6AjQgIAFgBAAIhfAAIhEB2IgtAAIAAAAIgBAAIBdifIC3AAIAAAAIAAgBIByABQASAAAKAOIACAJQAAAJgTAgQgLAUgOANQgWAWgmAAIg/gBQgWAngCACgAEnAAIAmAAQAeAAAGgIQAMgQAAgFIAAgBQgCgIgMABIgxAAgAhrBQQgZAAgFgRIAAgDQAAgLAUgjQA0hZACgDIAtAAIABABQg4BfgEAKIgBAFQAAAHAPAAIAuAAIBDh2IAtAAIABABIAAAAIhbCdgAlKBQIgBAAIAAAAIBaicIAtAAIAAACIgkA/IBCAAQAhAAAAAPIAAACQABAJgVAeQgOAWghALQgMACgHAAgAkGAnIAwAAQAXAAAIgUIABgBIhEAAQgBABgLAUgAn7BQIAAAAIBcigIBrAAQAgABAFARIAAAEIAAADQAAAHgMAUQgPAcgGAAQgCAAgPAAIAAAAQALAAACAJIAAADQgBAFgRAeQgWAhgxAAgAm3AnIAAAAIAyAAQAWAAAMgXIhHAAgAmJgmIgNAXIBGABQAIgNAAgEQgCgIgOAAgAsnBQIgBAAIAAAAIBaicIAtAAIAAACIgkA/IBCAAQAhAAAAAPIAAACQABAJgVAeQgOAWghALQgMACgHAAgArjAnIAwAAQAXAAAIgUIABgBIhEAAQgBABgLAUgAvYBQIAAAAIBcigIBrAAQAgABAFARIAAAEIAAADQAAAHgMAUQgPAcgGAAQgCAAgPAAIAAAAQALAAACAJIAAADQgBAFgRAeQgWAhgxAAgAuUAnIAAAAIAyAAQAWAAAMgXIhHAAgAtmgmIgNAXIBGABQAIgNAAgEQgCgIgOAAgAikgNQAig9ACgCIArAAIABABQgKAWgFABIhBAngAqBgNQAig9ACgCIArAAIABABQgKAWgFABIhBAng");
	this.shape.setTransform(99.8,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,10.4,197.2,16.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Bonus_text();
	this.instance.setTransform(12.7,11,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.7,11,175.5,50.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGyBRIgBgBIAAAAIBaicIAtABIAAABIgkA/IBCAAQAhAAAAAPIAAACQABAJgVAfQgOAVghALQgMADgHAAgAH2AoIAwAAQAXAAAIgVIABgBIhEAAQgBABgLAVgAEqBRIgBgBIBFh2Ig2AAIgNAWQg0BagFAGIgtAAIgBAAIAAgBIAXgnIhFAAIgYApIgtAAIgBgBIAAAAIBJh8QAcgjAoAAIA/AAQAYAAAIAOQACAEAAAEIgCAIIAzgfICbAAIAAABIhDApIgrAAIhFB3gACwgFIgEAFIBEAAQAMgMAGgOIABgEQgCgIgLAAIgeAAQgXAAgRAhgAhdBRIgBgBIBdifIBwAAQASAAAKAOIACAJQgBAKgSAgQgMATgNAOQgXAVgmAAIg9AAQgVAmgDADgAgCAAIAjAAQAeAAAHgIQALgQAAgFIAAgBQgBgHgMAAIgyAAgAkVBRIAAgBIgBAAIBcicIC0AAIAAABIhBAnIhcAAIgOAYIBMAAQAaADAAANQAAAHgQAaQgEAJgTASQgXARgYAAgAjQApIAqAAQAYAAAPgWIAAgBIhFAAQgDAEgJATgAnFBRIAAgBIgBAAIBJh8QAcgjAnAAIBAAAQAYAAAIAOQACAEAAAEQAAALgTAeQg0BagFAGIgtAAIAAAAIAAgBIAVgnIhFAAIgWApgAlmgFIgDAFIBDAAQALgMAHgOIABgEQgCgIgLAAIgeAAQgYAAgQAhgAp3BRIAAgBIBDgnIAwAAQAOAAAMgMQAHgIAAgDIhEABIAAgBIA4gdIAeAAIAOgYIhZAAIgBgBIAWgoICFAAIADAAIABAAIAAABIgnBEQgGAIgUAAIAAABQAOADAAAHQgCAGgQAbQgbAkgpAAg");
	this.shape.setTransform(63.2,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.4,16.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(0,-870.7,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(0,-435.4,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-870.7,108.7,1327.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(-0.5,-870.7,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(-0.4,-435.5,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-870.7,109.3,1327.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(0.4,-870.7,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(0.4,-435.3,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-870.7,109.1,1327.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(0,-868.8,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(0,-433.6,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,1.4,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-868.8,108.7,1326.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(-0.1,-871.1,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(-0.1,-435.6,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-871.1,108.8,1327.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.LogoChase();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,47);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lobbymockupM1mid_01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,78);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lobbymockupM1mid_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,74);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lobbymockupM1mid_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,87);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgVPAh5MAAAhDxMAqeAAAMAAABDxg");
	this.shape.setTransform(136,217);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,434);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.goldconfetti1();
	this.instance.setTransform(17.1,-534.3,0.97,0.97);

	this.instance_1 = new lib.goldconfetti1();
	this.instance_1.setTransform(11.5,-356.2,0.97,0.97);

	this.instance_2 = new lib.goldconfetti1();
	this.instance_2.setTransform(5.6,-178.1,0.97,0.97);

	this.instance_3 = new lib.goldconfetti1();
	this.instance_3.setTransform(0,0,0.97,0.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-534.3,308,716.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ramka();
	this.instance.setTransform(0,0,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,323.8,182);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("Aw9AAMAh7AAA");
	this.shape.setTransform(0,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0033FF").ss(3,1,1).p("AwyAAMAhlAAA");
	this.shape_1.setTransform(-0.6,-43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(3,1,1).p("Aw5AAMAhzAAA");
	this.shape_2.setTransform(-0.4,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-45.3,220.4,90.8);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("Aw5AAMAhzAAA");
	this.shape.setTransform(-0.4,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0033FF").ss(3,1,1).p("AwyAAMAhlAAA");
	this.shape_1.setTransform(-0.6,-43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(3,1,1).p("Aw9AAMAh7AAA");
	this.shape_2.setTransform(0,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-45.3,220.4,90.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("Aw5AAMAhzAAA");
	this.shape.setTransform(-0.4,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0033FF").ss(3,1,1).p("AwyAAMAhlAAA");
	this.shape_1.setTransform(-0.6,-43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(3,1,1).p("Aw9AAMAh7AAA");
	this.shape_2.setTransform(0,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-45.3,220.4,90.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(69,8.6,1,1,0,0,0,67.8,9.7);
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-2,-2,138,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-9.1,152,36);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(76.7,73.8,1,1,0,0,0,67.8,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.avto();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.1,92);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(-203.9,-9.3,1,1,0,0,0,75,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.62,scaleY:0.61,skewY:5.7,x:306,y:-20.3},64,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewY:0,x:815.2,y:-35.9},106).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.9,-52.3,155,92);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(-148.6,48.1,1,1,0,0,0,92.9,26.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({x:92.9,alpha:0.488},20).to({alpha:1},22).to({alpha:0.488},19).to({alpha:1},19).to({alpha:0},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-142.9,13.1,1,1,0,0,0,98.6,8.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({x:98.6,alpha:1},20).wait(60).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ13();
	this.instance.setTransform(43.8,77.6,1,1,0,0,0,100,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:49.8},14).to({x:43.8},15).to({x:39.8},15).to({x:43.8},15).wait(1));

	// lobby-mockup-M1-mid_06.png
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(37.2,29.1,1,1,0,0,0,36,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:39.2},14).to({x:37.2},15).to({x:34.2},15).to({x:37.2},15).wait(1));

	// lobby-mockup-M1-mid_03.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(83.7,33.9,1,1,0,0,0,34,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:84.7,y:32.9},14).to({x:83.7,y:33.9},15).to({x:84.7,y:32.9},15).to({x:83.7,y:33.9},15).wait(1));

	// lobby-mockup-M1-mid_01.png
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(-8.6,36,1,1,0,0,0,33.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-9.6,y:35},14).to({x:-8.6,y:36},15).to({x:-9.6,y:35},15).to({x:-8.6,y:36},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-14.4,200,115.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(375,206,1,1,0,0,0,136,217);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({alpha:0.289},81).to({alpha:0},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.baseGameBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,422);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(91.6,56.7,0.88,0.88,0,0,0,63.2,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:59.7},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.button();

	this.instance_2 = new lib.button2();
	this.instance_2.setTransform(0,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,109);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(145.5,91.2,1,1,0,0,0,145.5,91.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).to({y:836},79).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.reelGridFrame();
	this.instance.setTransform(48.9,18,0.445,0.445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(161.9,91,1,1,0,0,0,161.9,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(171));

	// Слой 10
	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(160.3,85.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.setTransform(160.3,85.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация3("synched",0);
	this.instance_4.setTransform(160.3,85.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},85).to({state:[{t:this.instance_3}]},80).to({state:[{t:this.instance_4}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({_off:true},80).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85).to({_off:false},80).to({_off:true,alpha:0},5).wait(1));

	// Слой 7
	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(245.2,22.8,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({y:7.5},4,cjs.Ease.get(-1)).to({y:240.1},15,cjs.Ease.get(1)).wait(5).to({y:222.1},5,cjs.Ease.get(-1)).to({y:458.8},15,cjs.Ease.get(1)).wait(5).to({y:440.4},5,cjs.Ease.get(-1)).to({y:937.6},15,cjs.Ease.get(1)).wait(85).to({y:22.8},0).wait(1));

	// Слой 5
	this.instance_6 = new lib.Символ15();
	this.instance_6.setTransform(202.7,64.5,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({y:49.2},4,cjs.Ease.get(-1)).to({y:281.9},15,cjs.Ease.get(1)).wait(5).to({y:263.9},5,cjs.Ease.get(-1)).to({y:500.6},15,cjs.Ease.get(1)).wait(5).to({y:482.1},5,cjs.Ease.get(-1)).to({y:935.7},15,cjs.Ease.get(1)).wait(89).to({y:64.5},0).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ16();
	this.instance_7.setTransform(159.1,109.7,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({y:94.4},4,cjs.Ease.get(-1)).to({y:327},15,cjs.Ease.get(1)).wait(5).to({y:309},5,cjs.Ease.get(-1)).to({y:545.7},15,cjs.Ease.get(1)).wait(5).to({y:527.3},5,cjs.Ease.get(-1)).to({y:936.8},15,cjs.Ease.get(1)).wait(93).to({y:109.7},0).wait(1));

	// Слой 3
	this.instance_8 = new lib.Символ17();
	this.instance_8.setTransform(116.7,22.3,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({y:7},4,cjs.Ease.get(-1)).to({y:239.7},15,cjs.Ease.get(1)).wait(5).to({y:221.7},5,cjs.Ease.get(-1)).to({y:458.4},15,cjs.Ease.get(1)).wait(5).to({y:439.9},5,cjs.Ease.get(-1)).to({y:936.7},15,cjs.Ease.get(1)).wait(97).to({y:22.3},0).wait(1));

	// Слой 2
	this.instance_9 = new lib.Символ18();
	this.instance_9.setTransform(72.7,67.2,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:51.9},4,cjs.Ease.get(-1)).to({y:284.5},15,cjs.Ease.get(1)).wait(5).to({y:266.5},5,cjs.Ease.get(-1)).to({y:503.2},15,cjs.Ease.get(1)).wait(5).to({y:484.8},5,cjs.Ease.get(-1)).to({y:937.5},15,cjs.Ease.get(1)).wait(101).to({y:67.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1076.7,323.8,1414.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(90,204,1,1,0,0,0,90,54.5);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({y:54.5,alpha:1},15).wait(65).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxcLiIAA1SIAKgBIg9hsIEWAAIgDAHQgdA0geAzIAOgBIBBhtICoAAIhCBtIAOAAIBDhtICmAAIhABrIAQABIA/hsICLABIA+BrIAAAAIAAAAIABABIABAAIA0AAIDIABIAAgBIAoABIAAgBIAqgBIBnABICaABIAAgBIAMABIA/hzICgAAIAGAIIg7BrIAOAAIA+hxICcAAIAIAIIg8BnIANAAIBChvICVAAIAOAGIg9BqIAKAAIBBhwIEIABIhBBtIAAVUg");
	mask.setTransform(160.9,467.3);

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(161.9,477.5,1,1,0,0,0,161.9,91);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,393.4,233.7,147.8);


// stage content:
(lib.wildchase240x400 = function(mode,startPosition,loop) {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance = new lib.Символ20();
	this.instance.setTransform(23,249.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(29.1,304.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// konfetty
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(117.7,-121,1,1,0,0,0,145.5,91.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// slot
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(121.9,144.3,1,1,0,0,0,161.9,434.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// person
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(115.5,48.5,0.943,0.943,0,0,0,36,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// avto
	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(67.6,430.9,1.001,1,0,0,-2.6,75,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// fon 
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(118,211,1,1,0,0,0,375,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.4,-780,779.4,1423.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
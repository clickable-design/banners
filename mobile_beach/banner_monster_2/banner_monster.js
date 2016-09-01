(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/banner.png?1472718863872", id:"banner"},
		{src:"images/bg2.png?1472718863872", id:"bg2"},
		{src:"images/body_1.png?1472718863872", id:"body_1"},
		{src:"images/body_2.png?1472718863872", id:"body_2"},
		{src:"images/btn.png?1472718863872", id:"btn"},
		{src:"images/eye_1.png?1472718863872", id:"eye_1"},
		{src:"images/eye_bow.png?1472718863872", id:"eye_bow"},
		{src:"images/fire.png?1472718863872", id:"fire"},
		{src:"images/front.png?1472718863872", id:"front"},
		{src:"images/gun.png?1472718863872", id:"gun"},
		{src:"images/hand_1.png?1472718863872", id:"hand_1"},
		{src:"images/hand_2.png?1472718863872", id:"hand_2"},
		{src:"images/moon.png?1472718863872", id:"moon"},
		{src:"images/mouth_1.png?1472718863872", id:"mouth_1"},
		{src:"images/mouth_2.png?1472718863872", id:"mouth_2"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,427,150);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.body_1 = function() {
	this.initialize(img.body_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,371);


(lib.body_2 = function() {
	this.initialize(img.body_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,268);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,91);


(lib.eye_1 = function() {
	this.initialize(img.eye_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,36);


(lib.eye_bow = function() {
	this.initialize(img.eye_bow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,19);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,73);


(lib.front = function() {
	this.initialize(img.front);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,179);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,212);


(lib.hand_1 = function() {
	this.initialize(img.hand_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,185);


(lib.hand_2 = function() {
	this.initialize(img.hand_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,163);


(lib.moon = function() {
	this.initialize(img.moon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,192);


(lib.mouth_1 = function() {
	this.initialize(img.mouth_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,25);


(lib.mouth_2 = function() {
	this.initialize(img.mouth_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,29);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EiRMBd7MAAAi71MEiZAAAMAAAC71g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-929.3,-601.1,1858.6,1202.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(-159,-45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-45.1,318,91);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5C1").s().p("AEhEDQgEgEgBgWIgFhYQgBgYARgEQAKgCACgGQACgDACgOQALhHAAgQIABgEIgXgJQgHgCAAgGQgBgFAHgDIAdgSQALhJAJhUQACgOAFgFQAFgFAPgBIAzgEQAKAAAEADQAFADAGAUQAbBaAOA7IAfANQAGACAAAFQAAAFgFAEIgUANIAWBiQADANAPABQAJABADAFQAEAFABANIAJBXQACAWgEAEQgEAFgXACIgcACQgLAAgEgJIgDgaIgCgTQgCgQgKgCQgHgBglADIghACQghACgFACQgJAEAAAQIAAATQACAWgBAEQgCAJgMACIgbACIgKAAQgOAAgEgCgAGWg1QgEAAgCAEQgDAHgDAhIgIBXQgCATADAGQAEAIAQgBIAYgCQAWgBgGgZIgdh8IgFgIQgCgEgEAAIgBABgAh7DCIhIgCQgXgBgEgEQgEgEAAgVIAGiaIgYgNQgEgCAAgGQAAgFAFgDIAZgMIAFiZIACgTQADgJAJAAQA+ADBIAAQAOAAAEABQAIADAAAKQABAVgBAUQAAAMgJACQgEABgggBQgsgCgFACQgMACAAARIgBAQQAAATABAEQADAKANACIAZACQAQABAJADQAdAMARAXQARAZACAhIgBBSQgJApgkAYQgdAUggAAIgCAAgAiDgFQgQACgBAMIgCA3QgBAtABAEQADAMAWgBQAegCAIgcQAEgNAAgsQAAgXgPgMQgMgIgOAAIgHABgAAsC9QgDgEgBgHIgBgXIgBiPIgZgMQgEgCAAgGQAAgFAEgDIAYgNIgBiXQAAgWAEgEQAEgFAVAAIB9gDQAUgBAEAEQAEADABARQACAPgBAMQgBAKgIACQgFACgQAAIg6ACQgPABgFAFQgFAGgBANQAAAPACAqQAAAMAGAFQAEAEALABIAYAAIAVAAQAKAAAEADQAEAEABAKIABAjQAAAMgNABIgpACQgRAAgGAFQgGAFAAASQgCAVACAbQABAOAGAFQAGAFAPAAIA8gCIAXABQAJACABAIQADAUgCAYQAAAJgJADQgFABgOABIiIADIgGAAQgOAAgFgEgAmlC3Qg/gGgag2QgJgTACgcIAHhTIgXgPQgEgEAAgFQABgFAFgDIAZgLIAIhZQAEgzA0ggQALgHALgBQAigDAXAHQAXAHASASQAeAfgDA5IgDBNIAXAOQAFADgBAGQAAAGgFACIgZAKIgCBIIgJAsQgCAHgFAIQghAvg5AAIgMAAgAmPihQgXAAgGAWIgPDNQgCARADAIQAHARAUACQAUACAJgQQAEgHABgPIANjCQAAgKgCgKQgFgVgXAAIgBAAgAqJCgIgYgEQgKgCgCgIQAAgEACgRIAdkHQACgPgCgKQgCgLgPgEQgIgCgUgBQgLAAgEAJQgCAEgCATIgiELQgCAUgGAEQgGAEgXgDIgYgDQgJgCgDgEQgDgFAEgcIATiNIgWgRQgEgDAAgFQABgGAFgCIAagKIAViZQACgOAGgGQAGgFAMABICaATQANADAGAHQAFAIgCAOIgPCXIAXAQQAFADgBAFQgBAFgFADIgZALIgPCTQgCAXgGAEQgDACgKAAIgSgBgAJUCZQgBgEABgRIAIhhQAEgpgBgKIABgEIgXgKQgGgCAAgGQAAgFAFgDIAbgUIAKieQABgOAEgFQAFgEAOgCIA0gHQALAAACACQAFAEAHATIAuCTIAeALQAFADABAFQAAAFgEAEIgTAOQAdBZASA0QAHAagFAGQgFAGgxAFQgHAAgGgDQgEgCgDgIIgGgUIgFgUIgHgSQgIgOgNABIgFAAQgYADgGAFQgGAGgBAVIgDAwQgBANgNABIgxAGIgBAAQgLAAgBgIgAKxhLQgEABgCAEQgCAGAAAQIgBAgIAAAHQABAGARgCQASgCgBgFIgBgKIgOgqQgBgDgDgFQgCgDgEAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-26.1,166.5,52.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.front();
	this.instance.parent = this;
	this.instance.setTransform(396.3,-89.5);

	this.instance_1 = new lib.front();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1420.2,-89.5);

	this.instance_2 = new lib.front();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-521.9,-89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1420.2,-89.5,2840.5,179);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();
	this.instance.parent = this;
	this.instance.setTransform(-138,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-106,276,212);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.fire();
	this.instance.parent = this;
	this.instance.setTransform(-36,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.fire();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.fire();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36.5,72,73);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(-213.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.5,-75,427,150);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("AAGSnIgEi4IgCAAQjHAAi3hLQixhKiLiFQiKiGhQiuQhSizgHjGIi5AEIAAhXIC5AAQAJjBBOivQBMiqCEiDQCFiECqhLQCvhPDBgHIgEi5IBXAAIAAC5QDAAICvBPQCpBMCDCDQCECEBMCpQBOCuAJDBIC5AAIAAAmIi4AEIAAABQAADHhLC3QhJCxiECKQiFCKitBQQizBTjGAIIAAC5gAABPAIgBh6QilAAiYg/QiTg9h0huQhyhvhDiPQhFiVgGilIh6ACQAIC+BOCqQBMCmCDB/QCFB/CoBGQCvBIC9AAIABAAgANGAAQAACmg+CXQg8CShuBzQhtByiPBDQiTBGijAIIAAB6QC8gJCqhPQCkhMB/iDQB+iEBFipQBIiuAAi9IAAAAgAgBLtIgQrbIrbARQAHCSA9CFQA7CABmBiQBnBjCDA2QCIA4CUAAgAAsARIAALbQCRgICDg+QB+g8BhhmQBihnA1iBQA4iHAAiTgAO/grQgJi2hLinQhHihh+h8Qh9h+ighIQinhKi2gJIAAB6QCdAICQBBQCLA/BtBsQBrBtBACLQBBCPAICeIB6AAIAAAAgALsgrQgHiMg6h/Qg5h7hghgQhghhh7g4Qh/g6iMgHIAALAILAAAIAAAAgAgSgrIgQrBQiNAHiBA5Qh8A3hiBhQhiBgg5B8Qg7CAgHCNILZAAgAmEttQiiBJh+B9Qh+B9hIChQhMCngIC3IB6AAQAJifBBiQQA/iLBuhtQBuhtCLg+QCShACfgHIgDh6Qi3AHinBKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-119.1,238.3,238.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAGSnIgEi4IgCAAQjHAAi3hLQixhKiLiFQiKiFhQivQhSiygHjHIi5AEIAAhXIC5AAQAJjBBOivQBMipCEiEQCFiECqhLQCvhPDBgHIgEi5IBXAAIAAC5QDAAICvBPQCpBMCDCDQCECEBMCpQBOCvAJDAIC5AAIAAAmIi4AEIAAABQAADHhLC3QhJCxiECKQiFCKitBQQizBTjGAIIAAC5gAABPAIgBh6QilAAiYg/QiTg9h0huQhyhvhDiPQhFiVgGilIh6ADQAIC9BOCqQBMCnCDB+QCFCACoBFQCvBIC9AAIABAAgANGAAQAACmg+CXQg8CShuBzQhtByiPBDQiTBGijAIIAAB6QC8gJCqhOQCkhNB/iDQB+iEBFipQBIitAAi+IAAAAgAgBLuIgQrbIrbAQQAHCSA9CFQA7CABmBiQBnBjCDA2QCIA5CUAAgAAsARIAALbQCRgICDg+QB+g8BhhmQBihmA1iCQA4iHAAiTgAO/grQgJi2hLinQhHigh+h9Qh9h+ighHQinhMi2gIIAAB6QCdAICQBBQCLA/BtBsQBrBtBACLQBBCPAICeIB6AAIAAAAgALsgrQgHiMg6h/Qg5h7hghgQhghgh7g5Qh/g6iMgHIAALAILAAAIAAAAgAgSgrIgQrBQiNAHiBA5Qh8A3hiBhQhiBgg5B8Qg7CAgHCNILZAAgAmEtsQiiBIh+B9Qh+B9hIChQhMCngIC3IB6AAQAJieBBiRQA/iLBuhtQBuhtCLg+QCShACfgHIgDh6Qi3AHinBLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-119.1,238.3,238.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5C1").s().p("AZcMCQgGgGAAgJQAAgKAGgGQAGgHAHAAQAIAAAGAHQAFAGAAAJQAAAKgFAGQgGAHgIAAQgHAAgGgHgA95INQgFgHAAgJQAAgJAFgHQAGgGAIAAQAHAAAGAGQAFAHABAJQgBAJgFAHQgGAHgHAAQgIAAgGgHgEg2rABnQgFgHgBgJQABgJAFgHQAGgGAIAAQAIAAAFAGQAGAHAAAJQAAAJgGAHQgFAHgIAAQgIAAgGgHgEAjMgD4QgFgGAAgJQAAgKAFgGQAGgHAIAAQAIAAAFAHQAGAGAAAJQAAAKgGAGQgFAHgIAAQgIAAgGgHgAB0pPQgHgHAAgJQAAgJAHgHQAFgGAIAAQAHAAAHAGQAFAHAAAJQAAAJgFAHQgHAHgHAAQgIAAgFgHgEA2RgLiQgFgHgBgJQABgJAFgHQAFgGAIAAQAIAAAGAGQAGAHAAAJQAAAJgGAHQgGAHgIAAQgIAAgFgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350.6,-77.8,701.2,155.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5C1").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,-23.7,241.8,47.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5C1").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,-17.9,239.4,36);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7E8E1").s().p("AEXAlIgEgVIgNgwQgJgcgJgYIATgDIBxARQAPAJANAOIgHAPQgOAbgPAVQgjA0grAhQgDgbgIglgAliAQQgQgVgNgbQgLgVgJgYIAJgHIAdgNIABAAIABAAIABAAIABAAIABAAIABgBIA8gCQAeAAAkAGIAAAAQgNAbgLAjQgIAXgGAZIgDALQgJAlgFAbQglgegdgtgAguAQQgMgWgFgaQgDgRAAgSIAUADIAuACQAjADAmgDQAAAPgDAPQgGAagMAWQgSAjghAhQgeghgRgjgAB0AjQgGgJgEgKQgNgXgJgZQgFgPgDgPIAmgDQAggEAsgGIALgCQACAYgCAVQgEAbgKAVQgPAhgcAaQgNgPgPgZgAizAQQgLgVgDgbQgDgaAEgcIAAgBIAJACIACABIA9AKIAiAFIASACQgEARgGASQgKAZgOAXIgJAQQgQAYgNAPQgagZgNgeg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-10.2,81,20.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7E8E1").s().p("AhGCVIhJgRIgJgCIgIgDQgugPgmgWQgogYgigeIADgcQAOhXBFhJIAPB1QAGAgAIAaQAUBMAfAfQAEgQANgZQANgaAVgbQARgWAWgUIAKA6QAQBDAkAdQAkgbAThAIABgCIANg6QAhAiAUAjQARAeAKAdQhDAbhOABIgLAAQggAAgfgEgADBBLQAUgvARhGIARhiQA7BGANBPQgmAngxAgQgaARgdAPIgDABIgEACQAMgQALgYg");
	this.shape.setTransform(10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-15.3,63.9,30.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D7D61").s().p("AkZFEQhEgfg2gyIgpgsIAsAfQA6AkBGAUQDeBCD6htQD8hsgykQQgXh8hAhqQBWBzAgCMQBCEakaB/QidBHiJAAQhsAAhggsg");
	this.shape.setTransform(0,-18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F5C1").s().p("Aj/FFQhFgUg7gjIgsggILqpLIANAVQBBBrAWB8QAzEPj8BtQidBDiPAAQhZAAhUgZg");
	this.shape_1.setTransform(-1.8,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-57.9,89.2,75.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D7D61").s().p("AhnDyQgfgCgggEQkfgkAPjgQAIhxBAhqIADABQgsBegCBiQgDDVEBAcQD/AcDHhfQBcgsAxgwQgoA/haA5Qh9BOimAMQgcACgfAAQgfAAgggCg");
	this.shape.setTransform(-0.4,-19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F5C1").s().p("AiuDeQkBgcAEjUQABhjAshdIAJgSIMiEbIgIAJQgwAwhcAsQiaBJi5AAQg5AAg7gHg");
	this.shape_1.setTransform(1.4,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.4,-45.2,88.8,50.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5C1").s().p("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");
	this.shape.setTransform(0,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,0.4,173.4,38.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5C1").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,-22.4,215.8,44.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(1527.8,-283.5,1,1,0,0,180);

	this.instance_1 = new lib.bg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-512.9,-283.5,1,1,0,0,180);

	this.instance_2 = new lib.bg2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-512.9,-283.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_3 = new lib.moon();
	this.instance_3.parent = this;
	this.instance_3.setTransform(84.1,-42.4,1.695,1.695);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1536.9,-283.5,3064.7,768);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#333333","#000000"],[0,1],0,0,0,0,0,13.3).s().p("AhZBaQglglAAg1QAAg0AlglQAlglA0AAQA1AAAlAlQAlAlAAA0QAAA1glAlQglAlg1AAQg0AAglglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-12.8,25.6,25.6);


(lib.Символ22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_2();
	this.instance.parent = this;
	this.instance.setTransform(-41.5,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-81.5,83,163);


(lib.Символ14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#3E2A43","#000000"],[0,1],0,0,0,0,0,6.9).s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-6.1,12.3,12.3);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_1();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-92.5,85,185);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_bow();
	this.instance.parent = this;
	this.instance.setTransform(-25.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-9.5,51,19);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eye_1();
	this.instance.parent = this;
	this.instance.setTransform(-20.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-18,41,36);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body_1();
	this.instance.parent = this;
	this.instance.setTransform(-147,-185.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-185.5,294,371);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouth_1();
	this.instance.parent = this;
	this.instance.setTransform(-45,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-12.5,90,25);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1334").s().p("AAGGVQAlAAAmgGQBOgMA+gjQgNgcgVgbQgZggglgfIgFA9IAAACQgMBCghAfQgngYgZhAIgQg7QgTAZgOAZQgRAcgKAcQgJAbgCAQQgigagfhJQgLgagKggIgfhyQg7BRgCBbQAAAOABAOQAlAZArASQhCgag1gtQgtgngkg0QhtidAJi8QADhRAbg3QAMgZAPgQQA6BqBNAxQABgbAFgmQAIhMARgzIAfABIAMABQgDBfBJA5QALgQANgbQAZg1AGg0IgTAAIApAAIgUAAQAKBRBKA+QA9hMgGhPIACgBQARAxAjAuQASAXAOANQA6hFgUhbIAqgMQAaAuAYBIQAMAjAHAbQA8g8AjhoQgPgLgQgIQAeANAYAdQA2BEAICEQAJCog6B8QgUAtgeAoQgXhPhFg+IgEBkQgGBKgPAxQgHAYgJASQhiBCh9AAIgNAAg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7E8E1").s().p("Ag1GPIgJgBQACgRAJgaQAKgcARgdQAOgYASgZIARA6QAZBAAoAZQAgggANhCIAAgCIAEg9QAlAfAZAgQAVAcANAcQg+AjhOAMQgmAFglAAgAhGGMQgwgJgpgRQgrgSglgaQgBgOAAgOQADhbA7hRIAeByQALAgALAaQAeBJAiAbIgIgCgAEQEqQAPgxAHhJIAEhkQBEA+AXBOQghAsgsAmQgXAUgbATIgDACIgDACQAJgSAHgZgAmSk6IAIgIIAbgRIABAAIABAAIABAAIABgBIABAAIABAAIA7gKQAfgDAkABIAAAAQgSA0gIBLQgEAmgCAcQhNgyg6hpgAjBldIAAgBIAIABIADAAIA9ADIAiAAIATABQgFA0gaA1QgNAagLAQQhJg5ADhegAhClZIAVgBIAtgCQAjgDAmgHQAHBQg+BMQhKg/gKhQgAEhkaQgYhHgagvIATgFIByADQARAHAOAMQgiBng9A8QgHgagMgkgAB/kIQgjgtgRgxIAlgIQAggHAsgMIAKgDQATBbg5BFQgPgNgSgXg");
	this.shape_1.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-40.6,95.1,81.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E1334").s().p("AAGGVQAlAAAmgGQBOgMA+gjQgNgcgVgbQgZggglgfIgFA9IAAACQgMBCghAfQgngYgZhAIgQg7QgTAZgOAZQgRAcgKAcQgJAbgCAQQgigagfhJQgLgagKggIgfhyQg7BRgCBbQAAAOABAOQAlAZArASQhCgag1gtQgtgngkg0QhtidAJi8QADhRAbg3QAMgZAPgQQA6BqBNAxQABgbAFgmQAIhMARgzIAfABIAMABQgDBfBJA5QALgQANgbQAZg1AGg0IgTAAIApAAIgUAAQAKBRBKA+QA9hMgGhPIACgBQARAxAjAuQASAXAOANQA6hFgUhbIAqgMQAaAuAYBIQAMAjAHAbQA8g8AjhoQgPgLgQgIQAeANAYAdQA2BEAICEQAJCog6B8QgUAtgeAoQgXhPhFg+IgEBkQgGBKgPAxQgHAYgJASQhiBCh9AAIgNAAg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7E8E1").s().p("Ag1GPIgJgBQACgRAJgaQAKgcARgdQAOgYASgZIARA6QAZBAAoAZQAgggANhCIAAgCIAEg9QAlAfAZAgQAVAcANAcQg+AjhOAMQgmAFglAAgAhGGMQgwgJgpgRQgrgSglgaQgBgOAAgOQADhbA7hRIAeByQALAgALAaQAeBJAiAbIgIgCgAEQEqQAPgxAHhJIAEhkQBEA+AXBOQghAsgsAmQgXAUgbATIgDACIgDACQAJgSAHgZgAmSk6IAIgIIAbgRIABAAIABAAIABAAIABgBIABAAIABAAIA7gKQAfgDAkABIAAAAQgSA0gIBLQgEAmgCAcQhNgyg6hpgAjBldIAAgBIAIABIADAAIA9ADIAiAAIATABQgFA0gaA1QgNAagLAQQhJg5ADhegAhClZIAVgBIAtgCQAjgDAmgHQAHBQg+BMQhKg/gKhQgAEhkaQgYhHgagvIATgFIByADQARAHAOAMQgiBng9A8QgHgagMgkgAB/kIQgjgtgRgxIAlgIQAggHAsgMIAKgDQATBbg5BFQgPgNgSgXg");
	this.shape_1.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-40.6,95.1,81.4);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B50D10").s().p("Ag5C0QgmgPgbgRQhBgsgdhEQgihMAPg1QANgwAygYQAvgWArAWQArAWgdAxQgdAxATAbQAUAYAagGQAagEASgjQAUgjgHghQgGggAMgZQAOgbAzgCQA5gCAvAtQAyAvgLA7QgRBehDBLQg+BGhNAAQgiAAgngPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B50D10").s().p("Ag3C0IgGgCQgjgOgZgQIgEgDQg+gqgdhDIgBgCQghhLAPg0IAAgBQANgvAxgYIABgBQAugVAqAVIADABQAoAVgSArIgDAIQgSApATAZIAFAHQAXAVARgBIAGAAIAGgCIASgIQAMgFAJgVIACgEQAOgggNggIgEgIQgJgaAFgUQACgJAHgHQAPgQAkgDIARAAQAwACApAlIALALQAoAqgIA0IgCANQgSBXg9BHIgHAHQg9BBhKAAQghAAgmgOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B50D10").s().p("Ag1C1IgGgCQgjgOgagQIgEgDQg+gqgehDIgBgCQghhMAPg0IAAgBQANgvAxgYIABgBQAvgVAqAVIADACQAoAVgOAqIgCAJQgMAnAcAZIAGAGQAbAWAKAAIAGgBIAHgCQAIgDAMgBQAMgBAKgaIABgDQAMgggUgfIgGgIQgRgYACgTQAAgKAFgIQANgTAjgEQAJgCAJAAQAyABApAkIALAKQArAqgGA0IgCANQgRBYg9BHIgHAIQg9BEhMAAQggAAglgOg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B50D10").s().p("Ag5C0QgmgPgbgRQhBgsgdhEQgihMAPg1QANgwAygYQAvgWArAWQArAWgKArQgLArAoAdQAmAcAGAAQAGgBAHgDQAIgDANAEQANADALgiQAKgjglgjQgkgjAMgZQAOgbAzgCQA5gCAvAtQAyAvgLA7QgRBehDBLQg+BGhNAAQgiAAgngPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-19.5,48.3,39);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B50D10").s().p("Ag5C0QgmgPgbgRQhBgsgdhEQgihMAPg1QANgwAygYQAvgWArAWQArAWgdAxQgdAxATAbQAUAYAagGQAagEASgjQAUgjgHghQgGggAMgZQAOgbAzgCQA5gCAvAtQAyAvgLA7QgRBehDBLQg+BGhNAAQgiAAgngPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B50D10").s().p("Ag3C0IgGgCQgjgOgZgQIgEgDQg+gqgdhDIgBgCQghhLAPg0IAAgBQANgvAxgYIABgBQAugVAqAVIADABQAoAVgSArIgDAIQgSApATAZIAFAHQAXAVARgBIAGAAIAGgCIASgIQAMgFAJgVIACgEQAOgggNggIgEgIQgJgaAFgUQACgJAHgHQAPgQAkgDIARAAQAwACApAlIALALQAoAqgIA0IgCANQgSBXg9BHIgHAHQg9BBhKAAQghAAgmgOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B50D10").s().p("Ag1C1IgGgCQgjgOgagQIgEgDQg+gqgehDIgBgCQghhMAPg0IAAgBQANgvAxgYIABgBQAvgVAqAVIADACQAoAVgOAqIgCAJQgMAnAcAZIAGAGQAbAWAKAAIAGgBIAHgCQAIgDAMgBQAMgBAKgaIABgDQAMgggUgfIgGgIQgRgYACgTQAAgKAFgIQANgTAjgEQAJgCAJAAQAyABApAkIALAKQArAqgGA0IgCANQgRBYg9BHIgHAIQg9BEhMAAQggAAglgOg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B50D10").s().p("Ag5C0QgmgPgbgRQhBgsgdhEQgihMAPg1QANgwAygYQAvgWArAWQArAWgKArQgLArAoAdQAmAcAGAAQAGgBAHgDQAIgDANAEQANADALgiQAKgjglgjQgkgjAMgZQAOgbAzgCQA5gCAvAtQAyAvgLA7QgRBehDBLQg+BGhNAAQgiAAgngPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-19.5,48.3,39);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlPFQQiLiMAAjEQAAjDCLiMQCMiLDDAAQDFAACKCLQCMCMAADDQAADEiMCMQiKCLjFAAQjDAAiMiLg");
	this.shape.setTransform(45.6,47.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AoAIAQjUjUAAksQAAkrDUjVQDVjUErAAQEsAADUDUQDVDVAAErQAAEsjVDUQjUDVksAAQkrAAjVjVg");
	this.shape_1.setTransform(45.6,47.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-24.9,145.1,145.1);


(lib.hole = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("AgRBJIhcAZIgJghIhzEmIAtjpIh+AGICEgnIARhbIg6gCIlMCbIE/jbIAShyIh1hPIi/gqIDNgCICqBSIAHhvIAriWIhliUICJCGIAFAGIgdCkIAIBYIAYgWIAkAnIBKglIBuhwIANhhICliYIiOChIAIBpIhdCCIBSA3IBSAHIBlhvIg+BzIAdADIB2BJIBchJIhZBjIiEg3IhFACIhzAkIAeBpIEcFaIk9kaIhagSIAWBoIBJhQIhBB3IBPGVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-62.9,111.4,125.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(87.1,22.3,1.392,1.392);

	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.3,51.1,1.392,1.392);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.1,-58.3,298.3,116.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-119.1,238.3,238.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-119.1,238.3,238.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(0,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.1,-121.8,238.3,243.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(-120.3,-59.4);
	this.instance.alpha = 0.32;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5C1").s().p("A+1MCQgHgGAAgKQAAgJAHgGQAGgHAKAAQAJAAAGAHQAHAGAAAKQAAAJgHAGQgGAHgJAAQgKAAgGgHgEAjMAINQgHgHAAgJQAAgJAHgHQAHgGAIAAQAKAAAGAGQAIAHAAAJQAAAJgIAHQgGAHgKAAQgIAAgHgHgEBAwABnQgGgHgBgJQABgJAGgHQAHgGAJAAQAJAAAHAGQAHAHAAAJQAAAJgHAHQgHAHgJAAQgJAAgHgHgEgqfgD4QgHgGAAgKQAAgJAHgGQAHgHAJAAQAKAAAGAHQAHAGAAAKQAAAJgHAGQgGAHgKAAQgJAAgHgHgAippPQgHgHABgJQgBgJAHgHQAHgGAJAAQAJAAAHAGQAHAHAAAJQAAAJgHAHQgHAHgJAAQgJAAgHgHgEhBQgLiQgGgHAAgJQAAgJAGgHQAHgGAJAAQAKAAAHAGQAGAHABAJQgBAJgGAHQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(-120.3,-14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-538.6,-137.2,836.7,200.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(1.1,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.07,scaleY:1.07,x:-0.3,y:-23.9},3,cjs.Ease.get(-1)).to({scaleX:1.2,scaleY:1.2,x:-1,y:-26.9},5,cjs.Ease.get(1)).to({scaleX:1.1,scaleY:1.1,x:-0.4,y:-24.5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:-22.2},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,-45.9,241.8,91.9);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103).wait(1).call(this.frame_104).wait(1));

	// Символ 8
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(58.9,-67.6,1,0.026);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-20,scaleY:0.42,y:-90.6},0).wait(1).to({scaleY:0.61,y:-101.7},0).wait(1).to({scaleY:0.73,y:-108.7},0).wait(1).to({scaleY:0.82,y:-113.8},0).wait(1).to({scaleY:0.89,y:-117.9},0).wait(1).to({scaleY:0.93,y:-120.6},0).wait(1).to({scaleY:0.96,y:-122.2},0).wait(1).to({scaleY:0.98,y:-123.2},0).wait(1).to({scaleY:0.99,y:-123.8},0).wait(1).to({scaleY:1,y:-124.2},0).wait(1).to({regY:0,scaleY:1,y:-104.5},0).wait(58).to({alpha:0},13).to({_off:true},10).wait(13));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-66.3,-59.6,1,0.04);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-20,scaleY:0.42,y:-77.7},0).wait(1).to({scaleY:0.61,y:-86.3},0).wait(1).to({scaleY:0.73,y:-91.6},0).wait(1).to({scaleY:0.82,y:-95.6},0).wait(1).to({scaleY:0.89,y:-98.7},0).wait(1).to({scaleY:0.93,y:-100.8},0).wait(1).to({scaleY:0.96,y:-102},0).wait(1).to({scaleY:0.98,y:-102.8},0).wait(1).to({scaleY:0.99,y:-103.3},0).wait(1).to({scaleY:1,y:-103.6},0).wait(1).to({regY:0,scaleY:1,y:-83.8},0).wait(15).to({scaleY:0.04,y:-99.6},3).wait(1).to({regY:-20,scaleY:0.79,y:-103},0).wait(1).to({scaleY:0.97,y:-103.7},0).wait(1).to({regY:0,scaleY:1,y:-83.8},0).wait(37).to({alpha:0},13).to({_off:true},10).wait(13));

	// Слой 7
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.6,4.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({alpha:1},5).to({y:14.6},3,cjs.Ease.get(-1)).to({y:4.6},3,cjs.Ease.get(1)).to({y:14.6},3,cjs.Ease.get(-1)).to({y:4.6},3,cjs.Ease.get(1)).to({y:14.6},3,cjs.Ease.get(-1)).to({y:4.6},3,cjs.Ease.get(1)).wait(1).to({regX:10,scaleX:0.99,scaleY:0.99,x:2.4,y:4.3,alpha:0.982},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:2.2,y:3.9,alpha:0.951},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:2.1,y:3.4,alpha:0.903},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1.8,y:2.5,alpha:0.833},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1.4,y:1.3,alpha:0.739},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1,y:0,alpha:0.633},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:0.6,y:-1.2,alpha:0.527},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:0.1,y:-3,alpha:0.381},0).wait(1).to({regX:-0.1,scaleX:0.62,scaleY:0.62,x:-7.6,y:-7.8,alpha:0},0).to({_off:true},1).wait(26));

	// Слой 6
	this.instance_3 = new lib.Символ9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-7.1,29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(46).to({_off:false},0).to({alpha:1},5).to({y:21.7},3,cjs.Ease.get(-1)).to({y:29.2},3,cjs.Ease.get(1)).to({y:21.7},3,cjs.Ease.get(-1)).to({y:29.2},3,cjs.Ease.get(1)).to({y:21.7},3,cjs.Ease.get(-1)).to({y:29.2},3,cjs.Ease.get(1)).wait(1).to({regX:10,scaleX:0.99,scaleY:0.99,x:2.9,y:28.8,alpha:0.982},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:2.7,y:28.1,alpha:0.951},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:2.6,y:27.1,alpha:0.903},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:2.3,y:25.6,alpha:0.833},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1.9,y:23.5,alpha:0.739},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1.5,y:21.2,alpha:0.633},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:1.1,y:18.9,alpha:0.527},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:0.5,y:15.8,alpha:0.381},0).wait(1).to({regX:0,scaleX:0.62,scaleY:0.62,x:-7.3,y:7.5,alpha:0},0).to({_off:true},1).wait(26));

	// Слой 1
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-54.5);

	this.instance_5 = new lib.Символ12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.9,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:-34.1},0).wait(1).to({y:-22.4},0).wait(1).to({y:-14.9},0).wait(1).to({y:-9},0).wait(1).to({y:-4.8},0).wait(1).to({y:-2.1},0).wait(1).to({y:-0.4},0).wait(1).to({y:0.5},0).to({y:-19.5},6,cjs.Ease.get(1)).wait(29).to({scaleX:1.05,scaleY:1.05,y:-24.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-27.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-29.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:-31},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-31.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-32.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-32.7},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-33.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:-33.4},0).to({y:-23.4},3,cjs.Ease.get(-1)).to({y:-33.4},3,cjs.Ease.get(1)).to({y:-23.4},3,cjs.Ease.get(-1)).to({y:-33.4},3,cjs.Ease.get(1)).to({y:-23.4},3,cjs.Ease.get(-1)).to({y:-33.4},3,cjs.Ease.get(1)).wait(1).to({scaleX:1.16,scaleY:1.16,y:-33.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-34.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-34.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-35},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-35.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:-36.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:-37.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-39.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-40.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:-43.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-45.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-49.5},0).wait(1).to({scaleX:1,scaleY:1,y:-54.5},0).wait(10).to({scaleX:1.18,scaleY:1.18,y:-59.2},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:-54.5},6,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 6
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.2,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:19.5,y:22.7},0).wait(1).to({y:34.4},0).wait(1).to({y:41.9},0).wait(1).to({y:47.8},0).wait(1).to({y:52},0).wait(1).to({y:54.7},0).wait(1).to({y:56.4},0).wait(1).to({regY:0,y:37.8},0).to({y:17.8},6,cjs.Ease.get(1)).wait(29).to({regY:19.5,scaleX:1.05,scaleY:1.05,y:48.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:56.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:61.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:64.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:66.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:67.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:68.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:69},0).wait(1).to({regY:0,scaleX:1.16,scaleY:1.16,y:47.2},0).to({y:37.2},3,cjs.Ease.get(-1)).to({y:47.2},3,cjs.Ease.get(1)).to({y:37.2},3,cjs.Ease.get(-1)).to({y:47.2},3,cjs.Ease.get(1)).to({y:37.2},3,cjs.Ease.get(-1)).to({y:47.2},3,cjs.Ease.get(1)).wait(1).to({regY:19.5,scaleX:1.16,scaleY:1.16,y:68.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:67.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:66.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:64.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:62.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:60.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:56.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:51.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:45.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:38.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:30},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:18.3},0).wait(1).to({regY:0,scaleX:1,scaleY:1,y:-17.2},0).wait(10).to({scaleX:1.18,scaleY:1.18,y:-15.3},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:-17.2},6,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-76.9,218.7,98.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(89.1,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:15,x:153.1,y:7},3,cjs.Ease.get(1)).to({rotation:0,x:89.1,y:26},9,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.7,-58.7,0.368,0.274);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1.99,rotation:-15,x:-78.4,y:-106.2},2).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-80,276,212);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(1043.2,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377,-57.5,2840.5,179);


(lib.Символ23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-6.2},0).wait(1).to({x:-9.5},0).wait(1).to({x:-11.5},0).wait(1).to({x:-12.9},0).wait(1).to({x:-13.9},0).wait(1).to({x:-14.4},0).wait(1).to({x:-14.8},0).wait(1).to({x:-15},0).wait(8).to({x:-2.3},0).wait(1).to({x:4.4},0).wait(1).to({x:8.5},0).wait(1).to({x:11.3},0).wait(1).to({x:13.2},0).wait(1).to({x:14.3},0).wait(1).to({x:15.1},0).wait(1).to({x:15.5},0).wait(9).to({x:9.1},0).wait(1).to({x:5.7},0).wait(1).to({x:3.6},0).wait(1).to({x:2.1},0).wait(1).to({x:1.2},0).wait(1).to({x:0.6},0).wait(1).to({x:0.2},0).wait(1).to({x:0},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-12.8,25.6,25.6);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(24);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103,97,1,1,60);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({rotation:0,x:0,y:0},6).to({rotation:-15},3).to({rotation:0},3).to({rotation:-15},3).to({rotation:0},3).to({rotation:-15},3).to({rotation:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ23_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.1,-70.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// body_2.png
	this.instance_2 = new lib.body_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-122,-134);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// hand_2.png
	this.instance_3 = new lib.Символ21_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-120.5,-14.5,1,1,0,0,180);

	this.instance_4 = new lib.Символ21_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(80.5,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-134,200,268);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ9_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-92.5,85,185);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.gotoAndPlay(22);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Слой 3
	this.instance = new lib.Символ6_1();
	this.instance.parent = this;
	this.instance.setTransform(-141.5,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(7).to({_off:false},0).wait(17));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ17_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31,-71,1,1,0,0,0,-31,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({scaleY:0.95,skewX:158,skewY:-22},7).to({skewX:148.5,skewY:-31.5,y:-70.9},2).to({skewX:158,skewY:-22,y:-71},2).to({skewX:148.5,skewY:-31.5,y:-70.9},2).to({skewX:158,skewY:-22,y:-71},2).to({skewX:148.5,skewY:-31.5,y:-70.9},2).to({skewX:158,skewY:-22,y:-71},2).to({skewX:148.5,skewY:-31.5,y:-70.9},2).to({skewX:158,skewY:-22,y:-71},2).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ17_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-251,-71,1,1,0,0,180,-31,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({scaleY:0.96,rotation:-159.8,skewY:0},7).to({rotation:-151.8,x:-250.9},2).to({rotation:-159.8,x:-251},2).to({rotation:-151.8,x:-250.9},2).to({rotation:-159.8,x:-251},2).to({rotation:-151.8,x:-250.9},2).to({rotation:-159.8,x:-251},2).to({rotation:-151.8,x:-250.9},2).to({rotation:-159.8,x:-251},2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ6_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-141.5,-9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({_off:true},7).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.5,-194.5,367,371);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-3.6},0).wait(1).to({x:-4.9},0).wait(1).to({x:-5.6},0).wait(1).to({x:-6.1},0).wait(1).to({x:-6.3},0).wait(1).to({x:-6.4},0).wait(2).to({x:-6.5},0).wait(10).to({x:0.5},0).wait(1).to({x:3.1},0).wait(1).to({x:4.5},0).wait(1).to({x:5.3},0).wait(1).to({x:5.7},0).wait(1).to({x:5.9},0).wait(1).to({x:6},0).wait(1).to({x:6.1},0).wait(1).to({x:6.2},0).wait(8).to({x:2.7},0).wait(1).to({x:1.5},0).wait(1).to({x:0.8},0).wait(1).to({x:0.4},0).wait(1).to({x:0.2},0).wait(1).to({x:0.1},0).wait(2).to({x:0},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-6.1,12.3,12.3);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ8_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-9.5,51,19);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ13_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-18,41,36);


(lib.Символ10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 8
	this.instance = new lib.Символ12_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:19.6},4,cjs.Ease.get(-1)).to({y:-18.5},4,cjs.Ease.get(1)).wait(1).to({y:19.6},4,cjs.Ease.get(-1)).to({y:-18.5},4,cjs.Ease.get(1)).wait(23));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjtDRIAAmhIHbAMIAAGVg");
	var mask_graphics_1 = new cjs.Graphics().p("AjtDRIAAmiIHbANIAAGVg");
	var mask_graphics_2 = new cjs.Graphics().p("AjtDSIAAmiIHbAMIAAGWg");
	var mask_graphics_3 = new cjs.Graphics().p("AjtEJIAAmiIHbANIAAGVg");
	var mask_graphics_4 = new cjs.Graphics().p("AjtFdIAAmiIHbAMIAAGWg");
	var mask_graphics_5 = new cjs.Graphics().p("AjtEJIAAmiIHbANIAAGVg");
	var mask_graphics_6 = new cjs.Graphics().p("AjtDSIAAmiIHbAMIAAGWg");
	var mask_graphics_7 = new cjs.Graphics().p("AjtDRIAAmiIHbANIAAGVg");
	var mask_graphics_8 = new cjs.Graphics().p("AjtDRIAAmhIHbAMIAAGVg");
	var mask_graphics_9 = new cjs.Graphics().p("AjtDRIAAmhIHbAMIAAGVg");
	var mask_graphics_10 = new cjs.Graphics().p("AjtDRIAAmiIHbANIAAGVg");
	var mask_graphics_11 = new cjs.Graphics().p("AjtDSIAAmiIHbAMIAAGWg");
	var mask_graphics_12 = new cjs.Graphics().p("AjtEJIAAmiIHbANIAAGVg");
	var mask_graphics_13 = new cjs.Graphics().p("AjtFdIAAmiIHbAMIAAGWg");
	var mask_graphics_14 = new cjs.Graphics().p("AjtEJIAAmiIHbANIAAGVg");
	var mask_graphics_15 = new cjs.Graphics().p("AjtDSIAAmiIHbAMIAAGWg");
	var mask_graphics_16 = new cjs.Graphics().p("AjtDRIAAmiIHbANIAAGVg");
	var mask_graphics_17 = new cjs.Graphics().p("AjtDRIAAmhIHbAMIAAGVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.7,y:10.7}).wait(1).to({graphics:mask_graphics_1,x:0.7,y:13.1}).wait(1).to({graphics:mask_graphics_2,x:0.7,y:20.2}).wait(1).to({graphics:mask_graphics_3,x:0.7,y:26.6}).wait(1).to({graphics:mask_graphics_4,x:0.7,y:34.9}).wait(1).to({graphics:mask_graphics_5,x:0.7,y:26.6}).wait(1).to({graphics:mask_graphics_6,x:0.7,y:20.2}).wait(1).to({graphics:mask_graphics_7,x:0.7,y:13.1}).wait(1).to({graphics:mask_graphics_8,x:0.7,y:10.7}).wait(1).to({graphics:mask_graphics_9,x:0.7,y:10.7}).wait(1).to({graphics:mask_graphics_10,x:0.7,y:13.1}).wait(1).to({graphics:mask_graphics_11,x:0.7,y:20.2}).wait(1).to({graphics:mask_graphics_12,x:0.7,y:26.6}).wait(1).to({graphics:mask_graphics_13,x:0.7,y:34.9}).wait(1).to({graphics:mask_graphics_14,x:0.7,y:26.6}).wait(1).to({graphics:mask_graphics_15,x:0.7,y:20.2}).wait(1).to({graphics:mask_graphics_16,x:0.7,y:13.1}).wait(1).to({graphics:mask_graphics_17,x:0.7,y:10.7}).wait(23));

	// Символ 7
	this.instance_1 = new lib.Символ11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,13);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-28,51,59);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4копия();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.94},3).to({scaleY:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-40.2,95.1,81.4);


(lib.Символ3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.94},3).to({scaleY:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-40.2,95.1,81.4);


(lib.target_facke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_93 = function() {
		this.parent.green_1.gotoAndPlay(50);
		this.parent.green_2.stop(0);
		this.parent.green_2.visible = false;
		this.parent.title.visible = false;
		this.parent.green_1.green_1.hole.visible = true;
	}
	this.frame_194 = function() {
		document.location.reload();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(93).call(this.frame_93).wait(101).call(this.frame_194).wait(1));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(120.9,558.8,0.829,0.829,0,0,0,47.6,47.6);
	this.instance.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:45.6,x:119.2,y:466.9},0).wait(1).to({y:395.2},0).wait(1).to({y:343.1},0).wait(1).to({y:305.1},0).wait(1).to({y:275.5},0).wait(1).to({y:250.8},0).wait(1).to({y:228.8},0).wait(1).to({y:209.5},0).wait(1).to({y:192.9},0).wait(1).to({y:178.9},0).wait(1).to({y:167.2},0).wait(1).to({y:157.4},0).wait(1).to({y:149.1},0).wait(1).to({y:142.2},0).wait(1).to({y:136.2},0).wait(1).to({y:131},0).wait(1).to({y:126.5},0).wait(1).to({y:122.4},0).wait(1).to({regX:47.6,x:120.9,y:118.8},0).to({scaleX:1,scaleY:1,y:118.7,alpha:1},6).wait(10).to({x:242.2},7,cjs.Ease.get(-1)).to({x:380.9},8,cjs.Ease.get(1)).wait(20).to({x:151.3},7,cjs.Ease.get(-1)).to({x:-111.1},7,cjs.Ease.get(1)).wait(7).to({alpha:0},5).to({_off:true},1).wait(98));

	// Layer 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.2,121.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({alpha:1},7).wait(7).to({x:240.5},7,cjs.Ease.get(-1)).to({x:379.2},8,cjs.Ease.get(1)).wait(20).to({x:149.6},7,cjs.Ease.get(-1)).to({x:-112.8},7,cjs.Ease.get(1)).wait(7).to({scaleX:1.18,scaleY:1.18},2).to({scaleX:1,scaleY:1,alpha:0},5).to({_off:true},1).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.1,498.6,120.4,120.3);


(lib.monster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Capa 1
	this.hole = new lib.hole();
	this.hole.parent = this;
	this.hole.setTransform(-44.1,50);

	this.timeline.addTween(cjs.Tween.get(this.hole).wait(24));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-33,-53.7,1,0.131);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({scaleY:1,y:-51.4},3,cjs.Ease.get(-1)).wait(5));

	// Слой 5
	this.instance_1 = new lib.Символ3_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36,-54,1,0.087);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleY:0.49},5,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38.5,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},14).wait(10));

	// eye_bow.png
	this.instance_3 = new lib.Символ10_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-36.7,-127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// hand_1.png
	this.instance_4 = new lib.Символ16_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(103.3,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.2,-183.6,367,371);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12));

	// Слой 1
	this.title = new lib.Символ4_1();
	this.title.parent = this;
	this.title.setTransform(0.1,0,1,1,0,0,0,-1.4,-27.8);

	this.timeline.addTween(cjs.Tween.get(this.title).to({scaleX:1.23,scaleY:1.23},3,cjs.Ease.get(1)).to({regX:-1.5,regY:-27.7,scaleX:0.27,scaleY:0.27,x:0,alpha:0},8,cjs.Ease.get(-1)).to({regX:-1.4,regY:-27.8,scaleX:1.23,scaleY:1.23,x:0.1,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,-49.1,218.7,98.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(-776,-633.4);

	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-776,-423.6);

	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(768.4,-633.4);

	this.instance_3 = new lib.Символ17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(768.4,-423.6);

	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-15.8,-633.4);

	this.instance_5 = new lib.Символ17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-15.8,-423.6);

	this.instance_6 = new lib.Символ17();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-776,-301.3);

	this.instance_7 = new lib.Символ17();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-776,-91.5);

	this.instance_8 = new lib.Символ17();
	this.instance_8.parent = this;
	this.instance_8.setTransform(768.4,-301.3);

	this.instance_9 = new lib.Символ17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(768.4,-91.5);

	this.instance_10 = new lib.Символ17();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-15.8,-301.3);

	this.instance_11 = new lib.Символ17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-15.8,-91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1314.7,-770.6,2381.1,742.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.bow = new lib.Символ3();
	this.bow.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bow).to({y:13.7},6,cjs.Ease.get(-1)).to({y:25},5,cjs.Ease.get(1)).to({y:13.5},6,cjs.Ease.get(-1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-80,276,212);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_41 = function() {
		this.parent.green_2.gotoAndPlay(1);
	}
	this.frame_49 = function() {
		this.stop()
	}
	this.frame_69 = function() {
		this.stop();
		this.parent.win.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(8).call(this.frame_49).wait(20).call(this.frame_69).wait(1));

	// Слой 1
	this.green_1 = new lib.monster();
	this.green_1.parent = this;
	this.green_1.setTransform(37.8,29);

	this.timeline.addTween(cjs.Tween.get(this.green_1).wait(1).to({regX:-37.9,regY:-22.7,x:-0.1,y:-198},0).wait(1).to({y:-289},0).wait(1).to({y:-339.5},0).wait(1).to({y:-374.7},0).wait(1).to({y:-397.1},0).wait(1).to({y:-411.3},0).wait(1).to({y:-421.3},0).wait(1).to({y:-429.1},0).wait(1).to({regX:0,regY:0,x:37.8,y:-413.1},0).wait(31).to({regX:-37.9,regY:-22.7,x:-0.1,y:-453.9},0).wait(1).to({regX:0,regY:0,x:37.8,y:-435.1},0).wait(1).to({regX:-37.9,regY:-22.7,x:-0.1,y:-285},0).wait(1).to({y:-189.2},0).wait(1).to({y:-129},0).wait(1).to({y:-83.2},0).wait(1).to({y:-51.5},0).wait(1).to({y:-30.2},0).wait(1).to({y:-15.1},0).wait(1).to({regX:0,regY:0,x:37.8,y:19},0).wait(1).to({y:-413.1},0).wait(1).to({regX:-37.9,regY:-22.7,rotation:0.7,x:1.9,y:-433},0).wait(1).to({rotation:1.4,x:4.2,y:-430},0).wait(1).to({rotation:2.3,x:6.8,y:-426.6},0).wait(1).to({rotation:3.2,x:9.7,y:-422.8},0).wait(1).to({rotation:4.3,x:13,y:-418.5},0).wait(1).to({rotation:5.5,x:16.8,y:-413.6},0).wait(1).to({rotation:6.8,x:21.1,y:-407.9},0).wait(1).to({rotation:8.5,x:26.2,y:-401.3},0).wait(1).to({rotation:10.3,x:32.1,y:-393.7},0).wait(1).to({rotation:12.5,x:39.1,y:-384.7},0).wait(1).to({rotation:15.1,x:47.4,y:-374},0).wait(1).to({rotation:18.2,x:57.4,y:-361.1},0).wait(1).to({rotation:21.9,x:69.5,y:-345.4},0).wait(1).to({rotation:25.8,x:82.3,y:-328.9},0).wait(1).to({rotation:30,x:96.3,y:-310.9},0).wait(1).to({rotation:35.4,x:114.7,y:-287.2},0).wait(1).to({rotation:43.9,x:143.6,y:-249.4},0).wait(1).to({rotation:57.2,x:189.2,y:-188.6},0).wait(1).to({regX:0,regY:0,rotation:75,x:238.3,y:-60.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-154.6,367,371);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Слой 2
	this.hole = new lib.hole();
	this.hole.parent = this;
	this.hole.setTransform(-18.2,101.6,0.676,0.676);

	this.timeline.addTween(cjs.Tween.get(this.hole).wait(24));

	// Слой 1
	this.instance_12 = new lib.Символ2копия();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-19,14.3,1,0.131);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(16).to({_off:false},0).to({scaleY:1,y:16.6},3,cjs.Ease.get(-1)).wait(5));

	// Слой 5
	this.instance_13 = new lib.Символ3копия();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-22,14,1,0.087);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({scaleY:0.49},5,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_14 = new lib.mouth_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-70.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},14).wait(10));

	// body_2.png
	this.instance_15 = new lib.Символ20_1();
	this.instance_15.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-134,202.5,278.2);


(lib.monster_select = function(mode,startPosition,loop) {
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
	this.instance = new lib.monster();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.613,0.613,0,0,0,-37.8,1.9);

	this.instance_1 = new lib.Символ18_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-50.8,0.674,0.674,0,0,0,-20.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-113.8,225.1,227.6);


(lib.green_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.parent.green_1.gotoAndPlay(0);
	}
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_73 = function() {
		this.stop();
		this.parent.win.gotoAndPlay(1);
		this.parent.win.monster.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46).call(this.frame_46).wait(7).call(this.frame_53).wait(20).call(this.frame_73).wait(1));

	// Слой 2
	this.green_2 = new lib.Символ18_1();
	this.green_2.parent = this;
	this.green_2.setTransform(21.9,-27.9);

	this.timeline.addTween(cjs.Tween.get(this.green_2).wait(1).to({regX:-20,regY:12.6,x:1.9,y:-185.2},0).wait(1).to({y:-251.8},0).wait(1).to({y:-294.2},0).wait(1).to({y:-333.8},0).wait(1).to({y:-368.5},0).wait(1).to({y:-386.2},0).wait(1).to({y:-394.8},0).wait(1).to({y:-400.1},0).wait(1).to({y:-404.1},0).wait(1).to({regX:0,regY:0,x:21.9,y:-420},0).wait(35).to({regX:-20,regY:12.6,x:1.9,y:-419},0).wait(1).to({regX:0,regY:0,x:21.9,y:-434},0).wait(1).to({regX:-20,regY:12.6,x:1.9,y:-239.8},0).wait(1).to({y:-145.6},0).wait(1).to({y:-87.9},0).wait(1).to({y:-51.3},0).wait(1).to({y:-26.9},0).wait(1).to({y:-8.8},0).wait(1).to({regX:0,regY:0,x:21.9,y:-5.9},0).wait(1).to({y:-380},0).wait(1).to({regX:-20,regY:12.6,rotation:-0.8,x:0.2,y:-365},0).wait(1).to({rotation:-1.6,x:-1.7,y:-362.2},0).wait(1).to({rotation:-2.6,x:-4,y:-359.1},0).wait(1).to({rotation:-3.7,x:-6.4,y:-355.6},0).wait(1).to({rotation:-5,x:-9.1,y:-351.5},0).wait(1).to({rotation:-6.4,x:-12.3,y:-347},0).wait(1).to({rotation:-8.1,x:-16,y:-341.7},0).wait(1).to({rotation:-10,x:-20,y:-335.8},0).wait(1).to({rotation:-12.1,x:-24.8,y:-328.9},0).wait(1).to({rotation:-14.7,x:-30.2,y:-321},0).wait(1).to({rotation:-17.7,x:-36.7,y:-311.7},0).wait(1).to({rotation:-21.2,x:-44.1,y:-300.7},0).wait(1).to({rotation:-25.4,x:-53,y:-287.8},0).wait(1).to({rotation:-30,x:-62.7,y:-273.7},0).wait(1).to({rotation:-35.4,x:-73.8,y:-257.5},0).wait(1).to({rotation:-43,x:-89.5,y:-234.9},0).wait(1).to({rotation:-54.8,x:-113.7,y:-200.6},0).wait(1).to({rotation:-69.6,x:-144,y:-158.9},0).wait(1).to({regX:0,regY:0,rotation:-85.2,x:-187.2,y:-137.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.1,-161.9,202.5,278.2);


(lib.Символ24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
		this.parent.win.addEventListener("click", ClickToGoToWebPage);
					function ClickToGoToWebPage() {
						//window.open("http://clickable.design/promo/", "_blank");
						document.location.reload();
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(32).call(this.frame_32).wait(1));

	// Слой 6
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(2.4,384.3,0.858,0.858);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regY:0.4,y:361.2,alpha:0.391},0).wait(1).to({y:348.9,alpha:0.596},0).wait(1).to({y:341.5,alpha:0.719},0).wait(1).to({y:335.8,alpha:0.814},0).wait(1).to({y:331.5,alpha:0.886},0).wait(1).to({y:328.7,alpha:0.933},0).wait(1).to({y:326.9,alpha:0.963},0).wait(1).to({y:325.8,alpha:0.982},0).wait(1).to({y:325.1,alpha:0.993},0).wait(1).to({regY:0,y:324.3,alpha:1},0).wait(4));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.7,243.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(1).to({y:227.8,alpha:0.391},0).wait(1).to({y:219.7,alpha:0.596},0).wait(1).to({y:214.7,alpha:0.719},0).wait(1).to({y:210.9,alpha:0.814},0).wait(1).to({y:208.1,alpha:0.886},0).wait(1).to({y:206.2,alpha:0.933},0).wait(1).to({y:205,alpha:0.963},0).wait(1).to({y:204.2,alpha:0.982},0).wait(1).to({y:203.8,alpha:0.993},0).wait(1).to({y:203.5,alpha:1},0).wait(7));

	// Слой 5
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.5,164.7,0.082,0.28);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1).to({scaleX:0.44,scaleY:0.56},0).wait(1).to({scaleX:0.63,scaleY:0.71},0).wait(1).to({scaleX:0.74,scaleY:0.8},0).wait(1).to({scaleX:0.83,scaleY:0.87},0).wait(1).to({scaleX:0.9,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(10));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("A7BR3MAAAgjtMA2DAAAMAAAAjtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-0.2,y:60.4}).wait(32));

	// Слой 4
	this.monster = new lib.monster_select();
	this.monster.parent = this;
	this.monster.setTransform(5,357.8);
	this.monster._off = true;

	this.monster.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.monster).wait(21).to({_off:false},0).wait(1).to({regY:-15,y:224.5},0).wait(1).to({y:170.3},0).wait(1).to({y:136.8},0).wait(1).to({y:112.5},0).wait(1).to({y:97.8},0).wait(1).to({y:89.7},0).wait(1).to({y:85.2},0).wait(1).to({regY:0,y:97.8},0).to({y:137.8},3,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ34();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0.4,1,0.069);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({scaleY:0.43,y:-20.9},0).wait(1).to({scaleY:0.62,y:-32},0).wait(1).to({scaleY:0.74,y:-38.7},0).wait(1).to({scaleY:0.83,y:-43.8},0).wait(1).to({scaleY:0.89,y:-47.7},0).wait(1).to({scaleY:0.94,y:-50.3},0).wait(1).to({scaleY:0.97,y:-51.9},0).wait(1).to({scaleY:0.98,y:-52.9},0).wait(1).to({scaleY:0.99,y:-53.6},0).wait(1).to({scaleY:1,y:-53.9},0).wait(13));

	// Слой 2
	this.instance_4 = new lib.Символ33();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.8,146.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.628},0).wait(1).to({alpha:0.753},0).wait(1).to({alpha:0.849},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:1},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.banner_monster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.canvas.style.cursor = "none";
		this.target.mouseEnabled = false;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
			
			_this.front.x = windowSize.width/2;
			_this.front.y = windowSize.height;
			
			_this.green_1.x = windowSize.width/4;
			_this.green_1.y = windowSize.height;
			
			_this.green_2.x = windowSize.width * 0.75;
			_this.green_2.y = windowSize.height;
			
			_this.pricel.x = windowSize.width;
			_this.pricel.y = windowSize.height;
			
			_this.title.x = windowSize.width/2;
			_this.title.y = windowSize.height/4;
			
			_this.back.x = windowSize.width/2;
			_this.back.y = windowSize.height;
			
			_this.sky.x = windowSize.width/2;
			_this.sky.y = windowSize.height;
			
			_this.win.x = windowSize.width/2;
			_this.win.y = windowSize.height/2;
			
			_this.target_facke.x = windowSize.width/2;
			_this.target_facke.y = windowSize.height;
			 
			if (windowSize.width < 767){
				
			_this.green_1.scaleX = 0.7;
			_this.green_1.scaleY = 0.7;
				
			_this.green_2.scaleX = 0.7;
			_this.green_2.scaleY = 0.7;
				
			_this.front.scaleX = 0.6;
			_this.front.scaleY = 0.6;
				
			_this.back.scaleX = 0.6;
			_this.back.scaleY = 0.6;
				
			_this.title.scaleX = 0.8;
			_this.title.scaleY = 0.8
				
			_this.win.scaleX = 0.8;
			_this.win.scaleY = 0.8;
				
			_this.pricel.scaleX = 0.6;
			_this.pricel.scaleY = 0.6
				
			_this.target.scaleX = 0.6;
			_this.target.scaleY = 0.6;
			
			_this.target_facke.scaleX = 0.6;
			_this.target_facke.scaleY = 0.6;
			
			_this.sky.scaleX = 0.6;
			_this.sky.scaleY = 0.6;
			}
			
			if (windowSize.width < 569 && windowSize.width > windowSize.height ){
				
			_this.green_1.scaleX = 0.5;
			_this.green_1.scaleY = 0.5;
				
			_this.green_2.scaleX = 0.5;
			_this.green_2.scaleY = 0.5;
				
			_this.front.scaleX = 0.6;
			_this.front.scaleY = 0.6;
				
			_this.back.scaleX = 0.6;
			_this.back.scaleY = 0.6
				
			_this.title.scaleX = 0.5;
			_this.title.scaleY = 0.5
				
			_this.win.scaleX = 0.8;
			_this.win.scaleY = 0.8
				
			_this.pricel.scaleX = 0.6;
			_this.pricel.scaleY = 0.6
				
			_this.target.scaleX = 0.6;
			_this.target.scaleY = 0.6;
			
			_this.target_facke.scaleX = 0.6;
			_this.target_facke.scaleY = 0.6
			
			_this.sky.scaleX = 0.6;
			_this.sky.scaleY = 0.6;
			
			_this.win.scaleX = 0.6;
			_this.win.scaleY = 0.6;
			}
			
			if (windowSize.width == 600){
				
			_this.green_1.scaleX = 0.8;
			_this.green_1.scaleY = 0.8;
				
			_this.green_2.scaleX = 0.8;
			_this.green_2.scaleY = 0.8;
				
			_this.front.scaleX = 0.8;
			_this.front.scaleY = 0.8;
				
			_this.back.scaleX = 0.7;
			_this.back.scaleY = 0.7
				
			_this.title.scaleX = 0.8;
			_this.title.scaleY = 0.8
				
			_this.win.scaleX = 0.8;
			_this.win.scaleY = 0.8
				
			_this.pricel.scaleX = 0.7;
			_this.pricel.scaleY = 0.7
				
			_this.target.scaleX = 0.7;
			_this.target.scaleY = 0.7;
			
			_this.win.scaleX = 0.8;
			_this.win.scaleY = 0.8;
			}
			
		}
		
		window.onresize=function(){
				_setCanvasSize();
			}
			
		window.onresize();
			
		//Actions
			
		_this.target.visible = false;
		_this.green_1.green_1.hole.visible = false;
		_this.green_2.green_2.hole.visible = false;	
			
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.target.x = stage.mouseX;
			this.target.y = stage.mouseY;
		}
			
		stage.canvas.onmouseover = function() {
		    _this.target.visible = true;
			_this.green_1.gotoAndPlay(0);
			_this.green_2.gotoAndStop(0);
			_this.target_facke.visible = false;
			_this.target_facke.gotoAndStop(0);
			_this.win.gotoAndStop(0);
			_this.green_2.visible = true;
			_this.green_2.visible = true;
			_this.green_1.green_1.hole.visible = false;
			_this.green_2.green_2.hole.visible = false;
		}
		
		stage.canvas.onmouseout = function() {
		    document.location.reload();
		}
		
		this.green_1.addEventListener("click", ClickGreen_1.bind(this));
		function ClickGreen_1() {
			_this.green_1.gotoAndPlay(50);
			_this.green_2.stop(0);
			_this.green_2.visible = false;
			_this.title.visible = false;
			_this.green_1.green_1.hole.visible = true;
		}
		
		this.green_2.addEventListener("click", ClickGreen_2.bind(this));
		function ClickGreen_2() {
			_this.green_2.gotoAndPlay(54);
			_this.green_1.visible = false;
			_this.green_1.stop(0);
			_this.title.visible = false;
			_this.win.monster.gotoAndPlay(0);
			_this.green_2.green_2.hole.visible = true;
		}
			
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.target = new lib.Символ19();
	this.target.parent = this;
	this.target.setTransform(-208.2,-51.4);

	this.timeline.addTween(cjs.Tween.get(this.target).wait(1));

	// Слой 2
	this.win = new lib.Символ24_1();
	this.win.parent = this;
	this.win.setTransform(510.3,208.4);

	this.timeline.addTween(cjs.Tween.get(this.win).wait(1));

	// Слой 1 copy
	this.target_facke = new lib.target_facke();
	this.target_facke.parent = this;
	this.target_facke.setTransform(512.1,767,1,1,0,0,0,119.2,364.1);

	this.timeline.addTween(cjs.Tween.get(this.target_facke).wait(1));

	// Слой 15
	this.title = new lib.Символ30();
	this.title.parent = this;
	this.title.setTransform(512.5,215.6);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Слой 6
	this.pricel = new lib.Символ15();
	this.pricel.parent = this;
	this.pricel.setTransform(1024.1,767.1,1,1,0,0,0,89.2,100.4);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 5
	this.front = new lib.Символ2_1();
	this.front.parent = this;
	this.front.setTransform(512.1,767,1,1,0,0,0,998.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.front).wait(1));

	// Слой 3
	this.green_2 = new lib.green_2();
	this.green_2.parent = this;
	this.green_2.setTransform(766.2,767.1,1,1,0,0,0,-2,-210.2);

	this.green_1 = new lib.Символ11_1();
	this.green_1.parent = this;
	this.green_1.setTransform(279.1,767,1,1,0,0,0,-4,-194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.green_1},{t:this.green_2}]}).wait(1));

	// Слой 16
	this.back = new lib.Символ1();
	this.back.parent = this;
	this.back.setTransform(512,767,1.02,1.02,0,0,0,-10,368.1);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	// Слой 17
	this.sky = new lib.Символ18();
	this.sky.parent = this;
	this.sky.setTransform(512,767.1,1,1,0,0,0,-54.5,528.5);

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-533.2,-148.1,3125.3,1709.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
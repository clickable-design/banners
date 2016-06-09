(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/bg.jpg?1465313930605", id:"bg"},
		{src:"images/bg_2.jpg?1465313930605", id:"bg_2"},
		{src:"images/shoot.png?1465313930605", id:"shoot"},
		{src:"images/wer.png?1465313930605", id:"wer"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,331);


(lib.bg_2 = function() {
	this.initialize(img.bg_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1118,313);


(lib.shoot = function() {
	this.initialize(img.shoot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,168);


(lib.wer = function() {
	this.initialize(img.wer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,451,152);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyBgQgIgBgHgDIgOgHIgLgJQgLgLgGgOQgGgOAAgRQAAgIABgIQACgGADgGIAHgOIAJgLQALgLAOgGQAIgDAHgBIARgBQAKAAAIABQAIABAIAEQAHACAHAFIANALIgQASQgKgJgLgFQgLgFgNAAQgLAAgJAEQgKAEgHAHQgHAIgEAJQgEAJAAALQAAAMAEAKQAEAJAGAHQAIAHAJAFQAKAEALAAQANAAALgFQALgFAKgIIAQASIgNALIgOAHQgIADgIACQgIABgKAAQgIAAgIgCgAvyBgQgIgBgHgDIgOgHIgLgJQgLgLgGgOQgGgOAAgRQAAgIABgIQACgGADgGIAHgOIAJgLQALgLAOgGQAIgDAHgBIARgBQAKAAAIABQAIABAIAEQAHACAHAFIANALIgQASQgKgJgLgFQgLgFgNAAQgLAAgJAEQgKAEgHAHQgHAIgEAJQgEAJAAALQAAAMAEAKQAEAJAGAHQAIAHAJAFQAKAEALAAQANAAALgFQALgFAKgIIAQASIgNALIgOAHQgIADgIACQgIABgKAAQgIAAgIgCgAQWBfIgNgbIhQAAIgMAbIgdAAIBDiUIAdAAIBCCUgAP/AsIgdhGIgDAAIgcBGIA8AAgAMBBfIAAiUIBJAAQAOAAALAFQALAGAIAJQAGAIADAIQAEAJAAAIQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMAAIgtAAIAAApgAMdAfIAuAAQAHAAAFgDQAGgDADgEIAGgKQACgGAAgFQAAgKgIgIQgEgFgFgDQgGgCgIAAIgsAAgAJzBfIAAiUIB1AAIAAAZIhaAAIAAAhIBQAAIAAAYIhQAAIAAAqIBdAAIAAAYgAI/BfIAAh8IhMAAIAAB8IgbAAIAAiUICCAAIAACUgAGnBfIAAhrIhXBrIgYAAIAAiUIAaAAIAABrIBWhrIAYAAIAACUgAEJBfIgNgbIhQAAIgMAbIgdAAIBDiUIAdAAIBCCUgADyAsIgdhGIgDAAIgcBGIA8AAgABWBfIAAhEIhOAAIAABEIgZAAIAAiUIAZAAIAAA4IBOAAIAAg4IAbAAIAACUgAkpBfIAAhrIhXBrIgYAAIAAiUIAaAAIAABrIBWhrIAYAAIAACUgAnMBfIAAhsIgBAAIgxBEIgJAAIgyhEIgBAAIAABsIgZAAIAAiUIAdAAIA1BIIAzhIIAdAAIAACUgAqGBfIAAhrIhWBrIgZAAIAAiUIAaAAIAABrIBWhrIAZAAIAACUgAsoBfIAAhEIhOAAIAABEIgbAAIAAiUIAbAAIAAA4IBOAAIAAg4IAbAAIAACUgAFyhBQgGgCgFgEIgIgIQgEgEgCgGIASgIQADAFAEAEQAFAEAIAAQAHAAAFgEQAEgDADgGIASAIQgCAGgEAEIgIAIQgFAEgGACQgGACgHAAQgGAAgGgCg");
	this.shape.setTransform(107.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhyBgQgIgBgHgDIgOgHIgLgJQgLgLgGgOQgGgOAAgRQAAgIABgIQACgGADgGIAHgOIAJgLQALgLAOgGQAIgDAHgBIARgBQAKAAAIABQAIABAIAEQAHACAHAFIANALIgQASQgKgJgLgFQgLgFgNAAQgLAAgJAEQgKAEgHAHQgHAIgEAJQgEAJAAALQAAAMAEAKQAEAJAGAHQAIAHAJAFQAKAEALAAQANAAALgFQALgFAKgIIAQASIgNALIgOAHQgIADgIACQgIABgKAAQgIAAgIgCgAvyBgQgIgBgHgDIgOgHIgLgJQgLgLgGgOQgGgOAAgRQAAgIABgIQACgGADgGIAHgOIAJgLQALgLAOgGQAIgDAHgBIARgBQAKAAAIABQAIABAIAEQAHACAHAFIANALIgQASQgKgJgLgFQgLgFgNAAQgLAAgJAEQgKAEgHAHQgHAIgEAJQgEAJAAALQAAAMAEAKQAEAJAGAHQAIAHAJAFQAKAEALAAQANAAALgFQALgFAKgIIAQASIgNALIgOAHQgIADgIACQgIABgKAAQgIAAgIgCgAQWBfIgNgbIhQAAIgMAbIgdAAIBDiUIAdAAIBCCUgAP/AsIgdhGIgDAAIgcBGIA8AAgAMBBfIAAiUIBJAAQAOAAALAFQALAGAIAJQAGAIADAIQAEAJAAAIQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMAAIgtAAIAAApgAMdAfIAuAAQAHAAAFgDQAGgDADgEIAGgKQACgGAAgFQAAgKgIgIQgEgFgFgDQgGgCgIAAIgsAAgAJzBfIAAiUIB1AAIAAAZIhaAAIAAAhIBQAAIAAAYIhQAAIAAAqIBdAAIAAAYgAI/BfIAAh8IhMAAIAAB8IgbAAIAAiUICCAAIAACUgAGnBfIAAhrIhXBrIgYAAIAAiUIAaAAIAABrIBWhrIAYAAIAACUgAEJBfIgNgbIhQAAIgMAbIgdAAIBDiUIAdAAIBCCUgADyAsIgdhGIgDAAIgcBGIA8AAgABWBfIAAhEIhOAAIAABEIgZAAIAAiUIAZAAIAAA4IBOAAIAAg4IAbAAIAACUgAkpBfIAAhrIhXBrIgYAAIAAiUIAaAAIAABrIBWhrIAYAAIAACUgAnMBfIAAhsIgBAAIgxBEIgJAAIgyhEIgBAAIAABsIgZAAIAAiUIAdAAIA1BIIAzhIIAdAAIAACUgAqGBfIAAhrIhWBrIgZAAIAAiUIAaAAIAABrIBWhrIAZAAIAACUgAsoBfIAAhEIhOAAIAABEIgbAAIAAiUIAbAAIAAA4IBOAAIAAg4IAbAAIAACUgAFyhBQgGgCgFgEIgIgIQgEgEgCgGIASgIQADAFAEAEQAFAEAIAAQAHAAAFgEQAEgDADgGIASAIQgCAGgEAEIgIAIQgFAEgGACQgGACgHAAQgGAAgGgCg");
	this.shape_1.setTransform(107.5,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,215,21.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bg();
	this.instance.setTransform(0.4,-61.8,1,1,0,0,180);

	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(1280.4,-61.8,1,1,0,0,180);

	this.instance_2 = new lib.bg();
	this.instance_2.setTransform(0.4,-61.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-639.6,-61.8,1920,331);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EDqJBRwMgACijfMCeKAAAMAABCjfgEBVXBRwIgBhSIgBBSMndkAAAMgACijfMBrhAAAIABAyIAAgyMIG2AAAMAAACjfgAujtXQjFDGAAEXQAAEYDFDDQDGDHEYgBQEYABDDjHQDGjDAAkYQAAkXjGjGQjDjGkYAAQkYAAjGDGg");
	this.shape.setTransform(935.7,523.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1574.9,0,5021.3,1046.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRDPIAQmdIADAAIAQGdg");
	this.shape.setTransform(1.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,41.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjOACIAAgDIGdgQIAAAjg");
	this.shape.setTransform(20.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,3.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjOgRIGdAQIAAADImdAQg");
	this.shape.setTransform(20.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,3.8);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(5));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("At9BKIAAiTIb7AAIAACTg");
	var mask_graphics_1 = new cjs.Graphics().p("At9BKIAAiTIb7AAIAACTg");
	var mask_graphics_2 = new cjs.Graphics().p("At9BKIAAiTIb7AAIAACTg");
	var mask_graphics_3 = new cjs.Graphics().p("AvaBKIAAiTIb8AAIAACTg");
	var mask_graphics_4 = new cjs.Graphics().p("Aw+BKIAAiTIb8AAIAACTg");
	var mask_graphics_5 = new cjs.Graphics().p("Ax/BKIAAiTIb8AAIAACTg");
	var mask_graphics_6 = new cjs.Graphics().p("AzjBKIAAiTIb8AAIAACTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-38,y:0}).wait(1).to({graphics:mask_graphics_2,x:-68,y:0}).wait(1).to({graphics:mask_graphics_3,x:-98.7,y:0}).wait(1).to({graphics:mask_graphics_4,x:-108.7,y:0}).wait(1).to({graphics:mask_graphics_5,x:-115.2,y:0}).wait(1).to({graphics:mask_graphics_6,x:-125.2,y:0}).wait(4));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("At9BKIAAiTIb7AAIAACTg");
	this.shape_3._off = true;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-7.5,179,15);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmvBYQAOhXgOhaQCfgRCVADQCLADCFAVIAACdQiEAXiKADIgoAAQiDAAiLgQgAnDA9QgEgaAAgjQAAgjAEgaQADgZAFAAQAFAAAEAZQADAaAAAjQAAAjgDAaQgEAagFAAQgFAAgDgagACZBMIAAiZQAWgCAUABQCRAEB0BGIAAAGQh3BGiDAEIgVAAIggAAg");
	this.shape.setTransform(45.6,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.3,21);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBHIAAiOIBHAAQAMABALAEQALAFAIAKQAGAGADAJQADAJAAAJQAAALgFAIQgEAJgHAHQgIAHgJAFQgKADgLAAIgsAAIAAAngAAnAKIAsAAQAGAAAGgDQAGgDADgEIAFgIQACgEAAgGQAAgMgHgIQgEgEgGgDQgFgCgHAAIgrAAgAgiBHIAAhBIhNAAIAABBIgZAAIAAiOIAZAAIAAA4IBNAAIAAg4IAZAAIAACOg");
	this.shape.setTransform(18.2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.4,1.3,27.5,14.4);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AAWqiIgrVF");
	this.shape.setTransform(2.3,67.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,6.5,137.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.71)","rgba(255,255,255,0.612)","rgba(255,255,255,0.694)","rgba(255,255,255,0)"],[0,0.196,0.49,0.8,1],-33.9,0,34,0).s().p("Am0FEIDDqIIKlAAIjCKIg");
	this.shape.setTransform(43.7,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.4,65);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBDPIgQmdIAjAAIgQGdg");
	this.shape.setTransform(1.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,41.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,2,0,3).p("AKjAAQAAEXjGDGQjGDGkXAAQkWAAjGjGQjGjGAAkXQAAkWDGjGQDGjGEWAAQEXAADGDGQDGDGAAEWg");
	this.shape.setTransform(67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,137,137);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(6.3,2,0,3).p("AKjgDQAAACAAABQAAEXjGDGQjEDEkUACAqhgNQAFkODAjBQDBjAEOgF");
	this.shape.setTransform(67.4,67.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-3.1,141.2,141.3);


(lib.Символ8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFCC00","#FFFF00"],[0,0.478,1],0,0,0,0,0,4.7).s().p("AAAAuIgCgkIgdAXIAYgdIgmgEIAkgDIgWgcIAdAXIACglIAAAAIAFAlIAbgXIABAAIgXAdIAkACIAAAAIglAEIAXAcIAAABIgcgXIgEAkg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,9.3,9.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFCC00","#FFFF00"],[0,0.478,1],0,0,0,0,0,4.7).s().p("AAAAuIgCgkIgdAXIAYgdIgmgEIAkgDIgWgcIAdAXIACglIAAAAIAFAlIAbgXIABABIgXAcIAkACIAAAAIglAEIAXAcIAAABIgcgXIgEAkg");
	this.shape.setTransform(2.7,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-42.1,9.3,9.3);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.title.hp.hp.play();
	}
	this.frame_39 = function() {
		this.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.title.hp.hp.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(30).call(this.frame_39).wait(36));

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(317.6,146.4,1.611,1.611);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false,regX:2.7,regY:2.7,x:322,y:152.3},0).to({_off:true},1).wait(4).to({_off:false,y:161.6},0).to({alpha:0},4).to({_off:true},1).wait(26));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],60,0,-59.9,0).s().p("ApWIzIAAxcIAAgJIStAAIAARlg");
	this.shape.setTransform(-210.1,98.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],-59.9,0,60,0).s().p("ApWIzIAAxlIStAAIAARcIAAAJg");
	this.shape_1.setTransform(848.3,98.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EiWMAIzIAAxcMA6KAAAIAARcgEBcDAIqIAAxcMA6KAAAIAARcg");
	this.shape_2.setTransform(319.1,98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(75));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-642.2,-61.8,1922.7,331);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(97.8,4.1,0.389,0.389,0,0,0,45.6,10.6);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(97.8,15.5,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_1.alpha = 0.57;

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(97.8,26.8,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_2.alpha = 0.57;

	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(56.3,4.1,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_3.cache(-2,-2,95,25);

	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(56.3,15.5,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_4.alpha = 0.57;

	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(56.3,26.8,0.389,0.389,0,0,0,45.6,10.6);
	this.instance_5.alpha = 0.57;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUBMIAAh5IgWAIIgJgTIApgTIAPAAIAACXgAAIBMIgpg+IgrA+IggAAIA5hNIg3hKIAiAAIAoA5IAkg5IAgAAIgyBJIA4BOg");
	this.shape.setTransform(10.9,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.5,30.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(110.2,13.4,1,1,0,0,0,107.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,3.6,215,21.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,1,1,0,0,0,17.8,8.4);
	this.instance.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-13.1,43,30);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-13.1,43,30);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.hp = new lib.Символ20();
	this.hp.setTransform(18.5,-5.7);

	this.timeline.addTween(cjs.Tween.get(this.hp).wait(1));

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(-95.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-18.7,222.5,29);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(2.2,27.5,1,0.622,0,0,0,2.2,67.5);
	this.instance.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-15.8,11,89);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoqGZIAAsyIRVAAIAAMyg");
	this.shape.setTransform(-844.2,-111.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(3.1,88.8,1,1,0,0,0,2.2,67.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0},4).wait(26).to({alpha:1},0).to({alpha:0},4).wait(1).to({alpha:1},0).to({alpha:0},4).wait(27));

	// Слой 1
	this.instance_1 = new lib.Символ8копия();
	this.instance_1.setTransform(4.4,4.4,1.611,1.611,0,0,0,2.7,2.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(25).to({_off:false,alpha:1},0).to({_off:true},1).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-899.7,-152.2,111,82);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(621.2,40.7,1,1,0,0,0,4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.bg_2();
	this.instance_1.setTransform(1,0.5,1,1,0,0,180);

	this.instance_2 = new lib.bg_2();
	this.instance_2.setTransform(2235,0.5,1,1,0,0,180);

	this.instance_3 = new lib.bg_2();
	this.instance_3.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1117,-116,3352,429.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(43.7,32.5,1,1,0,0,0,43.7,32.5);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.4,65);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhwB1QgvgxAAhEQAAhDAvgxQAvgxBBAAQBCAAAuAxQAwAxAABDQAABEgwAxQguAxhCAAQhBAAgvgxg");
	mask.setTransform(210.9,41);

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.setTransform(152.7,7.7,1,1,30,0,0,43.7,32.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:171.2,y:17.7},0).wait(1).to({x:188.1,y:26.9},0).wait(1).to({x:203.4,y:35.2},0).wait(1).to({x:217.1,y:42.6},0).wait(1).to({x:229.2,y:49.2},0).wait(1).to({x:239.7,y:54.8},0).wait(1).to({x:248.6,y:59.6},0).wait(1).to({x:255.8,y:63.6},0).wait(1).to({x:261.4,y:66.6},0).wait(1).to({x:265.5,y:68.8},0).wait(1).to({x:267.9,y:70.1},0).wait(1).to({x:268.7,y:70.6},0).wait(38));

	// Слой 1
	this.instance_1 = new lib.shoot();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315,168);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(559,152.5,1,1,0,0,0,559,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:679},149).to({x:429},150).to({x:559},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1117,-116,3352,429.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ29();
	this.instance.setTransform(5.3,1.9,0.266,0.948,0,0,0,20.9,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(-5.3,1.8,0.26,0.769,0,0,0,20.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(0.1,6.9,0.923,0.241,0,0,0,1.8,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(0.2,-3.3,0.923,0.249,0,0,0,1.8,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(-0.5,1.5,0.837,0.837,0,0,0,67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1 - копия
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(-0.5,1.5,1,1,0,0,0,67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ23();
	this.instance_6.setTransform(-0.5,1.5,1,1,0,0,0,67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 9
	this.instance_7 = new lib.Символ31();
	this.instance_7.setTransform(0,1.5,1,1,0,0,0,890.8,485.3);
	this.instance_7.alpha = 0.781;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2465.7,-483.8,5021.3,1046.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(-0.5,-5.4);
	this.instance.shadow = new cjs.Shadow("#333333",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2472.2,-495.2,5037,1062);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_8 = new lib.Символ38();
	this.instance_8.setTransform(26.2,-36.6,1.172,1.172,0,0,0,110.3,16);

	this.instance_9 = new lib.Символ40();
	this.instance_9.setTransform(-39.8,-1,1,1,0,0,0,57.8,15.4);

	this.hp = new lib.Символ17();
	this.hp.setTransform(12.5,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hp},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Слой 2 - копия
	this.instance_10 = new lib.wer();
	this.instance_10.setTransform(-210.5,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 2
	this.instance_11 = new lib.wer();
	this.instance_11.setTransform(-210.5,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.5,-76,451,152);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.title.hp.hp.play();
	}
	this.frame_39 = function() {
		this.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.title.hp.hp.play();
	}
	this.frame_44 = function() {
		this.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.title.hp.hp.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(30).call(this.frame_39).wait(5).call(this.frame_44).wait(31));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(603,268.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-834,0,3352,429.5);


(lib.Символ8_1 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ10();
	this.instance.setTransform(-141.4,-63,1,1,0,0,0,700.5,210.5);

	this.instance_1 = new lib.Символ100();
	this.instance_1.setTransform(0,-35.8,1.134,1.134,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1676,-273.5,3352,429.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(157.5,84,1,1,0,0,0,157.5,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:-0.1,x:157.6,y:84.1},0).wait(1).to({y:84.3},0).wait(1).to({rotation:-0.2,y:84.6},0).wait(1).to({rotation:-0.4,x:157.5,y:84.9},0).wait(1).to({rotation:-0.5,x:157.6,y:85.3},0).wait(1).to({rotation:-0.7,y:85.7},0).wait(1).to({rotation:-0.9,x:157.5,y:86.3},0).wait(1).to({rotation:-1.1,y:86.8},0).wait(1).to({rotation:-1.4,y:87.5},0).wait(1).to({rotation:-1.7,y:88.2},0).wait(1).to({rotation:-2,y:89},0).wait(1).to({rotation:-2.4,x:157.6,y:89.8},0).wait(1).to({rotation:-2.7,x:157.5,y:90.5},0).wait(1).to({rotation:-3,y:91.1},0).wait(1).to({rotation:-3.2,x:157.6,y:91.7},0).wait(1).to({rotation:-3.5,x:157.5,y:92.3},0).wait(1).to({rotation:-3.7,y:92.7},0).wait(1).to({rotation:-3.8,y:93.1},0).wait(1).to({rotation:-4,x:157.6,y:93.4},0).wait(1).to({rotation:-4.1,x:157.5,y:93.7},0).wait(1).to({y:93.8},0).wait(1).to({rotation:-4.2,x:157.6,y:93.9},0).wait(1).to({x:157.5,y:94},0).wait(1).to({x:157.6},0).wait(1).to({rotation:-4.1,x:157.5,y:93.9},0).wait(1).to({y:93.7},0).wait(1).to({rotation:-4,x:157.6,y:93.5},0).wait(1).to({rotation:-3.8,x:157.5,y:93.1},0).wait(1).to({rotation:-3.7,y:92.8},0).wait(1).to({rotation:-3.5,y:92.3},0).wait(1).to({rotation:-3.2,x:157.6,y:91.7},0).wait(1).to({rotation:-3,x:157.5,y:91.2},0).wait(1).to({rotation:-2.7,y:90.5},0).wait(1).to({rotation:-2.4,x:157.6,y:89.8},0).wait(1).to({rotation:-2,x:157.5,y:89.1},0).wait(1).to({rotation:-1.7,y:88.2},0).wait(1).to({rotation:-1.4,y:87.5},0).wait(1).to({rotation:-1.1,y:86.8},0).wait(1).to({rotation:-0.9,y:86.2},0).wait(1).to({rotation:-0.7,x:157.6,y:85.7},0).wait(1).to({rotation:-0.5,y:85.3},0).wait(1).to({rotation:-0.4,x:157.5,y:84.9},0).wait(1).to({rotation:-0.2,x:157.6,y:84.6},0).wait(1).to({rotation:-0.1,y:84.4},0).wait(1).to({y:84.2},0).wait(1).to({rotation:0,x:157.5,y:84.1},0).wait(1).to({y:84},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.3,315,210.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(157.5,84,1,1,0,0,0,157.5,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:94,rotation:0.1,y:94.2},0).wait(1).to({rotation:0.2,y:94.6},0).wait(1).to({rotation:0.5,x:157.4,y:95.4},0).wait(1).to({rotation:0.9,x:157.3,y:96.5},0).wait(1).to({rotation:1.4,y:97.9},0).wait(1).to({rotation:2,x:157.2,y:99.7},0).wait(1).to({rotation:2.7,x:157,y:101.8},0).wait(1).to({rotation:3.6,x:156.9,y:104.1},0).wait(1).to({regY:84,rotation:4.5,x:157.5,y:96.8},0).wait(1).to({regY:94,rotation:5.5,x:156.6,y:109.5},0).wait(1).to({rotation:6.4,x:156.4,y:111.8},0).wait(1).to({rotation:7.2,x:156.3,y:114},0).wait(1).to({rotation:7.9,x:156.2,y:115.8},0).wait(1).to({rotation:8.4,x:156.1,y:117.4},0).wait(1).to({rotation:8.9,x:156,y:118.6},0).wait(1).to({rotation:9.3,y:119.6},0).wait(1).to({rotation:9.5,x:155.9,y:120.3},0).wait(1).to({rotation:9.7,y:120.7},0).wait(1).to({regX:157.6,regY:84,x:157.6,y:111},0).wait(31).to({regX:157.5,regY:94,x:155.8,y:120.7},0).wait(1).to({rotation:9.5,y:120.2},0).wait(1).to({rotation:9.2,x:155.9,y:119.5},0).wait(1).to({rotation:8.9,y:118.5},0).wait(1).to({rotation:8.4,x:156,y:117.2},0).wait(1).to({rotation:7.8,x:156.1,y:115.5},0).wait(1).to({rotation:7,x:156.3,y:113.6},0).wait(1).to({rotation:6.2,x:156.4,y:111.4},0).wait(1).to({regX:157.6,regY:84,rotation:5.3,x:157.6,y:98.9},0).wait(1).to({regX:157.5,regY:94,rotation:4.4,x:156.7,y:106.2},0).wait(1).to({rotation:3.5,x:156.8,y:103.9},0).wait(1).to({rotation:2.8,x:157,y:101.8},0).wait(1).to({rotation:2.1,x:157.1,y:99.9},0).wait(1).to({rotation:1.6,x:157.2,y:98.4},0).wait(1).to({rotation:1.1,y:97.1},0).wait(1).to({rotation:0.7,x:157.3,y:95.9},0).wait(1).to({rotation:0.4,x:157.4,y:95.1},0).wait(1).to({rotation:0.2,y:94.5},0).wait(1).to({rotation:0,x:157.5,y:94.1},0).wait(1).to({regY:84,y:84},0).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.3,315,210.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(157.5,62.8,1,1,0,0,0,157.5,62.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42.3,315,210.4);


// stage content:



(lib.sniper_w_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		function getWindowSize() { 
				return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight,  window.innerHeight || 0)
		        }
		}
		window._setCanvasSize = function() {
				var windowSize = getWindowSize();
				stage.canvas.style.width = windowSize.width + 'px';
				stage.canvas.style.height = 120 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 120;
					
				_this.title.x = 0;
				_this.title.y = 0;	
			
				_this.stvol.x = windowSize.width*0.7;
				_this.stvol.y = 120;
			
				_this.qwe.x = windowSize.width/2;
				_this.qwe.y = 120;
		}
		
		window.onresize=function(){_setCanvasSize();}
		
		_this.pricel.visible = false;
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
			_this.pricel.visible = true;
			_this.stvol.visible = false;
			_this.title.visible = false;
			_this.qwe.gotoAndStop(1);
		}
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_5.bind(this));
		
		function fl_CustomMouseCursor_5() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
			_this.pricel.visible = false;
			_this.stvol.visible = true;
			_this.title.visible = true;
			_this.qwe.gotoAndStop(0);
		}
		
		
		
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.pricel = new lib.Символ27();
	this.pricel.setTransform(637.9,60.9);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 4
	this.title = new lib.Символ21_1();
	this.title.setTransform(-1,-1,1,1,0,0,0,-119.6,-62);

	this.stvol = new lib.Символ12();
	this.stvol.setTransform(960.2,118.1,0.92,0.92,0,0,0,166.2,101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stvol},{t:this.title}]}).wait(1));

	// Слой 1
	this.qwe = new lib.Символ8_1();
	this.qwe.setTransform(603,126.6,1,1,0,0,0,2,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.qwe).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1234.3,-374.3,5036,1062);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
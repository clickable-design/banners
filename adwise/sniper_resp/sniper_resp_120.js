(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/bg2.jpg?1464613640000", id:"bg2"},
		{src:"images/blrck.png?1464613640000", id:"blrck"},
		{src:"images/gb.jpg?1464613640000", id:"gb"},
		{src:"images/gun.png?1464613640000", id:"gun"},
		{src:"images/light.png?1464613640000", id:"light"},
		{src:"images/red.png?1464613640000", id:"red"},
		{src:"images/redd.png?1464613640000", id:"redd"}
	]
};



// symbols:



(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,726,304);


(lib.blrck = function() {
	this.initialize(img.blrck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,503,170);


(lib.gb = function() {
	this.initialize(img.gb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1118,313);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,138);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.red = function() {
	this.initialize(img.red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,806,337);


(lib.redd = function() {
	this.initialize(img.redd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,806,337);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIBeIAAi7IERAAIAAC7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-9.4,27.6,18.9);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("AiHCGQAdAMAjAAQBHAAAvg0QAygzAAhHQAAhJgyg0IgQgQQAeANAZAaQAyA0AABJQAABIgyAzQgxA0hFAAQg7AAgsgkg");
	this.shape.setTransform(71.8,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.gun();
	this.instance.setTransform(-92,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-69,184,138);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCCjQgJgEgHgHIgDgEQgIgJgEgMQgEgNAAgQIAAiMQAAgRAEgMQAEgNAIgJQAHgKAMgEQAMgFAPAAQAQAAAMAFQAMAEAHAKQAIAJAEANQAEAMAAARIAAAYIgeAAIAAgbQAAgSgIgLQgHgKgRAAQgQAAgIAKQgIALAAASIAACRQAAATAIAKQAIAKAQAAQARAAAHgKQAIgKAAgTIAAgkIAeAAIAAAiQAAAQgEANQgEAMgIAJIgDAEQgHAHgJAEQgMAEgQAAQgPAAgMgEgAwGCjQgJgEgHgHIgDgEQgIgJgEgMQgDgNAAgQIAAiMQAAgRADgMQAEgNAIgJQAIgKALgEQAMgFAQAAQAPAAAMAFQAMAEAIAKQAHAJAEANQAEAMAAARIAAAYIgdAAIAAgbQAAgSgIgLQgIgKgRAAQgQAAgIAKQgIALAAASIAACRQAAATAIAKQAIAKAQAAQARAAAIgKQAIgKAAgTIAAgkIAdAAIAAAiQAAAQgEANQgEAMgHAJIgDAEQgHAHgKAEQgMAEgPAAQgQAAgMgEgAQKClIgKg4IhGAAIgKA4IgdAAIA1kTIAtAAIA0ETgAP8BTIgfieIgfCeIA+AAgAMJClIAAkTIA8AAQAQAAAMAGQAMAEAIAJQAHAIAEANQADAMAAAQIAAAhQAAAOgEANQgEANgIAIQgHAJgNADQgMAFgQAAIgbAAIAABtgAMoAdIAbAAQARAAAIgJQAJgJAAgSIAAgkQAAgTgIgKQgHgKgRAAIgdAAgAJ7ClIAAkTIByAAIAAAcIhTAAIAABdIBDAAIAAAcIhDAAIAABiIBTAAIAAAcgAI9ClIAAj3IhEAAIAAD3IgfAAIAAkTICCAAIAAETgAGfClIAAjaIhHDaIgfAAIAAkTIAbAAIAADMIBFjMIAiAAIAAETgAECClIgLg4IhFAAIgLA4IgcAAIA0kTIAtAAIA1ETgADzBTIgfieIgeCeIA9AAgABUClIAAh9IhEAAIAAB9IgdAAIAAkTIAdAAIAAB7IBEAAIAAh7IAfAAIAAETgAkaClIAAjaIhGDaIggAAIAAkTIAbAAIAADMIBFjMIAiAAIAAETgAm9ClIAAjdIgsDdIgdAAIgujbIAADbIgbAAIAAkTIArAAIAuDbIArjbIArAAIAAETgAqJClIAAjaIhGDaIggAAIAAkTIAbAAIAADMIBFjMIAiAAIAAETgAsuClIAAh9IhDAAIAAB9IgfAAIAAkTIAfAAIAAB7IBDAAIAAh7IAfAAIAAETgAFqiCQgIgDgGgFQgFgFgDgGQgDgIAAgJIATAAQABAKAGAGQAGAEAKAAQAKAAAHgEQAGgGABgKIATAAQAAAJgDAIQgDAGgGAFQgFAFgIADQgIACgKAAQgKAAgHgCg");
	this.shape.setTransform(106.6,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-14.4,213.2,33.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.bg2();
	this.instance.setTransform(-52.9,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,5.6,726,304);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EBIDBRwIgBg+IgBA+MmPLAAAMgAFijfMD7QAAAIABCkIABikMGTMAAAMAAACjfgAlYtXQjFDGAAEXQAAEYDFDDQDHDHEVgBQEYABDFjHQDGjDAAkYQAAkXjGjGQjFjGkYAAQkVAAjHDGg");
	this.shape.setTransform(877,523.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1217.4,0,4188.8,1046.4);


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

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMBdIAAi5IApAAQALAAAIAEQAIADAFAGQAFAFACAJQADAIAAALIAAAWQAAALgDAJQgCAGgGAGQgFAGgIACQgJADgKAAIgSAAIAABKgAAiABIASAAQALAAAGgEQAFgGAAgNIAAgZQAAgNgEgGQgGgHgLAAIgTAAgAgbBdIAAhUIguAAIAABUIgVAAIAAi5IAVAAIAABUIAuAAIAAhUIAVAAIAAC5g");
	this.shape.setTransform(13.3,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,-0.5,19.1,18.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AAWqiIgrVF");
	this.shape.setTransform(2.3,67.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,6.5,137.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.red();
	this.instance.setTransform(-631.9,27.4,2.382,0.43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-631.9,27.4,1920,144.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFCC00","#FFFF00"],[0,0.478,1],0,0,0,0,0,4.7).s().p("AAAAuIgCgkIgdAXIAYgdIgmgEIAkgDIgWgcIAdAXIACglIAAAAIAFAlIAbgXIABAAIgXAdIAkACIAAAAIglAEIAXAcIAAABIgcgXIgEAkg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,9.3,9.3);


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


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.redd();
	this.instance_1.setTransform(-674.8,-8,2.46,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-674.8,-8,1982.4,337);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(-1.9,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,9,9);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANBBEIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjlAAIgwBEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjqAAIgrBEIAAAAIgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjoAAIgrBEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjqAAIgrBEIAAAAIgBAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgCgBIgFgDIgCgDIgdhzIggA1IgCAAIgBAAIjwAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAIgBgEIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDsAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIDuAAIAhg5IAAgDIABAAIADAAIACABIAAABIADACIADABIAdB0IAkg4IAAgBIABgDIAEgBIATAAIAAAIIgNAAIgrBEIAAAAIgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgBg");

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.setTransform(-104.8,0,1,0.809);
	this.instance.shadow = new cjs.Shadow("#FF3300",0,0,4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 0)];
	this.instance.cache(-16,-11,32,23);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:104.6},23).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-6.9,15.9,13.9);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBBXIAAiNQgPAHgKAAIAAgQQAHAAAFgCQAFgCAEgDQAFgFAEgLIAOAAIAACtgAgGBXIgdhLIgdBLIgTAAIAkhYIghhVIAUAAIAbBGIAbhGIARAAIggBVIAiBYg");
	this.shape.setTransform(8.1,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(70.5,15.4,0.316,0.316,-90,0,0,45.7,10.5);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(79.7,15.4,0.316,0.316,-90,0,0,45.7,10.6);
	this.instance_1.alpha = 0.57;

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(42.3,15.4,0.316,0.316,-90,0,0,45.7,10.6);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance_2.cache(-2,-2,95,25);

	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(51.5,15.4,0.316,0.316,-90,0,0,45.7,10.5);
	this.instance_3.alpha = 0.57;

	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(60.7,15.4,0.316,0.316,-90,0,0,45.7,10.6);
	this.instance_4.alpha = 0.57;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,1,83.4,28.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(110.2,13.4,1,1,0,0,0,107.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiCCjQgJgEgHgHIgDgEQgIgIgEgNQgEgOAAgPIAAiNQAAgPAEgNQAEgNAIgJQAHgJAMgFQAMgFAPAAQAQAAAMAFQAMAFAHAJQAIAJAEANQAEANAAAPIAAAaIgeAAIAAgbQAAgUgIgJQgHgLgRAAQgQAAgIALQgIAJAAAUIAACPQAAATAIALQAIALAQgBQARABAHgLQAIgKAAgUIAAgjIAeAAIAAAiQAAAPgEAOQgEANgIAIIgDAEQgHAHgJAEQgMAEgQAAQgPAAgMgEgAwGCjQgJgEgHgHIgDgEQgIgIgEgNQgDgOAAgPIAAiNQAAgPADgNQAEgNAIgJQAIgJALgFQAMgFAQAAQAPAAAMAFQAMAFAIAJQAHAJAEANQAEANAAAPIAAAaIgdAAIAAgbQAAgUgIgJQgIgLgRAAQgQAAgIALQgIAJAAAUIAACPQAAATAIALQAIALAQgBQARABAIgLQAIgKAAgUIAAgjIAdAAIAAAiQAAAPgEAOQgEANgHAIIgDAEQgHAHgKAEQgMAEgPAAQgQAAgMgEgAQKCkIgKg3IhGAAIgKA3IgdAAIA1kRIAtAAIA0ERgAP8BSIgfidIgfCdIA+AAgAMJCkIAAkRIA8AAQAQAAAMAEQAMAFAIAJQAHAJAEAMQADAMAAAQIAAAhQAAAPgEAMQgEAMgIAJQgHAIgNAFQgMAEgQAAIgbAAIAABsgAMoAcIAbAAQARAAAIgIQAJgJAAgSIAAgkQAAgUgIgJQgHgJgRAAIgdAAgAJ7CkIAAkRIByAAIAAAcIhTAAIAABcIBDAAIAAAbIhDAAIAABiIBTAAIAAAcgAI9CkIAAj1IhEAAIAAD1IgfAAIAAkRICCAAIAAERgAGfCkIAAjZIhHDZIgfAAIAAkRIAbAAIAADLIBFjLIAiAAIAAERgAECCkIgLg3IhFAAIgLA3IgcAAIA0kRIAtAAIA1ERgADzBSIgfidIgeCdIA9AAgABUCkIAAh8IhEAAIAAB8IgdAAIAAkRIAdAAIAAB6IBEAAIAAh6IAfAAIAAERgAkaCkIAAjZIhGDZIggAAIAAkRIAbAAIAADLIBFjLIAiAAIAAERgAm9CkIAAjbIgsDbIgdAAIgujZIAADZIgbAAIAAkRIArAAIAuDaIArjaIArAAIAAERgAqJCkIAAjZIhGDZIggAAIAAkRIAbAAIAADLIBFjLIAiAAIAAERgAsuCkIAAh8IhDAAIAAB8IgfAAIAAkRIAfAAIAAB6IBDAAIAAh6IAfAAIAAERgAFqiDQgIgBgGgGQgFgFgDgHQgDgHAAgJIATAAQABALAGAEQAGAFAKAAQAKAAAHgFQAGgEABgLIATAAQAAAJgDAHQgDAHgGAFQgFAGgIABQgIADgKABQgKgBgHgDg");
	this.shape.setTransform(108.9,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,-10.9,213.6,35.2);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11_1();
	this.instance.setTransform(318.3,151.2,1,1,0,0,0,320.5,153);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0},11).wait(19).to({alpha:1},0).to({alpha:0},14).wait(22));

	// Слой 1
	this.instance_1 = new lib.Символ8_1();
	this.instance_1.setTransform(318,145.6,1.611,1.611,0,0,0,2.7,2.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(25).to({_off:false,alpha:1},0).to({_off:true},1).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(26));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],53.3,0,-53.2,0).s().p("AoTL1IAA3pIQnAAIAAXpg");
	this.shape.setTransform(620.7,161);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-53.2,0,53.3,0).s().p("AoTL1IAA3pIQnAAIAAXpg");
	this.shape_1.setTransform(0,161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(75));

	// Слой 1
	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:136.5},0).to({y:152.5},2).wait(28).to({y:136.5},0).to({y:152.5},2).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,5.6,727.3,304);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(-28.7,-47.1,1.134,1.134,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452.2,-213.7,825,344.9);


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
	this.frame_6 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-38,y:0}).wait(1).to({graphics:mask_graphics_2,x:-68,y:0}).wait(1).to({graphics:mask_graphics_3,x:-98.7,y:0}).wait(1).to({graphics:mask_graphics_4,x:-108.7,y:0}).wait(1).to({graphics:mask_graphics_5,x:-115.2,y:0}).wait(1).to({graphics:mask_graphics_6,x:-125.2,y:0}).wait(1));

	// Слой 3 - копия
	this.instance = new lib.Символ42();
	this.instance.setTransform(0,-0.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("AN9BKIAAiTIABAAIAACTgAN9BKI76AAIAAiTIb6AAIAACTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("At9BKIAAiTIb7AAIAACTg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("At9BKIAAiTIb7AAIAACTg");
	this.shape_3._off = true;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(3).to({_off:false},0).wait(4));

	// Слой 2 - копия
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(1,2,0,3).p("At4hFIbxAAIAACLI7xAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(1,2,0,3).p("AN5hFIAACLI7xAAIAAiLg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCD00").ss(1,2,0,3).p("AN5BGI7xAAIAAiLIbxAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF3000").ss(1,2,0,3).p("At4hFIbxAAIAACLI7xAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(4));

	// Слой 3
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.6,-12.8,213.6,28);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,1,1,0,0,0,17.8,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-8.9,19.1,18.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-4.6,regY:0.4,scaleX:1,scaleY:1,x:-4.5,y:0.4},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-4.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-4.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-3.9},0).wait(1).to({regX:0,regY:0,scaleX:0.8,scaleY:0.8,x:0,y:0},0).wait(1).to({regX:-4.6,regY:0.4,scaleX:0.85,scaleY:0.85,x:-3.9,y:0.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-4.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-4.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-4.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-4.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-4.5},0).wait(1).to({scaleX:1,scaleY:1,x:-4.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-8.9,19.1,18.7);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.hp = new lib.Символ20();
	this.hp.setTransform(18.5,-5,1,1.267);

	this.timeline.addTween(cjs.Tween.get(this.hp).wait(1));

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(-95.1,-5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.2,-19.9,217.3,32);


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
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(4.4,4.4,1.611,1.611,0,0,0,2.7,2.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(25).to({_off:false,alpha:1},0).to({_off:true},1).wait(4).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-899.7,-152.2,111,82);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.setTransform(567.3,100.6,1.079,1.079,0,0,0,4.4,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.gb();
	this.instance_1.setTransform(-38.9,-10.1,1.079,1.079);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.8,-68.3,1574.6,395.8);


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
	mask.graphics.p("AiACEQg0g2AAhOQAAhNA0g3QA2g3BKAAQBKAAA2A3QA1A3AABNQAABOg1A2Qg2A4hKABQhKgBg2g4g");
	mask.setTransform(247.8,36.5);

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.setTransform(157.7,-17.3,1,1,30,0,0,43.7,32.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:182.6,y:-3.3},0).wait(1).to({x:205.3,y:9.6},0).wait(1).to({x:225.9,y:21.2},0).wait(1).to({x:244.3,y:31.5},0).wait(1).to({x:260.6,y:40.7},0).wait(1).to({x:274.7,y:48.6},0).wait(1).to({x:286.6,y:55.3},0).wait(1).to({x:296.4,y:60.8},0).wait(1).to({x:303.9,y:65.1},0).wait(1).to({x:309.4,y:68.1},0).wait(1).to({x:312.6,y:69.9},0).wait(1).to({x:313.7,y:70.6},0).wait(38));

	// Слой 4
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(161.6,59.1,1.277,1.277);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,-29.1,235,176.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(559,152.5,1,1,0,0,0,559,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.8,-68.3,1574.6,395.8);


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
p.nominalBounds = new cjs.Rectangle(-2108.2,-483.8,4188.8,1046.4);


(lib.Символ27 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ21();
	this.instance.setTransform(40.4,43.8,0.629,0.629,0,0,0,67.2,67.2);
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.second = new lib.Символ24();
	this.second.setTransform(175.2,63.8);

	this.timeline.addTween(cjs.Tween.get(this.second).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277,-150,825,344.9);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.tekst = new lib.Символ38();
	this.tekst.setTransform(-5.8,-29.7,1.037,1.037,0,0,0,110.4,16);

	this.bullet = new lib.Символ40();
	this.bullet.setTransform(-64.2,1.8,0.885,0.885,0,0,0,57.8,15.5);

	this.hp = new lib.Символ17();
	this.hp.setTransform(-18,36.3,0.885,0.885);

	this.instance_8 = new lib.blrck();
	this.instance_8.setTransform(-251.5,-72.4,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.hp},{t:this.bullet},{t:this.tekst}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-72.4,445,150.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.parent.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.parent.title.hp.hp.play();
	}
	this.frame_39 = function() {
		this.parent.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.parent.title.hp.hp.play();
	}
	this.frame_44 = function() {
		this.parent.parent.parent.stvol.gotoAndPlay(1);
		this.parent.parent.parent.title.hp.hp.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(30).call(this.frame_39).wait(5).call(this.frame_44).wait(31));

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(841.5,268,1,1,0,0,0,320.5,153);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0},11).wait(19).to({alpha:1},0).to({alpha:0},14).wait(22));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],53.3,0,-53.2,0).s().p("AoTL1IAA3pIQnAAIAAXpg");
	this.shape.setTransform(1397.8,215.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-53.2,0,53.3,0).s().p("AoTL1IAA3pIQnAAIAAXpg");
	this.shape_1.setTransform(297.1,215.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(75));

	// Слой 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(603,268.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({y:264.5},0).wait(2).to({y:268.5},0).wait(28).to({y:264.5},0).wait(2).to({y:268.5},0).wait(3).to({y:264.5},0).wait(2).to({y:268.5},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.8,47.7,1575.9,395.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(157.5,84,1,1,0,0,0,157.5,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:161.6,regY:59,x:161.6,y:59},0).wait(1).to({rotation:-0.1,y:59.1},0).wait(1).to({y:59.3},0).wait(1).to({rotation:-0.2,y:59.5},0).wait(1).to({rotation:-0.4,x:161.5,y:59.8},0).wait(1).to({rotation:-0.5,x:161.4,y:60.2},0).wait(1).to({rotation:-0.7,y:60.7},0).wait(1).to({rotation:-0.9,x:161.3,y:61.2},0).wait(1).to({rotation:-1.1,x:161.1,y:61.8},0).wait(1).to({rotation:-1.4,x:161,y:62.4},0).wait(1).to({rotation:-1.7,x:160.9,y:63.1},0).wait(1).to({regX:157.5,regY:84,rotation:-2,x:157.5,y:89},0).wait(1).to({regX:161.6,regY:59,rotation:-2.4,x:160.6,y:64.6},0).wait(1).to({rotation:-2.7,x:160.4,y:65.3},0).wait(1).to({rotation:-3,x:160.3,y:65.9},0).wait(1).to({rotation:-3.2,y:66.6},0).wait(1).to({rotation:-3.5,x:160.1,y:67.1},0).wait(1).to({rotation:-3.7,x:160,y:67.5},0).wait(1).to({rotation:-3.8,y:67.9},0).wait(1).to({rotation:-4,x:159.9,y:68.2},0).wait(1).to({rotation:-4.1,y:68.4},0).wait(1).to({x:159.8,y:68.6},0).wait(1).to({rotation:-4.2,y:68.7},0).wait(1).to({regX:157.5,regY:84,x:157.5,y:94},0).wait(1).to({regX:161.6,regY:59,x:159.8,y:68.7},0).wait(1).to({rotation:-4.1,y:68.6},0).wait(1).to({x:159.9,y:68.4},0).wait(1).to({rotation:-4,y:68.2},0).wait(1).to({rotation:-3.8,x:160,y:67.9},0).wait(1).to({rotation:-3.7,y:67.6},0).wait(1).to({rotation:-3.5,x:160.1,y:67.1},0).wait(1).to({rotation:-3.2,x:160.3,y:66.6},0).wait(1).to({rotation:-3,y:66},0).wait(1).to({rotation:-2.7,x:160.4,y:65.3},0).wait(1).to({rotation:-2.4,x:160.6,y:64.6},0).wait(1).to({regX:157.5,regY:84,rotation:-2,x:157.5,y:89.1},0).wait(1).to({regX:161.6,regY:59,rotation:-1.7,x:160.9,y:63.1},0).wait(1).to({rotation:-1.4,x:161,y:62.4},0).wait(1).to({rotation:-1.1,x:161.1,y:61.8},0).wait(1).to({rotation:-0.9,x:161.3,y:61.2},0).wait(1).to({rotation:-0.7,x:161.4,y:60.7},0).wait(1).to({rotation:-0.5,y:60.2},0).wait(1).to({rotation:-0.4,x:161.5,y:59.9},0).wait(1).to({rotation:-0.2,x:161.6,y:59.6},0).wait(1).to({rotation:-0.1,y:59.4},0).wait(1).to({y:59.2},0).wait(1).to({rotation:0,y:59.1},0).wait(1).to({regX:157.5,regY:84,x:157.5,y:84},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,-67.3,235,214.6);


(lib.Символ22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.fon = new lib.Символ10();
	this.fon.setTransform(29.6,-36.9,1,1,0,0,0,700.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-795.7,-199.7,1575.9,395.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(157.5,84,1,1,0,0,0,157.5,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:159.7,regY:68.1,rotation:0.1,x:159.7,y:68.3},0).wait(1).to({rotation:0.2,x:159.8,y:68.7},0).wait(1).to({rotation:0.5,y:69.5},0).wait(1).to({rotation:0.9,x:159.9,y:70.7},0).wait(1).to({rotation:1.4,x:160.1,y:72.1},0).wait(1).to({rotation:2,x:160.3,y:73.9},0).wait(1).to({rotation:2.7,x:160.5,y:76},0).wait(1).to({rotation:3.6,x:160.7,y:78.4},0).wait(1).to({regX:157.5,regY:84,rotation:4.5,x:157.5,y:96.8},0).wait(1).to({regX:159.7,regY:68.1,rotation:5.5,x:161.2,y:83.9},0).wait(1).to({rotation:6.4,x:161.5,y:86.3},0).wait(1).to({rotation:7.2,x:161.7,y:88.5},0).wait(1).to({rotation:7.9,x:162,y:90.4},0).wait(1).to({rotation:8.4,x:162.1,y:92},0).wait(1).to({rotation:8.9,x:162.2,y:93.3},0).wait(1).to({rotation:9.3,x:162.4,y:94.4},0).wait(1).to({rotation:9.5,x:162.5,y:95.1},0).wait(1).to({rotation:9.7,x:162.4,y:95.6},0).wait(1).to({regX:157.6,regY:84,x:157.6,y:111},0).wait(31).to({regX:159.7,regY:68.1,x:162.3,y:95.5},0).wait(1).to({rotation:9.5,y:95},0).wait(1).to({rotation:9.2,x:162.2,y:94.3},0).wait(1).to({rotation:8.9,x:162.1,y:93.3},0).wait(1).to({rotation:8.4,x:162,y:91.8},0).wait(1).to({rotation:7.8,x:161.7,y:90.1},0).wait(1).to({rotation:7,x:161.5,y:88.1},0).wait(1).to({rotation:6.2,x:161.3,y:85.9},0).wait(1).to({regX:157.6,regY:84,rotation:5.3,x:157.6,y:98.9},0).wait(1).to({regX:159.7,regY:68.1,rotation:4.4,x:160.8,y:80.6},0).wait(1).to({rotation:3.5,x:160.6,y:78.2},0).wait(1).to({rotation:2.8,x:160.5,y:76},0).wait(1).to({rotation:2.1,x:160.2,y:74.2},0).wait(1).to({rotation:1.6,x:160.1,y:72.5},0).wait(1).to({rotation:1.1,x:159.9,y:71.2},0).wait(1).to({rotation:0.7,x:159.8,y:70.1},0).wait(1).to({rotation:0.4,y:69.2},0).wait(1).to({rotation:0.2,x:159.7,y:68.6},0).wait(1).to({rotation:0,y:68.2},0).wait(1).to({regX:157.5,regY:84,x:157.5,y:84},0).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,-67.3,235,214.6);


(lib.Символ25копия = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ22_1();
	this.instance.setTransform(0,-0.2);

	this.main = new lib.Символ25();
	this.main.setTransform(52,-58.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.main}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-795.7,-200,1575.9,395.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:72.8},0).to({y:62.8},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,-67.3,235,214.6);


// stage content:



(lib.sniper_resp_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = 120 + 'px';
			stage.canvas.width = windowSize.width;
			stage.canvas.height = 120;
			
			_this.title.x = 0;
			_this.title.y = 120;
			
			_this.qwe.x = windowSize.width/2;
			_this.qwe.y = 60;
			
			_this.stvol.x = (windowSize.width/2)+(windowSize.width/4);
			_this.stvol.y = 120;
			
		}
		
		window.onresize=function(){
				_setCanvasSize();
			}
		
			stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
			_this.pricel.gotoAndStop(1);
			_this.qwe.gotoAndStop(1);
			_this.title.visible = false;
			_this.stvol.visible = false;
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
			_this.pricel.gotoAndStop(0);
			_this.qwe.gotoAndStop(0);
			_this.title.visible = true;
			_this.stvol.visible = true;
		}
		
		
		
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
			
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.pricel = new lib.Символ27();
	this.pricel.setTransform(600.7,58);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 2
	this.title = new lib.Символ21_1();
	this.title.setTransform(-0.9,119.8,1,1,0,0,0,-150.5,52.8);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Слой 3
	this.stvol = new lib.Символ12();
	this.stvol.setTransform(871.9,119.7,0.627,0.627,0,0,0,155.9,128.3);

	this.timeline.addTween(cjs.Tween.get(this.stvol).wait(1));

	// Слой 1
	this.qwe = new lib.Символ25копия();
	this.qwe.setTransform(599.3,59.8,1,1,0,0,0,177.7,-31.8);

	this.timeline.addTween(cjs.Tween.get(this.qwe).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.8,-48.4,1575.9,395.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
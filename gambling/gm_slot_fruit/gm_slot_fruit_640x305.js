(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg_fruit.jpg", id:"bg_fruit"},
		{src:"images/blik.png", id:"blik"},
		{src:"images/blur.jpg", id:"blur"},
		{src:"images/frame.png", id:"frame"},
		{src:"images/item.jpg", id:"item"},
		{src:"images/llogo.png", id:"llogo"},
		{src:"images/logo.png", id:"logo"}
	]
};



// symbols:



(lib.bg_fruit = function() {
	this.initialize(img.bg_fruit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.blur = function() {
	this.initialize(img.blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,170);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,136);


(lib.item = function() {
	this.initialize(img.item);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,98);


(lib.llogo = function() {
	this.initialize(img.llogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,40);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,86);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.647)").s().p("EgyxAYiMAAAgxDMBljAAAMAAAAxDgAzNKjMAmOAAAIAAucMgmOAAAg");
	this.shape.setTransform(325.1,157);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650.2,314.1);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#02C002","#02FF02","#02B902"],[0,0.518,1],-105.5,0,105.6,0).s().p("AvjD/Qg7AAAAg7IAAmHQAAg6A7gBIfHAAQA7ABAAA6IAAGHQAAA7g7AAg");
	this.shape.setTransform(105.5,25.5);

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AvjD+Qg7AAAAg6IAAmHQAAg7A7AAIfHAAQA7AAAAA7IAAGHQAAA6g7AAg");
	this.shape_1.setTransform(105.5,27.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211.1,52.8);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEEC00").ss(2,2).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");
	this.shape.setTransform(320,152.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,642,307);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE0406").s().p("AAACJIixBzIABgCIgEACIBHjFIimhvIDOAAIBFjDIBEDDIDQAAIinBwIBFDEg");
	this.shape.setTransform(27.6,25.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,50.5);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.llogo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212,40);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.blik();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,204,0.2)","rgba(255,255,204,0.608)","rgba(255,255,204,0.651)","rgba(255,255,204,0.576)","rgba(255,255,204,0)"],[0,0.255,0.525,0.753,1],0,48.1,0,-48).s().p("Az1HMIAAuXMAnrAAAIAAOXg");
	this.shape.setTransform(127,46.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,254.1,92.1);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.blur();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132,170);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.item();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,98);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.749)").s().rr(-35,-24.2,70,48.4,5.9);
	this.shape.setTransform(35,25.5,1,1.054);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,51);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg_fruit();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADxBBIAAh+IAmAAIAAA9IABAAIBKhAIADAAIAAB+IglAAIAAg+IAAAAIhKBBgAuiA/IgTgFIAAgeQAHADALACQAKADAJAAIAKgBIAIgDQAEgCABgDQACgDAAgDQAAgGgGgDQgEgDgJAAIgQAAIAAgWIAPAAQAHAAAFgDQAEgDAAgEQABgFgGgDQgGgDgJAAQgIAAgLACQgLACgFACIAAgeQASgGAYAAQALAAAJADIAJADIAJAFQAFADADAHQADAGAAAHQAAAIgEAIIgHAGQgDADgFACQAFABAFACQAEADADADQADAEACAEIABAKQAAAJgEAIQgEAHgIAGQgIAFgKADQgKADgNAAQgMgBgKgBgAMGA+IAAh7IAlAAIAABfIAgAAIAAhfIAmAAIAABfIAgAAIAAhfIAlAAIAAB7gALLA+IAAh7IAkAAIAAB7gAJWA+IAAh7IAlAAIAAAvIAUAAQAMAAAKADQAJADAFAFQAFADADAFQADAFABAFIABAJQAAAJgDAHQgDAGgHAFQgMALgRAAgAJ7AkIAOAAQASAAAAgOQAAgGgFgEQgEgDgHAAIgQAAgAHjA+IAAh7IA0AAQAYAAAMANQAGAGADAIQADAHAAAIQAAAJgDAIQgDAGgGAGQgHAGgIADQgJAEgLgBIgQAAIAAAogAIIgCIAGAAQAKAAAGgEQAFgEAAgIQAAgHgEgEQgFgFgJABIgJAAgAF8A+IAAh7IBaAAIAAAcIg0AAIAABfgAC3A+IAAh7IAlAAIAAB7gABCA+IAAh7IAlAAIAAAvIAUAAQAMAAAKADQAJADAFAFQAFADADAFQADAFABAFIABAJQAAAJgDAHQgDAGgHAFQgLALgSAAgABnAkIANAAQATAAgBgOQABgGgFgEQgEgDgHAAIgQAAgAg5A+IAAh7IA8AAQAJAAAGACQAGADAGAEQAFAFACAGQACAFABAHQAAAIgDAGQgEAGgGAFIAAABQAEACAEACIAHAHIAEAIIACAJQAAAIgEAGQgDAGgFAGQgFAGgIACQgHADgJAAgAgVAiIAUAAQAGAAADgEQAEgDAAgFQAAgGgFgDQgDgEgGABIgTAAgAgVgMIAQAAQAFAAABgDQAEgDAAgFQAAgFgDgDQgCgDgFAAIgQAAgAjhA+IAAh7IAlAAIAAAvIAVAAQALAAAKADQAJACAGAGQAFADADAFIADAKIABAJQAAAJgCAHQgEAGgFAFQgHAGgHACQgIADgJAAgAi8AkIARAAQAHAAAEgEQAEgDAAgHQAAgGgFgEQgEgDgHAAIgQAAgAk2A+IAAhfIgiAAIAAgcIBqAAIAAAcIgjAAIAABfgAl/A+IgGgOIgsAAIgGAOIgjAAIA9h+IAFAAIA9B+gAmQAYIgKgYIgBAAIgLAYIAWAAgApDA+IAAh7IA0AAQAXAAANANQAGAGAEAIQACAHAAAIQAAAJgCAIQgEAGgGAGQgHAGgIADQgJAEgLgBIgQAAIAAAogAofgCIAHAAQAJAAAGgEQAGgEgBgIQAAgHgDgEQgGgFgIABIgKAAgAq/A+IABh7IBeAAIAAAbIg5AAIAAAUIAVAAQALAAAKADQAJADAGAEQAFAEADAEIADAKIABAJQAAAGgBAEIgDAIQgFAIgHAFQgGAEgIACQgIACgHAAgAqZAkIAOAAQAJAAAEgEQAFgDAAgHQAAgGgFgEQgEgDgHAAIgQAAgArvA+IgGgOIgsAAIgFAOIgkAAIA+h+IAEAAIA9B+gAr/AYIgLgYIgLAYIAWAAg");
	this.shape.setTransform(105.3,26.3);

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(105.5,25.3,1.131,1,0,0,0,105.5,25.5);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.8,-0.2,238.7,52.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,642.6,307.6);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(27.6,25.2,1,1,0,0,0,27.6,25.2);
	this.instance.alpha = 0.691;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,50.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(39.5,40,1,1,0,0,0,39.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:185.1},14,cjs.Ease.get(-1)).to({x:341.1},15,cjs.Ease.get(1)).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,80);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(100,14,1,1,0,0,0,106,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,212,40);


(lib.Символ13 = function() {
	this.initialize();

	// Layer 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFoB0QgTgGgOgNQgMgNgHgRQgGgSgBgVQAAgpAagaQAagaA3AAQA2AAAaAaQAaAaAAApQgBAVgGASQgGARgNANQgNANgUAGQgUAHgbAAQgbAAgVgHgAGCgYQgKACgIAGQgIAHgFAJQgEALAAARQAAASAEAKQAFAMAIAGQAIAGAKACQALACALAAQAKAAALgCQALgCAHgGQAIgGAFgMQAFgKgBgSQABgRgFgLQgFgJgIgHQgHgGgLgCQgLgDgKAAQgLAAgLADgALzBzIAQgfQAEgGACgBQADgCAGAAICCAAQAGAAAFgEQAEgEAAgGQAAgGgEgEQgEgEgHAAIhnAAQgOAAgLgEQgLgDgJgHQgIgHgFgKQgEgKgBgKQABgNAEgKQAEgJAJgHQAJgHALgEQALgDAOAAICPAAIgRAfQgDAFgDACQgBABgIAAIhvAAQgFAAgEAEQgDAEAAAGQAAAEADADQAEAEAFAAIByAAQALAAAKAEQAKAEAHAHQAIAIADAJQAFAKAAAMQAAAMgFAKQgDAKgIAHQgHAIgKADQgLAEgKAAgAJUBzIAAiFIhbAAIAQgfQADgGACgBIAJgBIDOAAIgQAeQgDAGgCABQgCACgHAAIgyAAQgFAAgDADQgEADABAFIAAB6gADDBzQgYAAgUgGQgTgGgLgMQgLgLgHgQQgFgQgBgUIAAhVIA2AAIAABVQAAAQAFAJQAFAJAIAFQAIAFALACQAKACAJAAIBWAAIgQAfQgDAGgDABQgCABgGAAgAjvBzIAWgrQAEgIADgCQADgBAKAAICyAAQAIAAAHgGQAEgGAAgIQAAgIgEgGQgHgGgIAAIiOAAQgSAAgPgEQgQgFgLgKQgMgHgGgOQgHgOAAgQQAAgRAHgOQAGgNAMgKQAMgKAPgEQAPgFASAAIDBAAIgVArQgGAIgCACQgDACgHAAIiYAAQgIAAgGAFQgEAFAAAIQAAAIAEAFQAHAFAHAAICbAAQAOAAAMAGQAOAFAKAKQAJAKAGALQAGANAAARQAAARgGANQgGAOgJAKQgKAKgOAFQgOAFgMAAgAlrBzIAAi1IhBC1IhGAAIAAAAIhEi1IAAC1IhJAAIAAjeQAAgHAEgDQAFgFAGAAIBfAAIBBCoQAIgZAKgXIAphsQADgIAEgCQADgCAKAAIBfAAIAADtgAtPBzQghAAgagIQgagJgQgQQgPgOgJgXQgIgWAAgZQAAgbAIgWQAIgXAQgPQARgPAZgJQAYgJAjAAIC5AAIgWArQgFAHgEACQgCACgJAAIiHAAQgOAAgMACQgMAEgJAGQgJAIgFAMQgGAOABAUQgBASAGANQAFANAJAHQAJAHAMADQANACANAAIB9AAIAAgoIhxAAIAVglQAEgIAEgCQADgCAIAAICIAAIAACAQAAAGgEAFQgEAEgHAAg");
	mask.setTransform(191.3,40);

	// Слой 3
	this.instance = new lib.Символ18();
	this.instance.setTransform(35.1,43.6,1,1,0,0,0,39.5,40);

	this.instance.mask = mask;

	// Layer 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(191.4,40,1,1,0,0,0,98.2,12.3);
	this.instance_1.alpha = 0.75;

	// Layer 1 - копия: 2
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(191.4,40,1,1,0,0,0,98.2,12.3);
	this.instance_2.alpha = 0.75;

	// Слой 1
	this.instance_3 = new lib.logo();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,385,86);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(127,46.1,1,1,0,0,0,127,46.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.1,92.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(66,85,1,1,0,0,0,66,85);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,136,174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:180},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,140,178);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(38,-342.5,1,1,0,0,0,38,49);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(38,-244.5,1,1,0,0,0,38,49);

	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(38,-146.5,1,1,0,0,0,38,49);

	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(38,-49,1,1,0,0,0,38,49);

	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(38,147,1,1,0,0,0,38,49);

	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(38,49,1,1,0,0,0,38,49);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7693D0").s().p("EgGFAt4MAAAhbvIMLAAMAAABbvg");
	this.shape.setTransform(39,-97.7);

	this.addChild(this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-391.5,78,587.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(27.6,25.2,1,1,0,0,0,27.6,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,50.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ28();
	this.instance.setTransform(121.1,611.6,1,1,0,0,0,105.5,26.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).wait(1).to({regY:26.1,x:121.7,y:584.7},0).wait(1).to({x:122,y:568.5},0).wait(1).to({x:122.3,y:558.7},0).wait(1).to({x:122.4,y:551},0).wait(1).to({x:122.6,y:544.2},0).wait(1).to({x:122.7,y:538.9},0).wait(1).to({x:122.8,y:534.9},0).wait(1).to({x:122.9,y:532},0).wait(1).to({y:529.9},0).wait(1).to({x:123,y:528.3},0).wait(1).to({regY:26.4,y:527.6},0).wait(77).to({regY:26.1,y:528.4},0).wait(1).to({x:122.9,y:530},0).wait(1).to({y:532.1},0).wait(1).to({x:122.8,y:534.9},0).wait(1).to({x:122.7,y:538.7},0).wait(1).to({x:122.6,y:543.9},0).wait(1).to({x:122.4,y:551},0).wait(1).to({x:122.2,y:559.7},0).wait(1).to({x:122,y:571.8},0).wait(1).to({x:121.6,y:589.4},0).wait(1).to({regY:26.4,x:121.1,y:611.6},0).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(124.6,421.1,1,1,0,0,0,325.1,157);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({_off:false},0).to({alpha:1},11).wait(76).to({alpha:0},11).wait(1));

	// Слой 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzFHOIAAuXILeAAIAAOXgAHpHKIAAuXILcAAIAAOXgAlvHKIAAuXILbAAIAAOXg");
	mask.setTransform(124,442.2);

	// Слой 7
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(123.5,441.7,1,1,0,0,0,127,46.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({_off:false},0).to({alpha:1},6).wait(127).to({alpha:0},7).to({_off:true},1).wait(4));

	// Слой 6 - копия: 2
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(208.4,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(71).to({alpha:0.809},0).to({_off:true},1).wait(156));

	// Слой 6 - копия
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(122.9,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(60).to({alpha:0.809},0).to({_off:true},1).wait(167));

	// Слой 6
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(39.4,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(49).to({alpha:0.809},0).to({_off:true},1).wait(178));

	// Символ 6
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(208,440.5,1,1,0,0,0,38,49);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:39,regY:-97.8,x:209,y:283.7},0).wait(1).to({y:277.2},0).wait(1).to({y:272.5},0).wait(1).to({y:268.5},0).wait(1).to({y:265.1},0).wait(1).to({y:262.8},0).wait(1).to({y:261.1},0).wait(1).to({y:259.8},0).wait(1).to({regX:38,regY:49,x:208,y:405.5},0).wait(1).to({regX:39,regY:-97.8,x:209,y:259.7},0).wait(1).to({y:261.2},0).wait(1).to({y:263.5},0).wait(1).to({y:266.5},0).wait(1).to({y:270.7},0).wait(1).to({y:276.2},0).wait(1).to({regY:-97.7,y:283.1},0).wait(1).to({regY:-97.8,y:291.1},0).wait(1).to({y:299.8},0).wait(1).to({y:308.6},0).wait(1).to({regY:-97.7,y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({regY:-97.8,y:343.5},0).wait(1).to({y:364.5},0).wait(1).to({regX:38,regY:49,x:208,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.8,x:209,y:448.2},0).wait(1).to({y:487.1},0).wait(1).to({regY:-97.7,y:514.5},0).wait(1).to({regY:-97.8,y:534.4},0).wait(1).to({regY:-97.7,y:550.6},0).wait(1).to({regY:-97.8,y:562.8},0).wait(1).to({y:571.8},0).wait(1).to({y:578.4},0).wait(1).to({y:583.4},0).wait(1).to({regX:38,regY:49,x:208,y:734},0).wait(146));

	// Символ 6
	this.instance_7 = new lib.Символ6();
	this.instance_7.setTransform(122,440.5,1,1,0,0,0,38,49);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:39,regY:-97.8,x:123,y:283.7},0).wait(1).to({y:277.2},0).wait(1).to({y:272.5},0).wait(1).to({y:268.5},0).wait(1).to({y:265.1},0).wait(1).to({y:262.8},0).wait(1).to({y:261.1},0).wait(1).to({y:259.8},0).wait(1).to({regX:38,regY:49,x:122,y:405.5},0).wait(1).to({regX:39,regY:-97.8,x:123,y:259.7},0).wait(1).to({y:261.2},0).wait(1).to({y:263.5},0).wait(1).to({y:266.5},0).wait(1).to({y:270.7},0).wait(1).to({y:276.2},0).wait(1).to({regY:-97.7,y:283.1},0).wait(1).to({regY:-97.8,y:291.1},0).wait(1).to({y:299.8},0).wait(1).to({y:308.6},0).wait(1).to({regY:-97.7,y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({regY:-97.8,y:343.5},0).wait(1).to({y:364.5},0).wait(1).to({regX:38,regY:49,x:122,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.8,x:123,y:462.1},0).wait(1).to({y:501.2},0).wait(1).to({y:526.2},0).wait(1).to({y:545.4},0).wait(1).to({regY:-97.7,y:559.6},0).wait(1).to({regY:-97.8,y:569.4},0).wait(1).to({y:576.4},0).wait(1).to({y:581.3},0).wait(1).to({y:584.7},0).wait(1).to({regX:38,regY:49,x:122,y:734},0).wait(157));

	// Символ 6
	this.instance_8 = new lib.Символ6();
	this.instance_8.setTransform(38,440.5,1,1,0,0,0,38,49);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:39,regY:-97.8,x:39,y:283.7},0).wait(1).to({y:277.2},0).wait(1).to({y:272.5},0).wait(1).to({y:268.5},0).wait(1).to({y:265.1},0).wait(1).to({y:262.8},0).wait(1).to({y:261.1},0).wait(1).to({y:259.8},0).wait(1).to({regX:38,regY:49,x:38,y:405.5},0).wait(1).to({regX:39,regY:-97.8,x:39,y:259.7},0).wait(1).to({y:261.2},0).wait(1).to({y:263.5},0).wait(1).to({y:266.5},0).wait(1).to({y:270.7},0).wait(1).to({y:276.2},0).wait(1).to({regY:-97.7,y:283.1},0).wait(1).to({regY:-97.8,y:291.1},0).wait(1).to({y:299.8},0).wait(1).to({y:308.6},0).wait(1).to({regY:-97.7,y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({regY:-97.8,y:343.5},0).wait(1).to({y:364.5},0).wait(1).to({regX:38,regY:49,x:38,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.8,x:39,y:445.6},0).wait(1).to({regY:-97.7,y:480.3},0).wait(1).to({regY:-97.8,y:504.7},0).wait(1).to({y:524.7},0).wait(1).to({regY:-97.7,y:542.7},0).wait(1).to({regY:-97.8,y:557.1},0).wait(1).to({regY:-97.7,y:568},0).wait(1).to({regY:-97.8,y:575.9},0).wait(1).to({y:582.2},0).wait(1).to({regX:38,regY:49,x:38,y:734},0).wait(168));

	// Слой 1
	this.instance_9 = new lib.Символ4();
	this.instance_9.setTransform(-144.5,306.8,1,1,0,0,0,35,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({x:-67.2},0).wait(4).to({x:9.5},0).wait(4).to({x:85.3},0).wait(4).to({x:161.5},0).wait(4).to({x:237.5},0).wait(4).to({x:314.5},0).wait(4).to({x:390.8},0).wait(3).to({y:365},0).wait(3).to({x:391.5,y:422.3},0).wait(3).to({y:480},0).wait(3).to({y:538},0).wait(3).to({x:315.8},0).wait(2).to({x:239.5},0).wait(2).to({x:162.5},0).wait(2).to({x:85.5,y:537.5},0).wait(2).to({x:9.5,y:538},0).wait(2).to({x:-67.5,y:537},0).wait(2).to({x:-144.5},0).wait(1).to({y:479},0).wait(1).to({y:422},0).wait(1).to({x:-143,y:363.5},0).wait(1).to({x:-144.5,y:306.8},0).wait(1).to({x:-67.2},0).wait(1).to({x:9.5},0).wait(1).to({x:85.3},0).wait(1).to({x:161.5},0).wait(1).to({x:237.5},0).wait(1).to({x:314.5},0).wait(1).to({x:390.8},0).wait(1).to({y:365},0).wait(1).to({x:391.5,y:422.3},0).wait(1).to({y:480},0).wait(1).to({y:538},0).wait(1).to({x:315.8},0).wait(2).to({x:239.5},0).wait(2).to({x:162.5},0).wait(2).to({x:85.5,y:537.5},0).wait(2).to({x:9.5,y:538},0).wait(2).to({x:-67.5,y:537},0).wait(2).to({x:-144.5},0).wait(2).to({y:479},0).wait(9).to({y:422},0).wait(9).to({x:-143.5,y:364},0).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.5,281.3,425.7,207.2);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(504.5,170.5,1,1,0,0,0,27.6,25.2);

	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(134.9,170.5,1,1,0,0,0,27.6,25.2);

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


// stage content:
(lib.gm_slot_fruit_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndStop(244);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(245);
		}
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ26();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(320,96,1,1,0,0,0,192.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.main = new lib.Символ8();
	this.main.setTransform(318.6,24.7,1,1,0,0,0,123,293.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 6
	this.instance_2 = new lib.frame();
	this.instance_2.setTransform(177.1,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(318.7,-117.6,642.6,593);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
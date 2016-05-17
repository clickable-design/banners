(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back2.jpg?1463485463357", id:"back2"},
		{src:"images/ball.png?1463485463357", id:"ball"},
		{src:"images/for_02.png?1463485463357", id:"for_02"},
		{src:"images/for_05.png?1463485463357", id:"for_05"},
		{src:"images/for_08.png?1463485463357", id:"for_08"}
	]
};



// symbols:



(lib.back2 = function() {
	this.initialize(img.back2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,587,141);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.for_02 = function() {
	this.initialize(img.for_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,100);


(lib.for_05 = function() {
	this.initialize(img.for_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,35);


(lib.for_08 = function() {
	this.initialize(img.for_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,35);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAqIgEgRIgNAAIgDARIgVAAIAThTIAXAAIATBTgAAFAKIgFgkIgEAkIAJAAg");
	this.shape.setTransform(67.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHAqIAAgkIgEAAIgDABIgCAAIgGAAIgGgBIgFgDQgDgDgCgCQgCgDAAgGIAAgeIAVAAIAAAdIABAEQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIACgBIAFgCIAAggIAUAAIAABTg");
	this.shape_1.setTransform(60.9,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAqIgEgRIgNAAIgDARIgVAAIAThTIAXAAIATBTgAAFAKIgFgkIgEAkIAJAAg");
	this.shape_2.setTransform(54.4,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAzIAAgRIgcAAIAAARIgTAAIAAgiIACAAIAEgHIADgJIABgKIAAgRIAAgYIA1AAIAABDIAFAAIAAAigAgDgSIAAAMIgBAHIgCAJIgDAHIATAAIAAgzIgNAAg");
	this.shape_3.setTransform(47.5,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAqQgGgBgDgDQgGgIgBgNIAAglQAAgEACgFQACgFADgDQADgDAGgBQAGgCAFgBQAHABAFACQAGABADADIAFAIQACAEAAAGIAAAkQAAANgHAIQgDADgGACQgFABgHAAQgFAAgGgCgAgDgaQgCACAAAEIAAApQAAAEACACQABACACAAIAFgCQABgCAAgEIAAgpQAAgEgBgCIgFgCQgCABgBABg");
	this.shape_4.setTransform(40.5,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGAqIAAhEIgLAAIAABEIgVAAIAAhTIA1AAIAABTg");
	this.shape_5.setTransform(33.8,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIAqIAAggIgEAAIgKAgIgWAAIAQgmIgFgDIgDgEQgEgFAAgJQAAgFACgFIAEgIQADgDAEgBQAFgCAFAAIAeAAIAABTgAgBgXQgCACAAAGQAAAEACADQABAEAEAAIAEAAIAAgWIgEAAQgEAAgBADg");
	this.shape_6.setTransform(23.8,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAqQgGgBgDgDQgGgIAAgNIAAglQAAgEABgFQACgFADgDQADgDAGgBQAFgCAGgBQAHABAFACQAFABAEADIAFAIQABAEABAGIAAAkQgBANgGAIQgEADgFACQgFABgHAAQgGAAgFgCgAgEgaQgCACAAAEIAAApQAAAEACACQADACABAAIAEgCQACgCABgEIAAgpQgBgEgCgCIgEgCQgBABgDABg");
	this.shape_7.setTransform(17.4,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAfAAIAHABIAHADQADADADAEQACAEgBAGQAAAFgBADQgBADgCACIgEAEIgDABQAFACAEAEQADAEAAAJQAAAGgBAFQgCAEgEAEQgGAGgNAAgAgGAbIAFAAQADAAADgDQACgCAAgGQAAgFgCgDQgCgDgEAAIgFAAgAgGgJIAGAAQACAAADgCQACgCAAgFQAAgEgCgCQgDgCgCAAIgGAAg");
	this.shape_8.setTransform(10.8,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgQAAIAAgPIAxAAIAAAPIgPAAIAABEg");
	this.shape_9.setTransform(4.7,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.8,15.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();
	this.instance.setTransform(1.2,0.9,0.277,0.277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.9,16.6,16.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAqIAAgTIAAgIIABgJIABgHIABgHIgQAyIgUAAIAAhTIAUAAIAAAUIAAAJIgBAIIgBAHIgBAIIAAAAIAQg0IATAAIAABTg");
	this.shape.setTransform(108.7,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHAqIAAgTIABgIIABgJIAAgHIABgHIgQAyIgTAAIAAhTIATAAIAAAUIAAAJIgBAIIgBAHIgBAIIABAAIAPg0IAUAAIAABTg");
	this.shape_1.setTransform(102.1,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJAzIAAgSIglAAIAAhTIAVAAIAABDIALAAIAAhDIAVAAIAABDIAEAAIAAAig");
	this.shape_2.setTransform(95.5,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJAqIAAggIgFAAIgKAgIgWAAIAQgmIgFgDIgEgEQgDgFAAgJQAAgFABgFIAFgIQADgDAEgBQAFgCAFAAIAeAAIAABTgAgBgXQgCACAAAGQAAAEACADQABAEADAAIAGAAIAAgWIgGAAQgDAAgBADg");
	this.shape_3.setTransform(88.4,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaArIgGgCIAAgPIADAAIADAAIADAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgJIABgNIAAgpIA1AAIAABUIgWAAIAAhEIgLAAIAAAcQAAAMgBAIQgCAIgCAFQgDAEgDACQgEACgFAAIgGAAg");
	this.shape_4.setTransform(81.4,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmQgDgDgCgGQgBgFgBgIIAAgjQABgFABgFIAFgIQAEgDAFgBQAFgCAGgBQAHABAFACQAGABADADQADAEACAEQABAFAAAFIAAAGIgUAAIAAgIIgBgDIgBgCIgDgCIgCAAQgCABgBABQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIAAApQAAAEABACQACADACAAQADAAACgDQACgBAAgFIAAgMIAUAAIAAAIQAAAIgBAFQgCAGgDADQgHAHgOgBQgMABgIgHg");
	this.shape_5.setTransform(74.6,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGAqIAAgkIgLAAIAAAkIgVAAIAAhTIAVAAIAAAgIALAAIAAggIAVAAIAABTg");
	this.shape_6.setTransform(67.9,6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAqIgEgRIgNAAIgDARIgVAAIAThTIAXAAIATBTgAAFAKIgFgkIgEAkIAJAAg");
	this.shape_7.setTransform(61.4,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAcAAIAJABQAEABAEACQAEADACAFIACAGIAAAIQAAAIgCAEQgCADgEAEQgEADgEABIgJABIgHAAIAAAhgAgFgEIADAAIACgBIADgCQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIABgEIAAgGIgDgDIgDgCIgCAAIgDAAg");
	this.shape_8.setTransform(55,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAqIAAhEIgQAAIAAgPIAxAAIAAAPIgPAAIAABEg");
	this.shape_9.setTransform(48.9,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_10.setTransform(41.2,8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAqIAAhTIAvAAIAAAPIgaAAIAAARIAXAAIAAAPIgXAAIAAAUIAaAAIAAAQg");
	this.shape_11.setTransform(33.5,6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAHAqIgQgyIABAHIABAHIABAIIAAAIIAAAUIgUAAIAAhTIAUAAIAQA0IAAAAIgBgIIgBgHIgBgIIAAgIIAAgVIAUAAIAABTg");
	this.shape_12.setTransform(27.2,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIATAAIAABTg");
	this.shape_13.setTransform(22.3,6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAVAAIAABCIAWAAIAAARg");
	this.shape_14.setTransform(18.1,6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAHAqIgQgyIABAHIABAHIABAIIAAAIIAAAUIgUAAIAAhTIAUAAIAQA0IAAAAIgBgIIgBgHIgBgIIAAgIIAAgVIAUAAIAABTg");
	this.shape_15.setTransform(11.9,6.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgLAqQgFgBgDgDQgIgIABgNIAAglQgBgEACgFQACgFADgDQAEgDAFgBQAFgCAGgBQAHABAFACQAGABADADIAFAIQABAEAAAGIAAAkQAAANgGAIQgDADgGACQgFABgHAAQgGAAgFgCgAgEgaQgCACAAAEIAAApQAAAEACACQACACACAAIAEgCQADgCAAgEIAAgpQAAgEgDgCIgEgCQgCABgCABg");
	this.shape_16.setTransform(5.3,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.2,15.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FE0000","#FB3300","#FA4500","#F76B02"],[0,0.447,0.627,1],0,14,0,-14).s().p("AqbCLQgQAAgBgQIAAj1QABgQAQAAIU3AAQAQAAAAAQIAAD1QAAAQgQAAg");
	this.shape.setTransform(68.5,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,28);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back2();
	this.instance.setTransform(1074,0,0.83,1,0,0,180);

	this.instance_1 = new lib.back2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1074,141);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,100);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,35);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_08();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,35);


(lib.Символ18 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AhbhCIC3AAQAQAAAAARIAABjQAAARgQAAIi3AAQgRAAAAgRIAAhjQAAgRARAAg");
	this.shape.setTransform(-52.8,254.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbBDQgRAAAAgRIAAhjQAAgRARAAIC3AAQAQAAAAARIAABjQAAARgQAAg");
	this.shape_1.setTransform(-52.8,254.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(24,17.5,1,1,0,0,0,24,17.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,247.2,23.8,15.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(36.4,7.5,1,1,0,0,0,36.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.28,scaleY:1.28},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.8,15.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(113.1,7.6,1,1,0,0,0,9.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,x:-10.2},4).to({rotation:720},35).to({rotation:1080,x:113.1},5).to({rotation:720},35).wait(1));

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_1 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRTAAQAKAAAAAJIAABdQAAAKgKAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_4 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_8 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_12 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_13 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_14 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_15 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_16 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_17 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_27 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRTAAQAKAAAAAJIAABdQAAAKgKAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRTAAQAKAAAAAJIAABdQAAAKgKAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_53 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_62 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_63 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_64 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_65 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_66 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_67 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_68 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_69 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_70 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_71 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_72 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_73 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_74 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_75 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_76 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_77 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_78 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");
	var mask_graphics_79 = new cjs.Graphics().p("AopBAQgKAAAAgKIAAhdQAAgJAKAAIRUAAQAJAAAAAJIAABdQAAAKgJAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_1,x:48.5,y:6.5}).wait(1).to({graphics:mask_graphics_2,x:27.8,y:6.5}).wait(1).to({graphics:mask_graphics_3,x:-6.7,y:6.5}).wait(1).to({graphics:mask_graphics_4,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_5,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_6,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_7,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_8,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_9,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_10,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_11,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_12,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_13,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_14,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_15,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_16,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_17,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_18,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_19,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_20,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_21,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_22,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_23,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_24,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_25,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_26,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_27,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_28,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_29,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_30,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_31,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_32,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_33,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_34,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_35,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_36,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_37,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_38,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_39,x:-55,y:6.5}).wait(1).to({graphics:mask_graphics_40,x:-50.6,y:6.5}).wait(1).to({graphics:mask_graphics_41,x:-37.3,y:6.5}).wait(1).to({graphics:mask_graphics_42,x:-15.2,y:6.5}).wait(1).to({graphics:mask_graphics_43,x:15.7,y:6.5}).wait(1).to({graphics:mask_graphics_44,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_45,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_46,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_47,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_48,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_49,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_50,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_51,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_52,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_53,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_54,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_55,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_56,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_57,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_58,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_59,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_60,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_61,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_62,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_63,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_64,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_65,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_66,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_67,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_68,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_69,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_70,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_71,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_72,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_73,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_74,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_75,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_76,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_77,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_78,x:55.5,y:6.5}).wait(1).to({graphics:mask_graphics_79,x:55.5,y:6.5}).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHAqIAAgUIAAgHIACgJIABgHIABgHIgQAyIgUAAIAAhTIAUAAIAAAUIgBAJIgBAIIgBAHIgBAIIAAAAIAQg0IAUAAIAABTg");
	this.shape.setTransform(86,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAqIgIgeIgFAKIAAAUIgUAAIAAhTIAUAAIAAAiIAMgiIAXAAIgTAlIATAug");
	this.shape_1.setTransform(79.7,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAqIAAhTIAfAAIAIABIAGADQAEADACAEQABAEAAAGQABAFgCADQgBADgCACIgEADIgDACQAFACAEADQADAFAAAJQAAAGgCAFQgBAFgEADQgGAHgNgBgAgGAbIAFAAQAEAAACgDQACgCAAgGQAAgFgCgDQgCgDgEAAIgFAAgAgGgJIAGAAQADAAACgCQACgCAAgFQAAgEgCgCQgCgCgDAAIgGAAg");
	this.shape_2.setTransform(73,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAqIgEgRIgNAAIgDARIgVAAIAThTIAXAAIATBTgAAFAKIgFgkIgEAkIAJAAg");
	this.shape_3.setTransform(66.5,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAqIAAhDIgQAAIAAgQIAxAAIAAAQIgPAAIAABDg");
	this.shape_4.setTransform(60.6,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAmQgEgDgCgGQgBgFAAgIIAAgjQAAgFABgFIAFgIQADgDAGgBQAFgCAGAAQAHAAAFACQAFABAEADQADAEACAEQACAFgBAFIAAAGIgUAAIAAgIIgBgDIgBgCIgDgCIgCAAQgBAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQgBABAAAAIAAAqQAAAEACADQACACACAAQACAAADgCQACgDAAgEIAAgLIAUAAIAAAHQABAIgCAFQgCAGgDADQgHAHgOAAQgNAAgGgHg");
	this.shape_5.setTransform(54.6,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_6.setTransform(46.3,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAqIAAhTIAvAAIAAAQIgaAAIAAAQIAXAAIAAAPIgXAAIAAAUIAaAAIAAAQg");
	this.shape_7.setTransform(41.7,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAqIgThTIAVAAIAIArIAAAEIABAGIAAAHIAAAGIAAgGIAAgHIABgHIABgDIAIgrIAVAAIgTBTg");
	this.shape_8.setTransform(35.4,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJAqIAAhTIATAAIAABTg");
	this.shape_9.setTransform(30.6,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAqIAAhTIAVAAIAABCIAWAAIAAARg");
	this.shape_10.setTransform(26.4,6.8);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},35).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},35).wait(1));

	// Слой 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AgbA/QgKABAAgLIAAhcQAAgKAKABIRTAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AiDA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AkvA/QgKABAAgLIAAhcQAAgKAKABIRTAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AohA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AoLA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AnIA/QgKABAAgLIAAhcQAAgKAKABIRTAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AlaA/QgKABAAgLIAAhcQAAgKAKABIRUAAQAJgBAAAKIAABcQAAALgJgBg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Ai/A/QgKABAAgLIAAhcQAAgKAKABIRTAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AAGA/QgIABAAgLIAAhcQAAgKAIABIRVAAQAKgBAAAKIAABcQAAALgKgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_1,x:109,y:6.4}).wait(1).to({graphics:mask_1_graphics_2,x:98.7,y:6.4}).wait(1).to({graphics:mask_1_graphics_3,x:81.4,y:6.4}).wait(1).to({graphics:mask_1_graphics_4,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_5,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_6,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_7,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_8,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_9,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_10,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_11,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_12,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_13,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_14,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_15,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_16,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_17,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_18,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_19,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_20,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_21,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_22,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_23,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_24,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_25,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_26,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_27,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_28,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_29,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_30,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_31,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_32,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_33,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_34,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_35,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_36,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_37,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_38,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_39,x:57.3,y:6.4}).wait(1).to({graphics:mask_1_graphics_40,x:59.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_41,x:66.1,y:6.4}).wait(1).to({graphics:mask_1_graphics_42,x:77.2,y:6.4}).wait(1).to({graphics:mask_1_graphics_43,x:92.6,y:6.4}).wait(1).to({graphics:mask_1_graphics_44,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_45,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_46,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_47,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_48,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_49,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_50,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_51,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_52,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_53,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_54,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_55,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_56,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_57,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_58,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_59,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_60,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_61,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_62,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_63,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_64,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_65,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_66,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_67,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_68,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_69,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_70,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_71,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_72,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_73,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_74,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_75,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_76,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_77,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_78,x:112.5,y:6.4}).wait(1).to({graphics:mask_1_graphics_79,x:112.5,y:6.4}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(57.1,7.5,1,1,0,0,0,57.1,7.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.6,-1,99.8,16.6);


(lib.Символ10 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ11();
	this.instance.setTransform(218.4,104.4,1.684,1.684,0,0,0,57.1,7.5);

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(247.6,117.2,1.615,1.615,0,0,0,36.3,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.5,90,380.8,28);


(lib.Символ8копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQArQgBgBAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIAAgOIACABIADAAIADgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgShCIAVAAIAIAlIAAAFIAAALIAAgLIABgFIAIglIAWAAIgTBAIgEAKIgEAHIgFADIgJABg");
	this.shape.setTransform(108.9,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGArIgHgeIgGAKIAAAUIgUAAIAAhVIAUAAIAAAiIANgiIAWAAIgTAnIATAug");
	this.shape_1.setTransform(102.6,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAfAAIAHACIAIADQACADACAEQACAEABAGQAAAEgCAEQgBADgCACIgDAEIgFABQAHACADAEQADAEAAAJQAAAGgCAFQgBAFgDADQgHAGgNABgAgGAbIAEAAQAFAAABgDQADgCAAgGQAAgFgCgDQgDgDgDAAIgFAAgAgGgJIAGAAQACAAACgBQACgDAAgFQAAgEgCgCQgCgCgCAAIgGAAg");
	this.shape_2.setTransform(95.9,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALArIgEgSIgNAAIgDASIgVAAIAThVIAXAAIATBVgAAFAJIgFgjIgEAjIAJAAg");
	this.shape_3.setTransform(89.4,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIArIAAhFIgQAAIAAgQIAxAAIAAAQIgPAAIAABFg");
	this.shape_4.setTransform(83.5,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmQgDgEgCgFQgCgFAAgIIAAgjQAAgFACgEIAFgJQADgDAGgCQAFgCAGAAQAHAAAFACQAGACADADQAEAEABAFQACAEAAAFIAAAGIgVAAIAAgIIgBgDIgCgCIgCgBIgCAAQgCAAgCABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABIAAAoQgBAGACABQACACACAAQACAAADgCQACgCAAgEIAAgMIAVAAIAAAIQAAAIgCAFQgBAFgEAEQgHAGgOAAQgMAAgIgGg");
	this.shape_5.setTransform(77.5,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAVAAIAAAhIAHAAIAJACQAEABAEADQAEADACADQACAGAAAHIAAAIIgCAGQgCAEgEADQgEAEgEABIgJABgAgFAbIADAAIACgBIADgBIADgDIAAgGIgBgFIgCgEIgDgBIgCgBIgDAAg");
	this.shape_6.setTransform(67.8,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIArIAAhFIgQAAIAAgQIAxAAIAAAQIgPAAIAABFg");
	this.shape_7.setTransform(61.7,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALArIgEgSIgNAAIgDASIgVAAIAThVIAXAAIATBVgAAFAJIgFgjIgEAjIAJAAg");
	this.shape_8.setTransform(55.8,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaArIgFgDIAAgOIACABIACAAIAEgBQAAgBABAAQAAAAAAgBQAAgBABAAQAAgBAAgBIABgJIAAgOIAAgoIA1AAIAABUIgVAAIAAhEIgMAAIAAAcQAAAMgBAIQgCAIgCAFQgCAEgEACQgEACgFAAIgGAAg");
	this.shape_9.setTransform(48.8,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXArIAAhVIAvAAIAAAQIgaAAIAAARIAXAAIAAAPIgXAAIAAAUIAaAAIAAARg");
	this.shape_10.setTransform(42.6,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAzIAAgRIgbAAIAAARIgVAAIAAgiIAEAAIADgHIACgJIACgKIABgRIAAgYIA0AAIAABDIAEAAIAAAigAgCgSIAAAMIgCAHIgCAJIgDAHIASAAIAAgzIgLAAg");
	this.shape_11.setTransform(35.9,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAmQgEgEgCgFQgCgFABgIIAAgjQgBgFACgEIAFgJQADgDAGgCQAFgCAGAAQAHAAAFACQAFACAEADQADAEACAFQACAEgBAFIAAAGIgUAAIAAgIIgBgDIgBgCIgDgBIgCAAQgBAAgDABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAABIAAAoQABAGABABQACACACAAQACAAADgCQACgCAAgEIAAgMIAUAAIAAAIQABAIgCAFQgCAFgDAEQgHAGgOAAQgNAAgGgGg");
	this.shape_12.setTransform(28.8,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("AqbCOQgQAAAAgOIAAj/QAAgOAQAAIU3AAQAQAAAAAOIAAD/QAAAOgQAAg");
	this.shape_13.setTransform(68.4,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(68.5,14,1,1,0,0,0,68.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.3,137.1,28.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQArQgBgBAAAAQgBAAgBAAQAAgBgBAAQAAAAAAgBIAAgOIACABIADAAIADgBQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgShCIAVAAIAIAlIAAAFIAAALIAAgLIABgFIAIglIAWAAIgTBAIgEAKIgEAHIgFADIgJABg");
	this.shape.setTransform(108.9,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGArIgHgeIgGAKIAAAUIgUAAIAAhVIAUAAIAAAiIANgiIAWAAIgTAnIATAug");
	this.shape_1.setTransform(102.6,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAfAAIAHACIAIADQACADACAEQACAEABAGQAAAEgCAEQgBADgCACIgDAEIgFABQAHACADAEQADAEAAAJQAAAGgCAFQgBAFgDADQgHAGgNABgAgGAbIAEAAQAFAAABgDQADgCAAgGQAAgFgCgDQgDgDgDAAIgFAAgAgGgJIAGAAQACAAACgBQACgDAAgFQAAgEgCgCQgCgCgCAAIgGAAg");
	this.shape_2.setTransform(95.9,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALArIgEgSIgNAAIgDASIgVAAIAThVIAXAAIATBVgAAFAJIgFgjIgEAjIAJAAg");
	this.shape_3.setTransform(89.4,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIArIAAhFIgQAAIAAgQIAxAAIAAAQIgPAAIAABFg");
	this.shape_4.setTransform(83.5,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAmQgDgEgCgFQgCgFAAgIIAAgjQAAgFACgEIAFgJQADgDAGgCQAFgCAGAAQAHAAAFACQAGACADADQAEAEABAFQACAEAAAFIAAAGIgVAAIAAgIIgBgDIgCgCIgCgBIgCAAQgCAAgCABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAABIAAAoQgBAGACABQACACACAAQACAAADgCQACgCAAgEIAAgMIAVAAIAAAIQAAAIgCAFQgBAFgEAEQgHAGgOAAQgMAAgIgGg");
	this.shape_5.setTransform(77.5,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaArIAAhVIAVAAIAAAhIAHAAIAJACQAEABAEADQAEADACADQACAGAAAHIAAAIIgCAGQgCAEgEADQgEAEgEABIgJABgAgFAbIADAAIACgBIADgBIADgDIAAgGIgBgFIgCgEIgDgBIgCgBIgDAAg");
	this.shape_6.setTransform(67.8,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIArIAAhFIgQAAIAAgQIAxAAIAAAQIgPAAIAABFg");
	this.shape_7.setTransform(61.7,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALArIgEgSIgNAAIgDASIgVAAIAThVIAXAAIATBVgAAFAJIgFgjIgEAjIAJAAg");
	this.shape_8.setTransform(55.8,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaArIgFgDIAAgOIACABIACAAIAEgBQAAgBABAAQAAAAAAgBQAAgBABAAQAAgBAAgBIABgJIAAgOIAAgoIA1AAIAABUIgVAAIAAhEIgMAAIAAAcQAAAMgBAIQgCAIgCAFQgCAEgEACQgEACgFAAIgGAAg");
	this.shape_9.setTransform(48.8,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXArIAAhVIAvAAIAAAQIgaAAIAAARIAXAAIAAAPIgXAAIAAAUIAaAAIAAARg");
	this.shape_10.setTransform(42.6,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAzIAAgRIgbAAIAAARIgVAAIAAgiIAEAAIADgHIACgJIACgKIABgRIAAgYIA0AAIAABDIAEAAIAAAigAgCgSIAAAMIgCAHIgCAJIgDAHIASAAIAAgzIgLAAg");
	this.shape_11.setTransform(35.9,14.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTAmQgEgEgCgFQgCgFABgIIAAgjQgBgFACgEIAFgJQADgDAGgCQAFgCAGAAQAHAAAFACQAFACAEADQADAEACAFQACAEgBAFIAAAGIgUAAIAAgIIgBgDIgBgCIgDgBIgCAAQgBAAgDABQAAAAAAABQgBAAAAABQAAAAAAABQgBABAAABIAAAoQABAGABABQACACACAAQACAAADgCQACgCAAgEIAAgMIAUAAIAAAIQABAIgCAFQgCAFgDAEQgHAGgOAAQgNAAgGgGg");
	this.shape_12.setTransform(28.8,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(68.5,14,1,1,0,0,0,68.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,28);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(68.5,14,1,1,0,0,0,68.5,14);

	this.instance_1 = new lib.Символ8копия();
	this.instance_1.setTransform(68.5,14,1,1,0,0,0,68.5,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,28);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_89 = function() {
		this.gotoAndPlay(81);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(10).call(this.frame_89).wait(1));

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(44.7,26.3,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[44.8,26.3,46.3,26.5,48.1,26.4,58.9,25.8,69.8,28.6,80.6,31.4,90,37.2,98.8,42.7,99,42.8,103.4,45.2,107.3,45.6]}},9,cjs.Ease.get(-1)).to({guide:{path:[107.6,45.6,108.3,45.7,109,45.7,113,45.7,117.8,43.5,119.4,42.8,125.8,39,150.2,25.1,179.5,25.5,208.8,25.9,232.8,40.3,235.6,42,236.7,42.6,239,43.6,240.9,43.7,242,43.8,243,43.6]}},19).to({guide:{path:[243,43.6,245.2,43.3,247.6,41.9,248.9,41.1,253.5,37.6,266,28.2,286.8,24.4,298.5,22.2,322.1,20.1]}},11,cjs.Ease.get(1)).wait(1).to({guide:{path:[322.1,20.1,298.5,22.2,286.8,24.4,266,28.2,253.5,37.6,248.9,41.1,247.6,41.9,245.2,43.3,243,43.6]}},11,cjs.Ease.get(-1)).to({guide:{path:[243,43.6,242,43.8,240.9,43.7,239,43.6,236.7,42.6,235.6,42,232.8,40.3,208.8,25.9,179.5,25.5,150.2,25.1,125.8,39,119.4,42.8,117.8,43.5,113,45.7,109,45.7,108.3,45.7,107.6,45.6]}},19).to({guide:{path:[107.3,45.6,103.4,45.2,99,42.8,98.8,42.7,90,37.2,80.6,31.4,69.8,28.6,58.9,25.8,48.1,26.4,46.3,26.5,44.8,26.3]}},9,cjs.Ease.get(1)).wait(1).to({x:90.2,y:6.8},0).to({y:40.6},4,cjs.Ease.get(-1)).to({y:6.8},5,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(349,23,1.042,1,0,0,180,24,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({x:334,y:20},3,cjs.Ease.get(-1)).to({x:331},2).to({x:349,y:23},7).to({x:348.7},1).wait(32).to({x:346.1,y:26.2},4).to({x:348.7,y:23},5).wait(1));

	// for_05.png
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(34,25.5,1,1,0,0,0,24,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:36,y:24.5},2).to({x:14,y:25.5},7).wait(65).to({x:34},5,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,5.5,364,37.6);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.ten.gotoAndPlay(81);
			    _this.txt.gotoAndPlay(2);
				_this.kur.gotoAndPlay(2);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.ten.gotoAndPlay(1);
			    _this.txt.gotoAndPlay(1);
				_this.kur.gotoAndPlay(1);
		    }
		
			
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.kur = new lib.Символ18();
	this.kur.setTransform(36.5,149.9,1,1,0,0,0,24,17.5);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Слой 6
	this.txt = new lib.Символ10();
	this.txt.setTransform(266.2,-79.5,1,1,0,0,0,57.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 5
	this.instance = new lib.Символ7();
	this.instance.setTransform(459.5,73,1,1.215,0,0,0,68.5,14);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.ten = new lib.Символ1();
	this.ten.setTransform(37.7,42.1,1,1,0,0,0,40.2,17.5);

	this.timeline.addTween(cjs.Tween.get(this.ten).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(187.5,100.2,1,1,0,0,0,144,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(231.5,50.5,1,1,0,0,0,293.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(208,30,1074,414.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
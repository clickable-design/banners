(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/basa.png?1461658362434", id:"basa"},
		{src:"images/bg.jpg?1461658362434", id:"bg"},
		{src:"images/btn.png?1461658362434", id:"btn"},
		{src:"images/car.png?1461658362434", id:"car"},
		{src:"images/ddjdjdjdjdj.png?1461658362434", id:"ddjdjdjdjdj"},
		{src:"images/gggsgsg.png?1461658362434", id:"gggsgsg"},
		{src:"images/gun1.png?1461658362434", id:"gun1"},
		{src:"images/gun2.png?1461658362434", id:"gun2"},
		{src:"images/kkdjdjd.png?1461658362434", id:"kkdjdjd"},
		{src:"images/qqtqtqt.png?1461658362434", id:"qqtqtqt"},
		{src:"images/vccvcvcv.png?1461658362434", id:"vccvcvcv"}
	]
};



// symbols:



(lib.basa = function() {
	this.initialize(img.basa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,177);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,300);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.ddjdjdjdjdj = function() {
	this.initialize(img.ddjdjdjdjdj);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,858,212);


(lib.gggsgsg = function() {
	this.initialize(img.gggsgsg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,122);


(lib.gun1 = function() {
	this.initialize(img.gun1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,59);


(lib.gun2 = function() {
	this.initialize(img.gun2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.kkdjdjd = function() {
	this.initialize(img.kkdjdjd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,122);


(lib.qqtqtqt = function() {
	this.initialize(img.qqtqtqt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,122);


(lib.vccvcvcv = function() {
	this.initialize(img.vccvcvcv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,29);


(lib.Символ133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3.5,1,1).p("AEXAAIjXAAAg/AAIjXAAAgDg/IAAjXAgDEXIAAjX");
	this.shape.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-30.1,59.4,59.4);


(lib.Символ131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3.5,1,1).p("Ajyk0QBohUCKAAQB1AABdA8AFQjLQA5BaAABxQAACjhzBzQgsAsgzAbAAYGIQgMABgMAAQhWAAhJghAjwE3QgTgQgSgRQhzhzAAijQAAh6BDhg");
	this.shape.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41.2,82.1,82.1);


(lib.Символ130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0BEQgJgEgHgFQgFgGgEgIQgEgKAAgKIAfAAQgBAHAEADQAFAEAHAAQAIAAADgEQAFgEAAgJQAAgGgEgEQgCgEgHgBIgLgCIgkABIAAhMIBXAAIAAAeIg6AAIAAASQAOgBALABQAMACAIAEIAIAHQAEADADAFIADAJQACAGAAAIQAAAJgDAJQgEAJgFAGQgHAIgJADQgNAFgIAAQgKAAgIgDgAgaBEIgbgsIgBAAIgaAsIgmAAIAAgGIAthCIgpg8IAAgGIAlAAIAXAkIABAAIAYgkIAiAAIAAAGIgnA8IArBCIAAAGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAzBDQgIgCgGgHQgHgGgDgHQgEgJgBgLIAgAAQAAAHADAEQAFADAHAAQAHAAAFgEQAEgFAAgIQAAgGgDgEQgDgEgGgBIgNgCIgjABIAAhMIBXAAIAAAeIg5AAIAAASQANgBAKABQANACAIAFIAIAFQAEAEACAFIAFAJQABAHAAAHQAAAJgDAJQgDAIgGAIQgHAGgJAEQgNAFgIAAQgKAAgJgEgAgaBEIgagsIgCAAIgaAsIgmAAIAAgFIAthDIgog9IAAgFIAkAAIAXAlIABAAIAXglIAiAAIAAAFIgmA9IAsBDIAAAFg");
	this.shape_1.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-7.1,25.4,15.8);


(lib.Символ129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vccvcvcv();
	this.instance.setTransform(-50.9,30.4,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-50.9,101.8,101.8);


(lib.Символ127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ddjdjdjdjdj();
	this.instance.setTransform(428.8,-106);

	this.instance_1 = new lib.ddjdjdjdjdj();
	this.instance_1.setTransform(-429,-106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429,-106,1715.8,212);


(lib.Символ125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-394,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394,-150,788,300);


(lib.Символ115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.qqtqtqt();
	this.instance.setTransform(-53.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-61,107,122);


(lib.Символ114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gggsgsg();
	this.instance.setTransform(-70.7,-80.6,1.322,1.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-80.6,141.4,161.2);


(lib.Символ110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ADOBNIgSgDIgCgCIgBgCIAAgQIABgCIACgBIAaABQAFAAADgCQADgCACgGIACgHIgEAAIgEAAIgGgCIgEgGIgfhdIAAgCQAAgDAFAAIAaAAIADABIABACIASBFIABADIACABIABAAIAThJIABgCIADgBIAaAAIADABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAAABIghBuIgGAPQgDAGgFAEQgEAEgIACQgHACgLAAgAE2BMIgDgCIgCgDIAAgZQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIADAAIAXAAQAEAAAAADIAAAZIgBADIgDACgACGBMIgCgCIgCgCIgphBIAABAIgBADIgDACIgaAAIgDgCIgBgDIAAiLIABgCIADgBIAaAAIADABIABACIAABBIAshCQACgCACAAIAfAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgBADIgvBCIAvBHIABACQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAgAAGBMIgCgCIgCgCIgFghIgpAAIgIAhIgBACIgCACIgcAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAgBIAfh6QABgHADgEQAEgEAEgDQAFgDAFAAIAKgBIALABQAFAAAFADQADADACAEQAEAEABAHIAeB6IAAABQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAgAgJALIgMg3IgDgBQAAAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAIgLA1IAdAAgAiiBMIgCgCIgCgDIAAhyIggAAIgDgBIgCgCIAAgWIACgCIADgBIBjAAIACABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAWQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgCABIghAAIAAByIgBADIgCACgAjzBMIgCgCIgBgCIgHghIgqAAIgHAhIgBACIgDACIgcAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgBIAeh6QABgHAEgEQADgEAFgDQAEgDAFAAIALgBIALABQAFAAAEADQAFADADAEQADAEACAHIAeB6IAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBABgBAAgAkDALIgNg3IgCgBQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgMA1IAeAAgAE5AeIgDgBIgCgDIgEhiIACgDIADgBIAZAAIADABIABADIgEBiIgBADIgDABg");
	this.shape.setTransform(33.9,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,15.5);


(lib.Символ109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+BsQgKgCgIgFQgIgFgEgKQgFgKAAgQIAAhKQAAgQAFgJQAEgKAIgFQAIgFAKgCQALgCALAAIAlACIAHABQAEABAAADIAAAWIgBADIgDABIgvAAQgIAAgDAEQgEADAAAJIAAATIA8AAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAVQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABIg8AAIAAAYQAAAJAEAEQADADAIAAIAvAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAEIAAAVQAAAEgEABIgtADQgLAAgKgCgAgvBrQgHgBgDgDQgDgDAAgIIAAiVIACgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIBeAAIAEABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIAAAYQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABIg7AAIAAAgIAPgBQANAAANADQAOACAJAGIAJAHIAHAJQAGAKAAAQIAAABQAAAIgCAHQgBAHgDAFIgHAJQgEAEgFADQgKAGgNADQgNACgNAAgAgUBNIACAAIACABIAJAAQAJAAAHgCQAHgBAEgCQAEgDACgEQABgEAAgGIAAgBQAAgGgBgEQgCgEgEgCQgEgCgHgBIgdgBgAk+BqQgMgEgJgJIgJgKQgDgGgDgHIgEgPQgBgJAAgKIAAgbQAAgJABgIIAEgPIAGgNIAJgKQAJgJAMgEQANgEAOAAQAOAAANAEQAMAEAJAJIAIAKIAHANQAFAOAAASIAAAbIgBATIgEAPIgHANIgIAKQgJAJgMAEQgNAEgOAAQgOAAgNgEgAk4gUQgHAKAAATIAAAbQAAALABAHQACAIAEAEQAHAKAOAAQAHAAAGgDQAFgCADgFQAEgEACgIQACgHAAgLIAAgbQAAgTgIgKQgDgEgFgDQgGgCgHAAQgOAAgHAJgAFJBsQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgDIAAhdQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCACIg1BbQgCAEgDACIgHABIgWAAQgEAAgCgDQgDgCAAgEIAAicQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIADgBIAcAAIADABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIAABgQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIACgCIA3hdIAEgFQACgCADAAIAYAAQADAAADACQACADAAAEIAACbIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAieBsQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgDIAAiEIglAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgYQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIByAAIADABQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIAAAYQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgDABIgmAAIAACEIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAEThMQgHgCgGgFQgFgEgDgGQgEgGgBgHIAAgCIADgBIAUAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQABAHAFADQAFADAGAAQAGAAAFgDQAFgDABgHQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAIACABIAAACQgCAHgDAGQgDAGgFAEQgGAFgHACQgIADgJAAQgJAAgIgDg");
	this.shape.setTransform(36.1,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.2,22.1);


(lib.Символ106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.Символ105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,59);


(lib.Символ101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ap4J1Ij1i3QgBgBAch8QgBgBAWiAQgXgRgTgPQgogfAMACQASAECHARQA4gFAAAAIAqAgQAQBCAAgBQApgOAAAAQgBAAAFhJQgBAAArhaQgBAAADhGIgghiQDRgZAAgBQgBgBAkggIgeghQAagoAAAAQEsizAAAAQBhhRAAAAQgBgBAWlWQAIFJAAAAQAjAAAAAAQgBgBAIg2IBGAhQAFBAAAAAIBiBmQBZgUAAAAICpB8QgBA1AAAAICtBdQgBgBg+AlQABDnAAgBICnBaQABBbAAgBQA9AbAAAAQgKA+AAgBQgBgBpNFVQgBAAlsBMIk8hsg");
	this.shape.setTransform(90.3,83.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Al6LZIj+hkIj1i3IAbh9IAViBIgqggQgogfAMACQASAECHARIA4gFIAqAgIAQBBIAAAAIAAAAIApgOIAEhJIAqhaIAChGIgghiIDRgaIAjghIgeghIAagoIEsizIBhhRIAVlXIAIFJIAAAAIAAAAIAjAAIAHg3IBGAhIAFBAIBiBmIBZgUICpB8IgBA1IAAAAIAAAAICtBdIg/AkIABDmICnBaIABBaIAAAAIAAAAIA9AbIgKA9IpOFUIltBMgAOHFoIAAAAIAAAAg");
	this.shape_1.setTransform(90.3,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,182.7,169.5);


(lib.Символ99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.basa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,177);


(lib.Символ98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmwhFIFQiUIIQD0IktC/g");
	this.shape.setTransform(43.3,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.6,43.7);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAFAaIhgAgIA5gtIAFgFIgSgqIAxAVIBYgrIACgBIgGAJIgiAwIATAaIAVAgg");
	this.shape.setTransform(12,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABRBKIgTgcIAhguIBIBqgAg4AQIgehNIBZAkICkhQIhDBhIhYApIgxgVIARAsIgEAFIiOAtg");
	this.shape_1.setTransform(11,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3.6,33.5,21.3);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3.7,1,1).p("AhGhFICMAAIAACL");
	this.shape.setTransform(7.1,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.8,17.9,17.7);


(lib.Символ83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjQAQQgHAAgFgFQgEgEgBgHQABgGAEgFQAFgEAHAAIGhAAQAHAAAFAEQAEAFAAAGQAAAHgEAEQgFAFgHAAg");
	this.shape.setTransform(22.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,3.3);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_54 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS6AAQAUAAAOAPQAQAPgBAVIAAACQABAUgQAPQgOAPgUAAg");
	var mask_graphics_99 = new cjs.Graphics().p("ApdA0QgUAAgPgPQgOgPAAgUIAAgCQAAgVAOgPQAPgPAUAAIS6AAQAVAAAPAPQAPAPAAAVIAAACQAAAUgPAPQgPAPgVAAg");
	var mask_graphics_134 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_169 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPAAAVIAAACQAAAUgPAPQgOAPgVAAg");
	var mask_graphics_196 = new cjs.Graphics().p("ApdA0QgUAAgPgPQgOgPAAgUIAAgCQAAgVAOgPQAPgPAUAAIS7AAQAUAAAPAPQAOAPAAAVIAAACQAAAUgOAPQgPAPgUAAg");
	var mask_graphics_254 = new cjs.Graphics().p("ApdA0QgUAAgPgPQgOgPAAgUIAAgCQAAgVAOgPQAPgPAUAAIS7AAQAUAAAPAPQAOAPAAAVIAAACQAAAUgOAPQgPAPgUAAg");
	var mask_graphics_350 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_394 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_395 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_396 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_397 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_398 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	var mask_graphics_399 = new cjs.Graphics().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:65.6,y:5.2}).wait(54).to({graphics:mask_graphics_54,x:59.6,y:5.2}).wait(45).to({graphics:mask_graphics_99,x:45.6,y:5.2}).wait(35).to({graphics:mask_graphics_134,x:29.6,y:5.2}).wait(35).to({graphics:mask_graphics_169,x:13.6,y:5.2}).wait(27).to({graphics:mask_graphics_196,x:-0.4,y:5.2}).wait(58).to({graphics:mask_graphics_254,x:-18.4,y:5.2}).wait(96).to({graphics:mask_graphics_350,x:-42.4,y:5.2}).wait(44).to({graphics:mask_graphics_394,x:-42.4,y:5.2}).wait(1).to({graphics:mask_graphics_395,x:-3.5,y:5.2}).wait(1).to({graphics:mask_graphics_396,x:26.7,y:5.2}).wait(1).to({graphics:mask_graphics_397,x:48.3,y:5.2}).wait(1).to({graphics:mask_graphics_398,x:61.3,y:5.2}).wait(1).to({graphics:mask_graphics_399,x:65.6,y:5.2}).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	this.shape.setTransform(65.6,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ApcA0QgVAAgPgPQgPgPAAgUIAAgCQAAgVAPgPQAPgPAVAAIS5AAQAVAAAOAPQAPAPABAVIAAACQgBAUgPAPQgOAPgVAAg");
	this.shape_1.setTransform(65.6,5.2);
	this.shape_1._off = true;

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},196).to({state:[{t:this.shape_1}]},58).to({state:[{t:this.shape_1}]},96).to({state:[{t:this.shape_1}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(196).to({_off:false},0).wait(204));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.2,10.4);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAVACQAJgBAFgEIAEgEIABgIIAAgDIgBgEIgDgFQgBgCgDgCQgCgBgFAAIgVAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAVAAQAFgBADgBIADgEIADgEIABgFIAAgCIgBgGIgEgEQgEgDgKAAIgVABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIALgBIAMABQAGABADADQAEADADAFQACAEgBAGIAAACQAAAGgCAFQgDAFgGADIAFACIAEAEIACAGIAAAEIAAADQABAHgCAFQgDAFgEADQgEADgFABQgFACgHAAIgLgBgAhWAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAgAAKAsIgBgBIgBgCIAAgVIghAAIgEgBIgBgEIAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBIAhgvIACgBIACgBIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAAAzIAKAAIACABIABABIAAAFQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgKAAIAAAVIgBACIgBABgAAHgcIgaAmIAAABIAAAAIAbAAIAAgnIAAgBg");
	this.shape.setTransform(9.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAWACIAIgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgLAAIgOAAIgCAAIAAgBIADgoIABgBIABgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAGAAIAPABQAHABAEADQAFADADADQACAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgHAAgAAwAsIgCgBIgBgCIAAgJQAAgKAFgHQAEgIAKgGIASgLIAEgEIACgEIAAgEQAAgHgEgDQgEgCgKAAIgWABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAgBIACAAIAKgCIALgBQAIAAAFACQAFAAAEADQADADACAEQACAEAAAGIgBAGIgDAGIgFAFIgSALIgJAGIgFAHQgCADAAADIgBAHIAAACIAoAAIACABIABACIAAAFIgBABIgCABgAAKAsIgCgBIAAgCIAAgVIghAAIgEgBIgBgEIAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBIAigvIABgBIACgBIAIAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAABIAAAzIAKAAIACABIAAABIAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgKAAIAAAVIgBACIgBABgAAGgcIgaAmIAAABIABAAIAbAAIAAgnIgBgBg");
	this.shape.setTransform(9.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,9.1);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAsIgKgCIgBAAIgBgDIAAgEQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAWABIAJgBIAFgEQAGgEAAgJIAAgCQAAgKgHgDIgIgCIgLAAIgOAAIgCAAIAAgBIAEgpIAAgBIACgBIApAAIACABIABABIAAAGIgBABIgCAAIgiAAIgDAbIAGAAIAQAAQAGACAFADQAEADADACQACAGABAHIAAACQgBAGgBAFQgDAFgEAEQgDAEgGACQgGACgHAAgAAvAsIgCgBIgBgBIAAgGIABgBIACgBIATAAIAAhDIgTAIIgCABQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAgGIAAgBIABAAIAWgKIADgBIAEAAIACABIABABIAABMIATAAIACABIAAABIAAAGIAAABIgCABgAAKAsIgBgBIgBgCIAAgWIghAAIgEgBIgBgDIAAgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAIAhgwIACgBIACgBIAHAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAAzIAKAAIACABIABABIAAAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgKAAIAAAWIgBACIgBABgAAHgcIgaAlIAAABIAAAAIAbAAIAAgmIAAgBg");
	this.shape.setTransform(9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AqQgFgCgEgEIgDgFIgCgHQgCgEgBgNIAAgNQAAgHADgKQACgIADgFQAEgEAFgCQAGgCAHAAQAHAAAFACQAGACAEAEQADAFACAIQACAGAAALIAAANQAAALgCAGIgDAHIgCAFQgEAEgGACQgFADgHAAQgHAAgGgDgABAghQgEABgDADQgCAEgBAFQgBAGAAAIIAAANQAAAIABAGQABAFACADQADAEAEABQADACAEAAQAEAAADgCQAEgBACgEIAEgIQACgGAAgIIAAgNQAAgIgCgGIgEgJQgCgDgEgBQgDgBgEAAQgEAAgDABgAhXAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgNAAIgCAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAFAAIAQABQAHABAEADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAgAAJAsIgCgBIgBgCIAAgVIggAAIgFgBIgBgEIAAgEQABgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIAhgvIACgBIACgBIAHAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABIAAAzIAKAAIACABIAAABIAAAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgKAAIAAAVIgBACIgCABgAAFgcIgaAmIAAABIAAAAIAbAAIAAgnIAAgBg");
	this.shape.setTransform(10.1,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,9.1);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4AsIgJgBIgCgBIgBgCIAAgEIABgCIACgBIAAAAIAVADQAHgBAEgCQAEgCADgDQABgDABgFIAAgMIgIACIgJAAIgLgBQgGgBgEgDQgEgDgDgDIgBgFIgBgHIAAAAQAAgIACgGQACgFADgEQAEgEAGgCQAFgCAIAAQAGAAAFACQAGACADAEQAFAFABAGQACAJAAAGIAAATQAAAKgCAGQgBAHgFAFIgEADIgGADQgFACgIAAIgMgBgAA+giQgDABgCADQgCACgCAEIgBALIAAAAQAAAFABADIAFAFIAFABIAIABIAJgBIAIgBIAAgKIAAgMIgEgIIgGgEIgHgBIgJABgAgOAsIgJgCIgCgBIgBgBIAAgEQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAVACQAIgBAEgEIAEgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgEAAIgUAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQAEgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgEgEQgDgDgJAAIgVABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIABAAIACgBIAJgCIALgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgDAFgFADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgDAFgEADQgDADgGABQgFACgFAAIgLgBgAhXAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAg");
	this.shape.setTransform(10,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,9.1);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGAtQgGAAgFgCQgGgCgEgCQgDgEgDgEQgCgFAAgHIAAgCIABgFIACgGIADgFIAFgCIgFgDIgDgFQgDgEAAgHIAAgBQAAgFACgFQADgFADgDQAEgCAGgBQAFgCAGAAIABAAQAGAAAGACIAJADQAEADACAFQACAFAAAFIAAABIgBAHIgCAEIgDAFIgFADIAFACIADAFIADAGIAAAFIAAACQAAAHgCAFQgCAEgEAEQgEACgGACQgFACgGAAgAA8ADIgFADIgCAGIgBAFIAAACQAAAIAEAEQADACADABIAIACIABAAIAIgCQAEgBACgCQACgCABgDIABgHIAAgCIAAgFIgDgGIgFgDIgHgBIgHAAIgHABgAA4gfQgEAEAAAGIAAABIAAAGQABADACABIAFAEIAHABIAHAAIAHgBIAFgEIADgEIABgGIAAgBQAAgGgFgEQgFgEgJAAIgBAAQgJAAgFAEgAgOAsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAUACQAIgBAFgEIADgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgDAAIgVAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAVAAQADgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIAKgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgFACgFAAIgKgBgAhXAtIgKgDIgCAAIAAgCIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAWACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgOAAIgBAAIgBgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgCAaIAFAAIAQABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgGACQgGACgHAAg");
	this.shape.setTransform(10.1,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,9.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAUACQAIgBAFgEIADgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgEAAIgUAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAUAAQAEgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIAKgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgFACgFAAIgKgBgAhWAtIgKgDIgCAAIAAgCIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAWACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgOAAIgBAAIgBgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgCAaIAFAAIAQABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgGACQgGACgHAAgAA1AsIgBgBIgBgBIAlhKIAAgBIgBgBIgpAAIgBAAIgBgCIAAgFIABgBIABgBIAsAAQAFAAACACQACADAAACIgBAGIgjBIQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(10,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,9.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxAlQgDgFgCgGQgDgGAAgJIAAgUQAAgJADgGIACgHIADgFQAFgEAFgCQAHgCAHAAIAMABIAIABIACABIABABIAAAFIAAACIgCABIAAgBIgBAAIgJgBIgLAAQgHAAgEABQgEACgCADQgDAEAAAFIAAAMIAHgCIALgBIALABQAFACAEADQAEADADADIACAFIAAAGIAAABQAAAPgHAIQgEAEgGACQgFACgHAAQgNAAgJgIgAA4AAIgDAAIAAALIABAMQABAFACADQADACADABQADACAFAAIAHgBQAEgBACgDQADgCABgFIABgKIAAAAQAAgFgCgEIgEgEIgGgBIgGgBgAgOAsIgJgCIgCgBIgBgBIAAgEQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAUACQAJgBAEgEIADgEIABgIIAAgDIgBgEIgBgFQgCgCgDgCQgCgBgEAAIgVAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAVAAQADgBADgBIAFgEIABgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIABAAIACgBIAJgCIAKgBIALABQAFABAFADQADADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAGACIADAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgEACgGAAIgKgBgAhXAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgNAAIgCAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAFAAIAQABQAHABAEADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAg");
	this.shape.setTransform(10.1,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,9.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5AtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgLAAIgPAAIgBAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAGAAIAPABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAgAgNAsIgJgCIgCgBIgBgBIAAgEQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAUACQAJgBAEgEIADgEIABgIIAAgDIgBgEIgBgFQgCgCgDgCQgCgBgEAAIgVAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAVAAQADgBADgBIAFgEIABgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIABAAIACgBIAJgCIAKgBIALABQAFABAFADQADADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAGACIADAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgEACgGAAIgKgBgAhWAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgNAAIgCAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAFAAIAQABQAHABAEADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAg");
	this.shape.setTransform(10,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,9.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAUACQAIgBAFgEIADgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgCAAIgWAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAWAAQACgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIAKgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgFACgFAAIgKgBgAhYAtIgKgDIgCAAIAAgCIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAWACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgOAAIgBAAIgBgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgCAaIAFAAIAQABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgGACQgGACgHAAgABQAsIgCgBIAAgCIAAgVIgjAAIgEgBIgBgEIAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBIAkgvIABgBIACgBIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAAzIAKAAIACABIAAABIAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgKAAIAAAVIgBACIgBABgABMgcIgcAmIAAABIABAAIAdAAIAAgnIgBgBg");
	this.shape.setTransform(10.2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,9.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAVACQAJgBAFgEIAEgEIABgIIAAgDIgBgEIgDgFQgBgCgDgCQgCgBgFAAIgVAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAVAAQAFgBADgBIADgEIADgEIABgFIAAgCIgBgGIgEgEQgEgDgKAAIgVABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIALgBIAMABQAGABADADQAEADADAFQACAEgBAGIAAACQAAAGgCAFQgDAFgGADIAFACIAEAEIACAGIAAAEIAAADQABAHgCAFQgDAFgEADQgEADgFABQgFACgHAAIgLgBgAgNAsIgJgCIgCgBIgBgBIAAgEQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAVACQAIgBAEgEIAEgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgEAAIgUAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQAEgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgEgEQgDgDgJAAIgVABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIABAAIACgBIAJgCIALgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgDAFgFADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgDAFgEADQgDADgGABQgFACgFAAIgLgBgAhWAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAg");
	this.shape.setTransform(9.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9.1);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAWACIAIgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgLAAIgOAAIgCAAIAAgBIADgoIABgBIABgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAGAAIAPABQAHABAEADQAFADADADQACAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgHAAgAAwAsIgCgBIgBgCIAAgJQAAgKAFgHQAEgIAKgGIASgLIAEgEIACgEIAAgEQAAgHgEgDQgEgCgKAAIgWABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAgBIACAAIAKgCIALgBQAIAAAFACQAFAAAEADQADADACAEQACAEAAAGIgBAGIgDAGIgFAFIgSALIgJAGIgFAHQgCADAAADIgBAHIAAACIAoAAIACABIABACIAAAFIgBABIgCABgAgXAsIgBgBIgBgCIAAgJQAAgKAEgHQAEgIAKgGIAQgLIAEgEIACgEIABgEQAAgHgEgDQgFgCgHAAIgWABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIABgBIABAAIALgCIALgBQAFAAAFACQAGAAADADQAEADABAEQACAEAAAGIgBAGIgCAGIgFAFIgSALIgHAGIgFAHQgCADgBADIgBAHIAAACIAnAAIABABIABACIAAAFIgBABIgBABg");
	this.shape.setTransform(9.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,9.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAgAAvAsIgCgBIgBgBIAAgFIABgCIACgBIATAAIAAhCIgTAIIgCABQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgGIAAgBIABAAIAWgKIADgBIAEAAIACABIABABIAABLIATAAIACABIAAACIAAAFIAAABIgCABgAgXAsIgBgBIgBgCIAAgJQAAgKAFgHQADgIAKgGIAQgLIAFgEIACgEIAAgEQAAgHgEgDQgEgCgIAAIgWABQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIABgBIABAAIALgCIALgBQAGAAAEACQAGAAADADQAEADACAEQABAEAAAGIAAAGIgDAGIgFAFIgSALIgHAGIgFAHQgCADgBADIgBAHIAAACIAnAAIACABIABACIAAAFIgBABIgCABg");
	this.shape.setTransform(9.9,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9.1);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACVNuQgQgNgFgUQgHgYANgVQAMgWAYgGQEBhECjjUQCjjUAAkKQAAieg+iRQg8iNhshtQhthsiNg8QiRg+ieAAQjwAAjFCFQjGCFhbDeQgJAXgXAJQgXAKgXgKQgXgJgKgXQgJgXAJgXQBpkADkiZQDkiZEUAAQC2AACoBHQCiBFB9B+QB+B9BFCiQBHCoAAC2QAAEzi8D0Qi7D0kpBPQgHACgIAAQgUAAgRgMg");
	this.shape.setTransform(87.3,89);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.7,178.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACSJfQgQgLgGgSQgJgXAKgXQAKgWAXgJQCVg5BbiFQBbiFAAigQAAjTiYiXQiXiYjUAAQiVAAh/BRQh/BQhACHQgLAWgXAIQgXAJgXgLQgWgLgJgXQgIgXALgXQBPimCchjQCchjC4AAQEGAAC6C6QC7C8AAEEQAABjgdBcQgdBdg4BRQg4BPhKA6QhLA7hZAhQgKAFgLAAQgSAAgQgKg");
	this.shape.setTransform(60.9,61.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.8,123.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AqaKSQgSgRAAgZQAAgZASgSII8o8QADgBAEgDQAJgMANgHQAXgKAXAIQAWAIAKAVIDWG8IEyvLIu9E6ID5BxQAWAKAJAXQAJAXgLAXQgKAVgXAJQgXAIgXgKImFiuQgRgIgKgQQgJgQABgSQABgTALgOQALgPASgGIS/mOQAQgFAQADQAQAEAMAMQAMAMAEARQAEAQgFAQImCTKQgFASgPAMQgOALgTABIgEABQgRAAgPgKQgOgJgIgPIjxn5IoOINQgRASgZAAQgZAAgRgSg");
	this.shape.setTransform(68.5,67.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,135.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADqBXIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgUIhOAAIAAAUIgBADIgDABIgaAAIgDgBIgBgDIAAguIABgDIADgBIAMAAIAYhgQABgIAEgEQADgEAFgDQAEgCAFgBIALgBIAKABQAFABAFACQAEADAEAEQADAEACAIIAXBgIANAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAuQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABgADVAhIgUhZIgCgBQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAABIgTBXIAsAAgAApA/QgJgCgHgEQgHgFgEgIQgEgJAAgNIAAhBQAAgNAEgJQAEgIAHgFQAHgEAJgCQAJgCAJAAIAnADQAEABAAADIAAATIgBACIgDACIgpAAQgHAAgDACQgDADAAAIIAAASIA0AAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAATIgBACIgDAAIg0AAIAAAWQAAAHADADQADADAHAAIApAAIADABIABADIAAATQAAADgEABIgOACIgZABQgKAAgIgCgAhnA/IgHgBQgGgBgCgCQgDgDAAgHIAAh3QAAgHADgDQACgCAGgBIAHgBIAdgCQAOAAAMACQALADAJAEQAIAFAEAIQAFAIAAAMIAAAEQAAAKgEAHQgFAIgIAEQAIAEAFAHQAFAGAAALIAAADQAAAGgBAGQgBAFgDAFQgFAIgIAFQgJAGgMACQgLACgNAAgAhXAkIAQABQAIAAAFgCQAGgBADgCQADgCABgEQACgDAAgEIAAgCQAAgHgFgGQgCgCgEgCQgFAAgGAAIgWAAgAhXg5IAAAiIAWAAQAGAAAEgBQAEgBADgDIADgFIABgGIAAgDQAAgIgGgEQgGgEgQAAIgMAAgAF1A/IgDgBIgBgDIAAhPQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCACIgtBNQgDAEgCABIgGABIgTAAQgEAAgCgCQgCgDAAgDIAAiHIABgDIADgBIAXAAIADABIABADIAABTQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIACgBIAvhRIAEgEQACgCADAAIAUAAQADAAACACQADADAAADIAACHIgCADIgCABgAiqA/IgCgBIgCgDIgHghIgpAAIgHAhIgBADIgDABIgcAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgBIAeh6QABgIAEgEQADgEAFgDQAEgCAFgBIALgBIAKABQAFABAFACQAEADAEAEQADAEACAIIAeB6IAAABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAgAi6AAIgNg5IgCAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAABIgMA2IAeAAgAk4A/IgDgBIgBgDIAAg6IgyAAIAAA6IgBADIgDABIgaAAIgDgBIgBgDIAAiLIABgDIADgBIAaAAIADABIABADIAAA1IAyAAIAAg1QAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIADgBIAaAAIADABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIAACLIgBADIgDABg");
	this.shape.setTransform(40.1,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,17.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADlBIQgGgBgDgCQgCgDAAgGIAAiCIABgCIADgBIAaAAIADABIABACIAAA2IANAAQANAAAMABQALACAJAGIAIAGIAFAFQAFAJAAAOIAAABIgBANIgEAKIgFAIQgEAEgEACQgJAGgLACQgMACgNAAgAD8AuIAEAAIADABIAFAAIAPgBQAHgBADgCQAEgDABgDQABgEAAgFIAAgBQAAgFgBgDQgBgDgEgDQgDgCgHgBIgbAAgAiZBIQgGgBgDgCQgCgDAAgGIAAiCIABgCIADgBIAaAAIADABIABACIAAA2IANAAQANAAAMABQALACAJAGIAIAGIAFAFQAFAJAAAOIAAABIgBANIgEAKIgFAIQgEAEgEACQgJAGgLACQgMACgNAAgAiCAuIAEAAIADABIAFAAIAPgBQAHgBADgCQAEgDABgDQABgEAAgFIAAgBQAAgFgBgDQgBgDgEgDQgDgCgHgBIgbAAgAA/BJQgNAAgIgDQgJgDgEgFQgFgGgCgIQgBgGAAgJIAAhnIABgCIADgCIAaAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABIABACIAABnIAAAEIABADIADADIAFAAIAYAAIAAhxQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAbAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAABxIAYAAIAFAAIADgDIABgDIAAhrQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAaAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABnQAAAJgCAGQgBAIgFAGQgEAFgJADQgIADgNAAgAgkBJIgCgBIgBgDIAAiLQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAbAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAACLIgBADIgDABgAjeBJIgCgBIgBgDIAAhSQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgCABIgSAfQgCAEgEAAIgQAAQgEAAgCgEIgSgfIgBgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAABSIgBADIgCABIgbAAIgCgBIgBgCIAAiJQAAgDACgCQACgBADAAIATAAQAGgBADAGIAeA5QABABAAAAQAAABAAAAQABAAAAAAQAAABAAAAIADgDIAeg5QADgGAGABIATAAQADAAACACQACABAAADIAACJIgBACIgCABg");
	this.shape.setTransform(32.9,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.8,15.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5KAFEIAAqIMByVAAAIAAKIg");
	this.shape.setTransform(366,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,732,65);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah3ZsMAAAgzXIDvAAMAAAAzXg");
	this.shape.setTransform(12,164.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,329);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gggsgsg();
	this.instance.setTransform(-30.1,-34.3,0.564,0.564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-34.3,60.3,68.8);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gggsgsg();
	this.instance.setTransform(-10.7,-12.1,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-12.1,21.4,24.4);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kkdjdjd();
	this.instance.setTransform(-33.5,-38.2,0.627,0.627);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.5,-38.2,67.1,76.5);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kkdjdjd();
	this.instance.setTransform(-11.4,-13,0.213,0.213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-13,22.8,26);


(lib.Слой1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3.5,1,1).p("AFNAAQAACJhiBiQhiBiiJAAQiJAAhhhiQhihiAAiJQAAiJBihhQBhhiCJAAQCJAABiBiQBiBhAACJg");
	this.shape.setTransform(36,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,70.1,70.1);


(lib.Символ134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ133();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.82,scaleY:0.82},5,cjs.Ease.get(-1)).to({scaleX:0.64,scaleY:0.64},6,cjs.Ease.get(1)).to({scaleX:0.82,scaleY:0.82},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-30.1,59.4,59.4);


(lib.Символ132 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ131();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.2,rotation:2.6,y:-0.2},0).wait(1).to({rotation:5.2},0).wait(1).to({rotation:7.8,x:0.1},0).wait(1).to({rotation:10.4},0).wait(1).to({rotation:13},0).wait(1).to({rotation:15.7},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:20.9},0).wait(1).to({rotation:23.5},0).wait(1).to({rotation:26.1},0).wait(1).to({rotation:28.7},0).wait(1).to({rotation:31.3,y:-0.1},0).wait(1).to({rotation:33.9},0).wait(1).to({rotation:36.5},0).wait(1).to({rotation:39.1,x:0.2},0).wait(1).to({rotation:41.7},0).wait(1).to({rotation:44.3},0).wait(1).to({rotation:47},0).wait(1).to({rotation:49.6},0).wait(1).to({rotation:52.2},0).wait(1).to({rotation:54.8},0).wait(1).to({rotation:57.4},0).wait(1).to({rotation:60},0).wait(1).to({rotation:62.6},0).wait(1).to({rotation:65.2},0).wait(1).to({rotation:67.8},0).wait(1).to({rotation:70.4,y:0},0).wait(1).to({rotation:73},0).wait(1).to({rotation:75.7},0).wait(1).to({rotation:78.3},0).wait(1).to({rotation:80.9},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:86.1},0).wait(1).to({rotation:88.7},0).wait(1).to({rotation:91.3},0).wait(1).to({rotation:93.9},0).wait(1).to({rotation:96.5},0).wait(1).to({rotation:99.1,y:0.1},0).wait(1).to({rotation:101.7},0).wait(1).to({rotation:104.3},0).wait(1).to({rotation:107},0).wait(1).to({rotation:109.6},0).wait(1).to({rotation:112.2},0).wait(1).to({rotation:114.8},0).wait(1).to({rotation:117.4},0).wait(1).to({rotation:120},0).wait(1).to({rotation:122.6},0).wait(1).to({rotation:125.2},0).wait(1).to({rotation:127.8},0).wait(1).to({rotation:130.4,y:0.2},0).wait(1).to({rotation:133},0).wait(1).to({rotation:135.7},0).wait(1).to({rotation:138.3},0).wait(1).to({rotation:140.9},0).wait(1).to({rotation:143.5,x:0.1},0).wait(1).to({rotation:146.1},0).wait(1).to({rotation:148.7},0).wait(1).to({rotation:151.3},0).wait(1).to({rotation:153.9},0).wait(1).to({rotation:156.5},0).wait(1).to({rotation:159.1},0).wait(1).to({rotation:161.7},0).wait(1).to({rotation:164.3},0).wait(1).to({rotation:167},0).wait(1).to({rotation:169.6},0).wait(1).to({rotation:172.2},0).wait(1).to({rotation:174.8,x:0},0).wait(1).to({rotation:177.4},0).wait(1).to({rotation:180},0).wait(1).to({rotation:182.6},0).wait(1).to({rotation:185.2},0).wait(1).to({rotation:187.8},0).wait(1).to({rotation:190.4},0).wait(1).to({rotation:193},0).wait(1).to({rotation:195.7},0).wait(1).to({rotation:198.3},0).wait(1).to({rotation:200.9},0).wait(1).to({rotation:203.5,x:-0.1},0).wait(1).to({rotation:206.1},0).wait(1).to({rotation:208.7},0).wait(1).to({rotation:211.3},0).wait(1).to({rotation:213.9},0).wait(1).to({rotation:216.5},0).wait(1).to({rotation:219.1},0).wait(1).to({rotation:221.7},0).wait(1).to({rotation:224.3},0).wait(1).to({rotation:227},0).wait(1).to({rotation:229.6},0).wait(1).to({rotation:232.2,y:0.1},0).wait(1).to({rotation:234.8},0).wait(1).to({rotation:237.4},0).wait(1).to({rotation:240},0).wait(1).to({rotation:242.6,x:-0.2},0).wait(1).to({rotation:245.2},0).wait(1).to({rotation:247.8},0).wait(1).to({rotation:250.4},0).wait(1).to({rotation:253},0).wait(1).to({rotation:255.7},0).wait(1).to({rotation:258.3},0).wait(1).to({rotation:260.9},0).wait(1).to({rotation:263.5,y:0},0).wait(1).to({rotation:266.1},0).wait(1).to({rotation:268.7},0).wait(1).to({rotation:271.3},0).wait(1).to({rotation:273.9},0).wait(1).to({rotation:276.5},0).wait(1).to({rotation:279.1},0).wait(1).to({rotation:281.7},0).wait(1).to({rotation:284.3},0).wait(1).to({rotation:287},0).wait(1).to({rotation:289.6},0).wait(1).to({rotation:292.2,y:-0.1},0).wait(1).to({rotation:294.8},0).wait(1).to({rotation:297.4},0).wait(1).to({rotation:300,x:-0.1},0).wait(1).to({rotation:302.6},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:307.8},0).wait(1).to({rotation:310.4},0).wait(1).to({rotation:313},0).wait(1).to({rotation:315.7},0).wait(1).to({rotation:318.3},0).wait(1).to({rotation:320.9},0).wait(1).to({rotation:323.5},0).wait(1).to({rotation:326.1},0).wait(1).to({rotation:328.7},0).wait(1).to({rotation:331.3,y:-0.2},0).wait(1).to({rotation:333.9},0).wait(1).to({rotation:336.5},0).wait(1).to({rotation:339.1,x:0},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:344.3},0).wait(1).to({rotation:347},0).wait(1).to({rotation:349.6},0).wait(1).to({rotation:352.2},0).wait(1).to({rotation:354.8},0).wait(1).to({rotation:357.4},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-41.2,82.1,82.1);


(lib.Символ128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ130();
	this.instance.setTransform(-159.6,-171.1,1.859,1.859);

	this.instance_1 = new lib.Символ129();
	this.instance_1.setTransform(-199.8,-177.3,0.489,0.489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.7,-202.2,90.1,49.8);


(lib.Символ126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ127();
	this.instance.setTransform(1087.2,0,3.548,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1942},236).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434.7,-106,6086.9,212);


(lib.Символ108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ109();
	this.instance.setTransform(36.1,11,1,1,0,0,0,36.1,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.2,22.1);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ101();
	this.instance.setTransform(90.3,83.8,1,1,0,0,0,90.3,83.8);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,187,174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,189,176);


(lib.Символ97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ98();
	this.instance.setTransform(43.3,21.8,1,1,0,0,0,43.3,21.8);
	this.instance.alpha = 0.898;
	this.instance.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance.cache(-2,-2,91,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,104,61);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ93();
	this.instance.setTransform(11,7,1,1,0,0,0,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3.6,33.5,21.3);


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ92();
	this.instance.setTransform(11,7,1,1,0,0,0,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3.6,33.5,21.3);


(lib.Символ90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ89();
	this.instance.setTransform(7.1,30,1,1,180,0,0,7.1,7);

	this.instance_1 = new lib.Символ89();
	this.instance_1.setTransform(7.1,7,1,1,0,0,180,7.1,7);

	this.instance_2 = new lib.Символ89();
	this.instance_2.setTransform(39.7,30,1,1,0,180,0,7.1,7);

	this.instance_3 = new lib.Символ89();
	this.instance_3.setTransform(39.7,7,1,1,0,0,0,7.1,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.8,50.5,40.7);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ90();
	this.instance.setTransform(-21.8,17.3,1,1,0,0,0,23.4,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-3,50.5,40.7);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(61.3,14.8,1,1,0,0,0,7.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);

	this.instance_1 = new lib.Символ87();
	this.instance_1.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ100();
	this.instance.setTransform(99.5,86.8,1,1,0,0,0,90.3,83.8);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ99();
	this.instance_1.setTransform(97,88.5,1,1,0,0,0,97,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.7,177);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ69();
	this.instance.setTransform(49.5,51,1,1,0,0,0,49.5,51);
	this.instance.alpha = 0.57;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ69();
	this.instance_1.setTransform(49.5,51,1,1,0,0,0,49.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.setTransform(49.5,51,1,1,0,0,0,49.5,51);

	this.instance_1 = new lib.Символ67();
	this.instance_1.setTransform(49.5,51,1,1,0,0,0,49.5,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(4.5,9.9,1,1,-90,0,0,9.9,4.5);

	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(4.5,91.9,1,1,-90,0,0,9.9,4.5);

	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(4.6,173.3,1,1,-90,0,0,9.9,4.5);

	this.instance_3 = new lib.Символ40();
	this.instance_3.setTransform(4.5,254.7,1,1,-90,0,0,10.1,4.5);

	this.instance_4 = new lib.Символ39();
	this.instance_4.setTransform(4.5,336.2,1,1,-90,0,0,10,4.5);

	this.instance_5 = new lib.Символ38();
	this.instance_5.setTransform(4.5,417.6,1,1,-90,0,0,10.1,4.5);

	this.instance_6 = new lib.Символ37();
	this.instance_6.setTransform(4.5,499.1,1,1,-90,0,0,10,4.5);

	this.instance_7 = new lib.Символ36();
	this.instance_7.setTransform(4.5,580.5,1,1,-90,0,0,10.1,4.5);

	this.instance_8 = new lib.Символ35();
	this.instance_8.setTransform(4.5,662,1,1,-90,0,0,10,4.5);

	this.instance_9 = new lib.Символ34();
	this.instance_9.setTransform(4.5,743.4,1,1,-90,0,0,10.2,4.5);

	this.instance_10 = new lib.Символ33();
	this.instance_10.setTransform(4.5,824.9,1,1,-90,0,0,9.9,4.5);

	this.instance_11 = new lib.Символ32();
	this.instance_11.setTransform(4.5,906.4,1,1,-90,0,0,9.9,4.5);

	this.instance_12 = new lib.Символ31();
	this.instance_12.setTransform(4.5,987.8,1,1,-90,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,997.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(4.5,498.9,1,1,0,0,0,4.5,498.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1158.9},337,cjs.Ease.get(1)).to({y:498.9},92,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,997.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.Символ43();
	this.instance.setTransform(987.8,3.1,1,1,0,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 12
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(905.9,3.1,1,1,0,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 11
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(824.4,3.2,1,1,0,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 10
	this.instance_3 = new lib.Символ40();
	this.instance_3.setTransform(743,3.1,1,1,0,0,0,10.1,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 9
	this.instance_4 = new lib.Символ39();
	this.instance_4.setTransform(661.5,3.1,1,1,0,0,0,10,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 8
	this.instance_5 = new lib.Символ38();
	this.instance_5.setTransform(580.1,3.1,1,1,0,0,0,10.1,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ37();
	this.instance_6.setTransform(498.7,3.1,1,1,0,0,0,10,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 6
	this.instance_7 = new lib.Символ36();
	this.instance_7.setTransform(417.2,3.1,1,1,0,0,0,10.1,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 5
	this.instance_8 = new lib.Символ35();
	this.instance_8.setTransform(335.8,3.1,1,1,0,0,0,10,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 4
	this.instance_9 = new lib.Символ34();
	this.instance_9.setTransform(254.3,3.1,1,1,0,0,0,10.2,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Слой 3
	this.instance_10 = new lib.Символ33();
	this.instance_10.setTransform(172.8,3.1,1,1,0,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// Слой 2
	this.instance_11 = new lib.Символ32();
	this.instance_11.setTransform(91.4,3.1,1,1,0,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// Слой 1
	this.instance_12 = new lib.Символ31();
	this.instance_12.setTransform(9.9,3.1,1,1,0,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.4,997.7,9.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Символ27();
	this.instance.setTransform(111.5,24.8,1,1,0,0,0,87.3,89);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:115.9,y:20.4,alpha:1},10,cjs.Ease.get(1)).to({x:111.5,y:24.8,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Режим изоляции
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(111,26.2,1,1,0,0,0,60.9,61.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:115.4,y:21.8,alpha:1},10,cjs.Ease.get(1)).to({x:111,y:26.2,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(68.5,67.7,1,1,0,0,0,68.5,67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:81.7,y:58.9},14,cjs.Ease.get(1)).to({x:68.5,y:67.7},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,135.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouse
	this.instance = new lib.Символ24();
	this.instance.setTransform(-131.6,24.8,0.202,0.202,0,0,0,68.5,67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-48.5,11.4,1.19,1.19,0,0,0,40.1,8.7);

	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(-49.9,36.3,1.416,1.416,0,0,0,32.9,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,1,144.8,46.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numb
	this.instance = new lib.Символ44();
	this.instance.setTransform(11.5,-185.5,1,1,0,0,0,4.5,498.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(12,164.5,1,1,0,0,0,12,164.5);
	this.instance_1.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-684.4,24,1013.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ110();
	this.instance.setTransform(33.9,7.8,1,1,0,0,0,33.9,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:30.7},12,cjs.Ease.get(1)).to({x:33.9},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,15.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ108();
	this.instance.setTransform(43.6,7.2,1,1,0,0,0,36.1,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:47.2},13,cjs.Ease.get(1)).to({x:43.6},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,-3.8,72.1,22.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(258.3,247.1,0.807,0.807,0,0,0,-73.1,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(194.2,64.5,1.693,1.693,0,0,0,33.9,7.8);

	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(179.2,32.7,1.426,1.426,0,0,0,38.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134.9,16.5,181.8,249.2);


(lib.Символ10 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ128();
	this.instance.setTransform(158.2,417.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:385,y:418},4).wait(1).to({x:158.2,y:417.6},4).wait(1));

	// 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(198.5,150,1,1,0,0,0,198.5,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-141.5},3,cjs.Ease.get(1)).wait(1).to({x:198.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,16.5,383.3,249.2);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.setTransform(33.5,67.5,0.677,0.677,0,0,0,49.5,51);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,33,145.9,69.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ91();
	this.instance.setTransform(23.6,9.8,1,1,0,0,0,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(26.4,-3.2,1,1,0,0,0,22.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ81();
	this.instance_2.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ98();
	this.instance_3.setTransform(30.1,41.4,1,1,0,0,0,43.3,21.8);
	this.instance_3.alpha = 0.898;
	this.instance_3.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance_3.cache(-2,-2,91,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.2,-4.9,104,79.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ78();
	this.instance.setTransform(130,6.8,1,1,0,0,0,65.6,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ77();
	this.instance_1.setTransform(97,88.5,1,1,0,0,0,97,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.7,177);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ125();
	this.instance.setTransform(394,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,788,300);


(lib.Символ68_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ134();
	this.instance_1.setTransform(45.4,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ132();
	this.instance_2.setTransform(44.9,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Слой1();
	this.instance_3.setTransform(44.9,44.9,1,1,0,0,0,36,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,3.7,82.1,82.1);


(lib.Символ119копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(-164.3,-248,1,1,0,0,0,33.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:350.6,y:265.2},81).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218,-281.4,105,78.5);


(lib.Символ119копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(-1.4,-200,1,1,0,0,0,33.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:30.1,regY:29.2,x:621.2,y:291.7},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-233.4,104,78.6);


(lib.Символ119копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(-1.4,-200,1,1,0,0,0,33.5,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:518.6,y:265.2},219).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-233.4,104,78.6);


(lib.Символ119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(22.7,-221.9,1,1,0,0,0,33.5,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:30.1,regY:29.2,x:599.2,y:286.7},85).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-255.4,104,78.5);


(lib.Символ111 = function(mode,startPosition,loop) {
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
	this.pric = new lib.Символ68_1();
	this.pric.setTransform(45.9,45.9,1,1,0,0,0,45.9,45.9);
	this.pric.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,3.7,82.1,82.1);


(lib.Символ107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(68.7,22.3,1,1,0,0,0,7.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.gun2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.Символ104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(57.9,16.7,1,1,0,0,0,7.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.car();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(68.7,18.3,1,1,0,0,0,7.1,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.gun1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,59);


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ92();
	this.instance.setTransform(16.7,10.7,1,1,0,0,0,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,21.3);


(lib.Символ95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ92();
	this.instance.setTransform(16.7,10.7,1,1,0,0,0,11,7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ92();
	this.instance.setTransform(16.7,10.7,1,1,0,0,0,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,21.3);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ106();
	this.instance.setTransform(40,36,1,1,0,0,0,40,36);

	this.instance_1 = new lib.Символ107();
	this.instance_1.setTransform(40,36,1,1,0,0,0,40,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ105();
	this.instance.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);

	this.instance_1 = new lib.Символ104();
	this.instance_1.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ103();
	this.instance.setTransform(42.5,29.5,1,1,0,0,0,42.5,29.5);

	this.instance_1 = new lib.Символ102();
	this.instance_1.setTransform(42.5,29.5,1,1,0,0,0,42.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,59);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(9.9,5.9,1,1,0,0,0,9.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-270.1},366,cjs.Ease.get(1)).to({x:9.9},128,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,997.7,9.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// number
	this.instance = new lib.Символ46();
	this.instance.setTransform(534.9,12,1,1,0,0,0,498.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(365.9,32.5,1,1,0,0,0,365.9,32.5);
	this.instance_1.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1033.7,65);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hor
	this.instance = new lib.Символ18();
	this.instance.setTransform(343.9,321.5,1,1,0,0,0,365.9,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ver
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(12,164.5,1,1,0,0,0,12,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-684.4,1033.7,1038.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ94();
	this.instance.setTransform(26.3,5.2,1,1,0,0,0,16.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(22.6,-7.1,1,1,0,0,0,22.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ85();
	this.instance_2.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ97();
	this.instance_3.setTransform(29.9,38.6,1,1,0,0,0,43.3,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-8.8,104,80.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ96();
	this.instance.setTransform(55.3,25.9,1,1,0,0,0,16.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(34.6,-2.7,1,1,0,0,0,22.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ84();
	this.instance_2.setTransform(42.5,29.5,1,1,0,0,0,42.5,29.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.4,85,63.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ95();
	this.instance.setTransform(50.3,8.7,1,1,0,0,0,16.7,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(38.6,-5.1,1,1,0,0,0,22.6,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ86();
	this.instance_2.setTransform(40,36,1,1,0,0,0,40,36);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.8,80,78.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ126();
	this.instance.setTransform(506.6,257.5,1,0.763);
	this.instance.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// gun2.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(436.9,237.3,1,1,0,0,0,40,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// gun1.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(375,63.4,1,1,0,0,0,42.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 7
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(406,150.6,1,1,0,0,0,33.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// car.png
	this.instance_4 = new lib.Символ119копия3();
	this.instance_4.setTransform(120.9,109.7);

	this.instance_5 = new lib.Символ119копия2();
	this.instance_5.setTransform(-92.1,310.9);

	this.instance_6 = new lib.Символ119копия();
	this.instance_6.setTransform(-119.1,178.7);

	this.instance_7 = new lib.Символ119();
	this.instance_7.setTransform(-86.2,165.5);

	this.instance_8 = new lib.Символ5();
	this.instance_8.setTransform(466,111,1,1,0,0,0,33.5,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// basa.png
	this.instance_9 = new lib.Символ4();
	this.instance_9.setTransform(568.5,163,1,1,0,0,0,97,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// bg
	this.instance_10 = new lib.Символ3();
	this.instance_10.setTransform(394,150,1.06,1.06,0,0,0,394,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.2,-171.7,6333,510.1);


(lib.Символ112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ115();
	this.instance.setTransform(600,238.3,0.131,0.131,0,0,0,0,30.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).to({scaleX:0.69,scaleY:0.69},3).to({regY:30.4,scaleX:1,scaleY:1,y:238.2,alpha:0},7).wait(1));

	// Слой 3
	this.instance_1 = new lib.Анимация7("synched",0);
	this.instance_1.setTransform(521.2,193.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация8("synched",0);
	this.instance_2.setTransform(521.1,169.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Символ114();
	this.instance_3.setTransform(521.1,136.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},70).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},6).to({state:[]},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70).to({_off:false},0).to({_off:true,x:521.1,y:169.6,alpha:1},3).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},3).to({_off:true,y:136.1,alpha:0,mode:"independent"},6).wait(11));

	// Слой 2
	this.instance_4 = new lib.Анимация5("synched",0);
	this.instance_4.setTransform(605.5,137.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация6("synched",0);
	this.instance_5.setTransform(605.5,112);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true,y:112,alpha:1},3).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},3).to({scaleX:1.38,scaleY:1.38,alpha:0},4).to({_off:true},1).wait(63));

	// Слой 1
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(417.7,159,1,1,0,0,0,394,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({y:161},0).wait(1).to({y:156},0).wait(1).to({y:159},0).wait(48).to({y:161},0).wait(1).to({y:156},0).wait(1).to({y:159},0).wait(8).to({y:161},0).wait(1).to({y:156},0).wait(1).to({y:159},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-162.7,6333,510.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ112();
	this.instance.setTransform(394.1,150,1,1,0,0,0,417.7,159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.2,-171.7,6333,510.1);


// stage content:
(lib._600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		//link
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 20;
		
		}
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.text.gotoAndPlay(1);
			_this.pric.gotoAndPlay(1);
		
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.text.gotoAndPlay(5);
			_this.pric.gotoAndPlay(0);
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pric
	this.pric = new lib.Символ111();
	this.pric.setTransform(482,386.9,1,1,0,0,0,45.9,45.9);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// btn
	this.instance = new lib.Символ9();
	this.instance.setTransform(49.5,249,1,1,0,0,0,49.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.text = new lib.Символ10();
	this.text.setTransform(116.6,150,1,1,0,0,0,198.5,150);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// line
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(12,151.5,1,1,0,0,0,12,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// fon
	this.fon = new lib.Символ1();
	this.fon.setTransform(0,150,1,1,0,0,0,83,150);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.8,-547.4,6333,1124.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
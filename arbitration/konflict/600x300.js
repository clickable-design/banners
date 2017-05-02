(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/air.png", id:"air"},
		{src:"images/basa.png", id:"basa"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/car.png", id:"car"},
		{src:"images/gun1.png", id:"gun1"},
		{src:"images/gun2.png", id:"gun2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/mina.png", id:"mina"},
		{src:"images/pulya.png", id:"pulya"}
	]
};



// symbols:



(lib.air = function() {
	this.initialize(img.air);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,110);


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


(lib.gun1 = function() {
	this.initialize(img.gun1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,59);


(lib.gun2 = function() {
	this.initialize(img.gun2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,37);


(lib.mina = function() {
	this.initialize(img.mina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,100);


(lib.pulya = function() {
	this.initialize(img.pulya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,109);


(lib.Символ110 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ADOBNIgSgDIgCgCIgBgCIAAgQIABgCIACgBIAaABQAFAAADgCQADgCACgGIACgHIgEAAIgEAAIgGgCIgEgGIgfhdIAAgCQAAgDAFAAIAaAAIADABIABACIASBFIABADIACABIABAAIAThJIABgCIADgBIAaAAIADABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIAAABIghBuIgGAPQgDAGgFAEQgEAEgIACQgHACgLAAgAE2BMIgDgCIgCgDIAAgZQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIADAAIAXAAQAEAAAAADIAAAZIgBADIgDACgACGBMIgCgCIgCgCIgphBIAABAIgBADIgDACIgaAAIgDgCIgBgDIAAiLIABgCIADgBIAaAAIADABIABACIAABBIAshCQACgCACAAIAfAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIgBADIgvBCIAvBHIABACQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAgAAGBMIgCgCIgCgCIgFghIgpAAIgIAhIgBACIgCACIgcAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAgBIAfh6QABgHADgEQAEgEAEgDQAFgDAFAAIAKgBIALABQAFAAAFADQADADACAEQAEAEABAHIAeB6IAAABQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAgAgJALIgMg3IgDgBQAAAAAAABQgBAAAAAAQgBABAAAAQAAABgBAAIgLA1IAdAAgAiiBMIgCgCIgCgDIAAhyIggAAIgDgBIgCgCIAAgWIACgCIADgBIBjAAIACABQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIAAAWQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgCABIghAAIAAByIgBADIgCACgAjzBMIgCgCIgBgCIgHghIgqAAIgHAhIgBACIgDACIgcAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgBIAeh6QABgHAEgEQADgEAFgDQAEgDAFAAIALgBIALABQAFAAAEADQAFADADAEQADAEACAHIAeB6IAAABQAAABAAABQAAAAgBABQAAAAgBAAQgBABgBAAgAkDALIgNg3IgCgBQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAIgMA1IAeAAgAE5AeIgDgBIgCgDIgEhiIACgDIADgBIAZAAIADABIABADIgEBiIgBADIgDABg");
	this.shape.setTransform(33.9,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,15.5);


(lib.Символ109 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+BsQgKgCgIgFQgIgFgEgKQgFgKAAgQIAAhKQAAgQAFgJQAEgKAIgFQAIgFAKgCQALgCALAAIAlACIAHABQAEABAAADIAAAWIgBADIgDABIgvAAQgIAAgDAEQgEADAAAJIAAATIA8AAIADABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAVQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABIg8AAIAAAYQAAAJAEAEQADADAIAAIAvAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIABAEIAAAVQAAAEgEABIgtADQgLAAgKgCgAgvBrQgHgBgDgDQgDgDAAgIIAAiVIACgDQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIBeAAIAEABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIAAAYQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABIg7AAIAAAgIAPgBQANAAANADQAOACAJAGIAJAHIAHAJQAGAKAAAQIAAABQAAAIgCAHQgBAHgDAFIgHAJQgEAEgFADQgKAGgNADQgNACgNAAgAgUBNIACAAIACABIAJAAQAJAAAHgCQAHgBAEgCQAEgDACgEQABgEAAgGIAAgBQAAgGgBgEQgCgEgEgCQgEgCgHgBIgdgBgAk+BqQgMgEgJgJIgJgKQgDgGgDgHIgEgPQgBgJAAgKIAAgbQAAgJABgIIAEgPIAGgNIAJgKQAJgJAMgEQANgEAOAAQAOAAANAEQAMAEAJAJIAIAKIAHANQAFAOAAASIAAAbIgBATIgEAPIgHANIgIAKQgJAJgMAEQgNAEgOAAQgOAAgNgEgAk4gUQgHAKAAATIAAAbQAAALABAHQACAIAEAEQAHAKAOAAQAHAAAGgDQAFgCADgFQAEgEACgIQACgHAAgLIAAgbQAAgTgIgKQgDgEgFgDQgGgCgHAAQgOAAgHAJgAFJBsQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgDIAAhdQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCACIg1BbQgCAEgDACIgHABIgWAAQgEAAgCgDQgDgCAAgEIAAicQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIADgBIAcAAIADABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIAABgQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIACgCIA3hdIAEgFQACgCADAAIAYAAQADAAADACQACADAAAEIAACbIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAieBsQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgBgDIAAiEIglAAIgEgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgYQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIByAAIADABQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIAAAYQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgDABIgmAAIAACEIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAEThMQgHgCgGgFQgFgEgDgGQgEgGgBgHIAAgCIADgBIAUAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQABAHAFADQAFADAGAAQAGAAAFgDQAFgDABgHQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAUAAIACABIAAACQgCAHgDAGQgDAGgFAEQgGAFgHACQgIADgJAAQgJAAgIgDg");
	this.shape.setTransform(36.1,11);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.2,22.1);


(lib.Символ106 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gun2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.Символ105 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ103 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gun1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,59);


(lib.Символ101 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ap4J1Ij1i3QgBgBAch8QgBgBAWiAQgXgRgTgPQgogfAMACQASAECHARQA4gFAAAAIAqAgQAQBCAAgBQApgOAAAAQgBAAAFhJQgBAAArhaQgBAAADhGIgghiQDRgZAAgBQgBgBAkggIgeghQAagoAAAAQEsizAAAAQBhhRAAAAQgBgBAWlWQAIFJAAAAQAjAAAAAAQgBgBAIg2IBGAhQAFBAAAAAIBiBmQBZgUAAAAICpB8QgBA1AAAAICtBdQgBgBg+AlQABDnAAgBICnBaQABBbAAgBQA9AbAAAAQgKA+AAgBQgBgBpNFVQgBAAlsBMIk8hsg");
	this.shape.setTransform(90.3,83.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Al6LZIj+hkIj1i3IAbh9IAViBIgqggQgogfAMACQASAECHARIA4gFIAqAgIAQBBIAAAAIAAAAIApgOIAEhJIAqhaIAChGIgghiIDRgaIAjghIgeghIAagoIEsizIBhhRIAVlXIAIFJIAAAAIAAAAIAjAAIAHg3IBGAhIAFBAIBiBmIBZgUICpB8IgBA1IAAAAIAAAAICtBdIg/AkIABDmICnBaIABBaIAAAAIAAAAIA9AbIgKA9IpOFUIltBMgAOHFoIAAAAIAAAAg");
	this.shape_1.setTransform(90.3,83.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,182.7,169.5);


(lib.Символ99 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.basa();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194,177);


(lib.Символ98 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmwhFIFQiUIIQD0IktC/g");
	this.shape.setTransform(43.3,21.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.6,43.7);


(lib.Символ93 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAFAaIhgAgIA5gtIAFgFIgSgqIAxAVIBYgrIACgBIgGAJIgiAwIATAaIAVAgg");
	this.shape.setTransform(12,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABRBKIgTgcIAhguIBIBqgAg4AQIgehNIBZAkICkhQIhDBhIhYApIgxgVIARAsIgEAFIiOAtg");
	this.shape_1.setTransform(11,7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-3.6,33.5,21.3);


(lib.Символ89 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3.7,1,1).p("AhGhFICMAAIAACL");
	this.shape.setTransform(7.1,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.8,17.9,17.7);


(lib.Символ83 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjQAQQgHAAgFgFQgEgEgBgHQABgGAEgFQAFgEAHAAIGhAAQAHAAAFAEQAEAFAAAGQAAAHgEAEQgFAFgHAAg");
	this.shape.setTransform(22.6,1.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,3.3);


(lib.Символ82 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.car();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
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


(lib.Символ69 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ68 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.air();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,110);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.air();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,110);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mina();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,100);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mina();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,100);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pulya();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,109);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pulya();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,109);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A+/XbMAAAgu2MAsBAAAMAR+Au2g");
	this.shape.setTransform(198.5,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,397,300);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAVACQAJgBAFgEIAEgEIABgIIAAgDIgBgEIgDgFQgBgCgDgCQgCgBgFAAIgVAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAVAAQAFgBADgBIADgEIADgEIABgFIAAgCIgBgGIgEgEQgEgDgKAAIgVABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIALgBIAMABQAGABADADQAEADADAFQACAEgBAGIAAACQAAAGgCAFQgDAFgGADIAFACIAEAEIACAGIAAAEIAAADQABAHgCAFQgDAFgEADQgEADgFABQgFACgHAAIgLgBgAhWAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAgAAKAsIgBgBIgBgCIAAgVIghAAIgEgBIgBgEIAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBIAhgvIACgBIACgBIAHAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAAAzIAKAAIACABIABABIAAAFQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgKAAIAAAVIgBACIgBABgAAHgcIgaAmIAAABIAAAAIAbAAIAAgnIAAgBg");
	this.shape.setTransform(9.9,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9.1);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAWACIAIgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgLAAIgOAAIgCAAIAAgBIADgoIABgBIABgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAGAAIAPABQAHABAEADQAFADADADQACAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgHAAgAAwAsIgCgBIgBgCIAAgJQAAgKAFgHQAEgIAKgGIASgLIAEgEIACgEIAAgEQAAgHgEgDQgEgCgKAAIgWABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAgBIACAAIAKgCIALgBQAIAAAFACQAFAAAEADQADADACAEQACAEAAAGIgBAGIgDAGIgFAFIgSALIgJAGIgFAHQgCADAAADIgBAHIAAACIAoAAIACABIABACIAAAFIgBABIgCABgAAKAsIgCgBIAAgCIAAgVIghAAIgEgBIgBgEIAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBIAigvIABgBIACgBIAIAAQAAAAABAAQABAAAAABQAAAAABAAQAAABAAABIAAAzIAKAAIACABIAAABIAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgKAAIAAAVIgBACIgBABgAAGgcIgaAmIAAABIABAAIAbAAIAAgnIgBgBg");
	this.shape.setTransform(9.9,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,9.1);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAsIgKgCIgBAAIgBgDIAAgEQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAWABIAJgBIAFgEQAGgEAAgJIAAgCQAAgKgHgDIgIgCIgLAAIgOAAIgCAAIAAgBIAEgpIAAgBIACgBIApAAIACABIABABIAAAGIgBABIgCAAIgiAAIgDAbIAGAAIAQAAQAGACAFADQAEADADACQACAGABAHIAAACQgBAGgBAFQgDAFgEAEQgDAEgGACQgGACgHAAgAAvAsIgCgBIgBgBIAAgGIABgBIACgBIATAAIAAhDIgTAIIgCABQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAgGIAAgBIABAAIAWgKIADgBIAEAAIACABIABABIAABMIATAAIACABIAAABIAAAGIAAABIgCABgAAKAsIgBgBIgBgCIAAgWIghAAIgEgBIgBgDIAAgFQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAIAhgwIACgBIACgBIAHAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAAzIAKAAIACABIABABIAAAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgKAAIAAAWIgBACIgBABgAAHgcIgaAlIAAABIAAAAIAbAAIAAgmIAAgBg");
	this.shape.setTransform(9.9,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AqQgFgCgEgEIgDgFIgCgHQgCgEgBgNIAAgNQAAgHADgKQACgIADgFQAEgEAFgCQAGgCAHAAQAHAAAFACQAGACAEAEQADAFACAIQACAGAAALIAAANQAAALgCAGIgDAHIgCAFQgEAEgGACQgFADgHAAQgHAAgGgDgABAghQgEABgDADQgCAEgBAFQgBAGAAAIIAAANQAAAIABAGQABAFACADQADAEAEABQADACAEAAQAEAAADgCQAEgBACgEIAEgIQACgGAAgIIAAgNQAAgIgCgGIgEgJQgCgDgEgBQgDgBgEAAQgEAAgDABgAhXAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgNAAIgCAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAFAAIAQABQAHABAEADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAgAAJAsIgCgBIgBgCIAAgVIggAAIgFgBIgBgEIAAgEQABgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIAhgvIACgBIACgBIAHAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABIAAAzIAKAAIACABIAAABIAAAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgKAAIAAAVIgBACIgCABgAAFgcIgaAmIAAABIAAAAIAbAAIAAgnIAAgBg");
	this.shape.setTransform(10.1,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,9.1);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4AsIgJgBIgCgBIgBgCIAAgEIABgCIACgBIAAAAIAVADQAHgBAEgCQAEgCADgDQABgDABgFIAAgMIgIACIgJAAIgLgBQgGgBgEgDQgEgDgDgDIgBgFIgBgHIAAAAQAAgIACgGQACgFADgEQAEgEAGgCQAFgCAIAAQAGAAAFACQAGACADAEQAFAFABAGQACAJAAAGIAAATQAAAKgCAGQgBAHgFAFIgEADIgGADQgFACgIAAIgMgBgAA+giQgDABgCADQgCACgCAEIgBALIAAAAQAAAFABADIAFAFIAFABIAIABIAJgBIAIgBIAAgKIAAgMIgEgIIgGgEIgHgBIgJABgAgOAsIgJgCIgCgBIgBgBIAAgEQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAVACQAIgBAEgEIAEgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgEAAIgUAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQAEgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgEgEQgDgDgJAAIgVABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIABAAIACgBIAJgCIALgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgDAFgFADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgDAFgEADQgDADgGABQgFACgFAAIgLgBgAhXAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAg");
	this.shape.setTransform(10,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,9.1);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGAtQgGAAgFgCQgGgCgEgCQgDgEgDgEQgCgFAAgHIAAgCIABgFIACgGIADgFIAFgCIgFgDIgDgFQgDgEAAgHIAAgBQAAgFACgFQADgFADgDQAEgCAGgBQAFgCAGAAIABAAQAGAAAGACIAJADQAEADACAFQACAFAAAFIAAABIgBAHIgCAEIgDAFIgFADIAFACIADAFIADAGIAAAFIAAACQAAAHgCAFQgCAEgEAEQgEACgGACQgFACgGAAgAA8ADIgFADIgCAGIgBAFIAAACQAAAIAEAEQADACADABIAIACIABAAIAIgCQAEgBACgCQACgCABgDIABgHIAAgCIAAgFIgDgGIgFgDIgHgBIgHAAIgHABgAA4gfQgEAEAAAGIAAABIAAAGQABADACABIAFAEIAHABIAHAAIAHgBIAFgEIADgEIABgGIAAgBQAAgGgFgEQgFgEgJAAIgBAAQgJAAgFAEgAgOAsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAUACQAIgBAFgEIADgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgDAAIgVAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAVAAQADgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIAKgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgFACgFAAIgKgBgAhXAtIgKgDIgCAAIAAgCIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAWACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgOAAIgBAAIgBgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgCAaIAFAAIAQABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgGACQgGACgHAAg");
	this.shape.setTransform(10.1,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,9.1);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAUACQAIgBAFgEIADgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgEAAIgUAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAUAAQAEgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIAKgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgFACgFAAIgKgBgAhWAtIgKgDIgCAAIAAgCIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAWACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgOAAIgBAAIgBgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgCAaIAFAAIAQABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgGACQgGACgHAAgAA1AsIgBgBIgBgBIAlhKIAAgBIgBgBIgpAAIgBAAIgBgCIAAgFIABgBIABgBIAsAAQAFAAACACQACADAAACIgBAGIgjBIQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(10,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,9.1);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxAlQgDgFgCgGQgDgGAAgJIAAgUQAAgJADgGIACgHIADgFQAFgEAFgCQAHgCAHAAIAMABIAIABIACABIABABIAAAFIAAACIgCABIAAgBIgBAAIgJgBIgLAAQgHAAgEABQgEACgCADQgDAEAAAFIAAAMIAHgCIALgBIALABQAFACAEADQAEADADADIACAFIAAAGIAAABQAAAPgHAIQgEAEgGACQgFACgHAAQgNAAgJgIgAA4AAIgDAAIAAALIABAMQABAFACADQADACADABQADACAFAAIAHgBQAEgBACgDQADgCABgFIABgKIAAAAQAAgFgCgEIgEgEIgGgBIgGgBgAgOAsIgJgCIgCgBIgBgBIAAgEQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAUACQAJgBAEgEIADgEIABgIIAAgDIgBgEIgBgFQgCgCgDgCQgCgBgEAAIgVAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAVAAQADgBADgBIAFgEIABgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIABAAIACgBIAJgCIAKgBIALABQAFABAFADQADADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAGACIADAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgEACgGAAIgKgBgAhXAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgNAAIgCAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAFAAIAQABQAHABAEADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAg");
	this.shape.setTransform(10.1,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,9.1);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5AtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgLAAIgPAAIgBAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAGAAIAPABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAgAgNAsIgJgCIgCgBIgBgBIAAgEQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAUACQAJgBAEgEIADgEIABgIIAAgDIgBgEIgBgFQgCgCgDgCQgCgBgEAAIgVAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAVAAQADgBADgBIAFgEIABgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIABAAIACgBIAJgCIAKgBIALABQAFABAFADQADADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAGACIADAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgEACgGAAIgKgBgAhWAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAVACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgNAAIgCAAIAAgBIADgoIAAgBIACgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAFAAIAQABQAHABAEADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgIAAg");
	this.shape.setTransform(10,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,9.1);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAUACQAIgBAFgEIADgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgCAAIgWAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAWAAQACgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgDgEQgEgDgJAAIgUABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIAKgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgCAFgGADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgCAFgEADQgEADgGABQgFACgFAAIgKgBgAhYAtIgKgDIgCAAIAAgCIAAgEQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAWACIAJgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgMAAIgOAAIgBAAIgBgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgCAaIAFAAIAQABQAGABAFADQAFADACADQADAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgGACQgGACgHAAgABQAsIgCgBIAAgCIAAgVIgjAAIgEgBIgBgEIAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBIAkgvIABgBIACgBIAIAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAAzIAKAAIACABIAAABIAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgKAAIAAAVIgBACIgBABgABMgcIgcAmIAAABIABAAIAdAAIAAgnIgBgBg");
	this.shape.setTransform(10.2,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,9.1);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AsIgKgCIgCgBIAAgBIAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAVACQAJgBAFgEIAEgEIABgIIAAgDIgBgEIgDgFQgBgCgDgCQgCgBgFAAIgVAAQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAIAVAAQAFgBADgBIADgEIADgEIABgFIAAgCIgBgGIgEgEQgEgDgKAAIgVABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIAAAAIACgBIAKgCIALgBIAMABQAGABADADQAEADADAFQACAEgBAGIAAACQAAAGgCAFQgDAFgGADIAFACIAEAEIACAGIAAAEIAAADQABAHgCAFQgDAFgEADQgEADgFABQgFACgHAAIgLgBgAgNAsIgJgCIgCgBIgBgBIAAgEQAAgBABAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAVACQAIgBAEgEIAEgEIABgIIAAgDIgBgEIgCgFQgBgCgDgCQgDgBgEAAIgUAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAABAAIAUAAQAEgBADgBIAEgEIACgEIABgFIAAgCIgBgGIgEgEQgDgDgJAAIgVABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIABAAIACgBIAJgCIALgBIALABQAFABAEADQAEADACAFQACAEAAAGIAAACQAAAGgDAFQgDAFgFADIAFACIAEAEIACAGIAAAEIAAADQAAAHgCAFQgDAFgEADQgDADgGABQgFACgFAAIgLgBgAhWAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAg");
	this.shape.setTransform(9.9,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9.1);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAtIgKgDIgBAAIgBgCIAAgEQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAWACIAIgCIAGgDQAFgFAAgJIAAgCQAAgJgGgDIgIgDIgLAAIgOAAIgCAAIAAgBIADgoIABgBIABgBIAqAAIABABIABABIAAAFIgBACIgBAAIgjAAIgCAaIAGAAIAPABQAHABAEADQAFADADADQACAFAAAHIAAACQAAAGgCAGQgCAFgEAEQgEADgFACQgGACgHAAgAAwAsIgCgBIgBgCIAAgJQAAgKAFgHQAEgIAKgGIASgLIAEgEIACgEIAAgEQAAgHgEgDQgEgCgKAAIgWABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAgBIACAAIAKgCIALgBQAIAAAFACQAFAAAEADQADADACAEQACAEAAAGIgBAGIgDAGIgFAFIgSALIgJAGIgFAHQgCADAAADIgBAHIAAACIAoAAIACABIABACIAAAFIgBABIgCABgAgXAsIgBgBIgBgCIAAgJQAAgKAEgHQAEgIAKgGIAQgLIAEgEIACgEIABgEQAAgHgEgDQgFgCgHAAIgWABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgFIABgBIABAAIALgCIALgBQAFAAAFACQAGAAADADQAEADABAEQACAEAAAGIgBAGIgCAGIgFAFIgSALIgHAGIgFAHQgCADgBADIgBAHIAAACIAnAAIABABIABACIAAAFIgBABIgBABg");
	this.shape.setTransform(9.9,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,9.1);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAtIgKgDIgBAAIgBgCIAAgEQABgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAWACIAJgCIAFgDQAGgFAAgJIAAgCQAAgJgHgDIgIgDIgLAAIgOAAIgCAAIAAgBIAEgoIAAgBIACgBIApAAIACABIABABIAAAFIgBACIgCAAIgiAAIgDAaIAGAAIAQABQAGABAFADQAEADADADQACAFABAHIAAACQgBAGgBAGQgDAFgEAEQgDADgGACQgGACgHAAgAAvAsIgCgBIgBgBIAAgFIABgCIACgBIATAAIAAhCIgTAIIgCABQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIAAgGIAAgBIABAAIAWgKIADgBIAEAAIACABIABABIAABLIATAAIACABIAAACIAAAFIAAABIgCABgAgXAsIgBgBIgBgCIAAgJQAAgKAFgHQADgIAKgGIAQgLIAFgEIACgEIAAgEQAAgHgEgDQgEgCgIAAIgWABQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAgFIABgBIABAAIALgCIALgBQAGAAAEACQAGAAADADQAEADACAEQABAEAAAGIAAAGIgDAGIgFAFIgSALIgHAGIgFAHQgCADgBADIgBAHIAAACIAnAAIACABIABACIAAAFIgBABIgCABg");
	this.shape.setTransform(9.9,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,9.1);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144,37);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACVNuQgQgNgFgUQgHgYANgVQAMgWAYgGQEBhECjjUQCjjUAAkKQAAieg+iRQg8iNhshtQhthsiNg8QiRg+ieAAQjwAAjFCFQjGCFhbDeQgJAXgXAJQgXAKgXgKQgXgJgKgXQgJgXAJgXQBpkADkiZQDkiZEUAAQC2AACoBHQCiBFB9B+QB+B9BFCiQBHCoAAC2QAAEzi8D0Qi7D0kpBPQgHACgIAAQgUAAgRgMg");
	this.shape.setTransform(87.3,89);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,174.7,178.1);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACSJfQgQgLgGgSQgJgXAKgXQAKgWAXgJQCVg5BbiFQBbiFAAigQAAjTiYiXQiXiYjUAAQiVAAh/BRQh/BQhACHQgLAWgXAIQgXAJgXgLQgWgLgJgXQgIgXALgXQBPimCchjQCchjC4AAQEGAAC6C6QC7C8AAEEQAABjgdBcQgdBdg4BRQg4BPhKA6QhLA7hZAhQgKAFgLAAQgSAAgQgKg");
	this.shape.setTransform(60.9,61.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121.8,123.5);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AqaKSQgSgRAAgZQAAgZASgSII8o8QADgBAEgDQAJgMANgHQAXgKAXAIQAWAIAKAVIDWG8IEyvLIu9E6ID5BxQAWAKAJAXQAJAXgLAXQgKAVgXAJQgXAIgXgKImFiuQgRgIgKgQQgJgQABgSQABgTALgOQALgPASgGIS/mOQAQgFAQADQAQAEAMAMQAMAMAEARQAEAQgFAQImCTKQgFASgPAMQgOALgTABIgEABQgRAAgPgKQgOgJgIgPIjxn5IoOINQgRASgZAAQgZAAgRgSg");
	this.shape.setTransform(68.5,67.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,135.3);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADqBXIgDgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAgUIhOAAIAAAUIgBADIgDABIgaAAIgDgBIgBgDIAAguIABgDIADgBIAMAAIAYhgQABgIAEgEQADgEAFgDQAEgCAFgBIALgBIAKABQAFABAFACQAEADAEAEQADAEACAIIAXBgIANAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAuQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABgADVAhIgUhZIgCgBQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAABIgTBXIAsAAgAApA/QgJgCgHgEQgHgFgEgIQgEgJAAgNIAAhBQAAgNAEgJQAEgIAHgFQAHgEAJgCQAJgCAJAAIAnADQAEABAAADIAAATIgBACIgDACIgpAAQgHAAgDACQgDADAAAIIAAASIA0AAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAIAAATIgBACIgDAAIg0AAIAAAWQAAAHADADQADADAHAAIApAAIADABIABADIAAATQAAADgEABIgOACIgZABQgKAAgIgCgAhnA/IgHgBQgGgBgCgCQgDgDAAgHIAAh3QAAgHADgDQACgCAGgBIAHgBIAdgCQAOAAAMACQALADAJAEQAIAFAEAIQAFAIAAAMIAAAEQAAAKgEAHQgFAIgIAEQAIAEAFAHQAFAGAAALIAAADQAAAGgBAGQgBAFgDAFQgFAIgIAFQgJAGgMACQgLACgNAAgAhXAkIAQABQAIAAAFgCQAGgBADgCQADgCABgEQACgDAAgEIAAgCQAAgHgFgGQgCgCgEgCQgFAAgGAAIgWAAgAhXg5IAAAiIAWAAQAGAAAEgBQAEgBADgDIADgFIABgGIAAgDQAAgIgGgEQgGgEgQAAIgMAAgAF1A/IgDgBIgBgDIAAhPQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCACIgtBNQgDAEgCABIgGABIgTAAQgEAAgCgCQgCgDAAgDIAAiHIABgDIADgBIAXAAIADABIABADIAABTQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAAAAAIACgBIAvhRIAEgEQACgCADAAIAUAAQADAAACACQADADAAADIAACHIgCADIgCABgAiqA/IgCgBIgCgDIgHghIgpAAIgHAhIgBADIgDABIgcAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgBIAeh6QABgIAEgEQADgEAFgDQAEgCAFgBIALgBIAKABQAFABAFACQAEADAEAEQADAEACAIIAeB6IAAABQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAgAi6AAIgNg5IgCAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAABIgMA2IAeAAgAk4A/IgDgBIgBgDIAAg6IgyAAIAAA6IgBADIgDABIgaAAIgDgBIgBgDIAAiLIABgDIADgBIAaAAIADABIABADIAAA1IAyAAIAAg1QAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIADgBIAaAAIADABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIAACLIgBADIgDABg");
	this.shape.setTransform(40.1,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.3,17.5);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADlBIQgGgBgDgCQgCgDAAgGIAAiCIABgCIADgBIAaAAIADABIABACIAAA2IANAAQANAAAMABQALACAJAGIAIAGIAFAFQAFAJAAAOIAAABIgBANIgEAKIgFAIQgEAEgEACQgJAGgLACQgMACgNAAgAD8AuIAEAAIADABIAFAAIAPgBQAHgBADgCQAEgDABgDQABgEAAgFIAAgBQAAgFgBgDQgBgDgEgDQgDgCgHgBIgbAAgAiZBIQgGgBgDgCQgCgDAAgGIAAiCIABgCIADgBIAaAAIADABIABACIAAA2IANAAQANAAAMABQALACAJAGIAIAGIAFAFQAFAJAAAOIAAABIgBANIgEAKIgFAIQgEAEgEACQgJAGgLACQgMACgNAAgAiCAuIAEAAIADABIAFAAIAPgBQAHgBADgCQAEgDABgDQABgEAAgFIAAgBQAAgFgBgDQgBgDgEgDQgDgCgHgBIgbAAgAA/BJQgNAAgIgDQgJgDgEgFQgFgGgCgIQgBgGAAgJIAAhnIABgCIADgCIAaAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABIABACIAABnIAAAEIABADIADADIAFAAIAYAAIAAhxQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIAbAAQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIAABxIAYAAIAFAAIADgDIABgDIAAhrQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAaAAQABAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIAABnQAAAJgCAGQgBAIgFAGQgEAFgJADQgIADgNAAgAgkBJIgCgBIgBgDIAAiLQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAbAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAABIAACLIgBADIgDABgAjeBJIgCgBIgBgDIAAhSQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIgCABIgSAfQgCAEgEAAIgQAAQgEAAgCgEIgSgfIgBgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAABSIgBADIgCABIgbAAIgCgBIgBgCIAAiJQAAgDACgCQACgBADAAIATAAQAGgBADAGIAeA5QABABAAAAQAAABAAAAQABAAAAAAQAAABAAAAIADgDIAeg5QADgGAGABIATAAQADAAACACQACABAAADIAACJIgBACIgCABg");
	this.shape.setTransform(32.9,7.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.8,15.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg5KAFEIAAqIMByVAAAIAAKIg");
	this.shape.setTransform(366,32.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,732,65);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah3ZsMAAAgzXIDvAAMAAAAzXg");
	this.shape.setTransform(12,164.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,329);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A+/XbMAAAgu2MAsBAAAMAR+Au2g");
	this.shape.setTransform(198.5,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,397,300);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,788,300);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("AAAiuIAAFd");
	this.shape.setTransform(0,17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,38);


(lib.Символ65_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("AAAiuIAAFd");
	this.shape.setTransform(0,17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,38);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("ACvAAIldAA");
	this.shape.setTransform(17.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,38,2.9);


(lib.Символ63_1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("ACvAAIldAA");
	this.shape.setTransform(17.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,38,2.9);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,2,0,3).p("AgcAcIA5AAAgcgbIAAAp");
	this.shape.setTransform(2.9,2.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,8.8,8.5);


(lib.Символ108 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ109();
	this.instance.setTransform(36.1,11,1,1,0,0,0,36.1,11);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.2,22.1);


(lib.Символ100 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ101();
	this.instance.setTransform(90.3,83.8,1,1,0,0,0,90.3,83.8);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,187,174);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,189,176);


(lib.Символ97 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ98();
	this.instance.setTransform(43.3,21.8,1,1,0,0,0,43.3,21.8);
	this.instance.alpha = 0.898;
	this.instance.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance.cache(-2,-2,91,48);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7,104,61);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ93();
	this.instance.setTransform(11,7,1,1,0,0,0,11,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(27).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-3.6,33.5,21.3);


(lib.Символ91 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ92();
	this.instance.setTransform(11,7,1,1,0,0,0,11,7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-3.6,33.5,21.3);


(lib.Символ90 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ89();
	this.instance.setTransform(7.1,30,1,1,180,0,0,7.1,7);

	this.instance_1 = new lib.Символ89();
	this.instance_1.setTransform(7.1,7,1,1,0,0,180,7.1,7);

	this.instance_2 = new lib.Символ89();
	this.instance_2.setTransform(39.7,30,1,1,0,180,0,7.1,7);

	this.instance_3 = new lib.Символ89();
	this.instance_3.setTransform(39.7,7,1,1,0,0,0,7.1,7);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.8,50.5,40.7);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ90();
	this.instance.setTransform(-21.8,17.3,1,1,0,0,0,23.4,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-3,50.5,40.7);


(lib.Символ87 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(61.3,14.8,1,1,0,0,0,7.1,7);

	// Слой 1
	this.instance_1 = new lib.car();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
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


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ69();
	this.instance.setTransform(49.5,51,1,1,0,0,0,49.5,51);
	this.instance.alpha = 0.57;
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.Символ69();
	this.instance_1.setTransform(49.5,51,1,1,0,0,0,49.5,51);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ66_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.setTransform(49.5,51,1,1,0,0,0,49.5,51);

	this.instance_1 = new lib.Символ67();
	this.instance_1.setTransform(49.5,51,1,1,0,0,0,49.5,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,102);


(lib.Символ64_1 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ65();
	this.instance.setTransform(57,55,0.8,0.8,0,0,0,57,55);
	this.instance.alpha = 0.691;
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.Символ65();
	this.instance_1.setTransform(57,55,0.8,0.8,0,0,0,57,55);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.4,11,91.2,88);


(lib.Символ62_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(57,55,1,1,0,0,0,57,55);

	this.instance_1 = new lib.Символ64_1();
	this.instance_1.setTransform(57,55,1,1,0,0,0,57,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,110);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ61();
	this.instance.setTransform(51,50,0.8,0.8,0,0,0,51,50);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.Символ61();
	this.instance_1.setTransform(51,50,0.8,0.8,0,0,0,51,50);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.2,10,81.6,80);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(51,50,1,1,0,0,0,51,50);

	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(51,50,1,1,0,0,0,51,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,100);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ57();
	this.instance.setTransform(54,54.5,0.8,0.8,0,0,0,54,54.5);
	this.instance.alpha = 0.621;
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.Символ57();
	this.instance_1.setTransform(54,54.5,0.8,0.8,0,0,0,54,54.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.8,10.9,86.4,87.2);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.setTransform(54,54.5,1,1,0,0,0,54,54.5);

	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(54,54.5,1,1,0,0,0,54,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,109);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ62_1();
	this.instance.setTransform(57,55,1,1,0,0,0,57,55);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,110);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(54,54.5,1,1,0,0,0,54,54.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,109);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.setTransform(51,50,1,1,0,0,0,51,50);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,100);


(lib.Символ49 = function() {
	this.initialize();

	// pulya.png
	this.instance = new lib.Символ52();
	this.instance.setTransform(91.1,-6.5,0.77,0.77,0,0,0,54.1,54.5);

	// mina.png
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(123.6,77.4,0.77,0.77,0,0,0,51.1,50);

	// air.png
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(156.7,156,0.77,0.77,0,0,0,57,55);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49.5,-48.4,151.1,246.8);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(198.5,150,1,1,0,0,0,198.5,150);
	this.instance.alpha = 0.621;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,397,300);


(lib.Символ45 = function() {
	this.initialize();

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

	this.addChild(this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,997.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(4.5,498.9,1,1,0,0,0,4.5,498.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1158.9},337,cjs.Ease.get(1)).to({y:498.9},92,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.1,997.7);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 13
	this.instance = new lib.Символ43();
	this.instance.setTransform(987.8,3.1,1,1,0,0,0,9.9,4.5);

	// Слой 12
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(905.9,3.1,1,1,0,0,0,9.9,4.5);

	// Слой 11
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(824.4,3.2,1,1,0,0,0,9.9,4.5);

	// Слой 10
	this.instance_3 = new lib.Символ40();
	this.instance_3.setTransform(743,3.1,1,1,0,0,0,10.1,4.5);

	// Слой 9
	this.instance_4 = new lib.Символ39();
	this.instance_4.setTransform(661.5,3.1,1,1,0,0,0,10,4.5);

	// Слой 8
	this.instance_5 = new lib.Символ38();
	this.instance_5.setTransform(580.1,3.1,1,1,0,0,0,10.1,4.5);

	// Слой 7
	this.instance_6 = new lib.Символ37();
	this.instance_6.setTransform(498.7,3.1,1,1,0,0,0,10,4.5);

	// Слой 6
	this.instance_7 = new lib.Символ36();
	this.instance_7.setTransform(417.2,3.1,1,1,0,0,0,10.1,4.5);

	// Слой 5
	this.instance_8 = new lib.Символ35();
	this.instance_8.setTransform(335.8,3.1,1,1,0,0,0,10,4.5);

	// Слой 4
	this.instance_9 = new lib.Символ34();
	this.instance_9.setTransform(254.3,3.1,1,1,0,0,0,10.2,4.5);

	// Слой 3
	this.instance_10 = new lib.Символ33();
	this.instance_10.setTransform(172.8,3.1,1,1,0,0,0,9.9,4.5);

	// Слой 2
	this.instance_11 = new lib.Символ32();
	this.instance_11.setTransform(91.4,3.1,1,1,0,0,0,9.9,4.5);

	// Слой 1
	this.instance_12 = new lib.Символ31();
	this.instance_12.setTransform(9.9,3.1,1,1,0,0,0,9.9,4.5);

	this.addChild(this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.4,997.7,9.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ29();
	this.instance.setTransform(72,18.5,1,1,0,0,0,72,18.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},49,cjs.Ease.get(1)).to({alpha:1},50,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(72,18.5,1,1,0,0,0,72,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,37);


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


(lib.Символ21 = function() {
	this.initialize();

	// mouse
	this.instance = new lib.Символ24();
	this.instance.setTransform(-131.6,24.8,0.202,0.202,0,0,0,68.5,67.7);

	// text
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-48.5,11.4,1.19,1.19,0,0,0,40.1,8.7);

	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(-49.9,36.3,1.416,1.416,0,0,0,32.9,7.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.5,1,144.8,46.1);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(72,18.5,1,1,0,0,0,72,18.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144,37);


(lib.Символ16 = function() {
	this.initialize();

	// numb
	this.instance = new lib.Символ44();
	this.instance.setTransform(11.5,-185.5,1,1,0,0,0,4.5,498.9);

	// bg
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(12,164.5,1,1,0,0,0,12,164.5);
	this.instance_1.alpha = 0.621;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
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


(lib.Символ11 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(371.5,221.6,1,1,0,0,0,40.1,18.6);

	// Слой 3
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(200.4,68,1,1,0,0,0,72,18.5);

	// Слой 2
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(230.4,164.5,2.47,2.47,0,0,0,33.9,7.8);

	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(208.5,118.1,2.08,2.08,0,0,0,38.5,7.5);

	// Слой 1
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(198.5,150,1,1,0,0,0,198.5,150);
	this.instance_4.alpha = 0.621;

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,397,300);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ66_1();
	this.instance.setTransform(49.5,51,1,1,0,0,0,49.5,51);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215.6,102);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ91();
	this.instance.setTransform(23.6,9.8,1,1,0,0,0,11,7);

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(26.4,-3.2,1,1,0,0,0,22.6,1.7);

	// Слой 1
	this.instance_2 = new lib.Символ81();
	this.instance_2.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	// Слой 4
	this.instance_3 = new lib.Символ98();
	this.instance_3.setTransform(30.1,41.4,1,1,0,0,0,43.3,21.8);
	this.instance_3.alpha = 0.898;
	this.instance_3.filters = [new cjs.BlurFilter(13, 13, 1)];
	this.instance_3.cache(-2,-2,91,48);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-4.9,104,79.6);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ78();
	this.instance.setTransform(130,6.8,1,1,0,0,0,65.6,5.2);

	// Слой 1
	this.instance_1 = new lib.Символ77();
	this.instance_1.setTransform(97,88.5,1,1,0,0,0,97,88.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,196.7,177);


(lib.Символ61_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 66
	this.instance_1 = new lib.Символ66();
	this.instance_1.setTransform(44,74.3,1,1,0,0,0,0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:76.8},10,cjs.Ease.get(1)).to({y:74.3},9,cjs.Ease.get(1)).wait(1));

	// Символ 65
	this.instance_2 = new lib.Символ65_1();
	this.instance_2.setTransform(43.5,17.5,1,1,0,0,0,0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:15},10,cjs.Ease.get(1)).to({y:17.5},9,cjs.Ease.get(1)).wait(1));

	// Символ 64
	this.instance_3 = new lib.Символ64();
	this.instance_3.setTransform(72.3,45,1,1,0,0,0,17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:74.8},10,cjs.Ease.get(1)).to({x:72.3},9,cjs.Ease.get(1)).wait(1));

	// Символ 63
	this.instance_4 = new lib.Символ63_1();
	this.instance_4.setTransform(15.5,45,1,1,0,0,0,17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:13},10,cjs.Ease.get(1)).to({x:15.5},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_5 = new lib.Символ62();
	this.instance_5.setTransform(58.3,32.9,1,1,180,0,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:3,scaleX:0.87,scaleY:0.87,x:56.4,y:34.5},10,cjs.Ease.get(1)).to({regX:2.9,scaleX:1,scaleY:1,x:58.3,y:32.9},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_6 = new lib.Символ62();
	this.instance_6.setTransform(58.5,57.1,1,1,0,0,180,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.87,scaleY:0.87,x:56.6,y:55.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:58.5,y:57.1},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_7 = new lib.Символ62();
	this.instance_7.setTransform(29.1,32.9,1,1,0,180,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.87,scaleY:0.87,x:31,y:34.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:29.1,y:32.9},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_8 = new lib.Символ62();
	this.instance_8.setTransform(28.9,57.1,1,1,0,0,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:3,scaleX:0.87,scaleY:0.87,x:30.9,y:55.5},10,cjs.Ease.get(1)).to({regX:2.9,scaleX:1,scaleY:1,x:28.9,y:57.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-1.4,94.8,94.8);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(24.1,-42.1,1,1,0,0,0,77.5,44.1);

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(0.1,0,1,1,0,0,0,198.5,150);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.4,-150,397,300);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(26.7,-42.1,1,1,0,0,0,77.5,44.1);

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(0.1,0,1,1,0,0,0,198.5,150);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.4,-150,397,300);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(24.1,-42.1,1,1,0,0,0,77.5,44.1);

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(0.1,0,1,1,0,0,0,198.5,150);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.4,-150,397,300);


(lib.Символ107 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(68.7,22.3,1,1,0,0,0,7.1,7);

	// Слой 1
	this.instance_1 = new lib.gun2();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,72);


(lib.Символ104 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(57.9,16.7,1,1,0,0,0,7.1,7);

	// Слой 1
	this.instance_1 = new lib.car();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,57);


(lib.Символ102 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ88();
	this.instance.setTransform(68.7,18.3,1,1,0,0,0,7.1,7);

	// Слой 1
	this.instance_1 = new lib.gun1();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
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


(lib.Символ18 = function() {
	this.initialize();

	// number
	this.instance = new lib.Символ46();
	this.instance.setTransform(534.9,12,1,1,0,0,0,498.9,4.5);

	// bg
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(365.9,32.5,1,1,0,0,0,365.9,32.5);
	this.instance_1.alpha = 0.621;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1033.7,65);


(lib.Символ15 = function() {
	this.initialize();

	// hor
	this.instance = new lib.Символ18();
	this.instance.setTransform(343.9,321.5,1,1,0,0,0,365.9,32.5);

	// ver
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(12,164.5,1,1,0,0,0,12,164.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-684.4,1033.7,1038.4);


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

	// 2
	this.instance = new lib.Символ49();
	this.instance.setTransform(-96.5,107.9,1,1,0,0,0,77.5,44.1);

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(-120.5,150,1,1,0,0,0,198.5,150);

	this.instance_2 = new lib.Анимация1("synched",0);
	this.instance_2.setTransform(-150.5,150);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.setTransform(123.5,150);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация3("synched",0);
	this.instance_4.setTransform(199.5,150);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_2}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true,x:123.5},3,cjs.Ease.get(1)).wait(1).to({_off:false,x:-150.5},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},3,cjs.Ease.get(1)).to({_off:true,x:199.5},1,cjs.Ease.get(1)).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},1,cjs.Ease.get(1)).to({_off:true,x:-150.5},4).wait(1));

	// 1
	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(198.5,150,1,1,0,0,0,198.5,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:-141.5},3,cjs.Ease.get(1)).wait(1).to({x:198.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319,0,716,300);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ94();
	this.instance.setTransform(26.3,5.2,1,1,0,0,0,16.7,10.7);

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(22.6,-7.1,1,1,0,0,0,22.6,1.7);

	// Слой 1
	this.instance_2 = new lib.Символ85();
	this.instance_2.setTransform(33.5,28.5,1,1,0,0,0,33.5,28.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	// Слой 4
	this.instance_3 = new lib.Символ97();
	this.instance_3.setTransform(29.9,38.6,1,1,0,0,0,43.3,21.8);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-8.8,104,80.6);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ96();
	this.instance.setTransform(55.3,25.9,1,1,0,0,0,16.7,10.7);

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(34.6,-2.7,1,1,0,0,0,22.6,1.7);

	// Слой 1
	this.instance_2 = new lib.Символ84();
	this.instance_2.setTransform(42.5,29.5,1,1,0,0,0,42.5,29.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.4,85,63.5);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ95();
	this.instance.setTransform(50.3,8.7,1,1,0,0,0,16.7,10.7);

	// Слой 2
	this.instance_1 = new lib.Символ83();
	this.instance_1.setTransform(38.6,-5.1,1,1,0,0,0,22.6,1.7);

	// Слой 1
	this.instance_2 = new lib.Символ86();
	this.instance_2.setTransform(40,36,1,1,0,0,0,40,36);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6.8,80,78.9);


(lib.Символ2 = function() {
	this.initialize();

	// gun2.png
	this.instance = new lib.Символ6();
	this.instance.setTransform(436.9,237.3,1,1,0,0,0,40,36);

	// gun1.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(375,63.4,1,1,0,0,0,42.5,29.5);

	// Слой 7
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(406,150.6,1,1,0,0,0,33.5,28.5);

	// car.png
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(466,111,1,1,0,0,0,33.5,28.5);

	// basa.png
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(568.5,163,1,1,0,0,0,97,88.5);

	// bg
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(394,150,1,1,0,0,0,394,150);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,788,300);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(394,150,1,1,0,0,0,394,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,788,300);


(lib.Символ67_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ61_1();
	this.instance_2.setTransform(46.6,44,1,1,0,0,0,44.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:38.1},9,cjs.Ease.get(1)).to({x:46.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,94.8,94.8);


(lib.Символ68_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ67_1();
	this.instance_1.setTransform(45.9,45.9,1,1,0,0,0,45.9,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:40.9},15,cjs.Ease.get(1)).to({y:45.9},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,94.8,94.8);


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
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,94.8,94.8);


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
p.nominalBounds = new cjs.Rectangle(-100.9,-547.4,1412.6,1131.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/ball.jpg", id:"ball"},
		{src:"images/da.png", id:"da"},
		{src:"images/hapyy.jpg", id:"hapyy"},
		{src:"images/net.png", id:"net"},
		{src:"images/oskar.png", id:"oskar"},
		{src:"images/zal.jpg", id:"zal"},
		{src:"images/сry.jpg", id:"сry"}
	]
};



// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.da = function() {
	this.initialize(img.da);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.hapyy = function() {
	this.initialize(img.hapyy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,527,400);


(lib.net = function() {
	this.initialize(img.net);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.oskar = function() {
	this.initialize(img.oskar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,300);


(lib.zal = function() {
	this.initialize(img.zal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,412);


(lib.сry = function() {
	this.initialize(img.сry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,310);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg7DAa4MAAAg1vMB2HAAAMAAAA1vg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-378,-172,756.2,344.1);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC4BsIAAiiIhBAAIAAg1IC/AAIAAA1IhBAAIAACigAhJBsIAAjXICtAAIAAAzIhyAAIAAAhIBnAAIAAAuIhnAAIAAAiIBzAAIAAAzgAirBsIAAhSIhNAAIAABSIg9AAIAAjXIA9AAIAABRIBNAAIAAhRIA8AAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31,-10.8,62.1,21.7);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BpIAAgjIhdAAIgEAjIgrAAIAAhNIAPAAIAIgZIAGgZIADghIABgwICFAAIAACDIAUAAIgFBNgAhwg7QgCAkgCAOQgDARgHAUIA0AAIAAhYIgmAAgACNBGIgNgfIhDAAIgNAfIgxAAIBJiuIAvAAIBKCugAByABIgTgwIgUAwIAnAAg");
	this.shape.setTransform(-0.4,-0.4);

	// Слой 1
	this.instance = new lib.net();
	this.instance.setTransform(-39.4,-39.4,0.788,0.788);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-39.4,78.9,78.9);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hapyy();
	this.instance.setTransform(-234,-177.6,0.888,0.888);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-234,-177.6,468.1,355.3);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("ArqA3QgMgCgLgFIgMgGIgIgEQgIgGgJgIQgHgIgGgIQgHgIgEgKIgDgGIgDgPQgCgLAAgMIAAgCIA9AAIAAACQAAALAEALQAEAJAFAHIACADQAIAIAKAFQAKACANAAQAMAAAKgCQAKgEAHgJIADgDQAGgHACgJQAFgKAAgMIAAgCIA9AAIAAACQAAALgDALIgDAQIgDAGQgEAKgHAHQgGAJgHAHQgJAIgJAHIgHAEIgMAGQgLAFgMACQgMACgMAAQgMAAgMgCgAJhAyIAEguIAOABQAIABAEgEQAHgDAEgMIABgDQAEgOACgZIAAgBIA5AAQgBAYgCALIgBAFIgFAVQgDAMgGAJQgEAIgGAGIgCACQgFAEgFADQgGADgIACIgPACQgQAAgUgGgAk/AzQgLgDgLgGIgBgBIAXgqQALAGANAAQAFAAAEgCQAGgCAEgEIgcg1IB1AAIgeA5QgHAPgIAKQgIAJgHAHIgCABQgIAGgLAEQgKADgMAAQgQAAgNgFgApWAyIAFguIANABQAJABAEgEQAHgDADgMIABgDQAEgOADgZIAAgBIA5AAQgBAYgCALIgBAFIgGAVQgDAMgFAJQgFAIgGAGIgBACQgFAEgFADQgHADgHACIgQACQgPAAgVgGgAPuA1IAAhtIA7AAIAABtgANhA1IAAhtIA8AAIAAAQIAKgQIA/AAIhNBtgAL/A1IAAhtIA8AAIAABtgAGLA1IAAhtIA9AAIAABtgAD1A1IAAhtIA8AAIAABtgABpA1IAAhtIA7AAIAAAQIALgQIA+AAIhMBtgAAHA1IAAhLIgJAGIgPAEQgPAFgPAAQgRgBgOgFIgIgDQgIgEgGgGQgKgKgFgOIgBgGIC2AAIAABtgAm4A1IAAhtIA9AAIAABtgAuhA1IAAhtIA7AAIAABtgAwoA1IAAhtIA8AAIAABtg");
	this.shape.setTransform(0,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("APuA3IAAgMIgIAMIg/AAIBJhpIA5AAIAABpgANhA3IAAhpIA8AAIAABpgAL/A3IAAg2IgyAAIAAAIIgCAkIgBAKIg5AAIABgKIAChAIAAgfICnAAIAABpgAGLA3IAAg2IhAAAIAAgzIC+AAIAAAzIhBAAIAAA2gAD1A3IAAgMIgIAMIg+AAIBJhpIA5AAIAABpgABpA3IAAhpIA7AAIAABpgAh0A3IgCgKIgBgOIAAhRIA7AAIAABAQAAAJACAGQACAGADAFQADADAFACIACABQAFACAJAAQAKAAALgDQAIgDAHgGIAAhWIA7AAIAABpgAkwA3Ig4hpIBCAAIAyBlIAuhlIBBAAIg2BpgAm4A3IAAg2IgyAAIAAAIIgCAkIAAAKIg5AAIABgKIAChAIAAgfICnAAIAABpgAqaA3IgBgKIgEgLQgEgKgHgIQgHgJgLgEQgKgDgMAAQgMAAgLADQgKAEgHAJQgHAIgEAKIgDALIgBAKIg9AAIAAgKIACgLQACgLAEgKQAEgKAHgHQAGgJAIgIQAHgHAKgHQAJgGALgEQALgFALgCQAMgCANAAQAMAAALACQAMACALAFQAKAEAKAGQAJAHAIAHQAIAIAGAIQAGAHAEALQAEAKACALIADALIAAAKgAuhA3IAAg2IhLAAIAAA2Ig8AAIAAhpIDCAAIAABpg");
	this.shape_1.setTransform(0,-5.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.5,-11.3,213.1,22.6);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiDA3QgLgCgLgFIgMgGIgIgEQgJgGgIgIQgIgIgGgIQgGgIgEgKIgDgGIgEgPQgCgLAAgMIAAgCIA+AAIAAACQAAALAEALQADAJAGAHIACADQAIAIAKAFQAKACAMAAQAMAAALgCQAKgEAHgJIADgDQAFgHADgJQAEgKAAgMIAAgCIA8AAIAAACQAAALgDALIgEAQIgCAGQgCAKgHAHQgGAJgIAHQgIAIgJAHIgHAEIgNAGQgLAFgLACQgMACgMAAQgNAAgMgCgApSA2QgOgEgMgGIgDgCQgJgGgIgGQgJgJgIgKIAsgdIACACQAJAKAKAFQAMAEAPAAQAJAAAJgCQAIgBAGgFQAGgFAEgGIABgCQAFgIACgIIhHAAIAAgWICHAAIAAACQAAAMgCALIgEAPIgDAHQgEAJgGAJQgGAIgIAIQgHAIgJAFIgGAEIgNAGQgKAEgLADQgLACgMAAQgRAAgOgDgANDA2QgOgDgMgEIgKgFIgLgHIgTgOIAfgmIABABQAMALAOAFQAHACAJACQAJACAJAAQAQAAAJgGQAIgEAAgKIAAgCQgBgHgHgFQgJgEgRAAIgXAAIAAgYIBXAAIAHAEQAIAFAFAGQAFAGACAIQACAFABAGIAAAHQAAANgGAMQgFAMgMAKIgGAEQgJAGgMADQgQAGgUgBQgSAAgPgCgAK7A1IgQgnIhTAAIgQAnIg/AAIAvhtIA7AAIgKAZIAxAAIgJgZIA8AAIAvBtgAFKA1IAAhtIA8AAIAAABIAdAAQAHAAAGgBIBMAAIgCAEQgDAIgFAFIgLALQgJAIgLAEIgKADQgRAFgUABIgeAAIAAA8gABdA1IAAhtIA8AAIAABtgAlvA1IAAhtIA8AAIAABtgAu5A1IAAhtICfAAIAKAFQAIAFAFAGQAGAHADAIIACAJIABALQAAAMgGALQgFAKgLAJIgIAFQgIAEgKACQgPAEgTABgAt+AEIAuAAQAOAAAHgEQAIgEAAgKIAAgCQgBgIgGgFQgIgFgPAAIgtAAg");
	this.shape.setTransform(0,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ANIA3IAAgVIAVAAQAQAAAIgGQAIgFgBgJQABgIgIgGQgHgDgNAAQgOAAgQAEQgQAGgKAJIgdghIARgPQAKgGAKgFQAMgGANgCQANgDAPAAQASAAAQAEQAOAFALAIQALAIAFALQAHAKgBALQAAAJgCAIQgCAHgFAHQgDAFgHAFIgNAIIAHADgAKUA3IgPglIgPAlIg7AAIAuhqIA5AAIAuBqgAGzA3IABgBQAGgCAFgDIADgEIAEgFQACgGAAgHQAAgGgCgGQgDgFgEgDQgFgEgGgCQgHgBgIAAIgcAAIAAA3Ig9AAIAAhpIBeAAQAUABARAEQAQAFANALQALAJAHAPQAGASAAAMQAAAKgCAIIAAACIgDAKgABgA3IAAg2IhBAAIAAgzIC+AAIAAAzIhBAAIAAA2gAgwA3IgBgKIgDgLQgEgKgIgIQgHgJgKgEQgLgDgLAAQgNAAgKADQgKAEgIAJQgGAIgEAKIgDALIgCAKIg9AAIABgKIABgLQADgLAEgKQAEgKAGgHQAHgJAHgIQAIgHAJgHQAKgGAKgEQALgFAMgCQAMgCAMAAQAMAAAMACQAMACALAFQAKAEAJAGQAJAHAJAHQAHAIAGAIQAGAHADALQAEAKACALIACALIABAKgAlsA3IAAg2IhCAAIAAgzIC/AAIAAAzIhBAAIAAA2gApHA3IAAgVIBGAAQgCgIgFgGQgFgHgGgFQgGgFgIgDQgIAAgJAAQgOAAgMAEQgMAFgJAKIgpggQAHgKAJgGQAJgIALgFQALgGAMgDQANgDAQAAQALAAAMACQAMACAKAFQAKAEAKAGQAIAGAIAIQAIAIAGAIQAGAIAEAKQAEAKACALIACALIAAAKgAu3A3IAAhpIBwAAQAVABAOAEQAOAFAKAKQAHAHAEAIQADAKAAAJQAAAJgCAHQgDAIgEAGQgEAGgHAEIgOAIIAIADgAt8AjIAmAAQAOAAAHgFQAIgEgBgKQABgJgHgGQgHgCgOAAIgnAAg");
	this.shape_1.setTransform(-0.2,-5.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.4,-11.3,191,22.6);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsjBPIAAgrIhzAAIgEArIg2AAIAAhdIATAAIAKgfIAFgXIACgKIAAgBIA8AAIgBALIgBAFQgEAYgIAZIBAAAIAAhBIA8AAIAABBIAZAAIgHBdgANEAmQgMgCgKgEQgLgEgJgHQgJgFgIgJQgIgHgGgHQgGgJgFgLQgEgKgCgKQgCgLAAgKIAAgDIAAgIIA+AAIgBAIIAAADQABAKADAKQAEAKAIAJQAHAIAKAEQALAFAMAAQAMAAAKgFQAKgEAIgIQAHgIAEgLQADgKABgKIAAgDIgBgIIA+AAIAAAIIAAADQAAAKgCAKQgCALgFAKQgEALgGAIQgGAIgIAHQgIAIgJAGQgKAGgKAFQgLAEgMACQgLACgNABQgMgBgMgCgAKNAkIAAhzIA8AAIAABzgAIBAkIAAhzIA7AAIAAAWIAPgWIA/AAIhRBzgAEwAkIAAhzIA9AAIAAAIIAcAAQAIAAAHgCQAFgCAFgEIBDAAIgEALQgEAHgFAGIgLALQgMAKgRAFQgRAFgVAAIgdAAIAAA8gADOAkIAAhzIA8AAIAABzgABIAkIAAhzIA8AAIAABzgAgLAkIgQglIhUAAIgPAlIg/AAIhIAAIg3hPIgWAZIAAA2Ig8AAIAAhzICBAAIBQBzIAxhzIA7AAIgMAgIAxAAIgMggIA6AAIAxBzgApFAkIAAhzIA7AAIAABzgArSAkIAAhzIA8AAIAAAWIAPgWIA+AAIhQBzg");
	this.shape.setTransform(0,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AOBA0QgBgHgCgIQgEgKgIgIQgHgIgKgFQgLgFgMAAQgMAAgKAFQgKAFgIAIQgHAIgEAKQgCAIgBAHIg+AAQAAgHACgIQACgKAEgLQAFgKAGgHQAGgJAIgIQAIgHAJgHQAKgGAKgEQALgFALgBQAMgDANAAQAMAAAMADQALABALAFQALAEAJAGQAJAHAIAHQAIAHAGAKQAGAGAEALQAFAKACALIACAPgAJ7A0IAAgGIgDAGIg/AAIBFhiIA5AAIAABigAHvA0IAAhiIA7AAIAABigAGQA0IAAAAQAFgEACgFQADgGAAgGQAAgIgDgFQgCgFgFgEQgEgDgHgCQgGgCgIAAIgcAAIAAAyIg9AAIAAhiIBdAAQAVAAARAEQAQAGAMAJQAMALAGAOQAHASAAAMQAAAKgCAIIgBAGgAC8A0IAAgvIhKAAIAAAvIg8AAIAAhiIDCAAIAABigAhKA0IgMgfIgNAfIg7AAIArhkIA6AAIArBkgAmgA0IAAhiIA8AAIAABWIBLhWIBHAAIhSBbIAFAHgApXA0IAAgGIgEAGIg+AAIBFhiIA4AAIAABigArkA0IAAhiIA8AAIAABigAtQA0IAAgvIgvAAIAAACIgDAtIg8AAIAEgpIABg5IClAAIAABig");
	this.shape_1.setTransform(1.8,-8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-97.7,-13.2,195.6,26.5);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAA935").s().p("AjfA4QgLgDgKgEQgKgEgJgGQgJgFgHgIQgIgIgGgIQgGgJgEgJQgFgKgCgMIgBgHIgBgQIAAgEIA+AAIAAAEQAAAIACAIIACAHQAEAKAGAIQAHAIAKAEQAKADALAAQAIAAAHgCQAHgBAGgDQAKgFALgOIAtAfQgIALgJAJQgKAJgLAGQgMAGgOAEQgPAEgRAAQgMAAgLgCgAndA4QgMgCgKgFQgLgEgJgGQgJgGgIgIQgIgIgGgIQgGgJgFgJQgEgKgCgLIgBgHIgBgQIAAgEIA9AAIAAAEQAAAIACAIIACAGQAEALAIAIQAHAIAKAEQALADAMAAQAMAAAKgDQAKgDAIgJQAHgHAEgMIACgGQACgHAAgJIAAgEIA9AAIAAAEIgBAQIgBAGQgCAMgFAKQgEAJgGAIQgGAJgIAHQgIAIgJAHQgKAFgKAFQgLAFgMACQgLACgNAAQgMAAgMgCgAGHA2IAAhvIA9AAIAAADIAcAAQAIAAAHgCIAEgBIBHAAIgCAGQgEAIgFAFIgLALQgMALgRAEQgRAFgVABIgdAAIAAA8gAEyA2IgQgnIhTAAIgQAnIg/AAIAwhvIA7AAIgLAbIAxAAIgKgbIA9AAIAvBvgAA4A2Ig2hPIgUAYIAAA3Ig9AAIAAhvICCAAIBNBvg");
	this.shape.setTransform(-0.2,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8C160").s().p("AHwA2IAHgEQAFgEACgFQACgGAAgHQAAgGgCgGQgCgFgFgDQgEgEgHgCQgGgCgJAAIgbAAIAAA2Ig9AAIAAhnIBdAAQAVABARAEQAQAFAMALQAMAJAGAPQAHASAAAMQAAAKgDAIIgCAKgAEFA2IgOgjIgOAjIg7AAIAshoIA7AAIAtBogAhRA2IAAhnIA9AAIAABWIBIhWIBIAAIhTBcIAHALgAk6A2IACgTQACgLAFgKQAEgKAFgIQAGgIAJgIQAHgIAJgGQAJgGALgEQAKgFALgCQAMgCAMAAQAQAAAOADQANAEAMAGQALAGAJAIQAJAJAIAKIgsAgQgLgMgKgGQgMgHgPAAQgLAAgLAFQgJAEgHAIQgGAIgFAKQgDAJAAAKgAmQA2QAAgJgEgKQgDgKgIgIQgHgJgKgEQgLgEgMAAQgMAAgKAEQgKAEgIAJQgHAIgEAKQgDAJgBAKIg+AAIADgTQACgLAEgKQAEgKAGgHQAHgJAIgIQAIgHAJgHQAJgGALgEQAKgFAMgCQAMgCAMAAQANAAALACQAMACALAFQALAEAJAGQAJAHAIAHQAIAIAGAIQAGAHAEALQAEAKACALIADATg");
	this.shape_1.setTransform(0,-5.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.3,-11.3,114.6,22.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],0,-5.9,0,5.9).s().p("AAXAqIgDgIQgIgNg0AAQgPAAgBgEQgCgEgGAAQgFAAgLAHQgLAGgFAAQgQAAgCgIIACgNIAAAAIgOAHQgKAHgJAAQgVAAgCgDQgFgHgMgEQgBABAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEAAAwIAAALQgCAHgFAEIgqABIgDAEQgEAEgEABIgRAAQgHgDgCgEIgGgJIgWAAQgGADgMAMQgIAIgMAAQgKAAgDgEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],0,-5.8,0,6).s().p("AAXArQgBgFgDgCQgIgLgxAAQgRAAgBgFQgCgGgGAAQgFAAgLAGQgKAGgGAAQgPAAgDgHIACgNIAAAAIgOAHQgKAHgJgBQgUgBgCgDQgFgFgNgEQgBABAAAAQgBAAAAAAQAAgBAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEAAAuIAAANQAAAHgHADIgqACIgDAEQgEAEgEABQgIgDgJADQgHgDgCgEIgGgJIgWAAQgGADgLAKQgIAGgNABIgGABQgFAAgCgCg");
	this.shape_1.setTransform(0,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],0,-5.7,0,6.1).s().p("AAXAsQgCgGgDgBQgIgIgugBQgTAAgCgGQgCgIgFAAQgGAAgKAGQgKAGgGgBQgOAAgEgFIABgNIAAgBIgNAIQgKAGgJgCQgTgBgDgCQgGgFgNgDQAAABgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQAAgKBLgHQBYgJAZgMQBTgJAYABQBRAEAAArQAAANABADQAAAGgJACIgpAEIgEAEQgDADgEABQgIgFgKAFQgGgCgDgEIgGgKIgVAAIgRALQgJAFgMACIgLACIgCAAg");
	this.shape_2.setTransform(0,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.1,-5.7,-0.1,6.1).s().p("AARAnQgIgHgsAAQgVAAgBgJQgCgIgGAAQgFAAgKAFQgKAFgGAAQgOgBgFgEIACgNIAAAAIgOAHQgKAHgJgDIgVgEQgGgEgNgDQgBABAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEAAApQABAQABADQABAGgKAAIgqAFIgDAEQgEAEgEABQgHgIgKAIQgHgDgCgEIgGgJIgWAAIgRAJIgUAGIgOAEQgBgFgEAAg");
	this.shape_3.setTransform(0.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.1,-5.7,-0.1,6.1).s().p("AAQAoQgIgFgpAAQgXgBgCgJQgCgKgFAAQgGAAgJAFQgKAEgGgBQgNgBgGgCIABgNIAAAAIgNAHQgKAHgJgEIgVgEQgGgDgOgDQAAABAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgCQAAgKBLgHQBYgIAZgNQBTgJAYABQBRAEAAAnQAAASACADQACAGgMgBIgpAGIgEAEQgDAEgEABQgHgLgLALQgGgDgDgEIgGgJIgVAAQgHADgKADQgIABgMAFIgOAHQgCgFgEABg");
	this.shape_4.setTransform(0.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.1,-5.7,-0.1,6.1).s().p("AAPAoQgHgCgogBQgYAAgCgLQgCgLgFAAQgGAAgJAEQgJAFgHgCIgTgCIABgNIAAAAIgNAHQgKAHgKgFQgOgEgFgBIgVgEQAAABgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAZgNQBTgJAYABQBRAEAAAnQAAASADADQACAGgNgCIgpAHIgEAEQgDAEgEABQgGgOgMAOQgGgDgDgEIgGgJIgVAAQgHADgJABQgJgBgMAGQgLAGgDAEQgCgFgFABg");
	this.shape_5.setTransform(0.1,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.2,-5.7,-0.2,6.1).s().p("AAOApIgsgBQgbAAgBgMQgCgNgGAAQgFAAgJAEQgJAEgHgCQgLgCgJABIACgNIAAAAIgOAHQgKAHgJgGQgNgFgGAAIgVgDQgBABAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEABAlQAAAUADAEQADAFgOgEIgqAJIgDAEQgEAEgEABQgFgQgMAQQgHgDgCgEIgGgJIgWAAQgGADgJgBQgJgDgMAHQgLAIgEAFQgBgFgGACg");
	this.shape_6.setTransform(0.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.2,-5.7,-0.2,6.1).s().p("AANAqQgHABgjAAQgcAAgCgOQgCgOgFAAQgGAAgIADQgIAEgIgCQgKgCgKACIABgNIAAAAIgNAHQgKAHgKgGQgMgHgGABIgWgCQAAABgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAZgNQBTgJAYABQBRAEAAAiQABAXADAEQAEAFgQgFIgpAKIgEAEQgDAEgEABQgFgTgNATQgGgDgDgEIgGgJIgVAAQgHADgJgDQgIgFgMAIQgLAJgEAHQgCgFgGADg");
	this.shape_7.setTransform(0.2,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.3,-5.8,-0.3,6).s().p("AgbAtQgfgBgBgPQgCgPgGAAQgFAAgIADQgIADgIgDQgJgCgMAEIACgNIAAAAIgOAHQgKAHgJgHQgLgIgHACIgWgBQgBABAAAAQgBAAAAAAQAAgBAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEABAgQAAAZAFAEQAEAFgRgGIgqALIgDAEQgEAEgEABQgEgWgNAWQgHgDgCgEIgGgJIgWAAQgGADgJgGQgIgGgMAKQgMAJgEAJQgBgFgHAEQgGADgYAAIgJAAg");
	this.shape_8.setTransform(0.3,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.3,-5.9,-0.3,5.9).s().p("AgaAuQggAAgCgRQgCgRgFAAQgGAAgHADQgIACgIgCQgJgDgMAGIABgNIAAgBIgNAIQgKAGgKgIQgJgIgIACQgIABgPAAQAAAAgBAAQAAABAAgBQgBAAAAgCQAAgBAAgBQAAgKBLgHQBYgJAZgMQBTgJAYABQBRAEAAAdQABAbAFAFQAFAEgTgHIgpANIgEAEQgDADgEABQgEgYgOAYQgGgCgDgEIgGgKIgVAAQgHAEgIgIQgIgJgMALQgMALgEALQgCgGgHAGQgGAEgaAAIgFAAg");
	this.shape_9.setTransform(0.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.3,-5.8,-0.3,6).s().p("AgbAtQgfAAgBgQQgCgPgGAAQgFAAgIADQgIADgIgDQgJgCgMAEIACgNIAAAAIgOAHQgKAHgJgHQgLgIgHABQgIABgOgBQgBABAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEABAgQAAAZAFAEQAEAFgRgGIgqALIgDAEQgEAEgEABQgEgWgNAWQgHgDgCgEIgGgJIgWAAQgGADgJgGQgIgHgMAKQgMAKgEAJQgBgFgHAEQgGADgZAAIgIAAg");
	this.shape_10.setTransform(0.3,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.2,-5.7,-0.2,6.1).s().p("AANArQgHABgiAAQgdgBgCgOQgCgOgFAAQgGAAgIADQgIADgIgCQgKgCgKADIABgNIAAAAIgNAHQgKAHgKgHQgLgGgHABIgWgCQAAABgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAZgNQBTgJAYABQBRAEAAAiQABAXADAEQAEAFgQgFIgpAKIgEAEQgDAEgEABQgFgTgNATQgGgDgDgEIgGgJIgVAAQgHADgIgEQgJgFgMAJQgLAJgEAHQgCgFgGAEg");
	this.shape_11.setTransform(0.2,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.2,-5.7,-0.2,6.1).s().p("AAOAqIgsgBQgbAAgCgNQgCgNgFAAQgGAAgIAEQgJADgHgBQgLgCgJABIABgNIAAAAIgNAHQgKAHgKgGQgNgGgGABIgVgDQAAABAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgCQAAgKBLgHQBYgIAZgNQBTgJAYABQBRAEAAAkQAAAVAEAEQADAFgPgEIgpAJIgEAEQgDAEgEABQgGgRgMARQgGgDgDgEIgGgJIgVAAQgHADgJgCQgIgDgMAHQgMAIgDAGQgCgFgFADg");
	this.shape_12.setTransform(0.2,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.2,-5.7,-0.2,6.1).s().p("AAPApQgIgCgmAAQgagBgBgLQgCgMgGAAQgFAAgJAEQgJAEgHgBIgUgCIACgNIAAAAIgOAHQgKAHgJgFQgOgFgGAAIgUgEQgBABAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEABAmQAAATADADQACAGgNgDIgqAIIgDAEQgEAEgEABQgGgPgLAPQgHgDgCgEIgGgJIgWAAQgGADgKAAQgIgCgMAHQgLAHgEAEQgBgFgFACg");
	this.shape_13.setTransform(0.2,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.1,-5.7,-0.1,6.1).s().p("AAQAoQgIgEgoAAQgYAAgCgKQgCgLgFAAQgGAAgJAFQgJAEgHgBIgTgDIABgNIAAAAIgNAHQgKAHgJgEIgVgFQgGgCgOgDQAAABgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAZgNQBTgJAYABQBRAEAAAnQAAASADADQABAGgMgCIgpAHIgEAEQgDAEgEABQgGgMgMAMQgGgDgDgEIgGgJIgVAAQgHADgJACQgJAAgMAGQgLAFgDADQgCgFgEABg");
	this.shape_14.setTransform(0.1,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.1,-5.7,-0.1,6.1).s().p("AARAnQgIgFgrgBQgWAAgBgJQgCgJgGAAQgFAAgKAFQgJAFgHgBQgNgBgGgDIACgNIAAAAIgOAHQgKAHgJgDIgVgFQgGgDgNgDQgBABAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEAAAoQABARABADQABAGgKgBIgqAGIgDAEQgEAEgEABQgGgKgLAKQgHgDgCgEIgGgJIgWAAIgQAHQgJACgMAEIgOAGQgBgFgEAAg");
	this.shape_15.setTransform(0.1,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],-0.1,-5.7,-0.1,6.1).s().p("AARAmQgHgHgtAAQgVAAgBgIQgCgIgGAAQgFAAgKAFQgKAGgGgBQgOgBgFgEIACgNIAAAAIgOAHQgKAHgJgDIgVgEQgGgEgNgDQgBABAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEAAAqIACASQAAAGgJAAIgqAFIgDAEQgEAEgEABQgHgHgKAHQgHgDgCgEIgGgJIgWAAIgRAJIgUAHIgOADQgBgFgEgBg");
	this.shape_16.setTransform(0.1,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],0,-5.7,0,6.1).s().p("AAXAsQgCgGgDgBQgIgJgvAAQgSAAgCgHQgCgHgFAAQgGAAgKAGQgKAGgGAAQgPgBgDgFIABgNIAAgBIgNAIQgKAGgJgBQgTgCgDgCQgGgFgNgDQAAABgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgCQAAgKBLgHQBYgJAZgMQBTgJAYABQBRAEAAAsQAAAMABADQgBAGgIACIgpAEIgEAEQgDADgEABQgIgFgKAFQgGgCgDgEIgGgKIgVAAIgSAMQgIAEgMADIgKABIgDAAg");
	this.shape_17.setTransform(0,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#33CCFF","#33FFFF","#0099FF"],[0,0.467,1],0,-5.8,0,6).s().p("AAXArQgBgFgDgCQgIgLgxAAQgRAAgBgFQgCgGgGAAQgFAAgLAGQgLAGgFAAQgPAAgDgHIACgNIAAAAIgOAHQgKAHgJgBQgUgBgCgCQgFgGgNgEQgBABAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgCQAAgKBLgHQBYgIAYgNQBUgJAXABQBRAEAAAuIAAANQAAAHgHADIgqACIgDAEQgEAEgEABQgIgDgJADQgHgDgCgEIgGgJIgWAAQgGADgLAKQgIAHgNABIgFAAQgGAAgCgCg");
	this.shape_18.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-4.6,37.8,9.3);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AghBFQgPgZADgcQADgbAPgbQAPgcgGgVQgFgVAdAxQAgAyAGAaQAHAbgPAZQgPAZgUAAQgTAAgPgZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-9.5,9.4,19);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.oskar();
	this.instance.setTransform(-36.8,-122.5,0.817,0.817);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.8,-122.5,73.6,245.1);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.сry();
	this.instance.setTransform(-266,-164.9,1.064,1.064);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-266,-164.9,532.1,329.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArjKtIAA1ZIXHAAIAAVZg");
	this.shape.setTransform(-3.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.152,scaleY:1.152}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-39.4,78.9,78.9);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ24(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.4,-45.4,90.9,90.9);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(0.3,-1.3,0.771,0.771,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	// Слой 1
	this.instance_1 = new lib.da();
	this.instance_1.setTransform(-39.4,-39.4,0.788,0.788);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-39.4,78.9,78.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 15
	this.instance = new lib.Символ15();
	this.instance.setTransform(0.1,-216.8,0.911,0.911);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:-57.7},14,cjs.Ease.get(1)).wait(25).to({scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},5,cjs.Ease.get(1)).wait(28).to({scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},5,cjs.Ease.get(1)).wait(42).to({rotation:-46.9,x:-42.1,y:-247.6},10,cjs.Ease.get(-1)).to({_off:true},1).wait(15));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(0,-185.2,1.024,1.024);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({y:-26.1},14,cjs.Ease.get(1)).wait(35).to({scaleX:1.18,scaleY:1.18},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02},5,cjs.Ease.get(1)).wait(28).to({scaleX:1.18,scaleY:1.18},5,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02},5,cjs.Ease.get(1)).wait(44).to({rotation:-47,x:-19.1,y:-225.9},10,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(0.5,-145.4,1.698,1.698);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:13.6},14,cjs.Ease.get(1)).wait(46).to({scaleX:1.95,scaleY:1.95},5,cjs.Ease.get(1)).to({scaleX:1.7,scaleY:1.7},5,cjs.Ease.get(1)).wait(28).to({scaleX:1.95,scaleY:1.95},5,cjs.Ease.get(1)).to({scaleX:1.7,scaleY:1.7},5,cjs.Ease.get(1)).wait(45).to({rotation:-47,x:10.3,y:-199.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// Символ 13
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(0,-104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:54.9},14,cjs.Ease.get(1)).wait(57).to({scaleX:1.15,scaleY:1.15},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(28).to({scaleX:1.15,scaleY:1.15},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(45).to({rotation:-47,x:40.1,y:-170.6},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.8,-117.4,195.6,26.5);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-266,-164.9,532.1,329.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.alpha = 0.672;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	// Слой 2
	this.instance_1 = new lib.zal();
	this.instance_1.setTransform(-272,-155.5,0.757,0.757);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-378,-172,756.2,344.1);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,-9.5,9.4,19);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.Символ8();
	this.instance.setTransform(4.7,-180.1,0.473,0.471,0,66.6,-113.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({scaleX:0.68,scaleY:0.68,skewX:-4.5,skewY:-184.5,x:1.6,y:-175.3,alpha:1},4).to({regX:-0.1,regY:-0.1,scaleX:0.68,scaleY:0.68,skewX:-30.1,skewY:-210.4,x:10.2,y:-141.9},15).to({scaleX:0.68,scaleY:0.68,skewX:-0.8,skewY:-180.7,x:24.3,y:37.6},10,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-51.6,-179.5,0.474,0.474,-71.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({scaleX:0.68,scaleY:0.68,rotation:0,x:-48,y:-175,alpha:1},4).to({regX:-0.1,regY:-0.1,rotation:25.7,x:-54,y:-141},15).to({rotation:-3.8,y:39.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// Слой 7
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(1.1,-181.1,0.481,0.537,0,69.3,-115.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:0.78,scaleY:0.68,skewX:-4.2,skewY:-184.2,x:-2.6,y:-176.3,alpha:1},4).to({regX:-0.1,regY:-0.1,scaleX:0.76,scaleY:0.7,skewX:-33.2,skewY:-207,x:6.8,y:-143},15).to({scaleX:0.78,scaleY:0.68,skewX:0.1,skewY:-181,x:20.1,y:36.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(33));

	// Слой 6
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(-51.6,-179.5,0.474,0.474,-71.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.68,scaleY:0.68,rotation:0,x:-48,y:-175,alpha:1},4).to({regX:-0.1,regY:-0.1,rotation:25.7,x:-54,y:-141},15).to({rotation:-3.8,y:39.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-183,9.9,7.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_60 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_87 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(15).call(this.frame_44).wait(15).call(this.frame_59).wait(1).call(this.frame_60).wait(14).call(this.frame_74).wait(13).call(this.frame_87).wait(1));

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.9},3).to({rotation:-5.9},3).to({rotation:7.4},3).to({rotation:0},3).wait(17).to({scaleX:1.54,scaleY:1.54,rotation:6.5,x:508.3,y:13.6},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},15,cjs.Ease.get(1)).wait(1).to({scaleX:1.62,scaleY:1.62,rotation:5.5,x:-174.7,y:1.6},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-122.5,73.6,245.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzRZnMAAAgzNMAmkAAAMgHqAzNg");
	mask.setTransform(-2,209.5);

	// hapyy.jpg
	this.instance = new lib.Символ18();
	this.instance.setTransform(2.1,223.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,45.5,247,328);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(36.3,-1,0.852,0.944,0,-2,178);
	this.instance.alpha = 0.219;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(-31,1.9,0.806,0.65);
	this.instance_1.alpha = 0.219;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(36.3,-2.8,0.852,0.742,0,-2,178);
	this.instance_2.alpha = 0.219;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(-33.6,2.2);
	this.instance_3.alpha = 0.219;
	this.instance_3.compositeOperation = "lighter";

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.5,-6.8,105.1,13.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApwJJIAAyRIThAAIAASRg");
	this.shape.setTransform(-0.8,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{scaleX:1.127,scaleY:1.127}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-39.4,78.9,78.9);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ25(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-44.4,88.9,88.9);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.5,-5.9,105,12.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Слой 4
	this.instance = new lib.Символ16();
	this.instance.setTransform(-53.2,147.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.29,scaleY:1.29,y:137.1},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:147.1},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-27.4,322.5);
	this.instance_1.alpha = 0.238;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.13,scaleY:1.13,x:-22.8,y:334.9},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-27.4,y:322.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzRZnMAHpgzNIe6AAMAAAAzNg");
	var mask_graphics_19 = new cjs.Graphics().p("AzRZnMAHpgzNIe6AAMAAAAzNg");
	var mask_graphics_39 = new cjs.Graphics().p("AzRZnMAHpgzNIe6AAMAAAAzNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-66.5,y:183}).wait(19).to({graphics:mask_graphics_19,x:-66.5,y:183}).wait(20).to({graphics:mask_graphics_39,x:-66.5,y:183}).wait(1));

	// сry.jpg
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-16.9,192);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.15,scaleY:1.15,x:-10.9,y:188},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-16.9,y:192},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,27.1,247,319.9);


// stage content:



(lib.oskar640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.yes.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    
		    this.happy.gotoAndPlay(2);
		    this.oskar.gotoAndPlay(62);
		}
		
		this.yes.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.happy.gotoAndPlay(21);
		    this.oskar.gotoAndPlay(76);
		}
		
		
		
		this.no.addEventListener("mouseover", fl_Clickover1.bind(this));
		
		function fl_Clickover1()
		{
		    this.cry.gotoAndPlay(2);
		    this.oskar.gotoAndPlay(31);
		}
		
		this.no.addEventListener("mouseout", fl_Clickout1.bind(this));
		
		function fl_Clickout1()
		{
		    this.cry.gotoAndPlay(21);
		    this.oskar.gotoAndPlay(46);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.oskar = new lib.Символ4();
	this.oskar.setTransform(308.2,257.3,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get(this.oskar).wait(1));

	// Слой 2
	this.no = new lib.Символ23();
	this.no.setTransform(387.4,213.1);

	this.yes = new lib.Символ22();
	this.yes.setTransform(228,213.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.yes},{t:this.no}]}).wait(1));

	// Слой 7
	this.happy = new lib.Символ3();
	this.happy.setTransform(76,-61.4);

	this.timeline.addTween(cjs.Tween.get(this.happy).wait(1));

	// Слой 3
	this.cry = new lib.Символ2();
	this.cry.setTransform(622,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.cry).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(327.1,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(343.1,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.1,114,1027,404);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/da.png", id:"da"},
		{src:"images/hapyy.jpg", id:"hapyy"},
		{src:"images/net.png", id:"net"},
		{src:"images/oskar.png", id:"oskar"},
		{src:"images/sadd.jpg", id:"sadd"},
		{src:"images/zal.jpg", id:"zal"}
	]
};



// symbols:



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


(lib.sadd = function() {
	this.initialize(img.sadd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.zal = function() {
	this.initialize(img.zal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,412);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ap7BNIAAgbIhOAAIgCAbIgZAAIAAg0IAMAAIAGgQIAEgRQACgKAAgMIABgsIBcAAIAABjIAPAAIgDA0gAqwgkQgBAZgCAKQgFASgDAIIAxAAIAAhKIgmAAgAL6AyIgNgFIALgVQAGAFAJAAQAEAAADgCQAFgDAEgFIgzhdIAfAAIAjBDIAehDIAeAAIgwBgIgJAOIgJAJQgFAEgGACQgGABgHAAQgIAAgGgCgACSAzIgMgEIgLgGIgJgHIgIgKIgGgLIgDgMQgCgFAAgHIACgNQAAgGADgGIAGgLIAIgKIAJgIIALgGIANgEIAOgBQAJAAAHACIAMAEQAJAEALALIgQATQgIgIgGgDQgLgDgHAAQgJAAgGADQgHADgEAFQgFAGgEAHQgCAHAAAIQAAAIACAGQADAHAFAFQAFAGAGADQAHADAJAAQAHAAALgEQAHgDAIgIIASATIgLAJQgGAEgGADQgFADgIABIgQABIgOgBgAsuAzIgMgEIgLgGIgJgHIgIgKIgGgLIgDgMQgCgFAAgHIACgNQABgGACgGIAGgLIAIgKIAJgIIALgGIANgEIANgBQAJAAAIACIAMAEQAJAEALALIgQATQgIgIgHgDQgKgDgIAAQgIAAgGADQgHADgFAFQgFAGgDAHQgCAHAAAIQAAAIACAGQADAHAFAFQAFAGAGADQAHADAIAAQAIAAALgEQAGgDAJgIIASATIgLAJQgFAEgHADQgFADgIABIgQABIgOgBgAnhAyIACgXIAEABQAHAAADgDQAFgDADgIQADgIACgNIABgpIAAgaIBaAAIAAB8IgcAAIAAhjIgkAAIAAAKQgBAhgCALIgDAQIgEAMIgFAJQgEAEgEACIgIADIgKABQgIAAgHgCgAK+AyIgmgzIgPANIAAAmIgcAAIAAh8IAcAAIAAA3IAzg3IAiAAIg0A2IA2BGgAHsAyIAAh8IA6AAQALAAAIADQAJADAFAFQAEAFADAFQACAFAAAHIgBAKIgEAHQgEAGgIAEIAKAFIAIAHQADACABAEQACAFAAAHQAAAIgEAHQgDAGgGAFQgGAEgJACQgJACgLAAgAIHAaIAgAAQAKAAAFgDIAEgFIABgGQAAgHgFgDIgGgCIgKAAIgfAAgAIHgXIAZAAQAKAAAFgDIAEgEQABgDAAgEQAAgGgFgDQgEgDgJAAIgbAAgAG7AyIgLgcIg2AAIgLAcIgcAAIA2h9IAaAAIA2B9gAGmAAIgRgpIgRApIAiAAgAEGAyIAAhiIgmAAIAAgaIBpAAIAAAaIgnAAIAABigAhJAyIAAh8IAcAAIAAArIAbAAQALAAAHADQAHADAHAFQAFAGAEAHQADAHAAAIQAAAKgDAHQgEAIgGAGQgGAFgHADQgJADgLAAgAgtAZIAZAAIAJgBQAEgBACgCQACgCACgEIABgHIgBgHQgCgCgCgCIgGgDIgJgBIgZAAgAigAyIAAhiIgmAAIAAgaIBoAAIAAAaIgnAAIAABigAjuAyIgLgcIg2AAIgLAcIgcAAIA2h9IAaAAIA2B9gAkDAAIgRgpIgRApIAiAAgApNAyIAAh8IBfAAIAAAZIhDAAIAAAZIA7AAIAAAYIg7AAIAAAaIBEAAIAAAYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.6,-7.7,173.3,15.5);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF","#CCCCCC"],[0,0.467,1],-106,0,106.1,0).s().p("AvLDbQhYABAAhYIAAkHQAAhYBYABIeXAAQBYgBAABYIAAEHQAABYhYgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-22,212.1,44);


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
	this.instance = new lib.sadd();
	this.instance.setTransform(-159.2,-138.9,0.714,0.714);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.2,-138.9,285.6,285.6);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(0,-1.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AvLDbQhYAAAAhXIAAkHQAAhXBYgBIeXAAQBYABAABXIAAEHQAABXhYAAg");
	this.shape.setTransform(0,1.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-23.5,212.1,47);


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
	this.instance.setTransform(13,0,1.205,1.205);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-178.9,-167.4,344.1,344.1);


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

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AzRZnMAHpgzNIe6AAMAAAAzNg");
	var mask_graphics_19 = new cjs.Graphics().p("AzRZnMAHpgzNIe6AAMAAAAzNg");
	var mask_graphics_39 = new cjs.Graphics().p("AzRZnMAHpgzNIe6AAMAAAAzNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-66.5,y:183}).wait(19).to({graphics:mask_graphics_19,x:-66.5,y:183}).wait(20).to({graphics:mask_graphics_39,x:-66.5,y:183}).wait(1));

	// сry.jpg
	this.instance = new lib.Символ17();
	this.instance.setTransform(-16.9,192);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15,x:-10.9,y:188},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-16.9,y:192},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,24.6,247,322.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(1.7,-0.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ap6BNIAAgbIhPAAIgCAbIgZAAIAAg0IALAAIAHgQIAEgRQACgKABgMIABgsIBbAAIAABjIAQAAIgFA0gAqwgkQgBAZgCAKQgEASgEAIIAxAAIAAhKIgmAAgAL5AyIgMgFIALgVQAGAFAJAAQAEAAADgCQAFgDADgFIgxhdIAeAAIAjBDIAehDIAeAAIgxBgIgIAOIgKAJQgFAEgGACQgFABgHAAQgHAAgIgCgACSAzIgMgEIgLgGIgJgHIgJgKIgFgLIgEgMQgBgFAAgHIABgNQACgGACgGIAFgLIAJgKIAJgIIALgGIANgEIANgBQAJAAAIACIAMAEQAJAEAMALIgRATQgIgIgHgDQgKgDgIAAQgHAAgHADQgGADgGAFQgEAGgEAHQgCAHAAAIQAAAIACAGQADAHAFAFQAFAGAHADQAHADAHAAQAIAAALgEQAGgDAJgIIASATIgLAJQgFAEgHADQgFADgIABIgRABIgNgBgAsuAzIgMgEIgLgGIgKgHIgIgKIgFgLIgEgMQgBgFAAgHIABgNQABgGADgGIAFgLIAIgKIAKgIIALgGIANgEIANgBQAKAAAGACIAOAEQAHAEANALIgRATQgIgIgHgDQgKgDgIAAQgHAAgHADQgGADgGAFQgEAGgDAHQgDAHAAAIQAAAIADAGQADAHAEAFQAFAGAHADQAHADAHAAQAIAAALgEQAGgDAIgIIASATIgKAJQgFAEgGADQgHADgHABIgRABIgNgBgAngAyIABgXIAEABQAGAAAFgDQAEgDADgIQADgIACgNIABgpIAAgaIBaAAIAAB8IgcAAIAAhjIgkAAIAAAKQgBAhgBALIgEAQIgEAMIgGAJQgCAEgFACIgIADIgKABQgJAAgFgCgAK+AyIgngzIgOANIAAAmIgcAAIAAh8IAcAAIAAA3IAzg3IAiAAIg0A2IA2BGgAHrAyIAAh8IA7AAQALAAAJADQAHADAGAFQAFAFACAFQABAFAAAHIAAAKIgEAHQgEAGgIAEIAKAFIAHAHQADACACAEQACAFAAAHQAAAIgDAHQgEAGgGAFQgGAEgJACQgJACgKAAgAIGAaIAiAAQAJAAAFgDIAEgFIABgGQAAgHgFgDIgGgCIgJAAIghAAgAIGgXIAaAAQAKAAAFgDQACgCACgCQABgDAAgEQAAgGgEgDQgGgDgIAAIgcAAgAG8AyIgMgcIg2AAIgLAcIgcAAIA2h9IAaAAIA2B9gAGmAAIgRgpIgQApIAhAAgAEHAyIAAhiIgnAAIAAgaIBpAAIAAAaIgnAAIAABigAhJAyIAAh8IAcAAIAAArIAaAAQALAAAIADQAHADAHAFQAFAGAEAHQADAHAAAIQAAAKgDAHQgEAIgGAGQgHAFgGADQgJADgLAAgAgtAZIAZAAIAJgBQADgBADgCQACgCACgEIABgHIgBgHQgCgCgCgCIgGgDIgJgBIgZAAgAigAyIAAhiIgnAAIAAgaIBpAAIAAAaIgnAAIAABigAjtAyIgMgcIg1AAIgMAcIgcAAIA2h9IAZAAIA2B9gAkDAAIgQgpIgRApIAhAAgApMAyIAAh8IBeAAIAAAZIhDAAIAAAZIA7AAIAAAYIg7AAIAAAaIBEAAIAAAYg");
	this.shape.setTransform(1.7,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ30();

	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(0,-1.5);
	this.instance_2.filters = [new cjs.ColorFilter(0.16, 0.16, 0.16, 1, 214.2, 171.36, 0, 0)];
	this.instance_2.cache(-108,-24,216,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AvLDbQhYAAAAhXIAAkHQAAhXBYgBIeXAAQBYABAABXIAAEHQAABXhYAAg");
	this.shape_1.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_1},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-23.5,212.1,47);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,1.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-22,212.1,47);


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


// stage content:
(lib.oskar640305_2 = function(mode,startPosition,loop) {
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

	// Слой 9
	this.instance = new lib.Символ28();
	this.instance.setTransform(306.8,279.5,1.047,1.047);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.oskar = new lib.Символ4();
	this.oskar.setTransform(308.2,257.3,0.883,0.883);

	this.timeline.addTween(cjs.Tween.get(this.oskar).wait(1));

	// Слой 2
	this.no = new lib.Символ23();
	this.no.setTransform(399.2,200.4,0.831,0.831);

	this.yes = new lib.Символ22();
	this.yes.setTransform(215.3,200.4,0.831,0.831);

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
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(327.1,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(343.1,156.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.1,114,926.2,404);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 28,
	color: "#FFFFFF",
	manifest: [
		{src:"images/banana.png", id:"banana"},
		{src:"images/beach.jpg", id:"beach"},
		{src:"images/handstolk.png", id:"handstolk"},
		{src:"images/imag_03.png", id:"imag_03"},
		{src:"images/imag_06.png", id:"imag_06"},
		{src:"images/imag_08.png", id:"imag_08"},
		{src:"images/imag_10.png", id:"imag_10"},
		{src:"images/imag_15.png", id:"imag_15"},
		{src:"images/imag_17.png", id:"imag_17"},
		{src:"images/imag_22.png", id:"imag_22"},
		{src:"images/imag_26.png", id:"imag_26"},
		{src:"images/imag_28.png", id:"imag_28"},
		{src:"images/imag_33.png", id:"imag_33"},
		{src:"images/imag_35.png", id:"imag_35"},
		{src:"images/imag_40.png", id:"imag_40"},
		{src:"images/kater.png", id:"kater"},
		{src:"images/sky.jpg", id:"sky"},
		{src:"images/spasaka.png", id:"spasaka"},
		{src:"images/titikaka.png", id:"titikaka"}
	]
};



// symbols:



(lib.banana = function() {
	this.initialize(img.banana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,572,158);


(lib.beach = function() {
	this.initialize(img.beach);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,345);


(lib.handstolk = function() {
	this.initialize(img.handstolk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,128);


(lib.imag_03 = function() {
	this.initialize(img.imag_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,78);


(lib.imag_06 = function() {
	this.initialize(img.imag_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,52);


(lib.imag_08 = function() {
	this.initialize(img.imag_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,112);


(lib.imag_10 = function() {
	this.initialize(img.imag_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,144);


(lib.imag_15 = function() {
	this.initialize(img.imag_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,84);


(lib.imag_17 = function() {
	this.initialize(img.imag_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,128);


(lib.imag_22 = function() {
	this.initialize(img.imag_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,57);


(lib.imag_26 = function() {
	this.initialize(img.imag_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,80);


(lib.imag_28 = function() {
	this.initialize(img.imag_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,68);


(lib.imag_33 = function() {
	this.initialize(img.imag_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,85);


(lib.imag_35 = function() {
	this.initialize(img.imag_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,75);


(lib.imag_40 = function() {
	this.initialize(img.imag_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,19);


(lib.kater = function() {
	this.initialize(img.kater);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,47);


(lib.sky = function() {
	this.initialize(img.sky);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,280);


(lib.spasaka = function() {
	this.initialize(img.spasaka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,119);


(lib.titikaka = function() {
	this.initialize(img.titikaka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,124);


(lib.Символ71 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIkC8QgNAAgLgEQgJgEgIgGQgGgGgEgJQgDgIAAgJIAAg/QAAgJADgIQAEgIAFgGQAHgHAKgDQAMgEANAAIAwAAIAAAfIgwAAQgIAAgFAGQgEAFgBAIIAAALIA5AAIAAAgIg5AAIAAAMQAAAHAGAFQAEAFAIAAIAwAAIAAAggAGwC8IAAg/IgvAAIAAA/IglAAIAAiaIAlAAIAAA7IAvAAIAAg7IAlAAIAACagAEjC8IgFgaIg2AAIgGAaIgmAAIAiiEQABgHADgFQADgEAFgDQAEgDAHgBQAGgCAIAAQAHAAAGACQAHABAFADQAEADADAEQAEAFABAHIAhCEgAEWCCIgOhBQgBgEgEAAQgFAAgBAEIgOBBIAnAAgACGC8IAAg/IgwAAIAAA/IgmAAIAAiaIAmAAIAAA7IAwAAIAAg7IAkAAIAACagAgGC8IgFgaIg2AAIgGAaIglAAIAgiEQACgHADgFQAEgEAEgDQAFgDAGgBQAGgCAIAAQAIAAAFACQAHABAEADQAFADADAEQADAFACAHIAfCEgAgSCCIgPhBQgBgEgEAAQgFAAgBAEIgOBBIAoAAgAjtC8IAAiaIBqAAIAAAfIhFAAIAAAbIAbAAQALAAAKADQAJADAIAGQAHAHADAIQAEAKAAALQgBALgDAJQgEAJgHAGQgHAGgJAEQgKADgLAAgAjICcIAbAAQAIAAAEgFQAEgEgBgIQAAgJgDgDQgEgEgIAAIgbAAgAlgC8IgGgaIg2AAIgGAaIglAAIAhiEQACgHACgFQAEgEAEgDQAFgDAHgBQAFgCAIAAQAIAAAGACQAHABAEADQAFADADAEQADAFABAHIAiCEgAltCCIgOhBQgBgEgFAAQgEAAgBAEIgOBBIAnAAgAn+C8IAAg/IgwAAIAAA/IglAAIAAiaIAlAAIAAA7IAwAAIAAg7IAkAAIAACagAlfgeQgIgCgIgDIgLgHQgGgEgDgFQgFgFgCgHIgEgNQgDgKgBgVQAAgMAEgUIAEgNIAHgMQAEgFAFgEQAFgEAHgDQAHgDAIgBQAIgCALAAQAKAAAIACQAIABAIADQAGADAFAEIAJAJQAEAGADAGIAEANQADAUABAMQgCAVgCAKIgDANQgDAHgFAFQgEAFgFAEIgLAHQgHADgJACQgIABgKAAQgLAAgIgBgAleiWQgGAEgEAHQgDAGgBAJIgBARQAAAXAFAJQAEAHAGADQAGAEAMAAQAKAAAIgEQAGgDADgHQAEgJABgXIgBgRQgBgJgDgGQgDgHgGgEQgIgEgKAAQgLAAgHAEgAGwgeIAAiaIAlAAIAAA3IAcAAQALAAAKADQAKAEAHAHQAHAGAEAKQADAJAAAMQAAALgEAJQgEAIgHAHQgHAGgJADQgKAEgLAAgAHVg9IAcAAQAIAAAEgFQADgFAAgJQAAgIgDgFQgEgFgIAAIgcAAgAFVgeIAAh7IgjAAIAAgfIBqAAIAAAfIgjAAIAAB7gAEDgeIgHgaIg2AAIgFAaIgmAAIAhiEQACgHADgFQAEgEAEgDQAFgDAGgBQAGgCAHAAQAJAAAGACQAGABAFADQAEADAEAEQADAFABAHIAhCEgAD1hYIgOhBQgBgEgFAAQgDAAgBAEIgPBBIAnAAgABKgeIAAh7IgiAAIAAgfIBpAAIAAAfIgjAAIAAB7gAgGgeIgGgaIg2AAIgFAaIgmAAIAhiEQACgHADgFQADgEAFgDQAEgDAGgBQAGgCAIAAQAIAAAGACQAGABAFADQAEADAEAEQADAFACAHIAeCEgAgThYIgPhBQgBgEgEAAQgEAAgBAEIgPBBIAoAAgAicgeIgLgoQgDgLgGgGQgGgGgHAAIgNAAIAAA/IglAAIAAiaIAlAAIAAA9IAMAAIAfg9IAqAAIgoBFQANAGAKAaIATA1gAnPgeIAAh7IgtAAIAAB7IglAAIAAiaIB2AAIAACag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.6,-18.8,119.3,37.7);


(lib.Символ69 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spasaka();
	this.instance.setTransform(-60,-59.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60,-59.5,120,119);


(lib.Символ68 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.titikaka();
	this.instance.setTransform(-105.9,-54.8,0.839,0.839,1.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.7,-54.8,217.4,109.6);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ADVDKIgDgeIhJAAIgCAeIgjAAIAAg+QAGAAAEgCQADgCADgEQACgGACgNQAGgiADg9IBoAAIAAB6IAOAAIAAA+gACVCMIAwAAIAAhaIgjAAQgGBKgHAQgAAACsQgIgBgHgDIgMgHQgFgEgEgGQgEgFgDgGIgEgOQgCgJgBgWQAAgLADgUIAEgOIAHgLQAEgFAGgEQAFgFAGgCQAHgDAIgCQAHgBAKAAQAKAAAIABQAJACAHADQAHACAFAFIAJAJQAEAFADAGIAEAOQADAUAAALQgBAWgCAJIgEAOQgDAGgEAFQgEAGgFAEIgMAHQgHADgIABQgJACgKAAQgKAAgHgCgAAAA1QgFADgDAHQgDAGgCAJIAAARQAAAXAFAJQADAHAFAEQAGAEALAAQALAAAHgEQAGgEAEgHQAEgJABgXIgBgRQgBgJgDgGQgEgHgGgDQgHgEgLAAQgKAAgHAEgAEZCsIAAggIAZAAQAJAAAEgEQADgEACgJIgGAAQgGAAgGgCQgFgBgFgEQgEgDgEgGQgDgEgCgHIgahOIAnAAIATBCQABAFACABQACABAFAAIAHAAIAShJIAnAAIgdBsIgIAVQgEAJgGAFQgGAGgJACQgIADgNAAgAi4CsIAAiaIA7AAQALAAAJADQAKADAHAFQAHAGAEAIQAEAJAAALQgBAKgFAIQgEAIgHAEIAJAFIAGAIQADAEABAGIACAMQAAALgEAJQgEAIgIAFQgHAGgJADQgKACgMAAgAiUCNIAbAAQAJAAAEgEQADgEAAgJQAAgHgEgEQgEgDgJAAIgaAAgAiUBPIAWAAQAIAAAEgDQAGgEAAgIQgBgHgEgEQgFgEgIAAIgWAAgAl8CsIAAiaIA6AAQALAAAKADQAKADAGAFQAIAGADAIQAEAJAAALQAAAKgGAIQgDAIgIAEIAJAFIAHAIQADAEABAGIABAMQAAALgDAJQgEAIgIAFQgHAGgKADQgJACgMAAgAlYCNIAbAAQAJAAADgEQAEgEgBgJQAAgHgDgEQgEgDgKAAIgZAAgAlYBPIAVAAQAJAAAEgDQAFgEAAgIQAAgHgFgEQgEgEgJAAIgVAAgAjYhMQAGAAAEgCQADgCADgEQACgFACgMQAEgkAEg/IBmAAIAACaIgkAAIAAh6IghAAQgHBFgCANQgDANgDAHQgEAIgFAFQgGAFgJACQgJACgNAAgAk8guQgIgBgIgDIgLgHQgGgEgDgGQgEgFgDgGIgFgOQgCgJgBgWQAAgLADgUIAFgOIAHgLQAEgFAFgEQAFgFAHgCQAHgDAIgCQAJgBAKAAQAKAAAIABQAIACAIADQAGACAGAFIAJAJQADAFADAGIAEAOQADAUAAALQgBAWgCAJIgDAOQgEAGgDAFQgEAGgFAEIgMAHQgIADgHABQgJACgKAAQgKAAgJgCgAk7ilQgHADgDAHQgDAGgBAJIgBARQABAXAEAJQADAHAHAEQAGAEAMAAQAKAAAIgEQAGgEAEgHQADgJABgXIgBgRQgBgJgCgGQgEgHgGgDQgIgEgKAAQgLAAgHAEgAHlguIAAiaIAlAAIAAA3IAcAAQAMAAAJAEQAKAEAHAGQAHAHAEAJQAEAKgBALQAAALgEAJQgEAJgHAGQgHAHgJADQgKADgLAAgAIKhNIAcAAQAIAAAEgFQADgFABgIQgBgJgDgEQgEgFgIAAIgcAAgAGKguIAAh6IgiAAIAAggIBpAAIAAAgIgjAAIAAB6gADzguIAAggIAZAAQAIAAAFgEQAEgEACgJIgHAAQgGAAgGgCQgFgBgFgEQgEgDgDgGQgDgEgDgHIgahOIAnAAIATBCQABAFACABQACABAFAAIAHAAIAShJIAnAAIgdBsIgHAVQgFAJgGAFQgGAGgJACQgIADgNAAgACmguIAAg/IgwAAIAAA/IglAAIAAiaIAlAAIAAA7IAwAAIAAg7IAlAAIAACagAAYguIgMgnQgDgMgGgGQgDgFgIAAIgMAAIAAA+IglAAIAAiaIAlAAIAAA9IAMAAIAdg9IApAAIgnBFQAMAGAKAbIATA0gAnHguIAAh6IghAAIAAggIBpAAIAAAgIgjAAIAAB6gAoiguQgNAAgMgEQgJgDgIgHQgGgGgEgIQgDgIgBgKIAAg/QAAgJADgIQAEgIAGgGQAIgGAJgEQAMgEAOAAIArAAIAAAgIgrAAQgJAAgFAFQgEAFgBAJIAAA2QAAAHAGAFQAEAFAJAAIArAAIAAAgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.3,-20.3,120.6,40.6);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.729)","rgba(255,255,255,0)"],[0,0.933],0,-99.3,0,99.4).s().p("EhBGAPhIAA/BMCCNAAAIAAfBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-416.8,-99.3,833.6,198.7);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.banana();
	this.instance.setTransform(48.6,-6.4,0.166,0.183,0,19,-172.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.1,-18.9,103.7,39.9);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kater();
	this.instance.setTransform(-37.1,-13.1,0.557,0.557);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,-13.1,74.2,26.2);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_08();
	this.instance.setTransform(2.6,91.8,1,1.1,0,130.5,-49.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91,-91.7,182,183.5);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_10();
	this.instance.setTransform(-8.6,93.6,0.685,0.753,0,130.5,-49.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.1,-93.6,182.2,187.1);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_15();
	this.instance.setTransform(58.7,-14,1.002,1.343,0,94.9,97.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.6,-23.7,117.3,47.4);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_26();
	this.instance.setTransform(56.3,-4.4,1.002,1.343,0,100.9,103.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.2,-24.7,112.5,49.6);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_17();
	this.instance.setTransform(-72.2,-41.9,1.031,1,0,-99.8,80.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.2,-63.7,144.4,127.4);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_03();
	this.instance.setTransform(-43.8,-24.3,1.031,1,0,-99.8,80.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.8,-37.6,87.6,75.2);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_06();
	this.instance.setTransform(-33,-38.2,1.031,1,0,-99.8,80.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-47,66,94.2);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_15();
	this.instance.setTransform(49.8,-15.8,1.001,1.148,0,93.7,94.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.7,-22.1,99.5,44.2);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_26();
	this.instance.setTransform(41,-26.1,1.001,1.148,0,75.5,76.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.9,-26.1,95.9,52.2);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_33();
	this.instance.setTransform(-49.3,-35.9,1.031,1,0,-99.8,80.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.3,-50.3,98.7,100.8);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_08();
	this.instance.setTransform(-61.8,56,0.909,1,0,180,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.8,-55.9,123.6,112);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_10();
	this.instance.setTransform(-75.6,53.5,0.675,0.742,0,180,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.6,-53.4,151.2,106.9);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.handstolk();
	this.instance.setTransform(24.9,-75,0.833,0.833,65.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.5,-75,145,150.1);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC3300").s().p("AA2CqIAAhaIkZAAIAAiZIEZAAIAAhgIACgBICsCqIisCrg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.8,-17.2,45.7,34.4);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLxAPRMAAAgjnMCXkAAAMAAAAjnUgmEAFGgl3AAAUgl6AAAglvgFGg");
	mask.setTransform(-8.8,-150.6);

	// Слой 1
	this.instance = new lib.beach();
	this.instance.setTransform(-450,-172.5);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-450,-172.5,900,152.2);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sky();
	this.instance.setTransform(-450,-140);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-450,-140,900,280);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.702)","rgba(0,0,0,0.38)","rgba(0,0,0,0)"],[0,0,0.933],-14.4,-13.5,-19.5,22.2).s().p("EgmVAB3QAgjRDvkHQAZABAgAAQBUAAA9gVQBHgYAAgsQAAgRgKgOQgEgGgGgEMBELAG+QCMEWtWDwIjLABUghVAAAgctgFsg");
	this.shape.setTransform(-12.5,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-257.9,-36,490.8,96.7);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#020600").ss(3,1,1).p("EghVADDMBCrgGF");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-214.9,-21,430,42);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AdPDjIkYg9QiMgcg5ACInSgRQg9gFo4hMQoDhDhOAAQheAAhPAVQhQAThIAAQgVAAhxASIAAABIgGABQhRASgxgGQgzgHgoAVQgpAUiAgXQiAgXAxiZQBGikCigPIBtBXQAbADAYAGQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAABQAEABgBAXQAAAGgDAFQgGAHgMAGIgMAHQgkARgOAKIgFAHQAQAVARAAQAIAAAUgIQAPgFAGAIQAJALACAoQAwAFAZgrIAAAAIAIgLIAYgmQAOgSAYAAQASAAAYAOQAZANARAAQBFAABTgeQBFgfADAAQAYAAAGABIAWAIIACAUQAAAMgCAAIFzACIgfgdQgJgGABgDQAAgXADgCIAEABIAVgDQALACFAAjQDgAZAyAkIgMAVQC9ARBCAOQAmAIAZAMQBEAVJfAYQAuATA4AJQAgAFA4AGQBcAMAhAzIgcAZQgbAMhAgOQBHBUDYAOQA4AEBrAAQBbAAAaADQAVAKAHATIgLAdQgYADgfAAQiYAAlGhHgANWgJIiBgJQAfAHBiACgEgiygALQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgFgGgEAAQgBgBAAgTIhYADQgkAAgogCIgFgEQgGgDAAgWQABgQBJgoQBNgqAkAHQAAAsgHAAIBpAHQAjgNAOAAQASAAANASQAMARASAAIBcgvQBggwAcgHQAQADAEADQAIAFgBAYQAAArhlAlQhmAkh5AAQgSAAgeAPQgeAPgSAAQgXAAgHgDg");
	this.shape.setTransform(1.1,-2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240.4,-32.5,483,59.7);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_06();
	this.instance.setTransform(-42,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-26,84,52);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_35();
	this.instance.setTransform(-88.5,-37.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.5,-37.5,177,75);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_28();
	this.instance.setTransform(-42,-34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-34,84,68);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_22();
	this.instance.setTransform(-62.5,-28.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.5,-28.5,125,57);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_10();
	this.instance.setTransform(-112,-72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112,-72,224,144);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_33();
	this.instance.setTransform(-42.5,-42.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-42.5,85,85);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_08();
	this.instance.setTransform(-68,-56);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,-56,136,112);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_03();
	this.instance.setTransform(-30.5,-39);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-39,61,78);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_17();
	this.instance.setTransform(-52,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-64,104,128);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_15();
	this.instance.setTransform(-19,-42);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-42,38,84);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_26();
	this.instance.setTransform(-15,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-40,30,80);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.imag_40();
	this.instance.setTransform(-28,-9.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-9.5,56,19);


(lib.Символ70 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.setTransform(-10.7,-3.5);

	this.instance_1 = new lib.Символ68();
	this.instance_1.setTransform(0.4,2.8);
	this.instance_1.alpha = 0.801;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.3,-52,217.4,109.6);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},219).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-59.5,120,119);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.setTransform(0.2,-18.3);

	// Слой 2
	this.instance_1 = new lib.Символ64();
	this.instance_1.setTransform(-2.3,-15.8);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-62,-22,125,45);

	this.instance_2 = new lib.Символ64();
	this.instance_2.setTransform(-2.3,-20);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-62,-22,125,45);

	this.instance_3 = new lib.Символ64();
	this.instance_3.setTransform(2,-20);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-62,-22,125,45);

	this.instance_4 = new lib.Символ64();
	this.instance_4.setTransform(2,-15.8);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_4.cache(-62,-22,125,45);

	this.instance_5 = new lib.Символ64();
	this.instance_5.setTransform(0.2,-15.8);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-62,-22,125,45);

	this.instance_6 = new lib.Символ64();
	this.instance_6.setTransform(0.2,-20);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-62,-22,125,45);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.6,-40.3,124.9,44.8);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance.cache(-57,-21,108,44);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.1,-18.9,103.7,39.9);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AlDAXIKGgu");
	this.shape.setTransform(-72.8,-5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("AlEAbIKJg1");
	this.shape_1.setTransform(-72.7,-5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AlFAeIKLg7");
	this.shape_2.setTransform(-72.6,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(1,1,1).p("AlGAhIKNhC");
	this.shape_3.setTransform(-72.5,-6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AlHAlIKPhJ");
	this.shape_4.setTransform(-72.4,-6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(1,1,1).p("AlJAoIKThP");
	this.shape_5.setTransform(-72.2,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("AlKAsIKVhX");
	this.shape_6.setTransform(-72.1,-7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(1,1,1).p("AlLAvIKXhd");
	this.shape_7.setTransform(-72,-7.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("AlMAzIKZhl");
	this.shape_8.setTransform(-71.9,-8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#999999").ss(1,1,1).p("AlNA2IKbhr");
	this.shape_9.setTransform(-71.8,-8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(1,1,1).p("AlLAwIKXhf");
	this.shape_10.setTransform(-72,-7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#999999").ss(1,1,1).p("AlKAtIKVhZ");
	this.shape_11.setTransform(-72.1,-7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AlJAqIKThT");
	this.shape_12.setTransform(-72.2,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#999999").ss(1,1,1).p("AlIAmIKRhM");
	this.shape_13.setTransform(-72.3,-6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#999999").ss(1,1,1).p("AlHAkIKPhH");
	this.shape_14.setTransform(-72.4,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#999999").ss(1,1,1).p("AlGAhIKNhB");
	this.shape_15.setTransform(-72.5,-6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#999999").ss(1,1,1).p("AlEAbIKJg0");
	this.shape_16.setTransform(-72.7,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{y:-6.1}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{y:-8.1}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8,p:{y:-8.2}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_2,p:{y:-6}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 1
	this.instance = new lib.Символ58();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4,x:1.1,y:-3},9).to({rotation:0,x:0,y:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.2,-18.9,154.8,39.9);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance.cache(-39,-15,78,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,-13.1,74.2,26.2);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiEAXQgogOgTgDQgBABAAgBQAAAAAAAAQgBgBAAgBQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIADAAIAUAAQAWAGAWAGIA+AQIABADQgBAFgFAAQgeAAgigNgAi/AWIgYgHIgCABQgygFgLgFIAAgFIAbAEIARADIgZgKQAGgLASAJQAOAEAKALQAGAAAMADQAdAIASgDIABABIABAEQAAAGgHAAQgNAAgbgIgAhfAQIgBgFQARgCAbAFQAaAEAJAFIACADIgBACIgFABgAHvAcIg2AAQgwgFgGgCIAAgFQAGgBAbABIBLAEIADABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgDAAgACsAbIgDgBIgBgEQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBIADAAIA+AAIALgEQADACABACQgCAHgNADgAlvALQgFgGgCgFIAAAAIgCAAIgGAAIgBAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgTAAgVgCQgngCgUgKQgNgIAAgJQAAgHAQACIApAJIABADIAAADIgCABIAAABQgBADgDABIgGAAIAWADIAKAAIgHgEIAAgFIAJACIgBgCQADgCAhAEIBJAHIADAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADIgBABIAaACIACABIgDADQgCABgLAAQgYAAghgDIgIgBIAFADQANAJAKADIABAEQgBADgEAAQgTAAgLgLgAnWgQQADgEAFgDIgOgCIgOAAIAUAJgAGnAMIgBgFQAKgDAGAGIgBADQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgKgCgAEOAIQAAgBAMgDIgEgBQgKgEgDAAIAAgFIANAEQANACATABQAcgBAMAAIAJAAIABAAIABADQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgDABIgbgBQgYAEgiABIAAABQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgCgADKgEQAAgHADgBIAQAEIACADQgBAEgHAAQgJAAgEgDg");
	this.shape.setTransform(15.9,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhdAUIgGgCIAAACQgBAFgFAAQgKAAgVgGIgUgFIgCABQgcgDgNgDIgIgCIAAgEIAAAAIAUABQAHgBgKgEQAFgIAPAHQALACAIAJIAOACIAHABIAUAEIABAAIACABIAEAAQgTgGgNgDIgIgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAgBIAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIATgBQASAFARAEIATAFIgBgEIANgCQApAFAKADIAEACIABAFIgEABIg5gIIASAEIAHACQAAAGgDAAIgMABQgTgCgVgHgACbAXIgEAAIgBgBIgEAAIgCgBIgBAAIgBgDIAAAAIABgEIAdgCIAdAAIAEACIAFAAQAHAHgMADgAGJAXIgagBIgPgBIgVgDIAAgFQAJgBAbABIARAAIgOgBIgEAAIAAAAQgIgCgBgCIAAgCIAZgCIgDAAIAQABQAEACAFABIAAABQgFACgHAAIgHgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAgBAAIgBACIAHAAIAGgCIAuACIAFABQAAAAAAAAQABAAAAAAQAAABAAAAQABABAAAAIAAABIAAACIgCABIgBABIgtAAIgCABQgDABgDAAIgBAAgAk6ARIgEgDIgCAAQgGgCgGgFQgFgFgCgCIgDAAIgFgBIAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgQAAgRgBIgHAAQgSAAgOgDQgIgCgHgDIgIgFIgDgGIAPAGIAEABIAHgHIgPgDIgMABIAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAHgBIAGAAIAhAGIACABIACACIAAACIgBABIABABIgDADIgEAAIAUACIAJAAIgEgEIAAgDIAIABIAAgBQAEgCAbADIAOABIACAAIAJACIACABIAjADIADAAIABADIAAACIAAABIAUACIADAAIABABIgBACIgBAAQgCACgHAAIgBAAQgVAAgdgCIgHgBIADACQAIAHAFACIABADIgCACIgDAAIgGAAgAD/AMIgBgDQgBAAAAgBQAAAAABAAQAAAAABgBQABAAACAAIABgBIgFgBIgOgFIgBgCQgGACgJAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIAAABIgOgBIgHAAIgKAAIgBgBIAAgBQAFgFAMgBQAFAAACgBIAYABIACACIABACIAAAAIgBABIgBAAIANADQAOAAAXABIANgBQALgCALAAIALABQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIACADIgBABIgCAAIgBAAIgDABIgBABIgRAAIgaABIgCACQgCABgDAAIgbACIgBAAIgBAAg");
	this.shape_1.setTransform(18.6,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2AQIAAABQgBADgDAAQgJAAgPgEIgQgEIgBABQgVgCgLgCIgGgCIAAgDIgBAAQACgBAMAAQAHgBgFgCQAEgFALAEQAGABAGADIAAgBIAPgCIAbAGIAIACIAAAAIAJgCIApAFIADACIABAEIgDABIgCABIgRgDQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgBABIgIABQgPgBgQgFgACMATIgHgBIgBgCIgNAAIgBAAIgBgBIgBgCQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIAZgEIAbgCIABABIAAAAQADACAAACIAAABIANAAQAAAHgKACgAFXATIgdgBIgPgBIgYgCIAAAAIgBgFIgCAAIgeABIgCAAIgCgCQgCAAgBAAQgBAAAAAAQAAAAAAAAQAAgBABAAIAAAAIgGgBIgPgEIgFAAIgKABQgOgBgDgBIgBgCIAAAAQALgDAUgCIAFgDQAJgBAhABIADACIABACIAAACIgCAAQgNACgRAAIADAAIAlAAIAFgCQAKgCAQAAIAMABIAHACIADABIABAAIABAAIAAAAIgBABQAJgBASAAIARACIABADIAWAAIAEABIAEACIABAAIABABIgBABIgBABIgBACIgBABIgwgBQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQgBACgDABIgDAAgAkXAMIgFgBIgCgDIAAgBQgHgBgEgDIgIgEIAAgBIgBAAIgFAAIgBABIgDABQgOAAgOgCIgHABQgQABgMgCIgMgEIgIgDIgDgEIAFABIAGABQADgCAEgGIgPgCIAEAAIAFAAIAdAEIABAAIACACIAAABIAAABIABAAIAAACIAPABIAIAAIgBgDIABgCIAIABIAAgBQAFgBAVABIAMABIABAAQAEABADACIAAABIAfADIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAABIAAABIARABIADABIACABIgCABIAAAAQgCACgEABIgCAAIgqgCIgGAAIAAABIAGAGIgBACIgCABIgBAAIgCAAg");
	this.shape_2.setTransform(21.3,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKAOIgCAAQgGAAgLgCIgKgCIgBABIgWgCIgEgCIgBgBIAAgBQABgCAHgBQAHgBgCgBQAFgCAHACIAEAAIABAAIAUADIABAAIABAAIAiADIADACIAAADIgBACIgBABIgKgBIgFADIgPgCgAByAOIgBgFQgKACgJgBIgBAAIAAAAIgBgCIgBgBIACgCQAJgEAMgBQANgBAJAAQAIADgJADIgGABIAhgBQgFAIgLABIgXABIgJgBgAEnAOIghgBIgQABQgYgBgDgBIgBgDIgEAAIgDAAIgGAAIgMgCQgRAAgDgCIgBgCIgBgDIAtgCIAEgGQAKgBAvABIAGABIABABIAIAAIAJABIAGABIADAAIAEABIABAAIAAAAIAVABIAAACIADAAIAHAAIAFAAIABAAIABAAIAAABIAAACIgBACIgBABIg1AAQABAAABAAQABABAAAAQABABAAAAQAAABgBAAQAAAEgDABIgDAAgAj5AGIgEgBIAAgEIgKgBIgHgDIAAAAIgCAAIgDAAIAAAAIgEABIgXAAIgHABQgOABgIgBIgMgCIgGgCQgDAAAAgFIAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAFgBIACAAIABAAIAYADIACAAIACABIAAAAIACABIABAAIACAAIAAAAIAPAAIAGAAIABgCIADgBIAGABIAAgBQAHgBAPAAIAKABIABABQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIAAADIAaACIAEAAIACABIABAAIAAABIAPAAIACACIABABIAAAAIgEAEIgCAAIgjgCIgFAAIgBABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBABIgCABIgCgBg");
	this.shape_3.setTransform(23.9,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADgAWIgCgFQADgCAIgBIAPgBIASAAQADABABADIgCAEIgXABIgKABgAEiAVQgCgCAAgEQAagBAxgDIgOAAQgDgBgBgCIAEgFQAOgCBCACIACAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIAAADIgBABIg5AAQAGAAABAEQAAAFgFABQgUAAgSABIgSABQgaAAgEgCgACEAVIgEgDQAAgDAEgDIAcABQADACABACIgCAEgAkZARIgBgCQABgCAIgDIgigDIAAABIgBACQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQgKAAgKgHIgBgCIAAADIgBAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgjAAgTgIQgXgBgKgCQgHgEgBgIQABgFAEgCQARgHAIAKIAZAAIABAEIgBAEIgJAAIACABIAGADQAMAAAJgBIABABIABADIgCABQAKAAALAAIgFgDQAFgGAHAEIAMAFIACAAIACAAIACAAQAEgFASgCIASgBIACADQgCABgSAEIgHAAIAjACIABACIARgFIApgQIADABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAEgjAMQgjAPgKAAIgDgBgAmXgHIgBgDIgCgBIgNAAQAEACAMACgADCARIgBgCQABgFASgFQATgFAHAEIABADIgTAGQgOAEgKAAIgCAAgAhaAOIgEgCQAAgEABgBIABgBIgUAAQgRAAgLADQgLADgHAAIgQgBQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIACgBIAWABQAcgDAiAAIAIAAIABAAQABAAAAAAQAAAAAAAAQAAABAAAAQABABAAABQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAAAIApABQADABABAEIgCAEgAjiALQgCAAABgFQAAgGAlAEIABADIgCADIgDABgAjRACQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgIAjAFIABADIgCABQgCACgMAAg");
	this.shape_4.setTransform(13.8,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAOIgCAAQgGAAgLgCIgKgCIgBABIgWgCIgEgCIgBgBIAAgBQABgCAHgBQAHgBgCgBQAFgCAHACIAEAAIABAAIAUADIABAAIABAAIAiADIADACIAAADIgBACIgBABIgKgBIgFADIgPgCgAByAOIgBgFQgKACgJgBIgBAAIAAAAIgCgCIAAgBIACgCQAJgEAMgBQANgBAJAAQAIADgJADIgGABIAhgBQgFAIgLABIgXABIgJgBgAEnAOIghgBIgQABQgYgBgDgBIgBgDIgEAAIgDAAIgGAAIgMgCQgRAAgDgCIgBgCIgBgDIAtgCIAEgGQAKgBAvABIAGABIABABIAIAAIAJABIAGABIADAAIAEABIABAAIAAAAIAVABIAAACIADAAIAHAAIAFAAIABAAIABAAIAAABIAAACIgBACIgBABIg1AAQABAAABAAQABABAAAAQABABAAAAQAAABgBAAQAAAEgDABIgDAAgAj5AGIgEgBIAAgEIgKgBIgHgDIAAAAIgCAAIgDAAIAAAAIgEABIgXAAIgHABQgOABgIgBIgMgCIgGgCQgDAAAAgFIAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAFgBIACAAIABAAIAYADIACAAIACABIAAAAIACABIABAAIACAAIAAAAIAPAAIAGAAIABgCIADgBIAGABIAAgBQAHgBAPAAIAKABIABABQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAIAAADIAaACIAEAAIACABIABAAIAAABIAPAAIACACIABABIAAAAIgEAEIgCAAIgjgCIgFAAIgBABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBABIgCABIgCgBg");
	this.shape_5.setTransform(23.9,8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2AQIAAABQgBADgDAAQgJAAgPgEIgQgEIgBABQgVgCgLgCIgGgCIAAgDIgBAAQACgBAMAAQAHgBgFgCQAEgFALAEQAGABAGADIAAgBIAPgCIAbAGIAIACIAAAAIAJgCIApAFIADACIABAEIgDABIgCABIgRgDQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgBABIgIABQgPgBgQgFgACMATIgHgBIgBgCIgNAAIgBAAIgBgBIgBgCIAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIAZgEIAbgCIABABIAAAAQADACAAACIAAABIANAAQAAAHgKACgAFXATIgdgBIgPgBIgYgCIAAAAIgBgFIgCAAIgeABIgCAAIgCgCQgCAAgBAAQgBAAAAAAQAAAAAAAAQAAgBABAAIAAAAIgGgBIgPgEIgFAAIgKABQgOgBgDgBIgBgCIAAAAQALgDAUgCIAFgDQAJgBAhABIADACIABACIAAACIgCAAQgNACgRAAIADAAIAlAAIAFgCQAKgCAQAAIAMABIAHACIADABIABAAIABAAIAAAAIgBABQAJgBASAAIARACIABADIAWAAIAEABIAEACIABAAIABABIgBABIgBABIgBACIgBABIgwgBQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQgBACgDABIgDAAgAkXAMIgFgBIgCgDIAAgBQgHgBgEgDIgIgEIAAgBIgBAAIgFAAIgBABIgDABQgOAAgOgCIgHABQgQABgMgCIgMgEIgIgDIgDgEIAFABIAGABQADgCAEgGIgPgCIAEAAIAFAAIAdAEIABAAIACACIAAABIAAABIABAAIAAACIAPABIAIAAIgBgDIABgCIAIABIAAgBQAFgBAVABIAMABIABAAQAEABADACIAAABIAfADIADAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAAABIAAABIARABIADABIACABIgCABIAAAAQgCACgEABIgCAAIgqgCIgGAAIAAABIAGAGIgBACIgCABIgBAAIgCAAg");
	this.shape_6.setTransform(21.3,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 1
	this.instance = new lib.Символ56();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.2,x:0.8,y:-3.7},9).to({rotation:0,x:0,y:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-13.1,103,26.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApoR7Qj1gRhigjQDSgWCXAFIEaAKQDfAADfgFQFOgIBHgQQAOALAGALQAFAJACAOQg+AmiKgGIiDgOQgWAAjsASQjtASgXAAQijAAimgLgADjQGQCag5EMhxQEjh8A4gVQAJAHAKgBQAGACAAAcQAAAxlrCEQiAAuiFArQh3AlgWADQgUgNgJgSgAjJLxQA/g6DghjIEdh6QAKAHALACQAGAFAAAdQAABCj4BfQiWA6isAuQgUgNgJgQgAQWKbQARgYDuhcIEhhvQAKAIALAEQAGAFAAAcQAAApj4BUQjMBGhaARQgUgOgJgQgA93HfQgqgTgIgNQANhNBCgLQAcAQgGAbQgEATAtABQA3gLBIgqQA9gjAPADQAKAHALACQAGAFAAAcQAAAlh4AtQhlAmgZAAQgfAAgtgUgEgrVAFuQAAgvBChZQBLhoAKgcIAAgNQgOADgbAJQgaAIgbAAQgcAAg+gSQgfgJgagJIgLgKQgNgMgHgKQAEgMANgLQAPgNARgBICVAcQA9gcAyhDQATgaAOgJQAUgMAgADQASAMADAEQAGAKAAAeQAAAPhPCXQhRCfgkAxQB2AHCIgKQCsgNBrAAQAdAACagvQCagwAnAAQAcAAADAHQACADgEAEIAHAdQhmAjhNAhQg9AagPAEQgbAGhAABIjfgBQgfAAiDAQQhyAOhSAMIhxAAIgEABQgFgEAAgcgAXRF3IAAgHIgJgQQBZhdGQhjQDSg0Ehg3QAJAIAKAEQAFAFAAAcQAAAXndCFQnPCAgdAAQgcAAgGgHgAlAEUQC0hwFriSQDHhOFZiGQAKAHALACQAGAFAAAcQAAAPmoCzQmxC7jiBOQgUgPgLgQgEghQAEOQgNgJgIgMQA5gkBjhOQBuhXA2glQDUiQD0gpQAWARAFAcQjHBajWB8QkHCahQApQgNgBgNgJgAOPhmQhNgKgJgRIACgbQBfgWDDgWQD9gcDVAAQCHAADDALIFMAUQGOAVDjgiQALAIAJAAQAFADAAAbQAAAriIALQgiACh/AAQgWAAncgUQncgUgXAAQg4AAkRAeIkJAfQgqAAg2gHgAtaisIACgHIgJgPQAmgvCug5QCegzCLgVQBtgRBqhVIBHg7QAkgbAagFQAIAHAKgBQAFACAAAcQAAAphlBBQhcA5iVA+QiQA6iJAnQiPAohMAAQgcAAgDgHgAKemIQAoggCQguQCTgvAmAKIAHAfQgvAghwAoIiYA0QgxgMgQgcgEgqsgGUQgZgfAAggQAAhJAegiQAVgXA/gYQBSgfAqgZQBPguBGhQIBiAaQguAngqAqQhpBpAOB2QAOB1i3AAQhLAAglgwgAovsSQgJgIgFgJIAxANIgYANIgLgJgA+WyFIAIADIgaBAg");
	this.shape.setTransform(153,73);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(87.1,65.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(78.1,79);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(69.3,81.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EAovATqQgUgNgJgQQACgLANgNQAPgOARgDIBnAbQAPALAGAMQAFAJABANQgIALgIAFQgMAIgRABgAQdQAIiMgkQgVgNgLgSQAEgMAOgMQAPgNARgCICLAkQAKAHAJADQAGAFAAAcQAAAcgNABQgSgEgLACgAYpN8QhHgGgVgDQhvgTiAhcIAGgkIDGgCIAAAkIDzBDQAYAPADAcQgHAMgJAGQgMAIgRABQgpgKg5gFgAD7MxIidgoQgVgOgJgSQACgLAOgMQAPgNARgCICeAoQAIAHAKADQAGAFAAAcQAAAcgNABQgSgEgMACgEArHAL7QgRgHgogbQhcg9h4ghQgUgQgJgQIAFgkIAbABQAPAAAAgDQCVAtBBAiICLBMIAHAeQgEANgDAFQgHAJgcAAQgmAAgdgOgEA3rAHnQhoglgUgoQApgiA1ALQArAJCXBCIAIAdQgFAMgEAGQgJAJgbAAQgnAAhYgfgAztEVQgggQgPgYQAEgLANgMQAPgOAPgCIHWB+QAJAHAKgBQAGADAAAbQAAAcgDAFIgEgBIgkACgANSE1InHh8QgXgPg7gcQg0gYgOgMIANgRQAJgMAKgFQAggOBJAuIGuBzIBxAmQBwAnAPANIAHAfQgRAXgcACgACaFDIhDgaIl9hnQgRgQgLgQQADgLAOgMQAOgNAPgCQFRBWCFA0QAzAUAmAdIACANQgEAMgFAFQgHAIgdAAQgRAAhFgagA8XB8QADgDgLgIQg0gnlJheQgUgQgIgQQABgLANgMQAQgNAQgCQF/BzAVAMQAEADAAADIgCAHQACAKAqAYIAAAbIgHAHQgIAGgcAAIgaABIgKgBgAQagiIADgmQAxAABqAoQBgAjAuAdIAGAdQgEAOgFAFQgHAIgdAAQjNhKg4gwgEAiIAArQiAgsh4gaQgOgDgNgKQgNgKgGgNQBFgvCHArQBNAZCkBFIAGAeQgEANgFAFQgHAJgdAAIhwgpgA3YhcQgPgEAAgcQAAgwFqhAQCKgZB8gOQB7gOAXAGIAGAWIgGAdQizAAjuA4QjvBBhVARQgEADgFAAIgFgBgAPDlfQgVgNgJgSIAHgkIAEgBQAJgBAbAAQC2AABNAHQBAAHAcAQQASALAnAcQAzAcBlAaQAYASADAbQgFAQgLAEQgHADgWACgAook0IACgbQBIgXDlgaQD6gcBoAMIAHAWQgjAzjjAiQitAZhuAAQhPAAgogogAFumgQAjgkCjgmQCmglBIAOIAIAXQgvAoiaAdIjWAiQgUgNgJgQgARyoVQAfgiBagIQArgDAiADIA6APQAFANAAAMQgbARhNAIIiAAJQgSgQgLgQgEgmqgJzIgOACQgOgEAAgcQAAgdAOgGIAggFIDyA2QAVgLApAAQASANAHAQQgYAZgiAUQgcAQgJAAQgtAAjPg/gA/jqFQgNgLgFgMIAEgiQCXgSCdgNQCdgOBHAAQASAQAGAQQgkAgjEAVQjiAShNAIgEg4zgO0QhUgWgPgYIADgbQABgEAEgDQAKgHAbAAQAXAABVARQBWARAWAAQBiAABEgwIAsghQAVgQARgCQARAIAEAEQAGAFAAAcQAAAmhmAtQhnAthZAAQhAAAhPgVgArjvUQgggQgJgOQAdgTgJgKIBtAAQArAABDgLIAagFICUAnIgsgBQhwAFhCAaQg+AXgVAAQgeAAglgRgEgtUgP6QgfgQgLgOIADgCICfApQgnAIgPAAQgeAAgkgRgA5txdQkuhSi6guIAKgnILKC4IAXhWQC3AuBRAkIAHAdQgEANgFAFQgHAJgdAAQjIAAkdhFgEgh/gQ6IABALIgFACg");
	this.shape_4.setTransform(60.8,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).wait(5));

	// imag_10.png
	this.instance = new lib.Символ43();
	this.instance.setTransform(102,107.3,1,1,1.8);
	this.instance.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance.cache(-78,-55,155,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-68.7,x:97.4,y:-170},4).to({rotation:1.8,x:102,y:107.3},5).wait(1));

	// imag_08.png
	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(-20.8,100.9,1,1,1.8);
	this.instance_1.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_1.cache(-64,-58,128,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-68.7,x:50.3,y:-56.3},4).to({rotation:1.8,x:-20.8,y:100.9},5).wait(1));

	// imag_33.png
	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(-69.7,87.3,1,1,1.8);
	this.instance_2.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_2.cache(-51,-52,103,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-13.7,x:1.8,y:-19.1},4).to({rotation:1.8,x:-69.7,y:87.3},5).wait(1));

	// imag_26.png
	this.instance_3 = new lib.Символ46();
	this.instance_3.setTransform(-252.9,-31.2,1,1,16);
	this.instance_3.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_3.cache(-50,-28,100,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-13.7,x:-226.5,y:-38.7},4).to({rotation:16,x:-252.9,y:-31.2},5).wait(1));

	// imag_15.png
	this.instance_4 = new lib.Символ47();
	this.instance_4.setTransform(-176.4,-0.4,1,1,16);
	this.instance_4.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_4.cache(-52,-24,104,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-13.7,x:-144.7,y:-49.8},4).to({rotation:16,x:-176.4,y:-0.4},5).wait(1));

	// imag_06.png
	this.instance_5 = new lib.Символ48();
	this.instance_5.setTransform(-148.2,67.5,1,1,16);
	this.instance_5.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_5.cache(-35,-49,70,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-13.7,x:-86.7,y:-4.9},4).to({rotation:16,x:-148.2,y:67.5},5).wait(1));

	// imag_03.png
	this.instance_6 = new lib.Символ49();
	this.instance_6.setTransform(-214.3,29.4,1,1,16);
	this.instance_6.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_6.cache(-46,-40,92,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-13.7,x:-162.9,y:-5.2},4).to({rotation:16,x:-214.3,y:29.4},5).wait(1));

	// imag_17.png
	this.instance_7 = new lib.Символ50();
	this.instance_7.setTransform(-145.4,59.9,1,1,16);
	this.instance_7.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_7.cache(-74,-66,148,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-13.7,x:-88,y:-12.8},4).to({rotation:16,x:-145.4,y:59.9},5).wait(1));

	// imag_26.png
	this.instance_8 = new lib.Символ51();
	this.instance_8.setTransform(-263.9,11.2,1,1,16);
	this.instance_8.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_8.cache(-58,-27,117,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-13.7,x:-215,y:3.6},4).to({rotation:16,x:-263.9,y:11.2},5).wait(1));

	// imag_15.png
	this.instance_9 = new lib.Символ52();
	this.instance_9.setTransform(-183.1,66.4,1,1,16);
	this.instance_9.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_9.cache(-61,-26,121,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-13.7,x:-117.5,y:11.5},4).to({rotation:16,x:-183.1,y:66.4},5).wait(1));

	// imag_10.png
	this.instance_10 = new lib.Символ53();
	this.instance_10.setTransform(120,58.3,1,1,61);
	this.instance_10.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_10.cache(-93,-96,186,191);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:32.3,x:176.4,y:-29.7},4).to({rotation:61,x:120,y:58.3},5).wait(1));

	// imag_08.png
	this.instance_11 = new lib.Символ54();
	this.instance_11.setTransform(-28.2,94.3,1,1,1.8);
	this.instance_11.filters = [new cjs.ColorFilter(0.47, 0.47, 0.47, 1, 135.15, 135.15, 135.15, 0)];
	this.instance_11.cache(-93,-94,186,188);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:21,x:52,y:10.3},4).to({rotation:1.8,x:-28.2,y:94.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.8,-69.5,767.4,258.4);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AQ+DuIgIgLQgeAAgKAJQgKAJgIAAQgOAAgOgNQgOgOgDAAQgeAAgOAKQgOAJgLAAQgVAAgGgLQgGgLgCAAQgXgBgLAIQgLAIgKgBQgSAAgQgOQhOABgGgFQgIgGgjABIgwgDIgogCQgdAAgJgLQgIgLgBAAQgUAAgXANQgWAOgIAAIgZgNIhHANQgTAAgLgOQgKgNgDAAQgOAAgcAPQgcAPgPAAQgTAAgLgNQgLgOgEAAQgOAAgqAKQgrAJgSAAQgbAAgPgRQgLgSgCAAQgWAAgvAOQgvANg2AAQgWAAgQgJQgSgKgrAAQgvABgaAFQgbAGgRgBQgsABgVgWIgegBQg+AHgvAJQgYAEgNAGQgJAFgKgBQgPAAgcgPIgagQQgHgBgQAJQgRAHgHABQgUAAgIgMIgIgMQgLABgTAFIgVAFQgPAAgIgFIgQgPIgQATQgKAOgWAAQgRAAgIgOQgGgNgDgDQgMAGgNALQgJAIgMAAQgGAAgHgEQgHgEgFgBIgjAFIgjAEQgPABgPgLQiagMgQgGQgGgDgwAAQhHAAhEghQg2gagSgaQgIgKgGguQgFgiABgRIAAhKQAEgXAZgNQAUgLBLgVQCAgiBLgXIGJAAIAwADIGPABQFGAfHQAdQILAhB0AKQEnAYCEAiQCaAoABBCQAAA5hbBFQhQA+gggBQgOAAgMgFQgMgFgCAAQgYgBgXAYQgZAYgbgBQgIAAgZgJQgYgJgFAAIghAAIgVAQQgIAHgKAAQgUAAgIgMg");
	mask.setTransform(97.4,-7.4);

	// Слой 3
	this.instance = new lib.Символ42();
	this.instance.setTransform(207.5,2.8,0.116,0.116,-13.5);

	this.instance.mask = mask;

	// Слой 2
	this.instance_1 = new lib.Символ57();
	this.instance_1.setTransform(135.2,6.4);

	this.instance_1.mask = mask;

	// Слой 1
	this.instance_2 = new lib.Символ55();

	this.instance_2.mask = mask;

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.1,-14,293.5,31.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:20.5,y:-8},8,cjs.Ease.get(-1)).to({x:0,y:0},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-75,145,150.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ36();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:42,alpha:0},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ36();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:42,alpha:0},9).to({_off:true},1).wait(6));

	// Слой 2
	this.instance_2 = new lib.Символ36();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:42,alpha:0},9).to({_off:true},1).wait(11));

	// Слой 1
	this.instance_3 = new lib.Символ36();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:42,alpha:0},9).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-17.2,45.7,34.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(6.4,23.2,1.126,1.126,-5);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.702)","rgba(0,0,0,0)"],[0,0.933],-86.3,14,86.4,-14).s().p("Auzl9Ia9kYICqQUI69EXg");
	this.shape.setTransform(0.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1.126,scaleY:1.126,rotation:-5,x:6.4,y:23.2}}]}).to({state:[{t:this.instance,p:{scaleX:1.219,scaleY:1.219,rotation:-9.7,x:8.8,y:25}}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ67();
	this.instance_1.setTransform(3.2,-1.6);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:10.5},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.8,-61.1,144.5,119);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(0,96.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-493.9,-184.5,970.2,453.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(-8.8,42.1,1,1,0,0,0,-8.8,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,y:45.6,alpha:0.781},14,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.08,y:49.4,alpha:0.539},15,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,y:45.8,alpha:0.77},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:42.1,alpha:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-493.9,-184.5,970.2,453.5);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(-8.8,-54.3,1,1,0,0,0,-8.8,42.1);

	// Слой 1
	this.instance_1 = new lib.beach();
	this.instance_1.setTransform(-450,-172.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-493.9,-280.9,970.2,453.5);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(450,0);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(-450,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-900,-140,1800,280);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(450,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-449.9},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-140,1800,280);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.banana();
	this.instance.setTransform(-512.7,-87.6,1.107,1.107);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(300.2,-51.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-512.7,-87.6,1028,174.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,skewX:2.3,x:-1.1},17,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:0,x:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-26,84,52);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// imag_40.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(-230.9,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// imag_10.png
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(119.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2,x:110.3,y:63.8},14,cjs.Ease.get(-1)).to({rotation:4.2,x:100.4,y:59.8},15,cjs.Ease.get(1)).to({rotation:2,x:109.9,y:63.6},15,cjs.Ease.get(-1)).to({rotation:0,x:119.5,y:67.5},15,cjs.Ease.get(1)).wait(1));

	// imag_08.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(-53.9,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3.6,x:-56.6,y:51.4},14,cjs.Ease.get(-1)).to({rotation:-7.7,x:-59.4,y:47.4},15,cjs.Ease.get(1)).to({rotation:-3.8,x:-56.7,y:51.2},15,cjs.Ease.get(-1)).to({rotation:0,x:-53.9,y:55},15,cjs.Ease.get(1)).wait(1));

	// imag_35.png
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(108.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,skewX:-4,x:107.3},14,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:1.01,skewX:-8.3,x:106},15,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:1,skewX:-4,x:107.3},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,x:108.5},15,cjs.Ease.get(1)).wait(1));

	// imag_33.png
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(-98.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// imag_28.png
	this.instance_5 = new lib.Символ12();
	this.instance_5.setTransform(217.5,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-8.5,x:214.7,y:95.8},14,cjs.Ease.get(-1)).to({rotation:-17.7,x:211.7,y:91.3},15,cjs.Ease.get(1)).to({rotation:-8.8,x:214.6,y:95.7},15,cjs.Ease.get(-1)).to({rotation:0,x:217.5,y:100},15,cjs.Ease.get(1)).wait(1));

	// imag_26.png
	this.instance_6 = new lib.Символ3();
	this.instance_6.setTransform(-197.9,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.99,skewX:-2,skewY:-2.5,x:-199.8,y:53.6},14,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleY:0.98,skewX:-4.5,skewY:-5.2,x:-201.8,y:54.8},15,cjs.Ease.get(1)).to({scaleY:0.99,skewX:-2.3,skewY:-2.5,x:-199.9,y:53.7},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleY:1,skewX:0,skewY:0,x:-197.9,y:52.5},15,cjs.Ease.get(1)).wait(1));

	// imag_22.png
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(-19.5,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:1,skewX:-3.5,x:-20.8},14,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:-7.5,x:-22.2},15,cjs.Ease.get(1)).to({scaleY:1,skewX:-3.6,x:-20.8},15,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:-19.5},15,cjs.Ease.get(1)).wait(1));

	// imag_15.png
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(-181.9,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:2.3,x:-184,y:-16.4},14,cjs.Ease.get(-1)).to({rotation:5,x:-186.2,y:-13.1},15,cjs.Ease.get(1)).to({rotation:2.5,x:-184,y:-16.3},15,cjs.Ease.get(-1)).to({rotation:0,x:-181.9,y:-19.5},15,cjs.Ease.get(1)).wait(1));

	// imag_06.png
	this.instance_9 = new lib.Символ5();
	this.instance_9.setTransform(-121.4,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:-1.8,x:-122.9,y:-28.4},14,cjs.Ease.get(-1)).to({rotation:-4,x:-124.5,y:-27.3},15,cjs.Ease.get(1)).to({rotation:-1.8,x:-123,y:-28.3},15,cjs.Ease.get(-1)).to({rotation:0,x:-121.4,y:-29.5},15,cjs.Ease.get(1)).wait(1));

	// imag_03.png
	this.instance_10 = new lib.Символ7();
	this.instance_10.setTransform(-151.5,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-154,y:-95.8},14,cjs.Ease.get(-1)).to({x:-156.7,y:-93.5},15,cjs.Ease.get(1)).to({x:-154.1,y:-95.7},15,cjs.Ease.get(-1)).to({x:-151.5,y:-98},15,cjs.Ease.get(1)).wait(1));

	// imag_17.png
	this.instance_11 = new lib.Символ6();
	this.instance_11.setTransform(-129,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-1.8,x:-130.4,y:-25.1},14,cjs.Ease.get(-1)).to({rotation:-4,x:-131.8,y:-23.7},15,cjs.Ease.get(1)).to({rotation:-1.8,x:-130.4,y:-25.1},15,cjs.Ease.get(-1)).to({rotation:0,x:-129,y:-26.5},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_12 = new lib.Символ15();
	this.instance_12.setTransform(-23.8,111.4);
	this.instance_12.alpha = 0.629;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.2,-137,523.8,276.5);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ70();
	this.instance.setTransform(-0.4,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.8,x:-2.7,y:-8.4},12,cjs.Ease.get(-1)).to({rotation:5.7,x:-5,y:-14},12,cjs.Ease.get(1)).to({rotation:2.8,x:-2.7,y:-8.2},13,cjs.Ease.get(-1)).to({rotation:0,x:-0.4,y:-2.8},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.7,-54.8,217.4,109.6);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.setTransform(11.3,-13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJWDiQgPAAgMgFQgKgEgIgIQgGgGgEgKQgDgIABgLIAChFQAAgKADgIQAFgKAHgFQAIgIALgDQAMgEAQAAIA0ADIgCAiIg0gCQgKAAgFAGQgFAFAAAJIgBAMIA/ACIgCAkIg+gDIgBANQAAAIAGAGQAFAFAIAAIA0ACIgBAjgAHXDeIAChFIg1gCIgCBEIgogBIAGipIApACIgDBBIA1ACIADhBIAnABIgGCqgAE9DYIgHgdIg6gCIgHAcIgqgCIAqiPQACgHADgGQAFgEAFgDQAEgDAIgBQAHgCAHABIAQACQAHACAFADQAEADAEAFQAEAGABAHIAeCSgAEwCZIgNhJQAAgFgGAAQgEAAgBAEIgTBIIArACgACPDRIADhFIg1gCIgCBFIgpgBIAHiqIAoACIgDBBIA1ACIAChBIApACIgHCogAgKDMIgFgeIg8gCIgHAcIgogBIApiQIAFgMQAEgFAGgCQAFgDAHgCQAGgBAJAAQAIAAAHADQAHACAFACQAFADADAGQAEAGAAAGIAeCTgAgVCLIgNhIQgBgEgFAAQgEgBgCAEIgTBIIAsABgAjBDEIhHgDIAHioIB1AEIgBAiIhOgCIgBAdIAeAAQANABALAEQAKAEAIAIQAHAGAEALQADAKAAAMQgBAMgFALQgEAIgIAHQgIAGgLADQgIADgLAAIgDAAgAjeCgIAeABQAJAAAFgEQADgEAAgKQABgJgDgEQgFgFgJAAIgegBgAmGC9IgFgdIg7gDIgHAdIgpgCIApiPQACgHAEgGQAEgEAFgDQAFgDAHgBQAHgCAIABQAJAAAHACQAHACAFADQAEADAEAFQADAGABAHIAfCSgAmRB9IgOhIQAAgFgFAAQgEAAgCAEIgTBIIAsABgAoyC2IAChFIg1gCIgCBFIgogBIAGiqIApACIgDBBIA0ACIADhBIAoACIgHCogAIngPIhHgCIAHipIAoABIgCA9IAeAAQANABAKAFQALAEAHAIQAIAHACALQAEAKAAAMQgBAMgEALQgFAJgJAHQgHAGgKAEQgKADgLAAIgCgBgAIKgyIAeABQAKABADgFQAEgGABgKQAAgJgDgFQgFgFgJAAIgdgBgAF7gVIAFiHIglgBIABgjIB0AFIgBAjIgmgCIgGCHgAEhgZIgFgcIg7gCIgHAcIgqgCIAqiPQACgIADgFIAJgIQAFgCAIgBQAGgCAJAAQAJAAAGACIAMAFQAFAEADAFQADAFACAIIAeCSgAEVhYIgNhIQAAgFgGgBQgEAAgBAFIgTBHIArACgABXghIAGiGIgmgBIABgjIB0AFIgBAiIgngCIgFCHgAgBgjIgFgdIg8gDIgHAcIgpgBIApiQIAGgMQAFgFAEgDQAFgDAHAAQAIgCAIAAQAIAAAHADQAHABAEADQAEADADAGQAEAFAAAIIAfCSgAgNhkIgMhIQgCgEgEgBQgFAAgBAFIgTBGIArACgAimgqIgJgsQgEgMgGgIQgGgGgIgBIgNAAIgEBFIgogBIAHipIAoABIgCBDIAMABIAlhCIAuABIgvBLQAOAGAKAeIASA6gAlngwIgUgCIgRgGQgHgDgGgFQgFgFgEgGQgEgGgDgHIgEgPQgCgKAAgYQAAgNAEgVIAGgPIAIgMQAEgGAGgEQAGgEAIgDQAHgDAJgBQAJgBALAAQALAAAKADQAJABAIAEQAHADAGAFQAFAFAFAFIAGANIAEAPQADAWgBANQgCAXgCALQgCAIgEAGQgDAIgFAFQgEAFgGAEQgGAFgHADIgRAEIgOABIgHAAgAl1i1QgIADgDAIQgEAHgCAJIgBATQAAAZAEAKQAEAIAGAEQAIAFAMAAQALAAAJgEQAHgDADgIQAFgJACgaIAAgSQgBgKgDgHQgDgIgHgDQgIgGgMAAIgCAAQgKAAgHAEgAn2g3IAFiGIgwgDIgGCHIgogCIAGipICCAFIgHCqg");
	this.shape.setTransform(-13.9,-19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Слой 2
	this.instance_1 = new lib.Символ68();
	this.instance_1.setTransform(-0.8,-14.3,1.097,1.097,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("AvQqUMAgcADrIh7Q+MggcgDrg");
	this.shape_1.setTransform(-1,-12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AxLGqIB7w+MAgcADsIh7Q9g");
	this.shape_2.setTransform(-1,-12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-68.4,217.4,109.6);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(-74.4,-2.6,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88,x:-1252.6,y:-25.4},149).wait(1).to({scaleX:0.94,scaleY:1,skewY:180,x:-1060,y:-8.2},0).to({x:142.8},169).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.6,-33.7,311,57.7);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-450,-140,1800,280);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ59();
	this.instance.setTransform(461.8,-168.1,1,1,-1);

	// Слой 3
	this.instance_1 = new lib.Символ62();
	this.instance_1.setTransform(-107,-149.5,1.08,0.235);

	// Слой 1
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(-107,-312.5);

	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(-107,-1.6);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-600.9,-452.5,1844,623.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_73 = function() {
		this.gotoAndPlay(35);
	}
	this.frame_99 = function() {
		this.gotoAndPlay(75);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(39).call(this.frame_73).wait(26).call(this.frame_99).wait(1));

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.setTransform(48.2,-70.9,1.215,0.933);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(-126,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},34).to({state:[{t:this.instance_1}]},39).wait(27));

	// Символ 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(33.6,-42.5,0.692,0.692,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.69,scaleY:0.69,rotation:-1.1,x:32.9,y:-38.8},8,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,rotation:-1.4,x:32.1,y:-35.1},8,cjs.Ease.get(1)).to({scaleX:0.69,scaleY:0.69,rotation:-1.1,x:32.8,y:-38.4},8,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,rotation:-1,x:33.6,y:-42.5},10,cjs.Ease.get(1)).to({scaleX:0.69,scaleY:0.69,x:36.6},9,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,x:39.6},9,cjs.Ease.get(1)).to({scaleX:0.69,scaleY:0.69,x:36.6},10,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,x:33.6},10,cjs.Ease.get(1)).wait(2).to({scaleY:0.68,rotation:-1.7,x:33.8,y:-39.5},6).to({scaleY:0.69,rotation:-1,x:33.6,y:-42.5},6).to({scaleY:0.68,rotation:1.7,x:36.3,y:-41.6},6).to({scaleY:0.69,rotation:-1,x:33.6,y:-42.5},6).wait(2));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AJ5ZoQgPgPgqgHIiOgSQh8gSiFgfQg6gNgSgCIhFgJQgcgDhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgIgDQhfgigmgCQghgCiYgBQgMgvhcACIhYADQg4AAgpgJIhPgLQgpgGgngRQhBgchCgJQghgEhVgCQijgEiRg8IksgKQhUADgsgfQgxgihRgFIjIgGQgygZiLgVQhigOhtgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_1 = new cjs.Graphics().p("AJ5ZoQgPgPguAAQhKgQhAgJQh8gSiAgZQg9gKgSgGQgIgEg9gIQgegFhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgOACQhbgbglgHQgggGiYgEQgQgphYACIhZgBQg3gCgpgJIhPgLQgpgGgogNQhAgXhBgLQgigIhbgBQifgDiPhBQiWAGiWgQQhUADgsgfQgxgihRABIjIgMQg1gTiIgVQhkgQhrgMQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_2 = new cjs.Graphics().p("AJ5ZoQgPgPgxAGQhHgWhAgJQh8gSh7gUQhBgGgSgJQgJgIg7gJQgggGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgUAGQhXgTgkgLQgggLiXgHQgTgjhUABQgiAAg6gDQg1gFgpgJIhPgLQgpgGgqgJQg+gRg/gPQglgLhfAAQicgCiNhGQiWAQiWgaQhUADgsgfQgxgihRAIIjIgTQg4gMiFgWIjPgiQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_3 = new cjs.Graphics().p("AJ5ZoQgPgPg1ANQhDgdhAgJQh8gSh2gOQhEgDgSgMQgLgMg5gKQgigHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgaAKQhUgKgigQQgfgQiXgKQgXgdhQAAQglAAg4gGQg0gHgpgJIhPgLQgpgGgsgFQg9gMg9gRQgngPhkABQiYgBiLhLQiWAbiWglQhUADgsgfQgxgihRAPIjIgaQg7gGiDgWQhngThngVQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_4 = new cjs.Graphics().p("AJ5ZoQgPgPg4ATQhAgjhAgJQh8gShxgJQhIABgSgQQgLgPg4gKQgkgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDggAPQhQgDghgUQgfgViWgNQgbgXhMAAQgogBg2gJQgzgJgpgJIhPgLQgpgGgtgBQg8gGg7gVQgpgShpACQiVAAiJhQQiXAliVgvQhUADgsgfQgxgihSAVIjHggQg+AAiAgXQhpgThlgaQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_5 = new cjs.Graphics().p("AJ5ZoQgPgPg8AaQg8gqhAgJQh8gShsgEQhLAEgSgSQgNgSg2gMQgmgKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDglATQhNAFgggZQgfgYiVgRQgfgRhIgBQgrgCg0gKIhbgVIhPgLQgpgGgvAEQg6gCg6gXQgrgVhuACQiRABiHhVQiXAwiVg6QhUADgsgfQgxgihSAcIjHgnQhAAHh+gYQhrgVhjgeQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_6 = new cjs.Graphics().p("AJ5ZoQgPgPhAAhQg4gxhAgJQh8gShnACQhPAHgRgWQgOgVg1gNQgogLhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgrAYQhJAMgfgdQgegdiVgUQgjgLhEgBQgugDgzgNQgwgOgpgJIhPgLQgpgGgwAIQg5ADg5gZQgsgZh0ADQiNACiFhaQiXA6iVhEQhUADgsgfQgxgihSAiIjHgtQhDANh7gYQhtgWhhgjQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_7 = new cjs.Graphics().p("AJ5ZoQgPgPhDAnQg1g3hAgJQh8gShiAHQhSALgSgZQgPgZgygNQgrgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgxAcQhFAVgegiQgegiiUgXQgngFhAgCQgxgDgxgQQgvgQgpgJIhPgLQgpgGgyAMQg4AJg2gdQgvgch4AEQiJADiEhfQiXBFiVhPQhUADgsgfQgxgihSApIjHg0QhGATh4gYQhvgYhfgnQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_8 = new cjs.Graphics().p("AJ5ZoQgPgPhHAuQgxg+hAgJQh8gShdANQhWAOgRgcQgRgdgwgOQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg3AgQhBAdgdgmQgdgniUgaQgqABg8gDQg2gDgugSQgugTgpgJIhPgLQgpgGg0AQQg2AOg1gfQgxggh9AFQiFAEiChkQiYBPiUhZQhUADgsgfQgxgihTAwIjGg7QhJAah1gaQhxgYhdgsQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_9 = new cjs.Graphics().p("AJ5ZoQgPgPhKA0QguhEhAgJQh8gShYASQhZASgSggQgRgfgvgQQgvgPhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg9AlQg9AkgcgrQgcgriUgdQguAHg4gDQg5gEgsgVQgtgVgpgJIhPgLQgpgGg1AUQg1AUgzgjQgzgjiCAGQiCAFiAhpQiXBaiVhkQhUADgsgfQgxgihTA2IjGhBQhLAghzgaQhzgahbgwQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_10 = new cjs.Graphics().p("AJ5ZoQgPgPhKApQgug5hAgJQh8gShOANQhkAUgNgjQgVgagwgPQgugPhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg5AdQhBAngeguQgfgviPgRQgtAFg2gEQg3gFgsgVQgrgVgrgHQgPAAhFgJQgpgGg1ASQg1ASgyglQg0gfiBAEQiBAEiChkQiZBOiThYQhUADgsgfQgxgihTAuIjGg5QhLAZhygYQhzgYhcgtQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_11 = new cjs.Graphics().p("AJ5ZoQgPgPhJAdQgvgthAgJQh8gShEAHQhuAWgJglQgagVgwgPQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg1AWQhFAogggxQghgyiLgFQgrACg1gEQg1gGgrgVQgqgVgtgEQgUABhFgJQgpgGg0ARQg2AQgxgpQg0gbiAADQiBACiEheQiaBCiShMQhUADgsgfQgxgihSAmIjHgxQhJARhzgVQhzgWhdgqQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_12 = new cjs.Graphics().p("AJ5ZoQgPgPhIASQgwgihAgJQh8gSg6ABQh5AZgFgoQgdgQgwgOQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgxAPQhIAqgjg1Qgjg1iHAHQgqAAgzgFQg0gHgpgVQgqgVgvgCQgYADhFgJQgpgGgzAPQg3APgvgsQg1gXiAABQiAABiGhZQibA3iRhBQhUADgsgfQgxgihSAeIjHgpQhIAKhzgUQhzgThegnQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_13 = new cjs.Graphics().p("AJ5ZoQgPgPhHAGQgxgWhAgJQh8gSgwgFQiDAcgBgrQghgLgxgOQgsgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgtAHQhMAtglg4Qglg5iDATQgpgCgxgHQgygHgogVQgpgWgxABQgdAFhFgJQgpgGgzAOQg3AMgugvQg2gSh/gBQh/gBiIhTQidAriPg1QhUADgsgfQgxgihSAWIjHghQhHADhzgSQh0gRhegkQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_14 = new cjs.Graphics().p("AJ5ZoQgPgPhHgFQgxgLhAgJQh8gSgmgLQiOAfAEguQglgFgygOQgrgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgpAAQhQAugng7Qgng8h/AfQgngEgwgIQgwgIgogVQgngWgzADQgiAHhFgJQgpgGgyAMQg4ALgtgyQg2gPh+gCQh/gCiKhOQieAfiOgpQhUADgsgfQgxgihRANIjIgYQhGgFhzgPQh0gQhfggQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_15 = new cjs.Graphics().p("AJ5ZoQgPgPhGgRQgyABhAgJQh8gSgcgQQiYAhAIgxQgpAAgzgOQgqgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDglgHQhTAwgpg/Qgqg+h7AqIhUgPQgvgJgmgVQgmgWg2AGQgmAIhFgJQgpgGgyALQg4AIgrg1Qg3gKh+gEQh+gEiMhIQifAUiNgeQhUADgsgfQgxgihRAFIjIgQQhFgMhzgNQh0gOhggdQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_16 = new cjs.Graphics().p("AJ5ZoQgPgPhFgdQgzANhAgJQh8gSgTgWQiiAkAMg0QgsAFgzgNQgqgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDghgPQhXAygrhBQgshCh3A2IhRgSQgtgKglgVQgmgWg3AIQgrAKhFgJQgpgGgxAKQg5AGgqg4Qg4gGh9gGQh9gFiOhDQigAIiMgSQhUADgsgfQgxgihRgDIjIgIQhEgUh0gLQh0gLhggaQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_17 = new cjs.Graphics().p("AJ5ZoQgPgPhFgoQgzAYhAgJQh8gSgJgcQitAmARg2QgwAKg0gNQgpgLhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgdgWQhbA0gthFQguhFhzBCQgjgKgrgLQgrgLglgVQgkgWg5AKQgwAMhFgJQgpgGgxAIQg5AEgpg7Qg4gCh8gHQh9gHiQg9QiigEiKgGQhUADgsgfQgxgihRgLIjIAAQhDgbh0gJQh0gJhhgXQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_18 = new cjs.Graphics().p("AJ5ZoQgPgPhEg0Qg0AkhAgJQh8gSABghQi3AoAVg5Qg0APg1gMQgogLhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgZgeQheA3gwhJQgwhIhvBOQgigMgpgMQgqgMgjgVQgjgXg8ANQg0AOhFgJQgpgGgwAHQg5ACgpg+Qg4ACh8gIQh8gJiSg4QijgPiJAFQhUADgsgfQgxgihQgTIjJAIQhCgih0gHQh0gHhigUQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_19 = new cjs.Graphics().p("AJ5ZoIhShOQg1AvhAgJQh8gSALgnQjCArAZg8Qg3AUg2gMQgngKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgWglQhhA4gyhLQgyhMhrBaQghgOgngNQgogNgigWQgjgWg9APQg5AQhFgJQgpgGgvAFQg6ABgnhCQg6AHh7gKQh7gLiUgyQikgbiIARQhUADgsgfQgxgihQgbIjJAQQhBgqh0gFQh0gEhjgRQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_20 = new cjs.Graphics().p("AJ5ZoQgPgPhChLQg2A7hAgJQh8gSAVgtQjMAuAdg/Qg8Aag2gMQgmgKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgSgsQhlA6g0hPQg0hPhnBmQgfgRgmgNQgmgOghgWQgigWg/ASQg+ARhFgJQgpgGgvAEQg6gCgmhEQg6AKh6gLQh7gMiWgtQimgniGAdQhUADgsgfQgxgihQgkIjJAZQg/gxh1gDQh0gDhkgNQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_21 = new cjs.Graphics().p("AJ5ZoQgPgPhChWQg2BGhAgJQh8gSAfgzQjXAxAihCQhAAfg2gMQgmgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgOg0QhoA8g3hSQg2hShjByQgdgTglgOQglgPgggWQgggWhCATQhCAUhFgJQgpgGguACQg7gDglhIQg6APh6gNQh6gOiYgnQingyiFAoQhUADgsgfQgxgihQgsIjJAhQg+g5h1AAQh1gBhkgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_22 = new cjs.Graphics().p("AJ5ZoQgPgPhAhQQg4BAhAgJQh8gSATgxQjLAsAdg+Qg7Adg3gLQglgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgNgwQhoA1g1hMQg1hMhnBpQgcgVgpgNQgkgNgigVQgigUhAARQg+AShFgJQgpgGguABQg7gGgnhCQg4ANh3gMQh9gNiYgpQilgviHAlQhUADgsgfQgxgihQgpIjJAeQg9g2h3gCQhzgChlgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_23 = new cjs.Graphics().p("AJ5ZoQgPgPg+hKQg6A6hAgJQh8gSAGgwQi/AnAag4Qg3Aag4gLQgkgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgNgsQhnAtg0hFQgzhHhrBhQgbgXgtgMQgjgMglgTQgkgSg9APQg6AQhFgJQgpgGgtgBQg8gHgpg+Qg3AMh0gMQiAgMiXgqQikgriIAhQhUADgsgfQgxgihQgmIjJAbQg8g0h4gDQhygDhmgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_24 = new cjs.Graphics().p("AJ5ZoQgPgPg8hEQg8A0hAgJQh8gSgHguQiyAiAVgzQgyAXg5gKQgjgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgMgoQhnAmgyhAQgyhAhvBYQgagZgxgLQgigLgngQQgmgSg8AOQg1AOhFgJQgpgGgtgCQg8gJgrg5Qg1AKhxgLQiDgLiXgsQijgoiJAeQhUADgsgfQgxgihQgjIjJAYQg7gxh6gGQhxgDhmgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_25 = new cjs.Graphics().p("AJ5ZoQgPgPg7g+Qg9AuhAgJQh8gSgTgtQinAeASguQguAVg5gLQgjgHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgMglQhmAfgxg5Qgwg6hzBPQgYgbg2gKQghgKgpgOQgogQg6ALQgxANhFgJQgpgGgsgEQg9gLgug0QgyAJhugKQiHgKiWguQiigkiKAaQhUADgsgfQgxgihQggIjJAVQg7gvh7gHQhvgFhngJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_26 = new cjs.Graphics().p("AJ5ZoIhIhHQg/AohAgJQh8gSgggrQiaAZANgqQgqATg5gKQgigHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgMghQhkAYgwgzQgvg0h3BGQgXgeg6gIIhMgVQgpgOg4AJQgtALhFgJIhUgLQg+gNgwgvQgwAHhsgJQiKgKiVgvQigghiMAXQhUADgsgfQgxgihQgdIjJASQg6gth9gIQhtgGhogJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_27 = new cjs.Graphics().p("AJ5ZoIhGhBQhBAihAgJQh8gSgtgqQiOAVAKglQgmAQg6gKQghgGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgLgdQhkAQgvgtQgtgth7A9QgVggg/gHIhNgSQgrgMg3AHQgoAJhFgJIhUgNQg+gPgygqQguAGhpgIQiNgJiVgxQifgdiNATQhUADgsgfQgxgihQgaIjJAPQg5gqh/gKQhsgHhogJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_28 = new cjs.Graphics().p("AJ5ZoQgPgPg1grQhDAbhAgJQh8gSg5goQiDAPAGgfQghANg7gJQgggGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgLgZQhjAJgugnQgqgniAA0QgUgihCgFIhQgQQgtgKg0AEQgkAIhFgJIhTgOQg+gRg1gmQgtAFhmgHQiQgJiUgyQiegaiOAQQhUADgsgfQgxgihQgXIjJAMQg4goiAgLIjUgRQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_29 = new cjs.Graphics().p("AJ5ZoQgPgPgzglQhFAVhAgJQh8gShGgmQh2AKACgbQgdALg7gIQgggGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgKgWQhjACgsghQgpggiEArQgTgkhGgEQgfgGgygHQgvgIgyACQggAGhFgJQgpgGgqgJQg+gTg3ghQgrADhjgGQiTgIiUg0QicgWiQAMQhUADgsgfQgxgihQgUIjJAJQg3gliCgNIjTgSQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_30 = new cjs.Graphics().p("AJ5ZoQgPgPgxgfQhHAPhAgJQh8gShTglQhqAGgCgWQgYAIg8gIQgfgFhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgKgSQhigFgrgbQgngbiIAjQgRgmhLgDIhTgKQgwgGgxAAQgbAEhFgJQgpgGgpgLQg/gVg5gcQgpAChhgGQiWgHiTg1QibgTiRAJQhUADgsgfQgxgihQgRIjJAGQg2gjiEgOQhogKhqgJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_31 = new cjs.Graphics().p("AJ5ZoQgPgPgwgZQhIAJhAgJQh8gShfgjQheABgGgRQgUAGg9gIQgegFhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgKgOQhhgNgpgUQgmgViMAaQgQgohPgCQgdgDg3gEQgygEgvgDQgXADhFgJQgpgGgogMQhAgXg8gXQgmAAhegFQiagGiSg3QiagPiSAFQhUADgsgfQgxgihRgOIjIADQg1ghiGgPQhmgMhrgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_32 = new cjs.Graphics().p("AJ5ZoQgPgPgugTQhKADhAgJQh8gShsgiQhSgDgKgNQgPAEg+gIQgdgEhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgJgKQhhgUgogPQgkgOiQARQgPgqhTgBQgcgCg5gBQg0gEgtgEQgTABhFgJQgpgGgogOQhAgYg+gTIh/gFQidgFiSg5QiYgMiUACQhUADgsgfQgxgihRgLIjIAAQg0geiIgSQhlgMhrgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_33 = new cjs.Graphics().p("AJ5ZoQgPgPgsgNQhMgDhAgJQh8gSh5ggQhFgJgOgHQgMABg9gHQgdgEhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgJgHQhfgbgngIQgjgIiUAIQgNgthYABQgbgBg8ABQg2gCgqgGQgPgBhFgJQgpgGgngPQhBgbhAgNQgjgDhYgDQiggFiRg6QiXgIiVgCQhUADgsgfQgxgihRgIIjIgDQgzgciJgTQhkgNhsgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_34 = new cjs.Graphics().p("AJ5ZoQgPgPgqgHIiOgSQh8gSiFgfQg6gNgSgCIhFgJQgcgDhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgIgDQhfgigmgCQghgCiYgBQgMgvhcACIhYADQg4AAgpgJIhPgLQgpgGgngRQhBgchCgJQghgEhVgCQijgEiRg8IksgKQhUADgsgfQgxgihRgFIjIgGQgygZiLgVQhigOhtgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_35 = new cjs.Graphics().p("AJ5ZoQgPgPgqgHIiOgSQh8gSiFgfQg6gNgSgCIhFgJQgcgDhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgIgDQhfgigmgCQghgCiYgBQgMgvhcACIhYADQg4AAgpgJIhPgLQgpgGgngRQhBgchCgJQghgEhVgCQijgEiRg8IksgKQhUADgsgfQgxgihRgFIjIgGQgygZiLgVQhigOhtgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_36 = new cjs.Graphics().p("AJ5ZoQgPgPgtgCQhLgOhAgJQh8gSiCgbQg8gKgSgFQgHgEg+gIQgdgEhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgNABQhcgdglgFQgggGiYgDQgPgqhZABIhZABQg3gCgpgJIhPgLQgpgGgogOQhAgYhBgLQgigHhZgBQihgDiPhAQiWADiWgNQhUADgsgfQgxgihRAAIjIgLQg0gUiJgVQhkgQhrgLQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_37 = new cjs.Graphics().p("AJ5ZoQgPgPgwADQhIgThAgJQh8gSh+gXQg+gHgSgIQgJgGg8gJQgfgFhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgRAEIh9ggQghgIiXgGQgSgmhVABIhbgCQg2gDgpgJIhPgLQgpgGgpgLQg/gUhAgNQgkgJhdgBQidgDiOhDQiWALiWgVQhUADgsgfQgxgihRAFIjIgQQg3gQiGgVQhlgQhqgPQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_38 = new cjs.Graphics().p("AJ5ZoQgPgPgyAIQhGgYhAgJIj2gkQhBgGgSgKQgKgJg6gJQghgGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgVAHQhXgRgjgMQgggMiXgIQgUghhTAAQgiAAg6gEQg1gFgpgJIhPgLIhTgOIh9gfQglgMhhAAQiagCiNhHQiWATiWgdQhUADgsgfQgxgihRAKIjIgVQg5gLiEgWIjPgjQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_39 = new cjs.Graphics().p("AJ5ZoQgPgPg1ANQhDgdhAgJQh8gSh2gOQhEgDgSgMQgLgMg5gKQgigHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgaAKQhUgKgigQQgfgQiXgKQgXgdhQAAQglAAg4gGQg0gHgpgJIhPgLQgpgGgsgFQg9gMg9gRQgngPhkABQiYgBiLhLQiWAbiWglQhUADgsgfQgxgihRAPIjIgaQg7gGiDgWQhngThngVQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_40 = new cjs.Graphics().p("AJ5ZoQgPgPg4ASQhAgihAgJQh8gShygKQhHgBgSgOQgLgOg4gLQgkgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgeAOQhRgFgigTQgfgTiWgNQgagYhNgBQgngBg3gHQgzgJgpgJIhPgLQgpgGgtgCQg8gIg8gTQgogRhoABQiVAAiKhPQiXAjiVgtQhUADgsgfQgxgihSAUIjHgfQg9gBiBgXQhpgThlgZQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_41 = new cjs.Graphics().p("AJ5ZoQgPgPg6AXQg+gnhAgJQh8gShvgGQhJACgSgRQgMgQg3gMQglgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgiARQhPABgggWQgfgXiWgPQgdgUhKAAQgpgCg2gJIhbgUIhPgLQgpgGguACQg7gFg7gVQgpgUhsACQiTABiIhTQiXAriVg1QhUADgsgfQgxgihSAZIjHgkQg/AEh/gYQhqgUhkgcQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_42 = new cjs.Graphics().p("AJ5ZoQgPgPg9AcQg7gshAgJQh8gShrgCQhMAFgSgUQgNgTg1gMQgngKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgnAUQhLAHgggaQgfgaiVgRQgggQhHAAQgsgCg0gMIhagVIhPgLQgpgGgvAFQg6gBg6gXQgrgXhvADQiQABiHhWQiXAyiVg8QhUADgsgfQgxgihSAdIjHgoQhBAIh9gXQhrgWhjgfQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_43 = new cjs.Graphics().p("AJ5ZoQgPgPhAAhQg4gxhAgJQh8gShnACQhPAHgRgWQgOgVg1gNQgogLhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgrAYQhJAMgfgdQgegdiVgUQgjgLhEgBQgugDgzgNQgwgOgpgJIhPgLQgpgGgwAIQg5ADg5gZQgsgZh0ADQiNACiFhaQiXA6iVhEQhUADgsgfQgxgihSAiIjHgtQhDANh7gYQhtgWhhgjQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_44 = new cjs.Graphics().p("AJ5ZoQgPgPhCAmQg2g2hAgJQh8gShjAGQhSAKgRgYQgPgYgzgOQgqgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgwAbQhFATgfghQgdghiVgWQgmgHhBgBQgxgDgwgPQgwgQgpgJIhPgLQgpgGgyALQg4AIg2gcQgvgch3AEQiKADiEheQiXBCiVhMQhUADgsgfQgxgihSAnIjHgyQhFASh5gZQhugXhggmQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_45 = new cjs.Graphics().p("AJ5ZoQgPgPhFAqQgzg6hAgJQh8gShgAKQhUAMgRgaQgQgbgxgOQgsgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg0AeQhDAZgegkQgdgliUgYIhngEQgzgDgvgRQgvgSgpgJIhPgLQgpgGgzAOQg3AMg1gfQgwgeh7AFQiHAEiDhiQiXBKiVhUQhUADgsgfQgxgihSAsIjHg3QhHAXh3gZQhwgZhegpQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_46 = new cjs.Graphics().p("AJ5ZoQgPgPhIAvQgwg/hAgJQh8gShcAOQhWAPgSgdQgRgdgwgPQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg4AhQhBAfgcgoQgdgniUgbQgrACg7gCQg2gDgugUQgugTgpgJIhPgLQgpgGg0ARQg2AQg0ghQgyggh+AFQiFAEiBhlQiYBSiUhcQhUADgsgfQgxgihTAxIjGg8QhKAbh0gZQhxgZhdgtQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_47 = new cjs.Graphics().p("AJ5ZoQgPgPhKA0QguhEhAgJQh8gShYASQhZASgSggQgRgfgvgQQgvgPhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg9AlQg9AkgcgrQgcgriUgdQguAHg4gDQg5gEgsgVQgtgVgpgJIhPgLQgpgGg1AUQg1AUgzgjQgzgjiCAGQiCAFiAhpQiXBaiVhkQhUADgsgfQgxgihTA2IjGhBQhLAghzgaQhzgahbgwQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_48 = new cjs.Graphics().p("AJ5ZoQgPgPhKApQgug5hAgJQh8gShOANQhkAUgNgjQgVgagwgPQgugPhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg5AdQhBAngeguQgfgviPgRQgtAFg2gEQg3gFgsgVQgrgVgrgHQgPAAhFgJQgpgGg1ASQg1ASgyglQg0gfiBAEQiBAEiChkQiZBOiThYQhUADgsgfQgxgihTAuIjGg5QhLAZhygYQhzgYhcgtQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_49 = new cjs.Graphics().p("AJ5ZoQgPgPhJAdQgvgthAgJQh8gShEAHQhuAWgJglQgagVgwgPQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg1AWQhFAogggxQghgyiLgFQgrACg1gEQg1gGgrgVQgqgVgtgEQgUABhFgJQgpgGg0ARQg2AQgxgpQg0gbiAADQiBACiEheQiaBCiShMQhUADgsgfQgxgihSAmIjHgxQhJARhzgVQhzgWhdgqQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_50 = new cjs.Graphics().p("AJ5ZoQgPgPhIASQgwgihAgJQh8gSg6ABQh5AZgFgoQgdgQgwgOQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgxAPQhIAqgjg1Qgjg1iHAHQgqAAgzgFQg0gHgpgVQgqgVgvgCQgYADhFgJQgpgGgzAPQg3APgvgsQg1gXiAABQiAABiGhZQibA3iRhBQhUADgsgfQgxgihSAeIjHgpQhIAKhzgUQhzgThegnQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_51 = new cjs.Graphics().p("AJ5ZoQgPgPhHAGQgxgWhAgJQh8gSgwgFQiDAcgBgrQghgLgxgOQgsgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgtAHQhMAtglg4Qglg5iDATQgpgCgxgHQgygHgogVQgpgWgxABQgdAFhFgJQgpgGgzAOQg3AMgugvQg2gSh/gBQh/gBiIhTQidAriPg1QhUADgsgfQgxgihSAWIjHghQhHADhzgSQh0gRhegkQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_52 = new cjs.Graphics().p("AJ5ZoQgPgPhHgFQgxgLhAgJQh8gSgmgLQiOAfAEguQglgFgygOQgrgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgpAAQhQAugng7Qgng8h/AfQgngEgwgIQgwgIgogVQgngWgzADQgiAHhFgJQgpgGgyAMQg4ALgtgyQg2gPh+gCQh/gCiKhOQieAfiOgpQhUADgsgfQgxgihRANIjIgYQhGgFhzgPQh0gQhfggQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_53 = new cjs.Graphics().p("AJ5ZoQgPgPhGgRQgyABhAgJQh8gSgcgQQiYAhAIgxQgpAAgzgOQgqgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDglgHQhTAwgpg/Qgqg+h7AqIhUgPQgvgJgmgVQgmgWg2AGQgmAIhFgJQgpgGgyALQg4AIgrg1Qg3gKh+gEQh+gEiMhIQifAUiNgeQhUADgsgfQgxgihRAFIjIgQQhFgMhzgNQh0gOhggdQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_54 = new cjs.Graphics().p("AJ5ZoQgPgPhFgdQgzANhAgJQh8gSgTgWQiiAkAMg0QgsAFgzgNQgqgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDghgPQhXAygrhBQgshCh3A2IhRgSQgtgKglgVQgmgWg3AIQgrAKhFgJQgpgGgxAKQg5AGgqg4Qg4gGh9gGQh9gFiOhDQigAIiMgSQhUADgsgfQgxgihRgDIjIgIQhEgUh0gLQh0gLhggaQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_55 = new cjs.Graphics().p("AJ5ZoQgPgPhFgoQgzAYhAgJQh8gSgJgcQitAmARg2QgwAKg0gNQgpgLhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgdgWQhbA0gthFQguhFhzBCQgjgKgrgLQgrgLglgVQgkgWg5AKQgwAMhFgJQgpgGgxAIQg5AEgpg7Qg4gCh8gHQh9gHiQg9QiigEiKgGQhUADgsgfQgxgihRgLIjIAAQhDgbh0gJQh0gJhhgXQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_56 = new cjs.Graphics().p("AJ5ZoQgPgPhEg0Qg0AkhAgJQh8gSABghQi3AoAVg5Qg0APg1gMQgogLhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgZgeQheA3gwhJQgwhIhvBOQgigMgpgMQgqgMgjgVQgjgXg8ANQg0AOhFgJQgpgGgwAHQg5ACgpg+Qg4ACh8gIQh8gJiSg4QijgPiJAFQhUADgsgfQgxgihQgTIjJAIQhCgih0gHQh0gHhigUQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_57 = new cjs.Graphics().p("AJ5ZoIhShOQg1AvhAgJQh8gSALgnQjCArAZg8Qg3AUg2gMQgngKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgWglQhhA4gyhLQgyhMhrBaQghgOgngNQgogNgigWQgjgWg9APQg5AQhFgJQgpgGgvAFQg6ABgnhCQg6AHh7gKQh7gLiUgyQikgbiIARQhUADgsgfQgxgihQgbIjJAQQhBgqh0gFQh0gEhjgRQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_58 = new cjs.Graphics().p("AJ5ZoQgPgPhChLQg2A7hAgJQh8gSAVgtQjMAuAdg/Qg8Aag2gMQgmgKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgSgsQhlA6g0hPQg0hPhnBmQgfgRgmgNQgmgOghgWQgigWg/ASQg+ARhFgJQgpgGgvAEQg6gCgmhEQg6AKh6gLQh7gMiWgtQimgniGAdQhUADgsgfQgxgihQgkIjJAZQg/gxh1gDQh0gDhkgNQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_59 = new cjs.Graphics().p("AJ5ZoQgPgPhChWQg2BGhAgJQh8gSAfgzQjXAxAihCQhAAfg2gMQgmgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgOg0QhoA8g3hSQg2hShjByQgdgTglgOQglgPgggWQgggWhCATQhCAUhFgJQgpgGguACQg7gDglhIQg6APh6gNQh6gOiYgnQingyiFAoQhUADgsgfQgxgihQgsIjJAhQg+g5h1AAQh1gBhkgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_60 = new cjs.Graphics().p("AJ5ZoQgPgPhAhQQg4BAhAgJQh8gSATgxQjLAsAdg+Qg7Adg3gLQglgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgNgwQhoA1g1hMQg1hMhnBpQgcgVgpgNQgkgNgigVQgigUhAARQg+AShFgJQgpgGguABQg7gGgnhCQg4ANh3gMQh9gNiYgpQilgviHAlQhUADgsgfQgxgihQgpIjJAeQg9g2h3gCQhzgChlgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_61 = new cjs.Graphics().p("AJ5ZoQgPgPg+hKQg6A6hAgJQh8gSAGgwQi/AnAag4Qg3Aag4gLQgkgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgNgsQhnAtg0hFQgzhHhrBhQgbgXgtgMQgjgMglgTQgkgSg9APQg6AQhFgJQgpgGgtgBQg8gHgpg+Qg3AMh0gMQiAgMiXgqQikgriIAhQhUADgsgfQgxgihQgmIjJAbQg8g0h4gDQhygDhmgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_62 = new cjs.Graphics().p("AJ5ZoQgPgPg8hEQg8A0hAgJQh8gSgHguQiyAiAVgzQgyAXg5gKQgjgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgMgoQhnAmgyhAQgyhAhvBYQgagZgxgLQgigLgngQQgmgSg8AOQg1AOhFgJQgpgGgtgCQg8gJgrg5Qg1AKhxgLQiDgLiXgsQijgoiJAeQhUADgsgfQgxgihQgjIjJAYQg7gxh6gGQhxgDhmgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_63 = new cjs.Graphics().p("AJ5ZoQgPgPg7g+Qg9AuhAgJQh8gSgTgtQinAeASguQguAVg5gLQgjgHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgMglQhmAfgxg5Qgwg6hzBPQgYgbg2gKQghgKgpgOQgogQg6ALQgxANhFgJQgpgGgsgEQg9gLgug0QgyAJhugKQiHgKiWguQiigkiKAaQhUADgsgfQgxgihQggIjJAVQg7gvh7gHQhvgFhngJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_64 = new cjs.Graphics().p("AJ5ZoIhIhHQg/AohAgJQh8gSgggrQiaAZANgqQgqATg5gKQgigHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgMghQhkAYgwgzQgvg0h3BGQgXgeg6gIIhMgVQgpgOg4AJQgtALhFgJIhUgLQg+gNgwgvQgwAHhsgJQiKgKiVgvQigghiMAXQhUADgsgfQgxgihQgdIjJASQg6gth9gIQhtgGhogJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_65 = new cjs.Graphics().p("AJ5ZoIhGhBQhBAihAgJQh8gSgtgqQiOAVAKglQgmAQg6gKQghgGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgLgdQhkAQgvgtQgtgth7A9QgVggg/gHIhNgSQgrgMg3AHQgoAJhFgJIhUgNQg+gPgygqQguAGhpgIQiNgJiVgxQifgdiNATQhUADgsgfQgxgihQgaIjJAPQg5gqh/gKQhsgHhogJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_66 = new cjs.Graphics().p("AJ5ZoQgPgPg1grQhDAbhAgJQh8gSg5goQiDAPAGgfQghANg7gJQgggGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgLgZQhjAJgugnQgqgniAA0QgUgihCgFIhQgQQgtgKg0AEQgkAIhFgJIhTgOQg+gRg1gmQgtAFhmgHQiQgJiUgyQiegaiOAQQhUADgsgfQgxgihQgXIjJAMQg4goiAgLIjUgRQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_67 = new cjs.Graphics().p("AJ5ZoQgPgPgzglQhFAVhAgJQh8gShGgmQh2AKACgbQgdALg7gIQgggGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgKgWQhjACgsghQgpggiEArQgTgkhGgEQgfgGgygHQgvgIgyACQggAGhFgJQgpgGgqgJQg+gTg3ghQgrADhjgGQiTgIiUg0QicgWiQAMQhUADgsgfQgxgihQgUIjJAJQg3gliCgNIjTgSQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_68 = new cjs.Graphics().p("AJ5ZoQgPgPgxgfQhHAPhAgJQh8gShTglQhqAGgCgWQgYAIg8gIQgfgFhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgKgSQhigFgrgbQgngbiIAjQgRgmhLgDIhTgKQgwgGgxAAQgbAEhFgJQgpgGgpgLQg/gVg5gcQgpAChhgGQiWgHiTg1QibgTiRAJQhUADgsgfQgxgihQgRIjJAGQg2gjiEgOQhogKhqgJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_69 = new cjs.Graphics().p("AJ5ZoQgPgPgwgZQhIAJhAgJQh8gShfgjQheABgGgRQgUAGg9gIQgegFhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgKgOQhhgNgpgUQgmgViMAaQgQgohPgCQgdgDg3gEQgygEgvgDQgXADhFgJQgpgGgogMQhAgXg8gXQgmAAhegFQiagGiSg3QiagPiSAFQhUADgsgfQgxgihRgOIjIADQg1ghiGgPQhmgMhrgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_70 = new cjs.Graphics().p("AJ5ZoQgPgPgugTQhKADhAgJQh8gShsgiQhSgDgKgNQgPAEg+gIQgdgEhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgJgKQhhgUgogPQgkgOiQARQgPgqhTgBQgcgCg5gBQg0gEgtgEQgTABhFgJQgpgGgogOQhAgYg+gTIh/gFQidgFiSg5QiYgMiUACQhUADgsgfQgxgihRgLIjIAAQg0geiIgSQhlgMhrgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_71 = new cjs.Graphics().p("AJ5ZoQgPgPgsgNQhMgDhAgJQh8gSh5ggQhFgJgOgHQgMABg9gHQgdgEhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgJgHQhfgbgngIQgjgIiUAIQgNgthYABQgbgBg8ABQg2gCgqgGQgPgBhFgJQgpgGgngPQhBgbhAgNQgjgDhYgDQiggFiRg6QiXgIiVgCQhUADgsgfQgxgihRgIIjIgDQgzgciJgTQhkgNhsgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_72 = new cjs.Graphics().p("AJ5ZoQgPgPgqgHIiOgSQh8gSiFgfQg6gNgSgCIhFgJQgcgDhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgIgDQhfgigmgCQghgCiYgBQgMgvhcACIhYADQg4AAgpgJIhPgLQgpgGgngRQhBgchCgJQghgEhVgCQijgEiRg8IksgKQhUADgsgfQgxgihRgFIjIgGQgygZiLgVQhigOhtgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_74 = new cjs.Graphics().p("AJ5ZoQgPgPgqgHIiOgSQh8gSiFgfQg6gNgSgCIhFgJQgcgDhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgIgDQhfgigmgCQghgCiYgBQgMgvhcACIhYADQg4AAgpgJIhPgLQgpgGgngRQhBgchCgJQghgEhVgCQijgEiRg8IksgKQhUADgsgfQgxgihRgFIjIgGQgygZiLgVQhigOhtgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_75 = new cjs.Graphics().p("AJ5ZoQgPgPgugSQhKAChAgJQh8gShugiQhQgEgKgLQgPADg+gIQgdgEhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgJgKQhggVgogNQgkgOiRAQQgOgrhUAAIhWgDQg0gDgtgFQgSABhFgJQgpgGgogOQhAgZg+gRIh/gGQidgFiSg5QiYgLiUABQhUADgsgfQgxgihRgLIjIAAQg0geiIgRQhkgNhsgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_76 = new cjs.Graphics().p("AJ5ZoQgPgPgxgdQhHANhAgJQh8gShWgkQhnAEgDgVQgXAIg8gIQgfgFhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgKgRQhigHgqgZQgngZiJAgQgRgnhMgCQgdgEg2gFQgxgGgwgBQgaAEhFgJQgpgGgpgLQg/gWg6gaQgoABhggFQiXgHiTg2QibgSiRAIQhUADgsgfQgxgihQgQIjJAFQg2giiEgPQhogLhqgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_77 = new cjs.Graphics().p("AJ5ZoQgPgPg0gpQhEAZhAgJQh8gSg/gnQh9ANAEgeQgfANg7gJQgggGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgLgYQhjAGgsgkQgrgliBAxQgTgjhFgFIhQgOQgtgJg0ADQgiAHhFgJQgpgGgqgJQg+gRg2gkQgsAEhlgHQiRgIiUgzQidgYiPAOQhUADgsgfQgxgihQgWIjJALQg3gniCgMIjTgRQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_78 = new cjs.Graphics().p("AJ5ZoIhHhDQhAAkhAgJQh8gSgngqQiUAWAMgnQgoARg6gJQghgHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgLgfQhlAUgvgwQgtgwh6BBQgWgfg8gHIhNgUQgrgNg3AIQgqAKhFgJIhUgMQg+gOgxgtQgvAHhqgJQiMgJiVgwQifgfiNAVQhUADgsgfQgxgihQgbIjJAQQg5grh+gJQhtgHhogJQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_79 = new cjs.Graphics().p("AJ5ZoQgPgPg7hAQg9AwhAgJQh8gSgQgtQiqAfATgwQgvAWg5gKQgjgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgMgmQhmAhgyg7Qgwg7hyBRQgZgbg0gKQgigKgogPQgngQg7AMQgyANhFgJQgpgGgsgDQg9gLgtg1QgzAJhvgKQiGgLiWgtQiigliKAbQhUADgsgfQgxgihQghIjJAWQg7gwh7gGQhvgEhngKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_80 = new cjs.Graphics().p("AJ5ZoQgPgPg+hLQg6A7hAgJQh8gSAIgwQjBAoAag5Qg3Aag4gLQgkgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgNgtQhnAvg0hHQg0hHhqBiQgbgXgtgMQgjgMgkgTQgkgTg+AQQg6AQhFgJQgpgGgtAAQg8gIgpg+Qg3AMh0gMQiAgMiXgqQikgsiIAiQhUADgsgfQgxgihQgmIjJAbQg9g0h3gEQhzgChlgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_81 = new cjs.Graphics().p("AJ5ZoQgPgPhChWQg2BGhAgJQh8gSAfgzQjXAxAihCQhAAfg2gMQgmgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgOg0QhoA8g3hSQg2hShjByQgdgTglgOQglgPgggWQgggWhCATQhCAUhFgJQgpgGguACQg7gDglhIQg6APh6gNQh6gOiYgnQingyiFAoQhUADgsgfQgxgihQgsIjJAhQg+g5h1AAQh1gBhkgKQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_82 = new cjs.Graphics().p("AJ5ZoQgPgPhDhFQg1A1hAgJQh8gSAQgqQjHAtAbg+Qg6AXg1gMQgngKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgUgpQhjA5gzhNQgzhNhpBgQgggQgngNQgngNghgWQgigWg/AQQg7ARhFgJQgpgGgvAEQg6AAgnhDQg5AIh7gKQh7gLiVgwQilghiHAXQhUADgsgfQgxgihQgfIjJAUQhAguh0gDQh1gEhjgPQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_83 = new cjs.Graphics().p("AJ5ZoQgPgPhEg0Qg0AkhAgJQh8gSABghQi3AoAVg5Qg0APg1gMQgogLhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgZgeQheA3gwhJQgwhIhvBOQgigMgpgMQgqgMgjgVQgjgXg8ANQg0AOhFgJQgpgGgwAHQg5ACgpg+Qg4ACh8gIQh8gJiSg4QijgPiJAFQhUADgsgfQgxgihQgTIjJAIQhCgih0gHQh0gHhigUQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_84 = new cjs.Graphics().p("AJ5ZoQgPgPhFgiQgzAShAgJQh8gSgOgZQinAlAOg1QguAIg0gNQgpgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgfgTQhZA0gshEQgthDh1A8IhQgTQgsgLgkgVQglgWg5AJQgtALhFgJQgpgGgxAJQg5AFgqg5Qg3gFh9gGQh9gGiPhAQihACiLgMQhUADgsgfQgxgihRgHIjIgEQhDgXh0gKQh0gKhhgZQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_85 = new cjs.Graphics().p("AJ5ZoQgPgPhGgRQgyABhAgJQh8gSgcgQQiYAhAIgxQgpAAgzgOQgqgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDglgHQhTAwgpg/Qgqg+h7AqIhUgPQgvgJgmgVQgmgWg2AGQgmAIhFgJQgpgGgyALQg4AIgrg1Qg3gKh+gEQh+gEiMhIQifAUiNgeQhUADgsgfQgxgihRAFIjIgQQhFgMhzgNQh0gOhggdQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_86 = new cjs.Graphics().p("AJ5ZoQgPgPhHAAQgxgQhAgJQh8gSgrgIQiJAeACgtQgjgIgygOQgrgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgrAEQhOAtgmg6Qgmg6iBAZQgogDgxgHQgxgIgogVQgogWgyACQgfAGhFgJQgpgGgzANQg3ALgtgwQg2gQh/gCQh/gBiJhRQidAliPgvQhUADgsgfQgxgihSASIjHgdQhHgBhzgRQhzgQhfgiQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_87 = new cjs.Graphics().p("AJ5ZoQgPgPhIASQgwgihAgJQh8gSg6ABQh5AZgFgoQgdgQgwgOQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgxAPQhIAqgjg1Qgjg1iHAHQgqAAgzgFQg0gHgpgVQgqgVgvgCQgYADhFgJQgpgGgzAPQg3APgvgsQg1gXiAABQiAABiGhZQibA3iRhBQhUADgsgfQgxgihSAeIjHgpQhIAKhzgUQhzgThegnQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_88 = new cjs.Graphics().p("AJ5ZoQgPgPhJAjQgvgzhAgJQh8gShJAKQhpAVgLgkQgXgXgwgPQgugPhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg3AaQhDAngfgwQgggwiNgLQgsAEg2gFQg2gFgrgVQgrgVgsgFQgRAAhFgJQgpgGg0ASQg2ARgxgnQg0gdiBADQiBADiDhhQiaBIiShSQhUADgsgfQgxgihSAqIjHg1QhKAVhzgXQhzgWhcgsQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_89 = new cjs.Graphics().p("AJ5ZoQgPgPhKA0QguhEhAgJQh8gShYASQhZASgSggQgRgfgvgQQgvgPhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg9AlQg9AkgcgrQgcgriUgdQguAHg4gDQg5gEgsgVQgtgVgpgJIhPgLQgpgGg1AUQg1AUgzgjQgzgjiCAGQiCAFiAhpQiXBaiVhkQhUADgsgfQgxgihTA2IjGhBQhLAghzgaQhzgahbgwQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_90 = new cjs.Graphics().p("AJ5ZoQgPgPhHAuQgxg+hAgJQh8gShdANQhWAPgRgdQgRgcgwgPQgtgOhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDg3AhQhBAdgdgnQgdgniUgaQgrABg7gCQg2gDgugTQgugTgpgJIhPgLQgpgGg0AQQg2APg1ggQgxggh9AFQiGAFiBhlQiYBQiUhaQhUADgsgfQgxgihTAwIjGg7QhJAah1gZQhxgZhdgsQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_91 = new cjs.Graphics().p("AJ5ZoQgPgPhEAoQg0g4hAgJQh8gShhAIQhTAMgSgaQgPgZgygOQgrgNhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgyAdQhEAWgegjQgegiiUgYQgngEhAgCQgygDgwgQQgvgRgpgJIhPgLQgpgGgyAMQg4ALg2geQgvgch5AEQiJADiDhgQiXBHiVhRQhUADgsgfQgxgihSAqIjHg1QhHAVh3gZQhvgYhfgoQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_92 = new cjs.Graphics().p("AJ5ZoQgPgPhBAjQg3gzhAgJQh8gShmAEQhPAIgSgXQgOgWg0gNQgpgMhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgtAZQhIAPgegfQgegeiVgVQgkgJhDgCQgvgCgygOQgwgPgpgJIhPgLQgpgGgxAJQg4AFg4gaQgugah0ADQiMADiFhcQiXA9iVhHQhUADgsgfQgxgihSAkIjHgvQhEAPh6gYQhtgXhhgkQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_93 = new cjs.Graphics().p("AJ5ZoQgPgPg9AdQg7gthAgJQh8gShqgBQhNAFgRgUQgOgTg1gNQgngKhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgoAVQhLAIgfgbQgfgaiVgSQgggPhHgBQgsgCg0gLQgxgNgpgJIhPgLQgpgGgvAFQg6ABg5gYQgsgXhwACQiPACiHhXQiXA0iVg+QhUADgsgfQgxgihSAeIjHgpQhCAJh8gYQhsgVhiggQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_94 = new cjs.Graphics().p("AJ5ZoQgPgPg6AXQg+gnhAgJQh8gShvgGQhJACgSgRQgMgQg3gMQglgJhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgiARQhPABgggWQgfgXiWgPQgdgUhKAAQgpgCg2gJIhbgUIhPgLQgpgGguACQg7gFg7gVQgpgUhsACQiTABiIhTQiXAriVg1QhUADgsgfQgxgihSAZIjHgkQg/AEh/gYQhqgUhkgcQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_95 = new cjs.Graphics().p("AJ5ZoQgPgPg3ARQhBghhAgJQh8gShzgLQhGgBgSgOQgLgOg5gKQgjgIhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgdANQhSgGgigSQgfgTiWgMQgagZhNAAQgngBg3gIQgzgIgpgJIhPgLQgpgGgtgCQg8gJg8gTQgogRhnABQiWAAiKhOQiXAhiVgrQhUADgsgfQgxgihSATIjHgeQg8gCiCgXQhogThmgYQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_96 = new cjs.Graphics().p("AJ5ZoQgPgPg0ALQhEgbhAgJIj0giQhDgEgSgLQgKgLg6gJQghgHhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgYAJQhVgNgjgOQgfgPiXgJQgWgfhRABQgkgBg5gFQg0gGgpgJIhPgLIhUgMQg+gOg9gQQgmgOhjABQiZgCiMhJQiWAYiWgiQhUADgsgfQgxgihRANIjIgYQg6gIiEgWIjOgmQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_97 = new cjs.Graphics().p("AJ5ZoQgPgPgxAFQhHgVhAgJQh8gSh8gVQhAgHgSgIQgJgIg7gIQgggGhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgTAFQhYgUgkgKQgggLiXgGQgTgkhUABQghAAg6gDQg2gEgpgJIhPgLQgpgGgqgJQg+gThAgOQgkgLheAAQidgCiNhFQiWAOiWgYQhUADgsgfQgxgihRAHIjIgSQg3gOiGgVQhmgRhpgQQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_98 = new cjs.Graphics().p("AJ5ZoQgPgPgtgBQhLgPhAgJQh8gSiBgaQg8gKgSgFQgIgFg9gIQgegEhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgOABQhbgbglgGQgggGiYgEQgPgphZABIhZAAQg3gCgpgJIhPgLQgpgGgogNQhAgYhBgLQgigHhagCQiggDiPhAQiWAFiWgPQhUADgsgfQgxgihRABIjIgMQg1gTiIgWQhkgPhrgMQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");
	var mask_graphics_99 = new cjs.Graphics().p("AJ5ZoQgPgPgqgHIiOgSQh8gSiFgfQg6gNgSgCIhFgJQgcgDhXgDQhTgCgEgCQgLgDgEgJQgBgJgCgDQgBgEgRgIQgQgIgJAAIhugGQhEgDgIgDQhfgigmgCQghgCiYgBQgMgvhcACIhYADQg4AAgpgJIhPgLQgpgGgngRQhBgchCgJQghgEhVgCQijgEiRg8IksgKQhUADgsgfQgxgihRgFIjIgGQgygZiLgVQhigOhtgIQgfgOg0gKQhJgUgTARQgFADgEAKQgCAFgDACIgNAAIgjgEIgsgFIgZABIqXhkMgC0gsfMBtLAAAUAnDAfHgxrAbwg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_1,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_2,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_3,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_4,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_5,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_6,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_7,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_8,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_9,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_10,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_11,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_12,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_13,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_14,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_15,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_16,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_17,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_18,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_19,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_20,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_21,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_22,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_23,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_24,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_25,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_26,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_27,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_28,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_29,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_30,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_31,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_32,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_33,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_34,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_35,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_36,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_37,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_38,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_39,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_40,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_41,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_42,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_43,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_44,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_45,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_46,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_47,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_48,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_49,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_50,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_51,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_52,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_53,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_54,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_55,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_56,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_57,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_58,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_59,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_60,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_61,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_62,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_63,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_64,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_65,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_66,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_67,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_68,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_69,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_70,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_71,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_72,x:-7.5,y:-47.2}).wait(2).to({graphics:mask_graphics_74,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_75,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_76,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_77,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_78,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_79,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_80,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_81,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_82,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_83,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_84,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_85,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_86,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_87,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_88,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_89,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_90,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_91,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_92,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_93,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_94,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_95,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_96,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_97,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_98,x:-7.5,y:-47.2}).wait(1).to({graphics:mask_graphics_99,x:-7.5,y:-47.2}).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(205,54.9,1,1,0,0,0,0.8,0);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-0.1,x:204.7,y:57.9},8,cjs.Ease.get(-1)).to({rotation:-0.4,x:204.3,y:60.9},8,cjs.Ease.get(1)).to({rotation:-0.1,x:204.6,y:58.2},8,cjs.Ease.get(-1)).to({rotation:0,x:205,y:54.9},10,cjs.Ease.get(1)).to({scaleY:1,skewX:1.5,x:207.5},9,cjs.Ease.get(-1)).to({scaleY:1,skewX:3.3,x:210},9,cjs.Ease.get(1)).to({scaleY:1,skewX:1.5,x:207.5},10,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:205},10,cjs.Ease.get(1)).wait(2).to({regY:-0.1,scaleY:0.95,rotation:-1.4,x:206.3,y:50.3},6).to({regY:0,scaleY:1,rotation:0,x:205,y:54.9},6).to({regY:-0.1,scaleY:0.95,rotation:2,x:203.1,y:58.3},6).to({regY:0,scaleY:1,rotation:0,x:205,y:54.9},6).wait(2));

	// banana.png
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(-57.2,75.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({x:-57.1,y:80.5,alpha:0.5},6).to({x:-57.2,y:75.9,alpha:1},6).to({x:-56.9,y:75.5,alpha:0.5},6).to({x:-57.2,y:75.9,alpha:1},6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.2,-135.7,712.2,277);


// stage content:



(lib.banan = function(mode,startPosition,loop) {
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
		
		
		
		
		
		
		
		this.voda.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.banan.gotoAndPlay(75);
		
		}
		
		this.voda.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.banan.gotoAndPlay(1);
		
		
		}
		
		
		this.katai.addEventListener("mouseover", fl_Clickover1.bind(this));
		
		function fl_Clickover1()
		{
		    this.banan.gotoAndPlay(35);
		
		}
		
		this.katai.addEventListener("mouseout", fl_Clickout1.bind(this));
		
		function fl_Clickout1()
		{
		    this.banan.gotoAndPlay(1);
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.voda = new lib.Символ32();
	this.voda.setTransform(87.1,90.9,1,1,11);
	new cjs.ButtonHelper(this.voda, 0, 1, 2, false, new lib.Символ32(), 3);

	this.timeline.addTween(cjs.Tween.get(this.voda).wait(1));

	// Слой 2
	this.katai = new lib.Символ65();
	this.katai.setTransform(560,103.2,0.923,0.923,-6.5);
	new cjs.ButtonHelper(this.katai, 0, 1, 2, false, new lib.Символ65(), 3);

	this.timeline.addTween(cjs.Tween.get(this.katai).wait(1));

	// Слой 1
	this.banan = new lib.Символ16();
	this.banan.setTransform(312.4,172,1,1,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.banan).wait(1));

	// Слой 4
	this.instance = new lib.Символ22();
	this.instance.setTransform(461,281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180,-18.5,1844,623.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
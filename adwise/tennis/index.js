(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/body.png", id:"body"},
		{src:"images/bol.png", id:"bol"},
		{src:"images/girlp.png", id:"girlp"},
		{src:"images/handball.png", id:"handball"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/hand2.png", id:"hand2"},
		{src:"images/raketka.png", id:"raketka"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,672,381);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,465);


(lib.bol = function() {
	this.initialize(img.bol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,38);


(lib.girlp = function() {
	this.initialize(img.girlp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,84);


(lib.handball = function() {
	this.initialize(img.handball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,169);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,40);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,98);


(lib.raketka = function() {
	this.initialize(img.raketka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,376);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AheAAIC9AA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,-1.5,22.1,3);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AhjqoIDHAAIAAVRIjHAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF0000","#00FF00","#FF0000"],[0,0.494,1],-0.3,-68.1,0.4,68.2).s().p("AhjKpIAA1RIDHAAIAAVRg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.5,-69.6,23.1,139.4);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgBJIAAhCQABgIACgIIgBAAIggBSIgXAAIAAhyIAUAAIAABAIgCATIAghTIAXAAIAABygAgfBJIAAhyIA8AAIAAASIgmAAIAAAZIAjAAIAAARIgjAAIAAAkIAmAAIAAASgAhzBJIAAhyIA9AAIAAARIgnAAIAAAaIASAAQAHAAAFADQAGADAEAFQADAFACAGQACAGAAAGQAAAIgBAHQgCAHgEAFQgDAFgFADQgFACgHAAgAhdA4IAMAAQAGAAAEgDQADgEAAgLQAAgIgDgFQgCgDgCgBQgDgBgDgBIgMAAgABDgyQgEgCgDgDQgCgDgBgFIgBgJIALAAQAAAHADADQAEAEAFgBQAFABADgEQADgDAAgHIAMAAIgBAJQgBAFgDADQgDADgEACQgFACgHAAQgGAAgFgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-7.3,23.4,14.7);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkhgaIAEgEICNAAIAAjoIErAAIAADoICDAAIAEAEIkiEhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-26.3,58.1,52.7);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("ACvAxQhRALheAFQhlgBhQgJQhdgQgdgUQgLgMAHgIQAHgOAhgLQANgGATgDQBuggCpAEQBDgBA0AGQAnAEAeAHQAXAFAVAIQApAQgIASQgFAFgKAJQghAVhWAOg");
	this.shape.setTransform(-2.9,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.5,-7,65.2,16.1);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlp();
	this.instance.setTransform(-7.8,-17,0.404,0.404);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.8,-17,15.8,34);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0.588)","rgba(0,0,0,0)"],[0,0.706,1],-143.1,0,143.1,0).s().p("A2WabMAAAg01MAssAAAMAAAA01g");
	this.shape.setTransform(36.9,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0.588)","rgba(0,0,0,0)"],[0,0.706,1],143.1,0,-143.1,0).s().p("A2VabMAAAg01MAsrAAAMAAAA01g");
	this.shape_1.setTransform(437,-2.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.2,-171.7,686.3,338.4);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiYBGIAAgXIgvAAIAAAXIgWAAIAAgpIAHAAIAFgMIADgNIADhHIBCAAIAABgIAGAAIAAApgAi2gFIgGAXIgEALIAgAAIAAhOIgVAAgAEsAuQgHgDgEgFQgEgFgBgHQgCgHAAgIIAAgoQAAgVAJgJQAKgKARAAQARAAAJAJQAEAFACAGQACAGAAAIIAAAGIgVAAIAAgDIgBgJQgBgEgBgCQgDgEgHAAIgGABQgDABgCACQgCAEAAALIAAAsIABAJIABAHQADAEAHAAQAIAAACgFQAEgEAAgLIAAgGIAVAAIAAAFIgBAPQgCAHgEAFQgEAFgGADIgIADIgJAAQgLAAgHgDgAkaAwQgGgCgGgEQgEgEgEgGQgDgHAAgJIAVAAIABAGQABADACACQABACADACIAHABQAHAAAEgFQADgFAAgJQAAgLgFgCQgEgEgHAAIgFAAIAAgQIAFAAQAGAAAFgEIACgEIABgHIAAgGIgCgFIgEgEQgCgBgEAAQgDAAgDABQgCABgBADQgEAFAAAHIgVAAQAAgHACgGQADgHAEgFQAEgEAHgDQAGgDAIAAIAMACQAGABAGAEQAEADADAGQAEAGAAAJQAAAJgFAHIgFAGIgIADIAIADIAGAGQADAEABADQABAFAAAHQABARgKAJQgJAIgRAAIgOgBgAHJAvIAAgVIATAAIAAAVgAGhAvIAAgvIgLAAIgUAvIgYAAIAXgwIgIgFIgGgHQgEgJAAgLQAAgHABgGQACgGAFgFQAEgEAFgDQAGgDAGAAIArAAIAABygAGKgtQgDACgBADIgBAHIABAIQABADADACQADAFAJAAIALAAIAAgjIgLAAQgJAAgDAFgADfAvIAAhgIgbAAIAAgSIBMAAIAAASIgbAAIAABggAB9AvIAAhyIA/AAIAAASIgpAAIAAAbIAlAAIAAARIglAAIAAAiIApAAIAAASgABdAvIgEgYIgcAAIgFAYIgXAAIAdhyIAdAAIAZBygABWAGIgKg6IgMA6IAWAAgAgrAvIAAhyIApAAQAGAAAFADQAFACAEAEQAEAEABAFQABAFABAFIgBAJIgEAHIgEAGQgDADgEABQAIADAFAHIADAFIABALQAAAHgBAGQgCAHgEAEQgCAFgGACQgEADgHAAgAgUAeIANAAQAHAAAAgEQADgEAAgKQAAgIgDgEQAAgDgHAAIgNAAgAgUgUIALAAQAHAAACgEQACgEAAgIQAAgHgCgEQgBgDgHAAIgMAAgAh2AvIAAhyIA+AAIAAASIgoAAIAAAbIAkAAIAAARIgkAAIAAAiIAoAAIAAASgAlOAvIgEgYIgcAAIgFAYIgYAAIAdhyIAeAAIAZBygAlVAGIgKg6IgMA6IAWAAgAnbAvIAAhyIAqAAQAHAAAFADQAGADAEAEQAEAFACAGQADAGgBAHQABAHgDAHQgCAGgEAFQgEAEgGADQgFABgHAAIgTAAIAAAvgAnEgPIALAAQADAAAEgCQADgBACgCQAEgEAAgJIgBgHQgBgDgCgCIgFgEIgHgBIgLAAgAHMARIgDhUIATAAIgDBUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.6,-7,95.2,14.1);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkhBIQgHgBgFgFQgEgFgDgHQgCgFgCgNIAAgoQABgLADgIQADgHAEgFQAFgFAHgCQAHgCAJAAQAHAAAHACQAHACAGAFQAEAFADAHQACAIABALIAAAoQgBALgCAHQgDAIgEAEQgGAFgHACQgHABgHAAQgJAAgHgCgAkdgVIgDAGIgBAIIAAAtIABAIIADAGQADAFAJAAQAHAAAEgFIACgGIABgIIAAgtIgBgIIgCgGQgCgDgEgBQgCgBgDAAQgJAAgDAFgAHSBIIABhDQABgHABgIIAAAAIggBSIgYAAIAAhyIAVAAIgBBAIgCASIAhhSIAXAAIAABygAF5BIIAAhDQABgHACgIIgBAAIgfBSIgYAAIAAhyIAVAAIgBA/IgCATIAghSIAXAAIAABygADDBIIAAhyIAWAAIAABgIAYAAIAAhgIAVAAIAABgIAYAAIAAhgIAWAAIAABygABvBIIAAhyIAoAAQAIAAAGADQAFACAEAEQADAEABAFQACAFAAAFIgBAJIgDAFIgFAGQgDADgDABQAIADAEAHIADAHIABALQAAAHgBAGQgCAHgDAEQgDAFgFACQgFADgHAAgACFA3IAOAAQAGAAADgEQADgEAAgKQAAgIgDgFQgDgEgGAAIgOAAgACFADIALAAQAIAAADgDQADgDAAgIQAAgHgDgEQgDgDgHAAIgMAAgABPBIIgEgYIgdAAIgEAYIgYAAIAdhyIAeAAIAZBygABHAfIgKg6IgLA6IAVAAgAg8BIIAAhyIApAAQAHAAAGADQAFADACAEQAFAFABAGQADAGAAAHQAAAHgDAFQgBAGgFAFQgCAEgFADQgGADgHAAIgTAAIAAAvgAgmAIIALAAQAEAAADgCQAEgBABgCQAFgDAAgIIgBgHQgBgDgDgCIgFgEIgHgBIgLAAgAiEBIIAAhyIA8AAIAAASIgmAAIAABggAipBIIABhDQABgHACgIIgBAAIggBSIgYAAIAAhyIAVAAIAAA/IgDATIAghSIAYAAIAABygAmNBIIAAhyIApAAQAHAAAGADQAFADAEAEQAEAFACAGQACAGABAHQgBAHgCAFQgCAGgEAFQgEAEgFADQgHADgHAAIgTAAIAAAvgAl4AIIAMAAQADAAADgCQAEgBACgCQAEgDAAgIIgBgHQgBgDgCgCIgGgEIgGgBIgMAAgAmzBIIAAhgIgdAAIAABgIgWAAIAAhyIBJAAIAABygAG2gzQgEgCgDgDQgDgEAAgEIgBgJIALAAQAAAGADAEQAEADAEAAQAGAAADgDQADgEAAgGIAMAAIgBAJQgBAEgDAEQgDADgFACQgEACgHAAQgGAAgFgCg");
	this.shape.setTransform(0.7,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.1,-7.3,97.5,15);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADtA4QgHgDgEgFQgEgFgBgHQgCgHAAgIIAAgoQAAgUAJgKQAJgKASAAQARABAJAIQAEAFACAGQACAHAAAHIAAAGIgVAAIAAgDIgBgJQgBgEgBgBQgDgFgHAAIgGABQgDABgCADQgDAEAAAKIAAAsIABAKIACAGQADAEAHAAQAHAAADgFQAEgDAAgMIAAgGIAVAAIAAAFIgBAPQgCAHgEAFQgEAFgGADIgIADIgJABQgLAAgHgEgAEyA5IAAgVIATAAIAAAVgAC3A5IABhBQAAgJACgIIAAAAIggBSIgYAAIAAhxIAVAAIgDBSIAghSIAYAAIAABxgABdA5IAAg2IgdAAIAAA2IgWAAIAAhxIAWAAIAAAsIAdAAIAAgsIAWAAIAABxgAAEA5IAAg2IgbAAIAAA2IgWAAIAAhxIAWAAIAAAsIAbAAIAAgsIAWAAIAABxgAh4A5IAAhxIA+AAIAAARIgoAAIAAAbIAkAAIAAAPIgkAAIAAAkIAoAAIAAASgAi0A5IAAhgIgbAAIAAgRIBMAAIAAARIgbAAIAABggAlEA5IAAhxIAoAAQAIAAAFACQAGACADAEQAEAEABAFQACAFAAAGIgBAIIgDAHIgFAGQgDADgEABQAJADAEAFIADAHIABALQAAAIgBAFQgCAHgDAEQgDAFgFACQgFADgHAAgAkuApIAOAAQAGgBADgEQADgEAAgJQAAgJgDgFQgDgEgGAAIgOAAgAkugJIALAAQAHAAAEgFQADgEAAgIQAAgHgDgDQgDgEgHAAIgMAAgAE2AbIgEhTIATAAIgCBTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.6,-6,65.2,12);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG3BIQgHgBgFgFQgEgFgDgHQgCgFgCgNIAAgoQAAgLAEgIQADgHAEgFQAFgFAHgCQAHgCAJAAQAIAAAGACQAIACAFAFQAEAFADAHQADAIAAALIAAAoQAAALgDAHQgDAIgEAEQgFAFgIACQgGABgIAAQgJAAgHgCgAG7gVIgDAGIgBAIIAAAtIABAIIADAGQADAFAJAAQAGAAAFgFIACgGIABgIIAAgtIgBgIIgCgGQgDgDgDgBQgCgBgDAAQgJAAgDAFgABrBIQgHgBgFgFQgEgFgDgHQgCgFgCgNIAAgoQABgLADgIQADgHAEgFQAFgFAHgCQAHgCAJAAQAHAAAHACQAHACAGAFQAEAFADAHQACAIABALIAAAoQgBALgCAHQgDAIgEAEQgGAFgHACQgHABgHAAQgJAAgHgCgABvgVIgDAGIgBAIIAAAtIABAIIADAGQADAFAJAAQAHAAAEgFIACgGIABgIIAAgtIgBgIIgCgGQgCgDgEgBQgCgBgDAAQgJAAgDAFgAASBHQgHgDgEgFQgEgFgBgHQgCgHAAgIIAAgoQAAgVAJgJQAJgKASAAQARAAAJAJQAFAFACAGQACAGAAAIIAAAGIgWAAIAAgDIgBgJQAAgEgCgCQgDgEgHAAIgGABIgEADQgDAEAAALIAAAsIABAJIACAHQACAEAHAAQAIAAACgFQAEgEAAgLIAAgGIAWAAIAAAFIgCAPQgCAHgEAFQgDAFgHADIgIADIgJAAQgLAAgHgDgAoxBHQgHgDgEgFQgEgFgBgHQgCgHAAgIIAAgoQAAgVAKgJQAIgKASAAQARAAAJAJQAEAFACAGQACAGAAAIIAAAGIgVAAIAAgDIgBgJQgBgEgBgCQgDgEgHAAIgGABIgFADQgDAEAAALIAAAsIABAJIACAHQAEAEAGAAQAHAAAEgFQADgEAAgLIAAgGIAVAAIAAAFIgBAPQgBAHgEAFQgFAFgGADIgHADIgKAAQgLAAgHgDgAIvBIIABhDQAAgHADgIIgBAAIggBSIgYAAIAAhyIAVAAIAABAIgDASIAhhSIAXAAIAABygAF8BIIAAg2IgdAAIAAA2IgWAAIAAhyIAWAAIAAArIAdAAIAAgrIAWAAIAABygAElBIIAAhnIAAAAIgWBnIgQAAIgWhnIAABnIgUAAIAAhyIAjAAIAPBJIAPhJIAkAAIAABygAhHBIIAAhDQAAgHACgIIAAAAIggBSIgYAAIAAhyIAVAAIgBBAIgCASIAhhSIAXAAIAABygAidBIIgEgYIgcAAIgFAYIgXAAIAdhyIAdAAIAZBygAikAfIgKg6IgMA6IAWAAgAkpBIIAAhyIApAAQAHAAAGADQAFADAEAEQAEAFACAGQACAGABAHQgBAHgCAFQgCAGgEAFQgEAEgFADQgHADgHAAIgTAAIAAAvgAkUAIIALAAQAFAAACgCQAEgBACgCQAEgDAAgIIgBgHQgBgDgCgCIgGgEIgHgBIgLAAgAlxBIIAAhyIA8AAIAAASIgnAAIAABggAmXBIIAAhyIAWAAIAABygAnuBIIAAhyIAWAAIAAArIATAAQAGAAAGADQAGADAEAFQADAFACAGQACAGAAAGQAAAIgBAHQgDAHgDAFQgEAEgFADQgEADgHAAgAnYA3IANAAQAGAAAEgEQADgEAAgKQAAgIgDgFQgCgDgDgBQgCgCgDAAIgNAAgAITgzQgFgCgCgDQgCgEgBgEIgBgJIALAAQAAAGADAEQADADAFAAQAGAAADgDQADgEAAgGIAMAAIgBAJQgBAEgDAEQgDADgEACQgFACgHAAQgHAAgEgCgAhkgzQgEgCgDgDQgCgEgBgEIgCgJIAMAAQAAAGADAEQAEADAEAAQAGAAADgDQADgEAAgGIAMAAIgCAJQgBAEgCAEQgDADgFACQgEACgHAAQgGAAgFgCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58,-7.5,116.1,15);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bol();
	this.instance.setTransform(-8.5,-8.5,0.45,0.45);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17.1,17.1);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bol();
	this.instance.setTransform(-5.3,-5.3,0.282,0.282);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,10.7,10.7);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-489.4,-277.5,1.457,1.457);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-489.4,-277.5,978.9,555);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlXERIAAohIKvAAIAAIhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-27.4,68.9,54.8);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-12,-20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-20,24,40);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.body();
	this.instance.setTransform(-71.5,-232.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-232.5,143,465);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand2();
	this.instance.setTransform(-22,-49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22,-49,44,98);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.raketka();
	this.instance.setTransform(-89,-188);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89,-188,178,376);


(lib.Анимация10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.handball();
	this.instance.setTransform(-39.9,-55.3,0.655,0.655);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-55.3,79.9,110.7);


(lib.Анимация9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.handball();
	this.instance.setTransform(-39.9,-55.3,0.655,0.655);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.9,-55.3,79.9,110.7);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bol();
	this.instance.setTransform(-19,-19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bol();
	this.instance.setTransform(-19,-19);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-19,38,38);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,32.8).s().p("AjhDiQhfheAAiEQAAiDBfheQBehfCDAAQCEAABeBfQBfBeAACDQAACEhfBeQheBfiEAAQiDAAhehfg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.1,-32.1,64.2,64.2);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3A4QgYgYAAggQAAgfAYgYQAYgYAfAAQAgAAAYAYQAYAYAAAfQAAAggYAYQgYAYggAAQgfAAgYgYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("НАВЕДИ МЫШЬ", "bold 22px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.setTransform(65.5,0,0.66,0.66);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,142,33);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(0,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:64},14).to({y:-60},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-61.5,22.1,3);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.setTransform(0.5,-2);

	// Слой 1
	this.instance_1 = new lib.Символ44();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.5,-69.6,23.1,139.4);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(-0.1,0,2.23,2.23,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:2.66,scaleY:2.66,x:0.1},4).to({regX:-0.1,scaleX:2.23,scaleY:2.23,x:-0.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-16.4,52.1,32.8);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация11("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89,-188,178,376);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(12,30,0.585,0.585,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15,y:63},4).to({x:12,y:30},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,14.6,34,30.8);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ37();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.5,-7,65.2,16.1);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance.setTransform(-13,-81.4);

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(0,-0.2,0.511,0.511);

	this.instance_2 = new lib.Символ38();
	this.instance_2.setTransform(1.9,-0.5,1.007,1.007);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.9,-66.8,65.6,75.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(-344.9,80.2);

	this.instance_1 = new lib.Анимация8("synched",0);
	this.instance_1.setTransform(-344.9,70.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:70.2},4,cjs.Ease.get(-1)).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},4,cjs.Ease.get(-1)).to({y:-29.8},5,cjs.Ease.get(1)).to({y:80.2},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.Анимация9("synched",0);
	this.instance_2.setTransform(-350.4,102.5);

	this.instance_3 = new lib.Анимация10("synched",0);
	this.instance_3.setTransform(-350.4,92.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,y:92.5},4,cjs.Ease.get(-1)).wait(7).to({_off:false,y:102.5},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},4,cjs.Ease.get(-1)).to({startPosition:0},7).to({_off:true,y:102.5},3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ41();
	this.instance_4.setTransform(-26.1,143.3,1,1,0,0,0,-58.1,126.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-8.7},7).to({rotation:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.3,-171,511.4,376);


(lib.Символ33 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AifCqIAAlTIE/AAIAAFTg");
	this.shape.setTransform(-694.3,-135.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-710.4,-152.9,32.1,34.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhXDPQgaggAAgTQAAgLAGgCQAMgDBGgGIBcAAQAhgDAMAOQAHAHgBAJQAAAOgTALIgfATQgLAKgKAUQgNAPgmAAQgxAAgigrgAhjB7QADgMgHgTQgKgZgBgGQgEgoAAgTQADhGAAgiIAIg1QAGggANgVQAfgyA5ALQA8AKASA4QASAwACALQABAHAAAoIgEBmQgBAUgFAgQgEAVgKAHQgIAGgjAJIh6ABIgEABQgFAAAAgBg");
	var mask_graphics_49 = new cjs.Graphics().p("AhXDPQgaggAAgTQAAgLAGgCQAMgDBGgGIBcAAQAhgDAMAOQAHAHgBAJQAAAOgTALIgfATQgLAKgKAUQgNAPgmAAQgxAAgigrgAhjB7QADgMgHgTQgKgZgBgGQgEgoAAgTQADhGAAgiIAIg1QAGggANgVQAfgyA5ALQA8AKASA4QASAwACALQABAHAAAoIgEBmQgBAUgFAgQgEAVgKAHQgIAGgjAJIh6ABIgEABQgFAAAAgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2,y:-1.1}).wait(49).to({graphics:mask_graphics_49,x:2,y:-1.1}).wait(1));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(0.6,13.3,1,1,0,0,0,0.6,15.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.2},4).to({rotation:0},5).to({rotation:3.7},5).to({rotation:0},5).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-18.8,15.8,34);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// РАЗДЕВАЕТСЯ!
	this.instance = new lib.Символ28();
	this.instance.setTransform(401.1,27.3,1.775,1.775);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleY:3.09,y:36.7},5).to({scaleY:1.78,y:27.3},5).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(400.4,-14.3,1.811,1.811);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleY:3.04,y:-23.5},5).to({scaleY:1.81,y:-14.3},5).wait(6));

	// Слой 2
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(-6.6,26.3,2.304,2.304);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({scaleY:3.71,y:34.7},5).to({scaleY:2.3,y:26.3},5).wait(11));

	// Слой 1
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(-5.2,-15.8,1.384,1.384,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:2.78,y:-26.3},4).to({scaleY:1.38,y:-15.8},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-27.5,575.4,67.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17.1,17.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:720},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,10.7,10.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(0,0,0.487,0.487);
	this.instance.alpha = 0.012;

	this.instance_1 = new lib.Анимация4("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1,scaleY:1,alpha:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.9,7.8,7.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ah7hXID3AAIAACvIj3AAg");
	this.shape.setTransform(158.3,-212.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,15.3).s().p("Ah7BYIAAivID3AAIAACvg");
	this.shape_1.setTransform(158.3,-212.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(115));

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(63.8,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(21).to({_off:false,x:191.8,y:35.1},0).to({_off:true},3).wait(23).to({_off:false,x:447.8,y:43.1},0).to({_off:true},3).wait(22).to({_off:false,x:471.8,y:3.1},0).to({_off:true},3).wait(26).to({_off:false,x:591.8,y:27.1},0).to({_off:true},3).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.9,-222,111.9,221);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(379.9,-112.2);

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(653.8,-358.2);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(439.7,-385.6,248.5,272.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(5.6,-16.9,1,1,0,0,0,5.6,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4},14).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-20,24,40);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-232.5,143,465);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(12.8,-44,1,1,9.5,0,0,12.8,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0},14).to({rotation:9.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-54.6,59.5,103.9);


(lib.Символ5 = function() {
	this.initialize();

	// hand2.png
	this.instance = new lib.Символ7();
	this.instance.setTransform(-78,42.5);

	// Слой 1
	this.instance_1 = new lib.Символ9();

	// hand.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(60.5,12.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.8,-232.5,187.4,465);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},24).to({y:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.8,-232.5,187.4,465);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,142,33);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ36 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AiBh8IEDAAIAAD5IkDAAg");
	this.shape.setTransform(357.5,-759.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiBB9IAAj5IEDAAIAAD5g");
	this.shape_1.setTransform(357.5,-759.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(342.9,-773.9,29.1,28.1);


(lib.Символ30 = function() {
	this.initialize();

	// foto
	this.instance = new lib.Символ12();
	this.instance.setTransform(-740,-37.3);

	// Слой 1
	this.instance_1 = new lib.back();
	this.instance_1.setTransform(-336,-190.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-336,-422.9,672,613.5);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17.1,17.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(1052.7,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-16,y:11},124).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:760,y:-32},79).to({_off:true},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,1066.6,40.9);


(lib.Символ17 = function() {
	this.initialize();

	// ball
	this.instance = new lib.Символ19();
	this.instance.setTransform(-527.2,48.5);

	// foto
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(-824.3,-58.3);

	// Слой 1
	this.instance_2 = new lib.Символ16();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-532.5,-443.9,1066.6,721.5);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 6
	this.instance = new lib.Символ45();
	this.instance.setTransform(-294.9,27);

	// Слой 4
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(3.4,-126.6);

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Eg7DAF4IAArvMB2HAAAIAALvg");
	this.shape.setTransform(8.9,-137);

	// Слой 2
	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(29.8,-34.7);

	// Слой 1
	this.instance_3 = new lib.Символ30();

	this.addChild(this.instance_3,this.instance_2,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-369.1,-422.9,756.1,613.5);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ9_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.addChild(this.cir,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.7,-19,181.8,38.1);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 5
	this.instance = new lib.Символ24();
	this.instance.setTransform(-339.3,-66);

	// Слой 3
	this.instance_1 = new lib.Символ9_1();
	this.instance_1.setTransform(143.6,74.3);

	// Слой 2
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-128.3,37.3);

	// Слой 6
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(-376.7,-43.5);

	// Слой 1
	this.instance_4 = new lib.Символ17();

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-532.5,-443.9,1066.6,721.5);


(lib.Символ1 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(150.6,51);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382,-392.9,1066.6,721.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay();
		    _this.activ.gotoAndPlay();
			_this.pricel.gotoAndPlay();
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay();
		    _this.activ.gotoAndPlay();
			_this.pricel.gotoAndPlay();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pricel
	this.pricel = new lib.Символ36();
	this.pricel.setTransform(-146.9,349.3);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// activ
	this.activ = new lib.Символ33();
	this.activ.setTransform(496.8,198.1);

	this.timeline.addTween(cjs.Tween.get(this.activ).wait(1));

	// Слой 1
	this.main = new lib.Символ1();
	this.main.setTransform(318,150.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(106.4,-272.1,1216.2,903.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
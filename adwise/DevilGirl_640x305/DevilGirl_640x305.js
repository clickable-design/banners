(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/baba_1.png", id:"baba_1"},
		{src:"images/baba_2.png", id:"baba_2"},
		{src:"images/baba_3.png", id:"baba_3"},
		{src:"images/baba_4.png", id:"baba_4"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/cursor.png", id:"cursor"},
		{src:"images/hand.png", id:"hand"},
		{src:"images/palec_2.png", id:"palec_2"},
		{src:"images/palec_3.png", id:"palec_3"},
		{src:"images/palec_4.png", id:"palec_4"}
	]
};



// symbols:



(lib.baba_1 = function() {
	this.initialize(img.baba_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,410);


(lib.baba_2 = function() {
	this.initialize(img.baba_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,90);


(lib.baba_3 = function() {
	this.initialize(img.baba_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,159);


(lib.baba_4 = function() {
	this.initialize(img.baba_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,416);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,858,421);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,332);


(lib.palec_2 = function() {
	this.initialize(img.palec_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,186);


(lib.palec_3 = function() {
	this.initialize(img.palec_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,23);


(lib.palec_4 = function() {
	this.initialize(img.palec_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,65);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#FF0000"],[0,1],0,0,0,0,0,355.3).s().p("EgyOAXmMAAAgvLMBkdAAAMAAAAvLg");
	this.shape.setTransform(321.6,151.1,1.39,1.39);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.4,-58.9,894,419.9);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArbFaQkviQAAjKQAAjJEviRQEviPGsAAQGsAAEwCPQEvCRAADJQAADKkvCQQkwCQmsAAQmsAAkviQg");
	this.shape.setTransform(103.6,49.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqtGTQkcinAAjsQAAjrEcinQEdinGQAAQGSAAEcCnQEcCnAADrQAADskcCnQkcCnmSAAQmQAAkding");
	this.shape.setTransform(97.1,57.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEiFgIhEgPIhLgjIhOgtIgxAhIgrAAIgtgDIgagMIgbghIgcAPIgvAUIhBANIhTgIIhQggIhBhEIhDhfIgbhGIgQh0IAGg3IAvhSIBmhQIBYghIBsgKIBQAAIBSANIAtAUIAoAtIASAKIAWgPIBkgeIBOgDIB6AAIA8AcIBJA5IAeAcIBEBDIAbArIACBnIgMBcIgFAyIhQBxIgwAwIgqAeIgcAMIgnAIIg3gIg");
	this.shape.setTransform(60,36);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,72.1);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAHGCIhEgoIgqghIgZgjIgQg+IAegeIA6h9IAlhqIAQg+IgGhsIgRg0IgcgeIgdgFIgwAKIgtAbIAeg5IAggjIBJgjIArAAIA0APIAzAoIAlA3IAXBVIAMCEIgbDYIg9DmIgZAMg");
	this.shape.setTransform(17.8,39.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,78.8);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgZDeIiOiWIhLh0IgShBIgFhSIAUhBIAjg6IBJglIAtgPIA3gFIAwAFIAZAPIAZARIhMAAIgvANIghAoIgHAlIARBQIA3BTICKBzICWBGIAIBdIgXBLIggBEIgmAgIAAAAIjGiWg");
	this.shape.setTransform(26.6,37.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.3,74.6);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.palec_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,65);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.palec_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,23);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.palec_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145,186);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmzCmQgPgGgKgLQgKgLgFgPQgFgQAAgUIAAitQAAgUAFgQQAFgPAKgMQAKgKAPgFQAPgHATAAQATAAAPAHQAPAFAKAKQAJAMAGAPQAFAQAAAUIAAAhIgyAAIAAgkQAAgSgIgIQgGgIgOAAQgNAAgHAIQgHAIAAASIAACzQAAARAHAIQAHAIANAAQAOAAAGgIQAIgIAAgRIAAgwIAyAAIAAAtQAAAUgFAQQgGAPgJALQgKALgPAGQgPAFgTAAQgTAAgPgFgAHYCoIAAgwQATAAAGgFQAHgIABgVIAIj9ICWAAIAAFPIg2AAIAAkeIguAAIgGDIQgBAYgEAQQgFAQgJALQgKAJgOAFQgOAFgUAAgAM1CoIgKg+IhAAAIgKA+IgwAAIA2lPIBNAAIA2FPgAMkA9IgZioIgaCoIAzAAgAE2CoIAAlPICQAAIAAAxIhbAAIAABdIBJAAIAAAuIhJAAIAABiIBbAAIAAAxgAC0CoIAAkeIg3AAIAAgxICjAAIAAAxIg3AAIAAEegAh4CoIAAlPIA1AAIAAB+IAZAAQATAAAPAGQANAGAKAKQAKAKAFAOQAFAPAAAVIAAAsQAAATgFAQQgFAPgKALQgKAKgNAGQgPAFgTABgAhDB3IAZAAQANAAAGgGQAHgIAAgRIAAgzQAAgRgHgHQgGgHgNAAIgZAAgAj7CoIAAkeIg3AAIAAgxICjAAIAAAxIg3AAIAAEegAopCoIgJg+IhBAAIgJA+IgwAAIA1lPIBOAAIA1FPgAo5A9IgaioIgZCoIAzAAgAr6CoIAAiIQgIAJgOAFQgLAFgMAAQgQAAgNgGQgMgFgIgLQgIgJgFgPQgEgMAAgSIAAiOIA1AAIAACKQAAAQAJAKQAIAFAOAAQANAAAHgHQAHgIAAgRIAAiJIA1AAIAAFPg");
	this.shape.setTransform(87.4,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,174.9,34.4);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AL2DrIAAkNIhMENIg+AAIAAl/IA2AAIAADxIAXhUIAxidIBDAAIAAF/gAIUDrIgLhGIhKAAIgKBGIg4AAIA+l/IBYAAIA+F/gAHHBxIA6AAIgdjBgAC+DrIAAl/IBZAAQAXAAARAHQARAFALANQALAMAGARQAGASgBAXIAAAyQABAVgGASQgGASgLAMQgLAMgRAGQgRAGgXAAIgdAAIAACRgAD6AkIAdAAQAPgBAHgHQAIgJAAgTIAAg5QAAgUgIgJQgHgHgPAAIgdAAgABdDrIAAkNIhMENIg8AAIAAl/IA0AAIAADxIAXhUIAxidIBDAAIAAF/gAkODrIAAl/ICpAAIAAA3IhsAAIAABgIAjAAQAWAAARAHQARAGAMAMQAMAMAFASQAGARAAAYIAAApQAAAXgGASQgFASgMALQgMAMgRAHQgRAGgWAAgAjRC0IAjAAQAPAAAHgIQAJgIgBgUIAAgxQABgUgJgJQgHgHgPgBIgjAAgAl2DrIAAl/IA8AAIAAF/gApMDrIAAl/IA8AAIAACQIAdAAQAWABARAEQARAGALAMQAMAMAFASQAGARAAAYIAAAyQAAAXgGASQgFASgMALQgLAMgRAHQgRAGgWAAgAoQC0IAdAAQAPAAAGgIQAIgIAAgUIAAg6QAAgUgIgJQgGgHgPgBIgdAAgAssDrIAAl/IBcAAQAXAAASAGQAQAFALALQALALAFARQAFAQAAAXIAAANQAAAegJARQgKAUgTAJQALAFAJAHQAJAIAFAKQALAVAAAfIAAAgQAAAWgHARQgFARgMALQgLAMgSAGQgRAGgWAAgArvC0IAjAAQAPAAAIgIQAIgJAAgVIAAghQAAgbgJgKQgJgKgVAAIgbAAgArvAGIAXAAQATABAIgHQAKgKAAgWIAAgVQAAgVgHgKQgHgJgRAAIgdAAgAKyixQgMgEgIgIQgHgIgEgMQgFgKAAgPIAlAAQACAOAGAHQAGAEAMAAQAOAAAFgEQAIgHABgOIAkAAQAAAOgDALQgFALgIAJQgHAIgNAEQgMAEgQAAQgQAAgLgEg");
	this.shape.setTransform(81.3,23.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162.6,47.1);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192,416);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE804F").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgDADAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape.setTransform(1.2,1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.3,2.3);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_2();
	this.instance.setTransform(0,-1.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.5,119,90);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AtPEsIlUgrImYgoIAmgyIhdAcIhkgDIkxjmIAPAvIAKA6IhSBVIj/itIgtgPIg8AtIhEBsIh6iIIngA1IARhOIhGg5IhwAeIg1AhIh6hLIGDgXIKSAFIIAAqID4BCIBGgGIAWByIAmiIIFHA1IAcCKIAohxIAgghIBpANIAeBQIAhg8IBfgbIAjBBIAggyICWgIIAegNIG2gRIBzAHIAeAwIAeg/IAtgHIBYAHIAqCFIAmiSIA3gYIBkACIAKCRIAlieIBiAAIBBASIBrhTIAeANIAmghIA7gQQA8gPAIACQAIABBqAEIBoAFICEhBIFwg4IFjgYIDIAbIEOgjIDrAAICqgIIC0AmIACAoIBQA/ICtghICJgSIBQA1Ih9A5IlCA6ImaC5IiKADIhuhfIiigHIAqg4IhBhVIhVhBIj/hJIiRAQIhfA+IhDA1IgcBDIgRBiIgehLIghg1IhQgZIhuAKIhVAbIh6A6Ii+DEIiKBSIqRA5IgPgtIAFgPIioAIIgDhfIhLgNIAAhaIgeAQIADDeIgSgDIgPkBIgUAAIAABaIgqACIAHClIhLADIgChVIivANIAAA+IiyAmIAcAdIg3AGg");
	this.shape.setTransform(348.4,34.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,696.8,69);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,858,421);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC2BnIAAgZIg9AAIAAAZIgcAAIAAgyIAMAAQADgFACgFIACgOIAGiDIBQAAIAACbIANAAIAAAygACMAdQgBAKgCAFQgCAFgDAEIAlAAIAAiBIgYAAgAEjBOIAAh+IgkB+IgdAAIAAi0IAaAAIAABxIAhhxIAgAAIAAC0gAAEBOIAAi0IBOAAIAAAaIgxAAIAAAzIAnAAIAAAZIgnAAIAAA0IAxAAIAAAagAhjBOIAAi0IArAAQALAAAIADQAIACAFAGQAFAFADAIQACAHAAALIAAAHQAAAOgEAJQgFAJgJAEIAKAGQAEAEACAFQAFAHAAAPIAAAPQAAALgDAIQgCAIgGAFQgFAGgIACQgJADgKAAgAhHA0IARAAQAHAAAEgEQADgEAAgKIAAgQQAAgMgEgFQgEgDgKAAIgNAAgAhHgcIALAAQAJAAAEgEQAFgEAAgLIAAgKQAAgKgEgEQgDgFgIAAIgOAAgAiNBOIgFghIgjAAIgFAhIgaAAIAdi0IAqAAIAdC0gAiWAUIgOhaIgOBaIAcAAgAj/BOIAAhOIggAAIAABOIgdAAIAAi0IAdAAIAABOIAgAAIAAhOIAdAAIAAC0g");
	this.shape.setTransform(31.7,10.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,20.7);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADXBsIAAjXIAjAAIAABSIAQAAQANAAAJADQAJAEAHAGQAGAHADAIQADAKAAANIAAAdQAAAMgDAKQgDAKgGAHQgHAHgJADQgJAEgNAAgAD6BNIAQAAQAIAAAEgEQAFgGAAgKIAAghQAAgLgFgFQgEgEgIAAIgQAAgAAeBsIAAjXIAhAAIAAC4IAeAAIAAi4IAiAAIAAC4IAeAAIAAi4IAhAAIAADXgAgbBsIAAjXIAgAAIAADXgAiTBsIAAjXIAhAAIAABSIAQAAQAOAAAJADQAKAEAGAGQAGAHAEAIQADAKAAANIAAAdQAAAMgDAKQgEAKgGAHQgGAHgKADQgJAEgOAAgAhyBNIAQAAQAJAAAEgEQAEgGAAgKIAAghQAAgLgEgFQgEgEgJAAIgQAAgAjNBsIAAiaIgXCaIghAAIgZiXIAACXIgeAAIAAjXIAwAAIAZCYIAYiYIAvAAIAADXg");
	this.shape.setTransform(31.7,10.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.4,21.7);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.cursor();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJtC+QgRgGgMgNQgLgMgHgTQgFgSAAgWIAAjGQAAgXAFgTQAHgSALgMQAMgNARgGQARgGAXAAQAVAAARAGQASAGALANQAMAMAGASQAGATABAXIAADGQgBAWgGASQgGATgMAMQgLANgSAGQgRAHgVAAQgXAAgRgHgAJ9iEQgIAKAAATIAADOQAAAVAIAIQAIAJAQAAQAPAAAHgJQAJgIgBgVIAAjOQABgTgJgKQgHgIgPAAQgQAAgIAIgAHUDAIAAilIhEAAIAAClIg9AAIAAl/IA9AAIAAClIBEAAIAAilIA+AAIAAF/gAC9DAIAAlIIg/AAIAAg3IC7AAIAAA3IhAAAIAAFIgAAnDAIAAidIgVAAQgTAAgJAMQgKALABAaIAAA9QgBAegFARIg9AAQAGgQAAgeIAAg8QAAggAJgTQAFgLAHgHQAIgJALgEQgUgHgKgUQgJgUAAgdIAAgfQAAgWAFgQQAFgRALgLQALgLARgFQARgGAVAAIBbAAIAAF/gAgLh/QgIAKAAAVIAAAlQAAAXAKAKQAIAIAQABIAYAAIAAh3IgdAAQgOAAgHAJgAitDAIAAkNIhLENIg+AAIAAl/IA2AAIAADxIAWhSIAyifIBCAAIAAF/gAoFDAIAAl/IBZAAQAXAAAQAHQARAFAMAMQALANAGARQAGASAAAXIAAAyQAAAYgGARQgGAQgLAMQgMAMgRAGQgQAGgXAAIgdAAIAACRgAnJgFIAdAAQAPAAAHgJQAHgIABgUIAAg6QgBgUgHgJQgHgHgPAAIgdAAgApuDAIAAlIIhFAAIAAFIIg8AAIAAl/IC/AAIAAF/g");
	this.shape.setTransform(79.5,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,4.3,150.6,39.4);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AjMC+QgRgGgLgNQgMgMgGgTQgGgSAAgWIAAjGQAAgXAGgTQAGgSAMgMQALgNARgGQARgGAXAAQAWAAARAGQARAGAMANQAMAMAFASQAHATAAAXIAADGQAAAWgHASQgFATgMAMQgMANgRAGQgRAHgWAAQgXAAgRgHgAi7iEQgJAKAAATIAADOQAAAVAJAIQAHAJAQAAQAPAAAIgJQAIgIAAgVIAAjOQAAgTgIgKQgIgIgPAAQgQAAgHAIgAIKDAIAAl/IClAAIAAA3IhpAAIAABrIBTAAIAAA1IhTAAIAABxIBpAAIAAA3gAGwDAIg7iaIgSAkIAAB2Ig9AAIAAl/IA9AAIAACoIBPioIA8AAIhUCrIBUDUgAgiDAIAAl/IA7AAIAAFIIA0AAIAAlIIA8AAIAAFIIA1AAIAAlIIA8AAIAAF/gAnKDAIAAl/IBZAAQAWAAARAHQARAFAMAMQALANAGARQAFASAAAXIAAAyQAAAYgFARQgGAQgLAMQgMAMgRAGQgRAGgWAAIgdAAIAACRgAmOgFIAdAAQAPAAAHgJQAHgIAAgUIAAg6QAAgUgHgJQgHgHgPAAIgdAAgAokDAIg7iaIgSAkIAAB2Ig9AAIAAl/IA9AAIAACoIBPioIA8AAIhUCrIBUDUg");
	this.shape.setTransform(72.9,24);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,4.3,137.5,39.4);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AliFHIAAhBIiiAAIAABBIhKAAIAAiEIAeAAQAJgMAFgPQAEgOABgWIARlfIDUAAIAAGeIAhAAIAACEgAnTCDQgBAagGAPQgEANgKAKIBjAAIAAlZIhAAAgAsNEEQgVgIgPgQQgOgQgHgWQgIgXAAgdIAAj5QAAgdAIgXQAHgWAOgQQAPgPAVgIQAVgIAcAAQAcAAAVAIQAVAIAOAPQAOAQAIAWQAHAXAAAdIAAAvIhIAAIAAg0QAAgZgKgLQgKgLgTAAQgTAAgKALQgKALAAAZIAAEDQAAAZAKALQAKALATAAQATAAAKgLQAKgLAAgZIAAhFIBIAAIAABAQAAAdgHAXQgIAWgOAQQgOAQgVAIQgVAIgcAAQgcAAgVgIgAgFEHIAAhFQAaAAAIgIQAKgKABggIANlrIDWAAIAAHhIhNAAIAAmcIhCAAIgIEiQgBAigHAXQgHAXgNAPQgNAOgVAHQgUAHgdAAgAMKEGIAAlSIheFSIhOAAIAAnhIBEAAIAAEwIAbhoIA+jIIBUAAIAAHhgAHvEGIgOhXIhdAAIgNBXIhGAAIBOnhIBvAAIBNHhgAGOBtIBJAAIgljygAjtEGIAAnhIDPAAIAABFIiDAAIAACHIBoAAIAABDIhoAAIAACNICDAAIAABFgAK1j/QgPgFgKgKQgKgKgFgPQgFgOAAgRIAvAAQACASAHAHQAHAGAQAAQARAAAHgGQAJgHACgSIAuAAQAAARgFAOQgFAOgKALQgKAKgPAFQgQAFgUAAQgTAAgPgFg");
	this.shape.setTransform(49.8,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.9,-19.3,169.5,65.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALxBmIgPgkIhPAAIgOAkIh+AAIgzhMIgVAXIAAA1Ig5AAIAAjJIA5AAIAABSIBFhSIBEAAIhOBXIBQBxIBWjKIA3AAIBWDLgALRAWIgWg4IgXA4IAtAAgAEqBmIAAhNIhIAAIAABNIg4AAIAAjJIA4AAIAABMIBIAAIAAhMIA5AAIAADJgAgVBmIAAjJICiAAIAAAwIhsAAIAAAeIBhAAIAAArIhhAAIAAAgIBtAAIAAAwgAiiBmIAAiYIg9AAIAAgxICyAAIAAAxIg9AAIAACYgAmXBmIAAjJIBXAAQATAAAQAFQAPAEALAKQALAJAHANQAFATABAMQgBAJgCAIQgBAHgDAFQgDAHgFAGIgKAKQgMAJgQAFQgQAFgTAAIgcAAIAAA6gAlfAAIAbAAQAIAAAFAAQAHgCADgEQAEgDADgFQACgFAAgGQAAgHgCgFQgDgFgEgDQgDgDgHgCQgGgCgHAAIgbAAgApYBmIAAjJICjAAIAAAwIhsAAIAAAeIBiAAIAAArIhiAAIAAAgIBtAAIAAAwgAq0BmIAAhHQgKAGgPADQgNAEgOAAQgQAAgMgFQgNgEgJgJQgJgJgEgNQgFgKAAgQIAAhNIA5AAIAAA9QgBAIACAGQACAGADAEQADAEAFACQAGACAIAAQAKAAAJgDQAJgDAHgFIAAhSIA4AAIAADJg");
	this.shape.setTransform(81.4,10.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,162.7,20.5);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEB3B").s().p("AjMCVIAAgpIh7AAIgDApIgnAAIAAhQIATAAIAKgaQAEgOACgOIAEghIAChEICOAAIAACbIAYAAIgGBQgAkfgbQgCAlgDAPQgHAegGAOIBMAAIAAh0Ig6AAgAoABtQgLgCgJgDQgKgEgIgGQgIgFgHgHQgHgHgGgIIgJgRQgEgKgBgJQgCgKAAgLQAAgKACgJIAFgSQAEgJAGgJQAFgIAHgHQAHgGAIgGQAJgGAJgDIAUgHQALgCALAAQALAAALACQAKADAKAEQAJADAIAGQAJAFAHAHQAHAHAFAIQAFAIAEAKQAEAJACAJQACAJAAAKQAAALgCAKIgGATQgEAIgFAJQgGAIgHAGQgHAIgIAFQgIAGgKAEQgJAEgLABQgKADgMAAQgLgBgKgCgAoCgtQgLAFgIAIQgIAJgEALQgEAMAAAKQAAANAEALQAEALAIAIQAIAJALAFQALAEANAAQANAAALgEQALgFAHgJQAIgIAFgLQAEgLAAgNQAAgKgFgMQgEgLgIgJQgIgIgLgFQgLgFgNAAQgMAAgLAFgALzBsIAAh+IhWB+IgpAAIAAjCIArAAIAAB/IBWh/IAoAAIAADCgAIpBsIgSgsIhTAAIgSAsIgsAAIBVjEIAnAAIBUDEgAIIAaIgag9IgaA9IA0AAgADwBsIAAjCICJAAIAAAnIheAAIAACbgAA1BsIAAjCIBQAAQASAAAOAFQAOAFAJAJQAKAJAFANQAFAMAAAQIgBAQQgCAEgDAHQgGANgLAJQgKAIgPAFQgOAEgRAAIghAAIAAA7gABgALIAjAAQAHAAAHgDQAGgCAFgEQAEgCACgGQADgFAAgGQAAgHgDgGQgCgFgFgEQgEgEgHgCQgGgCgIAAIgiAAgAiEBsIAAjCICSAAIAAAnIhnAAIAAAnIBaAAIAAAkIhaAAIAAAqIBoAAIAAAmgAqkBsIAAibIhNAAIAACbIgrAAIAAjCICjAAIAADCgAK4hoQgIgDgGgFQgGgFgEgJQgEgIgCgKIAZgEQADAJAFAFQAGAFAIAAQAJAAAGgFQAFgFACgJIAZAEQgBAKgEAIQgEAJgGAFQgGAFgIADQgIADgKAAQgJAAgIgDg");
	this.shape.setTransform(79.8,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,159.6,29.9);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,410);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,159);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-152,-166);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-166,304,332);


(lib.shape34 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AA+CSIgggFIh1AIIgQgDQAJgfACghIACgzQADgWAMgIQAOgIAjAAQAYAAAJAWQAFAJADAOIAMBHIAQgkQAHgNAHAAQAJAAANAbIARAnQADgJAAgSQAAgJgEgRIgFgZIgqgLQgegJgFgQQgHgOgSgVQgYgYgQAAIgTAFIgPAGIgXAAIgEgYIgDgNIAEAAIADgBIADgCQAOgtAugeQgBASATANQAVAQAFALQAMAnAFAJQAMAPAXAAQAYAAAfgWQAigZABghIAMAOQAEAFAAAIQAAAhggANQgfAMAAAkIADAJQAEAFAHAAIAYgIQAKAUAEAdIAEAfIgBARIABAAQgdAmggAAgAiQAXQgLgHAAgLQAAgFAGgNQAGgOAGAAQADAAAGAFIAIAGIADAIQAFAIAAAHQAAAFgGAIQgFAIgGAAQgFAAgKgFg");
	this.shape.setTransform(-47.5,76.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AmLFaQgPgOAAgfQAAgdAKgZQALgbADg7QACg3AigHIAagEQANgEAFgPIADgcQADgUAJgHQACgCAXgHQAUgFAAgGQACgYAYgTQAYgSAAgZQgBgpALgVQASgfAvAAQArAAAIAIQAJAJAAAuIAAAIIgDASQgEAWgIAHIAAgDQAEgZgHgUQgIgYgSAAQgtAAgDAdQgGAxgUAWIg0A2QgTAXgZAlIAAAtIgDAAIACANIAEAYIAXAAIAQgGIATgFQAQAAAXAYQAVAVAGAQQAGAQAdAJIArALIAEAZQAEARABAJQAAASgEAJIgQgnQgNgbgKAAQgHAAgGANIgQAkIgNhHQgCgOgFgJQgMgYgXAAQgjAAgPAKQgMAIgCAWIgDAzQgCAhgJAfIgBAFIgBAAIhPAHQghAAgPgOgAk4C7QgFAOgBAGQAAALAMAHQAJAFAFAAQAGAAAGgIQAFgIAAgFQAAgJgEgIIgEgIIgIgGQgFgFgEAAQgFAAgHAOgADIEmIgmgYQgYgRgVAGQAKgQAHgDIAZgBQAxAAAVA0IgDABIAAACgAGFCjIgCgNIgRADIgPADQgEAAgWgKQgXgLgCgFQAJgFALgMQAIgJAIAAIAnAGQAgAHgBAHQAAAPgUAogADhCsIgIgCIADgRIAbAAIAAAKQAAAKgNAAgAD3BvIACgEQADgDAHgBIACgBIAFgBIAJAAQAEACAAAIQAAAIgEACIgMADQgQAAAAgNgADXhYQgUgVgfAAIgoAHIgZAHQgGAAgMgVQgNgVAAgHIASAIQARAHAGAAQAHAAARgLQARgMAQAAIAmADQAYABANgCQAagEAggaQAlgdACgeIAEAAQABAJAEAGQAGAHAIgBIACgDIABgGIgIglIgJgpQAgAPAJAMQAHAMABAdQgBAPgGAbIgHAcIgCAFIgCADQgSASgvAhQg8AqgPAAgAEklaQAAgKADgDQAJAAADADQgHABAHABIALABQACAIgEAGQgEAGgKAAQgKAAAAgNg");
	this.shape_1.setTransform(-31.2,56.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,20.2,82.2,72.1);


(lib.shape33 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AB+BLQgXgKg9AAIhKAGIg5AFIgXgRQgegaAAgcIADgPIACgVIAVAAQAGAIANAZQAFgNAcgdIAngoQgGARAXAkQAXAmAgAAIAigIIAggFIAVACIABApQACAdAGALg");
	this.shape.setTransform(-52.5,82.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AhrFyQgFgLgCgdIgBgqIgVgDIggAHIgjAIQgfAAgagoQgWgkAGgRIgnAoQgdAdgEAPQgNgbgHgIIgUAAIgCAVIgDARQAAAcAeAaIgDASQgegCgggPQgogVAAgeQAAgbAjgyIA2hKIABAjQACARANAAQA1AAAgg0IAZgvQAQgdAPgQIAEADIAAAvQgHAhAAAPQAAAYASAhQAVAmAWAAQAVAAATgTIApghIACADIAHAeQAFATAAANIgDAeQACAcAQAAQAnAABSg/IAXgRQAPgHATAFQAXAFArgoIAAAaIgYAaIgYAWIAAAAIgBAAIgBAAQgBAAgBAAQgBABAAAAQAAAAAAAAQAAABAAAAIhqAzQhcAtgMAAgAGHD4IgJgHIgDgDQABgGAGgEQAIgFAMgBIAQAJIgCARgAGpDNQAEgSAHgHQAFgHANAAIADAAIAMADIAAAUIgLAJIgHACgADeCpQgMgQgNAAIgoAGQgXAAgdgXQAjgGAmgxQAigtAmAAQAVAAAOArQALAjAAAoQABAQgUAJIgVAFQgYAAgKgPgAg2CmQgGgFgPgiIAAgiIADAAQAMAdAoABIAWAEQAKAFAAASQAAAIgCADIAAACQgMAKgSAAQgbAAgHgHgAi7AbIAdgbQAOgMAMAAQAFAAAMAIIAPAFIAGgBQAEAYgYAAIgegEQgJAAgiAVgABfgDIA0g6IA5g5QAYgegBgqIgBgTQgDgbgPgXQgNgUgegcIAKgMQAPAAAlAXIAhAXIAIgBIADgCIAAgRIgfhHIABAAQAzAMAVArQAPAgAAA5QAAA8hUBFQgnAhhqA8gADxjiIABAPIACAKQAFALALAAQAOAAACgGQgBgMAEgKIAGAFIgDgGIgDABIAAAAIgRgPQgKgKgEgKQgHAGAAAVgAGtkwQgDgEgBgRIABgOQADgMAOAAQAKAAAEAHIAFAIIABADIAAAOQgBANgIAEIgIABgAAsljIgDgBQgCgRAOAAIAcADIAAAGIgKAGIgTAFg");
	this.shape_1.setTransform(-27.3,53.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.3,16.5,93.9,74.9);


(lib.shape32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AhCCcQgUgOgMAAIABgHIAFAAIAlgGQAbgHAFgHIAAgTIgygIQgmgIAAgZQAAgaBNgdQBAgZAWgBIACAFQgqAKgaARIgKAHQgbAUAAAWQAAAPAJACIAVAAQA0AAAwgoQArgjAAghQAAgLgLgCIgVAAIgiADIBQg0QAwgcAkAAQALgBAFAVQADAMAAAMQAAATg8AyQhJA5gKAPQgVAbhwBUQgKAAgTgOgAjuhhQAAgiA3geIAQgIIAdALIAgAIQgFALgKAHIgLADQgSAFgaAOQgtAZgOACQgDgDAAgLg");
	this.shape.setTransform(-29.4,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AnVEwQAAgKAGgSIAFgTIAIAAQAIAEARAWQANAQAMAAQAJAAAxgxIA1g1IASAAQAAAQAGAiQAJAsALAAQAKAAASgMQAWgOAJgRQABATAIAqIAOA2QgHAJgKACIgdAAIhPgGQgVAAgiAMQgjAMgUAAQhHAAAAhYgAFTDxQgFgFgBgOQgBgKgIgFQgIgFgBgIIAagDQAaAAAIAPIAGgEIAJAAIAAAaQgEAHgOAHIgQAGQgNAAgEgHgAhdCeIAFgRIADgPQAAgNgXgJQgQgGgMAAIgHABQAKgHAFgLIgggIIgdgLQAlgSAeAAQAYAAATARQAUATAAAYQAAAWgNAUIgdAtQAAgKAIgXgACMAdQBLhRAAhEQAAhmghg7Qgeg1hBghIAEgJQBmAEAtAtQAuAuAABnQAADJjbBQQApgkAigmgAgdgYQgGgVgVgSIgjgaIgfgdQAHgMAQgEIAUgBQAXAAAdARQAhAVAAAbQAAARgGAWQgHAbgMAEIADAEQgHgGgGgWgAGpgdQgKgEAAgOQAAgZAcACQAbADAAAUIgCAMQgGAJgVAAgAGVjVQgBgGABgFQACgJANAAQAVAAgJAWQgHAUgPAEgAGTkbQgMgRgVgCIAEgOIApgGIAgACQAKAEAGAYQgPAZgTAAQgMAAgOgQgAiglQIAAgFIAcgNIAbgMIAAABQALAAAKAGQgDANgNAFIgZAFgAgblmIgLgBIAAgRQAEgBANgHQALgHAJAAIAGACIAFABIgCAKQgBALgCAEQgFAHgPAAg");
	this.shape_1.setTransform(-27.2,54.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.3,15.6,94.1,79.6);


(lib.shape31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("Ag4EmQgPgKAAgIQAAgOANgRQATgYAEgIQgFAIgNAGQgMAGgHAAIgIgDQgGgDAAgHIAEgLQAFgIAAgFQAAgLgXgHQgYgIAAgPIADgPIAEgKIAFgEQAqgqAYgmQArhAAAhEQAAhLgWgwIgHgMIAAgVIAAgZIAJgTQAKgQAJAAIAQAEIASANQBfBIAABMQAABQg9BPQgwA/hMA5IAAAWIA3AAIAdgDQgNASgRAqQgSApgOASIAAATIAJADIgFABQgKAAgMgJg");
	this.shape.setTransform(-16.5,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AktDQQBaiMBPAAQAYAAAKAIQAOALAAAcQAAAqgLAZQgSAogLAwIBCgmQAagNAUgQQAQgPgBgmQgCgmAOgNIANgMIgFAKIgCAQQgBAOAYAIQAXAHAAALQAAAFgFAIIgEALQAAAHAGADIAJADQAGAAAMgFQANgHAGgIQgFAIgTAZQgNAQAAAOQAAAIAPAKQARAMAKgEIASAAQgFASgZAMQgqATgMAIQgYAchbAwQAXgOAegxQAZgtAAgNIAAgJIgEADQgkAXg8AtQgoAgg+AUIgfAAIATgxQAPgkAAgUIgDgeQgFgcgLAAQg5AAgWBSIgMA4QgGAagHgBIgQgCIgQgDQgMAAgMAGIgeALQAghbA/higAi5CVQgIAJAAARQAAAMAGAEIATADQASgBAMgMQAOgNAAgVIgCgQIgeAAQgVAGgIAMgAEBEJQgRgbgjABIAAgXIAcgMIAXgFQAfABAJAHQAMAKAAAcQAAA4glAQQgCgggMgUgAD6B8IAAgUQAHgFAIAAQAJAIACAPIgIACgAEtBOIgKgCIAAgGQAEgJAPgFIAPAFQABAUgNAAgAFigHQAAgLAFgIQAFgFAGgCIACAHIAOALQALAKAAAFIgDAJQgDAJgKAAQgcAAABgZgAivgfQgXgJAAgWQAAgYAggJIAzAAIAIAcQABAJgGAIQgIAJgBAHIgNAEIgMAEgAExiWQgFgGAAgJQgBgIAMgOQAMgNAIgEIgGgKQgDgDAAgHIABgIQACgGAJgDIAAgaQgQAFgUgRQgWgTgOAAIAAgDIAoAAQAyAEAMAwIAHApIAEAVQgQAggGAHQgJAHgVAAQgKAAgIgJgAkgj0QA0hDBJgpQBPgtBSAAQBGAABLAvIgDAGQgJgBgKARIgJASIAAAZIgOAAQgug5hkAAQgrAAhCAaQhJAdg4Atg");
	this.shape_1.setTransform(-31.1,54.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.8,14.4,79.5,79.6);


(lib.shape30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhLCFQgMgaAAgUQAAgnCvjOIgyBbQg1BkAAAMQAAANAGAOQAGANAAANQAAAGgGAYIgFAWIgBAFQgIAFgGABIgUABQgNAAgNgdgAhRhvQgGgKAAgRIADgOQAFgJAIAAIAIABIADAAQADADgCAPIAEAIQAGALAAAEIAAAKQgCAJgLAAQgMAAgHgLg");
	this.shape.setTransform(-24.5,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5A90A").s().p("Ah9CcIgOgBIgIgRIgFgYQAAgLADgJIACgDQAIgSAVgKQAjgRAAgJIgDggQABgcAQAAQARAAAAAXQAAALgKAEQgKAEAAATIAAAAQAAAcAOAKQAMAIAgAAIADAAIABAAQAXgCBOgZIAWgIQgCAGgLAKIgBABIgEADQgPANgKAFQgZAKgcAEIgZgBIAAgBIAAgBIgDAAIgEAAIgngBQgRgDgMgNIgDADIgaAAIgTAOIgBAVIACAQQAEAKAJALgABohlIAAgRQAFgFADgOIADgQQgCAMAMAKQAMAJAQgBIgaAWgAB0ibIgBACIABgCg");
	this.shape_1.setTransform(-49.8,76.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF18").s().p("Ai9FjIgCgQIACgVIATgPIAZAAIAEgCQALANASADIAnABIAEAAIACAAIAAABIABABIAbABQAcgEAWgLQAKgEAQgNIAEgDIABgBQALgLABgFIgVAHQhMAagaABIAAAAIgEAAQgfABgMgJQgPgKAAgbIAAAAQAAgTALgEQAKgEAAgOQAAgWgRAAQgRAAAAAeIACAgQAAAJgiARQgWAJgIATIgBADQgEAJAAALIAFAXIAJASIgwgJQgpgLAAgSQAAgfBChhQBDhiAYAAQAZAAAHAWQAEAMACAmQACAjAHAOQAMAXAfAAQAWAAAWgOQAdgRAAgZQAAgTgSgRQgRgRgXADIAAgEQAjgDADgnQgEgvAEgUQADgPAdgqQAZgnAAgZQAAhMgagvQghg8hFAAQhAAAgmAXQgrAZAAAxIADAcIACAhIgdgnQgCgGAAgnQAAgzA0g9QA8hFBLAAQARAABBAQQBCAQAKAGQARAJAIAJQANANAAAXQAAAKAIAWQAJAaAIAAQAWAAARgPQAQgOANAAQAnAAAAAfIgFAJQiwDPAAAmQAAAUALAaQANAcANABIAUgBQAGgBAJgGIAZARIAGAGQgzAHgRANQgPAMgEAZIgCAVIACAIIABAHQAGgYAIgJQAHgGAPAAQAJAAAHALQAFALAAAKQAAAYgNAMQgNAMgVAAQgHAAgLgNIgMgQIgKASQgHARAAAJIAEAaQAFAOAAAMQAAAWgNALIgOALIgZgHIgugMQgXAAhAAOIhVAPQgKgLgEgKgAA1BRQgDAOgFAEIAAASIAXAAIAbgWQgRABgMgJQgLgKACgMIAAgCIAAACgABtjQIgDAOQAAARAGAJQAGAMAMAAQALAAACgJIAAgKQAAgFgGgKIgDgJQACgOgEgDIgDgBIgHAAQgJAAgEAJg");
	this.shape_2.setTransform(-43.9,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E18403").s().p("AisELIAOgLQANgLAAgWQgBgMgEgOIgEgaQgBgJAIgRIAKgSIAMAQQAKANAIAAQAUAAAOgMQANgMAAgYQAAgKgFgLQgHgLgJAAQgPAAgHAGQgIAJgGAYIgBgHIgCgIIACgVQAEgZAPgMQAQgNA0gHIACABQASAPADAOQAIAegGAXQABAHAnABIAjgCQAMgDAdgVQAAAfgxAVQg5ATgOAJQgIAEgfAnQgXAcgiAOIADAHQgPAPgYAAgABRAxIgCgDQAAgOAHgKQAHgOAOAEIAAADIgEAUQgEAOgMABgACdgNQAAgkgbgSQgcgTAAgiIADgYQAFgOAQAAQAJAAATAoQATArAAAeQAAARgEASgABBjVQgYgOABgSQAAgOAIgIQAHgFAMAAQAbAAAAAtIgDAoQgCgJgagRg");
	this.shape_3.setTransform(-19.7,64.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.6,17.1,70.4,75.2);


(lib.shape29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhbFIQgGgOAAgTQAAgSADgGQAMAAAQAPIAXgIIAigDQAJgBAOgQQAQgTAJgaIAIAMQABAFAAAPQAAAVgGAYQgFAWgHALIgFAAIhGAIgAAMkBIgYg1IgCgFQAAgNAIgCIALAAQANAAAlASIArAXQgZABgPAPQgOAOAAARQAAAPAGAdIAAADQgIgHgeg3g");
	this.shape.setTransform(-42.6,60.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("Ai2FgIAAgEQgCgsgUgXQgVgZAAgHQAAgNAKAAQAMAAAjAYQAjAZALAAQAkAABJg1IAggaIAhgaIBHg1IANAEIAOAEQAKAAALgMQALgNAOAAIALAAQAHABADACIAEAAQAFAFAAAKQAAARgeAHIhCAKQgwAIgYASQgYATAAAeIAGAxQAAAZgSAlIgHABIgBABIgCAAIgBAAIgXAFQAHgMAFgVQAEgZAAgUQAAgQgCgEIgFgNQgJAbgQASQgPARgLAAIghADIgXAJQgQgPgMAAQgDAGAAASQAAATAGANgABvBRQgLgCAAgLIADgKIADgMQgPgDgRgSQgSgVAAgQIAGgZIAHgYQAHANAfAeIAeAaQAAAHgFAGQgHAGAAAGIAhAHQAVAGABAMQgGAKgSAHIgdAGgAgli6IgghYIAAAAIgKgeIgaAAIgHAHIgCAKQABAIAFASIAAAOQgIgEgKgUQgLgTABgIQgBgMAPgXQARgZAQAAQAFAAB5A8QAvAWAdAYQAVASALATIABADIgBAAIgegHIgjgEQgUAAgUARQgXASgBAaIAAABQAAARAMAvQgigUgfhFgAg7kcIADAGIAaA1QAdA3AHAHIAAgDQgGgdAAgPQAAgRAOgOQAOgPAZgBIgrgXQgigSgNAAIgNAAQgJACAAAMg");
	this.shape_1.setTransform(-38.1,57.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("Ak8FsIAAhIQADgdAjgbQAggZAWAAQAIAAAjAPQAjAPAJAAQAcAAAlgPQAxgUAAgeQAAgJgGgHQgHgJgOAAQgJAAgaAJIghAJQgfAAgagMQgigQAAgdIAFgjQAGgdAAgNIgBgWQgDgLgNgPIADAAIAoARQAaAPAIAVQAFANAEAoQAFAgAUAAQANAAATgIQAUgKAAgKQAAgSgLgYIgOghQgEgQgXgGQgVgHgCgUQgDgngqgvQgogrgXAAIgGAAIgDACQAGAYADAcIAHA5IgVgeIgYgkQgogzAAgWQAAheBRg2QBIgxBuAAQBuAAAuAyQAdAhA1BoQALASAIAwQAJAwALASIAzAtQAnAfAAAZQAAAcgTAXIgTAVIAFARQAEARAAAKQAAA4gPAUQgRAWg/AWQguAQgnAbIhGAxIABAFIgnAIQASglAAgYIgGgxQAAgeAYgTQAYgTAwgHIBCgKQAegHAAgRQAAgKgFgGIgDAAQgEgCgHAAIgLgBQgOAAgKANQgLANgLAAIgOgEIgNgEIhHA1IgfAaIgiAaQhJA0gkAAQgLAAgjgYQgjgZgLAAQgLAAAAANQAAAHAWAaQATAWACAsIgQACgAApgEIgGAXQAAASASAUQAQATAPADIgDALIgDALQAAALALABIAQAAIAdgFQATgHAFgKQAAgNgWgFIgggIQAAgFAGgGQAGgGAAgIIgegcQgggcgHgMgABoh1QgRAOAAAXQAAAlA+ApIBUAsQABgRgLgeQgKgdgMgUQgRglgJgOQgPgYgWAAQgUAAgOAMgAAGhBQgJguAAgRIAAgBQAAgaAVgTQAUgRAUAAIAjAFIAeAGIACAAIgCgCQgLgUgVgSQgdgYgvgWQh5g8gFAAQgQAAgQAaQgPAWAAAMQAAAIAKATQAKAVAJAEIAAgOQgGgSAAgIIABgKIAHgIIAaAAIALAeIAAABIAfBXQAfBFAiAUIAAAAg");
	this.shape_2.setTransform(-36,54.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.7,16.2,63.5,77.8);


(lib.shape28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AheEjIgCACIgTgCIAsgXIASgJIAAAAIAHgEIAAAAQAggQAIAAQAFAAABADIAEAFIAAAMQAAANgKAPIgFAFIhTACgAAZDyIgFgEIgBgEIATgYQAMgQAAgLIgDgVIgBgDIgCgNIgCgQQAAgRAcgBQANAAARAaQAQAZAAARQAAAXgZAZQgYAWgRABQgNAAgMgJgAgwjDQgrglAAgRQAAgNAogQQAkgPAPAAQANAAAkAOIAYAJQgjABgaAgQgcAnARArIAAAFg");
	this.shape.setTransform(-40.1,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AgZE1QAMgPAAgNIAAgMIgEgFQgDgDgFAAQgIAAggAQIAAAAIgHAEIAAAAIgSAJIgsAXQgWgBgugBIAAAAQBFgVA1gYIAIgDQArgVAWgTQAVgTAAgSIgDgOIgHgaQgHgcACgGQA8gKAlAfQAhAdAAAxQAAAVgMAXIgMAZIgwAfIg7ACIgcABgAAXCYIACAQIACANIABADIADAVQAAALgMAQIgTAYIABAEIAFAEQAMAJANAAQARgBAYgWQAZgZAAgXQAAgRgQgZQgRgagNAAQgcABAAARgACNBDQgmggAAgNIADgWQAEgHAOAAQAQAAAaAYQAdAdAAAXIgBANQgBAHgHAIIgIAIQgLgOgagYgAgBhPQgegjgZgSQglgbgrAAQgqAAgMAbQgHANgFA/QgFgDgLgfQgKgeAMg2QAMg4BNgqQBMgqBLAAQAXAAAZAMIAwAUQAYAIAQAbIARAfIAEALIAAAuQgLgQgRgNQgRgMgHADQgDgFgegHQgcgHgSAAQgdAAgJAgQgGASAAApIABAmIAPAwQgOgbgJgNgAhGkAQgoAQAAANQAAARArAlIAzAtIAAgFQgTgrAegnQAYggAjgBIgYgJQgigOgOAAQgQAAgkAPgACjhWQAAgOAfgHQAZgFAEATIABAIIAAAMQgDAGgPAAQgrAAAAgTg");
	this.shape_1.setTransform(-38.2,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("AlCFLQAPgSCBguQB2gqAAgcQAAgSgagQQgngXgMgNIAAgOIAngGQgCgahEhDQhDg/AAgkQAAhvA6g+QBEhLCSAAQBIAAAXAJQAfANAiAyQAFAIADAeQACANAFAJIANAOQAHAFAHAdQAGAcAAARIgDAkQAaAFAZAYQAeAcAAAfQAAA9gKAiQgPAxgpAkIhUBFIgyAkIAMgZQAMgXAAgVQAAgxghgdQgkgfg/AKQgCAGAJAcIAIAaIACAOQAAASgXATQgUATgrAVIgIADQg1AYhEAVIgCAAIgPABIh6ABgAB8AVIgCAWQAAANAlAgQAaAYAMAOIAIgIQAHgIABgHIAAgNQAAgXgcgdQgbgagPAAQgOAAgFAJgAiEgbQAAAcAqA2QAgAoAaAHIAAgEQAQgBAKghQAGgYAAgZQAAgSglgfQgjgdgRAAQgrAAAAAkgADFAAQAAATAqAfIA0AeQgJgugIgUQgPgfglgBQgZABAAARgAAogSIgPgwIgBgmQAAgpAGgSQAKggAcAAQASAAAdAHQAdAHADAFQAHgDASAMQAQANAMAQIAAguIgFgLIgQgfQgRgbgXgIIgxgUQgYgMgXAAQhMAAhMAqQhMAqgMA4QgNA2ALAeQAKAfAFADQAGg/AGgNQANgbApAAQArAAAmAbQAZASAcAjQALANANAbgADUhWQgeAHAAAOQAAATArAAQAPAAACgGIAAgMIAAgIQgDgPgQAAIgLABg");
	this.shape_2.setTransform(-40,57.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,24.3,64.6,67.2);


(lib.shape27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AkJEIIgFAAQgHgJAAgFIAKgWQAKgVgBgEQACAJAKALQALAMAIAAQAhAAARgdQALgSAGgkQgaADgWgRQgWgSgCgXQAJgEANgDIATgEQAUAAAcAXQAfAZAyAGIAAgDQgagNAAglQAAgGAGgMQAFgLgCgGIAOAAQASADAKATQAMAVAAAjQAAAWgNAoQgNAlgQAMIgYAEIAGACIABAAIglAGIiAALgAACB3QAAgJAMgMIANgLIAIAEIAMAGQAHADAAADQAAAKgJAIQgJAIgRAAQgRgFAAgFgAB+BEIgSgKQgJgFAAgMQAAgRAJgMQAKgNAQAAIAMABQAJAEgBAHQAAAOgGAUQgJAXgMAAIgBAAgAjIgHQgagQAAgVQAAgSAMgNQANgPAVAAQAIAAARAPQARAQAKASQAcAug2AAQgWAAgYgMgAAFg7IgxgtQgjgeAAgmQAAgkA6gdQAwgaAxAAQAUAAAVAYIAXAYIgGAFIgkgDQhdAAAABdQAAAVALAcIACAGIAPAmgAC6ieIAAgVQAAgUAGgJQAIgLAUAAQAbAAAOALQAMAJAFAUQgNgEgEAIQgGAKgFAAIgMgDIgOgDQgQAAgDAIIgIAeg");
	this.shape.setTransform(-29.5,66.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AkoFgIhSgDQAPgdAvgWQAkgQAAgmQAAgoAQgmQAUgwAkgSIgGgSQgGgPAAgIQAAghAOgjQAVgyAiAGQgOgiAggjQAbgeAkgKQAPgEADgXQAEgdAGgHQATgVASgFIAhACIAAgRQgHgNgSgLQgSgNgQAAQgXAAgTANQgMAIgGALQgIALgCAOIgEAAIAAglQANglAHgLQAPgXAeAAQAmAAAYAXIAgAoIAAAfIAQgEQAIgFAJAAQALAAAgAKQAgAKAPAAIAyACQAeAGAKAYQARAnAvAoQAiAcAAA+QgBASgJAIQgLAJAAAPQALABAMANQALANAAAMQABAZgUAQQgOANgeALIgMAoIgHAVQgFALgFAFQgUAVg2APQg6APgugIQAOAmg4AiQgiAVg7ANQARgMAKgkQAOgoAAgWQAAgjgMgVQgJgUgSgDIgNAAQACAGgGALQgFAMAAAHQAAAkAaAOIAAADQgygHgfgZQgcgWgVAAIgTADQgNADgIAFQACAXAVARQAWASAbgDQgHAkgKASQgRAdgiAAQgIAAgLgMQgKgMgBgIQAAAEgJAVIgKAVQgBAGAIAIgAA2C9QgMAMAAAKQABAFARAEQAQAAAKgIQAJgHAAgLQAAgCgIgEIgLgFIgIgEgACVBnQgJANAAARQAAALAJAFIASALQAMABAJgZQAHgTAAgOQAAgHgJgFIgLgDQgRAAgJAPgAitAOQgNANAAASQAAAVAaAQQAYAPAWAAQA3AAgdgxQgJgSgSgQQgQgOgIAAQgVAAgNAOgAARiRQg4AdABAjQAAAmAjAfIAwAqIAdAgIgPgmIgCgFQgMgbAAgVQAAhdBeAAIAkADIAFgEIgWgZQgVgXgVAAQgwAAgzAagADoh1QgFAJgBAUIABAWIALAYIAIgeQADgHAQAAIANADIANADQAEAAAHgLQAEgIANAEQgFgTgMgJQgOgMgcAAQgUAAgIALg");
	this.shape_1.setTransform(-33.5,57.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.4,21.7,75.8,71.1);


(lib.shape26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhgA2IgHABQAHgTASgVIAognQAZgXANgEIAzgFIAVACIAdABIABABIACACQg8ATgYAUQgdAXgFAtg");
	this.shape.setTransform(-47.7,85.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AjXDvQAEgsAggaQAXgTA8gUIgCgBIAAgCIgdgBIgWgBIg1AEQgMAEgaAXIgoAqQgRAVgIASIghADIAEgJQARguARgOQAngjAygWQAWgLAigBIA1gBQA3gEAAhAQAAgHgOgfQgPggAAgPIADADIAnAlQARAOAHAQIAKAfQAHAMATAAQAUAAAPgHQATgLALgcIAAAYQABARgQARQgKALgaASQgVAPgagDQgLgCgDAMQgEARgFAEIhCA2IgzAugAAWC8QANgTAUgVQAYgXAMAAIAZAAIAEgBIAPgCQAJAggrAPQg5AMgZAKgAAphnQgPgWAAghQgBgYAUgNQAMgJApgOIANAAQgfAsAABDIAAAmQgcgUgLgOgAEdjTQgRgMghAAIghABQgXACgSAIIgHAAQAXgRAlgIIA/gHQAjAAAMAJQAPAKAAAaIAAATQgDAKgJAEQggglgKgIg");
	this.shape_1.setTransform(-27.5,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E78A0E").s().p("AhfErIgtgEIAzguIBCg2QAFgEAEgRQADgMALABQAaADAVgOQAagSAKgLQAQgRgBgRIAAgYQgLAcgTAKQgPAIgUAAQgTAAgHgMIgKgfQgHgQgRgQIgngkIgDgCQAAANAPAgQAOAhAAAGQAABBg3AEIg1ABQgiABgWAKQgyAXgnAiQgRAOgRAvIgEAJIhtAIQAKgJA5gnQAigXAJggQAIgcAtgfQAsgfAiABIAyAFQARAAARgWQARgYAAgZQAAgRgOgeQgSglgTAAQgaAAgXAOQgaARAAAaQABAIAFARQAGARgBANIgDAAQgHgNgUgSQgHgIAAgdQAAguAdgeQAcgcAogBQAWABApAQQArATABAQQALhXAegqIASgYQAIgKAAgLQAAgsg5AAQgUAAgoAMQg1APgFAVIAAgCQAAgsAYgUQAXgUAtAAQAwAAAmAnIAZAbQAMAMAGgBQAJABAvgUQAwgUA9AAQBMAABAAwQBEA1AABJQABBLgsAvQgtAzhIAAQgkAAgWgNQgcgSAAgmIABgZQADgNANgUIAAADQgDAZARAOQAQALAcAAQAeAAAAgiQAAgfgWgQQgUgPgiAAQgYAAgRAPQgSAQAAAeQAAASAXBjQAAAkgIAOQgMASglgEIAAAEQAXAAAKAFQAKAHAQgBIAcgBQAGgDAKgQIAAAfQgcAxhHAaQh6AsgbAQgAA+DGQgUAVgNASIgDAEQAZgLA5gMQArgOgJggIgPACIgEAAIgZAAQgMABgYAXgAA0iRQgUANABAYQAAAhAPAWQALAOAcAUIAAgnQAAhCAfgsIgNAAQgpAOgMAJgAEkihQAKAHAgAmQAJgFADgJIAAgUQAAgagPgJQgMgJgjAAIg/AHQglAHgXASIAHAAQASgJAXgBIAhgCQAhAAARANg");
	this.shape_2.setTransform(-28.2,62.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,31.5,88.2,62);


(lib.shape25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AgMASQgMgDAAgNQAAgHAHgGQAKgIASACQAWAKgNARQgKAIgKAAg");
	this.shape.setTransform(-50,87.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AmbDhIAAgSQAqhDAYgdQAogvBBgBQA7AAAigQQgKAVgiAZIgzAiIgDAAQBRAEBBg1QA+hBAcgTIAAASQgHAVgfAxQgbAtgHAgQAbgHAqgcQAigYAIgKQgIAQgSAVIghAkQgYAdgHAbIgSgDIg8gGIiJAJIhyAJgAjOCoQgGAGAAAJQAAANALACIANAAQAMABAKgJQAMgSgVgKIgIAAQgPAAgIAGgABMBRQAAgRAYgKIAMgFIAAAEIAJgIIALgIIAHgGQAQgNABgQIgFgMIgEgTQAKAIAVAJQASAKAAAOQAAAbgjAXQghAWglAAgACThcIgEgiIgEgcQAAgjAwgVQApgRA0AAQA8AAAeAfQAPAQAbA7IAAACQAAgFgDADQgNgNg/geQg7gdgGAAQgcAAgvApQguAoADAUgAhEiFQghgXgcgDIAAgCIASgGIAUgFQASAAAVAOQAYAPgBARQAAALAHAUg");
	this.shape_1.setTransform(-31.1,69.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("AkBECQAHgbAYgdIAjgkQATgVAHgQQgIAKgjAYQgqAcgbAHQAGggAcgtQAegxAHgVIAAgUQgcAVg+BBQhBA1hQgEIADAAIAygiQAigZAKgVIABgBQAxgXAAg9QAAgfgOgXQgTgdgmAAIgeAGQgXAIAAAKQAAATAHAVIABACQgQgZAAgZQAAglAighQAkgjArAAQA2AAAiAgQAqAnAABRQAAAWgEAVQgEARgDAFIADAAIAfgnQAWgbAEgcQAUhpAAgLQAAgPgWgMQgXgLggAAIgjAGIgcAFQgBgqA3gBQAoAAAZANQAWALAaAeQAdgYArgSQArgRAlAAQApAAAoARQAnARAVAZQANAQATANIAeASQAeAVAAAtQAABAgsAlQgsAnhSAMIgrAAIAAgCQAUgLArgOQAjgPAAgfQAAgggUgQQgTgPgoABIgvAFQguAKAAAQIAPAXQAOAXAAAZQAAA6hYA4Ii9BfgAgrAbIAEAOQAAAQgRANIgHAGIgLAIIgIAEIgNAFQgXAKgBARIAPADQAlAAAigWQAhgXAAgbQAAgQgQgKQgWgJgKgIgAgtg1QgCgUAtgoQAtgpAcAAQAGAAA7AdQA/AeANANQADgDAAAFIAAgCQgbg7gPgQQgegfg8AAQgzAAgnARQgxAVAAAjIAEAcIAEAiIADAAIAAAAgAk0iAIgSAGIAAACQAcADAhAXIAuAmQgGgUAAgLQAAgRgYgPQgVgOgRAAgAGci4IgLgXQgWgghFAAIAAgEQAlgRAdAAQAlAAARAUQAOARgDAfQgFAGgCAGQgBAHgMgBQgFAAgEgKg");
	this.shape_2.setTransform(-11.4,65.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,39.2,105.2,52.9);


(lib.shape24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18403").s().p("AjkCrQgDgoAaghQAKgNAvgrQAIgGBmgjQBtgjAeAAQASAAAYAIQAhAJAQARIgDgwIgEgWIAEABQAKAFAGALIANAWIAaApQAUAlAAANQAAAqgJASQgMAagkARQgNhSgOgTQgIgNgxgOQgsgOgPAAQgdAAgbAQIguAiQgMAGgWAjQgZAogNANIguAsQgWAUgTAFIg0AOIgOADQAlgjgCgtgADVi7Qg+gbgOgSQAFgNAPgDIAZgCIAgACIAbAZQAJAJAFAWQAGAbADAFQgOgLglgQg");
	this.shape.setTransform(-13.2,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFD9B").s().p("AiuBtIgVhCQAAgNAXgIQASgGASAAQATAAACAdQABAQAAAeIADABIAHABQAIAAAJgRQAIgRAJAAQAFAAAFAIIgIAHIgJALIAGAWQAFAOAAAKQAAATgRANQgQALgYAAQgaAAgZhBgAimhGQAAgMAIgJQAJgJALAAQAJAAAMAGIAAAaIgJAPQgEAFgNAAQgXAAAAgWgABBhYQgJgEAAgJQAAgIADgEIAUgSIAUAMQgEAIgDATQgBAHgOAAgACOh8IgUgEQAAgcAMgLQAGgFALgBQAJABARAIQATAKAAAKQAAAIgIAIQgJAJgMAAg");
	this.shape_1.setTransform(-32.6,74);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF18").s().p("AkpDgIgwgMIgrgMQgJgHAAgiQAAg1A8gjQBBgbAKgHQAagQAfhJQAehIAAgjQAAgPgIgXQgGgUgGgLIACAAQAtAKAiAbIAwApQAMgOAGgYQADgMAWAAQALAAAiAWIAjAWIAlgWQAlgWAwAAQBHAAAtAVQAtAVARAnQAFAMAOAFIAOAFIAEAVIAEAxQgRgSghgJQgXgIgSAAQgfAAhvAmQhmAggHAGQgwAsgIAMQgZAhACAoQADAtgmAjIhBADQgrAAghACIg7ABgAihA8QgXAIAAANIAVBCQAaBBAZAAQAYAAAQgLQASgNgBgTQABgKgGgOIgGgWIAJgLIAIgHQgFgIgEAAQgKAAgIARQgJARgIAAIgHgBIgDgBQAAgeAAgQQgDgdgSAAQgTAAgSAGgAiTg1QgIAJAAAMQAAAWAXAAQANAAAFgFIAIgPIAAgaQgMgGgJAAQgLAAgJAJgABGhLQgDAEAAAIQAAAJAJAEIAMADQAOAAABgHQADgTAEgIIgUgMgACRiBQgMALAAAcIAUAEIAZAFQAMAAAJgJQAJgIAAgIQgBgKgTgKQgQgIgKgBQgLABgGAFg");
	this.shape_2.setTransform(-33.7,70.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.5,42.3,86.8,50.9);


(lib.shape23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AktCOQAAgTANgOQAMgOAAgNQAAgWgUgKQgUgLAAgKQAAgyB7gyIAAACIgcARQgRAKAAAPQAAAbARAkQATArAVAAQAmAAARgRQALgLAGgcQAGgfAFgLQAMgXAcgJIAsgOQAbgLAOgPIAZgjQARgUAYAAIAYABIAZAPQgUAHgQAPIgnAfIhPApQgQAIgTAdQgTAfACASQAEAoghAsIgDAFIgtgDIhVgDQgVAAg0AOgACqh6IAAgJQACgGAJAAQAPAAAjAWQAiAVAMAAIAngLQAEAKgSAMQgRAMgUAAQhfgeAAgVg");
	this.shape.setTransform(-30.2,79.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AmODsQgRgPAAgYQAAgoATg+QAZhTAngJQA/gMAfgoQAfgngHg6QAqAHAAA8QAAAdAEAKQAHARAYAAQAoAAA7g1QA5g2AuAAQAZAAAUAMIAkAaQAyAlBIAAQAnAAAugSQAsgSAQgYIADAxQAAA0gaAdQggAohGAAQgsAAgbgKQgbgKgiAAQhHAAgkAfQgZAVgPAvQgRA5gHALQgUAfgrAAIgfgDIADgFQAhgsgEgoQgCgSATgfQATgfAQgIIBPgpIAngdQAQgPAUgHIgZgPIgYgBQgYAAgRAUIgZAjQgOANgbALIgsAOQgcAJgMAXQgFALgGAhQgGAcgLALQgRARgmAAQgVAAgTgrQgRgmAAgbQAAgPARgKIAcgRIAAgCQh7AyAAA0QAAAKAUALQAUAKAAAWQAAANgMAOQgNAOAAATIACAFIgBAAIgxANQgUAAgQgPgACdgoIAAAJQAAAVBfAcQAUAAARgMQASgKgEgKIgnALQgMAAgigVQgjgWgPAAQgJAAgCAGgADji4QgXgMgkgIIgygPQgfgIgZAAQgsAAgXAaQgZAZgEAAQgHAAgBgIIAAgNQAAgaBRgPQA9gMAzAAQAzAAAXAJQAhAMAIAZQAPARAAAXQAAAPgDAFQgDAAgDADQgSgbgbgQg");
	this.shape_1.setTransform(-28.9,70.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,45,83.3,50.3);


(lib.shape22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18403").s().p("AmdDrQhlgOAAgcQAAhRA/hGQBAhHBkgYIAAACQgUAXgEANIgCAkIADAhQAFAOAWAAQAVAAAWgVIAqgtQA9hABQAAQAiAAAuAXQAvAXAkAAQAWAAAZgPQAggSAAgaQAAgZgNgUIgRgbQAWAJAZAZQAjAmAAAkQAAAqg/AxQhAAwg3AAQgOAAgWgRQgUgRgcAAQgSAAgWALQgUALAAAJQAAAJAGALQAFAMAAAGQAABBhTAaIgnAKIADgDQAOgQAIgfQADgLgBghQAAgfAHgRQAHgPASgRQAQgPATgLQANgHAhACIArADIAAgRQgJgMgOgDQgyAEgpAPQg0ATgVAiQgKARg2A0Qg+A6gUAAQgIAAgDgGIgDgLIAIgZQAJgUAAgJQAAgIgJgFIgKgDQgNAAgJAMQgIALAAAQIAEAZIAEAVQAAAbgCAHIgDAEgAndC3IASAAQAIgLAAgKQAAgKgGgCIgUgCgAl7AfIAAAOIAGABIAKACQAKAAAIgGQAHgFgBgGQgEgFgIgEIgHgDIgMAAgAAJAFQgIAEAAAPQAAAVBVAAQAiAAAhgTQAdgRARgWIg9AUIgjABIhEgGgAjOiXQgPgIAAgWQAAgaArgPQAngPA2AAQBEAAA3AMQA0AKAaAQQgzAAhpAbQhrAbgWAAQgaAAgLgGgAHBi3QAAgLAIgIQAKgJAPAAQANAAgDgDQAKgCAGAEQAHAFAAALQAAAeglAAQgdABAAgSg");
	this.shape.setTransform(-17.6,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("Aj+B7IADgFQADgHAAgbIgFgVIgDgZQgBgQAJgLQAIgLANAAIAKACQAJAFAAAIQAAAJgJAUIgIAaIADAKQADAGAIAAQAVAAA9g6QA2gyAKgRQAVghAygUQApgPAygEQAOADAJAMIAAARIgrgDQghgBgNAHQgTAKgOAPQgSARgHAQQgHAQABAdQAAAhgDALQgIAfgOAQIgCADIhlAIgAlRBEIAAgiIATABQAHACAAAKQgBAKgHALgAjqhCIgGgCIAAgNIAJgMIAMAAIAIADQAHADAEAGQABAFgHAFQgIAGgKAAgACMhZQAAgOAIgFIAbgDIBDAGIAjgBIA9gWQgRAYgdARQghATgiAAQhUAAgBgVg");
	this.shape_1.setTransform(-31.5,80.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.1,45,103.1,48.2);


(lib.shape21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("ABHBDQgMgEAAgIQAAgIAPgXQAOgYAAgJQAAgQgHgFIgZgNQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAVgDIAYgDIAhAEIAdALQABApgRAdQgWAlgrAAgAiUAsQgRgSAAgdIABgeQAEgSARgGIAHAiQAHARATAAQAZAAArgbQAwggAQgEIAdAAIgoAgQgeAYgCANQgEASgYAWQgaAYgYAAQgfAAgSgUg");
	this.shape.setTransform(-47.9,81);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AiFETQgmgNggAAIhfAIIhLAHQhNAAAAhJQAAg0BDhtQAwhLAdgiIADAAIgSA7QgIAaAAATQAAAfAJATQALAXAXAAQAbAAAvgjQA1goAUgGQAEAiAXAMQARAIAoAAIAWAAIAfgLIANAAIAAAxQgKAOgDAeIgDATIgDARIgCAJQgKAigNASQgUAZgjAAgAhxB0IgVADQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIAZAMQAHAGAAAQQAAALgOAYQgPAXAAAIQAAAIAMAEIAOADQArAAAWglQARgdgBgrIgdgLIghgEgAlnCEIgBAeQAAAeARATQASAUAfAAQAYAAAagYQAYgWAEgUQACgNAggYIAoggIgdAAQgQAEgyAgQgrAbgZAAQgTAAgHgSIgHghQgRAGgEASgABbh6QAAhlhuAAQgzAAgrATQgyAWgZApQAphVAkgbQAsgiBcAAQA7AAAZArQATAjAABEQAAArgIANIg5A/QAcgqAAg6gAE2hNIAAgaIAIgIIALgBIgBAJIABAKIgCAQgAFyhxQAAgKAJgLQAJgMAJAAIAbADQgEAKASACQANACAAAOQAAAQgJAIQgKAIgWAAQgoAAAAgeg");
	this.shape_1.setTransform(-28.4,64.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.5,35.4,90.3,57.8);


(lib.shape20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AitDUIAAgmQADgsAwAAIABAEIABAIIgCAQIgDAQIAfAcIAJAJIAAAAQgjAAgoAbIgQAKQAEgMgBgYgAANBzQgIgSAAgUIAIgZIgCAAQgGANgXAMQgYANgVAAQgiAAABgRQAAgYAoghQAXgQAUgKQAJAUAPABQAQABAcgdQAcgfALggQALggAGgnQAGgnAAgRQAAgWgEgSQAeAUAPAcQATAjAAAyIgCAXIgTAqIgRAlQgdARgKAMQgGAFgRAnIgPAzQgJAYgUAAQgKAAgKgVg");
	this.shape.setTransform(-43.6,66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AhgEVQgNgXgnACQgSABgcgIQgdgJgRAAIgJgKIgfgcIADgPIACgQIgBgIIgBgEQgwAAgDArIAAAnQABAYgEAMQgaARgKAAQgTAAgagRQgdgTAAgTQAAgIAMgdIABgDQgGg1AvhBQAdgqBchgQgGAPg/BfIAAARQARABAzgwIBMhIIAEADIAOAzIAFAMQgUALgXARQgoAgAAAZQgBARAiAAQAVAAAYgNQAZgMAGgNIACAAIgIAZQAAATAIATQAKAVAKAAQAUAAAJgZIAPgyQARgnAGgFQAKgMAdgUQgZA+AAAvQAAARAPBoQAAARgLASQgNAVgPAAQgUAAgNgXgAB7C8QgGgEAAgIQAAgIADgDIALgDQAKAAADADQACADAAAKIAAAKQgCADgNAAgAGVB1QgMgFAAgNQAAgMAFgIQAHgJALAAQAIAAAGAGQAAAJAGAGQAGAFAAAGQAAAHgGAFQgFAFgIAAgAE2BJIgMgFQgFgGgBgFIABgIIAIgKIAOAKIALAKIAAAOgAAWhWQAAgxgTgjQgNgcgegVIgDgOQgHgWghgNQgggNg+A+Qg9A+gBBEQgXgvAmhJQAlhKA+gNQA8gOA3A3QA1A4AAAyQAAAggXA3gABZhbIAAgSIALgIQAKgGADAAQADAAAEAJQADAGAAADIAAALQgCAGgLAAgADliPQAAgIAOgHIAGgDIAmAEQAlAAAcgdQAbgbAAgfIAAgLIgGgJIAAgOQANASADAJIABAaQAAA2gmAhQggAdgqAAQgxAAAAgig");
	this.shape_1.setTransform(-28.1,63.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,33.6,88.5,60.1);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(106.1,11.7,1,1,0,0,0,17.8,39.4);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,40,83);

	// Слой 1
	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(26.6,37.2,1,1,0,0,0,26.6,37.2);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,57,79);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-29.7,131.3,109.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(10).call(this.frame_39).wait(9).call(this.frame_48).wait(10).call(this.frame_58).wait(12));

	// roga
	this.instance = new lib.Символ43();
	this.instance.setTransform(30.4,65.7,1,1,0,0,0,26.6,37.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5).to({_off:true},1).wait(20).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},9,cjs.Ease.get(1)).wait(22));

	// sisi
	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(91.1,240.5,1,1,0,0,0,60,36);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,124,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({alpha:1},5,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).wait(20).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},11,cjs.Ease.get(1)).wait(1));

	// baba
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(96,208,1,1,0,0,0,96,208);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,192,417.3);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ40();
	this.instance.setTransform(89.4,73.8,1,1,0,0,0,55,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-17,x:90.4,y:91.8},14,cjs.Ease.get(1)).to({rotation:0,x:89.4,y:73.8},15,cjs.Ease.get(1)).wait(1));

	// palec_3.png
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(101,119.6,1,1,13,0,0,60.1,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:60,regY:11.6,rotation:30,x:98,y:126.6},14,cjs.Ease.get(1)).to({regX:60.1,regY:11.5,rotation:13,x:101,y:119.6},15,cjs.Ease.get(1)).wait(1));

	// palec_2.png
	this.instance_2 = new lib.Символ37();
	this.instance_2.setTransform(186.5,177,1,1,0,0,0,123.5,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4,x:185.5},14,cjs.Ease.get(1)).to({rotation:0,x:186.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.4,14.5,173.6,186);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.setTransform(53,-3.7,1,1,0,0,0,87.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9,y:-3.6},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:-3.7},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(47.3,-55.4,0.92,0.92,0,0,0,81.3,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-77.1,174.9,90.6);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.baba_3 = new lib.Символ41();
	this.baba_3.setTransform(96,208,1,1,0,0,0,96,208);

	this.addChild(this.baba_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.3,192,417.3);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(152,166);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,304,332);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(-1.5,20.5,1,1,0,0,0,1.2,1.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-1.6,20.3,-3.5,13.7,-3.9,6.7,-4.4,-0.9,-1.3,-7.6]},alpha:1},10,cjs.Ease.get(1)).to({guide:{path:[-1.2,-7.8,-0.2,-9.7,1,-11.6,6.3,-19.6,7.8,-29.1,9.2,-38.4,4.2,-46.6,0,-53.7,-4.7,-60.6]}},13,cjs.Ease.get(1)).to({guide:{path:[-4.9,-60.6,-5.7,-61.7,-6.4,-62.8,-11.4,-70.3,-12.9,-79.4,-13.4,-81.9,-13.5,-84.3]}},22,cjs.Ease.get(1)).to({guide:{path:[-13.5,-84.3,-14,-91.7,-12,-98.9,-11.8,-99.5,-11.7,-100.2]},alpha:0},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,19.3,2.3,2.3);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag3A4QgYgYABggQgBggAYgXQAXgXAgAAQAgAAAYAXQAXAXABAgQgBAggXAYQgYAXggAAQggAAgXgXg");
	this.shape.setTransform(-399.8,-50.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// Слой 1 - копия: 2 - копия: 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(11.2,-8.8,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(211.2,-46.8,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(151.2,-18.8,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(-164.8,-33.8,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// Слой 1 - копия: 2 - копия
	this.instance_4 = new lib.Символ26();
	this.instance_4.setTransform(-98.8,-18.8,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ26();
	this.instance_5.setTransform(-28.8,-18.8,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15));

	// Слой 1 - копия
	this.instance_6 = new lib.Символ26();
	this.instance_6.setTransform(101.2,1.2,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(15));

	// Слой 1
	this.instance_7 = new lib.Символ26();
	this.instance_7.setTransform(-58.8,1.2,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.8,-58.9,617.4,80.5);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(350.9,34.5,1,1,0,0,0,348.4,34.5);
	this.instance.alpha = 0.191;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,701,73);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,-2,705,77);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(31.7,10.3,1,1,0,0,0,31.7,10.3);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(31.9,35.1,1,1,0,0,0,31.7,10.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.6,46);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(-71.1,12,1,1,0,0,0,31.8,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-10,15,1,1,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:21,x:7,y:6.1},9,cjs.Ease.get(1)).to({rotation:0,x:-10,y:15},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,-10.9,108,46);


(lib.Символ15 = function(mode,startPosition,loop) {
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

	// cursor
	this.instance = new lib.Символ16();
	this.instance.setTransform(81,15,1,1,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-149},3,cjs.Ease.get(1)).to({x:-169},1,cjs.Ease.get(1)).to({x:81},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-10.9,108,46);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(5).call(this.frame_19).wait(6));

	// Слой 5
	this.instance = new lib.Символ33();
	this.instance.setTransform(78.5,-102.5,1,1,0,0,0,81.3,23.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({y:87.5},4,cjs.Ease.get(1)).wait(1).to({y:-102.5},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(82,39.6,1,1,0,0,0,82,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05},4).to({scaleX:1,scaleY:1},5).wait(6).to({x:-138},4,cjs.Ease.get(1)).wait(1).to({x:82},4,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(87.5,95.9,1,1,0,0,0,126.5,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({scaleX:1.05,scaleY:1.05,x:89.5},4).to({scaleX:1,scaleY:1,x:87.5},5).wait(4).to({x:-132.5},4,cjs.Ease.get(1)).wait(1).to({x:87.5},4,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(109.5,150.3,1,1,0,0,0,148.5,48.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({scaleX:1.05,scaleY:1.05},4).to({scaleX:1,scaleY:1},5).wait(2).to({x:-110.5},4,cjs.Ease.get(1)).wait(1).to({x:109.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.9,-17.3,169.5,162.5);


(lib.Символ8 = function() {
	this.initialize();

	// 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(81.2,45.5,1,1,0,0,0,81.4,10.2);

	// 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(79.8,15,1,1,0,0,0,79.8,15);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,162.7,55.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(52.5,-35.7,1,1,0,0,0,79.8,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:94.5,y:-10.7},14,cjs.Ease.get(1)).to({x:52.5,y:-35.7},15,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(151.1,152,1,1,-10,0,0,152.1,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:152,rotation:0,x:182,y:196},14,cjs.Ease.get(1)).to({regX:152.1,rotation:-10,x:151.1,y:152},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-62.3,357.1,404.3);


(lib.Символ6 = function(mode,startPosition,loop) {
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
	this.hand1 = new lib.Символ36();
	this.hand1.setTransform(-309,292.5,1,1,0,0,180,72.5,93);
	this.hand1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hand1).wait(1).to({_off:false},0).to({x:-226,y:113.5},3,cjs.Ease.get(1)).wait(1).to({x:-309,y:292.5},4,cjs.Ease.get(1)).wait(1));

	// 1
	this.hand1_1 = new lib.Символ36();
	this.hand1_1.setTransform(87.1,288.5,1,1,0,0,0,72.5,93);
	this.hand1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hand1_1).wait(1).to({_off:false},0).to({x:38.1,y:113.5},3,cjs.Ease.get(1)).wait(1).to({x:87.1,y:288.5},4,cjs.Ease.get(1)).wait(1));

	// hand
	this.instance = new lib.Символ7();
	this.instance.setTransform(152,166,1,1,0,0,0,152,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:432,y:186},3,cjs.Ease.get(1)).wait(1).to({x:152,y:166},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-62.3,357.1,404.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(59.5,45,1,1,0,0,0,59.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:59.6,scaleX:1.1,scaleY:1.1,x:59.6},19,cjs.Ease.get(1)).to({regX:59.5,scaleX:1,scaleY:1,x:59.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.5,119,90);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ef_2
	this.instance = new lib.Символ25();
	this.instance.setTransform(344,238.2,1,1,0,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110));

	// ef
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(428.4,230.3,1,1,0,0,0,348.4,34.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},6,cjs.Ease.get(1)).to({alpha:1},2,cjs.Ease.get(1)).to({alpha:0},3,cjs.Ease.get(1)).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},17,cjs.Ease.get(1)).to({alpha:1},14,cjs.Ease.get(1)).to({alpha:0},15,cjs.Ease.get(1)).wait(31));

	// bg
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(429,210.5,1,1,0,0,0,429,210.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABCAjIiDhCIBRgD");
	this.shape.setTransform(86.6,222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2}]}).to({state:[{t:this.shape},{t:this.instance_2}]},79).to({state:[{t:this.shape},{t:this.instance_2}]},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,0,923.1,421);


(lib.sprite35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		{
		    _first = true;
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		} // end if
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22));

	// Layer 1
	this.instance = new lib.shape20("synched",0);
	this.instance.setTransform(28.9,-55.1);

	this.instance_1 = new lib.shape21("synched",0);
	this.instance_1.setTransform(28.9,-55.1);

	this.instance_2 = new lib.shape22("synched",0);
	this.instance_2.setTransform(28.9,-55.1);

	this.instance_3 = new lib.shape23("synched",0);
	this.instance_3.setTransform(28.9,-55.1);

	this.instance_4 = new lib.shape24("synched",0);
	this.instance_4.setTransform(28.9,-55.1);

	this.instance_5 = new lib.shape25("synched",0);
	this.instance_5.setTransform(28.9,-55.1);

	this.instance_6 = new lib.shape26("synched",0);
	this.instance_6.setTransform(28.9,-55.1);

	this.instance_7 = new lib.shape27("synched",0);
	this.instance_7.setTransform(28.9,-55.1);

	this.instance_8 = new lib.shape28("synched",0);
	this.instance_8.setTransform(28.9,-55.1);

	this.instance_9 = new lib.shape29("synched",0);
	this.instance_9.setTransform(28.9,-55.1);

	this.instance_10 = new lib.shape30("synched",0);
	this.instance_10.setTransform(28.9,-55.1);

	this.instance_11 = new lib.shape31("synched",0);
	this.instance_11.setTransform(28.9,-55.1);

	this.instance_12 = new lib.shape32("synched",0);
	this.instance_12.setTransform(28.9,-55.1);

	this.instance_13 = new lib.shape33("synched",0);
	this.instance_13.setTransform(28.9,-55.1);

	this.instance_14 = new lib.shape34("synched",0);
	this.instance_14.setTransform(28.9,-55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-21.5,88.5,60.1);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.sprite35();
	this.instance.setTransform(426.7,49.7,1.412,1.748);

	// Слой 1
	this.instance_1 = new lib.sprite35();
	this.instance_1.setTransform(116.6,49.7,1.412,1.748,0,0,180);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(53,12,437.3,105);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(6));

	// Слой 5
	this.instance = new lib.Символ52();
	this.instance.setTransform(496.7,191.1,1,1,0,0,0,321.6,151.1);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.25},8,cjs.Ease.get(1)).wait(1).to({alpha:0},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(286.6,463.2,1,1,0,0,0,62.5,23.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:273.2,alpha:0.398},8,cjs.Ease.get(1)).wait(1).to({y:413.2,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// bg
	this.bg = new lib.Символ1();
	this.bg.setTransform(462.2,194,1,1,0,0,0,397.1,194);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1).to({scaleX:1.12,scaleY:1.12},8,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,923.1,421);


(lib.Символ29 = function() {
	this.initialize();

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(90,216.5,1,1,0,0,0,90,79.5);

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(87.5,229,1,1,0,0,0,59.5,45);

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(90,205,1,1,0,0,0,90,205);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180,410);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(5).call(this.frame_34).wait(6));

	// baba2
	this.baba_2 = new lib.Символ31();
	this.baba_2.setTransform(-7,253,1,1,0,0,0,96,208);
	this.baba_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.baba_2).wait(30).to({alpha:1},4,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// baba
	this.instance = new lib.Символ29();
	this.instance.setTransform(-10,253,1,1,0,0,0,90,205);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-30,y:263},14,cjs.Ease.get(1)).to({x:-10,y:253},15,cjs.Ease.get(1)).wait(1).to({alpha:0},4).wait(1).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,43.7,192,417.3);


// stage content:



(lib.DevilGirl_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//sisi
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.sisi.addEventListener("mouseover", fl_MouseOverHandler_33);
		
		function fl_MouseOverHandler_33()
		{
		 _this.baba.baba_2.baba_3.gotoAndPlay(49);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.sisi.addEventListener("mouseout", fl_MouseOutHandler_44);
		
		function fl_MouseOutHandler_44()
		{
		 _this.baba.baba_2.baba_3.gotoAndPlay(59);
		}
		
		
		//roga
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.roga.addEventListener("mouseover", fl_MouseOverHandler_24);
		
		function fl_MouseOverHandler_24()
		{
		 _this.baba.baba_2.baba_3.gotoAndPlay(30);	
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.roga.addEventListener("mouseout", fl_MouseOutHandler_29);
		
		function fl_MouseOutHandler_29()
		{
		 _this.baba.baba_2.baba_3.gotoAndPlay(40);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.bg.x = - stage.mouseX / 30;
		this.bg.y = - stage.mouseY / 30;
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor_1.bind(this));
		
		function fl_CustomMouseCursor_1() {
		
		this.baba.x = - stage.mouseX / 20;
		this.baba.y = - stage.mouseX / 50;
		
		}
		
		
		var _this = this;
		
		
		//in
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.text.gotoAndPlay(15);
		    _this.hand.gotoAndPlay(1);
			_this.cursor.gotoAndPlay(1);
			_this.bg.gotoAndPlay(1);
			_this.baba.gotoAndPlay(30);
		}
		
		
		//out
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.text.gotoAndPlay(20);
		    _this.hand.gotoAndPlay(5);
			_this.cursor.gotoAndPlay(5);
			_this.bg.gotoAndPlay(10);
			_this.baba.gotoAndPlay(35);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// sisi
	this.sisi = new lib.Символ50();
	this.sisi.setTransform(333.6,243.1,1,1,0,0,0,103.5,49.1);
	new cjs.ButtonHelper(this.sisi, 0, 1, 2, false, new lib.Символ50(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sisi).wait(1));

	// roga
	this.roga = new lib.Символ49();
	this.roga.setTransform(320,57.1,1,1,0,0,0,97,57.1);
	new cjs.ButtonHelper(this.roga, 0, 1, 2, false, new lib.Символ49(), 3);

	this.timeline.addTween(cjs.Tween.get(this.roga).wait(1));

	// cursor
	this.cursor = new lib.Символ15();
	this.cursor.setTransform(95,255.5,1,1,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.cursor).wait(1));

	// text
	this.text = new lib.Символ11();
	this.text.setTransform(161,82.5,1,1,0,0,0,82,37.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// hand
	this.hand = new lib.Символ6();
	this.hand.setTransform(578,296.9,1,1,0,0,0,152,166);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

	// baba
	this.baba = new lib.Символ2();
	this.baba.setTransform(0,0.1,1,1,0,0,0,-349,41);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// bg
	this.bg = new lib.Символ30();
	this.bg.setTransform(0.1,0,1,1,0,0,0,176.1,39);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144,113.5,931.6,511.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 858,
	height: 80,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/btn2.png", id:"btn2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/man.png", id:"man"},
		{src:"images/ronaldo_2.png", id:"ronaldo_2"},
		{src:"images/room1.png", id:"room1"},
		{src:"images/stadium2.jpg", id:"stadium2"}
	]
};



// symbols:



(lib.btn2 = function() {
	this.initialize(img.btn2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,57);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,53);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,186);


(lib.ronaldo_2 = function() {
	this.initialize(img.ronaldo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,340);


(lib.room1 = function() {
	this.initialize(img.room1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1743,782);


(lib.stadium2 = function() {
	this.initialize(img.stadium2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1126,800);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AsFEcQh3AAhThTQhThUgBh1QABh1BThTQBThTB3gBIYMAAQB2ABBTBTQBUBTAAB1QAAB1hUBUQhTBTh2AAg");
	this.shape.setTransform(106,28.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212,57);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJHTQg5g5AAhQIAAqSQAAhRA5g6QA6g5BPAAQBQAAA5A5QA6A6gBBRIAAKSQABBQg6A5Qg5A6hQAAQhPAAg6g6g");
	this.shape.setTransform(19.5,52.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,105);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmoA0QiwgVAAgfQAAgdCwgXQCxgVD3gBQD5ABCwAVQCwAXAAAdQAAAfiwAVQiwAXj5AAQj3AAixgXg");
	this.shape.setTransform(60.2,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120.3,15);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0045B5").s().p("EgsMAJ0IAAznMBYaAAAIleTng");
	this.shape.setTransform(39,31.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-244,-31.4,566,125.8);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0045B4").s().p("Egx/AX1MAAAgvpMBj+AAAMAAAAvpg");
	this.shape.setTransform(320,152.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmCBSQgEAAgBgCQgBgBAAgEIAThoIACgGQACgCAFgCQAHgDAKgBQAJgCAKAAQAKAAAHADQAGADAFAFQADAFACAHQABAHgCAJIgDAQQgBAJgEAHQgEAHgGAFQgFAEgIACQgIADgKAAIgKgBIgFAdQgBAEgBABQgCACgEAAgAlXgQIgBABIgGAiIAHAAQAFAAAEgCQADgCAAgFIAEgTQABgEgCgCQgCgCgFAAIgIABgAilArIgGgQQgCgFAFgCQAFgDAEgFQADgDACgGQADgEACgKIAFgZIADgFQABgBAEAAIA6AAQAEAAABABQABACAAADIgNBKQgBADgBACQgCABgEAAIgSAAQgEAAgBgBQgBgCAAgDIAKg0IgMAAIgCAJIgGATQgDAIgDAGQgDAFgFAEIgIAGIgIADIgDABQgDAAgCgEgANdAsQgGgCgEgFQgEgFgBgIQgCgHACgJIAIgsQABgDABgCQACgBAEAAIASAAQAEAAABABQABACAAADIgIAtQgBAFACACQACACAFAAIAHAAIACgCIAJg0QAAgDACgCQACgBAEAAIASAAQAEAAABABQABACAAADIgMBCIgDAHIgGAEQgJADgJABQgJACgKAAQgKAAgHgDgAIcAsQgHgDgEgFQgEgFgBgHQgBgHABgJIAEgRQABgJAEgHQAEgHAGgEQAFgEAJgDQAIgCAKAAQALAAAIACQAIABAGADIAFAEQABACgBAEIgMBAQAAADgCACIgGADIgRADIgTABQgKAAgHgDgAIzgPQgDACgBAFIgEATQAAAEACACQACACAFAAIAIAAIAHgiQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgHAAQgFAAgDACgAEzAsQgIgDgEgFQgEgFgCgIQgBgHABgJIAEgQQABgIAEgHQAEgHAGgEQAHgFAIgCQAIgDAKAAQAKAAAHACQAHACAFAEQAFAEACAGQACAGgBAIQgBAGgDAEQgDADgFADQgFADgGACQgHABgIAAIgTgBIgBAEQgBAFADADQACADAFAAQAJAAAGgGIAFgDQACgBADACIALAGQADABABADQAAACgCADQgMARgeAAQgKAAgIgDgAFJgUQgDADgBAFIgBACIAMABQAFAAADgCQADgBAAgDQABgEgDgBQgCgCgFAAQgGAAgDACgACwAtIgPgEQgEgCgBgCQgBgCABgEIAMhDQABgDABgCQACgBAEAAIASAAQADAAACABQABACgBADIgDARIAMgBQAHAAAGACQAHACAEAFQAFAEABAGQACAFgCAJQgCAIgDAGQgEAHgFAEQgGAEgHADQgHACgKAAQgJAAgJgCgAC/ADIgCAPIAAABIAIABQAEAAADgCQADgCABgFQAAgEgCgCQgCgCgFAAgABVAsQgHgDgFgFQgFgFgBgHQgCgHACgJIAFgfQACgKAGgPIAFgKIAGgHIAIgGIAJgEQAHgCARgBIAFAAQAIAAAFgCQAEgBACABQACABAAAEIADAMQAAAEgBACIgFADIgIADIgcABQgEABgDACIgEAEIgCAHIgBABIAIgDIAJgCQAJAAAGADQAHACAEAFQAEAFABAHQACAIgCAJIgCAMQgCAJgEAHQgEAGgGAFQgGAEgIADQgIACgKAAQgKAAgIgDgABlgDIgDANQgBAFACACQACACAGAAQAFAAADgCQADgCABgFIADgNQABgFgDgCQgCgCgFAAQgLAAgBAJgAgIAtQgHgCgFgEQgEgFgCgGQgCgGAAgIIAAgBIgHAAIgFAZQAAADgCACQgCABgDAAIgTAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCABgDIANhKQAAgDACgCQACgBAEAAIASAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABACgBADIgEAXIAIAAIABgBQABgIAEgFQAEgGAGgEQAGgEAGgCQAHgCAKAAQAKAAAHADQAIADAEAFQAEAFACAHQABAHgBAJIgDARQgCAJgEAHQgDAGgGAFQgGAEgIADQgJACgKAAQgHAAgHgCgAAFgIIgDASQgBAFACACQACACAFAAQAFAAADgCQADgCABgFIAEgSQABgJgKAAQgKAAgCAJgAkOAsQgHgCgEgFQgEgFgBgIQgBgHACgJIAIgsQAAgDACgCQACgBADAAIATAAQAEAAABABQABACgBADIgIAtQgBAFACACQACACAFAAIAHAAIACgCIAJg0QABgDACgCQABgBAEAAIATAAQADAAACABQABACgBADIgMBCIgCAHIgHAEQgIADgKABQgJACgKAAQgJAAgHgDgApRAsQgIgCgEgGQgFgFgBgHQgCgHACgJIADgRQABgIAEgHQAEgHAGgEQAHgFAIgCQAIgDAKAAQAKAAAIADQAHADAFAFQAEAFACAHQACAHgCAJIgDARQgCAJgEAGQgEAHgGAFQgGAEgIACQgIADgLAAQgKAAgHgDgApAgIIgEASQgBAFACACQACACAGAAQAFAAADgCQADgCABgFIAEgSQABgFgDgCQgCgCgFAAQgLAAgBAJgAsbAsQgHgCgEgGQgEgFgBgHQgCgHACgJIADgRQACgJAEgHQADgGAGgFQAGgEAIgCQAIgDALAAQAHAAAGACQAGACAEADQAEADADAEQADAFAAAFQABAEgBACQgCACgDABIgQAFQgEACgBgBQgCgBgBgEQgBgEgCgCQgCgBgEAAQgFAAgDACQgCACgBAFIgEAUQgBAFACACQACACAEAAQAEAAADgBIAFgGQACgDACgBQACgBAEABIAPAFQAEABAAACQABADgCADQgEAGgEAFQgFAEgFADQgFADgHABQgHACgHAAQgKAAgIgDgAuXAsQgHgCgEgFQgEgFgBgIQgBgHACgJIAIgsQAAgDACgCQACgBADAAIATAAQAEAAABABQABACgBADIgIAtQgBAFACACQACACAFAAIAHAAIACgCIAJg0QABgDACgCQABgBAEAAIATAAQADAAACABQABACgBADIgMBCIgCAHIgHAEQgIADgKABQgJACgKAAQgJAAgHgDgAMhAsQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCABgDIADgTIgOABQgIAAgGgDQgGgCgDgFQgEgFgBgFQgBgGACgIIADgWQABgDACgCQABgBAEAAIATAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQACACgBADIgEAWQAAAEABACQACACAEAAIAHgBIABAAIAFgdIACgFQACgBAEAAIASAAQAEAAABABQABACAAADIgOBKQAAADgCACQgCABgDAAgALGAsQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCABgDIAIgtQABgFgCgCQgBgCgFAAIgHABIgBAIIgIAtQgBADgCACQgBABgEAAIgTAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCgCABgDIAIgtQABgFgBgCQgCgCgFAAIgGAAIAAABIgKA1IgCAFQgCABgEAAIgSAAQgEAAgBgBQgBgCAAgDIAMhCIADgHQACgCAEgBQAJgEAJgBQAIgCAKAAIALABIAJAEIANgEIAOgBQAJAAAHADQAGACAEAFQADAFACAHQABAHgCAJIgIAtQgBADgCACQgBABgEAAgAHiAsQgDAAgCgBQgBgCABgDIACgOIAEgOIAHgPIgBAAIgKAPIgJANIgDADIgGABIgIAAQgFAAgCgFIgEgMQgCgGgBgJIgCAAQACANgCAQIgCAOQgBADgCACQgBABgEAAIgPAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBgBABgEIANhJQABgEABgCQACgBAEAAIAPAAIAFABIADAEIAMAjIAYgjIAEgEQACgBAEAAIAQAAQAEAAABABQABACgBAEIgNBJQAAAEgCABQgCABgDAAgAD0AsQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCABgDIANhKQAAgDACgCQACgBADAAIATAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABACgBADIgNBKQAAADgCACQgCABgEAAgAmoAsQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCABgDIAIgtQABgFgCgCQgCgCgEAAIgIABIAAAIIgJAtQAAADgCACQgCABgDAAIgTAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgCABgDIAIgtQABgFgCgCQgCgCgEAAIgGAAIgBABIgJA1IgDAFQgCABgDAAIgTAAQgEAAgBgBQgBgCABgDIAMhCIACgHQACgCAFgBQAIgEAJgBQAJgCAJAAIAMABIAIAEIAOgEIANgBQAJAAAHADQAGACAEAFQAEAFABAHQABAHgBAJIgJAtQAAADgCACQgCABgDAAgAqNAsQgEAAgBgBQgBgCAAgDIADgOIADgOIAHgPIgBAAIgJAPIgJANIgEADIgFABIgIAAQgFAAgCgFIgFgMQgCgGgBgJIgBAAQABANgBAQIgDAOQAAADgCACQgCABgEAAIgPAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgCgBABgEIANhJIADgGQACgBAEAAIAOAAIAGABIADAEIALAjIAZgjIAEgEQACgBADAAIAQAAQAEAAABABQACACgBAEIgNBJQgBAEgCABQgBABgEAAg");
	this.shape.setTransform(93.7,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187.3,16.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(92.9,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,25.5);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0045B5").s().p("EhI8AJ0IFdznMCMcAAAIAATng");
	this.shape.setTransform(265,31.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-202,-31.4,934,125.8);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlrDCQgFgCgEgDIgIgHQgEgEgCgEQgCgFgBgFQgCgFAAgGIABgNIAHglQACgIAGgOIAHgJIAIgIQAGgFAPgFQAIgDATgBQAKAAAJACQAIADAHAEQAGAFAEAGQAEAHABAJQACAEgCADQgCACgEACIgVAHQgFABgCgBQgCgBgBgFQgBgHgFgDQgEgDgIAAIgKABQgFACgDACQgDADgCAEIgDAJIgGAkIgBAKQABAEACACQACADAEABQAEABAGAAQAIAAAGgDQAFgDAEgHQADgFACgBQADgBAEACIAVAIQAEABAAADQABADgCAEQgFAIgGAHQgGAGgIAFQgJAEgJACQgKACgMAAQgSgBgHgDgAFRDDQgFAAgBgCQgCgCABgEIAJgwIANgkIgBAAQgSAegIALIgkAvQgDAEgGAAIgYAAQgFAAgCgCQgBgBABgFIAWh9QAAgFADgCQACgCAFAAIAWAAQAFAAACACQABACgBAFIgGAiQgCAPgDAKIgLAYIACAAIAOgYIAwhAQADgEAGAAIAYAAQAEAAACACQABACAAAFIgWB9QgBAFgDABQgCACgEAAgADRDDQgIAAgDgBQgEgCgCgFIgLgkQgBgFgDgDQgDgCgFAAIgDAAIgIAuQgBAFgCABQgCACgFAAIgXAAQgFAAgBgCQgCgCABgEIAWh9QABgFACgCQADgCAEAAIAXAAQAFAAABACQACACgBAFIgIAsIAEAAIAlgtQAEgFADgCIAKgBIAXAAQAFAAABADQABACgDAEIgwA7IAGAGIAFAIIARAyQACAFgCACQgCADgFAAgAgEDDQgFAAgCgCQgBgCABgEIAUh9QABgFACgCQACgCAFAAIA6AAQAKAAAIADQAIADAFAFQAFAFACAHQABAIgBAIQgCAKgFAHQgEAGgJAFIAAABQASAJgEAbQgCAKgEAHQgFAHgHAFQgIAEgJADQgJACgLAAgAAfCjIAXAAQAGAAAEgDQADgDACgGQABgGgDgDQgDgDgGAAIgXAAgAAoBrIAUAAQAGAAADgCQAEgDABgGQABgFgDgDQgCgDgHAAIgTAAgAgvDDQgHAAgDgCQgDgBAAgFIgCgPIgsAAIgHAPQgCAFgDABQgDACgIAAIgWAAQgEAAgBgCQgBgCADgEIBEh/QACgEADgBQACgCAFAAIAWAAQAFAAACACQACABABAEIAXB/QABAEgCACQgBACgFAAgAhCCNIgDgXQgBgOABgKIABgEIgCAAQgFASgEAJIgMAYIAZAAgAjoDDQgFAAgBgCQgCgCABgEIAShjIgeAAQgFAAgBgCQgCgBABgFIADgSQABgFACgCQACgCAFAAIBjAAQAFAAACACQABACgBAFIgDASQgBAEgCACQgCACgFAAIgeAAIgRBjQgBAFgCABQgCACgFAAgAjXAQQgFAAgBgCQgBgBAAgFIAEgUIhJAAIgEAUQgBAFgCABQgCACgFAAIgWAAQgFAAgBgCQgCgBABgFIAJgvQABgFACgBQACgCAFAAIAEAAIAJgIIAGgLQAEgGACgIIAMhCQABgFACgBQADgCAEAAIBYAAQAEAAACACQACACgBAEIgSBjIAKAAQAFAAABACQACABgBAFIgJAvQgBAFgCABQgCACgFAAgAj3hkQgEARgEANQgFANgGAKIAkAAIAMhIIgaAAgAgogKQgCAAgCgFIgIgTQgCgEACgDQABgCAFgDQAGgDAFgEIAIgKQAEgGADgJIAFgWIAIguQABgFACgBQACgCADAAIBWAAQAEAAACACQABABAAAFIgWB9QgBAFgCACQgDACgEAAIgXAAQgFAAgBgCQgCgCABgFIARhiIgYAAIgDATIgJAkQgJATgEAHQgHAKgIAGQgIAGgKAFIgFABIgCAAgAE9gMQgFAAgBgCQgCgCABgFIAJgwIANgjIgBAAQgSAdgIAMIgkAvQgDAEgGAAIgYAAQgFAAgCgCQgBgCABgFIAWh9QAAgFADgBQACgCAFAAIAWAAQAFAAACACQABABgBAFIgGAiQgCAPgDAKIgLAZIACAAIAagqIAkguQADgEAGAAIAYAAQAEAAACABQABACAAAFIgWB9QgBAFgDACQgCACgEAAgADBgMQgHAAgDgCQgDgCAAgFIgCgOIgsAAIgHAOQgCAFgDACQgDACgIAAIgWAAQgEAAgBgCQgBgCADgEIBEh/QACgEADgCQACgBAFAAIAWAAQAFAAACABQACACABADIAXCAQABAEgCACQgBACgFAAgACuhCIgDgYQgBgNABgLIABgEIgCAAQgFATgEAJIgMAYIAZAAgAidgMQgFAAgBgCQgCgCABgFIAWh9QABgFACgBQADgCAEAAIBUAAQAFAAABACQACABgBAFIgDASQgBAFgCACQgCACgFAAIg1AAIgDASIAqAAQAFAAACABQABACgBAFIgDASQgBAFgCACQgCACgFAAIgqAAIgEATIA3AAQAFAAABACQACABgBAFIgDASQgBAFgCACQgDACgEAAgAEvikQgGgCgEgCQgEgDgCgEQgDgEgBgFQgBgFAGgCIAOgFIAFgBIACADIAEAFQACACAEAAQAHAAAFgHQADgEAFACIANAFQAFACgDAFQgDAFgEAEIgJAHIgLAEIgMABIgMgBg");
	this.shape.setTransform(47,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.8,-9.2,78.5,39.7);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-123.9,0,124).s().p("EiJ8ARuMAAAgjcMET5AAAMAAAAjcg");
	this.shape.setTransform(373,113.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-509.9,0,1765.9,227);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-6.7,-9.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-9.1,253,53);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.stadium2();
	this.instance.setTransform(-335.9,-180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-335.9,-180,1126,800);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.room1();
	this.instance.setTransform(59.3,-44.8,1.34,1.34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(59.3,-44.8,2335.6,1047.9);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(57.5,55.5,1,1,-13,0,0,19.5,52.5);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(47, 49, 1)];
	this.instance.cache(-2,-2,43,109);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.7,-25,114,165);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(19.5,52.5,1,1,0,0,0,19.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:378.5},19,cjs.Ease.get(1)).wait(30).to({x:19.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,-25,114,165);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.ronaldo_2();
	this.instance.setTransform(51,-44.5);

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(155.6,290.4,1.05,1.05,5,0,0,60.2,7.5);
	this.instance_1.alpha = 0.629;
	this.instance_1.filters = [new cjs.BlurFilter(55, 9, 1)];
	this.instance_1.cache(-2,-2,124,19);

	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(118.4,262.6,1.26,1.26,5,0,0,60.1,7.5);
	this.instance_2.alpha = 0.629;
	this.instance_2.filters = [new cjs.BlurFilter(55, 9, 1)];
	this.instance_2.cache(-2,-2,124,19);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.1,-44.5,237.9,356.6);


(lib.Символ17 = function() {
	this.initialize();

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.setTransform(95.7,8.7,1,1,0,0,0,93.7,8.2);

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(88,33.3,1,1,0,0,0,93,12.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,0.5,194.3,45.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ17();
	this.instance.setTransform(-179.2,-3.5,1,1,0,0,0,94.6,23.4);

	// Слой 2
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(94,-4.6,1,1,0,0,0,224,31.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332,-67.4,934,125.8);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ14();
	this.instance.setTransform(359.7,-6.4,1.47,1.47,0,0,0,76.7,10.8);

	// Слой 4
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(423,-4.8,1,1,0,0,0,244,31.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65,-67.7,566,125.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_199 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(10).call(this.frame_189).wait(10).call(this.frame_199).wait(1));

	// logo
	this.instance = new lib.Символ10();
	this.instance.setTransform(-73.5,30.5,0.77,0.77,0,0,0,126.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Слой 3
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(1108.5,59.5,1,1,0,0,0,224,31.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({x:711.5,alpha:1},10).wait(80).to({x:1101.5,alpha:0},10).wait(11).to({regY:31.4,scaleX:0.79,scaleY:0.79,x:1149.5,y:54.4,alpha:1},0).to({x:528.5,y:49.4},9,cjs.Ease.get(1)).wait(1).to({x:1118.5,alpha:0},9,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(18,44.5,1,1,0,0,0,211.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({x:28},10,cjs.Ease.get(1)).to({x:-482},10,cjs.Ease.get(1)).wait(80).to({x:28},10,cjs.Ease.get(1)).to({x:18},10,cjs.Ease.get(1)).wait(1).to({scaleX:0.74,scaleY:0.74,x:-442,y:37.5},0).to({x:-21},9,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:18,y:44.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.5,-40.7,1745,127.1);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.man();
	this.instance.setTransform(0,-75);

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(99,99.5,1,1,0,0,0,60.1,7.5);
	this.instance_1.alpha = 0.629;
	this.instance_1.filters = [new cjs.BlurFilter(55, 9, 1)];
	this.instance_1.cache(-2,-2,124,19);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-75,241,191);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(118.5,156.5,1,1,0,0,0,109.5,126.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23.1,-14.5,237.9,356.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_194 = function() {
		this.stop();
	}
	this.frame_204 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(15).call(this.frame_194).wait(10).call(this.frame_204).wait(1));

	// man.png
	this.instance = new lib.Символ8();
	this.instance.setTransform(790.5,149,1,1,0,0,0,120.5,93);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({x:-80.5},15,cjs.Ease.get(1)).wait(75).to({x:459.5,alpha:0},5,cjs.Ease.get(1)).wait(10).to({x:668.6,alpha:0.969},5,cjs.Ease.get(1)).to({x:674.5,alpha:1},1).to({x:155.5},9,cjs.Ease.get(1)).to({x:177.5},5,cjs.Ease.get(1)).to({x:165.5},1,cjs.Ease.get(1)).to({x:694.5},9,cjs.Ease.get(1)).wait(1));

	// foot1.png
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(109.5,126.5,1,1,0,0,0,109.5,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({x:119.5},10,cjs.Ease.get(1)).to({x:-120.5,alpha:0},9,cjs.Ease.get(1)).wait(81).to({alpha:1},0).to({x:139.5},10,cjs.Ease.get(1)).to({x:109.5},10,cjs.Ease.get(1)).wait(1).to({x:-480.5},0).wait(14).to({x:-160.5},1,cjs.Ease.get(1)).to({x:109.5},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.1,-14.5,237.9,356.6);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsFEdQh3gBhThTQhThTgBh2QABh0BThUQBThTB3AAIYMAAQB2AABTBTQBUBUAAB0QAAB2hUBTQhTBTh2ABg");
	mask.setTransform(106,51.5);

	// Слой 4
	this.instance = new lib.Символ24();
	this.instance.setTransform(-111.5,59.1,1,1,0,0,0,19.5,52.5);
	this.instance.alpha = 0.488;

	this.instance.mask = mask;

	// Слой 2
	this.instance_1 = new lib.btn2();
	this.instance_1.setTransform(0,23);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,23,212,57);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 4
	this.instance = new lib.Символ32();
	this.instance.setTransform(106,51.5,1,1,0,0,0,106,28.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:28.4,scaleX:1.08,scaleY:1.08,y:51.4,alpha:0.531,compositeOperation:NaN},8).to({regY:28.5,scaleX:1,scaleY:1,y:51.5,alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(106,28.5,1,1,0,0,0,106,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.08,scaleY:1.08,y:26.7},8).to({scaleX:1,scaleY:1,y:28.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.3,-18.4,340.4,165);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_190 = function() {
		this.stop();
	}
	this.frame_199 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(11).call(this.frame_190).wait(9).call(this.frame_199).wait(1));

	// black
	this.instance = new lib.Символ11();
	this.instance.setTransform(309,99.1,1,1,0,0,0,373,113.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({y:-140.9,alpha:0},0).to({y:99.1,alpha:1},10,cjs.Ease.get(1)).wait(10));

	// room.png
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(477.5,154.5,1,1,0,0,0,286.5,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({x:-744.5},10,cjs.Ease.get(1)).to({x:-834.5},10,cjs.Ease.get(1)).wait(70).to({x:477.5},10).wait(11).to({alpha:0},0).to({x:-122.5,alpha:1},5,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,x:-140.4,y:137.6},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-112.5,y:154.5},1,cjs.Ease.get(1)).to({x:477.5},8).wait(1));

	// pole.png
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(549.5,154.5,1,1,0,0,0,225.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({x:559.5},10,cjs.Ease.get(1)).to({x:-32.5},10,cjs.Ease.get(1)).wait(80).to({x:559.5},10,cjs.Ease.get(1)).to({x:549.5},10,cjs.Ease.get(1)).wait(1).to({x:259.5,alpha:0},0).to({x:99.5,alpha:1},5,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,x:83.6,y:137.7},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:89.5,y:154.5},1,cjs.Ease.get(1)).to({x:549.5},8).wait(1));

	// bg
	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(320,155.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-573.9,-178,3159.8,1181);


// stage content:



(lib.fonbet_live_858x80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseover", fl_MouseOverHandler_45);
		
		function fl_MouseOverHandler_45()
		{
		 _this.btn1.gotoAndPlay(1);
		}
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn1.addEventListener("mouseout", fl_MouseOutHandler_54);
		
		function fl_MouseOutHandler_54()
		{
		 _this.btn1.gotoAndPlay(10);	
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor2.bind(this));
		
		function fl_CustomMouseCursor2() {
		
		this.bg.x = - stage.mouseX / 30;
		}
		
		
		
		
		stage.canvas.onmouseover = qwe;
		
		  function qwe()
		{
		    _this.people.gotoAndPlay(180);
			_this.bg.gotoAndPlay(180);
			_this.text.gotoAndPlay(180);
		
		}
		
		stage.canvas.onmouseout = qwe2;
		
		  function qwe2()
		{
		    _this.people.gotoAndPlay(195);
			_this.bg.gotoAndPlay(191);
			 _this.text.gotoAndPlay(190);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ramka
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0045B4").ss(1,1,1).p("EghQgSBMBChAAAMAAAAkDMhChAAAg");
	this.shape.setTransform(429,40,2.014,0.346);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// btn.png
	this.btn1 = new lib.Символ4();
	this.btn1.setTransform(745,19.1,0.92,0.92,0,0,0,106,28.6);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0045B5").s().p("EghbARVMAAAgipMBC3AAAMAAAAipg");
	this.shape_1.setTransform(149,621.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// people
	this.people = new lib.Символ6();
	this.people.setTransform(654.5,136,1,1,0,0,0,310.5,126.5);

	this.timeline.addTween(cjs.Tween.get(this.people).wait(1));

	// text
	this.text = new lib.Символ9();
	this.text.setTransform(320.5,45,1,1,0,0,0,126.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// BG
	this.bg = new lib.Символ1();
	this.bg.setTransform(0,-164.7,1,1,0,0,0,0,146.8);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-449.5,3159.8,1221.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
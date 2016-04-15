(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 649,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/baba_03.png", id:"baba_03"},
		{src:"images/baba_06.png", id:"baba_06"},
		{src:"images/baba_09.png", id:"baba_09"},
		{src:"images/baba_13.png", id:"baba_13"},
		{src:"images/baba_16.png", id:"baba_16"},
		{src:"images/baba_20.png", id:"baba_20"},
		{src:"images/baba_23.png", id:"baba_23"},
		{src:"images/baba_26.png", id:"baba_26"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/pincet_03.png", id:"pincet_03"},
		{src:"images/pincet_06.png", id:"pincet_06"},
		{src:"images/pincet_10.png", id:"pincet_10"}
	]
};



// symbols:



(lib.baba_03 = function() {
	this.initialize(img.baba_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,79);


(lib.baba_06 = function() {
	this.initialize(img.baba_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,155);


(lib.baba_09 = function() {
	this.initialize(img.baba_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,145);


(lib.baba_13 = function() {
	this.initialize(img.baba_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,153);


(lib.baba_16 = function() {
	this.initialize(img.baba_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,170);


(lib.baba_20 = function() {
	this.initialize(img.baba_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,329);


(lib.baba_23 = function() {
	this.initialize(img.baba_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,251);


(lib.baba_26 = function() {
	this.initialize(img.baba_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,185);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,937,305);


(lib.pincet_03 = function() {
	this.initialize(img.pincet_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,56);


(lib.pincet_06 = function() {
	this.initialize(img.pincet_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,41);


(lib.pincet_10 = function() {
	this.initialize(img.pincet_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,47);


(lib.Символ85 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBnQgKgCgIgEQgJgEgHgGQgIgFgFgIQgHgHgEgIQgFgJgDgJQgDgKgCgKIgCgVIACgTIAFgUIAIgSIALgQQAGgHAHgGQAIgFAIgFQAKgEAJgCQAKgCAJAAQALAAAJACQAKACAJAEQAIAFAIAFQAHAGAGAHQAGAHAFAJIAIASQADAJACALIACATQAAAKgCALQgCAKgDAKQgEAIgFAJQgEAIgGAIIgNANQgIAGgJAEQgIADgKADQgKACgKAAQgJAAgLgCgAgOgyQgHAEgFAIQgEAGgDALQgDAKAAALQAAALADALQADAKAEAIQAFAHAIAEQAGAEAHAAQAIAAAHgEQAHgEAEgHQAGgIACgKQADgLAAgLQAAgLgDgKQgCgKgGgHQgFgIgHgEQgGgEgIAAQgHAAgHAEg");
	this.shape.setTransform(9.4,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,21.1);


(lib.Символ83 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEpBnIgQgFIgOgIIgNgJQgIgIgKgTIgFgOIgBgRQgBgMAHgSQAEgKAOgQIANgKIAOgIIARgEQAJgCAJAAQANgBAWAHQAKAEARANQAOARAEAKQAHASAAAMQAAAIgCAIIgFAPQgKATgIAHQgRAOgLAEIgQAFQgJACgJAAQgJAAgKgCgAEvgIQgHADgEAFQgEACgCAHQgDAGAAAIQAAAHADAGQACAGAFAGQAEAEAGADQAGADAHAAQAIAAAGgDQAGgDAEgEQAFgFACgHQACgGAAgHQAAgIgCgGQgCgHgFgCQgEgFgHgDQgGgDgHABQgIgBgFADgAmbBnQgKgCgKgEQgJgEgJgFQgIgFgHgIQgHgHgGgIQgFgIgEgKQgFgKgCgKQgCgLAAgLQAAgKACgKQADgKAEgKQADgKAGgIQAGgJAHgGQAHgIAIgGQAJgFAKgEQAJgEALgCQALgCAMAAQAPAAANADQAMADALAGQAKAGAJAHQAIAIAHAKIgpAgQgKgMgKgFQgLgHgOAAQgKAAgJAFQgJAEgHAHQgGAHgEALQgEAJAAAKQAAALAEAKQAEAJAGAIQAHAHAJAFQAJADAKAAQAIABAGgCQAHgCAFgDQAKgFAKgNIAqAeQgHAKgJAJQgJAJgKAFQgMAGgNAEQgOADgQAAQgKAAgLgCgAB1BlIAAhvIguAAIAAgsICTAAIAAAsIguAAIAABvgAAABlIAAgtIgMAAIgfAtIg+AAIAkg3QgHgDgFgEQgFgFgEgGQgEgFgCgIQgCgIAAgHQAAgLAFgJQADgJAHgIQAJgIAMgEQANgFARAAIBVAAIAACbgAgkgJQgFAFgBAGQABAHAFAFQAFADAKAAIAVAAIAAgdIgVAAQgKAAgFADgAizBlIAAg5IgtAAIAAA5Ig3AAIAAibIA3AAIAAA2IAtAAIAAg2IA3AAIAACbgAG2BfIAAg4IA5AAIAAA4gAG2gDIAAg5IA5AAIAAA5g");
	this.shape.setTransform(49.6,10.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.2,21.1);


(lib.Символ81 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3266").s().p("ApcJdQj6j7AAliQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQlhAAj7j6g");
	this.shape.setTransform(85.6,85.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,171.1,171.1);


(lib.Символ79 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AF3CdIADgpIhsgHIgGApIgzgEIAHhaIASABIALgbQAFgPADgPQAEgQADgWIAFg3ICaALIgKCYIAXABIgNBagAE/gmQgDAngFARQgFAVgKAWIA9AFIAIhmIgtgDgAKcCJIAEgxIA5AEIgDAxgAH2CBQgOgCgNgFQgKgDgLgIIAZgnQAKAIAMABQAEABAFgCQAGgCAEgEIhGibIA/AFIAoBhIAxhaIA+ADIhaCUQgIAOgHAIQgJAJgIAGQgIAFgKADQgIACgJAAIgFAAgAllBqIADgpIhrgHIgHAoIgygEIAGhZIASABIALgZIAJgfQAEgSACgVIAFg3ICbAKIgLCYIAXACIgNBagAmdhZQgEApgEAQQgFAWgKAUIA9AFIAHhnIgsgDgACVBkIgphPIgVAVIgEA2Ig4gEIAEg2IgSgXIgyBIIhDgEIBShuIhBhbIBBAEIA5BXIAGhSIA4AEIgGBTIBGhOIBCAEIhOBRIBCB4gAkVBHIAOjJICjALIgDAwIhsgIIgDAfIBiAHIgDArIhigGIgCAfIBuAIIgEAvgAKvBIIgJhwIABgYIA/AEIgBAZIgZBtgAqAAxQgKAAgLgDQgLgDgKgFQgJgEgJgHIgPgOIgMgNQgGgKgDgJIgFgVQgBgKABgLIADgWIAIgTIALgRQAHgJAIgGQAHgHAJgFQAKgFAKgEIAWgFIAWAAQAMABALADIAUAHQAJAFAJAHQAIAGAHAHQAHAIAEAJQAGAJAEAJQADALABAKQACAKgCALQAAAMgDAKQgDAKgEAJQgFAIgHAIQgGAIgIAGQgHAHgKAFQgJAFgKADQgLAEgLABIgNABIgKgBgAqJhqQgJADgIAIQgIAHgEAKQgEAJgBALQgBALADALQAEAKAGAIQAGAIAJAFQAKAFALAAQALAAAKgCQAKgDAHgIQAIgHAEgKQAFgJAAgLQABgLgDgLQgDgKgHgIQgGgIgJgFQgKgFgMgBIgCAAQgJAAgJADg");
	this.shape.setTransform(75.9,38.7,0.87,0.87);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJ+CBIAHhhIhKBdIgsgDIAMiqIAvADIgHBeIBJhaIAtAEIgMCqgAHLB1IgLggIhCgFIgOAeIgzgDIBWinIAuAEIA9CwgAGPAsIAmADIgPgxgAD1BmIhZgGIAMiqIBYAGQAQABAMAFQALAFAHAHQAFAGACAHQACAHAAAJQAAAHgDAGQgCAGgEADIgJAIIgLAFIAOAHQAGAEADAFQAFAGABAHQACAHAAAJQgBALgFAIQgFAJgIAFQgJAGgNACQgJACgKAAIgIAAgADNA8IAlADQALABAGgEQAGgEABgIQAAgHgFgEQgGgFgMgBIgkgCgADSgDIAeACQALABAGgDQAFgEABgIQABgHgFgEQgFgEgLgBIgfgCgABOBaIAHhfIhJBbIgrgDIAMirIAtADIgHBfIBKhaIAtADIgMCrgAivBIIAMiqIB8AJIgDApIhMgFIgJCBgAj9BDIAEg0IgVgCIgmAyIg3gEIAtg5QgIgCgGgGQgGgFgEgHQgFgHgBgJQgCgIABgKIACgOQACgHADgEQAGgLALgHQAKgGANgDQANgDAPACIBRAFIgMCqgAkmg9QgDACgCAFQgCADgBAGQAAAJAGAHQADACAFACQAEACAGABIAfACIAEgrIgfgCIgCAAQgLAAgHAEgAnbAzIAJiAIg0gEIADgpICXAKIgDAqIgzgEIgJCBgApmAtIgRgDQgJgCgIgEQgIgEgGgFQgIgFgFgHQgGgGgEgHQgEgGgDgIQgDgJgBgJQgBgJABgKQAAgJADgJIAGgRIAJgPIAMgMQAGgFAIgFQAHgEAJgDQAIgCAJgBQAKgCAJABQANABALADQAKAEAJAFQAIAGAHAHQAHAHAGAJIgmAYQgHgKgIgGQgJgGgMgBQgIgBgIAEQgJADgGAGQgFAGgEAIQgDAIgBAKQgBAJADAJQACAIAFAHQAFAHAIAEQAHACAJAAQAGABAGgBQAFgBAFgBQAIgEAKgKIAiAaIgPAPQgIAHgJAEQgKAFgLACQgJACgJAAIgIgBgAJcg6QgHgDgFgFQgGgFgCgHQgEgIAAgJIAagDQACAHAEAEQAEAFAGAAQAHABAEgEQAEgDADgHIAaAGQgBAJgFAHQgEAHgGAEQgGAFgIACQgHABgJAAQgJgBgHgDg");
	this.shape_1.setTransform(76.3,15.5,0.87,0.87);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.3,3.9,129.3,48.9);


(lib.Символ77 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pincet_10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212,47);


(lib.Символ76 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pincet_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,41);


(lib.Символ75 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pincet_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222,56);


(lib.Символ72 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AF6B+IAEgxIA5AEIgDAxgAEeB4IALiXIgvgDIgBAHQgFA2gFATQgDAPgFALQgDALgGAHQgFAIgFAFQgGAFgGADQgGACgHABIgPABQgPgBgSgGIAGgrIANACQAIABAFgDQAGgEAFgLQAFgOAEgZQADgOAEgqIABgPIACgcICbALIgODJgAgCBnQgOgBgNgFQgKgEgLgIIAZgmQAKAIAMAAQADABAEgCQAFgCAEgEIhDiZIA9AEIAoBjIAxhdIA9AEIhaCUQgIANgHAIQgIAKgJAFQgIAGgKACQgHACgJAAIgDAAgAi/BWIALiXIg9gEIADgxICyAMIgDAyIg9gFIgLCXgAliBPIgVgDQgKgDgJgFQgJgEgIgGQgIgGgHgIQgGgHgFgIQgGgJgDgKQgDgKgCgJQgBgLABgLQABgLACgLQADgKAFgJQAEgJAHgJQAGgIAIgGQAHgHAJgFQAJgFAKgDIAFgBQAHgDAJgBQALgBALABQAPABANAEQAMAEAKAGIABABQAJAGAIAIQAIAIAGALIgrAcQgJgLgKgHQgKgHgOgBQgKgBgKAEQgJADgHAHQgHAHgEAKQgEAKgBALQgBALADALQADAHAGAIQAGAIAIAFQAJAEAKABQAIABAHgBQAGgBAGgEQAJgEAMgMIAoAhQgJAJgJAIQgJAIgLAFQgMAGgNACQgKACgLAAIgJgBgAGNA+IgJhwIABgYIA/AEIgBAZIgZBtg");
	this.shape.setTransform(52.8,44.9,1.22,1.22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHaCGIAIhyIhXBtIg0gEIAOjIIA3AEIgIBvIBXhqIA1AEIgODIgACXBwIAOjJICjAMIgDAvIhsgHIgDAeIBiAHIgDArIhigHIgCAgIBtAHIgDAwgAAuBpIhggHIAOjJIChAMIgDAvIhrgHIgCAXIAnADQASABAPAFQAOAFALAJQAKAHAFANQAFASgBALQgBAPgGANQgGALgMAIQgKAIgPADQgMADgNAAIgIAAgAAHA2IAmADQANABAHgFQAHgFABgKQABgKgHgGQgHgGgMgBIgmgDgAiOBbIAOjIIA5AEIgODIgAj2BUIhagGIAOjJIA4AEIgFBAIAfACQASABAQAFQAPAGAKAJQALAKAFANIAEANQABAHAAAJQgCAQgGAMQgHANgMAJQgLAIgPADQgLADgNAAIgJAAgAkVAiIAeACQANABAIgFQAIgGABgMQABgLgHgEQgIgHgNgBIgegCgAm3BHIhogIIAOjIIBoAHQATABAOAGQANAGAIAJQAGAHADAIQACAIAAALQgBAIgDAIQgCAGgFAGQgFAFgGAEIgNAGQAKAEAHAEQAHAFAEAHQAFAGACAGQADAIgBALQgBANgGAKQgGAKgKAHQgKAGgPADQgLACgNAAIgJAAgAnlAWIArADQANABAHgFQAIgEABgKQAAgHgGgEQgHgFgOgBIgqgDgAnfg1IAjADQAMAAAIgEQAHgEAAgJQABgIgGgFQgGgFgMgBIglgCgAHFhSQgLAAgIgEQgIgDgHgGQgGgHgDgIQgEgJgBgLIAfgDQADAJAEAEQAFAFAHABQAIABAFgFQAFgEAEgIIAeAIQgCAKgFAIQgFAIgHAFQgHAFgJADQgGACgHAAIgGgBg");
	this.shape_1.setTransform(55.3,16.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,2.6,112.2,58.3);


(lib.Символ71 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ArGQ9QgdAFABgBQABgEBQpyQAFiMAGiMQAOkWABgCIARlOQAAgBgHimQgHimABgBQACg5ADg4QAGhuADgFIAAAAQALgMAnhZIBAhJQCJgQADgEQC8AFADgEQCWARABgCQAAgBA7AgQA5AdAGACQADACAqA8QAoA4AFAGQAeDHAEAKQgVFTADgCQg6CwADgCQACgEhTBOQArBrABgCQABgCBIAVQBBASAHABIAAAAQDzAAACgDQCqAFACgCQA4RdADANQgCgCgwAAQgzAAABgBIhawTQABADjNAHQjNAHABgCIgGI+QgHI9ABgCQgZgBgZgBQgxgDAEgBQAEgBgGjUQgGjWAAgBQAAgCgfCkQghCmAAgCQgYgFgYgGQgvgLABABQAThDAYhlQAvjKAVikQARiQgHjHQgKioAAgBIj0AHQj1AGABgBIgvI4Ih+HlQAAgBgdAEg");
	this.shape.setTransform(74,119.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ACCSoIAAAAIAAAAIAAAAgABQSmQgxgDAEgBQAEgBgGjUIgGjXQAAgCgfCkIghCkIgwgLQgugKAAAAQAThDAYhlQAvjKAVikQARiQgHjHIgKipIj0AHQj1AGABgBIgvI4Ih+HlQAAgBgdAEQgdAFABgBQABgEBQpyQAFiMAGiMQAOkWABgCIARlOIgHinIgGinIAFhxQAGhuADgFIAAAAQALgMAnhZIBAhJQCJgQADgEQC8AFADgEQCWARABgCQAAgBA7AgQA5AdAGACQADACAqA8QAoA4AFAGQAeDHAEAKQgVFTADgCQg4CqAAAEIhQBKQArBrABgCQABgCBIAVQBBASAHABIAAAAQDzAAACgDQCqAFACgCQA4RdADANQgCgCgwAAQgzAAABgBIhawTQABADjNAHQjLAHgBgCIAAAAIAAAAIgGI+QgHI5ABACIgygCgAnti+QgJAMAAAPQAAApBTAHQAsAEBBABIC0ANQBYgHAPgEQAbgIAAgZQAAgdgXgIQgfgLhWANIirgLQgPgGAAgEQABgBAAgBQABgBAAAAQAAgBAAAAQAAgBgBAAQgDgBiFAAQgUAAgMANgAiDQnIAAAAIAAAAgACbkNIABAAIgBAAIAAAAg");
	this.shape_1.setTransform(74,119.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,150,240.5);


(lib.Символ69 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_23();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,193,251);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABNqFIgvACQAAABgeASAg8o+QgBABgBABAAghyIgeBCQg2BQABAAQgPAcgLAVAivD4IgIAKQgCAJgBAHADwKGIAAgBQABgBABgPAjqGNIgEAEQACAAgCAHAjxIVQACAJAAAD");
	this.shape.setTransform(25.8,64.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AljJeQg3geAAgtIAAgBIAAgEIgCgHIgDgJIgNgyQAAgOATg0IAEgMQALgfARgrIATgwIALgbQAPgkAKgXQANgbAhgsIAbgkIAUgbQADgVAsg5QAjgvAKgsQADgPAAgPQgFgfAAgHQAAgohJhVQhJhVAAgvQAAhXA0guIABgBIAAgBIgBgCQAAgQAkgUIAagMQAagKAfgHIAWgDQBpgPAtBAQA4BbAbBNQAJAbBHCRQAtBbAABIQAAA4ApBYQAUAsAUAlQAHADAKAJQAZAVATAcIAMAzQADAOAAAYIADAPIADAOIgLChQgVCXgzAAQg5AAhBg+IgugrQgZgUgUAAQgTAAgJAZQgCAFgLAxQgHAhgOATIgCACIAAACIgBAMQgFAgglAAQkVAAhog5g");
	this.shape_1.setTransform(42.9,66.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.7,85.9,133.5);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_16();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129,170);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABBIlQACABhOgHQABAAhPAfIgrACIg3gLIgyglQghgygVgYIgjjcQABAAAMhgQAMhgAAgBQABAAAFg7QAFg+AAABIAwhbQAAABA/jOQAGgaAHgZQAPgzABAAQB2hNACAAQA6gVACABIBBANQBeA3AHADQANApABgBQBFDsADgBQADgCAAAwQAAAlAAAIQAlBtAFAEQgsCRgDAOQgmBPgDAJQhNCOgFANQgnBDgDAJg");
	this.shape.setTransform(32.8,57.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ai7I1IgyglQghgygVgYIgjjcQABAAAMhgIAMhhQABAAAFg7IAGg9IAvhbQABABA+jOQAGgaAHgZQAPgzABAAQB2hNABAAQA8gVAAABIBCANQBdA3AIADQANApABgBQBFDsADgBQADgCAAAwIAAAtQAlBtAFAEQgsCRgDAOQgmBPgEAJQhLCOgHANQglBDgEAJIgzBfIhLgGIAAAAIAAAAIhNAfIgsACg");
	this.shape_1.setTransform(32.8,57.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,67.5,117.2);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_13();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,153);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AIOBpIAAgzIA7AAIAAAzgAG3BpIg1hOIgVAYIAAA2Ig7AAIAAjQIA7AAIAABVIBIhVIBFAAIhQBbIBTB1gADUBpIAAh0IhRB0Ig3AAIAAjQIA6AAIAAB0IBRh0IA3AAIAADQgAh7BpIAAjQIBaAAQAUAAAOAFQAQAFALAKQAMAJAGAOQAGAUAAAMQAAAJgCAIQgBAIgEAFQgDAHgFAGIgKALQgMAKgPAEQgRAFgTAAIgdAAIAAA8gAhBAAIAcAAQAHAAAHAAQAGgCAEgEQAEgDADgGQACgFAAgGQAAgHgCgFQgDgFgEgEQgEgDgHgCQgGgCgIAAIgbAAgAjOBpIgPglIhRAAIgPAlIg9AAIBZjRIA4AAIBZDRgAkdAWIAvAAIgXg5gAnJBpIAAidIhHAAIAACdIg7AAIAAjQIC8AAIAADQgAIcAlIgRhyIAAgaIBBAAIAAAaIgSByg");
	this.shape.setTransform(59.5,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnhBrQgKgCgKgFQgKgEgJgFIgQgNQgHgHgGgJQgGgJgEgJQgEgLgCgKQgCgMAAgLQAAgKACgLQACgLAEgKQAEgJAGgJQAGgIAHgIQAIgIAIgGIATgJQAKgEALgDQAMgCALAAQAQABAOACQAMAEAMAGQAKAFAJAJQAIAHAIALIgrAhQgKgMgKgGQgMgGgOAAQgLAAgKAEQgJAEgGAIQgHAIgEAKQgDAKAAAKQAAALADALQAEAJAHAJQAGAHAJAFQAKADALAAQAIAAAHgBQAGgCAGgDQAKgGAKgNIAsAgQgIAKgIAIQgKAJgLAHQgLAFgOAEQgOAEgRgBQgLAAgLgBgAH+BpIAAh0IhRB0Ig2AAIAAjRIA5AAIAAB1IBSh1IA2AAIAADRgAEYBpIAAh3Ig2BQIgBAAIg1hQIAAB3Ig5AAIAAjRIA9AAIAyBRIAzhRIA9AAIAADRgAAUBpIAAh0IhPB0Ig2AAIAAjRIA5AAIAAB1IBQh1IA2AAIAADRgAjQBpIAAhQIhLAAIAABQIg6AAIAAjRIA6AAIAABPIBLAAIAAhPIA6AAIAADRg");
	this.shape_1.setTransform(56.9,10.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118.4,50.1);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("AkAK6IgtgPQgogOgQgGQgZgLgPgNQgpgmgNgXQgMgVAAggQAAgYAFhEIADgqQAEguAEgUIABgFIgCgHIgBgDQAAgqAVgqIAzhZIAXgsQAOgZAMgSQAPgXAVgSIAIgIQABgFACgEIAPgYQAIgNAGggIARhcQAEgTALhJQALhNAAgNQAAgKAIhAIADgaQADgXAEgZQABgIADgGIgBgDIgCgGQAAgjAJgQQAHgNArguIAQgQQAggbAxgRQAvgSAfAAQA0AAAXAIQAIAEAtAbQAMALAlAyIAtBEQAJgOAOgUIAPgTQARgXAPgPQAHgIAIgDQAMgHARAAIAQABIAAAAQAlAHALAVQARAqAAAWIADAbIgCAWIgBAYQgCAQAAAJQAAAhg7BkQgZArgNAXQgIAVgIAOQgMAVgKAFQgHAQgTAdIgjAwQgHALgSAlQgJASgFANIgIAXIAAACQAAAOgHARQgDAIgEAGIgLAjQgCAIgCAjIgDAdIgCAaQAFAEAAALQAAArAQASIAKAOIADAAQAIABAFAGQAFAFAAAGQAAANgIAEQgLAEgkAAIgWACQgGAAgQATIgHAHIgRAcQgZAqgHAPQgDAGgGASQgFAPgGAJIgRAYQgIAJgIAFQgNAXgiAuQgbAbgbAhQgOAPgRAEQgHAKgQAQQghAigWAAQgfAAgpgNg");
	this.shape.setTransform(46.4,71.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.9,142.3);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_20();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190,329);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.4,1,1).p("AgBjqIgDgLIgfAIAiIjZQgDAAgEABQACAKACAKAArBaIgBgFIACgwAhug2IAMBCQAAAAgBAWQgBALAAAFAhpA+IgMAMQgIAgABABQAIAUABgBIAIAAAhgB/IAKAAQAGgCAEgCAgZDLIAGAMQACADABACAAYD2QADgBACgBABjBbIAEAIQAGABAFABACHBoIADAAIAAgCACPBIQABgEgVgsAA1DwIASgCIgIgq");
	this.shape.setTransform(14.4,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgPD5QgDgEAAgFIABgQIgCgHIgBgFIgJgQIgTggQgXgogJgJIgFgCQgKAFgFABIgEABIgHgBQgIgCgEgHQgDgGAAgGQAAgQANgWIAEgGIAFgLQAFgOAAgQQAAgNgGgTQgGgVAAgIIgEgOIgKghQgOguAAgXQgEgUAAgHIAAgNQAAgIABgIIABgFQAFgXASgCIAlADIApACQAbACAGABIACABQAFACAGALIAPAfIATAgQAQAbAAAEIAWArQAXAsAFAUIAMArIACAIIANAcIAGAMIAFANQAAAHgEAGIgGAFIgEABIgIABQgFAAgIgEIgOgJIgEgDQgTgOgHgKQgLgNgHgbQgFAGgDAHQgBAFAAAGIgCAYIABANIACAEIABADIADAIIAEAJQAEAKAAADIAFARQAFATAAAFIgCAhIgBANQAAAWgJAJQgGAFgKAAIgIgBIgFgBIAAADIgEAIIgEAEg");
	this.shape_1.setTransform(14.9,25.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,31.1,51.7);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,145);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.4,1,1).p("AAZhiQAGADAHAFABsgvQACAAADACIAAABAA4AfIgBgHAAyASIgTgPAiXjEQAEgDAFgFQAZgJAAAAIAgAAQACADAJAHQAKAJgBACAg9jCIAGANAgSiFIAQAPQAEAFAFAEAith9QgDgzgBAAIAHgFAith0QgDgFAAgCAh+geQgLgPgGgIAAjB4QAAACAAADIgRAKIgKgIACtBpQABAIAAACQADA0ABAAIAAANABOCxIgBgCIgCgVABxDGQAAACAAACIgEAAACYDUIgEACIgQgdIgJg/AgRBiIg8hF");
	this.shape.setTransform(17.8,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ACVDSQgKgHgGgZIgFgjIgBgVQAAgDgGgNIgBAAIgBAOIAAArQgCAXgHAKIgEAEQgEAEgHAAQgPAAgEgNIgBgPIAAgBIgCgLIgBgMIgCgLIgEgXIgHg4QAAgNgBgEIgFgQIgBgHIgFgGQgEgGgJgGIgGgDQgOgGgOAAQgEAAgBAFIgBAHQABAMASAVQAUAVAAARIACAbQAAAHgDAGIgBAAQgGAJgLAAQgEAAgFgCQgKgGgNgUIgBgDIgSgdQgHgIgZgXIgLgJQgRgQgGgHQgIgHgNgWIgEgHIgSgXIgDgCQgDgDgMgZQgMgaAAgGIAAAAIAAgKIADggQgCgOACgJIAAgBQACgPAQAAIABAAIATgFIAUgHQAIgDAPADQANADAGAGIAFAHIALALIAFAGQAPAQAFAIIAMATIACAEQAKALAMAJIAHAEIALAGIANAJIALAHQAWAOAQAIIAVANIAFAEQAoAdANAsQAGAUABA4IAAAQIACASIgBASIABANIADAKIACAKQAAAHgEAHQgFAJgMAAQgEAAgDgCgAA0AYIAAgCIABAHIgBgFgAA0AWg");
	this.shape_1.setTransform(18.1,21.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,37.9,45.2);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,79);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.4,1,1).p("AGAjoQgagohHhnIgmgnABUonIgqgNIglgMIhhgCIgSAEABUjEQACAMACAKABDj0QAMAdADAKAiXo0IgYAFIg8AuQgEAFgFAFAhjgaQgJgIgZgVIhRhSQgIgUgJgVQgQgpABAAQACAAgChQQAFgQACgRQAFgiABABIASgxQAKgKAJgKQASgUABAAIAIgCAhUnBQAgA0ACAAQA9BRABAAQAjAmAIAJAkUnVQgWAYABAAQgBABAAAAAk1meQgaBDABAAQgkB9ACAAQgCAHgBAGAl2jCQgKAtABAAQAEAPAEAMAAFAzIgFgnQAAgBglgfIgHAAAApCcIgXgkIgKg6AlqgrQAAAJABAAQADADADAEAhZD2QAmA3ABAAQASALAOAKABehMQgDBNABAAQAIArADANACQCgQAVAgABAAQACABACACAB0DYQgBgBAAgBQgBgBAAAAQgFgHgxgiAChEqIAAgGIgCgDADmFOIgtAPQgDATgCAPAD9EOQACAEAAAEAFfFWQAGgSAJgcQgDgJgDgJAEKIYQAUArABAAIAPgXACsHSQABAPAAAAACvHjQAFAAAFAAAB8GZIADABQACgBACAA");
	this.shape.setTransform(38.5,57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ADtIhIgIgPQgSglgHAAIgEACQgFAAgYABQgIAAgHgEQgIgGgEgMIgBgDIgEgbQAAgPAKgeIACgHIAFgLIgBgBQAAgJAKgFQAGgHAIAAQAMgIAIgGIADgCQALgJAEgHQAEgGACgMIAEgXIABgFIgDgCIgOgLIgnggQgRgLgKgQIgEgGIgNgTIgMgPQgmgzgDgnIgBgNIgJiGIgEhBQAAgRgBgQIgEgVIgCgJQgEgRgHgNIgEgJIgMgZIgCgIIABgIIgggfQgngngrhEQgKgRgOgJQgQgKgUAAQgTAAgKACIgUABIgEAAIgNgBIgEAEIgUAXQgHAJgGAPQgHAQgDAGIgNAVIAEAGQADAGAAAIQAAAGgFAWQgEAUAAANQABAVgHARQAFAIACAOQACARgCARQAAALAZAgQAZAfAAACIAAAFQAWAQANAKQAKAJAPASIAUAaIADADIAOgBIAKAAQAhAAAMAFIABABQAKAFAZAaIAKAWIAGASIADAKIgBABIgBAJQAAADgEADIABANIAAAGQAFAEACAJIAIAOQAIARAAAKQAHABAFAEIAIAEIALAMIADADQAJAKAHAFQALAKAbARIAFADQAaATAEANQAFAQADAVIABAKIACAPIABBAQgBAQgCAEQgHAJgXACIgGABIgPAAQgWABgYgXQgXgYgEgDQgegRgNgKQgHgGgFgGQgDgFgCgEQgHgDgIgFQgWgPgBgVQgKgDgEgJIgCgLIgJABIgCAAQgYAAgSgRQgRgRgBgZQAAgLADgKQgSgGgOgUQgRgigIgJQgTgagPgNQgVgWgdgRIghgNQgTgIgHgIIgJgSIgCgDIgFgMIgCgHIgLgtIAAgbIAAgGQgBgIADgFQgDgQABgLQgBgLADgIIgCgIIAAgBQAAgFAEgIIALgYIAHgPIgBgNQAAgGAEgJIACgKQAAgIAGgEIAKgiQALgmAAgEQAJgZAAgEQAAgCADgHIgBgCIgBgHQABgJAMgOIAAAAIAUgWIACgDIANgUQAIgIALgGIAOgIIAdgSIAAgBQAAgJAKgHQAGgEAagLIAIgDQAUgIAMgCIAIAAIBFAAQAtAAAnAKIApAMQAPAGANAHQAMAGBPA3QAHAEAkA1IAEAGIAWAkQAOgBALAWQAKANAVAgIAOAYQAHAOAHAIIAdAjIALAKQATARALBCQAIAzAAAyIgHAlQgGAngBAVIABAYQABAQgCAJIgGAxQAAALgaA3QgGAXgOAJIgMAHQAEAFABAKIAAABQgBAIgJAdIAAAaQACAgAGAVQAIAdAAAUQAAATgFAIIgVAiIgMAcQgLASgPAFQgFACgHAAQgMAAgNgVgAgPDaIAAAAIAAgBgACikeIgCgHIgLgUIANAbg");
	this.shape_1.setTransform(41.3,57.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,83,118.2);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,155);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.4,1,1).p("ADPAdQgMBWhFA0QhGA1hUgNQhWgMg1hFQg0hGAMhUQANhWBFg1QBFg0BUAMQBXANA0BFQA1BFgNBVg");
	this.shape.setTransform(21.1,21.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,44.4,44.4);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIBFQgdgEgRgXQgSgXAEgbQAEgdAXgRQAYgSAaAEQAdAEARAXQASAYgEAaQgEAdgXARQgTAOgXAAIgIAAg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.4,1,1).p("ANRh9I6hD7");
	this.shape.setTransform(85,12.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,172.3,27.5);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgHA7QgYgEgPgUQgGgIgDgIIgDgKQgBgJABgHQAEgZAUgPQAUgOAWADQAZAEAPATQAPAUgEAXQgDAZgUAOQgQAMgUAAIgHAAg");
	this.shape.setTransform(6,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,12);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxB/IAAgpIhtAAIgEApIg0AAIAAhdIASAAIAKgcQAEgOACgRQADgSABgWIACg6ICdAAIAACdIAYAAIgGBdgAgUhGQgCArgDARQgEAUgIAYIA8AAIAAhqIgrAAgAj0BXQgNgDgMgFQgLgEgKgGIgSgPIAegnQAMANAOAFQAIAEAIACQAIABAJABQAQAAAJgHQAIgFAAgKQAAgIgJgFQgIgEgRgBIgWAAIAAgpIAVAAQAPAAAIgGQAHgEAAgJQAAgJgHgEQgHgFgMgBQgOABgPAFQgPAHgKAIIgdgiQAIgIAJgGQAJgHAKgFQAMgEAMgDQANgCAPgBQARAAAPAEQAOAFALAIQAKAHAGALQAFAKAAAMQAAAJgCAHQgCAIgEAGQgEAGgGAEIgNAIQAIADAHADQAGAFAFAGQAFAFADAGQADAJAAAKQAAANgGANQgGALgLAJQgLAJgPAFQgQAEgTAAQgRABgPgDgAIsBWIAAjRIA7AAIAABDIAfAAQATgBAQAFQAQAEAMAKQAMAIAGAOQADAGACAJQACAFAAAJQAAAQgGAOQgGANgLAKQgLAKgQAEQgQAGgTAAgAJnAkIAeAAQAOABAIgHQAIgHAAgLQAAgMgIgEQgIgHgOAAIgeAAgAHNBWIAAhQIhKAAIAABQIg7AAIAAjRIA7AAIAABPIBKAAIAAhPIA7AAIAADRgACABWIAAjRICpAAIAAAyIhvAAIAAAfIBlAAIAAAtIhlAAIAAAhIBxAAIAAAygAl3BWIgQgmIhRAAIgPAmIg9AAIBajSIA4AAIBZDSgAmYADIgXg6IgYA6IAvAAgArdBWIAAjRIBaAAQAUABAQAEQAQAFAMAKQALAKAGANQAHAUAAAMQAAAJgCAJQgCAHgDAHQgDAHgFAHIgLAIQgMAKgQAFQgRAEgUAAIgcAAIAAA9gAqigSIAbAAQAIAAAGgCQAGgCAFgEQAEgDACgGQACgEAAgHQAAgGgCgGQgCgFgEgDQgFgEgGgCQgGgCgIABIgbAAg");
	this.shape.setTransform(73.4,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.9,25.6);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("AxeEJIkVkgIEVjxMAnRAAAIAAIRg");
	this.shape.setTransform(139.6,26.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,279.2,53.1);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap0B/IAAgpIicAAIAAjRIA7AAIAACdIBHAAIAAidIA7AAIAACdIAYAAIgHBdgAgPBYQgLgCgLgFQgJgEgJgGQgKgGgHgHQgIgHgFgJQgGgJgFgKQgEgKgCgKQgCgJAAgMQAAgLACgKQACgLAEgKQAFgKAGgJQAGgIAHgHQAIgIAJgGQAJgGAKgEQAKgFAMgCQALgCAKAAQANAAALACQALACAKAFQALAEAIAGQAKAFAHAIQAHAIAHAIQAFAJAFAJQAEALACALQACAKAAALQAAAMgCAJQgCAKgEAKQgFAKgFAJQgGAJgJAHQgHAHgJAGQgJAGgLAEQgKAEgLADQgMABgMAAQgKAAgLgBgAgNhGQgKAFgHAIQgHAHgDALQgFAKAAALQAAAMAFAIQADAKAIAIQAHAIAKAFQAJAEAKAAQAMAAAKgEQAKgEAHgIQAHgJAEgJQADgJAAgMQAAgLgDgKQgEgLgIgHQgGgIgLgFQgJgEgNAAQgJAAgKAEgAJcBVQgMgEgLgGIAWgqQALAGAOABQAEAAAEgDQAGgCADgEIhRiaIBAAAIAwBjIAthjIA/AAIhSCeQgHAPgHAKQgIAKgIAGQgIAHgKADQgLACgMAAQgOAAgNgDgAHvBWIg1hPIgVAYIAAA3Ig6AAIAAjRIA6AAIAABWIBIhWIBGAAIhQBbIBSB2gAEMBWIAAhKQgKAGgPAEQgPADgOAAQgQAAgNgEQgNgFgKgJQgIgHgFgNQgFgNAAgRIAAhQIA7AAIAABAQgBAJACAFQACAGADAFQAEAEAFACQAFACAIAAQALAAAJgDQAKgDAHgFIAAhWIA6AAIAADRgAjABWIAAieIhHAAIAACeIg7AAIAAjRIC8AAIAADRgAmgBWIAAh0IhRB0Ig3AAIAAjRIA5AAIAAB3IBSh3IA2AAIAADRg");
	this.shape.setTransform(78.5,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157,25.6);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AizB5IAAghIhUAAIgEAhIgyAAIAAhPIAOAAQAFgNAGgdQACgQACgwIAAgJICQAAIAABzIATAAIgFBPgAjqgZQAAAVgDAQQgDAPgEAPIArAAIAAhFIghAAgAm5BWIgQgIIgMgJIgKgNIgIgOIgFgRIgCgSQABgKAGgWQAGgOALgMQALgMAPgGIAPgFQAJgCAIAAQALAAAJACQAJABAIAEQAHADAHAFQAHAGAEAGQALALAFARQAEAQAAAQIAAAMIhtAAQAEAMAJAIQAJAHANAAQALAAAIgFQAJgDAJgJIAgAaQgHAIgHAFQgHAHgIAEQgJAEgLACQgKADgMAAQgZgCgKgEgAl/gEQgBgOgIgIQgIgIgLAAQgLAAgIAIQgHAIgDAOIA5AAIAAAAgAs3BYQgLgDgHgHQgHgGgFgJQgEgKAAgMQAAgNAEgKQAGgIAIgHQAIgFAMgDQALgDAPAAQAPAAAYAGIAAgCQAAgNgIgHQgEgEgHgBQgGgCgHAAQgNAAgLADQgKACgLAEIgMgoQAPgGAOgEQARgCAUAAQAOAAAXAEQAPAGAKAJQAIAJAFANQAEAMAAASIAABbIg5AAIAAgRQgIAKgMAFQgMAGgPgBQgMAAgJgDgAsbAXQgHAGAAAJQAAAJAGAEQAFAFAJAAQANAAAHgHQAIgIAAgLIAAgIQgJgFgNAAQgMABgHAFgAObBYIAAihIA5AAIAAA0IAbAAQAPgBAMAEQANAEAJAGQAIAIAFAIQAGAKAAAOQAAANgFAKQgFAKgIAIQgIAHgNAEQgLAEgQAAgAPUAwIARAAQALAAAGgFQAFgEABgJQgBgIgFgEQgGgFgLABIgRAAgAKCBYIAAihIA5AAIAABzIAnAAIAAhzIA6AAIAABzIAnAAIAAhzIA5AAIAAChgAIrBYIAAihIA4AAIAAChgAGABYIAAihIA6AAIAAA0IAbAAQAPgBAMAEQAMAEAKAGQAIAIAFAIQAFAKABAOQgBANgEAKQgEAKgJAIQgIAHgMAEQgMAEgPAAgAG6AwIARAAQALAAAFgFQAHgEAAgJQAAgIgHgEQgFgFgLABIgRAAgAEpBYIAAhQIgnA3Igmg2IAABPIg5AAIAAihIA6AAIAlA5IAmg5IA7AAIAAChgAgDBYIAAhSIg2BSIg1AAIAAihIA3AAIAABQIA3hQIAyAAIAAChgAqdBYIAAihIBgAAQAPAAALAEQALAEAHAIQAGAEACAHQADAGAAAJQAAANgHAJQgHAJgLADIANAGQAGADADAFQAFAFACAGQACAHAAAIQAAALgEAIQgFAIgIAGQgHAGgMADQgLADgPAAgAplAzIAWAAQAKAAAGgEQAFgEABgHQAAgHgGgEQgFgEgLAAIgWAAgAplgIIASAAQAKAAAGgEQAFgDAAgHQAAgGgFgEQgFgEgKAAIgTAAgAusBYIAAhQIhLAAIAABQIg6AAIAAjQIA6AAIAABOIBLAAIAAhOIA6AAIAADQg");
	this.shape.setTransform(128.2,5.9,0.8,0.8,10);

	// Слой 1
	this.instance = new lib.pincet_03();

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-18.6,222,74.7);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pincet_10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212,47);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baba_26();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,185);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx+AX1MAAAgvoMBj+AAAMAAAAvog");
	this.shape.setTransform(488,168.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(168,16,640,305);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.bg();
	this.instance.setTransform(-59,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59,0,937,305);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pincet_06();
	this.instance.setTransform(-41,-20.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-20.5,82,41);


(lib.Символ84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ85();
	this.instance.setTransform(9.4,10.6,1,1,0,0,0,9.4,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.379},6,cjs.Ease.get(1)).to({alpha:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,21.1);


(lib.Символ82 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ84();
	this.instance.setTransform(9.4,13.1,1,1,0,0,0,9.4,10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgPBnQgJgBgIgDQgHgDgHgEIgLgKQgGgGgFgHQgEgIgEgJIgFgVQgBgMAAgOQAAgNAFgdQADgKAFgJQAEgJAGgHQAGgIAHgFQAIgHAIgDQAJgFALgCQAKgCAKAAQAOAAAXAFQALAFATAMIgaAoQgKgHgJgEQgKgEgLAAQgJAAgFADQgHADgEAFQgFAHgDAIQgDAHgBAKQAKgHAJgEQAKgFANAAQAOAAAMAEQAMAFAJAIQAKAIAFAKQAFAMAAAPQAAAIgBAIIgFAOQgGAOgLAKQgLAJgPAFQgPAFgQAAQgJAAgJgCgAgKALQgFACgEADQgHAHAAAMQAAALAHAHQAEAEAFACQAGACAEAAQAHAAAFgCQAFgCAEgEQAIgGAAgNQAAgKgIgIQgEgDgFgCQgGgCgGgBQgFABgFACg");
	this.shape.setTransform(45,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVCGIB+kLIAtAAIh+ELg");
	this.shape_1.setTransform(27.5,13.4);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,26.9);


(lib.Символ80 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ83();
	this.instance.setTransform(129.3,46.9,1,1,0,0,0,45,10.6);

	// Слой 2
	this.instance_1 = new lib.Символ82();
	this.instance_1.setTransform(133.7,92.6,1.85,1.85,0,0,0,26.7,13.4);

	// Слой 1
	this.instance_2 = new lib.Символ81();
	this.instance_2.setTransform(131.5,79.5,1,1,0,0,0,85.5,85.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46,-6,171.1,171.1);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.setTransform(74.8,27.2,1,1,0,0,0,74.2,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,2.9,129.3,49);


(lib.Символ70 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ71();
	this.instance.setTransform(74,119.2,1,1,0,0,0,74,119.2);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,154,245);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,156,246);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ72();
	this.instance.setTransform(-50.1,-1.4,1,1,0,0,0,54.2,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ70();
	this.instance_1.setTransform(98.7,123.7,1,1,0,0,0,74,119.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9,cjs.Ease.get(1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.baba_23();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.7,-26.2,299.8,277.3);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.setTransform(96.5,125.5,1,1,0,0,0,96.5,125.5);

	this.instance_1 = new lib.Символ68();
	this.instance_1.setTransform(96.5,125.5,1,1,0,0,0,96.5,125.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,251);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.setTransform(42.9,66.2,1,1,0,0,0,42.9,66.2);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-3,90,138);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2.2,93,140);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ78();
	this.instance.setTransform(-148.2,45.2,1,1,0,0,0,82,29.2);

	// Слой 2
	this.instance_1 = new lib.Символ65();
	this.instance_1.setTransform(69.2,82.3,1,1,0,0,0,42.9,66.2);

	// Слой 1
	this.instance_2 = new lib.baba_16();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-218.3,0,347.4,170);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(64.5,85,1,1,0,0,0,64.5,85);

	this.instance_1 = new lib.Символ64();
	this.instance_1.setTransform(64.5,85,1,1,0,0,0,64.5,85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,170);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.setTransform(32.8,57.6,1,1,0,0,0,32.8,57.6);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,72,121);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,74,123);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ78();
	this.instance.setTransform(-75.5,43.5,1,1,0,0,0,82,29.2);

	// Слой 2
	this.instance_1 = new lib.Символ60();
	this.instance_1.setTransform(48.4,61.9,1,1,0,0,0,32.8,57.6);

	// Слой 1
	this.instance_2 = new lib.baba_13();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.6,0,246.7,153);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.setTransform(50.5,76.5,1,1,0,0,0,50.5,76.5);

	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(50.5,76.5,1,1,0,0,0,50.5,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,153);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(49.2,29.6,1,1,0,0,0,59.1,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.12,scaleY:1.12},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,4.5,118.4,50.1);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(46.4,71.2,1,1,0,0,0,46.4,71.2);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,97,146);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,100,150);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ78();
	this.instance.setTransform(-89.7,55.9,1,1,0,0,0,82,29.2);

	// Слой 2
	this.instance_1 = new lib.Символ53();
	this.instance_1.setTransform(72.1,118.8,1,1,0,0,0,46.4,71.2);

	// Слой 1
	this.instance_2 = new lib.baba_20();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.8,0,349.9,329);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(95,164.5,1,1,0,0,0,95,164.5);

	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(95,164.5,1,1,0,0,0,95,164.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,329);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(14.4,24.7,1,1,0,0,0,14.4,24.7);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,35,56);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-3.1,38,59);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ78();
	this.instance.setTransform(-81.9,-37.4,1,1,0,0,0,82,29.2);

	// Слой 2
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(41.5,90.3,1,1,0,0,0,14.4,24.9);

	// Слой 1
	this.instance_2 = new lib.baba_09();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-63.7,226.1,208.8);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(37,72.5,1,1,0,0,0,37,72.5);

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(37,72.5,1,1,0,0,0,37,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,145);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(17.8,21.4,1,1,0,0,0,17.8,21.4);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,42,49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-3.1,45,53);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ78();
	this.instance.setTransform(-212.6,-63.5,1,1,0,0,0,82,29.2);

	// Слой 2
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(33.5,43.8,1,1,0,0,0,17.8,21.4);

	// Слой 1
	this.instance_2 = new lib.baba_03();

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-282.7,-89.8,349.8,168.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(33.5,39.5,1,1,0,0,0,33.5,39.5);

	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(33.5,39.5,1,1,0,0,0,33.5,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,79);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(40.3,57.9,1,1,0,0,0,40.3,57.9);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-3,-3,87,122);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-3.1,90,126);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Слой 4
	this.instance = new lib.Символ55();
	this.instance.setTransform(-113.3,125.9,0.67,0.67,4,0,0,59.2,25.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:126,alpha:1},9,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(55.5,84.3,1,1,0,0,0,40.5,57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Слой 1
	this.instance_2 = new lib.baba_06();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.8,0,270.9,155);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(55,77.5,1,1,0,0,0,55,77.5);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(55,77.5,1,1,0,0,0,55,77.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,155);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(21.1,21.1,1,1,0,0,0,21.1,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.26,scaleY:1.26,x:21.2,y:21.2},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:21.1,y:21.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,44.4,44.4);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(7.2,6.6,1,1,0,0,0,21.1,21.1);

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(7,7,1,1,0,0,0,7,7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-15.6,44.4,44.4);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ31();
	this.instance.setTransform(-402.2,-32.3,1,1,0,0,0,7.1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-397.2,y:85.8},17,cjs.Ease.get(1)).to({x:-402.2,y:-32.3},22).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(-192.5,9.9,1.225,1.487,22,0,0,169.9,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.22,scaleY:1.49,rotation:-10,x:-192.4,y:9.3},17,cjs.Ease.get(1)).to({scaleX:1.23,scaleY:1.49,rotation:22,x:-192.3,y:8.9},22).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(-188.7,9.8,1,1,0,0,0,6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

	// Слой 1
	this.instance_3 = new lib.Анимация1("synched",0);
	this.instance_3.setTransform(41,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},17,cjs.Ease.get(1)).to({startPosition:0},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.4,-68.8,506.4,117);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pincet_03.png
	this.instance = new lib.Символ22();
	this.instance.setTransform(137,33.5,1,1,0,0,0,205,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:43.6,rotation:-3,x:137.1,y:33.6},4,cjs.Ease.get(1)).to({regY:43.5,rotation:0,x:137,y:33.5},5,cjs.Ease.get(1)).wait(1));

	// pincet_06.png
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(168,37.5,1,1,0,0,0,41,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// pincet_10.png
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(137,33.5,1,1,0,0,0,198,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:23.6,rotation:2,x:137.1,y:33.6},4,cjs.Ease.get(1)).to({regY:23.5,rotation:0,x:137,y:33.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.4,-51.8,506.4,117);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(61.3,4.2,1,1,0,0,0,73.4,12.8);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3366").s().p("AxeEJIkVkgIEVjxMAnRAAAIAAIRg");
	this.shape.setTransform(84.5,2);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.1,-24.6,279.2,53.1);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(87.8,28.3,1,1,0,0,0,78.5,12.8);

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(97,27.7,1,1,0,0,0,139.6,26.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.6,1.1,279.2,53.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.setTransform(78.6,39.8,1.393,1.393,0,0,0,73.4,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:28.6},11,cjs.Ease.get(1)).to({x:78.6},13,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(27.8,84.3,1.29,1.29,0,0,0,78.5,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:67.8},11,cjs.Ease.get(1)).to({x:27.8},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-12.3,417,150);


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

	// odeghda
	this.instance = new lib.Символ80();
	this.instance.setTransform(309.8,24.7,1,1,0,0,0,85.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.2},4).wait(1).to({x:309.8},4).wait(1));

	// text
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(78.5,27.2,1,1,0,0,0,78.5,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:568.5},3,cjs.Ease.get(1)).wait(1).to({x:78.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-66.8,569.9,204.5);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(33.5,39.5,1,1,0,0,0,33.5,39.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-282.7,-89.8,349.8,168.8);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(55,77.5,1,1,0,0,0,55,77.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160.4,0,270.4,155);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(37,72.5,1,1,0,0,0,37,72.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-152,-63.7,226.1,208.8);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.setTransform(50.5,76.5,1,1,0,0,0,50.5,76.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.6,0,246.7,153);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.setTransform(64.5,85,1,1,0,0,0,64.5,85);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-218.3,0,347.4,170);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.setTransform(95,164.5,1,1,0,0,0,95,164.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.8,0,349.9,329);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.setTransform(96.5,125.5,1,1,0,0,0,96.5,125.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.7,-26.2,299.8,277.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// baba_06.png
	this.instance = new lib.Символ12();
	this.instance.setTransform(24,74,1,1,0,0,0,60,104);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6},19,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).to({rotation:5},10,cjs.Ease.get(1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

	// baba_13.png
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(-28.5,64.5,1,1,0,0,0,50.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3,y:68},9,cjs.Ease.get(1)).to({rotation:0,x:-30,y:61.5},15,cjs.Ease.get(1)).to({x:-27.5,y:68},10,cjs.Ease.get(1)).to({x:-28,y:66},15,cjs.Ease.get(1)).to({x:-28.5,y:64.5},10,cjs.Ease.get(1)).wait(1));

	// baba_03.png
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(78,178,1,1,0,0,0,20,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:181},12,cjs.Ease.get(1)).to({x:72.5,y:177},10,cjs.Ease.get(1)).to({rotation:8,x:75.5,y:178},11,cjs.Ease.get(1)).to({regX:20.1,regY:26.8,rotation:11,x:76.6,y:174.5},12,cjs.Ease.get(1)).to({regX:20,regY:27,rotation:0,x:78,y:178},14,cjs.Ease.get(1)).wait(1));

	// baba_26.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(84,204.5,1,1,8,0,0,32,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:25.4,rotation:-3},14,cjs.Ease.get(1)).to({regY:25.5,rotation:0},15,cjs.Ease.get(1)).to({regY:25.6,rotation:2,y:204.6},14,cjs.Ease.get(1)).to({regY:25.5,rotation:8,y:204.5},16,cjs.Ease.get(1)).wait(1));

	// baba_09.png
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(-38.5,144,1,1,0,0,0,37,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-11,y:146.5},9,cjs.Ease.get(1)).to({rotation:0,x:-35.5,y:134.5},15,cjs.Ease.get(1)).to({rotation:-10,x:-38.5,y:137},10,cjs.Ease.get(1)).to({rotation:-5,x:-32,y:141.1},15,cjs.Ease.get(1)).to({rotation:0,x:-38.5,y:144},10,cjs.Ease.get(1)).wait(1));

	// baba_20.png
	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(34,195.5,1,1,0,0,0,95,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	// baba_16.png
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(58.5,91,1,1,0,0,0,64.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:59,y:95},12,cjs.Ease.get(1)).to({x:55,y:94},8,cjs.Ease.get(1)).to({x:57.5,y:99},12,cjs.Ease.get(1)).to({x:58.5,y:91},8,cjs.Ease.get(1)).to({x:59,y:93.5},13,cjs.Ease.get(1)).to({x:58.5,y:91},6,cjs.Ease.get(1)).wait(1));

	// baba_23.png
	this.instance_7 = new lib.Символ7();
	this.instance_7.setTransform(-13.5,229.5,1,1,0,0,0,96.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-30,271.8,402.9);


(lib.Символ1 = function(mode,startPosition,loop) {
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

	// room
	this.instance = new lib.Символ2();
	this.instance.setTransform(468.5,152.5,1,1,0,0,0,468.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.59},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// bg
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(482.1,164.4,1.992,1,0,0,0,528.9,179.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#80E6FF").ss(1,1,1).p("EhSogcDMClRAAAMAAAA4HMilRAAAg");
	this.shape.setTransform(482.1,164.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.9,-16.2,1275.1,361.2);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ31();
	this.instance.setTransform(30,-22,1,1,0,0,0,7.1,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// pincet_06.png
	this.instance_1 = new lib.Символ76();
	this.instance_1.setTransform(289,-13.5,1,1,0,0,0,41,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

	// pincet_03.png
	this.instance_2 = new lib.Символ75();
	this.instance_2.setTransform(166,-32,1,1,0,0,0,111,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3,y:-27},6,cjs.Ease.get(1)).to({rotation:0,y:-32},8,cjs.Ease.get(1)).wait(1));

	// pincet_10.png
	this.instance_3 = new lib.Символ77();
	this.instance_3.setTransform(161,-18.5,1,1,0,0,0,106,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:23.4,rotation:2,y:-22},6,cjs.Ease.get(1)).to({regY:23.5,rotation:0,y:-18.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,-60,322.2,67);


(lib.Символ73 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ74();
	this.instance.setTransform(71,14);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:81,y:45,alpha:0.961},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.8,-46,322.2,67);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(179,38,1,1,0,0,0,111,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:159},14,cjs.Ease.get(1)).to({x:179},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.4,-41.8,506.4,117);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(28.5,360.5,1,1,0,0,0,-81.5,330.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:330.4,rotation:-4},24,cjs.Ease.get(1)).to({regY:330.5,rotation:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271.8,402.9);


(lib.Символ4 = function(mode,startPosition,loop) {
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

	// baba
	this.instance = new lib.Символ14();
	this.instance.setTransform(-14.1,171.5,1,1,0,0,0,135.9,201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:155.9,y:190.5},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:-14.1,y:171.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-30,271.8,402.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(259.5,51,1,1,0,0,0,259.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8},19,cjs.Ease.get(1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.4,-41.8,506.4,117);


(lib.Символ19 = function(mode,startPosition,loop) {
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

	// pincet
	this.instance = new lib.Символ25();
	this.instance.setTransform(70.5,24,1,1,0,0,0,138.5,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:680.5},3,cjs.Ease.get(1)).wait(1).to({x:70.5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.4,-51.8,506.4,117);


// stage content:



(lib.stul = function(mode,startPosition,loop) {
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
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 20;
		
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		    this.baba.x = - stage.mouseX / 30;
			this.baba.y = - stage.mouseX / 50;  
		
		}
		
		
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.fon.gotoAndPlay(1);
			_this.baba.gotoAndPlay(1);
			_this.pincet.gotoAndPlay(1);
			_this.text.gotoAndPlay(1);
			_this.pric.gotoAndPlay(0);
		
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.fon.gotoAndPlay(5);
			_this.baba.gotoAndPlay(5);
			_this.pincet.gotoAndPlay(5);
			_this.text.gotoAndPlay(5);
			_this.pric.gotoAndPlay(1);
			
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pricel
	this.pric = new lib.Символ73();
	this.pric.setTransform(453,488.4,1,1,0,0,0,111,28);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// pincet
	this.pincet = new lib.Символ19();
	this.pincet.setTransform(516.5,74,1,1,0,0,0,111,28);

	this.timeline.addTween(cjs.Tween.get(this.pincet).wait(1));

	// text
	this.text = new lib.Символ15();
	this.text.setTransform(527.3,158,1,1,0,0,0,78.5,27.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// girl
	this.baba = new lib.Символ4();
	this.baba.setTransform(19,-10.5,1,1,0,0,0,-152,-38);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// bg
	this.fon = new lib.Символ1();
	this.fon.setTransform(-72.9,144.5,1,1,0,0,0,-31.9,144.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.6,136.8,1275.1,497.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
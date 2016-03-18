(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 467,
	height: 59,
	fps: 60,
	color: "#007CC0",
	manifest: [
		{src:"images/light.png", id:"light"}
	]
};



// symbols:



(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(96.2,6.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.6,-2.3,259.6,17.2);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-24.3,4.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.8,-2.9,271.1,15.7);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoPBJQgGgCgFgDQgEgDgDgFQgDgEgCgHQgCgGgBgHQgBgLADgZQABgOAGgVIAGgOQADgGAFgEQADgFAFgDQAGgDAGgCQAHgDAVgBIAOABIAMADQAGACAEADQAEADADAFQAEAFACAGIACANQABAXgCAMQgFAbgEAKIgFANIgHAKQgEAFgFADIgLAFQgGACgHABIgPABQgTgBgHgDgAn1g2QgIADgGAHQgFAGgDAMQgEALgCAPQgDARABALQAAALADAGQAEAHAGADQAHADAKAAQALAAAIgDQAHgDAGgHQAFgHAEgLQADgLACgQQACgRAAgKQAAgMgDgGQgDgHgHgDQgHgCgKAAQgLAAgHADgAmcBKIAViTIAvgBIAuABIgFASIhFAAIgHAtIAeAAQAOAAAJACQAKADAEAFQAGADACAJQABAIgCANQgCANgDAIQgEAIgGAGQgGAEgJACQgJACgNAAQgaAAgdgCgAmEA5IAcAAIAPgBQAGgBAEgDQAEgDABgFQACgFABgIIACgNQgBgFgCgDQgDgDgFgBQgFgBgJAAIgfAAgAkNBLIgOgDIAEgPIARAAQAGAAADgCQAGgCAJgQIAEgGIgIAAQgGAAgDgDQgEgDgBgFIgVhdIAWAAIARBTQABADADAAIAJAAIAqhWIAXAAIg3BuQgKAUgGAHQgFAFgGADQgGADgGAAIgFABIgKgBgAGYBIQgGgCgFgEQgDgEgBgGQgCgFABgIIANhaQABgHACgFQADgFAEgDQAEgDAGgCQAGgCAHAAIBAACIgDARIg7AAQgGAAgEADQgDADgBAIIgEAeIA/AAIgCAPIg/AAIgGAmQgBAIADADQADADAHAAIA6AAIgBARIg8ACQgJAAgGgDgAgGBIQgGgCgEgEQgEgEgBgGQgCgFABgIIANhaIADgMQADgFADgDQADgDAGgCQAGgCAHAAIBBACIgEARIg7AAQgGAAgEADQgDADgBAIIgEAeIA/AAIgCAPIg/AAIgEAmQgBAIABADQADADAHAAIA6AAIgBARIg8ACQgHAAgGgDgAIIBKQgEAAgCgCQgCgCABgEIABgMQABgDACgCQACgCAEAAIAFAAQAEAAACACQABACAAAFIgBALQgBAEgCABQgCACgEAAgAFMBKIATh5IgBAAQgHAOgDADIhNBoIgYAAIAViTIAVAAIgOBiIgFAXIABAAIALgSIBMhnIAYAAIgVCTgAC2BKIAJhGIhBAAIgJBGIgXAAIAViTIAWAAIgIA8IBBAAIAJg8IAVAAIgVCTgAhSBKIAKhGQgTAKgJACQgNAFgKAAQgJAAgHgDQgGgCgEgEQgEgFgBgGQgBgEABgJIAJg9IAVAAIgHA5QgCAKADAFQAEACALAAQALAAALgCQAJgDAOgIIAJg9IAWAAIgVCTgAIIAcIANhmIAVAAIgRBmg");
	this.shape.setTransform(41.1,5.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,-2.6,110.9,15.6);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(28.1,5.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.8,-2.7,161.9,15.6);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiKBMIACgbIhZAAIASh6IASAAIgPBsIA1AAIAPhsIASAAIgPBsIAPAAIgGApgAAuAwQgEgBgEgDQgEgDgCgEIgFgIIgCgMQgBgIACgVQACgLAFgSIAEgLIAHgJQADgEAEgCQAEgDAFgCQAHgCARgBIAMABQAFAAAFACQAEACAEADQADACADAEQADAEABAFIACALQABATgCAMQgEAUgDAIIgEALIgGAJIgIAGIgJAEQgFACgGABIgMABQgQgBgGgDgABEg5QgHADgEAFQgEAGgDAJQgDAJgCAPQgCAMAAAJQAAAJADAFQADAGAFACQAGADAIAAQAJAAAHgDQAGgCAEgGQAFgGADgJQACgJACgNQACgOAAgJQAAgJgDgFQgCgGgGgCQgFgCgJAAQgJAAgGACgAm5AwQgEgBgEgDQgEgDgCgEIgFgIIgCgMQgBgIACgVQACgLAFgSIAEgLIAHgJQADgEAEgCQAEgDAFgCQAHgCARgBIAMABQAFAAAFACQAEACAEADQADACADAEQADAEABAFIACALQABATgCAMQgEAUgDAIIgEALIgGAJIgIAGIgJAEQgFACgGABIgMABQgQgBgGgDgAmjg5QgHADgEAFQgEAGgDAJQgDAJgCAPQgCAMAAAJQAAAJADAFQADAGAFACQAGADAIAAQAJAAAHgDQAGgCAEgGQAFgGADgJQACgJACgNQACgOAAgJQAAgJgDgFQgCgGgGgCQgFgCgJAAQgJAAgGACgAGzAzQgEAAgBgBQgCgCABgDIABgKQABgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQACgBADAAIAFAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQACABgBAEIgBAJQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBABgEAAgAEGAxIARh6IASAAIgHAxIAZAAQALAAAIACQAHACAFAFQAEAEABAIQACAFgCAMQgBALgDAHQgEAHgFAEQgFAEgHACQgHACgLAAIgugCgAEaAjIAXAAQAIAAAFgBQAFgBADgDQADgCABgFQACgEABgHIABgLQgBgCgCgDQgCgDgEgBQgEgBgIAAIgZAAgAFvAxIASh6IASAAIgSB6gADWAxIAIg4Ig2AAIgIA4IgSAAIARh6IASAAIgHAyIA3AAIAHgyIASAAIgSB6gAgXAxIAPhkIgBAAIgIAOIhABWIgUAAIASh6IARAAIgLBSIgEASIAAAAIAJgOIBAhWIARAAIgPB6gAkRAxIAQhrIg3AAIgPBrIgSAAIARh6IBbAAIgRB6gAGzANIALhVIARAAIgOBVg");
	this.shape.setTransform(46.4,7.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92.7,15.4);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADcA+IASh6IASAAIgHAxIAZAAQALAAAHACQAIACAEAEQAEADACAIQACAHgCALQgCALgCAHQgEAHgFAFQgFAEgIABQgGACgLAAIgvgBgADwAvIAYABQAIAAAEgCQAGgBACgCQADgDACgEQACgEABgIIAAgKQAAgFgCgCQgCgDgEgBQgFgCgHAAIgZAAgAnTA+IARh6IAogBIAmABIgEAPIg6AAIgFAlIAYAAQAMAAAHACQAIACAFAEQAEADABAHQACAHgCAKQgBALgDAHQgEAHgEAEQgFAEgIACQgHABgLAAIgugBgAm/AwIAXAAIANgBQAFgBADgDQADgCABgEIADgLIABgLQgBgEgCgCQgCgDgEgBIgMgBIgZAAgAGGA8QgFgCgEgDQgDgDgBgFQgCgFABgGIALhLIADgJQACgEAEgDQADgDAFgBQAEgCAHAAIA1ACIgDAOIgwAAQgGAAgDACQgCADgBAGIgEAaIA1AAIgCALIg1AAIgEAgQgBAHACACQACADAHAAIAwAAIgBAOIgyABQgHAAgFgCgAFGA+IASh6IASAAIgSB6gACtA+IAIg7Ig2AAIgIA7IgSAAIARh6IASAAIgHAyIA3AAIAHgyIASAAIgSB6gAgEA+IAQh6QAOgCAdAAQALAAAHACQAIACAEAFQAFAFABAHQABAIgBALQgCAMgEAIQgCAFgGAEQgFAEgHACQgIACgLAAQgLAAgPgCIgIAxgAAcguIgHAuIAYAAIAMAAQAFgBADgDQADgDACgEIADgNIAAgLQAAgFgDgCQgCgDgEgBIgKgBgAglA+IgGgmIgyAAIgRAmIgTAAIA4h2QACgEAFAAIASAAQAGAAABAFIAWB1gAguAIIgJg3IgFAAIgaA3IAoAAgAijA+IAIg7Ig2AAIgIA7IgTAAIASh6IASAAIgHAyIA2AAIAHgyIASAAIgRB6gAkbA+IAQhkIgBAAIgIAOIhABWIgUAAIARh6IASAAIgLBRIgEATIAAAAIAJgPIBAhVIATAAIgRB6g");
	this.shape.setTransform(46.9,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93.7,12.8);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFiA+IARh6IASAAIgHAxIAZAAQALAAAIACQAHACAEAEQAEADACAIQABAHgBALQgCALgDAHQgDAHgFAFQgFAEgHABQgIACgKAAIgugBgAF2AvIAXABQAIAAAFgCQAFgBADgCQADgDABgEQACgEABgIIABgKQgBgFgCgCQgCgDgEgBQgFgCgHAAIgZAAgAB/A+IARh6IASAAIgGAxIAYAAQALAAAIACQAIACAEAEQAEADABAIQACAHgCALQgBALgDAHQgEAHgFAFQgEAEgIABQgHACgKAAIgvgBgACTAvIAXABQAJAAAEgCQAFgBADgCQADgDABgEQACgEABgIIABgKQgBgFgCgCQgCgDgDgBQgFgCgIAAIgZAAgAiOA+IARh6IASAAIgGAxIAYAAQALAAAIACQAHACAFAEQAEADABAIQACAHgCALQgBALgDAHQgEAHgEAFQgFAEgIABQgHACgKAAIgvgBgAh6AvIAXABQAJAAAEgCQAFgBADgCQADgDABgEQACgEABgIIABgKQgBgFgCgCQgBgDgFgBQgEgCgIAAIgZAAgAj5A+IARh6IAogBIAmABIgEAPIg6AAIgFAlIAYAAQAMAAAHACQAIACAFAEQAEADABAHQACAHgCAKQgBALgDAHQgEAHgFAEQgEAEgIACQgHABgLAAIgugBgAjlAwIAXAAIANgBQAFgBADgDQADgCABgEIADgLIABgLQgBgEgCgCQgCgDgEgBIgMgBIgZAAgAIKA8QgFgCgDgDQgDgDgBgFQgCgFACgGIAKhLIADgJQACgEADgDQAEgDAFgBQAFgCAFAAIA2ACIgCAOIgyAAQgFAAgDACQgCADgCAGIgDAaIA1AAIgCALIg0AAIgFAgQgBAHACACQADADAFAAIAwAAIAAAOIgyABQgHAAgGgCgAgBAvIAJgEQAGgEAEgHIAGgLIAFgOIALgtIAEgKIAGgHQAEgDAEgBIALgBIAtAAIgRB6IgSAAIAQhsIgXAAQgGAAgEADQgDADgBAHQgJAhgDALQgGATgFAJIgIAKIgIAHIgKAFQgFABgEAAgAHLA+IARh6IASAAIgRB6gAEyA+IAIg7Ig2AAIgIA7IgTAAIASh6IASAAIgHAyIA3AAIAGgyIASAAIgRB6gAglA+IASh6IASAAIgSB6gAkoA+IAQhkIgBAAIgJAOIg/BWIgUAAIARh6IASAAIgMBRIgEATIABAAIAJgPIA/hVIATAAIgRB6gAnfA+IARh6QANgCAeAAQALAAAHACQAIACAEAFQAEAFACAHQABAIgBALQgDAMgDAIQgDAFgFAEQgFAEgHACQgIACgLAAQgLAAgPgCIgHAxgAm+guIgGAuIAXAAIAMAAQAFgBADgDQADgDACgEIADgNIAAgLQgBgFgCgCQgCgDgEgBIgKgBgAoPA+IAPhsIg3AAIgOBsIgTAAIARh6IBcAAIgSB6g");
	this.shape.setTransform(60.2,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120.3,12.8);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.9).p("AAAkUIAADZAAACkIAABx");
	this.shape.setTransform(8.2,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGBwIg6AAQgKAAgHgHQgHgHAAgKIAAivQAAgJAHgIQAHgHAKAAIA6AAIBHAAQAJAAAIAGIAAABQAHAIAAAJIAACvQAAAKgHAHIAAABQgIAGgJAAg");
	this.shape_1.setTransform(9,33);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,17.9,57.6);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8).p("AAAkgIAACSAAAEhIAAg+");
	this.shape.setTransform(8.6,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCC5Ig+AAQgKAAgHgHQgHgHAAgKIAAlAQAAgKAHgIQAHgHAKAAIA+AAIBDAAQAJAAAIAHQAHAIAAAKIAAFAQAAAKgHAHQgIAHgJAAg");
	this.shape_1.setTransform(9,33.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,17.9,59.9);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("AW6BdIADghIhrAAIgGAhIgPAAIAHgxIAOAAQAHgMAGgNQAGgNAFgMQAGgSAIgmQABgHADgFQACgFAFgDQAEgEAFgCQAGgCAGAAIA5AAIgUCGIATAAIgHAxgAWQhGQgEAEgCAIQgHAlgGARQgEAMgGAMQgFANgHALIBDAAIARh2IgeAAQgIAAgFAEgAI1A+IgKgDQgFgDgEgDIgGgJIgEgLIgCgNQAAgLACgXQACgOAGgWQADgKAJgOIAIgIQAEgEAGgCQAFgCAGgBIANgBIAOABQAGABAFACQAFADADADQAEAEACAFIAEALIACAOQAAAVgCAOQgFAYgDAKQgHARgFAHQgEAFgEADIgKAGIgLADIgNABgAJFhIQgHADgFAIQgFAHgDAMQgEAMgCARQgCAPAAALQAAAMACAHQADAIAGADQAFADAJAAQAKAAAHgDQAHgEAGgHQAFgIADgMQADgLADgPQACgSAAgLQAAgMgCgHQgDgHgGgDQgFgDgKAAQgKAAgHADgALvA+QgHgBgFgDQgFgCgFgDIgHgJIgFgLIgCgNQgBgKADgYQACgPAGgWIAGgNIAHgLIAJgIIALgFQAIgDAUgBIAYABIARADIgDAPQgTgCgTAAQgMAAgHADQgJADgFAHQgGAHgEAMQgEALgCATQgDAQABALQAAAMADAHQAEAGAHAEQAGADALAAQAUAAAYgDIABAPQgKADgKABIgZABgAG1A+QgGgBgFgDQgEgCgEgDQgDgEgCgEQgDgHgBgRQgBgOAEgUQACgRAHgYIAGgOQAEgGAEgEIAJgHIAKgFQAKgCAPAAQAJAAAXADIgCAOIgdgBQgMAAgHACQgIADgFAGQgGAGgDALQgEALgDASQAGgGANgHQAKgFALAAQAKAAAHACQAIADAFAGQAEAGACAJQABAKgCAMQgCANgDAJQgEAKgGAHQgHAGgJADQgKAEgOAAgAHBgRQgJAFgLAKIgCAWQAAAKACAFQADAGAFADQAGACAKAAQAJAAAGgCQAHgCAEgFQAEgFACgHIAEgPIABgNQAAgHgDgEQgCgEgFgBQgFgCgIAAQgJAAgJAEgA1LA7IADgOIAeABQANAAAHgDQAJgCAFgHQAFgGAEgLQADgKAEgQQgJAJgKADQgJAEgLAAQgMABgIgEQgIgDgEgFQgEgHgBgJQgBgJABgMQACgOAEgJQAEgKAHgGQAHgGAKgDQAJgDANAAIANABIALADQAFACADADQAEADACAFQACAEABAGIACAOQgBAWgDAOQgFAcgEALIgGAOIgHAKIgJAHQgFADgFACQgLADgQAAQgVgBgNgDgA0dhKQgHADgEAEQgEAEgCAHIgEARIAAAPQAAAGADAEQACAEAFACQAFACAHAAQALAAAIgEQAJgFAKgLQADgPAAgIQAAgKgDgGQgCgGgGgCQgGgDgJAAQgKAAgGACgA24A8QgKgCgFgFQgGgFgCgIQgCgIACgKIADgQIAGgKQAEgGAFgDQAFgDAHAAIABgBQgGgBgDgDQgEgCgCgFQgCgEgBgHQAAgGABgHQACgLADgHQADgIAGgEQAGgFAJgDQAJgCAPAAQAOAAAJADQAKACAFAFQAEAFACAIQABAHgCALIgDANQgCAGgDAFQgDAEgFADQgEADgGAAIAAABQAGABAFADQAEADADAFQACAEAAAHIgBAQQgCALgDAHQgDAHgGAFQgGAFgKACQgLACgPAAIgEAAQgMAAgIgCgA2ogIQgGACgEADQgEADgDAEQgCAFgBAKIgBANQABAFADADQADADAHACIARABQAKAAAGgCQAHgBAEgDQAEgEACgFQACgFABgIQACgKgBgFQAAgDgEgDQgDgDgGgCIgRgBIgRABgA2ehLQgGACgDADQgEADgCAFQgCAFgBAIIAAAMQABAFACADQADADAHABIAPABIAQgBQAGgCADgDQAEgCACgGIADgNIAAgMQAAgFgDgDQgDgDgGgBQgGgBgKAAQgKAAgGABgAouA8IAWiWIAugBIAvABIgEARIhIAAIgHAxIAfAAQAPAAAJACQAJADAFAFQAFAFACAJQABAGgBANQgCANgEAIQgEAJgGAEQgGAFgJACQgJACgNAAQgaAAgdgCgAoYAtIAfABQAJAAAGgCQAHgBAEgDQADgDADgGIADgOIABgOQgBgDgCgDQgDgDgGgCQgFgBgKAAIggAAgAxaA8QgGgDgEgFQgDgGgBgJQgBgIACgMQACgNADgGQADgIAEgGQAFgFAHgCQAHgDAJAAQAKAAAHADQAHADADAFQAEAFAAAJQABAHgCAMQgBAMgDAJQgDAIgFAFQgFAFgHADQgGACgKAAQgKAAgHgCgAxKgMQgEACgDAEIgFAIIgEAgIACAKQABADAEA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");
	this.shape.setTransform(148.9,9.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297.9,18.8);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F4F4").s().p("EgmMAFjIAArFMBMYAAAIAALFg");
	this.shape.setTransform(244.5,35.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,489,71);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2hHXIAAutMAtDAAAIl5Otg");
	this.shape.setTransform(-194.7,25.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-338.9,-21.7,288.5,94.3);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A3D4EB","#007CC0"],[0,0.271],-19.7,-23.4,19.8,23.6).s().p("AjODbQgKAAgGgHQgHgGAAgJIAAmHQAAgKAHgHQAGgHAKAAIGeAAQAJAAAHAHQAGAHAAAKIAAGHQAAAJgGAGQgHAHgJAAgAiJiGQgHAGAAAIIAADxQAAAJAHAHQAGAFAIABID3AAQAJgBAGgFQAGgHAAgJIAAjxQAAgIgGgGQgGgHgJAAIj3AAQgIAAgGAHg");
	this.shape.setTransform(-367.7,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007CC0").s().p("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");
	this.shape_1.setTransform(-273,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGVBoIAAgPQANAFAPAAQALAAAIgDQAIgEAHgHQAHgJAJgTIhaifIATAAIBEB8QAGAIAEAMIABAAIBEiQIASAAIhICVIgOAbQgFAMgJAJQgHAJgKAFQgLAEgPAAQgSAAgLgEgAMhBqIAAihQAAgRACgSIgCAAIhUDEIgJAAIhUjEIgCAAQACASAAATIAACfIgQAAIAAjVIAYAAIBQC7IABAAIBQi7IAYAAIAADVgAFZBqIAAiJIABgzIAAAAIiGC8IgQAAIAAjVIAQAAIAACKIgCAyIACAAICEi8IAQAAIAADVgAAMBqIAAjVIA3AAQBRAAAAA+QAAAfgWAOQgXASgoAAIgjAAIAABYgAAcAEIAfAAQAmAAARgJQARgNAAgaQAAgZgQgNQgRgLggAAIgmAAgAgjBqIgfhMIhcAAIgfBMIgRAAIBajVIAKAAIBZDVgAh4g6IggBLIBQAAIgehLQgFgLgEgPIgJAagAj+BqIAAhqIiDAAIAABqIgQAAIAAjVIAQAAIAABgICDAAIAAhgIAQAAIAADVgAngBqIAAiJQAAgZACgaIgBAAIiFC8IgQAAIAAjVIAPAAIAACKIgBAyIABAAICFi8IAPAAIAADVgAswBqIAAjVIB/AAIAAAPIhuAAIAABQIAsAAQAnAAAUAMQATAOAAAdQAAAfgTAPQgTARgkAAgAsfBcIAuAAQAeAAAPgLQAOgMAAgaQAAgYgPgKQgPgJghAAIgqAAg");
	this.shape_2.setTransform(-250.2,-3.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-390.7,-17.3,222.6,45.2);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.light();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(10.7,65.6,1,1,0,0,0,9,27.8);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-10.8,y:72.1,alpha:0},14).to({x:-35.6,y:80.1},14).wait(1));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(59.3,50.2,1,1,0,0,0,9,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:37.8,y:56.8},14).to({x:13.1,y:64.8},14).wait(1));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(156.7,19.4,1,1,0,0,0,9,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:135.2,y:26},14).to({x:110.5,y:34},14).wait(1));

	// Символ 10
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(108,34.8,1,1,0,0,0,9,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:86.5,y:41.4},14).to({x:61.8,y:49.4},14).wait(1));

	// Символ 9
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(181.1,12.6,1,1,0,0,0,9,28.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:159.6,y:19.2},14).to({x:134.9,y:27.2,alpha:1},14).wait(1));

	// Символ 9
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(132.4,28.1,1,1,0,0,0,9,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:110.9,y:34.6},14).to({x:86.1,y:42.6},14).wait(1));

	// Символ 9
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(35.1,58.8,1,1,0,0,0,9,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:13.6,y:65.3},14).to({x:-11.2,y:73.3,alpha:0},14).wait(1));

	// Символ 9
	this.instance_7 = new lib.Символ9();
	this.instance_7.setTransform(83.7,43.4,1,1,0,0,0,9,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:62.2,y:50},14).to({x:37.5,y:58},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,-16.7,188.4,110.4);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(-165.2,50.9,1.203,1.203,0,0,0,70.5,42.1);
	this.instance.alpha = 0.109;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-248,-19.8,226.7,132.9);


(lib.Символ10_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(146.5,58,1,1,0,0,0,173.5,85);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-155.6,15.4,0.864,0.864,0,0,0,88,17.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:-279.4,regY:5.3,x:-427.7,y:4.6},0).wait(1).to({x:-392},0).wait(1).to({x:-364.9},0).wait(1).to({x:-344.4},0).wait(1).to({x:-328.4},0).wait(1).to({x:-315.2},0).wait(1).to({x:-303.5},0).wait(1).to({x:-293},0).wait(1).to({x:-284.2},0).wait(1).to({x:-276.6},0).wait(1).to({x:-270.3},0).wait(1).to({x:-265},0).wait(1).to({x:-260.5},0).wait(1).to({x:-256.6},0).wait(1).to({x:-253.4},0).wait(1).to({x:-250.7},0).wait(1).to({x:-248.3},0).wait(1).to({x:-246.2},0).wait(1).to({x:-244.4},0).wait(1).to({x:-242.7},0).wait(1).to({regX:88,regY:17.8,x:76,y:15.4},0).wait(517).to({regX:-279.4,regY:5.3,x:-245.3,y:4.6},0).wait(1).to({x:-250.3},0).wait(1).to({x:-256.7},0).wait(1).to({x:-265},0).wait(1).to({x:-276},0).wait(1).to({x:-290.4},0).wait(1).to({x:-309.3},0).wait(1).to({x:-333},0).wait(1).to({x:-363},0).wait(1).to({x:-404},0).wait(1).to({x:-461.1},0).wait(1).to({regX:88,regY:17.8,x:-215.5,y:15.4},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-211.9,17.2,1,1,0,0,0,112.5,36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-194.7,regY:25.4,x:-462.8,y:5.8},0).wait(1).to({x:-418.2},0).wait(1).to({x:-384.4},0).wait(1).to({x:-358.9},0).wait(1).to({x:-338.9},0).wait(1).to({x:-322.4},0).wait(1).to({x:-307.8},0).wait(1).to({x:-294.8},0).wait(1).to({x:-283.7},0).wait(1).to({x:-274.3},0).wait(1).to({x:-266.4},0).wait(1).to({x:-259.7},0).wait(1).to({x:-254.1},0).wait(1).to({x:-249.4},0).wait(1).to({x:-245.3},0).wait(1).to({x:-241.9},0).wait(1).to({x:-238.9},0).wait(1).to({x:-236.3},0).wait(1).to({x:-234.1},0).wait(1).to({x:-232},0).wait(1).to({regX:112.5,regY:36.8,x:77,y:17.2},0).wait(515).to({regX:-194.7,regY:25.4,x:-234.2,y:5.8},0).wait(1).to({x:-239.3},0).wait(1).to({x:-245.8},0).wait(1).to({x:-254.2},0).wait(1).to({x:-265.3},0).wait(1).to({x:-279.9},0).wait(1).to({x:-299.1},0).wait(1).to({x:-323.1},0).wait(1).to({x:-353.5},0).wait(1).to({x:-395},0).wait(1).to({x:-452.8},0).wait(1).to({regX:112.5,regY:36.8,x:-218.2,y:17.2},0).wait(6));

	// Слой 3
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(332,4.8,1,1,0,0,0,94.2,54.8);
	this.instance_2.alpha = 0.109;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({alpha:1},15).wait(512).to({alpha:0.109},17).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(91,63.5,1,1,0,0,0,148.9,9.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(427).to({_off:false},0).wait(1).to({regY:9.4,y:49.6},0).wait(1).to({y:39.3},0).wait(1).to({y:32.2},0).wait(1).to({y:27.2},0).wait(1).to({y:23.3},0).wait(1).to({y:20},0).wait(1).to({y:17.1},0).wait(1).to({y:14.7},0).wait(1).to({y:12.7},0).wait(1).to({y:11},0).wait(1).to({y:9.6},0).wait(1).to({y:8.6},0).wait(1).to({y:7.7},0).wait(1).to({y:7.1},0).wait(1).to({y:6.7},0).wait(1).to({y:6.4},0).wait(1).to({regY:9.3,y:6.2},0).wait(1).to({regY:9.4,y:6.3},0).wait(91).to({regY:9.3,y:6.2},0).wait(1).to({regY:9.4,y:6},0).wait(1).to({y:5.4},0).wait(1).to({y:4.8},0).wait(1).to({y:3.9},0).wait(1).to({y:2.9},0).wait(1).to({y:1.7},0).wait(1).to({y:0.2},0).wait(1).to({y:-1.6},0).wait(1).to({y:-3.9},0).wait(1).to({y:-6.8},0).wait(1).to({y:-10.4},0).wait(1).to({y:-14.7},0).wait(1).to({y:-20.1},0).wait(1).to({y:-27.5},0).wait(1).to({y:-37.7},0).wait(1).to({regY:9.3,y:-51.1},0).wait(1));

	// Символ 28
	this.instance_4 = new lib.Символ28();
	this.instance_4.setTransform(-78.2,5.4,1,1,0,0,0,97.4,6.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(322).to({_off:false},0).to({x:10.5,alpha:0.52},13,cjs.Ease.get(-1)).to({x:91.8,alpha:1},68,cjs.Ease.get(1)).to({x:81.8},12,cjs.Ease.get(1)).wait(1).to({regX:96.2,regY:6.3,x:81.3,y:5.3},0).wait(1).to({x:83.5},0).wait(1).to({x:87.3},0).wait(1).to({x:93.1},0).wait(1).to({x:101.2},0).wait(1).to({x:112},0).wait(1).to({x:125.8,y:5.4},0).wait(1).to({x:142.5},0).wait(1).to({x:162,y:5.5},0).wait(1).to({x:183.2,y:5.6},0).wait(1).to({x:204.7},0).wait(1).to({x:224.3,y:5.7},0).wait(1).to({x:242.9},0).wait(1).to({x:264.2,y:5.8},0).wait(1).to({x:294.4,y:5.9},0).wait(1).to({x:345.7,y:6.1},0).wait(1).to({regX:97.4,regY:6.5,x:445.8,y:6.5},0).to({_off:true},1).wait(120));

	// Символ 27
	this.instance_5 = new lib.Символ27();
	this.instance_5.setTransform(409.8,6.4,1,1,0,0,0,48.6,6.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208).to({_off:false},0).wait(1).to({regX:-24.3,regY:4.9,x:286.6,y:4.9},0).wait(1).to({x:251.8},0).wait(1).to({x:226.9},0).wait(1).to({x:208.2},0).wait(1).to({x:193.6},0).wait(1).to({x:181.3},0).wait(1).to({x:170.3},0).wait(1).to({x:159.7},0).wait(1).to({x:149.1},0).wait(1).to({x:138.6},0).wait(1).to({x:129.1},0).wait(1).to({x:120.9},0).wait(1).to({x:114},0).wait(1).to({x:108.4},0).wait(1).to({x:104},0).wait(1).to({x:100.4},0).wait(1).to({x:97.6},0).wait(1).to({x:95.3},0).wait(1).to({x:93.5},0).wait(1).to({x:91.9},0).wait(1).to({x:90.6},0).wait(1).to({x:89.5},0).wait(1).to({regX:48.6,regY:6.4,x:161.5,y:6.4},0).wait(71).to({x:161.8},0).wait(1).to({regX:-24.3,regY:4.9,x:88.9,y:1.1},0).wait(1).to({y:-0.9},0).wait(1).to({y:-2.2},0).wait(1).to({y:-3.2},0).wait(1).to({y:-3.9},0).wait(1).to({y:-4.4},0).wait(1).to({y:-4.8},0).wait(1).to({regX:48.6,regY:6.4,x:161.8,y:-3.6},0).wait(1).to({regX:-24.3,regY:4.9,x:88.8,y:-5},0).wait(1).to({y:-4.7},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.6},0).wait(1).to({y:-2.6},0).wait(1).to({y:-1.1},0).wait(1).to({x:88.7,y:0.8},0).wait(1).to({y:3.6},0).wait(1).to({x:88.6,y:7.5},0).wait(1).to({x:88.5,y:13.2},0).wait(1).to({x:88.3,y:22.9},0).wait(1).to({regX:48.6,regY:6.4,x:160.8,y:41.4},0).to({_off:true},1).wait(230));

	// Символ 26
	this.instance_6 = new lib.Символ26();
	this.instance_6.setTransform(169.2,56,1,1,0,0,0,46,6.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(128).to({_off:false},0).wait(1).to({regX:41.1,regY:5.2,x:164.3,y:57.7},0).wait(1).to({y:58.9},0).wait(1).to({regX:46,regY:6.5,x:169.2,y:60.7},0).wait(1).to({regX:41.1,regY:5.2,x:164.5,y:44.6},0).wait(1).to({x:164.6,y:35.5},0).wait(1).to({x:164.7,y:29.4},0).wait(1).to({y:24.9},0).wait(1).to({x:164.8,y:21.3},0).wait(1).to({y:17.8},0).wait(1).to({x:164.9,y:14.3},0).wait(1).to({y:11.1},0).wait(1).to({y:8.1},0).wait(1).to({x:165,y:5.6},0).wait(1).to({y:3.4},0).wait(1).to({y:1.5},0).wait(1).to({y:-0.1},0).wait(1).to({x:165.1,y:-1.5},0).wait(1).to({y:-2.5},0).wait(1).to({y:-3.4},0).wait(1).to({y:-4.2},0).wait(1).to({regX:46,regY:6.5,x:170,y:-3.5},0).wait(1).to({regX:41.1,regY:5.2,x:165.1,y:-4.6},0).wait(1).to({y:-4.3},0).wait(1).to({y:-3.8},0).wait(1).to({y:-3.1},0).wait(1).to({y:-2.3},0).wait(1).to({y:-1.2},0).wait(1).to({y:0.1},0).wait(1).to({y:2.1},0).wait(1).to({regX:46,regY:6.5,x:170,y:6.5},0).wait(51).to({regX:41.1,regY:5.2,x:117.1,y:5.2},0).wait(1).to({x:75.8},0).wait(1).to({x:41.5},0).wait(1).to({x:13.6},0).wait(1).to({x:-9.2},0).wait(1).to({x:-28},0).wait(1).to({x:-43.9},0).wait(1).to({x:-57.8},0).wait(1).to({x:-70},0).wait(1).to({x:-81.2},0).wait(1).to({x:-91.4},0).wait(1).to({x:-100.5},0).wait(1).to({x:-108.7},0).wait(1).to({x:-116},0).wait(1).to({x:-122.6},0).wait(1).to({x:-128.5},0).wait(1).to({x:-133.8},0).wait(1).to({x:-138.6},0).wait(1).to({x:-143},0).wait(1).to({x:-146.9},0).wait(1).to({x:-150.5},0).wait(1).to({x:-153.8},0).wait(1).to({x:-156.8},0).wait(1).to({x:-159.6},0).wait(1).to({x:-162.1},0).wait(1).to({x:-164.5},0).wait(1).to({x:-166.7},0).wait(1).to({x:-168.8},0).wait(1).to({x:-170.8},0).wait(1).to({x:-172.6},0).wait(1).to({x:-174.4},0).wait(1).to({regX:46,regY:6.5,x:-171.3,y:6.5},0).to({_off:true},81).wait(232));

	// Символ 25
	this.instance_7 = new lib.Символ25();
	this.instance_7.setTransform(51.4,43.6,1,1,0,0,0,67,6.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(128).to({_off:false},0).wait(1).to({regX:28.1,regY:5.1,x:12.7,y:31.8},0).wait(1).to({x:12.8,y:25.2},0).wait(1).to({x:12.9,y:20.8},0).wait(1).to({x:13,y:17.5},0).wait(1).to({y:14.9},0).wait(1).to({x:13.1,y:12.5},0).wait(1).to({y:10},0).wait(1).to({y:7.7},0).wait(1).to({x:13.2,y:5.6},0).wait(1).to({y:3.7},0).wait(1).to({y:2},0).wait(1).to({x:13.3,y:0.6},0).wait(1).to({y:-0.7},0).wait(1).to({y:-1.7},0).wait(1).to({y:-2.6},0).wait(1).to({y:-3.3},0).wait(1).to({y:-4},0).wait(1).to({y:-4.5},0).wait(1).to({regX:67,regY:6.5,x:52.2,y:-3.5},0).wait(1).to({regX:28.1,regY:5.1,x:13.3,y:-4.7},0).wait(1).to({y:-4.4},0).wait(1).to({y:-3.9},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2.4},0).wait(1).to({y:-1.3},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:67,regY:6.5,x:52.2,y:6.5},0).wait(53).to({regX:28.1,regY:5.1,x:-34.6,y:5.1},0).wait(1).to({x:-75.9},0).wait(1).to({x:-110.2},0).wait(1).to({x:-138.2},0).wait(1).to({x:-161},0).wait(1).to({x:-179.8},0).wait(1).to({x:-195.7},0).wait(1).to({x:-209.6},0).wait(1).to({x:-221.8},0).wait(1).to({x:-233},0).wait(1).to({x:-243.2},0).wait(1).to({x:-252.3},0).wait(1).to({x:-260.5},0).wait(1).to({x:-267.8},0).wait(1).to({x:-274.4},0).wait(1).to({x:-280.3},0).wait(1).to({x:-285.6},0).wait(1).to({x:-290.4},0).wait(1).to({x:-294.8},0).wait(1).to({x:-298.7},0).wait(1).to({x:-302.3},0).wait(1).to({x:-305.6},0).wait(1).to({x:-308.6},0).wait(1).to({x:-311.4},0).wait(1).to({x:-313.9},0).wait(1).to({x:-316.3},0).wait(1).to({x:-318.5},0).wait(1).to({x:-320.6},0).wait(1).to({x:-322.6},0).wait(1).to({x:-324.4},0).wait(1).to({x:-326.2},0).wait(1).to({regX:67,regY:6.5,x:-289.1,y:6.5},0).to({_off:true},79).wait(234));

	// Символ 24
	this.instance_8 = new lib.Символ24();
	this.instance_8.setTransform(407.9,7.7,1,1,0,0,0,43.4,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:46.4,x:410.9},0).wait(6).to({regX:43.4,x:407.9},0).wait(1).to({regX:46.4,x:381.9},0).wait(1).to({x:354.9},0).wait(1).to({x:331.4},0).wait(1).to({x:312.1},0).wait(1).to({x:296.8},0).wait(1).to({x:284.4},0).wait(1).to({x:273.9},0).wait(1).to({x:264.5},0).wait(1).to({x:255.9},0).wait(1).to({x:248},0).wait(1).to({x:240.8},0).wait(1).to({x:234.3},0).wait(1).to({x:228.6},0).wait(1).to({x:223.5},0).wait(1).to({x:219.1},0).wait(1).to({x:215.2},0).wait(1).to({x:211.9},0).wait(1).to({x:209.1},0).wait(1).to({x:206.8},0).wait(1).to({x:204.8},0).wait(1).to({x:203.1},0).wait(1).to({x:201.8},0).wait(1).to({x:200.7},0).wait(1).to({regX:43.4,x:196.9},0).wait(1).to({regX:46.4,x:200.1},0).wait(1).to({x:200.3},0).wait(1).to({x:200.5},0).wait(1).to({x:200.9},0).wait(1).to({x:201.3},0).wait(1).to({x:201.8},0).wait(1).to({x:202.4},0).wait(1).to({x:203.1},0).wait(1).to({x:203.9},0).wait(1).to({x:204.7},0).wait(1).to({x:205.6},0).wait(1).to({x:206.8},0).wait(1).to({x:208.1},0).wait(1).to({regX:43.4,x:206.9},0).to({scaleX:1.05,scaleY:1.05,x:212.9},58).wait(1).to({regX:46.4,scaleX:1.06,scaleY:1.06,x:216.9,y:7.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:217.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:218.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:218.8,y:7.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:219.3,y:7.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:219.6,y:7.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:220,y:7.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:220.3,y:7.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:220.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:220.7,y:7.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:220.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:220.9},0).wait(1).to({x:221},0).wait(1).to({regX:43.4,scaleX:1.09,scaleY:1.09,x:217.9,y:7.7},0).wait(1).to({regX:46.4,scaleX:1.09,scaleY:1.09,x:220.6,alpha:0.993},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:219.7,alpha:0.983},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:218.5,y:7.8,alpha:0.969},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:217,alpha:0.951},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:215.1,alpha:0.929},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:212.9,alpha:0.903},0).wait(1).to({scaleX:1,scaleY:1,x:210.4,alpha:0.873},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:207.4,y:7.7,alpha:0.837},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:203.8,alpha:0.795},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:199.4,alpha:0.743},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:193.9,alpha:0.678},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:187.4,alpha:0.601},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:179,alpha:0.502},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:167.7,alpha:0.368},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:153.1,alpha:0.196},0).wait(1).to({regX:43.4,scaleX:0.4,scaleY:0.4,x:135.4,alpha:0},0).to({_off:true},1).wait(419));

	// Символ 23
	this.instance_9 = new lib.Символ23();
	this.instance_9.setTransform(101.8,61,1,1,0,0,0,46.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({y:52.1},0).wait(1).to({y:43.9},0).wait(1).to({y:36.7},0).wait(1).to({y:30.8},0).wait(1).to({y:26.1},0).wait(1).to({y:22.3},0).wait(1).to({y:19.1},0).wait(1).to({y:16.2},0).wait(1).to({y:13.6},0).wait(1).to({y:11.2},0).wait(1).to({y:9},0).wait(1).to({y:7},0).wait(1).to({y:5.3},0).wait(1).to({y:3.7},0).wait(1).to({y:2.4},0).wait(1).to({y:1.2},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.7},0).wait(1).to({y:-1.4},0).wait(1).to({y:-2},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2.9},0).wait(1).to({y:-3.3},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.3},0).wait(1).to({y:-3.1},0).wait(1).to({y:-2.9},0).wait(1).to({y:-2.5},0).wait(1).to({y:-2.1},0).wait(1).to({y:-1.6},0).wait(1).to({y:-1},0).wait(1).to({y:-0.3},0).wait(1).to({y:0.5},0).wait(1).to({y:1.3},0).wait(1).to({y:2.2},0).wait(1).to({y:3.4},0).wait(1).to({y:4.7},0).wait(1).to({y:6.5},0).to({scaleX:1.05,scaleY:1.05,x:102.5,y:6.4},59).wait(1).to({scaleX:1.06,scaleY:1.06,x:102.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:102.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:102.8},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:102.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:6.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:103,y:6.4},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:6.3},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:103.1,y:6.4},0).wait(2).to({regY:6.3,scaleX:1.09,scaleY:1.09,y:6.3},0).wait(1).to({regY:6.4,scaleX:1.09,scaleY:1.09,x:103,y:6.4,alpha:0.993},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:102.9,alpha:0.983},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:102.8,alpha:0.969},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:102.6,alpha:0.951},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:102.4,alpha:0.929},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:102.1,y:6.5,alpha:0.903},0).wait(1).to({scaleX:1,scaleY:1,x:101.9,alpha:0.873},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:101.5,alpha:0.837},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:101.1,alpha:0.795},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:100.6,y:6.6,alpha:0.743},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:100,alpha:0.678},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:99.3,y:6.7,alpha:0.601},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:98.3,y:6.8,alpha:0.502},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:97,y:6.9,alpha:0.368},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:95.4,y:7,alpha:0.196},0).wait(1).to({regX:46.8,scaleX:0.4,scaleY:0.4,x:93.6,y:7.2,alpha:0},0).to({_off:true},1).wait(421));

	// Символ 22
	this.instance_10 = new lib.Символ22();
	this.instance_10.setTransform(-19.9,6.5,1.881,1.881,0,0,0,60.1,6.4);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({scaleX:1.74,scaleY:1.74,alpha:0.137},0).wait(1).to({scaleX:1.61,scaleY:1.61,alpha:0.265},0).wait(1).to({scaleX:1.5,scaleY:1.5,alpha:0.377},0).wait(1).to({scaleX:1.4,scaleY:1.4,alpha:0.468},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-19.8,alpha:0.541},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-19.9,alpha:0.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.649},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-19.8,alpha:0.694},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.734},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-19.9,alpha:0.772},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.806},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-19.8,alpha:0.837},0).wait(1).to({scaleX:1,scaleY:1,x:-19.9,alpha:0.864},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-19.8,alpha:0.888},0).wait(1).to({scaleX:0.95,scaleY:0.95,alpha:0.909},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-19.9,y:6.4,alpha:0.927},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.943},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-19.8,y:6.5,alpha:0.956},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:6.4,alpha:0.968},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-19.9,y:6.5,alpha:0.977},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-19.8,alpha:0.985},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:6.4,alpha:0.991},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.996},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-19.9,y:6.5,alpha:1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-19.8,y:6.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-19.9,y:6.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-19.8,y:6.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:6.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:6.4},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:6.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-19.9,y:6.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:6.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:6.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-19.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-19.9,y:6.5},0).wait(1).to({scaleX:1,scaleY:1},0).to({scaleX:1.05,scaleY:1.05,x:-25.3,y:6.4},60).wait(1).to({scaleX:1.06,scaleY:1.06,x:-26.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-26.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-27.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-27.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-28.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-28.5,y:6.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-28.8,y:6.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-29},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-29.3,y:6.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-29.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-29.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-29.6,y:6.4},0).wait(1).to({x:-29.7},0).wait(1).to({regY:6.3,scaleX:1.09,scaleY:1.09,x:-29.8,y:6.3},0).wait(1).to({regY:6.4,scaleX:1.09,scaleY:1.09,x:-29.3,y:6.4,alpha:0.993},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-28.5,alpha:0.983},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-27.4,alpha:0.969},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-26.1,alpha:0.951},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-24.5,alpha:0.929},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-22.6,y:6.5,alpha:0.903},0).wait(1).to({scaleX:1,scaleY:1,x:-20.3,alpha:0.873},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-17.6,alpha:0.837},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-14.4,alpha:0.795},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-10.5,y:6.6,alpha:0.743},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-5.7,alpha:0.678},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:0.1,y:6.7,alpha:0.601},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:7.5,y:6.8,alpha:0.502},0).wait(1).to({regX:60.2,scaleX:0.65,scaleY:0.65,x:17.6,y:6.9,alpha:0.368},0).wait(1).to({regX:60.1,scaleX:0.53,scaleY:0.53,x:30.5,y:7,alpha:0.196},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:45.1,y:7.2,alpha:0},0).to({_off:true},1).wait(423));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-663.3,-41.3,1130.9,118.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10_1();
	this.instance.setTransform(144.6,56.1,1,1,0,0,0,144.6,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:292.7,y:109.9},9,cjs.Ease.get(-1)).to({x:457.2,y:169.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ4_1 = function() {
	this.initialize();

	// Слой 1 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	mask.setTransform(88,17.9);

	// Слой 5
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-69.1,-37.2,1,1,0,0,0,144.6,56.1);

	this.instance_1.mask = mask;

	// Слой 4 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHA4IgJgDIgHgEIgGgGIgDgIIgCgKQgBgHACgSIAGgaIAEgJIAGgIIAGgGIAIgEQAGgCAPgBQAPAAAQAEIgDAMIgcgBQgIAAgFACQgGACgEAEQgEAFgDAJQgCAIgCALIgCAUQABAJACAEQACAFAFACQAEACAIAAQAOABASgCIABAMIgPADIgSABgAopA2IgIgEIgFgGIgEgIIgCgKQgBgHACgTQABgJAFgQIAEgKIAFgIIAHgGIAIgEQAGgCAPgBIALABIAJACIAHAEIAFAGQADAEABAEIACAKQAAAQgBAJQgEAUgCAHIgEAKIgGAIIgGAFIgIAEIgKACIgLABQgOgBgFgCgAoWgnQgGACgEAFQgEAFgCAIQgDAIgCALIgBAUQAAAJACAEQADAFAFACQAEADAIAAQAIAAAGgDQAFgCAEgFQAEgFADgIQACgIACgMQACgMAAgIQAAgIgDgFQgCgEgFgDQgFgBgIAAQgIAAgFACgAAnA3IAQhtIAQAAIgGAsIAVAAQALAAAGACQAHACAEAEQAEACABAHQABAGgBAKQgBAKgDAGQgDAGgEAEQgFAEgHACQgGABgJAAIgqgBgAA5AqIAVAAIALgBQAFgBACgCQADgCABgEIADgKIAAgKQAAgEgCgCQgBgDgEgBIgLgBIgWAAgAi7A3IAQhtIAQAAIgGAsIAVAAQALAAAGACQAHACAEAEQAEACABAHQABAGgBAKQgBAKgDAGQgDAGgEAEQgFAEgHACQgGABgJAAIgqgBgAipAqIAVAAIALgBQAFgBACgCQADgCABgEIADgKIAAgKQAAgEgCgCQgBgDgEgBIgLgBIgWAAgAF2A1QgFgBgDgDQgCgDgCgFQgBgEABgFIAKhCQAAgFACgEIAFgGIAHgEIAKgBIAvABIgCANIgrAAQgFAAgDACQgCACgBAGIgDAXIAvAAIgCAKIgvAAIgDAcQgBAGACACQACACAFAAIArAAIgBANIgsABQgHAAgEgCgAIlA3QgBAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAEAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIQgBABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAgAHaA3IAOheIgjAAIACgPIBWAAIgCAPIgjAAIgOBegAE+A3IAHg0QgOAHgHACQgJADgIAAQgGAAgFgBQgFgCgDgDQgCgDgBgFQgBgDABgHIAGgtIAQAAIgGArQgBAHADAEQACABAIAAQAIAAAIgBQAHgCALgGIAGguIAQAAIgPBtgAgaA3IAOheIgjAAIACgPIBUAAIgCAPIgjAAIgMBegAhdA3IAQhtIAQAAIgQBtgAkZA3IAQhtIAmgBQAKAAAGACQAHACAEAEQAEAEABAHQABAHgBAJQgCALgDAHQgCAFgFADQgEAEgHABQgHACgKAAIgXgCIgHAsgAkBAAIAVAAIALAAQAEgBADgCQADgDABgEIADgLIAAgKQAAgEgCgCQgCgCgEgBIgJgBIgXAAgAk6A3IgFgXIgFgQQgDgGgEgDQgFgDgHAAIgLAAIgBALIgGAoIgQAAIAQhtIAQAAIgFAiIgDANIALAAQAHAAAFgEQAFgDAFgGQAGgIAMgaIARAAQgNAcgHAJQgFAHgFAEQgGAEgHABIAAABQAHAAAFADQAEAEAEAHQACAGADALIAFAYgAm8A3IAOheIgjAAIACgPIBWAAIgCAPIgjAAIgOBegAIlAVIAJhLIAQAAIgNBLg");
	this.shape.setTransform(87.2,19);

	// Слой 1 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B200").s().p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	this.shape_1.setTransform(88,17.9);

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	this.shape_2.setTransform(88,18.6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.4,0,151.1,36.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(17));

	// Слой 4
	this.instance = new lib.Символ1();
	this.instance.setTransform(-63.6,32.7,0.864,0.864,0,0,0,88,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-279.4,regY:5.3,x:-328,y:21.9},0).wait(1).to({x:-289.8},0).wait(1).to({x:-263.1},0).wait(1).to({x:-243.7},0).wait(1).to({x:-228.6},0).wait(1).to({x:-216},0).wait(1).to({x:-204.7},0).wait(1).to({x:-194.8},0).wait(1).to({x:-186.4},0).wait(1).to({x:-179.4},0).wait(1).to({x:-173.7},0).wait(1).to({x:-169.2},0).wait(1).to({x:-165.6},0).wait(1).to({x:-162.8},0).wait(1).to({x:-160.6},0).wait(1).to({x:-158.9},0).wait(1).to({x:-157.6},0).wait(1).to({x:-156.6},0).wait(1).to({regX:88,regY:17.8,x:161.4,y:32.7},0).wait(1).to({regX:-279.4,regY:5.3,x:-157.3,y:21.9},0).wait(1).to({x:-159.4},0).wait(1).to({x:-162.1},0).wait(1).to({x:-165.6},0).wait(1).to({x:-169.9},0).wait(1).to({x:-174.9},0).wait(1).to({x:-180.9},0).wait(1).to({x:-187.9},0).wait(1).to({x:-196.2},0).wait(1).to({x:-206.1},0).wait(1).to({x:-218.1},0).wait(1).to({x:-232.4},0).wait(1).to({x:-249.1},0).wait(1).to({x:-272.2},0).wait(1).to({x:-311.8},0).wait(1).to({regX:88,regY:17.8,x:-63.6,y:32.7},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4_1();
	this.instance_1.setTransform(288.8,20.6,1.122,1.122,0,0,0,88,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:18.2,x:244,y:20.9},0).wait(1).to({x:211.8},0).wait(1).to({x:189.2},0).wait(1).to({x:172.9},0).wait(1).to({x:160.1},0).wait(1).to({x:149.4},0).wait(1).to({x:139.9},0).wait(1).to({x:131.6},0).wait(1).to({x:124.4},0).wait(1).to({x:118.5},0).wait(1).to({x:113.7},0).wait(1).to({x:109.9},0).wait(1).to({x:106.9},0).wait(1).to({x:104.5},0).wait(1).to({x:102.6},0).wait(1).to({x:101.2},0).wait(1).to({x:100.1},0).wait(1).to({x:99.3},0).wait(1).to({regY:17.9,x:98.8,y:20.6},0).wait(1).to({regY:18.2,x:99.9,y:20.9},0).wait(1).to({x:101.7},0).wait(1).to({x:104},0).wait(1).to({x:106.9},0).wait(1).to({x:110.5},0).wait(1).to({x:114.8},0).wait(1).to({x:119.8},0).wait(1).to({x:125.7},0).wait(1).to({x:132.7},0).wait(1).to({x:141.1},0).wait(1).to({x:151.2},0).wait(1).to({x:163.3},0).wait(1).to({x:177.4},0).wait(1).to({x:196.9},0).wait(1).to({x:230.4},0).wait(1).to({regY:17.9,x:288.8,y:20.6},0).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(-527.3,21.6,1,1,0,0,0,244.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-410.4,y:21.7},0).wait(1).to({x:-326.2},0).wait(1).to({x:-267.2},0).wait(1).to({x:-224.4},0).wait(1).to({x:-191,y:21.8},0).wait(1).to({x:-163.1},0).wait(1).to({x:-138.3},0).wait(1).to({x:-116.4},0).wait(1).to({x:-97.8},0).wait(1).to({x:-82.4},0).wait(1).to({x:-69.8},0).wait(1).to({x:-59.8},0).wait(1).to({x:-51.9},0).wait(1).to({x:-45.7},0).wait(1).to({x:-40.8},0).wait(1).to({x:-37.1},0).wait(1).to({x:-34.3},0).wait(1).to({x:-32.2},0).wait(1).to({x:-30.7},0).wait(1).to({x:-33.7},0).wait(1).to({x:-38.3},0).wait(1).to({x:-44.3},0).wait(1).to({x:-52},0).wait(1).to({x:-61.3},0).wait(1).to({x:-72.5},0).wait(1).to({x:-85.7},0).wait(1).to({x:-101.2},0).wait(1).to({x:-119.5},0).wait(1).to({x:-141.3},0).wait(1).to({x:-167.8},0).wait(1).to({x:-199.5,y:21.7},0).wait(1).to({x:-236.3},0).wait(1).to({x:-287.3},0).wait(1).to({x:-374.8},0).wait(1).to({x:-527.3,y:21.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-771.8,-134.5,1145.4,191.6);


// stage content:



(lib._467x59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		var _this = this;
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		 function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(20);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.9,2).p("EgkcgEkMBI5AAAIAAJJMhI5AAAg");
	this.shape.setTransform(233.4,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.main = new lib.Символ14();
	this.main.setTransform(236.1,-29.4,1,1,0,0,0,-33.1,-38.2);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(381.2,31.9,0.732,0.732,0,0,0,155.2,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.1,-96.2,1145.4,206);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
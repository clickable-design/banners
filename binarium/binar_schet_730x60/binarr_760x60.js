(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 730,
	height: 60,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/gb.jpg", id:"gb"},
		{src:"images/light.png", id:"light"}
	]
};



// symbols:



(lib.gb = function() {
	this.initialize(img.gb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,50);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEIBjQgIgDgEgJQgGgGAAgLQgBgMADgQQABgPAEgMQAEgLAGgEQAHgHAIgDQAKgEAMAAQAOAAAHAEQAJADAFAHQAFAGACALIgCAcIgHAaQgDALgHAHQgFAHgLADQgIADgNAAQgNAAgJgDgAEeACQgHACgCAGQgFAFgCAIIgHAoQABAJADAFQADAGADACQAFACAIAAQAIAAAGgCQAGgDAFgFIAGgOIAGgpQgBgIgCgFQgCgFgFgCQgEgCgJAAQgIAAgGACgAgOBmIgNgFIgNgIQgDgEgDgHQgFgGgCgJIgBgRQgBgNACghQADgRAIgdQAFgNALgSIAKgMIAMgHIANgEIASgBQALAAAHABIAOAEIAMAIIAIAMIAFAOIACATQgBAbgCAQQgGAjgFANQgIAWgHAJIgLALIgMAHIgQAFgAAFhLQgIAFgGAKQgGAJgEAQQgFAQgDATQgDAXgBAPQABAPAEAKQACAJAIAEQAHAEAKAAQAOAAAJgEQAJgEAGgKQAHgKAFgQQAEgPADgVQADgWABgOQgBgQgDgJQgDgJgJgGQgGgDgNAAQgMAAgKAEgAi7BmIgOgFQgGgDgFgFQgFgEgEgHQgDgGgBgJIgDgRQgBgNAEghQADgRAHgdQAFgNALgSQAFgHAGgFIAMgHIAPgEIARgBQALAAAIABIANAEIAMAIIAIAMIAEAOIADATQgBAbgCAQQgGAjgEANQgJAWgHAJQgFAGgFAFIgNAHIgQAFgAinhLQgIAFgGAKQgIAJgEAQIgIAjQgCAXgBAPQABAPADAKQADAJAJAEQAGAEANAAQAMAAAKgEQAJgEAGgKQAIgKADgQIAIgkQADgWAAgOQAAgQgDgJQgDgJgIgGQgIgDgMAAQgNAAgKAEgACOBjICdjFIASAAIicDFgAk7BjIAXicQABgJADgJIg0AQIgBgSIA2gVIAaAAIgcDFgACKAMQgJgEgEgIQgFgFgBgLQgBgLADgQQABgRAEgJQADgNAHgGQAGgHAKgDQAIgDANAAQANAAAJADQAJADAEAHQAFAIABALQABALgCARIgHAaQgDAMgHAEQgFAHgLAEQgIADgNAAQgMAAgJgDgACfhUQgGACgEAGQgEAFgCAJIgHApQABAIACAFQADAFAEACQAEABAJAAQAIAAAGgBQAHgCADgGQAEgFACgJIAHgoQgBgJgCgEQgBgGgGgCQgFgCgIAAQgIAAgGACg");
	this.shape.setTransform(34.2,10.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.4,20.6);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADsA/IgKgDIgIgFIgGgHIgDgJQgCgEgBgHQAAgIACgUQACgLAFgSIAEgLIAGgIIAIgHIAIgEQAHgDAQgBIAUABIAOADIgCAMIgggCQgJAAgGACQgHADgFAGQgEAFgEAKIgFAXQgCAOABAKQAAAJADAGQACAFAGADQAFACAKABQAPAAAUgCIABAMIgRADIgUABgAiuA/IgKgDIgIgFIgGgHIgDgJIgCgLQgBgIACgUQACgLAFgSIAFgLIAFgIIAIgHIAJgEQAGgDARgBIATABIAOADIgCAMIgfgCQgKAAgGACQgHADgEAGQgFAFgDAKQgDAKgCANQgDAOABAKQAAAJADAGQADAFAFADQAFACAKABQAQAAATgCIABAMIgQADIgVABgAoKA9IgIgFIgGgHQgDgDgBgFQgCgFAAgGQgBgJABgVQACgLAFgSIAFgLIAGgIIAIgHIAJgFQAGgCARgBIAMABIAJACIAJAFIAFAHQADAEABAFIADALQAAASgCAKIgGAeIgFALIgGAJIgIAGIgIAFIgLACIgMABQgQgBgGgCgAn1guQgHADgEAFQgFAGgDAKIgFAWQgCAOAAAKQABAJACAGQADAFAGADQAGADAJAAQAKAAAGgDQAHgDAEgFQAFgGADgKQADgJACgOQACgOAAgJQAAgKgDgFQgDgGgGgDQgGgCgJAAQgKAAgGADgAqNA9IASh6IAmAAIAmAAIgDAOIg7AAIgGAoIAaAAQAMAAAHACQAIACAEADQAEAEACAGIgBARQgBALgDAHQgEAHgFAEQgEAEgIABQgHACgLAAQgVAAgYgCgAp7AxIAaAAIAMgBQAGAAADgDQADgDACgEIACgMIABgLQgBgFgBgCQgDgDgFgBIgMgBIgaAAgAkzA8IADgMIANABIAJgCQAFgCAIgPIADgEIgHAAQgEAAgDgDQgDgCgBgEIgRhOIAPAAIAPBGQAAABABABQAAAAABABQAAAAABAAQAAAAABAAIAHAAIAlhJIARAAIgvBcQgIAQgFAGIgIAHQgFACgFABQgRgBgGgCgAJzA9QgGAAAAgFIACgLQABgFAFAAIAEAAQAGAAAAAGIgCAKQgBAFgFAAgAIhA9IAPhsIgoAAIACgOIBgAAIgCAOIgoAAIgPBsgAGvA8QgEgCgEgDQgDgDgBgFQgBgEABgGIALhMQABgFACgEIAFgHIAIgEQAEgCAGAAIA2ABIgDANIgxAAQgGAAgDADQgDACgBAHIgEAbIA2AAIgCAKIg1AAIgFAiQgBAHACACQADADAGAAIAwAAIAAANIgyAAQgHAAgFgBgAFyA9IAJg7QgQAJgHACQgMAEgJAAQgHAAgFgCQgFgCgDgEQgDgDgBgFQgCgEACgHIAGgzIAQAAIgGAxQgCAJAEADQADACAJAAQAKAAAKgCQAIgCAMgHIAHg0IAQAAIgSB6gACDA9IgGgmIgzAAIgSAmIgRAAIA5h1QABgFAFAAIARAAQAFAAAAAFIAXB1gAB6AJIgKg5IgFAAIgbA5IAqAAgAAHA9IAIg7Ig3AAIgIA7IgRAAIASh6IAQAAIgIA0IA4AAIAHg0IAPAAIgRB6gAlhA9IAIg7Ig5AAIgIA7IgQAAIARh6IAQAAIgHA0IA5AAIAIg0IAPAAIgRB6gAJ0AYIALhVIAPAAIgOBVg");
	this.shape.setTransform(65.4,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130.9,12.9);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjOBMIACgbIhXAAIgFAbIgMAAIAFgoIAMAAQAGgKAFgLQAFgKADgKQAFgPAHgfIADgJQACgEAEgDQADgDAEgCQAFgBAFAAIAuAAIgPBtIAPAAIgGAogAjwg5QgEADgBAHQgGAegFAOIgIATIgKAUIA3AAIAOhgIgZAAQgHAAgDADgAEaAxIALhtIgDAAIgpBaQgBAFgGAAIgOAAQgGAAgBgGIgPhZIgEAAIgUBtIgPAAIAVh0IACgEQACgCADAAIASAAQAEAAABAGIAQBaIADAAIAphbQACgFAFAAIASAAQADAAACACQACACgBADIgLBzgAB7AxIAPhmIAAAAIgJANIhDBZIgRAAIASh6IAPAAIgMBUIgEASIABAAIBLhmIARAAIgRB6gAg7AxIASh6IApgCQAKAAAHACQAHADAFAEQAEAFABAHQACAIgCALQgCAMgDAHQgDAIgFAEQgFAEgIAAIgQABQgPAAgNgBIgHAxgAgigLIAaAAIAKgBQAFgBADgDQADgDACgFIAEgNIAAgMQgBgEgCgDQgCgDgFgBIgJgBIgbAAgAhbAxIgHgnIgzAAIgRAnIgRAAIA5h2QABgEAFAAIARAAQAEAAABAEIAXB2gAhkgCIgKg7IgGAAIgbA7IArAAg");
	this.shape.setTransform(31,7.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,15.3);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg5BAEsIAApXMByCAAAIAAJXgEg42AEiMBxtAAAIAApDMhxtAAAg");
	this.shape.setTransform(365,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,730,60);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(1,221,1,0)","#01DD01"],[0.349,1],-32.1,0,32.2,0).s().p("AlACyIBZljIGIAAICgCxIj6CxIAAABg");
	this.shape.setTransform(32.2,17.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,35.7);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AoSA8QgEgBgFgDQgDgCgCgFIgFgIIgCgMQgBgIACgVQACgLAFgSIAEgLIAHgJQACgDAFgDQAEgDAFgBQAHgDAQgBIANABQAFABAFACQAEABAEADQADADACADQAEAEABAFIACALQABATgCAKQgEAWgDAIIgEALIgHAJIgHAGIgJAEQgFADgGAAIgMABQgQgBgGgDgAn8gsQgHACgFAFQgDAGgDAJQgEAKgCAMQgCAOABAJQAAAJACAGQADAFAGADQAFACAJAAQAJAAAGgCQAHgDAEgFQAEgHADgJQADgJACgNQACgNAAgKQAAgJgDgFQgCgGgGgCQgFgCgKAAQgIAAgGADgAtQA8QgFgBgEgDQgDgCgDgFIgEgIIgDgMQgBgIADgVQABgLAFgSIAFgLIAGgJQADgDAEgDQAEgDAFgBQAHgDARgBIAMABQAGABAEACQAFABADADQADADADADQADAEABAFIADALQAAATgBAKQgFAWgCAIIgFALIgGAJIgHAGIgJAEQgGADgFAAIgNABQgQgBgFgDgAs7gsQgGACgFAFQgEAGgDAJQgDAKgCAMQgCAOAAAJQAAAJADAGQADAFAGADQAFACAIAAQAKAAAGgCQAGgDAEgFQAFgHADgJQADgJABgNQADgNAAgKQAAgJgEgFQgCgGgGgCQgFgCgJAAQgJAAgGADgAABA/QgDgBgFgCIgIgFIgFgHIgFgJIgCgLQAAgIACgUQACgLAFgSIAFgLQACgFADgEQADgDAEgDQADgDAFgBQAGgDARgBQAQAAASAEIgDANQgOgBgRAAQgJAAgGACQgGACgFAFQgEAGgBAJQgEAKgCANQgBAOAAAIQAAAKACAGQADAFADACQAGACAIABQAQAAAUgCIABANQgJADgIABIgUABgAlDA+IARh6IASAAIgHAwIAZAAQALAAAIACQAHADAFAEQAEADABAIQACAGgCAMQgBALgDAHQgDAHgFAFQgGADgHACQgHACgLAAIgugBgAkvAvIAXABQAJgBAEgBQAFgBADgDQADgCACgEQABgFABgHIABgLQAAgEgCgDQgCgDgFgBQgEgBgHAAIgaAAgAmyA+IARh6QANgCAbAAQAMAAAHACQAJABAEAEQAFAEABAGQACAGgCAKIgDAMQgBAFgDADQgDADgEACQgFACgFABIAAABQAHAAAEABQAEADADAEQACAEAAAGQABAGgBAHQgCAKgDAGQgDAGgFADQgFAEgIACQgGABgMAAIgvgBgAmfAwIAaAAIAMgBQAFgBADgCQAEgDACgEIACgKIABgMQgBgEgCgCQgDgCgFgCIgMgBIgZAAgAmXgIIAZAAIALAAQAEgCAEgCIAEgGQACgEABgHIABgJQgCgDgCgCQgCgCgFgBIgLgBIgZAAgAH/A8QgFgCgEgDQgCgEgBgEQgCgFABgGIALhLIACgKQACgDAEgDQADgDAGgBQAEgCAGAAIA2ACIgDANIgxAAQgGAAgDADQgCACgBAHIgEAaIA1AAIgBALIg1AAIgEAgQgBAHACACQACACAGABIAwAAIAAANIgzACQgGAAgGgCgAiaA8QgFgCgEgDQgCgEgBgEQgCgFABgGIALhLIADgKQACgDADgDQADgDAGgBQAEgCAGAAIA2ACIgDANIgxAAQgGAAgDADQgCACgBAHIgEAaIA1AAIgBALIg1AAIgEAgQgCAHADACQACACAGABIAwAAIAAANIgzACQgGAAgGgCgAOxA+QgDAAgBgCQgCgCABgDIABgKQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQACgBADAAIAEAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQABACAAADIgBAKQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgBACgEAAgAN6A+IAQhlIgBAAIgIAPIhABWIgUAAIASh6IARAAIgMBRIgDASIAAAAIAJgOIBAhVIATAAIgSB6gAL+A+IAPhlIAAAAIgJAPIg/BWIgUAAIARh6IASAAIgMBRIgEASIABAAIAIgOIBAhVIATAAIgRB6gAJTA+IAPhjQABgGACgFQACgEAEgDQADgDAFgBQAEgCAFAAIAbAAIAZACIgDANIgsAAQgHAAgDADQgCACgCAIIgOBfgAGkA+IAPhqIgnAAIACgQIBgAAIgCAQIgnAAIgPBqgAFmA+IgGgmIgxAAIgRAmIgTAAIA3h2QADgFAFABIASAAQAGAAAAAEIAWB2gAFdAIIgJg3IgFAAIgZA3IAnAAgACuA+IASh6QANgCAdAAQAMAAAGACQAIACAFAFQAEAFABAHQACAHgCALQgCANgDAHQgDAGgFAEQgFAEgIACQgHABgMAAQgKAAgQgCIgHAygADPgvIgGAvIAXAAIANAAQAEgBADgDQAEgDACgFIACgMIAAgLQAAgFgCgCQgDgDgEgBIgKgBgABiA+IAQhqIgnAAIACgQIBgAAIgCAQIgnAAIgQBqgAjZA+IARh6IASAAIgRB6gAqIA+IAPhjQAAgGADgFQACgEAEgDQADgDAFgBQADgCAGAAIAbAAIAYACIgCANIgsAAQgHAAgDADQgDACgBAIIgOBfgArxA+IARh6QAOgCAdAAQALAAAHACQAJACADAFQAFAFABAHQACAHgCALQgCANgDAHQgDAGgFAEQgFAEgIACQgHABgMAAQgLAAgPgCIgHAygArQgvIgGAvIAXAAIAMAAQAGgBACgDQADgDADgFIACgMIAAgLQAAgFgCgCQgDgDgEgBIgKgBgAu1A+IAPhqIgnAAIACgQIBhAAIgCAQIgoAAIgOBqgAOyAXIALhUIAQAAIgNBUg");
	this.shape.setTransform(97.4,6.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194.8,12.9);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AEnA+IASh6IASAAIgHAxIAYAAQAMAAAHACQAIACAFAEQAEADABAIQACAHgCALQgBALgDAHQgEAHgFAFQgFAEgIABQgGACgLAAIgvgBgAE8AvIAXABQAIAAAFgCQAEgBADgCQAEgDABgEQACgEABgIIAAgKQAAgFgCgCQgCgDgEgBQgEgCgIAAIgZAAgAkQA+IARh6IAngBIAnABIgEAPIg5AAIgGAlIAZAAQALAAAIACQAIACADAEQAFADABAHQACAHgCAKQgBALgEAHQgDAHgEAEQgGAEgHACQgHABgLAAIgugBgAj8AwIAYAAIAMgBQAFgBADgDQADgCACgEIACgLIABgLQAAgEgCgCQgCgDgFgBIgLgBIgaAAgAnkA+IARh6QANgCAcAAQALAAAIACQAIABAEAEQAFAEACAGQACAHgCAJIgDAMQgBAFgEADQgDAEgEACQgEACgGAAIAAABQAHAAAEABQAEADADAEQACAEABAGQAAAGgBAIQgCAJgDAGQgCAGgGAEQgEADgIACQgHABgLAAIgwgBgAnQAwIAZAAIANgBQAEgBAEgCQADgDACgEIADgKIAAgLQgBgFgCgCQgCgCgFgCIgNgBIgZAAgAnIgIIAYAAIAMAAQAEgBADgDIAFgGQACgEAAgGIABgKQgBgDgCgCQgDgCgFgBIgKgBIgZAAgAllA8QgFgCgDgDQgEgDgBgFQgBgFABgGIAKhLIAEgJQACgEADgDQAEgDAEgBQAFgCAGAAIA1ACIgCAOIgxAAQgFAAgDACQgDADgBAGIgDAaIA0AAIgBALIg1AAIgFAgQgBAHACACQADADAGAAIAwAAIAAAOIgzABQgGAAgGgCgAHJA+QgDAAgCgCQgCgCABgDIACgKQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAQACgCAEAAIAEAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABACAAADIgBAKQgBAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBACgDAAgAGRA+IARh6IATAAIgSB6gAC+A+IARh6QANgCAdAAQAMAAAHACQAIACAEAFQAEAFABAHQACAIgCALQgBAMgDAIQgEAFgEAEQgGAEgIACQgGACgMAAQgLAAgQgCIgGAxgADfguIgGAuIAXAAIAMAAQAFgBADgDQADgDACgEIACgNIABgLQAAgFgCgCQgDgDgEgBIgKgBgACcA+IgHgmIgxAAIgQAmIgUAAIA4h2QACgEAFAAIATAAQAFAAAAAFIAXB1gACTAIIgJg3IgGAAIgZA3IAoAAgAAeA+IAIg7Ig0AAIgIA7IgSAAIARh6IASAAIgHAyIA0AAIAIgyIASAAIgSB6gAhXA+IAPhkIgBAAIgJAOIg/BWIgUAAIASh6IARAAIgLBRIgFATIABAAIAJgPIA/hVIAUAAIgSB6gAHJAXIALhUIARAAIgOBUg");
	this.shape.setTransform(48.6,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97.1,12.8);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Am1A8QgFgBgEgDQgDgCgDgFIgEgIIgCgMQgBgIACgVQABgLAFgSIAFgLIAGgJQADgDAEgDQAFgDAFgBQAGgDARgBIAMABQAGABAEACQAFABADADQAEADACADQADAEACAFIACALQAAATgBAKQgEAWgDAIIgFALIgGAJIgHAGIgJAEQgFADgGAAIgMABQgQgBgGgDgAmggsQgGACgFAFQgEAGgDAJQgDAKgCAMQgCAOABAJQAAAJACAGQADAFAGADQAFACAJAAQAJAAAGgCQAGgDAFgFQAEgHADgJQADgJACgNQACgNAAgKQAAgJgDgFQgDgGgFgCQgGgCgJAAQgJAAgGADgAlWA+IASh6IAngBIAmABIgEAOIg5AAIgGAmIAZAAQALAAAIACQAIACAEAEQAEACACAIQABAGgCALQgBALgDAHQgDAGgFAFQgFADgIADQgHABgLAAIgugBgAlCAwIAYAAIAMgBQAFgCADgCQADgCACgEIACgLIABgLQAAgEgCgCQgCgDgFgBIgLgBIgaAAgAjfA+IgLgCIADgNIAOABIAIgCQAEgCAIgOIADgEIgGAAQgFAAgDgDQgDgCgBgEIgRhNIASAAIAOBEQAAABAAAAQABABAAAAQAAAAABAAQABABAAAAIAIAAIAjhHIATAAIguBbQgJARgFAFQgEAEgEACQgFAEgGAAIgDAAIgJgBgAFSA8QgFgCgDgDQgDgEgBgEQgCgFABgGIALhLIADgKQACgDADgDQAEgDAFgBQAEgCAGAAIA2ACIgDANIgxAAQgFAAgDADQgDACgBAHIgDAaIA0AAIgBALIg1AAIgEAgQgBAHACACQACACAGABIAwAAIAAANIgyACQgHAAgGgCgAgFA8QgFgCgDgDQgDgEgBgEQgCgFABgGIALhLIADgKQACgDACgDQADgDAFgBQAEgCAGAAIA2ACIgDANIgxAAQgFAAgDADQgDACgBAHIgDAaIA0AAIgBALIg1AAIgDAgQAAAHAAACQACACAGABIAwAAIAAANIgyACQgGAAgFgCgAGvA+QgDAAgCgCQgBgCAAgDIACgKQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABgBAEAAIAEAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQABACAAADIgBAKQAAAAAAABQgBABAAAAQAAABAAAAQgBABAAAAQgCACgDAAgAEUA+IAPhlIgBAAIgIAPIhABWIgUAAIASh6IARAAIgLBRIgEASIAAAAIAJgOIBAhVIATAAIgRB6gACXA+IAIg7Ig2AAIgIA7IgTAAIASh6IASAAIgHAxIA2AAIAHgxIASAAIgRB6gAhEA+IAIg7QgPAJgIABQgKAEgJAAQgHAAgGgCQgFgBgDgEQgDgEgBgFQgBgEAAgHIAIgyIASAAIgHAvQgBAIADAEQADACAJAAQAJAAAJgCQAIgCALgHIAIgyIASAAIgSB6gAGwAXIAKhUIARAAIgOBUg");
	this.shape.setTransform(46,6.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,12.9);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AHfA8QgEgBgEgDQgDgCgDgFIgFgIIgBgMQgBgIABgVQACgLAFgSIAEgLIAHgJQADgDAEgDQAFgDAFgBQAGgDARgBIAMABQAGABAEACQAFABADADQADADADADQADAEACAFIABALQABATgCAKQgEAWgDAIIgEALIgGAJIgIAGIgJAEQgFADgGAAIgLABQgRgBgGgDgAH1gsQgGACgFAFQgEAGgDAJQgDAKgCAMQgCAOABAJQgBAJADAGQADAFAFADQAGACAJAAQAIAAAHgCQAGgDAFgFQAEgHADgJQADgJACgNQABgNAAgKQAAgJgCgFQgDgGgFgCQgGgCgJAAQgJAAgGADgAjWA8QgFgBgEgDQgEgCgCgFIgEgIIgCgMQgCgIADgVQABgLAFgSIAFgLIAGgJQADgDAEgDQAEgDAFgBQAHgDARgBIAMABQAFABAFACQAFABADADQADADADADQADAEACAFIACALQAAATgBAKQgFAWgCAIIgFALIgGAJIgHAGIgJAEQgFADgGAAIgNABQgQgBgFgDgAjBgsQgHACgEAFQgEAGgDAJQgDAKgCAMQgCAOABAJQAAAJACAGQADAFAGADQAFACAIAAQAJAAAHgCQAGgDAEgFQAFgHADgJQACgJADgNQACgNAAgKQAAgJgEgFQgCgGgFgCQgGgCgJAAQgJAAgGADgAk0A/QgFgBgFgCIgIgFIgGgHIgEgJIgCgLQgBgIACgUQACgLAFgSIAFgLQADgFADgEQADgDAEgDQAFgDAEgBQAHgDARgBQAQAAASAEIgDANQgOgBgSAAQgJAAgGACQgGACgEAFQgFAGgDAJQgDAKgCANQgCAOAAAIQABAKACAGQACAFAGACQAFACAJABQAPAAAVgCIABANQgJADgJABIgUABgADkA+IASh6IASAAIgHAwIAYAAQAMAAAHACQAIADAFAEQAEADABAIQACAGgCAMQgBALgDAHQgEAHgFAFQgFADgIACQgGACgLAAIgvgBgAD5AvIAXABQAIgBAFgBQAEgBADgDQAEgCABgEQACgFABgHIAAgLQAAgEgCgDQgCgDgEgBQgEgBgIAAIgZAAgAJPA8QgGgCgDgDQgDgEgBgEQgBgFAAgGIALhLIADgKQACgDADgDQAEgDAFgBQAFgCAFAAIA2ACIgDANIgwAAQgGAAgDADQgDACgBAHIgDAaIA1AAIgCALIg0AAIgFAgQgBAHACACQADACAFABIAxAAIgBANIgyACQgHAAgFgCgABjAvIAKgFQAGgDAFgHIAGgLIAEgOIAMgtIADgKIAHgHQADgDAFgBIALgBIAtAAIgSB6IgRAAIAPhsIgWAAQgHAAgEADQgDADgBAHQgIAhgEALQgGATgFAIIgHAKIgJAIIgKAEQgEACgGAAgAoUA8QgFgCgDgDQgEgEgBgEQgBgFABgGIAKhLIAEgKQACgDADgDQAEgDAEgBQAFgCAGAAIA1ACIgCANIgxAAQgFAAgDADQgDACgBAHIgDAaIA0AAIgBALIg1AAIgFAgQgBAHACACQADACAGABIAwAAIAAANIgzACQgGAAgGgCgAGXA+IAIg7Ig2AAIgIA7IgSAAIARh6IASAAIgHAxIA3AAIAHgxIASAAIgSB6gABOA+IgHgmIgyAAIgQAmIgSAAIA3h2QACgFAEABIATAAQAFAAABAEIAXB2gABFAIIgJg3IgGAAIgaA3IApAAgAguA+IAHg7Ig2AAIgHA7IgTAAIARh6IASAAIgGAxIA2AAIAHgxIASAAIgRB6gAm/A+IASh6QANgCAdAAQALAAAIACQAHACAEAFQAFAFABAHQABAHgBALQgCANgDAHQgDAGgFAEQgFAEgIACQgHABgLAAQgMAAgPgCIgHAygAmdgvIgHAvIAYAAIAMAAQAEgBAEgDQACgDACgFIADgMIABgLQgBgFgCgCQgCgDgEgBIgKgBgApTA+IAPhsIg3AAIgOBsIgTAAIARh6IBcAAIgSB6g");
	this.shape.setTransform(67,6.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133.9,12.9);


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


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwfF5IAArxMAg/AAAIAALxg");
	this.shape.setTransform(105.6,37.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("ArRCyQgeAAAAgkIAAkbQAAgkAeAAIWiAAQAgAAAAAkIAAEbQAAAkggAAg");
	this.shape.setTransform(88,17.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.7,0,150.6,35.7);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.light();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A3D4EB","#007CC0"],[0,0.271],-15.6,-18.5,15.6,18.7).s().p("AijCtQgHAAgFgGQgGgFAAgHIAAk0QAAgIAGgGQAFgFAHAAIFHAAQAHAAAGAFQAFAGAAAIIAAE0QAAAHgFAFQgGAGgHAAgAhshqQgFAFAAAHIAAC9QAAAHAFAGQAFAEAGAAIDDAAQAHAAAFgEQAFgGAAgHIAAi9QAAgHgFgFQgFgFgHAAIjDAAQgGAAgFAFg");
	this.shape.setTransform(18.2,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007CC0").s().p("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");
	this.shape_1.setTransform(93.1,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFABSIAAgMQAKAEAMAAQAJAAAGgCQAGgDAGgGQAFgHAHgPIhGh9IAOAAIA2BhQAFAHADAJIABAAIA2hxIAOAAIg5B1IgLAVQgEAKgHAHQgGAHgIAEQgIADgMAAQgOAAgJgDgAJ5BTIAAh+IABgcIgBAAIhCCaIgIAAIhCiaIgBAAIABAdIAAB9IgMAAIAAinIATAAIA/CTIABAAIA+iTIATAAIAACngAEQBTIAAhrIACgpIgBAAIhpCUIgNAAIAAinIAMAAIAABtIgBAnIABAAIBpiUIAMAAIAACngAAKBTIAAinIArAAQBAAAAAAxQAAAYgSALQgRAOggAAIgcAAIAABFgAAWADIAZAAQAeAAANgHQANgKAAgVQAAgTgMgKQgNgJgaAAIgeAAgAgbBTIgZg7IhIAAIgZA7IgNAAIBHinIAIAAIBGCngAhfguIgZA7IBAAAIgYg7IgHgUIgIAUgAjIBTIAAhTIhoAAIAABTIgNAAIAAinIANAAIAABLIBoAAIAAhLIAMAAIAACngAl7BTIAAhrIACgpIgBAAIhpCUIgNAAIAAinIAMAAIAABtIgBAnIABAAIBpiUIAMAAIAACngAqEBTIAAinIBkAAIAAALIhXAAIAABAIAjAAQAfAAAPAJQAQALAAAXQAAAYgQAMQgPANgcAAgAp3BJIAkAAQAYAAAMgJQALgKAAgUQAAgTgMgIQgMgHgaAAIghAAg");
	this.shape_2.setTransform(111,10.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175.9,35.7);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 42
	this.instance = new lib.Символ42();
	this.instance.setTransform(90.4,13.9,0.127,0.127,0,0,0,34.4,10.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).wait(1).to({regX:34.2,regY:10.3,scaleX:0.56,scaleY:0.56,x:105,y:9.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:111.3,y:7.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:115.4,y:6.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:118.9,y:5.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:121.3,y:4.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:122.7,y:4.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:123.7,y:3.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:124.3,y:3.7},0).wait(1).to({regX:34.1,regY:10.2,scaleX:1.15,scaleY:1.15,x:125.1,y:3.4},0).to({regX:34.2,scaleX:1,scaleY:1,x:120.2,y:4.8},5,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04,x:121.6,y:4.4},5,cjs.Ease.get(1)).wait(25).to({regY:10.3,scaleX:1.11,scaleY:1.11,rotation:1.6,x:119.6,y:3.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:2.4,x:118.5,y:2.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:2.8,x:118.1,y:2.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:3.1,x:117.7,y:2.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:3.4,x:117.3,y:2.1},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:3.7,x:116.9,y:1.9},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:4,x:116.6,y:1.8},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:4.1,x:116.4,y:1.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:4.2,x:116.3,y:1.5},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:4.3,x:116.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:4.4,y:1.4},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:116,y:1.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:4.2,x:117,y:1.5,alpha:0.956},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:4,x:118.5,y:1.7,alpha:0.892},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:3.6,x:120.5,y:2.1,alpha:0.801},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:3,x:123.3,y:2.6,alpha:0.678},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:2.3,x:126.7,y:3.1,alpha:0.528},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:1.4,x:131.4,y:3.9,alpha:0.322},0).wait(1).to({regY:10.2,scaleX:0.5,scaleY:0.5,rotation:0,x:138.7,y:5.1,alpha:0},0).wait(1));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(429.7,8.8,1,1,0,0,0,65.4,6.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(1).to({x:428.5},0).wait(1).to({x:427.1},0).wait(1).to({x:425.3},0).wait(1).to({x:423.1},0).wait(1).to({x:420.5},0).wait(1).to({x:417.5},0).wait(1).to({x:414},0).wait(1).to({x:409.9},0).wait(1).to({x:405.2},0).wait(1).to({x:399.9},0).wait(1).to({x:393.8},0).wait(1).to({x:387},0).wait(1).to({x:379.3},0).wait(1).to({x:370.7},0).wait(1).to({x:361.2},0).wait(1).to({x:350.7},0).wait(1).to({x:339.3},0).wait(1).to({x:327},0).wait(1).to({x:313.3},0).wait(1).to({x:297.6},0).wait(1).to({x:279.2},0).wait(1).to({x:257.5},0).wait(1).to({x:232.4},0).wait(1).to({x:204.2},0).wait(1).to({x:173.7},0).wait(1).to({x:141.7},0).to({x:239.6},5,cjs.Ease.get(1)).to({x:224.3},4,cjs.Ease.get(-1)).to({x:229.7},4,cjs.Ease.get(1)).wait(31).to({scaleX:1.06,scaleY:1.06,rotation:1.6,x:234.3,y:11.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:2.4,x:236.5,y:12.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:2.8,x:237.5,y:13.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:3.1,x:238.4,y:13.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:3.4,x:239.3,y:14.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:3.7,x:240.2,y:14.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:4,x:240.9,y:15.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:4.1,x:241.3,y:15.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:4.2,x:241.7,y:15.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:4.3,x:241.9,y:15.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:4.4,x:242.1,y:16},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:16.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:242.3},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:4.2,x:240,y:15.7,alpha:0.956},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:4,x:236.6,y:15.1,alpha:0.892},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:3.6,x:232,y:14.3,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:3,x:225.6,y:13.2,alpha:0.678},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:2.3,x:217.9,y:11.8,alpha:0.528},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:1.4,x:207.2,y:10,alpha:0.322},0).wait(1).to({regX:65.3,scaleX:0.48,scaleY:0.48,rotation:0,x:190.5,y:7.2,alpha:0},0).wait(1));

	// Символ 40
	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(-130.9,10,1,1,0,0,0,30.9,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:31,x:-96.1},0).wait(1).to({x:-70.8},0).wait(1).to({x:-52.1},0).wait(1).to({x:-37.8},0).wait(1).to({x:-26.3},0).wait(1).to({x:-16.1},0).wait(1).to({x:-6.6},0).wait(1).to({x:2.3},0).wait(1).to({x:10.3},0).wait(1).to({x:17.3},0).wait(1).to({x:23.4},0).wait(1).to({x:28.7},0).wait(1).to({x:33.2},0).wait(1).to({x:37.1},0).wait(1).to({x:40.5},0).wait(1).to({x:43.4},0).wait(1).to({x:45.9},0).wait(1).to({x:48},0).wait(1).to({regX:30.9,x:49.9},0).to({x:40},5,cjs.Ease.get(-1)).to({x:44.9},4,cjs.Ease.get(1)).wait(53).to({regX:31,scaleX:1.06,scaleY:1.06,rotation:1.6,x:38,y:6.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:2.4,x:34.7,y:5.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:2.8,x:33.1,y:4.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:3.1,x:31.8,y:3.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:3.4,x:30.3,y:3},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:3.7,x:29,y:2.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:4,x:28,y:1.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:4.1,x:27.2,y:1.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:4.2,x:26.7,y:1.2},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:4.3,x:26.4,y:1.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:4.4,x:26.1,y:1},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:26,y:0.9},0).wait(1).to({regX:30.9,scaleX:1.18,scaleY:1.18,x:25.8,y:0.8},0).wait(1).to({regX:31,scaleX:1.14,scaleY:1.14,rotation:4.2,x:29.3,y:1.1,alpha:0.956},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:4,x:34.1,y:1.6,alpha:0.892},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:3.6,x:41,y:2.2,alpha:0.801},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:3,x:50.4,y:3,alpha:0.678},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:2.3,x:61.8,y:4.1,alpha:0.528},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:1.4,x:77.6,y:5.6,alpha:0.322},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:0,x:102.1,y:7.8,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.8,0.4,94,26);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(365,30,1,1,0,0,0,365,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,730,60);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(173.5,85,1,1,0,0,0,173.5,85);
	this.instance.alpha = 0.301;
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ30();
	this.instance.setTransform(32.1,17.9,1,1,0,0,0,32.1,17.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:135},9,cjs.Ease.get(-1)).to({x:249.4},10,cjs.Ease.get(1)).to({_off:true},1).wait(21));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(32.1,17.9,1,1,0,0,0,32.1,17.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:135},9,cjs.Ease.get(-1)).to({x:249.4},10,cjs.Ease.get(1)).to({_off:true},1).wait(25));

	// Слой 1
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(32.1,17.9,1,1,0,0,0,32.1,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:135},9,cjs.Ease.get(-1)).to({x:249.4},10,cjs.Ease.get(1)).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,35.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.setTransform(91.9,8.8,0.987,0.987,0,0,0,137.6,8.5);

	this.text = new cjs.Text("", "20px 'Exo2.0-Italic'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(277.9,93.5,1.082,1.082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},223).wait(102));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(-78.2,5.4,1,1,0,0,0,97.4,6.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(163).to({_off:false},0).to({x:10.5,alpha:0.52},8,cjs.Ease.get(-1)).to({x:91.8,alpha:1},33,cjs.Ease.get(1)).to({x:81.8},7,cjs.Ease.get(1)).wait(1).to({x:83.2,y:5.5},0).wait(1).to({x:87.7},0).wait(1).to({x:96.1},0).wait(1).to({x:109.3},0).wait(1).to({x:128.3,y:5.6},0).wait(1).to({x:153.2,y:5.7},0).wait(1).to({x:182.6,y:5.8},0).wait(1).to({x:212.7},0).wait(1).to({regY:6.4,x:239.4},0).wait(1).to({regY:6.5,x:269.6,y:6},0).wait(1).to({regY:6.4,x:321.8,y:6.1},0).wait(1).to({regY:6.5,x:445.8,y:6.5},0).to({_off:true},1).wait(101));

	// Символ 27
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(409.8,6.4,1,1,0,0,0,48.6,6.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(1).to({regX:48.5,x:348.2},0).wait(1).to({x:314.7},0).wait(1).to({x:293.7},0).wait(1).to({x:277.9},0).wait(1).to({x:263.1},0).wait(1).to({x:248.9},0).wait(1).to({x:237.4},0).wait(1).to({x:229.2},0).wait(1).to({x:223.7},0).wait(1).to({x:220},0).wait(1).to({x:217.4},0).wait(1).to({x:215.6},0).wait(1).to({regX:48.6,x:214.3},0).wait(10).to({x:224.3},4,cjs.Ease.get(1)).to({x:214.3},7,cjs.Ease.get(-1)).wait(26).to({regX:48.5,x:214.2,y:-0.3},0).wait(1).to({y:-2.6},0).wait(1).to({regX:48.6,x:214.3,y:-3.6},0).wait(1).to({regX:48.5,x:214.2,y:-3.3},0).wait(1).to({y:-2.5},0).wait(1).to({y:-0.9},0).wait(1).to({y:2},0).wait(1).to({y:7.1},0).wait(1).to({y:17},0).wait(1).to({regX:48.6,x:214.3,y:41.4},0).to({_off:true},1).wait(161));

	// Символ 26
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(169.2,43.6,1,1,0,0,0,46,6.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).wait(1).to({regY:6.4,y:43.5},0).wait(1).to({regY:6.5,y:43.6},0).wait(2).to({x:169.5,y:24.8},0).wait(1).to({x:169.7,y:16.9},0).wait(1).to({x:169.8,y:11.1},0).wait(1).to({y:6},0).wait(1).to({x:169.9,y:2.1},0).wait(1).to({x:170,y:-0.6},0).wait(1).to({y:-2.3},0).wait(1).to({y:-3.5},0).wait(1).to({y:-2.9},0).wait(1).to({y:-1.4},0).wait(1).to({y:1.1},0).wait(1).to({y:6.5},0).wait(22).to({x:136.8},0).wait(1).to({x:120},0).wait(1).to({x:109.9},0).wait(1).to({x:103},0).wait(1).to({x:98.2},0).wait(1).to({x:94.9},0).wait(1).to({x:92.4},0).wait(1).to({x:90.6},0).wait(1).to({x:89.1},0).wait(1).to({x:89.5},0).wait(1).to({x:90.4},0).wait(1).to({x:91.9},0).wait(1).to({x:94.2},0).wait(1).to({x:97.1},0).wait(1).to({x:100.6},0).wait(1).to({x:104.9},0).wait(1).to({x:110.8},0).wait(1).to({x:119.1},0).to({x:104.1},4,cjs.Ease.get(1)).wait(31).to({y:-0.2},0).wait(1).to({y:-2.5},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2.4},0).wait(1).to({y:-0.8},0).wait(1).to({y:2.1},0).wait(1).to({y:7.2},0).wait(1).to({y:17.1},0).wait(1).to({y:41.5},0).to({_off:true},1).wait(163));

	// Символ 25
	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(51.4,43.6,1,1,0,0,0,67,6.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({_off:false},0).wait(1).to({x:51.7,y:26},0).wait(1).to({x:51.9,y:18.3},0).wait(1).to({x:52,y:13.1},0).wait(1).to({x:52.1,y:8.1},0).wait(1).to({regY:6.4,y:4.1},0).wait(1).to({regY:6.5,x:52.2,y:1.1},0).wait(1).to({y:-1},0).wait(1).to({y:-2.5},0).wait(1).to({y:-3.5},0).wait(1).to({y:-2.9},0).wait(1).to({y:-1.4},0).wait(1).to({y:1.1},0).wait(1).to({y:6.5},0).wait(24).to({x:19.1},0).wait(1).to({x:2.3},0).wait(1).to({x:-7.8},0).wait(1).to({x:-14.8},0).wait(1).to({x:-19.6},0).wait(1).to({x:-22.9},0).wait(1).to({x:-25.3},0).wait(1).to({x:-27.2},0).wait(1).to({x:-28.7},0).wait(1).to({x:-28.2},0).wait(1).to({x:-27.3},0).wait(1).to({x:-25.8},0).wait(1).to({x:-23.6},0).wait(1).to({x:-20.6},0).wait(1).to({x:-17.1},0).wait(1).to({x:-12.9},0).wait(1).to({x:-7},0).wait(1).to({x:1.3},0).to({x:-13.7},4,cjs.Ease.get(1)).wait(29).to({y:-0.2},0).wait(1).to({y:-2.5},0).wait(1).to({y:-3.5},0).wait(1).to({y:-3.2},0).wait(1).to({y:-2.4},0).wait(1).to({y:-0.8},0).wait(1).to({y:2.1},0).wait(1).to({y:7.2},0).wait(1).to({y:17.1},0).wait(1).to({y:41.5},0).to({_off:true},1).wait(165));

	// Символ 24
	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(407.9,7.7,1,1,0,0,0,43.4,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:46.4,x:410.9},0).wait(6).to({regX:43.4,x:407.9},0).wait(1).to({regX:46.4,x:362.3},0).wait(1).to({x:322.6},0).wait(1).to({x:294.9},0).wait(1).to({x:275.3},0).wait(1).to({x:259.5},0).wait(1).to({x:245.9},0).wait(1).to({x:234.3},0).wait(1).to({x:224.9},0).wait(1).to({x:217.4},0).wait(1).to({x:211.5},0).wait(1).to({x:207.1},0).wait(1).to({x:203.8},0).wait(1).to({x:201.4},0).wait(1).to({regX:43.4,x:196.9},0).wait(1).to({regX:46.4,x:200.7},0).wait(1).to({x:202.4},0).wait(1).to({x:205.1},0).wait(1).to({regX:43.4,x:206.9},0).to({scaleX:1.05,scaleY:1.05,x:212.9},33).wait(1).to({regX:46.4,scaleX:1.07,scaleY:1.07,x:218.6,y:7.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:220},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:220.8},0).wait(1).to({regX:43.4,scaleX:1.09,scaleY:1.09,x:217.9,y:7.7},0).wait(1).to({regX:46.4,scaleX:1.07,scaleY:1.07,x:218.9,alpha:0.974},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:214.5,y:7.8,alpha:0.921},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:207.4,y:7.7,alpha:0.837},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:195.8,alpha:0.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:175.6,alpha:0.462},0).wait(1).to({regX:43.4,scaleX:0.4,scaleY:0.4,x:135.4,alpha:0},0).to({_off:true},1).wait(256));

	// Символ 23
	this.instance_6 = new lib.Символ23();
	this.instance_6.setTransform(101.8,51.5,1,1,0,0,0,46.9,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({y:38.8},0).wait(1).to({y:28.4},0).wait(1).to({y:21.2},0).wait(1).to({y:16.1},0).wait(1).to({y:12},0).wait(1).to({y:8.4},0).wait(1).to({y:5.5},0).wait(1).to({y:3},0).wait(1).to({y:1.1},0).wait(1).to({y:-0.5},0).wait(1).to({y:-1.6},0).wait(1).to({y:-2.5},0).wait(1).to({y:-3.1},0).wait(1).to({y:-3.5},0).wait(1).to({y:-2.7},0).wait(1).to({y:-1},0).wait(1).to({y:1.7},0).wait(1).to({y:6.5},0).to({scaleX:1.05,scaleY:1.05,x:102.5,y:6.4},34).wait(1).to({scaleX:1.07,scaleY:1.07,x:102.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:103},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:103.1,y:6.3},0).wait(1).to({regY:6.3,scaleX:1.09,scaleY:1.09},0).wait(1).to({regY:6.4,scaleX:1.07,scaleY:1.07,x:102.8,y:6.4,alpha:0.974},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:102.3,y:6.5,alpha:0.921},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:101.5,alpha:0.837},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:100.2,y:6.6,alpha:0.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:97.9,y:6.8,alpha:0.462},0).wait(1).to({regX:46.8,scaleX:0.4,scaleY:0.4,x:93.6,y:7.2,alpha:0},0).to({_off:true},1).wait(258));

	// Символ 22
	this.instance_7 = new lib.Символ22();
	this.instance_7.setTransform(-19.9,6.5,1.881,1.881,0,0,0,60.1,6.4);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({scaleX:1.65,scaleY:1.65,alpha:0.23},0).wait(1).to({scaleX:1.45,scaleY:1.45,alpha:0.418},0).wait(1).to({scaleX:1.32,scaleY:1.32,alpha:0.55},0).wait(1).to({regX:60.2,scaleX:1.22,scaleY:1.22,x:-19.7,alpha:0.643},0).wait(1).to({regX:60.1,scaleX:1.15,scaleY:1.15,x:-19.8,alpha:0.717},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-19.9,alpha:0.782},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-19.8,alpha:0.837},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:6.4,alpha:0.882},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:6.5,alpha:0.917},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:6.4,alpha:0.945},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.966},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.982},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:6.5,alpha:0.993},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-19.9,alpha:1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-19.8,y:6.4},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-19.9},0).wait(1).to({scaleX:1,scaleY:1,y:6.5},0).to({scaleX:1.05,scaleY:1.05,x:-25.3,y:6.4},35).wait(1).to({scaleX:1.07,scaleY:1.07,x:-27.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-28.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-29.5,y:6.3},0).wait(1).to({regY:6.3,scaleX:1.09,scaleY:1.09,x:-29.8},0).wait(1).to({regY:6.4,scaleX:1.07,scaleY:1.07,x:-27.8,y:6.4,alpha:0.974},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-23.9,y:6.5,alpha:0.921},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-17.6,alpha:0.837},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-7.3,y:6.6,alpha:0.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:10.5,y:6.8,alpha:0.462},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:45.1,y:7.2,alpha:0},0).to({_off:true},1).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135,-7.5,602.5,74.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(146.5,58,1,1,0,0,0,173.5,85);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(173.5,85,1,1,0,0,0,173.5,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1191.9},114,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(365,30,1,1,0,0,0,365,30);

	// Слой 2
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(-155.2,36.6,1,1,0,0,0,173.5,85);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-328.7,-48.4,1058.7,170);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(144.6,56.1,1,1,0,0,0,144.6,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:292.7,y:109.9},9,cjs.Ease.get(-1)).to({x:457.2,y:169.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 4 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHA4IgJgDIgHgEIgGgGIgDgIIgCgKQgBgHACgSIAGgaIAEgJIAGgIIAGgGIAIgEQAGgCAPgBQAPAAAQAEIgDAMIgcgBQgIAAgFACQgGACgEAEQgEAFgDAJQgCAIgCALIgCAUQABAJACAEQACAFAFACQAEACAIAAQAOABASgCIABAMIgPADIgSABgAopA2IgIgEIgFgGIgEgIIgCgKQgBgHACgTQABgJAFgQIAEgKIAFgIIAHgGIAIgEQAGgCAPgBIALABIAJACIAHAEIAFAGQADAEABAEIACAKQAAAQgBAJQgEAUgCAHIgEAKIgGAIIgGAFIgIAEIgKACIgLABQgOgBgFgCgAoWgnQgGACgEAFQgEAFgCAIQgDAIgCALIgBAUQAAAJACAEQADAFAFACQAEADAIAAQAIAAAGgDQAFgCAEgFQAEgFADgIQACgIACgMQACgMAAgIQAAgIgDgFQgCgEgFgDQgFgBgIAAQgIAAgFACgAAnA3IAQhtIAQAAIgGAsIAVAAQALAAAGACQAHACAEAEQAEACABAHQABAGgBAKQgBAKgDAGQgDAGgEAEQgFAEgHACQgGABgJAAIgqgBgAA5AqIAVAAIALgBQAFgBACgCQADgCABgEIADgKIAAgKQAAgEgCgCQgBgDgEgBIgLgBIgWAAgAi7A3IAQhtIAQAAIgGAsIAVAAQALAAAGACQAHACAEAEQAEACABAHQABAGgBAKQgBAKgDAGQgDAGgEAEQgFAEgHACQgGABgJAAIgqgBgAipAqIAVAAIALgBQAFgBACgCQADgCABgEIADgKIAAgKQAAgEgCgCQgBgDgEgBIgLgBIgWAAgAF2A1QgFgBgDgDQgCgDgCgFQgBgEABgFIAKhCQAAgFACgEIAFgGIAHgEIAKgBIAvABIgCANIgrAAQgFAAgDACQgCACgBAGIgDAXIAvAAIgCAKIgvAAIgDAcQgBAGACACQACACAFAAIArAAIgBANIgsABQgHAAgEgCgAIlA3QgBAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAEAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIQgBABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAgAHaA3IAOheIgjAAIACgPIBWAAIgCAPIgjAAIgOBegAE+A3IAHg0QgOAHgHACQgJADgIAAQgGAAgFgBQgFgCgDgDQgCgDgBgFQgBgDABgHIAGgtIAQAAIgGArQgBAHADAEQACABAIAAQAIAAAIgBQAHgCALgGIAGguIAQAAIgPBtgAgaA3IAOheIgjAAIACgPIBUAAIgCAPIgjAAIgMBegAhdA3IAQhtIAQAAIgQBtgAkZA3IAQhtIAmgBQAKAAAGACQAHACAEAEQAEAEABAHQABAHgBAJQgCALgDAHQgCAFgFADQgEAEgHABQgHACgKAAIgXgCIgHAsgAkBAAIAVAAIALAAQAEgBADgCQADgDABgEIADgLIAAgKQAAgEgCgCQgCgCgEgBIgJgBIgXAAgAk6A3IgFgXIgFgQQgDgGgEgDQgFgDgHAAIgLAAIgBALIgGAoIgQAAIAQhtIAQAAIgFAiIgDANIALAAQAHAAAFgEQAFgDAFgGQAGgIAMgaIARAAQgNAcgHAJQgFAHgFAEQgGAEgHABIAAABQAHAAAFADQAEAEAEAHQACAGADALIAFAYgAm8A3IAOheIgjAAIACgPIBWAAIgCAPIgjAAIgOBegAIlAVIAJhLIAQAAIgNBLg");
	this.shape.setTransform(87.2,19);

	// Слой 1 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	mask.setTransform(88,17.9);

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(-21.7,17.9,1,1,0,0,0,32.1,17.9);

	this.instance.mask = mask;

	// Слой 5
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-69.1,-37.2,1,1,0,0,0,144.6,56.1);

	this.instance_1.mask = mask;

	// Слой 1 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B200").s().p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	this.shape_1.setTransform(88,17.9);

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	this.shape_2.setTransform(88,18.6);

	this.addChild(this.shape_2,this.shape_1,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.4,0,151.1,36.5);


(lib.Символ14 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ17();
	this.instance.setTransform(98.3,20.3,1,1,0,0,0,105.6,37.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 4
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(98.8,20.6,1.122,1.122,0,0,0,88,17.9);
	this.instance_1.alpha = 0;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.18,scaleY:1.18,x:98.7,alpha:0.448},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:98.6,alpha:0.65},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.771},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.859},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.92},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.959},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.984},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:98.5,alpha:0.996},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:98.6,alpha:0.583},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:98.7,alpha:0.38},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:98.8,alpha:0.262},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.173},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.108},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.062},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.032},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.013},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.003},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0},0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(98.8,20.6,1.122,1.122,0,0,0,88,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:18.2,scaleX:1.18,scaleY:1.18,x:98.7,y:21},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:98.6},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:98.5},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({regY:17.9,y:20.6},0).wait(1).to({regY:18.2,scaleX:1.2,scaleY:1.2,x:98.7,y:20.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:98.8,y:20.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:20.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:20.5},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:98.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:98.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:98.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:98.8},0).wait(1).to({regY:17.9,scaleX:1.12,scaleY:1.12,y:20.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.1,-134.5,474.1,192.5);


// stage content:



(lib.binarr_760x60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.btn.gotoAndPlay(1);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.btn.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.btn = new lib.Символ14();
	this.btn.setTransform(245.1,29.8,0.914,0.914,0,0,0,98.8,20.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(365,30,1,1,0,0,0,365,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(597.8,31.6,1,1,0,0,0,155.1,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(80,30.2,0.75,0.75,0,0,0,88,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 7
	this.instance_3 = new lib.gb();
	this.instance_3.setTransform(0,-1.5,0.77,1.23);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.3,-81.8,1232.9,233.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
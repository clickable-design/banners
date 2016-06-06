(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon2.jpg?1465205952869", id:"fon2"},
		{src:"images/interface_03.png?1465205952869", id:"interface_03"},
		{src:"images/interface_06.png?1465205952869", id:"interface_06"},
		{src:"images/mouse.png?1465205952869", id:"mouse"},
		{src:"images/oboiru2.png?1465205952869", id:"oboiru2"},
		{src:"images/plashka.png?1465205952869", id:"plashka"},
		{src:"images/soldier_03.png?1465205952869", id:"soldier_03"},
		{src:"images/soldier_06.png?1465205952869", id:"soldier_06"},
		{src:"images/tech_03.png?1465205952869", id:"tech_03"},
		{src:"images/tech_06.png?1465205952869", id:"tech_06"}
	]
};



// symbols:



(lib.fon2 = function() {
	this.initialize(img.fon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,383);


(lib.interface_03 = function() {
	this.initialize(img.interface_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,402,106);


(lib.interface_06 = function() {
	this.initialize(img.interface_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,48);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.oboiru2 = function() {
	this.initialize(img.oboiru2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,211);


(lib.plashka = function() {
	this.initialize(img.plashka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.soldier_03 = function() {
	this.initialize(img.soldier_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,133);


(lib.soldier_06 = function() {
	this.initialize(img.soldier_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,128);


(lib.tech_03 = function() {
	this.initialize(img.tech_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,75);


(lib.tech_06 = function() {
	this.initialize(img.tech_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,53);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.976)").s().p("AJJAuQAGAAAEgBQAEgCACgEQADgFABgMQAEgiAFg/IAvAAIAAAgIgPAAQgGBDgDANQgDAMgDAIQgEAIgFAFQgGAEgJACQgIACgOABgAN/BNIAAgiIAkAAIAAAigAM7BNIABhPIAihBIAACQgALpBNIBSiYIAiAAIhSCYgAKnBNIAAh4IgNAAIAAggIAxAAIAACYgAIeBNIgGgZIgZAAIAAggIASAAIgPg/QAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIAAgfQAIABAFABQAGABAEAEQAFADADAEQADAEABAHIAhCCgAG3BNIAhiCQABgHADgEQADgEAEgDQAFgEAFgBQAGgBAIgBIAAAeQgDABAAAEIgPA/IASAAIAAAgIgZAAIgGAZgAGABNIAAiYIAkAAIAACYgAEuBNIAAiYIBNAAIAAAgIgoAAIAAB4gAD2BNIgFgZIgZAAIAAggIASAAIgPg/QAAgBgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIAAgfQAHABAGABQAGABAEAEQAEADADAEQADAEACAHIAhCCgACPBNIAhiCQACgHADgEQACgEAFgDQAEgEAGgBQAGgBAHgBIAAAeQgCABgBAEIgOA/IARAAIAAAgIgZAAIgGAZgABYBNIAAiYIAlAAIAACYgAADBNIAAiYIAlAAIAAA7IAsAAIAAAeIgsAAIAAA/gAh3BNIAAiYIAkAAIAACYgAjOBNIAeg9IgKgFIgIgJQgEgDgCgHQgCgHAAgIQgBgMAEgJQADgKAHgHQAHgGAKgEQAKgEAMAAIAaAAIAAAgIgZAAQgFAAgDABIgFAEQgEAGAAAJQAAAIAFAGQAFAFAIAAIAYAAIAAAdIgSAAIgVA0gAknBNIAAggIAWAAQAJAAADgFQAEgDgBgJQAAgIgDgDQgDgFgJAAIgWAAIAAgdIAWAAQALAAAKADQAKAEAHAFQAHAFAEAJQADAJAAALQAAAMgEAIQgEAJgHAGQgHAGgJAEQgKADgLAAgAlRBNIAAiYIAlAAIAACYgAmZBNQgNAAgLgEQgKgDgHgHQgHgGgDgJQgEgIAAgJIAAg+QAAgIADgIQAEgIAGgGQAHgHAKgDQALgEAOAAIAwAAIAAAgIgwAAQgJAAgEAFQgFAGAAAIIAAA0QAAAHAFAFQAFAFAIAAIAwAAIAAAggAooBNIAAhzIAlAAIAABzgAq1BNIgFgZIgZAAIAAggIASAAIgPg/QgBgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIAAgfQAHABAGABQAGABAEAEQAEADADAEQADAEACAHIAhCCgAscBNIAhiCQACgHADgEQACgEAFgDQAEgEAGgBQAGgBAHgBIAAAeQgCABgBAEIgOA/IARAAIAAAgIgZAAIgGAZgAtTBNIAAiYIAlAAIAACYgAuoBNIAAiYIAlAAIAAA7IAsAAIAAAeIgsAAIAAA/gALohLIAjAAIAABOIgjBBgAOEAcIgMhnIAxAAIgMBngAmmAQIAAgeIA0AAIAAAegApLgrIAAggIBqAAIAAAggAkngrIAAggIBBAAIAAAgg");
	this.shape.setTransform(93.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.5,15.8);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.976)").s().p("ADEBdIgCgeIgfAAIAAggIARAAIAAhZIgRAAIAAgfIA2AAIAAB4IANAAIAAA+gABUBdIAAg+QAFAAAEgDQADgCADgEQACgFACgOQAGggADg8IAuAAIAAAfIgMAAQgHBJgHAQIAaAAIAAAgIgmAAIgCAegAimBdIgDgeIgfAAIAAggIARAAIAAhZIgRAAIAAgfIA2AAIAAB4IAOAAIAAA+gAkXBdIAAg+QAGAAAEgDQADgCACgEQADgFACgOQAFggAEg8IAtAAIAAAfIgMAAQgGBJgHAQIAZAAIAAAgIglAAIgDAegAMYA/IAAhzIAlAAIAABzgAK9A/IAAiYIAkAAIAACYgAJoA/IAAiYIAkAAIAAA6IAsAAIAAAfIgsAAIAAA/gAIgA/QgOAAgLgEQgKgEgHgGQgGgGgEgJQgDgIAAgJIAAg+QAAgIADgIQADgIAHgGQAHgHAKgDQALgEAOAAIAvAAIAAAgIgvAAQgJAAgFAFQgFAFAAAJIAAA0QAAAHAFAFQAGAFAIAAIAvAAIAAAggAGwA/IAAggIAnAAIAAAggAGTA7QgKgEgHgGQgHgGgEgJQgDgIAAgJIAAg+QAAgIADgIQADgIAHgGQAHgHAKgDQALgEAOAAIAAAgQgJAAgFAFQgEAFAAAJIAAA0QAAAHAFAFQAFAFAIAAIAAAgQgOAAgKgEgAEwA/QgOAAgLgEQgKgEgHgGQgGgGgEgJQgDgIAAgJIAAg+QAAgIADgIQADgIAHgGQAHgHAKgDQALgEAOAAIAvAAIAAAgIgvAAQgJAAgFAFQgFAFAAAJIAAA0QAAAHAFAFQAGAFAIAAIAvAAIAAAggAgbA/IABhPIAghBIAACQgAhtA/IBSiYIAgAAIhQCYgAlEA/IgGgaIgZAAIAAgfIASAAIgPhAQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAgBAAIAAgfQAIAAAFACQAGABAEADQAFADADAFQADAEABAHIAhCCgAmrA/IAhiCQABgHADgEQADgFAEgDQAFgDAFgBQAGgCAIAAIAAAeQgDABAAADIgPBAIASAAIAAAfIgZAAIgGAagAneA/IAAggIAoAAIAAAggAn7A7QgKgEgHgGQgHgGgDgJQgEgIAAgJIAAg+QAAgIADgIQAEgIAGgGQAHgHAKgDQALgEAOAAIAAAgQgIAAgFAFQgFAFAAAJIAAA0QAAAHAFAFQAFAFAIAAIAAAgQgNAAgLgEgApXA/IAAiYIAkAAIAACYgAqrA/IAAgfIAUAAQAJAAADgFQAEgFAAgJQAAgIgEgFQgDgDgJAAIgUAAIAAgfIAUAAQAMAAAKADQAJAEAHAHQAHAGAEAKQAEAHAAAMQAAAKgEAKQgEAIgHAHQgHAGgKADQgJAEgMAAgArVA/IAAiYIAlAAIAACYgAs2A/IAAgfIAXAAQAIAAAEgFQADgEAAgIQAAgHgDgEQgFgEgIAAIgWAAIAAgcIASAAQAHAAAFgEQAFgEAAgHQAAgIgFgDQgEgEgJAAIgRAAIAAgfIASAAQAMAAAJADQAKACAHAGQAHAFADAJQAEAIAAALQgBALgEAIQgFAHgHAFIAJAFIAHAIQADACABAGQACAFAAAGQAAALgEAJQgEAIgIAGQgHAFgKADQgKADgLAAgAteA/IAAiYIAkAAIAACYgAhuhZIAjAAIAABQIgjA/gAISACIAAgeIA0AAIAAAegAEiACIAAgeIA0AAIAAAegAL1g5IAAggIBqAAIAAAggAGwg5IAAggIAnAAIAAAggAneg5IAAggIAoAAIAAAgg");
	this.shape.setTransform(86.4,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.8,18.7);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.976)").s().p("AgaAVQAEAAADgCQADgCABgDQACgEAAgKIAAgGIgCgGQgBgEgDgCQgDgCgEAAIAAgOIAIABIAGACIAGADIAEAFIACAEIABAHIABAMIgBANIgBAHIgCAFIgEAEIgGADIgGACIgIABgAglAiIgGgCIgGgDIgEgFIgDgEIgCgHIgBgNIABgMIACgHIADgEIAEgFIAGgDIAGgCIAIgBIAAAOQgEAAgDACQgDACgBAEIgCAGIAAAGQAAAKACADQABAEADACQADACAEAAIAAAOIgIgBgACaAiQgGAAgFgBQgEgCgDgDQgDgDgCgDQgBgEAAgFIAAgaIABgHQABgEADgDIAIgFQAFgBAGAAIAWAAIAAAOIgWAAQgDAAgDACQgCADAAADIAAAYQAAACACACQADADADAAIAWAAIAAAOgABiAiQgGAAgFgBQgEgCgDgDQgDgDgCgDQgBgEAAgFIAAgaIABgHQABgEADgDIAIgFQAFgBAGAAIAWAAIAAAOIgWAAQgDAAgDACQgCADAAADIAAAYQAAACACACQADADADAAIAWAAIAAAOgAANAiIAAhDIARAAIAABDgAhTAiIgFgSQgCgFgCgCQgDgCgDgBIgEAAIAAgLIAEAAIAOgcIASAAIgRAfQAFACAFALIAJAXgAh5AiIAAhDIARAAIAABDgAiUAiIAAgOIASAAIAAAOgAihAhIgIgFQgDgDgCgDQgBgEAAgFIAAgaIABgHQABgEADgDIAIgFQAFgBAHAAIAAAOQgEAAgDACQgCADAAADIAAAYQAAACADACQACADAEAAIAAAOQgHAAgEgBgAAgAMIAAgNIAKAAQAEAAACgCQACgBAAgGIgBgDQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQgCgCgDAAIgKAAIAAgOIAKAAQAFAAAFABIAIAFQADADACAFQABAFAAAEIgBAJIgEAFIgEAEIgEADQgFABgGAAgACUAHIAAgMIAYAAIAAAMgABcAHIAAgMIAYAAIAAAMgAiUgTIAAgOIASAAIAAAOg");
	this.shape.setTransform(17.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.4,7.1);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.976)").s().p("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gDALgAjxAcIAAgOIASAAIAAAOgAj9AbIgJgFQgDgDgBgEQgCgDAAgFIAAgaIACgIQABgEADgCIAIgFQAFgCAGAAIAAAPQgEAAgCACQgCADAAADIAAAXQAAADADACQACADADAAIAAAOQgGAAgEgBgAkoAcIAAhEIARAAIAABEgAlOAcIAAgOIAJAAQAEAAACgCQABgCABgEQgBgEgBgCQgCAAgEAAIgJAAIAAgPIAJAAQAFAAAFACQAFACACADQAEADACAEQABACAAAFQAAAFgCAEQgCAEgDADQgDADgEACQgFABgFAAgAlhAcIAAhEIARAAIAABEgAmNAcIAAgOIAKAAQAEAAACgCQABgCAAgDQABgEgCgBQgDgCgEAAIgJAAIAAgMIAIAAQADAAADgCQACgBAAgEQAAgDgCgCQgDgBgDAAIgIAAIAAgPIAIAAQAGAAADACQAFABADACQAEADABAEQACADAAAFQgBAFgCAEQgCADgDADIAEACIADADIACADIABAFQAAAFgCAEQgCAEgDACIgIAEIgKABgAmgAcIAAhEIARAAIAABEgAhKgoIARAAIAAAlIgRAbgABrABIAAgNIAYAAIAAANgAFLgZIAAgPIAxAAIAAAPgACrgZIAAgPIASAAIAAAPgAjxgZIAAgPIASAAIAAAPgACBhMIgCgOIgOAAIAAgOIAIAAIAAgpIgIAAIAAgPIAZAAIAAA4IAGAAIAAAcgABNhMIAAgcIAEgBIADgDIACgJIAEgrIAVAAIAAAPIgGAAQgCAhgEAIIAMAAIAAAOIgRAAIgBAOgAEUhoQAFAAADgCQACgBABgDQACgEABgLIgBgHIgCgHQgBgDgCgCQgDgCgFAAIAAgOIAIAAIAHACIAFAEIAEAEIADAFIACAGIABAOIgBAOIgCAGIgDAGIgEAEIgFADIgHACIgIABgAEKhaIgHgCIgFgDIgFgFIgCgFIgCgGIgCgOIACgOIACgGIACgFIAFgEIAFgDIAHgDIAIAAIAAAOQgFAAgDACQgDACgBADIgCAHIAAAHQAAALACADQABAEADABQADACAFAAIAAAPIgIgBgAArhoQAFAAADgCQACgBABgDQADgEAAgLIgBgHIgCgHQgBgDgCgCQgDgCgFAAIAAgOIAIAAIAHACIAFAEIAEAEIADAFIACAGIABAOIgBAOIgCAGIgDAGIgEAEIgFADIgHACIgIABgAAghaIgGgCIgFgDIgFgFIgCgFIgCgGIgBgOIABgOIACgGIACgFIAFgEIAFgDIAGgDIAJAAIAAAOQgFAAgDACQgDACgBADIgCAHIAAAHQAAALACADQABAEADABQADACAFAAIAAAPIgJgBgAGthaIAAgPIAQAAIAAAPgAGRhaIgCgLIgLAAIAAgPIAIAAIgHgdIgBgCIAAgOIAFABIAGACIACADIACAFIAQA8gAFjhaIAPg8IACgFIADgDIAFgCIAFgBIAAAOIgBACIgHAdIAIAAIAAAPIgLAAIgCALgAE9haIAAhGIAQAAIAABGgADYhaIAAgpIAKgdIAGAAIAABGgAC6haIgPgqIAAgcIAGAAIARAvIAQgvIANAAIgXBGgACahaIAAhGIAPAAIAABGgAgQhaIAAhGIAQAAIAABGgAg1haIAAhGIAjAAIAAAPIgSAAIAAA3gAhqhaIgCgLIgLAAIAAgPIAIAAIgHgdIgBgCIAAgOIAGABIAEACIADADIADAFIAOA8gAiYhaIAPg8IACgFIADgDIAFgCIAGgBIAAAOIgBACIgHAdIAIAAIAAAPIgMAAIgDALgAixhaIAAhGIAQAAIAABGgAjYhaIAAhGIARAAIAAAbIATAAIAAAPIgTAAIAAAcgAjyhaIgFgSQgCgFgDgDQgCgCgDAAIgEAAIAAgOIADAAIAOgcIATAAIgSAgQAFACAFAMIAJAYgAkXhaIAAhGIAQAAIAABGgAk+haIAKgYIADgIIADgEIADgCIgRggIASAAIAPAcIACAAIAAAOIgCAAQgFAAgCACQgCADgCAFIgFASgAlxhaIAAgOIALAAQAFAAABgCIADgGIAMgwIASAAIgOAxIgDAKQgCAEgDACQgCADgEABQgFABgGAAgAmUhaIAAhGIARAAIAABGgAm7haIAAhGIASAAIAAAbIATAAIAAAPIgTAAIAAAcgAGvhwIgFgwIAWAAIgFAwgAlghwIgGgBIgEgCIgDgEIgDgFIgMgkIASAAIAJAeIABADIADAAIACAAIgEAPgAFQiRIAAgPIAWAAIAAAPg");
	this.shape.setTransform(44.9,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.7,32.5);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("ADEBdIgCgeIgfAAIAAggIARAAIAAhZIgRAAIAAgfIA2AAIAAB4IANAAIAAA+gABUBdIAAg+QAFAAAEgDQADgCADgEQACgFACgOQAGggADg8IAuAAIAAAfIgMAAQgHBJgHAQIAaAAIAAAgIgmAAIgCAegAimBdIgDgeIgfAAIAAggIARAAIAAhZIgRAAIAAgfIA2AAIAAB4IAOAAIAAA+gAkXBdIAAg+QAGAAAEgDQADgCACgEQADgFACgOQAFggAEg8IAtAAIAAAfIgMAAQgGBJgHAQIAZAAIAAAgIglAAIgDAegAMYA/IAAhzIAlAAIAABzgAK9A/IAAiYIAkAAIAACYgAJoA/IAAiYIAkAAIAAA6IAsAAIAAAfIgsAAIAAA/gAIgA/QgOAAgLgEQgKgEgHgGQgGgGgEgJQgDgIAAgJIAAg+QAAgIADgIQADgIAHgGQAHgHAKgDQALgEAOAAIAvAAIAAAgIgvAAQgJAAgFAFQgFAFAAAJIAAA0QAAAHAFAFQAGAFAIAAIAvAAIAAAggAGwA/IAAggIAnAAIAAAggAGTA7QgKgEgHgGQgHgGgEgJQgDgIAAgJIAAg+QAAgIADgIQADgIAHgGQAHgHAKgDQALgEAOAAIAAAgQgJAAgFAFQgEAFAAAJIAAA0QAAAHAFAFQAFAFAIAAIAAAgQgOAAgKgEgAEwA/QgOAAgLgEQgKgEgHgGQgGgGgEgJQgDgIAAgJIAAg+QAAgIADgIQADgIAHgGQAHgHAKgDQALgEAOAAIAvAAIAAAgIgvAAQgJAAgFAFQgFAFAAAJIAAA0QAAAHAFAFQAGAFAIAAIAvAAIAAAggAgbA/IABhPIAghBIAACQgAhtA/IBSiYIAgAAIhQCYgAlEA/IgGgaIgZAAIAAgfIASAAIgPhAQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAgBAAIAAgfQAIAAAFACQAGABAEADQAFADADAFQADAEABAHIAhCCgAmrA/IAhiCQABgHADgEQADgFAEgDQAFgDAFgBQAGgCAIAAIAAAeQgDABAAADIgPBAIASAAIAAAfIgZAAIgGAagAneA/IAAggIAoAAIAAAggAn7A7QgKgEgHgGQgHgGgDgJQgEgIAAgJIAAg+QAAgIADgIQAEgIAGgGQAHgHAKgDQALgEAOAAIAAAgQgIAAgFAFQgFAFAAAJIAAA0QAAAHAFAFQAFAFAIAAIAAAgQgNAAgLgEgApXA/IAAiYIAkAAIAACYgAqrA/IAAgfIAUAAQAJAAADgFQAEgFAAgJQAAgIgEgFQgDgDgJAAIgUAAIAAgfIAUAAQAMAAAKADQAJAEAHAHQAHAGAEAKQAEAHAAAMQAAAKgEAKQgEAIgHAHQgHAGgKADQgJAEgMAAgArVA/IAAiYIAlAAIAACYgAs2A/IAAgfIAXAAQAIAAAEgFQADgEAAgIQAAgHgDgEQgFgEgIAAIgWAAIAAgcIASAAQAHAAAFgEQAFgEAAgHQAAgIgFgDQgEgEgJAAIgRAAIAAgfIASAAQAMAAAJADQAKACAHAGQAHAFADAJQAEAIAAALQgBALgEAIQgFAHgHAFIAJAFIAHAIQADACABAGQACAFAAAGQAAALgEAJQgEAIgIAGQgHAFgKADQgKADgLAAgAteA/IAAiYIAkAAIAACYgAhuhZIAjAAIAABQIgjA/gAISACIAAgeIA0AAIAAAegAEiACIAAgeIA0AAIAAAegAL1g5IAAggIBqAAIAAAggAGwg5IAAggIAnAAIAAAggAneg5IAAggIAoAAIAAAgg");
	this.shape.setTransform(86.4,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.8,18.7);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("AJJAuQAGAAAEgBQAEgCACgEQADgFABgMQAEgiAFg/IAvAAIAAAgIgPAAQgGBDgDANQgDAMgDAIQgEAIgFAFQgGAEgJACQgIACgOABgAN/BNIAAgiIAkAAIAAAigAM7BNIABhPIAihBIAACQgALpBNIBSiYIAiAAIhSCYgAKnBNIAAh4IgNAAIAAggIAxAAIAACYgAIeBNIgGgZIgZAAIAAggIASAAIgPg/QAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIAAgfQAIABAFABQAGABAEAEQAFADADAEQADAEABAHIAhCCgAG3BNIAhiCQABgHADgEQADgEAEgDQAFgEAFgBQAGgBAIgBIAAAeQgDABAAAEIgPA/IASAAIAAAgIgZAAIgGAZgAGABNIAAiYIAkAAIAACYgAEuBNIAAiYIBNAAIAAAgIgoAAIAAB4gAD2BNIgFgZIgZAAIAAggIASAAIgPg/QAAgBgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIAAgfQAHABAGABQAGABAEAEQAEADADAEQADAEACAHIAhCCgACPBNIAhiCQACgHADgEQACgEAFgDQAEgEAGgBQAGgBAHgBIAAAeQgCABgBAEIgOA/IARAAIAAAgIgZAAIgGAZgABYBNIAAiYIAlAAIAACYgAADBNIAAiYIAlAAIAAA7IAsAAIAAAeIgsAAIAAA/gAh3BNIAAiYIAkAAIAACYgAjOBNIAeg9IgKgFIgIgJQgEgDgCgHQgCgHAAgIQgBgMAEgJQADgKAHgHQAHgGAKgEQAKgEAMAAIAaAAIAAAgIgZAAQgFAAgDABIgFAEQgEAGAAAJQAAAIAFAGQAFAFAIAAIAYAAIAAAdIgSAAIgVA0gAknBNIAAggIAWAAQAJAAADgFQAEgDgBgJQAAgIgDgDQgDgFgJAAIgWAAIAAgdIAWAAQALAAAKADQAKAEAHAFQAHAFAEAJQADAJAAALQAAAMgEAIQgEAJgHAGQgHAGgJAEQgKADgLAAgAlRBNIAAiYIAlAAIAACYgAmZBNQgNAAgLgEQgKgDgHgHQgHgGgDgJQgEgIAAgJIAAg+QAAgIADgIQAEgIAGgGQAHgHAKgDQALgEAOAAIAwAAIAAAgIgwAAQgJAAgEAFQgFAGAAAIIAAA0QAAAHAFAFQAFAFAIAAIAwAAIAAAggAooBNIAAhzIAlAAIAABzgAq1BNIgFgZIgZAAIAAggIASAAIgPg/QgBgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIAAgfQAHABAGABQAGABAEAEQAEADADAEQADAEACAHIAhCCgAscBNIAhiCQACgHADgEQACgEAFgDQAEgEAGgBQAGgBAHgBIAAAeQgCABgBAEIgOA/IARAAIAAAgIgZAAIgGAZgAtTBNIAAiYIAlAAIAACYgAuoBNIAAiYIAlAAIAAA7IAsAAIAAAeIgsAAIAAA/gALohLIAjAAIAABOIgjBBgAOEAcIgMhnIAxAAIgMBngAmmAQIAAgeIA0AAIAAAegApLgrIAAggIBqAAIAAAggAkngrIAAggIBBAAIAAAgg");
	this.shape.setTransform(93.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.5,15.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.oboiru2();
	this.instance.setTransform(57.9,-86.8,1.009,1.009);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.9,-86.8,201.9,213);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AiPA3IgEgEIgBgFIgBgEIgBgGIADgFIACgEIACgCIAIgCIgBgCIBfgXIgEgQIAAgFQgCgGADgIQADgIAKgEIAAAAQAHgDAPAEQAVAHAdgCQAUgCAigGIANgCIAFgDIABAAIAAAAQAGgCAFABQALgBAHAIQAKAJgDAMQgBAIgGAHQgIAIgTAHQgqATgeALQgUAIgJAFQgOAHgCABIgIACIgEAAQgEACgEAAQgFABgGgDQgGgDgCgFIgEgKIhSAWIgLABIgGgEg");
	this.shape.setTransform(15.1,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.3,11.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AB2BWIgHgEIgBACIhVgxIgIAOIgEAEQgCAFgIAEQgGADgKgEIAAAAQgGgDgJgNQgLgVgWgUQgQgKgcgUQgGgDgEgFIgGgCIgBAAQgGgDgCgFQgJgGABgLQgBgNALgHQAGgFAKAAQALAAAUAHQAqAQAdAOIAdALIASAGIAHAFIADADIAHAEQAEADACAGQACAHgCAEQgCAFgCADIBJArIAJAHIABAIIAAAFIgCAEIgDAEIgDAEIgGACIgEACIgDgBg");
	this.shape.setTransform(132.9,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,3.4,27.9,17.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6060D").s().p("EgvcAXhMAAAgvBMBe5AAAMAAAAvBgEgpCASCMBR2AAAMAAAgkYMhR2AAAg");
	this.shape.setTransform(303.7,150.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,607.5,301.2);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon2();
	this.instance.setTransform(0,0,0.878,0.878);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,614.8,336.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("Ai4C8ID4mCQBkgRAUA0QimAPiHFQQgRAPgQAAQgRAAgRgPg");
	this.shape.setTransform(18.5,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,40.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.976)").s().p("Al/gdQg8giA8giQGGBFGXAWQACAzg1A1QjLiFofAGg");
	this.shape.setTransform(41.5,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,19.8);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("AkqCYQh8hAgBhYQABhYB8g/QB8g/CuAAQCvAAB8A/QB8A/AABYQAABYh8BAQh8A+ivABQiugBh8g+g");
	this.shape.setTransform(42.4,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.8,43);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.interface_06();
	this.instance.setTransform(0,0,0.71,0.71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,34.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AhwA8QgvgZAAgjQAAgiAvgZQAvgZBBAAQBCAAAuAZQAwAZAAAiQAAAjgwAZQguAZhCAAQhBAAgvgZg");
	this.shape.setTransform(16,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,17.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("AqdAuIAAhbIU7AAIAABbg");
	this.shape.setTransform(67.1,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.2,9.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.976)").s().p("AqYAnIAAhNIUxAAIAABNg");
	this.shape.setTransform(66.5,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.1,7.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AqYAnIAAhNIUxAAIAABNg");
	this.shape.setTransform(66.5,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.1,7.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.976)").s().p("AgnBRQAqg+hMghQBJAcAJhgQgIBaBIgQQhJAdA9A+Qg8g3goA1g");
	this.shape.setTransform(17.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,153,51,0.976)").s().p("Aivg7QChBCAVitQABChCnhAQi9BbCaBxQiQhdhQB8QBTiUiuhNg");
	this.shape_1.setTransform(17.6,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.2,33.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,51,0.976)").s().p("AgcBiQAPhHhOgWQgPgEgSgBQAeAAAUgKQAqgTAFg4IAAgZQAGAZAKAQQAkA7Bkg0QhsBCAnA8IAJALQgogOgdAWQgMAHgLAOIgFAHIAEgNg");
	this.shape.setTransform(16.2,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,153,51,0.976)").s().p("AghBuQAKgNAMgIQgMANgHAXIgDgPgAinAvQArgPAbgUQBNAWgOBGQgZhRhsAYgAAxBGQgng8BthCQhkA1gkg8QBFA4BzhhQh+BzA0BJQgYgLgUgDgAhAh8QAOAbARATQgGA4gpATQAqgwgahJg");
	this.shape_1.setTransform(16.8,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.6,25.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.soldier_03();
	this.instance.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.3,94.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.soldier_06();
	this.instance.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.4,91.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape_1.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("Ah9BZIgEgDIgDgEIgCgEIgCgFIABgGIABgEIACgDIAHgEIgBgBIBVgxIgIgNIgBgEQgEgGABgHQAAgKAJgGIAAAAQAGgEAPgBQAXACAbgLQATgHAfgOIAMgFIAFgEIAAAAIABgBQAFgEAFABQAKgFAJAHQAMAFAAANQABAIgEAIQgGAKgQAOQgjAcgaARQgSANgIAHIgOANIgHAEIgDABQgDADgEABQgFACgFgBQgIgCgDgDQgEgFgBgFIhKArIgLADIgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.1,27.4,18.4);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("Ah9BZIgEgDIgDgEIgCgEIgCgFIABgGIABgEIACgDIAHgEIgBgBIBVgxIgIgNIgBgEQgEgGABgHQAAgKAJgGIAAAAQAGgEAPgBQAXACAbgLQATgHAfgOIAMgFIAFgEIAAAAIABgBQAFgEAFABQAKgFAJAHQAMAFAAANQABAIgEAIQgGAKgQAOQgjAcgaARQgSANgIAHIgOANIgHAEIgDABQgDADgEABQgFACgFgBQgIgCgDgDQgEgFgBgFIhKArIgLADIgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.1,27.4,18.4);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("Ah9BZIgEgDIgDgEIgCgEIgCgFIABgGIABgEIACgDIAHgEIgBgBIBVgxIgIgNIgBgEQgEgGABgHQAAgKAJgGIAAAAQAGgEAPgBQAXACAbgLQATgHAfgOIAMgFIAFgEIAAAAIABgBQAFgEAFABQAKgFAJAHQAMAFAAANQABAIgEAIQgGAKgQAOQgjAcgaARQgSANgIAHIgOANIgHAEIgDABQgDADgEABQgFACgFgBQgIgCgDgDQgEgFgBgFIhKArIgLADIgHgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-9.1,27.4,18.4);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AiPA3IgEgEIgBgFIgBgEIgBgGIADgFIACgEIACgCIAIgCIgBgCIBfgXIgEgQIAAgFQgCgGADgIQADgIAKgEIAAAAQAHgDAPAEQAVAHAdgCQAUgCAigGIANgCIAFgDIABAAIAAAAQAGgCAFABQALgBAHAIQAKAJgDAMQgBAIgGAHQgIAIgTAHQgqATgeALQgUAIgJAFQgOAHgCABIgIACIgEAAQgEACgEAAQgFABgGgDQgGgDgCgFIgEgKIhSAWIgLABIgGgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-5.9,30.3,11.8);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AiPA3IgEgEIgBgFIgBgEIgBgGIADgFIACgEIACgCIAIgCIgBgCIBfgXIgEgQIAAgFQgCgGADgIQADgIAKgEIAAAAQAHgDAPAEQAVAHAdgCQAUgCAigGIANgCIAFgDIABAAIAAAAQAGgCAFABQALgBAHAIQAKAJgDAMQgBAIgGAHQgIAIgTAHQgqATgeALQgUAIgJAFQgOAHgCABIgIACIgEAAQgEACgEAAQgFABgGgDQgGgDgCgFIgEgKIhSAWIgLABIgGgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-5.9,30.3,11.8);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tech_06();
	this.instance.setTransform(-34.4,-29.7,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-29.7,78.5,59.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ46();
	this.instance.setTransform(86.9,12.3,1,1,0,0,0,17.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(90.1,36.2,1,1,0,0,0,44.9,16.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("ApDEGQjJhgAAiGQAAiFDJhfQDIhfEcAAQDRAACmA1IH1h2IliC0QChBZAAB3QAACGjIBgQjJBfkaAAQkcAAjIhfg");
	this.shape.setTransform(97.6,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.976)").s().p("ApDEGQjJhgAAiGQAAiFDJhfQDJhfEbAAQDRAACmA1IH1h2IljC0QCiBZAAB3QAACGjIBgQjKBfkZAAQkbAAjJhfg");
	this.shape_1.setTransform(98.3,31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.5,-7.2,157,74.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация14("synched",0);
	this.instance.setTransform(-1.8,63);

	this.instance_1 = new lib.Анимация15("synched",0);
	this.instance_1.setTransform(-5.7,65.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация16("synched",0);
	this.instance_2.setTransform(-1.8,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-5.7,y:65.6},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true,x:-1.8,y:63},15).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AlDhAIE7ivIFMEcIlFDDg");
	this.shape.setTransform(29.3,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-5.1,77.3,77.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(-31.5,58.9,1,1,0,0,0,15.1,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-35.5,y:59.9},14).to({x:-31.5,y:58.9},15).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AmygcIG2jlIGvEJImgD6g");
	this.shape.setTransform(39.1,42.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,16.7,104.8,57.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(308,185.8,1,1,0,0,0,303.7,150.6);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.BlurFilter(63, 63, 1)];
	this.instance.cache(-2,-2,612,305);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.289},19).to({alpha:0},20).to({alpha:0.301},20).to({alpha:0},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(307.4,168.2,1,1,0,0,0,307.4,168.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-28.8,742,437);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(41.2,8.4,1,1,0,0,0,18.5,20.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.98,scaleY:0.55},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(41.5,9.8,1,1,0,0,0,41.5,9.8);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.65,scaleY:1.05,skewX:46.9,skewY:30,y:9.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12,83,40.7);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(43.4,22.2,1,1,0,0,0,41.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(42.4,21.5,1,1,0,0,0,42.4,21.5);
	this.instance_2.alpha = 0.309;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.8,43);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.Символ48();
	this.instance.setTransform(150.9,58.7,1,1,0,0,0,93.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(152.7,90.2,1,1,0,0,0,86.4,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).to({alpha:1},15).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(152.7,90.2,1,1,0,0,0,86.4,9.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14).to({alpha:0},15).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ43();
	this.instance_3.setTransform(150.9,58.7,1,1,0,0,0,93.7,7.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14).to({alpha:0},15).wait(1));

	// Слой 1
	this.instance_4 = new lib.plashka();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(16,17.1,1,1,0,0,0,16,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.8},9).to({y:17.1},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(16.4,31.9,1,0.646,0,0,0,16,8.5);
	this.instance_1.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,37.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ21_1();
	this.instance.setTransform(44.4,35.9,1,1,0,0,0,42.4,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(42.2,100,1,1,0,0,0,16,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.tech_03();
	this.instance_2.setTransform(5.3,3.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,3.8,84.8,116.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(67.1,4.6,1,1,0,0,0,66.5,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.85,x:57.1},39,cjs.Ease.get(-1)).to({scaleX:0.72,x:48.2},40,cjs.Ease.get(1)).to({scaleX:0.5,x:33.8,alpha:0.488},40,cjs.Ease.get(-1)).to({scaleX:0.29,x:19.8,alpha:0},40,cjs.Ease.get(1)).to({regX:66.8,scaleX:0.12,x:8.4},40,cjs.Ease.get(-1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(67,4.6,1,1,0,0,0,66.5,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.85,x:57.1},39,cjs.Ease.get(-1)).to({scaleX:0.72,x:48.2},40,cjs.Ease.get(1)).to({scaleX:0.5,x:33.8},40,cjs.Ease.get(-1)).to({scaleX:0.29,x:19.8},40,cjs.Ease.get(1)).to({regX:66.8,scaleX:0.12,x:8.4},40,cjs.Ease.get(-1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(67,4.6,1,1,0,0,0,67,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.2,9.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(49.5,-20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.5,-20.3,33.6,25.2);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(72.7,46.9,1,1,0,0,0,17.6,16.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({alpha:1},1).to({alpha:0},1).wait(9).to({alpha:1},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.setTransform(39.3,29.8);

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.setTransform(39.3,29.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация3("synched",0);
	this.instance_3.setTransform(39.3,29.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация4("synched",0);
	this.instance_4.setTransform(39.3,29.8);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация5("synched",0);
	this.instance_5.setTransform(39.3,29.8);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация6("synched",0);
	this.instance_6.setTransform(39.3,29.8);
	this.instance_6._off = true;

	this.instance_7 = new lib.Анимация7("synched",0);
	this.instance_7.setTransform(39.3,29.8);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация8("synched",0);
	this.instance_8.setTransform(39.3,29.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},1).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},1).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},1).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},1).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},1).to({_off:true},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},1).to({_off:true},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).to({startPosition:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.3,63.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ5();
	this.instance.setTransform(121.3,144.2,0.42,0.42,0,0,0,13.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(174.7,144.8,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(164.9,115.6,0.42,0.42,0,0,0,13.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).wait(1));

	// Слой 10
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(142.8,131.8,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 9
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(131.8,173.4,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 8
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(153.9,159.1,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(196.8,128.6,0.42,0.42,0,0,0,13.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).wait(1));

	// soldier_06.png
	this.instance_7 = new lib.Символ2();
	this.instance_7.setTransform(186.4,148.5,1,1,0,0,0,58.7,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5));

	// Слой 17
	this.instance_8 = new lib.Символ5();
	this.instance_8.setTransform(47.3,129.2,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 16
	this.instance_9 = new lib.Символ5();
	this.instance_9.setTransform(38.2,157.8,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 15
	this.instance_10 = new lib.Символ5();
	this.instance_10.setTransform(27.1,116.9,0.42,0.42,0,0,0,13.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).wait(1));

	// Слой 14
	this.instance_11 = new lib.Символ5();
	this.instance_11.setTransform(15.4,145.5,0.42,0.42,0,0,0,13.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).wait(1));

	// Слой 13
	this.instance_12 = new lib.Символ5();
	this.instance_12.setTransform(3.7,101.3,0.42,0.42,0,0,0,13.3,11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).wait(1));

	// Слой 12
	this.instance_13 = new lib.Символ5();
	this.instance_13.setTransform(-6,129.9,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// Слой 11
	this.instance_14 = new lib.Символ5();
	this.instance_14.setTransform(-26.2,112.3,0.42,0.42,0,0,0,13.3,11.9);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// soldier_03.png
	this.instance_15 = new lib.Символ3();
	this.instance_15.setTransform(23.9,133.5,1,1,0,0,0,57.6,47.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.7,86.2,278.8,107.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20_1();
	this.instance.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(92.1,330.8,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_5 = new lib.Символ18();
	this.instance_5.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// mouse
	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(0,0,1,1,0,0,0,15.1,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-5.9,30.3,11.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.mouse = new lib.Символ16_1();
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(-48.5,81.3,1.172,1.172,0,0,0,78.1,35.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.3,31,184,86.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.setTransform(144.6,-9,1,1,0,0,0,78.5,37.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(44.4,63.1,1,1,0,0,0,59.8,63.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-86.8,295.7,213);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.text = new lib.Символ16();
	this.text.setTransform(150,75,1,1,0,0,0,150,75);

	this.timeline.addTween(cjs.Tween.get(this.text).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация11("synched",0);
	this.instance.setTransform(-30.9,23.8);

	this.instance_1 = new lib.Анимация12("synched",0);
	this.instance_1.setTransform(-36.4,24.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация13("synched",0);
	this.instance_2.setTransform(-30.9,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-34.9,y:24.5},10).to({_off:true,x:-36.4,y:24.8},4).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},4).to({_off:true,x:-30.9,y:23.8},15).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AmNC4ICzlvIJoAAIiYFvg");
	this.shape.setTransform(39.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,0,125.9,36.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(307.4,168.2,1,1,0,0,0,307.4,168.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,0,675,372.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.setTransform(170.8,0,1,1,36.4);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:37.6,regY:18.4,x:190.1,y:37.2,alpha:0},14).to({alpha:0.488},15).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-69.9,63.6,1,1,0,0,0,24.8,26.9);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).to({alpha:0.488},15).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(37.8,205.6,1,1,0,0,0,37.8,37.8);
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},14).to({alpha:0.488},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.2,-13,345.2,254.6);


// stage content:



(lib.krizis_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
			this.kursor.y = stage.mouseY;
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.text.gotoAndPlay(1);
		    this.mesto.gotoAndPlay(1);
			this.text2.gotoAndPlay(1);
			this.mouse.gotoAndPlay(1);
		   
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.text.gotoAndPlay(15);
		    this.mesto.gotoAndPlay(15);
			this.text2.gotoAndPlay(15);
			this.mouse.gotoAndPlay(15);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// kursor
	this.kursor = new lib.Символ12();
	this.kursor.setTransform(459.6,36.2,1,1,0,0,0,40,37.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// text2
	this.text2 = new lib.Символ37();
	this.text2.setTransform(420.1,237,1,1,0,0,0,59.8,63.1);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// mouse
	this.mouse = new lib.Символ42();
	this.mouse.setTransform(531.4,-66.8,1,1,0,0,0,31.3,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// text
	this.text = new lib.Символ35();
	this.text.setTransform(480.9,254.3,1,1,0,0,0,150,75);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// soldiers
	this.instance = new lib.Символ1();
	this.instance.setTransform(235.2,124.2,1,1,0,0,0,82.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// tech
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(42.9,117.8,1,1,0,0,0,39.2,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// hp
	this.hp = new lib.Символ8();
	this.hp.setTransform(165.9,55.1,1,1,-20.5,0,0,0,4.7);

	this.timeline.addTween(cjs.Tween.get(this.hp).wait(1));

	// interface
	this.instance_2 = new lib.interface_03();
	this.instance_2.setTransform(-1.6,253.8,0.476,0.476);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// mesto visadki
	this.mesto = new lib.Символ31();
	this.mesto.setTransform(338.9,161.8,1,1,0,0,0,115.6,121.7);

	this.timeline.addTween(cjs.Tween.get(this.mesto).wait(1));

	// fon
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(302.5,131.9,1,1,0,0,0,307.4,168.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267.4,113.7,674,372.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
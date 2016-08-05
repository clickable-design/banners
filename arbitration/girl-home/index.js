(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1470120853565", id:"back"},
		{src:"images/h03.png?1470120853565", id:"h03"},
		{src:"images/h06.png?1470120853565", id:"h06"},
		{src:"images/h09.png?1470120853565", id:"h09"},
		{src:"images/h12.png?1470120853565", id:"h12"},
		{src:"images/mouse.png?1470120853565", id:"mouse"},
		{src:"images/oblako.jpg?1470120853565", id:"oblako"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,681,341);


(lib.h03 = function() {
	this.initialize(img.h03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,298);


(lib.h06 = function() {
	this.initialize(img.h06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,74);


(lib.h09 = function() {
	this.initialize(img.h09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,23);


(lib.h12 = function() {
	this.initialize(img.h12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,40);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,52);


(lib.oblako = function() {
	this.initialize(img.oblako);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,141);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AgFBzIgcgDIgcgGQgKgCgWAAIg3gCQgLgBgDgCQgEgCgBgEQgBgFADgCQgcgEgaABQgRAAAAgIQAAgHAMgDQAagIAggCQADgGAOgIQAMgIACgHQACgFgBgIIgBgMQABgKAKgPQAFgHAEgCQAEgCAGAAICjgEQAFAAADgCQAEgCACgIQAFgWACgSQADgYAKgFIABACQAmgCALAQQAFAHABAMIgBAVQgDAbALALIALAHQAHAGAHAOIAKAWQAPAhAPAKIAIAGQAFAEACADQADAHgCAPIAAAJQAAAFgDADQgCACgIABIghAAQhKAAh5gGg");
	this.shape.setTransform(23.8,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,24.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.698)").s().p("AhGCHIiqAAIAAkCICqAAIAAi9IE3E4Ik3E5g");
	this.shape.setTransform(24.2,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.3,62.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgtChIgRgLIgOgMQgFgGAAgEIACgJIAFgKIgJjpIgDgJIgDgIIgBgHQAAgJAGgDQAHgFAMAAIAQACIAPAGQAGAEAFAEQAEAFAAAFQAAAKgEAFIgJAMIAEBOIAMgGIAQgEIANgDIAMgBQAeAAASAOQAJAGAEAMQAFAMAAAPQAAANgFAPQgFAOgIANQgIAPgKAMIgWAYIgVAUIgTAOQgDAJgHADQgGACgFAAQgIAAgJgEgAgJABQgLAGgIAHIAEBOIAQgKQAJgIAKgKQAKgLAHgMQAHgMAAgJQAAgNgFgGQgEgDgNAAQgNAAgJADg");
	this.shape.setTransform(127.8,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgUClQgPgHAAgHQAAgHAHgMIAAjlIggAFQgKAKgIABQgTADgFgdIAAgHQAAgMAGgHQAFgIAMgCIATAAIBxgQQAMgLAGgBQAKgCALAPQAJANACAMQABALgFAHQgFAHgHABIgYgFIgnAFIAADzQAHANAAAKQAAAGgFAEQgGADgMAAQgMAAgQgHg");
	this.shape_1.setTransform(106.9,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhKCjQgIgCgHgEQgGgEgFgGQgEgGAAgHIAAgHIAEgGIAHgGIANgHIAJgMIAMgSIANgVIANgXQgMgBgMgEQgMgFgJgIQgJgIgFgJQgFgLAAgNQAAgMACgKQADgLAFgJQALgUAQgPQAQgPAUgMQAVgMARgHQAUgIARgEQARgEAJAAQAIAAAFADQAFADAEAFIAFAKIABALIgBAFIgDAGIgFAFQgDACgFAAIAADuQAHAPAAAIQAAAHgGADQgGAEgMAAIgOgCIgPgFIgMgHQgEgEAAgDQAAgIAHgMIAAhgIgDABIgTAgIgRAfIgQAeIgNAYIgDANIgGAHIgHADIgJAAgAAHhWQgLAHgLAHQgKAIgHAJQgGAJAAAJIABAIIAFAIIAHAGQAFACAGAAIAKgBQAEgHAFgCQAFgCAHAAIAEABIAMgHIAAhCg");
	this.shape_2.setTransform(83.5,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhHCfQgPgIAAgGQAAgHAHgMIAAj0QgHgMAAgGQABgKAGgFQAIgFAOAAQAPAAAOAHQAjgQAVAAQASAAALAHIAMALIALALQAHAKAAANQAAAkgkBEQgmBFgZAAQgEAAgJgKIAABPQAIANAAALQAAAGgGADQgGAEgMAAQgOAAgQgHgAgZhYIAABZQAFAAAJgIQAIgKAKgWQANgVAGgRQAGgQAAgLQAAgOgMAAQgQAAgdAeg");
	this.shape_3.setTransform(62.1,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhVCiIgRgKIgOgMQgFgHAAgEIACgIIAFgLIgJjpIgDgJIgDgIIgBgGQAAgJAGgEQAHgEAMAAIAQACIAPAGQAGADAFAEQAEAGAAAFQAAAJgEAFIgJAMIAEBOIAMgFIAQgFIAPgCIAMgBQAcAAASANQAJAHAEALQAFANAAAOQAAAOgFAPQgFAOgIANQgIAOgKANIgUAXIgVAUIgVAOQgDAJgHADQgGADgFAAQgIAAgJgFgAgxACQgLAGgIAIIAEBNIAQgKQALgHAKgLQAKgLAHgLQAHgMAAgKQAAgNgFgGQgEgCgNAAQgNAAgLACgABOCVQgPgIAAgGQAAgHAHgMIgGj0QgGgMAAgGQAAgKAHgFQAHgFAOAAQASAAAMAIQANAKAAAIQAAAFgKATIAGDrQAGANAAALQAAAGgFADQgGAEgMAAQgOAAgQgHg");
	this.shape_4.setTransform(38.5,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhWCcQgQgHAAgGQAAgIAIgMIAAhVIgEgIQgDgFAAgGQAAgKADgGIAEgKIAAh2QgHgLAAgHQABgKAGgEQAIgFAOAAQARAAAOAIQAMAJgBAJQAAAEgJAUIAABfIBNgMIAAhiQgHgNAAgJQAAgGAEgCQAGgFAEAAIAOAAQAPgBAMAGQAIADAEAFQAEAGAAAHQAAAEgKAUIAABMIAHAHQADAEAAAIQAAALgDAGQgDAJgEAFIAABiQAHAQAAAHQAAANgYAAQgOAAgPgHQgPgIgBgGQAAgHAIgNIAAhXIhNALIAABgQAGANABAKQAAAHgHADQgFADgMAAQgOAAgQgHg");
	this.shape_5.setTransform(12.8,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.9,45.2);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("AuwKTQgbAAgLgIQgUgNAAgrQgBgaAEhNQAEhBgDgmQgDgmgNg7IgThgQgJg3gChFQgBgnABhUQACiTAEhOQAHh8ARhjQAHgnAJgXQAMghAVgTQAYgWAngJQAZgGAvgDIAAgGQNvgDOVAuQAZACAMADQAUAGALAMQALAOABAZIgEArQgDAnAGBRQABBHgeAkQgTAYglARQgOAGg0ARQh3Aoh8BZQhXA/h+BzQgwArgWASQgpAgglAQQg1AZhJAFQgtAEhXgEQgzgCgegGQgtgKgcgYQgSgPgRgdQgTghgLgQQgog/gxgBQgOAggBAkQgCAjAMAgQAFANAMAaQANAZAEANQAHAWgBAVQgCAXgNAPQgPARgbAEQgYADgagHQgMgEgjgNQgcgMgTgDQgagEgYAKQgZAKgIAXQBgBLBxAzQAsAUAQAIQAgASAUAVQAXAZAEAjQAEAkgWAXQgTgEgQgWIgbgoQgVgdgjgRQghgQgngEQghgDgpAFQgaACgwAJQAGAmgDAZQgFAigXAPQgQALgoAAg");
	this.shape.setTransform(104.6,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209.3,132.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhIB+QgKgEgKgJQgKgJACgEQACgGAIgHQAQg5ANgoQATg5APglQgDgLACgEQAEgIAJAAIAIABIAHAAQAJABAJADQALADACAGQAAADgDARQAKAuATBEQAOgIAJABQAKACAGAJQAFAJAAAKQAAAQgUAAIgHAAIgGgBIALAkQAKALAAAHQAAAIgPAEQgHACgHAAQgSAAgCgHQgEgOABgDIgNgoIhCALIgJAdQACALgCAHQgCAHgIAAQgEAAgHgCgAgeAiIArgJIgQhGg");
	this.shape.setTransform(122.9,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhDB5QgMgGAAgFQAAgGAGgJIgEi+QgFgJAAgFQAAgHAGgEQAFgEAMAAQAOAAAKAHQAJAGAAAHQAAAEgIAPIADBZIAIAAQAKgZARgnQAPgZAPgXIAEgJQAEgIAHAAQAKAAALAIQAOALgCAMQgBAHgPAFIgZAqIggA5QASAcAkAhQAJACACACIACADQAFAEAAAGQAAAIgHAIQgGAIgGADQgHAEgHAAQgGAAgDgDQgCgBgCgIIgDgJQgWgWgZgoIgQAAIAAA3QAGAKAAAIQAAAFgFADQgEACgKAAQgLAAgMgFg");
	this.shape_1.setTransform(102.9,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAlB9QgIgFAAgKIAAgDIAAgEIgBgHIgWh7IgjB0QgBADADAFIACAIIAAAEQgCAGgKAEQgJAEgLAAQgaAAAAgOQAAgFAGgFQAGgEAAgDIA4irIgBgHIgBgHQAAgFADgGQAEgFAGgHQAMgMALAAQAIAAAFAGQAFAGAAAJIAAAIIgBAIIAAADIAiCxQABADAFADQAGAEABADIABAFQAAAJgLAGQgKAHgMAAQgIAAgGgEg");
	this.shape_2.setTransform(84.5,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhIB+QgKgEgKgJQgKgJACgEQACgGAIgHQAQg5ANgoQATg5APglQgDgLACgEQAEgIAJAAIAIABIAHAAQAJABAJADQALADACAGQAAADgDARQAKAuATBEQAOgIAJABQAKACAGAJQAFAJAAAKQAAAQgUAAIgHAAIgGgBIALAkQAKALAAAHQAAAIgPAEQgHACgHAAQgSAAgCgHQgEgOABgDIgNgoIhCALIgJAdQACALgCAHQgCAHgIAAQgEAAgHgCgAgeAiIArgJIgQhGg");
	this.shape_3.setTransform(64.7,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgyB4QgNgNAAgFQAAgFAGgKIgIiyQgFgKAAgHQAAgFACgCQAFgDAEgBIAMAAQALAAAJADIA+gKQALgGAEAAQAIAAAGAMQAGALAAAKQAAAIgFAFQgFAFgGAAQgFAAgNgGIg+ALIADA3QAIgGALgDQAJgDAPAAQAyAAABAsQABAOgMAXQgeAyglAZQgEAJgLABIgBAAQgOAAgNgNgAgVANIACA/QATgLAKgNQAMgOAFgPQABgLgEgGQgDgFgJgBQgWABgLAMg");
	this.shape_4.setTransform(45.8,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhCB+IgOgIIgKgKQgDgFAAgDIAAgGIAFgIIgHi1IgDgIIgCgGIgBgFQAAgHAFgDQAGgDAJAAIAMACIAMAEQAFADADADQAEAEgBAFQABAHgEAEIgHAJIADA9IAKgEIAMgEIAMgCIAJgBQAVAAAOALQAIAFADAJQADAJABALQgBALgDALQgEALgHALQgGAKgHAKIgPATIgRAPIgQALQgDAHgFACQgFADgEAAQgFAAgIgEgAgmACQgJAEgGAFIAEA9IAMgIQAIgGAIgHQAIgJAFgJQAHgJgBgHQAAgLgDgEQgEgDgKABQgKgBgJADgAA8B0QgMgGABgFQgBgGAHgJIgFi+QgGgJAAgFQABgHAFgEQAGgEALAAQANAAALAHQAJAGAAAIQAAADgHAPIAEC2QAFALAAAHQAAAGgEACQgFADgJAAQgLAAgNgFg");
	this.shape_5.setTransform(27,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag3B8QgMgGABgFQgBgGAGgJIAAi+QgGgJABgFQgBgHAGgEQAGgEALAAQALAAALAFQAbgMARAAQAOAAAIAGIAJAIIAJAIQAFAIABAKQAAAdgcA0QgeA1gTAAQgDABgHgIIAAA9QAGALAAAHQAAAGgFACQgEADgJAAQgLAAgNgFgAgThEIAABFQAEAAAGgGQAHgIAHgQQAKgSAFgMQAFgNAAgJQAAgLgJAAQgMAAgXAYg");
	this.shape_6.setTransform(8.4,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,35.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Ag1HrQgtgBghgeQgVgVgYgzIgkhNQgPghgPgKQgLgFgEgFQgCgDgBgEIgCgBQgFgCAAgDIgFgCQgEgDABgGQAAgFACgDIAHgIQAEgFAAgDIAAgIQAAgCAHgEQAFgDADgFIADgJQADgFACgCIAIgEIAHgEIADgEQACgCACAAIACAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIACABIADgHIAHgUIAHgcQADgLAKgWQAJgWADgMQAFgUAAgrQgBgigEgNQgEgMgUgcQgQgYgCgRQgDgXATgnIAOgbQAKgWAEgKQAHgSABgQIABggQACgNAJgTQALgXADgJIAFgXIAGgYQAIgWARgPIAEADQAFAGgDAKQgBAEgHAOQgGAMgEAaIgBACQACAEAAAGIABA5QAAAOgBAHIgGARQgBAGADAQQACAJAEAEQAEACAHAAQAMACARAGIAdAKQAVAGAZABQARAAAggBQAegCAOgGQACgHASgEQAKgDAPgMQAQgMAJgDQANgEABgEQgBgIACgEQABgCADgCIAFgDQADgDgBgMQAAgFAFgRIACgQQgPguADgeQACgRAKAAIAEABIADAaQADgBADACIABgBQAGAIAAAOIgCAZIABAMQAKAjAQAhQASAjADAKQAGAUAAApQAAAvgGAWQgDAMgJAWQgTA3gDBEQgEBEAMBGIALA/QAFAkgDAbQgCATgIAKQgGAGgKAFIgTAGQgcAJg4AhQg0AgggAHQABATgZAOIgTALQgJAGgGAHQgIAQgHAFQgHAHgNAAIgEgBg");
	this.shape.setTransform(27.6,49.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,98.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBB7QgHgFgEgHQgDgEAAgFIAAgLIgBgIIgCgGQAAgDACgDQACgDAKAAQAIAAAGADQAGADADAFQACAEAAAFIAAAKIACAJIACAJIgCAGQgEAGgHAAQgIABgFgGgAgRAuQgKgIAAgKQgBgGAGgPQAFgNANgYQAXgwAAgLQAAgJgEAAQgFAAgIAJQgGAIgMARIgFAHQgCAFgEADQgEACgFAAQgIAAgHgGQgHgFAAgIQAAgGAEgFQAEgEAHgCQAQgVAMgKQAIgGAHgEQAIgDAIAAQANAAAOAKQAIAHAEAHQAEAIAAAJQAAASgSAfQgaAtgDAJIgDAIIABADIAAAEIABAMQAAAFgDADQgEACgEAAQgIAAgJgIg");
	this.shape.setTransform(231.4,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag6B/QgGgBgFgDQgFgDgEgFQgDgFAAgGIABgFIACgEIAGgFIAKgFIAHgLIAKgNIAKgRIAKgSQgKgBgJgDQgJgDgIgGQgGgHgEgGQgEgJgBgKQABgKACgHQACgJADgHQAJgPANgMQAMgMAQgJQAQgJANgHQAPgFANgEQAOgCAHAAQAGAAAEACQAEACADAEIADAIIACAJIgBAEIgCAEIgEAEQgCACgEgBIAAC6QAFALAAAHQAAAFgEADQgFACgKAAIgLgBIgLgFIgJgEQgEgDAAgDQAAgGAGgJIAAhMIgCABIgQAZIgMAZIgNAWIgJATIgDALIgFAFIgGACIgGAAgAAFhCQgIAEgIAHQgJAGgFAGQgEAHAAAIIABAGIADAGIAGAFQADACAGAAIAIgBQACgGAEgCQAEgBAFAAIADABIAKgGIAAgzg");
	this.shape_1.setTransform(215.6,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgZB3QgMgJgKgSQgQgfAAg+QAAgZADgWQADgVAHgRQAQgoAegBQALAAAKAFQAKAFAIAMQALASAGAZIAFASQACARgUAAQgMAAgKgFQgKgGAAgHIADgNQgBgOgDgHQgEgHgEAAQgIABgFAdQgEAoAAAXQABArADAPQADANADAHQAEAGAFAAQAFAAAGgSQAGgPAAgLQAAgJAIgFQAGgFAKAAQAJAAAGAEQAIAEAAAHQAAAEgDAFIgFAJQgHAWgMATQgIAMgJAHQgIAGgJAAIgBABQgOAAgNgJg");
	this.shape_2.setTransform(199.8,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABVB6QgMgGgBgEQABgHAFgJIgLh/IgsBrQAEANgCAGQgCAFgHACQgGACgKAAQgXAAgDgKQgEgHABgLIgyhvIAICGQAGALAAAHQAAAGgFACQgFADgJAAQgMAAgLgGQgMgGAAgEQAAgHAFgJIgGjBQgFgIAAgFQAAgJAGgDQAFgEALAAIAKABIAKgCQAJAAAGADQAFADACAFQACADgFAQIA+CNIA8iNQgFgQABgDQACgFAFgDQAGgDAKAAIAGABIADAAQAOAAAJAHQAKAHAAAGQABAEgIAQIAJC5QAFALAAAHQAAAGgEACQgFADgJAAQgLAAgMgGg");
	this.shape_3.setTransform(179.2,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgrB3QgNgKAAgHIABgEIABgIIAAjBIgBgDIgBgEQAAgMAUABQANAAAEAEIAigEIAGgEQAGgCAFgBQAJAAAJAKQAHAJAAAJQAAAGgDADQgGAGgLABIgOABIgiAGIAABJIALgDIAIgCQALAAALAHQALAHAAAIIgBAGQgFALgMAAIgTABIgPADIAAAzIAYgFQAEgDAHgBQAKAAAKAJQAKAIAAAJQAAAJgKAEIgKABIgOACQgnAKgEABQgHAAgNgKg");
	this.shape_4.setTransform(158.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ABUB6QgLgGAAgEQgBgHAGgJIgLh/IgsBrQADANgBAGQgCAFgHACQgFACgLAAQgXAAgCgKQgFgHAAgLIgxhvIAICGQAFALAAAHQAAAGgEACQgFADgJAAQgLAAgMgGQgNgGAAgEQAAgHAHgJIgHjBQgFgIAAgFQAAgJAFgDQAGgEALAAIAJABIALgCQAJAAAGADQAGADACAFQABADgFAQIA+CNIA8iNQgFgQABgDQACgFAFgDQAGgDAJAAIAHABIADAAQAOAAAKAHQAKAHAAAGQgBAEgHAQIAJC5QAFALAAAHQAAAGgFACQgEADgJAAQgLAAgNgGg");
	this.shape_5.setTransform(138.2,15.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhJCgQgKgGAAgFQAAgFAGgKIgEjEQgFgJAAgFQAAgHAGgEQAFgEAMAAQANAAALAHQAJAGAAAHQAAAEgIAPIADCAQAjhSAghCIgBgGQAAgPAVAAQANAAALAGQALAGAAAIQAAAEgIAPIAAC3QAFAKAAAIQAAAKgSAAQgLAAgMgFQgNgGAAgFQAAgGAGgJIAAh9QgWA3gsBdIgDAHQgFAHgKADIgFAAQgKAAgKgGgAgviCIgBgMQAAgIAFgFQAGgEALAAQAHAAAEADQAFACABAEQAAAGgDAFQADAKANAAQAGAAAFgEQAFgFADgJQgDgJADgEQAEgFAKAAQAIAAAHAFQAGAEAAAIQgBAFgFADQgJAjgpABQgoAAgJgag");
	this.shape_6.setTransform(114.2,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhIB+QgKgEgKgIQgKgKACgEQACgGAIgHQAQg5ANgnQATg6APglQgDgMACgDQAEgIAKAAIAHABIAHAAQAJAAAKADQAKAEACAFQABAEgEARQAKAuATBFQAPgJAJACQAJABAGAJQAGAKAAAJQAAAQgVAAIgHAAIgGAAIALAjQAKALAAAIQAAAHgPAEQgHACgHAAQgSAAgCgGQgDgPAAgDIgNgoIhCALIgIAdQACAMgDAGQgCAHgIAAQgEAAgHgCgAgeAiIAsgJIgRhGg");
	this.shape_7.setTransform(93.6,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgwBuIgQgQQgFgHAAgFQAAgJAGgFQAFgEAIAAQAHAAAGACIAKAHQAGAEAEAAQACABAGgGIAOgUQAUgaAAgLQAAgGgFABQgFAAgPAJQgNAKgEAAQgMAAgKgIQgFgEgCgFQgDgFAAgHQAAgDALgEQAPgHAEgCQAPgNANgSQAHgIAEgIQAEgIABgGQgBgFgHgBQgPAFgZATIgIAHQgGAEgFAAQgGAAgFgCQgFgDgEgFQgJgJAAgQQAAgGAKgDIASgCIAmgWQAVgKAPAAQAIAAAGADQAHADAEAFQAEAGACAGQACAIAAAIQAAASgIASQgEAKgFAHQgGAIgHAGQATAFAJAIQAKAHAAAHQAAAOgJATQgJASgRAXQgjAugSAAQgLAAgVgRg");
	this.shape_8.setTransform(74.5,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ABVB6QgNgGAAgEQAAgHAGgJIgLh/IgsBrQAEANgCAGQgCAFgHACQgFACgLAAQgXAAgDgKQgEgHABgLIgyhvIAICGQAFALABAHQgBAGgEACQgFADgJAAQgLAAgMgGQgMgGAAgEQAAgHAFgJIgGjBQgFgIAAgFQAAgJAGgDQAFgEALAAIAKABIAKgCQAKAAAFADQAFADACAFQACADgFAQIA+CNIA8iNQgFgQABgDQACgFAFgDQAGgDAKAAIAGABIADAAQAOAAAJAHQALAHAAAGQAAAEgIAQIAJC5QAFALAAAHQAAAGgEACQgFADgJAAQgLAAgMgGg");
	this.shape_9.setTransform(45.2,15.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgrB3QgNgKAAgHIABgEIABgIIAAjBIgBgDIgBgEQAAgMAUABQANAAAEAEIAigEIAGgEQAGgCAFgBQAJAAAJAKQAHAJAAAJQAAAGgDADQgGAGgLABIgOABIgiAGIAABJIALgDIAIgCQALAAALAHQALAHAAAIIgBAGQgFALgMAAIgTABIgPADIAAAzIAYgFQAEgDAHgBQAKAAAKAJQAKAIAAAJQAAAJgKAEIgKABIgOACQgnAKgEABQgHAAgNgKg");
	this.shape_10.setTransform(24.8,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAgB6QgMgGAAgFQAAgGAGgJIAAhZQgSAogfAAQgOAAgJgKQgKgKgFgTQgJggAAhKIgDgHIgCgHQAAgFAJgEQAJgFALAAQAWAAAAASIgCAHIgCAKQAAAvAEAXQADAWAHAAQAHAAAHgIQAGgKAHgUQAHgSADgPQADgPAAgMQgGgLAAgEQAAgHAGgEQAGgDALAAQAOAAAKAHQAJAGAAAHQAAADgIAQIAAC6QAGAKAAAIQAAAFgFACQgEADgJAAQgMAAgMgFg");
	this.shape_11.setTransform(9.1,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.9,35.2);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.oblako();
	this.instance.setTransform(-1.6,-0.8);

	this.instance_1 = new lib.oblako();
	this.instance_1.setTransform(338,-0.8);

	this.instance_2 = new lib.oblako();
	this.instance_2.setTransform(678.4,-0.8);

	this.instance_3 = new lib.oblako();
	this.instance_3.setTransform(1016.8,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-0.8,1360.4,141);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.639)").s().p("AgyBIQgUgegBgqQABgpAUgeQAWgeAcAAQAdAAAWAeQAUAeAAApQAAAqgUAeQgWAegdAAQgcAAgWgeg");
	this.shape.setTransform(7.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,20.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,298);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,23);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,74);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,40);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvCoIgSgLIgOgNQgGgGAAgEIACgJIAGgLIgKj0IgDgKIgDgIIgBgHQAAgJAHgEQAHgEAMAAIARACIAPAGQAHADAFAFQAEAFAAAGQAAAKgEAGIgJALIADBSIAOgFIAQgFIAOgDIAMgBQAgAAASAOQAKAHAEAMQAFANAAAPQAAAPgFAPQgFAOgJAPQgIAOgLANIgWAZIgXAVIgTAPQgEAJgHADQgGADgFAAQgIAAgKgFgAgJABQgMAGgIAHIAEBSIARgKQAJgIAKgLQALgMAHgMQAIgMAAgKQAAgOgFgGQgFgDgNAAQgNAAgKADg");
	this.shape.setTransform(70.6,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgVCtQgQgHAAgHQAAgIAHgMIAAjxIggAGQgMAKgIACQgUACgFgdIAAgIQAAgNAGgHQAGgIAMgCIAVAAIB1gRQANgMAGgBQALgBALAPQAJANACANQACALgFAIQgGAIgHAAIgZgFIgoAFIAAD/QAHANAAAKQAAAHgGAEQgGADgNAAQgNAAgQgHg");
	this.shape_1.setTransform(48.8,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag6CgQgRgNAAgKIABgFIABgLIAAkEIgBgEIgBgEQAAgQAZAAQASAAAFAHIAwgHIAHgFQAJgEAFAAQANAAALANQAKAMAAANQAAAHgEAEQgIAJgOABIgTACIgvAHIAABjIAQgFIALgCQAOAAAPAKQAPAJAAAMIgCAGQgGAPgQACIgaAAIgVAFIAABEIAhgHQAGgFAJAAQAOAAANALQANAMAAALQAAAMgNAGIgNABIgTACQg1APgFAAQgKAAgRgNg");
	this.shape_2.setTransform(29.3,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABKDGQgQgIAAgGQAAgIAHgMIAEg1IiLAPIAAAoQAGAOAAAKQAAAHgGAEQgGAEgMAAQgVAAgNgIQgOgIAAgGQAAgIAIgMIAAg6QgHgMAAgHQAAgKAGgFQAGgFANAAQADgBAJAGQAQg0APg5QAPg8AOhEQgHgLAAgIQAAgKAIgFQAHgEAPAAQANAAAJAEIAVAIQAHgEAOAAQASAAAOAJQAMAJAAAJQAAAFgKAUIAMDDIAOgDQAOAAAHAJQAHAJAAAJQAAAFgKAVIgEBCQAHAOAAALQAAAHgGADQgHAEgMAAQgPAAgQgIgAglBCIBLgGIgOjMIgGgDg");
	this.shape_3.setTransform(5.2,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhBCTQgOgLgHgKQgGgJAAgHQAAgMAGgGQAIgHALAAQAJAAAHAEIAOAJQAIAGAGAAQADABAIgJIAUgaQAagjAAgPQAAgHgHgBQgHAAgUAOQgSANgGAAQgPABgOgLQgGgGgDgHQgDgHAAgIQAAgGANgGQAVgHAFgFQATgRATgWQAKgMAFgLQAGgKABgJQgCgGgJgCQgTAGgjAaIgMAJQgHAHgGgBQgJABgGgEQgHgDgGgGQgMgNAAgWQAAgIANgDIAYgEIA0gdQAdgNATAAQALgBAJAEQAIAEAGAHQAFAHADAKQAEAJAAALQAAAYgMAaQgFAMgIAKQgHALgKAHQAaAIAMAJQANAKABALQgBATgMAYQgLAZgXAfQgwA9gYABQgPgBgcgXg");
	this.shape_4.setTransform(-20.2,-3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhhCpQgOgEgNgMQgNgMACgHQACgHALgKQAVhNATg1QAZhNAUgyQgEgPADgFQAFgLANAAIAJABIAKABQAOAAAMAEQAOAFACAHQABAEgFAXQANA/AaBcQAUgMAMADQANACAIAMQAHAMAAANQAAAWgbAAIgKgBIgIAAIAPAvQAOAPAAAKQAAALgVAGQgJACgKAAQgYAAgCgJQgFgTABgFIgSg1IhaAPIgLAmQADAQgDAJQgDAJgKAAQgHAAgIgDgAgpAtIA7gLIgXhfg");
	this.shape_5.setTransform(-45.9,-2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhKCmQgQgIAAgGQAAgIAHgNIAAj/QgHgMAAgHQAAgKAIgFQAHgFAPAAQAQAAAOAHQAmgQAWAAQASAAAMAHIAMAMIALALQAIAKAAAOQAAAmglBGQgoBIgbAAQgEAAgIgKIAABTQAHAOAAAKQAAAHgGAEQgGADgNAAQgPAAgQgHgAgZhcIAABeQAEAAAJgJQAJgLALgWQANgXAGgRQAHgRAAgMQAAgPgMAAQgRAAgeAgg");
	this.shape_6.setTransform(-70.9,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-23.6,164.4,47.2);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgvCoIgSgLIgOgNQgGgGAAgEIACgJIAGgLIgKj0IgDgKIgDgIIgBgHQAAgJAHgEQAHgEAMAAIARACIAPAGQAHADAFAFQAEAFAAAGQAAAKgEAGIgJALIADBSIAOgFIAQgFIAOgDIAMgBQAgAAASAOQAKAHAEAMQAFANAAAPQAAAPgFAPQgFAOgJAPQgIAOgLANIgWAZIgXAVIgTAPQgEAJgHADQgGADgFAAQgIAAgKgFgAgJABQgMAGgIAHIAEBSIARgKQAJgIAKgLQALgMAHgMQAIgMAAgKQAAgOgFgGQgFgDgNAAQgNAAgKADg");
	this.shape.setTransform(70.6,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgVCtQgQgHAAgHQAAgIAHgMIAAjxIggAGQgMAKgIACQgUACgFgdIAAgIQAAgNAGgHQAGgIAMgCIAVAAIB1gRQANgMAGgBQALgBALAPQAJANACANQACALgFAIQgGAIgHAAIgZgFIgoAFIAAD/QAHANAAAKQAAAHgGAEQgGADgNAAQgNAAgQgHg");
	this.shape_1.setTransform(48.8,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag6CgQgRgNAAgKIABgFIABgLIAAkEIgBgEIgBgEQAAgQAZAAQASAAAFAHIAwgHIAHgFQAJgEAFAAQANAAALANQAKAMAAANQAAAHgEAEQgIAJgOABIgTACIgvAHIAABjIAQgFIALgCQAOAAAPAKQAPAJAAAMIgCAGQgGAPgQACIgaAAIgVAFIAABEIAhgHQAGgFAJAAQAOAAANALQANAMAAALQAAAMgNAGIgNABIgTACQg1APgFAAQgKAAgRgNg");
	this.shape_2.setTransform(29.3,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABKDGQgQgIAAgGQAAgIAHgMIAEg1IiLAPIAAAoQAGAOAAAKQAAAHgGAEQgGAEgMAAQgVAAgNgIQgOgIAAgGQAAgIAIgMIAAg6QgHgMAAgHQAAgKAGgFQAGgFANAAQADgBAJAGQAQg0APg5QAPg8AOhEQgHgLAAgIQAAgKAIgFQAHgEAPAAQANAAAJAEIAVAIQAHgEAOAAQASAAAOAJQAMAJAAAJQAAAFgKAUIAMDDIAOgDQAOAAAHAJQAHAJAAAJQAAAFgKAVIgEBCQAHAOAAALQAAAHgGADQgHAEgMAAQgPAAgQgIgAglBCIBLgGIgOjMIgGgDg");
	this.shape_3.setTransform(5.2,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhBCTQgOgLgHgKQgGgJAAgHQAAgMAGgGQAIgHALAAQAJAAAHAEIAOAJQAIAGAGAAQADABAIgJIAUgaQAagjAAgPQAAgHgHgBQgHAAgUAOQgSANgGAAQgPABgOgLQgGgGgDgHQgDgHAAgIQAAgGANgGQAVgHAFgFQATgRATgWQAKgMAFgLQAGgKABgJQgCgGgJgCQgTAGgjAaIgMAJQgHAHgGgBQgJABgGgEQgHgDgGgGQgMgNAAgWQAAgIANgDIAYgEIA0gdQAdgNATAAQALgBAJAEQAIAEAGAHQAFAHADAKQAEAJAAALQAAAYgMAaQgFAMgIAKQgHALgKAHQAaAIAMAJQANAKABALQgBATgMAYQgLAZgXAfQgwA9gYABQgPgBgcgXg");
	this.shape_4.setTransform(-20.2,-3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhhCpQgOgEgNgMQgNgMACgHQACgHALgKQAVhNATg1QAZhNAUgyQgEgPADgFQAFgLANAAIAJABIAKABQAOAAAMAEQAOAFACAHQABAEgFAXQANA/AaBcQAUgMAMADQANACAIAMQAHAMAAANQAAAWgbAAIgKgBIgIAAIAPAvQAOAPAAAKQAAALgVAGQgJACgKAAQgYAAgCgJQgFgTABgFIgSg1IhaAPIgLAmQADAQgDAJQgDAJgKAAQgHAAgIgDgAgpAtIA7gLIgXhfg");
	this.shape_5.setTransform(-45.9,-2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhKCmQgQgIAAgGQAAgIAHgNIAAj/QgHgMAAgHQAAgKAIgFQAHgFAPAAQAQAAAOAHQAmgQAWAAQASAAAMAHIAMAMIALALQAIAKAAAOQAAAmglBGQgoBIgbAAQgEAAgIgKIAABTQAHAOAAAKQAAAHgGAEQgGADgNAAQgPAAgQgHgAgZhcIAABeQAEAAAJgJQAJgLALgWQANgXAGgRQAHgRAAgMQAAgPgMAAQgRAAgeAgg");
	this.shape_6.setTransform(-70.9,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-23.6,164.4,47.2);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouse();
	this.instance.setTransform(-15,-14.1,0.787,0.787);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-14.1,29.9,40.9);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(24.2,31.3,0.503,0.503,90,0,0,24.2,31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.34,scaleY:0.34,y:61.3},4).to({scaleX:0.5,scaleY:0.5,y:31.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.4,19.2,31.5,24.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(69.4,22.6,1,1,0,0,0,69.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.9,45.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(69.4,22.6,1,1,0,0,0,69.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:39.4},39).to({x:69.4},40).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("A3YEMIAAoXMAuxAAAIAAIXg");
	this.shape.setTransform(44.5,19.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.2,-7.5,299.6,53.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(67.5,17.6,1,1,0,0,0,67.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:43.1},39).to({x:67.5},40).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("A3YEMIAAoXMAuxAAAIAAIXg");
	this.shape.setTransform(37.6,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.2,-10.9,299.6,53.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(82.2,23.6);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(62.2,23.6);
	this.instance_1._off = true;

	this.text = new cjs.Text("РАЗДЕТЬ", "60px 'Marker Felt'", "#FF0000");
	this.text.lineHeight = 67;
	this.text.setTransform(0,0,0.682,0.682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.text}]},40).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:62.2},39).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},39).to({_off:true,scaleX:0.68,scaleY:0.68,x:0,y:0,text:"РАЗДЕТЬ",font:NaN,color:NaN,textAlign:0,lineHeight:67.2,lineWidth:237},40).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("A3YEMIAAoXMAuxAAAIAAIXg");
	this.shape.setTransform(69.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.2,-3.4,299.6,53.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(27.7,49.2,1,1,0,0,0,27.7,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,98.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(23.8,12.2,1,1,0,0,0,23.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,24.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(-233.2,-66.9,1.104,1.104,0,0,0,67.5,17.5);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(23.8,12.2,1,1,0,0,0,23.8,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(-291.5,5.6,1,1,0,0,0,82.2,23.6);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(27.7,49.2,1,1,0,0,0,27.7,49.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Ag1HrQgtgBghgeQgVgVgYgzIgkhNQgPghgPgKQgLgFgEgFQgCgDgBgEIgCgBQgFgCAAgDIgFgCQgEgDABgGQAAgFACgDIAHgIQAEgFAAgDIAAgIQAAgCAHgEQAFgDADgFIADgJQADgFACgCIAIgEIAHgEIADgEQACgCACAAIACAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIACABIADgHIAHgUIAHgcQADgLAKgWQAJgWADgMQAFgUAAgrQgBgigEgNQgEgMgUgcQgQgYgCgRQgDgXATgnIAOgbQAKgWAEgKQAHgSABgQIABggQACgNAJgTQALgXADgJIAFgXIAGgYQAIgWARgPIAEADQAFAGgDAKQgBAEgHAOQgGAMgEAaIgBACQACAEAAAGIABA5QAAAOgBAHIgGARQgBAGADAQQACAJAEAEQAEACAHAAQAMACARAGIAdAKQAVAGAZABQARAAAggBQAegCAOgGQACgHASgEQAKgDAPgMQAQgMAJgDQANgEABgEQgBgIACgEQABgCADgCIAFgDQADgDgBgMQAAgFAFgRIACgQQgPguADgeQACgRAKAAIAEABIADAaQADgBADACIABgBQAGAIAAAOIgCAZIABAMQAKAjAQAhQASAjADAKQAGAUAAApQAAAvgGAWQgDAMgJAWQgTA3gDBEQgEBEAMBGIALA/QAFAkgDAbQgCATgIAKQgGAGgKAFIgTAGQgcAJg4AhQg0AgggAHQABATgZAOIgTALQgJAGgGAHQgIAQgHAFQgHAHgNAAIgEgBg");
	this.shape.setTransform(27.6,49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(104.6,66,1,1,0,0,0,104.6,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209.3,132.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(175.4,-49.4,1,1,0,0,0,69.4,22.6);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(104.6,66,1,1,0,0,0,104.6,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(119.5,17.6,1,1,0,0,0,119.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:103.5},39).to({x:119.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,238.9,35.2);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(119.5,17.6,1,1,0,0,0,119.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("A3YEMIAAoXMAuxAAAIAAIXg");
	this.shape.setTransform(107.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-11.4,299.6,53.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(-522.6,76.9,1,1,0,0,0,171,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:157.3},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-695.2,5.6,1360.4,141);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(25.5,20,1,1,0,0,0,25.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,40);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(25.5,20,1,1,0,0,0,25.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:20.1,scaleY:1.1,y:18.1},19).to({regY:20,scaleY:1,y:20},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,40);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _12.png
	this.instance = new lib.Символ7();
	this.instance.setTransform(250.5,41,1,1,0,0,0,25.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// _06.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(314,33,1,1,0,0,0,27,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:43},19).to({y:33},20).wait(1));

	// _09.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(271.5,20.5,1,1,0,0,0,0.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.6,regY:3.6,rotation:10.4,x:271.6,y:20.6},19).to({regX:0.5,regY:3.5,rotation:0,x:271.5,y:20.5},20).wait(1));

	// _03.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(238.5,114,1,1,0,0,0,42.5,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

	// Слой 6
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(227,249.5,1,1,0,0,0,7.2,10.2);
	this.instance_4.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance_4.cache(-2,-2,18,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196,-35,131,302.3);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,15.9,29.9,40.9);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(255.8,172.2,1,1,0,0,0,24.2,31.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:575.8},0).wait(40).to({rotation:90,x:735.8,y:202.2},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240,160,31.5,24.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(-124.7,-50.4,1,1,0,0,0,15.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(410.1,152.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ19(), 3);

	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(491,128.2,1,1,0,0,0,27.7,49.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ18(), 3);

	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(112,202.9,1,1,0,0,0,104.6,66);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Символ16(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// GIRL
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(287.5,211.5,1,1,0,0,0,42.5,149);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.639)").s().p("AgKAPIgGgFQgDgGABgEQABgHAFgGQAHgFAFACIAAgCIAAABQAGABAFAEQAFAEACAGQABADgBACIgCAEIgCAFQgFAGgHABQgEAAgIgEg");
	this.shape.setTransform(-49.9,259.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4}]}).wait(1));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("EhCHAKFQgIgFAAgHIABgJQACgGAFgEQAGgDAFABIAAgBIABAAQAKABAGAJQACAEABAEQAAAFgEAFQgBAEgDADQgDACgFABIgDAAQgHAAgFgEgEg8RAIAQgJgEgBgIQgBgFABgEQACgHAFgEQAFgEAHACIAAgCQAOADAEANQACADgBAEIgDAEIgCAGQgCACgFACIgHABQgFAAgEgCgEBB9AHcQgFAAgGgEIgGgEQgDgGABgHQABgHAFgFQAHgGAGADIAAgCQAOACAEAMQABAEAAADIgCAFIgGAJQgEADgFAAIgCAAgEg/ygJlQgHgDgCgIQgBgEACgHIAEgIQAGgGAIACIAAgBQAKABAFAIQAEAFAAAGIgDAHIgEAHQgEADgEAAIgDABQgGAAgFgDg");
	this.shape_1.setTransform(338.9,187.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgisAPLQgIgBgTgIQgOgEgRgEQgfgGgugCQg0gBgagCQgKgBgEgCQgIgEABgIQACgJAMgBIASAAQgFgGADgFQABgGAIAAIBQgBQAmAAATAEIAZAEIAXABQAGAAAXAIQAXAGATACQAKABAEADQAFAEAAAIQgBAIgGAFQAHAKgGAFQgCADgJAAIgqABQgOAAgHgCgEglfAMPQgrgCghgGQgIgBgDgCQgFgDAAgGQABgGAFgDIAAgBIAAgFIgGgDQgEgCgBgFQAAgFADgEQACgDAHgEQAAgIALgDIAAABQAQAAAaAFQAgAIAKABIAYACQAJACAVAIIAjAOIAOACIAPAHIAPABQALACAAAHQAAAGgGADIgGABQgDACgIAAIg1ABIhOgBgEgggAKnIgTgHQgJgCgBgCIgFgIQgDgDgIgDQgIgCgDgEQgNAKgPgJIgIgFQgGgDgFAAQgMgBgNAAQgIAAgEgCIgBAAQgEACgHgBQgUgCgbgJQgNgFgJgFIgNgHQgFgDgLAAIgQgDIgMgEIgJgBIgMgBIgBAAIgtgBQgNAAgDgHQgBgDABgCQgBgEABgEQACgIAIAAIANACIACgFQADgFAGAAIAzABIAfABIAPABIAdAFQAGABADACQAEAEgCAGIAXAAQAIgBAFACQAJAEgCAIQgCAEgFACIgJABIgpgBQAZAMAcAEIAKADIAFgBIAAAAQAbgBANABIAXAEQAVAEAJADIANAHIASAOIAHAEQALAGAMgBQALgBADABQAEACABAGQABAFgEAEQgEAEgKAAQgJAAgLgDgA8ZJYQgGgCgBgFQgNAAgFgDIgFgFIgIgDIgHgCQgZgDgkgQQgwgVgQgEQgRgFgfgBQgjgCgNgDQgQgCgZgIIgpgLQgdgGg6AAIjFgBQgVAAgKgFQgOgHgJgWQgPgkgChJQgDiGALh9QAFg7AJggIAAgDIgqABIgxABQgcgCgUgEQgZgGgUgPQgVgQgJgVQgIgSgCglQgdmZAWmhQAAgMAFgIQAGgKAJADIAAgDQAWAEgDAoIgFBlMAiiAAAIAEAAIAEACIADACIACACIACACIACABIAAACIABACIABACIAAACIAAACIAAAAIABACQAFAMAAARIABERQAAAdgKALIgFADIgeAAQgGAAgHADIgDABIgJgBQgaAAgcARQgTALgcAZQiFB2g9BCIgkAmQgVAWgTANQgWAQgnAVIh0A9QALAIgIAPQgHAOgOACQgKACgSgDIgDgBQgDAGgHAGQgKAHgMACQgHACgCABQgCADABAHQACAOgHAKQgNAPglgEIiggTQgfgEgSAAQgaAAgVAFQgSAFgWAMIglAXQgQAKgKgBQgPAAgLgPIgQgaQgLgSgNgLIgOgMQgHgGgEgGQgDgGgBgHIgFgHIgtg+QgWgegSgKIgGgDQgEADgEAGQgFAKAFANQACAGAEAFIABAGIAFAKIAbAhIAPAYIALAPQADAEAAAFIARAcQAJAQAEALQAJAYgKAUIgKAMQgHAIgDAFQgEAIgEARQgFAQgMACQACAIgGAIQgGAJgJAAQgKABgPgLIgagTQABAOgCAHQgEANgIACQgHADgJgDIgQgHQgSgFgJgDIgYgMQgKgEgXgGQg4gNgkgEIAHAFIAZAOIAmAQQAOAGAvAYQAlATAZAIQAaAHAJAFQAJAFALAJIASARIAZASIAaATQAHAGAVAVQAKAJACAJIAAAAIAAABQAFAGAAALIgCARIAAA7QAAAQADALIADANIABAPQAAARgDAGQgHAMgNgCQgFgBgFgEIgDgEQgPgDgNgOQgIgIgNgSQgfgqgSgSIghgeIgTgOQgOgKgfgIQhIgShLgCQACAEAAAEQAIAEAEABIAGADIAKAAQAPAAAHAEQAIAFABAKQAAAJgIAGQgHAFgPAAQgZAAgPgCIALAFIAbANIAbAHQARAEAKAFQALAGAVATIARAQIATAQQASANAEAGIALAOIANAKQAGAGACAHIACABQAEACACAEIACAEIAFADQAEADABAEIAEALQAAAFgFAEIgGABIgEAAgA3cACIAEgCIgEAAIAAACgEggxAIwIgVgDQgYgDgSgJIgIgDQgLgBgGgCIgIgEQgFgCgKAAIgagBQgJAAgDgDQgFgEACgGQADgGAHAAIAAgBQAXgBAYADQAHAAAFADIAIAEQAEACAKgBQADAAAEADIAIAEQAFADALACIAaAEQALABAEADQAEADABAEQACAEgDADQgDAEgGAAIgGAAgEgmYAIkQgJgBgCgCQgDgDAAgEQAAgEADgDQACgCAKgBIBKgEQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIAAgBIAwABQAHAAADACQADACABADQABAEgCADQgDAEgFABIgKABQgVgBgnADQgjADgUAAIgGAAgAeimxIgEgBIgEgBIgEgCIgCgCIgCgCIgCgCIgCgCIgBgCIgCgCIgCgCIgBgCIgBgCIgBgCIgBgCIAAgCIgBgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIgBgCIgCgCIAAgCIgCgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIgBgCIgBgCIgBgCIgCgCIgCgCIgCgCIgCgCIgEgBIgEgCIgEgBIgDgBIgFgBIgDgCIgDgCIgCgCIgDgCIgDgCIgCgCIgCgCIgBgCIgBgCIgBgCIgBgCIAAgCIAAgCIAAgCIgCgCIAAgCIAAgCIAAgCIgCgCIgCgCIgCgBIgCgCIgBgCIgBgCIAAgCIgBgCIAAgCIAAgCIgBgCIgBgCIAAgCIgBgCIgBgCIAAgCIgBgCIAAgCIAAgCIAAgCIgBgCIAAgCIgBgCIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIgBgCIgBgCIAAgBIAAgCIgBgCIgBgCIgCgCIgCgCIgCgCIgCgCIgBgCIgBgCIgBgCIAAgCIAAgCIAAgBIAAgBIgJAAIgBABIgEAAIgFACIAAACIAAACIAAABIgCACIAAACIgCACIAAACIgBACIgBACIgBACIgBACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIgBABIgBACIgBACIgBACIgCACIgDACIgCACIgBAAIgDABIgEABIiIAAIgBABIgEABIgEAAIgWABIgCABIgDAAIgEABIgZABIAAACIAAACIAAACIAAACIAAACIABACIAAACIABACIAAACIABACIAAACIAAACIAAACIAAACIAAACIAAACIABACIABACIAAACIAAABIACACIACACIACACIAAACIABACIABACIABACIABACIABACIABACIABACIAAACIAAACIAAACIAAACIAAACIgCACIAAACIgCACIgBACIgCACIgDACIgCABIgDABIgEAAIgHABIgCABIgEABIgDACIgCABIgBABIgEABIgDAAIgIACIgCACIgFABIgBACIgCACIgBACIgCACIgCACIgDACIgDACIgEACIgEAAIgIAAIgEAAIgFgCIgDgCIgCgCIgCgCIgBgCIgBgCIgBgCIgBgCIgBgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIACgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIABgCIABgCIAAgCIACgCIACgCIABgCIADgCIADgBIADgBIAEAAIAAAAIAEAAIAEACIADACIADABIABACIJzAAIABgBIADgBIAEAAIA6AAIAEAAIAFACIACACIADACIACACIABACIABACIAAACIABACIABACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIgBACIgBACIAAACIgBACIAAACIAAACIAAACIgBACIAAABIgBACIgBACIAAACIAAACIAAACIAAACIgCACIAAACIgBACIgBACIgBACIgBACIgCACIgCACIgCACIgCACIgCACIgBACIgBACIgBACIgCACIgBACIgBACIgBACIgCACIgCACIAAACIgCACIgCACIgCABIgCACIgDACIgDACIgCACIgCACIgCACIgBACIgBACIgBACIgCACIgCACIgCACIgCACIgCACIgCACIgDACIgCACIgEACIgCACIgEACIgCACIgCACIgDACIgDACIgEACIgDACIgCACIgCACIgCACIgCACIgDABIgCACIgBACIgCACIgCACIAAACIgBACIgBACIgBACIgBACIgBACIgBACIgCACIgCACIgCACIgCACIgCACIgEACIgCACIgCACIgDACIgCACIgBACIgBACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIgBACIgBACIAAACIAAACIAAACIgBACIAAACIgBACIgBACIgBACIgBACIgBACIAAACIAAACIAAACIgCACIAAACIgCACIAAACIgBACIgBACIAAACIgBACIgBACIAAACIAAACIAAACIgBACIgBACIAAABIAAACIgBACIAAACIgBACIgBACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIgBACIgBACIAAACIAAACIAAACIAAACIAAACIAAACIgBACIgBACIAAACIgBABIgBACIgCACIgCACIgCACIgEACIgBACIgEAAIgEABIhZAAgEAojgKDQgEgBgDgBIgEAAQgMAAgFgCQgKgDgDgIQgBgDAAgHIAAgwIgBgPIgCgLQAAgIAGgFQAGgGAIAAIAjAAQAKAAAGACQAHAEACAGQADAIgBARIACAJIABALIgBAdIgBAMQgCAFgHAFQgHAFgFACIgHABQgEACgEAAIgCAAgEApegKPQgBgEAAgHIAAhHIABgKQADgEAEgDQAGgFAFABIABAAQAJgCASAEIASAAQAMACAFAFQAFAGAAAPIAAAQQAAAIgCAEIgDAIQgDAIgBALIgBALQgDANgSADIgNABIgOAAIgKABQgOAAgEgLgEAm/gKJIgWAAQgNgDgDgKIgBgyIADgOIgDgLQgBgIAGgHQAGgGAJAAIAAgBIAfABQAIAAADABQAIAEACAJQACAFAAALIgBA1QAAAOgEAFQgEAGgKABg");
	mask.setTransform(262.7,221.9);

	// Слой 3 - копия
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(165.2,240.9,1,1.325,0,180,0,171,70.5);
	this.instance_5.alpha = 0.23;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAnCAMFQgEgCgFgFQgFgFgBgEQgCgEADgQQABgKAAgTIAAgeQACgOAHgGQADgBAKgEIALgDIABAAQAGABAOAAQAOABAEAIQADAEgBAKIAABSQgBAEgEAFQgDAFgDACQgEADgJAAIgVAAQgKAAgGgCgEAqHAMEQgIgCgDgHQgCgEAAgHIAAhJQAAgMACgFQAFgJANAAIgBgBIApABQALgBADADQAJAEABAKQACAGAAAMIAAA9QAAAOgEAFQgGAGgRAAIgeABQgKAAgGgCgEAocAMEQgGgCgDgGQgDgFgBgOQgCguACgXIABgLQAFgLANAAIAAAAIAsADQAPABAFAGQAEAGAAALIAABDQgCAKgCAEQgDAIgGACQgEACgHgBIglABQgJAAgEgCgAokLqI5ugUQiEgChJACQhwABhcAKQgYADgNgBQgWAAgOgIQgXgMgSgoQgthggPiEQgJhRAAidQABiKAEhCQAHhvAWhXQAGgbAfhmQAYhPAHgzIANhsQAHg/ARgpQAXg1AvgdQA0ggAwASIAFgTQNcAqNqAJQA4AAAdAEQAwAHAhATQAQAJAJAMQAKAOgFAOQgEANgOAGQgNAFgPgCQgLgDgOgIIgYgPQgtgag0AGQg4AFgWApQAJARAPAKQARAKASAAQAKgBAWgFQAVgGALACQARAAAKARQALAQgLALQAJAJARgBQAJAAAVgEQAQgCANALQAOALgKALQAOgMASAPQAQANAHAWQAcBegLBjQgJBlgwBWQAOgFAJARQAHAPgBATIgKCfQAQAHgFAZIgJAsQAAARAPAWIAbAjQAdAtgXBBQgOAtgqA5QAGgFAMABQAQADAGAMQAKAVgQAfIgOAZQgHAOgCAMQAfARAPAWQATAcgQAWQASADACAWQACAVgOAMQgNALgUAEQgMACgSAAIgIAAgAX9LEIAAABIAAABQgIgBgIAFIAFjYIAChmQAAgKACgFQgDgIAAgJQAAgJADgMIAFgVQADgZADgNQAFgYAQgaQAJgOATgYIAJgLIAJgKQAUgYAPgJIAEgCQAVgRAbgRIAcgRQAkgSAygJQAhgEA8gEIgBAAQB5gDBDAGQAQAAAIAFIAHAFIAeAIQAMAEAEACQAEADAHAIQAIAGAPALQALAJAJAOQAFAJAEADQADAEAHAEQAJAJAGAXIAEAVQAEASADAKQAHAQAAAGQACAJgDAIIAAAHIAEGLIACADQACAGgDAHIAAALIgBAAQgIgHgNgBIAAABQgKgCgJAHIgGAFQlGADlFAJIgIABQgNgKgUABgEAo2AJ3QgMAAgFgDQgFgEgCgHIgCgLIACgcQABgMAAgFIgBgLQgCgGACgFQABgGAFgFQAGgEAHABIAAgBIAlAAQAMAAAHAEQALAFgCAPIgBAKIgBASIABAWIgBAPQgDAKgGAEQgGAEgOAAgEAqNAJ0QgIgCgDgGQgEgEAAgMIABg2IACgRQADgKAGgFQAGgEAGAAIAAAAIAWAAQAQAAAHADQAMAFAEAKIABBEQAAAQgHAGQgFAHgTAAIgaAAQgJABgFgCgEAnTAJ0QgHAAgGgCQgHgDgDgHQgCgFAAgIIAAgiIABgLIABgEQAAgDgDgDQgDgKAHgHQAFgIAKAAIAAgBIAmABQAMAAAFAEQAGAEACAJIgBARQgBAUAAAPQACATgFAHQgEAHgGACQgFABgJAAgEAqmAHvQgHAAgGgCQgGgDgGgIQgGgIgBgHIADgKIAAgJIABguIACgNQACgFAFgEQAGgDAFAAIAAgBIAZADIAIACIAKAKIAGAEIAHAFQAEAFADAIIABAQIgBAlIgBAKQgCAFgKAIIgIAEQgFACgMAAgEAosAHuQgIgCgDgJQgCgFAAgLIAAg7QgCgFAAgFQAAgFADgFQAGgJALAAIAjgBIAPABQAKAEAEAEQAFAHgBASIABAjIACAUQAAARgKAHQgEACgLABIgkABQgMAAgDgBgEAnLAHpQgGgFAAgKIAAgQIgBgVQgCgOABgIIABgLIgBgKQAAgHAFgGQAHgGAHABIABAAQAFgCAJACIAPACIAJgBIAIABQAMACABANQABAEgDAOIAAAlIABAPIABAJQABAOgMAGQgEABgJAAIgbABQgOAAgGgFgEApbAFuIgPgDQgNABgFAAQgMgBgHgJQgIgJAEgMIACgHIgCgIQgBgGAAgHQAAgGABgDIAFgIIAAgBIADgGIAAgBIAFgEIADgCIAJgBIgBAAIABAAQAIgBAMADQARADAKAHIAGAGQACACADAJIAEAKQADANgBAJQAAAIgBAFQgBACgJAKIgHAFQgDACgGAAIgGAAgEAqWAFqQgFgCgEgGQgEgJADgUIACgQQACgGABgCIAFgEIAJgJQAGgHAIgDQADgBADAAQAUgBAIADIAKAGIAGAGQACADABAMIAAAfIgBAMQgCAJgEACQgFAEgLAAIgjABQgMgBgGgCgEAnpAFrQgJgBgFgCQgFgCgDgIQgCgEAAgJQAAgFABgEIADgGIABgHIgBgMIABgJQACgFAFgEQAFgDAHAAIAAAAQAMAAAIAEIAGACIAEACQAEABADAEQAEAGABAEQABAEAAARIAAARQgBAKgGAFQgGAFgOAAgAGRDtQgJgEgEgJQgBgFAAgLIAAhMIgBgaIgCgSIgBgfIAAggQAAgPADgFQAGgGALAAIAAAAIBlAAQANAAAGACQAIAGAAASIAAC6QAAANgEAGQgIAMgZAAIg6AAQgYABgLgGg");
	mask_1.setTransform(260.8,66.8);

	// Слой 3
	this.instance_6 = new lib.Символ10();
	this.instance_6.setTransform(165.2,70.5,1,1,0,0,0,171,70.5);

	this.instance_6.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 1
	this.instance_7 = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,0,848.1,341);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,9.8,25.4,34.8);


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
p.nominalBounds = new cjs.Rectangle(-10.6,-10.6,76.3,76.3);


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

	// Слой 2
	this.cir = new lib.sprite113();
	this.cir.setTransform(162.6,83.1,0.499,0.499,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).to({x:-149.4},4).to({x:162.6},5).wait(1));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(165.5,29,1,1,0,0,0,119.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-146.5},4).to({x:165.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,0,299.6,102);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.txt.gotoAndPlay(1);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.txt.gotoAndPlay(5);
		
		    }
		
			
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 50;
		this.fon.y = - stage.mouseY / 50;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.txt = new lib.Символ15();
	this.txt.setTransform(135.4,64.6,1,1,0,0,0,149.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.setTransform(0,0.1,1,1,0,0,0,20,19.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401,122.7,1464,351.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
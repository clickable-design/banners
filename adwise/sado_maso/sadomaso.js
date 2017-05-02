(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/a5188ccde417b1fb93bf0cf390303e0e.png?1470827374778", id:"a5188ccde417b1fb93bf0cf390303e0e"},
		{src:"images/bita.png?1470827374779", id:"bita"},
		{src:"images/button1.png?1470827374779", id:"button1"},
		{src:"images/button2.png?1470827374779", id:"button2"},
		{src:"images/MA8KpFnZW_o.jpg?1470827374779", id:"MA8KpFnZW_o"},
		{src:"images/mouse.png?1470827374779", id:"mouse"},
		{src:"images/razvrat_02.png?1470827374779", id:"razvrat_02"},
		{src:"images/razvrat_06.png?1470827374779", id:"razvrat_06"},
		{src:"images/razvrat_09.png?1470827374779", id:"razvrat_09"}
	]
};



// symbols:



(lib.a5188ccde417b1fb93bf0cf390303e0e = function() {
	this.initialize(img.a5188ccde417b1fb93bf0cf390303e0e);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.bita = function() {
	this.initialize(img.bita);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,348);


(lib.button1 = function() {
	this.initialize(img.button1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,132);


(lib.button2 = function() {
	this.initialize(img.button2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,132);


(lib.MA8KpFnZW_o = function() {
	this.initialize(img.MA8KpFnZW_o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,604,378);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.razvrat_02 = function() {
	this.initialize(img.razvrat_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,181);


(lib.razvrat_06 = function() {
	this.initialize(img.razvrat_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,275);


(lib.razvrat_09 = function() {
	this.initialize(img.razvrat_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,213);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF99","#FFFFCC"],[0,1],-2.9,-52.4,-2.9,52.5).s().p("At9Y/MAG+gx9IM3AAMAIGAx9g");
	this.shape.setTransform(89.5,160);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,320);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bita();
	this.instance.setTransform(0,22.4,0.389,0.389,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.5,139.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egw9AZiMAAAgzDMBh7AAAMAAAAzDg");
	this.shape.setTransform(313.5,163.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,627,327);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ATBCFIAYhIIgJhUIgQAPIgEAKQgBADgFAIQgIAOgHAQIgMAgIgOAAQgKgZgQghQgSgfgPgTQABAjgDA0IgCA3QAAAKgDADQgUACgjAJIAAgTQANgFAHgHQAIgHAEgLQAHgXAAgjIAAgSQAAg0gJgSIgLgYIANgDIACgCIgBgBIgCAAIAnAAIAUAlIARArQAHAMAIAJQAIALAKAIQAIgPAVgrIAOghQAIgOAGgJIArAAQgNAQgDAJQgDAJAAAVIAAA/QAAA7ACAHQAHALAKAVIgiAGgANeCCQgIgDAAgJQAFgHAFgTQADgNACgwIABgYIACgNQACgFgBgJQAAgMgCgMIgDgVIgLgKIAEgCQABgBAAgEIgBgGIBJABQARAAAHgDQAIgDAEgKIATAAIAHAkQAAALgGAQIgHgDIgGgCIgGgUIgPgBQgHAAgIgDIgiAAIAAA6QAAAQABAEQABADAHAAIAQAAQAKAAADgDQADgCAHgIIAPAAQgHAdgDAEIgOAJQgGgGABgFQAAgFACgBIADgDIgxAAIAABJQAFAIAFADQAGADAFAAIAEAAIABAAIBNgJIAMgPIAGACIgGAqIgYgEIggAAIhKAJQgMAAgIgDgAFOB7QgNgIgMgQQgZgggBgaIgDgcIAAgEQAAgqAjgfQARgPARgHQAQgIAOAAQALAAAOADIATACIAKgBIAKgEIAGBAIgJAAQgHgRgSgTQgKgKgIgEQgJgFgIAAQgDAAgQAJQgQAKgOAVQgOAWAAAiIACAeQABAUAUARQATARAcAAQAtAAAIgdIAIgiQACgFABAAIADACIAEABIAIBYIgIAKIgKgkIgKACQgNARgZAKQgeAKgHAAQgPAAgOgIgABoCDIgFAAIgbgBQgQgCgLgCIAAgEIAOgJQAFgIAAgaIAAggIAFgdIAAgIQgNAAgQAJQgVAGgRAEIgTAIIAAAqQABAKABAIQACAHADAEQAFAHAMAEQgDAHgEADQgGACgJAAIgMAAQgSAAgJgCQgJgBAAgGIAGgEQAFgEAAgKQABgFACgGIAEgLIAAiSQAAgFgDgFQgFgFgHAAIAAgIIACADIAIgHQADgDAHAAQAbAAAHACQAGACAAAEIgJAOQgEAEgCAMQgCALAAASIABAbQABAIABAEQAAAAABABQAAAAABABQAAAAABAAQABAAABgBIA6gOIAPgGQAHgCgBgDIAAg0IAAgKIgJAAIgHgFIAAgIIA7AAIAAAIQgFAEgCAGQgDAGgCAIQgCASAAAvIAABBQABAXACAHQACAIAFAAIAFgBQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAAAIQAAAFgCACQgCACgFAAIgEAAgAndCDIgFAAIgbgBQgQgCgLgCIAAgEIAOgJQAFgIAAgaIAAggIAFgdIAAgIQgNAAgQAJQgVAGgQAEIgWAIIAAAqQAAAKACAIQACAHADAEQAFAHAOAEQgCAHgHADQgGACgIAAIgNAAQgSAAgJgCQgJgBAAgGIAGgEQAFgEAAgKQAAgFADgGIAEgLIAAiSQAAgFgDgFQgFgFgHAAIAAgIIACADIAIgHQADgDAHAAQAaAAAJACQAHACAAAEIgMAOQgDAEgBAMQgDALAAASIABAbQABAIABAEQAAAAABABQAAAAABABQAAAAABAAQABAAAAgBIARgDIAsgLIAQgGQAFgCAAgDIAAg+IgJAAIgHgFIAAgIIA7AAIAAAIQgEAEgEAGQgCAGgBAIQgCASgBAvIAABBQAAAXADAHQACAIAGAAIADgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAAAIQAAAFgCACQgCACgFAAIgEAAgAtwCDQgSAAgJgCQgKgBAAgGIAHgEQAFgEAAgKQAAgFADgGIAEgLIAAiSQAAgFgDgFQgFgFgHAAIACgFIAIgHQADgDAHAAQAaAAAJACQAHACAAAEIgMAOQgDAEgCAMQgCALAAASIAABqQAAAKACAIQACAHACAEQAGAHAOAEQgCAHgHADQgGACgIAAgAryCBIgHgCIgtAAIgEACIgHABQgEAAgEgCQgDgCAAgEQAAgFAMgDQAMgEAAgZIABgtIAEgTIAAhKQAAgJgEgIIgIgPQAAgDACgBIAFgCIAGAAIACACQACACAGAAIA8ABQARAAAIgDQAHgCAFgKIATAAIAFAUIABAQQABAKgGARIgOgFIgFgUIgOgBIgQgDIgjAAQgFAAgEACQgEACABAHIAAAbQAAADACACQABABADAAIAFAAIAEgBIAJAAIAPADQAIABAOAIQAOAGAKAGQAJAFAFAHQAJAPAAAWQgBAngXAVQgMALgOAFQgNAFgRAAgAsBACIAABYQAAAFAFADQAEAEAGAAQAMAAAKgEQAJgDAHgGQAQgNAAgbQAAgbgMgKQgNgKgMgDIgEABIgHAAIgQgBQgBACgEABgAwBCBIgHgCIgtAAIgEACIgHABQgEAAgEgCQgDgCAAgEQAAgFAMgDQAMgEgBgZIACgtIAEgTIAAhKQAAgJgEgIIgIgPQAAgDACgBIAEgCIAHAAIAFACQAEACAXgBQAJgFACAFQABAFgFAIIgGAJQgCADAAAHIAAAbQAAADACACQABABADAAIAFAAIAEgBIAJAAIAQADQAHABAOAIQAOAGAKAGQAJAFAFAHQAJAPAAAWQAAAngYAVQgMALgOAFQgOAFgQAAgAwQACIAABYQAAAFAFADQAEAEAGAAQAMAAAJgEQAKgDAHgGQAQgNAAgbQAAgbgMgKQgNgKgMgDIgFABIgGAAIgQgBQgBACgEABgAy4CBIgHgCIguAAIgFACIgFABQgFAAgDgCQgEgCAAgEQAAgFAMgDQALgEAAgZIACgtIAEgTIAAhKQAAgJgEgIIgIgPQAAgDADgBIADgCIAIAAIABACQACACAHAAQAEAAAFgCIAIgCIAxAAQALAAANAOQAMAOAAAOQAAAJgKAOIgLAOQAPAGAJAGQAJAFAFAHQAIAPAAAWQABAngYAVQgMALgNAFQgOAFgRAAgAzIACIAABYQAAAFAEADQAFAEAGAAQAMAAAJgEQAKgDAIgGQAPgNAAgbQAAgbgNgKQgMgKgMgDIgFABIgHAAIgPgBQgBACgEABgAzDhBQgDACgBAHIAAAbQAAADACACQACABAEAAIAEAAIAEgBIAKAAQAFAAAIgEIANgFQgEgEAAgDIABgEIADgCQAAgNgHgEQgFgEgRAAIgJAAQgHAAgDACgAL/B+IgJAAIgKADIAAgQIAGgNQAAgFgJgSIgSggQgIgNgHgPQgHgQgFAAQgEAAgEAEQgDADgCAHQgFAUAAANQAAAQACAKQACALAFAGQAKAKAIAIQgGAIgOAFQgWAEgNAAIgLABQgHAAgDgDQgDgCgBgJQAIgFAGgZQAFgYAAgqIgBhcIgQgCIAAgHIAIgIIA0gCIgDAfIAAAuIAZgeQANgPABgHQgBgDgEgFQgDgFgBgDQABgDAEgEQAEgDAGAAQAQAAAXAFIATAGQAHACADADIg1AeQgKAGgFAHQgEAGgBAHQABALAQASIASAWIAQAeQAOAcAGAEQAGAFAOAGQAOAFAEAMIgOAJQgFACgRAAgAmHB+IgLgCIgeAAQAAgEAGgNQAHgNgBgUIAAhNQAEgBABgJQABgIAAgWIAAgPIgKgNIgMgOQAIgCAEAAIAEAAQAEAAAFgDIAAADIA9gIQAQAAAVAPQAUAPAAAdQAAALgDAKIgIARIgQAPQgJAJgLAEQgLAFgMAAIgOgBIgGgDQgDAAgCAGIgBALQAAAjAGARIAQAWQAAACgCADQgDACgFAAQgEAAgKgDgAl8AQIACABQALAAAJgDQAJgDAIgGQAOgJAAgYIAAgLIgBgFIABgCQgGgMgKgHQgEgEgHgCQgGgBgIAAQgKAAgEAIQgEAIAAAUIABAnIgBAOIADgBgAiQB9IAAgIIADgLQAEgKAAgFQAAgIgFgQIgEgSIgwABQgKAkAAAIQAAAEAFAHQADAIAAAEIAAAFIAAAFIhCAAIgDgEQAAgBgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAEgOAKgFQAIgEALgPQAFgIAFgLIAJgZQAJgeAIgOIALgaQAEgJAHgbQAHgaAOAAQAGAAAEAMQAFALAFAYQAIAvAKAaIARA3QAAACAJAPQAJAOAAAIIgBAGQgCACgUgBIgbABQgKgBgBgCgAi+AlIAogBIgTg3QgHAHgOAxgAAGhgQgNgHgHgLQgEgIAEgGQACgDAEAAQAFAAAEADQAJAGABALQABAEAJABQAJABAPgDQALgGgBgGQAAgHAEgDQANgKAHALQADALgKAKQgFAFgIAEQgJADgMADIgPABQgIAAgJgEg");
	this.shape.setTransform(102.7,18);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,4.4,256.9,27.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(63.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-0.4,152,23.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.button1();
	this.instance.setTransform(-18.5,26.3,0.752,0.752);

	this.instance_1 = new lib.button2();
	this.instance_1.setTransform(-19.1,27.9,0.756,0.756);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,26.3,218.1,99.3);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqB4IAahNIgJhaIgSAQIgFANQAAADgGAJQgIAMgIASIgNAjIgOAAQgJgcgSghQgTgjgQgVQAAAogCA2IgCA7QAAALgEACQgUADgmAJIAAgUQANgEAIgIQAJgIAEgMQAHgYAAgmIAAgSQAAg6gJgTIgMgaIANgDIADgCIgBAAIgCgBIApAAIAWAoIATAuQAGAOAJALQAJAKAIAHQAKgNAVgxIAQgjQAHgPAIgKIAuAAQgOASgEAJQgDAKAAAXIABBDQAAA/ACAIQAHALALAYIglAGgAoZBuQgOgJgNgRQgagjgDgbIgCgcIAAgEQAAgwAlghQATgQASgIQARgIAQAAQALAAAPADIAUADIALgCIALgEIAGBEIgKAAQgGgSgUgUQgKgKgKgFQgJgFgIAAQgFAAgQAKQgRAKgPAXQgQAXAAAnIACAeQACAVAVATQAUASAfAAQAwAAAIggIAJgkQABgFACAAIADACIAEABIAJBeIgIALIgLgmIgLACQgNASgcALQggALgHAAQgQAAgPgJgAJCB0IgFgCIhCABIACgPIAQgOQAIgHAAgFIAAhcQgEgBgBgEIgIABIgGAAIgKgBIgFAAIhNCKIg3gCIABgLIAYgFIATgsQALgaARgcQAQgeALgFIgMgOIgIgOQgDgGAAgFQAAgHADgIQAEgHAGgIQANgPAMAAIA2AAIAHACQAGADAFAAQAIAAABgCIACgDIAHAAIAEACQADACAAADIgJAQQgDAJAAAJIAABPIADAUIABAeIABATQAAAbANAEQAMAEAAAEQAAAFgEACQgDACgFAAgAHjhZQgGAEAAANIACADIABAEQAAADgDAFIANAFQAIAEAHAAIAKAAIAJACQADAAACgCQACgCAAgEIAAgcQAAgHgDgDQgEgCgHAAIgJAAQgTAAgGAFgAEWBwIgBgJIAEgMQAEgKAAgFQAAgJgFgRIgFgTIgzAAQgKAnAAAIQAAAEAEAIQAEAIAAAFIgBAGIABAFIhIAAIgCgFIgDgDQAEgPAKgFQAJgFALgPQAGgIAFgMIAKgcQAKgdAIgSIAMgbQAFgKAHgdQAIgcAPAAQAFAAAFANQAFAMAFAZQAKAzAKAcIATA7QAAACAJAQQAJAPAAAIIgBAHQgBACgVgBIgeABQgKgBgBgCgADjASIAsgCIgVg6QgGAHgRA1gAjsBwIgBgJIAEgMQAEgKAAgFQAAgJgFgRIgFgTIgzAAQgKAnAAAIQAAAEAEAIQAEAIAAAFIgBAGIABAFIhIAAIgCgFIgDgDQAEgPAKgFQAJgFALgPQAGgIAFgMIAKgcQAKgdAIgSIAMgbQAFgKAHgdQAIgcAPAAQAFAAAFANQAFAMAFAZQAKAzAKAcIATA7QAAACAJAQQAJAPAAAIIgBAHQgBACgVgBIgeABQgKgBgBgCgAkfASIAsgCIgVg6QgGAHgRA1g");
	this.shape.setTransform(42.3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-10.3,119.4,24.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(95.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-7.9,212.2,24.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiB6QgHgEAAgHQAGgHAFgVQADgOACg0IABgXIACgQQACgGAAgKQAAgMgCgNIgEgWIgLgLIADgCQACgCAAgEIgBgGIBOAAQASAAAIgDQAHgDAGgKIAUAAIAHAmQAAAMgFARIgIgDIgHgCIgGgVIgPgBQgJgBgIgCIgwgBIAACvIAWApIgjABQgTAAgHgFgAjMB9IgEAAIgdgCQgTgBgLgDIAAgEIAPgJQAFgJABgcIAAgiIAEgfIAAgHQgNABgRAGQgWAHgTAEIgWAJIAAAtQAAALACAIQABAIAEAEQAGAIAPAEQgDAIgHACQgGADgKAAIgNAAQgTAAgKgCQgKgCAAgGIAGgEQAHgEAAgLQAAgFACgHIAFgMIAAicQAAgGgEgFQgEgFgIAAIAAgJIACADIAIgIQAEgCAHAAQAdAAAHACQAJACAAAFIgMAOQgEAFgCAMQgCAMAAAUIABAdQAAAKABAEQACACAEgBIARgDIBAgUQAHgCgBgDIAAhDIgKAAIgIgFIAAgJIA/AAIAAAJQgEADgDAHQgDAGgBAKQgDASABA1IAABEQgBAZADAHQADAIAFAAIAFgBQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABIABAIQAAAGgCACQgDACgFAAIgFAAgAA5B3IgMgCIggAAQAAgEAGgOQAHgOAAgVIAAhTQAEgBABgJQABgJAAgXIAAgQQAAgCgLgNIgMgPQAHgCAGAAIAEAAQAEAAAFgEIAAAEIBBgJQASAAAWAQQAWARAAAfQAAAMgDAKIgJAUIgRAPQgKAJgLAFQgMAFgNAAQgKAAgFgCIgHgCQgDAAgCAGIgBALQgBAmAIATIARAXQAAADgDACQgDACgFAAQgFAAgKgDgABFACIABAAQAMAAAKgCQAKgCAHgGQARgMgBgZIgBgRIABgDQgGgMgLgIQgFgEgHgCQgHgCgIAAQgKAAgEAJQgGAIAAAWIACAzIgCAFIAFAAgAFCB3IgBgJIAEgMQAEgLAAgFQAAgIgFgRIgFgUIgzABQgKAmAAAJQAAAEAEAIQAEAIAAAFIAAAGIAAAFIhHAAIgDgFIgDgDQAFgPAJgFQAJgFALgQQAGgIAFgMIAKgbQALgeAHgRIANgcQAEgKAHgcQAIgcAPAAQAGAAAFAMQAFANAFAZQAJAyAKAcIATA7QAAACAJAQQAJAQAAAIIgBAHQgBACgVgBIgeAAQgKAAgBgCgAEPAYIAsgBIgVg7QgGAHgRA1g");
	this.shape.setTransform(28.1,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-8.4,77.3,25.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj4OqQgKgKAAgQQgBgPAJgMQADgFAHgFIAMgKQAKgKAIgOIAJgSIAJgNQACgEAAgPQAAgKADgNQADgPAFgIQAFgIAMgGQAHgEAIgCQgGgKgBgMQgBgTANgLQAUgRAvARQA4AVAjAFQA1AHAmgSIAagMQAQgGAMADQAKACAJALIAQATQAeAhAxAFQAwAFAogYQAmgWAYgqQAXgoAGgvQAIg7gShVQgXhfgIgwQgThuAThyQAThuA2hlIAYguQAOgaAGgVQAHgbgDgZQgDgcgPgTQgMgPgsgaQgmgXgKgXQgEgLgCgSIgEgeQgDgOgihAQgYgvALgeQAEgKAQgXQAOgVACgOQAEgagcghQgigngwgYQgvgYgzgFQgjgEgRANQgGAEgKANQgKALgHAEQgRAJgTgLQgTgMgDgTQgDgTAKgTQAJgRARgMQAOgJAWgHQAKgDAcgHIABgCQA4AHAiAIQAxAKAmARQAsAVAhAdQAkAhARAoQASAsgGAuQgGAxggAgQAgArAMAbQAUAqgEAlQA4ATAlAzQAkA0AAA7QAAAtgXA4IgtBfQhcDAAgCgQAFAZANAuQAOAvAFAXQARBQgNBkQgIA8gQAmQgWAygsAlQgrAlg2AOQg1ANg4gNQgxgLgmgbQgLAFgPADQgwALg0gEQgQgCgHgDQgdAAgggNQgNgEgIgIIgFgHIgDgBIgEgBQABAKgGALIgGAKIgFAKQgBAGAAANQgCAYgYAlIgYAmQgHAMgFAEQgIAHgRAEQgKACgJAAQgTAAgMgLgApeOaQgOgOADgUQAEgTARgJQAGgDAOgDQAZgGAQgCQAVgDAEgBQALgEATgTQATgRAOgBIAEAAIAAgBQAOAAALAKQALAKADAOQACANgGAOQgFANgMAIIgLAIIgIAMQgEAFgKAFQgQAJgLACIgZACIgZAFIgYAEIgLABQgXAAgNgNg");
	this.shape.setTransform(61.9,95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.8,190);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.MA8KpFnZW_o();
	this.instance.setTransform(-302,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302,-189,604,378);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(106.6,168.5,1,1,0,0,0,89.5,160);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-2,-2,183,324);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.razvrat_02();
	this.instance_1.setTransform(0,0,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.9,156);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(81.4,40.6,1,1,0,0,0,89.5,160);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-2,-2,183,324);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.razvrat_06();
	this.instance_1.setTransform(0,0,0.891,0.891);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.1,245.1);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.setTransform(302,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,604,378);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(79.2,120.8,1,1,0,0,0,79.2,120.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.2},9,cjs.Ease.get(-0.51)).to({rotation:0},10,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.5,139.6);


(lib.Символ17 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(301.4,206.1,1,1,0,0,0,313.4,163.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.34},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.setTransform(302,189,1,1,0,0,0,302,189);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,0,627,378);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(14.5,52.5,1,1,0,0,0,64.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:64.5,scaleX:1.23,scaleY:1.23,x:14.2,y:55.2},9,cjs.Ease.get(-1)).to({regX:64.4,scaleX:1,scaleY:1,x:14.5,y:52.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(12.8,15.6,1,1,0,0,0,100.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-6.7},9,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.7,4.4,256.9,59.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.setTransform(110.7,98.5,1,1,0,0,0,31.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.7,rotation:15,x:110.6,y:101.5},9,cjs.Ease.get(-1)).to({regX:31.6,rotation:0,x:110.7,y:98.5},10,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(107.3,62.5,1,1,0,0,0,94.6,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:13.5,scaleX:1.13,scaleY:1.13,x:111.8,y:64.2},9,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,x:110.8,y:65.3},2).to({scaleX:1.13,scaleY:1.13,x:111.8,y:64.2},2).to({regY:13.6,scaleX:1,scaleY:1,x:107.3,y:62.5},6,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(106.3,23.8,1,1,0,0,0,42.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-15},9,cjs.Ease.get(-1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,1.9,212.2,101.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.razvrat_09();
	this.instance.setTransform(-10.1,15.5,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(53.2,100.3,0.907,0.907,0,0,0,62,95);
	this.instance_1.alpha = 0.391;
	this.instance_1.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance_1.cache(-2,-2,128,194);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,10.2,127.1,186.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(106.1,63,1,1,0,0,0,106.5,78);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-15,212.9,339.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(77.6,124.5,1,1,0,0,0,77.5,122.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-125.4,198,372.5);


(lib.Символ18_1 = function(mode,startPosition,loop) {
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


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(92.1,330.8,1,1,0,0,0,23,29);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-2,-2,50,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.Символ18_1();
	this.instance.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.instance_1 = new lib.Символ17_1();
	this.instance_1.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(76.6,29.5,1,1,0,0,0,89.5,160);
	this.instance.alpha = 0.199;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-2,-2,183,324);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(74.3,85.8,1,1,0,0,0,64.2,99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,127.1,186.5);


(lib.Символ16_1 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(96.8,107.2,1,1,0,0,0,109.4,109.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-93.7},9).to({y:107.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-0.3,212.2,101.9);


(lib.Символ15 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(188.8,31.8,1,1,0,0,0,100.8,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:231.8},9).to({y:31.8},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,4.4,256.9,59.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(49.5,105.4,1,1,0,0,0,59.6,91.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-124.3,198,339);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// razvrat_09.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(310.4,228.8,1,1,0,0,0,75.7,166.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.7},12).to({rotation:0},2).to({rotation:-1.7},2).wait(11).to({rotation:0},2).to({rotation:-1.7},2).to({rotation:0},8).wait(1));

	// razvrat_06.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-116.3,262,1,1,0,0,0,81.6,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:81.7,rotation:1.2},8).to({regX:81.6,rotation:0},1).to({regX:81.7,rotation:-1.2,x:-116.2},1).wait(9).to({rotation:1.2,x:-116.3},9).to({regX:81.6,rotation:0},1).to({regX:81.7,rotation:-1.2,x:-116.2},1).to({rotation:-0.5},4).to({regX:81.6,rotation:0,x:-116.3},5).wait(1));

	// razvrat_02.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(91.5,-57,1,1,0,0,0,106.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4},9).to({rotation:0},10).to({rotation:3.7},10).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.8,-72,549.5,381);


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
	this.mouse = new lib.Символ16();
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


// stage content:



(lib.sadomaso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.movieClip_1.x = stage.mouseX;
			this.movieClip_1.y = stage.mouseY;
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.fon.gotoAndPlay(1);
		    this.text.gotoAndPlay(1);
		    this.text2.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.fon.gotoAndPlay(10);
		    this.text.gotoAndPlay(10);
		    this.text2.gotoAndPlay(10);
		}
		
		
		 this.cursor = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// kursor
	this.movieClip_1 = new lib.Символ19_1();
	this.movieClip_1.setTransform(405.3,280.3,1,1,0,0,0,53.2,69.8);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// button
	this.mouse = new lib.Символ42();
	this.mouse.setTransform(530.3,-65.8,1,1,0,0,0,31.3,-75.4);

	this.instance = new lib.Символ11();
	this.instance.setTransform(302.9,282.7,1,1,0,0,0,94.1,94.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.mouse}]}).wait(1));

	// text2
	this.text2 = new lib.Символ15();
	this.text2.setTransform(302.4,180.5,1,1,0,0,0,100.8,32);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text
	this.text = new lib.Символ16_1();
	this.text.setTransform(300.1,387,1,1,0,0,0,94.6,53.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// characters
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(335.5,189,1,1,0,0,0,123.5,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// item
	this.instance_2 = new lib.a5188ccde417b1fb93bf0cf390303e0e();
	this.instance_2.setTransform(188.4,117.3,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// fon
	this.fon = new lib.Символ17();
	this.fon.setTransform(300,137.5,1,1,0,0,0,302,189);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(286,98.5,627,486.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
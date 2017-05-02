(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#011F2F",
	manifest: [
		{src:"images/doma_1.png?1467362443000", id:"doma_1"},
		{src:"images/doma_2.png?1467362443000", id:"doma_2"},
		{src:"images/doroga.png?1467362443000", id:"doroga"},
		{src:"images/girl_03.png?1467362443000", id:"girl_03"},
		{src:"images/girl_07.png?1467362443000", id:"girl_07"},
		{src:"images/girl_10.png?1467362443000", id:"girl_10"},
		{src:"images/girl_14.png?1467362443000", id:"girl_14"},
		{src:"images/girl_17.png?1467362443000", id:"girl_17"},
		{src:"images/girl_21.png?1467362443000", id:"girl_21"},
		{src:"images/girl_25.png?1467362443000", id:"girl_25"},
		{src:"images/girl_28.png?1467362443000", id:"girl_28"},
		{src:"images/mouth_18.png?1467362443000", id:"mouth_18"},
		{src:"images/mouth_25.png?1467362443000", id:"mouth_25"},
		{src:"images/pulya.png?1467362443000", id:"pulya"},
		{src:"images/zombie_03.png?1467362443000", id:"zombie_03"},
		{src:"images/zombie_06.png?1467362443000", id:"zombie_06"},
		{src:"images/zombie_09.png?1467362443000", id:"zombie_09"},
		{src:"images/zombie_11.png?1467362443000", id:"zombie_11"},
		{src:"images/zombie_17.png?1467362443000", id:"zombie_17"},
		{src:"images/zombie_19.png?1467362443000", id:"zombie_19"},
		{src:"images/zombie_23.png?1467362443000", id:"zombie_23"},
		{src:"images/zombie_25.png?1467362443000", id:"zombie_25"}
	]
};



// symbols:



(lib.doma_1 = function() {
	this.initialize(img.doma_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,618,211);


(lib.doma_2 = function() {
	this.initialize(img.doma_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,906,324);


(lib.doroga = function() {
	this.initialize(img.doroga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,52);


(lib.girl_03 = function() {
	this.initialize(img.girl_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,14);


(lib.girl_07 = function() {
	this.initialize(img.girl_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,76);


(lib.girl_10 = function() {
	this.initialize(img.girl_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,271);


(lib.girl_14 = function() {
	this.initialize(img.girl_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,58);


(lib.girl_17 = function() {
	this.initialize(img.girl_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,35);


(lib.girl_21 = function() {
	this.initialize(img.girl_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,216);


(lib.girl_25 = function() {
	this.initialize(img.girl_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.girl_28 = function() {
	this.initialize(img.girl_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,75);


(lib.mouth_18 = function() {
	this.initialize(img.mouth_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,30);


(lib.mouth_25 = function() {
	this.initialize(img.mouth_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,39);


(lib.pulya = function() {
	this.initialize(img.pulya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,110);


(lib.zombie_03 = function() {
	this.initialize(img.zombie_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,136);


(lib.zombie_06 = function() {
	this.initialize(img.zombie_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,95);


(lib.zombie_09 = function() {
	this.initialize(img.zombie_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.zombie_11 = function() {
	this.initialize(img.zombie_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.zombie_17 = function() {
	this.initialize(img.zombie_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,45);


(lib.zombie_19 = function() {
	this.initialize(img.zombie_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,149);


(lib.zombie_23 = function() {
	this.initialize(img.zombie_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,72);


(lib.zombie_25 = function() {
	this.initialize(img.zombie_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,148);


(lib.Символ111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doma_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,906,324);


(lib.Символ110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.doma_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,618,211);


(lib.Символ105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6FCCE1").s().p("EA1XAAaQgHAAgFgIQgFgHAAgLQAAgJAFgIQAEgIAIAAIFhAAQAHAAAFAIQAEAHAAAKQAAALgEAHQgFAIgHAAgEAo4AAaQgGAAgFgIQgFgHAAgLQAAgJAFgIQAFgIAGAAIFiAAQAHAAAFAIQAEAIAAAJQAAALgEAHQgFAIgHAAgAcbAaQgHAAgGgIQgEgHAAgLQAAgKAEgHQAGgIAHAAIFhAAQAHAAAEAIQAGAIAAAJQAAALgGAHQgEAIgHAAgAP8AaQgGAAgFgIQgGgHAAgLQAAgJAGgIQAEgIAHAAIFhAAQAHAAAGAIQAEAIAAAJQAAALgEAHQgGAIgHAAgADeAaQgHAAgEgIQgFgHgBgLQABgJAFgIQAEgIAHAAIFiAAQAGAAAFAIQAFAIAAAJQAAALgFAHQgFAIgGAAgAo+AaQgHAAgFgIQgFgHABgLQgBgKAFgHQAFgIAHAAIFiAAQAGAAAFAIQAFAIAAAJQAAALgFAHQgFAIgGAAgA1cAaQgHAAgFgIQgFgHAAgLQAAgJAFgIQAEgIAIAAIFhAAQAIAAAEAIQAFAIAAAJQAAALgFAHQgEAIgIAAgEgh7AAaQgGAAgFgIQgFgHAAgLQAAgJAFgIQAFgIAGAAIFiAAQAHAAAFAIQAFAHgBAKQABALgFAHQgFAIgHAAgEguYAAaQgHAAgFgIQgFgHAAgLQAAgJAFgIQAEgIAIAAIFhAAQAHAAAEAIQAFAIABAJQgBALgFAHQgEAIgHAAgEg62AAaQgIAAgEgIQgGgHAAgLQAAgJAGgIQAEgIAIAAIFhAAQAHAAAEAIQAGAIAAAJQAAALgGAHQgEAIgHAAg");
	this.shape.setTransform(378.5,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,757,5.4);


(lib.Символ99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgkzAdfQgDgDAAgEQAAgDADgDQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgAu3dMQgCgCAAgEQAAgEACgDQADgDAEAAQAJAAAAAKQAAAJgJAAQgEAAgDgDgEgkHAYQQAAgJAJAAQAEAAACACQADADAAAEQAAAJgJAAQgJAAAAgJgAKBWwQgDgDAAgDQAAgEADgDQACgDAEAAQAEAAACADQAEADAAAEQAAADgEADQgCADgEAAQgEAAgCgDgEA0NAWKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgDgA9jV7QgCgDgBgEQAAgJAKAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgEAAgDgCgA2TUSQgCgDAAgEQAAgEACgCQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgAsFUHQAAgEACgDQADgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgJAAAAgJgEgrmATsQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADACgBAEQABAEgDADQgDADgEAAQgDAAgDgDgAMCSVQgCgDAAgEQAAgJAJAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgDAAgEgCgArXR/QgDgDAAgEQAAgDADgDQADgDADAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgEAAgCgDgAwcR7QgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgDAAgDgDgEA5iAROQgDgDAAgEQAAgEADgDQACgCAFAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgA0RP2QgDgCAAgEQAAgEADgDQADgDAEAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgEAAgDgDgEgrsAPhQgDgDgBgEQABgEADgDQACgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgCgCgEg4vANnQgCgDAAgDQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEQAAADgDADQgDADgEAAQgEAAgDgDgAiqK9QAAgKAKAAQAIAAABAKQAAAEgDACQgCADgEAAQgKAAAAgJgEAmSALAQgCgDAAgEQAAgEACgCQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgATTKxQgDgDAAgEQAAgEADgDQADgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgA6EKbQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgEAAgDgDgEgy3AKPQgDgDAAgEQAAgEADgDQADgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgEAyRAJFQgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgEAAgDgCgEgi9AIlQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAADADQACACABAEQgBAEgCADQgDADgEAAQgEAAgDgDgAtDIMQAAgKAKAAQAEAAACADQACADABAEQgBAEgCACQgCADgEAAQgKAAAAgJgAL+GBQgDgCAAgEQgEAAgDgDQgDgDAAgEQAAgJAKAAQAEAAACADQADADAAADQAKAAAAAKQAAAJgKAAQgDAAgDgDgA4BF/QgDgCAAgEQAAgJAJAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgEAAgCgDgAh5F7QgDgDABgEQgBgEADgDQACgCAFAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgEg8AAFxQgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDgEgveAFqQgCgDAAgEQAAgEACgCQADgDAFAAQADAAADADQACACABAEQgBAEgCADQgDADgDAAQgFAAgDgDgEA70AEjQgCgDAAgEQAAgEACgDQADgCAEAAQAEAAADACQACADAAAEQAAAJgJAAQgEAAgDgCgAXnDuQgEgCAAgEQAAgEAEgDQADgDADAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgA0VDjQgDgDAAgEQAAgDADgDQADgDADAAQAEAAACADQAEADAAADQAAAEgEADQgCADgEAAQgDAAgDgDgAEkDYQABgDACgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgIAAgBgKgEgiOADcQgDgCAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDACQgDADgDAAQgEAAgDgDgAWEBrQAAgJAKAAQAIAAABAJQAAAEgDADQgCACgEAAQgKAAAAgJgApaBQQgDgCAAgEQAAgEADgDQACgDAEAAQAJAAAAAKQAAAJgJAAQgDAAgDgDgA7sBBQgDgDAAgEQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEAAQgEAAgCgCgEg23gACQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDACgEAAQgDAAgDgCgARtgfQgDgCAAgEQAAgEADgDQACgDAEAAQAKAAAAAKQAAAJgKAAQgDAAgDgDgAqNgrQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQACADABAEQgBAEgCACQgDADgEAAQgEAAgDgDgAZogrQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAACADQAEADAAADQAAAEgEADQgCADgEAAQgEAAgDgDgACMhBQgDgDABgDQgBgEADgDQAEgDADAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgEAAgDgDgEgpvgBMQgDgDAAgEQAAgEADgCQADgDADAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgDAAgDgDgEA56gBQQgCgDgBgEQAAgJAKAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAQgEAAgDgDgEgmtgBQQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDgAwxhjQgCgCgBgEQABgEACgDQADgDADAAQAKAAAAAKQAAAJgKAAQgDAAgDgDgAumi9QgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDgEAyHgFkQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQACADABAEQAAAJgKAAQgEAAgDgDgEAoQgFtQgDgDAAgEQAAgDADgDQACgDAEAAQAEAAACADQADADAAADQAAAKgJAAQgEAAgCgDgA4QmJQgCgCAAgEQAAgEACgDQADgDAEAAQAAgJAKAAQADAAADADQACADABADQAAAKgJAAQAAAEgDACQgDADgEAAQgEAAgDgDgEgmCgGfQABgEACgDQADgCAEAAQAEAAADACQACADAAAEQAAAJgJAAQgKAAAAgJgAK9n9QgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgDAAgDgDgEAg2gIWQAAgJAJAAQAJAAAAAJQAAAEgCADQgDACgEAAQgJAAAAgJgAsdoSQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAQgDAAgDgDgEg5WgIyQAAgDACgDQADgDAEAAQAJAAAAAJQAAAKgJAAQgJAAAAgKgA/do0QgCgDAAgEQgBgJAKAAQAJAAAAAJQAAAEgDADQgCACgEAAQgEAAgDgCgAt/qoQAAgEACgDQADgCADAAQAKAAAAAJQAAAJgKAAQgJAAABgJgEAqtgKxQAAgKAKAAQAJAAAAAKQAAAEgDACQgCADgEAAQgKAAAAgJgEgtggLDQgDgDAAgEQAAgDADgDQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgAqcsuQgCgCAAgEQAAgEACgDQAEgDADAAQAEAAADADQADADgBAEQAAAJgJAAQgDAAgEgDgAyWs0QgDgDAAgEQAAgDADgDQACgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgCgDgEAzvgM8QgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAJgJAAQgDAAgDgDgEgiKgM9QgDgCAAgEQAAgKAJAAQAJAAAAAKQAAAEgCACQgDADgEAAQgDAAgDgDgAZjs+QgDgDAAgEQAAgEADgDQADgCAEAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgEAAgDgCgALrtFQgDgDAAgEQAAgDADgDQACgDAEAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDgEgm7gNaQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgDAAgDgDgEA5xgOZQgCgCgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDgEg46gPeQgBgEADgDQADgCAEAAQAJAAAAAJQAAAJgJAAQgKAAABgJgASNvhQgDgDAAgDQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAADgDADQgDADgDAAQgEAAgDgDgEAu/gRLQgBgEADgDQADgDAEAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgJAAAAgJgEAjqgRVQAAgJAJAAQAEAAADADQACADAAADQAAAKgJAAQgJAAAAgKgAEJxwQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADADgBAEQABAEgDACQgDADgEAAQgEAAgDgDgAfTzhQgCgCgBgEQABgEACgDQADgDAEAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgEAAgDgDgA5Hz/QgDgDAAgEQAAgDADgDQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgEAlCgUNQgCgDAAgEQAAgEACgCQAEgDAEAAQADAAADADQACACABAEQgBAEgCADQgDACgDAAQgEAAgEgCgEgw2gUOQgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgEAAgDgCgAjL0SQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgEAAgDgDgEgqWgUoQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAADADQADACgBAEQABAEgDADQgDADgEAAQgEAAgDgDgAUP3kQgEgDAAgDQAAgEAEgDQACgDAEAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgEAAgCgDgAVB4fQgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQACADABAEQAAAJgJAAQgEAAgDgCgAPm5FQAAgJAKAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgKAAAAgJgAqg5BQgDgDAAgEQAAgEADgCQACgDAFAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgFAAgCgDgA4Z5IQgDgCABgEQgBgEADgDQADgDAEAAQADAAAEADQACADAAAEQAAAEgCACQgEADgDAAQgEAAgDgDgEA5pgZvQgBgJAKAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgKAAABgJgEAtHgaGQgCgCgBgEQABgEACgDQADgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgDgAVZ6VQgDgDgBgDQABgEADgDQACgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgCgDgAVp6iQgBgJAKAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgKAAABgJgAFu67QgDgDAAgEQAAgDADgDQADgDAEAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgEAAgDgDgAx67qQABgEACgDQADgCADAAQAEAAAEACQACADAAAEQAAAJgKAAQgIAAgBgJgEg5Bgb6QgDgCAAgEQAAgEADgDQACgDAFAAQADAAADADQACADABAEQgBAEgCACQgDADgDAAQgFAAgCgDgAgX9RQgDgCAAgEQAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape.setTransform(384.5,-169.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgkzAdfQgDgDAAgEQAAgDADgDQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgAu3dMQgCgCAAgEQAAgEACgDQADgDAEAAQAJAAAAAKQAAAJgJAAQgEAAgDgDgEgkHAYQQAAgJAJAAQAEAAACACQADADAAAEQAAAJgJAAQgJAAAAgJgAKBWwQgDgDAAgDQAAgEADgDQACgDAEAAQAEAAACADQAEADAAAEQAAADgEADQgCADgEAAQgEAAgCgDgEA0NAWKQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgDgA9jV7QgCgDgBgEQAAgJAKAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgEAAgDgCgA2TUSQgCgDAAgEQAAgEACgCQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgAsFUHQAAgEACgDQADgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgJAAAAgJgEgrmATsQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADACgBAEQABAEgDADQgDADgEAAQgDAAgDgDgAMCSVQgCgDAAgEQAAgJAJAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgDAAgEgCgArXR/QgDgDAAgEQAAgDADgDQADgDADAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgEAAgCgDgAwcR7QgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgDAAgDgDgEA5iAROQgDgDAAgEQAAgEADgDQACgCAFAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgA0RP2QgDgCAAgEQAAgEADgDQADgDAEAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgEAAgDgDgEgrsAPhQgDgDgBgEQABgEADgDQACgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgCgCgEg4vANnQgCgDAAgDQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEQAAADgDADQgDADgEAAQgEAAgDgDgAiqK9QAAgKAKAAQAIAAABAKQAAAEgDACQgCADgEAAQgKAAAAgJgEAmSALAQgCgDAAgEQAAgEACgCQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgATTKxQgDgDAAgEQAAgEADgDQADgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgA6EKbQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgEAAgDgDgEgy3AKPQgDgDAAgEQAAgEADgDQADgCAEAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgEAyRAJFQgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgEAAgDgCgEgi9AIlQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAADADQACACABAEQgBAEgCADQgDADgEAAQgEAAgDgDgAtDIMQAAgKAKAAQAEAAACADQACADABAEQgBAEgCACQgCADgEAAQgKAAAAgJgAL+GBQgDgCAAgEQgEAAgDgDQgDgDAAgEQAAgJAKAAQAEAAACADQADADAAADQAKAAAAAKQAAAJgKAAQgDAAgDgDgA4BF/QgDgCAAgEQAAgJAJAAQAEAAADACQACADAAAEQAAAEgCACQgDADgEAAQgEAAgCgDgAh5F7QgDgDABgEQgBgEADgDQACgCAFAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgEg8AAFxQgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDgEgveAFqQgCgDAAgEQAAgEACgCQADgDAFAAQADAAADADQACACABAEQgBAEgCADQgDADgDAAQgFAAgDgDgEA70AEjQgCgDAAgEQAAgEACgDQADgCAEAAQAEAAADACQACADAAAEQAAAJgJAAQgEAAgDgCgAXnDuQgEgCAAgEQAAgEAEgDQADgDADAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgA0VDjQgDgDAAgEQAAgDADgDQADgDADAAQAEAAACADQAEADAAADQAAAEgEADQgCADgEAAQgDAAgDgDgAEkDYQABgDACgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgIAAgBgKgEgiOADcQgDgCAAgEQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAAEgDACQgDADgDAAQgEAAgDgDgAWEBrQAAgJAKAAQAIAAABAJQAAAEgDADQgCACgEAAQgKAAAAgJgApaBQQgDgCAAgEQAAgEADgDQACgDAEAAQAJAAAAAKQAAAJgJAAQgDAAgDgDgA7sBBQgDgDAAgEQAAgEADgDQACgCAEAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEAAQgEAAgCgCgEg23gACQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDACgEAAQgDAAgDgCgARtgfQgDgCAAgEQAAgEADgDQACgDAEAAQAKAAAAAKQAAAJgKAAQgDAAgDgDgAqNgrQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQACADABAEQgBAEgCACQgDADgEAAQgEAAgDgDgAZogrQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAACADQAEADAAADQAAAEgEADQgCADgEAAQgEAAgDgDgACMhBQgDgDABgDQgBgEADgDQAEgDADAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgEAAgDgDgEgpvgBMQgDgDAAgEQAAgEADgCQADgDADAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgDAAgDgDgEA56gBQQgCgDgBgEQAAgJAKAAQAEAAADADQACADAAADQAAAEgCADQgDADgEAAQgEAAgDgDgEgmtgBQQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDgAwxhjQgCgCgBgEQABgEACgDQADgDADAAQAKAAAAAKQAAAJgKAAQgDAAgDgDgAumi9QgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDgEAyHgFkQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQACADABAEQAAAJgKAAQgEAAgDgDgEAoQgFtQgDgDAAgEQAAgDADgDQACgDAEAAQAEAAACADQADADAAADQAAAKgJAAQgEAAgCgDgA4QmJQgCgCAAgEQAAgEACgDQADgDAEAAQAAgJAKAAQADAAADADQACADABADQAAAKgJAAQAAAEgDACQgDADgEAAQgEAAgDgDgEgmCgGfQABgEACgDQADgCAEAAQAEAAADACQACADAAAEQAAAJgJAAQgKAAAAgJgAK9n9QgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgDAAgDgDgEAg2gIWQAAgJAJAAQAJAAAAAJQAAAEgCADQgDACgEAAQgJAAAAgJgAsdoSQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQADACAAAEQAAAEgDADQgDADgEAAQgDAAgDgDgEg5WgIyQAAgDACgDQADgDAEAAQAJAAAAAJQAAAKgJAAQgJAAAAgKgA/do0QgCgDAAgEQgBgJAKAAQAJAAAAAJQAAAEgDADQgCACgEAAQgEAAgDgCgAt/qoQAAgEACgDQADgCADAAQAKAAAAAJQAAAJgKAAQgJAAABgJgEAqtgKxQAAgKAKAAQAJAAAAAKQAAAEgDACQgCADgEAAQgKAAAAgJgEgtggLDQgDgDAAgEQAAgDADgDQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDgAqcsuQgCgCAAgEQAAgEACgDQAEgDADAAQAEAAADADQADADgBAEQAAAJgJAAQgDAAgEgDgAyWs0QgDgDAAgEQAAgDADgDQACgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgCgDgEAzvgM8QgDgCAAgEQAAgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAJgJAAQgDAAgDgDgEgiKgM9QgDgCAAgEQAAgKAJAAQAJAAAAAKQAAAEgCACQgDADgEAAQgDAAgDgDgAZjs+QgDgDAAgEQAAgEADgDQADgCAEAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgEAAgDgCgALrtFQgDgDAAgEQAAgDADgDQACgDAEAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDgEgm7gNaQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgDAAgDgDgEA5xgOZQgCgCgBgEQABgEACgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDACQgDADgEAAQgDAAgDgDgEg46gPeQgBgEADgDQADgCAEAAQAJAAAAAJQAAAJgJAAQgKAAABgJgASNvhQgDgDAAgDQAAgEADgDQADgDAEAAQADAAADADQADADAAAEQAAADgDADQgDADgDAAQgEAAgDgDgEAu/gRLQgBgEADgDQADgDAEAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgJAAAAgJgEAjqgRVQAAgJAJAAQAEAAADADQACADAAADQAAAKgJAAQgJAAAAgKgAEJxwQgCgCAAgEQAAgEACgDQADgDAEAAQAEAAADADQADADgBAEQABAEgDACQgDADgEAAQgEAAgDgDgAfTzhQgCgCgBgEQABgEACgDQADgDAEAAQAEAAADADQACADAAAEQAAAEgCACQgDADgEAAQgEAAgDgDgA5Hz/QgDgDAAgEQAAgDADgDQADgDAEAAQADAAADADQADACAAAEQAAAEgDADQgCACgEAAQgEAAgDgCgEAlCgUNQgCgDAAgEQAAgEACgCQAEgDAEAAQADAAADADQACACABAEQgBAEgCADQgDACgDAAQgEAAgEgCgEgw2gUOQgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQADADAAAEQAAAEgDADQgDACgDAAQgEAAgDgCgAjL0SQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgEAAgDgDgEgqWgUoQgCgDAAgEQAAgEACgCQADgDAEAAQAEAAADADQADACgBAEQABAEgDADQgDADgEAAQgEAAgDgDgAUP3kQgEgDAAgDQAAgEAEgDQACgDAEAAQAEAAADADQACADAAAEQAAADgCADQgDADgEAAQgEAAgCgDgAVB4fQgDgDAAgEQAAgEADgDQADgCAEAAQADAAADACQACADABAEQAAAJgJAAQgEAAgDgCgAPm5FQAAgJAKAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgKAAAAgJgAqg5BQgDgDAAgEQAAgEADgCQACgDAFAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgFAAgCgDgA4Z5IQgDgCABgEQgBgEADgDQADgDAEAAQADAAAEADQACADAAAEQAAAEgCACQgEADgDAAQgEAAgDgDgEA5pgZvQgBgJAKAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgKAAABgJgEAtHgaGQgCgCgBgEQABgEACgDQADgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgDgAVZ6VQgDgDgBgDQABgEADgDQACgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgCgDgAVp6iQgBgJAKAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgKAAABgJgAFu67QgDgDAAgEQAAgDADgDQADgDAEAAQAEAAADADQACACAAAEQAAAEgCADQgDADgEAAQgEAAgDgDgAx67qQABgEACgDQADgCADAAQAEAAAEACQACADAAAEQAAAJgKAAQgIAAgBgJgEg5Bgb6QgDgCAAgEQAAgEADgDQACgDAFAAQADAAADADQACADABAEQgBAEgCACQgDADgDAAQgFAAgCgDgAgX9RQgDgCAAgEQAAgEADgDQADgDAEAAQAEAAACADQADADAAAEQAAAEgDACQgCADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(384.5,189);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-358.8,768.9,736.9);


(lib.Символ98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pulya();
	this.instance.setTransform(28.5,0,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,112.7);


(lib.Символ88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhOBhQgJgDgGgHQgGgGgDgKQgDgJAAgLIAAhlQAAgLADgKQADgJAGgGQAGgGAJgEQAIgCAMgBQALABAJACQAIAEAGAGQAGAGADAJQAEAKAAALIAABlQAAALgEAJQgDAKgGAGQgGAHgIADQgJACgLAAQgMAAgIgCgAhGhCQgEAEAAAKIAABpQAAAJAEAGQAEAEAIAAQAHAAAEgEQAFgGAAgJIAAhpQAAgKgFgEQgEgFgHAAQgIAAgEAFgAi9BhQgIgDgGgHQgGgGgDgKQgDgJAAgLIAAgWIAdAAIAAAYQAAAJAFAGQAEAEAHAAQAIAAAEgFQAEgFAAgMIAAgQQAAgNgEgGQgFgFgLgBIgHAAIAAgaIAJAAQAJAAAEgEQAFgFAAgLIAAgLQAAgNgEgFQgEgEgIgBQgHAAgEAFQgFAEAAAKIAAAQIgcAAIAAgOQAAgMADgJQACgJAGgGQAGgGAIgEQAJgCALgBQALABAJACQAJAEAFAGQAGAGADAJQADAKAAALIAAAGQAAAQgFAJQgFALgLAEQAFACAEACIAHAJQAFAKAAAQIAAAQQAAALgDAJQgDAKgGAGQgFAHgJADQgJACgLAAQgLAAgJgCgAFXBhIAAiHIgmCHIggAAIAAjCIAbAAIAAB6IAlh6IAiAAIAADCgACdBhIAAjCIBXAAIAAAcIg4AAIAAAzIASAAQALAAAJADQAJADAGAGQAGAGADAIQACAJAAALIAAAVQAAAMgCAJQgDAJgGAGQgGAGgJAEQgJACgLAAgAC8BGIASAAQAIAAAEgFQAEgEAAgKIAAgZQAAgKgEgFQgEgEgIABIgSAAgABqBhIAAiKIgVCKIgeAAIgXiIIAACIIgaAAIAAjCIAqAAIAXCKIAViKIArAAIAADCgAlyBhIAAjCIAvAAQAMAAAJAEQAIACAGAFQAFAGADAJQADAIAAALIAAAIQAAAPgFAKQgFAKgKAEQAGADAEACQAFADACAGQAGAKAAAQIAAAQQAAALgDAJQgDAIgGAHQgGAFgJAEQgJACgLAAgAlTBGIASAAQAIgBAEgEQAEgEAAgLIAAgRQAAgOgFgEQgEgGgLAAIgOAAgAlTgRIAMAAQAJAAAFgEQAFgFAAgLIAAgLQAAgLgEgEQgEgFgIgBIgPAAg");
	this.shape.setTransform(50.4,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,0,74.3,20);


(lib.Символ87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AleB1QgIgDgHgGQgFgHgDgJQgDgJAAgMIAAhkQAAgMADgJQADgJAFgGQAHgGAIgEQAJgDALAAQALAAAJADQAIAEAHAGQAFAGADAJQADAJAAAMIAAATIgdAAIAAgVQAAgKgFgFQgEgEgHAAQgIAAgDAEQgFAFAAAKIAABoQAAAKAFAFQADAEAIAAQAHAAAEgEQAFgFAAgKIAAgcIAdAAIAAAaQAAAMgDAJQgDAJgFAHQgHAGgIADQgJADgLAAQgLAAgJgDgAAgB3IAAgdQALAAADgDQAEgEABgNIAFiSIBXAAIAADCIgfAAIAAimIgbAAIgDB1QgBANgCAKQgDAJgGAGQgFAGgJADQgHADgMAAgAFdB2IAAiIIgmCIIggAAIAAjCIAcAAIAAB6IAkh6IAiAAIAADCgADiB2IAAhQIgKAAQgMAAgEAGQgFAGABANIAAAfQgBAQgDAIIgfAAQADgIAAgQIAAgeQABgQAEgKQADgFADgEQAEgEAGgCQgLgFgEgKQgFgIAAgPIAAgQQAAgLACgJQADgIAFgGQAGgFAJgDQAIgDAMAAIAvAAIAADCgADIgrQgEAFAAAKIAAAUQAAAJAEAFQAFAFAJAAIAMAAIAAg7IgPAAQgIAAgDAFgAg8B2IAAjCIBRAAIAAAcIgzAAIAAA1IAoAAIAAAcIgoAAIAAA5IAzAAIAAAcgAimB2IAAjCIAtAAQAMAAAIADQAJADAGAHQAGAGACAJQADAJAAAMIAAAZQAAAKgDAJQgCAJgGAGQgGAGgJADQgIAEgMAAIgOAAIAABJgAiHARIAOAAQAJAAADgEQADgFABgIIAAgdQgBgKgDgFQgDgEgJAAIgOAAgAjyB2IAAimIghAAIAAgcIBgAAIAAAcIghAAIAACmgAE7hbQgHgCgDgEQgFgEgCgGQgBgFAAgHIATAAQAAAHADADQADACAGAAQAIAAACgCQAEgDABgHIASAAQAAAHgCAFQgCAGgEAEQgEAEgGACQgGADgJAAQgHAAgGgDg");
	this.shape.setTransform(50.7,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.9,0.4,75.5,24.2);


(lib.Символ79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfB7IgdhBIiEAAIgcBBIgdAAIBwj1IAYAAIBvD1gAA2AhIg2h7Ig3B7IBtAAg");
	this.shape.setTransform(12.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.7);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhdgyIAAgtQABABBBArQA/AqAhAiQAiAkgNAfQgCAEgGAAQgfAAiQiSg");
	this.shape.setTransform(9.4,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.7,18.9,19.3);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHDCMIAAghIhlAAIAAjzIAmAAIAADQIAsAAIAAjQIAnAAIAADQIARAAIAABEgAi7BpQgLgEgHgHQgHgIgEgLQgDgMAAgPIAAh+QAAgOADgLQAEgMAHgIQAHgIALgEQALgEAOAAQAOAAALAEQALAEAHAIQAHAIAEAMQADALAAAOIAAAYIgkAAIAAgaQAAgMgFgHQgFgFgKAAQgKAAgFAFQgFAHAAAMIAACDQAAANAFAFQAFAGAKAAQAKAAAFgGQAFgFAAgNIAAgkIAkAAIAAAhQAAAPgDAMQgEALgHAIQgHAHgLAEQgLAEgOAAQgOAAgLgEgAIEBrIAAgiQAQABAIgEQAIgEACgNIABgCIg2i7IAnAAIAhCLIAaiLIAoAAIgpC0QgEATgEAKQgGAOgIAHQgJAIgNADQgKADgOAAIgKgBgAEgBrIAAirIgwCrIgnAAIAAjzIAiAAIAACZIAuiZIAqAAIAADzgAA7BrIAAjzIA6AAQAPAAALADQAKAEAHAHQAHAHAEAKQADALAAAOIAAAJQAAATgGAMQgGAMgNAHQAIACAFAGQAGAFADAGQAHAKAAAVIAAAUQAAAOgEALQgEALgHAHQgHAIgLADQgLAEgPAAgABhBIIAWAAQAKAAAFgFQAFgGAAgNIAAgWQAAgQgGgHQgFgEgOAAIgRAAgABhgkIAPAAQAMgBAFgFQAGgGAAgOIAAgNQAAgOgEgGQgFgGgKAAIgTAAgAADBrIgFgtIgvAAIgHAtIgjAAIAnjzIA2AAIAnDzgAgHAdIgTh5IgSB5IAlAAgAkQBrIgHgtIgvAAIgHAtIgjAAIAnjzIA4AAIAnDzgAkcAdIgTh5IgSB5IAlAAgAnqBrIAAjzIA5AAQAOAAALAEQALAEAHAIQAHAHAEAMQADALAAAPIAAAfQAAAPgDALQgEAMgHAGQgHAHgLAEQgLAEgOAAIgSAAIAABcgAnDgSIASAAQAKAAAEgFQAFgFAAgNIAAglQAAgNgFgFQgEgFgKAAIgSAAgAoiBrIgmhiIgMAXIAABLIgmAAIAAjzIAmAAIAABrIAzhrIAmAAIg1BtIA1CGg");
	this.shape.setTransform(68.1,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,8.3,127.2,28.1);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABzB5QgLgEgHgIQgIgIgDgLQgEgMABgPIAAh9QgBgPAEgLQADgMAIgHQAHgIALgEQALgFANAAQAPAAALAFQAKAEAIAIQAHAHADAMQAEALAAAPIAAAYIglAAIAAgaQAAgNgEgGQgFgGgLAAQgJAAgFAGQgFAGAAANIAACCQAAANAFAFQAFAGAJAAQALAAAFgGQAEgFAAgNIAAgjIAlAAIAAAgQAAAPgEAMQgDALgHAIQgIAIgKAEQgLAEgPAAQgNAAgLgEgAk1B5QgLgEgHgIQgHgIgEgLQgEgMAAgPIAAh9QAAgPAEgLQAEgMAHgHQAHgIALgEQAKgFAPAAQAOAAALAFQAKAEAIAIQAHAHAEAMQADALAAAPIAAAYIglAAIAAgaQAAgNgEgGQgGgGgJAAQgKAAgFAGQgFAGAAANIAACCQAAANAFAFQAFAGAKAAQAJAAAGgGQAEgFAAgNIAAgjIAlAAIAAAgQAAAPgDAMQgEALgHAIQgIAIgKAEQgLAEgOAAQgPAAgKgEgAE0B6IAAiqIgwCqIgoAAIAAjzIAjAAIAACZIAuiZIAqAAIAADzgAAeB6IgIgsIgsAAIgIAsIgjAAIAojzIA2AAIAnDzgAASAsIgSh5IgSB5IAkAAgAh5B6IAAjQIgsAAIAADQIgmAAIAAjzIB5AAIAADzg");
	this.shape.setTransform(36.8,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,-4,68.6,25.1);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E93841").s().p("A1JMmQoxlOAAnYQAAnXIxlOQIxlOMYAAQMZAAIxFOQIxFOAAHXQAAHYoxFOQoxFOsZAAQsYAAoxlOg");
	this.shape.setTransform(191.6,114.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383.1,228.1);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouth_18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,30);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouth_25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,39);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AliiaIBSBQQA8ASAAAAQB/gpAAAAQA+gPAAAAQBPAIAAABIB9AsQA6AAAAABQA6gVAAABQA9hCAAABIgdBwIhBBbIhaBFIh7AaQAAAAirgKQAAAAhFgjQAAAAhOg7QAAABg6hHIgghcg");
	this.shape.setTransform(35.8,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ah4CRIhFgjIhOg7Ig6hGIgghcIADgrIBSBQIA8ASIB/gpIA+gPIBPAJIB9AsIA6ABIA6gUIA9hBIgdBwIhBBbIhaBFIh7AaIAAAAIirgKg");
	this.shape_1.setTransform(35.8,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.7,33.1);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0iBUQohgjAAgxQAAgwIhgjQIhgkMBAAQMCAAIhAkQIhAjAAAwQAAAxohAjQohAksCAAQsBAAohgkg");
	this.shape.setTransform(186.1,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.1,24);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArMCUQkqg+AAhWQAAhWEqg+QEpg9GjAAQGkAAEpA9QEqA+AABWQAABWkqA+QkpA+mkAAQmjAAkpg+g");
	this.shape.setTransform(101.6,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.1,42.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117,95);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,136);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,45);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,72);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,149);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zombie_25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,148);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnXCSQgKgEgIgHQgHgIgDgLQgEgMAAgPIAAh9QAAgPAEgLQADgMAHgHQAIgIAKgFQALgEAOAAQAOAAALAEQALAFAHAIQAIAHADAMQAEALgBAPIAAAXIgkAAIAAgaQAAgMgFgHQgFgFgKAAQgJAAgGAFQgEAHAAAMIAACCQAAANAEAGQAGAGAJAAQAKAAAFgGQAFgGAAgNIAAgjIAkAAIAAAhQABAPgEAMQgDALgIAIQgHAHgLAEQgLAEgOABQgOgBgLgEgAAGCUIAAgjQAPABAEgFQAFgFAAgQIAHi3IBtAAIAADzIgoAAIAAjQIghAAIgFCSQAAARgDAMQgDALgHAIQgHAIgKADQgLAEgPgBgAHSCUIAAglIAmAAIAAAlgAGTCUIAAirIgwCrIgnAAIAAjzIAiAAIAACZIAuiZIApAAIAADzgAD5CUIAAhkIgNAAQgOAAgFAHQgHAHAAASIAAAmQAAAUgDAKIgnAAQAEgKABgTIAAgmQAAgVAEgMQAEgHAEgFQAGgFAHgCQgNgHgGgMQgGgKAAgUIAAgTQgBgOAEgKQADgLAHgHQAHgHALgEQALgDAOAAIA7AAIAADzgADYg2QgFAGAAAOIAAAXQAAAMAGAHQAGAFALAAIAPAAIAAhJIgTAAQgKAAgEAGgAhtCUIAAjzIBpAAIAAAjIhCAAIAABDIA0AAIAAAiIg0AAIAABIIBCAAIAAAjgAjwCUIAAjzIA5AAQANAAAMAEQAKAEAIAIQAGAHAEAMQAEALgBAPIAAAfQABANgEALQgEAMgGAHQgIAIgKAEQgMAEgNAAIgTAAIAABcgAjKAVIATAAQAJAAAFgFQAEgFAAgLIAAglQAAgNgEgFQgFgFgJAAIgTAAgAlQCUIAAjQIgoAAIAAgjIB3AAIAAAjIgpAAIAADQgAHXBeIgGhZIAAhkIAnAAIAABkIgFBZgAFohyQgIgCgFgFQgFgFgDgHQgCgIAAgJIAYAAQABAKADADQAEADAIABQAJgBAEgDQAEgDAAgKIAYAAQAAAJgCAIQgDAGgFAGQgFAFgIACQgIADgKAAQgKAAgHgDg");
	this.shape.setTransform(50.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.9,30.2);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E93741").s().p("AynGdQiiAAAAi7IAAnDQAAi7CigBMAlPAAAQCiABABC7IAAHDQgBC7iiAAg");
	this.shape.setTransform(195.5,41.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(60,0,271,82.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AABgEIAAC1AABgEICuAAAiugDICvgBAABiwIAACs");
	this.shape.setTransform(62.2,62.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DF1020").ss(8).p("AAAm8IAAELAm5gEIEKAAAAACxIAAEIIAAAEACugEIEMAA");
	this.shape_1.setTransform(62.3,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2).p("AG7AAQAAi2iCiCQg3g3hAggQhYgrhqAAQAAAAAAAAQi3AAiBCCQhaBZgcB0QgMAyAAA3QAAACAAAAQAAC4CCCBQCBCCC3AAQAAAAAAAAQC4AACBiCQCCiBAAi4g");
	this.shape_2.setTransform(62.5,62.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(6.4).p("AACJwQgBAAgBAAQhaAAhRgXQgGgCgGgBQiPgrhzhyQgQgQgOgRQgIgJgIgJQg/hOgihaQgdhNgIhXQgCgcAAgeQAAiFAxhxQAuhrBXhYQAFgEAFgEQC0iuD7AAQEDAAC2C2QAtAuAjAzQAaAnAUAqQA5B4AACPQAACQg5B4QgtBghRBRQhyByiPArQgLADgLADQhMAUhUAAg");
	this.shape_3.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-6.6,131.2,134.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222,271);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_03();
	this.instance.setTransform(1.5,0,1,1,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,15.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,14);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,35);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAAIgagfQABABAxAUQAxARAAAFQAAAUgUAAQgWABgfghgAgyggIABABIgBgBg");
	this.shape.setTransform(5.1,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,6.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_07();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,76);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333,216);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_28();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,75);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,58);


(lib.Символ114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ99();
	this.instance.setTransform(2054.6,329.1,1.703,1.703,0,0,0,384.4,189);

	this.instance_1 = new lib.Символ98();
	this.instance_1.setTransform(2026.6,452.1,1,1,0,0,0,645.1,452.1);

	this.instance_2 = new lib.Символ99();
	this.instance_2.setTransform(765.9,329.1,1.703,1.703,0,0,0,384.4,189);

	this.instance_3 = new lib.Символ98();
	this.instance_3.setTransform(737.9,452.1,1,1,0,0,0,645.1,452.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111.5,-603.6,2597.8,1254.6);


(lib.Символ113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ114();
	this.instance.setTransform(645.1,452.1,1,1,0,0,0,645.1,452.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-644.5},364).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.8,-603.6,2616.5,1254.6);


(lib.Символ112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ111();
	this.instance.setTransform(1358.8,162.2,1,1,0,0,0,452.9,162.2);

	this.instance_1 = new lib.Символ111();
	this.instance_1.setTransform(452.9,162.2,1,1,0,0,0,452.9,162.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1811.9,324);


(lib.Символ109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ110();
	this.instance.setTransform(2013.2,112.3,1,1,0,0,0,308.9,105.4);

	this.instance_1 = new lib.Символ110();
	this.instance_1.setTransform(1404.8,112.3,1,1,0,0,0,308.9,105.4);

	this.instance_2 = new lib.Символ110();
	this.instance_2.setTransform(796,112.3,1,1,0,0,0,308.9,105.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(487.1,6.9,1835.2,211);


(lib.Символ108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ112();
	this.instance.setTransform(606.1,307.8,1,1,0,0,0,905.9,162.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-292.3},229).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.8,145.6,1811.9,324);


(lib.Символ107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ109();
	this.instance.setTransform(-178.6,105.4,1,1,0,0,0,308.9,105.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-777.1},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,6.9,1835.2,211);


(lib.Символ103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ105();
	this.instance.setTransform(513.3,2.6,1,1,0,0,0,378.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:194.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134.8,0,757,5.4);


(lib.Символ101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 107
	this.instance = new lib.Символ107();
	this.instance.setTransform(299.1,182.9,1,1,0,0,0,308.9,105.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 108
	this.instance_1 = new lib.Символ108();
	this.instance_1.setTransform(751.8,-3.7,1,1,0,0,0,452.9,162.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-20.3,1835.2,324);


(lib.Символ100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lines
	this.instance = new lib.Символ103();
	this.instance.setTransform(416.6,28.6,1,1,0,0,0,378.5,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.doroga();
	this.instance_1.setTransform(19.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.2,0,910.8,52);


(lib.Символ97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// road
	this.instance = new lib.Символ100();
	this.instance.setTransform(637.1,787.2,2.17,2.17,0,0,0,400,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// buildings
	this.instance_1 = new lib.Символ101();
	this.instance_1.setTransform(761.6,561.9,1.36,1.36,0,0,0,452.9,162.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// stars
	this.instance_2 = new lib.Символ113();
	this.instance_2.setTransform(645.1,452.1,1,1,0,0,0,645.1,452.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.3,-603.6,2898.6,1447.5);


(lib.Символ96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ97();
	this.instance.setTransform(645.1,452.1,1,1,0,0,0,645.1,452.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.3,-603.6,2898.6,1447.5);


(lib.Символ86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 88
	this.instance = new lib.Символ88();
	this.instance.setTransform(-23.6,39.8,1.447,1.447,0,0,0,52.2,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:43.8},4,cjs.Ease.get(0.94)).to({y:39.8},5,cjs.Ease.get(0.94)).wait(1));

	// Символ 87
	this.instance_1 = new lib.Символ87();
	this.instance_1.setTransform(-24.6,-2.4,1.447,1.447,0,0,0,52.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-5.4},4,cjs.Ease.get(-1)).to({y:-2.4},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.3,-19.4,109.3,73.8);


(lib.Символ85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAzDOQgXgCgRgJQgPgJgLgOQgLgOgDgTQgEgUACgYIAEgiIA6AGIgEAmQgCAVAHALQAHAKAQACQARACAJgKQAJgJADgaIADggQADgbgJgNQgIgNgWgCIgVgCIAGg4IAZADQATACAKgJQALgJACgXIACgXQADgZgHgMQgHgKgRgCQgQgCgJAIQgJAJgCAVIgDAaIg6gGIACgWQADgYAGgTQAHgSAOgMQANgMATgFQASgEAXACQAXACASAJQARAJAKAOQALAOAEAUQAEATgDAYIgBALQgDAggNAUQgNATgYAHQALAFAIAJQAHAJAFALQAIAWgDAfIgEAgQgCAZgIASQgIASgOAMQgNAMgSAEQgNAEgOAAIgPgBgAihBRIgGgDIgJgKIgCgEIACgGIAng2Igcg/IgCgDIAAgEQACgCAFgBIACgBIATABQAGABAEADQADADADAFIANAhIAlguQADgEAEAAIAEAAIADACIAIAIIAHAIQADAFgBAEQgBAEgDAEIgvA1IAZA8QAAABABAAQAAABAAABQAAAAAAABQAAAAAAAAQgBACgEABQgJABgJgBQgFgBgCgCQgDgBgDgFIgQgfIgfAnQgCADgDAAIgBAAIgFgCg");
	this.shape.setTransform(54.6,103.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ91();
	this.instance.setTransform(27.2,97.2,0.62,0.62,-4,0,0,26.4,56.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A1E02C").s().p("AkjD0Qh5hlAAiPQAAiOB5hlQB5hlCqAAQCrAAB5BlQB5BlAACOQAACPh5BlQh5BlirAAQiqAAh5hlg");
	this.shape_1.setTransform(47.4,102.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,61.1,82.6,76.1);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ78();
	this.instance.setTransform(8,12,1,1,0,0,0,8,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},2).to({scaleX:1,scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,24);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();
	this.instance.setTransform(13.5,12,1,1,0,0,0,13.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.83,scaleY:0.83,rotation:-1,x:14.3},2).to({scaleX:1,scaleY:1,rotation:0,x:13.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27,24);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ73();
	this.instance.setTransform(-511,207.2,1,1,0,0,0,12.5,12.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:-645.1,y:143.6,alpha:0},15).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ72();
	this.instance_1.setTransform(-549.7,203.6,1,1,0,0,0,12.5,12.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:-638.5,y:157.1,alpha:0},16).to({_off:true},1).wait(14));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ71();
	this.instance_2.setTransform(-493.3,189.5,1,1,0,0,0,12.5,12.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:-625.1,y:140.1,alpha:0},20).to({_off:true},1).wait(5));

	// Слой 1
	this.instance_3 = new lib.Символ70();
	this.instance_3.setTransform(-479.2,217.7,1,1,0,0,0,12.5,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-645.1,y:145.9,alpha:0},24).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-491.7,205.4,24.9,24.7);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 62
	this.instance = new lib.Символ62();
	this.instance.setTransform(0,41.7,0.79,0.79,0,0,0,69.5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:39.2},12,cjs.Ease.get(-1)).to({y:41.7},7,cjs.Ease.get(0.98)).wait(1));

	// Символ 61
	this.instance_1 = new lib.Символ61();
	this.instance_1.setTransform(0.1,10.1,1.6,1.6,0,0,0,37.9,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:12.1},12,cjs.Ease.get(-1)).to({y:10.1},7,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-12.4,109.8,74);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ60();
	this.instance.setTransform(191.6,131.1,1.47,1.47,0,0,0,0,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(191.6,130,1,1,0,0,0,191.6,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16,383.1,228.1);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth_25.png
	this.instance = new lib.Символ54();
	this.instance.setTransform(44.2,25.4,1,1,0,0,0,44.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:43.9,y:27.2},1,cjs.Ease.get(1)).to({x:44.2,y:25.4},1,cjs.Ease.get(1)).wait(1));

	// mouth_18.png
	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(43,15,1,1,0,0,0,43,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:43.4,y:12.9},1,cjs.Ease.get(1)).to({x:43,y:15},1,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(42.6,22,1,1,0,0,0,35.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,89,44.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ5();
	this.instance.setTransform(165.6,38.4,1.49,1.49,0,0,0,50.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(136.5,41.4,1,1,0,0,0,165.5,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,0,271,82.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(62.4,60.6,1,1,0,0,0,62.4,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-6.6,131.2,134.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(148.1,75,1,1,0,0,0,119.5,75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5},12,cjs.Ease.get(1)).to({rotation:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,0,197.5,76);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(10.2,8,1.09,1.09,0,0,0,10.2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},2,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.7,22.2,17.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(9.5,7,1,1,0,0,0,9.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19,14);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(15.5,17.5,1,1,0,0,0,15.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:17.6,rotation:-11,y:17.6},2,cjs.Ease.get(1)).to({regY:17.5,rotation:0,y:17.5},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,35);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B4A9F").s().p("AllCdQAUh7g1hFQg2hIhFgzIg7gmQA3gxBwALQBvALBQgeQBPgdB6AiQB4AiBQAjQCAA3CLgcQBFgNAsgZIAEATQADAWgBAWQgEBEgzAgQgoAYingDQi3gFgqALQh+Ali7B3QheA7hDA0QAVgvAKg/g");
	this.shape.setTransform(49.4,117);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B4A9F").s().p("AnlDcIAEgvQAKhaAZgxQAJgYgEgTQgBgggggjQglgpgxgaQghgRgkgOQAQgRAUgOQAxghBZACQAuACAuABQBCAAA4gLQBRgNBdAMQAYADAYAEQBUAMA/AIQAoAEAmALIBdAbQBlAdBmgQQARgDARgEQA0gMAjgUIABABIADAMIACAIQABAPAAAOIgBAUQgGAtgdAbQgPAPgZANQgqAUhrAMIhOAEQijAGhbASQhJARhYAeQhjAhhjAvQhxAyhLAvQgGgOgFgSg");
	this.shape_1.setTransform(43.7,118.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B4A9F").s().p("ApcC9QAHhiBEgoQAcgSAJgTQAWgfgngsQgogsg5gYQgmgQgrgHIAkgmQAuguBlgCQAwgBA2ADQBHAEA+gDQBigEBdAGIA0ADQBhAEBDgGQAqgEAuAIQAwAKA3ASQBxAmBrgOIAlgGQA8gNAjgVIABACIADANIABAJQACARAAAPQgBAMgCAKQgIAvgmAbQgSANgeANQg1AVhuATQglAHgvAHQiOAPiNAXQhSAQhkAXQh3AZhoAjQiDAohUAqIgsAFQgCgbABgYg");
	this.shape_2.setTransform(37.9,119.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B4A9F").s().p("ApkBDQCJgkhFhOQhGhQiDgFIAkguQBAhRDLATQDMATCVgBQCTgBBZgZQBYgYB7AuQCUA3CDgZQBBgNAkgXIAFASQAEAXgCAVQgEBFg6AfQg3AeiwAtQiwAumuA5QmwA5iIBcQgciaCKgkg");
	this.shape_3.setTransform(32.1,121.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B6C9F").s().p("An+EiIhTgpQArgSAgggQA/g/g9hIQg+hFhZhCIhOgzQBAgxBZgwQCzhfCAAIQBGAECAAkQB7AiCUA3QCUA3DdgRQBwgIBRgUQgkAeguAlQheBIg6AdQgyAciQAdQidAdg5AOQgoALhqgBQhhAAhBAZQglAPgvA6Qg3BDgXAPQgYARgjAAQgkAAgxgSg");
	this.shape_4.setTransform(49.4,127.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B6C9F").s().p("AoFEhQABgIgIgVIgCgHQgDgZgQgcQAAgbgRgiIgGgLQglhAg9g7IghggQgjglgUgfQAFgMAJgKIAHgIQA0gmBGgmIAcgPQCihTB5AFIASABQBCAGB0AhIALADQB3AjCQA3IACABQCOA1DogQIAjgDQBagIBIgOQAGAIACAJIgWATQgqAjgpAfQglAcgdASQg1AmhCAVQgZAJgoACQhJAHhPgEIhIAAQhEgDhOAAQgRAAgNACQg+AIhCAeIgLAFQgqAWgnAiQgjAbgWAPIghAZQgYARgfAQQgiATgiACQgOAEgLgBIgJABQgXAAgbgHg");
	this.shape_5.setTransform(43.7,126.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B6C9F").s().p("AomEgQgugSglgZQAAgZgMgnQgZhPg9hIQg9hGgCgzQAAgQAGgMIAFgJQA/gwBYguQCwhdCBAKQBEAFB/AmQB8AlCQA5QCSA5EPgWQCIgMBqgXQguAsg7AxQhyBgg6AeQgrAXi3glQjDgng0ALQg0ANhXAsQhrA3guASQgmAOgvA6Qg1BBgXAQQgXAPghAAQglAAgxgTg");
	this.shape_6.setTransform(41,127.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B6C9F").s().p("AntErQgSgFgagTIgHgHIgtgtQAAgagPgkIgEgLQgghFg6g/IgggiQgigqgKgiQACgPAIgKIAGgJQA1gnBFgmIAdgPQCjhVB6AEIARABQBBAFB3AiIAKADQB5AkCQA4IACABQCLA1DvgQIAkgDQBYgIBLgNIAqABIgWAUQgoAjgrAiQgjAdgeAWQg8Asg2AVQgVAKgsAAQhCAChagMIhJgHQhRgLhAABQgSAAgMACQg3AKhIAjIgMAGQgtAYgnAZQglAYgYAMQgSAJgRAOIgzApQgiAegbAMQgOAJgKACQgRAGgVAAIgWgBg");
	this.shape_7.setTransform(42.4,126.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1B6C9F").s().p("AnVEnQgOgCgMgEQgcgGgegKQATgMAKgXIAEgIQAPgdgIggQAAgbgUgfIgHgLQgqg8hAg2IgjgfQglgfgdgdQAIgKALgKIAHgGQA1gmBEglIAcgPQCihSB4AHIASABQBCAGBzAhIAKADQB4AiCOA2IACABQCRA2DigRIAjgDQBZgIBGgQQgJAPgRASIgVATQgsAjgnAcQgmAcgeAPQguAehPAVQgaAIgmAFQhQAMhDADIhIAIQg2AEhbgBQgQAAgPACQhFAFg9AaIgLAFQglAUgoAqQgfAegWATQgRAQgOAJQgZARghAIQgUAFgVAAQgQAAgSgDg");
	this.shape_8.setTransform(46.4,126.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Слой 2 - копия: 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1B4A9F").s().p("AmbDXQAXh7g9hIQg+hFhQg0IhDgmQA/gxBZgvQCyhgCCAIQAwADB6BJQCWBbBdAiQCUA3CfgbQBQgOAygYIAEASQAEAXgBAVQgFBFg6AdQguAZjAgEQjTgEgxAMQiRAmjXB3QhrA7hOA0QAYgwAMg+g");
	this.shape_9.setTransform(48.3,136.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1B4A9F").s().p("AmODFQAThrhCg/QhCg8hQg0IhDgmQA/gxBZgwQCyhfCCAIQAwADB6BIQCWBbBdAjQCUA3CfgbQBQgOAygZIAEATQAEAWgBAWQgFBDg6AfQguAYjAgDQjTgFgwgEQhwALjCBqQh7BCgsBGQgiguAKhCg");
	this.shape_10.setTransform(48.3,135.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1B4A9F").s().p("AmACzQANhahGg3QhGg0hQg0IhDgmQA/gxBZgwQCyhfCCAIQAwADB6BIQCWBbBdAjQCUA3CfgbQBQgOAygZIAEATQAEAWgBAWQgFBDg6AfQguAYjAgDQjTgFgvgWQhQgNisBdQiLBJgKBYQhcguAJhFg");
	this.shape_11.setTransform(48.3,133.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1B4A9F").s().p("AlyChQAHhKhKguQhKgshQg0IhDgmQA/gxBZgvQCyhgCCAIQAwADB6BJQCWBbBdAiQCUA3CfgbQBQgOAygYIAEASQAEAXgBAVQgFBDg6AfQguAZjAgEQjTgEgvgnQgugoiYBQQiaBQAZBqQiXgsAIhJg");
	this.shape_12.setTransform(48.3,132.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(111,135.5,1,1,0,0,0,111,135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,0,247.2,271);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(42.5,43,1,1,0,0,0,42.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(166.5,108,1,1,0,0,0,166.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333,216);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(33.5,16,1,1,0,0,0,10.2,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(13,6,1,1,0,0,0,9.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,-1,41.1,25.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ65();
	this.instance.setTransform(17,16.1,1,1,0,0,0,4.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:5.3,rotation:24,x:15.5,y:17.5},1,cjs.Ease.get(1)).to({regY:5.4,rotation:0,x:17,y:16.1},1,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(15.5,17.5,1,1,0,0,0,15.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.2,35);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(42.5,43,1,1,0,0,0,42.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:720},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,86);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(57.5,76,1,1,0,0,0,42.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(46,37.5,1,1,0,0,0,46,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:47,y:38.5},9,cjs.Ease.get(1)).to({x:46,y:37.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,119);


(lib.Символ5_1 = function(mode,startPosition,loop) {
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

	// eye
	this.instance = new lib.Символ10();
	this.instance.setTransform(121.2,37.4,1,1,0,0,0,9.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// rot
	this.instance_1 = new lib.Символ69();
	this.instance_1.setTransform(582.4,-199,1,1,0,0,0,7.8,7.8);

	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(124.4,64.5,0.86,0.86,0,0,0,15.5,17.5);

	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(123.5,64.5,1,1,0,0,0,5.1,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	// head
	this.instance_4 = new lib.Символ31();
	this.instance_4.setTransform(71.3,35.5,1,1,0,0,0,99.8,38);

	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(85.5,38,1,1,0,0,0,85.5,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-2.5,197.5,82);


(lib.Символ2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_07.png
	this.head = new lib.Символ5_1();
	this.head.setTransform(162.5,-40.6,1,1,0,0,0,85.5,38);

	this.timeline.addTween(cjs.Tween.get(this.head).to({regY:38.1,rotation:-7.5,x:172.5,y:-30.5},14).to({regY:38,rotation:0,x:162.5,y:-40.6},15).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(1).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(2).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(1).to({y:-34.6},5,cjs.Ease.get(-0.8)).to({y:-40.6},5,cjs.Ease.get(1)).wait(2));

	// Символ 16
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(132.6,108,1,1,0,0,0,111,135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:3.8,x:141.6},14).to({scaleY:1,skewX:0,x:132.6},15).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(1).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(2).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(1).to({y:114},5,cjs.Ease.get(-0.8)).to({y:108},5,cjs.Ease.get(1)).wait(2));

	// siska
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(185,29.4,1,1,0,0,0,24.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:28.9,rotation:15,x:189,y:28.4},14).to({regY:29,rotation:0,x:185,y:29.4},16).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(1).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(2).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(1).to({y:37.4},5,cjs.Ease.get(-0.92)).to({y:29.4},5,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(311.6,217,1,1,0,0,0,46,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({rotation:-4,x:314.4,y:213.8},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(1).to({rotation:3,x:309.1,y:229.7},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(2).to({rotation:-3,x:313.8,y:216.2},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(1).to({rotation:-2,x:313,y:218.5},5,cjs.Ease.get(-0.57)).to({rotation:0,x:311.6,y:217},5,cjs.Ease.get(1)).wait(2));

	// Символ 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(164.6,153,1,1,0,0,0,166.5,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({rotation:-4,x:163.3,y:160.3},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(1).to({rotation:3,x:165.6,y:158.1},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(2).to({rotation:-3,x:163.6,y:160},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(1).to({rotation:-2,x:163.9,y:159.6},5,cjs.Ease.get(-0.57)).to({rotation:0,x:164.6,y:153},5,cjs.Ease.get(1)).wait(2));

	// Символ 7
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(64.1,255.5,1,1,0,0,0,42.5,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({rotation:-4,x:70.3,y:269.5},5,cjs.Ease.get(-0.57)).to({rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(1).to({rotation:3,x:59.9,y:255.2},5,cjs.Ease.get(-0.57)).to({rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(2).to({regY:43.1,rotation:-3,x:68.6,y:267.6},5,cjs.Ease.get(-0.57)).to({regY:43,rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(1).to({rotation:-2,x:67,y:265.5},5,cjs.Ease.get(-0.57)).to({rotation:0,x:64.1,y:255.5},5,cjs.Ease.get(1)).wait(2));

	// Слой 2
	this.instance_6 = new lib.Символ51();
	this.instance_6.setTransform(199.5,294.8,1,1,0,0,0,186.1,12);
	this.instance_6.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({y:306.8},5).to({y:294.8},5).wait(1).to({y:306.8},5).to({y:294.8},5).wait(2).to({y:305.8},5).to({y:294.8},5).wait(1).to({y:303.8},5).to({y:295.8},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-81.1,389.1,387.9);


(lib.Символ89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ86();
	this.instance.setTransform(143.5,38.6,0.88,0.88,0,0,0,52.5,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.7,-5.8,96.1,64.9);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ69();
	this.instance.setTransform(475,-220.1,1,1,0,0,0,7.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAhAtQg+gNhEAEQhFADgCgdQgBgaBGgWQBHgWBAAPQBCAPAkAQQAjAPgFAQQgGARghAMQgQAGgXAAQgYAAghgHg");
	this.shape.setTransform(31,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AifBGQgLgbA8grQA8gqA+gYQBAgZArAZQArAXAAARQgBARgaAFQgaAEhAACQg+ADhCAuQgqAcgTAAQgLAAgEgJg");
	this.shape_1.setTransform(31.9,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F304F").s().p("AiXBiQhHgFAOhDQAOhBA+gIQA9gJBTgaQBVgZA+AJQA+AJgMBCQgMBAg5AdQg6AdhSACIgmAAQg8AAg1gDg");
	this.shape_2.setTransform(21.2,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F304F").s().p("AhyBiQgsgSgRg7QgQg4A7gkQA7gkBTgCQBVgCAkAQQAkAQAKBAQALA+gyAaQgxAbhRAIQgWADgVAAQgxAAgegNg");
	this.shape_3.setTransform(21.4,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-22.5,72.5,42.9);


(lib.Символ57 = function(mode,startPosition,loop) {
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

	// Слой 4
	this.instance = new lib.Символ89();
	this.instance.setTransform(192.8,147.8,1.24,1.24,0,0,0,76.2,37);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ85();
	this.instance_1.setTransform(154.5,188.7,1.08,1.08,0,0,0,12.5,55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(191.6,157.2,1,1,0,0,0,191.6,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-188.8},3,cjs.Ease.get(1)).to({y:-172.8},1,cjs.Ease.get(1)).to({y:157.2},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,59.2,383.1,228.1);


(lib.Символ44 = function(mode,startPosition,loop) {
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

	// Символ 47
	this.instance = new lib.Символ47();
	this.instance.setTransform(50,32,1,1,0,0,0,13.5,12);

	this.instance_1 = new lib.Символ76();
	this.instance_1.setTransform(50,32,1,1,0,0,0,13.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Символ 48
	this.instance_2 = new lib.Символ48();
	this.instance_2.setTransform(80.5,32,1,1,0,0,0,8,12);

	this.instance_3 = new lib.Символ77();
	this.instance_3.setTransform(80.5,32,1,1,0,0,0,8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ52();
	this.instance_4.setTransform(69.4,57.6,0.71,0.71,-6,0,0,44.5,25.3);

	this.instance_5 = new lib.Символ75();
	this.instance_5.setTransform(70,55.8,1,1,0,0,0,21.2,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ49();
	this.instance_6.setTransform(59.5,29.5,1,1,0,0,0,58.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-18,117,95);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// zombie_06.png
	this.head = new lib.Символ44();
	this.head.setTransform(-193.5,-70.5,1,1,0,0,0,68.5,88.5);

	this.timeline.addTween(cjs.Tween.get(this.head).to({rotation:14,y:-66.5},4,cjs.Ease.get(1)).to({rotation:0,y:-70.5},5,cjs.Ease.get(1)).to({rotation:14,y:-66.5},4,cjs.Ease.get(1)).to({rotation:0,y:-70.5},5,cjs.Ease.get(1)).to({rotation:14,x:-190.5,y:-67.5},4,cjs.Ease.get(1)).to({rotation:0,x:-193.5,y:-70.5},5,cjs.Ease.get(1)).wait(1));

	// zombie_23.png
	this.instance = new lib.Символ43();
	this.instance.setTransform(-207.5,-25,1,1,0,0,0,11.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-17},4,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(1)).to({rotation:-17},4,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(1)).to({rotation:-17},4,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(1)).wait(1));

	// zombie_19.png
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(-199.5,-23.5,1,1,0,0,0,42.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:7,x:-198.5},4,cjs.Ease.get(1)).to({rotation:0,x:-199.5},5,cjs.Ease.get(1)).to({rotation:-2,x:-198.5,y:-23.6},4,cjs.Ease.get(1)).to({rotation:0,x:-199.5,y:-23.5},5,cjs.Ease.get(1)).to({rotation:5,y:-23.6},4,cjs.Ease.get(1)).to({rotation:0,y:-23.5},5,cjs.Ease.get(1)).wait(1));

	// zombie_17.png
	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(-199.5,-41.5,1,1,0,0,0,10.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:10.6,rotation:-20},4,cjs.Ease.get(1)).to({regX:10.5,rotation:0},5,cjs.Ease.get(1)).to({regX:10.6,rotation:-20},4,cjs.Ease.get(1)).to({regX:10.5,rotation:0},5,cjs.Ease.get(1)).to({regX:10.6,rotation:-20},4,cjs.Ease.get(1)).to({regX:10.5,rotation:0},5,cjs.Ease.get(1)).wait(1));

	// nog1
	this.instance_3 = new lib.Символ41();
	this.instance_3.setTransform(-193.5,32,1,1,0,0,0,65.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},2,cjs.Ease.get(1)).to({rotation:-38},2,cjs.Ease.get(1)).to({rotation:0},1,cjs.Ease.get(1)).wait(1));

	// nog2
	this.instance_4 = new lib.Символ46();
	this.instance_4.setTransform(-201.5,21.9,1,1,0,0,0,29.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},2,cjs.Ease.get(1)).to({rotation:70,x:-196.5,y:11.9},2,cjs.Ease.get(1)).to({rotation:0,x:-201.5,y:21.9},1,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.instance_5 = new lib.Символ50();
	this.instance_5.setTransform(-175.4,155.3,1,1,0,0,0,101.5,21.1);
	this.instance_5.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.9,-177,203.1,353.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.pric = new lib.Символ2();
	this.pric.setTransform(-239.1,-132.8,1,1,0,0,0,62.4,60.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).to({x:-113.1},18,cjs.Ease.get(1)).to({x:-235.1},16,cjs.Ease.get(1)).to({x:-239.1},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.zomb_1 = new lib.Символ40();
	this.zomb_1.setTransform(71.5,74.5,1,1,0,0,0,71.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.zomb_1).to({x:111.5},14,cjs.Ease.get(1)).to({x:91.5},15,cjs.Ease.get(1)).to({x:71.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.7,-200.1,230.9,376.4);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(134.5,41.4,1,1,0,0,0,165.5,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271,82.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl_1 = new lib.Символ2_1();
	this.girl_1.setTransform(168.5,237.2,1,1,0,0,0,166.5,135.5);

	this.timeline.addTween(cjs.Tween.get(this.girl_1).to({x:218.5},15,cjs.Ease.get(-1)).to({x:268.5},15,cjs.Ease.get(1)).to({x:216.8},15,cjs.Ease.get(-1)).to({x:168.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,20.6,389.1,387.8);


(lib.Символ93 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.zomb = new lib.Символ39();
	this.zomb.setTransform(348.4,251.5,1,1,0,0,0,71.5,74.5);

	this.timeline.addTween(cjs.Tween.get(this.zomb).wait(1).to({x:488.4},3,cjs.Ease.get(1)).wait(1).to({x:348.4},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-23.1,230.9,376.4);


(lib.Символ92 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.girl = new lib.Символ32();
	this.girl.setTransform(157.6,152.6,0.85,0.85,0,0,0,183.7,200.1);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1).to({scaleX:1.01,scaleY:1.01,x:187.3,y:181.3},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.85,scaleY:0.85,x:157.6,y:152.6},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,330.8,329.7);


// stage content:



(lib.zombie_1024x768 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
			
			_this.bg.x=windowSize.width/2;
			_this.bg.y=windowSize.height;
			_this.bg.scaleX=_this.bg.scaleY=1;
			
			_this.zomb_2.x=windowSize.width/4;
			_this.zomb_2.y=windowSize.height;
			_this.zomb_2.scaleX=_this.zomb_2.scaleY=1;
			
			_this.girl_2.x=windowSize.width*0.75;
			_this.girl_2.y=windowSize.height;
			_this.girl_2.scaleX=_this.girl_2.scaleY=1;
			
			
			_this.text.x=windowSize.width/2;
			_this.text.y=0;
			_this.text.scaleX=_this.text.scaleY=1;
			
			
			
			_this.btn.x=windowSize.width/2;
			_this.btn.y=windowSize.height;
			_this.btn.scaleX=_this.btn.scaleY=1;
			
			
			if(windowSize.width<767){
				_this.bg.scaleX=_this.bg.scaleY=0.75;
				_this.zomb_2.scaleX=_this.zomb_2.scaleY=0.6;
				_this.girl_2.scaleX=_this.girl_2.scaleY=0.6;
				_this.text.scaleX=_this.text.scaleY=0.6;
				
			}
			
			
			if(windowSize.width<767 && windowSize.width>windowSize.height){
			    _this.text.x=windowSize.width/2;
				_this.text.y=0-(windowSize.height/10);
			}
			
		}
		
		window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
			
		//Actions
			
		
			
		
		
		
		
		var onClick = function(evt) {
			window.open(mixTAG, "_blank");
		};
		
		stage.canvas.addEventListener("click", onClick, false);
		
			
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn = new lib.Символ6_1();
	this.btn.setTransform(512.1,768.1,1,1,0,0,0,135.1,119.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// girl
	this.girl_2 = new lib.Символ92();
	this.girl_2.setTransform(725.4,768,1,1,0,0,0,254.5,376.4);

	this.timeline.addTween(cjs.Tween.get(this.girl_2).wait(1));

	// zombie
	this.zomb_2 = new lib.Символ93();
	this.zomb_2.setTransform(353.6,768,1,1,0,0,0,103.5,400.1);

	this.timeline.addTween(cjs.Tween.get(this.zomb_2).wait(1));

	// text
	this.text = new lib.Символ57();
	this.text.setTransform(512.2,0,1,1,0,0,0,192.5,-20.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.bg = new lib.Символ96();
	this.bg.setTransform(512.1,768.1,1,1,0,0,0,656.1,844.1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(178.6,-295.6,2898.6,1447.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
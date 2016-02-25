(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/characteristics.png", id:"characteristics"},
		{src:"images/ffon.jpg", id:"ffon"},
		{src:"images/round.png", id:"round"},
		{src:"images/shok.jpg", id:"shok"},
		{src:"images/st.png", id:"st"},
		{src:"images/st06.png", id:"st06"},
		{src:"images/st09.png", id:"st09"},
		{src:"images/st14.png", id:"st14"},
		{src:"images/st17.png", id:"st17"},
		{src:"images/st20.png", id:"st20"},
		{src:"images/st25.png", id:"st25"},
		{src:"images/st27.png", id:"st27"}
	]
};



// symbols:



(lib.characteristics = function() {
	this.initialize(img.characteristics);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,356);


(lib.ffon = function() {
	this.initialize(img.ffon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.shok = function() {
	this.initialize(img.shok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.st = function() {
	this.initialize(img.st);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,143);


(lib.st06 = function() {
	this.initialize(img.st06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,212);


(lib.st09 = function() {
	this.initialize(img.st09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,95);


(lib.st14 = function() {
	this.initialize(img.st14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,203);


(lib.st17 = function() {
	this.initialize(img.st17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,130);


(lib.st20 = function() {
	this.initialize(img.st20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,112);


(lib.st25 = function() {
	this.initialize(img.st25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,107);


(lib.st27 = function() {
	this.initialize(img.st27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,120);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.round();
	this.instance.setTransform(-83,-83);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-83,166,166);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFoCvQgqgUgbgsQgagtAAhCQAAhbA0g0QA0g0BcAAQBeAAA0AzQAzAzAABcQAABAgWArQgWAqgrAYQgqAYg/AAQhBAAgpgVgAGUhRQgVAZAAA4QAAA6AVAZQAVAZAkAAQAnAAAUgZQAVgYAAg+QAAg1gVgZQgXgZglAAQgiAAgWAZgAnsCvQgqgUgagsQgagtAAhCQAAhbA0g0QA0g0BcAAQBeAAA0AzQAzAzAABcQAABAgWArQgWAqgrAYQgqAYhAAAQhAAAgqgVgAm/hRQgWAZABA4QgBA6AWAZQAVAZAlAAQAlAAAVgZQAVgYAAg+QAAg1gWgZQgWgZglAAQgjAAgVAZgA7cCvQgqgUgbgsQgagtAAhCQAAhbA0g0QA0g0BcAAQBfAAAzAzQA0AzAABcQAABAgXArQgWAqgrAYQgpAYhAAAQhAAAgqgVgA6vhRQgWAZAAA4QAAA6AWAZQAUAZAlAAQAmAAAVgZQAUgYABg+QAAg1gWgZQgWgZglAAQgjAAgVAZgAeIC9IAAl5IB1AAIAACSIA+AAQBXAAApAfQAqAcAABAQAAA1gmAcQgnAbhHAAgAf9BsIA8AAQA3AAAAgoQAAgjg3AAIg8AAgAZmC9IAAkbIh4AAIAAheIFkAAIAABeIh3AAIAAEbgAVpC9IgTg+IiFAAIgSA+Ih4AAICPl5IB/AAICPF5gAU9AtIgpiHIgpCHIBSAAgALRC9IAAl5IDcAAQA3AAAdAbQAdAbAAAoQAAAigVAYQgOAQgbAJQApAKATAWQATAYAAAkQAAAegNAXQgOAYgYAOQgPAIgdAEIg0AFgANHBsIA8AAQAfAAAMgLQAMgLAAgSQAAgRgMgKQgMgKgfAAIg8AAgANHgnIAzAAQAcAAAKgKQALgJAAgSQAAgRgLgJQgKgJgbAAIg0AAgAiCC9IAAl5IE+AAIAABNIjJAAIAABFIA9AAQBWAAAqAfQApAcAABAQABA1gmAcQgnAbhHAAgAgNBsIA6AAQA3AAAAgoQAAgjg3AAIg6AAgAu6C9IAAl5IDCAAQBAAAAgAeQAgAeAAA4QgBA6ghAeQgkAghHAAIg/AAIAACNgAtEgaIAcAAQAiAAAOgMQAOgMAAgSQgBgSgLgNQgMgMghAAIghAAgAx9C9IAAkcIiAAAIAAEcIh1AAIAAl5IFqAAIAAF5gA/vC9IAAkcIiAAAIAAEcIh1AAIAAl5IFqAAIAAF5g");
	this.shape.setTransform(0,5,0.903,0.903);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205.6,-12.7,411.3,35.5);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiBuIAAg1IA7AAIAAA1gAgWAnIgHgyIADgCIAWgEQAIgCAFgDQAGgDACgEQADgEAAgGQAAgIgGgEQgGgFgJAAQgLAAgMAGQgMAFgKAKIgggpQAIgIAIgFQAJgGAJgEQALgFALgCQAMgDALAAQARAAAOAFQAOAEALAJQAKAJAFAMQAHAMAAAPQAAAOgGALQgDALgJAHQgHAGgMAFQgLAFgNADIgEAUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-11,15.8,22.1);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADVCEIAAgrIh0AAIgEArIg2AAIAAhgIAUAAIAJgeIAHggIAEgpIACg7IClAAIAACiIAYAAIgHBggACLhHQgCArgDASQgEAVgJAZIBBAAIAAhtIgvAAgAo6BaQgLgCgLgEQgKgEgKgHQgJgFgIgIQgIgHgGgJQgGgKgEgKQgFgKgCgLQgCgKAAgLQAAgMACgLQADgKAEgLQAEgKAGgJQAHgJAIgIQAHgHAKgHQAJgGALgEQAKgFAMgBQAMgDAMAAQANAAALADQAMABALAFQAKAEAKAGQAJAHAIAHQAHAHAHAKQAGAIAEALQAEAKACALQADALAAAMQAAAMgDAIQgCALgEALQgEAKgHAJQgGAJgIAIQgIAHgJAGQgJAHgLAEQgLAEgLACQgMADgMAAQgNAAgMgDgAo4hIQgKAFgHAIQgHAIgEAKQgEALAAAMQAAAMAEAIQAEALAHAIQAIAJAKAEQAKAFAMgBQAMABALgFQAKgEAHgJQAHgHAEgMQAEgIAAgMQAAgMgEgLQgEgKgHgIQgIgIgKgFQgKgFgMAAQgMAAgLAFgAiUBYQgMgEgMgHIAYgrQALAHANAAQAFAAAEgCQAGgCAEgFIhVieIBDAAIAyBlIAuhlIA/AAIhSCjQgIAPgHAKQgIALgJAGQgJAHgKADQgKACgNAAQgPAAgNgDgALBBZIAAjXIA8AAIAABDIAhAAQAUABAQAFQARAEAMAJQAMAKAGANQAEAIABAIQACAFAAAKQAAARgGAOQgGAOgLAKQgMAJgQAFQgQAGgUAAgAL9AmIAfAAQAPAAAJgGQAIgIAAgMQAAgLgIgGQgJgGgOAAIggAAgAIpBZIAAiiIhBAAIAAg1IC/AAIAAA1IhBAAIAACigAEmBZIAAjXICvAAIAAAyIh0AAIAAAhIBpAAIAAAuIhpAAIAAAiIB1AAIAAA0gAkGBZIgphCIgqBCIhEAAIBLhtIhIhqIBFAAIAnA9IAng9IBDAAIhHBqIBKBtgArxBZIAAiiIhKAAIAACiIg8AAIAAjXIDCAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.8,-13.2,177.8,26.5);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEMBtIg2hRIgXAZIAAA4Ig8AAIAAjXIA8AAIAABYIBLhYIBIAAIhTBdIBVB6gAAuBtIgQgnIhSAAIgPAnIg/AAIhIAAIg3hRIgVAZIAAA4Ig9AAIAAjXIA9AAIAABYIBKhYIBHAAIhSBdIBVB6IBdjZIA3AAIBcDZgAANAXIgWg8IgZA8IAvAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-10.9,68.1,21.9);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyCEIAAgrIhzAAIgEArIg2AAIAAhgIATAAIAKgeIAHggIAEgpIABg7IClAAIAACiIAXAAIgGBggAh8hHQgCArgDASQgEAVgIAZIBAAAIAAhtIgvAAgAMLBaQgLgCgLgEQgKgEgKgHQgJgFgIgIQgIgHgGgJQgGgKgEgKQgFgKgCgLQgCgKAAgLQAAgMACgLQADgKAEgLQAEgKAGgJQAHgJAIgIQAHgHAKgHQAJgGALgEQAKgFAMgBQAMgDAMAAQANAAALADQAMABALAFQAKAEAKAGQAJAHAIAHQAHAHAHAKQAGAIAEALIACAHQALAlgLAjIgCAHQgEAKgHAJQgGAJgIAIQgIAHgJAGQgJAHgLAEQgLAEgLACQgMADgMAAQgNAAgMgDgAMNhIQgKAFgHAIQgHAIgEAKQgEALAAAMQAAAMAEAIQAEALAHAIQAIAJAKAEQAKAFAMgBQAMABALgFQAKgEAHgJQAHgHAEgMQAEgIAAgMQAAgMgEgLQgEgKgHgIQgIgIgKgFQgKgFgMAAQgMAAgLAFgAFUBaQgLgCgLgEQgKgEgKgHQgJgFgIgIQgIgHgGgJQgGgKgEgKQgFgKgCgLQgCgKAAgLQAAgMACgLQADgKAEgLQAEgKAGgJQAHgJAIgIQAHgHAKgHQAJgGALgEQAKgFAMgBQAMgDAMAAQANAAALADQAMABALAFQAKAEAKAGQAJAHAIAHQAHAHAHAKQAGAIAEALQAEAKACALQADALAAAMQAAAMgDAIQgCALgEALQgEAKgHAJQgGAJgIAIQgIAHgJAGQgJAHgLAEQgLAEgLACQgMADgMAAQgNAAgMgDgAFWhIQgKAFgHAIQgHAIgEAKQgEALAAAMQAAAMAEAIQAEALAHAIQAIAJAKAEQAKAFAMgBQAMABALgFQAKgEAHgJQAHgHAEgMQAEgIAAgMQAAgMgEgLQgEgKgHgIQgIgIgKgFQgKgFgMAAQgMAAgLAFgAs+BaQgLgBgKgFQgKgDgJgHQgJgFgHgIQgIgHgGgJQgGgKgEgKQgFgKgCgMQgCgJAAgMQAAgMACgLQACgLAFgKQAEgLAGgIQAGgKAIgHQAHgIAJgGQAJgGALgEQAKgFAMgBQALgDAMAAQARAAAOAEQANADALAGQALAGAJAIQAJAJAIAKIgsAiQgKgMgLgGQgMgHgPAAQgLAAgKAFQgKAEgHAIQgGAIgEAKQgEALAAAMQAAAMAEAJQAEAKAGAIQAHAIAKAFQAKAEALAAQAIAAAHgCQAHgCAGgEQAKgFALgOIAtAhQgIALgJAIQgKAKgLAGQgMAHgOADQgPAEgRAAQgMAAgLgDgArFBXIAEguIAOABQAIAAAEgEQAHgFAEgMQAFgPACgZQACgUABg6IAAgdICnAAIAADXIg8AAIAAiiIgzAAIAAAIQgCA7gDAUQgDAPgDAMQgEAMgFAJQgEAIgGAGQgGAGgGAEQgGACgIACIgPABQgQAAgUgEgAIBBZIAAjXICcAAIAAA1IhgAAIAACigACmBZIg2hRIgWAZIAAA4Ig9AAIAAjXIA9AAIAABYIBKhYIBIAAIhTBdIBVB6gAkkBZIgQgnIhUAAIgPAnIg/AAIBcjZIA6AAIBcDZgAlFADIgYg8IgZA8IAxAAg");
	this.shape.setTransform(0.3,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.7,-13.2,184,26.5);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiABuQgMgCgKgEQgLgFgJgGQgJgGgIgHQgIgIgGgJQgGgJgFgKQgEgLgCgKQgCgMAAgLQAAgKACgLQACgLAEgLQAFgKAGgJQAHgJAHgIQAIgHAJgGQAKgGAKgFQALgEAMgCQAMgDAMAAQANAAALADQALACAMAEQAKAFAKAGQAIAGAJAHQAHAIAGAJQAGAJACAKQAFALACAKQACAMAAAKQAAALgCALQgCALgFALQgCAJgGAJQgGAKgIAHQgIAIgJAGQgJAGgLAFQgLAEgMACQgLADgNAAQgMAAgMgDgAh+g1QgKAFgHAIQgIAIgDALQgFALAAAKQAAALAFALQAEALAHAIQAHAIALAFQAKAEAMAAQAMAAALgEQAKgFAHgIQAHgIAEgLQAEgLAAgLQAAgKgEgLQgEgLgHgIQgIgIgKgFQgKgEgNAAQgMAAgKAEgABgBsIAAiiIhCAAIAAg1IC/AAIAAA1IhBAAIAACig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-11.3,44.3,22.6);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AOzBuQgKgCgLgEQgJgEgJgGQgKgGgHgIQgIgHgFgJQgHgJgEgKQgEgLgCgLQgCgMgBgLQABgKACgMQACgKAEgLQAEgKAGgJQAGgJAIgIQAHgHAKgGQAJgGAKgFQAKgEAMgCQALgDAMAAQARAAAOAEQANAEALAGQAMAFAIAJQAJAIAIALIgsAhQgKgMgLgGQgMgGgPAAQgLgBgKAFQgJAFgHAHQgHAIgEALQgEALAAAKQAAAMAEALQAEAKAHAIQAHAHAJAFQAKAFALgBQAIAAAIgCQAGgBAGgEQAKgFALgOIAuAgQgJALgIAJQgLAJgLAGQgMAHgOADQgOAEgSABQgMAAgLgDgAyeBuQgMgCgKgEQgKgFgKgGQgJgGgIgHQgIgIgGgJQgGgJgFgKQgEgLgCgKQgCgMAAgLQAAgKACgLQACgLAEgLQAFgKAGgJQAGgJAIgIQAIgHAKgGQAJgGAKgFQALgEAMgCQALgDANAAQANAAALADQAMACAKAEQALAFAKAGQAIAGAJAHQAHAIAGAJQAHAJADAKQAFALACAKQADAMgBAKQABALgDALQgCALgFALQgEAJgGAJQgGAKgIAHQgIAIgJAGQgKAGgKAFQgLAEgLACQgMADgNAAQgMAAgMgDgAycg1QgKAFgHAIQgIAIgDALQgFALAAAKQAAALAFALQAEALAHAIQAIAIAKAFQAKAEAMAAQAMAAALgEQAKgFAHgIQAHgIAEgLQAEgLAAgLQAAgKgEgLQgEgLgHgIQgIgIgKgFQgLgEgMAAQgMAAgKAEgAkaBtQgOgCgMgFQgLgEgLgIIgTgOIAggoQAMAMAPAGQAHAEAIACQAJACAKAAQAQAAAJgHQAIgFAAgKQAAgJgJgFQgJgFgRAAIgWAAIAAgrIAVAAQAQAAAIgFQAIgGAAgJQAAgIgIgFQgHgGgNAAQgOAAgQAHQgPAFgLAKIgegjIASgPQAJgHALgEQAMgGANgCQANgDAPgBQASAAAQAFQAOAFALAHQALAIAFALQAHALgBAMQABAJgDAJQgCAHgFAGQgDAGgHAFIgNAHQAJAEAGABQAHAFAGAGQAFAGACAJQADAIAAAKQAAAOgGAMQgFANgMAJQgLAJgQAFQgRAFgTAAQgSAAgPgDgARDBsIAAjXIA9AAIAABEIAhAAQATAAARAFQAQAEANAKQAMAJAGAMQAEAHABAIQACAIAAAJQAAASgGANQgGAOgMAKQgLAKgQAFQgRAFgTAAgASAA5IAfAAQAPABAIgHQAJgHAAgMQAAgMgJgHQgIgGgOAAIggAAgAL/BsIAAhBIgaAAIgsBBIhFAAIA0hLQgLgFgIgHQgIgFgGgJQgGgHgDgJQgDgLAAgNQAAgKACgIQABgIAEgHQAHgOANgJQALgJARgFQAQgEATAAIBmAAIAADXgALAgxQgEADgCAFQgDAGAAAHQAAALAJAIQAEADAGACQAGACAIAAIAnAAIAAg2IgnAAQgQAAgIAHgAIoBsIgPgmIhUAAIgPAmIg/AAIBcjYIA6AAIBcDYgAIIAXIgZg8IgZA8IAyAAgACqBsIAAjXIBvAAQAVAAAOAFQAPAFAKAJQAGAIAEAIQADAJAAALQAAAJgCAIQgDAIgEAFQgEAHgHAEIgNAHQALAEAHACQAIAFAFAHQAGAGADAIQAEAJAAALQgBAOgFALQgGALgLAIQgKAIgQAEQgPAEgTAAgADlA8IAvAAQANgBAHgFQAIgFAAgKQAAgJgHgFQgHgFgPgBIguAAgADlgUIAmAAQANgBAHgFQAIgEAAgKQAAgJgHgFQgHgFgNAAIgnAAgABIBsIAAjXIA8AAIAADXgAiHBsIAAjXIA9AAIAABEIAgAAQAUAAAQAFQAPAEAMAKQAMAJAGAMQAEAHACAIQABAIAAAJQAAASgFANQgHAOgLAKQgMAKgNAFQgRAFgTAAgAhKA5IAeAAQAPABAJgHQAJgHAAgMQAAgMgJgHQgJgGgOAAIgfAAgAmiBsIgQgmIhUAAIgPAmIg/AAIBdjYIA5AAIBdDYgAnDAXIgYg8IgZA8IAxAAgAqcBsIg2hRIgXAZIAAA4Ig8AAIAAjXIA8AAIAABYIBLhYIBHAAIhSBdIBVB6gAu8BsIAAiiIhCAAIAAg1IC/AAIAAA1IhBAAIAACig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.5,-11.3,255.1,22.6);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AAdBsIAAjXICvAAIAAAzIhzAAIAAAhIBoAAIAAAuIhoAAIAAAiIB1AAIAAAzgAhDBsIAAhSIhNAAIAABSIg9AAIAAjXIA9AAIAABRIBNAAIAAhRIA8AAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.6,-10.8,41.2,21.7);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st27();
	this.instance.setTransform(-77.5,-60);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-60,155,120);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st25();
	this.instance.setTransform(-82.5,-53.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.5,-53.5,165,107);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st20();
	this.instance.setTransform(-21.5,-56);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-56,43,112);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st06();
	this.instance.setTransform(-44,-106);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44,-106,88,212);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st();
	this.instance.setTransform(-63.5,-71.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.5,-71.5,127,143);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st14();
	this.instance.setTransform(-86,-101.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86,-101.5,172,203);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st17();
	this.instance.setTransform(-34.5,-65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.5,-65,69,130);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.st09();
	this.instance.setTransform(-41.5,-47.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.5,-47.5,83,95);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("A7zGIQilAAAAilIAAnFQAAilClAAMA3nAAAQClAAAAClIAAHFQAAClilAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194.5,-39.2,389.1,78.5);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shok();
	this.instance.setTransform(-21.9,-21.9,0.708,0.708);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-21.9,43.9,43.9);


(lib.Символ15_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3301").s().p("AAxDjIAAhLIirAAIAABLIhgAAIAAihIAiAAIBikfIBiAAIBlEfIAhAAIAAChgAAJBCIgri1IgCAAIgQBTIgdBiIBaAAgAw9CVQgcgIgVgQIgVgSQgIgKgHgMQgGgMgEgOQgDgPgBgQIAAh+QABgQADgOQAEgOAGgMQAJgQAagZQAVgQAdgHQAbgIAeAAQAdAAAcAIQAcAIAWAPQAbAZAIAQQAHAMADAOQAEAOAAAQIAAB+QAAAQgEAPQgDAOgHAMQgGAMgIAKIgVASQgVAQgcAIQgbAIgfAAQgeAAgbgIgAwuiCQgIAHgGAHQgEAJAAAJIAAB+QgBALAGAHQAFAIAJAGQARAJAYABQAZAAARgLQAJgFAFgIQAFgHAAgLIAAh+QAAgKgFgIQgGgJgJgFQgQgKgaAAQgYAAgRAKgAWbCYIAAh+IgPAAIhlB+Ih2AAIByiHQgQgHgNgIQgOgHgLgNQgLgOgFgTQgGgVAAgaQABgdAKgYQAKgWATgQQARgQAbgIQAagIAgAAICWAAIAAF1gAVCh5QgLALgBAUQABATAKALQAMANAWAAIA4AAIAAhUIg4AAQgUAAgNAKgARFCYIAAiWIAJhFIgCAAIgkBHIhaCUIhZAAIAAl1IBfAAIAACqIgIA2IACAAIAghBIBfifIBYAAIAAF1gALaCYIAAiOIhsAAIAACOIhfAAIAAl1IBfAAIAACOIBsAAIAAiOIBgAAIAAF1gAGQCYIgYhLIhkAAIgXBLIhmAAICDl1IBWAAICHF1gAFhgGIgahtIgCAAIgcBtIA4AAgAnCCYIA3h6Ih0jsIhhCtIBqC5IhvAAIhCiAIhACAIhuAAIBpi5Ihpi8IBuAAIBACAIBCiAIDKAAIAlBRIAaBFIACAAIA+iWIBqAAIiqF1gA0xCYIAAkbIhqAAIAAEbIheAAIAAl1IEoAAIAAF1g");
	this.shape_1.setTransform(-2,0);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155.1,-22.8,306.2,45.6);


(lib.Символ14_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3301").s().p("AjwDhIAAhMIitAAIAABMIhhAAIAAihIAiAAIBikgIBkAAIBmEgIAgAAIAAChgAkZBAIgti2IgCAAIgQBUIgdBiIBcAAgAGgCVIAAh+IgQAAIhlB+IjGAAIgwidIgVhuIgDAAIgXBuIgrCdIhlAAIB+l1IBVAAIB8FjIBjh1QgRgGgNgIQgOgIgKgNQgLgOgGgTQgGgUAAgbQABgdAKgXQAKgXATgQQASgQAagIQAagIAhAAICVAAIAAF1gAFHh7QgMALAAATQAAATALAMQAMAMAWAAIA4AAIAAhUIg4AAQgVAAgMALg");

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.1,-22.5,102.3,45.1);


(lib.Символ13_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3301").s().p("ASQC4QgbgIgVgQQgWgQgLgYQgHgMgDgOQgEgOAAgQIAAh/QAAgQAEgOQADgOAHgMQAMgXAWgRQATgQAcgIQAagIAdAAQATAAARAEQAUAEAQAKQATAKAOAQQAQASALAYIhNAfQgKgQgSgIQgRgIgTADQgUACgMAKQgNALAAARIAAB/QAAAQANALQANALATACQATABAQgIQASgIAHgTIBTAmQgMAWgQARQgPAQgTAKQgRAKgUAFQgSAEgSAAQgcAAgagIgAufC4QgdgIgVgQIgUgSQgJgKgHgMQgGgMgEgOQgDgOAAgQIAAh/QAAgPADgPQAEgOAGgMQAJgQAagYQAWgQAdgIQAbgIAdAAQAeAAAbAIQAdAIAVAQQAcAYAIAQQAGAMAEAOQADAPAAAPIAAB/QAAAQgDAOQgEAOgGAMQgHAMgIAKIgUASQgWAQgcAIQgbAIgeAAQgeAAgbgIgAuRheQgIAGgFAHQgFAJAAAJIAAB/QAAAKAFAIQAFAHAJAGQARAKAZAAQAYAAASgLQAIgFAFgHQAFgIABgKIAAh/QgBgKgFgIQgFgIgJgGQgRgKgaAAQgXAAgSALgAOrC7IhgiGIgEAEIAACCIhfAAIAAl1IBfAAIAACLIBmiLIB2AAIiVC5ICVC8gAGwC7IAAl1IEFAAIAABZIilAAIAAA6ICYAAIAABRIiYAAIAAA4IClAAIAABZgAExC7IgvifIgWhsIgDAAIgXBsIgtCfIhlAAIB+l1IBYAAICBF1gAg4C7IAAkbIhqAAIAAEbIhfAAIAAl1IEmAAIAAF1gAmcC7IAAhsIAHhMIgEAAIgxCBIhBAAIgziBIgCAAIAGBMIAABsIhfAAIAAl1IBfAAIBPC3IBPi3IBgAAIAAF1gAyIC7IhhiGIgDAEIAACCIhgAAIAAl1IBgAAIAACLIBliLIB2AAIiUC5ICUC8g");

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135.7,-19.2,271.4,38.6);


(lib.Символ12_1 = function() {
	this.initialize();

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3301").s().p("AA0EeIAAhLIirAAIAABLIhhAAIAAihIAiAAIBikfIBiAAIBmEfIAgAAIAAChgAAKB9Igqi1IgDAAIgQBRIgcBkIBZAAgAxJDQQgagIgVgQQgVgRgNgXQgGgMgDgOQgDgPAAgPIAAiAQAAgPADgOQADgOAGgMQAMgYAXgRQATgPAcgJQAbgIAcAAQASAAASAEQATAFARAJQASALAPAQQAQASALAYIhOAfQgIgRgTgIQgRgHgUACQgSACgNAKQgOAMAAAQIAACAQAAAQAOALQANAKASACQAUACAQgIQASgJAHgSIBSAmQgKAWgRARQgPAPgTALQgSAKgTAFQgSAEgTAAQgbAAgbgIgARIDTIAAiWIAKhFIgDAAIgjBHIhaCUIhaAAIAAl1IBfAAIAACoIgIA4IADAAIAehBIBhifIBWAAIAAF1gALdDTIAAiWIAKhFIgDAAIgkBHIhaCUIhZAAIAAl1IBfAAIAACoIgIA4IACAAIAghBIBfifIBXAAIAAF1gAF9DTIhgiGIgEAEIAACCIhfAAIAAl1IBfAAIAACKIBmiKIB2AAIiVC2ICVC/gAlBDTIgYhMIhkAAIgXBMIjFAAIgvigIgWhrIgDAAIgXBrIgsCgIhmAAIB+l1IBYAAIB+FqIB/lqIBWAAICHF1gAlwAzIgahrIgCAAIgcBrIA4AAgAPpjHQgRgGgNgMQgOgLgHgRQgIgSAAgWIBJAAQAAAJAHAGQAFAGAKAAQAKAAAGgGQAGgGABgJIBJAAQAAAWgIASQgHARgOALQgNAMgSAGQgRAGgTAAQgSAAgSgGg");

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.2,-28.6,238.4,57.4);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AnJC8QgRgEgRgIQgQgJgPgNQgQgNgNgQIA8g5QAOARAVAKQAUAIAUABQAUABANgHQAOgIABgOQABgIgGgGQgFgGgKgFQgRgJgbgEQgXgDgUgJQgWgKgPgOQgRgNgJgUQgJgWAAgaQAAgbALgWQALgUAUgPQASgOAZgHQAYgHAaAAIAiACQASAEAPAGQARAHAOALQAQANAOARIg9AvQgPgPgTgIQgRgIgSABQgRAAgLAJQgLAJgBAQQABANAOAIQAMAIAXAGQAdAFAUAHQAaAIAQANQAUANAJAWQAGAMACAOQACAOAAARQgBAOgEAMQgEAMgGALQgNAUgWAPQgVAOgaAHQgaAHgaAAQgRAAgRgEgAHIC7IABhsIAGhMIgEAAIgxCBIhBAAIgyiBIgDAAIAGBMIAABsIheAAIAAl1IBeAAIBPC3IBQi3IBfAAIAAF1gAAyC7IAAl1IBeAAIAAF1gAjqC7IAAl1IBfAAIAAEYICXAAIAABdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.2,-19.2,110.5,38.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AgBC4QgdgIgWgQIgTgSQgKgKgGgMQgHgMgDgOQgEgOABgQIAAh/QgBgPAEgPQADgOAHgMQAIgQAbgYQAVgQAdgIQAZgIAeAAQAeAAAbAIQAdAIAVAQQAbAYAJAQQAGAMAEAOQADAPAAAPIAAB/QAAAQgDAOQgEAOgGAMQgHAMgJAKIgTASQgWAQgdAIQgbAIgdAAQgeAAgZgIgAALheQgJAGgCAHQgGAJAAAJIAAB/QABAKAFAIQADAHAIAGQASAKAZAAQAYAAARgLQAJgFAEgHQAGgIAAgKIAAh/QAAgKgGgIQgFgIgIgGQgSgKgZAAQgYAAgRALgAq0C4QgdgIgWgQIgUgSQgJgKgGgMQgHgMgDgOQgDgOAAgQIAAh/QAAgPADgPQADgOAHgMQAJgQAagYQAVgQAdgIQAbgIAeAAQAeAAAbAIQAcAIAWAQQAbAYAIAQQAHAMADAOQAEAPAAAPIAAB/QAAAQgEAOQgDAOgHAMQgGAMgJAKIgUASQgVAQgcAIQgcAIgeAAQgdAAgbgIgAqmheQgJAGgFAHQgEAJgBAJIAAB/QAAAKAGAIQAFAHAJAGQAQAKAZAAQAZAAARgLQAJgFAEgHQAGgIAAgKIAAh/QAAgKgGgIQgFgIgIgGQgSgKgZAAQgYAAgRALgA1UC4QgbgIgUgQQgWgQgMgYQgGgMgDgOQgDgOAAgQIAAh/QAAgQADgOQADgOAGgMQAMgXAWgRQAVgQAbgIQAbgIAcAAQASAAASAEQATAEARAKQASAKAPAQQAQASALAYIhNAfQgKgQgSgIQgRgIgUADQgTACgMAKQgOALAAARIAAB/QAAAQAOALQANALASACQAUABAQgIQASgIAHgTIBSAmQgKAWgRARQgPAQgTAKQgSAKgTAFQgSAEgTAAQgcAAgagIgAStC7IAAl1IEFAAIAABZIilAAIAAA6ICYAAIAABRIiYAAIAAA4IClAAIAABZgAPEC7IAAkbIhjAAIAAhbIEnAAIAABbIhjAAIAAEbgAL5C7IgYhLIhkAAIgYBLIhlAAICCl1IBXAAICGF1gALKAcIgahsIgDAAIgcBsIA5AAgAEDC7IAAl1IBfAAIAAEYICYAAIAABdgAjsC7IhgiGIgDAEIAACCIhfAAIAAl1IBfAAIAACLIBmiLIB2AAIiUC1ICTDAgAupC7IAAiNIhsAAIAACNIhfAAIAAl1IBfAAIAACOIBsAAIAAiOIBfAAIAAF1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.9,-19.2,291.8,38.6);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.characteristics();
	this.instance.setTransform(-171.1,-126.9,0.713,0.713);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171.1,-126.9,342.4,253.9);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.characteristics();
	this.instance.setTransform(-171.1,-114.9,0.713,0.646);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171.1,-114.9,342.4,229.9);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1324.8},391).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62.1,124.3,124.3);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.765,0.749,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1062.4},341).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-62.1,127,124.3);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1056},161).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-44.5,89,89);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.548,0.536,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1145.6},302).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-44.5,90.9,89);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1232},189).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62.1,124.3,124.3);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2069.8},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-83.2,166,166);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(6.5,-2.4,1.184,1.184,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:-0.1,rotation:1.5,x:3.5,y:-2.5},10,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:-17.2,x:0.8,y:-2.4},9,cjs.Ease.get(1)).to({rotation:2.6,x:3.7,y:-2.3},10,cjs.Ease.get(-1)).to({rotation:22.7,x:6.5,y:-2.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-18,27.4,31.3);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0.691},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-13.2,177.8,26.5);


(lib.Символ10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.691},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-10.9,68.1,21.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(-203.4,-34.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-6.6,skewY:-6,y:-31.2},14,cjs.Ease.get(-1)).to({skewX:-13.9,skewY:-12.4,x:-203.3,y:-27.4},15,cjs.Ease.get(1)).to({skewX:-6.8,skewY:-6.1,y:-31.1},15,cjs.Ease.get(-1)).to({skewX:0,skewY:0,x:-203.4,y:-34.8},15,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-110.5,-91,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2,x:-112.9,y:-90.4},14,cjs.Ease.get(-1)).to({rotation:-4.2,x:-115.5,y:-89.8},15,cjs.Ease.get(1)).to({rotation:-2,x:-113,y:-90.4},15,cjs.Ease.get(-1)).to({rotation:0,x:-110.5,y:-91},15,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(-169.6,19.2,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:0.5,skewY:-0.5,x:-168.9,y:19.4},14,cjs.Ease.get(-1)).to({scaleY:0.72,skewX:1.2,skewY:-1.2,x:-168.3,y:19.7},15,cjs.Ease.get(1)).to({scaleY:0.72,skewX:0.5,skewY:-0.5,x:-168.9,y:19.4},15,cjs.Ease.get(-1)).to({skewX:0,skewY:0,x:-169.6,y:19.2},15,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(-129.6,148.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:0.72,skewX:-2.5,x:-126.2},14,cjs.Ease.get(-1)).to({scaleY:0.72,skewX:-5.3,x:-122.6},15,cjs.Ease.get(1)).to({scaleY:0.72,skewX:-2.5,x:-126},15,cjs.Ease.get(-1)).to({scaleY:0.72,skewX:0,x:-129.6},15,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(-37.4,-2.8,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-2,x:-40.1,y:-4.6},14,cjs.Ease.get(-1)).to({rotation:-4.4,x:-43,y:-6.6},15,cjs.Ease.get(1)).to({rotation:-2.1,x:-40.1,y:-4.7},15,cjs.Ease.get(-1)).to({rotation:0,x:-37.4,y:-2.8},15,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(-128.5,89.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.72,skewX:-2,skewY:-0.3,x:-127.5,y:89.5},14,cjs.Ease.get(-1)).to({scaleY:0.72,skewX:-4.4,skewY:-0.7,x:-126.5,y:89.4},15,cjs.Ease.get(1)).to({scaleY:0.72,skewX:-2.1,skewY:-0.3,x:-127.5,y:89.5},15,cjs.Ease.get(-1)).to({scaleY:0.72,skewX:0,skewY:0,x:-128.5,y:89.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(-53.6,12.7,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-0.5,x:-54.1,y:11.7},14,cjs.Ease.get(-1)).to({rotation:-1.2,x:-54.5,y:10.7},15,cjs.Ease.get(1)).to({rotation:-0.5,x:-54.1,y:11.7},15,cjs.Ease.get(-1)).to({rotation:0,x:-53.6,y:12.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(-107.6,3.3,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-0.5,x:-108.2,y:2.9},14,cjs.Ease.get(-1)).to({rotation:-1.2,x:-108.7,y:2.5},15,cjs.Ease.get(1)).to({rotation:-0.5,x:-108.2,y:3},15,cjs.Ease.get(-1)).to({rotation:0,x:-107.6,y:3.3},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-233.3,-142.5,227.6,334.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(142.1,97.1);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(142.1,140.5);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(98.2,97.1);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(54.7,97.1);

	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(98.2,140.5);

	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(54.7,140.5);

	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(10.8,97.1);

	this.instance_7 = new lib.Символ17();
	this.instance_7.setTransform(-32.7,97.1);

	this.instance_8 = new lib.Символ17();
	this.instance_8.setTransform(10.8,140.5);

	this.instance_9 = new lib.Символ17();
	this.instance_9.setTransform(-32.7,140.5);

	this.instance_10 = new lib.Символ17();
	this.instance_10.setTransform(-76.6,97.1);

	this.instance_11 = new lib.Символ17();
	this.instance_11.setTransform(-120.1,97.1);

	this.instance_12 = new lib.Символ17();
	this.instance_12.setTransform(-76.6,140.5);

	this.instance_13 = new lib.Символ17();
	this.instance_13.setTransform(-120.1,140.5);

	this.instance_14 = new lib.Символ17();
	this.instance_14.setTransform(-164,97.1);

	this.instance_15 = new lib.Символ17();
	this.instance_15.setTransform(-207.5,97.1);

	this.instance_16 = new lib.Символ17();
	this.instance_16.setTransform(-164,140.5);

	this.instance_17 = new lib.Символ17();
	this.instance_17.setTransform(-207.5,140.5);

	this.addChild(this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-229.5,75.2,393.5,87.3);


(lib.Символ16_1 = function() {
	this.initialize();

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.alpha = 0.52;

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7zGIQilAAAAilIAAnFQAAilClAAMA3nAAAQClAAAAClIAAHFQAAClilAAg");

	// Слой 2
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(32,-119.5);

	this.instance_2.mask = mask;

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194.5,-39.2,389.1,78.5);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-44.4,393.5,87.3);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-44.4,393.5,87.3);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(-532.2,652);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(-380.6,452.9);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(-542.6,428.8);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.Символ45();
	this.instance_3.setTransform(-89.9,391.1);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.Символ44();
	this.instance_4.setTransform(-178.8,71.6);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.Символ49();
	this.instance_5.setTransform(-223.4,408.8);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.Символ47();
	this.instance_6.setTransform(-71.8,209.7);
	this.instance_6.alpha = 0.102;

	this.instance_7 = new lib.Символ46();
	this.instance_7.setTransform(-233.9,185.6);
	this.instance_7.alpha = 0.102;

	this.instance_8 = new lib.Символ45();
	this.instance_8.setTransform(-413.5,227.3);
	this.instance_8.alpha = 0.102;

	this.instance_9 = new lib.Символ44();
	this.instance_9.setTransform(-610.7,151.2);
	this.instance_9.alpha = 0.102;

	this.instance_10 = new lib.Символ41();
	this.instance_10.setTransform(-617.8,-35,0.536,0.536);
	this.instance_10.alpha = 0.102;

	this.instance_11 = new lib.Символ41();
	this.instance_11.setTransform(44.6,-91.1,0.536,0.536);
	this.instance_11.alpha = 0.102;

	this.instance_12 = new lib.Символ41();
	this.instance_12.setTransform(-267.9,70,0.325,0.318,0,0,180);
	this.instance_12.alpha = 0.102;

	this.instance_13 = new lib.Символ41();
	this.instance_13.setTransform(-141.4,-177,0.325,0.318,0,0,180);
	this.instance_13.alpha = 0.102;

	this.instance_14 = new lib.Символ41();
	this.instance_14.setTransform(-362.6,-202.5,0.548,0.536,0,0,180);
	this.instance_14.alpha = 0.102;

	this.instance_15 = new lib.Символ41();
	this.instance_15.setTransform(-415.9,-52.6,0.749,0.749);
	this.instance_15.alpha = 0.102;

	this.instance_16 = new lib.Символ41();
	this.instance_16.setTransform(-574.9,-162,0.318,0.318);
	this.instance_16.alpha = 0.102;

	this.instance_17 = new lib.Символ41();
	this.instance_17.setTransform(-4.1,-196.2,0.318,0.318);
	this.instance_17.alpha = 0.102;

	this.instance_18 = new lib.Символ41();
	this.instance_18.setTransform(-212.7,-113.5,0.536,0.536);
	this.instance_18.alpha = 0.102;

	this.instance_19 = new lib.Символ41();
	this.instance_19.setTransform(-116.7,44.6,0.536,0.536);
	this.instance_19.alpha = 0.102;

	this.addChild(this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-672.9,-247.1,761.9,961.2);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.setTransform(-0.8,-40,1,1,0,0,0,-0.8,-38.4);
	this.instance.alpha = 0.488;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(2.1,1.6,0.687,0.687);

	this.instance_2 = new lib.Символ16_1();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:3.2}},{t:this.instance_1,p:{y:1.6}}]}).to({state:[{t:this.instance_2,p:{y:-1.6}},{t:this.instance_1,p:{y:-3.2}}]},1).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ50();
	this.instance_3.setTransform(-0.8,-30.8,1,1,0,0,0,-0.8,-38.4);
	this.instance_3.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-199,-46,398,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-41.2,393.5,91.8);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(-0.8,-43.8,1,1,0,0,0,-0.8,-38.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-46.6,393.5,91.8);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(296,384.7);

	// Слой 1
	this.instance_1 = new lib.ffon();
	this.instance_1.setTransform(-350,-250);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-376.9,-250,761.9,1348.8);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// Слой 2
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(10,-301.1);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(10,-32);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true,y:-32},10,cjs.Ease.get(-1)).wait(1).to({_off:false,x:-290,y:-46},10,cjs.Ease.get(-1)).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},10,cjs.Ease.get(-1)).to({startPosition:0},1).to({_off:true,x:-290,y:-46},10,cjs.Ease.get(-1)).wait(10));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(119.6,-24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:275.3},19,cjs.Ease.get(-1)).to({y:-24.7},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.7,-167.2,227.6,334.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(-0.8,-35.4,1,1,0,0,0,-0.8,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:2.2},3).to({regY:-40.7,rotation:-2.5,x:-0.7,y:-35.3},3).to({regY:-40.8,rotation:2.2,x:-0.8,y:-35.4},4).to({regY:-40.7,rotation:-2.5,x:-0.7,y:-35.3},5).to({regY:-40.8,rotation:2.2,x:-0.8,y:-35.4},5).to({rotation:0},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-41.2,393.5,91.8);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_230 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_264 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(230).call(this.frame_230).wait(34).call(this.frame_264).wait(24));

	// Символ 15
	this.instance_18 = new lib.Символ15_1();
	this.instance_18.setTransform(334.6,1.5,0.699,0.699);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(129).to({_off:false},0).to({x:33.5},9,cjs.Ease.get(1)).wait(76).to({y:227.7},10,cjs.Ease.get(-1)).to({_off:true},8).wait(20).to({_off:false,x:334.6,y:1.5},0).to({x:33.5},9,cjs.Ease.get(1)).wait(9).to({y:227.7},10,cjs.Ease.get(-1)).wait(8));

	// Символ 14
	this.instance_19 = new lib.Символ14_1();
	this.instance_19.setTransform(-118.2,193.2,0.699,0.699);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(125).to({_off:false},0).to({x:-121.6,y:1.7},9,cjs.Ease.get(1)).wait(75).to({y:227.9},10,cjs.Ease.get(-1)).to({_off:true},13).wait(16).to({_off:false,x:-118.2,y:193.2},0).to({x:-121.6,y:1.7},9,cjs.Ease.get(1)).wait(8).to({y:227.9},10,cjs.Ease.get(-1)).wait(13));

	// Символ 13
	this.instance_20 = new lib.Символ13_1();
	this.instance_20.setTransform(65.9,147.3,0.564,0.564);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(122).to({_off:false},0).to({y:-38.6},9,cjs.Ease.get(1)).wait(84).to({x:285.1},10,cjs.Ease.get(-1)).to({_off:true},7).wait(13).to({_off:false,x:65.9,y:147.3},0).to({y:-38.6},9,cjs.Ease.get(1)).wait(17).to({x:285.1},10,cjs.Ease.get(-1)).wait(7));

	// Символ 12
	this.instance_21 = new lib.Символ12_1();
	this.instance_21.setTransform(-86.6,146,0.564,0.564);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(119).to({_off:false},0).to({y:-40},9,cjs.Ease.get(1)).wait(89).to({y:186.2},10,cjs.Ease.get(-1)).to({_off:true},5).wait(10).to({_off:false,y:146},0).to({y:-40},9,cjs.Ease.get(1)).wait(22).to({y:186.2},10,cjs.Ease.get(-1)).wait(5));

	// Символ 11
	this.instance_22 = new lib.Символ11();
	this.instance_22.setTransform(100.2,-76,1.407,1.407);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(115).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,alpha:1},9,cjs.Ease.get(1)).wait(95).to({y:-180},10,cjs.Ease.get(-1)).to({_off:true},3).wait(6).to({_off:false,scaleX:1.41,scaleY:1.41,y:-76,alpha:0},0).to({scaleX:0.71,scaleY:0.71,alpha:1},9,cjs.Ease.get(1)).wait(28).to({y:-180},10,cjs.Ease.get(-1)).wait(3));

	// Символ 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AgCDNQgfgJgYgSIgXgUQgKgMgHgMQgIgOgDgQQgEgPAAgSIAAiNQAAgSAEgQQADgPAIgNQAKgTAdgaQAYgTAggIQAcgJAhAAQAhAAAeAJQAgAJAYASQAeAaAKATQAHANAEAPQAEAQAAASIAACNQAAASgEAPQgEAQgHAOQgIAMgJAMIgXAUQgYASgfAJQgeAJghAAQghAAgdgJgAANhpQgKAHgEAHQgFAKgBALIAACNQAAALAHAJQAEAIAJAGQASAMAdAAQAbAAASgMQALgGAFgIQAGgJAAgLIAAiNQAAgLgGgKQgFgJgLgFQgTgMgcAAQgbAAgSAMgAsDDNQgggJgYgSIgWgUQgKgMgHgMQgHgOgEgQQgFgPAAgSIAAiNQAAgSAFgQQAEgPAHgNQAJgTAdgaQAZgTAfgIQAfgJAgAAQAiAAAeAJQAgAJAYASQAeAaAJATQAIANADAPQAFAQAAASIAACNQAAASgFAPQgDAQgIAOQgHAMgKAMIgVAUQgZASgfAJQgfAJghAAQghAAgegJgArzhpQgJAHgGAHQgFAKgBALIAACNQAAALAHAJQAFAIAJAGQAUAMAbAAQAbAAAUgMQAJgGAFgIQAHgJgBgLIAAiNQABgLgHgKQgFgJgKgFQgTgMgcAAQgbAAgTAMgA3vDNQgdgJgXgSQgYgSgOgaQgHgOgDgPQgEgQAAgRIAAiPQAAgRAEgQQADgPAHgNQAOgbAYgSQAXgSAegJQAdgJAgAAQAVAAAUAEQAVAFATALQAUALAQASQASAUANAbIhXAiQgKgSgUgJQgUgIgVADQgWACgOALQgOANAAASIAACPQAAARAOAMQAPAMAVADQAVABATgIQATgKAJgVIBbAqQgMAZgTATQgRARgUAMQgUAKgVAGQgVAFgUAAQgfAAgegJgAU2DRIAAmgIEiAAIAABjIi5AAIAABBICqAAIAABaIiqAAIAAA+IC5AAIAABkgAQyDRIAAk8IhvAAIAAhmIFJAAIAABmIhvAAIAAE8gANPDRIgbhUIhvAAIgbBUIhwAAICSmgIBfAAICWGggAMbAeIgdh3IgEAAIgdB3IA+AAgAEgDRIAAmgIBqAAIAAE3ICqAAIAABpgAkHDRIhriWIgDAFIAACRIhqAAIAAmgIBqAAIAACaIBxiaICEAAIilDKIClDWgAwUDRIAAifIh3AAIAACfIhrAAIAAmgIBrAAIAACeIB3AAIAAieIBqAAIAAGgg");
	this.shape.setTransform(-50.5,-242.4);

	this.instance_23 = new lib.Символ10();
	this.instance_23.setTransform(-50.5,-76,1.028,1.028);
	this.instance_23.alpha = 0.211;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},109).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},8).to({state:[{t:this.instance_23}]},96).to({state:[{t:this.instance_23}]},10).to({state:[{t:this.shape}]},8).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},8).to({state:[{t:this.instance_23}]},23).to({state:[{t:this.instance_23}]},6).to({state:[{t:this.instance_23}]},10).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(110).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,alpha:1},8).wait(96).to({y:-180},10,cjs.Ease.get(-1)).to({_off:true},8).wait(1).to({_off:false,scaleX:1.03,scaleY:1.03,y:-76,alpha:0.211},0).to({scaleX:0.71,scaleY:0.71,alpha:1},8).wait(29).to({y:-180},10,cjs.Ease.get(-1)).wait(8));

	// Слой 16
	this.instance_24 = new lib.Символ29();
	this.instance_24.setTransform(-13.8,228,0.846,0.846,0,0,0,-0.8,-38.4);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(128).to({_off:false},0).to({x:-7.8,y:55.5},9,cjs.Ease.get(1)).wait(71).to({rotation:10.2,y:275.5},7).to({_off:true},17).wait(19).to({_off:false,rotation:0,x:-13.8,y:228},0).to({x:-7.8,y:55.5},9,cjs.Ease.get(1)).wait(4).to({rotation:10.2,y:275.5},7).wait(17));

	// Символ 16
	this.instance_25 = new lib.Символ16();
	this.instance_25.setTransform(426.8,73.4,1.185,1.185);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(30).to({_off:false},0).to({x:144.8},14,cjs.Ease.get(1)).wait(44).to({y:347.5},8,cjs.Ease.get(-1)).to({_off:true},3).wait(189));

	// Символ 15
	this.instance_26 = new lib.Символ15();
	this.instance_26.setTransform(302.2,76,1.185,1.185);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(19).to({_off:false},0).to({x:20.2},14,cjs.Ease.get(1)).wait(60).to({rotation:-38.7,y:350.1},8,cjs.Ease.get(-1)).to({_off:true},1).wait(186));

	// Символ 14
	this.instance_27 = new lib.Символ14();
	this.instance_27.setTransform(-127.8,179.6,1.185,1.185);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(29).to({_off:false},0).to({y:73.7},14,cjs.Ease.get(1)).wait(47).to({rotation:50,y:347.8},8,cjs.Ease.get(-1)).to({_off:true},1).wait(189));

	// Символ 13
	this.instance_28 = new lib.Символ13();
	this.instance_28.setTransform(328,34.6);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(22).to({_off:false},0).to({x:25.6},14,cjs.Ease.get(1)).wait(58).to({rotation:-24.7,y:308.7},8,cjs.Ease.get(-1)).to({_off:true},1).wait(185));

	// Символ 12
	this.instance_29 = new lib.Символ12();
	this.instance_29.setTransform(-133.4,-164.4);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(14).to({_off:false},0).to({y:34.6},14,cjs.Ease.get(1)).wait(64).to({rotation:53.5,y:308.7},8,cjs.Ease.get(-1)).to({_off:true},1).wait(187));

	// Символ 11
	this.instance_30 = new lib.Символ11_1();
	this.instance_30.setTransform(353.3,-12,1.72,1.72);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({x:0.3},14,cjs.Ease.get(1)).wait(82).to({rotation:26.5,y:262.1},8,cjs.Ease.get(-1)).to({_off:true},1).wait(183));

	// Символ 10
	this.instance_31 = new lib.Символ10_1();
	this.instance_31.setTransform(86.7,-185.8,1.72,1.72);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(7).to({_off:false},0).to({y:-72.8},14,cjs.Ease.get(1)).wait(79).to({rotation:-22,x:86.8,y:201.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(179));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.5,-34.8,305.7,45.6);


// stage content:



(lib.wokoladka600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.telka.gotoAndPlay(1);
		    this.tekt.gotoAndPlay(231);
		
		}
		
		document.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.telka.gotoAndPlay(21);
		    this.tekt.gotoAndPlay(266);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.tekt = new lib.Символ18_1();
	this.tekt.setTransform(421,140);

	this.timeline.addTween(cjs.Tween.get(this.tekt).wait(1));

	// Слой 2
	this.telka = new lib.Символ19_1();
	this.telka.setTransform(113.5,184.7);

	this.timeline.addTween(cjs.Tween.get(this.telka).wait(1));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(350,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.1,150,954.1,1348.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#D3CE4C",
	manifest: [
		{src:"images/ddddiiimmm.png", id:"ddddiiimmm"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/gun.png", id:"gun"},
		{src:"images/radar2.png", id:"radar2"},
		{src:"images/ter_03.png", id:"ter_03"},
		{src:"images/ter_11.png", id:"ter_11"}
	]
};



// symbols:



(lib.ddddiiimmm = function() {
	this.initialize(img.ddddiiimmm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,29);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,394);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,218);


(lib.radar2 = function() {
	this.initialize(img.radar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,338);


(lib.ter_03 = function() {
	this.initialize(img.ter_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,57);


(lib.ter_11 = function() {
	this.initialize(img.ter_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,76);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1.1,1,1).p("AgTABIAngB");
	this.shape.setTransform(1.9,0.7,1,1,-17.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.7,3.5);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gun();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,296,218);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("AO0AAQAAGJkWEVQkWEWmIAAQmHAAkWkWQkWkVAAmJQAAmHEWkWQEWkWGHAAQGIAAEWEWQEWEWAAGHg");
	this.shape.setTransform(94.9,94.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,191.8,191.8);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.radar2();
	this.instance.setTransform(15.7,-4.3,0.519,0.519);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.7,-4.3,257.3,175.4);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgNARQgGgHABgKQgBgJAGgHQAGgIAHAAQAIAAAFAIQAHAHAAAJQAAAKgHAHQgFAIgIAAQgHAAgGgIg");
	this.shape.setTransform(-9,12,1,0.79);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11,10.1,4,3.9);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABSHfIgugSQgBAAgLANQgKAMgLAAQgJAAgGgIQgGgHABgFQgNAHgPAAQgPAAgEgKQgCgEAAgHQAAgKAbgTQAcgSAAgMQAAhEg2hDIglgrQgRgVAAgMQAAgLAJgNQAIgNgBgYIgDg6QAcicAWgfQgXgJgThPQAAgUAGgIQAMgVAqAAQAEAAASAGQARAGAGAAQAEAAAOgDIATgEQABgFgJgKQgGgKADgJIAAgBQAAgBgFAAQgTAAgWAIIgZAJQgRAGgQAHQgIAEgIAAQgzAAgrhaQAAgTAOgeQAUgsAhAAQATAAAFAGIAHAGQAIAAAUglQATgkAdAIQAuAMAZAbQAOARALAeIAqBkQAJAZAAA3QAAAKgMANQgNANAAAFIALA4QALA1AAAbQAAASgEAfQgDAfgBAgQgBAZgEAjQgFAiAAASIAgBRQAgBRgBAJQABALgHAXQgGAXAAAWIAFAoQgBAigbAAQgQAAgxgSg");
	this.shape.setTransform(18.3,49.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,99.5);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ter_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,57);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ter_11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,76);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF66","#FFCC00","#FF9900","#FF3300"],[0,0.294,0.576,0.984],0,0,0,0,0,15.5).s().p("AgDAzIgYA1IgHg8IgzAgIAhg6IhSgQIBQgTIg6gxIBNAXIgDhUIA2BEIAcgzIgCA9IBdgZIhJA5IBFAWIhMAEIgCABIAuA1Ig9gdIAJBdg");
	this.shape.setTransform(13.5,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,25.6);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ddddiiimmm();
	this.instance.setTransform(-15.5,-14.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ddddiiimmm();
	this.instance.setTransform(-15.5,-14.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-14.5,31,29);


(lib.Анимация14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("APTBrQgcgFgKgIQgTgRAAhNQAAglAEgXQAFgYAJgIQALgJAcgEQAcgFAvAAQAvAAAcAEQAcAEALAIQATANAAA6IhDAAQAAgTgKgFQgGgDgOgCQgOgCgWAAQgYAAgPACQgOACgEAEQgIAHAAAnQAAAUABALQADAMAEAEQAJAIAwAAQAsAAALgFQALgGAAgTIBDAAQAAA5gSANQgWAQhdAAQgvAAgcgEgAgfBqQgegIgHgXQgDgJgCgTQgBgTAAgcQAAgmAEgXQAFgYAJgIQAVgRBlAAQA0AAAfAEQAfAFAKAIQAKAIAFAXQAFAYAAAmQAABPgUAPQgKAIgfAFQgfAEg0AAQhJAAgYgFgAAAgvQgIAHAAAoQAAAUADAMQACANADADQAJAHA5AAQAdAAARgCQARgCAEgDQAFgDADgNQACgMAAgUQAAgogKgHQgJgHg5AAQg6AAgJAHgAbjBsIgUglIiEAAIgVAlIhNAAIBrjWIByAAIBrDWgAZkAPIBSAAIgkhJIgKAAgAUqBsIAAifIhfAAIAAg4IEBAAIAAA4IhfAAIAACfgAMXBsIAAiUIAFgQIAAgGQgCAAgCAEIgEAIIhyCeIhtAAIAAjWIBDAAIAACSIgFARIgBAGQACAAADgEIADgIIByidIBtAAIAADWgAEFBsIAAjXICjAAQA1AAARANQALAIAFASQAFARAAAaQAAAygVARQgRANg1AAIhhAAIAAA1gAFHAAIBhAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhhAAgAl5BsIAAjXICjAAQA2AAAQANQALAIAFASQAGARAAAaQAAAygVARQgRANg2AAIhgAAIAAA1gAk2AAIBgAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhgAAgAqpBsIAAjXICjAAQA2AAAQANQALAIAFASQAFARAAAaQAAAygUARQgRANg2AAIhgAAIAAA1gApmAAIBgAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhgAAgAvRBsIAAjXIDpAAIAAA1IimAAIAAAeICfAAIAAAyIifAAIAAAeICmAAIAAA0gAyaBsIAAifIhgAAIAAg4IEBAAIAAA4IhfAAIAACfgA8wBsIAAjXIDBAAQAfAAAOAJQALAHAFANQAGANAAATQAAARgHAMQgGALgJAFQAOAEAIANQAHANAAATQAAAhgPANQgIAHgMADQgNAEgSAAgA7uA4IB0AAQAJAAAFgEQAFgEAAgJQAAgKgFgEQgFgDgJAAIh0AAgA7ugZIB2AAQAIAAAEgEQAFgDAAgIQAAgIgEgDQgEgDgJAAIh2AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184.1,-11.1,368.4,22.3);


(lib.Анимация13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("A6jDVQgvgHgRgPQghgcAAiDQAAg/AIgnQAIgoAQgOQASgOAvgIQAwgHBOgBQBPAAAwAHQAwAGATAOQAfAWAABhIhwAAQgBgggRgIQgKgFgXgEQgYgCgmAAQgoAAgYADQgZAEgHAGQgOAMAABCQAAAiADAUQAEAUAHAHQAPANBRAAQBMgBASgIQASgKABggIBwAAQAABhgeAWQgkAaifAAQhOAAgwgHgARcDXIAAhmIiyAAQgSAAgKAKQgIAMgBAPIAABBIhwAAIAAhSQAAghALgPQAJgNAegNQgbgLgLgWQgMgYAAgsQAAggAJgVQAHgXARgMQANgKAUgEQATgFAbAAIFIAAIAAFsgAONguQgIAHAAAXQABASAHAIQAJAJASAAIC0AAIAAhKIi0AAQgTAAgIAJgAJFDXIAAkOIjIAAQAACegcA7QgXA1g9AAIg1AAIAAhfQATAAAMgIQAMgJACgRQAEgQACg7IACigIGoAAIAAFsgAkKDXIAAlsIGHAAIAABZIkXAAIAAAzIELAAIAABVIkLAAIAAAzIEXAAIAABYgAr7DXIAAlsIEUAAQBZAAAdAWQASAOAIAdQAJAdAAAsQAABXgjAbQgdAWhZABIijAAIAABZgAqKAfICjAAQATAAALgJQALgKAAgXQAAgXgLgMQgLgIgTgBIijAAgAxgDXIAAkOIiiAAIAAheIG0AAIAABeIihAAIAAEOgAaVDXIAAj7IAIgcIABgKQgDAAgDAHIgHAMIjBEOIi4AAIAAlsIBwAAIAAD6IgHAcIAAAKQADABACgIIAHgNIDAkMIC4AAIAAFsgAXAipIAAgyIC1AAIAAAyg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-179.7,-22,359.5,44.1);


(lib.Анимация12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("APTBrQgcgFgKgIQgTgRAAhNQAAglAEgXQAFgYAJgIQALgJAcgEQAcgFAvAAQAvAAAcAEQAcAEALAIQATANAAA6IhDAAQAAgTgKgFQgGgDgOgCQgOgCgWAAQgYAAgPACQgOACgEAEQgIAHAAAnQAAAUABALQADAMAEAEQAJAIAwAAQAsAAALgFQALgGAAgTIBDAAQAAA5gSANQgWAQhdAAQgvAAgcgEgAgfBqQgegIgHgXQgDgJgCgTQgBgTAAgcQAAgmAEgXQAFgYAJgIQAVgRBlAAQA0AAAfAEQAfAFAKAIQAKAIAFAXQAFAYAAAmQAABPgUAPQgKAIgfAFQgfAEg0AAQhJAAgYgFgAAAgvQgIAHAAAoQAAAUADAMQACANADADQAJAHA5AAQAdAAARgCQARgCAEgDQAFgDADgNQACgMAAgUQAAgogKgHQgJgHg5AAQg6AAgJAHgAbjBsIgUglIiEAAIgVAlIhNAAIBrjWIByAAIBrDWgAZkAPIBSAAIgkhJIgKAAgAUqBsIAAifIhfAAIAAg4IEBAAIAAA4IhfAAIAACfgAMXBsIAAiUIAFgQIAAgGQgCAAgCAEIgEAIIhyCeIhtAAIAAjWIBDAAIAACSIgFARIgBAGQACAAADgEIADgIIByidIBtAAIAADWgAEFBsIAAjXICjAAQA1AAARANQALAIAFASQAFARAAAaQAAAygVARQgRANg1AAIhhAAIAAA1gAFHAAIBhAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhhAAgAl5BsIAAjXICjAAQA2AAAQANQALAIAFASQAGARAAAaQAAAygVARQgRANg2AAIhgAAIAAA1gAk2AAIBgAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhgAAgAqpBsIAAjXICjAAQA2AAAQANQALAIAFASQAFARAAAaQAAAygUARQgRANg2AAIhgAAIAAA1gApmAAIBgAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhgAAgAvRBsIAAjXIDpAAIAAA1IimAAIAAAeICfAAIAAAyIifAAIAAAeICmAAIAAA0gAyaBsIAAifIhgAAIAAg4IEBAAIAAA4IhfAAIAACfgA8wBsIAAjXIDBAAQAfAAAOAJQALAHAFANQAGANAAATQAAARgHAMQgGALgJAFQAOAEAIANQAHANAAATQAAAhgPANQgIAHgMADQgNAEgSAAgA7uA4IB0AAQAJAAAFgEQAFgEAAgJQAAgKgFgEQgFgDgJAAIh0AAgA7ugZIB2AAQAIAAAEgEQAFgDAAgIQAAgIgEgDQgEgDgJAAIh2AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184.1,-11.1,368.4,22.3);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("APTBrQgcgFgKgIQgTgRAAhNQAAglAEgXQAFgYAJgIQALgJAcgEQAcgFAvAAQAvAAAcAEQAcAEALAIQATANAAA6IhDAAQAAgTgKgFQgGgDgOgCQgOgCgWAAQgYAAgPACQgOACgEAEQgIAHAAAnQAAAUABALQADAMAEAEQAJAIAwAAQAsAAALgFQALgGAAgTIBDAAQAAA5gSANQgWAQhdAAQgvAAgcgEgAgfBqQgegIgHgXQgDgJgCgTQgBgTAAgcQAAgmAEgXQAFgYAJgIQAVgRBlAAQA0AAAfAEQAfAFAKAIQAKAIAFAXQAFAYAAAmQAABPgUAPQgKAIgfAFQgfAEg0AAQhJAAgYgFgAAAgvQgIAHAAAoQAAAUADAMQACANADADQAJAHA5AAQAdAAARgCQARgCAEgDQAFgDADgNQACgMAAgUQAAgogKgHQgJgHg5AAQg6AAgJAHgAbjBsIgUglIiEAAIgVAlIhNAAIBrjWIByAAIBrDWgAZkAPIBSAAIgkhJIgKAAgAUqBsIAAifIhfAAIAAg4IEBAAIAAA4IhfAAIAACfgAMXBsIAAiUIAFgQIAAgGQgCAAgCAEIgEAIIhyCeIhtAAIAAjWIBDAAIAACSIgFARIgBAGQACAAADgEIADgIIByidIBtAAIAADWgAEFBsIAAjXICjAAQA1AAARANQALAIAFASQAFARAAAaQAAAygVARQgRANg1AAIhhAAIAAA1gAFHAAIBhAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhhAAgAl5BsIAAjXICjAAQA2AAAQANQALAIAFASQAGARAAAaQAAAygVARQgRANg2AAIhgAAIAAA1gAk2AAIBgAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhgAAgAqpBsIAAjXICjAAQA2AAAQANQALAIAFASQAFARAAAaQAAAygUARQgRANg2AAIhgAAIAAA1gApmAAIBgAAQAMAAAGgEQAHgHAAgOQAAgOgHgHQgGgFgMAAIhgAAgAvRBsIAAjXIDpAAIAAA1IimAAIAAAeICfAAIAAAyIifAAIAAAeICmAAIAAA0gAyaBsIAAifIhgAAIAAg4IEBAAIAAA4IhfAAIAACfgA8wBsIAAjXIDBAAQAfAAAOAJQALAHAFANQAGANAAATQAAARgHAMQgGALgJAFQAOAEAIANQAHANAAATQAAAhgPANQgIAHgMADQgNAEgSAAgA7uA4IB0AAQAJAAAFgEQAFgEAAgJQAAgKgFgEQgFgDgJAAIh0AAgA7ugZIB2AAQAIAAAEgEQAFgDAAgIQAAgIgEgDQgEgDgJAAIh2AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-184.1,-11.1,368.4,22.3);


(lib.Анимация10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A6jDVQgvgHgRgPQghgcAAiDQAAg/AIgnQAIgoAQgOQASgOAvgIQAwgHBOgBQBPAAAwAHQAwAGATAOQAfAWAABhIhwAAQgBgggRgIQgKgFgXgEQgYgCgmAAQgoAAgYADQgZAEgHAGQgOAMAABCQAAAiADAUQAEAUAHAHQAPANBRAAQBMgBASgIQASgKABggIBwAAQAABhgeAWQgkAaifAAQhOAAgwgHgARcDXIAAhmIiyAAQgSAAgKAKQgIAMgBAPIAABBIhwAAIAAhSQAAghALgPQAJgNAegNQgbgLgLgWQgMgYAAgsQAAggAJgVQAHgXARgMQANgKAUgEQATgFAbAAIFIAAIAAFsgAONguQgIAHAAAXQABASAHAIQAJAJASAAIC0AAIAAhKIi0AAQgTAAgIAJgAJFDXIAAkOIjIAAQAACegcA7QgXA1g9AAIg1AAIAAhfQATAAAMgIQAMgJACgRQAEgQACg7IACigIGoAAIAAFsgAkKDXIAAlsIGHAAIAABZIkXAAIAAAzIELAAIAABVIkLAAIAAAzIEXAAIAABYgAr7DXIAAlsIEUAAQBZAAAdAWQASAOAIAdQAJAdAAAsQAABXgjAbQgdAWhZABIijAAIAABZgAqKAfICjAAQATAAALgJQALgKAAgXQAAgXgLgMQgLgIgTgBIijAAgAxgDXIAAkOIiiAAIAAheIG0AAIAABeIihAAIAAEOgAaVDXIAAj7IAIgcIABgKQgDAAgDAHIgHAMIjBEOIi4AAIAAlsIBwAAIAAD6IgHAcIAAAKQADABACgIIAHgNIDAkMIC4AAIAAFsgAXAipIAAgyIC1AAIAAAyg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-179.7,-22,359.5,44.1);


(lib.Анимация9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("A6jDVQgvgHgRgPQghgcAAiDQAAg/AIgnQAIgoAQgOQASgOAvgIQAwgHBOgBQBPAAAwAHQAwAGATAOQAfAWAABhIhwAAQgBgggRgIQgKgFgXgEQgYgCgmAAQgoAAgYADQgZAEgHAGQgOAMAABCQAAAiADAUQAEAUAHAHQAPANBRAAQBMgBASgIQASgKABggIBwAAQAABhgeAWQgkAaifAAQhOAAgwgHgARcDXIAAhmIiyAAQgSAAgKAKQgIAMgBAPIAABBIhwAAIAAhSQAAghALgPQAJgNAegNQgbgLgLgWQgMgYAAgsQAAggAJgVQAHgXARgMQANgKAUgEQATgFAbAAIFIAAIAAFsgAONguQgIAHAAAXQABASAHAIQAJAJASAAIC0AAIAAhKIi0AAQgTAAgIAJgAJFDXIAAkOIjIAAQAACegcA7QgXA1g9AAIg1AAIAAhfQATAAAMgIQAMgJACgRQAEgQACg7IACigIGoAAIAAFsgAkKDXIAAlsIGHAAIAABZIkXAAIAAAzIELAAIAABVIkLAAIAAAzIEXAAIAABYgAr7DXIAAlsIEUAAQBZAAAdAWQASAOAIAdQAJAdAAAsQAABXgjAbQgdAWhZABIijAAIAABZgAqKAfICjAAQATAAALgJQALgKAAgXQAAgXgLgMQgLgIgTgBIijAAgAxgDXIAAkOIiiAAIAAheIG0AAIAABeIihAAIAAEOgAaVDXIAAj7IAIgcIABgKQgDAAgDAHIgHAMIjBEOIi4AAIAAlsIBwAAIAAD6IgHAcIAAAKQADABACgIIAHgNIDAkMIC4AAIAAFsgAXAipIAAgyIC1AAIAAAyg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-179.7,-22,359.5,44.1);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("AgYgYIAxAx");
	this.shape.setTransform(3.4,0.1,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66FF00").ss(1,1,1).p("AgYgYIAxAx");
	this.shape_1.setTransform(-1.9,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgKAAIAVAA");
	this.shape_2.setTransform(0.7,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgoAAIBRAA");
	this.shape_3.setTransform(0.6,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAAp1IAATr");
	this.shape_4.setTransform(0.7,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ApeAAIS9AA");
	this.shape_5.setTransform(0.3,1.2);

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(0.9,-0.7,0.747,0.747,0,0,0,94.9,94.9);

	// Слой 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.298,1],0,0,0,0,0,614.3).s().p("EhDLBDMUgb1gb1AAAgnXUAAAgnWAb1gb1UAb1gb1AnWAAAUAnXAAAAb1Ab1QIGIGFwJFQN/WIAAb4IAAA8UgAVAmwgbgAbgUgb1Ab1gnXAAAUgnWAAAgb1gb1gAmmm5QiyCzAAD9QAAD7CyCzQCzCzD7AAQD+AACyizQCzizAAj7QAAj9izizQiyizj+AAQj7AAizCzg");

	this.addChild(this.shape_6,this.instance,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-608.1,-608.1,1216.3,1216.3);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(-2.7,-0.3,0.793,0.793,0,0,0,1.9,0.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,153,0,1)",0,0,1);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-3,-3,10,8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-4.2,13,11);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.setTransform(156.2,-0.7);

	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.setTransform(156.2,-0.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация13("synched",0);
	this.instance_2.setTransform(156.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({_off:true},15).wait(1));

	// Слой 2
	this.instance_3 = new lib.Анимация11("synched",0);
	this.instance_3.setTransform(162,47.4);

	this.instance_4 = new lib.Анимация12("synched",0);
	this.instance_4.setTransform(162,47.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация14("synched",0);
	this.instance_5.setTransform(162,47.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_5}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},14).to({_off:true},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-22.8,369.8,81.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAtQgEgFgDgLQgCgLAAgSQAAgjAJgIQAKgIAmAAQAnAAAKAIQAIAIABAjQgBAkgIAIQgKAIgnAAQgnAAgJgHgAAigkQgJABgDACQgCADgCAIQgCAJABANQAAAdAEAFQAGAEAfAAQAfAAAFgFQAEgCABgJQABgIAAgOQAAgNgBgIQgBgJgEgCQgCgDgJgBQgJgCgQAAQgPAAgJACgAhGAzIAAhXIgDAAIghAgIgIgKIAjgkIAYAAIAABlg");
	this.shape.setTransform(150.7,77);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABQAtQgFgFgCgLQgCgLgBgSQABgjAJgIQAJgIAnAAQAnAAAJAIQAJAIAAAjQAAAkgJAIQgJAIgnAAQgoAAgIgHgABogkQgKABgDACQgCADgBAIQgCAJAAANQAAAdAFAFQAFAEAgAAQAeAAAGgFQADgCABgJQABgIAAgOQAAgNgBgIQgBgJgDgCQgCgDgKgBQgJgCgPAAQgQAAgIACgAg5AtQgEgFgDgLQgCgLAAgSQgBgjAKgIQAJgIAnAAQAlAAAJAIQAJAIAAAjQAAAkgJAIQgJAIglAAQgnAAgJgHgAgigkQgJABgCACQgDADgCAIQgBAJAAANQAAAdAFAFQAFAEAgAAQAdAAAFgFQADgCABgJQACgIAAgOQAAgNgCgIQgBgJgDgCQgDgDgIgBQgJgCgOAAQgPAAgKACgAiMAzIAAhXIgDAAIggAgIgJgKIAjgkIAYAAIAABlg");
	this.shape_1.setTransform(157.6,38);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(10));

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(87.1,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.34},2).to({alpha:1},2).to({alpha:0.34},2).to({alpha:1},3).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(73.9,60,1,1,0,0,0,74.4,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,-3.8,257.3,175.4);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(13.5,12.8,1,1,0,0,0,13.5,12.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,25.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ8();
	this.instance.setTransform(-150.5,-67.9);
	this.instance.alpha = 0.539;
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-2,-2,41,104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// ter_11.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-130.9,-4,0.923,0.923,0,0,0,20.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// light
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-147.2,-44.5,0.923,0.923,0,0,0,13.5,12.8);
	this.instance_2.alpha = 0;
	this.instance_2.shadow = new cjs.Shadow("rgba(255,102,0,1)",0,0,18);
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_2.cache(-2,-2,31,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-148.2,alpha:0.84},4).to({x:-147.2,alpha:0},2).to({alpha:0.84},1).to({alpha:0},2).to({x:-148.2,alpha:0.828},5).to({x:-147.2,alpha:0},2).to({alpha:0.84},1).to({alpha:0},2).wait(11));

	// ter_03.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(-135.5,-52.4,0.923,0.923,0,0,0,21.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-136.5},4).to({x:-135.5},5).to({x:-136.5},5).to({x:-135.5},5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.7,-80.3,81.2,121.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(148,109,1,1,0,0,0,148,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:100},29,cjs.Ease.get(1)).to({y:109},30,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,296,218);


(lib.Символ11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.setTransform(15.5,1.3,0.685,0.685);
	this.instance_1.alpha = 0.98;

	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},110).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},37).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},1).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},110).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.67,scaleY:0.67,y:1.6,alpha:0.969},37).wait(1));

	// Слой 3
	this.instance_3 = new lib.Анимация1("synched",0);
	this.instance_3.setTransform(15.5,-12,0.866,0.866);
	this.instance_3.alpha = 0.66;

	this.instance_4 = new lib.Анимация2("synched",0);
	this.instance_4.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},73).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_3}]},36).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},73).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({scaleX:0.86,scaleY:0.86,y:-11.6,alpha:0.672},36).wait(1));

	// Слой 2
	this.instance_5 = new lib.Анимация1("synched",0);
	this.instance_5.setTransform(15.5,-24.6,1.031,1.031);
	this.instance_5.alpha = 0.34;

	this.instance_6 = new lib.Анимация2("synched",0);
	this.instance_6.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},37).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},39).to({state:[{t:this.instance_5}]},72).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},37).wait(1).to({_off:false,scaleX:0.23,scaleY:0.23,y:14.5,alpha:0.41},0).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({scaleX:1.03,scaleY:1.03,y:-24.3,alpha:0.34},72).wait(1));

	// Слой 1
	this.instance_7 = new lib.Анимация1("synched",0);
	this.instance_7.setTransform(15.5,14.5,0.232,0.232);
	this.instance_7.alpha = 0.41;

	this.instance_8 = new lib.Анимация2("synched",0);
	this.instance_8.setTransform(15.5,-37.5,1.2,1.2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},39).to({state:[{t:this.instance_8}]},110).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.7,scaleY:0.7,y:0.9,alpha:1},39).to({_off:true,scaleX:1.2,scaleY:1.2,y:-37.5,alpha:0},110).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-39.5,32,57.5);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11_1();
	this.instance.setTransform(-37.6,164.1,3.276,3.276,0,0,0,15.5,14.5);

	this.instance_1 = new lib.Символ11_1();
	this.instance_1.setTransform(140.4,154.1,3.276,3.276,0,0,0,15.5,14.5);

	this.instance_2 = new lib.Символ11_1();
	this.instance_2.setTransform(50.4,154.1,3.276,3.276,0,0,0,15.5,14.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90,-23,282.8,198.2);


(lib.Символ24 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ1();
	this.instance.setTransform(148,109,1,1,0,0,180,148,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,296,218);


(lib.Символ21 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ13();
	this.instance.setTransform(141.9,34.5,0.863,0.863,0,0,0,140.8,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,319.1,70.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Слой 1
	this.pric = new lib.Символ18();
	this.pric.setTransform(1871.9,933.7,1,1,0,0,0,59.5,59.5);

	this.timeline.addTween(cjs.Tween.get(this.pric).to({scaleX:1.35,scaleY:1.35,x:1893.9,y:973.7,alpha:0},1,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:1871.9,y:933.7,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1.35,scaleY:1.35,x:1893.9,y:973.7,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1204.3,266.1,1216.3,1216.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ14();
	this.instance.setTransform(-25.2,291.1,1.284,1,0,-110,70,-4.6,-0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regX:-4.5,skewX:-96.1,skewY:83.9,x:-44.9,y:492.2},5).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(-25.2,291.1,1.284,1,0,-126.1,53.9,-4.6,-0.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({skewX:-104.9,skewY:75.1,x:13.6,y:507.1},5).to({_off:true},1).wait(10));

	// Слой 2
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(-37,287.6,1,1,-176,0,0,7.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({regX:-2.6,regY:-0.3,x:-378.4,y:428.6},5).to({_off:true},1).wait(17));

	// Слой 1
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(-37,287.6,1,1,-176,0,0,7.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-2.6,regY:-0.3,x:-438.4,y:428.6},5).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,284.4,14,12);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.setTransform(43.3,-268);

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkkGQIAAseIJJAAQiDGghbF+g");
	mask.setTransform(15.5,13.7);

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(25.4,32.2,0.596,0.596,12.1,0,0,-129.4,-30);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,0.5,48.8,53.3);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(635.6,110.6,1,1,0,0,0,20.8,35.1);

	this.instance_1 = new lib.fon();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,700,394);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(350,100.7,1,1,0,0,0,350,100.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:358.2},20,cjs.Ease.get(-1)).to({x:369.9},26,cjs.Ease.get(1)).to({x:370},3).to({x:360},25,cjs.Ease.get(-1)).to({x:350},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,394);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(350,100.7,1,1,0,0,0,350,100.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:350.1,scaleX:1.45,scaleY:1.45,x:192.7,y:146},9,cjs.Ease.get(1)).to({regX:350,scaleX:1,scaleY:1,x:350,y:100.7},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,700,394);


// stage content:



(lib.snaip640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		this.pric.alpha=0;
		function fl_CustomMouseCursor() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
			this.pric.alpha=1;
		    this.fon.gotoAndPlay(1);
			this.pric.gotoAndPlay(1);
			this.text.gotoAndPlay(1);
			this.gun.gotoAndPlay(1);
		    
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.fon.gotoAndPlay(10);
			this.pric.gotoAndPlay(11);
			this.text.gotoAndPlay(10);
			this.gun.gotoAndPlay(10);
		    
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bullet
	this.pric = new lib.Символ20();
	this.pric.setTransform(310,151.5,1,1,0,0,0,1812.2,873.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// gun
	this.gun = new lib.Символ24();
	this.gun.setTransform(390.8,217,1,1,0,0,0,148,109);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// text
	this.text = new lib.Символ21();
	this.text.setTransform(192.4,59.9,1,1,0,0,0,160.1,31.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// radar
	this.instance = new lib.Символ9();
	this.instance.setTransform(56.5,251.4,1,1,0,0,0,74.4,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fog
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(438.5,73.7,0.505,0.505,0,0,0,52.5,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// ter
	this.fon = new lib.Символ16();
	this.fon.setTransform(303,89.7,1,1,0,0,0,350,100.7);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,-303.6,1216.3,1216.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
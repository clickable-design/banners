(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#663300",
	manifest: [
		{src:"images/euro.png?1468842513085", id:"euro"},
		{src:"images/fonfon.jpg?1468842513085", id:"fonfon"}
	]
};



// symbols:



(lib.euro = function() {
	this.initialize(img.euro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,322);


(lib.fonfon = function() {
	this.initialize(img.fonfon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,532);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333300").s().p("AmWBkQgbgWAAgoIAyAAQABAMAEAIQAEAJAHAFQAHAGAJADQAJACAKAAQAKAAAHgDQAHgDAGgFQAFgGADgGQADgHAAgIQAAgKgEgHQgDgGgHgEQgGgEgIgBIgigBIAAghIAOAAQArAAAAggQgBgHgCgFQgDgGgEgDQgKgIgQAAQgJAAgIACQgIADgFAEQgMAJgCASIgwAAQAAgUAIgOQAHgPANgJQANgJAQgEQARgFASAAQASAAAQAFQAPAFALAIQALAJAHAMQAGAMAAAPQAAASgKAMQgKANgQAEQAKACAHAEQAJADAGAHQAGAHAEAJQADAKAAALQAAARgIAPQgGAOgNALQgMAKgRAGQgRAGgUAAQgwAAgagXgApZB3IgKgEIAAgqIAJADIAMACQAMAAAHgFQAHgFACgKIheiuIA6AAIBBB4IAvh4IA3AAIhKCrQgIASgIAMQgIANgKAIQgKAIgLAEQgMAEgNAAQgJAAgHgDgAHSB1IAAjpIA0AAIAABVIA3AAQASAAAPAEQAPAFALAJQALAJAHAMQAGAPAAATQAAATgGAOQgGAPgMAJQgLAJgQAFQgPAEgUAAgAIGBLIAxAAQAJAAAHgCQAHgCAGgEQALgHgBgTQAAgJgDgHQgDgGgFgEQgGgEgHgCIgQgCIgwAAgAE8B1IAAi+IhGAAIAAgrIDBAAIAAArIhHAAIAAC+gAC+B1IgSg0IhYAAIgTA0IgzAAIBYjpIA1AAIBZDpgACfAaIgehUIgBAAIgeBUIA9AAgAg5B1IAAhlIhfAAIAABlIg1AAIAAjpIA1AAIAABaIBfAAIAAhaIAzAAIAADpg");
	this.shape.setTransform(65.7,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.4,24.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("An6ENIAAgyIHpnoIAoAAIHkHiIAAA4g");
	this.shape.setTransform(50.8,29.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.1,101.5,54);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AkWGQIAAsfIItAAIAAMfg");
	this.shape.setTransform(28,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,80);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(6,1,1).p("AHqAAQAADKiQCQQiQCQjKAAQjKAAiPiQQiQiQAAjKQAAjKCQiPQCPiQDKAAQDKAACQCQQCQCPAADKg");
	this.shape.setTransform(49,49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996600").ss(6,1,1).p("AHqAAQAADKiQCQQiQCQjKAAQjKAAiPiQQiQiQAAjKQAAjKCQiPQCPiQDKAAQDKAACQCQQCQCPAADKg");
	this.shape_1.setTransform(49,51.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,104,106.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.6,0,-8.6).s().p("AhVBnIAAjNICYAAIAAAmIhqAAIAAAmIAzAAQAQAAANAEQAOAFAKAHQAKAIAFAKQAFANAAAQQAAARgEANQgHAMgJAJQgKAIgPADQgNAEgRAAgAgnBCIAsAAQAJAAAGgCQAHgBAEgDQAJgHAAgQQAAgIgCgFQgDgHgFgCQgEgEgHgBIgOgCIgsAAg");
	this.shape.setTransform(8.6,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,10.1,0,-10).s().p("AA1BnIgPguIhMAAIgQAuIgtAAIBOjNIAsAAIBNDNgAgaAYIA0AAIgahLIAAAAg");
	this.shape_1.setTransform(28.2,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.7,0,-8.7).s().p("AApBnIAAhZIhRAAIAABZIguAAIAAjNIAuAAIAABQIBRAAIAAhQIAuAAIAADNg");
	this.shape_2.setTransform(48.8,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,9.6,0,-9.5).s().p("AAmBnIhHhcIgPARIAABLIguAAIAAjNIAuAAIAABTIBPhTIA4AAIhXBXIBfB2g");
	this.shape_3.setTransform(71.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.7,0,-8.7).s().p("AApBnIAAhZIhRAAIAABZIguAAIAAjNIAuAAIAABQIBRAAIAAhQIAuAAIAADNg");
	this.shape_4.setTransform(91.1,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,10.2,0,-10.1).s().p("AgpBjIgSgKQgIgFgHgHQgMgPgHgTQgHgUAAgXQAAgJACgKQABgLAEgLQAHgTAMgPIAPgOQAIgFAKgEQASgIAXgBQAXABATAIQAKAEAHAFQAJAGAGAIQANAPAHATQAEALABALQACAKAAAJQAAAXgHAUQgHATgNAPQgGAHgJAFQgHAGgKAEQgTAJgXAAQgXAAgSgJgAgZg+QgKAFgHALQgHAJgDANQgDANAAALQAAAOADAMQADAMAHAKQAHAKAKAFQALAHAOAAQAOAAALgHQALgFAHgKQAHgKACgMQADgMAAgOQAAgLgDgNQgCgNgHgJQgHgLgLgFQgLgHgOAAQgOAAgLAHg");
	this.shape_5.setTransform(113.1,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.5,0,-8.4).s().p("AgVBnIAAimIg+AAIAAgnICnAAIAAAnIg+AAIAACmg");
	this.shape_6.setTransform(133.1,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AF8BjIgSgKQgIgFgHgHQgMgPgIgTQgGgUgBgXQAAgJADgKQABgMADgKQAIgTAMgPIAPgOQAIgFAKgEQASgJAYAAQAYAAATAJQAKAEAHAFQAIAHAHAHQAMAPAIATQADAKACAMQACAKAAAJQAAAXgHAUQgIATgMAPQgHAHgIAFQgHAGgKAEQgTAJgYgBQgYABgSgJgAGMg/QgLAGgGALQgHAKgDAMQgDANAAALQAAAOADAMQADAMAHAKQAGAKALAFQALAHAPAAQAPAAALgHQALgFAGgKQAIgKACgMQADgMAAgOQAAgLgDgNQgCgMgIgKQgGgLgLgGQgLgFgPgBQgPABgLAFgAJYBnIAAimIg+AAIAAgnICpAAIAAAnIg+AAIAACmgAD1BnIAAhZIhUAAIAABZIgtAAIAAjNIAtAAIAABQIBUAAIAAhQIAtAAIAADNgAAoBnIhHhcIgPARIAABLIguAAIAAjNIAuAAIAABTIBPhTIA5AAIhZBXIBhB2gAiwBnIAAhZIhUAAIAABZIgtAAIAAjNIAtAAIAABQIBUAAIAAhQIAtAAIAADNgAlzBnIgPguIhOAAIgQAuIgtAAIBOjNIAvAAIBNDNgAmOAYIgahLIgBAAIgbBLIA2AAgArDBnIAAjNICaAAIAAAmIhsAAIAAAmIA1AAQAQAAANAFQAOAEAKAHQAKAIAFAKQAFANAAAQQAAASgEAMQgHAMgJAJQgKAIgPADQgNAEgRAAgAqVBCIAuAAQAJAAAGgCQAHgBAEgDQAJgHAAgQQAAgIgCgFQgDgHgFgCQgEgDgHgCIgOgCIguAAg");
	this.shape_7.setTransform(70.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.6,23.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.7,0,-8.7).s().p("AApBnIAAhZIhRAAIAABZIguAAIAAjNIAuAAIAABQIBRAAIAAhQIAtAAIAADNg");
	this.shape.setTransform(8.7,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,10.2,0,-10.2).s().p("AgpBjQgKgEgIgGQgIgFgHgHQgNgPgGgTQgIgUAAgXQAAgJACgKQACgLAEgLQAGgTANgPQAHgIAIgGQAIgFAKgEQASgIAXgBQAXABATAIQAKAEAHAFQAJAGAGAIQANAPAHATQAEALACALQACAKAAAJQgBAXgHAUQgHATgNAPQgGAHgJAFIgRAKQgTAJgXAAQgXAAgSgJgAgZg+QgKAFgHALQgHAJgDANQgDANAAALQAAAOADAMQADAMAHAKQAHAKAKAFQALAHAOAAQAPAAAKgHQALgFAHgKQAGgKADgMQADgMABgOQgBgLgDgNQgDgNgGgJQgHgLgLgFQgKgHgPAAQgOAAgLAHg");
	this.shape_1.setTransform(30.7,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.7,0,-8.6).s().p("AhVBnIAAjNIBfAAQAPAAAMADQAMADAIAGQAKAFAEAKQAFAKgBAOQABAQgHAKQgHALgOAHQATAFAJAMQAFAHACAIQADAIAAAKQAAAPgGANQgGALgKAHQgLAIgNACQgOAEgOAAgAgoBEIAvAAIAMgCQAGAAAFgEQAFgDACgFQADgGAAgHQAAgJgCgFQgCgGgFgEIgKgFQgGgBgHAAIgwAAgAgogSIAsAAQAMAAAIgGQAIgFAAgOQAAgHgDgEQgDgFgEgDQgDgDgHAAIgMgBIgoAAg");
	this.shape_2.setTransform(52.6,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.1,0,-8).s().p("AhPBnIAAjNIAtAAIAABLIApAAQAQAAANAEQANAEAKAIQAKAIAFALQAGAMAAARQAAARgGAMQgFANgKAIQgKAIgOAEQgOAEgQAAgAgiBCIAjAAQAIAAAHgCQAGgBAFgDQAJgHAAgRQAAgIgCgFQgDgHgFgDQgFgDgGgCIgOgBIgjAAg");
	this.shape_3.setTransform(72.3,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,2.3,0,-2.2).s().p("AgVBnIAAjNIArAAIAADNg");
	this.shape_4.setTransform(84.9,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,9.9,0,-9.8).s().p("AAsBnIgshHIgtBHIg0AAIBJhqIhDhjIA1AAIAmBDIAqhDIAyAAIhCBjIBIBqg");
	this.shape_5.setTransform(98.8,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AkWBjQgJgEgJgGQgHgFgHgHQgNgPgHgTQgHgUAAgXQAAgJACgKQABgMAEgKQAHgTANgPQAHgHAHgHQAJgFAJgEQATgJAYAAQAYAAATAJQAJAEAIAFQAIAHAGAHQAOAPAGATQAEAKACAMQACAKAAAJQAAAXgIAUQgGATgOAPQgGAHgIAFIgRAKQgTAJgYgBQgYABgTgJgAkGg/QgJAGgIALQgGAKgEAMQgCANAAALQAAAOACAMQAEAMAGAKQAIAKAJAFQAMAHAPAAQAPAAALgHQAKgFAIgKQAGgKADgMQADgMAAgOQAAgLgDgNQgDgMgGgKQgIgLgKgGQgLgFgPgBQgPABgMAFgAHpBnIgthHIgvBHIgzAAIBJhqIhDhjIA0AAIApBDIAqhDIAyAAIhCBjIBIBqgAEbBnIAAjNIAtAAIAADNgABjBnIAAjNIAtAAIAABLIArAAQAQAAANAEQAOAEAJAIQAKAIAGALQAFAMAAARQAAARgFANQgGALgJAJQgLAIgOAEQgNAEgRAAgACQBCIAlAAQAJAAAGgCQAGgBAFgDQAJgHAAgRQAAgIgCgFQgDgHgFgDQgEgDgHgCIgOgBIglAAgAhmBnIAAjNIBgAAQANAAAMADQANADAIAGQAJAFAEAKQAFAKAAAOQAAARgHAJQgHALgNAHQASAFAKAMQAEAGADAJQACAIABAKQAAAQgHAMQgGALgKAHQgKAHgNADQgOAEgMAAgAg5BEIAwAAIALgBQAGgCAFgDQAFgDACgFQACgGABgHQAAgJgCgFQgDgGgEgEIgKgEQgFgCgHAAIgxAAgAg5gSIAuAAQALAAAGgGQAJgFAAgOQAAgHgDgEQgDgFgEgDQgEgDgEAAIgMgBIgqAAgAmdBnIAAhZIhTAAIAABZIgtAAIAAjNIAtAAIAABQIBTAAIAAhQIAtAAIAADNg");
	this.shape_6.setTransform(54.2,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,108.7,23.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],-1.1,8.4,-1.1,-12.7).s().p("ABBB6IAAgtIiBAAIAAAtIgoAAIAAhSIARAAQAJgMAFgOQAFgNADgPQADgQABgTIABhIICPAAIAAChIAWAAIAABSgAgWgLQgCANgFANQgEANgHAMIBPAAIAAh9Ig5AAg");
	this.shape.setTransform(47.6,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.4,0,-8.4).s().p("AAoBjIAAhWIhPAAIAABWIgsAAIAAjGIAsAAIAABOIBPAAIAAhOIAsAAIAADGg");
	this.shape_1.setTransform(8.4,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,7.6,0,-7.5).s().p("AhKBjIAAjGICTAAIAAAlIhnAAIAAAsIBeAAIAAAgIheAAIAAAwIBpAAIAAAlg");
	this.shape_2.setTransform(28.3,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,9.9,0,-9.8).s().p("AgoBgQgJgEgIgFQgIgGgGgHQgNgOgGgTQgHgSAAgXQAAgJACgKQABgKAEgKQAGgTANgOQAGgIAIgGQAIgFAJgEQASgIAWAAQAWAAATAIQAJAEAIAFQAIAGAGAIQAMAOAHATQADAKACAKQACAKAAAJQAAAXgHASQgHATgMAOQgGAHgIAGQgIAFgJAEQgTAIgWAAQgWAAgSgIgAgYg9QgKAGgGAKQgHAJgDANQgDAMAAALQAAANADAMQADAMAHAJQAGAKAKAFQAKAGAOAAQAOAAAKgGQALgFAGgKQAHgJACgMQADgMABgNQgBgLgDgMQgCgNgHgJQgGgKgLgGQgKgFgOAAQgOAAgKAFg");
	this.shape_3.setTransform(69.4,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,9.4,0,-9.3).s().p("AgjBgQgJgEgIgFQgHgGgHgHQgMgOgHgTQgHgSAAgXQAAgJACgKQACgKADgKQAHgTAMgOQAHgIAHgGQAIgFAJgEQASgIAWAAQAQAAAPAEQAPAFALAKQAMAIAHAOQAIAOACAQIgrAAQgBgHgEgGQgEgGgFgFQgGgFgIgCQgHgDgIAAQgNAAgLAFQgKAGgGAKQgHAJgDANQgDAMAAALQAAANADAMQADAMAHAJQAGAKAKAFQALAGANAAQAKAAAIgDQAIgDAFgGQAMgNACgTIArAAQgEAXgFAKQgHAQgMAKQgLALgQAFQgPAGgSAAQgWAAgSgIg");
	this.shape_4.setTransform(90.6,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.2,0,-8.2).s().p("AgUBjIAAihIg9AAIAAglICiAAIAAAlIg7AAIAAChg");
	this.shape_5.setTransform(109.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,9.8,0,-9.7).s().p("AA0BjIgPgsIhJAAIgQAsIgsAAIBLjGIArAAIBLDGgAgZAXIAyAAIgZhIIAAAAg");
	this.shape_6.setTransform(127.6,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.2,0,-8.2).s().p("AgVBjIAAihIg7AAIAAglIChAAIAAAlIg8AAIAAChg");
	this.shape_7.setTransform(145.7,10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,28.2,0,-28.1).s().p("ADkBjIgrhEIgtBEIhbAAIgPgsIhJAAIgQAsIhgAAIhGhYIgPAQIAABIIgsAAIAAjGIAsAAIAABRIBOhRIA3AAIhWBUIBbBwIBLjEIArAAIBJDEIBEhkIhBhgIAzAAIAnBAIAphAIAwAAIhABgIBGBmgAgcAXIAyAAIgXhIIgBAAg");
	this.shape_8.setTransform(184.3,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AoHB8IAAgtIiDAAIAAAtIgoAAIAAhSIARAAQAJgLAFgPQAFgNADgOQADgQABgTIABhJICRAAIAAChIAWAAIAABSgApggJQgCANgFANQgEANgHAMIBRAAIAAh9Ig7AAgAi/BMQgJgEgIgGQgIgFgGgIQgNgOgGgSQgHgTAAgUQAAgLACgKQABgLAEgKQAGgTANgOQAGgHAIgGQAIgFAJgFQASgHAXgBQAQAAAPAFQAPAFAMAJQALAJAIAOQAHANACARIgqAAQgBgIgEgFQgEgHgGgEQgGgGgHgCQgIgDgIAAQgPAAgKAGQgKAFgHALQgGAJgDAMQgDANAAANQAAAMADALQADALAGAKQAHAJAKAGQAKAGAPgBQAKAAAIgDQAIgCAGgHQALgMACgUIArAAQgEAYgFAKQgHAPgLAKQgMAMgPAFQgPAGgTAAQgXgBgSgHgAmZBMQgJgEgIgGQgHgFgHgIQgMgOgHgSQgHgTAAgUQAAgLACgKQACgLADgKQAHgTAMgOQAHgHAHgGQAIgFAJgFQASgHAYgBQAXABASAHQAJAFAIAFQAIAGAGAHQAMAOAHATQAEAKABALQACAKAAALQAAAUgHATQgHASgMAOQgGAIgIAFQgIAGgJAEQgSAHgXABQgYgBgSgHgAmJhRQgKAFgGALQgHAJgDAMQgDANAAANQAAAMADALQADALAHAKQAGAJAKAGQALAGAPgBQAOABALgGQAKgGAHgJQAGgKADgLQADgLAAgMQAAgNgDgNQgDgMgGgJQgHgLgKgFQgLgGgOAAQgPAAgLAGgAPxBPIgrhFIgtBFIhbAAIgPgtIhLAAIgQAtIhgAAIhGhXIgPAOIAABJIgsAAIAAjGIAsAAIAABQIBOhQIA3AAIhWBUIBbBvIBLjDIAtAAIBJDDIBEhkIhBhfIAzAAIAnBAIAphAIAwAAIhABfIBGBngAMjACIgZhIIgBAAIgaBIIA0AAgAF0BPIAAihIg8AAIAAglICkAAIAAAlIg8AAIAAChgAEJBPIgPgtIhLAAIgPAtIgsAAIBLjGIAtAAIBLDGgADvACIgZhIIgBAAIgaBIIA0AAgAAKBPIAAihIg6AAIAAglICiAAIAAAlIg8AAIAAChgAtWBPIAAjGICWAAIAAAlIhqAAIAAArIBhAAIAAAiIhhAAIAAAvIBsAAIAAAlgAuoBPIAAhVIhRAAIAABVIgsAAIAAjGIAsAAIAABNIBRAAIAAhNIAsAAIAADGg");
	this.shape_9.setTransform(106,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,212.7,26.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.4,0,-8.4).s().p("AAoBjIAAhWIhPAAIAABWIgsAAIAAjGIAsAAIAABOIBPAAIAAhOIAsAAIAADGg");
	this.shape.setTransform(8.4,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,9.8,0,-9.7).s().p("AA0BjIgQgsIhIAAIgQAsIgsAAIBMjGIArAAIBKDGgAgZAXIAyAAIgZhIIAAAAg");
	this.shape_1.setTransform(28.4,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ACRBjIgQgsIhKAAIgQAsIgqAAIBKjFIAtAAIBKDFgAB2AXIgZhIIgBAAIgaBIIA0AAgAhBBjIAAhWIhQAAIAABWIgsAAIAAjFIAsAAIAABMIBQAAIAAhMIAsAAIAADFg");
	this.shape_2.setTransform(19.2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.2,21.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,12.5,0,-12.5).s().p("AhZCBQgigdgBgzIBBAAQACAQAFAKQAFAMAJAGQAJAHALAEQAMADAMAAQALAAAKgEQAJgDAIgHQAGgHAEgJQAEgJgBgKQAAgNgEgIQgFgJgIgEQgIgGgKgBIgrgCIAAgqIASAAQA1AAAAgpQAAgJgDgHQgDgHgGgFQgNgKgVAAQgJAAgKADQgKADgIAGQgOAMgDAWIg+AAQABgaAJgSQAKgSAQgLQARgMAVgGQAVgGAXAAQAWAAAUAGQATAGAPAMQAPAKAIAQQAHAPAAATQAAAXgMARQgNAQgVAFQANACALAGQAKAEAIAJQAHAJAEANQAGAMAAAOQgBAWgJATQgKASgPAOQgQANgVAHQgXAIgYAAQg8AAgjgdg");
	this.shape.setTransform(12.5,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,14.8,0,-14.7).s().p("ABOCXIgWhDIhwAAIgXBDIhDAAIByktIBCAAIBxEtgAgnAiIBNAAIgmhtIAAAAg");
	this.shape_1.setTransform(41,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,14.8,0,-14.7).s().p("ABOCXIgWhDIhwAAIgYBDIhCAAIByktIBCAAIBxEtgAgnAiIBNAAIgmhtIAAAAg");
	this.shape_2.setTransform(98.3,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,12.1,0,-12).s().p("Ah3CXIAAktICHAAQAcAAAUAIQAUAJANANQAMAOAGARQAFASAAASQAAATgFARQgGARgMAMQgNAOgUAIQgUAJgcAAIhEAAIAABsgAg0gIIBHgBQALgCAIgFQAIgEAFgJQAFgKAAgOQAAgOgFgJQgFgJgIgEQgIgGgLgBIhHgCg");
	this.shape_3.setTransform(70.5,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,12.6,0,-12.6).s().p("Ah8CXIAAktIDfAAIAAA3IidAAIAAA5IBNAAQAWAAAUAFQAUAHANALQAQALAHAQQAJATAAAYQAAAZgIASQgIASgPAMQgOAMgWAGQgTAFgZAAgAg6BgIBCAAQAMAAAKgCQAJgCAHgFQANgJAAgYQAAgLgEgJQgDgIgHgEQgIgFgJgCIgVgDIhBAAg");
	this.shape_4.setTransform(128.3,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,14.9,0,-14.9).s().p("Ag9CSQgOgGgMgJQgMgIgKgLQgSgVgKgdQgLgcAAghQAAgPADgPQADgQAFgPQAKgdASgWQAKgLAMgIQAMgJAOgGQAbgMAiAAQAiAAAdAMQANAGALAJQAMAIAKALQASAWALAdQAGAPACAQQACAPAAAPQAAAhgKAcQgLAdgSAVQgKALgMAIQgLAJgNAGQgdAMgiAAQgiAAgbgMgAglhcQgPAIgKAPQgKAPgFASQgEATAAASQAAATAEASQAFASAKAPQAKAOAPAIQAQAJAVAAQAVAAARgJQAQgIAJgOQAKgPADgSQAGgSAAgTQAAgSgGgTQgDgSgKgPQgJgPgQgIQgRgJgVAAQgVAAgQAJg");
	this.shape_5.setTransform(159,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,12.5,0,-12.4).s().p("AggCXIAAj1IhbAAIAAg4ID3AAIAAA4IhbAAIAAD1g");
	this.shape_6.setTransform(188.4,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,14.8,0,-14.7).s().p("ABOCXIgXhDIhvAAIgYBDIhCAAIByktIBCAAIBxEtgAgnAiIBNAAIgmhtIAAAAg");
	this.shape_7.setTransform(215.9,24.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,12.9,0,-12.8).s().p("AA9CXIAAjRIAAAAIhyDRIhKAAIAAktIBCAAIAADQIABAAIByjQIBKAAIAAEtg");
	this.shape_8.setTransform(246.2,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#CCCCCC","#FFFFFF"],[0,0.349,0.545],0,8.2,0,-8.2).s().p("AhRgfIAyAAQAAANAIAIQAHAKAQAAQARAAAIgJQAHgIAAgOIAyAAQAAAfgVAQQgUAQgpAAQhRAAAAg/g");
	this.shape_9.setTransform(246.6,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ADnC8QgNgGgMgJQgMgIgKgLQgSgVgKgdQgLgcAAghQAAgRADgPQACgOAGgPQAKgdASgWQAKgLAMgIQAMgJANgGQAcgMAjAAQAjAAAcAMQAOAGALAJQAMAIAJALQATAWALAdQAFAPACAOQADAPAAARQAAAhgKAcQgLAdgTAVQgJALgMAIQgLAJgOAGQgcAMgjAAQgjAAgcgMgAEAgyQgQAIgJAPQgKAPgFAQQgEATAAAUQAAATAEASQAFASAKAPQAJAOAQAIQAQAJAWAAQAWAAAQgJQAQgIAKgOQAKgPADgSQAFgSAAgTQAAgUgFgTQgDgQgKgPQgKgPgQgIQgQgJgWAAQgWAAgQAJgAzrCrQgigdgBgzIBBAAQABAQAFAKQAGAMAJAGQAIAHALAEQANADANAAQAMAAAJgEQAJgDAIgHQAHgHAEgJQADgJAAgKQAAgNgFgIQgEgJgIgEQgIgGgKgBIgtgCIAAgsIASAAQA3AAAAgnQAAgJgDgHQgDgHgGgFQgNgKgVAAQgMAAgKADQgJADgIAGQgOAMgDAWIg+AAQAAgaAKgSQAKgSAQgLQARgMAVgGQAVgGAYAAQAXAAAUAGQATAGAPAMQAOAKAIAQQAIAPAAATQAAAXgMAPQgNAQgVAFQANACAKAGQALAGAHAJQAIAJAEANQAFAMAAAOQAAAWgKATQgJASgQAOQgPANgWAHQgWAIgZAAQg+AAgigdgATMDBIAAjRIgBAAIh0DRIhKAAIAAktIBDAAIAADQIAAAAIB0jQIBLAAIAAEtgAOuDBIgXhDIhyAAIgXBDIhDAAIBzktIBEAAIBxEtgAOGBMIgmhtIgCAAIgnBtIBPAAgAIrDBIAAj1IhbAAIAAg4ID4AAIAAA4IhbAAIAAD1gAiJDBIAAktIDfAAIAAA3IicAAIAAA3IBNAAQAWAAAUAFQAUAHANALQAPALAIASQAIATAAAYQAAAZgHASQgJASgOAMQgOAMgWAGQgTAFgZAAgAhGCKIBEAAQAKAAAJgCQAKgCAHgFQANgJAAgYQAAgLgEgJQgDgIgIgEQgHgFgJgCIgTgDIhDAAgAjoDBIgXhDIhyAAIgXBDIhDAAIBzktIBEAAIBxEtgAkQBMIgmhtIgCAAIgnBtIBPAAgArFDBIAAktICIAAQAcAAAUAIQAUAJANANQAMAOAGARQAFASAAASQAAARgFARQgGASgMANQgNAOgUAIQgUAJgcAAIhGAAIAABsgAqDAgIBKgBQAKgCAJgFQAHgEAGgJQAEgKAAgMQAAgOgEgJQgGgJgHgEQgJgGgKgBIhKgCgAslDBIgWhDIhyAAIgXBDIhDAAIByktIBEAAIBxEtgAtNBMIgmhtIgBAAIgoBtIBPAAgARAjHIAxAAQABANAHAIQAHAKASAAQASAAAHgJQAIgIAAgOIAxAAQAAAhgUAQQgVAQgpAAQhSAAAAhBg");
	this.shape_10.setTransform(129.5,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259.1,41.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.euro();
	this.instance.setTransform(0,0,0.868,0.868);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,422,279.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fonfon();
	this.instance.setTransform(0,0,0.797,0.797);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,637.6,424);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(50.8,26,1,1,0,0,0,50.8,28.1);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(51.3,96,1,1,0,0,0,27.9,40);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(46.9,25.3,1,1,0,0,0,50.8,28.1);
	this.instance_2.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,0,106,58);

	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(47.4,95.3,1,1,0,0,0,27.9,40);
	this.instance_3.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-2,-2,60,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-0.7,105.4,136.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(43,118.1,1,1,0,0,0,50.8,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:45.5,y:88.2},3,cjs.Ease.get(-1)).to({x:48.8,y:48.3},4,cjs.Ease.get(1)).to({x:45.9,y:83.2},4,cjs.Ease.get(-1)).to({x:43,y:118.1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,49.3,105.4,136.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.setTransform(48.7,49,0.821,0.821,0,0,0,49,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.77,scaleY:0.77},4,cjs.Ease.get(-1)).to({regX:49.1,scaleX:0.71,scaleY:0.71,x:48.8},5,cjs.Ease.get(1)).to({scaleX:0.77,scaleY:0.77},5,cjs.Ease.get(-1)).to({regX:49,scaleX:0.82,scaleY:0.82,x:48.7},5,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(49,49,1.061,1.061,0,0,0,49,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.03,scaleY:1.03,x:49.1,y:49.1},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:49,y:49},5,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},5,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-6.2,110.4,113.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(489.3,85.4,1,1,0,0,0,70.8,10.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:189.3},9,cjs.Ease.get(1)).wait(17).to({scaleX:1.08,scaleY:1.08},6).to({scaleX:1,scaleY:1},6).wait(2).to({x:489.3},9,cjs.Ease.get(-1)).wait(15));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(354.4,85.4,1,1,0,0,0,54.3,10.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:54.4},9,cjs.Ease.get(1)).wait(18).to({scaleX:1.07,scaleY:1.07},5).to({scaleX:1,scaleY:1},7).wait(9).to({x:354.4},9,cjs.Ease.get(-1)).wait(11));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(453.8,53.5,1,1,0,0,0,106.2,12.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:153.8},9,cjs.Ease.get(1)).wait(19).to({scaleX:1.06,scaleY:1.06},5).to({scaleX:1,scaleY:1},8).wait(15).to({x:453.8},9,cjs.Ease.get(-1)).wait(7));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(319.1,51.4,1,1,0,0,0,19.1,10);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:19.1},9,cjs.Ease.get(1)).wait(19).to({scaleX:1.13,scaleY:1.13,y:51.5},6).to({scaleX:1,scaleY:1,y:51.4},6).wait(22).to({x:319.1},9,cjs.Ease.get(-1)).wait(4));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(430.7,12.8,1,1,0,0,0,129.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:130.7},9,cjs.Ease.get(1)).wait(20).to({regX:129.6,scaleX:1.09,scaleY:1.09,x:130.8},6).to({regX:129.5,scaleX:1,scaleY:1,x:130.7},6).wait(13).to({x:430.7},9,cjs.Ease.get(-1)).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(301.2,-7.2,259.1,41.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(211,139.8,1,1,0,0,0,211,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,422,279.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(211,139.8,1,1,0,0,0,211,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.5,x:202.8,y:148.2},19,cjs.Ease.get(-1)).to({rotation:7.5,x:194.1,y:157},20,cjs.Ease.get(1)).to({rotation:3.6,x:202.6,y:148.5},20,cjs.Ease.get(-1)).to({rotation:0,x:211,y:139.8},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,422,279.6);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(120.1,35.5,1.053,1.053,0,0,0,65.7,12.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#669900","#AED814","#77B700"],[0,0.486,0.498],3.5,-117.5,3.5,123.5).s().p("AyZFoQgaAAAAgbIAAqZQAAgbAaAAMAkzAAAQAaAAAAAbIAAKZQAAAbgaAAg");
	this.shape.setTransform(120.5,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#669900","#669900","#66B901","#B7E514","#7EC905"],[0,0,0,0.486,0.498],3.5,-117.5,3.5,123.5).s().p("AyZFoQgaAAAAgbIAAqZQAAgbAaAAMAkzAAAQAaAAAAAbIAAKZQAAAbgaAAg");
	this.shape_1.setTransform(120.5,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#669900").s().p("AyZFnQgaABAAgbIAAqZQAAgaAagBMAkzAAAQAaABAAAaIAAKZQAAAbgagBg");
	this.shape_2.setTransform(120.5,39.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,75.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Symbol();
	this.instance.setTransform(120.5,36,1,1,0,0,0,120.5,36);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.5},4,cjs.Ease.get(-1)).to({regY:36.1,rotation:3.5,y:36.1},5).to({regY:36,rotation:0,y:36},5,cjs.Ease.get(1)).to({rotation:-3.5},4,cjs.Ease.get(-1)).to({regY:36.1,rotation:3.5,y:36.1},5).to({regY:36,rotation:0,y:36},5,cjs.Ease.get(1)).to({rotation:-3.5},4,cjs.Ease.get(-1)).to({regY:36.1,rotation:3.5,y:36.1},5).to({regY:36,rotation:0,y:36},5,cjs.Ease.get(1)).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,75.4);


(lib.Символ19 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(-176.9,179.5,1,1,0,0,0,120.5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:126.1},4,cjs.Ease.get(-1)).to({y:59.5},5,cjs.Ease.get(1)).to({y:119.5},5,cjs.Ease.get(-1)).to({y:179.5},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(-171.1,55.8,1,1,0,0,0,130,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:131.4},4,cjs.Ease.get(-1)).to({y:225.8},5,cjs.Ease.get(1)).to({y:140.8},5,cjs.Ease.get(-1)).to({y:55.8},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.4,0,556.5,218.8);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(22.6,36.6,0.818,1.062,-85.5,0,0,50.7,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:50.6,rotation:-109.4,x:2,y:11.4},19).to({regX:50.7,rotation:-85.5,x:22.6,y:36.6},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,150.1,90.4);


// stage content:



(lib._500eu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.tek.gotoAndPlay(2);
		
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.tek.gotoAndPlay(11);
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ18();
	this.instance.setTransform(453.5,72.3,1,1,-17.2,0,0,75.3,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(309.1,108.5,1,1,-17.2,0,0,49,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.tek = new lib.Символ19();
	this.tek.setTransform(666.8,204,1,1,0,0,0,44,27.9);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(180.3,119.1,0.941,0.941,-4.2,0,0,211.1,139.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(311.8,165,1,1,0,0,0,318.8,212);
	this.instance_3.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-2,-2,642,428);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(272.4,103,909.5,441.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
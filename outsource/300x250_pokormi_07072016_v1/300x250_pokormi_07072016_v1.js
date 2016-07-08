(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/eee1.png?1467965184842", id:"eee1"},
		{src:"images/fasdfasdf.jpg?1467965184842", id:"fasdfasdf"},
		{src:"images/qqq.png?1467965184842", id:"qqq"},
		{src:"images/rhdhjhd.png?1467965184842", id:"rhdhjhd"},
		{src:"images/rrr1.png?1467965184842", id:"rrr1"}
	]
};



// symbols:



(lib.eee1 = function() {
	this.initialize(img.eee1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


(lib.fasdfasdf = function() {
	this.initialize(img.fasdfasdf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.qqq = function() {
	this.initialize(img.qqq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,283);


(lib.rhdhjhd = function() {
	this.initialize(img.rhdhjhd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,399);


(lib.rrr1 = function() {
	this.initialize(img.rrr1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,363);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.qqq();
	this.instance.setTransform(-67.6,-172.1,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-172.1,91.2,110.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eee1();
	this.instance.setTransform(358.4,-173.2,0.45,0.45,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.4,-173.2,614.8,345.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59268F").s().p("ACJAfIgFgCQgEgBgDgEQgDgDgBgEQgCgFAAgFIAAgPIACgJQABgDADgDQADgEAEgCIAFgBIAFAAIAHAAIAGACIAFAFIADAFIgIAEIgFgHQgDgCgFAAIgGABIgFAEQgCACgBADIAAAGIAAAOIAAAGQABADACACQACADADACIAGAAQAFAAADgCIADgDIACgEIAIAEQgDAGgFAEQgFADgIABgAgyAfIgGgDIgFgFIgEgFIAIgEIACAEIAEADIAEACIAFABIAGgBIAEgCQAFgDAAgFQAAgGgEgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFgBIgHAAIAAgFIAHAAQAFAAADgDIADgDIABgEIgBgEIgDgDIgEgBIgFgBQgFAAgEACQgEACgCAFIgHgEQABgDADgCIAEgFQAGgCAIAAQAFgBAEACQAEABADACQACACABADIACAGIAAAEIgCAEIgDADQgCACgDABIAGABIADAEIABAEIABAEIgBAHQgCAEgDACQgDADgFACQgEACgFAAIgIgBgABqAfIgFgPIgaAAIgGAPIgIAAIAXg9IAHAAIAXA9gABjAJIgLgdIgBAAIgKAdIAWAAgAAuAfIAAgdIgcAAIAAAdIgIAAIAAg9IAIAAIAAAbIAcAAIAAgbIAIAAIAAA9gAhsAfIAAg9IAoAAIAAAHIggAAIAAAUIAbAAIAAAFIgbAAIAAAVIAgAAIAAAIgAiiAfIAAg9IAnAAIAAAHIgfAAIAAAUIAPAAQAFAAAEACQAEABADAAIAEAFQABADAAAFQAAAEgBAEIgFAFQgDADgEABIgIABgAiaAXIAPAAQAGAAADgCIADgEIABgEIgBgEIgCgEIgEgCIgGgBIgPAAg");
	this.shape.setTransform(-39.9,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59268F").s().p("AiDAfQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFgBgCgEQgDgDgCgEIgBgKIAAgPIABgJQACgDADgDQACgEAFgCIAEgBIAGAAIAHAAIAFACIAGAFIADAFIgIAEQgBgEgEgDQgDgCgFAAIgGABIgGAEIgCAFIgBAGIAAAOIABAGIACAFIAGAFIAGAAQAFAAADgCIAEgDIABgEIAIAEQgDAGgFAEQgGADgHABgACMAfIAAguIgeAuIgJAAIAAg9IAJAAIAAAvIAggvIAGAAIAAA9gABRAfIAAgrIAAAAIgQAiIgIAAIgQgiIAAArIgIAAIAAg9IAIAAIAVAqIATgqIAIAAIAAA9gAASAfIgFgPIgZAAIgEAPIgJAAIAXg9IAFAAIAYA9gAALAJIgLgdIAAAAIgJAdIAUAAgAgpAfIAAgdIgbAAIAAAdIgIAAIAAg9IAIAAIAAAbIAbAAIAAgbIAJAAIAAA9g");
	this.shape_1.setTransform(27.6,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,1.6,98.7,6.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEpBVIAAgfIiYAAIAAiJIAYAAIAABzIAqAAIAAhzIAYAAIAABzIArAAIAAhzIAYAAIAAB0IARAAIAAA0gAhDA2IgKgDQgKgEgGgIQgHgHgDgJQgDgKAAgLIAAgiQAAgKADgKQADgJAHgIQAGgGAKgFQAKgEANAAQAMAAAJAEQAKAEAHAHQAGAHAEAJQAEAKAAALIAAAiQAAANgEAJQgEAKgHAHQgGAHgKAEQgKADgLAAgAhDg7QgFADgDADQgEAEgBAGQgCAFAAAFIAAAkQAAAFACAGQABAFAEAFQADAEAFACQAFADAHAAQAHAAAFgDQAFgCAEgEQADgEACgFQACgGAAgGIAAgkQAAgFgCgGQgCgFgDgEQgEgEgFgCQgFgCgHgBQgHABgFACgAkcA2IgLgDQgKgEgGgHQgGgHgDgKQgEgKAAgLIAAgiQAAgKAEgKQADgJAGgIQAGgGAKgFIALgDIAMgBQAJAAAIACQAIACAGAEQAMAJAGAPIgXAJQgDgIgGgFQgHgFgKAAQgHAAgFACQgFADgEADQgDAFgCAFQgBAFAAAFIAAAjQAAAGABAGQACAFADAEQAEAEAFADQAFADAHAAQAKAAAHgGQAGgFADgJIAXAKQgFAPgNAIQgNAJgSAAgAIlA2Igeg0IgfA0IgbAAIAthFIgqhEIAbAAIAcAwIAbgwIAbAAIgqBEIAtBFgAGnA2IAAhcIAAAAIg/BcIgWAAIAAiJIAYAAIAABgIABABIBAhhIAUAAIAACJgABcA2IAAg5IgTAAIgIABQgDABgEABQgDADgDAEQgDAFgCAGIgKAkIgaAAIALgnQADgJAEgGQAEgEAIgEQgHgBgEgEQgFgEgDgEQgDgFgBgFIgBgLQAAgJADgIQADgHAGgGQAGgFAIgDQAIgDAJAAIA5AAIAACJgAA3g9QgEABgDAEQgGAEAAAKQAAAGACACQABAEAEADIAHACIAKABIAaAAIAAgmIgcAAQgFAAgEABgAi0A2IAAh0IgmAAIAAgVIBlAAIAAAVIgmAAIAAB0gAlnA2IgLgfIg0AAIgLAfIgZAAIA0iJIAUAAIA0CJgAl5ACIgTg2IAAAAIgTA2IAmAAgAnxA2IAAg6Ig2AAIAAA6IgYAAIAAiJIAYAAIAAA6IA2AAIAAg6IAYAAIAACJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.6,-8.5,115.4,17.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59268F").s().p("Az8sqMAn5AAAIAAWiMgn5ACzg");
	this.shape.setTransform(0,-28.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-109.6,255.6,162.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBUIAAgeIheAAIAAAeIgVAAIAAgyIANgCQAFgFACgDQADgFACgHQACgHAAgHIAEhRIBcAAIAAB0IAOAAIAAAzgAiQAIIgDANQgBAGgEAGIA7AAIAAhfIgvAAgAgwAkQAIgCAFgDQAFgEADgFQADgGABgIQACgIAAgMIAAhHIBXAAIAACJIgZAAIAAh0IgpAAIAAAmQAAAVgBAMQgCAPgFALIgFAIQgEAEgEADQgJAFgNABgACpA2IAAg6IgTAAIgIACQgEABgDABQgEACgCAFQgDAEgCAHIgLAkIgZAAIALgoQACgJAEgFQAEgFAIgDQgGgBgFgFQgEgDgDgFQgDgEgBgGIgCgLQAAgJAEgHQADgIAGgFQAFgGAIgCQAIgDAKAAIA4AAIAACJgACDg9QgEABgDADQgGAFAAAKQAAAFACADQACAEADACIAIADIAJABIAbAAIAAgmIgcAAQgGgBgEACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-8.5,38.8,17);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgAWAkjMAAAg9sIpaAAIAAB8ImKkaIGKkZIAAB+IJaAAIAAmgIBKAAIAAGeII9AAIAAh8IGKEZImKEaIAAh+Io9AAMAAAA9ug");
	this.shape.setTransform(0,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-205.7,204,467.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEkBFIgLgDQgKgEgGgHQgGgHgDgKQgEgKAAgLIAAgiQAAgKAEgJQADgKAGgHQAGgIAKgEIALgDIAMgBQAJAAAIACQAIADAGADQAMAKAGAOIgXAJQgDgIgGgFQgHgFgKAAQgHAAgFACQgFADgEAEQgDAEgCAFQgBAFAAAGIAAAiQAAAGABAFQACAGADAEQAEAEAFADQAFACAHAAQAKABAHgGQAGgFADgJIAXAKQgFAPgNAJQgNAIgSAAgAk4BFIgLgDQgKgEgGgHQgGgHgDgKQgEgKAAgLIAAgiQAAgKAEgJQADgKAGgHQAGgIAKgEIALgDIAMgBQAJAAAIACQAIADAGADQAMAKAGAOIgXAJQgDgIgGgFQgHgFgKAAQgHAAgFACQgFADgEAEQgDAEgCAFQgBAFAAAGIAAAiQAAAGABAFQACAGADAEQAEAEAFADQAFACAHAAQAKABAHgGQAGgFADgJIAXAKQgFAPgNAJQgNAIgSAAgADNBFIAAhdIgBAAIg+BdIgXAAIAAiJIAZAAIAABgIAAAAIBBhgIAUAAIAACJgAgCBFIAAiJIA1AAQALAAAIADQAIADAGAEQAFAFADAIQADAGAAAJIgBAIIgDAHIgGAHQgEAEgFADIAAAAQAFABAEACIAHAIIAEAJQACAFAAAFQAAAJgEAHQgDAIgGAFQgFAFgIADQgHADgIAAgAAUAvIAfAAQAGAAAEgCQAEgBADgDIAEgGQABgEAAgEIgBgHIgEgGIgHgFQgEgBgGAAIgfAAgAAUgKIAcAAQALAAAGgGQAFgFAAgIQAAgHgFgGQgGgEgLAAIgcAAgAh4BFIAAiJIA2AAQAKAAAIADQAJADAHAFQAGAFAEAIQADAJAAAKQAAAJgDAIQgDAHgGAEQgGAFgJAEQgIADgKABIggAAIAAA1gAhggFIAeAAQALAAAGgFQADgEABgDQACgEAAgEQAAgLgHgFQgGgFgLAAIgdAAgAjpBFIAAiJIBeAAIAAAWIhFAAIAAAkIA6AAIAAATIg6AAIAAAmIBFAAIAAAWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-7,70.7,14.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak7BUQgIgCgHgEQgOgIgGgPIAXgKQABAEADADIAHAGQAEADAFABQAEACAFAAQAMAAAIgGQAHgFAAgKQAAgKgGgGQgGgFgLAAIgQAAIAAgVIARAAQAJAAAGgCQAGgFAAgIQAAgIgHgEQgGgEgKgBIgJACIgIADQgIAFgEAIIgVgLQAGgNANgIQAMgJATABQALgBAJADQAJADAGAEQAGAFADAHQADAGAAAJIgBAIIgDAJIgGAFQgEADgGADIAAABQAHACAEAEQAEAEADAEQACAFABAEIABAJQAAAKgEAIQgEAHgHAGQgHAFgJADQgKADgLAAQgJAAgIgCgAFHBVIAAhdIgBAAIg+BdIgXAAIAAiJIAZAAIAABgIAAABIBBhhIAUAAIAACJgACBBVIAAiJIBdAAIAAAWIhFAAIAAAiIA7AAIAAAWIg7AAIAAAlIBFAAIAAAWgAALBVIAAiJIA2AAQAKAAAIACQAJAEAHAFQAGAFAEAJQADAHAAAMQAAAIgDAGQgDAHgGAGQgGAFgJAEQgIAEgKAAIggAAIAAA1gAAjAJIAeAAQALABAGgHQADgDABgBQACgEAAgEQAAgLgHgFQgGgFgLAAIgdAAgAhkBVIAAiJIBeAAIAAAWIhFAAIAAAiIA6AAIAAAWIg6AAIAAAlIBFAAIAAAWgAjfBVIAAiJIA3AAQALAAAIACQAIAEAGAEQAFAGADAHQADAGAAAJIgBAIIgDAGIgGAHQgEADgFACIAAABQAFACAEADIAHAIIAEAJQACAFAAAFQAAAJgEAIQgDAHgGAFQgFAFgIADQgHADgIAAgAjHA/IAfAAQAGAAAEgBQAEgCADgDIAEgGQABgEAAgDIgBgIIgEgGQgDgCgEgCQgEgCgGAAIgfAAgAjHADIAcAAQALABAGgEQAFgFAAgIQAAgIgFgFQgGgEgLgBIgcAAgAEZg7QgGgDgDgFQgEgEgBgFIgCgJIARAAIABAEIADAEIAEAEQACABADAAQADAAADgBIAEgEIACgEIABgEIARAAIgCAJQgCAFgDAEQgDAFgGADQgGADgIAAQgIAAgGgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-8.6,70.3,17.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyLIwIAAxfMAkXAAAIAARfg");
	this.shape.setTransform(28.8,-94);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKdA/IBAg/IhAg+IALgLIBLBJIhLBKgAAdA4QgGgBgGgDQgLgHgEgMIASgIQABADADADIAFAEQADADAEABQAEACAEAAQAJgBAGgFQAGgEAAgIQAAgHgEgFQgGgEgJAAIgMAAIAAgPIANAAQAHAAAGgDQAEgFAAgFQAAgHgFgEQgGgDgHAAIgIABIgGADQgGAEgDAGIgRgIQAEgLAKgHQALgGAPgBQAIAAAIACQAGADAFAEQAFADADAGQACAFAAAHIgBAGIgCAHQgCADgDADQgCADgFACIAAAAQAFAAAEAEIAEAGIADAHIABAIQAAAHgDAGQgEAHgFAEQgGAEgHACQgHADgJAAQgIAAgHgCgAmpA5IgIgCQgIgEgGgGQgEgFgEgIQgCgHAAgJIAAgbQAAgIACgIQAEgHAEgHQAGgFAIgEQAHgDALAAQAKAAAHADQAIADAFAGQAFAFADAJQADAHAAAJIAAAbQAAAKgDAHQgCAIgGAGQgGAFgHADQgIADgJAAgAmpghQgEACgDAEQgDADgBAEQgBAEgBAFIAAAcIACAIQABAEADAEQADADAEACQAEACAGAAQAFAAAEgCQAEgBADgEQACgDACgEQACgFgBgEIAAgcQABgGgCgEIgEgHQgDgDgEgCQgEgCgFAAQgGAAgEACgAptA5IgJgCQgIgEgFgGQgFgFgCgIQgDgHAAgJIAAgbQAAgIADgIQACgHAFgHQAFgFAIgEQAIgDALAAQAJAAAIADQAHADAGAGQAFAFADAJQADAHAAAJIAAAbQAAAKgDAHQgDAIgGAGQgFAFgHADQgIADgJAAgAptghQgFACgDAEQgCADgBAEQgCAEAAAFIAAAcIACAIIADAIQADADAFACQAEACAFAAQAGAAAEgCQAEgBADgEQADgDABgEIABgJIAAgcIgBgKQgBgEgDgDQgDgDgEgCQgEgCgGAAQgFAAgEACgAG9A5IAAgvIgWAAIgFAEQgDACgCADIgEAJIgIAdIgVAAIAJgfQACgIAEgEQADgGAGgBQgFgCgEgDIgGgEQgDgFAAgDIgBgJQAAgIACgGQADgGAFgFQAEgDAGgDQAHgCAIAAIAtAAIAABtgAGfgiQgDABgCACQgGAEABAIQAAAEABADQABADAEABIAFACIAIABIAVAAIAAgfIgWAAQgFABgDABgAEkA5IAAhtIAsAAQAHAAAHACQAIACAEAEQAGAEACAHQADAHABAIQAAAIgDAFQgCAFgGAFQgFADgGADQgGAEgJAAIgZAAIAAAqgAE4gBIAYAAQAJgBAEgEQADgCAAgDIACgHQAAgJgFgDQgGgFgIAAIgXAAgADKA5IAAhtIBLAAIAAARIg3AAIAAAdIAvAAIAAAPIgvAAIAAAfIA3AAIAAARgABnA5IAAhtIAsAAQAJAAAHACQAGACAEAEQAFAEACAGQADAFAAAIIgBAFIgCAHIgFAGIgIADIAAAAIAIAEIAFAGIADAHQACAEAAAEQAAAIgDAFQgDAGgEAFQgEAEgHACQgFACgHAAgAB7AoIAYAAIAIgCQAEgBACgDIADgEIABgGIgBgGIgDgFIgGgEIgIgBIgYAAgAB7gGIAWAAQAJAAAFgEQADgFAAgGQAAgGgDgEQgFgEgJAAIgWAAgAhFA5IAAhKIgBAAIgxBKIgSAAIAAhtIATAAIAABNIABAAIAzhNIAQAAIAABtgAizA5IAAhAIAAAAIgXAxIgPAAIgXgyIgBABIAABAIgTAAIAAhtIASAAIAgBFIABAAIAfhFIATAAIAABtgAljA5IAAhtIAsAAQAHAAAIACQAGACAGAEQAFAEADAHQACAHAAAIQAAAIgCAFQgDAFgFAFQgEADgHADQgGAEgJAAIgZAAIAAAqgAlPgBIAYAAQAIgBAFgEIAEgFIABgHQAAgJgFgDQgGgFgIAAIgXAAgAnmA5IgJgfIgFgJIgEgFIgGgDIgVAAIAAAwIgUAAIAAhtIAUAAIAAAuIATAAIAGgDIAFgFQADgDABgFIAKgeIATAAIgKAhQgDAHgEAGQgEAGgFAAIAGACIAEAFQAEAGADAJIAKAjgAqzA5IAAhcIgrAAIAABcIgUAAIAAhtIBSAAIAABtgAH+A4IAAgSIAUAAIAAASgAIAAaIgBhPIASAAIgCBPg");
	this.shape.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-7.8,151,14.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AlhDsIAAouIHqgmQEqImhvBNQkaBeikAAQjAAAgnh9g");
	this.shape.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-35.6,70.9,72.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AA6FB0").s().p("AxXEzIAAplMAivAAAIAAJlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-30.7,222.5,61.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvzEXIAAotIfnAAIAAItg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.2,-28,202.6,56);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#902F00","#FF5300"],[0,1],0,27.5,0,-27.5).s().p("AvzEXIAAotIfnAAIAAItg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.2,-28,202.6,56);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(172.6,-150.4,1,1,0,0,0,-28.3,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-22,regY:-117,rotation:3.8,x:192.1,y:-346.5},0).wait(1).to({rotation:6.9,x:202.6,y:-345.2},0).wait(1).to({rotation:9.4,x:211,y:-343.8},0).wait(1).to({rotation:11.4,x:217.7,y:-342.3},0).wait(1).to({rotation:13.1,x:223.2,y:-340.8},0).wait(1).to({rotation:14.5,x:228.1,y:-339.5},0).wait(1).to({rotation:15.8,x:232.5,y:-338.2},0).wait(1).to({rotation:17.1,x:236.5,y:-336.9},0).wait(1).to({rotation:18.2,x:240,y:-335.6},0).wait(1).to({rotation:19,x:242.8,y:-334.6},0).wait(1).to({rotation:19.8,x:245.1,y:-333.7},0).wait(1).to({rotation:20.4,x:247.1,y:-332.9},0).wait(1).to({rotation:20.9,x:248.8,y:-332.2},0).wait(1).to({rotation:21.4,x:250.3,y:-331.5},0).wait(1).to({rotation:21.9,x:251.8,y:-330.9},0).wait(1).to({rotation:22.3,x:253.3,y:-330.2},0).wait(1).to({rotation:22.8,x:254.8,y:-329.6},0).wait(1).to({rotation:23.4,x:256.5,y:-328.8},0).wait(1).to({regX:-28.3,regY:79.9,rotation:24,x:172.6,y:-150.5},0).wait(1).to({regX:-22,regY:-117,rotation:20.3,x:246.7,y:-333},0).wait(1).to({rotation:17.3,x:237.2,y:-336.6},0).wait(1).to({rotation:14.9,x:229.3,y:-339.1},0).wait(1).to({rotation:12.9,x:222.8,y:-341},0).wait(1).to({rotation:11.3,x:217.3,y:-342.3},0).wait(1).to({rotation:9.9,x:212.5,y:-343.3},0).wait(1).to({rotation:8.6,x:208.1,y:-344.3},0).wait(1).to({rotation:7.3,x:204,y:-344.9},0).wait(1).to({rotation:6.2,x:200.3,y:-345.5},0).wait(1).to({rotation:5.3,x:197.1,y:-345.9},0).wait(1).to({rotation:4.6,x:194.6,y:-346.2},0).wait(1).to({rotation:3.9,x:192.4,y:-346.4},0).wait(1).to({rotation:3.4,x:190.5,y:-346.6},0).wait(1).to({rotation:2.9,x:188.9,y:-346.8},0).wait(1).to({rotation:2.4,x:187.3,y:-346.9},0).wait(1).to({rotation:2,x:185.7,y:-347},0).wait(1).to({rotation:1.5,x:184.2,y:-347.1},0).wait(1).to({rotation:1.1,x:182.5,y:-347.2},0).wait(1).to({rotation:0.6,x:180.8,y:-347.3},0).wait(1).to({regX:-28.3,regY:80,rotation:0,x:172.6,y:-150.4},0).wait(1).to({regX:-22,regY:-117,rotation:-3.1,x:168.3,y:-347.5},0).wait(1).to({rotation:-5.6,x:159.6,y:-347.1},0).wait(1).to({rotation:-7.6,x:152.7,y:-346.5},0).wait(1).to({rotation:-9.3,x:147,y:-345.8},0).wait(1).to({rotation:-10.7,x:142.3,y:-345.1},0).wait(1).to({rotation:-11.9,x:138.2,y:-344.5},0).wait(1).to({rotation:-13,x:134.5,y:-343.8},0).wait(1).to({rotation:-14,x:131.1,y:-343.1},0).wait(1).to({rotation:-14.9,x:127.9,y:-342.4},0).wait(1).to({rotation:-15.7,x:125.3,y:-341.8},0).wait(1).to({rotation:-16.3,x:123.3,y:-341.2},0).wait(1).to({rotation:-16.9,x:121.5,y:-340.7},0).wait(1).to({rotation:-17.3,x:119.9,y:-340.3},0).wait(1).to({rotation:-17.7,x:118.6,y:-340},0).wait(1).to({rotation:-18.1,x:117.3,y:-339.6},0).wait(1).to({rotation:-18.5,x:116,y:-339.2},0).wait(1).to({rotation:-18.9,x:114.8,y:-338.8},0).wait(1).to({rotation:-19.3,x:113.5,y:-338.5},0).wait(1).to({rotation:-19.7,x:112,y:-338},0).wait(1).to({regX:-28.3,regY:80,rotation:-20.2,x:172.6,y:-150.4},0).wait(1).to({regX:-22,regY:-117,rotation:-17.1,x:120.7,y:-340.6},0).wait(1).to({rotation:-14.6,x:129.1,y:-342.6},0).wait(1).to({rotation:-12.6,x:135.9,y:-344},0).wait(1).to({rotation:-10.9,x:141.6,y:-345.1},0).wait(1).to({rotation:-9.5,x:146.2,y:-345.7},0).wait(1).to({rotation:-8.3,x:150.4,y:-346.2},0).wait(1).to({rotation:-7.2,x:154.1,y:-346.6},0).wait(1).to({rotation:-6.2,x:157.7,y:-346.9},0).wait(1).to({rotation:-5.3,x:160.9,y:-347.2},0).wait(1).to({rotation:-4.5,x:163.4,y:-347.3},0).wait(1).to({rotation:-3.9,x:165.7,y:-347.4},0).wait(1).to({rotation:-3.3,x:167.5},0).wait(1).to({rotation:-2.9,x:169.1,y:-347.5},0).wait(1).to({rotation:-2.4,x:170.5},0).wait(1).to({rotation:-2.1,x:171.8},0).wait(1).to({rotation:-1.7,x:173.1},0).wait(1).to({rotation:-1.3,x:174.4},0).wait(1).to({rotation:-0.9,x:175.8},0).wait(1).to({rotation:-0.5,x:177.3,y:-347.4},0).wait(1).to({regX:-28.3,regY:80,rotation:0,x:172.6,y:-150.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.3,-402.5,91.2,110.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(0,-13.4,1,0.671);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-87,255.6,109);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(8.7,-156.3,1.256,1.256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgAVAnwMAAAg9sIpZAAIAAB8ImJkZIGJkYIAAB+IJZAAIAAs7IBJAAIAAM5II7AAIAAh8IGJEZImJEYIAAh+Io7AAMAAAA9ug");
	this.shape.setTransform(0,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.6,-248.7,203.3,508.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(-0.1,56.9,1.118,1.118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0.7,58,1.118,1.118);
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-104,-208,208,472);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-221.2,237,579.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 17
	this.instance = new lib.Символ17();
	this.instance.setTransform(4,14.2,1.676,1.676);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({y:19.2},5).to({y:14.2},7).wait(1).to({regY:8.7,y:28.8},0).to({scaleX:1.96,scaleY:1.96},8).to({scaleX:1.68,scaleY:1.68},9).wait(1));

	// Символ 24
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(4.2,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({scaleX:1.46,scaleY:1.46},5).to({scaleX:1,scaleY:1},7).wait(1).to({scaleX:0.85,scaleY:0.85,y:-14.5},8).to({scaleX:1,scaleY:1,y:-8},9).wait(1));

	// Символ 21
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(41.8,-27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({regX:-19.6,regY:5.5,x:22.2,y:-22.4},0).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:1.13,x:44.3,y:-28.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:45.9,y:-29},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:47.1,y:-29.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:47.8,y:-29.6},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:48.3,y:-29.7},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:48.7,y:-29.8},0).wait(1).to({regX:-19.6,regY:5.5,scaleX:1.38,scaleY:1.38,x:22.2,y:-22.4},0).wait(1).to({regX:0,regY:0,scaleX:1.26,scaleY:1.26,x:46.9,y:-29.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:45.4,y:-28.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:44.3,y:-28.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:43.5,y:-28.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:42.9,y:-28.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:42.5,y:-28.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:42.2,y:-28},0).wait(1).to({regX:-19.6,regY:5.5,scaleX:1,scaleY:1,x:22.2,y:-22.4},0).to({y:-27.4},5).to({y:-22.4},7).wait(1).to({scaleX:0.85,scaleY:0.85,x:19.5,y:-26.7},8).to({scaleX:1,scaleY:1,x:22.2,y:-22.4},9).wait(1));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(-18.7,-29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:35.3,regY:7,x:16.6,y:-22.4},0).wait(1).to({regX:0,regY:0,scaleX:1.14,scaleY:1.14,x:-23.6,y:-30.4},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-26.5,y:-31},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-28.2,y:-31.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-29.1,y:-31.5},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:-29.7,y:-31.6},0).wait(1).to({regX:35.3,regY:7,scaleX:1.33,scaleY:1.33,x:16.6,y:-22.4},0).wait(1).to({regX:0,regY:0,scaleX:1.21,scaleY:1.21,x:-25.9,y:-30.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-23.2,y:-30.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-21.4,y:-30},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-20.3,y:-29.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-19.7,y:-29.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-19.2,y:-29.6},0).wait(1).to({regX:35.3,regY:7,scaleX:1,scaleY:1,x:16.6,y:-22.4},0).wait(8).to({y:-27.4},5).to({y:-22.4},7).wait(1).to({scaleX:0.85,scaleY:0.85,x:14.8,y:-26.8},8).to({scaleX:1,scaleY:1,x:16.6,y:-22.4},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-36.5,117.8,65.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.rrr1();
	this.instance.setTransform(-20.8,-153.8,0.319,0.319,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(21.7,-111.6,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.6,-244.2,470.5,264.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rhdhjhd();
	this.instance.setTransform(-34.9,-34.8,0.175,0.175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(0.9,1.5);
	this.instance_1.alpha = 0.621;
	this.instance_1.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance_1.cache(-37,-38,75,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,-40.1,86,88);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(0,2.5);
	this.instance_1.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance_1.cache(-103,-30,207,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.2,-28.5,212,65);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-19.3,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.8,-9.4,151,14.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ1();
	this.instance.setTransform(-43.7,-46.9,1.563,1.563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#D5D5D5"],[0,0.275],-53.3,0,53.4,0).s().p("AoUV8MAAEgr3IQlAAMgAEAr3g");
	this.shape.setTransform(-78.2,-52.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance_1 = new lib.fasdfasdf();
	this.instance_1.setTransform(-66.9,-175.9,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.6,-193.4,237.2,305.1);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-9.5,151,14.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_75 = function() {
		this.stop();
	}
	this.frame_90 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(16).call(this.frame_75).wait(15).call(this.frame_90).wait(15).call(this.frame_105).wait(14).call(this.frame_119).wait(1));

	// Слой 10
	this.text1 = new lib.Символ4();
	this.text1.setTransform(-87.7,-178.2,0.707,0.707);

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(120));

	// Символ 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(0,-162.9,1.258,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(1.2,28,1.423,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Символ 8
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:147.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:-144.2},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:147.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:-144.2},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_1 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_2 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_3 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_4 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_5 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_6 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_7 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_8 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_9 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_10 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_11 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_12 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_13 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_14 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_15 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_16 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_17 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_18 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_19 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_20 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_21 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_22 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_23 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_24 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_25 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_26 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_27 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_28 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_29 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_30 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_31 = new cjs.Graphics().p("EgbZApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_32 = new cjs.Graphics().p("Egc2ApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_33 = new cjs.Graphics().p("EgeMApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_34 = new cjs.Graphics().p("EgfaApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_35 = new cjs.Graphics().p("EgghApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_36 = new cjs.Graphics().p("EghgApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_37 = new cjs.Graphics().p("EgiYApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_38 = new cjs.Graphics().p("EgjIApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_39 = new cjs.Graphics().p("EgjxApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_40 = new cjs.Graphics().p("EgkTApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_41 = new cjs.Graphics().p("EgktApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_42 = new cjs.Graphics().p("EglAApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_43 = new cjs.Graphics().p("EglLApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_44 = new cjs.Graphics().p("EglPApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_45 = new cjs.Graphics().p("EglPApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_46 = new cjs.Graphics().p("EgjqApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_47 = new cjs.Graphics().p("EgiNApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_48 = new cjs.Graphics().p("Egg3ApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_49 = new cjs.Graphics().p("EgfpApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_50 = new cjs.Graphics().p("EgeiApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_51 = new cjs.Graphics().p("EgdjApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_52 = new cjs.Graphics().p("EgcrApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_53 = new cjs.Graphics().p("Egb7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_54 = new cjs.Graphics().p("EgbSApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_55 = new cjs.Graphics().p("EgawApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_56 = new cjs.Graphics().p("EgaWApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_57 = new cjs.Graphics().p("EgaDApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_58 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_59 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_60 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_61 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_62 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_63 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_64 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_65 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_66 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_67 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_68 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_69 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_70 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_71 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_72 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_73 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_74 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_75 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_76 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_77 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_78 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_79 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_80 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_81 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_82 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_83 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_84 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_85 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_86 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_87 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_88 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_89 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_90 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_91 = new cjs.Graphics().p("EgbZApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_92 = new cjs.Graphics().p("Egc2ApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_93 = new cjs.Graphics().p("EgeMApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_94 = new cjs.Graphics().p("EgfaApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_95 = new cjs.Graphics().p("EgghApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_96 = new cjs.Graphics().p("EghgApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_97 = new cjs.Graphics().p("EgiYApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_98 = new cjs.Graphics().p("EgjIApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_99 = new cjs.Graphics().p("EgjxApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_100 = new cjs.Graphics().p("EgkTApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_101 = new cjs.Graphics().p("EgktApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_102 = new cjs.Graphics().p("EglAApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_103 = new cjs.Graphics().p("EglLApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_104 = new cjs.Graphics().p("EglPApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_105 = new cjs.Graphics().p("EglPApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_106 = new cjs.Graphics().p("EgjqApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_107 = new cjs.Graphics().p("EgiNApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_108 = new cjs.Graphics().p("Egg3ApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_109 = new cjs.Graphics().p("EgfpApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_110 = new cjs.Graphics().p("EgeiApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_111 = new cjs.Graphics().p("EgdjApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_112 = new cjs.Graphics().p("EgcrApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_113 = new cjs.Graphics().p("Egb7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_114 = new cjs.Graphics().p("EgbSApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_115 = new cjs.Graphics().p("EgawApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_116 = new cjs.Graphics().p("EgaWApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_117 = new cjs.Graphics().p("EgaDApLMAAAhSVMAz2AAAMAAABSVg");
	var mask_graphics_118 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");
	var mask_graphics_119 = new cjs.Graphics().p("EgZ7ApLMAAAhSVMAz3AAAMAAABSVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-164.8,y:1.5}).wait(1).to({graphics:mask_graphics_1,x:-144.8,y:1.5}).wait(1).to({graphics:mask_graphics_2,x:-126.2,y:1.5}).wait(1).to({graphics:mask_graphics_3,x:-109.2,y:1.5}).wait(1).to({graphics:mask_graphics_4,x:-93.6,y:1.5}).wait(1).to({graphics:mask_graphics_5,x:-79.5,y:1.5}).wait(1).to({graphics:mask_graphics_6,x:-66.9,y:1.5}).wait(1).to({graphics:mask_graphics_7,x:-55.8,y:1.5}).wait(1).to({graphics:mask_graphics_8,x:-46.1,y:1.5}).wait(1).to({graphics:mask_graphics_9,x:-38,y:1.5}).wait(1).to({graphics:mask_graphics_10,x:-31.3,y:1.5}).wait(1).to({graphics:mask_graphics_11,x:-26.1,y:1.5}).wait(1).to({graphics:mask_graphics_12,x:-22.4,y:1.5}).wait(1).to({graphics:mask_graphics_13,x:-20.2,y:1.5}).wait(1).to({graphics:mask_graphics_14,x:-19.4,y:1.5}).wait(1).to({graphics:mask_graphics_15,x:-19.4,y:1.5}).wait(1).to({graphics:mask_graphics_16,x:-39.4,y:1.5}).wait(1).to({graphics:mask_graphics_17,x:-58,y:1.5}).wait(1).to({graphics:mask_graphics_18,x:-75,y:1.5}).wait(1).to({graphics:mask_graphics_19,x:-90.6,y:1.5}).wait(1).to({graphics:mask_graphics_20,x:-104.7,y:1.5}).wait(1).to({graphics:mask_graphics_21,x:-117.3,y:1.5}).wait(1).to({graphics:mask_graphics_22,x:-128.4,y:1.5}).wait(1).to({graphics:mask_graphics_23,x:-138.1,y:1.5}).wait(1).to({graphics:mask_graphics_24,x:-146.2,y:1.5}).wait(1).to({graphics:mask_graphics_25,x:-152.9,y:1.5}).wait(1).to({graphics:mask_graphics_26,x:-158.1,y:1.5}).wait(1).to({graphics:mask_graphics_27,x:-161.8,y:1.5}).wait(1).to({graphics:mask_graphics_28,x:-164,y:1.5}).wait(1).to({graphics:mask_graphics_29,x:-164.8,y:1.5}).wait(1).to({graphics:mask_graphics_30,x:-164.8,y:1.5}).wait(1).to({graphics:mask_graphics_31,x:-175.5,y:1.5}).wait(1).to({graphics:mask_graphics_32,x:-184.8,y:1.5}).wait(1).to({graphics:mask_graphics_33,x:-193.3,y:1.5}).wait(1).to({graphics:mask_graphics_34,x:-201.2,y:1.5}).wait(1).to({graphics:mask_graphics_35,x:-208.2,y:1.5}).wait(1).to({graphics:mask_graphics_36,x:-214.6,y:1.5}).wait(1).to({graphics:mask_graphics_37,x:-220.1,y:1.5}).wait(1).to({graphics:mask_graphics_38,x:-225,y:1.5}).wait(1).to({graphics:mask_graphics_39,x:-229.1,y:1.5}).wait(1).to({graphics:mask_graphics_40,x:-232.4,y:1.5}).wait(1).to({graphics:mask_graphics_41,x:-235,y:1.5}).wait(1).to({graphics:mask_graphics_42,x:-236.9,y:1.5}).wait(1).to({graphics:mask_graphics_43,x:-238,y:1.5}).wait(1).to({graphics:mask_graphics_44,x:-238.4,y:1.5}).wait(1).to({graphics:mask_graphics_45,x:-238.4,y:1.5}).wait(1).to({graphics:mask_graphics_46,x:-228.3,y:1.5}).wait(1).to({graphics:mask_graphics_47,x:-219,y:1.5}).wait(1).to({graphics:mask_graphics_48,x:-210.5,y:1.5}).wait(1).to({graphics:mask_graphics_49,x:-202.6,y:1.5}).wait(1).to({graphics:mask_graphics_50,x:-195.6,y:1.5}).wait(1).to({graphics:mask_graphics_51,x:-189.2,y:1.5}).wait(1).to({graphics:mask_graphics_52,x:-183.6,y:1.5}).wait(1).to({graphics:mask_graphics_53,x:-178.8,y:1.5}).wait(1).to({graphics:mask_graphics_54,x:-174.7,y:1.5}).wait(1).to({graphics:mask_graphics_55,x:-171.4,y:1.5}).wait(1).to({graphics:mask_graphics_56,x:-168.8,y:1.5}).wait(1).to({graphics:mask_graphics_57,x:-166.9,y:1.5}).wait(1).to({graphics:mask_graphics_58,x:-165.5,y:1.5}).wait(1).to({graphics:mask_graphics_59,x:-164.8,y:1.5}).wait(1).to({graphics:mask_graphics_60,x:-164.8,y:1.5}).wait(1).to({graphics:mask_graphics_61,x:-144.8,y:1.5}).wait(1).to({graphics:mask_graphics_62,x:-126.2,y:1.5}).wait(1).to({graphics:mask_graphics_63,x:-109.2,y:1.5}).wait(1).to({graphics:mask_graphics_64,x:-93.6,y:1.5}).wait(1).to({graphics:mask_graphics_65,x:-79.5,y:1.5}).wait(1).to({graphics:mask_graphics_66,x:-66.9,y:1.5}).wait(1).to({graphics:mask_graphics_67,x:-55.8,y:1.5}).wait(1).to({graphics:mask_graphics_68,x:-46.1,y:1.5}).wait(1).to({graphics:mask_graphics_69,x:-38,y:1.5}).wait(1).to({graphics:mask_graphics_70,x:-31.3,y:1.5}).wait(1).to({graphics:mask_graphics_71,x:-26.1,y:1.5}).wait(1).to({graphics:mask_graphics_72,x:-22.4,y:1.5}).wait(1).to({graphics:mask_graphics_73,x:-20.2,y:1.5}).wait(1).to({graphics:mask_graphics_74,x:-19.4,y:1.5}).wait(1).to({graphics:mask_graphics_75,x:-19.4,y:1.5}).wait(1).to({graphics:mask_graphics_76,x:-39.4,y:1.5}).wait(1).to({graphics:mask_graphics_77,x:-58,y:1.5}).wait(1).to({graphics:mask_graphics_78,x:-75,y:1.5}).wait(1).to({graphics:mask_graphics_79,x:-90.6,y:1.5}).wait(1).to({graphics:mask_graphics_80,x:-104.7,y:1.5}).wait(1).to({graphics:mask_graphics_81,x:-117.3,y:1.5}).wait(1).to({graphics:mask_graphics_82,x:-128.4,y:1.5}).wait(1).to({graphics:mask_graphics_83,x:-138.1,y:1.5}).wait(1).to({graphics:mask_graphics_84,x:-146.2,y:1.5}).wait(1).to({graphics:mask_graphics_85,x:-152.9,y:1.5}).wait(1).to({graphics:mask_graphics_86,x:-158.1,y:1.5}).wait(1).to({graphics:mask_graphics_87,x:-161.8,y:1.5}).wait(1).to({graphics:mask_graphics_88,x:-164,y:1.5}).wait(1).to({graphics:mask_graphics_89,x:-164.8,y:1.5}).wait(1).to({graphics:mask_graphics_90,x:-164.8,y:1.5}).wait(1).to({graphics:mask_graphics_91,x:-175.5,y:1.5}).wait(1).to({graphics:mask_graphics_92,x:-184.8,y:1.5}).wait(1).to({graphics:mask_graphics_93,x:-193.3,y:1.5}).wait(1).to({graphics:mask_graphics_94,x:-201.2,y:1.5}).wait(1).to({graphics:mask_graphics_95,x:-208.2,y:1.5}).wait(1).to({graphics:mask_graphics_96,x:-214.6,y:1.5}).wait(1).to({graphics:mask_graphics_97,x:-220.1,y:1.5}).wait(1).to({graphics:mask_graphics_98,x:-225,y:1.5}).wait(1).to({graphics:mask_graphics_99,x:-229.1,y:1.5}).wait(1).to({graphics:mask_graphics_100,x:-232.4,y:1.5}).wait(1).to({graphics:mask_graphics_101,x:-235,y:1.5}).wait(1).to({graphics:mask_graphics_102,x:-236.9,y:1.5}).wait(1).to({graphics:mask_graphics_103,x:-238,y:1.5}).wait(1).to({graphics:mask_graphics_104,x:-238.4,y:1.5}).wait(1).to({graphics:mask_graphics_105,x:-238.4,y:1.5}).wait(1).to({graphics:mask_graphics_106,x:-228.3,y:1.5}).wait(1).to({graphics:mask_graphics_107,x:-219,y:1.5}).wait(1).to({graphics:mask_graphics_108,x:-210.5,y:1.5}).wait(1).to({graphics:mask_graphics_109,x:-202.6,y:1.5}).wait(1).to({graphics:mask_graphics_110,x:-195.6,y:1.5}).wait(1).to({graphics:mask_graphics_111,x:-189.2,y:1.5}).wait(1).to({graphics:mask_graphics_112,x:-183.6,y:1.5}).wait(1).to({graphics:mask_graphics_113,x:-178.8,y:1.5}).wait(1).to({graphics:mask_graphics_114,x:-174.7,y:1.5}).wait(1).to({graphics:mask_graphics_115,x:-171.4,y:1.5}).wait(1).to({graphics:mask_graphics_116,x:-168.8,y:1.5}).wait(1).to({graphics:mask_graphics_117,x:-166.9,y:1.5}).wait(1).to({graphics:mask_graphics_118,x:-165.5,y:1.5}).wait(1).to({graphics:mask_graphics_119,x:-164.8,y:1.5}).wait(1));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(-11.7,65.9,1.109,1.109,0,0,180);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Слой 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgcSAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Ega1AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgZgAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgYSAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgXMAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgWMAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgVVAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgUkAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgT8AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgTaAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgTAAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgSuAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgSiAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgSfAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgSfAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgUDAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgVgAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgW1AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgYDAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgZKAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgaJAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgbBAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgbxAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgcaAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Egc7AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgdVAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgdoAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgdzAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_51 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_52 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Egd6AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgcSAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Ega1AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgZgAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgYSAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgXMAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgWMAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgVVAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgUkAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgT8AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgTaAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgTAAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgSuAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgSiAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgSfAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgSfAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EgUDAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EgVgAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EgW1AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EgYDAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EgZKAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EgaJAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EgbBAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgbxAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EgcaAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Egc7AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgdVAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgdoAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgdzAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_103 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_107 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_109 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_112 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_113 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_114 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_116 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Egd6AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_119 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_1,x:202.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_2,x:211.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_3,x:220.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_4,x:228.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_5,x:235.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_6,x:241.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_7,x:247,y:-7.5}).wait(1).to({graphics:mask_1_graphics_8,x:251.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_9,x:255.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_10,x:259.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_11,x:261.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_12,x:263.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_13,x:264.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_14,x:265.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_15,x:265.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_16,x:255.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_17,x:245.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_18,x:237.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_19,x:229.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_20,x:222.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_21,x:216.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_22,x:210.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_23,x:205.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_24,x:201.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_25,x:198.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_26,x:195.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_27,x:193.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_28,x:192.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_29,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_30,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_31,x:173,y:-7.5}).wait(1).to({graphics:mask_1_graphics_32,x:154.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_33,x:137.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_34,x:121.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_35,x:107.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_36,x:94.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_37,x:83.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_38,x:73.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_39,x:65.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_40,x:59,y:-7.5}).wait(1).to({graphics:mask_1_graphics_41,x:53.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_42,x:50.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_43,x:47.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_44,x:47.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_45,x:47.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_46,x:67.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_47,x:85.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_48,x:102.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_49,x:118.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_50,x:132.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_51,x:145.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_52,x:156.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_53,x:166.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_54,x:174.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_55,x:181.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_56,x:186.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_57,x:190.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_58,x:192.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_59,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_60,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_61,x:202.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_62,x:211.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_63,x:220.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_64,x:228.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_65,x:235.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_66,x:241.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_67,x:247,y:-7.5}).wait(1).to({graphics:mask_1_graphics_68,x:251.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_69,x:255.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_70,x:259.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_71,x:261.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_72,x:263.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_73,x:264.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_74,x:265.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_75,x:265.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_76,x:255.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_77,x:245.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_78,x:237.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_79,x:229.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_80,x:222.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_81,x:216.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_82,x:210.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_83,x:205.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_84,x:201.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_85,x:198.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_86,x:195.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_87,x:193.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_88,x:192.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_89,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_90,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_91,x:173,y:-7.5}).wait(1).to({graphics:mask_1_graphics_92,x:154.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_93,x:137.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_94,x:121.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_95,x:107.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_96,x:94.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_97,x:83.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_98,x:73.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_99,x:65.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_100,x:59,y:-7.5}).wait(1).to({graphics:mask_1_graphics_101,x:53.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_102,x:50.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_103,x:47.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_104,x:47.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_105,x:47.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_106,x:67.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_107,x:85.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_108,x:102.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_109,x:118.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_110,x:132.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_111,x:145.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_112,x:156.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_113,x:166.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_114,x:174.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_115,x:181.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_116,x:186.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_117,x:190.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_118,x:192.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_119,x:192.5,y:-7.5}).wait(1));

	// Символ 3
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(1.8,32,1.445,1.445);

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.8,-249.9,513.8,608);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(-0.1,0.1,1,1,0,0,0,-19.7,-1.8);

	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-29.7,212,65);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.main = new lib.Символ9();
	this.main.setTransform(65.6,-69.6);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.5,-349.6,725.2,637.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.setTransform(0,-1.7,0.922,0.922);
	this.instance.alpha = 0.172;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-29.7,212,65);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(242.1,-422.7,0.802,0.802);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.7,-447.4,175,56);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0YleMAoxAAAIAAJeMgoxABfg");
	mask.setTransform(49.4,-160.2);

	// Слой 3
	this.kot = new lib.Символ42();
	this.kot.setTransform(45.5,-146.6,0.53,0.53,0,0,0,178.8,-347.4);

	this.kot.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.kot).to({y:-156.6},3).to({y:83.1},11).wait(1).to({y:-156.6},11).to({y:-146.6},3).wait(1));

	// Слой 9
	this.instance = new lib.Символ27();
	this.instance.setTransform(3,259.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-213},11).to({x:-210.5},3).wait(1).to({x:-213},3).to({x:3},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.4,-187.6,312.4,62.6);


// stage content:



(lib._300x250_pokormi_07072016_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.addEventListener("mouseover", fl_MouseOverHandler_5);
		function fl_MouseOverHandler_5()
		{
		    _this.btn.gotoAndPlay(1);
		    _this.main1.main.gotoAndStop(45);
		
		}
		
		
		stage.canvas.addEventListener("mouseout", fl_MouseOutHandler_22);
		function fl_MouseOutHandler_22()
		{
		    _this.btn.gotoAndPlay(16);
			_this.main1.main.gotoAndPlay(46);
		
		}
		
		
		
		
		
		
		
		
		
		setTimeout(function() {
		        _this.main1.main.gotoAndStop(105);
		         _this.btn.gotoAndStop(15);
				_this.main1.main.text1.gotoAndStop(0);
		         stage.canvas.removeEventListener("mouseover", fl_MouseOverHandler_5);
		         stage.canvas.removeEventListener("mouseout", fl_MouseOutHandler_22);
		   }, 30000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 16
	this.btn = new lib.Символ31();
	this.btn.setTransform(172.6,199.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 14
	this.doo = new lib.Символ13();
	this.doo.setTransform(-176.8,458.8,0.375,3.058);
	new cjs.ButtonHelper(this.doo, 0, 1, 2, false, new lib.Символ13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.doo).wait(1));

	// Слой 10
	this.main1 = new lib.Символ36();
	this.main1.setTransform(164.3,264.5,1,1,0,0,0,81.6,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.main1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,64,743.1,638.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
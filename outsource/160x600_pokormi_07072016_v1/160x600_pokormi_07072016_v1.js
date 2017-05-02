(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/eee1.png?1467964692632", id:"eee1"},
		{src:"images/fasdfasdf.jpg?1467964692632", id:"fasdfasdf"},
		{src:"images/qqq.png?1467964692632", id:"qqq"},
		{src:"images/rhdhjhd.png?1467964692632", id:"rhdhjhd"},
		{src:"images/rrr1.png?1467964692632", id:"rrr1"}
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
	this.instance.setTransform(427.1,-240,0.551,0.551,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325,-240,752.1,422.9);


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
	this.instance.setTransform(-1.1,117.9,1,1,0,0,0,0,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-22,regY:-117,rotation:-4.2,x:-34.7,y:-40.7},0).wait(1).to({rotation:-7.8,x:-44.6,y:-39.4},0).wait(1).to({rotation:-10.9,x:-52.7,y:-37.8},0).wait(1).to({rotation:-13.3,x:-59.2,y:-36.3},0).wait(1).to({rotation:-15.3,x:-64.3,y:-34.8},0).wait(1).to({rotation:-17,x:-68.7,y:-33.4},0).wait(1).to({rotation:-18.5,x:-72.4,y:-32},0).wait(1).to({rotation:-19.9,x:-75.9,y:-30.7},0).wait(1).to({rotation:-21.1,x:-78.9,y:-29.5},0).wait(1).to({rotation:-22.2,x:-81.5,y:-28.4},0).wait(1).to({rotation:-23,x:-83.7,y:-27.4},0).wait(1).to({rotation:-23.8,x:-85.4,y:-26.6},0).wait(1).to({rotation:-24.4,x:-86.8,y:-25.9},0).wait(1).to({rotation:-24.9,x:-88,y:-25.3},0).wait(1).to({rotation:-25.3,x:-89,y:-24.8},0).wait(1).to({rotation:-25.7,x:-89.9,y:-24.3},0).wait(1).to({rotation:-26,x:-90.7,y:-23.8},0).wait(1).to({rotation:-26.4,x:-91.5,y:-23.4},0).wait(1).to({regX:0.1,regY:42.2,rotation:-26.7,x:-1.1,y:109.3},0).wait(1).to({regX:-22,regY:-117,rotation:-22.7,x:-82.9,y:-27.8},0).wait(1).to({rotation:-19.2,x:-74.3,y:-31.4},0).wait(1).to({rotation:-16.2,x:-66.8,y:-34},0).wait(1).to({rotation:-13.8,x:-60.5,y:-35.9},0).wait(1).to({rotation:-11.8,x:-55.4,y:-37.2},0).wait(1).to({rotation:-10.2,x:-51,y:-38.2},0).wait(1).to({rotation:-8.7,x:-47,y:-38.9},0).wait(1).to({rotation:-7.4,x:-43.4,y:-39.6},0).wait(1).to({rotation:-6.1,x:-39.9,y:-40.1},0).wait(1).to({rotation:-5,x:-37,y:-40.4},0).wait(1).to({rotation:-4.1,x:-34.5,y:-40.7},0).wait(1).to({rotation:-3.3,x:-32.4,y:-40.8},0).wait(1).to({rotation:-2.7,x:-30.7,y:-41},0).wait(1).to({rotation:-2.2,x:-29.2,y:-41.1},0).wait(1).to({rotation:-1.7,x:-27.9,y:-41.2},0).wait(1).to({rotation:-1.3,x:-26.8},0).wait(1).to({rotation:-1,x:-25.8,y:-41.3},0).wait(1).to({rotation:-0.6,x:-24.9},0).wait(1).to({rotation:-0.3,x:-24},0).wait(1).to({regX:0,regY:42.2,rotation:0,x:-1.1,y:117.9},0).wait(1).to({regX:-22,regY:-117,rotation:4.5,x:-10.6,y:-42.2},0).wait(1).to({rotation:8.4,x:0.4},0).wait(1).to({rotation:11.7,x:9.7,y:-41.5},0).wait(1).to({rotation:14.5,x:17.3,y:-40.6},0).wait(1).to({rotation:16.7,x:23.5,y:-39.5},0).wait(1).to({rotation:18.6,x:28.7,y:-38.5},0).wait(1).to({rotation:20.2,x:33.2,y:-37.5},0).wait(1).to({rotation:21.7,x:37.3,y:-36.4},0).wait(1).to({rotation:23.1,x:41.1,y:-35.3},0).wait(1).to({rotation:24.3,x:44.4,y:-34.2},0).wait(1).to({rotation:25.4,x:47.2,y:-33.3},0).wait(1).to({rotation:26.2,x:49.5,y:-32.5},0).wait(1).to({rotation:27,x:51.4,y:-31.8},0).wait(1).to({rotation:27.6,x:53,y:-31.2},0).wait(1).to({rotation:28.1,x:54.3,y:-30.6},0).wait(1).to({rotation:28.5,x:55.5,y:-30.1},0).wait(1).to({rotation:28.9,x:56.6,y:-29.7},0).wait(1).to({rotation:29.3,x:57.5,y:-29.3},0).wait(1).to({rotation:29.7,x:58.5,y:-28.9},0).wait(1).to({regX:0.1,regY:42.2,rotation:30,x:-1.1,y:120.4},0).wait(1).to({regX:-22,regY:-117,rotation:25.5,x:47.5,y:-33.2},0).wait(1).to({rotation:21.6,x:36.9,y:-36.5},0).wait(1).to({rotation:18.3,x:27.8,y:-38.7},0).wait(1).to({rotation:15.5,x:20.3,y:-40.1},0).wait(1).to({rotation:13.3,x:14.1,y:-41},0).wait(1).to({rotation:11.4,x:8.8,y:-41.6},0).wait(1).to({rotation:9.8,x:4.2,y:-42},0).wait(1).to({rotation:8.3,x:-0.1,y:-42.2},0).wait(1).to({rotation:6.9,x:-4,y:-42.3},0).wait(1).to({rotation:5.7,x:-7.4},0).wait(1).to({rotation:4.6,x:-10.3,y:-42.2},0).wait(1).to({rotation:3.8,x:-12.7,y:-42.1},0).wait(1).to({rotation:3,x:-14.7,y:-42},0).wait(1).to({rotation:2.4,x:-16.4},0).wait(1).to({rotation:1.9,x:-17.8,y:-41.9},0).wait(1).to({rotation:1.5,x:-19,y:-41.7},0).wait(1).to({rotation:1.1,x:-20.2},0).wait(1).to({rotation:0.7,x:-21.2,y:-41.5},0).wait(1).to({rotation:0.3,x:-22.2},0).wait(1).to({regX:0,regY:42.2,rotation:0,x:-1.1,y:117.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-96.4,91.2,110.3);


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
	this.instance.setTransform(-0.1,-92.2,1.118,1.118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0.7,-91,1.118,1.118);
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-104,-208,208,472);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-370.3,237,579.3);


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
	this.instance.setTransform(52.2,-115.8,0.484,0.484,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(-60.1,-117.9,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397,-366.7,779.6,438.3);


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
	this.instance.setTransform(-18.9,18.8,1.856,1.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.fasdfasdf();
	this.instance_1.setTransform(-102.2,-242.6,0.807,0.807);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.2,-242.6,193.8,341.1);


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
	this.text1.setTransform(-1.6,-354.4);

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(120));

	// Символ 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(0,-327);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(0.1,139,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Символ 8
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:77.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14).wait(1).to({x:-74.2},14,cjs.Ease.get(1)).wait(1).to({x:1.1},14).wait(1).to({x:1.8},0).to({x:77.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:-74.2},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_1 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_2 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_3 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_4 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_5 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_6 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_7 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_8 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_9 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_10 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_11 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_12 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_13 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_14 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_15 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_16 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_17 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_18 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_19 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_20 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_21 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_22 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_23 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_24 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_25 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_26 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_27 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_28 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_29 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_30 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_31 = new cjs.Graphics().p("EgXhApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_32 = new cjs.Graphics().p("EgYRApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_33 = new cjs.Graphics().p("EgY+ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_34 = new cjs.Graphics().p("EgZnApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_35 = new cjs.Graphics().p("EgaLApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_36 = new cjs.Graphics().p("EgasApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_37 = new cjs.Graphics().p("EgbJApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_38 = new cjs.Graphics().p("EgbjApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_39 = new cjs.Graphics().p("Egb4ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_40 = new cjs.Graphics().p("EgcJApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_41 = new cjs.Graphics().p("EgcXApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_42 = new cjs.Graphics().p("EgchApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_43 = new cjs.Graphics().p("EgcnApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_44 = new cjs.Graphics().p("EgcpApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_45 = new cjs.Graphics().p("EgcpApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_46 = new cjs.Graphics().p("EgcOApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_47 = new cjs.Graphics().p("EgbzApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_48 = new cjs.Graphics().p("EgbYApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_49 = new cjs.Graphics().p("Ega9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_50 = new cjs.Graphics().p("EgaiApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_51 = new cjs.Graphics().p("EgaHApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_52 = new cjs.Graphics().p("EgZsApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_53 = new cjs.Graphics().p("EgZRApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_54 = new cjs.Graphics().p("EgY2ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_55 = new cjs.Graphics().p("EgYbApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_56 = new cjs.Graphics().p("EgYAApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_57 = new cjs.Graphics().p("EgXmApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_58 = new cjs.Graphics().p("EgXLApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_59 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_60 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_61 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_62 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_63 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_64 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_65 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_66 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_67 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_68 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_69 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_70 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_71 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_72 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_73 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_74 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_75 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_76 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_77 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_78 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_79 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_80 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_81 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_82 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_83 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_84 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_85 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_86 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_87 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_88 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_89 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_90 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_91 = new cjs.Graphics().p("EgXhApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_92 = new cjs.Graphics().p("EgYRApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_93 = new cjs.Graphics().p("EgY+ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_94 = new cjs.Graphics().p("EgZnApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_95 = new cjs.Graphics().p("EgaLApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_96 = new cjs.Graphics().p("EgasApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_97 = new cjs.Graphics().p("EgbJApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_98 = new cjs.Graphics().p("EgbjApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_99 = new cjs.Graphics().p("Egb4ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_100 = new cjs.Graphics().p("EgcJApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_101 = new cjs.Graphics().p("EgcXApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_102 = new cjs.Graphics().p("EgchApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_103 = new cjs.Graphics().p("EgcnApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_104 = new cjs.Graphics().p("EgcpApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_105 = new cjs.Graphics().p("EgcpApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_106 = new cjs.Graphics().p("Egb0ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_107 = new cjs.Graphics().p("EgbEApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_108 = new cjs.Graphics().p("EgaXApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_109 = new cjs.Graphics().p("EgZuApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_110 = new cjs.Graphics().p("EgZKApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_111 = new cjs.Graphics().p("EgYpApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_112 = new cjs.Graphics().p("EgYLApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_113 = new cjs.Graphics().p("EgXyApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_114 = new cjs.Graphics().p("EgXdApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_115 = new cjs.Graphics().p("EgXMApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_116 = new cjs.Graphics().p("EgW+ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_117 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_118 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_119 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-145.8,y:-98.5}).wait(1).to({graphics:mask_graphics_1,x:-134.6,y:-98.5}).wait(1).to({graphics:mask_graphics_2,x:-124.2,y:-98.5}).wait(1).to({graphics:mask_graphics_3,x:-114.6,y:-98.5}).wait(1).to({graphics:mask_graphics_4,x:-105.9,y:-98.5}).wait(1).to({graphics:mask_graphics_5,x:-98,y:-98.5}).wait(1).to({graphics:mask_graphics_6,x:-91,y:-98.5}).wait(1).to({graphics:mask_graphics_7,x:-84.8,y:-98.5}).wait(1).to({graphics:mask_graphics_8,x:-79.4,y:-98.5}).wait(1).to({graphics:mask_graphics_9,x:-74.8,y:-98.5}).wait(1).to({graphics:mask_graphics_10,x:-71.1,y:-98.5}).wait(1).to({graphics:mask_graphics_11,x:-68.2,y:-98.5}).wait(1).to({graphics:mask_graphics_12,x:-66.1,y:-98.5}).wait(1).to({graphics:mask_graphics_13,x:-64.8,y:-98.5}).wait(1).to({graphics:mask_graphics_14,x:-64.4,y:-98.5}).wait(1).to({graphics:mask_graphics_15,x:-66.4,y:-98.5}).wait(1).to({graphics:mask_graphics_16,x:-71.9,y:-98.5}).wait(1).to({graphics:mask_graphics_17,x:-77.5,y:-98.5}).wait(1).to({graphics:mask_graphics_18,x:-83,y:-98.5}).wait(1).to({graphics:mask_graphics_19,x:-88.5,y:-98.5}).wait(1).to({graphics:mask_graphics_20,x:-94,y:-98.5}).wait(1).to({graphics:mask_graphics_21,x:-99.6,y:-98.5}).wait(1).to({graphics:mask_graphics_22,x:-105.1,y:-98.5}).wait(1).to({graphics:mask_graphics_23,x:-110.6,y:-98.5}).wait(1).to({graphics:mask_graphics_24,x:-116.1,y:-98.5}).wait(1).to({graphics:mask_graphics_25,x:-121.7,y:-98.5}).wait(1).to({graphics:mask_graphics_26,x:-127.2,y:-98.5}).wait(1).to({graphics:mask_graphics_27,x:-132.7,y:-98.5}).wait(1).to({graphics:mask_graphics_28,x:-138.2,y:-98.5}).wait(1).to({graphics:mask_graphics_29,x:-143.8,y:-98.5}).wait(1).to({graphics:mask_graphics_30,x:-143.8,y:-98.5}).wait(1).to({graphics:mask_graphics_31,x:-150.6,y:-98.5}).wait(1).to({graphics:mask_graphics_32,x:-155.5,y:-98.5}).wait(1).to({graphics:mask_graphics_33,x:-159.9,y:-98.5}).wait(1).to({graphics:mask_graphics_34,x:-164,y:-98.5}).wait(1).to({graphics:mask_graphics_35,x:-167.7,y:-98.5}).wait(1).to({graphics:mask_graphics_36,x:-171,y:-98.5}).wait(1).to({graphics:mask_graphics_37,x:-173.9,y:-98.5}).wait(1).to({graphics:mask_graphics_38,x:-176.4,y:-98.5}).wait(1).to({graphics:mask_graphics_39,x:-178.6,y:-98.5}).wait(1).to({graphics:mask_graphics_40,x:-180.3,y:-98.5}).wait(1).to({graphics:mask_graphics_41,x:-181.7,y:-98.5}).wait(1).to({graphics:mask_graphics_42,x:-182.6,y:-98.5}).wait(1).to({graphics:mask_graphics_43,x:-183.2,y:-98.5}).wait(1).to({graphics:mask_graphics_44,x:-183.4,y:-98.5}).wait(1).to({graphics:mask_graphics_45,x:-183.4,y:-98.5}).wait(1).to({graphics:mask_graphics_46,x:-180.7,y:-98.5}).wait(1).to({graphics:mask_graphics_47,x:-178,y:-98.5}).wait(1).to({graphics:mask_graphics_48,x:-175.3,y:-98.5}).wait(1).to({graphics:mask_graphics_49,x:-172.6,y:-98.5}).wait(1).to({graphics:mask_graphics_50,x:-169.9,y:-98.5}).wait(1).to({graphics:mask_graphics_51,x:-167.3,y:-98.5}).wait(1).to({graphics:mask_graphics_52,x:-164.6,y:-98.5}).wait(1).to({graphics:mask_graphics_53,x:-161.9,y:-98.5}).wait(1).to({graphics:mask_graphics_54,x:-159.2,y:-98.5}).wait(1).to({graphics:mask_graphics_55,x:-156.5,y:-98.5}).wait(1).to({graphics:mask_graphics_56,x:-153.8,y:-98.5}).wait(1).to({graphics:mask_graphics_57,x:-151.1,y:-98.5}).wait(1).to({graphics:mask_graphics_58,x:-148.4,y:-98.5}).wait(1).to({graphics:mask_graphics_59,x:-144.4,y:-98.5}).wait(1).to({graphics:mask_graphics_60,x:-142.8,y:-98.5}).wait(1).to({graphics:mask_graphics_61,x:-132.3,y:-98.5}).wait(1).to({graphics:mask_graphics_62,x:-122.5,y:-98.5}).wait(1).to({graphics:mask_graphics_63,x:-113.6,y:-98.5}).wait(1).to({graphics:mask_graphics_64,x:-105.4,y:-98.5}).wait(1).to({graphics:mask_graphics_65,x:-98,y:-98.5}).wait(1).to({graphics:mask_graphics_66,x:-91.4,y:-98.5}).wait(1).to({graphics:mask_graphics_67,x:-85.5,y:-98.5}).wait(1).to({graphics:mask_graphics_68,x:-80.4,y:-98.5}).wait(1).to({graphics:mask_graphics_69,x:-76.2,y:-98.5}).wait(1).to({graphics:mask_graphics_70,x:-72.7,y:-98.5}).wait(1).to({graphics:mask_graphics_71,x:-69.9,y:-98.5}).wait(1).to({graphics:mask_graphics_72,x:-68,y:-98.5}).wait(1).to({graphics:mask_graphics_73,x:-66.8,y:-98.5}).wait(1).to({graphics:mask_graphics_74,x:-66.4,y:-98.5}).wait(1).to({graphics:mask_graphics_75,x:-67.4,y:-98.5}).wait(1).to({graphics:mask_graphics_76,x:-77.9,y:-98.5}).wait(1).to({graphics:mask_graphics_77,x:-87.7,y:-98.5}).wait(1).to({graphics:mask_graphics_78,x:-96.6,y:-98.5}).wait(1).to({graphics:mask_graphics_79,x:-104.8,y:-98.5}).wait(1).to({graphics:mask_graphics_80,x:-112.2,y:-98.5}).wait(1).to({graphics:mask_graphics_81,x:-118.8,y:-98.5}).wait(1).to({graphics:mask_graphics_82,x:-124.7,y:-98.5}).wait(1).to({graphics:mask_graphics_83,x:-129.8,y:-98.5}).wait(1).to({graphics:mask_graphics_84,x:-134,y:-98.5}).wait(1).to({graphics:mask_graphics_85,x:-137.5,y:-98.5}).wait(1).to({graphics:mask_graphics_86,x:-140.3,y:-98.5}).wait(1).to({graphics:mask_graphics_87,x:-142.2,y:-98.5}).wait(1).to({graphics:mask_graphics_88,x:-143.4,y:-98.5}).wait(1).to({graphics:mask_graphics_89,x:-143.8,y:-98.5}).wait(1).to({graphics:mask_graphics_90,x:-143.8,y:-98.5}).wait(1).to({graphics:mask_graphics_91,x:-150.6,y:-98.5}).wait(1).to({graphics:mask_graphics_92,x:-155.5,y:-98.5}).wait(1).to({graphics:mask_graphics_93,x:-159.9,y:-98.5}).wait(1).to({graphics:mask_graphics_94,x:-164,y:-98.5}).wait(1).to({graphics:mask_graphics_95,x:-167.7,y:-98.5}).wait(1).to({graphics:mask_graphics_96,x:-171,y:-98.5}).wait(1).to({graphics:mask_graphics_97,x:-173.9,y:-98.5}).wait(1).to({graphics:mask_graphics_98,x:-176.4,y:-98.5}).wait(1).to({graphics:mask_graphics_99,x:-178.6,y:-98.5}).wait(1).to({graphics:mask_graphics_100,x:-180.3,y:-98.5}).wait(1).to({graphics:mask_graphics_101,x:-181.7,y:-98.5}).wait(1).to({graphics:mask_graphics_102,x:-182.6,y:-98.5}).wait(1).to({graphics:mask_graphics_103,x:-183.2,y:-98.5}).wait(1).to({graphics:mask_graphics_104,x:-183.4,y:-98.5}).wait(1).to({graphics:mask_graphics_105,x:-183.4,y:-98.5}).wait(1).to({graphics:mask_graphics_106,x:-178.2,y:-98.5}).wait(1).to({graphics:mask_graphics_107,x:-173.3,y:-98.5}).wait(1).to({graphics:mask_graphics_108,x:-168.9,y:-98.5}).wait(1).to({graphics:mask_graphics_109,x:-164.8,y:-98.5}).wait(1).to({graphics:mask_graphics_110,x:-161.1,y:-98.5}).wait(1).to({graphics:mask_graphics_111,x:-157.8,y:-98.5}).wait(1).to({graphics:mask_graphics_112,x:-154.9,y:-98.5}).wait(1).to({graphics:mask_graphics_113,x:-152.4,y:-98.5}).wait(1).to({graphics:mask_graphics_114,x:-150.2,y:-98.5}).wait(1).to({graphics:mask_graphics_115,x:-148.5,y:-98.5}).wait(1).to({graphics:mask_graphics_116,x:-147.1,y:-98.5}).wait(1).to({graphics:mask_graphics_117,x:-145.3,y:-98.5}).wait(1).to({graphics:mask_graphics_118,x:-144.2,y:-98.5}).wait(1).to({graphics:mask_graphics_119,x:-143.8,y:-98.5}).wait(1));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(-11.7,65.9,1.109,1.109,0,0,180);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Слой 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgdtAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_1 = new cjs.Graphics().p("Egc4AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgcHAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgbaAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgaxAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgaMAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgZrAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgZNAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgY0AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgYfAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgYNAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgX/AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgX2AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgXwAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgXuAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgXzAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgYnAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgZXAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgaDAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgasAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgbQAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgbxAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgcOAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgcnAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Egc8AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EgdOAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgdbAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgdlAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgdrAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgdtAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgdtAqlMAAAhVJMA77AAAMAAABVJg");
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
	var mask_1_graphics_58 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Egd9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgdyAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Egc9AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgcMAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgbfAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ega2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgaRAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgZwAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgZSAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgY5AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgYkAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgYSAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgYEAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgX7AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgX1AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgXzAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgXuAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EgYiAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EgZTAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EgaAAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EgapAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EgbOAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EgbwAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EgcNAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgcmAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Egc8AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EgdNAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgdbAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgdlAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgdrAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EgdtAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EgdtAqlMAAAhVJMA77AAAMAAABVJg");
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
	var mask_1_graphics_117 = new cjs.Graphics().p("Egd0AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgduAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgdtAqlMAAAhVJMA77AAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:193.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_1,x:198.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_2,x:203.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_3,x:208.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_4,x:212.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_5,x:215.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_6,x:219.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_7,x:222.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_8,x:224.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_9,x:226.8,y:-114.5}).wait(1).to({graphics:mask_1_graphics_10,x:228.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_11,x:230,y:-114.5}).wait(1).to({graphics:mask_1_graphics_12,x:230.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_13,x:231.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_14,x:231.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_15,x:231.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_16,x:226,y:-114.5}).wait(1).to({graphics:mask_1_graphics_17,x:221.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_18,x:216.8,y:-114.5}).wait(1).to({graphics:mask_1_graphics_19,x:212.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_20,x:209.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_21,x:205.8,y:-114.5}).wait(1).to({graphics:mask_1_graphics_22,x:202.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_23,x:200.4,y:-114.5}).wait(1).to({graphics:mask_1_graphics_24,x:198.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_25,x:196.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_26,x:195.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_27,x:194.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_28,x:193.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_29,x:193.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_30,x:193.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_31,x:184.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_32,x:174.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_33,x:166,y:-114.5}).wait(1).to({graphics:mask_1_graphics_34,x:157.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_35,x:150.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_36,x:143.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_37,x:138.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_38,x:133,y:-114.5}).wait(1).to({graphics:mask_1_graphics_39,x:128.8,y:-114.5}).wait(1).to({graphics:mask_1_graphics_40,x:125.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_41,x:122.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_42,x:120.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_43,x:119.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_44,x:119.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_45,x:116.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_46,x:126.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_47,x:135.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_48,x:142,y:-114.5}).wait(1).to({graphics:mask_1_graphics_49,x:146.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_50,x:149.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_51,x:150.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_52,x:155.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_53,x:160.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_54,x:165.8,y:-114.5}).wait(1).to({graphics:mask_1_graphics_55,x:170.8,y:-114.5}).wait(1).to({graphics:mask_1_graphics_56,x:175.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_57,x:181,y:-114.5}).wait(1).to({graphics:mask_1_graphics_58,x:186,y:-114.5}).wait(1).to({graphics:mask_1_graphics_59,x:191.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_60,x:193,y:-114.5}).wait(1).to({graphics:mask_1_graphics_61,x:198.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_62,x:203.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_63,x:207.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_64,x:211.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_65,x:215.4,y:-114.5}).wait(1).to({graphics:mask_1_graphics_66,x:218.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_67,x:221.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_68,x:224.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_69,x:226.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_70,x:228.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_71,x:229.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_72,x:230.4,y:-114.5}).wait(1).to({graphics:mask_1_graphics_73,x:231,y:-114.5}).wait(1).to({graphics:mask_1_graphics_74,x:231.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_75,x:231.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_76,x:226.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_77,x:221.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_78,x:217.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_79,x:213,y:-114.5}).wait(1).to({graphics:mask_1_graphics_80,x:209.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_81,x:205.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_82,x:203,y:-114.5}).wait(1).to({graphics:mask_1_graphics_83,x:200.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_84,x:198.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_85,x:196.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_86,x:195.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_87,x:194.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_88,x:193.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_89,x:193.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_90,x:193.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_91,x:184.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_92,x:174.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_93,x:166,y:-114.5}).wait(1).to({graphics:mask_1_graphics_94,x:157.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_95,x:150.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_96,x:143.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_97,x:138.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_98,x:133,y:-114.5}).wait(1).to({graphics:mask_1_graphics_99,x:128.8,y:-114.5}).wait(1).to({graphics:mask_1_graphics_100,x:125.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_101,x:122.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_102,x:120.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_103,x:119.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_104,x:119.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_105,x:119.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_106,x:129.5,y:-114.5}).wait(1).to({graphics:mask_1_graphics_107,x:139.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_108,x:148.2,y:-114.5}).wait(1).to({graphics:mask_1_graphics_109,x:156.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_110,x:163.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_111,x:170.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_112,x:176.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_113,x:181.1,y:-114.5}).wait(1).to({graphics:mask_1_graphics_114,x:185.4,y:-114.5}).wait(1).to({graphics:mask_1_graphics_115,x:188.9,y:-114.5}).wait(1).to({graphics:mask_1_graphics_116,x:191.6,y:-114.5}).wait(1).to({graphics:mask_1_graphics_117,x:192.7,y:-114.5}).wait(1).to({graphics:mask_1_graphics_118,x:193.3,y:-114.5}).wait(1).to({graphics:mask_1_graphics_119,x:193.5,y:-114.5}).wait(1));

	// Символ 3
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(1.8,32,1.445,1.445);

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.8,-414,426.9,640);


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
	this.main.setTransform(35.6,-69.6);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400.6,-483.6,864.8,640);


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
	this.instance.setTransform(-26.4,-118.7,1.076,1.076);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.8,-151.1,229,71.3);


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

	// Слой 3
	this.kot = new lib.Символ42();
	this.kot.setTransform(2.4,73.5);

	this.timeline.addTween(cjs.Tween.get(this.kot).to({y:43.5},3).to({y:264.6},5).wait(13).to({y:43.5},5).to({y:73.5},3).wait(1));

	// Слой 9
	this.instance = new lib.Символ27();
	this.instance.setTransform(3,259.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:130.6},11).to({y:140.6},3).wait(1).to({y:130.6},3).to({y:259.6},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.4,-22.9,227,202);


// stage content:



(lib._160x600_pokormi_07072016_v1 = function(mode,startPosition,loop) {
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
	this.btn.setTransform(95.6,549.1,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 10
	this.main1 = new lib.Символ36();
	this.main1.setTransform(122.3,452.5,1,1,0,0,0,81.6,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.main1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.9,293,864.8,682.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
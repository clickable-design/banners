(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/eee1.png?1467964287279", id:"eee1"},
		{src:"images/fasdfasdf.jpg?1467964287279", id:"fasdfasdf"},
		{src:"images/qqq.png?1467964287279", id:"qqq"},
		{src:"images/rhdhjhd.png?1467964287279", id:"rhdhjhd"},
		{src:"images/rrr1.png?1467964287279", id:"rrr1"}
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
	this.instance.setTransform(-67.6,-161.5,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-161.5,91.2,110.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eee1();
	this.instance.setTransform(358.4,-173.2,0.45,0.45,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.4,-173.2,614.8,345.7);


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


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59268F").s().p("Ag/A3QgFAAgEgDQgHgBgFgIQgFgFgDgHQgCgIAAgJIAAgdQAAgIACgIQADgHAFgGQAFgHAHgDIAJgCIAJAAIAOAAIAJAFQAGAEADAEIAFAKIgNAFQgDgGgGgFQgGgEgJAAQgGAAgFACQgFADgDAEQgEADgCAGIgBALIAAAbIABAKQACAGAEAEQADAFAFADQAFABAGAAQAJAAAGgEQAEgCABgEIAEgGIANAGQgEALgJAHQgKAHgOAAgAmSA3IgMgFIgJgIIgGgKIANgGIAFAGQACAEAEACIAIADQAEACAFAAQAGAAAFgCQAEgBADgCQAIgFAAgKQAAgKgGgGQgDgDgEgBIgKgBIgMAAIAAgMIAMAAQAKAAAFgEIAFgFQACgEAAgFQAAgDgCgDIgGgFQgCgCgEgBIgJgBQgJAAgHAEQgIAEgDAHIgMgFQABgFAFgFIAIgIQALgFAOAAQAJAAAHACQAIABAEAFQAEADACAGQADAFAAAFIAAAIIgEAHIgFAFQgDAEgFACQAHADADAAQAEAEABADQADAFAAACIABAIQAAAHgCAFQgEAIgFAEQgGAFgHACQgJAEgIAAQgIAAgGgCgAh2A3IgKgaIguAAIgKAaIgQAAIAqhvIANAAIAqBvgAiDARIgVg3IAAAAIgSA3IAnAAgAjjA3IAAgzIgyAAIAAAzIgOAAIAAhvIAOAAIAAAxIAyAAIAAgxIAPAAIAABvgAn6A3IAAhvIBIAAIAAANIg6AAIAAAkIAxAAIAAALIgxAAIAAAmIA6AAIAAANgApcA3IAAhvIBGAAIAAANIg3AAIAAAjIAbAAQAJAAAHAEQAHACAFACQAEAEADAFQACAFABAJQgBAJgCAGQgDAGgGADQgFAEgHACQgGACgIAAgApNAqIAbAAQALAAAFgEIAFgGIABgJIgBgHQgBgDgDgEIgGgDQgFgCgGAAIgbAAgACUAyQgEAAgDgCQgIgCgDgGQgFgGgDgGQgCgIABgHIAAgaQgBgHACgIQADgGAFgFQADgGAIgDIAHgCIAIAAIAMABIAJADIAIAIIAGAJIgNAEQgBgFgHgFQgFgDgJAAQgFAAgEABIgIAHIgFAIIgBAKIAAAYIABAKIAFAJIAIAGQAEACAFAAQAJAAAFgFIAGgEIACgGIANAGQgFAJgIAHQgJAFgNAAgAJPAyIAAhMIgxBMIgOAAIAAhkIAOAAIAABPIA0hPIALAAIAABkgAHvAyIAAhGIgBAAIgaA3IgLAAIgag3IAABGIgNAAIAAhkIANAAIAhBGIAfhGIAMAAIAABkgAGIAyIgIgYIgrAAIgIAYIgNAAIAlhkIALAAIAnBkgAF9AQIgRgyIgBAAIgRAyIAjAAgAEmAyIAAguIgtAAIAAAuIgMAAIAAhkIAMAAIAAAsIAtAAIAAgsIAOAAIAABkg");
	this.shape.setTransform(-8.7,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-0.9,121,11.5);


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


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(172.6,-150.4,1,1,0,0,0,-28.3,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-22,regY:-106.4,rotation:3.8,x:191.4,y:-335.9},0).wait(1).to({rotation:6.9,x:201.3,y:-334.7},0).wait(1).to({rotation:9.4,x:209.2,y:-333.3},0).wait(1).to({rotation:11.4,x:215.6,y:-331.9},0).wait(1).to({rotation:13.1,x:220.8,y:-330.5},0).wait(1).to({rotation:14.5,x:225.4,y:-329.3},0).wait(1).to({rotation:15.8,x:229.6,y:-328},0).wait(1).to({rotation:17.1,x:233.4,y:-326.7},0).wait(1).to({rotation:18.2,x:236.7,y:-325.6},0).wait(1).to({rotation:19,x:239.3,y:-324.6},0).wait(1).to({rotation:19.8,x:241.5,y:-323.7},0).wait(1).to({rotation:20.4,x:243.4,y:-323},0).wait(1).to({rotation:20.9,x:245,y:-322.3},0).wait(1).to({rotation:21.4,x:246.4,y:-321.6},0).wait(1).to({rotation:21.9,x:247.9,y:-321.1},0).wait(1).to({rotation:22.3,x:249.3,y:-320.4},0).wait(1).to({rotation:22.8,x:250.7,y:-319.8},0).wait(1).to({rotation:23.4,x:252.3,y:-319},0).wait(1).to({regX:-28.3,regY:79.9,rotation:24,x:172.6,y:-150.5},0).wait(1).to({regX:-22,regY:-106.4,rotation:20.3,x:243.1,y:-323.1},0).wait(1).to({rotation:17.3,x:234,y:-326.5},0).wait(1).to({rotation:14.9,x:226.6,y:-328.9},0).wait(1).to({rotation:12.9,x:220.4,y:-330.6},0).wait(1).to({rotation:11.3,x:215.2,y:-331.9},0).wait(1).to({rotation:9.9,x:210.7,y:-332.9},0).wait(1).to({rotation:8.6,x:206.6,y:-333.8},0).wait(1).to({rotation:7.3,x:202.7,y:-334.4},0).wait(1).to({rotation:6.2,x:199.1,y:-335},0).wait(1).to({rotation:5.3,x:196.2,y:-335.4},0).wait(1).to({rotation:4.6,x:193.7,y:-335.6},0).wait(1).to({rotation:3.9,x:191.7,y:-335.9},0).wait(1).to({rotation:3.4,x:189.9,y:-336},0).wait(1).to({rotation:2.9,x:188.4,y:-336.2},0).wait(1).to({rotation:2.4,x:186.8,y:-336.3},0).wait(1).to({rotation:2,x:185.4,y:-336.4},0).wait(1).to({rotation:1.5,x:183.9,y:-336.5},0).wait(1).to({rotation:1.1,x:182.3,y:-336.6},0).wait(1).to({rotation:0.6,x:180.7,y:-336.7},0).wait(1).to({regX:-28.3,regY:80,rotation:0,x:172.6,y:-150.4},0).wait(1).to({regX:-22,regY:-106.4,rotation:-3.1,x:168.8,y:-336.9},0).wait(1).to({rotation:-5.6,x:160.7,y:-336.5},0).wait(1).to({rotation:-7.6,x:154.1,y:-336},0).wait(1).to({rotation:-9.3,x:148.7,y:-335.4},0).wait(1).to({rotation:-10.7,x:144.3,y:-334.7},0).wait(1).to({rotation:-11.9,x:140.4,y:-334.1},0).wait(1).to({rotation:-13,x:136.9,y:-333.5},0).wait(1).to({rotation:-14,x:133.6,y:-332.8},0).wait(1).to({rotation:-14.9,x:130.7,y:-332.1},0).wait(1).to({rotation:-15.7,x:128.2,y:-331.6},0).wait(1).to({rotation:-16.3,x:126.3,y:-331},0).wait(1).to({rotation:-16.9,x:124.6,y:-330.6},0).wait(1).to({rotation:-17.3,x:123.1,y:-330.2},0).wait(1).to({rotation:-17.7,x:121.8,y:-329.9},0).wait(1).to({rotation:-18.1,x:120.6,y:-329.5},0).wait(1).to({rotation:-18.5,x:119.4,y:-329.1},0).wait(1).to({rotation:-18.9,x:118.2,y:-328.8},0).wait(1).to({rotation:-19.3,x:117,y:-328.4},0).wait(1).to({rotation:-19.7,x:115.6,y:-328},0).wait(1).to({regX:-28.3,regY:80,rotation:-20.2,x:172.6,y:-150.4},0).wait(1).to({regX:-22,regY:-106.4,rotation:-17.1,x:123.8,y:-330.4},0).wait(1).to({rotation:-14.6,x:131.7,y:-332.3},0).wait(1).to({rotation:-12.6,x:138.2,y:-333.7},0).wait(1).to({rotation:-10.9,x:143.6,y:-334.7},0).wait(1).to({rotation:-9.5,x:148,y:-335.3},0).wait(1).to({rotation:-8.3,x:151.9,y:-335.7},0).wait(1).to({rotation:-7.2,x:155.4,y:-336.1},0).wait(1).to({rotation:-6.2,x:158.8,y:-336.4},0).wait(1).to({rotation:-5.3,x:161.8,y:-336.6},0).wait(1).to({rotation:-4.5,x:164.2,y:-336.7},0).wait(1).to({rotation:-3.9,x:166.4,y:-336.8},0).wait(1).to({rotation:-3.3,x:168.1},0).wait(1).to({rotation:-2.9,x:169.6,y:-336.9},0).wait(1).to({rotation:-2.4,x:170.9},0).wait(1).to({rotation:-2.1,x:172.2},0).wait(1).to({rotation:-1.7,x:173.4},0).wait(1).to({rotation:-1.3,x:174.7},0).wait(1).to({rotation:-0.9,x:176},0).wait(1).to({rotation:-0.5,x:177.4,y:-336.8},0).wait(1).to({regX:-28.3,regY:80,rotation:0,x:172.6,y:-150.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.3,-391.9,91.2,110.3);


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


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(0,-1.3,1,0.781);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-86.9,255.6,126.8);


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
	this.instance.setTransform(0,1,0.825,0.825);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0.6,1.9,0.825,0.825);
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-104,-208,208,472);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-204.2,177,428.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-19.3,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.8,-9.4,151,14.9);


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
	this.instance.setTransform(181.2,-235.8,0.364,0.364,0,0,180);

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


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-9.5,151,14.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ1();
	this.instance.setTransform(-63.9,-105.6,1.633,1.633);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.fasdfasdf();
	this.instance_1.setTransform(-20.4,-168.4,0.484,0.484);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-168.4,222.2,193.5);


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
	this.text1.setTransform(-313.7,-101.1,0.843,0.843);

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(120));

	// Символ 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(-280.4,-99,0.656,1.979,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(199.6,-103.7,0.415,2.17,90,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Символ 8
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:127.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:-224.2},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:127.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:-224.2},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_1 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_2 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_3 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_4 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_5 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_6 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_7 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_8 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_9 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_10 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_11 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_12 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_13 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_14 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_15 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_16 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_17 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_18 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_19 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_20 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_21 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_22 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_23 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_24 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_25 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_26 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_27 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_28 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_29 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_30 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_31 = new cjs.Graphics().p("EgzJApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg1YApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg3cApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg5VApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg7CApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg8jApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg96ApLMAAAhSVMBhqAAAMAAABSVg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg/EApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_39 = new cjs.Graphics().p("EhADApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_40 = new cjs.Graphics().p("EhA3ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_41 = new cjs.Graphics().p("EhBfApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_42 = new cjs.Graphics().p("EhB8ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_43 = new cjs.Graphics().p("EhCNApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_44 = new cjs.Graphics().p("EhCTApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_45 = new cjs.Graphics().p("EhCTApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_46 = new cjs.Graphics().p("Eg/4ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_47 = new cjs.Graphics().p("Eg9oApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_48 = new cjs.Graphics().p("Eg7kApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_49 = new cjs.Graphics().p("Eg5sApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_50 = new cjs.Graphics().p("Eg3/ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_51 = new cjs.Graphics().p("Eg2dApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_52 = new cjs.Graphics().p("Eg1HApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_53 = new cjs.Graphics().p("Egz8ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_54 = new cjs.Graphics().p("Egy9ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_55 = new cjs.Graphics().p("EgyKApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_56 = new cjs.Graphics().p("EgxhApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_57 = new cjs.Graphics().p("EgxFApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_58 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_59 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_60 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_61 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_62 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_63 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_64 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_65 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_66 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_67 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_68 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_69 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_70 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_71 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_72 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_73 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_74 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_75 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_76 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_77 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_78 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_79 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_80 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_81 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_82 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_83 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_84 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_85 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_86 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_87 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_88 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_89 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_90 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_91 = new cjs.Graphics().p("EgzJApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_92 = new cjs.Graphics().p("Eg1YApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_93 = new cjs.Graphics().p("Eg3cApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_94 = new cjs.Graphics().p("Eg5VApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_95 = new cjs.Graphics().p("Eg7CApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_96 = new cjs.Graphics().p("Eg8jApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_97 = new cjs.Graphics().p("Eg96ApLMAAAhSVMBhqAAAMAAABSVg");
	var mask_graphics_98 = new cjs.Graphics().p("Eg/EApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_99 = new cjs.Graphics().p("EhADApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_100 = new cjs.Graphics().p("EhA3ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_101 = new cjs.Graphics().p("EhBfApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_102 = new cjs.Graphics().p("EhB8ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_103 = new cjs.Graphics().p("EhCNApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_104 = new cjs.Graphics().p("EhCTApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_105 = new cjs.Graphics().p("EhCTApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_106 = new cjs.Graphics().p("Eg/4ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_107 = new cjs.Graphics().p("Eg9oApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_108 = new cjs.Graphics().p("Eg7kApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_109 = new cjs.Graphics().p("Eg5sApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_110 = new cjs.Graphics().p("Eg3/ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_111 = new cjs.Graphics().p("Eg2dApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_112 = new cjs.Graphics().p("Eg1HApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_113 = new cjs.Graphics().p("Egz8ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_114 = new cjs.Graphics().p("Egy9ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_115 = new cjs.Graphics().p("EgyKApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_116 = new cjs.Graphics().p("EgxhApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_117 = new cjs.Graphics().p("EgxFApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_118 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");
	var mask_graphics_119 = new cjs.Graphics().p("Egw0ApLMAAAhSVMBhpAAAMAAABSVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-311.3,y:1.5}).wait(1).to({graphics:mask_graphics_1,x:-293.8,y:1.5}).wait(1).to({graphics:mask_graphics_2,x:-277.5,y:1.5}).wait(1).to({graphics:mask_graphics_3,x:-262.6,y:1.5}).wait(1).to({graphics:mask_graphics_4,x:-248.9,y:1.5}).wait(1).to({graphics:mask_graphics_5,x:-236.6,y:1.5}).wait(1).to({graphics:mask_graphics_6,x:-225.5,y:1.5}).wait(1).to({graphics:mask_graphics_7,x:-215.8,y:1.5}).wait(1).to({graphics:mask_graphics_8,x:-207.3,y:1.5}).wait(1).to({graphics:mask_graphics_9,x:-200.2,y:1.5}).wait(1).to({graphics:mask_graphics_10,x:-194.3,y:1.5}).wait(1).to({graphics:mask_graphics_11,x:-189.8,y:1.5}).wait(1).to({graphics:mask_graphics_12,x:-186.5,y:1.5}).wait(1).to({graphics:mask_graphics_13,x:-184.6,y:1.5}).wait(1).to({graphics:mask_graphics_14,x:-183.9,y:1.5}).wait(1).to({graphics:mask_graphics_15,x:-183.9,y:1.5}).wait(1).to({graphics:mask_graphics_16,x:-201.5,y:1.5}).wait(1).to({graphics:mask_graphics_17,x:-217.7,y:1.5}).wait(1).to({graphics:mask_graphics_18,x:-232.7,y:1.5}).wait(1).to({graphics:mask_graphics_19,x:-246.3,y:1.5}).wait(1).to({graphics:mask_graphics_20,x:-258.7,y:1.5}).wait(1).to({graphics:mask_graphics_21,x:-269.7,y:1.5}).wait(1).to({graphics:mask_graphics_22,x:-279.5,y:1.5}).wait(1).to({graphics:mask_graphics_23,x:-287.9,y:1.5}).wait(1).to({graphics:mask_graphics_24,x:-295.1,y:1.5}).wait(1).to({graphics:mask_graphics_25,x:-300.9,y:1.5}).wait(1).to({graphics:mask_graphics_26,x:-305.5,y:1.5}).wait(1).to({graphics:mask_graphics_27,x:-308.7,y:1.5}).wait(1).to({graphics:mask_graphics_28,x:-310.7,y:1.5}).wait(1).to({graphics:mask_graphics_29,x:-311.3,y:1.5}).wait(1).to({graphics:mask_graphics_30,x:-311.3,y:1.5}).wait(1).to({graphics:mask_graphics_31,x:-327.4,y:1.5}).wait(1).to({graphics:mask_graphics_32,x:-341.8,y:1.5}).wait(1).to({graphics:mask_graphics_33,x:-355,y:1.5}).wait(1).to({graphics:mask_graphics_34,x:-367,y:1.5}).wait(1).to({graphics:mask_graphics_35,x:-377.9,y:1.5}).wait(1).to({graphics:mask_graphics_36,x:-387.7,y:1.5}).wait(1).to({graphics:mask_graphics_37,x:-396.3,y:1.5}).wait(1).to({graphics:mask_graphics_38,x:-403.8,y:1.5}).wait(1).to({graphics:mask_graphics_39,x:-410.1,y:1.5}).wait(1).to({graphics:mask_graphics_40,x:-415.2,y:1.5}).wait(1).to({graphics:mask_graphics_41,x:-419.3,y:1.5}).wait(1).to({graphics:mask_graphics_42,x:-422.1,y:1.5}).wait(1).to({graphics:mask_graphics_43,x:-423.9,y:1.5}).wait(1).to({graphics:mask_graphics_44,x:-424.4,y:1.5}).wait(1).to({graphics:mask_graphics_45,x:-424.4,y:1.5}).wait(1).to({graphics:mask_graphics_46,x:-408.9,y:1.5}).wait(1).to({graphics:mask_graphics_47,x:-394.6,y:1.5}).wait(1).to({graphics:mask_graphics_48,x:-381.4,y:1.5}).wait(1).to({graphics:mask_graphics_49,x:-369.3,y:1.5}).wait(1).to({graphics:mask_graphics_50,x:-358.4,y:1.5}).wait(1).to({graphics:mask_graphics_51,x:-348.7,y:1.5}).wait(1).to({graphics:mask_graphics_52,x:-340,y:1.5}).wait(1).to({graphics:mask_graphics_53,x:-332.6,y:1.5}).wait(1).to({graphics:mask_graphics_54,x:-326.3,y:1.5}).wait(1).to({graphics:mask_graphics_55,x:-321.1,y:1.5}).wait(1).to({graphics:mask_graphics_56,x:-317.1,y:1.5}).wait(1).to({graphics:mask_graphics_57,x:-314.2,y:1.5}).wait(1).to({graphics:mask_graphics_58,x:-312.4,y:1.5}).wait(1).to({graphics:mask_graphics_59,x:-311.3,y:1.5}).wait(1).to({graphics:mask_graphics_60,x:-311.3,y:1.5}).wait(1).to({graphics:mask_graphics_61,x:-293.9,y:1.5}).wait(1).to({graphics:mask_graphics_62,x:-277.8,y:1.5}).wait(1).to({graphics:mask_graphics_63,x:-263,y:1.5}).wait(1).to({graphics:mask_graphics_64,x:-249.4,y:1.5}).wait(1).to({graphics:mask_graphics_65,x:-237.2,y:1.5}).wait(1).to({graphics:mask_graphics_66,x:-226.2,y:1.5}).wait(1).to({graphics:mask_graphics_67,x:-216.5,y:1.5}).wait(1).to({graphics:mask_graphics_68,x:-208.2,y:1.5}).wait(1).to({graphics:mask_graphics_69,x:-201.1,y:1.5}).wait(1).to({graphics:mask_graphics_70,x:-195.3,y:1.5}).wait(1).to({graphics:mask_graphics_71,x:-190.8,y:1.5}).wait(1).to({graphics:mask_graphics_72,x:-187.5,y:1.5}).wait(1).to({graphics:mask_graphics_73,x:-185.6,y:1.5}).wait(1).to({graphics:mask_graphics_74,x:-184.9,y:1.5}).wait(1).to({graphics:mask_graphics_75,x:-184.9,y:1.5}).wait(1).to({graphics:mask_graphics_76,x:-202.4,y:1.5}).wait(1).to({graphics:mask_graphics_77,x:-218.5,y:1.5}).wait(1).to({graphics:mask_graphics_78,x:-233.3,y:1.5}).wait(1).to({graphics:mask_graphics_79,x:-246.8,y:1.5}).wait(1).to({graphics:mask_graphics_80,x:-259.1,y:1.5}).wait(1).to({graphics:mask_graphics_81,x:-270,y:1.5}).wait(1).to({graphics:mask_graphics_82,x:-279.7,y:1.5}).wait(1).to({graphics:mask_graphics_83,x:-288.1,y:1.5}).wait(1).to({graphics:mask_graphics_84,x:-295.2,y:1.5}).wait(1).to({graphics:mask_graphics_85,x:-301,y:1.5}).wait(1).to({graphics:mask_graphics_86,x:-305.5,y:1.5}).wait(1).to({graphics:mask_graphics_87,x:-308.7,y:1.5}).wait(1).to({graphics:mask_graphics_88,x:-310.7,y:1.5}).wait(1).to({graphics:mask_graphics_89,x:-311.3,y:1.5}).wait(1).to({graphics:mask_graphics_90,x:-311.3,y:1.5}).wait(1).to({graphics:mask_graphics_91,x:-327.4,y:1.5}).wait(1).to({graphics:mask_graphics_92,x:-341.8,y:1.5}).wait(1).to({graphics:mask_graphics_93,x:-355,y:1.5}).wait(1).to({graphics:mask_graphics_94,x:-367,y:1.5}).wait(1).to({graphics:mask_graphics_95,x:-377.9,y:1.5}).wait(1).to({graphics:mask_graphics_96,x:-387.7,y:1.5}).wait(1).to({graphics:mask_graphics_97,x:-396.3,y:1.5}).wait(1).to({graphics:mask_graphics_98,x:-403.8,y:1.5}).wait(1).to({graphics:mask_graphics_99,x:-410.1,y:1.5}).wait(1).to({graphics:mask_graphics_100,x:-415.2,y:1.5}).wait(1).to({graphics:mask_graphics_101,x:-419.3,y:1.5}).wait(1).to({graphics:mask_graphics_102,x:-422.1,y:1.5}).wait(1).to({graphics:mask_graphics_103,x:-423.9,y:1.5}).wait(1).to({graphics:mask_graphics_104,x:-424.4,y:1.5}).wait(1).to({graphics:mask_graphics_105,x:-424.4,y:1.5}).wait(1).to({graphics:mask_graphics_106,x:-408.9,y:1.5}).wait(1).to({graphics:mask_graphics_107,x:-394.6,y:1.5}).wait(1).to({graphics:mask_graphics_108,x:-381.4,y:1.5}).wait(1).to({graphics:mask_graphics_109,x:-369.3,y:1.5}).wait(1).to({graphics:mask_graphics_110,x:-358.4,y:1.5}).wait(1).to({graphics:mask_graphics_111,x:-348.7,y:1.5}).wait(1).to({graphics:mask_graphics_112,x:-340,y:1.5}).wait(1).to({graphics:mask_graphics_113,x:-332.6,y:1.5}).wait(1).to({graphics:mask_graphics_114,x:-326.3,y:1.5}).wait(1).to({graphics:mask_graphics_115,x:-321.1,y:1.5}).wait(1).to({graphics:mask_graphics_116,x:-317.1,y:1.5}).wait(1).to({graphics:mask_graphics_117,x:-314.2,y:1.5}).wait(1).to({graphics:mask_graphics_118,x:-312.4,y:1.5}).wait(1).to({graphics:mask_graphics_119,x:-311.3,y:1.5}).wait(1));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(-11.7,65.9,1.109,1.109,0,0,180);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// Слой 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_1 = new cjs.Graphics().p("Eg6/AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_2 = new cjs.Graphics().p("Eg5vAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("Eg4lAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_4 = new cjs.Graphics().p("Eg3iAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Eg2lAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_6 = new cjs.Graphics().p("Eg1uAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Eg0+AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Eg0VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgzyAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgzVAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Egy+AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgyuAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgylAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgyhAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgyhAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Egz4AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Eg1IAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Eg2SAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Eg3VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Eg4SAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Eg5IAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Eg54AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Eg6iAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Eg7FAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Eg7iAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Eg74AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Eg8IAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Eg8SAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_45 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB43AAAMAAABVJg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_51 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_52 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_57 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Eg6/AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Eg5vAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Eg4lAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Eg3iAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Eg2lAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Eg1uAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Eg0+AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Eg0VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgzyAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgzVAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Egy+AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgyuAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgylAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgyhAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgyhAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Egz4AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Eg1IAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Eg2SAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Eg3VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Eg4SAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Eg5IAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_82 = new cjs.Graphics().p("Eg54AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_83 = new cjs.Graphics().p("Eg6iAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_84 = new cjs.Graphics().p("Eg7FAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Eg7iAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Eg74AqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_87 = new cjs.Graphics().p("Eg8IAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_88 = new cjs.Graphics().p("Eg8SAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB43AAAMAAABVJg");
	var mask_1_graphics_93 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_94 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB43AAAMAAABVJg");
	var mask_1_graphics_95 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB43AAAMAAABVJg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_99 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_100 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB43AAAMAAABVJg");
	var mask_1_graphics_101 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_102 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_103 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_104 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_105 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_106 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB43AAAMAAABVJg");
	var mask_1_graphics_107 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_108 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_109 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_110 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_112 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_113 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_114 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_116 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Eg8cAqlMAAAhVJMB45AAAMAAABVJg");
	var mask_1_graphics_118 = new cjs.Graphics().p("Eg8bAqlMAAAhVJMB44AAAMAAABVJg");
	var mask_1_graphics_119 = new cjs.Graphics().p("Eg8VAqlMAAAhVJMB44AAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:387.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_1,x:396.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_2,x:404.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_3,x:411.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_4,x:418.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_5,x:424.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_6,x:429.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_7,x:434.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_8,x:438.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_9,x:442.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_10,x:445.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_11,x:447.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_12,x:449,y:-7.5}).wait(1).to({graphics:mask_1_graphics_13,x:450,y:-7.5}).wait(1).to({graphics:mask_1_graphics_14,x:450.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_15,x:450.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_16,x:441.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_17,x:433.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_18,x:426.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_19,x:419.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_20,x:413.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_21,x:408,y:-7.5}).wait(1).to({graphics:mask_1_graphics_22,x:403.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_23,x:399.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_24,x:395.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_25,x:392.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_26,x:390.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_27,x:388.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_28,x:387.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_29,x:387.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_30,x:387.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_31,x:352.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_32,x:320.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_33,x:291.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_34,x:265.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_35,x:242.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_36,x:222.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_37,x:205.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_38,x:191.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_39,x:180.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_40,x:172.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_41,x:168.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_42,x:166.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_43,x:164.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_44,x:162.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_45,x:162.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_46,x:193.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_47,x:222.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_48,x:248.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_49,x:272.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_50,x:294.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_51,x:314.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_52,x:331.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_53,x:346.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_54,x:359.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_55,x:369.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_56,x:377.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_57,x:383.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_58,x:386.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_59,x:387.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_60,x:387.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_61,x:396.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_62,x:404.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_63,x:411.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_64,x:418.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_65,x:424.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_66,x:429.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_67,x:434.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_68,x:438.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_69,x:442.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_70,x:445.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_71,x:447.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_72,x:449,y:-7.5}).wait(1).to({graphics:mask_1_graphics_73,x:450,y:-7.5}).wait(1).to({graphics:mask_1_graphics_74,x:450.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_75,x:450.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_76,x:441.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_77,x:433.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_78,x:426.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_79,x:419.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_80,x:413.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_81,x:408,y:-7.5}).wait(1).to({graphics:mask_1_graphics_82,x:403.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_83,x:399.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_84,x:395.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_85,x:392.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_86,x:390.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_87,x:388.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_88,x:387.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_89,x:387.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_90,x:387.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_91,x:357,y:-7.5}).wait(1).to({graphics:mask_1_graphics_92,x:328.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_93,x:301.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_94,x:277.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_95,x:255.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_96,x:235.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_97,x:218.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_98,x:203.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_99,x:191,y:-7.5}).wait(1).to({graphics:mask_1_graphics_100,x:180.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_101,x:172.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_102,x:166.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_103,x:163.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_104,x:162.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_105,x:162.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_106,x:193.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_107,x:222.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_108,x:248.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_109,x:272.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_110,x:294.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_111,x:314.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_112,x:331.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_113,x:346.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_114,x:359.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_115,x:369.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_116,x:377.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_117,x:383.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_118,x:386.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_119,x:387.5,y:-7.5}).wait(1));

	// Символ 3
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(1.8,32,1.445,1.445);

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452.5,-211.3,840.7,435.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.main = new lib.Символ9();
	this.main.setTransform(309.6,-139.6);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.5,-419.6,1399.3,545.2);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.setTransform(0,-1.7);
	this.instance.alpha = 0.172;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-29.7,212,65);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(242.1,-416.7,0.803,0.803);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.7,-443.3,189,60);


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
	this.kot.setTransform(13.5,50.3,0.53,0.53,0,0,0,173.5,0);

	this.timeline.addTween(cjs.Tween.get(this.kot).to({y:40.3},3).to({y:380.3},11).wait(1).to({y:40.3},11).to({y:50.3},3).wait(1));

	// Слой 9
	this.instance = new lib.Символ27();
	this.instance.setTransform(3,259.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-243},11).to({x:-230.5},3).wait(1).to({x:-243},3).to({x:3},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-181.6,341.6,82.6);


// stage content:



(lib._728x90_pokormi_07072016_v1 = function(mode,startPosition,loop) {
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
	this.btn.setTransform(622,188.8,0.926,0.926);

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
p.nominalBounds = new cjs.Rectangle(132.2,-86.1,1399.3,545.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
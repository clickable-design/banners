(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/eee.jpg?1467728103834", id:"eee"},
		{src:"images/qqq.png?1467728103834", id:"qqq"},
		{src:"images/rhdhjhd.png?1467728103834", id:"rhdhjhd"},
		{src:"images/rrr1.png?1467728103834", id:"rrr1"},
		{src:"images/www.jpg?1467728103834", id:"www"}
	]
};



// symbols:



(lib.eee = function() {
	this.initialize(img.eee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


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


(lib.www = function() {
	this.initialize(img.www);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1688,1125);


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
	this.instance = new lib.eee();
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
	this.shape.graphics.f("#59268F").s().p("AE9AfQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBgBAAQgEgBgCgEQgEgDgBgEIgBgKIAAgPIABgJQABgDAEgDQACgEAEgCIAFgBIAFAAIAHAAIAGACIAFAFIADAFIgIAEQAAgEgFgDQgDgCgFAAIgGABIgFAEIgCAFIgBAGIAAAOIABAGIACAFIAFAFIAGAAQAFAAADgCIAEgDIABgEIAIAEQgDAGgFAEQgFADgIABgAkoAfIgGgCQgDgBgDgEQgDgDgBgEQgCgFAAgFIAAgPIACgJQABgDADgDQADgEADgCIAGgBIAEAAIAIAAIAGACIAEAFIADAFIgHAEIgFgHQgEgCgFAAIgGABIgEAEQgDACAAADIAAAGIAAAOIAAAGQAAADADACQACADACACIAGAAQAFAAAEgCIADgDIACgEIAHAEQgCAGgFAEQgFADgJABgAnlAfIgGgDIgGgFIgDgFIAIgEIACAEIADADIAFACIAFABIAGgBIAEgCQAEgDAAgFQAAgGgDgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFgBIgHAAIAAgFIAHAAQAFAAADgDIADgDIAAgEIAAgEIgDgDIgEgBIgFgBQgFAAgEACQgEACgCAFIgHgEQABgDADgCIAEgFQAGgCAIAAQAFgBAEACQAEABACACQADACABADIACAGIAAAEIgCAEIgEADQgBACgDABIAFABIAEAEIABAEIAAAEIAAAHQgCAEgEACQgDADgEACQgFACgEAAIgIgBgAJOAfIAAguIgfAuIgIAAIAAg9IAIAAIAAAvIAggvIAHAAIAAA9gAITAfIAAgrIgBAAIgQAiIgHAAIgQgiIAAArIgIAAIAAg9IAIAAIAUAqIAUgqIAHAAIAAA9gAHTAfIgFgPIgaAAIgFAPIgIAAIAWg9IAHAAIAYA9gAHMAJIgKgdIgBAAIgLAdIAWAAgAGXAfIAAgdIgbAAIAAAdIgJAAIAAg9IAJAAIAAAbIAbAAIAAgbIAIAAIAAA9gAlHAfIgFgPIgaAAIgGAPIgJAAIAYg9IAHAAIAXA9gAlPAJIgLgdIAAAAIgKAdIAVAAgAmEAfIAAgdIgcAAIAAAdIgIAAIAAg9IAIAAIAAAbIAcAAIAAgbIAIAAIAAA9gAofAfIAAg9IAoAAIAAAHIggAAIAAAUIAbAAIAAAFIgbAAIAAAVIAgAAIAAAIgApVAfIAAg9IAmAAIAAAHIgeAAIAAAUIAPAAQAFAAAEACQAEABACAAIAFAFQABADAAAFQAAAEgBAEIgGAFQgCADgEABIgIABgApNAXIAPAAQAGAAADgCIADgEIAAgEIAAgEIgCgEIgEgCIgGgBIgPAAg");
	this.shape.setTransform(-6.1,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,1.6,119.7,6.4);


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


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgxUAJKIAAyTMBipAAAIAASTg");
	this.shape.setTransform(-133.3,-71.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADaBEQgIgCgHgEQgOgIgGgPIAXgKQABAEADADIAHAGQAEADAFACQAEABAFAAQAMAAAIgGQAHgFAAgKQAAgKgGgFQgGgGgLAAIgQAAIAAgSIARAAQAJAAAGgFQAGgFAAgIQAAgIgHgEQgGgEgKAAIgJABIgIAEQgIAEgEAIIgVgKQAGgOANgIQAMgIATAAQALAAAJACQAJADAGAFQAGAEADAHQADAHAAAJIgBAHIgDAJIgGAHQgEAEgGACIAAABQAHACAEACQAEAEADAEQACAFABAFIABAIQAAAKgEAIQgEAIgHAFQgHAFgJADQgKADgLAAQgJAAgIgCgAleBFIgLgDQgKgEgGgHQgGgIgEgJQgDgKAAgLIAAghQAAgLADgJQAEgKAGgHQAGgHAKgFQAKgEANAAQAMAAAKAEQAJAEAHAHQAHAHADAKQAEAJAAAMIAAAhQAAANgEAJQgDAKgHAHQgHAHgKAEQgJADgMAAgAlegsQgFADgEAEQgDAEgCAFQgCAFAAAGIAAAjQAAAGACAFQACAFADAFQAEAEAFACQAFADAHAAQAGAAAGgCQAFgDADgEQAEgEACgFQABgGAAgGIAAgjQAAgGgBgGQgCgFgEgEQgDgEgFgCQgGgCgGAAQgHAAgFACgApTBFIgLgDQgKgEgGgHQgGgIgEgJQgDgKAAgLIAAghQAAgLADgJQAEgKAGgHQAGgHAKgFQAKgEANAAQAMAAAKAEQAJAEAHAHQAHAHADAKQAEAJAAAMIAAAhQAAANgEAJQgDAKgHAHQgHAHgKAEQgJADgMAAgApTgsQgFADgEAEQgDAEgCAFQgCAFAAAGIAAAjQAAAGACAFQACAFADAFQAEAEAFACQAFADAHAAQAGAAAGgCQAFgDADgEQAEgEACgFQABgGAAgGIAAgjQAAgGgBgGQgCgFgEgEQgDgEgFgCQgGgCgGAAQgHAAgFACgALhBFIAAg7IgTAAIgIABQgEABgDADQgEADgCAEQgDAFgCAHIgLAjIgZAAIALgnQACgJAEgGQAEgGAIgDQgGgCgFgEQgEgBgDgFQgDgFgBgFIgCgLQAAgJAEgHQADgIAGgGQAFgFAIgDQAIgDAKAAIA4AAIAACJgAK7gtQgEABgDADQgGAFAAAKQAAAFACADQACADADADQADACAFABIAJABIAbAAIAAgnIgcAAQgGAAgEACgAIiBFIAAiJIA2AAQAKAAAIADQAJADAHAFQAGAFAEAJQADAIAAALQAAAIgDAIQgDAHgGAEQgGAGgJADQgIAEgKAAIggAAIAAA1gAI6gEIAeAAQALAAAGgGQADgDABgEQACgEAAgEQAAgLgHgFQgGgFgLAAIgdAAgAGxBFIAAiJIBeAAIAAAWIhFAAIAAAkIA6AAIAAAUIg6AAIAAAlIBFAAIAAAWgAE2BFIAAiJIA3AAQALAAAIADQAIADAGAFQAFAFADAHQADAHAAAIIgBAIIgDAIIgGAHQgEADgFADIAAAAQAFABAEACIAHAIIAEAKQACAEAAAFQAAAJgEAIQgDAHgGAFQgFAGgIACQgHADgIAAgAFOAvIAfAAQAGAAAEgBQAEgCADgDIAEgGQABgDAAgEIgBgHIgEgHQgDgCgEgCQgEgCgGAAIgfAAgAFOgKIAcAAQALAAAGgGQAFgFAAgIQAAgHgFgFQgGgFgLAAIgcAAgABcBFIAAhcIAAAAIg/BcIgWAAIAAiJIAYAAIAABgIABABIBAhhIAUAAIAACJgAgrBFIAAhQIAAAAIgdA9IgTAAIgcg+IgBABIAABQIgYAAIAAiJIAWAAIAoBYIABAAIAnhYIAYAAIAACJgAkGBFIAAiJIA2AAQAKAAAIADQAJADAHAFQAGAFAEAJQADAIAAALQAAAIgDAIQgDAHgGAEQgGAGgJADQgIAEgKAAIggAAIAAA1gAjugEIAeAAQALAAAGgGQADgDABgEQACgEAAgEQAAgLgHgFQgGgFgLAAIgdAAgAmrBFIgLgmIgFgLIgGgHIgHgDIgbgBIAAA8IgZAAIAAiJIAZAAIAAA6IAZAAQADgBAEgCQADgCADgEQADgEACgHIAMgmIAYAAIgNApQgDAKgFAHQgFAHgHACIAIACIAGAGQAFAHADALIANAsgAqqBFIAAhzIg2AAIAABzIgYAAIAAiJIBmAAIAACJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-7.1,152.4,14.2);


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
	this.instance.setTransform(-1.1,117.9,1,1,0,0,0,0,42.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-22,regY:-117,rotation:-4.2,x:-34.7,y:-40.7},0).wait(1).to({rotation:-7.8,x:-44.6,y:-39.4},0).wait(1).to({rotation:-10.9,x:-52.7,y:-37.8},0).wait(1).to({rotation:-13.3,x:-59.2,y:-36.3},0).wait(1).to({rotation:-15.3,x:-64.3,y:-34.8},0).wait(1).to({rotation:-17,x:-68.7,y:-33.4},0).wait(1).to({rotation:-18.5,x:-72.4,y:-32},0).wait(1).to({rotation:-19.9,x:-75.9,y:-30.7},0).wait(1).to({rotation:-21.1,x:-78.9,y:-29.5},0).wait(1).to({rotation:-22.2,x:-81.5,y:-28.4},0).wait(1).to({rotation:-23,x:-83.7,y:-27.4},0).wait(1).to({rotation:-23.8,x:-85.4,y:-26.6},0).wait(1).to({rotation:-24.4,x:-86.8,y:-25.9},0).wait(1).to({rotation:-24.9,x:-88,y:-25.3},0).wait(1).to({rotation:-25.3,x:-89,y:-24.8},0).wait(1).to({rotation:-25.7,x:-89.9,y:-24.3},0).wait(1).to({rotation:-26,x:-90.7,y:-23.8},0).wait(1).to({rotation:-26.4,x:-91.5,y:-23.4},0).wait(1).to({regX:0.1,regY:42.2,rotation:-26.7,x:-1.1,y:109.3},0).wait(1).to({regX:-22,regY:-117,rotation:-22.7,x:-82.9,y:-27.8},0).wait(1).to({rotation:-19.2,x:-74.3,y:-31.4},0).wait(1).to({rotation:-16.2,x:-66.8,y:-34},0).wait(1).to({rotation:-13.8,x:-60.5,y:-35.9},0).wait(1).to({rotation:-11.8,x:-55.4,y:-37.2},0).wait(1).to({rotation:-10.2,x:-51,y:-38.2},0).wait(1).to({rotation:-8.7,x:-47,y:-38.9},0).wait(1).to({rotation:-7.4,x:-43.4,y:-39.6},0).wait(1).to({rotation:-6.1,x:-39.9,y:-40.1},0).wait(1).to({rotation:-5,x:-37,y:-40.4},0).wait(1).to({rotation:-4.1,x:-34.5,y:-40.7},0).wait(1).to({rotation:-3.3,x:-32.4,y:-40.8},0).wait(1).to({rotation:-2.7,x:-30.7,y:-41},0).wait(1).to({rotation:-2.2,x:-29.2,y:-41.1},0).wait(1).to({rotation:-1.7,x:-27.9,y:-41.2},0).wait(1).to({rotation:-1.3,x:-26.8},0).wait(1).to({rotation:-1,x:-25.8,y:-41.3},0).wait(1).to({rotation:-0.6,x:-24.9},0).wait(1).to({rotation:-0.3,x:-24},0).wait(1).to({regX:0,regY:42.2,rotation:0,x:-1.1,y:117.9},0).wait(1).to({regX:-22,regY:-117,rotation:4.5,x:-10.6,y:-42.2},0).wait(1).to({rotation:8.4,x:0.4},0).wait(1).to({rotation:11.7,x:9.7,y:-41.5},0).wait(1).to({rotation:14.5,x:17.3,y:-40.6},0).wait(1).to({rotation:16.7,x:23.5,y:-39.5},0).wait(1).to({rotation:18.6,x:28.7,y:-38.5},0).wait(1).to({rotation:20.2,x:33.2,y:-37.5},0).wait(1).to({rotation:21.7,x:37.3,y:-36.4},0).wait(1).to({rotation:23.1,x:41.1,y:-35.3},0).wait(1).to({rotation:24.3,x:44.4,y:-34.2},0).wait(1).to({rotation:25.4,x:47.2,y:-33.3},0).wait(1).to({rotation:26.2,x:49.5,y:-32.5},0).wait(1).to({rotation:27,x:51.4,y:-31.8},0).wait(1).to({rotation:27.6,x:53,y:-31.2},0).wait(1).to({rotation:28.1,x:54.3,y:-30.6},0).wait(1).to({rotation:28.5,x:55.5,y:-30.1},0).wait(1).to({rotation:28.9,x:56.6,y:-29.7},0).wait(1).to({rotation:29.3,x:57.5,y:-29.3},0).wait(1).to({rotation:29.7,x:58.5,y:-28.9},0).wait(1).to({regX:0.1,regY:42.2,rotation:30,x:-1.1,y:120.4},0).wait(1).to({regX:-22,regY:-117,rotation:25.5,x:47.5,y:-33.2},0).wait(1).to({rotation:21.6,x:36.9,y:-36.5},0).wait(1).to({rotation:18.3,x:27.8,y:-38.7},0).wait(1).to({rotation:15.5,x:20.3,y:-40.1},0).wait(1).to({rotation:13.3,x:14.1,y:-41},0).wait(1).to({rotation:11.4,x:8.8,y:-41.6},0).wait(1).to({rotation:9.8,x:4.2,y:-42},0).wait(1).to({rotation:8.3,x:-0.1,y:-42.2},0).wait(1).to({rotation:6.9,x:-4,y:-42.3},0).wait(1).to({rotation:5.7,x:-7.4},0).wait(1).to({rotation:4.6,x:-10.3,y:-42.2},0).wait(1).to({rotation:3.8,x:-12.7,y:-42.1},0).wait(1).to({rotation:3,x:-14.7,y:-42},0).wait(1).to({rotation:2.4,x:-16.4},0).wait(1).to({rotation:1.9,x:-17.8,y:-41.9},0).wait(1).to({rotation:1.5,x:-19,y:-41.7},0).wait(1).to({rotation:1.1,x:-20.2},0).wait(1).to({rotation:0.7,x:-21.2,y:-41.5},0).wait(1).to({rotation:0.3,x:-22.2},0).wait(1).to({regX:0,regY:42.2,rotation:0,x:-1.1,y:117.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-96.4,91.2,110.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-7.2,152.4,14.2);


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
	this.instance.setTransform(-0.1,76.9,1.118,1.118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0.7,78,1.118,1.118);
	this.instance_1.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance_1.cache(-104,-208,208,472);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-201.2,237,579.3);


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
	this.instance.setTransform(45.9,-55.7,0.319,0.319,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(21.7,-54.9,0.765,0.765);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.6,-187.5,470.5,264.6);


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


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(0,-1.2);

	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-29.7,212,65);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ1();
	this.instance.setTransform(9,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.www();
	this.instance_1.setTransform(281.2,-116.4,0.217,0.247,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.3,-116.4,366.5,278);


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
	this.instance.setTransform(-24.9,-132.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.2,-165.3,232,72.2);


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
	this.instance = new lib.Символ4();
	this.instance.setTransform(-1.6,-167.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Символ 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(0,-139.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

	// Слой 2
	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(0.1,139,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:117.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:-114.2},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:117.1},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1).to({x:-114.2},14,cjs.Ease.get(1)).wait(1).to({x:1.8},14,cjs.Ease.get(1)).wait(1));

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
	var mask_graphics_31 = new cjs.Graphics().p("EgYGApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_32 = new cjs.Graphics().p("EgZQApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_33 = new cjs.Graphics().p("EgaUApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_34 = new cjs.Graphics().p("EgbTApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_35 = new cjs.Graphics().p("EgcLApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_36 = new cjs.Graphics().p("Egc9ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_37 = new cjs.Graphics().p("EgdqApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_38 = new cjs.Graphics().p("EgeQApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_39 = new cjs.Graphics().p("EgexApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_40 = new cjs.Graphics().p("EgfLApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_41 = new cjs.Graphics().p("EgfgApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_42 = new cjs.Graphics().p("EgfvApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_43 = new cjs.Graphics().p("Egf4ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_44 = new cjs.Graphics().p("Egf6ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_45 = new cjs.Graphics().p("Egf6ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_46 = new cjs.Graphics().p("EgerApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_47 = new cjs.Graphics().p("EgdhApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_48 = new cjs.Graphics().p("EgcdApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_49 = new cjs.Graphics().p("EgbeApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_50 = new cjs.Graphics().p("EgamApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_51 = new cjs.Graphics().p("EgZ0ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_52 = new cjs.Graphics().p("EgZIApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_53 = new cjs.Graphics().p("EgYhApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_54 = new cjs.Graphics().p("EgYAApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_55 = new cjs.Graphics().p("EgXmApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_56 = new cjs.Graphics().p("EgXRApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_57 = new cjs.Graphics().p("EgXCApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_58 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
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
	var mask_graphics_91 = new cjs.Graphics().p("EgYGApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_92 = new cjs.Graphics().p("EgZQApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_93 = new cjs.Graphics().p("EgaUApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_94 = new cjs.Graphics().p("EgbTApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_95 = new cjs.Graphics().p("EgcLApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_96 = new cjs.Graphics().p("Egc9ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_97 = new cjs.Graphics().p("EgdqApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_98 = new cjs.Graphics().p("EgeQApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_99 = new cjs.Graphics().p("EgexApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_100 = new cjs.Graphics().p("EgfLApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_101 = new cjs.Graphics().p("EgfgApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_102 = new cjs.Graphics().p("EgfvApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_103 = new cjs.Graphics().p("Egf4ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_104 = new cjs.Graphics().p("Egf6ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_105 = new cjs.Graphics().p("Egf6ApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_106 = new cjs.Graphics().p("EgerApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_107 = new cjs.Graphics().p("EgdhApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_108 = new cjs.Graphics().p("EgcdApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_109 = new cjs.Graphics().p("EgbeApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_110 = new cjs.Graphics().p("EgamApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_111 = new cjs.Graphics().p("EgZ0ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_112 = new cjs.Graphics().p("EgZIApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_113 = new cjs.Graphics().p("EgYhApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_114 = new cjs.Graphics().p("EgYAApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_115 = new cjs.Graphics().p("EgXmApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_116 = new cjs.Graphics().p("EgXRApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_117 = new cjs.Graphics().p("EgXCApLMAAAhSVMAt6AAAMAAABSVg");
	var mask_graphics_118 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");
	var mask_graphics_119 = new cjs.Graphics().p("EgW9ApLMAAAhSVMAt7AAAMAAABSVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-145.8,y:1.5}).wait(1).to({graphics:mask_graphics_1,x:-129.9,y:1.5}).wait(1).to({graphics:mask_graphics_2,x:-115.2,y:1.5}).wait(1).to({graphics:mask_graphics_3,x:-101.6,y:1.5}).wait(1).to({graphics:mask_graphics_4,x:-89.3,y:1.5}).wait(1).to({graphics:mask_graphics_5,x:-78.1,y:1.5}).wait(1).to({graphics:mask_graphics_6,x:-68.1,y:1.5}).wait(1).to({graphics:mask_graphics_7,x:-59.3,y:1.5}).wait(1).to({graphics:mask_graphics_8,x:-51.6,y:1.5}).wait(1).to({graphics:mask_graphics_9,x:-45.1,y:1.5}).wait(1).to({graphics:mask_graphics_10,x:-39.8,y:1.5}).wait(1).to({graphics:mask_graphics_11,x:-35.7,y:1.5}).wait(1).to({graphics:mask_graphics_12,x:-32.8,y:1.5}).wait(1).to({graphics:mask_graphics_13,x:-31,y:1.5}).wait(1).to({graphics:mask_graphics_14,x:-30.4,y:1.5}).wait(1).to({graphics:mask_graphics_15,x:-30.4,y:1.5}).wait(1).to({graphics:mask_graphics_16,x:-46.3,y:1.5}).wait(1).to({graphics:mask_graphics_17,x:-61,y:1.5}).wait(1).to({graphics:mask_graphics_18,x:-74.6,y:1.5}).wait(1).to({graphics:mask_graphics_19,x:-86.9,y:1.5}).wait(1).to({graphics:mask_graphics_20,x:-98.1,y:1.5}).wait(1).to({graphics:mask_graphics_21,x:-108.1,y:1.5}).wait(1).to({graphics:mask_graphics_22,x:-116.9,y:1.5}).wait(1).to({graphics:mask_graphics_23,x:-124.6,y:1.5}).wait(1).to({graphics:mask_graphics_24,x:-131.1,y:1.5}).wait(1).to({graphics:mask_graphics_25,x:-136.4,y:1.5}).wait(1).to({graphics:mask_graphics_26,x:-140.5,y:1.5}).wait(1).to({graphics:mask_graphics_27,x:-143.4,y:1.5}).wait(1).to({graphics:mask_graphics_28,x:-145.2,y:1.5}).wait(1).to({graphics:mask_graphics_29,x:-145.8,y:1.5}).wait(1).to({graphics:mask_graphics_30,x:-145.8,y:1.5}).wait(1).to({graphics:mask_graphics_31,x:-154.4,y:1.5}).wait(1).to({graphics:mask_graphics_32,x:-161.8,y:1.5}).wait(1).to({graphics:mask_graphics_33,x:-168.6,y:1.5}).wait(1).to({graphics:mask_graphics_34,x:-174.8,y:1.5}).wait(1).to({graphics:mask_graphics_35,x:-180.4,y:1.5}).wait(1).to({graphics:mask_graphics_36,x:-185.5,y:1.5}).wait(1).to({graphics:mask_graphics_37,x:-189.9,y:1.5}).wait(1).to({graphics:mask_graphics_38,x:-193.7,y:1.5}).wait(1).to({graphics:mask_graphics_39,x:-197,y:1.5}).wait(1).to({graphics:mask_graphics_40,x:-199.7,y:1.5}).wait(1).to({graphics:mask_graphics_41,x:-201.7,y:1.5}).wait(1).to({graphics:mask_graphics_42,x:-203.2,y:1.5}).wait(1).to({graphics:mask_graphics_43,x:-204.1,y:1.5}).wait(1).to({graphics:mask_graphics_44,x:-204.4,y:1.5}).wait(1).to({graphics:mask_graphics_45,x:-204.4,y:1.5}).wait(1).to({graphics:mask_graphics_46,x:-196.4,y:1.5}).wait(1).to({graphics:mask_graphics_47,x:-189,y:1.5}).wait(1).to({graphics:mask_graphics_48,x:-182.2,y:1.5}).wait(1).to({graphics:mask_graphics_49,x:-176,y:1.5}).wait(1).to({graphics:mask_graphics_50,x:-170.4,y:1.5}).wait(1).to({graphics:mask_graphics_51,x:-165.3,y:1.5}).wait(1).to({graphics:mask_graphics_52,x:-160.9,y:1.5}).wait(1).to({graphics:mask_graphics_53,x:-157.1,y:1.5}).wait(1).to({graphics:mask_graphics_54,x:-153.8,y:1.5}).wait(1).to({graphics:mask_graphics_55,x:-151.1,y:1.5}).wait(1).to({graphics:mask_graphics_56,x:-149.1,y:1.5}).wait(1).to({graphics:mask_graphics_57,x:-147.6,y:1.5}).wait(1).to({graphics:mask_graphics_58,x:-146.4,y:1.5}).wait(1).to({graphics:mask_graphics_59,x:-145.8,y:1.5}).wait(1).to({graphics:mask_graphics_60,x:-145.8,y:1.5}).wait(1).to({graphics:mask_graphics_61,x:-129.9,y:1.5}).wait(1).to({graphics:mask_graphics_62,x:-115.2,y:1.5}).wait(1).to({graphics:mask_graphics_63,x:-101.6,y:1.5}).wait(1).to({graphics:mask_graphics_64,x:-89.3,y:1.5}).wait(1).to({graphics:mask_graphics_65,x:-78.1,y:1.5}).wait(1).to({graphics:mask_graphics_66,x:-68.1,y:1.5}).wait(1).to({graphics:mask_graphics_67,x:-59.3,y:1.5}).wait(1).to({graphics:mask_graphics_68,x:-51.6,y:1.5}).wait(1).to({graphics:mask_graphics_69,x:-45.1,y:1.5}).wait(1).to({graphics:mask_graphics_70,x:-39.8,y:1.5}).wait(1).to({graphics:mask_graphics_71,x:-35.7,y:1.5}).wait(1).to({graphics:mask_graphics_72,x:-32.8,y:1.5}).wait(1).to({graphics:mask_graphics_73,x:-31,y:1.5}).wait(1).to({graphics:mask_graphics_74,x:-30.4,y:1.5}).wait(1).to({graphics:mask_graphics_75,x:-30.4,y:1.5}).wait(1).to({graphics:mask_graphics_76,x:-46.3,y:1.5}).wait(1).to({graphics:mask_graphics_77,x:-61,y:1.5}).wait(1).to({graphics:mask_graphics_78,x:-74.6,y:1.5}).wait(1).to({graphics:mask_graphics_79,x:-86.9,y:1.5}).wait(1).to({graphics:mask_graphics_80,x:-98.1,y:1.5}).wait(1).to({graphics:mask_graphics_81,x:-108.1,y:1.5}).wait(1).to({graphics:mask_graphics_82,x:-116.9,y:1.5}).wait(1).to({graphics:mask_graphics_83,x:-124.6,y:1.5}).wait(1).to({graphics:mask_graphics_84,x:-131.1,y:1.5}).wait(1).to({graphics:mask_graphics_85,x:-136.4,y:1.5}).wait(1).to({graphics:mask_graphics_86,x:-140.5,y:1.5}).wait(1).to({graphics:mask_graphics_87,x:-143.4,y:1.5}).wait(1).to({graphics:mask_graphics_88,x:-145.2,y:1.5}).wait(1).to({graphics:mask_graphics_89,x:-145.8,y:1.5}).wait(1).to({graphics:mask_graphics_90,x:-145.8,y:1.5}).wait(1).to({graphics:mask_graphics_91,x:-154.4,y:1.5}).wait(1).to({graphics:mask_graphics_92,x:-161.8,y:1.5}).wait(1).to({graphics:mask_graphics_93,x:-168.6,y:1.5}).wait(1).to({graphics:mask_graphics_94,x:-174.8,y:1.5}).wait(1).to({graphics:mask_graphics_95,x:-180.4,y:1.5}).wait(1).to({graphics:mask_graphics_96,x:-185.5,y:1.5}).wait(1).to({graphics:mask_graphics_97,x:-189.9,y:1.5}).wait(1).to({graphics:mask_graphics_98,x:-193.7,y:1.5}).wait(1).to({graphics:mask_graphics_99,x:-197,y:1.5}).wait(1).to({graphics:mask_graphics_100,x:-199.7,y:1.5}).wait(1).to({graphics:mask_graphics_101,x:-201.7,y:1.5}).wait(1).to({graphics:mask_graphics_102,x:-203.2,y:1.5}).wait(1).to({graphics:mask_graphics_103,x:-204.1,y:1.5}).wait(1).to({graphics:mask_graphics_104,x:-204.4,y:1.5}).wait(1).to({graphics:mask_graphics_105,x:-204.4,y:1.5}).wait(1).to({graphics:mask_graphics_106,x:-196.4,y:1.5}).wait(1).to({graphics:mask_graphics_107,x:-189,y:1.5}).wait(1).to({graphics:mask_graphics_108,x:-182.2,y:1.5}).wait(1).to({graphics:mask_graphics_109,x:-176,y:1.5}).wait(1).to({graphics:mask_graphics_110,x:-170.4,y:1.5}).wait(1).to({graphics:mask_graphics_111,x:-165.3,y:1.5}).wait(1).to({graphics:mask_graphics_112,x:-160.9,y:1.5}).wait(1).to({graphics:mask_graphics_113,x:-157.1,y:1.5}).wait(1).to({graphics:mask_graphics_114,x:-153.8,y:1.5}).wait(1).to({graphics:mask_graphics_115,x:-151.1,y:1.5}).wait(1).to({graphics:mask_graphics_116,x:-149.1,y:1.5}).wait(1).to({graphics:mask_graphics_117,x:-147.6,y:1.5}).wait(1).to({graphics:mask_graphics_118,x:-146.4,y:1.5}).wait(1).to({graphics:mask_graphics_119,x:-145.8,y:1.5}).wait(1));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(-11.7,65.9,1.109,1.109,0,0,180);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

	// Слой 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgcnAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgbdAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgaZAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgZcAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgYkAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgXxAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgXFAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgWfAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgV+AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgVkAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgVPAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgVBAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgU4AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgU1AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgU1AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgWEAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgXOAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgYSAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgZQAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgaIAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ega6AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgbmAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgcMAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgctAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EgdHAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgdcAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgdrAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Egd0AqlMAAAhVJMA77AAAMAAABVJg");
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
	var mask_1_graphics_58 = new cjs.Graphics().p("Egd5AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgcnAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgbdAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgaZAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgZcAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgYkAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgXxAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgXFAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgWfAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgV+AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgVkAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EgVPAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgVBAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EgU4AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EgU1AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EgU1AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EgWEAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EgXOAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EgYSAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EgZQAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EgaIAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_81 = new cjs.Graphics().p("Ega6AqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EgbmAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgcMAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EgctAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EgdHAqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgdcAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgdrAqlMAAAhVJMA77AAAMAAABVJg");
	var mask_1_graphics_88 = new cjs.Graphics().p("Egd0AqlMAAAhVJMA77AAAMAAABVJg");
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
	var mask_1_graphics_118 = new cjs.Graphics().p("Egd5AqlMAAAhVJMA76AAAMAAABVJg");
	var mask_1_graphics_119 = new cjs.Graphics().p("Egd2AqlMAAAhVJMA76AAAMAAABVJg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_1,x:200.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_2,x:207.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_3,x:214.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_4,x:220.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_5,x:226.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_6,x:231.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_7,x:235.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_8,x:239.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_9,x:242.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_10,x:245.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_11,x:247.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_12,x:249,y:-7.5}).wait(1).to({graphics:mask_1_graphics_13,x:249.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_14,x:250.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_15,x:250.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_16,x:242.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_17,x:234.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_18,x:228.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_19,x:221.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_20,x:216.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_21,x:211.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_22,x:206.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_23,x:203.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_24,x:199.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_25,x:197.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_26,x:195.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_27,x:193.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_28,x:192.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_29,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_30,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_31,x:177.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_32,x:162.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_33,x:148.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_34,x:136.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_35,x:125,y:-7.5}).wait(1).to({graphics:mask_1_graphics_36,x:115,y:-7.5}).wait(1).to({graphics:mask_1_graphics_37,x:106.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_38,x:98.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_39,x:91.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_40,x:86.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_41,x:82.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_42,x:79.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_43,x:77.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_44,x:77.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_45,x:77.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_46,x:93.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_47,x:107.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_48,x:121.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_49,x:133.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_50,x:145.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_51,x:155.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_52,x:164.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_53,x:171.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_54,x:178.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_55,x:183.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_56,x:187.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_57,x:190.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_58,x:192.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_59,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_60,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_61,x:200.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_62,x:207.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_63,x:214.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_64,x:220.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_65,x:226.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_66,x:231.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_67,x:235.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_68,x:239.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_69,x:242.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_70,x:245.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_71,x:247.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_72,x:249,y:-7.5}).wait(1).to({graphics:mask_1_graphics_73,x:249.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_74,x:250.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_75,x:250.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_76,x:242.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_77,x:234.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_78,x:228.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_79,x:221.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_80,x:216.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_81,x:211.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_82,x:206.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_83,x:203.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_84,x:199.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_85,x:197.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_86,x:195.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_87,x:193.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_88,x:192.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_89,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_90,x:192.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_91,x:177.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_92,x:162.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_93,x:148.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_94,x:136.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_95,x:125,y:-7.5}).wait(1).to({graphics:mask_1_graphics_96,x:115,y:-7.5}).wait(1).to({graphics:mask_1_graphics_97,x:106.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_98,x:98.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_99,x:91.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_100,x:86.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_101,x:82.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_102,x:79.4,y:-7.5}).wait(1).to({graphics:mask_1_graphics_103,x:77.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_104,x:77.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_105,x:77.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_106,x:93.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_107,x:107.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_108,x:121.5,y:-7.5}).wait(1).to({graphics:mask_1_graphics_109,x:133.9,y:-7.5}).wait(1).to({graphics:mask_1_graphics_110,x:145.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_111,x:155.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_112,x:164.1,y:-7.5}).wait(1).to({graphics:mask_1_graphics_113,x:171.8,y:-7.5}).wait(1).to({graphics:mask_1_graphics_114,x:178.3,y:-7.5}).wait(1).to({graphics:mask_1_graphics_115,x:183.6,y:-7.5}).wait(1).to({graphics:mask_1_graphics_116,x:187.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_117,x:190.7,y:-7.5}).wait(1).to({graphics:mask_1_graphics_118,x:192.2,y:-7.5}).wait(1).to({graphics:mask_1_graphics_119,x:192.5,y:-7.5}).wait(1));

	// Символ 3
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(1.8,32,1.445,1.445);

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.8,-226.9,677.7,605);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.main = new lib.Символ9();
	this.main.setTransform(35.6,-69.6);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.4,-349.6,748.2,657.1);


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
p.nominalBounds = new cjs.Rectangle(-126.2,-22.9,212,186);


// stage content:



(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 240 * 2;
		stage.canvas.height = 400 * 2;
		stage.canvas.style.width = '240px';
		stage.canvas.style.height = '400px';
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		function fl_MouseOverHandler_5()
		{
		    _this.btn.gotoAndPlay(1);
		    _this.main1.main.gotoAndStop(0);
		
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_22;
		function fl_MouseOutHandler_22()
		{
		    _this.btn.gotoAndPlay(16);
			_this.main1.main.gotoAndPlay(0);
		
		}
		
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.doo.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main1.main.gotoAndPlay(61);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.doo.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
		    _this.main1.main.gotoAndPlay(76);
		
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.posle.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2()
		{
			    _this.main1.main.gotoAndPlay(91);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.posle.addEventListener("mouseout", fl_MouseOutHandler_2);
		
		function fl_MouseOutHandler_2()
		{
			    _this.main1.main.gotoAndPlay(106);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 16
	this.btn = new lib.Символ31();
	this.btn.setTransform(142.6,351.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 13
	this.posle = new lib.Символ14();
	this.posle.setTransform(227.6,386.5,0.141,2.96);
	new cjs.ButtonHelper(this.posle, 0, 1, 2, false, new lib.Символ14(), 3);

	this.timeline.addTween(cjs.Tween.get(this.posle).wait(1));

	// Слой 14
	this.doo = new lib.Символ13();
	this.doo.setTransform(21.1,459.5,0.375,3.058);
	new cjs.ButtonHelper(this.doo, 0, 1, 2, false, new lib.Символ13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.doo).wait(1));

	// Слой 10
	this.main1 = new lib.Символ36();
	this.main1.setTransform(164.3,264.5,1,1,0,0,0,81.6,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.main1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.7,139,748.2,658.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/bas.png?1462528440623", id:"bas"},
		{src:"images/game.png?1462528440623", id:"game"},
		{src:"images/hok.png?1462528440623", id:"hok"}
	]
};



// symbols:



(lib.bas = function() {
	this.initialize(img.bas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,324);


(lib.game = function() {
	this.initialize(img.game);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2560,1440);


(lib.hok = function() {
	this.initialize(img.hok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,324);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hok();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,313,324);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bas();
	this.instance.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20,313,324);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKBtQgFgBgEgEQgFgEgCgGQgCgHAAgKQAAgKACgHQACgGAFgEQAEgEAFgBIAKgCIALACQAGABAEAEQAEAEACAGQADAHAAAKQAAAKgDAHQgCAGgEAEQgEAEgGABIgLABgAgUAaIgCgdIAAgBIgHhpIA7AAIgJCHg");
	this.shape.setTransform(8,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhLDGIAAmLICXAAIAAGLgAgGAdQgGABgEAEQgEAEgCAHQgDAGAAAKQAAAKADAHQACAGAEAEQAEAEAGABIAJABIAMgBQAFgBAEgEQAEgEADgGQACgHAAgKQAAgKgCgGQgDgHgEgEQgEgEgFgBIgMgBgAgSgUIAAABIACAeIAoAAIAJiIIg6AAg");
	this.shape_1.setTransform(7.7,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,39.7);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACVBtIAAjZIA9AAIAADZgAgWhsIA7AAIAABEIA1ACQAMABAJAIIAJAJIAFAKIABAEIACAAIABAFIACAIIAAAyQgCALgDAIQgCAHgEAGIgJAKQgJAHgMACIhwABgAAlAwIAZAAIAFgDIADgEIABgJIgBgJIgDgEIgFgDIgZAAgAjRhsIBlAAIAOACQAIABAHAEQAIADAFAHQAGAHADALQAEALAAAQQAAASgGALIgEAHIgGAJIgEAAIAAABQAGAAAGAFQAEAFAEAGQADAHABAIQACAHAAAKQAAAQgEALQgDALgGAHQgGAHgHADQgIADgHACIh5ABgAiUAwIAegBQAEgBAAgIQAAgHgEgBIgegBgAiUgbIAUAAIAKgBQAEgBAAgIQAAgHgEgBIgegBg");
	this.shape.setTransform(33,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlDDGIAAmLIKGAAIAAGLgACaBcIA+AAIAAjZIg+AAgAgQBcIBwgBQAMgCAJgHIAJgKQADgGADgIQADgHABgLIAAgxIgBgJIgBgFIgCAAIgBgEIgFgKIgJgKQgJgHgMgCIg1gCIAAhDIg7AAgAjMBcIB6gBQAHgCAHgEQAHgCAHgIQAFgHAEgLQAEgLgBgQQABgJgCgIQgCgHgCgGQgEgFgEgFQgGgFgHgDIAAgBIAFAAIAGgIIAEgHQAGgMAAgRQAAgQgEgMQgEgKgFgIQgGgGgHgEQgHgDgIgBIgOgCIhmAAgAArAeIAAgeIAZAAIAEACIADAEIACAIIgCAJIgDAFIgEACgAiOAMIAdAAQAFACAAAHQAAAIgFABIgdAAgAiOgtIAAgSIAdABQAFAAAAAIQAAAHgFABIgKABg");
	this.shape_1.setTransform(32.4,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,39.7);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOOBtIAAjZICGAAIAABBIhJAAIAAAQIBCAAIAAA4IhCAAIAAAQIBJAAIAABAgAMABtIAAiWIgtAAIAAhDICXAAIAABDIgtAAIAACWgAI3BtIAAjZICGAAIAABBIhIAAIAAAQIBCAAIAAA4IhCAAIAAAQIBIAAIAABAgAHyBtIgJggIg1AAIgIAgIg0AAIAAgOQAAgQADgOQACgPAFgQIAOgoIABAAIAhhmIA5AAIAhBmIABAAIAOAoQAFAQACAOQACAOAAARIAAAOgAHEAMIAUAAIgCgNIAAAAIgIgxIgHAxIgBAAgADIBtIAAjZIBlAAIAPACQAHABAIAEQAHADAGAHQAFAHAEALQADALAAAQQABASgGAMIgEAHIgGAIIgFAAIAAABQAHAAAFAFQAFAFADAHIAFAOIABARQAAAQgDALQgEALgGAHQgFAHgIADQgHADgHACIgPABgAEGAwIAdgBQAEgBAAgIQAAgHgEgBIgdgBgAEGgbIATAAIAKgBQAEgBAAgIQAAgHgEgBIgdgBgABvBtIAAjZIA9AAIAADZgAg8hsIA8AAIAABEIA0ACQAMABAKAIIAIAJQADAFACAGIACADIACAAIABAFIABAIIAAAyQgBALgDAIQgDAIgEAFIgIAKQgKAHgMACIhwABgAAAAwIAYAAIAFgDIADgEIABgJIgBgJIgDgEIgFgCIgYAAgAjxBtIAAjZIByACQAMACAKAHQAJAHAGAQQADAIAAAKIAAAyIAAAFIAAAAIAAAAIgDAIQgGAQgJAIQgKAHgMACIg1ACIAABDgAi0gPIAUAAIAFAAIAFgCIADgFIAAgRIgDgFIgFgCIgFAAIgUAAgAmIBtIAAjZICGAAIAABBIhIAAIAACYgAnhBtIAGhuIgCAAIhFBuIgvAAIAAjZIA9AAIgFBtIAFgHIADAAIA+hmIAwAAIAADZgAqqBtIAAjZIA9AAIAADZgAtXhsIA9AAIAABEIA1ACQAMABAKAIIAIAJIAFALIABADIACAAIACAFIABAIIAAAyQgBALgEAIQgCAIgEAFIgIAKQgKAHgMACIhyABgAsaAwIAZAAIAFgDIACgEIABgJIgBgJIgCgEIgFgCIgZAAgAwSBtIAAjZIB0ACQAHABAHAEQAHADAHAHQAFAHAEALQADALAAAQQAAASgFAMIgFAHIgGAIIgEAAIAAABQAHAAAEAFQAGAFACAHIAGAOIABARQgBAQgDALQgDALgHAHQgFAHgHADQgIADgHACIgOABgAvVAwIAegBQADgBAAgIQAAgHgDgBIgegBgAvVgbIAUAAIAKgBQADgBAAgIQAAgHgDgBIgegBg");
	this.shape.setTransform(116.4,18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AyKDGIAAmLMAkUAAAIAAGLgAOOBeICGAAIAAhAIhJAAIAAgQIBDAAIAAg3IhDAAIAAgRIBJAAIAAhAIiGAAgALUg4IAtAAIAACWIA8AAIAAiWIAtAAIAAhCIiWAAgAI3BeICGAAIAAhAIhIAAIAAgQIBDAAIAAg3IhDAAIAAgRIBIAAIAAhAIiGAAgAHqA/IAJAfIAxAAIAAgNQAAgRgBgOQgDgPgFgPIgNgoIgCAAIgghmIg5AAIghBmIgBAAIgPAoQgFAQgCAOQgDAOAAARIAAANIA1AAIAIgfgADJBeIBrAAIAOgBQAIgBAHgEQAHgCAFgIQAGgGAEgMQAEgKAAgRIgCgRIgEgNQgEgGgFgEQgEgFgHgCIAAgBIAEAAIAHgIIADgIQAGgLAAgSQAAgRgDgKQgEgMgFgGQgHgHgHgDQgHgEgIgBIgOgCIhlAAgABwBeIA9AAIAAjYIg9AAgAg8BeIBwgBQAMgBAKgHIAIgKQAEgFADgJQADgHACgLIAAgwIgCgKIgBgFIgCAAIgCgDQgBgHgEgEIgIgJQgKgIgMgBIg0gDIAAhDIg8AAgAjxBeIA9AAIAAhCIA2gDQALgBAKgIQAJgHAGgOIADgKIAAAAIABAAIAAgFIAAgyQgBgLgDgHQgGgRgJgGQgKgIgLgBIhzgCgAmHBeIA9AAIAAiYIBIAAIAAhAIiFAAgAnbgPIgFBtIA9AAIAAjYIgwAAIg+BmIgDAAIgFAJIAFhvIg9AAIAADYIAwAAIBEhtgAqqBeIA9AAIAAjYIg9AAgAtXBeIBzgBQALgBAKgHIAIgKQAEgFADgJQADgHABgLIAAgwIgBgKIgCgFIgBAAIgBgDIgGgLIgIgJQgKgIgLgBIg1gDIAAhDIg+AAgAwSBeIBrAAIAPgBQAHgBAHgEQAIgCAFgIQAGgGAEgMQADgKAAgRIgBgRIgFgNQgDgGgFgEQgFgFgHgCIAAgBIAFAAIAGgIIAEgIQAGgLAAgSQAAgRgEgKQgDgMgGgGQgGgHgHgDQgIgEgHgBIh0gCgAEGAOIAeABQADABAAAIQAAAHgDABIgeABgAAAAhIAAgeIAYAAIAGABIADAFIAAAJIAAAJIgDAEIgGACgAsZAhIAAgeIAZAAIAEABIADAFIABAJIgBAJIgDAEIgEACgAvVAOIAeABQAEABAAAIQAAAHgEABIgeABgAHFgBIACgOIABAAIAHgyIAIAyIAAAAIACAOgAi0gdIAAgfIAUAAIAGAAIAEACIAEAEIAAASIgEAFIgEABIgGABgAEGgpIAAgTIAeABQADABAAAHQAAAIgDABIgKABgAvVgpIAAgTIAeABQAEABAAAHQAAAIgEABIgKABg");
	this.shape_1.setTransform(116.3,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232.6,39.7);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAXIAAgtIBHAAIAAAtg");
	this.shape.setTransform(9,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhZDGIAAmLICzAAIAAGLgAgjAPIBGAAIAAgsIhGAAg");
	this.shape_1.setTransform(9.1,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,39.7);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjxBqQgJgDgHgGQgIgFgHgHQgFgGgFgKQgFgIgDgLQgGgWAAgcIAAgCIAAgDIAAAAIAAgEQACgWAEgRQADgLAFgJQAFgJAFgHQANgOASgGQASgHAYAAQAXAAASAHQASAGAMAOQANAOAFAWQAGARABAWIAAAEIAAAEIAAABQAAAcgHAWQgFAWgNANQgGAHgHAFQgIAGgJADQgSAGgXAAQgYAAgSgGgAjigjQgEAFgDAJIgBAMIgBAIIAAABQAAANACAKQADAIAEAFQAFAFAGABIAQACIAPgCQAHgBADgFQAFgFADgIQACgKAAgNIAAgBIAAgIIgCgMQgDgJgFgFQgDgFgHgBIgfAAQgGABgFAFgADsBtIAFhuIgCAAIhEBuIgwAAIAAjYIA+AAIgGBtIAGgHIACAAIA+hmIAwAAIAADYgAAiBtIAAhOIgzAAIAABOIg9AAIAAjYIA9AAIAABOIAzAAIAAhOIA9AAIAADYg");
	this.shape.setTransform(42.3,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmnDGIAAmLINPAAIAAGLgAkqgJIAAACQAAAcAGAWQADALAFAJQAFAJAFAGQAHAHAIAGQAHAFAJADQASAHAYgBQAXABASgHQAJgDAIgFQAHgGAGgHQANgNAFgWQAHgWAAgcIAAAAIAAgFIAAgEQgBgWgGgRQgFgWgNgOQgMgOgSgGQgSgHgXAAQgYAAgSAHQgSAGgNAOQgFAIgFAIQgFAJgDALQgEARgCAWIAAAEIAAAAIAAADgADvgHIgFBtIA9AAIAAjYIgwAAIg+BmIgDAAIgFAJIAFhvIg9AAIAADYIAwAAIBEhtgAAgAYIAABOIA9AAIAAjYIg9AAIAABOIgzAAIAAhOIg9AAIAADYIA9AAIAAhOgAjZAkQgGgCgFgEQgEgFgDgJQgCgKAAgNIAAAAIABgJIABgMQADgJAEgEQAFgGAGgBIAfAAQAHABADAGQAFAEADAJIACAMIAAAJIAAAAQAAANgCAKQgDAJgFAFQgDAEgHACIgPABg");
	this.shape_1.setTransform(42.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.9,39.7);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD0BdQgMgJgHgQQgIgQgDgVIgSAAIAABOIg9AAIAAjYIA9AAIAABOIASAAQADgVAHgQQAIgQAMgJQAYgUApAAQAXAAASAHQASAHAMANQAMAOAHAWQAEARACAWIAAAEIAAAEIAAABQAAAcgGAWQgHAWgMANQgGAHgIAGQgHAFgJADQgSAGgXAAQgpAAgYgTgAEagjQgFAFgCAJIgCAMIAAAHIAAACQAAANACAKQACAIAFAFQAFAFAGABIAQACIAOgCQAHgBAFgFQAEgFACgIQADgKAAgNIAAgBIAAgIIgDgMQgCgJgEgFQgFgFgHgBIgeAAQgGABgFAFgAHVBtIAAiWIgtAAIAAhCICWAAIAABCIgsAAIAACWgABEBtIgIgfIg2AAIgGAfIg0AAIAAgNQAAgRADgOQACgOAFgQIAOgoIACAAIAfhmIA4AAIAhBmIABAAIAOAoQAFAPACAPQADAOAAARIAAANgAAXAMIAUAAIgCgNIgBAAIgHgxIgHAxIgBAAgAjeBtIAAjYIByABQAMACAKAHQAJAHAGAQQADAIABALIAAAyIAAAEIgBAAIAAABIgDAHQgGARgJAHQgKAHgMACIg0ACIAABDgAiggOIATAAIAFgBIAFgBIADgFIABgJIgBgJIgDgFIgFgBIgFgBIgTAAgAl0BtIAAjYICGAAIAABAIhJAAIAACYgAnNBtIAFhuIgBAAIhFBuIgvAAIAAjYIA9AAIgFBtIAFgHIADAAIA+hmIAvAAIAADYg");
	this.shape.setTransform(69.3,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Aq1DGIAAmLIVrAAIAAGLgADUAUQADAWAIAPQAIAQAMAKQAXASApABQAXgBASgGQAJgDAHgFQAIgGAGgGQANgOAGgWQAGgVAAgdIAAgBIAAgEIAAgEQgBgWgFgQQgGgXgNgNQgMgOgSgHQgSgHgXAAQgpAAgXAUQgMAJgJARQgHAPgDAVIgSAAIAAhOIg8AAIAADZIA8AAIAAhPgAGngzIAsAAIAACWIA9AAIAAiWIAsAAIAAhDIiVAAgAA6BDIAIAgIAzAAIAAgOQAAgRgDgOQgCgPgFgPIgOgoIgBAAIghhmIg4AAIgfBmIgCAAIgNAoQgGAQgCAPQgCANAAARIAAAOIAzAAIAGgggAjfBjIA9AAIAAhEIA0gBQANgCAJgIQAJgHAGgPIADgJIAAgBIABAAIABgEIAAgyQgCgKgDgJQgGgQgJgHQgJgHgNgCIhxgBgAl1BjIA9AAIAAiZIBJAAIAAhAIiGAAgAnJgMIgGBvIA+AAIAAjZIgwAAIg+BmIgDAAIgFAJIAFhvIg9AAIAADZIAwAAIBFhvgAEjAfQgGAAgEgGQgFgEgDgJQgBgJAAgOIAAgCIAAgHIABgLQADgKAFgFQAEgEAGgBIAeAAQAHABAFAEQAFAFABAKIADALIAAAIIAAABQAAAOgDAJQgBAJgFAEQgFAGgHAAIgOACgAAVACIACgOIABAAIAHgwIAHAwIABAAIACAOgAiigZIAAggIAUAAIAEABIAGABIACAGIABAIIgBAJIgCAFIgGACIgEAAg");
	this.shape_1.setTransform(69.5,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.9,39.7);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#974C1D","#4E261C"],[0,1],41.3,-85.3,-90.9,46.9).s().p("ApnpSITPDyIu3Ozg");
	this.shape.setTransform(79.3,61.8,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.7,123.7);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3F1B0F","#663618"],[0,1],96.5,-53.8,-46.3,88.9).s().p("AqYFiIO3u0IF6Slg");
	this.shape.setTransform(85.6,61.8,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.3,123.6);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA541C","#883D15"],[0,1],-41,-47.9,52.9,27.8).s().p("Al9piIL7gGInlTSg");
	this.shape.setTransform(38.3,61.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.5,123.6);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#60270C","#863E13"],[0,1],-48.4,-7.8,27.9,53.7).s().p("ABTqwIEMTLIq9CWg");
	this.shape.setTransform(35.2,69);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.3,137.9);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A14116","#9E4816"],[0,1],-71.3,-73.8,110,72.3).s().p("AuXCsIcvtcImzVhg");
	this.shape.setTransform(92,69);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.1,137.9);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6641F","#E38527"],[0,1],-117.7,-65.5,61.5,78.8).s().p("As5nrIbqB8I9hNbg");
	this.shape.setTransform(94.5,49.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,98.6);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F6AA2C","#DB8225"],[0,1],-31.9,-63.7,78.4,25.1).s().p("AoImUIQRhkIiGPxg");
	this.shape.setTransform(52.1,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.3,101.1);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EA8925","#BA551A"],[0,1],50.6,-18.8,-22.1,53.9).s().p("AlVFiIKrtUIhvPlg");
	this.shape.setTransform(44.2,51.8,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.4,103.6);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D68623","#CA7822"],[0,1],69.3,-63.6,-56.6,62.3).s().p("AouFaIBvvlIPuUXg");
	this.shape.setTransform(72.1,67.7,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.2,135.3);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F5B12A","#EFA229"],[0,1],-84.5,-92.8,123.4,74.7).s().p("Au4m4IdxkCI0UV1g");
	this.shape.setTransform(95.4,69.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.8,139.8);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F69328","#F1AF2A"],[0,1],-40.1,-17.1,27.6,37.5).s().p("Ak6AjIAQpKIJlRPg");
	this.shape.setTransform(31.6,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.1,110.6);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9A129","#F9B12B"],[0,1],-21,-17.4,19.2,15).s().p("ACfmDIAJJpIlPCeg");
	this.shape.setTransform(16.8,38.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.7,77.7);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8AC2B","#FAC92F"],[0,1],-59.5,-61,86.1,56.4).s().p("Aq/DTIV/pMIlHLzg");
	this.shape.setTransform(70.5,37.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.9,75.7);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FACC32","#FACA42"],[0,1],-65.3,-73.5,91.3,52.7).s().p("Am6k7IQJBkIydITg");
	this.shape.setTransform(59.2,31.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.4,63.4);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FACA30","#F9C037"],[0,1],-122.1,-97.1,85.8,70.4).s().p("ADUkEILeEII9jEBg");
	this.shape.setTransform(94.6,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.3,52.4);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAD532","#FAD73A"],[0,1],-63.6,-102.8,162.1,76.5).s().p("Awak7MAg1AAAIirJ3g");
	this.shape.setTransform(105.2,31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,210.4,63.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9DA32","#FAE134"],[0,1],92.6,-71.4,-64.4,85.6).s().p("ArsAQIXZpSImJSFg");
	this.shape.setTransform(97.7,60.9,1.304,1.051,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.4,121.9);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#201517","#461E15"],[0,1],11,-28.8,-18,0.2).s().p("AiLusIEWSlIj6K0g");
	this.shape.setTransform(0,0,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-97.7,36.1,195.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAEE37","#FAE634"],[0,1],51.9,-34.1,-34.2,52).s().p("AAApCIGHQkIsOBhg");
	this.shape.setTransform(51.9,61.9,1.325,1.068,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.9,123.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9CB2F","#FAEB36"],[0,1],63,-67.7,-69.3,64.6).s().p("ApYoSISyPUIsrBRg");
	this.shape.setTransform(82,58.3,1.362,1.098,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.1,116.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#85400F","#85390E"],[0,1],70.7,-51.8,-45.1,64).s().p("AohCpIRDnxInPKSg");
	this.shape.setTransform(0,0,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-34.2,140.6,68.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#924814","#984712"],[0,1],42.8,-61.1,-67.1,48.8).s().p("Ag2lIII8CRIwLIBg");
	this.shape.setTransform(0,0,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-34.2,133.4,68.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F59529","#F09928"],[0,1],38.8,-40.6,-40.2,38.4).s().p("AB9j4IDvCxIrXFAg");
	this.shape.setTransform(0.5,0,1.288,1.037,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.4,-25.8,93.8,51.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkeCZQgEAAgDgDQgEgDAAgFIBAkXIABgCQABgFAFgEQAFgEAGAAIH2AAQAEAAAEAEQADADAAAEIhBEXIAAADQgFAMgMAAg");
	this.shape.setTransform(51.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNCZQgEgBgDgDQgDgDAAgEIAAgBIBBkYQACgGAFgDQAEgEAGAAIBUAAQAJACAAAJIAAACIgBAAIhBEaQgEAJgJABg");
	this.shape_1.setTransform(12.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMCZQgGgBgBgFIgBgEQgShYgDAAIgCAAIgVBbQgDAHgHAAIhbAAQgKgBAAgKIBBkZQADgMANgBIBpAAQA4gBAgAZQAkAdgJA3QgFAhgWAQQgRAPglAMQAPAHAbBjIABADIAAABQAAAFgDADQgDADgFAAgAgDgQIAGAAQArACAFgdQADgQgKgGQgHgFgUAAIgKAAg");
	this.shape_2.setTransform(-9.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2CZQgHgBgCgFIgCghIhKAAIgOAjQgDADgFABIhYAAQgFAAgDgDQgDgDAAgFIAAgCICUkdQAEgGAFgBIBiAAQAHABADAHIAAADIAoEcQAAAJgKABgAAnAqIgEhSIgCAAIgiBSIAoAAIAAAAg");
	this.shape_3.setTransform(-42.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiJCZQgFAAgDgDQgDgDAAgFIAAgBIBAkXQACgGAFgEQAEgEAHAAIBrAAQA4AAAdAcQAeAdgIA4QgIAtgfAbQggAbgvAAIgwAAIgTBTIgBAEQgCAFgHABgAgBgPIAJAAQApAAAEgcQADgPgLgHQgIgDgRAAIgLAAg");
	this.shape_4.setTransform(-66,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-15.3,162,30.7);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAMCZQgEAAgDgDQgEgEAAgEIAWhgIhDAAIgVBfQgFAMgMAAIhUAAQgEAAgEgDQgDgEAAgEIBAkVIABgGQAEgLANAAIBVAAQAJACAAAJIgBAFIgTBYIBCAAIAUhZIABgBQACgMAOgCIBWAAQAKACAAAJIgBACIAAABIhAEWQgCAFgEAEQgFAEgGAAg");
	this.shape.setTransform(90.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiYCOIABgEICSkaQAFgHAHgBIBgAAQAIABABAHIAoEeQAAAFgCADQgEACgEAAIhYAAQgHAAgDgIIgBgeIhKAAIgOAgIAAABQgCAFgHAAIhXABQgLgBAAgKgAAnAqIgEhRIgCAAIgiBRIAoAAIAAAAg");
	this.shape_1.setTransform(4.4,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhkCZQgJgCAAgJIAAAAIAujEIg+AAQgKgBAAgKIAAgCIAAgBIAQhGQADgNANgBIDlAAQAEAAADADQADADAAAFIAAABIAAACIgQBHQgEANgNAAIg5AAIgtDDQgCAMgNAAg");
	this.shape_2.setTransform(33.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah6B3QgjgoAIhFQAIhOAxguQAzgyBOAEQBBACAdAjQAUAYABAjIAAABQAAAHgFAFQgGAFgHAAIhWAAQgEAAgDgEIgBgCQgGgJgQAAQgSAAgRAdQgPAYgCARQgFAvAbAFQAIACAIgFQAJgFAGgJIABgBQADgFAGAAIBSABQAHAAAFAFQAFAFAAAHIgBAGQgJAlgaAZQgmAkg/ABIgFAAQhIAAgkgqg");
	this.shape_3.setTransform(60.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA6CZQgFAAgCgDQgDgDAAgFIAAgBIAAgCIAjiYIgCAAQgDAJhOCWIAAACQgDAFgGAAIg0AAQgIAAgCgIIAAgEQgKiJACgRIgkCdIAAABQgCAIgJAAIhJAAQgFAAgDgDQgDgDAAgFIAAgBIBAkVIACgEQAEgMAMAAIBkAAQAHABACAHIAICXIACAAIAghAIAqhTIACgEQAGgIAJAAIB3AAQAEABADADQADADAAAEIhCEfQgDAHgHAAg");
	this.shape_4.setTransform(-28.1,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkeCYQgEAAgDgCQgEgDAAgFIAAgBIBAkWIABgCQADgNAOAAIH2AAQAEAAAEADQADADAAAEIgBADIAAAAIhAEUIAAAEQgEALgNABg");
	this.shape_5.setTransform(-78.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-16.1,216.8,32.3);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.setTransform(-133.8,-8.2,1,1,0,0,0,156.5,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.3,-170.2,313,324);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.setTransform(0.3,-0.2,1,1,0,0,0,156.5,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.2,-142.2,313,324);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.3},17,cjs.Ease.get(-1)).to({y:0},19,cjs.Ease.get(1)).to({y:5.2},19,cjs.Ease.get(-1)).to({y:10},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.3,-160.2,313,324);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.9},15,cjs.Ease.get(-1)).to({y:10},16,cjs.Ease.get(1)).to({y:4.9},16,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.2,-142.2,313,324);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-97.7,36.1,195.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(0,0,1,1,0,0,0,79.3,61.8);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},25).to({alpha:0.898},22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.3,-61.8,158.6,123.7);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.setTransform(0,0,1,1,0,0,0,85.6,61.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},23).to({alpha:1},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.6,-61.8,171.3,123.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.setTransform(0,0,1,1,0,0,0,38.2,61.8);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0.898},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-61.8,76.5,123.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.setTransform(0,0.1,1,1,0,0,0,35.1,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},23).to({alpha:1},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,-68.9,70.3,137.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(0,0.1,1,1,0,0,0,92,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-68.9,184.1,137.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();
	this.instance.setTransform(2,-0.1,1,1,0,0,0,94.5,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},19).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-49.3,189.1,98.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(-0.7,1.2,1,1,0,0,0,52.1,50.5);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},13).to({alpha:0.898},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-49.3,104.3,101.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(0,0,1,1,0,0,0,44.1,51.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},29).to({alpha:1},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-51.8,88.4,103.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(0,0.1,1,1,0,0,0,72.1,67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},25).to({alpha:1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.1,-67.6,144.2,135.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.setTransform(0.6,-1.1,1,1,0,0,0,31.6,55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},29).to({alpha:1},27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-56.3,63.1,110.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(0.2,-1.3,1,1,0,0,0,16.8,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},26).to({alpha:1},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,-40.1,33.7,77.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(0.3,-0.3,1,1,0,0,0,70.5,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},22).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-38.1,140.9,75.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(-0.7,2.3,1,1,0,0,0,95.4,69.9);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},41).to({alpha:0.898},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.1,-67.6,190.8,139.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(0,-0.2,1,1,0,0,0,94.6,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},36).to({alpha:1},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-26.4,189.3,52.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(1.5,0.8,1,1,0,0,0,59.2,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},12).to({alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-30.9,118.4,63.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(1.1,1.3,1,1,0,0,0,105.2,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},14).to({alpha:1},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.1,-30.9,210.4,63.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(2.3,0.9,1,1,0,0,0,97.7,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},26).to({alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.4,-60.1,195.4,121.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(2,1.8,1,1,0,0,0,52,61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},19).to({alpha:1},19).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-60.1,103.9,123.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(-1,2.5,1,1,0,0,0,82,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},9).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-55.8,164.1,116.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.setTransform(582.8,79.6,1,1,38.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({rotation:0,x:500.8,y:-12.5,alpha:1},7,cjs.Ease.get(1)).wait(208).to({rotation:38.9,x:582.8,y:79.6,alpha:0},7).wait(9));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(405.4,-177.4,1,1,23);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({rotation:0,x:439.5,y:-47.4,alpha:1},7,cjs.Ease.get(1)).wait(220).to({rotation:23,x:405.4,y:-177.4,alpha:0},7).wait(7));

	// Символ 28
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(474.2,110.3,1,1,20.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:398.2,y:-23.3,alpha:1},7,cjs.Ease.get(1)).wait(233).to({rotation:20.2,x:474.2,y:110.3,alpha:0},7).wait(3));

	// Символ 25
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(326,-144.2,1,1,-29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({rotation:0,x:323,y:-23.3,alpha:1},7,cjs.Ease.get(1)).wait(230).to({rotation:-29.2,x:326,y:-144.2,alpha:0},7).wait(1));

	// Символ 24
	this.instance_4 = new lib.Символ24();
	this.instance_4.setTransform(338.4,100.8,1,1,-31.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({rotation:0,x:277.4,y:-15.5,alpha:1},7,cjs.Ease.get(1)).wait(213).to({rotation:-31.5,x:338.4,y:100.8,alpha:0},7).wait(6));

	// Символ 23
	this.instance_5 = new lib.Символ23();
	this.instance_5.setTransform(288.7,139.1,1,1,41.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({rotation:0,x:193.7,y:-15.5,alpha:1},7,cjs.Ease.get(1)).wait(225).to({rotation:41.5,x:288.7,y:139.1,alpha:0},7).to({_off:true},2).wait(2));

	// Символ 22
	this.instance_6 = new lib.Символ22();
	this.instance_6.setTransform(217.4,123);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({x:172,y:35.9,alpha:1},7,cjs.Ease.get(1)).wait(231).to({x:217.4,y:123,alpha:0},7).wait(3));

	// Символ 21
	this.instance_7 = new lib.Символ21();
	this.instance_7.setTransform(122.4,129,1,1,15.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({rotation:0,x:94.4,y:35.9,alpha:1},7,cjs.Ease.get(1)).wait(215).to({rotation:15.7,x:122.4,y:129,alpha:0},7).wait(9));

	// Символ 20
	this.instance_8 = new lib.Символ20();
	this.instance_8.setTransform(222.1,-133.7,1,1,-21);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({_off:false},0).to({rotation:0,x:194.2,y:-47.5,alpha:1},7,cjs.Ease.get(1)).wait(219).to({rotation:-21,x:222.1,y:-133.7,alpha:0},7).wait(1));

	// Символ 19
	this.instance_9 = new lib.Символ19();
	this.instance_9.setTransform(102.1,-156.7,1,1,21.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({rotation:0,x:64.7,y:-47.5,alpha:1},7,cjs.Ease.get(1)).wait(213).to({rotation:21.5,x:102.1,y:-156.7,alpha:0},7).wait(5));

	// Символ 18
	this.instance_10 = new lib.Символ18();
	this.instance_10.setTransform(99.9,70.1,1,1,15.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({rotation:0,x:57.5,y:-35,alpha:1},7,cjs.Ease.get(1)).wait(228).to({rotation:15.7,x:99.9,y:70.1,alpha:0},7).wait(2));

	// Символ 17
	this.instance_11 = new lib.Символ17();
	this.instance_11.setTransform(-10.3,29.9,1,1,15.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({rotation:0,x:-42.3,y:-19.2,alpha:1},7,cjs.Ease.get(1)).wait(228).to({rotation:15.5,x:-10.3,y:29.9,alpha:0},7).wait(7));

	// Символ 16
	this.instance_12 = new lib.Символ16();
	this.instance_12.setTransform(-181.3,96,1,1,-31.7);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(11).to({_off:false},0).to({rotation:0,x:-161.3,y:22.6,alpha:1},7,cjs.Ease.get(1)).wait(216).to({rotation:-31.7,x:-181.3,y:96,alpha:0},7).wait(9));

	// Символ 15
	this.instance_13 = new lib.Символ15();
	this.instance_13.setTransform(-128.8,33.7,1,1,14.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({rotation:0,x:-146,y:-5.8,alpha:1},7,cjs.Ease.get(1)).wait(227).to({rotation:14.2,x:-128.8,y:33.7,alpha:0},7).wait(4));

	// Символ 14
	this.instance_14 = new lib.Символ14();
	this.instance_14.setTransform(-245.3,10.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).to({x:-191,y:-22.5,alpha:1},7,cjs.Ease.get(1)).wait(218).to({x:-245.3,y:10.9,alpha:0},7).wait(3));

	// Символ 13
	this.instance_15 = new lib.Символ13();
	this.instance_15.setTransform(-274.2,69.4,1,1,18.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).to({rotation:0,x:-245.1,y:-22.5,alpha:1},7,cjs.Ease.get(1)).wait(223).to({rotation:18.2,x:-274.2,y:69.4,alpha:0},7).to({_off:true},4).wait(2));

	// Символ 12
	this.instance_16 = new lib.Символ12();
	this.instance_16.setTransform(-28.7,-95.3,1,1,-31.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({_off:false},0).to({rotation:0,x:-79.3,y:-19.2,alpha:1},7,cjs.Ease.get(1)).wait(229).to({rotation:-31.2,x:-28.7,y:-95.3,alpha:0},7).wait(5));

	// Символ 11
	this.instance_17 = new lib.Символ11();
	this.instance_17.setTransform(-25.2,-160,1,1,-15);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(11).to({_off:false},0).to({rotation:0,x:-79.3,y:-86,alpha:1},7,cjs.Ease.get(1)).wait(217).to({rotation:-15,x:-25.2,y:-160,alpha:0},7).wait(8));

	// Символ 10
	this.instance_18 = new lib.Символ10();
	this.instance_18.setTransform(-98.7,-189,1,1,22.2);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({rotation:0,x:-116.7,y:-91,alpha:1},7,cjs.Ease.get(1)).wait(232).to({rotation:22.2,x:-98.7,y:-189,alpha:0},7).wait(4));

	// Символ 9
	this.instance_19 = new lib.Символ9();
	this.instance_19.setTransform(-272.2,-185,1,1,-29.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(15).to({_off:false},0).to({rotation:0,x:-263.2,y:-91,alpha:1},7,cjs.Ease.get(1)).wait(211).to({rotation:-29.2,x:-272.2,y:-185,alpha:0},7).wait(10));

	// Символ 8
	this.instance_20 = new lib.Символ8();
	this.instance_20.setTransform(-316.4,-47.3);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(6).to({_off:false},0).to({x:-270.4,y:-61.8,alpha:1},7,cjs.Ease.get(1)).wait(226).to({x:-316.4,y:-47.3,alpha:0},7).to({_off:true},1).wait(3));

	// Символ 7
	this.instance_21 = new lib.Символ7();
	this.instance_21.setTransform(-428.2,14.2);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(12).to({_off:false},0).to({x:-366.8,y:-61.8,alpha:1},7,cjs.Ease.get(1)).wait(215).to({x:-428.2,y:14.2,alpha:0},7).wait(9));

	// Символ 6
	this.instance_22 = new lib.Символ6();
	this.instance_22.setTransform(-513.4,-107.8);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({_off:false},0).to({x:-444.3,y:-66.8,alpha:1},7,cjs.Ease.get(1)).wait(230).to({x:-513.4,y:-107.8,alpha:0},7).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.4,-239.4,740.3,437.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 66
	this.instance = new lib.Символ66();
	this.instance.setTransform(269.9,0,0.071,1,0,0,0,7.8,19.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({regX:7.7,scaleX:1,x:270},10,cjs.Ease.get(1)).wait(175).to({y:-9.1},4,cjs.Ease.get(0.99)).to({y:100.7},6,cjs.Ease.get(-1)).wait(1));

	// Символ 65
	this.instance_1 = new lib.Символ65();
	this.instance_1.setTransform(227,0,0.029,1,0,0,0,32.4,19.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({scaleX:1},10,cjs.Ease.get(1)).wait(180).to({y:-9.1},4,cjs.Ease.get(0.99)).to({y:100.7},6,cjs.Ease.get(-1)).wait(2));

	// Символ 64
	this.instance_2 = new lib.Символ64();
	this.instance_2.setTransform(74.8,0,0.009,1,0,0,0,116.2,19.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({regX:116.3,scaleX:1},10,cjs.Ease.get(1)).wait(182).to({y:-9.1},4,cjs.Ease.get(0.99)).to({y:100.7},6,cjs.Ease.get(-1)).wait(4));

	// Символ 63
	this.instance_3 = new lib.Символ63();
	this.instance_3.setTransform(-53.2,0,0.1,1,0,0,0,9.1,19.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({scaleX:1},10).wait(185).to({y:-9.1},4,cjs.Ease.get(0.99)).to({y:100.7},6,cjs.Ease.get(-1)).wait(6));

	// Символ 62
	this.instance_4 = new lib.Символ62();
	this.instance_4.setTransform(-107.5,0,0.019,1,0,0,0,42.5,19.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({scaleX:1},10,cjs.Ease.get(1)).wait(188).to({y:-9.1},4,cjs.Ease.get(0.99)).to({y:100.7},6,cjs.Ease.get(-1)).wait(8));

	// Символ 61
	this.instance_5 = new lib.Символ61();
	this.instance_5.setTransform(-222.3,88.7,1,1,0,0,0,69.5,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({scaleX:0.01,x:-222.4,y:0},0).to({scaleX:1,x:-222.3},10,cjs.Ease.get(1)).wait(191).to({y:-9.1},4,cjs.Ease.get(0.99)).to({y:100.7},6,cjs.Ease.get(-1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.8,68.8,138.9,39.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(-60,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({x:-198.6,y:-14.3,alpha:0},0).to({x:-60,y:-18,alpha:1},14,cjs.Ease.get(1)).wait(186).to({x:-198.6,y:-14.3,alpha:0},14,cjs.Ease.get(-1)).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(32.7,245.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({x:108.4,y:17.2,alpha:0},0).to({x:32.7,alpha:1},14,cjs.Ease.get(1)).wait(186).to({x:108.4,alpha:0},14,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,195.1,282.1,66.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 34
	this.instance = new lib.Символ34();
	this.instance.setTransform(102.8,321.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({x:438.8,y:-30.1},0).to({x:162.8,y:-14},15,cjs.Ease.get(1)).to({x:-15.1},13,cjs.Ease.get(-1)).to({x:-179.3},12,cjs.Ease.get(1)).to({x:96.2},19,cjs.Ease.get(-1)).to({x:342.8},17,cjs.Ease.get(1)).to({x:177.9},32,cjs.Ease.get(-1)).to({x:2.7},34,cjs.Ease.get(1)).to({x:124.2},27,cjs.Ease.get(-1)).to({x:162.8},26,cjs.Ease.get(1)).to({x:-851.5,y:-30},10,cjs.Ease.get(-1)).wait(6));

	// Символ 33
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(-102.7,349.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46).to({x:395.5,y:7.9},0).to({x:-162.7,y:14},15,cjs.Ease.get(1)).to({x:-21.7},10,cjs.Ease.get(-1)).to({x:133.4},11,cjs.Ease.get(1)).to({x:-96.7,y:10},18,cjs.Ease.get(-1)).to({x:-326.7,y:6},18,cjs.Ease.get(1)).to({x:-144.5},32,cjs.Ease.get(-1)).to({x:43.4},33,cjs.Ease.get(1)).to({x:-136,y:9.9},27,cjs.Ease.get(-1)).to({x:-162.7,y:14},29,cjs.Ease.get(1)).to({x:-851.5,y:16},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.9,160.9,384.4,370);


// stage content:



(lib.pm_tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ2();
	this.instance.setTransform(590.1,561,1.037,1.037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(150.1,546.7,0.823,0.823);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Режим изоляции
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(384,605.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ35();
	this.instance_3.setTransform(642,489);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 5
	this.instance_4 = new lib.game();
	this.instance_4.setTransform(-119.7,-24,0.434,0.434);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330.3,276,1111.6,1043.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
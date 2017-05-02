(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#669933",
	manifest: [
		{src:"images/gaz.jpg?1465303584282", id:"gaz"},
		{src:"images/ita.png?1465303584282", id:"ita"},
		{src:"images/spa.png?1465303584282", id:"spa"}
	]
};



// symbols:



(lib.gaz = function() {
	this.initialize(img.gaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.ita = function() {
	this.initialize(img.ita);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,320);


(lib.spa = function() {
	this.initialize(img.spa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,373);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BD0000","#FF3300"],[0.176,1],0,50,0,-50).s().p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8C0000","#FF0000"],[0,1],0,50,0,-50).s().p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAvIAAgRQAHACAEABQAFAAADgDQAEgCACgEIAEgIIgmhAIAYAAIAXAsIAUgsIAYAAIgmBMQgEALgGAFQgHAFgMAAIgPgCg");
	this.shape.setTransform(56.5,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAwIgSgcQgFgJgEgDQgEgCgIAAIAAAqIgXAAIAAhfIAXAAIAAAnIAIgBQADgBACgEIAIgRQAGgKAFgDQAGgDAMAAIALAAIAAARIgHAAQgHAAgCABQgCABgEAFIgGAKIgFAHIgGADQAEABAGADQAGAGAGAJIAWAgg");
	this.shape_1.setTransform(47.3,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAwIAAhfIAmAAQAKAAAHABQAHABADADQAEACACAEQACAEAAAGIAAAMQAAAEgEAEQgDADgEABIAAABQAGABAFACQAEAEAAAFIAAAPQAAANgKAEQgFADgGABIgSABgAgPAgIAPAAQAJAAADgCQAEgCAAgFIAAgHQAAgGgDgCQgDgCgHAAIgSAAgAgPgHIAPAAQAHAAADgDQACgCAAgFIAAgFQAAgFgCgCQgCgBgIAAIgPAAg");
	this.shape_2.setTransform(37.3,30.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAwIgIgZIgiAAIgIAZIgXAAIAkhfIAaAAIAjBfgAAMAHIgMgjIAAAAIgMAjIAYAAg");
	this.shape_3.setTransform(27.3,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAwIAAhOIgeAAIAAgRIBRAAIAAARIgeAAIAABOg");
	this.shape_4.setTransform(19.3,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAxIgMgCQgGgCgFgDQgFgDgDgFQgDgFAAgHIAAgpQAAgPALgHQAMgIAUAAQAIAAAXAEIAAARIgQgDIgOgBIgHAAIgHACQgDABgCADQgBACAAAFIAAAnQAAAGAGAEQAGADAKAAQAHAAAWgEIAAARQgWAEgKAAg");
	this.shape_5.setTransform(10.6,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAwIAAhfIAYAAIAAAlIAQAAIAIAAIAJAAIAIABIAGADIAFADIADAEQACADAAAEIAAARQAAAMgKAFQgKAGgUAAgAgQAgIAQAAQAJAAAFgDQADgDAAgEIAAgKQAAgEgDgCQgFgCgJAAIgQAAg");
	this.shape_6.setTransform(62.6,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAwIAAhOIgeAAIAAgRIBRAAIAAARIgeAAIAABOg");
	this.shape_7.setTransform(52.9,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAwIgIgZIgiAAIgIAZIgXAAIAkhfIAaAAIAjBfgAAMAHIgMgjIAAAAIgMAjIAYAAg");
	this.shape_8.setTransform(45,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxAwIAAgPIAIAAQAFAAACgCQACgCAAgFIAAhIIBSAAIAABgIgXAAIAAhPIgjAAIAAA6QAAAFgCAFIgEAGIgGAEIgIABIgJABIgMgBg");
	this.shape_9.setTransform(33.9,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAwIAAhfIBIAAIAAARIgwAAIAAAWIAsAAIAAAPIgsAAIAAAZIAzAAIAAAQg");
	this.shape_10.setTransform(24.3,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAbA9IAAgZIg1AAIAAAZIgVAAIAAgqIAIAAQAHgLADgLIACgRIABgYIAAgQIBBAAIAABPIAJAAIAAAqgAgEgjQAAASgCAOQgDANgFAJIAeAAIAAg+IgUAAg");
	this.shape_11.setTransform(14,12.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAxIgMgCQgGgCgFgDQgFgDgDgFQgDgFAAgHIAAgpQAAgPALgHQAMgIAUAAQAIAAAXAEIAAARIgQgDIgOgBIgHAAIgHACQgDABgCADQgBACAAAFIAAAnQAAAGAGAEQAGADAKAAQAHAAAWgEIAAARQgWAEgKAAg");
	this.shape_12.setTransform(4.5,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,0,71.7,40.6);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHnBSQgHAAgEgEQgEgDAAgIIAAgHQAAgHAEgEQAEgFAHAAIAOAAQAIAAAEAFQAEAEAAAHIAAAHQAAAIgEADQgEAEgIAAgAGYBRQgEAAgEgDQgDgDAAgFIAAgcIhRAAIgIAcQgBAFgEADQgEADgFAAIgWAAQgFAAgCgDQgDgCACgFIAchsIAFgMQADgFAEgFQAHgJALgFQAJgEANgDQALgCAOAAIA+AAQAEABADADQADADAAAEIAACOQAAAFgEACQgDADgEAAgAFigvQgFABgEADIgHAHIgEAKIgKAjIBJAAIAAg6IggAAQgGAAgFACgADUBRQgEAAgEgDQgDgCAAgFIAAgtIgsAAQgQABgNgEQgNgDgJgIQgFgDgEgFQgEgEgCgEQgDgHgBgGQgBgHAAgIIAAgnQAAgEADgDQADgDAFgBIAVAAQAFABADADQADADAAAEIAAAnQAAAHACAFQACAGADADQAEAEAFABQAFACAHAAIAsAAIAAhDQAAgEADgDQAEgDAEgBIAWAAQAEABADADQAEADAAAEIAACNQAAAFgEADQgDADgEAAgAgTBRQgEAAgEgDQgDgCAAgFIAAh4IgzAAQgFAAgDgDQgDgDAAgFIAAgLQAAgEADgDQADgDAFgBICQAAQAEABAEADQADADAAAEIAAALQAAAFgDADQgEADgEAAIgzAAIAAB4QAAAFgEACQgDADgEAAgAiPBRQgEAAgEgDQgDgDAAgFIAAgcIhRAAIgIAcQgBAFgEADQgEADgFAAIgWAAQgFAAgCgDQgDgCACgFIAchsIAFgMQADgFAEgFQAHgJALgFQAJgEANgDQALgCAOAAIA+AAQAEABADADQADADAAAEIAACOQAAAFgEACQgDADgEAAgAjFgvQgFABgEADIgHAHIgEAKIgKAjIBJAAIAAg6IggAAQgGAAgFACgAlSBRQgEAAgEgDQgDgDAAgFIAAhuIgoBvQgCAFgEACQgEADgEAAIgRAAQgEAAgEgDQgEgCgCgFIgohvIAABuQAAAFgDADQgEADgEAAIgVAAQgEAAgEgDQgDgDAAgFIAAiMQAAgFADgDQADgDAFgBIAvAAQAEABAEADQAEADACAEIAhBgIAihgQACgEAEgDQAEgDAEgBIAvAAQAEABAEADQADADAAAFIAACMQAAAFgDADQgEADgEAAgAHlAhQgEAAgDgDQgDgDgBgFIgDhdQAAgEADgDQADgDAFgBIAZAAQAEABADADQAEADgBAEIgDBdQAAAFgDADQgDADgFAAg");
	this.shape.setTransform(51.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.6,16.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE0BRQgKgDgGgDQgIgEgGgFQgFgFgFgHQgFgHgDgIQgDgIgBgKQgCgKAAgLQAAgKACgKQABgKADgIQADgIAFgGQAFgHAFgGQAGgEAIgFQAGgDAKgCQAKgEAdgCIAUACQAKABAJADIAQAFQAHAFAGAEQAGAGAFAHQAEAGADAIQADAIACAKQABAKAAAKQAAALgBAKQgCAKgDAIQgDAIgEAHQgFAHgGAFQgGAFgHAEIgQAGIgTAEIgUAAQgdgBgKgDgAFEgxQgKADgFAHQgGAHgDAKQgDAKAAAMQAAANADAKQADAKAGAHQAFAIAKADQAKAEANAAQAMAAAKgEQAKgDAFgIQAGgHADgKQADgKAAgNQAAgMgDgKQgDgKgGgHQgFgHgKgDQgKgEgMgBQgNABgKAEgAgiBRQgIgDgHgDQgIgEgGgFQgFgFgFgHQgFgHgDgIQgDgIgBgKQgCgKAAgLQAAgKACgKQABgKADgIQADgIAFgGQAFgHAFgGQAGgEAIgFQAHgDAIgCQAMgEAagCIAUACQALABAIADIAQAFQAHAFAGAEQAGAGAFAHQAEAGADAIQADAIACAKQABAKAAAKQAAALgBAKQgCAKgDAIQgDAIgEAHQgFAHgGAFQgGAFgHAEIgQAGIgTAEIgUAAQgagBgMgDgAgRgxQgKADgFAHQgGAHgDAKQgDAKAAAMQAAANADAKQADAKAGAHQAFAIAKADQAJAEAMAAQANAAAJgEQAJgDAGgIQAGgHADgKQADgKAAgNQAAgMgDgKQgDgKgGgHQgGgHgJgDQgJgEgNgBQgMABgJAEgAmMBQQgMgDgJgHQgKgGgGgIIgDgKQgCgGAAgGQAAgKAMgCIANAAQAGAAADADQAEADAEAGQAEAIAGAEQAIAFAKgBIAXAAQALAAAIgBQAHgCAFgFQAFgEADgGQADgHABgKIg+AAQgFAAgDgDQgEgDAAgFIAAgIQAAgEAEgDQADgDAFAAIA+AAQgCgKgCgGQgDgIgFgDQgFgFgHgCQgIgBgLAAIgUAAQgLAAgHAEQgHAEgEAIQgDAHgEADQgEACgFAAIgOAAQgEABgDgDQgFgEABgGIABgMIAEgJQAFgJAKgGQAKgGALgDQAMgEAMAAIAuABIARAFQAIABAHAFQAGADAGAGQAFAFAEAGQAEAHADAHIAEARQABAKAAAJQAAAKgBAKIgEARQgDAHgEAHQgEAGgFAGQgGAFgGAEQgHAEgIACQgIADgJABIgwABQgMAAgMgDgACDBSQgFAAgEgDQgCgDAAgEIAAiOQAAgEACgDQAEgEAFAAIBuAAQAFAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgFAAIhOAAIAAB5QAAAEgEADQgDADgEAAgAi3BSQgFAAgDgDQgDgDAAgEIAAh5Ig0AAQgFAAgDgCQgCgEAAgEIAAgLQAAgEACgDQADgEAFAAICSAAQAEAAAEAEQADADAAAEIAAALQAAAEgDAEQgEACgEAAIgzAAIAAB5QAAAEgDADQgDADgFAAg");
	this.shape.setTransform(44,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.9,17.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJBRQgJgDgFgDQgIgEgFgFQgGgFgFgHQgEgHgEgIQgDgIgBgKQgCgKAAgLQAAgKACgKQABgKADgIQAEgIAEgGQAFgHAGgGQAFgEAIgFQAFgDAJgCQALgEAcgCIAVACQAKABAIADIAQAFQAHAFAGAEQAGAGAFAHQAEAGADAIQADAIACAKQABAKAAAKQAAALgBAKQgCAKgDAIQgDAIgEAHQgFAHgGAFQgGAFgHAEIgQAGIgSAEIgVAAQgcgBgLgDgAAZgxQgJADgGAHQgGAHgDAKQgBAKAAAMQAAANABAKQADAKAGAHQAGAIAJADQAKAEANAAQANAAAJgEQAKgDAGgIQAFgHADgKQADgKAAgNQAAgMgDgKQgDgKgFgHQgGgHgKgDQgJgEgNgBQgNABgKAEgAIGBSQgEAAgEgDQgDgEAAgEIAAhvIgoBwQgCAEgEADQgEADgEAAIgRAAQgEAAgEgDQgEgDgCgEIgohwIAABvQAAAEgDAEQgEADgEAAIgVAAQgEAAgEgDQgDgEAAgEIAAiMQAAgGADgCQADgEAFAAIAvAAQAEAAAEAEQAEADACAEIAhBgIAihgQACgEAEgDQAEgEAEAAIAvAAQAEAAAEAEQADACAAAGIAACMQAAAEgDAEQgEADgEAAgACvBSQgEAAgEgDQgDgEAAgEIAAiNQAAgEADgDQAEgEAEAAICFAAQAEAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgEAAIhkAAIAAAiIBWAAQAEAAADADQAEADAAAFIAAAIQAAAFgEADQgDADgEAAIhWAAIAAAiIBjAAQAFAAADADQADADAAAFIAAALQAAAEgDAEQgDADgFAAgAjTBSQgEAAgEgDQgDgEAAgEIAAiNQAAgEADgDQADgEAFAAIBYAAQAQAAANAEIAMAFIAKAGIAIAJQADAFACAGQADAHABAHIABAPIgBAPQgBAGgDAGQgCAGgDAFIgIAJIgKAHIgMAEQgNAFgQAAIg3AAIAAAZQAAAEgEAEQgDADgEAAgAiyANIApAAQAKAAAGgBQAIgCAFgDQAFgDADgFQADgGAAgKQAAgJgDgHQgDgGgFgDQgFgEgIgBQgGgBgKgBIgpAAgAmCBSQgFAAgDgDQgDgEAAgEIAAiNQAAgEADgDQADgEAFAAICEAAQAFAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgFAAIhkAAIAAAiIBWAAQAFAAADADQADADAAAFIAAAIQAAAFgDADQgDADgFAAIhWAAIAAAiIBkAAQAEAAADADQAEADAAAFIAAALQAAAEgEAEQgDADgEAAgAoaBSQgEAAgEgDQgDgDAAgEIAAiOQAAgEADgDQAEgEAEAAIBvAAQAFAAADAEQADADAAAEIAAALQAAAEgDAEQgDACgFAAIhOAAIAAB5QAAAEgEADQgDADgEAAg");
	this.shape.setTransform(55,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.1,17.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmDBSQgJgCgIgCQgIgCgHgEQgGgEgGgFQgFgGgEgGQgEgHgDgHIgEgSQgBgIAAgLQAAgJABgJIAEgRQADgJAEgGQAEgHAFgEIAMgJQAHgFAIgCIARgDIAugCQAMAAALAEQANADAJAGQAKAHAFAJIAEAKQACAGAAAGQAAAHgFADQgDADgEAAIgOAAQgFAAgEgDQgEgDgDgHQgEgJgHgEQgHgFgKAAIgVAAQgNAAgIACQgIADgFAGQgFAFgCAKQgCAKAAANQAAAPACAIQACALAFAFQAFAGAIADQAIACANAAIAXAAQAKAAAIgEQAGgFAEgJQADgGAFgEQAEgDAFAAIANAAQAMADAAAKQAAAHgBAFQgCAGgDAFQgFAJgKAGQgJAGgMAEQgMADgMAAgAEtBSQgEAAgDgDQgDgDAAgFIAAiNQAAgFADgDQADgDAFAAIAVAAQAFAAADADQADADAAAFIAAAtIA5AAQANAAALADQAMAFAIAGQAJAHAEAIQAFAPAAAJIgBAMIgEALQgEAKgJAHQgIAHgMAEQgLADgNAAgAFOAxIA5AAQAKAAAEgFQAFgGAAgKQAAgLgFgGQgEgFgKgBIg5AAgADhBSQgEAAgEgDQgDgDAAgEIAAg8IhPAAIAAA8QAAAEgDADQgDADgFAAIgVAAQgFAAgDgDQgDgDAAgFIAAiNQAAgFADgDQADgDAFAAIAVAAQAFAAADADQADADAAAFIAAA0IBPAAIAAg0QAAgFADgDQAEgDAEAAIAVAAQAFAAADADQADADAAAFIAACNQAAAFgDADQgDADgFAAgAAbBSQgFAAgDgDQgDgDAAgFIAAgdIhQAAIgIAdQgBAFgEADQgEADgEAAIgXAAQgFAAgCgDQgCgDABgEIAdhsIAFgNQACgFAEgFQAHgIALgFQAKgFANgCQALgCANAAIA8AAQAEAAADADQADADAAAFIAACOQAAAEgDADQgDADgFAAgAgZgvQgFACgEADIgHAHIgEAKIgKAjIBHAAIAAg7IgfAAQgFAAgFACgAjEBSQgFAAgDgDQgDgDAAgEIAAh5Ig0AAQgEAAgDgCQgDgDAAgFIAAgLQAAgFADgDQADgDAEAAICSAAQAFAAADADQADADAAAFIAAALQAAAFgDADQgDACgFAAIgzAAIAAB5QAAAEgDADQgDADgFAAg");
	this.shape.setTransform(45.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.8,16.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHhGIAngLIAoBLIgXhRIAjgLIA0CpIgkAKIgshPIAYBWIgjALg");
	this.shape.setTransform(49.3,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBQQgKgBgHgEQgJgFgFgHIg9g7QgQgOAAgRQAAgRARgSQARgRASAAQARAAAOAPIA8A8QAHAFAFAJQAFAJABAIQABAJgEAJQgEAJgJAKQgJAJgKAEQgHADgHAAIgEAAgAgjgnIgDACIgCADQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABIABADIAFAHIADACIAAABIAyAxIACADIAEACIADADIAEABQABAAAAAAQAAABABAAQAAAAABgBQABAAAAAAIAEgCIACgDIAAgEIgCgDIgFgHIgCgCIgBgBIgxgwIgCgCIgHgGIgCgCIgDgBIgCAAg");
	this.shape_1.setTransform(28.1,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaANIAWhJIAhAJIgKAmIAbAHIAKgkIAfAKIgKAhIBOAWIgLAmg");
	this.shape_2.setTransform(15,47.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0049B1").s().p("AhKBpIgBgWQAAhlA4hWIBfBHQghA0gBBAQABALABALg");
	this.shape_3.setTransform(34.8,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0049B1").s().p("AhigZQBPguBbAAIAbABIAAB2QgNgCgOAAQg3AAgwAag");
	this.shape_4.setTransform(54.4,37);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0049B1").s().p("AiRCzIgBgRQAAhdAchXQAbhWAyhLIC8CJQg+BcABBwIAAARg");
	this.shape_5.setTransform(15.5,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0049B1").s().p("AisgyQCShbCrAAIAcABIAADnIgcgBQhlAAhWA0g");
	this.shape_6.setTransform(47.1,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0B0B0").s().p("AlBiDIArhCQA+hOBcg4IG+KXg");
	this.shape_7.setTransform(32.3,33.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUDaQgQgEgJgGQgJgGgEgIQgFgIgCgJQgBgHAAgKIAAjpIgVAAIAAhEIAVAAIAAhQICBAAIAABQIAZAAIAABEIgZAAIAADRIABAIIABAFQACAEADABQADABAFAAIAKgBIAAA9QgcAHgtAAQgVAAgOgEg");
	this.shape_8.setTransform(254.1,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqDBQgSgEgNgHQgNgHgIgKQgKgMgFgKQgGgLgCgNQgEgOgBgMIgBi0QAAg1AigcQAhgcA6AAQB6AAAABtIAAAcIgBBGIiRAAIAABIIABAQIADANQACAHAFADQAFAEAGAAQAIAAAGgGQAEgEADgLQACgLAAgGIABgUQAAgWgBgCIBlAAIAAAVQAAAjgGAUQgFAYgOARQgNASgaAJQgZAJgkAAQgWAAgTgEgAgKh7QgFADgDAIIgEAPIAAA0IAtAAIAAgoQAAgqgWAAQgGAAgFAEg");
	this.shape_9.setTransform(231,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVC0IAAAoIhoAAIAAm8IBoAAIAABWQAXgXAfAAIAXABIANADIAOAGQAJAEAEAEQAHAHAEAGQAHAIADAKQAEAJACAOQADAQAAAOIAAC1QAAASgEASQgFASgFAIQgGAKgJAJQgJAIgIAEQgLAFgGABIgPADIgMABQgnAAgSgtgAgOhSQgHAIAAAXIAACcQAAAcAGALQAHAKAKAAQANAAAEgKQAEgKAAgdIAAibQAAgYgFgIQgFgIgLAAQgJAAgHAIg");
	this.shape_10.setTransform(201.4,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYC+IAAkXQAAgLgFgKQgFgJgMAAQgGAAgFAEQgFAEgCAEIgEAMIgCAMIAAERIhlAAIAAl3IBlAAIAAAsQAGgZAQgLQAQgMAYAAQAoAAAWAWQAWAXAAAuIAAEgg");
	this.shape_11.setTransform(170.7,34.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah9BMIAAiXQAAg2AiggQAiggA5AAQA5AAAjAgQAiAgAAA2IAACXQAAA8ggAdQggAdg+AAQh9AAAAh2gAgWhZIAAC4QAAAPAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgPIAAi4QAAghgXAAQgWAAAAAhg");
	this.shape_12.setTransform(141.6,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiDgIAAm/IDFAAIAABYIhjAAIAABHIBeAAIAABVIheAAIAADLg");
	this.shape_13.setTransform(116.4,31.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0049B1").s().p("AxmFHIAAqNMAjNAAAIAAKNg");
	this.shape_14.setTransform(181.9,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.7,67);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#174613").s().p("Eg2bANMIAA6XMBs3AAAIAAaXg");
	this.shape.setTransform(348.5,84.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,697,169);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("Ag6A7QgagZAAgiQAAghAagZQAZgaAhAAQAiAAAZAaQAaAZAAAhQAAAigaAZQgZAagiAAQghAAgZgag");
	this.shape.setTransform(8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AI6AAQAADrinCoQioCnjrAAQjrAAininQinioAAjrQAAjrCninQCninDrAAQDrAACoCnQCnCnAADrg");
	this.shape.setTransform(57,57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,117,117);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#570000","#8E0000"],[0,1],0,50,0,-49.9).s().p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhAnVICBAAIAAOrIiBAA");
	this.shape.setTransform(6.5,47);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,15,96);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ACVJrQgjgcghghQjljoAAlGQAAlGDljnQAhghAjgc");
	this.shape.setTransform(15,62);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,126);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 22
	this.instance = new lib.Символ22();
	this.instance.setTransform(650.9,17.1,1,1,0,0,0,51.8,8.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:518.9},19,cjs.Ease.get(1)).wait(34).to({scaleX:1.29,scaleY:1.29},5).to({scaleX:1,scaleY:1},5).wait(46).to({x:-99.8,y:17},10,cjs.Ease.get(-1)).wait(16));

	// Символ 21
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(650.9,17,1,1,0,0,0,44,8.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({x:412.5},19,cjs.Ease.get(1)).wait(38).to({regY:8.7,scaleX:1.24,scaleY:1.24,y:17.1},5).to({regY:8.6,scaleX:1,scaleY:1,y:17},5).wait(49).to({x:-98},10,cjs.Ease.get(-1)).wait(21));

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(650.9,17,1,1,0,0,0,55,8.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:303},19,cjs.Ease.get(1)).wait(40).to({regY:8.7,scaleX:1.19,scaleY:1.19,y:17.1},5).to({regY:8.6,scaleX:1,scaleY:1,y:17},5).wait(52).to({x:-96.6},10,cjs.Ease.get(-1)).wait(26));

	// Символ 19
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(638.4,17,1,1,0,0,0,45.4,8.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:192.4},19,cjs.Ease.get(1)).wait(41).to({scaleX:1.23,scaleY:1.23},5).to({scaleX:1,scaleY:1},5).wait(55).to({x:-96.6},10,cjs.Ease.get(-1)).wait(31));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(664.4,14.9,0.444,0.444,0,0,0,147.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:65.4,y:16.6},19,cjs.Ease.get(1)).wait(115).to({x:-121.6,y:14.9},10,cjs.Ease.get(-1)).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599.1,0,130.7,29.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(339.5,135.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:341.8,y:137.8},9,cjs.Ease.get(-1)).to({x:344.5,y:140.5},10,cjs.Ease.get(1)).to({x:342.5,y:142.5},10,cjs.Ease.get(-1)).to({x:340.5,y:144.5},10,cjs.Ease.get(1)).to({x:340,y:140},10,cjs.Ease.get(-1)).to({x:339.5,y:135.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(339.5,80.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:341.8,y:82.8},9,cjs.Ease.get(-1)).to({x:344.5,y:85.5},10,cjs.Ease.get(1)).to({x:347,y:88},10,cjs.Ease.get(-1)).to({x:349.5,y:90.5},10,cjs.Ease.get(1)).to({x:344.5,y:85.5},10,cjs.Ease.get(-1)).to({x:339.5,y:80.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(339.5,19.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:341.4,y:17.6},9,cjs.Ease.get(-1)).to({x:343.5,y:15.5},10,cjs.Ease.get(1)).to({x:346,y:13},10,cjs.Ease.get(-1)).to({x:348.5,y:10.5},10,cjs.Ease.get(1)).to({x:344,y:15},10,cjs.Ease.get(-1)).to({x:339.5,y:19.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(384.5,184.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:386.4,y:182.6},9,cjs.Ease.get(-1)).to({x:388.5,y:180.5},10,cjs.Ease.get(1)).to({x:390,y:177.5},10,cjs.Ease.get(-1)).to({x:391.5,y:174.5},10,cjs.Ease.get(1)).to({x:388,y:179.5},10,cjs.Ease.get(-1)).to({x:384.5,y:184.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(380.5,-27.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:382.4,y:-25.6},9,cjs.Ease.get(-1)).to({x:384.5,y:-23.5},10,cjs.Ease.get(1)).to({x:387.5,y:-20.5},10,cjs.Ease.get(-1)).to({x:390.5,y:-17.5},10,cjs.Ease.get(1)).to({x:385.5,y:-22.5},10,cjs.Ease.get(-1)).to({x:380.5,y:-27.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(299.5,114.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:297.6,y:116.8},9,cjs.Ease.get(-1)).to({x:295.5,y:119.5},10,cjs.Ease.get(1)).to({x:298.5,y:122.5},10,cjs.Ease.get(-1)).to({x:301.5,y:125.5},10,cjs.Ease.get(1)).to({x:300.5,y:120},10,cjs.Ease.get(-1)).to({x:299.5,y:114.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_6 = new lib.Символ11();
	this.instance_6.setTransform(299.5,59.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:297.1,y:57.1},9,cjs.Ease.get(-1)).to({x:294.5,y:54.5},10,cjs.Ease.get(1)).to({x:297,y:57},10,cjs.Ease.get(-1)).to({x:299.5,y:59.5},10,cjs.Ease.get(1)).wait(21));

	// Символ 11
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(257.5,168.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:255.1,y:166.1},9,cjs.Ease.get(-1)).to({x:252.5,y:163.5},10,cjs.Ease.get(1)).to({x:255,y:165},10,cjs.Ease.get(-1)).to({x:257.5,y:166.5},10,cjs.Ease.get(1)).to({y:167.5},10,cjs.Ease.get(-1)).to({y:168.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(257.5,83.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:258.9,y:85.4},9,cjs.Ease.get(-1)).to({x:260.5,y:87.5},10,cjs.Ease.get(1)).to({x:257,y:84.5},10,cjs.Ease.get(-1)).to({x:253.5,y:81.5},10,cjs.Ease.get(1)).to({x:255.5,y:82.5},10,cjs.Ease.get(-1)).to({x:257.5,y:83.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_9 = new lib.Символ11();
	this.instance_9.setTransform(257.5,2.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:255.6,y:4.4},9,cjs.Ease.get(-1)).to({x:253.5,y:6.5},10,cjs.Ease.get(1)).to({x:256,y:4},10,cjs.Ease.get(-1)).to({x:258.5,y:1.5},10,cjs.Ease.get(1)).to({x:258,y:2},10,cjs.Ease.get(-1)).to({x:257.5,y:2.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_10 = new lib.Символ11();
	this.instance_10.setTransform(129.5,184.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:180.7},9,cjs.Ease.get(-1)).to({y:176.5},10,cjs.Ease.get(1)).to({y:173},10,cjs.Ease.get(-1)).to({y:169.5},10,cjs.Ease.get(1)).to({y:177},10,cjs.Ease.get(-1)).to({y:184.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_11 = new lib.Символ11();
	this.instance_11.setTransform(129.5,-10.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:-7.7},9,cjs.Ease.get(-1)).to({y:-4.5},10,cjs.Ease.get(1)).to({x:131.5,y:-2},10,cjs.Ease.get(-1)).to({x:133.5,y:0.5},10,cjs.Ease.get(1)).to({x:131.5,y:-5},10,cjs.Ease.get(-1)).to({x:129.5,y:-10.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_12 = new lib.Символ11();
	this.instance_12.setTransform(71.5,175.4,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:73.8,y:177.8},9,cjs.Ease.get(-1)).to({x:76.5,y:180.4},10,cjs.Ease.get(1)).to({x:79.5,y:177.4},10,cjs.Ease.get(-1)).to({x:82.5,y:174.4},10,cjs.Ease.get(1)).to({x:77,y:174.9},10,cjs.Ease.get(-1)).to({x:71.5,y:175.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_13 = new lib.Символ11();
	this.instance_13.setTransform(71.5,114.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({y:117.8},9,cjs.Ease.get(-1)).to({y:121.5},10,cjs.Ease.get(1)).to({x:74,y:119},10,cjs.Ease.get(-1)).to({x:76.5,y:116.5},10,cjs.Ease.get(1)).to({x:74,y:115.5},10,cjs.Ease.get(-1)).to({x:71.5,y:114.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_14 = new lib.Символ11();
	this.instance_14.setTransform(71.5,59.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:74.3,y:59},9,cjs.Ease.get(-1)).to({x:77.5,y:58.5},10,cjs.Ease.get(1)).to({x:74.5,y:61.5},10,cjs.Ease.get(-1)).to({x:71.5,y:64.5},10,cjs.Ease.get(1)).to({y:62},10,cjs.Ease.get(-1)).to({y:59.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_15 = new lib.Символ11();
	this.instance_15.setTransform(71.5,-1.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:69.1,y:-4.3},9,cjs.Ease.get(-1)).to({x:66.5,y:-7.5},10,cjs.Ease.get(1)).to({x:71.5,y:-2.5},10,cjs.Ease.get(-1)).to({x:76.5,y:2.5},10,cjs.Ease.get(1)).to({x:74,y:0.5},10,cjs.Ease.get(-1)).to({x:71.5,y:-1.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_16 = new lib.Символ11();
	this.instance_16.setTransform(8.5,175.4,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:6.2,y:177.8},9,cjs.Ease.get(-1)).to({x:3.5,y:180.4},10,cjs.Ease.get(1)).to({x:0.5,y:177.4},10,cjs.Ease.get(-1)).to({x:-2.5,y:174.4},10,cjs.Ease.get(1)).to({x:3,y:174.9},10,cjs.Ease.get(-1)).to({x:8.5,y:175.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_17 = new lib.Символ11();
	this.instance_17.setTransform(8.5,114.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:10.9,y:117.8},9,cjs.Ease.get(-1)).to({x:13.5,y:121.5},10,cjs.Ease.get(1)).to({x:16.5},10,cjs.Ease.get(-1)).to({x:19.5},10,cjs.Ease.get(1)).to({x:14,y:118},10,cjs.Ease.get(-1)).to({x:8.5,y:114.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_18 = new lib.Символ11();
	this.instance_18.setTransform(8.5,59.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:5.7,y:62.3},9,cjs.Ease.get(-1)).to({x:2.5,y:65.5},10,cjs.Ease.get(1)).to({x:-1,y:62},10,cjs.Ease.get(-1)).to({x:-4.5,y:58.5},10,cjs.Ease.get(1)).to({x:2,y:59},10,cjs.Ease.get(-1)).to({x:8.5,y:59.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_19 = new lib.Символ11();
	this.instance_19.setTransform(8.5,-1.5,1,1,0,0,0,8.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({x:11.4,y:1.4},9,cjs.Ease.get(-1)).to({x:14.5,y:4.5},10,cjs.Ease.get(1)).to({x:19.5,y:-0.5},10,cjs.Ease.get(-1)).to({x:24.5,y:-5.5},10,cjs.Ease.get(1)).to({x:16.5,y:-3.5},10,cjs.Ease.get(-1)).to({x:8.5,y:-1.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-36,393,229);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(81,-322,1,1,0,0,0,69,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,-445,393,229);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.setTransform(50,50,0.895,0.895,0,0,0,57,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	mask.setTransform(50,50);

	// Слой 2
	this.instance_1 = new lib.spa();
	this.instance_1.setTransform(-18.7,-5,0.287,0.287);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AlgFhQiTiTABjOQgBjNCTiTQCTiTDNABQDOgBCTCTQCTCTAADNQAADOiTCTQiTCTjOAAQjNAAiTiTg");
	this.shape.setTransform(55,55.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.3,107.4,107.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.setTransform(50.1,50.5,0.895,0.895,0,0,0,57,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	mask.setTransform(50,50);

	// Слой 2
	this.instance_1 = new lib.ita();
	this.instance_1.setTransform(-13.4,0,0.275,0.313);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("AlgFhQiSiTAAjOQAAjNCSiTQCTiTDNABQDPgBCSCTQCTCTAADNQAADOiTCTQiSCTjPAAQjNAAiTiTg");
	this.shape.setTransform(56,55.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-1.9,108.3,107.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(603.5,154,1,1,180,0,0,6.5,47);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(6.5,154,1,1,0,0,0,6.5,47);

	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(91,154,0.742,0.742,180,0,0,15.1,62);

	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(518.1,154.1,0.742,0.742,0,0,0,15.1,62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAvLgN+Ir3AAIAAaFIL3AAAAKtRQFHAADoDoQDnDnAAFHQAAFFjnDoQjoDolHAAQkXAAjSiqQgjgdggghQjojoAAlFQAAlHDojnQAgghAjgcQDSirEXAAIAAYrIAALuAAK3HIAAJ2EgvKgN+IL3AAIAAaFIr3AA");
	this.shape.setTransform(305,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,11,612,298);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(50.1,50.1,1,1,0,0,0,33.6,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:51.2},0).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(50,50,1,1,0,0,0,50,50);

	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(50,51.1,1,1,0,0,0,50,50);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	// Символ 26
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(50,55.5,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,105.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(51,31,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:47},14,cjs.Ease.get(-1)).to({y:64},15,cjs.Ease.get(1)).to({y:47},16,cjs.Ease.get(-1)).to({y:31},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-24,160.4,110.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(51,59.6,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:46.1},17,cjs.Ease.get(-1)).to({y:32.6},17,cjs.Ease.get(1)).to({y:46.5},18,cjs.Ease.get(-1)).to({y:59.6},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,7.7,131.9,107.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(50,52.7,1,1,0,0,0,50,52.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,105.5);


// stage content:
(lib.VS_fonbet_euro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(299.6,22.6,1,1,0,0,0,287.6,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(305,-292,1,1,0,0,0,363,186);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(548.5,174.2,1,1,0,0,0,62.5,51.2);

	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(63.4,178.8,1,1,0,0,0,53.4,52.3);

	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(300,174,1.307,1.307,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXAwQgGAAAAgGIAAgdIgRAAIgNAbQgCAEgDACQgEACgFAAIgPAAQgEAAgBgDQgBgCACgDIASgeIgIgEIgGgFIgEgGIgBgLQAAgIADgGQADgGAFgEQAFgDAIgCQAGgCAJAAIAyAAQAGAAAAAGIAABTQAAAGgGAAgAgNgYQgDADAAAFQAAAFADADQADADAFAAIAWAAIAAgWIgWAAQgFAAgDADg");
	this.shape.setTransform(468.7,139);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAwQgFAAAAgGIAAg3IgdA2QgDAHgHAAIgZAAQgEAAAAgGIAAhTQAAgGAEAAIATAAQAFAAAAAGIAAA4IAeg3QADgHAHAAIAYAAQAFAAAAAGIAABTQAAAGgFAAg");
	this.shape_1.setTransform(457.2,139);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAwQgFAAgBgGIAAggIgkAAIAAAgQAAAGgFAAIgUAAQgFAAAAgGIAAhTQAAgGAFAAIAUAAQAFAAAAAGIAAAfIAkAAIAAgfQABgGAFAAIAUAAQAFAAAAAGIAABTQAAAGgFAAg");
	this.shape_2.setTransform(445.1,139);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAwQgHgDgGgEQgGgDgDgGQgDgGAAgHQAAgIADgGQADgFAGgDQAGgEAHgCQAHgCAKAAIAaAAIgBgIQgBgEgCgBQgCgDgEgBIgIgBQgDABgFABQgEACgDADQgDAEgHAAIgMAAQgGAAAAgFQAAgIAEgEQADgFAGgDQAGgDAJgCIASAAQAKAAAIABQAJACAFAFQAHAFADAHQAEAHAAAKIAAA1QAAAFgGABIgRAAQgEgBAAgFIAAgCQgHAEgIADQgIADgHAAQgKgBgHgBgAgPALQgEADABAFQgBAEAEADQAEADAGABQAGgBAHgCIALgFIAAgPIgZAAQgFAAgEAEg");
	this.shape_3.setTransform(432.9,139);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYAwQgFAAgBgGIAAhDIgkAAIAABDQAAAGgFAAIgUAAQgFAAAAgGIAAhTQAAgGAFAAIBXAAQAFAAAAAGIAABTQAAAGgFAAg");
	this.shape_4.setTransform(421.3,139);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAuIgKgEQgEgCgDgDIgGgHQgDgEgBgFQgDgGgBgPQAAgHAEgNIAEgJIAGgHIAHgFIAJgFQAHgCANAAQAMAAAJABQAJACAHAEQAGAEAEAGQADAFAAAIQAAAFgFABIgNAAQgEAAgCgCIgFgFQgCgEgFgCQgFgCgGgBQgFAAgEACQgFACgCAEQgDADgBAFQgCAGAAAGQAAAHACAGQABAEADAEQACAEAFABQAFACAEAAQAHAAAFgDQAFgCACgDQACgDADgCQACgBADgBIANAAQAGAAAAAGQAAAHgDAGQgEAGgGADQgHAEgJADQgJABgMABQgOgCgGgCg");
	this.shape_5.setTransform(409.8,139);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoA/QgEgBgCgCQgDgCAAgEIAAhPIgrBPQgCAEgEACQgEACgDABIgdAAQgEgBgCgCQgDgCAAgEIAAhrQAAgDADgDQACgDAEABIAPAAQADgBADADQACACAAAEIAABVIAwhVQACgDAEgDQADgDADABIAaAAQAEgBACADQADADAAADIAABrQAAAEgDACQgCACgEABg");
	this.shape_6.setTransform(396.5,137.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXAwQgGAAAAgGIAAgdIgRAAIgNAbQgCAEgDACQgEACgFAAIgPAAQgEAAgBgDQgBgCACgDIASgeIgIgEIgGgFIgEgGIgBgLQAAgIADgGQADgGAFgEQAFgDAIgCQAGgCAJAAIAyAAQAGAAAAAGIAABTQAAAGgGAAgAgNgYQgDADAAAFQAAAFADADQADADAFAAIAWAAIAAgWIgWAAQgFAAgDADg");
	this.shape_7.setTransform(194.1,139);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAwQgFAAAAgGIAAg3IgdA2QgDAHgHAAIgZAAQgEAAAAgGIAAhTQAAgGAEAAIATAAQAFAAAAAGIAAA4IAdg3QAEgHAHAAIAYAAQAFAAABAGIAABTQgBAGgFAAg");
	this.shape_8.setTransform(182.6,139);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcAwQgFAAAAgGIAAhDIgRAAQgGAAgCADQgEADgBAHIgOA1QgCAHgGAAIgSAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAQg+QACgIAEgFQAFgFAGgDQAFgDAIgBQAGgCAGAAIAqAAQAFAAAAAGIAABTQAAAGgFAAg");
	this.shape_9.setTransform(170,139);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAwQgHgDgGgEQgGgDgDgGQgDgGAAgHQAAgIADgGQADgFAGgDQAGgEAHgCQAHgCAKAAIAaAAIgBgIQgBgEgCgBQgCgDgEgBIgIgBQgDABgFABQgEACgDADQgDAEgHAAIgMAAQgGAAAAgFQAAgIAEgEQADgFAGgDQAGgDAJgCIASAAQAKAAAIABQAJACAFAFQAHAFADAHQAEAHAAAKIAAA1QAAAFgGABIgRAAQgEgBAAgFIAAgCQgHAEgHADQgJADgHAAQgKgBgHgBgAgPALQgEADABAFQgBAEAEADQAEADAGABQAGgBAIgCIAKgFIAAgPIgZAAQgFAAgEAEg");
	this.shape_10.setTransform(158.4,139);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAwQgFAAAAgGIAAhDIgcAAQgFAAAAgGIAAgKQAAgGAFAAIBVAAQAFAAAAAGIAAAKQAAAGgFAAIgcAAIAABDQAAAGgGAAg");
	this.shape_11.setTransform(148.2,139);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAoA/QgEgBgCgCQgDgCAAgEIAAhPIgrBPQgCAEgEACQgEACgDABIgdAAQgEgBgCgCQgDgCAAgEIAAhrQAAgDADgDQACgDAEABIAPAAQADgBADADQACACAAAEIAABVIAwhVQACgDAEgDQADgDADABIAaAAQAEgBACADQADADAAADIAABrQAAAEgDACQgCACgEABg");
	this.shape_12.setTransform(135.5,137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 6
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBKQgLAAgKgDQgKgCgIgGQgHgEgEgHQgEgGAAgIQAAgKAKgBIANAAQAEAAAEACQACACADAFQADAFAFABQAGADAIAAIARAAIAKgBQAFgBADgDQADgDABgEQABgFAAgHIAAgEIgpAAQgOAAgKgCQgMgDgHgFQgIgGgEgGIgDgKIgBgMQAAgIAEgNQAEgJAIgGQAHgFAMgDQAKgCAOAAIAUAAQAPAAALACQALAEAIAFIAGAGIAFAKQAEAOAAAKIAAArIgBAOIgDAMIgFAJQgDADgDADQgIAHgLACQgKADgPAAgAgZgoQgCACgCADQgCADAAAFQAAAFACADQACAEACACQAGADANAAIAlAAIAAgMQAAgHgBgEQgBgEgDgCQgDgDgFgBIgLgBIgNAAQgNAAgGAEg");
	this.shape_13.setTransform(445.9,177.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBJQgEAAgCgDQgCgDACgCIA5hsIhMAAQgEAAgDgDQgDgDAAgEIAAgKQAAgEADgCQADgDAEAAIBsAAQAEAAADADQACACAAAEIAAAKQAAAEgCAGIgEAJIg2BhQgCAEgCADQgDADgEAAg");
	this.shape_14.setTransform(431.5,177.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAQQgIAAgDgDQgDgEgBgGIAAgFQABgHADgDQADgEAIAAIAKAAQAGAAAEAEQAEADAAAHIAAAFQAAAGgEAEQgEADgGAAg");
	this.shape_15.setTransform(422,183.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAFBJQgEAAgBgDQgDgDAAgEIAAhhIgLAJQgCABgDAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgIgKQgDgEAFgFIAZgVQAEgDAJgCIAPAAQAEAAADADQADACAAAEIAAB+QAAAEgDADQgDADgEAAg");
	this.shape_16.setTransform(414.2,177.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNBJQgLAAgKgCQgKgDgHgFQgIgFgEgGQgEgIAAgHQAAgKAKgBIAMAAQAFgBADADQADACADAGQADADAFADQAGACAIABIAOAAIALgBQAEgBADgDQAEgBABgEQACgDAAgFQAAgFgCgDQgBgEgEgCIgHgDIgLgBIg5AAQgEAAgDgCQgDgEAAgDIAAg/QAAgEADgCQACgDAFAAIBnAAQAEAAADADQADACAAAEIAAAKQAAAEgDADQgDADgEAAIhKAAIAAAZIAgAAQAOAAALACQALADAHAGQAIAFAEAHQAEANAAAJIgBALIgDAKQgEAKgIAFQgHAGgLACQgLADgOgBg");
	this.shape_17.setTransform(181,177.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaBJQgEAAgDgDQgDgDAAgEIAAgQIhRAAQgEAAgDgDQgDgDAAgDIAAgNQAAgEACgFQABgDADgEIBEhKQABgEAEgCQAEgBAFAAIAgAAQAEAAADADQADACAAAEIAABRIALAAQAEAAADADQADADAAAEIAAAKQAAADgDADQgDADgEAAIgLAAIAAAQQAAAEgDADQgDADgEAAgAgiASIAyAAIAAg5g");
	this.shape_18.setTransform(165.7,177.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFAQQgGAAgEgDQgEgEAAgGIAAgFQAAgHAEgDQAEgEAGAAIALAAQAGAAAEAEQADADABAHIAAAFQgBAGgDAEQgEADgGAAg");
	this.shape_19.setTransform(155,183.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAFBJQgEAAgBgDQgDgDAAgEIAAhhIgLAJQgCABgDAAQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIgIgKQgDgEAFgFIAZgVQAEgDAJgCIAPAAQAEAAADADQADACAAAEIAAB+QAAAEgDADQgDADgEAAg");
	this.shape_20.setTransform(147.2,177.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Слой 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#174613").s().p("AN9CgIAAk/INdAAIAAE/gA7YCgIAAk/INbAAIAAE/g");
	this.shape_21.setTransform(300.4,178);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(288.4,-107.9,1,1.87,0,0,0,348.4,84.5);
	this.instance_5.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ12();
	this.instance_6.setTransform(176,588,1,1,0,0,0,69,87);
	this.instance_6.alpha = 0.781;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 3
	this.instance_7 = new lib.Символ3();
	this.instance_7.setTransform(298.9,177,1,1,0,0,0,304.9,154);
	this.instance_7.alpha = 0.48;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 5
	this.instance_8 = new lib.gaz();
	this.instance_8.setTransform(295,-44);

	this.instance_9 = new lib.gaz();
	this.instance_9.setTransform(-200,-44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,-115.9,995,721.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
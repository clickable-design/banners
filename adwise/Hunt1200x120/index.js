(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Ammo.png?1465310445872", id:"Ammo"},
		{src:"images/back.jpg?1465310445872", id:"back"},
		{src:"images/Body.png?1465310445872", id:"Body"},
		{src:"images/Head.png?1465310445872", id:"Head"},
		{src:"images/infra.jpg?1465310445872", id:"infra"},
		{src:"images/Kust.png?1465310445872", id:"Kust"},
		{src:"images/L1.png?1465310445872", id:"L1"},
		{src:"images/l10.png?1465310445872", id:"l10"},
		{src:"images/l3.png?1465310445872", id:"l3"},
		{src:"images/l4.png?1465310445872", id:"l4"},
		{src:"images/l5.png?1465310445872", id:"l5"},
		{src:"images/l6.png?1465310445872", id:"l6"},
		{src:"images/l7.png?1465310445872", id:"l7"},
		{src:"images/l8.png?1465310445872", id:"l8"},
		{src:"images/l9.png?1465310445872", id:"l9"},
		{src:"images/Stvol.png?1465310445872", id:"Stvol"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1465310445872", id:"w256h2561380453915MouseOptions256x25632"},
		{src:"images/Zoom.png?1465310445872", id:"Zoom"}
	]
};



// symbols:



(lib.Ammo = function() {
	this.initialize(img.Ammo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,64);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Body = function() {
	this.initialize(img.Body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,42);


(lib.Head = function() {
	this.initialize(img.Head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,42);


(lib.infra = function() {
	this.initialize(img.infra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,73);


(lib.Kust = function() {
	this.initialize(img.Kust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,50);


(lib.L1 = function() {
	this.initialize(img.L1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,31);


(lib.l10 = function() {
	this.initialize(img.l10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,27);


(lib.l3 = function() {
	this.initialize(img.l3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,15);


(lib.l4 = function() {
	this.initialize(img.l4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,29);


(lib.l5 = function() {
	this.initialize(img.l5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,17);


(lib.l6 = function() {
	this.initialize(img.l6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,20);


(lib.l7 = function() {
	this.initialize(img.l7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,15);


(lib.l8 = function() {
	this.initialize(img.l8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,21);


(lib.l9 = function() {
	this.initialize(img.l9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,19);


(lib.Stvol = function() {
	this.initialize(img.Stvol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,160);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Zoom = function() {
	this.initialize(img.Zoom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,65);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(1502.4,1,1.184,1.184,0,0,180);

	this.instance_1 = new lib.back();
	this.instance_1.setTransform(6.5,1,1.184,1.184,0,0,180);

	this.instance_2 = new lib.back();
	this.instance_2.setTransform(0,0,1.184,1.184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-751,0,2253.4,362);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjG8IAAhOIBMAAIAAAPIgvAAIAAAQIAsAAIAAAPIgsAAIAAASIAyAAIAAAOgAAbE1IAAgXIACghIAAAAIgWAcIgYAcIghAAIAAhOIAaAAIAAAXQAAAZgBAKIABAAIAWgbIAagfIAeAAIAABOgAAZCuIAAghIguAAIAAAhIgdAAIAAhOIAdAAIAAAeIAuAAIAAgeIAcAAIAABOgAAbAnIgJgUIgjAAIgJAUIgeAAIAnhMIAjAAIApBMgAAOAFIgOgdIgNAdIAbAAgAAWheIgWgcIAAAAIgJAOIgKAOIghAAIAlgoIgjgnIAgAAIATAcIAUgcIAhAAIgkAmIAlApgAhBjmIAAhOIAcAAIAAAcIAOgBQAKAAAJABIAPAFQAHADAEAFIADAFIAAAGQAAAGgCAEQgCAEgGADQgEADgGACIgLADIgPACIgOAAQgSAAgMgBgAglkLIAAAYIAKABIAJgBQAFgBADgCQAEgBABgCQADgDAAgDQAAgDgDgDIgFgEIgIgCIgJgBgAAljmIAAhOIAdAAIAABOgAAnlZIgCgUIhIAAIgCAUIgVAAIgCghIALgBIAMgRIAEgMIABgOIAAgVIBRAAIAABAIANABIgBAhgAgGmiQAAAHgBAGQgBAHgDAGQgDAHgGAGIAoAAIAAgyIgaAAg");
	this.shape.setTransform(6.7,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,89);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(4,1,1).p("Ai0AAIFpAA");
	this.shape.setTransform(18.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,40.4,4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AglqsIBLAAQAAA7A6AAIAATjQg6AAAAA7IhLAAQAAg7g6AAIAAzjQA6AAAAg7g");
	this.shape.setTransform(9.7,68.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F60408","#D12A07","#00FF00","#FF0100"],[0,0.29,0.494,0.678],0,-71.3,0,71.3).s().p("AglKtQAAg7g6AAIAAzjQA6AAAAg7IBLAAQAAA7A6AAIAATjQg6AAAAA7g");
	this.shape_1.setTransform(9.7,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.4,139.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Ek/xBRwMAAAijfMG6dAAAIABAMIAAgMMDFFAAAMAAACjfgAtEtXQjGDGAAEXQAAEYDGDDQDGDHEXgBQEYABDDjHQDGjDAAkYQAAkXjGjGQjDjGkYAAQkXAAjGDGg");
	this.shape.setTransform(926.3,523.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1120.4,0,4093.4,1046.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRDPIAQmdIADAAIAQGdg");
	this.shape.setTransform(1.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,41.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjOACIAAgDIGdgQIAAAjg");
	this.shape.setTransform(20.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,3.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjOgRIGdAQIAAADImdAQg");
	this.shape.setTransform(20.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,3.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Kust();
	this.instance.setTransform(219.5,66.7,1.517,1.517,-5.8);

	this.instance_1 = new lib.Kust();
	this.instance_1.setTransform(220.3,17.3,1.204,1.692,0,-44.2,135.8);

	this.instance_2 = new lib.Kust();
	this.instance_2.setTransform(344,34.9,1.517,1.517,-5.8);

	this.instance_3 = new lib.Kust();
	this.instance_3.setTransform(376.7,0,1.083,0.997,0,-41,139);

	this.instance_4 = new lib.Kust();
	this.instance_4.setTransform(80.3,29.9,1.517,1.517,91.8);

	this.instance_5 = new lib.Kust();
	this.instance_5.setTransform(56.1,53.7,1.517,1.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495,173.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(1941.2,0,1.517,1.517,0,0,180);

	this.instance_1 = new lib.back();
	this.instance_1.setTransform(1.1,0,1.517,1.517,0,0,180);

	this.instance_2 = new lib.back();
	this.instance_2.setTransform(0,0,1.517,1.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-970,0,2911.2,462.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqByIAAhsIhIAAIgDgDIB1h0IB1B0IgCADIhBAAIAABsg");
	this.shape.setTransform(11.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.6,22.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA8BoQAIgBAIgEQAGgDAFgFQAFgFAEgJQADgHACgLQAEgTAAgeIAAhlICgAAIAADqIg2AAIAAi+Ig2AAIAAA1QAAAZgBATQgDAUgEAQQgFARgIAMQgJANgNAHQgKAGgLACQgNAEgNAAgAptCQQgNgBgMgFQgLgEgKgGQgKgHgIgIQgHgIgGgKQgGgIgEgLQgEgLgCgMIgCgYQAAgQADgNQACgMAFgLQAFgMAHgKQAHgKAJgIIATgOQAKgGAMgEQAMgEAMgCQANgCANAAQAUAAARADQAOADAIAEIgLAqQgagIgTAAQgQAAgOAFQgOAEgKALQgKAJgGAPQgGANAAATQAAASAFAPQAGANAJALQAKAKAOAFQAPAGARAAQARAAAcgIIAIAqQgIAEgPADQgSADgUAAQgPAAgOgDgAKcCPIAAhFQAAglAEg+IgBAAQgbA6gOAZIgwBVIg9AAIAAjqIAxAAIAABGQAABJgDAgIACAAQAMgcAeg4IAzhbIA3AAIAADqgAGlCPIAAhdIgMAAQgQAAgKAKQgFAEgFAIIgSAzQgFAOgDAGIg6AAQAHgKAGgRIANgnIAIgRQAFgJAHgHQAGgGANgGIAAAAQgKgCgJgFQgJgFgHgGQgHgIgEgIQgEgKAAgNQAAgQAHgNQAGgMAMgIQAJgIAZgIQATgDAYAAQAaAAArAEIAADogAF/g0QgHADgGADQgGAEgDAHQgDAGAAAJQAAAJADAGQAEAFAGAEQAGAEAIACQAIACAJAAIATgBIAAg/QgLgCgKAAQgJAAgIACgAhlCPIAAjqICQAAIAAAsIhaAAIAAAvIBVAAIAAArIhVAAIAAA4IBfAAIAAAsgAkxCPIAAjoQAQgCA4gCQAZAAASAEQASAFAMAKQAMAJAGAOQAHAPAAAQQAAASgFANQgGAOgLAKQgGAGgJAFQgIAEgKAEQgcAGgQAAIgSgBIAABUgAj8gzIAABEIASABQALAAAIgCQAJgDAGgFQAGgEADgGQADgHAAgJQAAgJgDgGQgCgGgGgFQgFgEgIgCQgIgDgKAAQgOAAgIACgAnDCPIAAi9IhAAAIAAgtIC2AAIAAAtIhAAAIAAC9gAJVhpQgJgCgGgGQgHgFgDgJQgEgIgBgLIAkAAQABALADAFQAEAGAIgBQAIABAEgGQADgFABgLIAkAAQgBALgEAJQgEAIgGAFQgHAGgKACQgJACgMABQgMgBgJgCg");
	this.shape.setTransform(78.8,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,3.1,143.5,29.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.L1, null, new cjs.Matrix2D(-0.169,-0.758,-0.867,0.193,15.8,7.6)).s().p("AiDAjQADgDAEgHQAHgRAOgLIAdgaIAiggIAYgWIAFgCIAFgDIASgHIAUgDIAGAAIAKgFIANgFQAHgEAAgFQABgFgDgDIAsgKIAbB2IgCACQgEAFgBAEQgKAGgZAXQgmAjAAAVIABAPIAAAEIinAlgABFBQIgBgEQAAgHALgOIAMgNQAZgbADAAIAQgLIAAAGQAAAMgPAeQgOAggJAAIgXADQgDAAgDACQABgEAAgFgAB7BEIAOgeIAIgVIAMA7IgtAKQAFgHAGgLgAidhKICHgfQABAHAGgBIAIgBQgKAFgWASQgXATgPAQQgnAegRAYIgDAEgAANhsIAIgCIALABIgCAAIgDABIgVADQABgBAGgCg");
	this.shape.setTransform(15.8,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.6,27.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKCUQgLgDgKgEQgKgFgKgGQgJgHgHgJQgHgHgGgLQgGgJgDgLIgGgYIgCgZQAAgOACgNQACgKAFgLQADgMAHgKQAFgKAIgJQAIgIAJgHQAKgGALgGQAIgEAMgCQANgDANAAQAOAAANADQAMACAKAFQALAEAJAIQAJAGAHAIQAHAJAHAJQAFALAEALQAHAcAAARQAAAPgCANQgCANgEAMQgFAMgFAKQgHAKgIAIQgIAJgJAGQgJAGgLAFQgMAEgMADQgMABgNAAQgNABgMgDgAANgwQgLAGgGALQgHALgEAPQgEANAAASQAAASAEAPQAEAOAHAMQAHAKAKAGQALAGAOAAQANAAAMgGQAKgHAIgKQAIgLAEgPQADgQAAgSQAAgQgDgMQgEgPgIgLQgIgLgKgHQgLgGgOgBQgOABgLAGgAvnCTIAEgsQAHABALAAQALABAKgIQAIgGADgKQADgDgEgIIhRikIA+AAIA0CBIABAAIAoiBIA5AAIgtB0QgeBKgSAXQgMAPgQAIQgIAEgIADQgKABgLAAQgPAAgLgDgAClBqQAIgBAIgEQAHgDAEgFQAFgFAEgKQAEgHACgMQADgSABgfIAAhoICjAAIAADxIg3AAIAAjEIg3AAIAAA3QAAAagBASQgDAWgEAPQgFASgJAMQgJAOgOAHQgKAFgLAEQgMADgOAAgAsZCSIAAjwIChAAIAAAtIhqAAIAAApIAegCQASAAASAGQATAEANAIQANAKAHAOQAIAVAAANQAAASgGAOQgHANgKAKQgJAHgLAGQgLAGgNADQgkAGgTAAQgiAAgZgDgArjAfIAABLIAWACQAKAAAJgDQAJgEAIgGQAFgEADgHQADgIAAgIQAAgJgDgIQgDgGgGgFQgIgFgJgDQgKgDgKAAgAPOCTIAAhgIgOAAQgQAAgKAJQgFAFgFAJIgTA0QgEAOgEAHIg6AAQAHgMAFgQIAWg7QAGgJAGgGQAHgGANgGIAAgBQgKgCgJgFQgKgFgHgGQgHgIgEgIQgEgKAAgNQAAgQAHgOQAGgNAMgIQAJgIAagIQATgEAZAAQAbAAArAFIAADugAOmg1QgHACgGAEQgGAFgDAGQgDAHAAAJQAAAIADAHQAEAFAGADQAGAFAJACQAHACAKAAIAUgBIAAhAQgMgCgLAAQgIAAgJACgAL2CTIAAhmIhaAAIAABmIg4AAIAAjxIA4AAIAABdIBaAAIAAhdIA3AAIAADxgAGkCTIAAjxICXAAIAAAtIhfAAIAAAxIBZAAIAAAsIhZAAIAAA6IBkAAIAAAtgAjsCTIAAhIQABgmAEg+IgBAAQgbA7gPAZIgwBYIg/AAIAAjxIAyAAIAABIQAABMgDAgIACAAQAMgcAfg6IA0heIA4AAIAADxgApCCTIAAjxICXAAIAAAtIhfAAIAAAxIBZAAIAAAsIhZAAIAAA6IBjAAIAAAtgAkzhsQgKgDgGgFQgGgGgFgHQgDgJgBgLIAlAAQAAAKADAGQAFAFAIABQAHgBAFgFQADgGACgKIAlAAQgCALgEAJQgEAIgGAFQgIAGgKACQgJADgMAAQgMAAgJgDg");
	this.shape.setTransform(109,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,3.2,205.7,30.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.infra, null, new cjs.Matrix2D(-1.011,0,0,1,73.7,-36.2)).s().p("AqmFeQgYgRgOgZIgGgLIAAkKIAHgKQAPgYAYgOIKiAAIAAgMIARAAQgCg/Acg3QAgg+AyguQAtgrA4gXQA2gWA5gEIABgCIA2AAIA/ALQBMAQA8AyQA5AxAoBAQAfAxgBA6IAHAIIAAB9IgIAUQgYBGgwA6Qg0A/hJAgIg6Aag");
	this.shape.setTransform(72.3,35.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.7,70.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-346.9,0,346.9,0).s().p("Eg2MAEJIAAoRMBsZAAAIAAIRg");
	this.shape.setTransform(379.4,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.5,0,693.9,53.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Ammo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,64);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Stvol();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244,160);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Head, null, new cjs.Matrix2D(1,0,0,1,-20,-21)).s().p("AAADSQgHgJgMgGQgXgLgaAAQgJAAgHAFQgIAGAAAMIAEADIhMAAQADgGAAgIQAAgggGgcQgJglgPAAIgIABIAAhDIASAUQAnAqAMABIADgBQAAgGgJgGIgJgFIgggcQgDgEgLgTIgIgNIAAgLIADgDQAJgOAbAAQAFAAAHACQAGACAFAAIAAAAIALAIQASAKAJAAIAIABQADAAAHgFQAIgGAAgIQAAgDgMgMIgPgOIgHgbIgBgCIADgRQAHg3AEgGQABgEAfgjIAPgSIAHgCIAMgEIADAAIADADIADAGQgNANgMAOQgWAaAAARIgBAUQgBAMAFAIQAEAKAAAEIABADQABAEACABIABAAQABAFAEAAQAEAAAAgEIAAAAQAEAAAFgJQAEgBAEgHQAFgJgBgGIgCgEIgBgFQgBgdAkgZIAWgTQAGAAAFADIAKAGIgXAcQgSAWAAALQAAAGAKABQAGgBAUgUQAUgVAMAAQAKAEAAACQABAFhNBFIACABIABABIABAEIADACQALAAAMgOIALgNQA0gwAAgMQAAgGgKgGQgJgHgFAAQgHABgEACIgJAGIAAgBIgEgBIAKgQQAFgIAEgIQATgEABgQIBnAAIAABDQgJAGAAARIACAtQgCAKgNAjQgKAdAAAaQAAAKAHAHQAFAGAIAAQAHAAAFgGIAACngAA8AkQAKAAAoglQAqgqAAgUQAAgHgJgFQgJgGgGAAQgGAAgPAGQgHABgKANQgIANgBAEQABAEADABQgYAWAAADQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIACABQAFAAAagbQAbgbACAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIAEABQAFABAAAEQAAAIgTATQgaAbgFAGQgJAJgTANIgSALQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIADACIAHgCQACACAFAAgAjHDSIAAgFIADAFgAh/gVIgMgCIgIgEIgHgCIgIAAIgLgCQgKAAgKADIgGADIAAi4IBYAAQgJAOgIATQgbA9AAAvQAAAFACAEIgCAAQgFgBAAAGQAAADATAKQAVAKADAGQgDACgBADIgGgBgAh8gtIgBgBIABAAIAAABgAguhNQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBABIgEgLQgFgKAAgLIABgFIANgSIgBAUQAAAAAAABQAAAAAAABQABAAAAABQABAAAAABIADABQAEAAABgDIAGgRIAIgVQACgEAAgEIACgFQAXgMAEABIAAAAQgIAEgMARQgXAZAAATQAAAEACADIgBAAQgBAAgHAIQgGAJAAAFQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIABACIAAAAIgBAAgAgRiuQABgLAGABIAFACIAEACIABABQgGAEgJADIgCABgAAti3QgLgFgGAAIgBAAIgDgBQgDABgFADQgEADgDAAIgEgBQAEgEAHgIQAEADAFAAQAHAAAcAEIADAAIgFAMQgEgEgJgDgAgEjBIgFgHIgGgJIAVAAIABAEIgHAOIgEgCg");
	this.shape.setTransform(20,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,42);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.l10();
	this.instance.setTransform(81.7,51.3);

	this.instance_1 = new lib.l9();
	this.instance_1.setTransform(77.7,34.3);

	this.instance_2 = new lib.l8();
	this.instance_2.setTransform(61.7,47);

	this.instance_3 = new lib.l7();
	this.instance_3.setTransform(66.7,35);

	this.instance_4 = new lib.l6();
	this.instance_4.setTransform(24.7,46.3);

	this.instance_5 = new lib.l5();
	this.instance_5.setTransform(22.3,38);

	this.instance_6 = new lib.l4();
	this.instance_6.setTransform(0,47.3);

	this.instance_7 = new lib.l3();
	this.instance_7.setTransform(6.4,38.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Body, null, new cjs.Matrix2D(1,0,0,1,-44,-21)).s().p("Am3DSIAAiQQAHgHgBgPIAAgSIAAgKQABgPgHgFIAAhLIAYgWQAyg1AJgEQAbgPBUgUQAbgHAyAAQAQAAAFgJIJKAAIAAGjgAm3jRIBQAAQgPAHgPAJQgPAHgjAkg");
	this.shape.setTransform(54.7,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,78.3);


(lib.Символ26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgBDPIgQmdIAjAAIgQGdg");
	this.shape.setTransform(1.9,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.8,41.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("AKjAAQAAEXjGDGQjGDGkXAAQkWAAjGjGQjGjGAAkXQAAkWDGjGQDGjGEWAAQEXAADGDGQDGDGAAEWg");
	this.shape.setTransform(67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,137,137);


(lib.Символ22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(18.2,0,1,1,0,0,0,18.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:63},9).to({y:0},9).to({y:-60.9},9).to({y:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,40.4,4);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglKtQAAg7g6AAIAAAAIAAzjQA6AAAAg7IAAAAIBLAAQAAA7A6AAIAAAAIAATjQg6AAAAA7IAAAAg");
	mask.setTransform(9.6,68.5);

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.setTransform(9.9,67.8,1,1,0,0,0,18.2,0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(9.8,66.7,1,0.982,0,0,0,6.7,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ34();
	this.instance_2.setTransform(9.7,68.5,1,1,0,0,0,9.7,68.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,20.4,138.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(247.5,87,1,1,0,0,0,247.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:95},49).to({y:87},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495,173.9);


(lib.Символ23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(11.8,11.5,1,1,0,0,0,11.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.5},9).to({y:11.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.6,22.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(82.2,23.4,1,1,0,0,0,82.2,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:82.1,scaleX:1.14,scaleY:1.14,x:82.1},6).to({regX:82.2,scaleX:1,scaleY:1,x:82.2},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,3.1,143.5,29.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(105.1,20.7,1,1,0,0,0,111.2,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:85.1},20).to({x:105.1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.7,30.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA5A1IAAgPIAOgMIAZgZQAEgDACgEQACgFAAgEQAAgHgEgEIgFgDQgDgCgFAAQgGAAgGADQgFACgFAEIgGgRQAGgFAIgDQAGgCANgBQAJAAAHADQAGACAFAEQAFAFACAGQACAFAAAHQAAAHgCAGQgCAFgEAEIgIALIgUASIAmAAIAAAUgAABA1IAAhQIgBAAIgRAKIgEgSIAZgNIAUAAIAABlgAhBA1IgTgnIgBAAIgIATIgJAUIgbAAIAfg1Igeg0IAcAAIARAlIARglIAbAAIgeA0IAgA1g");
	this.shape.setTransform(32.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(73.9,36.3,1,1,0,0,0,72.3,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,1.2,144.7,70.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(485.6,231.4,1,1,0,0,0,485.6,231.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:239.4},49).to({y:231.4},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-970,0,2911.2,462.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBXQgNgDgHgEIAHgfQAYAIAQABIANgCQAFgCAFgDQAFgEADgFQACgFAAgGQABgIgDgFQgDgGgGgEQgGgDgIgCQgKgCgMAAQgNAAgLACIALhcIBgAAIAAAiIhDAAIgEAbIAMAAQAMAAALADQAMAEAJAGQALAHAFAJQADAFACAHIACAOQgBANgFALQgFALgKAJQgKAJgOAFQgSAFgMAAQgPAAgOgDg");
	this.shape.setTransform(50.8,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(32.5,32,1,1,0,0,0,32.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,64);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(217.5,165.3,1,1,0,0,0,215.5,162);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.5,x:231.8,y:168.5},39).to({rotation:0,x:217.5,y:165.3},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,3.3,244,160);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(7.7,13.3,1,1,0,0,0,15.8,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.L1, null, new cjs.Matrix2D(0.954,0.3,-0.3,0.954,-8.7,-19)).s().p("AiyBpIAzijIAMgGQAOgJAFAAIAIgEQAIgEACgBIAQgDQAFAAAJgFQAJgFAEAAIAGAAIAGgHIADgCQALgIACgEIAYgeQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAgBIAHACIADAAQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBABAAICYAwIgYBLQgDABgEAGQgIAIAAAMIgLAgQABAFAEAAIgxCagAB0gDQgHAOgHAJQgUAWgEAGIgbAXQgSARAAAHQAAAFAGAAQBahQAAgfQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAIgEgCQgDAAgEANgAhxhmQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAQAFABAAgHIAAgMQABgJAKgOQAAgIgFgBIAMgmIBEAWIAAACQAAACADACQADADADAAQAGAAAJAEIAEACQgDAAgHAGIABgFQAAgGgFAAIgQAaIgDAFIgBAAQgCABgFAFQgEAFAAAHIgEACQgEABgRAGQgQAIgNAAIgaADIgEACg");
	this.shape.setTransform(17.3,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-7,43.4,38);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(49.3,39.1,1,1,0,0,0,49.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,78.3);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23_1();
	this.instance.setTransform(109.8,-37.5,1,1,180,0,0,11.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// l10
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(49.7,81.1,1,1,0,0,0,49.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// Head
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(108.7,40.9,1,1,0,0,0,16.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:63.4,x:111.2,y:69.9},14).wait(52).to({rotation:0,x:108.7,y:40.9},13).wait(21));

	// L1
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(92,61.1,1,1,0,0,0,5.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:5.5,rotation:67,x:85.7,y:58.6},14).wait(52).to({regX:5.6,rotation:0,x:92,y:61.1},13).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-48.9,131.5,169.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23_1();
	this.instance.setTransform(109.5,-36.4,1,1,180,0,0,11.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// l10
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(49.7,81.1,1,1,0,0,0,49.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// Head
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(107,41.7,1,1,0,0,0,16.9,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:36.2,rotation:63.2,x:110.7,y:74},14).wait(37).to({regY:36.1,rotation:0,x:107,y:41.7},14).wait(35));

	// L1
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(91.7,61.4,1,1,0,0,0,5.6,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:5.5,rotation:73.2,x:84.8,y:58.2},14).wait(37).to({regX:5.6,rotation:0,x:91.7,y:61.4},14).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,-47.8,129.8,168.2);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(-37.5,-70.1,1.52,0.948,0,0,0,20.9,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(-107.3,-70.2,1.556,0.897,0,0,0,20.6,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(-72.1,-34.3,0.923,1.486,0,0,0,1.6,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ26_1();
	this.instance_4.setTransform(-71.8,-79.7,0.923,0.249,0,0,0,1.8,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 2
	this.instance_5 = new lib.Символ23();
	this.instance_5.setTransform(-72.5,-70.5,0.837,0.837,0,0,0,67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1 - копия
	this.instance_6 = new lib.Символ22_1();
	this.instance_6.setTransform(-72.5,-70.5,1,1,0,0,0,67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ23();
	this.instance_7.setTransform(-72.5,-70.5,1,1,0,0,0,67.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 9
	this.instance_8 = new lib.Символ31();
	this.instance_8.setTransform(-408.2,-211.1,1,1,0,0,0,554.6,344.7);
	this.instance_8.alpha = 0.781;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2083.2,-555.8,4093.4,1046.4);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ40 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.ammo = new lib.Символ9();
	this.ammo.setTransform(-31.5,52,0.631,0.631,0,0,0,32.5,31.9);

	this.timeline.addTween(cjs.Tween.get(this.ammo).wait(2));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(125.9,18.6,1.224,1.224,0,0,0,102.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(103.7,24.8,1.263,1.263,0,0,0,82.2,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,0,303.7,72.2);


(lib.Символ39 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(255.1,60.8,1,1,0,0,0,122,80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// 2kadr
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(415.1,23.5,0.562,0.845,0,0,0,9.6,68.5);

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(329.2,48.7,1,1,0,0,0,73.8,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135,-16,244,160);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Zoom();
	this.instance.setTransform(953,437.8,0.642,0.642);

	this.pricel = new lib.Символ21_1();
	this.pricel.setTransform(459.9,375.4,1,1,0,0,0,-525.8,-207.9);
	this.pricel.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pricel},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1103.5,21.5,4108,1062);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("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");
	var mask_graphics_799 = new cjs.Graphics().p("Aw0MKQgegXgfgQIAAAAQgggQgQgKIAAAAQhfgGgOgbIAAAAQgEgHAAgQIAAAAQABgPgEgHIAAAAQgGgKgZgKIAAAAQgagKgGgGIAAAAQgJgJAAgOIAAAAIACgXIAAAAQgBgwgIg1IAAAAQgHgxAAglIAAAAQgDgqADgjIAAAAQAFg0ATgMIAAAAQAHgEAIAAIAAAAIAEAAIAAAAQAOgCAUgBIAAAAQAEgPABgBIAAAAQAKgKAnAAIAAAAQASAAAYALIAAAAIAYALIAugSIAAAAQALAAAJALIAAAAIALAOIAAAAIAIAAIAAgbQgFgLgQgVIAAAAQgIgKAAgTIAAAAQAAgPAFgOIAAAAQAGgTAMAAIAAAAQAGAAAPATIAAAAQARAUABAMIAAAAQABASANAKIAAAAQANAKACANIAAAAIABABQABACAGAAIAAAAQALAAALgPIAAAAQAOgTAJgFIAAAAIAVAAIACABQACABgBAGIAAAAQAAAGgUBCIAAAAIAAAKIAAAAIABAGIAAAAQABAHAIAFIAAAAIAFgQIAAAAIABgCIAAAAQADgIAKgEIAAAAQAKADAGAKIAAAAQAEAGABAIIAAAAQAHAiABACIAAAAIAQAAQAAgNgLgeIAAAAIgCgHIAAAAIgQgpIAAAAIAAguIABgCIAAAAQABgCAGAAIAAAAQANAAASAYIAAAAQAVAbAFACIAAAAIABgBQgLgUgRgRIAAAAQgJgIAAgVIAAAAIABgNIAAAAIACgBIAJgBIAAAAQAMAAAAACIAAAAQABAFAHAFIAAAAIAEgBQgIgJgJgFIAAAAQgKgFgFgFIAAAAIAAgJIAFgBIAAAAIALgBIAAAAQAOAAAJAFIAAAAIAOALIAAAAIABAAIAAAAIgBAAIAAAAIgOgLIAAAAQgJgFgOAAIAAAAIgLABIAAAAIgFABIAAAAIAAAJQAFAFAKAFIAAAAQAJAFAIAJIAAAAIgEABQgHgFgBgFIAAAAQAAgCgMAAIAAAAIgJABIAAAAIgCABIgBANIAAAAQAAAVAJAIIAAAAQARARALAUIAAAAIgBABQgFgCgVgbIAAAAQgSgYgNAAIAAAAQgGAAgBACIAAAAIgBACIAAAAIAAAuIAQApIAAAAIgQAAQgGgKgKgDIAAAAQgKAEgDAIIAAAAIgQAAIAAgKIAAAAQAUhCAAgGIAAAAQABgGgCgBIAAAAIgCgBIgVAAQgJAFgOATIAAAAQgLAPgLAAIAAAAQgGAAgBgCIAAAAIgBgBQgCgNgNgKIAAAAQgNgKgBgSIAAAAQgBgMgRgUIAAAAQgPgTgGAAIAAAAQgMAAgGATIAAAAQgFAOAAAPIAAAAQAAATAIAKIAAAAQAQAVAFALIAAAAIAAAbIgIAAIgLgOIAAAAQgJgLgLAAIAAAAIguASIAAAAIgYgLQgYgLgSAAIAAAAQgnAAgKAKIAAAAQgBABgEAPIAAAAQgUABgOACIAAAAIgEAAIAAAAQgIAAgHAEIAAAAIg2gwIjChgQlwm/HtixIAAAAQHuixKlgiIAAAAQKkgjMQATIAAAAQH9AMBDHQIAAAAQANBYACBXIAAAAQACCshLCfIAAAAIgZAAQgqAOgTABIAAAAIgDAAIAAAAIADAAIAAAAQATgBAqgOIAAAAIAZAAIAPAAQAdAIAgA5IAAAAQAeA3AAAmIAAAAQAAAngmAZIAAAAQgpAbgDAMIAAAAQgLAugFAGIAAAAQgTAZhEAXIAAAAIh5ACQgdAdgkAYIAAAAQhGAvhBAAIAAAAQgRAAgSgCIAAAAQgYgDgKgGIAAAAIhhASIAAAAQhhASgMAAIAAAAQgqAAgQgFIAAAAQgLgFgIgCIAAAAIjggBIgcgHQgxAGgmAQIAAAAIg9AdIAAAAQhSAmiiAAIAAAAQiIAAgwgRIAAAAQgNgFgLgJIAAAAQgKgHgHgCIAAAAIiQAAIgdAFIAAAAQgUAEgIADIAAAAIjtAAQgYgGhAgHIAAAAQg4gHgKAAIAAAAQgQAAgiADIAAAAQgpAEgNAFIAAAAIiRACQghACgVATIAAAAQgXAUgMACIAAAAgAtrDQIAGAUIAAAAIAEAPIAAAAIADAIIAAAAIAHAAIgCgIIAAAAQgLgdgHgHIAAAAgAOAh6QBZAKBaARIAAAAQBZARAUALIAAAAQATALASAPIAAAAQATAQAPAHIAAAAIA9ARIAAAAQA1AMAIAIIAAAAQA8A2AMA4IAAAAQAEARARAMIAAAAIAcARIAAAAQAQAMAEAMIAAAAIAKAcIAAAAIAkAAIAAgBIAAAAIAAABIAAAAIgkAAIgKgcIAAAAQgEgMgQgMIAAAAIgcgRIAAAAQgRgMgEgRIAAAAQgMg4g8g2IAAAAQgIgIg1gMIAAAAIg9gRIAAAAQgPgHgTgQIAAAAQgSgPgTgLIAAAAQgUgLhZgRIAAAAQhagRhZgKIAAAAIi8AAQgZAPguAEIAAAAIiWACQg6ADgMgDIAAAAIh7AAQgwALghAVIAAAAIgzAfIAAAAIgdAJIAAAAQgSAGgUAPIAAAAQgHAGgqAIIAAAAQgnAKgHAKIAAAAQgMABgMACIAAAAIgPACIAAAAIgfgBIAAAAIgXgCIjAgBQgDgDgKgFIAAAAIgLgEIAAAAQgJgCAAgDIAAAAIgCgEIAAAAQgIgFhUgBIAAAAIh3AAIgvAmIAAAAQgZAWgsAHIAAAAIgjAAQgIgIgFgCIAAAAQAFACAIAIIAAAAIAjAAQAsgHAZgWIAAAAIAvgmIAAAAIB3AAQBUABAIAFIAAAAIACAEIAAAAQAAADAJACIAAAAIALAEIAAAAQAKAFADADIAAAAIDAABIAXACIAfABIAAAAIAPgCIAAAAQAMgCAMgBIAAAAQAHgKAngKIAAAAQAqgIAHgGIAAAAQAUgPASgGIAAAAIAdgJIAAAAIAzgfIAAAAQAhgVAwgLIAAAAIB7AAQAMADA6gDIAAAAICWgCQAugEAZgPIAAAAgAYcDiIADAAIAAAAIgDAAgAYhDiIgCAAIAAAAIACAAgAtbCXIAEAJIAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBIAAAAIgIgJIAAAAgAtUB1IAAAAIAAAAIAAAAgAtUB1QABAAAAgGIAAAAQAAgDgOgMIAAAAQgPgLAAgKIAAAAQAAgGAEgCIAAAAQAEgBAZgDIAAAAQAAgCAmAAIAAAAIgBgCIAAAAIADAAIAAAAIgDAAIAAAAIABACIAAAAQgmAAAAACIAAAAQgZADgEABIAAAAQgEACAAAGIAAAAQAAAKAPALIAAAAQAOAMAAADIAAAAQAAAGgBAAgAtUB1IgBAAIAAAAIABAAgAtVB0IAAAAIAAAAIAAAAgAtWB0IAAgBIAAAAIAAABgAtWBzIAAAAIAAAAIAAAAgAsUA7IAAAAIAAAAIAAAAgAsFA7IApgBIAAAAIgpABgArEA5IAFAAIAAAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:248.9,y:20.9}).wait(799).to({graphics:mask_graphics_799,x:248.9,y:20.9}).wait(1));

	// Символ 1
	this.ol2 = new lib.Символ1();
	this.ol2.setTransform(469.6,58.5,0.604,0.582,0,0,180,64,60.5);

	this.ol2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.ol2).to({x:368.4,y:63.4},99).wait(100).to({x:343.5,y:59.2},100).to({x:341.1,y:59.5},100).to({x:199.6,y:76.1},100).to({x:197.5,y:76},84).to({x:197.1},16).to({x:49.6,y:72.5},100).to({_off:true},1).wait(100));

	// Символ 1
	this.ol1 = new lib.Символ1копия();
	this.ol1.setTransform(60.1,83.9,0.783,0.783,0,0,0,64.1,60.5);

	this.ol1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.ol1).to({x:188.7,y:75.1},99).wait(100).to({x:238.9,y:74.8},100).to({x:239.2},100).to({x:298.1,y:70.5},100).to({x:319.1,y:69.5},100).to({x:373.1,y:56.4},100).to({x:516.5,y:56.9},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,-1.7,41.1,100.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AlJldIKTAAIAAK7IqTAAg");
	this.shape.setTransform(-379.9,-70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AlIFdIAAq6IKRAAIAAK6g");
	this.shape_1.setTransform(-379.9,-70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(799));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(273.9,10.3);

	// Символ 1
	this.ol2 = new lib.Символ1();
	this.ol2.setTransform(392.3,63.5,0.604,0.582,0,0,180,64,60.5);

	this.ol2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.ol2).to({x:368.4,y:63.4},99).wait(100).to({x:343.5,y:59.2},100).to({x:341.1,y:59.5},100).to({x:199.6,y:76.1},100).to({x:197.1,y:76},100).to({x:49.6,y:72.5},100).to({_off:true},1).wait(100));

	// Символ 1
	this.ol1 = new lib.Символ1копия();
	this.ol1.setTransform(138.3,81.9,0.783,0.783,0,0,0,64.1,60.5);

	this.ol1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.ol1).to({x:188.7,y:75.1},99).wait(100).to({x:238.9,y:74.8},100).to({x:239.2},100).to({x:298.1,y:70.5},100).to({x:261.3,y:74.5},100).to({x:373.1,y:56.4},100).to({x:516.5,y:56.9},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-413.9,-106,844.7,204.8);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(723,250.1,1.517,1.517,0,0,0,63.5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:258.1},49).to({y:250.1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,1292.5,356.1);


(lib.Символ12копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Kust.png
	this.instance = new lib.Символ25();
	this.instance.setTransform(1006.9,280.1,1,1,0,0,0,247.5,87);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(644.9,286.1,1,1,0,0,0,247.5,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Символ 2
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(305.7,176.2,1,1,0,0,0,644.7,176.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// back
	this.back = new lib.Символ15();
	this.back.setTransform(660.7,141.7,1.35,1.35,0,0,0,485.6,231.5);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1304.4,-170.9,3930.2,624.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Kust.png
	this.instance = new lib.Kust();
	this.instance.setTransform(675.5,266.4,1.184,1.184,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Kust.png
	this.instance_1 = new lib.Kust();
	this.instance_1.setTransform(676.1,227.9,0.94,1.32,0,-44.2,135.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Kust.png
	this.instance_2 = new lib.Kust();
	this.instance_2.setTransform(966.6,247.1,1.184,1.184,-5.8);

	this.instance_3 = new lib.Kust();
	this.instance_3.setTransform(772.6,241.5,1.184,1.184,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Kust.png
	this.instance_4 = new lib.Kust();
	this.instance_4.setTransform(798.1,214.4,0.845,0.778,0,-41,139);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Kust.png
	this.instance_5 = new lib.Kust();
	this.instance_5.setTransform(567,237.6,1.184,1.184,91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Kust.png
	this.instance_6 = new lib.Kust();
	this.instance_6.setTransform(548.1,256.2,1.184,1.184);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Символ 2
	this.instance_7 = new lib.Символ2копия();
	this.instance_7.setTransform(486.5,251.6,1,1,0,0,0,63.5,59.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// back
	this.instance_8 = new lib.Символ38();
	this.instance_8.setTransform(659,190.5,1,1,0,0,0,378.8,180.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470.8,10,2253.4,362);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ13 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(600,106.1,1,1,0,0,0,600,204.1);

	this.main = new lib.Символ12копия();
	this.main.setTransform(600,106.1,1,1,0,0,0,600,204.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.main}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470.8,-88,2253.4,362);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{main:0});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		function getWindowSize() { 
		                return {
				width: Math.min(document.documentElement.clientWidth,       window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight,    window.innerHeight || 0)
		                }
		}
		window._setCanvasSize = function() {
				var windowSize = getWindowSize();
				stage.canvas.style.width = windowSize.width + 'px';
				stage.canvas.style.height = 120 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 120;
					
				_this.main.x = windowSize.width / 2;
				_this.main.y = 60;	
				
				_this.stvol.x = windowSize.width - (windowSize.width / 4);
				_this.stvol.y = 120;
			
				_this.cir.x = windowSize.width;
				_this.cir.y = 0;
			
				_this.txt.x = 0;
				_this.txt.y = 0;
			
			
		}
				
		window.onresize=function(){_setCanvasSize();}
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		 function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndStop(1);
			_this.pricel.visible=true;
			_this.stvol.gotoAndPlay(1);
			_this.txt.gotoAndPlay(1);
			_this.cir.visible=false;
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndStop(0);
			_this.pricel.visible=false;
			_this.stvol.gotoAndPlay(0);
			_this.txt.gotoAndPlay(0);
			_this.cir.visible=true;
		}
		
		
		this.main.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		_this.pricel.visible=false;
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// stvol
	this.stvol = new lib.Символ39();
	this.stvol.setTransform(1031.8,119.1,1,1,0,0,0,257.9,82.8);

	this.timeline.addTween(cjs.Tween.get(this.stvol).wait(1));

	// mm
	this.cir = new lib.sprite113();
	this.cir.setTransform(1198.9,-1,0.499,0.499,0,0,0,90,-28.8);

	this.timeline.addTween(cjs.Tween.get(this.cir).wait(1));

	// Слой 12
	this.txt = new lib.Символ40();
	this.txt.setTransform(0,-1,1,1,0,0,0,-66.7,-41);

	this.instance = new lib.Символ14();
	this.instance.setTransform(-109.9,59.7,1.075,3.068,0,0,0,346.9,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).wait(1));

	// pricel
	this.pricel = new lib.Символ11();
	this.pricel.setTransform(311.4,159,1,1,0,0,0,913.6,523.2);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 5
	this.main = new lib.Символ13();
	this.main.setTransform(590,62.1,1,1,0,0,0,655.9,142.1);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1105.7,-282.7,4108,1061);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
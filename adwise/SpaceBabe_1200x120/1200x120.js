(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/chains_transparent_1.png?1465476941028", id:"chains_transparent_1"},
		{src:"images/chains_transparent_2.png?1465476941028", id:"chains_transparent_2"},
		{src:"images/earth.png?1465476941028", id:"earth"},
		{src:"images/girl_slice_03.png?1465476941028", id:"girl_slice_03"},
		{src:"images/girl_slice_06.png?1465476941028", id:"girl_slice_06"},
		{src:"images/girl_slice_08.png?1465476941028", id:"girl_slice_08"},
		{src:"images/girl_slice_10.png?1465476941028", id:"girl_slice_10"},
		{src:"images/girl_slice_17.png?1465476941028", id:"girl_slice_17"},
		{src:"images/girl_slice_20.png?1465476941028", id:"girl_slice_20"},
		{src:"images/girl_slice_23.png?1465476941028", id:"girl_slice_23"},
		{src:"images/girl_slice_26.png?1465476941028", id:"girl_slice_26"},
		{src:"images/girl_slice_29.png?1465476941028", id:"girl_slice_29"},
		{src:"images/girl_slice_31.png?1465476941028", id:"girl_slice_31"},
		{src:"images/girl_slice_34.png?1465476941028", id:"girl_slice_34"},
		{src:"images/hook_1.png?1465476941028", id:"hook_1"},
		{src:"images/stars.jpg?1465476941028", id:"stars"},
		{src:"images/target.png?1465476941028", id:"target"},
		{src:"images/window.png?1465476941028", id:"window"}
	]
};



// symbols:



(lib.chains_transparent_1 = function() {
	this.initialize(img.chains_transparent_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,111);


(lib.chains_transparent_2 = function() {
	this.initialize(img.chains_transparent_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,164);


(lib.earth = function() {
	this.initialize(img.earth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,201);


(lib.girl_slice_03 = function() {
	this.initialize(img.girl_slice_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,181);


(lib.girl_slice_06 = function() {
	this.initialize(img.girl_slice_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,163);


(lib.girl_slice_08 = function() {
	this.initialize(img.girl_slice_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,175);


(lib.girl_slice_10 = function() {
	this.initialize(img.girl_slice_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,175);


(lib.girl_slice_17 = function() {
	this.initialize(img.girl_slice_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,43);


(lib.girl_slice_20 = function() {
	this.initialize(img.girl_slice_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,164);


(lib.girl_slice_23 = function() {
	this.initialize(img.girl_slice_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,146);


(lib.girl_slice_26 = function() {
	this.initialize(img.girl_slice_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,98);


(lib.girl_slice_29 = function() {
	this.initialize(img.girl_slice_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,84);


(lib.girl_slice_31 = function() {
	this.initialize(img.girl_slice_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,112);


(lib.girl_slice_34 = function() {
	this.initialize(img.girl_slice_34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);


(lib.hook_1 = function() {
	this.initialize(img.hook_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,90);


(lib.stars = function() {
	this.initialize(img.stars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,548);


(lib.target = function() {
	this.initialize(img.target);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,188);


(lib.window = function() {
	this.initialize(img.window);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,765,390);


(lib.Символ74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#000000","rgba(0,0,0,0)"],[0,0.463,1],757.8,0.1,-757.7,0.1).s().p("Eh2YA1VMAAAhqpMDsxAAAMAAABqpg");
	this.shape.setTransform(1687.2,293.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#000000","rgba(0,0,0,0)"],[0,0.463,1],-757.7,0,757.8,0).s().p("Eh2YA1VMAAAhqpMDsxAAAMAAABqpg");
	this.shape_1.setTransform(-652.3,258);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.window, null, new cjs.Matrix2D(11.377,0,0,1.4,-423.4,-273)).s().p("EhCIAqqMAAAhVTMCESAAAMAAABVTg");
	this.shape_2.setTransform(-319.2,273);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.window, null, new cjs.Matrix2D(26.863,0,0,1.4,-20115.3,-273)).s().p("EhDvAqqIgFoAMgAEhNTMCHxAAAMAAABVTg");
	this.shape_3.setTransform(1460.3,273);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.window, null, new cjs.Matrix2D(1.4,0,0,1.4,-565.2,-273)).s().p("EhIAAqqMAAAhVTMCP9AAAMAAEBNTIgEIAg");
	this.shape_4.setTransform(565.2,273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1410.1,-83.3,3855.1,717.8);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIC2QhLgEgzg5Qgzg4AEhJQAEhLA4gzQA5gzBJAEQBMAEAyA4QAzA5gEBJQgEBLg4AzQg0AvhFAAIgJAAg");
	this.shape.setTransform(18.3,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,36.6);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chains_transparent_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,164);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("AAAiuIAAFd");
	this.shape.setTransform(0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,38);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("AAAiuIAAFd");
	this.shape.setTransform(0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,2.9,38);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("ACvAAIldAA");
	this.shape.setTransform(17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,38,2.9);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,1,1).p("ACvAAIldAA");
	this.shape.setTransform(17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,38,2.9);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D31007").ss(2.9,2,0,3).p("AgcAcIA5AAAgcgbIAAAp");
	this.shape.setTransform(2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,8.8,8.5);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg8oAfkMAAAg/HMB5QAAAMAAAA/Hg");
	this.shape.setTransform(606.7,165.8,3.619,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-797.7,-36.2,2809,404.1);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,18.5);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AhABBQgbgbAAgmQAAglAbgbQAbgbAlAAQAmAAAbAbQAbAbAAAlQAAAmgbAbQgbAbgmAAQglAAgbgbg");
	this.shape.setTransform(9.3,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.5,18.5);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.target();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,188);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(64.7,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,0,121.3,35.1);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chains_transparent_2();
	this.instance.setTransform(0,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.5,53,164);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chains_transparent_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,111);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hook_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,90);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AgzBcIAAgFIAdg8Ig/hvIAAgHIA2AAIAgBEIACAAIAfhEIA0AAIAAAHIhWCwg");
	this.shape.setTransform(8.6,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,18.6);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AAbBcIgnhIQgGACgMAAIAABGIgwAAIAAi3IAwAAIAABGIADAAIAQgBIALgFQAHgGAFgKQAFgNgBgjIAxAAQAAAlgEAQQgEAOgHAKQgMANgJAEIAyBSIAAAHg");
	this.shape.setTransform(8,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,18.6);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("Ah0BcIAAi3IAxAAIAACMIAsAAIAAiMIAvAAIAACMIAsAAIAAiMIAxAAIAAC3g");
	this.shape.setTransform(11.7,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.5,18.6);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("ABEBcIAAi3IAvAAIAAC3gAhyBcIAAi3IAwAAIAAA3IAiAAQALAAASAGQAKAFAJAJQAIAJAFAKQADAMAAAMQAAANgDALQgFAMgIAJQgJAJgKAFQgSAGgLAAgAhCAyIAiAAQAKAAAFgIQAFgGAAgJQAAgJgFgHQgGgGgJAAIgiAAg");
	this.shape.setTransform(11.5,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.1,18.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AAvBeIgvhrIguBrIguAAIAAgIIBUizIASAAIBTCzIAAAIg");
	this.shape.setTransform(9.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,18.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AAvBeIgLgYIhHAAIgLAYIgvAAIAAgIIBUizIATAAIBUCzIAAAIgAAVAeIgVgvIgUAvIApAAg");
	this.shape.setTransform(9.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,18.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AApBdIAAhTIgnApIgEAAIgmgpIAABTIgxAAIAAi5IARAAIBIBRIBJhRIARAAIAAC5g");
	this.shape.setTransform(9.1,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,18.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyMsQisAAiRiTQgtgwgng5QgRgZgOgbIjgnFQghhBAYhHQAYhIBDgiQBKgmBMAfQA8AYA1BFIAAoSQAAhLA1g0QA1g1BKAAQBLAAA0A1QA1A1AABKIAADZQAegNAgAAQA+AAAyAmQAxAmAQA5QAigNAhAAQBBAAAyApQAxApAMA+QAfgMAhAAQBLABA0A0QA1A1AABIIABFdQAAC+iHCHQiGCHi9AAgAo5hQQgYAMgIAZQgJAYAMAVIDfHDQAJASAQAYQAeAsAjAlQBvB0B8AAIE+AAQCMAABjhjQBjhlAAiMIgBldQAAgXgRgRQgSgRgZAAQgZAAgRARQgSARAAAXIAACFIh4AAIAAkHQAAgZgRgRQgSgSgZAAQgZAAgRASQgSARAAAZIAADOIh4AAIAAlGQAAgYgTgSQgTgSgaAAQgZAAgTAUQgRATAAAaIAAEtIh5AAIAAqyQAAgZgRgRQgSgSgZAAQgZAAgRASQgSARAAAZIAAMiIhnAkIgTg6QgYhGgnhCQgxhOgtgSQgKgEgLAAQgOAAgOAHg");
	this.shape.setTransform(72.6,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,162.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACgDYIAAjCIAOAAIAABPIAXAAQALAAAJAEQAJACAFAHQAGAEADAJQACAJAAALIAAAWQAAAKgCAJQgDAJgFAFQgEAGgIAEQgJADgKABgACuDMIAbAAQAHAAAGgDQAFgCAEgEQADgFACgHQABgFAAgJIAAgXQAAgIgBgGQgCgHgEgEQgFgEgGgCQgGgBgIAAIgXAAgAAFDYIAAjCIANAAIAAC2IAwAAIAAi2IAMAAIAAC2IAwAAIAAi2IANAAIAADCgAgcDYIAAjCIANAAIAADCgAh/DYIAAjCIANAAIAABPIAXAAQAMAAAJAEQAIACAFAHQAGAEADAJQACAJAAALIAAAWQAAAKgCAJQgDAJgEAFQgFAGgIAEQgIADgLABgAhyDMIAbAAQAIAAAFgDQAFgCAEgEQAEgFABgHQACgFAAgJIAAgXQAAgIgCgGQgCgHgEgEQgEgEgGgCQgGgBgJAAIgXAAgAihDYIAAisIgpCsIgMAAIgpirIAACrIgMAAIAAjCIATAAIAoCrIApirIASAAIAADCgACrgfIAAgWIhNAAIAAAWIgKAAIAAgfIALAAQAEgFACgHQACgFAAgKIAGh9IA7AAIAACYIAOAAIAAAfgABxhZIgBAPQgCAHgEAFIAzAAIAAiPIgmAAgAEEg1IAAiPIgzCPIgLAAIAAihIAKAAIAACKIAxiKIANAAIAAChgAAFg1IAAihIBAAAIAAAJIg1AAIAABBIAsAAIAAAKIgsAAIAABEIA1AAIAAAJgAhPg1IAAihIAiAAQAJAAAGACQAGADAEADQAEAFACAGQACAHAAAJIAAAJQgCAQgDAEQgCAFgEACQgEADgHABQAHACAFADQAEADADAEIAEAKQACAGAAAGIAAAPQAAAIgCAIQgCAGgFAFQgEAFgHADQgGACgKAAgAhEg+IAXAAQAHAAAFgCQAEgCADgEQADgEACgFQABgFAAgGIAAgPQAAgHgCgGQgBgGgEgDQgEgDgFgCQgFgBgHgBIgUAAgAhEiPIARAAIANgBQAFgBADgDQAEgDABgFQACgFAAgIIAAgKIgBgLQgBgEgDgEQgCgDgFgCQgEgCgGAAIgXAAgAhpg1IgIgkIgzAAIgIAkIgJAAIAjiiIAPAAIAkCigAhzhiIgYhoIgXBoIAvAAgAjQg1IAAhLIgyAAIAABLIgLAAIAAihIALAAIAABLIAyAAIAAhLIALAAIAAChg");
	this.shape.setTransform(-51.3,-18.9,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-51.3,81.1,64.8);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AplD/QgKgEgIgFQgKgFgHgHQgJgHgGgJQgGgJgFgKQgFgLgCgMQgCgNgBgOQABhKBvgmQAOAAAbAHQAKADAJAGQAJAFAIAHQAHAHAHAJQAGAJAFAKQAFALACAMQACAMABAOQgBBMhvAlQgcgCgNgFgApQBeQgJAEgJAHQgHAIgEAKQgFAMAAAOQAAAOAFAMQAEALAHAHQAJAIAJADQAKAFAKAAQAKAAAKgFQAKgDAIgIQAHgHAFgLQAFgMgBgOQABgOgFgMQgFgKgHgIQgIgHgKgEQgKgDgKAAQgKAAgKADgAExECIAAjaIA4AAIAABrIBuhsIAUAAIAADaIg6AAIAAhqIhtBrgAIiEBIAAjZICIAAIAAAyIhRAAIAAAfIBKAAIAAAxIhKAAIAAAmIBTAAIAAAxgADTEBIgvhUIgMABIAABTIg4AAIAAhTIgLgBIgwBUIg8AAIAAgIIA5hfQgLgIgOgQQgIgMgCgPQgFgTAAgsIA3AAQgBAoAGAPQAEAMAKAHQAFADAHADQAHACAJAAIAAhSIA4AAIAABSQAJAAAIgCQAGgDAFgDQAKgHAFgMQAFgPgBgoIA5AAQAAAsgFATQgEAPgIAMQgOAQgLAIIA6BfIAAAIgAi+EBIAAgFIAihGIhKiFIAAgJIA+AAIApBQIACAAIAlhQIA8AAIAAAJIhnDQgAmjEBIAAjZIBfAAQAbABAgAZQAKALAEAPQAFAOABAPQgBAQgFAOQgEAOgKAMQgKALgOAHQgIADgIACQgJACgKAAIgnAAIAAA3gAlrCYIAnAAQALAAAHgJQAFgKABgMQAAgNgGgIQgDgEgFgDQgEgDgGAAIgnAAgAplgrQgKgDgIgGQgKgFgHgHQgJgIgGgIQgGgJgFgLQgFgKgCgMQgCgNgBgOQABhLBvglQAOAAAbAHQAKAEAJAEQAJAGAIAHQAHAHAHAIQAGAKAFAKQAFALACAMQACAMABAOQgBBMhvAlQgcgCgNgFgApQjLQgJADgJAHQgHAIgEAKQgFAMAAAOQAAAOAFAMQAEALAHAIQAJAHAJADQAKAEAKABQAKgBAKgEQAKgDAIgHQAHgIAFgLQAFgMgBgOQABgOgFgMQgFgKgHgIQgIgHgKgDQgKgEgKgBQgKABgKAEgAHygoIAAjZIA5AAIAABqIBuhrIATAAIAADZIg5AAIAAhqIhtBrgAgJgoIAAjZIA3AAIAABqIBuhrIAUAAIAADZIg6AAIAAhqIhtBrgAGBgpIAAhgIgtAwIgHAAIgugwIAABgIg4AAIAAjZIAUAAIBVBeIBWheIAUAAIAADZgAh5gpIAAhXIhDAAIAABXIg4AAIAAjYIA4AAIAABPIBDAAIAAhPIA5AAIAADYgAmDgpIAAinIg2AAIAAgxICiAAIAAAxIg1AAIAACng");
	this.shape.setTransform(68.5,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,52.5);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.9,1,1).p("ABGgLQAFAbgRAYQgRAZgdAFQgbAFgZgRQgYgRgFgdQgFgbARgZQARgYAdgFQAbgFAZARQAYARAFAdg");
	this.shape.setTransform(7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,17.3,17.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.9,1,1).p("ABGgLQAFAbgRAYQgRAZgdAFQgbAFgZgRQgYgRgFgdQgFgbARgZQARgYAdgFQAbgFAZARQAYARAFAdg");
	this.shape.setTransform(7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,17.3,17.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2.9,1,1).p("AgCAKIAFgT");
	this.shape.setTransform(0.3,496.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2.9,1,1).p("AjPJ1IGfzp");
	this.shape_1.setTransform(20.9,434.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(2.9,1,1).p("AmcThMAM5gnB");
	this.shape_2.setTransform(41.4,372.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(2.9,1,1).p("ApqdNMATVg6Z");
	this.shape_3.setTransform(61.9,311);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(2.9,1,1).p("EgM3Am5MAZvhNx");
	this.shape_4.setTransform(82.4,249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,494.5,3.6,4.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,163);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,43);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_08();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,175);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,175);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,164);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,146);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_26();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,98);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_29();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,84);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,112);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl_slice_34();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.earth();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201,201);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stars();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,828,548);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07192E").s().p("EhArAq0MAAAhVnMCBXAAAMAAABVng");
	this.shape.setTransform(414,274);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,828,548);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 66
	this.instance = new lib.Символ66();
	this.instance.setTransform(44,74.3,1,1,0,0,0,0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:76.8},10,cjs.Ease.get(1)).to({y:74.3},9,cjs.Ease.get(1)).wait(1));

	// Символ 65
	this.instance_1 = new lib.Символ65();
	this.instance_1.setTransform(43.5,17.5,1,1,0,0,0,0,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:15},10,cjs.Ease.get(1)).to({y:17.5},9,cjs.Ease.get(1)).wait(1));

	// Символ 64
	this.instance_2 = new lib.Символ64();
	this.instance_2.setTransform(72.3,45,1,1,0,0,0,17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:74.8},10,cjs.Ease.get(1)).to({x:72.3},9,cjs.Ease.get(1)).wait(1));

	// Символ 63
	this.instance_3 = new lib.Символ63();
	this.instance_3.setTransform(15.5,45,1,1,0,0,0,17.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:13},10,cjs.Ease.get(1)).to({x:15.5},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_4 = new lib.Символ62();
	this.instance_4.setTransform(58.3,32.9,1,1,180,0,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:3,scaleX:0.87,scaleY:0.87,x:56.4,y:34.5},10,cjs.Ease.get(1)).to({regX:2.9,scaleX:1,scaleY:1,x:58.3,y:32.9},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_5 = new lib.Символ62();
	this.instance_5.setTransform(58.5,57.1,1,1,0,0,180,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.87,scaleY:0.87,x:56.6,y:55.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:58.5,y:57.1},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_6 = new lib.Символ62();
	this.instance_6.setTransform(29.1,32.9,1,1,0,180,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.87,scaleY:0.87,x:31,y:34.5},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:29.1,y:32.9},9,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_7 = new lib.Символ62();
	this.instance_7.setTransform(28.9,57.1,1,1,0,0,0,2.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:3,scaleX:0.87,scaleY:0.87,x:30.9,y:55.5},10,cjs.Ease.get(1)).to({regX:2.9,scaleX:1,scaleY:1,x:28.9,y:57.1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-1.4,94.8,94.8);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ57();
	this.instance.setTransform(94.4,9.2,1,1,0,0,0,9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:179.2},25,cjs.Ease.get(1)).to({y:9.2},24,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(9.2,94,1,1,0,0,0,9.2,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:180.7},25,cjs.Ease.get(1)).to({x:9.2},24,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ56();
	this.instance_2.setTransform(94,94,1,1,0,0,0,94,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,188);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ55();
	this.instance.setTransform(83.2,56.3,0.67,0.67,0,0,0,94,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ54();
	this.instance_1.setTransform(-93.9,53.9,1.44,1.44,0,0,0,60.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.4,-6.7,321.5,126);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 51
	this.instance = new lib.Символ51();
	this.instance.setTransform(182.6,149.6,1,1,0,0,0,35,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:172.1,y:158.1},9,cjs.Ease.get(1)).to({rotation:-25,x:182.6,y:149.6},10,cjs.Ease.get(1)).to({rotation:-24,x:188.6,y:138},10,cjs.Ease.get(1)).to({rotation:0,x:182.6,y:149.6},10,cjs.Ease.get(1)).wait(1));

	// Символ 50
	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(90.5,72.1,1,1,0,0,0,25.9,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:26,rotation:7},9,cjs.Ease.get(1)).to({regX:25.9,rotation:0},10,cjs.Ease.get(1)).to({regX:26,rotation:-6},10,cjs.Ease.get(1)).to({regX:25.9,rotation:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ49();
	this.instance_2.setTransform(90.5,72,1,1,0,0,0,90.5,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-10},19,cjs.Ease.get(1)).to({rotation:0},20,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ71();
	this.instance_3.setTransform(165.1,275.1,1,1,0,0,0,36.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:155.1,y:277.1},9,cjs.Ease.get(1)).to({regX:36.6,rotation:-17,x:224.1,y:276.1},10,cjs.Ease.get(1)).to({regX:36.5,rotation:-37,x:225.1,y:263},10,cjs.Ease.get(1)).to({rotation:0,x:165.1,y:280.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,435.1);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(50.5,45,1,1,0,0,0,50.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:60.5},9).to({x:50.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,435.1);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.setTransform(141.4,9.5,1,1,0,0,0,8.6,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 45
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(124.4,9.5,1,1,0,0,0,8,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 44
	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(99.9,9.5,1,1,0,0,0,11.7,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 43
	this.instance_3 = new lib.Символ43();
	this.instance_3.setTransform(71.9,9.5,1,1,0,0,0,11.5,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 42
	this.instance_4 = new lib.Символ42();
	this.instance_4.setTransform(48.6,9.4,1,1,0,0,0,9.3,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Символ 41
	this.instance_5 = new lib.Символ41();
	this.instance_5.setTransform(29.8,9.4,1,1,0,0,0,9.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Символ 40
	this.instance_6 = new lib.Символ40();
	this.instance_6.setTransform(9.1,9.5,1,1,0,0,0,9.1,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.1,18.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(53,29.1,1,1,0,0,0,75,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCD946").s().p("AEsBSIAAgPIhWAAIAAAPIggAAIAAgxIAQAAIAxhyIARAAIA0ByIAQAAIAAAxgAEVAhIgWgzIgUAzIAqAAgABeBCQgJgEgGgHQgIgFgDgKQgDgJgBgNIAiAAQgBAIAGAGQAFAFAIAAQAJAAAFgFQAFgFAAgGQAAgIgFgEQgFgGgJABIgKAAIAAgdIAKAAQAGAAAEgEQAEgDgBgGQABgFgEgDQgDgEgHgBQgGABgDACQgEACAAAEIghAAQAAgKADgIQADgHAHgFQAGgFAJgDQAJgCAJAAQAMABAJADQAJADAHAGQAGAHADAHQACAIAAAIQAAAIgCAGQgEAJgGAEQAFADAEAEIAHAGQACAFACAFQABAFAAAHQAAAKgDAIQgFAJgHAFQgGAHgLADQgLAEgOAAQgMAAgKgDgAJ8BCIAAiRIAmAAIAAAsIAbAAQAJAAAOAFQAJAEAHAHQAHAHADAKQADAGABALQgBAKgDAIQgDAKgHAHQgHAIgJADQgOAFgJAAgAKiAhIAbAAQAHAAAFgHQADgFAAgGQAAgIgDgFQgFgDgHAAIgbAAgAIwBCIAAg7IgtAAIAAA7IgmAAIAAiRIAmAAIAAA1IAtAAIAAg1IAmAAIAACRgAFeBCIAAiRIBcAAIAAAhIg2AAIAAAVIAxAAIAAAfIgxAAIAAAbIA4AAIAAAhgAATBCIgIgSIg4AAIgJASIglAAIAAgGIBDiNIAQAAIBACNIAAAGgAAAAPIgQgkIgRAkIAhAAgAjaBCIAAiRIBBAAQARAAAWARQAHAIADAJQADALAAAKQAAAKgDAKQgDAIgHAIQgHAHgJAFIgLADQgFABgHAAIgbAAIAAAmgAi0gDIAbAAQAHAAAFgHQADgGAAgJQABgIgEgFQgCgEgEgCQgDgCgDAAIgbAAgAlfBCIAAhGIhLBGIgNAAIAAiRIAmAAIAABIIBKhJIAPAAIAACSgAnvBCIgmhUIgmBUIglAAIAAgGIBDiNIAQAAIBDCNIAAAGgAqZBCIAAhGIhKBGIgOAAIAAiRIAnAAIAABIIBKhJIAOAAIAACSg");
	this.shape.setTransform(53.4,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,0,150.8,38.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(7.2,7.2,1,1,0,0,0,7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.85,scaleY:1.85,x:7.3,y:7.3,alpha:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,17.3,17.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(2.9,1,1).p("ABGgLQAFAbgRAYQgRAZgdAFQgbAFgZgRQgYgRgFgdQgFgbARgZQARgYAdgFQAbgFAZARQAYARAFAdg");
	this.shape.setTransform(7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance = new lib.Символ72();
	this.instance.setTransform(6.8,7.4,1,1,0,0,0,18.2,18.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-10.8,36.6,36.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(7.2,7.2,1,1,0,0,0,7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(7.2,7.2,1,1,0,0,0,7.2,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ72();
	this.instance_2.setTransform(6,7.6,1,1,0,0,0,18.2,18.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-10.6,36.6,36.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(7.2,7.2,1,1,0,0,0,7.2,7.2);

	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(7.2,7,1,1,0,0,0,7.2,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-10.6,36.6,36.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(47,81.5,1,1,0,0,0,47,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,163);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ26();
	this.instance.setTransform(118.5,146.3,1,1,0,0,0,7.2,7.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ26(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.girl_slice_03();
	this.instance_1.setTransform(2.5,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2,204,181);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ26();
	this.instance.setTransform(31.4,48.7,1,1,0,0,0,7.2,7.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ26(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(48,81.5,1,1,0,0,0,47,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(138.6,-243,1,1,0,0,0,82.4,249);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,94,163);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ74();
	this.instance.setTransform(553.7,130,1,1,0,0,0,535.5,273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1391.9,-226.3,3855.1,717.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(938.5,100.5,1,1,0,0,0,100.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-523.4},644).wait(55).to({x:-563.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(838,0,201,201);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(100.5,100.5,1,1,0,0,0,100.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(838,0,201,201);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ6();
	this.instance.setTransform(1234,274,1,1,0,0,0,414,274);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:413},329).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(414,274,1,1,0,0,0,414,274);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-414},329).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1648,548);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(414,274,1,1,0,0,0,414,274);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1648,548);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ37();
	this.instance.setTransform(72.6,81.2,1,1,0,0,0,72.6,81.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.2},10,cjs.Ease.get(1)).to({x:72.6},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,162.5);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl_slice_03.png
	this.instance = new lib.Символ20();
	this.instance.setTransform(-174.7,104.8,1,1,0,0,0,138.2,162.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({regY:162.7,rotation:-3,x:-174.8},34).to({regY:162.8,rotation:0,x:-174.7},16).wait(1));

	// girl_slice_31.png
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(-142.9,138.5,1,1,0,0,0,91.5,54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3,x:-143},19).to({rotation:0,x:-142.9},15).wait(51));

	// girl_slice_08.png
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(-145.9,147.1,1,1,0,0,0,18,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-3},19).to({rotation:0},15).wait(51));

	// girl_slice_20.png
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(-72.9,46,1,1,0,0,0,26,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-10,x:-77.9,y:43.6},19).to({rotation:0,x:-72.9,y:46},15).to({rotation:-10,x:-77.9,y:43.6},19).to({rotation:0,x:-72.9,y:46},15).wait(17));

	// girl_slice_06.png
	this.instance_4 = new lib.Символ19();
	this.instance_4.setTransform(-128.9,90.3,1,1,0,0,0,35,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:5,x:-128.2,y:89.6},4,cjs.Ease.get(1)).to({regY:148.6,rotation:19,x:-127.4,y:88.8},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:7,x:-128.2,y:89.5},5,cjs.Ease.get(1)).to({regY:148.5,scaleX:1,scaleY:1,rotation:10,x:-129,y:90.3},5,cjs.Ease.get(1)).to({rotation:0,x:-128.9},3,cjs.Ease.get(1)).to({regX:35.1,rotation:5},4,cjs.Ease.get(1)).to({regX:35,rotation:0},4,cjs.Ease.get(1)).wait(4).to({rotation:5,x:-128.2,y:89.6},4,cjs.Ease.get(1)).to({regY:148.6,rotation:19,x:-127.4,y:88.8},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:7,x:-128.2,y:89.5},5,cjs.Ease.get(1)).to({regY:148.5,scaleX:1,scaleY:1,rotation:10,x:-129,y:90.3},5,cjs.Ease.get(1)).to({rotation:0,x:-128.9},3,cjs.Ease.get(1)).to({regX:35.1,rotation:5},4,cjs.Ease.get(1)).to({regX:35,rotation:0},4,cjs.Ease.get(1)).to({rotation:10,x:-129},4,cjs.Ease.get(1)).to({rotation:0,x:-128.9},3,cjs.Ease.get(1)).to({regX:35.1,rotation:5},4,cjs.Ease.get(1)).to({regX:35,rotation:0},4,cjs.Ease.get(1)).wait(6));

	// girl_slice_17.png
	this.instance_5 = new lib.Символ21();
	this.instance_5.setTransform(-135.2,84.8,1,1,0,0,0,37,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-136.7,y:83.3},19).to({x:-135.2,y:84.8},15).to({x:-136.7,y:83.3},19).to({x:-136.2,y:83.8},15).to({x:-135.2,y:84.8},16).wait(1));

	// girl_slice_10.png
	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(-101.8,153.5,1,1,0,0,0,20.1,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({rotation:-6},19).to({rotation:0},15).wait(17));

	// girl_slice_23.png
	this.instance_7 = new lib.Символ15();
	this.instance_7.setTransform(-15.9,71.5,1,1,0,0,0,19,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({regX:18.9,rotation:3,x:-28,y:63.5},19).to({regX:19,rotation:0,x:-15.9,y:71.5},15).wait(17));

	// girl_slice_34.png
	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(-243.4,157.1,1,1,0,0,0,76.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-247.4},19).to({x:-243.4},15).to({x:-247.4},19).to({x:-243.4},15).wait(17));

	// girl_slice_29.png
	this.instance_9 = new lib.Символ13();
	this.instance_9.setTransform(-251.9,101.6,1,1,0,0,0,24,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:3},19).to({rotation:0},15).to({rotation:3},19).to({rotation:0},15).wait(17));

	// girl_slice_26.png
	this.instance_10 = new lib.Символ14();
	this.instance_10.setTransform(-263.9,47.1,1,1,0,0,0,31,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({y:51.1},34).to({y:47.1},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-58.2,432,264.3);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ61();
	this.instance.setTransform(46.6,44,1,1,0,0,0,44.5,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:38.1},9,cjs.Ease.get(1)).to({x:46.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,94.8,94.8);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(50.5,45,1,1,0,0,0,50.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:50},11).to({y:45},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,435.1);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-126.3,-14.9,0.37,0.37,0,0,0,73.2,81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(52.8,12.3,1,1,0,0,0,51,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.4,-48.2,144.5,64.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2
	this.instance = new lib.Символ38();
	this.instance.setTransform(382.1,41.3,1,1,0,0,0,75.4,17.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({x:116.7},35,cjs.Ease.get(1)).to({x:119.8},5,cjs.Ease.get(1)).wait(25).to({x:116.7},5,cjs.Ease.get(1)).to({x:397.4},5,cjs.Ease.get(1)).wait(1));

	// 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(364.5,44,1,1,0,0,0,68.5,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:99.1},9,cjs.Ease.get(1)).to({x:104.8},5,cjs.Ease.get(1)).wait(50).to({x:99.1},5,cjs.Ease.get(1)).to({x:364.5},5,cjs.Ease.get(1)).to({_off:true},1).wait(75));

	// mouse
	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(136,84.2,0.83,0.83,0,0,0,144.2,31.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,17.8,544,53.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ73();
	this.instance.setTransform(30.4,7.5,1,1,0,0,0,31.2,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.7,-81.3,432,264.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// girl
	this.instance = new lib.Символ10();
	this.instance.setTransform(546.4,257.3,1,1,0,0,0,102,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// bg
	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(379.1,230.1,1,1,0,0,0,388.1,202.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.5},3,cjs.Ease.get(1)).wait(1).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// ship
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(382.5,195,1,1,0,0,0,382.5,195);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1391.9,-226.3,3855.1,717.8);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(103.8,154.8,1,1,0,0,0,103.8,154.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:335.9},3,cjs.Ease.get(1)).to({y:330.9},1,cjs.Ease.get(1)).to({y:154.8},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.6,435.1);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.setTransform(45.9,45.9,1,1,0,0,0,45.9,45.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:40.9},15,cjs.Ease.get(1)).to({y:45.9},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,94.8,94.8);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(2));

	// Слой 2
	this.hook = new lib.Символ52();
	this.hook.setTransform(178.1,178.9,1,1,0,0,0,103.8,154.8);
	this.hook.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hook).wait(1).to({alpha:1},3,cjs.Ease.get(1)).wait(2));

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.setTransform(45.9,45.9,1,1,0,0,0,45.9,45.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},3,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,283.3,460.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 2
	this.hook = new lib.Символ69();
	this.hook.setTransform(-307.9,154,1.229,1.229,-12.8,0,0,103.9,152.1);

	this.timeline.addTween(cjs.Tween.get(this.hook).wait(1).to({alpha:0},3,cjs.Ease.get(1)).wait(1).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

	// text
	this.instance = new lib.Символ33();
	this.instance.setTransform(71.9,29.4,1.32,1.32,0,0,0,68.5,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:571.1,alpha:0},3,cjs.Ease.get(1)).wait(1).to({x:71.9,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// power
	this.instance_1 = new lib.Символ53();
	this.instance_1.setTransform(348,10.7,1,1,0,0,0,60.6,17.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:109.1,y:19.9},3,cjs.Ease.get(1)).wait(1).to({x:368,y:10.7},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.9,-27.5,1026.9,513.9);


// stage content:



(lib._1200x120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		function getWindowSize() {
		return {
		width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
		height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
		}
		}
		window._setCanvasSize = function() {
		var windowSize = getWindowSize();
		stage.canvas.style.width = windowSize.width + 'px';
		stage.canvas.style.height = 120 + 'px';
		stage.canvas.width = windowSize.width;
		stage.canvas.height = 120;
		
		    _this.ship.x = windowSize.width/2;
		    _this.ship.y = 120;    
			
			_this.text.x = windowSize.width;
		    _this.ship.y = 120;   
		}
		
		window.onresize=function(){_setCanvasSize();}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.text.gotoAndPlay(1);
			_this.ship.gotoAndPlay(1);
			//_this.hook.gotoAndPlay(1);
			_this.pric.gotoAndPlay(1);
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.text.gotoAndPlay(5);
			_this.ship.gotoAndPlay(5);
			//_this.hook.gotoAndPlay(5);
			_this.pric.gotoAndPlay(5);
		
		}
		
		
		
		window.onresize();
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pricel
	this.pric = new lib.Символ60();
	this.pric.setTransform(330,79,1,1,0,0,0,41,48.1);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// text
	this.text = new lib.Символ32();
	this.text.setTransform(1200,49.9,0.67,0.67,0,0,0,316.6,44.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// ship
	this.ship = new lib.Символ2();
	this.ship.setTransform(421.3,120,0.8,0.8,0,0,0,657.8,252.5);

	this.timeline.addTween(cjs.Tween.get(this.ship).wait(1));

	// glass
	this.instance = new lib.Символ4();
	this.instance.setTransform(704.9,184,1.877,1,0,0,0,413.9,274);
	this.instance.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// earth
	this.earth = new lib.Символ5();
	this.earth.setTransform(42.6,-47.5,1,1,0,0,0,-455.9,-4);

	this.timeline.addTween(cjs.Tween.get(this.earth).wait(1));

	// stars
	this.stars = new lib.Символ1();
	this.stars.setTransform(-55.9,184,1.34,1.34,0,0,0,16,274);

	this.timeline.addTween(cjs.Tween.get(this.stars).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-618.4,-203.1,3349.3,814.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
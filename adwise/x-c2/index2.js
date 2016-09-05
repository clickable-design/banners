(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1473075043219", id:"back"},
		{src:"images/bot1.png?1473075043219", id:"bot1"},
		{src:"images/for_03.png?1473075043219", id:"for_03"},
		{src:"images/for_06.png?1473075043219", id:"for_06"},
		{src:"images/for_09.png?1473075043219", id:"for_09"},
		{src:"images/for_13.png?1473075043219", id:"for_13"},
		{src:"images/for_15.png?1473075043219", id:"for_15"},
		{src:"images/for_18.png?1473075043219", id:"for_18"},
		{src:"images/for_24.png?1473075043219", id:"for_24"},
		{src:"images/for_27.png?1473075043219", id:"for_27"},
		{src:"images/logo.jpg?1473075043219", id:"logo"},
		{src:"images/u2rez_17.png?1473075043219", id:"u2rez_17"},
		{src:"images/zir.png?1473075043219", id:"zir"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,359);


(lib.bot1 = function() {
	this.initialize(img.bot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,94);


(lib.for_03 = function() {
	this.initialize(img.for_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,103);


(lib.for_06 = function() {
	this.initialize(img.for_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,91);


(lib.for_09 = function() {
	this.initialize(img.for_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,376);


(lib.for_13 = function() {
	this.initialize(img.for_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,92);


(lib.for_15 = function() {
	this.initialize(img.for_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,101);


(lib.for_18 = function() {
	this.initialize(img.for_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,108);


(lib.for_24 = function() {
	this.initialize(img.for_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,113);


(lib.for_27 = function() {
	this.initialize(img.for_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,105);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,39);


(lib.u2rez_17 = function() {
	this.initialize(img.u2rez_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,19);


(lib.zir = function() {
	this.initialize(img.zir);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,141);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FBFBFB","rgba(246,246,246,0)"],[0,0.502,1],-42.8,0,42.9,0).s().p("AmrJfIAAy+INXAAIAAS+g");
	this.shape.setTransform(42.9,60.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,121.6);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FBFBFB","rgba(246,246,246,0)"],[0,0.502,1],-69.9,0,69.9,0).s().p("AudNfQjlAABAh6IMQ3JQBAh6DlAAIOrAAQDkAAhAB6IsQXJQhAB6jkAAg");
	this.shape.setTransform(110.5,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,172.6);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,39);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARiBNIAAiaIBOAAIAbAaIAAAnIgOAMIAOAMIAAAoIgbAZgAR8A0IApAAIALgLIAAgSIgLgLIgpAAgAR8gMIApAAIALgKIAAgSIgLgLIgpAAgAP6BNIgbgZIAAhnIAbgaIA0AAIAbAaIAABnIgcAZgAP6goIAABRIALALIAfAAIAKgLIAAhRIgKgLIgfAAgAOtBNIAAhCIg0AAIAABCIgbAAIAAiaIAbAAIAAA/IA0AAIAAg/IAbAAIAACagAMqBNIAAhmIg1BmIgbAAIAAiaIAbAAIAABkIA0hjIAcgBIAACagAKnBNIAAiAIgwAAIAACAIgaAAIAAiaIBlAAIAACagAH2BNIgbgZIAAhnIAbgaIA0AAIAaAaIAAANIgaAAIAAgCIgKgLIgfAAIgLALIAABRIALALIAfAAIAKgLIAAgDIAaAAIAAAOIgbAZgAFvBNIgYgxIgXAxIgcAAIAlhPIgjhLIAcAAIAVAtIAVgtIAdAAIgjBLIAlBPgAD0BNIAAiaIAaAAIAACagAB4BNIAAiaIAaAAIAABAIAzAAIAcAYIAAApIgbAZgACSA0IAqAAIAKgLIAAgTIgKgLIgqAAgABFBNIAAhCIg1AAIAABCIgYAAIAAiaIAYAAIAAA/IA1AAIAAg/IAbAAIAACagAhjBNIAAiAIgmAAIAAgaIBnAAIAAAaIgmAAIAACAgAi/BNIgGgZIglAAIgHAZIgbAAIAmiaIAcAAIAmCagAjMAaIgMgvIgMAvIAYAAgAk+BNIAAiAIglAAIgLALIAABqIgLALIgcAAIAAgZIAMAAIAAhnIAbgaIBLAAIAACagAnABNIAAiAIgvAAIAACAIgbAAIAAiaIBlAAIAACagApxBNIgagZIAAhnIAagaIA0AAIAaAaIAAANIgaAAIAAgCIgLgLIgeAAIgLALIAABRIALALIAeAAIALgLIAAgDIAaAAIAAAOIgbAZgAwuBNIgagZIAAhnIAagaIA1AAIAbAaIAABnIgcAZgAwiA0IAeAAIALgLIAAhPgAwugoIAABOIAphZIgeAAgAyvBNIgbgZIAAgOIAaAAIAAADIALALIAeAAIALgLIAAgSIgLgLIgcAAIAAgYIAcAAIALgKIAAgSIgLgLIgeAAIgLALIAAACIgaAAIAAgNIAagaIA0AAIAaAaIAAAnIgNAMIANAMIAAAoIgaAZgAsLBNIAAiaIBoAAIAAAaIhOAAIAAAnIAnAAIAAAYIgnAAIAAAoIBOAAIAAAZgAuNBNIAAiaIBhAAIAAAaIhHAAIAAAnIAzAAIAcAYIAAAoIgbAZgAtzA0IApAAIALgMIAAgRIgLgLIgpAAg");
	this.shape.setTransform(92.8,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,15,245.5,15.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202022").s().p("Eg6IACTIAAwsMB7QAAAIAAQsUhQMAMHge0AAAQ+1AASlsHg");
	this.shape.setTransform(416.9,92.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,833.8,184.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-15.2,0,15.3).s().p("AiXCIIAAkPIA0AAIAADgIBKAAIAAjgIAzAAIAADgIBKAAIAAjgIA0AAIAAEPg");
	this.shape.setTransform(193.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-2.8,0,2.9).s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape_1.setTransform(170.5,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-10.4,0,10.5).s().p("AhnCIIAAkPIA5AAIAABrIBEABIAUADQALACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgKADIgeADgAguBZIA+gBQAIgBAHgEQAHgEAFgHQAEgHAAgNQAAgNgEgHQgEgHgIgEQgHgDgIgCIg+gBg");
	this.shape_2.setTransform(153.5,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-10.4,0,10.5).s().p("AhnCIIAAkPIB6AAQAWAAAQAGQAQAGAKALQALAMAFAQQAFAQAAAUQAAAUgGAQQgGAOgMALQgLAMgRAGQgRAHgVAAIg8AAIAABigAgugHIA0AAQATAAALgJQALgKAAgWQAAgKgDgIQgCgHgGgFQgFgFgIgCQgHgDgKAAIg0AAg");
	this.shape_3.setTransform(128.2,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-9.1,0,9.2).s().p("AhaCIIAAkPIC1AAIAAAvIh8AAIAADgg");
	this.shape_4.setTransform(104.9,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-11,0,11.1).s().p("AA3CIIAAi3IgBAAIhpC3Ig6AAIAAkPIA3AAIAAC4IAAAAIBqi4IA6AAIAAEPg");
	this.shape_5.setTransform(79,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-2.8,0,2.9).s().p("AgbCIIAAkPIA3AAIAAEPg");
	this.shape_6.setTransform(60,17.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-10.4,0,10.5).s().p("AhnCIIAAkPIA5AAIAABrIBEABIAUADQALACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgKADIgeADgAguBZIA+gBQAIgBAHgEQAHgEAFgHQAEgHAAgNQAAgNgEgHQgEgHgIgEQgHgDgIgCIg+gBg");
	this.shape_7.setTransform(43,17.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-11.3,0,11.3).s().p("AhwCIIAAkPICEAAQARAAANAEQAMADAKAFQAJAGAGAGQAGAIAEAHIAGAQIABAPIgCATQgCAIgEAHQgEAGgGAGIgPAKQANAFAJAGQAIAHAFAJQAEAJABAKIACASQAAATgHAQQgHAPgOAKQgNAKgTAFQgTAGgXAAgAg5BZIBFAAQAKAAAIgDQAIgCAGgEQAFgEAEgIQADgGAAgKQAAgMgEgHQgEgHgGgEQgHgEgIgBIgQgCIhEAAgAg5gcIBEAAIAPgBQAHgBAFgEQAFgFADgFQAEgGAAgIQAAgJgDgGQgDgGgFgDQgFgDgHgBIgOgCIhGAAg");
	this.shape_8.setTransform(16.4,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,4,203.9,27.3);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.808)").s().p("Eg6QAgBMAAAhABMB0hAAAMAAABABg");
	this.shape.setTransform(373,205);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,746,410);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-20,0,20.1).s().p("AAECGIAAi3Ig9AAIAAglQAZgBAKgCQAPgEAIgKQAHgHAEgMIACgLIAsAAIAAELg");
	this.shape.setTransform(5.9,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-9.2,0,9.3).s().p("AhHBmQgUgkAAhCQAAhBAUgkQAVgkAyAAQAzAAAVAkQAUAkAABBQAABCgUAkQgVAkgzAAQgyAAgVgkgAgehGQgHAXAAAvQAAAuAHAZQAIAYAWAAQAXAAAHgYQAIgZAAguQAAgvgIgXQgHgYgXAAQgWAAgIAYg");
	this.shape_1.setTransform(28.9,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-9.2,0,9.3).s().p("AhHBmQgUgkAAhCQAAhBAUgkQAVgkAyAAQAzAAAVAkQAUAkAABBQAABCgUAkQgVAkgzAAQgyAAgVgkgAgehGQgHAXAAAvQAAAuAHAZQAIAYAWAAQAXAAAHgYQAIgZAAguQAAgvgIgXQgHgYgXAAQgWAAgIAYg");
	this.shape_2.setTransform(50,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,27.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-9.2,0,9.3).s().p("AhHBmQgUgkAAhCQAAhBAUgkQAVgkAyAAQAzAAAVAkQAUAkAABBQAABCgUAkQgVAkgzAAQgyAAgVgkgAgehGQgHAXAAAvQAAAuAHAZQAIAYAWAAQAXAAAHgYQAIgZAAguQAAgvgIgXQgHgYgXAAQgWAAgIAYg");
	this.shape.setTransform(9.3,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-9.2,0,9.3).s().p("AhHBmQgUgkAAhCQAAhBAUgkQAVgkAyAAQAzAAAVAkQAUAkAABBQAABCgUAkQgVAkgzAAQgyAAgVgkgAgehGQgHAXAAAvQAAAuAHAZQAIAYAWAAQAXAAAHgYQAIgZAAguQAAgvgIgXQgHgYgXAAQgWAAgIAYg");
	this.shape_1.setTransform(29.6,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-9.2,0,9.3).s().p("AhHBmQgUgkAAhCQAAhBAUgkQAVgkAyAAQAzAAAVAkQAUAkAABBQAABCgUAkQgVAkgzAAQgyAAgVgkgAgehGQgHAXAAAvQAAAuAHAZQAIAYAWAAQAXAAAHgYQAIgZAAguQAAgvgIgXQgHgYgXAAQgWAAgIAYg");
	this.shape_2.setTransform(50.7,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,27.9);


(lib.Символ22копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLByIAAjjIAmAAIAABeIBJAAIApAkIAAA7IgnAmgAglBMIA7AAIAQgQIAAgbIgQgQIg7AAg");
	this.shape.setTransform(147.9,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSByIAAi8Ig4AAIAAgnICVAAIAAAnIg4AAIAAC8g");
	this.shape_1.setTransform(128.9,22.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkByIgKgmIg0AAIgJAmIgnAAIA3jjIAnAAIA3DjgAARAlIgRhEIgQBEIAhAAg");
	this.shape_2.setTransform(109.8,22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMByIAAjjIBxAAIAoAnIAAA4IgpAkIhIAAIAABggAgkgSIA6AAIAPgPIAAgaIgPgPIg6AAg");
	this.shape_3.setTransform(90.9,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMBxIAAjhICMAAIAAAlIhkAAIAAA6IBIAAIAoAkIAAA4IgnAmgAgkBLIA6AAIAPgPIAAgaIgPgPIg6AAg");
	this.shape_4.setTransform(71.9,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkByIgKgmIg0AAIgJAmIgnAAIA3jjIAnAAIA3DjgAARAlIgRhEIgQBEIAhAAg");
	this.shape_5.setTransform(52.8,22.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7ByIgUAAIAAgTIATgTIAQAAIBFAAIAPgQIAAgaIgPgQIgvAAIAAgkIAvAAIAPgPIAAgaIgPgPIhCAAIgTgTIAAgUIBkAAIAoAnIAAA4IgUASIAUASIAAA6IgoAmg");
	this.shape_6.setTransform(33.6,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.6,-2.1,137.9,47.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zir();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,141);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bot1();
	this.instance.parent = this;
	this.instance.setTransform(-39,11,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,11,418.6,116.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,171.3,0,-171.2).s().p("Eg4pAa7MAAAg11MBxTAAAMAAAA11g");
	this.shape.setTransform(362.7,172.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,725.3,344.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.1,-171.2,0.1,171.3).s().p("Eg4pAa7MAAAg11MBxTAAAMAAAA11g");
	this.shape.setTransform(362.7,172.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,725.3,344.7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAC855","#F8F5EF","#F5C05E"],[0,0.51,1],0,2.2,0,-2.2).s().p("AlXAjQgPAAgKgLQgKgKAAgOQAAgNAKgLQAKgKAPAAIKvAAQAPAAAKAKQAKALAAANQAAAOgKAKQgKALgPAAg");
	this.shape.setTransform(38,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.for_24();
	this.instance.parent = this;
	this.instance.setTransform(12,-225,0.701,0.701);

	this.instance_1 = new lib.for_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,-72,0.701,0.701);

	this.instance_2 = new lib.for_06();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12,-141,0.701,0.701);

	this.instance_3 = new lib.for_27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,0,0.701,0.701);

	this.instance_4 = new lib.for_24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(13,284,0.701,0.701);

	this.instance_5 = new lib.for_18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(13,145,0.701,0.701);

	this.instance_6 = new lib.for_15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10,76,0.701,0.701);

	this.instance_7 = new lib.for_13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(13,437,0.701,0.701);

	this.instance_8 = new lib.for_06();
	this.instance_8.parent = this;
	this.instance_8.setTransform(13,368,0.701,0.701);

	this.instance_9 = new lib.for_03();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1,220,0.701,0.701);

	this.instance_10 = new lib.for_27();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,509,0.701,0.701);

	this.instance_11 = new lib.for_24();
	this.instance_11.parent = this;
	this.instance_11.setTransform(12,793,0.701,0.701);

	this.instance_12 = new lib.for_18();
	this.instance_12.parent = this;
	this.instance_12.setTransform(12,655,0.701,0.701);

	this.instance_13 = new lib.for_15();
	this.instance_13.parent = this;
	this.instance_13.setTransform(9,585,0.701,0.701);

	this.instance_14 = new lib.for_13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(12,946,0.701,0.701);

	this.instance_15 = new lib.for_06();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12,877,0.701,0.701);

	this.instance_16 = new lib.for_03();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,729,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-225,95.7,1235.6);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zir();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,141);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u2rez_17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,19);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(-61.2,47.8,2.109,1.218,0,34.8,0,42.8,60.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:561,y:51},9).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.7,-13,265.3,121.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(110.5,86.3,1,1,0,0,0,110.5,86.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:734.5},9).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,172.6);


(lib.Символ29копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(128.7,38.3,1,1,0,0,0,93.3,22.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2PFmIgTAAQiWAAAAiWIAAmfQAAiWCWAAIATAAMAs6AAAQCOAEAACSIAAGfQAACSiOAEg");
	mask.setTransform(127.5,39.1);

	// Слой 3
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-98.3,50.7,1,1,0,0,0,42.9,60.8);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.bot1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-42,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-8,339,94);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(29.3,13.8,1,1,0,0,0,29.9,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.19,x:34.9},9).to({scaleX:1,x:29.3},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.1,60,27.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(34.4,18,1,1,0,0,0,29.7,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29.6,scaleX:1.14,x:30.2},9).to({regX:29.7,scaleX:1,x:34.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,4.2,59.3,27.8);


(lib.Символ15копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22копия();
	this.instance.parent = this;
	this.instance.setTransform(171.9,68.4,1,1,0,0,0,92.8,21);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7iJHQjYAAAAjjIAAn4QAAjjDYAAMA3FAAAQDYAAAADjIAAH4QAADjjYAAg");
	mask.setTransform(170.3,58.4);

	// Слой 3
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-134,64.7,1,1,0,0,0,110.5,86.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(175.5,61,1,1,0,0,0,175.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,11,418.6,116.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15копия();
	this.instance.parent = this;
	this.instance.setTransform(181.8,61,1,1,0,0,0,175.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.04,scaleY:1.04,x:181.9,y:61.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.2,-21.6,624.2,172.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(38,3.5,0.103,1,0,0,0,38,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:37.5,scaleX:1.24,x:37.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.1,0,7.8,7);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(81.5,70.5,1,1,0,0,0,81.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,141);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(162.5,52.6,0.547,0.547,0,0,0,81.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:70.2,scaleX:0.12,scaleY:0.12,rotation:360,x:485.5,y:-346.4},89).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(348.9,-310.6,0.159,0.159,-32.3,0,0,82.1,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:81.5,regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:355.5,y:-346.4},8).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:282.5,y:52.6},0).to({regX:81.8,regY:70.8,scaleX:0.16,scaleY:0.16,rotation:683.6,x:348.1,y:-306},80).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_2 = new lib.Символ6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(694.1,-270.3,0.202,0.202,-68.9,0,0,81.7,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:81.5,regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:675.5,y:-346.4},17).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:772.5,y:52.6},0).to({regX:81.7,regY:70.8,scaleX:0.21,scaleY:0.21,rotation:647.1,x:745.2,y:-265.7},71).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(559.4,-234.4,0.24,0.24,-101,0,0,81.5,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:585.5,y:-346.4},25).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:492.5,y:52.6},0).to({regY:70.8,scaleX:0.25,scaleY:0.25,rotation:614.9,x:558.3,y:-229.8},63).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_4 = new lib.Символ6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(615,-203,0.273,0.273,-129.4,0,0,81.4,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:81.5,regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:745.5,y:-346.4},32).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:382.5,y:52.6},0).to({regY:70.7,scaleX:0.28,scaleY:0.28,rotation:586.6,x:610.8,y:-198.5},56).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(504.1,-169.4,0.312,0.312,-162,0,0,81.5,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:415.5,y:-346.4},40).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:612.5,y:47.6},0).to({regY:70.7,scaleX:0.32,scaleY:0.32,rotation:554,x:506.3,y:-165},48).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_6 = new lib.Символ6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(346.4,-131.3,0.35,0.35,158.7,0,0,81.2,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:81.5,regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:245.5,y:-346.4},48).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:432.5,y:52.6},0).to({scaleX:0.36,scaleY:0.36,rotation:521.9,x:348.4,y:-126.7},40).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_7 = new lib.Символ6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(658.8,-90.8,0.392,0.392,123.1,0,0,81.5,70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:545.5,y:-346.4},57).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:722.5,y:52.6},0).to({regY:70.6,scaleX:0.4,scaleY:0.4,rotation:485.3,x:660.8,y:-86.3},31).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_8 = new lib.Символ6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(459.4,-46.1,0.441,0.441,83.7,0,0,81.4,70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:81.5,regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:815.5,y:-346.4},67).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:342.5,y:52.6},0).to({regY:70.4,scaleX:0.45,scaleY:0.45,rotation:445,x:454.1,y:-41.5},21).wait(1));

	// Слой 1 - копия: 2
	this.instance_9 = new lib.Символ6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(511.6,-23.6,0.464,0.464,63.9,0,0,81.5,70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:295.5,y:-346.4},72).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:562.5,y:52.6},0).to({regY:70.4,scaleX:0.47,scaleY:0.47,rotation:424.7,x:514.6,y:-19.1},16).wait(1));

	// Слой 1 - копия
	this.instance_10 = new lib.Символ6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(282.9,-5.6,0.483,0.483,47.9,0,0,81.5,70.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:635.5,y:-346.4},76).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:222.5,y:52.6},0).to({scaleX:0.49,scaleY:0.49,rotation:408.6,x:278.2,y:-1.2},12).wait(1));

	// Слой 1
	this.instance_11 = new lib.Символ6();
	this.instance_11.parent = this;
	this.instance_11.setTransform(643.4,21.3,0.512,0.512,23.8,0,0,81.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:70.2,scaleX:0.12,scaleY:0.12,rotation:0,x:185.5,y:-346.4},82).wait(1).to({regY:70.5,scaleX:0.55,scaleY:0.55,x:682.5,y:52.6},0).to({scaleX:0.52,scaleY:0.52,rotation:384.3,x:649,y:25.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118,-327,595.2,418.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-118.5,429.5,1,1,0,0,0,81.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.back();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,0,721.1,450.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(319.5,179.5,1,1,0,0,0,319.5,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,0,721.1,450.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(17.5,9.5,0.714,0.714,0,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,2.7,25,13.6);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(217.5,43.3,0.997,0.997,53.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,y:329.5},17).wait(1).to({y:9.5},0).to({regX:17.6,scaleX:1,scaleY:1,rotation:1136.9,x:217.6,y:26.4},1).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137.5,77,0.998,0.998,160.2,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:0,y:329.5},15).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1250.7,y:60.1},3).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.Символ21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.6,110.5,0.998,0.998,-70.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:0,x:57.5,y:329.5},13).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1364.1,y:93.7},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(177.5,144.2,0.997,0.997,34.6,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:0,y:329.5},11).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1117.9,y:127.4},7).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_5 = new lib.Символ21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(341.5,177.9,0.997,0.997,136.4,0,0,17.6,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:17.5,regY:9.5,scaleX:1,scaleY:1,rotation:0,y:329.5},9).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1231.7,y:161.1},9).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_6 = new lib.Символ21();
	this.instance_6.parent = this;
	this.instance_6.setTransform(257.5,211.6,0.999,0.999,-82.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:0,y:329.5},7).wait(1).to({y:9.5},0).to({rotation:1345.4,y:194.8},11).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_7 = new lib.Символ21();
	this.instance_7.parent = this;
	this.instance_7.setTransform(297.5,245.4,0.998,0.998,15.6,0,0,17.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:9.5,scaleX:1,scaleY:1,rotation:0,y:329.5},5).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1098.8,y:228.5},13).wait(1));

	// Слой 1 - копия: 2
	this.instance_8 = new lib.Символ21();
	this.instance_8.parent = this;
	this.instance_8.setTransform(383.5,279.1,0.998,0.998,99.3,0,0,17.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,y:329.5},3).wait(1).to({y:9.5},0).to({regX:17.6,scaleX:1,scaleY:1,rotation:1212.6,y:262.3},15).wait(1));

	// Слой 1 - копия
	this.instance_9 = new lib.Символ21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(97.6,312.6,0.998,0.998,-56.9,0,0,17.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,x:97.5,y:329.5},1).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1326.4,y:295.8},17).wait(1));

	// Слой 1
	this.instance_10 = new lib.Символ21();
	this.instance_10.parent = this;
	this.instance_10.setTransform(7.5,9.5,1,1,0,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:1080,y:329.5},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,2.7,397.2,324.1);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(0,-9.1,1,1,0,0,0,175.5,61);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-413.7,-91.7,632.4,172.6);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29копия();
	this.instance.parent = this;
	this.instance.setTransform(128,39.5,1,1,0,0,0,128,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.04,scaleY:1.04,y:39.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-23.1,632,121.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bb.png
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(74,291.5,1,1,0,0,0,128,39.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:239.5},2,cjs.Ease.get(-1)).to({y:161.5},3,cjs.Ease.get(1)).wait(85).to({y:213.5},2,cjs.Ease.get(-1)).to({y:291.5},3,cjs.Ease.get(-1)).to({_off:true},1).wait(87));

	// Слой 5
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,-125.2,1,1,0,0,0,106.9,21);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).to({x:79.5,y:4.8},3).to({y:12.8},3).wait(73).to({x:81.5,y:-125.2},3).to({_off:true},1).wait(4));

	// Слой 12 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.4,13.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(122).to({_off:false},0).to({rotation:360,alpha:1},5).to({rotation:720,x:-124.4,y:-18.8,alpha:0},5).to({_off:true},1).wait(50));

	// Слой 12 - копия: 2 - копия
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.6,16.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(23));

	// Слой 12 - копия: 2
	this.instance_4 = new lib.Символ20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(215.6,21.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(158).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(10));

	// Слой 12 - копия
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(108.6,64.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(114).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(54));

	// Слой 12
	this.instance_6 = new lib.Символ20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-51.4,13.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(102).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(66));

	// Слой 10
	this.instance_7 = new lib.Символ18();
	this.instance_7.parent = this;
	this.instance_7.setTransform(525,26.4,3.09,3.09,0,0,0,29.7,13.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96).to({_off:false},0).to({scaleX:3.09,scaleY:3.09,x:355.1,y:18.7},3,cjs.Ease.get(-1)).to({scaleX:2.26,scaleY:2.26,x:155.8,y:81.5},3,cjs.Ease.get(1)).wait(71).to({scaleX:3.09,scaleY:3.09,x:185,y:26.4},0).to({scaleX:3.09,scaleY:3.09,x:355.1,y:26.5},3).to({scaleX:3.09,scaleY:3.09,x:525,y:26.4},3).to({_off:true},1).wait(3));

	// Слой 9
	this.instance_8 = new lib.Символ17();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-353.6,35.7,3.101,3.101,0,0,0,33.6,21);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96).to({_off:false},0).to({x:-193.6,y:28},3,cjs.Ease.get(-1)).to({scaleX:2.26,scaleY:2.26,x:-3.8,y:88.3},3,cjs.Ease.get(1)).wait(71).to({scaleX:3.1,scaleY:3.1,x:-33.6,y:35.7},0).to({x:-193.6,y:35.8},3).to({x:-353.6,y:35.7},3).to({_off:true},1).wait(3));

	// Слой 8
	this.instance_9 = new lib.Анимация1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(77.5,317);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(96).to({_off:false},0).to({y:274.5},3,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,y:174.8},3,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,x:77.6,y:173.9},8).to({startPosition:0},62).to({startPosition:0},1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:77.5,y:274.5},3).to({y:317},3,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой 3
	this.instance_10 = new lib.Символ20_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-212.7,-222.7,1.659,1.659,0,0,0,17.4,9.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(103).to({_off:false},0).to({_off:true},73).wait(7));

	// Слой 4
	this.instance_11 = new lib.Символ25();
	this.instance_11.parent = this;
	this.instance_11.setTransform(105,96.1,1,1,0,0,0,372.9,205);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(126).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(50));

	// Слой 2
	this.instance_12 = new lib.Символ13();
	this.instance_12.parent = this;
	this.instance_12.setTransform(91,428,1,1,0,0,0,362.7,172.3);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(89).to({_off:false},0).to({y:88},9).wait(75).to({y:428},9).wait(1));

	// Слой 1
	this.instance_13 = new lib.Символ12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(90.7,-283.7,1,1,0,0,0,362.7,172.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(89).to({_off:false},0).to({y:76.3},9).wait(75).to({y:-283.7},9).wait(1));

	// Слой 6
	this.instance_14 = new lib.Символ10();
	this.instance_14.parent = this;
	this.instance_14.setTransform(315.5,81.6,1,1,0,0,0,38,3.5);

	this.instance_15 = new lib.Символ10();
	this.instance_15.parent = this;
	this.instance_15.setTransform(195.3,81.6,1,1,0,0,0,38,3.5);

	this.instance_16 = new lib.Символ10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(79.7,81.6,1,1,0,0,0,38,3.5);

	this.instance_17 = new lib.Символ10();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-32.7,81.6,1,1,0,0,0,38,3.5);

	this.instance_18 = new lib.Символ10();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-151.6,81.6,1,1,0,0,0,38,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},52).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},46).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},74).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},10).wait(1));

	// Слой 1
	this.instance_19 = new lib.Символ8();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-151.1,-284.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({y:-294.8},9,cjs.Ease.get(-1)).to({x:-152.1,y:224.2},9).wait(1).to({x:-151.1,y:-284.8},0).to({x:-152.1,y:224.2},9).wait(1).to({x:-151.1,y:-284.8},0).to({y:331.2},10,cjs.Ease.get(1)).wait(144));

	// Символ 8
	this.instance_20 = new lib.Символ8();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-33.1,-216.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({y:-226.8},9,cjs.Ease.get(-1)).to({x:-34.1,y:292.2},9).wait(1).to({x:-33.1,y:-216.8},0).to({x:-34.1,y:292.2},9).wait(1).to({x:-33.1,y:-216.8},0).to({y:331.2},10,cjs.Ease.get(1)).wait(142));

	// Символ 8
	this.instance_21 = new lib.Символ8();
	this.instance_21.parent = this;
	this.instance_21.setTransform(78.9,-145.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(4).to({y:-155.8},9,cjs.Ease.get(-1)).to({x:77.9,y:363.2},9).wait(1).to({x:78.9,y:-145.8},0).to({x:77.9,y:363.2},9).wait(1).to({x:78.9,y:-145.8},0).to({y:331.2},10,cjs.Ease.get(1)).wait(140));

	// Символ 8
	this.instance_22 = new lib.Символ8();
	this.instance_22.parent = this;
	this.instance_22.setTransform(194.9,79.2,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(6).to({y:69.2},9,cjs.Ease.get(-1)).to({x:193.9,y:588.2},9).wait(1).to({x:194.9,y:79.2},0).to({x:193.9,y:588.2},9).wait(1).to({x:194.9,y:79.2},0).to({y:330.2},10,cjs.Ease.get(1)).wait(138));

	// Символ 8
	this.instance_23 = new lib.Символ8();
	this.instance_23.parent = this;
	this.instance_23.setTransform(314.9,-64.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(8).to({y:-74.8},9,cjs.Ease.get(-1)).to({x:313.9,y:444.2},9).wait(1).to({x:314.9,y:-64.8},0).to({x:313.9,y:444.2},9).wait(1).to({x:314.9,y:-64.8},0).to({y:330.2},10,cjs.Ease.get(1)).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-389,-1015,751.7,1599.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(332.5,198.5,1,1,0,0,0,340.5,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// for_09.png
	this.instance_1 = new lib.for_09();
	this.instance_1.parent = this;
	this.instance_1.setTransform(227,-88);

	this.instance_2 = new lib.for_09();
	this.instance_2.parent = this;
	this.instance_2.setTransform(113,-88);

	this.instance_3 = new lib.for_09();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5,-88);

	this.instance_4 = new lib.for_09();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-115,-88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397,-996,751.7,1599.6);


// stage content:
(lib.index2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 20;
		this.fon.y = - stage.mouseY / 20;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.instance = new lib.Символ33();
	this.instance.parent = this;
	this.instance.setTransform(96,21.5,1,1,0,0,0,87,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.instance_1 = new lib.Символ27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(321,362.4,1,1,-174.1,0,0,416.7,92);

	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(252.2,-36.7,1,1,0,0,0,416.9,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(292.5,237,1,1,0,0,0,67.5,188);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.fon = new lib.Символ2();
	this.fon.parent = this;
	this.fon.setTransform(-21,0,1.056,1.056,0,0,0,15.8,41.6);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128,-797,917,1599.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
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
		{src:"images/back.jpg?1473064325924", id:"back"},
		{src:"images/bb.png?1473064325924", id:"bb"},
		{src:"images/bot.png?1473064325924", id:"bot"},
		{src:"images/for_03.png?1473064325924", id:"for_03"},
		{src:"images/for_06.png?1473064325924", id:"for_06"},
		{src:"images/for_09.png?1473064325924", id:"for_09"},
		{src:"images/for_13.png?1473064325924", id:"for_13"},
		{src:"images/for_15.png?1473064325924", id:"for_15"},
		{src:"images/for_18.png?1473064325924", id:"for_18"},
		{src:"images/for_24.png?1473064325924", id:"for_24"},
		{src:"images/for_27.png?1473064325924", id:"for_27"},
		{src:"images/logo.jpg?1473064325924", id:"logo"},
		{src:"images/u2rez_17.png?1473064325924", id:"u2rez_17"},
		{src:"images/zir.png?1473064325924", id:"zir"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,359);


(lib.bb = function() {
	this.initialize(img.bb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,79);


(lib.bot = function() {
	this.initialize(img.bot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,122);


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


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,39);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(88.9,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.8,37.6);


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
	this.shape.graphics.f("rgba(0,0,0,0.541)").s().p("AhnCIIAAkPIA5AAIAABrIA0AAIAQABIAUADQALACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgKADIgSADIgMAAgAguBZIAuAAIAQgBQAIgBAHgEQAHgEAFgHQAEgHAAgNQAAgNgEgHQgEgHgIgEQgHgDgIgCIgQgBIguAAg");
	this.shape.setTransform(171.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.541)").s().p("AgbCIIAAjgIhTAAIAAgvIDdAAIAAAvIhTAAIAADgg");
	this.shape_1.setTransform(146.6,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.541)").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAgIgihqIAAAAIgiBqIBEAAg");
	this.shape_2.setTransform(121.3,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.541)").s().p("AhnCIIAAkPIB6AAQAWAAAQAGQAQAGAKALQALAMAFAQQAFAQAAAUQAAAUgGAQQgGAOgMALQgLAMgRAGQgRAHgVAAIg8AAIAABigAgugHIA0AAQATAAALgJQALgKAAgWQAAgKgDgIQgCgHgGgFQgFgFgIgCQgHgDgKAAIg0AAg");
	this.shape_3.setTransform(95.8,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.541)").s().p("AhuCIIAAkPIDEAAIAAAvIiLAAIAAA8IBCAAIAQABIAUADQALACALAFQALAFAJAJQAJAIAFAOQAGAOAAAVQAAAUgGAOQgFAOgIAJQgJAKgLAFQgLAEgKADIgSADIgMAAgAg1BZIA7AAIARgBQAIgBAHgEQAHgEAFgHQAEgHAAgNQAAgNgEgHQgFgHgHgEQgHgDgJgCIgRgBIg6AAg");
	this.shape_4.setTransform(69.3,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.541)").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAgIgihqIAAAAIgiBqIBEAAg");
	this.shape_5.setTransform(41.3,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.541)").s().p("AgcCNQgOgCgMgDQgNgEgKgHQgLgGgIgKQgIgJgEgNQgEgNgBgSIA1AAQAAAHADAIQAEAHAGAGQAIAGALAEQAMAEAQAAQAOAAAMgEQAKgEAHgFQAHgHADgHQADgIABgIQgBgNgEgIQgFgHgGgEQgHgFgHgBIgPgBIgvAAIAAgnIAuAAQAHAAAIgDQAGgCAGgEQAFgFAEgHQACgGAAgJQABgLgFgIQgEgHgIgFQgGgEgJgBIgRgCQgKAAgIACIgPAGIgKAJIgGAJIgDAIIgBAGIg0AAIABgOQABgIAEgKQAEgJAIgKQAHgJAMgIQANgHASgFQASgFAXAAQAaAAATAHQASAHANALQAMALAGANQAFANAAANIgCAPQgCAIgEAIQgEAIgJAGQgIAHgMAEIAAAAIAJADIALAFIALAGQAFAFAEAHQAFAHADAKQACAKAAAOQAAASgIAQQgHAPgPAMQgOAMgVAHQgWAHgaAAg");
	this.shape_6.setTransform(14.6,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.7,42);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.545)").s().p("AiXCIIAAkPIA0AAIAADgIBKAAIAAjgIAzAAIAADgIBKAAIAAjgIA0AAIAAEPg");
	this.shape.setTransform(178.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.545)").s().p("ABeCIIAAkPIA5AAIAAEPgAiWCIIAAkPIA5AAIAABrIA2AAIAQABIAUADQAJACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgIADIgSADIgMAAgAhdBZIAwAAIAQgBQAIgBAHgEQAHgEAFgHQACgHAAgNQAAgNgCgHQgEgHgIgEQgHgDgIgCIgSgBIguAAg");
	this.shape_1.setTransform(143.2,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.545)").s().p("AhnCIIAAkPIB6AAQAWAAAQAGQAQAGAKALQALAMAFAQQAFAQAAAUQAAAUgGAQQgGAOgMALQgLAMgRAGQgRAHgVAAIg8AAIAABigAgugHIA0AAQATAAALgJQALgKAAgWQAAgKgDgIQgCgHgGgFQgFgFgIgCQgHgDgKAAIg0AAg");
	this.shape_2.setTransform(113.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.545)").s().p("AhaCIIAAkPIC1AAIAAAvIh8AAIAADgg");
	this.shape_3.setTransform(89.9,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.545)").s().p("AA4CIIAAi3IgBAAIhqC3Ig6AAIAAkPIA3AAIAAC4IAAAAIBqi4IA6AAIAAEPg");
	this.shape_4.setTransform(64,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.545)").s().p("ABeCIIAAkPIA5AAIAAEPgAiWCIIAAkPIA5AAIAABrIA2AAIAQABIAUADQAJACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgIADIgSADIgMAAgAhdBZIAwAAIAQgBQAIgBAHgEQAHgEAFgHQACgHAAgNQAAgNgCgHQgEgHgIgEQgHgDgIgCIgSgBIguAAg");
	this.shape_5.setTransform(32.7,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.545)").s().p("AhwCIIAAkPICEAAQARAAANAEQAMADAKAFQAJAGAGAGQAGAIAEAHIAGAQIABAPIgCATQgCAIgEAHQgEAGgGAGIgPAKQANAFAJAGQAIAHAFAJQAEAJABAKIACASQAAATgHAQQgHAPgOAKQgNAKgTAFQgTAGgXAAgAg5BZIBFAAQAKAAAIgDQAIgCAGgEQAFgEAEgIQADgGAAgKQAAgMgEgHQgEgHgGgEQgHgEgIgBIgQgCIhEAAgAg5gcIBEAAIAPgBQAHgBAFgEQAFgFADgFQAEgGAAgIQAAgJgDgGQgDgGgFgDQgFgDgHgBIgOgCIhGAAg");
	this.shape_6.setTransform(1.4,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,0,213.8,42);


(lib.Символ21копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiXCIIAAkPIA0AAIAADgIBKAAIAAjgIAzAAIAADgIBKAAIAAjgIA0AAIAAEPg");
	this.shape.setTransform(178.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABeCIIAAkPIA5AAIAAEPgAiWCIIAAkPIA5AAIAABrIA2AAIAQABIAUADQAJACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgIADIgSADIgMAAgAhdBZIAwAAIAQgBQAIgBAHgEQAHgEAFgHQACgHAAgNQAAgNgCgHQgEgHgIgEQgHgDgIgCIgSgBIguAAg");
	this.shape_1.setTransform(143.2,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhnCIIAAkPIB6AAQAWAAAQAGQAQAGAKALQALAMAFAQQAFAQAAAUQAAAUgGAQQgGAOgMALQgLAMgRAGQgRAHgVAAIg8AAIAABigAgugHIA0AAQATAAALgJQALgKAAgWQAAgKgDgIQgCgHgGgFQgFgFgIgCQgHgDgKAAIg0AAg");
	this.shape_2.setTransform(113.2,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhaCIIAAkPIC1AAIAAAvIh8AAIAADgg");
	this.shape_3.setTransform(89.9,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AA4CIIAAi3IgBAAIhqC3Ig6AAIAAkPIA3AAIAAC4IAAAAIBqi4IA6AAIAAEPg");
	this.shape_4.setTransform(64,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABeCIIAAkPIA5AAIAAEPgAiWCIIAAkPIA5AAIAABrIA2AAIAQABIAUADQAJACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgIADIgSADIgMAAgAhdBZIAwAAIAQgBQAIgBAHgEQAHgEAFgHQACgHAAgNQAAgNgCgHQgEgHgIgEQgHgDgIgCIgSgBIguAAg");
	this.shape_5.setTransform(32.7,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhwCIIAAkPICEAAQARAAANAEQAMADAKAFQAJAGAGAGQAGAIAEAHIAGAQIABAPIgCATQgCAIgEAHQgEAGgGAGIgPAKQANAFAJAGQAIAHAFAJQAEAJABAKIACASQAAATgHAQQgHAPgOAKQgNAKgTAFQgTAGgXAAgAg5BZIBFAAQAKAAAIgDQAIgCAGgEQAFgEAEgIQADgGAAgKQAAgMgEgHQgEgHgGgEQgHgEgIgBIgQgCIhEAAgAg5gcIBEAAIAPgBQAHgBAFgEQAFgFADgFQAEgGAAgIQAAgJgDgGQgDgGgFgDQgFgDgHgBIgOgCIhGAAg");
	this.shape_6.setTransform(1.4,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,0,213.8,42);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhnCIIAAkPIA5AAIAABrIA0AAIAQABIAUADQALACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAOQgGAOgIAJQgJAKgLAFQgKAEgKADIgSADIgMAAgAguBZIAuAAIAQgBQAIgBAHgEQAHgEAFgHQAEgHAAgNQAAgNgEgHQgEgHgIgEQgHgDgIgCIgQgBIguAAg");
	this.shape.setTransform(171.7,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgbCIIAAjgIhTAAIAAgvIDdAAIAAAvIhTAAIAADgg");
	this.shape_1.setTransform(146.6,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAgIgihqIAAAAIgiBqIBEAAg");
	this.shape_2.setTransform(121.3,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhnCIIAAkPIB6AAQAWAAAQAGQAQAGAKALQALAMAFAQQAFAQAAAUQAAAUgGAQQgGAOgMALQgLAMgRAGQgRAHgVAAIg8AAIAABigAgugHIA0AAQATAAALgJQALgKAAgWQAAgKgDgIQgCgHgGgFQgFgFgIgCQgHgDgKAAIg0AAg");
	this.shape_3.setTransform(95.8,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhuCIIAAkPIDEAAIAAAvIiLAAIAAA8IBCAAIAQABIAUADQALACALAFQALAFAJAJQAJAIAFAOQAGAOAAAVQAAAUgGAOQgFAOgIAJQgJAKgLAFQgLAEgKADIgSADIgMAAgAg1BZIA7AAIARgBQAIgBAHgEQAHgEAFgHQAEgHAAgNQAAgNgEgHQgFgHgHgEQgHgDgJgCIgRgBIg6AAg");
	this.shape_4.setTransform(69.3,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAgIgihqIAAAAIgiBqIBEAAg");
	this.shape_5.setTransform(41.3,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgcCNQgOgCgMgDQgNgEgKgHQgLgGgIgKQgIgJgEgNQgEgNgBgSIA1AAQAAAHADAIQAEAHAGAGQAIAGALAEQAMAEAQAAQAOAAAMgEQAKgEAHgFQAHgHADgHQADgIABgIQgBgNgEgIQgFgHgGgEQgHgFgHgBIgPgBIgvAAIAAgnIAuAAQAHAAAIgDQAGgCAGgEQAFgFAEgHQACgGAAgJQABgLgFgIQgEgHgIgFQgGgEgJgBIgRgCQgKAAgIACIgPAGIgKAJIgGAJIgDAIIgBAGIg0AAIABgOQABgIAEgKQAEgJAIgKQAHgJAMgIQANgHASgFQASgFAXAAQAaAAATAHQASAHANALQAMALAGANQAFANAAANIgCAPQgCAIgEAIQgEAIgJAGQgIAHgMAEIAAAAIAJADIALAFIALAGQAFAFAEAHQAFAHADAKQACAKAAAOQAAASgIAQQgHAPgPAMQgOAMgVAHQgWAHgaAAg");
	this.shape_6.setTransform(14.6,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.7,42);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zir();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,141);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F4E403","#E5D603","rgba(142,130,3,0.976)","rgba(236,220,3,0.965)","rgba(238,224,38,0.969)"],[0,0.451,0.494,0.894,1],0,-7.5,0,7.5).s().p("Ag0A0QgVgVgBgfQABgdAVgXQAXgVAdgBQAfABAVAVQAXAXAAAdQAAAfgXAVQgVAXgfAAQgdAAgXgXg");
	this.shape.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,351,122);


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


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(93.5,20.6,1,1,0,0,0,88.9,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,1.8,177.8,37.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ30();
	this.instance.parent = this;
	this.instance.setTransform(128.7,42.8,1,1,0,0,0,93.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.bb();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,79);


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

	// ЗАБРАТЬ
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(175,63,1,1,0,0,0,92.8,21);

	this.instance_1 = new lib.Символ21копия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175,63,1,1,0,0,0,92.8,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},15).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ22копия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(176.1,64,1,1,0,0,0,92.8,21);

	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(176.1,64,1,1,0,0,0,92.8,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},15).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(175.5,61,1,1,0,0,0,175.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,351,122);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ЗАБРАТЬ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhnCIIAAkPIA5AAIAABrIA0AAIAQABIAUADQALACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAPQgGANgIAJQgJAKgLAFQgKAFgKACIgSADIgMAAgAguBZIAuAAIAQgBQAIgBAHgEQAHgEAFgHQAEgIAAgLQAAgNgEgIQgEgHgIgEQgHgEgIAAIgQgCIguAAg");
	this.shape.setTransform(253.9,59.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgbCIIAAjgIhTAAIAAgvIDdAAIAAAvIhTAAIAADgg");
	this.shape_1.setTransform(228.8,59.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAgIgihqIAAAAIgiBqIBEAAg");
	this.shape_2.setTransform(203.5,59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhnCIIAAkPIB6AAQAWAAAQAGQAQAGAKALQALAMAFAQQAFAQAAAUQAAAUgGAQQgGAOgMALQgLAMgRAGQgRAHgVAAIg8AAIAABigAgugHIA0AAQATAAALgJQALgKAAgWQAAgKgDgIQgCgHgGgFQgFgFgIgDQgHgCgKAAIg0AAg");
	this.shape_3.setTransform(178,59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhuCIIAAkPIDEAAIAAAvIiLAAIAAA8IBCAAIAPABIAVADQALACALAFQALAFAJAJQAJAIAGAOQAFAOAAAVQAAAUgFAPQgGANgJAJQgJAKgKAFQgKAFgKACIgSADIgNAAgAg1BZIA8AAIAQgBQAIgBAHgEQAHgEAEgHQAFgIAAgLQAAgNgFgIQgEgHgHgEQgHgEgJAAIgSgCIg5AAg");
	this.shape_4.setTransform(151.5,59.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAgIgihqIAAAAIgiBqIBEAAg");
	this.shape_5.setTransform(123.5,59.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgbCNQgOgCgNgDQgMgEgLgHQgLgGgIgKQgIgJgEgNQgFgNAAgSIA1AAQAAAHADAIQADAHAIAGQAHAGAMAEQALAEAQAAQAPAAALgEQALgEAGgFQAHgHADgHQAEgIgBgIQABgNgFgIQgEgHgHgEQgGgFgJgBIgOgBIgvAAIAAgnIAtAAQAIAAAIgDQAGgCAGgEQAFgFADgHQADgGABgJQAAgLgFgIQgFgHgGgFQgIgEgIgBIgSgCQgJAAgIACIgPAGIgKAJIgGAJIgEAIIAAAGIg1AAIACgOQABgIAEgKQAEgJAIgKQAIgJALgIQANgHASgFQASgFAXAAQAaAAATAHQASAHAMALQANALAGANQAFANABANIgDAPQgBAIgFAIQgEAIgJAGQgIAHgNAEIAAAAIAKADIALAFIALAGQAFAFAFAHQAEAHADAKQADAKAAAOQgBASgHAQQgIAPgPAMQgOAMgWAHQgVAHgaAAg");
	this.shape_6.setTransform(96.8,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.553)").s().p("AhnCIIAAkPIA5AAIAABrIA0AAIAQABIAUADQALACALAFQALAFAJAKQAJAHAGANQAFAPAAAUQAAAVgFAOQgGAOgIAKQgJAJgLAFQgKAEgKADIgSACIgMABgAguBZIAuAAIAQgBQAIgCAHgDQAHgEAFgHQAEgIAAgMQAAgMgEgHQgEgIgIgEQgHgEgIgBIgQgBIguAAg");
	this.shape_7.setTransform(255,60.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.553)").s().p("AgbCIIAAjgIhTAAIAAgvIDdAAIAAAvIhTAAIAADgg");
	this.shape_8.setTransform(229.8,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.553)").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAhIgihrIAAAAIgiBrIBEAAg");
	this.shape_9.setTransform(204.5,60.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.553)").s().p("AhnCIIAAkPIB6AAQAWAAAQAGQAQAGAKAMQALALAFAQQAFAQAAAVQAAATgGAQQgGAOgMAMQgLALgRAHQgRAGgVAAIg8AAIAABigAgugHIA0AAQATAAALgKQALgJAAgVQAAgLgDgHQgCgJgGgEQgFgFgIgCQgHgDgKAAIg0AAg");
	this.shape_10.setTransform(179.1,60.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.553)").s().p("AhuCIIAAkPIDEAAIAAAvIiLAAIAAA8IBCAAIAQABIAUADQALACALAFQALAFAJAKQAJAHAFANQAGAPAAAUQAAAVgGAOQgFAOgIAKQgJAJgLAFQgLAEgKADIgSACIgMABgAg1BZIA7AAIARgBQAIgCAHgDQAHgEAFgHQAEgIAAgMQAAgMgEgHQgFgIgHgEQgHgEgIgBIgSgBIg6AAg");
	this.shape_11.setTransform(152.5,60.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.553)").s().p("ABDCIIgRg4IhjAAIgTA4Ig8AAIBhkPIBAAAIBgEPgAAiAhIgihrIAAAAIgiBrIBEAAg");
	this.shape_12.setTransform(124.6,60.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.553)").s().p("AgcCNQgOgCgMgDQgNgEgKgHQgLgGgIgKQgIgJgEgNQgEgNAAgSIA0AAQAAAHADAIQAEAHAGAGQAIAGALAEQAMAEAQAAQAOAAAMgEQAKgEAHgFQAHgHADgHQADgIAAgIQAAgNgEgIQgEgHgHgEQgHgFgHgBIgPgBIgvAAIAAgnIAuAAQAHAAAIgDQAGgCAGgEQAFgFAEgHQACgGAAgJQABgLgFgIQgEgHgIgFQgGgEgJgBIgRgCQgKAAgIACIgPAGIgKAJIgGAJIgDAIIgBAGIg0AAIABgOQABgIAEgKQAEgJAIgKQAHgJAMgIQANgHASgFQASgFAXAAQAaAAATAHQASAHANALQAMALAGANQAFANAAANIgCAPQgCAIgEAIQgEAIgJAGQgIAHgMAEIAAAAIAJADIALAFIALAGQAFAFAEAHQAFAHADAKQACAKAAAOQAAASgIAQQgHAPgPAMQgOAMgWAHQgVAHgaAAg");
	this.shape_13.setTransform(97.8,60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;
	this.instance.setTransform(175.5,61,1,1,0,0,0,175.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,351,122);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15копия();
	this.instance.parent = this;
	this.instance.setTransform(175.5,61,1,1,0,0,0,175.5,61);

	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.6,61.1,1.046,1.046,0,0,0,175.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,351,122);


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


(lib.Символ21_1 = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(217.5,43.3,0.997,0.997,53.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:0,y:329.5},17).wait(1).to({y:9.5},0).to({regX:17.6,scaleX:1,scaleY:1,rotation:1136.9,x:217.6,y:26.4},1).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ21_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(137.5,77,0.998,0.998,160.2,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:0,y:329.5},15).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1250.7,y:60.1},3).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.Символ21_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.6,110.5,0.998,0.998,-70.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:0,x:57.5,y:329.5},13).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1364.1,y:93.7},5).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ21_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(177.5,144.2,0.997,0.997,34.6,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:0,y:329.5},11).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1117.9,y:127.4},7).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_5 = new lib.Символ21_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(341.5,177.9,0.997,0.997,136.4,0,0,17.6,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:17.5,regY:9.5,scaleX:1,scaleY:1,rotation:0,y:329.5},9).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1231.7,y:161.1},9).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_6 = new lib.Символ21_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(257.5,211.6,0.999,0.999,-82.7,0,0,17.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:0,y:329.5},7).wait(1).to({y:9.5},0).to({rotation:1345.4,y:194.8},11).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_7 = new lib.Символ21_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(297.5,245.4,0.998,0.998,15.6,0,0,17.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:9.5,scaleX:1,scaleY:1,rotation:0,y:329.5},5).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1098.8,y:228.5},13).wait(1));

	// Слой 1 - копия: 2
	this.instance_8 = new lib.Символ21_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(383.5,279.1,0.998,0.998,99.3,0,0,17.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,y:329.5},3).wait(1).to({y:9.5},0).to({regX:17.6,scaleX:1,scaleY:1,rotation:1212.6,y:262.3},15).wait(1));

	// Слой 1 - копия
	this.instance_9 = new lib.Символ21_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(97.6,312.6,0.998,0.998,-56.9,0,0,17.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:17.5,scaleX:1,scaleY:1,rotation:0,x:97.5,y:329.5},1).wait(1).to({y:9.5},0).to({scaleX:1,scaleY:1,rotation:1326.4,y:295.8},17).wait(1));

	// Слой 1
	this.instance_10 = new lib.Символ21_1();
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
	this.instance.setTransform(0,0,1,1,0,0,0,175.5,61);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-63.7,367.1,127.6);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(128,39.5,1,1,0,0,0,128,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,79);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bb.png
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(74,291.5,1,1,0,0,0,128,39.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:239.5},2,cjs.Ease.get(-1)).to({y:161.5},3,cjs.Ease.get(1)).wait(122).to({y:213.5},2,cjs.Ease.get(-1)).to({y:291.5},3,cjs.Ease.get(-1)).to({_off:true},1).wait(87));

	// Слой 5
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.5,-125.2,1,1,0,0,0,106.9,21);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(133).to({_off:false},0).to({x:79.5,y:4.8},3).to({y:12.8},3).wait(73).to({x:81.5,y:-125.2},3).to({_off:true},1).wait(4));

	// Слой 12 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-54.4,13.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({rotation:360,alpha:1},5).to({rotation:720,x:-124.4,y:-18.8,alpha:0},5).to({_off:true},1).wait(50));

	// Слой 12 - копия: 2 - копия
	this.instance_3 = new lib.Символ20();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.6,16.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(23));

	// Слой 12 - копия: 2
	this.instance_4 = new lib.Символ20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(215.6,21.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(195).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(10));

	// Слой 12 - копия
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(108.6,64.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(54));

	// Слой 12
	this.instance_6 = new lib.Символ20();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-51.4,13.2,0.41,0.41,0,0,0,81.5,70.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(139).to({_off:false},0).to({rotation:360,alpha:1},7).to({rotation:720,alpha:0},7).to({_off:true},1).wait(66));

	// Слой 11
	this.instance_7 = new lib.Символ19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.9,-90,1,1,0,0,0,7.5,7.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(133).to({_off:false},0).to({y:-18.5},3,cjs.Ease.get(-1)).to({scaleX:0.73,scaleY:0.73,x:77.5,y:98.7},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:77.9,y:98,alpha:0.219},7).to({scaleX:0.73,scaleY:0.73,x:77.5,y:98.7,alpha:1},7).to({scaleX:1,scaleY:1,x:77.9,y:98,alpha:0.219},7).to({scaleX:0.73,scaleY:0.73,x:77.5,y:98.7,alpha:1},7).to({scaleX:1,scaleY:1,x:77.9,y:98,alpha:0.219},7).to({scaleX:0.73,scaleY:0.73,x:77.5,y:98.7,alpha:1},7).to({scaleX:1,scaleY:1,x:77.9,y:98,alpha:0.219},7).to({scaleX:0.73,scaleY:0.73,x:77.5,y:98.7,alpha:1},7).to({scaleX:1,scaleY:1,x:77.9,y:98,alpha:0.219},7).to({scaleX:0.73,scaleY:0.73,x:77.5,y:98.7,alpha:1},7).to({scaleX:1,scaleY:1,x:77.9,y:53},1).to({y:-18.5},3,cjs.Ease.get(-1)).to({y:-90},3,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой 10
	this.instance_8 = new lib.Символ18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(525,18.6,3.09,3.09,0,0,0,29.7,13.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(133).to({_off:false},0).to({scaleX:3.09,scaleY:3.09,x:355.1,y:18.7},3,cjs.Ease.get(-1)).to({scaleX:2.26,scaleY:2.26,x:155.8,y:73.7},3,cjs.Ease.get(1)).wait(71).to({scaleX:3.09,scaleY:3.09,x:185,y:18.6},0).to({scaleX:3.09,scaleY:3.09,x:355.1,y:18.7},3).to({scaleX:3.09,scaleY:3.09,x:525,y:18.6},3).to({_off:true},1).wait(3));

	// Слой 9
	this.instance_9 = new lib.Символ17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-353.6,27.9,3.101,3.101,0,0,0,33.6,21);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(133).to({_off:false},0).to({x:-193.6,y:28},3,cjs.Ease.get(-1)).to({scaleX:2.26,scaleY:2.26,x:-3.8,y:80.5},3,cjs.Ease.get(1)).wait(71).to({scaleX:3.1,scaleY:3.1,x:-33.6,y:27.9},0).to({x:-193.6,y:28},3).to({x:-353.6,y:27.9},3).to({_off:true},1).wait(3));

	// Слой 8
	this.instance_10 = new lib.Анимация1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(77.5,317);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(133).to({_off:false},0).to({y:274.5},3,cjs.Ease.get(-1)).to({scaleX:0.69,scaleY:0.69,y:167},3,cjs.Ease.get(1)).to({startPosition:0},70).to({startPosition:0},1).to({scaleX:1,scaleY:1,y:274.5},3).to({y:317},3,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой 3
	this.instance_11 = new lib.Символ20_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-212.7,-222.7,1.659,1.659,0,0,0,17.4,9.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(140).to({_off:false},0).to({_off:true},73).wait(7));

	// Слой 4
	this.instance_12 = new lib.Символ25();
	this.instance_12.parent = this;
	this.instance_12.setTransform(105,96.1,1,1,0,0,0,372.9,205);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(163).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(50));

	// Слой 2
	this.instance_13 = new lib.Символ13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(91,428,1,1,0,0,0,362.7,172.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(126).to({_off:false},0).to({y:88},9).wait(75).to({y:428},9).wait(1));

	// Слой 1
	this.instance_14 = new lib.Символ12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(90.7,-283.7,1,1,0,0,0,362.7,172.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(126).to({_off:false},0).to({y:76.3},9).wait(75).to({y:-283.7},9).wait(1));

	// Слой 6
	this.instance_15 = new lib.Символ10();
	this.instance_15.parent = this;
	this.instance_15.setTransform(315.5,81.6,1,1,0,0,0,38,3.5);

	this.instance_16 = new lib.Символ10();
	this.instance_16.parent = this;
	this.instance_16.setTransform(195.3,81.6,1,1,0,0,0,38,3.5);

	this.instance_17 = new lib.Символ10();
	this.instance_17.parent = this;
	this.instance_17.setTransform(79.7,81.6,1,1,0,0,0,38,3.5);

	this.instance_18 = new lib.Символ10();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-32.7,81.6,1,1,0,0,0,38,3.5);

	this.instance_19 = new lib.Символ10();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-151.6,81.6,1,1,0,0,0,38,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},75).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},60).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},74).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},10).wait(1));

	// Слой 1
	this.instance_20 = new lib.Символ8();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-151.1,-284.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:-294.8},9,cjs.Ease.get(-1)).to({x:-152.1,y:224.2},14).wait(1).to({x:-151.1,y:-284.8},0).to({x:-152.1,y:224.2},16).wait(1).to({x:-151.1,y:-284.8},0).to({y:331.2},21,cjs.Ease.get(1)).wait(158));

	// Символ 8
	this.instance_21 = new lib.Символ8();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-33.1,-216.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(2).to({y:-226.8},9,cjs.Ease.get(-1)).to({x:-34.1,y:292.2},14).wait(1).to({x:-33.1,y:-216.8},0).to({x:-34.1,y:292.2},16).wait(1).to({x:-33.1,y:-216.8},0).to({y:331.2},21,cjs.Ease.get(1)).wait(156));

	// Символ 8
	this.instance_22 = new lib.Символ8();
	this.instance_22.parent = this;
	this.instance_22.setTransform(78.9,-145.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({y:-155.8},9,cjs.Ease.get(-1)).to({x:77.9,y:363.2},14).wait(1).to({x:78.9,y:-145.8},0).to({x:77.9,y:363.2},16).wait(1).to({x:78.9,y:-145.8},0).to({y:331.2},21,cjs.Ease.get(1)).wait(154));

	// Символ 8
	this.instance_23 = new lib.Символ8();
	this.instance_23.parent = this;
	this.instance_23.setTransform(194.9,79.2,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(6).to({y:69.2},9,cjs.Ease.get(-1)).to({x:193.9,y:588.2},14).wait(1).to({x:194.9,y:79.2},0).to({x:193.9,y:588.2},16).wait(1).to({x:194.9,y:79.2},0).to({y:330.2},21,cjs.Ease.get(1)).wait(152));

	// Символ 8
	this.instance_24 = new lib.Символ8();
	this.instance_24.parent = this;
	this.instance_24.setTransform(314.9,-64.8,1,1,0,0,0,47.9,505.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(8).to({y:-74.8},9,cjs.Ease.get(-1)).to({x:313.9,y:444.2},14).wait(1).to({x:314.9,y:-64.8},0).to({x:313.9,y:444.2},16).wait(1).to({x:314.9,y:-64.8},0).to({y:330.2},21,cjs.Ease.get(1)).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199,-1015,561.7,1599.6);


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
p.nominalBounds = new cjs.Rectangle(-207,-996,561.7,1599.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(135.3,-797,909.8,1599.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
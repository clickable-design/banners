(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/box.jpg", id:"box"},
		{src:"images/heep_03.png", id:"heep_03"},
		{src:"images/heep_05.png", id:"heep_05"},
		{src:"images/heep_08.png", id:"heep_08"},
		{src:"images/heep_11.png", id:"heep_11"},
		{src:"images/heep_15.png", id:"heep_15"},
		{src:"images/heep_17.png", id:"heep_17"},
		{src:"images/heep_22.png", id:"heep_22"},
		{src:"images/heep_25.png", id:"heep_25"},
		{src:"images/heep_27.png", id:"heep_27"},
		{src:"images/heep_31.png", id:"heep_31"},
		{src:"images/heep_34.png", id:"heep_34"},
		{src:"images/heep_40.png", id:"heep_40"},
		{src:"images/heep_44.png", id:"heep_44"},
		{src:"images/heep_45.png", id:"heep_45"},
		{src:"images/heep_50.png", id:"heep_50"},
		{src:"images/heep_52.png", id:"heep_52"},
		{src:"images/pin1.png", id:"pin1"},
		{src:"images/pin2.png", id:"pin2"},
		{src:"images/pointer.png", id:"pointer"},
		{src:"images/snow.png", id:"snow"}
	]
};



// symbols:



(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,384);


(lib.heep_03 = function() {
	this.initialize(img.heep_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,57);


(lib.heep_05 = function() {
	this.initialize(img.heep_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,157);


(lib.heep_08 = function() {
	this.initialize(img.heep_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,46);


(lib.heep_11 = function() {
	this.initialize(img.heep_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,87);


(lib.heep_15 = function() {
	this.initialize(img.heep_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,59);


(lib.heep_17 = function() {
	this.initialize(img.heep_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,72);


(lib.heep_22 = function() {
	this.initialize(img.heep_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,71);


(lib.heep_25 = function() {
	this.initialize(img.heep_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,71);


(lib.heep_27 = function() {
	this.initialize(img.heep_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,58);


(lib.heep_31 = function() {
	this.initialize(img.heep_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,52);


(lib.heep_34 = function() {
	this.initialize(img.heep_34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.heep_40 = function() {
	this.initialize(img.heep_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,39);


(lib.heep_44 = function() {
	this.initialize(img.heep_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,49);


(lib.heep_45 = function() {
	this.initialize(img.heep_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,127);


(lib.heep_50 = function() {
	this.initialize(img.heep_50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,80);


(lib.heep_52 = function() {
	this.initialize(img.heep_52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,34);


(lib.pin1 = function() {
	this.initialize(img.pin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,22);


(lib.pin2 = function() {
	this.initialize(img.pin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,20);


(lib.pointer = function() {
	this.initialize(img.pointer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,124);


(lib.snow = function() {
	this.initialize(img.snow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.Символ79 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pin1();
	this.instance.setTransform(-83,-11);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-11,166,22);


(lib.Символ78 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pin2();
	this.instance.setTransform(-91.5,-10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.5,-10,183,20);


(lib.Символ76 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg6YAdiMAAAg7DMB0xAAAMAAAA7Dg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-373.7,-189.1,747.5,378.2);


(lib.Символ74 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AHfgNIyS1aIVnVnI1nVog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.2,-138.4,138.5,277);


(lib.Символ71 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgNCTQgOgBgNgFQgNgEgLgIQgMgHgJgLIgSgTIgRgnQgCgHAAgFIAChTQACgKAEgKIAKgWIANgTQAIgKAHgFIAVgOIAWgLIAEgBIASgEIAFgBIAZACQAPACAOAEQANADANAHQANAGAJAKIAVAaQAFAIAAAHIgCAEIgPATIgWAPIgJABQgFAAgEgCIgHgHIgMgOIgHgGIgIgGIgJgDIgJgBQgHAAgGADIgbARQgFAEgEAGIgGAOIgDAPIgBAPQAAAQAIASQAHARALAPQAIAFAJACQAHADAJABQAQAAAIgHQAJgGAFgIIALgNQAEgGAJAAQAFAAAIADIAQAHQAIAGAGAGQAFAGAAAGQAAAJgJALQgJAMgMALQgMAKgNAKQgNAIgIADQgKAAgJACQgJADgHAAQgMAAgNgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-15,24.8,30);


(lib.Символ68 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AtJEsIAApYIaTAAIAAJYg");
	this.shape_1.setTransform(1,1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.2,-29.1,168.5,60.2);


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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EIguAIIgegDIhiAEgAihBJQgEAFAAAIIADA0IBDgGQAJgBAEgHQAFgIAAgHQAAgHgDgJIgGgOQgCgDgFgCIgLgCIgtgEQgIAAgEAFgAoCDJQgHgFAAgNIABg3IgBgOIAChpIgDgLIABgLIgCgrQAAgJADgHQADgIAIgEIBiADIAegDIANABIAuALQAOAFAJAIQAJAIAFALQAFAKADANQACAMAAAMQAAAQgDAOQgCANgFAMQgGAMgJAKQgKAKgOAIIgMAHQgKAAgJADQgJADgKAAQgMAAgLgCQgMgCgMAAQgHAAgFACQgGACAAAJIACAuIgDAUIgDAHIgJADIgJAEIgjABQgLAAgHgEgAm6gIIgCAoQAAAIAEAFQAEAFAJAAIAtgEIALgCQAFgCACgDIAGgOQADgIAAgIQAAgHgFgGQgEgHgJgBIhEgGgAr/hyQgEgEgCgGIgCgcQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgCgDIgBgCIgCgLIACgJQACgEAEgDIALgHIAbgNIANgCQAIAAAFACQAFADADAEQACAFABAGIAAAqIgBAOQgCAHgDAFQgDAFgGAAIgNAAIgcAEQgIAAgFgFgAqAh0QgEgFgCgGIgCgcQAAACgBgCIgCgDIgBgCIgBgLIABgJQACgEAEgDIALgHIAbgNIANgCQAIAAAFADQAFACADAFQACAEABAGIABANIgCArQgCAHgDAFQgDAFgGAAIgNAAIgcAEQgIAAgFgEg");

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AySEoIAApPMAklAAAIAAJPg");
	this.shape_1.setTransform(0.5,5.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116.7,-23.8,234.4,59.4);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.5,-18.8,211,37.6);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pointer();
	this.instance.setTransform(-17,-21.5,0.347,0.347);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-21.5,34,43);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_50();
	this.instance.setTransform(-76,-43.6,1,1.09);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-43.6,152,87.2);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjMCTQgFgJgMAEIiEAAQgwgEgPgLQgJgHgZgZQgZgZAnAAQAnAAAWAGQAWAGAIADIBugBQBEgBBsgNQBpgOBCgfQBCgeA8gVQBJgaAzguQAzguAjgMQAjgLg8BTQg8BTi/BPQi+BQibAAQgYAAgHgLg");
	this.shape.setTransform(0.7,-2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-18.3,92.4,31.8);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_50();
	this.instance.setTransform(-76,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-40,152,80);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_27();
	this.instance.setTransform(-18,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-29,36,58);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_27();
	this.instance.setTransform(-19.4,-28,1,1,-3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.4,-29.9,39,59.8);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_31();
	this.instance.setTransform(-22.5,-26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-26,45,52);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_31();
	this.instance.setTransform(-21.2,-27,1,1,2.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.7,-27,47.5,54.1);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiECkQgCgFAAgIQAAgWAdgVQAxgjALgMQAOgOAPgcIAWgsIAqhZIAJgTQAGgMAQgIIAigTQAVgKABAVQgBAKgTAKQgUAJACAOQAAAHgDAOIgGAWQgKAtgUAqQgRAngrA0Qg/BJgzAAQgLAAgFgMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-17.6,27,35.3);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_52();
	this.instance.setTransform(-30.5,-17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-17,61,34);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("AhSAYQABgWAYgPQAXgRAhgEQAfgEAYASQAXARAGARQAFATgpgjQgoglgfAWQghAUgNAWQgHAKgDAAQgDAAABgLg");
	this.shape.setTransform(0.3,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2745").s().p("AhRAXQABgXAYgPQAXgRAhgEQAfgEAYASQAXARAEATQADAVgkgXQglgWgeAPQggAQgQAMQgFAEgEAAQgHAAABgOg");
	this.shape_1.setTransform(0.2,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A4E56").s().p("AhQAUQABgWAXgRQAYgQAggEQAggEAXARQAYASACAVQABAXgggKQghgKgdALQggALgSACIgEABQgPAAABgVg");
	this.shape_2.setTransform(0.2,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B77468").s().p("Ag6ArQgVgHAAgXQABgWAXgRQAYgQAfgEQAhgEAXARQAYARAAAYQgBAZgcAEQgdADgcAFQgNADgMAAQgPAAgMgFg");
	this.shape_3.setTransform(0.1,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49B79").s().p("Ag2AqQgYgQAAgYQAAgWAYgRQAXgRAfgEQAhgEAYASQAXARgCAbQgCAagYARQgZAQgcAAQgeAAgXgRg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C37C6B").s().p("Ag5ArQgWgIAAgYQABgWAXgRQAYgQAfgEQAhgEAXARQAYARgBAYQAAAagcAGQgcAGgcAEIgTACQgSAAgPgHg");
	this.shape_5.setTransform(0.1,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#925D5D").s().p("Ag8ArQgUgCABgXQAAgVAYgRQAXgRAggEQAggEAYASQAXARABAWQABAYgfgEQgfgFgdAIQgbAIgSAAIgFAAg");
	this.shape_6.setTransform(0.1,-1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#623E4F").s().p("AhQAVQABgVAXgRQAYgQAggEQAggEAXARQAYARACAVQACAWgigPQgigQgeAOIgxATIgHABQgKAAABgSg");
	this.shape_7.setTransform(0.2,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#311F41").s().p("AhRAXQABgXAXgPQAYgQAhgEQAfgEAXARQAYARAEATQADAVglgaQgmgYgeAPQggARgPAPQgGAFgDAAQgGAAABgOg");
	this.shape_8.setTransform(0.3,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-5.9,16.8,7.2);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_34();
	this.instance.setTransform(-7.5,-7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-7,15,14);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_05();
	this.instance.setTransform(-52,-78.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-78.5,104,157);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_45();
	this.instance.setTransform(-52,-69.9,0.933,1.243);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-69.9,99,157.9);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_03();
	this.instance.setTransform(-25.5,-28.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-28.5,51,57);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_17();
	this.instance.setTransform(-28,-34.9,1,1.033);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-34.9,56,74.4);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_44();
	this.instance.setTransform(-15,-24.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-24.5,30,49);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_25();
	this.instance.setTransform(-25,-35.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-35.5,50,71);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_40();
	this.instance.setTransform(-9.5,-19.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-19.5,19,39);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_22();
	this.instance.setTransform(-12.5,-35.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.5,-35.5,25,71);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.heep_15();
	this.instance.setTransform(-25.5,-29.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-29.5,51,59);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-5.2,-5.2,0.618,0.618);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-5.2,10.5,10.5);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-8.5,-8.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.box();
	this.instance.setTransform(-422,-158.2,0.824,0.824);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-422,-158.2,844,316.5);


(lib.Символ77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660099").ss(1,1,1).p("AAlgKQAGAOgIAOQgIAPgQAFQgOAFgOgIQgOgIgGgQQgEgOAHgOQAIgOAQgGQAOgEAOAHQAPAIAEAQg");
	this.shape.setTransform(-0.9,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35));

	// Символ 78
	this.instance = new lib.Символ78();
	this.instance.setTransform(146.4,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:128.9,y:9.3},9,cjs.Ease.get(1)).to({rotation:2.2,x:129.3,y:5.8},9,cjs.Ease.get(1)).to({rotation:0,x:146.4,y:10.8},16,cjs.Ease.get(1)).wait(1));

	// Символ 79
	this.instance_1 = new lib.Символ79();
	this.instance_1.setTransform(147.2,3.4,1,1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:129.8,y:1.9},9,cjs.Ease.get(1)).to({rotation:4,x:124.4,y:2.5},9,cjs.Ease.get(1)).to({rotation:5.5,x:147.2,y:3.4},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-15.5,243.8,37.7);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 74
	this.instance = new lib.Символ74();
	this.instance.setTransform(-9.4,54.6,0.13,0.209);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.9},5).to({x:-9.4},4).wait(7));

	// Символ 74
	this.instance_1 = new lib.Символ74();
	this.instance_1.setTransform(7.4,54.6,0.246,0.397);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:14.9},5).to({x:7.4},4).wait(4));

	// Символ 74
	this.instance_2 = new lib.Символ74();
	this.instance_2.setTransform(-11.7,54.6,0.376,0.606);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({x:-4.2},5).to({x:-11.7},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-29.3,62.2,167.9);


(lib.Символ72 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.setTransform(-0.8,6.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AycEoIAApPMAk5AAAIAAJPg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.1,-29.6,236.3,59.2);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ71();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AjJEjIAApFIGTAAIAAJFg");
	this.shape.setTransform(-0.8,-3);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-32.2,40.5,58.4);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.cur.alpha=0;
		
		}
		
		document.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.cur.alpha=1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.cur = new lib.Символ64();

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-21.5,34,43);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.instance_1 = new lib.Символ62();
	this.instance_1.setTransform(0.8,17.2);
	this.instance_1.shadow = new cjs.Shadow("#66FF00",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ61();
	this.instance_2.setTransform(-4.4,-3);
	this.instance_2.alpha = 0.309;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_2.cache(-47,-20,96,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-42,160,88);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.instance_1 = new lib.Символ57();
	this.instance_1.setTransform(1.5,-0.9);
	this.instance_1.shadow = new cjs.Shadow("#66FF00",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(1.4,17.8,1.078,0.725,0,3,166.8);
	this.instance_2.alpha = 0.609;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance_2.cache(-15,-20,31,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-31,44,66);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(-1.1,-1.1);
	this.instance_1.shadow = new cjs.Shadow("#66FF00",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(-8.3,8.9,1,1.005,0,-5.5,0);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance_2.cache(-15,-20,31,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-28,52,60);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.5,-21,75,50);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();

	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(0,0,1.071,1.071);
	this.instance_1.shadow = new cjs.Shadow("#66FF00",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-19,68,42);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.57},7).to({scaleX:0.68,scaleY:0.32,rotation:-13.5},7).to({scaleX:0.57,scaleY:1,rotation:0},6).to({scaleX:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-7,15,14);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ59();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-42,160,107.6);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ46();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.6,-20.2,72,44);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({scaleY:0.84,y:-4.5},10).to({scaleY:1,y:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.5,-28.5,51,57);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(1.3,-4.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.heep_08();
	this.instance_1.setTransform(-23.7,-15.5,1,1.054);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-34.7,54.4,67.7);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(8,-6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(-1,8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.5,-38.8,60.5,75.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-0.5,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-0.5,19.5,-31.9,48.5,-21.1,89.1,-19,96.8,-16.3,104.5,-14.8,108.5,-13.3,112.5,-7.4,126.6,-1.5,140.7,1.5,150.1,4.5,159.5,12.2,212.8,-18.5,257.7,-45.3,296.5,-37.9,344.7,-34.8,364.4,-21.3,377.4,3,411.2,13.1,451.8,15.5,461.2,15.6,471.2,15.9,487.1,13.5,502.2,6.8,532.3,-29.3,569.2,-68.6,646.7,-11.7,742.4,13.6,817.4,38.9,892.4]}},99,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,15.9,7,7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(-4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.8,y:972.9},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,7.3,17,17);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(2.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-100.6,y:850},134).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,11.4,7,7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(1.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.7,4.9,-0.2,9.3,-6.4,18.4,-12.5,27.3,-14.3,31.9,-17.3,40.1,-17.3,64.9,-17.3,65.1,-15.7,82.4,-13.8,100.4,-12.3,104.9,-11.5,107.4,-7.1,117.6,-2.6,128,-0.3,134.9,1.1,139.1,7,156.1,10.2,166.1,11.7,171.8,15.5,186,15.5,207.9,15.5,230.3,8.9,248.6,5,260.1,-5.3,277.2,-16.1,295.1,-19.8,304.6,-26.3,321.4,-26.3,341.4,-26.3,367.7,-18.5,388.3,-14.2,399.5,-1.3,420.8,10.7,441,15.7,455.5,23.5,478.3,23.5,508.2,23.5,533,17.7,552.1,13.9,564.6,5.2,580.9,-4.6,598.7,-7.5,606.9,-13.3,622.8,-13.3,642.2,-13.3,657.5,-7.7,676.8,-2,696.5,7.5,713.7,7.9,714.5,13.4,723.2,18,730.6,21.5,737.2,32.2,758,38.5,784.7,39.6,789.5,41.4,796.2]}},89,cjs.Ease.get(-0.76)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-0.5,10.5,10.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.6,y:832.2},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-2.7,7,7);


(lib.Символ11 = function() {
	this.initialize();

	// Символ 21
	this.instance = new lib.Символ21();

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-185.9,-111.5);

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(142.5,0);

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(207,3.5);

	// Символ 17
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(284,-2.9);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.4,-104.2,485.4,127.1);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-422,-158.2,844,316.5);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:25.2},60,cjs.Ease.get(-1)).to({x:50},59,cjs.Ease.get(1)).to({x:25},60,cjs.Ease.get(-1)).to({x:0},60,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422,-158.2,844,316.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heep_15.png
	this.instance = new lib.Символ22();
	this.instance.setTransform(-5.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:17.3,x:0.5,y:-24.6},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:36,x:6.9,y:-19.5},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:17.8,x:0.7,y:-24.5},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-5.5,y:-29.5},15,cjs.Ease.get(1)).wait(1));

	// heep_22.png
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(5.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.6,x:8.6,y:27.5},14,cjs.Ease.get(-1)).to({rotation:-7.7,x:11.9,y:31.7},15,cjs.Ease.get(1)).to({rotation:-3.8,x:8.7,y:27.6},15,cjs.Ease.get(-1)).to({rotation:0,x:5.5,y:23.5},15,cjs.Ease.get(1)).wait(1));

	// heep_40.png
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(21.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-6.6,x:23.6,y:37.4},14,cjs.Ease.get(-1)).to({rotation:-14,x:25.8,y:40.6},15,cjs.Ease.get(1)).to({rotation:-6.8,x:23.7,y:37.6},15,cjs.Ease.get(-1)).to({rotation:0,x:21.5,y:34.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-59,62,118);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// heep_25.png
	this.instance = new lib.Символ25();
	this.instance.setTransform(-8,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7.3,x:-11.7,y:56},14,cjs.Ease.get(-1)).to({rotation:-16.5,x:-16.2,y:62},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:37.3,x:-20,y:23.3},31,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:87.7,x:-23.5,y:-13},29,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:43.9,x:-15.7,y:19},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-8,y:51},15,cjs.Ease.get(1)).wait(1));

	// heep_17.png
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:11.8,x:-1.1,y:-48.6},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:26.4,x:-8.6,y:-46.2},15,cjs.Ease.get(1)).to({scaleX:0.99,scaleY:1,rotation:0,skewX:23.1,skewY:22.6,x:-7,y:-46.8},15,cjs.Ease.get(-1)).to({scaleX:0.95,scaleY:1,skewX:12.5,skewY:10,x:-2.1,y:-48.5},16).to({scaleX:0.9,scaleY:1,skewX:-0.3,skewY:-5.2,x:3.9,y:-50.6},29,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:0.95,scaleY:0.98,skewX:0.3,skewY:-2.5,y:-51.2},15,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:5,y:-50.5},15,cjs.Ease.get(1)).wait(1));

	// heep_44.png
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(17.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.1,x:5.5,y:12.7},14,cjs.Ease.get(-1)).to({rotation:-16.1,x:-9.2,y:11.1},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:0.89,rotation:0,skewX:-11.3,skewY:-8.5,x:-7.4,y:13.6},15,cjs.Ease.get(-1)).to({scaleY:0.86,skewX:11.8,skewY:15.8,x:-2.7,y:6.1},16).to({scaleX:1,scaleY:1.01,skewX:37.9,skewY:45.7,x:5.3,y:-7.4},29,cjs.Ease.get(1)).to({regY:-0.1,scaleX:1,scaleY:0.98,skewX:15.1,skewY:22.8,x:10,y:-0.6},15,cjs.Ease.get(-1)).to({regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:18,y:6},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-85.4,66,171.9);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(-31.5,10.4,0.825,0.677,0,-6,174);

	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(-3.8,0.8);

	// Слой 1
	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(-15.7,29);

	this.instance_3 = new lib.heep_11();
	this.instance_3.setTransform(-54.7,-43.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.7,-43.5,85,87);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(292.1,-212.8,1.042,1,0,0,180);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-220.4,-195.4,1.042,1,0,0,180);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-11.2,-212.8,1.042,1,0,0,180);

	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-381.1,-185.8);

	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(-15.1,-199.4);

	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(-258.1,-207.4);

	this.instance_6 = new lib.Символ11();
	this.instance_6.setTransform(364.1,-146.8,1.042,1,0,0,180);

	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(-148.4,-129.4,1.042,1,0,0,180);

	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(60.8,-146.8,1.042,1,0,0,180);

	this.instance_9 = new lib.Символ11();
	this.instance_9.setTransform(-309.1,-119.8);

	this.instance_10 = new lib.Символ11();
	this.instance_10.setTransform(56.9,-133.4);

	this.instance_11 = new lib.Символ11();
	this.instance_11.setTransform(-186.1,-141.4);

	this.instance_12 = new lib.Символ11();
	this.instance_12.setTransform(288.1,-75.8,1.042,1,0,0,180);

	this.instance_13 = new lib.Символ11();
	this.instance_13.setTransform(-224.4,-58.4,1.042,1,0,0,180);

	this.instance_14 = new lib.Символ11();
	this.instance_14.setTransform(-15.2,-75.8,1.042,1,0,0,180);

	this.instance_15 = new lib.Символ11();
	this.instance_15.setTransform(-385.1,-48.8);

	this.instance_16 = new lib.Символ11();
	this.instance_16.setTransform(-19.1,-62.4);

	this.instance_17 = new lib.Символ11();
	this.instance_17.setTransform(-262.1,-70.4);

	this.instance_18 = new lib.Символ11();
	this.instance_18.setTransform(330.1,-16.8,1.042,1,0,0,180);

	this.instance_19 = new lib.Символ11();
	this.instance_19.setTransform(-182.4,0.6,1.042,1,0,0,180);

	this.instance_20 = new lib.Символ11();
	this.instance_20.setTransform(26.8,-16.8,1.042,1,0,0,180);

	this.instance_21 = new lib.Символ11();
	this.instance_21.setTransform(-343.1,10.2);

	this.instance_22 = new lib.Символ11();
	this.instance_22.setTransform(22.9,-3.4);

	this.instance_23 = new lib.Символ11();
	this.instance_23.setTransform(-220.1,-11.4);

	this.instance_24 = new lib.Символ11();
	this.instance_24.setTransform(304.7,71.3,1.042,1,0,0,180);

	this.instance_25 = new lib.Символ11();
	this.instance_25.setTransform(-207.8,88.7,1.042,1,0,0,180);

	this.instance_26 = new lib.Символ11();
	this.instance_26.setTransform(1.4,71.3,1.042,1,0,0,180);

	this.instance_27 = new lib.Символ11();
	this.instance_27.setTransform(-368.5,98.3);

	this.instance_28 = new lib.Символ11();
	this.instance_28.setTransform(-2.5,84.7);

	this.instance_29 = new lib.Символ11();
	this.instance_29.setTransform(-245.5,76.7);

	this.instance_30 = new lib.Символ11();
	this.instance_30.setTransform(376.7,137.3,1.042,1,0,0,180);

	this.instance_31 = new lib.Символ11();
	this.instance_31.setTransform(-135.8,154.7,1.042,1,0,0,180);

	this.instance_32 = new lib.Символ11();
	this.instance_32.setTransform(73.4,137.3,1.042,1,0,0,180);

	this.instance_33 = new lib.Символ11();
	this.instance_33.setTransform(-296.5,164.3);

	this.instance_34 = new lib.Символ11();
	this.instance_34.setTransform(69.5,150.7);

	this.instance_35 = new lib.Символ11();
	this.instance_35.setTransform(-173.5,142.7);

	this.instance_36 = new lib.Символ11();
	this.instance_36.setTransform(300.7,208.3,1.042,1,0,0,180);

	this.instance_37 = new lib.Символ11();
	this.instance_37.setTransform(-211.8,225.7,1.042,1,0,0,180);

	this.instance_38 = new lib.Символ11();
	this.instance_38.setTransform(-2.6,208.3,1.042,1,0,0,180);

	this.instance_39 = new lib.Символ11();
	this.instance_39.setTransform(-372.5,235.3);

	this.instance_40 = new lib.Символ11();
	this.instance_40.setTransform(-6.5,221.7);

	this.instance_41 = new lib.Символ11();
	this.instance_41.setTransform(-249.5,213.7);

	this.instance_42 = new lib.Символ11();
	this.instance_42.setTransform(342.7,267.3,1.042,1,0,0,180);

	this.instance_43 = new lib.Символ11();
	this.instance_43.setTransform(-169.8,284.7,1.042,1,0,0,180);

	this.instance_44 = new lib.Символ11();
	this.instance_44.setTransform(39.4,267.3,1.042,1,0,0,180);

	this.instance_45 = new lib.Символ11();
	this.instance_45.setTransform(-330.5,294.3);

	this.instance_46 = new lib.Символ11();
	this.instance_46.setTransform(35.5,280.7);

	this.instance_47 = new lib.Символ11();
	this.instance_47.setTransform(-207.5,272.7);

	this.addChild(this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-583.5,-317.1,1167.1,634.2);


(lib.Символ73 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.setTransform(0.8,3.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-29.1,40.5,58.4);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 68
	this.instance = new lib.Символ68();
	this.instance.setTransform(-47.5,238.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.69,skewX:69.7,x:-27.3,y:273.1},4,cjs.Ease.get(-1)).wait(15).to({scaleY:0.42,skewX:-55,x:-59.1,y:274.1},0).to({scaleY:1,skewX:0,x:-47.5,y:238.9},10,cjs.Ease.get(1)).wait(71));

	// Символ 67
	this.instance_1 = new lib.Символ67();
	this.instance_1.setTransform(166.6,234.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleY:0.66,skewX:70.9,x:188.7,y:271.7},4,cjs.Ease.get(-1)).wait(15).to({scaleY:0.4,skewX:-57.9,x:156.9,y:272.7},0).to({scaleY:1,skewX:0,x:166.6,y:234.3},10,cjs.Ease.get(1)).wait(67));

	// Символ 73
	this.instance_2 = new lib.Символ73();
	this.instance_2.setTransform(318.4,239.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({scaleY:0.49,skewX:62.1,x:331.2,y:273.2},4,cjs.Ease.get(-1)).wait(15).to({scaleY:0.37,skewX:-51.6,x:299.4,y:274.2},0).to({scaleY:1,skewX:0,x:318.4,y:239.1},10,cjs.Ease.get(1)).wait(63));

	// Символ 72
	this.instance_3 = new lib.Символ72();
	this.instance_3.setTransform(468.7,239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({scaleY:0.47,skewX:62.8,x:481,y:272.4},4,cjs.Ease.get(-1)).wait(15).to({scaleY:0.57,skewX:-68.3,x:449.2,y:273.4},0).to({scaleY:1,skewX:0,x:468.7,y:239.5},10,cjs.Ease.get(1)).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.8,209.8,717.7,60.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.setTransform(-32,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.94,y:-0.3},10,cjs.Ease.get(-1)).to({scaleY:1,y:1.3},24,cjs.Ease.get(1)).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(29.8,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.94,y:-2.2},10,cjs.Ease.get(-1)).to({scaleY:1,y:-0.7},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.7,-37.7,117.5,73.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 3
	this.instance = new lib.Символ76();
	this.instance.setTransform(79.6,9.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.809},9).to({alpha:0},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(69.1,-480.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 1
	this.instance_2 = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.29,scaleY:1.29},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514.5,-797.3,1167.1,995.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(27.5,-119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewX:0.5,skewY:1.5,x:21.7,y:-119.2},25,cjs.Ease.get(-1)).to({scaleY:1,skewX:5.7,skewY:7.8,x:25.1,y:-116.5},24,cjs.Ease.get(1)).to({scaleY:1,skewX:0.5,skewY:1.5,x:22,y:-119.2},26,cjs.Ease.get(-1)).to({scaleX:1,skewX:0,skewY:0,x:27.5,y:-119.5},24,cjs.Ease.get(1)).wait(1));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(16.8,-78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,skewX:-4.8,skewY:-3.8,x:13.6,y:-76.4},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1.01,skewX:-4.9,skewY:-2.9,x:16.2,y:-72.1},24,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-4.5,skewY:-3.5,x:13.9,y:-76.5},26,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:16.8,y:-78.9},24,cjs.Ease.get(1)).wait(1));

	// Символ 34
	this.instance_2 = new lib.Символ34();
	this.instance_2.setTransform(8,-32.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,skewX:-2,skewY:-1,x:5,y:-31.9},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0.3,skewY:2.3,x:4.3,y:-30.3},24,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-2,skewY:-1,x:5.1,y:-31.9},26,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:8,y:-32.7},24,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(63.8,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,skewX:-2,skewY:-1,x:62.4,y:16.2},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0.3,skewY:2.3,x:59.6,y:21.4},24,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-2,skewY:-1,x:62.5,y:16.2},26,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:63.8,y:16.6},24,cjs.Ease.get(1)).wait(1));

	// Символ 38
	this.instance_4 = new lib.Символ38();
	this.instance_4.setTransform(20.8,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:21.3,y:86.4},25,cjs.Ease.get(-1)).to({rotation:4.5,x:15.2,y:84.2},24,cjs.Ease.get(1)).to({rotation:0,x:21.3,y:86.7},26,cjs.Ease.get(-1)).to({x:20.8,y:91},24,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(-65.7,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,skewX:-7,skewY:-6,x:-70.4,y:-42.8},25,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:1.01,skewX:-9.4,skewY:-7.5,x:-71.7,y:-43.7},24,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-6.5,skewY:-5.6,x:-70.1,y:-43},26,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:-65.7,y:-47},24,cjs.Ease.get(1)).wait(1));

	// Символ 40
	this.instance_6 = new lib.Символ40();
	this.instance_6.setTransform(8.8,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,skewX:-2,skewY:-1,x:6.3,y:-16.3},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0.3,skewY:2.3,x:5,y:-14.5},24,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,skewX:-2,skewY:-1,x:6.4,y:-16.3},26,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:8.8,y:-17},24,cjs.Ease.get(1)).wait(1));

	// Символ 39
	this.instance_7 = new lib.Символ39();
	this.instance_7.setTransform(22.8,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({rotation:4.5,x:14.8,y:101.8},24,cjs.Ease.get(1)).to({rotation:0,x:22.8,y:99.5},26,cjs.Ease.get(-1)).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-163,198.5,350.5);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ63();
	this.instance.setTransform(373.8,16.8,1,1,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-29.6,x:145.8,y:-21.4},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-29.7,x:86.4,y:-24},30).to({scaleX:1,scaleY:1,rotation:25.4,x:-173.8,y:-17.6},27,cjs.Ease.get(1)).to({rotation:25.4,x:-219.4,y:-18.4},23).to({scaleX:1,scaleY:1,rotation:18.5,x:-197,y:12.5},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-1.8,x:-129.6,y:104.8},10,cjs.Ease.get(1)).to({rotation:-15.7,x:-34.4,y:107.2},23).to({scaleX:1,scaleY:1,rotation:-18.3,x:42,y:-21},13).to({rotation:29.4,x:1.4,y:-11.8},14).to({rotation:-21.1,x:114.4,y:102.8},10).to({rotation:-21.1,x:121.9,y:112.2},13).to({x:255.6,y:234},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(96.8,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:24.6},49,cjs.Ease.get(-1)).to({x:-178.2},50,cjs.Ease.get(1)).to({x:-78.5},43,cjs.Ease.get(-1)).to({x:-38},8).to({x:96.8},49,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-165,399.2,350.5);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(-96.7,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:6.9},14,cjs.Ease.get(-1)).to({y:12},15,cjs.Ease.get(1)).to({y:6.7},16,cjs.Ease.get(-1)).to({y:2},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-163,399.2,350.5);


// stage content:



(lib.periwki640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		this.pin.alpha=0;
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.fon.gotoAndPlay(1);
			this.pin.alpha=1;
		
		}
		
		document.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.fon.gotoAndPlay(10);
			this.pin.alpha=0;
		}
		
		
		
		stage.canvas.style.cursor = "none";
		this.pin.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pin.x = stage.mouseX;
			this.pin.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.pin = new lib.Символ77();
	this.pin.setTransform(237.7,498.1,0.513,0.513,17.2);

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Слой 3
	this.instance = new lib.Символ75();
	this.instance.setTransform(600.1,135.4,1.073,1,0,0,180,-4.5,55.4);

	this.instance_1 = new lib.Символ75();
	this.instance_1.setTransform(41.5,80);

	this.instance_2 = new lib.Символ69();
	this.instance_2.setTransform(126,80,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ42();
	this.instance_3.setTransform(467.2,139.7,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.fon = new lib.Символ8();
	this.fon.setTransform(264.2,154.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.7,-490.3,1167.1,1187.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
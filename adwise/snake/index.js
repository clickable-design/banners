(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1467360454022", id:"back"},
		{src:"images/map.jpg?1467360454022", id:"map"},
		{src:"images/rez2_03.png?1467360454022", id:"rez2_03"},
		{src:"images/rez2_06.png?1467360454022", id:"rez2_06"},
		{src:"images/rez2_09.png?1467360454022", id:"rez2_09"},
		{src:"images/rez2_13.png?1467360454022", id:"rez2_13"},
		{src:"images/rez2_16.png?1467360454022", id:"rez2_16"},
		{src:"images/rez2_19.png?1467360454023", id:"rez2_19"},
		{src:"images/rez2_24.png?1467360454023", id:"rez2_24"},
		{src:"images/rez2_26.png?1467360454023", id:"rez2_26"},
		{src:"images/rez2_32.png?1467360454023", id:"rez2_32"},
		{src:"images/rez2_35.png?1467360454023", id:"rez2_35"},
		{src:"images/rez2_41.png?1467360454023", id:"rez2_41"},
		{src:"images/rez2_44.png?1467360454023", id:"rez2_44"},
		{src:"images/rez2_48.png?1467360454023", id:"rez2_48"},
		{src:"images/rez2_53.png?1467360454023", id:"rez2_53"},
		{src:"images/rez2_57.png?1467360454023", id:"rez2_57"},
		{src:"images/rez2_60.png?1467360454023", id:"rez2_60"},
		{src:"images/rez2_63.png?1467360454023", id:"rez2_63"},
		{src:"images/weapon_03.png?1467360454023", id:"weapon_03"},
		{src:"images/weapon_06.png?1467360454023", id:"weapon_06"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,719,384);


(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,221,145);


(lib.rez2_03 = function() {
	this.initialize(img.rez2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,730);


(lib.rez2_06 = function() {
	this.initialize(img.rez2_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,25);


(lib.rez2_09 = function() {
	this.initialize(img.rez2_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,67);


(lib.rez2_13 = function() {
	this.initialize(img.rez2_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,76);


(lib.rez2_16 = function() {
	this.initialize(img.rez2_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,100);


(lib.rez2_19 = function() {
	this.initialize(img.rez2_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,172);


(lib.rez2_24 = function() {
	this.initialize(img.rez2_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,99);


(lib.rez2_26 = function() {
	this.initialize(img.rez2_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,148);


(lib.rez2_32 = function() {
	this.initialize(img.rez2_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,78);


(lib.rez2_35 = function() {
	this.initialize(img.rez2_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,119);


(lib.rez2_41 = function() {
	this.initialize(img.rez2_41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,36);


(lib.rez2_44 = function() {
	this.initialize(img.rez2_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,104);


(lib.rez2_48 = function() {
	this.initialize(img.rez2_48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,36);


(lib.rez2_53 = function() {
	this.initialize(img.rez2_53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,48);


(lib.rez2_57 = function() {
	this.initialize(img.rez2_57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,55);


(lib.rez2_60 = function() {
	this.initialize(img.rez2_60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,286);


(lib.rez2_63 = function() {
	this.initialize(img.rez2_63);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,34);


(lib.weapon_03 = function() {
	this.initialize(img.weapon_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,675);


(lib.weapon_06 = function() {
	this.initialize(img.weapon_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,454);


(lib.Символ69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnhXIBPAAIgrCvg");
	this.shape.setTransform(4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,17.7);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,11.9,0,-11.8).s().p("AAxDKIAAhbQAAhSAFhiIgBAAQgbBTgOAiIg5CaIhIAAIAAmTIBFAAIAABaQgFCOgDAqIACAAQAKgiAhhTIA6idIBHAAIAAGTg");
	this.shape.setTransform(11.9,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.8,40.5);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,10.9,0,-10.9).s().p("AAHDJQgPgDgPgIQgOgHgLgLQgNgKgJgOQgMgRgQguQgKgkAAgsQAAgZAEgZQAEgYAHgVQAHgUAJgQQAKgRAMgMQAPgRAlgVQAagLAeAAQAcAAAbAKIgNBDQgRgIgTAAQgSAAgPAHQgPAIgLAQQgLASgGAZQgHAcAAAiQAAAkAGAaQAGAZAMARQAKAQAPAHQAPAIATAAQASAAAUgGIAHBCQgUAJgpAAQgTAAgRgEg");
	this.shape.setTransform(10.9,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.8,41.2);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,13,0,-13).s().p("AA2DKIgShdIhGAAIgSBdIhNAAIBYmTIBcAAIBPGTgAAdAwIgaiuIgCAAIgbCuIA3AAg");
	this.shape.setTransform(13,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.1,40.5);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0.1,11.9,0,-11.8).s().p("AAnDKIAAlOIhOAAIAAFOIhOAAIAAmTIDrAAIAAGTg");
	this.shape.setTransform(11.9,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.8,40.5);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0.1,10.9,-0.1,-10.9).s().p("AAHDJQgPgDgPgIQgOgHgLgLQgNgKgJgOQgMgRgQguQgKgkAAgsQAAgZAEgZQAEgYAHgVQAHgUAJgQQAKgRAMgMQAPgRAlgVQAagLAeAAQAcAAAbAKIgNBDQgRgIgTAAQgSAAgPAHQgPAIgLAQQgLASgGAZQgHAcAAAiQAAAkAGAaQAGAZAMARQAKAQAPAHQAPAIATAAQASAAAUgGIAHBCQgUAJgpAAQgTAAgRgEg");
	this.shape.setTransform(10.9,20.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.8,41.2);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,-12.6,0,12.7).s().p("AhfDJIAChBIATADQAPAAAMgOQAMgMAEgQQAFgLgFgNIhekUIBVAAIAwDYIACAAIAkjYIBQAAIg8DVQgdBrgVAiQgPAZgTAOQgVAOgZAAQgUAAgLgDg");
	this.shape.setTransform(12.7,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.3,40.9);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,-9.3,0,9.4).s().p("AhcDKIAAmTIC5AAIAABFIhqAAIAAFOg");
	this.shape.setTransform(9.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,40.5);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,-12.6,0,12.7).s().p("AhfDJIAChBIATADQAPAAAMgOQAMgMAEgQQAFgLgFgNIhekUIBVAAIAwDYIACAAIAkjYIBQAAIg8DVQgdBrgVAiQgPAZgTAOQgVAOgZAAQgUAAgLgDg");
	this.shape.setTransform(12.7,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.3,40.9);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,-11.3,0,11.4).s().p("AhwDKIAAmMQAkgHAugBQAkAAAZAHQAcAHATARQARAQAJAYQAJAWAAAbQAAAggKAZQgIAXgQAPQgSAUgdAJQgZAKgZAAIgPAAIAACWgAghiHIAAB9IAMABQAPAAAJgFQALgFAHgJQAHgJADgMQAEgLAAgPQAAgdgMgQQgGgJgKgEQgIgFgNAAg");
	this.shape.setTransform(11.3,20.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.7,40.6);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0.1,-15.4,0.1,15.4).s().p("ABaD2IgChYIivAAIgDBYIg8AAIgDiaIAdgBQANgfAPg+QAIguAEhfIAAhmIDOAAIAAFQIAfABIgDCagAgMiBQgEBcgHAqQgHAwgNAkIBWAAIAAkJIg3AAg");
	this.shape.setTransform(15.4,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,49.3);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,-12.9,0,13).s().p("AggDLQgOgFgNgIQgMgIgKgMIgRgaQgPgcgIgmQgHgkAAgqQAAgqAIgkQAJgmAQgcIATgZQALgMAMgHQANgJAOgEQAPgEAOgBQASAAAQAGQAPAEAMAJQAMAIAKAMIARAbQANAcAHAkQAGAhAAAlQgEBFgGAbIgLAlIgQAeQgRAZgYANQgXAMgcgBQgRAAgPgDgAgSh/QgJAJgGASQgHASgDAaQgDAZAAAfQAAAiADAaQADAaAHASQAGARAJAIQAJAJAKAAQAMABAJgLQAJgKAFgUQAIgZADhKIgCgzQgDgagFgSQgGgTgIgKQgKgLgMAAQgKAAgJAJg");
	this.shape.setTransform(12.9,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.9,41.4);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AB3D3D","#F10202","#FFFFFF"],[0,0.514,0.937],0,-11.8,0,11.9).s().p("AAnDKIAAlOIhOAAIAAFOIhOAAIAAmTIDrAAIAAGTg");
	this.shape.setTransform(11.9,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.8,40.5);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai4kQIBfgFIESEUIkSESIhfAFQC5kXi5kPg");
	this.shape.setTransform(18.6,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,55.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.447)").s().p("AFzcrQgiAAgVgDQgegEgVgNQgbgRgTgiQgMgYgOgqQhNjrgph1QhGjJhBiPIhLibQguhegag/QgnhihSkiQhFj2hHiEQgyhYgXgtQgphOgMg9QgPhIgdhLQgdhKgUhuIgkjAQgQhRAqg9Qgkg4gtgqQgsgqgPgWQgPgWhBgrQhAgqhmgsQhmgtAEgQQAEgQgmAKQgmALgLgDQgRgFgIgKQgQgVANgpQApiKBthlQBuhnCLgeIACAGQBbgNBkApQBUAjBVBGQCQB5B8C9QBeCOBoDeIG7PZQCKEtBcDBQA4B0BHCLQD/HzEiHSQAMAUAEAOQAGATgHAPQgLAUgtAIQmgA9mdAAIgnAAg");
	this.shape.setTransform(130,183.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259.9,367.2);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.447)").s().p("AAGNeQhCgGg7gnQg7gnggg8QgQgfgWhEIguiVQgahYgLgWQgMgXgFg4QgEg4gHgWQgGgXgGgpQgGgqgsggIhuj8IgBgCIgFgBQgJgDgFgHQgEgJgBgYIgEjHQgBgxAFgVQAEgTAKgXQAFgMAPgbIAgg6QAWgoAOgTQAWggAYgSQAZgSAwgRQA9gVAQgIIAagOIAbgNQAXgIAwgDIBagGIAAgDQAhAEB8gEQBhgDA4AUQAiAMAlAZQAWAPAqAhQAjAcARAQQAcAbAPAaQAGAHAAAJQgBAIgIAEIgCABIARAaIAbAqQANAYAGAVQAHAYAAAfQAAAVgDAjQgPCPgsDyQgNBPgTAqQgFAMgPAcQgOAYgFAPQgJAYgGAhIgHA7QgWDHhYC3QgaA1gYAfQgqA1hBAdQg2AXg3AAIgYgBg");
	this.shape.setTransform(56.1,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,172.7);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.298)").s().p("AjZg/QBahaB/AAQB+AABaBaIACACIjZDXg");
	this.shape.setTransform(21.9,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.447)").s().p("AjYBBIDZjZIDYDVIgCACQhaBah9AAQh+AAhahYg");
	this.shape_1.setTransform(21.9,46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.7,61.6);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(3,1,1).p("AAAgHIBIhHABthzIAagZAi+jHIAVAVAiEiNIAgAgAgSDLIjBAAIAAgDIBXhWAhXBOIBXhVAhAhJIBABCIBTBRAB4BvIBcBcIi0AAACsixIAagZ");
	this.shape.setTransform(21.3,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,45.6,43.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.weapon_06();
	this.instance.setTransform(0,0,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,323.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.weapon_03();
	this.instance.setTransform(0,36.7,0.638,0.638,-26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,420.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,719,384);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(247,7,7,0)","rgba(247,7,7,0.035)","#FD0303"],[0,0.078,1],0,0,0,0,0,557.1).s().p("Eg8+Ab1Q5QriAAwTQAAwSZQrjUAZRgLiAjtAAAUAjuAAAAZRALiQZQLjAAQSQAAQT5QLiUgZRALjgjuAAAUgjtAAAgZRgLjg");
	this.shape.setTransform(552,252);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1103.9,504);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,76);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44,67);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,25);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,100);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_24();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,99);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_26();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,148);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79,78);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_35();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,119);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_41();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138,36);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_44();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,104);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_48();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,36);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_53();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,48);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_57();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,55);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_60();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,286);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rez2_63();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,34);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.map();
	this.instance.setTransform(-110.5,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.5,-72.5,221,145);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADkFDInIgKQg2gBgagDQgsgFgggNQgQgGgbgOQgegPgNgGQgpgRhBgGQhJgEglgEQg+gIgtgWQg2gbgXgtQgNgagEgjQgDgZABgmQAAg+ASgcQAagoBCgKQARgDAkgDQAjgCATgDQA9gMB5hPQBwhJBIgCIAAACIHNAJQCtADBdAFQCUAHB1ATQBVANAtAaQAfASAUAcQAVAeACAhQACA0hABNQhGBQgIAuIgCAuQgBAbgHAQQgQAlg8AXQhbAmh6AKQgwAEhKAAIhlgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89,-32.5,178.1,65.1);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC7EKIl2gJQgsgBgWgCQgkgEgagLQgOgFgWgLIgjgRQgigOg1gFQg8gEgegDQgzgGglgTQgtgWgTglQgLgVgDgdQgCgVABgfQAAgyAPgXQAVghA2gJQAOgCAegCQAdgCAPgDQAygJBkhBQBcg8A7gCIAAABIF6AIQCPACBMAEQB5AHBhAPQBGAKAlAWQAZAPAQAXQASAYABAbQACArg1A/Qg5BCgGAmIgCAlQgBAXgGANQgNAegxATQhLAfhlAJQgnADg+AAIhSgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.2,-26.7,146.4,53.5);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E3521").s().p("AhwCMQgvg6AAhSQAAhRAvg6QAvg6BBAAQBBAAAwA6QAuA6ABBRQgBBSguA6QgwA6hBAAQhBAAgvg6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-19.9,32,39.8);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E3521").s().p("AhcBzQgmgwAAhDQAAhCAmgwQAngwA1AAQA2AAAmAwQAnAwAABCQAABDgnAwQgmAwg2AAQg1AAgngwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-16.3,26.3,32.7);


(lib.Символ70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.setTransform(4,8.8,1,1,0,0,0,4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.8},4).to({y:8.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,17.7);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(110.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,145);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ68();
	this.instance.setTransform(110.5,72.5,1,1,0,0,0,110.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:113.5},79).to({x:110.5},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,145);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ70();
	this.instance.setTransform(151.8,77.4,1,1,0,0,0,4,8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("ANcAAQAAFkj8D7Qj9D9ljAAQliAAj9j9Qj8j7AAlkQAAljD8j8QD9j8FiAAQFjAAD9D8QD8D8AAFjg");
	this.shape.setTransform(152,49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApfJfQj7j8gBljQABliD7j9QD9j8FiAAQFkAAD7D8QD8D9AAFiQAAFjj8D8Qj7D9lkgBQliABj9j9g");
	mask.setTransform(152,49.6);

	// Слой 1
	this.instance_1 = new lib.Символ67();
	this.instance_1.setTransform(110.5,72.5,1,1,0,0,0,110.5,72.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65,-37.4,174,174);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// У
	this.instance = new lib.Символ59();
	this.instance.setTransform(179.8,27,1,1,0,0,0,12.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({y:17},4).to({y:27},5).wait(1));

	// Г
	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(157.8,26.8,1,1,0,0,0,9.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({y:16.8},4).to({y:26.8},5).wait(3));

	// У
	this.instance_2 = new lib.Символ57();
	this.instance_2.setTransform(133.3,27,1,1,0,0,0,12.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({y:17},4).to({y:27},5).wait(5));

	// Р
	this.instance_3 = new lib.Символ56();
	this.instance_3.setTransform(108.6,26.7,1,1,0,0,0,11.3,20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({y:16.7},4).to({y:26.7},5).wait(7));

	// Д
	this.instance_4 = new lib.Символ55();
	this.instance_4.setTransform(77.6,31.2,1,1,0,0,0,15.4,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:21.2},4).to({y:31.2},5).wait(9));

	// О
	this.instance_5 = new lib.Символ54();
	this.instance_5.setTransform(47.1,26.8,1,1,0,0,0,12.9,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({y:16.8},4).to({y:26.8},5).wait(11));

	// П
	this.instance_6 = new lib.Символ53();
	this.instance_6.setTransform(17.3,26.8,1,1,0,0,0,11.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:16.8},4).to({y:26.8},5).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5,6.1,186.9,49.8);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// И
	this.instance = new lib.Символ64();
	this.instance.setTransform(122.9,26.8,1,1,0,0,0,11.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({y:36.8},4).to({y:26.8},5).wait(1));

	// С
	this.instance_1 = new lib.Символ63();
	this.instance_1.setTransform(96.3,26.8,1,1,0,0,0,10.9,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({y:36.8},4).to({y:26.8},5).wait(3));

	// А
	this.instance_2 = new lib.Символ62();
	this.instance_2.setTransform(69.9,26.8,1,1,0,0,0,13,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({y:36.8},4).to({y:26.8},5).wait(5));

	// П
	this.instance_3 = new lib.Символ61();
	this.instance_3.setTransform(41,26.8,1,1,0,0,0,11.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({y:36.8},4).to({y:26.8},5).wait(7));

	// С
	this.instance_4 = new lib.Символ60();
	this.instance_4.setTransform(14.4,26.8,1,1,0,0,0,10.9,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:36.8},4).to({y:26.8},5).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,6.2,131.3,41.2);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(97.2,32,1,1,0,0,0,70.2,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 52
	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(96.9,90,1,1,0,0,0,96.9,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5,6.2,186.9,107.6);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(18.6,27.8,1,1,0,0,0,18.6,27.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.5,scaleX:0.71,scaleY:0.71,x:48.6},4).to({regX:18.6,scaleX:1,scaleY:1,x:18.6},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,55.7);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(129.9,183.6,1,1,0,0,0,129.9,183.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259.9,367.2);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSDRQgSgDgMgKQgMgJgGgNQgHgSACgRQADgRALgQQALgOARgNQAQgMAUgJQAVgKAVgEQATgEATACQATACAOAKQAPAJAIAQQAIATgDASQgEAQgMAQQgLAOgRAMQgPALgTAJQgZALgXAEQgLACgKAAQgKAAgJgCgAAQBWQgSACggAPQgiAPgPANQgPAOAFAMQAFALAVgDQATgCAhgPQAfgPAOgMQARgOgFgMQgEgJgQAAIgGAAgAjPAEIgRgiIGxAaIAQAigAgdgrQgRgDgMgJQgMgJgGgOQgIgRADgSQADgQALgQQAKgPARgNQARgMAUgJQATgKAVgEQAVgDATABQATADAOAJQAPAJAIAQQAIATgDASQgDAQgNAQQgLAOgRAMQgQALgTAJQgaAMgYAEIgRABQgLAAgKgCgABGimQgUADghAPQggAPgPANQgPANAGAMQAFAMAUgDQARgDAigPQAhgPAOgLQARgPgFgMQgEgJgPAAIgHAAg");
	this.shape.setTransform(139.5,209.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkCCQgbgDgUgOQgSgNgJgVQgHgOgCgOQgBgNADgOQAFgYAUgWQASgWAegUQAbgTAjgQQAmgRAhgHQAjgJAdACQAeABAWAOQALAHAJAJQAJAKAGANQAGAPACAOQABAOgDANQgDANgHAKIgRAXQgTAVgfAUQgZAQgiAPQg4AXgZAGQgXAFgTAAQgMAAgLgCgABNg+Qg0AOgmASQhEAggRAOQgMAKgFAJQgEAJAEAJQAEAIAJADQAKACAQgDQAWgEBDgdQAkgRAvgaQAOgKAFgJQAFgKgEgIQgDgIgKgDQgGgCgHAAIgNABg");
	this.shape_1.setTransform(126.6,180.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjGgXIAvgUIA7AOQAmAJBBANQAZACAUgBQAWgDARgHQAWgLAHgQQAIgSgKgVQgGgOgNgNIgWgRIAxglQAOAKAPAQQARAUAJAWQANAbAAAYQABAVgKATQgIAPgQAPQgOAMgUAJQgXAKgaADQgXAEgbgCQgXgDgZgFIgxgOIghgKIgBABIAvBpIg9Acg");
	this.shape_2.setTransform(114.7,158.6);

	this.instance = new lib.Символ46();
	this.instance.setTransform(129.9,183.6,1,1,0,0,0,129.9,183.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(56.1,86.3,1,1,0,0,0,56.1,86.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,172.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABoIBsjPIAVAAIhrDPgAAmBiQgIgFgEgJQgFgIgDgMQgCgKAAgMQAAgNACgLQADgMAFgGQAGgJAHgGQAIgEAKAAQALgBAIAGQAHAGAGAIQAEAHACALQACALAAALQAAAPgEANQgCAMgHAIQgFAIgHADQgHAEgJABQgKAAgIgGgAAuAKQgDALAAAUQAAAUADAKQAEAKAGAAQAIABACgLQADgKABgUQAAgTgDgLQgDgLgIAAQgGAAgEAKgAhJAPQgIgFgFgJQgFgHgDgLQgCgKAAgNQAAgNADgKQACgMAGgJQAGgJAHgFQAIgFAKAAQAKAAAJAFQAHAFAFAKQAEAJADALQABALABALQAAAPgDANQgEALgFAHQgGAIgIAEQgHADgHAAQgLAAgIgFgAhBhGQgDAKAAATQAAAVADAKQADAKAIAAQAGAAAEgKQACgKAAgVQAAgTgCgKQgEgLgGAAQgIgBgDAMg");
	this.shape.setTransform(69.1,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBlQgHgCgFgEQgLgIgIgPQgHgOgDgUQgDgRAAgVQAAgUAEgTQADgTAIgOQAHgPAMgIQAGgEAGgCQAHgCAGAAQAJAAAHADQAHACAGAEQAGAFAEAGIAIANQAGAPADATQACARAAATQgBAggDAOQgFATgIAOQgIANgLAGQgLAGgMAAQgHAAgHgDgAgGhAQgEAFgCAIQgFAdAAAWQABAoAEAMQACAJAEADQADAFAEAAQAEAAAEgFQADgEACgIQADgMABgoQAAgVgEgdQgCgIgDgFQgEgFgEAAQgDAAgEAEg");
	this.shape_1.setTransform(52.1,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBkQgLgCgGgDIAGghIAOAFQAIACAIAAQAHAAAGgCQAEgCAFgFQAEgFACgGQADgHAAgIQAAgKgEgHQgDgHgHgEQgDgEgJgCQgHAAgJAAIgPAAIALhmIBTAAIAAAkIg0AAIgFAkIAGAAQAZAFAMALQAIAIAFAKQAEALAAAPQAAAQgEANQgFANgJAKQgKAKgNAFQgNAGgPAAQgKAAgLgDg");
	this.shape_2.setTransform(38.4,28.9);

	this.instance = new lib.Символ43();
	this.instance.setTransform(56.1,86.3,1,1,0,0,0,56.1,86.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(21.9,30.8,1,1,0,0,0,21.9,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.7,61.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(21.2,20.4,1,1,0,0,0,21.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjZg/QBahaB/AAQB+AABaBaIACACIjZDXg");
	mask.setTransform(21.1,4.1);

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(21.1,19.5,1,1,0,0,0,21.9,30.8);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-11.3,45.6,53.6);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(133.6,210.2,1,1,0,0,0,133.6,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,420.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(94,161.7,1,1,0,0,0,94,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.2},14).to({rotation:0},15).to({rotation:5},15).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,323.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(552,252,1,1,0,0,0,552,252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1103.9,504);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 18
	this.instance = new lib.Символ18();
	this.instance.setTransform(11.9,23.2,1,1,0,0,0,3.6,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13.2},9).to({rotation:0},10).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(53,65.1,1,1,0,0,0,53,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,115.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(55.7,86.5,1,1,0,0,0,56.1,86.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ42(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.rez2_19();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,112.4,172.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(138.8,183.4,1,1,0,0,0,129.9,183.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ45(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.rez2_03();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,309,730.2);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,51,0.447)").s().p("AmLBBQgvNJgpoAQgpn/A/i4QA+i5B5hdQB5hdDwA8QDyA8CAF2QB/F0jZhjQjnIei6AAQjBAAiUo8g");
	this.shape.setTransform(385.8,85.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,51,0.447)").s().p("AlDCCQg7JVg9m9IgBgEQgSknAWjZQAIhEAPguQA2ipB4g0QA7ghBYAHQBKAGBaAdQDbBRB1EbIAFALQBvEhiogYQhYDkhXCQQhiCRhaAAQilAAiTnTg");
	this.shape_1.setTransform(384.8,92.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,51,0.447)").s().p("Aj5DGQhJFhhQl6IgDgHQgHjdAVjrQAGg8AMgoQAvibB2gLQA0gOBKATQA/ARBHAfQDJBnBrDLIAGAJQBeDOh3AyQg/C/hHCZQhXCXhZAAQiJAAiPltg");
	this.shape_2.setTransform(383.8,98.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,51,0.447)").s().p("AiuEUQhWBshjk2IgGgLQAFiUAUj9QAEgzAKgkQAniLB1AeQAsAEA7AfQA0AcA2AgQC1B9BiB9IAGAGQBPB9hHB8QglCZg4ChQhLChhZAAQhwAAiJkJg");
	this.shape_3.setTransform(382.6,104.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,153,51,0.447)").s().p("AlGgeQARhNARkPQASkODdDRQDcDSBrA3QBsA3hxHbQg9CvheAAQimAAkSoxg");
	this.shape_4.setTransform(381.6,109.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,153,51,0.447)").s().p("Ak7hiQAKhZBAjTQBBjSCnCbQCkCbBsAMQBrALhwGvQhUFsh3AAQiaAAjYpqg");
	this.shape_5.setTransform(382.8,129.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(153,153,51,0.447)").s().p("AkvirQAChlBwiXQBwiXBtBmQBwBlBsghQBrghhwGFQhoIyiBAAQiOAAivqtg");
	this.shape_6.setTransform(383.9,149.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,153,51,0.447)").s().p("AkkjoQgFhyCfhbQCdhbA5AvQA5AvBshNQBrhNhwFaQh5MAiDAAQiEAAiQr2g");
	this.shape_7.setTransform(385,169.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(153,153,51,0.447)").s().p("AkYjtQgMh/DOgfQDMgfACgHQACgHBrh5QBsh6hwEwQiKPQiBAAQh6AAh0tCg");
	this.shape_8.setTransform(386.1,183.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(153,153,51,0.447)").s().p("AkDn3QAKg2DDhDQDBhDgTBLQgUBKBjhUQBihVg7FgQh+P3h3ABQiBAAh7yIg");
	this.shape_9.setTransform(384.4,215.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(153,153,51,0.447)").s().p("Aj0qqQAfASC5hnQC2hogoCcQgpCcBZgvQBYgvgFGRQh1QmhxAAQiDAAiA3Ug");
	this.shape_10.setTransform(383.3,238.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(153,153,51,0.447)").s().p("AjwtgQA2BbCtiMQCriMg+DuQg9DtBPgKQBOgKAxHCQhuRZhrABQiGAAiC8mg");
	this.shape_11.setTransform(383.3,262.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(153,153,51,0.447)").s().p("AjswYQBLCkChiwQCiiwhTE+QhQE/BDAcQBFAbBmHyQhpSRhlABUgCIAAAgCDgh8g");
	this.shape_12.setTransform(383.3,286.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(153,153,51,0.447)").s().p("AjozQQBhDsCWjUQCXjVhoGQQhmGQA6BBQA7BBCcIhQhkTNhhAAUgCIAAAgCEgnTg");
	this.shape_13.setTransform(383.3,310.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(153,153,51,0.447)").s().p("AAOQ9QghhRgvlnQgbhzgUkbQgLidgOhwQgMhWgJhrQgXk1genzIgGh4QAOAkAOAbQBPCMBwiOQCGijhZFxQhWF+A0BQQA+CCCRHHQggHsghCiQgUBfgXBnQgVBWgUAZQgIAKgIAAQgUAAgUg7g");
	this.shape_14.setTransform(382.7,314.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(153,153,51,0.447)").s().p("AAoPeQgegig2l6QgdgbgTkeQgJiygRhLQgPgxgKhSQgVkAgjonIgFhnQAMAkANAcQBFCLBihoQBzhzhKFSQhGFsAwBeQA/DECHFuQgSGPgSATQgRAygZB8QgUBXgTAaQgIAMgJAAQgPAAgQgog");
	this.shape_15.setTransform(382.1,316.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(153,153,51,0.447)").s().p("ABDN+QgaANg+mOQggA/gQkiQgJjGgUglQgSgQgKg3QgUjKgopcIgEhWQAKAkALAdQA8CJBThCQBihCg8EzQg2FaAsBtQBAEDB9EXQgDEygEh9QgPAFgbCRQgTBYgQAdQgJAPgJAAQgLAAgLgXg");
	this.shape_16.setTransform(381.5,317.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(153,153,51,0.447)").s().p("ABSMdQgVA7hHmgQgiCXgOkkQgJjcgWACQgVATgLghQgTiSgsqRIgDhEQAIAjAKAfQAxCIBFgdQBQgRgrEVQgoFHApB6QA/E/BvC9QgHAfgIAvQgRBZgPAfQgKAVgKAAQgGAAgGgIgACmJTIgFgJQAShNAJAdQgGCWgGAAQgFAAgFhdgAChJKIAAAAg");
	this.shape_17.setTransform(382,319.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(153,153,51,0.447)").s().p("ACKK9QgRgQgQgZQAHgIAGgUQANghAQhaQAfi7ALBVQgUFBgUAAQgGAAgFgbgAAUHIQAmCHAvBFQgGAHgFgBQgDAVgGAAQgTAAgujngABpKUIAAAAgAgEFiIADgSIAVB4QgOgvgKg3gAgzEZQgHjxgZApQgYA1gMgHQgRhfgxrDIgDg0QAHAkAIAfQAnCIA2AIQBBAggeD2QgZEzAlCLQAOBPAPBDQgPBagLAAQgOAAgHijgAgEFiIAAAAg");
	this.shape_18.setTransform(382.9,324.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(153,153,51,0.447)").s().p("ABtLYQhegLhEnLQgVhjgEicIAAAAQAdhOAGEEQAJEqAmlKQBaHIAMiZQAIgSAIgkQALgkAPhbQAgjQAKCCQgnIUgmAAIgEgBgAi7q1IgBgjQAFAkAGAgQAdCGAnAuQAwBRgQDXQgDBnACBUQgbBXgMASQgQgpg2r4gAhOADIAAAAg");
	this.shape_19.setTransform(383.8,338);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(153,153,51,0.447)").s().p("AhJEkQgShwgKifIAdhxQAfh3AFEZQAIEtApmgQBhHZAHjHIAJhMQAJglAPhcQAhjjAHCvQg2K7g3BCQgLALgLAAQhFAAg/nIgAi8rZIgBgSIAIBFQATCGAZBTQAeCCgBC4QACBbAFBNIgOAyIAAAAQgPAAg6sggAhlAVIAAAAg");
	this.shape_20.setTransform(384.6,352.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(153,153,51,0.447)").s().p("Ai5rBIgFhFQBANiANhDQANhBAiidQAhidAFEvQAFEuAsn5QBpHsADj0IABhgQAHgnANheQAkj6AFDcQhWQQhWAAQhkAAho3Ig");
	this.shape_21.setTransform(385.5,368.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},32).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Слой 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(153,153,51,0.447)").s().p("Ak0AgQhFjfAmj3QI3JsB5pYQATDjhGDfQh+GXiwAAQiyAAh+mXg");
	this.shape_22.setTransform(388.5,247);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(153,153,51,0.447)").s().p("AgDHVQiFgzh+mLQhUkBAIjvQIJFECTkmQAjEChiEbQh9F4h3AAQgOAAgMgFg");
	this.shape_23.setTransform(389.7,258.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(153,153,51,0.447)").s().p("AABHuQhVhlh/mAQhikigWjnQHaAZCuAPQAzEhh+FWQh9FihRAAQgTAAgQgTg");
	this.shape_24.setTransform(390.2,269.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(153,153,51,0.447)").s().p("AAHJDQgniXh/lzQhxlEg0jfQGrkTDJFFQBDFAiaGSQh9FPg4AAQgSAAgLgmg");
	this.shape_25.setTransform(390.8,275.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(153,153,51,0.447)").s().p("AAOKgQADjJh8lnQh/lmhSjWQF8o+DkJ6QBSFfi1HNQh/FCglAAQgQAAABg+g");
	this.shape_26.setTransform(391.3,280.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(153,153,51,0.447)").s().p("AAUKRQgChyh+lQQiAlPhDlLQEjngD4I6QCWDYi2HNQiSFzgeAAQgHAAgBgWg");
	this.shape_27.setTransform(390.1,290.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(153,153,51,0.447)").s().p("AAXJ5QgIgah/k6QiAk3g2nBQDJmBENH6QDaBRi2HNQisG2gQAAIgBgBg");
	this.shape_28.setTransform(389.3,301.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(153,153,51,0.447)").s().p("Ah2FuQiCkjgno0QBtkiEkG6QEeg2i2HMQi2HPgNA+QgDALgGAAQgaAAhqjvg");
	this.shape_29.setTransform(388.8,314.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(153,153,51,0.447)").s().p("Ah+GnQiDkLgZqrQATjDE6F6QFgi9i1HPQi2HMgTCWQgHA2gTAAQgmAAhTirg");
	this.shape_30.setTransform(388.4,328.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(153,153,51,0.447)").s().p("Ah6FMQhsjegYonQAeirEVEsQExhridFoQidFngSCWQgHA2gTAAQgmAAhUisg");
	this.shape_31.setTransform(387.9,337.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(153,153,51,0.447)").s().p("Ah1DzQhWixgWmlQApiSDwDdQEAgZiDEDQiEEAgSCWQgHA2gVAAQgkAAhUirg");
	this.shape_32.setTransform(387.4,346.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(153,153,51,0.447)").s().p("AhwCZQhAiDgUkjQA0h4DLCOQDQA5hqCcQhrCbgSCWQgHA2gVAAQgkAAhUisg");
	this.shape_33.setTransform(386.9,355.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(153,153,51,0.447)").s().p("AhrBDQgqhVgSiiQA+hfCnA/QCgCMhSA2QhRA0gSCWQgHA2gVAAQgkAAhUirg");
	this.shape_34.setTransform(386.4,364.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(153,153,51,0.447)").s().p("AhmgFIgkhIQBJhICCgOQBvDbg4gwQg4gugTCUQgGA2gVAAQgkAAhUipg");
	this.shape_35.setTransform(385.9,371.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(153,153,51,0.447)").s().p("AhmgFIgkhIQBJhHCCgPQBvDbg4gwQg4gtgSCUQgHA1gVAAQgkAAhUipg");
	this.shape_36.setTransform(385.9,371.5);
	this.shape_36._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},32).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(46).to({_off:false},0).wait(6).to({_off:true},1).wait(1));

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(379.1,158,0.743,1,0,0,0,552,252);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({alpha:0},15).wait(1));

	// rez2_60.png
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-241.5,143,1,1,0,0,0,68.5,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({x:388.5,y:157},0).to({scaleX:1.21,scaleY:1.21,rotation:-6.7,y:158.1},3).to({scaleX:1,scaleY:1,rotation:0,y:157},4).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:6.5,y:158},3).to({scaleX:1,scaleY:1,rotation:0,y:157},4).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:6.5,y:158},3).to({scaleX:1,scaleY:1,rotation:0,y:157},4).wait(1));

	// rez2_19.png
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(372,149,1,1,0,0,0,56,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-4,x:297,y:163},6).to({rotation:0,x:372,y:149},8).to({rotation:6.7,x:428,y:149.1},8).to({scaleX:1.31,scaleY:1.31,rotation:0,x:377.7,y:176.6},5).to({scaleY:1.49},2).to({_off:true},1).wait(24));

	// rez2_03.png
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(495.5,386,1,1,0,0,0,154.5,365);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1,skewX:-5.9,x:457.5},6).to({scaleY:1,skewX:0,x:495.5},8).to({scaleY:1,skewX:4.6,x:525},8).to({scaleX:1.31,scaleY:1.31,skewX:0,x:539.4,y:487},5).to({regX:154.6,scaleX:1.39,scaleY:1.39,x:548.5,y:557},3).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310,0,960,751);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,51,0.447)").s().p("AmLBBQgvNJgpoAQgpn/A/i4QA+i5B5hdQB5hdDwA8QDyA8CAF2QB/F0jZhjQjnIei6AAQjBAAiUo8g");
	this.shape.setTransform(385.8,85.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,51,0.447)").s().p("AlDCCQg7JVg9m9IgBgEQgSknAWjZQAIhEAPguQA2ipB4g0QA7ghBYAHQBKAGBaAdQDbBRB1EbIAFALQBvEhiogYQhYDkhXCQQhiCRhaAAQilAAiTnTg");
	this.shape_1.setTransform(384.8,92.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,153,51,0.447)").s().p("Aj5DGQhJFhhQl6IgDgHQgHjdAVjrQAGg8AMgoQAvibB2gLQA0gOBKATQA/ARBHAfQDJBnBrDLIAGAJQBeDOh3AyQg/C/hHCZQhXCXhZAAQiJAAiPltg");
	this.shape_2.setTransform(383.8,98.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,153,51,0.447)").s().p("AiuEUQhWBshjk2IgGgLQAFiUAUj9QAEgzAKgkQAniLB1AeQAsAEA7AfQA0AcA2AgQC1B9BiB9IAGAGQBPB9hHB8QglCZg4ChQhLChhZAAQhwAAiJkJg");
	this.shape_3.setTransform(382.6,104.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,153,51,0.447)").s().p("AlGgeQARhNARkPQASkODdDRQDcDSBrA3QBsA3hxHbQg9CvheAAQimAAkSoxg");
	this.shape_4.setTransform(381.6,109.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,153,51,0.447)").s().p("Ak7hiQAKhZBAjTQBBjSCnCbQCkCbBsAMQBrALhwGvQhUFsh3AAQiaAAjYpqg");
	this.shape_5.setTransform(382.8,129.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(153,153,51,0.447)").s().p("AkvirQAChlBwiXQBwiXBtBmQBwBlBsghQBrghhwGFQhoIyiBAAQiOAAivqtg");
	this.shape_6.setTransform(383.9,149.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,153,51,0.447)").s().p("AkkjoQgFhyCfhbQCdhbA5AvQA5AvBshNQBrhNhwFaQh5MAiDAAQiEAAiQr2g");
	this.shape_7.setTransform(385,169.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(153,153,51,0.447)").s().p("AkYjtQgMh/DOgfQDMgfACgHQACgHBrh5QBsh6hwEwQiKPQiBAAQh6AAh0tCg");
	this.shape_8.setTransform(386.1,183.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(153,153,51,0.447)").s().p("AkDn3QAKg2DDhDQDBhDgTBLQgUBKBjhUQBihVg7FgQh+P3h3ABQiBAAh7yIg");
	this.shape_9.setTransform(384.4,215.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(153,153,51,0.447)").s().p("Aj0qqQAfASC5hnQC2hogoCcQgpCcBZgvQBYgvgFGRQh1QmhxAAQiDAAiA3Ug");
	this.shape_10.setTransform(383.3,238.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(153,153,51,0.447)").s().p("AjwtgQA2BbCtiMQCriMg+DuQg9DtBPgKQBOgKAxHCQhuRZhrABQiGAAiC8mg");
	this.shape_11.setTransform(383.3,262.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(153,153,51,0.447)").s().p("AjswYQBLCkChiwQCiiwhTE+QhQE/BDAcQBFAbBmHyQhpSRhlABUgCIAAAgCDgh8g");
	this.shape_12.setTransform(383.3,286.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(153,153,51,0.447)").s().p("AjozQQBhDsCWjUQCXjVhoGQQhmGQA6BBQA7BBCcIhQhkTNhhAAUgCIAAAgCEgnTg");
	this.shape_13.setTransform(383.3,310.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(153,153,51,0.447)").s().p("AAOQ9QghhRgvlnQgbhzgUkbQgLidgOhwQgMhWgJhrQgXk1genzIgGh4QAOAkAOAbQBPCMBwiOQCGijhZFxQhWF+A0BQQA+CCCRHHQggHsghCiQgUBfgXBnQgVBWgUAZQgIAKgIAAQgUAAgUg7g");
	this.shape_14.setTransform(382.7,314.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(153,153,51,0.447)").s().p("AAoPeQgegig2l6QgdgbgTkeQgJiygRhLQgPgxgKhSQgVkAgjonIgFhnQAMAkANAcQBFCLBihoQBzhzhKFSQhGFsAwBeQA/DECHFuQgSGPgSATQgRAygZB8QgUBXgTAaQgIAMgJAAQgPAAgQgog");
	this.shape_15.setTransform(382.1,316.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(153,153,51,0.447)").s().p("ABDN+QgaANg+mOQggA/gQkiQgJjGgUglQgSgQgKg3QgUjKgopcIgEhWQAKAkALAdQA8CJBThCQBihCg8EzQg2FaAsBtQBAEDB9EXQgDEygEh9QgPAFgbCRQgTBYgQAdQgJAPgJAAQgLAAgLgXg");
	this.shape_16.setTransform(381.5,317.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(153,153,51,0.447)").s().p("ABSMdQgVA7hHmgQgiCXgOkkQgJjcgWACQgVATgLghQgTiSgsqRIgDhEQAIAjAKAfQAxCIBFgdQBQgRgrEVQgoFHApB6QA/E/BvC9QgHAfgIAvQgRBZgPAfQgKAVgKAAQgGAAgGgIgACmJTIgFgJQAShNAJAdQgGCWgGAAQgFAAgFhdgAChJKIAAAAg");
	this.shape_17.setTransform(382,319.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(153,153,51,0.447)").s().p("ACKK9QgRgQgQgZQAHgIAGgUQANghAQhaQAfi7ALBVQgUFBgUAAQgGAAgFgbgAAUHIQAmCHAvBFQgGAHgFgBQgDAVgGAAQgTAAgujngABpKUIAAAAgAgEFiIADgSIAVB4QgOgvgKg3gAgzEZQgHjxgZApQgYA1gMgHQgRhfgxrDIgDg0QAHAkAIAfQAnCIA2AIQBBAggeD2QgZEzAlCLQAOBPAPBDQgPBagLAAQgOAAgHijgAgEFiIAAAAg");
	this.shape_18.setTransform(382.9,324.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(153,153,51,0.447)").s().p("ABtLYQhegLhEnLQgVhjgEicIAAAAQAdhOAGEEQAJEqAmlKQBaHIAMiZQAIgSAIgkQALgkAPhbQAgjQAKCCQgnIUgmAAIgEgBgAi7q1IgBgjQAFAkAGAgQAdCGAnAuQAwBRgQDXQgDBnACBUQgbBXgMASQgQgpg2r4gAhOADIAAAAg");
	this.shape_19.setTransform(383.8,338);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(153,153,51,0.447)").s().p("AhJEkQgShwgKifIAdhxQAfh3AFEZQAIEtApmgQBhHZAHjHIAJhMQAJglAPhcQAhjjAHCvQg2K7g3BCQgLALgLAAQhFAAg/nIgAi8rZIgBgSIAIBFQATCGAZBTQAeCCgBC4QACBbAFBNIgOAyIAAAAQgPAAg6sggAhlAVIAAAAg");
	this.shape_20.setTransform(384.6,352.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(153,153,51,0.447)").s().p("Ai5rBIgFhFQBANiANhDQANhBAiidQAhidAFEvQAFEuAsn5QBpHsADj0IABhgQAHgnANheQAkj6AFDcQhWQQhWAAQhkAAho3Ig");
	this.shape_21.setTransform(385.5,368.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},54).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Слой 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(153,153,51,0.447)").s().p("Ak0AgQhFjfAmj3QI3JsB5pYQATDjhGDfQh+GXiwAAQiyAAh+mXg");
	this.shape_22.setTransform(388.5,247);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(153,153,51,0.447)").s().p("AgDHVQiFgzh+mLQhUkBAIjvQIJFECTkmQAjEChiEbQh9F4h3AAQgOAAgMgFg");
	this.shape_23.setTransform(389.7,258.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(153,153,51,0.447)").s().p("AABHuQhVhlh/mAQhikigWjnQHaAZCuAPQAzEhh+FWQh9FihRAAQgTAAgQgTg");
	this.shape_24.setTransform(390.2,269.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(153,153,51,0.447)").s().p("AAHJDQgniXh/lzQhxlEg0jfQGrkTDJFFQBDFAiaGSQh9FPg4AAQgSAAgLgmg");
	this.shape_25.setTransform(390.8,275.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(153,153,51,0.447)").s().p("AAOKgQADjJh8lnQh/lmhSjWQF8o+DkJ6QBSFfi1HNQh/FCglAAQgQAAABg+g");
	this.shape_26.setTransform(391.3,280.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(153,153,51,0.447)").s().p("AAUKRQgChyh+lQQiAlPhDlLQEjngD4I6QCWDYi2HNQiSFzgeAAQgHAAgBgWg");
	this.shape_27.setTransform(390.1,290.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(153,153,51,0.447)").s().p("AAXJ5QgIgah/k6QiAk3g2nBQDJmBENH6QDaBRi2HNQisG2gQAAIgBgBg");
	this.shape_28.setTransform(389.3,301.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(153,153,51,0.447)").s().p("Ah2FuQiCkjgno0QBtkiEkG6QEeg2i2HMQi2HPgNA+QgDALgGAAQgaAAhqjvg");
	this.shape_29.setTransform(388.8,314.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(153,153,51,0.447)").s().p("Ah+GnQiDkLgZqrQATjDE6F6QFgi9i1HPQi2HMgTCWQgHA2gTAAQgmAAhTirg");
	this.shape_30.setTransform(388.4,328.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(153,153,51,0.447)").s().p("Ah6FMQhsjegYonQAeirEVEsQExhridFoQidFngSCWQgHA2gTAAQgmAAhUisg");
	this.shape_31.setTransform(387.9,337.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(153,153,51,0.447)").s().p("Ah1DzQhWixgWmlQApiSDwDdQEAgZiDEDQiEEAgSCWQgHA2gVAAQgkAAhUirg");
	this.shape_32.setTransform(387.4,346.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(153,153,51,0.447)").s().p("AhwCZQhAiDgUkjQA0h4DLCOQDQA5hqCcQhrCbgSCWQgHA2gVAAQgkAAhUisg");
	this.shape_33.setTransform(386.9,355.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(153,153,51,0.447)").s().p("AhrBDQgqhVgSiiQA+hfCnA/QCgCMhSA2QhRA0gSCWQgHA2gVAAQgkAAhUirg");
	this.shape_34.setTransform(386.4,364.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(153,153,51,0.447)").s().p("AhmgFIgkhIQBJhICCgOQBvDbg4gwQg4gugTCUQgGA2gVAAQgkAAhUipg");
	this.shape_35.setTransform(385.9,371.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(153,153,51,0.447)").s().p("AhmgFIgkhIQBJhHCCgPQBvDbg4gwQg4gtgSCUQgHA1gVAAQgkAAhUipg");
	this.shape_36.setTransform(385.9,371.5);
	this.shape_36._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},54).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(68).to({_off:false},0).wait(6).to({_off:true},1).wait(1));

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(379.1,158,0.743,1,0,0,0,552,252);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({alpha:0},15).wait(1));

	// rez2_63.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(429.9,339.2,1,1,0,0,0,13.6,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.2,x:423.4,y:343.7},19).to({rotation:0,x:429.9,y:339.2},20).to({scaleX:1.22,scaleY:1.22,x:413.1,y:445},5).wait(5).to({scaleX:1.59,scaleY:1.59,x:431.4,y:564.3},0).to({_off:true},1).wait(26));

	// rez2_60.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(-241.5,143,1,1,0,0,0,68.5,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({x:388.5,y:157},0).to({scaleX:1.21,scaleY:1.21,rotation:-6.7,y:158.1},3).to({scaleX:1,scaleY:1,rotation:0,y:157},4).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:6.5,y:158},3).to({scaleX:1,scaleY:1,rotation:0,y:157},4).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:6.5,y:158},3).to({scaleX:1,scaleY:1,rotation:0,y:157},4).wait(1));

	// rez2_09.png
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(419,50.8,1,1,0,0,0,22,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:406.8,y:72.8},19).to({x:419,y:50.8},20).to({regX:22.1,scaleX:1.22,scaleY:1.22,x:399.9,y:94.1},5).to({_off:true},2).wait(30));

	// rez2_13.png
	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(461.8,64.7,1,1,0,0,0,63.5,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-3.2,x:454,y:90.7},19).to({rotation:0,x:461.8,y:64.7},20).to({scaleX:1.22,scaleY:1.22,x:451.9,y:111},5).to({_off:true},2).wait(30));

	// rez2_26.png
	this.instance_5 = new lib.Символ13();
	this.instance_5.setTransform(511.4,192.7,1,1,0,0,0,73.7,140.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:140.5,rotation:-9.8,x:524.5,y:207},19).to({regY:140.6,rotation:0,x:511.4,y:192.7},20).to({scaleX:1.22,scaleY:1.22,x:512.3,y:266.8},5).to({_off:true},2).wait(30));

	// rez2_35.png
	this.instance_6 = new lib.Символ11();
	this.instance_6.setTransform(441,279.8,1,1,0,0,0,-4,96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:9.7,x:440.4,y:277.9},19).to({rotation:0,x:441,y:279.8},20).to({scaleX:1.22,scaleY:1.22,x:426.7,y:372.7},5).to({_off:true},2).wait(30));

	// rez2_57.png
	this.instance_7 = new lib.Символ6();
	this.instance_7.setTransform(449.4,338.2,1,1,0,0,0,22.6,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:9.2},19).to({rotation:0},20).to({scaleX:1.22,scaleY:1.22,x:436.9,y:443.8},5).wait(5).to({scaleX:1.59,scaleY:1.59,x:462.6,y:562.7},0).to({_off:true},1).wait(26));

	// rez2_53.png
	this.instance_8 = new lib.Символ7();
	this.instance_8.setTransform(402.5,303.9,1,1,0,0,0,16.8,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:9.7},19).to({rotation:0},20).to({scaleX:1.22,scaleY:1.22,x:379.7,y:402},5).wait(5).to({scaleX:1.59,scaleY:1.59,x:387.7,y:508},0).to({_off:true},1).wait(26));

	// rez2_48.png
	this.instance_9 = new lib.Символ8();
	this.instance_9.setTransform(382.2,248,1,1,0,0,0,70.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:378.2},19).to({x:382.2},20).to({scaleX:1.22,scaleY:1.22,x:355.1,y:334.1},5).to({_off:true},2).wait(30));

	// rez2_44.png
	this.instance_10 = new lib.Символ9();
	this.instance_10.setTransform(372.5,285,1,1,0,0,0,89.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(39).to({scaleX:1.22,scaleY:1.22,x:343.3,y:379.1},5).to({_off:true},2).wait(30));

	// rez2_41.png
	this.instance_11 = new lib.Символ10();
	this.instance_11.setTransform(393,229,1,1,0,0,0,69,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:394.6},19).to({x:393},20).to({scaleX:1.22,scaleY:1.22,x:368.2,y:310.9},5).to({_off:true},2).wait(30));

	// rez2_32.png
	this.instance_12 = new lib.Символ12();
	this.instance_12.setTransform(389.5,114.7,1,1,0,0,0,39.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:109.7},19).to({y:114.7},20).to({scaleX:1.22,scaleY:1.22,x:364,y:171.9},5).to({_off:true},2).wait(30));

	// rez2_24.png
	this.instance_13 = new lib.Символ14();
	this.instance_13.setTransform(393.5,169.2,1,1,0,0,0,43.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleY:1.05,y:166.1},19).to({scaleY:1,y:169.2},20).to({scaleX:1.22,scaleY:1.22,x:368.9,y:238.2},5).to({_off:true},2).wait(30));

	// Слой 20
	this.instance_14 = new lib.Анимация1("synched",0);
	this.instance_14.setTransform(394,129.9);

	this.instance_15 = new lib.Анимация2("synched",0);
	this.instance_15.setTransform(369.5,190.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},44).to({state:[]},2).to({state:[]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,x:369.5,y:190.4},44).wait(32));

	// rez2_19.png
	this.instance_16 = new lib.Символ16();
	this.instance_16.setTransform(820.5,79,1,1,0,0,0,56,86);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({x:788},0).wait(27).to({x:372,y:149},0).wait(3).to({scaleX:1.31,scaleY:1.31,x:377.7,y:176.6},0).wait(2).to({scaleY:1.49},0).to({_off:true},1).wait(24));

	// rez2_06.png
	this.instance_17 = new lib.Символ21();
	this.instance_17.setTransform(310.7,246.1,1,1,0,0,0,92,107.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({rotation:11.7,y:246.2},19).to({rotation:0,y:246.1},20).to({scaleX:1.22,scaleY:1.22,x:268.1,y:331.8},5).to({_off:true},2).wait(30));

	// rez2_03.png
	this.instance_18 = new lib.Символ15();
	this.instance_18.setTransform(940.5,305,1,1,0,0,0,154.5,365);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({x:914.5},0).wait(27).to({x:495.5,y:386},0).wait(3).to({scaleX:1.31,scaleY:1.31,x:539.4,y:487},0).wait(3).to({regX:154.6,scaleX:1.39,scaleY:1.39,x:548.5,y:557},0).wait(24));

	// Слой 19
	this.instance_19 = new lib.Анимация3("synched",0);
	this.instance_19.setTransform(378.9,249.4);

	this.instance_20 = new lib.Анимация4("synched",0);
	this.instance_20.setTransform(351,335.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_19}]},39).to({state:[{t:this.instance_20}]},5).to({state:[]},2).to({state:[]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(39).to({startPosition:0},0).to({_off:true,x:351,y:335.8},5).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-310,-60.2,1405,730.2);


(lib.Символ2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ48();
	this.instance.setTransform(359.6,49.8,0.73,0.73,153.8,0,0,18.7,27.8);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-29.5,359,1,1,0,0,0,154.5,365);

	this.instance_2 = new lib.Символ3копия();
	this.instance_2.setTransform(-29.5,359,1,1,0,0,0,154.5,365);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-494,-66.2,1405,730.2);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(359.5,192,1.677,1.677,0,0,0,359.5,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({x:369.5},0).wait(1).to({x:349.5},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:349.5,y:202},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:349.5},0).wait(1).to({x:369.5,y:202},0).wait(1).to({x:359.5,y:182},0).wait(1).to({y:202},0).wait(1).to({x:369.5,y:192},0).wait(1).to({x:359.5},0).wait(1).to({x:349.5,y:182},0).wait(1).to({x:369.5,y:172},0).wait(1).to({x:359.5,y:202},0).wait(1).to({y:192},0).wait(1).to({x:369.5},0).wait(1).to({x:359.5,y:212},0).wait(1).to({x:349.5,y:182},0).wait(1).to({x:359.5,y:192},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:349.5},0).wait(1).to({y:212},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:359.5,y:192},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.3,-129.9,1205.7,643.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(359.5,192,1,1,0,0,0,359.5,192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({scaleX:1.68,scaleY:1.68},12).wait(1).to({x:369.5},0).wait(1).to({x:349.5},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:349.5,y:202},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:349.5},0).wait(1).to({x:369.5,y:202},0).wait(1).to({x:359.5,y:182},0).wait(1).to({y:202},0).wait(1).to({x:369.5,y:192},0).wait(1).to({x:359.5},0).wait(1).to({x:349.5,y:182},0).wait(1).to({x:369.5,y:172},0).wait(1).to({x:359.5,y:202},0).wait(1).to({y:192},0).wait(1).to({x:369.5},0).wait(1).to({x:359.5,y:212},0).wait(1).to({x:349.5,y:182},0).wait(1).to({x:359.5,y:192},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:349.5},0).wait(1).to({y:212},0).wait(1).to({x:369.5,y:182},0).wait(1).to({x:359.5,y:192},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,719,384);


(lib.Символ50 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ49();
	this.instance.setTransform(96.9,61,1,1,0,0,0,96.9,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-143.1},4).to({x:96.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5,6.2,186.9,107.6);


(lib.Символ35 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ1();
	this.instance.setTransform(359.5,192,1,1,0,0,0,359.5,192);

	this.instance_1 = new lib.Символ1копия();
	this.instance_1.setTransform(359.5,192,1,1,0,0,0,359.5,192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,719,384);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(133.6,210.2,1,1,0,0,0,133.6,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,420.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(94,161.7,1,1,0,0,0,94,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:139.5},4,cjs.Ease.get(-1)).to({y:111.7},5,cjs.Ease.get(1)).to({y:136.7},5,cjs.Ease.get(-1)).to({y:161.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,323.3);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(169.6,273.2,1,1,0,0,0,169.6,273.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:273.3,rotation:7,x:169.7,y:273.3},14).to({regY:273.2,rotation:0,x:169.6,y:273.2},15).to({rotation:-5},15).to({rotation:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,420.5);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(170.6,273.2,1,1,0,0,0,170.6,273.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:246.6},4,cjs.Ease.get(-1)).to({y:213.2},5,cjs.Ease.get(1)).to({y:243.2},5,cjs.Ease.get(-1)).to({y:273.2},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,420.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// weapon_06.png
	this.instance = new lib.Символ28();
	this.instance.setTransform(-83,409.1,1,1,10.7,0,0,94,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// weapon_03.png
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(386.5,423.5,1,1,0,0,0,133.6,210.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.4,213.3,725.5,420.5);


(lib.Символ25 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ26();
	this.instance.setTransform(132,367.5,1,1,0,0,0,132,337.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:122,y:197.5},4).to({x:132,y:367.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.4,243.3,725.5,420.5);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.zmei.gotoAndPlay(2);
			    _this.ammo.gotoAndPlay(1);
				_this.back.gotoAndPlay(2);
				_this.txt.gotoAndPlay(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.zmei.gotoAndPlay(1);
			    _this.ammo.gotoAndPlay(5);
				_this.back.gotoAndPlay(1);
				_this.txt.gotoAndPlay(5);
		    }
			
			
			
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		this.ammo.x = stage.mouseX / 5;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.instance = new lib.Символ66();
	this.instance.setTransform(563.5,57,1,1,0,0,0,110.5,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.txt = new lib.Символ50();
	this.txt.setTransform(127.9,84.3,1,1,0,0,0,96.9,61);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 4
	this.ammo = new lib.Символ25();
	this.ammo.setTransform(67.7,458.5,1,1,0,0,0,-120.8,458.5);

	this.timeline.addTween(cjs.Tween.get(this.ammo).wait(1));

	// Слой 6
	this.kur = new lib.Символ37();
	this.kur.setTransform(-129.2,203.5,1,1,0,0,0,21.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.kur).wait(1));

	// Слой 2
	this.zmei = new lib.Символ2();
	this.zmei.setTransform(280.5,365,1,1,0,0,0,154.5,365);

	this.timeline.addTween(cjs.Tween.get(this.zmei).wait(1));

	// Слой 1
	this.back = new lib.Символ35();
	this.back.setTransform(329.5,159,1,1,0,0,0,359.5,192);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,86.3,1405,730.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/ba.png?1462528447472", id:"ba"},
		{src:"images/blink.png?1462528447472", id:"blink"},
		{src:"images/game.png?1462528447472", id:"game"},
		{src:"images/mans_03.png?1462528447472", id:"mans_03"},
		{src:"images/mans_06.png?1462528447472", id:"mans_06"},
		{src:"images/mans_08.png?1462528447472", id:"mans_08"},
		{src:"images/mans_14.png?1462528447472", id:"mans_14"},
		{src:"images/mans_17.png?1462528447472", id:"mans_17"},
		{src:"images/mans_20.png?1462528447472", id:"mans_20"}
	]
};



// symbols:



(lib.ba = function() {
	this.initialize(img.ba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,334,250);


(lib.game = function() {
	this.initialize(img.game);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.mans_03 = function() {
	this.initialize(img.mans_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,260);


(lib.mans_06 = function() {
	this.initialize(img.mans_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,244);


(lib.mans_08 = function() {
	this.initialize(img.mans_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,187);


(lib.mans_14 = function() {
	this.initialize(img.mans_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,213);


(lib.mans_17 = function() {
	this.initialize(img.mans_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,245);


(lib.mans_20 = function() {
	this.initialize(img.mans_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,228);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9C817","#FAC53B"],[0,1],-172,0,150,0).s().p("A63SSIenusIXI13MgDcAkjg");
	this.shape.setTransform(172,117);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344.1,234.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12.8,0,-12.8).s().p("AgcBzIAAi3IhGAAIAAguIDFAAIAAAuIhGAAIAAC3g");
	this.shape.setTransform(60.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,14.4,0,-14.3).s().p("AALB2QgQAAgMgDQgMgEgJgIQgHgIgEgNQgEgMAAgRIAAggIgeAAIAABeIg7AAIAAjlIA7AAIAABbIAeAAIAAgcQAAgjAPgPQAJgIAMgEQAMgEAQAAIBCAAQARAAANAEQANAEAHAIQAIAHAEANQAEANAAARIAABoQAAARgEAMQgEANgIAIQgQAPgiAAgAAEgzIAABoQAAATAUAAIAoAAQATAAABgTIAAhoQgBgUgTAAIgoAAQgUAAAAAUg");
	this.shape_1.setTransform(34.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,15.1,0,-15).s().p("AA3BzIgOgpIhRAAIgPApIhAAAIBXjlIBAAAIBYDlgAgZAfIAzAAIgahMg");
	this.shape_2.setTransform(6.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,15.1,0,-15).s().p("AhlBzIAAjlICJAAQARAAANAEQAMAEAIAHQAIAIAEANQAEAMAAASIAAAhQAAAQgEAMQgEAMgIAIQgQAQgiAAIhNAAIAABCgAgpADIA/AAQAUAAAAgSIAAghQAAgUgUAAIg/AAg");
	this.shape_3.setTransform(-16.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,14.3,0,-14.3).s().p("AhYBzIAAjlICxAAIAAAuIh2AAIAAC3g");
	this.shape_4.setTransform(-37.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,14.3,0,-14.3).s().p("AApBzIAAiMIhOCMIg+AAIAAjlIA7AAIAACMIBOiMIA+AAIAADlg");
	this.shape_5.setTransform(-60.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-11.8,141.3,23.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,14.3,0,-14.3).s().p("AApBzIAAiMIhNCMIg/AAIAAjlIA8AAIAACMIBMiMIA/AAIAADlg");
	this.shape.setTransform(24.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,13.6,0,-13.5).s().p("AApBzIAAheIhRAAIAABeIg7AAIAAjlIA7AAIAABbIBRAAIAAhbIA7AAIAADlg");
	this.shape_1.setTransform(0.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,15,0,-15).s().p("AgnB2QgSAAgMgDQgNgEgIgIQgIgIgEgNQgEgMAAgRIAAhoQAAgjAQgPQAIgIANgEQAMgEASAAIBQAAQARAAANAEQAMAEAIAIQAIAHAEANQAEANAAARIAABoQAAARgEAMQgEANgIAIQgPAPgjAAgAgugzIAABoQAAATAUAAIA2AAQATAAAAgTIAAhoQAAgUgTAAIg2AAQgUAAAAAUg");
	this.shape_2.setTransform(-23.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.4,-11.8,68.9,23.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AhaBzIAAjlIC1AAIAAAuIh6AAIAAAtIBfAAIAAAsIhfAAIAAAwIB6AAIAAAug");
	this.shape.setTransform(122.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12.4,0,-12.4).s().p("AgcBzIAAi3IhGAAIAAguIDFAAIAAAuIhGAAIAAC3g");
	this.shape_1.setTransform(100.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AhaBzIAAjlIC1AAIAAAuIh6AAIAAAtIBfAAIAAAsIhfAAIAAAwIB6AAIAAAug");
	this.shape_2.setTransform(80.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AA3BzIgOgpIhRAAIgPApIhAAAIBXjlIBAAAIBYDlgAgZAfIAzAAIgahMg");
	this.shape_3.setTransform(58.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12.4,0,-12.4).s().p("AhlBzIAAjlICCAAQAQAAAMAEQAMAEAIAHQAHAHAEALQAEAMAAAPQAAATgJAMQgIANgNAFQAHACAIADQAHAEAFAGQAGAIADAKQAEALAAAOQAAAPgEAMQgEAMgIAIQgPAPggAAgAgpBFIA/AAQAUAAAAgUIAAgGQAAgVgUABIg/AAgAgpgWIA2AAQATABAAgVIAAgGQAAgUgTAAIg2AAg");
	this.shape_4.setTransform(35.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12.4,0,-12.4).s().p("AgcBzIAAjlIA5AAIAADlg");
	this.shape_5.setTransform(18,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12.8,0,-12.7).s().p("AhjBzIAAjlIA8AAIAABPIBJAAQASAAAMAEQANAEAIAIQAHAIAEALQAEAMAAARIAAAUQAAARgEANQgEANgHAHQgQAQgjAAgAgnBFIA8AAQAUAAAAgUIAAgUQAAgTgUgBIg8AAg");
	this.shape_6.setTransform(2.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AhlBzIAAjlICJAAQARAAANAEQAMAEAIAIQAIAHAEANQAEANAAARIAAAhQAAAPgEANQgEAMgIAJQgQAPgiAAIhNAAIAABCgAgpADIA/AAQAUAAAAgSIAAghQAAgUgUAAIg/AAg");
	this.shape_7.setTransform(-20.9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,13.2,0,-13.1).s().p("AhYBzIAAjlICxAAIAAAuIh2AAIAAC3g");
	this.shape_8.setTransform(-42.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AgcBzIAAjlIA5AAIAADlg");
	this.shape_9.setTransform(-82.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0.1,11.7,0.1,-11.6).s().p("AhlBzIAAjlICCAAQAQAAAMAEQAMAEAIAHQAHAHAEALQAEAMAAAPQAAATgJAMQgIANgNAFQAHACAIADQAHAEAFAGQAGAIADAKQAEALAAAOQAAAPgEAMQgEAMgIAIQgPAPggAAgAgpBFIA/AAQAUAAAAgUIAAgGQAAgVgUABIg/AAgAgpgWIA2AAQATABAAgVIAAgGQAAgUgTAAIg2AAg");
	this.shape_10.setTransform(-121.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AhjBzIAAjlIA8AAIAABPIBJAAQASAAAMAEQANAEAIAIQAHAIAEALQAEAMAAARIAAAUQAAARgEANQgEANgHAHQgQAQgjAAgAgnBFIA8AAQAUAAAAgUIAAgUQAAgTgUgBIg8AAg");
	this.shape_11.setTransform(-98,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AApBzIAAiMIhNCMIg/AAIAAjlIA7AAIAACMIBNiMIA/AAIAADlg");
	this.shape_12.setTransform(-65.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,-11.5,262.9,23.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0.1,13.7,0.1,-7.1).s().p("AgWBQIgGhFIAAhaIA5AAIAABaIgGBFg");
	this.shape.setTransform(27.9,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,5.4,0,-0.5).s().p("AgcAYIAAgvIA5AAIAAAvg");
	this.shape_1.setTransform(27.9,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,14.7,0,-14.6).s().p("AgcBzIAAjlIA5AAIAADlg");
	this.shape_2.setTransform(18.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12.4,0,-12.4).s().p("AhjBzIAAjlIA8AAIAABPIBJAAQARAAANAEQAMAEAJAIQAHAIAEALQAEAMAAARIAAAUQAAARgEANQgEANgHAHQgQAQgjAAgAgnBFIA8AAQAUAAAAgUIAAgUQAAgTgUgBIg8AAg");
	this.shape_3.setTransform(2.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFFFFF","#999999","#CCCCCC","#FFFFFF"],[0,0.494,0.518,1],0,12,0,-12).s().p("AhlBzIAAjlICCAAQAQAAAMAEQAMAEAIAHQAHAHAEALQAEAMAAAPQAAATgJAMQgIANgNAFQAHACAIADQAHAEAFAGQAGAIADAKQAEALAAAOQAAAPgEAMQgEAMgIAIQgPAPggAAgAgpBFIA/AAQAUAAAAgUIAAgGQAAgVgUABIg/AAgAgpgWIA2AAQATABAAgVIAAgGQAAgUgTAAIg2AAg");
	this.shape_4.setTransform(-20.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.8,-11.5,61.7,23.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mans_03();
	this.instance.setTransform(-113.8,-124,0.932,0.932,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-124,240,248.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mans_06();
	this.instance.setTransform(-102.4,-116.3,0.932,0.932,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-116.3,216.3,232.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mans_08();
	this.instance.setTransform(-86.7,-89.3,0.932,0.932,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.1,-89.3,182.4,178.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mans_14();
	this.instance.setTransform(-102.3,-101.9,0.932,0.932,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.3,-101.9,214.6,203.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mans_17();
	this.instance.setTransform(-88.8,-116.4,0.932,0.932,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-116.4,189.3,232.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mans_20();
	this.instance.setTransform(-108.1,-109,0.932,0.932,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-109,227.1,218);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ba();
	this.instance.setTransform(-15.8,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,-15.9,32,32);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.51,0.976],-217.5,0,217.6,0).s().p("Egh+AB9IAAj5MBD9AAAIAAD5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.5,-12.5,435.1,25);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(249,226,62,0)","#F9EC4C","rgba(250,234,97,0)"],[0,0.51,0.976],-70.7,0,70.6,0).s().p("As4X/MAAAgv9IZxAAMAAAAv9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-153.5,165.1,307.1);


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


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334,250);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(172,117,1,1,0,0,0,172,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344.1,234.1);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(49.9,8.4,0.706,0.706);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(132.2,8.4,0.706,0.706);

	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(259.5,8.6,0.706,0.706);

	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(382.8,8.6,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.6,16.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-151.5,-9.5,0.461,0.461,0,0,0,167,125);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({regX:166.8,scaleX:0.56,scaleY:0.56,rotation:13,x:-124.2,y:-9.8,alpha:1},3).to({regX:167,scaleX:1,scaleY:1,rotation:69.5,x:-5.5,y:-10.6},13).to({scaleX:0.62,scaleY:0.62,rotation:134.1,x:102.8,y:-10.5},14).to({regX:167.1,scaleX:0.48,scaleY:0.48,rotation:157.3,x:141.5,alpha:0},5).wait(63).to({regX:167,scaleX:0.46,scaleY:0.46,rotation:0,x:-231.5,y:-9.5},0).to({regX:166.8,scaleX:0.56,scaleY:0.56,rotation:13,x:-174.2,y:-9.8,alpha:1},3).to({regX:167,scaleX:1,scaleY:1,rotation:69.5,x:-5.5,y:-10.6},13).to({scaleX:0.62,scaleY:0.62,rotation:134.1,x:152.8,y:-10.5},14).to({regX:167.1,scaleX:0.48,scaleY:0.48,rotation:157.3,x:221.5,alpha:0},5).to({_off:true},67).wait(1));

	// Символ 26
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHeCeQgXAAgRgGQgQgEgLgMQgLgJgEgSQgGgQAAgXIAAgqIgnAAIAAB9IhPAAIAAkxIBPAAIAAB5IAnAAIAAglQAAguAVgWQALgKAQgGQARgEAXAAIBYAAQAYAAAQAEQARAGAKAKQAKAKAGASQAFAQAAAYIAACKQAAAXgFAQQgGASgKAJQgVAWguAAgAHVhEIAACKQAAAaAbAAIA0AAQAaAAAAgaIAAiKQAAgbgaAAIg0AAQgbAAAAAbgAMACZIAAj0IhdAAIAAg9IEIAAIAAA9IhcAAIAAD0gAClCZIgUg2IhuAAIgUA2IhTAAIBykxIBXAAIB1ExgAB9AqIgjhmIgjBmIBGAAgAlcCZIAAkxIC3AAQAYAAARAGQAQAFAKAJQALAMAFAQQAFARABAXIAAAsQgBAVgFAQQgFARgLALQgUAUgvABIhpAAIAABXgAkOAFIBYAAQAbAAgBgZIAAgsQABgbgbAAIhYAAgApqCZIAAkxIDvAAIAAA9IifAAIAAD0gArtCZIAAi7IhqC7IhTAAIAAkxIBPAAIAAC7IBqi7IBTAAIAAExg");
	this.shape.setTransform(-172.3,316.1);

	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(-172.2,-0.9,1.33,1.33);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},91).to({state:[{t:this.instance_1}]},10).to({state:[]},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:-57,alpha:1},9,cjs.Ease.get(1)).wait(91).to({x:4.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// Символ 25
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(198.1,-0.9,1.33,1.33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:98.1,alpha:1},9,cjs.Ease.get(1)).wait(91).to({x:18.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// Символ 24
	this.instance_3 = new lib.Символ24();
	this.instance_3.setTransform(-157.3,-0.4,1.33,1.33);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).to({x:-58,alpha:1},10,cjs.Ease.get(1)).wait(80).to({x:54,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},20).wait(1));

	// Символ 23
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(244.9,-0.4,1.33,1.33);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({x:174.5,alpha:1},10,cjs.Ease.get(1)).wait(80).to({x:64.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266.2,300.3,187.9,31.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(-155.2,-123.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421.5,177.1,187.9,31.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(0,0,1,1,0,0,0,172,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,x:3.1,y:4.3},19,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06,x:6.4,y:8.8},20,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03,x:3.3,y:4.4},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0,y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172,-117,344.1,234.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ12();
	this.instance.setTransform(-342,-49.1,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({x:251},14,cjs.Ease.get(0.99)).to({x:291},161).to({x:-23.2,y:134.6},8,cjs.Ease.get(-1)).wait(43));

	// mans_20.png
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-423,-17);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:-160},14,cjs.Ease.get(0.99)).to({rotation:-3.5,x:-140},159).to({x:-4.1,y:246.9},8,cjs.Ease.get(-1)).wait(35));

	// mans_17.png
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(-419.7,-30);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({x:-204.2},14,cjs.Ease.get(0.99)).to({rotation:2,x:-194.2},167).to({x:32.7,y:232.4},8,cjs.Ease.get(-1)).wait(31));

	// mans_14.png
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(-416.8,-56.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({x:-217.8},14,cjs.Ease.get(0.99)).wait(163).to({x:-64.9,y:244.6},8,cjs.Ease.get(-1)).wait(29));

	// mans_08.png
	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(-416.3,-6.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({x:28.7},14,cjs.Ease.get(0.99)).to({rotation:-3.2,x:59.7},160).to({x:26.1,y:237},8,cjs.Ease.get(-1)).wait(41));

	// mans_06.png
	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(-428.4,-0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(31).to({_off:false},0).to({x:-61.6},14,cjs.Ease.get(0.99)).to({x:-34.6,y:-10.5},159).to({x:0.2,y:246.2},8,cjs.Ease.get(-1)).wait(38));

	// mans_03.png
	this.instance_6 = new lib.Символ18();
	this.instance_6.setTransform(-425,-8.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({x:175.2,y:34.6},14,cjs.Ease.get(0.99)).to({rotation:-3.7,x:205.2},161).to({x:120,y:274.3},8,cjs.Ease.get(-1)).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357.9,-65,32,32);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.alpha = 0.09;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.5,-12.5,435.1,25);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-31,28);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(81).to({_off:false},0).to({x:1338.3,y:35},64).wait(1));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(-147,42);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).to({x:1222.3,y:49},64).to({_off:true},1).wait(38));

	// Символ 10
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:1369.3,y:17},64).to({_off:true},1).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.5,-2.5,435.1,25);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(0,0,1,1.57,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.4,-254.6,326.8,509.3);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(0,0,1,1.57,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.4,-254.6,326.8,509.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(202.2,8.3,1,1,0,0,0,202.2,8.3);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.6,16.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5JSSMAAAgkjMAlpAPfIMqVEg");

	// Слой 2
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(-313.5,-56.4);

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.setTransform(288.6,101.6);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_1}]},38).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:288.6,y:101.6},29).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-117,10.9,234.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(161.1,117);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9B51F","#FAE033"],[0,1],-161,0,161,0).s().p("A5JSSMAAAgkjMAlpAPfIMqVEg");
	this.shape.setTransform(161,117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.9,-194,638,509.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(102.2,8.3,1,1,0,0,0,202.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1200.1},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,0,404.6,16.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(-187.8,8.3,1,1,0,0,0,202.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1016.2},223).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,0,404.6,16.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(202.2,8.3,1,1,0,0,0,202.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1583.1,y:13.3},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.6,16.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 28
	this.instance = new lib.Символ32();
	this.instance.setTransform(-80.7,-158.6,1,1,0,0,0,202.2,8.3);
	this.instance.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 28
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(168.3,-179.6,1,1,0,0,0,202.2,8.3);
	this.instance_1.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 28
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(-329.7,-205.6,1,1,0,0,0,202.2,8.3);
	this.instance_2.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-531.9,-213.9,553.6,63.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(-173.6,167.4,1,1,0,0,0,202.2,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(-626.6,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333333","#000000"],[0,1],-490.7,0,471.1,0).s().p("EhMpAJcIAAy3MCZTABIIjDRvg");
	this.shape.setTransform(-81.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-907.7,-60.5,1316.9,121);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(-157.9,-56.4,1,1,0,0,0,3.1,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02,rotation:1,y:-61.4},14,cjs.Ease.get(-1)).to({regX:3,regY:60.5,scaleX:1.03,scaleY:1.03,rotation:2.2,x:-158,y:-66.9},15,cjs.Ease.get(1)).to({regX:3.1,scaleX:1.02,scaleY:1.02,rotation:1,x:-157.9,y:-61.5},15,cjs.Ease.get(-1)).to({regY:60.6,scaleX:1,scaleY:1,rotation:0,y:-56.4},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.9,-311,638,509.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.setTransform(-304.3,-25.7,0.667,0.667);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:-274.3,alpha:1},8,cjs.Ease.get(1)).wait(202).to({x:-224.3,alpha:0},10).wait(16));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-182.5,-2.2,0.667,0.667);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:-212.5,alpha:1},8,cjs.Ease.get(1)).wait(202).to({x:-232.5,alpha:0},10).wait(16));

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(434.6,168);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:7},14,cjs.Ease.get(1)).wait(219).to({x:480.6,y:121},10,cjs.Ease.get(-1)).wait(1));

	// Символ 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(-198.5,154);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-7},14,cjs.Ease.get(1)).wait(222).to({x:-307.6,y:125.6},10,cjs.Ease.get(-1)).wait(4));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(217.6,169.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({y:8.6},14,cjs.Ease.get(1)).wait(211).to({y:103.6},10,cjs.Ease.get(-1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-675.5,-157,638,509.3);


// stage content:



(lib.pm_tv2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(694.5,687.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Режим изоляции
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(319.2,511.7,1,1,0,0,0,-24.4,-63.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(288.1,493.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.instance_3 = new lib.game();
	this.instance_3.setTransform(-192.1,-9.6,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118.1,290.4,1244.9,936.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
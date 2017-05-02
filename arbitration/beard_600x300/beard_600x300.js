(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/art.png", id:"art"},
		{src:"images/baby.png", id:"baby"},
		{src:"images/beard.png", id:"beard"},
		{src:"images/beardman.png", id:"beardman"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/tovar.png", id:"tovar"}
	]
};



// symbols:



(lib.art = function() {
	this.initialize(img.art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,276);


(lib.baby = function() {
	this.initialize(img.baby);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,279);


(lib.beard = function() {
	this.initialize(img.beard);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,115);


(lib.beardman = function() {
	this.initialize(img.beardman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,293);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,669,306);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,64);


(lib.tovar = function() {
	this.initialize(img.tovar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,323);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0tGCIAAsDMApbAAAIAAMDg");
	this.shape.setTransform(132.7,38.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZCrIAAg0IAzAAIAAA0gAgSBfIgIh6IAAiPIA1AAIAACPIgHB6g");
	this.shape.setTransform(2.7,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,34.3);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiCpQgPgFgKgMQgKgLgGgQQgFgQgBgUIAAixQABgUAFgRQAGgPAKgMQAKgLAPgFQAQgGASAAQAUAAAOAGQAQAFAKALQALAMAFAPQAGARgBAUIAACxQABAUgGAQQgFAQgLALQgKAMgQAFQgOAGgUAAQgSAAgQgGgAgTh1QgHAIAAASIAAC3QAAASAHAIQAHAIAMAAQANAAAHgIQAHgIAAgSIAAi3QAAgSgHgIQgHgIgNAAQgMAAgHAIg");
	this.shape.setTransform(8.2,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,35.1);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeCrIAAiTIg7AAIAACTIg3AAIAAlVIA3AAIAACTIA7AAIAAiTIA3AAIAAFVg");
	this.shape.setTransform(8.5,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,34.3);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPCrIAAlVIA3AAIAACBIAYAAQATAAAPAFQAPAGALAKQAJAMAFANQAGAQAAAUIAAAtQAAAVgGAPQgFAQgJALQgLALgPAGQgPAFgTAAgAgYB6IAYAAQANAAAFgHQAIgIAAgRIAAg0QAAgSgIgHQgFgHgNAAIgYAAg");
	this.shape.setTransform(8,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,34.3);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgCrIAAgxQAUAAAGgGQAHgGABgXIAIkBICXAAIAAFVIg3AAIAAkkIgtAAIgGDNQgBAYgFAQQgEARgKAKQgJAKgPAFQgOAFgVAAg");
	this.shape.setTransform(9.7,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,34.4);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnCrIgJg+IhAAAIgJA+IgyAAIA3lVIBNAAIA3FVgAAXA+IgYisIgaCsIAyAAg");
	this.shape.setTransform(9.4,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,34.3);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhICrIAAlVICRAAIAAAxIhbAAIAABgIBIAAIAAAvIhIAAIAABkIBbAAIAAAxg");
	this.shape.setTransform(7.4,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,34.3);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPCrIAAlVIBPAAQATAAAPAFQAPAGALALQAJALAFAQQAGAPAAAVIAAAtQAAAUgGAQQgFANgJAMQgLAKgPAGQgPAFgTAAIgYAAIAACBgAgYgFIAYAAQANAAAFgHQAIgHAAgTIAAgyQAAgTgIgHQgFgHgNAAIgYAAg");
	this.shape.setTransform(8,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,34.3);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiCpQgPgFgKgMQgKgLgGgQQgFgQgBgUIAAixQABgUAFgRQAGgPAKgMQAKgLAPgFQAQgGASAAQAUAAAOAGQAQAFAKALQALAMAFAPQAGARgBAUIAACxQABAUgGAQQgFAQgLALQgKAMgQAFQgOAGgUAAQgSAAgQgGgAgTh1QgHAIAAASIAAC3QAAASAHAIQAHAIAMAAQANAAAHgIQAHgIAAgSIAAi3QAAgSgHgIQgHgIgNAAQgMAAgHAIg");
	this.shape.setTransform(8.2,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,35.1);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZCrIAAkkIg5AAIAAgxIClAAIAAAxIg5AAIAAEkg");
	this.shape.setTransform(8.3,17.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.7,34.3);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghCpQgPgFgKgMQgLgLgFgQQgFgQAAgUIAAgpIAzAAIAAAsQAAASAIAIQAGAHAOAAQAMAAAHgHQAHgIAAgSIAAhKIgvAAIAAgvIAvAAIAAg+QAAgSgHgIQgIgIgLAAQgOAAgGAIQgIAIAAASIAAAgIgyAAIAAgdQAAgVAFgQQAFgPAKgMQAKgLAPgFQAPgGASAAQATAAAPAGQAPAFAKALQALAMAFAPQAFAQAAAVIAACxQAAAUgFAQQgFAQgLALQgKAMgPAFQgPAGgTAAQgSAAgPgGg");
	this.shape.setTransform(8.1,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,35.1);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkbReMAAAgi7II3AAMAAAAi7g");
	this.shape.setTransform(28.5,111.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,223.7);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tovar();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,323);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.art();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,400,276);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhIBJQgegegBgrQABgqAegeQAegeAqgBQArABAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape.setTransform(10.4,10.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,20.8);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,226,64);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3B836").s().p("AFQDEIAAguIhzAAIAAAuIg0AAIAAheIAVAAQAGgIAEgLQACgKABgPIAMj5ICXAAIAAElIAXAAIAABegAEAA5QgBASgEALQgDAKgHAGIBGAAIAAj0IgtAAgAAdCUQgQgFgKgMQgIgLgGgQQgFgQAAgUIAAixQAAgUAFgRQAGgPAIgMQAKgLAQgFQAPgGAUAAQAUAAAPAGQAPAFAKALQALAMAFAPQAGARAAAUIAACxQAAAUgGAQQgFAQgLALQgKAMgPAFQgPAGgUAAQgUAAgPgGgAAriKQgHAIAAASIAAC3QAAASAHAIQAHAIAOAAQANAAAHgIQAIgIAAgSIAAi3QAAgSgIgIQgHgIgNAAQgOAAgHAIgAlcCUQgPgFgKgMQgLgLgFgQQgGgQAAgUIAAixQAAgUAGgRQAFgPALgMQAKgLAPgFQAQgGATAAQAUAAAPAGQAQAFAKALQAKAMAGAPQAFARAAAUIAACxQAAAUgFAQQgGAQgKALQgKAMgQAFQgPAGgUAAQgTAAgQgGgAlNiKQgIAIAAASIAAC3QAAASAIAIQAHAIANAAQAOAAAHgIQAHgIAAgSIAAi3QAAgSgHgIQgHgIgOAAQgNAAgHAIgAIbCWIgJg+IhCAAIgJA+IgyAAIA3lVIBPAAIA3FVgAILApIgairIgaCrIA0AAgAjECWIAAlVIBPAAQAUAAAPAGQAQAFAKALQAKALAFAPQAFAQAAAVIAAAsQAAAVgFAPQgFARgKAJQgKAKgQAFQgPAGgUAAIgZAAIAACBgAiOgaIAZAAQAOAAAGgHQAHgIAAgRIAAgzQAAgTgHgHQgGgHgOAAIgZAAgApRCWIAAlVICXAAIAAAxIhhAAIAABYIAgAAQAUAAAPAGQAPAFALALQAKAKAFAQQAFAOAAAVIAAAlQAAAUgFAQQgFAPgKALQgLALgPAFQgPAGgUAAgAobBlIAgAAQANAAAHgHQAHgHAAgTIAAgrQAAgSgHgHQgHgFgNAAIggAAg");
	this.shape.setTransform(59.4,19.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118.9,39.3);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3B836").s().p("AiNCpQgPgFgKgMQgKgLgFgQQgGgQAAgUIAAixQAAgVAGgQQAFgPAKgMQAKgLAPgFQAPgGAUAAQAUAAAPAGQAPAFAKALQAKAMAFAPQAFAQAAAVIAAAiIgzAAIAAglQAAgSgHgIQgHgIgOAAQgNAAgHAIQgIAIAAASIAAC3QAAASAIAIQAHAHANAAQAOAAAHgHQAHgIAAgSIAAgxIAzAAIAAAuQAAAUgFAQQgFAQgKALQgKAMgPAFQgPAGgUAAQgUAAgPgGgALLCrIAAiLIgSAAQgTAAgIAKQgJAJAAAYIAAA2QAAAbgFAPIg2AAQAGgOAAgcIAAg0QAAgdAHgRQAFgKAGgGQAHgHAKgFQgSgGgIgRQgJgSAAgaIAAgbQAAgUAFgPQAEgOAKgLQAKgKAPgEQAPgFAVAAIBRAAIAAFVgAKchxQgGAJAAASIAAAiQAAAUAIAIQAIAJAQgBIAVAAIAAhpIgaAAQgOAAgHAIgAIUCrIgJg+IhCAAIgJA+IgyAAIA3lVIBPAAIA3FVgAIEA+IgairIgaCrIA0AAgADWCrIAAlVIBRAAQAVAAAPAFQAPAEAKAKQAKALAEAOQAFAPAAAUIAAAMQAAAbgIARQgJARgSAIQALAFAIAFQAHAGAFAKQAJARAAAdIAAAbQAAAUgFAQQgFAPgKAKQgKALgQAEQgPAGgUAAgAEMB6IAfAAQAOAAAGgHQAIgIAAgTIAAgdQAAgYgJgJQgHgKgTABIgYAAgAEMgfIAVAAQAQAAAHgHQAJgJAAgUIAAgTQAAgSgGgJQgHgIgOAAIgaAAgAB/CrIAAjwIhDDwIg3AAIAAlVIAwAAIAADXIBAjXIA7AAIAAFVgAkFCrIgJg+IhDAAIgJA+IgxAAIA3lVIBOAAIA3FVgAkWA+IgairIgaCrIA0AAgAo2CrIAAlVIBQAAQAUAAAPAGQAPAFAKALQAKALAFAPQAFAQAAAVIAAAsQAAAVgFAPQgFAPgKAKQgKALgPAFQgPAGgUAAIgaAAIAACBgAoAgFIAaAAQANAAAGgHQAHgIAAgRIAAgzQAAgTgHgHQgGgHgNAAIgaAAgAqFCrIg1iIIgQAeIAABqIg2AAIAAlVIA2AAIAACWIBGiWIA2AAIhLCZIBLC8g");
	this.shape.setTransform(77,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,154,35.1);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.beardman();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,341,293);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-44,4,1.132,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44,4,757,306);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrEbIAAnkIhdAAIAAhRIERAAIAABRIhdAAIAAHkg");
	this.shape.setTransform(13.8,28.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,56.7);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4EbIAAo1IDxAAIAABRIiYAAIAACeIB4AAIAABPIh4AAIAACmICYAAIAABRg");
	this.shape.setTransform(12.2,28.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,56.7);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIEbIAAo1ID3AAIAABRIieAAIAACRIAxAAQAiAAAZAJQAaAJARASQAQASAJAYQAIAaAAAiIAAA9QAAAigIAaQgJAagQASQgRARgaAKQgZAJgiAAgAgvDKIAxAAQAYAAALgLQAMgOgBgdIAAhIQABgdgMgMQgLgMgYAAIgxAAg");
	this.shape.setTransform(13.8,28.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,56.7);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4EYQgZgKgRgSQgRgSgIgbQgIgaAAgiIAAklQAAgiAIgaQAIgbARgSQARgSAZgKQAZgJAfAAQAgAAAZAJQAZAKARASQAQASAJAbQAIAaAAAiIAAA3IhUAAIAAg8QAAgegMgOQgMgMgWAAQgUAAgMAMQgMAOAAAeIAAEvQAAAeAMANQAMANAUAAQAWAAAMgNQAMgNAAgeIAAhQIBUAAIAABLQAAAigIAaQgJAbgQASQgRASgZAKQgZAJggAAQgfAAgZgJg");
	this.shape.setTransform(13.3,29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.6,58);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpEbIAAhWIBTAAIAABWgAgfCdIgMjKIAAjtIBXAAIAADtIgLDKg");
	this.shape.setTransform(4.5,28.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,56.7);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCEbIgQhnIhrAAIgQBnIhRAAIBao1ICAAAIBbI1gAAmBnIgpkdIgrEdIBUAAg");
	this.shape.setTransform(15.6,28.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.2,56.7);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABeFBIAAhMIi9AAIAABMIhWAAIAAibIAiAAQAMgPAFgSQAFgPABgaIAUmcID3AAIAAHmIAnAAIAACbgAglBaQgBAfgHASQgFAQgMALIBzAAIAAmVIhKAAg");
	this.shape.setTransform(18.3,32.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,64.3);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATEYQgXgKgRgSQgSgSgJgbQgIgagBgiIAAhrIhBAAIAADzIhaAAIAAo1IBaAAIAADzIBBAAIAAhrQABghAIgbQAJgbASgSQARgSAXgKQAagJAgAAQAhAAAZAJQAZAKARASQASASAIAbQAJAbAAAhIAAElQAAAigJAaQgIAbgSASQgRASgZAKQgZAJghAAQggAAgagJgAAsjDQgNAOAAAeIAAEvQAAAeANANQAKANAXAAQAWAAALgNQANgNAAgeIAAkvQAAgegNgOQgLgMgWAAQgXAAgKAMg");
	this.shape.setTransform(21.3,29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,58);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ag/h+IB/B+Ih+B/");
	this.shape.setTransform(6.4,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,15.8,28.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APpDEIAAgvIiLAAIAAAvIgmAAIAAhQIAXAAQAIgKADgMQADgLABgRIANkCICKAAIAAE0IAaAAIAABQgAODBBQgBATgDALQgEAMgHAJIBaAAIAAkRIg/AAgAKsCTQgPgGgKgMQgKgLgFgQQgFgQAAgUIAAivQAAgUAFgPQAFgRAKgLQAKgLAPgGQAOgGAUAAQATAAAPAGQAPAGAKALQAJALAGARQAEAPAAAUIAACvQAAAUgEAQQgGAQgJALQgKAMgPAGQgPAGgTAAQgUAAgOgGgAKviTQgKANAAAXIAACzQAAAYAKANQAKANAVAAQAUAAALgNQAJgNAAgYIAAizQAAgYgJgMQgLgOgUAAQgVAAgKAOgAE3CTQgPgGgJgMQgKgLgFgQQgFgQAAgUIAAivQAAgUAFgPQAFgRAKgLQAJgLAPgGQAPgGATAAQAUAAAPAGQAPAGAKALQAKALAEARQAGAPgBAUIAACvQABAUgGAQQgEAQgKALQgKAMgPAGQgPAGgUAAQgTAAgPgGgAE7iTQgKANAAAXIAACzQAAAYAKANQALANATAAQAVAAALgNQAJgNAAgYIAAizQAAgYgJgMQgLgOgVAAQgTAAgLAOgAQ7CWIAAgiQAXAAALgHQAKgIAGgTIAIgXIhPj7IAlAAIA7DMIAyjMIApAAIhKEKQgFAVgGANQgGAPgKAJQgKAKgPAEQgOAEgRAAIgJAAgAHMCVIAAlVIBLAAQAVAAAOAGQAPAGAKALQAJAKAEAQQAEAPABAUIAAApQgBAVgEAPQgGAQgJAKQgKAJgPAFQgPAFgVAAIghAAIAACHgAHzgSIAhAAQAWAAALgLQAJgLABgYIAAguQgBgYgIgLQgKgMgVAAIgkAAgABKCVIAAlVICRAAIAAAjIhrAAIAABrIApAAQATAAAQAFQAPAFAKAJQAKAKAFAQQAFANABAUIAAAmQAAAUgGAPQgEAQgKALQgKAKgOAGQgQAFgUAAgABwBzIAqAAQAWAAAJgMQAKgLAAgYIAAgqQAAgYgLgIQgKgKgVAAIgpAAgAhECVIgMhFIhXAAIgNBFIgjAAIBBlVIA3AAIBCFVgAhWAvIgmjEIgmDEIBMAAgAkbCVIAAiYIhUAAIAACYIgmAAIAAlVIAmAAIAACbIBUAAIAAibIAmAAIAAFVgAoqCVIAAkPIhXEPIgoAAIAAlVIAiAAIAAD+IBVj+IArAAIAAFVgAr0CVIAAkSIg2ESIglAAIg5kPIAAEPIgiAAIAAlVIA2AAIA5EQIA2kQIA1AAIAAFVgAvsCVIhBifIgSAeIAACBIgmAAIAAiBIgSgfIhCCgIgnAAIBPjDIhNiSIAmAAIBTCeIAAieIAmAAIAACeIBSieIAmAAIhLCRIBNDEg");
	this.shape.setTransform(124.9,19.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,249.8,39.4);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC2C00").s().p("EgiDAFUIAAqnMBEGAAAIi+Kng");
	this.shape.setTransform(218,34);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,436,68);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-14.1,0,1.078,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.1,0,721,306);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.beardman();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,341,293);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AFNE5IAAhKIi4AAIAABKIhTAAIAAiWIAhAAQALgOAFgRQAFgPABgZIATmOIDxAAIAAHVIAmAAIAACWgADNBaQgCAegGARQgFAQgLAKIBwAAIAAmHIhJAAgAicDtQgYgKgQgRQgRgSgIgaQgJgZAAghIAAkbQAAggAJgaQAIgaARgRQAQgSAYgJQAZgJAfAAQAgAAAZAJQAYAJAQASQAPARAJAaQAIAaABAgIAAEbQgBAhgIAZQgJAagPASQgQARgYAKQgZAJggAAQgfAAgZgJgAiDjeQgNAOAAAcIAAEmQAAAcANANQAKANAVAAQAXAAALgNQAMgNgBgcIAAkmQABgcgMgOQgLgMgXAAQgVAAgKAMgAr3DtQgYgKgRgRQgQgSgJgaQgJgZAAghIAAkbQAAggAJgaQAJgaAQgRQARgSAYgJQAYgJAgAAQAfAAAZAJQAZAJAQASQARARAIAaQAJAaAAAgIAAEbQAAAhgJAZQgIAagRASQgQARgZAKQgZAJgfAAQggAAgYgJgArfjeQgMAOgBAcIAAEmQABAcAMANQAKANAWAAQAVAAAMgNQAMgNgBgcIAAkmQABgcgMgOQgMgMgVAAQgWAAgKAMgAQqDvIAAhSIBTAAIAABSgANKDvIAAhSIBTAAIAABSgAKSDvIgPhjIhqAAIgPBjIhPAAIBXohIB+AAIBYIhgAJ3BCIgqkTIgqETIBUAAgAoFDvIAAohIB/AAQAgAAAYAJQAXAIARASQAQARAHAaQAJAYAAAhIAABHQAAAhgJAaQgHAZgQAQQgRAQgXAJQgYAJggAAIgqAAIAADNgAmwgqIAqAAQAVAAAJgMQAMgMAAgcIAAhSQAAgdgMgMQgJgLgVAAIgqAAgAx+DvIAAohIDxAAIAABOIibAAIAACNIAyAAQAgAAAYAIQAZAJAQARQAQARAIAaQAJAXgBAhIAAA6QABAhgJAZQgIAagQARQgQARgZAJQgYAIggAAgAwoChIAyAAQAVAAALgLQAMgMAAgcIAAhGQAAgcgMgMQgLgJgVAAIgyAAgAQ0B2IgLjEIAAjkIBWAAIAADkIgLDEgANOB2QgEgOgBgTQAAg8AvhCQAXghAKgYIAKgkIAEguQAAgcgLgOQgLgMgUAAQgWAAgLAMQgLAOABAcIAAA7IhSAAIAAg2QAAghAIgZQAIgaAQgRQAQgSAXgJQAZgJAfAAQAfAAAXAJQAYAJAQASQARARAHAaQAJAZgBAhQAAAagEAWIgMAoQgKAbgZAiQgyBAAAAyIACAeg");
	this.shape.setTransform(115.2,30.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.1,230.3,62.8);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E43935").s().p("ACkDrQgVgIgOgQQgOgOgIgXQgGgWAAgdIAAj1QAAgdAGgWQAIgXAOgPQAOgPAVgIQAVgIAbAAQAcAAAUAIQAVAIAOAPQAOAPAIAXQAGAWAAAdIAAAuIhGAAIAAgzQAAgZgLgMQgJgKgTAAQgTAAgJAKQgLAMABAZIAAD/QgBAYALAMQAJALATgBQATABAJgLQALgMAAgYIAAhEIBGAAIAAA/QAAAdgGAWQgIAXgOAOQgOAQgVAIQgUAIgcAAQgbAAgVgIgAOVDtIAAmVIhOAAIAAhFIDnAAIAABFIhOAAIAAGVgAJiDtIAAnaIDNAAIAABFIiBAAIAACEIBmAAIAABCIhmAAIAACLICBAAIAABEgAGpDtIAAmVIhOAAIAAhFIDnAAIAABFIhOAAIAAGVgAgBDtIgNhWIhcAAIgNBWIhFAAIBNnaIBtAAIBLHagAgYBWIgkjvIgkDvIBIAAgAmoDtIAAnaIBuAAQAdAAAVAJQAUAHAOAPQAOAOAHAXQAHAWAAAcIAAA+QAAAdgHAWQgHATgOAQQgOAOgUAIQgVAHgdAAIgjAAIAACzgAldgHIAjAAQATAAAIgKQAKgLAAgYIAAhHQAAgZgKgLQgIgJgTAAIgjAAgAsLDtIAAnaIDMAAIAABFIiBAAIAACEIBmAAIAABCIhmAAIAACLICBAAIAABEgAuNDtIAAjMIhVAAIAADMIhLAAIAAnaIBLAAIAADNIBVAAIAAjNIBNAAIAAHag");
	this.shape.setTransform(107.1,24.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.1,48.7);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.beard();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,115);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baby();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,310,279);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DDDEDD","#C2C3C2"],[0,1],0,0,0,0,0,335.4).s().p("Egu3AXbMAAAgu2MBdvAAAMAAAAu2g");
	this.shape.setTransform(300,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Symbol = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4EbIAAo1IDxAAIAABRIiYAAIAACeIB4AAIAABPIh4AAIAACmICYAAIAABRg");
	this.shape.setTransform(12.2,28.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,56.7);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(2,82.4,1.222,2.017,48.1,0,0,28.4,111.8);
	this.instance.alpha = 0.422;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(33, 33, 1)];
	this.instance.cache(-2,-2,61,228);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206.1,-111,420,390);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(28.4,111.8,1,1,0,0,0,28.4,111.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:393.4,y:476.8},34,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.1,-111,420,390);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjlZFIhbAAQAAABhAgLIg/gKIiJiOQABABAAt3QAAt2gBAAQgPABBWhTQAAABAegpIAfgpIAKgtIAKguIAAAAIAAAAIhCg4QABAAAOlfQABABAMguIANguQABACgBoOQAAABDOACQDNABABABIAZAkQgBIJABACIAnBRQgBE/ABACQAAAAgYAkQgaAiABABIgIAcIgHAcIClC8QABABAZgQQAZgRAAABIAFgWIAFgYIgogjQABAAAOkIQABABAJmtQABACAUgJQATgJABACQAAAACJgDQCJgDAAAAIAKAkQgGGKABACIAfAuQgBD3ABACQAAABgPAJQgQAKAAAAQABACgLAgQgLAfABACIBCBMQA3AmABADQgGVYABACQAAABg4AjIg4AkQAAABhCALIhCANQAAABg1gJIg2gIQABACh7hDQgGEVABACQAAABghAvIghAxQAAABhXAdIhZAeIgXABIhFgBgACNm0IAAAAIAAAAIAAAAgAnyp/IAAAAIAAAAg");
	mask.setTransform(61,161);

	// Слой 3
	this.instance = new lib.Символ39();
	this.instance.setTransform(-65.7,66.9,1,1,0,0,0,28.4,111.8);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(61.5,161.5,1,1,0,0,0,61.5,161.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,323);


(lib.Символ33 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ34();
	this.instance.setTransform(113,32,0.95,0.95,0,0,0,113,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.95,scaleY:0.95},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.7,1.6,214.7,60.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 52
	this.instance = new lib.Символ52();
	this.instance.setTransform(204.6,17.6,1,1,0,0,0,2.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(1));

	// Символ 51
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(190.2,17.6,1,1,0,0,0,8.2,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(2));

	// Символ 50
	this.instance_2 = new lib.Символ50();
	this.instance_2.setTransform(170.1,17.6,1,1,0,0,0,8.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(3));

	// Символ 49
	this.instance_3 = new lib.Символ49();
	this.instance_3.setTransform(150.4,17.6,1,1,0,0,0,8,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(4));

	// Символ 48
	this.instance_4 = new lib.Символ48();
	this.instance_4.setTransform(128.5,17.6,1,1,0,0,0,9.7,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(5));

	// Символ 47
	this.instance_5 = new lib.Символ47();
	this.instance_5.setTransform(108.4,17.6,1,1,0,0,0,9.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(6));

	// Символ 46
	this.instance_6 = new lib.Символ46();
	this.instance_6.setTransform(89.8,17.6,1,1,0,0,0,7.4,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(7));

	// Символ 45
	this.instance_7 = new lib.Символ45();
	this.instance_7.setTransform(72,17.6,1,1,0,0,0,8,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(8));

	// Символ 44
	this.instance_8 = new lib.Символ44();
	this.instance_8.setTransform(44.8,17.6,1,1,0,0,0,8.2,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(9));

	// Символ 43
	this.instance_9 = new lib.Символ43();
	this.instance_9.setTransform(26.4,17.6,1,1,0,0,0,8.3,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(10));

	// Символ 42
	this.instance_10 = new lib.Символ42();
	this.instance_10.setTransform(8.1,17.6,1,1,0,0,0,8.1,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({y:15.1},3,cjs.Ease.get(1)).to({y:17.6},5,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.3,35.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(108.2,57.5,1.76,1.76,0,0,0,59.5,19.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:68.2},9,cjs.Ease.get(1)).to({x:108.2},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(78,-9.3,1.36,1.36,0,0,0,77,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:88},9,cjs.Ease.get(1)).to({x:78},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-33.3,239.4,125.3);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(21));

	// Слой 3
	this.instance = new lib.Символ35();
	this.instance.setTransform(-61.8,-76.2,1,1,0,0,0,10.4,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// btn
	this.btn3 = new lib.Символ33();
	this.btn3.setTransform(-130.7,256.3,1,1,0,0,0,113,32);

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(12).to({x:149.3},8,cjs.Ease.get(1)).to({x:139.3},5,cjs.Ease.get(1)).wait(10).to({x:149.3},4).to({x:-631.7},5).wait(6));

	// text2
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-138.1,189.3,1,1,0,0,0,103.6,17.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:141.9},8,cjs.Ease.get(1)).to({x:131.9},5,cjs.Ease.get(1)).wait(10).to({x:141.9},4).to({x:-639.1},5).wait(7));

	// text1
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(-139.5,117.7,1,1,0,0,0,105.5,52.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:170.5},8,cjs.Ease.get(1)).to({x:160.5},5,cjs.Ease.get(1)).wait(11).to({x:170.5},4).to({x:-610.5},5).wait(8));

	// man
	this.instance_3 = new lib.Символ28();
	this.instance_3.setTransform(-189,163.5,1,1,0,0,0,170.5,146.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({x:351},8,cjs.Ease.get(1)).to({x:341},5,cjs.Ease.get(1)).wait(21).to({x:351},4).to({x:-430},5).wait(4));

	// tovar
	this.instance_4 = new lib.Символ36();
	this.instance_4.setTransform(363.2,191.1,1,1,0,0,0,61.5,161.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:503.2,alpha:1},8,cjs.Ease.get(1)).to({x:493.2},5,cjs.Ease.get(1)).wait(8).to({x:503.2},4).to({x:382.2,alpha:0},5).wait(10));

	// art
	this.instance_5 = new lib.Символ37();
	this.instance_5.setTransform(341.8,216.6,1,1,0,0,0,200,138);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({x:481.8,alpha:1},8,cjs.Ease.get(1)).to({x:471.8},5,cjs.Ease.get(1)).wait(5).to({x:481.8},4).to({x:350.8,alpha:0},5).wait(11));

	// bg
	this.instance_6 = new lib.Символ27();
	this.instance_6.setTransform(-425.5,153,1,1,0,0,0,334.5,153);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:344.5},8,cjs.Ease.get(1)).to({x:334.5},5,cjs.Ease.get(1)).wait(26).to({x:344.5},4).to({x:-436.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.1,-86.6,214.7,373.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(16.4,12.8,1,1,0,0,0,6.4,12.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:26.4,alpha:1},4,cjs.Ease.get(1)).to({x:36.4,alpha:0},5,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(6.4,12.8,1,1,0,0,0,6.4,12.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:16.4,alpha:1},4,cjs.Ease.get(1)).to({x:26.4,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-3.6,12.8,1,1,0,0,0,6.4,12.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:6.4,alpha:1},4,cjs.Ease.get(1)).to({x:16.4,alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-1.5,15.8,28.5);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ16();
	this.instance.setTransform(298.9,35.8,1,1,0,0,0,6.4,12.8);

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(143.8,35.8,1,1,0,0,0,124.9,19.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAFQAIgMAJgEIANgFIAHAPQgEAMgPAGQgLgFgHgHg");
	this.shape.setTransform(89,40.3);

	// Слой 1
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(178,34,1,1,0,0,0,178,34);

	this.addChild(this.instance_2,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,436,68);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 25
	this.instance = new lib.Символ25();
	this.instance.setTransform(13.1,46.8,1,1,0,0,0,13.8,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({y:36.8},4,cjs.Ease.get(1)).to({y:46.8},5,cjs.Ease.get(1)).wait(3));

	// Символ 24
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(42.8,46.8,1,1,0,0,0,12.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({y:36.8},4,cjs.Ease.get(1)).to({y:46.8},5,cjs.Ease.get(1)).wait(4));

	// Символ 23
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(74.3,46.8,1,1,0,0,0,13.8,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({y:36.8},4,cjs.Ease.get(1)).to({y:46.8},5,cjs.Ease.get(1)).wait(5));

	// -
	this.instance_3 = new lib.Symbol();
	this.instance_3.setTransform(106.1,46.8,1,1,0,0,0,12.2,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({y:36.8},4,cjs.Ease.get(1)).to({y:46.8},5,cjs.Ease.get(1)).wait(6));

	// Символ 22
	this.instance_4 = new lib.Символ22();
	this.instance_4.setTransform(148.7,46.7,1,1,0,0,0,13.2,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:36.7},4,cjs.Ease.get(1)).to({y:46.7},5,cjs.Ease.get(1)).wait(7));

	// Символ 21
	this.instance_5 = new lib.Символ21();
	this.instance_5.setTransform(292.6,46.8,1,1,0,0,0,4.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({y:36.8},4,cjs.Ease.get(1)).to({y:46.8},5,cjs.Ease.get(1)).wait(8));

	// Символ 20
	this.instance_6 = new lib.Символ20();
	this.instance_6.setTransform(268.5,46.8,1,1,0,0,0,15.6,28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({y:36.8},4,cjs.Ease.get(1)).to({y:46.8},5,cjs.Ease.get(1)).wait(9));

	// Символ 19
	this.instance_7 = new lib.Символ19();
	this.instance_7.setTransform(232.1,50.6,1,1,0,0,0,18.2,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:40.6},4,cjs.Ease.get(1)).to({y:50.6},5,cjs.Ease.get(1)).wait(10));

	// Символ 18
	this.instance_8 = new lib.Символ18();
	this.instance_8.setTransform(188.7,46.7,1,1,0,0,0,21.3,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({y:36.7},0).to({y:46.7},5,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,17.8,297.8,64.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// beard
	this.instance = new lib.Символ6();
	this.instance.setTransform(211,137,1,1,0,0,0,106.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:104.5,x:209},0).wait(1).to({regX:60.5,regY:57.5,rotation:-18.8,x:181.2,y:191.8},0).wait(1).to({rotation:-33.1,x:195.6,y:196.9},0).wait(1).to({rotation:-43.1,x:206.3,y:198.3},0).wait(1).to({rotation:-48.8,x:212.4},0).wait(1).to({rotation:-51.5,x:215.3,y:198},0).wait(1).to({rotation:-52.6,x:216.4,y:197.9},0).wait(1).to({rotation:-52.8,x:216.6},0).wait(1).to({rotation:-52.7,x:216.5},0).wait(1).to({rotation:-52.6,x:216.4},0).wait(1).to({regX:104.7,regY:14.5,rotation:-53,x:209.1,y:136.9},0).to({regX:104.5,rotation:-32,x:209,y:137},5,cjs.Ease.get(-0.53)).to({regX:104.7,rotation:-42,x:209.1,y:136.8},5,cjs.Ease.get(1)).to({regX:104.5,rotation:-36,x:209,y:137},5,cjs.Ease.get(1)).to({y:307},5,cjs.Ease.get(-1)).wait(6));

	// baby
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(155,139.5,1,1,0,0,0,155,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,279);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(300,150,1,1,0,0,0,300,150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.Анимация6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(0,0.1,1,1,0,0,0,107,24.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107,-24.3,214.1,48.7);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(0,0.1,1,1,0,0,0,107,24.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107,-24.3,214.1,48.7);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(0,0.1,1,1,0,0,0,107,24.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107,-24.3,214.1,48.7);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-15,-3,1,1,0,0,0,100.1,27.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.1,-31.3,230.3,62.8);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-15,-3,1,1,0,0,0,100.1,27.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.1,-31.3,230.3,62.8);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-15,-3,1,1,0,0,0,100.1,27.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.1,-31.3,230.3,62.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-187.3,84.1,1,1,0,0,0,125.1,27.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76).to({_off:false},0).to({x:152.7},6,cjs.Ease.get(1)).to({x:142.7},5,cjs.Ease.get(1)).wait(43).to({x:152.7},5,cjs.Ease.get(1)).to({x:-217.3},4,cjs.Ease.get(1)).wait(1));

	// beardman
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(-207.5,153.5,1,1,0,0,0,170.5,146.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({x:422.5},5,cjs.Ease.get(1)).to({x:412.5},5,cjs.Ease.get(1)).wait(42).to({x:422.5},5,cjs.Ease.get(1)).to({x:-207.5},4,cjs.Ease.get(1)).wait(7));

	// line
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(-294.4,184,1,1,0,0,0,178,34);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({x:205.6},7,cjs.Ease.get(1)).to({x:195.6},5,cjs.Ease.get(1)).wait(35).to({x:205.6},5,cjs.Ease.get(1)).to({x:-284.4},4,cjs.Ease.get(1)).wait(4));

	// bg
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-305.9,145,1,1,0,0,0,459,150);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(69).to({_off:false},0).to({x:454.1},5,cjs.Ease.get(1)).wait(56).to({x:464.1},5,cjs.Ease.get(1)).to({x:-285.9},4,cjs.Ease.get(1)).wait(1));

	// text2
	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.setTransform(749.1,178.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация2("synched",0);
	this.instance_5.setTransform(419.1,178.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Анимация3("synched",0);
	this.instance_6.setTransform(429.1,178.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true,x:419.1},10,cjs.Ease.get(1)).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},10,cjs.Ease.get(1)).to({_off:true,x:429.1},5,cjs.Ease.get(1)).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},5,cjs.Ease.get(1)).wait(16).to({startPosition:0},0).to({scaleX:1.18,scaleY:1.18},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({x:419.1},5,cjs.Ease.get(1)).to({x:759.1},5,cjs.Ease.get(1)).to({_off:true},76).wait(1));

	// text1
	this.instance_7 = new lib.Анимация4("synched",0);
	this.instance_7.setTransform(731.6,109);
	this.instance_7._off = true;

	this.instance_8 = new lib.Анимация5("synched",0);
	this.instance_8.setTransform(411.6,109);
	this.instance_8._off = true;

	this.instance_9 = new lib.Анимация6("synched",0);
	this.instance_9.setTransform(421.6,109);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true,x:411.6},10,cjs.Ease.get(1)).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},10,cjs.Ease.get(1)).to({_off:true,x:421.6},5,cjs.Ease.get(1)).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},5,cjs.Ease.get(1)).wait(12).to({startPosition:0},0).to({scaleX:1.16,scaleY:1.16},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(17).to({startPosition:0},0).to({x:411.6},5,cjs.Ease.get(1)).to({x:731.6},5,cjs.Ease.get(1)).to({_off:true},73).wait(1));

	// baby
	this.instance_10 = new lib.Символ5();
	this.instance_10.setTransform(-189,164.5,1,1,0,0,0,155,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:181},9,cjs.Ease.get(1)).to({x:171},5,cjs.Ease.get(1)).wait(46).to({x:165.4},0).to({x:161},4).to({x:821},5,cjs.Ease.get(1)).to({_off:true},70).wait(1));

	// bg
	this.instance_11 = new lib.Символ3();
	this.instance_11.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344,0,944,304);


// stage content:



(lib.beard_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_MouseOverHandler_1()
		{
		 _this.over.btn3.gotoAndPlay(1);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.knopka.addEventListener("mouseout", fl_MouseOutHandler_2);
		
		function fl_MouseOutHandler_2()
		{
		 _this.over.btn3.gotoAndPlay(5);
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		
		//over
		stage.canvas.onmouseover = fl_MouseOverHandler_52;
		
		  function fl_MouseOverHandler_52()
		{
		    _this.over.gotoAndPlay(1);
		  
		}
		
		
		//out
		stage.canvas.onmouseout = fl_MouseOutHandler_24;
		
		  function fl_MouseOutHandler_24()
		{
		    _this.over.gotoAndPlay(30);
		    _this.kadr.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// knopka
	this.knopka = new lib.Символ53();
	this.knopka.setTransform(154.1,235.9,1,1,0,0,0,132.7,38.6);
	new cjs.ButtonHelper(this.knopka, 0, 1, 2, false, new lib.Символ53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.knopka).wait(1));

	// ramka
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Egu3gXbMBdvAAAMAAAAu3MhdvAAAg");
	this.shape.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// over
	this.over = new lib.Символ26();
	this.over.setTransform(334.5,147,1,1,0,0,0,334.5,153);

	this.timeline.addTween(cjs.Tween.get(this.over).wait(1));

	// an
	this.kadr = new lib.Символ2();
	this.kadr.setTransform(300,150,1,1,0,0,0,300,150);

	this.timeline.addTween(cjs.Tween.get(this.kadr).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,57.4,945,396.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
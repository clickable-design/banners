(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg", id:"back"},
		{src:"images/girlsforb_02.png", id:"girlsforb_02"},
		{src:"images/girlsforb_03.png", id:"girlsforb_03"},
		{src:"images/girlsforb_06.png", id:"girlsforb_06"},
		{src:"images/girlsforb_08.png", id:"girlsforb_08"},
		{src:"images/girlsforb_11.png", id:"girlsforb_11"},
		{src:"images/girlsforb_16.png", id:"girlsforb_16"},
		{src:"images/girlsforb_19.png", id:"girlsforb_19"},
		{src:"images/girlsforb_23.png", id:"girlsforb_23"},
		{src:"images/girlsforb_27.png", id:"girlsforb_27"},
		{src:"images/girlsforb_29.png", id:"girlsforb_29"},
		{src:"images/kanal.png", id:"kanal"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png", id:"w256h2561380453915MouseOptions256x25632"},
		{src:"images/whip1.png", id:"whip1"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.girlsforb_02 = function() {
	this.initialize(img.girlsforb_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,110);


(lib.girlsforb_03 = function() {
	this.initialize(img.girlsforb_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,80);


(lib.girlsforb_06 = function() {
	this.initialize(img.girlsforb_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,283);


(lib.girlsforb_08 = function() {
	this.initialize(img.girlsforb_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,100);


(lib.girlsforb_11 = function() {
	this.initialize(img.girlsforb_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,30);


(lib.girlsforb_16 = function() {
	this.initialize(img.girlsforb_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,202);


(lib.girlsforb_19 = function() {
	this.initialize(img.girlsforb_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,62);


(lib.girlsforb_23 = function() {
	this.initialize(img.girlsforb_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,57);


(lib.girlsforb_27 = function() {
	this.initialize(img.girlsforb_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,23);


(lib.girlsforb_29 = function() {
	this.initialize(img.girlsforb_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,73);


(lib.kanal = function() {
	this.initialize(img.kanal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,69);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.whip1 = function() {
	this.initialize(img.whip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.Символ98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AtmPfIAA+9IbNAAIAAe9g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ97 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDFDFD","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,52.4).s().p("AlvFwQiZiZAAjXQAAjXCZiYQCYiZDXAAQDXAACZCZQCZCYAADXQAADXiZCZQiZCZjXAAQjXAAiYiZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.1,-52.1,104.2,104.2);


(lib.Символ95 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhOBHIgMgFQgHgCgFgEQgFgEgEgEQgEgFgDgGQgEgGgCgHIgDgNIgBgPIABgNIADgOIAGgNIAIgLIAKgIQAGgEAFgCQAHgEAHgBQAHgCAIABQAIgBAHACQAIABAFAEQAHACAFAEIAKAIQAEAGADAFQADAGAAAHQAFASAAAJQAAAGgCAJQgBAHgCAHIgEANIgJALQgEAEgGAEIgLAGIgNAEQgIACgHgBQgIABgIgCgAhMgrQgGAEgEAGQgFAHgBAJQgDAJAAAIQAAAKADAJQABAIAFAHQAFAGAGAEQAHADAHAAQAIAAAHgDQAGgEAFgGQADgHADgJQACgJAAgJQAAgIgCgJQgDgJgDgGQgFgHgGgDQgHgEgIAAQgIAAgHADgAnmBGQgMgDgIgFIAGgYQAVAIANAAQAGABAFgCQAFgBADgCQAEgDACgDQABgEAAgEQAAgGgCgEQgDgDgEgDQgIgDgMAAIgOAAIAAgWIAOAAQAKABAIgFIAFgGQACgDAAgEQAAgHgFgFQgHgDgKAAQgHgBgJADIgOAGIgIgXQAIgFALgDQAMgDANAAQALAAAJACQAKADAGAFQAHAFADAGQADAHAAAIQAAAGgCAGQgCAFgEAEQgDAFgGADIgLAEIAAABQAGAAAGABQAHADAEAEQAEAFADAFQADAGAAAHQAAAGgBAFIgFAJQgEAIgJAFQgIAEgLADQgJADgLgBQgLABgLgDgAGTBGIAAiLIAfAAIAAAxIARgBQAMAAAKADQAKADAIAFQAHAGAFAGQAFANgBAIQAAAJgDAJQgDAHgFAGQgFAEgHAEQgGADgJADIgQADIgQAAQgUAAgOgBgAGyACIAAAtIAMAAQAGAAAFgBQAFgBAEgDQADgDACgEQADgFAAgGQAAgGgDgEQgCgEgDgDQgEgDgFgCIgLgBgAAaBGIAAiJQAIgCAhgBQAPAAAJABQAKACAHAFQAJAEAEAHQAEAHAAAJQAAAFgBAEQgCAFgCAEQgDAEgEADQgFADgGACIAAABQAGABAGADQAEACAFAFQAEAEABAGQADAFAAAHQgBAJgEAIQgDAHgHAGQgEADgFACIgMAEQgVADgNAAQgVAAgOgBgAA5AvIANABIAKgCQAFAAAEgDQADgDADgDQACgEAAgGQAAgFgCgEQgDgDgDgDQgEgCgFgBQgFgCgGABIgMAAgAA5guIAAAhIALAAQAGAAAFgCQAFAAADgDQADgCACgEQABgCAAgFQAAgIgFgEQgGgEgLAAIgOABgAE7BGIAAhwIgmAAIAAgbIBtAAIAAAbIgnAAIAABwgADrBGIgKgkIgpAAIgKAkIghAAIAriLIAqAAIAsCLgADcAKIgQg3IAAAAIgPA3IAfAAgAirBGQgEgGgDgJIgJgbIgFgJQgEgEgEgCQgFgCgGAAIgGAAIAAA7IggAAIAAiLIAgAAIAAA7IACAAIAng7IAnAAIgxA+QAHACAFAEQAFABAEAEQADAEADAGIANAiIAJAWgAkuBGIgLgkIgoAAIgKAkIghAAIAriLIAqAAIArCLgAk9AKIgQg3IAAAAIgPA3IAfAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.8,-7.3,101.6,14.6);


(lib.Символ91 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("И", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18.3,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.2,-23.4,36.5,46.9);


(lib.Символ90 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Л", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-17.5,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-23.4,34.9,46.9);


(lib.Символ89 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("И", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18.3,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.2,-23.4,36.5,46.9);


(lib.Символ88 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Н", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18.3,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.2,-23.4,36.5,46.9);


(lib.Символ87 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("А", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-17.7,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.6,-23.4,35.3,46.9);


(lib.Символ86 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("К", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-16.8,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-23.4,33.6,46.9);


(lib.Символ85 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("А", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-17.7,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.6,-23.4,35.3,46.9);


(lib.Символ84 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ж", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-21.6,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-23.4,43.1,46.9);


(lib.Символ83 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("И", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18.3,-23.5,2.932,2.932);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.2,-23.4,36.5,46.9);


(lib.Символ79 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.whip1();
	this.instance.setTransform(-42,-41.9,0.823,0.823);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42,-41.9,84,84);


(lib.Символ77 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.kanal();
	this.instance.setTransform(-44.9,-25.8,0.749,0.749);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-25.8,89.9,51.7);


(lib.Символ72 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AIdAAQAADgifCeQieCfjgAAQjfAAieifQifieAAjgQAAjfCfieQCeifDfAAQDgAACeCfQCfCeAADfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.6)").s().p("Al9F+QifieABjgQgBjfCfieQCeifDfABQDggBCeCfQCfCegBDfQABDgifCeQieCfjggBQjfABieifg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.1,-55.1,110.2,110.2);


(lib.Символ69 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Р", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-16.7,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-23.8,33.3,47.7);


(lib.Символ68 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("А", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-23.8,35.9,47.7);


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("З", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-16,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-23.8,31.9,47.7);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Д", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18.6,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-23.8,37.1,47.7);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Е", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-15.8,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-23.8,31.6,47.7);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Н", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18.6,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-23.8,37.1,47.7);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ь", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-17,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-23.8,34,47.7);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("С", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-16.9,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-23.8,33.7,47.7);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("В", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-17,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-23.8,34,47.7);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("О", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-19.1,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-23.8,38.2,47.7);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ю", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-22.7,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.7,-23.8,45.5,47.7);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Р", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-16.7,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-23.8,33.3,47.7);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("А", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-23.8,35.9,47.7);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Б", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-17,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17,-23.8,34,47.7);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ы", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-21.5,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-23.8,42.9,47.7);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Н", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-18.6,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-23.8,37.1,47.7);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("Ю", "bold 12px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(-22.7,-23.9,2.982,2.982);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.7,-23.8,45.5,47.7);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDF300","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,10.8).s().p("AhKBKQgfgfAAgrQAAgrAfgfQAfgfArAAQArAAAfAfQAgAfAAArQAAArggAfQgfAggrAAQgrAAgfggg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-10.6,21.3,21.3);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-320,-152.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#171211").s().p("AhxAqQgLgJAAgOQAAgTARgKQAIgGA0gYIAKgBIAAgDQAAgFANgJQAMgHAKgEIAxAAQAFADAnAJQAiALABAMQAAAGgRALQgTAKgOgCIhIAAIgQALQgdAUgEAEIgWAWIgUAWQgHgLgTgRg");
	this.shape.setTransform(14.6,-99.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#523F39").s().p("AhaBIQgFgEAAgIQAAgKAggVIA0geIAtgdQAhgXAAgKQAAgPANAOIACABIANATIABABQAAADgfARQgkAUgOANQgLALggAWIgwAdg");
	this.shape_1.setTransform(-35.3,-77.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E1514").s().p("AgnAzIgOgTIgBgBQAEgJAYgUIAhgaIAagaQAGABAIAMQAIAMAAADQAAADgjAYQgnAfgOAPg");
	this.shape_2.setTransform(-21.6,-87.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C25A4D").s().p("AgGACIgVgeQAAgJAJAEIAAABIACACIAAACQAAAHANAOIASARIANAXIAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgIAAgWghg");
	this.shape_3.setTransform(-80.3,-42.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9C3D31").s().p("AgWAYIgdgGQgLgDgEgFIgBgDQgBgGgHgGIgHgIQAAgJAHgBQALAKAGAAIAIgBQAQAIAWADIAbAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQADAFALAAQAGAAAMgEIAEgCIACAAQAHAAAGgEQAHgFACAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABIgBADQgDAGgVAIQgUAJgXAHg");
	this.shape_4.setTransform(-64.2,-32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C15B4F").s().p("AgBgCIAAgBIABABIACAFIgDgFg");
	this.shape_5.setTransform(-77.2,-38.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A4C24").s().p("AgrAyQgKgCgGgTIgCgJIgEgFIgEgHIgBgBIgNgUIgUgTQgNgOAAgHIAAgCIgCgCIAAgCIABgCIgBgEIAAAAIAAgCIABgCIAAgBIgEgFQAAgSAOAHQAIABANAFQAfALAAADQAQADAIALIAMAWQAKAcAIALQANAYAeAIQAcABAKABIAJACIAhAWQAAACgHACIgFACQgLAEgGAAQgLAAgEgFQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgcAAQgWgEgQgIIgJABQgEAAgKgJQgIABAAAIIAHAIQAHAIABAGIACADQgTgDgTgkg");
	this.shape_6.setTransform(-70.3,-40.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6725C").s().p("ABZBmQAHgDAAgBIghgXIgJgBQgKgCgcAAQgcgJgPgXQgIgOgKgaIgMgWQgIgLgQgDQAAgCgfgMQgNgFgIgBQgOgGAAASIAEAFIAAABIgBgCQgIgIAAgEQAAgDACgDQAFgJAPgIQAMgGAZgJIAcgJQANgDAEABQAGABAJASQAOAhAJASQAPAeAmAKIBgAAQAGACAFANQADAKAAAKQAAAVgcAdIgIAIIABgDQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgCAAgGAFQgGAEgHAAIgCAAg");
	this.shape_7.setTransform(-67.7,-43.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4F4225").s().p("AgVAuQgRgRgFgKQgHgLgNgMQgHgIAAgLQAAgGACgDIABgBQADgCAEAAQAcgEAggOIAHgCQALgBAKAHIAUAQIAOABQAEAFADAYIACATIgcAJQgZAJgLAGQgOAIgFAIIgJgKg");
	this.shape_8.setTransform(-81.5,-54.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFBCAB").s().p("AgmBAQgJgrgFgHQgIgMgNghQgNghAAgEQAAghA5AFQA5AFAYAsQAjBKAAAPIAAAMIgHACQgjAPgcADQgEAAgCADIgBAAQgGAGgXAPQgNAAgGgig");
	this.shape_9.setTransform(-89.5,-66);

	// Слой 1
	this.instance = new lib.girlsforb_06();
	this.instance.setTransform(-109,-141.5);

	this.addChild(this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109,-141.5,218,283);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_03();
	this.instance.setTransform(-34.5,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.5,-40,69,80);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEHJNIgGAAQhNgUhugWQjagsitgLQgMgDgCgHQgBgCAAgIIAAgBIAAgEQAAgPAUgYQAKgKAJgHQAEgIAIgIIAkgdQAzgpAAgsQAAgFgWhPQgYhYgHgiQgQhNgnh9QAAgLA6gxQA4gvBGgwQAlgZAOg8QANg4AngTQgKgPgKglQgLglAAgVQAAgmAMACQANACAZA2IAIAwQAGAhAKAPQBEgCAZgGQAWgGAqAAQBhAAAnBWQAUAtAAAzQAAA5gOAhQgZA4gRBPIAAFvQAHAqgHBJIAAAGQAGASACAYQACAQAABCQAAAKgEAEQgFAGgPAAIgEAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.8,-58.9,67.6,118);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEiKGIg+gGQhBgEgVgDIhggBQhfgCgGgCIjjgCQgKgDhRgCQgKgJgDgHQgCgFAAgJQAAgbAUj6QAVj7AAhJIgBg6QgKgOgKg+IgKhSQAAg6AFgQIAAgCQABg4AKgTIAJgTQAGgXANgaIANgVIALgfIANgyQALglAQgWQAug+BqAkIBIAAQADABAQADIADAAQAhACAWAHIBkAOIAWADQCkAQAxBCQAWAdABArQABAYgDAoQAABYgGAtIgJADQhGgpgKhRQABhagOglIg8gDIgbgCQAABygZFiIgaFkQAAAXAjAmIBLBIQBuBnAABCQAAALgCADQgDAHgKABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-64.6,78,129.3);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AC/B9Qgwg1AAgXQAAgOBPhXIBghrQAYgdAMAAQAIAAAEAWQAEAeAEAQQAGAeAMAOQAiAmAGAUQADAJAAAqQAAA0gRAlQgeBDhOAAQg9AAg6hAgAmBC7QgCgGABgHQAAgHADgDQgjgOAAgSQAAgCANgNQgXgOgEgIQgBgDAAgSQgDgQAGgLQALgXAqAMQARAVAeAUQAOAKAAAWQAAARgSAfQgUAggQAAQgMAAgDgCgAinApQgTgIgbgvQgagtAAgKQAAgoBCgaQA9gYCGgVIACADQABADAAAHQAAAKgJADQgIACgdAHQApAwAAAXQAAAMhFAxIhSA2g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-18.9,87.1,37.9);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AC/B9Qgwg1AAgXQAAgOBPhXIBghrQAYgdAMAAQAIAAAEAWQAEAeAEAQQAGAeAMAOQAiAmAGAUQADAJAAAqQAAA0gRAlQgeBDhOAAQg9AAg6hAgAmBC7QgCgGABgHQAAgHADgDQgjgOAAgSQAAgCANgNQgXgOgEgIQgBgDAAgSQgDgQAGgLQALgXAqAMQARAVAeAUQAOAKAAAWQAAARgSAfQgUAggQAAQgMAAgDgCgAinApQgTgIgbgvQgagtAAgKQAAgoBCgaQA9gYCGgVIACADQABADAAAHQAAAKgJADQgIACgdAHQApAwAAAXQAAAMhFAxIhSA2g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-18.9,87.1,37.9);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ah6ANQgLhSgJhVQAAgsAkAgQAfAbAPAdQBHATA8glQAwgqAIAAQAMAAADARQACAIgBAJQAAATgVAyQgWA3gfAyQhTCPhLAAQgLAAgWiog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-18.1,28.8,36.2);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah6ANQgLhSgJhVQAAgsAkAgQAfAbAPAdQBHATA8glQAwgqAIAAQAMAAADARQACAIgBAJQAAATgVAyQgWA3gfAyQhTCPhLAAQgLAAgWiog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-18.1,28.8,36.2);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_19();
	this.instance.setTransform(-21.5,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-31,43,62);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_11();
	this.instance.setTransform(-19.5,-15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.5,-15,39,30);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_29();
	this.instance.setTransform(-37.5,-36.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-36.5,75,73);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_27();
	this.instance.setTransform(-37,-11.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37,-11.5,74,23);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_23();
	this.instance.setTransform(-12,-28.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-28.5,24,57);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_16();
	this.instance.setTransform(-25,-101);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-101,50,202);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.girlsforb_02();
	this.instance.setTransform(-38.5,-63);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.5,-63,81,110);


(lib.Анимация14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEHJNIgGAAQhNgUhugWQjagsitgLQgMgDgCgHQgBgCAAgIIAAgBIAAgEQAAgPAUgYQAKgKAJgHQAEgIAIgIIAkgdQAzgpAAgsQAAgFgWhPQgYhYgHgiQgQhNgnh9QAAgLA6gxQA4gvBGgwQAlgZAOg8QANg4AngTQgKgPgKglQgLglAAgVQAAgmAMACQANACAZA2IAIAwQAGAhAKAPQBEgCAZgGQAWgGAqAAQBhAAAnBWQAUAtAAAzQAAA5gOAhQgZA4gRBPIAAFvQAHAqgHBJIAAAGQAGASACAYQACAQAABCQAAAKgEAEQgFAGgPAAIgEAAgAgOH1IAWgBIgagDIAEAEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.8,-58.9,67.6,118);


(lib.Анимация13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEHJNIgGAAQhNgUhugWQjagsitgLQgMgDgCgHQgBgCAAgIIAAgBIAAgEQAAgPAUgYQAKgKAJgHQAEgIAIgIIAkgdQAzgpAAgsQAAgFgWhPQgYhYgHgiQgQhNgnh9QAAgLA6gxQA4gvBGgwQAlgZAOg8QANg4AngTQgKgPgKglQgLglAAgVQAAgmAMACQANACAZA2IAIAwQAGAhAKAPQBEgCAZgGQAWgGAqAAQBhAAAnBWQAUAtAAAzQAAA5gOAhQgZA4gRBPIAAFvQAHAqgHBJIAAAGQAGASACAYQACAQAABCQAAAKgEAEQgFAGgPAAIgEAAgAgOH1IAWgBIgagDIAEAEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.8,-58.9,67.6,118);


(lib.Анимация12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEHJNIgGAAQhNgUhugWQjagsitgLQgMgDgCgHQgBgCAAgIIAAgBIAAgEQAAgPAUgYQAKgKAJgHQAEgIAIgIIAkgdQAzgpAAgsQAAgFgWhPQgYhYgHgiQgQhNgnh9QAAgLA6gxQA4gvBGgwQAlgZAOg8QANg4AngTQgKgPgKglQgLglAAgVQAAgmAMACQANACAZA2IAIAwQAGAhAKAPQBEgCAZgGQAWgGAqAAQBhAAAnBWQAUAtAAAzQAAA5gOAhQgZA4gRBPIAAFvQAHAqgHBJIAAAGQAGASACAYQACAQAABCQAAAKgEAEQgFAGgPAAIgEAAgAgOH1IAWgBIgagDIAEAEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.8,-58.9,67.6,118);


(lib.Анимация9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEiKGIg+gGQhBgEgVgDIhggBQhfgCgGgCIjjgCQgKgDhRgCQgKgJgDgHQgCgFAAgJQAAgbAUj6QAVj7AAhJIgBg6QgKgOgKg+IgKhSQAAg6AFgQIAAgCQABg4AKgTIAJgTQAGgXANgaIANgVIALgfIANgyQALglAQgWQAug+BqAkIBIAAQADABAQADIADAAQAhACAWAHIBkAOIAWADQCkAQAxBCQAWAdABArQABAYgDAoQAABYgGAtIgJADQhGgpgKhRQABhagOglIg8gDIgbgCQAABygZFiIgaFkQAAAXAjAmIBLBIQBuBnAABCQAAALgCADQgDAHgKABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-64.6,78,129.3);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEiKGIg+gGQhBgEgVgDIhggBQhfgCgGgCIjjgCQgKgDhRgCQgKgJgDgHQgCgFAAgJQAAgbAUj6QAVj7AAhJIgBg6QgKgOgKg+IgKhSQAAg6AFgQIAAgCQABg4AKgTIAJgTQAGgXANgaIANgVIALgfIANgyQALglAQgWQAug+BqAkIBIAAQADABAQADIADAAQAhACAWAHIBkAOIAWADQCkAQAxBCQAWAdABArQABAYgDAoQAABYgGAtIgJADQhGgpgKhRQABhagOglIg8gDIgbgCQAABygZFiIgaFkQAAAXAjAmIBLBIQBuBnAABCQAAALgCADQgDAHgKABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-64.6,78,129.3);


(lib.Анимация7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AEiKGIg+gGQhBgEgVgDIhggBQhfgCgGgCIjjgCQgKgDhRgCQgKgJgDgHQgCgFAAgJQAAgbAUj6QAVj7AAhJIgBg6QgKgOgKg+IgKhSQAAg6AFgQIAAgCQABg4AKgTIAJgTQAGgXANgaIANgVIALgfIANgyQALglAQgWQAug+BqAkIBIAAQADABAQADIADAAQAhACAWAHIBkAOIAWADQCkAQAxBCQAWAdABArQABAYgDAoQAABYgGAtIgJADQhGgpgKhRQABhagOglIg8gDIgbgCQAABygZFiIgaFkQAAAXAjAmIBLBIQBuBnAABCQAAALgCADQgDAHgKABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-64.6,78,129.3);


(lib.Анимация2копия = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ACmJEIgJgDImPgCQgJgIgEgOQgCgIAAgFQAAgbAeh8QAfh+AAgWQACg7gDh1IgEhwIgBgxQhBD6AACxIAKDAQAAAMgDAPQgEAWgIAIIgpAAIgQgPQAAgHACgEIADgEIAAkVQAKgvAWivQARiLAXhOQA4i8A3h8QAshkANAUQAVgPATAAQAOgIAJADQALAEAHAYIADASQAjAkAMAIQAYAZBFALIAJACQArgCAogUQAsgVACAAQAbAAAPFIQAIClACCnQAACtgCA0QgHCigbAag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-58,66.1,116.1);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ACmJEIgJgDImPgCQgJgIgEgOQgCgIAAgFQAAgbAeh8QAfh+AAgWQACg7gDh1IgEhwIgBgxQhBD6AACxIAKDAQAAAMgDAPQgEAWgIAIIgpAAIgQgPQAAgHACgEIADgEIAAkVQAKgvAWivQARiLAXhOQA4i8A3h8QA1h4AIA1IAQgOQAdgXAOAEQALAEAHAYIAMAxQAKAfASAPIBpAFQAvAAArgWQAsgVACAAQAbAAAPFIQAIClACCnQAACtgCA0QgHCigbAag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-58,66.1,116);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ACmJEIgJgDImPgCQgJgIgEgOQgCgIAAgFQAAgbAeh8QAfh+AAgWQACg7gDh1IgEhwIgBgxQhBD6AACxIAKDAQAAAMgDAPQgEAWgIAIIgpAAIgQgPQAAgHACgEIADgEIAAkVQAKgvAWivQARiLAXhOQA4i8A3h8QA1h4AIA1IAQgOQAdgXAOAEQALAEAHAYIAMAxQAKAfASAPIBpAFQAvAAArgWQAsgVACAAQAbAAAPFIQAIClACCnQAACtgCA0QgHCigbAag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,-58,66.1,116);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("НАВЕДИ МЫШЬ", "bold 22px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.setTransform(65.5,0,0.66,0.66);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,142,33);


(lib.shape109 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ96 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgoBSQgJgBgIgEQgIgCgHgFIgMgKQgFgFgEgHQgEgGgDgIQgDgHgBgIIgBgRQAAgIACgKQABgJAEgIIAIgPIALgMIANgKIAPgHQAIgDAJgBIASgCQANAAAKADQAKACAFACIgHAeQgQgGgNAAQgMAAgJADQgJADgHAHQgIAHgDAKQgFALAAALQAAAMAEAKQAEAKAGAHQAHAHAKADQAKAEAMAAQALAAASgFIAFAdQgFACgLACQgKADgOAAQgKAAgKgCgAFJBRIAAihIAlAAIAAA5IATgCQAOAAALAEQAMADAJAGQAJAHAFAIQAFAOAAAJQAAAMgDAJQgDAIgHAHQgFAGgIAEQgIAEgJADIgTADIgTABQgYAAgQgCgAFtADIAAAzIAOABQAHAAAGgBQAGgCAEgDQAFgEACgFQADgFAAgHQAAgHgDgFQgCgFgFgDQgEgDgGgCQgFgBgHAAgAkwBRIAAihIAlAAIAAA5IASgCQANAAAMAEQAMADAIAGQAKAHAFAIIAEALIABANQAAALgDAJQgEAIgGAHQgGAGgIAEQgHAEgKADIgSADIgSABQgXAAgRgCgAkLADIAAAzIAMABQAHAAAFgBQAGgCAFgEQAEgDADgFQACgGAAgGQAAgHgDgFQgCgFgFgDQgEgDgGgCQgFgBgGAAgAnBBRIAAifQAJgCAngBQARAAALACQALACAJAFQAJAFAFAIQAFAIAAALQAAAFgBAFQgCAGgDAEQgEAFgFADQgFAEgGADIAAAAQAHACAFADQAGACAFAFQAEAGACAGQADAHAAAIQAAAKgFAJQgEAJgIAGIgKAHIgOAEQgYAEgQAAQgYAAgQgCgAmdA3IAPABIAMgCQAGgBAEgDQAEgDADgEQACgFAAgGQAAgGgCgFQgDgEgEgDQgFgCgGgCIgNgBIgNAAgAmdg2IAAAnIANAAQAHAAAFgCIAKgEIAFgGQACgEAAgFQAAgJgHgFQgGgEgNAAIgQAAgAEEBRIAAhDIgBAAQgJAEgJACQgJACgKAAQgLAAgJgDQgKgDgGgGQgHgGgEgIQgEgKAAgNIAAg1IAlAAIAAAvQAAAHACAFQACAGADADQAEADAFACQAFACAHAAQAIAAAQgGIAAhFIAkAAIAAChgAAsBRIAAihIBlAAIAAAeIhAAAIAAAiIA8AAIAAAcIg8AAIAAAnIBDAAIAAAegAipBRIAAihIAlAAIAAChg");
	this.shape.setTransform(0.9,1);

	// Слой 1
	this.instance = new lib.Символ97();

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.1,-52.1,104.2,104.2);


(lib.Символ94 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ95();
	this.instance.setTransform(0,-1.8);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDFDFD","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,52.4).s().p("AlvFwQiYiZAAjXQAAjXCYiYQCYiYDXgBQDYABCYCYQCYCYAADXQAADXiYCZQiYCYjYAAQjXAAiYiYg");
	this.shape.setTransform(1.3,-1.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.8,-54,104.2,104.2);


(lib.Символ82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// И
	this.instance = new lib.Символ83();
	this.instance.setTransform(61.2,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({y:23.6},5).to({y:29.6},5).wait(1));

	// Ж
	this.instance_1 = new lib.Символ84();
	this.instance_1.setTransform(33.7,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({y:23.6},5).to({y:29.6},5).wait(3));

	// А
	this.instance_2 = new lib.Символ85();
	this.instance_2.setTransform(6.8,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({y:23.6},5).to({y:29.6},5).wait(6));

	// К
	this.instance_3 = new lib.Символ86();
	this.instance_3.setTransform(-15.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({y:23.6},5).to({y:29.6},5).wait(8));

	// А
	this.instance_4 = new lib.Символ87();
	this.instance_4.setTransform(-37.5,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({y:23.6},5).to({y:29.6},5).wait(11));

	// Н
	this.instance_5 = new lib.Символ88();
	this.instance_5.setTransform(-61.1,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({y:23.6},5).to({y:29.6},5).wait(13));

	// И
	this.instance_6 = new lib.Символ89();
	this.instance_6.setTransform(23.5,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({y:-23.6},5).to({y:-17.6},5).wait(16));

	// Л
	this.instance_7 = new lib.Символ90();
	this.instance_7.setTransform(0.1,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({y:-23.6},5).to({y:-17.6},5).wait(18));

	// И
	this.instance_8 = new lib.Символ91();
	this.instance_8.setTransform(-23.3,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:-23.6},5).to({y:-17.6},5).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.4,-41,158.8,94.1);


(lib.Символ80 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ82();
	this.instance.setTransform(0.2,0);
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,17);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.2,-50,180,116);


(lib.Символ78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ79();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-11.5},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-41.9,84,84);


(lib.Символ76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ77();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:12.2},9).to({rotation:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-25.8,89.9,51.7);


(lib.Символ74 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ78();
	this.instance.setTransform(1,5.1);

	// Слой 1
	this.instance_1 = new lib.Символ72();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.6,-54.6,109.2,109.2);


(lib.Символ73 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ76();
	this.instance.setTransform(-1.9,0);

	// Слой 1
	this.instance_1 = new lib.Символ72();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.6,-54.6,109.2,109.2);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ю
	this.instance = new lib.Символ53();
	this.instance.setTransform(60.6,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({y:31.7},6).to({y:38.7},6).wait(3));

	// Н
	this.instance_1 = new lib.Символ54();
	this.instance_1.setTransform(31.8,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({y:31.7},6).to({y:38.7},6).wait(6));

	// Ы
	this.instance_2 = new lib.Символ55();
	this.instance_2.setTransform(4.3,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({y:31.7},6).to({y:38.7},6).wait(9));

	// Б
	this.instance_3 = new lib.Символ56();
	this.instance_3.setTransform(-21.6,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({y:31.7},6).to({y:38.7},6).wait(12));

	// А
	this.instance_4 = new lib.Символ57();
	this.instance_4.setTransform(-44,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({y:31.7},6).to({y:38.7},6).wait(15));

	// Р
	this.instance_5 = new lib.Символ58();
	this.instance_5.setTransform(-66.1,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(33).to({y:31.7},6).to({y:38.7},6).wait(18));

	// Ю
	this.instance_6 = new lib.Символ59();
	this.instance_6.setTransform(34.4,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({y:-10},6).to({y:-3},6).wait(21));

	// О
	this.instance_7 = new lib.Символ60();
	this.instance_7.setTransform(5.1,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({y:-10},6).to({y:-3},6).wait(24));

	// В
	this.instance_8 = new lib.Символ61();
	this.instance_8.setTransform(-18.5,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({y:-10},6).to({y:-3},6).wait(27));

	// С
	this.instance_9 = new lib.Символ62();
	this.instance_9.setTransform(-39.8,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(21).to({y:-10},6).to({y:-3},6).wait(30));

	// Ь
	this.instance_10 = new lib.Символ63();
	this.instance_10.setTransform(66.2,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({y:-51.8},6).to({y:-44.8},6).wait(33));

	// Н
	this.instance_11 = new lib.Символ64();
	this.instance_11.setTransform(43.2,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({y:-51.8},6).to({y:-44.8},6).wait(36));

	// Е
	this.instance_12 = new lib.Символ65();
	this.instance_12.setTransform(21.3,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({y:-51.8},6).to({y:-44.8},6).wait(39));

	// Д
	this.instance_13 = new lib.Символ66();
	this.instance_13.setTransform(-0.5,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({y:-51.8},6).to({y:-44.8},6).wait(42));

	// З
	this.instance_14 = new lib.Символ67();
	this.instance_14.setTransform(-22.5,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({y:-51.8},6).to({y:-44.8},6).wait(45));

	// А
	this.instance_15 = new lib.Символ68();
	this.instance_15.setTransform(-43.9,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({y:-51.8},6).to({y:-44.8},6).wait(48));

	// Р
	this.instance_16 = new lib.Символ69();
	this.instance_16.setTransform(-65.9,-44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:-51.8},6).to({y:-44.8},6).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-68.6,166.1,131.2);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDF300","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,42.2).s().p("AkpD0Qh7hlAAiPQAAiOB7hlQB8hlCtAAQCuAAB8BlQB7BlAACOQAACPh7BlQh8BliuAAQitAAh8hlg");
	this.shape.setTransform(-591.6,60.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.73,scaleY:0.73,alpha:1},14).to({scaleX:1,scaleY:1,alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-633.8,-10.6,644.4,105.8);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ44();
	this.instance.setTransform(139.2,-40);

	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(129.5,-40);

	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(119.8,-40);

	this.instance_3 = new lib.Символ44();
	this.instance_3.setTransform(35.2,-37);

	this.instance_4 = new lib.Символ44();
	this.instance_4.setTransform(26.7,-37);

	this.instance_5 = new lib.Символ44();
	this.instance_5.setTransform(18.9,-37);

	this.instance_6 = new lib.Символ44();
	this.instance_6.setTransform(-122.3,-43.6);

	this.instance_7 = new lib.Символ44();
	this.instance_7.setTransform(-114.5,-43.6);

	this.instance_8 = new lib.Символ44();
	this.instance_8.setTransform(-98.6,-43.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0.71)","rgba(255,255,255,0.522)"],[0,0.255,1],-1,-1.9,0,-1,-1.9,4.8).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(-97.8,-42.9);

	// Слой 1
	this.instance_9 = new lib.Символ41();

	this.addChild(this.instance_9,this.shape,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-756.1,-152.5,1076.1,305);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(298.8,147.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-457.3,-4.7,1076.1,305);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(-2.6,4.7,1,1,0,0,0,-2.6,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.2},24).to({rotation:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-40,69,80);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ACcAAQAAAYguARQguAShAAAQg/AAgugSQgugRAAgYQAAgXAugSQAugRA/AAQBAAAAuARQAuASAAAXg");
	this.shape.setTransform(8.7,222.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhtApQgtgRgBgYQABgXAtgSQAugRA/AAQBAAAAuARQAtASAAAXQAAAYgtARQguARhAAAQg/AAgugRg");
	this.shape_1.setTransform(8.7,222.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	// Слой 1
	this.instance = new lib.Анимация12("synched",0);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Анимация13("synched",0);
	this.instance_1.alpha = 0.781;
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация14("synched",0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0.781},9).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-58.9,67.6,288.5);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AB9AAQAAAhglAXQgkAXg0AAQgyAAglgXQglgXAAghQAAgfAlgYQAlgXAyAAQA0AAAkAXQAlAYAAAfg");
	this.shape.setTransform(16.4,222.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhYA4QgkgXAAghQAAggAkgXQAlgXAzAAQAzAAAlAXQAlAXAAAgQAAAhglAXQglAXgzAAQgzAAglgXg");
	this.shape_1.setTransform(16.4,222.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(24));

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0.781},10).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,213.2,27.1,17.9);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("Ag3gxIBvAAIAABkIhvAAg");
	this.shape.setTransform(-11.6,105.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Ag3AyIAAhkIBvAAIAABkg");
	this.shape_1.setTransform(-11.6,105.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(16));

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Анимация8("synched",0);
	this.instance_1.alpha = 0.781;
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация9("synched",0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,alpha:0.781},9).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-64.6,78,176.2);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhOg3ICdAAIAABvIidAAg");
	this.shape.setTransform(-19,110.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhOA4IAAhvICdAAIAABvg");
	this.shape_1.setTransform(-19,110.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(29));

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:0.781},10).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,104,17.9,13.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.781},9).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-18.9,87.1,37.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AheADIBDhkIB0AfIAGB5IhwArg");
	this.shape.setTransform(-4.9,291.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(49));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({alpha:0.762},10).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,281.4,19,19.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.77},4).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-18.1,28.8,36.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABfAAQAAAUgcAOQgcAPgnAAQgmAAgcgPQgcgOAAgUQAAgTAcgPQAcgOAmAAQAnAAAcAOQAcAPAAATg");
	this.shape.setTransform(-2.6,143.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhCAiQgbgOgBgUQABgTAbgPQAcgNAmAAQAnAAAbANQAcAPAAATQAAAUgcAOQgbAOgnAAQgmAAgcgOg");
	this.shape_1.setTransform(-2.6,143.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(28));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:0.77},7).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,137.2,21,11.8);


(lib.Символ20копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhthEIDbAAIAACJIjbAAg");
	this.shape.setTransform(1.8,109.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhtBFIAAiJIDbAAIAACJg");
	this.shape_1.setTransform(1.8,109.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

	// Слой 1
	this.instance = new lib.Анимация2копия("synched",0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.762},9).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-58,66.1,175.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhthEIDbAAIAACJIjbAAg");
	this.shape.setTransform(1.8,109.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhtBFIAAiJIDbAAIAACJg");
	this.shape_1.setTransform(1.8,109.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},29).to({state:[{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.shape_1},{t:this.shape}]},4).wait(1));

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.alpha = 0.531;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({_off:true,alpha:0.531},13).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},13).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,101.3,24,15.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(-1,0);

	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ah6ANQgLhSgJhVQAAgsAkAgQAfAbAPAdQBHATA8glQAwgqAIAAQAMAAADARQACAIgBAJQAAATgVAyQgWA3gfAyQhTCPhLAAQgLAAgWiog");
	this.shape.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,137.7,20,10.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();

	this.instance_1 = new lib.Символ27();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AC/B9Qgwg1AAgXQAAgOBPhXIBghrQAYgdAMAAQAIAAAEAWQAEAeAEAQQAGAeAMAOQAiAmAGAUQADAJAAAqQAAA0gRAlQgeBDhOAAQg9AAg6hAgAmBC7QgCgGABgHQAAgHADgDQgjgOAAgSQAAgCANgNQgXgOgEgIQgBgDAAgSQgDgQAGgLQALgXAqAMQARAVAeAUQAOAKAAAWQAAARgSAfQgUAggQAAQgMAAgDgCgAinApQgTgIgbgvQgagtAAgKQAAgoBCgaQA9gYCGgVIACADQABADAAAHQAAAKgJADQgIACgdAHQApAwAAAXQAAAMhFAxIhSA2g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,281.4,19,19.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.instance_1 = new lib.Символ31();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEiKGIg+gGQhBgEgVgDIhggBQhfgCgGgCIjjgCQgKgDhRgCQgKgJgDgHQgCgFAAgJQAAgbAUj6QAVj7AAhJIgBg6QgKgOgKg+IgKhSQAAg6AFgQIAAgCQABg4AKgTIAJgTQAGgXANgaIANgVIALgfIANgyQALglAQgWQAug+BqAkIBIAAQADABAQADIADAAQAhACAWAHIBkAOIAWADQCkAQAxBCQAWAdABArQABAYgDAoQAABYgGAtIgJADQhGgpgKhRQABhagOglIg8gDIgbgCQAABygZFiIgaFkQAAAXAjAmIBLBIQBuBnAABCQAAALgCADQgDAHgKABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,104.5,16.9,12.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(-1.5,0.9);

	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-1.5,0.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AEHJNIgGAAQhNgUhugWQjagsitgLQgMgDgCgHQgBgCAAgIIAAgBIAAgEQAAgPAUgYQAKgKAJgHQAEgIAIgIIAkgdQAzgpAAgsQAAgFgWhPQgYhYgHgiQgQhNgnh9QAAgLA6gxQA4gvBGgwQAlgZAOg8QANg4AngTQgKgPgKglQgLglAAgVQAAgmAMACQANACAZA2IAIAwQAGAhAKAPQBEgCAZgGQAWgGAqAAQBhAAAnBWQAUAtAAAzQAAA5gOAhQgZA4gRBPIAAFvQAHAqgHBJIAAAGQAGASACAYQACAQAABCQAAAKgEAEQgFAGgPAAIgEAAgAgOH1IAWgBIgagDIAEAEg");
	this.shape.setTransform(-1.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,214.6,26.1,16.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.setTransform(21.4,-4.6,1,1,0,0,0,-13.1,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.7,x:25.2},14).to({rotation:0,x:21.4},14).wait(1));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(-35.3,45.4,1,1,0,0,0,-24.8,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.4,x:-32.6,y:43.1},14).to({rotation:0,x:-35.3,y:45.4},14).wait(1));

	// Символ 14
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(-65.1,-3.9,1,1,0,0,0,-14.6,-20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-14.5,rotation:-4,x:-65},14).to({regX:-14.6,rotation:0,x:-65.1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-26.9,126,90);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(-56,32.5);

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(0,45.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68,4,105,57);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(0,-95.8,1,1,0,0,0,0,-95.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.2},19).to({rotation:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-101,50,202);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.7},39).to({rotation:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-63,81,110);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,142,33);


(lib.sprite110 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ73();

	this.instance_1 = new lib.Символ94();
	this.instance_1.setTransform(-1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-54.6,109.2,109.2);


(lib.Символ92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ96();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ74();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-54.6,109.2,109.2);


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.button2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.button1 = new lib.Символ92();
	this.button1.setTransform(-60.1,-19.1);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button1).wait(1));

	// Символ 73
	this.button2 = new lib.Символ93();
	this.button2.setTransform(-60.1,113.2);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-74.2,110.2,242.5);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(1,-29.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ak8JDQgPgNAAgBQAGgHAFgPQAGgNAEgQQAEguANhUIADgRIAAjdQAHgmARhNIAYhwQACgOAKhhQAJhIAPgrQAAgBANABQAPACAQgaQAAgMAFgOQALgaAAggQgBgTAJgnQAIglgCgUQgLgiA+gMQAYgFASAEQAUADABALQABAPABABIAwAkQAJAHACALQACANACADQAMARBSAAQBJAAAhgJQARgEALgFQAfAAAQEhQAICQACCPQAAC3gFA+QgLCJgpBjg");
	this.shape.setTransform(0,-28.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.2,-86.9,66.5,174.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.instance_1 = new lib.Символ20копия();

	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(-1,29.5,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,101.8,23,14.9);


(lib.Символ4 = function() {
	this.initialize();

	// Символ 19
	this.instance = new lib.Символ19();
	this.instance.setTransform(-34.2,47.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ19(), 3);

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(-77.5,80.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ18(), 3);

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(-48.6,-62.4);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ17(), 3);

	// Символ 16
	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(32.4,76.6);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Символ16(), 3);

	// Символ 15
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(44.5,-35.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Символ15(), 3);

	// Слой 1
	this.instance_5 = new lib.Символ38();

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.5,-141.5,219.6,380.1);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109,-141.5,218,380.1);


(lib.Символ1 = function() {
	this.initialize();

	// girls-forb_03.png
	this.instance = new lib.Символ37();
	this.instance.setTransform(-51.5,-116.5);

	// girls-forb_29.png
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-17.5,-66.2,1.056,1.056);

	// girls-forb_16.png
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(30,19.5);

	// girls-forb_08.png
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(43.5,-90.5);

	// girls-forb_06.png
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(11,22.1);

	// girls-forb_27.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(55,-45.5);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98,-156.5,218,417.2);


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


(lib.Символ9_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(-85.9,1.6,1,1,0,0,0,66.8,11.6);

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.addChild(this.cir,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155.7,-19,174.8,39);


(lib.Символ75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 4
	this.instance = new lib.Символ9_1();
	this.instance.setTransform(-112,122.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:118},14).to({x:-112},15).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ80();
	this.instance_1.setTransform(-190.7,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:39.3},14).to({x:-190.7},15).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ71();
	this.instance_2.setTransform(60.1,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-119.9},14).to({x:60.1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.9,-120.7,333.6,263.4);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 100;
		this.fon.y = - stage.mouseY / 100;
		}
		
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  
		  function fl_MouseOverHandler_5()
		{
		    _this.rul.gotoAndPlay(1);
		  
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		  function fl_MouseOutHandler_2()
		{
		    _this.rul.gotoAndPlay(20);
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.instance = new lib.Символ1();
	this.instance.setTransform(298,161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.rul = new lib.Символ75();
	this.rul.setTransform(688.1,152.2,1,1,0,0,0,2.8,0);

	this.timeline.addTween(cjs.Tween.get(this.rul).wait(1));

	// Слой 7
	this.button = new lib.Символ98();
	this.button.setTransform(320,152.5,3.672,1.538);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ98(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Символ 49
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(101.2,159.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.fon = new lib.Символ39();
	this.fon.setTransform(-14.5,-1.7,1.057,1.057);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.1,143.3,1238.1,428.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
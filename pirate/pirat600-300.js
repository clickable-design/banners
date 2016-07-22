(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1469199760997", id:"back"},
		{src:"images/curry.png?1469199760997", id:"curry"},
		{src:"images/hand.png?1469199760997", id:"hand"},
		{src:"images/hand2.png?1469199760997", id:"hand2"},
		{src:"images/pirat1_03.png?1469199760997", id:"pirat1_03"},
		{src:"images/pirat1_06.png?1469199760997", id:"pirat1_06"},
		{src:"images/pirate2_03.png?1469199760997", id:"pirate2_03"},
		{src:"images/pirate2_06.png?1469199760997", id:"pirate2_06"},
		{src:"images/pirate2_09.png?1469199760997", id:"pirate2_09"},
		{src:"images/pirate2_14.png?1469199760997", id:"pirate2_14"},
		{src:"images/pirate2_16.png?1469199760997", id:"pirate2_16"},
		{src:"images/pirate2_21.png?1469199760997", id:"pirate2_21"},
		{src:"images/pirate2_25.png?1469199760997", id:"pirate2_25"},
		{src:"images/pirate2_27.png?1469199760997", id:"pirate2_27"},
		{src:"images/pirate2_32.png?1469199760997", id:"pirate2_32"},
		{src:"images/pirate2_35.png?1469199760997", id:"pirate2_35"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1204,500);


(lib.curry = function() {
	this.initialize(img.curry);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,54);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,98);


(lib.hand2 = function() {
	this.initialize(img.hand2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,163);


(lib.pirat1_03 = function() {
	this.initialize(img.pirat1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,187);


(lib.pirat1_06 = function() {
	this.initialize(img.pirat1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,103);


(lib.pirate2_03 = function() {
	this.initialize(img.pirate2_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,226);


(lib.pirate2_06 = function() {
	this.initialize(img.pirate2_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,98);


(lib.pirate2_09 = function() {
	this.initialize(img.pirate2_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,57);


(lib.pirate2_14 = function() {
	this.initialize(img.pirate2_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,160);


(lib.pirate2_16 = function() {
	this.initialize(img.pirate2_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,103);


(lib.pirate2_21 = function() {
	this.initialize(img.pirate2_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,221);


(lib.pirate2_25 = function() {
	this.initialize(img.pirate2_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,162);


(lib.pirate2_27 = function() {
	this.initialize(img.pirate2_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,127);


(lib.pirate2_32 = function() {
	this.initialize(img.pirate2_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,80);


(lib.pirate2_35 = function() {
	this.initialize(img.pirate2_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,124);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAlAMQgFAPgPAIQgPAHgNgFQgQgFgHgOQgHgPAFgOQAFgPAOgIQAPgHANAFQAQAFAHAOQAIAPgFAOg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,11,11);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.curry();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,54);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(47.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.8,26.7);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(61.9,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.8,34.4);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(45.3,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90.7,22);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#CCCCCC"],[0.773,1],0,0,0,0,0,260.2).s().p("A7UeFMAAAg8JMA2pAAAMAAAA8Jg");
	this.shape.setTransform(175,192.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand2();
	this.instance.setTransform(80.9,0,1,1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.1,201.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(40.2,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.4,27.3);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApcB2IAAjsIS5AAIAADsg");
	this.shape.setTransform(60.5,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.1,23.8);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(44.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.5,24.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABMFYIAKgEIgKgDQgDgBgDgFIgGgNQgJgVACgIQABgFAGgEQAFgEAJgEIAggNQAOgGAJAGQAIAFAHARQAFAMAAAGQAAAGgEAHIAtgTIALAYIh3AygAB2EcIgfAOQgHACgCAEQgBAEAEAKQAFAMAEADQAEACAGgDIAhgOQAGgCABgFQABgEgEgLQgFgLgDgCIgEAAIgHABgAAcDpQgJgVABgOQACgOAOgFIAdgNQAQgGALAHQAGAEAEAHQAFAGAEAKQAIATgCANQgBAGgFAEQgFAFgIADIgUAJIgWg1IgIADIgFADQgCADgBADIABAIIAEAMQAFAMAKANIgQAHQgMgUgEgLgABSC9IgMAFIAMAdIAMgFQAEgBABgEQABgEgEgJQgEgJgDgCIgEgBIgDABgABCCPQgEgKgGgEQgCgCgDAAQgEAAgDABIgwAVIgKgYIBQgjIAKAYIgNAFQACgBADABIAHADIAHAFIAEAHIAEAJIgVAJgAgVBeQgEgCgEgFQgFgFgCgFIgKgZQgCgFgBgHQgBgGACgFQABgFAFgFQAEgFAIgEIAZgKQAGgBAHAAQAIAAAEABQAFACAEAFQAFAFACAFIAKAYIACAMQACAGgCAGQgCAFgFAFQgFAFgIAEIgZAKQgGADgGAAQgHAAgFgDgAAHAXIgdANQgGADgBAEQgCAFAEAKQAFAKAEADQAEACAGgDIAegNQAGgDABgEQACgFgFgKQgEgKgEgCIgFgBIgGABgAg2AAQgFAAgEgBQgEgDgEgEIgMgXQgFgNgGgUIARgHQAGAZADAJQADAHAEAEQADADAEgCIAFgCQAEgBABgDQABgDgDgHIgEgLIgEgMQgBgGABgFQABgEAEgDQACgEAFgCIAKgEQALgFAJAJQAFAEAEAHQADAHADAKIALAeIgOAHIgKgfQgFgKgCgDQgDgBgEABIgEACQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBACACAFIAEALQAHAPgCAKQgBAJgKAEIgLAFQgFAAgFAAIgBAAgAhxhtIA5gYQAGgDACgDQABgDgDgJQgFgKgEgCQgDgCgHADIg5AYIgKgZIBSgiIAKAYIgKAEQANgCAKAXQAHARgDAIQgCAFgEADIgKAGIg8AZgAigjXQgJgWABgNQACgOAOgGIAdgMQAQgHALAHQAGAEAEAHQAFAHAEAKQAIATgCAMQgBAGgFAEQgFAFgIAEIgUAIIgWg1IgIADIgFAEQgCACgBAEIABAIIAEALQAFAMAKAOIgQAHQgMgUgEgLgAhqkEIgMAFIAMAeIAMgFQAEgCABgEQABgEgEgIQgEgJgDgCIgEgBIgDAAgAjDkqIgEgKIgDgKQgCgGABgEIACgJQABgEAFgEQAEgEAGgDIAcgLQAGgDAFAAIAJAAQAEAAAEADIAGAGIAKAQIAEAJQAEAJADARIgQAHQgEgWgDgHQgDgIgFgDQgFgDgGACIgeANQgGADgCAGQgBAGAEAJQAEAJALAQIgRAHQgIgOgGgNg");
	this.shape.setTransform(20.5,36.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,73.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Хочешь \nя тебе поточу?", "bold 21px 'Play'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 194;
	this.text.setTransform(59.2,1.2,0.616,0.616);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,1.2,122,35.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsJEyQhLgeg7ggQi8hrAAiJQAAiyFCh/QFDh/HGAAQD0AADOAlQCyAfCVA7QFDB/AACyQAACzlDB/QlCB/nHAAQnGAAlDh/g");
	this.shape.setTransform(110.1,43.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,220.1,86.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.616,0.616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,741.6,308);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,426,226);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,221);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,57);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,98);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirat1_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161,187);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirat1_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,103);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,160);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,103);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,skewY:-5.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,80);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,162);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_27();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,127);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pirate2_35();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,296,124);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(75.4,-17.7,0.999,1,0,26,-154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-70.3,150.8,140.6);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.setTransform(20,27,1,1,0,0,0,20,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,54);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(20,27,1,1,0,0,0,20,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75,x:18.2,y:23.2},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:20,y:27},15,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ61();
	this.instance_1.setTransform(13.9,4,1,1,0,0,0,4,4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({scaleX:1.58,scaleY:1.58,y:4.1,alpha:1},2).to({scaleX:2.46,scaleY:2.46,alpha:0},3).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,54);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(53.5,19.7,0.925,0.925,0,0,0,44.2,12.2);

	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(54.2,26.7,0.67,0.925,-1.2,0,0,60.6,11.8);

	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(54.9,13.5,0.836,0.925,-1.2,0,0,60.5,11.8);

	this.instance_3 = new lib.Символ57();
	this.instance_3.setTransform(53.4,19.7,1,1,0,0,0,47.9,13.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AnjBAIhoABIgGj/ISdgZIAFD/IiBADIADCaIuyAUg");
	this.shape.setTransform(54.9,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_3}]},1).to({state:[{t:this.shape},{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,1.5,101.6,37.1);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(53.8,23.1,0.889,0.889,0,0,0,40.1,13.7);

	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(54.1,15.9,0.631,1.032,0,179,178.5,60.5,11.8);

	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(53.8,29.3,0.787,1.032,0,179,178.5,60.5,11.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(53.8,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(53.9,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,2.5,95.6,40.3);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(92.5,100.5,1,1,0,0,0,92.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.1,201.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(53.8,31.1,1.177,1.177,0,0,0,53.8,22.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,1.8,139.5,58.7);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.but4.addEventListener("mouseover", fl_Clickover4.bind(this));
		
		function fl_Clickover4()
		{
		
			this.girl.gotoAndStop(29);
			this.hands.gotoAndStop(29);
		
			
		
		}
		
		this.but4.addEventListener("mouseout", fl_Clickout4.bind(this));
		
		function fl_Clickout4()
		{
		
			this.girl.gotoAndStop(29);
			this.hands.gotoAndStop(29);
		
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.but4 = new lib.Символ54();
	this.but4.setTransform(54.9,20.1,1,1,0,0,0,54.9,20.1);
	new cjs.ButtonHelper(this.but4, 0, 1, 2, false, new lib.Символ54(), 3);

	this.timeline.addTween(cjs.Tween.get(this.but4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-1.6,118.8,43.4);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(75.4,70.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150.8,140.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(37.8,51.5,1,1,0,0,0,20.5,36.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Alpl6IFfiRIF0OGIlfCRgAB9D5IggAOQgJAEgFAEQgFADgBAFQgDAJAJAUIAHAOQADAEADABIAJADIgJAEIAKAYIB2gyIgKgZIguATQAEgHABgGQAAgFgFgNQgIgRgIgFQgEgDgGAAQgGAAgHADgABRCcIgeANQgNAGgCAOQgCANAJAWQAFAKAMAUIAQgHQgLgNgFgMIgEgMIAAgIQAAgDACgCIAGgEIAHgDIAXA1IAUgIQAIgEAFgFQAEgEACgGQACgMgIgUQgEgJgFgHQgFgHgFgEQgGgEgHAAQgHAAgHADgABCB2QADAAADABQAFAEAEALIAEAIIAUgJIgDgIIgEgHIgHgGIgHgDQgDgBgDACIANgGIgKgXIhRAiIAKAYIAxgVIAFgBIACABgAAIgHIgWAIQgIADgFAFQgEAFgCAFQgBAFABAGQAAAHACAGIALAYQACAFAEAFQAEAFAFACQAFADAEABQAHAAAIgEIAYgKQAJgEAFgFQAFgFABgFQACgFgBgHIgCgMIgKgXQgDgGgEgCQgEgGgFgCQgFgDgHAAQgHAAgJAEgAhOhKQAFAUAGANIALAXQAEAEAEADQAEACAFABQAGAAAGgCIAKgFQAKgDACgKQABgKgGgPIgFgLQgCgFACgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAFgCQAEgBACABQACADADAKIALAfIAPgHIgKgdQgEgKgFgIQgEgGgEgFQgHgJgLAFIgKAEQgFACgDAEQgDADgBAEQgBAFABAGIADANIAFAKQADAHgBADQgBADgEACIgFACQgFABgDgDQgDgDgDgIQgEgJgGgZgAgritQAEACAEALQAEAIgCADQgBAEgHADIg5AXIALAZIA8gZIAKgFQADgEACgEQADgJgHgRQgKgXgMADIAKgFIgLgYIhSAiIALAZIA5gYIAHgCIADABgAhrkkIgeANQgNAFgCAOQgCAOAJAVQAFALAMAUIAQgHQgLgOgFgMIgEgLIAAgIQAAgDACgDIAGgEIAHgCIAXA1IAUgJQAIgEAFgEQAEgEACgGQACgNgIgTQgEgKgFgHQgFgGgFgFQgGgDgHAAQgHAAgHADgAiDl4QgFAAgGADIgbALQgHADgEAEQgEAEgCAEIgCAJQAAAEACAGIACAKIAFAKQAFANAJAOIAQgHQgLgQgEgIQgEgKACgGQABgGAHgDIAegMQAFgDAFAEQAFACAEAIQACAHAFAWIAQgGQgEgSgEgJIgDgJIgKgPIgGgHQgEgDgEAAIgEAAIgGAAg");
	this.shape.setTransform(36.2,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,104.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(67.7,26.7,0.616,0.616,0,0,0,110,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.5,53.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 32
	this.instance = new lib.Символ32();
	this.instance.setTransform(71.5,24.3,1,1,0,0,0,61,17.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},11).wait(34).to({alpha:0},10).wait(8));

	// Символ 33
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(-5.2,66.3,0.188,0.188,0,0,0,67.7,26.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:67.8,regY:26.7,scaleX:1,scaleY:1,x:67.8,y:26.7,alpha:1},14,cjs.Ease.get(1)).wait(45).to({scaleX:1.33,scaleY:1.33,x:141.5,y:-3.7,alpha:0},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,61.3,25.5,10);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(67.8,26.7,1,1,0,0,0,67.8,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:32.7},19).to({y:26.7},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,61.3,25.5,10);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsgI3Qi2gNiQiQQicicAAjbQAAjaCcibQCbicCSmWQCSmXEdB+QEdB+RNQ3UAROAQ5gwBABqQDYi4glnMg");
	mask.setTransform(218,48.6);

	// Слой 2
	this.instance = new lib.Символ45();
	this.instance.setTransform(148.6,32.7,1,1,-2.5,0,0,92.5,100.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:0.98,rotation:0,skewX:0.3,skewY:0.8,x:150.3,y:45.3},2,cjs.Ease.get(-1)).to({regX:92.6,scaleX:0.96,scaleY:0.96,skewX:3.2,skewY:4.4,x:152,y:58},2,cjs.Ease.get(1)).to({regX:92.7,scaleX:0.98,scaleY:0.97,skewX:0.8,skewY:1.5,x:150.7,y:47.8},2,cjs.Ease.get(-1)).to({regX:92.5,scaleX:1,scaleY:1,rotation:-2.5,skewX:0,skewY:0,x:148.6,y:32.7},3,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(150.5,142.1,1.174,1.174,0,0,0,53.8,22.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AISAAQAADbibCcQicCbjbAAQjaAAicibQibicAAjbQAAjaCbicQCcibDaAAQDbAACcCbQCbCcAADag");
	this.shape.setTransform(143.1,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#CCCCCC"],[0.773,1],0,0,0,0,0,53.4).s().p("Al1F2QicibAAjbQAAjaCcibQCbicDaAAQDbAACbCcQCcCbAADaQAADbicCbQibCcjbAAQjaAAibicg");
	this.shape_1.setTransform(143.1,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84.4,-71.7,161.1,251.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(370.8,164,1,1.065,0,0,0,370.8,154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,741.6,328);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(460.9,164,1,1,0,0,0,370.8,164);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:415.9},25,cjs.Ease.get(-1)).to({x:370.8},25,cjs.Ease.get(1)).to({x:414.9},25,cjs.Ease.get(-1)).to({x:460.9},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.1,0,741.6,328);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(67,34.1,1.004,1,0,0,4.8,67,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,skewY:0,y:28.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134,68.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(49.5,49,1,1,0,0,0,49.5,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,skewY:5.7,y:53.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,98);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(149,98.5,1,1,0,0,0,67,28.5);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(93.5,49,1,1,0,0,0,49.5,49);

	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(83,154,1,1,0,0,0,83,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,234);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(213,113,1,1,0,0,0,213,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:1,skewX:-3.1,skewY:0.5,x:209.1,y:115},4,cjs.Ease.get(-1)).to({regX:213.1,scaleX:0.95,scaleY:1.01,skewX:-7.3,skewY:1.5,x:204.2,y:117.3},5,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1,skewX:-3.5,skewY:0.6,x:208.7,y:115.2},5,cjs.Ease.get(-1)).to({regX:213,scaleX:1,scaleY:1,skewX:0,skewY:0,x:213,y:113},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,426,226);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(70,110.5,1,1,0,0,0,70,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.04,skewX:4.8,x:80.2,y:107.3},4,cjs.Ease.get(-1)).to({scaleY:1.09,skewX:11,x:92.9,y:103.2},5,cjs.Ease.get(1)).to({scaleY:1.04,skewX:5.3,x:81.6,y:106.9},5,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:70,y:110.5},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,221);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(86.7,28.8,1,1,0,0,0,61.9,17.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(84.2,33.1,1.242,1.242,0,0,0,67.8,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.3,66.3);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(69.8,25.2,1,1,0,0,0,45.3,11);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(67.8,26.7,1,1,0,0,0,67.8,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.5,53.4);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(36.2,52.5,1,1,0,0,0,36.2,52.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABQEpQgEgEgFgLQgEgKABgEQABgEAHgCIAggOQAHgDADACQAEACAEALQAFALgBAEQgBAFgGACIghAOIgHACIgDgBgAA7CeIAMgFQAEgCAEACQADACAEAJQADAJAAAEQgCAEgDABIgMAFgAgcAjQgFgDgEgKQgEgKABgFQABgEAGgDIAggLQAEgDAEADQAFACAEAJQAEAJgBAFQgBAEgHADIgdANIgGABIgEAAgAiBkjIAMgFQAEgBAEACQADACAEAIQADAJAAAEQgCAEgDABIgMAGg");
	this.shape.setTransform(38.8,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,104.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ37();
	this.instance.setTransform(4.4,24.1,1,1,-8.5,0,0,36.1,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:36.2,rotation:6.3,x:16.2,y:10.4},7,cjs.Ease.get(-0.76)).to({rotation:12.9,x:20.4,y:2.6},7,cjs.Ease.get(1)).to({regY:52.4,rotation:1.5,x:11.9,y:14},8,cjs.Ease.get(-1)).to({regX:36.1,regY:52.5,rotation:-8.5,x:4.4,y:24.1},7,cjs.Ease.get(1)).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Al1F2QicibAAjbQAAjaCcibQCbicDaAAQDbAACbCcQCcCbAADaQAADbicCbQibCcjbAAQjaAAibicg");
	var mask_graphics_29 = new cjs.Graphics().p("Al1F2QicibAAjbQAAjaCcibQCbicDaAAQDbAACbCcQCcCbAADaQAADbicCbQibCcjbAAQjaAAibicg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:52.8,y:53.1}).wait(29).to({graphics:mask_graphics_29,x:52.8,y:53.1}).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(48.2,59.5,1,1,0,0,0,75.4,70.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1.3,x:49.9,y:57.8},7).to({rotation:2.7,x:51.6,y:55.9},7,cjs.Ease.get(1)).to({regY:70.4,rotation:1.3,x:49.8,y:57.9},8,cjs.Ease.get(-1)).to({regY:70.3,rotation:0,x:48.2,y:59.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(52,150.6,1.379,1.379,0,0,0,54.9,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AISAAQAADbibCcQiKCJi8AQQgZACgYAAQgXAAgYgCQi9gQiKiJQibicAAjbQAAjaCbicQCcibDaAAQDbAACcCbQCbCcAADag");
	this.shape.setTransform(53.1,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwIQQi8gQiJiKQicibAAjbQAAjaCcibQCbicDaAAQDbAACbCcQCcCbAADaQAADbicCbQiJCKi8AQQgZACgYAAQgXAAgZgCg");
	this.shape_1.setTransform(53.1,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-33.2,161.1,209.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 9
	this.instance = new lib.Символ9();
	this.instance.setTransform(214,265,1,1,0,0,0,213,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:218.4,y:264.5},7,cjs.Ease.get(-1)).to({x:222.8,y:264},7,cjs.Ease.get(1)).to({x:218.7,y:264.4},7,cjs.Ease.get(-1)).to({x:214,y:265},8,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(269.5,272,1,1,0,0,0,71.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.8,x:267.4,y:275.5},7,cjs.Ease.get(-1)).to({rotation:5.7,x:265.2,y:279},7,cjs.Ease.get(1)).to({regY:40.1,rotation:3,x:267.3,y:275.8},7,cjs.Ease.get(-1)).to({regY:40,rotation:0,x:269.5,y:272},8,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(225,117,1,1,0,0,0,108,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:1.3,x:226.4,y:120.3},7,cjs.Ease.get(-1)).to({rotation:3,x:227.6,y:123.5},7,cjs.Ease.get(1)).to({rotation:1.5,x:226.4,y:120.5},7,cjs.Ease.get(-1)).to({rotation:0,x:225,y:117},8,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(101,241.5,1,1,0,0,0,74,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.8,x:102.9,y:244},7,cjs.Ease.get(-1)).to({rotation:-4,x:104.8,y:246.5},7,cjs.Ease.get(1)).to({rotation:-2,x:103,y:244.2},7,cjs.Ease.get(-1)).to({rotation:0,x:101,y:241.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(180.5,339.5,1,1,0,0,0,84.5,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.99,rotation:-2.5,x:181.1,y:339},7,cjs.Ease.get(-1)).to({regY:63.4,scaleY:0.98,rotation:-5.2,x:181.7,y:338.5},7,cjs.Ease.get(1)).to({regY:63.5,scaleY:0.99,rotation:-2.8,x:181.2,y:339},7,cjs.Ease.get(-1)).to({scaleY:1,rotation:0,x:180.5,y:339.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(196,418,1,1,0,0,0,148,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.99,skewX:-3.3,skewY:-1.8,x:199,y:417.2},7,cjs.Ease.get(-1)).to({regX:148.1,scaleX:0.97,scaleY:1,skewX:-6.6,skewY:-3.7,x:202,y:416.4},7,cjs.Ease.get(1)).to({regX:148.2,scaleX:0.99,scaleY:1,skewX:-3.5,skewY:-1.8,x:199.3,y:417.2},7,cjs.Ease.get(-1)).to({regX:148,scaleX:1,skewX:0,skewY:0,x:196,y:418},8,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_6 = new lib.Символ3();
	this.instance_6.setTransform(222.5,272,1,1,0,0,0,104.5,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.01,scaleY:1.01},7,cjs.Ease.get(-1)).to({scaleX:1.02,scaleY:1.02},7,cjs.Ease.get(1)).to({regY:81.1,scaleX:1.01,scaleY:1.01,y:272.1},7,cjs.Ease.get(-1)).to({regY:81,scaleX:1,scaleY:1,y:272},8,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(279.5,326.5,1,1,0,0,0,40,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.02,skewX:-2.8,skewY:-2.5,x:275.2,y:328.1},7,cjs.Ease.get(-1)).to({scaleX:1.04,skewX:-6,skewY:-5.3,x:270.8,y:329.7},7,cjs.Ease.get(1)).to({regX:39.9,scaleX:1.02,skewX:-3.1,skewY:-2.8,x:274.8,y:328.2},7,cjs.Ease.get(-1)).to({regX:40,scaleX:1,skewX:0,skewY:0,x:279.5,y:326.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(326,274.5,1,1,0,0,0,70,110.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1,skewX:2.3,x:325.5},7,cjs.Ease.get(-1)).to({scaleY:1,skewX:4.5,x:325},7,cjs.Ease.get(1)).to({scaleY:1,skewX:2.3,x:325.5},7,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:326},8,cjs.Ease.get(1)).wait(1));

	// Слой 13
	this.instance_9 = new lib.Символ12();
	this.instance_9.setTransform(302,325.5,1,1,0,0,0,80.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:2.5,x:298.1},7,cjs.Ease.get(-1)).to({rotation:5.2,x:294.1},7,cjs.Ease.get(1)).to({rotation:2.8,x:297.8},7,cjs.Ease.get(-1)).to({rotation:0,x:302},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,426,480);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Слой 4
	this.instance = new lib.Символ58();
	this.instance.setTransform(146.3,251.3,0.883,0.883,-0.7,0,0,20,27);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regX:20.1,rotation:-18,x:167,y:242.1,alpha:1},5).to({regX:20,rotation:-0.7,x:154,y:251.9,alpha:0},5).wait(10).to({regX:20.1,regY:27.1,scaleX:0.88,scaleY:0.88,rotation:22.5,x:440.8,y:242.6},0).to({regX:20,regY:27,scaleX:0.88,scaleY:0.88,rotation:-0.7,x:440.5,y:257.6,alpha:1},5).to({regX:20.1,regY:27.1,scaleX:0.88,scaleY:0.88,rotation:22.5,x:440.8,y:242.6,alpha:0},5).wait(6));

	// Символ 27
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(11.1,230.5,1,1,0,0,0,98.3,158.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:45.6},9,cjs.Ease.get(-1)).to({x:11.1},10,cjs.Ease.get(1)).to({x:-160.9},10,cjs.Ease.get(-1)).to({x:11.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 26
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(518.9,124.9,1,1,0,0,0,53.1,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:714.4},9,cjs.Ease.get(-1)).to({x:518.9},10,cjs.Ease.get(1)).to({x:487.3},10,cjs.Ease.get(-1)).to({x:518.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-0.9,624.8,252.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ30();
	this.instance.setTransform(281.3,63.1,1,1,0,0,0,67.8,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(151.1,171.8,0.713,0.713,0,0,0,213,241);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303.7,342.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(151.8,171.8,1,1,0,0,0,151.8,171.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:176.6},9,cjs.Ease.get(-1)).to({y:181.8},10,cjs.Ease.get(1)).to({y:176.8},10,cjs.Ease.get(-1)).to({y:171.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303.7,342.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(70.8,171.8,1,1,0,0,0,151.8,171.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:72.1},3,cjs.Ease.get(-1)).to({x:157.2},21).to({x:250.8},26,cjs.Ease.get(1)).to({x:162.6},24,cjs.Ease.get(-1)).to({x:70.8},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,0,303.7,342.1);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(11));

	// Слой 3
	this.instance = new lib.Символ50();
	this.instance.setTransform(76,125.2,0.734,0.734,0,0,0,67.8,26.7);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(403.6,118.1,0.61,0.61,0,0,0,84.2,33.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17,x:179.4,y:88.9,alpha:1},9,cjs.Ease.get(1)).to({scaleX:0.73,scaleY:0.73,x:76,y:125.2,alpha:0},6).to({_off:true},7).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({scaleX:1,scaleY:1,x:319.4,y:85.3,alpha:1},7,cjs.Ease.get(1)).to({scaleX:0.61,scaleY:0.61,x:403.6,y:118.1,alpha:0},6,cjs.Ease.get(-1)).wait(5));

	// Слой 1
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(240.8,177.7,1.034,1.034,0,0,0,151.8,171.8);

	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(157.8,178,0.746,0.746,0,0,0,212.9,241);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:213,scaleX:0.87,scaleY:0.87,x:360,y:177.6},8,cjs.Ease.get(1)).to({regX:212.9,scaleX:0.75,scaleY:0.75,x:157.8,y:178},10,cjs.Ease.get(1)).wait(1).to({regX:213,scaleX:0.87,scaleY:0.87,x:155.3,y:177.6},9,cjs.Ease.get(1)).to({regY:240.9,scaleX:0.74,scaleY:0.74,x:156,y:178},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,314,353.8);


// stage content:



(lib.pirat600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.but1.addEventListener("mouseover", fl_Clickover1.bind(this));
		
		function fl_Clickover1()
		{
		
			this.girl.gotoAndPlay(1);
			this.hands.gotoAndPlay(1);
		
		}
		
		/* this.but1.addEventListener("mouseout", fl_Clickout1.bind(this));
		
		function fl_Clickout1()
		{
		
			this.girl.gotoAndPlay(10);
			this.hands.gotoAndPlay(10);
		
		}
		*/
		
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		
			this.girl.gotoAndPlay(21);
			this.hands.gotoAndPlay(21);
		
			
		
		}
		
		
		
		document.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.girl.gotoAndStop(0);
			this.hands.gotoAndStop(0);
		
		
		}
		
		/* but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{
		
			this.girl.gotoAndPlay(30);
			this.hands.gotoAndPlay(30);
		
		
		}
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.but2 = new lib.Символ48();
	this.but2.setTransform(507.4,164.4,1,1,0,0,0,175,192.5);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ48(), 3);

	this.but1 = new lib.Символ48();
	this.but1.setTransform(161,164.4,1,1,0,0,0,175,192.5);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ48(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// Слой 3
	this.hands = new lib.Символ46();
	this.hands.setTransform(286.2,137.5,1,1,0,0,0,276.9,120.3);

	this.timeline.addTween(cjs.Tween.get(this.hands).wait(1));

	// Слой 1
	this.girl = new lib.Символ47();
	this.girl.setTransform(203.3,137.2,1,1,0,0,0,157,176.8);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(256.8,154,1,1,0,0,0,370.8,164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.9,110.4,743.8,396.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
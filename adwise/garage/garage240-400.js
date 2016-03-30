(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/backnew.jpg", id:"backnew"},
		{src:"images/boxx.png", id:"boxx"},
		{src:"images/ggkur.png", id:"ggkur"}
	]
};



// symbols:



(lib.backnew = function() {
	this.initialize(img.backnew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,644,322);


(lib.boxx = function() {
	this.initialize(img.boxx);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,97);


(lib.ggkur = function() {
	this.initialize(img.ggkur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,42);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A07IKIAAwTMAp3AAAIAAQTgADiEVIAABjIBoAAIAAjbIggAAIAAnCIlHAAIAAARQAACIgPBzQgQBxgYBGIgeAAIAADaIBmAAIAAhjgAOzEVIB8AAIAAo6Ih8AAIhTECIAAkCIh9AAIAAI6ICCAAIBOkEgAIsCuIAIBnICYAAIhWo6IjWAAIhMI6ICaAAIAJhngAkVCuIAIBnICYAAIhWo6IjWAAIhMI6ICaAAIAJhngAryEVICVAAIAAnIIBuAAIAAhyIkDAAgAw0EVIBXAAQBIAAAfgQQAggPAKgkQAMgkAJhaIApl5IiBAAIgYFiIguliIiCAAIBOGtIAIAwQAAAJgGAFQgHAFgeAAIgIAAgANAlUQAZAdAwAAQAtAAAbgdQAZgdADgwIg8AAQgFAwgjAAQglAAgEgwIg8AAQACAvAaAegABHCdQAiioAAilIAAgEIAtAAIAAFRgAH1BJQAFhKAYikQAMCPAKBfgAlMBJQAFhKAXikQAMCPALBfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFE00").s().p("AD2GNIAAhiIjwAAIAABiIhkAAIAAjaIAeAAQAYhGAQhxQAPhyAAiJIAAgRIFIAAIAAHDIAfAAIAADagAB9ibQAACjgiCrIBPAAIAAlSIgtAAgAPHErIAAkFIhOEFIiCAAIAAo7IB9AAIAAECIBTkCIB8AAIAAI7gAJIErIgIhoIg1AAIgJBoIiaAAIBNo7IDWAAIBVI7gAIJBeIAzAAQgKhfgMiPQgXCigGBMgAj5ErIgIhoIg1AAIgJBoIiaAAIBMo7IDXAAIBVI7gAk4BeIAzAAQgLhfgLiPQgXCigGBMgAreErIAAo7IEDAAIAAByIhuAAIAAHJgAwgErIAAhKIAJAAQAdgBAHgFQAHgEAAgKIgJgwIhNmtICBAAIAvFjIAXljICBAAIgoF5QgKBagLAkQgLAkgfAPQggAQhIABgANUk/QgagegBgvIA7AAQAFAwAkAAQAkAAAEgwIA8AAQgCAwgaAdQgbAdgtAAQgvAAgagdg");
	this.shape_1.setTransform(-2,-2.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134,-52.2,268.1,104.5);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ggkur();
	this.instance.setTransform(22.7,-33.9,1.078,1.078,90);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.6,-33.9,45.3,68);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFE00").s().p("ABXESIAAhSIjDAAIAABSIhTAAIAAiyIAYAAQAUg6AMhbQANhfAAhvIAAgOIEMAAIAAFwIAZAAIAACzgAgKiyQAACHgdCKIA/AAIAAkUIgiAAgADQDAIAAnRIDLAAIAABeIhSAAIAABYIBNAAIAABaIhNAAIAABkIBZAAIAABdgAmhDAIAAnRIDUAAIAABeIhZAAIAAFzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.8,-27.4,83.7,54.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.boxx();
	this.instance.setTransform(0,0,0.716,0.716);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,69.5);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.boxx();
	this.instance.setTransform(0,0,0.716,0.716);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,69.5);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFE00").s().p("AF9DgQgggSgKgcQgKgbAAhDIAAgkIB1AAIAABMQAAAeAEAIQAEAIAMAAQANAAAEgKQAFgLAAgsIAAggQAAgagGgNQgGgNgMgDQgMgEgigBIAAhBQApAAALgEQAJgEAEgLQAFgJAAgYIAAgZQAAgZgFgIQgFgIgLAAQgMAAgEAJQgFAJAAAZIAAAnIh1AAIAAgoQAAhDAfgXQAfgYBDAAQBTAAAdAhQAeAhAAA5QAAAogLARQgKARgbAPQAbAJANAVQAMASAABLQAAA4gMAfQgNAegfAQQgfARgxAAQg4AAgfgTgAC9DpIAAjVIhADVIhqAAIAAnSIBlAAIAADTIBFjTIBmAAIAAHSgAkTDpIAAnSIB6AAQAyAAAbAJQAbAHANAPQANAPAFAUQAFAWAAArIAAApQAAAtgKASQgIAVgaALQgYALgnAAIgiAAIAAC8gAiaghIAKAAQAQAAAHgIQAGgJAAgZIAAgnQAAgYgHgHQgIgHgYAAgAm+DpIAAl0IgjAAIAAF0Ih6AAIAAnSIEXAAIAAHSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.4,-24.3,121,48.7);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ggkur();
	this.instance.setTransform(-0.5,0,0.557,0.557);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,0,35.1,23.4);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(1.6,-1.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ar5GZIAAsxIXzAAIAAMxg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.2,-40.9,152.4,81.9);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(-1.1,3.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApiGZIAAsxITFAAIAAMxg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.1,-40.9,122.3,81.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:19.5},14).to({y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-33.9,45.3,68);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,0,1,1,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.5},5,cjs.Ease.get(-1)).to({rotation:-2},6,cjs.Ease.get(1)).to({rotation:0},8,cjs.Ease.get(-1)).to({rotation:2.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.4,-58.5,272.8,117.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8},5,cjs.Ease.get(-1)).to({rotation:-3.7},5,cjs.Ease.get(1)).to({rotation:-2},4,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-40.9,122.3,81.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.1},5,cjs.Ease.get(-1)).to({rotation:4.9},6,cjs.Ease.get(1)).to({rotation:2.5},7,cjs.Ease.get(-1)).to({rotation:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-40.9,152.4,81.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(28.7,11.7,1,1,0,0,0,17.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:17.6},14).to({x:28.7},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.6,0,35.1,23.4);


(lib.Символ1 = function() {
	this.initialize();

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.setTransform(1.9,37.7);

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-73.6,135.7,0.958,0.958);

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(63,135.7,0.958,0.958);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.5,-20.9,272.8,195.8);


(lib.копияСимвол9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(45.8,34.7,1,1,0,0,0,45.8,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.5},4).to({rotation:0},3).to({regY:34.6,rotation:8.5,y:34.6},3).to({regY:34.7,rotation:0,y:34.7},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,69.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(50.8,34.7,1,1,0,0,0,45.8,34.7);

	this.instance_1 = new lib.копияСимвол9();
	this.instance_1.setTransform(50.8,34.7,1.284,1.284,0,0,0,45.8,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,0,91.7,69.5);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(40.9,34.7,1,1,0,0,0,45.8,34.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,255,0,1)",0,0,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-10.8,122,94);


// stage content:



(lib.garage240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(120.1,66,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(57.2,222.9,1.935,1.935,90,0,0,17.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 2
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(183.4,221.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 42
	this.instance_3 = new lib.Символ42();
	this.instance_3.setTransform(60,335.6,0.97,0.97,0,0,0,45.8,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 42
	this.instance_4 = new lib.Символ42();
	this.instance_4.setTransform(178.2,335.6,0.97,0.97,0,0,0,45.8,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// backnew.jpg
	this.instance_5 = new lib.backnew();
	this.instance_5.setTransform(-204,0,1.027,1.264);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,200,661.1,407.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
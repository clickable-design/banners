(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/natasha02.png", id:"natasha02"},
		{src:"images/natasha04.png", id:"natasha04"},
		{src:"images/natasha07.png", id:"natasha07"},
		{src:"images/natasha11.png", id:"natasha11"},
		{src:"images/natasha14.png", id:"natasha14"},
		{src:"images/natasha17.png", id:"natasha17"},
		{src:"images/natasha21.png", id:"natasha21"},
		{src:"images/ngnc01.png", id:"ngnc01"},
		{src:"images/ngnc02.png", id:"ngnc02"},
		{src:"images/olol.png", id:"olol"},
		{src:"images/plll.png", id:"plll"},
		{src:"images/qwe.png", id:"qwe"},
		{src:"images/rop.png", id:"rop"},
		{src:"images/rope.png", id:"rope"}
	]
};



// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,797,543);


(lib.natasha02 = function() {
	this.initialize(img.natasha02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,184);


(lib.natasha04 = function() {
	this.initialize(img.natasha04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,175);


(lib.natasha07 = function() {
	this.initialize(img.natasha07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,250);


(lib.natasha11 = function() {
	this.initialize(img.natasha11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,75);


(lib.natasha14 = function() {
	this.initialize(img.natasha14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,126);


(lib.natasha17 = function() {
	this.initialize(img.natasha17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,107);


(lib.natasha21 = function() {
	this.initialize(img.natasha21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,99);


(lib.ngnc01 = function() {
	this.initialize(img.ngnc01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,122);


(lib.ngnc02 = function() {
	this.initialize(img.ngnc02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.olol = function() {
	this.initialize(img.olol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,210);


(lib.plll = function() {
	this.initialize(img.plll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,518);


(lib.qwe = function() {
	this.initialize(img.qwe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,68);


(lib.rop = function() {
	this.initialize(img.rop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,130);


(lib.rope = function() {
	this.initialize(img.rope);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,16);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ngnc01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,179,122);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ngnc02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("AA1j5QhbDYAtCuQAQA4AeA1IhphpAA1D6IguhtAA1D6IAAiW");
	this.shape.setTransform(5.3,25);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AuEhvIAtAAIAACoQAPgBAKgIQALgJAGgLQAHgMADgOQADgMAAgMQAAgQgEgNQgDgMgHgLQgGgLgJgKIgSgQIA9AAQAPASAIAXQAFANACANQADANAAAOQAAASgFASQgFASgKAQQgJAPgOANQgOAMgSAIQgPAHgUABIglADgAMhBnIAniVIgQhBIBNAAIg3DWgAHpBnIAAjWIAtAAIAACpIA6AAIAAipIAsAAIAACpIA6AAIAAipIAtAAIAADWgAGDBnIAAjWIAtAAIAADWgAEMBnIAAjWIAtAAIAADWgAC6BnIgShhIg8AAIgSBhIgrAAIAojWIAqAAIgNBMIArAAIgNhMIAsAAIApDWgAgIBnIg/jIIAADIIgtAAIAAjWIBYAAIBCDWgAjaBnIAAjWIAtAAIAADWgAlNBnIAAjWIA+AAIgRAbIAAC7gAmfBnIgnjWIArAAIApDWgAoqBnIAojWIApAAIgmDWgArEBnIAAjWIAtAAIAACrIBPAAIAAArg");
	this.shape.setTransform(90.1,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AMcB7Ig3jbIAtAAIAvDHIAzjHIAtAAIg4DbgAKaB7IAAjbIAtAAIAADbgAI0B7IAAjbIAsAAIAADbgAHNB7IAAjbIAtAAIAADbgAFnB7IAAgBIhKAAIAAABIgtAAIAAjbIAtAAIAACvIBKAAIAAivIAtAAIAADbgAB2B7IgJg1IgIA1IgqAAIAtjuIACgEQACgDADAAQAAAAABAAQABABAAAAQABAAAAABQABAAAAABIACAEIAtDugAiQB7IAAjbIAtAAIAACrIA+irIAuAAIhHDJIAGASgAj2B7IAAhVIg1BVIg+AAIAAjbIAtAAIAAChIBzixIAADrgAniB7IgKg1IgJA1IgpAAIAtjuIACgEQACgDADAAQAAAAABAAQABABAAAAQABAAAAABQABAAAAABIACAEIAtDugArgB7IAAjbIB0AAIAAArIhHAAIAACEIBHAAIAAArIhHAAIAAABgAtrB7IgDgDQATgVANgaQANgaAAgdQAAgMgDgJQgDgMgHgJQgGgKgKgHQgJgIgMgDIAACvIgtAAIAAjlQAdAAAaAIQANAEALAGQALAGAKAIQATAQAMAXQALAXAAAdQAAAbgJAaQgKAZgPAWIAGAGg");
	this.shape_1.setTransform(92.9,12.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,47.2);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AugjaQAdAAAaAIQANAEALAGQALAGAKAIQATAPAMAYQALAXAAAeQAAAcgJAZQgKAZgPAUIAGAGQAPASAIAXQAFANACANQADAOAAANQAAAUgFASQgFASgKAQQgJAPgOANQgOAMgSAIQgPAHgUACIglACgAtzC0QAPgBAKgIQALgIAGgMQAHgMADgOQADgOAAgMQAAgQgEgMQgDgNgHgLQgGgKgJgKIgVgUQATgSANgaQANgaAAgdQAAgMgDgMQgDgLgHgKQgGgKgKgHQgJgHgMgEgAMFDjIAniYIhHkcIAtAAIAvDJIAzjJIAtAAIhvG0gAHNDjIAAm0IAtAAIAAGGIA6AAIAAmGIAsAAIAAGGIA6AAIAAmGIAtAAIAAG0gAFnDjIAAjZIhKAAIAADZIgtAAIAAm0IAtAAIAACxIBKAAIAAixIAtAAIAAG0gACeDjIgShiIg8AAIgSBiIgrAAIBVnHIACgEQACgCADAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAIACAEIBWHHgACDBWIgWh/IgVB/IArAAgAgkDjIg/jLIAADLIgtAAIAAm0IAtAAIAACtIA+itIAuAAIhHDMIBIDogAj2DjIAAksIhGBuIAAC+IgtAAIAAm0IAtAAIAACjIBziyIAAHDgAm7DjIgxkMIgvEMIgrAAIBVnHIACgEQACgCADAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAIACAEIBWHHgArgDjIAAm0IB0AAIAAAsIhHAAIAACFIBHAAIAAAqIhHAAIAACtIBPAAIAAAsg");
	this.shape.setTransform(92.9,23.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,47.2);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("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");
	this.shape.setTransform(83.7,25.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,167.4,50.3);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.plll();
	this.instance.setTransform(-1.5,-8.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-8.6,144,518);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AnwJNQgbgngKgIQgJgHBfh6QBfh7ANg5QANg5Aeh0Qg6AkAKgHQAKgHg4gcQgRgZgHglQgGgmgGhXQgGhXAig8QAig9AigUQAhgUAWgGQAWgGCmgiIgIACQhOAZgjAOQgjAPgcAUQgcAVgiApQgeAmgMBPQgFAlAABNQAAANAQA2IALAnQAAgJAQATQAQATANh+QANiBAggtQAgguAqgdQAqgeBZgfICdg3QBHgYCfhUQB9hBBRglQghAUg5AmQiFBZiUBtQiVBshSBeQhUBegIBDQgIBBgZBjQgZBigNBIIgKAkQgKAegOAgQgOAggqAYQgrAZgUANQgUANADAdQADAcgFAZIgCAJIgLAAQg5AAgYgkgAmbjCIAAAAIAAAAg");
	this.shape.setTransform(54.4,64.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,1.9,107.1,125.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("A5nBOMAzPgCb");
	this.shape.setTransform(165.4,124.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 1
	this.instance = new lib.rop();
	this.instance.setTransform(0,132,1,1,-26.8);

	this.instance_1 = new lib.olol();
	this.instance_1.setTransform(-23.3,139.3,1.103,0.387,0,-22.7,-16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320.2,248);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("A4rDtMAxXgHZ");
	this.shape.setTransform(157.1,132.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Слой 1
	this.instance = new lib.rop();
	this.instance.setTransform(0,156.2,1,1,-32.2);

	this.instance_1 = new lib.olol();
	this.instance_1.setTransform(-29.6,161.1,1,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317.2,266.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("A2wqCMAthAUF");
	this.shape.setTransform(145.7,64.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance = new lib.rope();
	this.instance.setTransform(283.3,125.7);

	this.instance_1 = new lib.rop();

	this.instance_2 = new lib.natasha17();
	this.instance_2.setTransform(242,75.2);

	this.instance_3 = new lib.olol();
	this.instance_3.setTransform(-14,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341,182.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("AzbvgMAm3AfB");
	this.shape.setTransform(158.4,99.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance = new lib.rope();
	this.instance.setTransform(278.7,192.6,1,1,30);

	this.instance_1 = new lib.rop();
	this.instance_1.setTransform(33.7,0,1,1,15);

	this.instance_2 = new lib.natasha02();
	this.instance_2.setTransform(211.6,70.6);

	this.instance_3 = new lib.olol();
	this.instance_3.setTransform(36.8,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:33.7}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:36.4}},{t:this.instance}]},1).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,402.6,254.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AvzP+MAAPggJIfYAOMgAPAgJg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.rope();
	this.instance.setTransform(0,2.1,0.709,1,-5.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,18.1);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,215.4).s().p("A6OFEQq4iGAAi+QAAi9K4iHQK3iHPXAAQPXAAK4CHQK4CHAAC9QAAC+q4CGQq4CHvXAAQvXAAq3iHg");
	this.shape.setTransform(237.5,46);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,475,92);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.qwe();
	this.instance.setTransform(0,0,0.132,0.156);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,10.6);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.qwe();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,68);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.natasha04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146,175);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.natasha14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,105,126);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.natasha21();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,99);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.natasha11();
	this.instance.setTransform(-39,-37.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-37.5,78,75);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 45
	this.instance = new lib.Символ45();
	this.instance.setTransform(138.6,39.3,1,1,0,0,0,72,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15,x:139.4},9).to({rotation:0,x:138.6},20,cjs.Ease.get(1)).wait(1));

	// Символ 46
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(150.6,42.1,1,1,0,0,0,89.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-4,x:145.6,y:44.6},9).to({rotation:0,x:150.6,y:42.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.1,-21.7,179,124.8);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(5.3,25,1,1,0,0,0,5.3,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.5,x:7.5,y:29.2},4,cjs.Ease.get(-1)).to({rotation:-15,x:10.3,y:34.6},5,cjs.Ease.get(1)).to({regX:5.4,rotation:-8.6,x:8.3,y:30.6},5,cjs.Ease.get(-1)).to({regX:5.3,rotation:0,x:5.3,y:25},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(92.9,23.6,1,1,0,0,0,92.9,23.6);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(90.9,25.1,1,1,0,0,0,92.9,23.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,0,187.9,48.7);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AJfB/IAAgrIinAAIAAArIghAAIgChTIAmAAIgBiqIArAAIAAAHIABCjIBQAAIAAiqIAtAAIAACqIAiAAIAABTgAoLBAQgOgMgMgNQgLgOgKgPQgSgbgKgjQgHgagCgcIAAgQIAAgEIAtAAIAAAEIABAQQABAUAFARQAGAaANAXQAOAUATASQATASAYAPIAAAyQgkgOgbgXgAAGh+IB1AAQAGAHAEAIIADAFQAQAfAAAoQAAAqgTAgQgTAiglAQQgPAGgUACIgkACgAAzAsQAPAAAKgIQAKgJAHgMQAGgMADgLQADgOAAgNQAAgMgDgOQgDgOgGgMQgGgMgKgHIgBgBQgKgIgPgBgAmhh+IAtAAIAACqQAPAAAKgIQALgJAGgMQAHgMADgLQADgOAAgNQAAgPgEgNQgDgNgHgLQgGgKgIgJIgBgBIgVgTIA+AAQAIAKAGAKQAGALAFAMQAFAOACANQADANAAAOQAAATgFARQgFARgKAQQgJAPgOANQgOAMgSAJQgPAGgUACIglACgAEHBeQgLgEgLgJQgLgKgKgQQgJgPgHgZQgHgXgEgkQgDgbgBgjIAAgTIAAgBIA1AAIACBsQADASAFAPQAFAQAJAKQAIAKAMAAQANAAAIgKQAIgKAFgQQAFgPADgSIAAhsIA3AAIAAABIAAATQgBAjgEAbQgDAjgHAXQgHAZgJAQQgKAQgKAKQgLAJgLAEQgMADgMABQgLgBgMgDgAifBeQgMgEgLgJQgLgKgJgQQgKgPgHgZQgHgXgEgkQgDgbAAgjIgBgTIAAgBIA1AAIADBsQACASAGAPQAFAQAIAKQAJAKAMAAQAMAAAJgKQAIgKAFgQQAFgPACgSIAAhsIA3AAIAAABIAAATQgBAjgDAbQgEAjgHAXQgHAZgJAQQgJAQgLAKQgKAJgMAEQgMADgLABQgMgBgLgDgAr5BeQgLgEgLgJQgLgKgKgQQgJgPgHgZQgHgXgEgkQgDgbgBgjIAAgTIAAgBIA1AAIACBsQADASAFAPQAFAQAJAKQAIAKAMAAQANAAAIgKQAIgKAFgQQAFgPADgSIAAhsIA3AAIAAABIAAATQgBAjgEAbQgDAjgHAXQgHAZgJAQQgKAQgKAKQgLAJgLAEQgMADgMABQgLgBgMgDgAMXBbIAAjZIAtAAIAADZgAKkBbIAAjZIA/AAIgSAdIAAC8g");
	this.shape.setTransform(83.7,36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJfD7IAAgGIAmAAIAAAGgAGXD6IAAgFIAhAAIAAAFgAMXgIIAAhTIg0BTIg/AAIAAjbIAtAAIAACjIBziyIAADqgAI2gIIAAikQgUAPgPATQgPAUgLAWQgKAWgFAYQgEASgBATIAAAFIgrAAIAAgBIAAgEQABgUACgSQADgVAGgSQAFgSAJgRQAIgQALgPQAWgdAfgYQAVgPAygaIAADygAFIgIIgBhqQgCgUgFgQQgFgQgJgKQgIgKgMAAQgNAAgIAKQgJAKgFAQQgFAQgCAUIgCBqIg1AAIAAgFQAAggACgaQACgcAEgWQAJgsAOgZQAOgYARgJQARgJASAAQARAAARAJQASAJANAYQAHAMAGARQAGASAEAWQAIApABBDIAAAFgAAGgIIAAjbIB0AAIAAAsIhHAAIAACFQAOADAMAFQAZAKARATIAEAFgAhfgIIAAhqQgDgUgFgQQgFgQgIgKQgJgKgMAAQgMAAgJAKQgIAKgFAQQgFAQgDAUIgCBqIg1AAIAAgFQAAggACgaQADgcAEgWQAIgsAOgZQAOgYASgJQARgJARAAQARAAASAJQARAJAOAYQAHAMAFARQAGASAEAWQAJApAABDIAAAFgAlvgIIAAgBIAEgEQARgTALgXQANgaAAgdQAAgMgDgMQgDgLgHgKQgGgKgKgHQgJgHgMgEIAACvIgtAAIAAjkQAdAAAaAIQANAEALAGQALAGAKAIQATAPAMAYQALAXAAAeQAAAcgJAZQgJAYgPAWIgBABIAEAEgApfgIIAAgFQAAgOACgOQACgSAFgSQAKgjATgfQATgeAcgZQAOgMAQgKQAQgKASgIIAAAzQgZANgUAUQgYAbgJAQQgPAhgEASQgGAXAAAYIgBAFgAq4gIIgBhqQgCgUgFgQQgFgQgJgKQgIgKgMAAQgNAAgIAKQgJAKgFAQQgFAQgCAUIgCBqIg1AAIAAgFQAAggACgaQACgcAEgWQAJgsAOgZQAOgYARgJQARgJASAAQARAAARAJQASAJANAYQAHAMAGARQAGASAEAWQAIApABBDIAAAFg");
	this.shape_1.setTransform(83.7,25.1);

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(85.7,27.4,1,1,0,0,0,83.7,25.1);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169.4,52.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.setTransform(97.8,88.4,1,1,0,0,0,92.9,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:93.9},14,cjs.Ease.get(1)).to({scaleY:0.76,y:77.6},3,cjs.Ease.get(-1)).to({scaleY:1,y:88.4},4).wait(1));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(87.7,41.9,1,1,0,0,0,83.7,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:35.9},14,cjs.Ease.get(1)).to({scaleY:0.76,y:52.3},3,cjs.Ease.get(-1)).to({scaleY:1,y:41.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,16.8,187.9,96.7);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(445.2,236.5,1.095,1.619,0,-56.7,0,72,243.5);
	this.instance.alpha = 0.469;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(693.9,203.5,1.972,0.948,0,14.5,0,71.9,243.5);
	this.instance_1.alpha = 0.469;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(283.8,226,1.972,1.096,0,-32.1,0,71.9,243.5);
	this.instance_2.alpha = 0.469;
	this.instance_2.compositeOperation = "lighter";

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-27.9,900.8,500.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(51.8,75.6,1,1,0,0,0,56.2,85.4);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.setTransform(39,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,75);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(8.6,17.4,1,1,0,0,0,4.5,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[8.7,17.6,5.7,22.6,6.7,28.6,6.7,46.1,6.7,63.6,47.9,105,111,115.6,148.3,121.9,183.5,110.9,199.1,106.1,213.5,97.3,247.7,76.5,279.2,52.6,296.4,39.6,316,30.7,340.9,19.4,365.1,6.8,409.2,-16.3,458.5,-19.1,480.9,-20.4,503.2,-18.4,527.9,-16.1,543.4,4.6,547.5,31.8,537.2,56.6,528.7,77,517.8,96.1,509,111.7,496,124.2,475,144.1,450.2,159.7,422.6,177,391.5,186.5,360.5,195.9,328.3,198.9,286.9,202.6,246.8,196.2,205.9,189.6,167.1,175.1,125.3,159.5,83.8,142.4,69.5,136.5,53.8,135.5,25.1,133.7,0.6,144.4,-4.6,146.7,-8.8,150.9,-23.9,165.9,-26.6,186.5,-27.3,191.9,-27.3,197.4,-14.7,228,15.6,243.6,28.6,250.2,41.6,256.4,56.8,263.5,72.4,269.9,90.1,277.1,109.6,277.5,127,277.8,144.7,278.7,214.2,282.1,283.3,277.6,335.5,274.2,384.6,259.1]}},119).to({guide:{path:[384.6,259.1,413.5,250.2,441.3,237.3,513.5,203.7,580.9,161.1,601.5,148,623.6,136.9,628.3,134.5,633.4,133.6,656.8,160.3,659,197.3,660.1,216.3,656.6,234.8,654.4,246.3,649.4,257.4,639.9,278.7,624,295.9,601.3,320.8,573.4,339.8,529.4,369.6,479.6,388.2,426.7,408,371.5,419.7,327.9,428.9,283.5,431.6,206.6,436.4,133.5,412.6,110.9,405.3,87.6,404.3,63.7,398.3,39.7,392.3,28.2,388.3,16.7,384.3,14.7,384.3,12.7,384.3,-6.3,367.8,-25.3,351.3,-34.8,341.8,-45.5,330.5,-56,319.5,-61.9,305.8,-67.2,293.5,-73.2,281.3,-78.3,271.2,-82.6,260.5,-91.8,237.6,-98.8,214.2,-104.9,194.1,-107.6,173.6,-110.2,153.8,-110.1,133.6,-110.1,113.4,-108.4,93.6,-104.7,50.4,-80.4,14.2,-65.3,-8.4,-43.3,-24.4,-43.3,-25.9,-43.3,-27.4,-8.2,-50.6,31.8,-61.1,49.4,-65.7,67.8,-68,85.5,-70.3,103,-73.7,120.6,-77.1,138.6,-77.9,169.6,-79.4,200,-74.7,207.5,-73.5,214.8,-70.8,230.3,-64.8,239.1,-48.7,244.1,-39.5,245.6,-29.4,249.9,1,226.2,18.6,212.8,28.5,196.4,30.1]}},100).to({guide:{path:[196.2,29.9,192.4,30.3,188.5,30.2,174,30,160.1,25.5,151.4,22.8,142.6,19.9,138,19.9,133.5,19.9,116,13.7,98.5,7.6,53.6,12.5,8.7,17.4,8.7,17.4,8.7,17.4]}},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,12.1,9,10.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(646,-167,0.426,0.426,0,0,0,34,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.148},15).to({alpha:1},14).to({alpha:0.148},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(631.5,-181.5,29,29);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(39,37.5,1,1,0,0,0,39,37.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ28(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-8,107.1,125.2);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(302.3,195.3,1,1,0,0,0,158.6,133.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ26(), 3);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(98.5,194.5,1,1,0,0,0,12.1,9);
	this.instance_1.alpha = 0.52;

	this.instance_2 = new lib.rope();
	this.instance_2.setTransform(126,218.2,0.603,1,-30);

	// Слой 1
	this.instance_3 = new lib.natasha07();

	// Слой 3
	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(255.4,187.1,1,1,0,0,0,160.1,124);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Символ27(), 3);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,460.9,328.4);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2
	this.leg = new lib.Символ22();
	this.leg.setTransform(-10.3,56.7,1,1,0,0,0,201.3,127.2);
	new cjs.ButtonHelper(this.leg, 0, 1, 2, false, new lib.Символ22(), 3);

	this.addChild(this.leg);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-211.6,-71.7,402.6,255.8);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(-71.5,15.9,1,1,0,0,0,170.5,91);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ25(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-243,-76.1,342,183.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.sisa = new lib.Символ10();
	this.sisa.setTransform(38.4,36.9,1,1,0,0,0,39,37.5);

	this.timeline.addTween(cjs.Tween.get(this.sisa).to({scaleX:1.01,scaleY:1.01,skewY:-0.3,x:38.5},9,cjs.Ease.get(-1)).to({regY:37.7,scaleX:1.05,scaleY:1.02,skewX:0.4,skewY:-1.6,x:39,y:36.8},10,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.02,skewX:0.3,skewY:-1,x:38.8},10,cjs.Ease.get(-1)).to({regY:37.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:38.4,y:36.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,78,75);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(5.3,25,1,1,0,0,0,5.3,25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(318.5,71.2,1,1,0,0,0,322.4,81.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,6,187.9,96.7);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(533.5,66.6,0.602,0.602,19.3,0,0,4.5,5.2);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(483.5,49.1,0.602,0.602,19.3,0,0,4.4,5.2);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(433,49.7,0.602,0.602,-10.7,0,0,4.4,5.2);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(404.7,55.1,0.602,0.602,-10.7,0,0,4.5,5.2);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(364.2,54,0.602,0.602,19.3,0,0,4.5,5.3);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Символ15();
	this.instance_5.setTransform(314.3,36.5,0.602,0.602,19.3,0,0,4.5,5.2);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.Символ15();
	this.instance_6.setTransform(263.8,37.1,0.602,0.602,-10.7,0,0,4.5,5.2);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Символ15();
	this.instance_7.setTransform(235.4,42.6,0.602,0.602,-10.7,0,0,4.5,5.4);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.Символ15();
	this.instance_8.setTransform(329.6,36.5,0.602,0.602,7.6,0,0,4.5,5.2);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.Символ15();
	this.instance_9.setTransform(277.1,29.7,0.602,0.602,7.6,0,0,4.4,5.3);
	this.instance_9.compositeOperation = "lighter";

	this.instance_10 = new lib.Символ15();
	this.instance_10.setTransform(227.8,40.5,0.602,0.602,-22.4,0,0,4.4,5.2);
	this.instance_10.compositeOperation = "lighter";

	this.instance_11 = new lib.Символ15();
	this.instance_11.setTransform(201.1,51.5,0.602,0.602,-22.4,0,0,4.5,5.2);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.Символ15();
	this.instance_12.setTransform(161.4,58.6,0.602,0.602,7.6,0,0,4.5,5.2);
	this.instance_12.compositeOperation = "lighter";

	this.instance_13 = new lib.Символ15();
	this.instance_13.setTransform(108.9,51.6,0.602,0.602,7.6,0,0,4.5,5.2);
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.Символ15();
	this.instance_14.setTransform(59.5,62.5,0.602,0.602,-22.4,0,0,4.5,5.2);
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.Символ15();
	this.instance_15.setTransform(32.8,73.5,0.602,0.602,-22.4,0,0,4.5,5.3);
	this.instance_15.compositeOperation = "lighter";

	this.instance_16 = new lib.Символ15();
	this.instance_16.setTransform(483.2,36.6,0.791,0.791,15,0,0,4.5,5.3);
	this.instance_16.compositeOperation = "lighter";

	this.instance_17 = new lib.Символ15();
	this.instance_17.setTransform(416,18.5,0.791,0.791,15,0,0,4.5,5.2);
	this.instance_17.compositeOperation = "lighter";

	this.instance_18 = new lib.Символ15();
	this.instance_18.setTransform(349.8,24.3,0.791,0.791,-15,0,0,4.4,5.2);
	this.instance_18.compositeOperation = "lighter";

	this.instance_19 = new lib.Символ15();
	this.instance_19.setTransform(313.2,34.1,0.791,0.791,-15,0,0,4.5,5.2);
	this.instance_19.compositeOperation = "lighter";

	this.instance_20 = new lib.Символ15();
	this.instance_20.setTransform(260.2,36.5,0.791,0.791,15,0,0,4.5,5.2);
	this.instance_20.compositeOperation = "lighter";

	this.instance_21 = new lib.Символ15();
	this.instance_21.setTransform(192.9,18.6,0.791,0.791,15,0,0,4.5,5.3);
	this.instance_21.compositeOperation = "lighter";

	this.instance_22 = new lib.Символ15();
	this.instance_22.setTransform(126.8,24.3,0.791,0.791,-15,0,0,4.4,5.2);
	this.instance_22.compositeOperation = "lighter";

	this.instance_23 = new lib.Символ15();
	this.instance_23.setTransform(90.2,34.2,0.791,0.791,-15,0,0,4.5,5.3);
	this.instance_23.compositeOperation = "lighter";

	this.instance_24 = new lib.Символ15();
	this.instance_24.setTransform(499.3,42.8,0.602,0.602,19.3,0,0,4.4,5.2);
	this.instance_24.compositeOperation = "lighter";

	this.instance_25 = new lib.Символ15();
	this.instance_25.setTransform(449.3,25.4,0.602,0.602,19.3,0,0,4.5,5.3);
	this.instance_25.compositeOperation = "lighter";

	this.instance_26 = new lib.Символ15();
	this.instance_26.setTransform(398.8,26,0.602,0.602,-10.7,0,0,4.4,5.2);
	this.instance_26.compositeOperation = "lighter";

	this.instance_27 = new lib.Символ15();
	this.instance_27.setTransform(370.5,31.3,0.602,0.602,-10.7,0,0,4.5,5.2);
	this.instance_27.compositeOperation = "lighter";

	this.instance_28 = new lib.Символ15();
	this.instance_28.setTransform(330,30.2,0.602,0.602,19.3,0,0,4.4,5.2);
	this.instance_28.compositeOperation = "lighter";

	this.instance_29 = new lib.Символ15();
	this.instance_29.setTransform(280.1,12.8,0.602,0.602,19.3,0,0,4.5,5.2);
	this.instance_29.compositeOperation = "lighter";

	this.instance_30 = new lib.Символ15();
	this.instance_30.setTransform(229.6,13.3,0.602,0.602,-10.7,0,0,4.4,5.2);
	this.instance_30.compositeOperation = "lighter";

	this.instance_31 = new lib.Символ15();
	this.instance_31.setTransform(201.3,18.7,0.602,0.602,-10.7,0,0,4.5,5.2);
	this.instance_31.compositeOperation = "lighter";

	this.instance_32 = new lib.Символ15();
	this.instance_32.setTransform(295.5,12.8,0.602,0.602,7.6,0,0,4.5,5.2);
	this.instance_32.compositeOperation = "lighter";

	this.instance_33 = new lib.Символ15();
	this.instance_33.setTransform(242.9,5.9,0.602,0.602,7.6,0,0,4.4,5.3);
	this.instance_33.compositeOperation = "lighter";

	this.instance_34 = new lib.Символ15();
	this.instance_34.setTransform(193.6,16.8,0.602,0.602,-22.4,0,0,4.4,5.2);
	this.instance_34.compositeOperation = "lighter";

	this.instance_35 = new lib.Символ15();
	this.instance_35.setTransform(167,27.7,0.602,0.602,-22.4,0,0,4.5,5.2);
	this.instance_35.compositeOperation = "lighter";

	this.instance_36 = new lib.Символ15();
	this.instance_36.setTransform(127.1,34.9,0.602,0.602,7.6,0,0,4.4,5.3);
	this.instance_36.compositeOperation = "lighter";

	this.instance_37 = new lib.Символ15();
	this.instance_37.setTransform(74.7,27.9,0.602,0.602,7.6,0,0,4.5,5.2);
	this.instance_37.compositeOperation = "lighter";

	this.instance_38 = new lib.Символ15();
	this.instance_38.setTransform(25.4,38.7,0.602,0.602,-22.4,0,0,4.5,5.2);
	this.instance_38.compositeOperation = "lighter";

	this.instance_39 = new lib.Символ15();
	this.instance_39.setTransform(-1.3,49.7,0.602,0.602,-22.4,0,0,4.5,5.2);
	this.instance_39.compositeOperation = "lighter";

	this.instance_40 = new lib.Символ15();
	this.instance_40.setTransform(449,12.9,0.791,0.791,15,0,0,4.5,5.3);
	this.instance_40.compositeOperation = "lighter";

	this.instance_41 = new lib.Символ15();
	this.instance_41.setTransform(381.8,-5.2,0.791,0.791,15,0,0,4.5,5.2);
	this.instance_41.compositeOperation = "lighter";

	this.instance_42 = new lib.Символ15();
	this.instance_42.setTransform(315.6,0.6,0.791,0.791,-15,0,0,4.4,5.2);
	this.instance_42.compositeOperation = "lighter";

	this.instance_43 = new lib.Символ15();
	this.instance_43.setTransform(279.1,10.4,0.791,0.791,-15,0,0,4.5,5.2);
	this.instance_43.compositeOperation = "lighter";

	this.instance_44 = new lib.Символ15();
	this.instance_44.setTransform(226,12.9,0.791,0.791,15,0,0,4.5,5.3);
	this.instance_44.compositeOperation = "lighter";

	this.instance_45 = new lib.Символ15();
	this.instance_45.setTransform(158.8,-5.1,0.791,0.791,15,0,0,4.5,5.3);
	this.instance_45.compositeOperation = "lighter";

	this.instance_46 = new lib.Символ15();
	this.instance_46.setTransform(92.7,0.6,0.791,0.791,-15,0,0,4.5,5.2);
	this.instance_46.compositeOperation = "lighter";

	this.instance_47 = new lib.Символ15();
	this.instance_47.setTransform(56,10.4,0.791,0.791,-15,0,0,4.5,5.2);
	this.instance_47.compositeOperation = "lighter";

	this.addChild(this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,537,83.3);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.setTransform(-254.3,97.3,0.272,0.728,0,4.5,-175.5,645.1,-167);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},50).wait(93));

	// Символ 12
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(417.7,214,0.272,0.729,0,-10.5,169.5,33.8,33.9);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({_off:true},50).wait(53));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(-256.5,392.5,0.729,0.729,0,0,0,34,34);
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).to({_off:true},50).wait(12));

	// Символ 12
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(-524.9,298.5,0.729,0.729,0,0,0,34,34);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({_off:true},50).wait(70));

	// Символ 12
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(-700.9,164.5,0.729,0.729,0,0,0,34,34);
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(93).to({_off:false},0).wait(50));

	// Символ 12
	this.instance_5 = new lib.Символ12();
	this.instance_5.setTransform(-740.4,273.5,0.729,0.729,0,0,0,34,34);
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).to({_off:true},50).wait(34));

	// Символ 12
	this.instance_6 = new lib.Символ12();
	this.instance_6.setTransform(-634.4,202.5,0.729,0.729,0,0,0,34,34);
	this.instance_6.compositeOperation = "lighter";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},50).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.2,86.5,9.5,21.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 5
	this.instance = new lib.Символ5();
	this.instance.setTransform(152.2,230.3,1,1,0,0,0,95.5,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:1.5,x:154.7},19,cjs.Ease.get(-1)).to({scaleY:1,skewX:3.2,x:157.3},20,cjs.Ease.get(1)).to({scaleY:1,skewX:1.5,x:154.7},20,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:152.2,y:229.5},20,cjs.Ease.get(1)).wait(1));

	// Символ 1
	this.sisi = new lib.Символ1();
	this.sisi.setTransform(409.7,146.8,1.044,1.072,0,0,0,39,37.5);

	this.timeline.addTween(cjs.Tween.get(this.sisi).to({regX:39.1,scaleY:1.07,skewX:-0.8,x:406.8,y:146.7},19,cjs.Ease.get(-1)).to({skewX:-1.9,x:403.8,y:146.8},20,cjs.Ease.get(1)).to({regX:39,skewX:-0.8,x:406.7,y:146.7},20,cjs.Ease.get(-1)).to({scaleY:1.07,skewX:0,x:409.7,y:146.8},20,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(313.8,225.8,1,1,0,0,0,73,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1,skewX:1.5,x:316.4,y:225.9},19,cjs.Ease.get(-1)).to({scaleY:1,skewX:3.2,x:319.2,y:225.8},20,cjs.Ease.get(1)).to({scaleY:1,skewX:1.5,x:316.6},20,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:313.8},20,cjs.Ease.get(1)).wait(1));

	// Символ 3
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(451.5,51.5,1,1,0,0,0,39,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:-5.5,skewY:-4.6,x:444.4,y:53.3},19,cjs.Ease.get(-1)).to({regX:39.1,scaleY:1,skewX:-11.6,skewY:-9.7,x:436.8,y:55.2},20,cjs.Ease.get(1)).to({scaleY:1,skewX:-5.8,skewY:-4.8,x:444.1,y:53.4},20,cjs.Ease.get(-1)).to({regX:39,skewX:0,skewY:0,x:451.5,y:51.5},20,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.telo = new lib.Символ7();
	this.telo.setTransform(460.5,203.5,1,1,0,0,0,102.5,125);

	this.timeline.addTween(cjs.Tween.get(this.telo).to({skewX:-0.8,x:458.5},19,cjs.Ease.get(-1)).to({scaleY:1,skewX:-1.9,x:456.4},20,cjs.Ease.get(1)).to({scaleY:1,skewX:-0.8,x:458.4},20,cjs.Ease.get(-1)).to({skewX:0,x:460.5},20,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(323,160.5,1,1,0,0,0,52.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:52.6,rotation:-3,x:319.8,y:164.8},19,cjs.Ease.get(-1)).to({regX:52.5,rotation:-6.4,x:316.2,y:169.2},20,cjs.Ease.get(1)).to({rotation:-3.1,x:319.6,y:164.9},20,cjs.Ease.get(-1)).to({rotation:0,x:323,y:160.5},20,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(231.5,247.5,1,1,0,0,0,49.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1.04,skewX:-8.5,skewY:-2.5,x:241.8,y:249.2},19,cjs.Ease.get(-1)).to({regX:49.6,scaleX:1.01,scaleY:1.08,skewX:-17.5,skewY:-5.2,x:252.6,y:250.8},20,cjs.Ease.get(1)).to({regY:53.6,scaleX:1,scaleY:1.04,skewX:-8.8,skewY:-2.5,x:242.1,y:249.3},20,cjs.Ease.get(-1)).to({regX:49.5,regY:53.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:231.5,y:247.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.9,2,973.8,404.9);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(5.3,25,1,1,0,0,0,5.3,25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(732.6,217,1,1,45,0,0,267.8,39.1);
	this.instance.alpha = 0.141;

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(256.7,187,1,1,-26.8,0,0,267.8,39.1);
	this.instance_1.alpha = 0.219;

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(482.7,182.7,1,1,0,0,0,267.8,39.1);
	this.instance_2.alpha = 0.398;

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.2,38,875.4,395.6);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ19();
	this.instance.setTransform(301.5,142.8,1,1,0,0,0,475.4,217);

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(115.4,209.4,1,1,0,0,0,-284.2,107.8);

	// Слой 4
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(335.4,432.1,0.629,0.629,0,0,0,237.5,46);

	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(428.4,432.1,0.629,0.629,0,0,0,237.5,46);

	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(364.6,427.1,0.629,0.629,0,0,0,237.5,46);

	// Слой 1
	this.instance_5 = new lib.fon();
	this.instance_5.setTransform(660.5,2.1,0.829,0.834,0,0,-179.8);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.7,-36.2,875.4,497.3);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.girl = new lib.Символ8();
	this.girl.setTransform(198.7,144.7,0.884,0.884,0,0,0,281.4,165.7);

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(231.7,126.2,4.036,2.406,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ21(), 3);

	this.addChild(this.instance,this.girl);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-187,-123.3,860.8,498.9);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.arr = new lib.Символ42();
	this.arr.setTransform(366.3,145.6,1.189,1,0,-30,150,5.4,25);

	this.arr_1 = new lib.Символ42();
	this.arr_1.setTransform(6.3,97.5,1.189,1,0,0,-180,5.4,24.9);

	this.arr_2 = new lib.Символ42();
	this.arr_2.setTransform(189.3,25.7,1,1,-15,0,0,5.3,25.1);

	this.addChild(this.arr_2,this.arr_1,this.arr);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-1.2,387.1,173);


// stage content:
(lib.ladyblack640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.baba.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.fon.addEventListener("click", fl_ClickToGoToWebPage1);
		
		function fl_ClickToGoToWebPage1() {
			window.open(clickTAG, "_blank");
		}
		
		//--------------
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.lit.alpha = 0;
		this.noj.alpha = 0;
		
		//--------------
		
		this.baba.addEventListener("mouseover", fl_girlover.bind(this));
		
		function fl_girlover()
		{
			
			this.lit.alpha = 1;
			this.arr.alpha = 0;
			this.noj.alpha = 1;
			this.noj2.alpha = 0;
			
		}
		
		this.baba.addEventListener("mouseout", fl_girlout.bind(this));
		
		function fl_girlout()
		{
			
			this.lit.alpha = 0;
			this.arr.alpha = 1;
			this.noj.alpha = 0;
			this.noj2.alpha = 1;
		} 
		
		//---------------
		
		
		stage.canvas.style.cursor = "none";
		this.noj.mouseEnabled = false;
		this.addEventListener("tick", fl_noj.bind(this));
		
		function fl_noj() {
			this.noj.x = stage.mouseX;
			this.noj.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.noj2 = new lib.Символ44();
	this.noj2.setTransform(517.2,78.3,0.703,0.703,-15,0,0,89.5,61);

	this.noj = new lib.Символ44();
	this.noj.setTransform(801.3,45.3,0.703,0.703,-15,0,0,89.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.noj},{t:this.noj2}]}).wait(1));

	// Слой 6
	this.arr = new lib.Символ43();
	this.arr.setTransform(343.8,138.7,1,1,0,0,0,192.3,85.2);

	this.timeline.addTween(cjs.Tween.get(this.arr).wait(1));

	// Слой 1
	this.baba = new lib.Символ9();
	this.baba.setTransform(303.4,156.8,1,1,-0.4,0,0,223.7,144.3);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// Слой 5
	this.instance = new lib.Символ33();
	this.instance.setTransform(183.2,67.2,1,1,0,0,0,159.2,53.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.lit = new lib.Символ31();
	this.lit.setTransform(256,71.6,1,1,0,0,0,467.8,243.5);

	this.timeline.addTween(cjs.Tween.get(this.lit).wait(1));

	// Слой 2
	this.fon = new lib.Символ11();
	this.fon.setTransform(319.2,98.5,1.029,1,0,0,0,330.2,227.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100.2,-47.3,1131,569);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
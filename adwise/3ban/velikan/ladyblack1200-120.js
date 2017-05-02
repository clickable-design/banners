(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon.jpg?1465476701249", id:"fon"},
		{src:"images/natasha02.png?1465476701249", id:"natasha02"},
		{src:"images/natasha04.png?1465476701249", id:"natasha04"},
		{src:"images/natasha07.png?1465476701249", id:"natasha07"},
		{src:"images/natasha11.png?1465476701249", id:"natasha11"},
		{src:"images/natasha14.png?1465476701249", id:"natasha14"},
		{src:"images/natasha17.png?1465476701249", id:"natasha17"},
		{src:"images/natasha21.png?1465476701249", id:"natasha21"},
		{src:"images/ngnc01.png?1465476701249", id:"ngnc01"},
		{src:"images/ngnc02.png?1465476701249", id:"ngnc02"},
		{src:"images/olol.png?1465476701249", id:"olol"},
		{src:"images/rop.png?1465476701249", id:"rop"},
		{src:"images/rope.png?1465476701249", id:"rope"}
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


(lib.rop = function() {
	this.initialize(img.rop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,130);


(lib.rope = function() {
	this.initialize(img.rope);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,16);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ngnc01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,122);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ngnc02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("AA1j5QhbDYAtCuQAQA4AeA1IAAiWAA1D6IhphpAA1D6Iguht");
	this.shape.setTransform(5.3,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AuEhvIAtAAIAACoQAPgBAKgIQALgJAGgLQAHgMADgOQADgMAAgMQAAgQgEgNQgDgMgHgLQgGgLgJgKIgSgQIA9AAQAPASAIAXQAFANACANQADANAAAOQAAASgFASQgFASgKAQQgJAPgOANQgOAMgSAIQgPAHgUABIglADgAMhBnIAniVIgQhBIBNAAIg3DWgAHpBnIAAjWIAtAAIAACpIA6AAIAAipIAsAAIAACpIA6AAIAAipIAtAAIAADWgAGDBnIAAjWIAtAAIAADWgAEMBnIAAjWIAtAAIAADWgAC6BnIgShhIg8AAIgSBhIgrAAIAojWIAqAAIgNBMIArAAIgNhMIAsAAIApDWgAgIBnIg/jIIAADIIgtAAIAAjWIBYAAIBCDWgAjaBnIAAjWIAtAAIAADWgAlNBnIAAjWIA+AAIgRAbIAAC7gAmfBnIgnjWIArAAIApDWgAoqBnIAojWIApAAIgmDWgArEBnIAAjWIAtAAIAACrIBPAAIAAArg");
	this.shape.setTransform(90.1,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AMcB7Ig3jbIAtAAIAvDHIAzjHIAtAAIg4DbgAKaB7IAAjbIAtAAIAADbgAI0B7IAAjbIAsAAIAADbgAHNB7IAAjbIAtAAIAADbgAFnB7IAAgBIhKAAIAAABIgtAAIAAjbIAtAAIAACvIBKAAIAAivIAtAAIAADbgAB2B7IgJg1IgIA1IgqAAIAtjuIACgEQACgDADAAQAAAAABAAQABABAAAAQABAAAAABQABAAAAABIACAEIAtDugAiQB7IAAjbIAtAAIAACrIA+irIAuAAIhHDJIAGASgAj2B7IAAhVIg1BVIg+AAIAAjbIAtAAIAAChIBzixIAADrgAniB7IgKg1IgJA1IgpAAIAtjuIACgEQACgDADAAQAAAAABAAQABABAAAAQABAAAAABQABAAAAABIACAEIAtDugArgB7IAAjbIB0AAIAAArIhHAAIAACEIBHAAIAAArIhHAAIAAABgAtrB7IgDgDQATgVANgaQANgaAAgdQAAgMgDgJQgDgMgHgJQgGgKgKgHQgJgIgMgDIAACvIgtAAIAAjlQAdAAAaAIQANAEALAGQALAGAKAIQATAQAMAXQALAXAAAdQAAAbgJAaQgKAZgPAWIAGAGg");
	this.shape_1.setTransform(92.9,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,47.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AugjaQAdAAAaAIQANAEALAGQALAGAKAIQATAPAMAYQALAXAAAeQAAAcgJAZQgKAZgPAUIAGAGQAPASAIAXQAFANACANQADAOAAANQAAAUgFASQgFASgKAQQgJAPgOANQgOAMgSAIQgPAHgUACIglACgAtzC0QAPgBAKgIQALgIAGgMQAHgMADgOQADgOAAgMQAAgQgEgMQgDgNgHgLQgGgKgJgKIgVgUQATgSANgaQANgaAAgdQAAgMgDgMQgDgLgHgKQgGgKgKgHQgJgHgMgEgAMFDjIAniYIhHkcIAtAAIAvDJIAzjJIAtAAIhvG0gAHNDjIAAm0IAtAAIAAGGIA6AAIAAmGIAsAAIAAGGIA6AAIAAmGIAtAAIAAG0gAFnDjIAAjZIhKAAIAADZIgtAAIAAm0IAtAAIAACxIBKAAIAAixIAtAAIAAG0gACeDjIgShiIg8AAIgSBiIgrAAIBVnHIACgEQACgCADAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAIACAEIBWHHgACDBWIgWh/IgVB/IArAAgAgkDjIg/jLIAADLIgtAAIAAm0IAtAAIAACtIA+itIAuAAIhHDMIBIDogAj2DjIAAksIhGBuIAAC+IgtAAIAAm0IAtAAIAACjIBziyIAAHDgAm7DjIgxkMIgvEMIgrAAIBVnHIACgEQACgCADAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAIACAEIBWHHgArgDjIAAm0IB0AAIAAAsIhHAAIAACFIBHAAIAAAqIhHAAIAACtIBPAAIAAAsg");
	this.shape.setTransform(92.9,23.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,47.2);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("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");
	this.shape.setTransform(83.7,25.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.4,50.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AnwJNQgbgngKgIQgJgHBfh6QBfh7ANg5QANg5Aeh0Qg6AkAKgHQAKgHg4gcQgRgZgHglQgGgmgGhXQgGhXAig8QAig9AigUQAhgUAWgGQAWgGCmgiIgIACQhOAZgjAOQgjAPgcAUQgcAVgiApQgeAmgMBPQgFAlAABNQAAANAQA2IALAnQAAgJAQATQAQATANh+QANiBAggtQAgguAqgdQAqgeBZgfICdg3QBHgYCfhUQB9hBBRglQghAUg5AmQiFBZiUBtQiVBshSBeQhUBegIBDQgIBBgZBjQgZBigNBIIgKAkQgKAegOAgQgOAggqAYQgrAZgUANQgUANADAdQADAcgFAZIgCAJIgLAAQg5AAgYgkgAmbjCIAAAAIAAAAg");
	this.shape.setTransform(54.4,64.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
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
	this.shape.setTransform(105.2,-5.6,1.36,1,0,0,20.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance = new lib.rope();
	this.instance.setTransform(283.3,125.7);

	this.instance_1 = new lib.rop();
	this.instance_1.setTransform(-80.6,-139,1.36,1,0,0,20.4);

	this.instance_2 = new lib.natasha17();
	this.instance_2.setTransform(242,75.2);

	this.instance_3 = new lib.olol();
	this.instance_3.setTransform(-14,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleX:1.36,skewY:20.4,x:-80.6,y:-139}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleX:1.36,skewY:20.4,x:-80.6,y:-139}},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1,p:{scaleX:1,skewY:0,x:0,y:0}},{t:this.instance},{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-139,421.6,321.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgvlAgLMAAAhAVMBfLAAAMAAABAVg");
	mask.setTransform(330.8,227);

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(660.5,2.1,0.829,0.834,0,0,-179.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.2,21.1,609.3,412);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("A2hzYMAtDAmx");
	this.shape.setTransform(132.8,67);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance = new lib.rope();
	this.instance.setTransform(278.7,192.6,1,1,30);

	this.instance_1 = new lib.rop();
	this.instance_1.setTransform(-11.7,-57,1.207,0.962,0,18.2,22);

	this.instance_2 = new lib.natasha02();
	this.instance_2.setTransform(211.6,70.6);

	this.instance_3 = new lib.olol();
	this.instance_3.setTransform(36.8,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:-11.7,y:-57}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:-8.5,y:-56.4}},{t:this.instance}]},1).to({state:[{t:this.instance_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-57,453.3,311.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AvzP+MAAPggJIfYAOMgAPAgJg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rope();
	this.instance.setTransform(0,2.1,0.709,1,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,18.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,215.4).s().p("A6OFEQq4iGAAi+QAAi9K4iHQK3iHPXAAQPXAAK4CHQK4CHAAC9QAAC+q4CGQq4CHvXAAQvXAAq3iHg");
	this.shape.setTransform(237.5,46);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,475,92);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.natasha04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146,175);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.natasha14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,126);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.natasha21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,99);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.natasha11();
	this.instance.setTransform(-39,-37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.5,x:7.5,y:29.2},9,cjs.Ease.get(-1)).to({rotation:-15,x:10.3,y:34.6},10,cjs.Ease.get(1)).to({regX:5.4,rotation:-8.6,x:8.3,y:30.6},10,cjs.Ease.get(-1)).to({regX:5.3,rotation:0,x:5.3,y:25},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(92.9,23.6,1,1,0,0,0,92.9,23.6);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(90.9,25.1,1,1,0,0,0,92.9,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,187.9,48.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AJfB/IAAgrIinAAIAAArIghAAIgChTIAmAAIgBiqIArAAIAAAHIABCjIBQAAIAAiqIAtAAIAACqIAiAAIAABTgAoLBAQgOgMgMgNQgLgOgKgPQgSgbgKgjQgHgagCgcIAAgQIAAgEIAtAAIAAAEIABAQQABAUAFARQAGAaANAXQAOAUATASQATASAYAPIAAAyQgkgOgbgXgAAGh+IB1AAQAGAHAEAIIADAFQAQAfAAAoQAAAqgTAgQgTAiglAQQgPAGgUACIgkACgAAzAsQAPAAAKgIQAKgJAHgMQAGgMADgLQADgOAAgNQAAgMgDgOQgDgOgGgMQgGgMgKgHIgBgBQgKgIgPgBgAmhh+IAtAAIAACqQAPAAAKgIQALgJAGgMQAHgMADgLQADgOAAgNQAAgPgEgNQgDgNgHgLQgGgKgIgJIgBgBIgVgTIA+AAQAIAKAGAKQAGALAFAMQAFAOACANQADANAAAOQAAATgFARQgFARgKAQQgJAPgOANQgOAMgSAJQgPAGgUACIglACgAEHBeQgLgEgLgJQgLgKgKgQQgJgPgHgZQgHgXgEgkQgDgbgBgjIAAgTIAAgBIA1AAIACBsQADASAFAPQAFAQAJAKQAIAKAMAAQANAAAIgKQAIgKAFgQQAFgPADgSIAAhsIA3AAIAAABIAAATQgBAjgEAbQgDAjgHAXQgHAZgJAQQgKAQgKAKQgLAJgLAEQgMADgMABQgLgBgMgDgAifBeQgMgEgLgJQgLgKgJgQQgKgPgHgZQgHgXgEgkQgDgbAAgjIgBgTIAAgBIA1AAIADBsQACASAGAPQAFAQAIAKQAJAKAMAAQAMAAAJgKQAIgKAFgQQAFgPACgSIAAhsIA3AAIAAABIAAATQgBAjgDAbQgEAjgHAXQgHAZgJAQQgJAQgLAKQgKAJgMAEQgMADgLABQgMgBgLgDgAr5BeQgLgEgLgJQgLgKgKgQQgJgPgHgZQgHgXgEgkQgDgbgBgjIAAgTIAAgBIA1AAIACBsQADASAFAPQAFAQAJAKQAIAKAMAAQANAAAIgKQAIgKAFgQQAFgPADgSIAAhsIA3AAIAAABIAAATQgBAjgEAbQgDAjgHAXQgHAZgJAQQgKAQgKAKQgLAJgLAEQgMADgMABQgLgBgMgDgAMXBbIAAjZIAtAAIAADZgAKkBbIAAjZIA/AAIgSAdIAAC8g");
	this.shape.setTransform(83.7,36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJfD7IAAgGIAmAAIAAAGgAGXD6IAAgFIAhAAIAAAFgAMXgIIAAhTIg0BTIg/AAIAAjbIAtAAIAACjIBziyIAADqgAI2gIIAAikQgUAPgPATQgPAUgLAWQgKAWgFAYQgEASgBATIAAAFIgrAAIAAgBIAAgEQABgUACgSQADgVAGgSQAFgSAJgRQAIgQALgPQAWgdAfgYQAVgPAygaIAADygAFIgIIgBhqQgCgUgFgQQgFgQgJgKQgIgKgMAAQgNAAgIAKQgJAKgFAQQgFAQgCAUIgCBqIg1AAIAAgFQAAggACgaQACgcAEgWQAJgsAOgZQAOgYARgJQARgJASAAQARAAARAJQASAJANAYQAHAMAGARQAGASAEAWQAIApABBDIAAAFgAAGgIIAAjbIB0AAIAAAsIhHAAIAACFQAOADAMAFQAZAKARATIAEAFgAhfgIIAAhqQgDgUgFgQQgFgQgIgKQgJgKgMAAQgMAAgJAKQgIAKgFAQQgFAQgDAUIgCBqIg1AAIAAgFQAAggACgaQADgcAEgWQAIgsAOgZQAOgYASgJQARgJARAAQARAAASAJQARAJAOAYQAHAMAFARQAGASAEAWQAJApAABDIAAAFgAlvgIIAAgBIAEgEQARgTALgXQANgaAAgdQAAgMgDgMQgDgLgHgKQgGgKgKgHQgJgHgMgEIAACvIgtAAIAAjkQAdAAAaAIQANAEALAGQALAGAKAIQATAPAMAYQALAXAAAeQAAAcgJAZQgJAYgPAWIgBABIAEAEgApfgIIAAgFQAAgOACgOQACgSAFgSQAKgjATgfQATgeAcgZQAOgMAQgKQAQgKASgIIAAAzQgZANgUAUQgYAbgJAQQgPAhgEASQgGAXAAAYIgBAFgAq4gIIgBhqQgCgUgFgQQgFgQgJgKQgIgKgMAAQgNAAgIAKQgJAKgFAQQgFAQgCAUIgCBqIg1AAIAAgFQAAggACgaQACgcAEgWQAJgsAOgZQAOgYARgJQARgJASAAQARAAARAJQASAJANAYQAHAMAGARQAGASAEAWQAIApABBDIAAAFg");
	this.shape_1.setTransform(83.7,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(85.7,27.4,1,1,0,0,0,83.7,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.4,52.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.setTransform(97.8,88.4,1,1,0,0,0,92.9,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:92.5},7,cjs.Ease.get(-1)).to({y:93.9},7,cjs.Ease.get(1)).to({y:92.3},8,cjs.Ease.get(-1)).to({y:88.4},7,cjs.Ease.get(1)).wait(1));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-114.2,91.4,1,1,0,0,0,83.7,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:86.9},7,cjs.Ease.get(-1)).to({y:85.4},7,cjs.Ease.get(1)).to({y:87.1},8,cjs.Ease.get(-1)).to({y:91.4},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.9,64.8,388.6,54.1);


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


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ18();
	this.instance.setTransform(335.4,432.1,0.629,0.629,0,0,0,237.5,46);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(428.4,432.1,0.629,0.629,0,0,0,237.5,46);

	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(364.6,427.1,0.629,0.629,0,0,0,237.5,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(-286.5,240.1,1,1,0,0,0,330.2,227.5);

	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(944.1,258.6,1,1,0,0,0,330.2,227.5);

	this.instance_5 = new lib.fon();
	this.instance_5.setTransform(660.5,2.1,0.829,0.834,0,0,-179.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-616.7,0,1891.2,486.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(39,37.5,1,1,0,0,0,39,37.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ28(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-8,107.1,125.2);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(302.3,195.3,1,1,0,0,0,158.6,133.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ26(), 3);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(98.5,194.5,1,1,0,0,0,12.1,9);
	this.instance_1.alpha = 0.52;

	this.instance_2 = new lib.rope();
	this.instance_2.setTransform(126,218.2,0.603,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.natasha07();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ27();
	this.instance_4.setTransform(255.4,187.1,1,1,0,0,0,160.1,124);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Символ27(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460.9,328.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.leg = new lib.Символ22();
	this.leg.setTransform(-10.3,56.7,1,1,0,0,0,201.3,127.2);
	new cjs.ButtonHelper(this.leg, 0, 1, 2, false, new lib.Символ22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.leg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.3,-128.7,453.3,312.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(-71.5,15.9,1,1,0,0,0,170.5,91);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ25(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323.6,-215.1,422.6,322.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.sisa = new lib.Символ10();
	this.sisa.setTransform(38.4,36.9,1,1,0,0,0,39,37.5);

	this.timeline.addTween(cjs.Tween.get(this.sisa).to({scaleX:1.01,scaleY:1.01,skewY:-0.3,x:38.5},9,cjs.Ease.get(-1)).to({regY:37.7,scaleX:1.05,scaleY:1.02,skewX:0.4,skewY:-1.6,x:39,y:36.8},10,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.02,skewX:0.3,skewY:-1,x:38.8},10,cjs.Ease.get(-1)).to({regY:37.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:38.4,y:36.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.6,78,75);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(5.3,25,1,1,0,0,0,5.3,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(216.5,47.9,1.464,1.464,0,0,0,-14.5,88.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,12.9,568.8,79.1);


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
p.nominalBounds = new cjs.Rectangle(-205.6,-20.1,1024.5,427.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(5.3,25,1,1,0,0,0,5.3,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.7,52);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.girl = new lib.Символ8();
	this.girl.setTransform(198.7,144.7,0.884,0.884,0,0,0,281.4,165.7);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(237.6,174.2,16.481,2.406,0,0,1.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ21(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1430.4,-121.4,3336,591.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.arr = new lib.Символ42();
	this.arr.setTransform(440,76.4,1.189,1,0,-30,150,5.4,25);

	this.arr_1 = new lib.Символ42();
	this.arr_1.setTransform(86.4,35.6,1.189,1,0,0,-180,5.4,24.9);

	this.arr_2 = new lib.Символ42();
	this.arr_2.setTransform(241.3,1.7,1,1,-15,0,0,5.3,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arr_2},{t:this.arr_1},{t:this.arr}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.9,-25.2,380.7,127.8);


// stage content:
(lib.ladyblack1200120 = function(mode,startPosition,loop) {
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
		
		
		this.noj.alpha = 0;
		
		//--------------
		
		this.baba.addEventListener("mouseover", fl_girlover.bind(this));
		
		function fl_girlover()
		{
			
		
			this.arr.alpha = 0;
			this.noj.alpha = 1;
			this.noj2.alpha = 0;
			
		}
		
		this.baba.addEventListener("mouseout", fl_girlout.bind(this));
		
		function fl_girlout()
		{
			
		
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
		
		
		// ресайз ----------
		
		var _this = this;
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		
		
		window._setCanvasSize = function() {
			
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = 120 + 'px';
			stage.canvas.width = windowSize.width;
			stage.canvas.height = 120;
			
			_this.tek.x = 200;
			_this.tek.y = 60;
			
			_this.baba.x = windowSize.width/2;
			_this.baba.y = 60;
			
		
			
			_this.arr.x = windowSize.width/2;
			_this.arr.y = 60;
			
			_this.fon.x = windowSize.width/2;
			_this.fon.y = 60;
			
			_this.noj2.x = windowSize.width;
			_this.noj2.y = 80;
			
			
			
		}
		
		window.onresize=function(){
				_setCanvasSize();
		}
		
		
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
			
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.noj2 = new lib.Символ44();
	this.noj2.setTransform(1217.4,68.2,0.655,0.655,-15,0,0,273.5,89.7);

	this.noj = new lib.Символ44();
	this.noj.setTransform(768.4,470.4,0.413,0.413,-15,0,0,89.4,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.noj},{t:this.noj2}]}).wait(1));

	// arr
	this.arr = new lib.Символ43();
	this.arr.setTransform(530.7,56.9,0.769,0.767,0,-3.5,0.8,72.2,86.7);

	this.timeline.addTween(cjs.Tween.get(this.arr).wait(1));

	// baba
	this.baba = new lib.Символ9();
	this.baba.setTransform(542.4,51,0.549,0.549,0,-0.4,-1.4,52.6,147.5);

	this.timeline.addTween(cjs.Tween.get(this.baba).wait(1));

	// Слой 5
	this.tek = new lib.Символ33();
	this.tek.setTransform(143.9,43.8,0.736,0.736,0,0,0,159.2,53.3);

	this.timeline.addTween(cjs.Tween.get(this.tek).wait(1));

	// Слой 2
	this.fon = new lib.Символ11();
	this.fon.setTransform(369.2,-31.5,1.195,1,0,0,0,330.2,227.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.3,-199,2259.6,749.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
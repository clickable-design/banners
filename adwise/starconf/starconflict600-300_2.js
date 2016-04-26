(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 28,
	color: "#333333",
	manifest: [
		{src:"images/fly.png", id:"fly"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/grav.png", id:"grav"},
		{src:"images/grug.png", id:"grug"},
		{src:"images/pyxa.png", id:"pyxa"},
		{src:"images/sam.png", id:"sam"},
		{src:"images/ten.png", id:"ten"}
	]
};



// symbols:



(lib.fly = function() {
	this.initialize(img.fly);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,157);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,563);


(lib.grav = function() {
	this.initialize(img.grav);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,435,600);


(lib.grug = function() {
	this.initialize(img.grug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.pyxa = function() {
	this.initialize(img.pyxa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,128);


(lib.sam = function() {
	this.initialize(img.sam);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,160);


(lib.ten = function() {
	this.initialize(img.ten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1881,453);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Az7AjIAAhFMAn3AAAIAABFg");
	this.shape.setTransform(-6.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag7AjIAAhFIB3AAIAABFg");
	this.shape_1.setTransform(127.7,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133.7,-3.5,267.5,7.1);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7AjIAAhFIB3AAIAABFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-3.5,12.1,7.1);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhdBKIAAiTIC7AAIAACTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-7.4,18.9,14.9);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AhdBKIAAiTIC7AAIAACTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-7.4,18.9,14.9);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AhdBKIAAiTIC7AAIAACTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-7.4,18.9,14.9);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdBKIAAiTIC7AAIAACTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-7.4,18.9,14.9);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AhdBJIAAiRIC7AAIAACRg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-7.4,18.9,14.8);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FFFF").ss(4,1,1).p("Aj36XIHvAAMAAAA0vInvAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.8,-170.8,53.6,341.8);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.sam();
	this.instance.setTransform(-53,-55,0.688,0.688);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53,-55,106,110.2);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(3,1,1).p("AAAInIp7xNIT3AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.1,-56.6,130.3,113.2);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AiELnIB63OIAmAAIBpXOg");
	this.shape.setTransform(-0.3,-20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.6,-94.4,26.7,148.8);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AuaU/MAAAgp9Ic1AAMAAAAp9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-134.4,184.8,268.8);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,51,0,0)").s().p("AnWBoQAmgMBOggQCHg4ARgEQCcgnBHgKIAcgDIhEAPQhJAPgsAMQgfAIhvAwQhgArhhAQIgDgBgABchRQBjgXEEAAIARAAIADAHQi8AAjlAeIgSACIA4gQg");
	this.shape.setTransform(-75.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AzsBnIgDgCIAAgHQAAgDBtgqQCDgxAfgMIAZgDQAlgbDYgdIASgCQDlgeC8AAIAJAAIARAAIADAIIgDAIQkpALiTASIgcADQhJAKicApQgRAEiHA2QhOAggmAMQgWAGgJAAQgKAAADgBgAPIAJIhegPQhRgQhrgIIgXgBIhpgUQgWABhGgKQhGgLgkgDQglgCgeAAQgFgCgDgDQAAACAAAAQgBAAAAAAQAAgBAAgBQAAgCAAgCQAAgVB7ARQA/AIBLANIB2AUID5AgIAsAHIAuAHQBMAVBKAbQBMAbAkALIAAAJIAAACQgBABgGAAQjkhLg9gMg");
	this.shape_1.setTransform(0,0.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-10.8,253,21.7);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(136,213,238,0)"],[0.345,1],-0.5,-19,0,-0.5,-19,26.4).s().p("AioDTQhOigAWiYQAWibAlgaIBYg+QAxgjBtAaQBwAaAcCzQAdCwhECmQhECmhnAFIgHAAQhgAAhMiag");
	this.shape.setTransform(-0.3,4.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.3,-31.8,46.1,73.1);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ten();
	this.instance.setTransform(-940.6,-226.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-940.6,-226.5,1881,453);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-500,-281.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-500,-281.5,1000,563);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-500,-281.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-500,-281.5,1000,563);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.grav();
	this.instance.setTransform(-217.5,-300);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-217.5,-300,435,600);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCCCC","rgba(255,0,0,0)"],[0,1],0,0,0,0,0,63.5).s().p("Am8G9Qi5i5AAkEQAAkDC5i5QC5i5EDAAQEEAAC5C5QC5C5AAEDQAAEEi5C5Qi5C5kEAAQkDAAi5i5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63,-63,126,126);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.grug();
	this.instance.setTransform(-27.8,-27.8,0.618,0.618);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.8,-27.8,55.6,55.6);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();
	this.instance.setTransform(0,-23);

	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(0,-7.7);

	this.instance_2 = new lib.Символ57();
	this.instance_2.setTransform(0,7.7);

	this.instance_3 = new lib.Символ54();
	this.instance_3.setTransform(0,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3},{t:this.instance_2}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-30.4,18.9,60.9);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(0,0,0.44,0.827);
	this.instance.shadow = new cjs.Shadow("#00CCFF",0,0,6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-145.3,34,294);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(-18.9,-9.2,0.868,0.868);
	this.instance.compositeOperation = "lighter";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABBA2QgIAAgEgEQgEgEAAgIIAAgQQAAgKAEgDQAEgEAIAAIAGAAQAJAAAEAEQADADABAKIAAAQQgBAIgDAEQgEAEgJAAgAA9AQQgBACAAAEIAAAQQAAADABACQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAIAGAAQABAAAAgBQABAAABAAQAAAAABAAQAAgBAAAAQACgCAAgDIAAgQQAAgEgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAIgGAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAgAANA2IAxhrIALAAIgxBrgAhFA2IgIgBQgDgBgCgCIgEgFIgBgJIAAhHQAAgKAFgEQADgEAKAAIAfAAQAKAAAEAEQAEAEAAAKIAABHQAAAJgEAFQgEAEgKAAgAhKgpIgBAGIAABHIABAGQABABAEAAIAfAAQAEAAABgBIABgGIAAhHIgBgGQgBgCgEAAIgfAAQgEAAgBACgAAOgEQgJAAgEgEQgCgEABgJIAAgQQgBgJACgDQAEgEAJAAIAFAAQAJAAAEAEQAEADAAAJIAAAQQAAAJgEAEQgEAEgJAAgAAJgqQgBACAAADIAAAQQAAAEABACQABAAAAABQABAAAAAAQABAAAAAAQABABABAAIAFAAQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgCABgEIAAgQQgBgDgBgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgFAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape.setTransform(37.8,52.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB8BCIAAgWIhSAAIAAAWIgMAAIAAghIALAAIAehXQACgGADgCQACgDAFAAQAEAAADADQACACACAGIAfBXIAKAAIAAAhgAA1AhIA7AAIgdhVIgBAAgAHvArQgCgDAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCgAE5AgIAAhfIALAAIAABdIABAAIAphXQACgEADgCQACgCAEAAIACAAIADABIADACIACAEIABAFIAABhIgMAAIAAheIgBAAIgpBWIgFAHQgCACgEAAQgKAAAAgNgAHPAsIAAgsIgHAAIgmAsIgPAAIAmgsIgRAAQgKAAgEgCQgEgEAAgKIAAgdQAAgKAEgEQAEgEAKAAIAgAAQAKAAAEAEQAEAEAAAKIAABZgAGigzIgBAGIAAAdQAAAEACACQABACAEAAIAnAAIAAglQAAgFgCgBQgBgCgEAAIggAAQgEAAgCACgAEXAsIAAgwIgtAAIAAAwIgMAAIAAhrIAMAAIAAAwIAtAAIAAgwIAMAAIAABrgAClAsQgKAAgEgEQgEgFAAgJIAAhHQAAgKAEgEQAEgEAKAAIAoAAIAAAKIgoAAQgEAAgCACIgBAGIAAAeIAvAAIAAALIgvAAIAAAeIABAGQACABAEAAIAoAAIAAALgAAKAsIAAgrIgBgBIgCgBIgEAAIgbAAIAAAtIgLAAIAAgtIgdAAQgFAAgBABQgBAAAAAFIAAAnIgMAAIAAgnQAAgIAFgEQAEgEAKAAIALAAIgfg0IANAAIAfA0IAFAAIAAg0IALAAIAAA0IAFAAIAcg0IAOAAIgdA0IAJAAQAKAAAEAEQAEAEAAAIIAAAngAiIAsQgKAAgEgEQgEgFAAgJIAAhHQAAgKAEgEQAEgEAKAAIAoAAIAAAKIgoAAQgEAAgCACIgBAGIAAAeIAvAAIAAALIgvAAIAAAeIABAGQACABAEAAIAoAAIAAALgAjvAsIAAhZQAAgKAEgEQAEgEAKAAIAhAAQAJAAAEAEQAEAEAAAKIAAAdQAAAKgEAEQgEACgKAAIgmAAIAAAsgAjgg1IgBABIgCACIAAACIAAAoIAmAAQAEAAACgCIABgGIAAgdIgBgGQgBgCgEAAIghAAgAk1AsQgKAAgEgEQgEgEAAgKIAAhIQAAgJAEgEQAEgEAKAAIAgAAQAKAAAEAEQAEAEAAAJIAAAYIgBAIQgBADgDACQADACABADIABAFIAAAZQAAAKgEAEQgEAEgKAAgAk7AaQAAAEABACQABABAEAAIAgAAQAEAAACgBIABgGIAAgZIgBgEQgCgBgEAAIgmAAgAk6g0IgBAGIAAAfIAmAAIAEAAIACgCIABgCIAAgbIgBgGQgCgBgEAAIggAAQgEAAgBABgAmPAsQgKAAgEgEQgEgFAAgJIAAhHQAAgKAEgEQAEgEAKAAIAiAAQAKAAAEAEQAEAEAAAKIAABHQAAAJgEAFQgEAEgKAAgAmUgzQgBABAAAFIAABHQAAAEABACQABABAEAAIAlAAIACgBIABgBIAAgCIAAhKIgBgGQgBgCgEAAIgiAAQgEAAgBACgAnCAsIAAhZIgBgGQgBgCgEAAIggAAIgDAAIgCABIgBACIgBACIAABcIgLAAIAAhZQAAgKAEgEQAEgEAKAAIAgAAQAKAAAEAEQAEAEAAAKIAABZgAHvgVQgCgCAAgDIABgEIACgCIAEgBQADAAACACQACACAAADIgBAEIgCACIgEABQgDAAgCgCg");
	this.shape_1.setTransform(-27.3,53.3);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.1,-57,124.7,116.9);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ45();
	this.instance.setTransform(1.6,2.4,1.365,1.365,0,0,0,-8.1,-22.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:0.75,scaleY:0.75,rotation:48.7,x:1.7,y:2.5,alpha:1},15).to({regX:-8.3,regY:-22.2,scaleX:0.18,scaleY:0.18,rotation:94.2,y:2.4,alpha:0},14).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(1.6,2.4,1.365,1.365,0,0,0,-8.1,-22.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({scaleX:0.75,scaleY:0.75,rotation:48.7,x:1.7,y:2.5,alpha:1},15).to({regX:-8.3,regY:-22.2,scaleX:0.18,scaleY:0.18,rotation:94.2,y:2.4,alpha:0},14).to({_off:true},1).wait(8));

	// Слой 1
	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(1.6,2.4,1.365,1.365,0,0,0,-8.1,-22.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.75,scaleY:0.75,rotation:48.7,x:1.7,y:2.5,alpha:1},15).to({regX:-8.3,regY:-22.2,scaleX:0.18,scaleY:0.18,rotation:94.2,y:2.4,alpha:0},14).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-44.7,177.8,154.5);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(-121.8,72.4,1,1,-125.3);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(125.2,71.2,1,1,121.5);

	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(-1.3,-139.2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206.4,-233.6,419.2,371.7);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.4,-243.6,419.2,371.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-128,-13,257,26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.5,-12.8,260,28);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.551},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-12.8,260,28);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},0).wait(1).to({alpha:0.551},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-31.8,46.1,73.1);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ7();
	this.instance.setTransform(-377.2,-112,0.053,0.053,132.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({scaleX:0.07,scaleY:0.07,rotation:141.6,x:-391.6,y:-112.8,alpha:1},20).to({scaleX:1,scaleY:1,rotation:613.5,x:-1121.9,y:-150},130,cjs.Ease.get(-1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-179.1,-94,0.053,0.053,-50);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({scaleX:0.06,scaleY:0.06,rotation:2.3,x:-176.4,y:-97.2,alpha:1},12).to({scaleX:1,scaleY:1,rotation:720,x:217.5,y:-564.1},132,cjs.Ease.get(-1)).to({_off:true},1).wait(78));

	// Слой 2
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(-339.1,66,0.053,0.053,-32.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).to({scaleX:0.07,scaleY:0.07,rotation:6.3,x:-340.9,y:71.5,alpha:1},17).to({scaleX:1,scaleY:1,rotation:452.3,x:-464,y:464.2},127,cjs.Ease.get(-1)).to({_off:true},1).wait(42));

	// Слой 1
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(-59.1,-94,0.053,0.053,-68);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.07,scaleY:0.07,rotation:6.3,x:-49.9,y:-88.7,alpha:1},19).to({scaleX:1,scaleY:1,rotation:720,x:470.2,y:210.1},125,cjs.Ease.get(-1)).to({_off:true},1).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-110.5,37.9,33);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 14
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(118.7,-27.6,1.197,1.197);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.33,scaleY:1.33,alpha:0},4).to({scaleX:1,scaleY:1},1).to({scaleX:1.17,scaleY:1.17,alpha:0.5},5).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(118.7,-27.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.17,scaleY:1.17,alpha:0.5},5).to({scaleX:1.33,scaleY:1.33,alpha:0},5).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(48,-19,1.136,1.136);
	this.instance_3.filters = [new cjs.ColorFilter(0.24, 0.24, 0.24, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-502,-283,1004,567);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520.1,-364.7,1237.6,674.2);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(45.6,57.3,1,1.275,-28.5);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(-43.5,57.7,1,1.275,12.2);

	// Слой 1
	this.instance_2 = new lib.fly();
	this.instance_2.setTransform(-155.1,-76.3);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155.1,-76.3,300,191);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ28();
	this.instance.setTransform(-24.6,8);

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(23.4,73.6,1,1.275,-25,0,0,-0.1,-0.1);

	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(-64.2,75,1,1.275,12.2);

	// Слой 1
	this.instance_3 = new lib.fly();
	this.instance_3.setTransform(-177.4,-61.9);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-177.4,-61.9,300,193.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.65,scaleY:0.65},10).to({scaleX:1,scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-63,126,126);


(lib.Символ3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(61.8,130.4,0.729,0.729);
	this.instance_3.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.49,scaleY:0.49,x:193.8,y:138.8,alpha:0},9).wait(1).to({scaleX:1,scaleY:1,x:-84.9,y:121.1},0).to({scaleX:0.76,scaleY:0.76,x:47.1,y:129.5,alpha:1},9).wait(1));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(271.2,136,0.621,0.621);
	this.instance_4.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.49,scaleY:0.49,x:193.8,y:136.3,alpha:0},5).wait(1).to({scaleX:1,scaleY:1,x:488,y:135.1},0).to({scaleX:0.76,scaleY:0.76,x:348.7,y:135.7,alpha:1},9).to({scaleX:0.65,scaleY:0.65,x:286.7,y:135.9,alpha:0.602},4).wait(1));

	// Символ 4
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(220.1,123.6,0.539,0.539);
	this.instance_5.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.49,scaleY:0.49,x:197.2,y:136.3,alpha:0},2).wait(1).to({scaleX:1,scaleY:1,x:414,y:15.1},0).to({scaleX:0.76,scaleY:0.76,x:311.3,y:72.5,alpha:1},9).to({scaleX:0.57,scaleY:0.57,x:231.5,y:117.2,alpha:0.301},7).wait(1));

	// Символ 4
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(239.4,36.2,0.729,0.729);
	this.instance_6.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.49,scaleY:0.49,x:193.8,y:136.3,alpha:0},9).wait(1).to({scaleX:1,scaleY:1,x:290,y:-74.9},0).to({scaleX:0.76,scaleY:0.76,x:244.5,y:25.1,alpha:1},9).wait(1));

	// Символ 4
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(183.7,103,0.566,0.566);
	this.instance_7.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.49,scaleY:0.49,x:193.8,y:136.3,alpha:0},3).wait(1).to({scaleX:1,scaleY:1,x:130,y:-74.9},0).to({scaleX:0.76,scaleY:0.76,x:160.2,y:25.1,alpha:1},9).to({scaleX:0.59,scaleY:0.59,x:180.4,y:91.8,alpha:0.398},6).wait(1));

	// Символ 4
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(121.3,86.1,0.675,0.675);
	this.instance_8.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.49,scaleY:0.49,x:191.9,y:136.3,alpha:0},7).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).to({scaleX:0.76,scaleY:0.76,x:90.9,y:64.6,alpha:1},9).to({scaleX:0.7,scaleY:0.7,x:111.2,y:78.9,alpha:0.801},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.5,16,246.9,137.3);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ3_1();
	this.instance.setTransform(-78.9,10.4,1.207,1,0,0,180,415.9,13);

	this.instance_1 = new lib.Символ3_1();

	// Слой 2
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(189,137.1,1.246,1.246);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(41.5,13.4,331.4,202.2);


(lib.Символ1_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(281.3,-157.2,0.447,0.447);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(289.4,-146.4,0.447,0.447);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(264.1,-151.8,0.447,0.447);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(281,-173.1,1.246,1.246);
	this.instance_7.compositeOperation = "lighter";

	// Слой 1
	this.instance_8 = new lib.Символ2();
	this.instance_8.setTransform(158.5,-263.2,0.637,0.637);
	this.instance_8.compositeOperation = "lighter";

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(184.9,-254.7,210.9,160.1);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.setTransform(0.1,-107.1);

	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(0.1,-68.8,1,1.009);

	this.instance_2 = new lib.Символ52();
	this.instance_2.setTransform(0.1,-53.4,1,1.009);

	this.instance_3 = new lib.Символ52();
	this.instance_3.setTransform(0.1,-38.1,1,1.009);

	this.instance_4 = new lib.Символ52();
	this.instance_4.setTransform(0.1,-22.8,1,1.009);

	this.instance_5 = new lib.Символ52();
	this.instance_5.setTransform(0.1,-7.4,1,1.009);

	this.instance_6 = new lib.Символ52();
	this.instance_6.setTransform(0.1,7.9,1,1.009);

	this.instance_7 = new lib.Символ52();
	this.instance_7.setTransform(0.1,23.2,1,1.009);

	this.instance_8 = new lib.Символ52();
	this.instance_8.setTransform(0.1,38.6,1,1.009);

	this.instance_9 = new lib.Символ52();
	this.instance_9.setTransform(0.1,53.9,1,1.009);

	this.instance_10 = new lib.Символ52();
	this.instance_10.setTransform(0.1,69.2,1,1.009);

	this.instance_11 = new lib.Символ52();
	this.instance_11.setTransform(0.1,84.6,1,1.009);

	this.instance_12 = new lib.Символ52();
	this.instance_12.setTransform(0.1,99.9,1,1.009);

	this.instance_13 = new lib.Символ52();
	this.instance_13.setTransform(0.1,115.2,1,1.009);

	this.instance_14 = new lib.Символ52();
	this.instance_14.setTransform(0.1,130.6,1,1.009);

	// Слой 1
	this.instance_15 = new lib.Символ50();

	this.addChild(this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-145.3,34,294);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(-0.4,18.5);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-206.8,-225.1,419.2,371.7);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1_1();
	this.instance.setTransform(-289,168.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.1,-86,210.9,160.1);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,-0.5,1,1,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,x:-12.9},15,cjs.Ease.get(-1)).to({rotation:2.2,x:-25},14,cjs.Ease.get(1)).to({rotation:2,x:-12.5},15,cjs.Ease.get(-1)).to({rotation:2.2,x:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.9,-69.2,305.8,200.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6_1();
	this.instance.setTransform(-183,103,1,1,180,0,0,-59.1,-93);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(250));

	// Символ 6
	this.instance_1 = new lib.Символ6_1();
	this.instance_1.setTransform(242.1,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(249).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.1,-120.5,37.9,33);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(12,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30.5,x:166,y:-33},11,cjs.Ease.get(-1)).to({rotation:0,x:628,y:23.8},11,cjs.Ease.get(1)).to({rotation:-31,x:259.2,y:46.4},12,cjs.Ease.get(-1)).to({rotation:0,x:-63.5,y:66.2},12,cjs.Ease.get(1)).to({rotation:27.4,x:292.4,y:-45},12,cjs.Ease.get(-1)).to({rotation:0,x:648.3,y:-156.2},12,cjs.Ease.get(1)).to({rotation:-35,x:275.8,y:-165.2},14,cjs.Ease.get(-1)).to({rotation:0,x:-96.7,y:-174.2},13,cjs.Ease.get(1)).to({rotation:27.5,x:234.2,y:-114.3},13,cjs.Ease.get(-1)).to({rotation:0,x:523.8,y:-61.8},13,cjs.Ease.get(1)).to({rotation:-25.7,x:250.9,y:-56.6},14,cjs.Ease.get(-1)).to({rotation:0,x:12,y:-52},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.1,-128.3,300,191);


(lib.Символ5_1 = function() {
	this.initialize();

	// Слой 1
	this.instance_1 = new lib.Символ4_1();
	this.instance_1.alpha = 0.531;
	this.instance_1.compositeOperation = "lighter";

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-520.1,-364.7,1237.6,674.2);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ44();
	this.instance.setTransform(0,0.1,1,1,59.7);

	// Слой 2
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(-0.6,10.9,0.384,0.384);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133.2,-88.4,223.1,231.5);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(8.7,-7.5);

	// Слой 2
	this.instance_1 = new lib.pyxa();
	this.instance_1.setTransform(-61.9,-4.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.4,-93.5,210.9,217.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(52.8,5.4,1,1,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:11.8,x:34.9,y:5.9},21,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-25.2,x:-23.7,y:7.6},22,cjs.Ease.get(1)).to({rotation:-1,x:14.6,y:6.5},22,cjs.Ease.get(-1)).to({rotation:23.2,x:52.8,y:5.4},22,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-108.3,225.2,242.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ60();
	this.instance.setTransform(79.5,-101.6);

	this.instance_1 = new lib.Символ60();
	this.instance_1.setTransform(64.4,-101.6);

	this.instance_2 = new lib.Символ60();
	this.instance_2.setTransform(49.2,-101.6);

	this.instance_3 = new lib.Символ60();
	this.instance_3.setTransform(34.1,-101.6);

	this.instance_4 = new lib.Символ60();
	this.instance_4.setTransform(19.3,-101.6);

	this.instance_5 = new lib.Символ60();
	this.instance_5.setTransform(4.3,-101.6);

	this.instance_6 = new lib.Символ60();
	this.instance_6.setTransform(-11,-101.6);

	this.instance_7 = new lib.Символ60();
	this.instance_7.setTransform(-26,-101.6);

	this.instance_8 = new lib.Символ60();
	this.instance_8.setTransform(-40.9,-101.6);

	this.instance_9 = new lib.Символ60();
	this.instance_9.setTransform(-55.9,-101.6);

	this.instance_10 = new lib.Символ60();
	this.instance_10.setTransform(-71.2,-101.6);

	this.instance_11 = new lib.Символ60();
	this.instance_11.setTransform(-86.2,-101.6);

	this.instance_12 = new lib.Символ60();
	this.instance_12.setTransform(-101,-101.6);

	this.instance_13 = new lib.Символ60();
	this.instance_13.setTransform(-116.1,-101.6);

	this.instance_14 = new lib.Символ60();
	this.instance_14.setTransform(-131.3,-101.6);

	this.instance_15 = new lib.Символ61();
	this.instance_15.setTransform(-18.7,-111.3);

	this.instance_16 = new lib.Символ60();
	this.instance_16.setTransform(-146.4,-101.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(20));

	// Слой 1
	this.instance_17 = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:4.5},4,cjs.Ease.get(-1)).to({y:10},5,cjs.Ease.get(1)).to({y:5},5,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.9,-114.8,305.8,246.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-109.2,35.6,1,1,2.2);

	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-15.4,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({rotation:19.9,x:266.5},6,cjs.Ease.get(-1)).to({rotation:0,x:493.3},7,cjs.Ease.get(1)).to({rotation:-19.7,x:62.1},7,cjs.Ease.get(-1)).to({rotation:0,x:-7.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.3,-98.1,305.8,198.7);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5_1();
	this.instance.setTransform(-88.2,0,0.851,0.851);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-530.9,-310.3,1053.2,573.7);


(lib.Символ2_1 = function() {
	this.initialize();

	// Слой 2
	this.instance_3 = new lib.Символ24();
	this.instance_3.setTransform(248.1,125.6,1,1,0,0,0,20.1,0);

	// Слой 4
	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(322,172.4,0.713,1.433);

	// Слой 1
	this.instance_5 = new lib.Символ13();
	this.instance_5.setTransform(261.5,159.2);

	this.instance_6 = new lib.Символ4_1();
	this.instance_6.setTransform(173.3,159.2,0.851,0.851);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-348.6,-152.1,1341.1,649);


// stage content:
(lib.starconflict600300_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		this.but1.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.fly.gotoAndPlay(2);
		
		}
		
		this.but1.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.fly.gotoAndStop(0);
		
		}
		
		
		
		//---------------
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		    this.fly.gotoAndPlay(16);
		
		}
		
		this.but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{   
			this.fly.gotoAndStop(0);
		
		}
		
		
		//----------------
		
		this.pric.alpha=0;
		this.gun.alpha=0;
		
		this.cursor = "none";
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
			this.gun.x = stage.mouseX;
		}
		
		
		
		
		
		//---------------
		
		stage.canvas.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.gun2.alpha=0;
			this.gun.alpha=1;
			
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.gun2.alpha=1;
			this.gun.alpha=0;
		
		}
		
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
		
		
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.instance = new lib.Символ47();
	this.instance.setTransform(546.1,233.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(15.1,148.5,0.505,1);
	this.instance_1.alpha = 0.75;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.pric = new lib.Символ55();
	this.pric.setTransform(-281.8,496.6,0.65,0.65,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 2
	this.but2 = new lib.Символ34();
	this.but2.setTransform(522,160.7,1.688,1.224);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ34(), 3);

	this.but1 = new lib.Символ34();
	this.but1.setTransform(164.4,160.7,1.688,1.224);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// Слой 5
	this.gun2 = new lib.Символ37();
	this.gun2.setTransform(276.1,231.2,0.929,0.929);

	this.gun = new lib.Символ37();
	this.gun.setTransform(733.1,249.2,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gun},{t:this.gun2}]}).wait(1));

	// Слой 1
	this.fly = new lib.Символ30();
	this.fly.setTransform(193,142.3,0.625,0.625);

	this.timeline.addTween(cjs.Tween.get(this.fly).wait(1));

	// Слой 6
	this.fon = new lib.Символ2_1();
	this.fon.setTransform(128,58.9);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,56.8,1488.8,682.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
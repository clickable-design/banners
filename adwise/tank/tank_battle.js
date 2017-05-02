(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Aim.png", id:"Aim"},
		{src:"images/arm.png", id:"arm"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/clode.png", id:"clode"},
		{src:"images/enemy.png", id:"enemy"},
		{src:"images/fog.png", id:"fog"},
		{src:"images/gun.png", id:"gun"},
		{src:"images/gunshot.jpg", id:"gunshot"},
		{src:"images/hp.png", id:"hp"},
		{src:"images/pulya.png", id:"pulya"},
		{src:"images/tank.png", id:"tank"},
		{src:"images/targer_btn.png", id:"targer_btn"},
		{src:"images/text_shield.png", id:"text_shield"}
	]
};



// symbols:



(lib.Aim = function() {
	this.initialize(img.Aim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,89);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1111,305);


(lib.clode = function() {
	this.initialize(img.clode);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,112);


(lib.enemy = function() {
	this.initialize(img.enemy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,102);


(lib.fog = function() {
	this.initialize(img.fog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,506,215);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,164);


(lib.gunshot = function() {
	this.initialize(img.gunshot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,88);


(lib.hp = function() {
	this.initialize(img.hp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.pulya = function() {
	this.initialize(img.pulya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,37);


(lib.tank = function() {
	this.initialize(img.tank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,81);


(lib.targer_btn = function() {
	this.initialize(img.targer_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,58);


(lib.text_shield = function() {
	this.initialize(img.text_shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,87);


(lib.Символ70 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gun();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,164);


(lib.Символ69 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Aim();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gun();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,164);


(lib.Символ65 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Aim();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0)","#3D0000"],[0,1],0,0,0,0,0,456.6).s().p("EhBmAb9MAAAg35MCDNAAAMAAAA35g");
	this.shape.setTransform(420,179);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,840,358);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AyBAtIAAhZMAkDAAAIAABZg");
	this.shape.setTransform(115.5,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231,9);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AD47").s().p("EgqeAAtIAAhZMBU9AAAIAABZg");
	this.shape.setTransform(272,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,544,9);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AARBJIAAiRIA/AAQAOAAALAEQAMADAIAHQAIAHAEAJQAEAOAAAIIgBANIgDAIIgGAJIgHAIQgJAGgLAEQgMADgOAAIgUAAIAAAqgAA6AAIATAAQAGAAAEgBQAEgBADgCQADgDACgEQACgDAAgFQAAgEgCgEQgCgDgDgDIgHgEQgEgBgGAAIgTAAgAgvBJIAAg4Ig1AAIAAA4IgoAAIAAiRIAoAAIAAA3IA1AAIAAg3IApAAIAACRg");
	this.shape.setTransform(14.2,7.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,14.7);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.hp();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,27);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgywADhIAAnBMBlhAAAIAAHBg");
	this.shape.setTransform(325,22.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650,45);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgPARQgIgIAAgJQAAgJAIgGQAGgIAJAAQAJAAAIAIQAGAGAAAJQAAAJgGAIQgIAGgJAAQgJAAgGgGg");
	this.shape.setTransform(2.4,2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,4.8);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.text_shield();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,356,87);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGATIgcANIAAhfIBFA/IgaALIASAsIgPAJg");
	this.shape.setTransform(6.8,12.1,1.89,1.89);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,24.3);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AiTBYIAAgdIhOAAIgDAdIglAAIAAhBIAOAAIAGgUIAFgVIACgcIABgoIBxAAIAABtIAQAAIgFBBgAjFgxQgCAegCAMQgCANgGARIArAAIAAhKIgfAAgALrA7IAAiRIAoAAIAAAuIAXAAQANAAALADQALADAJAGQAHAHAFAJQACAFABAFIACAKQgBAMgEAJQgEAKgHAGQgIAHgLADQgLAEgNAAgAMTAZIAWAAQAJAAAGgFQAGgFAAgIQAAgHgGgDQgGgFgJAAIgWAAgAIDA7IAAiRIApAAIAABtIApAAIAAhtIAqAAIAABtIApAAIAAhtIApAAIAACRgAHBA7IAAiRIAoAAIAACRgAEzA7IAAiRIAoAAIAAAuIAXAAQANAAAMADQALADAIAGQAIAHAEAJQADAFABAFIABAKQAAAMgEAJQgEAKgIAGQgHAHgLADQgLAEgOAAgAFbAZIAWAAQAKAAAGgFQAFgFAAgIQAAgHgFgDQgGgFgKAAIgWAAgADxA7IAAhTIgmA4IgBAAIglg3IAABSIgoAAIAAiRIArAAIAjA5IAjg5IArAAIAACRgAABA7IAAhRIg3BRIgmAAIAAiRIApAAIAABSIA2hSIAmAAIAACRgAmJA7IAAiRIB2AAIAAAiIhOAAIAAAXIBGAAIAAAeIhGAAIAAAXIBPAAIAAAjgAogA7IAAiRIBMAAQANAAAKADQAKADAHAHQAEAFADAFQADAHgBAHQABAGgCAGIgFAJIgHAHIgJAFIAMAFQAGADADAFQAEADACAFQACAGAAAHQAAAKgEAHQgDAIgIAFQgHAFgKADQgKADgNAAgAn4AaIAfAAQAKAAAFgEQAGgDgBgHQAAgGgEgDQgGgDgKAAIgfAAgAn4gcIAaAAQAJAAAFgDQAFgDAAgHQAAgGgFgDQgFgDgIAAIgbAAgApZA7IgKgaIg6AAIgKAaIgrAAIA/iSIAnAAIA/CSgApwABIgQgoIgQAoIAgAAgAsJA7IAAg4Ig0AAIAAA4IgpAAIAAiRIApAAIAAA3IA0AAIAAg3IAqAAIAACRg");
	this.shape.setTransform(87.1,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,174.2,17.8);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4DA51").s().p("AkUBeQgIgCgIgFIAQgdQAHAFAJAAQAEAAADgCQADgBADgEIg5hqIAtAAIAiBDIAfhDIAsAAIg5BuQgFAKgFAHQgGAHgFAEQgGAFgHACQgHACgJAAQgKAAgJgDgAN1BfIAAgkIAqAAIAAAkgAM8BfIgLgaIg5AAIgKAaIgrAAIA/iSIAnAAIA+CSgAMlAlIgQgoIgRAoIAhAAgAJUBfIAAiRIBqAAIAAAjIhCAAIAABugAIaBfIgKgaIg5AAIgLAaIgrAAIA/iSIAnAAIA/CSgAIEAlIgRgoIgQAoIAhAAgAEgBfIAAiRIA/AAQAOAAALADQAMAEAIAGQAIAHAEAKQAEAOAAAGIgBAMIgDALIgGAJIgHAHQgJAHgLADQgMAEgOAAIgUAAIAAAqgAFJAVIATAAQAGAAAEgCQAEgBADgCQADgDACgEQACgDAAgFQAAgCgCgEQgCgEgDgCIgHgEQgEgBgGAAIgTAAgACKBfIAAiRIBMAAQANAAAKADQAKADAHAHQAEAFADAFQACAHAAAHQAAAGgBAGIgFAHIgHAHIgJAFIAMAFQAFADAEAFQAEAEACAGQACAGAAAHQAAAKgEAHQgEAIgHAFQgHAFgKADQgLADgNAAgACyA+IAfAAQAKAAAFgEQAFgDAAgHQAAgGgFgDQgFgEgKAAIgfAAgACyAGIAaAAQAJAAAFgDQAFgDAAgFQAAgGgFgDQgFgDgJAAIgaAAgAgqBfIAAhTIg5BTIgmAAIAAiRIApAAIAABQIA4hQIAnAAIAACRgAlgBfIglg3IgPARIAAAmIgoAAIAAiRIAoAAIAAA5IAzg5IAwAAIg3A9IA5BUgAn2BfIgKgaIg5AAIgLAaIgrAAIA/iSIAnAAIA/CSgAoMAlIgRgoIgQAoIAhAAgArJBfIAAhuIgsAAIAAgjICBAAIAAAjIgtAAIAABugAsnBfIgKgaIg5AAIgLAaIgrAAIA/iSIAnAAIA/CSgAs9AlIgRgoIgQAoIAhAAgAOAAvIgMhPIAAgSIAtAAIAAASIgMBPgAhSg+QgGgCgFgEQgEgEgEgGQgDgGgBgIIAWgEQADAGADADQAEAEAFAAQAGAAAEgEQADgDACgGIAWAEQgBAIgDAGQgDAGgFAEQgFAEgGACQgGACgIAAQgHAAgHgCg");
	this.shape.setTransform(92.9,9.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,19.5);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABvC+IAAgcIhiAAIAAiUIAZAAIAAB9IA4AAIAAh9IAZAAIAAB9IAPAAIgDAzgAEBChIABgVQAEABAEAAQAGAAAEgCQAEgDAEgIQADgJACgRQABgLABgiIAAgrIBZAAIAACUIgYAAIAAh9IgqAAIAAAZQgBAlgBAOIgEARQgCAJgDAFQgDAGgDADQgDAEgEACQgHAEgLAAQgGAAgJgCgACZCiIAAiUIBdAAIAAAXIhEAAIAAAnIA9AAIAAAXIg9AAIAAAoIBFAAIAAAXgAgoCiIAAhpIg+BpIgXAAIAAiUIAYAAIAABoIA+hoIAWAAIAACUgAj3CiIAAiUIAvAAQAMAAAKAEQAKADAGAHQAIAGADAJQADAKABALQAAALgFAKQgEAKgHAGQgHAHgLACQgJAEgLAAIgWAAIAAAwgAjfBcIAWAAQAGAAAGgCQAFgCAEgEQAFgEACgFQABgFAAgFQAAgIgBgFQgCgFgFgDQgEgEgFgCQgFgCgHABIgWAAgAkvCiIAAh9Ig5AAIAAB9IgYAAIAAiUIBpAAIAACUgAEygnIgNgDIgKgIIgKgIIgHgLQgEgGgCgHIgEgOIgBgQIAAgCIABgQIAEgOQACgHAEgGIAHgKIAKgJIALgIIAMgDQAHgCAIAAQAHAAAGACIANADIAKAIIAKAIIAHALIAHAMIACAPQACAHAAAJIAAACQAAAIgCAIQgBAHgCAHQgCAHgEAGIgIALIgJAIQgFAEgGADQgGADgHABQgGACgHAAIgOgCgAEwijQgHAEgFAHQgGAHgCAJQgDAKAAAMIAAACQAAALADAKQACAKAGAHQAFAHAHADQAHAFAKAAQAIAAAIgFQAGgDAGgHQAFgHADgKQADgJAAgMIAAgCQAAgMgDgKQgDgJgGgHQgEgHgIgEQgHgEgJAAQgIAAgIAEgACvgoIAAh8IgmAAIAAgWIBlAAIAAAWIgmAAIAAB8gAAPgoIAAiSIA1AAQAKgBAJADQAJADAGAFQAGAFAEAGQACAHAAAJQABAHgCAFQgCAGgDAEQgFAHgKAFQAHACAEACQAFADAEAFQAEAEACAFQACAHAAAHQAAAJgEAIQgDAIgIAFQgGAFgKADQgKADgLgBgAAng9IAeAAQAHAAAFgBQAFgCADgDQAEgCACgEQACgEAAgFQAAgFgCgEQgCgEgEgCQgDgEgGgBQgEgBgHAAIgeAAgAAnh8IAaAAIAKgBQAFgBAEgDQADgDABgEQACgDAAgGQAAgEgBgFQgCgDgDgCQgDgDgEgCQgFgBgGAAIgbAAgAgdgoIgNgiIg5AAIgMAiIgZAAIA2iTIAYAAIA2CTgAgxhgIgVg7IgVA7IAqAAg");
	this.shape.setTransform(38.6,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.1,38.1);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.targer_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,58);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.targer_btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,58);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQA8QgJgCgGgGQgGgGgEgHIgCgJIgBgJIAAgpQAAgHADgLQAEgHAGgGQAGgFAJgDQAIgDAIAAQAJAAAIADQAIADAHAFQAGAGADAHQAEALAAAHIAAApIgBAJIgDAJQgDAHgGAGQgHAGgIACQgIADgJAAQgIAAgIgDgAgKgeQgFAEAAAHIAAAnQAAAIAFADQAEAEAGAAQAGAAAFgEQAFgDAAgIIAAgnQAAgHgFgEQgFgEgGAAQgGAAgEAEg");
	this.shape.setTransform(4.6,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.2,12.7);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.enemy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,102);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AifEzIAAplIE/AAIAAJlg");
	this.shape.setTransform(16,30.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,61.5);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.pulya();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,37);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34230D").s().p("AgOBJQgFgBgGgEIgKgHIgHgKQgEgFgCgGQgCgGAAgIIAiAAQgBAHAFAFQAEADAIAAQAGAAAEgFQAEgFAAgIQAAgHgDgEQgEgFgFgCIgKgBIgNAAIAAgEIATgoIgpAAIAAgiIBbAAIAAAGIgcAxQAJACAGAFQAGAFAEAFQADAEABAHQABAHAAAHQAAAJgDAKQgDAJgGAHQgHAIgKAEQgNAFgIAAQgHAAgHgCg");
	this.shape.setTransform(5.1,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,15);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.arm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,89);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.clode();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215,112);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fog();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,506,215);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.gunshot, null, new cjs.Matrix2D(1,0,0,1,-58.6,-43.5)).s().p("AngGgIAAs/IPBAAIAAM/g");
	this.shape.setTransform(48.1,41.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,83.3);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlrA0QiXgVAAgfQAAgdCXgXQCXgVDUgBQDVABCXAVQCWAXAAAdQAAAfiWAVQiXAXjVAAQjUAAiXgXg");
	this.shape.setTransform(51.5,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,15);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF33").ss(6.1,2,1).p("ADvpTIGGAAIAAFtAjupTImGAAIAAFtAjuJUImGAAIAAltADvJUIGGAAIAAlt");
	this.shape.setTransform(62.9,59.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-3,132,125.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tank();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,81);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.tank();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,81);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1111,305);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ69();
	this.instance.setTransform(-72,38,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:248},49).to({x:-72},50).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ70();
	this.instance_1.setTransform(-102,175,1,1,0,0,0,34,82);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:247},54,cjs.Ease.get(1)).to({x:-102},45,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,0,102,257);


(lib.Символ67 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ68();
	this.instance.setTransform(38,38,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,0,102,257);


(lib.Символ64 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ65();
	this.instance.setTransform(38,38,1,1,0,0,0,38,38);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(419.9,179,1,1,0,0,0,419.9,179);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({alpha:1},2).to({alpha:0},3).wait(90).to({alpha:1},2).to({alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,840,358);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.setTransform(419.9,179,1,1,0,0,0,419.9,179);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,840,358);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(115.5,4.5,1,1,0,0,0,115.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.461},8,cjs.Ease.get(1)).to({alpha:1},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,9);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ59();
	this.instance.setTransform(357.9,27.5,1,1,0,0,0,271.9,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({regX:272,scaleX:0.93,x:337.5},0).wait(64).to({scaleX:0.81,x:307.5},0).wait(80).to({scaleX:0.67,x:269},0).wait(90).to({regX:272.1,scaleX:0.45,x:207},0).wait(25).to({alpha:0},0).wait(135).to({regX:271.9,scaleX:1,x:357.9,alpha:1},10).wait(1));

	// Слой 4 - копия
	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(201.5,27.5,1,1,0,0,0,115.5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(369).to({scaleX:0.78,x:176},0).wait(30).to({scaleX:0.42,x:135},0).wait(45).to({regX:115.4,scaleX:0.18,x:107},0).wait(11));

	// Слой 3
	this.instance_2 = new lib.Символ57();
	this.instance_2.setTransform(63.5,28.4,1,1,0,0,0,14.2,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(455));

	// Слой 2
	this.instance_3 = new lib.Символ56();
	this.instance_3.setTransform(30,27,1,1,0,0,0,13.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(455));

	// Слой 1
	this.instance_4 = new lib.Символ55();
	this.instance_4.setTransform(328.9,26.5,1,1,0,0,0,324.9,22.5);
	this.instance_4.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(455));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,4,650,45);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(6.8,12.2,1,1,0,0,0,6.8,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:18.8},12,cjs.Ease.get(1)).to({x:6.8},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,24.3);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.setTransform(-35.9,6.7,1,1,0,0,0,6.8,12.2);

	// Слой 1
	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(87.1,8.8,1,1,0,0,0,87.1,8.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-5.5,216.9,24.3);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(92.9,9.7,1,1,0,0,0,92.9,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.359},11,cjs.Ease.get(1)).to({alpha:1},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.9,19.5);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ53();
	this.instance.setTransform(13.5,52,1,1,0,0,0,2.4,2.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Слой 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ53();
	this.instance_1.setTransform(13.5,41.5,1,1,0,0,0,2.4,2.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// Слой 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ53();
	this.instance_2.setTransform(13.5,32,1,1,0,0,0,2.4,2.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Слой 2 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ53();
	this.instance_3.setTransform(5.8,57.6,1,1,0,0,0,2.4,2.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(8));

	// Слой 2 - копия: 2 - копия: 2
	this.instance_4 = new lib.Символ53();
	this.instance_4.setTransform(5.8,47.1,1,1,0,0,0,2.4,2.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Слой 2 - копия: 2
	this.instance_5 = new lib.Символ53();
	this.instance_5.setTransform(5.8,37.6,1,1,0,0,0,2.4,2.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(8));

	// Слой 2 - копия: 2
	this.instance_6 = new lib.Символ53();
	this.instance_6.setTransform(5.8,26.6,1,1,0,0,0,2.4,2.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(10));

	// Слой 2 - копия: 2 - копия
	this.instance_7 = new lib.Символ53();
	this.instance_7.setTransform(21.6,57.6,1,1,0,0,0,2.4,2.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Слой 2 - копия: 2
	this.instance_8 = new lib.Символ53();
	this.instance_8.setTransform(21.6,47.1,1,1,0,0,0,2.4,2.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(14));

	// Слой 2 - копия
	this.instance_9 = new lib.Символ53();
	this.instance_9.setTransform(21.6,37.6,1,1,0,0,0,2.4,2.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// Слой 2
	this.instance_10 = new lib.Символ53();
	this.instance_10.setTransform(21.6,26.6,1,1,0,0,0,2.4,2.4);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},4,cjs.Ease.get(1)).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(20));

	// Слой 1
	this.instance_11 = new lib.Символ52();
	this.instance_11.setTransform(178,43.5,1,1,0,0,0,178,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356,87);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.setTransform(183.9,43.7,1.21,1.21,0,0,0,92.9,9.7);

	// Слой 1
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(178,43.5,1,1,0,0,0,178,43.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,356,87);


(lib.Символ43 = function(mode,startPosition,loop) {
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

	// hp
	this.instance = new lib.Символ54();
	this.instance.setTransform(305,-28.7,1,1,0,0,0,324.9,22.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:31.3,alpha:1},3).wait(1).to({y:-28.7},4).wait(1));

	// mouse
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(502.5,54,1,1,0,0,0,87.1,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-56,alpha:0},3).to({y:-26},1).to({y:54,alpha:1},4).wait(1));

	// shield
	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(177,43.5,1,1,0,0,0,178,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:-66.5,alpha:0},3).to({y:-36.5},1).to({y:43.5,alpha:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,590.6,87);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Слой 3
	this.instance = new lib.Символ42();
	this.instance.setTransform(-37.6,30.1,1,1,0,0,0,38.6,19.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-47.6,alpha:1},4,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AkskwIIDAAIBWBVIAAIMIn2AAIhjhpg");
	this.shape.setTransform(28.9,29.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	// Слой 1
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(28.5,28.6,1,1,0,0,0,28.5,29);
	this.instance_1.alpha = 0.891;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(28.5,29,1,1,0,0,0,28.5,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-2.3,136.3,63.2);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(28.5,29,1,1,0,0,0,28.5,29);

	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(28.5,29,1,1,0,0,0,28.5,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,58);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(4.5,6.4,1,1,0,0,0,4.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.328},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.2,12.7);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(40.9,87.8,1,1,0,0,0,4.5,6.4);

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(40.5,51,1,1,0,0,0,40.5,51);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,102);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(11.3,40.3,1,1,-22,0,0,16,30.8);
	this.instance.alpha = 0.328;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(16, 4, 1)];
	this.instance.cache(-2,-2,36,66);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,3.8,72,77);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(16,30.8,1,1,0,0,0,16,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:133.3,y:-1.4},29).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,3.8,72,77);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjoC0IgigeIAggOIg6gbIAmgnIgygVQAagyABgFQABgDANgJIAPgJIDfhUIDSg1IAsgPIAhAEIAaAnIAQA2IgIAtIlwC4IhtAhg");
	mask.setTransform(31.4,18.2);

	// Слой 3
	this.instance = new lib.Символ31();
	this.instance.setTransform(-19.5,27.4,1,1,0,0,0,16,30.8);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(31,18.5,1,1,0,0,0,31,18.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,37);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(70.9,60.6,1.15,1.15,0,0,0,5.1,7.5);

	// Слой 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(52,41.5,1,1,0,0,0,31,18.5);

	// Слой 1
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(49,44.5,1,1,0,0,0,49,44.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.6,0,135.6,100.3);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(107.5,56,0.62,0.62,0,0,0,107.5,56);
	this.instance.alpha = 0.422;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(40.9,21.3,133.3,69.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(107.5,56,1,1,0,0,0,107.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-844.4},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.9,21.3,133.3,69.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ23();
	this.instance.setTransform(264.5,42.1,1.78,1.78,0,0,0,107.5,56);
	this.instance.alpha = 0.328;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(299).to({_off:true},1).wait(42));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(264.5,92,1.263,1.263,0,0,0,107.5,56);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92).to({_off:false},0).wait(300));

	// Слой 1
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(264.5,42,1,1,0,0,0,107.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(299).to({_off:true},1).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197.9,7.3,133.3,69.5);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(253,107.5,1,1,0,0,0,253,107.5);
	this.instance.alpha = 0.32;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,506,215);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(253,107.5,1,1,0,0,0,253,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1197.8},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,506,215);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(253,15.5,1,1,0,0,0,253,107.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(199).to({y:107.5},0).to({_off:true},1).wait(31));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(253,227.5,1,1,0,0,0,253,107.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(199).to({y:107.5},0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(253,107.5,1,1,0,0,0,253,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:true},1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,506,215);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(48.1,41.6,1,1,0,0,0,48.1,41.6);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,83.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(48.1,41.6,1,1,0,0,0,48.1,41.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({alpha:1},2).to({alpha:0},3).wait(30).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.3,83.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(58.6,43.5,1,1,0,0,0,48.1,41.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({alpha:1},2,cjs.Ease.get(1)).to({alpha:0},2,cjs.Ease.get(1)).wait(81).to({alpha:1},2,cjs.Ease.get(1)).to({alpha:0},2,cjs.Ease.get(1)).to({alpha:1},2,cjs.Ease.get(1)).to({alpha:0},2,cjs.Ease.get(1)).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.5,1.9,96.3,83.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(62.9,59.6,1,1,0,0,0,62.9,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.88,scaleY:0.88},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,134,127.3);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(42,45.7,1,1,0,0,0,62.9,59.6);

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(41,40.5,1,1,0,0,0,41,40.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-18,134,127.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(41,40.5,1,1,0,0,0,41,40.5);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(41,40.5,1,1,0,0,0,41,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,81);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ12();
	this.instance.setTransform(47.1,21,1,1,0,0,0,58.5,44);
	this.instance.compositeOperation = "lighter";

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(41,40.5,1,1,0,0,0,41,40.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	// Слой 2
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(40.1,80.1,1,1,0,0,0,51.5,7.5);
	this.instance_2.alpha = 0.801;
	this.instance_2.filters = [new cjs.BlurFilter(32, 6, 1)];
	this.instance_2.cache(-2,-2,107,19);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,-21.2,138,129.5);


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
	this.instance = new lib.Символ66();
	this.instance.setTransform(34,82,1,1,0,0,0,34,82);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,164);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(54.9,21,1,1,0,0,0,48.1,41.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({alpha:1},2).to({alpha:0},3).wait(70).to({alpha:1},2).to({alpha:0},3).to({alpha:1},2).to({alpha:0},3).to({alpha:1},2).to({alpha:0},3).wait(1));

	// tank
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(52.5,40.5,1,1,0,0,0,41,40.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({scaleX:0.99,scaleY:0.99,x:52.4,y:40.6},2).to({scaleX:1,scaleY:1,x:52.5,y:40.5},3).wait(70).to({scaleX:0.99,scaleY:0.99,x:52.4,y:40.6},2).to({scaleX:1,scaleY:1,x:52.5,y:40.5},3).to({scaleX:0.99,scaleY:0.99,x:52.4,y:40.6},2).to({scaleX:1,scaleY:1,x:52.5,y:40.5},3).to({scaleX:0.99,scaleY:0.99,x:52.4,y:40.6},2).to({scaleX:1,scaleY:1,x:52.5,y:40.5},3).wait(1));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(51.5,80.1,1,1,0,0,0,51.5,7.5);
	this.instance_2.alpha = 0.801;
	this.instance_2.filters = [new cjs.BlurFilter(32, 6, 1)];
	this.instance_2.cache(-2,-2,107,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({scaleX:0.99,scaleY:0.99,y:79.7},2).to({scaleX:1,scaleY:1,y:80.1},3).wait(70).to({scaleX:0.99,scaleY:0.99,y:79.7},2).to({scaleX:1,scaleY:1,y:80.1},3).to({scaleX:0.99,scaleY:0.99,y:79.7},2).to({scaleX:1,scaleY:1,y:80.1},3).to({scaleX:0.99,scaleY:0.99,y:79.7},2).to({scaleX:1,scaleY:1,y:80.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-20.6,139,129);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(48.1,41.6,1,1,0,0,0,48.1,41.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({alpha:1},2).to({alpha:0},3).wait(30).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).wait(1));

	// tank
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(54.5,51.5,1,1,0,0,0,41,40.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({regX:41.1,scaleX:0.98,scaleY:0.98,y:51.6},2,cjs.Ease.get(1)).to({regX:41,scaleX:1,scaleY:1,y:51.5},3,cjs.Ease.get(1)).wait(39));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(51.5,92,1,1,0,0,0,51.5,7.5);
	this.instance_2.alpha = 0.801;
	this.instance_2.filters = [new cjs.BlurFilter(32, 6, 1)];
	this.instance_2.cache(-2,-2,107,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({scaleX:0.98,scaleY:0.98,x:51.6,y:91.2},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:51.5,y:92},3,cjs.Ease.get(1)).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-6,139,125.3);


(lib.Символ1 = function() {
	this.initialize();

	// tank3 - копия
	this.instance = new lib.Символ15();
	this.instance.setTransform(782.9,169.8,0.78,0.78,0,0,0,53.5,45.6);
	this.instance.alpha = 0.602;

	// tank1 - копия
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(288,167.1,0.45,0.45,0,0,0,41,40.6);
	this.instance_1.alpha = 0.77;

	// tank3
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(387.9,179.9,0.74,0.74,0,0,0,53.5,45.6);

	// tank2
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(495.9,155.3,0.63,0.63,0,0,0,53.4,45.6);
	this.instance_3.alpha = 0.781;

	// tank1
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(626,171,1.03,1.03,0,0,0,41,40.6);

	// fon
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(555.5,152.5,1,1,0,0,0,555.5,152.5);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1111,305);


(lib.Символ71 = function(mode,startPosition,loop) {
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
	this.fon = new lib.Символ1();
	this.fon.setTransform(234,153.5,1,1,0,0,0,234,153.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1).to({scaleX:1.08,scaleY:1.08},3,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1111,305);


// stage content:



(lib.tank_battle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		this.gun.mouseEnabled = false;
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
			this.gun.x = stage.mouseX;
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 20;
		
		}
		
		
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.text.gotoAndPlay(1);
			_this.gun.gotoAndPlay(1);
			_this.pric.gotoAndPlay(1);
			_this.gun_an.gotoAndPlay(1);
			_this.fon.gotoAndPlay(1);
		
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.text.gotoAndPlay(5);
			_this.gun.gotoAndPlay(0);
			_this.pric.gotoAndPlay(0);
			_this.gun_an.gotoAndPlay(0);
			_this.fon.gotoAndPlay(5);
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pric+gun_AN
	this.gun_an = new lib.Символ67();
	this.gun_an.setTransform(320,163.8,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.gun_an).wait(1));

	// pric
	this.pric = new lib.Символ64();
	this.pric.setTransform(320,156,1,1,0,0,0,38,38);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// text_shield
	this.text = new lib.Символ43();
	this.text.setTransform(193,27.7,1,1,0,0,0,178,43.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// target_btn
	this.instance = new lib.Символ38();
	this.instance.setTransform(596,265.5,1,1,0,0,0,28.5,29);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// enamy
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(53.5,150.8,1,1,0,0,0,40.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// arm
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(62,253,1,1,0,0,0,49,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// gun
	this.gun = new lib.Символ2();
	this.gun.setTransform(320,301.9,1,1,0,0,0,34,82);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// red
	this.instance_3 = new lib.Символ61();
	this.instance_3.setTransform(321,147,1,1,0,0,0,419.9,179);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tuman
	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(955,187,1,1,0,0,0,253,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// cloude
	this.instance_5 = new lib.Символ22();
	this.instance_5.setTransform(640,69.5,1,1,0,0,0,107.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// bg
	this.fon = new lib.Символ71();
	this.fon.setTransform(-30.9,153.5,1,1,0,0,0,203.1,153.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86,120.5,1442,415.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
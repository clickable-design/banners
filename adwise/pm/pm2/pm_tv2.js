(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/logo.png", id:"logo"},
		{src:"images/ma4.jpg", id:"ma4"},
		{src:"images/mans_03.png", id:"mans_03"},
		{src:"images/mans_06.png", id:"mans_06"},
		{src:"images/mans_08.png", id:"mans_08"},
		{src:"images/mans_14.png", id:"mans_14"},
		{src:"images/mans_17.png", id:"mans_17"},
		{src:"images/mans_20.png", id:"mans_20"},
		{src:"images/Растровоеизображение13.png", id:"Растровоеизображение13"}
	]
};



// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,49);


(lib.ma4 = function() {
	this.initialize(img.ma4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,478,478);


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


(lib.Растровоеизображение13 = function() {
	this.initialize(img.Растровоеизображение13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFnB2QgRAAgNgDQgMgEgIgIQgIgIgEgNQgEgMAAgRIAAggIgdAAIAABeIg8AAIAAjlIA8AAIAABbIAdAAIAAgcQAAgjAQgPQAIgIAMgEQANgEARAAIBCAAQASAAAMAEQANAEAHAIQAIAHAEANQAEANAAARIAABoQAAARgEAMQgEANgIAIQgPAPgjAAgAFggzIAABoQAAATAUAAIAoAAQAUAAAAgTIAAhoQAAgUgUAAIgoAAQgUAAAAAUgAJBBzIAAi3IhGAAIAAguIDHAAIAAAuIhGAAIAAC3gAB7BzIgOgpIhTAAIgPApIg+AAIBVjlIBCAAIBYDlgABeAfIgbhMIgaBMIA1AAgAkGBzIAAjlICLAAQARAAANAEQAMAEAIAIQAIAIAEAMQAEANAAARIAAAhQAAAQgEAMQgEANgIAIQgQAPgiAAIhPAAIAABCgAjKADIBBAAQAUAAAAgSIAAghQAAgUgUAAIhBAAgAnQBzIAAjlICzAAIAAAuIh4AAIAAC3gAozBzIAAiMIhPCMIg/AAIAAjlIA8AAIAACMIBPiMIA+AAIAADlg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.6,-11.8,141.3,23.8);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkVB2QgRAAgMgDQgNgEgIgIQgIgIgEgNQgEgMAAgRIAAhoQAAgjAQgPQAIgIANgEQAMgEARAAIBTAAQARAAANAEQAMAEAIAIQAIAHAEANQAEANAAARIAABoQAAARgEAMQgEANgIAIQgQAPgiAAgAkcgzIAABoQAAATAVAAIA4AAQATAAAAgTIAAhoQAAgUgTAAIg4AAQgVAAAAAUgAEdBzIAAiMIhPCMIg/AAIAAjlIA8AAIAACMIBOiMIA/AAIAADlgAAtBzIAAheIhRAAIAABeIg8AAIAAjlIA8AAIAABbIBRAAIAAhbIA7AAIAADlg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-11.8,68.9,23.8);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARrBzIAAjlIC3AAIAAAuIh8AAIAAAtIBhAAIAAAsIhhAAIAAAwIB8AAIAAAugAPTBzIAAi3IhGAAIAAguIDHAAIAAAuIhGAAIAAC3gALNBzIAAjlIC3AAIAAAuIh8AAIAAAtIBhAAIAAAsIhhAAIAAAwIB8AAIAAAugAJ8BzIgPgpIhSAAIgPApIhAAAIBXjlIBCAAIBYDlgAJeAfIgahMIgaBMIA0AAgAD5BzIAAjlICEAAQAQAAAMAEQALAEAJAHQAHAHAEALQAEAMgBAPQABATgJAMQgJANgMAFQAHACAIADQAGAEAGAGQAFAIAEAKQADALAAAOQAAAPgDAMQgEAMgIAIQgPAPggAAgAE0BFIBCAAQAUAAAAgUIAAgGQAAgVgUABIhCAAgAE0gWIA5AAQATABAAgVIAAgGQAAgUgTAAIg5AAgACWBzIAAjlIA7AAIAADlgAhMBzIAAjlIA8AAIAABPIBJAAQASAAANAEQAMAEAIAIQAIAIADALQAFAMAAARIAAAUQAAARgFANQgDANgIAHQgQAQgjAAgAgQBFIA9AAQATAAAAgUIAAgUQAAgTgTgBIg9AAgAk2BzIAAjlICLAAQASAAAMAEQAMAEAIAIQAIAHAEANQAEANAAARIAAAhQAAAPgEANQgEAMgIAJQgPAPgjAAIhPAAIAABCgAj6ADIBBAAQAVAAAAgSIAAghQAAgUgVAAIhBAAgAoABzIAAjlIC0AAIAAAuIh4AAIAAC3gApjBzIAAiMIhPCMIg/AAIAAjlIA8AAIAACMIBPiMIA/AAIAADlgAtUBzIAAjlIA8AAIAADlgAw3BzIAAjlIA8AAIAABPIBLAAQASAAAMAEQANAEAIAIQAHAIAEALQAEAMAAARIAAAUQAAARgEANQgEANgHAHQgQAQgjAAgAv7BFIA+AAQAUAAAAgUIAAgUQAAgTgUgBIg+AAgA0hBzIAAjlICEAAQAQAAAMAEQALAEAJAHQAHAHAEALQAEAMAAAPQAAATgJAMQgJANgMAFQAHACAIADQAGAEAGAGQAGAIADAKQAEALAAAOQAAAPgFAMQgDAMgIAIQgPAPggAAgAzlBFIBBAAQAUAAAAgUIAAgGQAAgVgUABIhBAAgAzlgWIA4AAQATABAAgVIAAgGQAAgUgTAAIg4AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131.4,-11.5,262.9,23.1);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD4BzIAAgyIA8AAIAAAygACZBzIAAjlIA7AAIAADlgAhJBzIAAjlIA8AAIAABPIBJAAQASAAAMAEQANAEAIAIQAIAIADALQAEAMAAARIAAAUQAAARgEANQgDANgIAHQgQAQgjAAgAgNBFIA8AAQAUAAAAgUIAAgUQAAgTgUgBIg8AAgAkzBzIAAjlICEAAQAQAAAMAEQAMAEAIAHQAHAHAEALQAEAMAAAPQAAATgJAMQgIANgNAFQAHACAIADQAHAEAFAGQAGAIADAKQAEALAAAOQAAAPgEAMQgEAMgIAIQgPAPggAAgAj3BFIBBAAQAUAAAAgUIAAgGQAAgVgUABIhBAAgAj3gWIA4AAQATABAAgVIAAgGQAAgUgTAAIg4AAgAD/AtIgHhDIAAhcIA8AAIAABcIgHBDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.8,-11.5,61.7,23.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9C817","#FAC53B"],[0,1],-172,0,150,0).s().p("A63SSIenusIXI13MgDcAkjg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172,-117,344.1,234.1);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mans_03();
	this.instance.setTransform(-113.8,-124,0.932,0.932,1.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120,-124,240,248.1);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mans_06();
	this.instance.setTransform(-102.4,-116.3,0.932,0.932,1.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.1,-116.3,216.3,232.7);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mans_08();
	this.instance.setTransform(-86.7,-89.3,0.932,0.932,1.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.1,-89.3,182.4,178.7);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mans_14();
	this.instance.setTransform(-102.3,-101.9,0.932,0.932,1.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.3,-101.9,214.6,203.8);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mans_17();
	this.instance.setTransform(-88.8,-116.4,0.932,0.932,1.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.6,-116.4,189.3,232.9);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mans_20();
	this.instance.setTransform(-108.1,-109,0.932,0.932,1.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.5,-109,227.1,218);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.51,0.976],-217.5,0,217.6,0).s().p("Egh+AB9IAAj5MBD9AAAIAAD5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-217.5,-12.5,435.1,25);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(249,226,62,0)","#F9EC4C","rgba(250,234,97,0)"],[0,0.51,0.976],-70.7,0,70.6,0).s().p("As4X/MAAAgv9IZxAAMAAAAv9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.5,-153.5,165.1,307.1);


(lib.Символ4 = function() {
	this.initialize();

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

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81,-15.3,162,30.7);


(lib.Символ3 = function() {
	this.initialize();

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

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.3,-16.1,216.8,32.3);


(lib.Символ3_1 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxM8QlBgXjVkCQjTkDAUlVQAWlXDxjjQDyjiFAAWQFBAXDUECQDUEDgVFVQgVFXjyDjQjcDOkeAAQgaAAgdgCg");
	mask.setTransform(2,4.7);

	// Слой 3
	this.instance = new lib.ma4();
	this.instance.setTransform(-85.5,-87.3,0.366,0.383);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.7,-78.3,155.4,166.1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.setTransform(-172.2,-0.9,1.33,1.33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:-57,alpha:1},9,cjs.Ease.get(1)).wait(91).to({x:4.6,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(198.1,-0.9,1.33,1.33);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:98.1,alpha:1},9,cjs.Ease.get(1)).wait(91).to({x:18.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(110));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(-157.3,-0.4,1.33,1.33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({x:-58,alpha:1},10,cjs.Ease.get(1)).wait(80).to({x:54,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},20).wait(1));

	// Символ 23
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(244.9,-0.4,1.33,1.33);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).to({x:174.5,alpha:1},10,cjs.Ease.get(1)).wait(80).to({x:64.8,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(-155.2,-123.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ3_1();
	this.instance.setTransform(1,0.1,0.203,0.19,122);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24,-24.3,48.3,48.6);


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
p.nominalBounds = new cjs.Rectangle(-366.1,-73.4,48.3,48.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.alpha = 0.09;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
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


(lib.Символ7 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(-626.6,-55.9);

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333333","#000000"],[0,1],-490.7,0,471.1,0).s().p("EhMpAJcIAAy3MCZTABIIjDRvg");
	this.shape.setTransform(-81.5,0);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-844.2,-60.5,1253.3,121);


(lib.Анимация4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(0,0,1,1.57,21);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.4,-254.6,326.8,509.3);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(0,0,1,1.57,21);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-163.4,-254.6,326.8,509.3);


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


(lib.Символ2 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ5();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F9B51F","#FAE033"],[0,1],-161,0,161,0).s().p("A5JSSMAAAgkjMAlpAPfIMqVEg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
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



(lib.pm_tv2 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.setTransform(694.5,687.6);

	// Режим изоляции
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(319.2,511.7,1,1,0,0,0,-24.4,-63.4);

	// Слой 2
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(288.1,493.6);

	// Слой 3
	this.instance_3 = new lib.Растровоеизображение13();
	this.instance_3.setTransform(-192.1,-9.6,0.576,0.576);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(118.1,290.4,1244.9,936.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
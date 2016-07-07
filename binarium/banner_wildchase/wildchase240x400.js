(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/avto.png?1467900039082", id:"avto"},
		{src:"images/baseGameBackground.jpg?1467900039082", id:"baseGameBackground"},
		{src:"images/button2.png?1467900039082", id:"button2"},
		{src:"images/coin2_0.png?1467900039082", id:"coin2_0"},
		{src:"images/coin2_1.png?1467900039082", id:"coin2_1"},
		{src:"images/coin2_2.png?1467900039082", id:"coin2_2"},
		{src:"images/coin2_3.png?1467900039082", id:"coin2_3"},
		{src:"images/coin2_4.png?1467900039082", id:"coin2_4"},
		{src:"images/coin2_5.png?1467900039082", id:"coin2_5"},
		{src:"images/coin2_6.png?1467900039082", id:"coin2_6"},
		{src:"images/coin2_7.png?1467900039082", id:"coin2_7"},
		{src:"images/evro.png?1467900039082", id:"evro"},
		{src:"images/lobbymockupM1mid_01.png?1467900039082", id:"lobbymockupM1mid_01"},
		{src:"images/lobbymockupM1mid_03.png?1467900039082", id:"lobbymockupM1mid_03"},
		{src:"images/lobbymockupM1mid_06.png?1467900039082", id:"lobbymockupM1mid_06"},
		{src:"images/LogoChase.png?1467900039082", id:"LogoChase"},
		{src:"images/ramka.png?1467900039082", id:"ramka"},
		{src:"images/reelGridFrame.png?1467900039082", id:"reelGridFrame"},
		{src:"images/slot.png?1467900039082", id:"slot"},
		{src:"images/yelow_avto.png?1467900039082", id:"yelow_avto"}
	]
};



// symbols:



(lib.avto = function() {
	this.initialize(img.avto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,86);


(lib.baseGameBackground = function() {
	this.initialize(img.baseGameBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,422);


(lib.button2 = function() {
	this.initialize(img.button2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,109);


(lib.coin2_0 = function() {
	this.initialize(img.coin2_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.coin2_1 = function() {
	this.initialize(img.coin2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.coin2_2 = function() {
	this.initialize(img.coin2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.coin2_3 = function() {
	this.initialize(img.coin2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.coin2_4 = function() {
	this.initialize(img.coin2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.coin2_5 = function() {
	this.initialize(img.coin2_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.coin2_6 = function() {
	this.initialize(img.coin2_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.coin2_7 = function() {
	this.initialize(img.coin2_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.evro = function() {
	this.initialize(img.evro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,52);


(lib.lobbymockupM1mid_01 = function() {
	this.initialize(img.lobbymockupM1mid_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,78);


(lib.lobbymockupM1mid_03 = function() {
	this.initialize(img.lobbymockupM1mid_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,74);


(lib.lobbymockupM1mid_06 = function() {
	this.initialize(img.lobbymockupM1mid_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,87);


(lib.LogoChase = function() {
	this.initialize(img.LogoChase);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,47);


(lib.ramka = function() {
	this.initialize(img.ramka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,281);


(lib.reelGridFrame = function() {
	this.initialize(img.reelGridFrame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,307);


(lib.slot = function() {
	this.initialize(img.slot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,630);


(lib.yelow_avto = function() {
	this.initialize(img.yelow_avto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,86);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F1CF1B").ss(1.4,1,1).p("AgciuIBFAAAgnCwIBMgBAgkiuIgIFeAAqioIADFN");
	this.shape.setTransform(32.1,33.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12).to({_off:false},0).wait(12));

	// Слой 1
	this.instance = new lib.coin2_0();

	this.instance_1 = new lib.coin2_1();

	this.instance_2 = new lib.coin2_2();

	this.instance_3 = new lib.coin2_3();

	this.instance_4 = new lib.coin2_4();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF7D").s().p("ABbAnIgCgBIgCgBIgEgDIgBgCIgCgCIAAgBQgBgFACgFIAAAAIgBgDIgBgDQABgEABgDIADgEIgBgCQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBIAAgDIAAgBIgBgBIgBgBIgBgCIAAgBIgBgEIABgGIgBgEIABgCIAAAAIABgBIACgFIABgBQAFgDAGgBIAFABIAAAAIADACIAAAAIAEAEIAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAIADAHIAAADQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAABABAAQAAABAAAAQAAABAAAAIAAAEIAAADIABACIAAABIAAABIAAABIgBAGIgCAGIAAABIgBAIQgCAIgGAGQgCACgFABIgDAAIgDAAgAhpAHIAAgBIgCAAIgDgDIgFgFIAAgDIAAgDIABgEIADgBIAAgDIABABIABgBIABgBIABgBIABgBIAFgBIACAAIACABIACABIACAAQADACABACIABACIACADIAAADIAAACQAAADgBABIgBAAIAAABIgDADIgCACIgCAAIgBABIgCAAIgCAAIgFAAg");
	this.shape_1.setTransform(42.9,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF73D").s().p("Ah2BSIgBABQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgJgJQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgCgCAAgEIAAgOQACgIAEgEIABAAQABgCADgCIAAgBQgBgIABgFIAAgCIACgNIAAgEIACgGQABgEACgCIAAAAQADgDAEgBIAEgBQADAAADACIABAAQAHAEAAAJIgBAFIABACIAAAHIAAABQAGgEAGACQAIADACAJIACAMQgEABgBAFIgBAEQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIgBAAQgEgBgCACQgDADAAADIAAABIgCAAIgDgBIABgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAgBgBQAAAAAAAAIAAgFIAAgEIgBgBIAAAAIgBgCIgCgCIgDgBQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIAAAAIgEAOQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgBABQABABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAADIAAADIAAABIAAACIAAABQABABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIABACIAAABIABAFQAAABAAAAQgBAAABABQAAAAAAAAQABAAABAAIgBABIAAABIgCACQgFAEgEAAIgFgCgABmBLQgGgBgCgEIgDgEQgBgFABgFIAAgBIADgDQAAgCADgCIgBgIIABgBIAAAAIAAgBIgBgJIABgJIAAgBIAAAAIABgLIAAgEIABgKIAGgBQAFAAACgDQAGgGACgHIABgIIAEAEIAEAEIgBABIACAGIABAFIgCAIIACADIAAAAIAAAAIABACIACAOIAAAEQABADgBADIgBAQIAAAEIgEANIgFAIIgIAFQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgIACIgCgBgABIg1IAAAAIAAgBIgDgBIgBgBIgEgDIgBgDIgCgCIABAAIgBgDIABgEIABgDQABgBACgDIAJgFIAEABIACABIAAAAIAEABIAEAEIgBABIAAAAIAAAAIgBACIABAFIgBAFIABAEIgBABIAAABIgGADIgCABIgCAAIgDAAg");
	this.shape_2.setTransform(42.1,31.3);

	this.instance_5 = new lib.coin2_5();

	this.instance_6 = new lib.coin2_6();

	this.instance_7 = new lib.coin2_7();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).wait(3));

	// Слой 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D0AF26").s().p("AhIACQgKgEgEgBIgCgBQAAgDACgDIACgCIgBAAQAEgEAFAAQAGgBADADIAKAIIAHACIASAEIAQADIADACQAHAFAAAIQgrgCgXgOgABAAKIADgEQAGgGAIACQAGACADAFQgNAEgPACIACgFg");
	this.shape_3.setTransform(29.5,52.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1CF1B").s().p("AAoChIgXgBQgOgBgDgFQgDgDAAgGQgdgFgTgNQgKgFgDgHQgEgKAIgGIgBAAQAEgFAHABIADABQADABAKAGQAXAOApACIAQAAQAeABAYgEQAPgCANgEQATgFAOgJQAOgJAHACQAGABADAGIACAGIAFAFQADAHgDAHQgDAFgMAFIg6AZQgSAFgYABIgIABIgjgCgABXBBIgGgFIgIgLIgFgIIgDgOIgEgLIgBgGIgDgDIgCAAQgHgDgDgFIAAgBIAAAAIgBgBIgBAAIgGgBQgEgBgDgFQgDgEABgFIABgGIgCgGQgBgDABgCIACgLIABgDIABgCIABgIIgCgFQgDgJAHgGIAAgBQAEgEAHAAIAAAAIgEANIgDAMQgBANADAFQAFAHAIAAQAJgBADgIIADgGIAEgEQADgDABgFQAEgEAKgCQAJgEAAgKIACADQACAKgCAJIADAAIAAACQAAANADAEIAEAEQgBAFABAHIAAAEIAAABIAAAEIACAKQABAFgCAIIAAABIgCAKIgBAQIgBAQQgBAGgCADQgCAFgFACIgFABIgGgCgAAFgIIgDgBQgCgDgCgDQgBgCgBgGIgCgPIgBgFIADgRIACgJIgDgMIACgJIAAgDIACABIAEADIADAAQADAAADgCIADgCIADgDQACgDABgEQAEAFAAAKIABAUQACAHgBACIgDAFIgBAIIACAWQAAAFgEAFQgEAEgFACIgFABIgCgBgAixg5QgHgBgDgGIgCgIQgCgGABgJIABgDIgCAAIgEgEIgCgCIgBgCIAAgGQAAgEACgCIACgEIAHgDIgEgDQgEgEAAgEQgBgFAFgGQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAIgEIABAAQACgJAEgEQAHgHAJADQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAGAFgBAJIAFABQAFADABAEIACAHIgBADQgDAGgEACQgFADgFgBIgBAGIAJABQAFADACAGIAAAFQAAADgCADIgCADIgDADIgIACIgFgCIAAADIABAKQAAAFgDADIgBABIgBABQgEAEgGAAIgCgBg");
	this.shape_4.setTransform(25.7,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF73D").s().p("AgMCmQgDgEABgNIADgNIAEgMIACgIQACgDAAgFIAAgEIgCgEQgCgDAAgEIABgIIgCgGQgBgFABgHIAAgBQgBgEACgFIABgDIABgOQACgHAEgDIAEgBIACgEQAAgDAEgDQAEgFAHABIAEgFIAFgSQABgIgKgSQgDgHAAgCQgBgHAFgFIAOgDIABAAQAFACAEAEQADACADAIIAEAeIABAXQgFAWADAMIABAEIgDAcQgEAmAAAiIgDAAQACgJgCgLIgCgDQAAAKgJAFQgKACgEADQgBAFgDADIgEAFIgDAGQgDAHgIABQgHABgFgIgAgxB3IgGgCIgCgBIAAAAIgBgCIgCgDIAAAAIgBgBIgDgEIgBgDIgBgEIAAgGIAAgBIAAAAIAAgDIACgMIAAgCIAAAAIgBgCIAAgBIAAgEIABgEIADgFIAAgBIABgQIABgJIgBgHIAAgEIABAAIAAgCIABAAIAAgBIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIgBgBIgBgBIAAgBIAAgBIgBAAIgBgKQgCgGABgIIAAgBIABAAIAAgBIABgCQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIgBgBIgBgCIAAAAIgCgBIgBgGIgJAJIABAAIACACQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIACACIABABIAAABIABAEIAAABQABAEgCADIgCACIAAABIgCAAIgBACIgBAAIgDABIgBABIgFABIgBgBIgFgCIgBgBIgEgDIgBgBIAAgBIAAAAIgBgFIAAgBIABgDQgEgCgDgDQgDgEABgGQAAgFAEgEIgBAAQAHgHAOgLQgFgDgBgGQgBgIAGgFQACgDAFgBIAIAAIAHAAIAAAAIAEgCQAAgDADgEQABgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAEgDAFgBIAFAAIAGAAIAFAAIAFABIACgBIACgBIACAAIACgCIABAAIADgDIAAgBQAAgEABgDIADgFQADgDABAAQADgBADAAIAEAAIACABIAAgBIAHABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAFAAQABABAEgBIABABIAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIAJABQAHACAFAGQAEAEAAAHIAAACQgCAHgFACQgEADgEAAQAAAEgCADQgCAFgDABIgGADIgKAEIgBABQgEACgGAAIgHACIgEACIgGABIgKACIgRAAIAAAHIgBAMIACAKQABAGAAAEIgBAKQAAACADAFQACAGAAADIgDALQgBAEACAKIgDAOIACALQgBAFgDADIAAAAIABABIAAAAIABACIAAAAIABAGIAAAUIgBAFQgBAEgCADIgDADIgDACQgDACgDAAgAAgh4IgCgBIgEAAIgGgBIgDAAIgDAAQgGgBgDgFQgEgEABgFIAAgEQAAgEACgDIAAgBIAAgBQAAgFABgDIADgEIABgBIgBAAIAJgEIADAAIAEgBIAEgBIAHgDIAFgBIAMADIABAAIADABIAGgCIAFABIAKAAIAFAAIAFAAQAEAAADACQAHAEACAGQADAGgDAGIgFAFQgEADgEgBIgDAAQgCAEgDADQgFAEgGgBIgCADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBADgEAAIgBABIgDAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgMABIgDAAIgDABIgEgBg");
	this.shape_5.setTransform(31.1,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF7D").s().p("AhQCHQgEAAgDgCIgDgEQgEgEAAgNIAAgCQAAgiAEgmIADgbIACgTIAAgSIgCgZIgDgeIgCgNIAAgGIgNADIgCABIgOACIgIABIgIABIgFgBIgBAAIAFgBIAGgCQAGgBAFgCIABgBIAKgEIAFgDQADgBACgEQACgEAAgEQAEAAAEgCQAFgDACgGIAAgDIACABQAJAEgBAKIgBABQAFABADAEQACADABAJQAHA1AAAfIAAAIQAPgIAMAGIAJAFQAFAEAEAAQAFABAJgFIABgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgFgIABgMQAAgMAIgHQAIgHALAAQAMAAAJAIQAFAFAGAMIAKAXQADAKgBAQQAAAIgCAHQgBAJgGANQgGAOgDAFQgIALgJACIgPACQgFACgKAHQgHAHgGACQgLAEgKgGQgEgDgEgBIgHACQgHACgIgCIgDALQgDAPgFAEQgEADgGAAIgBAAgABrBQIgFgGQgEgFgBgDIgBgIIgDgHIABgJQAAgKgCgLIgFgTQgDgGgBgGIgBgHIgCgGIgBgIIABgKIAEgHIAGgEIABgBIADgFQAFgFAIACQAFAAAEAEQADACADADIACAIIAFAPIAKAXIADAFIABAGIgBAOIgEALQgHALgGABIgCABIABADIADANIACAGQABAFgDAEQgDAGgGACIgEAAQgEAAgDgCg");
	this.shape_6.setTransform(45.7,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},12).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Aw9DbIAAm1MAh7AAAIAAG1g");
	this.shape.setTransform(108.6,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.3,44);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJ3BNIAAgBIBAgmIApAAQAdAAAKgXIhFAAQgUAAgGgKIgCgFQAAgNAegnQAXgXAfAAIB/AAIAAABIg8AlIhDAAQgUAAgRAXIAAABIA/AAQAcAAAFAKQACADAAAEQAAAJgWAgQgRAVgSAGQgRAFgMAAgAH2BNQgdAAAAgSIAAgBQAAgLATgeIA2hcIAqAAIg4BiIgBAGQAAAIAMABIAdAAQAWAAARgkIAthNIAqAAIABABIAAAAQgqBLgbAtQgQARgKAEQgUAKgTAAgAGSBNIAAAAIA5hiQACgEAAgEIAAgBQAAgHgJAAIgzAAQhBBxgCABIgqAAIBYiYIBoAAQAYAAAIAMQACADAAAEIAAABQAAALgTAdQgtBPgIANgACJBBQgCgDAAgDIAAgCQAAgMATgdQAdgyAHgJQAaghAoAAIA6AAQAbAAAFARIAAADIAAABQAAALgRAcQghA4gEAGQgZAfgjAAIhFAAQgUAAgGgMgADRgBQgQAYAAAGQAAAGAIADIAiAAQAVAAAQgkQARgYAAgHQAAgIgPAAIgUAAQgdAAgQAkgAA7BNIhoAAIAAgBIBWiYIBnAAQAfAAAFARIAAAEIAAACQAAAHgMATQgOAbgGAAQgCAAgOAAIAAAAIAAAAQAKAAACAJIAAADQgBAFgQAcQgNAVgZAHIgOADIgNABIgDAAgAAfAQQgCACgLATIAAABIAxAAIABAAQAPAAAKgNIAGgKIhEAAgAA+glQgMAVAAACIBDAAQAIgLAAgEIgBgCQAAgEgHgBIgHgBIgDAAgAkSBNIAAAAQBAhvAFgIIABgBQARgTALgEIAIgEIACgBIAJgDIAKgBIBDgBQAZAAAHAPIABAGIAAABQAAAKgSAdIg2BcIgrAAIAAgBIAAAAIAUglIAAgBIhCAAIgWAnIAAAAgAi7ABIA7AAIAGgBIACAAIABAAIABAAIADgEIABgCIAIgOIADgHIAAgCQAAgFgGgCIgIgBIgCAAIgWAAIgCAAQgbAAgRAmgAmYBNQgcAAgBgSIgLASIiwAAIgBAAIAAAAIBXiYICwAAIAAABIhAAmIhaAAIgNAXIA+AAIAAABIg2AdIgaAAQgJANgEAJICBAAQAFgLAKgPQAcgyAMgOQAbgYAfAAICBAAIAAABIhBAmIhFAAQgXAAgTAkQgNAUgBAIIAAADQAAAGALABIAwAAQABAAAMgWIhBAAIAAgBIA0gcIBJAAIABABIAAAAIgzBZgAqpBNQA7hmAAgDIAAgBQAAgGgJAAIgtAAQg/BugDACIgrAAIArhMIAWgkIg7AAIgzBXIgPAZIgqAAIgBAAIAAAAIBXiXIDOAAQAVAAAGANIABAGQAAALgXAlIgvBUIgsAAg");
	this.shape.setTransform(98.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.9,3,178,15.6);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(3,1,1).p("Aw5AAMAhzAAA");
	this.shape.setTransform(108.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,219.5,3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(3,1,1).p("Aw9AAMAh7AAA");
	this.shape.setTransform(108.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,220.4,3);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399CC").ss(3,1,1).p("AwyAAMAhlAAA");
	this.shape.setTransform(107.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,218.1,3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.button2();
	this.instance.setTransform(0,0,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxTEFQghAAAAgjIAAnEQAAgiAhAAMAinAAAQAhAAAAAiIAAHEQAAAjghAAg");
	this.shape.setTransform(147.1,57.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,104.7);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALHAxIAAgBQAAgMAMgSQAcgwAHgIQAMgQAZgHQAHgCAFAAIBvAAIAAAAIgvAdIgHAEIg3AAQgWAAgOAcQgOAVAAAFIAAABQAAAGAJABIBNAAIABABIgSAfIhbAAQgaAAAAgPgAIsBAIARgfIBIAAQASgBALgRIg2AAQgYgBAAgOIAAAAQAAgGAMgTQAQgeAEgFIAjAAIABAAQgZArAAABIAAACQAAAFAMAAIAmAAIAdgzIAkAAIgyBYQgLAUgSAJQgQAIgOgBgAH7BAIgBgBIAdgxIg4AAQgaAwgDACIgkAAIAAAAIBKh/IAjAAIABABIgdAzIA3AAIAdg0IAlAAIAAABIhIB+gAE1BAQgRABgFgLIgCgGQAAgKATgdQAXgmAGgJQAXgZAbAAIA2AAQAUAAAFAPIAAACQAAAJgQAaQgZAsgGAIQgNAOgMAFQgLAEgVAAgAFYAAQgNATAAAGIAAAAQAAAGALABIAWAAQAUgBALgaQAQgWAAgFIAAgCQAAgEgJgBIgYAAQgTgBgPAegAB/BAIAAAAIgBAAIBJh9ICQAAIAAABIgzAfIhKAAIgLAUIA8AAQAVACAAAKQAAAGgNAVQgCAHgQAOQgSANgTAAgAC2AhIAhAAQAUAAAMgSIAAAAIg3AAIgKASgAg+BAIAAAAIgBAAIBHh9IAjABIAAAAIgcAzIA0AAQAbAAAAAMIAAACQAAAHgQAYQgLASgbAIQgKACgGAAgAgIAgIAlAAQASgBAHgQIAAAAIg2AAIgIARgAirBAIgBgBIA3hdIgrAAIgLASQgpBHgEAEIgkABIAAgBIARgfIg3AAIgTAgIgkAAIAAAAIgBAAIA6hjQAXgcAgAAIAzAAQASAAAHALIABAGIgBAIIApgaIB6AAIAAABIgzAhIgiAAIg4BegAkNgDIgDADIA3AAQAIgJAGgLIABgEQgCgGgJAAIgYAAQgTAAgNAbgAnmBAIgBgBIBKh+IBcAAQAOAAAIALIABAHQAAAIgPAaQgJAPgLALQgSARgeAAIgzAAQgQAegDACgAmdAAIAeAAQAYAAAFgGQAJgNAAgEIAAgBQgBgFgKAAIgnAAgAp5BAIAAAAIgBAAIBJh9ICQAAIAAABIgzAfIhKAAIgLAUIA8AAQAVACAAAKQAAAGgNAVQgCAHgQAOQgSANgTAAgApCAhIAhAAQAUAAAMgSIAAAAIg3AAIgKASgAsGBAIgBAAIAAAAIA6hjQAXgcAfAAIAzAAQATAAAGALIACAGQAAAKgPAYQgqBHgEAEIgjABIgBgBIASgfIg4AAIgSAggAq6gDIgDADIA2AAQAJgJAFgLIABgEQgBgGgJAAIgYAAQgTAAgNAbgAuVBAIAAgBIA2geIAmAAQALAAAKgJQAFgIAAgBIg2AAIAAgBIAtgXIAYAAQADgDAIgQIhHAAIgBgBIASggIBqAAIACAAIABAAIAAABIgfA3QgEAGgRAAQALADAAAGQgCAFgMAUQgVAdghAAg");
	this.shape.setTransform(91.8,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.7,13);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACFBUIhJgQQhBgLiTgGQgzgBgZAEQgiAIgRADQgZAEgjgEIg8gHQhTAAgpgDQhHgFgogeQgegUgDgcQgCgWASgSQASgSAWADQAQABAXAPQAbASAKADQAMAEATAAIAggBQARAAA6AHQAvAFAcgFQAKgBASgFIAcgHQAbgEA9AFICOAGQBTACA2AMIA3AOQAjAJAUAEQApAFA1gBQAiAAA8gEQBRgGAqgHQBCgKAzgUIABACQAPgBANAKQgYATgmARIhSAoIgRALIgGAAQgXAAgtAHIgDgHIhOAOQgvAIggADQgwAFg9AAIgfAAg");
	this.shape.setTransform(66.8,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.7,17);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.evro();
	this.instance.setTransform(-8.5,-2.4,1.049,1.049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-2.4,209.9,54.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(5.6,1,1).p("Aw/qJMAh/AAAIAAUTMgh/AAAg");
	this.shape.setTransform(108.9,65.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.7,223.3,135.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(0,-870.7,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(0,-435.4,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-870.7,108.7,1327.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(-0.5,-870.7,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(-0.4,-435.5,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-870.7,109.3,1327.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(0.4,-870.7,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(0.4,-435.3,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-870.7,109.1,1327.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(0,-868.8,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(0,-433.6,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,1.4,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-868.8,108.7,1326.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.slot();
	this.instance.setTransform(-0.1,-871.1,0.725,0.725);

	this.instance_1 = new lib.slot();
	this.instance_1.setTransform(-0.1,-435.6,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.slot();
	this.instance_2.setTransform(0,0,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-871.1,108.8,1327.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.LogoChase();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,47);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lobbymockupM1mid_01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,78);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lobbymockupM1mid_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68,74);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lobbymockupM1mid_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,87);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgVPAh5MAAAhDxMAqeAAAMAAABDxg");
	this.shape.setTransform(136,217);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,434);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ramka();
	this.instance.setTransform(0,0,0.648,0.648);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,323.8,182);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.yelow_avto();
	this.instance.setTransform(-53.2,-30.5,0.71,0.71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-30.5,106.6,61.1);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.yelow_avto();
	this.instance.setTransform(80.6,-30.5,1,1,0,0,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.6,-30.5,150,89);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.reelGridFrame();
	this.instance.setTransform(-111.2,-68.3,0.445,0.445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-68.3,222.5,136.6);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.reelGridFrame();
	this.instance.setTransform(-111.2,-68.3,0.445,0.445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-68.3,222.5,136.6);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.instance = new lib.Символ40();
	this.instance.setTransform(98,80.1,0.7,0.7,30,0,0,16.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:87.8,y:159.9,alpha:0},14).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(10.1,-2.9,0.685,0.685,44.9,0,0,16.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.69,scaleY:0.69,x:10,y:-24.8,alpha:0},3).to({y:77.9,alpha:1},1).to({scaleX:0.69,scaleY:0.69,x:10.1,y:4.5},10).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(-35.9,28.5,0.63,0.63,30.1,0,0,17,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:16.9,regY:17,scaleX:0.63,scaleY:0.63,rotation:30,x:-52.1,y:-44.1,alpha:0},8).to({x:-23.8,y:83,alpha:1},1).to({regX:17,scaleX:0.63,scaleY:0.63,rotation:30.1,x:-33.8,y:37.6},5).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ40();
	this.instance_3.setTransform(36.8,65.9,0.675,0.675,-44.9,0,0,16.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:60.3,y:2.6},7).to({scaleX:0.68,scaleY:0.68,x:77.1,y:-42.6,alpha:0},5).to({x:30.1,y:83.9,alpha:1},1).to({regY:16.8,scaleX:0.68,scaleY:0.68,x:33.4,y:74.8},1).wait(1));

	// Слой 4
	this.instance_4 = new lib.Символ40();
	this.instance_4.setTransform(-65.6,127.8,0.586,0.586,-30.1,0,0,16.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:16.8,regY:16.7,scaleX:0.59,scaleY:0.59,rotation:-30,x:-72.2,y:166.1,alpha:0},7).to({x:-58.9,y:89.6,alpha:1},1).to({regX:16.9,regY:16.6,rotation:-30.1,x:-64.6,y:122.3},6).wait(1));

	// Слой 3
	this.instance_5 = new lib.Символ40();
	this.instance_5.setTransform(78.1,206.4,0.648,0.648,-30.1,0,0,16.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.65,scaleY:0.65,rotation:-30,x:80.4,y:225.3,alpha:0},2).to({x:63.1,y:93.1,alpha:1},1).to({regY:16.8,scaleX:0.65,scaleY:0.65,rotation:-30.1,x:76.8,y:196.9},11).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ40();
	this.instance_6.setTransform(-23.3,92.3,0.698,0.698,-14.8,0,0,16.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:0.7,scaleY:0.7,x:-34,y:151.6},7).to({scaleX:0.7,scaleY:0.7,x:-43.2,y:202.5,alpha:0},7).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ40();
	this.instance_7.setTransform(16.4,189.4,0.688,0.688,0,0,0,16.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:8.7,y:248.9,alpha:0},5).to({x:30,y:82.2,alpha:1},1).to({x:17.9,y:177.5},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-19.2,211.5,257.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(108.6,21.9,1,1,0,0,0,108.6,21.9);
	this.instance.alpha = 0.781;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},18).to({alpha:0.781},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.3,44);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(100.9,8.7,1,1,0,0,0,100.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.559},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.9,3,178,15.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(108.9,65,1,1,0,0,0,108.9,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.7,223.3,135.6);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(108.9,65,1,1,0,0,0,108.9,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.719},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.7,223.3,135.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(69,8.6,1,1,0,0,0,67.8,9.7);
	this.instance.filters = [new cjs.BlurFilter(15, 15, 1)];
	this.instance.cache(-2,-2,138,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-9.1,152,36);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(76.7,73.8,1,1,0,0,0,67.8,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.avto();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.1,92);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация6("synched",0);
	this.instance.setTransform(-248.9,-20.7);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация7("synched",0);
	this.instance_1.setTransform(392,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},39).to({state:[{t:this.instance}]},40).to({state:[{t:this.instance_1}]},160).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({scaleX:0.68,scaleY:0.68,x:216.5,y:-25.6},40,cjs.Ease.get(-1)).to({_off:true,scaleX:1,scaleY:1,x:392,y:-29.1},160).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(-203.9,-9.3,1,1,0,0,0,75,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.62,scaleY:0.61,skewY:5.7,x:306,y:-20.3},39,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewY:0,x:815.2,y:-35.9},161).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.9,-52.3,155,92);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(98.6,-73.7,1,1,0,0,0,100.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(96.3,-71.6,1,1,0,0,0,108.6,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-93.5,217.3,44);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(323.4,48.1,1,1,0,0,0,92.9,26.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({x:92.9,y:47.6,alpha:0.488},20,cjs.Ease.get(1)).to({y:47.9,alpha:1},22).to({y:48.1,alpha:0.488},23).to({alpha:1},25).wait(20).to({alpha:0},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(97.4,-66.5,1,0.073,0,0,0,96.2,-71.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({_off:false},0).to({regY:-71.5,scaleY:1,x:96.2,alpha:1},10,cjs.Ease.get(1)).wait(100).to({regX:97.2,scaleX:0.02,x:96.3,alpha:0},5).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(94.8,-128.8,1,1,0,0,0,32,32);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({alpha:1},10).wait(100).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ13();
	this.instance.setTransform(43.8,77.6,1,1,0,0,0,100,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:49.8},14).to({x:43.8},15).to({x:39.8},15).to({x:43.8},15).wait(1));

	// lobby-mockup-M1-mid_06.png
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(37.2,29.1,1,1,0,0,0,36,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:39.2},14).to({x:37.2},15).to({x:34.2},15).to({x:37.2},15).wait(1));

	// lobby-mockup-M1-mid_03.png
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(83.7,33.9,1,1,0,0,0,34,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:84.7,y:32.9},14).to({x:83.7,y:33.9},15).to({x:84.7,y:32.9},15).to({x:83.7,y:33.9},15).wait(1));

	// lobby-mockup-M1-mid_01.png
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(-8.6,36,1,1,0,0,0,33.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-9.6,y:35},14).to({x:-8.6,y:36},15).to({x:-9.6,y:35},15).to({x:-8.6,y:36},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.2,-14.4,200,115.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(375,206,1,1,0,0,0,136,217);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({alpha:0.289},111).to({alpha:0},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.baseGameBackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,422);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(91.8,54.8,1,1,0,0,0,91.8,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:56.8},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(91,56.1,1,1,0,0,0,144,52.3);

	this.instance_2 = new lib.button2();
	this.instance_2.setTransform(-53,5.8,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,3.8,288,104.7);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 33
	this.instance = new lib.Символ33();
	this.instance.setTransform(-0.4,43.9,1,1,0,0,0,108.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.469},4).to({alpha:1},5).wait(6));

	// Символ 32
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(0.1,0.7,1,1,0,0,0,108.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({alpha:0.469},4).to({alpha:1},5).wait(4));

	// Символ 31
	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(-0.6,-43.8,1,1,0,0,0,107.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({alpha:0.469},4).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.1,-45.3,220.4,90.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(108.7,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,220.4,90.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(90,204,1,1,0,0,0,90,54.5);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({y:54.5,alpha:1},15,cjs.Ease.get(1)).wait(95).to({alpha:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ34();
	this.instance.setTransform(160.2,87,1,1,0,0,0,108.9,65);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({alpha:1},4).wait(101).to({alpha:0},5).wait(1));

	// Слой 8
	this.instance_1 = new lib.reelGridFrame();
	this.instance_1.setTransform(48.9,18,0.445,0.445);

	this.instance_2 = new lib.Анимация4("synched",0);
	this.instance_2.setTransform(160.1,86.3);
	this.instance_2._off = true;

	this.instance_3 = new lib.Анимация5("synched",0);
	this.instance_3.setTransform(160.1,86.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},106).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:true},106).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195).to({_off:false},0).to({_off:true},5).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(161.9,91,1,1,0,0,0,161.9,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(201));

	// Слой 10
	this.instance_5 = new lib.Символ30();
	this.instance_5.setTransform(160.3,85.6,1,1,0,0,0,108.7,43.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({_off:false},0).to({alpha:1},5).wait(105).to({alpha:0},5).wait(1));

	// Слой 7
	this.instance_6 = new lib.Символ14();
	this.instance_6.setTransform(245.2,22.8,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({y:7.5},4,cjs.Ease.get(-1)).to({y:240.1},15,cjs.Ease.get(1)).wait(5).to({y:222.1},5,cjs.Ease.get(-1)).to({y:458.8},15,cjs.Ease.get(1)).wait(5).to({y:440.4},5,cjs.Ease.get(-1)).to({y:937.6},15,cjs.Ease.get(1)).wait(110).to({y:22.8},5).wait(1));

	// Слой 5
	this.instance_7 = new lib.Символ15();
	this.instance_7.setTransform(202.7,64.5,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({y:49.2},4,cjs.Ease.get(-1)).to({y:281.9},15,cjs.Ease.get(1)).wait(5).to({y:263.9},5,cjs.Ease.get(-1)).to({y:500.6},15,cjs.Ease.get(1)).wait(5).to({y:482.1},5,cjs.Ease.get(-1)).to({y:935.7},15,cjs.Ease.get(1)).wait(114).to({y:64.5},5).wait(1));

	// Слой 4
	this.instance_8 = new lib.Символ16();
	this.instance_8.setTransform(159.1,109.7,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({y:94.4},4,cjs.Ease.get(-1)).to({y:327},15,cjs.Ease.get(1)).wait(5).to({y:309},5,cjs.Ease.get(-1)).to({y:545.7},15,cjs.Ease.get(1)).wait(5).to({y:527.3},5,cjs.Ease.get(-1)).to({y:936.8},15,cjs.Ease.get(1)).wait(118).to({y:109.7},5).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ17();
	this.instance_9.setTransform(116.7,22.3,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({y:7},4,cjs.Ease.get(-1)).to({y:239.7},15,cjs.Ease.get(1)).wait(5).to({y:221.7},5,cjs.Ease.get(-1)).to({y:458.4},15,cjs.Ease.get(1)).wait(5).to({y:439.9},5,cjs.Ease.get(-1)).to({y:936.7},15,cjs.Ease.get(1)).wait(122).to({y:22.3},5).wait(1));

	// Слой 2
	this.instance_10 = new lib.Символ18();
	this.instance_10.setTransform(72.7,67.2,1,1,0,0,0,54.4,228.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:51.9},4,cjs.Ease.get(-1)).to({y:284.5},15,cjs.Ease.get(1)).wait(5).to({y:266.5},5,cjs.Ease.get(-1)).to({y:503.2},15,cjs.Ease.get(1)).wait(5).to({y:484.8},5,cjs.Ease.get(-1)).to({y:937.5},15,cjs.Ease.get(1)).wait(126).to({y:67.2},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1076.7,323.8,1414.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxcLiIAA1SIAKgBIg9hsIEWAAIgDAHQgdA0geAzIAOgBIBBhtICoAAIhCBtIAOAAIBDhtICmAAIhABrIAQABIA/hsICLABIA+BrIAAAAIAAAAIABABIABAAIA0AAIDIABIAAgBIAoABIAAgBIAqgBIBnABICaABIAAgBIAMABIA/hzICgAAIAGAIIg7BrIAOAAIA+hxICcAAIAIAIIg8BnIANAAIBChvICVAAIAOAGIg9BqIAKAAIBBhwIEIABIhBBtIAAVUg");
	mask.setTransform(160.9,467.3);

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(161.9,477.5,1,1,0,0,0,161.9,91);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.1,393.4,233.7,147.8);


// stage content:
(lib.wildchase240x400 = function(mode,startPosition,loop) {
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

	// text
	this.instance = new lib.Символ20();
	this.instance.setTransform(23,249.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// button
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(28.3,295.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// slot
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(121.9,144.3,1,1,0,0,0,161.9,434.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// person
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(115.5,48.5,0.943,0.943,0,0,0,36,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// avto
	this.instance_4 = new lib.Символ24();
	this.instance_4.setTransform(67.6,430.9,1.001,1,0,0,-2.6,75,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// fon 
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(118,211,1,1,0,0,0,375,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.4,-780,779.4,1423.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
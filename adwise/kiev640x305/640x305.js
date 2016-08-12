(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/kiy_05.png?1471015561711", id:"kiy_05"},
		{src:"images/kiy_18aaaaa.jpg?1471015561711", id:"kiy_18aaaaa"}
	]
};



// symbols:



(lib.kiy_05 = function() {
	this.initialize(img.kiy_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,182);


(lib.kiy_18aaaaa = function() {
	this.initialize(img.kiy_18aaaaa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,939,310);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABQCbQgcAAgPgUIAAgDIAGgBIABAAIAhAGQAGAAAQgKQAdgfAKgaQAMgYAVgVIABAAIADAEIAKgHIgBgHIAAgBQAKgOADAAIgDgCQgWgQgIgYQgCgagDgGIAAgBIAmgwIAHACQAAgGAGgHQATgMAegFIAGgBQASAAAdAGQAgAIAQAAIAIAAIAAgBIAAgGIAGgBIAZACIAMgFIABAAIgCAGIAMABIArgBQADAAAAAFIAAAFIgBAEIgHACQgPABgDARQgIAHgBADIABABQACADABAIIADAQIAAAlIBjgHIAAg4IgCgVQgDgGgEgCIgLgBIgHgBIAAgCIAAgGIAAgEIABgDIAFAAIBDAAIAUAAIAFAAQADAAAAAFIAAAFIgBAEQgCACgDAAQgKABgFAEQgEAEgCAJQgFAIAAADIABACQACAAABAGIAAADQgCAJgEANIAAAEQAAADgDAFQAHAIACALIAABGIAAAPIABANIAEAHQACADAEABIALACIAHABIAAAFIAAAHIgCABIgEAAIgSgCIgQAAIg+ACQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCgIIACgEIASgFQAEgCABgDIAFgKQABgHACAAIgBgMIABgGIAAgFIAAgHQAFgDABgDIAAAAQgCgEgFgEIAAgYIhjAHIACA/QABALACAEQACAGAEABIATADIABAFIAAAHIgDABIgkgBIgBgCIgIgBIgDAAIgDAAIgDABIgBACIgQAAQgQAAgVAIIgBAAIgDgBIgCgHQAAgDAGgDIAIgEIAGgBQAJgEAEgFQAEgGACgLIACiYIgCgQIgMADIgGgBQg5gNgqgBQgdABgTAOQgXAOABArQAAAcANAJQAFAPAwAAIADgBIgBgsQAAgYgMgKIgIAAIAAgLIBLgCQACAAABAFIAAAEIgBAFIgBAAQgRAAABARIABCBQADAdATAAIgCALIAAABQglgOgOAAIgiADIAAgJIALgBQALgHAAgUQAGAAAAgCIAAgEQgGgCAAgBIAAgiIgCgBIgGABIgngBIgmA4QgKAUglAmQgZAbghAAgAtpCOQgVAAgLgFQgLgGgRgLQgPgLgXgZQgWgZgIgNIgdgrQgEgFgDgKIgLgLIgXAMIAAAgQAAAKgIANQAIAKABAGIADAJQACADAEABIAJABIAHACIABAFIAAAHIgEABIgEAAQgjAAg0AOIgDAAIgCgBIgBgHIABgFIACgCIALgCQAEgCAEgKIAFgSIADg0IACgEIgDgFIAAg0IADgDIACgFIADAAIgBgGIgEgDIgCgBIAAgSQgCgVgBgFQgDgFgDgCIgKgDIgGgBIgBgHIABgGIAGgBIARABQAKAAASADIAMAFQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIgBgDIANgBIAKgCIADAAQAFAAAAAFIgCAJQAAABgGABQgJABgDADQgFAEgBAJIgBBDQADAHAFAAIAGgDQAJgFAEgEIAgghIAJgEIgCgGIALgOQADgFAAgEQAAgGgFAAIgGgBIgBgFIABgIIADgCIACAAIAMACQAFAAAHAEQAigDAHgDIAEAAIADACIAAAGIAAAGIgHADIgIACIgHAEIgpAjQgHAIgPAWIAzBdIAEAFIACAEIgBADIgBADIAHANIAMAEIAZAbQANANAPAEQAJACAJAAIAMgBQAOgCAKgEIAJgFIAEABQADABAAADIgFASIgVAGQgIACgYABgAN6BiIgDgBIgBgHQAAgDAFgDIAJgEIAFgBQAKgEADgFQAFgGACgLIABiYIgCgTQgCgGgEgCIgLgFIgHgBIgBgDIABgKIAFgBIAwAEIArgBQADAAAAAFIAAAFIgBAEIgGACQgPABgDARQgJAHAAADIAAABQADADABAIIACAQIAAAlIBjgHIAAg4QgBgPgBgGQgCgGgEgCIgLgBIgHgBIgBgCIAAgGIAAgEIABgDIAFAAIBCAAIAWAAIAEAAQADAAAAAFIAAAFIgBAEQgBACgDAAQgLABgFAEQgEAEgCAJQgFAIABADIABACQACAAgBAGIAAADQAAAJgFANIABAEQAAADgDAFQAGAIABALIAABGIABAPIABANIAEAHQACADAFABIALACIAGABIABAFIAAAHIgDABIgEAAIgSgCIgQAAIg9ACQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIgBgIIACgEIARgFQAEgCACgDIAEgKQABgHACAAIgBgMIABgGIAAgMQAGgDAAgDIAAAAQgBgEgGgEIAAgYIhjAHIACA/QABALACAEQACAGAFABIATADIAAAMIgDABIgjgBIgCgCIgHgBIgEAAIgCAAIgDABIgBACIgRAAQgQAAgUAIgAKbBcIgcAEIAAgMQAPgFAFgFIAEgGIAAinQgDgXgEgCIgQgIIgBgJIBQAAIABANQgQABgEADQgDACgDAVIgBByQAtg+A4g+IgBAAIACgJIgHgGIAAgBIgJgEIgCgMIBcABIgGAPQgXAAgDADIABCyQAFAVAGAFQAGAEANADIACAJQgtAAgPgGIgdAGIAAgNQAPgFAFgEQAGgEAAiDIgBgEQhHBdgTAjQgFAJgGAGIACADQAGAEANACIACAJQgtAAgQgEgAmmBgIgCgGQAAgLAUgFQARgKAAgJIAAhSIADAAIAAAAIgBgBIAAgBIAFgEIAAgDQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQACAAABgFIgBAAIgGABIAAgeQAAgcgKAAIgEgDIADgJQATAHANAAIAlgDIgBALIgCAAQgRAAAAASIAABkQAAAlAJAAQAKAGANAAQAYAAAPgUIAIgVIgEgGQAAgVgYgVQgXgNgMAAIgBAAIAAgCQAFgUAIAAQAMAGAFAAQAQAAAFgiIAEgGQgDgXgggOQgSgEgaAAIgHAAQgeABgvAPIgMADIgCAAIAAAGIAHAdIgLAKQgPgZgKgJIgTgRQgKgIgZgDIgOADIgGAAIgGAGIAAAFIgEALIAEAWIAAAsIA8ABQAHgGAEgDIAEgMIAOAAIABBHIgPgBQAAgLgHgKQgHgKgRAAIgsABIAABDQADATAFABQAEACAJAAIAaABIAFACIACgBIABAAIAFgBIAJgEQAJgDALgJQAKgJAOgaIALAMIgHAcIgBAOIABAVIgogBIgJgCIgIABIiKAAIACgLQAPgCAEgEQAFgEADgHQACgHACgbIgBhJIAEgCIAAgEIADgCIADgBIACABIAGAAIAAgCIAAgEIgQAAIgCgbQgCgXgDgHQgDgHgGgEQgGgEgPgCIAHgOIB2ABIAIAFIAEgCIADAAIATgCIgDgHIACAAIAOAGIASgBIAAAFIAVABQARAAAogHQAlgHAOAAIACAAQBCAAAVA3IACAEQABAEAEABQAAAFgIAQQgKAPgKAFQgMAGgDAAIAAADQAPAKAHAJQAGAKAKAUIAIAPQgMAXAAAGQgQAagGAAIgBABQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABIgFAAQAAAFgDAAQgSAEgdAAIg2gGQgQAAgZAJQAAABgGAAgAtgBcIgcAEIAAgMQAPgFAFgFIADgGIAAinQgDgXgDgCIgQgIIgBgJIBQAAIABANQgRABgDADQgDACgDAVIgBByQAtg+A4g+IgBAAIABgJIgHgGIAAgBIgJgEIgCgMIBcABIgGAPQgWAAgDADIABCyQAFAVAGAFQAFAEANADIACAJQgsAAgPgGIgeAGIAAgNQAQgFAFgEQAFgEAAiDIgBgEQhHBdgTAjQgFAJgGAGIACADQAHAEAMACIACAJQgtAAgPgEgAjXBUQgFgFgBgDIACgCIAEgDIAQABIAUgCIALgDQAegZAEgcQADgcAAg0IgBghIgCgTQgCgGgEgCIgMgFIgGgBIgBgDIAAgEIABgGIAFgBICtAGIAkgDIAVAAIAEAAQADAAAAAFIAAAFIAAAEIgFACQgLABgFAEQgEAEgCAJQgEAIAAADIABACQABAAAAAGIAAADQAAAJgEANIABAEQAAADgEAFQAHAIABALIAABGIAAAPIABANIAEAHQADADAEABIALACIAHABIAAAFIAAAHIgDABIgDAAIgTgCIgQAAIgvABIgMABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAgIIABgEIARgFIAFgFIADgKQABgHADAAIgCgMIACgLIgCgHQAHgDAAgDIAAAAQgBgEgHgEIABhfIgCgRIgjgKIg2AHIgCBYQgBBIgyAWQgKAEgNAFQgWAHgHABIgXACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.6,-15.5,229.3,31.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJB9IgZACQgDAAgDgEIAAgEQAJgDANgLIgBjFQAAgOgcgJIAAAAQAAgCAEgJQAkAKAPAAIAuABIgDAKIgKgBQgQAAgCAjIgCAAIgFgCIAAAAIgBAEQgBACAHAAIgDAHIADAEIACAeIAlgBQAUAAAiAPQAgAYAAAgIAKAQQAAADgKADQgFANgNAQQgdAeg1ACgAAXgKIgCABQAAAIgDAAQAAABADAFIAAABQAAAFgDABQAAAEADADIAABCIACAJIAOABQAZAAARgHIABAAIABACIACgBIABAFIAGgDIAAgEIACABIgEgEIgEAAIABgCQALgGAEgcQAAgLgDgTQgRgcgaAAgAjLBuQANgGANgMIgBieIAFgJIgEgRIgHAAQgUAAgHAHIgOARIgHAEIAAAWIgNgBIALhKIAHgCQADAAADACIAcAAQAEAEAQAAQAUAAArgFIAogBQACAjALAlIgMAJQgJgUgKgNQgKgNgJgEQgGgDgJAAIgFABIgEB2IgGAIIACAQIAHAOQADAaAMAMIAMADIAAANIgGAAQgWAAgRgCIgPgBIgLACQgGACgaABgACcB3IgBgMQAMgBADgFQAEgEAAgQIAAihIgJgTQgCgFgMAAIACgQIAyABIALAIIAGgGIAXAAIgBAJQgNAEgEAGQgDAGgCAXIAAAjIgDAIIgEAAIgJAMIAEAGIAAAGIAIACIADAAIAEBUQABAQAJAHIANADIAAAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-12.7,49.3,25.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-17.9,123.8,35.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-26.3,206,52.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kiy_05();
	this.instance.setTransform(-78.2,-84.2,0.926,0.926);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-84.2,156.5,168.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-11.5,150.7,23);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3C0000","#FF0000"],[0,0.718],0,38,0,-38).s().p("At2EqQh8AAhXhXQhYhXAAh8QAAh7BYhXQBXhXB8AAIbtAAQB8AABXBXQBYBXAAB7QAAB8hYBXQhXBXh8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.6,-29.9,237.3,59.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg48AbCMAAAg2DMBx5AAAMAAAA2Dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.6,-173,729.2,346.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kiy_18aaaaa();
	this.instance.setTransform(-469.5,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.5,-155,939,310);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(38,11.8,0.435,0.435);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,x:114.8,y:1.3,alpha:1},7).to({scaleX:1,scaleY:1,x:102.8,y:3},3).wait(1));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-53.2,0.4,0.37,0.37);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:1.43,scaleY:1.43,alpha:1},6).to({scaleX:1,scaleY:1},3).wait(11));

	// Символ 22
	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(-120.6,9.5,0.434,0.434);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:-0.1,scaleX:1.21,scaleY:1.21,x:-168.2,y:-4.4,alpha:1},6).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-155.6,y:-0.6},3).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,1.7,53.8,15.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-26.3,206,52.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.2,-84.2,156.5,168.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(0,-2.5);

	this.instance_1 = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.6,-29.9,237.3,59.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(0,0,1.072,1.072);
	this.instance.alpha = 0.512;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.6,-29.9,237.3,59.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(-12.7,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-32,254.3,64.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-3.7},0).wait(1).to({x:-7.4},0).wait(1).to({x:-11},0).wait(1).to({x:-14.5},0).wait(1).to({x:-18},0).wait(1).to({x:-21.4},0).wait(1).to({x:-24.8},0).wait(1).to({x:-28.1},0).wait(1).to({x:-31.4},0).wait(1).to({x:-34.6},0).wait(1).to({x:-37.7},0).wait(1).to({x:-40.9},0).wait(1).to({x:-43.9},0).wait(1).to({x:-46.9},0).wait(1).to({x:-49.9},0).wait(1).to({x:-52.9},0).wait(1).to({x:-55.8},0).wait(1).to({x:-58.6},0).wait(1).to({x:-61.4},0).wait(1).to({x:-64.2},0).wait(1).to({x:-66.9},0).wait(1).to({x:-69.6},0).wait(1).to({x:-72.3},0).wait(1).to({x:-74.9},0).wait(1).to({x:-77.5},0).wait(1).to({x:-80},0).wait(1).to({x:-82.6},0).wait(1).to({x:-85},0).wait(1).to({x:-87.5},0).wait(1).to({x:-89.9},0).wait(1).to({x:-92.3},0).wait(1).to({x:-94.6},0).wait(1).to({x:-97},0).wait(1).to({x:-99.3},0).wait(1).to({x:-101.5},0).wait(1).to({x:-103.8},0).wait(1).to({x:-106},0).wait(1).to({x:-108.1},0).wait(1).to({x:-110.3},0).wait(1).to({x:-112.4},0).wait(1).to({x:-114.5},0).wait(1).to({x:-116.6},0).wait(1).to({x:-118.6},0).wait(1).to({x:-120.6},0).wait(1).to({x:-122.6},0).wait(1).to({x:-124.6},0).wait(1).to({x:-126.5},0).wait(1).to({x:-128.5},0).wait(1).to({x:-130.4},0).wait(1).to({x:-132.2},0).wait(1).to({x:-134.1},0).wait(1).to({x:-135.9},0).wait(1).to({x:-137.7},0).wait(1).to({x:-139.5},0).wait(1).to({x:-141.3},0).wait(1).to({x:-143},0).wait(1).to({x:-144.7},0).wait(1).to({x:-146.4},0).wait(1).to({x:-148.1},0).wait(1).to({x:-149.8},0).wait(1).to({x:-151.4},0).wait(1).to({x:-153.1},0).wait(1).to({x:-154.7},0).wait(1).to({x:-156.3},0).wait(1).to({x:-157.8},0).wait(1).to({x:-159.4},0).wait(1).to({x:-160.9},0).wait(1).to({x:-162.4},0).wait(1).to({x:-163.9},0).wait(1).to({x:-165.4},0).wait(1).to({x:-166.9},0).wait(1).to({x:-168.3},0).wait(1).to({x:-169.7},0).wait(1).to({x:-171.2},0).wait(1).to({x:-172.6},0).wait(1).to({x:-173.9},0).wait(1).to({x:-175.3},0).wait(1).to({x:-176.7},0).wait(1).to({x:-178},0).wait(1).to({x:-179.3},0).wait(1).to({x:-180.6},0).wait(1).to({x:-181.9},0).wait(1).to({x:-183.2},0).wait(1).to({x:-184.5},0).wait(1).to({x:-185.7},0).wait(1).to({x:-187},0).wait(1).to({x:-188.2},0).wait(1).to({x:-189.4},0).wait(1).to({x:-190.6},0).wait(1).to({x:-191.8},0).wait(1).to({x:-193},0).wait(1).to({x:-194.1},0).wait(1).to({x:-195.3},0).wait(1).to({x:-196.4},0).wait(1).to({x:-197.5},0).wait(1).to({x:-198.6},0).wait(1).to({x:-199.7},0).wait(1).to({x:-200.8},0).wait(1).to({x:-201.9},0).wait(1).to({x:-202.9},0).wait(1).to({x:-204},0).wait(1).to({x:-205},0).wait(1).to({x:-206.1},0).wait(1).to({x:-207.1},0).wait(1).to({x:-208.1},0).wait(1).to({x:-209.1},0).wait(1).to({x:-210.1},0).wait(1).to({x:-211},0).wait(1).to({x:-212},0).wait(1).to({x:-212.9},0).wait(1).to({x:-213.9},0).wait(1).to({x:-214.8},0).wait(1).to({x:-215.7},0).wait(1).to({x:-216.7},0).wait(1).to({x:-217.6},0).wait(1).to({x:-218.4},0).wait(1).to({x:-219.3},0).wait(1).to({x:-220.2},0).wait(1).to({x:-221.1},0).wait(1).to({x:-221.9},0).wait(1).to({x:-222.8},0).wait(1).to({x:-223.6},0).wait(1).to({x:-224.4},0).wait(1).to({x:-225.3},0).wait(1).to({x:-226.1},0).wait(1).to({x:-226.9},0).wait(1).to({x:-227.7},0).wait(1).to({x:-228.4},0).wait(1).to({x:-229.2},0).wait(1).to({x:-230},0).wait(1).to({x:-230.8},0).wait(1).to({x:-231.5},0).wait(1).to({x:-232.2},0).wait(1).to({x:-233},0).wait(1).to({x:-233.7},0).wait(1).to({x:-234.4},0).wait(1).to({x:-235.1},0).wait(1).to({x:-235.9},0).wait(1).to({x:-236.5},0).wait(1).to({x:-237.2},0).wait(1).to({x:-237.9},0).wait(1).to({x:-238.6},0).wait(1).to({x:-239.3},0).wait(1).to({x:-239.9},0).wait(1).to({x:-240.6},0).wait(1).to({x:-241.2},0).wait(1).to({x:-241.9},0).wait(1).to({x:-242.5},0).wait(1).to({x:-243.1},0).wait(1).to({x:-243.8},0).wait(1).to({x:-244.4},0).wait(1).to({x:-245},0).wait(1).to({x:-245.6},0).wait(1).to({x:-246.2},0).wait(1).to({x:-246.8},0).wait(1).to({x:-247.3},0).wait(1).to({x:-247.9},0).wait(1).to({x:-248.5},0).wait(1).to({x:-249.1},0).wait(1).to({x:-249.6},0).wait(1).to({x:-250.2},0).wait(1).to({x:-250.7},0).wait(1).to({x:-251.2},0).wait(1).to({x:-251.8},0).wait(1).to({x:-252.3},0).wait(1).to({x:-252.8},0).wait(1).to({x:-253.4},0).wait(1).to({x:-253.9},0).wait(1).to({x:-254.4},0).wait(1).to({x:-254.9},0).wait(1).to({x:-255.4},0).wait(1).to({x:-255.9},0).wait(1).to({x:-256.3},0).wait(1).to({x:-256.8},0).wait(1).to({x:-257.3},0).wait(1).to({x:-257.8},0).wait(1).to({x:-258.2},0).wait(1).to({x:-258.7},0).wait(1).to({x:-259.2},0).wait(1).to({x:-259.6},0).wait(1).to({x:-260.1},0).wait(1).to({x:-260.5},0).wait(1).to({x:-260.9},0).wait(1).to({x:-261.4},0).wait(1).to({x:-261.8},0).wait(1).to({x:-262.2},0).wait(1).to({x:-262.6},0).wait(1).to({x:-263},0).wait(1).to({x:-263.5},0).wait(1).to({x:-263.9},0).wait(1).to({x:-264.3},0).wait(1).to({x:-264.7},0).wait(1).to({x:-265.1},0).wait(1).to({x:-265.4},0).wait(1).to({x:-265.8},0).wait(1).to({x:-266.2},0).wait(1).to({x:-266.6},0).wait(1).to({x:-267},0).wait(1).to({x:-267.3},0).wait(1).to({x:-267.7},0).wait(1).to({x:-268.1},0).wait(1).to({x:-268.4},0).wait(1).to({x:-268.8},0).wait(1).to({x:-269.1},0).wait(1).to({x:-269.5},0).wait(1).to({x:-269.8},0).wait(1).to({x:-270.1},0).wait(1).to({x:-270.5},0).wait(1).to({x:-270.8},0).wait(1).to({x:-271.1},0).wait(1).to({x:-271.5},0).wait(1).to({x:-271.8},0).wait(1).to({x:-272.1},0).wait(1).to({x:-272.4},0).wait(1).to({x:-272.7},0).wait(1).to({x:-273},0).wait(1).to({x:-273.3},0).wait(1).to({x:-273.6},0).wait(1).to({x:-273.9},0).wait(1).to({x:-274.2},0).wait(1).to({x:-274.5},0).wait(1).to({x:-274.8},0).wait(1).to({x:-275.1},0).wait(1).to({x:-275.4},0).wait(1).to({x:-275.7},0).wait(1).to({x:-276},0).wait(1).to({x:-276.2},0).wait(1).to({x:-276.5},0).wait(1).to({x:-276.8},0).wait(1).to({x:-277.1},0).wait(1).to({x:-277.3},0).wait(1).to({x:-277.6},0).wait(1).to({x:-277.8},0).wait(1).to({x:-278.1},0).wait(1).to({x:-278.4},0).wait(1).to({x:-278.6},0).wait(1).to({x:-278.9},0).wait(1).to({x:-279.1},0).wait(1).to({x:-279.4},0).wait(1).to({x:-279.6},0).wait(1).to({x:-279.8},0).wait(1).to({x:-280.1},0).wait(1).to({x:-280.3},0).wait(1).to({x:-280.6},0).wait(1).to({x:-280.8},0).wait(1).to({x:-281},0).wait(1).to({x:-281.2},0).wait(1).to({x:-281.5},0).wait(1).to({x:-281.7},0).wait(1).to({x:-281.9},0).wait(1).to({x:-282.1},0).wait(1).to({x:-282.4},0).wait(1).to({x:-282.6},0).wait(1).to({x:-282.8},0).wait(1).to({x:-283},0).wait(1).to({x:-283.2},0).wait(1).to({x:-283.4},0).wait(1).to({x:-283.6},0).wait(1).to({x:-283.8},0).wait(1).to({x:-284},0).wait(1).to({x:-284.2},0).wait(1).to({x:-284.4},0).wait(1).to({x:-284.6},0).wait(1).to({x:-284.8},0).wait(1).to({x:-285},0).wait(1).to({x:-285.2},0).wait(1).to({x:-285.4},0).wait(1).to({x:-285.6},0).wait(1).to({x:-285.8},0).wait(1).to({x:-286},0).wait(1).to({x:-286.2},0).wait(1).to({x:-286.4},0).wait(1).to({x:-286.6},0).wait(1).to({x:-286.8},0).wait(1).to({x:-286.9},0).wait(1).to({x:-287.1},0).wait(1).to({x:-287.3},0).wait(1).to({x:-287.5},0).wait(1).to({x:-287.7},0).wait(1).to({x:-287.8},0).wait(1).to({x:-288},0).wait(1).to({x:-288.2},0).wait(1).to({x:-288.4},0).wait(1).to({x:-288.5},0).wait(1).to({x:-288.7},0).wait(1).to({x:-288.9},0).wait(1).to({x:-289.1},0).wait(1).to({x:-289.2},0).wait(1).to({x:-289.4},0).wait(1).to({x:-289.6},0).wait(1).to({x:-289.7},0).wait(1).to({x:-289.9},0).wait(1).to({x:-290.1},0).wait(1).to({x:-290.2},0).wait(1).to({x:-290.4},0).wait(1).to({x:-290.6},0).wait(1).to({x:-290.7},0).wait(1).to({x:-290.9},0).wait(1).to({x:-291},0).wait(1).to({x:-287.3},0).wait(1).to({x:-283.7},0).wait(1).to({x:-280.1},0).wait(1).to({x:-276.6},0).wait(1).to({x:-273.1},0).wait(1).to({x:-269.7},0).wait(1).to({x:-266.4},0).wait(1).to({x:-263},0).wait(1).to({x:-259.8},0).wait(1).to({x:-256.6},0).wait(1).to({x:-253.4},0).wait(1).to({x:-250.3},0).wait(1).to({x:-247.3},0).wait(1).to({x:-244.2},0).wait(1).to({x:-241.3},0).wait(1).to({x:-238.3},0).wait(1).to({x:-235.5},0).wait(1).to({x:-232.6},0).wait(1).to({x:-229.8},0).wait(1).to({x:-227},0).wait(1).to({x:-224.3},0).wait(1).to({x:-221.6},0).wait(1).to({x:-219},0).wait(1).to({x:-216.4},0).wait(1).to({x:-213.8},0).wait(1).to({x:-211.2},0).wait(1).to({x:-208.7},0).wait(1).to({x:-206.2},0).wait(1).to({x:-203.8},0).wait(1).to({x:-201.4},0).wait(1).to({x:-199},0).wait(1).to({x:-196.7},0).wait(1).to({x:-194.3},0).wait(1).to({x:-192.1},0).wait(1).to({x:-189.8},0).wait(1).to({x:-187.6},0).wait(1).to({x:-185.4},0).wait(1).to({x:-183.2},0).wait(1).to({x:-181},0).wait(1).to({x:-178.9},0).wait(1).to({x:-176.8},0).wait(1).to({x:-174.8},0).wait(1).to({x:-172.7},0).wait(1).to({x:-170.7},0).wait(1).to({x:-168.7},0).wait(1).to({x:-166.8},0).wait(1).to({x:-164.8},0).wait(1).to({x:-162.9},0).wait(1).to({x:-161},0).wait(1).to({x:-159.1},0).wait(1).to({x:-157.3},0).wait(1).to({x:-155.5},0).wait(1).to({x:-153.6},0).wait(1).to({x:-151.9},0).wait(1).to({x:-150.1},0).wait(1).to({x:-148.4},0).wait(1).to({x:-146.6},0).wait(1).to({x:-144.9},0).wait(1).to({x:-143.3},0).wait(1).to({x:-141.6},0).wait(1).to({x:-140},0).wait(1).to({x:-138.3},0).wait(1).to({x:-136.7},0).wait(1).to({x:-135.1},0).wait(1).to({x:-133.6},0).wait(1).to({x:-132},0).wait(1).to({x:-130.5},0).wait(1).to({x:-129},0).wait(1).to({x:-127.5},0).wait(1).to({x:-126},0).wait(1).to({x:-124.5},0).wait(1).to({x:-123.1},0).wait(1).to({x:-121.6},0).wait(1).to({x:-120.2},0).wait(1).to({x:-118.8},0).wait(1).to({x:-117.5},0).wait(1).to({x:-116.1},0).wait(1).to({x:-114.7},0).wait(1).to({x:-113.4},0).wait(1).to({x:-112.1},0).wait(1).to({x:-110.8},0).wait(1).to({x:-109.5},0).wait(1).to({x:-108.2},0).wait(1).to({x:-106.9},0).wait(1).to({x:-105.7},0).wait(1).to({x:-104.4},0).wait(1).to({x:-103.2},0).wait(1).to({x:-102},0).wait(1).to({x:-100.8},0).wait(1).to({x:-99.6},0).wait(1).to({x:-98.4},0).wait(1).to({x:-97.3},0).wait(1).to({x:-96.1},0).wait(1).to({x:-95},0).wait(1).to({x:-93.9},0).wait(1).to({x:-92.8},0).wait(1).to({x:-91.7},0).wait(1).to({x:-90.6},0).wait(1).to({x:-89.5},0).wait(1).to({x:-88.5},0).wait(1).to({x:-87.4},0).wait(1).to({x:-86.4},0).wait(1).to({x:-85.3},0).wait(1).to({x:-84.3},0).wait(1).to({x:-83.3},0).wait(1).to({x:-82.3},0).wait(1).to({x:-81.3},0).wait(1).to({x:-80.4},0).wait(1).to({x:-79.4},0).wait(1).to({x:-78.5},0).wait(1).to({x:-77.5},0).wait(1).to({x:-76.6},0).wait(1).to({x:-75.7},0).wait(1).to({x:-74.7},0).wait(1).to({x:-73.8},0).wait(1).to({x:-72.9},0).wait(1).to({x:-72.1},0).wait(1).to({x:-71.2},0).wait(1).to({x:-70.3},0).wait(1).to({x:-69.5},0).wait(1).to({x:-68.6},0).wait(1).to({x:-67.8},0).wait(1).to({x:-67},0).wait(1).to({x:-66.1},0).wait(1).to({x:-65.3},0).wait(1).to({x:-64.5},0).wait(1).to({x:-63.7},0).wait(1).to({x:-62.9},0).wait(1).to({x:-62.2},0).wait(1).to({x:-61.4},0).wait(1).to({x:-60.6},0).wait(1).to({x:-59.9},0).wait(1).to({x:-59.1},0).wait(1).to({x:-58.4},0).wait(1).to({x:-57.7},0).wait(1).to({x:-56.9},0).wait(1).to({x:-56.2},0).wait(1).to({x:-55.5},0).wait(1).to({x:-54.8},0).wait(1).to({x:-54.1},0).wait(1).to({x:-53.4},0).wait(1).to({x:-52.8},0).wait(1).to({x:-52.1},0).wait(1).to({x:-51.4},0).wait(1).to({x:-50.8},0).wait(1).to({x:-50.1},0).wait(1).to({x:-49.5},0).wait(1).to({x:-48.9},0).wait(1).to({x:-48.2},0).wait(1).to({x:-47.6},0).wait(1).to({x:-47},0).wait(1).to({x:-46.4},0).wait(1).to({x:-45.8},0).wait(1).to({x:-45.2},0).wait(1).to({x:-44.6},0).wait(1).to({x:-44},0).wait(1).to({x:-43.4},0).wait(1).to({x:-42.9},0).wait(1).to({x:-42.3},0).wait(1).to({x:-41.7},0).wait(1).to({x:-41.2},0).wait(1).to({x:-40.6},0).wait(1).to({x:-40.1},0).wait(1).to({x:-39.6},0).wait(1).to({x:-39},0).wait(1).to({x:-38.5},0).wait(1).to({x:-38},0).wait(1).to({x:-37.5},0).wait(1).to({x:-37},0).wait(1).to({x:-36.5},0).wait(1).to({x:-36},0).wait(1).to({x:-35.5},0).wait(1).to({x:-35},0).wait(1).to({x:-34.5},0).wait(1).to({x:-34},0).wait(1).to({x:-33.6},0).wait(1).to({x:-33.1},0).wait(1).to({x:-32.6},0).wait(1).to({x:-32.2},0).wait(1).to({x:-31.7},0).wait(1).to({x:-31.3},0).wait(1).to({x:-30.8},0).wait(1).to({x:-30.4},0).wait(1).to({x:-30},0).wait(1).to({x:-29.5},0).wait(1).to({x:-29.1},0).wait(1).to({x:-28.7},0).wait(1).to({x:-28.3},0).wait(1).to({x:-27.9},0).wait(1).to({x:-27.4},0).wait(1).to({x:-27},0).wait(1).to({x:-26.6},0).wait(1).to({x:-26.2},0).wait(1).to({x:-25.9},0).wait(1).to({x:-25.5},0).wait(1).to({x:-25.1},0).wait(1).to({x:-24.7},0).wait(1).to({x:-24.3},0).wait(1).to({x:-24},0).wait(1).to({x:-23.6},0).wait(1).to({x:-23.2},0).wait(1).to({x:-22.9},0).wait(1).to({x:-22.5},0).wait(1).to({x:-22.2},0).wait(1).to({x:-21.8},0).wait(1).to({x:-21.5},0).wait(1).to({x:-21.1},0).wait(1).to({x:-20.8},0).wait(1).to({x:-20.5},0).wait(1).to({x:-20.1},0).wait(1).to({x:-19.8},0).wait(1).to({x:-19.5},0).wait(1).to({x:-19.2},0).wait(1).to({x:-18.9},0).wait(1).to({x:-18.5},0).wait(1).to({x:-18.2},0).wait(1).to({x:-17.9},0).wait(1).to({x:-17.6},0).wait(1).to({x:-17.3},0).wait(1).to({x:-17},0).wait(1).to({x:-16.7},0).wait(1).to({x:-16.4},0).wait(1).to({x:-16.1},0).wait(1).to({x:-15.9},0).wait(1).to({x:-15.6},0).wait(1).to({x:-15.3},0).wait(1).to({x:-15},0).wait(1).to({x:-14.7},0).wait(1).to({x:-14.5},0).wait(1).to({x:-14.2},0).wait(1).to({x:-13.9},0).wait(1).to({x:-13.7},0).wait(1).to({x:-13.4},0).wait(1).to({x:-13.2},0).wait(1).to({x:-12.9},0).wait(1).to({x:-12.6},0).wait(1).to({x:-12.4},0).wait(1).to({x:-12.1},0).wait(1).to({x:-11.9},0).wait(1).to({x:-11.6},0).wait(1).to({x:-11.4},0).wait(1).to({x:-11.2},0).wait(1).to({x:-10.9},0).wait(1).to({x:-10.7},0).wait(1).to({x:-10.5},0).wait(1).to({x:-10.2},0).wait(1).to({x:-10},0).wait(1).to({x:-9.8},0).wait(1).to({x:-9.5},0).wait(1).to({x:-9.3},0).wait(1).to({x:-9.1},0).wait(1).to({x:-8.9},0).wait(1).to({x:-8.7},0).wait(1).to({x:-8.4},0).wait(1).to({x:-8.2},0).wait(1).to({x:-8},0).wait(1).to({x:-7.8},0).wait(1).to({x:-7.6},0).wait(1).to({x:-7.4},0).wait(1).to({x:-7.2},0).wait(1).to({x:-7},0).wait(1).to({x:-6.8},0).wait(1).to({x:-6.6},0).wait(1).to({x:-6.4},0).wait(1).to({x:-6.2},0).wait(1).to({x:-6},0).wait(1).to({x:-5.8},0).wait(1).to({x:-5.6},0).wait(1).to({x:-5.4},0).wait(1).to({x:-5.2},0).wait(1).to({x:-5},0).wait(1).to({x:-4.8},0).wait(1).to({x:-4.7},0).wait(1).to({x:-4.5},0).wait(1).to({x:-4.3},0).wait(1).to({x:-4.1},0).wait(1).to({x:-3.9},0).wait(1).to({x:-3.7},0).wait(1).to({x:-3.6},0).wait(1).to({x:-3.4},0).wait(1).to({x:-3.2},0).wait(1).to({x:-3},0).wait(1).to({x:-2.9},0).wait(1).to({x:-2.7},0).wait(1).to({x:-2.5},0).wait(1).to({x:-2.3},0).wait(1).to({x:-2.2},0).wait(1).to({x:-2},0).wait(1).to({x:-1.8},0).wait(1).to({x:-1.7},0).wait(1).to({x:-1.5},0).wait(1).to({x:-1.3},0).wait(1).to({x:-1.1},0).wait(1).to({x:-1},0).wait(1).to({x:-0.8},0).wait(1).to({x:-0.7},0).wait(1).to({x:-0.5},0).wait(1).to({x:-0.3},0).wait(1).to({x:-0.2},0).wait(1).to({x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.5,-155,939,310);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Слой 3
	this.instance = new lib.Символ7();
	this.instance.setTransform(-87.3,157.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({y:-28},9).to({y:1},3).wait(51));

	// Слой 9
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(-102,-85.5,1.121,1.121,0,0,0,-0.1,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(63));

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(-106.7,-148.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-362.2,alpha:1},9,cjs.Ease.get(1)).to({x:145.9},28,cjs.Ease.get(1)).wait(63));

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("Eg6HAKUIAA0nMB0PAAAIAAUng");
	var mask_graphics_14 = new cjs.Graphics().p("EhJmAA3IAA0mMB0QAAAIAAUmg");
	var mask_graphics_15 = new cjs.Graphics().p("EhHkAA3IAA0mMB0QAAAIAAUmg");
	var mask_graphics_16 = new cjs.Graphics().p("EhFoAA3IAA0mMB0QAAAIAAUmg");
	var mask_graphics_17 = new cjs.Graphics().p("EhDxAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_18 = new cjs.Graphics().p("EhCAAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_19 = new cjs.Graphics().p("EhAVAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_20 = new cjs.Graphics().p("Eg+wAA3IAA0mMB0QAAAIAAUmg");
	var mask_graphics_21 = new cjs.Graphics().p("Eg9QAA3IAA0mMB0QAAAIAAUmg");
	var mask_graphics_22 = new cjs.Graphics().p("Eg72AA3IAA0mMB0QAAAIAAUmg");
	var mask_graphics_23 = new cjs.Graphics().p("Eg6hAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_24 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_25 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_26 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg6HAA3IAA0mMB0PAAAIAAUmg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg6HAKUIAA0nMB0PAAAIAAUng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:-597.2,y:-186.9}).wait(1).to({graphics:mask_graphics_14,x:-471.1,y:-126.4}).wait(1).to({graphics:mask_graphics_15,x:-458.1,y:-126.4}).wait(1).to({graphics:mask_graphics_16,x:-445.7,y:-126.4}).wait(1).to({graphics:mask_graphics_17,x:-433.9,y:-126.4}).wait(1).to({graphics:mask_graphics_18,x:-422.6,y:-126.4}).wait(1).to({graphics:mask_graphics_19,x:-411.9,y:-126.4}).wait(1).to({graphics:mask_graphics_20,x:-401.7,y:-126.4}).wait(1).to({graphics:mask_graphics_21,x:-392.1,y:-126.4}).wait(1).to({graphics:mask_graphics_22,x:-383.1,y:-126.4}).wait(1).to({graphics:mask_graphics_23,x:-374.7,y:-126.4}).wait(1).to({graphics:mask_graphics_24,x:-361.6,y:-126.4}).wait(1).to({graphics:mask_graphics_25,x:-347,y:-126.4}).wait(1).to({graphics:mask_graphics_26,x:-333.5,y:-126.4}).wait(1).to({graphics:mask_graphics_27,x:-321.1,y:-126.4}).wait(1).to({graphics:mask_graphics_28,x:-309.9,y:-126.4}).wait(1).to({graphics:mask_graphics_29,x:-299.9,y:-126.4}).wait(1).to({graphics:mask_graphics_30,x:-290.9,y:-126.4}).wait(1).to({graphics:mask_graphics_31,x:-283.1,y:-126.4}).wait(1).to({graphics:mask_graphics_32,x:-276.5,y:-126.4}).wait(1).to({graphics:mask_graphics_33,x:-270.9,y:-126.4}).wait(1).to({graphics:mask_graphics_34,x:-266.5,y:-126.4}).wait(1).to({graphics:mask_graphics_35,x:-263.3,y:-126.4}).wait(1).to({graphics:mask_graphics_36,x:-261.2,y:-126.4}).wait(1).to({graphics:mask_graphics_37,x:-260.2,y:-186.9}).wait(63));

	// Слой 7
	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(-100.6,-169.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(87));

	// Слой 2
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(-70.4,-85.4);
	this.instance_4.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435,-258.5,729.2,346.1);


// stage content:
(lib._640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(420,242.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(464.5,152.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(305,136.5,949,346.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
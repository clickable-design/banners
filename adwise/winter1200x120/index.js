(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/apteka.png?1465311294000", id:"apteka"},
		{src:"images/back.jpg?1465311294000", id:"back"},
		{src:"images/fire.png?1465311294000", id:"fire"},
		{src:"images/man.png?1465311294000", id:"man"},
		{src:"images/pricel.png?1465311294000", id:"pricel"},
		{src:"images/puliya.png?1465311294000", id:"puliya"},
		{src:"images/snow.png?1465311294000", id:"snow"},
		{src:"images/stvol.png?1465311294000", id:"stvol"}
	]
};



// symbols:



(lib.apteka = function() {
	this.initialize(img.apteka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,96);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,60);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,91);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.puliya = function() {
	this.initialize(img.puliya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,50);


(lib.snow = function() {
	this.initialize(img.snow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.stvol = function() {
	this.initialize(img.stvol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,274,165);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBuIiSAAIAAjjICSAAIAAhyIDnDnIjnDog");
	this.shape.setTransform(18.9,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.9,46.5);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(0.4,0,1.065,1.065,0,0,180);

	this.instance_1 = new lib.back();
	this.instance_1.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-681.2,0,1362.9,324.9);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-0.3,0,1.065,1.065,0,0,180);

	this.instance_1 = new lib.back();
	this.instance_1.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-681.9,0,1363.5,324.9);


(lib.Символ39копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqA7IgMgFIgJgGIgIgJIgFgLIgEgNQgBgHAAgIQAAgHABgHIAEgNIAFgLIAIgJIAJgGIAMgFQAIgCAVgBIANABQAHAAAGACIAMAFIAJAGIAIAJIAGALIADANQABAHAAAHQAAAIgBAHIgDANIgGALIgIAJIgJAGIgMAFQgGACgHAAIgNABQgVgBgIgCgAgegkQgGADgFAFQgEAFgCAHQgCAIAAAIQAAAJACAIQACAHAEAFQAFAFAGADQAHADAKAAQAKAAAFgDQAGgDAFgFQADgFADgHQACgIAAgJQAAgIgCgIQgDgHgDgFQgFgFgGgDQgFgDgKAAQgKAAgHADgAklA7IgMgFIgJgGIgIgJIgFgLIgDgNQgCgHAAgIQAAgHACgHIADgNIAFgLIAIgJIAJgGIAMgFQAIgCAVgBIAPABQAHAAAGACIAMAFIAJAGIAIAJIAGALIADANQABAHAAAHQAAAIgBAHIgDANIgGALIgIAJIgJAGIgMAFQgGACgHAAIgPABQgVgBgIgCgAkZgkQgGADgFAFQgEAFgCAHQgCAIAAAIQAAAJACAIQACAHAEAFQAFAFAGADQAHADAKAAQAJAAAIgDQAGgDAFgFQAEgFACgHQACgIAAgJQAAgIgCgIQgCgHgEgFQgFgFgGgDQgIgDgJAAQgKAAgHADgADdA8QgDAAgCgDQgCgCAAgDIAAhnQAAgDADgCQABgDAEAAIAQAAQADAAADADQACACAAADIAAAhIApAAQAKAAAIADQAJACAFAFQAHAGADAFQAEALAAAGIgBAJIgDAIQgDAHgHAGQgFAFgJACQgIADgKAAgAD2AkIApAAQAHAAAEgEQADgEAAgIQAAgIgDgEQgEgEgHAAIgpAAgACnA8QgDAAgDgDQgCgCAAgDIAAgrIg6AAIAAArQAAADgCACQgCADgDAAIgRAAQgDAAgCgDQgCgCgBgDIAAhnQABgDACgCQACgDADAAIARAAQADAAACADQACACAAADIAAAmIA6AAIAAgmQAAgDACgCQADgDADAAIAQAAQADAAACADQADACAAADIAABnQAAADgDACQgCADgDAAgAisA8QgDAAgCgDQgDgCAAgDIAAhnQAAgDADgCQACgDADAAIBRAAQAEAAACADQADACgBADIAAAIQABAEgDACQgCACgEAAIg5AAIAABXQAAADgCACQgDADgDAAg");
	this.shape.setTransform(36.9,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,7.6,66.7,12.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAg+IAAB9");
	this.shape.setTransform(0,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,14.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAiCIAAEF");
	this.shape.setTransform(0,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,28.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AnGAAIONAA");
	this.shape.setTransform(45.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,93.1,2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.2)").s().p("AwkQlQm3m4gBptQABpsG3m4QG4m3JsgBQJtABG4G3QG4G4AAJsQAAJtm4G4Qm4G4ptAAQpsAAm4m4g");
	this.shape.setTransform(150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.2,300.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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EgEAAgGIAAiTIg1CUQgCAFgFAEQgFAEgGAAIgWAAQgGAAgFgEQgGgEgCgFIg1iUIAACTQAAAGgEAEQgEAEgFAAIgbAAQgGAAgFgEQgEgEAAgGIAAi7QAAgGAEgEQAEgFAGAAIA+AAQAFAAAGAFQAFAEACAGIAsCAIAtiAQABgGAFgEQAFgFAHAAIA8AAQAHAAADAFQAFAEAAAGIAAC7QAAAGgFAEQgDAEgHAAgAAphhQgGAAgEgEQgFgEAAgGIAAiMIhMCMQgDAGgGAEQgHAEgGAAIgxAAQgHAAgEgEQgEgEAAgGIAAi7QAAgGAEgEQAEgFAHAAIAaAAQAFAAAFAFQAEAEAAAFIAACXIBUiWQADgGAGgEQAGgFAFAAIAsAAQAGAAAEAFQAEAEABAGIAAC7QgBAGgEAEQgEAEgGAAgAjdhhQgGAAgEgEQgEgEAAgGIAAhNIhnAAIAABNQAAAGgFAEQgEAEgGAAIgcAAQgGAAgEgEQgFgEAAgGIAAi7QAAgGAFgEQAEgFAGAAIAcAAQAGAAAEAFQAFAEAAAGIAABDIBnAAIAAhDQAAgGAEgEQAEgFAGAAIAcAAQAGAAAEAFQAEAEAAAGIAAC7QAAAGgEAEQgEAEgGAAg");
	this.shape.setTransform(89.5,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,14,166.6,63.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-5.2,-5.2,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-5.2,10.5,10.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-8.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,60);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stvol();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274,165);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBJBKABBmQgBBnhJBJQhJBJhnABQhmgBhKhJg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(1334.2,-8.5,1.065,1.065,0,0,180);

	this.instance_1 = new lib.back();
	this.instance_1.setTransform(-19.4,-9.9,1.065,1.065,0,0,180);

	this.instance_2 = new lib.back();
	this.instance_2.setTransform(-20.8,-9.9,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-701,-9.9,2035.2,326.3);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(18.9,23.2,1,1,0,0,0,18.9,23.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.62,scaleY:0.62,x:51.7},29).to({scaleX:1,scaleY:1,x:18.9},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.9,46.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39копия();
	this.instance.setTransform(36.8,12.9,1,1,0,0,0,36.8,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,7.6,66.7,12.5);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ37();
	this.instance.setTransform(250.7,150.3,1,1,0,0,0,0,6.4);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(47.3,150.3,1,1,0,0,0,0,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(149.8,115.2,1,1,0,0,0,0,13.1);

	this.instance_3 = new lib.Символ36();
	this.instance_3.setTransform(149.8,186.1,1,1,0,0,0,0,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ35();
	this.instance_4.setTransform(216.6,150.1,1,1,0,0,0,45.5,0);

	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(82.5,150.1,1,1,0,0,0,45.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.6)").s().p("AgPA5QgRgGgLgNQgMgOgDgRQgEgYASgVQAJgJAMgFQAMgFALACIAAgDIAAABQARAAAOAJQAPAJAHAOQAIAQgCAQQgDASgLANQgLANgRAGQgJACgIAAQgHAAgIgCg");
	this.shape.setTransform(149.8,150.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ34();
	this.instance_6.setTransform(150.1,150.1,1,1,0,0,0,150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.2,300.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(308.2,150.1,1,1,0,0,0,150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.pricel();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgxKAPGQi0mBgBohQABoeC0mBQC1mAEAgBQD/ABC2GAQC1GBAAIfQAAIhi1GAQi2GCj/gBQkAABi1mCgEAjhAN7Qi1mAAAofQAAohC1mBQC0mAEAAAQEAAAC1GAQC2GBgBIhQABIfi2GAQi1GCkAAAQkAAAi0mCg");
	this.shape.setTransform(318.8,146.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,0,665.6,305);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(90.2,43.8,1,1,0,0,0,90.2,43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,14,166.6,63.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-0.5,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-0.5,19.5,-31.9,48.5,-21.1,89.1,-19,96.8,-16.3,104.5,-14.8,108.5,-13.3,112.5,-7.4,126.6,-1.5,140.7,1.5,150.1,4.5,159.5,12.2,212.8,-18.5,257.7,-45.3,296.5,-37.9,344.7,-34.8,364.4,-21.3,377.4,3,411.2,13.1,451.8,15.5,461.2,15.6,471.2,15.9,487.1,13.5,502.2,6.8,532.3,-29.3,569.2,-68.6,646.7,-11.7,742.4,13.6,817.4,38.9,892.4]}},99,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,15.9,7,7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(-4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.8,y:972.9},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,7.3,17,17);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(2.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-100.6,y:850},134).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,11.4,7,7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(1.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.7,4.9,-0.2,9.3,-6.4,18.4,-12.5,27.3,-14.3,31.9,-17.3,40.1,-17.3,64.9,-17.3,65.1,-15.7,82.4,-13.8,100.4,-12.3,104.9,-11.5,107.4,-7.1,117.6,-2.6,128,-0.3,134.9,1.1,139.1,7,156.1,10.2,166.1,11.7,171.8,15.5,186,15.5,207.9,15.5,230.3,8.9,248.6,5,260.1,-5.3,277.2,-16.1,295.1,-19.8,304.6,-26.3,321.4,-26.3,341.4,-26.3,367.7,-18.5,388.3,-14.2,399.5,-1.3,420.8,10.7,441,15.7,455.5,23.5,478.3,23.5,508.2,23.5,533,17.7,552.1,13.9,564.6,5.2,580.9,-4.6,598.7,-7.5,606.9,-13.3,622.8,-13.3,642.2,-13.3,657.5,-7.7,676.8,-2,696.5,7.5,713.7,7.9,714.5,13.4,723.2,18,730.6,21.5,737.2,32.2,758,38.5,784.7,39.6,789.5,41.4,796.2]}},89,cjs.Ease.get(-0.76)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-0.5,10.5,10.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.6,y:832.2},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-2.7,7,7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-185.9,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(142.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(207,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 17
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(284,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.4,-104.2,485.4,127.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(-9.5,-74,0.05,0.05,0,0,0,29.1,30.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29,regY:29.9,scaleX:0.27,scaleY:0.27,alpha:1},4).to({_off:true},1).wait(20));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABICHQgLgBgPgDIgbgIQgQgDgbgDIgtgFQgSgDgIgGIgGgEIgHgDIgGAAIgHgBQgIgCgFgKQgCgHAAgLQgCgoADgTIADgUQADgQAEgMQADgMAOgWQAOgXAKgHQAHgGAOgHIAigOIABgBQA3AGAeAQQAaAOAdAiQANAOAEAKQAIAPABAZIgBApQABAXgBAIIgJAVQgHATgBACQgHALgOAGQgKAEgMAAIgFAAg");
	var mask_graphics_24 = new cjs.Graphics().p("ABICHQgLgBgPgDIgbgIQgQgDgbgDIgtgFQgSgDgIgGIgGgEIgHgDIgGAAIgHgBQgIgCgFgKQgCgHAAgLQgCgoADgTIADgUQADgQAEgMQADgMAOgWQAOgXAKgHQAHgGAOgHIAigOIABgBQA3AGAeAQQAaAOAdAiQANAOAEAKQAIAPABAZIgBApQABAXgBAIIgJAVQgHATgBACQgHALgOAGQgKAEgMAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-7.1,y:-80.9}).wait(24).to({graphics:mask_graphics_24,x:-7.1,y:-80.9}).wait(1));

	// Слой 2
	this.instance_1 = new lib.man();
	this.instance_1.setTransform(-16.2,-82.3,0.253,0.253);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-82.3,16.2,15);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(137,82.5,1,1,0,0,0,137,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:90.5},14).to({y:82.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274,165);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// puliya.png
	this.instance = new lib.puliya();
	this.instance.setTransform(10.9,10.8,0.572,0.572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(26,25,0.84,0.84,0,0,0,25,25);
	this.instance_1.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,4,42,42);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(174.8,192.4,1,1,0,0,0,29,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh/oAT2MAAAgnrMD/RAAAMAAAAnrgAxNoYQjYDZAAEyQAAEwDYDZQDYDZEyAAQEzAADYjZQDXjZAAkwQAAkyjXjZQjYjYkzAAQkyAAjYDYg");
	mask.setTransform(192.7,81.9);

	// Слой 3
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(320,152.5,1,1,0,0,0,340.8,162.4);
	this.instance_1.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance_1.cache(-684,-2,1368,329);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,340.8,162.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-702,-15.9,1371.4,330.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ48();
	this.instance.setTransform(193.3,88.6,0.661,0.661,180,0,0,18.9,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(177.5,192.4,1,1,0,0,0,29,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-701,-9.9,2035.2,326.3);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(292.1,-212.8,1.042,1,0,0,180);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-220.4,-195.4,1.042,1,0,0,180);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-11.2,-212.8,1.042,1,0,0,180);

	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-381.1,-185.8);

	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(-15.1,-199.4);

	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(-258.1,-207.4);

	this.instance_6 = new lib.Символ11();
	this.instance_6.setTransform(364.1,-146.8,1.042,1,0,0,180);

	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(-148.4,-129.4,1.042,1,0,0,180);

	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(60.8,-146.8,1.042,1,0,0,180);

	this.instance_9 = new lib.Символ11();
	this.instance_9.setTransform(-309.1,-119.8);

	this.instance_10 = new lib.Символ11();
	this.instance_10.setTransform(56.9,-133.4);

	this.instance_11 = new lib.Символ11();
	this.instance_11.setTransform(-186.1,-141.4);

	this.instance_12 = new lib.Символ11();
	this.instance_12.setTransform(288.1,-75.8,1.042,1,0,0,180);

	this.instance_13 = new lib.Символ11();
	this.instance_13.setTransform(-224.4,-58.4,1.042,1,0,0,180);

	this.instance_14 = new lib.Символ11();
	this.instance_14.setTransform(-15.2,-75.8,1.042,1,0,0,180);

	this.instance_15 = new lib.Символ11();
	this.instance_15.setTransform(-385.1,-48.8);

	this.instance_16 = new lib.Символ11();
	this.instance_16.setTransform(-19.1,-62.4);

	this.instance_17 = new lib.Символ11();
	this.instance_17.setTransform(-262.1,-70.4);

	this.instance_18 = new lib.Символ11();
	this.instance_18.setTransform(330.1,-16.8,1.042,1,0,0,180);

	this.instance_19 = new lib.Символ11();
	this.instance_19.setTransform(-182.4,0.6,1.042,1,0,0,180);

	this.instance_20 = new lib.Символ11();
	this.instance_20.setTransform(26.8,-16.8,1.042,1,0,0,180);

	this.instance_21 = new lib.Символ11();
	this.instance_21.setTransform(-343.1,10.2);

	this.instance_22 = new lib.Символ11();
	this.instance_22.setTransform(22.9,-3.4);

	this.instance_23 = new lib.Символ11();
	this.instance_23.setTransform(-220.1,-11.4);

	this.instance_24 = new lib.Символ11();
	this.instance_24.setTransform(304.7,71.3,1.042,1,0,0,180);

	this.instance_25 = new lib.Символ11();
	this.instance_25.setTransform(-207.8,88.7,1.042,1,0,0,180);

	this.instance_26 = new lib.Символ11();
	this.instance_26.setTransform(1.4,71.3,1.042,1,0,0,180);

	this.instance_27 = new lib.Символ11();
	this.instance_27.setTransform(-368.5,98.3);

	this.instance_28 = new lib.Символ11();
	this.instance_28.setTransform(-2.5,84.7);

	this.instance_29 = new lib.Символ11();
	this.instance_29.setTransform(-245.5,76.7);

	this.instance_30 = new lib.Символ11();
	this.instance_30.setTransform(376.7,137.3,1.042,1,0,0,180);

	this.instance_31 = new lib.Символ11();
	this.instance_31.setTransform(-135.8,154.7,1.042,1,0,0,180);

	this.instance_32 = new lib.Символ11();
	this.instance_32.setTransform(73.4,137.3,1.042,1,0,0,180);

	this.instance_33 = new lib.Символ11();
	this.instance_33.setTransform(-296.5,164.3);

	this.instance_34 = new lib.Символ11();
	this.instance_34.setTransform(69.5,150.7);

	this.instance_35 = new lib.Символ11();
	this.instance_35.setTransform(-173.5,142.7);

	this.instance_36 = new lib.Символ11();
	this.instance_36.setTransform(300.7,208.3,1.042,1,0,0,180);

	this.instance_37 = new lib.Символ11();
	this.instance_37.setTransform(-211.8,225.7,1.042,1,0,0,180);

	this.instance_38 = new lib.Символ11();
	this.instance_38.setTransform(-2.6,208.3,1.042,1,0,0,180);

	this.instance_39 = new lib.Символ11();
	this.instance_39.setTransform(-372.5,235.3);

	this.instance_40 = new lib.Символ11();
	this.instance_40.setTransform(-6.5,221.7);

	this.instance_41 = new lib.Символ11();
	this.instance_41.setTransform(-249.5,213.7);

	this.instance_42 = new lib.Символ11();
	this.instance_42.setTransform(342.7,267.3,1.042,1,0,0,180);

	this.instance_43 = new lib.Символ11();
	this.instance_43.setTransform(-169.8,284.7,1.042,1,0,0,180);

	this.instance_44 = new lib.Символ11();
	this.instance_44.setTransform(39.4,267.3,1.042,1,0,0,180);

	this.instance_45 = new lib.Символ11();
	this.instance_45.setTransform(-330.5,294.3);

	this.instance_46 = new lib.Символ11();
	this.instance_46.setTransform(35.5,280.7);

	this.instance_47 = new lib.Символ11();
	this.instance_47.setTransform(-207.5,272.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-583.5,-317.1,1167.1,634.2);


(lib.Символ46 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ24();
	this.instance.setTransform(84,29.8,1,1,0,0,0,90.2,43.8);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(96.9,29.7,2.54,2.54,0,0,0,36.8,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166.6,63.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(-211.2,217.9,0.721,0.721);

	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(971.3,233.3,0.721,0.721);

	this.instance_2 = new lib.Анимация3("synched",0);
	this.instance_2.setTransform(420.9,228.8,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-632.1,-10.9,2024.4,473);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(20.5,21,1,1,0,0,0,25.5,25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAYCSQgYABgUgGQgVgFgPgLQgQgMgJgQQgJgRAAgWIADgVQACgJAEgJQAFgIAIgIQAHgGAKgFQgPgMgGgNQgGgMAAgQQAAgMACgJQADgKAEgIQAJgQAQgKQAPgKAVgFQASgFAYABIAmAAQAXgBAUAFQAVAFAPAKQARAKAIAQQAFAIACAKQADAJAAAMQAAAQgGAMQgHANgPAMQAKAFAIAGQAHAIAFAIQAFAJACAJIACAVQAAAWgJARQgIAQgQAMQgQALgVAFQgVAGgZgBgAgBAgQgGAEgDAGQgDAHAAAIQAAAKADAFQADAHAGADQAJAIAZAAIAoAAQAZAAALgIQAGgDADgHQADgFAAgKQAAgIgDgHQgDgGgGgEQgLgGgZAAIgoAAQgZAAgJAGgAAGhRQgGADgBAGQgDAGAAAIQAAAIADAGQABAGAGADQALAHAZAAIAVAAQAZAAALgHQAGgDADgGQADgGAAgIQAAgIgDgGQgDgGgGgDQgLgHgZAAIgVAAQgZAAgLAHgAiMAaQgDgBgCgBIgEgEIgLgPIgMAPIgDAEQgDABgDABIgMAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAUgZIgTgbIAAgDQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAIANAAIAFABIAEADIAKAPIAJgPIAEgDIAGgBIAMAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABABAAIgBADIgTAbIAUAZQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAg");
	this.shape.setTransform(65.6,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.4,42);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.apteka();
	this.instance.setTransform(-112,-12,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(-67.4,90,1,1,0,0,0,42.6,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112,-12,91,123);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ44();
	this.instance.setTransform(414.6,-202.4,1,1,0,0,0,420.9,226.2);

	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(414.6,-199.8,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-701,-439.5,2086.9,755.9);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(414.6,-199.8,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3копия();
	this.instance_1.setTransform(657.8,244.3,2.327,2.327,0,0,0,134.4,56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1296.1,-428.6,3990.6,1283.5);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(340.8,586.1,1,1,0,0,0,320,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-680.2,-10.9,2086.9,755.9);


(lib.Символ10копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Слой 4
	this.instance = new lib.Символ32();
	this.instance.setTransform(317.6,152.5,1.043,1.043,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Слой 1
	this.fon = new lib.Символ2копия();
	this.fon.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1296.1,-428.6,3990.6,1283.5);


(lib.Символ1 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ43();
	this.instance.setTransform(407.4,-59.4,1,1,0,0,0,428.2,369.2);

	this.instance_1 = new lib.Символ10копия();
	this.instance_1.setTransform(320,85.5,1,1,0,0,0,320,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-701,-439.5,2086.9,755.9);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function getWindowSize() { 
		                return {
				width: Math.min(document.documentElement.clientWidth,       window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight,    window.innerHeight || 0)
		                }
		}
		window._setCanvasSize = function() {
				var windowSize = getWindowSize();
				stage.canvas.style.width = windowSize.width + 'px';
				stage.canvas.style.height = 120 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 120;
					
				_this.main.x = windowSize.width / 2;
				_this.main.y = 60;	
				
				_this.stvol.x = windowSize.width - (windowSize.width / 3);
				_this.stvol.y = 120;
			
				//_this.cir.x = windowSize.width;
				//_this.cir.y = 0;
			
				_this.txt.x = windowSize.width - (windowSize.width / 8);
				_this.txt.y = 60;	
		}
				
		window.onresize=function(){_setCanvasSize();}
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.main.gotoAndPlay(1);
				_this.stvol.visible=false;
				_this.txt.gotoAndPlay(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.main.gotoAndPlay(0);
				_this.stvol.visible=true;
				_this.txt.gotoAndPlay(0);
		    }
		
			
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.stvol = new lib.Символ6();
	this.stvol.setTransform(911.1,120,1,1,0,0,0,169,122);

	this.timeline.addTween(cjs.Tween.get(this.stvol).wait(1));

	// ammo
	this.ammo = new lib.Символ41();
	this.ammo.setTransform(121.7,43.4,0.63,0.63,0,0,0,42.7,21);

	this.timeline.addTween(cjs.Tween.get(this.ammo).wait(1));

	// Слой 3
	this.txt = new lib.Символ46();
	this.txt.setTransform(1086.2,61.1,1,1,0,0,0,93.3,31.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 1
	this.main = new lib.Символ1();
	this.main.setTransform(610.7,59.3,1.101,1.101,0,0,0,277.9,76.9);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133,-449.2,2297.5,832.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
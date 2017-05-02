(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1464869799344", id:"back"},
		{src:"images/ball.png?1464869799344", id:"ball"},
		{src:"images/bto.png?1464869799344", id:"bto"},
		{src:"images/En.png?1464869799344", id:"En"},
		{src:"images/fon.png?1464869799344", id:"fon"},
		{src:"images/por.png?1464869799344", id:"por"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,120);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.bto = function() {
	this.initialize(img.bto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,85);


(lib.En = function() {
	this.initialize(img.En);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,117);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,81);


(lib.por = function() {
	this.initialize(img.por);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,119);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(0,0,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,65.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.back();
	this.instance_1.setTransform(1918.8,0);

	this.instance_2 = new lib.back();
	this.instance_2.setTransform(-381.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381.8,0,4220.6,120);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBDQgIAAACgIIAGgkIgYAAIgdAlQgDAEgDACIgKABIgMAAQgHAAgBgDQgBgCAEgFIAggnQgGgCgEgEQgEgEgCgGQgCgDgBgHIABgPQACgKAFgIQAEgIAHgGQAHgFAJgDQAJgDAJAAIA6AAQAIAAgCAIIgUB1QgBAIgJAAgAgKgiQgHAGgBAIQgCAIAFAFQAEAFAIAAIAfAAIAGglIggAAQgGAAgGAFg");
	this.shape.setTransform(81.6,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBQgJgEgGgHQgFgHgCgKQgBgKACgNIANhKQABgIAJAAIAOAAQAIAAgCAIIgNBLIgBAMQABAEADAEQADADAFABQAFACAHAAQAMAAALgDQADgBAAgDIARheQACgIAIAAIAOAAQAIAAgCAIIgSBpQgCAGgCADQgDADgGADQgMAEgNACQgMADgNAAQgOAAgKgEg");
	this.shape_1.setTransform(68.6,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCA/IgEgNQgCgGAGgDIAHgDQAIgFACgEQALgUAFgSIAMgzQABgIAIAAIBOAAQAHAAgBAIIgVB1QgBAIgIAAIgOAAQgIAAABgIIARhhIgkAAIgGAhQgNAvgQAPQgHAFgPAHIgCABIgDABQgEAAgCgGg");
	this.shape_2.setTransform(53.1,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBEQgKgDgHgFQgGgGgDgIQgCgHACgKQACgLAEgHQAFgIAIgDQAHgFALgDQAKgDANgBQAOgBAHgDQAFgCADgDQADgEABgEQABgIgFgDQgFgEgOAAQgKAAgHAEQgHAEgGAHIgFAFQgCAAgEgBIgKgFQgEgCgBgDQAAgCADgEQAEgIAGgFQAHgFAHgEQAIgDAIgCQAHgCALAAQANAAAJADQAKADAGAGQAGAFACAHQACAIgBAJQgDANgFAIQgGAIgJACQgJAEgJACIgTADQgPACgJADQgEADgDADQgDADAAAFQgCAIAHADQAGAEAPAAQAKAAAIgEQAJgEAEgHQAFgIAHADIAKAEQAEABABADQABADgDAEQgEAIgGAFQgGAGgHAEQgIAEgKACQgJACgKAAQgOAAgKgDg");
	this.shape_3.setTransform(40.2,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBDQgIAAABgIIAJgvIg1AAIgIAvQgBAIgJAAIgOAAQgIAAACgIIAUh1QACgIAIAAIAOAAQAIAAgBAIIgIAsIA1AAIAHgsQACgIAIAAIAOAAQAIAAgCAIIgUB1QgCAIgIAAg");
	this.shape_4.setTransform(26.3,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA/BcQgIAAgDgBQgDgCAAgFIgHghIhFAAIgTAhQgCAFgDACQgEABgIAAIgNAAQgFAAgBgCQgBgCADgFIBdinQADgHAIAAIAOAAQAJAAABAHIAjCnQACAJgJAAgAAmAYIgKg1QgDgOACgRIAAgBIgBAAQgEARgIAOIgbA2IAzAAg");
	this.shape_5.setTransform(9.8,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,30);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXBDQgIAAACgIIAGgkIgYAAIgdAlQgDAEgDACIgKABIgMAAQgHAAgBgDQgBgCAEgFIAggnQgGgCgEgEQgEgEgCgGQgCgDgBgHIABgPQACgKAFgIQAEgIAHgGQAHgFAJgDQAJgDAJAAIA6AAQAIAAgCAIIgUB1QgBAIgJAAgAgKgiQgHAGgBAIQgCAIAFAFQAEAFAIAAIAfAAIAGglIggAAQgGAAgGAFg");
	this.shape.setTransform(145.8,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBBQgJgEgGgHQgFgHgCgKQgBgKACgNIANhKQABgIAJAAIAOAAQAIAAgCAIIgNBLIgBAMQABAEADAEQADADAFABQAFACAHAAQAMAAALgDQADgBAAgDIARheQACgIAIAAIAOAAQAIAAgCAIIgSBpQgCAGgCADQgDADgGADQgMAEgNACQgMADgNAAQgOAAgKgEg");
	this.shape_1.setTransform(132.8,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCA/IgEgNQgCgGAGgDIAHgDQAIgFACgEQALgUAFgSIAMgzQABgIAIAAIBOAAQAHAAgBAIIgVB1QgBAIgIAAIgOAAQgIAAABgIIARhhIgkAAIgGAhQgNAvgQAPQgHAFgPAHIgCABIgDABQgEAAgCgGg");
	this.shape_2.setTransform(117.3,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBDQgJgEgGgIQgGgHgCgKQgCgLADgNIAGghQACgNAFgKQAGgJAIgHQAIgGAMgDQALgDAOAAQAOAAAMACQALACAIAEQAGADABADQABACgBAHIgSBmQgBAHgJACQgNAEgNABQgLACgNAAQgOAAgKgEgAgEgpQgGACgEADQgFADgDAGQgDAFgBAHIgGAgQgBAGABAFQABAFADAEQADADAFABQAFACAHAAQALAAAOgDIAOhMQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgKgDgLAAQgIAAgEABg");
	this.shape_3.setTransform(104.3,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBEQgKgDgHgFQgGgGgDgIQgCgHACgKQACgLAEgHQAFgIAIgDQAHgFALgDQAKgDANgBQAOgBAHgDQAFgCADgDQADgEABgEQABgIgFgDQgFgEgOAAQgKAAgHAEQgHAEgGAHIgFAFQgCAAgEgBIgKgFQgEgCgBgDQAAgCADgEQAEgIAGgFQAHgFAHgEQAIgDAIgCQAHgCALAAQANAAAJADQAKADAGAGQAGAFACAHQACAIgBAJQgDANgFAIQgGAIgJACQgJAEgJACIgTADQgPACgJADQgEADgDADQgDADAAAFQgCAIAHADQAGAEAPAAQAKAAAIgEQAJgEAEgHQAFgIAHADIAKAEQAEABABADQABADgDAEQgEAIgGAFQgGAGgHAEQgIAEgKACQgJACgKAAQgOAAgKgDg");
	this.shape_4.setTransform(90.5,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBgQgIgCgGgDQgGgDgEgFQgFgFgCgGQgCgEABgEQABgDAFgCIAKgFQAFgCADAAQACABACAEQAGANATAAQAHAAAGgCQADgBAEgEQAEgDADgFQADgGABgHIACgMQgRAEgMAAQgOAAgKgEQgJgEgGgHQgFgHgCgKQgBgIACgNIAMhGQACgHAIAAIAOAAQAIAAgCAHIgMBHQgBAHABAFQABAEADACQADADAFACQAFABAHAAQAKAAAPgEIAQhbQACgHAIAAIAOAAQAIAAgCAHIgXCCQgCAOgGAKQgFALgIAHQgJAHgLAEQgJADgPAAQgJAAgIgBg");
	this.shape_5.setTransform(76.6,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA+BFQgIAAABgIIAOhMIABgLQgBgFgDgDQgCgDgFgCQgEgBgHAAQgMAAgOAEQABAJgBALIgOBNQgBAIgHAAIgOAAQgIAAACgIIANhMIABgLQgBgFgDgDQgFgGgNAAQgLAAgKADIgDADIgRBfQgBAIgIAAIgOAAQgIAAABgIIAThpQABgGADgDQACgDAHgDQALgEAMgDQAMgCANAAQALAAAHACQAGADAFAEQANgEAMgDQALgCALAAQANAAAJAEQAJADAFAHQAFAHACAKQABAKgCANIgNBLQgCAIgIAAg");
	this.shape_6.setTransform(58.3,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag+BiQgIAAACgJIAdijQABgHADgDQACgDAHgCQAKgEANgCQALgBAPAAQAOgBAKAEQAJADAGAIQAGAHABAKQACAKgCANIgHAkQgCALgFAJQgGAKgIAHQgIAGgMADQgLAEgNAAQgJAAgRgFIgJAyQgBAJgJAAgAgIhCQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABIgOBKQAPAEAKABQAFgBAGgCQAGgBAEgDQAFgEACgFQADgEACgHIAGghQABgGgBgGQgBgEgDgDQgDgEgFgBQgGgCgHAAQgNAAgJADg");
	this.shape_7.setTransform(40.2,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjBDQgLgEgGgHQgHgGgCgKQgDgKACgMIAHglQACgMAGgJQAGgKAIgGQAJgHAMgDQAMgEAMAAQAOAAALAEQAKADAHAIQAGAHACAJQADAKgCANIgHAkQgCAMgGAKQgFAJgJAHQgJAGgLADQgMAEgMAAQgPAAgKgEgAgEgpQgFACgFADQgEADgDAFQgDAEgBAGIgHAlQgBAFACAFQABAFADADQADADAFACQAGABAHAAQAGAAAFgBQAGgCAEgDQAEgDADgFQADgFABgFIAHglQABgGgBgEQgBgFgEgDQgDgDgFgCQgGgCgHAAQgHAAgEACg");
	this.shape_8.setTransform(27.1,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeBcQgFAAgBgCQgCgCABgFIAZiPIhJAAIgaCPQgBAFgCACQgCACgFAAIgPAAQgFAAgCgCQgBgCAAgFIAeilQABgFACgCQACgCAFAAIB5AAQAFAAACACQACACgBAFIgeClQAAAFgDACQgCACgFAAg");
	this.shape_9.setTransform(11.3,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.2,30);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9CUQgRgEgNgJQgOgJgIgMQgIgNgEgSQgBgHADgEQACgEAIgDIAYgIQAIgDADACQADACACAIQADAJAEAHQAFAIAIAEQAHAFAKADQAJACAMAAQAPAAAMgDQANgCAJgGQAJgFAGgIQAFgIADgLQABgJgDgHQgDgGgIgFQgHgEgMgDIgZgEQgSgCgMgDQgOgDgOgHQgPgHgJgHQgJgKgEgQQgEgRAEgUQADgUAKgPQAKgQAQgKQAQgLAWgFQAUgGAbAAQAVAAAQAEQAPAFAMAIQALAIAIAMQAIAMAFAPQADAHgDAEQgCADgIAEIgXAKQgIADgDgCQgEgBgCgHQgGgSgMgIQgHgFgIgCQgJgCgMAAQgPAAgJACQgMADgIAEQgJAFgFAHQgFAHgBAJQgCALAEAIQAEAHALAEQATAIAaACQAaADATAIQASAHALAKQALALAEARQAEAQgEAVQgEAVgKAQQgKAQgQAKQgQALgXAFQgWAGgbAAQgXAAgSgFg");
	this.shape.setTransform(42.8,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8CSQgOABgBgLIg0kLQgDgPAPAAIAUAAQANAAAEADQAEADACAHIAdCuQADASAAAaIADAAQAIgYAKgTIBaivQAEgHAFgDQAFgDANAAIAVAAQAOAAgHAPIiQEKQgGALgOAAg");
	this.shape_1.setTransform(19.6,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.9,47.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,0,0)","#FFFF00","rgba(255,255,0,0)"],[0,0.498,1],-31,0,31.1,0).s().p("ApaJwQhGAAAaguIKfyDQAbguBGAAIHhAAQBHAAgbAuIqfSDQgaAuhHAAg");
	this.shape.setTransform(65.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,124.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.En();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,117);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bto();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,85);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(33.8,22.1,1,1,0,0,0,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1800,guide:{path:[33.9,22,142.9,-26.4,265.3,-32,392.7,-37.8,509.8,4.1,518.2,7,550.3,19.4,575.3,29,591,34.1,638.2,49.3,674.7,47.3,701.5,45.8,736,34.2,756,27.4,795.4,11.7,908.3,-29.9,1031.3,-30.6,1154.1,-31.3,1267.5,9.2,1273.1,11.2,1302.6,22.4,1324.2,30.5,1338,34.9,1378.9,48,1410.7,47.5,1444.7,47.1,1490.2,30.3,1502.1,25.9,1528.8,15,1553.7,4.8,1567.4,0.1,1641.9,-26.5,1722.6,-25.3,1803.4,-24.1,1877,4.4,1885.5,7.8,1907.5,17.2,1926.8,25.4,1938.1,29.6,1973.8,42.8,2001.4,42.9,2026.8,42.9,2056.8,32.4,2075.5,25.8,2109.3,9.4,2142.9,-6.6,2210.1,-39.2,2200.2,-39.1,2189.9,-36.9]}},129).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.8,-1.9,48,48);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(45.5,15,1,1,0,0,0,45.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,30);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(45.5,15,1,1,0,0,0,45.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:54.4},9,cjs.Ease.get(-1)).to({x:65.5},10,cjs.Ease.get(1)).to({x:55.5},10,cjs.Ease.get(-1)).to({x:45.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,30);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(77.6,15,1,1,0,0,0,77.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:70.5},9,cjs.Ease.get(-1)).to({x:61.6},10,cjs.Ease.get(1)).to({x:69.6},10,cjs.Ease.get(-1)).to({x:77.6},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.2,30);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(29.4,23.9,1,1,0,0,0,29.4,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.8},9,cjs.Ease.get(-1)).to({rotation:-8.5,x:29.5},10,cjs.Ease.get(1)).to({rotation:-4.1,x:29.3},11,cjs.Ease.get(-1)).to({rotation:0,x:29.4},9,cjs.Ease.get(1)).to({regY:23.8,rotation:5.8,y:23.8},10,cjs.Ease.get(-1)).to({regY:23.9,rotation:11.7,y:23.9},10,cjs.Ease.get(1)).to({regY:23.8,rotation:5.8,y:23.8},10,cjs.Ease.get(-1)).to({regY:23.9,rotation:0,y:23.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.9,47.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(65.5,62.5,1,1,0,0,0,65.5,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:261.5},14).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,124.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(-90.5,91,1,1,0,0,0,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(960,60,1,1,0,0,0,960,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-381.8,0,4220.6,120);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(117,42.5,1,1,0,0,0,117,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(2).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234,85);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADaEAQgLgDgIgFQgIgFgEgIQgFgIgCgLQgBgEACgDQABgCAFgCIAQgFQAEgCACABQADACABAEQABAGACAFIAHAHIALAEQAGABAIAAQAHAAAGgCQAGgCAFgEQAFgEADgFQADgGABgIQACgGgCgFQgBgGgDgDQgEgEgFgCQgGgCgHAAIg2AAQgGAAgBgCQgCgDACgFIAVhMQACgHADgDQAEgDAHAAIBbAAQAFAAACACQABACgBAFIgCANQgBAFgCACQgDACgFAAIhLAAIgKAmIAfAAQAPAAALAEQALAEAHAJQAHAJADALQACAKgCANQgCANgGALQgGALgKAIQgKAIgNAEQgNAFgQAAQgOAAgLgDgABtD/QgEAAgCgCQgCgCABgFIAGgiIhWAAQgFAAgBgCQgCgCABgFIACgJQABgHAEgEIBphrQAGgGAHAAIAPAAQAFAAABACQACABgBAFIgSBpIARAAQAFAAACACQACACgBAFIgCALQgBAFgCACQgDACgEAAIgSAAIgGAiQgBAFgDACQgCACgFAAgAA5C3IA4AAIANhGgAhqD/QgFAAgCgCQgCgCABgFIAYiIIgmATQgFADgDgBQgDgBgCgEIgEgMQgDgHAJgFIA2gcQAIgEAGAAIAMAAQAFAAACACQABACgBAFIgdCnQgBAFgCACQgDACgFAAgAk3D/QgFAAgBgCQgCgCABgFIADgUQADgKAIgQQAHgKANgHQALgHAUgHQAbgKAJgGQAIgGAFgHQAEgGACgIQABgHgBgFQgCgGgDgDQgDgEgFgCQgGgCgHAAQgMAAgKAGQgKAFgIAMQgDAFgCABQgCABgFgBIgNgGQgFgBAAgDQgBgCACgFQAZgrAyAAQAPAAALAFQAKAEAIAIQAHAJACALQADALgDANQgCAPgFAJQgGAKgLAJQgMAJgMAFIgkAPIgJADIgDABIgJAEQgIAFgCAIIAAAEIBXAAQAFAAABACQACACgBAFIgCANQgBAFgDACQgCACgFAAgAgcDuQgJAAgDgEQgDgEABgJIABgCQABgKAFgEQAEgDAJAAIACAAQAKAAADADQADAEgCAKIgBACQgBAJgEAEQgFAEgJAAgAgTC1QgKAAgDgEQgCgEABgJIABgCQABgKAFgDQAEgEAJAAIACAAQAKAAABAEQACADgBAKIAAACQgBAJgDAEQgFAEgJAAgAg3gbQgIAAAEgHIBki6QAEgIAIAAIAOAAQAIAAgEAIIhkC6QgEAHgHAAgAEMgsQgMgFgIgJQgHgJgCgNQgDgNADgQIAKg5QADgQAGgMQAHgMAKgIQALgJAOgEQAOgEARAAQAMAAALACQAKADAHAFQAIAFAFAIQAFAIACAKQABAEgCADQgCACgFACIgPAFQgEACgDgBQgCgBgBgFQgDgLgIgFQgIgGgOAAQgJAAgIACQgHADgGAEQgFAFgEAHQgDAHgCAJIgCALQANgDAcgCQARAAAMAEQAMAEAHAIQAHAHACAMQACAMgCAPQgDAOgGALQgHAKgKAIQgKAHgOAEQgNADgRAAQgVgCgIgDgAEih+QgJACgHADIgDAPQgCAJACAHQABAGAEAFQAEAFAGACQAHADAJAAQAJAAAIgCQAHgCAFgEQAGgDADgGQADgFACgHQABgIgBgFQgBgGgEgDQgEgEgHgCQgGgBgKAAQgNAAgKABgABogrQgMgFgIgJQgHgIgDgMQgDgMADgPIAMhCQACgPAHgLQAGgLAKgIQAKgIAOgEQANgEAQAAQARAAALAEQAMAFAIAJQAIAJACALQADAMgDAPIgLBDQgDAOgHALQgGAMgKAHQgKAIgNAEQgOAEgQAAQgQAAgMgEgACQjHQgHADgGAEQgFAEgEAGQgDAGgBAHIgMBDQgBAIABAGQABAGAEAEQAEAEAHADQAGACAJAAQAIAAAHgCQAHgDAGgEQAFgEADgGQAEgGABgIIAMhDQABgHgBgGQgBgGgEgEQgEgEgGgDQgHgCgIAAQgJAAgHACgAlJgrQgMgFgIgJQgHgIgDgMQgDgMADgPIAMhCQACgPAHgLQAGgLAKgIQAKgIAOgEQANgEAQAAQARAAALAEQAMAFAIAJQAIAJACALQADAMgDAPIgLBDQgDAOgHALQgGAMgKAHQgKAIgNAEQgOAEgQAAQgQAAgMgEgAkhjHQgHADgGAEQgFAEgEAGQgDAGgBAHIgMBDQgBAIABAGQABAGAEAEQAEAEAHADQAGACAJAAQAIAAAHgCQAHgDAGgEQAFgEADgGQAEgGABgIIAMhDQABgHgBgGQgBgGgEgEQgEgEgGgDQgHgCgIAAQgJAAgHACgAjLgrQgFAAgBgCQgCgCABgFIADgTQADgLAIgPQAHgKANgHQALgHAUgIQAbgKAJgGQAIgFAFgHQAEgHACgIQABgGgBgGQgCgFgDgEQgDgEgFgCQgGgCgHAAQgMAAgKAGQgKAGgIALQgDAFgCABQgCACgFgCIgNgFQgFgCAAgCQgBgDACgEQAZgrAyAAQAPAAALAEQAKAEAIAJQAHAIACALQADALgDANQgCAPgFAKQgGAKgLAIQgMAJgMAGIgkAOIgJADIgDACIgJAEQgIAEgCAIIAAAFIBXAAQAFAAABACQACACgBAFIgCAMQgBAFgDACQgCACgFAAg");
	mask.setTransform(39.1,25.9);

	// Слой 4
	this.instance = new lib.Символ11();
	this.instance.setTransform(-58.4,24.8,1,1,0,0,0,65.5,62.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBbQgLgDgIgFQgIgFgFgIQgFgIgCgLQAAgEABgDQACgCAFgCIAPgFQAFgCACABQACACABAEQABAGADAFIAHAHIAKAEQAGABAIAAQAHAAAFgCQAGgCAEgEQAFgEADgFQAEgGABgIQABgGgBgFQgBgGgEgDQgDgEgGgCQgFgCgHAAIg1AAQgFAAgCgCQgBgCABgEIAVhMQACgHAEgDQADgDAIAAIBYAAQAFAAACACQACACgBAFIgDANQAAAFgDACQgCACgFAAIhJAAIgLAmIAdAAQAPAAAMAEQALAEAHAJQAHAHACALQADAKgDANQgCANgGALQgGALgKAIQgKAIgNAEQgMAFgPAAQgOAAgKgDg");
	this.shape.setTransform(65.4,42.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBcQgFAAgCgCQgBgCABgFIAGgiIhUAAQgFAAgCgCQgBgCABgFIABgJQABgHAEgEIBnhpQAHgGAHAAIAOAAQAFAAACACQABABAAAFIgTBnIASAAQAFABACABQABACgBAFIgCALQgBAFgCACQgCACgFAAIgSAAIgGAiQgBAFgCACQgCACgFAAgAgiAUIA3AAIAMhEg");
	this.shape_1.setTransform(49,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAuQgJAAgDgEQgDgEABgJIABgCQABgKAFgEQAEgDAJAAIABAAQAJAAADADQADAEgCAKIgBACQgBAJgEAEQgFAEgHAAgAAAgJQgIAAgDgEQgCgEABgJIABgCQABgKAFgDQAEgEAHAAIACAAQAKAAADAEQACADgBAKIAAACQgCAJgEAEQgFAEgJAAg");
	this.shape_2.setTransform(37.7,45.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBcQgFAAgCgCQgCgCABgFIAWiGIgkATQgFADgDgBQgDgBgCgEIgEgMQgDgHAJgFIA0gcQAIgEAGAAIAMAAQAFAAACACQABACgBAFIgdClQgBAFgCACQgDACgFAAg");
	this.shape_3.setTransform(29.8,42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBeQgFAAgCgCQgCgCABgFIAEgUQACgKAJgQQAHgKAMgHQAMgHATgHQAagIAJgGQAIgGAEgHQAFgGABgIQABgHgBgFQgBgGgDgDQgEgEgFgCQgFgCgHAAQgNAAgIAGQgKAFgHAMQgDAFgCABQgDABgEgBIgOgGQgEgBgBgDQgBgCADgFQAZgrAwAAQAOAAALAFQALAEAHAIQAHAJADALQACALgCANQgCAPgGAJQgGAIgLAJQgMAJgMAFIgiAPIgIADIgEABIgIAEQgJAFgBAIIgBAEIBVAAQAFAAACACQABACgBAFIgCANQgBAFgCACQgCACgFAAg");
	this.shape_4.setTransform(15.5,42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBbQgMgFgIgJQgHgJgCgNQgDgOADgQIAKg2QADgQAGgMQAHgNAKgIQALgIAOgEQANgFAQAAQAMAAALADQAKACAHAGQAIAFAFAHQAFAIACAKQABAFgCACQgCACgFADIgPAFQgEACgDgCQgCgBgBgFQgDgLgIgFQgIgFgOAAQgJAAgGACQgHACgGAFQgFAFgEAHQgDAHgCAJIgCALQANgEAagBQARAAAMAEQAMADAHAIQAHAGACAMQACALgCAPQgDAPgGAKQgHALgKAHQgKAHgOAEQgMAEgQAAQgVgCgIgDgAgXAJQgJABgHADIgDAPQgCAJACAHQABAHAEAFQAEAEAGADQAHACAJAAQAJAAAGgCQAHgBAFgEQAGgEADgFQADgGACgHQABgHgBgGQgBgFgEgEQgEgDgHgCQgGgCgIAAQgNAAgKACg");
	this.shape_5.setTransform(71.3,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBbQgMgEgHgJQgIgJgDgMQgCgMACgOIAMhBQADgOAGgMQAHgLAKgIQAKgIANgEQAMgEAQAAQAQAAAMAFQAMAEAIAJQAHAJADAMQACAMgCAOIgMBBQgCAOgHAMQgHALgKAIQgKAIgNAEQgNAEgOAAQgRAAgMgFgAgDg+QgHACgFAEQgFAEgEAGQgDAGgCAIIgLBBQgCAHABAGQACAHAEAEQAEAEAGACQAGACAJAAQAJAAAFgCQAHgCAFgEQAFgEAEgHQADgGACgHIAMhBQABgIgBgGQgCgGgEgEQgEgEgGgCQgGgCgJAAQgIAAgGACg");
	this.shape_6.setTransform(54.6,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag9BkQgIAAAEgHIBki4QAEgIAIAAIAPAAQAIAAgEAIIhkC4QgEAHgIAAg");
	this.shape_7.setTransform(40.3,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEBeQgFAAgCgCQgCgCABgFIAEgUQACgKAJgQQAHgKAMgHQAMgHATgHQAagIAJgGQAIgGAEgHQAFgGABgIQABgHgBgFQgBgGgDgDQgEgEgFgCQgFgCgHAAQgNAAgIAGQgKAFgHAMQgDAFgCABQgDABgEgBIgOgGQgEgBgBgDQgBgCADgFQAZgrAwAAQAOAAALAFQALAEAHAIQAHAJADALQACALgCANQgCAPgGAJQgGAIgLAJQgMAJgMAFIgiAPIgIADIgEABIgIAEQgJAFgBAIIgBAEIBVAAQAFAAACACQABACgBAFIgCANQgBAFgCACQgCACgFAAg");
	this.shape_8.setTransform(26.3,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrBbQgMgEgHgJQgIgJgDgMQgCgMACgOIAMhBQADgOAGgMQAHgLAKgIQAKgIANgEQAMgEAQAAQAQAAAMAFQAMAEAIAJQAHAJADAMQACAMgCAOIgMBBQgCAOgHAMQgHALgKAIQgKAIgNAEQgNAEgOAAQgRAAgMgFgAgDg+QgHACgFAEQgFAEgEAGQgDAGgCAIIgLBBQgCAHABAGQACAHAEAEQAEAEAGACQAGACAJAAQAJAAAFgCQAHgCAFgEQAFgEAEgHQADgGACgHIAMhBQABgIgBgGQgCgGgEgEQgEgEgGgCQgGgCgJAAQgIAAgGACg");
	this.shape_9.setTransform(11.1,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,60);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(-31.7,55.7,1,1,0,0,0,29.4,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Португалия
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(2.6,93.4,1,1,0,0,0,77.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Англия
	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(-101.8,16.7,1,1,0,0,0,45.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(-199,58.5,1,1,0,0,0,64.5,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 1_03.png
	this.instance_4 = new lib.por();
	this.instance_4.setTransform(62,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.5,0,461.5,119);


// stage content:
(lib.ENPOR1200x12030 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
			
			_this.logo.x = (windowSize.width/2)-(windowSize.width/2)
			_this.logo.y = 60;
			
			_this.vs.x = (windowSize.width/2);
			_this.vs.y = 60;
			
		
			_this.time.x = (windowSize.width/2)+(windowSize.width/4);
			_this.time.y = 60;
			
			_this.bt.x = windowSize.width;
			_this.bt.y = 60;
			
			
			_this.fon.x = (windowSize.width/2);
			_this.fon.y = 60;
		
			
			
			
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

	// Слой 5
	this.time = new lib.Символ2();
	this.time.setTransform(772.6,60.9,1.434,1.434,0,0,0,91.7,27.9);

	this.timeline.addTween(cjs.Tween.get(this.time).wait(1));

	// Слой 4
	this.bt = new lib.Символ5();
	this.bt.setTransform(1000.9,61,0.788,0.788,0,0,0,272.3,39.6);
	new cjs.ButtonHelper(this.bt, 0, 1, 2, false, new lib.Символ5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1));

	// Слой 3
	this.logo = new lib.Символ23();
	this.logo.setTransform(-20,61,1,1,0,0,0,-30,31.2);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// Слой 2
	this.vs = new lib.Символ1();
	this.vs.setTransform(497.3,60.9,0.869,0.869,0,0,0,53.4,56.3);

	this.timeline.addTween(cjs.Tween.get(this.vs).wait(1));

	// Слой 1
	this.fon = new lib.Символ8();
	this.fon.setTransform(604.8,60.9,1,1,0,0,0,958.8,60.9);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.9,26.8,4220.6,179.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
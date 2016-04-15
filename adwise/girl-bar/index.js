(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1460706123304", id:"back"},
		{src:"images/butil.png?1460706123304", id:"butil"},
		{src:"images/forrez_03.png?1460706123304", id:"forrez_03"},
		{src:"images/forrez_05.png?1460706123304", id:"forrez_05"},
		{src:"images/forrez_08.png?1460706123304", id:"forrez_08"},
		{src:"images/forrez_11.png?1460706123304", id:"forrez_11"},
		{src:"images/forrez_14.png?1460706123304", id:"forrez_14"},
		{src:"images/forrez_18.png?1460706123304", id:"forrez_18"},
		{src:"images/forrez_24.png?1460706123304", id:"forrez_24"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651,357);


(lib.butil = function() {
	this.initialize(img.butil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,144);


(lib.forrez_03 = function() {
	this.initialize(img.forrez_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,166);


(lib.forrez_05 = function() {
	this.initialize(img.forrez_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,204);


(lib.forrez_08 = function() {
	this.initialize(img.forrez_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,115);


(lib.forrez_11 = function() {
	this.initialize(img.forrez_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,101);


(lib.forrez_14 = function() {
	this.initialize(img.forrez_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,13);


(lib.forrez_18 = function() {
	this.initialize(img.forrez_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,20);


(lib.forrez_24 = function() {
	this.initialize(img.forrez_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,451,144);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ACHgCIAxAAAAAiKQA4ABAnAnQAkAkADAxQABAEAAAEQAAABAAACABrgCIAcAAIAAAAQAAA3goAnQgnAog4AAQAAAAAAAAQg4AAgogoQgngmgBg2QAAAAAAgCIAAAAQAAgDABgDQABg1AmglQAogoA4AAQAAAAAAAAIAAAYAAAi3IAAAtAiIgCIAZAAAi3gCIAvAAAAAB0IAAAQIAAA0");
	this.shape.setTransform(18.5,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66FF00").ss(2,1,1).p("ACHgCIAxAAAAAiKQA4ABAnAnQAkAkADAxQABAEAAAEQAAABAAACABrgCIAcAAIAAAAQAAA3goAnQgnAog4AAQAAAAAAAAQg4AAgogoQgngmgBg2QAAAAAAgCIAAAAQAAgDABgDQABg1AmglQAogoA4AAQAAAAAAAAIAAAYAAAi3IAAAtAiIgCIAZAAAi3gCIAvAAAAAB0IAAAQIAAA0");
	this.shape_1.setTransform(18.5,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(0.5,1,1).p("Ajpj4IHTAAIAAHxInTAAg");
	this.shape_2.setTransform(20,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AjoD5IAAnxIHSAAIAAHxg");
	this.shape_3.setTransform(20,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.9,39);


(lib.Символ40копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AghCgIAAhKIBDAAIAABKgAgRA4IgQiLIAAhMIBDAAIAABMIgQCLg");
	this.shape.setTransform(186,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAaDEIAAhKIACgcIAEggIAFgfIAEgdIgBAAIhADCIhKAAIAAk8IBJAAIAABPIgCAdIgDAeIgEAfIgDAdIABAAIA+jGIBJAAIAAE8gAguiXQgJgGgFgLQgFgMAAgPIAdAAQABAHAEAFQAEAEAFADIAMADIALAAQAOAAAKgDQAJgEAFgPIAcAAQAAAOgGALQgGALgJAHQgJAHgMAEQgMADgNAAQgcAAgSgNg");
	this.shape_1.setTransform(167,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AAoCeIgLg/Ig5AAIgKA/IhMAAIBFk7IBaAAIBGE7gAATAmIgTiKIgBAAIgUCKIAoAAg");
	this.shape_2.setTransform(143.2,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AhkCeIAAk7IB4AAQAOAAAOAEQAOAFALAJQALAKAHAPQAHAPAAAVQAAARgEAMQgFAMgGAIQgHAIgHAFIgOAFQAWAKAMAPQAMARAAAiQAAAWgGARQgGASgMAMQgYAYgxAAgAgaBlIARAAQAUAAAHgJQAIgJAAgWQAAgUgHgKQgIgLgSAAIgTAAgAgagjIAWAAQAPAAAGgIQAHgJAAgTQAAgOgHgHQgGgIgPAAIgWAAg");
	this.shape_3.setTransform(119.5,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AAaCeIAAhKIACgcIAEggIAFgdIAEgcIgBAAIhAC/IhKAAIAAk7IBJAAIAABOIgCAdIgDAgIgEAdIgDAdIABAAIA+jFIBJAAIAAE7g");
	this.shape_4.setTransform(94.9,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AhkCdIgUgHIAAg1IAIADIALAAQAIAAAFgEQAEgDACgLQADgMAAgWIABg5IAAiWIDGAAIAAE8IhMAAIAAkAIgxAAIAABsQAAAsgDAeQgFAdgJARQgJARgOAIQgOAGgTAAQgNAAgJgDg");
	this.shape_5.setTransform(68.6,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AAoCeIgMg/Ig4AAIgKA/IhMAAIBGk7IBZAAIBGE7gAASAmIgSiKIAAAAIgVCKIAnAAg");
	this.shape_6.setTransform(44,24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AAYCeIAAiHIgvAAIAACHIhNAAIAAk7IBNAAIAAB6IAvAAIAAh6IBNAAIAAE7g");
	this.shape_7.setTransform(20,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.3,55.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghCgIAAhKIBDAAIAABKgAgRA4IgQiLIAAhMIBDAAIAABMIgQCLg");
	this.shape.setTransform(186,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAaDEIAAhKIACgcIAEggIAFgfIAEgdIgBAAIhADCIhKAAIAAk8IBJAAIAABPIgCAdIgDAeIgEAfIgDAdIABAAIA+jGIBJAAIAAE8gAguiXQgJgGgFgLQgFgMAAgPIAdAAQABAHAEAFQAEAEAFADIAMADIALAAQAOAAAKgDQAJgEAFgPIAcAAQAAAOgGALQgGALgJAHQgJAHgMAEQgMADgNAAQgcAAgSgNg");
	this.shape_1.setTransform(167,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAoCeIgLg/Ig5AAIgKA/IhMAAIBFk7IBaAAIBGE7gAATAmIgTiKIgBAAIgUCKIAoAAg");
	this.shape_2.setTransform(143.2,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhkCeIAAk7IB4AAQAOAAAOAEQAOAFALAJQALAKAHAPQAHAPAAAVQAAARgEAMQgFAMgGAIQgHAIgHAFIgOAFQAWAKAMAPQAMARAAAiQAAAWgGARQgGASgMAMQgYAYgxAAgAgaBlIARAAQAUAAAHgJQAIgJAAgWQAAgUgHgKQgIgLgSAAIgTAAgAgagjIAWAAQAPAAAGgIQAHgJAAgTQAAgOgHgHQgGgIgPAAIgWAAg");
	this.shape_3.setTransform(119.5,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAaCeIAAhKIACgcIAEggIAFgdIAEgcIgBAAIhAC/IhKAAIAAk7IBJAAIAABOIgCAdIgDAgIgEAdIgDAdIABAAIA+jFIBJAAIAAE7g");
	this.shape_4.setTransform(94.9,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhkCdIgUgHIAAg1IAIADIALAAQAIAAAFgEQAEgDACgLQADgMAAgWIABg5IAAiWIDGAAIAAE8IhMAAIAAkAIgxAAIAABsQAAAsgDAeQgFAdgJARQgJARgOAIQgOAGgTAAQgNAAgJgDg");
	this.shape_5.setTransform(68.6,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAoCeIgMg/Ig4AAIgKA/IhMAAIBGk7IBZAAIBGE7gAASAmIgSiKIAAAAIgVCKIAnAAg");
	this.shape_6.setTransform(44,24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAYCeIAAiHIgvAAIAACHIhNAAIAAk7IBNAAIAAB6IAvAAIAAh6IBNAAIAAE7g");
	this.shape_7.setTransform(20,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.3,55.5);


(lib.Символ35копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgpBLIAAiVIBTAAIAAAdIguAAIAAAdIApAAIAAAbIgpAAIAAAjIAuAAIAAAdg");
	this.shape.setTransform(10.4,149.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvBLIAAiVIAlAAIAAA6IAOAAQAIAAAIACQAIACAGAFQAGAGAEAHQAEAJAAAOIgBANIgDAKQgEAJgGAGQgHAEgHADIgQABgAgKAwIAGAAIAFgBQADgBACgCQADgCACgDIABgJQAAgHgCgDQgBgEgDgCQgCgDgDgBIgEgBIgHAAg");
	this.shape_1.setTransform(10.2,126.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgvBLIgJgEIAAgZIADABIAGAAQADAAADgBQABgCACgGIABgQIAAgaIAAhHIBeAAIAACVIgkAAIAAh4IgXAAIAAAyQABAVgCAOQgCAOgFAIQgEAIgGAEQgIADgJAAIgKgBg");
	this.shape_2.setTransform(9.8,103.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgpBLIAAiVIBTAAIAAAcIguAAIAAAeIApAAIAAAbIgpAAIAAAkIAuAAIAAAcg");
	this.shape_3.setTransform(10.4,80.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgkBDQgGgGgDgKQgDgJAAgNIAAhAQAAgJADgHQADgJAGgFQAGgGAJgDQAJgEAMABQAMgBAJAEQAKADAGAGQAGAGADAIQADAIAAAIIAAALIglAAIAAgOQAAgDgBgCIgDgEIgFgCIgDgBQgEAAgEADQgDADAAAFIAABKQAAAJADADQADADAFAAQAFAAAEgCQADgEAAgJIAAgUIAlAAIAAAPQAAANgDAIQgDAKgGAGQgMALgZAAQgYAAgMgLg");
	this.shape_4.setTransform(10.1,57.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgpBLIAAiVIBTAAIAAAdIguAAIAAAdIApAAIAAAaIgpAAIAAAkIAuAAIAAAdg");
	this.shape_5.setTransform(10.4,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgvBLIAAiVIA4AAQAGAAAIACQAGACAFAEQAGAFADAHQAEAIAAAJQgBAJgCAFQgCAGgDAEIgGAGIgHADQALAEAFAGQAGAJAAAPQAAALgDAIQgDAIgGAHQgLALgXAAgAgMAwIAJAAQAIAAADgFQAEgEAAgKQAAgJgEgGQgDgEgIAAIgJAAgAgMgQIALAAQAGAAADgEQAEgEAAgJQAAgHgEgDQgDgEgGAAIgLAAg");
	this.shape_6.setTransform(10.2,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,163.9);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AgpBLIAAiVIBTAAIAAAdIguAAIAAAdIApAAIAAAbIgpAAIAAAjIAuAAIAAAdg");
	this.shape.setTransform(10.4,149.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgvBLIAAiVIAlAAIAAA6IAOAAQAIAAAIACQAIACAGAFQAGAGAEAHQAEAJAAAOIgBANIgDAKQgEAJgGAGQgHAEgHADIgQABgAgKAwIAGAAIAFgBQADgBACgCQADgCACgDIABgJQAAgHgCgDQgBgEgDgCQgCgDgDgBIgEgBIgHAAg");
	this.shape_1.setTransform(10.2,126.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AgvBLIgJgEIAAgZIADABIAGAAQADAAADgBQABgCACgGIABgQIAAgaIAAhHIBeAAIAACVIgkAAIAAh4IgXAAIAAAyQABAVgCAOQgCAOgFAIQgEAIgGAEQgIADgJAAIgKgBg");
	this.shape_2.setTransform(9.8,103.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgpBLIAAiVIBTAAIAAAcIguAAIAAAeIApAAIAAAbIgpAAIAAAkIAuAAIAAAcg");
	this.shape_3.setTransform(10.4,80.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AgkBDQgGgGgDgKQgDgJAAgNIAAhAQAAgJADgHQADgJAGgFQAGgGAJgDQAJgEAMABQAMgBAJAEQAKADAGAGQAGAGADAIQADAIAAAIIAAALIglAAIAAgOQAAgDgBgCIgDgEIgFgCIgDgBQgEAAgEADQgDADAAAFIAABKQAAAJADADQADADAFAAQAFAAAEgCQADgEAAgJIAAgUIAlAAIAAAPQAAANgDAIQgDAKgGAGQgMALgZAAQgYAAgMgLg");
	this.shape_4.setTransform(10.1,57.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AgpBLIAAiVIBTAAIAAAdIguAAIAAAdIApAAIAAAaIgpAAIAAAkIAuAAIAAAdg");
	this.shape_5.setTransform(10.4,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgvBLIAAiVIA4AAQAGAAAIACQAGACAFAEQAGAFADAHQAEAIAAAJQgBAJgCAFQgCAGgDAEIgGAGIgHADQALAEAFAGQAGAJAAAPQAAALgDAIQgDAIgGAHQgLALgXAAgAgMAwIAJAAQAIAAADgFQAEgEAAgKQAAgJgEgGQgDgEgIAAIgJAAgAgMgQIALAAQAGAAADgEQAEgEAAgJQAAgHgEgDQgDgEgGAAIgLAAg");
	this.shape_6.setTransform(10.2,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,163.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAADIgBgBIgBgBIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAAAIAAAAIAAAAIAAgBIABAAIAAgBIABAAIAAAAIAAAAIABAAIACACIAAAAIAAAAIAAAAIABAAIAAAAIgBABIAAAAIAAABIgBAAIAAABIgBAAIAAAAIAAAAg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAADIgBAAIAAAAIgBgBIAAgBIgBgBIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAgBIABgBIABAAIAAAAIAAgBIAAAAIAAABIACAAIABABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAIgBABIAAABIgBAAIAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAAAIgBABg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AgBADIgBAAIAAAAIAAgBIgBAAIAAgBIgBgBIACgBIAAgBIABAAIABAAIAAgBIAAABIAAgBIABABIABAAIABAAIABABIAAABIABAAIAAAAIgBABIAAABIgBAAIAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAAAIgCABg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,0.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAADIgBAAIAAAAIAAgBIgBAAIAAgBIgBgBIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABgBIAAAAIAAgBIABAAIAAAAIAAgBIAAABIAAAAIAAAAIABAAIABAAIABABIAAABIABAAIAAAAIgBABIAAABIgBAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIgBABg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAAEIAAgBIgBAAIgBgBIAAAAIAAAAIgBgBIAAgBIgBAAIACgBIAAgBIABAAIABAAIAAgBIAAAAIAAABIACAAIAAAAIABABIAAABIABAAIAAAAIAAAAIAAABIgBAAIAAABIAAABIAAAAIgBAAIAAAAIAAAAIgBABg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,0.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AADAJIgBgBIAAAAIAAAAIgBgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIABAAIAAAAIgBgCIAAAAIgBgBIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIgCAAIgBAAIAAAAIgBAAIgBAAIAAgBIgBABIgCAAIgBgCIgBAAIAAgBIgBAAIABgDIAAAAIAAgBIAAAAIABAAIAAgBIAAAAIABAAIACAAIABgBIACACIAAAAIAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIABABIAAgBIABABIAAgBIABAAIABABIAAABIAAAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIABgBIABgBIAAAAIABABIACgBIAAABIABAAIAAABIABAAIAAABIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAABIgBABIABgBIABABIABAAIABAAIAAABIABABIAAABIAAAAIAAAAIAAABIAAABIgBABIAAABIgBAAIgGAAg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAADIAAAAIgBAAIAAgBIgBgBIAAAAIgBgBIAAAAIABAAIAAAAIABgBIAAgBIABAAIAAAAIAAAAIAAAAIAAAAIABAAIABABIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABIAAABIgBAAIAAABQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAAAIAAAAg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAADIgCgCIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABAAIAAAAIAAgBIABAAIAAgBIAAAAIABAAIAAAAIABAAIABAAIAAAAIABABIAAABIABAAIAAAAIgBABIAAABIgBABIAAAAIgBAAg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,0.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAADIAAAAIgBAAIAAgBIgBgBIAAAAIAAgBIgBAAIABAAIAAAAIAAgBIABAAIAAgBIABAAIAAAAIAAAAIAAAAIAAAAIABAAIABABIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABIAAABIgBAAIAAABQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAAAIAAAAg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAADIAAAAIgBAAIAAgBIgBgBIAAAAIgBgBIAAAAIABAAIAAAAIABgBIAAgBIABAAIAAAAIAAAAIAAAAIAAAAIABAAIABABIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABIAAABIgBAAIAAABQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAAAIAAAAg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AgFAEIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAgCIAAAAIABAAIAAAAIABAAIAAgBIABAAIABAAIAAAAIABgBIADABIABgBIABAAIABgBIAAAAIACAAIAAgBIABABIACABIAAAAIAAABIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIgBABIAAABIgBAAIgBABIgBAAIgCAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgBABg");
	this.shape.setTransform(1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AAAAEIAAgBIgBAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAAAIABAAIABABIABABIAAAAIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAABIgBABIAAABIgBAAIAAAAIgBABg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.439)").s().p("AACAKIgCgBIAAgBIAAAAIAAgBIAAgFIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAgBIgCAAIgBgBIgBAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBgCIABAAIAAgBIAAAAIAAAAIABgBIABAAIACAAIgBgBIABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAABIAAABIAAABIABAAIAAAAIAAAAIABABIACABIAAABIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIAAAAIAAABIAAAAIABAAIACABIAAABIAAAAIAAAAIABABIgBAEIAAAAIAAACIAAgBIgBABIAAAAIgBABIgBAAgAADAAIAAAAIgBAAIAAAAIABAAIAAAAg");
	this.shape.setTransform(0.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(0.5,1,1).p("AAKAAQAAAEgDACQgEADgDAAQgDAAgDgDQgDgCAAgEQAAgCADgEQADgCADAAQADAAAEACQADAEAAACg");
	this.shape.setTransform(1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.439)").s().p("AgGAGQgCgCgBgEQABgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,4,3.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAZCYIAAhHIACgbIAEgeIAEgcIAEgbIAAAAIg+C3IhHAAIAAkvIBGAAIAABMIgBAbIgEAeIgEAdIgCAcIA8i+IBGAAIAAEvg");
	this.shape.setTransform(133.7,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgeCYIAAj1Ig6AAIAAg6ICxAAIAAA6Ig2AAIAAD1g");
	this.shape_1.setTransform(112.4,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AhJCHQgNgLgGgUQgGgSAAgbIAAiDQAAgSAGgPQAGgQAMgMQAMgMASgGQATgHAZAAQAZAAATAHQATAGAMAMQAMAMAGAQQAGAQAAASIAAAUIhKAAIAAgbQAAgGgCgFIgHgHIgIgFIgIgBQgJAAgIAFQgHAFAAANIAACWQAAARAGAIQAHAHALAAQAKAAAIgHQAHgHAAgSIAAgoIBKAAIAAAdQAAAagGATQgGATgMALQgYAYgzAAQgxAAgYgYg");
	this.shape_2.setTransform(91,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgrCZQgSgHgNgMQgXgaAAgtIAAiHQgBgSAGgQQAGgQAMgLQAMgMATgGQATgHAYAAQAZAAAUAHQASAGAMAMQAMAMAFAQQAGAPABASIAACHQgBAugXAZQgMAMgTAHQgSAGgaAAQgYAAgTgGgAgQhgQgIAGAAANIAACZQAAANAIAHQAHAHAJAAQAIAAAJgHQAIgHAAgNIAAiZQAAgNgIgGQgJgGgIAAQgJAAgHAGg");
	this.shape_3.setTransform(67.7,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AhUCYIAAkvICpAAIAAA6IhfAAIAAD1g");
	this.shape_4.setTransform(46.4,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("Ag8CXQgLgCgFgEIAAgzIAIABIAKABIAKgCQAFgBADgHIhFjvIBNAAIAbCFIADAWIABAnIABAAIACgnIADgWIAdiFIBMAAIhCDpQgGAWgHAOQgGAPgKAIQgKAIgLADQgOAEgTAAg");
	this.shape_5.setTransform(24.4,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.3,53.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Ag4COQgLgCgEgDIAAgxIAHACIAKAAIAJgBQAFgCACgGIhAjgIBIAAIAaB9IACAUIACAlIAAAAIACglIADgUIAbh9IBHAAIg9DaQgGAVgHANQgGAOgJAIQgJAIgLACQgMADgTAAg");
	this.shape.setTransform(165.7,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AAVCPIgdhkIgTAhIAABDIhCAAIAAkdIBCAAIAAByIAuhyIBLAAIg/B/IA/Ceg");
	this.shape_1.setTransform(144.9,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AgdCPIAAjnIg2AAIAAg2ICnAAIAAA2IgzAAIAADng");
	this.shape_2.setTransform(124.4,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgoCQQgSgHgLgLQgXgYAAgrIAAh/QAAgRAGgOQAFgPAMgLQALgMASgFQASgHAWAAQAYABARAGQASAGALALQALALAGAPQAFAPABAQIAAB/QgBArgWAYQgLALgSAHQgRAFgYAAQgWAAgSgFgAgPhaQgIAFABANIAACPQgBANAIAGQAHAHAIAAQAIAAAHgHQAIgGAAgNIAAiPQAAgMgIgGQgHgGgIAAQgIAAgHAGg");
	this.shape_3.setTransform(104.4,22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AhFB/QgLgLgGgSQgGgRAAgaIAAh7QAAgQAFgPQAGgPALgLQAMgLARgGQASgGAXgBQAYABARAGQASAGALAMQAMALAFAPQAGAOAAARIAAATIhFAAIAAgaQAAgFgDgEIgGgHIgIgFIgHgBQgIAAgIAFQgHAFAAALIAACNQAAAQAGAIQAHAGAKABQAKAAAHgHQAHgGAAgRIAAgmIBFAAIAAAbQAAAYgGASQgFASgMALQgWAWgwAAQguAAgXgWg");
	this.shape_4.setTransform(82.4,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AAkCPIgLg6IgyAAIgJA6IhFAAIA/kdIBQAAIBAEdgAAQAiIgQh8IgTB8IAjAAg");
	this.shape_5.setTransform(60.9,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AhaCPIAAkdIBiAAQAPAAAOADQAPAEAMAKQAMAJAIARQAEAIACAMIABAYQAAAbgHARQgHAPgNAJQgLAKgPAEQgPAEgPAAIgeAAIAABwgAgWgTIANAAIAKgBQAGgCAFgEQAFgFACgHQADgHAAgKQAAgLgCgHQgDgHgFgDQgEgEgGgCIgMgBIgMAAg");
	this.shape_6.setTransform(39.5,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AAWCPIgfhkIgSAhIAABDIhCAAIAAkdIBCAAIAAByIAuhyIBLAAIg/B/IA/Ceg");
	this.shape_7.setTransform(18.3,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.4,50.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.butil();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,144);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_24();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,451,144);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_08();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,115);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,101);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,166);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,204);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_14();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({_off:true},1).wait(18).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,20);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(100.6,27.7,1,1,0,0,0,100.6,27.7);

	this.instance_1 = new lib.Символ40копия();
	this.instance_1.setTransform(100.6,27.7,1,1,0,0,0,100.6,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.3,55.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(100.6,27.7,1,1,0,0,0,100.6,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.14,scaleY:1.14},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.3,55.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(10.1,82,1,1,0,0,0,10.1,82);

	this.instance_1 = new lib.Символ35копия();
	this.instance_1.setTransform(10.1,82,1,1,0,0,0,10.1,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,163.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(18.4,18.4,1,1,0,0,0,18.4,18.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ41(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.9,39);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(18.4,18.4,1,1,0,0,0,18.4,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.68,scaleY:0.68},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,38.9,39);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// УГОСТИ 
	this.instance = new lib.Символ13();
	this.instance.setTransform(91.3,26.7,1,1,0,0,0,79.2,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,x:71.3},9).to({scaleX:1,x:91.3},10).to({scaleX:1.34,x:118.5},10).to({scaleX:1,x:91.3},10).wait(1));

	// КРАСОТКУ
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(91.7,78.3,1,1,0,0,0,91.7,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.25,x:114.9},9).to({scaleX:1,x:91.7},10).to({scaleX:1.24,x:69.7},10).to({scaleX:1,x:91.7},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.4,103.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(-29.7,98.9,1,1,48.4,0,0,16.5,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:16.4,rotation:73.9,x:-29.6,y:98},14).to({regX:16.5,rotation:48.4,x:-29.7,y:98.9},15).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AGtmWIDbD3Iw0O6Ijbj3g");
	var mask_graphics_1 = new cjs.Graphics().p("AHAmBIDTD+IxSOWIjTj9g");
	var mask_graphics_2 = new cjs.Graphics().p("AHSlrIDLEEIxuNzIjLkFg");
	var mask_graphics_3 = new cjs.Graphics().p("AHklVIDCELIyJNOIjCkLg");
	var mask_graphics_4 = new cjs.Graphics().p("AH1k+IC6ERIyjMpIi6kRg");
	var mask_graphics_5 = new cjs.Graphics().p("AIGkmICyEWIy9MDIiykWg");
	var mask_graphics_6 = new cjs.Graphics().p("AIXkNICoEaIzVLeIiokcg");
	var mask_graphics_7 = new cjs.Graphics().p("AInj0ICfEgIzsK2Iifkhg");
	var mask_graphics_8 = new cjs.Graphics().p("AI2jZICWEkI0BKOIiWkmg");
	var mask_graphics_9 = new cjs.Graphics().p("AJFi+ICMEoI0VJlIiMkqg");
	var mask_graphics_10 = new cjs.Graphics().p("AJTijICDEtI0oI8IiDkvg");
	var mask_graphics_11 = new cjs.Graphics().p("AJhiGIB5ExI06IRIh5kzg");
	var mask_graphics_12 = new cjs.Graphics().p("AJthpIBwE0I1JHnIhwk3g");
	var mask_graphics_13 = new cjs.Graphics().p("AJ6hMIBlE4I1YG8Ihlk6g");
	var mask_graphics_14 = new cjs.Graphics().p("AKFgtIBcE7I1lGPIhck9g");
	var mask_graphics_15 = new cjs.Graphics().p("AJ7hJIBkE4I1ZG4Ihkk6g");
	var mask_graphics_16 = new cjs.Graphics().p("AJvhlIBuE1I1LHhIhuk3g");
	var mask_graphics_17 = new cjs.Graphics().p("AJjiAIB3ExI08IJIh3k0g");
	var mask_graphics_18 = new cjs.Graphics().p("AJXibICAEuI0tIwIiAkwg");
	var mask_graphics_19 = new cjs.Graphics().p("AJKi1ICJEqI0cJXIiJksg");
	var mask_graphics_20 = new cjs.Graphics().p("AI8jOICSElI0JJ+IiSkog");
	var mask_graphics_21 = new cjs.Graphics().p("AIujnICbEhIz2KkIibkkg");
	var mask_graphics_22 = new cjs.Graphics().p("AIfkAICkEdIzhLJIikkfg");
	var mask_graphics_23 = new cjs.Graphics().p("AIQkXICsEYIzLLtIiskZg");
	var mask_graphics_24 = new cjs.Graphics().p("AIBkuIC0EVIy1MPIi0kUg");
	var mask_graphics_25 = new cjs.Graphics().p("AHxlEIC8EPIydMzIi8kPg");
	var mask_graphics_26 = new cjs.Graphics().p("AHhlaIDEEKIyFNWIjEkKg");
	var mask_graphics_27 = new cjs.Graphics().p("AHQluIDMEDIxrN4IjMkEg");
	var mask_graphics_28 = new cjs.Graphics().p("AG+mCIDUD9IxPOZIjUj+g");
	var mask_graphics_29 = new cjs.Graphics().p("AGtmWIDbD3Iw0O6Ijbj3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-29.7,y:79.5}).wait(1).to({graphics:mask_graphics_1,x:-29.7,y:78.8}).wait(1).to({graphics:mask_graphics_2,x:-29.7,y:78}).wait(1).to({graphics:mask_graphics_3,x:-29.7,y:77.2}).wait(1).to({graphics:mask_graphics_4,x:-29.7,y:76.4}).wait(1).to({graphics:mask_graphics_5,x:-29.7,y:75.6}).wait(1).to({graphics:mask_graphics_6,x:-29.7,y:74.7}).wait(1).to({graphics:mask_graphics_7,x:-29.7,y:73.8}).wait(1).to({graphics:mask_graphics_8,x:-29.7,y:72.9}).wait(1).to({graphics:mask_graphics_9,x:-29.7,y:72}).wait(1).to({graphics:mask_graphics_10,x:-29.7,y:71}).wait(1).to({graphics:mask_graphics_11,x:-29.7,y:70}).wait(1).to({graphics:mask_graphics_12,x:-29.7,y:69}).wait(1).to({graphics:mask_graphics_13,x:-29.7,y:68}).wait(1).to({graphics:mask_graphics_14,x:-29.6,y:67}).wait(1).to({graphics:mask_graphics_15,x:-29.6,y:68}).wait(1).to({graphics:mask_graphics_16,x:-29.6,y:68.9}).wait(1).to({graphics:mask_graphics_17,x:-29.6,y:69.8}).wait(1).to({graphics:mask_graphics_18,x:-29.6,y:70.8}).wait(1).to({graphics:mask_graphics_19,x:-29.6,y:71.7}).wait(1).to({graphics:mask_graphics_20,x:-29.6,y:72.6}).wait(1).to({graphics:mask_graphics_21,x:-29.6,y:73.4}).wait(1).to({graphics:mask_graphics_22,x:-29.6,y:74.3}).wait(1).to({graphics:mask_graphics_23,x:-29.6,y:75.1}).wait(1).to({graphics:mask_graphics_24,x:-29.6,y:75.9}).wait(1).to({graphics:mask_graphics_25,x:-29.6,y:76.7}).wait(1).to({graphics:mask_graphics_26,x:-29.6,y:77.4}).wait(1).to({graphics:mask_graphics_27,x:-29.6,y:78.1}).wait(1).to({graphics:mask_graphics_28,x:-29.6,y:78.8}).wait(1).to({graphics:mask_graphics_29,x:-29.7,y:79.5}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AlNBSIGSlJQBjANBjgcIBDBMIn7HBg");
	this.shape.setTransform(-48.6,117.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AlPBGIGCk0QBuANBvgcIBABOIoGGug");
	this.shape_1.setTransform(-48.9,117.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AlRA5IFykfQB6ANB5gcIA+BPIoQGcg");
	this.shape_2.setTransform(-49.2,116.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AlTAtIFhkKQCFANCGgcIA7BRIoaGIg");
	this.shape_3.setTransform(-49.5,116.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AlVAhIFTj2QCOAOCRgcIA4BRIokF2g");
	this.shape_4.setTransform(-49.7,115.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AlWAUIFCjgQCaANCcgcIA1BUIouFig");
	this.shape_5.setTransform(-50,115);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AlYAIIEyjMQClAOCogcIAyBUIo5FRg");
	this.shape_6.setTransform(-50.3,114.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AlagDIEhi3QCyANCzgcIAvBWIpDE9g");
	this.shape_7.setTransform(-50.6,113.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AlcgPIERijQC9ANC/gbIAsBWIpNErg");
	this.shape_8.setTransform(-50.9,113.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AlegcIEBiOQDIANDLgaIAoBXIpXEZg");
	this.shape_9.setTransform(-51.2,112.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AlfgoIDwh5QDUANDWgbIAlBZIphEGg");
	this.shape_10.setTransform(-51.5,112.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("Alhg0IDghlQDfAODhgbIAjBaIpsDzg");
	this.shape_11.setTransform(-51.8,111.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AljhAIDPhQQDqAODugbIAgBbIp3Dgg");
	this.shape_12.setTransform(-52,111.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AllhNIC/g6QD2AND5gbIAdBdIqADOg");
	this.shape_13.setTransform(-52.3,110.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AlnhZICvgmQEBAOEEgbIAbBeIqLC7g");
	this.shape_14.setTransform(-52.6,110);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AllhOIC+g5QD2AOD6gbIAdBdIqBDMg");
	this.shape_15.setTransform(-52.3,110.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AlkhCIDOhMQDsANDugbIAhBcIp5Ddg");
	this.shape_16.setTransform(-52.1,111.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("Alig3IDdhgQDhAODkgbIAjBaIpvDvg");
	this.shape_17.setTransform(-51.8,111.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AlggrIDsh0QDXANDYgbIAmBaIplEBg");
	this.shape_18.setTransform(-51.5,112.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AleggID7iHQDMANDOgaIAoBYIpbERg");
	this.shape_19.setTransform(-51.3,112.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AldgUIELibQDBAODEgcIArBXIpSEkg");
	this.shape_20.setTransform(-51,113.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AlbgIIEaivQC3ANC4gbIAuBWIpIE1g");
	this.shape_21.setTransform(-50.7,113.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AlZACIEpjBQCsAOCugcIAwBVIo+FGg");
	this.shape_22.setTransform(-50.5,114.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AlXANIE4jUQChANCjgbIAzBTIo0FYg");
	this.shape_23.setTransform(-50.2,114.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AlWAZIFIjoQCWANCZgcIA2BTIorFqg");
	this.shape_24.setTransform(-50,115.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AlUAkIFVj6QCOANCNgcIA5BRIohF6g");
	this.shape_25.setTransform(-49.7,115.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009900").s().p("AlSAwIFkkPQCDANCDgcIA7BQIoXGNg");
	this.shape_26.setTransform(-49.4,116.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AlRA7IF0kiQB4ANB5gcIA9BPIoNGeg");
	this.shape_27.setTransform(-49.1,116.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AlPBHIGEk2QBtANBugcIBABNIoFGwg");
	this.shape_28.setTransform(-48.9,117.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.5,38.8,129.7,120.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(60.5,207,1,1,0,0,0,415.5,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// for-rez_18.png
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(173.5,218,1,1,0,0,0,5.5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:167.5},14).to({x:173.5},15).wait(1));

	// for-rez_14.png
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(101.5,-50.5,1,1,0,0,0,20.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:3.5,x:114.5,y:-47.5},14).to({rotation:0,x:101.5,y:-50.5},15).wait(1));

	// for-rez_11.png
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(162,135.5,1,1,0,0,0,14,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:19.7,x:183.1},14).to({rotation:0,x:162},15).wait(1));

	// for-rez_08.png
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(143.5,35.5,1,1,0,0,0,20.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:20.4,rotation:-10.5,x:146.5,y:39.6},14).to({regX:20.5,rotation:0,x:143.5,y:35.5},15).wait(1));

	// for-rez_05.png
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(35,168,1,1,0,0,0,43,182);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:43.1,rotation:3.3,x:35.1},14).to({regX:43,rotation:0,x:35},15).wait(1));

	// for-rez_03.png
	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(102,0,1,1,0,0,0,79,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:3.2,x:112,y:3.1},14).to({rotation:0,x:102,y:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355,-96,590,331);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(-3.9,4.1,1,1,0,0,0,0.5,0.4);

	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-5,0.5,1,1,0,0,0,0.4,0.4);

	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(-4.9,2.2,1,1,0,0,0,0.5,0.4);

	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(-3.2,-0.7,1,1,0,0,0,0.5,0.4);

	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(-4.2,-1.1,1,1,0,0,0,0.5,0.4);

	this.instance_5 = new lib.Символ28();
	this.instance_5.setTransform(-3.4,-3.4,1,1,0,0,0,1.3,1);

	this.instance_6 = new lib.Символ27();
	this.instance_6.setTransform(-0.7,-4,1,1,0,0,0,0.4,0.4);

	this.instance_7 = new lib.Символ26();
	this.instance_7.setTransform(1.6,-3.7,1,1,0,0,0,0.5,0.4);

	this.instance_8 = new lib.Символ25();
	this.instance_8.setTransform(0.1,-3,1,1,0,0,0,0.4,0.4);

	this.instance_9 = new lib.Символ24();
	this.instance_9.setTransform(3.1,-2.8,1,1,0,0,0,0.4,0.4);

	this.instance_10 = new lib.Символ23();
	this.instance_10.setTransform(4.5,0.4,1,1,0,0,0,1,0.5);

	this.instance_11 = new lib.Символ22();
	this.instance_11.setTransform(4.7,-1.9,1,1,0,0,0,0.4,0.4);

	this.instance_12 = new lib.Символ21();
	this.instance_12.setTransform(3.8,2.5,1,1,0,0,0,0.8,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.4,10.9,8.9);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(-3.9,4.1,1,1,0,0,0,0.5,0.4);

	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-5,0.5,1,1,0,0,0,0.4,0.4);

	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(-4.9,2.2,1,1,0,0,0,0.5,0.4);

	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(-3.2,-0.7,1,1,0,0,0,0.5,0.4);

	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(-4.2,-1.1,1,1,0,0,0,0.5,0.4);

	this.instance_5 = new lib.Символ28();
	this.instance_5.setTransform(-3.4,-3.4,1,1,0,0,0,1.3,1);

	this.instance_6 = new lib.Символ27();
	this.instance_6.setTransform(-0.7,-4,1,1,0,0,0,0.4,0.4);

	this.instance_7 = new lib.Символ26();
	this.instance_7.setTransform(1.6,-3.7,1,1,0,0,0,0.5,0.4);

	this.instance_8 = new lib.Символ25();
	this.instance_8.setTransform(0.1,-3,1,1,0,0,0,0.4,0.4);

	this.instance_9 = new lib.Символ24();
	this.instance_9.setTransform(3.1,-2.8,1,1,0,0,0,0.4,0.4);

	this.instance_10 = new lib.Символ23();
	this.instance_10.setTransform(4.5,0.4,1,1,0,0,0,1,0.5);

	this.instance_11 = new lib.Символ22();
	this.instance_11.setTransform(4.7,-1.9,1,1,0,0,0,0.4,0.4);

	this.instance_12 = new lib.Символ21();
	this.instance_12.setTransform(3.8,2.5,1,1,0,0,0,0.8,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.4,10.9,8.9);


(lib.Символ37 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ11();
	this.instance.setTransform(91.7,51.6,1,1,0,0,0,91.7,51.6);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(100.4,49.6,1,1,0,0,0,100.5,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.4,103.4);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(1,1,1,1,0,0,0,1,1);

	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(-1.5,-3.1,1,1,0,0,0,0.5,0.4);

	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(-2,-4.1,1,1,0,0,0,0.4,0.4);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(-1,-4,1,1,0,0,0,0.5,0.4);

	this.instance_4 = new lib.Символ30();
	this.instance_4.setTransform(-0.6,-5,1,1,0,0,0,0.5,0.4);

	this.instance_5 = new lib.Символ29();
	this.instance_5.setTransform(-1.6,-5.4,1,1,0,0,0,0.5,0.4);

	this.instance_6 = new lib.Символ28();
	this.instance_6.setTransform(-0.2,-5.7,1,1,0,0,0,1.3,1);

	this.instance_7 = new lib.Символ27();
	this.instance_7.setTransform(0.9,-6.2,1,1,0,0,0,0.4,0.4);

	this.instance_8 = new lib.Символ26();
	this.instance_8.setTransform(2.2,-6.6,1,1,0,0,0,0.5,0.4);

	this.instance_9 = new lib.Символ25();
	this.instance_9.setTransform(1.7,-5.7,1,1,0,0,0,0.4,0.4);

	this.instance_10 = new lib.Символ24();
	this.instance_10.setTransform(2.7,-5.9,1,1,0,0,0,0.4,0.4);

	this.instance_11 = new lib.Символ23();
	this.instance_11.setTransform(4.7,-4.8,1,1,0,0,0,1,0.5);

	this.instance_12 = new lib.Символ22();
	this.instance_12.setTransform(3.5,-5.5,1,1,0,0,0,0.4,0.4);

	this.instance_13 = new lib.Символ21();
	this.instance_13.setTransform(2.7,-4,1,1,0,0,0,0.8,1.1);

	this.instance_14 = new lib.Анимация1("synched",0);
	this.instance_14.setTransform(1.4,-5.2);
	this.instance_14._off = true;

	this.instance_15 = new lib.Анимация2("synched",0);
	this.instance_15.setTransform(1.4,-5.2);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_13,p:{x:2.7,y:-4}},{t:this.instance_12,p:{x:3.5,y:-5.5}},{t:this.instance_11,p:{x:4.7,y:-4.8}},{t:this.instance_10,p:{x:2.7,y:-5.9}},{t:this.instance_9,p:{x:1.7,y:-5.7}},{t:this.instance_8,p:{x:2.2,y:-6.6}},{t:this.instance_7,p:{x:0.9,y:-6.2}},{t:this.instance_6,p:{x:-0.2,y:-5.7}},{t:this.instance_5,p:{x:-1.6,y:-5.4}},{t:this.instance_4,p:{x:-0.6,y:-5}},{t:this.instance_3,p:{x:-1,y:-4}},{t:this.instance_2,p:{x:-2,y:-4.1}},{t:this.instance_1,p:{x:-1.5,y:-3.1}}]},1).to({state:[{t:this.instance_13,p:{x:4.1,y:-3.3}},{t:this.instance_12,p:{x:5.3,y:-6.3}},{t:this.instance_11,p:{x:5.5,y:-4.6}},{t:this.instance_10,p:{x:4.1,y:-7.5}},{t:this.instance_9,p:{x:2.1,y:-7.1}},{t:this.instance_8,p:{x:2.4,y:-7.5}},{t:this.instance_7,p:{x:0.7,y:-8}},{t:this.instance_6,p:{x:-1.1,y:-6.9}},{t:this.instance_5,p:{x:-2.5,y:-5.9}},{t:this.instance_4,p:{x:-1.9,y:-4.9}},{t:this.instance_3,p:{x:-2.9,y:-2.7}},{t:this.instance_2,p:{x:-2.6,y:-3.9}},{t:this.instance_1,p:{x:-1.9,y:-1.7}}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.5},4).to({y:-3.4},4,cjs.Ease.get(1)).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({_off:false},0).to({_off:true,alpha:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,2.5,2.4);


(lib.Символ15 = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai4CVIAAkqIFwAAIAAEqg");
	this.shape.setTransform(61.5,-6.6);

	this.instance = new lib.Символ14();
	this.instance.setTransform(-294.6,152.5,1,1,0,0,0,18.4,18.4);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(-250.5,54.4,1,1,0,0,0,18.4,18.4);

	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(-222.6,-15.6,1,1,0,0,0,18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43,-21.6,37,30);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ20();
	this.instance.setTransform(-35.7,3.8,2.214,2.214);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},14).wait(16));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-24.1,2,2.013,2.013);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},14).wait(19));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(-14.7,-0.3,0.965,0.965);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},14).wait(22));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(-44.1,-1.3,0.965,0.965);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({_off:true},14).wait(9));

	// Слой 1 - копия: 2 - копия
	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(-32.5,-0.3,1.543,1.543);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true},14).wait(16));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(-40.9,2,1.946,1.946);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).wait(14));

	// Слой 1 - копия: 2
	this.instance_6 = new lib.Символ20();
	this.instance_6.setTransform(-38.2,-0.7,2.133,2.133);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({_off:true},14).wait(20));

	// Слой 1 - копия
	this.instance_7 = new lib.Символ20();
	this.instance_7.setTransform(-34.6,5,2.684,2.684);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({_off:true},14).wait(7));

	// Слой 1
	this.instance_8 = new lib.Символ20();
	this.instance_8.setTransform(-26.2,4,2.684,2.684);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},14).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-0.5,14.3,10.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.setTransform(51.4,6.6,1,1,0,0,0,2.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADIANAFQAUAHAVgFIAWgHQAOgEAJAEQAFACAHAHQAIAHAEACQALAGARgDQAHgBAWgIQAvgSAhAPIAPAIQAIAEAHAAQAJABANgEIAWgJQAZgIAtAJQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape.setTransform(21.4,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACANAAQAVADARgCQAHABANgDQAMgCAJACQAHACAIAGQAIAHAFgCIAaAEQAJADAZgHQArgOAeAKIASACQAIAAAHACQAJACAMAAQAIAAAOgDQAWgFAxACQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_1.setTransform(21.4,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACARgDQAWgCANADQAGAEALgCQAKgBALACQAIAAAIAHQAJAGAHgGQAKgEAOAIQAJAIAcgGQAogLAaAHQAMAAAKgEQAIgEAIADIATAHQAIADAOgBIBIgGQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_2.setTransform(21.4,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AiWAjQg4g1gGhMIAIAAQAFAAAIAEQAEABAVgGQAYgGAIAHQAFAHAJAAIAUAAQALAAAIAGQAJAGAIgJQAJgJANANQAKANAggFQAkgIAXACQAPgBAJgIQAJgJAIAFQAIAEAKAIQAIAHAPACQAQABA4gMQgKBEgzAwQg/BAhZAAQhXAAg/hAg");
	this.shape_3.setTransform(21.4,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AiWAmQg4g1gGhMIAIAAQAFAAAIAEQAEABAZgKQAZgKAEALQAEAKAHACQAIABAMgBQAMAAAJAFQAJAGAJgOQAJgNALASQAMASAggFIA2gGQATgCAJgNQAJgNAIAGQAIAGAJALQAIALAPAEQAOAEA7gSQgKBEgzAwQg/BAhZAAQhXAAg/hAg");
	this.shape_4.setTransform(21.4,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AiWAkQg4g2gGhMIAIAAQAFABAIADQAEACAWgHQAYgHAHAIQAFAIAJgBIAUABQAKAAAJAGQAJAGAIgLQAKgKAMAOQAKAOAggEQAkgIAWACQAQgBAJgJQAJgKAIAFQAIAFAKAIQAIAIAOACQARABA4gMQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_5.setTransform(21.4,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACATgFQAWgDALAEQAGAGAKgCIAVABQAJAAAIAHQAJAGAHgIQAKgFAOAJQAJAKAegFQAmgKAZAFQANAAAJgGQAJgGAIAEIATAJQAHAFAPAAQASgBA2gHQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_6.setTransform(21.4,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACAPgCIAlABQAGADAMgCQALgCAKACQAIABAHAGQAJAHAGgEQAKgCAPAFQAJAHAbgHQApgMAcAIQAKABAKgCQAIgDAHADIAUAEQAIADAPgCQAUgDAzgCQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_7.setTransform(21.4,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACAMABQAVADASgCQAGAAAOgDQAMgDAKADQAGACAIAGQAIAHAFgBQAKACAQABQAJADAYgHQAsgPAeALIASADIAPACQAJACAMgBQAIAAAOgEQAXgGAwAEQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_8.setTransform(21.4,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.8,19.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ36();
	this.instance.setTransform(22.3,124.5,1,1,0,0,0,10.1,82);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,24,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this._animationGuide_0 = new lib.Символ18();
	this._animationGuide_0.setTransform(21.6,252.2,0.963,1,0,0,0,21.4,9.8);

	this.timeline.addTween(cjs.Tween.get(this._animationGuide_0).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.557)").s().p("AiXShQg/g/AAhZQAAhZA/g/QAPgPAQgMIAKABIAA/EQABgvAhgiQAigiAuAAQAvAAAiAiQAhAiABAvIAAfCQARAMAPAQQBAA/AABZQAABZhAA/Qg+BAhZAAQhYAAg/hAg");
	this.shape.setTransform(21.6,137.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13,43.1,249.9);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kur.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kur.x = stage.mouseX;
			this.kur.y = stage.mouseY;
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.cursor = "none";
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.pricel.gotoAndStop(1);
				_this.txt.gotoAndStop(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.pricel.gotoAndStop(0);
				_this.txt.gotoAndStop(0);
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ17();
	this.instance.setTransform(657.9,141.9,1,1,0,0,0,84.2,130.9);

	this.pricel = new lib.Символ15();
	this.pricel.setTransform(721.7,101.1,1,1,0,0,0,18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pricel},{t:this.instance}]}).wait(1));

	// Слой 3
	this.txt = new lib.Символ37();
	this.txt.setTransform(173.2,84.2,1,1,0,0,0,91.7,51.6);

	this.kur = new lib.Символ9();
	this.kur.setTransform(-99.4,137,1,1,0,0,0,16.5,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kur},{t:this.txt}]}).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(460.5,193.5,1,1,0,0,0,80,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.back();
	this.instance_2.setTransform(-6,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.6,119.5,993.7,359.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
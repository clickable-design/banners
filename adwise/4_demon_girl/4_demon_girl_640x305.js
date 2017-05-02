(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arm.png?1464011930417", id:"arm"},
		{src:"images/bg.jpg?1464011930417", id:"bg"},
		{src:"images/body.png?1464011930417", id:"body"},
		{src:"images/chest.png?1464011930417", id:"chest"},
		{src:"images/gun.png?1464011930417", id:"gun"},
		{src:"images/hand.png?1464011930417", id:"hand"},
		{src:"images/head.png?1464011930417", id:"head"},
		{src:"images/lips.png?1464011930417", id:"lips"}
	]
};



// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,100);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,569,261);


(lib.chest = function() {
	this.initialize(img.chest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,94);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,149);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,74);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,143);


(lib.lips = function() {
	this.initialize(img.lips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,9);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGDyQguAAgFgjIgfjZQgIg9BAAAIDBAAQBAAAgJA9IgeDZQgFAjgvAAgAADhPIAAgVIAAAAIAPAAIAAgHIAAhJIgPAAIAAg9IAAAAIA5AAQA0AAAFASIAiByQAEAKgHAIQgMANgvgBgAhZhPQguAAgMgNQgHgHADgKIAihyQAHgSA0AAIA4AAIAAA9IgQAAIAABJIAAAHIAQAAIAAAVgAADhpIgFAAIgKAAIAAgCIAAhEIAZAAIAABEIAAACg");
	this.shape.setTransform(16.5,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.408)").s().p("AhLEEQgygBgFglIghjqQgJhABFgBIDPAAQBFABgKBAIggDqQgGAlgxABgAiYgKIAfDZQAFAjAuAAICMAAQAvAAAFgjIAejZQAJg9hAAAIjBAAQhAAAAIA9gACXhtIgihyQgGgSg0AAIg4AAIAAgSIA9AAQA4ABAGASIAkB6QAGASgUAJQAHgIgEgKgAiih2IAlh6QAGgSA4gBIA9AAIAAASIg5AAQg0AAgGASIgiByQgDAKAHAHQgUgIAFgSgAADhkIAAgFIAKAAIAAgCIAFAAIAAAHgAgShkIAAgHIAFAAIAAACIALAAIAAAFg");
	this.shape_1.setTransform(16.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,52);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.286)").s().p("EgynAYSMAAAgwjMBlPAAAMAAAAwjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324,-155.5,648,311);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AikClQhFhFAAhgQAAhfBFhFQBFhFBfAAQBgAABFBFQBFBFAABfQAABghFBFQhFBFhgAAQhfAAhFhFgAigigQhCBDAABdQAABeBCBDQBDBCBdAAQBeAABDhCQBChDAAheQAAhdhChDQhDhCheAAQhdAAhDBCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-23.4,46.9,46.9);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVDMQgaAAgWgOQgLgGgKgKQgJgKgHgNQgJgSAAgbIAAhUIgXgNQgFgDAAgFQAAgDAFgDIAXgNIAAhYQgBgZAMgWQAMgVAYgSQAKgIALgBQAigFAVAFQAXAFARARQARAQAIAXQAHAVAAAZIAABMIAXANQAEACAAAEQAAAFgEADIgXANIAABHQAAAMgGAgQgBAGgFAJQgIANgKAKQgLAKgMAHQgWANgYAAIgCgBgAgWiHQgJAAgIAGQgHAHgCAKIAADKQAAATADAGQAHARATABQASAAAGgRQAEgIAAgOIAAi+QAAgLgDgJQgEgKgGgFQgHgEgIAAIgDAAgAn6DMQgaAAgWgOQgLgGgKgKQgJgKgHgNQgJgSAAgbIAAhUIgXgNQgFgDAAgFQAAgDAFgDIAXgNIAAhYQgBgZAMgWQAMgVAYgSQAKgIALgBQAigFAXAFQAXAFARARQARAQAIAXQAHAVAAAZIAABMIAXANQAEACAAAEQAAAFgEADIgXANIAABHQAAAMgGAgQgBAGgFAJQgIANgKAKQgLAKgMAHQgWANgaAAIgCgBgAn7iHQgJAAgIAGQgHAHgCAKIAADKQAAATADAGQAHARATABQASAAAIgRQAEgIAAgOIAAi+QAAgLgDgJQgEgKgIgFQgHgEgIAAIgDAAgAlEDGQgDgEAAgVIAAiWIgXgNQgFgDAAgGQAAgCAFgEIAXgNIAAiYQAAgTADgEQAEgEAUAAIB0AAQAagCABAPIAAApQgBALgIACIgjAAIgvACQgKACgCARIAABbIAXANQAEAEAAACQAAAFgEAEIgXANIAACPIgBAZQgCAKgLAAIgZABQgVAAgEgEgAHQDJQgWAAgEgDQgDgEAAgVIAAiYIgXgNQgFgDAAgFQAAgDAFgDIAXgNIAAiWQAAgPABgEQACgIAJgBQAtgDAGAHQAEAEAAAPIAABQQgDAgATADIAZABQAQABAIADQANAFALAIQAMAJAHAMQAIAMAFAMQAFAPABASIgBBRQgCAYgLASQgKAPgQAKQgNAJgSAEQgOADgPAAgAIGAEQgPADgBAOIAAA2IAAAwQADAMAVgCQAPgBAIgJQAIgHAEgNQADgMAAgsQAAgXgPgMQgKgIgOAAIgHAAgAErDIQgJgBgCgIIgCh4QAAgPgCgIQgFgQgpADQgLABgCAKQgCAEAAARIAABoQAAAUgEAFQgFAEgVAAQgdAAgEgEQgEgEAAgcIAAiOIgXgNQgFgDAAgFQAAgEAFgCIAXgNIAAiYQAAgVAEgEQAIgIAqAEQAKABADAJIAAAWIAABfQAAAeAFAFQAKAJAggFQARgBgBgjIABhlQAAgVAEgEQAIgIAqAEQAKABACAJIABAUIAACXIAXANQAEACAAAEQAAAFgEADIgXANIAACTQAAAWgFAFQgEAEgYAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-20.5,125.9,41);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWKpIAAhQIhdAAIAAgvIBdAAIAAg1Qi8gKiIiJQiKiLgIjBIg+AAIAABeIguAAIAAheIhRAAIAAgrIBRAAIAAhfIAuAAIAABfIA+AAQAIjBCKiMQCIiGC8gKIAAg3IhdAAIAAgvIBdAAIAAhQIAsAAIAABQIBfAAIAAAvIhfAAIAAA2QDGAFCNCMQCLCMAHDBIAwAAIAAheIAuAAIAABeIBRAAIAAArIhRAAIAABeIguAAIAAheIgwAAQgHDBiLCLQiNCOjGAFIAAA1IBeAAIAAAvIheAAIAABQgAAkAcQgHAGgHADIAAHDQDBgGCJiJQCGiHAIi8InGAAIgEAGgAlRFZQCFCEC2AKIAAnNIgDgEInFAAQAHC8CGCHgAAWgjQAHADAHAFIAEAGIHGAAQgIi7iGiIQiJiIjBgFgAlRlYQiGCIgHC7IHGAAIACgEIAAnMQi2AKiFCDg");
	this.shape.setTransform(-6.4,-32.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.6,-101.1,136.4,136.4);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,2,0,3).p("Egx/gX0MBj/AAAMAAAAvpMhj/AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-155,645,310);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhTDIQgJgBgDgIQgBgEAAgPIAAiWIgXgNQgEgDAAgFQAAgEAEgCIAXgNIAAiYQAAgVAEgEQAEgDAVAAIBCAAQAMAAAPADQARAEAOAJQAQAKAJAPQALASACAYIABBRQgBAOgEAOQgFAKgIAMQgIAKgLAJQgLAIgOAFQgHADgRABIgWABQgNACgDAJQgBAEAAAUIAABZQAAAPgEAEQgEAFgWAAIgYgBgAgch3IgBAvIABAAIAAAtQABAOAPADQAOACAOgJQANgKACgRIADgdQAAgQgEgLQgEgNgIgIQgKgIgNgBIgDAAQgRAAgDALgAIJDHQgKgBgCgIIgBkYQAAgRgDgIQgEgQgpAEQgLABgDAJQgBAFAAASIAAEJQAAAUgFAEQgEAFgVAAQgeAAgEgEQgEgFAAgcIAAiOIgXgNQgEgDAAgFQAAgDAEgDIAXgNIAAiXQAAgPAFgGQAFgGAMAAICYAAQANABAGAHQAFAHAAAOIAACVIAXANQAFADAAADQAAAFgFADIgXANIAACTQAAAXgEAEQgFAFgXAAgACXDDQgFgEAAgdIAAiNIgXgNQgEgDAAgFQAAgDAEgDIAXgNIAAiVQAAgVAEgEQAEgEAVAAIB7AAQASAAAFAEQAHAHgEAoQAAAIgIADQgFABgQAAIg5AAQgNAAgGAGQgFAFgBANIABA5QAAAKAFAGQAGAGAfAAIAUAAQAKAAAEAEQADAEABAKIgBAiQAAALgMABIgnABQgQAAgFAEQgGAFgBASIgBAvQABAOAFAFQAGAFANAAIBNACQAIACABAIQACAYgCATQgBAJgIADIiNABQgSAAgFgFgAlCDDQgFgEAAgdIAAiNIgXgNQgEgDAAgFQAAgDAEgDIAXgNIAAiVQAAgVAEgEQAEgEAVAAIB7AAQASAAAFAEQAHAHgEAoQAAAIgIADQgFABgQAAIg5AAQgNAAgGAGQgFAFgBANIABA5QAAAKAFAGQAGAGAfAAIAUAAQAKAAAEAEQADAEABAKIgBAiQAAALgMABIgnABQgQAAgFAEQgGAFgBASIgBAvQABAOAFAFQAGAFANAAIBNACQAIACABAIQACAYgCATQgBAJgIADIiNABQgSAAgFgFgAnPDHQgJgBgCgIIgCiHQAAgQgIAAQgOAFgRAAQgRAAgPgFQgQgGgMgLQgNgLgHgOQgHgSAAgWIAAh/QAAgWAEgDQAEgFAcAAIATABQAKABACAJQABADAAASIAABmQAAAcAGALQAHAOAWAAQATAAADgLIACiSQAAgWAEgDQAEgFAbAAIATABQAKABACAIIABAUIAACXIAXANQAEADAAADQAAAFgEADIgXANIAACTQAAAXgFAEQgEAFgXAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-20.1,120.7,40.3);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-26.1,212.1,52.3);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();
	this.instance.setTransform(-101,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-74.5,202,149);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqJKJQhshqhAh+Qhhi9AAjkQAAjjBhi9QBAh+BshrQEOkOF7ABQF8gBENEOQEOEOAAF7QAAF8kOENQkNEOl8AAQl7AAkOkOgAp2p2Qh+B9hBCXQhHCjAAC/QAADABHCjQBBCWB+B+QEGEGFwAAQFxAAEGkGQEGkGAAlxQAAlxkGkFQkGkGlxAAQlwAAkGEGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-92,184,184);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,255,255,0)","rgba(0,255,255,0.349)","rgba(0,255,255,0)"],[0.008,0.447,1],-16,6.9,13.3,-0.9).s().p("AiDgQIDiiFQAYCQAzCGIkbAVQhnhMBVhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-15,34.2,30);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,10.2).s().p("AhGBHQgegeABgpQgBgoAegeQAegeAoABQApgBAeAeQAeAegBAoQABApgeAeQgeAegpgBQgoABgegeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-10.1,20.2,20.2);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arm();
	this.instance.setTransform(-16,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-50,32,100);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lips();
	this.instance.setTransform(-13.5,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-4.5,27,9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,255,0.298)").s().p("Ag2gPQBFgUAoAwQgTAJgSAAQglAAgjglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-2.2,11.1,4.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#160D0F").s().p("AgCAhIgJAPIgGgSIgJARIgEgNIgHAHIABgPIgIAOIACgOIgLAFIAIgLIgPAEIASgYIgWARIAIgRIgJAMIAAgMIgKAKIALgUIgOAOIAMgSIgOAOIAGgIIgEgYIAAAAQBagvBFBnIgEACIgJgHIgGAMIgHgLIgBANIgJgFIgFAJIgHgIIgDANIgJgMIgDAQIgHgLIgHANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-4.8,16.4,9.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjigdQBogLBPA5IAAASQhKhAhtAAgABiAMQA6goBHgHIAAAGQhKANg3Avg");
	this.shape.setTransform(0,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjfgeQBogJBPA3IAAATQhKhAhtgBgABmALQA2glBEgJQg/ASg0Aqg");
	this.shape_1.setTransform(-0.3,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjfggQBogHBPA3IAAAUQhKhBhtgDgABlALQA3gmBEgIQhAASgzAqg");
	this.shape_2.setTransform(-0.3,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjfghQBogGBPA3IAAAUQhKhAhtgFgABlAKQA3gkBEgJQhBATgzAqg");
	this.shape_3.setTransform(-0.3,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjfgiQBngEBPA2IAAAVQhKhBhsgGgABlAKQA3gkBEgKQhCAVg0Aqg");
	this.shape_4.setTransform(-0.2,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjfgjQBngDBPA2IAAAVQhKhAhsgIgABkAKQA4gjBFgLQhEAWgzAqg");
	this.shape_5.setTransform(-0.2,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjgglQBoAABPA1IAAAWQhKhBhtgKgABkAKQA4gjBFgLQhFAXgzAqg");
	this.shape_6.setTransform(-0.2,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjggmQBnACBQA0IAAAWQhLhAhsgMgABkAKQA4gjBFgLQhGAYgzAqg");
	this.shape_7.setTransform(-0.1,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjggmQBnACBPA0IAAAXQhKhAhsgNgABkAJQA4ghBFgNQhHAagzAqg");
	this.shape_8.setTransform(-0.1,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjggnQBnAEBPA0IAAAXQhKhAhsgPgABjAKQA5ghBGgNQhJAagzArg");
	this.shape_9.setTransform(-0.1,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjhgoQBoAGBPAzIAAAYQhKhBhtgQgABjAJQA5gfBGgOQhKAcgyAqg");
	this.shape_10.setTransform(-0.1,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjhgpQBnAIBPAyIAAAZQhKhBhsgSgABjAKQA5ggBGgPQhLAegzAqg");
	this.shape_11.setTransform(0,-1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjhgpQBnAIBPAyIAAAZQhKhAhsgTgABiAJQA5geBHgQQhMAfgzAqg");
	this.shape_12.setTransform(0,-1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjhgrQBnALBPAxIAAAaQhKhAhsgWgABiAKQA6gfBGgQQhNAggyArg");
	this.shape_13.setTransform(0,-1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AjigrQBoAMBPAxIAAAaQhLhAhsgXgABiAKQA6geBHgRQhLAdg2Avg");
	this.shape_14.setTransform(0.1,-1.7);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjhgpQBmAJBPAwIAAAaQhKhAhrgTgABhAIQA6gdBHgPQhKAbg3Aug");
	this.shape_15.setTransform(0.1,-1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjigmQBnAEBPAxIAAAYQhKg+hsgPgABhAHQA6geBIgMQhLAYg3Atg");
	this.shape_16.setTransform(0.1,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjigkQBmAABPAxIAAAYQhKg+hrgLgABhAFQA5geBJgJQhMAVg2Atg");
	this.shape_17.setTransform(0.2,-1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjighQBmgEBPAxIAAAXQhKg9hrgHgABgAEQA6geBJgIQhMAUg3Asg");
	this.shape_18.setTransform(0.2,-1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AjigeQBmgIBPAxIAAAWQhLg8hqgDgABgADQA5geBKgFQhNARg2Arg");
	this.shape_19.setTransform(0.3,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AjigbQBlgLBPAwIAAAVQhKg7hqABgABfACQA6gdBKgDQhNAPg3Apg");
	this.shape_20.setTransform(0.3,-0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AjigXQBlgQBPAxIAAAUQhKg6hqAFgABfACQA6geBKgBQhNANg3Apg");
	this.shape_21.setTransform(0.3,-0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AjigUQBkgUBPAxIAAATQhKg5hpAJgABfABQA5geBLACQhOAKg2Aog");
	this.shape_22.setTransform(0.4,-0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjjgRQBlgXBPAwIAAATQhKg5hqANgABeAAQA6gdBMADQhPAJg3Ang");
	this.shape_23.setTransform(0.4,-0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AjigNQBjgcBQAxIAAARQhLg3hoARgABeAAQA6geBLAGQhPAGg2Amg");
	this.shape_24.setTransform(0.5,-0.7);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjigPQBlgaBPAyIAAARQhKg4hqAPgABfABQA5geBLAEQhOAIg2Amg");
	this.shape_25.setTransform(0.3,-0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjigRQBlgYBPAzIAAARQhKg5hqANgABgACQA5gfBKADQhNAJg2Ang");
	this.shape_26.setTransform(0.3,-0.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AjigSQBmgWBPAzIAAASQhLg7hqAMgABgAEQA5ghBKACQhMAKg2Aog");
	this.shape_27.setTransform(0.3,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AjigUQBmgUBPA0IAAASQhKg8hrAKgABgAFQA6giBJAAQhMAMg2Apg");
	this.shape_28.setTransform(0.2,-0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AjigWQBmgSBPA1IAAASQhKg9hrAIgABhAGQA5gjBJgBQhLANg2Aqg");
	this.shape_29.setTransform(0.2,-0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjigYQBngQBPA2IAAASQhKg9hsAFgABhAIQA6glBIgCQhLAOg1Arg");
	this.shape_30.setTransform(0.1,-0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjigZQBngPBPA3IAAASQhKg+hsAEgABhAKIAAgBQA6gmBIgDQhKAPg2Asg");
	this.shape_31.setTransform(0.1,-0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AjigbQBngNBQA4IAAASQhLg/hsACgABiALQA5goBIgEQhJAQg2Asg");
	this.shape_32.setTransform(0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(52).to({_off:false},0).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(14).to({_off:false},0).wait(10).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(34).to({_off:false},0).wait(10).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.7,-4.4,45.5,7.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.setTransform(-62,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-71.5,124,143);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chest();
	this.instance.setTransform(-57.5,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-47,115,94);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,84.8).s().p("ApIJGQjwjwAAlWQAAlVDwjzQDzjwFVAAQFWAADwDwQDzDzAAFVQAAFWjzDwQjwDzlWAAQlVAAjzjzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-82.5,165,165);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB0200").s().p("AinR+QiWgViHg7QiIg7iEhmQiuiGhxjHQhwjGgejfQgOhiAAg5QAAg3AOhiQA0mEEWkWQEWkXGBgyQBqgOAyAAQAzAABpAOQCdAUCIA7QCHA6CIBoQCGBnBhCNQBhCMA4CqQAYBIASBrQASBrAABDQAAAzgPBoQg0GEkWEWQkWEXmBAyQhkANg9AAQg/AAhjgNgAGIF6Qh0ABgDADQgHAIhVEJIh0FoQgfBdAAAFQAAAIBdgNQBdgNBAgRQBhgZByg4QByg4BIg7QBvhZBKhbQBJhaA9h6IA2huImDgDIh4AAIibABgAqbF5ImDADIA2BuQA9B6BJBaQBKBbBvBZQBhBPCQA+QCRA/B/ASQAuAHAsACQAsADAAgEQAAgCgfhfIh0loQhVkJgHgIQgDgDh0gBIibgBIh4AAgAiyF6QgkACAAALQAAAQA9C7ICRG4QAHAUANgmQAQgmAzieQBJjlAchRQAihlAAgQQAAgNghgCQghgDiUAAQiOAAgkADgAFoBpQhCDIAAAKQAAAKFeAAQFeAAAAgEQAAgDkKjEQkKjBgZgPIgBAAQgNAAg/C/gAm1hWQgZAPkJDBQkLDEAAADQAAAEFeAAQFeAAAAgKQAAgJhCjJQg/i/gNAAIgBAAgAg+llQg6AnhLA3Ii7CIQgDACBCDOQBDDQAKATQAGAMAmACQAnADChgCIDtgDIBKjfQBJjdgDgDQlwkNgPAAQgEAAg6AngAKdtTQgIAchSD/IhvFXQgaBTADADQAQAPEsDVQEsDYAEAAQADAAAFgKQAGgJAEgOQAWhGAGiCQAHiBgPhnQgai9hii0Qhji1iWiDQghgcgLgCIgBAAQgKAAgGAUgAqutnQgLACghAcQiWCDhjC1QhiC0gaC9QgTCKAQCnQAQCoAfgMQAPgGEpjYIEujaQADgDgahTIhvlXQhSj/gIgcQgGgUgKAAIgBAAgApjtIQgCADARA6QAQA6AaBQQCJGoAIAWQACAGAFADQAGADAFgCQAGgBA0gkQA2glBDgxQBFgxAvgmQAvgngCgEQgFgMkTjFQkNjBgKAAIgBAAgAFLqHQkTDFgFAMQgEAKCmB6QCmB6AOgCQANgCAriCQBvlVAahUQAdhdgEgEIgBAAQgKAAkNDBgAimxOQgtAEhEATQhIATiIA+QiJA9AAANQAAAEAdAXQAdAYAoAcICTBrQF4ETADAAIIPl+QAogdAdgXQAcgXAAgEQAAgMiIg+QiJg+hIgTQhEgTgsgEQgsgEh7AAQh7AAgrAEg");
	this.shape.setTransform(0,0,1.179,1.179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-137.2,274.7,274.5);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ54();
	this.instance.setTransform(0.1,25.7,0.842,0.842,0,0,0,16.5,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[0.2,25.7,0.7,34.8,7.3,41.4,14.4,48.5,24.3,48.5,34.3,48.5,41.4,41.4,48.5,34.2,48.5,24.4,48.5,23.7,48.4,23.1]}},20,cjs.Ease.get(-1)).to({guide:{path:[48.4,22.9,48,13.6,41.3,7.2,34.2,0.1,24.3,0.1,14.3,0.1,7.2,7.2,1.1,13.1,0.3,21.5]}},19,cjs.Ease.get(1)).wait(1).to({guide:{path:[0.3,21.5,1.1,13.1,7.2,7.2,14.3,0.1,24.3,0.1,34.2,0.1,41.3,7.2,48,13.6,48.4,22.9]}},19,cjs.Ease.get(-1)).to({guide:{path:[48.4,23.1,48.5,23.7,48.5,24.4,48.5,34.2,41.4,41.4,34.3,48.5,24.3,48.5,14.4,48.5,7.3,41.4,0.7,34.8,0.2,25.7]}},20,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("AigChQhDhEABhdQgBhdBDhDQBDhCBdAAQBdAABDBCQBEBDAABdQAABehEBDQhDBDhdgBQhdABhDhDg");
	this.shape.setTransform(24.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("ADyAAQAABkhHBHQhHBHhkAAQhjAAhHhHQhChCgFhaQAAgIAAgHQAAgEAAgGQAEhdBDhDQBHhHBjAAQBkAABHBHQBHBHAABjg");
	this.shape_1.setTransform(24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-1,63.4,50.5);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.shadow = new cjs.Shadow("#FF0000",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-27.4,58,58);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.91},4,cjs.Ease.get(-1)).to({scaleX:0.79,scaleY:0.79},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-20.5,125.9,41);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(0,0,1,1,0,0,0,-6.4,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-68.6,136.4,136.4);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323.3,-155.8,646.6,311.6);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 43
	this.instance = new lib.Символ43();
	this.instance.setTransform(0.2,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:7.2,y:71.5},16,cjs.Ease.get(1)).to({rotation:0,y:31.5},9,cjs.Ease.get(-1)).to({y:26.7},2).to({y:31.5},2).wait(13));

	// Символ 42
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(0,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-13.5},9,cjs.Ease.get(-1)).to({y:-7.9},2).to({y:-13.5},2).wait(21).to({y:-57.5},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-83.6,212.1,135.3);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.setTransform(26,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA8BXIARgRIAMAMIDijhIBPBPIjiDgIAIAJIgRARgAD5gzIAYAYIhHBFIAHAIIBHhFIAYAWIAHgFIgYgYIAjgjIgIgHIgiAiIgYgYgAi6BXIARgRIAMAMIDgjhIBPBPIjgDgIAIAJIgRARgAgBgzIAWAYIhFBFIAHAIIBFhFIAYAWIAHgFIgYgYIAjgjIgIgHIgiAiIgYgYgAmyBXIARgRIAMAMIDijhIBPBPIjiDgIAIAJIgRARgAj4gzIAYAYIhHBFIAHAIIBHhFIAYAWIAHgFIgYgYIAjgjIgIgHIgiAiIgYgYgAE+iRIAHgHIAGgHQAQgQAdgHQAegIAQAQQASAPgIAgQgGAfgQAQIgDADIgKAKgABGiRIAHgHIAGgHQAQgQAdgHQAegIAQAQQASAPgIAgQgGAfgQAQIgDADIgKAKgAiwiRIAHgHIAGgHQAQgQAdgHQAegIAQAQQASAPgIAgQgGAfgQAQIgDADIgKAKg");
	this.shape.setTransform(24,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-86.5,125.9,90.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.3},8,cjs.Ease.get(-1)).to({y:11.2},9,cjs.Ease.get(1)).to({y:5.6},9,cjs.Ease.get(-1)).to({y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-74.5,202,149);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ51();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({alpha:1},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ50();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-27.4,58,58);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol();
	this.instance.setTransform(0,0,2.049,2.049);
	this.instance.alpha = 0.539;
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-139,-139,279,279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288.3,-288.2,580,580);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(0,0,1.175,1.175);
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-19,-17,38,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-21.6,52,46);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance.cache(-12,-12,24,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-18.1,40,40);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkoFsQkKkSg6k6QA/jCA7BIQglCiFzF0QAoCziGAAQgRAAgVgDgABwCsQDljeDJkXQBQgugBC1QjPEajYD+g");
	mask.setTransform(-0.1,-1);

	// Слой 2 - копия: 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(-8.6,40.2);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({x:-16.9,y:28},0).wait(1).to({x:-23.7,y:18},0).wait(1).to({x:-29.3,y:9.9},0).wait(1).to({x:-33.8,y:3.3},0).wait(1).to({x:-37.5,y:-2.1},0).wait(1).to({x:-40.6,y:-6.7},0).wait(1).to({x:-43.3,y:-10.6},0).wait(1).to({x:-45.6,y:-14},0).wait(1).to({x:-47.7,y:-17.2},0).wait(1).to({x:-49.7,y:-20},0).wait(1).to({x:-51.5,y:-22.6},0).wait(1).to({x:-53,y:-24.9},0).wait(1).to({x:-54.4,y:-26.9},0).wait(1).to({x:-55.7,y:-28.8},0).wait(1).to({x:-56.8,y:-30.4},0).wait(1).to({x:-57.8,y:-31.9},0).wait(1).to({x:-58.7,y:-33.3},0).wait(1).to({x:-59.6,y:-34.5},0).wait(1).to({x:-60.3,y:-35.5},0).wait(1).to({x:-61,y:-36.5},0).wait(1).to({x:-61.6,y:-37.4},0).wait(1).to({x:-62.1,y:-38.1},0).wait(1).to({x:-62.5,y:-38.8},0).wait(1).to({x:-62.9,y:-39.4},0).wait(1).to({x:-63.3,y:-39.9},0).wait(1).to({x:-63.6,y:-40.4},0).wait(1).to({x:-63.8,y:-40.7},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-64.2,y:-41.2},0).to({_off:true},1).wait(38));

	// Слой 2 - копия: 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(3.4,37);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(1).to({x:13.3,y:25.3},0).wait(1).to({x:21.4,y:15.7},0).wait(1).to({x:28,y:7.9},0).wait(1).to({x:33.4,y:1.5},0).wait(1).to({x:37.8,y:-3.7},0).wait(1).to({x:41.5,y:-8},0).wait(1).to({x:44.7,y:-11.8},0).wait(1).to({x:47.5,y:-15.1},0).wait(1).to({x:50,y:-18.1},0).wait(1).to({x:52.3,y:-20.9},0).wait(1).to({x:54.4,y:-23.3},0).wait(1).to({x:56.3,y:-25.5},0).wait(1).to({x:58,y:-27.5},0).wait(1).to({x:59.5,y:-29.3},0).wait(1).to({x:60.8,y:-30.9},0).wait(1).to({x:62,y:-32.3},0).wait(1).to({x:63.1,y:-33.6},0).wait(1).to({x:64.1,y:-34.7},0).wait(1).to({x:65,y:-35.8},0).wait(1).to({x:65.7,y:-36.7},0).wait(1).to({x:66.4,y:-37.5},0).wait(1).to({x:67.1,y:-38.3},0).wait(1).to({x:67.6,y:-38.9},0).wait(1).to({x:68.1,y:-39.5},0).wait(1).to({x:68.5,y:-40},0).wait(1).to({x:68.9,y:-40.4},0).wait(1).to({x:69.2,y:-40.7},0).wait(1).to({x:69.4,y:-41},0).wait(1).to({x:69.6,y:-41.2},0).to({_off:true},1).wait(38));

	// Слой 2 - копия
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(-8.6,40.2);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-16.9,y:28},0).wait(1).to({x:-23.7,y:18},0).wait(1).to({x:-29.3,y:9.9},0).wait(1).to({x:-33.8,y:3.3},0).wait(1).to({x:-37.5,y:-2.1},0).wait(1).to({x:-40.6,y:-6.7},0).wait(1).to({x:-43.3,y:-10.6},0).wait(1).to({x:-45.6,y:-14},0).wait(1).to({x:-47.7,y:-17.2},0).wait(1).to({x:-49.7,y:-20},0).wait(1).to({x:-51.5,y:-22.6},0).wait(1).to({x:-53,y:-24.9},0).wait(1).to({x:-54.4,y:-26.9},0).wait(1).to({x:-55.7,y:-28.8},0).wait(1).to({x:-56.8,y:-30.4},0).wait(1).to({x:-57.8,y:-31.9},0).wait(1).to({x:-58.7,y:-33.3},0).wait(1).to({x:-59.6,y:-34.5},0).wait(1).to({x:-60.3,y:-35.5},0).wait(1).to({x:-61,y:-36.5},0).wait(1).to({x:-61.6,y:-37.4},0).wait(1).to({x:-62.1,y:-38.1},0).wait(1).to({x:-62.5,y:-38.8},0).wait(1).to({x:-62.9,y:-39.4},0).wait(1).to({x:-63.3,y:-39.9},0).wait(1).to({x:-63.6,y:-40.4},0).wait(1).to({x:-63.8,y:-40.7},0).wait(1).to({x:-64,y:-41},0).wait(1).to({x:-64.2,y:-41.2},0).to({_off:true},1).wait(45));

	// Слой 2
	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(3.4,37);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:13.3,y:25.3},0).wait(1).to({x:21.4,y:15.7},0).wait(1).to({x:28,y:7.9},0).wait(1).to({x:33.4,y:1.5},0).wait(1).to({x:37.8,y:-3.7},0).wait(1).to({x:41.5,y:-8},0).wait(1).to({x:44.7,y:-11.8},0).wait(1).to({x:47.5,y:-15.1},0).wait(1).to({x:50,y:-18.1},0).wait(1).to({x:52.3,y:-20.9},0).wait(1).to({x:54.4,y:-23.3},0).wait(1).to({x:56.3,y:-25.5},0).wait(1).to({x:58,y:-27.5},0).wait(1).to({x:59.5,y:-29.3},0).wait(1).to({x:60.8,y:-30.9},0).wait(1).to({x:62,y:-32.3},0).wait(1).to({x:63.1,y:-33.6},0).wait(1).to({x:64.1,y:-34.7},0).wait(1).to({x:65,y:-35.8},0).wait(1).to({x:65.7,y:-36.7},0).wait(1).to({x:66.4,y:-37.5},0).wait(1).to({x:67.1,y:-38.3},0).wait(1).to({x:67.6,y:-38.9},0).wait(1).to({x:68.1,y:-39.5},0).wait(1).to({x:68.5,y:-40},0).wait(1).to({x:68.9,y:-40.4},0).wait(1).to({x:69.2,y:-40.7},0).wait(1).to({x:69.4,y:-41},0).wait(1).to({x:69.6,y:-41.2},0).to({_off:true},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,18.9,51,16.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,rotation:-3.2,x:0.4},8).wait(26).to({scaleX:1,rotation:0,x:0},6).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-4.5,27,9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.alpha = 0.711;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-8,-4,15,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-4.2,18,12);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ19();
	this.instance.setTransform(30.9,0.7,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},16).to({alpha:1},18).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},16).to({alpha:1},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-6,50.6,17);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(0.1,0,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-8.2,19,16.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ16();
	this.instance.setTransform(31.2,-1.2,0.932,0.218,-15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:32.6,y:1.2},3).to({scaleX:0.93,scaleY:0.22,rotation:-15,x:31.2,y:-1.2},3).to({scaleX:1,scaleY:1,rotation:0,x:32.6,y:1.2},3).to({scaleX:0.93,scaleY:0.22,rotation:-15,x:31.2,y:-1.2},3).to({_off:true},1).wait(52));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(0.2,-2.3,1,0.181,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleY:1,rotation:0,x:0,y:0},3).to({scaleY:0.18,rotation:15,x:0.2,y:-2.3},3).to({scaleY:1,rotation:0,x:0,y:0},3).to({scaleY:0.18,rotation:15,x:0.2,y:-2.3},3).to({_off:true},1).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ21();
	this.instance.setTransform(-5.3,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-8,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(-20.8,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(-20.9,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ25();
	this.instance_4.setTransform(-0.1,-30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-71.5,124.4,143);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},13,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06},15,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},16,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-47,115,94);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(0,0,0.284,0.284);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3.13,scaleY:3.13,alpha:0.559},9).to({scaleX:4.52,scaleY:4.52,alpha:0},25).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-23.4,46.9,46.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// svg2
	this.instance = new lib.Символ31();
	this.instance.setTransform(2.4,-3.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({alpha:1},2).to({alpha:0},2).wait(1).to({alpha:1},2).to({alpha:0},13).to({_off:true},1).wait(55));

	// Слой 3
	this.instance_1 = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(0,0,1,1,180);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},41).to({alpha:0},38).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmBGIAAgcIhFAAIAAAcIgWAAIgCgvIAJAAIAFgFIAFgIIAEgMIACgVIADguIBLAAIAABcIANAAIgCAvgAiXAFIgDAKIgFAIIArAAIAAhKIgdAAgAICAqIAAhvIAYAAIAAApIATAAQAKAAAIACQAIADAGAEQAFAFADAHQADAGAAAGQAAAJgDAGQgDAHgFAFQgGAFgIADQgIACgKAAgAIaAXIATAAIAIgBIAHgEIADgGIABgHIgBgFIgDgFIgHgDQgDgCgFAAIgTAAgAFpAqIAAhvIAYAAIAABcIAgAAIAAhcIAXAAIAABcIAgAAIAAhcIAXAAIAABvgAE+AqIAAhvIAXAAIAABvgADfAqIAAhvIAYAAIAAApIASAAQAKAAAIACQAIADAGAEQAFAFADAHQADAGABAGQgBAJgDAGQgDAHgFAFQgGAFgIADQgIACgKAAgAD3AXIASAAIAJgBIAGgEQADgCABgEQABgDAAgEQAAgDgBgCQgBgCgDgDIgGgDQgEgCgFAAIgSAAgACzAqIAChTIgfBTIgQAAIgehSIACBSIgYAAIAAhvIAgAAIAcBQIAdhQIAgAAIAABvgAAAAqIAAhJIgsBJIgXAAIAAhvIAXAAIAABJIAshJIAXAAIAABvgAkVAqIAAhvIBNAAIAAASIg1AAIAAAcIAtAAIAAASIgtAAIAAAcIA1AAIAAATgAl7AqIAAhvIAoAAQAKAAAIABQAIACAGAEQAFAEADAGQADAGgBAIIAAAHIgDAHIgGAGIgHAEQAGABADADIAGAFIADAGIABAIQAAAQgLAJQgKAIgUAAgAljAXIAUAAIAIgBQADgBACgCIAEgEIABgGIgBgHIgDgDQgCgCgDgBIgIgBIgVAAgAljgWIASAAQAIAAAFgEQAEgDAAgHQAAgIgFgDQgEgEgKAAIgQAAgAmeAqIgIgXIgoAAIgIAXIgaAAIArhvIAVAAIArBvgAmsAAIgOgpIgPApIAdAAgAoSAqIAAguIguAAIAAAuIgXAAIAAhvIAXAAIAAAuIAuAAIAAguIAYAAIAABvg");
	this.shape.setTransform(118.6,38.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(28.6,38.2,0.753,0.753,0,0,0,24.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19.5,178.6,37.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-21.6,52,46);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.setTransform(41.3,-9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.hand();
	this.instance_1.setTransform(-45,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-37,114.2,74);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand.png
	this.instance = new lib.Символ23();
	this.instance.setTransform(15.2,-11.3,1,1,0,0,0,15.2,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:33.5,rotation:6.3,x:1.9,y:-5.5},11,cjs.Ease.get(-1)).to({rotation:15,x:-15.9,y:2.3},12,cjs.Ease.get(1)).to({regY:33.6,rotation:3.5,x:12.3,y:-4.9},13,cjs.Ease.get(-1)).to({regY:33.5,rotation:-6.2,x:37.2,y:-11.3},11,cjs.Ease.get(1)).to({rotation:-3,x:26.3},11,cjs.Ease.get(-1)).to({regY:33.6,rotation:0,x:15.2},10,cjs.Ease.get(1)).wait(1));

	// arm.png
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(26,73.5,1,1,0,0,0,0,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-9.8,x:29.1,y:72.1},11,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-23,x:33.2,y:70.3},12,cjs.Ease.get(1)).to({rotation:-2.8,x:27.1,y:72},13,cjs.Ease.get(-1)).to({regX:-0.1,rotation:15,x:21.6,y:73.4},11,cjs.Ease.get(1)).to({rotation:7.3,x:23.8,y:73.5},11,cjs.Ease.get(-1)).to({regX:0,rotation:0,x:26},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-81.9,114.2,163.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.3,x:3.2},11,cjs.Ease.get(-1)).to({rotation:5,x:6.4},11,cjs.Ease.get(1)).wait(16).to({rotation:-3.3,x:-0.7,y:0.5},10,cjs.Ease.get(-1)).to({rotation:-10.2,x:-6.4,y:0.8},9,cjs.Ease.get(1)).wait(15).to({rotation:-5.5,x:-3.5,y:0.5},9,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},10,cjs.Ease.get(1)).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-71.5,124.4,143);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.setTransform(-50.3,-97.4);

	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(71.8,-49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(101.5,-187);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(-284.5,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.5,-258.5,569,389.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(0,64.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:71.4},21,cjs.Ease.get(-1)).to({y:80.1},22,cjs.Ease.get(1)).to({y:72.1},23,cjs.Ease.get(-1)).to({y:64.1},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.5,-194.5,569,389.1);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15));

	// Слой 9
	this.instance = new lib.Символ55();
	this.instance.setTransform(-238.8,54.8,1,1,0,0,0,23.7,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({_off:true},1).wait(20).to({_off:false},0).to({alpha:1},4).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(-133.9,-53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},6).to({_off:true},1).wait(16).to({_off:false},0).to({alpha:1},6).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(-348.6,79.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({regX:26,regY:-41.1,x:-273.3,y:38.7},0).wait(1).to({x:-242.6},0).wait(1).to({x:-223},0).wait(1).to({x:-207.7},0).wait(1).to({x:-196},0).wait(1).to({x:-187.7},0).wait(1).to({x:-182.2},0).wait(1).to({x:-178.6},0).wait(1).to({regX:0,regY:0,x:-202.2,y:79.8},0).to({x:-218.2},3,cjs.Ease.get(-1)).wait(1).to({regX:26,regY:-41.1,x:-194.8,y:38.7},0).wait(1).to({x:-198.2},0).wait(1).to({x:-202.8},0).wait(1).to({x:-209.1},0).wait(1).to({x:-218},0).wait(1).to({x:-230},0).wait(1).to({x:-244},0).wait(1).to({x:-261.4},0).wait(1).to({x:-288.3},0).wait(1).to({regX:0,regY:0,x:-355,y:79.8},0).to({_off:true},1).wait(4));

	// Слой 3
	this.instance_3 = new lib.Символ37();
	this.instance_3.setTransform(-18,-52.8,1.965,1.965);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({scaleX:1.56,scaleY:1.56,alpha:0.336},0).wait(1).to({scaleX:1.34,scaleY:1.34,alpha:0.522},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.637},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.73},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.81},0).wait(1).to({scaleX:0.92,scaleY:0.92,alpha:0.868},0).wait(1).to({scaleX:0.87,scaleY:0.87,alpha:0.908},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.937},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.96},0).wait(1).to({scaleX:0.78,scaleY:0.78,alpha:0.981},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:1},0).to({scaleX:0.86,scaleY:0.86},3,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Слой 1
	this.instance_4 = new lib.Символ36();
	this.instance_4.setTransform(-18,-52.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({scaleX:2.19,scaleY:2.19,alpha:0.336},0).wait(1).to({scaleX:2.84,scaleY:2.84,alpha:0.522},0).wait(1).to({scaleX:3.25,scaleY:3.25,alpha:0.637},0).wait(1).to({scaleX:3.58,scaleY:3.58,alpha:0.73},0).wait(1).to({scaleX:3.86,scaleY:3.86,alpha:0.81},0).wait(1).to({scaleX:4.07,scaleY:4.07,alpha:0.868},0).wait(1).to({scaleX:4.21,scaleY:4.21,alpha:0.908},0).wait(1).to({scaleX:4.31,scaleY:4.31,alpha:0.937},0).wait(1).to({scaleX:4.39,scaleY:4.39,alpha:0.96},0).wait(1).to({scaleX:4.47,scaleY:4.47,alpha:0.981},0).wait(1).to({scaleX:4.53,scaleY:4.53,alpha:1},0).to({scaleX:3.92,scaleY:3.92},3,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Слой 5
	this.instance_5 = new lib.Символ38();
	this.instance_5.setTransform(260,202.5,1,1,15);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(1).to({regY:5.6,rotation:8.7,x:259.2,y:148},0).wait(1).to({rotation:5.3,x:259.5,y:114.9},0).wait(1).to({rotation:3.3,x:259.7,y:96},0).wait(1).to({rotation:1.9,x:259.8,y:82.2},0).wait(1).to({rotation:0.9,x:259.9,y:73.1},0).wait(1).to({rotation:0.4,x:260,y:68},0).wait(1).to({rotation:0.1,y:65.5},0).wait(1).to({rotation:0,y:64.4},0).wait(1).to({regY:0,y:58.5},0).to({y:74.5},3,cjs.Ease.get(-1)).wait(1).to({regY:5.6,rotation:-0.2,x:260.4,y:81.8},0).wait(1).to({rotation:-0.4,x:261,y:84.1},0).wait(1).to({rotation:-0.7,x:261.8,y:87.2},0).wait(1).to({rotation:-1.2,x:262.8,y:91.5},0).wait(1).to({rotation:-1.8,x:264.3,y:97.3},0).wait(1).to({rotation:-2.6,x:266.4,y:105.4},0).wait(1).to({rotation:-3.8,x:269.3,y:117.2},0).wait(1).to({rotation:-5.7,x:273.9,y:135.4},0).wait(1).to({rotation:-9.2,x:282.4,y:169.1},0).wait(1).to({regY:0,rotation:-15,x:295.2,y:220.1},0).to({_off:true},1).wait(4));

	// Слой 1
	this.instance_6 = new lib.Символ33();
	this.instance_6.setTransform(99.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:3.5,scaleX:1.03,scaleY:1.03,x:86.3,y:9.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:75.5,y:15.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:67.7,y:19},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:62.4,y:21.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:58.3,y:23.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:54.4,y:25.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:51.1,y:27.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:48.4,y:28.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:46.2,y:29.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:44.5,y:30.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:43.1,y:31.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:42,y:31.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:41.1,y:32},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:40.3,y:32.4},0).wait(1).to({regY:0,scaleX:1.14,scaleY:1.14,x:39.6,y:28.8},0).wait(1).to({regY:3.5,scaleX:1.1,scaleY:1.1,x:53.4,y:26},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:64.7,y:20.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:72.4,y:16.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:77.6,y:14.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:82,y:12},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:85.9,y:10},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:89.1,y:8.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:91.7,y:7.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:93.8,y:6.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:95.3,y:5.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:96.6,y:4.8},0).wait(1).to({scaleX:1,scaleY:1,x:97.6,y:4.3},0).wait(1).to({scaleX:1,scaleY:1,x:98.5,y:3.9},0).wait(1).to({regY:0,scaleX:1,scaleY:1,x:99.2,y:0},0).wait(1));

	// Слой 10
	this.instance_7 = new lib.Символ52();
	this.instance_7.setTransform(36.5,-37);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},15).to({alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.5,-194.5,671.2,389.1);


// stage content:



(lib._4_demon_girl_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.pricel.visible = false;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.pricel.visible = true;
		    
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(16);
			_this.pricel.visible = false;
		    
		}
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.pricel = new lib.Символ47();
	this.pricel.setTransform(-119.7,112.2);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 3
	this.instance = new lib.Символ45();
	this.instance.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.main = new lib.Символ34();
	this.main.setTransform(284.5,189.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.1,147.5,856.1,389.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
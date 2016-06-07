(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1200,
	height: 120,
	fps: 24,
	color: "#0000FF",
	manifest: [
		{src:"images/element_03.png?1465315260628", id:"element_03"},
		{src:"images/element_06.png?1465315260628", id:"element_06"},
		{src:"images/element_08.png?1465315260628", id:"element_08"},
		{src:"images/element_14.png?1465315260628", id:"element_14"},
		{src:"images/euro.png?1465315260628", id:"euro"},
		{src:"images/fon.jpg?1465315260628", id:"fon"},
		{src:"images/futbich.png?1465315260628", id:"futbich"},
		{src:"images/gradient.png?1465315260628", id:"gradient"},
		{src:"images/kursor.png?1465315260628", id:"kursor"},
		{src:"images/leon_03.png?1465315260628", id:"leon_03"},
		{src:"images/leon_07.png?1465315260628", id:"leon_07"},
		{src:"images/logo2.png?1465315260628", id:"logo2"},
		{src:"images/phone.png?1465315260628", id:"phone"},
		{src:"images/Pls.png?1465315260628", id:"Pls"}
	]
};



// symbols:



(lib.element_03 = function() {
	this.initialize(img.element_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,80);


(lib.element_06 = function() {
	this.initialize(img.element_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.element_08 = function() {
	this.initialize(img.element_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,80);


(lib.element_14 = function() {
	this.initialize(img.element_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,93);


(lib.euro = function() {
	this.initialize(img.euro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,122);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1530,173);


(lib.futbich = function() {
	this.initialize(img.futbich);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,299);


(lib.gradient = function() {
	this.initialize(img.gradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,435,325);


(lib.kursor = function() {
	this.initialize(img.kursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,95);


(lib.leon_03 = function() {
	this.initialize(img.leon_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,76);


(lib.leon_07 = function() {
	this.initialize(img.leon_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,67);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,70);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,199);


(lib.Pls = function() {
	this.initialize(img.Pls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,199);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(1,0,1,1,0,0,180);

	this.instance_1 = new lib.fon();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1529,0,3059,173);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.kursor();
	this.instance.setTransform(0,0,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.9,62.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.futbich();
	this.instance.setTransform(4.5,5.5,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.5,5.5,188.7,225.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leon_03();
	this.instance.setTransform(0,0,0.877,0.877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.2,66.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leon_07();
	this.instance.setTransform(0,0,0.877,0.877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.7,58.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)","#000000"],[0,0.498,1,1],-18.9,0,19,0).s().p("Ai8H3IAAvtIF5AAIAAPtg");
	this.shape.setTransform(19,50.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.9,100.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_06();
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,62.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_08();
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,62.2);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_03();
	this.instance.setTransform(0,0,0.778,0.778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.2,62.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(88.5,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,46.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5F0606","#FF0000"],[0,1],-81.9,0,81.9,0).s().p("AsyCnIAAlNIZlAAIAAFNg");
	this.shape.setTransform(81.9,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163.9,33.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AseDvIAAneIY9AAIAAHeg");
	this.shape.setTransform(79.9,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.9,48);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhfC1QgIgCgEgEQgFgEgDgGQgDgGABgIQAAgIABgJIAPhCQACgJAEgHQAEgJAIgFQAHgGAKgEQAKgCAMAAQALgBAIADQAIACAFAFQAEAEADAGQADAGAAAHQAAAHgEAOIgkAAIADgQQAAgFgEgDQgCgCgFAAQgEAAgFADQgEADgBAFIgRBRQAAAFACADQADADAEgBQAGABAEgEQAFgEACgIIAEgUIAkAAIgCAOQgDANgFAJQgFAJgHAGQgHAGgKADQgLADgMAAQgLAAgHgCgAG5C0QgFgBgCgCIAGgZIAIABQAIAAACgGIgJh2IAmAAIAAAzQgBAZgDAVIAAAAIAKggIAchBIAlAAIg4B0IgKASQgFAHgGAEQgFAEgIACQgGABgKAAgAF2C0IgGg1IgNARIgIAkIgiAAIAfiXIAjAAIgMA8IAlg8IAoAAIgwBDIAQBUgADFC0IAgiXIA6AAQAGAAAFABQAGACAEAEQAEADACAFQADAGAAAGQAAAJgDAIQgCAGgFAGQgDAGgGADQgFADgEACQAHADAFAGQAEAFAAAKQgBAHgBAIQgDALgFAIIgIAIQgFAFgFADQgGADgHACQgIACgIAAgADuCZIAIAAQAFAAAFgCQAEgCADgEQADgEABgFQABgFAAgFQAAgGgCgDQgEgDgHAAIgJAAgAD7BXIALAAQAGAAADgDQADgBADgEQAEgGAAgIQAAgEgDgDQgDgCgGAAIgKAAgACWC0IABgeIgcAAIgLAeIgkAAIBBiXIArAAIACCXgACFB6IATAAIAFhCIgBAAgAALC0IAah7IgdAAIAHgcIBZAAIgHAcIgaAAIgaB7gAl0ABIAGgdIg1AAIgGAdIgjAAIAMg6IAGAAIAJgNQAEgHAEgIQAFgMAIgnIAJgqIBhAAIgbB5IAJAAIgOA6gAl7h6QgGAbgEAKQgJAUgGAIIAjAAIAUhdIgYAAgAoXgaQgIgCgFgEQgEgEgDgHQgCgFgBgJQAAgIACgIIAPhDQACgIAEgIQAEgIAIgFQAHgGAKgEQAKgDAMAAQALAAAIADQAIACAFAEQAFAEACAHQACAGABAGQAAAIgEANIgkAAIADgQQAAgEgEgDQgCgCgEAAQgGAAgDADQgFACgBAGIgSBRQAAAFADADQADACAEAAQAHAAADgDQAGgFABgIIAEgUIAkAAIgDAPQgCAMgFAKQgFAJgHAGQgIAGgKADQgKACgMAAQgKABgIgCgAjfgfIAGgZQACABAGAAQAEAAACgCQADgBACgGQAGgVAFgWIAPhHIBfAAIgfCWIglAAIAah6IgYAAIgLA0QgFAVgEAOQgGAOgFAIQgHAIgHADQgHAEgKAAQgIgBgKgEgAB1gcIAgiWIAlAAIgNA5IAQAAQAHAAAHACQAGABAFAEQAGAEACAFQADAHAAAJQgCAXgHAOIgIAJQgEAFgFADQgGADgHACQgIACgIAAgACfg3IAHAAQAGAAAFgDQAFgCACgEQAEgHAAgJQAAgIgEgCQgEgEgGAAIgHAAgAArgcIAah6IgdAAIAGgcIBZAAIgGAcIgbAAIgZB6gAgYgcIABgeIgcAAIgLAeIgkAAIBBiWIApAAIACCWgAgphWIAUAAIAEhBIAAAAgAk9gcIAgiWIBVAAIgHAcIgwAAIgGAdIArAAIgGAdIgrAAIgIAjIAxAAIgHAdg");
	this.shape.setTransform(55.9,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.8,36.7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AByBXQgIgDgFgEQgGgFgDgHQgDgHAAgJQAAgHACgKIARhLQACgKAFgJQAFgJAJgHQAIgGALgEQALgEAPAAQAMAAAJADQAJADAFAFQAGAEADAIQACAGAAAIQAAAIgBAHIgQBIQgDANgGAKQgFAKgIAIQgIAGgMAEQgMADgNAAQgMAAgKgCgACcg2QgFAFgCAGIgSBVIgBAFQABAFADADQADADAFAAQAGAAAFgEQAGgEABgIIAThVIAAgEQAAgFgEgDQgDgCgFAAQgGAAgFADgADcBWIAJgoIAmAAIgJAogAgwBWIAkirIA7AAQAIAAAHABQAHADAGADQAGAEADAHQAEAHAAALQAAAKgDAKQgDANgGAKQgEAGgFACQgFAFgGAEQgGAEgIABQgIADgKAAIgTAAIgLBDgAAMgLIAIAAQAGAAAFgCQAFgCADgFQADgEACgGQABgEABgGQAAgHgGgEQgDgDgJAAIgHAAgAi0BWIAlirIBCAAQAGAAAGACQAHACAFAEQAFADACAHQADAGAAAIQAAAKgDAIQgDAIgFAHQgEAGgHAEQgFADgGACQAKAEAEAEQAEAHAAALQAAAIgBAJQgDAMgHAJQgEAGgEAEQgFAFgGAEQgHAEgIACQgKACgJAAgAiFA3IAJAAQAGgBAFgCQAFgCADgEQAEgEABgFQACgGAAgHQAAgHgEgDQgEgEgIABIgKAAgAh2gTIANAAQAFABAFgDQADgCADgEQAFgHAAgJQAAgFgDgDQgEgDgHAAIgMAAgAkmBWIAlirIBgAAIgHAhIg3AAIgHAhIAxAAIgHAgIgxAAIgJAoIA3AAIgGAhgADyAeIAHhMIAIgpIAmAAIgIApIgZBMg");
	this.shape.setTransform(132.9,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(90.8,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.7,45.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJABpIAIgjIg8AAIgIAjIgoAAIAPhEIAFAAIALgPQAFgIAEgKQAFgLALgsIAKgyIBuAAIgeCKIAJAAIgOBEgAI5gjQgHAegFAKQgKAXgHAJIApAAIAWhpIgbAAgAGGBHQgIgCgGgFQgGgFgCgHQgDgHAAgJQAAgHACgJIAQhMQADgKAFgJQAFgJAIgGQAIgHAMgEQALgDAPAAQAMAAAJACQAJADAFAFQAGAFACAHQADAGAAAIQAAAIgCAIIgPBIQgDANgGAKQgFAKgIAHQgJAHgLADQgMAEgOAAQgMAAgJgDgAGwhFQgFAEgCAGIgSBWIgBAEQAAAFAEADQADADAFAAQAGAAAFgEQAFgEACgHIAShWIABgDQAAgFgEgDQgDgDgFAAQgGAAgFAEgApUBHQgJgCgFgFQgGgFgDgHQgDgHAAgJQAAgHACgJIARhMQACgKAFgJQAFgJAJgGQAIgHALgEQAMgDAOAAQAMAAAJACQAJADAGAFQAFAFADAHQADAGAAAIQAAAIgCAIIgQBIQgDANgFAKQgGAKgIAHQgIAHgMADQgLAEgOAAQgMAAgJgDgAoqhFQgGAEgBAGIgTBWIAAAEQAAAFADADQADADAFAAQAGAAAFgEQAGgEABgHIAThWIAAgDQAAgFgEgDQgDgDgFAAQgGAAgEAEgArYBIQgIgCgGgFQgGgFgDgHQgDgGAAgKQAAgJACgLIARhJQACgKAFgJQAFgJAIgGQAJgHALgEQAMgDAOAAQAMAAAJACQAJADAGAFQAFAFADAHQADAHAAAIQAAAIgEAPIgpAAIADgSQAAgFgEgDQgDgDgFAAQgGAAgEADQgGAEgBAGIgSBUIgBAHQAAAGADADQADACAFAAQAHAAAFgEQAFgEACgKIAFgWIApAAIgDAQQgDAOgGALQgGALgIAGQgIAHgMAEQgLADgOAAQgMAAgJgCgALKBGIABgjIggAAIgMAjIgqAAIBKirIAyAAIACCrgAK2AEIAWAAIAFhKgAD0BGIAlirIBgAAIgHAhIg3AAIgdCKgABEBGIAkirIBhAAIgHAhIg3AAIgIAiIAyAAIgHAhIgxAAIgJAmIA3AAIgHAhgAAEBGIAJgoQAEgTARgsIAAAAIg4BnIgoAAIAkirIAmAAIgJArIgIAhIgLAfIABAAIA4hrIAnAAIgkCrgAiTBGIAeiKIghAAIAHghIBlAAIgHAhIgeAAIgeCKgAjtBGIAlirIApAAIgkCrgAlsBGIAlirIApAAIgOBDIATAAQAIAAAHACQAIABAFAEQAGAFADAGQAEAIAAAIQgCAbgJAPIgIALQgFAFgGADQgHAEgIADQgJACgKAAgAk8AnIAHAAQAIAAAGgDQAFgDADgFQAEgHAAgLQAAgIgEgCQgFgDgHAAIgIAAgAnwBGIAkirIBeAAIgHAfIg0AAIgIAkIATAAQAJAAAGACQAIABAFAEQAHAFADAGQADAIAAAIQgCAbgJAPIgIALQgFAFgGADQgGAEgIADQgJACgKAAgAnAAnIAHAAQAIAAAFgDQAFgDADgFQAFgHAAgLQAAgIgFgCQgEgDgHAAIgIAAg");
	this.shape.setTransform(75.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.1,21.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("ALoLQQgcgIgXgVQgUgSgRgdQgLgSgRgiQgwAOgzgNQgzgOgiglQgLARgUAHQgUAHgTgGQgTgHgMgRQgMgRABgUQABgLAGgRIAJgbQALgrgXgmQgiAEgoAZIhDAtQg5AlhSAdQgyARhhAaQh/AihAAOQhqAXhXAIIh/AIQhLAEgyAKQgrAJgNACQggADgXgIQglgNgVgrQgSgjgEgwQgGhJAngYQgshmAig7IAQgWQALgPAEgIIANgcQAHgRAKgJQAggfBMAjQgNgZARgbQARgcAdgGQAxgKA4AsQgWg5gDgmQgFg1AbgiQgiAIgfgVQgfgWgEgiQgFgiAZgdQAZgcAigBQgdgHgNgfQgNgdAKgdQAKgbAagTQAYgRAfgGQAagFAiACIA7AHQgLgIgEgQQgDgOAEgQIAIgdQAFgSAAgMQAAgLgGgUQgHgVAAgKQgDgnAkgbQAigbApACQAkACAoAUQAZANArAeQAFgqAZgkQAZgkAlgUIAEAAQAYAHARAXQAQAVAEAbQADAXgEAdQgDARgIAjQALAPAWAPIAkAaQAUAQAKATQAMAXgGAUQgJAdglAHQggAGgfgQIg4gjQgigVgZgEQAeB1gLB8QgEAkAAANQAAAbAKATIAPAZQAKAPADALQAFAOgEAUQgCAMgGAWQgGAagCAnIgDBCQgFBDgYBAQgYBAgpA2QgeAogdANQgUAJgUgCQgWgCgOgOQAHAZgJAbQDKgiBoghQCkg0BqhaQgSgUg5gNQg4gNgSgWQgSgWADghQADgeATgbQANgTAbgZQAkghAHgJQgTgSAGghQAFgdAWgYQAJgLAjgdQAcgXAMgTQgXAWgkgKQgjgKgNgeQgNgdAKgiQAJggAZgYQAmgkBOgTQgeAEgbgZQgYgWgJghQgGgYAEgVQAEgZAQgNQALgJAUgGIAigLQAOgGAxgsQAlggAeADIAYAGQAOAEAKgBQAKgCAOgLIAWgRQAfgSAiAZQAiAZgKAjQAjAOALApQALApgXAdQAXgNALgFQAVgKARgCQAUgCATAHQAUAIAIARQAQAggiA4QhlCqiGCXQAjAIAVAbQAYAcgOAcQgLAYg1ATQg1ASgLAZQARAgA5ABIArABQAYABAQAJQAUAKAHAXQAHAXgPAOQAgAEAWAdQAVAegHAgQAjADATAFQAeAGAUAOQAXARAIAcQAIAdgQAVQAHAWApAbQAnAaAEAXQADAPgJATQgDAHgQAZQgZAqgOATQgZAhgcAKQgOAEgPAAQgOAAgPgEgAo6HiQgZAJgXABIAAAWIBaABIgegfQgCgDgEgBIgCgBQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABg");
	this.shape.setTransform(92,72.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.1,145);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(146,146,146,0)","#FFFFFF","rgba(0,0,0,0)"],[0,0.443,1],-11.6,0,11.7,0).s().p("AhzEuIAApcIDnAAIAAJcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-30.3,23.3,60.6);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(146,146,146,0)","#FFFFFF","rgba(0,0,0,0)"],[0,0.443,1],-11.6,0,11.7,0).s().p("AhzEuIAApcIDnAAIAAJcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-30.3,23.3,60.6);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.element_14();
	this.instance.setTransform(-44,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-46.5,88,93);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.setTransform(11.7,30.3);

	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.setTransform(143.5,30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:143.5},14).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,60.6);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leon_07.png
	this.instance = new lib.Символ29();
	this.instance.setTransform(140.3,35.5,1,1,0,0,0,125.9,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// leon_03.png
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(161.1,38.7,1,1,0,0,0,36.2,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:90,y:38.8},29).to({rotation:180},30).to({rotation:270,x:161},30).to({rotation:360,x:161.1,y:38.7},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,5.5,251.7,66.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(64.9,50.3,1,1,0,0,0,18.9,50.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-106.4},15,cjs.Ease.get(1)).to({_off:true},1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46,0,37.9,100.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkgE/IDwrHIFRgPIkMMvg");
	mask.setTransform(41.7,69.3);

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(73.7,-13.8,1.07,0.819,0,-89.7,-68.9,64.5,50.4);
	this.instance.alpha = 0.41;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.phone();
	this.instance_1.setTransform(0,0,0.659,0.659);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87,131.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(44,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:105},24).to({rotation:195},25).to({rotation:285},25).to({rotation:360},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,93);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(74.9,25.1,1,1,0,0,0,55.9,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCE06","#FFFF99","#FFCC00"],[0,0.486,1],-80.4,0,80.5,0).s().p("AsjD3IAAntIZHAAIAAHtg");
	this.shape.setTransform(80.5,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.9,49.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(22.4,31.4,1,1,0,0,0,22.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:31.3,scaleX:1.13,scaleY:1.13,x:20.4,y:27.1},14).to({regY:31.4,scaleX:1,scaleY:1,x:22.4,y:31.4},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.9,62.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(92,72.5,1,1,0,0,0,92,72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.1,145);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(102.4,120,1,1,0,0,0,100.4,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:110.1},39,cjs.Ease.get(-1)).to({y:120},40,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Pls();
	this.instance_1.setTransform(-27,-25.5,1.095,1.095);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Слой 2
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(101.8,66,1,1,0,0,0,92,72.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,97);
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(99, 99, 3)];
	this.instance_2.cache(-2,-2,188,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.27,scaleY:1.27,x:106.1,y:60.1},39).to({scaleX:1,scaleY:1,x:101.8,y:66},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-462.2,-478.5,1135,1095);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.euro();
	this.instance.setTransform(54.5,213.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.logo2();
	this.instance_1.setTransform(10.5,239.5,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(137.1,214.5,1,1,0,0,0,143.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,182,251.7,153.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(44,46.5,1,1,0,0,0,44,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:28.1},4,cjs.Ease.get(1)).to({y:19.9},5).to({y:18.5},3).to({y:29},4,cjs.Ease.get(-1)).to({scaleY:0.93,y:50.4},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,93);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 13
	this.instance = new lib.Символ13();
	this.instance.setTransform(80.5,24.8,1,1,0,0,0,80.5,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(82.7,27.5,1,1,0,0,0,79.9,24);
	this.instance_1.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_1.cache(-2,-2,164,52);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsjD3IAAntIZHAAIAAHtg");
	this.shape.setTransform(80.5,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168.8,57.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ21();
	this.instance.setTransform(365,111.9,1,1,0,0,0,43.5,65.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49));

	// Слой 5
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(285,125.5,1,1,0,0,0,44,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49));

	// Слой 4
	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(210.2,141.6,1,1,0,0,0,27.6,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:131.9},33).to({y:141.6},15).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(153.1,146.3,1,1,0,0,0,29.6,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:137.3},23).to({y:146.3},25).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ24();
	this.instance_4.setTransform(96.2,149.4,1,1,0,0,0,27.2,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:144.9},9).to({y:149.4},39).wait(1));

	// Слой 1
	this.instance_5 = new lib.gradient();
	this.instance_5.setTransform(-227.8,104.2,1.619,1,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.8,6.5,742.5,419.6);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(352.6,76.7,0.92,0.92,-5.5,0,0,88.5,23.2);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(471.2,192.9,1,1,0,0,0,243.4,199.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,742.5,419.6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.ruka = new lib.Символ12();
	this.ruka.setTransform(128.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.ruka).to({_off:true},1).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(81.3,25.8,1,1,0,0,0,81.3,25.8);

	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(81.3,25.6,1,1,0,0,0,80.5,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.1,76.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsjD4IAAnvIZHAAIAAHvg");
	mask.setTransform(80.5,24.9);

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.setTransform(-24.6,24,1.597,1,0,0,0,11.7,30.3);
	this.instance.alpha = 0.48;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(81.3,25.8,1,1,0,0,0,81.3,25.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.1,76.9);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(81.3,25.8,1,1,0,0,0,81.3,25.8);

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(81.3,25.8,1,1,0,0,0,81.3,25.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(1));

	// Слой 5
	this.instance_2 = new lib.Pls();
	this.instance_2.setTransform(238.5,142,0.948,0.948,179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-46.6,281.8,190.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.button = new lib.Символ10();
	this.button.setTransform(518.8,79.9,1,1,0,0,0,80.5,24.8);

	this.instance = new lib.Символ8();
	this.instance.setTransform(293.3,54.5,0.796,0.796,-8.6,0,0,75.5,10.6);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(293.3,53.3,0.796,0.796,-8.2,0,0,81.9,16.7);

	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(302.1,90.5,0.796,0.796,-8.5,0,0,90.9,22.7);

	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(127.5,145.5,1,1,0,0,0,100.4,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.button}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.1,-217,875.9,621);


// stage content:
(lib.ВОССТАНОВИТЬ_leon_rezinka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
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
		    
		    _this.logo.x = 0;
		    _this.logo.y = 60;
		    
		    
		    _this.seredina.x = windowSize.width/2;
		    _this.seredina.y = 60;
			
			_this.fon.x = windowSize.width/2;
		    _this.fon.y = 60;
		    
		    _this.phone.x = windowSize.width;
		    _this.phone.y = 60;
			
			_this.logo.scaleX = 1;
		    _this.logo.scaleY = 1;
				
			_this.phone.scaleX = 1;
		    _this.phone.scaleY = 1;
			
			_this.seredina.scaleX = 1;
		    _this.seredina.scaleY = 1;
			
			if(stage.canvas.width < 1200){
			_this.seredina.x = windowSize.width * 0.45;	
			
			}
			
			if(stage.canvas.width < 1133){
			_this.logo.scaleX = 0.7;
		    _this.logo.scaleY = 0.7;
				
			_this.phone.scaleX = 0.75;
		    _this.phone.scaleY = 0.75;
			
			}
			
			if(stage.canvas.width < 977){
				
			_this.seredina.scaleX = 0.8;
		    _this.seredina.scaleY = 0.8;
				
			_this.logo.scaleX = 0.5;
		    _this.logo.scaleY = 0.5;
			
			_this.seredina.x = windowSize.width * 0.4;
			
			}
			
			if(stage.canvas.width < 799){
				
			_this.seredina.scaleX = 0.75;
		    _this.seredina.scaleY = 0.75;
				
			_this.logo.scaleX = 0.3;
		    _this.logo.scaleY = 0.3;
			
			_this.seredina.x = windowSize.width * 0.4;
			
			}
		    
		    
		    
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

	// button
	this.seredina = new lib.Символ37();
	this.seredina.setTransform(539.3,54.8,1,1,0,0,0,338.4,86.4);

	this.phone = new lib.Символ36();
	this.phone.setTransform(1199,56.1,1,1,0,0,0,629.3,106.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.phone},{t:this.seredina}]}).wait(1));

	// logo
	this.logo = new lib.Символ1();
	this.logo.setTransform(0,62,1,1,0,0,0,-2.5,239);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// fon
	this.fon = new lib.Символ38();
	this.fon.setTransform(-154.9,56,1,1,0,0,0,0,86.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1083.9,-188.6,3059,620);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
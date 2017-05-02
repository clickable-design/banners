(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/backs.jpg?1469538564624", id:"backs"},
		{src:"images/back.jpg?1469538564624", id:"back"},
		{src:"images/fire.png?1469538564624", id:"fire"},
		{src:"images/gilz.png?1469538564624", id:"gilz"},
		{src:"images/patron.png?1469538564624", id:"patron"},
		{src:"images/snip.png?1469538564624", id:"snip"},
		{src:"images/strel.png?1469538564624", id:"strel"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1469538564624", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.backs = function() {
	this.initialize(img.backs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,263);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,347);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,182);


(lib.gilz = function() {
	this.initialize(img.gilz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,26);


(lib.patron = function() {
	this.initialize(img.patron);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,79);


(lib.snip = function() {
	this.initialize(img.snip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,551,251);


(lib.strel = function() {
	this.initialize(img.strel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,235);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.patron();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,79);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQCCIgEgvIgWAAIgEAvIhGAAIAikCIBgAAIAnECgAAKAkQgFgpgFhCQgIBJgCAiIAUAAIAAAAg");
	this.shape.setTransform(109.7,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASCCQgLgLAAgcIAAgyQAAgJgFgGQgEgGgKgBIAABvIhEAAIAAkCIBEAAIAABuQARgBABgVIABgyQABgdAKgJIA/AAQgKAJABAdIAAAtQAAApguAEQAuAFAAApIAAAqQgBAdAKANg");
	this.shape_1.setTransform(93.2,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUCCIAAjPIgUAAIAACSQABAcgGANQgIANgOADQgQADghABIgLAAIAAgtQAMgBAFgDQAFgCAAgSIAAi9ICZAAIAAECg");
	this.shape_2.setTransform(73.6,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5CCIAAkCIBvAAIAAAzIgtAAIAAAyIAqAAIAAAvIgqAAIAAA6IAxAAIAAA0g");
	this.shape_3.setTransform(58.1,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHCCIAAkCIBEAAQAZgBAPAFQAPAEAIAJQAHAHADANQACALAAAZIAAAWQAAAZgFAJQgFALgOAHQgNAGgXAAIgQAAIAABpgAgEgSIAEABQAJgBADgEQAEgEAAgPIAAgWQAAgNgEgEQgFgEgLAAg");
	this.shape_4.setTransform(43.1,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggCCIAAjPIgoAAIAAgzICRAAIAAAzIgoAAIAADPg");
	this.shape_5.setTransform(26.9,21.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguB8QgUgKgGgTQgGgUAAgmIAAhJQAAgdACgOQACgOAJgNQAKgNARgHQARgIAVAAQAcAAAUAMQATALAGASQAGARAAAkIAAAZIhDAAIAAguQAAgTgCgFQgCgFgIAAQgGAAgCAGQgDAGAAAUIAAB3QAAASADAGQACAGAGAAQAHAAADgGQACgFAAgWIAAggIBDAAIAAAJQAAAogFARQgGASgTANQgUAMgcAAQgcAAgTgLg");
	this.shape_6.setTransform(10.2,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.7,42.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASCCIAAh3IghB3Ig7AAIAAkCIA5AAIAAB1IAjh1IA5AAIAAECg");
	this.shape.setTransform(87.8,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtCCIAAiuIgYCuIgoAAIgZiqIAACqIg7AAIAAkCIBYAAIAIA3IAHBCIAQh5IBYAAIAAECg");
	this.shape_1.setTransform(67.1,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASCCIAAh3IghB3Ig7AAIAAkCIA4AAIAAB1IAkh1IA5AAIAAECg");
	this.shape_2.setTransform(46.5,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKCCIAAhuIgTAAIAABuIhDAAIAAkCIBDAAIAABcIATAAIAAhcIBDAAIAAECg");
	this.shape_3.setTransform(28.4,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguB8QgUgKgGgTQgGgUAAgmIAAhJQAAgdACgOQACgOAJgNQAKgNARgHQARgIAVAAQAcAAAUAMQATALAGASQAGARAAAkIAAAZIhDAAIAAguQAAgTgCgFQgCgFgIAAQgGAAgCAGQgDAGAAAUIAAB3QAAASADAGQACAGAGAAQAHAAADgGQACgFAAgWIAAggIBDAAIAAAJQAAAogFARQgGASgTANQgUAMgcAAQgcAAgTgLg");
	this.shape_4.setTransform(10.2,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.2,42.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,153,0.11)").s().p("AnRHSQjBjCAAkQQAAkPDBjCQDCjBEPAAQEQAADCDBQDBDCAAEPQAAEQjBDCQjCDBkQAAQkPAAjCjBg");
	this.shape.setTransform(66,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,131.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AKTAAQAAERjCDAQjADCkRAAQkQAAjBjCQjBjAAAkRQAAkQDBjBQDBjBEQAAQERAADADBQDCDBAAEQg");
	this.shape.setTransform(66,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,134.9,134.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,347);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.backs();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,574,263);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snip();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,551,251);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.strel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216,235);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gilz();
	this.instance.setTransform(10,2.9,0.112,0.112,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,2.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("A5svOMAzZAAAIAAedMgzZAAAg");
	this.shape.setTransform(164.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,332,198);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEDtIAAhUIiNAAIAAhRIBnk0ICaAAIAAE0IAiAAIAABRIgiAAIAABUgAg4BIIA0AAIAAjHg");
	this.shape.setTransform(105.1,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKB5QgKgwgEgjIgQBTIg+AAIAgh9Iggh0IA+AAIAQBVQAJg/AFgWIBCAAIgdB0IAkB9g");
	this.shape_1.setTransform(73.6,37);

	this.instance = new lib.Символ30();
	this.instance.setTransform(33.5,39.5,1,1,0,0,0,33.5,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,122.3,82.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(57.1,21.2,1,1,0,0,0,57.1,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:50.1},2,cjs.Ease.get(-1)).to({x:43.1},2,cjs.Ease.get(1)).to({x:48.7},2,cjs.Ease.get(-1)).to({x:57.1},3,cjs.Ease.get(1)).wait(10));

	// СТРЕЛКА
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(171,22,1,1,0,0,0,63.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({x:178},2,cjs.Ease.get(-1)).to({x:185},2,cjs.Ease.get(1)).to({x:179.4},2,cjs.Ease.get(-1)).to({x:171},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,234.8,43.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(66.3,66,1,1,0,0,0,66,66);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(66.3,66,0.023,0.023,0,0,0,66.7,66.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AGmAAIDvAAQAAERjCDAQjBDCkRAAQkPAAjBjCQjCjAAAkRQAAkQDCjBQDBjBEPAAQERAADBDBQDCDBAAEQAqUAAIADAAIDmAAAABCEIAAIA");
	this.shape.setTransform(66.1,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,135.2,134.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(65.6,66.8,1,1,0,0,0,66.1,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[65.5,66.6,65.3,66.5,65,66.4,63.9,65.5,62.4,63.3,60.9,61.1,59.8,60.3,58.9,59.7,56.8,58.8,54.6,57.9,53.7,57,53.1,56.5,52.4,55.5,51.5,54.2,51.2,53.9,49.6,52.1,45.5,50.2,42.7,48.9,41,49,39.9,49.1,38,50,35.2,51.4,34.1,52.1,31.8,53.7,30.5,56.3,28.9,59.6,28.9,65.3,28.8,70.7,31,72.8,32.5,74.3,36.6,75,44.9,76.5,49.2,76.5,57,76.3,64.9,72.4,69,70.5,70.9,68.4,71.2,68,72.5,66.4,73.5,65.1,74.2,64.5,74.9,63.8,77.3,62.5,81,60.3,85.5,56.7,88.6,54.1,90.3,53.4,92.7,52.4,97.6,52.4,102.7,52.4,105.5,52.9,109.8,53.7,112.4,56.1,115,58.6,116.2,63,117.5,68.1,116.1,73,114.6,78.3,110.5,80.9,108.2,82.3,104.8,82.9,102.4,83.3,98.6,83.3,92.1,83.2,87.7,82,81.8,80.6,78.3,77.1,77.5,76.3,77.6,75.7,74.9,76,72.7,74.5]}},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-0.7,135.2,134.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(311,245.7,1,1,0,0,0,311,245.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.2},39).to({rotation:0},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,551,251);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(5,1.4,1,1,0,0,0,5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,2.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ13();
	this.instance.setTransform(4.6,25.6,0.997,0.997,30.4,0,0,5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:4.9,regY:1.4,scaleX:1,scaleY:1,rotation:-5.2,x:16.6,y:156.4},16).wait(1).to({rotation:-5.2,x:2.3,y:1},0).to({regX:5,regY:1.5,scaleX:1,scaleY:1,rotation:392.6,x:3.8,y:17.4},2).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(2.7,41.8,0.998,0.998,74.4,0,0,4.9,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5,scaleX:1,scaleY:1,rotation:3.5,x:-4.2,y:156.6},14).wait(1).to({x:5.2,y:0.9},0).to({regX:4.9,regY:1.5,scaleX:1,scaleY:1,rotation:439.4,x:3.2,y:33.7},4).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(-8.5,58.2,0.998,0.998,104.8,0,0,4.9,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:5,scaleX:1,scaleY:1,rotation:0,y:156.7},12).wait(1).to({y:0.7},0).to({regX:4.9,scaleX:1,scaleY:1,rotation:473.6,y:50},6).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(4.6,74.7,0.997,0.997,133.7,0,0,5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:-4.2,x:10.7,y:156.5},10).wait(1).to({rotation:-4.2,x:-0.7,y:0.9},0).to({regX:4.9,scaleX:1,scaleY:1,rotation:507.5,x:4,y:66.4},8).wait(1));

	// Слой 1 - копия: 2 - копия
	this.instance_4 = new lib.Символ13();
	this.instance_4.setTransform(-8.7,91,0.998,0.998,-151.7,0,0,5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:0,x:-8.5,y:156.7},8).wait(1).to({y:0.7},0).to({scaleX:1,scaleY:1,rotation:549.3,x:-8.6,y:82.9},10).wait(1));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ13();
	this.instance_5.setTransform(13.1,115.6,0.999,0.999,-100,0,0,4.9,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:1.4,scaleX:1,scaleY:1,rotation:-5.4,x:16.9,y:156.4},5).wait(1).to({rotation:-5.4,x:2.1,y:1.1},0).to({regX:5,regY:1.5,scaleX:1,scaleY:1,rotation:601,x:12.2,y:107.3},13).wait(1));

	// Слой 1 - копия
	this.instance_6 = new lib.Символ13();
	this.instance_6.setTransform(0.5,140.3,0.997,0.997,-37.9,0,0,5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:1.4,scaleX:1,scaleY:1,rotation:0,y:156.7},2).wait(1).to({y:0.7},0).to({regY:1.5,scaleX:1,scaleY:1,rotation:663.1,y:132},16).wait(1));

	// Слой 1
	this.instance_7 = new lib.Символ13();
	this.instance_7.setTransform(1.2,1.3,1,1,7.2,0,0,4.9,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:367.2,x:-18.4,y:156},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-0.7,28.9,145.2);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(-42.1,97.3,1,1,0,0,0,3.4,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Слой 1
	this.instance_1 = new lib.fire();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,0,253.3,240.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(129.8,182.1,1,1,-0.9,0,0,129.8,182.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-1.4,219.9,238.6);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(288.8,131.5,1,1,0,0,0,287,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:287},0).wait(1).to({x:288.8},0).wait(1).to({x:287},0).wait(1).to({x:288.8},0).wait(1).to({x:287},0).wait(1).to({x:288.8},0).wait(1).to({x:287},0).wait(1).to({x:288.8},0).wait(1).to({x:287},0).wait(1).to({x:288.8},0).wait(1).to({x:287},0).wait(1).to({x:288.8},0).wait(1).to({x:287},0).wait(1).to({x:288.8},0).wait(10).to({x:287},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,0,574,263);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(320,173.5,1,1,0,0,0,320,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:170.8},39).to({y:173.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,347);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ25 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ21();
	this.instance.setTransform(66.7,65.3,1,1,0,0,0,66.1,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,135.2,134.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(-115.2,88.8,1,1,0,0,0,66.1,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.3,22,135.2,134.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.setTransform(373,84.5,1,1,0,0,0,97,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(274.6,242,1,1,0,0,0,132.6,184);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(287,131.5,1,1,0,0,0,287,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,-6.5,574,301.7);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(287,131.5,1,1,0,0,0,287,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,-6.5,574,301.7);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ29 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ31();
	this.instance.setTransform(120,15.2,1,1,0,0,0,33.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87,x:-20},4).to({scaleX:1,scaleY:1,x:120},5).wait(1));

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.setTransform(20.1,12.6,0.499,0.499,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).to({x:118.1},4).to({x:20.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27.3,208.8,82.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 30;
		this.fon.y = - stage.mouseY / 30;
		}
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_7;
		
		function fl_MouseOverHandler_7()
		    {
			    _this.pricel.visible=true;
				_this.cent.gotoAndPlay(2);
				_this.mm.gotoAndPlay(1);
		
		
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_8;
		
		
		      function fl_MouseOutHandler_8()
		    {
			    _this.pricel.visible=false;
				_this.cent.gotoAndPlay(1);
				_this.mm.gotoAndPlay(5);
		
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.mm = new lib.Символ29();
	this.mm.setTransform(396.5,305.8,1,1,0,0,0,19.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.mm).wait(1));

	// Слой 1
	this.cent = new lib.Символ25();
	this.cent.setTransform(269.3,138.5,1,1,0,0,0,66.1,66);

	this.timeline.addTween(cjs.Tween.get(this.cent).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5sPTIAA+mMAzZAAAIAAemg");
	mask.setTransform(274.5,136.1);

	// Слой 4
	this.pricel = new lib.Символ22();
	this.pricel.setTransform(214.4,126.5,1,1,0,0,0,66.1,66);

	this.pricel.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 1
	this.fon = new lib.Символ7();
	this.fon.setTransform(-53.7,-6.2,1,1,0,0,0,-55.7,-6.2);

	this.fon.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110,38.1,475.7,304.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ5();
	this.instance.setTransform(473.5,127.6,1,1,0,0,0,164.5,97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(486,122.5,1,1,0,0,0,287,131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(320.9,173.5,1,1,0,0,0,320,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,-15.6,783.8,362.6);


// stage content:
(lib.index = function(mode,startPosition,loop) {
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

	// Слой 4
	this.instance = new lib.Символ26();
	this.instance.setTransform(150.2,33.5,1,1,0,0,0,117.4,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("A6IFOIAAqbMA0RAAAIAAKbg");
	this.shape.setTransform(140.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(267.6,198,1,1,0,0,0,275.5,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(319,145.5,1,1,0,0,0,320,173.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293,108.9,810.7,367.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
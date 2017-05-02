(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/backnew1.jpg?1460732576384", id:"backnew1"},
		{src:"images/ererere.png?1460732576384", id:"ererere"},
		{src:"images/forrez_03.png?1460732576384", id:"forrez_03"},
		{src:"images/forrez_05.png?1460732576384", id:"forrez_05"},
		{src:"images/forrez_08.png?1460732576384", id:"forrez_08"},
		{src:"images/forrez_11.png?1460732576384", id:"forrez_11"},
		{src:"images/forrez_14.png?1460732576384", id:"forrez_14"},
		{src:"images/forrez_18.png?1460732576384", id:"forrez_18"},
		{src:"images/forrez_24.png?1460732576384", id:"forrez_24"},
		{src:"images/Klubnika.png?1460732576384", id:"Klubnika"}
	]
};



// symbols:



(lib.backnew1 = function() {
	this.initialize(img.backnew1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.ererere = function() {
	this.initialize(img.ererere);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,174);


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


(lib.Klubnika = function() {
	this.initialize(img.Klubnika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,200);


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


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AghCgIAAhKIBDAAIAABKgAgRA4IgQiLIAAhMIBDAAIAABMIgQCLg");
	this.shape.setTransform(191.3,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhkCeIAAk7IBMAAIAAB6IAgAAQARAAARAFQARAEANALQANALAJARQAHATABAdIgDAcQgCAMgEAKQgJATgNAKQgNALgQAEQgRADgRAAgAgYBlIAOAAIANgBQAHgCAFgFQAEgEADgHQADgIAAgMQAAgMgDgIQgDgHgFgGQgFgFgGgCIgNgCIgOAAg");
	this.shape_1.setTransform(172.6,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AggCeIAAj/Ig8AAIAAg8IC5AAIAAA8Ig4AAIAAD/g");
	this.shape_2.setTransform(150.1,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAaCeIAAhKIACgcIAEggIAFgdIAEgcIgBAAIhAC/IhKAAIAAk7IBJAAIAABOIgCAdIgDAgIgEAdIgDAdIABAAIA+jFIBJAAIAAE7g");
	this.shape_3.setTransform(127.9,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AggCeIAAj/Ig8AAIAAg8IC5AAIAAA8Ig4AAIAAD/g");
	this.shape_4.setTransform(105.7,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhMCNQgNgNgGgTQgHgUAAgbIAAiJQAAgSAGgQQAGgRANgMQAMgMATgIQAUgGAagBQAbABATAGQATAIANAMQAMAMAHARQAGAQAAASIAAAXIhNAAIAAgdQAAgHgCgEIgHgIIgJgFIgIgBQgJAAgJAGQgHAFgBANIAACbQABASAGAIQAIAIALAAQALAAAHgHQAIgHAAgTIAAgpIBNAAIAAAdQAAAbgGAUQgHATgMANQgZAYg1AAQgzAAgZgYg");
	this.shape_5.setTransform(83.6,24.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgtCfQgTgGgMgOQgZgaAAgwIAAiNQAAgSAFgQQAHgQAMgNQANgMATgHQAUgGAZgBQAbABATAGQAUAIAMAMQANAMAFARQAGAQABASIAACMQAAAxgZAZQgMAOgUAGQgUAHgagBQgZABgUgHgAgRhkQgIAGAAAOIAACfQAAAOAIAHQAIAHAJAAQAKAAAHgHQAJgHAAgOIAAifQAAgNgJgHQgHgGgKAAQgJAAgIAGg");
	this.shape_6.setTransform(59.2,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhYCeIAAk7ICwAAIAAA8IhjAAIAAD/g");
	this.shape_7.setTransform(37.1,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag/CeQgLgDgFgEIAAg1IAIACIALAAIAKgBQAGgCACgHIhHj5IBQAAIAcCKIADAXIABApIABAAIACgpIAEgXIAdiKIBPAAIhEDzQgGAXgHAOQgHAPgKAJQgKAJgMADQgOADgVAAg");
	this.shape_8.setTransform(14.2,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,0,211.9,55.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AglBDIAAiFIBLAAIAAAZIgqAAIAAAbIAlAAIAAAYIglAAIAAAfIAqAAIAAAag");
	this.shape.setTransform(9.4,179.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AALBDIAAgfIABgMIABgOIACgLIACgMIgbBQIgfAAIAAiFIAfAAIAAAhIgBAMIgBAOIgCALIgBANIABAAIAZhTIAfAAIAACFg");
	this.shape_1.setTransform(9.2,162);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AgqBDIAAiFIAyAAIAMABQAGACAFAEQAEAEADAHQADAGAAAKQAAAHgCAFQgBAFgDADIgGAGIgGACQAKAEAFAGQAFAHAAAOQAAAKgDAHQgCAIgGAFQgJAKgWAAgAgLArIAIAAQAHAAAEgEQADgEAAgJQAAgJgDgEQgEgFgHAAIgIAAgAgLgOIAKAAQAFAAADgEQADgDAAgIQAAgHgDgDQgDgDgFAAIgKAAg");
	this.shape_2.setTransform(9.3,144.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AgNBDIAAhsIgZAAIAAgZIBOAAIAAAZIgYAAIAABsg");
	this.shape_3.setTransform(9.1,127.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AggA8QgFgFgDgJQgDgIAAgLIAAg6QAAgIADgHQACgHAGgFQAFgFAIgDQAJgDAKgBQALABAIADQAJADAFAFQAFAFADAIQADAHAAAHIAAAJIghAAIAAgMIgBgFIgDgDIgEgBIgDgBQgDgBgEADQgDADAAAFIAABBQAAAIADAEQADACAEAAQAEAAAEgCQADgEAAgHIAAgSIAhAAIAAANQAAALgDAIQgDAJgFAFQgLALgWAAQgVAAgLgLg");
	this.shape_4.setTransform(9.2,109.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AgqBDIAAiFIAhAAIAAA0IAMAAQAHAAAIACQAHACAFAEQAGAFADAGQAEAIAAANIgBAMQgBAFgCAEQgDAIgGAEQgGAFgGACQgIABgHAAgAgJArIAFAAIAFgBIAFgCIADgFQABgEAAgFQAAgFgBgDQgBgEgDgCQgBgCgDgBIgEgBIgGAAg");
	this.shape_5.setTransform(9.3,92.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgqBDIgIgDIAAgXIADABIAFAAQADAAACgBQACgBABgGIABgOIAAgXIAAhAIBUAAIAACGIghAAIAAhsIgTAAIAAAsQAAAUgCAMQgCAMgEAIQgEAHgFADQgGADgJAAIgJgBg");
	this.shape_6.setTransform(8.8,75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AgSBEQgJgDgFgFQgKgMAAgUIAAg7QgBgIADgHQADgHAFgFQAGgFAHgDQAJgDAKgBQALAAAJAEQAIADAFAFQAFAFADAHQADAHAAAIIAAA7QAAAVgLALQgFAFgIADQgJADgLgBQgKABgIgDgAgGgpQgEACAAAGIAABCQAAAGAEAEQADACADAAQAEAAADgCQAEgEAAgGIAAhCQAAgGgEgCQgDgEgEAAQgDAAgDAEg");
	this.shape_7.setTransform(9.2,57.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF00").s().p("AgqBDIAAiFIAyAAIAMABQAGACAFAEQAEAEADAHQADAGAAAKQAAAHgCAFQgBAFgDADIgGAGIgGACQAKAEAFAGQAFAHAAAOQAAAKgDAHQgCAIgGAFQgJAKgWAAgAgLArIAIAAQAHAAAEgEQADgEAAgJQAAgJgDgEQgEgFgHAAIgIAAgAgLgOIAKAAQAFAAADgEQADgDAAgIQAAgHgDgDQgDgDgFAAIgKAAg");
	this.shape_8.setTransform(9.3,40.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FF00").s().p("AgSBEQgJgDgFgGQgKgLAAgUIAAg7QgBgIADgHQADgHAFgFQAGgGAHgDQAJgCAKAAQALgBAJAEQAIADAFAFQAFAFADAHQADAHAAAIIAAA7QAAAVgLAKQgFAGgIADQgJADgLAAQgKAAgIgDgAgGgpQgEACAAAGIAABCQAAAHAEADQADACADABQAEgBADgCQAEgDAAgHIAAhCQAAgGgEgCQgDgDgEAAQgDAAgDADg");
	this.shape_9.setTransform(9.2,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FF00").s().p("AAXBRIAAgcIgtAAIAAAcIggAAIAAg2IAFAAIAGgLQACgGACgIIACgRIAAgbIAAgmIBVAAIAABrIAHAAIAAA2gAgFgdIAAASIgCANIgDAOIgFALIAeAAIAAhSIgUAAg");
	this.shape_10.setTransform(9.2,6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FF00").s().p("AgaBDIgHgDIAAgWIADAAIAFABIAFgBQAAgBABAAQAAAAAAgBQABAAAAgBQABAAAAgBIgfhpIAjAAIAMA7IABAIIAAASIABgSIABgIIANg7IAiAAIgdBmIgGARQgDAGgFADQgEAEgEACQgGABgJAAg");
	this.shape_11.setTransform(9.1,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-22.7,18.5,215.2);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAADIgBgBIgBgBIAAgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAAAIAAAAIAAAAIAAgBIABAAIAAgBIABAAIAAAAIAAAAIABAAIACACIAAAAIAAAAIAAAAIABAAIAAAAIgBABIAAAAIAAABIgBAAIAAABIgBAAIAAAAIAAAAg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAADIgBAAIAAAAIgBgBIAAgBIgBgBIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAgBIABgBIABAAIAAAAIAAgBIAAAAIAAABIACAAIABABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAAAIgBABIAAABIgBAAIAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAAAIgBABg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AgBADIgBAAIAAAAIAAgBIgBAAIAAgBIgBgBIACgBIAAgBIABAAIABAAIAAgBIAAABIAAgBIABABIABAAIABAAIABABIAAABIABAAIAAAAIgBABIAAABIgBAAIAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAAAIgCABg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,0.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAADIgBAAIAAAAIAAgBIgBAAIAAgBIgBgBIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABgBIAAAAIAAgBIABAAIAAAAIAAgBIAAABIAAAAIAAAAIABAAIABAAIABABIAAABIABAAIAAAAIgBABIAAABIgBAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAIgBABg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAAEIAAgBIgBAAIgBgBIAAAAIAAAAIgBgBIAAgBIgBAAIACgBIAAgBIABAAIABAAIAAgBIAAAAIAAABIACAAIAAAAIABABIAAABIABAAIAAAAIAAAAIAAABIgBAAIAAABIAAABIAAAAIgBAAIAAAAIAAAAIgBABg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,0.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AADAJIgBgBIAAAAIAAAAIgBgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIABAAIAAAAIgBgCIAAAAIgBgBIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIgCAAIgBAAIAAAAIgBAAIgBAAIAAgBIgBABIgCAAIgBgCIgBAAIAAgBIgBAAIABgDIAAAAIAAgBIAAAAIABAAIAAgBIAAAAIABAAIACAAIABgBIACACIAAAAIAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIABABIAAgBIABABIAAgBIABAAIABABIAAABIAAAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAAAIAAABIAAAAIAAAAIABgBIABgBIAAAAIABABIACgBIAAABIABAAIAAABIABAAIAAABIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAABIgBABIABgBIABABIABAAIABAAIAAABIABABIAAABIAAAAIAAAAIAAABIAAABIgBABIAAABIgBAAIgGAAg");
	this.shape.setTransform(1.3,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAADIAAAAIgBAAIAAgBIgBgBIAAAAIgBgBIAAAAIABAAIAAAAIABgBIAAgBIABAAIAAAAIAAAAIAAAAIAAAAIABAAIABABIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABIAAABIgBAAIAAABQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAAAIAAAAg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAADIgCgCIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABAAIAAAAIAAgBIABAAIAAgBIAAAAIABAAIAAAAIABAAIABAAIAAAAIABABIAAABIABAAIAAAAIgBABIAAABIgBABIAAAAIgBAAg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,0.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAADIAAAAIgBAAIAAgBIgBgBIAAAAIAAgBIgBAAIABAAIAAAAIAAgBIABAAIAAgBIABAAIAAAAIAAAAIAAAAIAAAAIABAAIABABIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABIAAABIgBAAIAAABQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAAAIAAAAg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAADIAAAAIgBAAIAAgBIgBgBIAAAAIgBgBIAAAAIABAAIAAAAIABgBIAAgBIABAAIAAAAIAAAAIAAAAIAAAAIABAAIABABIABAAIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAABIAAABIgBAAIAAABQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAABAAAAIAAAAg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AgFAEIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAgCIAAAAIABAAIAAAAIABAAIAAgBIABAAIABAAIAAAAIABgBIADABIABgBIABAAIABgBIAAAAIACAAIAAgBIABABIACABIAAAAIAAABIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIgBABIAAABIgBAAIgBABIgBAAIgCAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgBABg");
	this.shape.setTransform(1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AAAAEIAAgBIgBAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAAAIABAAIABABIABABIAAAAIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAABIgBABIAAABIgBAAIAAAAIgBABg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.439)").s().p("AACAKIgCgBIAAgBIAAAAIAAgBIAAgFIAAAAIAAgBIAAAAIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAIAAgBIgCAAIgBgBIgBAAIAAAAIgBgBIAAAAIAAgBIAAAAIgBgCIABAAIAAgBIAAAAIAAAAIABgBIABAAIACAAIgBgBIABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAABIAAABIAAABIABAAIAAAAIAAAAIABABIACABIAAABIAAAAIAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIAAAAIAAABIAAAAIABAAIACABIAAABIAAAAIAAAAIABABIgBAEIAAAAIAAACIAAgBIgBABIAAAAIgBABIgBAAgAADAAIAAAAIgBAAIAAAAIABAAIAAAAg");
	this.shape.setTransform(0.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(0.5,1,1).p("AAKAAQAAAEgDACQgEADgDAAQgDAAgDgDQgDgCAAgEQAAgCADgEQADgCADAAQADAAAEACQADAEAAACg");
	this.shape.setTransform(1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.439)").s().p("AgGAGQgCgCgBgEQABgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,4,3.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D908D6").s().p("AAaC9IAAhHIABgbIAEgfIAEgeIAEgbIgBAAIg9C6IhIAAIAAkvIBHAAIAABLIgCAbIgDAdIgEAeIgCAcIA9i9IBGAAIAAEvgAgsiRQgJgGgEgLQgFgLgBgOIAcAAQABAHAEAEQAEAFAFACIAMADIAKAAQAOAAAJgDQAJgEAEgOIAbAAQABAOgGAJQgFALgJAHQgKAHgLADQgMADgMABQgaAAgSgNg");
	this.shape.setTransform(150.3,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D908D6").s().p("Ag8CXQgLgCgFgEIAAgzIAIABIAKABIAKgCQAFgBADgHIhFjvIBNAAIAbCFIADAWIABAnIABAAIACgnIADgWIAdiFIBMAAIhCDpQgGAWgHAOQgGAPgKAIQgKAIgLADQgOAEgTAAg");
	this.shape_1.setTransform(127.3,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D908D6").s().p("AA0C3IAAg+IhnAAIAAA+IhIAAIAAh4IAKAAIAOgbQAGgNADgSQADgQACgZIABg7IAAhXIDAAAIAAD1IAQAAIAAB4gAgMhDIgBAoIgEAhIgHAeQgFAOgHANIBHAAIAAi8IgvAAg");
	this.shape_2.setTransform(102.5,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D908D6").s().p("AAmCYIgLg9Ig2AAIgKA9IhIAAIBCkvIBWAAIBEEvgAARAkIgRiFIgBAAIgTCFIAlAAg");
	this.shape_3.setTransform(78.1,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D908D6").s().p("AhhCYIAAkvIBpAAQAQAAAQAEQAQADAMAKQANALAIARQAEAKACAMIADAaQAAAcgIASQgIAQgNAKQgNALgQAEQgQAEgQAAIgfAAIAAB3gAgXgUIANAAIALgCQAHgCAFgEQAFgFADgHQADgHAAgMQAAgMgDgGQgDgIgFgEQgFgEgGgBIgNgDIgMAAg");
	this.shape_4.setTransform(55.3,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D908D6").s().p("AgrCZQgTgHgLgMQgZgaAAgtIAAiHQABgSAFgQQAGgQAMgLQAMgMATgGQATgHAYAAQAaAAASAHQATAGAMAMQAMAMAGAQQAFAPAAASIAACHQABAugYAZQgMAMgTAHQgTAGgZAAQgYAAgTgGgAgRhgQgHAGAAANIAACZQAAANAHAHQAIAHAJAAQAJAAAIgHQAIgHAAgNIAAiZQAAgNgIgGQgIgGgJAAQgJAAgIAGg");
	this.shape_5.setTransform(31.7,23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D908D6").s().p("AAYCYIAAj1IguAAIAAD1IhKAAIAAkvIDBAAIAAEvg");
	this.shape_6.setTransform(8.1,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.6,0,191.6,53.3);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D908D6").s().p("Ag4COQgLgCgEgDIAAgxIAHACIAKAAIAJgBQAFgCACgGIhAjgIBIAAIAaB9IACAUIACAlIAAAAIACglIADgUIAbh9IBHAAIg9DaQgGAVgHANQgGAOgJAIQgJAIgLACQgMADgTAAg");
	this.shape.setTransform(175,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D908D6").s().p("AAWCPIgfhkIgSAhIAABDIhCAAIAAkdIBCAAIAAByIAuhyIBLAAIg/B/IA/Ceg");
	this.shape_1.setTransform(154.2,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D908D6").s().p("ABTCPIgghkIgTAhIAABDIg/AAIAAhDIgTghIggBkIhJAAIBAieIhAh/IBLAAIAxByIAAhyIA/AAIAAByIAxhyIBLAAIhAB/IBACeg");
	this.shape_2.setTransform(126.5,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D908D6").s().p("Ag4COQgLgCgEgDIAAgxIAHACIAKAAIAJgBQAFgCACgGIhAjgIBIAAIAaB9IACAUIACAlIAAAAIACglIADgUIAbh9IBHAAIg9DaQgGAVgHANQgGAOgJAIQgJAIgLACQgMADgTAAg");
	this.shape_3.setTransform(99.7,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D908D6").s().p("AhaCPIAAkdIBiAAQAPAAAPADQAOAEAMAKQAMAJAIARQAEAIACAMIABAYQAAAbgHARQgHAPgNAJQgLAKgPAEQgPAEgPAAIgeAAIAABwgAgWgTIANAAIAKgBQAGgCAFgEQAFgFACgHQADgHAAgKQAAgLgCgHQgDgHgFgDQgEgEgGgCIgNgBIgLAAg");
	this.shape_4.setTransform(78.1,22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D908D6").s().p("AAxCsIAAg6IhhAAIAAA6IhDAAIAAhxIAJAAIANgZQAFgNAEgQQADgQABgXIABg3IAAhSIC0AAIAADmIAPAAIAABxgAgMg/IgBAmIgDAfIgHAcQgEANgGAMIBBAAIAAiwIgsAAg");
	this.shape_5.setTransform(54.4,25.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D908D6").s().p("AgpCQQgRgHgLgLQgWgYAAgrIAAh/QAAgRAEgOQAGgPAMgLQALgMARgFQATgHAWAAQAYABASAGQARAGAMALQALALAFAPQAGAPgBAQIAAB/QABArgXAYQgLALgRAHQgTAFgXAAQgWAAgTgFgAgPhaQgIAFAAANIAACPQAAANAIAGQAHAHAIAAQAIAAAIgHQAHgGAAgNIAAiPQAAgMgHgGQgIgGgIAAQgIAAgHAGg");
	this.shape_6.setTransform(31,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D908D6").s().p("AAWCPIAAjnIgrAAIAADnIhFAAIAAkdIC1AAIAAEdg");
	this.shape_7.setTransform(8.9,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,0,202,50.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Klubnika();
	this.instance.setTransform(54.5,-182.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.5,-182.8,134,200);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.forrez_24();
	this.instance.setTransform(0,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.1,451,144);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,0,211.9,55.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(100.6,27.7,1,1,0,0,0,100.6,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08},4).to({scaleX:1,scaleY:1},5).wait(1));

	// Слой 2
	this.instance_1 = new lib.ererere();
	this.instance_1.setTransform(-99.2,-32.7,0.759,0.74);

	this.instance_2 = new lib.ererere();
	this.instance_2.setTransform(-121.2,-45.4,0.759,0.74);

	this.instance_3 = new lib.ererere();
	this.instance_3.setTransform(-35.5,-68.6,0.759,0.74);

	this.instance_4 = new lib.ererere();
	this.instance_4.setTransform(44.4,-51.3,0.759,0.74);

	this.instance_5 = new lib.ererere();
	this.instance_5.setTransform(10.9,-6.1,0.759,0.74);

	this.instance_6 = new lib.ererere();
	this.instance_6.setTransform(-93.4,5.5,0.759,0.74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,-68.6,421.5,203);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(10.1,82,1,1,0,0,0,10.1,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-22.7,18.5,215.2);


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

	// Слой 2
	this.instance_2 = new lib.ererere();
	this.instance_2.setTransform(-99.2,-12.7,0.759,0.74);

	this.instance_3 = new lib.ererere();
	this.instance_3.setTransform(-121.2,-25.4,0.759,0.74);

	this.instance_4 = new lib.ererere();
	this.instance_4.setTransform(-35.5,-48.6,0.759,0.74);

	this.instance_5 = new lib.ererere();
	this.instance_5.setTransform(44.4,-31.3,0.759,0.74);

	this.instance_6 = new lib.ererere();
	this.instance_6.setTransform(10.9,13.9,0.759,0.74);

	this.instance_7 = new lib.ererere();
	this.instance_7.setTransform(-93.4,25.5,0.759,0.74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.2,-48.6,421.5,203);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(-63.7,95.9,0.555,0.555,1,0,0,118.9,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:118.8,rotation:47.7},9,cjs.Ease.get(1)).to({regX:118.9,rotation:1},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-0.2,76.3,112.3);


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
	this.instance.setTransform(91.7,51.6,0.864,0.864,0,0,0,91.7,51.6);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(100.4,49.6,1,1,0,0,0,100.5,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.2,-34.9,364.1,175.3);


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
	this.shape.graphics.f("#FF0000").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADIANAFQAUAHAVgFIAWgHQAOgEAJAEQAFACAHAHQAIAHAEACQALAGARgDQAHgBAWgIQAvgSAhAPIAPAIQAIAEAHAAQAJABANgEIAWgJQAZgIAtAJQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape.setTransform(21.4,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACANAAQAVADARgCQAHABANgDQAMgCAJACQAHACAIAGQAIAHAFgCIAaAEQAJADAZgHQArgOAeAKIASACQAIAAAHACQAJACAMAAQAIAAAOgDQAWgFAxACQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_1.setTransform(21.4,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACARgDQAWgCANADQAGAEALgCQAKgBALACQAIAAAIAHQAJAGAHgGQAKgEAOAIQAJAIAcgGQAogLAaAHQAMAAAKgEQAIgEAIADIATAHQAIADAOgBIBIgGQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_2.setTransform(21.4,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AiWAjQg4g1gGhMIAIAAQAFAAAIAEQAEABAVgGQAYgGAIAHQAFAHAJAAIAUAAQALAAAIAGQAJAGAIgJQAJgJANANQAKANAggFQAkgIAXACQAPgBAJgIQAJgJAIAFQAIAEAKAIQAIAHAPACQAQABA4gMQgKBEgzAwQg/BAhZAAQhXAAg/hAg");
	this.shape_3.setTransform(21.4,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiWAmQg4g1gGhMIAIAAQAFAAAIAEQAEABAZgKQAZgKAEALQAEAKAHACQAIABAMgBQAMAAAJAFQAJAGAJgOQAJgNALASQAMASAggFIA2gGQATgCAJgNQAJgNAIAGQAIAGAJALQAIALAPAEQAOAEA7gSQgKBEgzAwQg/BAhZAAQhXAAg/hAg");
	this.shape_4.setTransform(21.4,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AiWAkQg4g2gGhMIAIAAQAFABAIADQAEACAWgHQAYgHAHAIQAFAIAJgBIAUABQAKAAAJAGQAJAGAIgLQAKgKAMAOQAKAOAggEQAkgIAWACQAQgBAJgJQAJgKAIAFQAIAFAKAIQAIAIAOACQARABA4gMQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_5.setTransform(21.4,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACATgFQAWgDALAEQAGAGAKgCIAVABQAJAAAIAHQAJAGAHgIQAKgFAOAJQAJAKAegFQAmgKAZAFQANAAAJgGQAJgGAIAEIATAJQAHAFAPAAQASgBA2gHQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_6.setTransform(21.4,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACAPgCIAlABQAGADAMgCQALgCAKACQAIABAHAGQAJAHAGgEQAKgCAPAFQAJAHAbgHQApgMAcAIQAKABAKgCQAIgDAHADIAUAEQAIADAPgCQAUgDAzgCQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
	this.shape_7.setTransform(21.4,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AiWAiQg4g2gGhMIAIAAQAFABAIADQAEACAMABQAVADASgCQAGAAAOgDQAMgDAKADQAGACAIAGQAIAHAFgBQAKACAQABQAJADAYgHQAsgPAeALIASADIAPACQAJACAMgBQAIAAAOgEQAXgGAwAEQgKBDgzAxQg/A/hZAAQhXAAg/g/g");
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
	this.instance.cache(-2,-25,23,219);

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

	// Слой 3
	this.txt = new lib.Символ37();
	this.txt.setTransform(173.2,84.2,1,1,0,0,0,91.7,51.6);

	this.kur = new lib.Символ9();
	this.kur.setTransform(-99.4,137,1,1,0,0,0,16.5,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kur},{t:this.txt}]}).wait(1));

	// Слой 4
	this.instance = new lib.Символ17();
	this.instance.setTransform(657.9,141.9,1,1,0,0,0,84.2,130.9);

	this.pricel = new lib.Символ15();
	this.pricel.setTransform(721.7,101.1,1,1,0,0,0,18.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pricel},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(460.5,193.5,1,1,0,0,0,80,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.backnew1();
	this.instance_2.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104.3,148,998.9,331);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
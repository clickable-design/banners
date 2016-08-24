(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"image50.jpg", id:"image50"},
		{src:"image831.png", id:"image831"},
		{src:"none46470066.jpg", id:"none46470066"},
		{src:"podvod.png", id:"podvod"}
	]
};



// symbols:



(lib.image50 = function() {
	this.initialize(img.image50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,90);


(lib.image831 = function() {
	this.initialize(img.image831);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,28);


(lib.none46470066 = function() {
	this.initialize(img.none46470066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,160);


(lib.podvod = function() {
	this.initialize(img.podvod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,902,456);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgOF9QgLgMgCAAQgpgEgEgKQgDgHAAgQQABgRgCgHQgEgPgTgiQgQgbAAgSQAAgKAGgHQgyAFhBAKQhNAMgLAGQgQAHguAQIgaAKIgBAHQgBANACAHIAUAkQAPAbAAAKQAAAbgWAAQgTAAgZgkQgVgfAAgIIACgMIADgMIgBgFQgSAJgOAFIhDAAQgYgFgGgJQgDgFAAgOQAAgWASgHQArgQAZgPQgVgpAAgxQAAgYAZgPQAZgPAAA0QAAAmAYARIABABIAFgDQAegWAOgLQAMgLApgUQAqgWATgOQAYgSAdgIIgEgGQgbgvAAgJQAAgdAmgHQAlgHAAgLIgbhRQgchRAAgXQAAgVATgIQAOgGAFAVIAAgBQATgJAJgKIgJgOQgEgGAAgHQAAgTAlgJQAYgGBQgNQAXgEAWgQQAUgIAZAWIBOBBQBVA/AwAAQANAAAtgRQAkgOAcgNQAQgHAXgVQASgQAPAAQAmAAAhBGQAXAyAIAtQACARABAZIgBAqQAAANAIAiIAGAeQAJAFAAAKQAAARgdAGQg8ALgVAIQgYAIgEAPQgHAUgMAKQgVASgvAjQgoAegYAWQgOAOgbAqQgXAmgXAPQgXAQhRAdQhPAcgPAAQgMAAgJgJgAnxD/IgEADIAQAAQAFgEAMgGIgFgIIgYAPg");
	this.shape.setTransform(58.1,39.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116.3,78.1);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ak5AAIJ0AA");
	this.shape.setTransform(31.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AiIAAIERAA");
	this.shape_1.setTransform(13.8,37);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.9,66.9,40);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADKQgQgFhIg4Qh0hYgjhlQgjhnApgfQAqggBOARQBOASAqBDIADAEQACgIAFgLQAVgsBNgVQBNgVAqAgQApAggjBmQgiBlhzBYQhPA+gLAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape.setTransform(38.7,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13,-7.4,51.4,40.8);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoCeIgDgEIAAgsQABgGAFAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABIAAhVIAAhJQABgpAJgeQAKgjANgBQAPABAKAjQAJAeABApIABBJIgBBSIADgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABIAAAmQgBAGgFABQgDgBgBgDIgCgGIgBAAIgGAAIgFALQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgDgEQgEgFgBAAQgEAAgFAFQgGAEgDAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAQgCgEgFgEIgCADIgEABIgDgBIAAAFQgCAFgEABIgDgCg");
	this.shape.setTransform(4.5,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,32);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ТОПИ ВРАГА", "bold 51px 'Intro Black Alt'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.setTransform(158.8,0);
	this.text.shadow = new cjs.Shadow("rgba(153,0,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(9).to({color:NaN},0).wait(10).to({color:NaN},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-3,336,65);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,-0.579,0.57,0,-81.5,78.5)).s().p("AhgEjIAApFIDBAAIAAJFg");
	this.shape.setTransform(9.7,667.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,0.58,0.57,0,-81.5,-79)).s().p("AhgEnIAApNIC8AAIAFAAIAAJNg");
	this.shape_1.setTransform(9.7,609.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,-0.579,0.57,0,-81.7,79.2)).s().p("AheEcIAAo3IC8AAIAAI3g");
	this.shape_2.setTransform(9.5,551.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,0.58,0.57,0,-81.7,-79)).s().p("AheEnIAApNIC8AAIAAATIAAI6g");
	this.shape_3.setTransform(9.5,493.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,-0.579,0.57,0,-81.5,78.5)).s().p("ABcEjIAAgTIi8AAIAAoyIDBAAIAAJFg");
	this.shape_4.setTransform(9.7,436.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,0.58,0.57,0,-81.5,-79)).s().p("AhgEnIAApNIC8AAIAFAAIAAJNg");
	this.shape_5.setTransform(9.7,377.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,-0.579,0.57,0,-81.7,79.2)).s().p("AheEcIAAo3IC8AAIAAI3g");
	this.shape_6.setTransform(9.5,319.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,0.58,0.57,0,-81.7,-79.5)).s().p("AheEhIAApBIC8AAIAAJBg");
	this.shape_7.setTransform(9.5,262.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,-0.579,0.57,0,-81.5,78.5)).s().p("ABcEjIi8AAIAApFIDBAAIAAJFg");
	this.shape_8.setTransform(9.7,204.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,0.58,0.57,0,-81.5,-79)).s().p("AhgEnIAApNIC8AAIAFAAIAAJNg");
	this.shape_9.setTransform(9.7,145.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,-0.579,0.57,0,-81.7,79.2)).s().p("AheEcIAAo3IC8AAIAAI3g");
	this.shape_10.setTransform(9.5,87.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.none46470066, null, new cjs.Matrix2D(0,0.58,0.57,0,-81.7,-79)).s().p("AheEnIAApNIC8AAIAAJNg");
	this.shape_11.setTransform(9.5,29.5);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,696.9);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.none46470066, null, new cjs.Matrix2D(1.015,0,0,1,-137.6,-95.1)).s().p("An+KJIAA0RIP9AAIAAURg");
	this.shape.setTransform(51.2,64.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.none46470066, null, new cjs.Matrix2D(1.015,0,0,1,-138.9,-95.5)).s().p("AnxKFIAA0JIPkAAIAAUJg");
	this.shape_1.setTransform(255.8,64.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.none46470066, null, new cjs.Matrix2D(-1.018,0,0,1,138.6,-95.1)).s().p("AoEKJIAA0RIQKAAIAAUJIAAAIg");
	this.shape_2.setTransform(154.1,64.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.none46470066, null, new cjs.Matrix2D(-1.018,0,0,1,138.6,-95.5)).s().p("AHkKFIvoAAIAA0JIQKAAIAAUJg");
	this.shape_3.setTransform(357.5,64.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.none46470066, null, new cjs.Matrix2D(1.015,0,0,1,-137.6,-95.1)).s().p("An+KJIAAgIIAiAAIAA0JIPbAAIAAURg");
	this.shape_4.setTransform(457.1,64.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.none46470066, null, new cjs.Matrix2D(-1.018,0,0,1,138.6,-95.1)).s().p("AoFKJIAA0RIQKAAIAAUJIAAAIg");
	this.shape_5.setTransform(560.1,64.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.none46470066, null, new cjs.Matrix2D(1.015,0,0,1,-138.9,-95.5)).s().p("AnyKFIAA0JIPkAAIAAUJg");
	this.shape_6.setTransform(661.8,64.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.none46470066, null, new cjs.Matrix2D(-1.018,0,0,1,139.6,-95.5)).s().p("An6KFIAA0JIP1AAIAAUJg");
	this.shape_7.setTransform(762.4,64.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.none46470066, null, new cjs.Matrix2D(1.015,0,0,1,-137.6,-95.1)).s().p("An+KJIAAgIIAA0JIP9AAIAAURg");
	this.shape_8.setTransform(864.4,64.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.none46470066, null, new cjs.Matrix2D(1.015,0,0,1,-138.9,-95.5)).s().p("AnyKFIAA0JIPkAAIAAUJg");
	this.shape_9.setTransform(1069,64.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.none46470066, null, new cjs.Matrix2D(-1.018,0,0,1,138.6,-95.1)).s().p("AoFKJIAA0RIQKAAIAAUJIAAAIg");
	this.shape_10.setTransform(967.3,64.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.none46470066, null, new cjs.Matrix2D(-1.018,0,0,1,138.6,-95.5)).s().p("AoFKFIAA0JIQKAAIAAUJg");
	this.shape_11.setTransform(1170.7,64.5);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1222.5,129.9);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ao1HQIgBAAQgPAAgKhJIgKhtQgBgNgNgfQgNgfgBgRQgBgjgfgTQghgTAAgQQAAgkAcAMQAYgVBagzQBug+ApgRICjg9QB0gtAlgYQASgMA+gNQA3gMAegZQAXgTA2gWQAfgNBEgYIBQgdQAogQApgVIBRgqIATgGQAFgOAZAKIA0AfQAQAOAJATQAFALAHAXQAiBVgDA0QgBAXANB3IANB8QACAFAAAIQABARiRA4IiZA4QhIAihRAdQhaAig7AKQhCAMhRAiQhZAlhGAQQhLARh9ApQhEAWhIAAQgIAAgGgDg");
	this.shape.setTransform(69.5,46.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139,93.5);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Al5HSQgOgLgBgrQAChEgCgVQgBgHgRhDQgQhBAAgJIAAgGQgthZhVgwQAogTAlgRIAWgfQAfgqALgSQAGgKAlgIQAtgKAHgEQAcgOAUgBQgDj2AegVIHyidQA0gJgLD0IAABNIAnggQD+BsgjFDIuqGmQAHg1ACgwg");
	this.shape.setTransform(55.7,56.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111.4,113.6);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlNh+QIYj+BrBjQAwBdgwEJQAABFnDCkQAfk3jfh9g");
	this.shape.setTransform(33.5,31);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,62.1);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ADpjoQBhBhAACHQAACIhhBhQhhBhiIAAQiHAAhhhhQhhhhAAiIQAAiHBhhhQBhhhCHAAQCIAABhBhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34,-34,68,68);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AhvAAIDfAA");
	this.shape.setTransform(11.3,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,24.5,2);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAwAIAAI6AAAHlIAAIc");
	this.shape.setTransform(0,102.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,207.1);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		
		{
		
		    _first = true;
		
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		} 
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Слой 1
	this.text = new cjs.Text("4.66", "51px 'Helvetica'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.setTransform(16.3,0,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"7.36"},0).wait(1).to({text:"11.93",lineWidth:128},0).wait(1).to({text:"32.15"},0).wait(1).to({text:"14.64"},0).wait(1).to({text:"10.04"},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,0,41.1,21.9);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Ai6g7IAAB3Ag9g7IAAB3AA+g7IAAB3AC7g7IAAB3");
	this.shape.setTransform(18.8,6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.5,14);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.podvod, null, new cjs.Matrix2D(0.664,0,0,0.664,-370.5,-192.9)).s().p("A+uRKIk9ppQFoj1F8jRQHhkIHakSQEPicEMihQCRhZCtgcQI3hXI6hBINuD0IAADwI9favg");
	this.shape.setTransform(228.4,109.9);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606968").s().p("AghA4IABgGQgIABAAgEIAAgFIgDgEQgBgCAAgEIgDgGIgDAAIgHAEQgEAAgBgDIgHAAQgFgDgBgDQAAgFAKgCIAIgDIAEgGIgIACQgJAAAEgKQgBAAgHADIgIAEIgGgBIAAgDQAAgCACgCIAIgGQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBQgDACgDAAQgEAAgCgEIgBgDQAAgLATgTQATgUAAAPQAAADgEAEQAQgFANAAQAHAAABAFIAAABQAJgEAAAJQAAADgEACQgFADgCADIgCABIAaACIAogIQAHAAABAEIAKgHQATgJAAAMQAAADgLAOQABABAAAAQABABAAAAQABABAAAAQAAABAAAAIAAACIADgCQAJgFAEAAQAGAAABAFQAAADg0AeQgJAGgPAOQgHAHgNAAQgCAAgLAIIgLAHQgFAAgBgFg");
	this.shape_1.setTransform(413.7,42.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,456.9,219.7);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("Al9B0QgRgFABgMQgBgIAKgDQAFgCALgBIgCgFIADgQIgdgMQgFgEAAgFQAAgFAMgJQANgJAAgEQAAgJgNgQQgMgRAAgHQAAgDAHgFQAKgGAJgNIgHgEQgDgEAAgHQAAgEACgDIgKAAQgQgFgBgMQABgCACgFQAFgEAJgFIBvAAQAQAFAAALQAAAGgEAFIDcgBIDBABQBpADBOAXQBdAbgBAkQABAmhdAbQhOAXhpADIjBABIjVgBQABADAAAEQAAAGgEAFQgEAFgHABg");
	this.shape.setTransform(41.5,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,23.2);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.podvod, null, new cjs.Matrix2D(0.664,0,0,0.664,-202.1,-159.8)).s().p("AtML4IAAiSQDZiQgHkWIgKgPQAGhxgahaIgPgKQAAgFgBgFQgRgrglgqIg8gUIgygoIAAo4ITjAAQCsA4AiCzQAkC+gGDGQgBAXgCAWIAPAjIAZAUQBUAFBRgGQlfDHljDDQlRC7lDDYg");
	this.shape.setTransform(202.1,159.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(117.6,83.8,169.1,152.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.podvod, null, new cjs.Matrix2D(0.664,0,0,0.664,-302.8,-78.1)).s().p("AlFMLIgZgUIgPgjQACgWABgXQAGjGgki+QgmjKjXguIBpl6QBSlUEchpIH3AAQBrAvBXBdQAnBMAgBNQhjAkhhApIgZAyIgPAKIgZA3IAAA3QAqAcAwAVQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAoAZIAPAUIAPAFQAWAiAFAgQAEAXATABQAdChgEC3QAlAIAkAEIgUAMQkMChkPCcIj3CPQgrADgrAAQgnAAgogCg");
	this.shape.setTransform(64.7,78.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129.4,156.3);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.podvod, null, new cjs.Matrix2D(0.664,0,0,0.664,-379.1,-64.7)).s().p("Ai9GsQAFi3geijQgSgBgEgXQgGgggWggIgPgFIgPgUIgogZQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgxgVgqgcIAAg3IAZg3IAPgKIAZgyQDAhRDEg8QCigxCZA8QAzATAoAbIAAITQg+BXhHA8IhyARQiiAaiIBPQgkgEgmgIg");
	this.shape.setTransform(43,44.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.1,88.2);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.podvod, null, new cjs.Matrix2D(0.664,0,0,0.664,-69.7,-175.9)).s().p("AmDJWQh8gUhzg0QiFlGCdkdQA1hfBQhMQAwgvA4gsIAKgfQDsilEfg3IFoEeIA8AUQAkAqARArQACAEAAAFIAPALQAZBcgFBuIAKAQQAIF3mOCDQiFAsiHARg");
	this.shape.setTransform(68.8,59.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.7,119.8);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A23JGQANgVBHglQBYgtAQgLQBBgvCPg0QAvgQCegyQA5gSC8glQCtgqA6hAQArgwBSgfIBhgjQAdgSA9goQBCgiBwgIIC9gDQBxguA/gdQBSglBUgvQAGgDAugmQApghAOgDIBwgMQBrgQAdggQAlgpBEglICahRQBagzBwgkQCBgoAAAnQAAANiAAqQihA0hCAiQhwA4hwBqQgnAlhlgBQhngBgmAfQgfAagVAPQgaASgdAOQgtAXhnAsIivBNIi9ACQhjAChDAjQg/AtgaARQgJAGg9ATIhLAXQgZAIgQAUQgQAXgKAJQglAgjFA7QjFBihwAUQhxAThQAXQhQAXhDAwQgGAFhaAuQgjASgWAQIixA3IB0g5g");
	this.shape.setTransform(158,63.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,316.1,127.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		
		{
		
		    _first = true;
		
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		} 
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+CsQA9h1AUg3QAlhbgegOIAGg5IAFgwQAcgJgsggQBLATAABDIAAADQgBAMgIAuQgIAyAHgFIgyBSQhHB9gKAVQgLAUgnA/g");
	this.shape.setTransform(9.6,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzCiQAzhgAag/QAohagUgYIAFg3IAGgxQAXgIglgbQA/AEgMA1QAHAHgFACQgBAOgHArQgIAtAGABQgGAXgiA9IhUCZIg7BfQAhg4ANghg");
	this.shape_1.setTransform(8.6,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9C6QAphMAfhEQAqhcgIghQAAgTAEgiQAFgiABgRQATgGgdgWQAygKgZAmQAPAMgKAEIgHA2QgHAqAEAHQAAAVggBAQg3BugeAyIgaApQAMgVAFgLg");
	this.shape_2.setTransform(9.7,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBDIASghIAshTQAuhdACgsQAIATgeBGQgmBNggA2IgXAuQgIARhCBaIBPh4g");
	this.shape_3.setTransform(5.9,35.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYCEQAwhPAqhcQAchJgPgRQAAgTAEghQAFgiABgRQATgHgdgWQAygKgZAnQAPALgKAEIgHA3QgHAqAEAGQgNA2gwBbIg/B1QgFAKhSBqIBYiEg");
	this.shape_4.setTransform(6.3,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYCFQA6heAhhUQAbhMgXgQIAFg2IAGgxQAXgIglgbQA/AEgMA1QAHAHgFACQgBAOgHArQgIAtAGABQgYBAgzBbQgvBXgKAQQgDAChiB6IBiiPg");
	this.shape_5.setTransform(6.1,29.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZCGQBEhsAZhNQAZhOgegOIAHg5IAEgvQAdgJgtghQBLATAABEIAAACQgBAMgIAuQgIAyAIgFQgjBJg2BcQg1BdAAgFQAAgFhyCLg");
	this.shape_6.setTransform(5.9,29);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYCFQA9hiAehSQAbhNgagPIAGg3IAFgwQAagJgogdQBDAKgJA6QAFAEgDACQgBANgHAsQgIAwAHgCQgcBDg0BbQgxBagHAIQgCAAhnCAIBliUg");
	this.shape_7.setTransform(6,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYCFQA3hZAjhXQAchLgUgQQABgXAEgfIAFgyQAXgHgjgaQA6AAgQAxQAJAIgGADQgBANgHAqQgHAtAFADQgUA8gyBbQguBVgNAWIhhB6IBfiLg");
	this.shape_8.setTransform(6.2,29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZCGQAqhFAuhhQAehHgKgSQgCgPAFgkQAGgkABgRQAIgDgDgGQAMALgKAEIgHA1QgGAnACALQgFAvgvBbIhBB+QgIAPhGBfIBRh8gABcjvIACgCIgKgIQApgTgfAbIAEAHIgGgFg");
	this.shape_9.setTransform(6.6,28.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcCNQAeg7AhhEQAthbgBgoQgCgPAFgkQAGgkABgRQAIgDgDgGQAMALgKAEIgHA1QgGAnACALQAGATgfBFQg0BmgjA8IgBADIgFAJQgJAUg8BTIBKhwgABYjrIACgBIgKgJQApgTgfAcIAEAGIgGgFg");
	this.shape_10.setTransform(7,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0CnQAwhbAbg/QAphbgQgcQABgWAEggIAGgxQAWgIgjgaQA7AAgRAxQAKAIgGADQgBAOgHAqQgHAsAFADQgFAVghA/Qg9BzgXAoIg1BUQAegyALgag");
	this.shape_11.setTransform(8.7,26.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2ClQA2hnAYg7QAmhcgXgVIAGg3IAFgwQAagIgogdQBDAJgJA6QAFAFgDACQgBANgHArQgIAwAHgCQgKAYgiA8IhTCWQgPAbgpBBQAbgzAPgkg");
	this.shape_12.setTransform(8.9,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,50.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtpT1MAAAgnpIbTAAMAAAAnpg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.shape832 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image831, null, new cjs.Matrix2D(1,0,0,1,-15,-14)).s().p("AiVCMIAAkXIErAAIAAEXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-14,30,28);


(lib.shape829 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,0,0.353)","#FF9900","#FF3300","rgba(0,0,0,0)"],[0,0.286,0.447,1],0,0,0,0,0,29.5).s().p("AjQDQQhWhWgBh6QABh5BWhXQBXhWB5gBQB6ABBWBWQBYBXAAB5QAAB6hYBWQhWBYh6AAQh5AAhXhYg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.6,-29.6,59.2,59.2);


(lib.shape51 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image50, null, new cjs.Matrix2D(0.994,0,0,1.477,-178.7,-106)).s().p("EgrsAQVMAAAggQIAfAEQCMARA4AKIDogSQARADAvgFIAwgHICTgMQAbAHAtgPQARgFAVgEIB3AAIAZAPQAmAWAZAAQAQAAA8gGICJgKIBRgEIBGAHQA+AHAHAAIDyAEQAIAAAwgGQAwgHAHAAIEbgLQAvAAA5APQA6AOA4AAQCtgOAPAAQApABAgARQAfASAaAAQB6AAAjgJQAVgLATgEICXgMQAJgDAPABIC6AXQB5AAAgAFQAfAFAMgBIDjgSIEcgTQBVgFAwAAICtAXQAoAABBgLIBJgLICcgNQAYABB3AVQB1AVAoAAIDDgOQAWABBmgIQBygJA+AAQAJgBANADIATACICygPIANgEIAVAAMAAAAgpg");
	this.shape.setTransform(-158.6,456.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.image50, null, new cjs.Matrix2D(0.994,0,0,1.477,-178.7,-106)).s().p("EgrsAQVMAAAggRIAfAFQCMARA4AKIDogSQARADAvgFIAwgHICTgMQAbAGAtgOQARgFAUgEIB4AAIAZAPQAmAWAZAAQAQAAA8gGICJgKIBRgEIBGAHQA+AHAHAAIDyAEQAIAAAwgGQAwgHAHAAIEbgLQAvAAA5APQA6AOA4AAQCtgOAPAAQApABAgARQAfASAaAAQB6AAAjgJQAVgLATgEICXgMQAJgCAPAAIC6AXQB5AAAgAFQAfAFAMgBIDjgSIEcgTQBVgFAwAAICtAXQAoAABBgLIBJgLICcgNQAYABB3AVQB1AVAoAAIDDgPQAWACBmgIQBygJA+AAQAJAAAOACIARACICzgPIANgEIAVAAMAAAAgpg");
	this.shape_1.setTransform(-159,55.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-438.8,-49,560,610.2);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.text = new cjs.Text("15.3", "28px 'Intro Book Caps'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.setTransform(172.6,66.6);

	this.text_1 = new cjs.Text("18.2", "28px 'Intro Book Caps'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 30;
	this.text_1.setTransform(172.6,0);

	this.text_2 = new cjs.Text("8.1", "28px 'Intro Book Caps'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 30;
	this.text_2.setTransform(172.6,353.8);

	this.text_3 = new cjs.Text("9.3", "28px 'Intro Book Caps'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 30;
	this.text_3.setTransform(172.6,282.8);

	this.text_4 = new cjs.Text("11.8", "28px 'Intro Book Caps'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 30;
	this.text_4.setTransform(172.6,209.3);

	this.text_5 = new cjs.Text("12.3", "28px 'Intro Book Caps'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 30;
	this.text_5.setTransform(172.6,142.8);

	this.instance = new lib.Символ47();
	this.instance.setTransform(109.3,386.1,0.951,1,0,0,0,31.5,18);

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(110.2,317.6,0.951,1,0,0,0,31.5,18);

	this.instance_2 = new lib.Символ47();
	this.instance_2.setTransform(109.3,243.1,0.951,1,0,0,0,31.5,18);

	this.instance_3 = new lib.Символ47();
	this.instance_3.setTransform(110.2,174.6,0.951,1,0,0,0,31.5,18);

	this.instance_4 = new lib.Символ47();
	this.instance_4.setTransform(109.3,100.1,0.951,1,0,0,0,31.5,18);

	this.instance_5 = new lib.Символ47();
	this.instance_5.setTransform(110.2,31.5,0.951,1,0,0,0,31.5,18);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAAAgh0MAAABDp");
	this.shape.setTransform(79.3,216.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAAAghqMAAABDV");
	this.shape_1.setTransform(65.1,215.5);

	this.addChild(this.shape_1,this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(64.1,-1.5,138.2,436.1);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shape51("synched",0);
	this.instance.setTransform(438.8,49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,560,610.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		
		{
		
		    _first = true;
		
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		} 
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(10.7,0,1,1,0,0,0,11.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9.5},9,cjs.Ease.get(-1)).to({y:20},10,cjs.Ease.get(1)).to({y:10},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1,24.5,2);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 5
	this.instance = new lib.Символ32();
	this.instance.setTransform(146.6,-12.5,1,1,0,0,0,17.1,13.3);

	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-136.4,11.3,1,1,0,0,0,17.1,13.3);

	// Слой 4
	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(142.4,6,1,1,0,0,0,18.8,6);

	this.instance_3 = new lib.Символ31();
	this.instance_3.setTransform(-135.2,-6,1,1,0,0,0,18.8,6);

	// Слой 6
	this.instance_4 = new lib.Символ34();
	this.instance_4.setTransform(0.2,72.5,1,1,0,0,0,11.2,0);

	this.instance_5 = new lib.Символ34();
	this.instance_5.setTransform(0.2,-94,1,1,0,0,0,11.2,0);

	// Слой 3
	this.instance_6 = new lib.Символ33();
	this.instance_6.setTransform(0,0,1,1,0,0,0,0,102.5);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAVgUQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJgAHvAAIUeAAA8MAAIUUAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgUAUQgJgIABgMQgBgLAJgJQAJgJALABQAMgBAIAJQAJAJAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(2,1,1).p("AGomnQCwCwAAD3QAAD4iwCwQiwCwj4AAQj3AAiwiwQiwiwAAj4QAAj3CwiwQCwiwD3AAQD4AACwCwg");

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-181.5,-103.5,363.1,207.1);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(21.4,10.3,0.422,0.542,0,64.6,25.7,41.4,11.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.9,20.6);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(184.2,89,0.854,0.797,0,-45.8,-22.8,33,32.9);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,5);

	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(195.9,90.5,0.593,0.553,0,-45.8,-22.8,60,59.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(35.5,29.7,212,102);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.setTransform(39,46.8,1,1,0,0,0,33.5,31);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(43,44.1,1,1,0,0,0,43,44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.1,88.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.setTransform(67,84,1,1,0,0,0,55.7,56.8);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(64.7,78.1,1,1,0,0,0,64.7,78.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129.4,156.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.setTransform(197,134.8,1,1,0,0,0,69.5,46.8);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(143.3,117.9,1,1,0,0,0,143.3,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117.6,83.8,169.1,152.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ50();
	this.instance.setTransform(79.1,64.3,1,1,0,0,0,58.1,39.1);
	this.instance.alpha = 0.352;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(68.8,59.9,1,1,0,0,0,68.8,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.7,119.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bt1.addEventListener("click", fl_ClickToGoToWebPage);
		
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.bt2.addEventListener("click", fl_ClickToGoToWebPage);
		
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.bt3.addEventListener("click", fl_ClickToGoToWebPage);
		
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		this.bt4.addEventListener("click", fl_ClickToGoToWebPage);
		
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.bt4 = new lib.Символ24();
	this.bt4.setTransform(378.3,65.3,1,1,0,0,0,43,44.1);
	new cjs.ButtonHelper(this.bt4, 0, 1, 1);

	this.bt3 = new lib.Символ23();
	this.bt3.setTransform(302.3,78.6,1,1,0,0,0,64.7,78.1);
	new cjs.ButtonHelper(this.bt3, 0, 1, 1);

	this.bt2 = new lib.Символ22();
	this.bt2.setTransform(143.3,117.9,1,1,0,0,0,143.3,117.9);
	new cjs.ButtonHelper(this.bt2, 0, 1, 1);

	this.bt1 = new lib.Символ21();
	this.bt1.setTransform(70.2,176,1,1,0,0,0,68.8,59.9);
	new cjs.ButtonHelper(this.bt1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.podvod, null, new cjs.Matrix2D(0.664,0,0,0.664,-378.9,-48.3)).s().p("AGwFPIAACAIiFATQBHg7A+hYgAjtlVQhWhehsguINfAAIAAEdQgogagzgUQiZg7iiAwQhfAehgAjQgghOgohLg");
	this.shape.setTransform(378.9,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.bt1},{t:this.bt2},{t:this.bt3},{t:this.bt4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0,420.8,235.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(211.1,117.9,1,1,0,0,0,211.1,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:120.4},29).to({y:117.9},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0,420.8,235.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(-3.9,24.8,1,1.141,34.2,0,0,9.6,25.3);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(10.5,30.2,1,1.141,-4.2,0,0,9.5,25.2);

	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(9.6,25.2,1,1,0,0,0,9.6,25.2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28,-4.4,50.5,64.1);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ11();
	this.instance.setTransform(351.7,83.7,0.373,0.335,-7.2,0,0,158.1,63.9);
	this.instance.filters = [new cjs.BlurFilter(5, 5, 1)];
	this.instance.cache(-2,-2,320,132);

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/cPYQgdiMgMgnIg7ivQgnh0AAgJQAAitHxkgQCkhdEWiNIGcjSQBrg4F6ivQE6iRB3hNQCzh0D4g2QA7gNCUgZQCDgWBKgTIAAgCII6AAQAzAQBJAbQBMAVCeANQBPAFAsAjQAkAaASAyQAJAZArBpQAmBlAAArQAAA+gKAYQgeBIhrABQgNgBgFgGQgjAJhbAfQipA6hzBAQgtAYgrAgIhCAyQhNA1iVAhQhIAQiHBNQiABHhQAMQjtAlhjAVQi1Aog6A0Qh6BpjkBcQjBBNkCA/QhaAWiDBAQiZBLhEAYQg4ATijBUQiEBFgsABQgOgBgGgGQgnAMhaAXIjpA2QgiAIg8BAQgeAfgYAeQgYAAgbh5g");
	mask.setTransform(208.8,107);

	// Слой 1
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(211.1,117.9,1,1,0,0,0,211.1,117.9);

	this.instance_1.mask = mask;

	// Слой 2
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(400.2,70.9,1,1,0,0,0,5.9,29);
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_2.cache(-30,-6,55,68);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,0,420.9,217.5);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4aRRQkugDhYiLQgggxgGhGQgCgOAAhcQAAhmAPg7QANg3Akg4QAMgUBRhtQBNhqBFhsQBMh7EJi2QChhyExi2QGIjrLHjBQHxiGGjg+IAAgCIJdAAQAWARAvAwQApApAtAdQAUANB8AiQBsAdAWAhQA7BUAQA5QAMAoAABXQAAAugoAyQg2BDheAAQgUAAgfgJQgegKgEAAQgbAAgaAPQgZAOg3gCQgaAViFBXQh6BRgiAgQg+A8iPA8QiRA9gKAJQhlBYj6BgQkqBsiRA/IhnAnQg7AVgdAXQhCAzhBAFQhVAFhGAgQgVAJhCApQg9AmgoAPQgNAFh8AiQhsAcgXAOQhGAshDBEIhtBwQiICBjrAvg");
	mask.setTransform(225.8,90);

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(228.4,109.9,1,1,0,0,0,228.4,109.9);

	this.instance.mask = mask;

	// Слой 3
	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(375.1,31.4,1.257,1.062,0,111.5,-88.2,5.9,29);
	this.instance_1.alpha = 0.648;
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-30,-6,55,68);

	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(412.1,54.4,1,1.062,0,19.7,0,5.9,29);
	this.instance_2.alpha = 0.648;
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_2.cache(-30,-6,55,68);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(26.5,-2.7,425.1,203.2);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(160.8,27.5,1,1,0,0,0,160.8,27.5);

	// Слой 2
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(165.3,48.9,1,1,0,0,0,611.2,64.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-445.9,-16,1222.5,129.9);


(lib.sprite833 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape832("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-14,30,28);


(lib.sprite830 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shape829("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.6,-29.6,59.2,59.2);


(lib.sprite52 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(-159.6,255.5,1,1,0,0,0,279.8,104.5);

	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(-159,55.5,1,1,0,0,0,279.8,104.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-439.4,-49,560.6,810.2);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(71.5,635.7,1,1,0,0,0,71.5,203.6);

	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(71.5,203.6,1,1,0,0,0,71.5,203.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(64.1,-1.5,138.2,868.2);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(-553.8,-161.6,0.662,0.662,0,0,0,71.6,432.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:123.4},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-558.8,-449.1,91.6,575);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(201.9,109.9,1,1,0,0,0,228.4,109.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:216.5,y:102.6},19,cjs.Ease.get(-1)).to({x:231.9,y:94.9},20,cjs.Ease.get(1)).to({x:216.9,y:102.4},20,cjs.Ease.get(-1)).to({x:201.9,y:109.9},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-20.5,456.9,240.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sprite52();
	this.instance.setTransform(128,253.3,1,1.499,178.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:137.2,y:553},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.4,-900.6,596.3,1231);


(lib.sprite834 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sprite833();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-14,30,28);


(lib.sprite53 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-85.1,22,1,1,0,0,0,284.4,165.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-396.9,-1043.8,596.3,1231);


(lib.sprite835 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		
		{
		
		    _first = true;
		
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		} 
		
		*/
	}
	this.frame_36 = function() {
		/* stop ();
		this.removeMovieClip();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36).call(this.frame_36).wait(1));

	// Layer 1
	this.instance = new lib.sprite834();
	this.instance.setTransform(0,0,0.367,0.367);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.55,scaleY:0.55,x:12.6},7).to({scaleX:0.58,scaleY:0.58,x:15.2},2).to({scaleX:0.78,scaleY:0.78,x:24.9,alpha:0.531},6).to({scaleX:0.91,scaleY:0.91,x:31.6,alpha:0.211},6).to({scaleX:0.97,scaleY:0.97,x:34.3,alpha:0.07},4).to({scaleX:0.98,scaleY:0.98,x:34.8,alpha:0.051},1).to({scaleX:0.99,scaleY:0.99,x:35.1,alpha:0.031},1).to({scaleX:1,scaleY:1,x:35.7,alpha:0.012},2).to({scaleX:1,scaleY:1,x:35.8,alpha:0},2).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.1,11,10.3);


(lib.sprite60 = function() {
	this.initialize();

	// Mask Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAFSAhxQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgEgxxAhDQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEABAAhCQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAdoAgbQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBDAAAvgjIAAAAQgQgTgGgWIAAAAIATARIASAMIAAAAIAIgIIgDALIAAAAQApAWA1AAIAAAAQA0AAApgVIAAAAQgLgQgGgRIAAAAIAUARIAKAIIAAAAIALgIIAAAAIAUgSQgFASgLAQIAAAAQAoAVA0AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgFgEIAAAAQgJAOgOANIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAN1AgbQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEg2DAgVQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEA09AgUQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAZIAAAAQgqAkg6AAIAAAAQg7AAgpgkgEAtXAgUQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgA5bftQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBDAAAwgjIAAAAQgQgTgHgXIAAAAIATASIASAMIAAAAIAIgIIgDAKIAAAAQApAXA1AAIAAAAQA0AAApgWIAAAAQgLgPgFgSIAAAAIATASIALAHIAAAAIAKgHIAAAAIAUgSQgFASgLAQIAAAAQAoAVA0AAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgEgEIAAAAQgKAOgOAMIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgpOAftQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgAiGfmQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAIAIAAIAAAAQgbgZgJgfIAAAAIATASQAdAWAiAJIAAAAQAigJAbgVIAAAAIAUgSQgJAegZAYIAAAAIAFAAIAAAAQA4AAAqgZIAAAAQgJgOgFgQIAAAAIAUASIAGAFIAAAAIAHgFIAAAAIAUgSQgFAQgJAOIAAAAQAqAZA4AAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAIgKgKIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQgcAAgYgJIAAAAQgYAKgeAAIAAAAQg7AAgpglgApsfmQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgASHflQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgAKCflQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgAWsfZQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAxWAe/IgLgLIAAAAQgMABgNAAIAAAAQg7AAgqgkIAAAAQgbgZgJgfIAAAAIATARQAxAlBFAAIAAAAIACAAIAAAAIgCgIIAAAAIAIAIQA/gCAtgjIAAAAIAUgSQgJAggcAZIAAAAQgVASgaAKIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgk8Ae4QgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEgtBAe4QgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CAe4IgKgLIAAAAIgLALIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQA4AAArgYIAAAAQgKgOgEgQIAAAAIATARIAHAFIAAAAIAGgFIAAAAIAUgSQgEARgKAOIAAAAQAqAYA4AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEggXAesQgbgYgJggIAAAAIATASQAxAkBFAAIAAAAQBEAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgEAn8AenQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAhMAenQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQArAAAigOIAAAAQgfgJgZgWIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAIAHgBIAAAAIAJgIIgCAIIAAAAQA7gDAsghIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAIgLgBIAAAAIgKAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgAc6enQgbgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQg6AAgqglIAAAAQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAIAAAAIAAAAQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgqglgAlseSIgMgMIAAAAQgMACgNAAIAAAAQg7AAgpglIAAAAQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAIADAAIAAAAIgDgIIAAAAIAJAIQA+gDAtgiIAAAAIAVgSQgKAggcAYIAAAAQgVATgZAJIAAAAQAlARAvAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgAQNeIQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAIWeIQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgAvHd6QgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgbAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgA13d6QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQArAAAigOIAAAAQgfgJgZgWIAAAAQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAIAHAAIAAAAIAJgIIgCAIIAAAAQA7gEAsghIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAIgKAAIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgA6Id6QgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQg6AAgpglIAAAAQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAIAAAAIAAAAQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAD2d5QgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAPgOQgkgIgcgZIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQgRAAgQgDIAAAAQgKAdgZAWIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgm2AdbQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEgutAdbQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgEgzNAdMQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAPgNQgkgIgcgZIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQgRAAgQgDIAAAAQgKAcgZAXIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAanc7QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgATec7QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAOEcrQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgA8ccNQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgjlAcNQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgo/Ab+QgbgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgqgkgEA0uAbeQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgAYebeQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQA+AAAtgdIAAAAQgUgVgHgaIAAAAIATARQAMAJANAHIAAAAIANgMIgFAQIAAAAQAlARAvAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg5AAgogiIAAAAQgIAKgLAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqTAbOQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAiVawQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBDAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg5AAIAAAAQg6AAgqglgA+kawQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQA9AAAtgeIAAAAQgUgVgHgaIAAAAIATASQAMAJANAHIAAAAIANgMIgFAPIAAAAQAlASAvAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg4AAgpgjIAAAAQgIALgLAJIAAAAQgpAlg6AAIAAAAQg7AAgpglgAswahQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAHvaZQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIARgPQgWgJgSgQIAAAAQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgpAlg6AAIAAAAQgfAAgbgLIAAAAQgKAdgZAXIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAw4AaDQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgADBaDQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAmyAaBQgagYgKgeIAAAAIgJAAIAAAAQg7AAgpglIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgmAigzADIAAAAIARAPQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgPIgFAAIAAAAQg7AAgpglIAAAAQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAIgFAEIAAAAIAGAFQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgTgRgKgVIAAAAQgjAagvACIAAAAQgJAegbAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgvUAZsQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAQgOQgWgJgSgQIAAAAQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAZIAAAAQgqAkg6AAIAAAAQgfAAgbgKIAAAAQgJAdgaAXIAAAAQgpAkg7AAIAAAAQg7AAgpgkgAbXZqQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAmLZWQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CAZWQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAwRZTQgagXgKgeIAAAAIgJAAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQglAhg0AEIAAAAIARAPQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgPIgFAAIAAAAQg7AAgpglIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAIgEAEIAAAAIAFAFQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglIAAAAQgUgRgKgVIAAAAQgjAagvACIAAAAQgJAegbAXIAAAAQgpAlg7AAIAAAAQg6AAgqglgA7sY9QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgASHYmQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAHgGQgogHgfgbIAAAAQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAIgUgCIAAAAQgLAYgWATIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAyyAYPQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgk8AX5QgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAHgGQgogHgfgcIAAAAQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAIgUgBIAAAAQgLAYgVATIAAAAQgqAlg6AAIAAAAQg7AAgpglgAkQXhQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAtFAXYQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAg2AXJQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAnxAWtQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAJcWtQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAPgNQg5gBgogkIAAAAQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAZIAAAAQgoAkg6ABIAAAAQgKAcgZAXIAAAAQgqAlg6AAIAAAAQg7AAgpglgAp+WqQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgA2NWcQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAvSWAQgbgZgJgfIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgTQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgtnAWAQgbgZgKgfIAAAAIAUASQAwAkBFAAIAAAAQBEAAAxgkIAAAAIAPgOQg6gBgogkIAAAAQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQgJAdgaAXIAAAAQgpAlg7AAIAAAAQg7AAgpglgAQgVrQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAvYAVVQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAg2AVVIgLgMIAAAAQgNACgNAAIAAAAQgiAAgdgNIAAAAQgIAMgMALIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAQgZgWgJgcIAAAAIgEADIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgIAcgXAXIAAAAIAPANQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgGgLgKIAAAAQgbgYgJggIAAAAIATASQAeAXAmAIIAAAAIADgDIgBAEIAAAAQAWAFAZAAIAAAAIADAAIAAAAIgCgIIAAAAIAIAIQA/gDAtgiIAAAAIAUgSQgJAggcAYIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAgPVGQgcgYgJgfIAAAAIATARQAvAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgnglgEgmjAU+QgbgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgqgkgEAqTAUvQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAEZUvQgSgRgKgTIAAAAQgLABgMAAIAAAAQg7AAgpglIAAAAQgQgOgKgRIAAAAQgfAQgmAAIAAAAQg5AAgpglIAAAAQgUgSgLgVIAAAAQgSAEgVAAIAAAAQg6AAgqglIAAAAQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIASgSQgHAggcAYIAAAAQgXAVgcAJIAAAAIADAEQAxAlBDAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgbAZIAAAAQgKAJgLAGIAAAAQAwAkBEAAIAAAAQBEAAAwglIAAAAIAVgSQg7AAgpglIAAAAQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAIAAAAIAAAAQgKAggbAYIAAAAQgdAaglAIIAAAAQAxAkBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAnrUnQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgA2NUnIgLgLIAAAAQgMACgNAAIAAAAQgjAAgcgNIAAAAQgJAMgMAKIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgYgWgKgbIAAAAIgEADIAAAAQgpAlg6AAIAAAAQg7AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAkBFAAIAAAAQBEAAAwgkIAAAAIAUgSQgIAcgXAXIAAAAIAPANQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgHgLgJIAAAAQgbgYgJggIAAAAIATASQAeAWAmAJIAAAAIADgDIgBAEIAAAAQAWAEAaAAIAAAAIACAAIAAAAIgCgHIAAAAIAIAHQA/gCAtgiIAAAAIAUgSQgJAfgcAZIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg3UAUZQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgAswUBQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgyqAUBQgSgQgKgUIAAAAQgLACgMAAIAAAAQg7AAgpglIAAAAQgQgOgKgRIAAAAQgfAPgmAAIAAAAQg7AAgpgkIAAAAQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgKAIgLAHIAAAAQAwAkBEAAIAAAAQBEAAAxglIAAAAIAUgSQg7AAgpglIAAAAQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAIAAAAIAAAAQgJAfgcAZIAAAAQgdAZgkAIIAAAAQAwAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgqglgAMhT4QgYgVgKgbIAAAAIgDAAIAAAAQg7AAgpglIAAAAQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQAvAAAlgRIAAAAQgagJgVgTIAAAAQgbgZgKgfIAAAAIAUARQAtAjA/ACIAAAAIAJgIIgDAIIAAAAIADAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQgNAAgMgCIAAAAIgMALIAAAAQgmAig1ADIAAAAIALAJQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAuJATnQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAloATnQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAUyTSQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgqiATKQgYgVgKgaIAAAAIgDAAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAkBEAAIAAAAQAvAAAlgRIAAAAQgagJgVgTIAAAAQgbgYgJgfIAAAAIATARQAtAiA/ADIAAAAIAJgIIgDAIIAAAAIADAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQgNAAgMgCIAAAAIgMAMIAAAAQgmAig1ACIAAAAIALAKQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAhMATJQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAo6S6QgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAxaS6QgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEgiRASkQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgA13ScQgbgYgJggIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAzaASZQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqrASMQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAZIAAAAQgqAkg6AAIAAAAQg7AAgpgkgAdoR1QgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAYIR1QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAsYReQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgA5bRHQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgA+7RHQgbgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgqglgAFSQhQgbgYgKggIAAAAIAUASQAwAkBFAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgxxAPzQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgABAPyQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAdoPLQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBDAAAvgjIAAAAQgQgTgGgXIAAAAIATASIASALIAAAAIAIgHIgDAKIAAAAQApAWA1AAIAAAAQA0AAApgVIAAAAQgLgPgGgSIAAAAIAUASIAKAHIAAAAIALgHIAAAAIAUgTQgFATgLAPIAAAAQAoAVA0AAIAAAAQBFAAAwgkIAAAAIAUgTQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgFgFIAAAAQgJAPgOAMIAAAAQgpAlg7AAIAAAAQg6AAgqglgAN1PLQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEg2DAPFQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEA09APEQgcgYgJggIAAAAIAUASQAwAkBFAAIAAAAQBEAAAwgkIAAAAIAVgSQgKAfgbAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAtXAPEQgbgYgKggIAAAAIAUASQAwAkBFAAIAAAAQBEAAAxgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgA5bOeQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBDAAAwgjIAAAAQgQgTgHgWIAAAAIATARIASAMIAAAAIAIgIIgDALIAAAAQApAWA1AAIAAAAQA0AAApgVIAAAAQgLgQgFgRIAAAAIATARIALAIIAAAAIAKgIIAAAAIAUgSQgFASgLAQIAAAAQAoAVA0AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgEgEIAAAAQgKAOgOANIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgpOAOeQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgAiGOWQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAIAIAAIAAAAQgbgYgJgfIAAAAIATARQAdAWAiAJIAAAAQAigJAbgVIAAAAIAUgSQgJAegZAYIAAAAIAFAAIAAAAQA4AAAqgZIAAAAQgJgOgFgPIAAAAIAUARIAGAFIAAAAIAHgFIAAAAIAUgSQgFAQgJAPIAAAAQAqAYA4AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAIgKgKIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQgcAAgYgIIAAAAQgYAJgeAAIAAAAQg7AAgpglgApsOWQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgASHOVQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAKCOVQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgAWsOKQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEAxWANvIgLgLIAAAAQgMACgNAAIAAAAQg7AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAkBFAAIAAAAIACAAIAAAAIgCgHIAAAAIAIAHQA/gCAtgiIAAAAIAUgSQgJAfgcAZIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgk8ANoQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEgtBANoQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CANoIgKgKIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQA4AAArgZIAAAAQgKgOgEgQIAAAAIATASIAHAEIAAAAIAGgEIAAAAIAUgSQgEAQgKAOIAAAAQAqAZA4AAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEggXANcQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgqglgEAn8ANYQgcgZgJgfIAAAAIATASQAxAkBFAAIAAAAQBEAAAwgkIAAAAIAVgTQgKAggcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAhMANYQgbgZgJgfIAAAAIATASQAxAkBEAAIAAAAQArAAAigOIAAAAQgfgJgZgWIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAIAHAAIAAAAIAJgJIgCAJIAAAAQA7gEAsghIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAIgLAAIAAAAIgKAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgAc6NYQgbgZgJgfIAAAAIATASQAxAkBFAAIAAAAQBEAAAwgkIAAAAIAUgSQg6AAgqglIAAAAQgbgZgJgfIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgTQgJAggcAZIAAAAQgpAlg7AAIAAAAIAAAAIAAAAQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgAlsNCIgMgLIAAAAQgMABgNAAIAAAAQg7AAgpglIAAAAQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAIADAAIAAAAIgDgIIAAAAIAJAIQA+gCAtgjIAAAAIAVgSQgKAggcAYIAAAAQgVATgZAKIAAAAQAlARAvAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgAQNM4QgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAIWM4QgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgAvHMqQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgA13MqQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQArAAAigOIAAAAQgfgJgZgWIAAAAQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAIAHgBIAAAAIAJgIIgCAIIAAAAQA7gDAsghIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAIgKgBIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgA6IMqQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQg6AAgpglIAAAAQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAIAAAAIAAAAQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAD2MpQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAPgNQgkgIgcgZIAAAAQgbgZgKgfIAAAAIAUASQAwAkBFAAIAAAAQBEAAAxgkIAAAAIAUgTQgJAggcAZIAAAAQgpAlg7AAIAAAAQgRAAgQgDIAAAAQgKAcgZAWIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgm2AMLQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgutAMLQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgzNAL8QgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAPgOQgkgIgcgZIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQgRAAgQgDIAAAAQgKAcgZAXIAAAAQgpAlg7AAIAAAAQg6AAgqglgAanLrQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgATeLrQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAOELbQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgA8cK+QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgjlAK+QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgo/AKuQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgEA0uAKOQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgAYeKOQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQA+AAAtgeIAAAAQgUgVgHgaIAAAAIATASQAMAJANAHIAAAAIANgMIgFAPIAAAAQAlARAvAAIAAAAQBFAAAwgkIAAAAIAUgTQgJAggcAZIAAAAQgpAlg7AAIAAAAQg5AAgogjIAAAAQgIALgLAJIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqTAJ+QgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAiVJhQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBDAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg5AAIAAAAQg6AAgqglgA+kJhQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQA9AAAtgdIAAAAQgUgVgHgaIAAAAIATARQAMAJANAHIAAAAIANgMIgFAQIAAAAQAlARAvAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg4AAgpgiIAAAAQgIAKgLAKIAAAAQgpAlg6AAIAAAAQg7AAgpglgAswJRQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAHvJJQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIARgOQgWgJgSgRIAAAAQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQgfAAgbgKIAAAAQgKAdgZAWIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAw4AI0QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgADBI0QgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAmyAIxQgagYgKgeIAAAAIgJABIAAAAQg7AAgpglIAAAAQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgmAhgzADIAAAAIARAQQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgQIgFABIAAAAQg7AAgpglIAAAAQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAZIAAAAIgFADIAAAAIAGAGQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgTgSgKgUIAAAAQgjAZgvACIAAAAQgJAegbAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgvUAIcQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAQgPQgWgJgSgQIAAAAQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQgfAAgbgLIAAAAQgJAdgaAXIAAAAQgpAlg7AAIAAAAQg7AAgpglgAbXIbQgbgZgJgfIAAAAIATASQAwAkBFAAIAAAAQBFAAAwgkIAAAAIAUgTQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAmLIGQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CAIGQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAwRIEQgagYgKgeIAAAAIgJAAIAAAAQg6AAgqglIAAAAQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQglAig0ADIAAAAIARAPQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgPIgFAAIAAAAQg7AAgpglIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAIgEAEIAAAAIAFAFQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglIAAAAQgUgRgKgVIAAAAQgjAagvACIAAAAQgJAegbAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgA7sHtQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgASHHXQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAHgGQgogHgfgbIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAIgUgBIAAAAQgLAXgWAUIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAyyAG/QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgk8AGpQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAHgGQgogHgfgbIAAAAQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAIgUgCIAAAAQgKAYgWATIAAAAQgqAlg6AAIAAAAQg7AAgpglgAkQGSQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAtFAGIQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAg2AF6QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEAnxAFdQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAJcFdQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAPgNQg5gBgogkIAAAAQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgoAkg6ABIAAAAQgKAdgZAWIAAAAQgqAlg6AAIAAAAQg7AAgpglgAp+FbQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgA2NFMQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAvSEwQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgtnAEwQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAPgNQg6gBgogkIAAAAQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6ABIAAAAQgJAcgaAXIAAAAQgpAlg7AAIAAAAQg7AAgpglgAQgEbQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAvYAEFQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAg2AEFIgLgLIAAAAQgNABgNAAIAAAAQgiAAgdgMIAAAAQgIALgMALIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAQgZgWgJgcIAAAAIgEAEIAAAAQgpAkg7AAIAAAAQg6AAgqgkIAAAAQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgIAdgXAWIAAAAIAPAOQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgHgLgJIAAAAQgbgZgJgfIAAAAIATARQAeAXAmAJIAAAAIADgDIgBADIAAAAQAWAFAZAAIAAAAIADAAIAAAAIgCgIIAAAAIAIAIQA/gCAtgjIAAAAIAUgSQgJAggcAZIAAAAQgVASgaAKIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAgPD3QgcgZgJgfIAAAAIATARQAvAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgngkgEgmjADuQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgEAqTADfQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAEZDfQgSgQgKgUIAAAAQgLACgMAAIAAAAQg7AAgpglIAAAAQgQgPgKgRIAAAAQgfAQgmAAIAAAAQg5AAgpglIAAAAQgUgRgLgWIAAAAQgSAFgVAAIAAAAQg6AAgqglIAAAAQgbgZgJgdIAAAAIATARQAxAjBEAAIAAAAQBFAAAwgjIAAAAIASgSQgHAegcAZIAAAAQgXAUgcAJIAAAAIADAEQAxAlBDAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAYIAAAAQgKAJgLAHIAAAAQAwAjBEAAIAAAAQBEAAAwglIAAAAIAVgRQg7gBgpgkIAAAAQgcgZgJgfIAAAAQgdAOglAAIAAAAQg6AAgqgjIAAAAQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgQAOgSAHIAAAAIATARQAxAlBFAAIAAAAIAWgBIAAAAQgcgJgXgUIAAAAQgbgZgKgdIAAAAIAUASQAwAiBFAAIAAAAQAXAAAVgEIAAAAIABgBIAAAAIAVgSIgGAPIAAAAQAfgJAagRIAAAAIAUgTQgJAegcAZIAAAAQggAdgrAGIAAAAQgoAig4AAIAAAAIAAAAIAAAAQgKAfgbAZIAAAAQgdAZglAIIAAAAQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAnrDYQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgA2NDYIgLgMIAAAAQgMACgNAAIAAAAQgjAAgcgNIAAAAQgJAMgMALIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgYgWgKgcIAAAAIgEADIAAAAQgpAlg6AAIAAAAQg7AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgIAcgXAXIAAAAIAPANQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgHgLgJIAAAAQgbgYgJggIAAAAIATASQAeAXAmAIIAAAAIADgDIgBAEIAAAAQAWAFAaAAIAAAAIACAAIAAAAIgCgIIAAAAIAIAIQA/gDAtgiIAAAAIAUgSQgJAggcAYIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg3UADJQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAswCyQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgyqACyQgSgRgKgTIAAAAQgLABgMAAIAAAAQg7AAgpglIAAAAQgQgOgKgRIAAAAQgfAQgmAAIAAAAQg7AAgpglIAAAAQgbgYgKgeIAAAAIAUAQQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgQQgJAdgcAZIAAAAQgKAJgLAGIAAAAQAwAkBEAAIAAAAQBEAAAxglIAAAAIAUgSQg7AAgpglIAAAAQgcgWgJgfIAAAAQgdAOglAAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgPAOgTAJIAAAAIAUARQAwAjBFAAIAAAAIAWgBIAAAAQgcgJgXgTIAAAAQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQAYAAAVgEIAAAAIAAgBIAAAAIAVgSIgGAPIAAAAQAfgJAagUIAAAAIAUgSQgJAggcAYIAAAAQggAbgrAHIAAAAQgoAhg4AAIAAAAIAAAAIAAAAQgJAggcAYIAAAAQgdAagkAIIAAAAQAwAkBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgAMhCoQgYgVgKgbIAAAAIgDAAIAAAAQg7AAgpgkIAAAAQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQAvAAAlgRIAAAAQgagJgVgTIAAAAQgbgYgKgeIAAAAIAUARQAtAhA/ACIAAAAIAJgIIgDAJIAAAAIADAAIAAAAQBEAAAxgkIAAAAIAUgRQgJAdgcAZIAAAAQgpAlg7AAIAAAAQgNAAgMgCIAAAAIgMAMIAAAAQgmAig1ACIAAAAIALAKQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAuJACYQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAloACYQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAUyCCQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgqiAB7QgYgVgKgbIAAAAIgDAAIAAAAQg6AAgqglIAAAAQgbgYgJgeIAAAAIATAQQAxAlBEAAIAAAAQAvAAAlgRIAAAAQgagJgVgRIAAAAQgbgZgJgfIAAAAIATARQAtAjA/ACIAAAAIAJgIIgDAIIAAAAIADAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAjg7AAIAAAAQgNAAgMgCIAAAAIgMALIAAAAQgmAig1ADIAAAAIALAJQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAhMAB6QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAo6BqQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAxaBqQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgEgiRABVQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgA13BMQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAzaABJQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqrAA8QgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgAdoAlQgbgYgJgeIAAAAIATARQAwAkBFAAIAAAAQBFAAAwgkIAAAAIAUgRQgJAdgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAYIAlQgbgYgJgeIAAAAIATARQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgRQgJAdgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAsYAPQgbgXgKgfIAAAAIAUARQAwAjBFAAIAAAAQBEAAAxgjIAAAAIAUgSQgJAggcAXIAAAAQgpAkg7AAIAAAAQg7AAgpgkgA5bgGQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAjg7AAIAAAAQg6AAgqgjgA+7gGQgbgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAjg6AAIAAAAQg7AAgqgjgAdog5QgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBDAAAvgjIAAAAQgQgTgGgXIAAAAIATARIASAMIAAAAIAIgHIgDAKIAAAAQApAWA1AAIAAAAQA0AAApgVIAAAAQgLgPgGgSIAAAAIAUARIAKAIIAAAAIALgIIAAAAIAUgSQgFASgLAQIAAAAQAoAVA0AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgFgFIAAAAQgJAOgOANIAAAAQgpAlg7AAIAAAAQg6AAgqglgAN1g5QgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEA09gBAQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAtXgBAQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgA5bhmQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBDAAAwgjIAAAAQgQgTgHgWIAAAAIATARIASAMIAAAAIAIgIIgDALIAAAAQApAWA1AAIAAAAQA0AAApgVIAAAAQgLgQgFgRIAAAAIATARIALAIIAAAAIAKgIIAAAAIAUgSQgFASgLAQIAAAAQAoAVA0AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgEgEIAAAAQgKAOgOANIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEgpOgBmQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgAiGhuQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAIAIAAIAAAAQgbgYgJgfIAAAAIATARQAdAWAiAJIAAAAQAigJAbgVIAAAAIAUgSQgJAegZAYIAAAAIAFAAIAAAAQA4AAAqgZIAAAAQgJgOgFgPIAAAAIAUARIAGAFIAAAAIAHgFIAAAAIAUgSQgFAQgJAPIAAAAQAqAYA4AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAIgKgKIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQgcAAgYgJIAAAAQgYAKgeAAIAAAAQg7AAgpglgApshuQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgASHhvQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAKChvQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgAWsh7QgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAxWgCVIgLgLIAAAAQgMACgNAAIAAAAQg7AAgqglIAAAAQgbgZgJgfIAAAAIATASQAxAkBFAAIAAAAIACAAIAAAAIgCgHIAAAAIAIAHQA/gCAtgiIAAAAIAUgTQgJAggcAZIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgk8gCcQgcgYgJggIAAAAIAUASQAwAkBFAAIAAAAQBEAAAwgkIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEgtBgCcQgbgYgJggIAAAAIATASQAwAkBFAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CgCcIgKgKIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAkBEAAIAAAAQA4AAArgYIAAAAQgKgOgEgQIAAAAIATASIAHAEIAAAAIAGgEIAAAAIAUgSQgEAQgKAOIAAAAQAqAYA4AAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEggXgCoQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgEAn8gCsQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAhMgCsQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQArAAAigOIAAAAQgfgJgZgWIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAIAHAAIAAAAIAJgJIgCAIIAAAAQA7gDAsghIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAIgLAAIAAAAIgKAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgAc6isQgbgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgRQg6gBgqgkIAAAAQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAIAAAAIAAAAQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgAlsjCIgMgMIAAAAQgMACgNAAIAAAAQg7AAgpglIAAAAQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAIADAAIAAAAIgDgIIAAAAIAJAIQA+gCAtgjIAAAAIAVgSQgKAggcAYIAAAAQgVATgZAKIAAAAQAlARAvAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgAQNjMQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAIWjMQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgAvHjaQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgA13jaQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQArAAAigOIAAAAQgfgJgZgWIAAAAQgbgZgJgfIAAAAIATASQAwAkBFAAIAAAAIAHAAIAAAAIAJgIIgCAIIAAAAQA7gDAsghIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAIgKgBIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgA6IjaQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQg6AAgpglIAAAAQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAIAAAAIAAAAQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAD2jbQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAPgNQgkgIgcgZIAAAAQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQgRAAgQgEIAAAAQgKAdgZAWIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgm2gD5QgbgYgJggIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgutgD5QgbgYgKggIAAAAIAUASQAwAkBFAAIAAAAQBEAAAxgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgzNgEIQgbgZgJgfIAAAAIATASQAwAkBFAAIAAAAQBFAAAwgkIAAAAIAPgOQgkgIgcgZIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQgRAAgQgDIAAAAQgKAcgZAXIAAAAQgpAlg7AAIAAAAQg6AAgqglgAankZQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgATekZQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAOEkpQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgA8clGQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEgjlgFGQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEgo/gFWQgbgYgJggIAAAAIATASQAxAkBFAAIAAAAQBEAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgEA0ugF2QgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgAYel2QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQA+AAAtgeIAAAAQgUgVgHgaIAAAAIATARQAMAKANAGIAAAAIANgLIgFAPIAAAAQAlARAvAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg5AAgogjIAAAAQgIALgLAJIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqTgGGQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAiVmjQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBDAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg5AAIAAAAQg6AAgqgkgA+kmjQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQA9AAAtgeIAAAAQgUgVgHgZIAAAAIATARQAMAJANAHIAAAAIANgMIgFAQIAAAAQAlARAvAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg4AAgpgiIAAAAQgIAKgLAKIAAAAQgpAkg6AAIAAAAQg7AAgpgkgAswmzQgbgYgJggIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAHvm7QgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIARgOQgWgJgSgRIAAAAQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQgfAAgbgKIAAAAQgKAcgZAXIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAw4gHQQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgADBnQQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgEAmygHTQgagYgKgeIAAAAIgJAAIAAAAQg7AAgpgkIAAAAQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgmAhgzADIAAAAIARAQQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgQIgFAAIAAAAQg7AAgpgkIAAAAQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAZIAAAAIgFADIAAAAIAGAFQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgTgSgKgVIAAAAQgjAagvACIAAAAQgJAegbAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgvUgHoQgbgZgKgfIAAAAIAUASQAwAkBFAAIAAAAQBEAAAxgkIAAAAIAQgPQgWgJgSgQIAAAAQgcgYgJggIAAAAIAUASQAwAkBFAAIAAAAQBEAAAwgkIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQgfAAgbgLIAAAAQgJAdgaAXIAAAAQgpAlg7AAIAAAAQg7AAgpglgAbXnpQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAmLn+QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CgH+QgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAwRoAQgagYgKgeIAAAAIgJAAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQglAig0ADIAAAAIARAPQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgPIgFAAIAAAAQg7AAgpglIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAIgEAEIAAAAIAFAFQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglIAAAAQgUgRgKgVIAAAAQgjAagvACIAAAAQgJAegbAYIAAAAQgpAkg7AAIAAAAQg6AAgqgkgA7soXQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgASHotQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAHgGQgogHgfgbIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAIgUgBIAAAAQgLAXgWAUIAAAAQgpAkg6AAIAAAAQg7AAgpgkgEAyygJFQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgk8gJbQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAHgGQgogHgfgbIAAAAQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAIgUgBIAAAAQgKAYgWATIAAAAQgqAlg6AAIAAAAQg7AAgpglgAkQpyQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgpgkgEAtFgJ8QgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAg2gKKQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEAnxgKnQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAJcqnQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAPgNQg5gBgogkIAAAAQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgoAkg6ABIAAAAQgKAdgZAWIAAAAQgqAlg6AAIAAAAQg7AAgpglgAp+qpQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAZIAAAAQgqAkg6AAIAAAAQg7AAgpgkgA2Nq4QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAvSrUQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgtngLUQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAPgOQg6AAgogkIAAAAQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQgJAdgaAXIAAAAQgpAlg7AAIAAAAQg7AAgpglgAQgrpQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAvYgL/QgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAg2gL/IgLgMIAAAAQgNACgNAAIAAAAQgiAAgdgMIAAAAQgIALgMALIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAQgZgWgJgcIAAAAIgEADIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgIAcgXAXIAAAAIAPAOQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgHgLgKIAAAAQgbgYgJgfIAAAAIATARQAeAXAmAJIAAAAIADgDIgBADIAAAAQAWAFAZAAIAAAAIADAAIAAAAIgCgIIAAAAIAIAIQA/gCAtgjIAAAAIAUgSQgJAggcAYIAAAAQgVATgaAKIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAgPsNQgcgZgJgfIAAAAIATARQAvAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgngkgEgmjgMWQgbgYgJggIAAAAIATASQAxAkBFAAIAAAAQBEAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgEAqTgMlQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAEZslQgSgQgKgUIAAAAQgLABgMAAIAAAAQg7AAgpgkIAAAAQgQgPgKgRIAAAAQgfAQgmAAIAAAAQg5AAgpglIAAAAQgUgSgLgVIAAAAQgSAEgVAAIAAAAQg6AAgqgkIAAAAQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIASgSQgHAggcAZIAAAAQgXAUgcAJIAAAAIADAEQAxAlBDAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAYIAAAAQgKAJgLAHIAAAAQAwAjBEAAIAAAAQBEAAAwglIAAAAIAVgSQg7AAgpgkIAAAAQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAZIAAAAQgpAkg6AAIAAAAIAAAAIAAAAQgKAggbAZIAAAAQgdAZglAIIAAAAQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAnrssQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgA2NssIgLgMIAAAAQgMACgNAAIAAAAQgjAAgcgNIAAAAQgJAMgMALIAAAAQgpAkg7AAIAAAAQg6AAgqgkIAAAAQgYgWgKgcIAAAAIgEADIAAAAQgpAlg6AAIAAAAQg7AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgIAcgXAXIAAAAIAPANQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgHgLgJIAAAAQgbgYgJggIAAAAIATASQAeAXAmAIIAAAAIADgDIgBAEIAAAAQAWAFAaAAIAAAAIACAAIAAAAIgCgIIAAAAIAIAIQA/gDAtgiIAAAAIAUgSQgJAfgcAZIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEg3UgM7QgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAswtSQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEgyqgNSQgSgRgKgTIAAAAQgLABgMAAIAAAAQg7AAgpglIAAAAQgQgOgKgRIAAAAQgfAQgmAAIAAAAQg7AAgpglIAAAAQgbgZgKgfIAAAAIAUASQAwAkBFAAIAAAAQBEAAAxgkIAAAAIAUgSQgJAfgcAZIAAAAQgKAIgLAHIAAAAQAwAkBEAAIAAAAQBEAAAxglIAAAAIAUgSQg7AAgpglIAAAAQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAIAAAAIAAAAQgJAggcAYIAAAAQgdAagkAIIAAAAQAwAkBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgqgkgAMhtcQgYgVgKgbIAAAAIgDAAIAAAAQg7AAgpglIAAAAQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQAvAAAlgRIAAAAQgagJgVgTIAAAAQgbgYgKggIAAAAIAUASQAtAiA/ACIAAAAIAJgIIgDAJIAAAAIADAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQgNAAgMgCIAAAAIgMALIAAAAQgmAig1ADIAAAAIALAKQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAuJgNsQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgEAlogNsQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAUyuCQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgqigOJQgYgWgKgaIAAAAIgDAAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQAvAAAlgRIAAAAQgagKgVgSIAAAAQgbgZgJgfIAAAAIATARQAtAjA/ACIAAAAIAJgIIgDAIIAAAAIADAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQgNAAgMgBIAAAAIgMALIAAAAQgmAig1ADIAAAAIALAJQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEAhMgOLQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAo6uaQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAxauaQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgEgiRgOvQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgA13u4QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAzagO7QgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqrgPIQgcgYgJggIAAAAIAUASQAwAkBFAAIAAAAQBEAAAwgkIAAAAIAVgSQgJAfgcAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgAdovfQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAYIvfQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAsYv2QgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgA5bwMQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgA+7wMQgbgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgqgkgAFSwzQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgxxgRgQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgABAxhQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAdoyJQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBDAAAvgjIAAAAQgQgTgGgXIAAAAIATASIASAMIAAAAIAIgIIgDAKIAAAAQApAXA1AAIAAAAQA0AAApgWIAAAAQgLgPgGgSIAAAAIAUASIAKAHIAAAAIALgHIAAAAIAUgSQgFASgLAQIAAAAQAoAVA0AAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgFgEIAAAAQgJAOgOAMIAAAAQgpAlg7AAIAAAAQg6AAgqglgAN1yJQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEg2DgSPQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEA09gSQQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgbAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAtXgSQQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgA5by2QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBDAAAwgkIAAAAQgQgSgHgXIAAAAIATARIASAMIAAAAIAIgHIgDAKIAAAAQApAWA1AAIAAAAQA0AAApgVIAAAAQgLgPgFgSIAAAAIATARIALAIIAAAAIAKgIIAAAAIAUgSQgFASgLAQIAAAAQAoAVA0AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgGgGIAAAAIgHAGIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAIgEgFIAAAAQgKAOgOANIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgpOgS2QgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgAiGy9QgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAIAIAAIAAAAQgbgYgJgfIAAAAIATARQAdAWAiAJIAAAAQAigJAbgVIAAAAIAUgSQgJAegZAYIAAAAIAFAAIAAAAQA4AAAqgYIAAAAQgJgOgFgQIAAAAIAUARIAGAFIAAAAIAHgFIAAAAIAUgSQgFARgJAOIAAAAQAqAYA4AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkIAAAAIgKgLIAAAAIgLALIAAAAQgpAkg7AAIAAAAQgcAAgYgIIAAAAQgYAKgeAAIAAAAQg7AAgpglgApsy9QgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgASHy+QgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgpgkgAKCy+QgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg7AAgpgkgAWszKQgbgZgJgfIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAxWgTkIgLgMIAAAAQgMACgNAAIAAAAQg7AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAIACAAIAAAAIgCgIIAAAAIAIAIQA/gDAtgiIAAAAIAUgSQgJAfgcAZIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEgk8gTsQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgEgtBgTsQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CgTsIgKgKIAAAAIgLAKIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQA4AAArgZIAAAAQgKgOgEgQIAAAAIATASIAHAFIAAAAIAGgFIAAAAIAUgSQgEAQgKAPIAAAAQAqAYA4AAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEggXgT4QgbgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgqglgEAn8gT8QgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAhMgT8QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQArAAAigOIAAAAQgfgJgZgXIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAIAHAAIAAAAIAJgIIgCAIIAAAAQA7gEAsghIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAIgLAAIAAAAIgKAKIAAAAQgpAlg7AAIAAAAQg6AAgqglgAc6z8QgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAIAAAAIAAAAQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgAls0SIgMgLIAAAAQgMACgNAAIAAAAQg7AAgpglIAAAAQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAIADAAIAAAAIgDgIIAAAAIAJAIQA+gCAtgjIAAAAIAVgSQgKAggcAZIAAAAQgVATgZAJIAAAAQAlARAvAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAQN0bQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAIW0bQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAZIAAAAQgqAkg6AAIAAAAQg7AAgpgkgAvH0pQgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAZIAAAAQgqAkg6AAIAAAAQg7AAgpgkgA130pQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQArAAAigOIAAAAQgfgJgZgWIAAAAQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAIAHAAIAAAAIAJgJIgCAIIAAAAQA7gDAsghIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAIgKAAIAAAAIgLAKIAAAAQgpAkg7AAIAAAAQg6AAgqgkgA6I0pQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQg6AAgpgkIAAAAQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAIAAAAIAAAAQgKAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgpgkgAD20rQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAPgNQgkgIgcgZIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQgRAAgQgDIAAAAQgKAcgZAWIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgm2gVJQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgutgVJQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgzNgVYQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAPgNQgkgIgcgZIAAAAQgbgZgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQgRAAgQgDIAAAAQgKAdgZAWIAAAAQgpAlg7AAIAAAAQg6AAgqglgAan1pQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgATe1pQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAOE14QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgA8c2WQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgjlgWWQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgo/gWmQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgqglgEA0ugXGQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgAYe3GQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQA+AAAtgeIAAAAQgUgVgHgaIAAAAIATASQAMAJANAHIAAAAIANgMIgFAPIAAAAQAlASAvAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg5AAgogjIAAAAQgIALgLAJIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqTgXVQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAiV3zQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBDAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg5AAIAAAAQg6AAgqglgA+k3zQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQA9AAAtgeIAAAAQgUgVgHgaIAAAAIATARQAMAKANAGIAAAAIANgLIgFAPIAAAAQAlARAvAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg4AAgpgiIAAAAQgIAKgLAKIAAAAQgpAlg6AAIAAAAQg7AAgpglgAsw4DQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAHv4LQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIARgOQgWgJgSgQIAAAAQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAZIAAAAQgpAkg6AAIAAAAQgfAAgbgKIAAAAQgKAdgZAWIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAw4gYgQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgADB4gQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAmygYjQgagXgKgeIAAAAIgJAAIAAAAQg7AAgpglIAAAAQgbgYgKggIAAAAIAUASQAwAkBFAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgmAhgzADIAAAAIARAQQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgPIgFAAIAAAAQg7AAgpglIAAAAQgcgYgJggIAAAAIAUASQAwAkBFAAIAAAAQBEAAAwgkIAAAAIAVgSQgJAfgcAZIAAAAIgFAEIAAAAIAGAFQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgTgRgKgVIAAAAQgjAagvACIAAAAQgJAegbAXIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgvUgY4QgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAQgOQgWgKgSgQIAAAAQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAQgfAAgbgKIAAAAQgJAcgaAXIAAAAQgpAlg7AAIAAAAQg7AAgpglgAbX45QgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAmL5OQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg0CgZOQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAwR5QQgagYgKgeIAAAAIgJAAIAAAAQg6AAgqglIAAAAQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQglAig0ADIAAAAIARAQQAwAlBFAAIAAAAQBFAAAwglIAAAAIARgQIgFAAIAAAAQg7AAgpglIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAIgEAEIAAAAIAFAFQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglIAAAAQgUgSgKgVIAAAAQgjAagvACIAAAAQgJAegbAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgA7s5mQgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgASH59QgcgYgJggIAAAAIATASQAxAkBFAAIAAAAQBEAAAwgkIAAAAIAHgGQgogHgfgcIAAAAQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAIgUgBIAAAAQgLAYgWATIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAyygaVQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgk8garQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAHgGQgogHgfgbIAAAAQgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAIgUgBIAAAAQgLAXgVATIAAAAQgqAlg6AAIAAAAQg7AAgpglgAkQ7CQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAtFgbMQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgEAg2gbaQgbgYgJggIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAnxgb2QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAJc72QgcgZgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAPgNQg5gBgogkIAAAAQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgoAlg6AAIAAAAQgKAdgZAXIAAAAQgqAlg6AAIAAAAQg7AAgpglgAp+75QgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgbAZIAAAAQgqAlg6AAIAAAAQg7AAgpglgA2N8IQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAvS8kQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgtngckQgbgYgKgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAxglIAAAAIAPgNQg6gBgogkIAAAAQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAkg6ABIAAAAQgJAdgaAWIAAAAQgpAlg7AAIAAAAQg7AAgpglgAQg84QgbgZgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgEAvYgdPQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAg2gdPIgLgLIAAAAQgNACgNAAIAAAAQgiAAgdgNIAAAAQgIAMgMAKIAAAAQgpAlg7AAIAAAAQg7AAgpglIAAAAQgZgWgJgbIAAAAIgEADIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgbgZgJgfIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgTQgIAdgXAWIAAAAIAPAOQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgHgLgJIAAAAQgbgZgJgfIAAAAIATASQAeAWAmAJIAAAAIADgDIgBADIAAAAQAWAFAZAAIAAAAIADAAIAAAAIgCgHIAAAAIAIAHQA/gCAtgiIAAAAIAUgTQgJAggcAZIAAAAQgVATgaAJIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAgP9dQgcgYgJggIAAAAIATASQAvAkBFAAIAAAAQBEAAAwgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgnglgEgmjgdmQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgqglgEAqTgd1QgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAEZ91QgSgQgKgUIAAAAQgLACgMAAIAAAAQg7AAgpglIAAAAQgQgOgKgRIAAAAQgfAPgmAAIAAAAQg5AAgpglIAAAAQgUgRgLgWIAAAAQgSAFgVAAIAAAAQg6AAgqglIAAAAQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIASgSQgHAfgcAZIAAAAQgXAVgcAJIAAAAIADADQAxAlBDAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggbAYIAAAAQgKAJgLAHIAAAAQAwAkBEAAIAAAAQBEAAAwglIAAAAIAVgSQg7AAgpglIAAAAQgcgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAfgcAZIAAAAQgpAlg6AAIAAAAIAAAAIAAAAQgKAfgbAZIAAAAQgdAZglAIIAAAAQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgAnr98QgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgA2N98IgLgMIAAAAQgMACgNAAIAAAAQgjAAgcgMIAAAAQgJALgMALIAAAAQgpAlg7AAIAAAAQg6AAgqglIAAAAQgYgWgKgcIAAAAIgEADIAAAAQgpAlg6AAIAAAAQg7AAgqglIAAAAQgbgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgIAcgXAXIAAAAIAPAOQAwAlBFAAIAAAAQA9AAAsgdIAAAAQgLgHgLgKIAAAAQgbgYgJgfIAAAAIATARQAeAXAmAJIAAAAIADgDIgBADIAAAAQAWAFAaAAIAAAAIACAAIAAAAIgCgIIAAAAIAIAIQA/gCAtgjIAAAAIAUgSQgJAggcAYIAAAAQgVATgaAKIAAAAQAmARAuAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEg3UgeLQgcgYgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgKAggcAYIAAAAQgpAlg6AAIAAAAQg7AAgpglgAsw+iQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgyqgeiQgSgQgKgUIAAAAQgLABgMAAIAAAAQg7AAgpgkIAAAAQgQgPgKgRIAAAAQgfAQgmAAIAAAAQg7AAgpglIAAAAQgbgYgKggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgKAJgLAGIAAAAQAwAkBEAAIAAAAQBEAAAxglIAAAAIAUgSQg7AAgpglIAAAAQgcgYgJgfIAAAAIAUARQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAIAAAAIAAAAQgJAggcAZIAAAAQgdAZgkAIIAAAAQAwAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglgAMh+sQgYgVgKgaIAAAAIgDAAIAAAAQg7AAgpglIAAAAQgbgZgJgfIAAAAIATASQAwAkBFAAIAAAAQAvAAAlgRIAAAAQgagJgVgTIAAAAQgbgYgKgfIAAAAIAUARQAtAiA/ADIAAAAIAJgJIgDAJIAAAAIADAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQgNAAgMgCIAAAAIgMAMIAAAAQgmAig1ACIAAAAIALAKQAwAlBFAAIAAAAQBEAAAxglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAuJge8QgbgYgJggIAAAAIATASQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEAloge8QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAUy/SQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgqigfZQgYgVgKgbIAAAAIgDAAIAAAAQg6AAgqglIAAAAQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQAvAAAlgRIAAAAQgagJgVgTIAAAAQgbgYgJggIAAAAIATASQAtAiA/ACIAAAAIAJgIIgDAJIAAAAIADAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQgNAAgMgCIAAAAIgMALIAAAAQgmAig1ADIAAAAIALAKQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAhMgfaQgbgZgJgfIAAAAIATASQAxAkBEAAIAAAAQBFAAAwgkIAAAAIAUgTQgJAggcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgAo6/pQgbgZgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg7AAIAAAAQg6AAgqgkgAxa/pQgcgZgJgfIAAAAIATARQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAggcAZIAAAAQgpAkg6AAIAAAAQg7AAgpgkgEgiRgf/QgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgV3ggIQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAzaggLQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAqrggYQgcgYgJggIAAAAIAUASQAwAlBFAAIAAAAQBEAAAwglIAAAAIAVgSQgJAggcAYIAAAAQgqAlg6AAIAAAAQg7AAgpglgEAdoggvQgbgYgJgfIAAAAIATARQAwAlBFAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEAYIggvQgbgYgJgfIAAAAIATARQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAggcAYIAAAAQgpAlg7AAIAAAAQg6AAgqglgEgMYghFQgbgZgKgfIAAAAIAUASQAwAkBFAAIAAAAQBEAAAxgkIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg7AAgpglgEgZbghcQgbgYgJggIAAAAIATASQAxAlBEAAIAAAAQBFAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg7AAIAAAAQg6AAgqglgEge7ghcQgbgYgJggIAAAAIATASQAxAlBFAAIAAAAQBEAAAwglIAAAAIAUgSQgJAfgcAZIAAAAQgpAlg6AAIAAAAQg7AAgqglg");
	mask.setTransform(25.4,-94.4);

	// Masked Layer 433 - 3
	this.instance = new lib.sprite53();
	this.instance.setTransform(134.8,-73.4,1.211,1);

	this.instance.mask = mask;

	// Layer 1
	this.instance_1 = new lib.sprite53();
	this.instance_1.setTransform(139.3,-79.9,1.268,1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-364,-1123.7,756,1237.5);


(lib.sprite841 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 3
	this.smoke = new lib.sprite835();
	this.smoke.setTransform(0.4,0.6,1,1,-15);

	this.smoke_1 = new lib.sprite835();
	this.smoke_1.setTransform(1.4,1);

	this.smoke_2 = new lib.sprite835();
	this.smoke_2.setTransform(0.4,0.6,1,1,15);

	this.smoke_3 = new lib.sprite835();
	this.smoke_3.setTransform(0.6,-0.7);

	this.smoke_4 = new lib.sprite835();
	this.smoke_4.setTransform(1.5,0,1,1,15);

	this.smoke_5 = new lib.sprite835();
	this.smoke_5.setTransform(0.6,-0.7,1,1,30);

	this.smoke_6 = new lib.sprite835();
	this.smoke_6.setTransform(1.7,0.4,1,1,30);

	this.smoke_7 = new lib.sprite835();
	this.smoke_7.setTransform(2.2,1.5,1,1,45);

	this.smoke_8 = new lib.sprite835();
	this.smoke_8.setTransform(1.7,0.4,1,1,60);

	this.smoke_9 = new lib.sprite835();
	this.smoke_9.setTransform(0.8,1.8,1,1,45);

	this.smoke_10 = new lib.sprite835();
	this.smoke_10.setTransform(0.9,3,1,1,60);

	this.smoke_11 = new lib.sprite835();
	this.smoke_11.setTransform(0.8,1.8,1,1,75);

	this.smoke_12 = new lib.sprite835();
	this.smoke_12.setTransform(2,1.5,1,1,90);

	this.smoke_13 = new lib.sprite835();
	this.smoke_13.setTransform(1.3,2.5,1,1,105);

	this.smoke_14 = new lib.sprite835();
	this.smoke_14.setTransform(2,1.5,1,1,120);

	this.smoke_15 = new lib.sprite835();
	this.smoke_15.setTransform(1.2,2.3,1,1,120);

	this.smoke_16 = new lib.sprite835();
	this.smoke_16.setTransform(0.1,2.7,1,1,135);

	this.smoke_17 = new lib.sprite835();
	this.smoke_17.setTransform(1.2,2.3,1,1,150);

	this.smoke_18 = new lib.sprite835();
	this.smoke_18.setTransform(1.5,1,1,1,165);

	this.smoke_19 = new lib.sprite835();
	this.smoke_19.setTransform(0.4,0.6,1,1,-180);

	this.smoke_20 = new lib.sprite835();
	this.smoke_20.setTransform(1.5,1,1,1,-165);

	this.smoke_21 = new lib.sprite835();
	this.smoke_21.setTransform(-0.9,0.5,1,1,-165);

	this.smoke_22 = new lib.sprite835();
	this.smoke_22.setTransform(-1.7,-0.4,1,1,-150);

	this.smoke_23 = new lib.sprite835();
	this.smoke_23.setTransform(-0.9,0.5,1,1,-135);

	this.smoke_24 = new lib.sprite835();
	this.smoke_24.setTransform(0,0,1,1,-135);

	this.smoke_25 = new lib.sprite835();
	this.smoke_25.setTransform(-0.2,-1.2,1,1,-120);

	this.smoke_26 = new lib.sprite835();
	this.smoke_26.setTransform(0,0,1,1,-105);

	this.smoke_27 = new lib.sprite835();
	this.smoke_27.setTransform(-1.1,0.6,1,1,-90);

	this.smoke_28 = new lib.sprite835();
	this.smoke_28.setTransform(-0.4,-0.5,1,1,-75);

	this.smoke_29 = new lib.sprite835();
	this.smoke_29.setTransform(-1.1,0.6,1,1,-60);

	this.smoke_30 = new lib.sprite835();
	this.smoke_30.setTransform(1.6,0.1,1,1,-45);

	this.smoke_31 = new lib.sprite835();
	this.smoke_31.setTransform(2.9,-0.1,1,1,-30);

	this.smoke_32 = new lib.sprite835();
	this.smoke_32.setTransform(1.6,0.1,1,1,-15);

	this.smoke_33 = new lib.sprite835();
	this.smoke_33.setTransform(0,0,1,1,-30);

	this.smoke_34 = new lib.sprite835();
	this.smoke_34.setTransform(1.3,0.1,1,1,-15);

	this.smoke_35 = new lib.sprite835();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.smoke_35},{t:this.smoke_34},{t:this.smoke_33},{t:this.smoke_32},{t:this.smoke_31},{t:this.smoke_30},{t:this.smoke_29},{t:this.smoke_28},{t:this.smoke_27},{t:this.smoke_26},{t:this.smoke_25},{t:this.smoke_24},{t:this.smoke_23},{t:this.smoke_22},{t:this.smoke_21},{t:this.smoke_20},{t:this.smoke_19},{t:this.smoke_18},{t:this.smoke_17},{t:this.smoke_16},{t:this.smoke_15},{t:this.smoke_14},{t:this.smoke_13},{t:this.smoke_12},{t:this.smoke_11},{t:this.smoke_10},{t:this.smoke_9},{t:this.smoke_8},{t:this.smoke_7},{t:this.smoke_6},{t:this.smoke_5},{t:this.smoke_4},{t:this.smoke_3},{t:this.smoke_2},{t:this.smoke_1},{t:this.smoke}]}).wait(45));

	// Layer 1
	this.instance = new lib.sprite830();
	this.instance.setTransform(0,0,0.223,0.223);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.41,scaleY:0.41},1).to({scaleX:0.55,scaleY:0.55},1).to({scaleX:0.63,scaleY:0.63},1).to({scaleX:0.66,scaleY:0.66},1).to({scaleX:1.01,scaleY:1.01,alpha:0},16).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-8.5,19.2,18.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		
		{
		
		    _first = true;
		
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		} 
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(250));

	// Слой 3
	this.boom = new lib.sprite841();
	this.boom.setTransform(119.9,51.6,1.753,1.753);
	this.boom._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boom).wait(29).to({_off:false},0).to({_off:true},70).wait(151));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(-11.4,-3.3,0.795,0.795,0,0,0,21.4,10.3);
	this.instance.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.72,scaleY:0.72,x:143,y:68.3,alpha:1},29,cjs.Ease.get(-1)).to({_off:true},1).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-11.5,34.1,16.4);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(211.1,117.9,1,1,0,0,0,211.1,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:191.5,y:127.5},30,cjs.Ease.get(-1)).to({x:171.1,y:137.4},35,cjs.Ease.get(1)).to({x:191.1,y:127.7},34,cjs.Ease.get(-1)).to({x:211.1,y:117.9},35,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(229.9,146.5,1,1,0,0,0,21.4,10.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).wait(46));

	// Слой 2
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(321.9,109.5,1,1,0,0,0,21.4,10.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({_off:true},44).wait(46));

	// Слой 3
	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(398.9,77.5,1,1,0,0,0,21.4,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},45).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-3.5,430.6,239.4);


(lib.Символ3_1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(420.5,162.7,0.881,0.881,0,0,0,201.9,99.6);

	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(299.4,151.3,1,1,0,0,0,299.4,151.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.podvod, null, new cjs.Matrix2D(0.664,0,0,0.664,-504.6,-217.1)).s().p("AuuNYIdd6vIAAavg");
	this.shape_1.setTransform(504.6,217.1);

	this.addChild(this.shape_1,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-3.5,628.2,306.3);


// stage content:



(lib.submerine600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;

		this.button.addEventListener("click", fl_ClickToGoToWebPage);
		
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(500.7,277.3,0.48,0.48,0,0,0,16.2,16.2);

	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(532.2,277.3,0.48,0.48,0,0,0,16.2,16.2);

	this.instance_2 = new lib.Символ44();
	this.instance_2.setTransform(564.5,277.3,0.48,0.48,0,0,0,16.2,16.2);

	this.instance_3 = new lib.Символ43();
	this.instance_3.setTransform(70.5,276.6,0.966,0.966,0,0,0,4.4,16);

	this.instance_4 = new lib.Символ43();
	this.instance_4.setTransform(54,276.6,0.966,0.966,0,0,0,4.4,16);

	this.instance_5 = new lib.Символ43();
	this.instance_5.setTransform(40.2,276.6,0.966,0.966,0,0,0,4.4,16);

	this.instance_6 = new lib.Символ43();
	this.instance_6.setTransform(25,276.6,0.966,0.966,0,0,0,4.4,16);

	this.instance_7 = new lib.Символ43();
	this.instance_7.setTransform(11.2,276.6,0.966,0.966,0,0,0,4.4,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_8 = new lib.Символ2();
	this.instance_8.setTransform(300.5,277.5,0.601,0.601,0,0,0,160.7,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ41();
	this.instance_9.setTransform(635.4,348.4,1,1,0,0,0,9.8,348.4);

	this.instance_10 = new lib.Символ41();
	this.instance_10.setTransform(4.7,347.1,1,1,180,0,0,9.7,348.4);

	this.instance_11 = new lib.Символ41();
	this.instance_11.setTransform(301.5,5.3,1,1,-90,0,0,9.8,348.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 4
	this.instance_12 = new lib.Символ46();
	this.instance_12.setTransform(518.1,351.7,0.912,0.912,0,0,0,7.2,203.6);
	this.instance_12.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Слой 5
	this.pric = new lib.Символ25();
	this.pric.setTransform(-236.6,327.9,1,1,0,0,0,139.3,81.2);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 6
	this.instance_13 = new lib.Символ3_1();
	this.instance_13.setTransform(289.1,141.1,0.871,0.871,0,0,0,299.5,151.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Слой 7
	this.button = new lib.Символ3();
	this.button.setTransform(267,213.9,5.473,2.299);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 8
	this.instance_14 = new lib.sprite60();
	this.instance_14.setTransform(162.5,211.7,0.959,2.082,0,62.5,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-922,2835.3,1768.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 960,
	fps: 30,
	color: "#D82C2A",
	manifest: [
		{src:"images/arrows.png?1461596352387", id:"arrows"},
		{src:"images/bg.jpg?1461596352387", id:"bg"},
		{src:"images/bg2.jpg?1461596352387", id:"bg2"},
		{src:"images/btn11.png?1461596352387", id:"btn11"}
	]
};



// symbols:



(lib.arrows = function() {
	this.initialize(img.arrows);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,181);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,960);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,960);


(lib.btn11 = function() {
	this.initialize(img.btn11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,228);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmhAJUQhZAAgDhiIAAvcQAAhpBcAAMBNDAAAQBcAAAABpIAAPcQgDBihZAAg");
	this.shape.setTransform(0,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.267)").s().p("EgmhAA/QhcAAAAhnIAAgWQADBgBZAAMBNDAAAQBZAAADhgIAAAWQAABnhcAAg");
	this.shape_1.setTransform(0,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.8,-61,511.7,122.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwYQZQmymzAApmQAAplGymzQGzmyJlAAQJmAAGzGyQGyGzAAJlQAAJmmyGzQmzGypmAAQplAAmzmygAv6v6QmmGmAAJUQAAJVGmGmQGmGmJUAAQJVAAGmmmQGmmmAApVQAApUmmmmQmmmmpVAAQpUAAmmGmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.3,-148.3,296.7,296.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrows();
	this.instance.setTransform(-11.6,-90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-90.4,32,181);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgljAFDIAAqFMBLHAAAIAAKFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.4,-32.3,480.9,64.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyBzQgvgwAAhDQAAhCAvgwQAwgvBCAAQBDAAAwAvQAvAwAABCQAABDgvAwQgwAvhDAAQhCAAgwgvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.Символ10копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BqQgVgSgFggIAwgFQACARAKAJQAKAKANAAQAOAAAKgNQAKgMAAgYQAAgYgKgLQgKgKgPAAQgVAAgQARIgngGIAZiAIB9AAIAAAtIhZAAIgHAqQAQgIAOAAQAgAAAXAXQAWAWAAAlQAAAfgSAYQgZAhgpAAQgjAAgWgTg");
	this.shape.setTransform(185.4,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBaIAAgwIAuAAIAAAwgAgWgpIAAgwIAuAAIAAAwg");
	this.shape_1.setTransform(160,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhoB9IAAj5IBcAAQAeAAARAFQAVAGAQARQAQARAIAYQAJAYgBAhQAAAfgIAWQgJAcgRAQQgOANgVAHQgSAGgZAAgAg1BTIAmAAQATAAAJgDQANgDAHgHQAJgIAFgQQAFgRAAgdQAAgbgFgQQgFgQgKgIQgIgJgPgDQgJgCgfAAIgWAAg");
	this.shape_2.setTransform(141.9,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AheB9IAAj5IC4AAIAAArIiFAAIAAA3IB8AAIAAAoIh8AAIAABFICKAAIAAAqg");
	this.shape_3.setTransform(117.6,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXB9IAAjOIhLAAIAAgrIDFAAIAAArIhKAAIAADOg");
	this.shape_4.setTransform(94.9,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhMBfQgggiAAg7QAAg9AhgiQAggjAzAAQAuAAAcAbQARAQAJAeIgyAMQgFgTgOgMQgOgLgUAAQgaAAgRAUQgSAUAAAtQAAAtASAVQARAUAZAAQAUAAAPgNQAOgNAHgbIAxAPQgMApgaAUQgaAUgpAAQgvAAghgig");
	this.shape_5.setTransform(71.5,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AheB9IAAj5IC4AAIAAArIiFAAIAAA3IB8AAIAAAoIh8AAIAABFICKAAIAAAqg");
	this.shape_6.setTransform(47.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYB9IAAjOIhKAAIAAgrIDFAAIAAArIhKAAIAADOg");
	this.shape_7.setTransform(25,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AheB9IAAj5IC4AAIAAArIiFAAIAAA3IB8AAIAAAoIh8AAIAABFICKAAIAAAqg");
	this.shape_8.setTransform(3.1,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhnB9IAAj5IBbAAQAeAAAQAFQAXAGAPARQAQARAIAYQAIAYAAAhQABAfgJAWQgJAcgRAQQgNANgXAHQgRAGgaAAgAg1BTIAmAAQATAAAJgDQANgDAHgHQAJgIAFgQQAFgRAAgdQAAgbgFgQQgFgQgKgIQgJgJgOgDQgJgCgeAAIgXAAg");
	this.shape_9.setTransform(-21.2,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGBrQgZgWgFgqIAxgFQAFAZANAMQAOALAUAAQAZAAAMgKQANgKAAgOQAAgJgGgGQgEgGgOgFIgmgLQgpgKgQgNQgXgUAAgeQAAgTALgRQAKgRAVgIQAUgJAdAAQAtAAAYAVQAYAUABAjIgyACQgDgTgLgJQgLgIgTAAQgXAAgMAJQgIAGAAAJQAAAJAIAHQAJAIAjAIQAlAJASAJQARAKAKAOQAKAQAAAYQAAAVgMATQgLATgXAJQgVAJghAAQguAAgZgWg");
	this.shape_10.setTransform(-55.8,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgyB3QgTgJgKgNQgLgNgDgPQgGgWAAgqIAAiDIAzAAIAACFQAAAhACAJQAEAQAMAKQAMAJATAAQAVAAAMgJQALgJABgNQADgNAAgdIAAiJIAyAAIAACBQAAAugDASQgFATgLANQgLAMgSAJQgTAHgeAAQghAAgTgIg");
	this.shape_11.setTransform(-80,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA0B9Iglg3QgRgdgIgIQgHgHgIgDQgIgDgRAAIgLAAIAABpIgyAAIAAj5IBqAAQAnAAASAHQASAHALARQALARAAAWQAAAdgRASQgQAQghAFQAQAKALALQAKAMATAdIAeAxgAg9gSIAmAAQAiAAAJgDQAJgDAGgIQAFgHAAgLQAAgNgHgIQgHgHgMgDIgjAAIgoAAg");
	this.shape_12.setTransform(-103.9,-1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYB9IAAj5IAxAAIAAD5g");
	this.shape_13.setTransform(-122.5,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaB9IhZj5IA3AAIA9C4IA9i4IA2AAIhaD5g");
	this.shape_14.setTransform(-139.1,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("A9pEGIAAoLMA7TAAAIAAILg");
	this.shape_15.setTransform(31,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.8,-26.2,379.8,52.5);


(lib.Символ10копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvB7QABg0AVg2QATg0AhgrIhrAAIAAgsICiAAIAAAiQgVAVgVAlQgVAkgKAqQgKAqABAhg");
	this.shape.setTransform(160.1,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGB9IAAizQgXAZgkAMIAAgsQASgGAWgRQAUgRAJgXIAnAAIAAD5g");
	this.shape_1.setTransform(139.2,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXBaIAAgwIAuAAIAAAwgAgXgpIAAgwIAuAAIAAAwg");
	this.shape_2.setTransform(115.5,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0B9Iglg3QgRgdgIgIQgHgHgIgDQgIgDgRAAIgLAAIAABpIgyAAIAAj5IBqAAQAnAAASAHQASAHALARQALARAAAWQAAAdgRASQgQAQghAFQAQAKALALQAKAMATAdIAeAxgAg9gSIAmAAQAiAAAJgDQAJgDAGgIQAFgHAAgLQAAgNgHgIQgHgHgMgDIgjAAIgoAAg");
	this.shape_3.setTransform(98.2,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXBfQghgiAAg8QAAgkALgaQAJgTAPgQQAPgPASgHQAXgKAdAAQA3AAAhAiQAhAjAAA7QAAA8ghAjQggAig4AAQg2AAghgigAgxg/QgSAVAAAqQgBAqAUAWQATAWAdAAQAeAAATgWQAUgWAAgqQAAgqgTgWQgTgVgfAAQgdAAgUAWg");
	this.shape_4.setTransform(70.8,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA0B9Iglg3QgRgdgIgIQgHgHgIgDQgIgDgRAAIgLAAIAABpIgyAAIAAj5IBqAAQAnAAASAHQASAHALARQALARAAAWQAAAdgRASQgQAQghAFQAQAKALALQAKAMATAdIAeAxgAg9gSIAmAAQAiAAAJgDQAJgDAGgIQAFgHAAgLQAAgNgHgIQgHgHgMgDIgjAAIgoAAg");
	this.shape_5.setTransform(45.7,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0B9Iglg3QgRgdgIgIQgHgHgIgDQgIgDgRAAIgLAAIAABpIgyAAIAAj5IBqAAQAnAAASAHQASAHALARQALARAAAWQAAAdgRASQgQAQghAFQAQAKALALQAKAMATAdIAeAxgAg9gSIAmAAQAiAAAJgDQAJgDAGgIQAFgHAAgLQAAgNgHgIQgHgHgMgDIgjAAIgoAAg");
	this.shape_6.setTransform(20.5,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AheB9IAAj5IC4AAIAAArIiFAAIAAA3IB8AAIAAAoIh8AAIAABFICKAAIAAAqg");
	this.shape_7.setTransform(-4.6,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABVBcIAAhlQAAgbgFgIQgGgLgOAAQgKAAgKAHQgIAGgFAMQgDALAAAYIAABXIguAAIAAhhQAAgbgDgHQgDgIgFgEQgFgEgKAAQgKAAgKAGQgIAGgEAMQgEALAAAYIAABYIgwAAIAAizIAsAAIAAAZQAYgdAhAAQARAAANAHQALAHAIAPQAMgPAOgHQAOgHAPAAQAVAAAOAIQANAIAHAQQAFALAAAaIAAByg");
	this.shape_8.setTransform(-41.9,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhBA/QgSgYAAgmQAAgrAXgaQAYgZAkAAQAnAAAXAaQAXAbgBA1Ih2AAQABAWALAMQALALAOAAQAMAAAHgGQAIgGAEgOIAwAJQgJAagUAOQgUANgeAAQgtAAgXgfgAAlgOQgBgVgKgLQgKgLgPAAQgOAAgKAMQgKALAAAUIBGAAIAAAAg");
	this.shape_9.setTransform(-67.3,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGB4QgLgEgFgHQgFgHgCgMQgBgIAAgaIAAhNIgWAAIAAgmIAWAAIAAgkIAugcIAABAIAhAAIAAAmIghAAIAABHIABAaQABAEADACQAEADAEAAQAHAAAMgFIAFAlQgRAHgVAAQgNAAgIgEg");
	this.shape_10.setTransform(-82.6,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BPQgVgPgHgaIAwgHQADAOAKAHQAJAIAPAAQATAAAJgHQAGgFAAgIQAAgFgDgEQgEgDgMgDQg4gNgQgLQgVgMAAgbQAAgXASgQQATgQAnAAQAjAAASAMQASAMAHAYIgtAIQgDgLgIgFQgIgGgOAAQgSAAgIAFQgGAEAAAGQAAAFAFAEQAHAFAkAIQAmAJAPANQAPALAAAXQAAAYgUASQgVASgpAAQgjAAgWgPg");
	this.shape_11.setTransform(-98.7,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhMB8IgEglIAUACQARAAAIgKQAIgKAEgPIhFi0IAzAAIAqB/IAqh/IAyAAIhACsIgMAgQgGAQgGAJQgFAIgGAFQgHAFgLADQgLADgOAAQgOAAgNgDg");
	this.shape_12.setTransform(-117.9,6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGBrQgagWgEgqIAxgFQAEAZAOAMQAOALAUAAQAZAAANgKQAMgKAAgOQAAgJgGgGQgFgGgNgFIgmgLQgpgKgQgNQgYgUABgeQgBgTALgRQAMgRAUgIQAUgJAdAAQAuAAAXAVQAYAUABAjIgzACQgCgTgLgJQgLgIgUAAQgWAAgMAJQgIAGAAAJQAAAJAHAHQAKAIAjAIQAlAJASAJQASAKAJAOQALAQAAAYQAAAVgNATQgMATgWAJQgWAJggAAQguAAgZgWg");
	this.shape_13.setTransform(-139.3,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("A7zEGIAAoLMA3nAAAIAAILg");
	this.shape_14.setTransform(19.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.8,-26.2,379.8,52.5);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnB9IAAj5IBkAAQAcAAAOADQAOACANAIQALAIAIANQAHANAAAQQAAASgJAPQgKAOgQAIQAXAGAMAOQAMAQAAAWQABARgJAQQgHARgOAJQgOAKgUACIg7ACgAg1BTIAvAAQAaAAAGgCQAMgCAHgIQAHgIAAgNQAAgMgFgHQgGgIgKgEQgKgDghAAIgpAAgAg1gYIAhAAIAjgBQANgCAHgHQAIgHAAgNQAAgLgGgHQgHgIgNgBIgogBIgeAAg");
	this.shape.setTransform(167.4,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BxQgdgRgPgfQgPgeAAgjQAAgnARgeQAQgeAggRQAYgMAiAAQAvAAAaAUQAaATAIAjIgzAJQgFgSgPgLQgOgLgWAAQgfAAgUAVQgTAVAAAqQAAAqATAXQAUAWAeAAQAQAAAQgGQAQgHAMgJIAAgfIg6AAIAAgpIBtAAIAABiQgQAQgeALQgeAMgfAAQgmAAgdgQg");
	this.shape_1.setTransform(140.5,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTB9QADgZAOgXQAOgWAogmQAegcAIgLQAKgPAAgOQAAgQgJgJQgJgIgPAAQgNAAgJAJQgJAJgBAVIgwgFQAEgoAXgRQAWgRAgAAQAlAAAWAUQAVAUAAAdQAAARgGAQQgGAPgNAPQgJALgXAVIgbAbIgKAOIBeAAIAAAsg");
	this.shape_2.setTransform(116.9,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBaIAAgwIAvAAIAAAwgAgXgpIAAgwIAvAAIAAAwg");
	this.shape_3.setTransform(92.2,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXB/IAAj5IAtAAIAAAbQAIgOAPgIQAPgJAQAAQAfAAAXAZQAWAZAAAsQAAArgXAaQgWAZgfAAQgOAAgMgGQgLgGgOgPIAABcgAgchKQgMANAAAbQABAfALAMQAMAPAQAAQAQAAAMgOQALgLAAgfQAAgcgLgOQgMgOgQAAQgQAAgMAOg");
	this.shape_4.setTransform(76.2,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABVBcIAAhlQAAgbgFgIQgHgLgOAAQgJAAgJAHQgJAGgFAMQgDALAAAYIAABXIguAAIAAhhQAAgbgDgHQgCgIgFgEQgGgEgJAAQgMAAgIAGQgKAGgDAMQgEALAAAYIAABYIgwAAIAAizIAsAAIAAAZQAYgdAhAAQASAAAMAHQALAHAIAPQAMgPAOgHQAOgHAQAAQATAAAOAIQAOAIAHAQQAFALAAAaIAAByg");
	this.shape_5.setTransform(49.4,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBA/QgSgYAAgmQAAgrAXgaQAYgZAkAAQAnAAAXAaQAXAbgBA1Ih2AAQABAWALAMQALALAOAAQAMAAAHgGQAIgGAEgOIAwAJQgJAagUAOQgUANgeAAQgtAAgXgfgAAlgOQgBgVgKgLQgKgLgPAAQgOAAgKAMQgKALAAAUIBGAAIAAAAg");
	this.shape_6.setTransform(24,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHB4QgKgEgFgHQgEgHgCgMQgCgIAAgaIAAhNIgWAAIAAgmIAWAAIAAgkIAugcIAABAIAhAAIAAAmIghAAIAABHIABAaQABAEAEACQADADAEAAQAHAAANgFIAEAlQgRAHgVAAQgNAAgJgEg");
	this.shape_7.setTransform(8.7,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwCBIA8kBIAkAAIg8EBg");
	this.shape_8.setTransform(-11.8,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABVBcIAAhlQAAgbgFgIQgGgLgOAAQgKAAgKAHQgIAGgFAMQgDALAAAYIAABXIguAAIAAhhQAAgbgDgHQgDgIgFgEQgFgEgKAAQgKAAgKAGQgIAGgEAMQgEALAAAYIAABYIgwAAIAAizIAsAAIAAAZQAYgdAhAAQARAAANAHQALAHAIAPQAMgPAOgHQAOgHAPAAQAVAAAOAIQANAIAHAQQAFALAAAaIAAByg");
	this.shape_9.setTransform(-41.9,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBA/QgSgYAAgmQAAgrAXgaQAYgZAkAAQAnAAAXAaQAXAbgBA1Ih2AAQABAWALAMQALALAOAAQAMAAAHgGQAIgGAEgOIAwAJQgJAagUAOQgUANgeAAQgtAAgXgfgAAlgOQgBgVgKgLQgKgLgPAAQgOAAgKAMQgKALAAAUIBGAAIAAAAg");
	this.shape_10.setTransform(-67.3,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGB4QgLgEgFgHQgFgHgCgMQgBgIAAgaIAAhNIgWAAIAAgmIAWAAIAAgkIAugcIAABAIAhAAIAAAmIghAAIAABHIABAaQABAEADACQAEADAEAAQAHAAAMgFIAFAlQgRAHgVAAQgNAAgIgEg");
	this.shape_11.setTransform(-82.6,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3BPQgVgPgHgaIAwgHQADAOAKAHQAJAIAPAAQATAAAJgHQAGgFAAgIQAAgFgDgEQgEgDgMgDQg4gNgQgLQgVgMAAgbQAAgXASgQQATgQAnAAQAjAAASAMQASAMAHAYIgtAIQgDgLgIgFQgIgGgOAAQgSAAgIAFQgGAEAAAGQAAAFAFAEQAHAFAkAIQAmAJAPANQAPALAAAXQAAAYgUASQgVASgpAAQgjAAgWgPg");
	this.shape_12.setTransform(-98.7,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhMB8IgEglIAUACQARAAAIgKQAIgKAEgPIhFi0IAzAAIAqB/IAqh/IAyAAIhACsIgMAgQgGAQgGAJQgFAIgGAFQgHAFgLADQgLADgOAAQgOAAgNgDg");
	this.shape_13.setTransform(-117.9,6.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhGBrQgagWgEgqIAxgFQAEAZAOAMQAOALAUAAQAZAAANgKQAMgKAAgOQAAgJgGgGQgFgGgNgFIgmgLQgpgKgQgNQgYgUABgeQgBgTALgRQAMgRAUgIQAUgJAdAAQAuAAAXAVQAYAUABAjIgzACQgCgTgLgJQgLgIgUAAQgWAAgMAJQgIAGAAAJQAAAJAHAHQAKAIAjAIQAlAJASAJQASAKAJAOQALAQAAAYQAAAVgNATQgMATgWAJQgWAJggAAQguAAgZgWg");
	this.shape_14.setTransform(-139.3,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("A7zEGIAAoLMA3nAAAIAAILg");
	this.shape_15.setTransform(19.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.8,-26.2,379.8,52.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.setTransform(-512,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-480,1024,960);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjXJ8QhahaAAh/QAAh/BahaQBahZB9AAQB+AABaBZQBaBaAAB/QAAB/haBaQhaBah+AAQh9AAhahagAiDg+Qg2g2AAhNQAAhNA2g3QA3g2BMAAQBNAAA2A2QA3A3AABNQAABNg3A2Qg2A3hNAAQhMAAg3g3gAhNoYQghggABguQgBguAhghQAhggAsAAQAtAAAhAgQAhAhgBAuQABAughAgQghAhgtAAQgsAAghghg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-72.6,61.3,145.3);


(lib.title_txt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ОБНАРУЖЕНО НА ВАШЕМ", "bold 45px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 813;
	this.text.setTransform(-2,-53.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.4,-53.3,816.8,106.6);


(lib.title_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("23 ОШИБКИ", "bold 60px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 69;
	this.text.lineWidth = 653;
	this.text.setTransform(-2,-70);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.5,-70,657,140);


(lib.title_device = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТРОЙСТВЕ", "bold 60px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 69;
	this.text.lineWidth = 653;
	this.text.setTransform(-2,-70);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.5,-70,657,140);


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТАНОВИТЕ ПРИЛОЖЕНИЕ\nДЛЯ ПОВЫШЕНИЯ\nПРОИЗВОДИТЕЛЬНОСТИ", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 893;
	this.text.setTransform(-2.1,-152.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-448.5,-152.6,897.1,239.2);


(lib.start_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("НАЧАТЬ ПРОВЕРКУ", "bold 50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 766;
	this.text.setTransform(-2,-29.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.1,-29.9,770.2,59.9);


(lib.OS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("OS:  Android", "bold 35px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 41;
	this.text.lineWidth = 490;
	this.text.setTransform(-265.2,-87.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-87.8,493.6,175.6);


(lib.btn_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТАНОВИТЬ", "bold 45px 'Arial'", "#008731");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 507;
	this.text.setTransform(-2,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.4,-46.5,510.9,93.1);


(lib.battery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("Battery level : 70%", "bold 35px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 41;
	this.text.lineWidth = 490;
	this.text.setTransform(-246.7,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.7,-83.2,493.6,166.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(0,0,0.708,0.708);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},15,cjs.Ease.get(-1)).to({scaleX:1.11,scaleY:1.11,alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-105,210,210);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(30.1,72.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:17.3},5,cjs.Ease.get(-1)).to({x:4.6},5,cjs.Ease.get(1)).to({x:17.3},5,cjs.Ease.get(-1)).to({x:30.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.5,-18.3,32,181);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(60.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.26,scaleY:1.26},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({scaleX:1.26,scaleY:1.26},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(3));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-60.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.28,scaleY:1.28},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,-16.2,153.5,32.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_98 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(98).call(this.frame_98).wait(1));

	// Слой 2 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgljAFDIAAqEMBLHAAAIAAKEg");
	var mask_graphics_6 = new cjs.Graphics().p("EgljAFDIAAqEMBLHAAAIAAKEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.4,y:-0.2}).wait(6).to({graphics:mask_graphics_6,x:-0.4,y:-0.2}).wait(93));

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(-487.1,-0.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:-0.4},92).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("EgmigF2MBNFAAAIAALtMhNFAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.7,-38.5,495.4,77);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(0,42.1,1,1,0,0,0,0,42.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-72.6,61.3,145.3);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.btn11();
	this.instance.setTransform(-112.5,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1 - копия: 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.027)").s().p("AwYQZQmymzAApmQAAplGymzQGzmyJlAAQJmAAGzGyQGyGzAAJlQAAJmmyGzQmzGypmAAQplAAmzmyg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.3,-148.3,296.7,296.7);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.title_txt();
	this.instance.setTransform(0,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08},4,cjs.Ease.get(-1)).to({scaleX:1.19,scaleY:1.19},5,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.09},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.title_txt_2();
	this.instance_1.setTransform(0,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.title_device();
	this.instance_2.setTransform(0,74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.4,-152.5,816.8,296.8);


(lib.scan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("СКАНИРОВАНИЕ", "bold 50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 766;
	this.text.setTransform(-2,-29.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 2
	this.instance = new lib.Символ12();
	this.instance.setTransform(1.3,65.5,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.1,-29.9,770.2,108.2);


(lib.log = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.battery = new lib.battery();
	this.battery.setTransform(141.6,-73);

	this.timeline.addTween(cjs.Tween.get(this.battery).wait(1));

	// Слой 2
	this.OS = new lib.OS();
	this.OS.setTransform(159.8,-130.9);

	this.timeline.addTween(cjs.Tween.get(this.OS).wait(1));

	// Слой 3
	this.instance = new lib.Символ10();
	this.instance.setTransform(51.4,-69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 - копия
	this.instance_1 = new lib.Символ10копия();
	this.instance_1.setTransform(51.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ10копия2();
	this.instance_2.setTransform(51.4,79.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-218.7,495.9,324.7);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.btn_text();
	this.instance.setTransform(-0.4,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(0,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.8,-59.8,511.7,129.1);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("A7hzEQhXhXAAh9QAAh8BXhYQBYhYB8AAQB9AABYBYQBXBYABB8QgBB9hXBXQhYBYh9AAQh8AAhYhYg");
	var mask_graphics_2 = new cjs.Graphics().p("A7wxuQhshsAAiaQAAiaBshtQBthsCaAAQCaAABtBsQBsBtAACaQAACahsBsQhtBtiaAAQiaAAhthtg");
	var mask_graphics_3 = new cjs.Graphics().p("A8ctsQiriqAAjzQAAjzCrisQCriqDzAAQDzAACrCqQCrCsAADzQAADzirCqQirCsjzAAQjzAAirisg");
	var mask_graphics_4 = new cjs.Graphics().p("A9nm9QkSkTAAmHQAAmHESkUQEVkTGGAAQGHAAETETQEUEUAAGHQAAGHkUETQkTEUmHAAQmGAAkVkUg");
	var mask_graphics_5 = new cjs.Graphics().p("A/PCbQmkmiAApWQAApWGkmnQGnmkJWAAQJWAAGiGkQGnGnAAJWQAAJWmnGiQmiGmpWAAQpWAAmnmmg");
	var mask_graphics_6 = new cjs.Graphics().p("EghUAOhQpgpfAAtfQAAtgJgpjQJjpfNgAAQNeAAJfJfQJjJjAANgQAANfpjJfQpfJjteAAQtgAApjpjg");
	var mask_graphics_7 = new cjs.Graphics().p("Egj4AdTQtEtEAAyjQAAymNEtJQNJtESmAAQSkAANENEQNJNJAASmQAASjtJNEQtENJykAAQymAAtJtJg");
	var mask_graphics_8 = new cjs.Graphics().p("Egp+Ap4QxSxSAA4mQAA4lRSxZQRZxSYlAAQYmAARSRSQRZRZAAYlQAAYmxZRSQxSRZ4mAAQ4lAAxZxZg");
	var mask_graphics_9 = new cjs.Graphics().p("Eg1zA1sQ2L2KAA/iQAA/hWL2SQWS2LfhAAQfiAAWKWLQWTWSAAfhQAAfi2TWKQ2KWT/iAAQ/hAA2S2Tg");
	var mask_graphics_10 = new cjs.Graphics().p("EhDOBDFUgbsgbsAAAgnZUAAAgnYAbsgb2UAb2gbsAnYAAAUAnZAAAAbsAbsUAb2Ab2AAAAnYUAAAAnZgb2AbsUgbsAb2gnZAAAUgnYAAAgb2gb2g");
	var mask_graphics_11 = new cjs.Graphics().p("EhQoBQdUghOghNAAAgvQUAAAgvPAhOghZUAhZghOAvPAAAUAvQAAAAhNAhOUAhaAhZAAAAvPUAAAAvQghaAhNUghNAhagvQAAAUgvPAAAghZghag");
	var mask_graphics_12 = new cjs.Graphics().p("EhceBcRUgmFgmFAAAg2MUAAAg2LAmFgmTUAmTgmFA2LAAAUA2MAAAAmFAmFUAmTAmTAAAA2LUAAAA2MgmTAmFUgmFAmTg2MAAAUg2LAAAgmTgmTg");
	var mask_graphics_13 = new cjs.Graphics().p("EhmuBmgUgqUgqUAAAg8MUAAAg8LAqUgqjUAqjgqUA8LAAAUA8MAAAAqUAqUUAqjAqjAAAA8LUAAAA8MgqjAqUUgqUAqjg8MAAAUg8LAAAgqjgqjg");
	var mask_graphics_14 = new cjs.Graphics().p("EhvaBvKUgt5gt4AAAhBSUAAAhBRAt5guJUAuJgt5BBRAAAUBBSAAAAt4At5UAuKAuJAAABBRUAAABBSguKAt4Ugt4AuKhBSAAAUhBRAAAguJguKg");
	var mask_graphics_15 = new cjs.Graphics().p("Eh2hB2QUgwzgw0AAAhFcUAAAhFbAwzgxGUAxGgwzBFbAAAUBFcAAAAw0AwzUAxFAxGAAABFbUAAABFcgxFAw0Ugw0AxFhFcAAAUhFbAAAgxGgxFg");
	var mask_graphics_16 = new cjs.Graphics().p("Eh8CB7wUgzFgzFAAAhIrUAAAhIqAzFgzYUAzYgzFBIqAAAUBIrAAAAzFAzFUAzYAzYAAABIqUAAABIrgzYAzFUgzFAzYhIrAAAUhIqAAAgzYgzYg");
	var mask_graphics_17 = new cjs.Graphics().p("Eh//B/sUg0tg0tAAAhK/UAAAhK+A0tg1BUA1Bg0tBK+AAAUBK/AAAA0tA0tUA1BA1BAAABK+UAAABK/g1BA0tUg0tA1BhK/AAAUhK+AAAg1Bg1Bg");
	var mask_graphics_18 = new cjs.Graphics().p("EiCWCCDUg1sg1rAAAhMYUAAAhMXA1sg1/UA1/g1sBMXAAAUBMYAAAA1rA1sUA2AA1/AAABMXUAAABMYg2AA1rUg1rA2AhMYAAAUhMXAAAg1/g2Ag");
	var mask_graphics_19 = new cjs.Graphics().p("EiDJCC2Ug2Ag2BAAAhM1UAAAhM0A2Ag2VUA2Vg2ABM0AAAUBM1AAAA2BA2AUA2UA2VAAABM0UAAABM1g2UA2BUg2BA2UhM1AAAUhM0AAAg2Vg2Ug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-185,y:-173.3}).wait(1).to({graphics:mask_graphics_2,x:-188.6,y:-176.9}).wait(1).to({graphics:mask_graphics_3,x:-199.3,y:-187.6}).wait(1).to({graphics:mask_graphics_4,x:-217.1,y:-205.4}).wait(1).to({graphics:mask_graphics_5,x:-242,y:-230.4}).wait(1).to({graphics:mask_graphics_6,x:-274.1,y:-262.4}).wait(1).to({graphics:mask_graphics_7,x:-313.3,y:-301.7}).wait(1).to({graphics:mask_graphics_8,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_9,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_10,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_11,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_12,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_13,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_14,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_15,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_16,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_17,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_18,x:-340,y:-316.6}).wait(1).to({graphics:mask_graphics_19,x:-340,y:-316.6}).wait(1));

	// Слой 3
	this.instance = new lib.Символ7();
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(19));

	// Слой 1
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-512,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-480,1024,960);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.359},24).to({alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-72.6,61.3,145.3);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(1));

	// Слой 10
	this.btn = new lib.btn();
	this.btn.setTransform(0,133.4);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(136).to({_off:false},0).wait(1).to({regY:4.7,y:97.8,alpha:0.284},0).wait(1).to({y:71.9,alpha:0.467},0).wait(1).to({y:55.5,alpha:0.582},0).wait(1).to({y:43.4,alpha:0.668},0).wait(1).to({y:32.6,alpha:0.743},0).wait(1).to({y:23.1,alpha:0.81},0).wait(1).to({y:15.4,alpha:0.865},0).wait(1).to({y:9.4,alpha:0.907},0).wait(1).to({y:4.8,alpha:0.939},0).wait(1).to({y:1.6,alpha:0.963},0).wait(1).to({y:-0.8,alpha:0.979},0).wait(1).to({y:-2.6,alpha:0.992},0).wait(1).to({regY:0,y:-8.5,alpha:1},0).wait(1));

	// Слой 9
	this.instance = new lib.title_2();
	this.instance.setTransform(0,-643.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136).to({_off:false},0).wait(1).to({regY:-33,y:-641.4,alpha:0.284},0).wait(1).to({y:-619.1,alpha:0.467},0).wait(1).to({y:-605,alpha:0.582},0).wait(1).to({y:-594.6,alpha:0.668},0).wait(1).to({y:-585.3,alpha:0.743},0).wait(1).to({y:-577.2,alpha:0.81},0).wait(1).to({y:-570.5,alpha:0.865},0).wait(1).to({y:-565.3,alpha:0.907},0).wait(1).to({y:-561.4,alpha:0.939},0).wait(1).to({y:-558.6,alpha:0.963},0).wait(1).to({y:-556.5,alpha:0.979},0).wait(1).to({y:-555,alpha:0.992},0).wait(1).to({regY:0,y:-521,alpha:1},0).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(197.7,-345.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({alpha:1},6).wait(14));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("EgoTAbLMAAAg2VMBQnAAAMAAAA2Vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:2,y:-211.4}).wait(131));

	// Слой 5
	this.log = new lib.log();
	this.log.setTransform(-140.1,196.3);
	this.log._off = true;

	this.log.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.log).wait(25).to({_off:false},0).wait(1).to({regX:140.4,regY:-56.4,x:0.3,y:112.6},0).wait(1).to({y:98.6},0).wait(1).to({y:89},0).wait(1).to({y:81.2},0).wait(1).to({y:75.1},0).wait(1).to({y:70.3},0).wait(1).to({y:66.7},0).wait(1).to({y:63.9},0).wait(1).to({regX:0,regY:0,x:-140.1,y:118.1},0).wait(12).to({regX:140.4,regY:-56.4,x:0.3,y:42.4},0).wait(1).to({y:32},0).wait(1).to({y:25},0).wait(1).to({y:19.3},0).wait(1).to({y:14.6},0).wait(1).to({y:10.8},0).wait(1).to({y:7.9},0).wait(1).to({y:5.5},0).wait(1).to({y:3.7},0).wait(1).to({regX:0,regY:0,x:-140.1,y:58.6},0).wait(12).to({regX:140.4,regY:-56.4,x:0.3,y:-21.6},0).wait(1).to({y:-34.3},0).wait(1).to({y:-42.9},0).wait(1).to({y:-49.9},0).wait(1).to({regX:0,regY:0,x:-140.1,y:0.7},0).wait(1).to({regX:140.4,regY:-56.4,x:0.3,y:-60.3},0).wait(1).to({y:-63.9},0).wait(1).to({y:-66.8},0).wait(1).to({y:-69},0).wait(1).to({regX:0,regY:0,x:-140.1,y:-14.5},0).wait(12).to({regX:140.4,regY:-56.4,x:0.3,y:-95.7},0).wait(1).to({y:-109},0).wait(1).to({y:-118},0).wait(1).to({y:-125.4},0).wait(1).to({y:-131.4},0).wait(1).to({y:-136.3},0).wait(1).to({y:-140.1},0).wait(1).to({y:-143.1},0).wait(1).to({y:-145.5},0).wait(1).to({regX:0,regY:0,x:-140.1,y:-91},0).wait(12).to({regX:140.4,regY:-56.4,x:0.3,y:-171.9},0).wait(1).to({y:-185.1},0).wait(1).to({y:-194},0).wait(1).to({y:-201.3},0).wait(1).to({y:-207.3},0).wait(1).to({y:-212},0).wait(1).to({y:-215.8},0).wait(1).to({y:-218.8},0).wait(1).to({y:-221.1},0).wait(1).to({regX:0,regY:0,x:-140.1,y:-166.6},0).wait(5).to({y:-231.5},7,cjs.Ease.get(-1)).to({y:-280.1},6,cjs.Ease.get(1)).wait(14));

	// Слой 4
	this.scan = new lib.scan();
	this.scan.setTransform(0,-299.8);
	this.scan.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.scan).wait(1).to({regY:25.9,y:-320.8,alpha:0.203},0).wait(1).to({y:-358.4,alpha:0.366},0).wait(1).to({y:-386.1,alpha:0.486},0).wait(1).to({y:-406.3,alpha:0.573},0).wait(1).to({y:-422,alpha:0.641},0).wait(1).to({y:-435.2,alpha:0.699},0).wait(1).to({y:-447.2,alpha:0.75},0).wait(1).to({y:-457.8,alpha:0.796},0).wait(1).to({y:-466.9,alpha:0.836},0).wait(1).to({y:-474.4,alpha:0.868},0).wait(1).to({y:-480.6,alpha:0.895},0).wait(1).to({y:-485.6,alpha:0.917},0).wait(1).to({y:-489.8,alpha:0.935},0).wait(1).to({y:-493.3,alpha:0.95},0).wait(1).to({y:-496.3,alpha:0.963},0).wait(1).to({y:-498.8,alpha:0.974},0).wait(1).to({y:-501.1,alpha:0.984},0).wait(1).to({y:-503,alpha:0.992},0).wait(1).to({regY:0,y:-530.8,alpha:1},0).wait(104).to({y:-680.8,alpha:0},13).wait(14));

	// Слой 3
	this.scan_stripe = new lib.Символ6();
	this.scan_stripe.setTransform(-0.9,150);
	this.scan_stripe.alpha = 0;
	this.scan_stripe._off = true;

	this.timeline.addTween(cjs.Tween.get(this.scan_stripe).wait(19).to({_off:false},0).to({x:0,y:0,alpha:1},6).wait(98).to({x:-0.9,y:131.7,alpha:0},13).wait(14));

	// Слой 7
	this.title = new lib.title();
	this.title.setTransform(0,-442);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1).to({regY:-10.7,y:-484.4,alpha:0.787},0).wait(1).to({y:-509.3,alpha:0.619},0).wait(1).to({y:-527.3,alpha:0.498},0).wait(1).to({y:-540.3,alpha:0.41},0).wait(1).to({y:-550.4,alpha:0.342},0).wait(1).to({y:-559.1,alpha:0.284},0).wait(1).to({y:-566.9,alpha:0.231},0).wait(1).to({y:-573.7,alpha:0.185},0).wait(1).to({y:-579.3,alpha:0.147},0).wait(1).to({y:-583.9,alpha:0.116},0).wait(1).to({y:-587.7,alpha:0.091},0).wait(1).to({y:-590.7,alpha:0.071},0).wait(1).to({y:-593.2,alpha:0.054},0).wait(1).to({y:-595.3,alpha:0.04},0).wait(1).to({y:-597.1,alpha:0.028},0).wait(1).to({y:-598.6,alpha:0.017},0).wait(1).to({y:-600,alpha:0.008},0).wait(1).to({regY:0,y:-590.5,alpha:0},0).wait(132));

	// Слой 2
	this.start_txt = new lib.start_txt();
	this.start_txt.setTransform(0,-191.9);

	this.timeline.addTween(cjs.Tween.get(this.start_txt).to({alpha:0},19).to({_off:true},1).wait(130));

	// Слой 1
	this.instance_2 = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.68,scaleY:0.68},0).wait(1).to({scaleX:0.47,scaleY:0.47},0).wait(1).to({scaleX:0.17,scaleY:0.17},0).to({_off:true},1).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.4,-594.5,816.8,742.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-72.6,61.3,145.3);


// stage content:
(lib.app_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var clickkyTAG = clickkyTAG;
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		var windowSize = getWindowSize();
		stage.canvas.width = windowSize.width;
		stage.canvas.height = windowSize.height;
		
		getBatteryChargeLevel = function() {
			var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;
			if (battery) {
				_this.main.log.battery.text.text = "Battery level: ", Math.floor(battery.level * 100) + "%";
			}
		}

		
		

		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
		    iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
		        return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
		        return navigator.userAgent.match(/IEMobile/i);
		    },
		};
		
				
		window.onmessage = function(message) {
			if(
			typeof message === 'object'
			&& typeof message.data === 'object'
			&& typeof message.data.key === 'string'
			&& message.data.key === 'clickky_banner_83034'
			) {
									
			_this.main.title.title_txt.text.text = message.data.header_1;
			_this.main.title.title_txt_2.text.text = message.data.header_12;
			_this.main.title.title_device.text.text = message.data.header_13;
			_this.main.start_txt.text.text = message.data.button_1;
			_this.main.scan.text.text = message.data.title_2;
			_this.main.title_2.text.text = message.data.title_3;
			_this.main.btn.btn_txt.text.text = message.data.button_2;
			clickkyTAG = message.data.target_url;
			}
		};
		
		if( isMobile.iOS() ){ 
			_this.main.log.OS.text.text = 'OS : Apple iOS';
		}
		
		if( isMobile.Android() ){ 
			_this.main.log.OS.text.text = 'OS : Android';
		}
		
		if( isMobile.Opera() ){ 
			_this.main.log.OS.text.text = 'Browser : Opera';
		}
		
		if( isMobile.Windows() ){ 
			_this.main.log.OS.text.text = 'OS : Windows';
		}
		
		

		
		//Resize
		
		window._setCanvasSize = function() {
			
			var windowSize = getWindowSize();
			stage.canvas.width = windowSize.width;
			stage.canvas.height = windowSize.height;
			
			_this.bg.x = stage.canvas.width/2;
			_this.bg.y = stage.canvas.height/2;
			
			_this.circles.x = stage.canvas.width/2;
			_this.circles.y = 0;
			
			_this.main.x = stage.canvas.width/2;
			_this.main.y = stage.canvas.height/2;
			
			//Scale
		
			_this.bg.scaleX = 0.9;
			_this.bg.scaleY = 0.9;
			
			_this.circles.scaleX = 0.4;
			_this.circles.scaleY = 0.4;
		
			_this.main.scaleX = 0.5;
			_this.main.scaleY = 0.5;
			
			if(stage.canvas.width > 767){
			
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
			
			_this.circles.scaleX = 0.8;
			_this.circles.scaleY = 0.8;
		
			_this.main.scaleX = 0.8;
			_this.main.scaleY = 0.8;
			
			}
		
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		//Actions
			
		var onClick_1 = function() {
			_this.main.gotoAndPlay(1);
			_this.bg.gotoAndPlay(1);
			 event.preventDefault(); 
			
			stage.canvas.removeEventListener("click", onClick_1);
			stage.canvas.addEventListener("click", onClick);
		};
		
		var onClick = function(evt) {
			console.log('click')
			if(clickkyTAG){
			window.open(clickkyTAG, "_blank");
			}
		};
		
		stage.canvas.addEventListener("click", onClick_1, false);
		
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.main = new lib.main();
	this.main.setTransform(480,466.7,1,1,0,0,0,0,-296.2);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 4
	this.circles = new lib.Символ8();
	this.circles.setTransform(479,-3.3,1,1,0,0,0,0,-126.7);
	this.circles.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.circles).wait(1));

	// Слой 1
	this.bg = new lib.bg_1();
	this.bg.setTransform(480,476.7,1,1,0,0,0,0,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(448,480,1024,960);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
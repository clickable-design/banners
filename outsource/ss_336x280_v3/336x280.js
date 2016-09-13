(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ddsd.png?1473759051255", id:"ddsd"},
		{src:"images/logo.png?1473759051255", id:"logo"},
		{src:"images/sgsfbasfg.png?1473759051255", id:"sgsfbasfg"},
		{src:"images/sho.png?1473759051255", id:"sho"},
		{src:"images/smart1.png?1473759051255", id:"smart1"},
		{src:"images/tabl.png?1473759051255", id:"tabl"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.ddsd = function() {
	this.initialize(img.ddsd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,36);


(lib.sgsfbasfg = function() {
	this.initialize(img.sgsfbasfg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,271);


(lib.sho = function() {
	this.initialize(img.sho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,345);


(lib.smart1 = function() {
	this.initialize(img.smart1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,300);


(lib.tabl = function() {
	this.initialize(img.tabl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,300);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjZBcIAAgeIhYAAIAAAeIgjAAIAAg+IAQAAQAKgRAFgTQAFgVAAgZIAAglIBnAAIAAB3IAQAAIAAA+gAkNgyQAAAWgEAWQgEAUgJAQIAvAAIAAhWIgeAAgAAKA7QgNgGgLgLQgLgMgGgOQgFgOAAgPQAAgiAWgWQALgLANgFQAOgGARAAQAiAAAXAWQAXAWAAAiQAAAPgGAOQgFAOgMAMQgXAWgiAAQgRABgOgGgAAMgsQgGAGgDAIQgDAIAAAJQAAAKADAGQADAHAGAHQAMANARAAQAJAAAHgDQAHgEAGgGQAMgNAAgRQAAgJgDgIQgDgIgGgGQgGgGgHgDQgHgDgJAAQgRAAgMAMgAnLA7QgPgGgLgLQgMgMgFgOQgGgOAAgPQAAgiAXgWQALgLAPgFQAOgGARAAQAiAAAXAWQAWAWAAAiQAAAPgFAOQgGAOgLAMQgXAWgiAAQgRABgOgGgAnJgsQgGAGgDAIQgDAIAAAJQAAAKADAGQADAHAGAHQAMANARAAQAIAAAIgDQAHgEAGgGQAMgNAAgRQAAgJgDgIQgDgIgGgGQgGgGgHgDQgIgDgIAAQgRAAgMAMgAIyA+IAAiXIBgAAIAAAhIg6AAIAAAcIAuAAIAAAdIguAAIAAAdIA9AAIAAAggAG4A+IAAiXIBfAAIAAAhIg6AAIAAAcIAvAAIAAAdIgvAAIAAAdIA9AAIAAAggAFzA+IAAg8Ig3AAIAAA8IgmAAIAAiXIAmAAIAAA+IA3AAIAAg+IAlAAIAACXgACQA+IAAiXIBjAAIAAAhIg+AAIAAAXIAaAAQALAAAJAEQAJADAHAHQAOANAAAUQAAAVgOANQgOAOgWAAgAC1AeIATAAQAJAAAFgEQAFgEAAgIQAAgHgFgFQgFgDgJAAIgTAAgAihA+IAAiXIA/AAQAWABAOAPQANAOAAAXQAAAXgNANQgHAHgJAEQgJAEgLAAIgaAAIAAAvgAh8gPIASAAQAKAAAEgGQAGgFAAgKQAAgJgFgGQgFgFgJAAIgTAAgAo4A+IAAh2Ig2AAIAAB2IgmAAIAAiXICBAAIAACXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-9.2,132.3,18.5);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7BkIAAgUQgcgEgRgSIAUgdQAIAHAKAFQALAEAJAAQAHAAAEgDQAGgCAAgHQAAgFgIgEIgSgJQgLgEgJgGQgLgFgHgIQgEgFgCgGQgCgGAAgGQAAgJADgIQADgIAFgGQANgNASgDIAAgVIAYAAIAAAUQAYACARAPIgRAgQgHgGgKgEQgJgEgJAAQgGAAgFADQgFADgBAGQAAAFAIAEIASAJIAVAJIAKAFQAEADADAGQAIAKAAANQAAAJgDAIQgDAIgFAGQgGAHgJAEQgHAEgLACIAAAUgAAFBOIAAgmIhDAAIAAgXIA8heIAtAAIAABVIATAAIAAAgIgTAAIAAAmgAAAgaIgYAiIAAAAIAdAAIACgzIgBAAQgDAKgDAHgAi8BOIgBgRIABgNIAEgMQAFgMAIgHQAHgIAJgGIAQgKQAHgFAGgFQAFgFAAgGQAAgHgFgEQgGgEgGAAQgIAAgGAEQgFAFgEAHIgdgTQAIgPANgJQAIgFAIgCQAIgDALAAQAKAAAJADQAKAEAIAGQAIAGAEAJQAEAJAAAMIgBANQgCAGgEAFQgJAMgHAFIgjAYQgHAGAAAFIBDAAIAAAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-10,38.3,20.2);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,22.9,0,-22.8).s().p("AqWDpQguAAgBgvIAAlzQABgvAuAAIUtAAQAuAAABAvIAAFzQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.3,142,46.8);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,22.9,0,-22.8).s().p("AqWDpQguAAgBgvIAAlzQABgvAuAAIUtAAQAuAAABAvIAAFzQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.3,142,46.8);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABzBkIAAgUQgcgEgRgSIAUgdQAHAHALAFQAKAEAJAAQAIAAAEgDQAFgCAAgHQAAgFgHgEIgSgJQgLgEgKgGQgKgFgIgIQgEgFgCgGQgCgGAAgGQAAgJADgIQADgIAGgGQAMgNATgDIAAgVIAXAAIAAAUQAYACARAPIgRAgQgHgGgJgEQgKgEgIAAQgHAAgFADQgFADAAAGQAAAFAHAEIASAJIAWAJIAJAFQAEADAEAGQAIAKgBANQAAAJgCAIQgDAIgGAGQgGAHgIAEQgIAEgLACIAAAUgAg6A8IATgdQAPAOARAAQAHAAAHgGQAGgFAAgJQAAgJgHgFQgGgFgKAAQgLAAgKAFIgVgIIAHhQIBWAAIAAAhIg1AAIgBAOIgBAHIABAAQAEgCAIAAQAYAAAPAPQAHAHAEAHQADAKABALQgBAYgQAQQgIAIgLAEQgKAEgLAAQggAAgWgVgAivBOIA8h0IAFgGIAAgBIhHABIAAghIBwAAIAAAbIhCCAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-10.1,36.6,20.2);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,22.9,0,-22.8).s().p("AqWDpQguAAgBgvIAAlzQABgvAuAAIUtAAQAuAAABAvIAAFzQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.3,142,46.8);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgjYAFjIAAtvMBGxAAAIAAQZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-52.5,453.1,105.1);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AqWCcQguAAgBgvIAAjZQABgvAuAAIUtAAQAuAAABAvIAADZQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-15.6,142,31.3);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC33").s().p("AsREVQg5AAAAg3IAAm6QAAg4A5AAIYjAAQA5AAAAA4IAAG6QAAA3g5AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-27.7,168.6,55.5);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FA729E","#EB2B69"],[0,1],0.1,-12.5,0.1,12.5).s().p("ABICTIAAgxIiNAAIAAAxIg3AAIAAhkIAaAAQAPgbAIggQAIgjAAgoIAAg7ICkAAIAADBIAcAAIAABkgAgKhTQAAAigGAkQgHAigOAaIBKAAIAAiNIgvAAg");
	this.shape.setTransform(-165.3,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-7.9,0,7.9).s().p("AhOB6IAAjzICYAAIAAAzIhcAAIAAAuIBJAAIAAAxIhJAAIAAAuIBhAAIAAAzg");
	this.shape_1.setTransform(-141.1,41.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-7.9,0,7.9).s().p("AhOB6IAAjzICYAAIAAAzIhcAAIAAAuIBJAAIAAAxIhJAAIAAAuIBhAAIAAAzg");
	this.shape_2.setTransform(-95.3,41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FA729E","#EB2B69"],[0,1],0.1,-10.5,0.1,10.4).s().p("AAsB6IAAhfIhXAAIAABfIg8AAIAAjzIA8AAIAABiIBXAAIAAhiIA8AAIAADzg");
	this.shape_3.setTransform(-118.9,41.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FA729E","#EB2B69"],[0,1],0.1,-8.8,0.1,8.9).s().p("AguB1QgXgJgSgTIAggnQAMALAMAGQAOAHANAAQAOAAAJgIQAIgHAAgMQAAgNgHgGQgIgGgMAAIgeAAIAAgtIAYAAQAMAAAHgIQAHgHAAgKQAAgMgHgHQgHgHgNAAQgYAAgbAVIgWgsQAjgcAwAAQAUAAARAGIARAKIAMAOQANAQAAAXQAAAjggATQAJACAHAEQAHAGAFAHQAKAOAAATQAAAkgZAUQgaAUgkAAQgZAAgWgJg");
	this.shape_4.setTransform(-50.2,41.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-7.5,0,7.5).s().p("AhKB6IAAjzICVAAIAAAzIhYAAIAADAg");
	this.shape_5.setTransform(-76,41.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FA729E","#EB2B69"],[0,1],0.1,-11.5,0.1,11.4).s().p("AA0B6IgOgzIhLAAIgPAzIg9AAIBTjzIA9AAIBTDzgAgXAWIAvAAIgXhXIgBAAg");
	this.shape_6.setTransform(-28.6,41.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FA729E","#EB2B69"],[0,1],0.1,-10.4,0.1,10.4).s().p("AAvBvIgNgvIhDAAIgOAvIg4AAIBMjdIA3AAIBLDdgAgVAUIAqAAIgVhPIAAAAg");
	this.shape_7.setTransform(-10.6,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-8.7,0,8.7).s().p("ABmCFIAAgsIj8AAIAAjdIA2AAIAACuIA4AAIAAiuIA1AAIAACuIA3AAIAAiuIA3AAIAACuIAcAAIAABbg");
	this.shape_8.setTransform(-37.1,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-10.4,0,10.4).s().p("AAvBvIgNgvIhEAAIgNAvIg4AAIBMjdIA2AAIBMDdgAgVAUIAqAAIgVhPIAAAAg");
	this.shape_9.setTransform(-64.9,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-8.2,0,8.3).s().p("AhRBvIAAjdIBbAAQAgAAAUAWQAUAVAAAiQAAAhgUAUQgKALgNAGQgNAFgQAAIgkAAIAABFgAgagCIAaAAQAMAAAHgJQAIgIAAgOQAAgOgHgIQgHgIgNAAIgaAAg");
	this.shape_10.setTransform(-84.1,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-8.3,0,8.3).s().p("AhRBvIAAjdIBRAAQAhAAAUAQQALAHAEALQAGALAAAOQAAAOgHANQgHAMgMAIQAJADAHADQAGAFAEAHQAIAOAAAQQABAigYARQgYAQgjAAgAgbBAIAeAAQALAAAHgGQAGgHABgKQgBgKgGgGQgGgHgLAAIgfAAgAgbgYIAbAAQAIAAAFgFQAFgGAAgJQAAgJgFgFQgFgFgIAAIgbAAg");
	this.shape_11.setTransform(-104.1,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FA729E","#EB2B69"],[0,1],0.2,-8.1,0.2,7.9).s().p("AgqBqQgUgJgRgRIAdgjQALALALAFQAMAHAMAAQANgBAIgGQAHgHAAgMQAAgLgGgFQgHgFgLAAIgbAAIAAgpIAWAAQAKAAAHgIQAGgGAAgJQAAgLgGgGQgHgHgLABQgXAAgXASIgUgnQAfgbAsAAQARAAAQAHQAIAEAHAEIAMAOQALAOAAAUQAAAhgdARIAOAGQAHAFAFAGQAJANAAARQAAAggXASQgXASghABQgWgBgVgIg");
	this.shape_12.setTransform(-124,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-11.6,0,11.6).s().p("AgsBrQgVgIgRgSQgRgRgHgUQgJgVAAgXQAAgwAhghQARgQAVgIQAVgJAXAAQAxABAiAgQAhAhAAAwQAAAXgIAVQgJAUgQARQgiAigxAAQgXgBgVgHgAgpgtQgJAJgEAMQgFALAAANQAAANAFAMQAEALAJAKQARATAYAAQAMAAAKgFQALgEAJgKQASgTgBgbQABgNgFgLQgEgMgJgJQgJgKgLgEQgKgEgMAAQgYAAgRASg");
	this.shape_13.setTransform(-145.2,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-8.3,0,8.3).s().p("AhSBvIAAjdIBSAAQAhAAAUAQQALAHAFALQAFALAAAOQAAAOgHANQgHAMgMAIQAJADAHADQAGAFAEAHQAJAOAAAQQAAAigYARQgYAQgjAAgAgbBAIAfAAQALAAAGgGQAHgHAAgKQAAgKgHgGQgFgHgMAAIgfAAgAgbgYIAbAAQAIAAAFgFQAFgGAAgJQAAgJgFgFQgFgFgIAAIgbAAg");
	this.shape_14.setTransform(-167.4,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FA729E","#EB2B69"],[0,1],-0.1,-10.4,-0.1,10.3).s().p("AArB6IAAjAIhVAAIAADAIg9AAIAAjzIDOAAIAADzg");
	this.shape_15.setTransform(4.3,41.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-12.8,0,12.8).s().p("AgxB2QgXgKgSgSQgSgTgJgXQgKgWAAgaQAAg1AlglQASgRAXgJQAYgJAZAAQA3AAAlAjQAkAlAAA1QAAAagJAWQgIAXgTATQglAkg3AAQgZAAgYgIgAgugyQgIAKgFANQgFAMgBAPQABANAFAOQAFANAIAKQAVAWAZAAQAOgBAMgFQAKgGAMgKQARgVAAgdQAAgPgDgMQgGgNgIgKQgMgKgKgGQgMgEgOAAQgZAAgVAUg");
	this.shape_16.setTransform(31.2,41.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FA729E","#EB2B69"],[0,1],-0.2,-10.2,-0.2,10.1).s().p("AAiB6IgxhkIgZAAIAABkIg9AAIAAjzIA9AAIAABfIAZAAIAwhfIBBAAIhCB2IAAABIBGB8g");
	this.shape_17.setTransform(58,41.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-10.4,0,10.3).s().p("AArB6IAAjAIhVAAIAADAIg8AAIAAjzIDOAAIAADzg");
	this.shape_18.setTransform(103,41.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#FA729E","#EB2B69"],[0,1],-0.1,-11.2,-0.1,11.2).s().p("AhZBrIAaguQAHAHAHADQAHACAGAAQAOAAAGgMIhfi4IBCAAIA1B5IAoh5IBAAAIhUDNQgGAKgIAKQgJAKgKAHQgNAFgQAAQgdAAgagRg");
	this.shape_19.setTransform(79.3,41.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FA729E","#EB2B69"],[0,1],-0.1,-10.2,-0.1,10.1).s().p("AAiB6IgxhkIgZAAIAABkIg8AAIAAjzIA8AAIAABfIAZAAIAxhfIBBAAIhDB2IAAABIBFB8g");
	this.shape_20.setTransform(128.6,41.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-10.4,0,10.3).s().p("AArB6IADiZIgBAAQgLAZgJAOIhDByIg8AAIAAjzIA8AAIgCCbQALgaAKgPIBBhyIA9AAIAADzg");
	this.shape_21.setTransform(152,41.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#FA729E","#EB2B69"],[0,1],-0.1,-2.7,-0.1,2.6).s().p("AgZAZIAAgxIA0AAIAAAxg");
	this.shape_22.setTransform(170.2,50.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#FA729E","#EB2B69"],[0,1],-0.1,-3.1,-0.1,3).s().p("AgYBVIgFipIA7AAIgFCpg");
	this.shape_23.setTransform(170.2,37.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FA729E","#EB2B69"],[0,1],-5.6,0,5.6,0).s().p("AgUAyQgLgEgHgIQgRgQAAgWQAAgJAEgJQAEgKAJgIQAQgQAWAAQALAAAKAEQAKAEAIAIQARAQAAAUQAAAWgRAQQgIAIgKAEQgKADgLAAQgKAAgKgDgAgKgKQgGAFAAAFQAAAHAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgHQAAgFgGgFQgFgFgGAAQgFAAgFAFg");
	this.shape_24.setTransform(167.6,5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-10.9,0,10.9).s().p("AhsBvICqjdIAvAAIiqDdg");
	this.shape_25.setTransform(160.9,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FA729E","#EB2B69"],[0,1],-5.6,0.1,5.6,0.1).s().p("AgUAxQgKgEgIgHQgRgQAAgWQAAgJAEgKQAFgJAIgIQAQgQAWgBQALAAAKAFQAKAEAIAIQARAQAAAUQAAAWgRAQQgIAHgKAEQgKAFgLgBQgKABgKgFgAgKgKQgGAFAAAFQAAAGAFAFQAFAFAGAAQAHAAAFgFQAFgFAAgGQAAgFgFgFQgGgFgGAAQgFAAgFAFg");
	this.shape_26.setTransform(154.3,-6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FA729E","#EB2B69"],[0,1],-0.1,-8.2,-0.1,8.5).s().p("AgmBqQgRgJgJgRQgJgPgEgVQgFgUAAgYQAAgYAFgUQACgNALgXQAJgPARgKQAJgEAKgCQAJgDAKAAQALAAAKADQAKACAIAEQAJAFAGAGQAHAGAFAIQAKAXADANQAEAUAAAYQAAAYgEAUQgIAagFAKQgFAJgHAHQgGAFgJAFQgQAIgXABQgWgBgQgIgAgTgvQgHAQAAAfQAAAgAHARQAHAQAMAAQAbAAAAhBQAAgfgHgQQgHgQgNAAQgMAAgHAQg");
	this.shape_27.setTransform(137.8,-0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-7.9,0,7.9).s().p("AhOBUIAbgqQAVAUAYAAQAKAAAKgIQAJgHAAgNQAAgMgKgIQgKgIgNAAQgPAAgPAIIgdgLIAIhyIB8AAIAAAuIhMAAIgBAUIgBAJIAAAAQAGgCAJAAQAlAAAVAVQALAKAFALQAFAOAAAPQAAAjgXAXQgMAKgPAGQgPAFgPABQgugBgfgcg");
	this.shape_28.setTransform(118.8,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-11.6,0,11.7).s().p("AgsBrQgWgIgQgSQgQgRgJgUQgIgVAAgXQAAgwAhghQAQgQAWgIQAUgJAYAAQAxABAhAgQAiAhAAAwQAAAXgJAVQgHAUgSARQghAigxAAQgYgBgUgHgAgqgtQgIAJgEAMQgFALAAANQAAANAFAMQAEALAIAKQATATAXAAQAMAAALgFQAKgEAJgKQARgTABgbQgBgNgEgLQgEgMgJgJQgJgKgKgEQgLgEgMAAQgXAAgTASg");
	this.shape_29.setTransform(89.3,-0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-11.4,0,11.3).s().p("ABBCFIAAgsIh/AAIAAAsIgyAAIAAhbIAXAAQAOgYAIgdQAGgfAAglIAAg1ICVAAIAACuIAZAAIAABbgAgJhLQABAfgHAgQgFAfgNAXIBDAAIAAh/IgrAAg");
	this.shape_30.setTransform(64.1,2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#FA729E","#EB2B69"],[0,1],0.2,-11.6,0.2,12.6).s().p("ABBBvIgGhlIgBgOIAAgPIABgFIgBAAIgkBjIgsAAIgkhjIgBAAQACAUgCAOIgHBlIg2AAIASjdIA8AAIAqCBIAAAAIAriBIA7AAIATDdg");
	this.shape_31.setTransform(31.2,-0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FA729E","#EB2B69"],[0,1],0,-7.1,0,7.2).s().p("AhHBvIAAjdICKAAIAAAvIhTAAIAAApIBCAAIAAAsIhCAAIAAAqIBXAAIAAAvg");
	this.shape_32.setTransform(9.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.8,-11.7,351.1,70.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,4.9,0,-4.8).s().p("AgYA4IAAgLQAAgJADgHQAEgGAFgFIAKgIIAHgJQADgDAAgFQAAgFgEgEQgEgEgFAAQgFAAgFADQgGACgFAEIgVgaQASgSAcAAQASAAAQAMQAHAGAEAHQAEAIAAAKQAAALgEAFQgEAJgFAFIgLAKIgKAJQgEAFAAAGIAAAIg");
	this.shape.setTransform(96.2,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,1.8,0,-1.7).s().p("AgQAQIAAgfIAhAAIAAAfg");
	this.shape_1.setTransform(95.5,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,5.8,0,-5.8).s().p("Ag5BOIAAibIAnAAIAAAxIAZAAQAWAAAPAPQAOANAAAYQAAAYgOAPQgPAPgWAAgAgSAtIASAAQAJAAAFgFQAFgGAAgKQAAgKgGgFQgFgGgIAAIgSAAg");
	this.shape_2.setTransform(84.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,6.7,0,-6.7).s().p("AgSBOIAAh6IgvAAIAAghICEAAIAAAhIgxAAIAAB6g");
	this.shape_3.setTransform(70,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,6.7,0,-6.6).s().p("AAcBOIABhiIgBAAQgHARgFAIIgqBJIgnAAIAAibIAnAAIgCBiQAHgQAGgJIAqhJIAnAAIAACbg");
	this.shape_4.setTransform(54.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,6.7,0,-6.6).s().p("AAcBOIAAh6Ig2AAIAAB6IgnAAIAAibICDAAIAACbg");
	this.shape_5.setTransform(38.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,7.2,0,-7.1).s().p("Ag4BEIAQgdIAJAGQAFACAEAAQAJAAADgIIg8h1IAqAAIAhBNIAahNIAoAAIg1CDIgJANQgGAGgGAEQgIAEgKAAQgSAAgRgMg");
	this.shape_6.setTransform(23,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,6.6,0,-6.5).s().p("AAWBOIgfhAIgQAAIAABAIgnAAIAAibIAnAAIAAA9IAQAAIAeg9IAqAAIgrBLIAAABIAtBPg");
	this.shape_7.setTransform(9.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,5.8,0,-5.8).s().p("Ag5BOIAAibIAnAAIAAAxIAZAAQAWAAAPAPQAOANAAAYQAAAYgOAPQgPAPgWAAgAgSAtIASAAQAJAAAFgFQAFgGAAgKQAAgKgGgFQgFgGgIAAIgSAAg");
	this.shape_8.setTransform(-10.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,9.8,0,-9.7).s().p("AhgBOIAAibIAnAAIAAB6IAnAAIAAh6IAlAAIAAB6IAnAAIAAh6IAnAAIAACbg");
	this.shape_9.setTransform(-29.5,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,5.1,0,-5).s().p("AgxBOIAAibIBgAAIAAAhIg6AAIAAAdIAuAAIAAAfIguAAIAAAdIA9AAIAAAhg");
	this.shape_10.setTransform(-46.8,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,6.4,0,-6.3).s().p("AAYBOIAAg5IAAgHIAAAAQgKAEgKACQgIADgJAAQgMAAgKgEQgJgDgGgGQgMgLAAgYIAAg0IAnAAIAAArQAAAMAFAGQAFAGALAAQANAAANgIIAAg7IAnAAIAACbg");
	this.shape_11.setTransform(-61.5,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,8.2,0,-8.2).s().p("AgfBLQgPgGgLgMQgMgMgGgOQgGgPAAgQQAAgiAYgXQALgLAPgGQAPgGAQAAQAjAAAXAXQAYAXAAAiQAAAQgGAPQgGAOgMAMQgXAYgjAAQgQAAgPgGgAgdgfQgGAGgDAIQgDAIAAAJQAAAJADAIQADAIAGAHQANAOAQAAQAIAAAIgEQAHgDAHgHQAMgNAAgTQAAgJgDgIQgDgIgGgGQgHgHgHgDQgIgDgIAAQgQAAgNANg");
	this.shape_12.setTransform(-77.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,7.1,0,-7.1).s().p("AAcBOIgcg0IAAAAIgaA0IgrAAIAvhOIgvhNIAsAAIAZA1IAAAAIAbg1IAsAAIgxBNIAwBOg");
	this.shape_13.setTransform(-93.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-8.1,202.1,16.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ddsd();
	this.instance.parent = this;
	this.instance.setTransform(-162,-158,0.967,0.967);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-158,324.8,270.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,22.9,0,-22.8).s().p("AqWDpQguAAgBgvIAAlzQABgvAuAAIUtAAQAuAAABAvIAAFzQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.4,142,46.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/BkIAAgUQgcgEgRgSIAVgdQAIAHAKAFQAKAEAKAAQAGAAAFgDQAFgCAAgHQAAgFgHgEIgSgJQgLgEgKgGQgLgFgHgIQgDgFgCgGQgCgGAAgGQAAgJADgIQADgIAFgGQAMgNASgDIAAgVIAZAAIAAAUQAYACAQAPIgQAgQgIgGgJgEQgJgEgJAAQgHAAgFADQgFADAAAGQAAAFAIAEIASAJIAVAJIAJAFQAEADAEAGQAIAKAAANQAAAJgEAIQgDAIgFAGQgGAHgIAEQgIAEgKACIAAAUgAgkBCQgQgOAAgUQABgJAEgIQAEgJAFgFIAJgFQgIgHgEgHQgDgIAAgIQAAgTANgNQAOgOAYAAQAWAAAQANQAPAMAAAVQAAAJgEAJQgDAJgIAHQASANAAAUQAAAKgEAIQgDAJgJAHQgPAOgbAAQgaAAgPgPgAgMAdQAAAHAFAGQAGAFAGAAQAJAAAEgEQAFgEABgIIAAgDIgDgDIgCgCIgGgFIgRgJQgIAJAAALgAgDgqQgDADgBAFQABAIAGAEQAEAFANAFQAFgJABgKQAAgHgFgEQgFgEgHAAQgGAAgDAEgAh9BOIAAgmIhGAAIAAgXIA9heIAvAAIAABVIATAAIAAAgIgTAAIAAAmgAiEgaIgXAiIAAAAIAeAAIABgzIAAAAQgEAKgEAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-10,39.2,20.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,22.9,0,-22.8).s().p("AqWDpQguAAgBgvIAAlzQABgvAuAAIUtAAQAuAAABAvIAAFzQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.4,142,46.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,22.9,0,-22.8).s().p("AqWDpQguAAgBgvIAAlzQABgvAuAAIUtAAQAuAAABAvIAAFzQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.4,142,46.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC3BkIAAgUQgcgEgRgSIAVgdQAHAHALAFQAJAEAKAAQAHAAAEgDQAFgCABgHQgBgFgGgEIgSgJQgMgEgJgGQgLgFgHgIQgEgFgCgGQgCgGAAgGQAAgJADgIQADgIAGgGQAMgNASgDIAAgVIAYAAIAAAUQAYACARAPIgRAgQgHgGgJgEQgKgEgIAAQgIAAgEADQgGADABAGQAAAFAHAEIASAJIAVAJIAJAFQAFADADAGQAIAKAAANQAAAJgDAIQgDAIgFAGQgGAHgJAEQgHAEgLACIAAAUgAAgBLQgNgHgGgLQgGgMgEgOQgDgOAAgRQAAgQADgPQADgJAHgQQAGgLANgHQAFgDAIgBQAHgCAIAAQAHAAAHACQAHABAHADIAKAIIAIAKQAIAQACAJQACAPAAAQQAAARgCAOQgGASgEAIQgDAGgFAEIgKAIQgMAGgQAAQgRAAgLgGgAAtghQgFALAAAWQAAAWAFAMQAEAMALAAQATAAAAguQAAgWgFgLQgFgLgJAAQgLAAgEALgAiAA8IASgdQAPAOARAAQAIAAAIgGQAGgFAAgJQAAgJgHgFQgHgFgLAAQgKAAgLAFIgVgIIAHhQIBYAAIAAAhIg3AAIAAAOIgCAHIABAAQAEgCAIAAQAaAAAPAPQAHAHAEAHQADAKAAALQAAAYgQAQQgIAIgLAEQgKAEgMAAQghAAgVgVgAj1BOIAAghIAhAAIAAhLIAAAAQgCAEgEAEIgKAJIgWgYIArgoIAgAAIAAB6IAiAAIAAAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-10,50.3,20.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EB2B69","#FC77A2"],[0,1],0,22.9,0,-22.8).s().p("AqWDpQguAAgBgvIAAlzQABgvAuAAIUtAAQAuAAABAvIAAFzQgBAvguAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.4,142,46.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sho();
	this.instance.parent = this;
	this.instance.setTransform(-43.8,-43.8,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-43.8,87.7,87.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smart1();
	this.instance.parent = this;
	this.instance.setTransform(-25.4,-38.1,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-38.1,50.8,76.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tabl();
	this.instance.parent = this;
	this.instance.setTransform(-25.4,-38.1,0.254,0.254);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-38.1,50.8,76.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-110,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-18,220,36);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjYAFjIAAtvMBGxAAAIAAQZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-52.5,453.1,105.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhBfIAAgfIhbAAIAAAfIgjAAIAAhAIAQAAQAKgRAFgUQAFgWAAgaIAAglIBrAAIAAB6IARAAIAABAgAkWgzQAAAVgEAXQgEAWgJAQIAwAAIAAhaIgfAAgAAKA9QgNgGgLgMQgMgMgGgOQgGgPAAgQQAAgiAYgXQALgLANgGQAPgGARAAQAkAAAXAXQAYAXAAAiQAAAQgGAPQgGAOgMAMQgXAXgkAAQgRABgPgGgAAMgtQgGAFgDAJQgDAIAAAJQAAAKADAHQADAIAGAHQANAOARAAQAJAAAIgEQAHgEAHgGQAMgNAAgTQAAgJgDgIQgDgJgGgFQgHgIgHgCQgIgEgJAAQgRAAgNAOgAnbA9QgPgGgLgMQgMgMgGgOQgGgPAAgQQAAgiAYgXQALgLAPgGQAPgGARAAQAkAAAXAXQAYAXAAAiQAAAQgGAPQgGAOgMAMQgXAXgkAAQgRABgPgGgAnZgtQgGAFgDAJQgDAIAAAJQAAAKADAHQADAIAGAHQANAOARAAQAJAAAIgEQAHgEAHgGQAMgNAAgTQAAgJgDgIQgDgJgGgFQgHgIgHgCQgIgEgJAAQgRAAgNAOgAJFBAIAAibIBjAAIAAAgIg8AAIAAAeIAwAAIAAAeIgwAAIAAAeIA/AAIAAAhgAHHBAIAAibIBiAAIAAAgIg8AAIAAAeIAwAAIAAAeIgwAAIAAAeIA/AAIAAAhgAF/BAIAAg+Ig5AAIAAA+IgmAAIAAibIAmAAIAAA/IA5AAIAAg/IAnAAIAACbgACVBAIAAibIBmAAIAAAgIhAAAIAAAZIAbAAQALAAAKADQAJAEAHAHQAOAOAAAVQAAAVgOAOQgOAOgXAAgAC7AfIAUAAQAJAAAFgEQAFgFAAgHQAAgJgFgEQgFgDgKAAIgTAAgAinBAIAAibIBCAAQAWAAAPAPQAOAPAAAYQAAAYgOANQgHAHgKAEQgJAFgLAAIgbAAIAAAwgAiAgQIATAAQAJABAFgHQAGgFAAgKQAAgKgFgGQgFgFgKgBIgTAAgApLBAIAAh7Ig4AAIAAB7IgnAAIAAibICFAAIAACbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.3,-9.5,136.6,19.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Растровое изображение 7
	this.instance = new lib.sgsfbasfg();
	this.instance.parent = this;
	this.instance.setTransform(-141,-66,0.815,0.815);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-66,274,221);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,47.4).s().p("AlEFEQiHiGABi+QgBi9CHiHQCHiHC9ABQC+gBCGCHQCHCHAAC9QAAC+iHCGQiGCHi+AAQi9AAiHiHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-46,92,92);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4E7F0").s().p("A7AWxMAAAgthMA2BAAAMAAAAthg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.9,-145.7,346,291.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FAAB36").ss(3,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.5,-141.5,339,283);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.3,142,46.8);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC9BkIAAgUQgcgEgRgSIAUgdQAIAHAKAFQAKAEAKAAQAHAAAEgDQAFgCAAgHQAAgFgHgEIgSgJQgLgEgKgGQgKgFgIgIQgDgFgCgGQgCgGAAgGQAAgJADgIQADgIAFgGQAMgNATgDIAAgVIAYAAIAAAUQAYACAQAPIgQAgQgHgGgKgEQgJgEgJAAQgHAAgFADQgFADAAAGQAAAFAIAEIASAJIAVAJIAJAFQAFADADAGQAIAKAAANQAAAJgDAIQgDAIgGAGQgGAHgIAEQgIAEgKACIAAAUgAAlBLQgMgHgGgLQgHgMgDgOQgDgOAAgRQAAgQADgPQACgJAIgQQAGgLAMgHQAGgDAHgBQAHgCAIAAQAIAAAHACQAHABAGADIALAIIAIAKQAHAQACAJQADAPAAAQQAAARgDAOQgFASgEAIQgEAGgEAEIgLAIQgLAGgRAAQgQAAgMgGgAAzghQgFALAAAWQAAAWAFAMQAEAMAKAAQAUAAAAguQAAgWgFgLQgFgLgKAAQgKAAgEALgAhkBLQgMgHgHgLQgGgMgDgOQgEgOAAgRQAAgQAEgPQACgJAHgQQAHgLAMgHQAGgDAHgBQAHgCAIAAQAIAAAHACQAHABAGADIAKAIIAIAKQAIAQACAJQADAPAAAQQAAARgDAOQgGASgEAIQgDAGgFAEIgKAIQgMAGgQAAQgRAAgLgGgAhXghQgFALAAAWQAAAWAFAMQAFAMAKAAQATAAAAguQAAgWgFgLQgFgLgJAAQgKAAgFALgAj7BOIAAghIAhAAIABhLIgBAAQgCAEgEAEIgKAJIgWgYIArgoIAhAAIAAB6IAiAAIAAAhg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.3,142,46.8);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.parent = this;
	this.instance.setTransform(-0.4,-0.3);

	this.instance_1 = new lib.Символ52();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.3,142,46.8);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-73,-18,146,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-17.6,150,38);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-27.7,168.6,55.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(-18.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.75,scaleY:0.75},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.3,-55.3,351.1,70.1);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-9.2,132.3,18.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.parent = this;
	this.instance.setTransform(-0.8,-115.9,1.297,1.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.56,scaleY:1.56},21,cjs.Ease.get(1)).to({scaleX:1.3,scaleY:1.3},23,cjs.Ease.get(1)).wait(1).to({scaleX:1.56,scaleY:1.56},21,cjs.Ease.get(1)).to({scaleX:1.3,scaleY:1.3},23,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.4,regY:-22.7,x:0.4,y:-21.5},0).wait(1).to({y:-20.4},0).wait(1).to({y:-19.4},0).wait(1).to({y:-18.4},0).wait(1).to({y:-17.5},0).wait(1).to({y:-16.6},0).wait(1).to({y:-15.8},0).wait(1).to({y:-15},0).wait(1).to({y:-14.3},0).wait(1).to({y:-13.6},0).wait(1).to({y:-13},0).wait(1).to({y:-12.4},0).wait(1).to({y:-11.9},0).wait(1).to({y:-11.4},0).wait(1).to({y:-10.9},0).wait(1).to({y:-10.5},0).wait(1).to({y:-10.1},0).wait(1).to({y:-9.8},0).wait(1).to({y:-9.4},0).wait(1).to({y:-9.1},0).wait(1).to({y:-8.8},0).wait(1).to({y:-8.6},0).wait(1).to({y:-8.3},0).wait(1).to({y:-8.1},0).wait(1).to({y:-7.9},0).wait(1).to({y:-7.7},0).wait(1).to({y:-7.5},0).wait(1).to({y:-7.4},0).wait(1).to({y:-7.2},0).wait(1).to({y:-7.1},0).wait(1).to({y:-7},0).wait(1).to({y:-6.8},0).wait(1).to({y:-6.7},0).wait(1).to({y:-6.6},0).wait(1).to({y:-6.5},0).wait(1).to({y:-6.4},0).wait(1).to({y:-6.3},0).wait(1).to({y:-6.2},0).wait(1).to({y:-6.1},0).wait(1).to({y:-6},0).wait(2).to({y:-5.9},0).wait(1).to({y:-5.8},0).wait(1).to({regX:0,regY:0,x:0,y:17},0).wait(1).to({regX:0.4,regY:-22.7,x:0.4,y:-6.8},0).wait(1).to({y:-7.9},0).wait(1).to({y:-8.9},0).wait(1).to({y:-9.9},0).wait(1).to({y:-10.8},0).wait(1).to({y:-11.7},0).wait(1).to({y:-12.5},0).wait(1).to({y:-13.2},0).wait(1).to({y:-14},0).wait(1).to({y:-14.6},0).wait(1).to({y:-15.2},0).wait(1).to({y:-15.8},0).wait(1).to({y:-16.3},0).wait(1).to({y:-16.8},0).wait(1).to({y:-17.3},0).wait(1).to({y:-17.7},0).wait(1).to({y:-18.1},0).wait(1).to({y:-18.5},0).wait(1).to({y:-18.8},0).wait(1).to({y:-19.2},0).wait(1).to({y:-19.4},0).wait(1).to({y:-19.7},0).wait(1).to({y:-20},0).wait(1).to({y:-20.2},0).wait(1).to({y:-20.4},0).wait(1).to({y:-20.6},0).wait(1).to({y:-20.8},0).wait(1).to({y:-20.9},0).wait(1).to({y:-21.1},0).wait(1).to({y:-21.2},0).wait(1).to({y:-21.4},0).wait(1).to({y:-21.5},0).wait(1).to({y:-21.6},0).wait(1).to({y:-21.7},0).wait(1).to({y:-21.8},0).wait(1).to({y:-21.9},0).wait(1).to({y:-22},0).wait(1).to({y:-22.1},0).wait(1).to({y:-22.2},0).wait(1).to({y:-22.3},0).wait(1).to({y:-22.4},0).wait(2).to({y:-22.5},0).wait(1).to({y:-22.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,-158,324.8,270.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,1.1,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-6.6,110.2,15.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.4,142,46.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADBBkIAAgUQgcgEgRgSIAVgdQAHAHALAFQAKAEAJAAQAHAAAEgDQAGgCAAgHQAAgFgIgEIgRgJQgMgEgJgGQgLgFgHgIQgEgFgCgGQgCgGAAgGQAAgJADgIQADgIAFgGQANgNASgDIAAgVIAYAAIAAAUQAYACARAPIgRAgQgHgGgKgEQgJgEgIAAQgIAAgEADQgGADAAAGQABAFAHAEIASAJIAVAJIAJAFQAFADADAGQAIAKAAANQAAAJgDAIQgDAIgFAGQgHAHgIAEQgIAEgKACIAAAUgAAqBLQgMgHgHgLQgGgMgDgOQgEgOAAgRQAAgQAEgPQACgJAHgQQAHgLAMgHQAGgDAGgBQAIgCAIAAQAHAAAHACQAHABAHADIAKAIIAIAKQAIAQABAJQADAPAAAQQAAARgDAOQgFASgEAIQgEAGgEAEIgKAIQgMAGgQAAQgRAAgLgGgAA3ghQgFALAAAWQAAAWAFAMQAEAMALAAQATAAAAguQAAgWgFgLQgFgLgJAAQgLAAgEALgAhgBLQgMgHgHgLQgGgMgDgOQgEgOABgRQgBgQAEgPQACgJAHgQQAHgLAMgHQAGgDAHgBQAHgCAIAAQAIAAAHACQAHABAGADIALAIIAHAKQAIAQACAJQADAPAAAQQAAARgDAOQgFASgFAIQgDAGgEAEIgLAIQgMAGgQAAQgQAAgMgGgAhSghQgGALAAAWQAAAWAGAMQAEAMAKAAQATAAAAguQAAgWgEgLQgGgLgJAAQgKAAgEALgAkCBOIgBgRIABgNIAEgMQAFgMAHgHQAIgIAJgGIAQgKQAIgFAFgFQAFgFAAgGQAAgHgFgEQgFgEgHAAQgHAAgHAEQgGAFgEAHIgcgTQAHgPAOgJQAIgFAIgCQAIgDAKAAQALAAAJADQAKAEAIAGQAIAGAEAJQAEAJAAAMIgBANQgCAGgEAFQgJAMgGAFIgkAYQgHAGAAAFIBDAAIAAAhg");
	this.shape.setTransform(-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.4,142,46.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.4,142,46.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.8,-43.8,87.7,87.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.4,-38.1,50.8,76.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(3.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-38.1,50.9,76.3);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-18,220,36);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.parent = this;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-228,-54,457,109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.5,-54.5,460,112);


(lib.Символ12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(0,17.5,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ13();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,2);
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.5,-52.5,460,112);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-46,92,92);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.5,-141.5,339,283);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ59();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ57();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-23.3,142,46.8);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12_1();
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.5,-54.3,460,112);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-17.6,150,38);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 34
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.873,0.873);

	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Символ 33
	this.instance_2 = new lib.Символ44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-4.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Символ 33
	this.instance_3 = new lib.Символ33();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ47();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,10.5);
	this.instance_4.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1.19},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-23.4,150,55.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.2,-32.1,176,64);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(-192,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({y:156.1,alpha:0},10,cjs.Ease.get(1)).wait(60).to({y:19.1,alpha:1},9).wait(61).to({y:156.1,alpha:0},10).wait(60).to({y:19.1,alpha:1},9).wait(60).to({y:156.1,alpha:0},9).wait(60).to({y:19.1,alpha:1},9).wait(32));

	// Слой 11
	this.instance_1 = new lib.Символ58();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.5,35);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(332).to({_off:false},0).to({x:-51.8},5,cjs.Ease.get(1)).to({scaleX:0.61,x:-135},2,cjs.Ease.get(1)).to({scaleX:1,x:-193.8},2,cjs.Ease.get(1)).wait(31).to({y:117},10,cjs.Ease.get(1)).wait(41));

	// Символ 26
	this.instance_2 = new lib.Символ26();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-193.8,126.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(322).to({_off:false},0).to({y:35.1},10).wait(5).to({scaleX:0.61,x:-221.5},2,cjs.Ease.get(1)).to({scaleX:1,x:-334.8},2,cjs.Ease.get(1)).to({x:-464.9},5,cjs.Ease.get(1)).to({_off:true},1).wait(76));

	// sho.png
	this.instance_3 = new lib.Символ23();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-199.2,-209.2,1.496,1.496);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(322).to({_off:false},0).to({scaleX:2.07,scaleY:2.07,y:-64.2,alpha:1},10).wait(40).to({scaleX:1.5,scaleY:1.5,y:-209.2,alpha:0},10).to({_off:true},1).wait(40));

	// Слой 10
	this.instance_4 = new lib.Символ55();
	this.instance_4.parent = this;
	this.instance_4.setTransform(75,35);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).to({x:-51.8},5,cjs.Ease.get(1)).to({scaleX:0.55,x:-146.7},2,cjs.Ease.get(1)).to({scaleX:1,x:-193.7},2,cjs.Ease.get(1)).wait(31).to({y:119.5},10,cjs.Ease.get(1)).to({_off:true},1).wait(178));

	// Символ 25
	this.instance_5 = new lib.Символ25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-193.8,126.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184).to({_off:false},0).to({y:35},10,cjs.Ease.get(1)).wait(5).to({regX:-0.1,regY:-0.1,scaleX:0.55,x:-225.4,y:34.9},2,cjs.Ease.get(1)).to({regX:0,regY:0,scaleX:1,x:-336.8,y:35},2,cjs.Ease.get(1)).to({x:-458.3},5,cjs.Ease.get(1)).to({_off:true},1).wait(214));

	// tabl.png
	this.instance_6 = new lib.Символ19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-197.6,-209.3,1.496,1.496);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(184).to({_off:false},0).to({scaleX:1.84,scaleY:1.84,x:-197.7,y:-64.4,alpha:1},10,cjs.Ease.get(1)).wait(40).to({scaleX:1.5,scaleY:1.5,x:-197.6,y:-209.3,alpha:0},10).to({_off:true},1).wait(178));

	// Слой 9
	this.instance_7 = new lib.Символ51();
	this.instance_7.parent = this;
	this.instance_7.setTransform(53,36);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).to({x:-51.8},4,cjs.Ease.get(1)).to({regX:-0.1,scaleX:0.6,x:-136.6},2,cjs.Ease.get(1)).to({regX:0,scaleX:1,x:-193.8},2,cjs.Ease.get(1)).wait(28).to({y:117},10,cjs.Ease.get(1)).to({_off:true},1).wait(322));

	// Символ 24
	this.instance_8 = new lib.Символ24();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-193.8,126.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({y:36.1},10,cjs.Ease.get(1)).wait(4).to({scaleX:0.6,x:-222.1},2,cjs.Ease.get(1)).to({scaleX:1,x:-263.8},2,cjs.Ease.get(1)).to({x:-465.3},6,cjs.Ease.get(1)).to({_off:true},1).wait(354));

	// smart1.png
	this.instance_9 = new lib.Символ21();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-196.6,-209.2,1.496,1.496);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({scaleX:1.97,scaleY:1.97,y:-63.2,alpha:1},10,cjs.Ease.get(1)).wait(36).to({scaleX:1.5,scaleY:1.5,y:-209.2,alpha:0},10).to({_off:true},1).wait(322));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354,-138.9,324.8,270.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.parent = this;
	this.instance.setTransform(190.9,171.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.2,32.2,324.8,270.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Символ 12
	this.instance = new lib.Символ49();
	this.instance.parent = this;
	this.instance.setTransform(4.7,-181.7);

	this.instance_1 = new lib.Символ12_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4.7,-183.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.7,-131.8,0.692,0.692);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.79,scaleY:0.79,x:14.9,y:-77.6,alpha:1},9,cjs.Ease.get(1)).wait(1).to({scaleX:0.69,scaleY:0.69,x:21.7,y:-131.8,alpha:0},9).wait(1));

	// Символ 10
	this.tovar = new lib.Символ10();
	this.tovar.parent = this;
	this.tovar.setTransform(0,-161);

	this.timeline.addTween(cjs.Tween.get(this.tovar).to({y:-171,alpha:0},9,cjs.Ease.get(1)).wait(1).to({y:-161,alpha:1},9).wait(1));

	// Символ 27
	this.instance_3 = new lib.Символ27();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-2.4,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:45},9,cjs.Ease.get(1)).wait(1).to({y:127},9,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.dama = new lib.Символ9();
	this.dama.parent = this;
	this.dama.setTransform(0,210.1,0.652,0.652);

	this.timeline.addTween(cjs.Tween.get(this.dama).to({scaleX:1.13,scaleY:1.13,y:8},9,cjs.Ease.get(1)).wait(1).to({scaleX:0.65,scaleY:0.65,y:210.1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.9,-236,460,547.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 4
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-35,170.4,0.685,0.685);
	this.instance.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-465,y:-222},88).to({x:-35,y:170.4},29).wait(1).to({regX:-0.1,regY:0.1,x:-137.6,y:76.8},21).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27.5,-208,0.848,0.848);
	this.instance_1.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-472.5,y:165.9},40).to({x:-27.5,y:-208},99).wait(1));

	// Символ 4
	this.instance_2 = new lib.Символ4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-346,-230,0.511,0.511,0,0,0,-0.1,0);
	this.instance_2.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-114,y:214.9},78).to({x:-346,y:-230},61).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-321,171.9,0.717,0.717);
	this.instance_3.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-123.5,y:-220.5},50).to({x:-321,y:171.9},89).wait(1));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-7,3);
	this.instance_4.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-465.5,y:-93},69).to({x:-7,y:3},70).wait(1));

	// Символ 4
	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-501.4,-0.5,1.293,1.293);
	this.instance_5.alpha = 0.949;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:0.6,y:-27.5},99).to({x:-501.4,y:-0.5},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-560.9,-253.5,599.9,458.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(20,1.4,1,1,-135,0,0,-240.8,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-250.4,regY:-7.6,rotation:-132.6,x:37.8,y:-1.9},0).wait(1).to({rotation:-130.2,x:37.9,y:-1.1},0).wait(1).to({rotation:-127.8,x:38,y:-0.4},0).wait(1).to({rotation:-125.3,x:38.1,y:0.4},0).wait(1).to({rotation:-122.9,y:1.1},0).wait(1).to({rotation:-120.5,y:1.9},0).wait(1).to({rotation:-118.1,y:2.7},0).wait(1).to({rotation:-115.7,x:37.9,y:3.4},0).wait(1).to({rotation:-113.3,x:37.8,y:4.2},0).wait(1).to({rotation:-110.9,x:37.7,y:4.9},0).wait(1).to({rotation:-108.4,x:37.6,y:5.7},0).wait(1).to({rotation:-106,x:37.4,y:6.4},0).wait(1).to({rotation:-103.6,x:37.1,y:7.1},0).wait(1).to({rotation:-101.2,x:36.9,y:7.9},0).wait(1).to({rotation:-98.8,x:36.5,y:8.5},0).wait(1).to({rotation:-96.4,x:36.2,y:9.2},0).wait(1).to({rotation:-94,x:35.9,y:9.9},0).wait(1).to({rotation:-91.5,x:35.5,y:10.6},0).wait(1).to({rotation:-89.1,x:35.1,y:11.2},0).wait(1).to({rotation:-86.7,x:34.7,y:11.8},0).wait(1).to({rotation:-84.3,x:34.2,y:12.4},0).wait(1).to({rotation:-81.9,x:33.8,y:13.1},0).wait(1).to({rotation:-79.5,x:33.3,y:13.6},0).wait(1).to({rotation:-77,x:32.8,y:14.2},0).wait(1).to({rotation:-74.6,x:32.2,y:14.7},0).wait(1).to({rotation:-72.2,x:31.6,y:15.2},0).wait(1).to({rotation:-69.8,x:31,y:15.7},0).wait(1).to({rotation:-67.4,x:30.4,y:16.1},0).wait(1).to({rotation:-65,x:29.8,y:16.5},0).wait(1).to({rotation:-62.6,x:29.1,y:16.9},0).wait(1).to({rotation:-60.1,x:28.4,y:17.3},0).wait(1).to({rotation:-57.7,x:27.7,y:17.7},0).wait(1).to({rotation:-55.3,x:27.1,y:18},0).wait(1).to({rotation:-52.9,x:26.4,y:18.2},0).wait(1).to({rotation:-50.5,x:25.7,y:18.5},0).wait(1).to({rotation:-48.1,x:25,y:18.7},0).wait(1).to({rotation:-45.7,x:24.2,y:18.9},0).wait(1).to({rotation:-43.2,x:23.5,y:19.1},0).wait(1).to({rotation:-40.8,x:22.8,y:19.2},0).wait(1).to({rotation:-38.4,x:22,y:19.3},0).wait(1).to({rotation:-36,x:21.2,y:19.4},0).wait(1).to({rotation:-33.6,x:20.5},0).wait(1).to({rotation:-31.2,x:19.7},0).wait(1).to({rotation:-28.8,x:19},0).wait(1).to({rotation:-26.3,x:18.2,y:19.3},0).wait(1).to({rotation:-23.9,x:17.4,y:19.2},0).wait(1).to({rotation:-21.5,x:16.7,y:19.1},0).wait(1).to({rotation:-19.1,x:15.9,y:18.9},0).wait(1).to({rotation:-16.7,x:15.2,y:18.7},0).wait(1).to({rotation:-14.3,x:14.5,y:18.5},0).wait(1).to({rotation:-11.9,x:13.8,y:18.3},0).wait(1).to({rotation:-9.4,x:13.1,y:18},0).wait(1).to({rotation:-7,x:12.4,y:17.7},0).wait(1).to({rotation:-4.6,x:11.7,y:17.3},0).wait(1).to({rotation:-2.2,x:11,y:16.9},0).wait(1).to({rotation:0.2,x:10.4,y:16.6},0).wait(1).to({rotation:2.6,x:9.7,y:16.1},0).wait(1).to({rotation:5,x:9.1,y:15.7},0).wait(1).to({rotation:7.5,x:8.5,y:15.2},0).wait(1).to({rotation:9.9,x:7.9,y:14.7},0).wait(1).to({rotation:12.3,x:7.4,y:14.2},0).wait(1).to({rotation:14.7,x:6.9,y:13.7},0).wait(1).to({rotation:17.1,x:6.4,y:13.1},0).wait(1).to({rotation:19.5,x:5.9,y:12.5},0).wait(1).to({rotation:22,x:5.4,y:11.9},0).wait(1).to({rotation:24.4,x:5,y:11.3},0).wait(1).to({rotation:26.8,x:4.5,y:10.6},0).wait(1).to({rotation:29.2,x:4.2,y:9.9},0).wait(1).to({rotation:31.6,x:3.9,y:9.3},0).wait(1).to({rotation:34,x:3.5,y:8.6},0).wait(1).to({rotation:36.4,x:3.2,y:7.9},0).wait(1).to({rotation:38.9,x:3,y:7.2},0).wait(1).to({rotation:41.3,x:2.7,y:6.5},0).wait(1).to({rotation:43.7,x:2.5,y:5.7},0).wait(1).to({rotation:46.1,x:2.4,y:5},0).wait(1).to({rotation:48.5,x:2.2,y:4.2},0).wait(1).to({rotation:50.9,x:2.1,y:3.5},0).wait(1).to({rotation:53.3,y:2.7},0).wait(1).to({rotation:55.8,x:2,y:1.9},0).wait(1).to({rotation:58.2,y:1.2},0).wait(1).to({rotation:60.6,y:0.5},0).wait(1).to({rotation:63,y:-0.3},0).wait(1).to({rotation:65.4,x:2.1,y:-1},0).wait(1).to({rotation:67.8,x:2.3,y:-1.8},0).wait(1).to({rotation:70.2,x:2.4,y:-2.5},0).wait(1).to({rotation:72.7,x:2.6,y:-3.3},0).wait(1).to({rotation:75.1,x:2.8,y:-4},0).wait(1).to({rotation:77.5,x:3,y:-4.7},0).wait(1).to({rotation:79.9,x:3.3,y:-5.4},0).wait(1).to({rotation:82.3,x:3.7,y:-6.1},0).wait(1).to({rotation:84.7,x:3.9,y:-6.8},0).wait(1).to({rotation:87.1,x:4.3,y:-7.5},0).wait(1).to({rotation:89.6,x:4.8,y:-8.2},0).wait(1).to({rotation:92,x:5.2,y:-8.8},0).wait(1).to({rotation:94.4,x:5.6,y:-9.4},0).wait(1).to({rotation:96.8,x:6,y:-10},0).wait(1).to({rotation:99.2,x:6.5,y:-10.6},0).wait(1).to({rotation:101.6,x:7.1,y:-11.1},0).wait(1).to({rotation:104,x:7.6,y:-11.7},0).wait(1).to({rotation:106.5,x:8.2,y:-12.2},0).wait(1).to({rotation:108.9,x:8.7,y:-12.7},0).wait(1).to({rotation:111.3,x:9.4,y:-13.2},0).wait(1).to({rotation:113.7,x:9.9,y:-13.6},0).wait(1).to({rotation:116.1,x:10.6,y:-14},0).wait(1).to({rotation:118.5,x:11.3,y:-14.4},0).wait(1).to({rotation:121,x:11.9,y:-14.8},0).wait(1).to({rotation:123.4,x:12.6,y:-15.1},0).wait(1).to({rotation:125.8,x:13.3,y:-15.4},0).wait(1).to({rotation:128.2,x:14,y:-15.7},0).wait(1).to({rotation:130.6,x:14.7,y:-15.9},0).wait(1).to({rotation:133,x:15.5,y:-16.1},0).wait(1).to({rotation:135.4,x:16.2,y:-16.3},0).wait(1).to({rotation:137.9,x:16.9,y:-16.4},0).wait(1).to({rotation:140.3,x:17.7,y:-16.5},0).wait(1).to({rotation:142.7,x:18.5,y:-16.6},0).wait(1).to({rotation:145.1,x:19.2},0).wait(1).to({rotation:147.5,x:20,y:-16.7},0).wait(1).to({rotation:149.9,x:20.7},0).wait(1).to({rotation:152.3,x:21.5,y:-16.6},0).wait(1).to({rotation:154.8,x:22.3},0).wait(1).to({rotation:157.2,x:23,y:-16.5},0).wait(1).to({rotation:159.6,x:23.7,y:-16.3},0).wait(1).to({rotation:162,x:24.5,y:-16.1},0).wait(1).to({rotation:164.4,x:25.2,y:-15.9},0).wait(1).to({rotation:166.8,x:25.9,y:-15.7},0).wait(1).to({rotation:169.2,x:26.6,y:-15.5},0).wait(1).to({rotation:171.7,x:27.3,y:-15.1},0).wait(1).to({rotation:174.1,x:28,y:-14.8},0).wait(1).to({rotation:176.5,x:28.7,y:-14.4},0).wait(1).to({rotation:178.9,x:29.4,y:-14.1},0).wait(1).to({rotation:181.3,x:30.1,y:-13.6},0).wait(1).to({rotation:183.7,x:30.6,y:-13.2},0).wait(1).to({rotation:186.1,x:31.2,y:-12.8},0).wait(1).to({rotation:188.6,x:31.8,y:-12.3},0).wait(1).to({rotation:191,x:32.4,y:-11.8},0).wait(1).to({rotation:193.4,x:33,y:-11.2},0).wait(1).to({rotation:195.8,x:33.5,y:-10.7},0).wait(1).to({rotation:198.2,x:33.9,y:-10.1},0).wait(1).to({rotation:200.6,x:34.4,y:-9.5},0).wait(1).to({rotation:203,x:34.8,y:-8.9},0).wait(1).to({rotation:205.5,x:35.3,y:-8.3},0).wait(1).to({rotation:207.9,x:35.7,y:-7.6},0).wait(1).to({rotation:210.3,x:36,y:-7},0).wait(1).to({rotation:212.7,x:36.4,y:-6.3},0).wait(1).to({rotation:215.1,x:36.7,y:-5.6},0).wait(1).to({rotation:217.5,x:36.9,y:-4.9},0).wait(1).to({rotation:220,x:37.2,y:-4.1},0).wait(1).to({rotation:222.4,x:37.4,y:-3.4},0).wait(1).to({rotation:224.8,x:37.6,y:-2.7},0).wait(1).to({rotation:227.2,x:37.8,y:-2},0).wait(1).to({rotation:229.6,x:37.9,y:-1.2},0).wait(1).to({rotation:232,x:38,y:-0.4},0).wait(1).to({rotation:234.4,y:0.3},0).wait(1).to({rotation:236.9,x:38.1,y:1.1},0).wait(1).to({rotation:239.3,y:1.9},0).wait(1).to({rotation:241.7,y:2.6},0).wait(1).to({rotation:244.1,x:38,y:3.3},0).wait(1).to({rotation:246.5,x:37.9,y:4.1},0).wait(1).to({rotation:248.9,x:37.8,y:4.9},0).wait(1).to({rotation:251.3,x:37.6,y:5.6},0).wait(1).to({rotation:253.8,x:37.4,y:6.3},0).wait(1).to({rotation:256.2,x:37.1,y:7},0).wait(1).to({rotation:258.6,x:36.9,y:7.8},0).wait(1).to({rotation:261,x:36.6,y:8.5},0).wait(1).to({rotation:263.4,x:36.2,y:9.1},0).wait(1).to({rotation:265.8,x:35.9,y:9.9},0).wait(1).to({rotation:268.2,x:35.5,y:10.5},0).wait(1).to({rotation:270.7,x:35.1,y:11.2},0).wait(1).to({rotation:273.1,x:34.7,y:11.8},0).wait(1).to({rotation:275.5,x:34.3,y:12.4},0).wait(1).to({rotation:277.9,x:33.8,y:13},0).wait(1).to({rotation:280.3,x:33.3,y:13.6},0).wait(1).to({rotation:282.7,x:32.8,y:14.1},0).wait(1).to({rotation:285.1,x:32.2,y:14.6},0).wait(1).to({rotation:287.6,x:31.7,y:15.1},0).wait(1).to({rotation:290,x:31.1,y:15.6},0).wait(1).to({rotation:292.4,x:30.4,y:16},0).wait(1).to({rotation:294.8,x:29.8,y:16.5},0).wait(1).to({rotation:297.2,x:29.2,y:16.8},0).wait(1).to({rotation:299.6,x:28.5,y:17.3},0).wait(1).to({rotation:302,x:27.9,y:17.6},0).wait(1).to({rotation:304.5,x:27.2,y:17.9},0).wait(1).to({rotation:306.9,x:26.4,y:18.2},0).wait(1).to({rotation:309.3,x:25.7,y:18.5},0).wait(1).to({rotation:311.7,x:25,y:18.7},0).wait(1).to({rotation:314.1,x:24.3,y:18.9},0).wait(1).to({rotation:316.5,x:23.5,y:19.1},0).wait(1).to({rotation:319,x:22.8,y:19.2},0).wait(1).to({rotation:321.4,x:22,y:19.3},0).wait(1).to({rotation:323.8,x:21.3},0).wait(1).to({rotation:326.2,x:20.5,y:19.4},0).wait(1).to({rotation:328.6,x:19.8},0).wait(1).to({rotation:331,x:19},0).wait(1).to({rotation:333.4,x:18.3,y:19.3},0).wait(1).to({rotation:335.9,x:17.5,y:19.2},0).wait(1).to({rotation:338.3,x:16.8,y:19.1},0).wait(1).to({rotation:340.7,x:16,y:19},0).wait(1).to({rotation:343.1,x:15.3,y:18.8},0).wait(1).to({rotation:345.5,x:14.5,y:18.6},0).wait(1).to({rotation:347.9,x:13.8,y:18.3},0).wait(1).to({rotation:350.3,x:13.1,y:18},0).wait(1).to({rotation:352.8,x:12.4,y:17.7},0).wait(1).to({rotation:355.2,x:11.7,y:17.4},0).wait(1).to({rotation:357.6,x:11.1,y:17},0).wait(1).to({rotation:360,x:10.4,y:16.6},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1,31.3,1.268,1.268,0,0,0,-240.8,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-250.4,regY:-7.6,rotation:-1.8,x:-10.5,y:51},0).wait(1).to({rotation:-3.5,x:-9.9,y:51.4},0).wait(1).to({rotation:-5.3,x:-9.3,y:51.7},0).wait(1).to({rotation:-7,x:-8.7,y:52},0).wait(1).to({rotation:-8.8,x:-8,y:52.3},0).wait(1).to({rotation:-10.5,x:-7.3,y:52.6},0).wait(1).to({rotation:-12.3,x:-6.7,y:52.9},0).wait(1).to({rotation:-14,x:-6,y:53.1},0).wait(1).to({rotation:-15.8,x:-5.4,y:53.3},0).wait(1).to({rotation:-17.6,x:-4.7,y:53.4},0).wait(1).to({rotation:-19.3,x:-4.1,y:53.6},0).wait(1).to({rotation:-21.1,x:-3.4,y:53.8},0).wait(1).to({rotation:-22.8,x:-2.7,y:53.9},0).wait(1).to({rotation:-24.6,x:-2,y:54},0).wait(1).to({rotation:-26.3,x:-1.2,y:54.1},0).wait(1).to({rotation:-28.1,x:-0.6},0).wait(1).to({rotation:-29.9,x:0.1,y:54.2},0).wait(1).to({rotation:-31.6,x:0.8},0).wait(1).to({rotation:-33.4,x:1.5},0).wait(1).to({rotation:-35.1,x:2.2,y:54.1},0).wait(1).to({rotation:-36.9,x:2.9},0).wait(1).to({rotation:-38.6,x:3.6,y:54},0).wait(1).to({rotation:-40.4,x:4.3},0).wait(1).to({rotation:-42.1,x:5,y:53.8},0).wait(1).to({rotation:-43.9,x:5.7,y:53.7},0).wait(1).to({rotation:-45.7,x:6.3,y:53.5},0).wait(1).to({rotation:-47.4,x:7,y:53.4},0).wait(1).to({rotation:-49.2,x:7.7,y:53.2},0).wait(1).to({rotation:-50.9,x:8.4,y:53},0).wait(1).to({rotation:-52.7,x:9,y:52.7},0).wait(1).to({rotation:-54.4,x:9.7,y:52.5},0).wait(1).to({rotation:-56.2,x:10.3,y:52.2},0).wait(1).to({rotation:-58,x:11,y:51.9},0).wait(1).to({rotation:-59.7,x:11.6,y:51.6},0).wait(1).to({rotation:-61.5,x:12.2,y:51.3},0).wait(1).to({rotation:-63.2,x:12.8,y:50.9},0).wait(1).to({rotation:-65,x:13.4,y:50.5},0).wait(1).to({rotation:-66.7,x:14,y:50.1},0).wait(1).to({rotation:-68.5,x:14.5,y:49.7},0).wait(1).to({rotation:-70.2,x:15.1,y:49.3},0).wait(1).to({rotation:-72,x:15.6,y:48.9},0).wait(1).to({rotation:-73.8,x:16.2,y:48.4},0).wait(1).to({rotation:-75.5,x:16.7,y:47.9},0).wait(1).to({rotation:-77.3,x:17.2,y:47.5},0).wait(1).to({rotation:-79,x:17.7,y:46.9},0).wait(1).to({rotation:-80.8,x:18.1,y:46.4},0).wait(1).to({rotation:-82.5,x:18.6,y:45.9},0).wait(1).to({rotation:-84.3,x:19,y:45.4},0).wait(1).to({rotation:-86,x:19.5,y:44.8},0).wait(1).to({rotation:-87.8,x:19.8,y:44.3},0).wait(1).to({rotation:-89.6,x:20.2,y:43.7},0).wait(1).to({rotation:-91.3,x:20.6,y:43},0).wait(1).to({rotation:-93.1,x:20.9,y:42.4},0).wait(1).to({rotation:-94.8,x:21.2,y:41.8},0).wait(1).to({rotation:-96.6,x:21.6,y:41.2},0).wait(1).to({rotation:-98.3,x:21.9,y:40.5},0).wait(1).to({rotation:-100.1,x:22.2,y:39.9},0).wait(1).to({rotation:-101.9,x:22.4,y:39.3},0).wait(1).to({rotation:-103.6,x:22.7,y:38.6},0).wait(1).to({rotation:-105.4,x:22.9,y:37.9},0).wait(1).to({rotation:-107.1,x:23.1,y:37.3},0).wait(1).to({rotation:-108.9,x:23.3,y:36.6},0).wait(1).to({rotation:-110.6,x:23.4,y:35.9},0).wait(1).to({rotation:-112.4,x:23.5,y:35.2},0).wait(1).to({rotation:-114.1,x:23.6,y:34.5},0).wait(1).to({rotation:-115.9,x:23.7,y:33.8},0).wait(1).to({rotation:-117.7,x:23.8,y:33.1},0).wait(1).to({rotation:-119.4,y:32.5},0).wait(1).to({rotation:-121.2,y:31.8},0).wait(1).to({rotation:-122.9,y:31.1},0).wait(1).to({rotation:-124.7,y:30.3},0).wait(1).to({rotation:-126.4,y:29.6},0).wait(1).to({rotation:-128.2,x:23.7,y:28.9},0).wait(1).to({rotation:-130,x:23.6,y:28.3},0).wait(1).to({rotation:-131.7,x:23.5,y:27.5},0).wait(1).to({rotation:-133.5,x:23.4,y:26.9},0).wait(1).to({rotation:-135.2,x:23.2,y:26.2},0).wait(1).to({rotation:-137,x:23.1,y:25.5},0).wait(1).to({rotation:-138.7,x:22.9,y:24.8},0).wait(1).to({rotation:-140.5,x:22.7,y:24.2},0).wait(1).to({rotation:-142.2,x:22.4,y:23.5},0).wait(1).to({rotation:-144,x:22.2,y:22.8},0).wait(1).to({rotation:-145.8,x:22,y:22.2},0).wait(1).to({rotation:-147.5,x:21.7,y:21.6},0).wait(1).to({rotation:-149.3,x:21.4,y:21},0).wait(1).to({rotation:-151,x:21,y:20.3},0).wait(1).to({rotation:-152.8,x:20.6,y:19.7},0).wait(1).to({rotation:-154.5,x:20.3,y:19.1},0).wait(1).to({rotation:-156.3,x:19.9,y:18.5},0).wait(1).to({rotation:-158,x:19.5,y:18},0).wait(1).to({rotation:-159.8,x:19,y:17.4},0).wait(1).to({rotation:-161.6,x:18.6,y:16.9},0).wait(1).to({rotation:-163.3,x:18.2,y:16.3},0).wait(1).to({rotation:-165.1,x:17.7,y:15.8},0).wait(1).to({rotation:-166.8,x:17.2,y:15.3},0).wait(1).to({rotation:-168.6,x:16.7,y:14.8},0).wait(1).to({rotation:-170.3,x:16.2,y:14.4},0).wait(1).to({rotation:-172.1,x:15.7,y:13.9},0).wait(1).to({rotation:-173.9,x:15.1,y:13.5},0).wait(1).to({rotation:-175.6,x:14.6,y:13},0).wait(1).to({rotation:-177.4,x:14,y:12.6},0).wait(1).to({rotation:-179.1,x:13.5,y:12.2},0).wait(1).to({rotation:-180.9,x:12.9,y:11.9},0).wait(1).to({rotation:-182.6,x:12.3,y:11.4},0).wait(1).to({rotation:-184.4,x:11.7,y:11.1},0).wait(1).to({rotation:-186.1,x:11,y:10.8},0).wait(1).to({rotation:-187.9,x:10.3,y:10.5},0).wait(1).to({rotation:-189.7,x:9.7,y:10.3},0).wait(1).to({rotation:-191.4,x:9.1,y:10},0).wait(1).to({rotation:-193.2,x:8.4,y:9.8},0).wait(1).to({rotation:-194.9,x:7.8,y:9.5},0).wait(1).to({rotation:-196.7,x:7.1,y:9.4},0).wait(1).to({rotation:-198.4,x:6.4,y:9.2},0).wait(1).to({rotation:-200.2,x:5.7,y:9},0).wait(1).to({rotation:-202,x:5,y:8.9},0).wait(1).to({rotation:-203.7,x:4.3,y:8.8},0).wait(1).to({rotation:-205.5,x:3.7,y:8.7},0).wait(1).to({rotation:-207.2,x:2.9,y:8.6},0).wait(1).to({rotation:-209,x:2.3},0).wait(1).to({rotation:-210.7,x:1.5},0).wait(1).to({rotation:-212.5,x:0.8,y:8.5},0).wait(1).to({rotation:-214.2,x:0.2},0).wait(1).to({rotation:-216,x:-0.5,y:8.6},0).wait(1).to({rotation:-217.8,x:-1.2},0).wait(1).to({rotation:-219.5,x:-1.9,y:8.7},0).wait(1).to({rotation:-221.3,x:-2.6,y:8.8},0).wait(1).to({rotation:-223,x:-3.3,y:8.9},0).wait(1).to({rotation:-224.8,x:-4,y:9.1},0).wait(1).to({rotation:-226.5,x:-4.7,y:9.3},0).wait(1).to({rotation:-228.3,x:-5.3,y:9.4},0).wait(1).to({rotation:-230,x:-6,y:9.6},0).wait(1).to({rotation:-231.8,x:-6.7,y:9.9},0).wait(1).to({rotation:-233.6,x:-7.3,y:10.1},0).wait(1).to({rotation:-235.3,x:-8,y:10.4},0).wait(1).to({rotation:-237.1,x:-8.6,y:10.7},0).wait(1).to({rotation:-238.8,x:-9.2,y:11},0).wait(1).to({rotation:-240.6,x:-9.8,y:11.3},0).wait(1).to({rotation:-242.3,x:-10.4,y:11.6},0).wait(1).to({rotation:-244.1,x:-11.1,y:12},0).wait(1).to({rotation:-245.9,x:-11.6,y:12.4},0).wait(1).to({rotation:-247.6,x:-12.2,y:12.7},0).wait(1).to({rotation:-249.4,x:-12.8,y:13.2},0).wait(1).to({rotation:-251.1,x:-13.4,y:13.6},0).wait(1).to({rotation:-252.9,x:-13.9,y:14.1},0).wait(1).to({rotation:-254.6,x:-14.4,y:14.6},0).wait(1).to({rotation:-256.4,x:-14.9,y:15},0).wait(1).to({rotation:-258.1,x:-15.4,y:15.5},0).wait(1).to({rotation:-259.9,x:-15.9,y:16},0).wait(1).to({rotation:-261.7,x:-16.3,y:16.6},0).wait(1).to({rotation:-263.4,x:-16.8,y:17.1},0).wait(1).to({rotation:-265.2,x:-17.2,y:17.6},0).wait(1).to({rotation:-266.9,x:-17.7,y:18.2},0).wait(1).to({rotation:-268.7,x:-18,y:18.8},0).wait(1).to({rotation:-270.4,x:-18.4,y:19.4},0).wait(1).to({rotation:-272.2,x:-18.7,y:20},0).wait(1).to({rotation:-274,x:-19.1,y:20.6},0).wait(1).to({rotation:-275.7,x:-19.4,y:21.2},0).wait(1).to({rotation:-277.5,x:-19.8,y:21.8},0).wait(1).to({rotation:-279.2,x:-20,y:22.5},0).wait(1).to({rotation:-281,x:-20.3,y:23.1},0).wait(1).to({rotation:-282.7,x:-20.5,y:23.8},0).wait(1).to({rotation:-284.5,x:-20.7,y:24.5},0).wait(1).to({rotation:-286.2,x:-21,y:25.1},0).wait(1).to({rotation:-288,x:-21.2,y:25.8},0).wait(1).to({rotation:-289.8,x:-21.3,y:26.5},0).wait(1).to({rotation:-291.5,x:-21.5,y:27.2},0).wait(1).to({rotation:-293.3,x:-21.6,y:27.9},0).wait(1).to({rotation:-295,y:28.5},0).wait(1).to({rotation:-296.8,x:-21.7,y:29.3},0).wait(1).to({rotation:-298.5,x:-21.8,y:29.9},0).wait(1).to({rotation:-300.3,y:30.6},0).wait(1).to({rotation:-302,x:-21.9,y:31.3},0).wait(1).to({rotation:-303.8,x:-21.8,y:32},0).wait(1).to({rotation:-305.6,y:32.8},0).wait(1).to({rotation:-307.3,y:33.4},0).wait(1).to({rotation:-309.1,x:-21.6,y:34.2},0).wait(1).to({rotation:-310.8,y:34.8},0).wait(1).to({rotation:-312.6,x:-21.4,y:35.5},0).wait(1).to({rotation:-314.3,x:-21.3,y:36.2},0).wait(1).to({rotation:-316.1,x:-21.1,y:36.9},0).wait(1).to({rotation:-317.9,x:-21,y:37.5},0).wait(1).to({rotation:-319.6,x:-20.7,y:38.2},0).wait(1).to({rotation:-321.4,x:-20.6,y:38.8},0).wait(1).to({rotation:-323.1,x:-20.3,y:39.5},0).wait(1).to({rotation:-324.9,x:-20,y:40.2},0).wait(1).to({rotation:-326.6,x:-19.8,y:40.8},0).wait(1).to({rotation:-328.4,x:-19.5,y:41.5},0).wait(1).to({rotation:-330.1,x:-19.1,y:42.1},0).wait(1).to({rotation:-331.9,x:-18.8,y:42.7},0).wait(1).to({rotation:-333.7,x:-18.5,y:43.3},0).wait(1).to({rotation:-335.4,x:-18.1,y:43.9},0).wait(1).to({rotation:-337.2,x:-17.7,y:44.4},0).wait(1).to({rotation:-338.9,x:-17.3,y:45},0).wait(1).to({rotation:-340.7,x:-16.8,y:45.6},0).wait(1).to({rotation:-342.4,x:-16.4,y:46.1},0).wait(1).to({rotation:-344.2,x:-15.9,y:46.7},0).wait(1).to({rotation:-346,x:-15.4,y:47.1},0).wait(1).to({rotation:-347.7,x:-15,y:47.6},0).wait(1).to({rotation:-349.5,x:-14.4,y:48.1},0).wait(1).to({rotation:-351.2,x:-13.9,y:48.6},0).wait(1).to({rotation:-353,x:-13.4,y:49.1},0).wait(1).to({rotation:-354.7,x:-12.8,y:49.5},0).wait(1).to({rotation:-356.5,x:-12.2,y:49.9},0).wait(1).to({rotation:-358.2,x:-11.7,y:50.3},0).wait(1).to({rotation:-360,x:-11.1,y:50.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.6,-325.3,760.3,645.4);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 6
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-1.9,-21.3,1.295,1.295,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.9,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525.7,-442.7,984.4,835.5);


// stage content:
(lib._336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 336 * 2;
		stage.canvas.height = 280 * 2;
		stage.canvas.style.width = "336px";
		stage.canvas.style.height = "280px";
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(11);
				_this.main.tovar.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ13_1();
	this.instance.parent = this;
	this.instance.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.main = new lib.Символ7();
	this.main.parent = this;
	this.main.setTransform(168.9,192);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(169.9,162.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.8,-140.5,984.4,835.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1100,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/e3e.png?1463054753715", id:"e3e"},
		{src:"images/er4.png?1463054753715", id:"er4"},
		{src:"images/fef.jpg?1463054753715", id:"fef"},
		{src:"images/rus.jpg?1463054753715", id:"rus"},
		{src:"images/usa.jpg?1463054753715", id:"usa"}
	]
};



// symbols:



(lib.e3e = function() {
	this.initialize(img.e3e);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,176);


(lib.er4 = function() {
	this.initialize(img.er4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,194);


(lib.fef = function() {
	this.initialize(img.fef);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,100);


(lib.rus = function() {
	this.initialize(img.rus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,40);


(lib.usa = function() {
	this.initialize(img.usa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,40);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.98)").s().p("EhV6AH0IAAvnMCr1AAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550,-50,1100,100);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUBUIgUhDIgVBDIgaAAIAehVIgchSIAcAAIASA/IAUg/IAYAAIgbBSIAeBVg");
	this.shape.setTransform(64.7,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBUIAAh1IgKAnIgVBOIgbAAIAAinIAYAAIAABpIAKgjIAThGIAeAAIAACng");
	this.shape_1.setTransform(54.5,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BUIAAinIAbAAIAACOIAWAAIAAiOIAYAAIAACOIAYAAIAAiOIAaAAIAACng");
	this.shape_2.setTransform(42.1,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOBUIAAhEQgEAEgHADQgEACgFAAQgJAAgGgCQgGgEgEgFQgFgEgCgHQgCgFAAgJIAAhIIAbAAIAABGQAAAHAFAFQAEACAEAAQAHAAADgDQAEgEAAgIIAAhFIAaAAIAACng");
	this.shape_3.setTransform(29.9,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghBTIAAgXQALABAFgDQAGgDABgJIABgBIgliAIAaAAIAPA6IAGAlIAGglIAMg6IAcAAIgdB7QgCANgDAHQgEAJgGAFQgEAGgJACIgOACIgJgBg");
	this.shape_4.setTransform(20.1,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUBUIAAiOIgVAAIgDBjQAAAMgCAHQgDAJgEAFQgFAFgHACQgHADgKAAIgEAAIAAgZQAJAAADgCQAEgDAAgMIAFh9IBIAAIAACng");
	this.shape_5.setTransform(9.4,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_6.setTransform(-4.2,-2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOBUIAAhIIgcAAIAABIIgaAAIAAinIAaAAIAABIIAcAAIAAhIIAbAAIAACng");
	this.shape_7.setTransform(-14.1,-2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBUIAAinIAbAAIAAA/IALAAQAJAAAHADQAIADAFAFQAFAGACAGQADAHAAAKIAAAWQAAAKgDAIQgCAIgFAFQgFAFgIADQgHADgJAAgAgLA7IALAAQAGAAADgDQADgDAAgKIAAgZQAAgIgDgEQgDgEgGABIgLAAg");
	this.shape_8.setTransform(-27.5,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBUIAAinIAnAAQAJABAHACQAIACAEAFQAFAFADAHQACAHAAAKIAAAGQAAANgEAIQgEAJgJAEQAFACAEACQAEADACAEQAEAJAAAOIAAANQAAAKgCAIQgDAHgFAGQgFAFgHACQgIADgKAAgAgNA7IANAAQAHAAAEgDQADgEAAgJIAAgOQAAgMgEgEQgEgFgHAAIgMAAgAgNgOIALAAQAFAAAEgEQAEgEAAgKIAAgJQAAgJgDgFQgDgDgFAAIgNAAg");
	this.shape_9.setTransform(-37,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_10.setTransform(-46.9,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBUIAAiOIgbAAIAAgZIBPAAIAAAZIgbAAIAACOg");
	this.shape_11.setTransform(-56,-2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBTQgIgDgFgFQgFgGgCgIQgDgIAAgKIAAhVQAAgKADgIQACgIAFgGQAFgFAIgDQAHgCAIAAQAJAAAIACQAHADAFAFQAFAGACAIQADAIAAAKIAAAQIgZAAIAAgSQAAgJgEgDQgDgEgHgBQgEABgEAEQgDADAAAJIAABZQAAAIADAFQAEADAEAAQAHAAADgDQAEgFAAgIIAAgYIAZAAIAAAWQAAAKgDAIQgCAIgFAGQgFAFgHADQgIADgJAAQgIAAgHgDg");
	this.shape_12.setTransform(-64.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-14,143.6,28);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBUIAAinIBFAAIAAAZIgrAAIAAAvIAiAAIAAAWIgiAAIAAAwIArAAIAAAZg");
	this.shape.setTransform(80.1,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBUIAAiOIgbAAIAAgZIBPAAIAAAZIgbAAIAACOg");
	this.shape_1.setTransform(71.3,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmBUIAAinIAmAAQAJAAAHADQAIADAFAFQAFAGACAHQADAIAAAKIAAAWQAAAKgDAHQgCAHgFAEQgFAGgIACQgHAEgJAAIgLAAIAAA/gAgLgCIALAAQAGAAADgDQADgEAAgJIAAgZQAAgIgDgEQgDgEgGABIgLAAg");
	this.shape_2.setTransform(62.9,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBTQgHgDgFgFQgFgGgDgIQgDgIABgKIAAhVQgBgKADgIQADgIAFgGQAFgFAHgDQAIgCAIAAQAJAAAHACQAIADAFAFQAFAGADAIQADAIAAAKIAABVQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAQgIAAgIgDgAgJg4QgDADAAAJIAABZQAAAIADAFQAEADAFAAQAGAAADgDQAEgFAAgIIAAhZQAAgJgEgDQgDgEgGgBQgFABgEAEg");
	this.shape_3.setTransform(53.3,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOBUIAAiOIgcAAIAACOIgaAAIAAinIBRAAIAACng");
	this.shape_4.setTransform(43.5,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBTQgIgDgFgFQgFgGgCgIQgDgIAAgKIAAhVQAAgKADgIQACgIAFgGQAFgFAIgDQAHgCAIAAQAJAAAIACQAHADAFAFQAFAGACAIQADAIAAAKIAAAQIgZAAIAAgSQAAgJgEgDQgDgEgHgBQgEABgEAEQgDADAAAJIAABZQAAAIADAFQAEADAEAAQAHAAADgDQAEgFAAgIIAAgYIAZAAIAAAWQAAAKgDAIQgCAIgFAGQgFAFgHADQgIADgJAAQgIAAgHgDg");
	this.shape_5.setTransform(33.8,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_6.setTransform(20.5,-2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOBUIAAhIIgcAAIAABIIgaAAIAAinIAaAAIAABIIAcAAIAAhIIAbAAIAACng");
	this.shape_7.setTransform(10.6,-2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASBmIAAh0IgLAnIgVBNIgbAAIAAimIAYAAIAABpIAKglIAThEIAdAAIAACmgAgKhMQgFgCgDgEQgEgDgCgFQgCgFABgGIAQAAQAAAGADADQADACADAAQAGAAACgCQADgDABgGIAQAAQAAAGgCAFQgCAFgDADQgEAEgFACQgGABgGAAQgFAAgFgBg");
	this.shape_8.setTransform(-3.3,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_9.setTransform(-13.4,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBUIAAiOIgbAAIAAgZIBPAAIAAAZIgbAAIAACOg");
	this.shape_10.setTransform(-22.5,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQBTQgHgDgFgFQgFgGgDgIQgCgIAAgKIAAhVQAAgKACgIQADgIAFgGQAFgFAHgDQAIgCAIAAQAJAAAIACQAHADAFAFQAFAGADAIQACAIAAAKIAABVQAAAKgCAIQgDAIgFAGQgFAFgHADQgIADgJAAQgIAAgIgDgAgIg4QgEADAAAJIAABZQAAAIAEAFQADADAFAAQAGAAADgDQAEgFAAgIIAAhZQAAgJgEgDQgDgEgGgBQgFABgDAEg");
	this.shape_11.setTransform(-31.5,-2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBUIAAinIBIAAIAAAZIguAAIAAAqIANAAQAKAAAIADQAHADAFAFQAFAFADAGQACAIAAAKIAAASQAAAKgCAIQgDAIgFAFQgFAFgHADQgIADgKAAgAgNA7IANAAQAHAAADgDQAEgDAAgKIAAgUQAAgKgEgDQgDgDgHgBIgNAAg");
	this.shape_12.setTransform(-41.1,-2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_13.setTransform(-51.1,-2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmBUIAAinIAmAAQAJAAAHADQAIADAFAFQAFAGACAHQADAIAAAKIAAAWQAAAKgDAHQgCAHgFAEQgFAGgIACQgHAEgJAAIgLAAIAAA/gAgLgCIALAAQAGAAADgDQADgEAAgJIAAgZQAAgIgDgEQgDgEgGABIgLAAg");
	this.shape_14.setTransform(-60.1,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_15.setTransform(-69.8,-2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQBTQgHgDgFgFQgFgGgDgIQgCgIAAgKIAAgTIAZAAIAAAVQAAAIAEAFQADADAGAAQAGAAADgDQAEgFAAgLIAAgNQAAgLgFgFQgDgFgIAAIgHAAIAAgWIAJAAQAFAAAEgEQAFgEAAgKIAAgJQAAgLgEgEQgDgEgGgBQgGABgEAEQgDADAAAJIAAAOIgYAAIAAgNQgBgKADgIQADgIAEgFQAFgFAHgDQAIgCAIAAQAJAAAHACQAIADAFAFQAFAGACAIQADAIAAAKIAAAEQAAANgFAJQgEAJgJAEIAIADQADADACAFQAFAIAAAOIAAANQAAAKgDAIQgCAIgFAGQgFAFgIADQgHADgJAAQgIAAgIgDg");
	this.shape_16.setTransform(-79.4,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-14,172.8,28);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aq7CbIAAk1IV3AAIAAE1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-15.5,140,31.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAqD0IAAjSIhVAAIAADSIhNAAIAAnoIBNAAIAADSIBVAAIAAjSIBPAAIAAHog");
	this.shape.setTransform(97.7,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA0D0IAAlXIgfB3Ig/DgIhPAAIAAnoIBFAAIAAE0IAchqIA9jKIBVAAIAAHog");
	this.shape_1.setTransform(67.9,-7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwD0IhJjCIgYAsIAACWIhNAAIAAnoIBNAAIAADWIBjjWIBNAAIhrDbIBrENg");
	this.shape_2.setTransform(39.5,-7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglD0IAAmhIhQAAIAAhHIDrAAIAABHIhQAAIAAGhg");
	this.shape_3.setTransform(11.5,-7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhoD0IAAnoIDRAAIAABHIiEAAIAACIIBoAAIAABEIhoAAIAACQICEAAIAABFg");
	this.shape_4.setTransform(-13.4,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah1D0IAAnoIB0AAQAbAAAXAIQAVAGANAOQAOAOAHAVQAHAWAAAcIAAARQAAAngMAYQgNAZgZALQAQAGALAJQAKAJAIAOQAMAZAAAoIAAApQABAcgIAVQgIAWgOAPQgPAPgWAHQgWAIgdgBgAgpCvIAqAAQAVAAAKgLQAJgLABgbIAAgqQAAgigMgOQgLgMgZAAIgjAAgAgpgsIAfAAQAUAAAMgLQALgMABgdIAAgbQAAgagJgNQgKgMgSABIgmAAg");
	this.shape_5.setTransform(-40.4,-7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxDyQgVgIgPgQQgPgQgHgXQgJgXABgdIAAj9QgBgdAJgYQAHgWAPgQQAPgQAVgIQAXgIAaAAQAcAAAVAIQAXAIAOAQQAPAQAIAWQAHAYABAdIAAD9QgBAdgHAXQgIAXgPAQQgOAQgXAIQgVAIgcAAQgaAAgXgIgAgbioQgLAMAAAZIAAEHQAAAZALAMQAJALASAAQATAAAKgLQAKgMAAgZIAAkHQAAgZgKgMQgKgLgTAAQgSAAgJALg");
	this.shape_6.setTransform(-68.9,-7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqD0IAAmhIhVAAIAAGhIhNAAIAAnoIDxAAIAAHog");
	this.shape_7.setTransform(-97.7,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-37,229.4,74);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxD0IAAnoIBxAAQAbAAAWAJQAWAHAOAQQAOAPAHAXQAIAWAAAdIAABBQAAAcgIAXQgHAVgOAPQgOAQgWAHQgWAJgbgBIgkAAIAAC4gAgkgIIAkAAQASABAJgLQAJgLAAgZIAAhJQAAgZgJgLQgJgLgSABIgkAAg");
	this.shape.setTransform(90.4,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoD0IAAnoIDQAAIAABHIiCAAIAACIIBnAAIAABEIhnAAIAACQICCAAIAABFg");
	this.shape_1.setTransform(63.7,-7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABREWIAAhDIijAAIAABDIhKAAIAAiHIAeAAQAJgMAFgPQADgOABgXIASlkIDWAAIAAGkIAhAAIAACHgAggBOQgBAbgGAPQgFAOgKAJIBjAAIAAldIg/AAg");
	this.shape_2.setTransform(33.2,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiKD1IAAhGQAcAAAJgIQAKgKACggIAMlxIDXAAIAAHoIhOAAIAAmiIhBAAIgJEnQgBAhgGAYQgHAYgNAOQgOAPgVAHQgUAHgdAAg");
	this.shape_3.setTransform(-0.7,-7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0ErIAAlXIgfB2Ig/DhIhPAAIAAnoIBFAAIAAE0IAchsIA9jIIBVAAIAAHogAghjiQgPgFgJgKQgKgKgGgPQgFgOAAgSIAwAAQABATAIAGQAHAHAOAAQARAAAIgHQAJgGACgTIAuAAQAAARgFAPQgFAPgKAKQgKAKgQAFQgQAFgUAAQgRAAgQgFg");
	this.shape_4.setTransform(-30.2,-12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5D0IgOhYIhcAAIgOBYIhGAAIBOnoIBvAAIBOHogAAgBZIgjj2IgkD2IBHAAg");
	this.shape_5.setTransform(-59.4,-7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhjD0IAAhEQAgACAOgIQASgJAFgZIAAgEIhrl4IBNAAIApCnIAXBxIAShwIAjioIBRAAIhTFrQgIAkgJAWQgLAZgQAPQgRAQgZAHQgUAFgZAAIgXgBg");
	this.shape_6.setTransform(-87.9,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.4,-37,209,74);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBUIAAiOIgbAAIAAgZIBPAAIAAAZIgbAAIAACOg");
	this.shape.setTransform(30.3,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASBUIAAh1IgLAnIgVBOIgbAAIAAinIAYAAIAABpIAKgjIAThGIAdAAIAACng");
	this.shape_1.setTransform(21,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBfIAAgXIg2AAIAAAXIgaAAIAAguIAKAAQAEgEACgGQABgEAAgIIAGh5IBIAAIAACPIAMAAIAAAugAgKAaQAAAKgDAFQgBAFgDADIAgAAIAAh3IgUAAg");
	this.shape_2.setTransform(9.9,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBUIAAinIBGAAIAAAZIgrAAIAAAvIAiAAIAAAWIgiAAIAAAwIArAAIAAAZg");
	this.shape_3.setTransform(-0.1,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBUIAAinIBIAAIAAAZIguAAIAAAqIANAAQAKAAAIADQAHADAFAFQAFAFADAGQACAIAAAKIAAASQAAAKgCAIQgDAIgFAFQgFAFgHADQgIADgKAAgAgNA7IANAAQAHAAADgDQAEgDAAgKIAAgUQAAgKgEgDQgDgDgHgBIgNAAg");
	this.shape_4.setTransform(-9.6,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBTQgIgDgFgFQgGgGgCgIQgCgIgBgKIAAhVQABgKACgIQACgIAGgGQAFgFAIgDQAHgCAIAAQAJAAAHACQAIADAFAFQAGAGACAIQACAIABAKIAABVQgBAKgCAIQgCAIgGAGQgFAFgIADQgHADgJAAQgIAAgHgDgAgJg4QgDADAAAJIAABZQAAAIADAFQAEADAFAAQAGAAAEgDQADgFAAgIIAAhZQAAgJgDgDQgEgEgGgBQgFABgEAEg");
	this.shape_5.setTransform(-19.4,-2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOBUIAAiOIgcAAIAACOIgaAAIAAinIBRAAIAACng");
	this.shape_6.setTransform(-29.2,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-14,73.1,28);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHhGIAngLIAoBLIgXhRIAjgLIA0CpIgkAKIgshPIAYBWIgjALg");
	this.shape.setTransform(-61.2,-16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBQQgKgBgHgEQgJgFgFgHIg9g7QgQgOAAgRQAAgRARgSQARgRASAAQARAAAOAPIA8A8QAHAFAFAJQAFAJABAIQABAJgEAJQgEAJgJAKQgJAJgKAEQgHADgHAAIgEAAgAgjgnIgDACIgCADQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABIABADIAFAHIADACIAAABIAyAxIACADIAEACIADADIAEABQABAAAAAAQAAABABAAQAAAAABgBQABAAAAAAIAEgCIACgDIAAgEIgCgDIgFgHIgCgCIgBgBIgxgwIgCgCIgHgGIgCgCIgDgBIgCAAg");
	this.shape_1.setTransform(-82.4,-4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaANIAWhJIAhAJIgKAmIAbAHIAKgkIAfAKIgKAhIBOAWIgLAmg");
	this.shape_2.setTransform(-95.5,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2).p("ABOgfIhfhHQg4BWAABlIABAWIB2AAQgBgLAAgLQAAhAAhg0g");
	this.shape_3.setTransform(-75.9,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F3264").s().p("AhKBpIgBgWQAAhlA4hWIBfBHQghA0gBBAQABALABALg");
	this.shape_4.setTransform(-75.7,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2).p("ABLAtQAOAAAMABIAAh2IgagBQhbAAhQAuIBDBiQAwgaA4AAg");
	this.shape_5.setTransform(-56.3,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F3264").s().p("AhigZQBPguBbAAIAbABIAAB2QgNgCgOAAQg3AAgwAag");
	this.shape_6.setTransform(-56.1,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2).p("AiUClIABARIDnAAIAAgRQAAhxA9hcIi7iIQgzBKgbBWQgcBXAABeg");
	this.shape_7.setTransform(-94.8,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F3264").s().p("AiRCzIgBgRQAAhdAchXQAbhWAyhLIC8CJQg+BcABBwIAAARg");
	this.shape_8.setTransform(-95,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2).p("ACUBZIAcABIAAjoIgcgBQirAAiTBbICCDAQBWgzBmAAg");
	this.shape_9.setTransform(-63.6,-15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F3264").s().p("AisgyQCShbCrAAIAcABIAADnIgcgBQhlAAhWA0g");
	this.shape_10.setTransform(-63.4,-15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AFAFAF").s().p("AlBiDIArhCQA+hOBcg4IG+KXg");
	this.shape_11.setTransform(-78.2,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRC7QgNgDgIgFQgHgEgFgIQgFgIAAgHQgCgGAAgJIAAjHIgRAAIAAg7IARAAIAAhFIBwAAIAABFIAUAAIAAA7IgUAAIAAC5IABAGQAAAAABABQAAAAABABQAAAAABABQAAAAABAAQADACAEAAIAIgBIAAA0QgaAGgkAAQgSAAgMgEg");
	this.shape_12.setTransform(102.9,-10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkCmQgRgEgJgGQgMgGgHgJQgHgIgFgKQgFgKgDgLQgCgKgBgMIgBibQAAgtAdgZQAcgXAyAAQBogBAABeIAABVIh8AAIgBA9IABANQAAAFADAHQABAGAFADQAFADAEAAQAHAAAFgFQAEgEACgIIACgQIAAglIBWAAIAAASQAAAcgEATQgFATgLAQQgMAQgWAIQgWAIgfAAQgUAAgPgEgAgJhqQgEADgCAHIgDANIAAAsIAmAAIAAgiQAAgkgTAAQgEAAgGADg");
	this.shape_13.setTransform(83,-7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSCbIAAAiIhZAAIAAl9IBZAAIAABKQAUgUAbAAIAJAAIAWADIALAFIALAHQAFAEAFAHQAGAHADAJQADAKACAKQACAKAAAQIAACbQAAARgDAOQgEANgFAJQgGAKgHAGQgHAHgHAEIgPAFIgNADIgKAAQghAAgQgmgAgMhHQgGAIAAATIAACGQAAAZAGAIQAFAJAJAAQALAAADgIQAEgHAAgbIAAiFQAAgUgFgHQgEgHgJAAQgIAAgGAGg");
	this.shape_14.setTransform(57.6,-10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVCjIAAjvQAAgKgFgIQgEgIgLAAQgEAAgEADQgEADgDAEQgCAEgBAGIgBAKIAADrIhXAAIAAlBIBXAAIAAAlQAFgVANgKQANgKAVAAQAjAAASATQATATAAAoIAAD3g");
	this.shape_15.setTransform(31.2,-8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhrBBIAAiBQAAgvAdgcQAegbAwAAQAyAAAdAbQAdAcAAAvIAACBQAAAzgcAaQgcAZg0AAQhrAAAAhmgAgThNIAACeQAAANAGAGQAGAGAHAAQAJAAAFgGQAGgGAAgNIAAieQAAgcgUAAQgTAAAAAcg");
	this.shape_16.setTransform(6.2,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhUDAIAAmAICpAAIAABMIhVAAIAAA9IBQAAIAABJIhQAAIAACug");
	this.shape_17.setTransform(-15.5,-10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.8,-33.2,221.4,67.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E30000","rgba(0,11,255,0)"],[0,0.933],-160,0,160,0).s().p("A4/OEIAA8HMAx/AAAIAAcHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-90,320,180);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.98)").s().p("AAwEXIAAjjIgeAAQgdAAgNAQQgOAQAAAnIAABYQAAAsgIAYIhZAAQAKgWAAgtIAAhXQAAgvAMgbQAHgQALgLQAMgMAQgGQgegMgOgcQgOgcAAgsIAAgsQAAggAIgZQAIgYAPgPQAQgRAZgHQAYgJAgAAICFAAIAAIugAgai5QgLAOAAAeIAAA3QAAAhAOAOQANAMAYAAIAiAAIAAirIgqAAQgVgBgLAOg");
	this.shape.setTransform(156.9,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.98)").s().p("AA8EXIAAmIIgkCIIhIEAIhaAAIAAouIBOAAIAAFhIAgh5IBGjoIBhAAIAAIug");
	this.shape_1.setTransform(124.7,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.98)").s().p("Ag3EVQgZgJgQgTQgRgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaARgSQAQgSAZgKQAZgJAeAAQAgAAAZAJQAYAKARASQAQASAJAaQAIAaAAAiIAAA2IhTAAIAAg8QAAgcgMgOQgMgNgWAAQgUAAgLANQgMAOAAAcIAAEtQAAAcAMAOQALAMAUAAQAWAAAMgMQAMgOAAgcIAAhRIBTAAIAABLQAAAhgIAbQgJAagQASQgRATgYAJQgZAJggAAQgeAAgZgJg");
	this.shape_2.setTransform(92.2,-8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.98)").s().p("Ag3EVQgZgJgQgTQgRgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaARgSQAQgSAZgKQAZgJAeAAQAgAAAZAJQAYAKARASQAQASAJAaQAIAaAAAiIAAA2IhTAAIAAg8QAAgcgMgOQgMgNgWAAQgUAAgLANQgMAOAAAcIAAEtQAAAcAMAOQALAMAUAAQAWAAAMgMQAMgOAAgcIAAhRIBTAAIAABLQAAAhgIAbQgJAagQASQgRATgYAJQgZAJggAAQgeAAgZgJg");
	this.shape_3.setTransform(61.4,-8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.98)").s().p("Ag4EVQgZgJgQgTQgSgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaASgSQAQgSAZgKQAZgJAfAAQAgAAAZAJQAZAKARASQARASAIAaQAJAaAAAiIAAEhQAAAhgJAbQgIAagRASQgRATgZAJQgZAJggAAQgfAAgZgJgAggjAQgMAOAAAcIAAEtQAAAcAMAOQAMANAUAAQAWAAALgNQAMgOAAgcIAAktQAAgcgMgOQgLgNgWAAQgUAAgMANg");
	this.shape_4.setTransform(30,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.98)").s().p("AiBEXIAAouICBAAQAfAAAZAJQAZAKAQARQAQARAJAbQAIAZAAAiIAABIQAAAjgIAZQgJAYgQASQgQARgZAJQgZAJgfAAIgpAAIAADSgAgpgJIApAAQAUABALgMQALgNgBgdIAAhUQABgcgLgNQgLgLgUAAIgpAAg");
	this.shape_5.setTransform(0.3,-8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.98)").s().p("AhOAoIAAhOICdAAIAABOg");
	this.shape_6.setTransform(-39.2,-8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.98)").s().p("ABAEXIgOhlIhrAAIgPBlIhRAAIBaouIB/AAIBZIugAAlBmIgokaIgqEaIBSAAg");
	this.shape_7.setTransform(-78.6,-8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.98)").s().p("AjPEXIAAouIBYAAIAAHeIBMAAIAAneIBWAAIAAHeIBNAAIAAneIBXAAIAAIug");
	this.shape_8.setTransform(-118.9,-8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.98)").s().p("Ag3EVQgZgJgQgTQgRgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaARgSQAQgSAZgKQAZgJAeAAQAgAAAZAJQAYAKARASQAQASAJAaQAIAaAAAiIAAA2IhTAAIAAg8QAAgcgMgOQgMgNgWAAQgUAAgLANQgMAOAAAcIAAEtQAAAcAMAOQALAMAUAAQAWAAAMgMQAMgOAAgcIAAhRIBTAAIAABLQAAAhgIAbQgJAagQASQgRATgYAJQgZAJggAAQgeAAgZgJg");
	this.shape_9.setTransform(-158.2,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.98)").s().p("AAwEYIAAjlIgeAAQgdAAgNARQgOAQAAAnIAABYQAAAtgIAYIhZAAQAKgXAAguIAAhWQAAguAMgdQAHgPALgLQAMgMAQgGQgegMgOgcQgOgcAAgrIAAgsQAAgiAIgYQAIgXAPgRQAQgPAZgJQAYgHAggBICFAAIAAIvgAgai4QgLANAAAeIAAA4QAAAfAOAPQANAMAYAAIAiAAIAAisIgqAAQgVAAgLAPg");
	this.shape_10.setTransform(159.2,-4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.98)").s().p("AA8EYIAAmJIgkCIIhIEBIhaAAIAAovIBOAAIAAFhIAgh6IBGjnIBhAAIAAIvg");
	this.shape_11.setTransform(127,-4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.98)").s().p("Ag3EUQgZgIgQgTQgRgSgIgaQgJgaAAgiIAAkiQAAghAJgaQAIgaARgSQAQgSAZgJQAZgKAeAAQAgAAAZAKQAYAJARASQAQASAJAaQAIAaAAAhIAAA3IhTAAIAAg7QAAgdgMgPQgMgMgWAAQgUAAgLAMQgMAPAAAdIAAErQAAAdAMAOQALAMAUAAQAWAAAMgMQAMgOAAgdIAAhQIBTAAIAABLQAAAigIAaQgJAagQASQgRATgYAIQgZAKggAAQgeAAgZgKg");
	this.shape_12.setTransform(94.5,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.98)").s().p("Ag3EUQgZgIgQgTQgRgSgIgaQgJgaAAgiIAAkiQAAghAJgaQAIgaARgSQAQgSAZgJQAZgKAeAAQAgAAAZAKQAYAJARASQAQASAJAaQAIAaAAAhIAAA3IhTAAIAAg7QAAgdgMgPQgMgMgWAAQgUAAgLAMQgMAPAAAdIAAErQAAAdAMAOQALAMAUAAQAWAAAMgMQAMgOAAgdIAAhQIBTAAIAABLQAAAigIAaQgJAagQASQgRATgYAIQgZAKggAAQgeAAgZgKg");
	this.shape_13.setTransform(63.7,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.98)").s().p("Ag4EUQgZgIgQgTQgSgSgIgaQgJgaAAgiIAAkiQAAggAJgbQAIgaASgSQAQgSAZgJQAZgKAfAAQAgAAAZAKQAZAJARASQARASAIAaQAJAbAAAgIAAEiQAAAigJAaQgIAagRASQgRATgZAIQgZAKggAAQgfAAgZgKgAggjBQgMAPAAAdIAAErQAAAdAMAOQAMANAUAAQAWAAALgNQAMgOAAgdIAAkrQAAgdgMgPQgLgMgWAAQgUAAgMAMg");
	this.shape_14.setTransform(32.3,-4.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.98)").s().p("AiBEYIAAovICBAAQAgABAYAIQAZAKAQARQARASAIAZQAIAaAAAiIAABJQAAAhgIAaQgIAYgRARQgQASgZAJQgYAJggAAIgpAAIAADTgAgpgJIApAAQAVAAAKgMQALgMAAgdIAAhUQAAgcgLgNQgKgMgVAAIgpAAg");
	this.shape_15.setTransform(2.6,-4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.98)").s().p("AhPAnIAAhOICfAAIAABOg");
	this.shape_16.setTransform(-36.9,-4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.98)").s().p("ABBEYIgQhmIhqAAIgPBmIhQAAIBZovIB/AAIBaIvgAAmBmIgqkaIgqEaIBUAAg");
	this.shape_17.setTransform(-76.3,-4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.98)").s().p("AjOEYIAAovIBYAAIAAHfIBLAAIAAnfIBXAAIAAHfIBLAAIAAnfIBYAAIAAIvg");
	this.shape_18.setTransform(-116.6,-4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.98)").s().p("Ag3EUQgZgIgQgTQgRgSgIgaQgJgaAAgiIAAkiQAAghAJgaQAIgaARgSQAQgSAZgJQAZgKAeAAQAgAAAZAKQAYAJARASQAQASAJAaQAIAaAAAhIAAA3IhTAAIAAg7QAAgdgMgPQgMgMgWAAQgUAAgLAMQgMAPAAAdIAAErQAAAdAMAOQALAMAUAAQAWAAAMgMQAMgOAAgdIAAhQIBTAAIAABLQAAAigIAaQgJAagQASQgRATgYAIQgZAKggAAQgeAAgZgKg");
	this.shape_19.setTransform(-155.9,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.9,-42,354.1,87.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.98)").s().p("AA8FWIAAmIIgkCHIhIEBIhaAAIAAouIBOAAIAAFhIAgh8IBGjlIBhAAIAAIugAglkCQgSgGgLgMQgLgLgGgRQgGgQAAgVIA2AAQACAVAJAJQAIAHAQAAQAUAAAJgHQAKgJACgVIA1AAQAAAVgGAQQgGAQgLAMQgMAMgSAGQgSAGgXAAQgUAAgRgGg");
	this.shape.setTransform(224.8,-14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.98)").s().p("Ag4EVQgZgJgQgTQgSgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaASgSQAQgSAZgKQAZgJAfAAQAgAAAZAJQAZAKARASQARASAIAaQAJAaAAAiIAAEhQAAAhgJAbQgIAagRASQgRATgZAJQgZAJggAAQgfAAgZgJgAggjAQgMAOAAAcIAAEtQAAAcAMAOQAMANAUAAQAWAAALgNQAMgOAAgcIAAktQAAgcgMgOQgLgNgWAAQgUAAgMANg");
	this.shape_1.setTransform(191.8,-8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.98)").s().p("AiGEXIAAouID0AAIAABRIidAAIAACPIAyAAQAgAAAZAJQAZAJARASQARARAIAYQAIAZAAAiIAAA8QAAAigIAZQgIAagRASQgRASgZAIQgZAKgggBgAgvDHIAyAAQAWAAALgLQAMgMAAgeIAAhGQAAgegMgMQgLgLgWAAIgyAAg");
	this.shape_2.setTransform(159.7,-8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.98)").s().p("AA8FWIAAmIIgkCHIhIEBIhaAAIAAouIBOAAIAAFhIAgh8IBGjlIBhAAIAAIugAglkCQgSgGgLgMQgLgLgGgRQgGgQAAgVIA2AAQACAVAJAJQAIAHAQAAQAUAAAJgHQAKgJACgVIA1AAQAAAVgGAQQgGAQgLAMQgMAMgSAGQgSAGgXAAQgUAAgRgGg");
	this.shape_3.setTransform(113.3,-14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.98)").s().p("AA8EXIAAmIIgkCIIhIEAIhaAAIAAouIBOAAIAAFhIAgh5IBGjoIBhAAIAAIug");
	this.shape_4.setTransform(79.1,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.98)").s().p("AA3EXIhUjfIgbAzIAACsIhYAAIAAouIBYAAIAAD0IBxj0IBYAAIh6D6IB6E0g");
	this.shape_5.setTransform(46.6,-8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.98)").s().p("Ag3EVQgZgJgQgTQgRgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaARgSQAQgSAZgKQAZgJAeAAQAgAAAZAJQAYAKARASQAQASAJAaQAIAaAAAiIAAA2IhTAAIAAg8QAAgcgMgOQgMgNgWAAQgUAAgLANQgMAOAAAcIAAEtQAAAcAMAOQALAMAUAAQAWAAAMgMQAMgOAAgcIAAhRIBTAAIAABLQAAAhgIAbQgJAagQASQgRATgYAJQgZAJggAAQgeAAgZgJg");
	this.shape_6.setTransform(13.6,-8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.98)").s().p("AAxEXIAAjvIhiAAIAADvIhYAAIAAouIBYAAIAADxIBiAAIAAjxIBaAAIAAIug");
	this.shape_7.setTransform(-19,-8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.98)").s().p("Ag4EVQgZgJgQgTQgSgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaASgSQAQgSAZgKQAZgJAfAAQAgAAAZAJQAZAKARASQARASAIAaQAJAaAAAiIAAEhQAAAhgJAbQgIAagRASQgRATgZAJQgZAJggAAQgfAAgZgJgAggjAQgMAOAAAcIAAEtQAAAcAMAOQAMANAUAAQAWAAALgNQAMgOAAgcIAAktQAAgcgMgOQgLgNgWAAQgUAAgMANg");
	this.shape_8.setTransform(-52,-8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.98)").s().p("AA8EXIAAmIIgkCIIhIEAIhaAAIAAouIBOAAIAAFhIAgh5IBGjoIBhAAIAAIug");
	this.shape_9.setTransform(-84.8,-8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.98)").s().p("AAwEXIAAndIhiAAIAAHdIhYAAIAAouIEUAAIAAIug");
	this.shape_10.setTransform(-119,-8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.98)").s().p("ABlEXIAAmPIg9GPIhRAAIhCmKIAAGKIhMAAIAAouIB6AAIA/GMIA8mMIB6AAIAAIug");
	this.shape_11.setTransform(-157.7,-8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.98)").s().p("Ah3EXIAAouIDvAAIAABRIiWAAIAACbIB2AAIAABOIh2AAIAACkICWAAIAABQg");
	this.shape_12.setTransform(-193.5,-8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.98)").s().p("AAwEXIAAjiQgOAQgWAIQgSAIgTAAQgbAAgVgJQgUgKgOgQQgOgSgHgXQgHgWAAgdIAAjtIBYAAIAADmQAAAbAPAPQAOALAUAAQAWAAAMgNQAMgPAAgcIAAjjIBYAAIAAIug");
	this.shape_13.setTransform(-225.7,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.98)").s().p("AA8FWIAAmIIgkCHIhIEBIhaAAIAAouIBOAAIAAFhIAgh8IBGjlIBhAAIAAIugAglkCQgSgGgLgMQgLgLgGgRQgGgQAAgVIA2AAQACAWAJAIQAIAHAQAAQAUAAAJgHQAKgIACgWIA1AAQAAAVgGAQQgGAQgLAMQgMAMgSAGQgSAGgXAAQgUAAgRgGg");
	this.shape_14.setTransform(228.8,-13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.98)").s().p("Ag4EVQgZgJgQgTQgSgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaASgSQAQgSAZgKQAZgJAfAAQAgAAAZAJQAZAKARASQARASAIAaQAJAaAAAiIAAEhQAAAhgJAbQgIAagRASQgRATgZAJQgZAJggAAQgfAAgZgJgAggjBQgMAOAAAdIAAEtQAAAcAMAOQAMANAUAAQAWAAALgNQAMgOAAgcIAAktQAAgdgMgOQgLgMgWAAQgUAAgMAMg");
	this.shape_15.setTransform(195.8,-6.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.98)").s().p("AiGEXIAAotID0AAIAABQIidAAIAACPIAyAAQAgAAAZAJQAZAJARASQARARAIAXQAIAaAAAiIAAA8QAAAigIAZQgIAagRASQgRARgZAJQgZAKgggBgAgvDHIAyAAQAWAAALgLQAMgMAAgeIAAhHQAAgdgMgMQgLgLgWAAIgyAAg");
	this.shape_16.setTransform(163.7,-6.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.98)").s().p("AA8FWIAAmIIgkCHIhIEBIhaAAIAAouIBOAAIAAFhIAgh8IBGjlIBhAAIAAIugAglkCQgSgGgLgMQgLgLgGgRQgGgQAAgVIA2AAQACAWAJAIQAIAHAQAAQAUAAAJgHQAKgIACgWIA1AAQAAAVgGAQQgGAQgLAMQgMAMgSAGQgSAGgXAAQgUAAgRgGg");
	this.shape_17.setTransform(117.3,-13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.98)").s().p("AA8EXIAAmIIgkCIIhIEAIhaAAIAAotIBOAAIAAFgIAgh5IBGjnIBhAAIAAItg");
	this.shape_18.setTransform(83.1,-6.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.98)").s().p("AA3EXIhTjfIgcAzIAACsIhYAAIAAotIBYAAIAADzIBxjzIBYAAIh6D5IB6E0g");
	this.shape_19.setTransform(50.6,-6.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.98)").s().p("Ag3EVQgZgJgQgTQgRgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaARgSQAQgSAZgKQAZgJAeAAQAgAAAZAJQAYAKARASQAQASAJAaQAIAaAAAiIAAA3IhTAAIAAg9QAAgdgMgOQgMgMgWAAQgUAAgLAMQgMAOAAAdIAAEtQAAAcAMAOQALANAUAAQAWAAAMgNQAMgOAAgcIAAhQIBTAAIAABKQAAAhgIAbQgJAagQASQgRATgYAJQgZAJggAAQgeAAgZgJg");
	this.shape_20.setTransform(17.6,-6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.98)").s().p("AAwEXIAAjwIhiAAIAADwIhYAAIAAotIBYAAIAADwIBiAAIAAjwIBaAAIAAItg");
	this.shape_21.setTransform(-15,-6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.98)").s().p("Ag4EVQgZgJgQgTQgSgSgIgaQgJgbAAghIAAkhQAAgiAJgaQAIgaASgSQAQgSAZgKQAZgJAfAAQAgAAAZAJQAZAKARASQARASAIAaQAJAaAAAiIAAEhQAAAhgJAbQgIAagRASQgRATgZAJQgZAJggAAQgfAAgZgJgAggjBQgMAOAAAdIAAEtQAAAcAMAOQAMANAUAAQAWAAALgNQAMgOAAgcIAAktQAAgdgMgOQgLgMgWAAQgUAAgMAMg");
	this.shape_22.setTransform(-48,-6.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.98)").s().p("AA8EXIAAmIIgkCIIhIEAIhaAAIAAotIBOAAIAAFgIAgh5IBGjnIBhAAIAAItg");
	this.shape_23.setTransform(-80.8,-6.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.98)").s().p("AAxEXIAAndIhiAAIAAHdIhYAAIAAotIEUAAIAAItg");
	this.shape_24.setTransform(-115,-6.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.98)").s().p("ABlEXIAAmPIg9GPIhRAAIhCmKIAAGKIhMAAIAAotIB6AAIA/GLIA8mLIB6AAIAAItg");
	this.shape_25.setTransform(-153.7,-6.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.98)").s().p("Ah2EXIAAotIDtAAIAABQIiWAAIAACbIB3AAIAABOIh3AAIAACkICWAAIAABQg");
	this.shape_26.setTransform(-189.5,-6.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.98)").s().p("AAwEXIAAjiQgOAPgWAJQgSAIgTAAQgbAAgVgKQgUgIgOgRQgOgSgHgXQgHgWAAgdIAAjsIBYAAIAADlQAAAbAPAPQAOALAUAAQAWAAAMgMQAMgPAAgdIAAjiIBYAAIAAItg");
	this.shape_27.setTransform(-221.7,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.5,-42,735,85.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.e3e();
	this.instance.setTransform(-104.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-88,209,176);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.er4();
	this.instance.setTransform(-64,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-97,128,194);


(lib.копияshape3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A7/N3Ib1txI52RPgAaBxUIB/DeI71Nxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGALIRPZ2IjeB/gAxU6AIDeh/INxb1g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ap/dnIJ99aImGecgAGJ+oID3BCIp9dag");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AANADIecGGIhCD3gA+omIIBCj3IdaJ9g");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAAIe/h+IAAD9gA/Lh+Ie/B+I+/B/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+fMIB++/IB/e/gAh+/LID9AAIh/e/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A3dUpIXV0gI0gXVgAUp3dIC1C1I3VUgg");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAJAJIXVUgIi1C1gA3d0oIC1i1IUgXVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A+oGJIecmGI9aJ9gAdnp/IBCD3I+cGGg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADANIJ9daIj3BCgAp/9mID3hCIGGecg");
	this.shape_9.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AxUaBIRP52Itxb1gAN37/IDeB/IxPZ2g");
	this.shape_10.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAGIb2NxIiADegA8At2ICBjeIZ0RPg");
	this.shape_11.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.6,-199.6,399.3,399.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.alpha = 0.148;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.078},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.074},10,cjs.Ease.get(-1)).to({alpha:0.148},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550,-50,1100,100);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(-0.5,-0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUBUIgUhDIgVBDIgaAAIAehVIgchSIAcAAIASA+IAUg+IAZAAIgcBSIAeBVg");
	this.shape.setTransform(65.2,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARBUIAAh1IgKAnIgVBOIgbAAIAAinIAYAAIAABpIAKgjIAUhGIAdAAIAACng");
	this.shape_1.setTransform(55,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BUIAAinIAbAAIAACOIAWAAIAAiOIAYAAIAACOIAYAAIAAiOIAaAAIAACng");
	this.shape_2.setTransform(42.7,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOBUIAAhEQgEAEgHADQgEACgFAAQgJAAgGgDQgGgDgEgFQgEgFgDgGQgCgGAAgJIAAhHIAbAAIAABGQAAAHAFAFQAEACAEAAQAHAAADgDQAEgEAAgIIAAhFIAaAAIAACng");
	this.shape_3.setTransform(30.4,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghBTIAAgXQALABAFgDQAGgDABgJIABgBIgliAIAaAAIAPA6IAGAlIAGglIAMg6IAcAAIgdB7QgCANgDAHQgEAJgGAFQgEAGgJACIgOACIgJgBg");
	this.shape_4.setTransform(20.7,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAUBUIAAiOIgVAAIgDBjQAAALgCAIQgDAJgEAFQgFAFgHADQgHACgKAAIgEAAIAAgZQAJABADgDQAEgDAAgMIAFh9IBIAAIAACng");
	this.shape_5.setTransform(9.9,-1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_6.setTransform(-3.6,-1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOBUIAAhIIgcAAIAABIIgaAAIAAinIAaAAIAABIIAcAAIAAhIIAbAAIAACng");
	this.shape_7.setTransform(-13.6,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmBUIAAinIAbAAIAAA/IALAAQAJAAAHADQAIADAFAFQAFAGACAGQADAHAAAKIAAAWQAAAKgDAIQgCAHgFAGQgFAFgIADQgHACgJABgAgLA7IALAAQAGAAADgDQADgDAAgKIAAgYQAAgJgDgEQgDgEgGABIgLAAg");
	this.shape_8.setTransform(-26.9,-1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnBUIAAinIAnAAQAJABAHACQAIACAEAFQAFAFADAHQACAIAAAJIAAAGQAAANgEAIQgEAJgJAEQAFACAEACQAEADACAEQAEAJAAAOIAAANQAAAKgCAIQgDAHgFAGQgFAFgHACQgIACgKABgAgNA7IANAAQAHAAAEgDQADgEAAgJIAAgOQAAgMgEgEQgEgFgHAAIgMAAgAgNgOIALAAQAFAAAEgEQAEgEAAgKIAAgJQAAgJgDgFQgDgDgFAAIgNAAg");
	this.shape_9.setTransform(-36.5,-1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_10.setTransform(-46.4,-1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMBUIAAiOIgbAAIAAgZIBPAAIAAAZIgbAAIAACOg");
	this.shape_11.setTransform(-55.5,-1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPBTQgIgDgFgFQgFgGgCgIQgDgHAAgLIAAhVQAAgKADgIQACgIAFgGQAFgFAIgDQAHgCAIAAQAJAAAIACQAHADAFAFQAFAGACAIQADAIAAAKIAAAQIgZAAIAAgSQAAgJgEgEQgDgDgHAAQgEAAgEADQgDAEAAAJIAABZQAAAJADAEQAEADAEAAQAHAAADgDQAEgEAAgJIAAgYIAZAAIAAAWQAAALgDAHQgCAIgFAGQgFAFgHADQgIACgJABQgIgBgHgCg");
	this.shape_12.setTransform(-64.3,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-14.5,144.6,29.1);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(-0.5,-0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjBUIAAinIBGAAIAAAZIgrAAIAAAuIAiAAIAAAXIgiAAIAAAwIArAAIAAAZg");
	this.shape.setTransform(80.7,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBUIAAiOIgbAAIAAgZIBPAAIAAAZIgbAAIAACOg");
	this.shape_1.setTransform(71.9,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmBUIAAinIAmAAQAJAAAHADQAIADAFAFQAFAGACAHQADAIAAAKIAAAWQAAAKgDAHQgCAGgFAGQgFAFgIACQgHAEgJAAIgLAAIAAA/gAgLgCIALAAQAGAAADgDQADgEAAgJIAAgYQAAgKgDgDQgDgEgGABIgLAAg");
	this.shape_2.setTransform(63.5,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQBTQgHgDgFgFQgGgGgCgIQgDgHABgLIAAhVQgBgKADgIQACgIAGgGQAFgFAHgDQAIgCAIAAQAJAAAHACQAIADAFAFQAGAGACAIQACAIABAKIAABVQgBALgCAHQgCAIgGAGQgFAFgIADQgHACgJABQgIgBgIgCgAgJg5QgDAEAAAJIAABZQAAAJADAEQAEADAFAAQAGAAADgDQAEgEAAgJIAAhZQAAgJgEgEQgDgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(53.9,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAOBUIAAiOIgcAAIAACOIgaAAIAAinIBRAAIAACng");
	this.shape_4.setTransform(44,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPBTQgIgDgFgFQgFgGgCgIQgDgHAAgLIAAhVQAAgKADgIQACgIAFgGQAFgFAIgDQAHgCAIAAQAJAAAIACQAHADAFAFQAFAGACAIQADAIAAAKIAAAQIgZAAIAAgSQAAgJgEgEQgDgDgHAAQgEAAgEADQgDAEAAAJIAABZQAAAJADAEQAEADAEAAQAHAAADgDQAEgEAAgJIAAgYIAZAAIAAAWQAAALgDAHQgCAIgFAGQgFAFgHADQgIACgJABQgIgBgHgCg");
	this.shape_5.setTransform(34.3,-1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_6.setTransform(21.1,-1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOBUIAAhIIgcAAIAABIIgaAAIAAinIAaAAIAABIIAcAAIAAhIIAbAAIAACng");
	this.shape_7.setTransform(11.1,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASBmIAAh0IgLAnIgVBNIgbAAIAAimIAYAAIAABpIAKglIAThEIAeAAIAACmgAgKhMQgFgCgDgEQgEgDgCgFQgCgFABgGIAQAAQAAAGADADQADACADAAQAGAAACgCQAEgDAAgGIAQAAQAAAGgCAFQgCAFgDADQgDAEgGACQgGABgGAAQgFAAgFgBg");
	this.shape_8.setTransform(-2.8,-3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_9.setTransform(-12.8,-1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBUIAAiOIgbAAIAAgZIBPAAIAAAZIgbAAIAACOg");
	this.shape_10.setTransform(-21.9,-1.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBTQgHgDgFgFQgFgGgDgIQgCgHAAgLIAAhVQAAgKACgIQADgIAFgGQAFgFAHgDQAIgCAIAAQAJAAAHACQAIADAFAFQAFAGADAIQADAIAAAKIAABVQAAALgDAHQgDAIgFAGQgFAFgIADQgHACgJABQgIgBgIgCgAgJg5QgDAEAAAJIAABZQAAAJADAEQAEADAFAAQAGAAADgDQAEgEAAgJIAAhZQAAgJgEgEQgDgDgGAAQgFAAgEADg");
	this.shape_11.setTransform(-30.9,-1.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnBUIAAinIBIAAIAAAZIguAAIAAArIANAAQAKAAAIACQAHADAFAFQAFAFADAGQACAIAAAKIAAASQAAAKgCAIQgDAHgFAGQgFAFgHADQgIACgKABgAgNA7IANAAQAHAAADgDQAEgDAAgKIAAgVQAAgJgEgDQgDgDgHgBIgNAAg");
	this.shape_12.setTransform(-40.6,-1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_13.setTransform(-50.5,-1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmBUIAAinIAmAAQAJAAAHADQAIADAFAFQAFAGACAHQADAIAAAKIAAAWQAAAKgDAHQgCAGgFAGQgFAFgIACQgHAEgJAAIgLAAIAAA/gAgLgCIALAAQAGAAADgDQADgEAAgJIAAgYQAAgKgDgDQgDgEgGABIgLAAg");
	this.shape_14.setTransform(-59.5,-1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AATBUIgEgfIgfAAIgEAfIgZAAIAbinIAlAAIAbCngAALAeIgLhTIgMBTIAXAAg");
	this.shape_15.setTransform(-69.3,-1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgQBTQgHgDgFgFQgFgGgDgIQgCgHAAgLIAAgTIAZAAIAAAVQAAAJAEAEQADADAGAAQAFAAAEgDQADgFABgLIAAgNQAAgLgFgFQgDgFgIAAIgHAAIAAgWIAIAAQAHAAADgEQAFgEAAgKIAAgJQgBgLgDgFQgEgDgFAAQgGAAgEADQgDAEAAAJIAAAOIgZAAIAAgMQABgLACgHQADgJAEgFQAFgFAHgDQAIgCAIAAQAJAAAHACQAIADAFAFQAFAGACAIQADAIAAAKIAAAEQAAANgFAJQgEAJgJAEIAIAEQADADACAEQAFAJAAANIAAANQAAALgDAHQgCAIgFAGQgFAFgIADQgHACgJABQgIgBgIgCg");
	this.shape_16.setTransform(-78.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.9,-14.5,173.9,29.1);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ33();
	this.instance.setTransform(-0.5,53.1,1.272,1.272);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({y:-12.9},4).wait(42).to({y:53.1},5).to({_off:true},1).wait(2));

	// Слой 5
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-0.7,81.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({y:15.9},4).wait(37).to({y:81.9},5).to({_off:true},1).wait(5));

	// Слой 2
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(-0.8,15.6,0.341,0.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({y:87.1,alpha:0},5).wait(43).to({y:15.6,alpha:1},6).wait(3));

	// Слой 1
	this.instance_3 = new lib.Символ3();
	this.instance_3.setTransform(-0.8,-12.6,0.438,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({y:58.9,alpha:0},5).wait(43).to({y:-12.6,alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.8,-31,321.8,62.2);


(lib.Символ29копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.211},10).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-15.5,140,31.1);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.alpha = 0.211;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:0.211},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-15.5,140,31.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(1.7,1.7);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 10, 57, 0)];
	this.instance_1.cache(-106,-39,213,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.4,-37,210.6,75.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2.4},4,cjs.Ease.get(-1)).to({y:-5.5},5,cjs.Ease.get(1)).to({y:-2.7},5,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-88,209,176);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2},4,cjs.Ease.get(-1)).to({y:4.4},5,cjs.Ease.get(1)).to({y:2.2},5,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-97,128,194);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-1.6,1.7);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 10, 57, 0)];
	this.instance_1.cache(-117,-39,233,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.3,-37,231.1,75.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(0,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBUIAAiOIgbAAIAAgYIBPAAIAAAYIgbAAIAACOg");
	this.shape.setTransform(31.3,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASBUIAAh1IgLAoIgVBNIgbAAIAAimIAYAAIAABoIAKgjIAThFIAeAAIAACmg");
	this.shape_1.setTransform(22,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbBfIAAgXIg2AAIAAAXIgaAAIAAguIAKAAQAEgEACgGQABgEAAgIIAGh5IBIAAIAACPIALAAIAAAugAgKAaQgBAKgBAFQgCAFgEADIAhAAIAAh3IgUAAg");
	this.shape_2.setTransform(10.9,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjBUIAAimIBGAAIAAAYIgrAAIAAAvIAiAAIAAAVIgiAAIAAAyIArAAIAAAYg");
	this.shape_3.setTransform(0.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBUIAAimIBIAAIAAAYIguAAIAAAqIANAAQAKAAAIADQAHADAFAFQAFAFADAGQACAIAAAKIAAASQAAAKgCAIQgDAHgFAGQgFAFgHADQgIADgKAAgAgNA8IANAAQAHgBADgDQAEgDAAgKIAAgUQAAgKgEgDQgDgDgHAAIgNAAg");
	this.shape_4.setTransform(-8.6,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPBSQgIgCgFgFQgGgGgCgIQgCgIgBgKIAAhVQABgKACgIQACgIAGgFQAFgGAIgDQAHgCAIAAQAJAAAHACQAIADAFAGQAGAFACAIQACAIAAAKIAABVQAAAKgCAIQgCAIgGAGQgFAFgIACQgHAEgJAAQgIAAgHgEgAgJg4QgDADAAAJIAABZQAAAIADAFQAEADAFAAQAGAAAEgDQADgFAAgIIAAhZQAAgJgDgDQgEgFgGAAQgFAAgEAFg");
	this.shape_5.setTransform(-18.4,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOBUIAAiOIgcAAIAACOIgaAAIAAimIBRAAIAACmg");
	this.shape_6.setTransform(-28.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq6CbIAAk1IV1AAIAAE1g");
	mask.setTransform(0,-0.4);

	// Слой 3
	this.instance_1 = new lib.usa();
	this.instance_1.setTransform(-71.5,-16,0.777,0.777);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-16,140,33.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(0,2.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBUIAAiOIgbAAIAAgYIBPAAIAAAYIgbAAIAACOg");
	this.shape.setTransform(31.3,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASBUIAAh1IgLAoIgVBNIgbAAIAAimIAYAAIAABoIAKgjIAThFIAeAAIAACmg");
	this.shape_1.setTransform(22,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbBfIAAgXIg2AAIAAAXIgaAAIAAguIAKAAQAEgEACgGQABgEAAgIIAGh5IBIAAIAACPIALAAIAAAugAgKAaQgBAKgBAFQgCAFgEADIAhAAIAAh3IgUAAg");
	this.shape_2.setTransform(10.9,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjBUIAAimIBGAAIAAAYIgrAAIAAAvIAiAAIAAAVIgiAAIAAAyIArAAIAAAYg");
	this.shape_3.setTransform(0.9,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnBUIAAimIBIAAIAAAYIguAAIAAAqIANAAQAKAAAIADQAHADAFAFQAFAFADAGQACAIAAAKIAAASQAAAKgCAIQgDAHgFAGQgFAFgHADQgIADgKAAgAgNA8IANAAQAHgBADgDQAEgDAAgKIAAgUQAAgKgEgDQgDgDgHAAIgNAAg");
	this.shape_4.setTransform(-8.6,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPBSQgIgCgFgFQgGgGgCgIQgCgIgBgKIAAhVQABgKACgIQACgIAGgFQAFgGAIgDQAHgCAIAAQAJAAAHACQAIADAFAGQAGAFACAIQACAIAAAKIAABVQAAAKgCAIQgCAIgGAGQgFAFgIACQgHAEgJAAQgIAAgHgEgAgJg4QgDADAAAJIAABZQAAAIADAFQAEADAFAAQAGAAAEgDQADgFAAgIIAAhZQAAgJgDgDQgEgFgGAAQgFAAgEAFg");
	this.shape_5.setTransform(-18.4,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOBUIAAiOIgcAAIAACOIgaAAIAAimIBRAAIAACmg");
	this.shape_6.setTransform(-28.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq6CbIAAk1IV1AAIAAE1g");

	// Слой 3
	this.instance_1 = new lib.rus();
	this.instance_1.setTransform(-70,-16.5,0.825,0.825);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-15.5,140,32.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(160,-220.2);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(160,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,-236.5,170,33.6);


(lib.копияsprite4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.копияshape3("synched",0);
	this.instance.setTransform(0,0,1.235,1.235);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},375).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.6,-246.6,493.3,493.3);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5));

	// Слой 1
	this.instance = new lib.Символ17();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09,y:3.3},5).to({scaleX:1,scaleY:1,y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-97,128,194);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(-266.8,257.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.16,scaleY:1.16,x:-286.6,y:289.6},0).wait(1).to({scaleX:1,scaleY:1,x:-266.8,y:257.2},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.8,20.7,170,33.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0.9,-0.8,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.98,scaleY:0.98,x:0.8,y:-0.7},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:0.9,y:-0.8},5,cjs.Ease.get(1)).to({scaleX:0.98,scaleY:0.98},4,cjs.Ease.get(-1)).to({scaleX:0.95,scaleY:0.95},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.8,-36,219.9,72);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(-0.8,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-37.8,210.6,75.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29копия();
	this.instance.setTransform(0,-0.4);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-16,160,33.1);


(lib.копияСимвол5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияsprite4();
	this.instance.setTransform(0,0,1,1.918);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.6,-473,493.3,946.1);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Слой 1
	this.instance = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11,y:2.2},5).to({scaleX:1,scaleY:1,y:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.9,-36,219.9,72);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(107.3,38.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.98)").s().p("EguJAKhIAA1BMBcTAAAIAAVBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:107.3,y:38.4}}]}).to({state:[{t:this.instance,p:{scaleX:1.072,scaleY:1.072,x:105,y:37.8}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:107.3,y:38.4}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.8,22.4,160,33.1);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},4,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86},5,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-37.8,210.6,75.7);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-37.8,210.6,75.7);


// stage content:
(lib.box_1100x100 = function(mode,startPosition,loop) {
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

	// Слой 11
	this.instance = new lib.Символ38();
	this.instance.setTransform(226.7,28.4,1.162,1.162);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ38(), 3);

	this.button_1 = new lib.Символ37();
	this.button_1.setTransform(846.3,39.2);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.Символ37(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1},{t:this.instance}]}).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(117.9,54.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(550.9,73.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.pov = new lib.Символ43();
	this.pov.setTransform(964.2,55.8);

	this.timeline.addTween(cjs.Tween.get(this.pov).wait(1));

	// Слой 2
	this.pov1 = new lib.Символ42();
	this.pov1.setTransform(832.1,82);

	this.timeline.addTween(cjs.Tween.get(this.pov1).wait(1));

	// FlashAICB
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(271.6,84);

	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(549.9,22.2,0.517,0.517,0,0,0,-0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 5
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(861.5,50,1.697,0.556,180);

	this.instance_6 = new lib.Символ5();
	this.instance_6.setTransform(256.5,50,1.709,0.556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Слой 10
	this.instance_7 = new lib.Символ35();
	this.instance_7.setTransform(550,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 6
	this.instance_8 = new lib.fef();
	this.instance_8.setTransform(371.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 8
	this.instance_9 = new lib.копияСимвол5();
	this.instance_9.setTransform(1126.8,102.3,0.81,0.676,100.1,0,0,0.1,0.1);

	this.instance_10 = new lib.копияСимвол5();
	this.instance_10.setTransform(6.8,-8.6,0.722,0.602,100.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.98)").s().p("EhV7AHzIAAvmMCr2AAAIAAPmg");
	this.shape.setTransform(550,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.1,-147,1726.2,510.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
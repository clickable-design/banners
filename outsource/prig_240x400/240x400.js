(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cube.png?1467881068741", id:"cube"},
		{src:"images/fgsdfsdgsdg.png?1467881068741", id:"fgsdfsdgsdg"},
		{src:"images/Pri_03.png?1467881068741", id:"Pri_03"},
		{src:"images/Pri_05.png?1467881068741", id:"Pri_05"},
		{src:"images/Pri_07.png?1467881068741", id:"Pri_07"},
		{src:"images/Pri_11.png?1467881068741", id:"Pri_11"},
		{src:"images/prig_01.png?1467881068741", id:"prig_01"},
		{src:"images/prig_04.png?1467881068741", id:"prig_04"},
		{src:"images/prig_08.png?1467881068741", id:"prig_08"},
		{src:"images/prig_11.png?1467881068741", id:"prig_11"},
		{src:"images/prig_14.png?1467881068741", id:"prig_14"}
	]
};



// symbols:



(lib.cube = function() {
	this.initialize(img.cube);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.fgsdfsdgsdg = function() {
	this.initialize(img.fgsdfsdgsdg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Pri_03 = function() {
	this.initialize(img.Pri_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,92);


(lib.Pri_05 = function() {
	this.initialize(img.Pri_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,248);


(lib.Pri_07 = function() {
	this.initialize(img.Pri_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,62);


(lib.Pri_11 = function() {
	this.initialize(img.Pri_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,118);


(lib.prig_01 = function() {
	this.initialize(img.prig_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,175);


(lib.prig_04 = function() {
	this.initialize(img.prig_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,81);


(lib.prig_08 = function() {
	this.initialize(img.prig_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,97);


(lib.prig_11 = function() {
	this.initialize(img.prig_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,49);


(lib.prig_14 = function() {
	this.initialize(img.prig_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,43);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgVYAgzMAAAhBlMAqxAAAMAAABBlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.9,-209.9,274,419.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fgsdfsdgsdg();
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al0BVIAAgfIheAAIAAAfIgVAAIAAgyIAMgDQAFgEADgEQADgEABgIQADgGAAgHIAEhSIBbAAIABB0IAOAAIAAA0gAm3AIIgDAOQgCAGgDAFIA7AAIAAhfIgvAAgAivA2IgKgDQgKgEgGgHQgGgHgEgKQgDgKAAgLIAAgiQAAgKADgKQAEgJAGgIQAGgGAKgFIAGgCIAEgBIANgBQAJAAAIACQAHACAGAEQANAJAFAPIgWAJQgDgIgGgFQgHgFgKAAQgIAAgFACQgFADgDADQgDAFgCAFQgCAFABAFIAAAjQgBAGACAGQACAFADAEQADAEAFADQAFADAIAAQAKAAAHgGQAGgFADgJIAWAKQgEAPgOAIQgMAJgSAAgAkpA2IgKgDQgLgEgFgIQgHgHgDgJQgDgKgBgLIAAgiQABgKADgKQADgJAHgIQAFgGALgFIAFgCQAJgCAIAAQAJAAAHACIAGACQAKAEAGAHQAHAHAEAJQADAKAAALIAAAiQAAANgDAJQgEAKgHAHQgHAHgJAEQgKADgMAAgAkpg7QgFADgDADQgEAEgCAGQgCAFAAAFIAAAkQAAAFACAGQACAFAEAFQADAEAFACQAFADAHAAQAHAAAFgDQAFgCADgEQAEgEACgFQACgGgBgGIAAgkQABgFgCgGQgCgFgEgEQgDgEgFgCQgFgCgHgBQgHABgFACgAHRA2IAAhcIgBAAIg+BcIgXAAIAAiJIAZAAIAABgIAAABIBAhgIAAgBIAUAAIAACJgAFQA2IgLgmIgFgLIgGgFIgHgEIgbAAIAAA6IgZAAIAAiJIAZAAIAAA6IAZgBQAEAAADgCQADgCADgFQAEgEABgGIAMglIAAgBIAYAAIgMApQgEAKgEAHQgGAHgHACIAIAEIAHAGQAEAGADAJIANAtgACFA2IAAiJIA3AAIANABIAGACQAIACAGAGQAFAFADAGQADAIAAAIIgBAIIgDAIIgGAGQgEAEgFACIAAABQAFACAEADIAHAIIAEAIQACAEgBAFQAAAJgDAHQgDAIgGAFQgGAGgHACQgHADgIAAgACdAgIAfAAQAGAAADgCQAFgBADgDIADgGQACgDAAgFIgCgGIgDgGQgDgBgFgDQgDgBgGAAIgfAAgACdgaIAcAAQALAAAFgFQAGgFgBgIQABgHgGgFQgFgGgLAAIgcAAgABcA2IgLgfIg0AAIgLAfIgXAAIAyiIIAAgBIAUAAIAAABIA0CIgABKACIgTg2IAAAAIgTA2IAmAAgAhGA2IAAh0IgmAAIAAgVIBlAAIAAAVIgmAAIAAB0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-8.5,97.8,17.1);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGOBeQgIgBgHgDQgNgFgJgKQgIgKgEgNQgFgNAAgPIAAgvQAAgOAFgNQAEgNAIgKQAJgKANgGQAHgDAIgBIAQgCQANAAAKADQALADAIAGQARAMAIAUIggANQgDgMgJgGQgJgHgOAAQgKAAgGACQgHAEgFAFQgFAHgCAHQgCAGAAAHIAAAxQAAAIACAHQACAHAFAGQAFAGAHAEQAGADAKAAQAOAAAJgIQAJgGADgNIAgAOQgHAVgSALQgRAMgZAAgAmqBeQgHgBgHgDQgOgFgIgKQgJgKgEgNQgFgNAAgPIAAgvQAAgOAFgNQAEgNAJgKQAIgKAOgGQAHgDAHgBIAQgCQANAAALADQALADAIAGQARAMAHAUIgfANQgEgMgIgGQgJgHgPAAQgJAAgHACQgHAEgEAFQgFAHgCAHQgCAGAAAHIAAAxQAAAIACAHQACAHAFAGQAEAGAHAEQAHADAJAAQAOAAAKgIQAIgGAEgNIAfAOQgHAVgRALQgRAMgaAAgAEXBeIAAh/IgBAAIhVB/IgeAAIAAi7IAhAAIAACDIABABIBYiEIAbAAIAAC7gAgEBeIAAi7IBKAAQAPAAALADQALAFAHAGQAIAHAEAKQAEAJAAALIgBALQgCAGgDAFQgDAEgFAGQgFAEgIAEIAAAAQAIACAFADQAGAFAEAGQADAGACAHQACAGAAAGQAAANgEAKQgFALgIAGQgHAHgKAEQgKAEgMAAgAAcBAIAqAAQAHAAAGgCQAGgCADgEQAEgDACgFQACgFAAgGQAAgEgCgFQgCgEgEgFQgDgDgGgDQgGgCgHAAIgqAAgAAcgPIAmAAQAPAAAHgIQAHgGAAgLQAAgKgHgHQgHgHgPAAIgmAAgAikBeIAAi7IBKAAQANAAALADQANAFAJAHQAIAGAFAMQAFALAAAPQAAALgEALQgFAKgIAHQgIAHgMAFQgLAEgOAAIgrAAIAABJgAiDgHIApAAQAOAAAIgIQAEgEACgGQADgEAAgGQAAgPgJgGQgJgHgOAAIgoAAgAk+BeIAAi7ICAAAIAAAeIheAAIAAAxIBPAAIAAAbIhPAAIAAAzIBeAAIAAAeg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,-9.6,96.3,19.2);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EgX/gobMAwIAAAMAAABQ3MgwIAAAEgYIAocMAAAhQ3");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-260.3,312.2,520.6);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube();
	this.instance.setTransform(-31.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-34.5,63,69);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADtBNIAAgcIhVAAIAAAcIgTAAIAAguIALgCQAFgEACgDQADgEABgHIADgMIADhKIBTAAIAABpIANAAIAAAvgACxAHIgDANQgBAFgDAFIA1AAIAAhWIgrAAgAEHAhQAIgBAEgEQAEgDADgFQADgFABgIQABgHAAgKIAAhBIBRAAIAAB8IgWAAIAAhpIgmAAIAAAjQAAATgCALQgCAOgEAJIgFAHIgIAGQgHAFgMABgAlUAxIgKgDQgJgEgFgGQgGgHgDgJQgDgIAAgKIAAgeQAAgKADgJQADgIAGgHQAFgGAJgEQAJgEAMAAQALAAAJAEQAJADAFAHQAGAGAEAJQAEAIAAALIAAAeQAAALgEAJQgEAJgGAGQgFAGgKAEQgIADgLAAgAlUg1QgFACgDAEQgDADgBAFQgCAFAAAFIAAAgQAAAFACAFQABAEADAEQADAEAFACQAEACAHAAQAFAAAFgBQAGgDACgDQAEgEACgFQABgFAAgFIAAggQAAgGgBgFIgGgIQgCgEgGgBQgFgDgFAAQgHAAgEADgAHNAxIAAg0IgRAAIgHABIgGACQgEACgCAEQgDAEgBAHIgKAgIgXAAIAKgkQACgIAEgFQAEgEAHgDQgGgBgEgEIgHgHIgDgJIgCgKQAAgIADgHQADgHAGgFQAEgFAHgCQAIgDAIAAIA0AAIAAB8gAGsg3QgEABgDADQgFAEgBAKQAAAEACADIAFAFQADACAEABIAJABIAXAAIAAgjIgZAAQgFAAgDABgAA8AxIgKgcIgvAAIgIAcIgWAAIAth8IARAAIAwB8gAAsACIgRgxIAAAAIgRAxIAiAAgAg+AxIAAhJIAAAAIgaA3IgRAAIgag3IAABJIgWAAIAAh8IAUAAIAkBPIABAAIAjhPIAVAAIAAB8gAkEAxIAAh8IAxAAQAJAAAHACQAIADAHAFQAGAEADAIQACAHAAAKQABAIgDAHQgDAHgFAFQgGAFgIADQgHABgJAAIgdAAIAAAxgAjugSIAbAAQAKAAAFgFIAEgGQACgDAAgEQgBgKgGgFQgGgEgJAAIgaAAgAmaAxIgKgjIgEgKQgDgEgDAAIgGgDIgYAAIAAA0IgXAAIAAh8IAXAAIAAA0IAWAAQAEAAADgDIAGgFQACgEACgGIALgiIAVAAIgMAlQgCAJgEAGQgFAHgHACQAEABAEACIAGAGQAEAFACAJIANAog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-7.7,96.8,15.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am4B1QgLgDgKgGQgSgLgJgUIAggPQACAGAEAEQAEAFAGAEQAFAEAGACQAHACAHAAQAQAAALgIQAKgIAAgOQAAgNgIgIQgIgHgQgBIgWAAIAAgcIAXAAQANAAAJgFQAIgGAAgLQAAgMgKgFQgJgHgNAAQgHABgGABQgHACgFAEQgLAGgFALIgdgPQAIgSASgMQARgMAbAAQAPAAAMAEQANAEAIAGQAJAHAEAKQAEAIAAANIgBAKQgBAHgDAGQgEADgFAFQgFAFgJAEIAAABQAKADAGAFQAFAFAEAGQADAGACAIIABAMQAAANgFALQgGALgKAIQgKAHgNAEQgNAEgPAAQgOAAgLgDgAHHB2IAAiBIgBAAIhXCBIgfAAIAAi/IAiAAIAACHIABAAIBaiHIAcAAIAAC/gACzB2IAAi/ICDAAIAAAeIhgAAIAAAxIBRAAIAAAdIhRAAIAAA1IBgAAIAAAegAAPB2IAAi/IBMAAQANAAAMADQANAEAJAIQAJAHAFAMQAEALAAAPQAAAMgEAJQgFAKgIAJQgIAHgMAFQgLAFgPAAIgsAAIAABKgAAxANIAqAAQAPAAAIgIQAEgFACgDQACgFAAgGQAAgPgJgGQgJgIgOAAIgpAAgAiMB2IAAi/ICDAAIAAAeIhgAAIAAAxIBRAAIAAAdIhRAAIAAA1IBgAAIAAAegAk4B2IAAi/IBOAAQAPAAALADQALAEAIAHQAIAIAEAJQAEAKAAAMIgBALQgCAGgDADIgIAJQgFAFgIADIAAABQAIADAFAEQAGAFAEAGQADAGACAIQACAFAAAHQAAANgEALQgFAKgIAHQgIAIgKADQgKAFgMgBgAkVBYIArAAQAHAAAGgCQAGgDAEgDQADgEACgFQACgFAAgFQAAgFgCgFQgCgFgDgEQgEgEgGgDQgGgBgHAAIgrAAgAkVAFIAnAAQAPAAAIgGQAGgHAAgLQAAgLgGgGQgIgIgPAAIgnAAgAGHhTQgIgEgEgHQgFgFgCgIIgDgMIAYAAIACAFIADAHIAGAEQACACAFAAQAEAAAEgCIAGgEIACgHIACgFIAXAAIgCAMQgCAIgFAFQgFAHgIAEQgIAEgLAAQgMAAgIgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-12,97.9,24.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582D7C").s().p("A76LPIAA2dMA31AAAIAAWdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.7,-71.9,357.5,143.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582D7C").s().p("AokCUQgSgFgPgIQgcgTgNgfIAwgVQADAIAHAHQAGAHAJAGQAJAGAJADQAKAEAKAAQAaAAARgNQAQgMAAgWQAAgUgNgMQgNgMgYAAIgiAAIAAgqIAjAAQAVAAANgLQANgKAAgRQAAgRgPgKQgOgJgVAAQgKAAgKACQgKAEgHAFQgSAKgHARIgvgXQANgdAcgSQAbgRApAAQAYAAATAFQATAFAMALQAOAKAHAPQAGAOAAATIgBARQgCAJgFAJQgGAJgIAHQgHAIgOAFIAAACQAPAFAJAGQAJAIAGAKQAFAJACALIACASQAAAWgIAQQgKARgPAMQgPALgUAHQgVAGgYAAQgUAAgRgEgAI6CWIAAh/IgoAAIgSACQgHACgIAGQgHAGgGAJQgGAKgEAPIgXBNIg4AAIAZhVQAFgTAIgOQAJgNARgGQgOgDgKgJQgJgGgGgJQgHgLgCgLIgEgYQAAgTAIgQQAGgSANgLQAMgLASgHQARgGAVAAIB5AAIAAEqgAHphkQgIADgGAGQgOALAAAVQAAALAFAHQADAHAIAGQAGAEAKACIAUACIA5AAIAAhTIg8AAQgMAAgJADgACeCWIAAkqIB2AAQAVAAASAFQATAHAOAMQAOAKAIATQAHARAAAYQAAASgGAQQgIAQgNALQgNAMgSAIQgRAHgXAAIhEAAIAAB0gADTgLIBBAAQAXAAANgNQAGgHADgIQADgIAAgIQABgYgOgLQgOgLgYAAIg+AAgAhSCWIAAkqIDHAAIAAAvIiTAAIAABOIB9AAIAAAsIh9AAIAABRICTAAIAAAwgAleCWIAAkqIB4AAQAYAAASAFQAQAHAMAKQAMALAHAPQAGAPABATIgCARQgDAJgEAHQgFAIgIAHQgJAIgMAFIAAABQAMAEAJAFQAJAIAGAKQAFAJADALQAEAKAAALQAAATgHAQQgHAQgNALQgMAMgQAFQgPAHgSAAgAkoBmIBCAAQAMAAAJgDQAJgDAGgHQAFgFADgHQAEgIAAgJQAAgHgEgIQgDgHgFgHQgGgFgJgFQgJgDgMAAIhCAAgAkogYIA8AAQAYAAAMgMQAKgLABgRQgBgQgKgLQgMgLgYAAIg8AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.4,-15.2,124.8,30.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#582D7C").s().p("Ag+CVQgLgCgMgEQgVgKgNgPQgOgQgIgVQgGgUAAgYIAAhLQAAgWAGgVQAIgUAOgQQANgQAVgJQAWgJAcAAQAaAAASAJQAVAIAPAPQAOAQAIAUQAJAVgBAYIAABLQABAbgJAVQgHAVgQAPQgOAPgWAIQgSAIgZAAgAg+hhQgKAFgIAJQgIAJgDAMQgEAKAAAMIAABPQAAAMAEAMQADALAIAKQAIAIAKAGQALAFAPAAQAOAAAMgEQAKgGAHgIQAHgJAEgMQADgMAAgNIAAhPQAAgNgDgMQgEgKgHgJQgHgJgKgEQgMgFgOAAQgPAAgLAFgApPCVQgMgCgKgEQgWgKgNgPQgOgQgIgVQgGgUAAgYIAAhLQAAgWAGgVQAIgUAOgQQANgQAWgJQAVgJAcAAQAaAAAUAJQAVAIAPAPQAPAQAHAUQAJAVAAAYIAABLQAAAbgJAVQgHAVgQAPQgOAPgWAIQgUAIgZAAgApPhhQgLAFgHAJQgHAJgEAMQgEAKAAAMIAABPQAAAMAEAMQAEALAHAKQAHAIALAGQALAFAPAAQAOAAAMgEQALgGAHgIQAIgJAEgMQAEgMAAgNIAAhPQAAgNgEgMQgEgKgIgJQgHgJgLgEQgMgFgOAAQgPAAgLAFgAOACVIAAjKIgBAAIiHDKIgxAAIAAkqIA2AAIAADSIAAABICMjTIArAAIAAEqgAJYCVIAAiwIgBAAIg9CGIgqAAIg9iHIgBACIAACvIg1AAIAAkqIAxAAIBWDAIACAAIBUjAIAzAAIAAEqgAB+CVIAAkqIB2AAQAVAAASAGQATAGAOAMQAPALAHASQAIARgBAYQABATgHAQQgHAQgOALQgNAMgSAHQgRAIgXAAIhEAAIAABzgACzgMIBBAAQAWAAANgNQAHgGADgJQADgHABgJQAAgYgPgKQgNgLgXAAIg/AAgAjjCVIgZhTQgFgPgFgIQgHgKgHgGIgOgGIg7gBIAACBIg1AAIAAkqIA1AAIAAB9IA2gBQAIgBAHgFQAHgEAHgJQAGgJAFgPIAahRIAyAAIgbBZQgGAVgLAPQgLAQgPAEQAKADAHAEQAIAFAGAIQAJAPAHAWIAdBggAsLCVIAAj7IhzAAIAAD7Ig1AAIAAkqIDcAAIAAEqg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.8,-15.2,189.7,30.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Pri_11();
	this.instance.setTransform(-31,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-59,62,118);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Pri_07();
	this.instance.setTransform(-28.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-31,57,62);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Pri_05();
	this.instance.setTransform(-65,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-124,130,248);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prig_04();
	this.instance.setTransform(-40.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-40.5,81,81);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prig_08();
	this.instance.setTransform(-45,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-48.5,90,97);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prig_11();
	this.instance.setTransform(-24,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24.5,48,49);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prig_14();
	this.instance.setTransform(-25,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-21.5,50,43);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.prig_01();
	this.instance.setTransform(-87.5,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-87.5,175,175);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube();
	this.instance.setTransform(-31.5,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-34.5,63,69);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Pri_03();
	this.instance.setTransform(-26,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-46,52,92);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:14.7},0).wait(1).to({rotation:29.4},0).wait(1).to({rotation:44.1},0).wait(1).to({rotation:58.8},0).wait(1).to({rotation:73.5},0).wait(1).to({rotation:88.2},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:117.6},0).wait(1).to({rotation:132.2},0).wait(1).to({rotation:146.9},0).wait(1).to({rotation:161.6},0).wait(1).to({rotation:176.3},0).wait(1).to({rotation:191},0).wait(1).to({rotation:205.7},0).wait(1).to({rotation:220.4},0).wait(1).to({rotation:235.1},0).wait(1).to({rotation:249.8},0).wait(1).to({rotation:264.5},0).wait(1).to({rotation:279.2},0).wait(1).to({rotation:293.9},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:323.3},0).wait(1).to({rotation:338},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:367.3},0).wait(1).to({rotation:382},0).wait(1).to({rotation:396.7},0).wait(1).to({rotation:411.4},0).wait(1).to({rotation:426.1},0).wait(1).to({rotation:440.8},0).wait(1).to({rotation:455.5},0).wait(1).to({rotation:470.2},0).wait(1).to({rotation:484.9},0).wait(1).to({rotation:499.6},0).wait(1).to({rotation:514.3},0).wait(1).to({rotation:529},0).wait(1).to({rotation:543.7},0).wait(1).to({rotation:558.4},0).wait(1).to({rotation:573.1},0).wait(1).to({rotation:587.8},0).wait(1).to({rotation:602.4},0).wait(1).to({rotation:617.1},0).wait(1).to({rotation:631.8},0).wait(1).to({rotation:646.5},0).wait(1).to({rotation:661.2},0).wait(1).to({rotation:675.9},0).wait(1).to({rotation:690.6},0).wait(1).to({rotation:705.3},0).wait(1).to({rotation:720},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-34.5,63,69);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Символ 36
	this.instance = new lib.Символ36();
	this.instance.setTransform(0.3,-33);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(10));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(-0.5,-9.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:1.14,scaleY:1.14,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(7));

	// Символ 31
	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(0,9.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({scaleX:1.15,scaleY:1.15,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(4));

	// Символ 30
	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(-0.4,29.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({scaleX:1.18,scaleY:1.18,alpha:1},5).to({scaleX:1,scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-42.6,97.9,84.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(0.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-261.1,312.2,520.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-261.1,312.2,520.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(0,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.7,-45.9,357.5,143.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.5,-261.1,312.2,520.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 23
	this.instance = new lib.Символ23();
	this.instance.setTransform(-1.2,0.5,1.524,1.524,0,0,0,0,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,scaleX:1.6,scaleY:1.6,y:24.7},0).wait(1).to({scaleX:1.65,scaleY:1.65,y:25.6},0).wait(1).to({scaleX:1.69,scaleY:1.69,y:26.2},0).wait(1).to({scaleX:1.73,scaleY:1.73,y:26.8},0).wait(1).to({scaleX:1.76,scaleY:1.76,y:27.3},0).wait(1).to({scaleX:1.79,scaleY:1.79,y:27.7},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:28},0).wait(1).to({scaleX:1.83,scaleY:1.83,y:28.4},0).wait(1).to({scaleX:1.85,scaleY:1.85,y:28.6},0).wait(1).to({scaleX:1.86,scaleY:1.86,y:28.8},0).wait(1).to({scaleX:1.88,scaleY:1.88,y:29},0).wait(1).to({scaleX:1.88,scaleY:1.88,y:29.2},0).wait(1).to({scaleX:1.89,scaleY:1.89,y:29.3},0).wait(1).to({scaleX:1.9,scaleY:1.9,y:29.4},0).wait(1).to({scaleX:1.91,scaleY:1.91,y:29.5},0).wait(1).to({scaleX:1.91,scaleY:1.91,y:29.6},0).wait(1).to({scaleX:1.92,scaleY:1.92},0).wait(1).to({scaleX:1.92,scaleY:1.92,y:29.7},0).wait(1).to({regY:-15.2,scaleX:1.92,scaleY:1.92,y:0.5},0).wait(1).to({regY:0,scaleX:1.86,scaleY:1.86,y:28.7},0).wait(1).to({scaleX:1.8,scaleY:1.8,y:27.9},0).wait(1).to({scaleX:1.76,scaleY:1.76,y:27.2},0).wait(1).to({scaleX:1.72,scaleY:1.72,y:26.7},0).wait(1).to({scaleX:1.69,scaleY:1.69,y:26.2},0).wait(1).to({scaleX:1.67,scaleY:1.67,y:25.8},0).wait(1).to({scaleX:1.64,scaleY:1.64,y:25.5},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:25.2},0).wait(1).to({scaleX:1.61,scaleY:1.61,y:24.9},0).wait(1).to({scaleX:1.59,scaleY:1.59,y:24.7},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:24.5},0).wait(1).to({scaleX:1.57,scaleY:1.57,y:24.3},0).wait(1).to({scaleX:1.56,scaleY:1.56,y:24.2},0).wait(1).to({scaleX:1.55,scaleY:1.55,y:24.1},0).wait(1).to({scaleX:1.55,scaleY:1.55,y:24},0).wait(1).to({scaleX:1.54,scaleY:1.54,y:23.9},0).wait(1).to({scaleX:1.54,scaleY:1.54,y:23.8},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.53,scaleY:1.53,y:23.7},0).wait(1).to({regY:-15.2,scaleX:1.52,scaleY:1.52,y:0.5},0).wait(1));

	// Символ 22
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(0,-8.5,1.367,1.367,0,0,0,0,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:0,scaleX:1.3,scaleY:1.3,y:-28.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:-27.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:-27},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:-26.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-26},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:-25.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:-25.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:-25},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:-24.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:-24.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:-24.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:-24.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:-24.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-24.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:-24},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:-23.9},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1,y:-23.8},0).wait(1).to({regY:15.2,scaleX:1,scaleY:1,y:-8.5},0).wait(1).to({regY:0,scaleX:1.06,scaleY:1.06,y:-24.7},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:-25.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:-26},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:-26.5},0).wait(1).to({scaleX:1.21,scaleY:1.21,y:-27},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:-27.3},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:-27.7},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:-28},0).wait(1).to({scaleX:1.29,scaleY:1.29,y:-28.2},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:-28.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:-28.6},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:-28.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:-28.8},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:-28.9},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:-29},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:-29.1},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:-29.2},0).wait(1).to({scaleX:1.36,scaleY:1.36},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:-29.3},0).wait(1).to({regY:15.2,scaleX:1.37,scaleY:1.37,y:-8.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-50.2,259.4,97.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(5,-42.5,1,1,0,0,0,5,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7},3).to({rotation:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-59,62,118);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(0,39.5,1,1,0,0,0,0,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6},2,cjs.Ease.get(1)).to({rotation:0},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-46,52,92);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-28.5,-31,1,1,0,0,0,-28.5,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.5},2).to({rotation:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-31,57,62);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(-50,-70.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Pri_11.png
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(50,89);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 17
	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(-31.5,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-124,157,272);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-40.5,81,81);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-48.5,90,97);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24.5,48,49);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-21.5,50,43);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-87.5,175,175);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// prig_01.png
	this.instance = new lib.Символ4();
	this.instance.setTransform(44.5,64.5,1,1,0,0,0,67.5,71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:-23,y:-6.5},0).wait(1).to({rotation:-0.1,x:-23.1,y:-6.4},0).wait(1).to({x:-23.2,y:-6.3},0).wait(1).to({rotation:-0.2,x:-23.3,y:-6.2},0).wait(1).to({rotation:-0.3,x:-23.5,y:-6},0).wait(1).to({rotation:-0.4,x:-23.7,y:-5.8},0).wait(1).to({rotation:-0.6,x:-23.9,y:-5.5},0).wait(1).to({rotation:-0.8,x:-24.3,y:-5.1},0).wait(1).to({rotation:-1.2,x:-24.9,y:-4.4},0).wait(1).to({rotation:-1.8,x:-25.9,y:-3.4},0).wait(1).to({rotation:-2.4,x:-26.9,y:-2.3},0).wait(1).to({rotation:-2.7,x:-27.5,y:-1.6},0).wait(1).to({rotation:-3,x:-27.9,y:-1.2},0).wait(1).to({rotation:-3.1,x:-28.2,y:-0.9},0).wait(1).to({rotation:-3.3,x:-28.3,y:-0.7},0).wait(1).to({x:-28.5,y:-0.5},0).wait(1).to({rotation:-3.4,x:-28.6,y:-0.4},0).wait(1).to({rotation:-3.5,y:-0.3},0).wait(1).to({regX:67.5,regY:71,x:43.1,y:66.5},0).wait(1).to({regX:0,regY:0,x:-28.6,y:-0.3},0).wait(1).to({rotation:-3.4,y:-0.4},0).wait(1).to({x:-28.5,y:-0.5},0).wait(1).to({rotation:-3.3,x:-28.4,y:-0.6},0).wait(1).to({rotation:-3.2,x:-28.2,y:-0.8},0).wait(1).to({rotation:-3.1,x:-28.1,y:-1},0).wait(1).to({rotation:-3,x:-27.8,y:-1.2},0).wait(1).to({rotation:-2.8,x:-27.5,y:-1.6},0).wait(1).to({rotation:-2.5,x:-27.1,y:-2.1},0).wait(1).to({rotation:-2,x:-26.3,y:-2.9},0).wait(1).to({rotation:-1.4,x:-25.3,y:-4},0).wait(1).to({rotation:-0.9,x:-24.5,y:-4.9},0).wait(1).to({rotation:-0.6,x:-24,y:-5.4},0).wait(1).to({rotation:-0.4,x:-23.7,y:-5.8},0).wait(1).to({rotation:-0.3,x:-23.5,y:-6},0).wait(1).to({rotation:-0.2,x:-23.3,y:-6.2},0).wait(1).to({rotation:-0.1,x:-23.2,y:-6.3},0).wait(1).to({x:-23.1,y:-6.4},0).wait(1).to({rotation:0,x:-23,y:-6.5},0).wait(1).to({regX:67.5,regY:71,x:44.5,y:64.5},0).wait(1).to({regX:0,regY:0,x:-23,y:-6.5},0).wait(1).to({rotation:-0.1,x:-23.1,y:-6.4},0).wait(1).to({x:-23.2,y:-6.3},0).wait(1).to({rotation:-0.2,x:-23.3,y:-6.2},0).wait(1).to({rotation:-0.3,x:-23.4,y:-6.1},0).wait(1).to({rotation:-0.4,x:-23.6,y:-5.9},0).wait(1).to({rotation:-0.5,x:-23.8,y:-5.6},0).wait(1).to({rotation:-0.7,x:-24.2,y:-5.3},0).wait(1).to({rotation:-1,x:-24.6,y:-4.8},0).wait(1).to({rotation:-1.4,x:-25.4,y:-3.9},0).wait(1).to({rotation:-2.1,x:-26.4,y:-2.8},0).wait(1).to({rotation:-2.5,x:-27.2,y:-2},0).wait(1).to({rotation:-2.8,x:-27.7,y:-1.4},0).wait(1).to({rotation:-3,x:-28,y:-1.1},0).wait(1).to({rotation:-3.2,x:-28.2,y:-0.8},0).wait(1).to({rotation:-3.3,x:-28.4,y:-0.6},0).wait(1).to({rotation:-3.4,x:-28.5,y:-0.5},0).wait(1).to({x:-28.6,y:-0.4},0).wait(1).to({rotation:-3.5,y:-0.3},0).wait(1).to({regX:67.5,regY:71,x:43.1,y:66.5},0).wait(1).to({regX:0,regY:0,x:-28.6,y:-0.3},0).wait(1).to({rotation:-3.4,y:-0.4},0).wait(1).to({x:-28.5,y:-0.5},0).wait(1).to({rotation:-3.3,x:-28.4,y:-0.6},0).wait(1).to({rotation:-3.2,x:-28.2,y:-0.8},0).wait(1).to({rotation:-3.1,x:-28.1,y:-1},0).wait(1).to({rotation:-3,x:-27.8,y:-1.2},0).wait(1).to({rotation:-2.8,x:-27.5,y:-1.6},0).wait(1).to({rotation:-2.5,x:-27.1,y:-2.1},0).wait(1).to({rotation:-2,x:-26.3,y:-2.9},0).wait(1).to({rotation:-1.4,x:-25.3,y:-4},0).wait(1).to({rotation:-0.9,x:-24.5,y:-4.9},0).wait(1).to({rotation:-0.6,x:-24,y:-5.4},0).wait(1).to({rotation:-0.4,x:-23.7,y:-5.8},0).wait(1).to({rotation:-0.3,x:-23.5,y:-6},0).wait(1).to({rotation:-0.2,x:-23.3,y:-6.2},0).wait(1).to({rotation:-0.1,x:-23.2,y:-6.3},0).wait(1).to({x:-23.1,y:-6.4},0).wait(1).to({rotation:0,x:-23,y:-6.5},0).wait(1).to({regX:67.5,regY:71,x:44.5,y:64.5},0).wait(1));

	// prig_14.png
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(14,76.5,1,1,0,0,0,-16.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.5},19).to({scaleY:1},20).to({scaleY:0.5},20).to({scaleY:1},20).wait(1));

	// prig_11.png
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(-38.5,77.5,1,1,0,0,0,-14.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:14.1,scaleY:0.67,rotation:-5.7,y:81},19).to({regY:14,scaleY:1,rotation:0,y:77.5},20).to({regY:14.1,scaleY:0.67,rotation:-5.7,y:81},20).to({regY:14,scaleY:1,rotation:0,y:77.5},20).wait(1));

	// prig_08.png
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(-69,75.5,1,1,0,0,0,-4,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleY:1,x:-65,y:32.6},0).wait(1).to({scaleY:1,rotation:-0.1,x:-65.1,y:32.7},0).wait(1).to({scaleY:0.99,rotation:-0.2,x:-65.2,y:32.8},0).wait(1).to({scaleY:0.99,rotation:-0.4,x:-65.3,y:33},0).wait(1).to({scaleY:0.98,rotation:-0.6,x:-65.4,y:33.3},0).wait(1).to({scaleY:0.97,rotation:-0.8,x:-65.6,y:33.7},0).wait(1).to({scaleY:0.96,rotation:-1.1,x:-65.8,y:34.1},0).wait(1).to({scaleY:0.95,rotation:-1.5,x:-66.1,y:34.6},0).wait(1).to({scaleY:0.94,rotation:-1.8,x:-66.3,y:35.1},0).wait(1).to({scaleY:0.93,rotation:-2.1,x:-66.5,y:35.6},0).wait(1).to({scaleY:0.92,rotation:-2.4,x:-66.7,y:35.9},0).wait(1).to({scaleY:0.91,rotation:-2.6,x:-66.8,y:36.3},0).wait(1).to({scaleY:0.9,rotation:-2.8,x:-66.9,y:36.5},0).wait(1).to({scaleY:0.9,rotation:-2.9,x:-67,y:36.7},0).wait(1).to({scaleY:0.89,rotation:-3,x:-67.1,y:36.9},0).wait(1).to({scaleY:0.89,rotation:-3.1,y:37},0).wait(1).to({scaleY:0.89,rotation:-3.2,x:-67.2,y:37.1},0).wait(1).to({scaleY:0.89,y:37.2},0).wait(1).to({regX:-4,regY:43,scaleY:0.89,rotation:-3.3,x:-69,y:75.6},0).wait(1).to({regX:0,regY:0,scaleY:0.89,rotation:-3.2,x:-67.2,y:37.2},0).wait(1).to({scaleY:0.89,x:-67.1,y:37.1},0).wait(1).to({scaleY:0.89,rotation:-3.1,y:37},0).wait(1).to({scaleY:0.9,rotation:-2.9,x:-67,y:36.8},0).wait(1).to({scaleY:0.9,rotation:-2.7,x:-66.9,y:36.5},0).wait(1).to({scaleY:0.91,rotation:-2.5,x:-66.7,y:36.2},0).wait(1).to({scaleY:0.92,rotation:-2.2,x:-66.6,y:35.8},0).wait(1).to({scaleY:0.93,rotation:-1.9,x:-66.4,y:35.3},0).wait(1).to({scaleY:0.95,rotation:-1.6,x:-66.1,y:34.8},0).wait(1).to({scaleY:0.96,rotation:-1.3,x:-65.9,y:34.4},0).wait(1).to({scaleY:0.97,rotation:-1,x:-65.7,y:34},0).wait(1).to({scaleY:0.97,rotation:-0.8,x:-65.6,y:33.7},0).wait(1).to({scaleY:0.98,rotation:-0.6,x:-65.4,y:33.4},0).wait(1).to({scaleY:0.99,rotation:-0.4,x:-65.3,y:33.2},0).wait(1).to({scaleY:0.99,rotation:-0.3,x:-65.2,y:33},0).wait(1).to({scaleY:0.99,rotation:-0.2,y:32.9},0).wait(1).to({scaleY:1,rotation:-0.1,x:-65.1,y:32.7},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:1,rotation:0,x:-65,y:32.6},0).wait(1).to({regX:-4,regY:43,scaleY:1,x:-69,y:75.5},0).wait(1).to({regX:0,regY:0,scaleY:1,x:-65,y:32.6},0).wait(1).to({scaleY:1,rotation:-0.1,x:-65.1},0).wait(1).to({scaleY:0.99,rotation:-0.2,x:-65.2,y:32.8},0).wait(1).to({scaleY:0.99,rotation:-0.3,x:-65.3,y:33},0).wait(1).to({scaleY:0.98,rotation:-0.5,x:-65.4,y:33.2},0).wait(1).to({scaleY:0.97,rotation:-0.7,x:-65.6,y:33.6},0).wait(1).to({scaleY:0.96,rotation:-1,x:-65.8,y:34},0).wait(1).to({scaleY:0.95,rotation:-1.4,x:-66,y:34.4},0).wait(1).to({scaleY:0.94,rotation:-1.7,x:-66.2,y:34.9},0).wait(1).to({scaleY:0.93,rotation:-2,x:-66.4,y:35.4},0).wait(1).to({scaleY:0.92,rotation:-2.3,x:-66.6,y:35.8},0).wait(1).to({scaleY:0.91,rotation:-2.5,x:-66.7,y:36.1},0).wait(1).to({scaleY:0.91,rotation:-2.7,x:-66.8,y:36.4},0).wait(1).to({scaleY:0.9,rotation:-2.8,x:-66.9,y:36.6},0).wait(1).to({scaleY:0.9,rotation:-2.9,x:-67,y:36.8},0).wait(1).to({scaleY:0.89,rotation:-3,x:-67.1,y:36.9},0).wait(1).to({scaleY:0.89,rotation:-3.1,y:37},0).wait(1).to({scaleY:0.89,rotation:-3.2,x:-67.2,y:37.1},0).wait(1).to({scaleY:0.89,y:37.2},0).wait(1).to({regX:-4,regY:43,scaleY:0.89,rotation:-3.3,x:-69,y:75.6},0).wait(1).to({regX:0,regY:0,scaleY:0.89,rotation:-3.2,x:-67.2,y:37.2},0).wait(1).to({scaleY:0.89,x:-67.1,y:37.1},0).wait(1).to({scaleY:0.89,rotation:-3.1,y:37},0).wait(1).to({scaleY:0.9,rotation:-2.9,x:-67,y:36.8},0).wait(1).to({scaleY:0.9,rotation:-2.7,x:-66.9,y:36.5},0).wait(1).to({scaleY:0.91,rotation:-2.5,x:-66.7,y:36.2},0).wait(1).to({scaleY:0.92,rotation:-2.2,x:-66.6,y:35.8},0).wait(1).to({scaleY:0.93,rotation:-1.9,x:-66.4,y:35.3},0).wait(1).to({scaleY:0.95,rotation:-1.6,x:-66.1,y:34.8},0).wait(1).to({scaleY:0.96,rotation:-1.3,x:-65.9,y:34.4},0).wait(1).to({scaleY:0.97,rotation:-1,x:-65.7,y:34},0).wait(1).to({scaleY:0.97,rotation:-0.8,x:-65.6,y:33.7},0).wait(1).to({scaleY:0.98,rotation:-0.6,x:-65.4,y:33.4},0).wait(1).to({scaleY:0.99,rotation:-0.4,x:-65.3,y:33.2},0).wait(1).to({scaleY:0.99,rotation:-0.3,x:-65.2,y:33},0).wait(1).to({scaleY:0.99,rotation:-0.2,y:32.9},0).wait(1).to({scaleY:1,rotation:-0.1,x:-65.1,y:32.7},0).wait(1).to({scaleY:1},0).wait(1).to({scaleY:1,rotation:0,x:-65,y:32.6},0).wait(1).to({regX:-4,regY:43,scaleY:1,x:-69,y:75.5},0).wait(1));

	// prig_04.png
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(43,70,1,1,0,0,0,-27,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,scaleX:1,x:70,y:53.5},0).wait(1).to({scaleX:1,x:69.9},0).wait(1).to({scaleX:0.99,x:69.7},0).wait(1).to({scaleX:0.99,x:69.5},0).wait(1).to({scaleX:0.98,x:69.2},0).wait(1).to({scaleX:0.97,x:68.8},0).wait(1).to({scaleX:0.96,x:68.2},0).wait(1).to({scaleX:0.93,x:67.3},0).wait(1).to({scaleX:0.89,x:65.7},0).wait(1).to({scaleX:0.82,x:62.6},0).wait(1).to({scaleX:0.74,x:59.5},0).wait(1).to({scaleX:0.7,x:57.9},0).wait(1).to({scaleX:0.68,x:57},0).wait(1).to({scaleX:0.66,x:56.4},0).wait(1).to({scaleX:0.65,x:55.9},0).wait(1).to({scaleX:0.64,x:55.6},0).wait(1).to({scaleX:0.64,x:55.4},0).wait(1).to({scaleX:0.63,x:55.2},0).wait(1).to({regX:-26.9,regY:16.5,scaleX:0.63,x:38.1,y:70},0).wait(1).to({regX:0,regY:0,scaleX:0.63,x:55.1,y:53.5},0).wait(1).to({scaleX:0.63,x:55.2},0).wait(1).to({scaleX:0.64,x:55.3},0).wait(1).to({scaleX:0.64,x:55.5},0).wait(1).to({scaleX:0.65,x:55.8},0).wait(1).to({scaleX:0.66,x:56.1},0).wait(1).to({scaleX:0.67,x:56.6},0).wait(1).to({scaleX:0.69,x:57.4},0).wait(1).to({scaleX:0.72,x:58.5},0).wait(1).to({scaleX:0.77,x:60.6},0).wait(1).to({scaleX:0.86,x:64.1},0).wait(1).to({scaleX:0.91,x:66.3},0).wait(1).to({scaleX:0.94,x:67.5},0).wait(1).to({scaleX:0.96,x:68.3},0).wait(1).to({scaleX:0.97,x:68.8},0).wait(1).to({scaleX:0.98,x:69.2},0).wait(1).to({scaleX:0.99,x:69.5},0).wait(1).to({scaleX:0.99,x:69.7},0).wait(1).to({scaleX:1,x:69.8},0).wait(1).to({regX:-27,regY:16.5,scaleX:1,x:43,y:70},0).wait(1).to({regX:0,regY:0,scaleX:1,x:70,y:53.5},0).wait(1).to({scaleX:1,x:69.9},0).wait(1).to({scaleX:0.99,x:69.7},0).wait(1).to({scaleX:0.99,x:69.6},0).wait(1).to({scaleX:0.98,x:69.3},0).wait(1).to({scaleX:0.97,x:68.9},0).wait(1).to({scaleX:0.96,x:68.4},0).wait(1).to({scaleX:0.94,x:67.7},0).wait(1).to({scaleX:0.91,x:66.5},0).wait(1).to({scaleX:0.86,x:64.4},0).wait(1).to({scaleX:0.78,x:60.9},0).wait(1).to({scaleX:0.72,x:58.8},0).wait(1).to({scaleX:0.69,x:57.5},0).wait(1).to({scaleX:0.67,x:56.8},0).wait(1).to({scaleX:0.66,x:56.2},0).wait(1).to({scaleX:0.65,x:55.8},0).wait(1).to({scaleX:0.64,x:55.6},0).wait(1).to({scaleX:0.64,x:55.3},0).wait(1).to({scaleX:0.63,x:55.2},0).wait(1).to({regX:-26.9,regY:16.5,scaleX:0.63,x:38.1,y:70},0).wait(1).to({regX:0,regY:0,scaleX:0.63,x:55.1,y:53.5},0).wait(1).to({scaleX:0.63,x:55.2},0).wait(1).to({scaleX:0.64,x:55.3},0).wait(1).to({scaleX:0.64,x:55.5},0).wait(1).to({scaleX:0.65,x:55.8},0).wait(1).to({scaleX:0.66,x:56.1},0).wait(1).to({scaleX:0.67,x:56.6},0).wait(1).to({scaleX:0.69,x:57.4},0).wait(1).to({scaleX:0.72,x:58.5},0).wait(1).to({scaleX:0.77,x:60.6},0).wait(1).to({scaleX:0.86,x:64.1},0).wait(1).to({scaleX:0.91,x:66.3},0).wait(1).to({scaleX:0.94,x:67.5},0).wait(1).to({scaleX:0.96,x:68.3},0).wait(1).to({scaleX:0.97,x:68.8},0).wait(1).to({scaleX:0.98,x:69.2},0).wait(1).to({scaleX:0.99,x:69.5},0).wait(1).to({scaleX:0.99,x:69.7},0).wait(1).to({scaleX:1,x:69.8},0).wait(1).to({regX:-27,regY:16.5,scaleX:1,x:43,y:70},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.5,-94,221,188);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия: 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(-143.5,33.8,0.893,0.893);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({x:494.6,y:-77.2},17).to({_off:true},1).wait(30));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-130.4,136.7,0.692,0.692);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:492.8},29).to({_off:true},1).wait(22));

	// Слой 2 - копия: 2
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(-32,-104.5,1.29,1.29);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:476.1,y:-186.5},46).to({_off:true},1).wait(9));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(-13,44);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).to({x:610.2,y:171.1},30).to({_off:true},1).wait(27));

	// Слой 2 - копия
	this.instance_4 = new lib.Символ32();
	this.instance_4.setTransform(-143.5,33.8,0.893,0.893);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:479.6},31).wait(1).to({x:-143.5},0).to({x:479.6},31).wait(1));

	// Слой 1 - копия
	this.instance_5 = new lib.Символ32();
	this.instance_5.setTransform(-130.4,136.7,0.692,0.692);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:492.8},32).to({_off:true},1).wait(35));

	// Слой 2
	this.instance_6 = new lib.Символ32();
	this.instance_6.setTransform(-32,-104.5,1.29,1.29);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({x:591.1},35).wait(1).to({x:-32},0).to({x:591.1},25).to({_off:true},1).wait(10));

	// Слой 1
	this.instance_7 = new lib.Символ32();
	this.instance_7.setTransform(-13,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:610.2},36).to({_off:true},1).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,9.5,63,69);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(27).call(this.frame_53).wait(12));

	// Слой 4
	this.instance = new lib.Символ25();
	this.instance.setTransform(-1.9,-157.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

	// Слой 10
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(-0.8,-335.7,0.705,0.705);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({y:-372.1,alpha:1},3).to({y:-361.7},2).wait(1).to({y:-372.1},2).to({y:-335.7,alpha:0},8).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(-0.3,-233.3,1.48,1.48);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(10).to({alpha:0},10).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(-6,-260.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({alpha:1},13).to({alpha:0},11).wait(1));

	// Слой 7
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(-0.1,-344.1,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({y:-324.6},2).to({y:-396.1,alpha:0},3).to({_off:true},1).wait(22).to({_off:false},0).to({y:-324.6,alpha:1},3).to({y:-344.1},7).wait(1));

	// Слой 6
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(-380.3,-207.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(27).to({_off:false},0).to({scaleX:2.08,scaleY:2.08,rotation:180,x:7.3,y:-252.5},13).to({scaleX:1.57,scaleY:1.57,x:-32.5,y:53.3},13).to({alpha:0},11).wait(1));

	// Слой 2
	this.boxi = new lib.Символ33();
	this.boxi.setTransform(-249.9,-269.2);
	this.boxi.alpha = 0.629;

	this.timeline.addTween(cjs.Tween.get(this.boxi).wait(27).to({alpha:0},13).wait(14).to({alpha:0.629},10).wait(1));

	// Слой 2
	this.instance_6 = new lib.Символ15();
	this.instance_6.setTransform(-2.5,-28);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({alpha:1},2).to({y:-128.9},10,cjs.Ease.get(1)).to({y:-28},10).to({alpha:0},2).to({_off:true},2).wait(1).to({_off:false},0).to({alpha:1},2).to({x:42.7,y:-185.2},10,cjs.Ease.get(1)).to({x:-2.5,y:-28},10).to({x:65.1,alpha:0},2).to({_off:true},11).wait(2));

	// Слой 1
	this.instance_7 = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:true},1).wait(21).to({_off:false},0).wait(5).to({_off:true},1).wait(21).to({_off:false},0).to({x:67.6},2).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-294.4,-418.8,449.1,522.8);


// stage content:



(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(28);
		 }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
			_this.main.gotoAndPlay(55);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// prig_01.png
	this.main = new lib.Символ13();
	this.main.setTransform(120.5,321.5,0.77,0.77);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 3
	this.instance = new lib.Символ39();
	this.instance.setTransform(116.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.9,189.6,359.5,419.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
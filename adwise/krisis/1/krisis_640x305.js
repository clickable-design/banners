(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bagor.png?1464969854754", id:"bagor"},
		{src:"images/brgr.jpg?1464969854754", id:"brgr"},
		{src:"images/junkie.png?1464969854754", id:"junkie"},
		{src:"images/slidelogo3.png?1464969854754", id:"slidelogo3"},
		{src:"images/Слой1.png?1464969854754", id:"Слой1"},
		{src:"images/Слой2.png?1464969854754", id:"Слой2"},
		{src:"images/Слой3.png?1464969854754", id:"Слой3"},
		{src:"images/Слой4.png?1464969854754", id:"Слой4"},
		{src:"images/Слой5.png?1464969854754", id:"Слой5"},
		{src:"images/Слой6.png?1464969854754", id:"Слой6"}
	]
};



// symbols:



(lib.bagor = function() {
	this.initialize(img.bagor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,315);


(lib.brgr = function() {
	this.initialize(img.brgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,702,340);


(lib.junkie = function() {
	this.initialize(img.junkie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,327);


(lib.slidelogo3 = function() {
	this.initialize(img.slidelogo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,90);


(lib.Слой1 = function() {
	this.initialize(img.Слой1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,225);


(lib.Слой2 = function() {
	this.initialize(img.Слой2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,299);


(lib.Слой3 = function() {
	this.initialize(img.Слой3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,272);


(lib.Слой4 = function() {
	this.initialize(img.Слой4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,256);


(lib.Слой5 = function() {
	this.initialize(img.Слой5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,199);


(lib.Слой6 = function() {
	this.initialize(img.Слой6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,94);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,419.8).s().p("Eg6bAdwMAAAg7fMB03AAAMAAAA7fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374,-190.4,748.1,381);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("A1RIiQgOgGgLgJQgLgJgJgMQgJgNgGgRIgJgkQgIgnAAg6QAAgnAIg7IAJglQAGgQAJgNQARgaAcgMQAOgFARgDIAmgDIAlADQASADAOAFQAOAHALAJQALAJAJANQARAZAIApQAHA7AAAnQgCBHgFAaQgIAogRAaQgJAMgLAJQgLAJgOAGQgcALgpAAQgpAAgcgLgA0fDVQgHAFgEAQQgEARgBAbIAACIQABAcAEAQQAEAQAHAGQAHAGAMAAQAMAAAHgGQAIgGADgQQAEgQABgcIAAiIQgBgbgEgRQgDgQgIgFQgHgHgMAAQgMAAgHAHgAUuImIgLhHIhVAAIgLBHIjUAAIg+iOIgWAiIAABsIhrAAIAAmYIBrAAIAACcIABAAIBOicIByAAIhnCzIBlDJIBbl8ICGAAIBkGYgAUWGPIgdiuIgBAAIgdCuIA7AAgAKbImIAAjzIhGDzIh2AAIAAmYIBoAAIAADlIBEjlIB3AAIAAGYgAFDImIAAinIhCAAIAACnIhqAAIAAmYIBqAAIAACWIBCAAIAAiWIBqAAIAAGYgAgEImIAAinIhBAAIAACnIhrAAIAAmYIBrAAIAACWIBBAAIAAiWIBpAAIAAGYgAkyImIgLhHIhVAAIgLBHIhwAAIBimYICGAAIBkGYgAlKGPIgdiuIgBAAIgdCuIA7AAgAslImIAAmYICfAAQAfAAAWAKQAXAKAOAQQAPARAHAXQAGAYAAAaQAAAggIAYQgIAXgSAQQgiAghBAAIgmAAIAACbgAq7E+IAUAAQAUAAALgMQALgMAAgZQAAgzgqAAIgUAAgAuqImIgph6IgBAAIgpB6Ih1AAIBfjPIhajJIB3AAIAiB3IABAAIAih3IB3AAIhZDJIBgDPgACCANIAAhuIAgADQAeAAANgSQANgRAHgXIiYmUICmAAIA7D6IACAAIAxj6IChAAIiGGaIgdBKQgOAfgVAVQgUAUgdAIQgeALgrgBgATaANIAAlSIhhFSIilAAIAAo5ICQAAIAAFBIBglBICmAAIAAI5gAIUANIAAo5IFlAAIAAB2IjQAAIAABmIBDAAQAsAAAiALQAhAKAXAVQAsAqAABZIgDAwQgEAWgIARQgQAigaAUQgZAVggAGQghAIghAAgAKphdIAdAAQAkAAAOgQQAOgQAAglQAAgpgRgMQgSgOgeAAIgcAAgAk9ANIAAo5IDfAAQArAAAfAOQAdANAUAYQAVAXAJAhQAKAgAAAlQAAAsgMAiQgMAhgYAWQgtAthcgBIg0AAIAADYgAiok2IAcAAQAcAAAOgQQAPgSAAgjQAAhGg5AAIgcAAgAoSANIAAo5ICUAAIAAI5gAu7ANIAAo5ICVAAIAADNIA7AAQAwgBAkAMQAjAMAXAYQAsAwAABVIgEAxQgEAXgJASQgQAkgbAVQgbAVgiAHQghAJgjAAgAsmhcIAUAAQAoAAAQgTQAQgTAAgoQAAgtgTgQQgUgPgiAAIgTAAgA2BANIAAo5IDhAAQBQAAAmAmQATAUAKAaQAJAaAAAgQAAAXgFAVQgFAVgLARQgLASgRALQgRAMgXAFIAAACQAcACAUANQATAMANASQANATAGAWQAGAWAAAXQAAAlgJAeQgKAggUAVQgVAXghAKQggANgvAAgAzshcIAqAAQAUAAAQgRQAQgSAAgjQAAgjgQgRQgQgSgUAAIgqAAgAzslMIAkAAQAXgBAMgRQAMgRAAgWQAAgZgMgRQgMgSgXAAIgkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.9,-55.7,287.9,111.5);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A1RIiQgOgGgLgJQgLgJgJgMQgJgNgGgRIgJgkQgIgnAAg6QAAgnAIg7IAJglQAGgQAJgNQARgaAcgMQAOgFARgDIAmgDIAlADQASADAOAFQAOAHALAJQALAJAJANQARAZAIApQAHA7AAAnQgCBHgFAaQgIAogRAaQgJAMgLAJQgLAJgOAGQgcALgpAAQgpAAgcgLgA0fDVQgHAFgEAQQgEARgBAbIAACIQABAcAEAQQAEAQAHAGQAHAGAMAAQAMAAAHgGQAIgGADgQQAEgQABgcIAAiIQgBgbgEgRQgDgQgIgFQgHgHgMAAQgMAAgHAHgAUuImIgLhHIhVAAIgLBHIjUAAIg+iOIgWAiIAABsIhrAAIAAmYIBrAAIAACcIABAAIBOicIByAAIhnCzIBlDJIBbl8ICGAAIBkGYgAUWGPIgdiuIgBAAIgdCuIA7AAgAKbImIAAjzIhGDzIh2AAIAAmYIBoAAIAADlIBEjlIB3AAIAAGYgAFDImIAAinIhCAAIAACnIhqAAIAAmYIBqAAIAACWIBCAAIAAiWIBqAAIAAGYgAgEImIAAinIhBAAIAACnIhrAAIAAmYIBrAAIAACWIBBAAIAAiWIBpAAIAAGYgAkyImIgLhHIhVAAIgLBHIhwAAIBimYICGAAIBkGYgAlKGPIgdiuIgBAAIgdCuIA7AAgAslImIAAmYICfAAQAfAAAWAKQAXAKAOAQQAPARAHAXQAGAYAAAaQAAAggIAYQgIAXgSAQQgiAghBAAIgmAAIAACbgAq7E+IAUAAQAUAAALgMQALgMAAgZQAAgzgqAAIgUAAgAuqImIgph6IgBAAIgpB6Ih1AAIBfjPIhajJIB3AAIAiB3IABAAIAih3IB3AAIhZDJIBgDPgACCANIAAhuIAgADQAeAAANgSQANgRAHgXIiYmUICmAAIA7D6IACAAIAxj6IChAAIiGGaIgdBKQgOAfgVAVQgUAUgdAIQgeALgrgBgATaANIAAlSIhhFSIilAAIAAo5ICQAAIAAFBIBglBICmAAIAAI5gAIUANIAAo5IFlAAIAAB2IjQAAIAABmIBDAAQAsAAAiALQAhAKAXAVQAsAqAABZIgDAwQgEAWgIARQgQAigaAUQgZAVggAGQghAIghAAgAKphdIAdAAQAkAAAOgQQAOgQAAglQAAgpgRgMQgSgOgeAAIgcAAgAk9ANIAAo5IDfAAQArAAAfAOQAdANAUAYQAVAXAJAhQAKAgAAAlQAAAsgMAiQgMAhgYAWQgtAthcgBIg0AAIAADYgAiok2IAcAAQAcAAAOgQQAPgSAAgjQAAhGg5AAIgcAAgAoSANIAAo5ICUAAIAAI5gAu7ANIAAo5ICVAAIAADNIA7AAQAwgBAkAMQAjAMAXAYQAsAwAABVIgEAxQgEAXgJASQgQAkgbAVQgbAVgiAHQghAJgjAAgAsmhcIAUAAQAoAAAQgTQAQgTAAgoQAAgtgTgQQgUgPgiAAIgTAAgA2BANIAAo5IDhAAQBQAAAmAmQATAUAKAaQAJAaAAAgQAAAXgFAVQgFAVgLARQgLASgRALQgRAMgXAFIAAACQAcACAUANQATAMANASQANATAGAWQAGAWAAAXQAAAlgJAeQgKAggUAVQgVAXghAKQggANgvAAgAzshcIAqAAQAUAAAQgRQAQgSAAgjQAAgjgQgRQgQgSgUAAIgqAAgAzslMIAkAAQAXgBAMgRQAMgRAAgWQAAgZgMgRQgMgSgXAAIgkAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.9,-55.7,287.9,111.5);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhclSQC5CaAAC4QAAC5i5Cag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-33.9,18.7,67.9);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2pALIAAgVMAtTAAAIAAAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-1.2,290.1,2.4);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slidelogo3();
	this.instance.setTransform(-67,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-45,134,90);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzC3IgKhBIhLAAIgJBBIhkAAIBYltIB2AAIBRFPIAAAegAAdAuIgaiZIgBAAIgYCZIAzAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-18.3,29,36.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMDaIAAhGIiWAAIAABGIhYAAIAAhGIAAAAIAAgeIAAACIAAgzIAZAAQALgVAHgWQAHgXAEgWQAFgYACgbIABiTIDnAAIAAEeIAgAAIAACVgAgNg2IgPBcIgLAfIBLAAIAAjSIgvAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-21.8,32.8,43.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiOC4IAAgfIAAABIAAgxIAMABIARgCQAHgCAFgIQAFgJADgSIAFgzIAEjHIDjAAIAAFtIhfAAIAAkhIgsAAQAABZgEA2QgBA5gLAhQgLAhgVANQgLAGgOAEQgOACgRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-18.4,28.8,37);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmC2Ig2iAIgTAeIAABiIhhAAIAAltIBhAAIAACMIAAAAIBFiMIBjAAIAAAGIhaCaIBaCwIAAAfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-18.4,26.6,36.9);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8CzQgMgFgKgIQgKgIgHgLQgPgXgFgkQgFgkgBg0QABghAGg1QAGglAPgXQAQgWAagKQAMgFAPgDIAhgCQAfAAAYAIQAWAIAOAPQAOAPAGAWQAHAVAAAbIAAAXIhcAAIAAgVQAAgfgHgLQgFgLgOAAQgJAAgHAFQgGAGgDAOQgEAPgBAYIAAB5QABAYAEAPQADAOAGAFQAHAGAJAAQAIAAAGgEQAFgEADgLIAFgcIABgrIBcAAIAAAcQABAmgKAZQgLAYgRAOQgRAOgVAFQgXAFgWAAQgmAAgbgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-18.9,25.2,38);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAvC3IgLhBIhJAAIgKBBIhkAAIBXltIB3AAIBZFtgAAZAuIgZiZIAAAAIgaCZIAzAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-18.3,29.7,36.7);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdC3IAAiXIg5AAIAACXIhfAAIAAltIBfAAIAACHIA5AAIAAiHIBfAAIAAFtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-18.3,25,36.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjCtIAAjNIg5DNIhkAAIAAlZIBYAAIAADAIA4jAIBlAAIAAFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-17.3,24.7,34.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcCtIAAiPIg2AAIAACPIhbAAIAAlZIBbAAIAAB/IA2AAIAAh/IBaAAIAAFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.7,34.7);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdCtIgzh5IgTAdIAABcIhaAAIAAlZIBaAAIAACFIABAAIBBiFIBgAAIhXCYIBiDBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-17.3,26.6,34.7);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjCtIAAjNIg5DNIhkAAIAAlZIBYAAIAADAIA4jAIBlAAIAAFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-17.3,24.7,34.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbCtIAAiPIg1AAIAACPIhaAAIAAlZIBaAAIAAB/IA1AAIAAh/IBaAAIAAFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.6,34.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5CqQgMgFgJgIQgKgIgHgKQgIgLgFgOIgIgfQgGghAAgyQAAgeAGgyIAIggQAFgOAIgKQAOgWAYgKQAMgFAPgDIAegCIAfACQAPADAMAFQAMAFAJAIQAKAIAHALQAPAVAGAjQAGAyAAAeQgCA9gEAWQgGAigPAWQgHAKgKAIQgJAIgMAFQgYAJgiAAQghAAgYgJgAgPhvQgGAFgDAOQgDAOgBAXIAAByQABAWADAOQADAOAGAFQAGAGAJgBQAJABAHgGQAGgFADgOQADgOABgWIAAhyQgBgXgDgOQgDgOgGgFQgHgFgJAAQgJAAgGAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-17.9,24.8,35.9);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah0CtIAAlZICFAAQAaAAATAIQATAJAMANQAMAPAGAUQAHATgBAXQABAbgIAUQgHATgOANQgdAbg5AAIgdAAIAACEgAgagXIARAAQAPAAAJgKQAJgKAAgWQAAgqghAAIgRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.6,34.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbCtIAAkPIg1AAIAAEPIhbAAIAAlZIDrAAIAAFZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.7,34.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.3,-14.9,306.8,29.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Слой1();
	this.instance.setTransform(-28.2,-96.2,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-96.2,56.5,192.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Слой2();
	this.instance.setTransform(-69.3,-127.9,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-127.9,138.6,255.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Слой3();
	this.instance.setTransform(-57.3,-116.4,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-116.4,114.7,232.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.junkie();
	this.instance.setTransform(-98.2,-206.7,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-206.7,179.8,279.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Слой6();
	this.instance.setTransform(-43.2,-40.2,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-40.2,86.5,80.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Слой4();
	this.instance.setTransform(-50,-109.5,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-109.5,100.2,219.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg5BAbVMAAAg2pMByDAAAMAAAA2pg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365,-175,730,350);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgqqATuQgDgCgCgEQgCgGABgLQACgYgFgfIgHgnQABgXgCgMIgEgNIgEgOQgDgLAAgWIABiOQAAgfgLgLQAKgMADgdIAOAAQAFADAAAIIAAAOIAFAQQAHAQAAAbIAAAuQABALAEAWIALAmQAGAXADAQQAEANABASQACAYAAAYIAAArQAAAMgCAFIgLALQgIAKgBAQQAAAUgIADIgCAAQgDAAgDgCgEgqvAQBQgEAmAHAWIAGAWQACAIgBAPIAJA6IACAAIAAhWQAAgKgCgEQgGgJgCgFQgBgCAAgMQACgSgLgSIgCgBIAAABgEgqsAI9QgFgBgEgEQgDgDgDgJIgkh7IgFgUQgCgMAAgaIABjDQAAgSgEgIIgEgGQgCgEAAgDQgBgJAJgFQAGgDAMgBIABAAQAFAMAAAbIgBC9QAAAkACASIAHAjQACAQAGAMIAHAOQAFAIABAGIADATQABAMAEAGIAIAKQAGAFABAEQACAFgCAGQgCAGgEACQgEADgEAAIgDgBgEArpAG2QgCgDgBgMIAAg3QgCgWAEgPIAGgVQADgLAAgYIAAjFQAAgXgFgJQgIgMACgGIAQgFQgMgTAJgTIANAAIAAAAQALADADAMQADAHAAANIAAF2QAAAPgDAHIgIAMQgFAIACAFQgHACgGAAQgJAAgEgFgEgrKgBLQgPgRgGgmQgWh5gpkZIgHguQgBgOADgFQACgEAGgBQAGgBACAEIAEgsIAPAAQAGAIgBASQgBAVACAGIADALIAEAJQADAHABAUIAEAWIAEAWQACAPgBAiQgBAgADARIAFAWIAEAVIAAAaQgBARACAJIAFAVIAEAUQACAHgBAOIAAAUQABAPAGAUIAHAZQAEAMACAKQADAPgBAgQAAALgDAEQgCAEgEACIgDAAIgEgBgEgsGgIPIABAOIAFAbQADAOgBAFQADgFAAgJQAAgNgCgGIgEgOQgDgJABgGIgDAAgEAsQgDSIABlJQAAgzgCgaQgMADgFgGQgDgEADgHIAGgNQADgIAAgRQACgNALgQIAOAAQAEAKAAAYIAAG0QAAAUgKACgAXLx8IgvgGIgUgBQgMgBgIgFQgJgFgDgKQgEgLAGgHIAOgBQADANAXADQA9AKAzAAQAbAABhgHIBWgFIEHgOQAVgBABALQgWAOgZAEQgGABgUABIlNASQgwADgYAAIgJAAQgiAAgdgEgAEjyQIiDgHQgigChIgDIgjgDIjVgKQgJgCgBgCIAEgJIAFABQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgEIHUATQAxACAZgBQApgBAggKQARgFAHABQAOAAAFAMQgYAOgcAHQgbAGgiABIgJAAIg0gBgA7Ny7QhJgCg7gOIgngIQgXgDgRAFQgFgIAGgKQAGgJAKAAIABgDQA9AOAbAFQAxAJAoABQAeAAAmgBIEbgNQBogFA8AEQAQABAHAGQAFAFABAHQAAAHgFADQgFADgHgDIgMgFQgKgEgVABQibAJizAHQg2ACgnAAIgpgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.5,-126.5,571,253);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bagor();
	this.instance.setTransform(-42.5,-157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-157.5,85,315);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhMgWICeAWIieAXQgKgXAKgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-2.3,16.5,4.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AAxjzQBIAOA3A2QA0A1APBEAD1AtQgNBKg4A5Qg3A2hIAOAjyg2QAPhEA0g1QA3g2BIgOAgwD0QhIgOg3g2Qg4g5gNhK");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-25.9,52.1,51.9);


(lib.Символ68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},7).to({alpha:0.012},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374,-190.4,748.1,381);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ65();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.555},4,cjs.Ease.get(-1)).to({alpha:0},5,cjs.Ease.get(1)).to({alpha:0.5},5,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.9,-55.7,287.9,111.5);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ66();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ64();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.9,-55.7,287.9,111.5);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-21.8,32.8,43.8);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-18.3,29,36.7);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-18.4,28.8,37);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-18.4,26.6,36.9);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-18.9,25.2,38);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,-18.3,29.7,36.7);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-18.3,25,36.7);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-17.3,24.7,34.7);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.7,34.7);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-17.3,26.6,34.7);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-17.3,24.7,34.7);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.6,34.7);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-17.9,24.8,35.9);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.6,34.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-17.3,23.7,34.7);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 59
	this.instance = new lib.Символ59();
	this.instance.setTransform(93.4,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:92.6,y:23.7},0).wait(1).to({y:24.4},0).wait(1));

	// Символ 58
	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(61.8,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:20.9},0).wait(2));

	// Символ 57
	this.instance_2 = new lib.Символ57();
	this.instance_2.setTransform(31.2,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:21.8},0).wait(1).to({y:21},0).wait(1));

	// Символ 56
	this.instance_3 = new lib.Символ56();
	this.instance_3.setTransform(3.5,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:2.8,y:21},0).wait(1).to({x:3.5},0).wait(1));

	// Символ 55
	this.instance_4 = new lib.Символ55();
	this.instance_4.setTransform(-25.4,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

	// Символ 54
	this.instance_5 = new lib.Символ54();
	this.instance_5.setTransform(-67.5,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:-66},0).wait(1).to({x:-66.7},0).wait(1));

	// Символ 53
	this.instance_6 = new lib.Символ53();
	this.instance_6.setTransform(-95.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3));

	// Символ 52
	this.instance_7 = new lib.Символ52();
	this.instance_7.setTransform(96.8,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:96.1,y:-27.4},0).wait(1).to({y:-28.2},0).wait(1));

	// Символ 51
	this.instance_8 = new lib.Символ51();
	this.instance_8.setTransform(67.6,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3));

	// Символ 50
	this.instance_9 = new lib.Символ50();
	this.instance_9.setTransform(41.8,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({y:-28.9},0).wait(1).to({y:-28.2},0).wait(1));

	// Символ 48
	this.instance_10 = new lib.Символ48();
	this.instance_10.setTransform(12.3,-28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({y:-28.2},0).wait(2));

	// Символ 47
	this.instance_11 = new lib.Символ47();
	this.instance_11.setTransform(-16.1,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({x:-15.4},0).wait(1).to({x:-16.1},0).wait(1));

	// Символ 46
	this.instance_12 = new lib.Символ46();
	this.instance_12.setTransform(-43.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({y:-28.3},0).wait(2));

	// Символ 45
	this.instance_13 = new lib.Символ45();
	this.instance_13.setTransform(-69.6,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({x:-70.3},0).wait(1).to({x:-69.6},0).wait(1));

	// Символ 44
	this.instance_14 = new lib.Символ44();
	this.instance_14.setTransform(-97.8,-28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({x:-97.1},0).wait(2));

	// Слой 17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAgCIABAAIgBAEg");
	this.shape.setTransform(17,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.7,-46.3,219.5,92.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(7.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// Слой 3
	this.instance_1 = new lib.Символ60();
	this.instance_1.setTransform(-103,-6.8,0.003,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,scaleX:0.77,x:8.2},9).wait(26).to({regX:0,scaleX:0,x:-103},9).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ60();
	this.instance_2.setTransform(-102.8,41.5,0.004,1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:-0.1,scaleX:0.77,x:8.2},9).wait(17).to({regX:0,scaleX:0,x:-102.8},9).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.5,-47.8,220.7,92.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(0,0,0.489,0.489,0,0,0.5);
	this.instance.alpha = 0.852;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-8,149.9,16);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:2.6,x:-0.3,y:2.1},9,cjs.Ease.get(-1)).to({scaleX:1,skewY:5.8,x:-0.6,y:4.4},10,cjs.Ease.get(1)).to({scaleX:1,skewY:2.8,x:-0.3,y:2.3},10,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:0,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-40.2,86.5,80.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(30,60.1,1,1,0,0,0,-13.6,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.8,x:29.5,y:59.2},9,cjs.Ease.get(-1)).to({rotation:17.7,x:28.8,y:58.3},11,cjs.Ease.get(1)).to({regY:-79.1,scaleX:1,scaleY:1,rotation:9.8,x:29.3,y:59},9,cjs.Ease.get(-1)).to({regY:-79,scaleX:1,scaleY:1,rotation:0,x:30,y:60.1},11,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Слой5();
	this.instance_1.setTransform(-39.8,-85.1,0.856,0.856);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-85.1,111.7,320.5);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aige2QhEgThLgxQgvgfhRhDQhqhVg0gsQhXhJhBhAQg8g6gngwQgyg9gdg8Qg2hxAAiQQAAh8AoiNQAoiKBMiYQA7h2BhiaQA5hcAUgkQAohJATg8QARg6AHhGQAEgwAAg/QgpgjgWgkQgVgkgIgJQgUgXgXADQAQg0ABhDQABgqgGhPIgUkYQgGhSgIgqQgGghgRhBQgXhkgBiDQgCjbBGiUQAqhYBEg/QBJhEBYgYIACAJQCQgQBSAGQB9ALBNA9QA7AuAtBVQAaAzAnBsQCkHIAiB0QBgFIACEGQACBvgaBAIgIATIFcNXQAoBjASAyQAdBUAOBFQAPBJAFBcQADA3ABBvQABCIgKBJQgRB0gzBNQgiA0g8AwQgpAhhJAtQhBApgtAYQg9Ahg3AUQhBAXhUAQQg2AKhiAMQhqAOg4ACIgQAAQhRAAg/gSg");
	mask.setTransform(24.3,100.8);

	// Слой 1
	this.instance = new lib.Символ22();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:3,x:-3.1},7,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:6.1,x:-6.3},7,cjs.Ease.get(1)).to({scaleY:1,skewX:3.1,x:-3.3},7,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-85.1,111.7,320.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:9.8,x:10.7,y:-4.8},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:22.2,x:24.1,y:-10.8},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:11,x:12.1,y:-5.4},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:0,y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-109.5,100.2,219.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(0,0.1);
	this.instance.alpha = 0.262;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365,-174.9,730,350);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(-23.2,-14.6);
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.7,-153.1,598,280);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.7},9,cjs.Ease.get(-1)).to({y:31},10,cjs.Ease.get(1)).to({y:15.5},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-157.5,85,315);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(445,291.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(587.1,303.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(389,27.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ18_1();
	this.instance_3.setTransform(622.7,93.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(570.4,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// junkie
	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(526.3,163.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(338.9,-82.3,405.5,502.4);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2.8},4,cjs.Ease.get(-1)).to({rotation:6.5},5,cjs.Ease.get(1)).to({rotation:3.1},5,cjs.Ease.get(-1)).to({rotation:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-157.5,85,315);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ20_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-3.6},9).to({x:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-2.3,16.5,4.7);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.92,scaleY:0.92},4,cjs.Ease.get(-1)).to({scaleX:0.82,scaleY:0.82},5,cjs.Ease.get(1)).to({scaleX:0.91,scaleY:0.91},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-25.9,52.1,51.9);


(lib.Символ16_1 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance_1 = new lib.Символ19_1();
	this.instance_1.setTransform(0.4,24.2,1,1,0,90,-90);

	this.instance_2 = new lib.Символ19_1();
	this.instance_2.setTransform(0.4,-25.4,1,1,90);

	this.instance_3 = new lib.Символ19_1();
	this.instance_3.setTransform(25.3,-0.5,1,1,0,0,180);

	this.instance_4 = new lib.Символ19_1();
	this.instance_4.setTransform(-24.3,-0.5);

	this.instance_5 = new lib.Символ17_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// Слой 3
	this.instance = new lib.Символ63();
	this.instance.setTransform(-260.5,0.9,0.657,0.657,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15.5},5).to({x:5.5},2).to({x:15.5},2).to({x:-260.5},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-5.5,1.3,0.807,0.807);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:14.5},2).to({x:-340},5).to({x:14.5},5).to({x:-5.5},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355,-37.3,444.2,74.8);


(lib.Символ26копия2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ2();
	this.instance.setTransform(60,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.5,-157.5,85,315);


(lib.Символ26 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ61();
	this.instance.setTransform(790.7,390);

	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(60,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(781.3,356.1,18.7,67.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(-481.1,-149.3,0.914,0.914);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-138.7},14,cjs.Ease.get(-1)).to({y:-129.3},13,cjs.Ease.get(1)).to({y:-139.3},14,cjs.Ease.get(-1)).to({y:-149.3},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.3,-224.5,370.7,459.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},2).to({_off:true},1).wait(6).to({_off:false,alpha:1},0).to({alpha:0},2).to({_off:true},1).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365,-174.9,730,350);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},2).to({_off:true},1).wait(6).to({_off:false,alpha:1},0).to({alpha:0},2).to({_off:true},1).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.7,-153.1,598,280);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(341.9,27.3,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(367.2,159.8,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.brgr();
	this.instance_2.setTransform(-16.3,-18.1,1.077,1.077);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-18.1,756.3,366.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-147.5,0,1,1,0,0,0,-147.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:192.5},79).wait(1).to({scaleX:1.08,skewY:180,x:508.1},0).to({x:133},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.3,-224.5,370.7,459.3);


// stage content:



(lib.krisis_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.movieClip_1.x = stage.mouseX;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(movieClip_1);
		//stage.canvas.style.cursor = "default";
		
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.movieClip_2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.movieClip_2.x = stage.mouseX;
			this.movieClip_2.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(movieClip_2);
		//stage.canvas.style.cursor = "default";
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.movieClip_12.gotoAndStop(1);
			this.movieClip_2.gotoAndStop(1);
			this.movieClip_1.gotoAndStop(1);
			this.txt.gotoAndPlay(1);
			this.bla.gotoAndPlay(1);
		}
		
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
				this.bla.gotoAndPlay(9);
			this.txt.gotoAndPlay(9);
			this.movieClip_12.gotoAndStop(0);
			this.movieClip_2.gotoAndStop(0);
			this.movieClip_1.gotoAndStop(0);
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		 this.bgg.x = - stage.mouseX / 30;
		 this.bgg.y = - stage.mouseY / 30;
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.txt = new lib.Символ62();
	this.txt.setTransform(100.5,260.5);
	this.txt.shadow = new cjs.Shadow("rgba(0,0,0,0.498)",3,3,0);

	this.movieClip_12 = new lib.Символ26копия2();
	this.movieClip_12.setTransform(458.7,243.5);

	this.movieClip_1 = new lib.Символ26();
	this.movieClip_1.setTransform(575,243.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1},{t:this.movieClip_12},{t:this.txt}]}).wait(1));

	// Слой 10
	this.bla = new lib.Символ68();
	this.bla.setTransform(336,169.5);

	this.timeline.addTween(cjs.Tween.get(this.bla).wait(1));

	// Слой 6
	this.movieClip_2 = new lib.Символ16_1();
	this.movieClip_2.setTransform(477.2,165.3);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(67.2,30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(327,154);
	this.instance_1.alpha = 0.512;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(6.3,270.4,1,1,0,0,0,-147.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 2
	this.bgg = new lib.Символ1();
	this.bgg.setTransform(-2.9,10.8,0.925,0.925);

	this.timeline.addTween(cjs.Tween.get(this.bgg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.4,131.6,1629.6,688.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
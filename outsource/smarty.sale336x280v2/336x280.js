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
		{src:"images/agaga.png?1473683131442", id:"agaga"},
		{src:"images/logo.png?1473683131442", id:"logo"},
		{src:"images/sho.png?1473683131442", id:"sho"},
		{src:"images/smart1.png?1473683131442", id:"smart1"},
		{src:"images/tabl.png?1473683131442", id:"tabl"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.agaga = function() {
	this.initialize(img.agaga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,191);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,36);


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


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-110,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-18,220,36);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agaga();
	this.instance.parent = this;
	this.instance.setTransform(-83.9,-39.1,0.906,0.344,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-39.1,177.5,78.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agaga();
	this.instance.parent = this;
	this.instance.setTransform(-70.8,-17.7,0.742,0.186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,-17.7,141.6,35.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.agaga();
	this.instance.parent = this;
	this.instance.setTransform(-95.5,-26.5,1,0.277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.5,-26.5,191,53);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB2B69").s().p("Aq9EGIkYh2IAAksICCibIasAAIB9EZIksFWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.3,-31.2,196.6,62.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787D93").s().p("ABTBfIAAgNQgGgBgGgDQgFgEgEgFQgHgLAAgRIAAgMIAZAAIAAAOQAAAIAEAEQAEAEAGAAQAGAAAEgEQADgEABgIQgBgJgDgHQgEgFgGgGIgNgKIgLgLQgHgGgDgIQgEgJAAgMQAAgIABgHQADgHADgGQAHgJANgEIAAgNIAXAAIAAANQAOADAGAKQAEAGACAHQABAGABAJIAAAFIgaAAIAAgHQAAgIgDgEQgEgEgFAAQgHAAgDAEQgDAEgBAIQABAJADAHQAEAFAGAGIAMAKIAMAKQAGAHAEAIQAEAJAAAMQAAARgIALQgDAFgFAEQgGADgGABIAAANgAgQBSQgIgCgEgGQgKgKAAgVIAAgEIAYAAIAAAGQAAAJAEADQAEAFAGAAQAFgBAEgEQADgEAAgMIAAgfQgDAHgGAEQgEAEgJAAQgHAAgGgCQgFgDgEgFQgEgFgBgHQgCgFAAgJIAAgfQAAgVAKgKQAGgGAHgCQAIgDAIgBQATAAAKAMQAFAFACAIQADAHAAALIAABUQAAAKgDAJQgCAHgFAGQgJAMgUAAQgJgBgHgDgAgJg4QgEADAAAJIAAAeQAAAJAEAFQAEABAFAAQAFAAAEgBQADgFAAgJIAAgeQAAgJgDgDQgEgEgFAAQgFAAgEAEgAh3BTIAniOIg1AAIAAgXIBPAAIAAAWIgmCPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-9.5,26.9,19);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787D93").s().p("ACCBfIAAgNQgHgBgFgDQgFgEgEgFQgHgLAAgRIAAgMIAZAAIAAAOQAAAIAEAEQADAEAHAAQAGAAADgEQAEgEAAgIQAAgJgEgHQgDgFgGgGIgNgKIgMgLQgGgGgDgIQgEgJAAgMQAAgIABgHQACgHAEgGQAHgJANgEIAAgNIAWAAIAAANQAOADAHAKQAEAGACAHQABAGAAAJIAAAFIgZAAIAAgHQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEAAAIQAAAJAEAHQAEAFAGAGIAMAKIAMAKQAGAHAEAIQAEAJAAAMQAAARgIALQgDAFgFAEQgGADgHABIAAANgAAdBSQgIgCgFgGQgGgFgCgIQgDgHAAgLIAAgNQAAgMAEgKQAEgIAIgDQgIgFgEgIQgEgJAAgMIAAgFQAAgLADgHQACgIAGgFQAKgMAUAAQAKABAIADQAIACAFAGQALAKAAAVIAAAFQAAAZgRAJQAJADAEAIQAEAKAAAMIAAANQAAAVgLAKQgFAGgIACQgIADgKABQgKgBgHgDgAAjAMQgEAFAAAKIAAAQQAAALAFADQAEAFAGAAQAHAAAEgFQAEgDAAgLIAAgQQAAgKgEgFQgEgEgHAAQgHAAgEAEgAAkg4QgFADAAAMIAAAJQAAALAFADQAEAEAGAAQAHAAAEgEQAEgDAAgLIAAgJQAAgMgEgDQgEgFgHAAQgGAAgEAFgAgoBTIAAgeIgzAAIAAgYIAwhvIAdAAIAABvIAMAAIAAAYIgMAAIAAAegAhDAdIAbAAIAAg8gAi0BTIAAgUQAAgNAEgIQAEgKAGgIIAZgbQAGgIAEgJQAEgJAAgMQAAgMgEgDQgEgFgGAAQgGAAgEAFQgEADAAAJIAAASIgZAAIAAgQQAAgVAKgKQAFgGAIgCQAHgDAKgBQATAAAKAMQAFAFADAIQACAHAAALQAAAOgEALQgEAKgHAHQgGAKgHAHIgNAPQgGAHgDAGQgDAHABAIIAyAAIAAAXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-9.5,36.3,19);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787D93").s().p("AB6BfIAAgNQgHgBgGgDQgEgEgFgFQgGgLgBgRIAAgMIAZAAIAAAOQAAAIAFAEQADAEAHAAQAFAAAEgEQAEgEAAgIQAAgJgEgHQgEgFgFgGIgNgKIgMgLQgGgGgEgIQgDgJAAgMQAAgIABgHQACgHADgGQAIgJANgEIAAgNIAWAAIAAANQAOADAHAKQADAGADAHQABAGAAAJIAAAFIgZAAIAAgHQAAgIgEgEQgDgEgGAAQgGAAgDAEQgEAEAAAIQAAAJAEAHQAEAFAGAGIALAKIANAKQAFAHAFAIQADAJAAAMQAAARgHALQgDAFgGAEQgFADgHABIAAANgAAVBSQgIgCgFgGQgIgKAAgVIAAhVQAAgVAIgKQAFgGAIgCQAHgDAKgBQATAAALAMQAFAFACAIQADAHAAALIAABVQAAALgDAHQgCAIgFAFQgGAGgHACQgIADgJABQgKgBgHgDgAAcg4QgEADABAJIAABZQgBAJAEADQAEAFAGAAQAGAAAEgFQADgDABgJIAAhZQgBgJgDgDQgEgFgGAAQgGAAgEAFgAhIBSQgHgCgFgGQgKgKAAgVIAAgOIAZAAIAAAQQAAAJAEADQADAEAHAAQAGAAAEgEQADgDAAgJIAAglQAAgIgDgDQgEgDgGgBQgHABgDADQgEADAAAIIAAAFIgZAAIAFhfIBGAAIAAAXIguAAIgDApQAIgNAQAAQAOAAAHAKQAEAFACAIQACAGgBAIIAAAlQABALgDAHQgDAIgFAFQgEAGgHACQgIADgJABQgKgBgIgDgAiXBTIAAh+IgUAAIAAgTQAHAAAFgBQAFgBADgEIAFgGIADgIIASAAIAAClg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-9.5,34.6,19);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#787D93").s().p("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");
	this.shape.setTransform(101.1,139.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,129.6,308.7,18.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AEpKIIAAjsIAlAAIAABZIASAAQAcAAAOAOQANAPAAAdIAAAfQAAAcgNAPQgIAIgKADQgKAEgOAAgAFOJmIASAAQAIAAAGgEQAEgFAAgNIAAgjQAAgNgEgFQgGgFgIAAIgSAAgADNKIIAAjKIgoAAIAAgiIBzAAIAAAiIgmAAIAADKgAB0KIIAAirIgvCrIgmAAIAAjsIAhAAIAACNIAmiNIAvAAIAADsgAggKIIAAjKIgqAAIAADKIglAAIAAjsIBzAAIAADsgAkAKIIAAgiIANAAIAIgBIAGgDQAEgDABgFIABgMIg2iyIAlAAIAqCKIAhiKIAmAAIgxCuQgHAYgGANQgHANgIAGQgGAFgJABgAlBKIIglheIgLAVIAABJIglAAIAAjsIAlAAIAABnIAxhnIAlAAIg0BpIA0CDgADFkUIAAgYQgOgDgLgGQgLgHgGgKQgOgVAAgiIAAgXIAxAAIAAAbQAAARAHAIQAIAGALAAQANAAAHgGQAHgIAAgRQAAgRgHgMQgIgMgLgMIgYgUQgNgKgLgNQgLgMgIgRQgHgRAAgXQgBgRAEgOQADgNAHgKQAOgVAbgFIAAgZIArAAIAAAZQAbAFAOAVQAHAJADAOQAEANAAASIAAAKIgyAAIAAgOQAAgSgGgHQgHgHgMAAQgNAAgGAHQgHAHAAASQAAARAHAMQAIANALAKIAYAVQANAKAMANQALAMAIARQAHARAAAXQAAAigOAVQgHAKgLAHQgKAGgNADIAAAYgAAAkqQgPgGgKgKQgTgWAAgoIAAgJIAuAAIAAAMQAAASAHAHQAIAIAMAAQAOAAAIgJQAHgIAAgYIAAg8QgHAPgMAHQgMAHgRAAQgNAAgKgEQgLgGgHgJQgHgJgEgPQgEgNABgTIAAg8QgBgoAVgWQAKgKAPgGQAMgFATAAQAmAAAVAVQAJAMAGAOQAEAQAAAUIAACpQAAAUgEAQQgFAQgKALQgTAWgpgBQgSAAgMgEgAALo/QgGAGgBATIAAA7QABASAGAHQAIAHAMAAQAMAAAIgHQAHgHAAgSIAAg7QAAgTgHgGQgIgHgMgBQgMABgIAHgAjLkpIBNkaIhoAAIAAgvICbAAIAAAtIhMEcg");
	this.shape.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-64.8,81.5,129.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AEpKIIAAjsIAlAAIAABZIASAAQAcAAAOAOQANAPAAAdIAAAfQAAAcgNAPQgIAIgKADQgKAEgOAAgAFOJmIASAAQAIAAAGgEQAEgFAAgNIAAgjQAAgNgEgFQgGgFgIAAIgSAAgADNKIIAAjKIgoAAIAAgiIBzAAIAAAiIgmAAIAADKgAB0KIIAAirIgvCrIgmAAIAAjsIAhAAIAACNIAmiNIAvAAIAADsgAggKIIAAjKIgqAAIAADKIglAAIAAjsIBzAAIAADsgAkAKIIAAgiIANAAIAIgBIAGgDQAEgDABgFIABgMIg2iyIAlAAIAqCKIAhiKIAmAAIgxCuQgHAYgGANQgHANgIAGQgGAFgJABgAlBKIIglheIgLAVIAABJIglAAIAAjsIAlAAIAABnIAxhnIAlAAIg0BpIA0CDgAErkUIAAgYQgOgDgLgGQgKgHgHgKQgOgVAAgiIAAgXIAxAAIAAAbQAAARAHAIQAHAGAMAAQANAAAHgGQAIgIgBgRQABgRgIgMQgIgMgLgMIgYgUQgNgKgLgNQgMgMgHgRQgHgRgBgXQABgRADgOQADgNAHgKQAOgVAbgFIAAgZIArAAIAAAZQAbAFAOAVQAGAJAEAOQADANAAASIAAAKIgwAAIAAgOQAAgSgHgHQgHgHgMAAQgMAAgHAHQgHAHAAASQAAARAIAMQAHANAMAKIAXAVQANAKAMANQALAMAHARQAIARAAAXQAAAigOAVQgHAKgKAHQgLAGgNADIAAAYgABkkqQgQgGgKgKQgKgLgGgQQgFgPAAgUIAAgaQAAgYAIgRQAHgSARgJQgQgJgIgQQgIgRAAgZIAAgKQAAgUAFgQQAGgOAKgMQAUgVAoAAQAUAAAPAFQAPAGALAKQAUAWAAAoIAAAKQAAAwggATQARAJAIASQAHARAAAYIAAAaQAAAogUAWQgLAKgPAGQgPAEgUAAQgUAAgOgEgABwm1QgHAKAAATIAAAfQAAAWAJAHQAIAIAMAAQANAAAHgIQAJgHAAgWIAAgfQAAgTgIgKQgHgIgOAAQgOAAgIAIgAByo/QgJAHAAAXIAAASQAAAUAIAHQAJAIAMAAQAMAAAJgIQAIgHAAgUIAAgSQAAgXgIgHQgJgHgMgBQgMABgIAHgAglkpIAAg8IhjAAIAAgvIBdjeIA3AAIAADeIAYAAIAAAvIgYAAIAAA8gAhZmUIA0AAIAAh6gAk2kpIAAgpQAAgXAHgSQAIgTALgPIAyg5QAMgQAHgRQAHgSAAgYQAAgXgHgHQgHgHgMgBQgNAAgHAIQgIAGABATIAAAjIgxAAIAAggQAAgoATgWQAKgKAOgGQAPgFATAAQAmAAATAVQAKAMAFAOQAFAQAAAUQAAAbgIAVQgJAWgMASQgMARgOAPIgaAdQgLANgGANQgHANACAPIBiAAIAAAvg");
	this.shape.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-64.8,81.5,129.7);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AEpJ8IAAjsIAlAAIAABZIASAAQAcAAAOAOQANAPAAAdIAAAfQAAAcgNAPQgIAIgKADQgKAEgOAAgAFOJaIASAAQAIAAAGgEQAEgFAAgNIAAgjQAAgNgEgFQgGgFgIAAIgSAAgADNJ8IAAjLIgoAAIAAghIBzAAIAAAhIgmAAIAADLgAB0J8IAAirIgvCrIgmAAIAAjsIAhAAIAACNIAmiNIAvAAIAADsgAggJ8IAAjLIgqAAIAADLIglAAIAAjsIBzAAIAADsgAkAJ8IAAgiIANAAIAIgBIAGgDQAEgDABgFIABgNIg2ixIAlAAIAqCKIAhiKIAmAAIgxCuQgHAYgGANQgHANgIAGQgGAFgJABgAlBJ8IglheIgLAWIAABIIglAAIAAjsIAlAAIAABnIAxhnIAlAAIg0BpIA0CDgADpkIIAAgYQgOgDgLgGQgLgHgGgKQgOgVAAgiIAAgWIAxAAIAAAZQAAATAHAGQAIAIALgBQANABAHgIQAHgGABgTQgBgRgHgMQgIgMgLgKIgYgVQgNgKgLgNQgLgNgIgQQgHgRAAgYQgBgQAEgNQADgOAHgLQAOgTAbgHIAAgYIArAAIAAAYQAbAGAOAUQAHALADANQAEAOAAAQIAAALIgyAAIAAgNQAAgTgGgHQgHgHgMAAQgNAAgGAHQgHAHAAATQAAAQAHAMQAIANALALIAYAUQANAKAMAMQALANAIARQAHARAAAXQAAAigOAVQgHAKgLAHQgKAGgNADIAAAYgAAjkfQgPgFgKgLQgTgVABgoIAAirQgBgoATgVQAKgLAPgGQAOgFATAAQAmAAAUAWQAKALAGAPQAEAPAAAUIAACrQAAAUgEAQQgGAPgKAKQgKALgPAFQgOAGgTAAQgTAAgOgGgAAwo0QgGAIAAARIAACyQAAASAGAIQAIAHAMAAQAMAAAIgHQAHgIAAgSIAAiyQAAgRgHgIQgIgGgMAAQgMAAgIAGgAiVkfQgOgFgKgLQgTgVgBgoIAAgbIAyAAIAAAeQgBASAIAIQAHAGAMABQAMgBAIgGQAHgIAAgSIAAhIQAAgSgHgIQgIgGgMgBQgMABgHAGQgIAIABASIAAAKIgyAAIAKi/ICJAAIAAAvIhaAAIgFBPQAPgZAeAAQAdAAAPAUQAGAJAEAPQADAOAAARIAABKQAAAUgEAQQgFAPgKAKQgKALgOAFQgPAGgSAAQgUAAgOgGgAkwkdIAAj7IgpAAIAAglQAQAAAJgDQAKgDAGgGQAGgFAEgIIAHgQIAjAAIAAFJg");
	this.shape.setTransform(-20.3,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-62.5,81.5,127.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB2B69").s().p("AsBMBIhun+Icvh4IAAJ2gAqJj4Ik2oIId/AAIAAJ2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-76.9,192.1,153.9);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EB2B69").ss(3,1,1).p("A6P13MA0fAAAMAAAArvMg0fAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.5,-141.5,339,283);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB2B69").s().p("Ai7BGIAAgUIANAAIAEgDIACgEIABgIIgfhnIAVAAIAZBQIAThQIAXAAIgdBlQgEAPgEAHQgEAIgEADQgEAEgFAAIgRABgADmBGIAAgVIAVAAIAAAVgACMBGIAAiKIAWAAIAAA0IAKAAQARAAAIAJQAIAHAAARIAAASQAAASgIAIQgEAFgGACQgGACgJAAgACiAyIAKAAQAGAAACgDQADgDAAgHIAAgVQAAgIgDgCQgCgEgGAAIgKAAgABVBGIAAh2IgXAAIAAgUIBEAAIAAAUIgXAAIAAB2gAAhBGIAAhjIgcBjIgVAAIAAiKIASAAIAABSIAXhSIAcAAIAACKgAg1BGIAAh2IgaAAIAAB2IgVAAIAAiKIBFAAIAACKgAjhBGIgVg4IgHANIAAArIgWAAIAAiKIAWAAIAAA9IAdg9IAWAAIgfA+IAfBMgADnAnIgBgJQAAgHACgGIAEgKIAMgQIAEgLQACgHAAgJQAAgHgDgDQgDgEgFAAQgGAAgDAEQgCADAAAHIAAAQIgVAAIAAgPQAAgQAIgKQAIgJAQAAQAQAAAJAJQAIAKAAAQQAAAKgCAHIgFALIgMARIgGAKQgBAFAAAGIABAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-7.1,55.3,14.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB2B69").s().p("AiOBFQgGgCgEgFQgJgJAAgRIAAhHQAAgRAJgJQAEgFAGgCQAHgCAIAAQAQAAAIAJQAFAEACAHQACAGAAAJIAABHQAAAIgCAHQgCAHgFAEQgEAFgGACQgGACgIAAQgIAAgHgCgAiIgvQgDADAAAIIAABJQAAAIADADQADADAGAAQAFAAADgDQADgDAAgIIAAhJQAAgIgDgDQgDgDgFAAQgGAAgDADgAC6BGIAAiLIAWAAIAAA1IAKAAQARAAAIAJQAIAHAAARIAAASQAAARgIAJQgEAEgGADQgHACgIAAgADQAyIAKAAQAFgBADgDQADgCAAgIIAAgUQAAgJgDgCQgDgDgFAAIgKAAgABEBGIAAiLIAWAAIAAB3IASAAIAAh3IAWAAIAAB3IASAAIAAh3IAWAAIAACLgAgDBGIAAiLIA6AAIAAAUIgmAAIAAAoIAeAAIAAARIgeAAIAAAqIAmAAIAAAUgAgoBGIAAg2IgGABIgGAAQgJAAgGgCQgGgCgEgFQgIgIAAgQIAAg1IAWAAIAAA2QAAAIADADQADADAFAAQAFAAADgDQADgDABgGIAAg4IAWAAIAACLgAjBBGIgSg4IgSA4IgVAAIAZhGIgXhFIAXAAIAQA0IARg0IAVAAIgXBFIAYBGg");
	this.shape.setTransform(-11.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-7.1,50.3,14.3);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9XX1MAAAgvpMA6vAAAMAAAAvpg");
	this.shape.setTransform(-108,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.1,-305,376.1,305.1);


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
	this.shape.graphics.f("#FFFFCC").s().p("A7AWxMAAAgthMA2BAAAMAAAAthg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.9,-145.7,346,291.5);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tabl();
	this.instance.parent = this;
	this.instance.setTransform(-54,-81,0.54,0.54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-81,108,162);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AizBzIAAgXIhSAAIAAAXIghAAIAAg1IALAAQAHAAAGgDQAFgEABgMIAAiaIBmAAIAACtIAQAAIAAA1gAjpApQAAANgCAIIApAAIAAiRIgnAAgAAABbQgHgEgGgHQgNgMgBgaIAAhoQABgZANgOQAGgGAHgEQAJgDAMAAQAXAAANANQAGAHADAKQAEAJAAANIAABoQAAANgEAJQgDAKgGAGQgGAHgKAEQgIADgMAAQgMAAgJgDgAAIhQQgEAEAAALIAABtQAAALAEAFQAFAFAIAAQAHAAAFgFQAEgFABgLIAAhtQgBgLgEgEQgFgEgHAAQgIAAgFAEgAl1BbQgJgEgHgHQgMgMAAgaIAAhoQAAgZAMgOQAHgGAJgEQAJgDALAAQAZAAAMANQAHAHACAKQAEAJAAANIAABoQAAANgEAJQgCAKgHAGQgFAHgKAEQgJADgNAAQgLAAgJgDgAlshQQgFAEAAALIAABtQAAALAFAFQAFAFAGAAQAJAAAEgFQAFgFAAgLIAAhtQAAgLgFgEQgEgEgJAAQgGAAgFAEgAG0BcIAAjLIBYAAIAAAcIg4AAIAAA6IAsAAIAAAcIgsAAIAAA7IA4AAIAAAegAFJBcIAAjLIBYAAIAAAcIg3AAIAAA6IArAAIAAAcIgrAAIAAA7IA3AAIAAAegAESBcIAAhYIglAAIAABYIghAAIAAjLIAhAAIAABYIAlAAIAAhYIAgAAIAADLgABaBcIAAjLIBWAAIAAAcIg2AAIAAAwIAQAAQAYAAAMANQAMANAAAXIAAAbQAAAZgMANQgHAGgIADQgJAEgMAAgAB6A+IAQAAQAHABAEgFQAEgDAAgMIAAgeQAAgMgEgCQgEgFgHABIgQAAgAiGBcIAAjLIAwAAQAYAAAMAMQAMANAAAZIAAAbQAAAZgMALQgGAGgJAEQgJACgMAAIgPAAIAABOgAhlgMIAPAAQAIgBAEgEQAEgEAAgLIAAgfQAAgKgEgFQgEgEgIgBIgPAAgAnFBcIAAivIglAAIAACvIghAAIAAjLIBmAAIAADLg");
	this.shape.setTransform(-0.6,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Ai/B6IAAgZIhYAAIAAAZIgjAAIAAg3IAMAAQAIAAAGgFQAGgEAAgMIAAilIBtAAIAAC6IARAAIAAA3gAj4ArQAAAOgDAKIArAAIAAibIgoAAgAAABgQgIgDgGgHQgOgOgBgbIAAhvQABgbAOgOQAGgIAIgDQAJgEANABQAZAAAOAOQAGAHADAKQAFAKAAAOIAABvQAAANgFAKQgDALgGAHQgHAHgKADQgJAEgNAAQgNAAgJgEgAAJhVQgEAEAAAMIAAB1QAAALAEAFQAFAGAIgBQAJABADgGQAGgFAAgLIAAh1QAAgMgGgEQgDgFgJAAQgIAAgFAFgAmOBgQgJgDgIgHQgMgOAAgbIAAhvQAAgbAMgOQAIgIAJgDQAKgEAMABQAaAAAOAOQAGAHADAKQAEAKAAAOIAABvQAAANgEAKQgDALgGAHQgHAHgKADQgJAEgOAAQgMAAgKgEgAmEhVQgGAEAAAMIAAB1QAAALAGAFQAEAGAIgBQAJABAFgGQAEgFAAgLIAAh1QAAgMgEgEQgFgFgJAAQgIAAgEAFgAHRBhIAAjYIBdAAIAAAfIg7AAIAAA9IAvAAIAAAeIgvAAIAABAIA7AAIAAAegAFfBhIAAjYIBeAAIAAAfIg8AAIAAA9IAvAAIAAAeIgvAAIAABAIA8AAIAAAegAEkBhIAAhdIgoAAIAABdIgiAAIAAjYIAiAAIAABeIAoAAIAAheIAjAAIAADYgABgBhIAAjYIBbAAIAAAfIg4AAIAAAzIAQAAQAaAAAMAOQANAOAAAYIAAAcQAAAbgNAPQgGAFgKAFQgJACgNAAgACDBDIAQAAQAHgBAFgEQAEgEABgMIAAghQgBgMgEgCQgFgFgHAAIgQAAgAiPBhIAAjYIAzAAQAaAAAMAOQAOANAAAbIAAAcQAAAbgOAMQgGAHgJAEQgKACgNAAIgQAAIAABSgAhsgNIAQAAQAIgBAFgEQAEgFABgLIAAggQgBgNgEgFQgFgEgIAAIgQAAgAnkBhIAAi5IgnAAIAAC5IgjAAIAAjYIBtAAIAADYg");
	this.shape_1.setTransform(-0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Символ 29
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC00").s().p("ArsEXIkqh9IAAlBICLilIcdAAICFEsIlAFsg");
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).wait(1));

	// Символ 29
	this.instance = new lib.Символ29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.3,-31.2,196.6,62.5);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.parent = this;
	this.instance.setTransform(100.3,143.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,109.8,209.6,66.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 27
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(69.1,0,1,1,0,0,0,13.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({regX:13.6,scaleX:1.39,scaleY:1.39,x:69.3},10,cjs.Ease.get(1)).to({regX:13.5,scaleX:1,scaleY:1,x:69.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 26
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.9,9.5,1,1,0,0,0,0,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({regX:0.1,scaleX:1.37,scaleY:1.37,x:2.1},10,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:1.9},10,cjs.Ease.get(1)).wait(21));

	// Символ 25
	this.instance_2 = new lib.Символ25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-69,0,1,1,0,0,0,-17.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-17.4,scaleX:1.24,scaleY:1.24,x:-69.2},9,cjs.Ease.get(1)).to({regX:-17.3,scaleX:1,scaleY:1,x:-69},10,cjs.Ease.get(1)).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-9.5,138.1,19);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(101,142.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,124.9,220,36);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sho();
	this.instance.parent = this;
	this.instance.setTransform(-73.4,-73.4,0.426,0.426);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.4,22.4);
	this.instance_1.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.2,-73.4,177.5,146.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.1,73.8);
	this.instance_1.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-81,141.7,172.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smart1();
	this.instance.parent = this;
	this.instance.setTransform(-100,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,119.5);
	this.instance_1.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-150,200,300);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.5,-141.5,339,283);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(-147.5,-119.8,1.352,1.352,0,0,0,-27.6,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleX:1.3,scaleY:1.3,x:-111.7,y:-129},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-113,y:-128.7},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:-114.1,y:-128.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-115.1,y:-128.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-115.9,y:-127.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-116.6,y:-127.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-117.2,y:-127.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-117.7,y:-127.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-118.1,y:-127.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-118.4,y:-127.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-118.7,y:-127.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-119,y:-127.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-119.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-119.3,y:-127},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-119.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-119.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-119.7,y:-126.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-119.8},0).wait(1).to({regX:-27.6,regY:7,scaleX:1,scaleY:1,x:-147.6,y:-119.8},0).wait(1).to({regX:0,regY:0,scaleX:1.06,scaleY:1.06,x:-118.4,y:-127.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-117.2,y:-127.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-116.1,y:-127.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-115.2,y:-128.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-114.4,y:-128.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:-113.7,y:-128.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-113.1,y:-128.6},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-112.6,y:-128.7},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-112.2,y:-128.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-111.8,y:-128.9},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:-111.5,y:-129},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-111.3,y:-129.1},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-111.1},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-110.9,y:-129.2},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:-110.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-110.6},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-110.5,y:-129.3},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-110.4},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-110.3},0).wait(1).to({regX:-27.6,regY:7.1,scaleX:1.35,scaleY:1.35,x:-147.5,y:-119.8},0).wait(1));

	// Символ 10
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-151.7,-119.7,1,1,0,0,0,25.1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-11.8,regY:0,scaleX:1.07,scaleY:1.07,x:-191.2,y:-127.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-193.6,y:-127.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-195.6,y:-128.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-197.4,y:-128.6},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-198.9,y:-128.9},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-200.2,y:-129.1},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-201.2,y:-129.3},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:-202.2,y:-129.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:-202.9,y:-129.7},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:-203.5,y:-129.8},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:-204,y:-129.9},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:-204.4,y:-130},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:-204.8},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:-205.1,y:-130.1},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-205.3},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-205.6,y:-130.2},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:-205.8},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:-205.9},0).wait(1).to({regX:25.1,regY:7.1,scaleX:1.47,scaleY:1.47,x:-151.6,y:-119.8},0).wait(1).to({regX:-11.8,regY:0,scaleX:1.4,scaleY:1.4,x:-203.4,y:-129.7},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:-201.2,y:-129.3},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-199.2,y:-128.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-197.4,y:-128.5},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:-196,y:-128.3},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-194.7,y:-128},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-193.7,y:-127.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-192.7,y:-127.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-192,y:-127.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-191.3,y:-127.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-190.8,y:-127.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-190.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-190,y:-127.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-189.6,y:-127},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-189.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-189.1,y:-126.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-189},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-188.8},0).wait(1).to({scaleX:1,scaleY:1,x:-188.6,y:-126.8},0).wait(1).to({regX:25.1,regY:7.2,scaleX:1,scaleY:1,x:-151.7,y:-119.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.7,-139,140.9,19.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-46,92,92);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-198.9,-104.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161).to({_off:false},0).to({y:-198.8},8,cjs.Ease.get(1)).wait(107).to({y:-104.8},8,cjs.Ease.get(-1)).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-97.9,-199.9,2.218,2.218);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(161).to({_off:false},0).to({y:-177.4,alpha:1},8,cjs.Ease.get(1)).wait(107).to({y:-199.9,alpha:0},8).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-200.3,-183.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off:false},0).to({y:-256.2,alpha:1},8,cjs.Ease.get(1)).wait(107).to({y:-183.7,alpha:0},8).wait(1));

	// Слой 5
	this.text1 = new lib.Символ9();
	this.text1.parent = this;
	this.text1.setTransform(6.6,-108,1.492,1.492,0,0,0,-82.4,-29.7);

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(152).to({x:6.1,y:-87},3).to({y:-207.6},6).wait(114).to({y:-87},6).to({x:6.6,y:-108},3).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-198.9,-468.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({_off:false},0).to({scaleX:1.04,scaleY:1.04,x:-203.4,y:-382.6},5).to({scaleX:1,scaleY:1,x:-198.9,y:-396.1},3).wait(98).to({scaleX:1.04,scaleY:1.04,x:-203.4,y:-382.6},3).to({scaleX:1,scaleY:1,x:-198.9,y:-468.7},5).to({_off:true},1).wait(9));

	// Слой 7
	this.instance_4 = new lib.Символ21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(222.7,-135.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(108).to({_off:false},0).to({x:-3.3,y:-137},9).to({x:6.7},5).wait(25).to({x:-3.3},5).to({x:222.7,y:-135.1},9).to({_off:true},79).wait(45));

	// Слой 6
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(225.1,-136.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).to({x:-3.9},9).to({x:6.1},5).wait(25).to({x:-3.9},5).to({x:225.1},9).to({_off:true},133).wait(45));

	// Слой 5
	this.instance_6 = new lib.Символ19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(234.1,-136.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:4.1},9).to({x:14.1},5).wait(25).to({x:4.1},5).to({x:234.1},9).to({_off:true},187).wait(45));

	// Слой 2
	this.instance_7 = new lib.Символ16();
	this.instance_7.parent = this;
	this.instance_7.setTransform(215.1,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-6.9},9).to({x:3.1},5).wait(25).to({x:-6.9},5).to({x:215.1},9).wait(1).to({x:-6.9},9).to({x:3.1},5).wait(25).to({x:-6.9},5).to({x:215.1},9).wait(1).to({x:-6.9},9).to({x:3.1},5).wait(25).to({x:-6.9},5).to({x:215.1},9).to({_off:true},79).wait(45));

	// Слой 4
	this.instance_8 = new lib.Символ18();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-359.5,-127.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(108).to({_off:false},0).to({x:-172.5,y:-128.4},9).to({x:-182.5},5).wait(25).to({x:-172.5},5).to({x:-359.5,y:-127.5},9).to({_off:true},79).wait(45));

	// Слой 3
	this.instance_9 = new lib.Символ17();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-342,-130);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(54).to({_off:false},0).to({x:-158.9,y:-127.9},9).to({x:-178.9},5).wait(25).to({x:-158.9},5).to({x:-342,y:-130},9).to({_off:true},133).wait(45));

	// Слой 1
	this.instance_10 = new lib.Символ14();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-348.1,-135.1,0.533,0.533,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-150.1},9).to({x:-169.1},5).wait(25).to({x:-150.1},5).to({x:-348.1},9).to({_off:true},187).wait(45));

	// Слой 3
	this.instance_11 = new lib.Символ8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(8.1,1.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(161).to({_off:false},0).to({alpha:0.449},9).wait(105).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.4,-271.1,712.6,216.1);


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
	this.instance.setTransform(20,1.4,1,1,-135,0,0,-240.9,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-250.4,regY:-7.6,rotation:-132.6,x:37.8,y:-2},0).wait(1).to({rotation:-130.2,x:37.9,y:-1.3},0).wait(1).to({rotation:-127.8,x:38,y:-0.5},0).wait(1).to({rotation:-125.3,x:38.1,y:0.2},0).wait(1).to({rotation:-122.9,y:1},0).wait(1).to({rotation:-120.5,y:1.7},0).wait(1).to({rotation:-118.1,y:2.6},0).wait(1).to({rotation:-115.7,x:38,y:3.3},0).wait(1).to({rotation:-113.3,x:37.9,y:4.1},0).wait(1).to({rotation:-110.9,x:37.8,y:4.8},0).wait(1).to({rotation:-108.4,x:37.7,y:5.5},0).wait(1).to({rotation:-106,x:37.4,y:6.3},0).wait(1).to({rotation:-103.6,x:37.2,y:7},0).wait(1).to({rotation:-101.2,x:37,y:7.8},0).wait(1).to({rotation:-98.8,x:36.6,y:8.4},0).wait(1).to({rotation:-96.4,x:36.3,y:9.1},0).wait(1).to({rotation:-94,x:36,y:9.8},0).wait(1).to({rotation:-91.5,x:35.6,y:10.5},0).wait(1).to({rotation:-89.1,x:35.2,y:11.1},0).wait(1).to({rotation:-86.7,x:34.8,y:11.8},0).wait(1).to({rotation:-84.3,x:34.4,y:12.4},0).wait(1).to({rotation:-81.9,x:33.9,y:13},0).wait(1).to({rotation:-79.5,x:33.4,y:13.5},0).wait(1).to({rotation:-77,x:32.9,y:14.1},0).wait(1).to({rotation:-74.6,x:32.3,y:14.7},0).wait(1).to({rotation:-72.2,x:31.7,y:15.2},0).wait(1).to({rotation:-69.8,x:31.1,y:15.7},0).wait(1).to({rotation:-67.4,x:30.6,y:16.1},0).wait(1).to({rotation:-65,x:29.9,y:16.5},0).wait(1).to({rotation:-62.6,x:29.2,y:17},0).wait(1).to({rotation:-60.1,x:28.6,y:17.3},0).wait(1).to({rotation:-57.7,x:27.9,y:17.7},0).wait(1).to({rotation:-55.3,x:27.2,y:18},0).wait(1).to({rotation:-52.9,x:26.5,y:18.2},0).wait(1).to({rotation:-50.5,x:25.8,y:18.5},0).wait(1).to({rotation:-48.1,x:25.1,y:18.7},0).wait(1).to({rotation:-45.7,x:24.4,y:19},0).wait(1).to({rotation:-43.2,x:23.6,y:19.1},0).wait(1).to({rotation:-40.8,x:22.9,y:19.3},0).wait(1).to({rotation:-38.4,x:22.1,y:19.4},0).wait(1).to({rotation:-36,x:21.3,y:19.5},0).wait(1).to({rotation:-33.6,x:20.6},0).wait(1).to({rotation:-31.2,x:19.8},0).wait(1).to({rotation:-28.8,x:19.1},0).wait(1).to({rotation:-26.3,x:18.3,y:19.4},0).wait(1).to({rotation:-23.9,x:17.5,y:19.3},0).wait(1).to({rotation:-21.5,x:16.8,y:19.2},0).wait(1).to({rotation:-19.1,x:16,y:19},0).wait(1).to({rotation:-16.7,x:15.3,y:18.9},0).wait(1).to({rotation:-14.3,x:14.6,y:18.7},0).wait(1).to({rotation:-11.9,x:13.9,y:18.4},0).wait(1).to({rotation:-9.4,x:13.1,y:18.1},0).wait(1).to({rotation:-7,x:12.4,y:17.8},0).wait(1).to({rotation:-4.6,x:11.7,y:17.4},0).wait(1).to({rotation:-2.2,x:11.1,y:17.1},0).wait(1).to({rotation:0.2,x:10.4,y:16.7},0).wait(1).to({rotation:2.6,x:9.8,y:16.3},0).wait(1).to({rotation:5,x:9.1,y:15.9},0).wait(1).to({rotation:7.5,x:8.6,y:15.4},0).wait(1).to({rotation:9.9,x:8,y:14.9},0).wait(1).to({rotation:12.3,x:7.4,y:14.4},0).wait(1).to({rotation:14.7,x:6.9,y:13.9},0).wait(1).to({rotation:17.1,x:6.4,y:13.3},0).wait(1).to({rotation:19.5,x:5.9,y:12.7},0).wait(1).to({rotation:22,x:5.4,y:12.1},0).wait(1).to({rotation:24.4,x:5,y:11.5},0).wait(1).to({rotation:26.8,x:4.5,y:10.8},0).wait(1).to({rotation:29.2,x:4.2,y:10.1},0).wait(1).to({rotation:31.6,x:3.8,y:9.5},0).wait(1).to({rotation:34,x:3.5,y:8.8},0).wait(1).to({rotation:36.4,x:3.2,y:8.1},0).wait(1).to({rotation:38.9,x:2.9,y:7.4},0).wait(1).to({rotation:41.3,x:2.7,y:6.7},0).wait(1).to({rotation:43.7,x:2.5,y:5.9},0).wait(1).to({rotation:46.1,x:2.3,y:5.2},0).wait(1).to({rotation:48.5,x:2.1,y:4.4},0).wait(1).to({rotation:50.9,x:2,y:3.7},0).wait(1).to({rotation:53.3,y:2.9},0).wait(1).to({rotation:55.8,x:1.9,y:2.1},0).wait(1).to({rotation:58.2,y:1.4},0).wait(1).to({rotation:60.6,y:0.6},0).wait(1).to({rotation:63,y:-0.1},0).wait(1).to({rotation:65.4,x:2,y:-0.9},0).wait(1).to({rotation:67.8,x:2.1,y:-1.6},0).wait(1).to({rotation:70.2,x:2.3,y:-2.3},0).wait(1).to({rotation:72.7,x:2.4,y:-3.1},0).wait(1).to({rotation:75.1,x:2.7,y:-3.8},0).wait(1).to({rotation:77.5,x:2.9,y:-4.6},0).wait(1).to({rotation:79.9,x:3.2,y:-5.3},0).wait(1).to({rotation:82.3,x:3.5,y:-6},0).wait(1).to({rotation:84.7,x:3.7,y:-6.7},0).wait(1).to({rotation:87.1,x:4.2,y:-7.4},0).wait(1).to({rotation:89.6,x:4.6,y:-8},0).wait(1).to({rotation:92,x:5,y:-8.7},0).wait(1).to({rotation:94.4,x:5.4,y:-9.3},0).wait(1).to({rotation:96.8,x:5.8,y:-9.9},0).wait(1).to({rotation:99.2,x:6.3,y:-10.5},0).wait(1).to({rotation:101.6,x:6.9,y:-11},0).wait(1).to({rotation:104,x:7.4,y:-11.6},0).wait(1).to({rotation:106.5,x:7.9,y:-12.1},0).wait(1).to({rotation:108.9,x:8.5,y:-12.6},0).wait(1).to({rotation:111.3,x:9.2,y:-13.1},0).wait(1).to({rotation:113.7,x:9.7,y:-13.5},0).wait(1).to({rotation:116.1,x:10.4,y:-13.9},0).wait(1).to({rotation:118.5,x:11,y:-14.3},0).wait(1).to({rotation:121,x:11.7,y:-14.7},0).wait(1).to({rotation:123.4,x:12.4,y:-15.1},0).wait(1).to({rotation:125.8,x:13.1,y:-15.4},0).wait(1).to({rotation:128.2,x:13.8,y:-15.6},0).wait(1).to({rotation:130.6,x:14.5,y:-15.9},0).wait(1).to({rotation:133,x:15.2,y:-16.1},0).wait(1).to({rotation:135.4,x:16,y:-16.3},0).wait(1).to({rotation:137.9,x:16.7,y:-16.4},0).wait(1).to({rotation:140.3,x:17.5,y:-16.6},0).wait(1).to({rotation:142.7,x:18.2},0).wait(1).to({rotation:145.1,x:19,y:-16.7},0).wait(1).to({rotation:147.5,x:19.8,y:-16.8},0).wait(1).to({rotation:149.9,x:20.5,y:-16.7},0).wait(1).to({rotation:152.3,x:21.3},0).wait(1).to({rotation:154.8,x:22.1},0).wait(1).to({rotation:157.2,x:22.8,y:-16.5},0).wait(1).to({rotation:159.6,x:23.5,y:-16.4},0).wait(1).to({rotation:162,x:24.3,y:-16.2},0).wait(1).to({rotation:164.4,x:25.1,y:-16},0).wait(1).to({rotation:166.8,x:25.8,y:-15.8},0).wait(1).to({rotation:169.2,x:26.5,y:-15.6},0).wait(1).to({rotation:171.7,x:27.2,y:-15.3},0).wait(1).to({rotation:174.1,x:27.9,y:-14.9},0).wait(1).to({rotation:176.5,x:28.6,y:-14.5},0).wait(1).to({rotation:178.9,x:29.2,y:-14.2},0).wait(1).to({rotation:181.3,x:29.9,y:-13.8},0).wait(1).to({rotation:183.7,x:30.5,y:-13.3},0).wait(1).to({rotation:186.1,x:31.1,y:-12.9},0).wait(1).to({rotation:188.6,x:31.7,y:-12.4},0).wait(1).to({rotation:191,x:32.3,y:-11.9},0).wait(1).to({rotation:193.4,x:32.9,y:-11.4},0).wait(1).to({rotation:195.8,x:33.4,y:-10.8},0).wait(1).to({rotation:198.2,x:33.8,y:-10.3},0).wait(1).to({rotation:200.6,x:34.3,y:-9.7},0).wait(1).to({rotation:203,x:34.8,y:-9},0).wait(1).to({rotation:205.5,x:35.2,y:-8.4},0).wait(1).to({rotation:207.9,x:35.6,y:-7.8},0).wait(1).to({rotation:210.3,x:36,y:-7.1},0).wait(1).to({rotation:212.7,x:36.4,y:-6.4},0).wait(1).to({rotation:215.1,x:36.7,y:-5.8},0).wait(1).to({rotation:217.5,x:36.9,y:-5},0).wait(1).to({rotation:220,x:37.2,y:-4.3},0).wait(1).to({rotation:222.4,x:37.4,y:-3.6},0).wait(1).to({rotation:224.8,x:37.6,y:-2.8},0).wait(1).to({rotation:227.2,x:37.8,y:-2.1},0).wait(1).to({rotation:229.6,x:37.9,y:-1.4},0).wait(1).to({rotation:232,x:38,y:-0.5},0).wait(1).to({rotation:234.4,y:0.2},0).wait(1).to({rotation:236.9,x:38.1,y:0.9},0).wait(1).to({rotation:239.3,y:1.7},0).wait(1).to({rotation:241.7,y:2.5},0).wait(1).to({rotation:244.1,x:38,y:3.2},0).wait(1).to({rotation:246.5,y:4},0).wait(1).to({rotation:248.9,x:37.8,y:4.7},0).wait(1).to({rotation:251.3,x:37.6,y:5.5},0).wait(1).to({rotation:253.8,x:37.5,y:6.2},0).wait(1).to({rotation:256.2,x:37.2,y:6.9},0).wait(1).to({rotation:258.6,x:37,y:7.7},0).wait(1).to({rotation:261,x:36.7,y:8.4},0).wait(1).to({rotation:263.4,x:36.3,y:9.1},0).wait(1).to({rotation:265.8,x:36,y:9.8},0).wait(1).to({rotation:268.2,x:35.6,y:10.5},0).wait(1).to({rotation:270.7,x:35.2,y:11.1},0).wait(1).to({rotation:273.1,x:34.9,y:11.7},0).wait(1).to({rotation:275.5,x:34.4,y:12.3},0).wait(1).to({rotation:277.9,x:33.9,y:12.9},0).wait(1).to({rotation:280.3,x:33.4,y:13.5},0).wait(1).to({rotation:282.7,x:32.9,y:14.1},0).wait(1).to({rotation:285.1,x:32.4,y:14.6},0).wait(1).to({rotation:287.6,x:31.8,y:15.1},0).wait(1).to({rotation:290,x:31.2,y:15.6},0).wait(1).to({rotation:292.4,x:30.6,y:16},0).wait(1).to({rotation:294.8,x:30,y:16.5},0).wait(1).to({rotation:297.2,x:29.3,y:16.9},0).wait(1).to({rotation:299.6,x:28.7,y:17.3},0).wait(1).to({rotation:302,x:28,y:17.6},0).wait(1).to({rotation:304.5,x:27.3,y:18},0).wait(1).to({rotation:306.9,x:26.6,y:18.3},0).wait(1).to({rotation:309.3,x:25.9,y:18.5},0).wait(1).to({rotation:311.7,x:25.2,y:18.8},0).wait(1).to({rotation:314.1,x:24.5,y:18.9},0).wait(1).to({rotation:316.5,x:23.6,y:19.1},0).wait(1).to({rotation:319,x:22.9,y:19.3},0).wait(1).to({rotation:321.4,x:22.2,y:19.4},0).wait(1).to({rotation:323.8,x:21.4},0).wait(1).to({rotation:326.2,x:20.6,y:19.5},0).wait(1).to({rotation:328.6,x:19.9},0).wait(1).to({rotation:331,x:19.1},0).wait(1).to({rotation:333.4,x:18.4,y:19.4},0).wait(1).to({rotation:335.9,x:17.6,y:19.3},0).wait(1).to({rotation:338.3,x:16.9,y:19.2},0).wait(1).to({rotation:340.7,x:16.1,y:19.1},0).wait(1).to({rotation:343.1,x:15.4,y:18.9},0).wait(1).to({rotation:345.5,x:14.6,y:18.7},0).wait(1).to({rotation:347.9,x:13.9,y:18.4},0).wait(1).to({rotation:350.3,x:13.2,y:18.2},0).wait(1).to({rotation:352.8,x:12.5,y:17.8},0).wait(1).to({rotation:355.2,x:11.8,y:17.5},0).wait(1).to({rotation:357.6,x:11.2,y:17.1},0).wait(1).to({rotation:360,x:10.5,y:16.8},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,31.4,1.268,1.268,0,0,0,-241,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-250.4,regY:-7.6,rotation:-1.8,x:-10.4,y:51.2},0).wait(1).to({rotation:-3.5,x:-9.7,y:51.6},0).wait(1).to({rotation:-5.3,x:-9.2,y:51.9},0).wait(1).to({rotation:-7,x:-8.5,y:52.2},0).wait(1).to({rotation:-8.8,x:-7.8,y:52.5},0).wait(1).to({rotation:-10.5,x:-7.2,y:52.7},0).wait(1).to({rotation:-12.3,x:-6.5,y:53},0).wait(1).to({rotation:-14,x:-5.9,y:53.2},0).wait(1).to({rotation:-15.8,x:-5.2,y:53.4},0).wait(1).to({rotation:-17.6,x:-4.5,y:53.6},0).wait(1).to({rotation:-19.3,x:-3.9,y:53.7},0).wait(1).to({rotation:-21.1,x:-3.1,y:53.9},0).wait(1).to({rotation:-22.8,x:-2.5,y:54},0).wait(1).to({rotation:-24.6,x:-1.8,y:54.1},0).wait(1).to({rotation:-26.3,x:-1,y:54.2},0).wait(1).to({rotation:-28.1,x:-0.4},0).wait(1).to({rotation:-29.9,x:0.3,y:54.3},0).wait(1).to({rotation:-31.6,x:1},0).wait(1).to({rotation:-33.4,x:1.7,y:54.2},0).wait(1).to({rotation:-35.1,x:2.4},0).wait(1).to({rotation:-36.9,x:3.1},0).wait(1).to({rotation:-38.6,x:3.8,y:54.1},0).wait(1).to({rotation:-40.4,x:4.5,y:54},0).wait(1).to({rotation:-42.1,x:5.2,y:53.9},0).wait(1).to({rotation:-43.9,x:5.9,y:53.7},0).wait(1).to({rotation:-45.7,x:6.6,y:53.5},0).wait(1).to({rotation:-47.4,x:7.2,y:53.4},0).wait(1).to({rotation:-49.2,x:7.9,y:53.2},0).wait(1).to({rotation:-50.9,x:8.6,y:52.9},0).wait(1).to({rotation:-52.7,x:9.2,y:52.7},0).wait(1).to({rotation:-54.4,x:9.9,y:52.4},0).wait(1).to({rotation:-56.2,x:10.5,y:52.2},0).wait(1).to({rotation:-58,x:11.2,y:51.9},0).wait(1).to({rotation:-59.7,x:11.8,y:51.6},0).wait(1).to({rotation:-61.5,x:12.4,y:51.2},0).wait(1).to({rotation:-63.2,x:13,y:50.8},0).wait(1).to({rotation:-65,x:13.6,y:50.4},0).wait(1).to({rotation:-66.7,x:14.2,y:50.1},0).wait(1).to({rotation:-68.5,x:14.7,y:49.6},0).wait(1).to({rotation:-70.2,x:15.3,y:49.2},0).wait(1).to({rotation:-72,x:15.8,y:48.8},0).wait(1).to({rotation:-73.8,x:16.3,y:48.3},0).wait(1).to({rotation:-75.5,x:16.9,y:47.8},0).wait(1).to({rotation:-77.3,x:17.4,y:47.3},0).wait(1).to({rotation:-79,x:17.8,y:46.8},0).wait(1).to({rotation:-80.8,x:18.3,y:46.3},0).wait(1).to({rotation:-82.5,x:18.7,y:45.8},0).wait(1).to({rotation:-84.3,x:19.2,y:45.2},0).wait(1).to({rotation:-86,x:19.6,y:44.6},0).wait(1).to({rotation:-87.8,x:20,y:44.1},0).wait(1).to({rotation:-89.6,x:20.3,y:43.5},0).wait(1).to({rotation:-91.3,x:20.7,y:42.9},0).wait(1).to({rotation:-93.1,x:21.1,y:42.2},0).wait(1).to({rotation:-94.8,x:21.4,y:41.6},0).wait(1).to({rotation:-96.6,x:21.8,y:41},0).wait(1).to({rotation:-98.3,x:22,y:40.3},0).wait(1).to({rotation:-100.1,x:22.3,y:39.7},0).wait(1).to({rotation:-101.9,x:22.5,y:39.1},0).wait(1).to({rotation:-103.6,x:22.8,y:38.4},0).wait(1).to({rotation:-105.4,x:23,y:37.7},0).wait(1).to({rotation:-107.1,x:23.2,y:37},0).wait(1).to({rotation:-108.9,x:23.3,y:36.3},0).wait(1).to({rotation:-110.6,x:23.5,y:35.7},0).wait(1).to({rotation:-112.4,x:23.6,y:35},0).wait(1).to({rotation:-114.1,x:23.7,y:34.3},0).wait(1).to({rotation:-115.9,x:23.8,y:33.6},0).wait(1).to({rotation:-117.7,y:32.9},0).wait(1).to({rotation:-119.4,x:23.9,y:32.2},0).wait(1).to({rotation:-121.2,y:31.5},0).wait(1).to({rotation:-122.9,y:30.8},0).wait(1).to({rotation:-124.7,x:23.8,y:30.1},0).wait(1).to({rotation:-126.4,y:29.4},0).wait(1).to({rotation:-128.2,x:23.7,y:28.7},0).wait(1).to({rotation:-130,x:23.6,y:28},0).wait(1).to({rotation:-131.7,x:23.5,y:27.3},0).wait(1).to({rotation:-133.5,x:23.4,y:26.6},0).wait(1).to({rotation:-135.2,x:23.2,y:26},0).wait(1).to({rotation:-137,x:23,y:25.3},0).wait(1).to({rotation:-138.7,x:22.9,y:24.6},0).wait(1).to({rotation:-140.5,x:22.6,y:23.9},0).wait(1).to({rotation:-142.2,x:22.4,y:23.2},0).wait(1).to({rotation:-144,x:22.1,y:22.6},0).wait(1).to({rotation:-145.8,x:21.9,y:21.9},0).wait(1).to({rotation:-147.5,x:21.6,y:21.4},0).wait(1).to({rotation:-149.3,x:21.2,y:20.7},0).wait(1).to({rotation:-151,x:20.9,y:20.1},0).wait(1).to({rotation:-152.8,x:20.5,y:19.5},0).wait(1).to({rotation:-154.5,x:20.2,y:18.9},0).wait(1).to({rotation:-156.3,x:19.8,y:18.3},0).wait(1).to({rotation:-158,x:19.3,y:17.7},0).wait(1).to({rotation:-159.8,x:18.9,y:17.2},0).wait(1).to({rotation:-161.6,x:18.4,y:16.7},0).wait(1).to({rotation:-163.3,x:18,y:16.1},0).wait(1).to({rotation:-165.1,x:17.5,y:15.6},0).wait(1).to({rotation:-166.8,x:17,y:15.1},0).wait(1).to({rotation:-168.6,x:16.6,y:14.6},0).wait(1).to({rotation:-170.3,x:16,y:14.1},0).wait(1).to({rotation:-172.1,x:15.5,y:13.7},0).wait(1).to({rotation:-173.9,x:14.9,y:13.3},0).wait(1).to({rotation:-175.6,x:14.4,y:12.8},0).wait(1).to({rotation:-177.4,x:13.8,y:12.4},0).wait(1).to({rotation:-179.1,x:13.2,y:12.1},0).wait(1).to({rotation:-180.9,x:12.6,y:11.7},0).wait(1).to({rotation:-182.6,x:12,y:11.3},0).wait(1).to({rotation:-184.4,x:11.4,y:11},0).wait(1).to({rotation:-186.1,x:10.8,y:10.7},0).wait(1).to({rotation:-187.9,x:10.1,y:10.4},0).wait(1).to({rotation:-189.7,x:9.4,y:10.1},0).wait(1).to({rotation:-191.4,x:8.8,y:9.9},0).wait(1).to({rotation:-193.2,x:8.1,y:9.7},0).wait(1).to({rotation:-194.9,x:7.5,y:9.4},0).wait(1).to({rotation:-196.7,x:6.8,y:9.3},0).wait(1).to({rotation:-198.4,x:6.1,y:9.1},0).wait(1).to({rotation:-200.2,x:5.5,y:8.9},0).wait(1).to({rotation:-202,x:4.7,y:8.8},0).wait(1).to({rotation:-203.7,x:4.1,y:8.7},0).wait(1).to({rotation:-205.5,x:3.4,y:8.6},0).wait(1).to({rotation:-207.2,x:2.6,y:8.5},0).wait(1).to({rotation:-209,x:2},0).wait(1).to({rotation:-210.7,x:1.2},0).wait(1).to({rotation:-212.5,x:0.5},0).wait(1).to({rotation:-214.2,x:-0.2},0).wait(1).to({rotation:-216,x:-0.8,y:8.6},0).wait(1).to({rotation:-217.8,x:-1.5},0).wait(1).to({rotation:-219.5,x:-2.2,y:8.7},0).wait(1).to({rotation:-221.3,x:-2.9,y:8.8},0).wait(1).to({rotation:-223,x:-3.6,y:8.9},0).wait(1).to({rotation:-224.8,x:-4.3,y:9.1},0).wait(1).to({rotation:-226.5,x:-5,y:9.3},0).wait(1).to({rotation:-228.3,x:-5.6,y:9.5},0).wait(1).to({rotation:-230,x:-6.3,y:9.7},0).wait(1).to({rotation:-231.8,x:-7,y:9.9},0).wait(1).to({rotation:-233.6,x:-7.6,y:10.2},0).wait(1).to({rotation:-235.3,x:-8.3,y:10.5},0).wait(1).to({rotation:-237.1,x:-8.9,y:10.7},0).wait(1).to({rotation:-238.8,x:-9.5,y:11.1},0).wait(1).to({rotation:-240.6,x:-10.1,y:11.4},0).wait(1).to({rotation:-242.3,x:-10.7,y:11.7},0).wait(1).to({rotation:-244.1,x:-11.4,y:12.1},0).wait(1).to({rotation:-245.9,x:-11.9,y:12.5},0).wait(1).to({rotation:-247.6,x:-12.5,y:12.9},0).wait(1).to({rotation:-249.4,x:-13.1,y:13.3},0).wait(1).to({rotation:-251.1,x:-13.6,y:13.7},0).wait(1).to({rotation:-252.9,x:-14.2,y:14.2},0).wait(1).to({rotation:-254.6,x:-14.7,y:14.7},0).wait(1).to({rotation:-256.4,x:-15.2,y:15.2},0).wait(1).to({rotation:-258.1,x:-15.6,y:15.7},0).wait(1).to({rotation:-259.9,x:-16.1,y:16.2},0).wait(1).to({rotation:-261.7,x:-16.6,y:16.7},0).wait(1).to({rotation:-263.4,x:-17.1,y:17.3},0).wait(1).to({rotation:-265.2,x:-17.5,y:17.8},0).wait(1).to({rotation:-266.9,x:-17.9,y:18.4},0).wait(1).to({rotation:-268.7,x:-18.2,y:18.9},0).wait(1).to({rotation:-270.4,x:-18.6,y:19.6},0).wait(1).to({rotation:-272.2,x:-18.9,y:20.2},0).wait(1).to({rotation:-274,x:-19.3,y:20.8},0).wait(1).to({rotation:-275.7,x:-19.6,y:21.4},0).wait(1).to({rotation:-277.5,x:-20,y:22},0).wait(1).to({rotation:-279.2,x:-20.2,y:22.7},0).wait(1).to({rotation:-281,x:-20.5,y:23.4},0).wait(1).to({rotation:-282.7,x:-20.7,y:24.1},0).wait(1).to({rotation:-284.5,x:-20.9,y:24.7},0).wait(1).to({rotation:-286.2,x:-21.1,y:25.4},0).wait(1).to({rotation:-288,x:-21.3,y:26},0).wait(1).to({rotation:-289.8,x:-21.5,y:26.7},0).wait(1).to({rotation:-291.5,x:-21.6,y:27.4},0).wait(1).to({rotation:-293.3,x:-21.7,y:28.1},0).wait(1).to({rotation:-295,y:28.8},0).wait(1).to({rotation:-296.8,x:-21.8,y:29.5},0).wait(1).to({rotation:-298.5,x:-21.9,y:30.2},0).wait(1).to({rotation:-300.3,y:30.9},0).wait(1).to({rotation:-302,x:-22,y:31.6},0).wait(1).to({rotation:-303.8,x:-21.9,y:32.3},0).wait(1).to({rotation:-305.6,y:33},0).wait(1).to({rotation:-307.3,x:-21.8,y:33.7},0).wait(1).to({rotation:-309.1,x:-21.7,y:34.4},0).wait(1).to({rotation:-310.8,x:-21.6,y:35.1},0).wait(1).to({rotation:-312.6,x:-21.5,y:35.8},0).wait(1).to({rotation:-314.3,x:-21.3,y:36.5},0).wait(1).to({rotation:-316.1,x:-21.2,y:37.1},0).wait(1).to({rotation:-317.9,x:-21,y:37.8},0).wait(1).to({rotation:-319.6,x:-20.8,y:38.5},0).wait(1).to({rotation:-321.4,x:-20.6,y:39.1},0).wait(1).to({rotation:-323.1,x:-20.3,y:39.8},0).wait(1).to({rotation:-324.9,x:-20,y:40.5},0).wait(1).to({rotation:-326.6,x:-19.7,y:41.1},0).wait(1).to({rotation:-328.4,x:-19.5,y:41.7},0).wait(1).to({rotation:-330.1,x:-19.1,y:42.4},0).wait(1).to({rotation:-331.9,x:-18.7,y:42.9},0).wait(1).to({rotation:-333.7,x:-18.4,y:43.5},0).wait(1).to({rotation:-335.4,x:-18,y:44.2},0).wait(1).to({rotation:-337.2,x:-17.6,y:44.7},0).wait(1).to({rotation:-338.9,x:-17.2,y:45.2},0).wait(1).to({rotation:-340.7,x:-16.7,y:45.8},0).wait(1).to({rotation:-342.4,x:-16.3,y:46.4},0).wait(1).to({rotation:-344.2,x:-15.8,y:46.9},0).wait(1).to({rotation:-346,x:-15.3,y:47.4},0).wait(1).to({rotation:-347.7,x:-14.9,y:47.9},0).wait(1).to({rotation:-349.5,x:-14.3,y:48.4},0).wait(1).to({rotation:-351.2,x:-13.8,y:48.8},0).wait(1).to({rotation:-353,x:-13.3,y:49.3},0).wait(1).to({rotation:-354.7,x:-12.7,y:49.7},0).wait(1).to({rotation:-356.5,x:-12.1,y:50.1},0).wait(1).to({rotation:-358.2,x:-11.5,y:50.5},0).wait(1).to({rotation:-360,x:-11,y:50.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.5,-325.4,760.4,645.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(-2,-21.1,1.295,1.295,0,0,0,-0.1,0.1);

	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.1,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525.6,-442.7,984.4,836);


(lib.Символ2 = function(mode,startPosition,loop) {
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

	// Слой 11
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-98.3,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-96.9,y:-52.8},9,cjs.Ease.get(1)).wait(1).to({x:-98.3,y:45.2},9).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.2,-59.4,2.218,2.218);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:2.2,y:-35.4,alpha:1},9,cjs.Ease.get(1)).wait(1).to({x:3.2,y:-59.4,alpha:0},9).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ23();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-99.2,-77.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-112.7,alpha:1},9,cjs.Ease.get(1)).wait(1).to({y:-77.7,alpha:0},9).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-98.9,-318.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,regY:-0.1,scaleX:1.21,scaleY:1.21,x:-99,y:-229.2},6).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-98.9,y:-251.1},3).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1.21,scaleY:1.21,x:-99,y:-229.2},3).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-98.9,y:-318.7},6).wait(1));

	// Слой 6
	this.tovar = new lib.Символ15();
	this.tovar.parent = this;
	this.tovar.setTransform(100,150);

	this.timeline.addTween(cjs.Tween.get(this.tovar).to({alpha:0},9).wait(1).to({alpha:1},9).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-15.1,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-540.7,-420.2,984.4,836);


// stage content:



(lib._336x280 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(168.1,140.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.main = new lib.Символ2();
	this.main.parent = this;
	this.main.setTransform(168,140);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.7,-140.2,984.4,836);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/fon.jpg?1464852342998", id:"fon"},
		{src:"images/hrch_03.png?1464852342998", id:"hrch_03"},
		{src:"images/hrch_05.png?1464852342998", id:"hrch_05"},
		{src:"images/hrch_10.png?1464852342998", id:"hrch_10"},
		{src:"images/hrch_12.png?1464852342998", id:"hrch_12"},
		{src:"images/hrch_14.png?1464852342998", id:"hrch_14"},
		{src:"images/hrch_20.png?1464852342998", id:"hrch_20"}
	]
};



// symbols:



(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,300);


(lib.hrch_03 = function() {
	this.initialize(img.hrch_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,303);


(lib.hrch_05 = function() {
	this.initialize(img.hrch_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,290);


(lib.hrch_10 = function() {
	this.initialize(img.hrch_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,129);


(lib.hrch_12 = function() {
	this.initialize(img.hrch_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,129);


(lib.hrch_14 = function() {
	this.initialize(img.hrch_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,120);


(lib.hrch_20 = function() {
	this.initialize(img.hrch_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,766,309);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBZQgMgCgIgGQgJgEgFgJQgFgIAAgKQgBgHAEgCIAKgCQAFgCACAFQAHAeAoAAQAMAAAJgCQAKgBAHgEQAGgFAEgGQAEgFACgIQABgIgCgGQgCgFgFgEQgFgDgJgCIgWgEQgXgCgOgFQgLgCgEgFQgFgFgCgKQgDgKACgLQACgMAGgKQAGgJAKgHQAJgGAOgDQANgDAQgBQANABALACQALACAHAFQAIAFAFAGQAGAIACAJQACAGgGACIgIAEIgGABIgDgEQgHgagmAAQgLAAgJADQgIABgHAEQgGAEgEAFQgEAGgBAIQgCAKAEAHQADAGAKAEQAJACAWACQAQACALAEQAMADAIAEQAHAGADAJQADAKgDANQgCAMgGAJQgGAJgKAHQgKAHgNADQgOAEgRAAQgPAAgLgEgAhsBYQgGAAgCgFIgoiiQgBgIAIABIAHAAQAJgBABAHIAbBvIAEAdIABAAIAGgMIBLiAQAEgHAIABIAHAAQAHAAgDAGIhgCjQgEAFgGAAg");
	this.shape.setTransform(15.7,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,18.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hrch_14();
	this.instance.setTransform(0,0,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,90.2);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnDDlIgMgHQgGgEgEgFQgFgFgDgGQgDgGgCgHQgBgHAAgIIAKhBQACgLAIgTIAJgMIALgKQAHgGAUgHQALgDAYgCQAPAAALADQALADAIAGQAIAGAGAJQAFAIACAMQABAGgCADQgCAEgGABIgbAKQgGABgDgBQgDgCgBgGQgCgIgGgEQgFgFgLAAQgIAAgFACQgGACgEADQgEADgDAGQgDAFgBAHIgIAvQgCAHABAGQABAFADADQADAEAFABQAFACAIAAQAKAAAIgFQAHgEAFgIQAEgHADgBQADgCAFADIAcAKQAFACABADQABAEgDAFQgGAMgIAIQgJAJgKAFQgLAGgNADQgNADgPAAQgXgCgKgDgAFmDmQgFAAgBgDQgBgDAEgFIAcgtIgjh4QgDgLALAAIAfAAQAKAAADACQAEACABAGIAQA7IAig7QAEgGADgCQAEgCAIAAIAhAAQAGAAABADQAAADgDAFIhjCmQgEAGgDACQgEACgJAAgAEWDmQgLAAgEgCQgEgCgCgHIgPgvQgCgHgDgDQgEgDgHAAIgEAAIgLA8QgBAGgDACQgDADgGAAIgdAAQgHAAgCgDQgCgCABgGIAdilQACgGACgCQADgDAGAAIAeAAQAGAAACADQADACgCAGIgKA7IAGAAIAwg8QAFgGAEgCQAEgCAJAAIAfAAQAGAAABADQABAEgEAFIg+BNIAIAIQADAFACAGIAYBCQABAGgCADQgDAEgGAAgAgCDmQgGAAgCgDQgCgCABgGIAbilQABgGADgCQADgDAGAAIBNAAQANAAAKAEQALADAGAHQAGAHADAKQACAJgCAMQgCANgGAIQgGAIgMAIIAAABQAYALgGAkQgCAMgGAKQgGAJgKAGQgJAGgMAEQgNADgOAAgAAsC7IAfAAQAIAAAFgEQAFgDABgIQACgIgEgEQgDgDgJAAIgeAAgAA5ByIAZAAQAJAAAEgDQAFgEABgHQABgHgDgEQgDgEgJAAIgZAAgAg6DmQgJAAgEgDQgEgCAAgGIgDgTIg5AAIgJATQgDAGgEACQgFADgJAAIgdAAQgGAAgBgDQgBgDADgFIBaimQADgGADgCQADgCAGAAIAeAAQAFAAADACQADACABAFIAfCnQABAFgCADQgDADgFAAgAhTCfIgEgfQgBgRABgOIABgGIgDAAQgGAZgFAMIgPAfIAgAAgAkWDmQgGAAgCgDQgDgCACgGIAXiCIgnAAQgHAAgCgCQgCgDABgGIAFgYQABgGADgCQACgDAHAAICCAAQAGAAACADQACACgBAGIgEAYQgBAGgDADQgDACgHAAIgmAAIgXCCQgCAGgCACQgDADgGAAgAkhgCQgGAAgCgDQgCgCABgGIAFgdIhgAAIgFAdQgBAGgDACQgDADgGAAIgdAAQgGAAgCgDQgCgCABgGIALhAQABgHADgCQADgCAGAAIAGAAQAGgFAFgGIAJgOQAEgIADgLIARhWQABgGADgCQADgDAGAAIByAAQAHAAACADQACACgBAGIgXCCIANAAQAGAAACACQACACgBAHIgMBAQgBAGgDACQgCADgHAAgAlMieQgEAWgGASQgGARgIANIAvAAIARhfIgjAAgAopgrIgNgHQgGgEgEgFQgFgFgDgGQgDgGgBgHQgCgHAAgIIAKhBQACgLAJgTIAIgMIALgKQAIgGAUgHQAKgDAZgCQAOAAALADQALADAJAGQAIAGAFAJQAFAIACAMQACAGgCADQgCAEgHABIgbAKQgGABgDgBQgCgCgCgGQgCgIgFgEQgGgFgLAAQgHAAgGACQgGACgEADQgEADgCAGQgDAFgBAHIgJAvQgBAHABAGQAAAFADADQADAEAGABQAFACAHAAQALAAAHgFQAIgEAEgIQAEgHADgBQADgCAGADIAbAKQAFACABADQACAEgDAFQgHAMgIAIQgIAJgLAFQgKAGgNADQgNADgPAAQgYgCgJgDgAg8gnQgDgBgCgGIgLgZQgBgFABgEQACgDAHgDQAHgEAHgGQAGgGAFgHQAFgHAEgNQAEgMADgRIAKg8QACgGACgCQADgDAGAAIBuAAQAHAAACADQACACgBAGIgdClQgBAGgDACQgDADgGAAIgeAAQgGAAgCgDQgCgCABgGIAWiCIgfAAIgEAZQgIAigFAOQgKAZgGAJQgKANgKAIQgLAIgOAHIgHACIgCgBgAG3gqQgHAAgCgDQgCgCABgGIAdilQACgGACgCQADgDAGAAIAeAAQAGAAACADQADACgCAGIgIAtIAeAAQAQAAAMAFQALAEAIAKQAIAJACAMQADANgDAPQgDAQgGALQgGAMgKAIQgKAIgNAEQgNAEgPAAgAHnhYIAaAAQAJAAAHgGQAGgFABgJQACgIgEgFQgFgGgJAAIgaAAgAFAgqQgGAAgCgDQgCgCABgGIAXiCIgnAAQgGAAgCgCQgCgDABgGIAEgYQABgGADgCQADgDAGAAICCAAQAGAAADADQACACgCAGIgEAYQgBAGgDADQgDACgGAAIgnAAIgXCCQgBAGgDACQgDADgGAAgAD4gqQgKAAgEgDQgDgCgBgGIgCgTIg5AAIgKATQgDAGgEACQgEADgKAAIgcAAQgGAAgBgDQgBgDADgFIBZimQADgGADgCQADgCAGAAIAeAAQAGAAADACQACACACAFIAfCnQABAFgDADQgCADgGAAgADfhxIgEgfQgCgRACgOIAAgGIgCAAQgGAZgGAMIgPAfIAhAAgAjUgqQgHAAgCgDQgCgCABgGIAdilQACgGACgCQADgDAGAAIBuAAQAHAAACADQACACgBAGIgEAYQgBAGgDADQgDACgGAAIhGAAIgEAYIA3AAQAHAAACACQACADgBAGIgFAXQgBAHgDACQgDADgGAAIg3AAIgFAZIBIAAQAGAAACACQACACgBAHIgEAYQgBAGgDACQgDADgGAAg");
	this.shape.setTransform(59.1,23.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.2,46.9);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AFaCHQgHgIgFgKQgFgKgCgLQgEgQAEgjIARhjQAFgbANgWQAMgVATgPQAUgPAZgHQAagIAfAAQAUAAAhAJQALAEAKAHQAJAGAHAJQAPARAFAXQAEAWgEAcIgSBjQgFAbgMAWQgNAVgTAPQgTAOgZAIQgaAIgfAAQg9AAgegjgAHChPQgMAJgDARIgTBqQgDARAJAKQAJAJATAAQATAAAMgJQAMgKADgRIAThqQADgRgJgJQgIgJgTAAQgTAAgNAJgAAwCHQgHgIgFgKQgFgKgCgLQgEgQAEgjIARhjQAFgbANgWQAMgVATgPQAUgPAZgHQAagIAfAAQAUAAAhAJQALAEAKAHQAJAGAHAJQAPARAFAXQAEAWgEAcIgSBjQgFAbgMAWQgNAVgTAPQgTAOgZAIQgaAIgfAAQg9AAgegjgACYhPQgMAJgDARIgTBqQgDARAJAKQAJAJATAAQATAAAMgJQAMgKADgRIAThqQADgRgJgJQgIgJgTAAQgTAAgNAJgAmfBgQgCgKADgFQAEgGALgDIAugRQALgDADADQADACAGALQAEALAJAFQAKAFASAAQAXAAANgKQANgLAEgWIABgGQgUAEgcAAQghAAgXgHQgXgHgNgNQgOgOgEgSQgEgUAEgcQAFgaANgUQAMgTATgOQAUgNAagHQAagHAfAAQAWAAAiAJQALAEAKAHQAJAGAHAJQAHAIAFAKQAFAKACAMQADAigEAVIgQBaQgFAegMAWQgMAWgUAPQgTAPgaAHQgaAIgiAAQhlAAgOhKgAkfhTQgMAHgDAPQgDAPAJAHQAIAHAXAAQAbAAARgGIADgRQAEgSgJgJQgJgJgWAAQgVAAgMAIgAhYCmQgVAAgGgHQgHgIAEgUIADgTQAEgVAJgIQAJgIAVAAIARAAQAUAAAHAIQAHAIgEAVIgDATQgEAUgJAIQgJAHgVAAgAohCjQgLAAgDgFQgEgEACgLIAii9IgiARQgNAGgGgCQgFgCgEgKIgPgnQgDgJADgGQADgGAKgGIBkgzQAOgIAOAAIAcAAQALAAAEAEQADAFgCAKIgzEeQgCALgFAEQgFAFgLAAgAhAAOQgVAAgGgIQgHgGAEgUIADgTQADgUAKgIQAJgIAVAAIARAAQAVAAAGAIQAFAIgCAUIgDATQgEAUgJAGQgJAIgVAAg");
	this.shape.setTransform(60.7,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.5,34.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiwC0QgIAAgDgEQgCgEAEgIICylAQAEgKAEgDQAFgDALAAIAzAAQAKAAACAEQABADgEAJIivFAQgFAKgFADQgGADgKAAgAGsCWQgMgEgJgGQgKgGgHgJQgHgIgEgLQgFgJgCgNQgDgPAEgnIAQhaQAFgeAMgWQAMgXATgOQAUgPAagIQAagHAiAAQBkAAAQBJQABALgDAEQgEAHgLADIgtAQQgLAFgFgFQgDgBgEgLQgFgLgKgFQgLgGgQAAQgXAAgNALQgNALgEAVIgCAHQAUgEAdAAQAhAAAXAGQAXAIANANQAOANAEATQAEAUgFAbQgFAagMAVQgMATgUANQgTAOgaAHQgaAGggAAQgogCgPgHgAHQAdIgEARQgDASAJAJQAJAJAWAAQAWAAAMgIQALgHADgQQADgPgJgGQgJgIgXAAQgbAAgQAHgABdB9QgHgJgFgKQgFgJgDgMQgDgPADgkIAShjQAFgaAMgWQAMgVAUgPQATgPAagIQAZgHAfAAQAVAAAhAIQALAFAJAHQAJAGAIAIQAOASAFAXQAFAWgFAbIgSBkQgFAbgMAVQgMAWgTAOQgTAPgaAIQgZAIgfgBQg9ABgegjgADFhZQgMAJgDARIgTBqQgDARAIAJQAJAKATAAQATAAAMgKQAMgJADgRIAUhqQADgRgJgJQgJgKgTAAQgTAAgMAKgAp9B9QgHgJgFgKQgFgJgCgMQgEgPAEgkIARhjQAFgaANgWQAMgVATgPQAUgPAZgIQAagHAfAAQAUAAAhAIQALAFAKAHQAJAGAHAIQAPASAFAXQAEAWgEAbIgSBkQgFAbgMAVQgNAWgTAOQgTAPgZAIQgaAIgfgBQg9ABgegjgAoVhZQgMAJgDARIgTBqQgDARAJAJQAJAKATAAQATAAAMgKQAMgJADgRIAThqQADgRgJgJQgIgKgTAAQgTAAgNAKgAkqCZQgLAAgEgFQgEgFADgKIAii+IgjASQgMAFgGgBQgGgCgEgKIgPgnQgDgJADgGQADgGALgGIBjgzQAPgIAOAAIAbAAQAMAAADAEQAEAFgDAKIgyEeQgDALgEAEQgFAFgLAAg");
	this.shape.setTransform(66,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,36.1);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hrch_12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,129);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hrch_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,129);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,300);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJpCjQgLAAgDgFQgEgEACgLIAQhYIgMAAQgPgBgJAFQgIAFgIAOIgnBBQgHAMgIAEQgJAEgUAAIgxAAQgMAAgCgFQgCgGAIgMIBGhpQgKgHgIgJQgHgKgEgKQgFgMAAgOQgBgOADgQQAEgaAMgTQALgVARgNQARgNAWgGQAXgHAbAAICDAAQALAAAEAFQADAEgCAKIgzEeQgCAMgFADQgFAFgLAAgAI4hKQgJAIgDAPQgCAPAGAHQAGAHAPABIAyAAIAKg8IgxAAQgPAAgJAHgAEtCjQgLAAgEgFQgDgEACgLIAciIIAXg2IgEAAQgoBDgTAaIhTBsQgIAJgNAAIg4AAQgLAAgDgFQgDgDABgMIA0keQABgKAFgEQAFgFALAAIA0AAQALAAAEAFQADAEgCAKIgNBPQgHAjgHAXQgFAOgTAoIAEAAIAgg1IBuiUQAIgJANAAIA3AAQALAAAEAEQADAFgCAKIgyEeQgDAMgFADQgFAFgKAAgAAACjQgRAAgGgDQgHgDgEgLIgehMIg4BMQgIALgHADQgHADgTAAIg5AAQgLAAgBgFQgCgGAHgJIB5iRIhBiNQgEgIAEgFQADgGAJAAIA3AAQASAAAGADQAHADAEAKIAdBIIA0hIQAIgLAHgCQAHgDAQAAIA7AAQAKAAABAGQACAFgHAIIh0CNIBGCRQAEAIgDAGQgEAGgKAAgAnLCjQgLAAgDgFQgEgEACgLIAzkeQACgKAFgEQAFgFALAAIDBAAQALAAADAFQAEAEgCAKIgHAqQgCALgFAFQgFAEgLAAIh6AAIgHApIBhAAQALAAAEAEQADAFgCAKIgHAoQgDALgEAEQgFAEgLABIhhAAIgIAsIB+AAQAKAAAEADQADAEgCAMIgHApQgCAMgFADQgFAFgLAAgApLCjQgLAAgEgFQgEgEADgLIAPhZQgVADgaAAQgpgDgPgFQgMgFgJgGQgIgHgHgJQgGgIgEgKQgEgJgBgNQgDgQAFgpIAMhEQACgKAFgEQAFgFALAAIA0AAQALAAADAFQAEAEgCAKIgNBLQgCAMABAHQABAIAFAFQAFAFAKACQAJACAOAAQAUAAAPgDIAThxQADgKAFgEQAFgFAKAAIA0AAQALAAAEAFQAEAEgDAKIgyEeQgDAMgEADQgFAFgLAAg");
	this.shape.setTransform(80.3,20.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,4.3,148.9,32.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AJpCjQgLAAgDgFQgEgEACgKIAQhZIgMAAQgPgBgJAFQgIAFgIAOIgnBCQgHAMgIADQgJAEgUAAIgxAAQgMAAgCgGQgCgFAIgMIBGhpQgKgGgIgKQgHgJgEgLQgFgMAAgOQgBgOADgQQAEgaAMgUQALgTARgOQARgNAWgGQAXgHAbABICDAAQALAAAEADQADAFgCALIgzEeQgCAKgFAEQgFAFgLAAgAI4hKQgJAIgDAPQgCAPAGAHQAGAHAPAAIAyAAIAKg7IgxAAQgPAAgJAHgAEtCjQgLAAgEgFQgDgEACgLIAciHIAXg3IgEAAQgoBCgTAbIhTBsQgIAJgNAAIg4AAQgLAAgDgFQgDgEABgKIA0keQABgLAFgFQAFgDALAAIA0AAQALAAAEADQADAFgCALIgNBOQgHAjgHAXQgFAPgTAnIAEAAIAgg1IBuiUQAIgJANAAIA3AAQALAAAEAEQADAFgCALIgyEeQgDAKgFAEQgFAFgKAAgAAACjQgRAAgGgDQgHgDgEgLIgehLIg4BLQgIALgHADQgHADgTAAIg5AAQgLAAgBgGQgCgFAHgIIB5iSIhBiNQgEgHAEgGQADgGAJABIA3AAQASAAAGACQAHADAEAKIAdBHIA0hHQAIgKAHgDQAHgCAQAAIA7AAQAKgBABAGQACAGgHAHIh0CNIBGCSQAEAHgDAGQgEAGgKAAgAnLCjQgLAAgDgFQgEgEACgKIAzkeQACgMAFgEQAFgDALAAIDBAAQALAAADADQAEAFgCALIgHApQgCALgFAFQgFAEgLAAIh6AAIgHApIBhAAQALAAAEAEQADAEgCALIgHAoQgDALgEAEQgFAEgLAAIhhAAIgIAtIB+AAQAKAAAEADQADAFgCALIgHAqQgCAKgFAEQgFAFgLAAgApLCjQgLAAgEgFQgEgEADgKIAPhaQgVADgaAAQgpgDgPgGQgMgEgJgGQgIgHgHgJQgGgIgEgLQgEgIgBgMQgDgRAFgpIAMhDQACgLAFgFQAFgDALAAIA0AAQALAAADADQAEAFgCALIgNBKQgCAMABAHQABAIAFAFQAFAFAKACQAJACAOABQAUgBAPgDIAThwQADgMAFgEQAFgDAKAAIA0AAQALAAAEADQAEAFgDALIgyEeQgDAKgEAEQgFAFgLAAg");
	this.shape.setTransform(74.5,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148.9,32.7);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AA/ChQgMgFgKgHQgKgGgIgKQgIgJgFgKQgFgLgDgMQgCgMAAgOIACgcIAPhTQADgUAPghIAPgVIATgRQAOgLAjgNQASgFArgDQAZAAAUAFQATAGAPAKQAOAKAJAPQAJAQAEAUQACAKgDAGQgEAGgLADIgvAQQgLADgFgCQgFgDgCgKQgDgQgKgHQgKgHgTAAQgNAAgKADQgKACgIAHQgHAFgEAJQgFAJgCANIgPBRQgCANABAJQACAJAFAFQAFAGAJADQAJADANAAQASAAAOgHQANgIAIgPQAHgLAFgCQAGgDAJAEIAwASQAJADACAGQACAHgFAJQgLAUgPAPQgOAPgTAKQgSAKgXAFQgWAFgbAAQgpgDgRgGgAjoChQgMgFgKgHQgKgGgIgKQgIgJgFgKQgGgLgCgMQgDgMAAgOIACgcIAPhTQAEgUAPghIAPgVIASgRQAOgLAjgNQASgFAsgDQAZAAATAFQAUAGAOAKQAOAKAKAPQAJAQADAUQACAKgDAGQgDAGgLADIgwAQQgLADgFgCQgEgDgDgKQgDgQgKgHQgJgHgTAAQgOAAgKADQgKACgHAHQgHAFgFAJQgEAJgDANIgPBRQgCANACAJQABAJAFAFQAFAGAJADQAJADAOAAQASAAANgHQANgIAJgPQAGgLAGgCQAFgDAKAEIAwASQAJADABAGQACAHgFAJQgKAUgPAPQgPAPgSAKQgTAKgWAFQgXAFgaAAQgqgDgQgGgAoiChQgMgFgKgHQgKgGgIgKQgIgJgFgKQgFgLgDgMQgDgMAAgOIADgcIAOhSQAEgTAPgiIAPgVIATgRQANgLAjgNQASgGArgDIAgADQAOACAMAEQANAFAKAHQAKAHAIAJQAIAJAFALQAFALACAMQADAMAAAOIgRBuQgKAlgIAPIgPAWIgTARQgeASgSAGQgnAIgXAAQgpgDgRgGgAnShVQgKACgHAGQgHAFgFAJQgFAIgCALIgQBZQgCALACAIQACAIAGAGQAFAFAJADQAJADAMAAQAzAAAHgsIAQhZQACgLgCgIQgCgIgFgGQgGgGgIgCQgJgDgMAAQgNAAgKADgAMgCjQgLAAgEgFQgEgEADgLIAPhZIgLAAQgQAAgIAFQgIAFgJAOIgmBBQgHAMgJAEQgJAEgTAAIgyAAQgLAAgCgGQgCgFAHgMIBHhpQgLgHgHgJQgIgKgEgKQgEgMgBgOQgBgOADgQQAFgaALgUQALgUASgNQAQgNAXgGQAWgHAbAAICDAAQAMAAADAEQAEAFgDAKIgyEeQgDALgEAEQgFAFgLAAgALvhKQgJAIgDAOQgDAQAHAHQAGAHAPAAIAxAAIALg7IgyAAQgPAAgIAHgAHjCjQgLAAgDgFQgEgEACgLIAciIIAXg2IgDAAQgoBCgUAbIhSBsQgIAJgNAAIg4AAQgLAAgDgFQgEgEACgLIAzkeQACgKAFgFQAEgEALAAIA1AAQALAAADAEQAEAFgCAKIgOBPQgGAjgHAWQgFAPgTAoIADAAIAhg2IBuiTQAIgJAMAAIA4AAQALAAADAEQADAEgBALIgzEeQgCALgFAEQgFAFgLAAgAuMCjQgLAAgEgFQgEgEADgLIAzkeQACgLAFgEQAFgEAKAAIB/AAQA2AAAbAhQANARAEAWQAEAWgEAcQgFAagMATQgLAUgSANQgRANgXAHQgXAHgcAAIg4AAIgOBOQgDALgEAEQgFAFgLAAgAslgOIAtAAQAQAAALgJQALgJADgPQACgQgHgJQgIgJgQAAIgtAAg");
	this.shape.setTransform(92.7,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.4,34.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA/ChQgMgFgKgHQgKgGgIgKQgIgJgFgKQgFgLgDgMQgCgMAAgOIACgcIAPhTQADgUAPghIAPgVIATgRQAOgLAjgNQASgFArgDQAZAAAUAFQATAGAPAKQAOAKAJAPQAJAQAEAUQACAKgDAGQgEAGgLADIgvAQQgLADgFgCQgFgDgCgKQgDgQgKgHQgKgHgTAAQgNAAgKADQgKACgIAHQgHAFgEAJQgFAJgCANIgPBRQgCANABAJQACAJAFAFQAFAGAJADQAJADANAAQASAAAOgHQANgIAIgPQAHgLAFgCQAGgDAJAEIAwASQAJADACAGQACAHgFAJQgLAUgPAPQgOAPgTAKQgSAKgXAFQgWAFgbAAQgpgDgRgGgAjoChQgMgFgKgHQgKgGgIgKQgIgJgFgKQgGgLgCgMQgDgMAAgOIACgcIAPhTQAEgUAPghIAPgVIASgRQAOgLAjgNQASgFAsgDQAZAAATAFQAUAGAOAKQAOAKAKAPQAJAQADAUQACAKgDAGQgDAGgLADIgwAQQgLADgFgCQgEgDgDgKQgDgQgKgHQgJgHgTAAQgOAAgKADQgKACgHAHQgHAFgFAJQgEAJgDANIgPBRQgCANACAJQABAJAFAFQAFAGAJADQAJADAOAAQASAAANgHQANgIAJgPQAGgLAGgCQAFgDAKAEIAwASQAJADABAGQACAHgFAJQgKAUgPAPQgPAPgSAKQgTAKgWAFQgXAFgaAAQgqgDgQgGgAoiChQgMgFgKgHQgKgGgIgKQgIgJgFgKQgFgLgDgMQgDgMAAgOIADgcIAOhSQAEgTAPgiIAPgVIATgRQANgLAjgNQASgGArgDIAgADQAOACAMAEQANAFAKAHQAKAHAIAJQAIAJAFALQAFALACAMQADAMAAAOIgRBuQgKAlgIAPIgPAWIgTARQgeASgSAGQgnAIgXAAQgpgDgRgGgAnShVQgKACgHAGQgHAFgFAJQgFAIgCALIgQBZQgCALACAIQACAIAGAGQAFAFAJADQAJADAMAAQAzAAAHgsIAQhZQACgLgCgIQgCgIgFgGQgGgGgIgCQgJgDgMAAQgNAAgKADgAMgCjQgLAAgEgFQgEgEADgLIAPhZIgLAAQgQAAgIAFQgIAFgJAOIgmBBQgHAMgJAEQgJAEgTAAIgyAAQgLAAgCgGQgCgFAHgMIBHhpQgLgHgHgJQgIgKgEgKQgEgMgBgOQgBgOADgQQAFgaALgUQALgUASgNQAQgNAXgGQAWgHAbAAICDAAQAMAAADAEQAEAFgDAKIgyEeQgDALgEAEQgFAFgLAAgALvhKQgJAIgDAOQgDAQAHAHQAGAHAPAAIAxAAIALg7IgyAAQgPAAgIAHgAHjCjQgLAAgDgFQgEgEACgLIAciIIAXg2IgDAAQgoBCgUAbIhSBsQgIAJgNAAIg4AAQgLAAgDgFQgEgEACgLIAzkeQACgKAFgFQAEgEALAAIA1AAQALAAADAEQAEAFgCAKIgOBPQgGAjgHAWQgFAPgTAoIADAAIAhg2IBuiTQAIgJAMAAIA4AAQALAAADAEQADAEgBALIgzEeQgCALgFAEQgFAFgLAAgAuMCjQgLAAgEgFQgEgEADgLIAzkeQACgLAFgEQAFgEAKAAIB/AAQA2AAAbAhQANARAEAWQAEAWgEAcQgFAagMATQgLAUgSANQgRANgXAHQgXAHgcAAIg4AAIgOBOQgDALgEAEQgFAFgLAAgAslgOIAtAAQAQAAALgJQALgJADgPQACgQgHgJQgIgJgQAAIgtAAg");
	this.shape.setTransform(92.7,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.4,34.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHhGIAngLIAoBLIgXhRIAjgLIA0CpIgkAKIgshPIAYBWIgjALg");
	this.shape.setTransform(32.4,13.3,0.812,0.812);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBQQgKgBgHgEQgJgFgFgHIg9g7QgQgOAAgRQAAgRARgSQARgRASAAQARAAAOAPIA8A8QAHAFAFAJQAFAJABAIQABAJgEAJQgEAJgJAKQgJAJgKAEQgHADgHAAIgEAAgAgjgnIgDACIgCADQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABIABADIAFAHIADACIAAABIAyAxIACADIAEACIADADIAEABQABAAAAAAQAAABABAAQAAAAABgBQABAAAAAAIAEgCIACgDIAAgEIgCgDIgFgHIgCgCIgBgBIgxgwIgCgCIgHgGIgCgCIgDgBIgCAAg");
	this.shape_1.setTransform(15.2,23,0.812,0.812);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaANIAWhJIAhAJIgKAmIAbAHIAKgkIAfAKIgKAhIBOAWIgLAmg");
	this.shape_2.setTransform(4.5,38.9,0.812,0.812);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0049B1").s().p("AhKBpIgBgWQAAhlA4hWIBfBHQghA0gBBAQABALABALg");
	this.shape_3.setTransform(20.6,45.4,0.812,0.812);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0049B1").s().p("AhigZQBPguBbAAIAbABIAAB2QgNgCgOAAQg3AAgwAag");
	this.shape_4.setTransform(36.5,30,0.812,0.812);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0049B1").s().p("AiRCzIgBgRQAAhdAchXQAbhWAyhLIC8CJQg+BcABBwIAAARg");
	this.shape_5.setTransform(4.9,38.9,0.812,0.812);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0049B1").s().p("AisgyQCShbCrAAIAcABIAADnIgcgBQhlAAhWA0g");
	this.shape_6.setTransform(30.5,14.2,0.812,0.812);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0B0B0").s().p("AlBiDIArhCQA+hOBcg4IG+KXg");
	this.shape_7.setTransform(18.5,27,0.812,0.812);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUDaQgQgEgJgGQgJgGgEgIQgFgIgCgJQgBgHAAgKIAAjpIgVAAIAAhEIAVAAIAAhQICBAAIAABQIAZAAIAABEIgZAAIAADRIABAIIABAFQACAEADABQADABAFAAIAKgBIAAA9QgcAHgtAAQgVAAgOgEg");
	this.shape_8.setTransform(198.6,26.1,0.812,0.812);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqDBQgSgEgNgHQgNgHgIgKQgKgMgFgKQgGgLgCgNQgEgOgBgMIgBi0QAAg1AigcQAhgcA6AAQB6AAAABtIAAAcIgBBGIiRAAIAABIIABAQIADANQACAHAFADQAFAEAGAAQAIAAAGgGQAEgEADgLQACgLAAgGIABgUQAAgWgBgCIBlAAIAAAVQAAAjgGAUQgFAYgOARQgNASgaAJQgZAJgkAAQgWAAgTgEgAgKh7QgFADgDAIIgEAPIAAA0IAtAAIAAgoQAAgqgWAAQgGAAgFAEg");
	this.shape_9.setTransform(179.8,28.9,0.812,0.812);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVC0IAAAoIhoAAIAAm8IBoAAIAABWQAXgXAfAAIAXABIANADIAOAGQAJAEAEAEQAHAHAEAGQAHAIADAKQAEAJACAOQADAQAAAOIAAC1QAAASgEASQgFASgFAIQgGAKgJAJQgJAIgIAEQgLAFgGABIgPADIgMABQgnAAgSgtgAgOhSQgHAIAAAXIAACcQAAAcAGALQAHAKAKAAQANAAAEgKQAEgKAAgdIAAibQAAgYgFgIQgFgIgLAAQgJAAgHAIg");
	this.shape_10.setTransform(155.8,25.9,0.812,0.812);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYC+IAAkXQAAgLgFgKQgFgJgMAAQgGAAgFAEQgFAEgCAEIgEAMIgCAMIAAERIhlAAIAAl3IBlAAIAAAsQAGgZAQgLQAQgMAYAAQAoAAAWAWQAWAXAAAuIAAEgg");
	this.shape_11.setTransform(130.9,28.3,0.812,0.812);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah9BMIAAiXQAAg2AiggQAiggA5AAQA5AAAjAgQAiAgAAA2IAACXQAAA8ggAdQggAdg+AAQh9AAAAh2gAgWhZIAAC4QAAAPAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgPIAAi4QAAghgXAAQgWAAAAAhg");
	this.shape_12.setTransform(107.3,29.1,0.812,0.812);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiDgIAAm/IDFAAIAABYIhjAAIAABHIBeAAIAABVIheAAIAADLg");
	this.shape_13.setTransform(86.8,25.5,0.812,0.812);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0049B1").s().p("AxmFHIAAqNMAjNAAAIAAKNg");
	this.shape_14.setTransform(140,27.8,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,0,239.3,54.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hrch_20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,766,309);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hrch_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,303);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hrch_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,468,290);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(67.8,41.5,0.923,0.923,0,0,0,59.1,23.4);

	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(66.9,41.6,0.923,0.923,0,0,0,72.5,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.8,83.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(72.5,45.1,1,1,0,0,0,66.9,41.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.6,3.5,133.8,83.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(960,150,1,1,0,0,0,960,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},15,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05},15,cjs.Ease.get(1)).to({scaleX:1.02,scaleY:1.02},16,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,300);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.setTransform(68.8,64.8,1,1,0,0,0,60.7,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.711},9).to({alpha:1},10).wait(1));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(72.1,21.8,1,1,0,0,0,66,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,3.7,132,78.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(177.5,164,1.193,1.193,0,0,0,250.1,151.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.9,-16.8,596.6,361.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(269.5,145,1.184,1.184,0,0,0,234,145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-26.7,554.4,343.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(64.5,64.5,0.831,0.831,0,0,0,64.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:0.87},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92},15,cjs.Ease.get(-1)).to({scaleX:0.83,scaleY:0.83},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.9,10.9,107.2,107.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(64.5,64.5,1,1,0,0,0,64.5,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.97},14,cjs.Ease.get(-1)).to({scaleX:0.87,scaleY:0.87},15,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93,x:64.6,y:64.6},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:64.5,y:64.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,129);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(383,154.5,1,1,0,0,0,383,154.5);
	this.instance.alpha = 0.539;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,766,309);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(322.9,143.7,0.834,0.834,0,0,0,383.1,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:136.9},7).to({y:128.9},10,cjs.Ease.get(1)).wait(1).to({y:136.5},9,cjs.Ease.get(-1)).to({y:144.9},10,cjs.Ease.get(1)).to({y:144.6},2,cjs.Ease.get(-1)).wait(1));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(947.4,134.7,0.8,0.8,0,0,0,383.1,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:128.9},8).wait(1).to({y:136.5},9,cjs.Ease.get(-1)).to({y:144.9},10,cjs.Ease.get(1)).to({y:136.9},10,cjs.Ease.get(-1)).to({y:135.4},1,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(1574.8,128.9,0.834,0.834,0,0,0,383,154.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:136.5},9,cjs.Ease.get(-1)).to({y:144.9},10,cjs.Ease.get(1)).to({y:136.9},10,cjs.Ease.get(-1)).to({y:128.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.2,0,1891.1,272.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(172.9,118.3,1,1,0,0,0,77.4,25);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(180.4,114,1,1,0,0,0,74.5,16.4);

	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(43.1,114.9,0.668,0.668,0,0,0,64.5,64.5);

	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(173.7,134.1,0.668,0.668,15,0,0,233.8,145);
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-18.6,417.3,317.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(159.1,128,1,1,0,0,0,92.7,17);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(162.9,129.2,1,1,0,0,0,92.7,17);

	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(313.5,134.6,0.668,0.668,0,0,0,64.5,64.5);

	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(191.7,140.9,0.668,0.668,-20,0,0,250,151.5);
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-16.4,457.3,363.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(950.3,197.1,1.095,1.095,0,0,0,947.1,128.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(960,148.2,1.095,1.095,0,0,0,960,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,-16.1,2102.6,370.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.vs = new lib.Символ31();
	this.vs.setTransform(362.5,122.4,1,1,0,0,0,15.7,9.3);

	this.che = new lib.Символ12();
	this.che.setTransform(512.5,133.5,0.687,0.687,0,0,0,176.1,134.2);

	this.rus = new lib.Символ11();
	this.rus.setTransform(205.6,135.5,0.687,0.687,0,0,0,191.6,152.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rus},{t:this.che},{t:this.vs}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19,19.5,651.1,249.9);


// stage content:
(lib.hock_rus_che_1024120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// ресайз ----------
		
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
			
			_this.logo.x = (windowSize.width/2)-(windowSize.width/2)
			_this.logo.y = 60;
			
			_this.rus.x = (windowSize.width/2)-(windowSize.width/4);
			_this.rus.y = 90;
			
		
			_this.time.x = (windowSize.width/2)+(windowSize.width/4);
			_this.time.y = 60;
			
			_this.but.x = windowSize.width;
			_this.but.y = 60;
			
		
			
			
			
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

	// logo
	this.logo = new lib.Символ14();
	this.logo.setTransform(7.1,58.5,0.632,0.632,0,0,0,-22.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// vs
	this.rus = new lib.Символ32();
	this.rus.setTransform(327.8,89.9,1,1,0,0,0,178.2,151.3);

	this.timeline.addTween(cjs.Tween.get(this.rus).wait(1));

	// but
	this.but = new lib.Символ27();
	this.but.setTransform(1035.3,59.5,0.919,0.919,0,0,0,185.8,45.1);

	this.timeline.addTween(cjs.Tween.get(this.but).wait(1));

	// time
	this.time = new lib.Символ13();
	this.time.setTransform(789,62.2,0.729,0.729,0,0,0,69.5,46.4);

	this.timeline.addTween(cjs.Tween.get(this.time).wait(1));

	// fon
	this.fon = new lib.Символ1();
	this.fon.setTransform(-29.4,-85.8,1,1,0,0,0,-91.3,-16.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(482.6,-25.8,2102.6,370.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
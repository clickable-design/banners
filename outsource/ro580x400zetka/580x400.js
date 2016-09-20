(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 580,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/aas.jpg?1472049361580", id:"aas"},
		{src:"images/htc1.png?1472049361580", id:"htc1"},
		{src:"images/iph.png?1472049361580", id:"iph"},
		{src:"images/logo.jpg?1472049361580", id:"logo"},
		{src:"images/meiz.png?1472049361580", id:"meiz"},
		{src:"images/sams.png?1472049361580", id:"sams"},
		{src:"images/sfhshs.png?1472049361580", id:"sfhshs"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.aas = function() {
	this.initialize(img.aas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,679,424);


(lib.htc1 = function() {
	this.initialize(img.htc1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,149);


(lib.iph = function() {
	this.initialize(img.iph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,165);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,68);


(lib.meiz = function() {
	this.initialize(img.meiz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,140);


(lib.sams = function() {
	this.initialize(img.sams);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,143);


(lib.sfhshs = function() {
	this.initialize(img.sfhshs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,31);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sfhshs();
	this.instance.parent = this;
	this.instance.setTransform(-59,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-15.5,118,31);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iph();
	this.instance.parent = this;
	this.instance.setTransform(-40.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-82.5,81,165);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("Eg0uAGAIAAr/MBpdAAAIAAL/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.6,-38.4,675.2,76.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aas();
	this.instance.parent = this;
	this.instance.setTransform(-339.5,-212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.5,-212,679,424);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(3.3,35.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.6,-36.1,199.8,143.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEIBpIAAjRIAhAAIAABPIAQAAQAZAAAMAOQAMALAAAZIAAAcQAAAZgMANQgGAHgJADQgKAEgMAAgAEpBLIAQAAQAIAAAEgEQAEgFAAgLIAAggQAAgLgEgEQgEgEgIAAIgQAAgAC2BpIAAizIgjAAIAAgeIBnAAIAAAeIgjAAIAACzgABmBpIAAiXIgoCXIgjAAIAAjRIAeAAIAAB8IAih8IAqAAIAADRgAgcBpIAAizIglAAIAACzIghAAIAAjRIBlAAIAADRgAjkBpIAAgeIAMAAIAHgBIAFgDQADgDACgEIABgMIgxicIAiAAIAkB5IAfh5IAgAAIgrCZQgGAWgGAMQgFALgHAFQgHAFgHABgAkeBpIgghUIgLATIAABBIggAAIAAjRIAgAAIAABcIAshcIAhAAIguBeIAuBzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,-10.5,72.6,21.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AFtHOIAAi/IAQAAIAAAbIAAAAQADgHAFgGQAFgGAGgEQAHgEAIgCQAHgCAJAAQAIAAAHACQAHABAGADQALAGAIAKQAIAKAEAOQAEANAAAPQAAAPgEANQgEAOgIAKQgIAKgLAGQgMAGgQAAQgIAAgHgCQgIgCgGgEQgHgEgFgFQgFgGgCgIIgBAAIAABOgAGXEfQgJAEgGAIQgFAJgDAKQgCALAAAMQAAALACAKQADALAGAIQAGAJAJAFQAJAFAOAAQAMAAAJgFQAIgFAGgJQAFgIADgLQACgKAAgLQAAgLgCgKQgDgLgFgIQgGgJgIgFQgJgFgMAAQgOAAgKAFgAA5GWQgGgFgFgGQgFgFgEgHQgHgOgDgSQgCgRAAgQQAAgRACgRQADgSAHgOQAEgHAFgGQAFgFAGgFQANgJAVAAQAVAAAMAJQANAJAHAOQAIAOACASQADARAAAQQAAARgDARQgCASgIAOQgHAOgNAJQgMAJgVAAQgVAAgNgJgABMDtQgGACgFAEQgKAIgFANQgFAMgBAPIgCAaIACAbQABAPAFAMQAFANAKAIQAKAIAQAAQAQAAAKgIQAJgIAGgNQAEgMACgPIAAg1QgCgPgEgMQgGgNgJgIQgFgEgHgCQgGgDgIAAQgIAAgHADgAhbGWQgGgFgFgGQgFgFgEgHQgHgOgDgSQgCgRAAgQQAAgRACgRQADgSAHgOQAEgHAFgGQAFgFAGgFQANgJAVAAQAVAAAMAJQANAJAHAOQAGAOACASQADARAAAQQAAARgDARQgCASgGAOQgHAOgNAJQgMAJgVAAQgVAAgNgJgAhIDtQgGACgFAEQgKAIgFANQgFAMgBAPIgCAaIACAbQABAPAFAMQAFANAKAIQAKAIAQAAQAQAAAKgIQAJgIAGgNQAEgMACgPIAAg1QgCgPgEgMQgGgNgJgIQgFgEgHgCQgGgDgIAAQgIAAgHADgAjxGWQgGgFgFgGQgFgFgEgHQgHgOgDgSQgCgRAAgQQAAgRACgRQADgSAHgOQAEgHAFgGQAFgFAGgFQANgJAVAAQAVAAAMAJQANAJAHAOQAIAOACASQADARAAAQQAAARgDARQgCASgIAOQgHAOgNAJQgMAJgVAAQgVAAgNgJgAjeDtQgGACgFAEQgKAIgFANQgFAMgBAPIgCAaIACAbQABAPAFAMQAFANAKAIQAKAIAQAAQAQAAAKgIQAJgIAGgNQAEgMACgPIAAg1QgCgPgEgMQgGgNgJgIQgFgEgHgCQgGgDgIAAQgIAAgHADgAnJGbQgMgEgJgHQgJgHgFgKQgFgLAAgOQAAgTAKgNQAFgHAHgEQAHgEAJgBIAAgBQgPgFgIgKQgIgLAAgQQAAgMAFgJQAFgJAIgFQAJgGAKgDQAKgDALAAQAKAAAKADQALADAIAGQAIAFAFAJQAFAJAAAMQAAAQgIALQgEAFgGAEQgFAEgIACIAAABQAKABAHAEQAHAFAFAGQAFAGACAIQADAIAAAKQAAAOgFALQgFAKgJAHQgJAHgMAEQgMAEgNAAQgNAAgMgEgAnDE/QgJACgGAGQgGAFgEAIQgEAIAAAKQAAAKADAIQAEAJAHAFQAGAFAJADQAJACAKAAQAKAAAJgCQAIgDAHgFQAGgFAEgIQAEgIAAgLQAAgKgEgIQgEgIgHgFQgGgFgJgDQgJgDgJABIgDAAQgIAAgIACgAm/DtQgIACgFAEQgGAEgDAGQgEAGAAAIQAAAKAEAHQADAGAGAFQAGAEAHACQAHACAIAAQAIAAAHgCQAHgCAGgFQAFgEAEgHQADgGAAgKQAAgIgDgGQgDgGgGgEQgFgEgHgCQgIgDgIAAQgIAAgHADgAJnGbIAAhCIhPAAIAABCIgRAAIAAiMIARAAIAAA8IBPAAIAAg8IARAAIAACMgAECGbIAAiMIBcAAIAAAPIhLAAIAAB9gApFGbIAAiNIgyAAIAAgMIAUgBQAJgBAHgDQAGgEAFgHQAEgHACgNIAOAAIAAC9gABTB7IgFgBIAAgOIAMABQAFAAAEgBIAGgFIAFgHIAKgYIg4iJIASAAIAuB1IArh1IARAAIg8CeIgHAPQgDAGgEADQgEAEgGABQgFACgIAAgAE/BIQgPgEgKgIQgFgEgEgFIgHgMQgFgMABgSIASAAQAAAPAEAKQAFAKAJAGQAIAGAMACQAMADANAAQAHAAAJgCQAJgDAIgEQAHgFAGgIQAFgHAAgLQAAgIgEgGQgEgGgFgCQgGgEgHgCIhJgUQgIgEgGgFQgGgFgEgIQgDgIAAgLQAAgHACgKQADgJAHgJQAIgIANgGQANgGAUAAQAOAAANAEQANAEAKAIQAKAHAGALQAFAMAAAOIgSAAQgBgLgEgIQgEgIgIgGQgHgFgJgDQgJgDgLAAQgJAAgJACQgJACgGAFQgHAEgEAHQgEAIAAAKQAAAHACAFQADAFAEAEQAEADAFACIA6APIATAHQAKAEAGAGQAHAGAEAGQAEAIAAAMIgBAJQAAAFgDAGQgCAGgFAHQgFAGgIAFQgIAFgMADQgNADgRAAQgRAAgOgEgAinBKQgIgDgGgFQgHgFgDgHQgEgIAAgLQAAgHACgFQABgGADgEQAHgJALgEQAKgCAOgCIAkgFQAEAAADgCIAEgGQACgEAAgFQAAgJgDgFQgDgGgFgDQgFgDgHgCIgOgBQgQAAgKAIQgLAIAAARIgRAAQABgNAEgIQAEgJAIgGQAHgGAKgCQAKgDAMAAQAJAAAKACQAJABAHAFQAHAFAFAJQAFAJAAAOIAABIQAAAFACACQADADAFAAIAFgBIAAAOIgLABQgHAAgDgBQgEgCgDgDQgCgEAAgEIgBgKIgBAAIgJAMQgFAFgGAEQgFADgIACQgHACgKAAQgKAAgJgCgAhpAAIgIACIgXAEQgLABgKADQgJADgGAGQgGAFAAAKQAAAHACAFQADAFAEAEQAFADAFACIAMACQAKAAAJgDQAIgDAHgGQAHgFAEgIQAEgJAAgKIAAgUIgBAAQgCACgEAAgAlkBKQgJgDgGgFQgGgFgEgHQgEgIAAgLQAAgHACgFQACgGADgEQAGgJALgEQALgCANgCIAlgFQAEAAACgCIAFgGQABgEAAgFQAAgJgDgFQgDgGgFgDQgFgDgGgCIgOgBQgRAAgKAIQgKAIgBARIgRAAQABgNAFgIQAEgJAHgGQAIgGAKgCQAKgDAMAAQAJAAAJACQAJABAIAFQAHAFAEAJQAFAJAAAOIAABIQAAAFADACQACADAFAAIAFgBIAAAOIgLABQgGAAgEgBQgEgCgCgDQgCgEgBgEIgBgKIAAAAIgJAMQgFAFgGAEQgGADgHACQgIACgKAAQgKAAgIgCgAknAAIgIACIgWAEQgMABgJADQgJADgGAGQgHAFAAAKQAAAHADAFQACAFAFAEQAEADAGACIALACQAKAAAJgDQAJgDAHgGQAGgFAEgIQAEgJAAgKIAAgUIAAAAQgCACgFAAgAoUBEQgIgEgIgGQgHgFgFgHQgMgOgFgSQgGgQAAgUQAAgUAGgSQAFgSAMgOQAFgHAHgGQAIgFAIgEQARgJAXAAQAPAAAOAFQANADALAJQAKAIAIAMQAHAMACAPIgSAAQgBgIgEgJQgFgIgIgHQgIgHgLgEQgLgFgOAAQgKAAgIACQgIACgHADIgMAJQgGAFgFAGQgIAMgEAPQgFAPAAAQQAAAQAFANQAEAPAIAMQAFAGAGAFQAFAFAHADQAHAEAIACQAIACAKAAQAQAAAMgGQANgFAJgJQAIgKAFgNQAEgNAAgNIhCAAIAAgQIBSAAIAABgIgNAAIgDgjIAAAAQgFAKgHAIQgIAHgIAFQgJAFgKACQgJACgLAAQgXAAgRgIgAHaBIQABgQAGgdQAFgVAJgTQAGgNARgcQAOgUAUgXIhpAAIAAgPIB6AAIAAAPIgVAZQgNAQgLAVQgPAfgGAQQgJAbgBAhgAAqBIIgqg6IgqA6IgVAAIA2hIIgyhBIAVAAIAmA1IAng1IAVAAIgyBBIA2BIgAjtBIIAAi+IARAAIAAC+gAG/jTQgKgDgIgFQgIgFgFgIQgFgIgBgLIARAAQABAIAEAFQAEAFAGAEQAFADAHABIAOACQAMAAAIgEQAJgDAFgHQALgNAAgaIAAgSIgBAAQgGAMgLAIQgGAEgHACQgGACgIAAQgRAAgMgFQgMgGgHgKQgIgJgEgNQgDgOAAgOQAAgPAEgNQAEgMAIgKQAIgJAMgGQAMgGAPAAQAIAAAGADQAHACAGAEIAKAJQAFAFACAGIABAAIAAgZIARAAIAACAQAAAQgEAMQgDANgHAIQgIAJgLAFQgMAEgRAAQgLAAgKgCgAG/mEQgJAFgFAIQgGAIgDAKQgCALAAAKQAAALADAKQACAKAGAIQAGAHAIAFQAJAFAMAAQALAAAIgFQAJgFAFgHQAGgIADgKQADgKAAgLQAAgKgDgKQgCgKgGgJQgFgIgJgFQgIgFgMAAQgMAAgJAFgACVkIQgJgEgGgHQgGgGgDgKQgCgKAAgMIAAhbIARAAIAABbQAAATAIAKQAJAJAUAAQALAAAIgEQAIgFAFgIQAFgIACgKQADgKAAgKIAAhKIARAAIAACMIgQAAIAAgZIAAAAQgHAOgNAHQgNAIgPAAQgOAAgJgEgAADkQQgNgMgCgZIAPAAQABARALAJQAMAIARAAIAMgBQAHgBAGgDQAFgEAEgFQAEgFAAgHQAAgGgDgEQgCgFgFgCIgKgFIgwgNQgHgDgFgEQgEgEgDgHQgDgGAAgJQAAgKAFgIQADgHAHgFQAIgEAJgCQAKgDAJAAQAKAAAJADQAKADAGAFQAHAGAEAIQAEAJABALIgRAAQAAgIgDgFQgDgGgFgEQgFgEgHgCQgGgBgIAAIgLABIgLAEQgFADgDAEQgDAFAAAHQAAAFADAEQADAEAEADIAKAEIAJADIAXAFQAHABAHADQAIADAFAFQAGAEADAHQAEAHAAAJQAAALgFAIQgFAIgJAFQgHAFgKACQgKADgKAAQgZAAgPgMgAlckHQgJgCgGgFQgGgFgEgIQgEgHAAgLQAAgHACgGQACgGADgEQAGgIALgEQALgFANgBIAlgFQAEgBACgCIAFgFQABgEAAgGQAAgIgDgGQgDgFgFgEQgFgDgGgBIgOgBQgRAAgKAHQgKAIgBARIgRAAQABgMAFgJQAEgJAHgGQAIgFAKgDQAKgDAMAAQAJAAAJACQAJACAIAFQAHAFAEAIQAFAJAAAOIAABKQAAAFADADQACACAFAAIAFgBIAAAPIgLABQgGAAgEgCQgEgCgCgDQgCgDgBgFIgBgKIAAAAIgJAMQgFAGgGADQgGAEgHACQgIACgKAAQgKAAgIgDgAkflQIgIACIgWADQgMACgJADQgJADgGAFQgHAGAAAKQAAAHADAEQACAFAFAEQAEAEAGACIALABQAKAAAJgCQAJgDAHgGQAGgGAEgIQAEgIAAgKIAAgWIAAAAQgCADgFABgAn0kIQgPgEgKgIQgFgEgEgGIgHgLQgFgNABgSIASAAQAAAPAEAKQAFAKAJAGQAIAGAMADQAMACANAAQAHAAAJgCQAJgCAIgFQAHgFAGgHQAFgHAAgLQAAgIgEgGQgEgGgFgEQgGgEgHgDIhJgUQgIgDgGgFQgGgGgEgIQgDgHAAgMQAAgHACgJQADgKAHgIQAIgIANgGQANgGAUAAQAOAAANAEQANADAKAIQAKAIAGALQAFALAAAPIgSAAQgBgLgEgIQgEgJgIgFQgHgGgJgDQgJgCgLAAQgJAAgJACQgJACgGAEQgHAFgEAHQgEAHAAALQAAAHACAFQADAFAEADQAEAEAFACIA6APIATAHQAKAEAGAFQAHAGAEAIQAEAJAAAMIgBAIQAAAGgDAGQgCAGgFAGQgFAGgIAFQgIAFgMADQgNAEgRAAQgRAAgOgEgAFrkIIAAhXQAAgJgBgIQgCgIgEgFQgEgGgHgDQgHgDgKAAQgKAAgIADQgIAEgGAGQgFAHgDAIQgEAJAAALIAABRIgRAAIAAiMIARAAIAAAZIABAAQAFgNAMgIQAMgIAPAAQAPAAAKAEQAKAEAGAHQAFAHADAKQACAKAAAMIAABagAg2kIIAAheQAAgRgHgJQgHgJgTAAQgLAAgHAEQgHAEgEAHQgFAHgCAJQgBAJAAAKIAABPIgRAAIAAhfIgCgNQgBgGgEgFQgDgFgGgDQgFgCgIAAQgLAAgIAEQgIADgFAHQgFAHgDAKQgCAJAAALIAABOIgRAAIAAiMIAQAAIAAAYIAAAAQAEgHAEgFQAFgFAFgDQALgIARAAQAHAAAGACQAGACAGADQALAHAEAOQAGgOAMgHQAGgDAHgCQAGgCAHAAQAXAAAMANQALAMAAAYIAABfg");
	this.shape.setTransform(106.1,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.9,-68.4,126.6,92.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.sams();
	this.instance.parent = this;
	this.instance.setTransform(-46,-71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-71.3,92,143);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.htc1();
	this.instance.parent = this;
	this.instance.setTransform(-51.8,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-77.5,137,149);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.meiz();
	this.instance.parent = this;
	this.instance.setTransform(-48.4,-68.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-68.2,96,140);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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");
	this.shape.setTransform(8,39.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-31.3,193.5,141.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ADbFRIAAiMIAMAAIAAAUIAAAAQACgFAEgFQADgEAFgDQAFgDAGgBQAFgBAHAAIAKABIAKADQAIAEAGAIQAGAHADAKQACAKAAALQAAALgCAJQgDAKgGAIQgGAHgIAEQgJAFgLAAQgGAAgGgCQgFgBgFgDQgFgDgDgEQgEgEgCgGIAAAAIAAA5gAD6DRQgHADgEAGQgEAGgCAIQgBAIAAAJIABAPQACAIAFAGQAEAGAHAEQAHAEAKAAQAIAAAHgEQAGgEAEgGQAEgGACgIQACgIAAgHQAAgIgCgIQgCgIgEgGQgEgGgGgEQgHgEgIAAQgLAAgHAEgAgFEoQgFgDgDgEIgGgKQgGgKgCgNIgBgZIABgZQACgMAGgLIAGgJQADgEAFgDQAIgHAPAAQAPAAAJAHQAKAGAFAKQAFALACAMQACANAAAMQAAAMgCANQgCANgFAKQgFAKgKAHQgJAHgPAAQgPAAgIgHgAAHCsQgFABgCADQgGAHgEAJQgEAJgBALIAAAnQABALAEAJQAEAJAGAGQAGAGAMAAQAMAAAHgGQAHgGAEgJQADgJACgLIAAgnQgCgLgDgJQgEgJgHgHQgEgDgEgBQgFgCgGAAQgGAAgFACgAhzEoQgFgDgDgEIgGgKQgGgKgCgNIgBgZIABgZQACgMAGgLIAGgJQADgEAFgDQAKgHAPAAQAPAAAJAHQAKAGAFAKQAFALACAMQACANAAAMQAAAMgCANQgCANgFAKQgFAKgKAHQgJAHgPAAQgPAAgKgHgAhlCsQgFABgDADQgHAHgEAJQgEAJgBALIAAAnQABALAEAJQAEAJAHAGQAHAGAMAAQAMAAAHgGQAHgGAEgJQADgJACgLIAAgnQgCgLgDgJQgEgJgHgHQgEgDgEgBQgFgCgGAAQgGAAgFACgAjhEoQgFgDgDgEIgGgKQgGgKgCgNIgBgZIABgZQACgMAGgLIAGgJQADgEAFgDQAKgHAPAAQAPAAAJAHQAKAGAFAKQAFALACAMQACANAAAMQAAAMgCANQgCANgFAKQgFAKgKAHQgJAHgPAAQgPAAgKgHgAjTCsQgFABgDADQgHAHgEAJQgEAJgBALIAAAnQABALAEAJQAEAJAHAGQAHAGAMAAQAMAAAHgGQAHgGAEgJQADgJACgLIAAgnQgCgLgDgJQgEgJgHgHQgEgDgEgBQgFgCgGAAQ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");
	this.shape.setTransform(-0.5,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-15,83.2,67.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(-48,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:40,alpha:0},49).to({x:-48,alpha:1},50).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:40},49).to({x:-48},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.5,-212,679,424);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-290,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,-0.4);
	this.instance_1.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.8,-38.8,675.2,76.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.2,1.137,1.137,0,0,0,0,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().rr(-76.5,-19.75,153,39.5,19.75);
	this.shape.setTransform(0,0,1.137,1.137);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().rr(-76.5,-19.75,153,39.5,19.75);
	this.shape_1.setTransform(0,0,1.137,1.137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.instance}]},1).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ao2DFQhSAAg6g6Qg5g5gBhSQABhQA5g7QA6g5BSAAIRtAAQBSAAA6A5QA5A7ABBQQgBBSg5A5Qg6A6hSAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().rr(-76.5,-19.75,153,39.5,19.75);
	this.shape_3.setTransform(0,0,1.137,1.137);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1,p:{regY:0,scaleX:1,scaleY:1,y:-0.1}}]}).to({state:[{t:this.shape_3},{t:this.instance_1,p:{regY:-0.1,scaleX:1.137,scaleY:1.137,y:-0.2}}]},1).to({state:[{t:this.shape_3},{t:this.instance_1,p:{regY:-0.1,scaleX:1.137,scaleY:1.137,y:-0.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-19.7,153,39.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(34.5,-56,0.739,0.739);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-72.5,128.6,33.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(56.5,-26.3,1.261,1.261);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-124,172.8,188);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.parent = this;
	this.instance.setTransform(48.2,-18.9,1.336,1.336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-110.1,128.3,187.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(82,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.4,65.8,1.239,0.864,0,0,6.2);
	this.instance_1.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-82.3,166.8,169.4);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(40.8,4.2,1.404,1.404);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-95.9,129.1,200.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(757.7,119.1,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({alpha:0},0).to({x:148.6,alpha:1},10).to({x:168.6},3).wait(92).to({x:188.6},3).to({x:-33.5,alpha:0},11).to({_off:true},1).wait(8));

	// Слой 21
	this.instance_1 = new lib.Символ3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(158.2,68.2,0.479,0.479);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({x:73.6,y:68,alpha:1},8,cjs.Ease.get(1)).wait(76).to({x:18.2,y:68.2,alpha:0},8,cjs.Ease.get(1)).wait(23));

	// Слой 23
	this.instance_2 = new lib.Символ22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(76,113,0.728,0.728);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).to({x:75.9,y:150.9,alpha:1},8,cjs.Ease.get(1)).wait(44).to({x:76,y:113,alpha:0},8,cjs.Ease.get(1)).wait(39));

	// Символ 12
	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(497.3,114.4,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({alpha:0},0).to({x:-111.8,alpha:1},10).to({x:-91.8},3).wait(93).to({x:-71.8},3).to({x:-293.9,alpha:0},11).to({_off:true},1).wait(13));

	// Слой 18
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-121.1,68.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({x:-198.3,alpha:1},8,cjs.Ease.get(1)).wait(77).to({x:-261.1,alpha:0},8,cjs.Ease.get(1)).to({_off:true},20).wait(8));

	// Слой 20
	this.instance_5 = new lib.Символ22();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-198.3,130.6,0.732,0.732);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({y:151,alpha:1},8,cjs.Ease.get(1)).wait(47).to({y:130.6,alpha:0},8).wait(43));

	// Символ 10
	this.instance_6 = new lib.Символ10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(757.7,-60.2,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({alpha:0},0).to({x:148.6,alpha:1},10).to({x:168.6},3).wait(91).to({x:188.6},3).to({x:-33.5,alpha:0},11).to({_off:true},1).wait(20));

	// Слой 17
	this.instance_7 = new lib.Символ22();
	this.instance_7.parent = this;
	this.instance_7.setTransform(74.4,-15,0.728,0.728,0,0,0,-2.2,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35).to({_off:false},0).to({y:5.6,alpha:1},8,cjs.Ease.get(1)).wait(43).to({y:-15,alpha:0},8).wait(51));

	// Слой 15
	this.instance_8 = new lib.Символ25();
	this.instance_8.parent = this;
	this.instance_8.setTransform(210.5,-77,0.472,0.472);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({x:74.5,alpha:1},8,cjs.Ease.get(1)).wait(75).to({x:2.5,alpha:0},8).wait(35));

	// Символ 9
	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(497.3,-57.9,0.761,0.761);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({alpha:0},0).to({x:-111.8,alpha:1},10).to({x:-94.2},3).wait(93).to({x:-71.8},3).to({x:-333.1,alpha:0},10).to({_off:true},1).wait(24));

	// Слой 10
	this.instance_10 = new lib.Символ16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-150.4,-44.2,0.736,0.736);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({x:-278,alpha:1},8,cjs.Ease.get(1)).wait(72).to({x:-385.9,y:-44.1,alpha:0},8).wait(43));

	// Слой 12
	this.instance_11 = new lib.Символ17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-107.3,1.9,1,1,0,0,0,126,-19.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},0).to({y:41.9,alpha:1},8).wait(40).to({y:1.9,alpha:0},8).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(479.2,-130.9,403.2,303.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ27();
	this.instance.parent = this;
	this.instance.setTransform(0,-166.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 4
	this.instance_1 = new lib.Символ29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-384,-206.4,752.4,424);


// stage content:
(lib._580x400 = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndStop(75);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(75);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.main = new lib.Символ8();
	this.main.parent = this;
	this.main.setTransform(290,216.1);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(290,201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196,194.6,1266.4,424);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
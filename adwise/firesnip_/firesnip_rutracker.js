(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 638,
	height: 120,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/back.jpg?1465479113882", id:"back"},
		{src:"images/d006.png?1465479113882", id:"d006"},
		{src:"images/d2.png?1465479113882", id:"d2"},
		{src:"images/fire.png?1465479113882", id:"fire"},
		{src:"images/gun.png?1465479113882", id:"gun"},
		{src:"images/image52.jpg?1465479113882", id:"image52"},
		{src:"images/image58.jpg?1465479113882", id:"image58"},
		{src:"images/Layer1.png?1465479113882", id:"Layer1"},
		{src:"images/Layer2.png?1465479113882", id:"Layer2"},
		{src:"images/Layer3.png?1465479113882", id:"Layer3"},
		{src:"images/Layer4.png?1465479113882", id:"Layer4"},
		{src:"images/r1.png?1465479113882", id:"r1"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,711,400);


(lib.d006 = function() {
	this.initialize(img.d006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,100);


(lib.d2 = function() {
	this.initialize(img.d2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,30);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,99);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,150);


(lib.image52 = function() {
	this.initialize(img.image52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,63);


(lib.image58 = function() {
	this.initialize(img.image58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,75);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,130);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,93);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,36);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,51);


(lib.r1 = function() {
	this.initialize(img.r1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,26);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ASDB9QgLgBgKgEQgKgDgJgEQgIgGgHgGQgHgGgEgIQgGgHgDgJIgGgTQgCgKAAgMQAAgKACgLIAGgRQADgIAGgIQAEgIAHgFQAHgHAIgFQAJgFAKgDQAKgDALgCQAMgCANAAQANAAAMACQALACAKADQAJADAJAFQAIAFAIAHQAGAFAFAIQAGAIADAIQAEAIACAJQABALAAAKQAAAMgBAKQgCAKgEAJQgDAJgGAHQgFAIgGAGQgIAGgIAGIgSAHQgKAEgLABQgMACgNAAQgNAAgMgCgASIgRQgIADgHAGQgFAIgEAIQgDAJAAANQAAANADALQAEAKAFAHQAHAGAIAEQAJADALAAQAKAAAJgDQAJgEAGgGQAHgHADgKQADgLAAgNQAAgNgDgJQgDgIgHgIQgGgGgJgDQgJgEgKAAQgLAAgJAEgAG/B9QgMgBgKgEQgJgDgJgEQgIgGgHgGQgHgGgFgIQgFgHgEgJQgDgJgCgKQgCgKAAgMQAAgKACgLQACgJADgIQAEgIAFgIQAFgIAHgFQAHgHAIgFQAJgFAJgDQAKgDAMgCQALgCANAAQANAAAMACQAMACAKADQAJADAJAFQAIAFAHAHQAHAFAFAIIAJAQIAFARQABALAAAKQAAAMgBAKIgFATQgEAJgFAHQgFAIgHAGQgHAGgIAGQgJAEgJADQgKAEgMABQgMACgNAAQgNAAgLgCgAHEgRQgIADgHAGQgGAIgDAIQgEAJAAANQAAANAEALQADAKAGAHQAHAGAIAEQAJADAKAAQALAAAJgDQAIgEAHgGQAGgHADgKQAEgLAAgNQAAgNgEgJQgDgIgGgIQgHgGgIgDQgJgEgLAAQgKAAgJAEgAlBB9QgLgBgKgEIgSgHQgJgGgHgGQgHgGgEgIQgGgHgDgJQgEgJgCgKQgBgKgBgMQABgKABgLQACgJAEgIQADgIAGgIQAEgIAHgFQAHgHAJgFQAIgFAKgDQAKgDALgCQAMgCANAAQAMAAANACQAKACAKADQALADAIAFQAIAFAIAHQAGAFAFAIQAFAIAEAIQAEAIABAJQACALAAAKQAAAMgCAKQgBAKgEAJQgEAJgFAHQgFAIgGAGQgIAGgIAGQgIAEgLADQgKAEgKABQgNACgMAAQgNAAgMgCgAk8gRQgIADgHAGQgGAIgDAIQgEAJABANQgBANAEALQADAK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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.2,-12.8,302.5,25.6);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.1,-11.9,324.3,23.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg14AD6IAAnzMBrxAAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345,-25,690,50);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AKKAAQAAENi/C+Qi+C/kNAAQkMAAi+i/Qi/i+AAkNQAAkMC/i+QC+i/EMAAQENAAC+C/QC/C+AAEMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-66,132,132);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFBAAIqAAA");
	this.shape.setTransform(22.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-1,66.2,2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF6C").s().p("AuThlItzgtIpTgyImogIIjEgSQgKgEgEgHQgDgGABgLQACgUATgFIDaATIGSAGIJSAyIOaAvIfmDFIdYDnIgYABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303,-27.6,606.1,55.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkBoQgqgrAAg9QAAg8AqgsQAqgrA6AAQA7AAAqArQAqAsAAA8QAAA9gqArQgqAsg7AAQg6AAgqgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-14.9,28.8,29.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],-2335,-973.5,0,-2335,-973.5,138.1).s().p("Et0XDdGMgV4oJ3McBvASwMASwJGzg");
	this.shape.setTransform(2330,975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3470,-950,11600,3850);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgXAYQgJgLgBgNQABgMAJgLQALgJAMgBQANABALAJQAJALABAMQgBANgJALQgLAJgNABQgMgBgLgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-3.4,6.8,6.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.r1();
	this.instance.setTransform(444.3,-201.6);

	this.instance_1 = new lib.d2();
	this.instance_1.setTransform(445,-95.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(444.3,-201.6,75.8,136.4);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();
	this.instance.setTransform(-119.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-75,239,150);


(lib.shape59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image58, null, new cjs.Matrix2D(1,0,0,1,-86.5,-37.5)).s().p("AtfF2IAArrIbAAAQijFQCjGbg");
	this.shape.setTransform(75.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-37,173,75);


(lib.shape53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image52, null, new cjs.Matrix2D(1,0,0,1,-49,-31.5)).s().p("AnpE6IAAp0IPSAAIAAJ0g");
	this.shape.setTransform(38.1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-32,98,63);


(lib.shape34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AA+CSIgggFIh1AIIgQgDQAJgfACghIACgzQADgWAMgIQAOgIAjAAQAYAAAJAWQAFAJADAOIAMBHIAQgkQAHgNAHAAQAJAAANAbIARAnQADgJAAgSQAAgJgEgRIgFgZIgqgLQgegJgFgQQgHgOgSgVQgYgYgQAAIgTAFIgPAGIgXAAIgEgYIgDgNIAEAAIADgBIADgCQAOgtAugeQgBASATANQAVAQAFALQAMAnAFAJQAMAPAXAAQAYAAAfgWQAigZABghIAMAOQAEAFAAAIQAAAhggANQgfAMAAAkIADAJQAEAFAHAAIAYgIQAKAUAEAdIAEAfIgBARIABAAQgdAmggAAgAiQAXQgLgHAAgLQAAgFAGgNQAGgOAGAAQADAAAGAFIAIAGIADAIQAFAIAAAHQAAAFgGAIQgFAIgGAAQgFAAgKgFg");
	this.shape.setTransform(-47.5,76.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AmLFaQgPgOAAgfQAAgdAKgZQALgbADg7QACg3AigHIAagEQANgEAFgPIADgcQADgUAJgHQACgCAXgHQAUgFAAgGQACgYAYgTQAYgSAAgZQgBgpALgVQASgfAvAAQArAAAIAIQAJAJAAAuIAAAIIgDASQgEAWgIAHIAAgDQAEgZgHgUQgIgYgSAAQgtAAgDAdQgGAxgUAWIg0A2QgTAXgZAlIAAAtIgDAAIACANIAEAYIAXAAIAQgGIATgFQAQAAAXAYQAVAVAGAQQAGAQAdAJIArALIAEAZQAEARABAJQAAASgEAJIgQgnQgNgbgKAAQgHAAgGANIgQAkIgNhHQgCgOgFgJQgMgYgXAAQgjAAgPAKQgMAIgCAWIgDAzQgCAhgJAfIgBAFIgBAAIhPAHQghAAgPgOgAk4C7QgFAOgBAGQAAALAMAHQAJAFAFAAQAGAAAGgIQAFgIAAgFQAAgJgEgIIgEgIIgIgGQgFgFgEAAQgFAAgHAOgADIEmIgmgYQgYgRgVAGQAKgQAHgDIAZgBQAxAAAVA0IgDABIAAACgAGFCjIgCgNIgRADIgPADQgEAAgWgKQgXgLgCgFQAJgFALgMQAIgJAIAAIAnAGQAgAHgBAHQAAAPgUAogADhCsIgIgCIADgRIAbAAIAAAKQAAAKgNAAgAD3BvIACgEQADgDAHgBIACgBIAFgBIAJAAQAEACAAAIQAAAIgEACIgMADQgQAAAAgNgADXhYQgUgVgfAAIgoAHIgZAHQgGAAgMgVQgNgVAAgHIASAIQARAHAGAAQAHAAARgLQARgMAQAAIAmADQAYABANgCQAagEAggaQAlgdACgeIAEAAQABAJAEAGQAGAHAIgBIACgDIABgGIgIglIgJgpQAgAPAJAMQAHAMABAdQgBAPgGAbIgHAcIgCAFIgCADQgSASgvAhQg8AqgPAAgAEklaQAAgKADgDQAJAAADADQgHABAHABIALABQACAIgEAGQgEAGgKAAQgKAAAAgNg");
	this.shape_1.setTransform(-31.2,56.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,20.2,82.2,72.1);


(lib.shape33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AB+BLQgXgKg9AAIhKAGIg5AFIgXgRQgegaAAgcIADgPIACgVIAVAAQAGAIANAZQAFgNAcgdIAngoQgGARAXAkQAXAmAgAAIAigIIAggFIAVACIABApQACAdAGALg");
	this.shape.setTransform(-52.5,82.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AhrFyQgFgLgCgdIgBgqIgVgDIggAHIgjAIQgfAAgagoQgWgkAGgRIgnAoQgdAdgEAPQgNgbgHgIIgUAAIgCAVIgDARQAAAcAeAaIgDASQgegCgggPQgogVAAgeQAAgbAjgyIA2hKIABAjQACARANAAQA1AAAgg0IAZgvQAQgdAPgQIAEADIAAAvQgHAhAAAPQAAAYASAhQAVAmAWAAQAVAAATgTIApghIACADIAHAeQAFATAAANIgDAeQACAcAQAAQAnAABSg/IAXgRQAPgHATAFQAXAFArgoIAAAaIgYAaIgYAWIAAAAIgBAAIgBAAQgBAAgBAAQgBABAAAAQAAAAAAAAQAAABAAAAIhqAzQhcAtgMAAgAGHD4IgJgHIgDgDQABgGAGgEQAIgFAMgBIAQAJIgCARgAGpDNQAEgSAHgHQAFgHANAAIADAAIAMADIAAAUIgLAJIgHACgADeCpQgMgQgNAAIgoAGQgXAAgdgXQAjgGAmgxQAigtAmAAQAVAAAOArQALAjAAAoQABAQgUAJIgVAFQgYAAgKgPgAg2CmQgGgFgPgiIAAgiIADAAQAMAdAoABIAWAEQAKAFAAASQAAAIgCADIAAACQgMAKgSAAQgbAAgHgHgAi7AbIAdgbQAOgMAMAAQAFAAAMAIIAPAFIAGgBQAEAYgYAAIgegEQgJAAgiAVgABfgDIA0g6IA5g5QAYgegBgqIgBgTQgDgbgPgXQgNgUgegcIAKgMQAPAAAlAXIAhAXIAIgBIADgCIAAgRIgfhHIABAAQAzAMAVArQAPAgAAA5QAAA8hUBFQgnAhhqA8gADxjiIABAPIACAKQAFALALAAQAOAAACgGQgBgMAEgKIAGAFIgDgGIgDABIAAAAIgRgPQgKgKgEgKQgHAGAAAVgAGtkwQgDgEgBgRIABgOQADgMAOAAQAKAAAEAHIAFAIIABADIAAAOQgBANgIAEIgIABgAAsljIgDgBQgCgRAOAAIAcADIAAAGIgKAGIgTAFg");
	this.shape_1.setTransform(-27.3,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,16.5,93.9,74.9);


(lib.shape32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AhCCcQgUgOgMAAIABgHIAFAAIAlgGQAbgHAFgHIAAgTIgygIQgmgIAAgZQAAgaBNgdQBAgZAWgBIACAFQgqAKgaARIgKAHQgbAUAAAWQAAAPAJACIAVAAQA0AAAwgoQArgjAAghQAAgLgLgCIgVAAIgiADIBQg0QAwgcAkAAQALgBAFAVQADAMAAAMQAAATg8AyQhJA5gKAPQgVAbhwBUQgKAAgTgOgAjuhhQAAgiA3geIAQgIIAdALIAgAIQgFALgKAHIgLADQgSAFgaAOQgtAZgOACQgDgDAAgLg");
	this.shape.setTransform(-29.4,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AnVEwQAAgKAGgSIAFgTIAIAAQAIAEARAWQANAQAMAAQAJAAAxgxIA1g1IASAAQAAAQAGAiQAJAsALAAQAKAAASgMQAWgOAJgRQABATAIAqIAOA2QgHAJgKACIgdAAIhPgGQgVAAgiAMQgjAMgUAAQhHAAAAhYgAFTDxQgFgFgBgOQgBgKgIgFQgIgFgBgIIAagDQAaAAAIAPIAGgEIAJAAIAAAaQgEAHgOAHIgQAGQgNAAgEgHgAhdCeIAFgRIADgPQAAgNgXgJQgQgGgMAAIgHABQAKgHAFgLIgggIIgdgLQAlgSAeAAQAYAAATARQAUATAAAYQAAAWgNAUIgdAtQAAgKAIgXgACMAdQBLhRAAhEQAAhmghg7Qgeg1hBghIAEgJQBmAEAtAtQAuAuAABnQAADJjbBQQApgkAigmgAgdgYQgGgVgVgSIgjgaIgfgdQAHgMAQgEIAUgBQAXAAAdARQAhAVAAAbQAAARgGAWQgHAbgMAEIADAEQgHgGgGgWgAGpgdQgKgEAAgOQAAgZAcACQAbADAAAUIgCAMQgGAJgVAAgAGVjVQgBgGABgFQACgJANAAQAVAAgJAWQgHAUgPAEgAGTkbQgMgRgVgCIAEgOIApgGIAgACQAKAEAGAYQgPAZgTAAQgMAAgOgQgAiglQIAAgFIAcgNIAbgMIAAABQALAAAKAGQgDANgNAFIgZAFgAgblmIgLgBIAAgRQAEgBANgHQALgHAJAAIAGACIAFABIgCAKQgBALgCAEQgFAHgPAAg");
	this.shape_1.setTransform(-27.2,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,15.6,94.1,79.6);


(lib.shape31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("Ag4EmQgPgKAAgIQAAgOANgRQATgYAEgIQgFAIgNAGQgMAGgHAAIgIgDQgGgDAAgHIAEgLQAFgIAAgFQAAgLgXgHQgYgIAAgPIADgPIAEgKIAFgEQAqgqAYgmQArhAAAhEQAAhLgWgwIgHgMIAAgVIAAgZIAJgTQAKgQAJAAIAQAEIASANQBfBIAABMQAABQg9BPQgwA/hMA5IAAAWIA3AAIAdgDQgNASgRAqQgSApgOASIAAATIAJADIgFABQgKAAgMgJg");
	this.shape.setTransform(-16.5,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AktDQQBaiMBPAAQAYAAAKAIQAOALAAAcQAAAqgLAZQgSAogLAwIBCgmQAagNAUgQQAQgPgBgmQgCgmAOgNIANgMIgFAKIgCAQQgBAOAYAIQAXAHAAALQAAAFgFAIIgEALQAAAHAGADIAJADQAGAAAMgFQANgHAGgIQgFAIgTAZQgNAQAAAOQAAAIAPAKQARAMAKgEIASAAQgFASgZAMQgqATgMAIQgYAchbAwQAXgOAegxQAZgtAAgNIAAgJIgEADQgkAXg8AtQgoAgg+AUIgfAAIATgxQAPgkAAgUIgDgeQgFgcgLAAQg5AAgWBSIgMA4QgGAagHgBIgQgCIgQgDQgMAAgMAGIgeALQAghbA/higAi5CVQgIAJAAARQAAAMAGAEIATADQASgBAMgMQAOgNAAgVIgCgQIgeAAQgVAGgIAMgAEBEJQgRgbgjABIAAgXIAcgMIAXgFQAfABAJAHQAMAKAAAcQAAA4glAQQgCgggMgUgAD6B8IAAgUQAHgFAIAAQAJAIACAPIgIACgAEtBOIgKgCIAAgGQAEgJAPgFIAPAFQABAUgNAAgAFigHQAAgLAFgIQAFgFAGgCIACAHIAOALQALAKAAAFIgDAJQgDAJgKAAQgcAAABgZgAivgfQgXgJAAgWQAAgYAggJIAzAAIAIAcQABAJgGAIQgIAJgBAHIgNAEIgMAEgAExiWQgFgGAAgJQgBgIAMgOQAMgNAIgEIgGgKQgDgDAAgHIABgIQACgGAJgDIAAgaQgQAFgUgRQgWgTgOAAIAAgDIAoAAQAyAEAMAwIAHApIAEAVQgQAggGAHQgJAHgVAAQgKAAgIgJgAkgj0QA0hDBJgpQBPgtBSAAQBGAABLAvIgDAGQgJgBgKARIgJASIAAAZIgOAAQgug5hkAAQgrAAhCAaQhJAdg4Atg");
	this.shape_1.setTransform(-31.1,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.8,14.4,79.5,79.6);


(lib.shape30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhLCFQgMgaAAgUQAAgnCvjOIgyBbQg1BkAAAMQAAANAGAOQAGANAAANQAAAGgGAYIgFAWIgBAFQgIAFgGABIgUABQgNAAgNgdgAhRhvQgGgKAAgRIADgOQAFgJAIAAIAIABIADAAQADADgCAPIAEAIQAGALAAAEIAAAKQgCAJgLAAQgMAAgHgLg");
	this.shape.setTransform(-24.5,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5A90A").s().p("Ah9CcIgOgBIgIgRIgFgYQAAgLADgJIACgDQAIgSAVgKQAjgRAAgJIgDggQABgcAQAAQARAAAAAXQAAALgKAEQgKAEAAATIAAAAQAAAcAOAKQAMAIAgAAIADAAIABAAQAXgCBOgZIAWgIQgCAGgLAKIgBABIgEADQgPANgKAFQgZAKgcAEIgZgBIAAgBIAAgBIgDAAIgEAAIgngBQgRgDgMgNIgDADIgaAAIgTAOIgBAVIACAQQAEAKAJALgABohlIAAgRQAFgFADgOIADgQQgCAMAMAKQAMAJAQgBIgaAWgAB0ibIgBACIABgCg");
	this.shape_1.setTransform(-49.8,76.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF18").s().p("Ai9FjIgCgQIACgVIATgPIAZAAIAEgCQALANASADIAnABIAEAAIACAAIAAABIABABIAbABQAcgEAWgLQAKgEAQgNIAEgDIABgBQALgLABgFIgVAHQhMAagaABIAAAAIgEAAQgfABgMgJQgPgKAAgbIAAAAQAAgTALgEQAKgEAAgOQAAgWgRAAQgRAAAAAeIACAgQAAAJgiARQgWAJgIATIgBADQgEAJAAALIAFAXIAJASIgwgJQgpgLAAgSQAAgfBChhQBDhiAYAAQAZAAAHAWQAEAMACAmQACAjAHAOQAMAXAfAAQAWAAAWgOQAdgRAAgZQAAgTgSgRQgRgRgXADIAAgEQAjgDADgnQgEgvAEgUQADgPAdgqQAZgnAAgZQAAhMgagvQghg8hFAAQhAAAgmAXQgrAZAAAxIADAcIACAhIgdgnQgCgGAAgnQAAgzA0g9QA8hFBLAAQARAABBAQQBCAQAKAGQARAJAIAJQANANAAAXQAAAKAIAWQAJAaAIAAQAWAAARgPQAQgOANAAQAnAAAAAfIgFAJQiwDPAAAmQAAAUALAaQANAcANABIAUgBQAGgBAJgGIAZARIAGAGQgzAHgRANQgPAMgEAZIgCAVIACAIIABAHQAGgYAIgJQAHgGAPAAQAJAAAHALQAFALAAAKQAAAYgNAMQgNAMgVAAQgHAAgLgNIgMgQIgKASQgHARAAAJIAEAaQAFAOAAAMQAAAWgNALIgOALIgZgHIgugMQgXAAhAAOIhVAPQgKgLgEgKgAA1BRQgDAOgFAEIAAASIAXAAIAbgWQgRABgMgJQgLgKACgMIAAgCIAAACgABtjQIgDAOQAAARAGAJQAGAMAMAAQALAAACgJIAAgKQAAgFgGgKIgDgJQACgOgEgDIgDgBIgHAAQgJAAgEAJg");
	this.shape_2.setTransform(-43.9,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E18403").s().p("AisELIAOgLQANgLAAgWQgBgMgEgOIgEgaQgBgJAIgRIAKgSIAMAQQAKANAIAAQAUAAAOgMQANgMAAgYQAAgKgFgLQgHgLgJAAQgPAAgHAGQgIAJgGAYIgBgHIgCgIIACgVQAEgZAPgMQAQgNA0gHIACABQASAPADAOQAIAegGAXQABAHAnABIAjgCQAMgDAdgVQAAAfgxAVQg5ATgOAJQgIAEgfAnQgXAcgiAOIADAHQgPAPgYAAgABRAxIgCgDQAAgOAHgKQAHgOAOAEIAAADIgEAUQgEAOgMABgACdgNQAAgkgbgSQgcgTAAgiIADgYQAFgOAQAAQAJAAATAoQATArAAAeQAAARgEASgABBjVQgYgOABgSQAAgOAIgIQAHgFAMAAQAbAAAAAtIgDAoQgCgJgagRg");
	this.shape_3.setTransform(-19.7,64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,17.1,70.4,75.2);


(lib.shape29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhbFIQgGgOAAgTQAAgSADgGQAMAAAQAPIAXgIIAigDQAJgBAOgQQAQgTAJgaIAIAMQABAFAAAPQAAAVgGAYQgFAWgHALIgFAAIhGAIgAAMkBIgYg1IgCgFQAAgNAIgCIALAAQANAAAlASIArAXQgZABgPAPQgOAOAAARQAAAPAGAdIAAADQgIgHgeg3g");
	this.shape.setTransform(-42.6,60.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("Ai2FgIAAgEQgCgsgUgXQgVgZAAgHQAAgNAKAAQAMAAAjAYQAjAZALAAQAkAABJg1IAggaIAhgaIBHg1IANAEIAOAEQAKAAALgMQALgNAOAAIALAAQAHABADACIAEAAQAFAFAAAKQAAARgeAHIhCAKQgwAIgYASQgYATAAAeIAGAxQAAAZgSAlIgHABIgBABIgCAAIgBAAIgXAFQAHgMAFgVQAEgZAAgUQAAgQgCgEIgFgNQgJAbgQASQgPARgLAAIghADIgXAJQgQgPgMAAQgDAGAAASQAAATAGANgABvBRQgLgCAAgLIADgKIADgMQgPgDgRgSQgSgVAAgQIAGgZIAHgYQAHANAfAeIAeAaQAAAHgFAGQgHAGAAAGIAhAHQAVAGABAMQgGAKgSAHIgdAGgAgli6IgghYIAAAAIgKgeIgaAAIgHAHIgCAKQABAIAFASIAAAOQgIgEgKgUQgLgTABgIQgBgMAPgXQARgZAQAAQAFAAB5A8QAvAWAdAYQAVASALATIABADIgBAAIgegHIgjgEQgUAAgUARQgXASgBAaIAAABQAAARAMAvQgigUgfhFgAg7kcIADAGIAaA1QAdA3AHAHIAAgDQgGgdAAgPQAAgRAOgOQAOgPAZgBIgrgXQgigSgNAAIgNAAQgJACAAAMg");
	this.shape_1.setTransform(-38.1,57.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("Ak8FsIAAhIQADgdAjgbQAggZAWAAQAIAAAjAPQAjAPAJAAQAcAAAlgPQAxgUAAgeQAAgJgGgHQgHgJgOAAQgJAAgaAJIghAJQgfAAgagMQgigQAAgdIAFgjQAGgdAAgNIgBgWQgDgLgNgPIADAAIAoARQAaAPAIAVQAFANAEAoQAFAgAUAAQANAAATgIQAUgKAAgKQAAgSgLgYIgOghQgEgQgXgGQgVgHgCgUQgDgngqgvQgogrgXAAIgGAAIgDACQAGAYADAcIAHA5IgVgeIgYgkQgogzAAgWQAAheBRg2QBIgxBuAAQBuAAAuAyQAdAhA1BoQALASAIAwQAJAwALASIAzAtQAnAfAAAZQAAAcgTAXIgTAVIAFARQAEARAAAKQAAA4gPAUQgRAWg/AWQguAQgnAbIhGAxIABAFIgnAIQASglAAgYIgGgxQAAgeAYgTQAYgTAwgHIBCgKQAegHAAgRQAAgKgFgGIgDAAQgEgCgHAAIgLgBQgOAAgKANQgLANgLAAIgOgEIgNgEIhHA1IgfAaIgiAaQhJA0gkAAQgLAAgjgYQgjgZgLAAQgLAAAAANQAAAHAWAaQATAWACAsIgQACgAApgEIgGAXQAAASASAUQAQATAPADIgDALIgDALQAAALALABIAQAAIAdgFQATgHAFgKQAAgNgWgFIgggIQAAgFAGgGQAGgGAAgIIgegcQgggcgHgMgABoh1QgRAOAAAXQAAAlA+ApIBUAsQABgRgLgeQgKgdgMgUQgRglgJgOQgPgYgWAAQgUAAgOAMgAAGhBQgJguAAgRIAAgBQAAgaAVgTQAUgRAUAAIAjAFIAeAGIACAAIgCgCQgLgUgVgSQgdgYgvgWQh5g8gFAAQgQAAgQAaQgPAWAAAMQAAAIAKATQAKAVAJAEIAAgOQgGgSAAgIIABgKIAHgIIAaAAIALAeIAAABIAfBXQAfBFAiAUIAAAAg");
	this.shape_2.setTransform(-36,54.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,16.2,63.5,77.8);


(lib.shape28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AheEjIgCACIgTgCIAsgXIASgJIAAAAIAHgEIAAAAQAggQAIAAQAFAAABADIAEAFIAAAMQAAANgKAPIgFAFIhTACgAAZDyIgFgEIgBgEIATgYQAMgQAAgLIgDgVIgBgDIgCgNIgCgQQAAgRAcgBQANAAARAaQAQAZAAARQAAAXgZAZQgYAWgRABQgNAAgMgJgAgwjDQgrglAAgRQAAgNAogQQAkgPAPAAQANAAAkAOIAYAJQgjABgaAgQgcAnARArIAAAFg");
	this.shape.setTransform(-40.1,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AgZE1QAMgPAAgNIAAgMIgEgFQgDgDgFAAQgIAAggAQIAAAAIgHAEIAAAAIgSAJIgsAXQgWgBgugBIAAAAQBFgVA1gYIAIgDQArgVAWgTQAVgTAAgSIgDgOIgHgaQgHgcACgGQA8gKAlAfQAhAdAAAxQAAAVgMAXIgMAZIgwAfIg7ACIgcABgAAXCYIACAQIACANIABADIADAVQAAALgMAQIgTAYIABAEIAFAEQAMAJANAAQARgBAYgWQAZgZAAgXQAAgRgQgZQgRgagNAAQgcABAAARgACNBDQgmggAAgNIADgWQAEgHAOAAQAQAAAaAYQAdAdAAAXIgBANQgBAHgHAIIgIAIQgLgOgagYgAgBhPQgegjgZgSQglgbgrAAQgqAAgMAbQgHANgFA/QgFgDgLgfQgKgeAMg2QAMg4BNgqQBMgqBLAAQAXAAAZAMIAwAUQAYAIAQAbIARAfIAEALIAAAuQgLgQgRgNQgRgMgHADQgDgFgegHQgcgHgSAAQgdAAgJAgQgGASAAApIABAmIAPAwQgOgbgJgNgAhGkAQgoAQAAANQAAARArAlIAzAtIAAgFQgTgrAegnQAYggAjgBIgYgJQgigOgOAAQgQAAgkAPgACjhWQAAgOAfgHQAZgFAEATIABAIIAAAMQgDAGgPAAQgrAAAAgTg");
	this.shape_1.setTransform(-38.2,59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("AlCFLQAPgSCBguQB2gqAAgcQAAgSgagQQgngXgMgNIAAgOIAngGQgCgahEhDQhDg/AAgkQAAhvA6g+QBEhLCSAAQBIAAAXAJQAfANAiAyQAFAIADAeQACANAFAJIANAOQAHAFAHAdQAGAcAAARIgDAkQAaAFAZAYQAeAcAAAfQAAA9gKAiQgPAxgpAkIhUBFIgyAkIAMgZQAMgXAAgVQAAgxghgdQgkgfg/AKQgCAGAJAcIAIAaIACAOQAAASgXATQgUATgrAVIgIADQg1AYhEAVIgCAAIgPABIh6ABgAB8AVIgCAWQAAANAlAgQAaAYAMAOIAIgIQAHgIABgHIAAgNQAAgXgcgdQgbgagPAAQgOAAgFAJgAiEgbQAAAcAqA2QAgAoAaAHIAAgEQAQgBAKghQAGgYAAgZQAAgSglgfQgjgdgRAAQgrAAAAAkgADFAAQAAATAqAfIA0AeQgJgugIgUQgPgfglgBQgZABAAARgAAogSIgPgwIgBgmQAAgpAGgSQAKggAcAAQASAAAdAHQAdAHADAFQAHgDASAMQAQANAMAQIAAguIgFgLIgQgfQgRgbgXgIIgxgUQgYgMgXAAQhMAAhMAqQhMAqgMA4QgNA2ALAeQAKAfAFADQAGg/AGgNQANgbApAAQArAAAmAbQAZASAcAjQALANANAbgADUhWQgeAHAAAOQAAATArAAQAPAAACgGIAAgMIAAgIQgDgPgQAAIgLABg");
	this.shape_2.setTransform(-40,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,24.3,64.6,67.2);


(lib.shape27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AkJEIIgFAAQgHgJAAgFIAKgWQAKgVgBgEQACAJAKALQALAMAIAAQAhAAARgdQALgSAGgkQgaADgWgRQgWgSgCgXQAJgEANgDIATgEQAUAAAcAXQAfAZAyAGIAAgDQgagNAAglQAAgGAGgMQAFgLgCgGIAOAAQASADAKATQAMAVAAAjQAAAWgNAoQgNAlgQAMIgYAEIAGACIABAAIglAGIiAALgAACB3QAAgJAMgMIANgLIAIAEIAMAGQAHADAAADQAAAKgJAIQgJAIgRAAQgRgFAAgFgAB+BEIgSgKQgJgFAAgMQAAgRAJgMQAKgNAQAAIAMABQAJAEgBAHQAAAOgGAUQgJAXgMAAIgBAAgAjIgHQgagQAAgVQAAgSAMgNQANgPAVAAQAIAAARAPQARAQAKASQAcAug2AAQgWAAgYgMgAAFg7IgxgtQgjgeAAgmQAAgkA6gdQAwgaAxAAQAUAAAVAYIAXAYIgGAFIgkgDQhdAAAABdQAAAVALAcIACAGIAPAmgAC6ieIAAgVQAAgUAGgJQAIgLAUAAQAbAAAOALQAMAJAFAUQgNgEgEAIQgGAKgFAAIgMgDIgOgDQgQAAgDAIIgIAeg");
	this.shape.setTransform(-29.5,66.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AkoFgIhSgDQAPgdAvgWQAkgQAAgmQAAgoAQgmQAUgwAkgSIgGgSQgGgPAAgIQAAghAOgjQAVgyAiAGQgOgiAggjQAbgeAkgKQAPgEADgXQAEgdAGgHQATgVASgFIAhACIAAgRQgHgNgSgLQgSgNgQAAQgXAAgTANQgMAIgGALQgIALgCAOIgEAAIAAglQANglAHgLQAPgXAeAAQAmAAAYAXIAgAoIAAAfIAQgEQAIgFAJAAQALAAAgAKQAgAKAPAAIAyACQAeAGAKAYQARAnAvAoQAiAcAAA+QgBASgJAIQgLAJAAAPQALABAMANQALANAAAMQABAZgUAQQgOANgeALIgMAoIgHAVQgFALgFAFQgUAVg2APQg6APgugIQAOAmg4AiQgiAVg7ANQARgMAKgkQAOgoAAgWQAAgjgMgVQgJgUgSgDIgNAAQACAGgGALQgFAMAAAHQAAAkAaAOIAAADQgygHgfgZQgcgWgVAAIgTADQgNADgIAFQACAXAVARQAWASAbgDQgHAkgKASQgRAdgiAAQgIAAgLgMQgKgMgBgIQAAAEgJAVIgKAVQgBAGAIAIgAA2C9QgMAMAAAKQABAFARAEQAQAAAKgIQAJgHAAgLQAAgCgIgEIgLgFIgIgEgACVBnQgJANAAARQAAALAJAFIASALQAMABAJgZQAHgTAAgOQAAgHgJgFIgLgDQgRAAgJAPgAitAOQgNANAAASQAAAVAaAQQAYAPAWAAQA3AAgdgxQgJgSgSgQQgQgOgIAAQgVAAgNAOgAARiRQg4AdABAjQAAAmAjAfIAwAqIAdAgIgPgmIgCgFQgMgbAAgVQAAhdBeAAIAkADIAFgEIgWgZQgVgXgVAAQgwAAgzAagADoh1QgFAJgBAUIABAWIALAYIAIgeQADgHAQAAIANADIANADQAEAAAHgLQAEgIANAEQgFgTgMgJQgOgMgcAAQgUAAgIALg");
	this.shape_1.setTransform(-33.5,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,21.7,75.8,71.1);


(lib.shape26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AhgA2IgHABQAHgTASgVIAognQAZgXANgEIAzgFIAVACIAdABIABABIACACQg8ATgYAUQgdAXgFAtg");
	this.shape.setTransform(-47.7,85.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AjXDvQAEgsAggaQAXgTA8gUIgCgBIAAgCIgdgBIgWgBIg1AEQgMAEgaAXIgoAqQgRAVgIASIghADIAEgJQARguARgOQAngjAygWQAWgLAigBIA1gBQA3gEAAhAQAAgHgOgfQgPggAAgPIADADIAnAlQARAOAHAQIAKAfQAHAMATAAQAUAAAPgHQATgLALgcIAAAYQABARgQARQgKALgaASQgVAPgagDQgLgCgDAMQgEARgFAEIhCA2IgzAugAAWC8QANgTAUgVQAYgXAMAAIAZAAIAEgBIAPgCQAJAggrAPQg5AMgZAKgAAphnQgPgWAAghQgBgYAUgNQAMgJApgOIANAAQgfAsAABDIAAAmQgcgUgLgOgAEdjTQgRgMghAAIghABQgXACgSAIIgHAAQAXgRAlgIIA/gHQAjAAAMAJQAPAKAAAaIAAATQgDAKgJAEQggglgKgIg");
	this.shape_1.setTransform(-27.5,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E78A0E").s().p("AhfErIgtgEIAzguIBCg2QAFgEAEgRQADgMALABQAaADAVgOQAagSAKgLQAQgRgBgRIAAgYQgLAcgTAKQgPAIgUAAQgTAAgHgMIgKgfQgHgQgRgQIgngkIgDgCQAAANAPAgQAOAhAAAGQAABBg3AEIg1ABQgiABgWAKQgyAXgnAiQgRAOgRAvIgEAJIhtAIQAKgJA5gnQAigXAJggQAIgcAtgfQAsgfAiABIAyAFQARAAARgWQARgYAAgZQAAgRgOgeQgSglgTAAQgaAAgXAOQgaARAAAaQABAIAFARQAGARgBANIgDAAQgHgNgUgSQgHgIAAgdQAAguAdgeQAcgcAogBQAWABApAQQArATABAQQALhXAegqIASgYQAIgKAAgLQAAgsg5AAQgUAAgoAMQg1APgFAVIAAgCQAAgsAYgUQAXgUAtAAQAwAAAmAnIAZAbQAMAMAGgBQAJABAvgUQAwgUA9AAQBMAABAAwQBEA1AABJQABBLgsAvQgtAzhIAAQgkAAgWgNQgcgSAAgmIABgZQADgNANgUIAAADQgDAZARAOQAQALAcAAQAeAAAAgiQAAgfgWgQQgUgPgiAAQgYAAgRAPQgSAQAAAeQAAASAXBjQAAAkgIAOQgMASglgEIAAAEQAXAAAKAFQAKAHAQgBIAcgBQAGgDAKgQIAAAfQgcAxhHAaQh6AsgbAQgAA+DGQgUAVgNASIgDAEQAZgLA5gMQArgOgJggIgPACIgEAAIgZAAQgMABgYAXgAA0iRQgUANABAYQAAAhAPAWQALAOAcAUIAAgnQAAhCAfgsIgNAAQgpAOgMAJgAEkihQAKAHAgAmQAJgFADgJIAAgUQAAgagPgJQgMgJgjAAIg/AHQglAHgXASIAHAAQASgJAXgBIAhgCQAhAAARANg");
	this.shape_2.setTransform(-28.2,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,31.5,88.2,62);


(lib.shape25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFBAA").s().p("AgMASQgMgDAAgNQAAgHAHgGQAKgIASACQAWAKgNARQgKAIgKAAg");
	this.shape.setTransform(-50,87.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("AmbDhIAAgSQAqhDAYgdQAogvBBgBQA7AAAigQQgKAVgiAZIgzAiIgDAAQBRAEBBg1QA+hBAcgTIAAASQgHAVgfAxQgbAtgHAgQAbgHAqgcQAigYAIgKQgIAQgSAVIghAkQgYAdgHAbIgSgDIg8gGIiJAJIhyAJgAjOCoQgGAGAAAJQAAANALACIANAAQAMABAKgJQAMgSgVgKIgIAAQgPAAgIAGgABMBRQAAgRAYgKIAMgFIAAAEIAJgIIALgIIAHgGQAQgNABgQIgFgMIgEgTQAKAIAVAJQASAKAAAOQAAAbgjAXQghAWglAAgACThcIgEgiIgEgcQAAgjAwgVQApgRA0AAQA8AAAeAfQAPAQAbA7IAAACQAAgFgDADQgNgNg/geQg7gdgGAAQgcAAgvApQguAoADAUgAhEiFQghgXgcgDIAAgCIASgGIAUgFQASAAAVAOQAYAPgBARQAAALAHAUg");
	this.shape_1.setTransform(-31.1,69.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18403").s().p("AkBECQAHgbAYgdIAjgkQATgVAHgQQgIAKgjAYQgqAcgbAHQAGggAcgtQAegxAHgVIAAgUQgcAVg+BBQhBA1hQgEIADAAIAygiQAigZAKgVIABgBQAxgXAAg9QAAgfgOgXQgTgdgmAAIgeAGQgXAIAAAKQAAATAHAVIABACQgQgZAAgZQAAglAighQAkgjArAAQA2AAAiAgQAqAnAABRQAAAWgEAVQgEARgDAFIADAAIAfgnQAWgbAEgcQAUhpAAgLQAAgPgWgMQgXgLggAAIgjAGIgcAFQgBgqA3gBQAoAAAZANQAWALAaAeQAdgYArgSQArgRAlAAQApAAAoARQAnARAVAZQANAQATANIAeASQAeAVAAAtQAABAgsAlQgsAnhSAMIgrAAIAAgCQAUgLArgOQAjgPAAgfQAAgggUgQQgTgPgoABIgvAFQguAKAAAQIAPAXQAOAXAAAZQAAA6hYA4Ii9BfgAgrAbIAEAOQAAAQgRANIgHAGIgLAIIgIAEIgNAFQgXAKgBARIAPADQAlAAAigWQAhgXAAgbQAAgQgQgKQgWgJgKgIgAgtg1QgCgUAtgoQAtgpAcAAQAGAAA7AdQA/AeANANQADgDAAAFIAAgCQgbg7gPgQQgegfg8AAQgzAAgnARQgxAVAAAjIAEAcIAEAiIADAAIAAAAgAk0iAIgSAGIAAACQAcADAhAXIAuAmQgGgUAAgLQAAgRgYgPQgVgOgRAAgAGci4IgLgXQgWgghFAAIAAgEQAlgRAdAAQAlAAARAUQAOARgDAfQgFAGgCAGQgBAHgMgBQgFAAgEgKg");
	this.shape_2.setTransform(-11.4,65.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,39.2,105.2,52.9);


(lib.shape24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18403").s().p("AjkCrQgDgoAaghQAKgNAvgrQAIgGBmgjQBtgjAeAAQASAAAYAIQAhAJAQARIgDgwIgEgWIAEABQAKAFAGALIANAWIAaApQAUAlAAANQAAAqgJASQgMAagkARQgNhSgOgTQgIgNgxgOQgsgOgPAAQgdAAgbAQIguAiQgMAGgWAjQgZAogNANIguAsQgWAUgTAFIg0AOIgOADQAlgjgCgtgADVi7Qg+gbgOgSQAFgNAPgDIAZgCIAgACIAbAZQAJAJAFAWQAGAbADAFQgOgLglgQg");
	this.shape.setTransform(-13.2,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBFD9B").s().p("AiuBtIgVhCQAAgNAXgIQASgGASAAQATAAACAdQABAQAAAeIADABIAHABQAIAAAJgRQAIgRAJAAQAFAAAFAIIgIAHIgJALIAGAWQAFAOAAAKQAAATgRANQgQALgYAAQgaAAgZhBgAimhGQAAgMAIgJQAJgJALAAQAJAAAMAGIAAAaIgJAPQgEAFgNAAQgXAAAAgWgABBhYQgJgEAAgJQAAgIADgEIAUgSIAUAMQgEAIgDATQgBAHgOAAgACOh8IgUgEQAAgcAMgLQAGgFALgBQAJABARAIQATAKAAAKQAAAIgIAIQgJAJgMAAg");
	this.shape_1.setTransform(-32.6,74);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDF18").s().p("AkpDgIgwgMIgrgMQgJgHAAgiQAAg1A8gjQBBgbAKgHQAagQAfhJQAehIAAgjQAAgPgIgXQgGgUgGgLIACAAQAtAKAiAbIAwApQAMgOAGgYQADgMAWAAQALAAAiAWIAjAWIAlgWQAlgWAwAAQBHAAAtAVQAtAVARAnQAFAMAOAFIAOAFIAEAVIAEAxQgRgSghgJQgXgIgSAAQgfAAhvAmQhmAggHAGQgwAsgIAMQgZAhACAoQADAtgmAjIhBADQgrAAghACIg7ABgAihA8QgXAIAAANIAVBCQAaBBAZAAQAYAAAQgLQASgNgBgTQABgKgGgOIgGgWIAJgLIAIgHQgFgIgEAAQgKAAgIARQgJARgIAAIgHgBIgDgBQAAgeAAgQQgDgdgSAAQgTAAgSAGgAiTg1QgIAJAAAMQAAAWAXAAQANAAAFgFIAIgPIAAgaQgMgGgJAAQgLAAgJAJgABGhLQgDAEAAAIQAAAJAJAEIAMADQAOAAABgHQADgTAEgIIgUgMgACRiBQgMALAAAcIAUAEIAZAFQAMAAAJgJQAJgIAAgIQgBgKgTgKQgQgIgKgBQgLABgGAFg");
	this.shape_2.setTransform(-33.7,70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,42.3,86.8,50.9);


(lib.shape23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AktCOQAAgTANgOQAMgOAAgNQAAgWgUgKQgUgLAAgKQAAgyB7gyIAAACIgcARQgRAKAAAPQAAAbARAkQATArAVAAQAmAAARgRQALgLAGgcQAGgfAFgLQAMgXAcgJIAsgOQAbgLAOgPIAZgjQARgUAYAAIAYABIAZAPQgUAHgQAPIgnAfIhPApQgQAIgTAdQgTAfACASQAEAoghAsIgDAFIgtgDIhVgDQgVAAg0AOgACqh6IAAgJQACgGAJAAQAPAAAjAWQAiAVAMAAIAngLQAEAKgSAMQgRAMgUAAQhfgeAAgVg");
	this.shape.setTransform(-30.2,79.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18403").s().p("AmODsQgRgPAAgYQAAgoATg+QAZhTAngJQA/gMAfgoQAfgngHg6QAqAHAAA8QAAAdAEAKQAHARAYAAQAoAAA7g1QA5g2AuAAQAZAAAUAMIAkAaQAyAlBIAAQAnAAAugSQAsgSAQgYIADAxQAAA0gaAdQggAohGAAQgsAAgbgKQgbgKgiAAQhHAAgkAfQgZAVgPAvQgRA5gHALQgUAfgrAAIgfgDIADgFQAhgsgEgoQgCgSATgfQATgfAQgIIBPgpIAngdQAQgPAUgHIgZgPIgYgBQgYAAgRAUIgZAjQgOANgbALIgsAOQgcAJgMAXQgFALgGAhQgGAcgLALQgRARgmAAQgVAAgTgrQgRgmAAgbQAAgPARgKIAcgRIAAgCQh7AyAAA0QAAAKAUALQAUAKAAAWQAAANgMAOQgNAOAAATIACAFIgBAAIgxANQgUAAgQgPgACdgoIAAAJQAAAVBfAcQAUAAARgMQASgKgEgKIgnALQgMAAgigVQgjgWgPAAQgJAAgCAGgADji4QgXgMgkgIIgygPQgfgIgZAAQgsAAgXAaQgZAZgEAAQgHAAgBgIIAAgNQAAgaBRgPQA9gMAzAAQAzAAAXAJQAhAMAIAZQAPARAAAXQAAAPgDAFQgDAAgDADQgSgbgbgQg");
	this.shape_1.setTransform(-28.9,70.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5,45,83.3,50.3);


(lib.shape22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18403").s().p("AmdDrQhlgOAAgcQAAhRA/hGQBAhHBkgYIAAACQgUAXgEANIgCAkIADAhQAFAOAWAAQAVAAAWgVIAqgtQA9hABQAAQAiAAAuAXQAvAXAkAAQAWAAAZgPQAggSAAgaQAAgZgNgUIgRgbQAWAJAZAZQAjAmAAAkQAAAqg/AxQhAAwg3AAQgOAAgWgRQgUgRgcAAQgSAAgWALQgUALAAAJQAAAJAGALQAFAMAAAGQAABBhTAaIgnAKIADgDQAOgQAIgfQADgLgBghQAAgfAHgRQAHgPASgRQAQgPATgLQANgHAhACIArADIAAgRQgJgMgOgDQgyAEgpAPQg0ATgVAiQgKARg2A0Qg+A6gUAAQgIAAgDgGIgDgLIAIgZQAJgUAAgJQAAgIgJgFIgKgDQgNAAgJAMQgIALAAAQIAEAZIAEAVQAAAbgCAHIgDAEgAndC3IASAAQAIgLAAgKQAAgKgGgCIgUgCgAl7AfIAAAOIAGABIAKACQAKAAAIgGQAHgFgBgGQgEgFgIgEIgHgDIgMAAgAAJAFQgIAEAAAPQAAAVBVAAQAiAAAhgTQAdgRARgWIg9AUIgjABIhEgGgAjOiXQgPgIAAgWQAAgaArgPQAngPA2AAQBEAAA3AMQA0AKAaAQQgzAAhpAbQhrAbgWAAQgaAAgLgGgAHBi3QAAgLAIgIQAKgJAPAAQANAAgDgDQAKgCAGAEQAHAFAAALQAAAeglAAQgdABAAgSg");
	this.shape.setTransform(-17.6,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDF18").s().p("Aj+B7IADgFQADgHAAgbIgFgVIgDgZQgBgQAJgLQAIgLANAAIAKACQAJAFAAAIQAAAJgJAUIgIAaIADAKQADAGAIAAQAVAAA9g6QA2gyAKgRQAVghAygUQApgPAygEQAOADAJAMIAAARIgrgDQghgBgNAHQgTAKgOAPQgSARgHAQQgHAQABAdQAAAhgDALQgIAfgOAQIgCADIhlAIgAlRBEIAAgiIATABQAHACAAAKQgBAKgHALgAjqhCIgGgCIAAgNIAJgMIAMAAIAIADQAHADAEAGQABAFgHAFQgIAGgKAAgACMhZQAAgOAIgFIAbgDIBDAGIAjgBIA9gWQgRAYgdARQghATgiAAQhUAAgBgVg");
	this.shape_1.setTransform(-31.5,80.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.1,45,103.1,48.2);


(lib.shape21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("ABHBDQgMgEAAgIQAAgIAPgXQAOgYAAgJQAAgQgHgFIgZgNQABAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAVgDIAYgDIAhAEIAdALQABApgRAdQgWAlgrAAgAiUAsQgRgSAAgdIABgeQAEgSARgGIAHAiQAHARATAAQAZAAArgbQAwggAQgEIAdAAIgoAgQgeAYgCANQgEASgYAWQgaAYgYAAQgfAAgSgUg");
	this.shape.setTransform(-47.9,81);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AiFETQgmgNggAAIhfAIIhLAHQhNAAAAhJQAAg0BDhtQAwhLAdgiIADAAIgSA7QgIAaAAATQAAAfAJATQALAXAXAAQAbAAAvgjQA1goAUgGQAEAiAXAMQARAIAoAAIAWAAIAfgLIANAAIAAAxQgKAOgDAeIgDATIgDARIgCAJQgKAigNASQgUAZgjAAgAhxB0IgVADQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIAZAMQAHAGAAAQQAAALgOAYQgPAXAAAIQAAAIAMAEIAOADQArAAAWglQARgdgBgrIgdgLIghgEgAlnCEIgBAeQAAAeARATQASAUAfAAQAYAAAagYQAYgWAEgUQACgNAggYIAoggIgdAAQgQAEgyAgQgrAbgZAAQgTAAgHgSIgHghQgRAGgEASgABbh6QAAhlhuAAQgzAAgrATQgyAWgZApQAphVAkgbQAsgiBcAAQA7AAAZArQATAjAABEQAAArgIANIg5A/QAcgqAAg6gAE2hNIAAgaIAIgIIALgBIgBAJIABAKIgCAQgAFyhxQAAgKAJgLQAJgMAJAAIAbADQgEAKASACQANACAAAOQAAAQgJAIQgKAIgWAAQgoAAAAgeg");
	this.shape_1.setTransform(-28.4,64.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,35.4,90.3,57.8);


(lib.shape20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDF18").s().p("AitDUIAAgmQADgsAwAAIABAEIABAIIgCAQIgDAQIAfAcIAJAJIAAAAQgjAAgoAbIgQAKQAEgMgBgYgAANBzQgIgSAAgUIAIgZIgCAAQgGANgXAMQgYANgVAAQgiAAABgRQAAgYAoghQAXgQAUgKQAJAUAPABQAQABAcgdQAcgfALggQALggAGgnQAGgnAAgRQAAgWgEgSQAeAUAPAcQATAjAAAyIgCAXIgTAqIgRAlQgdARgKAMQgGAFgRAnIgPAzQgJAYgUAAQgKAAgKgVg");
	this.shape.setTransform(-43.6,66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E78A0E").s().p("AhgEVQgNgXgnACQgSABgcgIQgdgJgRAAIgJgKIgfgcIADgPIACgQIgBgIIgBgEQgwAAgDArIAAAnQABAYgEAMQgaARgKAAQgTAAgagRQgdgTAAgTQAAgIAMgdIABgDQgGg1AvhBQAdgqBchgQgGAPg/BfIAAARQARABAzgwIBMhIIAEADIAOAzIAFAMQgUALgXARQgoAgAAAZQgBARAiAAQAVAAAYgNQAZgMAGgNIACAAIgIAZQAAATAIATQAKAVAKAAQAUAAAJgZIAPgyQARgnAGgFQAKgMAdgUQgZA+AAAvQAAARAPBoQAAARgLASQgNAVgPAAQgUAAgNgXgAB7C8QgGgEAAgIQAAgIADgDIALgDQAKAAADADQACADAAAKIAAAKQgCADgNAAgAGVB1QgMgFAAgNQAAgMAFgIQAHgJALAAQAIAAAGAGQAAAJAGAGQAGAFAAAGQAAAHgGAFQgFAFgIAAgAE2BJIgMgFQgFgGgBgFIABgIIAIgKIAOAKIALAKIAAAOgAAWhWQAAgxgTgjQgNgcgegVIgDgOQgHgWghgNQgggNg+A+Qg9A+gBBEQgXgvAmhJQAlhKA+gNQA8gOA3A3QA1A4AAAyQAAAggXA3gABZhbIAAgSIALgIQAKgGADAAQADAAAEAJQADAGAAADIAAALQgCAGgLAAgADliPQAAgIAOgHIAGgDIAmAEQAlAAAcgdQAbgbAAgfIAAgLIgGgJIAAgOQANASADAJIABAaQAAA2gmAhQggAdgqAAQgxAAAAgig");
	this.shape_1.setTransform(-28.1,63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,33.6,88.5,60.1);


(lib.копияshape13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,254,111,0.078)","rgba(255,253,98,0)"],[0,0.749,1],0,0,0,0,0,39).s().p("AkIEHQhthtAAiaQAAibBthsQBuhuCZAAQCaAABuBuQBvBsAACbQAACahvBtQhuBviaAAQiZAAhuhvg");
	this.shape.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-37.4,74.9,74.9);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.setTransform(-7.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-18,15,36);


(lib.shape14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFF00"],[0,1],-98.6,6,0,-98.6,6,176.6).s().p("ALzg7QH9ACpPA8I5/A5g");
	this.shape.setTransform(15.9,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-5.6,198.2,12.1);


(lib.shape11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,242,153,0.8)","rgba(255,255,153,0.49)","rgba(255,255,156,0.929)","#FFFFFF"],[0,0,0.278,1],9,-6.2,-7.2,6.3).s().p("AhJA6IAWgmQASgbAjgYIAqgdQATgGAIAKQAHAKgHAUIgpAgQgXARgrAZQgdAPgHAAQgEAAADgFg");
	this.shape.setTransform(-0.7,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6,15.1,12.8);


(lib.Layer4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();
	this.instance.setTransform(-22.5,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-25.5,45,51);


(lib.Layer2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();
	this.instance.setTransform(-51,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-46.5,102,93);


(lib.Layer1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.setTransform(-39.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-65,79,130);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgJALAAQAMAAAIAJQAJAJAAALQAAAMgJAJQgIAJgMAAQgLAAgJgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3,6,6.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.d006();
	this.instance.setTransform(104,0,1.677,1.677,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,167.7);


(lib.копияСимвол3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire();
	this.instance.setTransform(-141,18.5,1.136,1.136,-37.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-87.8,207.3,195.6);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape26("synched",0);
	this.instance.setTransform(28.3,-62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-31,88.2,62);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape25("synched",0);
	this.instance.setTransform(19.8,-65.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-26.4,105.2,52.9);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape24("synched",0);
	this.instance.setTransform(30.1,-67.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-25.4,86.8,50.8);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape23("synched",0);
	this.instance.setTransform(28.9,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-25.1,83.3,50.3);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape22("synched",0);
	this.instance.setTransform(17.7,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.5,-24.1,103.1,48.2);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape21("synched",0);
	this.instance.setTransform(28.4,-64.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-28.8,90.3,57.8);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape20("synched",0);
	this.instance.setTransform(28.1,-63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-30,88.5,60.1);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape34("synched",0);
	this.instance.setTransform(31.3,-56.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1,-36,82.2,72.1);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape33("synched",0);
	this.instance.setTransform(27.4,-53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,-37.4,93.9,74.9);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape32("synched",0);
	this.instance.setTransform(27.3,-55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-39.7,94.1,79.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape31("synched",0);
	this.instance.setTransform(31.1,-54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-39.8,79.5,79.6);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape30("synched",0);
	this.instance.setTransform(37.5,-54.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.2,-37.6,70.4,75.2);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape29("synched",0);
	this.instance.setTransform(36,-55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-38.9,63.5,77.8);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape28("synched",0);
	this.instance.setTransform(40,-57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-33.6,64.7,67.2);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape27("synched",0);
	this.instance.setTransform(33.6,-57.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-35.5,75.8,71.2);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.2,-12.8,302.5,25.6);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(-32.8,-3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.57},3,cjs.Ease.get(-1)).to({alpha:0},4,cjs.Ease.get(0.98)).to({alpha:0.5},4,cjs.Ease.get(-1)).to({alpha:1},4,cjs.Ease.get(0.98)).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-32.8,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-15.8,324.3,23.8);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({rotation:1},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(1).to({rotation:-1.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.2,-12.8,302.5,25.6);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,0,1.231,1.231);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1.54,scaleY:1.54,alpha:0},9).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(0,0,1.231,1.231);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1.54,scaleY:1.54,alpha:0},9).wait(4));

	// Слой 2
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(0,0,1.231,1.231);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1.54,scaleY:1.54,alpha:0},9).wait(7));

	// Слой 1
	this.instance_3 = new lib.Символ26();
	this.instance_3.setTransform(0,0,1.231,1.231);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.54,scaleY:1.54,alpha:0},9).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-80.6,161.2,161.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhUAPIAAgaAgpAOIAAgaAgGAOIAAgaAAjANIAAgaABVAqIAAhT");
	this.shape.setTransform(43.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// Слой 1
	this.instance = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,x:7.2},7,cjs.Ease.get(-1)).to({scaleX:0.74,x:14.4},7,cjs.Ease.get(1)).to({scaleX:0.86,x:7.7},7,cjs.Ease.get(-1)).to({scaleX:1,x:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-5.2,65.2,10.4);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape59("synched",0);
	this.instance.setTransform(-75.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-37.5,173,75);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shape53("synched",0);
	this.instance.setTransform(-38,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-31.5,98,63);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.035},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.035},10,cjs.Ease.get(-1)).to({alpha:0.07},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-14.9,28.8,29.8);


(lib.Символ9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(39,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Анимация1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-75,239,150);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8.9},20,cjs.Ease.get(-1)).to({y:20},21,cjs.Ease.get(1)).to({y:8},22,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-75,239,150);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(0,-0.1,0.201,0.201);

	this.instance_1 = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(0.1,70.8,1,1,0,90,-90);

	this.instance_3 = new lib.Символ23();
	this.instance_3.setTransform(70.4,-0.1,1,1,0,0,180);

	this.instance_4 = new lib.Символ23();
	this.instance_4.setTransform(0,-71,1,1,90);

	this.instance_5 = new lib.Символ23();
	this.instance_5.setTransform(-70.7,0);

	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(-0.1,-0.1);
	this.instance_6.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.9,-81.2,161.6,162.2);


(lib.sprite74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ16();
	this.instance.setTransform(305.4,22.3);
	this.instance.alpha = 0.34;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(35));

	// Layer 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(38.1,-0.5);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(75.5,0.5);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-32,98,63);


(lib.sprite35копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(-4.6,-8.7,1,1,0,0,0,0,-10.8);
	this.instance.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance.cache(-40,-37,80,75);

	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(-7.3,-9.5,1,1,0,0,0,3.8,-12.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_1.cache(-34,-36,69,71);

	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(-4.9,-8.1,1,1,0,0,0,2.1,-8.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_2.cache(-34,-41,68,82);

	this.instance_3 = new lib.Символ41();
	this.instance_3.setTransform(-7.4,-9.1,1,1,0,0,0,1.1,-8.6);
	this.instance_3.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_3.cache(-37,-40,74,79);

	this.instance_4 = new lib.Символ42();
	this.instance_4.setTransform(-2.2,-8.1,1,1,0,0,0,0,-7.2);
	this.instance_4.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_4.cache(-42,-42,84,84);

	this.instance_5 = new lib.Символ43();
	this.instance_5.setTransform(1.7,-7.6,1,1,0,0,0,0,-7.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_5.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_5.cache(-49,-42,98,84);

	this.instance_6 = new lib.Символ44();
	this.instance_6.setTransform(1.6,-9.5,1,1,0,0,0,0,-8.3);
	this.instance_6.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_6.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_6.cache(-49,-39,98,79);

	this.instance_7 = new lib.Символ45();
	this.instance_7.setTransform(-2.3,-9,1,1,0,0,0,0,-10.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_7.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_7.cache(-43,-38,86,76);

	this.instance_8 = new lib.Символ46();
	this.instance_8.setTransform(0.8,-8.3,1,1,0,0,0,0,-16.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_8.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_8.cache(-46,-32,93,64);

	this.instance_9 = new lib.Символ47();
	this.instance_9.setTransform(0.5,-8.6,1,1,0,0,0,0,-17.7);
	this.instance_9.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_9.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_9.cache(-47,-31,94,62);

	this.instance_10 = new lib.Символ48();
	this.instance_10.setTransform(11.3,-8.6,1,1,0,0,0,0,-22.5);
	this.instance_10.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_10.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_10.cache(-53,-26,107,52);

	this.instance_11 = new lib.Символ49();
	this.instance_11.setTransform(-0.1,-7.5,1,1,0,0,0,-0.1,-22.4);
	this.instance_11.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_11.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_11.cache(-44,-27,87,54);

	this.instance_12 = new lib.Символ50();
	this.instance_12.setTransform(-1.2,-8.6,1,1,0,0,0,0,-21.2);
	this.instance_12.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_12.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_12.cache(-45,-27,91,55);

	this.instance_13 = new lib.Символ51();
	this.instance_13.setTransform(9.1,-9.1,1,1,0,0,0,0,-19.6);
	this.instance_13.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_13.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_13.cache(-54,-28,109,57);

	this.instance_14 = new lib.Символ52();
	this.instance_14.setTransform(0.7,-8.5,1,1,0,0,0,0,-15.8);
	this.instance_14.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);
	this.instance_14.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(2, 0, 0, -18))];
	this.instance_14.cache(-46,-33,92,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-57.4,127,122);


(lib.sprite35копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(1.7,-7.6,1,1,0,0,0,0,-7.8);
	this.instance.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(1.6,-9.5,1,1,0,0,0,0,-8.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(-2.3,-9,1,1,0,0,0,0,-10.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_3 = new lib.Символ46();
	this.instance_3.setTransform(0.8,-8.3,1,1,0,0,0,0,-16.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_4 = new lib.Символ47();
	this.instance_4.setTransform(0.5,-8.6,1,1,0,0,0,0,-17.7);
	this.instance_4.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_5 = new lib.Символ48();
	this.instance_5.setTransform(11.3,-8.6,1,1,0,0,0,0,-22.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_6 = new lib.Символ49();
	this.instance_6.setTransform(-0.1,-7.5,1,1,0,0,0,-0.1,-22.4);
	this.instance_6.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_7 = new lib.Символ50();
	this.instance_7.setTransform(-1.2,-8.6,1,1,0,0,0,0,-21.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_8 = new lib.Символ51();
	this.instance_8.setTransform(9.1,-9.1,1,1,0,0,0,0,-19.6);
	this.instance_8.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_9 = new lib.Символ52();
	this.instance_9.setTransform(0.7,-8.5,1,1,0,0,0,0,-15.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_10 = new lib.Символ38();
	this.instance_10.setTransform(-4.6,-8.7,1,1,0,0,0,0,-10.8);
	this.instance_10.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_11 = new lib.Символ39();
	this.instance_11.setTransform(-7.3,-9.5,1,1,0,0,0,3.8,-12.2);
	this.instance_11.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_12 = new lib.Символ40();
	this.instance_12.setTransform(-4.9,-8.1,1,1,0,0,0,2.1,-8.1);
	this.instance_12.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_13 = new lib.Символ41();
	this.instance_13.setTransform(-7.4,-9.1,1,1,0,0,0,1.1,-8.6);
	this.instance_13.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_14 = new lib.Символ42();
	this.instance_14.setTransform(-2.2,-8.1,1,1,0,0,0,0,-7.2);
	this.instance_14.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.4,-63.6,145,130);


(lib.sprite35копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(-4.6,-8.7,1,1,0,0,0,0,-10.8);
	this.instance.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(-7.3,-9.5,1,1,0,0,0,3.8,-12.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(-4.9,-8.1,1,1,0,0,0,2.1,-8.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_3 = new lib.Символ41();
	this.instance_3.setTransform(-7.4,-9.1,1,1,0,0,0,1.1,-8.6);
	this.instance_3.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_4 = new lib.Символ42();
	this.instance_4.setTransform(-2.2,-8.1,1,1,0,0,0,0,-7.2);
	this.instance_4.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_5 = new lib.Символ43();
	this.instance_5.setTransform(1.7,-7.6,1,1,0,0,0,0,-7.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_6 = new lib.Символ44();
	this.instance_6.setTransform(1.6,-9.5,1,1,0,0,0,0,-8.3);
	this.instance_6.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_7 = new lib.Символ45();
	this.instance_7.setTransform(-2.3,-9,1,1,0,0,0,0,-10.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_8 = new lib.Символ46();
	this.instance_8.setTransform(0.8,-8.3,1,1,0,0,0,0,-16.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_9 = new lib.Символ47();
	this.instance_9.setTransform(0.5,-8.6,1,1,0,0,0,0,-17.7);
	this.instance_9.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_10 = new lib.Символ48();
	this.instance_10.setTransform(11.3,-8.6,1,1,0,0,0,0,-22.5);
	this.instance_10.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_11 = new lib.Символ49();
	this.instance_11.setTransform(-0.1,-7.5,1,1,0,0,0,-0.1,-22.4);
	this.instance_11.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_12 = new lib.Символ50();
	this.instance_12.setTransform(-1.2,-8.6,1,1,0,0,0,0,-21.2);
	this.instance_12.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_13 = new lib.Символ51();
	this.instance_13.setTransform(9.1,-9.1,1,1,0,0,0,0,-19.6);
	this.instance_13.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.instance_14 = new lib.Символ52();
	this.instance_14.setTransform(0.7,-8.5,1,1,0,0,0,0,-15.8);
	this.instance_14.shadow = new cjs.Shadow("rgba(225,132,3,1)",0,0,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-57.4,127,122);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4_1();
	this.instance.setTransform(-1.2,20.4,1,1,0,0,0,-1.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({rotation:0.1},0).wait(2).to({rotation:0.2,x:0.1},0).wait(1).to({rotation:0.3,y:0.1},0).wait(1).to({rotation:0.5,x:0.2},0).wait(1).to({rotation:0.6},0).wait(1).to({rotation:0.8,x:0.3,y:0.2},0).wait(1).to({rotation:1,x:0.4},0).wait(1).to({rotation:1.3,x:0.5,y:0.3},0).wait(1).to({rotation:1.5,x:0.6},0).wait(1).to({rotation:1.8,x:0.7,y:0.4},0).wait(1).to({rotation:2.2,x:0.8,y:0.5},0).wait(1).to({regX:-1.2,regY:20.6,rotation:2.5,x:-1.2,y:21},0).wait(1).to({regX:0,regY:0,rotation:2.9,x:1,y:0.4},0).wait(1).to({rotation:3.2,x:1.1,y:0.5},0).wait(1).to({rotation:3.5,x:1.2},0).wait(1).to({rotation:3.8,x:1.3,y:0.6},0).wait(1).to({rotation:4,x:1.4},0).wait(1).to({rotation:4.2,x:1.5},0).wait(1).to({rotation:4.4,x:1.6},0).wait(1).to({rotation:4.6,x:1.7,y:0.7},0).wait(1).to({rotation:4.8},0).wait(1).to({rotation:4.9,x:1.8},0).wait(1).to({rotation:5},0).wait(1).to({rotation:5.1},0).wait(1).to({rotation:5.2},0).wait(1).to({x:1.9},0).wait(1).to({regX:-1.2,regY:20.4,x:-1.2,y:21.1},0).wait(1).to({regX:0,regY:0,x:1.8,y:0.9},0).wait(2).to({rotation:5.1},0).wait(1).to({rotation:5},0).wait(1).to({rotation:4.9,y:0.8},0).wait(1).to({rotation:4.8,x:1.7},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:4.5,x:1.6},0).wait(1).to({rotation:4.3,x:1.5,y:0.7},0).wait(1).to({rotation:4},0).wait(1).to({rotation:3.8,x:1.4,y:0.6},0).wait(1).to({rotation:3.5,x:1.3},0).wait(1).to({rotation:3.2,x:1.2,y:0.5},0).wait(1).to({rotation:2.9,x:1.1},0).wait(1).to({regX:-1.2,regY:20.4,rotation:2.5,x:-1.1,y:20.8},0).wait(1).to({regX:0,regY:0,rotation:2.2,x:0.8,y:0.3},0).wait(1).to({rotation:1.9,x:0.7},0).wait(1).to({rotation:1.6,x:0.6},0).wait(1).to({rotation:1.4,x:0.5,y:0.2},0).wait(1).to({rotation:1.1,x:0.4},0).wait(1).to({rotation:0.9,x:0.3,y:0.1},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0.6,x:0.2},0).wait(1).to({rotation:0.4},0).wait(1).to({rotation:0.3,x:0.1,y:0},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.1,x:0},0).wait(1).to({rotation:0},0).wait(2).to({regX:-1.2,regY:20.4,x:-1.2,y:20.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-25.5,45,51);


(lib.sprite15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape14("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-5.6,198.2,12.1);


(lib.sprite12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape11("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-6,15.1,12.8);


(lib.Layer3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol28();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:0.1},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.5},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1.1},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:1.8},0).wait(1).to({rotation:2.2,x:0.1},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:3.7},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:5.4},0).wait(1).to({rotation:6},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:6.9,x:0.2},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:7.6},0).wait(1).to({rotation:8},0).wait(1).to({rotation:8.2},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:8.8},0).wait(1).to({rotation:8.9},0).wait(1).to({rotation:9},0).wait(3).to({rotation:8.9},0).wait(1).to({rotation:8.8},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:8.2},0).wait(1).to({rotation:8},0).wait(1).to({rotation:7.7},0).wait(1).to({rotation:7.3},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:6.5,x:0.1},0).wait(1).to({rotation:6},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:4.3,y:0.1},0).wait(1).to({rotation:3.8,y:0},0).wait(1).to({rotation:3.2},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:2.3},0).wait(1).to({rotation:1.9,x:0},0).wait(1).to({rotation:1.6},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:0.9},0).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0.5},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0.1},0).wait(1).to({rotation:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-18,15,36);


(lib.Group1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol27();
	this.instance.setTransform(2.5,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.9,regY:0.8,x:4.4,y:-96.6},0).wait(2).to({y:-96.5},0).wait(1).to({y:-96.4},0).wait(1).to({y:-96.3},0).wait(1).to({y:-96.2},0).wait(1).to({y:-96},0).wait(1).to({y:-95.8},0).wait(1).to({y:-95.6},0).wait(1).to({y:-95.3},0).wait(1).to({y:-95.1},0).wait(1).to({y:-94.8},0).wait(1).to({y:-94.5},0).wait(1).to({regX:0,regY:0,x:2.5,y:-94.9},0).wait(1).to({regX:1.9,regY:0.8,x:4.4,y:-93.8},0).wait(1).to({y:-93.4},0).wait(1).to({y:-93.1},0).wait(1).to({y:-92.9},0).wait(1).to({y:-92.6},0).wait(1).to({y:-92.4},0).wait(1).to({y:-92.2},0).wait(1).to({y:-92},0).wait(1).to({y:-91.8},0).wait(1).to({y:-91.7},0).wait(1).to({y:-91.6},0).wait(1).to({y:-91.5},0).wait(1).to({y:-91.4},0).wait(2).to({regX:0,regY:0,x:2.5,y:-92.2},0).wait(1).to({regX:1.9,regY:0.8,x:4.4,y:-91.4},0).wait(2).to({y:-91.5},0).wait(1).to({y:-91.6},0).wait(1).to({y:-91.7},0).wait(1).to({y:-91.8},0).wait(1).to({y:-92},0).wait(1).to({y:-92.1},0).wait(1).to({y:-92.3},0).wait(1).to({y:-92.6},0).wait(1).to({y:-92.8},0).wait(1).to({y:-93.1},0).wait(1).to({y:-93.4},0).wait(1).to({y:-93.7},0).wait(1).to({regX:0,regY:0,x:2.5,y:-94.8},0).wait(1).to({regX:1.9,regY:0.8,x:4.4,y:-94.3},0).wait(1).to({y:-94.7},0).wait(1).to({y:-95},0).wait(1).to({y:-95.2},0).wait(1).to({y:-95.5},0).wait(1).to({y:-95.7},0).wait(1).to({y:-95.9},0).wait(1).to({y:-96.1},0).wait(1).to({y:-96.2},0).wait(1).to({y:-96.4},0).wait(1).to({y:-96.5},0).wait(2).to({y:-96.6},0).wait(2).to({regX:0,regY:0,x:2.5,y:-97.5},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.Layer2_1();
	this.instance_1.setTransform(-1,-42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:-42.4},0).wait(1).to({scaleY:1},0).wait(1).to({y:-42.3},0).wait(1).to({y:-42.2},0).wait(1).to({scaleY:1,y:-42.1},0).wait(1).to({y:-41.9},0).wait(1).to({scaleY:1,y:-41.8},0).wait(1).to({scaleY:1,y:-41.6},0).wait(1).to({scaleY:1,y:-41.5},0).wait(1).to({scaleY:0.99,y:-41.3},0).wait(1).to({y:-41},0).wait(1).to({scaleY:0.99,y:-40.8},0).wait(1).to({scaleY:0.99,y:-40.6},0).wait(1).to({scaleY:0.99,y:-40.3},0).wait(1).to({y:-40.1},0).wait(1).to({scaleY:0.99,y:-39.9},0).wait(1).to({scaleY:0.99,y:-39.8},0).wait(1).to({scaleY:0.99,y:-39.6},0).wait(1).to({y:-39.5},0).wait(1).to({scaleY:0.99,y:-39.4},0).wait(1).to({y:-39.2},0).wait(1).to({scaleY:0.99},0).wait(1).to({y:-39.1},0).wait(1).to({y:-39},0).wait(2).to({scaleY:0.98},0).wait(1).to({y:-38.9},0).wait(1).to({y:-39},0).wait(1).to({scaleY:0.99},0).wait(2).to({y:-39.1},0).wait(2).to({scaleY:0.99,y:-39.2},0).wait(1).to({y:-39.3},0).wait(1).to({scaleY:0.99,y:-39.4},0).wait(1).to({y:-39.6},0).wait(1).to({scaleY:0.99,y:-39.7},0).wait(1).to({scaleY:0.99,y:-39.9},0).wait(1).to({y:-40.1},0).wait(1).to({scaleY:0.99,y:-40.3},0).wait(1).to({scaleY:0.99,y:-40.5},0).wait(1).to({scaleY:0.99,y:-40.7},0).wait(1).to({scaleY:0.99,y:-40.9},0).wait(1).to({scaleY:0.99,y:-41.1},0).wait(1).to({scaleY:1,y:-41.3},0).wait(1).to({scaleY:1,y:-41.5},0).wait(1).to({scaleY:1,y:-41.7},0).wait(1).to({y:-41.9},0).wait(1).to({scaleY:1,y:-42},0).wait(1).to({y:-42.1},0).wait(1).to({scaleY:1,y:-42.2},0).wait(1).to({y:-42.3},0).wait(1).to({y:-42.4},0).wait(1).to({scaleY:1},0).wait(1).to({y:-42.5},0).wait(3));

	// Layer 3
	this.instance_2 = new lib.Layer3_1();
	this.instance_2.setTransform(-29.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0.2,x:-29.3},0).wait(13).to({regX:0,x:-29.5},0).wait(1).to({regX:0.2,x:-29.3},0).wait(14).to({regX:0,x:-29.5},0).wait(1).to({regX:0.2,x:-29.3},0).wait(14).to({regX:0,x:-29.5},0).wait(1).to({regX:0.2,x:-29.3},0).wait(14).to({regX:0,x:-29.5},0).wait(1));

	// Layer 1
	this.instance_3 = new lib.Layer1_1();
	this.instance_3.setTransform(12.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-123,104,246);


(lib.Символ35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(154,117.7,0.496,0.366,0,134.1,-30.1);
	this.instance_1.alpha = 0.41;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_1.cache(-5,-5,10,10);

	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(158.7,111,0.484,0.258,0,149.1,-2.2);
	this.instance_2.alpha = 0.781;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_2.cache(-5,-5,10,10);

	this.instance_3 = new lib.Символ36();
	this.instance_3.setTransform(153.3,111.1,0.569,0.342,0,106.6,-99.5);
	this.instance_3.alpha = 0.41;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_3.cache(-5,-5,10,10);

	this.instance_4 = new lib.копияСимвол3();
	this.instance_4.setTransform(160.3,116.8,0.255,0.212,0,26.7,-147.7);
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).wait(20));

	// Слой 1
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(145.1,132.7,0.572,0.572,0,0,0,52,83.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:83.9,rotation:-4.5},0).wait(1).to({regY:83.8,rotation:0},0).wait(1).to({regY:83.9,rotation:-4.5},0).wait(1).to({regY:83.8,rotation:0},0).wait(1).to({regY:83.9,rotation:-4.5},0).wait(1).to({regY:83.8,rotation:0},0).wait(1).to({regY:83.9,rotation:-4.5},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.4,84.7,83.7,96);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_4 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(43.7,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.8},4).to({y:52.8},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:47},4).to({y:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.3,-12.8,324.3,73.5);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35_1();
	this.instance.setTransform(-115.3,-84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({y:-3.7},3).wait(20).to({y:-84.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.7,96);


(lib.Символ13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.sprite74();
	this.instance_2.setTransform(37.9,5.9,0.342,0.238,-173.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,-5,35,18.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_5 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.42,scaleY:1.42,x:-30,y:18.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-77,249,162);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(-2.1,3.9);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(-2.1,3.9);
	this.instance_1.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3472.1,-946.1,11600,3850);


(lib.sprite16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-5.6,198.2,12.1);


(lib.sprite17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite16();
	this.instance.setTransform(50.4,-6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2).to({_off:false,scaleX:1.37,scaleY:1.37,rotation:15,x:79.7,y:21},0).wait(1).to({scaleX:1.43,rotation:-11,x:82.7,y:-31.3},0).to({_off:true},1).wait(4).to({_off:false,scaleX:1.24,scaleY:2.54,rotation:-4.8,x:68.2,y:-24.8},0).wait(1).to({rotation:13,x:70.9,y:7.2},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.9,-12,198.2,12.1);


(lib.sprite18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.sprite17();
	this.instance.setTransform(33.2,-0.3);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Layer 9
	this.instance_1 = new lib.копияshape13("synched",0);
	this.instance_1.setTransform(0.1,0,0.673,0.673);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2).to({_off:false,scaleX:1,scaleY:1,x:0},0).to({_off:true},1).wait(2));

	// Layer 7
	this.instance_2 = new lib.sprite12();
	this.instance_2.setTransform(-5,-7,0.852,0.852,-90);
	this.instance_2.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_2.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:-7.5,y:-10.3},0).to({_off:true},1).wait(2));

	// Layer 5
	this.instance_3 = new lib.sprite12();
	this.instance_3.setTransform(5.6,7,0.852,0.852,90);
	this.instance_3.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_3.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:8.2,y:10.4},0).to({_off:true},1).wait(2));

	// Layer 3
	this.instance_4 = new lib.sprite12();
	this.instance_4.setTransform(-6.7,5.3,0.852,0.852,180);
	this.instance_4.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_4.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:-10,y:7.9},0).to({_off:true},1).wait(2));

	// Layer 1
	this.instance_5 = new lib.sprite12();
	this.instance_5.setTransform(7.3,-5.3,0.852,0.852);
	this.instance_5.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_5.cache(-10,-8,19,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(2).to({_off:false,scaleX:1.27,scaleY:1.27,x:10.6,y:-7.8},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-25.2,223.4,50.4);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite18();
	this.instance.setTransform(-14,-5.8,0.76,0.76,0,170.5,-9.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(45).to({_off:true},1).wait(60));

	// Layer 2
	this.instance_1 = new lib.Group1();
	this.instance_1.setTransform(-26.2,79,0.409,0.409,0,-0.6,179.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:22},14).wait(45).to({y:79},14).to({_off:true},1).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,28.5,42.6,101);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.sprite35копия3();
	this.instance.setTransform(143.2,-12.1,0.299,0.299);
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.sprite35копия2();
	this.instance_1.setTransform(5.4,-94.2,0.288,0.288);
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.sprite35копия();
	this.instance_2.setTransform(-63.4,-71.4,0.831,0.831);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnmCNIiYAFQgeACgDADQgCACgDAAQguAAgUgdQgfgwgPgLQgOgKgSgiQgSggAAgQQAAhLCvg7QDYAaJ3g/QJ5g/AUCJQATCIiZA9QiZA8A+A/QAWAWh+AAQjtAAr1hNg");
	mask.setTransform(263.5,-13.9);

	// Слой 5
	this.instance_3 = new lib.Symbol32();
	this.instance_3.setTransform(203.4,12.4,0.569,0.569,1.8,0,0,-26.3,44.3);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ13_1();
	this.instance_4.setTransform(360.3,20.8,1,1,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAlC0QgYgGirgjQg6gMAAgbQAAgQAmgwIAqgzQAIgTAGgsQAJgnAegRQCYhUBWBHQAfAaARArQAOAiAAAdQAABLgEAcQgMBCgnAag");
	mask_1.setTransform(89.9,-100.9);

	// Слой 3
	this.instance_5 = new lib.Символ25();
	this.instance_5.setTransform(63.9,-106.8,0.381,0.381,0,0,0,-15.8,5.8);

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 1
	this.instance_6 = new lib.back();
	this.instance_6.setTransform(1252,-200,1.015,1,0,0,180);

	this.instance_7 = new lib.back();
	this.instance_7.setTransform(-175.5,-200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.5,-200,1427.5,400);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}
	this.frame_8 = function() {
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(9));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(171.1,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.77,scaleY:1.77,x:113.9,y:203},8).to({scaleX:1,scaleY:1,x:171.1,y:140},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-60,1427.5,400);


// stage content:



(lib.firesnip_rutracker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		function getWindowSize() { 
		                return {
				width: Math.min(document.documentElement.clientWidth,       window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight,    window.innerHeight || 0)
		                }
		}
		window._setCanvasSize = function() {
				var windowSize = getWindowSize();
				stage.canvas.style.width = windowSize.width + 'px';
				stage.canvas.style.height = 120 + 'px';
				stage.canvas.width = windowSize.width;
				stage.canvas.height = 120;
					
				_this.hp.x = windowSize.width;
				_this.hp.y = 120;	
			
			_this.txt.x = 0;
			_this.txt.y = 120;
			
			_this.gun.x = windowSize.width - (windowSize.width/3);
			_this.gun.y = 120;	
			
		}
		
		window.onresize=function(){_setCanvasSize();}
		
		this.movieClip_1.visible = false;
		this.gun.visible = true;
		
		
		stage.canvas.style.cursor = "none";
		this.movieClip_1.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.movieClip_1.x = stage.mouseX;
			this.movieClip_1.y = stage.mouseY;
		}
		
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.movieClip_1.visible = true;
		    this.gun.visible = false;
			this.back.gotoAndPlay(1);
			this.txt.gotoAndPlay(1);
		}
		
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.movieClip_1.visible = false;
		    this.gun.visible = true;
			this.back.gotoAndPlay(9);
			this.txt.gotoAndPlay(5);
		
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		this.back.x = - stage.mouseX / 10;
		this.back.y = - stage.mouseY / 10;
		}
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		
		window.onresize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.hp = new lib.Символ13();
	this.hp.setTransform(634.2,118.1,0.801,0.801,0,0,0,530.6,-60.4);

	this.timeline.addTween(cjs.Tween.get(this.hp).wait(1));

	// gun
	this.gun = new lib.Символ7();
	this.gun.setTransform(498.1,118.1,0.585,0.585,0,0,0,3.4,64.2);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// Слой 6
	this.txt = new lib.Символ30();
	this.txt.setTransform(2,118.1,0.778,0.778,0,0,0,-171.4,17.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 3
	this.instance = new lib.Символ28();
	this.instance.setTransform(349.2,120.4,5.539,1.484);
	this.instance.alpha = 0.238;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pricel
	this.movieClip_1 = new lib.Символ5();
	this.movieClip_1.setTransform(395,36.6,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// Слой 4
	this.back = new lib.Символ8();
	this.back.setTransform(-156.3,-15.3,1.905,1.905);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2104.1,-671.3,9415.1,3124.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
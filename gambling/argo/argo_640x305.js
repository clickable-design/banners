(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bib.jpg?1469014652058", id:"bib"},
		{src:"images/bob.jpg?1469014652058", id:"bob"},
		{src:"images/bonus.png?1469014652058", id:"bonus"},
		{src:"images/bt_sprites.png?1469014652058", id:"bt_sprites"},
		{src:"images/chl.jpg?1469014652058", id:"chl"},
		{src:"images/columnsprite.png?1469014652058", id:"columnsprite"},
		{src:"images/columnsprite1.png?1469014652058", id:"columnsprite1"},
		{src:"images/columnsprite3.png?1469014652058", id:"columnsprite3"},
		{src:"images/fon.jpg?1469014652058", id:"fon"},
		{src:"images/fxf.jpg?1469014652058", id:"fxf"},
		{src:"images/gtsdnc.jpg?1469014652058", id:"gtsdnc"},
		{src:"images/hlf.jpg?1469014652058", id:"hlf"},
		{src:"images/jackpot_number.png?1469014652058", id:"jackpot_number"},
		{src:"images/logo.png?1469014652058", id:"logo"},
		{src:"images/rub.png?1469014652058", id:"rub"},
		{src:"images/rull.png?1469014652058", id:"rull"}
	]
};



// symbols:



(lib.bib = function() {
	this.initialize(img.bib);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,100);


(lib.bob = function() {
	this.initialize(img.bob);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,100);


(lib.bonus = function() {
	this.initialize(img.bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,57);


(lib.bt_sprites = function() {
	this.initialize(img.bt_sprites);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,57);


(lib.chl = function() {
	this.initialize(img.chl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,100);


(lib.columnsprite = function() {
	this.initialize(img.columnsprite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,77);


(lib.columnsprite1 = function() {
	this.initialize(img.columnsprite1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,64);


(lib.columnsprite3 = function() {
	this.initialize(img.columnsprite3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,2);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,709,305);


(lib.fxf = function() {
	this.initialize(img.fxf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,100);


(lib.gtsdnc = function() {
	this.initialize(img.gtsdnc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,100);


(lib.hlf = function() {
	this.initialize(img.hlf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,100);


(lib.jackpot_number = function() {
	this.initialize(img.jackpot_number);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,710);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,90);


(lib.rub = function() {
	this.initialize(img.rub);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,57);


(lib.rull = function() {
	this.initialize(img.rull);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,451,170);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg+eAEXIAAotMB89AAAIAAItg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-28,800,56);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gtsdnc();
	this.instance.setTransform(-78,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fxf();
	this.instance.setTransform(-78,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hlf();
	this.instance.setTransform(-78,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-354.5,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.5,-152.5,709,305);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bob();
	this.instance.setTransform(-78,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chl();
	this.instance.setTransform(-78,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bib();
	this.instance.setTransform(-78,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,183,0,0)","#FFFF33","rgba(255,255,51,0)"],[0,0.447,1],-16.7,-11.9,16.8,12).s().p("EgswA5UMBURh2WIFQDvMhURB2Wg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.5,-390.8,573.1,781.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF33").s().p("A1KDKIgGgDIgEgDIAAgEIAAgEIAAAAIAAgBQgCgFgJgDIgIgIQgDgDgIgEQgFgDgFgGIgEgFQgCgEACgDIAEgFIAAgDIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgBIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIAAgDIAAgEIAAgEIAAgDIAAgFIAAgDIAAgEIAAgDIAAgFIAAgDIAAgEIAAgEIACgDIADgDIAFAAIAAgBIABAAIAagZQABgCADgBIAEgCIABAAIABgBIADgDIAFAAIAAgBIAGADMAqFAACIAAAAIAAAAQAEgEAEAAQABAAAAABQABAAAAAAQAAAAAAAAQAAgBAAAAQAHABACAGQACAEgDACQAFAAAGADIAKAHIAIAGIAHAGIABACIABAAIACADIACAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAADIAAAEIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAACIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAADIAAAFIAAADIAAAEIAAAEIAAADIAAAEIAAAEIAAAEIAAAEIAAADIAAAEIAAADIgBACIgBAEIgBACIgCACIgBABQgDADgFACIgDACIgFAHQgCAFgFAEIgHAFIgEAGIgHAGIgCADIgGADMgqVAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-20.2,282.1,40.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFcBdIAAi3IAvAAIAAA3IAiAAQALAAASAGQAMAFAIAJQAJAJAEAKQAEAMAAAMQAAANgEALQgEALgJAJQgIAKgMAFQgSAGgLAAgAGLAzIAiAAQAJAAAGgIQAFgHAAgIQAAgJgFgHQgGgGgJAAIgiAAgADnBdIAAiMIgtAAIAAgrICJAAIAAArIgtAAIAACMgACGBdIgLgXIhFAAIgLAXIgxAAIAAgGIBTizIAWAAIBUCzIAAAGgABrAdIgTgrIgTArIAmAAgAknBdIAAi3IBzAAIAAArIhDAAIAACMgAl/BdIAAhdIhhBdIgOAAIAAi3IAwAAIAABaIBghbIAPAAIAAC4gAicBcIAAi2IBSAAQAIgBAHACQAHACAHACQAMAGAJAKQAIAKAEANQAEAMAAANQAAANgEAKQgFANgIAJQgJAJgMAFQgSAHgKAAIgiAAIAAAvgAhsACIAiAAQAJAAAFgGQAGgHAAgLQAAgLgFgHQgGgJgJAAIgiAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006633").s().p("AFcBdIAAi3IAvAAIAAA3IAiAAQALAAASAGQAMAFAIAJQAJAJAEAKQAEAMAAAMQAAANgEALQgEALgJAJQgIAKgMAFQgSAGgLAAgAGLAzIAiAAQAJAAAGgIQAFgHAAgIQAAgJgFgHQgGgGgJAAIgiAAgADnBdIAAiMIgtAAIAAgrICJAAIAAArIgtAAIAACMgACGBdIgLgXIhFAAIgLAXIgxAAIAAgGIBTizIAWAAIBUCzIAAAGgABrAdIgTgrIgTArIAmAAgAknBdIAAi3IBzAAIAAArIhDAAIAACMgAl/BdIAAhdIhhBdIgOAAIAAi3IAwAAIAABaIBghbIAPAAIAAC4gAicBcIAAi2IBSAAQAIgBAHACQAHACAHACQAMAGAJAKQAIAKAEANQAEAMAAANQAAANgEAKQgFANgIAJQgJAJgMAFQgSAHgKAAIgiAAIAAAvgAhsACIAiAAQAJAAAFgGQAGgHAAgLQAAgLgFgHQgGgJgJAAIgiAAg");
	this.shape_1.setTransform(1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-9.3,100.2,19.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rub();
	this.instance.setTransform(-218.5,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.5,-28.5,437,57);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("ArcCzQgIgCgPgHIgLgCQgGgBgEgCQgGgDgGgHIgLgKIgHgFIgHgFQgDgFgBgMIgFhDQAAgIACgDQADgCAGAAQATAAASADQAKACAEADQAGAGAAALIAAATQABALAHAJQAKAMAKgFQAHgFAAgPIABgrQAAgHgCgDQgCgCgHgCIgTgFQgHgCgDgEQgCgCgBgIIgDggQgBgHACgFQADgHAHABQgBAAAAgBQAAAAAAAAQgBgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAEgBAFADQAGADACAAQAEAAAFgFQAFgFAEAAIAAgoQAAgGgBgDQgEgGgPADQgLAEgDAEQgCAEgBAGIgDAUQgBAHgEAAIgBAAIgEAAIgFgBIggAAIgEABQgFABgCgCQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgFIABAAIgBgGIgBgXQgBgOADgLQABgGAHgNQAFgKAFgEQAEgDAJgFIALgIQADgCAKgCQAJgCAEgDQANAAAgAGQAVAEAJAIQAIAGAIATQAHARABALIgBASIgEAjQgEAggOAIQACAGAGAJQAIAHACAFQADAFADAPQALBCgQAmQgHAQgJAGIgQAHIgRAMQgKAFgKAAQgGAAgGgCgAAGCvQgHgBgFgCIgJgHQgIgIgFgJIgGgHIgGgGIgGgJIgDgFQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAAAIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIgDgBIgCgCIAAgCIAAgCIACgCIABAAIAAgDIAEgEQABgCAAgEQAAgDAFgFIAbgZQALgLARAAQAIAAACgBIAAgBQAFABAQgBQAMAAAIACQAHADAJAHIAOALQAKAIAEAFQADAFACAFIACAAIAAgBIADACIACACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIABACIABACIABABIAAAAIAAAGIgBAJQgBAEgIAJIgIAHQgHADgCACIgGAHQgDADgFADIgLAFIgIAGIgNACIgEAAQgSAAgagEgAAThqQACAFgEADIgDABIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAAAIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAABIABADIADAFIADACQADAAACADIAGAFIACgBQAKgDAJgFQABgBABAAQAAAAABgBQAAAAAAAAQABgBAAAAIAAgCIACgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAAAIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAAAIAAgCIgFgDIgNgHIgCgCIgDAAQgMAAgFACgAmaCsQgIgBgFgCIgKgHQgIgIgFgJIgGgHIgGgGIgFgJIgDgFQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIgDgBIgCgCIAAgCIAAgCIACgCIABAAIABgDIADgEIABgGQABgDAEgFIAbgZQAMgLASAAQAJAAACgBIAAgBQAFABAPgBQANAAAHACQAHADAKAHIAOALQAKAIADAFQAEAFACAFIACAAIAAgBIADACIABACIABABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAAAIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIACACIAAABIAAAAIABAGIgBAJQgBAEgIAJIgJAHQgGADgDACIgFAHQgDADgGADIgKAFIgJAGIgNACIgEAAQgRAAgbgEgAmMhtQABAFgDADIgDABIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAABIABADIADAFIADACQACAAACADIAGAFIADgBQAJgDAKgFQAAgBABAAQABAAAAgBQABAAAAAAQAAgBAAAAIABgCIABgBIABgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAAAIgBgCIgEgDIgNgHIgDgCIgDAAQgLAAgFACgAK+CqQgJgBgFgDIgJgHQgIgIgFgIIgGgIIgGgFIgGgJIgDgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIgDgBIgCgCIAAgCIAAgBIACgCIABgBIAAgDIAEgEIABgGQAAgDAFgEIAbgZQAMgLASAAQAIAAACgCIAAAAQAFABAQgBQAMgBAIADQAHACAJAIIAOAKQAKAIAEAGQADAEACAGIACAAIAAgBIADABIACACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIABACIABACIABABIAAABIAAAGIgBAIQgBAEgIAJIgIAHQgHADgCADIgGAGQgDAEgFADIgLAFIgIAFIgNADIgEAAQgSAAgagEgALLhvQACAFgEACIgDACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAAAIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIABACIADAFIADACQADABACADIAGAEIACAAQAKgDAJgGQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIAAgBIACgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAAAIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgBIgFgEIgNgGIgCgCIgDgBQgMAAgFADgAFzCqQgJgBgFgDIgJgHQgIgIgFgIIgGgIIgGgFIgGgJIgDgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIgDgBIgCgCIAAgCIAAgBIACgCIABgBIAAgDIAEgEIABgGQAAgDAFgEIAbgZQAMgLASAAQAIAAACgCIAAAAQAFABAQgBQAMgBAIADQAHACAJAIIAOAKQAKAIAEAGQADAEACAGIACAAIAAgBIADABIACACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIABACIABACIABABIAAABIAAAGIgBAIQgBAEgIAJIgIAHQgHADgCADIgGAGQgDAEgFADIgLAFIgIAFIgNADIgEAAQgSAAgagEgAGAhvQACAFgEACIgDACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAAAIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAABIABACIADAFIADACQADABACADIAGAEIACAAQAKgDAJgGQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAgBIAAgBIACgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAAAIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgBIgFgEIgNgGIgCgCIgDgBQgMAAgFADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-18.2,164.8,36.3);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg7WAakMAAAg1HMB2tAAAMAAAA1Hg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-380,-170,760,340);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.bonus();
	this.instance.setTransform(-187.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-36.5,375,57);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jackpot_number();
	this.instance.setTransform(-15,-355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-355,30,710);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bt_sprites();
	this.instance.setTransform(-150,-28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-28.5,300,57);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-130,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-45,260,90);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rull();
	this.instance.setTransform(-224.5,186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.5,186,451,170);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.692,0.692,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:15.8},9,cjs.Ease.get(1)).to({rotation:19.9},10,cjs.Ease.get(-1)).to({rotation:16},10,cjs.Ease.get(1)).to({rotation:12.2},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-45.3,120.2,90.6);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.9},14,cjs.Ease.get(-1)).to({y:10},15,cjs.Ease.get(1)).to({y:5},15,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-45.3,120.2,90.6);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.4,y:8.7},14,cjs.Ease.get(-1)).to({x:7.1,y:18},15,cjs.Ease.get(1)).to({x:3.5,y:9},15,cjs.Ease.get(-1)).to({x:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.05,scaleY:1.05},7,cjs.Ease.get(-1)).to({scaleX:1.1,scaleY:1.1},7,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.5,-152.5,709,305);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(0,0,0.702,0.702,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:14.1,x:4.5},16,cjs.Ease.get(-1)).to({rotation:14.2,x:10},17,cjs.Ease.get(1)).to({rotation:14.1,x:6},16,cjs.Ease.get(-1)).to({rotation:14.2,x:0},18,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-47.5,123.4,95);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.7},9,cjs.Ease.get(-1)).to({y:-10},10,cjs.Ease.get(1)).to({y:-5},10,cjs.Ease.get(-1)).to({y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-47.5,123.4,95);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:8.6,y:-4.4},14,cjs.Ease.get(-1)).to({x:17.7,y:-9.2},15,cjs.Ease.get(1)).to({x:8.9,y:-4.6},15,cjs.Ease.get(-1)).to({x:0,y:0},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.5,y:-6.8},7,cjs.Ease.get(-1)).to({x:3,y:-13.6},7,cjs.Ease.get(1)).to({x:1.4,y:-6.3},8,cjs.Ease.get(-1)).to({x:0,y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ27копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).to({x:258,y:174.2},43).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:258,y:174.2},43).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.5,-390.7,573.1,781.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(0,10.3,1.272,1.272);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:12.2},14,cjs.Ease.get(-1)).to({y:14.3},15,cjs.Ease.get(1)).to({y:12.3},15,cjs.Ease.get(-1)).to({y:10.3},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.4,-36.2,476.9,72.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-20.2,282.1,40.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.alpha = 0.371;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-18.2,164.8,36.3);


(lib.Символ12 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ38();
	this.instance.setTransform(336,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},5).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-156.1,709,305);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(-4.4,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},9,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},10,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.9,-33.4,437,57);


(lib.Символ7копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AE9TpIgBABIqBAAIgDgBIAAgBIgIgCIgCgCIgCAAIgCgDIgEgEIgBgDIAAgKIABgEIABgDIABgCIACgCIAHgHIAEgCQAIgGAEAAIAAgBQACgBADADIAEAEIAAAAIAAgBIJ5AAIAAAAIADAAIACAAIADACIACACIAAAAIACABIABAAIADACIABABIABACIACAEIAAADIABACQACADAAAGIgBAHQgCADgHAEIgDAAIgCgBIgBABIgEACIgDADIgDABgAFDr/QgEgBgCgCIp/ABIgDABIgDgBIgCgCIAAgCIAAgCIABAAIgCAAQgHgBgFgGQgHgHAAgKQABgLAIgFIAJgDQAGgCADgDQAFgHADgCQACgDgDgEIgFgGIgDgHIgEgDQgFgGAGgIIAGgHQAIgHACgHIgpgBQgFAAgCgCQgDgFAJgFQAFgCALgBIAQgEQAGgCAPgLQAVgSAOgOQARgRAJgPIAEgGIABgFQABgBAAgBQABAAAAAAQABgBAAAAQABABAAAAIAAAAIAAgCIACgCIADgBIAAAAIHAAAQgBgHAGgBIAAAAQAEAAABAHQAHAeAOAOQAGAGAUAMIA1AgQAJAHAIABIAHABQAFADgCADQgBADgFAAIgcAEQAKAGAAANQAAAKgIALIgHAKQgDAIAHAIQAFAGAKADIAJAEQAEAEAAAIQAAAOgIAJQgIAJgKAAIgEAAgAjDwhIgCgCIAAgBIAAgCIAAgCIAAgCIAAgCIACgBIAAgBIADAAIAAAAIGJAAIADABIABACIABACIgBABIgBACIgDACImFABIgBACIgBABIgCABIgDgCgAjPxTQgFgDgDgHIgGgNIgJgOIgog4IgBgBQgDgGAAgDQAAgHAFABIAAAAQAIABADACIADADIAHADQAcALA6ARIAcAIQATAGAMABIAbAFIAPAFQAIADAHgBIgCgEQgCgDgGgDQgHgDgCgCQgFgEgBgMQAAgMAHgBQACgBAGADQAJADAHgFQgHgJgCgFQgDgJAEgHQACgEAEgBQAFgCADACQADACAEAGQADAFAEACQgBgOAEgQQACgJAFgBIAAAAQAMgCARAFQAJADAEAFQAHAJgDAMIAAAAIAEgGQADgDACABIABgCIAGAAQAFAAACACQACACAAAGIgBAHIgCAEIAAAEIgCAEIgIAQIAAAEIgFAIIADgEQAJgIAGgDQADgBADABQADABAAAEQAAAEgCADQgCAEgJAHQgIAGgCAFIgCAEIAFACQAPAHAfgMIAmgQIAxgVQAcgKAXgEQAUgDAGgFIABAAQACABAFgBQAGAAACABQADABABAEQABADgBAEQgBAEgIAGQgMAIgLAFQgFASgJAQQgFAJgQAVQgCAEgDAAIgGgBQgFgCgHACIgLACQgDABgDgCQgDgCAAgDQgIgFgIAEIgJAGQgGACgHgBQgLAAgBgGIAAgEQgBgCgFAAIgsACQgJAAgCgBQgHgDABgGQgJgDgFgHIgFAHIgDAIQgGAKgMACQgJACgMgDQgNgBgDgHIgBgKQgBgHgFgEIgDgDQgHAOgKAGQgJAFgOAAQgagBgJADQgPAIgJABQgGABgMgCQgNgDgGABIgTAGQgGACgEAAQgEAAgEgBgAAfyFIgDACIAAAAIAAABQACAEACABIABgBIAAgHIgBgBIgBABgAAYyzIgDAIIAEgFIADgGIAAgDIgEAGg");
	mask.setTransform(18.9,206.5);

	// Слой 4
	this.instance = new lib.Символ27копия();
	this.instance.setTransform(-130.7,114.9);
	this.instance.alpha = 0.602;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.columnsprite3();
	this.instance_1.setTransform(-11.5,145,1,82.525);

	this.instance_2 = new lib.columnsprite1();
	this.instance_2.setTransform(-27.5,309.8);

	this.instance_3 = new lib.columnsprite();
	this.instance_3.setTransform(-38.5,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,68,116,305.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AE9TpIgBABIqBAAIgDgBIAAgBIgIgCIgCgCIgCAAIgCgDIgEgEIgBgDIAAgKIABgEIABgDIABgCIACgCIAHgHIAEgCQAIgGAEAAIAAgBQACgBADADIAEAEIAAAAIAAgBIJ5AAIAAAAIADAAIACAAIADACIACACIAAAAIACABIABAAIADACIABABIABACIACAEIAAADIABACQACADAAAGIgBAHQgCADgHAEIgDAAIgCgBIgBABIgEACIgDADIgDABgAFDr/QgEgBgCgCIp/ABIgDABIgDgBIgCgCIAAgCIAAgCIABAAIgCAAQgHgBgFgGQgHgHAAgKQABgLAIgFIAJgDQAGgCADgDQAFgHADgCQACgDgDgEIgFgGIgDgHIgEgDQgFgGAGgIIAGgHQAIgHACgHIgpgBQgFAAgCgCQgDgFAJgFQAFgCALgBIAQgEQAGgCAPgLQAVgSAOgOQARgRAJgPIAEgGIABgFQABgBAAgBQABAAAAAAQABgBAAAAQABABAAAAIAAAAIAAgCIACgCIADgBIAAAAIHAAAQgBgHAGgBIAAAAQAEAAABAHQAHAeAOAOQAGAGAUAMIA1AgQAJAHAIABIAHABQAFADgCADQgBADgFAAIgcAEQAKAGAAANQAAAKgIALIgHAKQgDAIAHAIQAFAGAKADIAJAEQAEAEAAAIQAAAOgIAJQgIAJgKAAIgEAAgAjDwhIgCgCIAAgBIAAgCIAAgCIAAgCIAAgCIACgBIAAgBIADAAIAAAAIGJAAIADABIABACIABACIgBABIgBACIgDACImFABIgBACIgBABIgCABIgDgCgAjPxTQgFgDgDgHIgGgNIgJgOIgog4IgBgBQgDgGAAgDQAAgHAFABIAAAAQAIABADACIADADIAHADQAcALA6ARIAcAIQATAGAMABIAbAFIAPAFQAIADAHgBIgCgEQgCgDgGgDQgHgDgCgCQgFgEgBgMQAAgMAHgBQACgBAGADQAJADAHgFQgHgJgCgFQgDgJAEgHQACgEAEgBQAFgCADACQADACAEAGQADAFAEACQgBgOAEgQQACgJAFgBIAAAAQAMgCARAFQAJADAEAFQAHAJgDAMIAAAAIAEgGQADgDACABIABgCIAGAAQAFAAACACQACACAAAGIgBAHIgCAEIAAAEIgCAEIgIAQIAAAEIgFAIIADgEQAJgIAGgDQADgBADABQADABAAAEQAAAEgCADQgCAEgJAHQgIAGgCAFIgCAEIAFACQAPAHAfgMIAmgQIAxgVQAcgKAXgEQAUgDAGgFIABAAQACABAFgBQAGAAACABQADABABAEQABADgBAEQgBAEgIAGQgMAIgLAFQgFASgJAQQgFAJgQAVQgCAEgDAAIgGgBQgFgCgHACIgLACQgDABgDgCQgDgCAAgDQgIgFgIAEIgJAGQgGACgHgBQgLAAgBgGIAAgEQgBgCgFAAIgsACQgJAAgCgBQgHgDABgGQgJgDgFgHIgFAHIgDAIQgGAKgMACQgJACgMgDQgNgBgDgHIgBgKQgBgHgFgEIgDgDQgHAOgKAGQgJAFgOAAQgagBgJADQgPAIgJABQgGABgMgCQgNgDgGABIgTAGQgGACgEAAQgEAAgEgBgAAfyFIgDACIAAAAIAAABQACAEACABIABgBIAAgHIgBgBIgBABgAAYyzIgDAIIAEgFIADgGIAAgDIgEAGg");
	mask.setTransform(18.9,206.5);

	// Слой 4
	this.instance = new lib.Символ27();
	this.instance.setTransform(-130.7,114.9);
	this.instance.alpha = 0.602;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.columnsprite3();
	this.instance_1.setTransform(-11.5,145,1,82.525);

	this.instance_2 = new lib.columnsprite1();
	this.instance_2.setTransform(-27.5,309.8);

	this.instance_3 = new lib.columnsprite();
	this.instance_3.setTransform(-38.5,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,68,116,305.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,0,0.458,0.458);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-20.6,119.1,41.2);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-28.5,300,57);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(0,-710);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(0,710);

	this.instance_2 = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-1065,30,2130);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ48();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.1,y:9.1},9,cjs.Ease.get(-1)).to({x:6.4,y:19.2},10,cjs.Ease.get(1)).to({x:3.2,y:9.6},10,cjs.Ease.get(-1)).to({x:0,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(11));

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-329.5,-220.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-459.5},9).to({x:-329.5},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7копия();
	this.instance_1.setTransform(290.5,-220.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:420.5},9).to({x:290.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-746.7,-496.7,1114.8,781.6);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(0,0,0.692,0.692,-16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13.1},9,cjs.Ease.get(-1)).to({rotation:-9},10,cjs.Ease.get(1)).to({rotation:-12.8},10,cjs.Ease.get(-1)).to({rotation:-16.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-48.8,123.5,97.7);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.8},7,cjs.Ease.get(-1)).to({rotation:-11.2},7,cjs.Ease.get(1)).to({rotation:-5.1},8).to({rotation:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-50,156,100);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,0,0.702,0.702,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7,rotation:27.3,y:4.9},10,cjs.Ease.get(-1)).to({scaleX:0.7,scaleY:0.7,rotation:27.5,y:10},11,cjs.Ease.get(1)).to({scaleX:0.7,scaleY:0.7,rotation:27.3,y:5},11,cjs.Ease.get(-1)).to({scaleX:0.7,scaleY:0.7,rotation:27.5,y:0},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.8,-56.4,129.6,112.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(0,0,0.702,0.702,-12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-12.1,x:4.8},9,cjs.Ease.get(-1)).to({rotation:-12.2,x:10},10,cjs.Ease.get(1)).to({rotation:-12.1,x:5},10,cjs.Ease.get(-1)).to({rotation:-12.2,x:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-45.8,121.9,91.7);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ33();
	this.instance.setTransform(294.4,221.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 31
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(338,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(292.6,305.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230.9,103.6,172,249.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-20.2,282.1,40.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-1065,30,2130);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(0,0,0.692,0.692,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-49.9,124.4,99.9);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 42
	this.instance = new lib.Символ44();
	this.instance.setTransform(-366,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 41
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(-370,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 43
	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(-340.5,54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.2,-138.8,151.8,238.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.57},6,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).to({alpha:0.465},7,cjs.Ease.get(-1)).to({alpha:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-20.2,282.1,40.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(0.4,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-0.4,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ5_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-28.5,300,57);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.instance = new lib.Символ16();
	this.instance.setTransform(0.3,-108.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({alpha:0.5},3,cjs.Ease.get(-1)).to({alpha:1},3,cjs.Ease.get(1)).to({alpha:0.5},3,cjs.Ease.get(-1)).to({alpha:0},3,cjs.Ease.get(1)).to({alpha:0.5},3,cjs.Ease.get(-1)).to({alpha:1},3,cjs.Ease.get(1)).to({alpha:0.5},3,cjs.Ease.get(-1)).to({alpha:0},3,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 9
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(73.8,212);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({y:62},0).wait(1).to({y:-73.6},0).wait(1).to({y:-174.6},0).wait(1).to({y:-243.4},0).wait(1).to({y:-293.3},0).wait(1).to({y:-332.4},0).wait(1).to({y:-363.2},0).wait(1).to({y:-387.5},0).wait(1).to({y:-406.9},0).wait(1).to({y:-422.8},0).wait(1).to({y:-436.1},0).wait(1).to({y:-447.7},0).wait(1).to({y:-458.2},0).wait(1).to({y:-468.1},0).wait(1).to({y:-477.8},0).wait(1).to({y:-487.7},0).wait(1).to({y:-498},0).wait(30));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(40.3,212);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:62},0).wait(1).to({y:-73.6},0).wait(1).to({y:-174.6},0).wait(1).to({y:-243.4},0).wait(1).to({y:-293.3},0).wait(1).to({y:-332.4},0).wait(1).to({y:-363.2},0).wait(1).to({y:-387.5},0).wait(1).to({y:-406.9},0).wait(1).to({y:-422.8},0).wait(1).to({y:-436.1},0).wait(1).to({y:-447.7},0).wait(1).to({y:-458.2},0).wait(1).to({y:-468.1},0).wait(1).to({y:-477.8},0).wait(1).to({y:-487.7},0).wait(1).to({y:-498},0).wait(33));

	// Символ 9
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(4.3,212);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({y:62},0).wait(1).to({y:-73.6},0).wait(1).to({y:-174.6},0).wait(1).to({y:-243.4},0).wait(1).to({y:-293.3},0).wait(1).to({y:-332.4},0).wait(1).to({y:-363.2},0).wait(1).to({y:-387.5},0).wait(1).to({y:-406.9},0).wait(1).to({y:-422.8},0).wait(1).to({y:-436.1},0).wait(1).to({y:-447.7},0).wait(1).to({y:-458.2},0).wait(1).to({y:-468.1},0).wait(1).to({y:-477.8},0).wait(1).to({y:-487.7},0).wait(1).to({y:-498},0).wait(35));

	// Символ 9
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(-37.7,212);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({y:62},0).wait(1).to({y:-73.6},0).wait(1).to({y:-174.6},0).wait(1).to({y:-243.4},0).wait(1).to({y:-293.3},0).wait(1).to({y:-332.4},0).wait(1).to({y:-363.2},0).wait(1).to({y:-387.5},0).wait(1).to({y:-406.9},0).wait(1).to({y:-422.8},0).wait(1).to({y:-436.1},0).wait(1).to({y:-447.7},0).wait(1).to({y:-458.2},0).wait(1).to({y:-468.1},0).wait(1).to({y:-477.8},0).wait(1).to({y:-487.7},0).wait(1).to({y:-498},0).wait(37));

	// Символ 9
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(-73.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-1065,177.5,2342);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au1ESIAAokIdqAAIAAIkg");
	mask.setTransform(71,-110);

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(73.8,-2.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-137.5,177.5,55);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-28.5,300,57);


// stage content:



(lib.argo_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
			this.fon.x = -stage.mouseX / 10;
			this.rull.y = -stage.mouseY / 30;
		}
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.kollon.gotoAndPlay(1);
			this.fon.gotoAndPlay(1);
		}
		
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.kollon.gotoAndPlay(10);
			this.fon.gotoAndPlay(6);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ24();
	this.instance.setTransform(320,277);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ24(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(320,86.5);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(320,209,0.837,0.837);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// kollon
	this.kollon = new lib.Символ51();
	this.kollon.setTransform(130.6,46.9,1,1,0,0,0,-189.4,-106);

	this.timeline.addTween(cjs.Tween.get(this.kollon).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(244.5,259);

	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(320,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Слой 6
	this.rull = new lib.Символ5();
	this.rull.setTransform(321.6,251.5);

	this.timeline.addTween(cjs.Tween.get(this.rull).wait(1));

	// Слой 12
	this.instance_5 = new lib.Символ40();
	this.instance_5.setTransform(875,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Слой 10
	this.instance_6 = new lib.Символ28();
	this.instance_6.setTransform(-205,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// Слой 8
	this.instance_7 = new lib.Символ13();
	this.instance_7.setTransform(320,150);
	this.instance_7.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// Слой 13
	this.instance_8 = new lib.Символ50();
	this.instance_8.setTransform(330,149);
	this.instance_8.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// Слой 7
	this.fon = new lib.Символ12();
	this.fon.setTransform(-32.2,150.4,1.044,1.044);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/AX0MAAAgvoMBj+AAAMAAAAvog");
	this.shape.setTransform(320,152);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.7,-655.7,1156.8,2342);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
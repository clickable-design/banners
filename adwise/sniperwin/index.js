(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/apteka.png?1460549088023", id:"apteka"},
		{src:"images/back.jpg?1460549088023", id:"back"},
		{src:"images/fire.png?1460549088023", id:"fire"},
		{src:"images/man.png?1460549088023", id:"man"},
		{src:"images/pricel.png?1460549088023", id:"pricel"},
		{src:"images/puliya.png?1460549088023", id:"puliya"},
		{src:"images/snow.png?1460549088023", id:"snow"},
		{src:"images/stvol.png?1460549088023", id:"stvol"}
	]
};



// symbols:



(lib.apteka = function() {
	this.initialize(img.apteka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,96);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,60);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,91);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.puliya = function() {
	this.initialize(img.puliya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,50);


(lib.snow = function() {
	this.initialize(img.snow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,17);


(lib.stvol = function() {
	this.initialize(img.stvol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,274,165);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,681.6,324.9);


(lib.Символ39копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzA8QgDAAgCgDQgCgCAAgDIAAhnQAAgDADgCQABgDAEAAIAQAAQADAAADADQACACAAADIAAAhIAnAAQAKAAAIADQAJACAFAFQAHAGADAFQAEALAAAGIgBAJIgDAIQgDAHgHAGQgFAFgJACQgIADgKAAgAgaAkIAnAAQAHAAAEgEQADgEAAgIQAAgIgDgEQgEgEgHAAIgnAAg");
	this.shape.setTransform(64.3,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlA8QgEAAgCgDQgCgCAAgDIAAgrIg5AAIAAArQAAADgCACQgCADgDAAIgQAAQgDAAgDgDQgCgCAAgDIAAhnQAAgDACgCQADgDADAAIAQAAQADAAACADQACACAAADIAAAmIA5AAIAAgmQAAgDACgCQACgDAEAAIAPAAQADAAADADQACACAAADIAABnQAAADgCACQgDADgDAAg");
	this.shape_1.setTransform(49.9,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbA7IgMgFIgJgGIgIgJIgGgLIgDgNQgBgHAAgIQAAgHABgHIADgNIAGgLIAIgJIAJgGIAMgFQAIgCATgBIAPABQAHAAAGACIAMAFIAJAGIAIAJIAGALIADANQABAHAAAHQAAAIgBAHIgDANIgGALIgIAJIgJAGIgMAFQgGACgHAAIgPABQgTgBgIgCgAgPgkQgHADgEAFQgEAFgCAHQgCAIAAAIQAAAJACAIQACAHAEAFQAEAFAHADQAHADAIAAQAJAAAHgDQAHgDAEgFQAEgFACgHQACgIAAgJQAAgIgCgIQgCgHgEgFQgEgFgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_2.setTransform(35.4,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA8QgEAAgCgDQgCgCAAgDIAAhnQAAgDACgCQACgDAEAAIBPAAQADAAACADQADACAAADIAAAIQAAAEgDACQgCACgDAAIg4AAIAABXQAAADgCACQgCADgDAAg");
	this.shape_3.setTransform(23.6,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbA7IgMgFIgJgGIgIgJIgGgLIgDgNQgBgHAAgIQAAgHABgHIADgNIAGgLIAIgJIAJgGIAMgFQAIgCATgBIAPABQAHAAAGACIAMAFIAJAGIAIAJIAGALIADANQABAHAAAHQAAAIgBAHIgDANIgGALIgIAJIgJAGIgMAFQgGACgHAAIgPABQgTgBgIgCgAgPgkQgHADgEAFQgEAFgCAHQgCAIAAAIQAAAJACAIQACAHAEAFQAEAFAHADQAHADAIAAQAJAAAHgDQAHgDAEgFQAEgFACgHQACgIAAgJQAAgIgCgIQgCgHgEgFQgEgFgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_4.setTransform(10.3,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.5,25.9);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgzA8QgDAAgCgDQgCgCAAgDIAAhnQAAgDADgCQABgDAEAAIAQAAQADAAADADQACACAAADIAAAhIAnAAQAKAAAIADQAJACAFAFQAHAGADAFQAEALAAAGIgBAJIgDAIQgDAHgHAGQgFAFgJACQgIADgKAAgAgaAkIAnAAQAHAAAEgEQADgEAAgIQAAgIgDgEQgEgEgHAAIgnAAg");
	this.shape.setTransform(64.3,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAlA8QgEAAgCgDQgCgCAAgDIAAgrIg5AAIAAArQAAADgCACQgCADgDAAIgQAAQgDAAgDgDQgCgCAAgDIAAhnQAAgDACgCQADgDADAAIAQAAQADAAACADQACACAAADIAAAmIA5AAIAAgmQAAgDACgCQACgDAEAAIAPAAQADAAADADQACACAAADIAABnQAAADgCACQgDADgDAAg");
	this.shape_1.setTransform(49.9,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgbA7IgMgFIgJgGIgIgJIgGgLIgDgNQgBgHAAgIQAAgHABgHIADgNIAGgLIAIgJIAJgGIAMgFQAIgCATgBIAPABQAHAAAGACIAMAFIAJAGIAIAJIAGALIADANQABAHAAAHQAAAIgBAHIgDANIgGALIgIAJIgJAGIgMAFQgGACgHAAIgPABQgTgBgIgCgAgPgkQgHADgEAFQgEAFgCAHQgCAIAAAIQAAAJACAIQACAHAEAFQAEAFAHADQAHADAIAAQAJAAAHgDQAHgDAEgFQAEgFACgHQACgIAAgJQAAgIgCgIQgCgHgEgFQgEgFgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_2.setTransform(35.4,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgnA8QgEAAgCgDQgCgCAAgDIAAhnQAAgDACgCQACgDAEAAIBPAAQADAAACADQADACAAADIAAAIQAAAEgDACQgCACgDAAIg4AAIAABXQAAADgCACQgCADgDAAg");
	this.shape_3.setTransform(23.6,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgbA7IgMgFIgJgGIgIgJIgGgLIgDgNQgBgHAAgIQAAgHABgHIADgNIAGgLIAIgJIAJgGIAMgFQAIgCATgBIAPABQAHAAAGACIAMAFIAJAGIAIAJIAGALIADANQABAHAAAHQAAAIgBAHIgDANIgGALIgIAJIgJAGIgMAFQgGACgHAAIgPABQgTgBgIgCgAgPgkQgHADgEAFQgEAFgCAHQgCAIAAAIQAAAJACAIQACAHAEAFQAEAFAHADQAHADAIAAQAJAAAHgDQAHgDAEgFQAEgFACgHQACgIAAgJQAAgIgCgIQgCgHgEgFQgEgFgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_4.setTransform(10.3,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.5,25.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAg+IAAB9");
	this.shape.setTransform(0,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,14.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAiCIAAEF");
	this.shape.setTransform(0,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,28.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AnGAAIONAA");
	this.shape.setTransform(45.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,93.1,2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.2)").s().p("AwkQlQm3m4gBptQABpsG3m4QG4m3JsgBQJtABG4G3QG4G4AAJsQAAJtm4G4Qm4G4ptAAQpsAAm4m4g");
	this.shape.setTransform(150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.2,300.2);


(lib.Символ25копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABJBrQgGAAgEgDQgEgFAAgGIAAgmIhpAAIgKAmQgCAGgFAFQgFADgGAAIgeAAQgGAAgDgDQgDgFACgGIAmiMIAGgRIAJgNQAJgLAOgHQANgGAQgDQANgDASAAIBRAAQAFABAEAEQAEAEAAAGIAAC5QAAAGgEAFQgFADgGAAgAACg+QgEACgFAFQgFAEgEAFQgEAGgCAGIgNAvIBeAAIAAhMIgrAAQgHAAgHABg");
	this.shape.setTransform(161.2,66.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABFBrQgGAAgHgDQgHgFgDgGIgbgpQgJgQgJgHQgDgEgGgCQgGgDgHAAIggAAIAABJQAAAGgFAFQgEADgGAAIgcAAQgGAAgEgDQgEgFAAgGIAAi5QAAgGAEgEQAEgEAGgBIAcAAQAGABAEAEQAFAEAAAGIAABIIAgAAQANAAAIgHQAKgHAJgRIAXgpQAFgHAGgEQAFgDAGgBIAjAAQAGAAABAEQABAFgDAGIghA7QgHANgIAHQgOALgKACQAKAAAMAMQAJAJAIANIAmA7QADAGgBAFQgCADgGAAg");
	this.shape_1.setTransform(138.2,66.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABGBrQgGAAgEgDQgEgFAAgGIAAicIglAAQgHAAgHABQgFACgEAFQgGAEgDAFQgEAGgCAGIgiB/QgCAGgFAFQgFADgGAAIgeAAQgFAAgEgDQgCgEABgFIAmiOQACgJAEgIQADgHAGgGQAJgLAOgHQANgGARgDQAMgDASAAIBLAAQAFABAEAEQADAEABAGIAAC5QAAAGgFAFQgEADgFAAg");
	this.shape_2.setTransform(111.5,66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhVBrQgGAAgFgDQgDgFAAgGIAAi5QAAgGADgEQAFgEAGgBICsAAQAFABAFAEQADAEAAAGIAAAOQAAAGgDAEQgFAEgFABIiCAAIAAArIBvAAQAGAAAEAEQAFAEgBAGIAAANQABAFgFAFQgEADgGAAIhvAAIAAAtICBAAQAGAAAEAEQAEAEAAAGIAAAOQAAAGgEAFQgFADgFAAg");
	this.shape_3.setTransform(89.2,66.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AheBrQgGAAgFgDQgEgFABgGIAAi5QgBgGAEgEQAFgEAGgBIBwAAQAWAAARAGIAPAGIAOAJQAFAFAFAHQAEAGADAIQADAIABAJIACAUIgCAVQgBAHgDAIQgDAIgEAGQgFAHgFAFQgHAFgHAEIgPAGQgRAFgWABIhGAAIAAAhQABAGgFAFQgEADgGAAgAg0ARIA1AAQAMAAAJgBQAJgDAHgEQAHgEAEgGQADgIAAgOQAAgMgDgJQgEgIgHgEQgHgEgJgCQgJgCgMABIg1AAg");
	this.shape_4.setTransform(65.5,66.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgNBrQgFAAgFgDQgEgFAAgGIAAicIhDAAQgGgBgEgEQgEgEAAgGIAAgOQAAgGAEgEQAEgEAGgBIC9AAQAGABAEAEQAEAEAAAGIAAAOQAAAGgEAEQgEAEgGABIhDAAIAACcQAAAGgEAFQgFADgFAAg");
	this.shape_5.setTransform(41.1,66.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgEBsIgagBQgMgCgLgDQgKgDgJgFQgJgFgGgHQgIgGgFgJQgFgJgEgKQgDgKgCgMQgCgMAAgOQAAgMACgNQACgMADgKQAEgKAFgJQAFgIAIgHQAGgGAJgFQAJgGAKgDIAXgFIAagBIAgAAQAQAAAPADQAPAFAMAIQAOAJAGAMQAEAGACAIQACAGAAAJQAAAJgGAFQgEACgGAAIgSAAQgGAAgFgDQgGgEgEgJQgFgLgJgHQgKgGgNAAIgZAAQgQAAgLADQgLAEgGAHQgGAIgEANQgCAMAAASQAAATACAMQAEANAGAIQAGAHALAEQALADAQAAIAcAAQAOABAJgHQAJgGAFgLQAFgJAFgFQAFgDAHAAIASAAQAPADAAAOQAAAHgCAIQgCAHgDAGQgIAMgNAJQgLAIgRAFQgPADgPAAg");
	this.shape_6.setTransform(18,66.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABFBsQgGAAgEgFQgFgEAAgGIAAiJIhMCJQgDAGgHAEQgGAFgGAAIgyAAQgGAAgEgFQgEgEAAgGIAAi5QAAgGAEgEQAEgFAGABIAbAAQAFgBAEAFQAFAEAAAFIAACWIBTiVQAEgGAFgEQAHgFAFABIAsAAQAGgBAEAFQAEAEAAAGIAAC5QAAAGgEAEQgEAFgGAAg");
	this.shape_7.setTransform(144.8,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("ABgBsQgGAAgEgFQgEgEAAgGIAAiRIg1CSQgCAFgGAEQgFAFgGAAIgTAAQgGAAgFgFQgGgEgCgFIg1iSIAACRQAAAGgEAEQgEAFgGAAIgbAAQgGAAgEgFQgEgEAAgGIAAi5QAAgFAEgFQAEgFAGABIA9AAQAGgBAFAFQAFAEACAGIArB/IAsh/QACgGAFgEQAFgFAGABIA9AAQAGgBAEAFQAEAFAAAFIAAC5QAAAGgEAEQgEAFgGAAg");
	this.shape_8.setTransform(115.7,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ABFBsQgGAAgEgFQgFgEAAgGIAAiJIhMCJQgDAGgHAEQgGAFgGAAIgyAAQgGAAgEgFQgEgEAAgGIAAi5QAAgGAEgEQAEgFAGABIAbAAQAFgBAEAFQAFAEAAAFIAACWIBTiVQAEgGAFgEQAHgFAFABIAsAAQAGgBAEAFQAEAEAAAGIAAC5QAAAGgEAEQgEAFgGAAg");
	this.shape_9.setTransform(86.7,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ABBBsQgGAAgEgFQgDgDAAgHIAAhMIhmAAIAABMQAAAHgEADQgFAFgFAAIgdAAQgFAAgFgFQgEgEAAgGIAAi5QAAgGAEgEQAFgFAFABIAdAAQAFgBAFAFQAEAEAAAGIAABEIBmAAIAAhEQAAgGADgEQAEgFAGABIAcAAQAHgBAEAFQAEAEAAAGIAAC5QAAAGgEAEQgEAFgHAAg");
	this.shape_10.setTransform(60.7,24.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgEBtIgagCQgMgBgLgEQgKgDgJgFQgJgFgGgHQgIgHgFgIQgFgJgEgKQgDgKgCgMQgCgMAAgOQAAgMACgMQACgMADgLQAEgKAFgJQAFgIAIgHQAGgGAJgGQAJgEAKgEIAXgFIAagBIAgAAQAQAAAOADQAQAFAMAIQAOAJAGAMQAEAHACAGQACAIAAAIQAAAJgGAEQgEAEgFAAIgSAAQgHgBgFgDQgGgEgEgJQgFgLgJgHQgKgGgNAAIgZAAQgRAAgKAEQgLADgHAIQgFAHgEANQgCAMAAASQAAATACAMQAEANAFAIQAHAIALADQAKADARAAIAcAAQAOAAAJgGQAJgGAFgMQAFgIAFgFQAFgDAHAAIASAAQAPACAAAOQAAAIgCAIQgCAHgDAGQgIANgMAIQgMAIgRAEQgPAFgPAAg");
	this.shape_11.setTransform(35.2,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.3,87.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABJBrQgGAAgEgDQgEgFAAgGIAAgmIhpAAIgKAmQgCAGgFAFQgFADgGAAIgeAAQgGAAgDgDQgDgFACgGIAmiMIAGgRIAJgNQAJgLAOgHQANgGAQgDQANgDASAAIBRAAQAFABAEAEQAEAEAAAGIAAC5QAAAGgEAFQgFADgGAAgAACg+QgEACgFAFQgFAEgEAFQgEAGgCAGIgNAvIBeAAIAAhMIgrAAQgHAAgHABg");
	this.shape.setTransform(161.2,66.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABFBrQgGAAgHgDQgHgFgDgGIgbgpQgJgQgJgHQgDgEgGgCQgGgDgHAAIggAAIAABJQAAAGgFAFQgEADgGAAIgcAAQgGAAgEgDQgEgFAAgGIAAi5QAAgGAEgEQAEgEAGgBIAcAAQAGABAEAEQAFAEAAAGIAABIIAgAAQANAAAIgHQAKgHAJgRIAXgpQAFgHAGgEQAFgDAGgBIAjAAQAGAAABAEQABAFgDAGIghA7QgHANgIAHQgOALgKACQAKAAAMAMQAJAJAIANIAmA7QADAGgBAFQgCADgGAAg");
	this.shape_1.setTransform(138.2,66.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABGBrQgGAAgEgDQgEgFAAgGIAAicIglAAQgHAAgHABQgFACgEAFQgGAEgDAFQgEAGgCAGIgiB/QgCAGgFAFQgFADgGAAIgeAAQgFAAgEgDQgCgEABgFIAmiOQACgJAEgIQADgHAGgGQAJgLAOgHQANgGARgDQAMgDASAAIBLAAQAFABAEAEQADAEABAGIAAC5QAAAGgFAFQgEADgFAAg");
	this.shape_2.setTransform(111.5,66.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVBrQgGAAgFgDQgDgFAAgGIAAi5QAAgGADgEQAFgEAGgBICsAAQAFABAFAEQADAEAAAGIAAAOQAAAGgDAEQgFAEgFABIiCAAIAAArIBvAAQAGAAAEAEQAFAEgBAGIAAANQABAFgFAFQgEADgGAAIhvAAIAAAtICBAAQAGAAAEAEQAEAEAAAGIAAAOQAAAGgEAFQgFADgFAAg");
	this.shape_3.setTransform(89.2,66.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheBrQgGAAgFgDQgEgFABgGIAAi5QgBgGAEgEQAFgEAGgBIBwAAQAWAAARAGIAPAGIAOAJQAFAFAFAHQAEAGADAIQADAIABAJIACAUIgCAVQgBAHgDAIQgDAIgEAGQgFAHgFAFQgHAFgHAEIgPAGQgRAFgWABIhGAAIAAAhQABAGgFAFQgEADgGAAgAg0ARIA1AAQAMAAAJgBQAJgDAHgEQAHgEAEgGQADgIAAgOQAAgMgDgJQgEgIgHgEQgHgEgJgCQgJgCgMABIg1AAg");
	this.shape_4.setTransform(65.5,66.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBrQgFAAgFgDQgEgFAAgGIAAicIhDAAQgGgBgEgEQgEgEAAgGIAAgOQAAgGAEgEQAEgEAGgBIC9AAQAGABAEAEQAEAEAAAGIAAAOQAAAGgEAEQgEAEgGABIhDAAIAACcQAAAGgEAFQgFADgFAAg");
	this.shape_5.setTransform(41.1,66.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEBsIgagBQgMgCgLgDQgKgDgJgFQgJgFgGgHQgIgGgFgJQgFgJgEgKQgDgKgCgMQgCgMAAgOQAAgMACgNQACgMADgKQAEgKAFgJQAFgIAIgHQAGgGAJgFQAJgGAKgDIAXgFIAagBIAgAAQAQAAAPADQAPAFAMAIQAOAJAGAMQAEAGACAIQACAGAAAJQAAAJgGAFQgEACgGAAIgSAAQgGAAgFgDQgGgEgEgJQgFgLgJgHQgKgGgNAAIgZAAQgQAAgLADQgLAEgGAHQgGAIgEANQgCAMAAASQAAATACAMQAEANAGAIQAGAHALAEQALADAQAAIAcAAQAOABAJgHQAJgGAFgLQAFgJAFgFQAFgDAHAAIASAAQAPADAAAOQAAAHgCAIQgCAHgDAGQgIAMgNAJQgLAIgRAFQgPADgPAAg");
	this.shape_6.setTransform(18,66.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABFBsQgGAAgEgFQgFgEAAgGIAAiJIhMCJQgDAGgHAEQgGAFgGAAIgyAAQgGAAgEgFQgEgEAAgGIAAi5QAAgGAEgEQAEgFAGABIAbAAQAFgBAEAFQAFAEAAAFIAACWIBTiVQAEgGAFgEQAHgFAFABIAsAAQAGgBAEAFQAEAEAAAGIAAC5QAAAGgEAEQgEAFgGAAg");
	this.shape_7.setTransform(144.8,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABgBsQgGAAgEgFQgEgEAAgGIAAiRIg1CSQgCAFgGAEQgFAFgGAAIgTAAQgGAAgFgFQgGgEgCgFIg1iSIAACRQAAAGgEAEQgEAFgGAAIgbAAQgGAAgEgFQgEgEAAgGIAAi5QAAgFAEgFQAEgFAGABIA9AAQAGgBAFAFQAFAEACAGIArB/IAsh/QACgGAFgEQAFgFAGABIA9AAQAGgBAEAFQAEAFAAAFIAAC5QAAAGgEAEQgEAFgGAAg");
	this.shape_8.setTransform(115.7,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABFBsQgGAAgEgFQgFgEAAgGIAAiJIhMCJQgDAGgHAEQgGAFgGAAIgyAAQgGAAgEgFQgEgEAAgGIAAi5QAAgGAEgEQAEgFAGABIAbAAQAFgBAEAFQAFAEAAAFIAACWIBTiVQAEgGAFgEQAHgFAFABIAsAAQAGgBAEAFQAEAEAAAGIAAC5QAAAGgEAEQgEAFgGAAg");
	this.shape_9.setTransform(86.7,24.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABBBsQgGAAgEgFQgDgDAAgHIAAhMIhmAAIAABMQAAAHgEADQgFAFgFAAIgdAAQgFAAgFgFQgEgEAAgGIAAi5QAAgGAEgEQAFgFAFABIAdAAQAFgBAFAFQAEAEAAAGIAABEIBmAAIAAhEQAAgGADgEQAEgFAGABIAcAAQAHgBAEAFQAEAEAAAGIAAC5QAAAGgEAEQgEAFgHAAg");
	this.shape_10.setTransform(60.7,24.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEBtIgagCQgMgBgLgEQgKgDgJgFQgJgFgGgHQgIgHgFgIQgFgJgEgKQgDgKgCgMQgCgMAAgOQAAgMACgMQACgMADgLQAEgKAFgJQAFgIAIgHQAGgGAJgGQAJgEAKgEIAXgFIAagBIAgAAQAQAAAOADQAQAFAMAIQAOAJAGAMQAEAHACAGQACAIAAAIQAAAJgGAEQgEAEgFAAIgSAAQgHgBgFgDQgGgEgEgJQgFgLgJgHQgKgGgNAAIgZAAQgRAAgKAEQgLADgHAIQgFAHgEANQgCAMAAASQAAATACAMQAEANAFAIQAHAIALADQAKADARAAIAcAAQAOAAAJgGQAJgGAFgMQAFgIAFgFQAFgDAHAAIASAAQAPACAAAOQAAAIgCAIQgCAHgDAGQgIANgMAIQgMAIgRAEQgPAFgPAAg");
	this.shape_11.setTransform(35.2,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.3,87.6);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0.2)","#FF0000"],[0,1],0,0,0,0,0,421).s().p("Eg7DAc6MAAAg5zMB2HAAAMAAAA5zg");
	this.shape.setTransform(378.1,185.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,756.2,370.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-5.2,-5.2,0.618,0.618);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-5.2,10.5,10.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-8.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snow();
	this.instance.setTransform(-3.5,-3.5,0.412,0.412);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,7);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58,60);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stvol();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274,165);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiwCwQhIhJgBhnQABhmBIhKQBKhIBmgBQBnABBJBIQBJBKABBmQgBBnhJBJQhJBJhnABQhmgBhKhJg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-20.8,-9.9,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-9.9,681.6,324.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(36.8,12.9,1,1,0,0,0,36.8,12.9);

	this.instance_1 = new lib.Символ39копия();
	this.instance_1.setTransform(36.8,12.9,1,1,0,0,0,36.8,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.5,25.9);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ37();
	this.instance.setTransform(250.7,150.3,1,1,0,0,0,0,6.4);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(47.3,150.3,1,1,0,0,0,0,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(149.8,115.2,1,1,0,0,0,0,13.1);

	this.instance_3 = new lib.Символ36();
	this.instance_3.setTransform(149.8,186.1,1,1,0,0,0,0,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ35();
	this.instance_4.setTransform(216.6,150.1,1,1,0,0,0,45.5,0);

	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(82.5,150.1,1,1,0,0,0,45.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.6)").s().p("AgPA5QgRgGgLgNQgMgOgDgRQgEgYASgVQAJgJAMgFQAMgFALACIAAgDIAAABQARAAAOAJQAPAJAHAOQAIAQgCAQQgDASgLANQgLANgRAGQgJACgIAAQgHAAgIgCg");
	this.shape.setTransform(149.8,150.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ34();
	this.instance_6.setTransform(150.1,150.1,1,1,0,0,0,150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.2,300.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(308.2,150.1,1,1,0,0,0,150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.pricel();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(90.2,43.8,1,1,0,0,0,90.2,43.8);

	this.instance_1 = new lib.Символ25копия();
	this.instance_1.setTransform(90.2,43.8,1,1,0,0,0,90.2,43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.3,87.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(378.1,185.1,1,1,0,0,0,378.1,185.1);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,756.2,370.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(-0.5,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-0.5,19.5,-31.9,48.5,-21.1,89.1,-19,96.8,-16.3,104.5,-14.8,108.5,-13.3,112.5,-7.4,126.6,-1.5,140.7,1.5,150.1,4.5,159.5,12.2,212.8,-18.5,257.7,-45.3,296.5,-37.9,344.7,-34.8,364.4,-21.3,377.4,3,411.2,13.1,451.8,15.5,461.2,15.6,471.2,15.9,487.1,13.5,502.2,6.8,532.3,-29.3,569.2,-68.6,646.7,-11.7,742.4,13.6,817.4,38.9,892.4]}},99,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,15.9,7,7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(-4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.8,y:972.9},99,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,7.3,17,17);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(2.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-100.6,y:850},134).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,11.4,7,7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(1.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.7,4.9,-0.2,9.3,-6.4,18.4,-12.5,27.3,-14.3,31.9,-17.3,40.1,-17.3,64.9,-17.3,65.1,-15.7,82.4,-13.8,100.4,-12.3,104.9,-11.5,107.4,-7.1,117.6,-2.6,128,-0.3,134.9,1.1,139.1,7,156.1,10.2,166.1,11.7,171.8,15.5,186,15.5,207.9,15.5,230.3,8.9,248.6,5,260.1,-5.3,277.2,-16.1,295.1,-19.8,304.6,-26.3,321.4,-26.3,341.4,-26.3,367.7,-18.5,388.3,-14.2,399.5,-1.3,420.8,10.7,441,15.7,455.5,23.5,478.3,23.5,508.2,23.5,533,17.7,552.1,13.9,564.6,5.2,580.9,-4.6,598.7,-7.5,606.9,-13.3,622.8,-13.3,642.2,-13.3,657.5,-7.7,676.8,-2,696.5,7.5,713.7,7.9,714.5,13.4,723.2,18,730.6,21.5,737.2,32.2,758,38.5,784.7,39.6,789.5,41.4,796.2]}},89,cjs.Ease.get(-0.76)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-0.5,10.5,10.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.6,y:832.2},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-2.7,7,7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 21
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 20
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-185.9,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 19
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(142.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(207,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 17
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(284,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.4,-104.2,485.4,127.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(-9.5,-74,0.05,0.05,0,0,0,29.1,30.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29,regY:29.9,scaleX:0.27,scaleY:0.27,alpha:1},4).to({_off:true},1).wait(20));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABICHQgLgBgPgDIgbgIQgQgDgbgDIgtgFQgSgDgIgGIgGgEIgHgDIgGAAIgHgBQgIgCgFgKQgCgHAAgLQgCgoADgTIADgUQADgQAEgMQADgMAOgWQAOgXAKgHQAHgGAOgHIAigOIABgBQA3AGAeAQQAaAOAdAiQANAOAEAKQAIAPABAZIgBApQABAXgBAIIgJAVQgHATgBACQgHALgOAGQgKAEgMAAIgFAAg");
	var mask_graphics_24 = new cjs.Graphics().p("ABICHQgLgBgPgDIgbgIQgQgDgbgDIgtgFQgSgDgIgGIgGgEIgHgDIgGAAIgHgBQgIgCgFgKQgCgHAAgLQgCgoADgTIADgUQADgQAEgMQADgMAOgWQAOgXAKgHQAHgGAOgHIAigOIABgBQA3AGAeAQQAaAOAdAiQANAOAEAKQAIAPABAZIgBApQABAXgBAIIgJAVQgHATgBACQgHALgOAGQgKAEgMAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-7.1,y:-80.9}).wait(24).to({graphics:mask_graphics_24,x:-7.1,y:-80.9}).wait(1));

	// Слой 2
	this.instance_1 = new lib.man();
	this.instance_1.setTransform(-16.2,-82.3,0.253,0.253);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-82.3,16.2,15);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(137,82.5,1,1,0,0,0,137,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:90.5},14).to({y:82.5},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274,165);


(lib.Символ5копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// puliya.png
	this.instance = new lib.puliya();
	this.instance.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(26,25,0.84,0.84,0,0,0,25,25);
	this.instance_1.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,51,50);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// puliya.png
	this.instance = new lib.puliya();
	this.instance.setTransform(10.9,10.8,0.572,0.572);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(26,25,0.84,0.84,0,0,0,25,25);
	this.instance_1.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,4,42,42);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(174.8,192.4,1,1,0,0,0,29,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpmAT2MAAAgnrMBTNAAAMAAAAnrgArroYQjZDZAAEyQAAEwDZDZQDYDZEyAAQExAADYjZQDZjZAAkwQAAkyjZjZQjYjYkxAAQkyAAjYDYg");
	mask.setTransform(157.3,81.9);

	// Слой 3
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(320,152.5,1,1,0,0,0,340.8,162.4);
	this.instance_1.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance_1.cache(-2,-2,686,329);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.back();
	this.instance_2.setTransform(-20.8,-9.9,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-15.9,687.6,330.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ8();
	this.instance.setTransform(177.5,192.4,1,1,0,0,0,29,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.apteka();
	this.instance_1.setTransform(19,222,0.791,0.791);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAUAfQgDAAgCgBIgFgDIgKgQIgKAQIgEADQgCABgDAAIgNAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAUgbIgTgZIgBgEQABAAAAgBQAAAAAAAAQABAAAAAAQABgBAAAAIANAAIAFABIAEAFIAIAOIAJgOIAEgFIAFgBIANAAQAAAAABABQAAAAABAAQAAAAAAAAQAAABABAAIgBAEIgTAZIAUAbQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape.setTransform(68.4,183);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbCTQgZgBgVgFQgVgGgPgLQgRgLgIgRQgJgQAAgWIACgUQACgKAFgIQAFgJAHgIQAIgFAKgGQgPgLgGgNQgHgNAAgQQABgLACgLQACgJAFgJQAIgPARgLQAPgJAVgFQAUgEAYgBIAjAAQAYABAUAEQAVAFAPAJQARALAIAPQAEAJADAJQADALAAALQgBAQgGANQgGANgPALQAKAGAIAFQAHAIAFAJQAEAIADAKIACAUQAAAWgJAQQgJARgQALQgPALgWAGQgUAFgZABgAg2AgQgHAEgCAGQgEAGAAAKQAAAJAEAGQACAGAHAEQAKAGAaAAIAlAAQAZAAALgGQAHgEACgGQADgGAAgJQAAgKgDgGQgCgGgHgEQgLgHgZAAIglAAQgaAAgKAHgAgthSQgHAEgCAGQgEAGAAAIQAAAIAEAGQACAFAHAEQALAHAZAAIATAAQAYAAALgHQAGgEAEgFQACgGAAgIQAAgIgCgGQgEgGgGgEQgLgGgYAAIgTAAQgZAAgLAGg");
	this.shape_1.setTransform(89.9,183.6);

	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(39.5,183,1,1,0,0,0,25.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(448.5,232.5,1,1,0,0,0,137,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Символ3();
	this.instance_4.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-9.9,681.6,324.9);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(292.1,-212.8,1.042,1,0,0,180);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-220.4,-195.4,1.042,1,0,0,180);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-11.2,-212.8,1.042,1,0,0,180);

	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-381.1,-185.8);

	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(-15.1,-199.4);

	this.instance_5 = new lib.Символ11();
	this.instance_5.setTransform(-258.1,-207.4);

	this.instance_6 = new lib.Символ11();
	this.instance_6.setTransform(364.1,-146.8,1.042,1,0,0,180);

	this.instance_7 = new lib.Символ11();
	this.instance_7.setTransform(-148.4,-129.4,1.042,1,0,0,180);

	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(60.8,-146.8,1.042,1,0,0,180);

	this.instance_9 = new lib.Символ11();
	this.instance_9.setTransform(-309.1,-119.8);

	this.instance_10 = new lib.Символ11();
	this.instance_10.setTransform(56.9,-133.4);

	this.instance_11 = new lib.Символ11();
	this.instance_11.setTransform(-186.1,-141.4);

	this.instance_12 = new lib.Символ11();
	this.instance_12.setTransform(288.1,-75.8,1.042,1,0,0,180);

	this.instance_13 = new lib.Символ11();
	this.instance_13.setTransform(-224.4,-58.4,1.042,1,0,0,180);

	this.instance_14 = new lib.Символ11();
	this.instance_14.setTransform(-15.2,-75.8,1.042,1,0,0,180);

	this.instance_15 = new lib.Символ11();
	this.instance_15.setTransform(-385.1,-48.8);

	this.instance_16 = new lib.Символ11();
	this.instance_16.setTransform(-19.1,-62.4);

	this.instance_17 = new lib.Символ11();
	this.instance_17.setTransform(-262.1,-70.4);

	this.instance_18 = new lib.Символ11();
	this.instance_18.setTransform(330.1,-16.8,1.042,1,0,0,180);

	this.instance_19 = new lib.Символ11();
	this.instance_19.setTransform(-182.4,0.6,1.042,1,0,0,180);

	this.instance_20 = new lib.Символ11();
	this.instance_20.setTransform(26.8,-16.8,1.042,1,0,0,180);

	this.instance_21 = new lib.Символ11();
	this.instance_21.setTransform(-343.1,10.2);

	this.instance_22 = new lib.Символ11();
	this.instance_22.setTransform(22.9,-3.4);

	this.instance_23 = new lib.Символ11();
	this.instance_23.setTransform(-220.1,-11.4);

	this.instance_24 = new lib.Символ11();
	this.instance_24.setTransform(304.7,71.3,1.042,1,0,0,180);

	this.instance_25 = new lib.Символ11();
	this.instance_25.setTransform(-207.8,88.7,1.042,1,0,0,180);

	this.instance_26 = new lib.Символ11();
	this.instance_26.setTransform(1.4,71.3,1.042,1,0,0,180);

	this.instance_27 = new lib.Символ11();
	this.instance_27.setTransform(-368.5,98.3);

	this.instance_28 = new lib.Символ11();
	this.instance_28.setTransform(-2.5,84.7);

	this.instance_29 = new lib.Символ11();
	this.instance_29.setTransform(-245.5,76.7);

	this.instance_30 = new lib.Символ11();
	this.instance_30.setTransform(376.7,137.3,1.042,1,0,0,180);

	this.instance_31 = new lib.Символ11();
	this.instance_31.setTransform(-135.8,154.7,1.042,1,0,0,180);

	this.instance_32 = new lib.Символ11();
	this.instance_32.setTransform(73.4,137.3,1.042,1,0,0,180);

	this.instance_33 = new lib.Символ11();
	this.instance_33.setTransform(-296.5,164.3);

	this.instance_34 = new lib.Символ11();
	this.instance_34.setTransform(69.5,150.7);

	this.instance_35 = new lib.Символ11();
	this.instance_35.setTransform(-173.5,142.7);

	this.instance_36 = new lib.Символ11();
	this.instance_36.setTransform(300.7,208.3,1.042,1,0,0,180);

	this.instance_37 = new lib.Символ11();
	this.instance_37.setTransform(-211.8,225.7,1.042,1,0,0,180);

	this.instance_38 = new lib.Символ11();
	this.instance_38.setTransform(-2.6,208.3,1.042,1,0,0,180);

	this.instance_39 = new lib.Символ11();
	this.instance_39.setTransform(-372.5,235.3);

	this.instance_40 = new lib.Символ11();
	this.instance_40.setTransform(-6.5,221.7);

	this.instance_41 = new lib.Символ11();
	this.instance_41.setTransform(-249.5,213.7);

	this.instance_42 = new lib.Символ11();
	this.instance_42.setTransform(342.7,267.3,1.042,1,0,0,180);

	this.instance_43 = new lib.Символ11();
	this.instance_43.setTransform(-169.8,284.7,1.042,1,0,0,180);

	this.instance_44 = new lib.Символ11();
	this.instance_44.setTransform(39.4,267.3,1.042,1,0,0,180);

	this.instance_45 = new lib.Символ11();
	this.instance_45.setTransform(-330.5,294.3);

	this.instance_46 = new lib.Символ11();
	this.instance_46.setTransform(35.5,280.7);

	this.instance_47 = new lib.Символ11();
	this.instance_47.setTransform(-207.5,272.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-583.5,-317.1,1167.1,634.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(414.6,-199.8,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({startPosition:0},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(317.1,153.1,1,1,0,0,0,378.1,185.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(16));

	// Слой 1
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({y:149.5},0).wait(1).to({y:155.5},0).wait(1).to({x:324,y:152.5},0).wait(1).to({x:315},0).wait(1).to({x:320},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-428.6,856.3,743.7);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(414.6,-199.8,0.721,0.721);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3копия();
	this.instance_1.setTransform(666.8,253.3,2.327,2.327,0,0,0,134.4,56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-428.6,1908,1292.5);


(lib.Символ10копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(317.1,153.1,1,1,0,0,0,378.1,185.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(16));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAUAfQgDABgCgCIgEgDIgLgQIgKAQIgDADQgDACgDgBIgMAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAUgbIgTgZIAAgEQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAMAAIAGAAIADAFIAJAOIAJgOIAEgFIAFAAIANAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAAEIgTAZIAUAbQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(62.4,253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgSBlQgRAAgPgEQgOgEgLgHQgLgIgGgMQgGgLAAgPIABgOQACgHADgGQAEgGAFgFQAFgDAHgEQgKgIgFgJQgEgJAAgLQAAgIACgHQABgGADgGQAGgLAMgHQAKgGAPgEQANgDAQAAIAZAAQAQAAANADQAPAEAKAGQAMAHAGALQADAGABAGQACAHAAAIQAAALgEAJQgEAJgLAIQAHAEAFADQAFAFAEAGIAFANIABAOQAAAPgGALQgGAMgLAIQgLAHgOAEQgPAEgRAAgAglAWQgEADgCAEQgDAEAAAGQAAAHADAEQACAEAEADQAIAEARAAIAZAAQARAAAIgEQAEgDACgEQACgEAAgHQAAgGgCgEQgCgEgEgDQgIgFgRAAIgZAAQgRAAgIAFgAgfg4QgEADgCAEQgCAEAAAFQAAAGACAEQACAEAEACQAIAFARAAIAMAAQASAAAHgFQAEgCACgEQADgEAAgGQAAgFgDgEQgCgEgEgDQgHgEgSAAIgMAAQgRAAgIAEg");
	this.shape_1.setTransform(79.9,252.7);

	this.instance_1 = new lib.Символ5копия();
	this.instance_1.setTransform(48.5,248,0.608,0.608,0,0,0,25.5,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},24).wait(1));

	// Слой 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkvEoQh9h7AAitQAAitB9h7QB+h7CxAAQCxAAB+B7QB+B7AACtQAACth+B7Qh+B8ixAAQixAAh+h8g");
	this.shape_2.setTransform(61.1,267.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(25));

	// Слой 4
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// Слой 1
	this.fon = new lib.Символ2копия();
	this.fon.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(4).to({y:148.5},0).wait(1).to({y:158.5},0).wait(1).to({x:326,y:152.5},0).wait(1).to({x:311,y:149.5},0).wait(1).to({x:320,y:152.5},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-428.6,1908,1292.5);


(lib.Символ1 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Символ24();
	this.instance.setTransform(539.1,64,1,1,0,0,0,90.2,43.8);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(62.1,278.4,1,1,0,0,0,36.8,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(320,157.5,1,1,0,0,0,320,157.5);

	this.instance_3 = new lib.Символ10копия();
	this.instance_3.setTransform(320,157.5,1,1,0,0,0,320,157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-428.6,856.3,743.7);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "none";
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.main.gotoAndPlay(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.main.gotoAndPlay(0);
		    }
		
			
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.main = new lib.Символ1();
	this.main.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(299.2,-276.1,856.3,743.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
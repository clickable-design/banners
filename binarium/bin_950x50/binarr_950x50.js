(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 950,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/gb.jpg", id:"gb"},
		{src:"images/light.png", id:"light"}
	]
};



// symbols:



(lib.gb = function() {
	this.initialize(img.gb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,950,50);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsBMIACgbIhZAAIASh6IASAAIgPBsIA1AAIAPhsIASAAIgPBsIAPAAIgGApgABMAwQgEgBgEgDQgEgDgCgEIgFgIIgCgMQgBgIACgVQACgLAFgSIAEgLIAHgJQADgEAEgCQAEgDAFgCQAHgCARgBIAMABQAFAAAFACQAEACAEADQADACADAEQADAEABAFIACALQABATgCAMQgEAUgDAIIgEALIgGAJIgIAGIgJAEQgFACgGABIgMABQgQgBgGgDgABig5QgHADgEAFQgEAGgDAJQgDAJgCAPQgCAMAAAJQAAAJADAFQADAGAFACQAGADAIAAQAJAAAHgDQAGgCAEgGQAFgGADgJQACgJACgNQACgOAAgJQAAgJgDgFQgCgGgGgCQgFgCgJAAQgJAAgGACgAmbAwQgEgBgEgDQgEgDgCgEIgFgIIgCgMQgBgIACgVQACgLAFgSIAEgLIAHgJQADgEAEgCQAEgDAFgCQAHgCARgBIAMABQAFAAAFACQAEACAEADQADACADAEQADAEABAFIACALQABATgCAMQgEAUgDAIIgEALIgGAJIgIAGIgJAEQgFACgGABIgMABQgQgBgGgDgAmFg5QgHADgEAFQgEAGgDAJQgDAJgCAPQgCAMAAAJQAAAJADAFQADAGAFACQAGADAIAAQAJAAAHgDQAGgCAEgGQAFgGADgJQACgJACgNQACgOAAgJQAAgJgDgFQgCgGgGgCQgFgCgJAAQgJAAgGACgAEkAxIARh6IASAAIgHAxIAZAAQALAAAIACQAHACAFAFQAEAEABAIQACAFgCAMQgBALgDAHQgEAHgFAEQgFAEgHACQgHACgLAAIgugCgAE4AjIAXAAQAIAAAFgBQAFgBADgDQADgCABgFQACgEABgHIABgLQgBgCgCgDQgCgDgEgBQgEgBgIAAIgZAAgAGNAxIASh6IASAAIgSB6gAD0AxIAIg4Ig2AAIgIA4IgSAAIARh6IASAAIgHAyIA3AAIAHgyIASAAIgSB6gAAFAxIAPhkIgBAAIgIAOIg+BWIgUAAIASh6IARAAIgLBSIgEASIAAAAIAJgOIA+hWIATAAIgRB6gAjzAxIAQhrIg3AAIgPBrIgSAAIARh6IBbAAIgRB6g");
	this.shape.setTransform(43.4,7.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.7,15.4);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADcA+IASh6IASAAIgHAxIAZAAQALAAAHACQAIACAEAEQAEADACAIQACAHgCALQgCALgCAHQgEAHgFAFQgFAEgIABQgGACgLAAIgvgBgADwAvIAYABQAIAAAEgCQAGgBACgCQADgDACgEQACgEABgIIAAgKQAAgFgCgCQgCgDgEgBQgFgCgHAAIgZAAgAnTA+IARh6IAogBIAmABIgEAPIg6AAIgFAlIAYAAQAMAAAHACQAIACAFAEQAEADABAHQACAHgCAKQgBALgDAHQgEAHgEAEQgFAEgIACQgHABgLAAIgugBgAm/AwIAXAAIANgBQAFgBADgDQADgCABgEIADgLIABgLQgBgEgCgCQgCgDgEgBIgMgBIgZAAgAGGA8QgFgCgEgDQgDgDgBgFQgCgFABgGIALhLIADgJQACgEAEgDQADgDAFgBQAEgCAHAAIA1ACIgDAOIgwAAQgGAAgDACQgCADgBAGIgEAaIA1AAIgCALIg1AAIgEAgQgBAHACACQACADAHAAIAwAAIgBAOIgyABQgHAAgFgCgAFGA+IASh6IASAAIgSB6gACtA+IAIg7Ig2AAIgIA7IgSAAIARh6IASAAIgHAyIA3AAIAHgyIASAAIgSB6gAgEA+IAQh6QAOgCAdAAQALAAAHACQAIACAEAFQAFAFABAHQABAIgBALQgCAMgEAIQgCAFgGAEQgFAEgHACQgIACgLAAQgLAAgPgCIgIAxgAAcguIgHAuIAYAAIAMAAQAFgBADgDQADgDACgEIADgNIAAgLQAAgFgDgCQgCgDgEgBIgKgBgAglA+IgGgmIgyAAIgRAmIgTAAIA4h2QACgEAFAAIASAAQAGAAABAFIAWB1gAguAIIgJg3IgFAAIgaA3IAoAAgAijA+IAIg7Ig2AAIgIA7IgTAAIASh6IASAAIgHAyIA2AAIAHgyIASAAIgRB6gAkbA+IAQhkIgBAAIgIAOIhABWIgUAAIARh6IASAAIgLBRIgEATIAAAAIAJgPIBAhVIATAAIgRB6g");
	this.shape.setTransform(46.9,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93.7,12.8);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFiA+IARh6IASAAIgHAxIAZAAQALAAAIACQAHACAEAEQAEADACAIQABAHgBALQgCALgDAHQgDAHgFAFQgFAEgHABQgIACgKAAIgugBgAF2AvIAXABQAIAAAFgCQAFgBADgCQADgDABgEQACgEABgIIABgKQgBgFgCgCQgCgDgEgBQgFgCgHAAIgZAAgAB/A+IARh6IASAAIgGAxIAYAAQALAAAIACQAIACAEAEQAEADABAIQACAHgCALQgBALgDAHQgEAHgFAFQgEAEgIABQgHACgKAAIgvgBgACTAvIAXABQAJAAAEgCQAFgBADgCQADgDABgEQACgEABgIIABgKQgBgFgCgCQgCgDgDgBQgFgCgIAAIgZAAgAiOA+IARh6IASAAIgGAxIAYAAQALAAAIACQAHACAFAEQAEADABAIQACAHgCALQgBALgDAHQgEAHgEAFQgFAEgIABQgHACgKAAIgvgBgAh6AvIAXABQAJAAAEgCQAFgBADgCQADgDABgEQACgEABgIIABgKQgBgFgCgCQgBgDgFgBQgEgCgIAAIgZAAgAj5A+IARh6IAogBIAmABIgEAPIg6AAIgFAlIAYAAQAMAAAHACQAIACAFAEQAEADABAHQACAHgCAKQgBALgDAHQgEAHgFAEQgEAEgIACQgHABgLAAIgugBgAjlAwIAXAAIANgBQAFgBADgDQADgCABgEIADgLIABgLQgBgEgCgCQgCgDgEgBIgMgBIgZAAgAIKA8QgFgCgDgDQgDgDgBgFQgCgFACgGIAKhLIADgJQACgEADgDQAEgDAFgBQAFgCAFAAIA2ACIgCAOIgyAAQgFAAgDACQgCADgCAGIgDAaIA1AAIgCALIg0AAIgFAgQgBAHACACQADADAFAAIAwAAIAAAOIgyABQgHAAgGgCgAgBAvIAJgEQAGgEAEgHIAGgLIAFgOIALgtIAEgKIAGgHQAEgDAEgBIALgBIAtAAIgRB6IgSAAIAQhsIgXAAQgGAAgEADQgDADgBAHQgJAhgDALQgGATgFAJIgIAKIgIAHIgKAFQgFABgEAAgAHLA+IARh6IASAAIgRB6gAEyA+IAIg7Ig2AAIgIA7IgTAAIASh6IASAAIgHAyIA3AAIAGgyIASAAIgRB6gAglA+IASh6IASAAIgSB6gAkoA+IAQhkIgBAAIgJAOIg/BWIgUAAIARh6IASAAIgMBRIgEATIABAAIAJgPIA/hVIATAAIgRB6gAnfA+IARh6QANgCAeAAQALAAAHACQAIACAEAFQAEAFACAHQABAIgBALQgDAMgDAIQgDAFgFAEQgFAEgHACQgIACgLAAQgLAAgPgCIgHAxgAm+guIgGAuIAXAAIAMAAQAFgBADgDQADgDACgEIADgNIAAgLQgBgFgCgCQgCgDgEgBIgKgBgAoPA+IAPhsIg3AAIgOBsIgTAAIARh6IBcAAIgSB6g");
	this.shape.setTransform(60.2,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120.3,12.8);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1FlIAAggIFDlFIlDlEIAAggIAEgEIFnFoIlnFog");
	this.shape.setTransform(18.3,36.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,72.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwfF5IAArxMAg/AAAIAALxg");
	this.shape.setTransform(105.6,37.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("ArRCyQgeAAAAgkIAAkbQAAgkAeAAIWiAAQAgAAAAAkIAAEbQAAAkggAAg");
	this.shape.setTransform(88,17.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.7,0,150.6,35.7);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.light();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,347,170);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A3D4EB","#007CC0"],[0,0.271],-15.6,-18.5,15.6,18.7).s().p("AijCtQgHAAgFgGQgGgFAAgHIAAk0QAAgIAGgGQAFgFAHAAIFHAAQAHAAAGAFQAFAGAAAIIAAE0QAAAHgFAFQgGAGgHAAgAhshqQgFAFAAAHIAAC9QAAAHAFAGQAFAEAGAAIDDAAQAHAAAFgEQAFgGAAgHIAAi9QAAgHgFgFQgFgFgHAAIjDAAQgGAAgFAFg");
	this.shape.setTransform(18.2,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007CC0").s().p("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");
	this.shape_1.setTransform(93.1,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AFABSIAAgMQAKAEAMAAQAJAAAGgCQAGgDAGgGQAFgHAHgPIhGh9IAOAAIA2BhQAFAHADAJIABAAIA2hxIAOAAIg5B1IgLAVQgEAKgHAHQgGAHgIAEQgIADgMAAQgOAAgJgDgAJ5BTIAAh+IABgcIgBAAIhCCaIgIAAIhCiaIgBAAIABAdIAAB9IgMAAIAAinIATAAIA/CTIABAAIA+iTIATAAIAACngAEQBTIAAhrIACgpIgBAAIhpCUIgNAAIAAinIAMAAIAABtIgBAnIABAAIBpiUIAMAAIAACngAAKBTIAAinIArAAQBAAAAAAxQAAAYgSALQgRAOggAAIgcAAIAABFgAAWADIAZAAQAeAAANgHQANgKAAgVQAAgTgMgKQgNgJgaAAIgeAAgAgbBTIgZg7IhIAAIgZA7IgNAAIBHinIAIAAIBGCngAhfguIgZA7IBAAAIgYg7IgHgUIgIAUgAjIBTIAAhTIhoAAIAABTIgNAAIAAinIANAAIAABLIBoAAIAAhLIAMAAIAACngAl7BTIAAhrIACgpIgBAAIhpCUIgNAAIAAinIAMAAIAABtIgBAnIABAAIBpiUIAMAAIAACngAqEBTIAAinIBkAAIAAALIhXAAIAABAIAjAAQAfAAAPAJQAQALAAAXQAAAYgQAMQgPANgcAAgAp3BJIAkAAQAYAAAMgJQALgKAAgUQAAgTgMgIQgMgHgaAAIghAAg");
	this.shape_2.setTransform(111,10.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175.9,35.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1dAFRIAAqhMBq7AAAIAAKhg");
	mask.setTransform(19.1,7.9);

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(622.9,7.7,1,1,0,0,0,43.4,7.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({x:492.9},0).wait(1).to({x:434.6},0).wait(1).to({x:399.9},0).wait(1).to({x:373.5},0).wait(1).to({x:350.8},0).wait(1).to({x:333.5},0).wait(1).to({x:320.7},0).wait(1).to({x:311.2},0).wait(1).to({x:304.1},0).wait(1).to({x:298.8},0).wait(1).to({x:294.8},0).wait(1).to({x:291.6},0).wait(1).to({x:289.1},0).wait(1).to({x:286.9},0).to({x:206.9},30).wait(1).to({x:202.1},0).wait(1).to({x:195.7},0).wait(1).to({x:188},0).wait(1).to({x:179.1},0).wait(1).to({x:168.9},0).wait(1).to({x:157.5},0).wait(1).to({x:144.8},0).wait(1).to({x:130.5},0).wait(1).to({x:114.1},0).wait(1).to({x:95},0).wait(1).to({x:74},0).wait(1).to({x:54.7},0).wait(1).to({x:29.3},0).wait(1).to({x:-24.2},0).wait(1).to({x:-126.3},0).to({_off:true},1).wait(9));

	// Символ 23
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(527.8,6.5,1,1,0,0,0,46.9,6.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({x:397.8},0).wait(1).to({x:339.5},0).wait(1).to({x:304.8},0).wait(1).to({x:278.4},0).wait(1).to({x:255.7},0).wait(1).to({x:238.4},0).wait(1).to({x:225.6},0).wait(1).to({x:216.1},0).wait(1).to({x:209},0).wait(1).to({x:203.7},0).wait(1).to({x:199.7},0).wait(1).to({x:196.5},0).wait(1).to({x:194},0).wait(1).to({x:191.8},0).to({x:111.8},30).wait(1).to({x:106.4},0).wait(1).to({x:99.2},0).wait(1).to({x:90.6},0).wait(1).to({x:80.5},0).wait(1).to({x:69.1},0).wait(1).to({x:56.3},0).wait(1).to({x:42},0).wait(1).to({x:25.9},0).wait(1).to({x:7.6},0).wait(1).to({x:-13.9},0).wait(1).to({x:-37.6},0).wait(1).to({x:-59.2},0).wait(1).to({x:-87.9},0).wait(1).to({x:-148},0).wait(1).to({x:-262.8},0).to({_off:true},1).wait(14));

	// Символ 22
	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(416.1,6.5,1,1,0,0,0,60.1,6.4);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({x:286.1},0).wait(1).to({x:227.8},0).wait(1).to({x:193.1},0).wait(1).to({x:166.7},0).wait(1).to({x:144},0).wait(1).to({x:126.7},0).wait(1).to({x:113.9},0).wait(1).to({x:104.4},0).wait(1).to({x:97.3},0).wait(1).to({x:92},0).wait(1).to({x:88},0).wait(1).to({x:84.8},0).wait(1).to({x:82.3},0).wait(1).to({x:80.1},0).to({x:0.1},30).wait(1).to({x:-6.7},0).wait(1).to({x:-15.7},0).wait(1).to({x:-26.7},0).wait(1).to({x:-39.3},0).wait(1).to({x:-53.7},0).wait(1).to({x:-69.9},0).wait(1).to({x:-88},0).wait(1).to({x:-108.4},0).wait(1).to({x:-131.5},0).wait(1).to({x:-158.7},0).wait(1).to({x:-188.5},0).wait(1).to({x:-215.9},0).wait(1).to({x:-252.1},0).wait(1).to({x:-328},0).wait(1).to({x:-472.9},0).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356,0.1,5.4,12.8);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(127.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(10));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(116.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(11));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(105.9,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(12));

	// Слой 1 - копия: 2 - копия
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(95.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(13));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ19();
	this.instance_4.setTransform(84.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(14));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ19();
	this.instance_5.setTransform(73.5,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(15));

	// Слой 1 - копия: 2
	this.instance_6 = new lib.Символ19();
	this.instance_6.setTransform(62.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(16));

	// Слой 1 - копия
	this.instance_7 = new lib.Символ19();
	this.instance_7.setTransform(51.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(17));

	// Слой 1
	this.instance_8 = new lib.Символ19();
	this.instance_8.setTransform(40.7,36.1,1,1,0,0,0,18.2,36.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({alpha:1},2).to({alpha:0},3).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.5,0,123.8,72.2);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(146.5,58,1,1,0,0,0,173.5,85);
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(144.6,56.1,1,1,0,0,0,144.6,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:292.7,y:109.9},9,cjs.Ease.get(-1)).to({x:457.2,y:169.6},10,cjs.Ease.get(1)).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-27,347,170);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1 - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	mask.setTransform(88,17.9);

	// Слой 5
	this.instance = new lib.Символ11();
	this.instance.setTransform(-69.1,-37.2,1,1,0,0,0,144.6,56.1);

	this.instance.mask = mask;

	// Слой 4 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHA4IgJgDIgHgEIgGgGIgDgIIgCgKQgBgHACgSIAGgaIAEgJIAGgIIAGgGIAIgEQAGgCAPgBQAPAAAQAEIgDAMIgcgBQgIAAgFACQgGACgEAEQgEAFgDAJQgCAIgCALIgCAUQABAJACAEQACAFAFACQAEACAIAAQAOABASgCIABAMIgPADIgSABgAopA2IgIgEIgFgGIgEgIIgCgKQgBgHACgTQABgJAFgQIAEgKIAFgIIAHgGIAIgEQAGgCAPgBIALABIAJACIAHAEIAFAGQADAEABAEIACAKQAAAQgBAJQgEAUgCAHIgEAKIgGAIIgGAFIgIAEIgKACIgLABQgOgBgFgCgAoWgnQgGACgEAFQgEAFgCAIQgDAIgCALIgBAUQAAAJACAEQADAFAFACQAEADAIAAQAIAAAGgDQAFgCAEgFQAEgFADgIQACgIACgMQACgMAAgIQAAgIgDgFQgCgEgFgDQgFgBgIAAQgIAAgFACgAAnA3IAQhtIAQAAIgGAsIAVAAQALAAAGACQAHACAEAEQAEACABAHQABAGgBAKQgBAKgDAGQgDAGgEAEQgFAEgHACQgGABgJAAIgqgBgAA5AqIAVAAIALgBQAFgBACgCQADgCABgEIADgKIAAgKQAAgEgCgCQgBgDgEgBIgLgBIgWAAgAi7A3IAQhtIAQAAIgGAsIAVAAQALAAAGACQAHACAEAEQAEACABAHQABAGgBAKQgBAKgDAGQgDAGgEAEQgFAEgHACQgGABgJAAIgqgBgAipAqIAVAAIALgBQAFgBACgCQADgCABgEIADgKIAAgKQAAgEgCgCQgBgDgEgBIgLgBIgWAAgAF2A1QgFgBgDgDQgCgDgCgFQgBgEABgFIAKhCQAAgFACgEIAFgGIAHgEIAKgBIAvABIgCANIgrAAQgFAAgDACQgCACgBAGIgDAXIAvAAIgCAKIgvAAIgDAcQgBAGACACQACACAFAAIArAAIgBANIgsABQgHAAgEgCgAIlA3QgBAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgJQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAABAAIAEAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIgBAIQgBABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAgAHaA3IAOheIgjAAIACgPIBWAAIgCAPIgjAAIgOBegAE+A3IAHg0QgOAHgHACQgJADgIAAQgGAAgFgBQgFgCgDgDQgCgDgBgFQgBgDABgHIAGgtIAQAAIgGArQgBAHADAEQACABAIAAQAIAAAIgBQAHgCALgGIAGguIAQAAIgPBtgAgaA3IAOheIgjAAIACgPIBUAAIgCAPIgjAAIgMBegAhdA3IAQhtIAQAAIgQBtgAkZA3IAQhtIAmgBQAKAAAGACQAHACAEAEQAEAEABAHQABAHgBAJQgCALgDAHQgCAFgFADQgEAEgHABQgHACgKAAIgXgCIgHAsgAkBAAIAVAAIALAAQAEgBADgCQADgDABgEIADgLIAAgKQAAgEgCgCQgCgCgEgBIgJgBIgXAAgAk6A3IgFgXIgFgQQgDgGgEgDQgFgDgHAAIgLAAIgBALIgGAoIgQAAIAQhtIAQAAIgFAiIgDANIALAAQAHAAAFgEQAFgDAFgGQAGgIAMgaIARAAQgNAcgHAJQgFAHgFAEQgGAEgHABIAAABQAHAAAFADQAEAEAEAHQACAGADALIAFAYgAm8A3IAOheIgjAAIACgPIBWAAIgCAPIgjAAIgOBegAIlAVIAJhLIAQAAIgNBLg");
	this.shape.setTransform(87.2,19);

	// Слой 1 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B200").s().p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	this.shape_1.setTransform(88,17.9);

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("ArTCyQgfAAAAgkIAAkbQAAgkAfAAIWnAAQAfAAAAAkIAAEbQAAAkgfAAg");
	this.shape_2.setTransform(88,18.6);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.4,0,151.1,36.5);


(lib.Символ14 = function(mode,startPosition,loop) {
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

	// Слой 5
	this.instance = new lib.Символ17();
	this.instance.setTransform(98.3,20.3,1,1,0,0,0,105.6,37.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Слой 4
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(98.8,20.6,1.122,1.122,0,0,0,88,17.9);
	this.instance_1.alpha = 0;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.18,scaleY:1.18,x:98.7,alpha:0.448},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:98.6,alpha:0.65},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.771},0).wait(1).to({scaleX:1.23,scaleY:1.23,alpha:0.859},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.92},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.959},0).wait(1).to({scaleX:1.25,scaleY:1.25,alpha:0.984},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:98.5,alpha:0.996},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:98.6,alpha:0.583},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:98.7,alpha:0.38},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:98.8,alpha:0.262},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.173},0).wait(1).to({scaleX:1.14,scaleY:1.14,alpha:0.108},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.062},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.032},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.013},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.003},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0},0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(98.8,20.6,1.122,1.122,0,0,0,88,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:18.2,scaleX:1.18,scaleY:1.18,x:98.7,y:21},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:98.6},0).wait(1).to({scaleX:1.22,scaleY:1.22},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:98.5},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.24,scaleY:1.24},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({scaleX:1.25,scaleY:1.25},0).wait(1).to({regY:17.9,y:20.6},0).wait(1).to({regY:18.2,scaleX:1.2,scaleY:1.2,x:98.7,y:20.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:98.8,y:20.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:20.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:20.5},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:98.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:98.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:98.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:98.8},0).wait(1).to({regY:17.9,scaleX:1.12,scaleY:1.12,y:20.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.1,-134.5,474.1,192.5);


// stage content:



(lib.binarr_950x50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.btn.gotoAndPlay(1);
		}
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.btn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.btn.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.btn = new lib.Символ14();
	this.btn.setTransform(345.1,24.8,0.809,0.809,0,0,0,98.8,20.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 9
	this.instance = new lib.Символ21();
	this.instance.setTransform(759.3,27.6,1,1,0,0,0,155.1,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(477.3,25,1,1,180,0,0,84.4,36.1);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(148.7,25,1,1,0,0,0,18.2,36.1);
	this.instance_2.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(88,25.9,0.864,0.864,0,0,0,88,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 7
	this.instance_4 = new lib.gb();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(475,-75.6,1270.4,162.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
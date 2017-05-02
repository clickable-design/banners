(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/btn.png?1469106566254", id:"btn"},
		{src:"images/hand_saw_PNG9536.png?1469106566254", id:"hand_saw_PNG9536"},
		{src:"images/lod_girl_fon.jpg?1469106566254", id:"lod_girl_fon"},
		{src:"images/nogi.png?1469106566254", id:"nogi"},
		{src:"images/PadLock.png?1469106566254", id:"PadLock"},
		{src:"images/ple4o.png?1469106566254", id:"ple4o"},
		{src:"images/res.png?1469106566254", id:"res"},
		{src:"images/ruka.png?1469106566254", id:"ruka"},
		{src:"images/ruka2.png?1469106566254", id:"ruka2"},
		{src:"images/telo.png?1469106566254", id:"telo"},
		{src:"images/tigolova.png?1469106566254", id:"tigolova"},
		{src:"images/topor10.png?1469106566254", id:"topor10"},
		{src:"images/w256h2561380453915MouseOptions256x25632.png?1469106566254", id:"w256h2561380453915MouseOptions256x25632"}
	]
};



// symbols:



(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,130);


(lib.hand_saw_PNG9536 = function() {
	this.initialize(img.hand_saw_PNG9536);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,100);


(lib.lod_girl_fon = function() {
	this.initialize(img.lod_girl_fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,725,323);


(lib.nogi = function() {
	this.initialize(img.nogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,145);


(lib.PadLock = function() {
	this.initialize(img.PadLock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,61);


(lib.ple4o = function() {
	this.initialize(img.ple4o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,68);


(lib.res = function() {
	this.initialize(img.res);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,872,391);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,81);


(lib.ruka2 = function() {
	this.initialize(img.ruka2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,46);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,100);


(lib.tigolova = function() {
	this.initialize(img.tigolova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,128);


(lib.topor10 = function() {
	this.initialize(img.topor10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,91);


(lib.w256h2561380453915MouseOptions256x25632 = function() {
	this.initialize(img.w256h2561380453915MouseOptions256x25632);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,256);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand_saw_PNG9536();
	this.instance.setTransform(-100.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-50,201,100);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.btn();
	this.instance.setTransform(-64,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-65,128,130);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF33").ss(2,1,1).p("ABkAAIhNAAAgXAAIhMAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF33").ss(2,1,1).p("AAAhjIAABJAAAAaIAABK");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("ADOB1QgLgCgKgDQgLgEgJgGQgKgFgIgHQgIgIgHgKQgHgJgEgLQgFgMgDgNQgCgNAAgOQAAgNACgNQADgNAFgMQAFgLAHgJQAGgKAJgIQAIgHAKgFQAJgHALgDQAKgEALgCIAXgBIAWABQALACAKAEQALADAJAHQAKAFAIAHQAIAIAHAKQAHAJAFALQAFAMACANQADANAAANQAAAMgDANQgCAMgEALQgEALgGAKQgHAJgIAIQgHAIgKAGQgJAGgLAEQgLAFgMACQgMACgNAAgADQg6QgLAFgIAIQgIAIgFALQgFAMAAAOQAAAOAFANQAFALAIAIQAIAIALAFQAKADALAAQALAAALgDQAKgFAIgIQAJgIAEgLQAFgNAAgOQAAgOgFgMQgEgLgJgIQgIgIgKgEQgKgEgLAAQgMAAgKADgAofByQgPgFgLgKQgLgKgGgPQgGgPAAgTIA1AAQAAANAJAJQAJAHANABQAOAAAIgJQAIgHAAgLQAAgKgIgIQgIgIgOAAIgSAAIAAguIARAAQALAAAGgHQAGgGAAgIQAAgJgHgGQgGgFgKgBQgIAAgGAEQgHAFAAAHIg1AAQgBgQAGgMQAFgMALgIQAKgIAOgEQAOgDAPAAQATAAAPAFQAOAGAKAJQAKAKAFAMQAFAMAAANQAAAMgFALQgGAMgKAIQAJAEAHAEQAGAGAEAHQAEAHACAIQACAJAAAJQAAAQgGANQgFANgLAKQgMAKgRAGQgRAFgWAAQgTABgQgGgAINBzIgzhZQgHABgWAAIAABYIg8AAIAAjlIA8AAIAABaIASAAQALAAAFgDQAHgEAFgLQADgIAGgYQADgLAFgJQAGgJAKgFQAKgGAOgCQAQgCATAEIAAApQgLgBgHADQgHAEgDALQgGAVgGAOQgHAPgJAJIBCBnIAAAJgAANBzIAAhrIgvA0IgHAAIgxg0IAABrIg8AAIAAjmIAVAAIBcBkIBZhkIAVAAIAADmgAjqBzIgOgcIhWAAIgNAcIg/AAIAAgIIBqjfIAbAAIBpDfIAAAIgAkLAjIgYg1IgYA1IAwAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-12,118.7,24);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("An0B0IgVgGQgLgEgJgGQgKgFgIgHQgIgIgIgJQgGgJgFgLQgFgLgCgNQgDgNAAgOQAAgNADgNQACgNAFgMQAFgKAGgKQAIgJAIgHQAIgHAKgGQAJgGALgDQAOgFAdgCQATAAARAEQASAGAPAKQATAQAGALIAJASQAEAKACAMIg7AAQgCgJgGgGQgEgGgHgEQgGgEgIgCQgHgCgKAAQgNAAgLAEQgLAFgHAJQgIAIgDALQgFANAAAMQAAAMAFAMQADALAIAJQAHAJALAEQALAFANAAQAJAAAJgCQAIgCAGgEQAIgFAEgHQAFgHACgJIA6AAQgCAMgDAKQgDAKgGAKIgLAPIgOANQgPALgSAGQgSAEgTAAgACHByIAAgrIARAAQAFgCAEgDQAGgFACgTIAQicICjAAIAADlIg8AAIAAivIgyAAIgJBoQgCAZgGAPQgGAPgKAJQgLAHgRABIgKAAQgOAAgSgCgAGNB0IAAjmIA9AAIAABxIB4hyIATAAIAADmIg8AAIAAh1Ih6B2gAhcB0IAAjmIA8AAIAABxIB3hyIATAAIAADmIg9AAIAAh1Ih3B2gAjKBzIAAivIhIAAIAACvIg7AAIAAjlIC/AAIAADlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.7,-11.8,119.5,23.6);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AHlB2QgZgDgRgGIAIgrQASAHAJgDQAGgBAFgFQAFgFAEgJIAHgRIhPiMIAAgIIBDAAIAsBZIACAAIAmhZIBAAAIAAAGIhTCpQgKAVgJAMQgKAOgNAGQgHADgHABIgNABIgEAAgAmmBxIAAgrIARAAQAGgBAEgEQAFgFACgTIAQicICjAAIAADlIg8AAIAAivIgyAAIgJBoQgDAZgFAPQgGAQgKAIQgLAHgRABIgKABQgOAAgSgDgAFeByIgyhZQgHABgWAAIAABYIg8AAIAAjlIA8AAIAABbIARgBQAMAAAFgDQAHgEAEgLQAEgIAFgYQADgLAGgIQAGgKAKgFQAKgGAOgCQAQgCATAFIAAAoQgMgBgGAEQgIAEgCAKQgGAWgGANQgHAQgKAIIBDBnIAAAJgABBByIAAiwIg5AAIAAg1ICsAAIAAA1Ig4AAIAACwgAigByIAAjlICQAAIAAA1IhTAAIAAAhIBNAAIAAAzIhNAAIAAAlIBWAAIAAA3gAn1ByIgyhZQgIABgWAAIAABYIg7AAIAAjlIA7AAIAABbIASgBQALAAAFgDQAIgEAEgLQADgIAGgYQADgLAFgIQAHgKAJgFQAKgGAPgCQAPgCAUAFIAAAoQgMgBgGAEQgIAEgCAKQgGAWgHANQgGAQgKAIIBCBnIAAAJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,-11.8,128.4,23.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AirB1QgagDgQgGIAIgrQASAHAJgDQAGgBAFgFQAEgFAFgJIAHgRIhPiMIAAgIIBDAAIAsBZIACAAIAmhZIBAAAIAAAGIhTCpQgJAVgKAMQgKAOgNAGQgHADgHABIgNACIgEgBgADhByIAAjmIA8AAIAABxIB4hyIATAAIAADmIg8AAIAAh1Ih6B2gAAGBxIAAjlIClAAIAAA1IhrAAIAAAeIArAAQAVAAAPAGQAQAFAKAKQAKAKAGALQAEANAAAPQAAAQgEAOQgGANgKALQgLAKgPAGQgQAGgUAAgABAA8IArAAQAMAAAGgHQAGgGAAgJQAAgKgGgGQgHgHgLAAIgrAAgAmnBxIAAjlIBlAAQALAAAJACQAJACAIADQAPAHALANQAKAMAGAQQAFAPgBARQABAQgGANQgFAPgLAMQgLAMgPAHQgWAHgOAAIgpAAIAAA8gAlsABIAqAAQAMAAAHgJQAGgKABgNQAAgNgHgJQgHgLgMAAIgqAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-11.8,85,23.6);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,0.482],187.5,0,-187.5,0).s().p("A9RHCIAAuDMA6jAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-45,375,90);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,0.482],187.5,0,-187.5,0).s().p("A9RHCIAAuDMA6jAAAIAAODg");
	this.shape.setTransform(-247.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435,-45,375,90);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjnB1QgLgCgKgDQgLgEgJgGQgJgFgIgGIgBgBQgIgIgHgKQgHgJgEgLQgFgMgDgNQgCgNAAgOQAAgNACgNQADgNAFgMQAEgLAHgJQAHgKAJgIQAIgHAKgFQAJgHALgDQAKgEALgCIAXgBIAVABQALACALAEQALADAJAHQAJAFAJAHIAJAJIAGAJQAGAJAGALQAEAMADANQACANABANQgBAMgCANQgCAMgEALQgEALgGAKQgHAJgIAIQgIAIgJAGQgJAGgMAEQgKAFgMACQgMACgNAAgAjlg6QgLAFgIAIQgIAIgFALQgFAMAAAOQAAAOAFANQAFALAIAIIAEAEQAHAFAHAEQAKADAMAAQALAAAKgDQALgFAIgIQAIgIAFgLQAFgNAAgOQAAgOgFgMQgDgIgFgHIgFgEQgIgIgKgEQgKgEgLAAQgMAAgKADgArGB1QgLgCgKgDQgLgEgKgGQgIgFgIgGIgCgBQgHgIgHgKQgHgJgFgLQgFgMgCgNQgDgNAAgOQAAgNADgNQACgNAFgMQAFgLAIgJQAGgKAIgIQAJgHAJgFQAKgHALgDQAKgEALgCIAXgBIAVABQAMACAKAEQAKADAKAHQAKAFAIAHIAJAJIAGAJQAGAJAGALQAFAMACANQADANAAANQAAAMgDANQgCAMgEALQgFALgFAKQgHAJgIAIQgIAIgJAGQgJAGgLAEQgLAFgMACQgNACgNAAgArEg6QgLAFgIAIQgJAIgEALQgFAMAAAOQAAAOAFANQAEALAJAIIAEAEQAHAFAHAEQALADALAAQALAAALgDQAKgFAIgIQAJgIAEgLQAFgNAAgOQAAgOgFgMQgDgIgGgHIgEgEQgIgIgKgEQgLgEgKAAQgMAAgKADgANsB3QgTgCgNgEIgJgEIAHgqQASAHAKgDQAFgBAFgGQAFgFAEgIIAIgRIhQiNIAAgHIBCAAIAsBYIACAAIAohYIBAAAIAAAGIhUCpQgJAVgKALQgKAOgNAHQgGADgJABIgMABIgEAAgAhABzIgIgBIABgrIAQAAQAFgCAFgDQAFgFACgTIAQicIChAAIAADlIg8AAIAAivIgyAAIgJBoQgCAZgGAPQgGAPgIAJQgLAHgSABIgLABIgWgCgALbBzIAAhcIhIAAIAABcIg8AAIAAjlIA8AAIAABTIBIAAIAAhTIA8AAIAADlgAC8BzIAAjlICQAAIAAA0IhTAAIAAAiIBNAAIAAAzIhNAAIAAAlIBWAAIAAA3gAt8BzIgzhZQgGABgWAAIAABYIg9AAIAAjlIA9AAIAABaIARAAQALAAAGgDQAGgEAFgLQAEgIAFgYQADgLAGgJQAFgJAKgFQAKgGAOgCQAQgCATAEIAAApQgLgBgHADQgHAEgDALQgFAVgGAOQgIAPgJAJIBCBnIAAAJgAoTBzIAAjmIBmAAQAKAAAJACQAKACAHAEQAPAHALAMIABABQAKAMAFAPQAGAQgBARQAAAPgFANQgGAQgKALQgLANgPAGQgWAIgOAAIgpAAIAAA8gAnYACIArAAQAMAAAGgIQAHgKAAgNQAAgNgGgJIAAgBQgHgKgMAAIgrAAgAF5ByIAAjlIBmAAQAQAAAOAFQANAFAJAJIAGAGQAFAHAFAKQAFANAAAQQAAAKgFAMQgGALgIAHIAKAEIACACIAEAGIAFAHQAIAMgBARQABAPgFAMQgFANgJAJQgKAKgNAFQgOAGgSAAgAG2A9IAuAAQAIAAAFgGQAEgEABgHQAAgGgCgFIgDgEQgFgGgIAAIguAAgAG2gYIAlAAQAIAAAFgFQAEgGABgHQAAgGgCgFIgDgDQgEgGgJAAIglAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.3,-12,206.6,24);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKsCDIAAgbIiJAAIAAAbIguAAIAAhOIAIAAQANgBAFgGQAEgGACgRIASiUICfAAIAACyIAXAAIAABOgAJRAZQgDAXgIAGIBEAAIAAh/IgvAAgAFRBqQgLgCgLgDQgKgEgJgGQgJgFgIgGIgBgCQgJgHgGgKQgHgJgFgLQgEgMgDgNQgDgNABgNQgBgOADgOQADgNAEgLQAFgLAHgKQAHgJAIgIQAJgHAJgGQAKgGAKgDQALgEALgCIAWgCIAXACQAKACALAEQAKADAKAGQAKAGAHAHIAJAJIAHAIQAHAKAEALQAFALADANQADAOgBAOQABALgDANQgCAMgFALQgDALgHAJQgGAKgIAIQgIAIgJAGQgKAGgLAEQgKAFgMACQgNACgMAAgAFThFQgLAEgIAIQgJAIgEAMQgFAMAAAPQAAANAFAMQAEAMAJAIIAEAEQAGAFAJADQAJAEAMAAQALAAAKgEQAKgEAJgIQAJgIAEgMQAFgMAAgNQAAgPgFgMQgEgIgEgHIgFgFQgIgHgKgEQgLgEgLAAQgLAAgKADgAiPBqQgLgCgKgDQgKgEgKgGQgJgFgHgGIgCgCQgIgHgGgKQgIgJgEgLQgFgMgCgNQgDgNAAgNQAAgOADgOQACgNAFgLQAFgLAHgKQAGgJAJgIQAJgHAJgGQAJgGALgDQAKgEALgCIAXgCIAWACQALACAKAEQALADAKAGQAJAGAIAHIAJAJIAGAIQAHAKAFALQAFALACANQADAOAAAOQAAALgDANQgBAMgFALQgEALgGAJQgGAKgJAIQgHAIgKAGQgJAGgLAEQgKAFgNACQgMACgNAAgAiNhFQgLAEgIAIQgIAIgEAMQgGAMAAAPQAAANAGAMQAEAMAIAIIAFAEQAGAFAIADQAKAEAMAAQAKAAALgEQAKgEAIgIQAJgIAEgMQAGgMgBgNQABgPgGgMQgDgIgFgHIgFgFQgIgHgKgEQgKgEgLAAQgMAAgKADgAttBqQgLgCgLgDQgKgEgJgGQgJgFgIgGIgBgCQgJgHgGgKQgHgJgEgLQgFgMgDgNQgDgNABgNQgBgOADgOQADgNAFgLQAFgLAGgKQAHgJAJgIQAIgHAKgGQAJgGAKgDQALgEALgCIAWgCIAWACQAMACAKAEQAKADAKAGQAJAGAIAHIAJAJIAHAIQAHAKAEALQAFALADANQADAOgBAOQABALgDANQgCAMgFALQgEALgGAJQgGAKgIAIQgIAIgJAGQgKAGgLAEQgKAFgMACQgNACgMAAgAtrhFQgLAEgIAIQgJAIgEAMQgFAMAAAPQAAANAFAMQAEAMAJAIIAEAEQAHAFAIADQAKAEALAAQALAAAKgEQAKgEAJgIQAJgIAEgMQAFgMAAgNQAAgPgFgMQgEgIgEgHIgFgFQgIgHgKgEQgKgEgMAAQgLAAgKADgApmBoIgWgFQgKgEgKgGIgRgMIAAAAQgIgIgIgJQgGgJgFgLQgFgLgDgNQgCgNAAgMQAAgPACgNQADgNAFgMQAFgKAGgKQAIgJAIgHQAIgHAJgGQAKgGAKgDQAOgFAegDQASAAASAFQASAGAPAKIARAQIAJALIAJASQADAKABAMIg5AAQgEgJgEgGIgBgBQgEgGgGgEQgHgDgIgCQgIgCgJAAQgNAAgLAEQgLAFgHAIQgIAJgEALQgDAMAAAOQAAALADALQAEAMAIAIIAHAHQAFAEAGADQALAFANAAQAJAAAIgCQAJgCAHgFQAGgFAFgGQAFgHACgKIA6AAIgBAIIgEAPQgDAKgFAJIgMAQIgOANQgPALgTAFQgRAFgTAAgAMGBoIAAjlIA8AAIAABxIB4hyIATAAIAADmIg8AAIAAh1Ih6B1gAAjBoIAAjlIClAAIAAA1IhrAAIAAAeIArAAQAUAAAQAFQAPAFALAKIAFAGQAHAIAEAIQAEAMAAAQQAAAPgEAOQgGAOgKAKQgLALgPAGQgQAGgUAAgABdAzIAqAAQAMAAAHgHQAGgHAAgJQAAgGgCgFIgEgEQgHgHgMAAIgqAAgAnABmIAAjkIBmAAQARAAANAFQANAFAKAJIAFAFQAGAIAEAJQAGAOAAAQQgBAKgFAMQgFALgJAHIALAGIACACIAEAFIAFAFQAHANAAAQQAAAPgFANQgFANgIAJQgKAKgOAFQgOAFgRAAgAmDAyIAuAAQAJAAAEgGQAFgEAAgIQABgGgCgEIgDgEQgFgGgJAAIguAAgAmDgjIAlAAQAJAAAEgGQAFgFAAgHQAAgHgCgEIgCgDQgFgHgJAAIglAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-13.1,194.8,26.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AKsCDIAAgbIiJAAIAAAbIguAAIAAhOIAIAAQANgBAFgGQAEgGACgRIASiUICfAAIAACyIAXAAIAABOgAJRAZQgDAXgIAGIBEAAIAAh/IgvAAgAFRBqQgLgCgLgDQgKgEgJgGQgJgFgIgGIgBgCQgJgHgGgKQgHgJgFgLQgEgMgDgNQgDgNABgNQgBgOADgOQADgNAEgLQAFgLAHgKQAHgJAIgIQAJgHAJgGQAKgGAKgDQALgEALgCIAWgCIAXACQAKACALAEQAKADAKAGQAKAGAHAHIAJAJIAHAIQAHAKAEALQAFALADANQADAOgBAOQABALgDANQgCAMgFALQgDALgHAJQgGAKgIAIQgIAIgJAGQgKAGgLAEQgKAFgMACQgNACgMAAgAFThFQgLAEgIAIQgJAIgEAMQgFAMAAAPQAAANAFAMQAEAMAJAIIAEAEQAGAFAJADQAJAEAMAAQALAAAKgEQAKgEAJgIQAJgIAEgMQAFgMAAgNQAAgPgFgMQgEgIgEgHIgFgFQgIgHgKgEQgLgEgLAAQgLAAgKADgAiPBqQgLgCgKgDQgKgEgKgGQgJgFgHgGIgCgCQgIgHgGgKQgIgJgEgLQgFgMgCgNQgDgNAAgNQAAgOADgOQACgNAFgLQAFgLAHgKQAGgJAJgIQAJgHAJgGQAJgGALgDQAKgEALgCIAXgCIAWACQALACAKAEQALADAKAGQAJAGAIAHIAJAJIAGAIQAHAKAFALQAFALACANQADAOAAAOQAAALgDANQgBAMgFALQgEALgGAJQgGAKgJAIQgHAIgKAGQgJAGgLAEQgKAFgNACQgMACgNAAgAiNhFQgLAEgIAIQgIAIgEAMQgGAMAAAPQAAANAGAMQAEAMAIAIIAFAEQAGAFAIADQAKAEAMAAQAKAAALgEQAKgEAIgIQAJgIAEgMQAGgMgBgNQABgPgGgMQgDgIgFgHIgFgFQgIgHgKgEQgKgEgLAAQgMAAgKADgAttBqQgLgCgLgDQgKgEgJgGQgJgFgIgGIgBgCQgJgHgGgKQgHgJgEgLQgFgMgDgNQgDgNABgNQgBgOADgOQADgNAFgLQAFgLAGgKQAHgJAJgIQAIgHAKgGQAJgGAKgDQALgEALgCIAWgCIAWACQAMACAKAEQAKADAKAGQAJAGAIAHIAJAJIAHAIQAHAKAEALQAFALADANQADAOgBAOQABALgDANQgCAMgFALQgEALgGAJQgGAKgIAIQgIAIgJAGQgKAGgLAEQgKAFgMACQgNACgMAAgAtrhFQgLAEgIAIQgJAIgEAMQgFAMAAAPQAAANAFAMQAEAMAJAIIAEAEQAHAFAIADQAKAEALAAQALAAAKgEQAKgEAJgIQAJgIAEgMQAFgMAAgNQAAgPgFgMQgEgIgEgHIgFgFQgIgHgKgEQgKgEgMAAQgLAAgKADgApmBoIgWgFQgKgEgKgGIgRgMIAAAAQgIgIgIgJQgGgJgFgLQgFgLgDgNQgCgNAAgMQAAgPACgNQADgNAFgMQAFgKAGgKQAIgJAIgHQAIgHAJgGQAKgGAKgDQAOgFAegDQASAAASAFQASAGAPAKIARAQIAJALIAJASQADAKABAMIg5AAQgEgJgEgGIgBgBQgEgGgGgEQgHgDgIgCQgIgCgJAAQgNAAgLAEQgLAFgHAIQgIAJgEALQgDAMAAAOQAAALADALQAEAMAIAIIAHAHQAFAEAGADQALAFANAAQAJAAAIgCQAJgCAHgFQAGgFAFgGQAFgHACgKIA6AAIgBAIIgEAPQgDAKgFAJIgMAQIgOANQgPALgTAFQgRAFgTAAgAMGBoIAAjlIA8AAIAABxIB4hyIATAAIAADmIg8AAIAAh1Ih6B1gAAjBoIAAjlIClAAIAAA1IhrAAIAAAeIArAAQAUAAAQAFQAPAFALAKIAFAGQAHAIAEAIQAEAMAAAQQAAAPgEAOQgGAOgKAKQgLALgPAGQgQAGgUAAgABdAzIAqAAQAMAAAHgHQAGgHAAgJQAAgGgCgFIgEgEQgHgHgMAAIgqAAgAnABmIAAjkIBmAAQARAAANAFQANAFAKAJIAFAFQAGAIAEAJQAGAOAAAQQgBAKgFAMQgFALgJAHIALAGIACACIAEAFIAFAFQAHANAAAQQAAAPgFANQgFANgIAJQgKAKgOAFQgOAFgRAAgAmDAyIAuAAQAJAAAEgGQAFgEAAgIQABgGgCgEIgDgEQgFgGgJAAIguAAgAmDgjIAlAAQAJAAAEgGQAFgFAAgHQAAgHgCgEIgCgDQgFgHgJAAIglAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-13.1,194.8,26.3);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.topor10();
	this.instance.setTransform(-100,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-45.5,200,91);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("ACBEwIgagEIgagGIgKgEIgMgBIg0gDIgLgCIgHgDIgfgBIAAgBIgEgBIgRgHIgMgDIgNgEIgLgGIgMgGIgLgCQgJgCgNgIQgQgJgGgCQgLgFgNAAQgGgBAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIADgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIABgBIAAAAIAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAABAAIAEAAIACgCIAJgDIAGgBQADABAIgDIACAAIAHgDIAJgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAgBIABABIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgEIADgOIAHgNIAfgwQAKgOAGgGIAFgEIAHgCIAKgGQANgJARgFIABAAIAIAAIAEABIAGgCIABAAQAZgBAPAFQALAFAJAGQAnAYAQAYQAYAiABA6IgCA4IgDA/QACAAAFACIARAGIAEABIACABIAEAAIAPACQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIANACIAFABQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIABAAIAAAAIACAAIABACIAAABIAAABIgBACIgBABIAAABIAAACIAAAAIAAAAIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAACIAAAFQgBADgGADQgJAFgDADIgCACIgCABIgDADQgDADgFADIgEACIgDADQgDADgEACIgCABIgBABIgDACIgBABIgCABIgBABIgBAAIAAACIgBABIgBABIgCABIgBABIgEABIgDAAgAADgyIBBAOQAGgWABgVIAAgWQgCg2gEgUQgEgegPgNIgIgGIgIgHQgKgLgCgBQgDgDgJgBIgOAAQgGABgKAGQgXAPgOAUIgIANQgHAQABAhIAABUIANAEIAIACIAOAEQAFABAJgBIAWgBIADAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-30.4,40.6,61);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.PadLock();
	this.instance.setTransform(-20,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-30.5,40,61);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lod_girl_fon();
	this.instance.setTransform(-362.5,-161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.5,-161.5,725,323);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telo();
	this.instance.setTransform(-57,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-50,114,100);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tigolova();
	this.instance.setTransform(-77,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-64,154,128);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ple4o();
	this.instance.setTransform(-26.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-34,53,68);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.nogi();
	this.instance.setTransform(-51,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-72.5,102,145);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka2();
	this.instance.setTransform(-33,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-23,66,46);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.setTransform(-26,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-40.5,52,81);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A0sG3IAAttMApZAAAIAANtg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w256h2561380453915MouseOptions256x25632();
	this.instance.setTransform(-30,-30,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguA0IAAhnIAgAAIAAApIAPAAQAXgBAMAJQALAHAAARQAAAPgKAHQgLAIgTAAgAgOAdIAOAAQAPAAAAgLQAAgJgPAAIgOAAg");
	this.shape.setTransform(127,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEA0IAAhnIAgAAIAABNIAVAAIAAhNIAeAAIAABNIAWAAIAAhNIAgAAIAABng");
	this.shape_1.setTransform(113.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjA0IAAhnIAgAAIAABngAhCA0IAAhnIAgAAIAAApIARAAQAVgBAMAJQALAHAAARQAAAPgKAHQgLAIgRAAgAgiAdIAQAAQAPAAAAgLQAAgJgPAAIgQAAg");
	this.shape_2.setTransform(97.2,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgA0IAAhOIgVBOIgVAAIgVhOIAABOIgaAAIAAhnIAqAAIAPA+IAQg+IAqAAIAABng");
	this.shape_3.setTransform(82.5,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA0IAAg4IglA4IgeAAIAAhnIAeAAIAAA4IAlg4IAeAAIAABng");
	this.shape_4.setTransform(64.7,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhA/IAAgXIhAAAIAAAXIgaAAIAAgvIAKAAQAKgXgBggIAAgXIBWAAIAABOIAKAAIAAAvgAgJgjQABAWgIAdIAfAAIAAg0IgYAAg");
	this.shape_5.setTransform(52.6,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgqA0IAAhnIBUAAIAAAXIg0AAIAAAQIAwAAIAAAUIgwAAIAAAUIA1AAIAAAYg");
	this.shape_6.setTransform(41.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA0IAAhnIA7AAQAPABAIAHQAIAHAAALQAAAKgGAGQgEAFgHACQALACAFAGQAGAGAAAKQAAAIgEAGQgEAHgHADQgEADgIABIgOACgAgOAdIAOAAQAJAAADgCQADgEAAgFQAAgEgDgDQgDgDgJAAIgOAAgAgOgJIAOAAQAFAAADgDQADgDAAgEQAAgGgDgCQgDgDgFAAIgOAAg");
	this.shape_7.setTransform(30.7,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA0IgGgRIgiAAIgFARIghAAIAnhnIAhAAIAnBngAALAMIgLgkIgKAkIAVAAg");
	this.shape_8.setTransform(19.2,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARA0IAAgqIghAAIAAAqIggAAIAAhnIAgAAIAAAlIAhAAIAAglIAgAAIAABng");
	this.shape_9.setTransform(7.5,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,133.6,23.1);


(lib.shape109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AETAAQAABxhRBRQhRBRhxAAQhwAAhRhRQhRhRAAhxQAAhwBRhRQBRhRBwAAQBxAABRBRQBRBRAABwg");
	this.shape.setTransform(27.5,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.3,x:8},4,cjs.Ease.get(-1)).to({rotation:-13.4,x:20},6,cjs.Ease.get(1)).to({rotation:-6.6,x:10},4,cjs.Ease.get(-1)).to({rotation:0,x:0},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-50,201,100);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.5,x:-4.3,y:-7.7},5,cjs.Ease.get(-1)).to({rotation:-9.2,x:-8.5,y:-15.4},5,cjs.Ease.get(1)).to({rotation:-4.5,x:-4.2,y:-7.7},6,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-45.5,200,91);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(0,0,0.723,0.723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,-47,92.5,94);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ55();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-45.5,200,91);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-50,201,100);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.5,-45,375,90);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ37();
	this.instance.setTransform(0,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.7},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.7},0).wait(1).to({rotation:0},0).wait(32));

	// Слой 1
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(19,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({rotation:1.7},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,-29.3,128.4,58.6);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.setTransform(0.8,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:1.5},0).wait(1).to({rotation:0},0).wait(4).to({rotation:-1.7},0).wait(1).to({rotation:0},0).wait(3));

	// Слой 1
	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(-0.4,-16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({rotation:2.2},0).wait(1).to({rotation:0},0).wait(5).to({rotation:-1.8},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,-28.6,120.3,57.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.527},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-13.1,194.8,26.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(-0.4,-0.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.473},9,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AjnB2QgLgCgLgEQgKgEgKgGQgIgFgIgGIgCgBQgHgIgHgJQgHgKgFgLQgEgLgDgNQgCgNgBgPQABgNACgOQADgNAEgLQAGgLAHgKQAGgJAIgHQAJgIAJgGQAKgFAKgEQALgEALgCIAWgCIAXACQALACAKAEQAKAEAKAFQAKAGAHAIIAJAIIAHAIQAGAKAFALQAFALADANQACAOAAANQAAANgCAMQgCAMgFALQgDALgHAJQgGAKgIAIQgHAIgKAGQgKAHgKAEQgLAEgMACQgMACgOABgAjlg6QgLAFgIAHQgIAJgFALQgFAMAAAOQAAAPAFAMQAFALAIAJIAEADQAGAFAJADQAKAEALAAQALAAALgEQAJgEAJgHQAIgJAFgLQAFgMAAgPQAAgOgFgMQgDgIgGgHIgEgFQgIgHgKgEQgLgEgLAAQgLAAgKADgArGB2QgLgCgLgEQgKgEgJgGQgJgFgIgGIgBgBQgJgIgGgJQgHgKgFgLQgEgLgDgNQgDgNABgPQgBgNADgOQADgNAEgLQAFgLAHgKQAHgJAIgHQAJgIAJgGQAKgFAKgEQALgEALgCIAWgCIAXACQAKACALAEQAKAEAKAFQAKAGAHAIIAJAIIAHAIQAHAKAEALQAFALADANQADAOgBANQABANgDAMQgCAMgFALQgDALgHAJQgGAKgIAIQgIAIgJAGQgKAHgLAEQgKAEgMACQgNACgNABgArEg6QgLAFgIAHQgJAJgEALQgFAMAAAOQAAAPAFAMQAEALAJAJIAEADQAGAFAJADQAJAEAMAAQALAAAKgEQAKgEAJgHQAJgJAEgLQAFgMAAgPQAAgOgFgMQgDgIgGgHIgEgFQgIgHgKgEQgLgEgLAAQgLAAgKADgANsB3QgTgDgOgEIgJgCIAIgrQASAGAJgCQAGgCAFgEQAFgGAEgJIAHgQIhPiMIAAgIIBDAAIADAIIApBRIACAAIAAgDIAmhWIBAAAIAAAGIgBACIhSCmQgKAWgJAMQgKAOgNAFQgHAEgHABIgNABIgEAAgAhABzIgJgCIABgrIAQAAQAHAAADgEQAGgFACgUIAQibIChAAIAAAIIAADdIg0AAIgIAAIAAinIAAgIIgyAAIgJBoQgCAZgGAPQgGAQgJAIQgKAGgSACIgJAAIgYgBgALjBzIgIAAIAAhUIAAgJIhIAAIAABdIg0AAIgIAAIAAjlIA8AAIAAAIIAABLIAIAAIBAAAIAAhTIA8AAIAAAIIAADdgADEBzIgHAAIAAjlICQAAIAAAIIAAAtIhVAAIAAAgIAIAAIBGAAIAAAIIAAArIhOAAIAAAmIAIAAIBQAAIAAAIIAAAvgAt4BzIgEAAIguhRIgEgIQgIABgWAAIAABYIgzAAIgIAAIAAjlIA7AAIAAAIIAABTIAIgBIAKAAQALgBAFgCQAIgEAEgLQAEgJAFgXQADgLAFgJQAHgJAJgGQAKgFAPgCQAPgCAUAFIAAAGIAAAiQgMgBgGAEQgIADgCAKQgHAXgGANQgGAQgKAIIBCBnIAAAJgAoLByIgIAAIAAjkIBmAAQAKAAAKACQAJACAIADQAPAHALANIAAAAQAKAMAFAQQAFAPAAAQQAAARgGANQgFAPgKAMQgLAMgPAHQgWAHgOAAIgqAAIAAA7gAnYADIAJAAIAiAAQALAAAIgJQAGgKAAgNQAAgNgFgJIgBAAQgHgLgMAAIgrAAgAGBBxIgIAAIAAjkIBmAAQAQAAANAFQAOAFAKAKIAEAEQAHAIADAJQAGAOAAAQQAAALgFALQgGALgIAHIAKAFIACACIAFAEIAEAHQAHANAAAQQAAAQgEAMQgFANgJAKQgJAJgPAFQgOAGgQgBgAG1A9IAIAAIAnAAQAIAAAFgFQAEgFABgIQAAgGgCgEIgCgDQgGgHgJAAIguAAgAG1gYIAIAAIAeAAQAIAAAFgGQAFgEgBgIQABgGgDgFIgBgDQgFgHgJAAIgmAAg");
	this.shape.setTransform(-0.4,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("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");
	this.shape_1.setTransform(0.4,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-12.4,207.4,24.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("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");
	this.shape.setTransform(1.9,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.8,-13.5,195.6,27.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(0.3,17.1);

	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-6.9,-16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-30.3,208.7,59.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.alpha = 0.469;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.223},10,cjs.Ease.get(-1)).to({alpha:0},9,cjs.Ease.get(1)).to({alpha:0.234},10,cjs.Ease.get(-1)).to({alpha:0.469},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-30.4,40.6,61);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-30.5,40,61);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.5,-161.5,725,323);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ19();
	this.instance.setTransform(-0.2,0.3);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ17();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-30.5,40.6,61.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgbA6QABgJAAgMIgBAAIgCgBIAAgbIgBgSQgBgHABgHIAAgFIgCgLIgBgGIAAgBIAAgBIgBgEIAAgCIgBgDQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAAAAIABAAIAAAAIABAAQADABABAGIABABIABACIAAAKQABARAAAYIAAALQAEAbgCAOQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBAAgAAfA6IgChhIAAgCIAAAAQgBgFABgDIAAgBIgBgFIAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIABACIAAACIAAAFIABALIABBNIAAAEIAAADIAAACIAAAFQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIgDABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(396,133.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaBBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIgCADQgDABgDgCQgCgCgBgEQgCgFABgKIgEhIQAAgFACgCQACgFAEACIAAgOQABgHAFAAQAAgEAEAAIAAAAQAFgBABAFQAAgBAAAAQABABAAAAQAAAAAAAAQABABAAAAIAAAEIABBqIgBAGQgDAFABADIgCABIgDgBgAAgA5QAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAEADADgBIAEgCQABgBAAAAQABAAAAAAQABABAAAAQAAAAAAABIACAFIgEBdIAAADIgDACIgBAAIABAJIgBAEIgDABIgDgCg");
	this.shape_1.setTransform(395.1,132.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 6
	this.instance = new lib.Символ4();
	this.instance.setTransform(395.4,147.6,0.575,0.575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.res();
	this.instance_1.setTransform(-62.7,-39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.7,-39.8,872,391);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ruka
	this.instance = new lib.Символ7();
	this.instance.setTransform(34,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-10.8,x:45.7,y:158.4},19,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-22.7,x:58.8,y:159.3},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-11.3,x:46.4,y:158.5},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:34,y:157.5},20,cjs.Ease.get(1)).wait(1));

	// ruka2
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(166,115);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-8.5,x:168.6,y:107.3},19,cjs.Ease.get(-1)).to({rotation:-18.2,x:171.4,y:98.8},20,cjs.Ease.get(1)).to({rotation:-9,x:168.7,y:106.9},20,cjs.Ease.get(-1)).to({rotation:0,x:166,y:115},20,cjs.Ease.get(1)).wait(1));

	// nogi
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(97,227.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80));

	// ple4o
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(122.5,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-9.1,x:126.8,y:89.3},19,cjs.Ease.get(-1)).to({rotation:-19.5,x:131.6,y:91.8},20,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-9.6,x:127.1,y:89.4},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:122.5,y:87},20,cjs.Ease.get(1)).wait(1));

	// tigolova
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(118,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:2.6,x:123.2,y:72.3},19,cjs.Ease.get(-1)).to({rotation:5.7,x:128.9,y:74.9},20,cjs.Ease.get(1)).to({rotation:2.8,x:123.5,y:72.5},20,cjs.Ease.get(-1)).to({rotation:0,x:118,y:70},20,cjs.Ease.get(1)).wait(1));

	// telo
	this.instance_5 = new lib.Символ12();
	this.instance_5.setTransform(115,159);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:1,skewX:3,x:117.7},19,cjs.Ease.get(-1)).to({scaleY:1.01,skewX:6.4,x:120.7},20,cjs.Ease.get(1)).to({scaleY:1,skewX:3.1,x:117.9},20,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:115},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,6,191,294);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol36();
	this.instance.setTransform(66.8,11.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,133.6,23.1);


(lib.sprite110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape109("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,58,58);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween22("synched",0);
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 4
	this.instance = new lib.Символ46();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Слой 2
	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(70,50,1,1,0,93.6,-86.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ55();
	this.instance_2.setTransform(60,50,1,0.999,0,90,-90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,22,22);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.751,0.751,-74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-69.4,y:3.6},4,cjs.Ease.get(-1)).to({rotation:-63.3,y:8},5,cjs.Ease.get(1)).to({rotation:-68.7,y:4},5,cjs.Ease.get(-1)).to({rotation:-74.2,y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-81.6,106.6,163.2);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(0,16,0.597,0.597,0,86.4,-93.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:86.5,skewY:-93.5,y:8.1},5,cjs.Ease.get(-1)).to({skewX:86.4,skewY:-93.6,y:0},5,cjs.Ease.get(1)).to({skewX:86.5,skewY:-93.5,y:7.1},4,cjs.Ease.get(-1)).to({skewX:86.4,skewY:-93.6,y:16},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-45.8,67.2,123.6);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-4.8,-1.3);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(0,0,0.916,1,0,0,180);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.8,-45,343.6,90);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.setTransform(-32.6,1.6);

	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(-12,0);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-45,375,90);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-29.9,208.7,59.8);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.5,-161.5,725,323);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(323.6,143.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03},14,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},15,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-17.9,725,323);


(lib.sprite112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(1.5,21.8,0.85,0.85,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[1.5,21.7,1.5,21.3,1.5,20.9,1.5,15.3,5.6,11.2,9.7,7.1,15.3,7.1,21.1,7.1,25.2,11.2,29.3,15.3,29.3,20.9,29.3,26.7,25.2,30.8,21.1,34.9,15.3,34.9,9.7,34.9,5.6,30.8,3.3,28.5,2.3,25.7]}},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-3.7,51,51);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(9).call(this.frame_13).wait(6));

	// Слой 3
	this.instance = new lib.Символ45();
	this.instance.setTransform(-141.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.71,scaleY:0.71,x:-199.8,y:11.8},4).wait(9).to({scaleX:1,scaleY:1,x:-141.5,y:0},5).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(-128,-13,0.723,0.723);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.52,scaleY:0.52,x:-190.1,y:2.6},4).wait(9).to({scaleX:0.72,scaleY:0.72,x:-128,y:-13},5).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(-243.6,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.71,scaleY:0.71,x:-272.7,y:0.9},4).wait(9).to({scaleX:1,scaleY:1,x:-243.6,y:-15.3},5).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ44();
	this.instance_3.setTransform(103.4,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.73,scaleY:0.73,x:134.4,y:-1},4).wait(9).to({scaleX:1,scaleY:1,x:103.4,y:-15.4},5).wait(1));

	// Слой 6
	this.instance_4 = new lib.Символ51();
	this.instance_4.setTransform(88,-13);
	this.instance_4.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 159))];
	this.instance_4.cache(-48,-49,97,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.73,scaleY:0.73,x:123.2,y:0.8},4).wait(9).to({scaleX:1,scaleY:1,x:88,y:-13},5).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ40();
	this.instance_5.setTransform(227.9,-16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.73,scaleY:0.73,x:224.6,y:-1.5},4).wait(9).to({scaleX:1,scaleY:1,x:227.9,y:-16.1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415.4,-81.6,818.8,163.2);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94},4,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86},5,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-29.9,208.7,59.8);


(lib.sprite113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sprite112();
	this.instance.setTransform(11.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Layer 1
	this.instance_1 = new lib.sprite110();
	this.instance_1.setTransform(-8.7,-8.7,1.316,1.316);
	this.instance_1.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-10.6,78.2,76.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3},6,cjs.Ease.get(-1)).to({rotation:-6.7},7,cjs.Ease.get(1)).to({rotation:-3.3},7,cjs.Ease.get(-1)).to({rotation:0},7,cjs.Ease.get(1)).to({rotation:4.3},7,cjs.Ease.get(-1)).to({rotation:9},7,cjs.Ease.get(1)).to({rotation:4.3},7,cjs.Ease.get(-1)).to({rotation:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-29.9,208.7,59.8);


(lib.Символ9_1 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(-92.9,0.6,1,1,0,0,0,66.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// Слой 1
	this.cir = new lib.sprite113();
	this.cir.setTransform(0.1,0.1,0.499,0.499,0,0,0,27.6,27.6);

	this.timeline.addTween(cjs.Tween.get(this.cir).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.7,-19,178.8,38.1);


// stage content:



(lib._600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.jail.x = -stage.mouseX / 10;
			this.fon.x = stage.mouseX / 30;
			this.jail.y = -stage.mouseY / 20;
			this.fon.y = stage.mouseY / 40;
		}
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover() {
			this.mouse1.gotoAndStop(1);
			this.txt.gotoAndPlay(1);
		
		}
		
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout() {
			this.mouse1.gotoAndStop(0);
			this.txt.gotoAndPlay(15);
			this.pricel.gotoAndStop(0);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		
		
		this.bb4.addEventListener("mouseover", fl_mouseout1.bind(this));
		
		function fl_mouseout1() {
			this.pricel.gotoAndStop(1);
		
		}
		
		
		
		this.bb5.addEventListener("mouseover", fl_mouseout2.bind(this));
		
		function fl_mouseout2() {
			this.pricel.gotoAndStop(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.pricel = new lib.Символ58();
	this.pricel.setTransform(1190,-195.3);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 5
	this.bb4 = new lib.Символ5();
	this.bb4.setTransform(132.5,247);
	new cjs.ButtonHelper(this.bb4, 0, 1, 2, false, new lib.Символ5(), 3);

	this.bb5 = new lib.Символ5();
	this.bb5.setTransform(467.5,247);
	new cjs.ButtonHelper(this.bb5, 0, 1, 2, false, new lib.Символ5(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bb5},{t:this.bb4}]}).wait(1));

	// Слой 10
	this.txt = new lib.Символ48();
	this.txt.setTransform(332.6,261.5);

	this.mouse1 = new lib.Символ9_1();
	this.mouse1.setTransform(579,25.2,0.898,0.898);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouse1},{t:this.txt}]}).wait(1));

	// Слой 6
	this.instance = new lib.Символ30();
	this.instance.setTransform(116.4,53.7,0.802,0.802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.jail = new lib.Символ3();
	this.jail.setTransform(-28.1,-9.8);

	this.timeline.addTween(cjs.Tween.get(this.jail).wait(1));

	// girl
	this.girl = new lib.Символ1();
	this.girl.setTransform(266.1,201,1,1,-5,0,0,101,159);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(345,53);
	this.instance_1.alpha = 0.461;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.fon = new lib.Символ2();
	this.fon.setTransform(-16.3,6.7);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(209.1,-56.3,1291.9,552.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
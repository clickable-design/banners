(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bulletblacksilhouette.png?1464089166025", id:"bulletblacksilhouette"},
		{src:"images/city_sniper_back.jpg?1464089166025", id:"city_sniper_back"},
		{src:"images/d006.png?1464089166025", id:"d006"},
		{src:"images/fire.png?1464089166025", id:"fire"},
		{src:"images/gun.png?1464089166025", id:"gun"},
		{src:"images/shield.png?1464089166025", id:"shield"},
		{src:"images/zoom.jpg?1464089166025", id:"zoom"}
	]
};



// symbols:



(lib.bulletblacksilhouette = function() {
	this.initialize(img.bulletblacksilhouette);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.city_sniper_back = function() {
	this.initialize(img.city_sniper_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,771,400);


(lib.d006 = function() {
	this.initialize(img.d006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,100);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,99);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,200);


(lib.shield = function() {
	this.initialize(img.shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.zoom = function() {
	this.initialize(img.zoom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,887,400);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArLDwQgQgGgLgKQgQgOgGgVQgEgOAAgWIAAjdQAAgWAEgPQAGgUAQgOQALgJAQgGQAUgHAaAAQAUAAARAEQAVAFAPANQAQAPAGATQAEAOAAAXIAAAmIhOAAIAAgoQgBgNgCgHQgEgMgOAAQgOAAgFAMQgCAHAAANIAADhQAAANACAHQAFAMAOAAQAOAAAEgMQACgHABgNIAAg/IBOAAIAAA9QAAAXgEAOQgGATgQAPQgPANgVAFQgRAEgUAAQgaAAgUgGgAKzDxIAAi7IACgdIgsCbIAAA9IhOAAIAAmNIBOAAIgCDWIAsiYIAAg+IBOAAIAAGNgAHEDxIAAivIgLAAQgNABgHAGQgFAHgBAUIAABeQABAdgLASIhYAAIAAgEQAMgDAEgLQAEgKAAgcIAAhWQAAgRADgKQAEgPANgJQALgHAQgFIAAgDQgUgFgNgGQgLgHgFgJQgDgHAAgLIAAhPQABgaAKgPQAKgOAQgGQANgEARAAICEAAIAAGNgAGdhbQgCAFAAAPIAAA0QAAAOAIAGQAFAFAMABIAQAAIAAhrIgUAAQgNAAgGAJgADYDxIAAlVIgjAAIAACCQABBIgDAaQgDAZgFASQgGAWgKAPQgLARgQAIQgSAIgdAAIgPAAIAAg6QAQgBALgNQAQgVgBhIIAAjoIC7AAIAAGNgAh/DxIAAmNICwAAIAAA4IhiAAIAABfIBKAAIAAA3IhKAAIAACHIBrAAIAAA4gAliDxIAAmNIB3AAQAVAAARAHQARAGAJALQAKAMADAUQACAKAAAVIAAA8QABAtgQATQgNANgUAFQgMADgXAAQgVABgQgEIAACogAkUARIAUAAQAOAAAFgLQACgGABgTIAAguQgBgTgEgHQgGgJgKAAIgVAAgAn4DxIAAlVIgxAAIAAg4ICwAAIAAA4IgwAAIAAFVgAKFivQgNgDgMgKQgLgIgHgMQgKgRAAgUIA0AAQgCANAGAKQAHANAQAAQAOAAAHgNQAGgKgCgNIA0AAQAAAUgKARQgGAMgMAIQgMAKgNADQgKADgPABQgPgBgKgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-24.7,153.9,49.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmAiIAAgPIACAAIAGgBIAFgDIADgEIACgHIAFgmIA1AAIAABCIgRAAIAAgzIgVAAIgDAXQAAAIgDAFQgCAGgDAEQgEAEgEACQgEACgGAAIgJgBg");
	this.shape.setTransform(114.6,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAjIgHgBQgJgFgEgDQgFgFgDgHQgBgEgBgKQAAgEACgJQADgHAFgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAHADAEAFQAFAFADAHQACAJAAAEIgIAIIgqAAIACAFIAFAEIAGAEIAGABQALAAAHgGIAHAMQgKAIgQAAgAARgEIgCgGIgEgGIgFgDIgGgBIgFABIgFADIgDAGIgCAGIAgAAIAAAAg");
	this.shape_1.setTransform(106.6,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAqIAAgRIg4AAIAAhCIASAAIAAA0IAbAAIAAg0IASAAIAAA0IALAAIAAAfg");
	this.shape_2.setTransform(98.4,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAiIAAgpIgBAAIgeApIgSAAIAAhDIASAAIAAApIABAAIAegpIASAAIAABDg");
	this.shape_3.setTransform(89.1,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAvIAAhYQAPgFAQAAQAEAAAKACQAFACAIAGQAFAFADAHQADAJAAAFIgBAIIgCAEQgDAHgFAFIgNAIQgKACgEABQgGAAgHgCIAAAYgAgQgdIAAAlQAHACAGAAQADAAAEgCIAHgEIAEgFQACgEAAgFQAAgEgCgEIgEgIQgDgCgEgCQgEgCgDAAQgGAAgHADg");
	this.shape_4.setTransform(80.6,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAiIAAg0IgdAAIAAA0IgSAAIAAhDIBBAAIAABDg");
	this.shape_5.setTransform(71.8,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAyIAAgqIgBAAIgeAqIgSAAIAAhCIASAAIAAApIABAAIAegpIASAAIAABCgAgIgcQgFgCgDgDQgDgDgBgEQgCgEAAgFIANAAQABAEACADQADADADAAQAEAAADgDQADgDgBgEIAPAAQAAAFgCAEQgCAEgDADQgDADgFACQgEACgFAAQgDAAgFgCg");
	this.shape_6.setTransform(59.1,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAiIAAgpIgBAAIgdApIgSAAIAAhDIASAAIAAApIAAAAIAegpIARAAIAABDg");
	this.shape_7.setTransform(50.3,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAiIgRgbIgOAAIAAAbIgSAAIAAhDIASAAIAAAbIAMAAQAEAAAEgDQAEgDABgEIAEgRIARAAIgEARQgEAQgJABIAAACIAWAfg");
	this.shape_8.setTransform(42.2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAjIgHgBQgKgFgDgEQgGgEgCgHIgDgHIAAgHQAAgEADgIQACgHAGgGQADgDAKgEIAHgDIAHAAQAPAAAJAHIgGAMQgHgEgJAAQgFAAgEABIgGAGIgFAGQgCAFAAACQAAAEACAEIAFAHQADADADABQAEADAFAAQAKAAAGgGIAHAMQgKAIgPAAg");
	this.shape_9.setTransform(34,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAvIAAhYQAPgFAQAAQAEAAAKACQAFACAIAGQAFAFADAHQADAJAAAFIgBAIIgCAEQgDAHgFAFQgIAGgFACQgKACgEABQgGAAgHgCIAAAYgAgQgdIAAAlQAHACAGAAQADAAAEgCIAHgEIAEgFQACgEAAgFQAAgEgCgEIgEgIQgDgCgEgCQgEgCgDAAQgGAAgHADg");
	this.shape_10.setTransform(26.1,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAjIgHgBQgJgFgEgDQgFgFgDgHQgBgEgBgKQAAgEACgJQADgHAFgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAHADAEAFQAFAFADAHQACAJAAAEIgIAIIgqAAIACAFIAFAEIAGAEIAGABQALAAAHgGIAHAMQgKAIgQAAgAARgEIgCgGIgEgGIgFgDIgGgBIgFABIgFADIgDAGIgCAGIAgAAIAAAAg");
	this.shape_11.setTransform(17.5,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQAiIAAg0IgeAAIAAA0IgSAAIAAhDIBBAAIAABDg");
	this.shape_12.setTransform(9,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAyIAAgqIgBAAIgeAqIgSAAIAAhCIASAAIAAApIABAAIAegpIASAAIAABCgAgIgcQgEgCgDgDQgEgDgCgEQgBgEAAgFIAOAAQAAAEACADQADADADAAQAEAAADgDQACgDABgEIANAAQAAAFgCAEQgBAEgDADQgEADgEACQgEACgFAAQgDAAgFgCg");
	this.shape_13.setTransform(0.3,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAiQgGgBgEgDQgFgDgCgFQgBgEAAgFQAAgGABgEQACgDAFgCQAEgDAGgDQAHgBAHAAIAPABIgBgFIgDgEIgFgCIgGgBQgJAAgIAEIgHgMQAJgHAPAAQAHAAAHACQAGACAEAEQAFAEABAFQADAGAAAHIAAAlQgPAEgSAAQgHAAgHgCgAgFAFIgGACQgDABAAAFQAAADADACIAGADIAFABQAIAAAHgDIAAgOQgHgBgIAAIgFABg");
	this.shape_14.setTransform(-8.4,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAQAiIAAgaIgeAAIAAAaIgSAAIAAhDIASAAIAAAdIAeAAIAAgdIARAAIAABDg");
	this.shape_15.setTransform(-16.6,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAjIgHgBQgKgFgDgEQgGgEgCgHIgDgHIAAgHQAAgEADgIQACgHAGgGQADgDAKgEIAHgDIAHAAQAOAAAKAHIgHAMQgGgEgJAAQgGAAgDABIgGAGIgFAGQgCAFAAACQAAAEACAEIAFAHQADADADABQADADAGAAQAJAAAHgGIAHAMQgKAIgPAAg");
	this.shape_16.setTransform(-24.6,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAyIAAgqIgBAAIgeAqIgSAAIAAhCIASAAIAAApIABAAIAegpIARAAIAABCgAgIgcQgEgCgEgDQgDgDgBgEQgCgEAAgFIANAAQABAEACADQADADADAAQAEAAADgDQACgDAAgEIAPAAQAAAFgCAEQgCAEgEADQgDADgEACQgEACgFAAQgDAAgFgCg");
	this.shape_17.setTransform(-36.7,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAuIAKgZIgJAAIgZhCIATAAIATA0IAAAAIAUg0IATAAIgkBbg");
	this.shape_18.setTransform(-45.1,3.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAaIAHgLQAJAGAMABQAEAAAHgDQAEgCAAgEQAAgDgEgCQgDgDgHABIgJAAIAAgNIAKAAQAFAAADgCQACgBAAgDQAAgDgDgCQgDgCgFAAQgLAAgJAHIgGgMQAMgKAPAAQAFAAAGACQAFACAEADQAFADACADQABAEAAADQAAAMgNACIAAABQAQABAAAOQAAADgCAFQgCADgEAEQgFADgGABQgHACgGAAQgRAAgMgKg");
	this.shape_19.setTransform(-52.7,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAfIAAhAIASAAIAAAUIANAAQAHAAAGACQAGACAFADQAEAEACACQACAEAAAGQAAAFgCAEQgCAFgFADQgEADgGACQgHACgHAAQgPAAgPgDgAgNATIANAAIAFgBIAFgCQAEgCAAgEQAAgFgEgCIgFgCIgFgBIgNAAg");
	this.shape_20.setTransform(-59.7,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglAiIAAgPIABAAIAGgBIAFgDIADgEIACgHIAFgmIA1AAIAABCIgRAAIAAgzIgVAAIgCAXQgBAIgDAFQgCAGgDAEQgDAEgFACQgEACgFAAIgJgBg");
	this.shape_21.setTransform(-68.8,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAjIgHgBQgGgEgFgFQgGgEgDgHIgCgHIAAgHQAAgEACgIQADgHAGgGQAFgFAGgCIAHgDIAHAAQAFAAAKADQAHACAFAFQAFAGADAHQACAIAAAEIgBAHIgBAHQgDAHgFAEQgFAFgHAEQgKACgFAAgAgHgTQgDACgDADQgDADAAAEQgCAEAAADQAAAFACADQAAAFADACIAGAEQAFADACAAQADAAAEgDIAGgEQADgCACgFQABgDAAgFQAAgDgBgEQgCgEgDgDQgDgDgDgCQgEgBgDAAIgHABg");
	this.shape_22.setTransform(-77,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAiIAAg0IgdAAIAAA0IgSAAIAAhDIBBAAIAABDg");
	this.shape_23.setTransform(-85.8,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAAAjIgIgBQgIgFgEgEQgFgEgDgHIgCgHIgBgHQAAgEADgIQADgHAFgGQAEgDAIgEIAIgDIAHAAQAOAAALAHIgIAMQgGgEgKAAQgFAAgDABIgGAGIgFAGQgCAFAAACQAAAEACAEIAFAHQADADADABQADADAFAAQAKAAAHgGIAHAMQgKAIgPAAg");
	this.shape_24.setTransform(-93.7,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAQAiIAAgpIgBAAIgeApIgSAAIAAhDIASAAIAAApIABAAIAegpIARAAIAABDg");
	this.shape_25.setTransform(-101.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.8,-7.9,226.9,16.7);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(-0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-15.8,300.4,32.3);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnHB+QgLgEgHgGQgKgJgEgMQgDgKAAgOIAAiNQAAgOADgJQAEgNAKgJQAHgHALgDQAMgFARAAQANAAAKADQAOAEAJAIQALAJAEANQACAIAAAPIAAAYIgyAAIAAgaQAAgHgCgFQgCgIgJAAQgJAAgDAIQgBAFAAAHIAACQQAAAIABAFQADAIAJAAQAJAAACgIQACgFAAgIIAAgoIAyAAIAAAnQAAAOgCAKQgEAMgLAJQgJAIgOAFQgKACgNAAQgRAAgMgFgAG2B/IgDggIgWAAIgEAgIg0AAIAZj+IBVAAIAXD+gAGyA7IgJiTIgBAAIgKCTIAUAAgAEpB/IgEgMIgBgNIAAhIQAAgKgCgEQgDgFgHAAIgQAAIAAB0IgyAAIAAj+IAyAAIAABoIAQAAQALAAgBgUIAAhCIABgLQACgEAEgDIAxAAIAAACQgFADAAAFIgCAPIAAA5QAAAPgEAHQgKALgMACIAAABQAIABAHAEQAHADADAEQAFAFAAATIAABFQgBAMACAGQADAHAEAFIAAABgACMB/IAAjaIgVAAIAABVQAAAsgCARQgCAQgEAMQgEANgGAKQgHALgKAFQgLAGgTgBIgJAAIAAglQAJgBAIgIQAKgNAAguIAAiVIB3AAIAAD+gAhPB/IAAj+IBwAAIAAAkIg+AAIAAA+IAvAAIAAAiIgvAAIAABWIBEAAIAAAkgAjgB/IAAj+IBMAAQAOABALAEQAKAEAGAHQAHAIACAMIABAUIAAAnQAAAegKAKQgIAIgNADQgIACgOABQgPAAgJgCIAABrgAiugOIANAAQAIAAAEgHQACgFgBgNIAAgdQAAgNgCgEQgEgFgHgBIgNAAgAlAB/IAAjaIggAAIAAgkIBxAAIAAAkIgfAAIAADag");
	this.shape.setTransform(-0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-12.9,98.2,26.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.shield();
	this.instance.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bulletblacksilhouette();
	this.instance.setTransform(-16,16,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-16,32,32);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,0,0,0)","#FF003E"],[0,1],0,10,0,-130).s().p("EgvIAK8IAA13MBeRAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.7,-70,603.6,140);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ei4nBvtMAAAjfZMFxPAAAMAAADfZgAxyvcQm5G6AAJtQAAJvG5G5QG5G5JvAAQJtAAG6m5QG5m5AApvQAAptm5m6Qm6m5ptAAQpvAAm5G5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1181.6,-715,2363.2,1430);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhH3AktMAAAhJZMCPvAAAMAAABJZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460,-235,920.1,470);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.city_sniper_back();
	this.instance.setTransform(-412.4,-200,1.07,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.4,-200,824.9,400);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eh6oBKOMAAAiUbMD1RAAAMAAACUbgArzqQQkmEmAAGcQAAGdEmElQElEmGdAAQGcAAElkmQEmklAAmdQAAmckmkmQklklmcAAQmdAAklElg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-785,-475,1570,950);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(69,162,130,0)","#005925"],[0,1],0,0,0,0,0,60.9).s().p("Az3T4QoQoQAAroQAArnIQoQQIQoQLnAAQLoAAIQIQQIQIQAALnQAALooQIQQoQIQroAAQrnAAoQoQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-180,360,360);


(lib.Символ6копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ALlgDIrhAAIAALoAAErkIAALhIroAA");
	this.shape.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AAErkIAAI1AAECyIAAIzALlgDIorAAAikgDIpAAA");
	this.shape_1.setTransform(-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,-74.6,150.2,150.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(4,1,1).p("AABjFIAACXADGAAIiVAAAgrAAIiaAAAABAvIAACX");
	this.shape.setTransform(-120.1,-65.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-87.4,43.8,43.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,412.3).s().p("Egu2AXcMAAAgu3MBdtAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zoom();
	this.instance.setTransform(-443.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-443.5,-200,887,400);


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


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:2.5},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-24.7,153.9,49.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-24.7,153.9,49.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0,y:0,alpha:0},6).to({alpha:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-13.2,98.2,26.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(-19.4,-0.2,0.766,0.766);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABeBFQgHgNgEgRQgEgRAAgWQAAguAQgXQAIgLAMgGQAMgGAOABQAQgBAMAGQAMAFAIAMQAPAWAAAvQAAAXgEASQgEARgJAMQgQAWgeAAQggAAgPgXgACAg8QgGAFgDAIQgDAHgCANQgBAMgBAPQABAeAGARQADAJAGAEQAGAFAHgBQAPAAAIgPQAGgPAAgiQAAgOgBgMQgCgMgDgIQgDgJgGgFQgGgDgIAAQgHAAgGADgAgxBFQgHgNgEgRQgEgRAAgWQAAguAQgXQAIgLAMgGQAMgGAOABQAOgBAMAGQAMAFAIAMQAPAWAAAvQAAAXgEASQgEARgJAMQgPAWgdAAQggAAgPgXgAgPg8QgFAFgEAIQgDAHgCANQgCAMABAPQAAAeAGARQAEAJAFAEQAGAFAHgBQANAAAIgPQAGgPAAgiQAAgOgBgMQgCgMgDgIQgDgJgGgFQgGgDgGAAQgHAAgGADgAjBBZIAAgcIAjAAIAAhjIAEgRIgMAOIgXAQIgOgTIA6gvIATAAIAACYIAiAAIAAAcg");
	this.shape.setTransform(18.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-12.4,70.6,24.5);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-19.6,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBsQgLgUgHgaQgFgbAAgjQAAhIAZglQANgRASgKQASgIAYgBQAZABASAIQATAJAMASQAYAkAABJQAAAlgHAbQgGAcgNASQgZAkgwAAQgygBgYglgABXheQgIAGgFAMQgGANgCATQgDATAAAZQAAAwALAbQAFANAIAGQAJAIANgBQAXABALgZQAMgZAAg0QAAgXgEgSQgCgUgFgNQgGgNgJgHQgJgHgMAAQgMAAgJAHgAi/CMIAAgsIA4AAIAAicIAGgcIgTAYIgkAYIgVgeIBbhKIAdAAIAADwIA2AAIAAAsg");
	this.shape.setTransform(14.9,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-16,71.2,32);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(260,91.2,1,1.192,0,90,-90);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-262.1,91.2,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(0,197,1,1.191,0,180,0);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(0,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.1,-210.6,675.6,603.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1181.6,-715,2363.2,1430);


(lib.Символ10 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ6копия();
	this.instance.setTransform(-2.3,1.4,2.004,2.004);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(5,-5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(5,-5,1.382,1.382);
	this.instance_2.alpha = 0.68;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(37, 37, 1)];
	this.instance_2.cache(-787,-477,1574,954);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(0,0,3.801,3.801);
	this.instance_3.alpha = 0.68;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.pricel = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 1
	this.instance = new lib.gun();
	this.instance.setTransform(-81,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-87.4,349,274.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(154,117.7,0.496,0.366,0,134.1,-30.1);
	this.instance.alpha = 0.41;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance.cache(-5,-5,10,10);

	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(158.7,111,0.484,0.258,0,149.1,-2.2);
	this.instance_1.alpha = 0.781;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_1.cache(-5,-5,10,10);

	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(153.3,111.1,0.569,0.342,0,106.6,-99.5);
	this.instance_2.alpha = 0.41;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2.filters = [new cjs.BlurFilter(3, 3, 2)];
	this.instance_2.cache(-5,-5,10,10);

	this.instance_3 = new lib.копияСимвол3();
	this.instance_3.setTransform(160.3,116.8,0.255,0.212,0,26.7,-147.7);
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(20));

	// Слой 1
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(145.1,132.7,0.572,0.572,0,0,0,52,83.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:83.9,rotation:-4.5},0).wait(1).to({regY:83.8,rotation:0},0).wait(1).to({regY:83.9,rotation:-4.5},0).wait(1).to({regY:83.8,rotation:0},0).wait(1).to({regY:83.9,rotation:-4.5},0).wait(1).to({regY:83.8,rotation:0},0).wait(1).to({regY:83.9,rotation:-4.5},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.4,84.7,83.7,96);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.9,-24.7,153.9,49.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(-115.3,-84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.7,96);


(lib.Символ24 = function(mode,startPosition,loop) {
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

	// Слой 4
	this.instance = new lib.Символ33();
	this.instance.setTransform(-203.2,298.9,1.471,1.471);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(-10,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ28();
	this.instance_2.setTransform(-33.4,2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.5,-15.8,300.4,50);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(0,-91.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},1).to({alpha:0},1).to({_off:true},1).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332.1,-301.7,675.6,603.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkqkOIGNBkIDIGzIjIiDImNCJg");
	mask.setTransform(-100,-2.8);

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(-99.5,10.3,0.488,0.488,-9.2,0,0,41.9,48);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-443.5,-200,887,400);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewY:-0.3,y:5.5},8,cjs.Ease.get(-1)).to({skewY:-0.9,y:12.3},9,cjs.Ease.get(1)).to({skewY:-0.3,y:6.2},9,cjs.Ease.get(-1)).to({skewY:0,y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-87.4,349,274.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(335,153);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.84,scaleY:1.84,x:127.3,y:82.9,alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(193,65.6,349,274.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Слой 7
	this.instance = new lib.Символ13();
	this.instance.setTransform(400,195);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},3).to({alpha:0},4).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(389.2,252);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1.54,scaleY:1.54,x:432.5,y:223.1},4).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(391.3,201.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.23,scaleY:1.23},4).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-40,920.1,470);


// stage content:



(lib.city_sniper_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		
		
		
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
		
		
		
		
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.kolo.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_4.bind(this));
		
		function fl_CustomMouseCursor_4() {
			this.kolo.x = stage.mouseX;
			this.kolo.y = stage.mouseY;
		}
		
		
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.back.gotoAndPlay(1);
			this.gun.gotoAndPlay(1);
			this.kolo.gotoAndPlay(1);
			this.txt.gotoAndStop(1);
		}
		
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.kolo.gotoAndStop(0);
			this.gun.gotoAndStop(0);
			this.back.gotoAndStop(0);
			this.txt.gotoAndStop(0);
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.back.x = - stage.mouseX / 10;
		this.back.y = - stage.mouseY / 10;
		}
		
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.txt = new lib.Символ24();
	this.txt.setTransform(467,17.8,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 6
	this.instance = new lib.Символ23();
	this.instance.setTransform(555.6,285.9,0.885,0.885);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(29.6,286,0.618,0.618);
	this.instance_1.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(301.8,161.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 3
	this.gun = new lib.Символ3();
	this.gun.setTransform(53,-29.9);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// kolo
	this.kolo = new lib.Символ10();
	this.kolo.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.kolo).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.back = new lib.Символ1();
	this.back.setTransform(-23.4,-20.3,0.831,0.831);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(226.6,9.4,764.9,603.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
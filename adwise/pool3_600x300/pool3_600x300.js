(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ballon.png?1467291970685", id:"ballon"},
		{src:"images/fon.jpg?1467291970685", id:"fon"},
		{src:"images/telka_03.png?1467291970685", id:"telka_03"},
		{src:"images/telka_06.png?1467291970685", id:"telka_06"},
		{src:"images/telka_08.png?1467291970685", id:"telka_08"},
		{src:"images/telka_13.png?1467291970685", id:"telka_13"},
		{src:"images/telka_16.png?1467291970685", id:"telka_16"},
		{src:"images/telka_20.png?1467291970685", id:"telka_20"},
		{src:"images/telka_23.png?1467291970685", id:"telka_23"},
		{src:"images/telka_26.png?1467291970689", id:"telka_26"},
		{src:"images/voda12.png?1467291970689", id:"voda12"},
		{src:"images/wgun.png?1467291970689", id:"wgun"}
	]
};



// symbols:



(lib.ballon = function() {
	this.initialize(img.ballon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,101);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,395);


(lib.telka_03 = function() {
	this.initialize(img.telka_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,131);


(lib.telka_06 = function() {
	this.initialize(img.telka_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,40);


(lib.telka_08 = function() {
	this.initialize(img.telka_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,63);


(lib.telka_13 = function() {
	this.initialize(img.telka_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,148);


(lib.telka_16 = function() {
	this.initialize(img.telka_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,76);


(lib.telka_20 = function() {
	this.initialize(img.telka_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,136);


(lib.telka_23 = function() {
	this.initialize(img.telka_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,118);


(lib.telka_26 = function() {
	this.initialize(img.telka_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,73);


(lib.voda12 = function() {
	this.initialize(img.voda12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,248);


(lib.wgun = function() {
	this.initialize(img.wgun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,122);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AAAi/IAABdQAoABAcAcQAdAcAAApQAAAAAAAAIBRAAQgCBKgyA1Qg0A3hKAAQhHAAg0g3Qgzg1gChKIBQAAQAAAAAAAAQAAgpAcgcQAagaAjgCQADgBAEAAQAAAAAAAAIAAAaAAAjXIAAAYQBKAAA0A3QA0A3AABNQAAADAAABIAcAAABAAAIAhAAQgBAngcAcQgcAcgoAAQAAAAAAAAQgnAAgdgcQgTgTgGgZQgDgMAAgLIAiAAAjNAAIAdAAQAAgBAAgDQAAgVAFgUQAKg0AmgnQARgTAUgMQAogYAuAAAAABJIAAAWIAABXIAAAi");
	this.shape.setTransform(20.7,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgFAFABQAGgBAEAFQAFAFgBAEQABAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(20.8,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.3,45.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.voda12();
	this.instance.setTransform(10.1,-219.9);

	this.instance_1 = new lib.voda12();
	this.instance_1.setTransform(410.1,-219.9);

	this.instance_2 = new lib.voda12();
	this.instance_2.setTransform(0,-425);

	this.instance_3 = new lib.voda12();
	this.instance_3.setTransform(400,-425);

	this.instance_4 = new lib.voda12();
	this.instance_4.setTransform(10.1,-622);

	this.instance_5 = new lib.voda12();
	this.instance_5.setTransform(410.1,-622);

	this.instance_6 = new lib.voda12();
	this.instance_6.setTransform(0,-827);

	this.instance_7 = new lib.voda12();
	this.instance_7.setTransform(400,-827);

	this.instance_8 = new lib.voda12();
	this.instance_8.setTransform(820.1,343.1);

	this.instance_9 = new lib.voda12();
	this.instance_9.setTransform(1220.1,343.1);

	this.instance_10 = new lib.voda12();
	this.instance_10.setTransform(810.1,138.1);

	this.instance_11 = new lib.voda12();
	this.instance_11.setTransform(1210.1,138.1);

	this.instance_12 = new lib.voda12();
	this.instance_12.setTransform(820.1,-58.9);

	this.instance_13 = new lib.voda12();
	this.instance_13.setTransform(1220.1,-58.9);

	this.instance_14 = new lib.voda12();
	this.instance_14.setTransform(810.1,-264);

	this.instance_15 = new lib.voda12();
	this.instance_15.setTransform(1210.1,-264);

	this.instance_16 = new lib.voda12();
	this.instance_16.setTransform(10.1,607.1);

	this.instance_17 = new lib.voda12();
	this.instance_17.setTransform(410.1,607.1);

	this.instance_18 = new lib.voda12();
	this.instance_18.setTransform(0,402.1);

	this.instance_19 = new lib.voda12();
	this.instance_19.setTransform(400,402.1);

	this.instance_20 = new lib.voda12();
	this.instance_20.setTransform(10.1,205.1);

	this.instance_21 = new lib.voda12();
	this.instance_21.setTransform(410.1,205.1);

	this.instance_22 = new lib.voda12();

	this.instance_23 = new lib.voda12();
	this.instance_23.setTransform(400,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-827,1620.1,1682.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AneBLQgEgBgDgEQgCgDgBgGIALhwQABgGACgEQABgFAHgCIAFgBIAFACQAEADADAFIAqBQIAdhMQADgGAEgFQADgDAEgBIAGABIAGAEQACADABAEIAVBXIADAeIAAACQAAAFgDADQgDAEgDABQgFABgEgBQgDgBgDgFQgCgDgBgEIgMhMIgeBKQgBADgDABIgHACIgHgBQgCgBgCgDIglhHIgHBIQAAAFgCADQgDAEgFABIgFABIgDAAgAjTBKQgEgBgDgEQgDgEAAgEIgCgJQgCgMgEgNIg2ABIgIAgQgBAFgEAEQgDAEgFAAQgEABgDgCQgDgCgDgEQgCgEABgFIACgOIAEgNQAFgTAHgRIAOgkIAMgZIAFgFQADgCAEAAQAGAAADAEQAIAHAGAJQAHAIAEAKQAKATAIARIAJAAQAEAAAEAEQADADAAAEQABADgCAEQAAADgDACQgDADgEABIAHAgIAAABQgBAFgDAEQgDADgDABIgEABIgDAAgAkSABIAjgBIgJgSQgFgJgGgJgAEABIQgEgBgCgFIgCgJIAAgNIAAhiQABgHABgCQACgDADgCQADgBADAAIAGACQADABACAEIACACIABADIAAAqQAHgFAHgGIANgNIASgWQADgEACgBQAFgCAFAAQAEABACADQAEADABAEQAAAEgCAFIgCADIgfAkIgJAHIAvAwQAEAFABADQAAAEgBAEQgCAEgDACQgDADgEAAQgEAAgEgDIgDgDIgzg3IgFACIABAvQgBAFgDADQgDAEgEABIgEABIgEgBgAGMBGIAAAAQgIgDgGgFIgNgLQgEgFAAgEQAAgEADgDQADgEAGAAIAFABIAFADIAJAJIAGAEQABAAABAAQABAAAAAAQABAAAAAAQABAAAAgBIALgWIgdhMIABgGIACgEIAEgDIAFgBIAHACQADABACAEIAVA1IAVgsIAGgIQADgEAGgCQAEgCADABQADAAADABIAEAEQACADAAADQgBAFgGAEQgDACgBACIgCAFIgCADIgoBRQgDAIgFAFQgGAGgHACIgHABIgKgBgAiiBBQgIgFgEgHIgNgVQgCgDAAgEIACgFIAFgEQADgBADAAQADAAADACQADABADAEIAHAMQADAHAFAFQAEgJABgKIABgVIgBg1QABgEACgCIAHgEIA8gEQAGAAAEACQAEACABAFIABBsQgBAGgEADQgEADgFAAQgEAAgEgDQgDgCgBgGIAAhfIgiACIABApIgCAaQgDARgDAHQgEAIgGADQgFAEgGAAQgJAAgHgFgACtBBQgIgDgEgHIgFgKIgDAFIgDAGQgFAGgGAEQgIADgHAAQgIAAgIgDQgGgEgFgHQgFgJgEgKQgDgKgBgKQgCgLgBgJIgBgxQACgFAEgDQADgDAFAAQADAAAFADQADACABAFIAAAeQAAASACAQQADARAGAPIAFAEIACABIACgBIADgDQAFgJADgKQACgLACgLIADg0QACgFADgCQAEgCAEAAQAFAAADACQAEACABAFIAAAbQAAASADAPQABAJACAIIAHAPIABACIACACIABAAIABAAIABAAQAGgGACgJIAFgTQACgPABgRIACgiQABgFAEgCQADgDAFAAQAEAAAEACQADADABAFIgBAcIgBAaIgGAcQgCAOgJANQgEAHgGADQgIAEgIAAQgHAAgHgEgAgeBBQgFgDgBgFIABhrQABgFAEgCQAEgDAEAAQAEAAAEADQAEACABAFIAAAeIAGgCIAEgBQAJgBAHAEQAHAEAFAHQAEAGADAGQADAIAAAHQAAAKgEAJQgDAKgHAIQgFAEgFADQgFACgGAAIgGgBIgIgEQgCAEgDADQgEACgDAAQgEAAgEgDgAAAACIgCAIIgCAIIACANIACAGQABAEACAAIADgBIADgFIADgIIAAgRQgBgEgDgEQgDgCgCAAQgCAAgBACgAArA+QgEgDAAgGIAAhqQACgFADgDQADgCAFAAQAEAAAEACQAEADABAFIAABqQgBAGgEADQgDADgFAAQgEAAgFgDg");
	this.shape.setTransform(48.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,15.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABfBKIgLgEQgJgCgGgGQgHgGgFgIQgEgIgCgIQgCgJgBgIQgBgPAEgMQADgPAIgNQAEgGAFgFIAKgKQAMgJAPgDQAHgBAJAAQAHABAIACIAMAFQAFADAFAFQAGAFAEAIQAFAHACAIQADALgBAKIgBASQgEANgGAMQgGALgJAKIgJAIIgKAHQgLAGgPAAQgJgBgFgBgABvgwQgHABgGAFQgIAHgGAJQgEAJgDALQgDAGAAAJQAAAJADAJQACAGAFAFQAFAFAGADQAGADAHAAQAHABAGgDQAGgDAGgFIAJgKIAFgNIAFgNIABgPQABgJgEgIQgDgGgGgFQgHgFgHgCIgKgBIgGAAgAhyBKQgEgBgDgEQgCgDgBgGIALhwQABgGACgEQACgFAGgCIAFgBIAFACQAEADADAFIAqBQIAdhMQACgGAEgFQAEgDAEgBIAFABIAFAEQACADACAEIALApIAMBMIAAACQAAAFgDADQgDAEgEABQgDABgFgBQgEgBgCgFQgCgDgBgEIgKhMIgeBKQgBADgDABIgHACIgGgBQgEgBgBgDIglhHIgHBIQAAAFgCADQgDAEgFABIgFABIgDAAgAiRBJQgEgBgEgEQgDgEAAgEIgCgJQgCgMgDgNIg3ABIgIAgQgBAFgDAEQgDAEgFAAQgEABgEgCQgDgCgCgEQgCgEAAgFIADgOIADgNQAGgTAGgRIAOgkIANgZIAEgFQADgCAFAAQAFAAAEAEQAHAHAHAJQAGAIAFAKQAKATAHASIAJAAQAFAAADADQADADAAAEQACADgCAEQgBADgDACQgCADgEABIAGAgIAAABQgBAFgDAEQgCADgEABIgEABIgCAAgAjRAAIAjAAIgJgTQgEgJgHgJgAkeBJQgFgBgDgFIgCgFIgBgFIAAgnIg0AAIAAArIgBAFQgDAFgFABQgEACgEgCQgEgBgEgEQgCgFgBgGIAAhwQABgGADgEQADgEAFgCQAEgBAFABQAEACADAFIAAADIAAA1IA0AAIAAgvQAAgEACgEQADgFAEgCQAFgCAEABQAEABAEADQADAEAAAGIAAAyQAFACADAEQACACAAAFQAAAEgCAEQgDAEgFABIAAAmQgBAGgCAEQgDAEgEACIgFABIgDAAgAD8BAQgEgDAAgFIAAguIgGAHIgHAFIgIACQgEABgEgBQgKgCgFgHQgGgHgDgIQgDgJgBgJIgBgbIACgJQABgFADgDQADgDAGAAIAEABIAFADIACAEIABAFIAAARIABATQACAKADAHQAKgMAGgPIAKgfQAAgDAEgCQADgCAEAAQAEAAAEACQAEADABAFIAABtQAAAGgEADQgEADgEAAQgFAAgEgDgAFkA/QgEgCgBgGIAAg3IgkA6QgCADgDABIgGABQgFAAgDgDQgEgDgBgFIgBhnQABgFAEgDQAEgCAEAAQAFAAADACQAEADABAFIAAA6IAjg5QACgDADgCQADgBADAAQAFAAADACQAFACABAFIABBlQAAAGgEADQgEADgEAAQgFAAgEgDg");
	this.shape.setTransform(37.8,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.6,15.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ballon();
	this.instance.setTransform(0,0,0.6,0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AibCWQhKAAAAhKIAAiXQAAhJBKAAIE3AAQBKAAAABJIAACXQAABKhKAAgAgLA9QADAEAEABQAEABACgBQAEgDADgDQADgEgBgFQAAgEgDgDIgbgoIAYgYQAEgEACgEQABgGgBgEQgCgEgDgCQgDgCgDAAQgEAAgFADIgcAcIgcgbIgDgCQgEgBgDAAQgEABgDACQgDACgBAEQgBADABAEIADAFIAcAdIgZAfIgFAMQgCAFACAEQABAEAEACQAEACAFgBQAFgBAEgDIADgFIAWgegAArAbQgEACgCAEQgBAEAAAFQABAEADAEIABABQAOAIAPADQAJABAIgCQAJgBAHgFQAIgDAGgHQAGgGADgHQAEgIAAgJQABgIgDgHIgHgNQgFgGgGgFIgLgFQgFgCgGgCIgLAAIgLACIAAgUIApAAQAGAAAEgEQAEgCABgEQACgDgBgDQAAgFgDgCQgCgDgEgCQgEgBgEAAIgKABIgvAAQgEAAgEADIgEAEIgCAGIAAAFIADAGIABAnQAAAFACAEQABAEACACIAGABIAGAAQAEAAACgBIACgBIABgBQAGgCAIABQAHAAAGADQAGABADAFQADAFgDAIQgBAGgFAEQgEADgEACIgJABQgEABgEgCIgIgCIgFgEIgFgCIgCAAQgEAAgDACg");
	this.shape.setTransform(45,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgZBJQgFAAgDgFIgagkIgVAfIgEAEQgEAEgFABQgFAAgDgCQgEgCgCgEQgCgEACgFIAGgLIAYggIgcgcIgDgGQgBgEACgDQABgDADgDQACgCAEgBQAEAAADABIAEACIAbAcIAdgdQAEgDAFAAQAEAAAEACQADACABAEQACAEgCAGQgCAEgEAEIgaAYIAeApQACADABAEQAAAFgCADQgDAEgEACIgFABIgDgBgAAxBFQgQgDgNgIIgBgBQgEgEAAgEQgBgFACgDQABgEAEgCQAEgDAFABIAGACIAFADIAIADQAEABAEAAIAJgCQAEgBAEgEQAEgEACgFQADgJgDgFQgDgGgGgCQgGgDgIAAQgHgBgHACIgBABIgBABQgDADgDABIgHAAIgFgDQgDgDgBgCQgBgEAAgFIgBgnIgDgFIgBgGIACgFIAEgFQAEgCAFAAIAvgBIAJgBQAEAAAFABQAEACACADQACADABAEQAAADgBAEQgCADgDADQgFADgGAAIgpAAIABAUIALgCIAKABQAGABAGACIAKAGQAHAEAEAGIAHALQADAJAAAIQgBAJgDAIQgEAHgGAHQgGAGgHAEQgIAEgIACIgKABIgHgBg");
	this.shape_1.setTransform(47.2,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.1,60.6);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wgun();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,122);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,118);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,136);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,40);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_16();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,76);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,148);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_08();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,63);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_26();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,73);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.telka_03();
	this.instance.setTransform(-59,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-65.5,118,131);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-305.7,-172.5,0.873,0.873);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.7,-172.5,611.4,345);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(20.7,21.6,1,1,0,0,0,20.7,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.25,scaleY:1.25},19).to({scaleX:1,scaleY:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,42.3,44.2);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(59,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118,131);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(305.7,172.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611.4,345);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(405,427.6,1,1,0,0,0,405,427.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1618.7},150).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-827,1620.1,1682.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ21();
	this.instance.setTransform(82.2,25.4,1.451,1.451,0,0,0,48.9,7.6);
	this.instance.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(80,28.1,1.451,1.451,0,0,0,48.9,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArLETQhQAAAAhJIAAmSQAAhKBQAAIWXAAQBQAAAABKIAAGSQAABJhQAAg");
	this.shape.setTransform(79.7,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.4,55.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(20.6,26.1,1.556,1.556,0,0,0,37.8,7.6);
	this.instance.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(18.6,29.1,1.556,1.556,0,0,0,37.8,7.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqLETQhKAAAAhKIAAmSQAAhJBKAAIUXAAQBKAAAABJIAAGSQAABKhKAAg");
	this.shape.setTransform(20.7,27.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-0.2,145.3,55.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(76.7,27.6,1,1,0,0,0,72.7,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18,scaleY:1.18,x:89.9,y:32.6},9).to({scaleX:1,scaleY:1,x:76.7,y:27.6},10).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(349,31.4,1.138,1.138,0,0,0,72.7,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:361,y:27.6},9).to({scaleX:1.14,scaleY:1.14,x:349,y:31.4},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-0.2,495.6,62.9);


(lib.Символ11 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ22();
	this.instance.setTransform(292.9,-40.5,1,1,0,0,0,405,427.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0.898},1).to({alpha:0},9).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(305.7,172.5,1,1,0,0,0,305.7,172.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05,x:301.9,y:188.5},9).to({scaleX:1,scaleY:1,x:305.7,y:172.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-1295.2,1620.1,1682.2);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(42.4,83.3,1,1,-18.4,0,0,59,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:59.1,rotation:-23.7,x:40.2,y:89.5},14,cjs.Ease.get(-1)).to({regX:59,scaleX:1,rotation:0,skewX:-41.6,skewY:-38.4,x:33.3,y:110},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-30,skewX:0,skewY:0,x:37.6,y:96.6},15,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-18.4,x:42.4,y:83.3},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.2,2.5,153.3,161.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// telka_26.png
	this.instance = new lib.Символ3();
	this.instance.setTransform(181.5,71.9,1,1,0,0,0,12.5,61.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-2.6,x:182},13,cjs.Ease.get(1)).to({scaleY:1.01,skewX:-6.2,x:182.6},17,cjs.Ease.get(1)).wait(27).to({scaleY:1,skewX:0,x:181.5},24,cjs.Ease.get(1)).wait(1));

	// telka_08.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(168.1,46.6,1,1,0,0,0,30.6,49.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:-4.8,skewY:-5,x:168.8,y:46.7},13,cjs.Ease.get(1)).to({skewX:-15,skewY:-15.8,x:170.6,y:47.1},27,cjs.Ease.get(1)).wait(17).to({skewX:0,skewY:0,x:168.1,y:46.6},24,cjs.Ease.get(1)).wait(1));

	// telka_13.png
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(137,110,1,1,0,0,0,60,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:1,x:137.3},13,cjs.Ease.get(1)).to({scaleY:1,skewX:2.2,x:137.5},27,cjs.Ease.get(1)).wait(17).to({scaleY:1,skewX:0,x:137},24,cjs.Ease.get(1)).wait(1));

	// telka_03.png
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(21.7,56.5,1,1,0,0,0,97.7,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:16.5,y:65.4},13,cjs.Ease.get(1)).to({x:14.7,y:67.7},24,cjs.Ease.get(1)).wait(3).to({x:16.2,y:67.3},17,cjs.Ease.get(-1)).to({x:21.7,y:56.5},24,cjs.Ease.get(1)).wait(1));

	// telka_20.png
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(11,91,1,1,0,0,0,135.6,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:16.5,rotation:-3.8,x:4.2,y:98.5},13,cjs.Ease.get(1)).to({regX:135.7,regY:16.4,rotation:-0.8,x:3.2,y:100.5},27,cjs.Ease.get(1)).to({rotation:-0.8},17,cjs.Ease.get(-1)).to({regX:135.6,rotation:0,x:11,y:91},24,cjs.Ease.get(1)).wait(1));

	// telka_23.png
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(86.7,162.4,1,1,0,0,0,80,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:80.1,rotation:-5.8,x:86.2,y:161.9},13,cjs.Ease.get(1)).to({regX:80,regY:92.3,rotation:-6.7,x:86.7,y:162.5},27,cjs.Ease.get(1)).wait(17).to({regY:92.2,rotation:0,y:162.4},24,cjs.Ease.get(1)).wait(1));

	// telka_16.png
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(82.1,120.6,1,1,0,0,0,71.1,67.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-5,x:81.4,y:124.2},13,cjs.Ease.get(1)).to({regX:71,regY:67.7,rotation:-6.9,x:81.2,y:126.1},27,cjs.Ease.get(1)).to({regX:71.1,regY:67.6,rotation:-5.2,y:126},17,cjs.Ease.get(-1)).to({rotation:0,x:82.1,y:120.6},24,cjs.Ease.get(1)).wait(1));

	// telka_06.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(112.7,76.3,1,1,0,0,0,109.7,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:30.2,rotation:-8,x:113.5,y:78.3},13,cjs.Ease.get(1)).to({regX:109.6,regY:30.4,rotation:-9.8,x:116.2,y:80.3},27,cjs.Ease.get(1)).wait(17).to({regX:109.5,regY:30.3,rotation:-2.6,x:115.3,y:79.3},7,cjs.Ease.get(-1)).to({regX:109.7,rotation:0,x:112.7,y:76.3},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.6,-58.5,353.6,269.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(20.7,21.6,1,1,0,0,0,20.7,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,42.3,44.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(20.7,21.6,1,1,0,0,0,20.7,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,42.3,44.2);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg7kAgeMAAAhA7MB3JAAAMAAAAq8I07AAIAAATIDJAAIAAOwI8BAAIAAB2I+6AAIAAFGgAnwa4IADg4IgCAAgAnqTXIgBAEIABAAIAAAEIBMAIIADgIIAPABIAvjVIAAAAIAAgBQgBgJAEgGIAiiZIAJAAQBegGBUABQgCgIAMADIABAAQAGABgRAEQAZACACADIAAABIBUAAIAEAAIAYgfQAIgSAPgJQANgJASgCIE4AAIAZhmIjEgCIjFgEIAAABIgCADIgEAEIgbAAIgCgEIqpgDQABAHgEgDQgFgDAIgBIgCgBIgtAAIh0AAIgHAKIgDADIADgDIgDADIAAAAIhFBYIgDAEIADgEIAEAAIgHAEQAugCAvgBIDqABIAFAAIAEAAIABAAIAHAAIAAAAIDSABIgOBFIAAAAIgfCPIgBAFIAAABIgHAfIgkCpQgDAEgDgEgAAONEIAXgbgAnkS8gAnAQTIgQBaQgOBMgGADgAnAQTIAAAAg");
	mask.setTransform(258.9,155.4);

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(206.6,143.1,1.062,1.062,0,0,0,70.5,74);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,2.5,375.4,285.7);


(lib.Символ13 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(183.9,143.5,1,1,0,0,0,187.7,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.04,scaleY:1.04,x:185.2,y:162},9).to({scaleX:1,scaleY:1,x:183.9,y:143.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.2,-53.2,762.7,415.8);


// stage content:



(lib.pool3_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
		}
		
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.fon.gotoAndPlay(1);
			this.girl.gotoAndPlay(1);
		  
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.fon.gotoAndPlay(10);
			this.girl.gotoAndPlay(10);
		 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// kursor2
	this.pricel = new lib.Символ15();
	this.pricel.setTransform(405.7,140.2,1.194,1.194,0,0,0,20.7,21.6);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// kursor
	this.kursor = new lib.Символ14();
	this.kursor.setTransform(499,199);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// text
	this.instance = new lib.Символ17();
	this.instance.setTransform(294.4,34.7,1,1,0,0,0,191.2,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// balon
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(32.3,259.2,1,1,0,0,0,34,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// telka
	this.girl = new lib.Символ13();
	this.girl.setTransform(298.5,151.5,1,1,0,0,0,183.9,143.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// fon
	this.fon = new lib.Символ11();
	this.fon.setTransform(299.7,136,1,1,0,0,0,305.7,172.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.9,-1181.7,1620.1,1702.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
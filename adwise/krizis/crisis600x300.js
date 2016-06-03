(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/flame_effect_by_mrjumpmanv4d36ve94.png?1464955729438", id:"flame_effect_by_mrjumpmanv4d36ve94"},
		{src:"images/fon.jpg?1464955729438", id:"fon"},
		{src:"images/high_tech_gui_by_karsten.png?1464955729438", id:"high_tech_gui_by_karsten"},
		{src:"images/MAAWS_CoDG.png?1464955729438", id:"MAAWS_CoDG"},
		{src:"images/maxresdefault.jpg?1464955729438", id:"maxresdefault"},
		{src:"images/robot_03.png?1464955729438", id:"robot_03"},
		{src:"images/robot_05.png?1464955729438", id:"robot_05"},
		{src:"images/robot_10.png?1464955729438", id:"robot_10"},
		{src:"images/robot_14_03.png?1464955729438", id:"robot_14_03"},
		{src:"images/robot_14_06.png?1464955729438", id:"robot_14_06"},
		{src:"images/robot_14_09.png?1464955729438", id:"robot_14_09"},
		{src:"images/robot_14_15.png?1464955729438", id:"robot_14_15"},
		{src:"images/robot_14_18.png?1464955729438", id:"robot_14_18"},
		{src:"images/sambik.png?1464955729438", id:"sambik"},
		{src:"images/smoke_path.png?1464955729438", id:"smoke_path"},
		{src:"images/soldier.png?1464955729438", id:"soldier"},
		{src:"images/stone.png?1464955729438", id:"stone"}
	]
};



// symbols:



(lib.flame_effect_by_mrjumpmanv4d36ve94 = function() {
	this.initialize(img.flame_effect_by_mrjumpmanv4d36ve94);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,300);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.high_tech_gui_by_karsten = function() {
	this.initialize(img.high_tech_gui_by_karsten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,159);


(lib.MAAWS_CoDG = function() {
	this.initialize(img.MAAWS_CoDG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,166);


(lib.maxresdefault = function() {
	this.initialize(img.maxresdefault);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,120);


(lib.robot_03 = function() {
	this.initialize(img.robot_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,45);


(lib.robot_05 = function() {
	this.initialize(img.robot_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,40);


(lib.robot_10 = function() {
	this.initialize(img.robot_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,84);


(lib.robot_14_03 = function() {
	this.initialize(img.robot_14_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,36);


(lib.robot_14_06 = function() {
	this.initialize(img.robot_14_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,58);


(lib.robot_14_09 = function() {
	this.initialize(img.robot_14_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,62);


(lib.robot_14_15 = function() {
	this.initialize(img.robot_14_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,102);


(lib.robot_14_18 = function() {
	this.initialize(img.robot_14_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,106);


(lib.sambik = function() {
	this.initialize(img.sambik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,169);


(lib.smoke_path = function() {
	this.initialize(img.smoke_path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,108);


(lib.soldier = function() {
	this.initialize(img.soldier);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,270);


(lib.stone = function() {
	this.initialize(img.stone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,270);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.high_tech_gui_by_karsten();
	this.instance.setTransform(0,0,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.1,174);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AAFBhQgKAAgFgDIgIgNQgFgIgPgPQgOgPgFgJIgIgXIgCgNQgBgQAAgRQAAgSAFgPQADgGAFgIIAIgKQAGgDAEABIAAgBQASgEARAFQARAEAMANQAEAFALASIAIAOIAJAXIAHARQADAJAAARQABAVgCAKQgEAXgRALQgMAHgYAAIgGgBg");
	this.shape.setTransform(7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,19.6);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("Ag0BOIgBgBIgEgEIgKgFQgLgHgGgJIgHgKQgEgQgBgWQgBgqAQgSIAKgKIAHgGIAKgFIAWgHIAHgDIAhAAQALAAAHACIALAFIATAKIAOAJQADACAOAUIAAAAIACAKIAHAWIABAYIAAABIgCAEIgDAHIgEALQgCAGgDACIABABIgEAEIgBADIAAADIgIAJIAAABIgGAEIgVAKIgDABIgCABIgFABIgDACIgUAAQgfAAgggKg");
	this.shape.setTransform(9.8,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.2,19.6,17.9);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,51,0.976)").s().p("Ag+BtQgjgDgXgMQgTgLgNgTQgMgSgJgCQgIgCgOAJQgPAJgIgCQgGgCgEgHQgEgHABgIQAAgFADgJIAEgPIADgZQACgPAJgRIARgdQAJgOAFgEQAHgEAMgCIAVgDIAAAAQANACApgCQAigBATAGQAMAEANAGQBBAgAxAcQBOAqAjAtQALAOABALQABAHgDAHQgEAHgGACQgNAFgTgUIgagbQgJgJgFgCQgEgCgIAAIg1AAQgzgBgVAQQgGAFgMASQgMAOgKAFQgKAFgRAAIgGAAg");
	this.shape.setTransform(23.3,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.6,21.9);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.robot_14_18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,106);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.robot_14_09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,62);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.robot_14_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,36);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("AKLBXIgQgCQgGgCgGgDQgFgEgDgFQgEgFAAgGIAAgSIAsAAIAAAtgAFbBXIAAitIAbABQAJACAIAEQAHAFAEAIQAEAJAAAMIAABgIB2AAIAAghIg8AAQgKAAgGgEQgHgDgEgGQgEgFgCgFIgCgMIBYAAQAPAAAMACQAMADAJAEQASAIAAASIAAAhQAAARgPAKQgPAJgYAAgAEMBXIAAhFIh2AAIAABFIg6AAIAAiJQAAgIAEgHQAEgGAHgFQAHgEAJgDQAKgDALAAIAGAAIAABGIB2AAIAAhGIA7AAIAACtgAhuBXQgLAAgJgCQgKgDgHgFQgHgEgEgHQgFgGAAgJIAAhlQAAgIAFgHQAEgHAHgFQAHgEAKgDQAJgCALAAIB/AAQAMAAAKACQAKADAHAEQAPAJAAASIAABmQAAAJgEAHQgFAGgHAFQgHAEgKACQgKACgLAAgAhoAzIB1AAIAAhkIh1AAgAmOgxQAAgOAGgIQAFgHAHgEQAJgDAJgBICzAAQAAAHgCAIQgDAIgIAFQgHAEgKADQgKACgTAAIhiAAIAABfQAAANgEAIQgDAIgHAFQgJAFgJABIgaABgApaBXQgLAAgJgCQgJgDgIgFQgHgEgEgHQgEgGAAgJIAAhlQAAgIAEgHQAEgHAHgFQAIgEAJgDQAJgCALAAICCAAQALAAAKACQAKADAHAEQAQAJAAASIAABmQAAAJgFAHQgEAGgHAFQgIAEgKACQgJACgLAAgApUAzIB3AAIAAhkIh3AAgAJiANIAAhjIAsAAIAABjg");
	this.shape.setTransform(65.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.1,17.6);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.976)").s().p("AKLBXIgQgCQgGgCgGgDQgFgEgDgFQgEgFAAgGIAAgSIAsAAIAAAtgAFbBXIAAitIAbABQAJACAIAEQAHAFAEAIQAEAJAAAMIAABgIB2AAIAAghIg8AAQgKAAgGgEQgHgDgEgGQgEgFgCgFIgCgMIBYAAQAPAAAMACQAMADAJAEQASAIAAASIAAAhQAAARgPAKQgPAJgYAAgAEMBXIAAhFIh2AAIAABFIg6AAIAAiJQAAgIAEgHQAEgGAHgFQAHgEAJgDQAKgDALAAIAGAAIAABGIB2AAIAAhGIA7AAIAACtgAhuBXQgLAAgJgCQgKgDgHgFQgHgEgEgHQgFgGAAgJIAAhlQAAgIAFgHQAEgHAHgFQAHgEAKgDQAJgCALAAIB/AAQAMAAAKACQAKADAHAEQAPAJAAASIAABmQAAAJgEAHQgFAGgHAFQgHAEgKACQgKACgLAAgAhoAzIB1AAIAAhkIh1AAgAmOgxQAAgOAGgIQAFgHAHgEQAJgDAJgBICzAAQAAAHgCAIQgDAIgIAFQgHAEgKADQgKACgTAAIhiAAIAABfQAAANgEAIQgDAIgHAFQgJAFgJABIgaABgApaBXQgLAAgJgCQgJgDgIgFQgHgEgEgHQgEgGAAgJIAAhlQAAgIAEgHQAEgHAHgFQAIgEAJgDQAJgCALAAICCAAQALAAAKACQAKADAHAEQAQAJAAASIAABmQAAAJgFAHQgEAGgHAFQgIAEgKACQgJACgLAAgApUAzIB3AAIAAhkIh3AAgAJiANIAAhjIAsAAIAABjg");
	this.shape.setTransform(65.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.1,17.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.976)").s().p("Eh74AjuMAYAhlWMDM/AAAMASyCDRgAwPtTQlMFNAAHWQAAHVFMFMQFNFNHWAAQHVAAFMlNQFNlMAAnVQAAnWlNlNQlMlMnVAAQnWAAlNFMg");
	this.shape.setTransform(348.1,179.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.8,-240.4,1585.9,840.3);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAShbQAbAFAVAVQAcAcAAAlQAAAmgcAbQgUAUgbAGABFAAQAAAcgUAUQgUAUgdAAQgaAAgUgUQgUgUAAgcQAAgaAUgUQAUgUAaAAQAdAAAUAUQAUAUAAAagAgNBcQgegFgWgWQgcgbAAgmQAAglAcgcQAUgUAcgG");
	this.shape.setTransform(76.1,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.976)").s().p("AgWAWQgJgJAAgNQAAgMAJgKQAKgIAMgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAJgNAAQgMAAgKgJg");
	this.shape_1.setTransform(76.2,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.MAAWS_CoDG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.6,300,168.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("A1VAsIAAhXMAqrAAAIAABXg");
	this.shape.setTransform(136.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.3,9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.976)").s().p("A1VAsIAAhXMAqrAAAIAABXg");
	this.shape.setTransform(136.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,273.3,9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.soldier();
	this.instance.setTransform(0,0,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.6,224.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.maxresdefault();
	this.instance.setTransform(0,0,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.4,95.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flame_effect_by_mrjumpmanv4d36ve94();
	this.instance.setTransform(92.8,35.7,0.123,0.123,165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.8,58);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sambik();
	this.instance.setTransform(0,30.3,0.836,0.836,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,170.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.smoke_path();
	this.instance.setTransform(-857.8,263.6,2.04,2.04);

	this.instance_1 = new lib.smoke_path();
	this.instance_1.setTransform(-559.8,175.6,2.04,2.04);

	this.instance_2 = new lib.smoke_path();
	this.instance_2.setTransform(254.5,-44.7,2.04,2.04);

	this.instance_3 = new lib.smoke_path();
	this.instance_3.setTransform(-196.3,68.4,2.04,2.04);

	this.instance_4 = new lib.smoke_path();
	this.instance_4.setTransform(0,0,2.04,2.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-857.8,-44.7,1520.3,528.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.robot_03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,45);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flame_effect_by_mrjumpmanv4d36ve94();
	this.instance.setTransform(0,139.8,0.291,0.291,-43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.7,203.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.robot_05();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,40);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.flame_effect_by_mrjumpmanv4d36ve94();
	this.instance.setTransform(0,88.3,0.229,0.31,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185,165.9);


(lib.Анимация25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("AvxBLIAAgPIiCAAIAAAPIgkAAIAAgyIATAAIAAhFQgBgJADgFQAEgGAFgDQAGgDAIgCIAQgCIB7AAIAABjIATAAIAAAygAxXAZIBJAAIAAhGIhJAAgATWA1QAAgJAFgGQAEgEAHgDQAGgCAIgBIA9AAIAAgZIhmABIgOgBQgGgCgGgCQgEgEAAgLIAAg5IAOAAIAOADQAHACAEAEQAFAFAAAIIAAAdIBYAAIAAg0IAsAAIAABnQABAIgFAGQgEAFgGADQgHADgIABIhqAAgARtA3IAAg0IhZAAIAAA0IgsAAIAAhmQAAgGADgFQADgFAFgEQAGgDAHgCQAHgCAIAAIAFAAIAAA0IBZAAIAAg0IArAAIAACBgANKA3IgPgBQgHgCgGgEQgFgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAFgEQAGgEAHgBIAPgCIBhAAQASAAALAHQAMAHAAAOIAABLQAAAHgEAFQgDAFgGADQgFADgHACIgQABgANPAcIBZAAIAAhKIhZAAgAJehKICIAAQASAAALAHQAMAHAAAOIAAAYQAAAHgEAFQgDAFgHAEQgHABgJACIhVABIABgHIAFgJQADgDAEgDQAFgDAHAAIAuAAIAAgYIhZAAIAABHQgBASgKAHQgHADgHACIgTAAgAHAA3IgPgBQgHgCgGgEQgFgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAFgEQAGgEAHgBIAPgCIBhAAQASAAALAHQAMAHAAAOIAABLQgBAHgDAFQgDAFgGADQgFADgHACIgQABgAHEAcIBaAAIAAhKIhaAAgAD7A3IgPgBQgHgCgFgEQgGgEgDgFQgDgEAAgHIAAhKQAAgJAEgFQAEgGAHgDQAFgDAIgBICVgBIAAADQAAAGgFAFQgDAFgHADQgGADgHABIgRACIhZAAIAAAYIBtABQAHABAGAEQAMAHAAAJIAAAeQAAALgLAHQgLAHgXAAgAD/AcIBZAAIAAgZIhZAAgAA2A3IgPgBQgHgCgFgEQgGgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAGgEQAFgEAHgBIAPgCIBhAAQASAAALAHQALAHAAAOIAABLQAAAHgDAFQgDAFgFADQgGADgHACIgQABgAA6AcIBZAAIAAhKIhZAAgAkoA3IgOgBIgKgDIgHgEIg+gyIAAA6IgsAAIAAg6Ig9AyIgHAEIgKADIgOABIghAAIBPhEIg7g9IAwAAIA5A6IAAg6IAsAAIAAA6IA6g6IAwAAIg8A9IBQBEgArzhKICIAAQASAAALAHQALAHAAAOIAAAYQABAHgEAFQgDAFgHAEQgHABgJACIhWABIACgHIAEgJQAEgDAEgDQAFgDAHAAIAtAAIAAgYIhZAAIAABHQAAASgLAHQgFADgIACIgTAAgAuRA3IgPgBQgHgCgFgEQgGgEgDgFQgDgFAAgGIAAhKQAAgHADgFQADgFAGgEQAFgDAHgCQAHgCAIAAIBiAAQARAAALAHQALAHAAAOIiEAAIAAAYIBUAAIAAAZIhUAAIAAAZICEAAQABAIgEAEQgDAGgGADQgFADgHACIgPABgA0zA1QgBgJAFgGQAFgEAGgDQAHgCAHgBIA+AAIAAgZIhnABIgNgBQgHgCgFgCQgEgEgBgLIAAg5IAPAAIANADQAHACAFAEQAEAFABAIIAAAdIBYAAIAAg0IAsAAIAABnQAAAIgFAGQgDAFgHADQgHADgHABIhqAAgAh/A3IAAhIIhBA6IgLAHIgLAFIgTACIgJAAIAAiBIADAAQASAAALAGQAGAEADAEQACAFAAAHIAAAwIAPgOIADgCIAvgsQAEgFAHgDIALgEIAUgCIAIAAIAACBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-7.5,274.8,15.1);


(lib.Анимация24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.976)").s().p("AvxBLIAAgPIiCAAIAAAPIgkAAIAAgyIATAAIAAhFQgBgJADgFQAEgGAFgDQAGgDAIgCIAQgCIB7AAIAABjIATAAIAAAygAxXAZIBJAAIAAhGIhJAAgATWA1QAAgJAFgGQAEgEAHgDQAGgCAIgBIA9AAIAAgZIhmABIgOgBQgGgCgGgCQgEgEAAgLIAAg5IAOAAIAOADQAHACAEAEQAFAFAAAIIAAAdIBYAAIAAg0IAsAAIAABnQABAIgFAGQgEAFgGADQgHADgIABIhqAAgARtA3IAAg0IhZAAIAAA0IgsAAIAAhmQAAgGADgFQADgFAFgEQAGgDAHgCQAHgCAIAAIAFAAIAAA0IBZAAIAAg0IArAAIAACBgANKA3IgPgBQgHgCgGgEQgFgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAFgEQAGgEAHgBIAPgCIBhAAQASAAALAHQAMAHAAAOIAABLQAAAHgEAFQgDAFgGADQgFADgHACIgQABgANPAcIBZAAIAAhKIhZAAgAJehKICIAAQASAAALAHQAMAHAAAOIAAAYQAAAHgEAFQgDAFgHAEQgHABgJACIhVABIABgHIAFgJQADgDAEgDQAFgDAHAAIAuAAIAAgYIhZAAIAABHQgBASgKAHQgHADgHACIgTAAgAHAA3IgPgBQgHgCgGgEQgFgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAFgEQAGgEAHgBIAPgCIBhAAQASAAALAHQAMAHAAAOIAABLQgBAHgDAFQgDAFgGADQgFADgHACIgQABgAHEAcIBaAAIAAhKIhaAAgAD7A3IgPgBQgHgCgFgEQgGgEgDgFQgDgEAAgHIAAhKQAAgJAEgFQAEgGAHgDQAFgDAIgBICVgBIAAADQAAAGgFAFQgDAFgHADQgGADgHABIgRACIhZAAIAAAYIBtABQAHABAGAEQAMAHAAAJIAAAeQAAALgLAHQgLAHgXAAgAD/AcIBZAAIAAgZIhZAAgAA2A3IgPgBQgHgCgFgEQgGgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAGgEQAFgEAHgBIAPgCIBhAAQASAAALAHQALAHAAAOIAABLQAAAHgDAFQgDAFgFADQgGADgHACIgQABgAA6AcIBZAAIAAhKIhZAAgAkoA3IgOgBIgKgDIgHgEIg+gyIAAA6IgsAAIAAg6Ig9AyIgHAEIgKADIgOABIghAAIBPhEIg7g9IAwAAIA5A6IAAg6IAsAAIAAA6IA6g6IAwAAIg8A9IBQBEgArzhKICIAAQASAAALAHQALAHAAAOIAAAYQABAHgEAFQgDAFgHAEQgHABgJACIhWABIACgHIAEgJQAEgDAEgDQAFgDAHAAIAtAAIAAgYIhZAAIAABHQAAASgLAHQgFADgIACIgTAAgAuRA3IgPgBQgHgCgFgEQgGgEgDgFQgDgFAAgGIAAhKQAAgHADgFQADgFAGgEQAFgDAHgCQAHgCAIAAIBiAAQARAAALAHQALAHAAAOIiEAAIAAAYIBUAAIAAAZIhUAAIAAAZICEAAQABAIgEAEQgDAGgGADQgFADgHACIgPABgA0zA1QgBgJAFgGQAFgEAGgDQAHgCAHgBIA+AAIAAgZIhnABIgNgBQgHgCgFgCQgEgEgBgLIAAg5IAPAAIANADQAHACAFAEQAEAFABAIIAAAdIBYAAIAAg0IAsAAIAABnQAAAIgFAGQgDAFgHADQgHADgHABIhqAAgAh/A3IAAhIIhBA6IgLAHIgLAFIgTACIgJAAIAAiBIADAAQASAAALAGQAGAEADAEQACAFAAAHIAAAwIAPgOIADgCIAvgsQAEgFAHgDIALgEIAUgCIAIAAIAACBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-7.5,274.8,15.1);


(lib.Анимация23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.976)").s().p("AvxBLIAAgPIiCAAIAAAPIgkAAIAAgyIATAAIAAhFQgBgJADgFQAEgGAFgDQAGgDAIgCIAQgCIB7AAIAABjIATAAIAAAygAxXAZIBJAAIAAhGIhJAAgATWA1QAAgJAFgGQAEgEAHgDQAGgCAIgBIA9AAIAAgZIhmABIgOgBQgGgCgGgCQgEgEAAgLIAAg5IAOAAIAOADQAHACAEAEQAFAFAAAIIAAAdIBYAAIAAg0IAsAAIAABnQABAIgFAGQgEAFgGADQgHADgIABIhqAAgARtA3IAAg0IhZAAIAAA0IgsAAIAAhmQAAgGADgFQADgFAFgEQAGgDAHgCQAHgCAIAAIAFAAIAAA0IBZAAIAAg0IArAAIAACBgANKA3IgPgBQgHgCgGgEQgFgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAFgEQAGgEAHgBIAPgCIBhAAQASAAALAHQAMAHAAAOIAABLQAAAHgEAFQgDAFgGADQgFADgHACIgQABgANPAcIBZAAIAAhKIhZAAgAJehKICIAAQASAAALAHQAMAHAAAOIAAAYQAAAHgEAFQgDAFgHAEQgHABgJACIhVABIABgHIAFgJQADgDAEgDQAFgDAHAAIAuAAIAAgYIhZAAIAABHQgBASgKAHQgHADgHACIgTAAgAHAA3IgPgBQgHgCgGgEQgFgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAFgEQAGgEAHgBIAPgCIBhAAQASAAALAHQAMAHAAAOIAABLQgBAHgDAFQgDAFgGADQgFADgHACIgQABgAHEAcIBaAAIAAhKIhaAAgAD7A3IgPgBQgHgCgFgEQgGgEgDgFQgDgEAAgHIAAhKQAAgJAEgFQAEgGAHgDQAFgDAIgBICVgBIAAADQAAAGgFAFQgDAFgHADQgGADgHABIgRACIhZAAIAAAYIBtABQAHABAGAEQAMAHAAAJIAAAeQAAALgLAHQgLAHgXAAgAD/AcIBZAAIAAgZIhZAAgAA2A3IgPgBQgHgCgFgEQgGgEgDgFQgDgEAAgHIAAhLQAAgGADgFQADgFAGgEQAFgEAHgBIAPgCIBhAAQASAAALAHQALAHAAAOIAABLQAAAHgDAFQgDAFgFADQgGADgHACIgQABgAA6AcIBZAAIAAhKIhZAAgAkoA3IgOgBIgKgDIgHgEIg+gyIAAA6IgsAAIAAg6Ig9AyIgHAEIgKADIgOABIghAAIBPhEIg7g9IAwAAIA5A6IAAg6IAsAAIAAA6IA6g6IAwAAIg8A9IBQBEgArzhKICIAAQASAAALAHQALAHAAAOIAAAYQABAHgEAFQgDAFgHAEQgHABgJACIhWABIACgHIAEgJQAEgDAEgDQAFgDAHAAIAtAAIAAgYIhZAAIAABHQAAASgLAHQgFADgIACIgTAAgAuRA3IgPgBQgHgCgFgEQgGgEgDgFQgDgFAAgGIAAhKQAAgHADgFQADgFAGgEQAFgDAHgCQAHgCAIAAIBiAAQARAAALAHQALAHAAAOIiEAAIAAAYIBUAAIAAAZIhUAAIAAAZICEAAQABAIgEAEQgDAGgGADQgFADgHACIgPABgA0zA1QgBgJAFgGQAFgEAGgDQAHgCAHgBIA+AAIAAgZIhnABIgNgBQgHgCgFgCQgEgEgBgLIAAg5IAPAAIANADQAHACAFAEQAEAFABAIIAAAdIBYAAIAAg0IAsAAIAABnQAAAIgFAGQgDAFgHADQgHADgHABIhqAAgAh/A3IAAhIIhBA6IgLAHIgLAFIgTACIgJAAIAAiBIADAAQASAAALAGQAGAEADAEQACAFAAAHIAAAwIAPgOIADgCIAvgsQAEgFAHgDIALgEIAUgCIAIAAIAACBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.4,-7.5,274.8,15.1);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgEA0IgBgBQgDgBgCgEIgBgEIgGgMIgCgHIAAgFIgDgCQgFgEAAgGQAAgGAFgCQAGgEAFAEIAAgmQAAgFACgEQADgEAFAAQAFAAACAHIABAGIAAAmIABgCIACgEQAEgDAEAAQAFABACACQADADAAAGIgBAHQgBADgFAFIgCAJQAAAEgEAGIgEAEIgDAKQgCADgEACIgCAAQgCAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-5.4,5.8,10.9);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgEA0IgBgBQgDgBgCgEIgBgEIgGgMIgCgHIAAgFIgDgCQgFgEAAgGQAAgGAFgCQAGgDAFADIAAgmQAAgFACgEQADgEAFAAQAFAAACAHIABAGIAAAmIABgCIACgEQAEgDAEAAQAFABACACQADADAAAGIgBAHQgBADgFAFIgCAJQAAAEgEAGIgEAEIgDAKQgCADgEACIgCAAQgCAAgCgCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-5.4,5.8,10.9);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgJAXIgKgEQgEgCgJAAQgEABgEgBQgFgBgCgDQgCgCAAgDIgEgDQgCgEABgCQACgEAFgCIACAAIAAgCIAEgEQADgDACAAIAIgBIADgBIACgCQABgCADAAQABAAAAABQAAAAABAAQAAAAAAAAQAAgBAAAAIAJgBIAEABQACABACAEIAAADIAAAEIAugDQAFACACAEQAEAFgFAEQgEACgHAAIgoADIABACIABADIgBACIgBADQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIgHADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-2.4,11.1,4.8);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgJAXIgKgFQgEgBgJAAQgEABgEgCQgFgBgCgCQgCgDAAgCIgEgCQgCgFABgCQACgEAFgCIACgBIAAgBIAEgEQADgDACgBIAIgBIADAAIACgBQABgDADAAQABAAAAAAQAAABAAAAQABAAAAgBQAAAAAAAAIAJgBIAEABQACABACAEIAAADIAAAEIAugDQAFACACADQAEAGgFAEQgEADgHAAIgoACIABABIABAEIgBADIgBACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIgHAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-2.4,11.1,4.8);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgPAWIgTgBIgGgBIgFgDQgFgFACgFIAAgBIACgDQACgFADgCIAEgCIAHgHQAEgEADgBIABgBIAAAAQAHgDAGAAIAGACIADAEQAAAFgBAEIAAAAIAAAAQAOgCATgGQAIgCADABQAFABABAFQABAFgCAEQgCABgJACIggAIIAAAGQgBAEgEACIgGABIgJgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-2.3,10.1,4.7);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgPAWIgTgBIgGgBIgFgDQgFgFACgFIAAgBIACgDQACgFADgCIAEgCIAHgHQAEgEADgBIABgBIAAAAQAHgDAGAAIAGACIADAEQAAAFgBAEIAAAAIAAAAQAOgCATgGQAIgCADABQAFABABAFQABAFgCAEQgCABgJACIggAIIAAAGQgBAEgEACIgGABIgJgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-2.3,10.1,4.7);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ49();
	this.instance.setTransform(27.2,44.2,1,1,0,0,0,7,9.8);
	this.instance.alpha = 0.441;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.robot_14_06();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42,58);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ47();
	this.instance.setTransform(33.5,10.3,1,1,0,0,0,11.8,10.7);
	this.instance.alpha = 0.441;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.robot_14_15();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,102);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ44();
	this.instance.setTransform(90.7,20.1,1,1,0,0,0,23.2,11);
	this.instance.alpha = 0.449;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.robot_10();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,84);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(43.6,43.2);

	this.instance_1 = new lib.Анимация8("synched",0);
	this.instance_1.setTransform(38.8,44.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgPAWIgTgBIgGgBIgFgDQgFgFACgFIAAgBIACgDQACgFADgCIAEgCIAHgHQAEgEADgBIABgBIAAAAQAHgDAGAAIAGACIADAEQAAAFgBAEIAAAAIAAAAQAOgCATgGQAIgCADABQAFABABAFQABAFgCAEQgCABgJACIggAIIAAAGQgBAEgEACIgGABIgJgBg");
	this.shape.setTransform(43.6,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.shape}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:38.8,y:44.5},7).wait(8));

	// Слой 1
	this.instance_2 = new lib.Символ48();
	this.instance_2.setTransform(21,29,1,1,0,0,0,21,29);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.7,58);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация9("synched",0);
	this.instance.setTransform(55.1,14.1);

	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.setTransform(51.9,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgJAXIgKgFQgEgBgJAAQgEABgEgCQgFgBgCgCQgCgDAAgCIgEgCQgCgFABgCQACgEAFgCIACgBIAAgBIAEgEQADgDACgBIAIgBIADAAIACgBQABgDADAAQABAAAAAAQAAABAAAAQABAAAAgBQAAAAAAAAIAJgBIAEABQACABACAEIAAADIAAAEIAugDQAFACACADQAEAGgFAEQgEADgHAAIgoACIABABIABAEIgBADIgBACQAAABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIgHAEg");
	this.shape.setTransform(55.1,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.shape}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:51.9,y:14.2},6).wait(9));

	// Слой 1
	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(32.5,51,1,1,0,0,0,32.5,51);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,102);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(65.5,8.8,1,1,0,0,0,65.5,8.8);

	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(65.5,8.8,1,1,0,0,0,65.5,8.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).to({_off:false},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({_off:true},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.1,17.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(150,83,1,1,0,0,0,150,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:149.1,y:87.5},26,cjs.Ease.get(-1)).to({x:150,y:83},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.1,300,168.1);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(136.7,4.5,1,1,0,0,0,136.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.3,9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.setTransform(138.2,20.7,1,1,0,0,0,136.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.73,x:101.8},9).to({scaleX:0.48,x:67.5},10).to({regX:136.6,scaleX:0.01,x:1.8},10).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(137.8,20.7,1,1,0,0,0,136.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Слой 1
	this.instance_2 = new lib.Анимация23("synched",0);
	this.instance_2.setTransform(137.4,7.6);

	this.instance_3 = new lib.Анимация24("synched",0);
	this.instance_3.setTransform(137.4,7.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация25("synched",0);
	this.instance_4.setTransform(137.4,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_4}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},14).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},14).to({_off:true},15).wait(1));

	// Слой 4
	this.instance_5 = new lib.Символ52();
	this.instance_5.setTransform(143.9,15.7,1,1,0,0,0,186.1,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-71.3,372.1,174);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(186.8,49,0.439,0.842,-30,0,0,31.1,51.4);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({alpha:0.941},1,cjs.Ease.get(-1)).to({alpha:0},1).wait(63).to({alpha:0.941},1,cjs.Ease.get(-1)).to({alpha:0},1).wait(36));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(108.8,112.1,1,1,0,0,0,108.8,112.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:106.8,y:114.1},14,cjs.Ease.get(-1)).to({x:108.8,y:112.1},5).wait(46).to({x:106.8,y:114.1},14,cjs.Ease.get(-1)).to({x:108.8,y:112.1},5).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16.4,253.6,240.7);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(55.8,39.9,1,1,0,0,0,46.4,28.9);

	this.instance_1 = new lib.flame_effect_by_mrjumpmanv4d36ve94();
	this.instance_1.setTransform(92.8,35.7,0.123,0.123,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.2,69);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ17();
	this.instance.setTransform(107.6,93.7,1,1,0,0,0,51.1,34.5);
	this.instance.alpha = 0.809;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9,x:111.3,y:94.7,alpha:0.961},9).to({scaleX:1,scaleY:1,x:107.6,y:93.7,alpha:0.762},10).to({scaleX:0.9,scaleY:0.9,x:111.3,y:94.7,alpha:0.961},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(133,85.2,1,1,0,0,0,133,85.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,170.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-65,77.2,0.185,0.185,0,0,0,133,85);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-31.4,alpha:0.301},9).to({scaleX:0.21,scaleY:0.21,x:9.3,y:76.9,alpha:0.449},10).to({regX:132.9,regY:84.8,scaleX:0.27,scaleY:0.27,x:66.4,y:79.6,alpha:0.609},10).to({scaleX:0.71,scaleY:0.71,x:101,y:112.7,alpha:0.738},10).to({regX:133,regY:84.7,scaleX:1.12,scaleY:1.12,x:181.8,y:108,alpha:0.809},10).to({scaleX:1.49,scaleY:1.49,x:229.9,y:126.4,alpha:1},10).to({regX:133.1,scaleX:0.97,scaleY:0.97,x:311.2,y:147},10).wait(51).to({regX:133,regY:85,scaleX:0.19,scaleY:0.19,x:-65,y:77.2,alpha:0.102},0).to({x:-31.4,alpha:0.301},9).to({scaleX:0.21,scaleY:0.21,x:9.3,y:76.9,alpha:0.449},10).to({regX:132.9,regY:84.8,scaleX:0.27,scaleY:0.27,x:66.4,y:79.6,alpha:0.609},10).to({scaleX:0.71,scaleY:0.71,x:101,y:112.7,alpha:0.738},10).to({regX:133,regY:84.7,scaleX:1.12,scaleY:1.12,x:181.8,y:108,alpha:0.809},10).to({scaleX:1.49,scaleY:1.49,x:229.9,y:126.4,alpha:1},10).to({regX:133.1,scaleX:0.97,scaleY:0.97,x:311.2,y:147},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,61.5,49.1,31.5);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(89.5,107,1,1,0,0,0,204,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:870.8,y:-113.6},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-972.4,-47.9,1520.3,528.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(400,225,1,1,0,0,0,400,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:227},4).to({y:225},1).to({y:227},3).to({y:225},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,450);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Анимация11("synched",0);
	this.instance.setTransform(74.4,3.5);

	this.instance_1 = new lib.Анимация12("synched",0);
	this.instance_1.setTransform(74.4,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.976)").s().p("AgEA0IgBgBQgDgBgCgEIgBgEIgGgMIgCgHIAAgFIgDgCQgFgEAAgGQAAgGAFgCQAGgDAFADIAAgmQAAgFACgEQADgEAFAAQAFAAACAHIABAGIAAAmIABgCIACgEQAEgDAEAAQAFABACACQADADAAAGIgBAHQgBADgFAFIgCAJQAAAEgEAGIgEAEIgDAKQgCADgEACIgCAAQgCAAgCgCg");
	this.shape.setTransform(74.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.shape}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:1},7).wait(8));

	// Слой 1
	this.instance_2 = new lib.Символ43();
	this.instance_2.setTransform(73.5,42,1,1,0,0,0,73.5,42);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,147,86);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(85.3,-24.1,1,1,0,0,0,92.5,82.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(8).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).to({alpha:1},1).to({alpha:0},1).wait(10));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(26.5,20,1,1,0,0,0,26.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({x:24.5,y:22},1).wait(3).to({x:26.5,y:20},1).wait(1).to({x:24.5,y:22},10).wait(3).to({x:26.5,y:20},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-107,185,165.9);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(88.5,-39.9,1,1,0,0,0,103.8,101.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).wait(10).to({alpha:1},1).to({alpha:0},1).wait(1).to({alpha:1},1).to({alpha:0},1).wait(11));

	// Слой 1
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(28,22.5,1,1,0,0,0,28,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:26,y:24.5},9).to({x:28,y:22.5},1).to({x:26,y:24.5},1).wait(1).to({x:28,y:22.5},1).to({x:26,y:24.5},1).wait(10).to({x:28,y:22.5},1).to({x:26,y:24.5},1).wait(1).to({x:28,y:22.5},1).to({x:26,y:24.5},1).to({x:28,y:22.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-141.4,207.7,203.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// robot_03.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(51.3,3.3,1,1,0,0,0,28,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:22.4,scaleX:0.99,scaleY:0.99,x:49.7,y:6.1},3,cjs.Ease.get(1)).to({x:50.9,y:3.7},3,cjs.Ease.get(-1)).to({y:6.1},3,cjs.Ease.get(1)).to({regY:22.5,scaleX:1,scaleY:1,x:51.3,y:3.3},3,cjs.Ease.get(-1)).wait(1));

	// robot_05.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(159.6,10.6,1,1,0,0,0,26.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.99,scaleY:0.99,x:158.1,y:13.4},3,cjs.Ease.get(1)).to({y:11},3,cjs.Ease.get(-1)).to({y:13.4},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:159.6,y:10.6},3,cjs.Ease.get(-1)).wait(1));

	// robot_10.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(82.3,13,1,1,0,0,0,73.5,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.99,scaleY:0.99,x:81.6,y:15.8},3,cjs.Ease.get(1)).to({y:13.4},3,cjs.Ease.get(-1)).to({y:15.8},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:82.3,y:13},3,cjs.Ease.get(-1)).wait(1));

	// robot_14_06.png
	this.instance_3 = new lib.Символ40();
	this.instance_3.setTransform(120,41,1,1,0,0,0,21,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({regY:4.6,rotation:14.7,x:121.2,y:39.8},3,cjs.Ease.get(1)).to({regY:4.7,rotation:0,x:120,y:41},3,cjs.Ease.get(-1)).wait(1));

	// robot_14_18.png
	this.instance_4 = new lib.Символ41();
	this.instance_4.setTransform(115.3,89.5,1,1,0,0,0,12.6,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({rotation:-2.2,x:104,y:83.3},3,cjs.Ease.get(1)).to({rotation:0,x:115.3,y:89.5},3,cjs.Ease.get(-1)).wait(1));

	// robot_14_03.png
	this.instance_5 = new lib.Символ37();
	this.instance_5.setTransform(88.3,53.6,1,1,0,0,0,25,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13));

	// robot_14_09.png
	this.instance_6 = new lib.Символ38();
	this.instance_6.setTransform(63.3,53.7,1,1,0,0,0,44.3,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:44.4,rotation:11,x:64.2,y:53.6},3,cjs.Ease.get(1)).to({rotation:3.5,x:62.4,y:52.8},3,cjs.Ease.get(-1)).wait(3).to({regX:44.3,rotation:0,x:63.3,y:53.7},3,cjs.Ease.get(-1)).wait(1));

	// robot_14_15.png
	this.instance_7 = new lib.Символ39();
	this.instance_7.setTransform(46.5,101.2,1,1,0,0,0,32.5,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:38.4,y:95.2},3,cjs.Ease.get(1)).to({regX:32.4,rotation:3.3,x:42.5,y:98.1},3,cjs.Ease.get(-1)).wait(3).to({regX:32.5,rotation:0,x:46.5,y:101.2},3,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.9,-160.6,302.9,352.1);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8KWGQg+gNgcgIQgdgIgigaIgrghQgJgIgQgRQgQgRgcgWQgdgZABghQABgYAZgmICKj0Qg1hRghBUQghBUhSCAQhTB/g3gMQg4gMhAgVQhAgWgwg4Qgsg0gRhGQgOg5klgqQklgqDaimQDbilBLjVQBLjVgfkjQgklJgKiDQgTkCAHjLQADhIANgtQASg+AqgfQAegWAugHQAdgFA3gBMApFgAbIABgkMAkHABIQBRADAqAIQBEAOArAhQAmAdAcA1QATAiAXBAQBbD/BDEDQASBJAFAqQAIBAgLAzQgXBvhuBNQhfBDiEAYQhcARiAADIjgAAQkUABiaBDQg1AVi0BxQiNBZhlASQgZAFhtAGQhSAFgwATQgwAShXBGQhTBDg2ARQgoANhyADQhjAEgyAcQgcAQgqArQgtAtgZAQQg8AmA1EmQmAGBhKAOQAMAIheADQheADjqihQjqihiGAfQiGAejTBwQjTBwiQAxQiQAwACAFQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgLAAgwgKg");
	mask.setTransform(167.4,208.8);

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(121.2,242.7,1,1,0,0,0,77.5,82);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:56,y:253.1},9,cjs.Ease.get(-1)).to({x:-16.4,y:264.7},10,cjs.Ease.get(1)).wait(1).to({skewY:180,x:0.8,y:254.7},0).to({x:72.6,y:244.4},9,cjs.Ease.get(-1)).to({x:152.4,y:233.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.6,66.4,302.9,285);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(65.5,8.8,1,1,0,0,0,65.5,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.1,17.6);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.text = new lib.Символ22();
	this.text.setTransform(137.4,7.5,1,1,0,0,0,137.4,7.5);

	this.timeline.addTween(cjs.Tween.get(this.text).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.2,-71.3,372.1,174);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.gun = new lib.Символ26();
	this.gun.setTransform(150,84.6,1,1,0,0,0,150,83);

	this.timeline.addTween(cjs.Tween.get(this.gun).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,300,168.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAgAAIRRAAAxwAAIROAA");
	this.shape.setTransform(324.5,169.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.976)").s().p("AgXAYQgKgKAAgOIABgHQACgJAHgHQAKgKANAAQAOAAAKAKQAHAHACAJIABAHQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_1.setTransform(324.4,170.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 3
	this.instance = new lib.Символ35();
	this.instance.setTransform(328.5,193.6,1,1,0,0,0,65.5,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(326.6,171.9,1,1,0,0,0,326.6,171.9);
	this.instance_1.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.8,-240.4,1585.9,840.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// Слой 1
	this.pricel = new lib.Символ28();
	this.pricel.setTransform(771.5,412.4,1,1,0,0,0,326.6,171.9);

	this.timeline.addTween(cjs.Tween.get(this.pricel).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1586,840.3);


// stage content:



(lib.crisis600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		this.pricel.visible=false;
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.gun.gotoAndPlay(1);
		    this.text.gotoAndPlay(1);
		    this.pricel.gotoAndPlay(15);
			this.pricel.visible=true;
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.gun.gotoAndPlay(15);
		    this.text.gotoAndPlay(15);
		    this.pricel.gotoAndPlay(0);
			this.pricel.visible=false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// gun
	this.gun = new lib.Символ30();
	this.gun.setTransform(511.1,241,1,1,0,0,0,150,83.5);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// text
	this.text = new lib.Символ31();
	this.text.setTransform(151.4,40.4,0.891,0.891,0,0,0,137.4,12.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// pricel
	this.pricel = new lib.Символ32();
	this.pricel.setTransform(301,938.4,1,1,0,0,0,769.3,410.8);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// sambik
	this.instance = new lib.Символ13();
	this.instance.setTransform(485.1,33.7,1,1,0,0,0,133,85.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.stone();
	this.instance_1.setTransform(357.2,83.9,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// robot
	this.instance_2 = new lib.Символ42();
	this.instance_2.setTransform(431,94,0.917,0.917,0,0,0,151.4,176.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// soldier
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(118.3,256.1,1,1,0,0,0,108.8,112.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// fog
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(383.6,157.1,1,1,0,0,0,204,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// fon
	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(290.8,106.3,1,1,0,0,0,400,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492.8,31.3,1910.5,1486.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
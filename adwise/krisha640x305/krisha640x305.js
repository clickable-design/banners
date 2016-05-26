(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/aaa.png?1464244743867", id:"aaa"},
		{src:"images/eee.png?1464244743867", id:"eee"},
		{src:"images/fff.png?1464244743867", id:"fff"},
		{src:"images/qqq.png?1464244743867", id:"qqq"},
		{src:"images/rrr.png?1464244743867", id:"rrr"},
		{src:"images/sss.png?1464244743867", id:"sss"},
		{src:"images/ttt.png?1464244743867", id:"ttt"},
		{src:"images/uuu.png?1464244743867", id:"uuu"},
		{src:"images/www.png?1464244743867", id:"www"}
	]
};



// symbols:



(lib.aaa = function() {
	this.initialize(img.aaa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,31);


(lib.eee = function() {
	this.initialize(img.eee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.fff = function() {
	this.initialize(img.fff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,599);


(lib.qqq = function() {
	this.initialize(img.qqq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,239);


(lib.rrr = function() {
	this.initialize(img.rrr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,80);


(lib.sss = function() {
	this.initialize(img.sss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,80);


(lib.ttt = function() {
	this.initialize(img.ttt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,13);


(lib.uuu = function() {
	this.initialize(img.uuu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.www = function() {
	this.initialize(img.www);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fff();
	this.instance.setTransform(-178.6,-118.8,0.397,0.397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.6,-118.8,357.2,237.7);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sss();
	this.instance.setTransform(49.3,-40);

	this.instance_1 = new lib.sss();
	this.instance_1.setTransform(-61.9,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-40,163.2,80);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AggBWIAAg0Ig1AAIAAhCIA1AAIAAg1IBCAAIAAA1IA0AAIAABCIg0AAIAAA0gAg8AFIA5AAIAAA4IAIAAIAAg4IA4AAIAAgIIg4AAIAAg5IgIAAIAAA5Ig5AAg");
	this.shape.setTransform(-43.7,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AFNCSIgXgXIAAh+IAXgVIAlAAIAXAUIAAB/IgXAXgAFYB3IAOAAIAAh2IgOAAgADiCSIBAkOIAmAAIg/EOgAANCSIgjglIAAjZIAjglIBIAAIAlAlIAADZIglAlgAAlBiIAZAAIAAjDIgZAAgAi3CSIglglIAAjZIAlglIBIAAIAlAlIAADZIglAlgAifBiIAZAAIAAjDIgZAAgAluCSIAAjzIgaAAIAAgwIBWAAIAAEjgAC7AuIgYgXIAAh+IAXgVIAlAAIAXAVIAAB+IgWAXgADGATIAOAAIAAh0IgOAAg");
	this.shape_1.setTransform(13,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-14.7,104.7,29.4);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AVBCSIAAkjIBuAAIAlAlIAABLIgYAWIAYATIAABlIglAlgAV+BiIAZAAIAAhWIgZAAgAV+gjIAZAAIAAg+IgZAAgASrCSIglglIAAjZIAlglIBJAAIAlAlIAADZIglAlgATDBiIAZAAIAAjDIgZAAgAQBCSIAAjzIgpAAIAAgwICQAAIAAAwIgqAAIAADzgANNCSIglglIAAjZIAlglIBIAAIAlAlIAABVIg9AAIAAhKIgYAAIAADDIAYAAIAAhKIA9AAIAABVIglAlgALCCSIAAhdIAHgxIglCOIhDAAIAAkjIA9AAIAABdIgHAxIAliOIBDAAIAAEjgAGmCSIAAkjIBuAAIAlAlIAACEIglAlIgxAAIAABVgAHjAMIAZAAIAAhtIgZAAgAEQCSIglglIAAjZIAlglIBJAAIAlAlIAADZIglAlgAEoBiIAZAAIAAjDIgZAAgAAxCSIAAkjIBtAAIAlAlIAACEIglAlIgwAAIAABVgABuAMIAYAAIAAhtIgYAAgAiICSIAAkjIBuAAIAjAlIAACEIgjAlIgxAAIAABVgAhLAMIAZAAIAAhtIgZAAgAkeCSIAAkjIBuAAIAAAwIgxAAIAAA+IAsAAIAAAvIgsAAIAABWIAxAAIAAAwgAmjCSIAAjzIgqAAIAAgwICQAAIAAAwIgpAAIAADzgApjCSIAAhdIAGgxIglCOIhDAAIAAkjIA9AAIAABdIgGAxIAkiOIBEAAIAAEjgAspCSIAAhlIAIgyIghB6Igfh6IABAMIAHAmIAABlIg9AAIAAkjIBCAAIASBiIAThiIBDAAIAAEjgAv8CSIAAhdIAHgxIglCOIhDAAIAAkjIA9AAIAABdIgHAxIAliOIBDAAIAAEjgAzDCSIAAiGIgYAAIAACGIg9AAIAAkjIA9AAIAABuIAYAAIAAhuIA9AAIAAEjgA2uCSIglglIAAjZIAlglIBJAAIAlAlIAABVIg9AAIAAhKIgZAAIAADDIAZAAIAAhKIA9AAIAABVIglAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-14.7,298.5,29.4);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVBCSIAAkjIBuAAIAlAlIAABLIgYAWIAYATIAABlIglAlgAV+BiIAZAAIAAhWIgZAAgAV+gjIAZAAIAAg+IgZAAgASrCSIglglIAAjZIAlglIBJAAIAlAlIAADZIglAlgATDBiIAZAAIAAjDIgZAAgAQBCSIAAjzIgpAAIAAgwICQAAIAAAwIgqAAIAADzgANNCSIglglIAAjZIAlglIBIAAIAlAlIAABVIg9AAIAAhKIgYAAIAADDIAYAAIAAhKIA9AAIAABVIglAlgALCCSIAAhdIAHgxIglCOIhDAAIAAkjIA9AAIAABdIgHAxIAliOIBDAAIAAEjgAGmCSIAAkjIBuAAIAlAlIAACEIglAlIgxAAIAABVgAHjAMIAZAAIAAhtIgZAAgAEQCSIglglIAAjZIAlglIBJAAIAlAlIAADZIglAlgAEoBiIAZAAIAAjDIgZAAgAAxCSIAAkjIBtAAIAlAlIAACEIglAlIgwAAIAABVgABuAMIAYAAIAAhtIgYAAgAiICSIAAkjIBuAAIAjAlIAACEIgjAlIgxAAIAABVgAhLAMIAZAAIAAhtIgZAAgAkeCSIAAkjIBuAAIAAAwIgxAAIAAA+IAsAAIAAAvIgsAAIAABWIAxAAIAAAwgAmjCSIAAjzIgqAAIAAgwICQAAIAAAwIgpAAIAADzgApjCSIAAhdIAGgxIglCOIhDAAIAAkjIA9AAIAABdIgGAxIAkiOIBEAAIAAEjgAspCSIAAhlIAIgyIghB6Igfh6IABAMIAHAmIAABlIg9AAIAAkjIBCAAIASBiIAThiIBDAAIAAEjgAv8CSIAAhdIAHgxIglCOIhDAAIAAkjIA9AAIAABdIgHAxIAliOIBDAAIAAEjgAzDCSIAAiGIgYAAIAACGIg9AAIAAkjIA9AAIAABuIAYAAIAAhuIA9AAIAAEjgA2uCSIglglIAAjZIAlglIBJAAIAlAlIAABVIg9AAIAAhKIgZAAIAADDIAZAAIAAhKIA9AAIAABVIglAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-14.7,298.5,29.4);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfDyIg7g9IAAijIATgSIgTgVIAAifIA7g+IB4AAIA9A+IAACfIgUAVIAUASIAACjIg9A9gABGChIApAAIAAh5IgpAAgABGgnIApAAIAAh6IgpAAgAiIB8IgLhPIgLBPIg1AAIAch0IgahdIA1AAIAJA+IAKg+IA0AAIgbBdIAdB0g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-24.3,42.5,48.6);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6XGIIAAsPMA0vAAAIAAMPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.8,-39.2,337.6,78.4);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.aaa();
	this.instance.setTransform(-23,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-15.5,46,31);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ttt();
	this.instance.setTransform(-2,-1.9,0.295,0.295);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1.9,4.2,3.9);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rrr();
	this.instance.setTransform(-1.4,-2.7,0.068,0.068);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-2.7,2.9,5.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eee();
	this.instance.setTransform(-105,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-105,210,210);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.www();
	this.instance.setTransform(-415,-197.7,1.297,1.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415,-197.7,830,395.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("Ag6hLIB1BLIh1BMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-7.7,11.9,15.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag6hLIB1BLIh1BMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-7.6,11.9,15.4);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.qqq();
	this.instance.setTransform(-155,-119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-119.5,310,239);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(-332.8,-736,1.791,1.791);
	this.instance.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3097.6},220).to({rotation:180,x:-2933.5},13).to({rotation:225,x:-332.8},206).wait(452));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-652.6,-948.8,639.5,425.6);


(lib.Символ44 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(-7.3,0,0.44,0.44);
	this.instance.alpha = 0.488;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(18.1,0,0.605,0.605);

	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(-17,2.2,0.605,0.605);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-14.7,61.9,29.4);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ40();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},2).wait(4).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},2).wait(51));

	// Слой 1
	this.instance_1 = new lib.Символ39();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-14.7,298.5,29.4);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(-8.3,15.9,1.06,1.06);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(41.1,19.2,1.422,0.865);
	this.instance_1.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.9,-14.7,480,67.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ42();
	this.instance.setTransform(474.7,195.7,0.816,0.816);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(542.5,-10.5,1.201,1.201);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(479.2,11.6,0.879,1.296);
	this.instance_2.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330.8,-39.2,296.8,246.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1.9,4.2,3.9);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(-216.9,156.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EkRMClPMAAAlKdMIiZAAAMAAAFKdgEgsrANnQkeEeAAGVQAAGUEeEeQEfEeGUAAQGVAAEekeQEekeAAmUQAAmVkekeQkekemVAAQmUAAkfEeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1748.5,-1057.5,3497.2,2115.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1748.5,-1057.5,3497.2,2115.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(-1.7,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-2.9,5.2,5.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(2313,91.2,1,1,0,0,0,-216.3,155.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(780.7,-1121.6,3497.2,2115.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(-18.3,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-18.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-7.6,11.9,15.4);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(79.2,8,0.819,0.819);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.8,-89.9,254,195.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ15();
	this.instance.setTransform(-2311.7,-91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1531,-1213.1,3497.2,2115.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(18.3,-0.1,0.588,0.872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-18.3,scaleY:0.9,x:9.4,y:0},0).wait(1).to({scaleY:0.98,x:14.1},0).wait(1).to({scaleY:1.06,x:18.9},0).wait(1).to({regX:0,scaleY:1.1,x:32.1,y:-0.1},0).wait(1).to({regX:-18.3,scaleY:1.08,x:20},0).wait(1).to({scaleY:1.03,x:17.1},0).wait(1).to({scaleY:0.95,x:12.4},0).wait(1).to({scaleY:0.9,x:9.3},0).wait(1).to({regX:0,scaleY:0.87,x:18.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,-6.7,7,13.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(13,53.1,1,1,0,0,0,0,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.3,y:53},14,cjs.Ease.get(-1)).to({rotation:-3},15,cjs.Ease.get(0.98)).to({rotation:-1.5,y:52.9},15,cjs.Ease.get(-1)).to({rotation:0,y:53.1},15,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.8,-128.8,254,195.8);


(lib.Символ49 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,0,0.965,0.965);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(0.1,-26.6,1,1,90,0,0,6.2,-0.1);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(0,26.6,1,1,-90,0,0,6.2,-0.1);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(26.6,0.1,1,1,180,0,0,6.2,-0.1);

	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(-26.5,0,1,1,0,0,0,6.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-28.7,57.5,57.5);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.1},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:24.4},0).wait(1).to({rotation:30.5},0).wait(1).to({rotation:36.6},0).wait(1).to({rotation:42.7},0).wait(1).to({rotation:48.8},0).wait(1).to({rotation:54.9},0).wait(1).to({rotation:61},0).wait(1).to({rotation:67.1},0).wait(1).to({rotation:73.2},0).wait(1).to({rotation:79.3},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:91.5,y:-0.1},0).wait(1).to({rotation:97.6},0).wait(1).to({rotation:103.7},0).wait(1).to({rotation:109.8},0).wait(1).to({rotation:115.9},0).wait(1).to({rotation:122},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:134.2},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:158.6},0).wait(1).to({rotation:164.7},0).wait(1).to({rotation:170.8},0).wait(1).to({rotation:176.9},0).wait(1).to({rotation:183.1},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:195.3},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:207.5},0).wait(1).to({rotation:213.6},0).wait(1).to({rotation:219.7},0).wait(1).to({rotation:225.8},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:238},0).wait(1).to({rotation:244.1},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:256.3},0).wait(1).to({rotation:262.4},0).wait(1).to({rotation:268.5},0).wait(1).to({rotation:274.6,y:0},0).wait(1).to({rotation:280.7},0).wait(1).to({rotation:286.8},0).wait(1).to({rotation:292.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:305.1},0).wait(1).to({rotation:311.2},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:323.4},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:335.6},0).wait(1).to({rotation:341.7},0).wait(1).to({rotation:347.8},0).wait(1).to({rotation:353.9},0).wait(1).to({rotation:360},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-28.7,57.5,57.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.setTransform(77.1,-55.4,0.527,0.527,0,0,0,0,-0.1);

	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(84.4,-87.7,0.597,0.597,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415,-197.7,830,395.6);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ13();
	this.instance.setTransform(77.2,84.1,1.892,1.892);

	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-96.4,-73.6,2.141,2.141,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(77.2,83.9,4.735,4.735);

	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(-93.2,-69.7,6.556,6.556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 1
	this.instance_4 = new lib.uuu();
	this.instance_4.setTransform(-336,-160.1,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336,-160.1,672,320.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:0.1},0).wait(2).to({x:0.2},0).wait(2).to({x:0.3},0).wait(1).to({x:0.4},0).wait(2).to({x:0.5},0).wait(1).to({x:0.6},0).wait(2).to({x:0.7},0).wait(1).to({x:0.8},0).wait(2).to({x:0.9},0).wait(1).to({x:1},0).wait(1).to({x:1.1},0).wait(2).to({x:1.2},0).wait(1).to({x:1.3},0).wait(1).to({x:1.4},0).wait(1).to({x:1.5},0).wait(1).to({x:1.6},0).wait(2).to({x:1.7},0).wait(1).to({x:1.8},0).wait(1).to({x:1.9},0).wait(1).to({x:2},0).wait(1).to({x:2.1},0).wait(1).to({x:2.2},0).wait(1).to({x:2.3},0).wait(1).to({x:2.4},0).wait(1).to({x:2.5},0).wait(1).to({x:2.6},0).wait(1).to({x:2.7},0).wait(1).to({x:2.8},0).wait(1).to({x:2.9},0).wait(1).to({x:3},0).wait(1).to({x:3.1},0).wait(1).to({x:3.3},0).wait(1).to({x:3.4},0).wait(1).to({x:3.5},0).wait(1).to({x:3.6},0).wait(1).to({x:3.8},0).wait(1).to({x:3.9},0).wait(1).to({x:4},0).wait(1).to({x:4.2},0).wait(1).to({x:4.3},0).wait(1).to({x:4.4},0).wait(1).to({x:4.6},0).wait(1).to({x:4.7},0).wait(1).to({x:4.9},0).wait(1).to({x:5},0).wait(1).to({x:5.2},0).wait(1).to({x:5.4},0).wait(1).to({x:5.5},0).wait(1).to({x:5.7},0).wait(1).to({x:5.9},0).wait(1).to({x:6},0).wait(1).to({x:6.2},0).wait(1).to({x:6.4},0).wait(1).to({x:6.6},0).wait(1).to({x:6.8},0).wait(1).to({x:7},0).wait(1).to({x:7.2},0).wait(1).to({x:7.4},0).wait(1).to({x:7.6},0).wait(1).to({x:7.9},0).wait(1).to({x:8.1},0).wait(1).to({x:8.3},0).wait(1).to({x:8.6},0).wait(1).to({x:8.8},0).wait(1).to({x:9.1},0).wait(1).to({x:9.3},0).wait(1).to({x:9.6},0).wait(1).to({x:9.9},0).wait(1).to({x:10.2},0).wait(1).to({x:10.5},0).wait(1).to({x:10.8},0).wait(1).to({x:11.1},0).wait(1).to({x:11.4},0).wait(1).to({x:11.7},0).wait(1).to({x:12.1},0).wait(1).to({x:12.4},0).wait(1).to({x:12.8},0).wait(1).to({x:13.1},0).wait(1).to({x:13.5},0).wait(1).to({x:13.9},0).wait(1).to({x:14.3},0).wait(1).to({x:14.7},0).wait(1).to({x:15.1},0).wait(1).to({x:15.5},0).wait(1).to({x:16},0).wait(1).to({x:16.4},0).wait(1).to({x:16.8},0).wait(1).to({x:17.3},0).wait(1).to({x:17.7},0).wait(1).to({x:18.2},0).wait(1).to({x:18.7},0).wait(1).to({x:19.1},0).wait(1).to({x:19.6},0).wait(1).to({x:20},0).wait(1).to({x:20.5},0).wait(1).to({x:21},0).wait(1).to({x:21.4},0).wait(1).to({x:21.8},0).wait(1).to({x:22.3},0).wait(1).to({x:22.7},0).wait(1).to({x:23.1},0).wait(1).to({x:23.5},0).wait(1).to({x:23.9},0).wait(1).to({x:24.3},0).wait(1).to({x:24.7},0).wait(1).to({x:25.1},0).wait(1).to({x:25.5},0).wait(1).to({x:25.8},0).wait(1).to({x:26.2},0).wait(1).to({x:26.5},0).wait(1).to({x:26.9},0).wait(1).to({x:27.2},0).wait(1).to({x:27.5},0).wait(1).to({x:27.8},0).wait(1).to({x:28.1},0).wait(1).to({x:28.4},0).wait(1).to({x:28.7},0).wait(1).to({x:29},0).wait(1).to({x:29.3},0).wait(1).to({x:29.6},0).wait(1).to({x:29.8},0).wait(1).to({x:30.1},0).wait(1).to({x:30.3},0).wait(1).to({x:30.6},0).wait(1).to({x:30.8},0).wait(1).to({x:31},0).wait(1).to({x:31.3},0).wait(1).to({x:31.5},0).wait(1).to({x:31.7},0).wait(1).to({x:31.9},0).wait(1).to({x:32.1},0).wait(1).to({x:32.4},0).wait(1).to({x:32.6},0).wait(1).to({x:32.8},0).wait(1).to({x:32.9},0).wait(1).to({x:33.1},0).wait(1).to({x:33.3},0).wait(1).to({x:33.5},0).wait(1).to({x:33.7},0).wait(1).to({x:33.9},0).wait(1).to({x:34},0).wait(1).to({x:34.2},0).wait(1).to({x:34.4},0).wait(1).to({x:34.5},0).wait(1).to({x:34.7},0).wait(1).to({x:34.9},0).wait(1).to({x:35},0).wait(1).to({x:35.2},0).wait(1).to({x:35.3},0).wait(1).to({x:35.5},0).wait(1).to({x:35.6},0).wait(1).to({x:35.7},0).wait(1).to({x:35.9},0).wait(1).to({x:36},0).wait(1).to({x:36.2},0).wait(1).to({x:36.3},0).wait(1).to({x:36.4},0).wait(1).to({x:36.6},0).wait(1).to({x:36.7},0).wait(1).to({x:36.8},0).wait(1).to({x:36.9},0).wait(1).to({x:37.1},0).wait(1).to({x:37.2},0).wait(1).to({x:37.3},0).wait(1).to({x:37.4},0).wait(1).to({x:37.5},0).wait(1).to({x:37.6},0).wait(1).to({x:37.7},0).wait(1).to({x:37.9},0).wait(1).to({x:38},0).wait(1).to({x:38.1},0).wait(1).to({x:38.2},0).wait(1).to({x:38.3},0).wait(1).to({x:38.4},0).wait(1).to({x:38.5},0).wait(1).to({x:38.6},0).wait(1).to({x:38.7},0).wait(1).to({x:38.8},0).wait(1).to({x:38.9},0).wait(1).to({x:39},0).wait(1).to({x:39.1},0).wait(2).to({x:39.2},0).wait(1).to({x:39.3},0).wait(1).to({x:39.4},0).wait(1).to({x:39.5},0).wait(1).to({x:39.6},0).wait(1).to({x:39.7},0).wait(1).to({x:39.8},0).wait(2).to({x:39.9},0).wait(1).to({x:40},0).wait(1).to({x:39.9},0).wait(2).to({x:39.8},0).wait(2).to({x:39.7},0).wait(1).to({x:39.6},0).wait(2).to({x:39.5},0).wait(1).to({x:39.4},0).wait(2).to({x:39.3},0).wait(1).to({x:39.2},0).wait(2).to({x:39.1},0).wait(1).to({x:39},0).wait(1).to({x:38.9},0).wait(2).to({x:38.8},0).wait(1).to({x:38.7},0).wait(1).to({x:38.6},0).wait(1).to({x:38.5},0).wait(2).to({x:38.4},0).wait(1).to({x:38.3},0).wait(1).to({x:38.2},0).wait(1).to({x:38.1},0).wait(1).to({x:38},0).wait(1).to({x:37.9},0).wait(1).to({x:37.8},0).wait(1).to({x:37.7},0).wait(1).to({x:37.6},0).wait(1).to({x:37.5},0).wait(1).to({x:37.4},0).wait(1).to({x:37.3},0).wait(1).to({x:37.2},0).wait(1).to({x:37.1},0).wait(1).to({x:37},0).wait(1).to({x:36.9},0).wait(1).to({x:36.8},0).wait(1).to({x:36.6},0).wait(1).to({x:36.5},0).wait(1).to({x:36.4},0).wait(1).to({x:36.3},0).wait(1).to({x:36.1},0).wait(1).to({x:36},0).wait(1).to({x:35.9},0).wait(1).to({x:35.7},0).wait(1).to({x:35.6},0).wait(1).to({x:35.5},0).wait(1).to({x:35.3},0).wait(1).to({x:35.2},0).wait(1).to({x:35},0).wait(1).to({x:34.9},0).wait(1).to({x:34.7},0).wait(1).to({x:34.5},0).wait(1).to({x:34.4},0).wait(1).to({x:34.2},0).wait(1).to({x:34},0).wait(1).to({x:33.8},0).wait(1).to({x:33.6},0).wait(1).to({x:33.5},0).wait(1).to({x:33.3},0).wait(1).to({x:33.1},0).wait(1).to({x:32.9},0).wait(1).to({x:32.7},0).wait(1).to({x:32.4},0).wait(1).to({x:32.2},0).wait(1).to({x:32},0).wait(1).to({x:31.8},0).wait(1).to({x:31.5},0).wait(1).to({x:31.3},0).wait(1).to({x:31},0).wait(1).to({x:30.8},0).wait(1).to({x:30.5},0).wait(1).to({x:30.2},0).wait(1).to({x:29.9},0).wait(1).to({x:29.7},0).wait(1).to({x:29.4},0).wait(1).to({x:29.1},0).wait(1).to({x:28.7},0).wait(1).to({x:28.4},0).wait(1).to({x:28.1},0).wait(1).to({x:27.7},0).wait(1).to({x:27.4},0).wait(1).to({x:27},0).wait(1).to({x:26.7},0).wait(1).to({x:26.3},0).wait(1).to({x:25.9},0).wait(1).to({x:25.5},0).wait(1).to({x:25.1},0).wait(1).to({x:24.7},0).wait(1).to({x:24.2},0).wait(1).to({x:23.8},0).wait(1).to({x:23.4},0).wait(1).to({x:22.9},0).wait(1).to({x:22.5},0).wait(1).to({x:22},0).wait(1).to({x:21.6},0).wait(1).to({x:21.1},0).wait(1).to({x:20.6},0).wait(1).to({x:20.2},0).wait(1).to({x:19.7},0).wait(1).to({x:19.3},0).wait(1).to({x:18.8},0).wait(1).to({x:18.4},0).wait(1).to({x:18},0).wait(1).to({x:17.5},0).wait(1).to({x:17.1},0).wait(1).to({x:16.7},0).wait(1).to({x:16.3},0).wait(1).to({x:15.9},0).wait(1).to({x:15.5},0).wait(1).to({x:15.1},0).wait(1).to({x:14.7},0).wait(1).to({x:14.4},0).wait(1).to({x:14},0).wait(1).to({x:13.7},0).wait(1).to({x:13.3},0).wait(1).to({x:13},0).wait(1).to({x:12.7},0).wait(1).to({x:12.4},0).wait(1).to({x:12},0).wait(1).to({x:11.7},0).wait(1).to({x:11.5},0).wait(1).to({x:11.2},0).wait(1).to({x:10.9},0).wait(1).to({x:10.6},0).wait(1).to({x:10.4},0).wait(1).to({x:10.1},0).wait(1).to({x:9.8},0).wait(1).to({x:9.6},0).wait(1).to({x:9.3},0).wait(1).to({x:9.1},0).wait(1).to({x:8.9},0).wait(1).to({x:8.7},0).wait(1).to({x:8.4},0).wait(1).to({x:8.2},0).wait(1).to({x:8},0).wait(1).to({x:7.8},0).wait(1).to({x:7.6},0).wait(1).to({x:7.4},0).wait(1).to({x:7.2},0).wait(1).to({x:7},0).wait(1).to({x:6.8},0).wait(1).to({x:6.6},0).wait(1).to({x:6.4},0).wait(1).to({x:6.3},0).wait(1).to({x:6.1},0).wait(1).to({x:5.9},0).wait(1).to({x:5.8},0).wait(1).to({x:5.6},0).wait(1).to({x:5.4},0).wait(1).to({x:5.3},0).wait(1).to({x:5.1},0).wait(1).to({x:5},0).wait(1).to({x:4.8},0).wait(1).to({x:4.7},0).wait(1).to({x:4.5},0).wait(1).to({x:4.4},0).wait(1).to({x:4.2},0).wait(1).to({x:4.1},0).wait(1).to({x:3.9},0).wait(1).to({x:3.8},0).wait(1).to({x:3.7},0).wait(1).to({x:3.6},0).wait(1).to({x:3.4},0).wait(1).to({x:3.3},0).wait(1).to({x:3.2},0).wait(1).to({x:3},0).wait(1).to({x:2.9},0).wait(1).to({x:2.8},0).wait(1).to({x:2.7},0).wait(1).to({x:2.6},0).wait(1).to({x:2.5},0).wait(1).to({x:2.4},0).wait(1).to({x:2.2},0).wait(1).to({x:2.1},0).wait(1).to({x:2},0).wait(1).to({x:1.9},0).wait(1).to({x:1.8},0).wait(1).to({x:1.7},0).wait(1).to({x:1.6},0).wait(1).to({x:1.5},0).wait(1).to({x:1.4},0).wait(1).to({x:1.3},0).wait(1).to({x:1.2},0).wait(1).to({x:1.1},0).wait(1).to({x:1},0).wait(1).to({x:0.9},0).wait(1).to({x:0.8},0).wait(2).to({x:0.7},0).wait(1).to({x:0.6},0).wait(1).to({x:0.5},0).wait(1).to({x:0.4},0).wait(1).to({x:0.3},0).wait(1).to({x:0.2},0).wait(2).to({x:0.1},0).wait(1).to({x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415,-197.7,830,395.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10));

	// Слой 9
	this.instance = new lib.Символ48();
	this.instance.setTransform(1187.2,721);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).wait(1).to({alpha:1},9).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(118.8,98.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:76.3},2).to({scaleX:1.53,scaleY:1.53,x:155.3,y:195.4},4).to({scaleX:1.93,scaleY:1.93,x:182.6,y:284.8,alpha:0},3).wait(1).to({scaleX:1.53,scaleY:1.53,x:155.3,y:195.4,alpha:1},3).to({scaleX:1,scaleY:1,x:118.8,y:76.3},4).to({y:98.3},2).wait(1));

	// Слой 7
	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(-55.4,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:91.9},2).to({x:-53.7,y:270.7},7).wait(1).to({x:-55.4,y:91.9},7).to({y:103.9},2).wait(1));

	// Слой 6
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(-193.2,126.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:115.2},2).to({x:-192,y:293.6},7).wait(1).to({x:-193.2,y:115.2},7).to({y:126.4},2).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ28();
	this.instance_4.setTransform(89.8,-1.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:91.4,alpha:1},9).wait(1).to({x:89.8,alpha:0},9).wait(1));

	// Слой 1
	this.zad = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.zad).to({alpha:0},9).wait(1).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415,-227.8,1589.1,561.9);


// stage content:



(lib.krisha640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.style.cursor = "none";
		this.prizel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.prizel.x = stage.mouseX;
			this.prizel.y = stage.mouseY;
		}
		
		this.cursor = "none";
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndPlay(1);
			_this.prizel.gotoAndStop(1);
			_this.main.zad.gotoAndStop(1);
			_this.cherep.gotoAndStop(1);
			
			
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		  function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(11);
			_this.prizel.gotoAndStop(0);
		    _this.main.zad.gotoAndPlay(1);
			_this.cherep.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.cherep = new lib.Символ44();
	this.cherep.setTransform(65.8,261.6);

	this.timeline.addTween(cjs.Tween.get(this.cherep).wait(1));

	// Слой 25
	this.prizel = new lib.Символ49();
	this.prizel.setTransform(-264,173);

	this.timeline.addTween(cjs.Tween.get(this.prizel).wait(1));

	// Слой 1
	this.main = new lib.Символ6();
	this.main.setTransform(237,152.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142,77.2,1589.1,561.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
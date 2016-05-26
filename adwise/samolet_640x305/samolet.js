(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/air.png?1464248286696", id:"air"},
		{src:"images/bg.jpg?1464248286696", id:"bg"},
		{src:"images/cabin.png?1464248286696", id:"cabin"},
		{src:"images/cloud.png?1464248286696", id:"cloud"},
		{src:"images/cursor.png?1464248286696", id:"cursor"}
	]
};



// symbols:



(lib.air = function() {
	this.initialize(img.air);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,485,201);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,843,421);


(lib.cabin = function() {
	this.initialize(img.cabin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,138);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,147);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,89.5,0,-89.5).s().p("Eg45ANaIAA6zMBxzAAAIAAazg");
	this.shape.setTransform(374.1,413.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-89.5,0,89.5).s().p("Eg46ANaIAA6zMBx1AAAIAAazg");
	this.shape_1.setTransform(364.3,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,738.4,499.7);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cabin();
	this.instance.setTransform(1.7,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,19.9,421,138);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A4/c5MAAAg5xMAx/AAAMAAAA5xg");
	this.shape.setTransform(160,185);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A84dXMAAAg6tMA5xAAAMAAAA6tg");
	this.shape.setTransform(185,188);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AheAvIAAgKIgyAAIAAAKIgSAAIAAgcIAJAAIAdhBIAJAAIAeBBIAJAAIAAAcgAhrASIgNgcIgLAcIAYAAgAGeAlIAAhSIAWAAIAAAZIAPAAQAFAAAJADQAFACAEAFQAEAEACAFQACADAAAGQAAAFgCAGQgCAFgEAEQgEAEgFADQgJACgFAAgAG0ASIAPAAQAFAAACgDQACgDAAgEQAAgEgCgDQgDgBgEAAIgPAAgAEfAlIAAhSIAWAAIAAA+IAUAAIAAg+IAWAAIAAA+IAVAAIAAg+IAVAAIAABSgAD0AlIAAhSIAWAAIAABSgAChAlIAAhSIAWAAIAAAZIAPAAQAFAAAJADQAFACAEAFQAEAEACAFQACADAAAGQAAAFgCAGQgCAFgEAEQgEAEgFADQgJACgFAAgAC3ASIAPAAQAFAAACgDQACgDAAgEQAAgEgCgDQgDgBgEAAIgPAAgAB2AlIAAglIgSATIgCAAIgSgTIAAAlIgWAAIAAhSIAIAAIAhAkIAigkIAHAAIAABSgAgQAlIAAgnIgqAnIgIAAIAAhSIAWAAIAAApIAqgpIAGAAIAABSgAjfAlIAAhSIA0AAIAAATIgfAAIAAAMIAdAAIAAARIgdAAIAAAPIAgAAIAAATgAkxAlIAAhSIAkAAQAFAAAFACQAFACADAEQAEADACAFQACAFAAAFIgCAIQgCAEgDADQAFACADADQACAEAAAGQAAAFgBAFQgCAFgDADQgEAEgEACQgFACgHAAgAkcASIARAAQADAAACgCQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAgDgBgCQgCgCgDAAIgRAAgAkcgMIANAAQADAAACgCQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgDgDAAIgNAAgAlRAlIgFgKIghAAIgFAKIgVAAIAAgDIAmhQIAJAAIAmBQIAAADgAldAIIgJgUIgKAUIATAAgAmxAlIAAghIgaAAIAAAhIgWAAIAAhSIAWAAIAAAfIAaAAIAAgfIAWAAIAABSg");
	this.shape.setTransform(48.2,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,9.5);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aob08IOXAAEgIbgg6IOXAAAl7u9IOXAAAl767IOXAAAobO8IOXAAAobo+IOXAAAobC+IOXAAAl7i/IOXAAAl7I9IOXAAAoba6IOXAAAl7U7IOXAAEgF7Ag7IOXAA");
	this.shape.setTransform(55.5,-371);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("Aob08IOXAAEgIbgg6IOXAAAl7u9IOXAAAl767IOXAAAobO8IOXAAAobo+IOXAAAobC+IOXAAAl7i/IOXAAAl7I9IOXAAAoba6IOXAAAl7U7IOXAAEgF7Ag7IOXAA");
	this.shape_1.setTransform(55.5,94.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-583.7,112,890.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AG0B2IgMgdIhcAAIgOAdIg6AAIAAgIIBpjhIAZAAIBpDhIAAAIgAGUAmIgag7IgbA7IA1AAgABoB2IAAjmICQAAIAAA1IhUAAIAACxgAAQB2IgOgdIhZAAIgOAdIg6AAIAAgIIBpjhIAZAAIBnDhIAAAIgAgPAmIgag7IgbA7IA1AAgAlnB2IAAjmIBmAAQAcAAAiAbQALAMAFAPQAFAPAAARQAAARgFANQgFAQgLALQgLANgPAHQgHAEgKABQgJACgKAAIgrAAIAAA8gAksAFIAqAAQAMAAAHgIQAGgKABgNQAAgNgGgKQgEgEgFgDQgFgDgGAAIgqAAgApKB2IAAjmIBiAAQAQAAANAGQANAFAJAJQALALAGAMQAFANAAAPQAAALgFALQgFAMgJAGQAPAFAHANQAHAMAAAQQAAAPgFANQgFAOgJAJQgKALgNAFQgNAGgRAAgAoQBBIAuAAQAJAAAFgGQAEgGAAgHQAAgJgEgFQgGgGgIAAIguAAgAoQgWIAkAAQAJAAAEgGQAGgEgBgIQABgIgGgFQgEgGgJAAIgkAAgAIUBsQgKgJAAgNQAAgHACgFQADgGAFgEQAJgIANAAQAOAAAJAIQAFAEADAGQACAFAAAHQAAANgKAJQgJAJgOAAQgNAAgJgJgAINAvIgEikIBCAAIgDCkg");
	this.shape.setTransform(58.8,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.5,23.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUCPIAAgWIh3AAIAAAWIgrAAIAAhDIAVAAIBFieIAWAAIBGCeIAUAAIAABDgAhtBLIA5AAIgchJgAlBB2QgJgDgIgFQgIgFgIgHQgHgGgGgIQgGgJgEgJQgEgKgDgMQgCgLAAgNQAAhEBngjQAOAAAYAHQAJADAJAFQAJAFAGAHIAOAOQAGAIAEAKQAEAKACAMQADAJAAANQAABGhoAjQgZgCgNgFgAktgdQgKADgGAHQgIAHgEAKQgEAJAAANQAAANAEALQAEAKAIAHQAGAHAKADQAJAEAJAAQALAAAHgEQALgDAGgHQAIgHAEgKQAEgLAAgNQAAgNgEgJQgEgKgIgHQgGgHgLgDQgHgDgLAAQgJAAgJADgAIdB4IAAhjIhmBjIgSAAIAAjHIA0AAIAABhIBmhiIATAAIAADIgAD2B4IAAjHIB9AAIAAAuIhKAAIAAAcIBEAAIAAAsIhEAAIAAAkIBNAAIAAAtgAAuB4IAAjHICRAAIAAAuIhdAAIAAAZIAlAAQAMAAATAFQAOADAJAKQAJAJAFALQAEAMAAANQAAAMgEAMQgFAMgJAJQgJAKgOAEQgTAGgMAAgABiBKIAlAAQAKAAAGgGQAEgFAAgJQAAgHgEgGQgGgGgKAAIglAAgAndB4IAAiYIg+AAIAACYIg1AAIAAjHICnAAIAADHgAHuheQgJgDgHgGQgGgGgEgJQgDgJgBgMIAfgDQgBAIAGAEQAEADALAAQAIAAAGgDQAFgEABgIIAfADQgBAMgEAJQgEAJgGAGQgGAGgJADQgKAEgLAAQgMAAgJgEg");
	this.shape.setTransform(59.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.4,118.8,28.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AJZAAQAAD5iwCwQiwCwj5AAQj4AAiwiwQiwiwAAj5QAAj4CwiwQCwiwD4AAQD5AACwCwQCwCwAAD4g");
	this.shape.setTransform(60.2,60.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,123.3,123.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(6.5,1,1).p("AEGz6QwXUNQXTo");
	this.shape.setTransform(26.2,127.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-3.2,58.9,261.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("AitnPICxAAAg7qxIBVAAAjajVIBYAAAjzAjICzAAABBuhICzAAAjVH5ICzAAAjzD6IBXAAAgiOiICyAAAh5LQIBXAA");
	this.shape.setTransform(24.5,93);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,51.9,189);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AIXlQIwtKh");
	this.shape.setTransform(458.8,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(404.3,-1,109,69.6);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AiWChQhGg7gFhaQgFhXA/hCQA/hDBegGQBcgFBFA7QBGA7AFBZQAGBYhABCQg+BDheAGIgPAAQhUAAg/g2g");
	this.shape.setTransform(22.7,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.5,43.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.air();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,485,201);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,843,421);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,436,147);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cursor();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(210.5,69,1,1,-5,0,0,210.5,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5,x:210.6},50,cjs.Ease.get(1)).to({rotation:-5,x:210.5},49,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,1.6,431.4,174.2);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(210.5,69,1,1,0,0,0,210.5,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.95,scaleY:0.95},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,1.6,431.4,174.2);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(210.5,69,1,1,0,0,0,210.5,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,1.6,431.4,174.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(-10,15,1,1,0,0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-28,x:-8.6,y:8},9,cjs.Ease.get(1)).to({rotation:0,x:-10,y:15},10,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,0,30,30);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(46,21,1,1,0,0,0,46,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:551},59,cjs.Ease.get(1)).to({y:21},80,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-562.7,112,890.8);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ35();
	this.instance.setTransform(-595,260,1,1,180,0,0,46,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(56,0,1,1,0,0,0,46,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-660.5,-562.7,782,1385.5);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(359.4,-78.1,1,1,0,0,0,369.2,249.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0},3,cjs.Ease.get(1)).wait(1).to({alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-327.9,738.4,499.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.setTransform(59.7,43.1,1,1,0,0,0,58.8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:54.1},15,cjs.Ease.get(1)).to({y:43.1},15,cjs.Ease.get(-1)).wait(16));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(59.5,2,1,1,0,0,0,59.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:15},14,cjs.Ease.get(-1)).wait(30).to({y:2},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-9.6,118.8,64.6);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 4
	this.gun = new lib.Символ41();
	this.gun.setTransform(98.5,146,1,1,0,0,0,210.5,69);
	this.gun._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1).to({_off:false},0).to({regX:210.6,scaleX:0.75,scaleY:0.75,x:107.6,y:26},3,cjs.Ease.get(1)).wait(1).to({regX:210.5,scaleX:1,scaleY:1,x:98.5,y:146},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(96.3,-211.2,1,1,0,0,0,48.2,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-261.2},3,cjs.Ease.get(1)).wait(1).to({y:-211.2},4,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(201.5,-205,0.71,0.71,0,180,0,48.2,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:-255},3,cjs.Ease.get(1)).wait(1).to({y:-205},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ32();
	this.instance_2.setTransform(108.5,13.9,1,1,0,0,0,59.5,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:133.9},3,cjs.Ease.get(1)).wait(1).to({y:13.9},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.1,-222.9,122.8,264.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(60.2,60.2,0.46,0.46,0,0,0,60.1,60.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.57,scaleY:0.57,alpha:1},4).to({scaleX:1,scaleY:1,x:60.1,y:60.1},15).to({scaleX:1.21,scaleY:1.21,alpha:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.8,31.8,56.8,56.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(60.2,60.2,0.46,0.46,0,0,0,60.1,60.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(26));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(60.1,60.1,1,1,0,0,0,60.1,60.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(24).to({_off:true},1).wait(5));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ27();
	this.instance_2.setTransform(60.2,60.2,0.46,0.46,0,0,0,60.1,60.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(25).to({_off:true},1).wait(10));

	// Слой 1
	this.instance_3 = new lib.Символ27();
	this.instance_3.setTransform(60.1,60.1,1,1,0,0,0,60.1,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:true},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.8,31.8,56.8,56.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия: 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(27.4,122,1,1,0,0,0,24.4,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(26.2,127.5,1,1,0,0,0,26.2,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-3.2,58.9,261.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(421.5,210.5,1,1,0,0,0,421.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,843,421);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(256.1,161.7,1,1,0,0,0,256.1,161.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:88.3,y:288.2,alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(404.8,-0.5,108,68.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(95.3,22.2,1,1,0,0,0,22.7,21.6);

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(22.7,21.6,1,1,0,0,0,22.7,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.1,43.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(218,73.5,1,1,0,0,0,218,73.5);
	this.instance.filters = [new cjs.BlurFilter(7, 22, 1)];
	this.instance.cache(-2,-2,440,151);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-11,448,173);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(363,-112.5,0.46,0.46,0,0,0,218.1,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:218,scaleX:1,scaleY:1,x:-42,y:352.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258.7,-157.3,213,94);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(421.5,210.5,1.11,1.11,0,0,0,421.5,210.5);
	this.instance.alpha = 0.699;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,alpha:0.699},1).to({scaleX:1.88,scaleY:1.88,alpha:0.66},15,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(421.5,210.5,1.11,1.11,0,0,0,421.5,210.5);
	this.instance_1.alpha = 0.699;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,alpha:0.699},1).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({_off:true},1).wait(11));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(421.5,210.5,1.11,1.11,0,0,0,421.5,210.5);
	this.instance_2.alpha = 0.699;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,alpha:0.699},1).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({_off:true},1).wait(21));

	// Слой 1 - копия: 2 - копия
	this.instance_3 = new lib.Символ20();
	this.instance_3.setTransform(421.5,210.5,1.11,1.11,0,0,0,421.5,210.5);
	this.instance_3.alpha = 0.699;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,alpha:0.699},1).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(421.5,210.5,1.11,1.11,0,0,0,421.5,210.5);
	this.instance_4.alpha = 0.699;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,alpha:0.699},1).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// Слой 1 - копия
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(421.5,210.5,1.11,1.11,0,0,0,421.5,210.5);
	this.instance_5.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({scaleX:1.11,scaleY:1.11,alpha:0.699},1).to({scaleX:1.66,scaleY:1.66,alpha:0.449},14,cjs.Ease.get(1)).to({_off:true},1).wait(25));

	// Слой 1
	this.instance_6 = new lib.Символ20();
	this.instance_6.setTransform(421.5,210.5,1,1,0,0,0,421.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-23.1,935.7,467.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия: 2 - копия: 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(167.2,266.4,1.889,1.889,0,0,0,218,73.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(14).to({_off:true},1).wait(1));

	// Слой 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(893.5,175,1,1,0,0,180,218,73.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(15).to({scaleX:0.52,scaleY:0.52,x:1020.5,y:130},0).wait(1));

	// Слой 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(179.2,180.3,1.029,1.029,0,0,0,218,73.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(14).to({_off:true},1).wait(1));

	// Слой 2 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(563.5,175,1,1,0,0,180,218,73.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).wait(15).to({scaleX:0.52,scaleY:0.52,x:550.5,y:130},0).to({_off:true},1).wait(6));

	// Слой 2 - копия: 2
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(733.5,175,1,1,0,0,180,218,73.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).wait(15).to({_off:true},1).wait(6));

	// Слой 2 - копия: 2
	this.instance_5 = new lib.Символ6();
	this.instance_5.setTransform(133.5,175,1,1,0,0,0,218,73.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(14).to({_off:true},1).wait(11));

	// Слой 2 - копия: 2 - копия
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(67.9,262.4,1.47,1.47,0,0,0,218,73.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).wait(14).to({_off:true},1).wait(20));

	// Слой 2 - копия: 2 - копия: 2
	this.instance_7 = new lib.Символ6();
	this.instance_7.setTransform(733.5,175,1,1,0,0,180,218,73.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).wait(15).to({scaleX:0.52,scaleY:0.52,x:720.5,y:130},0).to({_off:true},1).wait(17));

	// Слой 2 - копия: 2
	this.instance_8 = new lib.Символ6();
	this.instance_8.setTransform(215.3,262.4,1.47,1.47,0,0,0,218,73.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off:false},0).wait(14).to({_off:true},1).wait(20));

	// Слой 2 - копия: 2
	this.instance_9 = new lib.Символ6();
	this.instance_9.setTransform(573.5,175,1,1,0,0,180,218,73.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).wait(15).to({scaleX:0.52,scaleY:0.52,x:560.5,y:130},0).to({_off:true},1).wait(25));

	// Слой 2 - копия
	this.instance_10 = new lib.Символ6();
	this.instance_10.setTransform(573.5,175,1,1,0,0,180,218,73.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).wait(15).to({_off:true},1).wait(25));

	// Слой 2
	this.instance_11 = new lib.Символ6();
	this.instance_11.setTransform(283.5,175,1,1,0,0,0,218,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:true},1).wait(30));

	// bg
	this.instance_12 = new lib.Символ3();
	this.instance_12.setTransform(421.5,210.5,1,1,0,0,0,421.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:-4},14,cjs.Ease.get(-1)).to({regX:421.6,scaleX:1.02,scaleY:1.02,rotation:2,x:421.6},15,cjs.Ease.get(1)).to({regX:421.5,scaleX:1,scaleY:1,rotation:0,x:421.5},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-55.8,935.7,500);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(421.5,210.5,1,1,0,0,0,421.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-55.8,935.7,500);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ21();
	this.instance.setTransform(444.2,127.5,1,1,0,0,180,26.2,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:374.2},15,cjs.Ease.get(1)).to({x:444.2},14,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(24.2,127.5,1,1,0,0,0,26.2,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:94.2},15,cjs.Ease.get(1)).to({x:24.2},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-3.2,478.9,261.5);


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

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(234.5,123.1,1,1,0,0,0,60.1,60.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(26.2,127.5,1,1,0,0,0,26.2,127.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-3.2,478.9,261.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ17_1();
	this.instance.setTransform(-140.5,185.5,1,1,0,0,0,256.1,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1 - копия: 2
	this.instance_1 = new lib.Символ17_1();
	this.instance_1.setTransform(-73.1,161,1,1,0,0,0,256.1,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ17_1();
	this.instance_2.setTransform(-99.3,126.2,1,1,0,0,0,256.1,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ17_1();
	this.instance_3.setTransform(-149.1,161.7,1,1,0,0,0,256.1,161.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-36,184.1,127.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ15();
	this.instance.setTransform(205.7,162.4,1,1,0,0,0,22.7,21.6);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(35, 4, 1)];
	this.instance.cache(-2,-2,122,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(1).to({scaleX:1.18,scaleY:1.18,x:205.8},0).wait(1).to({scaleX:1,scaleY:1,x:205.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:205.8},0).wait(1).to({scaleX:1,scaleY:1,x:205.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:205.8},0).wait(1).to({scaleX:1,scaleY:1,x:205.7},0).to({alpha:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(242.5,100.5,1,1,0,0,0,242.5,100.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AiSClQhEg9gGhcQgFhZA9hFQA9hEBbgGQBagFBFA9QBEA9AGBcQAFBZg9BFQg9BEhcAFIgNABQhSAAg/g4g");
	this.shape.setTransform(208.7,167.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).to({state:[{t:this.shape},{t:this.instance_1}]},24).wait(1));

	// Слой 3 - копия: 2 - копия
	this.instance_2 = new lib.Символ19();
	this.instance_2.setTransform(206.1,234.1,1,1,0,74,-106,-20.9,80.5);
	this.instance_2.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25));

	// Слой 3 - копия: 2
	this.instance_3 = new lib.Символ19();
	this.instance_3.setTransform(273.5,230.1,1,1,-74,0,0,-20.9,80.5);
	this.instance_3.alpha = 0.449;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// Слой 3 - копия
	this.instance_4 = new lib.Символ19();
	this.instance_4.setTransform(574.5,204,1,1,0,0,180,-20.8,80.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// Слой 3
	this.instance_5 = new lib.Символ19();
	this.instance_5.setTransform(-112,207.4,1,1,0,0,0,-20.8,80.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.7,0,645.9,218.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(242.5,100.5,1,1,0,0,0,242.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.7,0,645.9,218.7);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(242.5,100.5,1,1,0,0,0,242.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.91,scaleY:0.91},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.7,0,645.9,218.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(170.5,100.5,1,1,9,0,0,242.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5,x:276.2,y:100.6},16,cjs.Ease.get(-1)).to({regX:242.6,rotation:-11,x:319.7,y:100.5},13,cjs.Ease.get(1)).to({regY:100.4,rotation:3.3,x:211.9},17,cjs.Ease.get(-1)).to({regY:100.5,rotation:-8,x:170.6},13,cjs.Ease.get(1)).to({regX:242.5,rotation:9,x:290.5},25,cjs.Ease.get(-1)).to({x:170.5},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.4,-36.7,649.2,297.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(242.5,100.5,1,1,0,0,0,242.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:139.4},29).to({y:100.5},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.4,-36.7,649.2,297.9);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(1));

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(242.5,100.5,1,1,0,0,0,242.5,100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.57,scaleY:0.57,x:459.3},3).wait(1).to({scaleX:1,scaleY:1},0).to({scaleX:0.54,scaleY:0.54,x:155.8},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.4,-36.7,649.2,297.9);


(lib.Символ45 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(236.5,123.1,1,1,0,0,0,60.1,60.1);

	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(28.2,127.5,1,1,0,0,0,26.2,127.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]}).to({state:[{t:this.instance_1,p:{alpha:0}},{t:this.instance,p:{alpha:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-3.2,478.9,261.5);


// stage content:



(lib.samolet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.left.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
		  _this.air.gotoAndPlay(1);
		}
		
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.right.addEventListener("mouseover", fl_MouseOverHandler_3);
		
		function fl_MouseOverHandler_3()
		{
			_this.air.gotoAndPlay(5);
		}
		
		
		
		
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.left.addEventListener("mouseout", fl_MouseOutHandler_56);
		
		function fl_MouseOutHandler_56()
		{
		 _this.air.gotoAndPlay(0);
		}
		
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.right.addEventListener("mouseout", fl_MouseOutHandler_46);
		
		function fl_MouseOutHandler_46()
		{
		 _this.air.gotoAndPlay(0);
		}
		this.cursor = "none";
		
		stage.canvas.style.cursor = "none";
		this.pric.mouseEnabled = false;
		
		this.addEventListener("tick", qwe4.bind(this));
		
		function qwe4() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
		
		}
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		
		
		
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		  function fl_MouseOverHandler_5()
		{
		    _this.text.gotoAndPlay(1);
			_this.pric.gotoAndPlay(1);
			_this.pric_an.gotoAndPlay(1);
			_this.black.gotoAndPlay(1);
			
		
		
		
		    
		}
		
		
		stage.canvas.onmouseout = fl_MouseOutHandler_23;
		
		  function fl_MouseOutHandler_23()
		{
		    _this.text.gotoAndPlay(5);
			_this.pric.gotoAndPlay(0);
			_this.pric_an.gotoAndPlay(0);
			_this.black.gotoAndPlay(5);
		
		
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// an
	this.pric_an = new lib.Символ45();
	this.pric_an.setTransform(321.2,151.5,1,1,0,0,0,236.2,127.5);

	this.timeline.addTween(cjs.Tween.get(this.pric_an).wait(1));

	// pricel
	this.pric = new lib.Символ24();
	this.pric.setTransform(320,152,1,1,0,0,0,233.4,125);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// text
	this.text = new lib.Символ29();
	this.text.setTransform(319.1,249.6,1,1,0,0,0,107.5,12);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// right
	this.right = new lib.Символ40();
	this.right.setTransform(480,161,1,1,0,0,0,160,185);
	new cjs.ButtonHelper(this.right, 0, 1, 2, false, new lib.Символ40(), 3);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// left 
	this.left = new lib.Символ39();
	this.left.setTransform(135.1,164,1,1,0,0,0,185,188);
	new cjs.ButtonHelper(this.left, 0, 1, 2, false, new lib.Символ39(), 3);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// air
	this.air = new lib.Символ4();
	this.air.setTransform(320.1,130.9,0.83,0.83,0,0,0,242.6,100.5);

	this.timeline.addTween(cjs.Tween.get(this.air).wait(1));

	// black
	this.black = new lib.Символ33();
	this.black.setTransform(342,290.1,1,1,0,0,0,364.3,85.9);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// lines
	this.instance = new lib.Символ34();
	this.instance.setTransform(638,17,1,1,0,0,0,46,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(318.5,154.5,1,1,0,0,0,421.5,210.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(170.7,-393.2,935.7,1385.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
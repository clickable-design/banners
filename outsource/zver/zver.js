(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bone.png?1466762376988", id:"bone"},
		{src:"images/cube.png?1466762376988", id:"cube"},
		{src:"images/fish.png?1466762376988", id:"fish"},
		{src:"images/PitchStock_infinite_white_studio_background_03.jpg?1466762376988", id:"PitchStock_infinite_white_studio_background_03"},
		{src:"images/zver_03.png?1466762376988", id:"zver_03"},
		{src:"images/zver_07.png?1466762376988", id:"zver_07"},
		{src:"images/zver_10.png?1466762376988", id:"zver_10"}
	]
};



// symbols:



(lib.bone = function() {
	this.initialize(img.bone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.cube = function() {
	this.initialize(img.cube);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.fish = function() {
	this.initialize(img.fish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.PitchStock_infinite_white_studio_background_03 = function() {
	this.initialize(img.PitchStock_infinite_white_studio_background_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,566);


(lib.zver_03 = function() {
	this.initialize(img.zver_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,35);


(lib.zver_07 = function() {
	this.initialize(img.zver_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,61);


(lib.zver_10 = function() {
	this.initialize(img.zver_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,273);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.8,-16.6,315.8,33.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#572B7C").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-14,257,28.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnOC+QgRgHgMgMQgLgMgGgSQgFgTAAgXIAAgqIA5AAIAAAvQAAATAIAKQAIAIAPABQAPgBAIgIQAIgLAAgYIAAgeQAAgagJgMQgJgLgVAAIgPAAIAAg2IASAAQASAAAJgIQAJgKAAgWIAAgWQAAgYgIgLQgIgIgPgBQgPAAgIAJQgJAJAAAUIAAAgIg3AAIAAgdQAAgXAFgSQAGgRALgMQALgNARgGQAQgGAXgBQAWABARAGQARAHALAMQALAMAGASQAGASAAAYIAAAJQAAAggKATQgLATgVAKQALAFAIAFQAIAIAFAKQAKAUAAAfIAAAdQAAAXgGATQgGASgLAMQgLAMgRAHQgRAGgWABQgXgBgQgGgAHGDAIAAidIgVAAQgVAAgJALQgKALAAAbIAAA8QAAAfgFARIg+AAQAHgPAAggIAAg7QAAggAJgTQAEgLAIgHQAIgJALgEQgUgIgKgTQgJgTAAgeIAAgfQAAgWAFgRQAFgQALgLQALgLARgGQARgFAXAAIBbAAIAAF/gAGRh+QgHAJAAAUIAAAmQAAAWAKALQAIAJASAAIAYAAIAAh3IgdAAQgQAAgIAKgACCDAIAAl/IBZAAQAXAAARAGQARAGALAMQALAMAGATQAGARAAAXIAAAyQAAAXgGASQgGAPgLANQgLAMgRAGQgRAGgXAAIgcAAIAACRgAC/gGIAcAAQAPABAHgJQAIgIAAgUIAAg6QAAgUgIgIQgHgIgPAAIgcAAgAhGDAIAAl/ICjAAIAAA3IhmAAIAABsIBRAAIAAA0IhRAAIAABxIBmAAIAAA3gAklDAIAAl/IBcAAQAXAAARAFQARAGALALQALALAFAQQAFARAAAWIAAAOQAAAfgJASQgKATgUAKQAMAEAJAHQAIAHAGAKQAKAUAAAhIAAAeQAAAXgGARQgFARgMAMQgLALgSAGQgRAGgXAAgAjoCJIAiAAQAQAAAIgJQAIgIAAgVIAAgiQAAgagJgLQgJgJgVAAIgbAAgAjogjIAXAAQASAAAJgIQAKgKAAgWIAAgWQAAgUgIgJQgHgKgQAAIgdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-19.7,103,39.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#572B7C").s().p("AhEC+QgRgHgMgMQgMgMgGgSQgGgTAAgXIAAjFQAAgYAGgSQAGgSAMgMQAMgMARgHQARgGAWgBQAWABAPAGQASAHALAMQAMAMAGASQAGASAAAYIAADFQAAAXgGATQgGASgMAMQgLAMgSAHQgPAGgWABQgWgBgRgGgAg0iEQgIAJAAAUIAADPQAAATAIAKQAIAIAPABQAPgBAIgIQAGgKAAgTIAAjPQAAgUgGgJQgIgJgPAAQgPAAgIAJgAoBC+QgRgHgMgMQgMgMgGgSQgGgTAAgXIAAjFQAAgYAGgSQAGgSAMgMQAMgMARgHQARgGAWgBQAWABARAGQASAHALAMQAMAMAGASQAGASAAAYIAADFQAAAXgGATQgGASgMAMQgLAMgSAHQgRAGgWABQgWgBgRgGgAnxiEQgIAJAAAUIAADPQAAATAIAKQAIAIAPABQAPgBAIgIQAIgKAAgTIAAjPQAAgUgIgJQgIgJgPAAQgPAAgIAJgALmDAIAAkNIhMENIg+AAIAAl/IA2AAIAADyIAWhTIAyifIBCAAIAAF/gAH3DAIAAkSIgqESIg5AAIgtkPIAAEPIg1AAIAAl/IBUAAIAtEPIApkPIBUAAIAAF/gABkDAIAAl/IBZAAQAWAAARAGQARAGAMAMQALAMAGATQAFARAAAXIAAAyQAAAXgFASQgGAPgLANQgMAMgRAGQgRAGgWAAIgdAAIAACRgACggGIAdAAQAPABAHgJQAHgIAAgUIAAg6QAAgUgHgIQgHgIgPAAIgdAAgAjNDAIg7iaIgTAkIAAB2Ig8AAIAAl/IA8AAIAACnIBPinIA9AAIhUCsIBUDTgAqaDAIAAlIIhFAAIAAFIIg8AAIAAl/IC/AAIAAF/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-19.7,159.4,39.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#444444").ss(6,1,1).p("AJDAAQAADwiqCpQipCqjwAAQjvAAiqiqQipipAAjwQAAjvCpiqQCqipDvAAQDwAACpCpQCqCqAADvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#444444").ss(0.1,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzg");
	this.shape_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-60.9,121.9,121.9);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAMCKIiLBRIhUoWIGnFSIiOBSIBnCyIg5Ahg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-31.6,42.4,63.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cube();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0099").s().p("ABICaQgKgDgGgIQgIgKgCgbIgCgZQgCgdgDgOIgJgeIgGgQQgEgLgEgHIgOgPIgIgPQgHgLgEgFQgIgJgSgLIgUgMIgTgJQgKgGgDgKQgCgIAGgIQAHgHAIAAIABgBIAoARQARAJAKAHQAIAIAQATIAYAdQALANAFALIAHAWQADAIAIAOQAEAJABAPIACAZQACAMADAFIAHAJQADAHAAAKIgBASIABATQgBALgGAGQgEAEgIAAIgFAAg");
	this.shape.setTransform(9.7,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,31);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bone();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,158);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fish();
	this.instance.setTransform(-79,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bone();
	this.instance.setTransform(-79,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zver_03();
	this.instance.setTransform(0,0,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.1,29);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zver_07();
	this.instance.setTransform(0,0,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.5,50.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zver_10();
	this.instance.setTransform(0,0,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,226);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,y:-17.4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:-15},10,cjs.Ease.get(1)).wait(20));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.setTransform(1,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:1.13,scaleY:1.13,y:23.6},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:20.8},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.8,-31.6,315.8,66.4);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,0,1,1,0,0,0,79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(0,0,1,1,0,0,0,79,79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 28
	this.instance = new lib.Символ28();
	this.instance.setTransform(339.1,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1.12,scaleY:1.12},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(1));

	// Символ 27
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(195.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.8,11.7,274.8,39.4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(33));

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(0,0,0.131,0.131,4.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1.06,scaleY:1.06,rotation:0},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},7,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:0.94},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05},5,cjs.Ease.get(1)).to({scaleX:0.23,scaleY:0.23,rotation:-7.7,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(18));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,253.2,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.09,scaleY:1.09},7,cjs.Ease.get(1)).to({regX:253.3,regY:31.5,scaleX:0.19,scaleY:0.19,rotation:-15,x:0,y:0,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(32).to({_off:false},0).to({regX:253.2,regY:31.4,scaleX:1.06,scaleY:1.06,rotation:0,x:0.1,y:0.1,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(-1)).to({scaleX:0.95,scaleY:0.95},3,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-19.7,274.8,39.4);


(lib.Символ15копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Символ13копия7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.parent.cube_2.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15копия();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(31.5,895.3,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},64).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:895.3},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.cube_1.gotoAndPlay(0);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:637},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.cube_1.gotoAndPlay(0);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:484.5},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.cube_5.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(20.5,22.5,0.651,0.652,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:578.5},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,45);


(lib.Символ13копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.cube_4.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1071.7},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ13копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.cube_3.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(31.5,34.5,0.651,0.651,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-415.5},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,12.1,41,44.9);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.parent.cube_2.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15копия();
	this.instance.setTransform(31.5,34.5,1,1,0,0,0,31.5,34.5);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(31.5,603.7,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},64).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:603.7},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,69);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(12.7,2,1,1.027,0,-13.1,0);
	this.instance.filters = [new cjs.BlurFilter(14, 14, 1)];
	this.instance.cache(-2,-2,23,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AB6D1Qg8gHghhhQgfhhiUhXQgngYgdgJIgdAAQABhKBagfQCNgwBGgPQBHgPA9BrQA9BqAAB4QAAB6ggAdQgaAWgrAAIgZgCg");
	this.shape.setTransform(22.7,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-5,52.9,55.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(58,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.449},10).to({alpha:1},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,121.9,121.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.toung = new lib.Символ10();
	this.toung.setTransform(174.7,244.8,0.881,0.881,0,0,0,23.8,25.4);

	this.timeline.addTween(cjs.Tween.get(this.toung).to({scaleX:0.99,scaleY:0.99,x:177.3,y:247.6},19).to({scaleX:0.88,scaleY:0.88,x:174.7,y:244.8},20).wait(1));

	// zver_10.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(147.5,186,1,1,0,0,0,98.5,113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// zver_07.png
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(146.6,217.4,1,1,0,0,0,61.2,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// zver_03.png
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(146.3,157.1,1,1,0,0,0,55.1,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.28,y:157},4).to({scaleY:1,y:157.1},2).wait(30).to({scaleY:0.28,y:157},1).to({scaleY:1,y:157.1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49,73,197,226);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ24();
	this.instance.setTransform(-375.2,-60);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(1).to({x:-375.9,y:-102.7},0).wait(1).to({x:-376.5,y:-134.9},0).wait(1).to({x:-376.9,y:-158.7},0).wait(1).to({x:-377.2,y:-176.6},0).wait(1).to({x:-377.4,y:-190.5},0).wait(1).to({x:-377.6,y:-201.7},0).wait(1).to({x:-377.8,y:-211.3},0).wait(1).to({x:-377.9,y:-219.4},0).wait(1).to({x:-378,y:-226},0).wait(1).to({x:-378.1,y:-231.2},0).wait(1).to({x:-378.2,y:-235.2},0).wait(1).to({y:-238.3},0).wait(1).to({x:-378.3,y:-240.7},0).wait(1).to({y:-242.6},0).wait(1).to({y:-244.2},0).wait(1).to({y:-245.5},0).wait(1).to({x:-378.4,y:-246.7},0).wait(1).to({y:-247.8},0).wait(1).to({y:-248.8},0).to({scaleX:0.81,scaleY:0.81,x:-384,y:-256},8).to({scaleX:0.9,scaleY:0.9,x:-296.7,y:-223.5},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-198.4,y:-187.2},9,cjs.Ease.get(1)).wait(5).to({scaleX:1.33,scaleY:1.33,alpha:0},7).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(-14.4,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-11.5,y:-102.7},0).wait(1).to({x:-9.3,y:-134.9},0).wait(1).to({x:-7.7,y:-158.7},0).wait(1).to({x:-6.5,y:-176.6},0).wait(1).to({x:-5.6,y:-190.5},0).wait(1).to({x:-4.8,y:-201.7},0).wait(1).to({x:-4.1,y:-211.3},0).wait(1).to({x:-3.6,y:-219.4},0).wait(1).to({x:-3.1,y:-226},0).wait(1).to({x:-2.8,y:-231.2},0).wait(1).to({x:-2.5,y:-235.2},0).wait(1).to({x:-2.3,y:-238.3},0).wait(1).to({x:-2.2,y:-240.7},0).wait(1).to({x:-2,y:-242.6},0).wait(1).to({x:-1.9,y:-244.2},0).wait(1).to({x:-1.8,y:-245.5},0).wait(1).to({x:-1.7,y:-246.7},0).wait(1).to({y:-247.8},0).wait(1).to({x:-1.6,y:-248.8},0).to({scaleX:0.81,scaleY:0.81,x:-5.6,y:-258.4},7).to({scaleX:0.91,scaleY:0.91,x:-102.4,y:-222.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-199.2,y:-187.2},9,cjs.Ease.get(1)).wait(5).to({scaleX:1.28,scaleY:1.28,alpha:0},7).to({_off:true},1).wait(56));

	// Слой 3
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(-406.4,-282.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({x:-316,y:-247.7},8,cjs.Ease.get(-1)).to({x:-214.4,y:-208.8},9,cjs.Ease.get(1)).wait(5).to({alpha:0},7).wait(1));

	// Слой 2
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(-19.2,-273.8);
	this.instance_3.alpha = 0.32;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({x:-116.8,y:-239.8},8,cjs.Ease.get(-1)).to({x:-214.4,y:-205.8},9,cjs.Ease.get(1)).wait(5).to({alpha:0},7).to({_off:true},1).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-91.6,42.4,63.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.8},5,cjs.Ease.get(-1)).to({rotation:-15},6,cjs.Ease.get(1)).to({rotation:-8},6,cjs.Ease.get(-1)).to({rotation:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:6.8},5,cjs.Ease.get(-1)).to({rotation:15},6,cjs.Ease.get(1)).to({rotation:6.8},7,cjs.Ease.get(-1)).to({rotation:0},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-79,158,158);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.zver = new lib.Символ1();
	this.zver.setTransform(70,63.5,1,1,0,0,0,119,136.5);

	this.timeline.addTween(cjs.Tween.get(this.zver).to({scaleX:0.98,scaleY:1.02,y:43.5},19,cjs.Ease.get(-1)).to({regY:136.6,scaleX:1,scaleY:0.97,y:68.6},30,cjs.Ease.get(1)).to({regY:136.5,scaleX:0.98,scaleY:1.02,y:43.5},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:63.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,226);


// stage content:



(lib.zver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.zver.zver.toung.visible = false;
		
		stage.canvas.onmouseover = MouseOver;
		stage.canvas.onmouseout = MouseOut;
		
		function MouseOver(){
			_this.zver.zver.toung.visible = true;
			_this.example.visible = false;
			_this.circle_1.gotoAndPlay(1);
			_this.circle_2.gotoAndPlay(1);
			_this.text.gotoAndPlay(1);
		}
		
		function MouseOut(){
			_this.zver.zver.toung.visible = false;
			_this.example.visible = true;
			_this.circle_1.gotoAndPlay(0);
			_this.circle_2.gotoAndPlay(0);
			_this.text.gotoAndPlay(34);
		}
		
		this.fish.on("pressmove", function(evt) {
		    _this.fish.x = evt.stageX;
		    _this.fish.y = evt.stageY;
		});
		
		this.fish.on("pressup", function(evt) { 
			_this.fish.x = 100;
		    _this.fish.y = 163; 
		});
		
		this.bone.on("pressmove", function(evt) {
		    _this.bone.x = evt.stageX;
		    _this.bone.y = evt.stageY;
		});
		
		this.bone.on("pressup", function(evt) { 
			_this.bone.x = 486;
		    _this.bone.y = 171; 
		});
		
		stage.canvas.addEventListener("click", ClickToGoToWebPage);
		
		function ClickToGoToWebPage() {
			window.open("http://feedthebeast.ru", "_blank");
			_this.text.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new lib.Символ17();
	this.text.setTransform(300,46.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 2
	this.example = new lib.Символ23();
	this.example.setTransform(506.3,445.2);

	this.timeline.addTween(cjs.Tween.get(this.example).wait(1));

	// Слой 1
	this.bone = new lib.Символ22();
	this.bone.setTransform(486,171);

	this.fish = new lib.Символ20();
	this.fish.setTransform(100,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fish},{t:this.bone}]}).wait(1));

	// eda
	this.circle_2 = new lib.Символ6();
	this.circle_2.setTransform(483.1,166.1,1,1,0,0,0,58,58);

	this.circle_1 = new lib.Символ6();
	this.circle_1.setTransform(102.1,166.1,1,1,0,0,0,58,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circle_1},{t:this.circle_2}]}).wait(1));

	// zver
	this.zver = new lib.Символ12();
	this.zver.setTransform(290.9,203.5,0.902,0.902,0,0,0,98.5,113);

	this.timeline.addTween(cjs.Tween.get(this.zver).wait(1));

	// background
	this.cube_3 = new lib.Символ13копия2();
	this.cube_3.setTransform(331.9,-187,0.479,0.479,180,0,0,31.5,34.6);
	this.cube_3.alpha = 0.379;

	this.cube_5 = new lib.Символ13копия6();
	this.cube_5.setTransform(483.7,-228.3,1,1,0,0,0,31.5,34.5);
	this.cube_5.alpha = 0.379;

	this.cube_3_1 = new lib.Символ13копия2();
	this.cube_3_1.setTransform(211.6,-237.7,0.728,0.728,180,0,0,31.5,34.5);
	this.cube_3_1.alpha = 0.379;

	this.cube_1 = new lib.Символ13копия7();
	this.cube_1.setTransform(83.1,-217.4,0.638,0.638,0,0,0,31.5,34.5);
	this.cube_1.alpha = 0.379;

	this.cube_5_1 = new lib.Символ13копия4();
	this.cube_5_1.setTransform(559,-103.3,1,1,0,0,0,31.5,34.5);

	this.cube_4 = new lib.Символ13копия3();
	this.cube_4.setTransform(158.1,-115.3,1,1,0,0,0,20.5,22.5);

	this.cube_3_2 = new lib.Символ13копия2();
	this.cube_3_2.setTransform(295.2,-111.1,1,1,180,0,0,31.5,34.5);

	this.cube_2 = new lib.Символ13копия();
	this.cube_2.setTransform(431.7,-115.3,1,1,0,180,0,31.5,34.5);

	this.cube_1_1 = new lib.Символ13();
	this.cube_1_1.setTransform(31.5,-103.3,1,1,0,0,0,31.5,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cube_1_1},{t:this.cube_2},{t:this.cube_3_2},{t:this.cube_4},{t:this.cube_5_1},{t:this.cube_1},{t:this.cube_3_1},{t:this.cube_5},{t:this.cube_3}]}).wait(1));

	// fon
	this.instance = new lib.PitchStock_infinite_white_studio_background_03();
	this.instance.setTransform(-25,-68.8,0.811,0.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,-112.9,648.5,679.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1464014744958", id:"back"},
		{src:"images/fire.png?1464014744958", id:"fire"},
		{src:"images/gun.png?1464014744958", id:"gun"},
		{src:"images/man.png?1464014744958", id:"man"},
		{src:"images/patron.png?1464014744958", id:"patron"},
		{src:"images/pricel.png?1464014744958", id:"pricel"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,761,343);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,292);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,278);


(lib.patron = function() {
	this.initialize(img.patron);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,92);


(lib.pricel = function() {
	this.initialize(img.pricel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,477,435);


(lib.Символ18копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAGBZIgugBIgvgEIAAisIAvAAIAAA+QAMgCAOAAIAaAAIAHAAQAOgBATAFQAOAEAHAHQAIAIAEAIQADAKAAALIAAALQAAALgDAKQgEAKgJAHQgIAHgOAFQgPAEgVAAgAgoAOIAAAfIAbACIATAAIAYgBQAIgBAEgCQADgDAAgEIABgHIgBgHQAAgDgEgCQgDgDgKgCIgXgBIgWAAg");
	this.shape.setTransform(99.7,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAtBXIAAhBIhZAAIAABBIgvAAIAAisIAvAAIAABDIBZAAIAAhDIAvAAIAACsg");
	this.shape_1.setTransform(77.9,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgDBcQgdAAgSgHQgTgHgLgLQgFgGgFgHQgDgGgCgIQgFgQAAgSIAAgLQAAgSAFgPQAEgQALgLQALgMATgHQASgHAdAAIAHAAQAOAAAMACQAMACAJADQAJAEAIAEQAHAFAGAGQALALAEAQQAFAPAAASIAAALQAAASgFAQQgBAIgFAGQgEAHgFAGQgGAGgHAEQgIAFgJADQgJAEgMABQgMACgOAAgAgegtQgLAFgFAGQgGAIAAAJIgBARIABATQAAAJAGAHQAFAHALAEQALAEATAAQAUAAALgEQALgEAFgHQAFgHABgJIABgTIgBgRQgBgJgFgIQgFgGgLgFQgSgEgNAAQgWACgIACg");
	this.shape_2.setTransform(55.2,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhNBXIAAisICbAAIAAApIhsAAIAACDg");
	this.shape_3.setTransform(35.1,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgDBcQgcAAgTgHQgTgHgLgLQgFgGgEgHQgFgGgCgIQgEgQAAgSIAAgLQAAgSAEgPQAFgQALgLQALgMATgHQATgHAcAAIAHAAQAPAAALACQAMACAJADQAJAEAIAEQAHAFAGAGQALALAFAQQAEAPAAASIAAALQAAASgEAQQgDAIgDAGQgEAHgGAGQgGAGgHAEQgIAFgJADQgJAEgMABQgLACgPAAgAgegtQgLAFgFAGQgFAIgBAJIgBARIABATQABAJAFAHQAFAHALAEQALAEATAAQAUAAALgEQALgEAFgHQAFgHACgJIAAgTIAAgRQgCgJgFgIQgFgGgLgFQgSgEgNAAQgXACgHACg");
	this.shape_4.setTransform(13.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.9,30);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBZIgugBIgvgEIAAisIAvAAIAAA+QAMgCAOAAIAaAAIAHAAQAOgBATAFQAOAEAHAHQAIAIAEAIQADAKAAALIAAALQAAALgDAKQgEAKgJAHQgIAHgOAFQgPAEgVAAgAgoAOIAAAfIAbACIATAAIAYgBQAIgBAEgCQADgDAAgEIABgHIgBgHQAAgDgEgCQgDgDgKgCIgXgBIgWAAg");
	this.shape.setTransform(99.7,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBXIAAhBIhZAAIAABBIgvAAIAAisIAvAAIAABDIBZAAIAAhDIAvAAIAACsg");
	this.shape_1.setTransform(77.9,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDBcQgdAAgSgHQgTgHgLgLQgFgGgFgHQgDgGgCgIQgFgQAAgSIAAgLQAAgSAFgPQAEgQALgLQALgMATgHQASgHAdAAIAHAAQAOAAAMACQAMACAJADQAJAEAIAEQAHAFAGAGQALALAEAQQAFAPAAASIAAALQAAASgFAQQgBAIgFAGQgEAHgFAGQgGAGgHAEQgIAFgJADQgJAEgMABQgMACgOAAgAgegtQgLAFgFAGQgGAIAAAJIgBARIABATQAAAJAGAHQAFAHALAEQALAEATAAQAUAAALgEQALgEAFgHQAFgHABgJIABgTIgBgRQgBgJgFgIQgFgGgLgFQgSgEgNAAQgWACgIACg");
	this.shape_2.setTransform(55.2,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNBXIAAisICbAAIAAApIhsAAIAACDg");
	this.shape_3.setTransform(35.1,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBcQgcAAgTgHQgTgHgLgLQgFgGgEgHQgFgGgCgIQgEgQAAgSIAAgLQAAgSAEgPQAFgQALgLQALgMATgHQATgHAcAAIAHAAQAPAAALACQAMACAJADQAJAEAIAEQAHAFAGAGQALALAFAQQAEAPAAASIAAALQAAASgEAQQgDAIgDAGQgEAHgGAGQgGAGgHAEQgIAFgJADQgJAEgMABQgLACgPAAgAgegtQgLAFgFAGQgFAIgBAJIgBARIABATQABAJAFAHQAFAHALAEQALAEATAAQAUAAALgEQALgEAFgHQAFgHACgJIAAgTIAAgRQgCgJgFgIQgFgGgLgFQgSgEgNAAQgXACgHACg");
	this.shape_4.setTransform(13.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.9,30);


(lib.Символ17копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHCJIAAivIiNCvIhKAAIAAkRIBKAAIAACvICNivIBKAAIAAERg");
	this.shape.setTransform(160.6,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABfCJIAAiiIhNBpIgjAAIhNhpIAACiIhKAAIAAkRIBKAAIBeCLIBfiLIBKAAIAAERg");
	this.shape_1.setTransform(123.5,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABHCJIAAivIiNCvIhKAAIAAkRIBKAAIAACvICNivIBKAAIAAERg");
	this.shape_2.setTransform(86.3,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABHCJIAAhnIiNAAIAABnIhKAAIAAkRIBKAAIAABrICNAAIAAhrIBKAAIAAERg");
	this.shape_3.setTransform(51.6,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANCQQgpABgdgLQgcgLgRgSQgIgJgGgKQgGgLgDgNQgIgYABgcIAAgTQgBgcAIgZQAHgYAQgSQARgSAcgLQAdgLApAAIAPAAQAcABAaADQAaAEAaAGIAABCIgdgHIgdgEIgbgCIgWgCQgfABgRAFQgSAHgIAKQgHAKgCAPIgBAfIABAgQACAPAHALQAIAKASAGQARAGAfAAIAWgBIAbgCIAdgGIAdgGIAABCQgaAGgaAEQgaADgcAAg");
	this.shape_4.setTransform(19.2,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.3,47.2);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABHCJIAAivIiNCvIhKAAIAAkRIBKAAIAACvICNivIBKAAIAAERg");
	this.shape.setTransform(160.6,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABfCJIAAiiIhNBpIgjAAIhNhpIAACiIhKAAIAAkRIBKAAIBeCLIBfiLIBKAAIAAERg");
	this.shape_1.setTransform(123.5,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABHCJIAAivIiNCvIhKAAIAAkRIBKAAIAACvICNivIBKAAIAAERg");
	this.shape_2.setTransform(86.3,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABHCJIAAhnIiNAAIAABnIhKAAIAAkRIBKAAIAABrICNAAIAAhrIBKAAIAAERg");
	this.shape_3.setTransform(51.6,20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AANCQQgpABgdgLQgcgLgRgSQgIgJgGgKQgGgLgDgNQgIgYABgcIAAgTQgBgcAIgZQAHgYAQgSQARgSAcgLQAdgLApAAIAPAAQAcABAaADQAaAEAaAGIAABCIgdgHIgdgEIgbgCIgWgCQgfABgRAFQgSAHgIAKQgHAKgCAPIgBAfIABAgQACAPAHALQAIAKASAGQARAGAfAAIAWgBIAbgCIAdgGIAdgGIAABCQgaAGgaAEQgaADgcAAg");
	this.shape_4.setTransform(19.2,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.3,47.2);


(lib.Символ16копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABIBrIgTgqIhqAAIgSAqIg0AAIAAgNIBgjIIA3AAIBgDIIAAANgAAgARIgghHIgfBHIA/AAg");
	this.shape.setTransform(165.5,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA1BrIhBhQIgnAAIAABQIg6AAIAAjVIA6AAIAABTIAlAAIBDhTIA5AAIAAANIhPBdIBPBeIAAANg");
	this.shape_1.setTransform(140.5,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhqBsIgNgDIAAgxIAJABIAIAAQANAAAEgGQAFgGAAgMIAHiNIDBAAIAADVIg6AAIAAihIhRAAIgFBgQgBARgDANQgEAMgIAJQgIAJgMAEQgNAFgTAAg");
	this.shape_2.setTransform(112.9,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhlBrIAAjVIDLAAIAAA0IiRAAIAAAfIBxAAIAAAyIhxAAIAAAcICRAAIAAA0g");
	this.shape_3.setTransform(88.6,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhrBuIAAjUIA5gFIA6gCIAJAAIAYACQAMABAIADQASAHALAJQAKALAEAOQAEAOAAAQIAAANQAAAQgEALQgEAPgJAKQgKAKgQAHQgIADgLABIgXABIgJAAIgfAAQgRAAgQgDIAAA6gAgRg5IghACIAAA4IAdADIAaABQARAAAJgDQAKgCAEgDQAEgEABgGIABgNIgBgMQgBgHgEgDQgEgFgIgCQgJgCgQAAg");
	this.shape_4.setTransform(63.6,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgcBrIAAihIhTAAIAAg0IDfAAIAAA0IhUAAIAAChg");
	this.shape_5.setTransform(38.6,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AALBxQghAAgVgIQgXgJgNgOQgHgHgFgIQgEgJgDgJQgFgTAAgWIAAgPQAAgWAFgTQAFgTAOgOQANgPAXgIQAVgIAhAAIALAAQAWAAAVACQAUADATAFIAAA1IgWgGIgWgEIgVgCIgSAAQgYAAgNAEQgOAFgGAIQgGAJgBALIgCAYIACAZQABALAGAJQAGAIAOAFQANAEAYAAIASAAIAVgCIAWgEIAWgGIAAA1QgTAFgUADQgVACgWAAg");
	this.shape_6.setTransform(14.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.2,37);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIBrIgTgqIhqAAIgSAqIg0AAIAAgNIBgjIIA3AAIBgDIIAAANgAAgARIgghHIgfBHIA/AAg");
	this.shape.setTransform(165.5,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BrIhBhQIgnAAIAABQIg6AAIAAjVIA6AAIAABTIAlAAIBDhTIA5AAIAAANIhPBdIBPBeIAAANg");
	this.shape_1.setTransform(140.5,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqBsIgNgDIAAgxIAJABIAIAAQANAAAEgGQAFgGAAgMIAHiNIDBAAIAADVIg6AAIAAihIhRAAIgFBgQgBARgDANQgEAMgIAJQgIAJgMAEQgNAFgTAAg");
	this.shape_2.setTransform(112.9,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhlBrIAAjVIDLAAIAAA0IiRAAIAAAfIBxAAIAAAyIhxAAIAAAcICRAAIAAA0g");
	this.shape_3.setTransform(88.6,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhrBuIAAjUIA5gFIA6gCIAJAAIAYACQAMABAIADQASAHALAJQAKALAEAOQAEAOAAAQIAAANQAAAQgEALQgEAPgJAKQgKAKgQAHQgIADgLABIgXABIgJAAIgfAAQgRAAgQgDIAAA6gAgRg5IghACIAAA4IAdADIAaABQARAAAJgDQAKgCAEgDQAEgEABgGIABgNIgBgMQgBgHgEgDQgEgFgIgCQgJgCgQAAg");
	this.shape_4.setTransform(63.6,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBrIAAihIhTAAIAAg0IDfAAIAAA0IhUAAIAAChg");
	this.shape_5.setTransform(38.6,15.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AALBxQghAAgVgIQgXgJgNgOQgHgHgFgIQgEgJgDgJQgFgTAAgWIAAgPQAAgWAFgTQAFgTAOgOQANgPAXgIQAVgIAhAAIALAAQAWAAAVACQAUADATAFIAAA1IgWgGIgWgEIgVgCIgSAAQgYAAgNAEQgOAFgGAIQgGAJgBALIgCAYIACAZQABALAGAJQAGAIAOAFQANAEAYAAIASAAIAVgCIAWgEIAWgGIAAA1QgTAFgUADQgVACgWAAg");
	this.shape_6.setTransform(14.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.2,37);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.patron();
	this.instance.setTransform(0,0,0.56,0.56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,51.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pricel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,477,435);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396,292);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,761,343);


(lib.Символ4копия3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FF0000"],[0,1],0,0,0,0,0,451.1).s().p("Eg+fAfKQhAAAAAhAMAAAg8TQAAhABAAAMB8/AAAQBAAAAABAMAAAA8TQAABAhAAAg");
	this.shape.setTransform(406.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,813,399);


(lib.Символ4копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FF0000"],[0,1],0,0,0,0,0,451.1).s().p("Eg+fAfKQhAAAAAhAMAAAg8TQAAhABAAAMB8/AAAQBAAAAABAMAAAA8TQAABAhAAAg");
	this.shape.setTransform(406.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,813,399);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FF0000"],[0,1],0,0,0,0,0,451.1).s().p("Eg+fAfKQhAAAAAhAMAAAg8TQAAhABAAAMB8/AAAQBAAAAABAMAAAA8TQAABAhAAAg");
	this.shape.setTransform(406.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,813,399);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FF0000"],[0,1],0,0,0,0,0,451.1).s().p("Eg+fAfKQhAAAAAhAMAAAg8TQAAhABAAAMB8/AAAQBAAAAABAMAAAA8TQAABAhAAAg");
	this.shape.setTransform(406.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,813,399);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire();
	this.instance.setTransform(0,0,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,170);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgCxQgjgggGg0IA2gFQAGAnAWAVQAVATAgAAQAiAAAagcQAagcAAguQAAgsgYgXQgZgZgmgBQgZAAgUALQgUAMgMAQIgvgGIAojVIDNAAIAAAxIikAAIgXBwQAmgaAnAAQA3AAAlAmQAmAkAAA7QAAA5ghAqQgoAyhDAAQg6AAgkggg");
	this.shape.setTransform(89.7,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBAIgfgkIgdAkIgoAAIAAgKIAvg2Igvg1IAAgKIAoAAIAdAkIAfgkIAnAAIAAAKIguA1IAuA2IAAAKg");
	this.shape_1.setTransform(64,27.1);

	this.instance = new lib.Символ15();
	this.instance.setTransform(46.8,25.8,1,1,0,0,0,4.2,25.8);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(36.2,25.8,1,1,0,0,0,4.2,25.8);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(25.5,25.8,1,1,0,0,0,4.2,25.8);

	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(14.9,25.8,1,1,0,0,0,4.2,25.8);

	this.instance_4 = new lib.Символ15();
	this.instance_4.setTransform(4.2,25.8,1,1,0,0,0,4.2,25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.5,110.6,74.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("Eh19hL5MDr7AAAQBBAAAABAMAAACVzQAABAhBAAMjr7AAAQhBAAAAhAMAAAiVzQAAhABBAAg");
	this.shape.setTransform(263,231.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,4,0.698)").s().p("Eh19BL6QhBAAAAhAMAAAiVzQAAhABBAAMDr7AAAQBBAAAABAMAAACVzQAABAhBAAgA3azcQnGHFAAKBIAAAYIAAAXQAAKAHGHFQHFHFKCABQJ/gBHGnFQHFnFAAqAIAAgXIAAgYQAAqBnFnFQnGnGp/AAQqCAAnFHGg");
	this.shape_1.setTransform(263,231.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(238.5,217.5,1,1,0,0,0,238.5,217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AgWyXIAADhAgWpuIAACmAgWt4IAADMAtqgbIDUAAAy2gbIEOAAAJjgbIDIAAAGGgbICfAAApYgbICSAAAgWFGIAAClAlqgbIEvAAAgWAIIAADrAgWNNIAAFLAgWIpIAADmAAUgbIEgAAAgWl1IAAEvANpgbIFOAA");
	this.shape_2.setTransform(225,225.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIOCQgLAAgKgJQgIgJgBgNQABgNAIgJQAKgJALAAIABAAQAMABAIAIQAKAJgBANQABANgKAJQgIAJgMAAIgBAAgAAHJeQgLAAgJgJQgJgJAAgNQAAgNAJgJQAJgJALAAIACAAQAMAAAIAJQAJAJAAANQAAANgJAJQgIAIgMABIgCAAgANUAsQgIgIgBgMIAAgCQAAgNAJgJQAJgHANAAQANAAAJAHQAJAJAAANIAAACQgBAMgIAIQgJAJgNAAQgNAAgJgJgAJOAsQgIgIgBgMIAAgCQAAgNAJgJQAJgHANAAQANAAAJAHQAJAJAAANIAAACQgBAMgIAIQgJAJgNAAQgNAAgJgJgAptAsQgIgIgBgMIAAgCQAAgNAJgJQAJgHANAAQANAAAJAHQAJAJAAANIAAACQgBAMgIAIQgJAJgNAAQgNAAgJgJgAt/AsQgIgIgBgMIAAgCQAAgNAJgJQAJgHANAAQANAAAJAHQAJAJAAANIAAACQgBAMgIAIQgJAJgNAAQgNAAgJgJgAAJo5QgKAAgIgJQgJgJAAgNQAAgNAJgJQAIgIAKgBIABAAQANAAAKAJQAIAJABANQgBANgIAJQgKAJgNAAIgBAAgAAJtDQgLAAgJgJQgJgJAAgNQAAgNAJgJQAJgJALAAIAAAAQANAAAJAJQAJAJAAANQAAANgJAJQgJAJgNAAg");
	this.shape_3.setTransform(221.8,220);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Слой 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(51,0,153,0)","#330099"],[0.192,0.992],0,0,0,0,0,124.3).s().p("AtmNnQlplpAAn+QAAn8FplqQFplpH9AAQH+AAFpFpQFpFqAAH8QAAH+lpFpQlpFpn+AAQn9AAlplpg");
	this.shape_4.setTransform(222.5,222.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-255.5,1526.1,974.7);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(85,85,1,1,0,0,0,85,85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,170);


(lib.Символ1копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ4копия();
	this.instance.setTransform(368.6,122.1,0.521,0.521,0,0,0,406.4,199.5);

	this.instance_1 = new lib.Символ4копия2();
	this.instance_1.setTransform(368.6,122.1,0.521,0.521,0,0,0,406.4,199.5);

	this.instance_2 = new lib.Символ4копия3();
	this.instance_2.setTransform(368.6,122.1,0.521,0.521,0,0,0,406.4,199.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},11).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(24));

	// Слой 2
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(356.1,100.4,1,1,0,0,0,85,85);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:1},2).to({_off:true},1).wait(28));

	// Слой 4
	this.instance_4 = new lib.man();
	this.instance_4.setTransform(353.7,95.2,0.05,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

	// Слой 1
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(380.5,171.5,1,1,0,0,0,380.5,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,761,343);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.setTransform(358.4,173.1,1,1,0,0,0,406.4,199.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(24));

	// Слой 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(338.5,105,1,1,0,0,0,85,85);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},2).to({_off:true},1).wait(28));

	// Слой 1
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(380.5,171.5,1,1,0,0,0,380.5,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({y:181.5},0).wait(1).to({y:161.5},0).wait(1).to({x:390.5,y:171.5},0).wait(1).to({x:370.5},0).wait(1).to({x:380.5},0).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,761,343);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(0.1,0,1,1,0,0,0,56,15);

	this.instance_1 = new lib.Символ18копия();
	this.instance_1.setTransform(0.1,0,1,1,0,0,0,56,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-15,111.9,30);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(0,20.5,1,1,0,0,0,90.5,18.4);

	this.instance_1 = new lib.Символ16копия();
	this.instance_1.setTransform(0,20.5,1,1,0,0,0,90.5,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

	// СНИМИ
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(0.1,-15.4,1,1,0,0,0,90.7,23.6);

	this.instance_3 = new lib.Символ17копия();
	this.instance_3.setTransform(0.1,-15.4,1,1,0,0,0,90.7,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-39,181.3,78.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1копия();
	this.instance.setTransform(890.3,401.3,2.34,2.34,0,0,0,380.5,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:880.3},24).to({x:890.3},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1780.5,802.5);


(lib.Символ13 = function(mode,startPosition,loop) {
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

	// Слой 3
	this.instance = new lib.Анимация3();
	this.instance.setTransform(570.1,196.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:410.6,y:192.8},4).to({x:570.1,y:196.1},5).wait(1));

	// Слой 1
	this.instance_1 = new lib.Анимация1();
	this.instance_1.setTransform(90.7,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-131.6},4).to({x:90.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,626.1,211.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(380.5,171.5,1,1,0,0,0,380.5,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:356.5},12,cjs.Ease.get(-1)).to({x:330.5},13,cjs.Ease.get(1)).to({x:355.5},12,cjs.Ease.get(-1)).to({x:380.5},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,761,343);


(lib.Символ11 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ12();
	this.instance.setTransform(380.5,171.5,1,1,0,0,0,380.5,171.5);

	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(364.8,290.6,1,1,0,0,0,890.2,401.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,761,343);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(485.1,440.5,1,1,0,0,0,238.5,217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253.5,-32.5,1526.1,974.7);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_29 = function() {
		/* Пользовательский курсор мыши
		Заменяет курсор мыши по умолчанию на указанный экземпляр символа.
		*/
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		//Чтобы восстановить курсор мыши по умолчанию, раскомментируйте следующие строки:
		//this.removeEventListener("tick", fl_CustomMouseCursor.bind(this));
		//stage.removeChild(pricel);
		//stage.canvas.style.cursor = "default";
		this.stop();
	}
	this.frame_39 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(198,146,1,1,0,0,0,198,146);

	this.pricel = new lib.Символ10();
	this.pricel.setTransform(74,129.4,1,1,0,0,0,761.5,485.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.pricel}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:156},9).to({y:146},10).to({scaleX:1.65,scaleY:1.65,x:152.3,y:201},4,cjs.Ease.get(-1)).to({regY:146.1,scaleX:2.45,scaleY:2.45,x:95.1,y:269.8},5,cjs.Ease.get(1)).to({_off:true},1).wait(1).to({_off:false},0).to({scaleX:1.65,scaleY:1.65,x:152.3,y:201.1},5,cjs.Ease.get(-1)).to({regY:146,scaleX:1,scaleY:1,x:198,y:146},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396,292);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.rif.gotoAndPlay(20);
				_this.fon.gotoAndStop(1);
				_this.txt.gotoAndPlay(1);
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.rif.gotoAndPlay(31);
				_this.fon.gotoAndPlay(0);
				_this.txt.gotoAndPlay(5);
		    }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.instance = new lib.Символ14();
	this.instance.setTransform(36.5,255,0.564,0.564,0,0,0,4.2,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.txt = new lib.Символ13();
	this.txt.setTransform(140.2,69.6,1.265,1.265,0,0,0,90.7,37.7);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 2
	this.rif = new lib.Символ6();
	this.rif.setTransform(494.5,182,1,1,0,0,0,198,146);

	this.timeline.addTween(cjs.Tween.get(this.rif).wait(1));

	// Слой 1
	this.fon = new lib.Символ11();
	this.fon.setTransform(362.5,154,1,1,0,0,0,380.5,171.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302,135,835.3,345.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
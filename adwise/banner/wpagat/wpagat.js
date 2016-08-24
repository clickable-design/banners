(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 28,
	color: "#FFFFFF",
	manifest: [
		{src:"images/angle.png?1467981358037", id:"angle"},
		{src:"images/arm.png?1467981358037", id:"arm"},
		{src:"images/arrr2.png?1467981358037", id:"arrr2"},
		{src:"images/ass.png?1467981358037", id:"ass"},
		{src:"images/book.png?1467981358037", id:"book"},
		{src:"images/bra.png?1467981358037", id:"bra"},
		{src:"images/chupy.png?1467981358037", id:"chupy"},
		{src:"images/cursor.png?1467981358037", id:"cursor"},
		{src:"images/fono.jpg?1467981358037", id:"fono"},
		{src:"images/foot.png?1467981358037", id:"foot"},
		{src:"images/fot2.png?1467981358037", id:"fot2"},
		{src:"images/hand.png?1467981358037", id:"hand"},
		{src:"images/Hands_03.png?1467981358037", id:"Hands_03"},
		{src:"images/Hands_05.png?1467981358037", id:"Hands_05"},
		{src:"images/Hands_10.png?1467981358037", id:"Hands_10"},
		{src:"images/hed.png?1467981358037", id:"hed"},
		{src:"images/leg2.png?1467981358037", id:"leg2"},
		{src:"images/leg3.png?1467981358037", id:"leg3"},
		{src:"images/sandal.png?1467981358037", id:"sandal"},
		{src:"images/styl.png?1467981358037", id:"styl"},
		{src:"images/styl2.png?1467981358037", id:"styl2"},
		{src:"images/tent.png?1467981358037", id:"tent"}
	]
};



// symbols:



(lib.angle = function() {
	this.initialize(img.angle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,21);


(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,97);


(lib.arrr2 = function() {
	this.initialize(img.arrr2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.ass = function() {
	this.initialize(img.ass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,72);


(lib.book = function() {
	this.initialize(img.book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,83);


(lib.bra = function() {
	this.initialize(img.bra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,132);


(lib.chupy = function() {
	this.initialize(img.chupy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,39);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,90);


(lib.fono = function() {
	this.initialize(img.fono);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,400);


(lib.foot = function() {
	this.initialize(img.foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,73);


(lib.fot2 = function() {
	this.initialize(img.fot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,51);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,36);


(lib.Hands_03 = function() {
	this.initialize(img.Hands_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,95);


(lib.Hands_05 = function() {
	this.initialize(img.Hands_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,95);


(lib.Hands_10 = function() {
	this.initialize(img.Hands_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,93);


(lib.hed = function() {
	this.initialize(img.hed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,93);


(lib.leg2 = function() {
	this.initialize(img.leg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,46);


(lib.leg3 = function() {
	this.initialize(img.leg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,62);


(lib.sandal = function() {
	this.initialize(img.sandal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,64);


(lib.styl = function() {
	this.initialize(img.styl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,182);


(lib.styl2 = function() {
	this.initialize(img.styl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,108);


(lib.tent = function() {
	this.initialize(img.tent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,37);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cursor();
	this.instance.setTransform(-40,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-45,80,90);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrr2();
	this.instance.setTransform(-15.6,-19.7,0.712,0.712,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,-19.7,39.3,39.3);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A8TJpQhSAAihgyQhSgZhFgcQg+gggtgqQgmgkgigzQgdgqgdicQgZiCAAgjQAAgMgLh/QAAg9AegwQAgg0BehUQAlgtAegTQAxggB2gJIClgLQB+gJArAAQBMAADTAWQDSAVDcAAQAiAABEAJQBDAIA2AAIA9gEIA8gDQBAAABvgHQB0gJBqgMICMgWIBugJIBrgQQAcgBASACIBEgJQBCAGDNAeQDAAcAIAAQAyAAgDADQALgBC3gfIEagtQAkgFApgDICFgUIDygeQBMgIBRAAQBcAACmAoQCTAjBQAhQA/AaAnA5QATAcAeBGQAlBTAcE8QAABShkB7Qh0COiXAsIi8AeQkdATi5AAQhOAAlwgeQlvgeg+AAQh6AAkjAdQkhAdg4AAIlCAkQk2AkhCgEIhxARIlsAfQhvAJhhAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.9,-62.6,495.9,125.3);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.4,-32.9,430.9,65.9);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGtHoQhsgRkAghQkPgigqAAQgwAAhNAXQhNAXhEAAQgdAAhMAMQhNAMgWAAQgMAAhcgJIjAgZQlOg8hziTQg+hQAAiJQAAjlB6iAQBzh5DCAAQAGAAAlAFICTATQBXgGAJAKQALAMA+AAQAuAABJgTICPgpQDRg9CfAAQB7AAA/AEQAqAEAfgCICBAQIAkABQBggCDrAAQAUAABQgKQA+gHBwAIIAAgBQFPAxBfAqQAnARASAYQALAOARAgQBLB2AAA+QAAAeAKA0QAKA1AAAHQAAAjgYCLIgZCLQgJBPhhBFQh4BVi5AAQgjAAg3APQg5AOhDABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-54.4,306.1,109);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.6,-26.7,251.3,53.5);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAOgKALQgLAKgOAAQgNAAgLgKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7.1,7.1);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg6iAhcMAAAhC3MB1FAAAMAAABC3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.8,-214,749.6,428);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrr2();
	this.instance.setTransform(12.5,-23.3,0.751,0.751,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-23.3,38.1,38.1);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_05();
	this.instance.setTransform(25.4,-52.1,0.909,0.909,67.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.6,-52.1,109.2,104.2);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_10();
	this.instance.setTransform(25.3,-49,0.85,0.809,0,-19.7,160.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-49,101.4,98.1);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,126.8).s().p("AwENeIAA67MAgJAAAIAAa7g");
	this.shape.setTransform(0,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.9,-73.9,205.9,172.5);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_10();
	this.instance.setTransform(51.7,-16.6,0.816,0.816,117.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-52,103.3,104);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_10();
	this.instance.setTransform(-45.7,-32.1,0.816,0.864,0,-98.9,81.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-44.5,91.4,89.1);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AHGAAQAAC8iFCFQiFCFi8AAQi7AAiFiFQiFiFAAi8QAAi7CFiFQCFiFC7AAQC8AACFCFQCFCFAAC7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.4,-47.4,94.9,94.9);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrr2();
	this.instance.setTransform(11.3,23.3,0.71,0.71,-173.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-15.9,39.2,39.2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arrr2();
	this.instance.setTransform(-11.6,-26.2,0.71,0.71,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-26.2,44.5,44.5);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_03();
	this.instance.setTransform(-35.6,-26.7,0.699,0.699,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-38.3,71.2,76.7);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Hands_05();
	this.instance.setTransform(-20,-46.4,0.793,0.793,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-46.4,87.8,92.8);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hed();
	this.instance.setTransform(-45.5,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-46.5,91,93);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,7.1,0,0,7.1,276.1).s().p("AgFAOIAFAJQ5VJ/upjyIAA7UQOAgUJLh5IQlW/IVavNQS4h8gGMxIAAbVQvBiR5C0gg");
	this.shape.setTransform(0,-6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.9,-154,511.8,294.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.tent();
	this.instance.setTransform(-41.3,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-17.9,82,37);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fono();
	this.instance.setTransform(-323.7,-185,0.925,0.925);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323.7,-185,647.5,370);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sandal();
	this.instance.setTransform(-25,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-32,50,64);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.chupy();
	this.instance.setTransform(-21.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-19.5,43,39);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-32.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-18,65,36);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.angle();
	this.instance.setTransform(-7,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-10.5,14,21);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.book();
	this.instance.setTransform(-39.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-41.5,79,83);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.arm();
	this.instance.setTransform(-23,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-48.5,46,97);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.foot();
	this.instance.setTransform(-77.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-36.5,155,73);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg3();
	this.instance.setTransform(-69,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-31,138,62);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.leg2();
	this.instance.setTransform(-40.5,-23,1.133,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.5,-23,91.8,46);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fot2();
	this.instance.setTransform(-63,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-25,130,51);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bra();
	this.instance.setTransform(-55,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-66,110,132);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.styl();
	this.instance.setTransform(-69.3,-70.5,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-70.5,138.6,152);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ass();
	this.instance.setTransform(-48.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-36,97,72);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.styl2();
	this.instance.setTransform(-34.6,-45.1,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-45.1,69.3,90.2);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(32.3,11.1,1,1,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,x:-23.1,y:8.7},8,cjs.Ease.get(-1)).to({rotation:-22.2,x:-78.7,y:6.2},8,cjs.Ease.get(1)).to({rotation:-0.5,x:-29.3,y:8.3},8,cjs.Ease.get(-1)).to({rotation:26.5,x:32.3,y:11.1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-47,111.8,116.2);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 62
	this.instance = new lib.Символ62();
	this.instance.setTransform(121.3,-105.1,1,1,85.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({x:121.8,y:-113.8,alpha:1},9,cjs.Ease.get(-1)).to({x:121.3,y:-105.1},10,cjs.Ease.get(1)).to({x:121.8,y:-113.8},9,cjs.Ease.get(-1)).to({x:121.3,y:-105.1,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_1 = new lib.Символ62();
	this.instance_1.setTransform(-23.9,-128.4,1,1,82.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({x:-22.6,y:-142,alpha:1},9,cjs.Ease.get(-1)).to({x:-23.9,y:-128.4},10,cjs.Ease.get(1)).to({x:-22.6,y:-142},9,cjs.Ease.get(-1)).to({x:-23.9,y:-128.4,alpha:0},10,cjs.Ease.get(1)).wait(1));

	// Символ 62
	this.instance_2 = new lib.Символ62();
	this.instance_2.setTransform(24.1,-11.8,1,1,85.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({x:24.6,y:-20.5,alpha:1},9,cjs.Ease.get(-1)).to({x:24.1,y:-11.8},10,cjs.Ease.get(1)).to({x:24.6,y:-20.5},9,cjs.Ease.get(-1)).to({x:24.1,y:-11.8,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(36));

	// Символ 62
	this.instance_3 = new lib.Символ62();
	this.instance_3.setTransform(121.4,-0.1,1,1,175.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:130.1,y:0.4,alpha:1},9,cjs.Ease.get(-1)).to({x:121.4,y:-0.1},10,cjs.Ease.get(1)).to({x:130.1,y:0.4},9,cjs.Ease.get(-1)).to({x:121.4,y:-0.1,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(74));

	// Символ 62
	this.instance_4 = new lib.Символ62();
	this.instance_4.setTransform(-22,-10.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-35.3,y:-13.3,alpha:1},9,cjs.Ease.get(-1)).to({x:-22,y:-10.2},10,cjs.Ease.get(1)).to({x:-35.3,y:-13.3},9,cjs.Ease.get(-1)).to({x:-22,y:-10.2,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-29.9,184.2,51);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ59();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(0.98)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ60();
	this.instance_1.setTransform(-5.4,-2.4,1.066,1.066);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},14,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},15,cjs.Ease.get(0.98)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.6,-69.2,528.3,133.5);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 57
	this.instance = new lib.Символ57();
	this.instance.setTransform(0,0,1.069,1.069);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},14,cjs.Ease.get(-1)).to({scaleX:1.07,scaleY:1.07},15,cjs.Ease.get(1)).wait(1));

	// Символ 58
	this.instance_1 = new lib.Символ58();
	this.instance_1.setTransform(-0.8,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.14,scaleY:1.14},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.9,-50,306.1,109);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(529.5,-318.7,0.508,0.508,9.2);

	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(138.2,-317,0.508,0.508,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.4,-375.4,607.3,110);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.59,scaleY:0.59},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7.1,7.1);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ61();
	this.instance.setTransform(347.6,-159.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// Слой 5
	this.instance_1 = new lib.Символ51();
	this.instance_1.setTransform(409.6,-301.4);

	this.instance_2 = new lib.Символ51();
	this.instance_2.setTransform(384,-223);

	this.instance_3 = new lib.Символ51();
	this.instance_3.setTransform(533.4,-156.8);

	this.instance_4 = new lib.Символ51();
	this.instance_4.setTransform(278.7,-177.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(130));

	// Слой 4
	this.instance_5 = new lib.Символ37();
	this.instance_5.setTransform(409.7,-301.4,0.155,0.155);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(50).to({_off:false,scaleX:0.16,scaleY:0.16,alpha:1},0).to({scaleX:0.93,scaleY:0.93,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Слой 3
	this.instance_6 = new lib.Символ37();
	this.instance_6.setTransform(384.1,-222,0.155,0.155);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(49).to({_off:false,scaleX:0.16,scaleY:0.16,alpha:1},0).to({scaleX:0.93,scaleY:0.93,alpha:0},15,cjs.Ease.get(1)).to({_off:true},1).wait(25));

	// Слой 2
	this.instance_7 = new lib.Символ37();
	this.instance_7.setTransform(533.2,-156.8,0.155,0.155);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(50).to({_off:false,scaleX:0.16,scaleY:0.16,alpha:1},0).to({scaleX:0.93,scaleY:0.93,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(45));

	// Слой 1
	this.instance_8 = new lib.Символ37();
	this.instance_8.setTransform(279.1,-177.2,0.155,0.155);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:0.93,scaleY:0.93,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(50).to({_off:false,scaleX:0.16,scaleY:0.16,alpha:1},0).to({scaleX:0.93,scaleY:0.93,alpha:0},14,cjs.Ease.get(1)).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.7,-305,265.3,166.8);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ49();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.8,-214,749.6,428);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 46
	this.instance = new lib.Символ46();
	this.instance.setTransform(-94.5,-74.3,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-80.1},13,cjs.Ease.get(1)).to({y:-89.7},11,cjs.Ease.get(1)).to({y:-74.3},20,cjs.Ease.get(1)).wait(1));

	// Символ 46
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(154.7,-41.5,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-51.3},13,cjs.Ease.get(1)).to({y:-61.1},11,cjs.Ease.get(1)).to({y:-41.5},20,cjs.Ease.get(1)).wait(1));

	// Символ 45
	this.instance_2 = new lib.Символ45();
	this.instance_2.setTransform(100.2,6.2,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:90.4},9,cjs.Ease.get(1)).to({y:1.9},7,cjs.Ease.get(-1)).to({y:-13.4},8,cjs.Ease.get(1)).to({x:97.7,y:1.3},10,cjs.Ease.get(-1)).to({x:100.2,y:6.2},10,cjs.Ease.get(1)).wait(1));

	// Символ 44
	this.instance_3 = new lib.Символ44();
	this.instance_3.setTransform(-92.3,-15.9,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-82.6},9,cjs.Ease.get(1)).to({y:-20.1},7,cjs.Ease.get(-1)).to({y:-35.1},8,cjs.Ease.get(1)).to({x:-89.8,y:-20.7},10,cjs.Ease.get(-1)).to({x:-92.3,y:-15.9},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.2,-94.5,302.4,146.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(1.9,81);

	this.instance_1 = new lib.Символ41();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-2.4,-13.2,1,1,90.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-18.5},24).to({y:-13.2},25,cjs.Ease.get(1)).wait(1));

	// Символ 40
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(56.6,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0.5,y:6.9},12,cjs.Ease.get(-1)).to({rotation:1,x:56.5,y:2.1},12,cjs.Ease.get(1)).to({rotation:0.5,y:6.7},12,cjs.Ease.get(-1)).to({rotation:0,x:56.6,y:11.6},13,cjs.Ease.get(1)).wait(1));

	// Символ 39
	this.instance_2 = new lib.Символ39();
	this.instance_2.setTransform(-62.6,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0.5,x:-62.5,y:-14.3},12,cjs.Ease.get(-1)).to({rotation:1,x:-62.3,y:-22.3},12,cjs.Ease.get(1)).to({rotation:0.5,x:-62.4,y:-14.6},12,cjs.Ease.get(-1)).to({rotation:0,x:-62.6,y:-8.5},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.3,-53.1,216.6,116.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(-14,151.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],4.6,-93.4,0,4.6,-93.4,176.1).s().p("AmCKQIp5ssIAKsDIftAAIgxQtIxvMSg");
	this.shape.setTransform(-2.3,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 35
	this.instance = new lib.Символ35();
	this.instance.setTransform(117.5,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({x:128.3,y:12.2},3).to({x:117.5,y:10.7},10,cjs.Ease.get(1)).wait(1));

	// Символ 34
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(-121.1,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({x:-133.7,y:-25.5},3).to({x:-121.1,y:-23.6},10,cjs.Ease.get(1)).wait(1));

	// Символ 33
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(80.2,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:97.5,y:17.8},6,cjs.Ease.get(-1)).to({x:80.2,y:16.4},13,cjs.Ease.get(1)).wait(1));

	// Символ 32
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(-71.8,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-89.1,y:-10.7},6,cjs.Ease.get(-1)).to({x:-71.8,y:-8.3},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.3,-54.7,276,109.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(6.3,-66,0.972,0.972,-1);

	this.instance_1 = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,0,1,1.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.97,skewY:1.4,y:-1.9},23).to({scaleY:1.05,skewY:0,y:0},25).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-8.8,13.1,1.001,1,0,-11.6,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.83,scaleY:1.13,skewY:-15,x:-8.4,y:17.5},23).to({scaleX:1,scaleY:1,skewY:-13.5,x:-8.8,y:13.1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-37.9,101.2,79.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-45.1,69.3,90.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8,x:-0.6,y:0.7},4,cjs.Ease.get(-1)).to({rotation:-3.9,x:-1.3,y:1.6},5,cjs.Ease.get(1)).to({rotation:-1.8,x:-0.6,y:0.8},5,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-19.5,43,39);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(-27.1,-16.9);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(38.9,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-36.4,94.5,72.4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 16
	this.instance = new lib.Символ16();
	this.instance.setTransform(-12.8,35.8,1,1,0,0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,skewX:0.3,skewY:-0.3,x:-14.5,y:34.7},9,cjs.Ease.get(-1)).to({scaleX:0.94,scaleY:1,skewX:1,skewY:-2.3,x:-16.4,y:33.5},10,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1,skewX:0.5,skewY:-0.5,x:-14.5,y:34.7},10,cjs.Ease.get(-1)).to({scaleX:1,skewX:0,skewY:1.2,x:-12.8,y:35.8},10,cjs.Ease.get(1)).wait(1));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(41.9,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:3.5,x:40.9},9,cjs.Ease.get(-1)).to({rotation:7.7,x:39.7},10,cjs.Ease.get(1)).to({rotation:3.8,x:40.8},10,cjs.Ease.get(-1)).to({rotation:0,x:41.9},10,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(-58.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:1,y:0.2},9,cjs.Ease.get(-1)).to({scaleY:1,skewX:2.5,y:0.5},10,cjs.Ease.get(1)).to({scaleY:1,skewX:1.3,y:0.3},10,cjs.Ease.get(-1)).to({skewX:0,y:0},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.3,-54.5,162.8,109);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,x:2,y:0.2},7,cjs.Ease.get(-1)).to({rotation:4.2,x:4,y:0.3},7,cjs.Ease.get(1)).to({rotation:2.3,x:2.1,y:0.2},7,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-46.5,91,93);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.6,x:0.3,y:-0.2},8,cjs.Ease.get(-1)).to({rotation:-9.5,x:0.6,y:-0.5},8,cjs.Ease.get(1)).to({rotation:-4.6,x:0.3,y:-0.2},9,cjs.Ease.get(-1)).to({rotation:0,x:0,y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-32,50,64);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(25.6,0,1.099,1.054);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:4.2},49,cjs.Ease.get(-1)).to({x:-17.6},50,cjs.Ease.get(1)).to({x:4},50,cjs.Ease.get(-1)).to({x:25.6},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330.1,-195,711.5,390.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,0,1,1.053);

	this.instance_1 = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-37.9,97,75.8);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ64();
	this.instance.setTransform(256.4,-51.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Слой 1
	this.instance_1 = new lib.Символ50();
	this.instance_1.setTransform(-404.4,229.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-384.9},99).to({x:-404.4},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.7,-98.2,477.3,189.2);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// Слой 2
	this.instance = new lib.Символ48();
	this.instance.setTransform(2.6,0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.699},29).to({alpha:0},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-25.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.2,-213.7,749.6,428);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-37.9,101.2,79.3);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 19
	this.instance = new lib.Символ42();
	this.instance.setTransform(-16.4,-100.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ42(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Слой 18
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(-16.2,-38.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ36(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Слой 17
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(-35.9,192.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ29(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// Символ 7
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(220,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.3,x:218.3,y:114},14,cjs.Ease.get(-1)).to({rotation:-2.9,x:216.5,y:109.9},15,cjs.Ease.get(1)).to({rotation:-1.3,x:218.3,y:114},15,cjs.Ease.get(-1)).to({rotation:0,x:220,y:117.9},15,cjs.Ease.get(1)).wait(1));

	// Символ 16
	this.instance_4 = new lib.Символ19();
	this.instance_4.setTransform(13.3,-43.3,1,1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-0.8,x:15.1,y:-36.8},14,cjs.Ease.get(-1)).to({rotation:2.2,x:16.8,y:-29.9},15,cjs.Ease.get(1)).to({rotation:-0.8,x:15.1,y:-36.8},15,cjs.Ease.get(-1)).to({rotation:-4,x:13.3,y:-43.3},15,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_5 = new lib.Символ20();
	this.instance_5.setTransform(36.9,-71.6,1,1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-0.8,x:40,y:-63.8},14,cjs.Ease.get(-1)).to({rotation:2.2,x:43.2,y:-55.5},15,cjs.Ease.get(1)).to({rotation:-0.8,x:40,y:-63.8},15,cjs.Ease.get(-1)).to({rotation:-4,x:36.9,y:-71.6},15,cjs.Ease.get(1)).wait(1));

	// Символ 17
	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(-28.5,-130.7,1,1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-0.8,x:-22.2,y:-126.1},14,cjs.Ease.get(-1)).to({rotation:2.2,x:-15.4,y:-121.3},15,cjs.Ease.get(1)).to({rotation:-0.8,x:-22.2,y:-126.1},15,cjs.Ease.get(-1)).to({rotation:-4,x:-28.5,y:-130.7},15,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_7 = new lib.Символ12();
	this.instance_7.setTransform(-25.3,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:0.6,x:-26.9,y:42.2},14,cjs.Ease.get(-1)).to({skewX:1.5,x:-28.5,y:47.2},15,cjs.Ease.get(1)).to({skewX:0.6,x:-26.9,y:42.2},15,cjs.Ease.get(-1)).to({skewX:0,x:-25.3,y:37.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_8 = new lib.Символ11();
	this.instance_8.setTransform(142.5,99.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-3.8,x:140.5,y:99.1},14,cjs.Ease.get(-1)).to({regX:0.6,regY:-1.9,rotation:-7.9,x:138.4,y:98.6},15,cjs.Ease.get(1)).to({regX:0,regY:0,rotation:-3.8,x:140.5,y:99.1},15,cjs.Ease.get(-1)).to({rotation:0,x:142.5,y:99.4},15,cjs.Ease.get(1)).wait(1));

	// Символ 10
	this.instance_9 = new lib.Символ10();
	this.instance_9.setTransform(14,68.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:0.5,x:11,y:73.4},14,cjs.Ease.get(-1)).to({rotation:1.3,x:7.7,y:78.2},15,cjs.Ease.get(1)).to({rotation:0.5,x:11,y:73.4},15,cjs.Ease.get(-1)).to({rotation:0,x:14,y:68.9},15,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_10 = new lib.Символ9();
	this.instance_10.setTransform(-85,41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:1.5,x:-86.2,y:47.1},14,cjs.Ease.get(-1)).to({rotation:3.9,x:-87.2,y:53.7},15,cjs.Ease.get(1)).to({rotation:1.5,x:-86.2,y:47.1},15,cjs.Ease.get(-1)).to({rotation:0,x:-85,y:41.5},15,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_11 = new lib.Символ8();
	this.instance_11.setTransform(-179.6,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:3.6,x:-178.7,y:42.1},14,cjs.Ease.get(-1)).to({rotation:7.7,x:-177.7,y:43.2},15,cjs.Ease.get(1)).to({rotation:3.6,x:-178.7,y:42.1},15,cjs.Ease.get(-1)).to({rotation:0,x:-179.6,y:41},15,cjs.Ease.get(1)).wait(1));

	// Символ 6
	this.instance_12 = new lib.Символ6();
	this.instance_12.setTransform(-17.6,-53.8,1,1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({rotation:-0.8,x:-15.3,y:-49},14,cjs.Ease.get(-1)).to({rotation:2.2,x:-12.9,y:-43.7},15,cjs.Ease.get(1)).to({rotation:-0.8,x:-15.3,y:-49},15,cjs.Ease.get(-1)).to({rotation:-4,x:-17.6,y:-53.8},15,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_13 = new lib.Символ5();
	this.instance_13.setTransform(-208.7,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:2.3},14,cjs.Ease.get(-1)).to({rotation:5},15,cjs.Ease.get(1)).to({rotation:2.3},15,cjs.Ease.get(-1)).to({rotation:0},15,cjs.Ease.get(1)).wait(1));

	// styl2.png
	this.instance_14 = new lib.Символ23();
	this.instance_14.setTransform(148.7,137.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({rotation:-2,x:147.2,y:139.2},14,cjs.Ease.get(-1)).to({rotation:-4.2,x:145.4,y:140.5},15,cjs.Ease.get(1)).to({rotation:-2,x:147.2,y:139.2},15,cjs.Ease.get(-1)).to({rotation:0,x:148.7,y:137.8},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.8,-180.3,536.8,512.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.baba = new lib.Символ4();
	this.baba.setTransform(14.2,-1.1,0.855,0.855);

	this.timeline.addTween(cjs.Tween.get(this.baba).to({x:23.7},49,cjs.Ease.get(-1)).to({x:33.4},50,cjs.Ease.get(1)).to({x:23.8},50,cjs.Ease.get(-1)).to({x:14.2},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-223.6,-155.2,447.3,318.5);


// stage content:



(lib.wpagat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.fon.gotoAndPlay(1);
			this.piks.alpha=0;
		
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.fon.gotoAndPlay(31);
			this.piks.alpha=1;
		
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.piks = new lib.Символ52();
	this.piks.setTransform(102.2,270,1,1,0,0,0,-136,76.7);

	this.timeline.addTween(cjs.Tween.get(this.piks).wait(1));

	// Символ 4
	this.instance = new lib.Символ25();
	this.instance.setTransform(241.1,154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ54();
	this.instance_1.setTransform(-45.5,373.4,0.964,0.964);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 3
	this.fon = new lib.Символ47();
	this.fon.setTransform(324.9,121);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(252.6,57.2,749.6,428);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
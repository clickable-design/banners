(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/blink.png?1462373186346", id:"blink"},
		{src:"images/cactus.png?1462373186346", id:"cactus"},
		{src:"images/cloud.png?1462373186346", id:"cloud"},
		{src:"images/handle_1.png?1462373186346", id:"handle_1"},
		{src:"images/handle_2.png?1462373186346", id:"handle_2"},
		{src:"images/icon_2.png?1462373186346", id:"icon_2"},
		{src:"images/icon_3.png?1462373186346", id:"icon_3"},
		{src:"images/icon_4.png?1462373186346", id:"icon_4"},
		{src:"images/icon_5.png?1462373186346", id:"icon_5"},
		{src:"images/net.png?1462373186346", id:"net"},
		{src:"images/rock.png?1462373186346", id:"rock"},
		{src:"images/sqare.png?1462373186346", id:"sqare"},
		{src:"images/stars.png?1462373186346", id:"stars"},
		{src:"images/sun.png?1462373186346", id:"sun"}
	]
};



// symbols:



(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,287);


(lib.cactus = function() {
	this.initialize(img.cactus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,265);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,112);


(lib.handle_1 = function() {
	this.initialize(img.handle_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,49);


(lib.handle_2 = function() {
	this.initialize(img.handle_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,55);


(lib.icon_2 = function() {
	this.initialize(img.icon_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,106);


(lib.icon_3 = function() {
	this.initialize(img.icon_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,106);


(lib.icon_4 = function() {
	this.initialize(img.icon_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,106);


(lib.icon_5 = function() {
	this.initialize(img.icon_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,106);


(lib.net = function() {
	this.initialize(img.net);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,181);


(lib.rock = function() {
	this.initialize(img.rock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,504);


(lib.sqare = function() {
	this.initialize(img.sqare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.stars = function() {
	this.initialize(img.stars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,42);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,254);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50900C").s().p("EiRpBpzMAAAjTlMEjTAAAMAAADTlg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sun();
	this.instance.setTransform(-124.5,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-116.5,254,254);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57980F").s().p("EAwNAJdUgwNgCAgwMACAIhvAFIAAtqIAAkJUAyRgCfAxmACfIAAD/IAAN0IhvgFg");
	this.shape.setTransform(0,-12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A7F00").s().p("EAwNgBPIAIgIIBnAAIhvCvgEgx7gBXIBnAAIAIAIIAACng");
	this.shape_1.setTransform(0,57.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#196900").s().p("EhAJAH1IJJpHInvnvQGaByGahWIAANpIBvgFIAAANIgIgIIhnAAIBvCxQj1BNkAAAQj/AAkJhNgEAwNAH1IBvixIAAtzQHdBDGxhVIpJJHIHvHvQjgBLjpAAQjpAAjxhLgEAwNAE/IBvAFIhnAAIgIAIg");
	this.shape_2.setTransform(0,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.6,-73.7,821.3,147.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#57980F").ss(4,2,0,3).p("AtnqWIX+jRIDRX+I3+DRg");
	this.shape.setTransform(-1.2,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-116.2,178.9,178.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud();
	this.instance.setTransform(-205,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-56,410,112);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD5A0","#FFD59D","#C5D68E","#9CD684","#8BD780"],[0,0.082,0.494,0.812,1],3.1,-574.6,-3,566.5).s().p("EhwzBZ2MAAAizrMDhnAAAMAAACzrg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-722,-575,1444.1,1150.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Al6GoQiNiqAAjrQAAj4CeiwQCdixDcAAQDTAACYCgQCNCpAADsQAAD3ieCwQidCwjcABQjTAAiYifg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-58.3,104.1,116.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink();
	this.instance.setTransform(-240.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.5,-143.5,481,287);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.net();
	this.instance.setTransform(-101,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-90.5,202,181);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,204,0,0)","#FFCC00","#FFFFFF"],[0,0.78,1],0,0,0,0,0,640).s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_4();
	this.instance.setTransform(-52.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-53,105,106);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handle_1();
	this.instance.setTransform(-9,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-24.5,18,49);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handle_2();
	this.instance.setTransform(-42.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-27.5,85,55);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],130.2,-198.4,347.1,393).s().p("A4bVzIAAAAMgy3AAAQBoh0CwiWQUrxvZpq2QE4iEFRhrQGliFHLhfQROjjUxAAQUwAARRDjMAAAAoCg");
	this.shape.setTransform(232.3,-103);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],156,-171.3,350.3,339.5).s().p("AvwS1IAAAAMgtlAAAQBdhkCeiDQSivUW+pXUAW9gJXAggAAAQLgAAKTBLQlQBrk4CEQ5pK10rRvQiwCXhoB0MAy3AAAIAAAAg");
	this.shape_1.setTransform(-253.1,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1 - копия: 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],-338.3,-122.3,-146.4,388.3).s().p("EgkSAMCIAA37QQpgpQAC1QbsE4JkMXQBvCPA9CRg");
	this.shape_2.setTransform(-571.8,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],-192,-140.5,-0.1,370.1).s().p("Eg8UAO4IAA08QJwjlMfiUQdnlfbqE4QbuE4JkMXQD7FFgEFIg");
	this.shape_3.setTransform(-418,-58.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой 3
	this.instance = new lib.cactus();
	this.instance.setTransform(-788.1,-381.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.rock();
	this.instance_1.setTransform(60,-672.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-804.1,-672.1,1518.4,708.7);


(lib.Символ23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.729)").s().p("As/JuIDS2tIWtDSIjSWtg");
	this.shape_3.setTransform(-1.1,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-107.8,166.5,166.5);


(lib.title_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ВАШ ПРИЗ", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 486;
	this.text.setTransform(-2,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.8,-69.5,489.8,144);


(lib.title_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ВЫ СОБРАЛИ 3 ИКОНКИ!", "bold 35px 'Arial'", "#5E6D45");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 615;
	this.text.setTransform(-2.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.8,-1.3,618.9,117.7);


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDCgIAAjQIiBDQIhBAAIAAk/IA9AAIAADUICBjUIBBAAIAAE/g");
	this.shape.setTransform(212.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApCiIgmhUIgDgGIgHgPQgMgYgIgGQgIgGgRAAIAACNIhBAAIAAlAIBBAAIAACJQAWgCAIgJQAHgJAPgqQAUg0AUgNQAUgMAtAAIAKgBIAAAxIgKgBQgUAAgJAFQgJAFgGAKQgFAKgMAgQgGARgGALQgHALgSAKQAWAEAOATQAOASARAiIAsBZg");
	this.shape_1.setTransform(184.1,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6CgIAAk/IBpAAQA5gBASAFQAbAHAUAZQASAYAAAnQAAAdgLAUQgLATgQALQgQAMgSADQgXAFgrAAIgpAAIAAB5gAg4gNIAjAAQAkgBANgFQANgFAIgLQAHgKAAgOQAAgSgLgMQgJgLgRgDQgLgCgiAAIgeAAg");
	this.shape_2.setTransform(154.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABbCgIgchJIiAAAIgaBJIhFAAIB+k/IBCAAICBE/gAApAhIgqh1IgrB1IBVAAg");
	this.shape_3.setTransform(122.6,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABlDEIAAhHIjJAAIAABHIg2AAIAAh9IAbAAQAUgpAHg1QAGg2AAhUIAAgiIDdAAIAAEKIAcAAIAAB9gAg6BHIB4AAIAAjUIheAAQAACRgaBDg");
	this.shape_4.setTransform(89.8,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwB6QgrgsAAhMQAAgwAPghQALgZATgTQATgUAXgKQAegMAmAAQBGAAArAsQArAsAABNQAABOgrAsQgqAshHAAQhGAAgqgsgAg/hSQgZAcAAA2QAAA2AaAdQAZAcAlAAQAnAAAZgcQAZgdAAg2QAAg3gZgcQgYgbgoAAQgmABgZAbg");
	this.shape_5.setTransform(56.9,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA/CgIAAkJIh9AAIAAEJIhBAAIAAk/ID/AAIAAE/g");
	this.shape_6.setTransform(23.2,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABDDJIAAjRIiBDRIhBAAIAAlAIA9AAIAADUICBjUIBBAAIAAFAgAguiZQgSgRgDgeIAeAAQACAQAJAIQAKAIAQAAQASAAAJgIQAKgIABgQIAeAAQgCAegSARQgTARgdAAQgbAAgTgRg");
	this.shape_7.setTransform(-21.6,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABbCgIgdhJIh/AAIgaBJIhFAAIB9k/IBDAAICBE/gAApAhIgqh1IgsB1IBWAAg");
	this.shape_8.setTransform(-54,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA+CgIAAiBQgUAJgTAEQgTAFgRAAQgwAAgggXQghgXAAg2IAAhsIBBAAIAABMQAAAmADAMQADAMANAJQAOAJAaAAQATAAAQgFQARgEAMgJIAAiKIBBAAIAAE/g");
	this.shape_9.setTransform(-86.3,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhhCeIAAgvIAaAAQAWAAAKgIQAKgIAJgcIh3jkIBJAAIBKCkIBAikIBDAAIhtDyQgRAogRAVQgSAVgeAAQgcAAgRgFg");
	this.shape_10.setTransform(-115.7,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiICfIAAgyIAPAAQAUAAAHgGQAHgFAAgWIAAg3IAAi1IDgAAIAAE/IhBAAIAAkJIhfAAIAACIQAAA6gEAYQgEAXgPANQgQAOggAAg");
	this.shape_11.setTransform(-146.9,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhwB6QgrgsAAhMQAAgwAPghQALgZATgTQATgUAXgKQAegMAmAAQBGAAArAsQArAsAABNQAABOgrAsQgqAshHAAQhGAAgqgsgAg/hSQgZAcAAA2QAAA2AaAdQAZAcAlAAQAnAAAZgcQAZgdAAg2QAAg3gZgcQgYgbgoAAQgmABgZAbg");
	this.shape_12.setTransform(-178.7,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA/CgIAAkJIh9AAIAAEJIhBAAIAAk/ID/AAIAAE/g");
	this.shape_13.setTransform(-212.4,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.7,-27.1,461.4,54.3);


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDCgIAAjQIiBDQIhBAAIAAk/IA9AAIAADUICBjUIBBAAIAAE/g");
	this.shape.setTransform(149.2,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApCiIgmhUIgDgGIgHgPQgMgYgIgGQgIgGgRAAIAACNIhBAAIAAlAIBBAAIAACJQAWgCAIgJQAHgJAPgqQAUg0AUgNQAUgMAtAAIAKgBIAAAxIgKgBQgUAAgJAFQgJAFgGAKQgFAKgMAgQgGARgGALQgHALgSAKQAWAEAOATQAOASARAiIAsBZg");
	this.shape_1.setTransform(120.8,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/CgIAAiMIh9AAIAACMIhBAAIAAk/IBBAAIAAB+IB9AAIAAh+IBBAAIAAE/g");
	this.shape_2.setTransform(89.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwB6QgrgsAAhMQAAgwAPghQALgZATgTQATgUAXgKQAegMAmAAQBGAAArAsQArAsAABNQAABOgrAsQgqAshHAAQhGAAgqgsgAg/hSQgZAcAAA2QAAA2AaAdQAZAcAlAAQAnAAAZgcQAZgdAAg2QAAg3gZgcQgYgbgoAAQgmABgZAbg");
	this.shape_3.setTransform(55.7,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApCiIgmhUIgDgGIgHgPQgMgYgIgGQgIgGgRAAIAACNIhBAAIAAlAIBBAAIAACJQAWgCAIgJQAHgJAPgqQAUg0AUgNQAUgMAtAAIAKgBIAAAxIgKgBQgUAAgJAFQgJAFgGAKQgFAKgMAgQgGARgGALQgHALgSAKQAWAEAOATQAOASARAiIAsBZg");
	this.shape_4.setTransform(25.9,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABDCgIAAjQIiBDQIhBAAIAAk/IA9AAIAADUICBjUIBBAAIAAE/g");
	this.shape_5.setTransform(-5.4,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABDCgIAAjQIiBDQIhBAAIAAk/IA9AAIAADUICBjUIBBAAIAAE/g");
	this.shape_6.setTransform(-50.2,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiGCgIAAk/ICBAAQAlAAASADQATADAPAKQAPAKAJARQALAQAAAWQAAAWgNATQgMATgVAJQAdAJARATQAPAUAAAcQAAAWgKAVQgKAVgSAMQgRANgbACIhMACgAhEBqIA7AAQAiAAAJgCQAPgDAJgJQAJgLAAgRQAAgOgHgKQgHgKgNgGQgOgEgqAAIg0AAgAhEgfIAqAAIAugBQAQgCAJgKQAKgKAAgPQAAgQgIgIQgJgKgPgCIg2gBIglAAg");
	this.shape_7.setTransform(-82,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhwB6QgrgsAAhMQAAgwAPghQALgZATgTQATgUAXgKQAegMAmAAQBGAAArAsQArAsAABNQAABOgrAsQgqAshHAAQhGAAgqgsgAg/hSQgZAcAAA2QAAA2AaAdQAZAcAlAAQAnAAAZgcQAZgdAAg2QAAg3gZgcQgYgbgoAAQgmABgZAbg");
	this.shape_8.setTransform(-116.3,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiICfIAAgyIAPAAQAUAAAHgGQAHgFAAgWIAAg3IAAi1IDgAAIAAE/IhBAAIAAkJIhfAAIAACIQAAA6gEAYQgEAXgPANQgQAOggAAg");
	this.shape_9.setTransform(-151,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.4,-27.1,334.9,54.3);


(lib.rate_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxtDSIAAmjMAjbAAAIAAGjg");

	// Слой 1 - копия
	this.instance = new lib.stars();
	this.instance.setTransform(-113.6,-20.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-20.6,226.9,41.7);


(lib.icon_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_5();
	this.instance.setTransform(-52.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-53,105,106);


(lib.icon_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_3();
	this.instance.setTransform(-71.9,-19.6,1,1,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-72.1,144,144.3);


(lib.icon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.icon_2();
	this.instance.setTransform(-64.4,-37.6,1,1,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,-64.7,128.9,129.6);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sqare();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТАНОВИТЬ", "bold 27px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 325;
	this.text.setTransform(-2.1,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-44.1,329.5,88.2);


(lib.app_name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("BEST GAME", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 619;
	this.text.setTransform(-2,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.4,-39.3,623,78.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-116.5,254,254);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},7).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-58.3,104.1,116.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.559},3).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.score = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.parent.header_1.gotoAndPlay(1);
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
		this.parent.victory_mc.play();
		this.parent.net_2.visible = false;
		this.parent.fall_mc.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBD3IgLARQhLgVgqgUQgsgjgihNIgrhvIAAgiQAAgXAJgZQAKgYAUgcIA2hBIAXAAQAFgEAAgMIASADIAKACQAAgQAqgKQAhgJAdAAQApAAAhAIQAgAIAYAQQA8AmAeBkIgEARIgIAVQAMAAAJgSIAHAbIhwgWIgRg3QgHgTgJgLQgIgLgLgBQgBgGADgJQACgJAHgDIgOgSQgHAGAAAEIADAFQgLgGgbgIQgegHgSgBQg9AAgqAwQgTAWgKAbQgJAbAAAeQAAAbAIAWQgHAAgKgIQgKgBgOAQQgJAAgGgFQgDACAAAFIAJAKIAQgIIAfAAQAGAHAAAGQgNAAgEADQAJAEAJAMQAKAMABAJIgOADIgWADIgCAGQAAAEAHAIQAIgFAJAAQARAAAIARIBrBsQAFgEAQACIAdACQAPAAARgIQAQgIARgRQAdgbAXgpIAAgQIglglQgUgXgMgTIgMgRIAbgUQAEANAPAVQAMASAAAIQAAAFgGAFIAOAKQAGAEADAHIAGAFIAGgFQADgOAAgfQAAgcADgRIAFgBQAJAAANALQAVAQAMAHIAQAAIAOgMQgEAHgBAOQgBAPgEAFQAFAFAFAAQgEAlgSAtQgSAtgSAOIhGAqQgXALgUAGQgUAGgRABIgQgCIgNARgAhhDgIAGAGIAUgTIgHgGgACmCEIAOAHIAEgIIgPgHgAiqBoIAOAHIAEgIIgQgIgAjMA4IAIANQAPgIAQAAIgEgKQgBgFgDAAIgrgEQAHADAFALgADPBCIAPAAIAAgKIgPAAgAjDgQIAKAAIAAgaIgKAAgAjRhgIAAAJIAQgIIgDgIgABRi5IAaAGIAAgKIgagGgAAdCbIAKAQQAGANAAAHIgCAKQgOgWAAgYgAABB5QgJgTAAgFIAjA3QgOgKgMgVgAhuj1IAAgVIAKAAIAAAVgACaj/IADgIIAPAHIgDAJgAj5kFIAAgIIArANIAAAIg");
	this.shape.setTransform(82.3,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABlD+IANgTIAHAFIgMATgACQEBIAAgOIAJAAIAAAOgAAmD8IACAAIgCABIAAgBgAAKDzIATAAQAGgBACAFIABAFIgEABgAAmD8IAAAAgAAwDxIAAgOIAJAAIAAAOgAB0DaQgKgJgYAAQgfAAgzALIgIgIQgEgEAAgJIAHgMQAFgMAAgIQAAgFgBgFIAPAAQAGgQAEgdIAFg1IgNAAIgIAKIACATQAAAZgJASQgHASgSANIABhNQgJgJgIAHIAWgVQgEgDAAgWIgBh0IgDgXQAAgNAOgDIgSgOIgCguQgDgQgPAAQgGAAheAfIAAgjIBXgQQAdgIAegKQAcgLAegPQABCMgCB2QAAAFgLAGIgTAPQAGAFAMAAQgEAAgKAGIgUAKQANAHAdgJIABAfQAAAcAMBGQAPAVAOAAIArgCQAIAAAEADIgFALQgEAJgDAAIgBAAIgRAJgAATAIIAUAAIAAgIIgUAAgAg8DTIg7gDIANgOIAMALIAcAAQAJAAAKgKIARgRIAAAlQgIgDgWgBgAB5CKIACgCIABgEIgCgDQgFABAAAFQgDgEAGgFQgCgHgIgFIgQgNIAAgWIAHAYQAFgKAGgGQAAAPAFAFIAHAMIAFAAIAMAAQAIAAAAgEIADgHIgCAFQAAAIAGANQgDgBgJgIIgGAJQgDAHgIgBgAiLBmIAMgGIADAHIgPAHgABFBAIAAgSIAJAAIAAASgAh3AzQANAAAAgKIAIASQgMABgJgJgAidARIAFgHIAdAeIgGAGgABShzQAIgHAAgGQAAAKAPgBIAAgQQAIAHAJAAQgJAAgEAFIAwASgACQh5IAGgjIAIAAIgFAjgACFieIAAgOIAKAAIAAAOg");
	this.shape_1.setTransform(81.9,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4EIQgGgEABgIQgBgIAFgDIAEgEIAOAfQgLAAgGgEgAiuEHIAAgQIAKAAIAAAQgAiaDlIgRAKIAQgTIgGgIIADgBQAMgIAAgMIgCgWQAAgOARgFIgKgHQgGgDAAgDQAIgBAFAGIAGgKQAFgKgNgNQAIADAaAAQAGABAfgiQAgghA2hBIAMANIAPAAIAKgQIgQgTQgPAQgGAAIANgTIgNgaQgGACgBAFQABgFAGgHQADgFABgFQAAAHAHANIAEgJIgCgdQAAgTANgJQgLgGgOgRQgOgQgOgcQgEAGAAAGIgRAAQgFAAAAgDIABgDIABgDQAAgCgGgBQgMAAgXAIIg4AXIgKANQAQAQAHAAIgHAHQgDACgKAAIgGgIIAAAIIgKAAIAAgQIAEAAIgNgVIAuhFQAIgLAugLQAogKAPAAQBDAAApA7QAjAyAAA+QAAAHgRAfIgbAxIgUAJIgSATQgLANgIAAQgJAAgCACIgEAHIAdAMIgcATQAAgMgDgFIhTBTQAUAGAfAAIAnAAQA5AAAaAbIACgFIgIgSIAUAAQANAAAGgTQACgJABgeQABgaADgIQALAAAIACIAIADIgPBGQgLAuABAcIADAdIiugDQhDgBgkABQgPAJgKAAQgIAAAAgLgAg0DTIAKAAIAAgVIgKAAgABxDFQgFAAgDgGIgDgLQgBAEgPAAQAMANAPAAIAAAAgAA5gOIAIAJIAGgGIgJgJgAAzhoIAbAMIAEgIIgbgNgAA3idIANAFQAAgFAHgKIgjAAgAgPjeQgBAQAEACIACgMQAAgRgJgRIgSAdQAFgFAIgBQAFAAAEAFgAi9CKQAKgHALgXQAAARAFAFQALgFAGAAQAFAAAEAEQgHgBgaANQAAgNgFgEQgEAMgBASgAilBDQAAgFgDgFIANANQgIAAgFAFQADgEAAgEgACdAWIAAgKIAhAHIAAAKgAgqhIQglgJgpgCIgkgVQgOgHgKAAQAYAAAMgEIgCAGQAAAEAGAFQAHgGALAGQAGgHgGgGIAFABIAUgDQAAASADADIAEgFIALgBIAMAAQAFAAAAADIgBADIgBADQAAADAFAAQAGAAgBgCIgCgEIgCgDIAFgDQAHABAAAFQABAGAGAAIAHgCIAAgBIgBgBIAGgCQAIAAAAAGIgBADIAAAEIABAFQANgMAAgDQAAALALANIgpACgAi2idQAGAEAHAKIAMARQgEgDgFAAQgKABgFAFg");
	this.shape_2.setTransform(82,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACdD8IAFgIQgFgHAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAFAAAAAKQAAAKgEAIgAhXDjQgUgDgOgFIgqgNIAJgoIADgqQAKAGAPARQAOAQALAGQASAKAcAAQAGAAAQAGIAWAGQAgAAAeglQAcgiAAggQAAgSgcgZIgggeQgKgJgLAAQgKAAgVAGIgpALQAJgRASgGIgWgKIA0hRQAegwAQggQgEgEgXAAIiAAAQgEAVAAAUQABAVAEAVIgbAAIAAgoQgBgoAGgXQAFgYAMgIIgWgQIAGgNQCjgCCMAIQg3A+hlCKIAVAKQAOAGAHAKIACgFIgEgRQBKAbATAkIgpgFQgXAAgNgMQAAgKgJgIIgZANQAGAEAUAZQgCgFAMAAQAIAAArAWQAEAAACgGIADgLQAMAIAOAgQAMAeAAAKQAAAXgOAVQgOAVgbAUQgaARgYAJQgZAJgXAAIgtAFgAAgDMIAIAEIAIgPIgJgDgABbBtIAPAAIAAgJIgPAAgABHgFIAIAEIAHgPIgIgDgAA3gUIAIAIIAGgFIgIgJgAhEi8IAPAAIAAgKIgPAAgAAAjWIAIAIIAGgFIgJgJgACZDEIAGALIABgBIgBACQgFAHAAAGg");
	this.shape_3.setTransform(82.3,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Слой 1 - копия
	this.instance = new lib.Символ17();
	this.instance.setTransform(82,-4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.498)").ss(3,2,0,3).p("AqbAAQAAEsDEDVQAKALALALQC9C/EFAAQEUAADEjVQDEjVAAksQAAkbivjNQgKgMgLgMQjEjVkUAAQkTAAjEDVQjEDVAAErg");
	this.shape_4.setTransform(79.1,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance}]}).wait(4));

	// Слой 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.486)").ss(1,2,0,3).p("AqdAAQAAE7DEDfQAKALALAMQC+DIEGAAQEVAADEjfQDFjfAAk7QAAkpivjXQgLgNgLgMQjEjfkVAAQkUAAjFDfQjEDfAAE6g");
	this.shape_5.setTransform(84.1,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.8,-80.5,141.4,154.3);


(lib.rate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.rate_in = new lib.rate_in();

	this.timeline.addTween(cjs.Tween.get(this.rate_in).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B5C0").s().p("AMUDPQgEgDgCgEQgBgEABgFIAAgGIAbh7IAAgBIAAgCQgBgEgEgDIhghPQgEgEgBgEQgBgEABgEQgBgDABgEQABgFAEgDQAEgDAEAAIB+gMQAFAAADgDQAEgCABgFIAwh0QACgFAEgCQAEgDAFAAQAEAAAEACIAEAEIACADIAyB0QACAEAEADQADACAFABIB9AJQAFAAAEADQAEADABAFQACAEgBAEIAAAHQgCAEgDAEIhfBRQgDADgCAEIAAACIAAABIAeB6QABAEgBADQABAEgCAEQgBAFgEADQgEADgFAAQgEAAgEgCIhthBQgEgCgEAAQgFAAgDACIhsBDQgEACgEAAQgFAAgEgDgAFIDPQgEgDgCgEQgBgEABgFIAAgGIAbh7IAAgBIAAgCQgBgEgEgDIhghPQgEgEgBgEQgBgEABgEQgBgDABgEQABgFAEgDQAEgDAEAAIB+gMQAFAAADgDQAEgCABgFIAwh0QACgFAEgCQAEgDAFAAQAEAAAEACQAEADACAEIAyB0QACAEAEADQADACAFABIB9AJQAFAAAEADQAEADABAFQACAEgBAEIAAAHQgCAEgDAEIhfBRQgDADgCAEIAAACIAAABIAeB6IAAAHQABAEgCAEQgBAFgEADQgEADgFAAQgEAAgEgCIhthBQgEgCgEAAQgFAAgDACIhsBDQgEACgEAAQgFAAgEgDgAiBDPQgEgDgCgEQgBgEABgFIAAgGIAbh7IAAgBIAAgCQgBgEgEgDIhghPQgEgEgBgEQgBgEABgEQgBgDABgEQABgFAEgDQAEgDAEAAIB+gMQAFAAADgDQAEgCABgFIAwh0QACgFAEgCQAEgDAEAAQADAAAEACQAEADACAEIAyB0QACAEAEADQADACAFABIB9AJQAFAAAEADQAEADABAFQACAEgBAEIAAAHQgCAEgDAEIhfBRQgDADgCAEIAAACIAAABIAeB6IAAAHQABAEgCAEQgBAFgEADQgEADgFAAQgEAAgEgCIhthBQgEgCgEAAQgDAAgDACIhsBDQgEACgEAAQgFAAgEgDgApODPQgEgDgBgEQgCgEABgFIAAgGIAch7IAAgBIgBgCQgBgEgDgDIhhhPQgDgEgCgEIAAgIIAAgHQACgFAEgDQADgDAFAAIB+gMQAEAAAEgDQADgCACgFIAwh0QACgFADgCQAEgDAFAAQAFAAAEACQAEADACAEIAyB0QACAEADADQAEACAEABIB+AJQAFAAADADQAEADACAFQABAEgBAEIAAAHQgBAEgEAEIhfBRQgDADgBAEIgBACIAAABIAeB6QABAEAAADQABAEgCAEQgCAFgDADQgEADgFAAQgFAAgEgCIhthBQgDgCgFAAQgEAAgEACIhrBDQgEACgFAAQgFAAgEgDgAwaDPQgEgDgBgEQgCgEABgFIAAgGIAch7IAAgBIgBgCQgBgEgDgDIhhhPQgDgEgCgEIAAgIIAAgHQACgFAEgDQADgDAFAAIB+gMQAEAAAEgDQADgCACgFIAwh0QACgFADgCQAEgDAFAAQAFAAAEACQAEADACAEIAyB0QACAEADADQAEACAEABIB+AJQAFAAADADQAEADACAFQABAEgBAEIAAAHQgBAEgEAEIhfBRQgDADgBAEIgBACIAAABIAeB6QABAEAAADQABAEgCAEQgCAFgDADQgEADgFAAQgFAAgEgCIhthBQgDgCgFAAQgEAAgEACIhrBDQgEACgFAAQgFAAgEgDg");
	this.shape.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,-21,227.4,42.6);


(lib.icon_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(0,0,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-72.1,143.9,144.3);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.title_1 = new lib.title_1();
	this.title_1.setTransform(5.2,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.title_1).wait(21).to({regX:-1.3,regY:-0.5,x:3.9,y:3.1,alpha:0.495},0).wait(1).to({y:10.9,alpha:0.278},0).wait(1).to({y:15.7,alpha:0.145},0).wait(1).to({y:18.5,alpha:0.069},0).wait(1).to({y:20,alpha:0.027},0).wait(1).to({regX:0,regY:0,x:5.2,y:21.5,alpha:0},0).wait(34).to({regX:-1.3,regY:-0.5,x:3.9,y:2.8,alpha:0.505},0).wait(1).to({y:-5,alpha:0.722},0).wait(1).to({y:-9.8,alpha:0.855},0).wait(1).to({y:-12.5,alpha:0.931},0).wait(1).to({y:-14,alpha:0.973},0).wait(1).to({regX:0,regY:0,x:5.2,y:-14.5,alpha:1},0).wait(1));

	// Слой 2
	this.title_2 = new lib.title_2();
	this.title_2.setTransform(5.2,21.5);
	this.title_2.alpha = 0;
	this.title_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_2).wait(26).to({_off:false},0).wait(1).to({regY:-1,y:2.6,alpha:0.505},0).wait(1).to({y:-5.1,alpha:0.722},0).wait(1).to({y:-9.8,alpha:0.855},0).wait(1).to({y:-12.5,alpha:0.931},0).wait(1).to({y:-14,alpha:0.973},0).wait(1).to({regY:0,alpha:1},0).wait(22).to({regY:-1,y:2.9,alpha:0.495},0).wait(1).to({y:10.6,alpha:0.278},0).wait(1).to({y:15.4,alpha:0.145},0).wait(1).to({y:18.1,alpha:0.069},0).wait(1).to({y:19.5,alpha:0.027},0).wait(1).to({regY:0,y:21.5,alpha:0},0).wait(7));

	// Слой 5
	this.instance = new lib.Символ23();
	this.instance.setTransform(3.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.5,-73.4,821.3,147.4);


(lib.fall_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_318 = function() {
		this.icon_3.visible = true;
		this.icon_1.visible = true;
		this.icon_2.visible = true;
		this.icon_5.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(318).call(this.frame_318).wait(1));

	// Слой 1 - копия
	this.icon_51 = new lib.icon_5_1();
	this.icon_51.setTransform(301.2,-90.6,1,1,30);
	this.icon_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_51).wait(19).to({_off:false},0).to({y:1452.2},78).to({_off:true},1).wait(221));

	// Слой 1 - копия: 2 - копия
	this.icon_52 = new lib.icon_5_1();
	this.icon_52.setTransform(301.2,-90.6,1,1,30);
	this.icon_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_52).wait(178).to({_off:false},0).to({y:1548.3},78).to({_off:true},1).wait(62));

	// Слой 1
	this.icon_5 = new lib.icon_5_1();
	this.icon_5.setTransform(301.2,-90.6,1,1,30);
	this.icon_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_5).wait(240).to({_off:false},0).to({y:1516.3},78).wait(1));

	// icon_3 - копия
	this.icon_31 = new lib.icon_3_1();
	this.icon_31.setTransform(-301.1,-90.6);
	this.icon_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_31).wait(228).to({_off:false},0).to({y:1560.3},80).to({_off:true},1).wait(10));

	// icon_1 - копия
	this.icon_11 = new lib.icon_1();
	this.icon_11.setTransform(-293.6,-83.3);
	this.icon_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_11).wait(98).to({_off:false},0).to({y:1387.6},80).to({_off:true},1).wait(140));

	// icon_1
	this.icon_1 = new lib.icon_1();
	this.icon_1.setTransform(-293.6,-83.3);
	this.icon_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_1).wait(160).to({_off:false},0).to({y:1515.6},80).to({_off:true},1).wait(78));

	// icon_2
	this.icon_2 = new lib.icon_2_1();
	this.icon_2.setTransform(301.2,-90.6);
	this.icon_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon_2).wait(80).to({_off:false},0).to({y:1420.3},80).to({_off:true},1).wait(158));

	// icon_3
	this.icon_3 = new lib.icon_3_1();
	this.icon_3.setTransform(-301.1,-90.6);

	this.timeline.addTween(cjs.Tween.get(this.icon_3).to({y:1330.2},80).to({_off:true},1).wait(238));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-373.1,-162.8,143.9,144.3);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1490.4},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255,-56,410,112);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.btn_txt = new lib.btn_txt();
	this.btn_txt.setTransform(3.9,12.6);

	this.timeline.addTween(cjs.Tween.get(this.btn_txt).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50900C").s().p("ABVCPQhXAAg/hGQg+hGAAhgIAAgxQAyB+B6BkQAoAgArAbg");
	this.shape.setTransform(-152.9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 - копия: 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#50900C").s().p("ARXG3QAsgbAoghQDRirAAjxQAAjsjGipIEmAAQBZAAA/BGQA/BGAABjIAAGPQAABjg/BGQg/BGhZAAgA50ljQAngsAzgQQhqBdguByQAGhVA4g+g");
	this.shape_1.setTransform(5.7,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1 - копия
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54960E").s().p("A3qG3QhZAAg/hGQg/hGAAhjIAAmPQAAhjA/hGQA/hGBZAAMAvVAAAQBZAAA/BGQA/BGAABjIAAGPQAABjg/BGQg/BGhZAAg");
	this.shape_2.setTransform(4.2,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#196900").s().p("A3qG2QhZAAg/hGQg/hFAAhjIAAmPQAAhjA/hGQA/hFBZAAMAvVAAAQBZAAA/BFQA/BGAABjIAAGPQAABjg/BFQg/BGhZAAg");
	this.shape_3.setTransform(4.2,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.8,-62,346.1,118.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-116.5,254,254);


(lib.victory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Слой 14
	this.instance = new lib.Символ30();
	this.instance.setTransform(-1.9,-0.9);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ30(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(44));

	// Слой 12
	this.btn = new lib.btn();
	this.btn.setTransform(-6.1,247.7);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(33).to({_off:false},0).wait(1).to({regX:4.2,regY:-2.7,x:-1.9,y:238.8,alpha:0.316},0).wait(1).to({y:234.9,alpha:0.514},0).wait(1).to({y:232.3,alpha:0.647},0).wait(1).to({y:230.4,alpha:0.747},0).wait(1).to({y:228.9,alpha:0.822},0).wait(1).to({y:227.8,alpha:0.88},0).wait(1).to({y:226.9,alpha:0.924},0).wait(1).to({y:226.3,alpha:0.957},0).wait(1).to({y:225.8,alpha:0.982},0).wait(1).to({regX:0,regY:0,x:-6.1,y:228.2,alpha:1},0).wait(2));

	// Слой 11
	this.app_name = new lib.app_name();
	this.app_name.setTransform(-2,171.2);
	this.app_name.alpha = 0;
	this.app_name._off = true;

	this.timeline.addTween(cjs.Tween.get(this.app_name).wait(30).to({_off:false},0).wait(1).to({y:159,alpha:0.324},0).wait(1).to({y:151,alpha:0.536},0).wait(1).to({y:145.6,alpha:0.68},0).wait(1).to({y:141.5,alpha:0.79},0).wait(1).to({y:138.4,alpha:0.872},0).wait(1).to({y:136.5,alpha:0.924},0).wait(1).to({y:135.3,alpha:0.956},0).wait(1).to({y:134.4,alpha:0.98},0).wait(1).to({y:133.7,alpha:1},0).wait(6));

	// Слой 9
	this.rate = new lib.rate();
	this.rate.setTransform(-2,60.5);
	this.rate.alpha = 0;
	this.rate._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rate).wait(26).to({_off:false},0).wait(1).to({regX:0.1,regY:0.4,x:-1.9,y:51.9,alpha:0.449},0).wait(1).to({y:47.9,alpha:0.648},0).wait(1).to({y:45.4,alpha:0.773},0).wait(1).to({y:43.7,alpha:0.858},0).wait(1).to({y:42.5,alpha:0.915},0).wait(1).to({y:41.8,alpha:0.954},0).wait(1).to({y:41.2,alpha:0.981},0).wait(1).to({regX:0,regY:0,x:-2,y:40.5,alpha:1},0).wait(11));

	// Слой 6
	this.icon = new lib.icon();
	this.icon.setTransform(-2,-92.9,0.055,0.055,-15);
	this.icon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(16).to({_off:false},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:-9.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-6.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-4.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-2.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-0.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-0.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-0.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:0},0).wait(19));

	// Слой 8
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-0.6,-66.7,0.192,0.192,30);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(1).to({regX:-1.2,regY:-26.8,scaleX:0.55,scaleY:0.55,rotation:16.8,x:3,y:-81},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:11.5,x:2.3,y:-85},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:8.3,x:1.5,y:-87.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:5.6,x:0.6,y:-89.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:3.7,x:-0.2,y:-90.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:2.4,x:-0.7,y:-91.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:1.4,x:-1.1,y:-92.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.8,x:-1.5,y:-93},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.3,x:-1.7,y:-93.3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-0.6,y:-66.7},0).wait(13));

	// Слой 7
	this.instance_2 = new lib.Символ23_1();
	this.instance_2.setTransform(-0.7,-66.8,0.304,0.304,-45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(1).to({regX:-1.2,regY:-24.6,scaleX:0.59,scaleY:0.59,rotation:-26.3,x:-7.8,y:-79.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-18.4,x:-7,y:-83.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-13.6,x:-6.1,y:-85.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.7,x:-5.2,y:-87.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-6.7,x:-4.3,y:-88.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-4.6,x:-3.6,y:-89.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-3,x:-3.1,y:-90.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-1.8,x:-2.6,y:-90.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-1,x:-2.3,y:-91},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.4,x:-2,y:-91.2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-0.7,y:-66.8},0).wait(6));

	// Слой 10
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(-2.5,-95.9,0.185,0.185);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(1).to({regX:2.5,regY:10.5,scaleX:0.54,scaleY:0.54,x:-1.2,y:-90.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-0.8,y:-88.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-0.5,y:-87.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-0.3,y:-86.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-0.2,y:-86.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-0.1,y:-85.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-85.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2.5,y:-95.9},0).wait(15));

	// Слой 13
	this.title_4 = new lib.title_4();
	this.title_4.setTransform(-1.4,-150);
	this.title_4.alpha = 0;
	this.title_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_4).wait(16).to({_off:false},0).wait(1).to({regY:2.5,y:-158.3,alpha:0.291},0).wait(1).to({y:-166,alpha:0.495},0).wait(1).to({y:-170.7,alpha:0.62},0).wait(1).to({y:-174.4,alpha:0.72},0).wait(1).to({y:-177.7,alpha:0.806},0).wait(1).to({y:-180,alpha:0.868},0).wait(1).to({y:-181.6,alpha:0.912},0).wait(1).to({y:-182.9,alpha:0.946},0).wait(1).to({y:-184,alpha:0.974},0).wait(1).to({regY:0,y:-187.5,alpha:1},0).wait(19));

	// Слой 4
	this.title_3 = new lib.title_3();
	this.title_3.setTransform(-2,-201.2);
	this.title_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_3).wait(9).to({_off:false},0).wait(1).to({regX:-0.3,regY:57.6,x:-2.3,y:-171.4},0).wait(1).to({y:-190.8},0).wait(1).to({y:-203.5},0).wait(1).to({y:-212.7},0).wait(1).to({y:-220.5},0).wait(1).to({y:-227.1},0).wait(1).to({y:-232.1},0).wait(1).to({y:-235.7},0).wait(1).to({y:-238.3},0).wait(1).to({y:-240.1},0).wait(1).to({y:-241.5},0).wait(1).to({y:-242.6},0).wait(1).to({regX:0,regY:0,x:-2,y:-301.2},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.net_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(0,12.5,0.445,0.313);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:6.1,y:57.3},6).to({alpha:0},7).wait(1));

	// net.png
	this.instance_1 = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.08,y:7.2},5,cjs.Ease.get(1)).to({scaleY:0.89,y:-10},5,cjs.Ease.get(-1)).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.icon_3 = new lib.icon_3_1();
	this.icon_3.setTransform(0,12.5);

	this.timeline.addTween(cjs.Tween.get(this.icon_3).to({scaleY:1.08,y:20.7},5,cjs.Ease.get(1)).to({scaleY:0.89,y:1.1},5,cjs.Ease.get(-1)).to({scaleY:1,y:12.5},4,cjs.Ease.get(1)).wait(1));

	// icon_3.png
	this.icon_2 = new lib.icon_2_1();
	this.icon_2.setTransform(14.4,6.2);

	this.timeline.addTween(cjs.Tween.get(this.icon_2).to({scaleY:1.08,y:13.9},5,cjs.Ease.get(1)).to({scaleY:0.89,y:-4.5},5,cjs.Ease.get(-1)).to({scaleY:1,y:6.2},4,cjs.Ease.get(1)).wait(1));

	// Слой 7
	this.icon_5 = new lib.icon_5_1();
	this.icon_5.setTransform(-15,-6.6);

	this.timeline.addTween(cjs.Tween.get(this.icon_5).to({scaleY:1.08,y:0},5,cjs.Ease.get(1)).to({scaleY:0.89,y:-15.9},5,cjs.Ease.get(-1)).to({scaleY:1,y:-6.6},4,cjs.Ease.get(1)).wait(1));

	// icon_2.png
	this.icon_1 = new lib.icon_1();
	this.icon_1.setTransform(-19.4,5);

	this.timeline.addTween(cjs.Tween.get(this.icon_1).to({scaleY:1.08,y:12.5},5,cjs.Ease.get(1)).to({scaleY:0.89,y:-5.6},5,cjs.Ease.get(-1)).to({scaleY:1,y:5},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-90.5,202,181);


(lib.header_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// Слой 1
	this.header = new lib.header();
	this.header.setTransform(-3.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.header).to({y:39.8},9,cjs.Ease.get(1)).to({y:-394.3},8,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.6,-73.7,821.3,147.4);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(22).call(this.frame_44).wait(1));

	// Слой 3
	this.instance = new lib.Символ4();
	this.instance.setTransform(-0.6,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(21).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-59.3,7.8,0.689,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({scaleX:0.84,x:-152.1},0).wait(1).to({scaleX:0.92,x:-199.2},0).wait(1).to({scaleX:0.96,x:-224.8},0).wait(1).to({scaleX:0.99,x:-238.4},0).wait(1).to({scaleX:1,x:-247.2},0).wait(1).to({scaleX:0.88,x:-173},0).wait(1).to({scaleX:0.8,x:-126.9},0).wait(1).to({scaleX:0.75,x:-96.1},0).wait(1).to({scaleX:0.71,x:-73.1},0).wait(1).to({scaleX:0.68,x:-54.1},0).wait(1).to({scaleX:0.65,x:-37.8},0).wait(1).to({scaleX:0.63,x:-24.7},0).wait(1).to({scaleX:0.61,x:-14.3},0).wait(1).to({scaleX:0.6,x:-6.3},0).wait(1).to({scaleX:0.59,x:0.1},0).wait(1).to({scaleX:0.58,x:5.2},0).wait(1).to({scaleX:0.57,x:9.4},0).wait(1).to({scaleX:0.57,x:13},0).wait(1).to({scaleX:0.56,x:16.2},0).wait(1).to({regX:0.1,scaleX:0.56,x:19.1},0).to({_off:true},1).wait(1).to({_off:false,regX:0,scaleX:0.41,skewY:180,x:9},0).wait(1).to({scaleX:0.71,x:156.2},0).wait(1).to({scaleX:0.84,x:216.5},0).wait(1).to({scaleX:0.92,x:254},0).wait(1).to({scaleX:0.96,x:274.8},0).wait(1).to({scaleX:0.98,x:286.8},0).wait(1).to({scaleX:1,x:295.2},0).wait(1).to({scaleX:0.83,x:211},0).wait(1).to({scaleX:0.72,x:160.4},0).wait(1).to({scaleX:0.65,x:126.9},0).wait(1).to({scaleX:0.6,x:101.9},0).wait(1).to({scaleX:0.56,x:81},0).wait(1).to({scaleX:0.52,x:63.6},0).wait(1).to({scaleX:0.5,x:50.1},0).wait(1).to({scaleX:0.48,x:39.6},0).wait(1).to({scaleX:0.46,x:31.6},0).wait(1).to({scaleX:0.45,x:25.3},0).wait(1).to({scaleX:0.44,x:20.2},0).wait(1).to({scaleX:0.43,x:15.9},0).wait(1).to({scaleX:0.42,x:12.3},0).wait(1).to({scaleX:0.41,x:9},0).to({_off:true},1).wait(1));

	// Слой 1
	this.net = new lib.net_1();
	this.net.setTransform(1.3,45);

	this.timeline.addTween(cjs.Tween.get(this.net).wait(1).to({regX:6.1,regY:55.2,x:-139.2,y:100.2},0).wait(1).to({x:-199.3},0).wait(1).to({x:-236.6},0).wait(1).to({x:-257.2},0).wait(1).to({x:-269.2},0).wait(1).to({regX:0,regY:0,x:-283.7,y:45},0).wait(1).to({regX:6.1,regY:55.2,x:-202,y:100.2},0).wait(1).to({x:-153.9},0).wait(1).to({x:-121.2},0).wait(1).to({x:-96.9},0).wait(1).to({x:-76.9},0).wait(1).to({x:-59.6},0).wait(1).to({x:-45.2},0).wait(1).to({x:-33.5},0).wait(1).to({x:-24.3},0).wait(1).to({x:-17},0).wait(1).to({x:-11.1},0).wait(1).to({x:-6.2},0).wait(1).to({x:-2.1},0).wait(1).to({x:1.4},0).wait(1).to({x:4.5},0).wait(1).to({regX:0,regY:0,x:1.3,y:45},0).wait(1).to({regX:6.1,regY:55.2,x:160.3,y:100.2},0).wait(1).to({x:226.8},0).wait(1).to({x:270.2},0).wait(1).to({x:297.4},0).wait(1).to({x:313.7},0).wait(1).to({x:324.3},0).wait(1).to({regX:0,regY:0,x:326.2,y:45},0).wait(1).to({regX:6.1,regY:55.2,x:241.7,y:100.2},0).wait(1).to({x:185.5},0).wait(1).to({x:147.9},0).wait(1).to({x:119.8},0).wait(1).to({x:96.6},0).wait(1).to({x:76.8},0).wait(1).to({x:60.7},0).wait(1).to({x:48.1},0).wait(1).to({x:38.3},0).wait(1).to({x:30.5},0).wait(1).to({x:24.3},0).wait(1).to({x:19.1},0).wait(1).to({x:14.7},0).wait(1).to({x:10.8},0).wait(1).to({regX:0,regY:0,x:1.3,y:45},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-45.5,202,181);


(lib.net_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.net_1 = new lib.Символ2();
	this.net_1.setTransform(-1.2,-45);

	this.timeline.addTween(cjs.Tween.get(this.net_1).to({y:-55.7},6,cjs.Ease.get(-1)).to({y:-70},8,cjs.Ease.get(1)).to({y:-58.3},7,cjs.Ease.get(-1)).to({y:-45},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-90.5,202,181);


// stage content:



(lib.game_banner_app_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var clickkyTAG = clickkyTAG;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
		window.onmessage = function(message) {
			if(
			typeof message === 'object'
			&& typeof message.data === 'object'
			&& typeof message.data.key === 'string'
			&& message.data.key === 'clickky_banner_22429'
			) {
									
			_this.victory_mc.icon.instance.image.src = message.data.icon;
			_this.victory_mc.title_3.text.text = message.data.title_3;
			_this.victory_mc.app_name.text.text = message.data.app_name;
			_this.victory_mc.title_4.text.text = message.data.title_4;
			_this.victory_mc.btn.btn_txt.text.text = message.data.button;
			_this.header_1.header.title_1.text.text = message.data.title_1;
			_this.header_1.header.title_2.text.text = message.data.title_1;
			clickkyTAG = message.data.target_url;
			
			var rate = parseFloat(message.data.rating);
			if(rate < 0) {rate = 0;}
			if(rate > 5) {rate = 5;}
			var x = (5 - rate) * (_this.victory_mc.rate.rate_in.instance.image.width / 5) * -1;
			_this.victory_mc.rate.rate_in.instance.mask.x = x;
		
			}
		};
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
			
			_this.bg_gard.x = windowSize.width/2;
			_this.bg_gard.y = windowSize.height;
			
			_this.bg.x = 0;
			_this.bg.y = windowSize.height;
			
			_this.cloud.x = windowSize.width/2;
			_this.cloud.y = windowSize.height/3;
			
			_this.blink.x = windowSize.width/2;
			_this.blink.y = windowSize.height/2;
			
			_this.net_2.x = windowSize.width/2;
			_this.net_2.y = windowSize.height;
			
			_this.header_1.x = windowSize.width/2;
			_this.header_1.y = windowSize.height/5;
			
			_this.fall_mc.x = windowSize.width/2;
			_this.fall_mc.y = 0;
			
			_this.score.x = windowSize.width;
			_this.score.y = windowSize.height;
		
			_this.victory_mc.x = windowSize.width/2;
			_this.victory_mc.y = windowSize.height/2;
			
			
			//Scale
		
			_this.bg.scaleX = 1;
			_this.bg.scaleY = 1;
			
			if(windowSize.width < windowSize.height) {
				
			_this.bg.scaleX = 0.9;
			_this.bg.scaleY = 0.9;
				
			_this.blink.scaleX = 0.9;
			_this.blink.scaleY = 1.5;
				
			_this.fall_mc.scaleX = 0.9;
			_this.fall_mc.scaleY = 0.9;
				
			_this.score.scaleX = 0.9;
			_this.score.scaleY = 0.9;
				
			_this.header_1.scaleX = 0.9;
			_this.header_1.scaleY = 0.9;
				
			}
			
			if(windowSize.width < 767) {
				
			_this.bg.scaleX = 0.5;
			_this.bg.scaleY = 0.5;
				
			_this.fall_mc.scaleX = 0.3;
			_this.fall_mc.scaleY = 0.3;
				
			_this.score.scaleX = 0.5;
			_this.score.scaleY = 0.5;
				
			_this.header_1.scaleX = 0.4;
			_this.header_1.scaleY = 0.4;
				
			_this.net_2.scaleX = 0.5;
			_this.net_2.scaleY = 0.5;
				
			_this.cloud.scaleX = 0.5;
			_this.cloud.scaleY = 0.5;
				
			_this.victory_mc.scaleX = 0.6;
			_this.victory_mc.scaleY = 0.6;
			
			_this.fall_mc.icon_3.scaleX = 1.8;
			_this.fall_mc.icon_3.scaleY = 1.8;
			
			_this.fall_mc.icon_2.scaleX = 1.8;
			_this.fall_mc.icon_2.scaleY = 1.8;
			
			_this.fall_mc.icon_1.scaleX = 1.8;
			_this.fall_mc.icon_1.scaleY = 1.8;
			
			_this.fall_mc.icon_5.scaleX = 1.8;
			_this.fall_mc.icon_5.scaleY = 1.8;
			
			_this.fall_mc.icon_31.scaleX = 1.8;
			_this.fall_mc.icon_31.scaleY = 1.8;
			
			_this.fall_mc.icon_52.scaleX = 1.8;
			_this.fall_mc.icon_52.scaleY = 1.8;
			
			_this.fall_mc.icon_11.scaleX = 1.8;
			_this.fall_mc.icon_11.scaleY = 1.8;
			
			_this.fall_mc.icon_51.scaleX = 1.8;
			_this.fall_mc.icon_51.scaleY = 1.8;
			}
			
			if(windowSize.width < 767 && windowSize.width > windowSize.height) {
				
			_this.victory_mc.scaleX = 0.5;
			_this.victory_mc.scaleY = 0.5;
				
			}
			
		
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		
		//Actions
		
		_this.net_2.net_1.net.icon_1.visible = false;
		_this.net_2.net_1.net.icon_2.visible = false;
		_this.net_2.net_1.net.icon_3.visible = false;
		_this.net_2.net_1.net.icon_5.visible = false;
		
		_this.fall_mc.icon_3.addEventListener("mousedown", Icon_3); 
		function Icon_3() {
			console.log('net');
			_this.fall_mc.icon_3.visible = false;
			_this.net_2.net_1.net.icon_3.visible = true;
			_this.net_2.net_1.gotoAndPlay(1);
			_this.net_2.net_1.net.play();
			_this.net_2.net_1.gotoAndPlay(1);
			_this.blink.play();
			_this.score.play();
		}
		
		_this.fall_mc.icon_31.addEventListener("mousedown", Icon_31); 
		function Icon_31() {
			console.log('net');
			_this.fall_mc.icon_31.visible = false;
			_this.net_2.net_1.net.icon_31.visible = true;
			_this.net_2.net_1.gotoAndPlay(1);
			_this.net_2.net_1.net.play();
			_this.net_2.net_1.gotoAndPlay(1);
			_this.blink.play();
			_this.score.play();
		}
		
		_this.fall_mc.icon_2.addEventListener("mousedown", Icon_2); 
		function Icon_2() {
			console.log('net');
			_this.fall_mc.icon_2.visible = false;
			_this.net_2.net_1.net.icon_2.visible = true;
			_this.net_2.net_1.gotoAndPlay(23);
			_this.net_2.net_1.net.play();
			_this.blink.play();
			_this.score.play();
		}
		
		_this.fall_mc.icon_1.addEventListener("mousedown", Icon_1); 
		function Icon_1() {
			console.log('net');
			_this.fall_mc.icon_1.visible = false;
			_this.net_2.net_1.net.icon_1.visible = true;
			_this.net_2.net_1.gotoAndPlay(1);
			_this.net_2.net_1.net.play();
			_this.blink.play();
			_this.score.play();
		}
		
		_this.fall_mc.icon_11.addEventListener("mousedown", Icon_11); 
		function Icon_11() {
			console.log('net');
			_this.fall_mc.icon_11.visible = false;
			_this.net_2.net_1.net.icon_1.visible = true;
			_this.net_2.net_1.gotoAndPlay(1);
			_this.net_2.net_1.net.play();
			_this.blink.play();
			_this.score.play();
		}
		
		_this.fall_mc.icon_5.addEventListener("mousedown", Icon_5); 
		function Icon_5() {
			console.log('net');
			_this.fall_mc.icon_5.visible = false;
			_this.net_2.net_1.net.icon_5.visible = true;
			_this.net_2.net_1.gotoAndPlay(23);
			_this.net_2.net_1.net.play();
			_this.blink.play();
			_this.score.play();
		}
		
		_this.fall_mc.icon_51.addEventListener("mousedown", Icon_51); 
		function Icon_51() {
			console.log('net');
			_this.fall_mc.icon_51.visible = false;
			_this.net_2.net_1.net.icon_5.visible = true;
			_this.net_2.net_1.gotoAndPlay(23);
			_this.net_2.net_1.net.play();
			_this.blink.play();
			_this.score.play();
		}
		
		_this.fall_mc.icon_52.addEventListener("mousedown", Icon_52); 
		function Icon_52() {
			console.log('net');
			_this.fall_mc.icon_52.visible = false;
			_this.net_2.net_1.net.icon_5.visible = true;
			_this.net_2.net_1.gotoAndPlay(23);
			_this.net_2.net_1.net.play();
			_this.blink.play();
			_this.score.play();
		}
		
		var onClick = function(evt) {
			console.log('click')
			if(clickkyTAG){
			window.open(clickkyTAG, "_blank");
			}
		};
		
		_this.victory_mc.addEventListener("click", onClick);
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 13
	this.victory_mc = new lib.victory_mc();
	this.victory_mc.setTransform(512.1,384.2,1,1,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.victory_mc).wait(1));

	// Слой 5
	this.score = new lib.score();
	this.score.setTransform(1023.1,767.1,1.11,0.991,0,0,0,196.3,123.4);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Слой 3
	this.fall_mc = new lib.fall_mc();
	this.fall_mc.setTransform(518.1,-35.2,1,1,0,0,0,9.4,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.fall_mc).wait(1));

	// Слой 12
	this.header_1 = new lib.header_1();
	this.header_1.setTransform(510.6,123.8);

	this.timeline.addTween(cjs.Tween.get(this.header_1).wait(1));

	// Слой 2
	this.net_2 = new lib.net_2();
	this.net_2.setTransform(512.1,767,1,1,0,0,0,-1.6,138.3);

	this.timeline.addTween(cjs.Tween.get(this.net_2).wait(1));

	// Слой 6
	this.blink = new lib.Символ6();
	this.blink.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.blink).wait(1));

	// Слой 8
	this.bg = new lib.Символ1();
	this.bg.setTransform(0.1,767.1,1,1,0,0,0,-804.1,33.4);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// Слой 10
	this.cloud = new lib.cloud_1();
	this.cloud.setTransform(512.1,224.2,1,1,0,0,0,749.1,6);

	this.timeline.addTween(cjs.Tween.get(this.cloud).wait(1));

	// Objects
	this.bg_gard = new lib.Символ19();
	this.bg_gard.setTransform(512.1,767.1,1,1,0,0,0,0.1,574.1);

	this.timeline.addTween(cjs.Tween.get(this.bg_gard).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,1.9,2010.4,1152.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
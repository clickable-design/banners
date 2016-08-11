(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Baloon.png?1470924939131", id:"Baloon"},
		{src:"images/dark.jpg?1470924939131", id:"dark"},
		{src:"images/money.png?1470924939131", id:"money"},
		{src:"images/mouse.png?1470924939131", id:"mouse"},
		{src:"images/push_the_button_psd_by_emey87d325ggq_02.png?1470924939131", id:"push_the_button_psd_by_emey87d325ggq_02"},
		{src:"images/push_the_button_psd_by_emey87d325ggq_05.png?1470924939131", id:"push_the_button_psd_by_emey87d325ggq_05"},
		{src:"images/vintovka.png?1470924939131", id:"vintovka"}
	]
};



// symbols:



(lib.Baloon = function() {
	this.initialize(img.Baloon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,170);


(lib.dark = function() {
	this.initialize(img.dark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,433);


(lib.money = function() {
	this.initialize(img.money);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,200);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.push_the_button_psd_by_emey87d325ggq_02 = function() {
	this.initialize(img.push_the_button_psd_by_emey87d325ggq_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,86);


(lib.push_the_button_psd_by_emey87d325ggq_05 = function() {
	this.initialize(img.push_the_button_psd_by_emey87d325ggq_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,73);


(lib.vintovka = function() {
	this.initialize(img.vintovka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,254);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.push_the_button_psd_by_emey87d325ggq_02();

	this.instance_1 = new lib.push_the_button_psd_by_emey87d325ggq_05();
	this.instance_1.setTransform(0.4,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,86);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AOiCNIAAhKIBQAAIAABKgAMQCNIAAkZIBfAAIAAEZgAHtCNIAAkYIBfAAIAABWIAzAAQAbAAAXAIQAWAIAOANQAPAOAHAQQAHAQAAATQAAAUgHARQgIASgPAOQgPAOgXAJQgWAIgbAAgAJMBKIAsAAQAOAAAHgIQAIgKAAgMQAAgLgHgJQgIgJgNAAIgtAAgADICNIAAkZICQAAQAdAAAWAIIAVALQAJAFAIAHQAOAOAIATQAHASAAATQABASgIARQgGAPgPAOQgPAOgVAIQgXAIgcAAIg0AAIAABWgAEngOIAvAAQAMAAAIgIQAHgJAAgMQAAgMgIgIQgIgKgPAAIgrAAgABWCNIgJglIhaAAIgKAlIhfAAIBmkZIBhAAIBlEZgAA7AuIgchbIgcBbIA4AAgAoyCNIAAkYIBhAAIAADJIBCAAIAAjKIBhABIAADJIBFAAIAAjKIBgAAIAAEZgAv1CNIAAkZICOAAQAjAAAYAMQAZALAMATQAMATABATQgBASgIAPQgKAPgQAIQAPAEAMAIQALALAGAOIAEANIACAPQAAAUgLASQgLATgYAMQgYALghAAgAuVBJIA0AAQANAAAIgFQAGgHAAgJQABgKgIgIQgHgGgNgBIg0AAgAuVgaIAkAAQAQAAAIgHQAJgGAAgJQAAgJgIgGQgIgGgOAAIgnAAgAO0AqIgVhmIAAhKIBWAAIAABKIgVBmg");
	this.shape.setTransform(101.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.8,28.3);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("ABkC6IAAhFIAFABQAHAAAIgFQAIgFAEgJQAIgOACgeQAEgdAAgmIgChUIAAgDIEGAAIAAEZIheAAIAAjLIhMAAIAAAOQgBA2gFAjQgGAkgIATQgKAVgNAMQgIALgRAEQgRAFgVgBQgVABgJgEgAuLC9QgSAAgPgDQgPgDgOgFQgbgKgSgTQgTgSgJgbQgKgaAAgiQAAgnALgbQAKgdAUgUQAUgSAZgKQAZgJAeAAQA2AAAhAUQAfAUANAaQAMAaABAXIhZAAQgOgsgiAAIgDAAQgQAAgLALQgMAMgGAQQgGAUAAATQAAAUAGASQAGASAMAKQAMALASAAQAQAAAOgKQAOgLAEgZIBdAAQgBAMgDALQgCAKgHALQgKAWgTAQQgSAQgaAJQgZAKgcAAgAPEC2IADiWIhiCWIhaAAIAAkYIBdAAIgDCRIBiiRIBWAAIAAEYgAJ3C2IAAheIghAAIguBeIhsAAIBDhxQgQgFgOgLQgOgMgHgRQgJgRABgTQgBgUAMgUQAMgTAdgOQAdgOAuAAICSAAIAAEZgAIwgUQgHAHgBAKQAAAHAIAIQAHAIAMgBIA2AAIAAguIgzAAQgOgBgIAIgAiiC2IAAkWIDkAAIAABFIiFAAIAAAiIBwAAIAABDIhwAAIAAApICMAAIAABDgAnMC2IAAkZICRAAQAcABAXAIIAUAKQAJAFAIAIQAPAOAIASQAHASAAARQAAATgHAQQgHASgPAOQgPANgVAIQgWAJgcAAIg0AAIAABVgAlsAaIAuAAQAMgBAIgIQAHgJAAgJQABgMgJgJQgHgJgPAAIgrAAgAqaC2IAAjMIhSAAIAAhNIEFAAIAABNIhTAAIAADMgANwh8QgSgFgLgNQgLgMAAgRQAAgIACgKIAeAAIACAJIACAFQAEAEAIADIAgAHQAPAAAQgHQAQgGAAgMIAAgDIAfAAQACAKABAHQAAASgMAMQgMANgTAFIgTAFIgTACQgVAAgTgHg");
	this.shape.setTransform(105.4,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.7,38);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("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");
	this.shape.setTransform(240.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,481.6,30.3);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AR0CKQgXgKgPgQQgPgQgIgVQgHgUAAgWQAAgXAHgSQAIgVAPgQQAPgRAVgKQAMgGAMgDQANgCANAAQAcAAAWAJQAWAKAPARQAPAQAIAVQAEAKACAJQACALAAALIAAACQAAAWgHAVQgHAUgPAQQgOAQgXAKQgWAIgcABQgcgBgWgIgASQgUQgJAHgGANQgFAMAAATQAAAeALAQQAMAQATAAQAUAAAKgRQAKgRAAgeQABgUgHgLQgFgMgJgGQgKgGgKgBQgMABgKAGgAG9CKQgWgKgPgQQgQgQgHgVQgIgUAAgWQAAgXAIgSQAHgVAPgQQAPgRAWgKQALgGAMgDQANgCANAAQAcAAAXAJQAVAKAQARQAPAQAHAVQAFAKACAJQABALAAALIAAACQABAWgIAVQgGAUgPAQQgPAQgWAKQgWAIgdABQgbgBgXgIgAHagUQgJAHgGANQgGAMABATQAAAeALAQQAMAQASAAQAUAAALgRQAKgRAAgeQAAgUgGgLQgGgMgJgGQgKgGgKgBQgMABgJAGgALfCQQgNAAgMgCQgLgCgMgFQgUgHgOgOQgPgPgHgUQgIgUABgaQAAgeAHgVQAJgWAPgPQAPgOAUgHQATgHAXAAQAqAAAYAPQAZAPAJAVQAJATACASIhFAAQgKgigbAAIgCAAQgMAAgJAJQgJAJgFAMQgFAPABAPQAAAPAEAOQAFANAJAJQAKAIANAAQANAAALgIQALgIACgUIBHAAQABAJgDAIQgCAJgFAJQgIAQgOAMQgOANgUAIQgTAGgWAAgA2ZCQQgNAAgMgCQgLgCgLgFQgVgHgOgOQgOgPgIgUQgHgUAAgaQAAgeAIgVQAJgWAOgPQAPgOAVgHQATgHAXAAQAqAAAYAPQAYAPAKAVQAJATACASIhFAAQgLgigaAAIgDAAQgMAAgIAJQgKAJgEAMQgFAPAAAPQAAAPAFAOQAEANAKAJQAJAIANAAQANAAALgIQALgIADgUIBHAAQAAAJgCAIQgCAJgFAJQgIAQgOAMQgPANgTAIQgUAGgVAAgAXFCMIACh0IhLB0IhFAAIAAjYIBHAAIgCBvIBLhvIBCAAIAADYgAOZCMIAAieIhAAAIAAg6IDJAAIAAA6IhAAAIAACegACiCMIAAjYIBwAAQAWAAAQAGIARAIQAGAEAGAGQAMALAGAOQAFAOABANQAAANgGANQgFAOgMAKQgKALgSAHQgQAFgWABIgoAAIAABCgADsATIAjAAQAKAAAGgHQAFgGABgHQAAgJgHgIQgFgGgMAAIghAAgAA1CMIAAibIg9AAIAACbIhKAAIAAjYIDRAAIAADYgAkyCMIACh0IhLB0IhFAAIAAjYIBHAAIgCBvIBLhvIBCAAIAADYgAo0CMIAAjYIBKAAIAADYgAsTCMIAAjXIBJAAIAABCIAnAAQAVAAARAGQASAEAKALQALAJAGAOQAFANABAOQgBAPgFAOQgGANgMAMQgMALgRAGQgRAGgUABgArKBYIAhAAQALAAAGgHQAGgGAAgKQAAgJgGgGQgGgHgJAAIgjAAgAt1CMIAAhWIAFgvIgmCFIg0AAIgmiHIAFAxIAABWIhDAAIAAjYIBYAAIAmCCIAliCIBYAAIAADYgAyHCMIgHgdIhHAAIgHAdIhJAAIBNjYIBNAAIBNDYgAycBDIgVhFIgWBFIArAAgAWEhfQgNgFgJgKQgJgJAAgMQAAgHACgIIAXAAIABAHIACAEQACADAIADIAYAEQAMABAMgFQANgFAAgJIgBgDIAYAAQACAIAAAFQAAAOgJAJQgJAKgOAFIgPADIgPABQgRAAgOgEgAlyhfQgOgFgJgKQgJgJAAgMQAAgHADgIIAWAAIABAHIACAEQADADAHADIAXAEQANABAMgFQAMgFAAgJIAAgDIAYAAQACAIAAAFQAAAOgJAJQgJAKgOAFIgPADIgQABQgPAAgOgEg");
	this.shape.setTransform(154.6,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309.1,29.4);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AEkAAIg+AAQAAAAAAABQAABghEBDQhDBDhfAAQAAAAgBAAQheAAhDhDQhDhDAAhgQAAgBAAAAIg+AAAgBjjQABAAAAAAQBfAABDBDQBDBDABBdIiVAAAjlAAQABhdBChDQBChBBcgCQACAAABAAIAAg8AgBhMIAAiXAgBhMQAeAAAXAWQAXAXAAAfQAAAfgXAXQgXAXgeAAQggAAgXgXQgXgXAAgfQAAAAAAAAIiWAAAhPAAQABgfAWgXQAWgVAegBQACAAABAAAgBEgIAAg5IAAia");
	this.shape.setTransform(29.3,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_1.setTransform(28.9,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,60.5,59.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Baloon();
	this.instance.setTransform(66.7,85.2,0.501,0.501,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,86.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Baloon();
	this.instance.setTransform(66.7,85.2,0.501,0.501,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,86.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Baloon();
	this.instance.setTransform(66.7,85.2,0.501,0.501,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.7,86.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Baloon();
	this.instance.setTransform(0,46.3,0.712,0.712,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.7,151.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Baloon();
	this.instance.setTransform(94.5,121.1,0.712,0.712,179.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.5,122.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Baloon();
	this.instance.setTransform(119.5,0,0.712,0.712,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.3,110.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vintovka();
	this.instance.setTransform(0,0,0.753,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,191.2);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Baloon();
	this.instance.setTransform(71.9,193.7,0.515,0.515,-179.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEFNIAJqZ");
	this.shape.setTransform(41.5,80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(27.6,92.6,0.305,0.305,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,193.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Baloon();
	this.instance.setTransform(67.8,182.6,0.501,0.501,179);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADFEIgFqH");
	this.shape.setTransform(35.4,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(0,74.6,0.305,0.305,-81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.6,183.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Baloon();
	this.instance.setTransform(91.6,263.2,0.712,0.712,179);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAEHMIgHuX");
	this.shape.setTransform(45.6,108.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(99.9,104,0.426,0.426,0,81.4,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,102.9,264.7);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Baloon();
	this.instance.setTransform(89.8,352.1,0.733,0.733,179);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAFHaIgJuz");
	this.shape.setTransform(42.3,192.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(-0.3,196.7,0.426,0.426,-96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,82.7,101.9,271.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Baloon();
	this.instance.setTransform(97.6,266.1,0.712,0.712,179);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAEHMIgHuX");
	this.shape.setTransform(51.5,111.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(0,104,0.426,0.426,-81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,267.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.mouse();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape_1.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(92,43,1,1,0,0,0,92,43);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,86);


(lib.Символ53 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ54();
	this.instance.setTransform(92,43,1,1,0,0,0,92,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184,86);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(101.4,14.2,1,1,0,0,0,101.4,14.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-17,236,66);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ46();
	this.instance.setTransform(282,-43,1,1,0,0,0,101.4,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13,x:296.5,y:-39.9},14).to({scaleX:1,scaleY:1,x:282,y:-43},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(169.3,-47.6,1,1,0,0,0,217,19);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:18.9,scaleX:1.13,scaleY:1.13,x:169.4,y:-45.2},14).to({regY:19,scaleX:1,scaleY:1,x:169.3,y:-47.6},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-100.6,482.3,114);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(240.8,15.1,1,1,0,0,0,240.8,15.1);
	this.instance.shadow = new cjs.Shadow("rgba(255,51,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17,517,68);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(181.2,10.5,1,1,0,0,0,154.6,14.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,51,0,1)",0,0,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.6,-21.2,349,67);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(301.1,111.8,1.333,1.333,0,0,0,250.3,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.44,scaleY:1.44,x:304.7,y:118.9},14,cjs.Ease.get(-1)).to({scaleX:1.33,scaleY:1.33,x:301.1,y:111.8},15,cjs.Ease.get(1)).wait(18));

	// Слой 2
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(206.7,95.8,1,1,0,0,0,240.8,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:1.08,scaleY:1.08,x:200.6,y:101.5},14,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:206.7,y:95.8},16,cjs.Ease.get(1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,9.7,517,122);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(29.2,28.9,1,1,88.7,0,0,29.2,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29.3,scaleX:1.07,scaleY:1.07,rotation:125.4,x:28.1,y:30.4},14).to({regY:28.8,scaleX:1,scaleY:1,rotation:69.2,x:29.3,y:28.9},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-1.5,60.1,60.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(-26.4,-69.7,1,1,0,0,0,70.3,75.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -112))];
	this.instance.cache(-2,-2,145,155);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjimPIHFMf");
	this.shape.setTransform(18.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(0,104,0.426,0.426,-81.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-145.2,196.6,261.8);


(lib.Символ21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(42.2,198.3,1,1,0,0,0,47.2,61.2);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, -45))];
	this.instance_1.cache(-2,-2,99,127);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADHMIgFuX");
	this.shape.setTransform(43.5,103.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	// Слой 1
	this.instance_2 = new lib.money();
	this.instance_2.setTransform(11.8,114,0.426,0.426,-96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,101.5,263.1);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(47.6,153.2,1,1,0,0,0,33.3,43.1);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(30, 0, 0, -180))];
	this.instance.cache(-2,-2,71,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADFEIgFqH");
	this.shape_1.setTransform(48.5,86.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(0,59,0.305,0.305,-51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.8,200.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ31();
	this.instance.setTransform(33.3,142.5,1,1,0,0,0,33.3,43.1);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(32, 0, 0, 180))];
	this.instance.cache(-2,-2,71,90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADFEIgFqH");
	this.shape.setTransform(34.2,75.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(69.8,72.7,0.297,0.297,0,81.4,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,189.4);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.setTransform(43.5,143.6,1,1,0,0,0,33.3,43.1);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 19))];
	this.instance.cache(-2,-2,71,90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AADFEIgFqH");
	this.shape.setTransform(44.4,76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(27.6,92.6,0.305,0.305,-111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,190.5);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(195.9,36.6,1,1,0,0,0,67.2,55.4);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, 0, 90))];
	this.instance.cache(-2,-2,138,115);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AHHhFIuNCL");
	this.shape.setTransform(101.5,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 1
	this.instance_1 = new lib.money();
	this.instance_1.setTransform(99.9,104,0.426,0.426,0,81.4,-98.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18.8,267.7,135.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m8.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ20_1();
	this.instance.setTransform(47.4,48.5,1,1,0,0,0,47.4,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:28.1,y:719.9},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.8,200.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m1.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(42.2,46.2,1,1,0,0,0,42.2,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:747.2},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,193.7);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m4.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(42.2,46.2,1,1,0,0,0,42.2,46.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:54.2,y:792.2},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,190.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m10.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(35.8,41.9,1,1,0,0,0,35.8,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:769.9},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.6,183.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m6.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(34.9,40.8,1,1,0,0,0,34.9,40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-38.1,y:719.7},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,189.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m9.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ21_1();
	this.instance.setTransform(48.2,57,1,1,0,0,0,48.2,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:98.2,y:771},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,101.5,263.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m7.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(49.9,58.3,1,1,0,0,0,49.9,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:89.9,y:707.3},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,102.9,264.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m11.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(49.9,58.3,1,1,0,0,0,49.9,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-287.3,y:-439.2},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.7,-145.2,196.6,261.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m5.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(48.2,57,1,1,0,0,0,48.2,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:28.2,y:677},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,82.7,101.9,271.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.parent.m3.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(49.9,58.3,1,1,0,0,0,49.9,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:682.6,y:33.7},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18.8,267.7,135.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.parent.m2.gotoAndPlay(1);
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(1));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(49.9,58.3,1,1,0,0,0,49.9,58.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:89.9,y:706.3},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.9,267.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(74.5,95.5,1,1,0,0,0,74.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:91},24).to({y:95.5},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,191.2);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 19
	this.instance_3 = new lib.Символ19_1();
	this.instance_3.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(92.1,330.8,1,1,0,0,0,23,29);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-2,-2,50,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_2 = new lib.Символ18_1();
	this.instance_2.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// mouse
	this.instance_3 = new lib.Символ17_1();
	this.instance_3.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Символ50 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ1();
	this.instance.setTransform(74.5,95.5,1,1,0,0,0,74.5,95.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,191.2);


(lib.Символ49 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ34();
	this.instance.setTransform(284.4,33,1,1,0,0,0,250.3,59.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-354.6},14).to({x:284.4},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17,517,122);


(lib.Символ48 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ44();
	this.instance.setTransform(264.7,85.6,1,1,0,0,0,217,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:889.3},14).to({x:264.7},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17,466.3,76);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.m7 = new lib.Символ12();
	this.m7.setTransform(397.5,65.8,1,1,0,0,0,47.4,48.5);

	this.m11 = new lib.Символ11();
	this.m11.setTransform(516.5,63.5,1,1,0,0,0,42.2,46.2);

	this.m3 = new lib.Символ10();
	this.m3.setTransform(187.5,54.6,1,1,0,0,0,42.2,46.2);

	this.m9 = new lib.Символ9();
	this.m9.setTransform(289.5,59.2,1,1,0,0,0,35.8,41.9);

	this.m5 = new lib.Символ8();
	this.m5.setTransform(90.4,69.1,1,1,0,0,0,34.9,40.8);

	this.m8 = new lib.Символ7();
	this.m8.setTransform(324.9,151.1,1,1,0,0,0,48.2,57);

	this.m6 = new lib.Символ6();
	this.m6.setTransform(449.7,153.4,1,1,0,0,0,49.9,58.3);

	this.m10 = new lib.Символ5();
	this.m10.setTransform(149.7,153.3,1,1,-150,0,0,50,58.3);

	this.m4 = new lib.Символ4();
	this.m4.setTransform(237.9,83.3,1,1,0,0,0,48.2,57);

	this.m2 = new lib.Символ3();
	this.m2.setTransform(549.6,155.4,1,1,98,0,0,49.9,58.2);

	this.m1 = new lib.Символ2();
	this.m1.setTransform(49.9,152.4,1,1,0,0,0,49.9,58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1},{t:this.m2},{t:this.m4},{t:this.m10},{t:this.m6},{t:this.m8},{t:this.m5},{t:this.m9},{t:this.m3},{t:this.m11},{t:this.m7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,8.4,618.5,398.3);


(lib.Символ42 = function(mode,startPosition,loop) {
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
	this.mouse = new lib.Символ16_1();
	this.mouse.setTransform(-3,-188.9,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,38.2);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(335.5,297.1,1,1,180,0,0,297.4,105.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,0,614.9,394.5);


// stage content:
(lib.binarium600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.pricel.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.pricel.x = stage.mouseX;
			this.pricel.y = stage.mouseY;
		}
		
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.text.gotoAndPlay(1);
		    this.text2.gotoAndPlay(1);
		    this.pistol.gotoAndPlay(1);
			this.button.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.text.gotoAndPlay(15);
		    this.text2.gotoAndPlay(15);
		    this.pistol.gotoAndPlay(15);
			this.button.gotoAndPlay(15);
		}
		
		this.cursor = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pricel
	this.pricel = new lib.Символ32();
	this.pricel.setTransform(219.8,103.9);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// text2
	this.text2 = new lib.Символ48();
	this.text2.setTransform(-329.5,146.5,1,1,0,0,0,211.9,42.8);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// button
	this.button = new lib.Символ53();
	this.button.setTransform(298.8,251.4,1,1,0,0,0,92,43);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// text
	this.text = new lib.Символ49();
	this.text.setTransform(291.2,145.5,1,1,0,0,0,240.8,42.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// pistol
	this.pistol = new lib.Символ50();
	this.pistol.setTransform(414,297.8,1,1,0,0,0,74.5,95.5);

	this.timeline.addTween(cjs.Tween.get(this.pistol).wait(1));

	// money
	this.instance = new lib.Символ39();
	this.instance.setTransform(280.6,476,1,1,0,0,0,316.4,197.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.mouse = new lib.Символ42();
	this.mouse.setTransform(37.5,-68.4,1,1,0,0,0,31.3,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// fon
	this.instance_1 = new lib.dark();
	this.instance_1.setTransform(631,416,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.4,133,1188.4,690.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
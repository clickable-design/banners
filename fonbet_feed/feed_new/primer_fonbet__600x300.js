(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#006699",
	manifest: [
		{src:"images/energyball.png?1468924883619", id:"energyball"},
		{src:"images/gozon.jpg?1468924883619", id:"gozon"},
		{src:"images/shadow.png?1468924883619", id:"shadow"}
	]
};



// symbols:



(lib.energyball = function() {
	this.initialize(img.energyball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,144);


(lib.gozon = function() {
	this.initialize(img.gozon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,730,481);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,30);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005A77").s().dr(-266,-168.5,532,337);
	this.shape.setTransform(256,168.5,1,1.033,0,-14.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,0,619,337);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtGgIAAifQCUAXChAMQBXAAArgXQArgVAAgtIAAg4QAAgTgGgQIAngEQgFgNgLgLQgWgZhEABIhlAAQhsgBhDggIDQgbIFEgoIAOAOQANAOAKAPQAGALAFANQAMAeADAlIgoADIABAaIAAA5QAABNgcA1QgcA1g2AbQg3AbhAALQhBALhZAAQh7AAi3gXgAoPGqIhjkWIAoAAIgJgXIC/gTIAOArIgoAAIAjBpIAFAAIAjhpIAoAAIATg2ICNgRIA1gGIgcBMIgoAAIhnEWgArFhQIgoAJIgZhDIAmgSIhkkWIDSAAIBGDPIgmARIAgBeIAogKIBODoIi/ATgAjtjHIAAgBIDag6Ih7FKIg1AGIiNARgADFAYQgMgFgKgHIgMgJQgXgQgPgZQgPgYgIgdQgJghAAgoIAAhBQAAghAIgcIBcgYIAZgHIhBARIhcAYQAPg0AsgjQAMgJAOgJQAvgaBLgNIApgHQA9gHBMAAQBNAAB4ALIAqgKIBHAGIAACbQjLgYhKAAQhmAAgmARQgnARAAApIAAA9QAAAiAcASQASAJAcAEQASADAWAAIBoAAQBMAAA2AOQAkAKAbAQQAMAHALAJIlEAoIjQAbIgFgDgAjilVIAogLIAbhSIDLAAIgLAeQg3AMg3ANIBIgPIg2CSIjaA6g");
	this.shape.setTransform(83.8,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167.6,87.9);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gozon();
	this.instance.setTransform(-45.5,55.3,1,1.299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,55.3,730,624.8);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AspBvQgIgBgHgCQgHgDgFgEQgFgEgEgFQgEgGgCgHIgDgQQgCgLADgeQADgRAHgXQADgIAEgHIAIgMIALgJQAGgDAHgCQAKgDAYgCQARAAAMACIAXAEIgFAdQgVgCgbAAQgKAAgGACQgHADgFAGQgFAGgDALQgEAKgCASQgCARAAAKQAAAKACAGQADAGAFADQAGADAKAAQAXAAAdgCIABAcQgMAEgNABQgMACgSAAgAluBuIAYirIAmAAIgJA+IAYAAQASAAALADQAMADAHAHQAGAGACALQADALgDAQQgCAQgEAKQgEALgHAGQgHAGgLACQgLADgPAAQgiAAgmgCgAlEBSIAkgBQAGgBADgCQAEgDABgGQACgFABgIIABgOQAAgFgCgDQgCgDgEgCQgFgBgIAAIgZAAgAokBuIgBgeQAKgCAEgCQAIgFAGgKQAFgIAIgZIANg3QACgIAEgHQAEgGAFgEQAFgEAHgDQAIgCAJAAIBJAAIgYCrIgmAAIAViPIgVAAQgJAAgEADQgEAEgCAJIgNA1QgJAbgFALQgGALgHAIQgGAHgIAFQgIAEgJABIgJABIgJgBgAAABuQgLAAgIgCQgIgDgFgGQgEgFgCgIQgCgIABgJIAOhhQABgHADgHQAEgGAFgEQAFgFAHgCQAFgCAJAAIAqAAIAmACIgFAcIhAAAQgIAAgDADQgDADgBAIIgEAYIBEAAIgDAbIhEAAIgDAhQgBAHABADQACADAHAAIBAAAIgBAcIgkACgAMcBuIgZhNIgDAAIguBNIgqAAIA5hZIgdhSIAmAAIAWBGIADAAIAthGIAoAAIg2BSIAgBZgAJvBuIAOhjQACgMAFgNIgCAAIgNAUIhIBoIgnAAIAYirIAlAAIgOBgQgCAMgFAQIACAAQAFgMAIgLIBIhlIAnAAIgYCrgAEUBuIAYirIAlAAIgUCPIAvAAIAViPIAlAAIgUCPIAvAAIAUiPIAmAAIgZCrgADMBuIAOhjQACgMAEgNIgCAAIgMAUIhIBoIgoAAIAYirIAlAAIgNBgQgCAMgFAQIACAAQAFgMAIgLIBIhlIAmAAIgYCrgAh0BuIALhNIg8AAIgLBNIgmAAIAYirIAmAAIgJBAIA8AAIAJhAIAmAAIgYCrgApgBuIAOhjQACgMAFgNIgCAAIgNAUIhIBoIgnAAIAYirIAlAAIgOBgQgCAMgFAQIACAAQAFgMAIgLIBIhlIAnAAIgYCrgACyhMQgIgDgFgFQgFgGgBgHQgCgHACgIIAZAAQgDALAEAFQAEAFAJAAQAJAAAEgFQAFgFABgLIAYAAQAAAIgDAHQgEAHgFAGQgGAFgIADQgIADgKAAQgKAAgJgDg");
	this.shape.setTransform(61.6,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-8.1,171.3,22.7);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlGBXQgIgBgHgCQgGgDgGgEQgFgEgEgFQgDgGgDgHIgDgQQgBgLADgcQACgRAHgZQADgIAEgHIAJgMIALgJQAFgDAIgCQAJgDAZgCQARAAAMACIAWAEIgFAdQgUgCgcAAQgKAAgGACQgHADgFAGQgEAGgEALQgDAMgDAQQgCARAAAKQAAAKADAGQACAGAGADQAFADAKAAQAXAAAdgCIACAcQgNAEgMABQgMACgSAAgADtBWIAYirIAnAAIgJBAIAYAAQASAAALADQAMADAGAHQAHAGACAJQACALgCAQQgCAQgFAKQgEALgHAGQgHAGgLACQgKADgQAAQghAAgngCgAEXA6IAlgBQAGgBADgCQADgDACgGQACgFABgIIABgOQAAgFgCgDQgCgDgFgCQgEgBgJAAIgZAAgABOBWIAYirQAUgBArgBQARAAALACQALADAHAFQAHAFACAJQADAJgCAOIgEAQQgDAGgEAFQgEAFgGACQgGADgIABIAAABQAJABAHACQAGADAEAGQADAGABAJQABAIgCAKQgCAOgEAIQgEAIgIAFQgHAFgLACQgLACgPAAQgjAAgogCgAB3A7IApgBQAFgBAEgDQADgDADgFIACgMQACgIgBgEQgBgFgCgDQgDgCgEgCIgqgBgACCgPIAmgBQAFgBADgCQADgDACgEQACgFABgHQACgMgFgEQgEgEgNAAIgcAAgAAXBWIgGgtIg5AAIgTAtIgoAAIBJihQACgFADgCQAEgDAFAAIAiAAQAEAAAEADQAEADAAAFIAbCggAANALIgIhEIgFAAIgcBEIApAAgAjABWIATiMIgzAAIAEgfICNAAIgEAfIgzAAIgUCMg");
	this.shape.setTransform(25,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-3.4,74.5,17.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBBLIACgbIhRAAIgGAbIgUAAIAGgvIANAAQAGgNALgYIAKgoQABgGADgFQADgEAEgEQAEgDAFgBQAFgCAGAAIA1AAIgOBmIAQAAIgGAvgAidg0QgDADgBAGIgKAmQgJAWgGALIApAAIALhSIgOAAQgGAAgDACgADQAwIgDggIgsAAIgNAgIgdAAIA0h0QACgDADgBQACgCADAAIAaAAQAEAAADACQACADAAACIATBzgADJgEIgFgyIgGAAIgTAyIAeAAgAA1AwIANhkIgkAAIADgWIBlAAIgDAWIglAAIgOBkgAgMAwIgEggIgrAAIgNAgIgdAAIA0h0QABgDADgBQADgCADAAIAaAAQADAAADACQADADAAACIARBzgAgTgEIgGgyIgFAAIgUAyIAfAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-7.5,47.2,15.1);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.494,1],-42.9,0,43.9,0).s().p("AoXCcIDYk3INXAAIjYE3g");
	this.shape.setTransform(-43.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","#000000","rgba(0,0,0,0)"],[0,0.494,1],-43.4,0,43.4,0).s().p("AodCcIDYk3INjAAIjYE3g");
	this.shape_1.setTransform(42.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-15.7,194.1,31.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADTBPIACgcIhUAAIgGAcIgVAAIAGgwIANAAQAIgOAKgZIALgqIAEgLIAHgIQAEgDAGgCQAFgCAHAAIA3AAIgQBrIARAAIgGAwgAC2g0QgDACgCAHIgKAnQgJAXgGAMIAqAAIAMhWIgPAAQgGAAgDADgAjMAyIgJgEIgIgHIgFgJIgCgMQgBgJACgVIAHggIAFgLIAHgJIAIgHIAKgEQAHgCATgBIANAAIALADIAJAEIAHAHIAFAJIADAMIABAPIgCASQgEAVgDAJQgCAGgEAFQgCAFgEAEIgJAGIgKAFQgOACgKAAQgSAAgHgDgAiyg2QgFADgEAFQgDAFgCAIQgDAJgCAOQgCALAAAIQAAAIACAFQACAEAFADQAEACAHAAQAIAAAFgCQAFgDAEgFQADgEADgJIAEgUIACgWQAAgIgCgFQgCgEgFgDQgEgBgIAAQgHAAgFABgAhoAzIASh/IAsgBIAqABIgEAWIg5AAIgEAfIASAAQAOAAAIABQAKADAFAEQAFAFABAIQACAFgCALQgBAMgEAHQgDAIgFAEQgGAFgIABQgIACgLAAIg2gCgAhJAfIAdgBIAGgCIAEgHIACgJIAAgJQAAgDgBgBIgFgDIgeAAgAApA0QgJAAgGgCQgFgDgEgEQgDgEgCgFQgBgGABgHIAKhIQABgGACgFQADgEAEgEIAJgFQAFgCAHAAIAfABIAdABIgEAVIgxAAQgFAAgCADQgDACAAAGIgDATIAzAAIgDAUIgzAAIgDAXQgBAFACACQACADAFAAIAwAAIgBAVIgbACgAFNAzIgFghIgsAAIgOAhIgeAAIA2h4QACgDADgCQACgCAEAAIAbAAQADAAADADQADACAAADIAUB3gAFFgDIgGg0IgFAAIgVA0IAgAAgAkfAzIAQhqIgtAAIgPBqIgdAAIASh/IBnAAIgSB/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.1,-7.9,72.3,16);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.627)").s().p("AvmXcMAAAgu3IfNAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-150,200,300);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().rr(-70.8,-22.4,141.6,44.8,5.6);
	this.shape.setTransform(0,0,1.11,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AB4BWIgGgtIg8AAIgSAtIgmAAIBGihQACgFAEgCQAEgDAEAAIAkAAQAFAAADADQAEADABAFIAaCggABuALIgIhEIgIAAIgbBEIArAAgAg6BWIALhNIg8AAIgLBNIgmAAIAYirIAmAAIgJBCIA8AAIAJhCIAkAAIgWCrg");
	this.shape.setTransform(20.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,4.9,31.6,17.3);


(lib.team_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text(" ", "italic bold 23px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 155;
	this.text.setTransform(-2,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.4,-16.4,158.8,36.4);


(lib.team_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.text = new cjs.Text(" ", "italic bold 23px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 153;
	this.text.setTransform(-0.7,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-16.4,157.4,36.4);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlYFZIAAqxIKxAAIAAKxg");
	mask.setTransform(34.6,34.5);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag3BiQAChuA1hWIA4AmQguBJABBWg");
	this.shape.setTransform(37.5,59.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgAAQBWg1BsAAIAAA/QhfAGhAAmg");
	this.shape_1.setTransform(59.3,37.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeBWQgOgBgJgKIhXhWQgKgKAAgMQAAgMAJgJIAdgYQAKgJANABQAOABAKAKIBWBWQAKALAAAMQAAAMgJAJIgdAZQgJAHgLAAIgDgBgAg1g2QgFAEAEAIQADAFAKAJIBJBJQAJAJAFADQAHAEAFgEQAFgFgEgGQgCgEgKgKIhJhIQgKgLgFgCQgEgDgDAAQgDAAgCACg");
	this.shape_2.setTransform(30.1,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATBSIhWgaQgOgEgHgLQgHgMAEgMIAIgVIgNgEIANglIANAEIAHgUQAEgNANgFQANgGAOAEIBWAaQAOAEAHALQAHAMgEAMIgHASIANAEIgNAmIgNgEIgIAWQgEANgNAFQgHADgIAAQgGAAgGgBgAgsAUIBDAVQANADAHgBQAHgBAFgHIh4gjQAAAOAVAGgAg1gkIB5AkQABgIgEgFQgFgGgOgEIhEgVQgGgCgGAAQgMAAgHAKg");
	this.shape_3.setTransform(15.4,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AlTiIQAjg5A1g1QA2g3A9glIHcKlg");
	this.shape_4.setTransform(34.9,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiLgIQAahfA6hSIDeCTQgiAugPA8QgNAwgEBFIkLABQAChuAZhUg");
	this.shape_5.setTransform(16.7,50.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhKhOIAngKIAZBPIAPgGIgWhOIAigKIA6C2IglAKIgbhYIgPAFIAZBXIglALg");
	this.shape_6.setTransform(53.5,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ai6g5QCrhpDKgDIAAEIQh5AKhlA5g");
	this.shape_7.setTransform(50.4,16.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,69.1);


(lib.energyball_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.energyball();
	this.instance.setTransform(-68.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-72,137,144);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(132.1,78.1,1.508,1.508,-5.5,0,0,83.8,44);
	this.instance.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:43.9,scaleX:1.64,scaleY:1.64,rotation:1.8,y:77.9},14,cjs.Ease.get(-1)).to({scaleX:1.78,scaleY:1.78,rotation:9.5,y:78},15,cjs.Ease.get(1)).to({scaleX:1.65,scaleY:1.65,rotation:2,y:78.1},15,cjs.Ease.get(-1)).to({regY:44,scaleX:1.51,scaleY:1.51,rotation:-5.5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,264.1,156.1);


(lib.Символ60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.setTransform(319.4,168.5,1,1,0,0,0,265.9,168.5);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:322.2},9,cjs.Ease.get(-1)).to({x:325.3},10,cjs.Ease.get(1)).to({x:322.4},10,cjs.Ease.get(-1)).to({x:319.4},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,619,337);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ57();
	this.instance.setTransform(319.4,168.5,1,1,0,0,0,265.9,168.5);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:321.2},10,cjs.Ease.get(-1)).to({x:323.3},12,cjs.Ease.get(1)).to({x:321.5},11,cjs.Ease.get(-1)).to({x:319.4},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,619,337);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ60();
	this.instance.setTransform(303.9,215.5,1,1,0,0,0,309.5,168.5);

	this.instance_1 = new lib.Символ59();
	this.instance_1.setTransform(323.8,168.5,1,1,0,0,0,309.5,168.5);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,0,638.9,383.9);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ56();
	this.instance.setTransform(83.8,45,1,1,0,0,0,83.8,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ61();
	this.instance_1.setTransform(83.9,45,1,1,0,0,0,132.1,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-33,264.1,156.1);


(lib.Символ42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(316.5,336.5,1,1,0,0,0,316.5,316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:331.7},14,cjs.Ease.get(-1)).to({y:326.5},15,cjs.Ease.get(1)).to({y:331.9},16,cjs.Ease.get(-1)).to({y:336.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,75.3,730,624.8);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 42
	this.instance = new lib.Символ42();
	this.instance.setTransform(-79.7,8.3,0.127,0.127,0,0,0,34.4,10.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1).to({regX:20.3,regY:13.5,scaleX:0.67,scaleY:0.67,x:-70.7,y:4.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-66.7,y:3.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-63.8,y:2.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-62.4,y:2},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-61.6,y:1.7},0).wait(1).to({regX:34.1,regY:10.2,scaleX:1.15,scaleY:1.15,x:-45,y:-2.2},0).to({regX:34.2,scaleX:1,scaleY:1,x:-49.9,y:-0.8},4,cjs.Ease.get(-1)).to({scaleX:1.04,scaleY:1.04,x:-48.5,y:-1.2},4,cjs.Ease.get(1)).wait(42).to({regX:20.3,regY:13.5,scaleX:1.07,scaleY:1.07,x:-64.4,y:2.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-65.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-65.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-65.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-66.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-66.4,y:2.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-66.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-66.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-66.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-66.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-67},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({regX:34.2,regY:10.2,x:-51.4,y:-1.3},0).wait(1).to({regX:20.3,regY:13.5,scaleX:0.8,scaleY:0.8,x:-52,y:1.8,alpha:0.479},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-47.7,y:1.6,alpha:0.329},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-43.7,y:1.4,alpha:0.19},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:-40.9,y:1.3,alpha:0.091},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:-39.4,y:1.2,alpha:0.041},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:-38.7,alpha:0.015},0).wait(1).to({regX:34.2,regY:10.2,scaleX:0.5,scaleY:0.5,x:-31.4,y:-0.5,alpha:0},0).to({_off:true},1).wait(13));

	// Символ 41
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(259.6,3.2,1,1,0,0,0,65.4,6.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({regX:61.6,regY:3.2,x:253.9,y:0},0).wait(1).to({x:251.3},0).wait(1).to({x:247.7},0).wait(1).to({x:243.2},0).wait(1).to({x:237.5},0).wait(1).to({x:230.4},0).wait(1).to({x:221.8},0).wait(1).to({x:211.4},0).wait(1).to({x:198.9},0).wait(1).to({x:184.3},0).wait(1).to({x:167.5},0).wait(1).to({x:148.4},0).wait(1).to({x:125.6},0).wait(1).to({x:96.7},0).wait(1).to({x:60.1},0).wait(1).to({x:16.3},0).wait(1).to({regX:65.4,regY:6.4,x:-28.4,y:3.2},0).to({x:69.5},3,cjs.Ease.get(1)).to({x:54.2},3,cjs.Ease.get(-1)).to({x:59.6},3,cjs.Ease.get(1)).wait(47).to({regX:61.6,regY:3.2,scaleX:1.03,scaleY:1.03,x:57.9,y:0},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:58.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:59.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:59.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:60.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:60.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:60.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:61.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:61.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:61.4},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({x:61.5},0).wait(1).to({regX:65.5,regY:6.4,scaleX:1.08,scaleY:1.08,x:65.7,y:3.4},0).wait(1).to({regX:61.6,regY:3.2,scaleX:0.77,scaleY:0.77,x:39.2,y:0,alpha:0.479},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:32.7,alpha:0.329},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:26.8,alpha:0.19},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:22.5,alpha:0.091},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:20.3,alpha:0.041},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:19.2,alpha:0.015},0).wait(1).to({regX:65.3,regY:6.4,scaleX:0.48,scaleY:0.48,x:20.4,y:1.6,alpha:0},0).to({_off:true},1).wait(13));

	// Символ 40
	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(-301,4.4,1,1,0,0,0,30.9,7.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:25,regY:5.5,x:-253,y:2.3,alpha:0.298},0).wait(1).to({x:-221.3,alpha:0.473},0).wait(1).to({x:-200.4,alpha:0.589},0).wait(1).to({x:-183.5,alpha:0.682},0).wait(1).to({x:-168.6,alpha:0.765},0).wait(1).to({x:-156.5,alpha:0.832},0).wait(1).to({x:-146.9,alpha:0.885},0).wait(1).to({x:-139.6,alpha:0.925},0).wait(1).to({x:-134,alpha:0.957},0).wait(1).to({x:-129.6,alpha:0.981},0).wait(1).to({regX:30.9,regY:7.6,x:-120.2,y:4.4,alpha:1},0).to({x:-130.1},4,cjs.Ease.get(-1)).to({x:-125.2},3,cjs.Ease.get(1)).wait(61).to({regX:25,regY:5.5,scaleX:1.03,scaleY:1.03,x:-134.6,y:2.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-136.2,y:2.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-137.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-137.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-138.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-139.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-139.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-140},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-140.3,y:2.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-140.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-140.6},0).wait(2).to({regX:30.9,regY:7.6,scaleX:1.08,scaleY:1.08,x:-134.3,y:4.8},0).wait(1).to({regX:25,regY:5.5,scaleX:0.77,scaleY:0.77,x:-104.3,y:1.8,alpha:0.479},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:-93.8,y:1.7,alpha:0.329},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:-84.1,y:1.4,alpha:0.19},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:-77.2,y:1.3,alpha:0.091},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-73.7,y:1.2,alpha:0.041},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-71.9,alpha:0.015},0).wait(1).to({regX:31,regY:7.6,scaleX:0.48,scaleY:0.48,x:-68,y:2.2,alpha:0},0).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.1,-8.7,107,28);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42_1();
	this.instance.setTransform(316.5,310.3,1,0.72,0,0,0,316.5,316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,136.6,730,449.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-15.7,194.1,31.4);


(lib.koeff_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text(" ", "italic bold 24px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.setTransform(42.8,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(-41.2,0.8);

	this.instance_1 = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-15.8,194.1,32.8);


(lib.koeff_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text(" ", "italic bold 24px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.setTransform(43.2,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABQBBIASiBIAdAAIgGAxIASAAQANAAAJACQAJACAFAFQAFAFACAHQABAIgCAMQgBAMgDAIQgEAIgFAEQgFAFgJACQgHACgMAAIg3gCgABwAsIAcAAQAEgBACgCQADgCABgEIADgLIAAgKQAAgEgBgCQgCgDgDgBIgKgBIgTAAgAEFBBIAHgyIgSAAQgHAAgDADQgEACgCAHIgPAmIggAAIARgpQADgHAHgHQAGgEAHgBIAAgBQgGgBgFgDQgFgBgCgGIgDgLIAAgMQACgLADgHQAEgGAHgEQAGgEAJgCQAIgCAMAAQAZAAAaACIgSCBgADxgoIgEAFIgCAJIAAAJIACAHQACACADABQADACAFAAIAVAAIAFgmIgTAAQgLAAgFADgAAYBBIAIg3QgKAFgMADQgKADgGAAQgJAAgGgCQgGgCgEgEQgEgEgBgGQgBgEABgJIAIg2IAcAAIgGAxQgCAIADADQADACAFAAQAIAAAHgCQAHgBAKgFIAHg2IAeAAIgTCBgAhgBBIAKhJQACgLADgKIgBAAIgKASIg3BMIgeAAIATiBIAcAAIgLBIQgBAKgEAMIACAAQAEgJAGgJIA2hMIAeAAIgTCBgAjpBBIAJg6IguAAIgIA6IgdAAIASiBIAdAAIgHAyIAuAAIAHgyIAdAAIgSCBg");
	this.shape.setTransform(-42.7,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-15.8,194.3,32.8);


(lib.koeff_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.text = new cjs.Text(" ", "italic bold 24px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.setTransform(88,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(47.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,-16.7,194.2,35.2);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlYFZIAAqxIKxAAIAAKxg");
	mask.setTransform(34.6,34.5);

	// Слой 3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(34.6,34.5,1,1,0,0,0,34.6,34.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,69.1);


(lib.energyball_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// energyball - копия
	this.energyball = new lib.energyball_in();
	this.energyball.setTransform(-4.4,2.4,0.735,0.735,0,0,180);
	this.energyball.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.energyball).to({scaleX:1,scaleY:1,alpha:1},8).to({scaleX:0.74,scaleY:0.74,alpha:0},8).wait(1));

	// energyball
	this.energyball_1 = new lib.energyball_in();

	this.timeline.addTween(cjs.Tween.get(this.energyball_1).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-72,137,144);


(lib.data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text(" ", "italic bold 18px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 280;
	this.text.setTransform(-2,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(-1.7,-38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,102,204,0)","#0066CC","rgba(0,102,255,0)"],[0,0.494,1],-179.8,0,179.8,0).s().p("A8FFCIGZqDMAxyAAAImZKDg");
	this.shape.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.8,-60.2,359.6,116.4);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(6));

	// Слой 1 - копия: 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(-0.1,9.6,1.051,1.625);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnNBAIACgXIhDAAIgFAXIgRAAIAFgoIAKAAQAGgKAIgUQAEgLAGgXIADgJIAFgGQAEgDAEgBQAEgCAGABIAsAAIgNBUIAOAAIgGAogAnkgpQgDABgBAGIgIAfQgHASgFAJIAiAAIAKhEIgMAAQgFAAgDADgABiAqIgJgCIgIgEIgFgGIgEgIIgCgJQAAgGABgRQACgJAEgQIAEgJIAFgHIAHgFQADgCAFgBQAFgCAPgBIASABIANACIgDASIgdgBQgGgBgDACQgFABgCAEQgDADgCAIIgEARIgBAOQAAAGABAEQACAEADABQAEACAFAAIAggCIABARIgPAEIgSABgApSAqIgJgCIgIgEIgFgGIgEgIIgCgJQAAgGABgRQACgJAEgQIAEgJIAFgHIAHgFQADgCAFgBQAFgCAPgBIASABIANACIgDASIgdgBQgGgBgDACQgFABgCAEQgDADgCAIIgEARIgBAOQAAAGABAEQACAEADABQAEACAFAAIAggCIABARIgPAEIgSABgAIgAqIgMgCIAEgQIALAAIAHgBIAFgDIAEgGIACgDIgFAAQgGAAgDgCQgCgDgBgFIgNg9IAXAAIAJA2QAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAIAEAAIAag4IAYAAIgkBKQgIAPgEAGQgEADgEACQgEACgFAAIgEABIgKgBgAFVApIAOhlIAmgBIAQABQAHABAEADQAFAEABAEQABAGgBAIIgCAKIgEAHQgCACgEACIgJACIAAABQAGABAEACQAEACACADQACACAAAFIAAALQgBAIgDAFQgCAFgFADQgEADgHABIgQABIgsgBgAFtAZIAQAAIAJgBIAFgCIAEgEIABgIIABgHIgCgDQgBAAAAgBQAAAAgBAAQgBAAAAgBQgBAAgBAAIgHgBIgRAAgAF0gTIAXAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIAEgEIABgHQABgHgCgDQgDgCgIAAIgRAAgAg2ApIAPhlIAXAAIgGAmIAPAAQAIAAAHABQAHADAEAEQAEADABAHQACAFgCAJQgBAKgCAGQgDAGgEAEQgEADgHABQgEACgKAAIgrgBgAgdAYIAWAAQAEgBACgCQABgBAAgDIACgIIAAgIIgBgEIgCgCIgIgBIgPAAgAldApIAAgSIAIgDQAFgCAEgGQADgGAEgMIAIgiIAEgJQACgEADgDQADgCAFgBQAEgCAFABIAtAAIgPBlIgXAAIANhVIgNAAQgFAAgCACQgDACgBAGIgIAgQgFAPgEAHQgDAGgEAFQgEAEgFADQgEADgGAAIgFABIgGgBgAmRApQgHAAgFgCQgEgBgDgDQgDgDgBgFQgBgFABgFIAIg6IACgIQACgEAEgDIAHgDQAEgCAGAAIAZABIAWABIgDARIgmAAQgFgBgBACQgCACgBAFIgCAPIApAAIgCAQIgpAAIgDASQgBAEACACQABACAFAAIAmAAIgBARIgWABgAHvApIgEgWQgCgJgCgFQgCgFgDgBQgEgCgGAAIgIAAIAAAJIgFAjIgXAAIAPhlIAXAAIgFAdIgCAMIAHAAQAFAAAEgDQAEgCAEgFQAFgHAKgYIAYAAQgMAcgGAIQgEAGgFADQgFADgIABIAAAAQAIACAEADQAEADADAEQACAGACAKIAFAYgAE0ApIgEgbIgkAAIgLAbIgYAAIAshgQABgCACgCQACgCADABIAWAAQADAAACABQACACAAADIAQBfgAEugCIgFgpIgFAAIgQApIAaAAgACxApIAMhTIgfAAIADgSIBUAAIgCASIgfAAIgMBTgAh4ApIAMhTIgfAAIACgSIBVAAIgDASIgfAAIgLBTgAiwApIgDgbIgkAAIgLAbIgYAAIArhgQABgCADgCQACgCADABIAVAAQADAAACABQACACABADIAQBfgAi2gCIgFgpIgEAAIgRApIAaAAg");
	this.shape.setTransform(0.7,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");
	var mask_graphics_1 = new cjs.Graphics().p("AjyDzQhlhlAAiOQAAiNBlhlQBlhlCNAAQCOAABlBlQBlBlAACNQAACOhlBlQhlBliOAAQiNAAhlhlg");
	var mask_graphics_2 = new cjs.Graphics().p("AlxFyQiZiZAAjZQAAjYCZiZQCZiZDYAAQDZAACZCZQCZCZAADYQAADZiZCZQiZCZjZAAQjYAAiZiZg");
	var mask_graphics_3 = new cjs.Graphics().p("AnGHHQi9i9AAkKQAAkJC9i9QC9i9EJAAQEKAAC9C9QC9C9AAEJQAAEKi9C9Qi9C9kKAAQkJAAi9i9g");
	var mask_graphics_4 = new cjs.Graphics().p("AoIIJQjYjYAAkxQAAkwDYjYQDYjYEwAAQExAADYDYQDYDYAAEwQAAExjYDYQjYDYkxAAQkwAAjYjYg");
	var mask_graphics_5 = new cjs.Graphics().p("Ao3I4QjsjrAAlNQAAlMDsjrQDrjsFMAAQFNAADrDsQDsDrAAFMQAAFNjsDrQjrDslNAAQlMAAjrjsg");
	var mask_graphics_6 = new cjs.Graphics().p("ApXJYQj5j5AAlfQAAleD5j5QD5j5FeAAQFfAAD5D5QD5D5AAFeQAAFfj5D5Qj5D5lfAAQleAAj5j5g");
	var mask_graphics_7 = new cjs.Graphics().p("ApvJwQkCkDAAltQAAlsECkDQEDkCFsAAQFtAAEDECQECEDAAFsQAAFtkCEDQkDECltAAQlsAAkDkCg");
	var mask_graphics_8 = new cjs.Graphics().p("AqCKDQkLkLAAl4QAAl3ELkLQELkLF3ABQF4gBELELQELELgBF3QABF4kLELQkLELl4AAQl3AAkLkLg");
	var mask_graphics_9 = new cjs.Graphics().p("Aj2D3QhnhmAAiRQAAiQBnhmQBmhnCQAAQCRAABmBnQBnBmAACQQAACRhnBmQhmBniRAAQiQAAhmhng");
	var mask_graphics_10 = new cjs.Graphics().p("Ah4B5QgygyAAhHQAAhGAygyQAygyBGAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAQhGAAgygyg");
	var mask_graphics_11 = new cjs.Graphics().p("Ag9A+QgagaAAgkQAAgjAagaQAagaAjAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgjAAgagag");
	var mask_graphics_12 = new cjs.Graphics().p("AglAmQgQgQAAgWQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	var mask_graphics_13 = new cjs.Graphics().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_1,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_2,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_3,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_4,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_5,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_6,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_7,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_8,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_9,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_10,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_11,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_12,x:0.1,y:-0.1}).wait(1).to({graphics:mask_graphics_13,x:0.1,y:-0.1}).wait(1));

	// Слой 1 - копия: 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0066CC","#00FFCC"],[0,1],-29.8,64.2,29.9,-64.1).s().rr(-70.8,-22.4,141.6,44.8,5.6);
	this.shape_1.setTransform(-0.1,-0.1,1.11,1);
	this.shape_1._off = true;

	this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(13));

	// Слой 1 - копия: 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006699").s().rr(-70.8,-22.4,141.6,44.8,5.6);
	this.shape_2.setTransform(-0.1,1.1,1.11,1);
	this.shape_2._off = true;

	this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).wait(13));

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF3300","#FF6600"],[0,1],-29.8,64.2,29.9,-64.1).s().rr(-70.8,-22.4,141.6,44.8,5.6);
	this.shape_3.setTransform(-0.1,-0.1,1.11,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},8).wait(1).to({_off:false},0).wait(5));

	// Слой 1 - копия
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().rr(-70.8,-22.4,141.6,44.8,5.6);
	this.shape_4.setTransform(-0.1,1.1,1.11,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},8).wait(1).to({_off:false},0).wait(5));

	// Слой 2
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(-82,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-26.8,165.2,72.8);


(lib.black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10));

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(0,154,1,0.027);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.4,y:94.5},0).wait(1).to({scaleY:0.61,y:61.8},0).wait(1).to({scaleY:0.74,y:41.1},0).wait(1).to({scaleY:0.84,y:25.9},0).wait(1).to({scaleY:0.9,y:15.4},0).wait(1).to({scaleY:0.95,y:8.7},0).wait(1).to({scaleY:0.97,y:4.6},0).wait(1).to({scaleY:0.99,y:1.9},0).wait(1).to({scaleY:1,y:0},0).wait(1).to({scaleY:0.62,y:59.5},0).wait(1).to({scaleY:0.42,y:92.2},0).wait(1).to({scaleY:0.29,y:112.9},0).wait(1).to({scaleY:0.19,y:128.1},0).wait(1).to({scaleY:0.12,y:138.6},0).wait(1).to({scaleY:0.08,y:145.3},0).wait(1).to({scaleY:0.06,y:149.4},0).wait(1).to({scaleY:0.04,y:152.1},0).wait(1).to({scaleY:0.03,y:154},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,150,200,8);


(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22));

	// Слой 2 - копия: 2
	this.energyball = new lib.energyball_1();
	this.energyball.setTransform(-2.4,-0.8,0.708,0.708);
	this.energyball.alpha = 0;
	this.energyball.compositeOperation = "lighter";
	this.energyball._off = true;

	this.timeline.addTween(cjs.Tween.get(this.energyball).wait(1).to({_off:false},0).wait(1).to({regX:-2.2,regY:1.2,scaleX:7.55,scaleY:4.02,x:-32.9,y:-17.4,alpha:0.323},0).wait(1).to({scaleX:9.88,scaleY:5.15,x:-42.8,y:-23.3,alpha:0.432},0).wait(1).to({regX:0,regY:0,scaleX:10.9,scaleY:5.65,x:-23.2,y:-32.8,alpha:0.48},0).to({alpha:0},17).wait(1));

	// Слой 2 - копия
	this.energyball_1 = new lib.energyball_1();
	this.energyball_1.setTransform(-2.4,-0.8,0.708,0.708);
	this.energyball_1.alpha = 0;
	this.energyball_1.compositeOperation = "lighter";
	this.energyball_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.energyball_1).wait(1).to({_off:false},0).wait(1).to({regX:-2.2,regY:1.2,scaleX:7.55,scaleY:4.02,x:-32.9,y:-17.4,alpha:0.323},0).wait(1).to({scaleX:9.88,scaleY:5.15,x:-42.8,y:-23.3,alpha:0.432},0).wait(1).to({regX:0,regY:0,scaleX:10.9,scaleY:5.65,x:-23.2,y:-32.8,alpha:0.48},0).to({alpha:0},17).wait(1));

	// Слой 2
	this.energyball_2 = new lib.energyball_1();
	this.energyball_2.setTransform(-2.4,-0.8,0.708,0.708);
	this.energyball_2.alpha = 0;
	this.energyball_2.compositeOperation = "lighter";
	this.energyball_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.energyball_2).wait(1).to({_off:false},0).wait(1).to({regX:-2.2,regY:1.2,scaleX:7.55,scaleY:4.02,x:-32.9,y:-17.4,alpha:0.323},0).wait(1).to({scaleX:9.88,scaleY:5.15,x:-42.8,y:-23.3,alpha:0.432},0).wait(1).to({regX:0,regY:0,scaleX:10.9,scaleY:5.65,x:-23.2,y:-32.8,alpha:0.48},0).to({alpha:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(34.6,34.5,1,1,0,0,0,34.6,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,69.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQhLIAogMIAyBLIgXhTIAmgMIA4C3IgqAMIgwhMIAXBUIgmAMg");
	this.shape.setTransform(53.5,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhiAOIAXhQIAlAKIgKAiIAkAKIAIgeIAiALIgJAeIBPAUIgPAwg");
	this.shape_1.setTransform(15.1,52.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmDFQgkAAgOgDQgOgDgNgLQgMgLgDgOQgDgOAAg0IAAivIgXAAIAAg3IAXAAIAAg3IBpAAIAAA3IAcAAIAAA3IgcAAIAAC5QAAAiADAEQAEADAaAAIAAA5g");
	this.shape_2.setTransform(227.4,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3CqQgZgJgPgSQgPgQgFgVQgFgUAAgnIAAhkQAAguAMgaQAMgaAdgOQAbgOAlAAQArAAAdARQAdAQALAdQAMAcAAAzIAAAsIiHAAIAABLQAAAYADAHQADAGAIAAQAMAAAFgJQAEgKAAgZIAAguIBkAAIAAAaQAAAfgEATQgFASgOATQgOASgYALQgWAKgkAAQggAAgZgKgAgMhuQgCAHAAAdIAAAZIAdAAIAAgZQAAgbgDgIQgDgJgJAAQgJAAgDAIg");
	this.shape_3.setTransform(205.4,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANDPQgPgIgMgQIgHAaIhkAAIAAmnIBrAAIAABkQAMgOAPgIQAQgIATAAQAXAAAPAHQAQAHAIAMQAJANABALQACAMAAAnIAACbQAAAngFASQgGATgSANQgTAOgaAAQgTAAgQgIgAgMhLQgCAIAAAdIAACUQAAAcADAIQAEAIAHAAQAKAAADgJQADgHAAggIAAiQQAAgcgEgIQgDgIgJAAQgJAAgDAHg");
	this.shape_4.setTransform(177.8,35.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQCxIAAjvQAAgjgDgJQgCgIgLAAQgJAAgDAJQgDAKAAAmIAADqIhqAAIAAlaIBsAAIgCAgQALgTAPgKQARgKAWAAQAcAAARANQARANAFAUQAFASAAAvIAADyg");
	this.shape_5.setTransform(149.7,38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5CsQgZgIgNgPQgOgQgFgWQgGgXAAgsIAAhXQAAgxALgaQAKgcAbgRQAcgQAqAAQAiAAAZAKQAZALAPARQAOARAFASQAFASAAAlIAABUQAAAwgEAVQgGAWgPATQgPATgZAJQgYAJggAAQghAAgYgIgAgLhuQgDAHAAAbIAACaQAAAaADAHQADAIAIgBQAJAAADgGQADgHAAgXIAAieQAAgbgDgHQgDgIgJAAQgIAAgDAIg");
	this.shape_6.setTransform(121.9,38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcDUIAAmnIC5AAIAABVIhNAAIAABRIBFAAIAABOIhFAAIAACzg");
	this.shape_7.setTransform(98.3,35.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#348CBD").s().p("Ag3BiQAChuA2hWIA3AmQgtBHAABYg");
	this.shape_8.setTransform(37.4,59.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#348CBD").s().p("AhgAAQBVg1BsAAIAAA/QheAGhAAmg");
	this.shape_9.setTransform(59.3,37.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBXQgOgCgKgJIhWhXQgKgJAAgNQgBgNAKgIIAdgZQAJgIAOACQANABAKAKIBXBWQAKAJAAANQAAAMgJAIIgdAZQgJAIgLAAIgDAAgAg1g2QgGAEAEAIQADAEALAKIBIBJQAKAJAFADQAHADAEgDQAFgFgDgGQgCgDgKgLIhJhIQgKgKgFgDQgEgDgDAAQgDAAgCACg");
	this.shape_10.setTransform(30.1,29.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8DA8B2").s().p("AlTiHQAjg6A1g1QA2g3A9gmIHcKng");
	this.shape_11.setTransform(34.9,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#348CBD").s().p("AiMgIQAbhfA6hSIDeCTQgiAugQA8QgMAwgEBFIkLABQAChuAYhUg");
	this.shape_12.setTransform(16.7,50.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#348CBD").s().p("Ai5g5QCohoDLgEIAAEJQh3AJhmA5g");
	this.shape_13.setTransform(50.4,16.7);

	this.instance = new lib.Group();
	this.instance.setTransform(35,35,1,1,0,0,0,34.6,34.5);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,235.6,69.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Символ6();
	this.instance.setTransform(59.2,17.8,0.511,0.511,0,0,0,117.8,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,120.3,35.5);


// stage content:
(lib.primer_fonbet__600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var lastEventKey = null;
				var monts = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
				
				window.fonbet_callback = function (data) {
				
					var rootId = 1; // футбол
					var events = [];
					var currentTime = new Date().getTime() / 1000;
				
					if (data && typeof data === 'object') {
						for (var i in data) {
							var obj = data[i];
							if (obj && obj.sportRoot && obj.sportRoot == rootId && obj.startTime > currentTime) {
								events.push(obj);
							}
						}
					}
				
					if (events.length === 1) {
				
						showEvent(events[0]);
					} else if (events.length > 1) {
				
						showEvent(getRand(events));
						setInterval(function () {
							showEvent(getNext(events));
						}, 5 * 1000);
					}
				}
				
				showEvent = function (event) {
				
					var winFirst = event.factors[0]; // выиграет первая команда
					var winNoBody = event.factors[1]; // ничья
					var winSecond = event.factors[2]; // выиграет вторая команда
					winFirst.name; // название ставки , Англия
					winFirst.value; // ставка , 2.10
				
					event.team1; // название первой команды
					event.team2; // название второй команды
				
					var date = new Date();
					date.setTime(event.startTime * 1000);
				
					// дата начала матча
					date = lpadTime(date.getDate()) + " " + monts[date.getMonth()] + " " + date.toTimeString().substr(0, 5);
				
				
					_this.team_1.text.text = winFirst.name;
					_this.team_2.text.text = winSecond.name;
				
				
					_this.koeff_1.text.text = winFirst.value;
					_this.koeff_2.text.text = winNoBody.value;
					_this.koeff_3.text.text = winSecond.value;
				
					_this.date.text.text = date;
					 
					_this.hit.gotoAndPlay(1);
					_this.hit1.gotoAndPlay(1);
					_this.hit2.gotoAndPlay(1);
				
					
		
				
				}
				
				function lpadTime(num) {
					return ("00" + num).slice(-2);
				}
				
				
				function getRand(array) {
				
					var key;
					do {
						key = parseInt(Math.random() * array.length);
					} while (key == lastEventKey);
				
					lastEventKey = key;
				
					return array[lastEventKey];
				}
				
				function getNext(array) {
				
					lastEventKey++;
					if (lastEventKey >= array.length) {
						lastEventKey = 0;
					}
					return array[lastEventKey];
				}
				
				function createRequest() {
				
					var script = document.createElement('script');
					script.type = "text/javascript";
					script.src = "http://root-srv.fonbet.com/BetsService/line/news/all/ru?callback=fonbet_callback&" + Math.random();
				
					document.head.appendChild(script);
				}
				
				createRequest();
		var _this = this;
		stage.enableMouseOver();
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 600 * 2;
		stage.canvas.height = 300 * 2;
		stage.canvas.style.width = '600px';
		stage.canvas.style.height = '300px';
		
		this.btn1.addEventListener("mouseover", OverBtn_1);
		this.btn1.addEventListener("mouseout", OutBtn_1);
		
		this.btn2.addEventListener("mouseover", OverBtn_2);
		this.btn2.addEventListener("mouseout", OutBtn_2);
		
		this.btn3.addEventListener("mouseover", OverBtn_3);
		this.btn3.addEventListener("mouseout", OutBtn_3);
		
		stage.canvas.addEventListener("click", ClickToGoToWebPage);
		
		function OverBtn_1(){_this.btn1.gotoAndPlay(1);_this.black1.gotoAndPlay(1);}
		function OutBtn_1(){_this.btn1.gotoAndPlay(9);_this.black1.gotoAndPlay(10);}
		
		function OverBtn_2(){_this.btn2.gotoAndPlay(1);_this.black2.gotoAndPlay(1);}
		function OutBtn_2(){_this.btn2.gotoAndPlay(9);_this.black2.gotoAndPlay(10);}
		
		function OverBtn_3(){_this.btn3.gotoAndPlay(1);_this.black3.gotoAndPlay(1);}
		function OutBtn_3(){_this.btn3.gotoAndPlay(9);_this.black3.gotoAndPlay(10);}
		
		function ClickToGoToWebPage(){window.open(clickTAG, "_blank");}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
	this.btn3 = new lib.button();
	this.btn3.setTransform(500.4,254.4);

	this.btn2 = new lib.button();
	this.btn2.setTransform(300,254.4);

	this.btn1 = new lib.button();
	this.btn1.setTransform(99.6,254.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3}]}).wait(1));

	// Слой 14
	this.hit = new lib.hit();
	this.hit.setTransform(515.6,144.4,0.232,0.138);

	this.hit2 = new lib.hit();
	this.hit2.setTransform(117.2,144.4,0.232,0.138);

	this.hit1 = new lib.hit();
	this.hit1.setTransform(312,144.4,0.232,0.138);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hit1},{t:this.hit2},{t:this.hit}]}).wait(1));

	// Слой 13
	this.date = new lib.data();
	this.date.setTransform(299.8,113.7);

	this.timeline.addTween(cjs.Tween.get(this.date).wait(1));

	// teams
	this.team_2 = new lib.team_2();
	this.team_2.setTransform(499.4,143.4);
	this.team_2.shadow = new cjs.Shadow("#000000",0,2,19);

	this.team_1 = new lib.team_1();
	this.team_1.setTransform(97.8,143.4);
	this.team_1.shadow = new cjs.Shadow("#000000",0,2,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.team_1},{t:this.team_2}]}).wait(1));

	// koeff
	this.koeff_3 = new lib.koeff_3();
	this.koeff_3.setTransform(500.8,211.2);

	this.koeff_2 = new lib.koeff_2();
	this.koeff_2.setTransform(301.6,211.6);

	this.koeff_1 = new lib.koeff_1();
	this.koeff_1.setTransform(57.8,211.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.koeff_1},{t:this.koeff_2},{t:this.koeff_3}]}).wait(1));

	// text
	this.instance = new lib.Символ39();
	this.instance.setTransform(576.3,39.3,1.07,1.07,0,0,0,137.6,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(83.5,32.4,1.054,1.054,0,0,0,59.3,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// vs
	this.vs = new lib.Символ55();
	this.vs.setTransform(299.3,149.2,0.353,0.353,0,0,0,81.8,44.5);
	this.vs.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,10);

	this.timeline.addTween(cjs.Tween.get(this.vs).wait(1));

	// blue
	this.instance_2 = new lib.Символ58();
	this.instance_2.setTransform(52.8,127.5,1,1.318,0,0,0,309.5,168.5);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// dark
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-69.3,0,69.3).s().p("Egy+AK1IAA1oMBl9AAAIAAVog");
	this.shape.setTransform(273.6,68.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// plates
	this.black3 = new lib.black();
	this.black3.setTransform(500,150);

	this.black2 = new lib.black();
	this.black2.setTransform(300,150);

	this.black1 = new lib.black();
	this.black1.setTransform(100,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.black1},{t:this.black2},{t:this.black3}]}).wait(1));

	// bg
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(290.5,73,0.947,0.947,0,0,0,316.5,316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.6,52.6,901.3,508.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
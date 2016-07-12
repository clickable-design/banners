(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#006699",
	manifest: [
		{src:"images/circle_blick.png?1468329061900", id:"circle_blick"},
		{src:"images/silli.png?1468329061900", id:"silli"},
		{src:"images/zagl.png?1468329061900", id:"zagl"},
		{src:"images/zagl_2.png?1468329061900", id:"zagl_2"},
		{src:"images/Растровоеизображение12.jpg?1468329061900", id:"Растровоеизображение12"}
	]
};



// symbols:



(lib.circle_blick = function() {
	this.initialize(img.circle_blick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.silli = function() {
	this.initialize(img.silli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,188);


(lib.zagl = function() {
	this.initialize(img.zagl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.zagl_2 = function() {
	this.initialize(img.zagl_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Растровоеизображение12 = function() {
	this.initialize(img.Растровоеизображение12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,730,481);


(lib.Символ73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgvuAYNMAAAgwZMBfdAAAMAAAAwZg");
	this.shape.setTransform(305.5,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,310);


(lib.Символ72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.silli();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,188);


(lib.Символ67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(94.6,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.3,49);


(lib.Символ66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(67.3,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.6,49.2);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("As9ByQgJgBgLgDQgKgDgIgFQgHgGgFgJQgGgKAAgNIAAhLQAAgaATgNQASgOAlAAQAMAAAmAGIAAAgIgbgGQgMgCgLAAIgNABIgLACQgGADgDAEQgDAFAAAIIAABIQAAAMAKAGQAKAGAUAAQALAAAkgIIAAAgQgjAGgQAAgAo1BxIAAgcQAFACAIAAQAHAAAEgFQAEgEAAgJIAAiCICIAAIAACtIgmAAIAAiPIg8AAIAABpQAAALgDAHQgCAIgEAEQgEAEgGADIgNACIgOABQgOAAgGgBgANKBwIglg+IgkA+IgsAAIA7hZIg4hUIAsAAIAhA6IAig6IAsAAIg4BUIA7BZgAKeBwIAAh6IhIB6IgpAAIAAitIAkAAIAAB4IBIh4IApAAIAACtgAEvBwIAAitIAmAAIAACPIA0AAIAAiPIAnAAIAACPIA0AAIAAiPIAmAAIAACtgADpBwIAAh6IhIB6IgpAAIAAitIAkAAIAAB4IBIh4IApAAIAACtgAgbBwIAAitIB3AAIAAAeIhTAAIAAAmIBLAAIAAAeIhLAAIAAAtIBWAAIAAAegAhjBwIAAhLIhEAAIAABLIgmAAIAAitIAmAAIAABEIBEAAIAAhEIAmAAIAACtgAlvBwIAAitIAmAAIAABAIA5ABIANACIALAEQAFADADAEQADAEACAGQADAFAAAIIAAAfQAAAUgQALQgQAKggAAgAlJBSIAfAAQAPAAAGgEQAGgFAAgJIAAgQQAAgJgGgDQgHgDgOAAIgfAAgApvBwIAAh6IhIB6IgpAAIAAitIAlAAIAAB4IBIh4IApAAIAACtgAC1hSQgGgCgFgFQgEgFgDgGQgCgGAAgIIATAAQACAIADADQADAEAGAAQAMAAACgPIAUAAQgBAPgJAKQgEAFgGACQgGACgIAAQgHAAgGgCg");
	this.shape.setTransform(88.6,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.3,23.1);


(lib.Символ64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB6BXIgNguIg7AAIgNAuIglAAIA6itIAuAAIA5CtgABkANIgUhAIgBAAIgUBAIApAAgAg3BXIAAhLIhDAAIAABLIgmAAIAAitIAmAAIAABGIBDAAIAAhGIAmAAIAACtg");
	this.shape.setTransform(16.2,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,17.5);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak8BZQgJgBgLgDQgKgDgIgFQgHgGgFgJIgEgIQgCgHAAgIIAAhLQAAgIACgIQAEgPANgIQASgOAlAAQAMAAAmAGIAAAgIgbgGQgMgCgLAAIgNABIgLACQgGADgDAEQgDAFAAAIIAABIQAAAMAKAGQAKAGAUAAQALAAAkgIIAAAgQgjAGgQAAgADuBXIAAitIAmAAIAABCIArAAIAbADIALAEQAFADADAEQADAEACAEQADAFAAAIIAAAfQAAAUgQALQgLAHgSACIgTABgAEUA5IAfAAQAPAAAGgEQAGgFAAgJIAAgQQAAgIgGgEIAAAAQgHgDgOAAIgfAAgABTBXIAAitIBBAAQAQAAAMACQALACAGAEQAGAFADAHQADAHAAALIAAAVQAAAIgFAGQgGAHgGACIAAABQAIABAIAGQAIAHAAAKIAAAbQAAAWgQAJQgIAEgLACQgMACgQAAgAB5A5IAcAAQANAAAGgDQAGgEAAgIIAAgOQAAgJgEgEQgFgEgLAAIghAAgAB5gPIAbAAQANAAAEgDQAEgEAAgKIAAgJQAAgJgEgDQgEgDgOAAIgaAAgAAbBXIgOguIg4AAIgOAuIglAAIA6itIAtAAIA5CtgAAFANIgShAIgBAAIgUBAIAnAAgAi6BXIAAiPIgxAAIAAgeICIAAIAAAeIgxAAIAACPg");
	this.shape.setTransform(37.3,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.7,18.1);


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


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBHIAAgWQAbACAOAAIANAAQAFgBACgCQAFgEAAgNIAAgOIgpAAIgNgCQgHgCgDgDQgEgDgCgHQgDgEAAgJIAAgUQAAgKAEgIQADgIAEgEQAFgDAIgDIANgDIAfAAIAOADQAHADAFADQAEAEAEAIQADAIAAAKIAABBQAAAXgOAJQgHAFgKACQgLACgPAAQgSAAgXgCgAhSgwQgDACAAAKIAAAXQAAAHADACQADACANAAIAVAAIAAgiQAAgKgDgCQgEgCgOgBQgNAAgDADgAmtBHIAAgbQASAEAYACQAMgBAFgCQAGgDAAgGIAAgWQAAgFgEgDQgEgDgJABIgsAAIAAhMIBaAAIAAAZIg6AAIAAAdIAjABQAGABAGADQAHADAEAGQAEAEAAAHIAAAfQAAAIgDAHQgEAHgFAEQgEADgIACIgcACIgugCgAHlBJIgOgDQgIgCgEgEQgEgEgEgIQgDgHAAgLIAAhBQAAgLAEgIQAEgIAFgFQAGgDAIgDIAPgDIAQgBIAoADIAAAYQgfgEgMAAQgPAAgEADQgDACAAAMIAAARIAoAAIAMADQAIABADADQAEADACAGQACAFAAAKIAAATQAAALgDAHQgDAIgFAEQgEAEgIACIgOADgAHhAkQAAALADADQADACAOAAQANAAADgCQADgDAAgMIAAgUQAAgHgDgCQgDgDgOAAIgTAAgADlBJIgOgDQgIgCgEgEQgFgEgDgIQgEgHAAgLIAAhDQAAgKAEgIQADgIAFgEQAEgEAIgCIAOgDIAeAAIAOADQAIADAFADQAFAEADAIQADAIAAAKIAABDQAAALgDAHQgDAIgFAEQgFAEgIACIgOADgADkgwQgEACAAALIAABHQAAALAEADQADADAOAAQANAAADgDQAEgDAAgLIAAhHQAAgLgEgCQgDgEgNAAQgOAAgDAEgAjRBJIgOgDQgIgCgEgEQgFgEgDgIQgEgHAAgLIAAhDQAAgKAEgIQADgIAFgEQAEgEAIgCIAOgDIAeAAIAOADQAIADAFADQAFAEADAIQADAIAAAKIAABDQAAALgDAHQgDAIgFAEQgFAEgIACIgOADgAjSgwQgEACAAALIAABHQAAALAEADQADADAOAAQANAAADgDQAEgDAAgLIAAhHQAAgLgEgCQgDgEgNAAQgOAAgDAEgAFuBHIAAhsIgnAWIAAgbIAtgcIAbAAIAACNgABBBHIAAggQAAgMAHgKQAHgIAKgEIAUgGIAQgIQAHgEAAgGIAAgSQAAgHgFgCQgGgDgNAAQgXACgRADIAAgXQAWgGAYAAQAaAAANAJQANAHAAATIAAAUQAAAMgHAGQgHAIgKAFIgVAHQgKAEgHAEQgHAFAAAHIAAAIIBFAAIAAAXgAAHBHIAAgeIAjAAIAAAegAkvBHIAAgeIAiAAIAAAegAoABHIAAhsIgnAWIAAgbIAtgcIAaAAIAACNg");
	this.shape.setTransform(55.3,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.6,14.8);


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkiDpIAAnRIIpAAQAcAAAAAlIAAGHQAAAlgcAAg");
	this.shape.setTransform(97.2,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.1,0,58.4,46.7);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003265").s().p("Ai+BAIAAgXIAYAEIAQABQAMAAAFgDQAEgDABgIIAAgPQAAgJgVAAIgYAAIAAgSIAYAAQAQAAAAgMIAAgNQAAgGgEgDQgDgCgNAAQgMAAgXACIAAgUIAmgCQAZAAAKAFQAHADACAFQADAFAAAHIAAAWQAAAHgEAEQgDADgGABQAKAEAEADQAFAEgBAIIAAAUQAAAJgCAGQgEAGgFAEQgMAHgYAAQgRAAgcgDgACBBCIgNgCQgHgDgEgDQgEgEgDgHQgCgGAAgKIAAg7QAAgLADgHQAEgHAEgEQAGgEAHgCIAOgCIAOgBIAlACIAAAVQgdgDgLAAQgOAAgDACQgDADAAAKIAAAQIAkAAIAMACQAGACAEADQADADACAFQACAEAAAJIAAASQAAAKgDAGQgCAHgFAEQgEADgHADIgMACgAB9AhQAAAJADADQADACAMAAQANAAADgCQACgDAAgKIAAgSQAAgIgCgBQgEgDgMAAIgSAAgAAVBBIAAhiIgiATIAAgYIAngaIAYAAIAACBgAhIBBIAAgcIAgAAIAAAcg");
	this.shape.setTransform(19.1,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.2,13.5);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACbAlIAAgUIgHAAIgPAUIgUAAIATgXIgGgBIgFgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAIgBgGIAAgEQAAgEACgDQABgDADgCQAFgDANAAIAfAAIAAA2gACJgFQgDABAAADIAAACQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIADABIAFAAIALAAIAAgMIgKAAIgIABgAA1AlIAAg2IAQAAIAAASIALAAQARAAAFACQADACABADQACADAAAFIAAAGQAAAIgHADQgEADgFAAIgMABgABFAbIALAAQAHAAABgCQACgCAAgDIAAgDQAAgDgCgCIgIgBIgLAAgAAVAlIAAgZQgCAJgOAAIgGgBIgGgBQgFgCgBgEIgBgKIAAgUIAPAAIAAARQAAAGABACQACABAGAAQAHAAACgBQACgBAAgGIAAgSIASAAIAAA2gAgsAlIAAgnIgYAnIgTAAIAAg2IAPAAIAAAlIAZglIATAAIAAA2gAh5AlIAAggIggAAIAAAgIgSAAIAAhJIASAAIAAAeIAgAAIAAgeIASAAIAABJg");
	this.shape.setTransform(17.2,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.5,7.5);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7AwIAAgPIghAAIAAAPIgPAAIAAgaIAEAAQAKgPAAgUIAAgIIAsAAIAAArIAFAAIAAAagABpgIQAAAHgCAIQgDALgDAEIATAAIAAghIgLAAgACWAeIgCgFIgBgJQAAgKAEgEQADgCAKAAIATAAIAAgDQAAgGgCgBQgDgCgHAAIgUABIAAgKIAWgBIANABIAIACQADACABAEQACAEAAAFIAAAlIgRAAIAAgFQgBADgEABQgDACgKAAQgLAAgEgEgAClAJQgCABAAAGQAAAFACABQABABAGAAIAHAAIADgBIABgBIAAgDIAAgKIgLAAQgGAAgBABgAAWAdQgHgEAAgJIAAgSQAAgLAHgFIAJgDIAMgBQANAAAGAEQADACACAEQABAEAAAGIAAALIgkAAIAAAFIABAEIACADIAFACIAIAAQAIAAALgCIAAALIgWACQgPAAgIgFgAAigKQAAAAgBABQAAAAgBAAQAAABAAABQAAAAAAABIAAAGIAUAAIAAgGQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgCgCgGAAQgGAAgCACgAgeAiIgHgCIgGgDQgDgCgBgEQgCgEAAgGIAAgnQAAgFACgFIAFgGQADgCAEgBIAIgCIAIAAIATABIAAAMIgUgCQgHAAgDADQgCACAAAHIAAAKQACgIAQAAQALAAADAEIACAFIABAHIAAATQAAAGgBAEQgCAEAAACIgHADIgHACgAgegKQgCABAAAFIAAATQAAAFABACQACABAHAAQAIAAABgBQACgBAAgGIAAgTQAAgFgCgBQgCgCgGAAQgHAAgCACgAhiAiIgHgCQgEgBgDgCQgDgCgBgEQgCgEAAgFIAAgPQAAgGACgEIAEgGQADgCAEgBIAHgCIAQAAIAIACQAEABADACIAEAGQACAEAAAGIAAAPQAAAFgCAEQgCAEgCACQgDACgEABIgHACgAhjgKQgCACAAAEIAAAUQAAAEACACQACABAHAAQAHAAADgBQACgCAAgEIAAgUQAAgEgCgCQgDgCgHAAQgHAAgCACgAiVAhIAAg8IggAAIAAA8IgSAAIAAhJIBEAAIAABJg");
	this.shape.setTransform(20,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.1,9.8);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DF6333","#E3763B"],[0,1],0,22.9,0,-22.8).s().p("Ar7DpQgrAAgBgsIAAl5QABgsArAAIX3AAQArAAABAsIAAF5QgBAsgrAAg");
	this.shape.setTransform(80.8,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.6,46.7);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH4BCIAOggIgfhIIAZAAIARAyIAPgyIAXAAIgoBogAmhA3IAAgVIgrAAIAAAVIgVAAIAAgjIAFAAQAOgUAAgbIAAgLIA6AAIAAA6IAHAAIAAAjgAm5gUQgBAJgCALQgEAPgDAFIAZAAIAAgsIgPAAgADtAfQgCgCgCgFIgBgMQAAgMAFgEQAFgGANAAIAZAAIAAgFQAAgGgDgDQgDgCgKAAIgaACIAAgOQANgCAQAAIARABQAHACAEACQAEADACAFQACAFAAAHIAAAxIgWAAIAAgHQgDAFgEACQgFACgMAAQgPAAgFgFgAEAACQgCACAAAHQAAAIACABQACACAIAAIAFAAIAFgBIACgBIACgCIAAgDIAAgOIgPAAQgHAAgCABgABnAjQgFgBgDgCIgHgEQgDgDgCgEQgBgFAAgGIAAgXQAAgFABgEIAEgIQACgCADgCIAGgDIAQgDIAIAAQAJAAAOADIAAAPQgTgEgFAAQgIAAgEADQgEACAAAGIAAAZQAAAGAEADQAFADAIAAQAIAAAQgEIAAAPQgOADgLAAgAjJAfQgDgCgCgFIAAgMQgBgMAGgEQAFgGANAAIAZAAIAAgFQAAgGgDgDQgEgCgJAAIgaACIAAgOQAMgCAQAAIASABQAGACAEACQAFADACAFQACAFAAAHIAAAxIgXAAIAAgHQgCAFgEACQgGACgLAAQgPAAgFgFgAi2ACQgCACgBAHQABAIACABQACACAHAAIAGAAIAEgBIADgBIABgCIABgDIAAgOIgPAAQgIAAgBABgAl3AeQgJgGgBgMIAAgZQAAgOAKgHQAEgDAIgBQAHgCAIAAQASAAAIAGQAFADACAFQABAFAAAIIAAAQIgvAAIAAAHIABAFIADAEIAGACIAKABQAMAAAOgDIAAAOQgUADgJAAQgVAAgKgGgAlngYQgDACABADIAAALIAbAAIAAgLQAAgDgEgCQgDgCgHAAQgIAAgDACgAoTAjIgNgCQgGgCgFgDQgFgDgDgFQgDgGgBgHIAAgqQAAgPAMgIQAMgHAXAAQAHAAAZADIAAASIgRgDIgPgBIgIAAIgHACQgEABgBADQgCACAAAFIAAAoQgBAHAHADQAGAEAMAAQAIAAAXgFIAAASQgXAEgKAAgAkwAjIAAgOIAFABQAEAAACgDQACgDAAgHIAAgvIBFAAIAABIIgWAAIAAg6IgZAAIAAAlIgBAKIgDAHIgGADIgHACIgJAAIgJAAgAHQAiIgPgUQgEgHgDgCQgDgCgFAAIAAAfIgWAAIAAhIIAWAAIAAAeIAFgBIACgDIAHgMQAHgLADgBQAEgCAOAAIAHAAIAAAOIgCAAIgIABQgEABgCADIgEAHQgEAFgDACQAHADAHAJIAUAbgAFCAiIAAhIIAoAAIAQABQAGABADADQADADAAACIABAIIAAADQAAAGgEACQgDADgHACIAAAAQAIACAGACIADAEQACADgBADIAAAFQAAAFgBADQgCAEgEACQgIAFgRAAgAFZAUIALAAQAKAAADgCQAFgBAAgFIAAgCQAAgFgEgBIgNgBIgMAAgAFZgJIALAAQAIAAADgCQADgCAAgEIAAgBIgBgDIgEgDIgKAAIgKAAgACwAiIAAg6IgXAAIAAgOIBFAAIAAAOIgYAAIAAA6gAgmAiIAAhIIAWAAIAAAZIAOAAQAVAAAHAEQAEACABAFQACACAAAGIAAAIQAAALgJAFIgMADIgNABgAgQAUIAOAAQAGAAADgCQADgCgBgFIAAgDQAAgFgCgCQgEgBgFAAIgOAAgAhjAiIAAg6IgXAAIAAgOIBFAAIAAAOIgXAAIAAA6g");
	this.shape.setTransform(56.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.6,13.4);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Растровоеизображение12();
	this.instance.setTransform(-45.5,55.3,1,1.299);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,55.3,730,624.8);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egu2AXcMAAAgu3MBdtAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.circle_blick();
	this.instance.setTransform(-160,-160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwjQkQm4m4AApsQAApsG4m4QG2m2JtgBQJuABG2G2QG4G4AAJsQAAJtm4G3Qm2G4puAAQptAAm2m4gAwAwBQmpGpAAJYQAAJYGpGpQGoGoJYAAQJZAAGomoQGpmpAApYQAApYmpmpQmomopZAAQpYAAmoGog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


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


(lib.Символ71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ72();
	this.instance.setTransform(234.5,94,1,1,0,0,0,234.5,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94,rotation:-3.8},24,cjs.Ease.get(-1)).to({scaleX:0.87,scaleY:0.87,rotation:-7.7,y:94.1},25,cjs.Ease.get(1)).to({regY:93.9,scaleX:0.94,scaleY:0.94,rotation:-3.8,y:94},25,cjs.Ease.get(-1)).to({regY:94,scaleX:1,scaleY:1,rotation:0},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,188);


(lib.Символ62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 65
	this.instance = new lib.Символ65();
	this.instance.setTransform(211,-27.5,1,1,0,0,0,88.6,11.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:11.5,alpha:1},9,cjs.Ease.get(1)).wait(51).to({y:44.7,alpha:0},10,cjs.Ease.get(-1)).wait(1));

	// Символ 64
	this.instance_1 = new lib.Символ64();
	this.instance_1.setTransform(99.2,-24.9,1,1,0,0,0,16.1,8.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({y:14.1,alpha:1},9,cjs.Ease.get(1)).wait(51).to({y:47.3,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// Символ 63
	this.instance_2 = new lib.Символ63();
	this.instance_2.setTransform(37.3,-25,1,1,0,0,0,37.3,9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:14,alpha:1},9,cjs.Ease.get(1)).wait(51).to({y:47.2,alpha:0},10,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-34,74.7,18.1);


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


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(80.8,23.3,1,1,0,0,0,80.8,23.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#153842","#005A77"],[0,0.792],0,22.9,0,-22.8).s().p("Ar7DpQgrAAgBgsIAAl5QABgsArAAIX3AAQArAAABAsIAAF5QgBAsgrAAg");
	this.shape.setTransform(80.8,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.6,46.7);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.setTransform(83.1,22.9,1,1,0,0,0,56.8,6.7);

	this.instance_1 = new lib.Символ52();
	this.instance_1.setTransform(80.8,23.8,1,1,0,0,0,80.8,23.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.5,161.6,46.7);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(316.5,336.5,1,1,0,0,0,316.5,316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:331.7},14,cjs.Ease.get(-1)).to({y:326.5},15,cjs.Ease.get(1)).to({y:331.9},16,cjs.Ease.get(-1)).to({y:336.5},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,75.3,730,624.8);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-160,320,320);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23));

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.08,scaleY:0.08,alpha:0},21,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ71();
	this.instance.setTransform(345.9,363.2,0.747,0.747,0,0,0,234.5,94);
	this.instance.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(316.5,310.3,1,0.72,0,0,0,316.5,316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,136.6,730,449.9);


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


(lib.flag_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.blick = new lib.Символ35();

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 2
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.zagl_2();
	this.instance_1.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.flag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.blick = new lib.Символ35();
	this.blick.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.blick).wait(1));

	// Слой 2
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.zagl();
	this.instance_1.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ40 = function(mode,startPosition,loop) {
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

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


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
		var _this = this;
		var lastEventKey = null;
		var monts = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		var flags = {
			'австрия': 'austria.png',
			'албания': 'albania.png',
			'англия': 'england.png',
			'бельгия': 'belgium.png',
			'венгрия': 'hungary.png',
			'германия': 'germany.png',
			'ирландия': 'ireland.png',
			'исландия': 'iceland.png',
			'испания': 'spain.png',
			'италия': 'italy.png',
			'польша': 'poland.png',
			'португалия': 'portugal.png',
			'россия': 'russia.png',
			'румыния': 'romania.png',
			'сев. ирландия': 'north_ireland.png',
			'словакия': 'slovakia.png',
			'турция': 'turkey.png',
			'украина': 'ukraine.png',
			'уэльс': 'wales.png',
			'франция': 'france.png',
			'хорватия': 'croatia.png',
			'чехия': 'czech.png',
			'швейцария': 'switzerland.png',
			'швеция': 'sweden.png',
		
			'венесуэла': 'venezuela.png',
			'уругвай': 'uruguay.png',
			'сша': 'usa.png',
			'перу': 'peru.png',
			'парагвай': 'paraguay.png',
			'панама': 'panama.png',
			'мексика': 'mexico.png',
			'ямайка': 'jamaica.png',
			'гаити': 'haiti.png',
			'эквадор': 'ecuador.png',
			'коста-рика': 'costa_rica.png',
			'колумбия': 'colombia.png',
			'чили': 'chile.png',
			'бразилия': 'brazil.png',
			'боливия': 'bolivia.png',
			'аргентина': 'argentina.png',
		};
		
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
		
		
			_this.kom_1.text.text = winFirst.name;
			_this.kom_2.text.text = winSecond.name;
		
			_this.flag_1.instance_1.image.src = getFlag(winFirst.name);
			_this.flag_2.instance_1.image.src = getFlag(winSecond.name);
		
		
			_this.koef_1.text.text = winFirst.value;
			_this.koef_3.text.text = winNoBody.value;
			_this.koef_2.text.text = winSecond.value;
		
			_this.date.text.text = date;
		
			_this.koef_1.blick.gotoAndPlay(1);
			_this.koef_3.blick.gotoAndPlay(1);
			_this.koef_2.blick.gotoAndPlay(1);
			_this.date.blick.gotoAndPlay(1);
			_this.flag_1.blick.gotoAndPlay(1);
			_this.flag_2.blick.gotoAndPlay(1);
		
		}
		
		function lpadTime(num) {
			return ("00" + num).slice(-2);
		}
		
		
		function getFlag(country) {
		
			var key = ("" + country).toLowerCase();
			if (flags[key] !== undefined) {
				return '/media/flags_fonbet/' + flags[key];
				//~ return 'http://img1458.r.worldssl.net/media/flags_fonbet/' + flags[key];
			}
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
		//tweens
		
		var tween = createjs.Tween.get(this.flag_1, {loop: true}).to({y: 202}, 1000, createjs.Ease.quadInOut).to({y: 152}, 1000, createjs.Ease.quadInOut);
		
		var tween_2 = createjs.Tween.get(this.flag_2, {loop: true}).to({y: 152}, 1000, createjs.Ease.quadInOut).to({y: 202}, 1000, createjs.Ease.quadInOut);
		
		//clickTAG
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		function fl_ClickToGoToWebPage() {
			window.open(clickTAG, "_blank");
		}
		
		stage.canvas.addEventListener("mouseover", MouseOver);
		function MouseOver() {
			_this.black.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", MouseOut);
		function MouseOut() {
			_this.black.gotoAndPlay(10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.instance = new lib.Символ62();
	this.instance.setTransform(299.6,22.7,1,1,0,0,0,149.8,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(61.6,24.3,0.821,0.821,0,0,0,59.3,17.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.flag_2 = new lib.flag_2();
	this.flag_2.setTransform(689.5,466,0.327,0.327);

	this.flag_1 = new lib.flag_1();
	this.flag_1.setTransform(-195.5,380,0.327,0.327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flag_1},{t:this.flag_2}]}).wait(1));

	// Слой 6
	this.instance_2 = new lib.Символ67();
	this.instance_2.setTransform(482.1,116.5,1,1,0,0,0,94.6,24.4);

	this.instance_3 = new lib.Символ66();
	this.instance_3.setTransform(121.6,118,1,1,0,0,0,67.2,24.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005A77").s().p("AvAEhQgrAAAAgrIAAnrQAAgrArAAIeBAAQAsAAAAArIAAHrQAAArgsAAg");
	this.shape.setTransform(58.9,23.7,0.646,0.881);

	this.instance_4 = new lib.Символ55();
	this.instance_4.setTransform(299.3,119.6,0.353,0.353,0,0,0,81.8,44.5);

	this.instance_5 = new lib.Символ54();
	this.instance_5.setTransform(535,24.2,1,1,0,0,0,55.2,7.4);

	this.instance_6 = new lib.Символ47();
	this.instance_6.setTransform(474.5,209.8,1.333,1.333,0,0,0,20,4.9);

	this.instance_7 = new lib.Символ51();
	this.instance_7.setTransform(506.7,243.8,0.964,0.964,0,0,0,80.9,23.3);

	this.instance_8 = new lib.Символ50();
	this.instance_8.setTransform(543.3,209.9,1.123,1.123,0,0,0,19.1,6.8);

	this.instance_9 = new lib.Символ53();
	this.instance_9.setTransform(505.8,221.8,1.123,1.123,0,0,0,63.2,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#054558").s().p("AvAEhQgrAAAAgrIAAnrQAAgrArAAIeBAAQAsAAAAArIAAHrQAAArgsAAg");
	this.shape_1.setTransform(505.8,221.9,0.706,0.903);

	this.instance_10 = new lib.Символ51();
	this.instance_10.setTransform(303.9,243.8,0.964,0.964,0,0,0,80.8,23.3);

	this.instance_11 = new lib.Символ50();
	this.instance_11.setTransform(340.8,209.9,1.123,1.123,0,0,0,19.1,6.8);

	this.instance_12 = new lib.Символ53();
	this.instance_12.setTransform(303.3,221.8,1.123,1.123,0,0,0,63.2,23.3);

	this.instance_13 = new lib.Символ48();
	this.instance_13.setTransform(271.7,209.5,1.302,1.302,0,0,0,17.2,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#054558").s().p("AvAEhQgrAAAAgrIAAnrQAAgrArAAIeBAAQAsAAAAArIAAHrQAAArgsAAg");
	this.shape_2.setTransform(303.3,221.9,0.706,0.903);

	this.instance_14 = new lib.Символ51();
	this.instance_14.setTransform(100.1,243.8,0.964,0.964,0,0,0,80.8,23.3);

	this.instance_15 = new lib.Символ50();
	this.instance_15.setTransform(137.4,209.9,1.123,1.123,0,0,0,19.1,6.8);

	this.instance_16 = new lib.Символ47();
	this.instance_16.setTransform(68.3,209.8,1.333,1.333,0,0,0,20.1,4.9);

	this.instance_17 = new lib.Символ53();
	this.instance_17.setTransform(100,221.8,1.123,1.123,0,0,0,63.2,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#054558").s().p("AvAEhQgrAAAAgrIAAnrQAAgrArAAIeBAAQAsAAAAArIAAHrQAAArgsAAg");
	this.shape_3.setTransform(99.9,221.9,0.706,0.903);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005A77").s().p("AvAEhQgrAAAAgrIAAnrQAAgrArAAIeBAAQAsAAAAArIAAHrQAAArgsAAg");
	this.shape_4.setTransform(536,23.7,0.646,0.881);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_2},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 10
	this.black = new lib.Символ40();
	this.black.setTransform(-505.9,187);

	this.timeline.addTween(cjs.Tween.get(this.black).wait(1));

	// Слой 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#064558").s().p("AvAEhQgrAAAAgrIAAnrQAAgrArAAIeBAAQAsAAAAArIAAHrQAAArgsAAg");
	this.shape_5.setTransform(320,23.5,4.964,0.881);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Слой 3
	this.instance_18 = new lib.Символ58();
	this.instance_18.setTransform(28.8,135.5,1,1,0,0,0,309.5,168.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

	// Слой 7
	this.instance_19 = new lib.Символ7();
	this.instance_19.setTransform(290.5,73,0.947,0.947,0,0,0,316.5,316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1));

	// Слой 5
	this.instance_20 = new lib.Символ73();
	this.instance_20.setTransform(291.5,149,1.075,1,0,0,0,305.5,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505.9,52.6,1624.8,612.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
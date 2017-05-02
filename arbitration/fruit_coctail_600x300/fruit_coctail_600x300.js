(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#000099",
	manifest: [
		{src:"images/apple.png?1466068771834", id:"apple"},
		{src:"images/banan.png?1466068771834", id:"banan"},
		{src:"images/bg.jpg?1466068771834", id:"bg"},
		{src:"images/exit.png?1466068771834", id:"exit"},
		{src:"images/frame.png?1466068771834", id:"frame"},
		{src:"images/grusha.png?1466068771834", id:"grusha"},
		{src:"images/klub.png?1466068771834", id:"klub"},
		{src:"images/light.png?1466068771834", id:"light"},
		{src:"images/logo.png?1466068771834", id:"logo"}
	]
};



// symbols:



(lib.apple = function() {
	this.initialize(img.apple);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,76);


(lib.banan = function() {
	this.initialize(img.banan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,83);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.exit = function() {
	this.initialize(img.exit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,60);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,381,174);


(lib.grusha = function() {
	this.initialize(img.grusha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,97);


(lib.klub = function() {
	this.initialize(img.klub);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,90);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,12);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,76);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("A0HLPIAA2dMAoPAAAIAAWdg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("EgqNAqOQxgxfAA4vQAA4uRgxgQRfxfYuAAQYvAARfRfQRgRgAAYuQAAYvxgRfQxfRg4vAAQ4uAAxfxgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.2,-382.2,764.4,764.4);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.71)").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.6,-34.5,149.3,69.2);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFCC00","#FFFF33"],[0,1],0,21.3,0,-21.3).s().p("AhNC6QgQgQgDgHIgBgEQAAgJAIgOIABgBIgNkTQgGgMgBgKIgBgFQAAgIAEgCQAHgGAGgBIATABQAQAAAPAEIBggPQARgKAHAAQAMAAAKATQAIARAAAPIAAAFQgCAJgGAGQgHAIgIAAQgJAAgUgJIhhAQIABAKIAEBLQAMgJARgEQAQgFAXAAQBMAAACBFIAAAHQgCAUgPAdQguBNg6AnQgGAOgSABIgCAAQgVAAgTgTgAgiAWIABAKIADBWQAdgRARgUQATgVAIgXIAAgBQABgRgGgIQgGgJgMgBQgjABgTAUg");
	this.shape.setTransform(-16.7,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFCC00","#FFFF33"],[0,1],0,20.8,0,-20.8).s().p("AARDEIgVgDQgwgFgfg8QgPgdgJgkQgHgegBgiIAAgHIAAgDQAAg6AVg+QAWhAAZgBIAdAFIAngFIAMACQAlAQAWAsQAMAYAGAfQAFAfABAlIAAACIAAAIQgBAngIAjQgHAngRAfQgbA2gfAAgAgmhaQgLAqAAAlIAAADIAAACQACAhALAyQARBCATAAQAKgBAKgQQAJgRAJghQALgtABgdIAAgNQgHiKgrAAQgYAAgOA7g");
	this.shape_1.setTransform(-41.4,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFCC00","#FFFF33"],[0,1],0,21.6,0,-21.5).s().p("AA5C5QgPgHgDgGIgBgDQAAgJAJgPIAAkIIAAgKIhcAPIAAAKIAAD5QAIAZAAAIIgBAEQgBAFgFADQgIAEgOAAQgRAAgTgJQgOgHgDgGIgBgDQAAgJAJgPIAAj6IAAgKQgLgLgBgIIAAgDQAAgSAJgKQAKgJATAAIAsgCIA4gKQAggGAagBQARgBAPAHQAJAEAGAGQAEAHAAAJIAAADIgMAZIAAAKIAAERQAJAUAAAIIgBAEQgBAFgFADQgHAEgOAAQgRAAgTgJg");
	this.shape_2.setTransform(-69.2,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC00","#FFFF33"],[0,1],0,23.7,0,-23.6).s().p("AhvDDQgRgGgPgNQgJgJgCgGQgDgEABgDQADgJANgLQAYhYAVg+QAchVAXg4IABgEIgCgLQgBgJACgDQAGgNAPAAIAWADQAPAAAOAEQARAGACAJIAAAJIgEAVIABAFQAPBHAdBmQAWgNAOADQAPADAJAOQAJAOAAAPIAAAEQgDAUgdAAIgUgBIAEALIANAsQAPAQAAAMIAAAEQgEAKgTAFQgKADgMAAQgbAAgDgLQgGgWABgFIgUg9IhnAQIgNAtIABAHIAAANIgBAIQgEAKgMAAQgHAAgJgCgAgwA0IAEAAIA+gMIADAAIgbhvg");
	this.shape_3.setTransform(66.1,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFCC00","#FFFF33"],[0,1],0,26.1,0,-26.1).s().p("ABVDjQgOgGgEgGIgBgEQAAgJAJgOIAEgyIAAgKIihAQIAAAKIAAAlQAJAPgBANIAAAEQgCAEgFAEQgGADgPAAQgXAAgPgIQgMgHgDgFIgBgEQAAgJAJgPIAAg3IAAgLQgGgJgCgHIAAgFQAAgLAHgHQAHgFAOAAQAEgBAKAFQASg6ARhCQAQhBAQhKIACgHQgGgLgBgGIAAgFQgBgLAJgHQAJgFAQAAQAPAAALAFIAXAJQAJgFAQAAQAVAAAQALQAOAKAAAKIgBAFIgLAYIABAJIAODYIAPgEQAQAAAIAKQAIALAAALIAAADIgLAaIgGBMIABACQAHAOABAMIgBAEQgBAFgFADQgIAEgNAAQgRAAgTgJgAgsBMIAEAAIBTgHIAAAAIgPjsIgIgDg");
	this.shape_4.setTransform(32.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFCC00","#FFFF33"],[0,1],0,23.1,0,-23.1).s().p("AhDC4QgPgMgDgJIgCgFIACgHIABgMIAAkhIAAgKIgCgFIgBgEQAAgTAeAAQAUAAAGAIIA3gIIAJgFQAJgEAHAAQAPAAAMAOQAMAOAAAPIgBAFQgBAFgDADQgJAJgRACIhLALIAAAKIAABnIASgGIANgDQAQAAARAMQARALAAANIgBAEIgBAEQgHARgSACIgeABIgYAFIAAAKIAABEIAmgIQAHgGAJAAQARAAAPANQAPANAAAOIAAAFQgDAJgNAFIgkAEQg9ARgGAAQgMAAgTgOg");
	this.shape_5.setTransform(6.4,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.4)").s().p("AGYDeQgTgJAAgIIABgGQAEAGAOAHQATAIARAAQAOAAAHgEQAFgDABgFIABAGQAAAIgHAEQgHAEgOAAQgRAAgTgIgAC1DcQgQgJAAgHIABgGQADAFAMAHQAPAJAYAAQAOAAAHgEQAFgDABgFIABAGQAAAIgHAEQgHAEgOAAQgYAAgPgJgAHQCxIAFhNIALgZIAAAGQAAAFgLAYIgFBEIAAgBgAj0CMQgUgUAAgIIABgGQADAIAQAQQAUAUAWgBQASgBAGgOQA8gnAuhNQAPgcACgUIAAADQABAWgSAhQguBNg8AnQgGAOgSABIgCAAQgVAAgTgTgAmMCVIgWgCQgwgGgfg7QgQgegIgjQgIghAAgpQABAjAHAdQAIAjAQAeQAfA7AwAGIAWACIAIACQAgAAAbg2QAQgfAIgnQAHghABgpQAAAvgIAlQgIAngQAfQgbA2ggAAgAIjCTQgQgGgPgNQgPgOACgIIABgCQADAFAJAJQAPANAQAGQAKADAHAAQAMAAADgLIACgHQABAKgDAHQgDALgMAAQgHAAgKgDgAgECHQgTgPAAgLIABgEQAEAJAOALQASAPAMAAQAGAAA/gRIAkgEQANgGACgJIABAFQAAANgQAHIgkAEQg/ARgGAAQgMAAgSgPgALSCKQgFgWABgFIgUg9IhqARIgMApIgBgHIANgsIBqgRIAUA9QgBAFAFAWQADALAcAAQALAAALgDQATgFADgJIABAFQAAANgXAGQgLADgLAAQgcAAgDgLgAp6CJQgTgJAAgIIABgGQADAGAPAHQATAIARAAQAOAAAHgEQAFgDACgEIAAAFQAAAIgHAEQgHAEgOAAQgRAAgTgIgAsaCJQgTgJAAgIIABgGQADAGAPAHQASAIASAAQAOAAAHgEQAFgDACgEIAAAFQAAAIgHAEQgHAEgOAAQgSAAgSgIgADwCAICjgQIgBAKIiiAQgACmBdIABgFQABAHAGAKIAAAKQgIgOAAgIgAkMi7QgIgQAAgLIABgEQABAJAGAMIANEUIgBABgAEWA8IBBj1IAIADIAQDrIgBAAIgPjhIgIgDIg+DrgAMBAtIgDgLIATABQAdAAADgUIAAAGQAAAYggAAgAArgDIAagFIAegBQASgBAIgSIABgDIAAAGIgBAHQgIASgSAAIgeAAIgaAFgAKMiAIAdBwIgCAAIgbhmIgmByIgDABgAh/giQgGgJgMAAQglABgSATIgBgKQATgTAlgBQAMAAAGAJQAGAJgBARQgBgKgEgGgAlrg5QgHiKgsAAQgZAAgOA7QgJAlgBAiIAAgCQAAglAKgqQAOg7AZAAQAsAAAHCKIABAPIgBgFgAriitIBegOIAAAKIheAOgAswi5IAAgHQACAHAKALIAAAKQgMgNAAgIgAjQiuIBjgQQAUAJAJAAQAIAAAHgIQAGgGACgKIAAAGQAAAMgIAIQgHAIgIAAQgJAAgUgJIhiAQgAAriyIBOgLQAQgBAKgKQADgDABgFIAAAFQAAAJgEAEQgKAKgQABIhOALgAGji2IAKgYIABAFQAAAGgLAWgApCi/IALgZIABAGQAAAFgMAYgALAjLIAEgVIAAABQABAEgEAVIgBgFgAEOjaIAAgFQACAHAFAKIgBAHQgGgMAAgHgAgXjaIABgGIABAFIAAAKgAJljlIACAKIgBAEQgCgJABgFg");
	this.shape_6.setTransform(0,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-24.6,163.6,49.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF00","rgba(255,255,0,0.659)"],[0,1],0,0,0,0,0,381.7).s().p("EgpwApuQxQxRgB4dQAB4cRQxUQRVxRYbAAQYcAARRRRQRURUABYcQgBYdxURRQxRRU4cAAQ4bAAxVxUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377.8,-377.8,755.6,755.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF3300","rgba(204,0,0,0.659)"],[0,1],0,0,0,0,0,381.7).s().p("EgpwApuQxQxRgB4dQAB4cRQxUQRVxRYbAAQYcAARRRRQRURUABYcQgBYdxURRQxRRU4cAAQ4bAAxVxUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-377.8,-377.8,755.6,755.6);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.949)").s().p("AklJfQgJgTgOgDQgJgBgYAGQgVAFgWgBQgYgCgQgJQgwgagzgBQgtgBg3AUQgPAFgVgCQgNgBgXgEQgRgDgYgHIgogMQg+gPgZgDQgcgEgLAAQgXgBgPAFQgWAHgfAQQgjATgSAIQgdAPgVgDQgagBgSgaQgbglglAhQgXAVgUgDQgTgBgXgZQgJgJgagHQgggHgKgFQgsgXgKgXQgKgbgJgpIgPhJQAigcAAgYQABgXgjhvIAzg9IgKgIIgWAZQgFgEABgCQAOibgYh3QgQg+gDgiQgGg5AbgrQAJgPgGghQgKgkgBgPQA8hMBLgnQBPgpBjAAIgYAhQA3ggAwgDQA4gGA1AcIg7AKQAnAVAnggQAugmAYABQAdAiAuAAQAfAAA4gSIADATIh1ANQA+ANAfgGQAvgIAZgzQBqBMBthGQAlgXAlAPQATAIAsAjQAWASALACQA/AMBRgDQAkgBBrgJQAJAAALgJQAKgHAGgKQAthGBEAjQAlAVAdABQAiACAngUQAWgNAqAEQAYADAyAIQAZAEAkAJIA7AOIhAAVQAmAHAQgCQAbgGAOgiQARgqAmgHQAlgIAfAhQAdAhAsAKQAcAHA4AAIhPAEIADASIBCgKQAngHAZgIQATgHAlgQQAfgIAcAUQAIAGASgBIAfgDIgwAVIAGAQICZhAIgFgOIgrANQAcgSAcAEQAaADAdAWQAMAIAXAJIAsANIgtAGIAAAHIAWAEQAOADAGgDQAdgNAWANQAOAKAYAYQAdAZAGATQAJAagVAdQgDAFgBAIQgBAIACAFQATApgMAqQgHAYggAzQgVAkAHAlQAHAlAiAdQAWATAFAUQAGAUgJAaQgXBBgfBjQghBoAyBNQAiAygJBFQgIBGgwAgQgWAPgkAEQgjAEgagKQhZgdhOAUQhJAUhHA/QgqAngdgEQgfgDgggvQgigxgmACQglACgdA0QgKARgSAPQgTAQgOgCQgXgDgYgMQgYgOgLgSQgRgdgVgLQgUgLggABQhJAEhSgDQgmgBgcAJQghAJgdAWQgqAigwgGQgtgHgogsQgcggglAGQgmAGgPAoQgcBOhCAFIgJABQg0AAgghFgA08HkIVMgBQMRgCI9gLMgqaAAAgAUln4QgKAMgBAKQgCAcAAAqIAABFQgBHwABD6QAAAKALAQQAHAIALARIAOgZQAHgPACgLQADjHABkVIAAm4IgagMIgRAVgAHXoCIgDAUQgBJfABExQAAAHAJALIAPASQAFgHAMgOQAJgOAAgJIAAt6QAAgagKgIQgGgFgJAAQgJAAgNAFgAm1oCIgEAPIgBOWQAAAHAIAKIAOASIAPgTQAJgLAAgIIABkSQAEBFAACMQABBDAOAOQANAOBBABIDVgBQB9gBBWADQAPAACIgFQBbgEA8AOQACABAEgDIAGgFIAAvAQgygSgCAzIAACtIgGAAIAAhJIAAhJQABgjgPgQQgPgPgkAAIp0gBQgzAAgOANQgNAPAAA2QgBAuAADqQgFhqAAjTQAAgagHgJQgFgIgLAAQgIAAgLAFgAoAn9QgFAIAAAgIgDNaQAAAYAEAHQADAIAIAKIANAQIAPgSQAIgMAAgHIABujQgOgEgJAAQgPAAgGAJgA1LGWQAAAKAJAPIAPAXIARgXQAKgOAAgKQADm4gDm5QAAgJgLgNIgSgXIgOAWQgIAOAAAIQgCBiAAFYIAAAAQAAFJACBugATQHCQAmAAAQgRQAPgPAAgnIgBmcIgCAAIAAmoQAAgkgPgQQgPgRgkAAQk/ADlAgDQgkAAgQARQgPAPAAAlQAAHmgCFeQgBAmAQAQQAQAPAmAAIDvgBQDCAADOADgAzLoIQguABgMALQgMANgBAvIAAMqQAAA6ANANQAMANA4ABIJlAAQA4gBAOgMQAMgMAAg5IgCssQgBgygNgMQgNgMg0AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.9,-67.6,295.8,135.3);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.357)").s().p("Al7MJQgLgYgSgEQgMgCgfAIQgaAGgdgBQgfgCgVgMQg9gihCgBQg6gBhHAZQgTAGgbgCQgRgBgegFQgVgEgfgJIg0gPQhQgTgggEQgkgFgPAAQgcgBgUAGQgdAJgoAUQgtAZgWALQgmASgbgDQghgCgYghQgjgvgvApQgeAbgagDQgYgCgeggQgMgMghgIQgpgJgNgGQg5gegMgeQgNghgMg1IgUhdQAtgkAAgfQABgdgtiOIBBhPIgMgKIgeAhQgFgGAAgDQATjGgfiaQgVhOgEgrQgHhKAjg3QALgTgIgqQgMgvgCgSQBOhiBggxQBmg1CAAAIggAqQBHgoA/gFQBHgHBEAkIhMANQAzAaAygpQA7gwAfACQAmAqA6AAQApABBIgYIADAZIiWARQBQAQAngHQA9gLAhhBQCIBhCNhZQAvgeAwAUQAYAKA6AsQAbAXAOADQBRAPBpgDQAvgBCKgMQALAAAOgLQANgKAIgNQA6hYBYAsQAwAaAlACQAsACAxgaQAdgQA3AFQAfAEBAALQAhAEAuALIBLATIhTAbQAyAJAUgDQAjgHASgsQAWg2AxgJQAxgKAmAqQAnAqA4AOQAkAIBIAAIhlAFIADAXIBWgNQAygIAggLQAZgJAugUQApgLAkAbQAJAHAYgCIAogEIg+AcIAJAUIDEhSIgGgSIg4ASQAlgYAkAFQAhAEAlAcQAPALAfAKIA4ASIg6AHIAAAJIAcAFQASAEAJgEQAkgRAeASQARALAfAgQAlAfAIAZQAMAhgbAmQgEAGgCAKQgBAKADAHQAZA0gRA2QgJAfgoBBQgcAuAKAwQAJAvAsAlQAbAXAIAbQAHAagLAhQgeBTgpCAQgqCEBBBjQArBAgLBXQgLBag9ApQgdAUguAEQgtAFgigMQhyglhlAaQhfAZhaBRQg2AxgmgEQgogEgpg8Qgsg/gxADQgvACglBCQgNAWgYATQgZAUgSgCQgdgDgfgQQgfgSgNgXQgWglgcgOQgagOgpACQhfAEhogEQgxgBglALQgqAMglAdQg3Arg9gIQg6gJg0g4QgkgpgwAHQgxAJgTAzQgkBjhVAHIgKABQhFAAgqhYgA6/JsIbTgCQP0gDLigOMg2pAAAgAagqGQgNAQgBAMQgDAlAAA1QgBAdABA8QgBJ7ACE/QAAANANAUIAYAhIASggQAKgTABgOQAEj/ABljIAAozIgggPIgXAagAJfqTIgFAaQgBMKACGGQAAAJAMAOIATAXQAGgJAPgSQAMgSAAgLIAAx0QAAgigNgKQgHgGgLAAQgMAAgRAGgAqVqMQgHALAAAoIgDRKQAAAgAFAJQAEAJAKANIARAVIATgYQALgOAAgKQACmMAAscQgSgFgMAAQgUAAgIAMgA7TIIQAAAMALATIAUAeIAWgeQANgSAAgMQAEo0gEo0QAAgMgOgRIgYgdQgEAKgNASQgLASAAALQgCB9AAG4IAAAAQAAGmACCNgAo0qTIgGAUIAASXQAAAJAKANIARAXIAUgZQALgNABgLQABg6AAkkQAGBYAACzQAABVASATQARASBUABIETgCQChAABvADQATABCwgIQB1gFBNATQACABAFgEIAIgHIAAzNQhAgWgCBBIAADdIgIAAIgBhdQAAg3ABgmQACgugUgUQgUgTgvAAIsogCQhDAAgRASQgSASAABFQgBA8AAErQgGiIAAkOQAAghgJgMQgGgJgOAAQgKAAgPAFgAYzI/QAxABAUgWQAUgUAAgxQgBg6AAnWIgEAAIAAofQABgugTgUQgUgVguAAQmcADmcgDQguAAgUAVQgTAUAAAuQAAJvgEHAQAAAxAUAUQAVAUAxAAIFAgBQD1AAECACgA4tqaQg9ABgPAPQgQAQAAA8IAAQNQAABLAQAQQAQARBIABIMVAAQBKgBAQgQQARgQAAhJIgEwOQAAhBgRgPQgQgQhEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.5,-86.5,381.1,173.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(212,212,0,0.659)","rgba(255,255,0,0.659)","rgba(215,215,0,0.659)"],[0,0.482,1],-43.6,0,43.7,0).s().p("AkpEaQiKAAAAiJIAAkhQAAiJCKAAIJTAAQCKAAAACJIAAEhQAACJiKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,-28.3,87.3,56.6);


(lib.Символ16копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banan();
	this.instance.setTransform(-28.8,-81.3,0.726,0.726);

	this.instance_1 = new lib.klub();
	this.instance_1.setTransform(-23,207.7,0.726,0.726);

	this.instance_2 = new lib.logo();
	this.instance_2.setTransform(-32.8,-272.9,0.726,0.726);

	this.instance_3 = new lib.apple();
	this.instance_3.setTransform(-24.1,14,0.726,0.726);

	this.instance_4 = new lib.grusha();
	this.instance_4.setTransform(-18.7,103.6,0.726,0.726);

	this.instance_5 = new lib.klub();
	this.instance_5.setTransform(-23,-185.4,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-272.9,67.5,546);


(lib.Символ16копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.klub();
	this.instance.setTransform(-23,207.7,0.726,0.726);

	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-33.3,-272.9,0.726,0.726);

	this.instance_2 = new lib.apple();
	this.instance_2.setTransform(-22.2,110.1,0.726,0.726);

	this.instance_3 = new lib.grusha();
	this.instance_3.setTransform(-22.7,-86.4,0.726,0.726);

	this.instance_4 = new lib.banan();
	this.instance_4.setTransform(-29.9,14,0.726,0.726);

	this.instance_5 = new lib.klub();
	this.instance_5.setTransform(-23,-185.4,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.3,-272.9,67.5,546);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.klub();
	this.instance.setTransform(-23,207.7,0.726,0.726);

	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-34.3,-272.9,0.726,0.726);

	this.instance_2 = new lib.apple();
	this.instance_2.setTransform(-24.1,14,0.726,0.726);

	this.instance_3 = new lib.grusha();
	this.instance_3.setTransform(-22.7,-86.4,0.726,0.726);

	this.instance_4 = new lib.banan();
	this.instance_4.setTransform(-28.8,108.3,0.726,0.726);

	this.instance_5 = new lib.klub();
	this.instance_5.setTransform(-23,-185.4,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-272.9,68.6,546);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.exit();
	this.instance.setTransform(-53.5,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-30,107,60);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banan();
	this.instance.setTransform(-43.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-41.5,87,83);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.klub();
	this.instance.setTransform(-35.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-45,71,90);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.grusha();
	this.instance.setTransform(-35,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-48.5,70,97);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.apple();
	this.instance.setTransform(-37,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-38,74,76);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.light();
	this.instance.setTransform(-211.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-6,423,12);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-46.5,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-38,93,76);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.setTransform(-320,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(2,2,0,3).p("AlGk1IKNAAQCWAAAACWIAAE/QAACWiWAAIqNAAQiWAAAAiWIAAk/QAAiWCWAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-32,97.5,64);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,15.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F9EC53"],[0,1],0,0,0,0,0,182.4).s().p("AJxQ0Qg1gehIgjQjahqjeg6Qq6i4nnFVIgQALQARgiAJgvQAEgTACgSQAEhDgiguQh5ilo3CrQhBAUhIAYQBAgYBPg0QCfhpBQiNQBDh3AEiIQAChYgahfQhJkUkvlDIg1g2QEsCYDbAuQC/AqAchTQADgHABgJQALheicjYIgwhBIA4AqQBJA0BMAyQD4CeDLBIQEeBlCehWQC1hiAFlUIAAgiIgBgeIAQArQAVA1AeAzQBcChCLBFQDCBhD/hkQE/h9GLmqQgqAzgwBHIgMAUQhuCngfB/QgPA5ADAuQAFBiBQAwQCUBZGKhVQggASgiAYQguAfgyAqQixCThHCbQgxBpADBnQAEBuA/BrQCbECHwDhIh6geQmVhflcgfQldgfh7BCQhJAnAIBJQAJBQBvB6Igwgcg");
	this.shape.setTransform(0,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("AH0PyQjahpjeg6QrFi7nsFjQAJgSAHgVQHnlVK6C3QDeA6DaBqQBIAjA1AeQAVAcAbAeQhAgqhtg1gARCLzQldgfh7BCQg6AfgHA0QgIhIBJgnQB7hDFdAgQFcAeGVBgQA6AdBAAcQnbh4mQgjgAxzMQQiHi5qyDrQA9gXBMgyQI3irB5ClQAiAugEBEQgEgxgagkgA3/BJQhPkrlelhIA1AaQEvFCBJEUQAaBggCBYQgChLgWhRgAUNgYQBHidCxiSQAygqAuggIBCgNQhKAqhYBKQixCShHCaQgrBcgDBZQgDhnAxhogA2HstIAwAkQCcDYgLBeQgMhvi1jrgARAq3QAfh/BuioIAMgTQAtgtAtgyQgwA7g2BUQhuCngfCAQgKAngCAjQgDguAPg5gAiCueIABACIAAAiIgBgkg");
	this.shape_1.setTransform(0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.5,-111.9,393.1,223.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.5,-110.5,393.1,223.9);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.9,-67.6,295.8,135.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.5,-86.5,381.1,173.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Символ19();
	this.instance.setTransform(0,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.frame();
	this.instance_1.setTransform(-190.5,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.5,-87,381.1,174);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,119,0.031,1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(0,99,0.031,1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(5));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(0,79,0.031,1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(10));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(0,59,0.031,1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(0,39,0.031,1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(20));

	// Слой 1 - копия: 2 - копия: 2 - копия: 2
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(0,19,0.031,1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(25));

	// Слой 1 - копия: 2 - копия: 2 - копия
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(0,-1,0.031,1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(30));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_7 = new lib.Символ9();
	this.instance_7.setTransform(0,-21,0.031,1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(35));

	// Слой 1 - копия: 2 - копия
	this.instance_8 = new lib.Символ9();
	this.instance_8.setTransform(0,-41,0.031,1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(40));

	// Слой 1 - копия: 2
	this.instance_9 = new lib.Символ9();
	this.instance_9.setTransform(0,-61,0.031,1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(45));

	// Слой 1 - копия
	this.instance_10 = new lib.Символ9();
	this.instance_10.setTransform(0,-81,0.031,1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(50));

	// Слой 1
	this.instance_11 = new lib.Символ9();
	this.instance_11.setTransform(0,-101,0.031,1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.33,alpha:1},9,cjs.Ease.get(-1)).to({scaleX:0.03,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-107,13,12);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(0,0.5,0.525,0.525);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-15.2,56.2,31.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ5();
	this.instance.setTransform(0,0,1,1,0,180,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},35).to({alpha:0},34).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,102,0.478)").s().p("Egu2AXcMAAAgu3MBdtAAAMAAAAu3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-152.5,640,305);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_285 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_324 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(285).call(this.frame_285).wait(39).call(this.frame_324).wait(15));

	// Слой 1
	this.btn = new lib.Символ25();
	this.btn.setTransform(235.1,191.4,0.051,0.051);
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(168).to({_off:false},0).wait(1).to({regY:1.4,scaleX:0.19,scaleY:0.19,y:191.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,y:191.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:191.9},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:192},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:192.1},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.54,scaleY:0.54,y:192.2},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({regY:0,scaleX:0.59,scaleY:0.59,y:191.4},0).to({scaleX:0.49,scaleY:0.49},4,cjs.Ease.get(-1)).to({scaleX:0.54,scaleY:0.54},3,cjs.Ease.get(1)).wait(83).to({scaleX:0.66,scaleY:0.66},6,cjs.Ease.get(1)).to({scaleX:0.66,scaleY:0.66},1).to({scaleX:0.05,scaleY:0.05},6,cjs.Ease.get(-1)).to({_off:true},1).wait(17).to({_off:false},0).wait(1).to({regY:1.4,scaleX:0.19,scaleY:0.19,y:191.7},0).wait(1).to({scaleX:0.28,scaleY:0.28,y:191.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:191.9},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:192},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:192.1},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.52,scaleY:0.52},0).wait(1).to({scaleX:0.54,scaleY:0.54,y:192.2},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.56,scaleY:0.56},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({regY:0,scaleX:0.59,scaleY:0.59,y:191.4},0).to({scaleX:0.49,scaleY:0.49},4,cjs.Ease.get(-1)).to({scaleX:0.54,scaleY:0.54},3,cjs.Ease.get(1)).wait(1).to({scaleX:0.66,scaleY:0.66},6,cjs.Ease.get(1)).to({scaleX:0.66,scaleY:0.66},1).to({scaleX:0.05,scaleY:0.05},6,cjs.Ease.get(-1)).wait(1));

	// Слой 11
	this.instance = new lib.Символ20();
	this.instance.setTransform(235.4,103.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).wait(125).to({alpha:0},13).wait(1).to({alpha:1},0).wait(39).to({alpha:0},13).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(235.1,103.8,0.777,0.777);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(339));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AIMHxIAAvhIMJAAIAAPhgAmGHxIAAvhIMIAAIAAPhgA0UHxIAAvhIMJAAIAAPhg");
	var mask_graphics_286 = new cjs.Graphics().p("AIMHxIAAvhIMJAAIAAPhgAmGHxIAAvhIMIAAIAAPhgA0UHxIAAvhIMJAAIAAPhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:234.8,y:99.3}).wait(286).to({graphics:mask_graphics_286,x:234.8,y:99.3}).wait(53));

	// Символ 16 - копия 2
	this.instance_2 = new lib.Символ16копия2();
	this.instance_2.setTransform(324.7,-37.4);
	this.instance_2.alpha = 0;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0.9,x:325.6,alpha:0.378},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.861},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.965},0).wait(1).to({regX:0,x:324.7,alpha:1},0).wait(1).to({regX:0.9,x:325.6},0).wait(13).to({regX:0,x:324.7},0).wait(1).to({regX:0.9,x:325.6,y:-49.5},0).wait(1).to({y:-61.3},0).wait(1).to({y:-72.3},0).wait(1).to({y:-81.7},0).wait(1).to({y:-89.2},0).wait(1).to({y:-95.1},0).wait(1).to({y:-100},0).wait(1).to({y:-104.4},0).wait(1).to({y:-108.8},0).wait(1).to({y:-113},0).wait(1).to({y:-116.9},0).wait(1).to({y:-120.3},0).wait(1).to({y:-123.1},0).wait(1).to({y:-125.4},0).wait(1).to({y:-127.4},0).wait(1).to({y:-129},0).wait(1).to({y:-130.5},0).wait(1).to({y:-131.8},0).wait(1).to({y:-133.1},0).wait(1).to({y:-134.2},0).wait(1).to({y:-135.3},0).wait(1).to({y:-136.4},0).wait(1).to({regX:0,x:324.7,y:-137.4},0).to({y:255.6},14).to({y:-127.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).wait(1).to({regX:0.9,x:325.6,y:268.2},0).wait(1).to({y:277.8},0).wait(1).to({y:285.2},0).wait(1).to({y:291.3},0).wait(1).to({y:296.3},0).wait(1).to({y:300.7},0).wait(1).to({y:304.5},0).wait(1).to({y:308},0).wait(1).to({y:311.2},0).wait(1).to({y:314.3},0).wait(1).to({y:317.3},0).wait(1).to({y:320.2},0).wait(1).to({y:322.9},0).wait(1).to({y:325.4},0).wait(1).to({y:327.7},0).wait(1).to({y:329.6},0).wait(1).to({y:331.4},0).wait(1).to({y:332.9},0).wait(1).to({y:334.2},0).wait(1).to({y:335.4},0).wait(1).to({y:336.5},0).wait(1).to({y:337.5},0).wait(1).to({y:338.4},0).wait(1).to({y:339.3},0).wait(1).to({y:340.1},0).wait(1).to({y:340.9},0).wait(1).to({y:341.6},0).wait(1).to({y:342.3},0).wait(1).to({regX:0,x:324.7,y:343.1},0).wait(125).to({alpha:0},13).wait(1).to({alpha:1},0).wait(39).to({alpha:0},13).wait(1));

	// Символ 16 - копия
	this.instance_3 = new lib.Символ16копия();
	this.instance_3.setTransform(234,-37.4);
	this.instance_3.alpha = 0;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.4,x:234.4,alpha:0.378},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.861},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.965},0).wait(1).to({regX:0,x:234,alpha:1},0).wait(1).to({regX:0.4,x:234.4},0).wait(6).to({regX:0,x:234},0).wait(1).to({regX:0.4,x:234.4,y:-49.5},0).wait(1).to({y:-61.3},0).wait(1).to({y:-72.3},0).wait(1).to({y:-81.7},0).wait(1).to({y:-89.2},0).wait(1).to({y:-95.1},0).wait(1).to({y:-100},0).wait(1).to({y:-104.4},0).wait(1).to({y:-108.8},0).wait(1).to({y:-113},0).wait(1).to({y:-116.9},0).wait(1).to({y:-120.3},0).wait(1).to({y:-123.1},0).wait(1).to({y:-125.4},0).wait(1).to({y:-127.4},0).wait(1).to({y:-129},0).wait(1).to({y:-130.5},0).wait(1).to({y:-131.8},0).wait(1).to({y:-133.1},0).wait(1).to({y:-134.2},0).wait(1).to({y:-135.3},0).wait(1).to({y:-136.4},0).wait(1).to({regX:0,x:234,y:-137.4},0).to({y:255.6},14).to({y:-127.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).wait(1).to({regX:0.4,x:234.4,y:268.2},0).wait(1).to({y:277.8},0).wait(1).to({y:285.2},0).wait(1).to({y:291.3},0).wait(1).to({y:296.3},0).wait(1).to({y:300.7},0).wait(1).to({y:304.5},0).wait(1).to({y:308},0).wait(1).to({y:311.2},0).wait(1).to({y:314.3},0).wait(1).to({y:317.3},0).wait(1).to({y:320.2},0).wait(1).to({y:322.9},0).wait(1).to({y:325.4},0).wait(1).to({y:327.7},0).wait(1).to({y:329.6},0).wait(1).to({y:331.4},0).wait(1).to({y:332.9},0).wait(1).to({y:334.2},0).wait(1).to({y:335.4},0).wait(1).to({y:336.5},0).wait(1).to({y:337.5},0).wait(1).to({y:338.4},0).wait(1).to({y:339.3},0).wait(1).to({y:340.1},0).wait(1).to({y:340.9},0).wait(1).to({y:341.6},0).wait(1).to({y:342.3},0).wait(1).to({regX:0,x:234,y:343.1},0).wait(132).to({alpha:0},13).wait(1).to({alpha:1},0).wait(39).to({alpha:0},13).wait(1));

	// Символ 16
	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(144.5,-37.4);
	this.instance_4.alpha = 0;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.605},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.861},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:1},0).wait(1).to({y:-49.6},0).wait(1).to({y:-61.3},0).wait(1).to({y:-72.3},0).wait(1).to({y:-81.8},0).wait(1).to({y:-89.3},0).wait(1).to({y:-95.1},0).wait(1).to({y:-100},0).wait(1).to({y:-104.5},0).wait(1).to({y:-108.8},0).wait(1).to({y:-113.1},0).wait(1).to({y:-117},0).wait(1).to({y:-120.4},0).wait(1).to({y:-123.2},0).wait(1).to({y:-125.5},0).wait(1).to({y:-127.4},0).wait(1).to({y:-129.1},0).wait(1).to({y:-130.6},0).wait(1).to({y:-131.9},0).wait(1).to({y:-133.1},0).wait(1).to({y:-134.3},0).wait(1).to({y:-135.4},0).wait(1).to({y:-136.4},0).wait(1).to({y:-137.4},0).to({y:255.6},14).to({y:-127.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).to({y:-87.4},1).to({y:255.6},14).wait(1).to({y:268.2},0).wait(1).to({y:277.8},0).wait(1).to({y:285.2},0).wait(1).to({y:291.3},0).wait(1).to({y:296.3},0).wait(1).to({y:300.7},0).wait(1).to({y:304.5},0).wait(1).to({y:308},0).wait(1).to({y:311.2},0).wait(1).to({y:314.3},0).wait(1).to({y:317.3},0).wait(1).to({y:320.2},0).wait(1).to({y:322.9},0).wait(1).to({y:325.4},0).wait(1).to({y:327.7},0).wait(1).to({y:329.6},0).wait(1).to({y:331.4},0).wait(1).to({y:332.9},0).wait(1).to({y:334.2},0).wait(1).to({y:335.4},0).wait(1).to({y:336.5},0).wait(1).to({y:337.5},0).wait(1).to({y:338.4},0).wait(1).to({y:339.3},0).wait(1).to({y:340.1},0).wait(1).to({y:340.9},0).wait(1).to({y:341.6},0).wait(1).to({y:342.3},0).wait(1).to({y:343.1},0).wait(139).to({alpha:0},13).wait(1).to({alpha:1},0).wait(39).to({alpha:0},13).wait(1));

	// Слой 4 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],0,49.3,0,-49.3).s().p("AmDHxIAAvhIMHAAIAAPhg");
	this.shape.setTransform(326.1,99.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],0,49.3,0,-49.3).s().p("AmDHxIAAvhIMHAAIAAPhg");
	this.shape_1.setTransform(234.5,99.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],0,49.3,0,-49.3).s().p("AmDHxIAAvhIMHAAIAAPhg");
	this.shape_2.setTransform(143.4,99.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},286).wait(53));

	// Слой 13
	this.instance_5 = new lib.Символ27();
	this.instance_5.setTransform(235.1,103.6,0.048,0.048);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.Символ24();
	this.instance_6.setTransform(237,41.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:0.43,scaleY:0.43,alpha:0.402},0).wait(1).to({scaleX:0.66,scaleY:0.66,alpha:0.64},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.793},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.953},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.981},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).to({alpha:0},16).to({_off:true},142).wait(121).to({_off:false},0).to({_off:true},14).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).wait(1).to({y:30.9,alpha:0.297},0).wait(1).to({y:24.2,alpha:0.489},0).wait(1).to({y:19.7,alpha:0.619},0).wait(1).to({y:16.4,alpha:0.714},0).wait(1).to({y:13.8,alpha:0.786},0).wait(1).to({y:11.9,alpha:0.842},0).wait(1).to({y:10.3,alpha:0.886},0).wait(1).to({y:9.1,alpha:0.922},0).wait(1).to({y:8.1,alpha:0.951},0).wait(1).to({y:7.3,alpha:0.973},0).wait(1).to({y:6.7,alpha:0.99},0).wait(1).to({y:6.4,alpha:1},0).wait(96).to({y:6.9,alpha:0.989},0).wait(1).to({y:7.6,alpha:0.974},0).wait(1).to({y:8.7,alpha:0.953},0).wait(1).to({y:10,alpha:0.926},0).wait(1).to({y:11.9,alpha:0.889},0).wait(1).to({y:14.2,alpha:0.841},0).wait(1).to({y:17.2,alpha:0.78},0).wait(1).to({y:20.9,alpha:0.706},0).wait(1).to({y:24.8,alpha:0.627},0).wait(1).to({y:29.4,alpha:0.535},0).wait(1).to({y:35.8,alpha:0.406},0).wait(1).to({y:44.7,alpha:0.225},0).wait(1).to({y:55.9,alpha:0},0).to({_off:true},1).wait(14).to({_off:false,y:41.4},0).wait(1).to({y:30.9,alpha:0.297},0).wait(1).to({y:24.2,alpha:0.489},0).wait(1).to({y:19.7,alpha:0.619},0).wait(1).to({y:16.4,alpha:0.714},0).wait(1).to({y:13.8,alpha:0.786},0).wait(1).to({y:11.9,alpha:0.842},0).wait(1).to({y:10.3,alpha:0.886},0).wait(1).to({y:9.1,alpha:0.922},0).wait(1).to({y:8.1,alpha:0.951},0).wait(1).to({y:7.3,alpha:0.973},0).wait(1).to({y:6.7,alpha:0.99},0).wait(1).to({y:6.4,alpha:1},0).wait(14).to({y:6.9,alpha:0.989},0).wait(1).to({y:7.6,alpha:0.974},0).wait(1).to({y:8.7,alpha:0.953},0).wait(1).to({y:10,alpha:0.926},0).wait(1).to({y:11.9,alpha:0.889},0).wait(1).to({y:14.2,alpha:0.841},0).wait(1).to({y:17.2,alpha:0.78},0).wait(1).to({y:20.9,alpha:0.706},0).wait(1).to({y:24.8,alpha:0.627},0).wait(1).to({y:29.4,alpha:0.535},0).wait(1).to({y:35.8,alpha:0.406},0).wait(1).to({y:44.7,alpha:0.225},0).wait(1).to({y:55.9,alpha:0},0).wait(1));

	// Слой 12
	this.instance_7 = new lib.Символ22();
	this.instance_7.setTransform(235.1,94.7,0.049,0.049);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(160).to({_off:false},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.51,scaleY:0.51},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(96).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.05,scaleY:0.05},0).to({_off:true},1).wait(9).to({_off:false},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.51,scaleY:0.51},0).wait(1).to({scaleX:0.59,scaleY:0.59},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.86,scaleY:0.86},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(14).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.83,scaleY:0.83},0).wait(1).to({scaleX:0.78,scaleY:0.78},0).wait(1).to({scaleX:0.72,scaleY:0.72},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.05,scaleY:0.05},0).wait(1));

	// Слой 12 - копия
	this.instance_8 = new lib.Символ23();
	this.instance_8.setTransform(235.1,94.7,0.049,0.049);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(151).to({_off:false},0).wait(1).to({scaleX:0.24,scaleY:0.24},0).wait(1).to({scaleX:0.39,scaleY:0.39},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).to({alpha:0},8).wait(109).to({scaleX:0.05,scaleY:0.05,alpha:1},0).wait(1).to({scaleX:0.24,scaleY:0.24},0).wait(1).to({scaleX:0.39,scaleY:0.39},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.58,scaleY:0.58},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.7,scaleY:0.7},0).wait(1).to({scaleX:0.75,scaleY:0.75},0).wait(1).to({scaleX:0.8,scaleY:0.8},0).wait(1).to({scaleX:0.84,scaleY:0.84},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).to({alpha:0},8).wait(27));

	// Слой 9
	this.instance_9 = new lib.Символ17();
	this.instance_9.setTransform(-4.2,7.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(5).to({x:92},0).wait(5).to({x:187.8},0).wait(5).to({x:284.2},0).wait(6).to({x:379.6},0).wait(6).to({x:476},0).wait(5).to({y:71.5},0).wait(5).to({y:136.1},0).wait(5).to({y:201.1},0).wait(5).to({x:379.6},0).wait(5).to({x:283.6},0).wait(2).to({x:187.5},0).wait(2).to({x:92},0).wait(2).to({x:-4.1,y:201.3},0).wait(2).to({x:-4.5,y:136.1},0).wait(2).to({y:71.7},0).wait(2).to({y:7.1},0).wait(1).to({x:92.1,y:7.3},0).wait(1).to({x:187.5},0).wait(1).to({x:284.1},0).wait(1).to({x:379.6},0).wait(1).to({x:476},0).wait(1).to({x:475.6,y:71.5},0).wait(1).to({x:476,y:136.1},0).wait(1).to({y:201.1},0).wait(1).to({x:380},0).wait(1).to({x:284,y:201.3},0).wait(1).to({x:187.9},0).wait(1).to({x:91.6},0).wait(1).to({x:-4.5},0).wait(1).to({y:136.1},0).wait(1).to({y:71.7},0).wait(1).to({y:7.3},0).wait(1).to({x:91.6},0).wait(1).to({x:187.5},0).wait(1).to({x:283.6},0).wait(1).to({x:379.6},0).wait(1).to({x:475.6},0).wait(1).to({x:476,y:71.7},0).wait(1).to({y:135.9},0).wait(2).to({y:201.1},0).wait(2).to({x:380},0).wait(2).to({x:283.6},0).wait(2).to({x:187.5},0).wait(6).to({x:91.6,y:201.3},0).wait(8).to({x:-4.5},0).wait(7).to({y:135.9},0).wait(9).to({y:71.7},0).wait(43).to({alpha:0},7).wait(102).to({alpha:1},0).wait(26).to({alpha:0},7).to({_off:true},1).wait(19));

	// Слой 2
	this.instance_10 = new lib.Символ11();
	this.instance_10.setTransform(477,139,0.589,0.589,30);

	this.instance_11 = new lib.Символ10();
	this.instance_11.setTransform(479.3,73.2,0.757,0.757);

	this.instance_12 = new lib.Символ13();
	this.instance_12.setTransform(-4.3,136.4,0.69,0.69);

	this.instance_13 = new lib.Символ13();
	this.instance_13.setTransform(379.8,201.2,0.69,0.69);

	this.instance_14 = new lib.Символ12();
	this.instance_14.setTransform(286.7,201.7,0.623,0.623,-30);

	this.instance_15 = new lib.Символ11();
	this.instance_15.setTransform(188.7,202.9,0.589,0.589,30);

	this.instance_16 = new lib.Символ10();
	this.instance_16.setTransform(94.2,202.6,0.757,0.757);

	this.instance_17 = new lib.Символ13();
	this.instance_17.setTransform(379.8,7.6,0.69,0.69);

	this.instance_18 = new lib.Символ12();
	this.instance_18.setTransform(286.7,8.1,0.623,0.623,-30);

	this.instance_19 = new lib.Символ11();
	this.instance_19.setTransform(188.7,9.4,0.589,0.589,30);

	this.instance_20 = new lib.Символ10();
	this.instance_20.setTransform(94.2,9,0.757,0.757);

	this.instance_21 = new lib.Символ7();
	this.instance_21.setTransform(-3.9,69.9,0.724,0.724);

	this.instance_22 = new lib.Символ6();
	this.instance_22.setTransform(476.7,201.2);

	this.instance_23 = new lib.Символ6();
	this.instance_23.setTransform(-3.8,201.2);

	this.instance_24 = new lib.Символ6();
	this.instance_24.setTransform(476.7,8.2);

	this.instance_25 = new lib.Символ6();
	this.instance_25.setTransform(-3.8,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},177).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},109).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},26).wait(27));

	// Слой 1
	this.instance_26 = new lib.Символ1();
	this.instance_26.setTransform(-4.3,136,0.91,0.91);

	this.instance_27 = new lib.Символ1();
	this.instance_27.setTransform(-4.3,71.6,0.91,0.91);

	this.instance_28 = new lib.Символ1();
	this.instance_28.setTransform(475.8,136,0.91,0.91);

	this.instance_29 = new lib.Символ1();
	this.instance_29.setTransform(475.8,71.6,0.91,0.91);

	this.instance_30 = new lib.Символ1();
	this.instance_30.setTransform(475.8,201.2,0.91,0.91);

	this.instance_31 = new lib.Символ1();
	this.instance_31.setTransform(379.8,201.2,0.91,0.91);

	this.instance_32 = new lib.Символ1();
	this.instance_32.setTransform(283.8,201.2,0.91,0.91);

	this.instance_33 = new lib.Символ1();
	this.instance_33.setTransform(187.7,201.2,0.91,0.91);

	this.instance_34 = new lib.Символ1();
	this.instance_34.setTransform(91.8,201.2,0.91,0.91);

	this.instance_35 = new lib.Символ1();
	this.instance_35.setTransform(-4.3,201.2,0.91,0.91);

	this.instance_36 = new lib.Символ1();
	this.instance_36.setTransform(475.8,7.2,0.91,0.91);

	this.instance_37 = new lib.Символ1();
	this.instance_37.setTransform(379.8,7.2,0.91,0.91);

	this.instance_38 = new lib.Символ1();
	this.instance_38.setTransform(283.8,7.2,0.91,0.91);

	this.instance_39 = new lib.Символ1();
	this.instance_39.setTransform(187.7,7.2,0.91,0.91);

	this.instance_40 = new lib.Символ1();
	this.instance_40.setTransform(91.8,7.2,0.91,0.91);

	this.instance_41 = new lib.Символ1();
	this.instance_41.setTransform(-4.3,7.2,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]}).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},177).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},109).to({state:[{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26}]},26).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-27.2,569.4,265.2);


// stage content:



(lib.fruit_coctail_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.scaleX = stage.scaleY = 2;
		
		stage.canvas.width = 600 * 2;
		stage.canvas.height = 300 * 2;
		stage.canvas.style.width = '600px';
		stage.canvas.style.height = '300px';
		
		var shape = new createjs.Shape(new createjs.Graphics().beginStroke("#FFCC00").setStrokeStyle(5).drawRect(0,0,600, 300));
		this.addChild(shape);
		var tween = createjs.Tween.get(shape, {loop: true }).to({alpha:0}, 300).to({alpha:1}, 300);
		
		stage.canvas.onmouseover = MouseOver;
		function MouseOver(){
			_this.main.gotoAndPlay(286);
		}
		
		stage.canvas.onmouseout = MouseOut;
		function MouseOut(){
			_this.main.gotoAndPlay(325);
		}
		
		_this.button.on("mouseover", BtnOver);
		
		function BtnOver()
		{
			_this.main.btn.gotoAndPlay(1);
		}
		
		_this.button.on("mouseout", BtnOut);
		
		function BtnOut()
		{
			_this.main.btn.gotoAndPlay(8);
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(link1, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.button = new lib.Символ29();
	this.button.setTransform(298.9,243.5,0.829,0.773);
	new cjs.ButtonHelper(this.button, 0, 1, 2, false, new lib.Символ29(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 1
	this.main = new lib.Символ2();
	this.main.setTransform(300.1,150,1,1,0,0,0,234.8,102);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.setTransform(300,150);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(300,150);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,68,68,0.098)").s().p("Egu3AXbMAAAgu2MBdvAAAMAAAAu2g");
	this.shape.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,-113.4,640,565.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
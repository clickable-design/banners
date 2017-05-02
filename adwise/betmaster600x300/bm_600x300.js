(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/che.png?1468847195437", id:"che"},
		{src:"images/lei.png?1468847195437", id:"lei"},
		{src:"images/liv.png?1468847195437", id:"liv"},
		{src:"images/qqq.png?1468847195437", id:"qqq"}
	]
};



// symbols:



(lib.che = function() {
	this.initialize(img.che);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.lei = function() {
	this.initialize(img.lei);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.liv = function() {
	this.initialize(img.liv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,196);


(lib.qqq = function() {
	this.initialize(img.qqq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADRCJQgagJgVgSQgVgTgNgbQgMgcAAgkQAAgjAMgbQANgcAVgSQAVgTAagJQAagJAcAAQAWAAAWAGQAWAHAUANQASANANAVQANAUAFAdIgkAAIglAAQgHgWgQgKQgQgKgXAAQgWAAgQAKQgQAKgJASQgIASgBAWQABAVAIASQAJASAQALQAQALAWAAQAYAAARgLQAQgMAHgXIAkAAIAkAAQgEAegNAWQgNAWgTANQgTAOgXAGQgWAGgXAAQgcAAgagJgAKZCPIgmAAIAAiNIiRCNIgaAAIAAkdIBLAAIAACNICRiOIAaAAIAAEeIglAAgAAYCPIhJimIhJCmIhHAAIAAgKICBkWIAfAAICAEWIAAAKgAkbCPIg6AAIg+AAIAAiPIAAiOIA9AAIA4AAIA+AAIAAAhIAAAhIglAAIggAAIglAAIAAAoIBhAAIAABAIhhAAIAAAZIAAAZIAlAAIAiAAIAnAAIAAAgIAAAhIg/AAgAonCPIAAhkIgPAAQgxAAgegRQgegRgOgfQgNgiABgzIAAgjIBLAAIAAAjQAAAZADASQAEATANAKQANAKAcAAIAOAAIAAh1IBLAAIAAEdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-14.6,140.6,29.4);


(lib.Символ63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AASBJQgMgGgGgMQgIgMgBgRIAAgaIAAgZQABgRAIgMQAGgMAMgGQANgGAQgBQAQABAOAGQANAGAHAMQAIAMAAARIAAAZIAAAaQAAARgIAMQgHAMgNAGQgOAGgQABQgQgBgNgGgAAhgmQgGAEAAAJIAAAZIAAAaQAAAJAGAFQAFAFAJAAQAJAAAGgFQAGgFAAgJIAAgaIAAgZQAAgJgGgEQgGgFgJAAQgJAAgFAFgAiBBJQgNgGgJgMQgHgMgBgRIAAgaIAAgZQABgRAHgMQAJgMANgGQAMgGAQgBQARABAMAGQANAGAIAMQAIAMAAARIAAAZIAAAaQAAARgIAMQgIAMgNAGQgMAGgRABQgQgBgMgGgAhzgmQgGAEAAAJIAAAZIAAAaQAAAJAGAFQAGAFAIAAQAJAAAGgFQAGgFAAgJIAAgaIAAgZQAAgJgGgEQgGgFgJAAQgIAAgGAFgACiBNIgUAAIAAiZIAjAAIAiAAQASAAAMAJQAMAIAGANQAHANAAAPQAAAOgHALQgGANgMAJQgMAIgSAAIgdAAIAAAoIgUAAgAC2gaIAAAPIAAAMIAcAAQAGAAAFgCQAEgEABgHQACgGgCgHQgBgGgEgFQgEgEgHgBIgOAAIgOAAIAAAPgAkJBNIAAghIAXAAIAAhYIgVAAIAAggIA7AAIAAB4IAYAAIAAAhg");
	this.shape.setTransform(66.4,-11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC66").s().p("AjxBTQgHgBgGgEQgNgGgHgNQgIgMAAgQIATAAIATAAQAAAIAFAFQAFADAJAAQAIABAFgGQAFgGAAgJQAAgLgHgGQgHgFgJAAIgTAAIAAgFIAWgtIgwAAIAAgmIBqAAIAAAGIgeA5QANADAHAIQAHAIADAHQAEAKAAALQAAAPgHANQgHANgNAJQgNAIgTABQgKAAgHgDgAhyBPQgOgHgJgMQgIgOgBgTQAAgJACgIIAHgOIAxhQIAvAAIgkA7QASgBANAHQANAGAIANQAHAKAAARQAAATgIAOQgJAMgOAHQgPAFgSABQgSgBgOgFgAhiANQgFAFAAAJQAAAJAGAHQAGAFAJABQAKgBAGgFQAFgHAAgJQAAgJgFgFQgFgHgLAAQgKAAgGAHgACqBSIgVAAIAAilIAkAAIAmAAQATAAAOAKQANAIAHAOQAHAOAAARQAAAPgHAMQgHAPgNAJQgOAIgTAAIgfAAIAAArIgWAAgADAgeIAAASIAAAMIAeAAQAHAAAEgBQAFgGABgHQACgGgCgIQgBgHgEgFQgEgEgIgBIgPAAIgPAAIAAAPgABYBSIgUAAIAAgfIhHAAIAAgTIBBhzIAuAAIAABjIAOAAIAAARIAAASIgOAAIAAAfIgUAAgAArAQIAaAAIAAgYIAEgaIgBAAg");
	this.shape_1.setTransform(64.7,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AIiDFIgshiIgqBiIgpAAIAAgGIBKijIATAAIBLCjIAAAGgAF3DFIgKgVIhBAAIgKAVIgqAAIAAgGIBLijIATAAIBLCjIAAAGgAE5CLIAnAAIgUgsgAB9DFIgWAAIAAinIAlAAIAlAAQAUAAANAJQAOAJAGAOQAHAOAAAQQAAAQgHAOQgGAOgOAJQgNAJgUAAIgfAAIAAArIgVAAgACSBTIAAARIAAAPIAfAAQAHAAAEgEQAFgFABgHQABgHgBgHQgBgHgFgFQgEgFgHAAIgQAAIgPAAIAAAPgAgHDFIgVAAIAAinIAyAAIA0AAIAAASIAAAUIg9AAIAACBIgUAAgAhdDFIgXAAIAAhSIhUBSIgPAAIAAinIAsAAIAABSIBUhTIAQAAIAACoIgWAAgAksDFIAAinIArAAIAACngAnRDFIAAinIAqAAIAAAxIAfAAQAUABAOAIQANAJAGANQAHANAAAPQAAAPgHANQgGAOgNAIQgOAJgUAAgAmnCfIAQAAIAPAAQAHgBAFgEQAEgEACgGQABgGgBgGQgCgGgEgDQgFgFgHAAIgfAAgAp1DFIAAinIBHAAQAPAAAMAGQALAHAHAMQAHALAAAPQAAAIgDAIQgDAIgHAFQAKAFAFAJQAFAJAAALQAAAPgGAMQgGAMgLAHQgMAHgRAAgApMCfIAiAAQAHAAADgFQADgEAAgFQAAgGgDgEQgEgEgGAAIgiAAgApMBfIAbAAQAGgBAEgDQADgEAAgGQAAgFgDgEQgEgEgGAAIgbAAgAmZglQgQgEgOgKQgPgJgIgRQgJgQAAgXQAAgXAJgQQAIgRAPgJQAOgKAQgDQARgEARAEQARADAOAKQAOAJAJARQAIAQABAXQgBAXgIAQQgJARgOAJQgOAKgRAEIgRABIgRgBgAmaiZQgJAFgGAJQgFAJAAAOQAAAOAFAJQAGAKAJAEQAJAFAJAAQAKAAAJgFQAJgEAFgKQAGgJAAgOQAAgOgGgJQgFgJgJgFQgJgFgKAAQgJAAgJAFgAjygqQgOgFgLgKQgMgKgGgPQgHgPAAgTQAAgUAHgPQAGgOAMgKQALgKAOgFQAOgFAPAAQAMAAAMADQAMAEAKAHQAKAHAHALQAHALADAQIgUAAIgTAAQgEgMgJgGQgJgFgMAAQgMAAgIAFQgJAGgFAJQgEAKAAANQAAALAEAKQAFAJAJAGQAIAGAMABQANAAAJgHQAJgGAEgMIATAAIATAAQgCAQgHAMQgHALgKAIQgKAHgMADQgNAEgMAAQgPAAgOgFgAJQgnIgohaIgnBaIgnAAIAAgGIBGiWIAQAAIBGCWIAAAGgAGygnIgVAAIAAhMIhOBMIgOAAIAAiaIApAAIAABLIBOhMIAOAAIAACbIgUAAgACqgnIAAiaIBCAAQANAAALAGQALAGAGALQAGALAAANQAAAHgDAHQgDAIgFAFQAJAFAFAIQAEAIAAAKQAAAOgFALQgGALgLAGQgKAHgQAAgADQhKIAfAAQAGAAADgEQADgEAAgFQAAgFgDgEQgDgEgGAAIgfAAgADQiFIAZAAQAGAAACgEQADgEAAgEQAAgFgDgEQgCgEgHAAIgYAAgABvgnIgJgTIg9AAIgJATIglAAIAAgGIBEiWIARAAIBFCWIAAAGgAA1hcIAkAAIgSgpgAhXgnIAAh3IgmAAIAAgSIAAgRIBzAAIAAARIAAASIgmAAIAAB3IgnAAgAodgnIAAh2IgwAAIAAB2IgUAAIgUAAIAAiaIAIAAIANAAIAWAAIAiAAIAzAAIAACaIgoAAg");
	this.shape_2.setTransform(-30,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-19.9,186.1,39.8);


(lib.Символ61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC33").s().p("AjjBWIgNgFQgMgHgIgNQgIgNAAgQIATAAIAUAAQAAAJAFAEQAFAEAJAAQAJAAAFgGQAEgGAAgIQAAgNgHgEQgGgGgKgBIgTAAIAAgFIAWguIgxAAIAAgmIBsAAIAAAGIgfA5QANAEAIAIQAHAIAEAHQADALAAALQAAAPgHAOQgGAOgOAHQgNAKgUAAQgKAAgIgCgAhkBPQgPgHgHgMQgHgMgCgOQgBgNAGgMQAGgLALgJQgIgKgCgNQgCgMAFgNQAGgMAMgIQANgIAUAAQAUAAANAIQAMAIAGAMQAFAMgCANQgCANgIAKQALAKAGALQAEAMAAAOQgBANgIALQgHAMgOAHQgOAIgVAAQgVAAgOgIgAhPANQgFAEgCAGQgCAGACAHQACAGAFAFQAGADAIAAQAJAAAFgDQAGgFABgGQACgHgCgGQgBgGgGgEQgFgFgJAAQgIAAgGAFgAhNgxQgEAFAAAFQAAAFAEAEQAEAEAIABQAIgBAEgEQAEgEAAgFQAAgFgEgFQgEgEgIAAQgIAAgEAEgACaBUIgWAAIAAioIAmAAIAmAAQAUAAANAJQAOAKAHAOQAHAOAAAQQAAARgHAMQgHAOgOAJQgNAKgUAAIggAAIAAArIgWAAgACwgdIAAARIAAANIAfAAQAHAAAFgCQAEgGACgGQABgIgBgHQgBgHgFgFQgFgEgHgBIgPAAIgQAAIAAAQgAAMBUIAAgjIAaAAIAAhiIgXAAIAAgjIBBAAIAACFIAaAAIAAAjg");
	this.shape.setTransform(66.1,6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAWBJQgNgGgHgMQgHgMAAgRIAAgaIAAgaQAAgRAHgLQAHgMANgHQANgGAQAAQARAAANAGQAMAHAJAMQAHALAAARIAAAaIAAAaQAAARgHAMQgJAMgMAGQgNAHgRAAQgQAAgNgHgAAlgnQgGAFAAAJIAAAZIAAAaQAAAJAGAFQAFAEAJAAQAJAAAGgEQAGgFAAgJIAAgaIAAgZQAAgJgGgFQgGgEgJAAQgJAAgFAEgAh/BJQgMgGgJgMQgHgMAAgRIAAgaIAAgaQAAgRAHgLQAJgMAMgHQANgGARAAQAQAAANAGQANAHAHAMQAJALAAARIAAAaIAAAaQAAARgJAMQgHAMgNAGQgNAHgQAAQgRAAgNgHgAhwgnQgGAFAAAJIAAAZIAAAaQAAAJAGAFQAGAEAJAAQAIAAAGgEQAGgFAAgJIAAgaIAAgZQAAgJgGgFQgGgEgIAAQgJAAgGAEgACfBMIgUAAIAAiYIAjAAIAiAAQATAAAMAIQAMAJAGANQAGANABAPQgBAOgGALQgGANgMAJQgMAIgTAAIgcAAIAAAnIgVAAgAC0gbIAAAQIAAAMIAcAAQAGAAAFgCQADgEABgHQACgGgBgHQgCgHgDgFQgEgEgHAAIgPAAIgNAAIAAAOgAkHBMIAAggIAYAAIAAhYIgWAAIAAggIA8AAIAAB4IAYAAIAAAgg");
	this.shape_1.setTransform(66.7,-14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AI4C7IgshkIgrBkIgrAAIAAgHIBNimIASAAIBOCmIAAAHgAGLC7IgKgWIhEAAIgKAWIgrAAIAAgHIBOimIARAAIBOCmIAAAHgAFLCAIAnAAIgTgtgACKC7IgWAAIAAirIAmAAIAmAAQAUAAANAKQAOAJAHAOQAHAOAAAQQAAARgHAOQgHAOgOAKQgNAJgUAAIgfAAIAAAsIgXAAgAChBHIAAARIAAAPIAfAAQAHAAAEgEQAFgFABgHQACgIgCgHQgBgHgFgFQgEgEgHgBIgQAAIgPAAIAAAQgAACC7IgTAAIAAirIAzAAIA0AAIAAATIAAAUIg+AAIAACEIgWAAgAhUC7IgXAAIAAhUIhWBUIgQAAIAAirIAtAAIAABUIBWhVIAQAAIAACsIgWAAgAkoC7IAAirIAsAAIAACrgAnQC7IAAirIAsAAIAAAzIAgAAQATAAAOAIQAOAKAHANQAGAOAAAPQAAAPgGAOQgHANgOAJQgOAIgTABgAmkCUIAPAAIAQAAQAIgBAEgDQAEgFACgGQABgGgBgGQgCgGgEgFQgEgEgIAAIgfAAgAp3C7IAAirIBJAAQAPAAAMAHQAMAHAGAMQAIAMAAAOQAAAIgEAJQgDAIgHAGQALAEAFAKQAFAJAAALQAAAPgGAMQgGAMgLAHQgNAHgRABgApNCUIAiAAQAIAAADgEQADgFAAgFQAAgGgEgFQgDgEgHAAIgiAAgApNBTIAbAAQAHAAAEgFQADgEAAgFQAAgGgDgDQgEgEgHgBIgbAAgAmagbQgQgDgOgKQgPgKgJgQQgIgQAAgYQAAgXAIgQQAJgQAPgKQAOgKAQgDQASgEAQAEQARADAPAKQAOAKAIAQQAIAQABAXQgBAYgIAQQgIAQgOAKQgPAKgRADQgIACgJAAQgIAAgJgCgAmciPQgIAFgGAJQgFAJAAAOQAAAOAFAKQAGAJAIAFQAJAFAKAAQAKAAAJgFQAJgFAGgJQAFgKAAgOQAAgOgFgJQgGgJgJgFQgJgEgKAAQgKAAgJAEgAjyggQgPgEgLgLQgLgKgHgOQgHgPAAgUQAAgTAHgPQAHgPALgKQALgKAPgFQAOgFAOAAQANAAAMADQAMAEAJAHQALAHAHALQAHAMACAPIgTAAIgTAAQgEgMgJgGQgJgFgNAAQgMAAgHAFQgJAGgFAJQgFAKAAANQAAAMAFAJQAEAKAKAGQAHAGAMAAQANAAAKgGQAJgGADgNIAUAAIATAAQgCAQgHAMQgHAMgLAHQgJAHgMAEQgNADgNAAQgOAAgOgFgAJSgdIgnhaIgoBaIgnAAIAAgFIBGiXIARAAIBFCXIAAAFgAG0gdIgVAAIAAhMIhOBMIgOAAIAAiaIAoAAIAABMIBOhNIAPAAIAACbIgUAAgACqgdIAAiaIBDAAQAOAAAKAGQALAGAGALQAHALAAANQAAAHgEAIQgCAHgGAFQAJAFAFAIQAFAIAAALQAAANgGALQgGALgKAHQgLAGgQAAgADRhAIAgAAQAGAAADgEQACgEAAgFQAAgFgCgEQgEgEgFAAIggAAgADRh7IAZAAQAGAAACgDQADgFAAgEQAAgFgDgEQgCgEgGAAIgZAAgABvgdIgJgTIg8AAIgKATIgkAAIAAgFIBDiXIARAAIBHCXIAAAFgAA2hRIAjAAIgSgpgAhXgdIAAh3IgmAAIAAgSIAAgRIBzAAIAAARIAAASIglAAIAAB3IgoAAgAofgdIAAh2IgwAAIAAB2IgUAAIgUAAIAAiaIAJAAIANAAIAVAAIAiAAIAzAAIAACaIgoAAg");
	this.shape_2.setTransform(-29.7,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-22.6,186.1,37.8);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AAMAzQgIgEgEgJQgFgIAAgMIAAgSIAAgRQAAgMAFgJQAEgIAIgFQAKgDALgBQAMABAJADQAIAFAGAIQAFAJABAMIAAARIAAASQgBAMgFAIQgGAJgIAEQgJAEgMABQgLgBgKgEgAAWgbQgDADAAAHIAAARIAAARQAAAHADAEQAFADAGAAQAGAAAEgDQAEgEAAgHIAAgRIAAgRQAAgHgEgDQgEgDgGAAQgGAAgFADgAhbAzQgIgEgFgJQgHgIAAgMIAAgSIAAgRQAAgMAHgJQAFgIAIgFQAJgDAMgBQALABAJADQAKAFAFAIQAGAJgBAMIAAARIAAASQABAMgGAIQgFAJgKAEQgJAEgLABQgMgBgJgEgAhQgbQgEADAAAHIAAARIAAARQAAAHAEAEQAEADAGAAQAHAAADgDQAFgEgBgHIAAgRIAAgRQABgHgFgDQgDgDgHAAQgGAAgEADgABxA1IgNAAIAAhqIAXAAIAYAAQANAAAIAGQAKAGAEAJQAEAJAAALQAAAKgEAHQgEAJgKAGQgIAGgNAAIgTAAIAAAbIgPAAgACAgSIAAAKIAAAJIATAAQAFAAADgCQACgDABgEQABgEgBgFQAAgFgDgDQgDgDgFAAIgKAAIgJAAIAAAKgAi5A1IAAgXIAQAAIAAg8IgPAAIAAgXIAqAAIAABTIARAAIAAAXg");
	this.shape.setTransform(46.5,-8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC33").s().p("AhRA3QgIgEgFgJQgGgJAAgLIAZAAQABAFAEADQADADAGAAQAGAAAEgDQADgEAAgIQAAgEgDgEQgDgDgEgBQgHgCgHAAIgPABIgLABIAAhAIBJAAIAAAZIgxAAIAAAPQALgBAJABQAKACAIAEQAHAEAFAIQAEAGAAAMQAAALgEAJQgFAJgJAGQgJAGgNABQgMgBgJgEgAixA3QgJgEgFgJQgFgJAAgLIAZAAQAAAFAEADQADADAHAAQAGAAADgDQAEgEAAgIQAAgEgDgEQgDgDgFgBQgHgCgGAAIgPABIgLABIAAhAIBJAAIAAAZIgxAAIAAAPQAKgBAKABQAJACAIAEQAIAEAFAIQADAGABAMQAAALgEAJQgFAJgKAGQgIAGgOABQgMgBgIgEgAAOA2QgKgDgEgJQgGgKABgOIABgLIAEgJIAgg5IAhAAIgYAqQAMgBAJAFQAKAEAEAJQAFAHABALQAAAOgGAKQgGAJgLADQgKAFgMAAQgMAAgLgFgAAaAJQgEAEAAAFQAAAHAEAFQAEADAHAAQAHAAAEgDQAEgFgBgHQAAgFgCgEQgFgFgHAAQgHAAgEAFgAB2A5IgPAAIAAhzIAbAAIAZAAQAOAAAJAHQAKAGAEAKQAFAKAAALQAAALgFAIQgEAJgKAHQgJAGgOAAIgWAAIAAAeIgPAAgACFgUIAAALIAAAJIAWAAQAFAAADgBQADgEABgEQABgFgBgFQgBgFgDgDQgDgEgFAAIgLAAIgLAAIAAALg");
	this.shape_1.setTransform(45.4,8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AF9CLIgfhEIgdBEIgdAAIAAgEIA0hyIANAAIA1ByIAAAEgAEFCLIgGgOIgvAAIgGAOIgeAAIAAgEIA1hyIANAAIA1ByIAAAEgADaBjIAcAAIgPgfgABXCLIgPAAIAAh1IAZAAIAaAAQAOAAAKAGQAIAHAFAKQAFAKAAALQAAALgFAKQgFAJgIAGQgKAHgOAAIgVAAIAAAeIgPAAgABmA8IAAALIAAALIAVAAQAFAAADgDQADgEAAgEQABgFAAgFQgBgGgCgCQgEgFgFAAIgLAAIgKAAIAAAMgAgFCLIgPAAIAAh1IAjAAIAkAAIAAAOIAAAMIgrAAIAABbIgNAAgAhBCLIgQAAIAAg6Ig6A6IgLAAIAAh1IAfAAIAAA6IA6g7IALAAIAAB2IgPAAgAjSCLIAAh1IAeAAIAAB1gAlFCLIAAh1IAdAAIAAAjIAWAAQAOABAJAFQAKAFAEAKQAFAKAAAKQAAAKgFAKQgEAJgKAGQgJAGgOAAgAkoBwIALAAIALAAQAFAAAEgDQADgDAAgEQABgEgBgEQgBgEgEgDQgCgDgFAAIgWAAgAm4CLIAAh1IAyAAQAKAAAJAFQAHAFAFAHQAFAJAAAKQAAAFgDAGQgBAGgFADQAHAEAEAGQADAHAAAHQAAALgEAHQgEAJgIAFQgJAFgLAAgAmbBwIAXAAQAFAAADgDQACgDAAgEQAAgDgCgDQgDgEgFAAIgXAAgAmbBDIATAAQAEAAACgCQACgEAAgDQAAgEgCgCQgCgEgFAAIgSAAgAkegbQgLgDgKgGQgKgHgGgLQgGgMAAgPQAAgRAGgLQAGgMAKgGQAKgIALgBQAMgEAMAEQALABALAIQAKAGAFAMQAHALAAARQAAAPgHAMQgFALgKAHQgLAGgLADIgMABIgMgBgAkfhsQgGADgEAHQgDAGAAALQAAAJADAGQAEAHAGAEQAGADAIAAQAGAAAGgDQAGgEAEgHQAFgGAAgJQAAgLgFgGQgEgHgGgDQgGgEgGAAQgIAAgGAEgAipgfQgJgCgJgIQgHgGgFgLQgFgKAAgOQAAgNAFgLQAFgKAHgIQAJgGAJgEQAKgDALAAQAIAAAIACQAJACAGAGQAIAFAFAHQAEAIACALIgNAAIgOAAQgDgJgGgDQgGgEgIgBQgJABgGAEQgGADgDAHQgDAGAAAKQAAAIADAHQADAGAGAEQAGAFAJAAQAIAAAGgFQAHgEACgIIAPAAIANAAQgCALgEAIQgGAIgHAFQgHAGgJABQgIADgIAAQgLAAgKgEgAGegcIgcg/IgcA/IgbAAIAAgEIAxhpIAMAAIAxBpIAAAEgAEvgcIgOAAIAAg1Ig3A1IgJAAIAAhsIAcAAIAAA1IA3g1IAKAAIAABsIgPAAgAB2gcIAAhsIAvAAQAJAAAIAEQAHAEAFAIQAEAHAAAKQAAAFgCAFQgCAFgEADQAGAEAEAGQADAGAAAHQAAAKgEAHQgDAIgJAEQgHAFgLAAgACRg0IAWAAQAEAAADgDQACgDAAgDQAAgEgCgDQgDgDgEAAIgWAAgACRheIASAAQADAAADgDQACgCAAgEQAAgDgCgCQgDgEgEAAIgRAAgABOgcIgHgOIgrAAIgGAOIgZAAIAAgEIAuhpIAMAAIAyBpIAAAEgAAlhBIAZAAIgMgdgAg9gcIAAhUIgaAAIAAgMIAAgMIBQAAIAAAMIAAAMIgaAAIAABUIgcAAgAl7gcIAAhTIghAAIAABTIgOAAIgOAAIAAhsIAGAAIAJAAIAPAAIAYAAIAkAAIAABsIgdAAg");
	this.shape_2.setTransform(-20.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.1,-14,130.3,28.2);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AobJIIAAyPIQ3AAIAASPg");
	this.shape.setTransform(54,58.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AreLFIAA2JIW9AAIAAWJg");
	this.shape.setTransform(73.5,71);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMeBnIgtAAIAAhmIAAhlIAaAAIAaAAIAAA9IAmAAQAYABARAKQARAKAHAQQAJAPAAASQAAASgJARQgHAQgRALQgRAKgYAAIgtAAgAMlAfIAAAZIATAAIATAAQAIAAAGgFQAFgFACgHQACgIgCgHQgCgHgGgFQgEgFgJgBIgmAAIAAAZgAKjBnIg2h2Ig0B2IgyAAIAAgHIBcjGIAWAAIBdDGIAAAHgAFqBnIAAgFIAhhDIhGh7IAAgIIA7AAIAmBMIABAAIAkhMIA5AAIAAAIIhiDDgADzBnIAAibIg/AAIAACbIgbAAIgaAAIAAjLIALAAIARAAIAcAAIAuAAIBEAAIAADLIg2AAgAgxBnIgbAAIAAjLIAtAAIAsAAQAZAAAQAMQARALAHARQAJARAAAUQAAATgJAPQgHASgRALQgQAKgZABIgkAAIAAA0IgaAAgAgXgiIAAAVIAAARIAkAAQAJAAAFgEQAFgGACgJQABgIgBgJQgBgJgGgGQgFgGgJAAIgRAAIgTAAIAAATgAilBnIgqAAIgsAAIAAhmIAAhlIAsAAIAoAAIAsAAIAAAXIAAAYIgbAAIgWAAIgbAAIAAAdIBGAAIAAAtIhGAAIAAASIAAARIAbAAIAYAAIAbAAIAAAYIAAAXIgsAAgAnEBnIAAjLIBXAAQASAAAPAIQAOAJAIAOQAJAOAAASQAAAKgEAJQgFAKgHAHQANAEAGALQAGALAAAOQAAARgIAPQgHAPgOAIQgPAJgUAAgAmSA4IArAAQAHAAAEgFQAEgFAAgHQAAgHgEgFQgEgFgIAAIgqAAgAmSgUIAiAAQAHAAAEgFQAEgFAAgGQAAgHgEgFQgEgFgIAAIghAAgAoTBnIgbAAIAAhlIhpBlIgSAAIAAjLIA1AAIAABkIBphlIATAAIAADMIgbAAgAr4BnIg1h2IgzB2Ig0AAIAAgHIBcjGIAXAAIBcDGIAAAHg");
	this.shape.setTransform(91.7,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.4,20.8);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGQCJQgagJgVgSQgVgTgMgbQgNgcAAgkQAAgjANgbQAMgcAVgSQAVgTAagJQAagJAcAAQAXAAAWAGQAWAHATANQATANANAVQANAUAEAdIgkAAIgkAAQgIgWgQgKQgQgKgXAAQgWAAgQAKQgPAKgJASQgJASAAAWQAAAVAJASQAIASAQALQAQALAWAAQAYAAARgLQARgMAGgXIAkAAIAkAAQgEAegNAWQgNAWgTANQgTAOgWAGQgXAGgXAAQgcAAgagJgAsaCJQgagJgVgSQgVgTgMgbQgNgcAAgkQAAgjANgbQAMgcAVgSQAVgTAagJQAagJAcAAQAXAAAWAGQAWAHATANQATANANAVQANAUAEAdIgkAAIgkAAQgIgWgQgKQgQgKgXAAQgWAAgQAKQgPAKgJASQgJASAAAWQAAAVAJASQAIASAQALQAQALAWAAQAYAAARgLQARgMAGgXIAkAAIAkAAQgEAegNAWQgNAWgTANQgTAOgWAGQgXAGgXAAQgcAAgagJgAV/CPIgmAAIAAiNIiRCNIgaAAIAAkdIBLAAIAACNICRiOIAbAAIAAEeIgmAAgAPxCPIAAjbIhGAAIAAghIAAghIDVAAIAAAhIAAAhIhGAAIAADbIhJAAgANYCPIgmAAIAAiNIiRCNIgaAAIAAkdIBLAAIAACNICRiOIAbAAIAAEeIgmAAgAgiCPIglAAIAAkdIA/AAIA+AAQAiABAXAPQAXAQALAYQAMAYAAAbQAAAcgMAWQgLAYgXAPQgXAPgiABIg1AAIAABJIgjAAgAABgyIAAAdIAAAZIA0AAQAMAAAIgGQAHgJADgMQACgMgCgMQgCgMgIgJQgHgIgNAAIgaAAIgaAAIAAAagAjECPIg7AAIg+AAIAAiPIAAiOIA9AAIA5AAIA9AAIAAAhIAAAhIglAAIggAAIglAAIAAAoIBiAAIAABAIhiAAIAAAZIAAAZIAmAAIAiAAIAmAAIAAAgIAAAhIg+AAgAn5CPIAAjbIhHAAIAAghIAAghIDVAAIAAAhIAAAhIhGAAIAADbIhIAAgAvjCPIg7AAIg+AAIAAiPIAAiOIA9AAIA5AAIA9AAIAAAhIAAAhIglAAIggAAIglAAIAAAoIBiAAIAABAIhiAAIAAAZIAAAZIAmAAIAiAAIAmAAIAAAgIAAAhIg+AAgAzJCPIhKimIhJCmIhIAAIAAgKICBkWIAgAAICBEWIAAAKg");
	this.shape.setTransform(144.5,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289.1,29.4);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Ap1I+IAAx7ITrAAIAAR7g");
	this.shape.setTransform(63,57.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AheHsQmmjmBArxQAsAQAbgJQDVBGCehCIAAgLIAKAGIALgGIAAALQCeBCDVhGQAbAJAsgQQBALxmmDmg");
	this.shape.setTransform(46.2,49.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,98.6);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Am9G+Qi5i4gBkGQABkFC5i4QC4i5EFgBQEFABC5C5QC5C4AAEFQAAEGi5C4Qi5C5kFAAQkFAAi4i5g");
	this.shape.setTransform(63.2,63.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.4,126.4);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAwIACgKQgDgBgDgDQgCgCAAgFQAAgEADgDQAEgEAFAAQAFAAADAEQAEADAAAEIAAADIgBACIgGAQgAt9AmQgJgCgIgFQgHgGgFgJQgEgIAAgLQAAgMAEgJQAFgJAHgFQAIgGAJgCQAJgBAKABQAJACAHAGQAJAFAEAJQAEAJAAAMQAAALgEAIQgEAJgJAGQgHAFgJACIgJABIgKgBgAt+gXQgEACgEAFQgDAGABAHQgBAFADAGQAEAFAEACQAGADAEAAQAGAAAFgDQAEgCADgFQAEgGAAgFQAAgHgEgGQgDgFgEgCQgFgDgGAAQgEAAgGADgANyAjQgHgDgFgHQgEgGAAgKIABgIQACgCACgEIAYgpIAYAAIgSAeQAJAAAHADQAGADAEAHQADAEAAAIQAAAKgDAGQgFAHgHADQgIAEgIAAQgJAAgIgEgAN7ACQgDADAAAEQAAAFADADQACADAGAAQAEAAADgDQADgDAAgFQAAgEgDgDQgCgCgFAAQgGAAgCACgAMsAjQgGgDgDgGQgEgGgBgIIATAAQAAADADACQACACAEABQAEAAADgDQACgCABgGQgBgEgCgBQgBgCgDgCQgFAAgFAAIgLAAIgIAAIAAgtIA0AAIAAASIgiAAIAAAKQAHAAAHABQAHABAFADQAFACAEAHQADADAAAJQAAAIgDAGQgEAHgGAEQgHAFgJAAQgJAAgGgEgALnAjQgHgDgDgGQgEgGAAgIIATAAQgBADADACQACACAFABQAEAAADgDQACgCABgGQgBgEgCgBQgBgCgEgCQgFAAgFAAIgKAAIgIAAIAAgtIA0AAIAAASIgjAAIAAAKQAIAAAGABQAHABAGADQAFACAEAHQACADAAAJQABAIgDAGQgEAHgGAEQgHAFgKAAQgIAAgGgEgAiMAjQgGgDgFgHQgEgGAAgJIAAgNIAAgPQAAgIAEgHQAFgGAGgEQAIgDAIgBQAJABAHADQAHAEAFAGQADAHAAAIIAAAPIAAANQAAAJgDAGQgFAHgHADQgHAEgJAAQgIAAgIgEgAiDgZQgDADgBAFIAAAOIAAAMQABAGADACQADADAEAAQAFAAADgDQADgCAAgGIAAgMIAAgOQAAgFgDgDQgDgCgFAAQgEAAgDACgAjaAjQgHgDgFgHQgDgGAAgJIAAgNIAAgPQAAgIADgHQAFgGAHgEQAHgDAIgBQAJABAIADQAGAEAFAGQAEAHAAAIIAAAPIAAANQAAAJgEAGQgFAHgGADQgIAEgJAAQgIAAgHgEgAjSgZQgDADAAAFIAAAOIAAAMQAAAGADACQADADAEAAQAFAAAEgDQADgCAAgGIAAgMIAAgOQAAgFgDgDQgEgCgFAAQgEAAgDACgAsiAjQgIgDgGgFQgGgFgDgIQgFgIAAgJQAAgKAFgJQADgIAGgFQAGgFAIgEQAIgCAHAAQAIAAAGACQAGACAGAEQAGAEADAFQAEAGABAJIgLAAIgKAAQgCgGgFgDQgEgEgIAAQgFAAgFAEQgFADgDAEQgCAGAAAHQAAAFACAEQADAFAFAEQAFADAFAAQAIAAAEgDQAGgEABgGIALAAIALAAQgCAJgDAGQgEAHgGADQgFAEgHACQgGACgIAAQgHAAgIgDgAO9AlIgLAAIAAhSIATAAIASAAQAKAAAHAFQAHAEADAHQAEAIgBAIQABAHgEAGQgDAHgHAEQgHAEgKAAIgQAAIAAAWIgKAAgAPHgSIAAAIIAAAIIAQAAQAEAAACgCQACgCABgEQAAgDAAgFIgDgFQgCgDgEAAIgIAAIgIAAIAAAIgAKcAlIgVgvIgWAvIgVAAIAAgDIAmhQIAJAAIAmBQIAAADgAJGAlIgEgLIgiAAIgEALIgWAAIAAgDIAnhQIAJAAIAmBQIAAADgAI6AIIgJgUIgKAUIATAAgAHIAlIgLAAIAAhSIATAAIASAAQALAAAGAFQAHAEADAHQAEAIAAAIQAAAHgEAGQgDAHgHAEQgGAEgLAAIgPAAIAAAWIgLAAgAHTgSIAAAIIAAAIIAPAAQAEAAADgCQACgCAAgEQABgDgBgFIgCgFQgCgDgFAAIgHAAIgIAAIAAAIgAGFAlIgLAAIAAhSIAbAAIAaAAIAAAJIAAAKIgfAAIAAA/IgLAAgAFZAlIgKAAIAAgnIgrAnIgIAAIAAhSIAXAAIAAApIApgqIAIAAIAABTIgLAAgADyAlIAAhSIAVAAIAABSgACeAlIAAhSIAWAAIAAAZIAPAAQALAAAGAEQAHAFADAHQAEAEAAAHQAAAIgEAHQgDAGgHAEQgGAFgLAAgAC0ASIAIAAIAHAAQAFgBABgCIADgEIAAgGQAAgEgDgBQgCgBgEAAIgPAAgABMAlIAAhSIAkAAQAHAAAHAEQAFADAEAGQADAFAAAIIgBAIIgGAHQAFACADACQACAFAAAGQAAAHgDAGQgDAGgFADQgGAEgIAAgABhASIARAAQADAAACgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgDgCgCQgCgCgDAAIgRAAgABhgMIANAAQADgBACgBQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgDgDAAIgNAAgAg9AlIgMAAIAAhSIATAAIATAAQAJAAAHAFQAHAEAEAHQADAIAAAIQAAAHgDAGQgEAHgHAEQgHAEgJAAIgQAAIAAAWIgKAAgAgzgSIAAAIIAAAIIAQAAQADAAACgCQACgCABgEQABgDAAgFIgEgFQgCgDgDAAIgIAAIgIAAIAAAIgAkiAlIAAgRIANAAIAAgwIgMAAIAAgRIAgAAIAABBIANAAIAAARgAlbAlIgVgvIgWAvIgVAAIAAgDIAmhQIAJAAIAmBQIAAADgAmxAlIgLAAIAAgnIgrAnIgHAAIAAhSIAWAAIAAApIAqgqIAIAAIAABTIgLAAgApBAlIAAhSIAkAAQAHAAAHAEQAFADAEAGQADAFAAAIIgCAIIgEAHQAFACACACQADAFAAAGQAAAHgEAGQgDAGgFADQgGAEgIAAgAosASIARAAQAEAAABgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgBgCQgCgCgDAAIgRAAgAosgMIANAAQADgBACgBQAAgBABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgDgDAAIgNAAgAphAlIgFgLIghAAIgFALIgVAAIAAgDIAmhQIAJAAIAmBQIAAADgAptAIIgKgUIgJAUIATAAgArNAlIAAg/IgVAAIAAgKIAAgJIA+AAIAAAJIAAAKIgVAAIAAA/IgUAAgAvFAlIAAg+IgaAAIAAA+IgLAAIgLAAIAAhSIAFAAIAHAAIAMAAIATAAIAbAAIAABSIgWAAg");
	this.shape.setTransform(101.4,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202.8,9.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.482,1],-34.6,-17.4,34.6,17.5).s().p("Av+SSMAVIgqAIK1FdMgVIAqAg");
	this.shape.setTransform(102.3,151.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.7,303.9);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#FF2C00","#980000"],[0,0.482,1],0,-24.5,0,24.6).s().p("AuhDqIAAnUIdDAAIAAHUg");
	this.shape.setTransform(93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,47);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuhDqIAAnUIdDAAIAAHUg");
	this.shape.setTransform(93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,47);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgxaAZNMAAAgyZMBi1AAAMAAAAyZg");
	this.shape.setTransform(316.4,161.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.8,322.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,86.1,0,-86.1).s().p("EgwwANdIAA65MBhhAAAIAAa5g");
	this.shape.setTransform(312.1,256.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.1,-56.4,0.1,70.6).s().p("EgwwAMWIAA4rMBhhAAAIAAYrg");
	this.shape_1.setTransform(312.1,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,624.3,342.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEzBoQgUgHgRgOQgQgNgJgVQgKgWAAgbQAAgaAKgWQAJgVAQgNQARgOAUgIQATgHAUAAQATAAARAGQAQADAQALQAOAKAIAQQALAQADAWIgbAAIgcAAQgFgRgNgIQgMgIgTAAQgPAAgNAIQgMAIgGANQgHAOAAARQAAAQAHAOQAGANAMAJQANAIAPABQATAAANgJQANgJAGgRIAbAAIAbAAQgCAWgLARQgLARgNAJQgPAKgRAGQgRAFgTAAQgUAAgTgIgApeBoQgUgHgRgOQgPgNgKgVQgKgWAAgbQAAgaAKgWQAKgVAPgNQARgOAUgIQAUgHAUAAQASAAASAGQAPADAPALQAPAKAJAQQALAQACAWIgbAAIgcAAQgEgRgOgIQgLgIgTAAQgPAAgNAIQgMAIgHANQgGAOAAARQAAAQAGAOQAHANAMAJQANAIAPABQATAAAMgJQANgJAGgRIAbAAIAbAAQgCAWgKARQgLARgPAJQgOAKgQAGQgSAFgSAAQgUAAgUgIgAQ0BtIgdAAIAAhsIhuBsIgUAAIAAjZIA5AAIAABrIBuhsIAVAAIAADaIgdAAgAMEBtIAAinIg1AAIAAgZIAAgZICiAAIAAAZIAAAZIg2AAIAACnIg3AAgAKPBtIgdAAIAAhsIhvBsIgTAAIAAjZIA5AAIAABrIBthsIAWAAIAADaIgdAAgAgZBtIgdAAIAAjZIAwAAIAuAAQAaAAASAMQARALAJAUQAKASgBAVQABAVgKAQQgJATgRALQgSAMgaAAIgoAAIAAA4IgZAAgAAAgmIAAAXIAAARIAoAAQAJAAAHgDQAFgHACgJQACgJgBgKQgDgJgFgHQgFgFgLgBIgUAAIgUAAIAAAUgAiVBtIgtAAIgwAAIAAhtIAAhsIAvAAIArAAIAvAAIAAAZIAAAZIgbAAIgaAAIgcAAIAAAfIBKAAIAAAvIhKAAIAAAUIAAAUIAcAAIAaAAIAdAAIAAAYIAAAZIguAAgAmCBtIAAinIg1AAIAAgZIAAgZICiAAIAAAZIAAAZIg2AAIAACnIg3AAgAr4BtIgtAAIgwAAIAAhtIAAhsIAvAAIArAAIAvAAIAAAZIAAAZIgbAAIgZAAIgdAAIAAAfIBKAAIAAAvIhKAAIAAAUIAAAUIAdAAIAaAAIAdAAIAAAYIAAAZIgvAAgAuoBtIg5h+Ig4B+Ig3AAIAAgIIBkjUIAYAAIBjDUIAAAIg");
	this.shape.setTransform(110.5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221,22.5);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AaqIpQjljmAAlDQAAlDDljlQDljlFEAAQFEAADlDlQDmDlAAFDQAAFDjmDmQjlDllEAAQlEAAjljlgEgr8AIpQjljmAAlDQAAlDDljlQDmjlFEAAQFEAADlDlQDlDlAAFDQAAFDjlDmQjlDllEAAQlEAAjmjlg");
	this.shape.setTransform(264.9,78.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,0,608.4,156.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lei();
	this.instance.setTransform(0,0,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lei();
	this.instance.setTransform(0,0,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.lei();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.liv();
	this.instance.setTransform(-25,-33,1.337,1.337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-33,199.2,262.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.che();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.qqq();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.Символ56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ63();
	this.instance.setTransform(93.1,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,39.9);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ65();
	this.instance.setTransform(70.3,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.6,29.4);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ61();
	this.instance.setTransform(93,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,37.9);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ59();
	this.instance.setTransform(65.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130.3,28.2);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(63.2,63.2,1,1,0,0,0,63.2,63.2);
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-2,130,130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,140,140);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuhDqIAAnUIdDAAIAAHUg");
	var mask_graphics_39 = new cjs.Graphics().p("AuhDqIAAnUIdDAAIAAHUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:93,y:23.5}).wait(39).to({graphics:mask_graphics_39,x:93,y:23.5}).wait(61));

	// Слой 2
	this.instance = new lib.Символ35();
	this.instance.setTransform(-97.3,10,1,1,0,0,0,102.3,151.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:311.3,y:16.5},39).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,47);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ32();
	this.instance.setTransform(93,23.5,1,1,0,0,0,93,23.5);
	this.instance.alpha = 0.32;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(93,23.5,1,1,0,0,0,93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.6,-141.9,385.7,303.9);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnEA2IAAgLIg6AAIAAALIgVAAIAAggIAKAAIAihLIALAAIAiBLIALAAIAAAggAnTAVIgPghIgNAhIAcAAgABkApQgJgDgHgGQgHgGgEgJQgFgKAAgKQAAgNAFgJQAEgKAHgGQAHgGAJgDQAJgDAJAAQAIAAAIACQAHACAHAEQAGAFAEAHQAFAHABAKIgMAAIgMAAQgDgIgGgDQgFgEgIAAQgHAAgGAEQgFADgDAGQgDAGAAAJQAAAFADAGQADAGAFAEQAGADAHABQAIAAAGgEQAGgEACgIIAMAAIAMAAQgBAKgEAIQgFAHgGAEQgHAFgHACQgIACgIAAQgJAAgJgDgApaApQgJgDgHgGQgHgGgEgJQgFgKAAgKQAAgNAFgJQAEgKAHgGQAHgGAJgDQAJgDAJAAQAIAAAIACQAHACAHAEQAGAFAEAHQAFAHABAKIgMAAIgMAAQgDgIgGgDQgFgEgIAAQgHAAgGAEQgFADgDAGQgDAGAAAJQAAAFADAGQADAGAFAEQAGADAHABQAIAAAGgEQAGgEACgIIAMAAIANAAQgCAKgEAIQgFAHgGAEQgHAFgHACQgIACgIAAQgJAAgJgDgAIyArIAAgDIAPgfIghg6IAAgDIAbAAIATAkIABAAIAQgkIAcAAIAAADIgvBcgAIBArIgVglIgFAAIgFAAIAAAlIgNAAIgMAAIAAhfIAMAAIANAAIAAAlIACAAQAJgBAFgCQAFgDACgGQACgFABgHIAAgNIAMAAIANAAIAAAOIgCAOQgBAHgEAFQgEAGgHAEIAaApIAAAEgAFpArIAAhfIAqAAQAIAAAHAEQAHAEAEAGQAEAHAAAJIgCAJIgGAIQAGADADADQADAFAAAHQAAAIgEAHQgDAHgGAEQgHAEgKAAgAGBAVIAUAAQAEAAACgDQACgCAAgDQAAgDgCgDQgCgCgEgBIgUAAgAGBgOIAQAAQADAAACgDQADgCAAgDQAAgDgDgCQgCgDgDAAIgQAAgAFEArIgGgMIgmAAIgGAMIgYAAIAAgDIAshdIAKAAIAsBdIAAADgAE2AKIgLgYIgLAYIAWAAgADGArIAAhJIgYAAIAAgLIAAgLIBIAAIAAALIAAALIgYAAIAABJIgYAAgAgmArIgVAAIAAguIAAgxIANAAIAMAAIAAAdIASAAQALAAAHAFQAHAFAEAIQAEAFAAAJQAAAJgEAHQgEAIgHAFQgHAFgLAAIgWAAgAgiAJIAAAMIAJAAIAJAAQAEAAADgDQACgCABgDIAAgHQgBgEgCgCQgDgBgEAAIgSAAIAAAKgAh7ArIAAhJIgYAAIAAgLIAAgLIBIAAIAAALIAAALIgYAAIAABJIgYAAgAivArIgFgMIgnAAIgFAMIgZAAIAAgDIAshdIALAAIAsBdIAAADgAi8AKIgLgYIgLAYIAWAAgAkSArIgZg3IgZA3IgYAAIAAgDIAshdIALAAIAsBdIAAADgAl6ArIgUAAIgVAAIAAguIAAgxIAVAAIATAAIAVAAIAAALIAAALIgMAAIgMAAIgMAAIAAAOIAhAAIAAAUIghAAIAAAJIAAAIIAMAAIAMAAIANAAIAAALIAAALIgVAAg");
	this.shape.setTransform(93.4,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(93,23.5,1,1,0,0,0,93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.6,-141.9,385.7,303.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(93,23.5,1,1,0,0,0,93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.1,47);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(93,23.5,1,1,0,0,0,93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(93,26.5,1,1,0,0,0,93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.6,-141.9,385.7,303.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(46.1,49.2,1,1,0,0,0,46.1,49.2);
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-2,96,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,106,112);


(lib.Символ24 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ23();
	this.instance.setTransform(316.4,161.3,1,1,0,0,0,316.4,161.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.559},9).wait(1).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.8,322.7);


(lib.Символ20 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ19();
	this.instance.setTransform(110.3,43.5,0.355,0.355,0,0,0,110.5,11.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.08,scaleY:1.08,x:110.6,y:7.2,alpha:1},6).to({scaleX:1,scaleY:1,x:110.5,y:11.2},3).wait(1).to({scaleX:1.08,scaleY:1.08,x:110.6,y:7.2},3).to({scaleX:0.36,scaleY:0.36,x:110.3,y:43.5,alpha:0},6).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ36();
	this.instance_1.setTransform(110.2,80.7,0.5,0.5,0,0,0,101.5,5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:101.4,regY:4.9,scaleX:1.52,scaleY:1.52,y:120.4,alpha:1},6).to({scaleX:1.41,scaleY:1.41,y:116},3).wait(1).to({scaleX:1.52,scaleY:1.52,y:120.4},3).to({regX:101.5,regY:5,scaleX:0.5,scaleY:0.5,y:80.7,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.5,39.6,101.4,43.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(264.6,78.2,1,1,0,0,0,264.6,78.2);
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-41,-2,612,161);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-8,631,180);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(74,74,1,1,0,0,0,74,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(74,74,1,1,0,0,0,74,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,148);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(74.5,98,1,1,0,0,0,74.5,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:74.6,x:74.6,y:101},0).wait(1).to({y:104},0).wait(1).to({y:106.8},0).wait(1).to({y:109.5},0).wait(1).to({y:111.9},0).wait(1).to({y:114.2},0).wait(1).to({y:116.4},0).wait(1).to({y:118.3},0).wait(1).to({y:120.1},0).wait(1).to({y:121.7},0).wait(1).to({y:123.2},0).wait(1).to({y:124.6},0).wait(1).to({y:125.9},0).wait(1).to({y:127.1},0).wait(1).to({y:128.3},0).wait(1).to({y:129.3},0).wait(1).to({y:130.3},0).wait(1).to({y:131.2},0).wait(1).to({y:132},0).wait(1).to({y:132.7},0).wait(1).to({y:133.4},0).wait(1).to({y:134},0).wait(1).to({y:134.6},0).wait(1).to({y:135.1},0).wait(1).to({y:135.6},0).wait(1).to({y:136.1},0).wait(1).to({y:136.6},0).wait(1).to({y:137.1},0).wait(1).to({y:137.5},0).wait(1).to({y:138},0).wait(1).to({y:138.4},0).wait(1).to({y:138.9},0).wait(1).to({y:139.3},0).wait(1).to({regX:74.5,x:74.5,y:139.8},0).wait(1).to({regX:74.6,x:74.6,y:136.8},0).wait(1).to({y:134},0).wait(1).to({y:131.2},0).wait(1).to({y:128.6},0).wait(1).to({y:126.2},0).wait(1).to({y:123.9},0).wait(1).to({y:121.8},0).wait(1).to({y:119.9},0).wait(1).to({y:118.2},0).wait(1).to({y:116.6},0).wait(1).to({y:115.1},0).wait(1).to({y:113.7},0).wait(1).to({y:112.4},0).wait(1).to({y:111.2},0).wait(1).to({y:110},0).wait(1).to({y:109},0).wait(1).to({y:108},0).wait(1).to({y:107.1},0).wait(1).to({y:106.3},0).wait(1).to({y:105.5},0).wait(1).to({y:104.8},0).wait(1).to({y:104.2},0).wait(1).to({y:103.6},0).wait(1).to({y:103.1},0).wait(1).to({y:102.5},0).wait(1).to({y:102},0).wait(1).to({y:101.6},0).wait(1).to({y:101.1},0).wait(1).to({y:100.7},0).wait(1).to({y:100.2},0).wait(1).to({y:99.8},0).wait(1).to({y:99.3},0).wait(1).to({y:98.9},0).wait(1).to({y:98.4},0).wait(1).to({regX:74.5,x:74.5,y:98},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-33,199.2,262.1);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(98,98,1,1,0,0,0,98,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:95},0).wait(1).to({y:92.1},0).wait(1).to({y:89.4},0).wait(1).to({y:86.8},0).wait(1).to({y:84.4},0).wait(1).to({y:82.1},0).wait(1).to({y:80},0).wait(1).to({y:78},0).wait(1).to({y:76.2},0).wait(1).to({y:74.5},0).wait(1).to({y:72.9},0).wait(1).to({y:71.4},0).wait(1).to({y:70.1},0).wait(1).to({y:68.8},0).wait(1).to({y:67.6},0).wait(1).to({y:66.6},0).wait(1).to({y:65.6},0).wait(1).to({y:64.8},0).wait(1).to({y:64},0).wait(1).to({y:63.3},0).wait(1).to({y:62.6},0).wait(1).to({y:62},0).wait(1).to({y:61.5},0).wait(1).to({y:61},0).wait(1).to({y:60.5},0).wait(1).to({y:60},0).wait(1).to({y:59.5},0).wait(1).to({y:59.1},0).wait(1).to({y:58.6},0).wait(1).to({y:58.2},0).wait(1).to({y:57.7},0).wait(1).to({y:57.2},0).wait(1).to({y:56.7},0).wait(1).to({y:56.2},0).wait(1).to({y:59.2},0).wait(1).to({y:62},0).wait(1).to({y:64.7},0).wait(1).to({y:67.2},0).wait(1).to({y:69.6},0).wait(1).to({y:71.8},0).wait(1).to({y:73.9},0).wait(1).to({y:75.8},0).wait(1).to({y:77.6},0).wait(1).to({y:79.3},0).wait(1).to({y:80.9},0).wait(1).to({y:82.4},0).wait(1).to({y:83.7},0).wait(1).to({y:85},0).wait(1).to({y:86.2},0).wait(1).to({y:87.3},0).wait(1).to({y:88.2},0).wait(1).to({y:89.1},0).wait(1).to({y:89.9},0).wait(1).to({y:90.6},0).wait(1).to({y:91.3},0).wait(1).to({y:91.9},0).wait(1).to({y:92.4},0).wait(1).to({y:93},0).wait(1).to({y:93.5},0).wait(1).to({y:93.9},0).wait(1).to({y:94.4},0).wait(1).to({y:94.9},0).wait(1).to({y:95.3},0).wait(1).to({y:95.7},0).wait(1).to({y:96.2},0).wait(1).to({y:96.6},0).wait(1).to({y:97.1},0).wait(1).to({y:97.6},0).wait(1).to({y:98},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(98,98,1,1,0,0,0,98,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:94.5},0).wait(1).to({y:91.3},0).wait(1).to({y:88.4},0).wait(1).to({y:85.8},0).wait(1).to({y:83.3},0).wait(1).to({y:81.1},0).wait(1).to({y:79.1},0).wait(1).to({y:77.2},0).wait(1).to({y:75.5},0).wait(1).to({y:73.9},0).wait(1).to({y:72.4},0).wait(1).to({y:71.1},0).wait(1).to({y:69.8},0).wait(1).to({y:68.6},0).wait(1).to({y:67.5},0).wait(1).to({y:66.4},0).wait(1).to({y:65.5},0).wait(1).to({y:64.6},0).wait(1).to({y:63.8},0).wait(1).to({y:63},0).wait(1).to({y:62.3},0).wait(1).to({y:61.7},0).wait(1).to({y:61.1},0).wait(1).to({y:60.5},0).wait(1).to({y:60},0).wait(1).to({y:59.5},0).wait(1).to({y:59.1},0).wait(1).to({y:58.6},0).wait(1).to({y:58.2},0).wait(1).to({y:57.8},0).wait(1).to({y:57.4},0).wait(1).to({y:57},0).wait(1).to({y:56.6},0).wait(1).to({y:56.2},0).wait(1).to({y:59.7},0).wait(1).to({y:62.8},0).wait(1).to({y:65.6},0).wait(1).to({y:68.2},0).wait(1).to({y:70.6},0).wait(1).to({y:72.8},0).wait(1).to({y:74.8},0).wait(1).to({y:76.7},0).wait(1).to({y:78.4},0).wait(1).to({y:79.9},0).wait(1).to({y:81.4},0).wait(1).to({y:82.8},0).wait(1).to({y:84.1},0).wait(1).to({y:85.2},0).wait(1).to({y:86.4},0).wait(1).to({y:87.4},0).wait(1).to({y:88.4},0).wait(1).to({y:89.3},0).wait(1).to({y:90.1},0).wait(1).to({y:90.9},0).wait(1).to({y:91.6},0).wait(1).to({y:92.2},0).wait(1).to({y:92.8},0).wait(1).to({y:93.4},0).wait(1).to({y:93.9},0).wait(1).to({y:94.4},0).wait(1).to({y:94.9},0).wait(1).to({y:95.3},0).wait(1).to({y:95.7},0).wait(1).to({y:96.2},0).wait(1).to({y:96.6},0).wait(1).to({y:96.9},0).wait(1).to({y:97.3},0).wait(1).to({y:97.7},0).wait(1).to({y:98},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(400,200,1,1,0,0,0,400,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:394.9},0).wait(1).to({x:389.9},0).wait(1).to({x:385},0).wait(1).to({x:380.3},0).wait(1).to({x:375.7},0).wait(1).to({x:371.2},0).wait(1).to({x:366.8},0).wait(1).to({x:362.6},0).wait(1).to({x:358.5},0).wait(1).to({x:354.4},0).wait(1).to({x:350.5},0).wait(1).to({x:346.8},0).wait(1).to({x:343.1},0).wait(1).to({x:339.5},0).wait(1).to({x:336},0).wait(1).to({x:332.6},0).wait(1).to({x:329.4},0).wait(1).to({x:326.2},0).wait(1).to({x:323.1},0).wait(1).to({x:320.1},0).wait(1).to({x:317.1},0).wait(1).to({x:314.3},0).wait(1).to({x:311.5},0).wait(1).to({x:308.8},0).wait(1).to({x:306.2},0).wait(1).to({x:303.6},0).wait(1).to({x:301.1},0).wait(1).to({x:298.7},0).wait(1).to({x:296.3},0).wait(1).to({x:294},0).wait(1).to({x:291.8},0).wait(1).to({x:289.6},0).wait(1).to({x:287.5},0).wait(1).to({x:285.4},0).wait(1).to({x:283.3},0).wait(1).to({x:281.3},0).wait(1).to({x:279.4},0).wait(1).to({x:277.5},0).wait(1).to({x:275.6},0).wait(1).to({x:273.8},0).wait(1).to({x:272},0).wait(1).to({x:270.2},0).wait(1).to({x:268.6},0).wait(1).to({x:266.9},0).wait(1).to({x:265.3},0).wait(1).to({x:263.8},0).wait(1).to({x:262.3},0).wait(1).to({x:260.8},0).wait(1).to({x:259.4},0).wait(1).to({x:258.1},0).wait(1).to({x:256.7},0).wait(1).to({x:255.5},0).wait(1).to({x:254.2},0).wait(1).to({x:253},0).wait(1).to({x:251.8},0).wait(1).to({x:250.7},0).wait(1).to({x:249.6},0).wait(1).to({x:248.5},0).wait(1).to({x:247.4},0).wait(1).to({x:246.4},0).wait(1).to({x:245.4},0).wait(1).to({x:244.5},0).wait(1).to({x:243.5},0).wait(1).to({x:242.6},0).wait(1).to({x:241.7},0).wait(1).to({x:240.9},0).wait(1).to({x:240},0).wait(1).to({x:239.2},0).wait(1).to({x:238.4},0).wait(1).to({x:237.6},0).wait(1).to({x:236.9},0).wait(1).to({x:236.1},0).wait(1).to({x:235.4},0).wait(1).to({x:234.7},0).wait(1).to({x:234},0).wait(1).to({x:233.3},0).wait(1).to({x:232.6},0).wait(1).to({x:232},0).wait(1).to({x:231.3},0).wait(1).to({x:230.7},0).wait(1).to({x:230.1},0).wait(1).to({x:229.5},0).wait(1).to({x:228.9},0).wait(1).to({x:228.3},0).wait(1).to({x:227.7},0).wait(1).to({x:227.1},0).wait(1).to({x:226.5},0).wait(1).to({x:225.9},0).wait(1).to({x:225.4},0).wait(1).to({x:224.8},0).wait(1).to({x:224.3},0).wait(1).to({x:223.7},0).wait(1).to({x:223.2},0).wait(1).to({x:222.7},0).wait(1).to({x:222.1},0).wait(1).to({x:221.6},0).wait(1).to({x:221.1},0).wait(1).to({x:220.6},0).wait(1).to({x:220},0).wait(1).to({x:225.1},0).wait(1).to({x:230.1},0).wait(1).to({x:234.9},0).wait(1).to({x:239.6},0).wait(1).to({x:244.2},0).wait(1).to({x:248.6},0).wait(1).to({x:253},0).wait(1).to({x:257.2},0).wait(1).to({x:261.3},0).wait(1).to({x:265.3},0).wait(1).to({x:269.1},0).wait(1).to({x:272.9},0).wait(1).to({x:276.6},0).wait(1).to({x:280.1},0).wait(1).to({x:283.6},0).wait(1).to({x:286.9},0).wait(1).to({x:290.2},0).wait(1).to({x:293.4},0).wait(1).to({x:296.4},0).wait(1).to({x:299.4},0).wait(1).to({x:302.4},0).wait(1).to({x:305.2},0).wait(1).to({x:308},0).wait(1).to({x:310.7},0).wait(1).to({x:313.3},0).wait(1).to({x:315.8},0).wait(1).to({x:318.3},0).wait(1).to({x:320.7},0).wait(1).to({x:323.1},0).wait(1).to({x:325.4},0).wait(1).to({x:327.6},0).wait(1).to({x:329.8},0).wait(1).to({x:331.9},0).wait(1).to({x:334},0).wait(1).to({x:336.1},0).wait(1).to({x:338.1},0).wait(1).to({x:340},0).wait(1).to({x:341.9},0).wait(1).to({x:343.8},0).wait(1).to({x:345.6},0).wait(1).to({x:347.4},0).wait(1).to({x:349.1},0).wait(1).to({x:350.8},0).wait(1).to({x:352.5},0).wait(1).to({x:354.1},0).wait(1).to({x:355.6},0).wait(1).to({x:357.1},0).wait(1).to({x:358.6},0).wait(1).to({x:360},0).wait(1).to({x:361.3},0).wait(1).to({x:362.7},0).wait(1).to({x:364},0).wait(1).to({x:365.2},0).wait(1).to({x:366.5},0).wait(1).to({x:367.6},0).wait(1).to({x:368.8},0).wait(1).to({x:369.9},0).wait(1).to({x:371},0).wait(1).to({x:372},0).wait(1).to({x:373.1},0).wait(1).to({x:374.1},0).wait(1).to({x:375},0).wait(1).to({x:376},0).wait(1).to({x:376.9},0).wait(1).to({x:377.8},0).wait(1).to({x:378.7},0).wait(1).to({x:379.5},0).wait(1).to({x:380.3},0).wait(1).to({x:381.1},0).wait(1).to({x:381.9},0).wait(1).to({x:382.7},0).wait(1).to({x:383.4},0).wait(1).to({x:384.2},0).wait(1).to({x:384.9},0).wait(1).to({x:385.6},0).wait(1).to({x:386.3},0).wait(1).to({x:387},0).wait(1).to({x:387.6},0).wait(1).to({x:388.3},0).wait(1).to({x:388.9},0).wait(1).to({x:389.5},0).wait(1).to({x:390.1},0).wait(1).to({x:390.7},0).wait(1).to({x:391.3},0).wait(1).to({x:391.9},0).wait(1).to({x:392.5},0).wait(1).to({x:393.1},0).wait(1).to({x:393.7},0).wait(1).to({x:394.2},0).wait(1).to({x:394.8},0).wait(1).to({x:395.3},0).wait(1).to({x:395.9},0).wait(1).to({x:396.4},0).wait(1).to({x:396.9},0).wait(1).to({x:397.5},0).wait(1).to({x:398},0).wait(1).to({x:398.5},0).wait(1).to({x:399},0).wait(1).to({x:399.5},0).wait(1).to({x:400},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,400);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();
	this.instance.setTransform(419.5,82.8,0.479,0.479,0,0,0,98,98);

	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(233.2,62.8,0.479,0.479,0,0,0,74.5,98);

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(47,82.8,0.479,0.479,0,0,0,98,98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,466.4,129.7);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(46.1,49.2,1,1,0,0,0,46.1,49.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,106,112);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(63.2,63.2,1,1,0,0,0,63.2,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,140,140);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.che();
	this.instance.setTransform(0,0,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ42();
	this.instance_1.setTransform(60.6,60.6,1,1,0,0,0,63.2,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-7.6,139,139);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(93.1,23.4,1.129,1.129,0,0,0,93,23.4);
	this.instance.alpha = 0.48;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({alpha:0},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(93,23.5,1,1,0,0,0,93,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:23.4,scaleX:1.13,scaleY:1.13,x:93.1,y:23.4},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.6,-141.9,385.7,303.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.liv();
	this.instance.setTransform(0,0,0.796,0.796);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ45();
	this.instance_1.setTransform(59.4,95.7,1.06,1.06,0,0,0,46.1,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.6,156.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(487.1,74,1,1,0,0,0,74,74);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(34.7,74,1,1,0,0,0,74,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.3,0,600.3,148);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(431.2,78,1,1,0,0,0,59.3,78);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(59.3,78,1,1,0,0,0,59.3,78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,490.5,156.4);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(433.8,63.1,1,1,0,0,0,60.5,60.5);

	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(63.2,63.1,1,1,0,0,0,60.5,60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,511.6,140);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.leictext = new lib.Символ20();
	this.leictext.setTransform(249.4,12.1,0.822,0.822,0,0,0,110.5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.leictext).wait(1));

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.setTransform(249.9,63.9,0.822,0.822,0,0,0,260.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 17
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(249.7,64.3,0.822,0.822,0,0,0,264.6,78.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,511,140);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(63.2,63.2,1,1,0,0,0,63.2,63.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,511.6,140);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.leic1 = new lib.Символ18();
	this.leic1.setTransform(250,64.3,1,1,0,0,0,250,64.3);

	this.timeline.addTween(cjs.Tween.get(this.leic1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4,511,140);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.instance = new lib.Символ31();
	this.instance.setTransform(278.1,24.7,1,1,0,0,0,93,24.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(312));

	// Слой 16
	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(278.2,27.4,0.342,0.342,0,0,0,93.1,20);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(213).to({_off:false},0).to({regX:93,regY:19.9,scaleX:1.14,scaleY:1.14,x:278.1,y:77.2,alpha:1},8).to({scaleX:1,scaleY:1},3).wait(71).to({scaleX:1.14,scaleY:1.14},3).to({regX:93.1,regY:20,scaleX:0.34,scaleY:0.34,x:278.2,y:27.4,alpha:0},8).wait(6));

	// Слой 15
	this.instance_2 = new lib.Символ55();
	this.instance_2.setTransform(278.1,23.8,0.344,0.344,0,0,0,70.3,14.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(213).to({_off:false},0).to({regY:14.6,scaleX:1.27,scaleY:1.27,x:276.8,y:-23.9},8).to({regY:14.7,scaleX:1,scaleY:1,y:-23.8},3).wait(71).to({regY:14.6,scaleX:1.27,scaleY:1.27,y:-23.9},3).to({regY:14.7,scaleX:0.34,scaleY:0.34,x:278.1,y:23.8},8).wait(6));

	// chels
	this.chelsea = new lib.Символ44();
	this.chelsea.setTransform(278.9,28.9,0.94,0.94,0,0,0,248.5,63.2);
	this.chelsea.alpha = 0;
	this.chelsea._off = true;

	this.timeline.addTween(cjs.Tween.get(this.chelsea).wait(208).to({_off:false},0).to({alpha:1},5).wait(93).to({alpha:0},5).wait(1));

	// Слой 14
	this.instance_3 = new lib.Символ54();
	this.instance_3.setTransform(278.1,23.7,0.328,0.328,0,0,0,93,22.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,y:79.3},7).to({scaleX:1,scaleY:1},3).wait(93).to({scaleX:1.12,scaleY:1.12},3).to({scaleX:0.33,scaleY:0.33,y:23.7},7).wait(105));

	// Слой 13
	this.instance_4 = new lib.Символ53();
	this.instance_4.setTransform(279.5,26.8,0.415,0.415,0,0,0,91.7,10.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,y:-27.7},7).to({scaleX:1,scaleY:1,y:-22.7},3).wait(93).to({scaleX:1.12,scaleY:1.12,y:-27.7},3).to({scaleX:0.42,scaleY:0.42,y:26.8},7).wait(105));

	// liv
	this.instance_5 = new lib.Символ47();
	this.instance_5.setTransform(103.5,33,0.94,0.94,0,0,0,59.3,78);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89).to({_off:false},0).to({alpha:1},5).wait(114).to({alpha:0},5).to({_off:true},1).wait(98));

	// Слой 12
	this.instance_6 = new lib.Символ52();
	this.instance_6.setTransform(278.1,24.6,0.577,0.577,0,0,0,65.2,14.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({scaleX:1.57,scaleY:1.57,x:278.2,y:82.2},7).to({regX:65.1,scaleX:1.43,scaleY:1.43,x:278,y:77.2},3).wait(64).to({regX:65.2,scaleX:1.57,scaleY:1.57,x:278.2,y:82.2},3).to({scaleX:0.58,scaleY:0.58,x:278.1,y:24.6},7).wait(224));

	// Слой 11
	this.instance_7 = new lib.Символ50();
	this.instance_7.setTransform(278.2,28.7,0.425,0.425,0,0,0,144.7,14.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({regX:144.8,regY:14.5,scaleX:0.71,scaleY:0.71,x:278.3,y:-22.2,alpha:1},7).to({regX:144.7,regY:14.6,scaleX:0.64,scaleY:0.64,x:278.2,y:-17.2},3).wait(64).to({regX:144.8,regY:14.5,scaleX:0.71,scaleY:0.71,x:278.3,y:-22.2},3).to({regX:144.7,regY:14.6,scaleX:0.43,scaleY:0.43,x:278.2,y:28.7,alpha:0},7).wait(224));

	// leitop
	this.leic = new lib.Символ37();
	this.leic.setTransform(278.8,28.7,0.94,0.94,0,0,0,250.1,64.2);

	this.timeline.addTween(cjs.Tween.get(this.leic).wait(89).to({alpha:0},5).to({_off:true},1).wait(211).to({_off:false,alpha:1},0).wait(6));

	// embl
	this.instance_8 = new lib.Символ49();
	this.instance_8.setTransform(278.1,167.6,1,1,0,0,0,233.2,64.8);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(312));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-141.9,536.2,374.4);


// stage content:
(lib.bm_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		var _this = this;
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		  function fl_MouseOverHandler_5()
		{
		    _this.dark.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		    _this.dark.gotoAndPlay(11);
			_this.main.gotoAndPlay(1);
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.btnleic.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2()
		{
		_this.main.gotoAndStop(78);
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.livbtn.addEventListener("mouseover", fl_MouseOverHandler_3);
		
		function fl_MouseOverHandler_3()
		{
			_this.main.gotoAndStop(197);
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.chelbtn.addEventListener("mouseover", fl_MouseOverHandler_4);
		
		function fl_MouseOverHandler_4()
		{
			_this.main.gotoAndStop(295); 
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.chelbtn = new lib.Символ58();
	this.chelbtn.setTransform(487.1,237.6,1,1,0,0,0,54,58.5);
	new cjs.ButtonHelper(this.chelbtn, 0, 1, 2, false, new lib.Символ58(), 3);

	this.timeline.addTween(cjs.Tween.get(this.chelbtn).wait(1));

	// Слой 4
	this.livbtn = new lib.Символ57();
	this.livbtn.setTransform(298.6,225.1,0.742,1,0,0,0,73.5,71);
	new cjs.ButtonHelper(this.livbtn, 0, 1, 2, false, new lib.Символ57(), 3);

	this.btnleic = new lib.Символ48();
	this.btnleic.setTransform(111.5,241.6,1,1,0,0,0,63,57.5);
	new cjs.ButtonHelper(this.btnleic, 0, 1, 2, false, new lib.Символ48(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnleic},{t:this.livbtn}]}).wait(1));

	// Слой 2
	this.main = new lib.Символ4();
	this.main.setTransform(22,50);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 6
	this.dark = new lib.Символ24();
	this.dark.setTransform(305.8,153.8,1,1,0,0,0,316.4,161.3);

	this.timeline.addTween(cjs.Tween.get(this.dark).wait(1));

	// Слой 5
	this.instance = new lib.Символ22();
	this.instance.setTransform(301.5,163.6,1,1,0,0,0,312.1,171.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(397,179,1,1,0,0,0,400,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.4,58.1,807.6,470.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
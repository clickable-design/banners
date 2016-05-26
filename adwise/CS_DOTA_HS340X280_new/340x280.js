(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 340,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/eee.png?1464256622642", id:"eee"},
		{src:"images/fsdfsdsdsd.png?1464256622642", id:"fsdfsdsdsd"},
		{src:"images/logo.png?1464256622642", id:"logo"},
		{src:"images/rrr.png?1464256622642", id:"rrr"},
		{src:"images/ttt.png?1464256622642", id:"ttt"},
		{src:"images/www.png?1464256622642", id:"www"},
		{src:"images/yyy.png?1464256622642", id:"yyy"}
	]
};



// symbols:



(lib.eee = function() {
	this.initialize(img.eee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,116);


(lib.fsdfsdsdsd = function() {
	this.initialize(img.fsdfsdsdsd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,532,299);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,53);


(lib.rrr = function() {
	this.initialize(img.rrr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,101);


(lib.ttt = function() {
	this.initialize(img.ttt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,105);


(lib.www = function() {
	this.initialize(img.www);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,116);


(lib.yyy = function() {
	this.initialize(img.yyy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,110);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG9BNIgUgUIAAgfIAgAAIAAAZIANAAIAAgtIgZAAIgUgRIAAhBIAgAAIAAA7IANAAIAAg7IAgAAIAACFIgTAUgAFHBNIAAiZIA6AAIATAUIAABEIgTAUIgaAAIAAAtgAFnAGIANAAIAAg4IgNAAgAD+BNIAAiZIA6AAIAAAaIgaAAIAAB/gADJBNIAAgyIAEgaIgUBMIgjAAIAAiZIAgAAIAAAyIgDAaIAThMIAjAAIAACZgABCBNIAAgyIADgaIgTBMIgjAAIAAiZIAgAAIAAAyIgEAaIAThMIAkAAIAACZgAhRBNIAAiZIA5AAIAUAUIAABEIgUAUIgZAAIAAAtgAgxAGIANAAIAAg4IgNAAgAifBNIAAiZIA5AAIAAAaIgaAAIAAAhIAXAAIAAAXIgXAAIAAAtIAaAAIAAAagAkCBNIAAiZIBGAAIAAAaIgmAAIAAAhIAaAAIATARIAAA5IgTAUgAjiAzIANAAIAAgtIgNAAgAk4BNIAAiZIAgAAIAACZgAmSBNIAAiZIAgAAIAAA7IAaAAIATARIAAA5IgTAUgAlyAzIANAAIAAgtIgNAAgAn1BNIAAiZIA6AAIATAUIAAAnIgNAMIANAJIAAA1IgTAUgAnVAzIANAAIAAgtIgNAAgAnVgRIANAAIAAghIgNAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-7.7,100.5,15.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.eee();
	this.instance.setTransform(-39.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.yyy();
	this.instance_1.setTransform(-33.5,-55.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFeA8IAAh3IAtAAIAAAUIgUAAIAAAZIASAAIAAASIgSAAIAAAkIAUAAIAAAUgAEwA8IgPg6IACATIAAAnIgYAAIAAh3IAcAAIAOA6IgCgUIAAgmIAZAAIAAB3gADNA8IgQgPIAAhZIAQgPIAdAAIAQAPIAABZIgQAPgADWAoIALAAIAAhPIgLAAgACGA8IAAhjIgSAAIAAgUIA9AAIAAAUIgSAAIAABjgAA7A8IgPgPIAAgfIAZAAIAAAaIAKAAIAAggIgUAAIgPgOIAAgmIAPgPIAeAAIAPAPIAAAZIgZAAIAAgUIgKAAIAAAcIAVAAIAOANIAAArIgPAPgAABA8IAAg4IgIAAIAAA4IgZAAIAAh3IAZAAIAAAtIAIAAIAAgtIAaAAIAAB3gAhXA8IAAhjIgSAAIAAgUIA9AAIAAAUIgSAAIAABjgAiOA8IAAgyIgKAAIAAAyIgaAAIAAh3IAuAAIAPAPIAAAlIgJAHIAJAJIAAAzgAiYgIIAKAAIAAgfIgKAAgAjcA8IAAgUIgKAAIAAAUIgZAAIAAhoIAPgPIAtAAIAAB3gAjmAUIAKAAIAAg7IgKAAgAk7A8IAAh3IAtAAIAAAUIgUAAIAAAZIASAAIAAASIgSAAIAAAkIAUAAIAAAUgAlmA8IAAg4IgKAAIAAA4IgaAAIAAh3IAaAAIAAAtIAKAAIAAgtIAZAAIAAB3g");
	this.shape.setTransform(0,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,132.7);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.eee();
	this.instance.setTransform(-40.8,-57.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.ttt();
	this.instance_1.setTransform(-29.2,-49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACFA9IAAgaIAjgxIAAgZIgKAAIAAAZIgZAAIAAgeIAPgPIAeAAIAPAPIAAAjIgjAxIAjAAIAAAVgABAA8IAAgUIgKAAIAAAUIgZAAIAAhpIAPgPIAtAAIAAB4gAA2AUIAKAAIAAg7IgKAAgAgYA8IAAhjIgSAAIAAgVIA6AAIAAAVIgQAAIAABjgAhjA8IgQgPIAAhZIAQgQIAeAAIAPAQIAABZIgPAPgAhaAoIALAAIAAhPIgLAAgAjAA8IAAh4IAtAAIAPAQIAABZIgPAPgAinAoIAKAAIAAhPIgKAAg");
	this.shape.setTransform(0,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-57.9,79.7,132.7);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.eee();
	this.instance.setTransform(-39.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.rrr();
	this.instance_1.setTransform(-31.5,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGlA9IAAh4IAtAAIAAAUIgUAAIAAAaIASAAIAAASIgSAAIAAAjIAUAAIAAAVgAF/A9IgNguIAAAuIgZAAIAAh4IAZAAIAAAuIANguIAcAAIgRA9IARA7gAEvA9IAAh4IAZAAIAAB4gAEFA9IAAgzIgLAAIAAAzIgZAAIAAh4IAuAAIAPAPIAAAlIgKAHIAKAJIAAA0gAD6gIIALAAIAAgfIgLAAgACqA9IAAhkIgRAAIAAgUIA8AAIAAAUIgSAAIAABkgABfA9IgPgQIAAgeIAZAAIAAAZIAKAAIAAggIgUAAIgPgOIAAgmIAPgPIAeAAIAPAPIAAAZIgZAAIAAgUIgKAAIAAAcIAVAAIAOANIAAArIgPAQgAANA9IAAgzIgKAAIAAAzIgXAAIAAh4IArAAIAPAPIAAAlIgJAHIAJAJIAAA0gAADgIIAKAAIAAgfIgKAAgAhRA9IAAh4IAtAAIAAAUIgUAAIAAAaIASAAIAAASIgSAAIAAAjIAUAAIAAAVgAiIA9IAAhkIgSAAIAAgUIA8AAIAAAUIgRAAIAABkgAjCA9IgPg7IACAUIAAAnIgZAAIAAh4IAcAAIAPA7IgCgUIAAgnIAZAAIAAB4gAl1A9IgPgQIAAhZIAPgPIAeAAIAPAPIAABZIgPAQgAlrAoIAKAAIAAhPIgKAAgAnBA9IgQgQIAAhZIAQgPIAeAAIAPAPIAAAkIgZAAIAAgfIgKAAIAABPIAKAAIAAgeIAZAAIAAAjIgPAQgAknA8IgQgPIAAhpIAZAAIAABkIALAAIAAhkIAZAAIAABpIgPAPg");
	this.shape.setTransform(0.1,68.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-58,93.3,132.7);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fsdfsdsdsd();
	this.instance.setTransform(-249.2,-146.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.2,-146.3,532,299);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqcCWIAAgtIgkAAIAAAtIgtAAIAAhQIAKAAIAAiXIAbgbIBQAAIAACyIAIAAIAABQgAq3BGIASAAIAAiOIgSAAgALBBpIAAhFIAFgkIgbBpIgxAAIAAjVIAsAAIAABEIgEAkIAahoIAyAAIAADVgAI3BpIgXhRIAABRIgsAAIAAjVIAsAAIAABRIAXhRIAxAAIgdBtIAdBogAFqBpIAAjVIBQAAIAbAbIAAA3IgSARIASANIAABKIgbAbgAGWBGIASAAIAAg/IgSAAgAGWgbIASAAIAAgtIgSAAgAEhBpIAAgjIgSAAIAAAjIgtAAIAAi6IAbgbIBQAAIAADVgAEPAiIASAAIAAhqIgSAAgACABpIAAixIgeAAIAAgkIBpAAIAAAkIgfAAIAACxgAgCBpIgbgbIAAifIAbgbIAzAAIAbAbIAAA/IgtAAIAAg2IgSAAIAACOIASAAIAAg2IAtAAIAAA+IgbAbgAiTBpIAAhFIAFgkIgbBpIgxAAIAAjVIAsAAIAABEIgEAkIAahoIAyAAIAADVgAkjBpIAAgjIgSAAIAAAjIgtAAIAAi6IAbgbIBQAAIAADVgAk1AiIASAAIAAhqIgSAAgAmtBpIAAixIgSAAIAACxIgtAAIAAi6IAbgbIBQAAIAADVgApZBpIAAjVIBQAAIAAAkIgjAAIAAAtIAgAAIAAAiIggAAIAAA/IAjAAIAAAjgAjEh1IAAggIBIAAIAAAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-15,150.1,30);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVyB/IAAjVIAsAAIAADVgAT0B/IAAjVIAtAAIAABRIAkAAIAaAaIAABPIgaAbgAUhBcIASAAIAAg/IgSAAgARsB/IAAjVIBQAAIAbAbIAABgIgbAcIgkAAIAAA+gASYAdIASAAIAAhPIgSAAgAQFB/IAAjVIBRAAIAAAkIgkAAIAACxgAO8B/IAAhEIAEgkIgbBoIgxAAIAAjVIAtAAIAABFIgFAiIAbhnIAxAAIAADVgAL+B/IAAhiIgSAAIAABiIgtAAIAAjVIAtAAIAABRIASAAIAAhRIAsAAIAADVgAJ1B/IAAhEIAFgkIgbBoIgxAAIAAjVIAsAAIAABFIgEAiIAahnIAyAAIAADVgAHlB/IAAgjIgSAAIAAAjIgtAAIAAi6IAbgbIBQAAIAADVgAHTA4IASAAIAAhqIgSAAgAFbB/IAAixIgSAAIAACxIgtAAIAAi6IAbgbIBQAAIAADVgADSB/IAAhiIgSAAIAABiIgsAAIAAjVIAsAAIAABRIASAAIAAhRIAtAAIAADVgAAmB/IgbgbIAAifIAbgbIA1AAIAbAbIAACfIgbAbgAA3BcIASAAIAAiOIgSAAgAiWB/IAAjVIBQAAIAAAkIgkAAIAAAtIAgAAIAAAiIggAAIAAA/IAkAAIAAAjgAjjB/IAAjVIAtAAIAADVgAlgB/IAAjVIAsAAIAABRIAkAAIAbAaIAABPIgbAbgAk0BcIASAAIAAg/IgSAAgAmqB/IAAhKIAGgmIgYBbIgXhbIAGAmIAABKIgtAAIAAjVIAxAAIANBIIANhIIAyAAIAADVgApEB/IAAhEIAFgkIgbBoIgxAAIAAjVIAsAAIAABFIgEAiIAahnIAyAAIAADVgAsUB/IAAjVIBhAAIAAAkIg0AAIAAAtIAkAAIAaAaIAABPIgbAbgArnBcIASAAIAAg/IgSAAgAt+B/IgbgbIAAhHIgSAAIAABiIgtAAIAAjVIAtAAIAABRIASAAIAAg2IAbgbIA1AAIAbAbIAACfIgbAbgAttBcIATAAIAAiOIgTAAgAwiB/IAAixIgSAAIAACxIgtAAIAAi6IAbgbIBQAAIAADVgAzVB/IAAgjIgSAAIAAAjIgsAAIAAi6IAbgbIBQAAIAADVgAznA4IASAAIAAhqIgSAAgA1fB/IAAhiIgSAAIAABiIgsAAIAAjVIAsAAIAABRIASAAIAAhRIAtAAIAADVgAJEhfIAAgfIBIAAIAAAfg");
	this.shape.setTransform(-2.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-12.8,287.8,25.6);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABoAPIAAgdIALAAIAAAGIgFAAIAAAGIAFAAIAAADIgFAAIAAAIIAFAAIAAAGgABfAPIgEgMIAAAMIgGAAIAAgdIAGAAIAAAMIAEgMIAGAAIgEAOIAEAPgABKAPIAAgdIAHAAIAAAdgABAAPIAAgNIgCAAIAAANIgHAAIAAgdIALAAIAFAFIAAAJIgDAAIADACIAAANgAA+gBIACAAIAAgHIgCAAgAAqAPIAAgXIgFAAIAAgGIAQAAIAAAGIgFAAIAAAXgAAYAPIgFgEIAAgIIAHAAIAAAGIACAAIAAgIIgEAAIgFgBIAAgJIAFgFIAGAAIAFAEIAAAGIgHAAIAAgEIgCAAIAAAHIAFAAIAEABIAAALIgFAEgAADAPIAAgNIgDAAIAAANIgEAAIAAgdIAKAAIADAFIAAAJIgCAAIACACIAAANgAAAgBIADAAIAAgHIgDAAgAgTAPIAAgdIALAAIAAAGIgFAAIAAAGIAFAAIAAADIgFAAIAAAIIAFAAIAAAGgAghAPIAAgXIgEAAIAAgGIAPAAIAAAGIgEAAIAAAXgAgvAPIgEgPIABAFIAAAKIgGAAIAAgdIAGAAIAFAOIgBgEIAAgKIAGAAIAAAdgAhIAPIgEgEIAAgZIAGAAIAAAXIADAAIAAgXIAGAAIAAAZIgDAEgAhbAPIgEgEIAAgUIAEgFIAHAAIAEAFIAAAUIgEAEgAhZAJIACAAIAAgRIgCAAgAhuAPIgEgEIAAgUIAEgFIAHAAIAEAFIAAAIIgHAAIAAgHIgCAAIAAARIACAAIAAgHIAHAAIAAAJIgEAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-1.5,23.1,3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ANLCSIAAkjIBuAAIAAAwIgxAAIAAA+IArAAIAAAvIgrAAIAABWIAxAAIAAAwgALeCSIgliOIAGAxIAABdIg9AAIAAkjIBEAAIAkCOIgGgxIAAhdIA9AAIAAEjgAHtCSIglglIAAjZIAlglIBIAAIAlAlIAADZIglAlgAIEBiIAZAAIAAjDIgZAAgAFDCSIAAjzIgqAAIAAgwICQAAIAAAwIgpAAIAADzgACOCSIglglIAAhJIA9AAIAAA+IAYAAIAAhQIgwAAIglgjIAAhbIAlglIBJAAIAkAkIAAA+Ig9AAIAAgyIgYAAIAABEIAyAAIAjAiIAABoIgkAlgAADCSIAAiGIgWAAIAACGIg9AAIAAkjIA9AAIAABuIAWAAIAAhuIA9AAIAAEjgAjVCSIAAjzIgpAAIAAgwICQAAIAAAwIgqAAIAADzgAlZCSIAAh6IgYAAIAAB6Ig+AAIAAkjIBuAAIAlAlIAABZIgYATIAYAVIAAB9gAlxgXIAYAAIAAhKIgYAAgAoUCSIAAgwIgZAAIAAAwIg9AAIAAj/IAlgkIBuAAIAAEjgAotAxIAZAAIAAiSIgZAAgAr8CSIAAkjIBtAAIAAAwIgwAAIAAA+IAsAAIAAAvIgsAAIAABWIAwAAIAAAwgAtiCSIAAiGIgYAAIAACGIg+AAIAAkjIA+AAIAABuIAYAAIAAhuIA9AAIAAEjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-14.7,190.6,29.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-59.3,-12.4,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.3,-12.4,118.6,24.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFBCTIAAg9IBVh6IAAg9IgZAAIAAA9Ig8AAIAAhIIAlglIBIAAIAlAlIAABUIhWB6IBWAAIAAAxgACbCSIAAgxIgZAAIAAAxIg9AAIAAkAIAlgkIBuAAIAAEkgACCAwIAZAAIAAiRIgZAAgAg9CSIAAjzIgqAAIAAgxICOAAIAAAxIgnAAIAADzgAjyCSIglglIAAjaIAlglIBIAAIAlAlIAADaIglAlgAjaBhIAYAAIAAjCIgYAAgAnSCSIAAkkIBtAAIAlAlIAADaIglAlgAmVBhIAYAAIAAjCIgYAAg");
	this.shape.setTransform(0,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-19.2,93.6,29.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.518,1],0,37.8,0,-37.7).s().p("A8rHDIAAuFMA5WAAAIAAOFg");
	this.shape.setTransform(0,237.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.518,1],0,-37.7,0,37.8).s().p("A8rHDIAAuFMA5WAAAIAAOFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.6,-45.2,367.2,327.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmONPIAA6dIMdAAIAAadg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eee();
	this.instance.setTransform(-39.5,-58);

	this.instance_1 = new lib.yyy();
	this.instance_1.setTransform(-36,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7B0000","#CF0000","#7B0000"],[0,0.486,1],-40,0,40,0).s().p("AmONPIAA6dIMdAAIAAadg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7B0000","#CF0000","#7B0000"],[0,0.486,1],0,15.5,0,-15.5).s().p("AmPBwIAAjfIMeAAIAADfgAjoAgIAAAPIAQAAIAAgdIgDAAIAAg9IgdAAIgJAJIAAA0IgDAAIAAAdIAPAAIAAgPgAEKAWIAKAKIATAAIAJgKIAAhBIgPAAIAAAdIgHAAIAAgdIgQAAIAAAgIAKAKIANAAIAAATIgHAAIAAgMIgQAAgAEEAgIgKgjIAKgoIgRAAIgIAdIAAgdIgQAAIAABLIAQAAIAAgdIAIAdIARAAgACqAgIAdAAIAJgKIAAgYIgGgGIAGgGIAAgTIgJgKIgdAAgACRASIAAAOIAPAAIAAhLIgdAAIgJAJIAABCIAQAAIAAgOgABMgeIAMAAIAAA+IAPAAIAAg+IALAAIAAgNIgmAAgAAfghIAAA3IAJAKIATAAIAKgKIAAgWIgQAAIAAASIgGAAIAAgwIAGAAIAAATIAQAAIAAgWIgKgKIgTAAgAgfAgIAdAAIAHgKIAAgaIgHgKIgNAAIAAgdIgQAAgAhMgeIALAAIAAA+IAQAAIAAg+IALAAIAAgNIgmAAgAhiASIAAAOIAPAAIAAhLIgdAAIgJAJIAABCIAQAAIAAgOgAiUgeIAAA+IAQAAIAAhLIgcAAIgJAJIAABCIAPAAIAAg+gAjQAgIAcAAIAAgOIgNAAIAAgTIAMAAIAAgNIgMAAIAAgQIANAAIAAgNIgcAAgAkyghIAAA3IAKAKIATAAIAJgKIAAgWIgQAAIAAASIgHAAIAAgwIAHAAIAAATIAQAAIAAgWIgJgKIgTAAgAC6ASIAAgTIAGAAIAAATgAgPASIAAgTIAHAAIAAATgAjxASIAAgwIAGAAIAAAwgACKAGIAAgkIAHAAIAAAkgAhpAGIAAgkIAHAAIAAAkgAC6gOIAAgQIAGAAIAAAQg");
	this.shape.setTransform(-162.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnAtIAAgPIgMAAIAAAPIgQAAIAAgcIAEAAIAAg0IAJgJIAdAAIAAA9IACAAIAAAcgAjwARIAGAAIAAgxIgGAAgAEVAeIgJgKIAAgQIAQAAIAAANIAGAAIAAgUIgNAAIgJgKIAAgfIAQAAIAAAcIAGAAIAAgcIAPAAIAABAIgJAKgAD0AeIgIgdIAAAdIgPAAIAAhKIAPAAIAAAcIAIgcIARAAIgKAnIAKAjgACrAeIAAhKIAdAAIAJAJIAAAUIgFAFIAFAGIAAAYIgJAKgAC7ARIAHAAIAAgUIgHAAgAC7gQIAHAAIAAgQIgHAAgACSAeIAAgNIgGAAIAAANIgQAAIAAhBIAJgJIAcAAIAABKgACMAEIAGAAIAAgkIgGAAgABZAeIAAg+IgLAAIAAgMIAlAAIAAAMIgKAAIAAA+gAAqAeIgJgKIAAg3IAJgJIATAAIAJAJIAAAWIgQAAIAAgTIgFAAIAAAxIAFAAIAAgRIAQAAIAAAUIgJAKgAgdAeIAAhKIAQAAIAAAcIANAAIAHAKIAAAaIgHAKgAgNARIAGAAIAAgUIgGAAgAg/AeIAAg+IgLAAIAAgMIAmAAIAAAMIgLAAIAAA+gAhhAeIAAgNIgHAAIAAANIgPAAIAAhBIAJgJIAdAAIAABKgAhoAEIAHAAIAAgkIgHAAgAiSAeIAAg+IgHAAIAAA+IgPAAIAAhBIAJgJIAdAAIAABKgAjPAeIAAhKIAcAAIAAAMIgMAAIAAAQIALAAIAAANIgLAAIAAAUIAMAAIAAANgAknAeIgKgKIAAg3IAKgJIATAAIAJAJIAAAWIgPAAIAAgTIgHAAIAAAxIAHAAIAAgRIAPAAIAAAUIgJAKg");
	this.shape_1.setTransform(-162.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.2,-11.2,80,22.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AmPJEIAAyHIMfAAIAASHg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eee();
	this.instance.setTransform(-39.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.www();
	this.instance.setTransform(-39.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.www();
	this.instance.setTransform(-39.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.www();
	this.instance.setTransform(-39.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.eee();
	this.instance.setTransform(-39.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(0,3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.595},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.035},0).wait(1).to({alpha:0.093},0).wait(1).to({alpha:0.187},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.669},0).wait(1).to({alpha:0.794},0).wait(1).to({alpha:0.885},0).wait(1).to({alpha:0.951},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-4,100.5,15.4);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:8.3,y:8.8},0).wait(1).to({y:9.7},0).wait(1).to({y:10.9},0).wait(1).to({y:12.6},0).wait(1).to({y:15.3},0).wait(1).to({y:19.4},0).wait(1).to({y:24.7},0).wait(1).to({y:29.7},0).wait(1).to({y:33.8},0).wait(1).to({y:36.9},0).wait(1).to({y:39.4},0).wait(1).to({y:41.4},0).wait(1).to({y:43.2},0).wait(1).to({y:44.6},0).wait(1).to({y:45.9},0).wait(1).to({y:47},0).wait(1).to({y:48},0).wait(1).to({y:48.8},0).wait(1).to({regY:0,y:41.3},0).wait(1).to({regY:8.3,y:49.2},0).wait(1).to({y:48.7},0).wait(1).to({y:48},0).wait(1).to({y:47},0).wait(1).to({y:45.7},0).wait(1).to({y:43.9},0).wait(1).to({y:41.4},0).wait(1).to({y:38.1},0).wait(1).to({y:34.1},0).wait(1).to({y:30.1},0).wait(1).to({y:26.6},0).wait(1).to({y:23.7},0).wait(1).to({y:21.4},0).wait(1).to({y:19.4},0).wait(1).to({y:17.7},0).wait(1).to({y:16.2},0).wait(1).to({y:14.9},0).wait(1).to({y:13.7},0).wait(1).to({y:12.7},0).wait(1).to({y:11.8},0).wait(1).to({y:10.9},0).wait(1).to({y:10.2},0).wait(1).to({y:9.5},0).wait(1).to({y:8.9},0).wait(1).to({regY:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,132.7);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1,regY:8.4,x:-1,y:9},0).wait(1).to({y:9.9},0).wait(1).to({y:10.9},0).wait(1).to({y:12.1},0).wait(1).to({y:13.7},0).wait(1).to({y:15.5},0).wait(1).to({y:17.7},0).wait(1).to({y:20.1},0).wait(1).to({y:22.7},0).wait(1).to({y:25.4},0).wait(1).to({y:28.1},0).wait(1).to({y:30.7},0).wait(1).to({y:33.1},0).wait(1).to({y:35.3},0).wait(1).to({y:37.2},0).wait(1).to({y:39},0).wait(1).to({y:40.6},0).wait(1).to({y:42},0).wait(1).to({y:43.3},0).wait(1).to({y:44.5},0).wait(1).to({y:45.5},0).wait(1).to({y:46.4},0).wait(1).to({y:47.3},0).wait(1).to({regX:0,regY:0,x:0,y:39.7},0).wait(1).to({regX:-1,regY:8.4,x:-1,y:47.4},0).wait(1).to({y:46.7},0).wait(1).to({y:45.7},0).wait(1).to({y:44.5},0).wait(1).to({y:43.1},0).wait(1).to({y:41.4},0).wait(1).to({y:39.4},0).wait(1).to({y:37.2},0).wait(1).to({y:34.7},0).wait(1).to({y:32.1},0).wait(1).to({y:29.5},0).wait(1).to({y:27},0).wait(1).to({y:24.6},0).wait(1).to({y:22.4},0).wait(1).to({y:20.4},0).wait(1).to({y:18.6},0).wait(1).to({y:16.9},0).wait(1).to({y:15.5},0).wait(1).to({y:14.1},0).wait(1).to({y:12.9},0).wait(1).to({y:11.8},0).wait(1).to({y:10.8},0).wait(1).to({y:9.9},0).wait(1).to({y:9.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,-57.9,79.7,132.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:8.4,x:0.1,y:9.3},0).wait(1).to({y:10.4},0).wait(1).to({y:11.9},0).wait(1).to({y:13.9},0).wait(1).to({y:16.9},0).wait(1).to({y:21.6},0).wait(1).to({y:28.1},0).wait(1).to({y:34},0).wait(1).to({y:38.2},0).wait(1).to({y:41.3},0).wait(1).to({y:43.6},0).wait(1).to({y:45.5},0).wait(1).to({y:47},0).wait(1).to({regX:0,regY:0,x:0,y:40},0).wait(1).to({regX:0.1,regY:8.4,x:0.1,y:47.6},0).wait(1).to({y:46.5},0).wait(1).to({y:45.2},0).wait(1).to({y:43.4},0).wait(1).to({y:41},0).wait(1).to({y:37.3},0).wait(1).to({y:31.8},0).wait(1).to({y:25.7},0).wait(1).to({y:20.9},0).wait(1).to({y:17.4},0).wait(1).to({y:14.8},0).wait(1).to({y:12.7},0).wait(1).to({y:11},0).wait(1).to({y:9.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-58,93.3,132.7);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 33
	this.instance = new lib.Символ33();
	this.instance.setTransform(217,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 31
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(109.8,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 29
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(0.2,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-79.4,302.9,132.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ13 = function(mode,startPosition,loop) {
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

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(-162.2,0,1,1,0,0,0,-162.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.69,scaleY:1.69},6).to({scaleX:1.46,scaleY:1.46},3).wait(1).to({scaleX:1.69,scaleY:1.69},3).to({scaleX:1,scaleY:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.2,-11.2,80,22.5);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.rrr();
	this.instance_1.setTransform(-28.5,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ8 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.37},6).to({scaleX:1,alpha:0},3).wait(1).to({scaleX:0.37,alpha:1},3).to({scaleX:1},6).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ17();
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.37},6).to({scaleX:1},3).wait(1).to({scaleX:0.37},3).to({scaleX:1},6).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ23();
	this.instance_2.setTransform(39.8,-66,0.116,0.116,0,0,0,95.1,14.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:95.3,scaleX:1.14,scaleY:1.14,alpha:1},6).to({scaleX:1,scaleY:1},3).wait(1).to({scaleX:1.14,scaleY:1.14},3).to({regX:95.1,scaleX:0.12,scaleY:0.12,alpha:0},6).wait(1));

	// Слой 4
	this.hsbet = new lib.Символ13();
	this.hsbet.setTransform(162,42.8);
	this.hsbet.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hsbet).to({y:92.8,alpha:1},6).to({y:87.8},3).wait(1).to({y:92.8},3).to({y:42.8,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-69.4,80,127.5);


(lib.Символ4 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.19,x:0.1},6).to({scaleX:1,x:0,alpha:0},3).wait(1).to({scaleX:0.19,x:0.1,alpha:1},3).to({scaleX:1,x:0},6).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.19},6).to({scaleX:1},3).wait(1).to({scaleX:0.19},3).to({scaleX:1},6).wait(1));

	// Слой 4
	this.csbet = new lib.Символ13();
	this.csbet.setTransform(162,42.8);
	this.csbet.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.csbet).to({y:92.8,alpha:1},6).to({y:87.8},3).wait(1).to({y:92.8},3).to({y:42.8,alpha:0},6).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(-30.4,-64.5,1,1,0,0,0,-11.6,1.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:1.6,scaleX:10.65,scaleY:10.65,x:-30.9,y:-63.7,alpha:1},6).to({regY:1.5,scaleX:9.54,scaleY:9.54,x:-30.8,y:-64.5},3).wait(1).to({regY:1.6,scaleX:10.65,scaleY:10.65,x:-30.9,y:-63.7},3).to({regY:1.5,scaleX:1,scaleY:1,x:-30.4,y:-64.5,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-67.5,80,125.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.ttt();
	this.instance_1.setTransform(-30.3,-43.1,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-58,79,116);


(lib.Символ6 = function(mode,startPosition,loop) {
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
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.43},6).to({scaleX:1,alpha:0},3).wait(1).to({scaleX:0.43,alpha:1},3).to({scaleX:1},6).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.43},6).to({scaleX:1},3).wait(1).to({scaleX:0.43},3).to({scaleX:1},6).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(-0.2,-61.4,0.178,0.178,0,0,0,0,14.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-0.1,regY:14.8,scaleX:1.21,scaleY:1.21,x:-0.3,y:-61.3,alpha:1},6).to({scaleX:1,scaleY:1},3).wait(1).to({scaleX:1.21,scaleY:1.21},3).to({regX:0,regY:14.7,scaleX:0.18,scaleY:0.18,x:-0.2,y:-61.4,alpha:0},6).wait(1));

	// Слой 4
	this.dotabet = new lib.Символ13();
	this.dotabet.setTransform(162,42.8);
	this.dotabet.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.dotabet).to({y:92.8,alpha:1},6).to({y:87.8},3).wait(1).to({y:92.8},3).to({y:42.8,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-67.4,80,125.4);


(lib.Символ9 = function(mode,startPosition,loop) {
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

	// Слой 6
	this.instance = new lib.Символ34();
	this.instance.setTransform(0,-91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-50.7,alpha:0},6).to({_off:true},1).wait(6).to({_off:false},0).to({y:-91.4,alpha:1},6).wait(1));

	// Слой 10
	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(-109.6,-201.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:18},6).wait(7).to({y:-201.6},6).wait(1));

	// Символ 26
	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(69.2,-331.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// Символ 25
	this.instance_3 = new lib.Символ25();
	this.instance_3.setTransform(0.7,-300.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.79,x:55.1},3).to({scaleX:1,x:-377.7,y:-303.7},6).wait(1).to({scaleX:0.8,x:53.9,y:-300.9},6).to({scaleX:1,x:0.7},3).wait(1));

	// Символ 8
	this.hscard = new lib.Символ8();
	this.hscard.setTransform(261.1,-210.9);

	this.timeline.addTween(cjs.Tween.get(this.hscard).to({x:83.6},6).to({x:108.6},3).wait(1).to({x:83.6},3).to({x:261.1},6).wait(1));

	// Символ 6
	this.dotacard = new lib.Символ6();
	this.dotacard.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.dotacard).to({y:-226},6).to({y:-210.9},3).wait(1).to({y:-226},3).to({y:0},6).wait(1));

	// Символ 4
	this.cscard = new lib.Символ4();
	this.cscard.setTransform(-260.9,-210.9);

	this.timeline.addTween(cjs.Tween.get(this.cscard).to({x:-83.4},6).to({x:-108.4},3).wait(1).to({x:-83.4},3).to({x:-260.9},6).wait(1));

	// Слой 9
	this.instance_4 = new lib.Символ19();
	this.instance_4.setTransform(-1.5,-318.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.1,-363.7,602,421.8);


// stage content:
(lib._340x280 = function(mode,startPosition,loop) {
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
		    _this.main.gotoAndPlay(1);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(11);
		}
		
		
		//cs
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.csbtn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler()
		{
			_this.main.cscard.gotoAndPlay(1);
			_this.main.cscard.csbet.gotoAndPlay(1);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.csbtn.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler()
		{
			_this.main.cscard.gotoAndPlay(11);
			_this.main.cscard.csbet.gotoAndPlay(11);
		}
		
		//dota
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.dotabtn.addEventListener("mouseover", fl_MouseOverHandler_22);
		
		function fl_MouseOverHandler_22()
		{
			_this.main.dotacard.gotoAndPlay(1);
			_this.main.dotacard.dotabet.gotoAndPlay(1);
		}
		
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.dotabtn.addEventListener("mouseout", fl_MouseOutHandler_25);
		
		function fl_MouseOutHandler_25()
		{
			_this.main.dotacard.gotoAndPlay(11);
			_this.main.dotacard.dotabet.gotoAndPlay(11);
		}
		
		//hs
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.hsbtn.addEventListener("mouseover", fl_MouseOverHandler_33);
		
		function fl_MouseOverHandler_33()
		{
			_this.main.hscard.gotoAndPlay(1);
			_this.main.hscard.hsbet.gotoAndPlay(1);
		}
		
		var frequency = 50;
		stage.enableMouseOver(frequency);
		this.hsbtn.addEventListener("mouseout", fl_MouseOutHandler_222);
		
		function fl_MouseOutHandler_222()
		{
			_this.main.hscard.gotoAndPlay(11);
			_this.main.hscard.hsbet.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 8
	this.instance = new lib.Символ22();
	this.instance.setTransform(66.9,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.hsbtn = new lib.Символ18();
	this.hsbtn.setTransform(278.1,170.8);
	new cjs.ButtonHelper(this.hsbtn, 0, 1, 2, false, new lib.Символ18(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hsbtn).wait(1));

	// Слой 5
	this.dotabtn = new lib.Символ15();
	this.dotabtn.setTransform(169.1,170.8);
	new cjs.ButtonHelper(this.dotabtn, 0, 1, 2, false, new lib.Символ15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dotabtn).wait(1));

	// Слой 3
	this.csbtn = new lib.Символ12();
	this.csbtn.setTransform(61,170.8,1,1.461);
	new cjs.ButtonHelper(this.csbtn, 0, 1, 2, false, new lib.Символ12(), 3);

	this.timeline.addTween(cjs.Tween.get(this.csbtn).wait(1));

	// Слой 1
	this.main = new lib.Символ9();
	this.main.setTransform(169.9,355);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 9
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(170,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.8,131.2,602,421.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
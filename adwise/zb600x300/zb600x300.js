(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/blik.png?1474529329545", id:"blik"},
		{src:"images/grn.png?1474529329545", id:"grn"},
		{src:"images/logo.png?1474529329545", id:"logo"},
		{src:"images/zb1_03.png?1474529329545", id:"zb1_03"},
		{src:"images/zb1_06.png?1474529329545", id:"zb1_06"},
		{src:"images/zb1_09.png?1474529329545", id:"zb1_09"},
		{src:"images/zb1_0w6.jpg?1474529329545", id:"zb1_0w6"},
		{src:"images/zb1_14.png?1474529329545", id:"zb1_14"},
		{src:"images/zb1_17.png?1474529329545", id:"zb1_17"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.blik = function() {
	this.initialize(img.blik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,55);


(lib.grn = function() {
	this.initialize(img.grn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,63);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,284,76);


(lib.zb1_03 = function() {
	this.initialize(img.zb1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,82);


(lib.zb1_06 = function() {
	this.initialize(img.zb1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,71);


(lib.zb1_09 = function() {
	this.initialize(img.zb1_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,122);


(lib.zb1_0w6 = function() {
	this.initialize(img.zb1_0w6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,354);


(lib.zb1_14 = function() {
	this.initialize(img.zb1_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,71);


(lib.zb1_17 = function() {
	this.initialize(img.zb1_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,39);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blik();
	this.instance.parent = this;
	this.instance.setTransform(-262,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:-244,y:33},0).wait(3).to({x:-324,y:63},0).wait(3).to({x:153,y:13},0).wait(3).to({x:50,y:1},0).wait(3).to({x:222,y:-32},0).wait(3).to({x:-298,y:45},0).wait(3).to({x:-261,y:-7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262,-7,73,55);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.grn();
	this.instance.parent = this;
	this.instance.setTransform(-4.2,-28.8,0.492,0.492,49.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.8,-28.8,55.6,57.6);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgldgktIHDmCMBD4BPdInDGCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.8,-273.6,479.7,547.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AGeJKQgLgBgJgIQgFgFgFgHIgLgRIAVgLQAKANAFADQAFAEAHgCIADgBIgEgEQgEgFAAgGQAAgFAFgGIAvg6IAWAZIgqAuQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAIABACIBDgVIAXAbIhgAcQgPAFgLAAIgEAAgAFTH+QAXgaADgFQAGgJgCgFQgBgEgDgDIgFgGQgFAFgEADIgjAXIgXgaIBqhEIAWAaIgcASQgJAFgEACIADAEQAEAFAEACQAFABAFAAQALgCAegKIAXAaIgoANQgPACgJgEIgLgIIgBABIAEAHIACAHQABAEgCADIgDAHIgGAJIgXAdgAEZGyQgGgCgHgFIgOgOIglgsIBqhEIAhAjQAQATABAMQAAAGgEAGQgEAFgHAGQgMAHgJAAQgIgBgJgIIgBAAQAQAWgbASQgIAFgHACIgEAAIgIgBgAECF9IAKALQAHAIAFABQAEABAJgFQAIgGAAgEQAAgDgFgGIgMgOgAEvFhIAKALQAFAGAFABQAEABAIgFQAFgEABgDQAAgEgFgFIgLgNgAC9FPIAUgVIgZgdIgeALIgWgbIB4gmIAIgBQADACADADIAUAYQADADAAADQAAAEgCADIhMBZgADSEUIARATIAeggIgDgEgABVDXIBUg1IgXgbIAVgOIBFBPIgWAPIgXgbIhUA1gAAfCbQgKgLgEgKQgDgLABgJQAEgRAfgUQAfgUASABQAJABAKAGQAKAGAKALQAOARAHAQIgVANIgXgcQgFgGgFgCQgEgBgJADQgHACgOAJIgOAKIgHAHQgCAEABADQABAEAEAFIAaAcIgSARQgQgKgPgSgAgiBAQgGgBgHgFQgHgFgIgIQgYgcgLgPIBohCIAWAaIgkAXIAHALQASASgBANQgBANgSANQgQALgMAAIgEAAgAg3APIAIAJQAGAHAFABQAEABAKgHQAJgGACgEQABgDgGgHIgJgJgAiXg7IBUg2IgYgaIAWgPIBFBQIgWAOIgXgbIhUA2gAjFhwIAUgVIgZgdIgdAKIgXgaIB4gnIAIAAQAEABADADIAUAYQACADAAAEQABAEgDACIhMBZgAiwisIARAUIAfggIgDgEgAkbjUIBWg3IgGgHQgEgFgDgBQgDAAgGADIgmASQgPAHgIACQgJADgIAAQgIAAgGgDQgHgDgFgFQgGgEgEgIIAUgSQAGAGAFACQAFABAGgCQAQgDApgXQAXgMARAVIAnAsIhqBEgAl4lAQgFgFgCgGQgCgGABgFQACgLAMgJIA5gkQALgHAKABQAFABAFADIAJAIQAcAhAKAOIgVANIgdgiQgDgEgDAAQgDAAgEACIgMAIIAeAjIgTANIgfgjIgQAKQgDACgBADIADAGIAeAiIgUAPIgngrgAm8lmIAVgQIgzg7IgYANIgQgTIAqgcIAIAKQAfgIAsgWQAMgFAKABQAKADAJAKIAmAsIhWA3IALANIgrAbgAl2nJIgkARQgRAHgNAEIAWAZIBCgrIgGgHQgDgEgEgBIgBAAQgDAAgFACgAoLnoQgKgLgEgKQgDgLABgJQAFgRAegUQAfgUATABQAIABAKAGQAKAGAKALQAPARAGAQIgVANIgXgcQgFgGgFgCQgEgBgJADQgHACgOAJIgOAKIgHAHQgCAEABADQABAEAEAFIAaAcIgRARQgQgKgQgSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-58.7,108.1,117.4);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#986F27","#FFB524","#FFB524","#986F27"],[0,0.239,0.82,1],-27.6,21.2,22.8,-22).s().p("AIkOJQhjgHhBhMIxv0wQhAhMAHhkQAIhkBMhBIABAAQBMhBBjAIQBkAIBBBMIRuUwQBBBMgIBjQgHBkhMBBIgBAAQhDA6hXAAIgWgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-90.6,162,181.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJhPjIBmhCIg6hEIhnBCIhGhRID+ijIBGBRIhZA5IA6BEIBZg6IBGBSIj+CjgAG5MFQgZgFgSgMQgRgLgTgWQgdghgVgmQgVASgYAQIgvAcIhIhSIFbjgIA4BCIgpAjQArACAgANQAgANAUAYQBEBPiKBaQgnAZggALQgXAIgSAAIgOgBgAFvJsIAYAcQALAOALAHQAKAHAIgBQAJAAAQgIIAkgVQAqgaAKgMQAJgPgLgMQgKgLgSgIQgTgGgZgCgACnHlQgdgYgXgaQgYgdgOgZQgNgYgFgWQgFgqApgcQAegVAcAEQAeADAiAWIA+AqQAgAVAJAAIAHgDQAGgFgFgJIgageIhWhSIAwgrQA6AgA1A7QArAxAJAnQAJAmgmAdQgQANgSADQgSAFgOgBQgNgBgRgHIgXgLIhphDQgHgDgFAFQgIAFAGAKQAFAKAWAYQAgAhA5AwIgvA0QghgUgdgXgAhOCLQg+gBg8hGQgegigLggQgLgeAHgeQAPg6BmhCQAzggAogPQAngRAfABQA+ABA7BFQAgAkAMAgQAIAWgBAWQgBAJgDAJQgIAcgdAdQgdAfg0AgQgzAhgnAQIgPAGQgeAJgYAAIgCAAgAAMiLQgYAMgvAfQhGAtgNAWQgHAKADAMQACAKAMANQAYAcAcgFQAdgEBBgsQAtgcAVgVQAUgUACgNQAAgNgPgTQgQgSgRgEIgJgBQgOAAgTAHgAlKiXQg+gBg7hFQgegjgLggQgMggAHgdQAQg7BmhCQAyggAqgQQAngQAgABQA+ABA8BFQAeAkANAgQALAhgIAcQgIAdgdAfQgeAfgzAhQgzAggpAQQgnAPgfAAIgCAAgAjtmuQgaAMgwAeQhFAugNAUQgHALADAMQACALAMAOQAYAcAcgFQAcgEBEguQAtgcAVgUQAUgVACgNQAAgNgPgSQgRgTgQgFIgHAAQgPAAgUAIgAq/oBQgegigLggQgLggAHgdQAPg8BmhBQAzghAogPQApgQAfABQA/ABA6BFQAgAkALAgQALAhgHAdQgIAcgeAfQgdAfgzAgQg0AhgoAQQgpAPgfAAQg9gBg8hGgAnprSQgaANgvAeQhGAugNAUQgHALADAMQACAMAMANQAYAbAcgEQAcgEBDguQAugcAVgUQAUgVACgNQAAgNgPgTQgQgSgRgEIgJgBQgOAAgTAHgAujsVIDsiWQAbgSAQgHIhRg7IAvg0IBsA9IBIBTIlfDjg");
	this.shape.setTransform(77.4,97.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE13").s().p("AHgNWICjhnQAdgTAcgKIgCgDQgrAKgRACIjxAZIhChNIFCjNIBABLIidBkQgVAPgoAPIACAEQAigKAdgDIDtgXIBABMIlBDNgADbIkIB/hRQg5gcggglQgSgUgHgTQgIgSADgQQABghAsgbICEhWIBEBPIh3BLQgPAKAAAKQgBAKAMANQAYAdAlASICDhUIBEBPIlCDNgAAJENQghgDgbgbQgPgNgPgXIgigzIA/giQAgAmAOAKQANAMAVgFIAKgCIgMgOQgMgPAAgSQAAgQARgTICPiuIBDBOIiBCLQgEAFAFAHIAFAGIDLhBIBHBTIklBWQgyAPggAAIgIAAgAjqAPIEFilIgTgVQgJgOgLgCQgKgBgRAIIhzA4QguAUgXAGQgdAIgaAAQgXAAgTgIQgUgJgQgPQgQgOgOgXIA8g3QAUATANAGQAPADAVgHQAvgJB/hFQBGgjAzA8IBzCJIk/DLgAmRjlQgRgCgQgEQgNgGgMgJQgbgRgegkQg+hHAMg3QAKg2Big+QAugfAmgNQAlgOAfACQAdADAcASQAcASAeAiQAeAjAMAfQAOAigHAbQgJA4hfA9Qg+AkgaAJQgdALgZAAIgNgBgAkvn2QgPACgWAMQgYAKgeAUQgfASgRAQQgSAPgFAJQgHALACANQAEALAMANQAXAbAcgDQAcgDBBgoQA6gnAMgUQAFgKgCgLQgDgNgLgNQgVgZgZAAIgGAAgArXoxIEHimIhHhTIkGCnIhDhPIFCjNIDNDwIlCDNg");
	this.shape_1.setTransform(-84.6,-94.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.2,-187,341.9,392.2);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-132,1,1,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.8,-132,243.7,264.2);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE13").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-123.2,219.2,246.6);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgpVgP/MAgAgbWMAyrA7VMggAAbWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.7,-277.4,529.3,554.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AH4NAIBVg3Igvg5IhXA4Ig6hFIDTiGIA6BEIhKAvIAwA5IBMgwIA5BEIjUCGgAFtKGQgTgEgQgJQgPgMgPgSQgYgbgRgfQgSAPgUANIgnAYIg8hGIEii5IAvA4IgiAdQAiABAbAMQAaALARATQA5BDhzBLQggAVgbAJQgQAGgPAAQgIAAgIgCgAEvIIIAUAWQAKAMAKAGQAJAFAGABQAHgBAOgGIAfgSQAjgWAGgKQAJgLgKgLQgJgKgNgGQgQgFgXgCgACLGVQgYgTgUgVQgVgagMgTQgJgWgDgRQgEgkAhgWQAXgRAYACQAbACAbATIAzAjQAcASAHgBIAGgDQAEgCgEgHIgVgZIhIhGIAqgkQAuAcAtAxQAjAoAIAgQAIAigfAWQgPAMgOAEQgSADgJgCQgLgBgOgFIhrhCQgGgBgFAEQgGADAFAIQAFAIARAUQAaAdAxAoIgpAqQgbgPgWgVgAhBByQgzAAgyg6QgZgdgJgbQgJgYAHgZQAOgyBSg1QAsgcAhgMQAhgNAbAAQAzABAyA7QAYAdALAcQAIAbgGAZQgHAWgZAYQgXAZgtAcQgqAaggAOQgeALgYAAIgGAAgAALhyQgTAKgoAXQg5AngMASQgFAHABALQACAIAKALQAVAXAWgDQAXgFA4gjQAmgYASgRQARgRAAgKQACgLgOgQQgOgPgNgDIgHAAQgMAAgRAGgAkSh/Qg0AAgzg6QgXgdgJgbQgKgaAGgZQAOgyBUg1QArgcAigMQAigNAaAAQA0ABAyA7QAZAdAKAcQAHAagEAaQgIAVgZAbQgXAZgtAcQgpAagjAOQgeALgZAAIgEAAgAjFllQgVAJgoAYQg5AngLASQgGAHABALQACAJAKALQAVAYAVgEQAYgEA5glQAngYASgRQARgRAAgLQABgLgOgPQgOgQgMgCIgGgBQgNAAgRAHgAnjlzQg0AAgyg7QgYgdgJgaQgKgbAHgZQAOgyBTg1QAsgbAhgNQAjgMAaAAQAzABAzA6QAYAdAKAdQAIAagFAYQgHAXgZAaQgYAZgsAcQgqAagiAPQgfALgZAAIgEAAgAmVpaQgWAKgoAXQg4AngLASQgHAHACALQACAKAKALQAUAYAWgEQAYgFA5glQAmgYATgRQAQgQAAgLQACgLgOgQQgOgPgMgDIgHAAQgMAAgRAGgAsFqUIDGh+QAWgNAOgGIhCgyIAlgrIBbA1IA7BEIkmC7g");
	this.shape.setTransform(-5.5,70.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.9,-19.5,154.8,180);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGEKNIBMgxIgqgzIhNAyIg0g9IC9h4IA0A9IhDAqIArAzIBEgsIA0A9Ii/B5gAEIHmQgSgDgNgJQgOgKgOgQQgVgZgPgcQgQAOgTALIgiAVIg2g+IEEilIArAxIggAbQAgABAXAKQAYAKAPARQAzA8hoBDQgcATgYAJQgPAFgOAAIgNgCgADRF1IASAUQAIAKAJAGQAHAEAHABIASgGIAcgQQAfgUAGgJQAIgKgJgKQgIgJgMgFQgOgFgVgBgAA9EOQgVgQgSgUQgSgXgJgRQgJgUgDgPQgDggAcgUQAVgPAVABQAXACAZASIAuAfQAZAQAHgBIAFgDQADgCgDgGIgTgXIhBg+IAlggQArAZAoArQAfAkAHAdQAGAfgbAUQgOAKgMAEQgPACgJgBQgKgBgMgFIhgg7QgFgBgFAEQgFACAEAIQAFAHAPARQAXAbAsAkIgkAlQgZgOgUgSgAh6ALQguAAgtgyQgVgbgJgXQgJgYAGgWQANgtBLgvQAmgZAegLQAfgMAYAAQAsACAtA0QAWAaAJAZQAHAYgFAWQgGAUgWAXQgWAXglAZQgmAXgfALQgaAKgWAAIgFAAgAg1jCQgSAJgkAVQgzAjgKAQQgFAGABAKQABAJAJAKQASAVAUgEQAWgDAzgiQAigVARgPQAMgPAAgKQACgKgNgOQgKgNgLgDIgHAAQgLAAgPAFgAk1jOQguAAgtg0QgVgbgJgXQgJgYAHgWQAMgtBLgvQAmgZAegMQAfgLAYAAQAuACAtA0QAWAaAJAZQAHAXgFAXQgGAUgWAXQgVAXgoAZQglAXggANQgaAKgWAAIgFAAgAjvmdQgTAJgkAVQgzAjgKAQQgFAGABAKQABAJAJAKQATAVAUgEQAVgDAzgiQAjgVAQgPQAPgPAAgKQABgKgMgOQgNgNgLgDIgHAAQgKAAgPAFgAn8meQgPgEgTgPQgSgPgWgZQgug1gBgiQAAghAlgYQA/gqAqApIABAAQgMgUAHgUQAIgTAcgSQATgNAQgEQASgDANADQAfAIAoAvQAVAZAMAUQALAVAAAPQgBAfgmAYQgbATgVgCQgYAAgRgQIgDABQARAXgJAXQgJAWgjAVQgRAMgSAEQgJACgIAAQgIAAgHgCgAoAo9QgJADgLAIQgTALAAALQgBAJASAUQAPATAMACQAMABAXgNQATgNABgKQAAgKgQgUQgRgSgMgCIgEAAQgFAAgGACgAmkp0QgQAKAAAJQgBAIAPASQAPARALABQALADATgNQASgLACgKQAAgIgPgSQgPgRgMgCIgBAAQgLAAgUANg");
	this.shape.setTransform(3.9,62.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,-9.2,126.1,143);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGBKNIBNgxIgrg0IhOAzIg1g+IDAh7IA1A+IhEArIAsA0IBEgsIA1A+IjBB6gAECHlQgSgDgOgJQgOgKgOgRQgVgZgPgcQgRAOgTALIgjAWIg2g/IEIioIAqAyIgfAbQAfABAYAKQAYAKAQASQAzA9hoBEQgeATgXAJQgPAEgOAAIgOgBgADKFzIASAUQAJAKAIAGQAIAEAGABIATgGIAcgRQAggUAGgJQAHgKgIgKQgIgJgNgFQgNgFgWgBgAA1EKQgVgRgSgUQgRgXgLgRQgJgUgDgQQgDggAdgVQAUgPAWACQAYACAZASIAvAfQAZARAGgCIAFgCQAEgDgEgGIgTgXIhBg/IAmghQArAaAoAsQAfAkAIAdQAGAggbAUQgOAKgNAEQgPADgJgCQgKgBgNgFIhhg7QgFgCgFAEQgFADAEAHQAFAIAPASQAYAaAsAlIgkAmQgagOgUgTgAiFACQgvAAgtgzQgVgbgJgXQgJgYAGgXQANguBMgwQAngZAegLQAfgMAYAAQAtACAuA1QAWAaAJAZQAIAYgFAXQgHAUgWAYQgWAXgmAZQgmAYggANQgbAIgXAAIgEAAgAg+jNQgTAIglAWQgzAjgLARQgFAGACAKQABAJAJAKQATAVAUgDQAVgEA0giQAjgWARgPQANgPAAgKQABgKgKgOQgNgOgLgDIgHgBQgLAAgPAHgAlCjZQgvAAgtg1QgWgagJgYQgIgYAGgXQANgtBLgwQAngaAfgLQAfgLAYAAQAvABAtA1QAXAaAJAaQAHAYgFAWQgGAVgXAYQgVAWgpAZQglAYggANQgcAKgWAAIgEAAgAj8mqQgSAIglAWQg0AjgKARQgFAGABAKQACAJAIAKQATAVAVgDQAVgEA0giQAjgWAQgPQAQgPAAgKQABgKgNgOQgMgOgMgCIgGgBQgLAAgQAGgAoCmtQgTgCgTgOQgUgNgUgYQgvg1ANgnQAMgoBNgzQAugcAhgMQAggMAaAEIAYAGQAKAEAKAIQARAMAYAcQAcAhAUAmIgsAdIgwg5QgKgMgKgHQgKgGgJgBQgTgCgnAXQASAFAOAIQANAJALAMQAQATAGASQAHAQgDAPQgFAfgtAbQgsAdgkAAIgKgBgAoponQgEAHADAHQACAIAIALQAQARAOgBQAPAAAbgSQAUgMACgIQADgJgNgPQgHgJgMgGQgKgFgOgFQgrAagHAMg");
	this.shape.setTransform(7.9,67);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-4.5,126.1,143.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF6KLIBNgxIgrg0IhOAyIg1g9IDAh6IA0A9IhDArIAsA0IBEgsIA0A9IjAB6gAD7HjQgSgDgNgJQgOgKgOgRQgVgZgQgbQgQANgTAMIgjAVIg2g/IEHinIArAyIggAbQAgABAYAKQAYAKAPASQAzA8hoBEQgdATgYAJQgPAFgOAAIgOgCgADEFxIARAUQAJAKAJAGQAIAEAGABQAGgBANgFIAbgQQAggUAGgJQAIgKgJgKQgIgJgMgFQgOgFgWgBgAAvEHQgVgQgSgUQgRgXgLgSQgJgUgCgPQgEghAegUQATgPAWABQAYADAZASIAvAfQAZAQAGgBIAFgCQAEgDgEgGIgTgXIhBg/IAlggQArAZApAsQAfAkAIAdQAGAggcAUQgOAKgMAEQgPACgJgBQgKgBgNgFIhhg8QgFgBgFAEQgFACAEAIQAFAIAPARQAYAbAsAkIgkAmQgagOgUgTgAiKABQgvAAgtgyQgWgbgIgYQgJgYAGgWQANguBLgwQAngZAegLQAggLAYAAQAuABAsA1QAWAaAJAZQAIAYgFAXQgHAUgWAYQgWAXgmAZQgmAYgfAMQgbAIgWAAIgFAAgAhEjOQgTAJgkAWQg0AjgKAQQgFAHABAKQACAIAIALQATAVAUgEQAWgEAzgiQAkgVAQgPQAPgPAAgKQAAgKgLgOQgNgOgLgDIgHAAQgLAAgPAFgAlHjZQgvAAgtg1QgVgagJgYQgJgYAGgXQANgtBLgwQAngZAfgLQAfgMAYAAQAvACAtA1QAXAaAIAZQAIAYgFAXQgGAUgXAYQgVAWgpAaQgmAXgfANQgcAKgWAAIgEAAgAkBmqQgTAJgkAVQg0AkgKAQQgFAGACAKQABAJAJAKQASAWAVgEQAVgEA0giQAjgVAQgPQAPgPAAgLQACgKgNgNQgNgOgLgDIgHAAQgLAAgPAFgApNngIA3gkIhMhaQgPgTAGgRQACgKAHgFQAGgHALAAIDZgvIA1A9IjFAtQgOADAIAIIAoAvIBEgsIAzgQIAqAxIhtBHIAVAaIgoAaIgdgVIAAgBIg5Akg");
	this.shape.setTransform(3.9,62.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-9,124.5,142.6);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGOKSIBMgwIgrgzIhNAyIg0g+IC9h4IA0A9IhDAqIAsA0IBDgsIA0A9Ii+B4gAEQHsQgRgEgOgIQgNgKgOgQQgVgagPgbQgQANgTAMIgjAVIg1g+IEEilIAqAxIgfAaQAfACAXAJQAYALAPARQAzA7hnBDQgdATgXAJQgQAFgOAAIgNgBgADaF6IARAVQAJAJAIAGQAIAFAGABQAGgBANgGIAbgQQAfgUAGgIQAIgKgJgKQgHgJgNgFQgNgFgWgBgABGEUQgVgRgSgTQgSgXgMgRQgGgUgDgPQgEggAcgUQAVgPAWABQAXADAZARIAuAfQAZAQAGgBIAFgDQAEgCgEgGIgTgWIhAg/IAlggQAqAZAoAsQAfAkAIAcQAGAfgcAUQgNAKgNADQgPADgIgBQgKgCgNgEIhfg7QgFgBgFAEQgFACADAIQAFAHAPARQAYAbArAjIgkAmQgYgOgUgSgAhwAQQguAAgtgzQgVgagJgXQgIgYAGgWQAMgtBLgvQAmgZAegLQAfgLAYAAQAsABAsA0QAXAbAJAYQAHAYgFAWQgGAUgXAYQgVAWgnAZQgkAYgfAKQgbAKgWAAIgEAAgAgri9QgSAJgkAVQgzAjgKAQQgFAHABAKQABAIAJAKQATAVAUgDQAVgEAzgiQAigVAPgPQAOgOAAgLQACgKgNgOQgLgNgKgCIgHgBQgLAAgPAFgAkrjHQgugBgsg0QgVgagJgXQgJgYAGgXQANgsBKgwQAngZAegLQAfgLAXAAQAuABAtA1QAWAaAJAZQAIAXgFAXQgHATgWAYQgVAXgoAZQglAXgfANQgcAKgWAAIgEAAgAjlmWQgTAJgkAVQgzAigKARQgFAGACAKQABAJAJAKQASAVAUgEQAVgDAzgiQAjgVAQgPQAPgPAAgKQABgKgMgOQgNgNgLgDIgGgBQgLAAgPAGgAp+ooIAngaQAUgMANACIBrAOQA1AHAUAAQATAAALgGQAJgFgBgHQgDgGgKgNIhChKIAwgoQAdAWAwA1QAlArAEAeQADAeglAaIgVALIgYAHQgWADgogFIhygQQAQALAQATIA4BCIg9Ang");
	this.shape.setTransform(3.9,62.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-9.6,127.9,143.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zb1_03();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-41,109,82);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zb1_06();
	this.instance.parent = this;
	this.instance.setTransform(-34,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-35.5,68,71);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zb1_09();
	this.instance.parent = this;
	this.instance.setTransform(-97,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-61,194,122);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zb1_14();
	this.instance.parent = this;
	this.instance.setTransform(-75.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5,-35.5,151,71);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.zb1_17();
	this.instance.parent = this;
	this.instance.setTransform(-300,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-19.5,600,39);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,49.2,0.688,0.688,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ39();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.4,-30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.zb1_0w6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-321,-189.4,1.07,1.07);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321,-189.4,642,378.8);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 31
	this.instance = new lib.Символ31();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.1,scaleX:1.1,scaleY:1.1,y:-1.5},0).wait(1));

	// Символ 30
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.1,1.1);
	this.instance_1.alpha = 0.309;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Символ 30
	this.instance_2 = new lib.Символ30();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-90.6,162,181.4);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-99.7,178.2,199.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.parent = this;
	this.instance.setTransform(-14.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254.1,-261.4,479.7,547.2);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(5.4,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8,scaleY:0.8,x:15.2,y:-13},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:5.4,y:-4.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33.2,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.26,scaleY:1.26,x:-23.3,y:18},19,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:-33.2,y:26.4},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.8,-191.5,341.9,392.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.parent = this;
	this.instance.setTransform(8.8,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,-139.5,243.7,264.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-41,109,82);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(-18.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:7.3},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:21.8},0).wait(1).to({rotation:29.1},0).wait(1).to({rotation:36.4},0).wait(1).to({rotation:43.6},0).wait(1).to({rotation:50.9},0).wait(1).to({rotation:58.2},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:80},0).wait(1).to({rotation:87.3},0).wait(1).to({rotation:94.5},0).wait(1).to({rotation:101.8},0).wait(1).to({rotation:109.1},0).wait(1).to({rotation:116.4},0).wait(1).to({rotation:123.6},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:138.2},0).wait(1).to({rotation:145.5},0).wait(1).to({rotation:152.7},0).wait(1).to({rotation:160},0).wait(1).to({rotation:167.3},0).wait(1).to({rotation:174.5},0).wait(1).to({rotation:181.8},0).wait(1).to({rotation:189.1},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:210.9},0).wait(1).to({rotation:218.2},0).wait(1).to({rotation:225.5},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:240},0).wait(1).to({rotation:247.3},0).wait(1).to({rotation:254.5},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:283.6},0).wait(1).to({rotation:290.9},0).wait(1).to({rotation:298.2},0).wait(1).to({rotation:305.5},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:320},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:334.5},0).wait(1).to({rotation:341.8},0).wait(1).to({rotation:349.1},0).wait(1).to({rotation:356.4},0).wait(1).to({rotation:363.6},0).wait(1).to({rotation:370.9},0).wait(1).to({rotation:378.2},0).wait(1).to({rotation:385.5},0).wait(1).to({rotation:392.7},0).wait(1).to({rotation:400},0).wait(1).to({rotation:407.3},0).wait(1).to({rotation:414.5},0).wait(1).to({rotation:421.8},0).wait(1).to({rotation:429.1},0).wait(1).to({rotation:436.4},0).wait(1).to({rotation:443.6},0).wait(1).to({rotation:450.9},0).wait(1).to({rotation:458.2},0).wait(1).to({rotation:465.5},0).wait(1).to({rotation:472.7},0).wait(1).to({rotation:480},0).wait(1).to({rotation:487.3},0).wait(1).to({rotation:494.5},0).wait(1).to({rotation:501.8},0).wait(1).to({rotation:509.1},0).wait(1).to({rotation:516.4},0).wait(1).to({rotation:523.6},0).wait(1).to({rotation:530.9},0).wait(1).to({rotation:538.2},0).wait(1).to({rotation:545.5},0).wait(1).to({rotation:552.7},0).wait(1).to({rotation:560},0).wait(1).to({rotation:567.3},0).wait(1).to({rotation:574.5},0).wait(1).to({rotation:581.8},0).wait(1).to({rotation:589.1},0).wait(1).to({rotation:596.4},0).wait(1).to({rotation:603.6},0).wait(1).to({rotation:610.9},0).wait(1).to({rotation:618.2},0).wait(1).to({rotation:625.5},0).wait(1).to({rotation:632.7},0).wait(1).to({rotation:640},0).wait(1).to({rotation:647.3},0).wait(1).to({rotation:654.5},0).wait(1).to({rotation:661.8},0).wait(1).to({rotation:669.1},0).wait(1).to({rotation:676.4},0).wait(1).to({rotation:683.6},0).wait(1).to({rotation:690.9},0).wait(1).to({rotation:698.2},0).wait(1).to({rotation:705.5},0).wait(1).to({rotation:712.7},0).wait(1).to({rotation:720},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-24.9,68,71);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-61,194,122);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(55.1,-9.2,1,1,6.7,0,0,55.1,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-50.5,158.3,88.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-19.5,600,39);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-90.6,162,181.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-90.6,162,181.4);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.parent = this;
	this.instance.setTransform(4,-3.6,0.782,0.782);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.7,-153.3,267.3,306.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(-56.6,177.5,0.432,0.889,0,35.4,31,66.1,-6.6);

	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26.3,125.9,1.065,0.644,0,-31.6,-27.2);

	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.3,44.4,1.045,0.684,0,-53.1,-36.2,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.7,-6,278.3,216.4);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-90.6,162,181.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(7.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.6,-88.5,162,181.4);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 16
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(-215.5,-17.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({x:-190.6,y:-38.4,alpha:1},9,cjs.Ease.get(1)).wait(87).to({x:-215.5,y:-17.3,alpha:0},9).wait(6));

	// Слой 15
	this.instance_1 = new lib.Символ24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108,-97.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({x:-124.5,y:-81.2,alpha:1},5,cjs.Ease.get(1)).wait(95).to({x:-108,y:-97.7,alpha:0},5).wait(6));

	// Слой 14
	this.instance_2 = new lib.Символ21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60.9,-140.2,0.491,0.491);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({scaleX:0.75,scaleY:0.75,x:-79.1,y:-121.7},10,cjs.Ease.get(1)).wait(95).to({scaleX:0.49,scaleY:0.49,x:-60.9,y:-140.2},10).wait(1));

	// Слой 11
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-134.6,-89.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({alpha:0.313},5).to({alpha:0.621},5).wait(95).to({alpha:0},10).wait(1));

	// Слой 10
	this.instance_4 = new lib.Символ17();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-161.3,-232.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).wait(28).to({x:-48.3,y:-80.3,alpha:0},5,cjs.Ease.get(1)).to({_off:true},77).wait(34));

	// Слой 9
	this.instance_5 = new lib.Символ16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-173.3,-227);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).to({alpha:1},4).to({_off:true},13).wait(144));

	// Слой 8
	this.instance_6 = new lib.Символ15();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-173.3,-227.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({alpha:1},4).to({_off:true},13).wait(161));

	// Слой 7
	this.instance_7 = new lib.Символ14();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-172.5,-226.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({alpha:1},4).to({_off:true},13).wait(178));

	// Слой 6
	this.instance_8 = new lib.Символ13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-174.2,-227.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({alpha:1},4).to({_off:true},13).wait(195));

	// Слой 1
	this.instance_9 = new lib.Символ12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120.8,114.1,1,1.002,0,104.2,-79.7,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({x:284.1,y:277.4},10,cjs.Ease.get(1)).to({_off:true},82).wait(34));

	// Слой 18 - копия: 2 - копия
	this.instance_10 = new lib.Символ36();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-113.7,-21.1,0.804,0.804,0,0,0,-0.1,-0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(71).to({_off:false},0).to({regY:-0.2,rotation:24.2,x:-163.9,y:-102.3,alpha:1},7).to({rotation:-35.8,x:-163,y:-58.9},17,cjs.Ease.get(1)).to({regX:-0.2,rotation:30,x:-272,y:-135.8},16,cjs.Ease.get(1)).to({regX:-0.3,rotation:9,x:-308.6,y:-138.6},17).wait(72).to({alpha:0},14).wait(1));

	// Слой 18 - копия: 2
	this.instance_11 = new lib.Символ36();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-113.7,-21.1,0.804,0.804,0,0,0,-0.1,-0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({regY:-0.2,rotation:24.2,x:-163.9,y:-102.3,alpha:1},7).to({rotation:-35.8,x:-163,y:-58.9},17,cjs.Ease.get(1)).to({regX:-0.2,rotation:30,x:-272,y:-135.8},14,cjs.Ease.get(1)).to({regY:-0.3,rotation:-20.9,x:-337.8,y:-165.7},17).wait(91).to({alpha:0},14).wait(1));

	// Слой 18 - копия: 2
	this.instance_12 = new lib.Символ36();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-113.7,-21.1,0.804,0.804,0,0,0,-0.1,-0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(37).to({_off:false},0).to({regY:-0.2,rotation:24.2,x:-163.9,y:-102.3,alpha:1},7).to({rotation:-35.8,x:-163,y:-58.9},17,cjs.Ease.get(1)).to({regX:-0.2,rotation:30,x:-272,y:-135.8},14,cjs.Ease.get(1)).to({regX:-0.3,regY:-0.3,rotation:15,x:-222.1,y:-37.9},15).wait(110).to({alpha:0},14).wait(1));

	// Слой 18 - копия
	this.instance_13 = new lib.Символ36();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-113.7,-21.1,0.804,0.804,0,0,0,-0.1,-0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({_off:false},0).to({regY:-0.2,rotation:24.2,x:-163.9,y:-102.3,alpha:1},6).to({rotation:-35.8,x:-163,y:-58.9},18,cjs.Ease.get(1)).to({regX:-0.2,rotation:30,x:-272,y:-135.8},14,cjs.Ease.get(1)).to({rotation:-5.9,x:-284.4,y:-104.5},15).wait(124).to({rotation:-5.9},0).to({alpha:0},14).wait(1));

	// Слой 18
	this.instance_14 = new lib.Символ36();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-113.7,-21.1,0.804,0.804,0,0,0,-0.1,-0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({regY:-0.2,rotation:24.2,x:-163.9,y:-102.3,alpha:1},6).to({rotation:-35.8,x:-163,y:-58.9},18,cjs.Ease.get(1)).to({regX:-0.2,rotation:30,x:-272,y:-135.8},14,cjs.Ease.get(1)).to({rotation:-5.9,x:-248.3,y:-72.8},15).wait(144).to({rotation:-5.9},0).to({alpha:0},14).wait(1));

	// Слой 5
	this.instance_15 = new lib.Символ8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-110.6,9.2,1,1,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:-0.2,regY:0.1,scaleY:0.86,x:-103.5,y:-21.8},3,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleY:1,rotation:139,x:-18.7,y:-82.9},7,cjs.Ease.get(1)).to({rotation:49,x:-110.6,y:9.2},6,cjs.Ease.get(1)).wait(1).to({regX:-0.2,regY:0.1,scaleY:0.86,x:-103.5,y:-21.8},3,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleY:1,rotation:139,x:-18.7,y:-82.9},8,cjs.Ease.get(1)).to({rotation:49,x:-110.6,y:9.2},5,cjs.Ease.get(1)).wait(1).to({regX:-0.2,regY:0.1,scaleY:0.86,x:-103.5,y:-21.8},3,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleY:1,rotation:139,x:-18.7,y:-82.9},7,cjs.Ease.get(1)).to({rotation:49,x:-110.6,y:9.2},6,cjs.Ease.get(1)).wait(1).to({regX:-0.2,regY:0.1,scaleY:0.86,x:-103.5,y:-21.8},3,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleY:1,rotation:139,x:-18.7,y:-82.9},8,cjs.Ease.get(1)).to({rotation:49,x:-110.6,y:9.2},5,cjs.Ease.get(1)).wait(1).to({regX:-0.2,regY:0.1,scaleY:0.86,x:-103.5,y:-21.8},3,cjs.Ease.get(-1)).to({regX:0,regY:0,scaleY:1,x:177,y:-239.1},13,cjs.Ease.get(1)).wait(5).to({x:305.3,y:-29.3},10,cjs.Ease.get(1)).to({_off:true},1).wait(19).to({_off:false,x:126.6,y:-96.9},0).to({x:-80.6,y:78.6},10,cjs.Ease.get(1)).to({x:-29.5,y:75.4},4,cjs.Ease.get(1)).to({x:-48.1,y:120.6},4,cjs.Ease.get(1)).to({x:6.2,y:135.3},3,cjs.Ease.get(1)).to({x:40.6,y:229.5},3,cjs.Ease.get(1)).wait(72));

	// Символ 4
	this.instance_16 = new lib.Символ4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-54.9,57.5,0.842,0.842,12,0,0,66.2,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({regY:-6.9,rotation:36,x:-69.3,y:45.6},3,cjs.Ease.get(-1)).to({regY:-7,rotation:12,x:-54.9,y:57.5},13,cjs.Ease.get(1)).wait(1).to({regY:-6.9,rotation:36,x:-69.3,y:45.6},3,cjs.Ease.get(-1)).to({regY:-7,rotation:12,x:-54.9,y:57.5},13,cjs.Ease.get(1)).wait(1).to({regY:-6.9,rotation:36,x:-69.3,y:45.6},3,cjs.Ease.get(-1)).to({regY:-7,rotation:12,x:-54.9,y:57.5},13,cjs.Ease.get(1)).wait(1).to({regY:-6.9,rotation:36,x:-69.3,y:45.6},3,cjs.Ease.get(-1)).to({regY:-7,rotation:12,x:-54.9,y:57.5},13,cjs.Ease.get(1)).wait(1).to({regY:-6.9,rotation:36,x:-69.3,y:45.6},3,cjs.Ease.get(-1)).to({regY:-7,rotation:12,x:-54.9,y:57.5},13,cjs.Ease.get(1)).wait(5).to({x:108.4,y:220.8},10,cjs.Ease.get(1)).to({_off:true},82).wait(34));

	// Символ 6
	this.instance_17 = new lib.Символ6();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-36.5,8.8,0.842,0.842,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({rotation:-7.7,x:-45.3,y:-6.3},3,cjs.Ease.get(-1)).to({rotation:-18,x:-36.5,y:8.8},13,cjs.Ease.get(1)).wait(1).to({rotation:-7.7,x:-45.3,y:-6.3},3,cjs.Ease.get(-1)).to({rotation:-18,x:-36.5,y:8.8},13,cjs.Ease.get(1)).wait(1).to({rotation:-7.7,x:-45.3,y:-6.3},3,cjs.Ease.get(-1)).to({rotation:-18,x:-36.5,y:8.8},13,cjs.Ease.get(1)).wait(1).to({rotation:-7.7,x:-45.3,y:-6.3},3,cjs.Ease.get(-1)).to({rotation:-18,x:-36.5,y:8.8},13,cjs.Ease.get(1)).wait(1).to({rotation:-7.7,x:-45.3,y:-6.3},3,cjs.Ease.get(-1)).to({rotation:-18,x:-36.5,y:8.8},13,cjs.Ease.get(1)).wait(5).to({x:126.8,y:172.1},10,cjs.Ease.get(1)).to({_off:true},82).wait(34));

	// Символ 10
	this.instance_18 = new lib.Символ10();
	this.instance_18.parent = this;
	this.instance_18.setTransform(53.3,-51.2,0.842,0.842,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:0.1,regY:-0.1,rotation:-3,x:46.4,y:-45},3,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:-18,x:53.3,y:-51.2},13,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:-0.1,rotation:-3,x:46.4,y:-45},3,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:-18,x:53.3,y:-51.2},13,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:-0.1,rotation:-3,x:46.4,y:-45},3,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:-18,x:53.3,y:-51.2},13,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:-0.1,rotation:-3,x:46.4,y:-45},3,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:-18,x:53.3,y:-51.2},13,cjs.Ease.get(1)).wait(1).to({regX:0.1,regY:-0.1,rotation:-3,x:46.4,y:-45},3,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:-18,x:53.3,y:-51.2},13,cjs.Ease.get(1)).wait(5).to({x:216.6,y:112.1},10,cjs.Ease.get(1)).to({_off:true},82).wait(34));

	// Символ 2
	this.instance_19 = new lib.Символ2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-201.9,-20.1,1,1,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(215));

	// Слой 19
	this.instance_20 = new lib.Символ26();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-67.4,-77.3);
	this.instance_20.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(99).to({x:-78.1,y:-67.8,alpha:0},10,cjs.Ease.get(1)).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.7,-338.7,569.9,559.3);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.main1 = new lib.Символ11();
	this.main1.parent = this;
	this.main1.setTransform(70.9,-34.8,1.281,1.281,-49.5,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.main1).wait(1));

	// zb1_0w6.png
	this.instance = new lib.Символ38();
	this.instance.parent = this;
	this.instance.setTransform(-121.2,48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-526.7,-470.8,932.2,922.6);


// stage content:
(lib.zb600x300 = function(mode,startPosition,loop) {
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
		    _this.main.main1.gotoAndStop(200);
		}
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		  function fl_MouseOutHandler_2()
		{
		   _this.main.main1.gotoAndPlay(200);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// zb1_17.png
	this.main = new lib.Символ29();
	this.main.parent = this;
	this.main.setTransform(422.3,132.5);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195.5,-188.4,932.2,922.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
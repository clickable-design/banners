(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/mouse.png?1470140861708", id:"mouse"},
		{src:"images/snake_wraps_png_02.png?1470140861708", id:"snake_wraps_png_02"},
		{src:"images/snake_wraps_png_04.png?1470140861708", id:"snake_wraps_png_04"},
		{src:"images/snake_wraps_png_06.png?1470140861708", id:"snake_wraps_png_06"},
		{src:"images/snake_wraps_png_09.png?1470140861708", id:"snake_wraps_png_09"},
		{src:"images/snake_wraps_png_13.png?1470140861708", id:"snake_wraps_png_13"},
		{src:"images/snake_wraps_png_18.png?1470140861708", id:"snake_wraps_png_18"},
		{src:"images/snake_wraps_png_20.png?1470140861708", id:"snake_wraps_png_20"},
		{src:"images/snake_wraps_png_23.png?1470140861708", id:"snake_wraps_png_23"},
		{src:"images/stone.png?1470140861708", id:"stone"},
		{src:"images/the_amazon_rainforest_by_rendermojod5cykx8.jpg?1470140861708", id:"the_amazon_rainforest_by_rendermojod5cykx8"},
		{src:"images/V_knife_cs10.png?1470140861708", id:"V_knife_cs10"}
	]
};



// symbols:



(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.snake_wraps_png_02 = function() {
	this.initialize(img.snake_wraps_png_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,232);


(lib.snake_wraps_png_04 = function() {
	this.initialize(img.snake_wraps_png_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,108);


(lib.snake_wraps_png_06 = function() {
	this.initialize(img.snake_wraps_png_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,377,518);


(lib.snake_wraps_png_09 = function() {
	this.initialize(img.snake_wraps_png_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,140);


(lib.snake_wraps_png_13 = function() {
	this.initialize(img.snake_wraps_png_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,102);


(lib.snake_wraps_png_18 = function() {
	this.initialize(img.snake_wraps_png_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,412);


(lib.snake_wraps_png_20 = function() {
	this.initialize(img.snake_wraps_png_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,107);


(lib.snake_wraps_png_23 = function() {
	this.initialize(img.snake_wraps_png_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,93);


(lib.stone = function() {
	this.initialize(img.stone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,129);


(lib.the_amazon_rainforest_by_rendermojod5cykx8 = function() {
	this.initialize(img.the_amazon_rainforest_by_rendermojod5cykx8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,406);


(lib.V_knife_cs10 = function() {
	this.initialize(img.V_knife_cs10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,202);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmSBkQiChIAAhiQAAhuCghOQCghODhAAQDiAACgBOQChBOAABuQAABsihBOQigBOjiAAQjVAAibhFIjMDUg");
	this.shape.setTransform(56,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.1,67.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AMfBsQgHgHAAgKQAAgLAHgHQAHgHAKAAQAKAAAHAHQAHAHAAALQAAAKgHAHQgHAHgKAAQgKAAgHgHgAHYBvQgJgCgJgDQgIgEgHgFQgHgFgFgHQgGgGgEgIIgHgRQgEgNgCgdQAAgNAGgaIAHgRQAEgJAGgGQAFgHAHgEQAHgGAIgDQAJgEAJgCQAKgCAKABQALgBAKACQAJACAJAEQAIADAHAGQAHAEAFAHQAGAGAEAJQAFAHACAKQAGAaAAANQgCAdgEANQgCAJgFAIQgEAIgGAGQgFAHgHAFQgHAFgIAEQgJADgJACQgKACgLAAQgKAAgKgCgAHZg8QgIAFgFAJQgFAKgDAPQgCAOAAATQAAAVACAPQACAPAFAKQAFAKAIAEQAJAEALAAQAMAAAIgEQAIgEAFgKQAGgKACgPQACgPAAgVQAAgTgCgOQgDgPgFgKQgFgJgIgFQgIgFgMAAQgLAAgIAFgAn4BvQgJgCgJgDQgIgEgHgFQgHgFgFgHQgGgGgEgIIgHgRQgEgNgCgdQAAgNAGgaQADgKAEgHQAEgJAGgGQAFgHAHgEQAHgGAIgDQAJgEAJgCQAKgCAKABQALgBAKACQAJACAJAEQAIADAHAGQAHAEAFAHQAGAGAEAJQAFAHACAKQAGAaAAANQgCAdgEANQgCAJgFAIQgEAIgGAGQgFAHgHAFQgHAFgIAEQgJADgJACQgKACgLAAQgKAAgKgCgAn3g8QgIAFgFAJQgFAKgDAPQgCAOAAATQAAAVACAPQACAPAFAKQAFAKAIAEQAJAEALAAQAMAAAIgEQAIgEAFgKQAGgKACgPQACgPAAgVQAAgTgCgOQgDgPgFgKQgFgJgIgFQgIgFgMAAQgLAAgIAFgAK8BuIAAhMIgWAAIghBMIgqAAIAohRQgIgDgGgFQgHgEgFgHQgFgHgCgGQgDgJAAgKQAAgPAFgNQAFgKAIgJQAJgHAMgEQAMgEANAAIBHAAIAADCgAKXg9QgFADgDAFQgDAEgCAIQgCAHAAAKQAAALACAHQACAGADAEQADAEAFADQAEACAGAAIAbAAIAAhMIgbAAQgGAAgEACgAD2BuIAAjCIA7AAQASAAANAFQANAEAJAHQAIAHAEAKQAEAJAAAJQAAAIgCAHQgCAHgFAFQgHAHgNAHQAIACAHAEQAHAFAFAGQAFAFADAIQADAHAAAJQAAAMgFAKQgFALgJAHQgKAHgOAFQgPAEgSAAgAEfBaIATAAQAIAAAGgCQAHgCAEgFQAFgFACgHQADgIAAgJQAAgJgCgGQgCgHgEgDQgHgIgMABIgbAAgAEfABIAZAAQAIAAAGgFQAEgEACgGQACgHAAgKQAAgIgDgHQgCgGgEgFQgEgEgFgBQgGgCgGAAIgRAAgAB9BuIAAisIg1AAIAAgWICTAAIAAAWIg0AAIAACsgAg3BuIgRg3IhEAAIgRA3IgaAAIBBjCIAuAAIA9DCgAhOAkIgahZIgBAAIgdBZIA4AAgAj8BuIAAhaIhEAAIAABaIgpAAIAAjCIApAAIAABUIBEAAIAAhUIApAAIAADCgArTBuIABiSIAAAAIhLCLIgDAHIgnAAIAAjCIAqAAIAACAIgCAUIAAAAIBPiUIAmAAIAADCgAMmAoIgNiHIAAgTIAuAAIAAATIgNCHg");
	this.shape.setTransform(84,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AMfBsQgHgHAAgLQAAgKAHgIQAHgGAKAAQAKAAAHAGQAHAIAAAKQAAALgHAHQgHAGgKABQgKgBgHgGgAHYBvQgJgCgJgDQgIgEgHgFQgHgFgFgGQgGgHgEgIIgHgRQgEgMgCgeQAAgNAGgaQADgKAEgHQAEgJAGgGQAFgHAHgFQAHgFAIgEQAJgDAJgCQAKgCAKAAQALAAAKACQAJACAJADQAIAEAHAFQAHAFAFAHQAGAGAEAJQAFAHACAKQAGAaAAANQgCAegEAMQgCAJgFAIQgEAIgGAHQgFAGgHAFQgHAFgIAEQgJADgJACQgKACgLAAQgKAAgKgCgAHZg8QgIAFgFAJQgFAKgDAPQgCAOAAATQAAAVACAPQACAPAFAJQAFALAIAEQAJAFALgBQAMABAIgFQAIgEAFgLQAGgJACgPQACgPAAgVQAAgTgCgOQgDgPgFgKQgFgJgIgFQgIgFgMAAQgLAAgIAFgAn4BvQgJgCgJgDQgIgEgHgFQgHgFgFgGQgGgHgEgIIgHgRQgEgMgCgeQAAgNAGgaIAHgRQAEgJAGgGQAFgHAHgFQAHgFAIgEQAJgDAJgCQAKgCAKAAQALAAAKACQAJACAJADQAIAEAHAFQAHAFAFAHQAGAGAEAJQAFAHACAKQAGAaAAANQgCAegEAMQgCAJgFAIQgEAIgGAHQgFAGgHAFQgHAFgIAEQgJADgJACQgKACgLAAQgKAAgKgCgAn3g8QgIAFgFAJQgFAKgDAPQgCAOAAATQAAAVACAPQACAPAFAJQAFALAIAEQAJAFALgBQAMABAIgFQAIgEAFgLQAGgJACgPQACgPAAgVQAAgTgCgOQgDgPgFgKQgFgJgIgFQgIgFgMAAQgLAAgIAFgAK8BtIAAhLIgWAAIghBLIgqAAIAohQQgIgDgGgFQgHgFgFgGQgFgGgCgHQgDgJAAgKQAAgPAFgNQAFgKAIgJQAJgHAMgEQAMgDANAAIBHAAIAADAgAKXg9QgFADgDAFQgDAEgCAIQgCAHAAAKQAAAKACAIQACAGADAEQADAEAFADQAEADAGAAIAbAAIAAhNIgbAAQgGgBgEADgAD2BtIAAjAIA7AAQASgBANAFQANADAJAIQAIAHAEAJQAEAKAAAJQAAAIgCAHQgCAGgFAGQgHAHgNAHQAIADAHAEQAHAEAFAGQAFAGADAGQADAIAAAIQAAANgFAKQgFAKgJAIQgKAHgOAFQgPADgSAAgAEfBaIATAAQAIAAAGgCQAHgDAEgEQAFgFACgHQADgHAAgKQAAgJgCgHQgCgFgEgFQgHgHgMAAIgbAAgAEfABIAZAAQAIAAAGgFQAEgEACgGQACgHAAgKQAAgIgDgHQgCgGgEgEQgEgEgFgCQgGgCgGAAIgRAAgAB9BtIAAirIg1AAIAAgVICTAAIAAAVIg0AAIAACrgAg3BtIgRg2IhEAAIgRA2IgaAAIBBjAIAuAAIA9DAgAhOAkIgahZIgBAAIgdBZIA4AAgAj8BtIAAhZIhEAAIAABZIgpAAIAAjAIApAAIAABTIBEAAIAAhTIApAAIAADAgArTBtIABiRIAAAAIhLCLIgDAGIgnAAIAAjAIAqAAIAAB/IgCATIAAAAIBPiSIAmAAIAADAgAMmApIgNiIIAAgTIAuAAIAAATIgNCIg");
	this.shape_1.setTransform(85.4,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.5,23.7);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgyxAZKMAAAgyTMBliAAAMAAAAyTg");
	this.shape.setTransform(325,161);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650,322);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzQHzIAAvlMAmhAAAIkjPlg");
	this.shape.setTransform(123.4,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246.7,99.9);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(119.7,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("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");
	this.shape_1.setTransform(123.2,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,2,225.9,23.2);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("AABhpIAAAAQAsAAAgAgQAfAfAAAqQAAABAAABQgBArgeAeQggAfgsAAIAAAAQgqAAgfgfQgegegBgrQAAgBAAgBQAAgqAfgfQAfggAqAAIAABUABsACIAeAAAABiPIAAAmAiJACIAiAAIBQAAAABBqIAAAmAABAbIAABPAAaACIBSAA");
	this.shape.setTransform(13.8,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAAJIgEgBIgDgDIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIACgCIACgCIAAgBIABAAIADgBIAEABIABAAIAAABIACABIABABIAAACIABABIAAAAIABABIAAABIgBABIAAAAIAAABIgBABIAAABIgDADIgCABIgDAAIAAAAg");
	this.shape_1.setTransform(14,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.6,30.9);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.V_knife_cs10();
	this.instance.setTransform(0,0,0.678,0.678);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.5,137);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663733").s().p("AA/ALQgWgegngCQgmgDgZAYQgYAZAGgSQAGgRAYgLQAXgLAdADQAgAEAUAPQAWAOAEATQABAHgCAAQgDAAgOgTg");
	this.shape.setTransform(8,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663733").s().p("AA5AdQgXgKgigDQgjgDgXAGQgWAEAEgSQAEgRAXgLQAXgLAeADQAgAEAUAPQAVAOABATQABAMgJAAQgFAAgIgEg");
	this.shape_1.setTransform(7.9,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663733").s().p("AgEAtQgfgEgUgOQgVgQACgRQACgTAXgLQAXgLAeADQAgAEAUAPQAVAQgCARQgCATgYAKQgRAJgXAAIgNgBg");
	this.shape_2.setTransform(7.9,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663733").s().p("AA2AiQgXgDgggDIg4gEQgWgDADgSQAEgRAXgLQAXgLAeADQAgAEAUAPQAVAOAAATQAAAQgQAAIgHgBg");
	this.shape_3.setTransform(7.9,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663733").s().p("AA6AXQgWgRgkgDQgkgDgXAMQgXAMAFgTQAEgQAYgLQAXgLAdADQAgAEAUAPQAWAOACATQABAKgGAAQgFAAgLgJg");
	this.shape_4.setTransform(8,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4).to({_off:false},0).wait(9).to({_off:true},1).wait(4).to({_off:false},0).wait(1));

	// Слой 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663733").s().p("ABDAPQgQgYgmgJQgkgJgeAeQgeAgAFgSQAEgRAXgNQAVgOAegBQAgABAWANQAWAOAEATQABAKgCAAQgDAAgJgOg");
	this.shape_5.setTransform(41.3,5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663733").s().p("AA8AeQgTgHgjgEQgggEgaAKQgbAJADgTQACgRAWgNQAVgOAfgBQAgABAVANQAXAOACASQABAPgLAAIgIgBg");
	this.shape_6.setTransform(41.3,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663733").s().p("Ag0AhQgWgNAAgUQgBgRAXgNQAVgOAfgBQAfABAVANQAYANgBASQAAASgWAOQgVANggAAQgeAAgWgMg");
	this.shape_7.setTransform(41.4,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663733").s().p("AAEAfQgfgDgZACQgZACACgTQABgRAWgOQAVgNAfgBQAgAAAVANQAXAOABATQABASgUABQgUAAgigCg");
	this.shape_8.setTransform(41.3,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663733").s().p("AA+AZQgSgNgkgGQghgGgcASQgbARADgTQADgRAWgNQAVgOAfgBQAgABAVANQAXAOACASQACANgHAAQgEAAgHgFg");
	this.shape_9.setTransform(41.3,5.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663733").s().p("ABDAPQgQgYgmgJQgkgJgeAeQgeAgAFgSQAEgRAXgNQAVgOAegBQAgABAWANQAWAOAEATQABAKgDAAQgDAAgIgOg");
	this.shape_10.setTransform(41.3,5.8);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(6).to({_off:false},0).wait(7).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.4,49.6,8.4);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.the_amazon_rainforest_by_rendermojod5cykx8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,650,406);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snake_wraps_png_06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,377,518);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snake_wraps_png_23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333,93);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snake_wraps_png_18();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329,412);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snake_wraps_png_13();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,102);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snake_wraps_png_20();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,107);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snake_wraps_png_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,232);


(lib.Символ21_1 = function(mode,startPosition,loop) {
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


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Cимвол13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.snake_wraps_png_04();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,108);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();
	this.instance.setTransform(56,33.8,1,1,0,0,0,56,33.8);
	this.instance.filters = [new cjs.BlurFilter(6, 6, 1)];
	this.instance.cache(-2,-2,116,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,122,77);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAHCYIABgNQAEADAEAAQAEAAACgCQADgCACgDQADgCACgFIAEgLIgghOIAYAAIATA2IAPg2IANAAIggBdQgEAHgDAFQgEAEgEADQgEACgGABQgIAAgDgCgAGAByQgEgEAAgFQAAgFAEgEQADgDAFgBQAFABAEADQADAEAAAFQAAAFgDAEQgEADgFAAQgFAAgDgDgAFVByQgCgCgBgFIgBAAQgEAJgQAAIgJgBIgHgEIgFgGQgCgEAAgEIABgHIADgGQAEgFAHgDQAIgEATgCIAAgFIgBgIIgCgFIgEgEIgGAAQgHAAgLAGIgCgKQAMgGAMAAIALABQAGACAEADQADACACAGQADAEAAAIIAAAiIABAHQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIAFgBIAAAIQgKADgGAAQgFAAgCgCgAFBBSQgDACgBAEQgCACAAAEQAAAGADADQACADAEAAQAIAAAEgIIAAgUQgMACgDACgAC3ByQgHgDgFgEQgEgGgDgHQgCgHAAgJQAAgJADgIQACgHAFgGQAEgEAHgEQAHgCAIAAQALAAALAGIgCAKQgKgGgHAAIgIABQgDACgCADQgCADgBAGIgBAOIABAPIADAIQACADADACIAHABQAMAAAFgKIAHAEQgGAQgUAAQgJAAgGgCgAhEB0IAAgNIACABQAFAAADgFQAEgEACgIIADgVIAAgbIAtAAIAABMIgUAAIAAhAIgNAAIgCAZQgCAMgDAKQgFAKgEADIgFAEIgGABgAhgByQgCgCgBgFIAAAAQgFAJgPAAIgKgBIgHgEIgFgGQgBgEAAgEIABgHIADgGQAEgFAGgDQAJgEASgCIAAgFIgBgIIgCgFIgEgEIgFAAQgHAAgLAGIgCgKQALgGAMAAIAMABQAFACAEADQAEACACAGQACAEAAAIIAAAiIABAHQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAIAFgBIABAIQgLADgGAAQgEAAgDgCgAh0BSQgDACgBAEQgBACAAAEQAAAGACADQACADAFAAQAIAAADgIIAAgUQgLACgEACgAk0ByQgGgDgFgFQgEgFgDgIQgCgGAAgKQAAgKACgGQADgIAEgFQAFgFAGgDQAHgCAIAAQAJAAAGACQAHADAEAFQAFAFACAIQACAGAAAKQAAAJgCAHQgDAIgEAFQgFAFgGADQgHACgIAAQgIAAgHgCgAkrAxQgDACgBADQgCAEgBAGIAAANIAAANQABAGACADQABAEADACQACABAEAAQAEAAACgBQADgCABgEQACgDABgGIABgNIgBgNQgBgGgCgEQgBgDgDgCQgCgBgEAAQgEAAgCABgAD3BzIAAhAIgVAAIAAgMIA/AAIAAAMIgWAAIAABAgACBBzIAAg1IgdA1IgQAAIAAhMIAUAAIAAAyIAcgyIARAAIAABMgAipBzIgQgkIgFAAIAAAkIgUAAIAAgkIgEgBIgRAlIgVAAIAWgrIgSghIANAAIAPAdIAKABIAAgeIAUAAIAAAeIALgBIAQgdIANAAIgTAhIAVArgAlpBzIAAhAIgWAAIAABAIgUAAIAAhMIA+AAIAABMgAGDBQIgGhFIAAgJIAXAAIAAAJIgHBFgABfALIAPgBIAAACIAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAQAFAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAAgCIAPABQABATgZAAQgZAAACgTgAErgpQgEgDAAgGQAAgFAEgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAGgEADQgDADgFABQgFgBgDgDgAD5gpQgEgDAAgGQAAgFAEgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAGgDADQgEADgFABQgFgBgDgDgADIgpQgEgDAAgGQAAgFAEgEQADgDAFAAQAFAAADADQAEAEAAAFQAAAGgEADQgDADgFABQgFgBgDgDgAgIgpQgGgDgFgFQgEgEgDgIQgCgHAAgKQAAgJACgHQADgIAEgEQAFgFAGgDQAHgDAGABQAJgBAGADQAHADAEAFQAFAEACAIQACAHAAAJQAAAKgCAHQgDAIgEAEQgFAFgGADQgHACgIAAQgGAAgHgCgAAAhpQgCACgBADQgCADgBAGIAAANIAAAOQABAGACADQABADACACQABABAEAAQAEAAACgBQADgCABgDQACgDABgGIABgOIgBgNQgBgGgCgDQgBgDgDgCQgCgCgEABQgEgBgBACgAi8gpQgGgDgFgFQgEgEgDgIQgCgHAAgKQAAgJACgHQADgIAEgEQAFgFAGgDQAHgDAIABQAJgBAGADQAHADAEAFQAFAEACAIQACAHAAAJQAAAKgCAHQgDAIgEAEQgFAFgGADQgHACgIAAQgIAAgHgCgAizhpQgDACgBADQgCADgBAGIAAANIAAAOQABAGACADQABADADACQACABAEAAQAEAAACgBQADgCABgDQACgDABgGIABgOIgBgNQgBgGgCgDQgBgDgDgCQgCgCgEABQgEgBgCACgACagoIAAg1IgeA1IgPAAIAAhLIAUAAIAAAxIAbgxIASAAIAABLgAA1goIAAhLIAtAAIAAALIgZAAIAABAgAg7goIgBg5IgBAAIgTA5IgNAAIgTg5IgCA5IgLAAIAEhLIAYAAIAOA2IARg2IAYAAIACBLgAj1goIAAhWIgfAAIAABWIgVAAIAAhiIBJAAIAABigAEuhLIgHhEIAAgJIAXAAIAAAJIgGBEgAD8hLIgGhEIAAgJIAXAAIAAAJIgHBEgADLhLIgHhEIAAgJIAXAAIAAAJIgGBEg");
	this.shape.setTransform(58.2,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmSBkQiChIAAhiQAAhuCghOQCghODhAAQDiAACgBOQChBOAABuQAABsihBOQigBOjiAAQjVAAibhFIjMDUg");
	this.shape_1.setTransform(56,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(57,37.4,1,1,0,0,0,56,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,122,78.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(123.4,50,1,1,0,0,0,123.4,50);
	this.instance.filters = [new cjs.BlurFilter(9, 9, 1)];
	this.instance.cache(-2,-2,251,104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,260,113);


(lib.Символ20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#333333"],[0,1],-123.3,0,140.4,0).s().p("AzQHzIAAvlMAmhAAAIkjPlg");
	this.shape_1.setTransform(123.4,50);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(128.2,54.5,1,1,0,0,0,123.4,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.5,261,114);


(lib.Символ19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.setTransform(137.3,31.3,1,1,0,0,0,113,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09,x:136.1,y:30.1},19).to({scaleX:1,scaleY:1,x:137.3,y:31.3},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20_1();
	this.instance_1.setTransform(154.4,8,1.203,1.181,0,0,0,123.4,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.9,-51,311.8,131.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(13.8,14.5,1,1,0,0,0,13.8,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:60},4).to({rotation:90},5).to({rotation:60},5).to({rotation:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,28.6,29.9);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(136.5,129.3,1,1,0,0,0,136.5,129.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8,y:142.9},20).to({rotation:0,y:139.7},21).to({y:129.3},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.5,137);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(325,203,1,1,0,0,0,325,203);
	this.instance.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance.cache(-2,-2,654,410);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,658,414);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(325,245,1,1,0,0,0,325,161);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.25},19).to({alpha:0},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(325,203,1,1,0,0,0,325,203);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.05,scaleY:1.05,x:324.1,y:204},19).to({scaleX:1,scaleY:1,x:325,y:203},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,658,414);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(88.4,67.5,1,1,0,0,0,24.4,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.snake_wraps_png_09();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,140);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// snake_wraps_png_09.png
	this.instance = new lib.Символ2();
	this.instance.setTransform(185.6,57.4,1,1,0,0,0,70.5,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.2,x:184.3,y:57.5},12).to({rotation:7.2,x:183,y:57.4},12).to({rotation:-4.2,x:184.3,y:57.5},12).to({rotation:0,x:185.6,y:57.4},13).wait(1));

	// snake_wraps_png_04.png
	this.instance_1 = new lib.Cимвол13();
	this.instance_1.setTransform(24.2,137.1,1,1,0,0,0,126.4,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:30.2,x:24.1,y:139.6},12).to({regY:27.5,scaleX:1,scaleY:1,rotation:-30,x:30.7,y:128.3},12).to({regY:27.4,scaleX:1,scaleY:1,rotation:30.2,x:24.1,y:139.6},12).to({scaleX:1,scaleY:1,rotation:0,x:24.2,y:137.1},13).wait(1));

	// snake_wraps_png_02.png
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(200.7,137.2,1,1,0,0,0,176.5,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1,skewX:-4},24).to({scaleY:1,skewX:0},25).wait(1));

	// snake_wraps_png_20.png
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(326,462.3,1,1,0,0,0,70.5,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:53.6,rotation:15,y:462.4},24).to({regY:53.5,rotation:0,y:462.3},25).wait(1));

	// snake_wraps_png_13.png
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(357.8,122,1,1,0,0,0,25.6,76);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:9.2,x:354.4,y:122.7},12).to({regX:25.5,rotation:-12,x:357.8,y:116.6},12).to({regX:25.6,rotation:9.2,x:354.4,y:122.7},12).to({rotation:0,x:357.8,y:122},13).wait(1));

	// snake_wraps_png_18.png
	this.instance_5 = new lib.Символ6();
	this.instance_5.setTransform(244,374.7,1,1,0,0,0,141.8,206);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.03,skewX:4.7,skewY:-9.5,y:374.8},24).to({scaleX:1,skewX:0,skewY:0,y:374.7},25).wait(1));

	// snake_wraps_png_23.png
	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(159.9,479.9,1,1,0,0,0,302.8,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-11.7,x:157.2,y:470.5},24).to({rotation:0,x:159.9,y:479.9},25).wait(1));

	// snake_wraps_png_06.png
	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(188.5,259,1,1,0,0,0,188.5,259);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-82.6,617.1,663.3);


(lib.Символ18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ21_1();
	this.instance_1.setTransform(92.1,330.8,1,1,0,0,0,23,29);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-2,-2,50,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance_1 = new lib.Символ18_1();
	this.instance_1.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mouse
	this.instance_2 = new lib.Символ17_1();
	this.instance_2.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(56,33.8,1,1,0,0,0,56,33.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,122,78.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(148.5,86.3,1,1,0,0,0,84,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18,scaleY:1.18,y:84.2},14).to({scaleX:1,scaleY:1,y:86.3},15).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ20_1();
	this.instance_1.setTransform(148.5,60.1,1.203,1.181,0,0,0,123.4,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,311.8,132.3);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Слой 2
	this.instance = new lib.Символ26();
	this.instance.setTransform(-275.2,60.7,1,1,0,0,0,151.3,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:130.8},19).to({x:-275.2},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ19_1();
	this.instance_1.setTransform(117.5,101.1,1,1,0,0,0,123.4,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-202.5},19).to({x:117.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-426.5,0,738.3,132.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(144.7,190.3,0.44,0.44,0,0,0,185.7,349.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:185.5,regY:349.6,rotation:4.2},19,cjs.Ease.get(-1)).to({regX:185.7,regY:349.5,rotation:0},10).to({regX:185.6,regY:349.4,rotation:-5.2,x:144.8},20,cjs.Ease.get(1)).to({regX:185.7,regY:349.5,rotation:0,x:144.7},15).wait(1));

	// Слой 2
	this.instance_1 = new lib.stone();
	this.instance_1.setTransform(33.7,161.6,0.925,0.925);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,271.8,292.1);


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


// stage content:



(lib.amazone_snake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.canvas.style.cursor = "none";
		this.kursor.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.kursor.x = stage.mouseX;
		}
		
		
		stage.canvas.style.cursor = "none";
		this.kursor2.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.kursor2.x = stage.mouseX;
			this.kursor2.y = stage.mouseY;
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
		    this.fon.gotoAndPlay(1);
		    this.text.gotoAndPlay(1);
			this.dialog.gotoAndPlay(1);
		    
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.fon.gotoAndPlay(20);
		    this.text.gotoAndPlay(20);
			this.dialog.gotoAndPlay(20);
		    
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new lib.Символ25();
	this.text.setTransform(143.1,10.6,1,1,0,0,0,151.3,61.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// kursor2
	this.kursor2 = new lib.Символ17();
	this.kursor2.setTransform(354.8,102.7,2.076,2.076,0,0,0,13.8,14.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor2).wait(1));

	// kursor
	this.kursor = new lib.Символ15();
	this.kursor.setTransform(489.8,236.6,1,1,0,0,0,93.2,68.5);

	this.timeline.addTween(cjs.Tween.get(this.kursor).wait(1));

	// dialog
	this.dialog = new lib.Символ31();
	this.dialog.setTransform(399.1,46.7,1,1,0,0,0,56.5,35.6);

	this.timeline.addTween(cjs.Tween.get(this.dialog).wait(1));

	// telka
	this.instance = new lib.Символ14();
	this.instance.setTransform(292.8,186.6,1,1,0,0,0,135.8,146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mouse
	this.mouse = new lib.Символ42();
	this.mouse.setTransform(39.9,181.8,1,1,0,0,0,31.3,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// fon
	this.fon = new lib.Символ10();
	this.fon.setTransform(320,115,1,1,0,0,0,325,203);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,62.5,1085.7,422.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 30,
	color: "#999999",
	manifest: []
};



// symbols:



(lib.car = function() {
	this.spriteSheet = ss["wolks_640x305_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Volkswagen_Logo = function() {
	this.spriteSheet = ss["wolks_640x305_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wolks_fon1 = function() {
	this.spriteSheet = ss["wolks_640x305_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMCCIAAgbIiJAAIAAAbIguAAIAAhNIAJAAQAMgBAFgHQAFgFACgRIARiUICeAAIAACyIAXAAIAABNgAknAZQgEAXgHAGIBEAAIAAh/IgvAAgAMxBkQgJgJAAgNQAAgGADgHQACgFAEgEQAJgIAOAAQAOAAAJAIQAFAEACAFQADAHAAAGQAAAHgDAFQgCAGgFAEQgJAIgOAAQgOAAgJgIgAolBqQgLgCgKgEQgLgEgJgGQgKgFgIgHQgIgIgHgJQgGgKgFgKQgFgMgCgMQgDgOAAgMQAAgPADgNQACgNAFgMQAFgLAHgJQAHgJAIgIQAIgIAKgFQAJgGALgEQAKgEALgBIAWgCIAWACQALABALAEQAKAEAJAGQAKAFAIAIQAIAIAHAJQAHAJAFALQAEAMADANQACANAAAPQAAALgCAMQgCALgEALQgEALgHAKQgGAJgHAIQgIAIgKAGQgJAHgLADQgLAFgMACQgMACgMABgAojhEQgLAEgIAIQgIAHgFAMQgFAMAAAQQAAAMAFANQAFALAIAIQAIAIAKADQALAFALAAQALAAAKgFQAKgDAIgIQAJgIAFgLQAEgNAAgMQAAgPgEgNQgFgLgIgIQgIgIgLgEQgKgEgLAAQgLAAgKAEgAI0BoIAAjlIA8AAIAABwIB3hwIATAAIAADkIg8AAIAAh1Ih5B2gAHSBnIgyhYQgHABgWAAIAABXIg8AAIAAjkIA8AAIAABaIASAAQAKgBAGgCQAHgEAFgLQADgIAFgYQADgLAGgIQAGgJAJgGQALgGAOgBQAPgCATAEIAAAoQgLAAgHADQgHAEgDAJQgGAXgGANQgHAPgJAKIBCBlIAAAJgAAdBnIgOgdIhTAAIgOAdIg+AAIAAgIIBpjdIAcAAIBmDdIAAAIgAgCAZIgYg2IgXA2IAvAAgArlBnIAAiuIhHAAIAACuIg8AAIAAjkIC/AAIAADkgABwBmIAAjjIBlAAQALAAAJACQAJACAIAEQAPAHALAMQAKAMAFAQQAFAPAAARQAAAPgGAPQgFAOgKALQgLAMgPAHQgWAHgOABIgpAAIAAA6gACrgHIAqAAQAMABAHgLQAGgKAAgNQAAgNgGgJQgHgLgMABIgqAAgAMsAnIgFikIBBAAIgDCkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.3,-13,174.6,26.1);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjEB1QgMgCgJgEQgLgEgKgFQgJgGgIgHQgJgIgGgJQgGgJgFgLQgFgMgCgMQgDgOAAgOQAAgNADgNQACgNAFgLQAFgMAHgJQAGgJAJgIQAIgHAKgGQAJgGALgDQAKgEALgCIAWgCIAWACQALACAKAEQAKADAKAGQAKAGAIAHQAIAIAHAJQAGAJAGAMQAEALACANQADANAAANQAAANgCAMQgCAMgEALQgFALgGAJQgGAJgIAIQgIAIgJAGQgKAHgKAEQgLAEgMACQgMADgMAAgAjDg5QgKAEgIAIQgIAIgFALQgFAMAAAOQAAAOAFANQAFALAIAIQAHAIALAEQAKAEAMAAQAKAAALgEQAKgEAIgIQAJgIAEgLQAFgNAAgOQAAgNgFgNQgEgLgJgIQgIgIgKgEQgKgEgLAAQgLAAgLAEgAD/B2QgZgDgQgGIAIgrQASAHAJgDQAGgBAFgFQAEgFAFgJIAHgQIhPiMIAAgHIBCAAIArBYIACAAIAnhYIBAAAIAAAGIhTCnQgJAVgKAMQgKAOgNAGQgHADgHABIgMABIgFAAgAgnBxIABgrIAQAAQAGgBADgDQAGgGACgTIAOiaICiAAIAADjIg8AAIAAiuIgxAAIgJBoQgDAZgFAPQgGAPgLAIQgKAHgSABIgFAAQgOAAgUgCgAKHBzIAAjkIA8AAIAABwIB4hxIASAAIAADkIg8AAIAAh0Ih4B1gAtNBzIAAjkIA9AAIAABwIB3hxIATAAIAADkIg8AAIAAh0Ih5B1gAIbByIAAhQIgeACQgOAAgLgCQgMgDgKgEQgJgFgHgGQgHgHgGgJQgEgIgEgMQgDgLgCgPIgBhDIA7AAIAAAjQAAAVACALQADANAFAGQAGAHAMACQAMABAVgCIAAheIA7AAIAADjgAmEByIAAitIhHAAIAACtIg8AAIAAjjIC/AAIAADjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.6,-11.9,169.2,23.9);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am2BwQgPgGgMgKQgMgKgHgOIgEgQIgDgSIAAgeIA4AAIAAAdQAAANAJAHQAJAHANAAQANAAAIgHQAIgHAAgNIAAhjIgiAAIAAg0IBeAAIAACYQAAAJgCAJIgGAQQgGAOgMAKQgNAKgQAGQgQAFgSAAQgSAAgQgFgAGuByIgOgdIhVAAIgOAdIg/AAIAAgIIBqjeIAbAAIBpDeIAAAIgAGNAjIgYg1IgXA1IAvAAgACKByIAAivIg5AAIAAg1ICrAAIAAA1Ig4AAIAACvgAgrByIAAivIg4AAIAAg1ICpAAIAAA1Ig4AAIAACvgAkMByIAAjkICPAAIAAA0IhTAAIAAAhIBNAAIAAAzIhNAAIAAAlIBWAAIAAA3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-11.7,98.4,23.5);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai8BzQgRgFgNgKQgOgJgHgOQgEgHgCgIQgCgJAAgJIA5AAQAAAFAEAFQACAEAGADQAKAGAPAAQANAAALgFQALgHAAgKQAAgHgEgFQgEgFgHgCQgIgDgTgCQgRgBgOgDQgQgEgLgIQgNgHgGgMQgEgFgBgIQgCgHAAgKQAAgJACgIQABgIAEgIQAHgNANgKQAMgJAQgFQAQgFASABQARgBAPAFQARAFAMAJQANAKAHANQADAIACAIQACAIAAAJIg4AAQAAgKgKgHQgIgFgNAAQgNAAgIAEQgFADgCAEQgDAEAAAGQAAALAJAFQAHADATACQAVACAOAEQARADAMAIQANAHAHALQADAIACAIQACAIAAALQAAAIgCAJQgCAHgEAIQgHANgOAJQgNAJgRAGQgRAEgSAAQgSAAgRgEgAs2B0QgLgCgKgDQgLgEgJgGQgKgFgIgHQgIgIgHgJQgGgJgFgLQgFgMgCgNQgDgNAAgOQAAgNADgNQACgNAFgMQAFgLAHgJQAHgJAIgIQAIgHAKgGQAJgGALgDQAKgEALgCIAWgCIAWACQALACALAEQAKADAJAGQAKAGAIAHQAIAIAHAJQAHAJAFALQAEAMADANQACANAAANQAAANgCAMQgCAMgEAKQgEALgHAKQgGAJgHAIQgIAIgKAGQgJAGgLAEQgLAFgMACQgMADgMgBgAs0g5QgLAEgIAIQgIAIgFALQgFAMAAAOQAAAOAFANQAFALAIAIQAIAHAKAEQALAFALAAQALAAAKgFQAKgEAIgHQAJgIAFgLQAEgNAAgOQAAgOgEgMQgFgLgIgIQgIgIgLgEQgKgEgLAAQgLAAgKAEgAJEBtQgLgDgJgGQgKgFgIgHQgJgIgGgJQgHgJgFgLQgFgMgDgMQgCgNAAgOQAAgNACgNQADgMAFgMQAFgLAHgKQAGgJAJgHQAIgHAKgFQAJgHALgDIAVgGIAWgBQARAAARAEQARAFAOAJQAPAKAKAPQAMAWADAOIg6AAQgIgOgLgGQgLgFgRAAQgOAAgLAEQgKAFgIAJQgHAJgEALQgEAMAAAMQAAANAEANQAEALAIAIQAHAJALAEQALAEANAAQASAAALgGQAGgDAFgFQAFgGAEgHIgxAAIAAgxIBsAAQACARgBAOQgBASgGAQQgGARgLANQgKAMgOAIQgOAIgQAFQgPADgQAAQgegDgNgFgACTB0IgohpIgBAAIgmBpIghAAIhQjdIAAgJIA9AAIAnCAIABAAIAmh7IAZAAIAoB7IABAAIAQhBIAWg/IA+AAIAAAJIhSDdgAwcB0IhkjdIAAgJIBAAAIAcBFIAUA5IABAAIASg5IAdhFIBAAAIAAAJIhjDdgARvBzIh4h1IAAB0Ig8AAIAAjlIASAAIB4ByIAAhxIA8AAIAADlgAMAByIAAjkICPAAIAAA0IhTAAIAAAiIBNAAIAAAyIhNAAIAAAmIBWAAIAAA2gAGyByIgOgcIhVAAIgOAcIg+AAIAAgIIBpjeIAcAAIBoDeIAAAIgAGRAjIgYg1IgXA1IAvAAgAlNByIgyhYQgHAAgWABIAABXIg8AAIAAjkIA8AAIAABaIASAAQAKAAAGgDQAHgEAFgLQADgIAFgYQADgLAGgIQAGgJAJgGQALgGAOgCQAPgBATAEIAAAoQgLAAgHACQgHAEgDALQgGAVgGAOQgHAQgJAHIBCBnIAAAJgAqFByIAAjkIA8AAIAACuIBTAAIAAA2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-12,230.8,24);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB6DeIAAglIi5AAIAAAlIg+AAIAAhqIALAAQARgBAIgIQAFgJADgXIAXjKIDXAAIAADzIAfAAIAABqgAAABPQgFAfgKAHIBaAAIAAitIg/AAgAsaC6IgdgIQgOgFgNgIQgNgHgLgKQgMgLgJgMQgKgMgFgPQgIgPgDgSQgDgRgBgUQABgTADgRQADgQAIgQQAFgPAKgNQAJgMAMgKQALgKANgHQANgIAOgFQATgGAogEQAZAAAXAHQAaAHATAOQAaAWAJAPQAIAMAEANQAFAOACAPIhOAAQgFgMgHgJQgGgIgIgFQgJgGgKgCQgLgDgNAAQgSAAgPAGQgOAGgKALQgKAMgGAQQgFAOgBATQABARAFAQQAGAPAKAMQAKAMAOAHQAPAGASAAQANAAALgDQALgDAKgGQAJgGAGgJQAGgKAEgNIBOAAQgCARgFAPQgEAOgIALQgHANgIAJIgUARQgTAPgaAHQgXAHgaAAgANUC6IAAk5IBSAAIAACYICkiZIAaAAIAAE5IhSAAIAAihIimCigALiC5IgSgnIh1AAIgSAnIhWAAIAAgLICQkwIAmAAICOEwIAAALgAJ1BOIBBAAIgghNgAoEC5IAAjwIhNAAIAAhIIDpAAIAABIIhNAAIAADwgAyNC5IAAk4IDEAAIAABIIhxAAIAAAtIBoAAIAABFIhoAAIAAAzIB2AAIAABLgA1TC5IAAjwIhNAAIAAhIIDpAAIAABIIhNAAIAADwgAD0C5IAAk4ICLAAQAOAAAMACQAMADALAFQAUAJAPASQAPAQAGAVQAIAVgBAXQAAATgHAUQgIAVgNARQgPARgUAIQgfALgSAAIg5AAIAABRgAFEAgIA7AAQAPAAAJgOQAJgNAAgQQABgTgJgMQgKgOgPAAIg7AAgASmC3IAAk3ICLAAQAVAAATAHQASAGAOAOQANAMAHASQAHASAAAVQAAAPgHAPQgHANgMAJQAKAFAHAIQAHAGAFAJQAKASAAAWQAAAUgHARQgGASgNAMQgNAOgRAHQgUAHgYAAgAT4BwIA/AAQAMAAAGgHQAGgHABgKQAAgMgGgHQgHgJgMAAIg/AAgAT4gFIAzAAQALABAHgIQAGgHABgKQAAgLgHgIQgGgJgMAAIgzAAgAlGBFIAAhCICiAAIAABCgAPKiUQgOgEgJgKQgKgJgEgOQgGgOgBgRIAtgFQAAAMAIAGQAIAGANAAQAOAAAIgGQAIgFACgNIAtAFQgCARgFAOQgFAOgKAJQgJAKgNAEQgOAEgSABQgSgBgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.1,-22.2,288.3,44.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJADeIAAglIi7AAIAAAlIg+AAIAAhqIALAAQASgBAHgIQAFgJADgXIAYjKIDYAAIAADzIAgAAIAABqgAHEBPQgFAfgKAHIBdAAIAAitIhAAAgAjnC8QgQgDgOgFQgOgEgNgIQgNgHgLgKQgMgLgIgNQgJgNgHgPQgGgPgEgSQgDgSAAgUQAAgUADgQQAEgSAHgPQAGgPAJgNQAKgNALgKQALgKANgIQANgHAPgGQAOgFAPgDIAfgCIAeACQAOADAOAFQAPAGANAHQAMAIAMAKQALAKAJANQAJANAHAPQAHAPADASQAEAQAAAUQAAASgEAQQgCARgGAPQgGAPgIANQgJAMgLALQgKAMgNAHQgNAJgPAGQgOAGgRADQgQADgSAAgAjlgyQgPAFgLALQgLALgHAPQgGAPAAAVQAAAVAGAQQAHAPALAMQALALAOAFQAOAFAQAAQAPAAAOgFQAOgFALgLQALgMAHgPQAGgQAAgVQAAgUgGgPQgGgPgMgMQgLgKgOgGQgOgFgOAAQgQAAgOAFgAK5C6IAAk5IBSAAIAACYICkiZIAaAAIAAE5IhSAAIAAihIilCigAAJC6IAAk5IBSAAIAACYICkiZIAZAAIAAE5IhSAAIAAihIilCigAsVC5IAAjuIhhAAIAADuIhSAAIAAk4IEFAAIAAE4gAp/C5IAAk4ICKAAQAOAAANACQAMADALAFQAUAJAPASQAOAQAHAVQAHAVAAAXQAAATgHAUQgIAVgOARQgOARgVAIQgeALgTAAIg4AAIAABRgAovAgIA6AAQAQAAAJgOQAJgNAAgQQAAgTgIgMQgKgOgQAAIg6AAgAB/iUQgOgEgJgKQgKgJgFgOQgFgOgBgRIAtgFQAAAMAIAGQAHAGAOAAQAOAAAHgGQAJgFACgNIAsAFQgBARgFAOQgFAOgKAJQgJAKgOAEQgNAEgSABQgSgBgNgEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-22.2,193.9,44.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AieDHIAAmNIBmAAIAAB3IBHAAQAYAAAnAMQAaALATAVQARATAKAYQAIAYABAaQgBAcgIAYQgKAZgRAUQgTAUgaAMQgnALgYABgAg4BrIBHAAQAVAAAMgPQALgNAAgVQgBgSgLgOQgMgPgUAAIhHAAg");
	this.shape.setTransform(196.2,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai3DEIABhLIAcAAQALgCAGgGQAJgJAEghIAckOIEYAAIAAGNIhoAAIAAkwIhUAAIgQC1QgEAsgKAaQgKAagTANQgRANgeADIgPAAQgYAAgigEg");
	this.shape_1.setTransform(153.3,-5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTDKQgsgGgcgKIAOhKQAfALAQgEQAKgDAIgIQAIgIAHgQIAOgcIiJj1IAAgNIByAAIBKCZIAEAAIBDiZIBuAAIAAALIiQEkQgQAkgQAWQgQAXgWALQgMAGgNACQgKACgKAAIgJgBg");
	this.shape_2.setTransform(115.9,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AieDHIAAmNICuAAQARAAARADQAPADAOAHQAaALATAWQASAWAJAaQAIAbAAAdQAAAcgJAYQgKAagRAUQgTAWgaALQgnANgXAAIhGAAIAABngAg4AFIBIAAQATAAANgQQALgRAAgXQAAgXgLgQQgMgSgUAAIhIAAg");
	this.shape_3.setTransform(79.8,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABiDJIgYgyIiSAAIgYAyIhsAAIAAgOIC2mDIAvAAIC1GDIAAAOgAApBAIgpheIgnBeIBQAAg");
	this.shape_4.setTransform(25.9,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhADGQgbgKgSgQQgUgSgJgaQgKgaAAghIBaAAQAAAXAPAPQAQANAXAAQAWAAAPgOQAMgNAAgSQAAgTgMgMQgPgOgWAAIgfAAIAAhRIAdAAQARAAALgMQAJgLABgNQAAgQgMgLQgLgJgOAAQgPAAgKAHQgNAHAAAMIhbAAQgCgbAKgVQAKgVASgNQASgOAZgGQAXgHAbABQAeAAAaAKQAYAIASASQAQAPAJAWQAJAUgBAXQAAAUgJATQgJAWgRANQAQAHAKAJQAMAKAGAMQAIAMADAOQADAPABARQAAAbgKAWQgLAXgSASQgUAQgdAKQgeAKgkAAQghgBgbgIg");
	this.shape_5.setTransform(-11,-5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AieDHIAAmNIBlAAIAAB3IBIAAQAYAAAnAMQAaALASAVQASATAJAYQAJAYAAAaQAAAcgJAYQgJAZgSAUQgSAUgaAMQgnALgYABgAg5BrIBIAAQAVAAAMgPQAKgNAAgVQAAgSgLgOQgMgPgUAAIhIAAg");
	this.shape_6.setTransform(-58.3,-5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxDHIAAkyIhiAAIAAhbIEnAAIAABbIhiAAIAAEyg");
	this.shape_7.setTransform(-94.4,-5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdDIIglgKQgSgHgQgJQgRgKgOgMQgPgNgLgQQgMgQgIgSQgJgUgFgWQgEgWAAgZQAAgXAEgXQAFgWAJgUQAIgSAMgRQALgPAPgNQAOgNARgKQAQgJASgHQAYgIAxgEQAgAAAeAIQAgAKAZARQAgAdAMASQAJAPAGARQAHASADATIhlAAQgFgPgIgLQgJgLgLgHQgLgGgNgEQgOgDgQAAQgVAAgSAIQgSAHgOAPQgNAOgHAVQgHAUAAAXQAAAVAHATQAHAUANAPQAOAQASAIQATAJAUAAQAQAAAPgEQAOgEAMgIQALgIAIgLQAIgMAEgQIBlAAQgDAUgGATQgGARgJAQQgJAPgLANIgYAVQgaATggAJQgeAJghAAg");
	this.shape_8.setTransform(-131.8,-5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah+DHIAAmNID3AAIAABbIiOAAIAAA5ICDAAIAABZIiDAAIAABBICUAAIAABfg");
	this.shape_9.setTransform(-169.2,-5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdDIIglgKQgSgHgQgJQgRgKgOgMQgPgNgLgQQgMgQgIgSQgJgUgFgWQgEgWAAgZQAAgXAEgXQAFgWAJgUQAIgSAMgRQALgPAPgNQAOgNARgKQAQgJASgHQAYgIAxgEQAgAAAeAIQAgAKAZARQAgAdAMASQAJAPAGARQAHASADATIhlAAQgFgPgIgLQgJgLgLgHQgLgGgNgEQgOgDgQAAQgVAAgSAIQgSAHgOAPQgNAOgHAVQgHAUAAAXQAAAVAHATQAHAUANAPQAOAQASAIQATAJAUAAQAQAAAPgEQAOgEAMgIQALgIAIgLQAIgMAEgQIBlAAQgDAUgGATQgGARgJAQQgJAPgLANIgYAVQgaATggAJQgeAJghAAg");
	this.shape_10.setTransform(-207.7,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AieDHIAAmNIBmAAIAAB3IBHAAQAYAAAnAMQAaALATAUQARAUAKAXQAIAZABAbQgBAagIAZQgKAZgRAUQgTAUgaAMQgnAMgYAAgAg4BrIBHAAQAVAAAMgPQALgOAAgTQgBgTgLgOQgMgPgUAAIhHAAg");
	this.shape_11.setTransform(196.2,-3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ai3DEIABhLIAcAAQALgCAGgGQAJgJAEghIAckOIEYAAIAAGNIhoAAIAAkwIhUAAIgQC1QgEAsgKAaQgKAagTANQgRANgeADIgPAAQgYAAgigEg");
	this.shape_12.setTransform(153.3,-3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhTDKQgsgGgcgKIAOhKQAfALAQgEQAKgDAIgIQAIgIAHgQIAOgcIiJj1IAAgNIByAAIBKCZIAEAAIBDiZIBuAAIAAALIiQEkQgQAkgQAWQgQAXgWALQgMAGgNACQgKACgKAAIgJgBg");
	this.shape_13.setTransform(115.9,-2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AieDHIAAmNICuAAQARAAARADQAPADAOAHQAaAMATAWQASAUAJAbQAIAbAAAdQAAAbgJAYQgKAbgRAUQgTAWgaALQgnANgXAAIhGAAIAABngAg4AFIBIAAQATAAANgQQALgRAAgXQAAgXgLgQQgMgRgUAAIhIAAg");
	this.shape_14.setTransform(79.8,-3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABiDJIgYgyIiSAAIgYAyIhsAAIAAgOIC2mDIAvAAIC1GDIAAAOgAApBAIgpheIgnBeIBQAAg");
	this.shape_15.setTransform(25.9,-3.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhADFQgbgIgSgRQgUgSgJgZQgKgbAAghIBaAAQAAAXAPAOQAQAOAXAAQAWAAAPgOQAMgNAAgSQAAgSgMgNQgPgOgWAAIgfAAIAAhRIAdAAQARAAALgMQAJgKABgOQAAgRgMgKQgLgJgOAAQgPAAgKAGQgNAIAAAMIhbAAQgCgbAKgVQAKgVASgNQASgOAZgGQAXgHAbAAQAeAAAaALQAYAIASARQAQARAJAVQAJAUgBAWQAAAVgJAUQgJAUgRAOQAQAHAKAJQAMAJAGANQAIAMADAOQADAPABARQAAAbgKAWQgLAYgSAQQgUASgdAJQgeAKgkgBQghAAgbgJg");
	this.shape_16.setTransform(-11,-3.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AieDHIAAmNIBlAAIAAB3IBIAAQAYAAAnAMQAaALASAUQASAUAJAXQAJAZAAAbQAAAagJAZQgJAZgSAUQgSAUgaAMQgnAMgYAAgAg5BrIBIAAQAVAAAMgPQAKgOAAgTQAAgTgLgOQgMgPgUAAIhIAAg");
	this.shape_17.setTransform(-58.3,-3.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgxDHIAAkyIhiAAIAAhbIEnAAIAABbIhiAAIAAEyg");
	this.shape_18.setTransform(-94.4,-3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdDIIglgKQgSgGgQgKQgRgJgOgNQgPgNgLgQQgMgQgIgTQgJgTgFgVQgEgXAAgZQAAgXAEgXQAFgWAJgUQAIgSAMgRQALgQAPgNQAOgMARgKQAQgJASgHQAYgIAxgEQAgAAAeAJQAgAJAZASQAgAcAMASQAJAPAGARQAHASADATIhlAAQgFgPgIgLQgJgLgLgHQgLgHgNgDQgOgDgQAAQgVAAgSAIQgSAHgOAPQgNAPgHATQgHAVAAAXQAAAVAHATQAHAUANAPQAOAPASAJQATAJAUgBQAQAAAPgDQAOgEAMgHQALgJAIgLQAIgMAEgRIBlAAQgDAWgGASQgGASgJAPQgJAPgLANIgYAVQgaATggAJQgeAJghAAg");
	this.shape_19.setTransform(-131.8,-3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ah+DHIAAmNID3AAIAABaIiOAAIAAA6ICDAAIAABZIiDAAIAABBICUAAIAABfg");
	this.shape_20.setTransform(-169.2,-3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdDIIglgKQgSgGgQgKQgRgJgOgNQgPgNgLgQQgMgQgIgTQgJgTgFgVQgEgXAAgZQAAgXAEgXQAFgWAJgUQAIgSAMgRQALgQAPgNQAOgMARgKQAQgJASgHQAYgIAxgEQAgAAAeAJQAgAJAZASQAgAcAMASQAJAPAGARQAHASADATIhlAAQgFgPgIgLQgJgLgLgHQgLgHgNgDQgOgDgQAAQgVAAgSAIQgSAHgOAPQgNAPgHATQgHAVAAAXQAAAVAHATQAHAUANAPQAOAPASAJQATAJAUgBQAQAAAPgDQAOgEAMgHQALgJAIgLQAIgMAEgRIBlAAQgDAWgGASQgGASgJAPQgJAPgLANIgYAVQgaATggAJQgeAJghAAg");
	this.shape_21.setTransform(-207.7,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231.5,-30.5,447,63.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00DFFF","#004DAA"],[0,1],0,25,0,-25).s().p("AtZD6QgpgBgBgpIAAmfQABgpApgBIazAAQApABABApIAAGfQgBApgpABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-25,180,50);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AAiNEQiMgXiTkEIw6h/QggBZg7AfQkPB1g7lqQhaghhPhsQgJhngEhvQAOgMAagfQgWi3BMh1QBdgvBlgWQFGkrGFg7QGEg6M0BVQE9BgEWDMQA/AJBFA2QgDAGADAfQCpAbEJBJQFsCEACBEQAGAoB5CeQAQBAgFBlQgCA/gJBIQAbBFg2AfQADAvj9gCQgqA+giAUQjrCUi/ivIpuAdQiIDbjsAAQg5AAg/gNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-84.9,388,169.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Volkswagen_Logo();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.761)","rgba(0,0,0,0)"],[0,0.486,1],-11.7,-22.3,11.8,22.3).s().p("AygLEMAhFgdlID8HeMghFAdlg");
	this.shape.setTransform(-31.7,-29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.761)","rgba(0,0,0,0)"],[0,0.486,1],-11.6,-22.3,11.9,22.2).s().p("AygLEMAhFgdlID8HeMghFAdmg");
	this.shape_1.setTransform(-21.8,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.2,-147.9,246.9,299.7);


(lib.Символ19копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF7F00","rgba(255,193,0,0)"],[0,1],-169.7,-20,165.3,-20).s().p("A3xmOQhujIBuAAMAwaAOCMgomAEsQnOrPgmkXg");
	this.shape.setTransform(-137.4,36.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF7F00","rgba(255,193,0,0)"],[0,1],-169.7,-20,165.3,-20).s().p("A3xmOQhujIBuAAMAwaAOCMgomAEsQnOrPgmkXg");
	this.shape_1.setTransform(2.3,20);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.2,-40,455.2,136.6);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF7F00","rgba(255,193,0,0)"],[0,1],-168.7,-5,166.3,-5).s().p("A4gj3QhQhpgmiKQEqACCxgOIJYgvQQPGZTrC9IkTFWQragH45CmQmIlkkJm5g");
	this.shape.setTransform(1.3,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.5,-50,337.5,110);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("Ao4FjIgngGIgBAAIgNABQgJAAgMgDIgFgCIgDABQgGACgGgEQgGgFgBgHQAAgFAFgGIAIgLIANgSQAUgdAjghIARgNQATgMAggDIAAAAQATgCAfACQAmAEAMAAQASAAADAIQACAFgFALIgeA6IgDAIQgGATgKAPQgIAOgJAFQgHAEgNACQgQABgRAAQgfAAgQgBgAs4hmQg/h2glhxQDNgmI4BfQCnCjg1AMQg0AVjBAAQjGAAlYgWgAN0ioQgFgBgEgEIAAgBQgLAAgFgDQgEgEAAgJQACgfgBgPQAAgKgEgaIgGgWQgFgQABgcQAAgGACgFQADgHAIABQAPACAOAOQAJAKAKASIAKARIAJAaIACAJIABARQAAATgCALIABAEQADAWgHAMQgDAFgEACQgEACgGAAg");
	this.shape.setTransform(47.5,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-14.3,185.1,71.4);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00111C").s().p("AkEIsQtehcszigQsziiAAjTQAAjUMziWQMziXSFAAQSGAAM3CXQM2CYhVDsQhVDqwKDlQrhCjqKAAQkDAAj4gbg");
	this.shape.setTransform(-8.3,12.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.5,-45.7,552.4,116.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYBXIFMFLQiOB8i+AIgAlnGgIgFgFIFMlMIAAHWQi7gKiMh7gAokAgIHhAAIlSFTQiGiQgJjDgABHAgIHeAAQgKDCiECPgABNgeIFOlOIAEAFQB8CNAKC8gAokgeQAJi6B5iLIFFFFgAAYolQDIAICSCIIlaFagAlwmXQCPiDDBgKIAAHeg");
	this.shape.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-54.9,110,110);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-70,0,70,0).s().p("EgK6AgJMAAAhARIV1AAMAAABARg");
	this.shape.setTransform(-265,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],70,0,-70,0).s().p("EgK6AgKMAAAhATIV1AAMAAABATg");
	this.shape_1.setTransform(265,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-211.7,670,423.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,70,0,-70).s().p("Eg0UAK8IAA13MBopAAAIAAV3g");
	this.shape.setTransform(0,124.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,-80,0,80).s().p("Eg0UAMgIAA4+MBopAAAIAAY+g");
	this.shape_1.setTransform(0,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-194,670,388.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.wolks_fon1();
	this.instance.setTransform(-752.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-752.5,-200,1505,400);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.setTransform(1,2,0.362,0.362);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(-0.8,-0.8,1.096,1.096);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AutESQgsgBAAgsIAAnJQAAgsAsgBIdaAAQAtABAAAsIAAHJQAAAsgtABg");
	this.shape.setTransform(0.8,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AvWEdQguAAAAguIAAncQAAgvAuAAIesAAQAvAAAAAvIAAHcQAAAugvAAg");
	this.shape_1.setTransform(0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AtTD3QgoAAAAgoIAAmdQAAgoAoAAIamAAQApAAAAAoIAAGdQAAAogpAAg");
	this.shape_2.setTransform(0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1,p:{scaleX:1.096,scaleY:1.096,x:-0.8,y:-0.8}},{t:this.instance,p:{scaleX:0.362,scaleY:0.362,x:1,y:2}}]}).to({state:[{t:this.shape_1},{t:this.instance_1,p:{scaleX:1.144,scaleY:1.144,x:-0.9,y:-0.8}},{t:this.instance,p:{scaleX:0.378,scaleY:0.378,x:1.1,y:2.1}}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{scaleX:1.096,scaleY:1.096,x:-0.8,y:-0.8}},{t:this.instance,p:{scaleX:0.362,scaleY:0.362,x:1,y:2}}]},1).to({state:[{t:this.shape_2},{t:this.instance_1,p:{scaleX:0.992,scaleY:0.992,x:-0.7,y:-0.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-28.2,199,56.5);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 38
	this.instance = new lib.Символ38();
	this.instance.setTransform(245.9,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({scaleX:1.04,scaleY:1.04,x:250.9},6,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:245.9},6,cjs.Ease.get(0.98)).wait(1));

	// Символ 37
	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(70.3,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({scaleX:1.04,scaleY:1.04},9).to({scaleX:1,scaleY:1},7).wait(6));

	// Символ 36
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(105.1,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:129.7},14).to({x:145.1,alpha:0.609},8,cjs.Ease.get(-1)).to({x:105.1,alpha:1},9,cjs.Ease.get(0.98)).wait(6));

	// Символ 35
	this.instance_3 = new lib.Символ35();
	this.instance_3.setTransform(-150.8,-7.3);
	this.instance_3.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},7).to({x:-115.8},7).to({x:-150.8},16).to({alpha:0.609},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.8,-29.6,542.9,80.5);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.setTransform(-2.5,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:1.7},0).wait(1).to({rotation:0},0).wait(3).to({rotation:-2},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(0.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-2},0).wait(1).to({rotation:0},0).wait(2).to({rotation:2},0).wait(1).to({rotation:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.1,-32.1,174.7,60);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.setTransform(-9,3.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ41(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.8,-25.8,207.7,58.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.07},11).to({alpha:0.301},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-84.9,388,169.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(-15.5,77.7);
	this.instance.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.7,-70.3,246.9,299.7);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.alpha = 0.41;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-14.3,185.1,71.4);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-6984.1,x:0},3).to({scaleX:1,scaleY:1,rotation:-6840,x:0.1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.9,-55,110,110);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(0,-5.8);

	this.instance_1 = new lib.Символ10();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335,-211.7,670,423.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-775.8,y:-52.8},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-752.5,-220,1505,400);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,0,1.141,1.141);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-36.6,199.3,68.5);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(-0.7,99.3,1.513,1.513);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-5.7},3).wait(1).to({y:-0.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,62.1,301.1,85.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ21();
	this.instance.setTransform(19.2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:-464,y:-50.4},20).to({_off:true},1).wait(42));

	// Слой 1
	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(19.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-464,y:-50.4},20).to({_off:true},1).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.5,-70.3,246.9,299.7);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ19();
	this.instance.setTransform(382.7,95.3,1.767,3.634,0,-56,3);
	this.instance.alpha = 0.371;
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(17, 17, 1)];
	this.instance.cache(-169,-52,342,114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Слой 2
	this.instance_1 = new lib.Символ19копия();
	this.instance_1.setTransform(405.9,59.6,1.344,2.263,0,-56,5.3,0,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1.filters = [new cjs.BlurFilter(17, 17, 1)];
	this.instance_1.cache(-297,-42,459,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.371},2).to({alpha:0},4).wait(19));

	// Слой 1
	this.instance_2 = new lib.Символ17();
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},2).to({alpha:0},4).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-30.9,948,275);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtzDuQAdjqBzkJIAAAAICGAHQDmARDaFCIAAAAIAABEQiZhAjHAfIAAAAQhOAJAlBNIAAAAIAdA/gACUD9QijiOjflGIAAAAQKXhZG2A9IAAAAQD7BsH1FjIAAAAQspApnrACIAAAAQhFgChigIgA5OC1QgCgSAGhTIAAAAQCRidBnhBIAAAAQFmiWCYAjIAAAAQhaERgpDMIAAAAQl3gbkAgMg");
	mask.setTransform(-31.6,-72);

	// Слой 4
	this.instance = new lib.Символ22();
	this.instance.setTransform(235.8,-103.9);
	this.instance.alpha = 0.551;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.car();
	this.instance_1.setTransform(-251.5,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-110,503,220);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ18();
	this.instance.setTransform(101.8,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-174.2,1229.7,421.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ13();
	this.instance.setTransform(-209.1,34.4,0.264,0.521);
	this.instance.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjTEaQhXh1AAilQAAikBXh2QBYh1B7AAQB7AABYB1QBYB2AACkQAAClhYB1QhYB2h7AAQh7AAhYh2g");
	mask.setTransform(4.9,58.3);

	// Слой 3
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(4.1,57.6,0.53,0.804);
	this.instance_1.alpha = 0.66;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(0,58.2,1.001,1,0,0,2.7);
	this.instance_3.alpha = 0.922;
	this.instance_3.filters = [new cjs.BlurFilter(37, 37, 1)];
	this.instance_3.cache(-286,-48,556,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.5,-174.2,1281.7,421.5);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Слой 3
	this.instance = new lib.Символ30();
	this.instance.setTransform(-30.7,70.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(0,-0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Слой 5
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(108.9,0.5);
	this.instance_2.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// Слой 1
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(0,0,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-211.2,998.6,423.5);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.m1 = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.m1).to({y:2.4},19,cjs.Ease.get(-1)).to({y:5},21,cjs.Ease.get(1)).to({y:2.6},19,cjs.Ease.get(-1)).to({y:0},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-211.2,998.6,423.5);


// stage content:



(lib.wolks_640x305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.car.m1.gotoAndPlay(1);
		
		}
		
		
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.car.m1.gotoAndPlay(0);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.movieClip_1 = new lib.Символ34();
	this.movieClip_1.setTransform(523.5,139.7,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// Слой 5
	this.instance = new lib.Символ32();
	this.instance.setTransform(260,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(593,43,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.car = new lib.Символ5();
	this.car.setTransform(210.5,175.5);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(752.5,158.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(291.5,90.9,1533.5,449.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
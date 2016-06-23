(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 960,
	fps: 30,
	color: "#666666",
	manifest: [
		{src:"images/app_store.png?1466671253009", id:"app_store"},
		{src:"images/google_play.png?1466671253010", id:"google_play"}
	]
};



// symbols:



(lib.app_store = function() {
	this.initialize(img.app_store);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,55);


(lib.google_play = function() {
	this.initialize(img.google_play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,55);


(lib.url_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtSAoiMAAAhRDMBalAAAMAAABRDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.raiting_stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBYgIIAghQIAiBQIBXAIIhCA4IAUBVgAAuBLIgNg1IApghIg1gEIgVgxIgTAxIg1AEIAoAhIgMA1IAsgcIAuAcg");
	this.shape.setTransform(65.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVgAAtBLIgMg1IApghIg2gEIgUgxIgTAxIg2AEIApAhIgMA1IAsgcIAtAcg");
	this.shape_1.setTransform(39.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVgAAuBLIgNg1IApghIg1gEIgVgxIgTAxIg1AEIAoAhIgMA1IAsgcIAuAcg");
	this.shape_2.setTransform(13.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVgAAtBLIgMg1IApghIg2gEIgUgxIgTAxIg2AEIApAhIgMA1IAsgcIAtAcg");
	this.shape_3.setTransform(-13.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVgAAtBLIgMg1IApghIg2gEIgUgxIgTAxIg1AEIAoAhIgMA1IAsgcIAtAcg");
	this.shape_4.setTransform(-39.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVgAAtBLIgMg1IApghIg2gEIgUgxIgTAxIg2AEIApAhIgMA1IAsgcIAtAcg");
	this.shape_5.setTransform(-65.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-11.5,155.7,23.2);


(lib.raiting_q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// raiting
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#838484").s().p("ADjBHQAFgDAFgHQAFgHADgJIAGgUQADgMAAgNIAAAAQAAgMgDgMQgCgLgEgJQgEgJgEgHQgFgHgFgDIACgGQAEADAEADIAIAKIAHAMIAFAOIAEARIABARIAAAAIgBASIgEASIgFAOIgHAMIgIAJIgIAGgAjsBHIgIgJIgHgMIgFgOIgEgSIgBgSIAAAAIABgRIAEgRIAFgOIAHgMIAIgKQAEgDAEgDIACAGQgFAEgFAGQgFAHgDAJQgEAJgCALQgDAMAAAMIAAAAQAAANADAMQACALAEAJQADAJAFAHQAFAGAFAEIgCAGIgIgGgAhxApQgGgDgFgFQgEgHgCgIQgCgIAAgKIAAgSQAAgMACgJQACgJAEgFQAEgGAHgDQAGgCAHAAQAIAAAGACQAGADAEAGQAFAFACAJQACAJAAAMIAAASQAAAKgCAIQgCAIgEAHQgFAFgGADQgGADgIAAQgHAAgGgDgAh2gvQgGAJAAATIAAATQAAAIACAHQABAHADAEQADAFAFADQAEACAGAAQAGAAAFgCQAEgDADgFQADgEACgHQABgHAAgIIAAgTQAAgTgGgJQgGgJgMAAQgMAAgGAJgAjEAqQgGgCgEgEQgFgEgDgGQgDgFAAgIIAJAAQAAAFACAFQABADAEADIAIAGQAEABAGAAQALAAAHgGQAGgGAAgKQAAgGgCgFQgCgDgDgBQgEgDgFgCIgLgBIgJAAIAAgHIAJAAQAGAAAFgCIAIgEIAFgHQABgDAAgFQAAgFgBgEIgEgHQgDgDgEgBQgFgBgFAAQgFAAgFABQgEABgDADQgDADgCAEQgCAFAAAEIgIAAQAAgGACgFQACgGAFgEQAEgEAGgCQAGgCAHAAQAHAAAGACQAFACAEAEQAEAEADAFQACAGAAAGIgBAIIgEAHIgFAFIgIAFIAJADIAGAGIAEAGIABAIQAAAIgDAFQgCAGgFAEQgEAEgGACQgGACgHAAQgGAAgHgCgADFAqIAAgbIgyAAIAAgFIAxhIIAKAAIAABGIAQAAIAAAHIgQAAIAAAbgACdAIIAoAAIAAg8gABFAqIAAgGIAxg4IADgIIAAgHIgBgJQgBgEgDgDQgDgDgEgBQgEgBgGAAQgFAAgFACQgEABgDADQgDAEgCAEIgCAKIgJAAQAAgHADgFQACgGAEgEQAEgFAGgDQAGgCAIAAQAHAAAGACQAGACAEAEQAEADACAGQACAFAAAHQAAAFgBAEIgFAKIgsAzIA4AAIAAAHgAASAqIAAheIgbAKIAAgIIAigNIACAAIAABpg");
	this.shape.setTransform(-31,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-6.8,52.6,15.4);


(lib.iOS_top_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_tbtn_field
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007FFF").s().p("AChBpQgLgDgJgGQgJgGgFgJQgGgJAAgNIASAAQAAAHADAGQADAHAGAEQAGAFAIACQAIADAJAAQAMAAAHgCQAJgDAFgEQAFgEADgGQACgGABgGQAAgQgLgHQgKgHgWAAIgYAAIAAgQIAYAAQALAAAIgCQAHgCAFgDQAFgEABgFQADgDAAgHQAAgGgDgFQgCgGgEgEQgGgEgHgCQgIgDgLAAQgIAAgHADQgIACgGAEQgFAEgDAGQgEAFABAHIgSAAQAAgKAFgJQAEgIAJgGQAHgGAMgDQAKgEALAAQAOAAALADQALADAHAGQAIAGADAIQAFAIAAALQgBAKgGAJQgIAJgNAFQAPAFAIAJQAHAKAAAOQAAALgEAJQgEAIgJAGQgHAGgLADQgMAEgOAAQgLAAgKgDgAgHBoQgJgDgHgGQgHgGgDgIQgEgJAAgJQAAgMAFgJQAFgJAKgHQAJgHALgDQANgDASAAIAgAAIAAgQQAAgRgLgKQgKgKgUAAQgJAAgIADQgIACgEAEQgFAFgDAGQgDAFAAAHIgSAAQAAgJAFgIQAEgJAIgGQAIgHAJgEQALgEAOAAQANAAAKAEQAKADAIAGQAIAHAEAJQAFAKgBANIAABTIADARIACAGIAAACIgSAAIgDgKIgBgMIgKAJIgLAIIgQAGQgHACgKAAQgMAAgHgEgAAMAdQgLACgFAEQgIAFgDAHQgEAGAAAIQAAAHACAFQADAGAFAEQAEAEAFADQAGACAJAAQAJAAAIgCQAIgDAGgEQAIgEAEgGQAFgFADgHIAAgjIgeAAQgNAAgLADgAklBoQgJgDgIgGQgGgGgEgIQgDgJAAgJQAAgMAEgJQAGgJAJgHQAKgHANgDQANgDARAAIAgAAIAAgQQABgRgLgKQgLgKgTAAQgKAAgIADQgIACgFAEQgFAFgDAGQgEAFAAAHIgSAAQABgJAEgIQAEgJAIgGQAIgHALgEQALgEAOAAQANAAALAEQAKADAIAGQAIAHAEAJQAEAKAAANIABBcIACAIIACAGIAAACIgTAAIgCgKIgCgMIgJAJIgMAIIgPAGQgIACgJAAQgMAAgJgEgAkRAdQgKACgIAEQgHAFgEAHQgEAGAAAIQAAAHACAFQADAGAFAEQAFAEAGADQAHACAIAAQAJAAAJgCQAHgDAHgEQAHgEAFgGQAEgFADgHIAAgjIgeAAQgNAAgLADgAIqBpIAAhJIhWAAIAABJIgRAAIAAidIARAAIAABFIBWAAIAAhFIARAAIAACdgAGCBpIAAiAIhWCAIgSAAIAAidIASAAIAACBIBWiBIARAAIAACdgAiZBpIAAidIBhAAIAAAPIhQAAIAACOgAl/BpIABi6IhPC6IgOAAIhPi6IABC6IgSAAIAAjUIAYAAIBPC7IBPi7IAYAAIAADUg");
	this.shape.setTransform(202,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#838484").s().p("AGYBpQgJgDgHgGQgHgGgDgIQgEgIAAgKQAAgMAFgJQAFgJAJgGQAKgIANgCQANgEARAAIAhAAIAAgQQAAgRgLgKQgKgKgUAAQgKABgHACQgIACgGAEQgFAFgDAGQgEAFAAAIIgRgBQAAgJAEgIQAEgIAJgHQAHgHAMgEQALgDANAAQANAAALADQAKADAIAGQAIAHAEAKQAEAJAAANIAABUIADAQIACAGIAAACIgTAAIgCgKIgBgMIgKAJIgMAIIgPAGQgIACgJAAQgMAAgJgEgAGtAeQgLACgHAFQgIAEgEAHQgEAGAAAJQAAAGADAFQACAGAFAEQAFAEAGADQAHADAIgBQAKABAIgDQAIgDAGgEQAHgEAFgGQAFgFADgHIAAgiIgeAAQgOgBgKADgABgBnQgNgGgJgKQgKgKgFgOQgGgPAAgRIAAgGQAAgSAGgNQAFgPAKgLQAJgKAMgGQANgFANAAQAPgBAMAGQAMAGAIAJQAIAKAEANQAEAMAAAPIAAALIhxAAIAAADQAAAOAEALQAEALAHAJQAHAIAKAGQAKAEAMAAQAOAAALgFQALgFAJgLIALAIIgJALQgGAFgHAEQgHADgIADQgJACgLAAQgPAAgNgGgABngiQgJADgGAHQgHAHgEAKQgEAIgCAMIBgAAIAAgCQgBgKgDgHQgDgJgFgIQgGgHgIgEQgJgEgLgBQgKAAgIAFgAnHBmQgPgHgLgMQgLgNgGgTQgGgRAAgXIAAgVQAAgXAGgRQAGgSALgOQALgNAPgGQAPgHATAAQATAAAPAHQAQAGALANQALAOAFASQAGARAAAXIAAAVQAAAXgGARQgFATgLANQgLAMgPAHQgQAHgTAAQgSAAgQgHgAnAhWQgMAFgIALQgJAKgEAQQgFAPAAATIAAAVQAAATAFAPQAEAPAJALQAIALAMAFQAMAHAPgBQAQABAMgHQAMgFAIgLQAJgLAEgPQAEgPAAgTIAAgVQAAgTgEgPQgEgQgJgKQgIgLgMgFQgNgHgPAAQgPAAgMAHgAFCBqIAAhJIhWAAIAABJIgRAAIAAicIARAAIAABFIBWAAIAAhFIARAAIAACcgAAABqIAAiAIg8CAIgMAAIg/iDIAACDIgRAAIAAicIAXAAIA/CFIA/iFIAUAAIAACcgAkCBqIAAiNIg3AAIAAgPICCAAIAAAPIg5AAIAACNg");
	this.shape_1.setTransform(-210.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.8,-11.2,520,21.9);


(lib.iOS_buttom_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_bbtn_field
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("AgIG4IAAtvIASAAIAANvg");
	this.shape.setTransform(0,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("EgonAAJIAAgSMBRPAAAIAAASg");
	this.shape_1.setTransform(0.1,-44,1.115,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#838484").s().p("AjFCQIAAjaIARAAIABAXQAIgMAMgHQAMgHARAAQAPAAALAGQALAGAIAKQAIALAEAPQAEAPAAAQIAAADQAAASgEAPQgEAPgIAKQgIALgLAGQgLAGgOAAQgRAAgNgGQgMgGgIgLIAABRgAiXg7QgHADgFAEQgGAEgEAFIgGAMIAABKIAHALQAEAFAGAEQAFAEAHACQAIACAJAAQAMAAAIgFQAJgFAGgJQAGgJADgMQACgMAAgOIAAgDQAAgMgCgMQgDgMgGgJQgGgIgJgFQgJgFgMAAQgJAAgIACgAj3CBIAAguIh3AAIAAAuIgRAAIAAg9IALAAIAJgMQAFgGAEgKQAEgKAEgOQADgOABgSIACg6IBeAAIAACOIAQAAIAAA9gAlFgQIgDAbQgCAOgEAKQgDALgFAIIgJAOIBXAAIAAh9Ig7AAgAKQBQQgNgGgJgKQgKgLgFgOQgFgOAAgRIAAgGQAAgRAGgOQAFgPAJgLQAKgKAMgGQAMgGAOAAQAPAAAMAGQALAFAIAKQAIAKAEANQAEANAAAQIAAAJIhxAAIAAADQAAANAEAMQAEALAHAJQAIAIAKAFQAKAFAMAAQAOAAALgFQAKgFAJgMIALAJIgJALQgFAFgHADQgHAEgJACQgIADgLAAQgQAAgNgGgAKXg6QgIAEgHAHQgGAHgEAKQgFAKgBAMIBfAAIAAgCQAAgKgDgJQgDgKgGgHQgFgHgJgEQgIgFgLAAQgKAAgJAEgAH2BQQgNgGgJgKQgKgLgFgOQgGgOAAgRIAAgGQAAgRAGgOQAFgPAKgLQAJgKAMgGQANgGANAAQAPAAAMAGQAMAFAIAKQAIAKAEANQAEANAAAQIAAAJIhxAAIAAADQAAANAEAMQAEALAHAJQAHAIAKAFQAKAFAMAAQAOAAALgFQALgFAJgMIALAJIgJALQgGAFgHADQgHAEgIACQgJADgLAAQgPAAgNgGgAH9g6QgJAEgGAHQgHAHgEAKQgEAKgCAMIBgAAIAAgCQgBgKgDgJQgDgKgFgHQgGgHgIgEQgJgFgLAAQgKAAgIAEgACoBQQgNgGgJgKQgJgKgFgNQgFgOAAgQIAAgOQAAgaAFgUQAFgUAJgOQAKgOANgJQANgIAQgDIATgEQAIgCAEgDQAFgDACgEQADgEAAgGIAPAAQAAALgEAIQgEAHgHAEQgHAFgKADIgUAEQgLACgKAEQgKAFgHAIQgHAIgGAMQgFALgCAPQAJgMAOgIQAOgHASAAQAQAAANAFQAMAFAJAKQAJAJAEANQAFANAAAOIAAAFQAAAQgFAOQgFANgJAKQgJAKgNAGQgNAGgQAAQgQAAgNgGgACugsQgKAFgGAIQgHAHgDALQgDAKAAAJIAAAFQAAAMADALQADALAHAIQAHAIAJAFQAKAFANAAQANAAAKgFQAKgFAGgIQAHgIADgLQAEgLAAgMIAAgFQAAgJgEgLQgDgKgHgHQgHgIgJgFQgKgEgNAAQgNAAgKAEgAAABQQgLgGgKgLQgJgKgFgPQgFgPAAgRIAAgFQAAgPAFgPQAFgOAJgLQAJgLAMgGQANgGAQAAQAQAAANAGQANAGAJALQAJALAFAOQAFAPAAAPIAAAFQAAARgFAPQgFAPgJAKQgJALgNAGQgNAGgQAAQgQAAgNgGgAAGg4QgIAFgHAJQgGAJgEAMQgDALAAALIAAAFQAAANADAMQAEAMAGAJQAHAIAIAGQAKAFANAAQANAAAKgFQAJgGAHgIQAHgJADgMQAEgMAAgNIAAgFQAAgLgEgLQgDgMgHgJQgHgJgJgFQgLgGgMAAQgNAAgKAGgAn4BQQgNgGgJgLQgJgKgFgPQgGgPAAgRIAAgFQAAgPAGgPQAFgOAJgLQAJgLANgGQANgGAQAAQAQAAANAGQAOAGAJALQAJALAFAOQAFAPAAAPIAAAFQAAARgFAPQgFAPgJAKQgJALgOAGQgNAGgQAAQgQAAgNgGgAnyg4QgJAFgHAJQgHAJgDAMQgEALAAALIAAAFQAAANAEAMQADAMAHAJQAHAIAJAGQAKAFANAAQANAAAKgFQAKgGAHgIQAGgJAEgMQAEgMAAgNIAAgFQAAgLgEgLQgEgMgGgJQgHgJgKgFQgKgGgNAAQgNAAgKAGgAGVBTIAAhJIhWAAIAABJIgRAAIAAidIARAAIAABHIBWAAIAAhHIARAAIAACdgApcBTIAAjEIh5AAIAADEIgSAAIAAjUICdAAIAADUg");
	this.shape_2.setTransform(-147.7,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007FFF").s().p("AA4BmQgPgGgJgLQgJgLgGgPQgEgPAAgRIAAgDQAAgRAEgNQAGgPAJgLQAJgKAOgHQAOgGARAAQASAAAOAGQANAHAJAKQAKALAFAPQAFANAAARIAAADQAAARgFAPQgFAPgKALQgJALgNAGQgPAGgRAAQgRAAgNgGgABFgWQgHAEgEAIQgFAHgDAHQgCAJAAALIAAADQAAALACAJQADAKAFAHQAEAHAHAEQAHAEAKAAQAKAAAIgEQAHgEAEgHQAFgHACgKQACgJAAgLIAAgDQAAgLgCgJQgCgHgFgHQgEgIgHgEQgIgEgKAAQgKAAgHAEgAkdBoQgLgDgGgHQgIgGgEgJQgEgJAAgKQAAgMAFgKQAFgKAJgHQAJgGAOgEQANgDARAAIAWAAIAAgIQABgNgHgHQgHgIgOAAQgHAAgFACIgIAFQgEADgCADQgCAEAAAFIgkAAQAAgJAFgJQAFgJAIgHQAJgGAMgFQAMgEAPAAQANAAALAEQAMADAIAHQAIAHAFAKQAEAKAAAOIAABEQABAWAFAMIAAADIgkAAIgCgHIgCgIIgIAHIgJAGIgMADIgNACQgLAAgKgEgAkRAlQgJAHAAANIABAJQACAEADADIAIAFQAFABAGAAIALgBIAKgFIAIgGIAEgHIAAgeIgTAAQgTAAgLAHgApIBlQgNgGgJgLQgKgLgEgOQgEgPAAgQIAAgFQAAgQAEgNQAEgOAKgLQAJgLANgGQAOgHASAAQAOAAAMAFQALAEAJAIQAIAIAGALQAEALAAALIghAAQgBgEgCgGQgCgGgEgEQgEgEgGgDQgGgCgGAAQgMAAgGAEQgIAFgDAHQgFAHgBAHIgCATIAAAFIACATQABAJAFAHQADAHAIAFQAGAEAMAAQAGAAAFgCQAGgCAEgDQAEgEADgFQADgFAAgGIAhAAQAAAMgFAKQgFAKgJAIQgJAHgLAEQgMAFgNAAQgSAAgOgHgAsLBsIgHgBIAAgdIADAAIAEAAIAGAAQAGAAAEgBIAHgFIAFgHIAIgSIhJiaIAoAAIAyBuIAqhuIAqAAIhRC9QgEAIgHAFQgHAGgIADQgJAEgMAAgAKrBpIAAidIAjAAIAAAzIAjAAQAPAAAMACQANAEAHAHQAJAHAEAKQAEAKAAAMQAAALgEAKQgEAKgJAHQgHAHgNAFQgMAEgPAAgALOBMIAjAAQAIAAAGgCQAFgCADgDQADgEACgEIABgKIgBgJQgCgFgDgEQgDgDgFgCQgGgDgIAAIgjAAgAI6BpIAAiAIgzAAIAAgdICKAAIAAAdIgzAAIAACAgAHLBpIAAhpIg+BpIgjAAIAAidIAjAAIAABoIA+hoIAjAAIAACdgADBBpIAAidIBAAAQAPAAAMADQANADAIAFQAJAGAFAIQAEAIAAALQAAAJgGAJQgIAJgNAEQAJACAGAEQAGADAEAFQAFAFACAFQACAGAAAGQAAAMgEAIQgFAJgIAFQgIAGgMADQgLADgPAAgADkBNIAnAAQAOAAAHgGQAGgFAAgJQAAgJgGgFQgGgGgPAAIgnAAgADkAMIAdAAQAQAAAIgFQAGgEAAgHQABgKgIgFQgHgEgQAAIgdAAgAg0BpIAAhAIg+AAIAABAIgjAAIAAidIAjAAIAABAIA+AAIAAhAIAjAAIAACdgAmnBpIAAiAIgzAAIAAgdICKAAIAAAdIg0AAIAACAg");
	this.shape_3.setTransform(148.9,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.7,-45,579.8,90);


(lib.cancel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtQGEIAAsHIahAAIAAMHg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.budge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{iOS:0,Android:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// OS_budge
	this.instance = new lib.app_store();
	this.instance.setTransform(-290,-27.5);

	this.instance_1 = new lib.google_play();
	this.instance_1.setTransform(-290,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-27.5,580,55);


(lib.app_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AQcBuQgNgEgIgIQgJgHgEgJQgEgKAAgKIAiAAQABAIADAEQADAFAEAEQAFADAFABIAMACQAOAAAIgGQAHgFAAgJIgBgHQgCgDgDgDIgLgGIgRgEQgNgDgKgEQgLgEgHgGQgIgFgEgIQgEgIAAgIQAAgJAEgIQAFgJAIgHQAHgGAMgEQALgFAOAAQAPAAAMAFQAMAEAIAGQAIAHAEAJQAFAKAAAIIgkAAQAAgDgCgDQgBgFgEgEQgDgDgGgCQgFgCgHAAQgGAAgFACIgJAFQgDACgCAEIgBAHIABAFQACADADADIAKAEIApAMQALAEAHAFQAIAGAEAHQAEAJAAAKQAAAKgFAJQgEAJgJAGQgIAHgMADQgMAEgOAAQgRAAgMgFgAODBtQgOgGgKgKQgKgLgFgOQgGgOAAgQIAAgGQAAgSAGgOQAGgPAJgKQAKgLANgFQANgHAPAAQARAAANAHQANAFAIALQAJAKAEAOQAEAMAAASIAAAPIhoAAQABAJADAIQADAIAGAFQAFAGAIADQAHADAJAAQAOABAJgGQAKgFAHgKIATATIgJALQgGAFgHAEQgIAFgJACQgKADgMAAQgRAAgOgGgAOGgIQgJAIgCASIBEAAIAAgDIgCgNQgCgEgEgFQgEgGgGgDQgGgDgJAAQgPAAgJALgAIwBtQgOgGgKgLQgJgLgFgPQgFgOAAgRIAAgEQAAgRAFgOQAFgNAJgLQAKgLANgGQAOgHARAAQASAAAOAHQANAGAKALQAJALAFANQAFAOAAARIAAAEQAAARgFAOQgFAPgJALQgKALgNAGQgOAGgRAAQgSAAgNgGgAI9gOQgHADgEAIQgFAFgCAJQgDAJAAALIAAAEQAAAKADAKQACAJAFAIQAEAHAIAEQAHADAKAAQAJAAAIgDQAHgEAFgHQAEgIADgJQACgKAAgKIAAgEQAAgLgCgJQgDgJgEgFQgFgIgHgDQgIgFgKAAQgKAAgHAFgAjzBtQgOgGgJgLQgKgLgFgPQgFgOAAgRIAAgEQAAgRAFgOQAFgNAKgLQAJgLAOgGQAOgHARAAQARAAAOAHQAOAGAJALQAKALAFANQAFAOAAARIAAAEQAAARgFAOQgFAPgKALQgJALgOAGQgOAGgRAAQgRAAgOgGgAjlgOQgHADgFAIQgFAFgCAJQgCAJAAALIAAAEQAAAKACAKQACAJAFAIQAFAHAHAEQAHADAKAAQAKAAAHgDQAHgEAFgHQAFgIACgJQACgKAAgKIAAgEQAAgLgCgJQgCgJgFgFQgFgIgHgDQgHgFgKAAQgKAAgHAFgAncBtQgOgGgKgKQgKgLgFgOQgFgOAAgQIAAgGQAAgSAFgOQAGgPAKgKQAJgLAOgFQANgHAPAAQARAAANAHQAMAFAJALQAIAKAEAOQAEAMAAASIAAAPIhnAAQABAJADAIQADAIAFAFQAGAGAHADQAHADAKAAQANABAKgGQAKgFAHgKIATATIgKALQgFAFgIAEQgHAFgKACQgJADgMAAQgSAAgOgGgAnYgIQgJAIgDASIBEAAIAAgDIgCgNQgCgEgEgFQgEgGgGgDQgGgDgIAAQgPAAgJALgAuOBvQgKgDgHgHQgHgGgEgJQgEgIAAgLQAAgMAFgKQAFgKAJgGQAJgHAOgDQANgEARAAIAWAAIAAgKQAAgLgGgHQgHgIgOAAQgHAAgFACIgIAFQgEADgCAEQgCAEAAADIgkAAQAAgIAFgJQAFgJAIgGQAJgHAMgEQAMgFAPAAQANABALADQAMADAIAIQAIAGAEALQAFAJAAAMIAABGQAAAWAGANIAAACIgkAAIgDgHIgBgIIgIAHIgKAGIgLADIgNACQgMAAgKgEgAuBAtQgJAGAAANIABAJQACAEADADIAIAFQAEABAHAAIALgBIAKgEIAHgHIAFgHIAAgdIgTAAQgUgBgKAIgAxCBsQgQgHgMgNQgMgNgHgTQgHgTAAgZIAAgMQAAgYAGgTQAGgTAMgOQALgNAQgGQAQgHAVAAQAUAAAOAFQAPAFAJAJQAKAJAGANQAGAMACAPIglAAQgBgIgDgIQgDgHgFgEQgGgGgHgCQgIgDgLgBQgNABgKAEQgJAFgHAKQgGAJgDANQgEAOAAARIAAAMQAAASAEAOQAEANAHAJQAHAJALAGQAKAEANAAIAQgBIALgDIAIgEIAFgEIAAgrIgsAAIAAgcIBRAAIAABSIgJAKQgGAFgKAFQgJAEgOAEQgNADgSAAQgUAAgRgHgAMVBwIAAhmQAAgJgCgEQgCgFgDgEQgEgDgFgBIgMgDQgLAAgIAGQgIAFgFAIIAABwIgkAAIAAicIAiAAIABASQAIgKAMgGQAMgFAOgBQAMABAJADQAJADAHAHQAGAHAEALQAEAMAAAOIAABmgAGiBwIAAicIAiAAIABARQAGgJAJgGQAJgFAMgBIANACIgBAiIgHgBIgHAAQgNAAgIAFQgIAFgEAGIAABtgAFbBwIAAhmQAAgOgHgIQgHgGgOgBQgLAAgIAGQgIAFgFAIIAABwIgkAAIAAjfIAkAAIAABUQAIgJALgGQAMgFANgBQAMABAJADQAKADAHAHQAGAHAEAMQAEALAAAOIAABmgAB8BwIAAi1IhCAAIAAgfICqAAIAAAfIhDAAIAAC1gAhgBwIAAiCIgYAAIAAgaIAYAAIAAgPQAAgNAEgLQAEgKAHgHQAHgHALgEQAKgDANAAIAKABIAKABIgBAcIgOgBQgMAAgHAHQgGAGAAANIAAAPIAgAAIAAAaIggAAIAACCgApKBwIAAhnQAAgIgCgEQgCgGgEgEQgEgDgFgBIgMgCQgMABgHAGQgIAHgDAIIAAACIAAABIAABqIgkAAIAAhmQAAgIgCgFQgCgFgDgEQgEgDgFgBIgMgDQgMABgHAEQgHAFgEAIIAABxIgkAAIAAicIAhAAIABAQQAIgJAMgFQALgGAPAAQAPAAALAHQAMAFAGANQAIgLAMgHQAMgGAQgBQANABAJADQAKADAHAIQAGAGAEAMQADALAAAOIAABmg");
	this.shape.setTransform(0.1,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-42,229.1,23.1);


(lib.app_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCCC").s().p("AnwPAQhaAAhTgiQhQghhAg8IgPgPQg+hAgihSQgjhVAAhcIAAvdQAAhcAjhVQAihSA+hAIAPgPIAAAAQBAg7BQgiQBTgiBaAAIPfAAQBaAABUAiQBQAiBAA7IAPAQIABAAQA9BBAiBRQAiBVAABbIAAHtIACAAIAAADIgCAAIAAHtQAABbgjBWQghBRg+BBIgPAPQhAA8hQAhQhTAihbAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-96,192.1,192.1);


(lib.app_co = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// company
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#838484").s().p("AFlBEQgJgEgGgGQgGgIgDgJQgDgKAAgLIAAgEQAAgLADgIQADgKAGgHQAGgHAJgEQAJgEALAAQAKAAAJAEQAJAEAGAHQAGAHAEAKQACAIAAALIAAAEQAAALgCAKQgEAJgGAIQgGAGgJAEQgIAEgLAAQgLAAgJgEgAFpgVQgGADgFAGQgFAGgCAGQgCAHAAAJIAAAEQAAAIACAIQACAHAFAHQAFAFAGAEQAHAEAJgBQAIABAHgEQAGgEAFgFQAFgHABgHQADgIAAgIIAAgEQAAgJgDgHQgBgGgFgGQgEgGgIgDQgGgEgIAAQgJAAgHAEgADrBEQgKgEgHgJQgGgJgFgMQgDgMAAgOIAAgQQAAgOADgMQAFgLAGgJQAHgIAKgFQALgEAMgBQALAAAKAEQAJACAGAHQAGAGAFAIQADAJABALIgMAAQAAgJgDgGQgDgIgFgEQgFgEgHgDQgGgDgKAAQgKAAgHAFQgJADgFAHQgGAIgCAKQgDAJAAAMIAAAQQAAAMACAKQADAKAFAHQAGAIAIAEQAHADALAAQASAAAKgJQAJgJACgSIAMAAQgBALgDAIQgFAJgGAGQgGAGgJADQgKADgLAAQgNABgKgFgAAJBEQgIgDgFgHQgFgHgEgKQgDgJAAgLIAAgFQAAgLADgIQADgLAHgGQAEgIAIgDQAJgEAJAAQAJAAAJAEQAHADAFAHQAGAGACAJQADAHABALIAAAGIhKAAIAAADQAAAIACAIQADAIADAFQAFAGAHADQAGADAIAAQAJABAHgEQAIgDAFgIIAIAGIgGAHIgIAGIgKAEQgGABgIAAQgKAAgJgEgAAOgWQgFACgFAEQgEAGgBAGQgDAFgBAHIA9AAIAAgBQAAgHgCgDQgCgHgDgEQgEgGgGgCQgFgDgHAAQgHAAgGADgAg2BHQgEgBgDgDQgDgDgCgGQgCgGAAgHIAAhEIgUAAIAAgKIAUAAIAAgbIAMAAIAAAbIAWAAIAAAKIgWAAIAABEIABAJIADAFQACACACAAIALABIAEgBIAAAKIgMABQgFAAgEgBgAh2BHQgEgBgDgDQgDgDgCgGQgCgGAAgHIAAhEIgTAAIAAgKIATAAIAAgbIAMAAIAAAbIAWAAIAAAKIgWAAIAABEIABAJIADAFQACACACAAIAKABIAFgBIAAAKIgMABQgFAAgEgBgAHBBFQgCgCAAgEQAAgDACgCQACgCAEAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgEAAgCgCgABaBGIAAhnIAMAAIAAAQQAFgIAHgFQAIgFAKAAIAIABIgBALIgHgBQgHAAgEACQgFACgEADQgDADgCAEQgDAEgCAGIAABGgAi1BGIAAhnIAMAAIAABngAj2BGIgchXIgBAGIgbBRIgKAAIgehnIALAAIAZBZIACgLIAahOIAKAAIAbBZIAYhZIAMAAIgeBngAmeBGIAAiBIgxAAIAAgLIBuAAIAAALIgxAAIAACBgAi1g6QgDgDAAgDQAAgDADgDQACgCADAAQAFAAACACQABADAAADQAAADgBADQgCACgFAAQgDAAgCgCg");
	this.shape.setTransform(-101.8,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.2,-8.3,92.8,14.6);


(lib.Android_top_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Android_tbtn_field
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#679E3D").s().p("ACcBdIgPgEQgIgDgHgFQgGgEgFgGQgEgFgDgIQgDgIABgJIAfAAQAAAGADAFQADAFAEAEQAFAEAGACQAHACAHAAQAKAAAGgCQAIgCAEgEQAFgEACgFQADgGAAgGQAAgPgJgIQgJgHgRAAIgXAAIAAgXIAXAAQAIAAAGgCQAHgCADgDQAFgEABgFQACgGAAgGQAAgFgCgFQgCgFgEgEQgFgDgGgCQgHgDgJAAQgHAAgFADQgHABgDADQgFAEgDAFQgCAFAAAFIggAAQAAgMAFgJQAFgJAJgIQAJgGAMgDQALgEANgBQAPAAANAEQANAEAIAGQAJAHAEAKQAFAKAAAMIgBANQgDAGgDAFQgEAEgFAFIgMAHQAPAEAIALQAIAKAAAQQAAANgFAKQgFAKgJAHQgKAHgNAEQgNAEgPAAgAI6BcIAAhSIhTAAIAABSIgfAAIAAi3IAfAAIAABNIBTAAIAAhNIAgAAIAAC3gAGBBcIAAiBIhRCBIggAAIAAi3IAgAAIAACCIBRiCIAgAAIAAC3gAA9BcIgQgrIhGAAIgOArIghAAIBFi3IAbAAIBGC3gAgQAXIA0AAIgbhLgAjIBcIAAi3IB2AAIAAAaIhWAAIAACdgAj/BcIgPgrIhIAAIgPArIghAAIBFi3IAeAAIBFC3gAlNAXIA2AAIgbhLgAm7BcIACiNIg2CNIgXAAIg3iNIAECNIggAAIAAi3IAqAAIA1CMIA1iMIApAAIAAC3g");
	this.shape.setTransform(198.6,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#838484").s().p("AnfBZQgPgHgKgLQgKgMgGgRQgGgRAAgUIAAgIQAAgVAGgRQAGgQAKgNQAKgLAOgGQAOgHARAAQASAAANAHQAOAGAKALQALANAGAQQAFARAAAVIAAAIQAAAUgFARQgGARgLAMQgKALgOAHQgOAFgRABQgQgBgOgFgAnTg+QgJAEgGAHQgFAJgEALQgDAMAAAQIAAAIQAAAPADAMQAEAMAFAIQAHAIAIAEQAIAEAKAAQAWAAAMgQQAKgRABgeIAAgIQgBgQgCgMQgDgLgGgJQgGgHgIgEQgJgEgKgBQgKABgIAEgAHtBcIgPgrIhIAAIgPArIghAAIBGi3IAdAAIBGC3gAGfAXIA1AAIgahLgAExBcIAAhSIhTAAIAABSIggAAIAAi3IAgAAIAABNIBTAAIAAhNIAfAAIAAC3gAArBcIAAi3IB4AAIAAAaIhYAAIAAAzIBMAAIAAAXIhMAAIAAA5IBYAAIAAAagAgZBcIADiNIg3CNIgWAAIg3iNIADCNIgfAAIAAi3IApAAIA1CMIA1iMIAoAAIAAC3gAkoBcIAAidIg5AAIAAgaICTAAIAAAaIg7AAIAACdg");
	this.shape_1.setTransform(-208.3,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261,-10.4,519.9,19);


(lib.Android_bottom_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA7BZQgOgHgKgLQgLgMgFgRQgFgRAAgUIAAgIQAAgVAFgRQAFgQALgNQAKgLAOgGQAOgHARAAQARAAAPAHQAOAGAKALQAKANAFAQQAGARAAAVIAAAIQAAAUgGARQgFARgKAMQgKALgOAHQgOAFgSABQgRgBgOgFgABHg+QgHAEgGAHQgGAJgDALQgDAMgBAQIAAAIQABAPADAMQADAMAGAIQAFAIAJAEQAIAEAKAAQAVAAAMgQQALgRAAgeIAAgIQAAgQgCgMQgEgLgFgJQgFgHgJgEQgJgEgKgBQgKABgJAEgApxBZQgOgHgKgLQgKgLgFgQQgFgQAAgVIAAgNQAAgUAFgQQAFgQAKgMQALgLAOgGQANgHASAAQAQABANAEQANAFAJAIQAJAJAEAMQAGAMABANIggAAQgBgJgDgGQgCgIgFgFQgFgFgGgCQgHgDgKAAQgLAAgIAFQgIAEgGAIQgGAHgCAMQgDAMAAAOIAAANQAAAOADAMQACAKAFAJQAFAIAIAEQAIAFALAAQALAAAHgDQAHgCAFgFQAEgEADgIIAEgPIAgAAQgBANgGAMQgEALgJAJQgKAIgNAFQgNAFgRAAQgQgBgOgFgAsmBfIgEgBIgCAAIAAgZIACAAIAJAAQAFAAAEgBIAGgFIAEgFIAHgQIhAiFIAkAAIArBfIAlhfIAkAAIhHCjQgDAHgGAFQgFAFgIACQgIADgLABgALABcIAAi3IAfAAIAABHIAmAAQAQAAAMAEQANAEAIAHQAIAGAFAKQAFALAAANQAAAMgFALQgFAKgIAIQgIAIgNAEQgMAEgQAAgALfBCIAmAAQAJAAAHgCQAGgDAEgFQAFgDACgHQABgFAAgHQAAgGgBgFQgCgGgFgFQgEgEgGgCQgHgDgJAAIgmAAgAJOBcIAAidIg5AAIAAgaICTAAIAAAaIg6AAIAACdgAHcBcIAAiBIhRCBIggAAIAAi3IAgAAIAACCIBRiCIAgAAIAAC3gADHBcIAAi3IA/AAQAPAAAMADQAMADAIAGQAIAHAFAJQAFAJAAANQgBANgGAKQgIAKgMAGQAHACAGACQAGAEAEAGQAEAFACAHQACAHgBAHQAAANgDALQgFAKgJAHQgHAGgMAEQgNADgOAAgADnBCIAkAAQAIAAAGgCQAFgCAFgDQADgEACgFQACgGABgGQgBgOgGgHQgIgJgQABIglAAgADngNIAgAAQAPAAAIgGQAIgIAAgMQABgOgJgGQgHgGgRAAIgfAAgAgwBcIAAhSIhTAAIAABSIggAAIAAi3IAgAAIAABNIBTAAIAAhNIAfAAIAAC3gAjaBcIgPgrIhIAAIgOArIgiAAIBGi3IAdAAIBGC3gAjyAXIgbhLIgbBLIA2AAgAnCBcIAAidIg5AAIAAgaICTAAIAAAaIg6AAIAACdg");
	this.shape.setTransform(128.1,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Android_bbtn_field
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#679E3D").s().p("AxXFuQgMAAgJgJQgJgIAAgNIAAqfQAAgNAJgIQAJgJAMAAMAivAAAQAMAAAJAJQAJAIAAANIAAKfQAAANgJAIQgJAJgMAAg");
	this.shape_1.setTransform(126.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#838484").s().p("AkAB0IAAgtIh5AAIAAAtIggAAIgBhHIAQAAIAIgKQADgGAEgJQAFgKACgMQADgPABgTIAEhNIB1AAIAACeIAYAAIgCBHgAlQgkQAAAOgCANIgFAUQgDALgEAIIgIAPIBPAAIAAiEIg2AAgAAEBDQgMgGgKgMQgKgLgGgSQgFgQgBgTIAAgKQABgUAFgRQAGgRAKgMQAKgMAMgFQAOgHARAAQARAAAOAHQAOAFALAMQAKAMAGARQAFARAAAUIAAAKQAAATgFAQQgGASgKALQgLAMgOAGQgOAGgQAAQgSAAgOgGgAARhUQgJAEgGAIQgDAIgEAMQgCAMAAAPIAAAKQAAAPACAKQAEANADAHQAGAIAJAFQAIADALAAQAUABAMgRQAMgQAAgdIAAgKQAAgPgDgMQgDgMgGgIQgGgIgIgEQgIgEgLAAQgKAAgIAEgAoXBDQgOgGgKgMQgKgLgGgSQgFgQgBgTIAAgKQABgUAFgRQAGgRAKgMQAKgMAOgFQAOgHARAAQARAAAOAHQAOAFALAMQAKAMAFARQAGARAAAUIAAAKQAAATgGAQQgFASgKALQgLAMgOAGQgNAGgRAAQgSAAgOgGgAoLhUQgIAEgFAIQgGAIgDAMQgDAMAAAPIAAAKQAAAPADAKQADANAGAHQAFAIAJAFQAIADALAAQAUABAMgRQALgQAAgdIAAgKQAAgPgCgMQgEgMgFgIQgGgIgIgEQgJgEgKAAQgKAAgJAEgAJ/BHIAAi4IB4AAIAAAaIhYAAIAAA0IBMAAIAAAZIhMAAIAAA3IBYAAIAAAagAHsBHIAAi4IB4AAIAAAaIhYAAIAAA0IBMAAIAAAZIhMAAIAAA3IBZAAIAAAagAGmBHIAAhQIhTAAIAABQIgfAAIAAi4IAfAAIAABOIBTAAIAAhOIAgAAIAAC4gACQBHIAAi4IB1AAIAAAaIhWAAIAAAtIAmAAQAQAAAMAFQANAEAIAHQAIAHAFALQAEAIABANQgBAMgEALQgFALgIAHQgIAIgNAEQgMAFgQAAgACvAtIAmAAQAJAAAGgCQAHgDAEgFQAFgEABgGQACgGAAgHQAAgGgCgFQgBgEgFgEQgEgEgHgDQgGgCgJAAIgmAAgAjIBHIAAi4IBHAAQAQAAAMAFQANAFAJAHQAIAIAFALQAFALAAANQAAANgFALQgFAKgIAIQgJAHgNAEQgMACgQAAIgmAAIAABFgAingWIAmAAQAJAAAHgCQAGgDAFgEQAEgEADgGQABgGAAgGQAAgHgBgGQgDgFgEgGQgFgEgGgCQgHgEgJAAIgmAAgAqFBHIAAieIhRAAIAACeIghAAIAAi4ICSAAIAAC4g");
	this.shape_2.setTransform(-160.9,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.9,-36.7,478,73.4);


(lib.age_limit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#281709").s().p("AjfCKIAAkTIG/AAIAAETgAjaCFIG1AAIAAkJIm1AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQA0QgGgCgFgDQgEgEgDgGQgCgFAAgIIABgIQABgEADgEIAGgGQAEgCAFAAIgIgEIgFgFIgEgHIgBgIQAAgHADgGQACgFAEgEQAEgEAGgBQAGgCAGAAQAFAAAGACQAFABAFAEQAEAEACAFQADAGAAAHIgCAIIgDAHIgGAFIgHAEIAIACQAEADADADIAEAIQABAEAAAEQAAAIgCAFQgDAGgEAEQgFADgGACQgGACgGAAQgHAAgGgCgAgNADIgIAFQgDADgCAEQgCAEAAAGQAAAFACAEQACAEADADIAIAEQAFACAFAAQAEAAAFgCIAIgEIAFgHQACgEAAgFQAAgGgCgEQgCgEgEgDQgDgDgFgCQgEgBgEAAQgFAAgFABgAgMgsIgHAEQgDADgBAEQgCAEAAAFQAAAEACAEQABAEADADIAHAEIAJABQADAAAEgBIAHgEIAFgHQACgEAAgEQAAgFgCgEQgCgEgDgDQgDgDgEgBQgEgCgDAAIgJACgAhVA1IAAheIgdAKIAAgIIAkgNIACAAIAABpgABKAqIAAgjIggAAIAAgHIAgAAIAAgiIAJAAIAAAiIAgAAIAAAHIggAAIAAAjg");
	this.shape_1.setTransform(1.7,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-13.9,44.9,27.8);


(lib.app_raiting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// raiting_stars
	this.raiting_stars = new lib.raiting_stars();
	this.raiting_stars.setTransform(-72.9,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.raiting_stars).wait(1));

	// raiting_q
	this.raiting_q = new lib.raiting_q();
	this.raiting_q.setTransform(90.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.raiting_q).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.8,-12.1,236.6,23.2);


(lib.app_data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// app_title
	this.instance = new lib.app_title();
	this.instance.setTransform(77.4,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// app_img
	this.app_img = new lib.app_img();
	this.app_img.setTransform(-162.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.app_img).wait(1));

	// age_limit
	this.age_limit = new lib.age_limit();
	this.age_limit.setTransform(238.3,-78);

	this.timeline.addTween(cjs.Tween.get(this.age_limit).wait(1));

	// app_co
	this.app_co = new lib.app_co();
	this.app_co.setTransform(110.2,45.6);

	this.timeline.addTween(cjs.Tween.get(this.app_co).wait(1));

	// app_raiting
	this.app_raiting = new lib.app_raiting();
	this.app_raiting.setTransform(110.2,88.1);

	this.timeline.addTween(cjs.Tween.get(this.app_raiting).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("A5rAKIAAgTMAzXAAAIAAATg");
	this.shape.setTransform(126.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259,-93.1,550,193.3);


(lib.dialog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"iOS":0,"Android":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// app_data
	this.app_data = new lib.app_data();
	this.app_data.setTransform(-1,-15.1);

	this.timeline.addTween(cjs.Tween.get(this.app_data).wait(1).to({y:-29.8},0).wait(1));

	// top_buttons
	this.iOS_top_btn = new lib.iOS_top_btn();
	this.iOS_top_btn.setTransform(0,-184.8);

	this.Android_top_btn = new lib.Android_top_btn();
	this.Android_top_btn.setTransform(0.4,-185.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.iOS_top_btn}]}).to({state:[{t:this.Android_top_btn}]},1).wait(1));

	// bottom_buttons
	this.iOS_buttom_btn = new lib.iOS_buttom_btn();
	this.iOS_buttom_btn.setTransform(0,180.9);

	this.Android_bottom_btn = new lib.Android_bottom_btn();
	this.Android_bottom_btn.setTransform(18.5,158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.iOS_buttom_btn}]}).to({state:[{t:this.Android_bottom_btn}]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrHAjTQg6ABgpgpQgpgpABg6MAAAhCPQgBg6ApgpQApgpA6ABMBWPAAAQA6gBApApQApApgBA6MAAABCPQABA6gpApQgpApg6gBg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egs1AjTQgMAAgIgIQgKgJABgMMAAAhFrQgBgMAKgIQAIgKAMABMBZrAAAQAMgBAIAKQAKAIgBAMMAAABFrQABAMgKAJQgIAIgMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-226,580,452);


(lib.d_window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// cancel_btn
	this.cancel_btn = new lib.cancel_btn();
	this.cancel_btn.setTransform(-205,-187.6);
	new cjs.ButtonHelper(this.cancel_btn, 0, 1, 2, false, new lib.cancel_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cancel_btn).to({y:-170.6},7,cjs.Ease.get(-1)).to({y:-153.6},7,cjs.Ease.get(1)).wait(1));

	// url_btn
	this.url_btn = new lib.url_btn();
	this.url_btn.setTransform(0,-0.5,1,0.871);
	new cjs.ButtonHelper(this.url_btn, 0, 1, 2, false, new lib.url_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.url_btn).to({scaleY:0.94,y:-0.3},7,cjs.Ease.get(-1)).to({scaleY:1,y:0},7,cjs.Ease.get(1)).wait(1));

	// dialog
	this.dialog = new lib.dialog();
	this.dialog.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.dialog).to({y:16.5},7,cjs.Ease.get(-1)).to({y:33.5},7,cjs.Ease.get(1)).wait(1));

	// budge
	this.budge = new lib.budge();
	this.budge.setTransform(0,-178);
	this.budge.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.budge).to({y:-205,alpha:0.5},7,cjs.Ease.get(-1)).to({y:-232,alpha:1},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-226.5,580,452);


// stage content:



(lib.dialog_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
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
			
			var StageScaleX = windowSize.width / 640;
			var StageScaleY = windowSize.height / 579;
			var StageScale = 1;
			
			_this.d_window.x = windowSize.width/2;
			_this.d_window.y = windowSize.height/2;
			_this.d_window.scaleX = _this.d_window.scaleY = StageScale;
			
			if (windowSize.width < 640) {
				_this.d_window.scaleX = _this.d_window.scaleY = StageScaleX;
			}
			
			if (windowSize.height < 579) {
				_this.d_window.scaleX = _this.d_window.scaleY = StageScaleY;
			}
			
			if (windowSize.width < 640 && windowSize.height < 579) {
				_this.d_window.scaleX = _this.d_window.scaleY = StageScaleX * StageScaleY;
			}
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		//Actions
		
		_this.d_window.alpha = 0;	
		var tween = createjs.Tween.get(this.d_window, {loop: false}).to({alpha:1}, 300).call(BudgeOpen);
		var BudgeOpen = BudgeOpen();	
		function BudgeOpen(){
			_this.d_window.gotoAndPlay(1);
		}
		
		var isMobile = {
		    Android: function() {
		        return navigator.userAgent.match(/Android/i);
		    },
			iOS: function() {
		        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		};
		
		if( isMobile.iOS() ){}
		
		if( isMobile.Android() ){ 
			_this.d_window.dialog.gotoAndPlay(1);
			_this.d_window.budge.gotoAndPlay(1);
		}
		
		this.d_window.url_btn.addEventListener("click", RedirectUrl);
		function RedirectUrl() {
			window.open("https://www.google.com.ua", "_blank");
		}
		
		this.d_window.cancel_btn.addEventListener("click", CancelBtn);
		function CancelBtn() {
			stage.canvas.style.display = 'none';
		}
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// d_window
	this.d_window = new lib.d_window();
	this.d_window.setTransform(480,530.7);

	this.timeline.addTween(cjs.Tween.get(this.d_window).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(670,784.2,580,452);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
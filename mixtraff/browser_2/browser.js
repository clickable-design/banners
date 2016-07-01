(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/stripe.png?1467374644361", id:"stripe"}
	]
};



// symbols:



(lib.stripe = function() {
	this.initialize(img.stripe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,199);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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AAASQAAASgFAPQgGAPgJALQgKALgOAGQgOAHgSAAQgTAAgOgHgARFjKQgIAEgFAHQgGAHgDAKQgDAKAAAMQAAAMADAKQADAKAGAHQAFAHAIAEQAIAEAKAAQAKAAAIgEQAIgEAGgHQAFgHADgKQADgKAAgMQAAgMgDgKQgDgKgFgHQgGgHgIgEQgIgEgKAAQgKAAgIAEgAHUhLQgOgGgJgLQgJgLgFgPQgFgPAAgTQAAgPADgLQACgMAGgJQAEgJAHgHQAHgHAIgEQAIgFAJgCQAIgCAJAAQANAAAKADQAKADAIAEQAHAFAGAFIAIAMQAEAHABAGIACALIghAAIgEgLIgEgGIgGgFIgJgEQgFgBgIAAIgHABIgIACQgEACgEAEQgFAEgDAGQgDAGgCAJQgCAIAAAMQAAANACAKQADAKAFAHQAFAHAHAEQAHADAJAAQALAAAGgDQAHgDAEgFQAEgEACgFIADgJIAgAAQgCAPgHAKQgGALgJAHQgJAIgLADQgLAEgMAAQgSAAgNgGgAE4hGIgGgBIgHgCIAAgeIAHADIAJABQAHAAAEgEQAEgEABgGIg3h2IAlAAIAjBVIAghVIAjAAIgyB0QgKAYgLALQgLALgOAAgAg2hLQgOgGgJgLQgJgLgFgPQgFgPAAgTQAAgPADgLQACgMAGgJQAEgJAHgHQAHgHAIgEQAIgFAJgCQAIgCAJAAQANAAAKADQAIADAIAEQAHAFAGAFIAIAMQAEAHABAGIACALIghAAIgEgLIgEgGIgEgFIgJgEQgFgBgIAAIgHABIgIACQgEACgEAEQgFAEgDAGQgDAGgCAJQgCAIAAAMQAAANACAKQADAKAFAHQAFAHAHAEQAHADAJAAQALAAAGgDQAHgDACgFQAEgEACgFIADgJIAgAAQgCAPgHAKQgGALgJAHQgJAIgJADQgLAEgMAAQgSAAgNgGgAnrhGIgGgBIgHgCIAAgeIAHADIAJABQAHAAAEgEQAEgEABgGIg3h2IAlAAIAjBVIAghVIAjAAIgyB0QgKAYgLALQgLALgOAAgA0UhMQgOgGgJgLQgKgLgEgPQgFgPAAgSQAAgSAFgPQAEgPAKgLQAJgLAOgGQAPgHATAAQARAAAOAHQAOAGAKALQAKALAFAPQAFAPAAASQAAASgFAPQgFAPgKALQgKALgOAGQgOAHgRAAQgTAAgPgHgA0EjKQgIAEgGAHQgFAHgDAKQgDAKAAAMQAAAMADAKQADAKAFAHQAGAHAIAEQAIAEAKAAQAKAAAIgEQAIgEAFgHQAGgHADgKQACgKAAgMQAAgMgCgKQgDgKgGgHQgFgHgIgEQgIgEgKAAQgKAAgIAEgAaBhJIAAieIAhAAIAAA+IAoAAIAMACQAGABAHADQAGADAFAGQAFAFADAIQAEAIAAAMQAAAMgEAIQgDAIgFAGQgFAFgGADIgMAEIgKACgAaihkIAcAAIAJgBQAFgBAEgCQAEgCACgEQADgFAAgHQAAgHgDgEQgCgEgEgDQgEgCgFAAIglgBgAYbhJIAAiDIgwAAIAAgbICBAAIAAAbIgwAAIAACDgAW6hJIAAhrIgBAAIg+BrIghAAIAAieIAfAAIAABrIABAAIA+hrIAhAAIAACegAS+hJIAAieIBOAAQAJAAAIACQAHACAFADQAGADADAEQAEAEACAFIADAJIABAJIgBAKIgDAJIgGAHIgJAGQAIADAEAEQAFAFADAFQACAFABAFIABALQAAALgEAJQgEAJgIAGQgHAGgLADQgLADgOAAgATehkIApAAQAFAAAFgCQAFgBADgDQADgCACgEQACgEAAgGQAAgHgCgEQgCgEgEgCIgIgDIgygBgATeipIAoAAIAJgBIAHgDIAFgFQABgEAAgFQAAgFgBgDQgCgDgDgCQgDgCgEgBIgIgBIgpAAgAPRhJIAAhHIg9AAIAABHIghAAIAAieIAhAAIAAA8IA9AAIAAg8IAhAAIAACegAM7hJIgKghIg6AAIgLAhIgjAAIA5ieIAlAAIA4CegAMoiFIgUg+IAAAAIgUA+IAoAAgAJxhJIAAiDIgwAAIAAgbICBAAIAAAbIgwAAIAACDgACihJIAAg+IgrAAQgGAAgEADQgFACgDAGQgDAFgBAKIgBAXIgEANIgiAAIADgFIABgFIAGgpQABgGACgEQACgEAFgEQAEgDAHgCIgHgDQgDgBgEgFQgFgFgDgHQgDgIAAgIIABgLIADgKIAFgIIAHgHQAFgEAGgCIAMgDIAMgCIBPAAIAACegABtjJIgEACIgEAEIgDAFIgBAIQAAAFABAEIAEAGIAFADIAHACIAwABIAAgqIglAAIgCAAgAi9hJIAAiDIgwAAIAAgbICBAAIAAAbIgwAAIAACDgAlwhJIAAieIBzAAIAAAbIhUAAIAAAjIBOAAIAAAbIhOAAIAAAoIBYAAIAAAdgArnhJIAAhHIg9AAIAABHIghAAIAAieIAhAAIAAA8IA9AAIAAg8IAhAAIAACegAvVhJIAAieIB0AAIAAAbIhUAAIAAAjIBNAAIAAAbIhNAAIAAAoIBYAAIAAAdgAwUhJIAAiEIgBAAIgdCEIggAAIgdiEIgBAAIAACEIgeAAIAAieIAwAAIAcB7IAAAAIAch7IAwAAIAACegA1xhJIgxhGIgQAQIAAA2IghAAIAAieIAhAAIAABAIA8hAIAqAAIhABBIBEBdgA5mhJIAAieIBzAAIAAAbIhUAAIAAAjIBOAAIAAAbIhOAAIAAAoIBYAAIAAAdgA75hJIAAieIBIAAQAMAAAKAEQAJADAGAHQAGAGADAJQADAKAAAMQAAALgDAJQgEAJgHAHQgGAHgKADQgKAEgMAAIgkAAIAAA5gA7YidIAfAAQALAAAHgGQAGgFAAgMQAAgHgBgEQgCgEgDgDQgDgDgFgBQgEgCgGAAIgfAAg");
	this.shape.setTransform(0.5,-59.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.1,-83.2,357.3,47.3);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0)","rgba(255,255,255,0.961)","#FFFFFF"],[0,0.314,1],0.4,-91.4,0.4,153.6).ss(4.7,1,1).p("ASxAAQAAHxlgFgQlgFgnxAAQnwAAlglgQlglgAAnxQAAnwFglgQFglgHwAAQHxAAFgFgQFgFgAAHwg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-122.5,245,245);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmaGtQglAAgZgaQgbgaAAgkQABgGADgEIGUqqIAAgCQAXglAPgOQAYgYAdAAQAdAAAYAYQAPAOAXAlIABABIGUKpQADAGABAGQAAAkgbAaQgaAagkAAgAgWlsQgIAJgSAbImQKjQADAOAKAJQALAHAOAAIM1AAQANAAAMgIQAKgJADgNImQqhQgSgdgHgHQgOgQgKABQgKAAgMANgAgfEMQgNgOAAgTQAAgUANgNQAOgOARAAQASAAAOAOQANANAAAUQAAATgNAOQgOANgSAAQgRAAgOgNgAgXBrQgHgHgBgKIAAjxQABgKAHgIQAIgHAKAAQAKAAAGAHQAIAIgBAKIAADxQABAKgIAHQgHAIgJAAQgKAAgIgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-42.9,100,85.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C21D3E","#3D0B55"],[0,0.894],0,512,0,-512).s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C21D3E","#3D0B55"],[0,0.894],0,-512,0,512).s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRB/ICIj9IAaAAIiID9gAAmBrQgTgTAAgaQAAgbATgSQASgRAaAAQAbAAASARQATASAAAbQAAAagTATQgSASgbAAQgaAAgSgSgAA/AqQgIAIAAAMQAAALAIAIQAIAIALAAQAMAAAIgIQAIgIAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgAh/gQQgSgSAAgbQAAgaASgTQATgSAaAAQAbAAASASQATATAAAaQAAAbgTASQgSARgbAAQgaAAgTgRgAhlhQQgIAIAAALQAAALAIAJQAIAHALAAQAMAAAIgHQAIgJAAgLQAAgLgIgIQgIgIgMAAQgLAAgIAIg");
	this.shape.setTransform(33.9,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBeQgTghAAg9QAAg8ATghQATghAuAAQAvAAATAhQATAhAAA8QAAA9gTAhQgTAhgvAAQguAAgTghgAgchBQgGAWgBArQABAqAGAXQAIAXAUAAQAVAAAHgXQAGgXAAgqQAAgrgGgWQgHgVgVAAQgUAAgIAVg");
	this.shape_1.setTransform(-1,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBeQgTghAAg9QAAg8ATghQATghAuAAQAvAAATAhQATAhAAA8QAAA9gTAhQgTAhgvAAQguAAgTghgAgchBQgHAWAAArQAAAqAHAXQAIAXAUAAQAVAAAHgXQAGgXAAgqQAAgrgGgWQgHgVgVAAQgUAAgIAVg");
	this.shape_2.setTransform(-20.5,-2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEB7IAAipIg5AAIAAghQAYgBAJgCQAOgDAHgJQAHgIADgKIACgLIAoAAIAAD2g");
	this.shape_3.setTransform(-41.7,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-19.5,104,39);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_47 = new cjs.Graphics().p("AkLO/QmNmJgDovQgEotGKmOQGAmGIjgKMAAOAqJQoigEmFmCg");
	var mask_graphics_48 = new cjs.Graphics().p("AjaQwQnAlPhQopQhQonFOnAQFJm5IahVMAGEApuQhhANheAAQmuAAlokOg");
	var mask_graphics_49 = new cjs.Graphics().p("AiXR/QnqkNicoZQicoXENnqQEJniIJifMALxAofQi7A0i1AAQlJAAk1irg");
	var mask_graphics_50 = new cjs.Graphics().p("AhFSsQoLjHjln+Qjkn9DHoKQDEoCHwjmMAROAmeQkIBzkLAAQjxAAjxhdg");
	var mask_graphics_51 = new cjs.Graphics().p("AAYS2Qofh9kpnaQkpnaB9ofQB7oXHLkpMAWYAjuQlGDHlnAAQicAAihglg");
	var mask_graphics_52 = new cjs.Graphics().p("ACDScQorgxlomsQlnmsAworQAwokGelkMAbGAgRQlzEwnUAAQhBAAhCgFg");
	var mask_graphics_53 = new cjs.Graphics().p("ArSMEQmfl2gdotQgdolFpmaIfTcOQlzGRokAcQgpACgnAAQn7AAmBlbg");
	var mask_graphics_54 = new cjs.Graphics().p("Ap5MsQnPk6hpojQhoobEsnJMAi6AXoQk4HAocBoQiKAbiFAAQmJAAlajqg");
	var mask_graphics_55 = new cjs.Graphics().p("AoGNlQn2j2i1oSQixoGDrntMAl1ASkQj3HnoICyQjgBMjbAAQkpAAkhiOg");
	var mask_graphics_56 = new cjs.Graphics().p("Al+OrQoTivj8nzQj3npCkoJMAoDANKQiyIFnqD3QknCVkyAAQjSAAjahHg");
	var mask_graphics_57 = new cjs.Graphics().p("AjiPZQomhkk+nMQk5nBBaobMApfAHhQhoIXnEE5QleDzmTAAQh8AAiDgYg");
	var mask_graphics_58 = new cjs.Graphics().p("Ag0PuQovgXl7mbQl0mUAPogMAqIABuQgeIfmUF1QmEFloHAAIg8gBg");
	var mask_graphics_59 = new cjs.Graphics().p("AtcK8Qmoldg9odMAp9gEIQAvIfldGpQljGwosA3QhKAHhGAAQnUAAl3k0g");
	var mask_graphics_60 = new cjs.Graphics().p("ArVMoQnVkfiHoPMAo/gJ5QB5IVkfHTQkjHdogCDQioAoigAAQlpAAlJjJg");
	var mask_graphics_61 = new cjs.Graphics().p("ApON+Qn3jbjPn6MAnOgPbQDCH/jbH2QjfIBoJDNQj4Bij2AAQkNAAkMh1g");
	var mask_graphics_62 = new cjs.Graphics().p("AnGO+QoSiTkSnZMAktgUsQEHHfiUIPQiWIbnnETQk7CylOAAQi4AAi+g2g");
	var mask_graphics_63 = new cjs.Graphics().p("AlDQoQoghJlSmuMAhggZlQFGG2hJIhQhKIom8FUQltEWm0AAQhgAAhkgNg");
	var mask_graphics_64 = new cjs.Graphics().p("Ax1MDIdp99QF/GFADIlQADIumJGNQmJGNotADIgJAAQogAAmGl4g");
	var mask_graphics_65 = new cjs.Graphics().p("AwuO4MAZNghxQGyFMBPIgQBQIolOHAQlPG/onBRQhsAPhnAAQmkAAljkCg");
	var mask_graphics_66 = new cjs.Graphics().p("AvgROMAUTgk8QHcENCZIQQCcIXkOHqQkNHqoZCcQjDA5i/AAQlAAAkuihg");
	var mask_graphics_67 = new cjs.Graphics().p("AuLTCMAPAgnZQH8DJDhH2QDkH+jHIJQjHIKn+DlQkPB6kVAAQjnAAjqhWg");
	var mask_graphics_68 = new cjs.Graphics().p("AswUTMAJcgpGQIRCBEjHSQEpHah9IfQh9IhnaEpQlLDRlxAAQiSAAiXghg");
	var mask_graphics_69 = new cjs.Graphics().p("ArTU+MADrgp/QIeA2FhGlQFoGsgxIrQgxItmsFoQl3E8neAAQg3AAg4gEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_graphics_47,x:-65.2,y:70.5}).wait(1).to({graphics:mask_graphics_48,x:-55.9,y:70.8}).wait(1).to({graphics:mask_graphics_49,x:-46.9,y:72.5}).wait(1).to({graphics:mask_graphics_50,x:-38.2,y:75.4}).wait(1).to({graphics:mask_graphics_51,x:-30,y:79.4}).wait(1).to({graphics:mask_graphics_52,x:-22.5,y:84.4}).wait(1).to({graphics:mask_graphics_53,x:-16,y:90.6}).wait(1).to({graphics:mask_graphics_54,x:-10.6,y:97.8}).wait(1).to({graphics:mask_graphics_55,x:-6.3,y:101.2}).wait(1).to({graphics:mask_graphics_56,x:-3,y:101.1}).wait(1).to({graphics:mask_graphics_57,x:-1,y:100.9}).wait(1).to({graphics:mask_graphics_58,x:-0.2,y:100.8}).wait(1).to({graphics:mask_graphics_59,x:-0.1,y:100.8}).wait(1).to({graphics:mask_graphics_60,x:1.2,y:101}).wait(1).to({graphics:mask_graphics_61,x:3.8,y:101.1}).wait(1).to({graphics:mask_graphics_62,x:7.5,y:101.2}).wait(1).to({graphics:mask_graphics_63,x:12.2,y:94.7}).wait(1).to({graphics:mask_graphics_64,x:18.1,y:87.9}).wait(1).to({graphics:mask_graphics_65,x:25.1,y:82.2}).wait(1).to({graphics:mask_graphics_66,x:32.9,y:77.6}).wait(1).to({graphics:mask_graphics_67,x:41.3,y:74.1}).wait(1).to({graphics:mask_graphics_68,x:50.1,y:71.7}).wait(1).to({graphics:mask_graphics_69,x:59.3,y:70.6}).wait(1));

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,179,0,0)","rgba(255,190,0,0.957)"],[0,0.686],-65.7,-170.3,-62.3,89.7).s().p("AqSUOIAAmQIAZAAQHIAAFAlDQFClCAAnFQAAnHlClDQkEkFldgyQGsAzE8E+QF9F9AAIbQAAIZl9F8Ql7F9oaAAIgTAAg");
	this.shape.setTransform(66.1,70.9);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(47).to({_off:false},0).wait(23));

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("Aqm1EQIigFGLF8QGUGDAMIvQAMItmDGUQl6GNoiASg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AsH0qQIchSG9FAQHHFFBbIoQBbIllGHHQlAG/oYBgg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AtmznQIMieHlD9QHwECCpIVQCoITkBHwQj+HooFCrg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Au/x+QHvjnIFC1QIPC5DzH4QDyH4i5IOQi1IGnqDzg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AwTvxQHKkrIbBqQIjBsE3HQQE4HRhsIiQhqIbnCE3g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AxetCQGblpIkAdQItAdF2GfQF2GfgdItQgdIlmRFzg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Ayip0QFjmfIkgxQIrgzGtFmQGtFmAzIrQAxIjlYGpg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AzcmJQElnOIWh/QIeiBHcEmQHcElCBIfQB/IWkZHVg");
	var mask_1_graphics_33 = new cjs.Graphics().p("A0LiKQDhnyH/jKQIIjNH/DfQIBDfDNIJQDJH9jUH4g");
	var mask_1_graphics_34 = new cjs.Graphics().p("A0sCDQCYoLHdkQQHmkVIZCUQIcCUEUHmQEQHciKIQg");
	var mask_1_graphics_35 = new cjs.Graphics().p("A0/GcQBMobGylRQG6lXIoBGQIrBGFXG6QFRGwg+Ifg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AvJkHQGFmTIvgJQItgJGSGEQGLF8AQIjMgqJAAtQgDoiF+mJg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Aw5jTQFHnFIohZQImhZHGFIQG9FCBdIZMgpoAGsQhPodFCm7g");
	var mask_1_graphics_38 = new cjs.Graphics().p("AyGiNQEEnvIWimQITimHwEEQHmEACpIFMgoQAMjQicoMEAnlg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Ayvg3QC7oPH5jwQH5jwINC7QIGC4DxHrMgmEASGQjlnxC4oEg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AyyArQBuoiHSk1QHRk2IjBvQIaBtE1HDMgjHAXUQkpnLBtobg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AyQCcQAfosGhl1QGhl0ItAgQIkAfFyGTI/ccEQlnmcAfolg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AxHEYQgworFomsQFomrIrgwQIjgvGnFaMgbJAgQQmdllgvokg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AvaGeQh+ofEnnbQEonaIfh/QIXh8HUEbMgWSAjyQnMknh9oXg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AtLIoQjKoKDhn9QDhoAIKjLQH+jGH3DVMgQ+AmlQnyjijHoAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AqeKzQkTnnCXoYQCWobHokSQHckOIQCMMgLWAonQoLiakNnfg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AnXM+QlVm8BJooQBIoqG8lVQGxlPIfBAMgFeApzQobhOlPmzg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AkJPFQmQmGgHovQgHotGHmQQF9mKIjgNMAAhAqJQoiAAmImAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:65,y:70.1}).wait(1).to({graphics:mask_1_graphics_26,x:55.6,y:69.3}).wait(1).to({graphics:mask_1_graphics_27,x:46.3,y:67.1}).wait(1).to({graphics:mask_1_graphics_28,x:37.4,y:63.7}).wait(1).to({graphics:mask_1_graphics_29,x:29,y:59.2}).wait(1).to({graphics:mask_1_graphics_30,x:21.4,y:53.5}).wait(1).to({graphics:mask_1_graphics_31,x:14.9,y:46.7}).wait(1).to({graphics:mask_1_graphics_32,x:9.5,y:38.9}).wait(1).to({graphics:mask_1_graphics_33,x:5.2,y:30.4}).wait(1).to({graphics:mask_1_graphics_34,x:2.1,y:21.5}).wait(1).to({graphics:mask_1_graphics_35,x:0.2,y:12.2}).wait(1).to({graphics:mask_1_graphics_36,x:-0.2,y:5}).wait(1).to({graphics:mask_1_graphics_37,x:-1,y:14.5}).wait(1).to({graphics:mask_1_graphics_38,x:-3.2,y:23.8}).wait(1).to({graphics:mask_1_graphics_39,x:-6.5,y:32.7}).wait(1).to({graphics:mask_1_graphics_40,x:-11,y:41.1}).wait(1).to({graphics:mask_1_graphics_41,x:-16.7,y:48.7}).wait(1).to({graphics:mask_1_graphics_42,x:-23.4,y:55.3}).wait(1).to({graphics:mask_1_graphics_43,x:-31.2,y:60.8}).wait(1).to({graphics:mask_1_graphics_44,x:-39.7,y:65.1}).wait(1).to({graphics:mask_1_graphics_45,x:-48.6,y:68.2}).wait(1).to({graphics:mask_1_graphics_46,x:-57.8,y:70.1}).wait(1).to({graphics:mask_1_graphics_47,x:-65.6,y:70.6}).wait(1).to({graphics:null,x:0,y:0}).wait(22));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,179,0,0)","rgba(255,190,0,0.957)"],[0,0.686],64.3,-170,67.7,90).s().p("AJ6URQoKgJlyl0Ql9l8AAoZQAAobF9l9QFSlUHUgjQl8AlkXEYQlCFDAAHHQAAHFFCFCQE2E4GzALIAGAAIAAGQIgGAAg");
	this.shape_1.setTransform(-63.9,70.6);
	this.shape_1._off = true;

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25).to({_off:false},0).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0)","rgba(255,255,255,0.961)","rgba(255,255,255,0)"],[0,0.478,1],1.3,-77.9,1.3,102.1).ss(2,1,1).p("AXDAAQAAJimwGwQmwGxpjAAQphAAmxmxQmwmwAApiQAAphGwmxQGxmwJhAAQJjAAGwGwQGwGxAAJhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.5,-148.5,297,297.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.957)"],[0,0.686],0,-130,0,130).s().p("AuWOUQl8l9AAoYQAAobF8l8QFVlVHUgjQl9AlkZEYQlCFCAAHIQAAHGFCFCQFDFCHGAAQHHAAFClCQFClCABnGQgBnIlClCQkGkGldgxQGtA0E9E+QF9F8AAIbQAAIYl9F9Ql8F9oaAAQoZAAl9l9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-129.7,260,259.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlVFWQiNiOgBjIQAAgUACgUQANitB/iAQCOiNDHgBQDIABCOCNQB/CAAOCtIABAoQAADIiOCOQiOCOjIAAQjHAAiOiOgAkukuQhxBxgKCaQgDASAAARQAACxB+B+QB+B+CwAAQCxAAB+h+QB+h+AAixQAAgRgCgSQgMiahwhxQh+h+ixAAQiwAAh+B+g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.4,-48.4,96.8,96.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.961)","#FFFFFF"],[0,0.314,1],-13.2,0.6,34.6,0.6).s().p("AjuATIAAglIHdAAIAAAlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-2,47.8,4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-45.5,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-141.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.9,-83,408.2,115.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).rr(-165,-35,330,70,35);
	this.shape.setTransform(-5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-31,332,72);


(lib.Символ4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stripe();
	this.instance.setTransform(-3.1,-122.3,1,0.652);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-122.3,6,129.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,scaleY:1.02},2,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05},3,cjs.Ease.get(1)).to({scaleX:1.03,scaleY:1.03},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-42.9,100,85.8);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(21));

	// Слой 1 - копия
	this.instance = new lib.Символ24();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},20).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_86 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(86).call(this.frame_86).wait(1));

	// FlashAICB
	this.instance = new lib.Символ27();
	this.instance.setTransform(4,-10.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRB/ICIj9IAaAAIiID9gAAmBrQgTgTAAgaQAAgbATgSQASgRAaAAQAbAAASARQATASAAAbQAAAagTATQgSASgbAAQgaAAgSgSgAA/AqQgIAIAAAMQAAALAIAIQAIAIALAAQAMAAAIgIQAIgIAAgLQAAgMgIgIQgIgIgMAAQgLAAgIAIgAh/gQQgSgSAAgbQAAgaASgTQATgSAaAAQAbAAASASQATATAAAaQAAAbgTASQgSARgbAAQgaAAgTgRgAhlhQQgIAIAAALQAAALAIAJQAIAHALAAQAMAAAIgHQAIgJAAgLQAAgLgIgIQgIgIgMAAQgLAAgIAIg");
	this.shape.setTransform(14.5,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAEB7IAAipIg5AAIAAggQAXgCAKgCQAOgDAHgJQAHgIADgKIACgKIAoAAIAAD1g");
	this.shape_1.setTransform(-22.3,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BqQgWgTgDgjIAxAAQACAQAJAJQAIAJAQAAQAPAAAKgOQAJgMAAgTQAAgUgIgNQgJgKgRAAQgJAAgGACQgMACgGALIgrgCIARiHICGAAIAAAqIhjAAIgJA2IASgKQALgEANAAQAeAAAXAUQAXAVAAAlQAAAjgWAbQgWAbgqAAQgjAAgXgTg");
	this.shape_2.setTransform(-20.7,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBeQgTghAAg9QAAg8ATghQATghAuAAQAuAAAUAhQATAhAAA8QAAA9gTAhQgUAhguAAQguAAgTghgAgchBQgGAWAAArQAAAqAGAXQAIAXAUAAQAVAAAHgXQAHgXgBgqQABgrgHgWQgHgVgVAAQgUAAgIAVg");
	this.shape_3.setTransform(-10.7,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEB7IAAipIg5AAIAAggQAXgCAJgCQAPgDAIgJQAFgIAEgKIACgKIAoAAIAAD1g");
	this.shape_4.setTransform(-32,-5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTB8QAAgbALgWQALgZAmgbQAggXAKgJQAPgRAAgTQAAgQgJgKQgIgLgRAAQgUAAgIARQgEAKgBAUIgwAAQACggAKgTQATglAyAAQAmAAAXAWQAXAWAAAkQAAAbgQATQgLAOgZASIgTAOIgXASQgHAHgFAHIBqAAIAAArg");
	this.shape_5.setTransform(-30.3,-5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBdQgLgSgBgeIAwAAQAAAPAFAKQAJARAWAAQANAAALgJQAKgKAAgSQAAgZgTgIQgLgFgXAAIAAggQAWgBAJgFQAQgGAAgXQAAgNgIgKQgIgIgNgBQgRAAgIAMQgIAKAAATIguAAQABgSAGgRQAGgPANgMQAJgJANgEQANgFATAAQAiAAAWASQAWASAAAgQAAAVgNAQQgJAJgJADQAHAAANAKQASARAAAeQAAAfgVAZQgWAXgqAAQg0AAgUgig");
	this.shape_6.setTransform(-30.4,-4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALB7IAAg2IhhAAIAAgqIBaiVIA2AAIAACZIAdAAIAAAmIgdAAIAAA2gAgxAfIA8AAIAAhog");
	this.shape_7.setTransform(-30.2,-4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BqQgWgTgDgjIAxAAQACAQAJAJQAIAJAQAAQAPAAAKgOQAJgMAAgTQAAgUgIgNQgJgKgRAAQgJAAgGACQgMACgGALIgrgCIARiHICGAAIAAAqIhjAAIgJA2IASgKQALgEANAAQAeAAAXAUQAXAVAAAlQAAAjgWAbQgWAbgqAAQgjAAgXgTg");
	this.shape_8.setTransform(-30.4,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBZQgRgfAAgwQAAgbACgRQAFggAMgVQAKgSASgLQARgLAWAAQAjAAAUASQAVARACAeIgxAAQABgGgGgHQgHgMgQAAQgWAAgKAbQgGAOgCAdQAKgLAMgFQALgFAOAAQAhAAAVAXQAVAUAAAjQAAAjgUAaQgVAbgsAAQgsAAgXgngAgVAHQgOALAAAZQAAAUALAMQAKANAPAAQAQAAAJgMQAKgMAAgUQAAgWgLgLQgLgLgOAAQgMAAgJAHg");
	this.shape_9.setTransform(-30.2,-4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0B6QADhDAphGQAZgsASgSIh5AAIAAgsICtAAIAAAmQgLALgTAcQgUAbgNAcQgKAXgJAhQgGAhAAAWg");
	this.shape_10.setTransform(-30.2,-4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag/BpQgWgWAAgfQAAgVAKgRQAJgPATgIQgTgMgFgOQgFgOAAgMQAAgbAUgTQAVgTAjAAQAlAAAUATQAVATAAAbQAAAMgGAOQgFAOgSAKQASAKAKAPQAJARAAAVQAAAfgXAWQgYAWgnAAQgqAAgVgWgAgYAUQgKAKAAATQAAASAKAKQAJAKAPAAQARAAAJgKQAKgKAAgSQAAgTgKgKQgKgKgQAAQgPAAgJAKgAgVhPQgJAJAAAOQAAAOAJAIQAIAJANAAQAPAAAIgJQAIgIAAgOQAAgOgIgJQgIgIgPAAQgNAAgIAIg");
	this.shape_11.setTransform(-30.3,-4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag2BwQgWgRgEggIAxAAQABAMAIAGQAIAHAMAAQAWAAAKgbQAFgOACgdQgHAJgIAFQgNAHgSABQgeAAgXgVQgWgTAAglQAAgoAWgZQAXgZAlAAQA2AAAWAyQAMAdgBAuQAAArgLAeQgVA5g5AAQgcAAgWgQgAgVhPQgOALAAAaQAAAWAJALQAJAJARAAQAJAAAKgEQAQgLAAgZQAAgWgKgMQgKgMgPAAQgMAAgJAHg");
	this.shape_12.setTransform(-30.2,-4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBBeQgTghAAg9QAAg8ATghQATghAuAAQAvAAATAhQATAhAAA8QAAA9gTAhQgTAhgvAAQguAAgTghgAgchBQgGAWgBArQABAqAGAXQAIAXAUAAQAVAAAHgXQAGgXAAgqQAAgrgGgWQgHgVgVAAQgUAAgIAVg");
	this.shape_13.setTransform(-1,-4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhBBeQgTghAAg9QAAg8ATghQATghAuAAQAvAAATAhQATAhAAA8QAAA9gTAhQgTAhgvAAQguAAgTghgAgchBQgHAWAAArQAAAqAHAXQAIAXAUAAQAVAAAHgXQAGgXAAgqQAAgrgGgWQgHgVgVAAQgUAAgIAVg");
	this.shape_14.setTransform(-20.5,-4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAEB7IAAipIg5AAIAAggQAYgCAJgCQAOgDAHgJQAHgIADgKIACgKIAoAAIAAD1g");
	this.shape_15.setTransform(-41.7,-5);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(0,-2,1.346,1.346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:14.5}}]},38).to({state:[{t:this.shape_2,p:{x:-20.7}},{t:this.shape,p:{x:14.5}}]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_4},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_5},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_6},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_7},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_7},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_2,p:{x:-30.4}},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_8},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_9},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_9},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_10},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_10},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_11},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_11},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_12},{t:this.shape_3},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_12},{t:this.shape_2,p:{x:-10.9}},{t:this.shape,p:{x:24.2}}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape,p:{x:33.9}}]},2).to({state:[{t:this.instance_1}]},2).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-53.3,100,85.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},62).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.5,-148.5,297,297.1);


(lib.Символ12копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ14();
	this.instance.setTransform(-0.4,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.9,-150.6,297,297);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ14();
	this.instance.setTransform(-0.4,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.9,-150.6,297,297);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(0,0,1.24,1.24);
	this.instance.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13,alpha:0.297},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},4,cjs.Ease.get(1)).to({scaleX:1.12,scaleY:1.12,alpha:0.266},4,cjs.Ease.get(-1)).to({scaleX:1.24,scaleY:1.24,alpha:0.531},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-347,7.8,12.494,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACRCyIAAhNIiNAAIAAg9ICDjXIBOAAIAADdIApAAIAAA3IgpAAIAABNgAA4AuIBZAAIAAiXgAipCyIAAj0IhUAAIAAgwQAhgBAOgEQAVgEANgOQAJgKAFgPIACgPIA7AAIAAFjg");
	this.shape.setTransform(0.4,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0099").s().p("AkZEaQh1h1AAilQAAgQABgQQALiQBphpQB0h2ClABQClgBB1B2QBqBpAKCQIABAgQABClh2B1Qh1B2ilAAQilAAh0h2g");
	this.shape_1.setTransform(0,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(0,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-51.6,700,120);


(lib.Символ2копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABHB0QgWgKgOgRQgOgRgIgXQgHgXAAgaQAAgZAHgYQAIgWAOgRQAOgRAWgKQAVgJAdAAQAbAAAVAJQAVAKAPARQAPARAIAWQAIAYAAAZQAAAagIAXQgIAXgPARQgPARgVAKQgVAJgbAAQgdAAgVgJgABehLQgMAHgJAKQgIALgEAPQgFAQAAAQQAAARAFAQQAEAPAIAKQAJAMAMAFQAMAHAPAAQAQAAALgHQANgFAIgMQAIgKAEgPQAFgQAAgRQAAgQgFgQQgEgPgIgLQgIgKgNgHQgLgGgQAAQgPAAgMAGgAtVB0QgUgIgOgRQgOgRgHgWQgIgYAAgcQAAgUAEgTQAFgRAHgOQAHgOALgLQAKgKAMgGQANgHANgDQANgDAOAAQAUAAAPAEQAOAEAMAHQALAHAIAIQAJAKAEAIQAGAKACAJIAEARIgzAAIgGgRIgGgJIgKgHQgFgDgJgDQgHgCgLAAIgLACIgNADQgGAEgHAFQgGAGgEAJQgGAJgDANQgDAOAAAQQAAATAEAPQAEAPAIALQAIAKAKAGQALAGAOAAQAPAAALgFQAJgFAHgHQAFgHADgHIAEgOIAzAAQgFAWgJARQgKARgNAKQgOAMgRAEQgQAGgUAAQgaAAgVgJgAxBB9IgUgGIAAguIALAGQAGACAIAAQAKAAAGgHQAGgFACgKIhUixIA4AAIA2B/IAvh/IA2AAIhMCuQgPAkgRAQQgQARgVAAgAPCB3IAAjtIAyAAIAABeIA9AAIASADQAKACAJAEQAKAFAHAHQAIAGAGANQAEAMAAATQAAASgEAMQgGAMgHAJQgIAHgJAFQgJAFgJACIgbACgAP0BOIA4gCQAIgBAFgCQAHgEADgGQAFgGAAgMQAAgLgFgGQgDgHgHgDQgFgDgIAAIg4gCgAMoB3IAAjEIhJAAIAAgpIDEAAIAAApIhJAAIAADEgAKUB3IAAigIgBAAIheCgIgzAAIAAjtIAwAAIAAChIABAAIBfihIAyAAIAADtgAEWB3IAAjtIB1AAQAOAAAMADQALADAIAEQAIAFAGAGQAFAGADAHIAGAOIABANIgCAQQgCAHgDAHQgDAGgGAFIgNAIQALAFAIAEQAHAHAEAIQAEAHABAIIACAQQgBASgGANQgGANgMAJQgLAJgRAGQgRAEgUAAgAFGBOIA+AAQAIgBAIgCQAGgBAFgEQAFgEAEgGQACgGAAgJQABgKgEgHQgDgFgGgEQgGgEgGAAIhMgCgAFGgYIA9AAIANgBQAGgCAFgDQAFgDACgGQADgFAAgHQAAgIgDgFQgDgFgDgCQgFgDgGgCIgNgBIg+AAgAhPB3IAAhrIheAAIAABrIgyAAIAAjtIAyAAIAABbIBeAAIAAhbIAxAAIAADtgAkzB3IgPgxIhZAAIgRAxIg1AAIBWjtIA5AAIBVDtgAlRAcIgehcIAAAAIgeBcIA8AAgAplB3IAAjEIhKAAIAAgpIDEAAIAAApIhJAAIAADEg");
	this.shape.setTransform(-1.9,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-31,332,89.4);


(lib.Символ5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance_2 = new lib.Символ4_1();
	this.instance_2.setTransform(126,0,1,0.019);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_3 = new lib.Символ4_1();
	this.instance_3.setTransform(108,0,1,0.019);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ4_1();
	this.instance_4.setTransform(90,0,1,0.019);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ4_1();
	this.instance_5.setTransform(72,0,1,0.019);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// Слой 1 - копия: 2
	this.instance_6 = new lib.Символ4_1();
	this.instance_6.setTransform(54,0,1,0.019);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Слой 1 - копия: 2
	this.instance_7 = new lib.Символ4_1();
	this.instance_7.setTransform(36,0,1,0.019);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// Слой 1 - копия
	this.instance_8 = new lib.Символ4_1();
	this.instance_8.setTransform(18,0,1,0.019);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// Слой 1
	this.instance_9 = new lib.Символ4_1();
	this.instance_9.setTransform(0,0,1,0.019);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-2.3,6,2.5);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ27();
	this.instance.setTransform(1.3,-7.9,1.32,1.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.7,-64.6,132,113.3);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.setTransform(37.5,-19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(175.5,-26,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.4,-102.4,423.9,117.5);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.parent.bg.gotoAndPlay(15);
	}
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(15).call(this.frame_115).wait(1));

	// Слой 10
	this.instance = new lib.Символ12копия();
	this.instance.setTransform(-2.1,97,1.17,1.17);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({_off:false},0).to({scaleX:1.22,scaleY:1.22,y:87.1,alpha:1},6).wait(12));

	// FlashAICB
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(-6,93.1,1.566,1.566);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).to({scaleX:1.63,scaleY:1.63,x:-6.1,y:83,alpha:1},6).wait(12));

	// Слой 4
	this.proc = new lib.Символ19();
	this.proc.setTransform(-1.6,54.5);

	this.timeline.addTween(cjs.Tween.get(this.proc).wait(13).to({scaleX:1.22,scaleY:1.22,x:-1.8,y:85.1},19).wait(62).to({y:77.1,alpha:0},6).wait(16));

	// Слой 7
	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(-0.4,52.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({scaleX:1.22,scaleY:1.22,y:83.2},19).wait(62).to({y:75.2,alpha:0},6).wait(16));

	// mask
	this.mask = new lib.Символ16();
	this.mask.setTransform(-1.9,-7);

	this.timeline.addTween(cjs.Tween.get(this.mask).wait(13).to({scaleX:1.22,scaleY:1.22,x:-2.3,y:9.9},19).wait(62).to({y:1.9,alpha:0},6).wait(16));

	// Слой 3
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(0,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({scaleX:1.22,scaleY:1.22,x:0.1,y:95.3},19).wait(62).to({y:83.3,alpha:0},6).to({_off:true},1).wait(15));

	// Слой 1
	this.instance_4 = new lib.Символ30();
	this.instance_4.setTransform(0,-149.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.4,-251.7,423.9,461.1);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ33();
	this.instance.setTransform(2.4,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116));

	// Слой 5
	this.instance_1 = new lib.Символ2копия();
	this.instance_1.setTransform(5,-14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.7,-151.3,357.3,178.1);


// stage content:
(lib.browser = function(mode,startPosition,loop) {
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
		
		
		window._setCanvasSize = function () {
		
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			var windowSize = getWindowSize();
			stage.canvas.style.width = windowSize.width + 'px';
			stage.canvas.style.height = windowSize.height + 'px';
			stage.canvas.width = windowSize.width * window.devicePixelRatio;
			stage.canvas.height = windowSize.height * window.devicePixelRatio;
		
		
			_this.bg.x = windowSize.width / 2;
			_this.bg.y = windowSize.height / 2;
		
			_this.shape_left.x = 0;
			_this.shape_left.y = windowSize.height / 2;
		
			_this.shape_right.x = windowSize.width;
			_this.shape_right.y = windowSize.height / 2;
		
			_this.plate.x = windowSize.width / 2;
			_this.plate.y = windowSize.height / 3;
		
			_this.button.x = windowSize.width / 2;
			_this.button.y = (windowSize.height / 2) + (windowSize.height / 3);
		
			//Scale
		
			_this.bg.scaleX = 0.9;
			_this.bg.scaleY = 0.9;
		
			_this.shape_right.scaleX = 0.6;
			_this.shape_right.scaleY = 0.6;
		
			_this.shape_left.scaleX = 0.6;
			_this.shape_left.scaleY = 0.6;
		
			_this.plate.scaleX = 0.6;
			_this.plate.scaleY = 0.6;
		
			_this.button.scaleX = 0.6;
			_this.button.scaleY = 0.6;
		
			if (windowSize.width > 767) {
		
				_this.bg.scaleX = 1.5;
				_this.bg.scaleY = 1.5;
		
				_this.shape_left.scaleX = 1.5;
				_this.shape_left.scaleY = 1.5;
		
				_this.shape_right.scaleX = 1.5;
				_this.shape_right.scaleY = 1.5;
		
				_this.plate.scaleX = 0.8;
				_this.plate.scaleY = 0.8;
		
				_this.button.scaleX = 0.8;
				_this.button.scaleY = 0.8;
		
			}
		
			if (windowSize.width > windowSize.height && windowSize.width < 767) {
		
				_this.bg.scaleX = 1.5;
				_this.bg.scaleY = 1.5;
		
				_this.shape_left.scaleX = 1.5;
				_this.shape_left.scaleY = 1.5;
		
				_this.shape_right.scaleX = 1.5;
				_this.shape_right.scaleY = 1.5;
		
				_this.plate.scaleX = 0.5;
				_this.plate.scaleY = 0.5;
		
				_this.button.scaleX = 0.5;
				_this.button.scaleY = 0.5;
		
				_this.button.x = (windowSize.width / 2) + (windowSize.width / 4);
				_this.button.y = windowSize.height / 1.8;
		
				_this.plate.x = windowSize.width / 3.1;
				_this.plate.y = windowSize.height / 2.2;
		
			}
		
		}
		
		
		window.onresize = function () {
			_setCanvasSize();
		}
		
		
		window.onresize();
		
		//Actions
		
		
		var onClick = function (evt) {
			console.log('click')
			window.open(mixTAG, "_blank");
		};
		
		stage.canvas.addEventListener("click", onClick, false);
		
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function () {_setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 7
	this.plate = new lib.Символ29();
	this.plate.setTransform(512,288.5,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.plate).wait(1));

	// Слой 6
	this.shape_right = new lib.Символ5_1();
	this.shape_right.setTransform(1026.1,426.3,1.628,4.137,0,0,180,-67,4.9);
	this.shape_right.alpha = 0.039;

	this.shape_left = new lib.Символ5_1();
	this.shape_left.setTransform(-1.9,426.3,1.628,4.137,0,0,0,-70.2,4.9);
	this.shape_left.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_left},{t:this.shape_right}]}).wait(1));

	// Слой 3
	this.button = new lib.Символ28();
	this.button.setTransform(507,663.6,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 1
	this.bg = new lib.Символ22();
	this.bg.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1024,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1470755775407", id:"back"},
		{src:"images/fire_00000.png?1470755775407", id:"fire_00000"},
		{src:"images/fire_00001.png?1470755775407", id:"fire_00001"},
		{src:"images/fire_00002.png?1470755775407", id:"fire_00002"},
		{src:"images/fire_00003.png?1470755775407", id:"fire_00003"},
		{src:"images/fire_00004.png?1470755775407", id:"fire_00004"},
		{src:"images/fire_00005.png?1470755775407", id:"fire_00005"},
		{src:"images/fire_00006.png?1470755775407", id:"fire_00006"},
		{src:"images/fire_00007.png?1470755775407", id:"fire_00007"},
		{src:"images/fire_00008.png?1470755775407", id:"fire_00008"},
		{src:"images/fire_00009.png?1470755775407", id:"fire_00009"},
		{src:"images/fire_00010.png?1470755775407", id:"fire_00010"},
		{src:"images/girl.png?1470755775407", id:"girl"},
		{src:"images/svet.png?1470755775407", id:"svet"},
		{src:"images/u1_03.png?1470755775407", id:"u1_03"},
		{src:"images/u1_06.png?1470755775407", id:"u1_06"},
		{src:"images/u1_07.png?1470755775407", id:"u1_07"},
		{src:"images/u1_09.png?1470755775407", id:"u1_09"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.fire_00000 = function() {
	this.initialize(img.fire_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00001 = function() {
	this.initialize(img.fire_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00002 = function() {
	this.initialize(img.fire_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00003 = function() {
	this.initialize(img.fire_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00004 = function() {
	this.initialize(img.fire_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00005 = function() {
	this.initialize(img.fire_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00006 = function() {
	this.initialize(img.fire_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00007 = function() {
	this.initialize(img.fire_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00008 = function() {
	this.initialize(img.fire_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00009 = function() {
	this.initialize(img.fire_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.fire_00010 = function() {
	this.initialize(img.fire_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,305);


(lib.svet = function() {
	this.initialize(img.svet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,160);


(lib.u1_03 = function() {
	this.initialize(img.u1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,179);


(lib.u1_06 = function() {
	this.initialize(img.u1_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,146);


(lib.u1_07 = function() {
	this.initialize(img.u1_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,53);


(lib.u1_09 = function() {
	this.initialize(img.u1_09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,89);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.839)").s().p("AgBCCIgagIQgbgLgLAAQgKAAgIAEIgIAIIgEAFQgGgPgRgbQABgMAYgFIAPgDIAPgDQADgIABgXIgBgOIgBgIQgBgKgIgHQAJgIACgLIAAgFIAAgLIAAgMIAAgLIgCgjQgCgWgKgKIBJAAQgKANAAAOIgBAlIAAAPIAAAOIABAJIABADQAagCASAEQATAEALAHQALAGAHAGIAHAIIAOAYQAJARAGAHQgJAGgNAXQgQAbgJAHQgKAIgNADQgOAFgSAAQgJAAgJgDgAgJAKIAAAUQABAPAEAGIgzAQIAjAOQAVAKAMAAQAIAAAJgDQAHgDAGgGQAGgFADgIQAEgIAAgJQAAgUgNgNQgLgMgPAAIgFgBIgVAAIAAAHg");
	this.shape.setTransform(183.9,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.839)").s().p("AgnCEQAMgPADgiIABg5QAAgNgCgKQgDgHgFgGQAFgGADgMQADgMAAgQIAAgdQgLAAgNAGQgPAJAAALQAAAJAFAOQAFAPAAAHQAAAHgEAGQgFAEgHAAQgGAAgFgDQgFgDAAgGQAAgJAFgCIAKgFQgFgQgQgZIgXgoQALAAAkgMQASgGAQgDQAPgEANAAQALAAAQAEQAPACAQAGQAqAOAQACIgaAmQgQAWgGASQAPAGAAAKQAAAGgFADQgEADgGAAQgIAAgEgEQgFgHAAgIQAAgHAGgOQAGgOAAgJQAAgMgRgHIgUgEIAAAyQAAAOAJAJQgHAGgCAMQgEAOAAAWIAAAZIABAPQAAAYAMAYg");
	this.shape_1.setTransform(159.8,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.839)").s().p("AhXCEQgRgFgQgRIAYguQgBADAAAEIAEAHIAFAGQADADAEAAQAGABAEgFQADgEADgHIAEgQIAGgSQAEgJAGgHQAHgIALgEIgQgFIgSgHIgQgMQgGgHgDgGQgGgOgFgHIgKgLIAbgaIAagZQAOgLARgGQATgGAUAAQATgBANAFQANAFALAHIAXAQQAKAIARAIIgKAPIgGALIgCAMIAAAQQgMgdgWgPQgKgHgPgEQgOgEgQAAQgMAAgJADQgJACgJAFQgKAGgFAIQgFAJAAAKQAAAKADAEQAEAEAHAEIAGADIAJABIAPABIAWAAIgBg8QADAIAXAJIAQAFIAQAGQgIAHAAALQAAALAJAJIgDAFIgFAFIgBAJIgBAVIAAAXIAAASQAAAuASAOIgUABIgbAAIgYABIgMAAQAJgHAEgOQAEgPAAgXIAAg0QgEgIgMAGQgGADgCAIIgGAQIgDAQIgDAOQgJAbgGALQgMAPgOAFQgIADgIAAQgIAAgIgCg");
	this.shape_2.setTransform(137.4,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.839)").s().p("AhrCkIgGgBIgIAAQAHgJAGgOQAHgPAAgJQAAgFgCgEIANADQAQABALgLQAMgLAIgWQAHgRADgVQADgUAAgSQAAgIgHgJQAMgJAKgjQAFgUADggQAAgEgDgGQgEgFgEgBQARgMAQgHQASgGARAAQASAAARAGQARAHASAMQgFACgDAFQgDAFAAAFIAABAQAAAKAKAHIgIAIQgDAEABAFIAABjQAAALANAJIg6gBIgSABQALgJAAgLIAAhlIgBgGQgDgHgGgCQAFgCADgEQAEgFgBgFIAAg4QgBgDgDgCIgHgBIgIACQgDACgCADIgIAlIgVBeIgPBIQgLAjgRAQQgLAKgQAGQgQAFgUAAg");
	this.shape_3.setTransform(111.2,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.839)").s().p("Ag/B+QgLgFgIgIQgIgJgEgKQgEgLAAgLQAAgTANgNQAMgNAYAAQAYAAAPAYQgRAJgIAPQgGgJgIAAQgEABgDADQgDADAAADQAAAJAGAFQAFADAIAAQAHAAAJgEQAIgEAEgIQAHgHAEgRIAIgjQgJABgKgDQgKgDgLgFIgUgLIgVgPQACgGAAgHIgBgQIgEgQIgFgQIgEgPIgGgPIgIgMQgFgGgFgDIBWAAQgEAEgCAFIgDALIAAANIACAMQABAOAFAOQAFAOAIAKQAFAGAFADQADAEAJgBQAGAAACgEIADgHIALgkIAJgbQADgLgBgJQgBgIgIgIIBNAAIgHACQgDACgDAGIgHAQIgGAcIgHAXQgDALAAANIABAQIADAOIgIAGIgKAMIgJARQgEAKgDANIgIAWQgFAMgKAMQgKALgNAIQgIAEgJADIgVACQgNAAgLgGg");
	this.shape_4.setTransform(94.1,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.839)").s().p("AgmCCIgIAAIgQAAIgVAAIgSAAQAKgLAAgOIAAhIQABgOgMgFQAOgMgCgGIAChFQgCgQgEgKQgEgLgGgGQATAIAIgEQAggRA1AAQANAAAMACQAMADAMAFIAYAJIAGAAIAGABQAGAAAGgDIgCADQgWAbgWA2QgFAKABAHIAJAEIAFADQAEADAAAHQAAAHgFAEQgGAFgGAAQgKAAgFgGQgFgFAAgLQAAgIAEgUIAEgcQAAgIgEgFQgFgGgJgDQgNgEgQAAQgOgBgJACQgJACgDAEIAABHQAAAIAKALIgDADIgEAGIgCAEIgBAFIAAAdIAAArQgBAIAFAIIAHAJg");
	this.shape_5.setTransform(71.6,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.839)").s().p("AgkCCIgagIQgcgLgLAAQgKAAgIAEIgHAIIgFAGQgFgPgRgcQAAgMAYgFIAQgDIAPgDQADgIAAgXIgBgOIAAgHQgCgLgHgGQAIgJACgKIAAgGIAAgKIAAgNIAAgLIgBgjQgCgWgKgJIBJAAQgKANAAANIgBAlIgBAQIABANIABAJIABADQAbgCARAFQATAEAKAGQAMAGAGAGIAIAIIAOAYQAIARAGAIQgJAGgMAWQgRAcgIAGQgLAIgNAEQgNAEgQAAQgJAAgLgDgAgsAKIAAAUQAAAQAEAFIgyAQIAiAPQAXAJAMABQAJAAAIgEQAGgCAGgHQAFgFAEgIQADgIAAgJQAAgTgMgOQgJgLgPgBIgGgBIgWAAIAAAHgABQB/QAKgJABgLIAAhoIgBgEQgDgHgGgDQAEgBAEgEQADgFAAgFIAAhYQAAgEgLgOIBHAAQgLALAAAGIAABXQAAAKALAHIgIAIQgDADAAAEIAABnQABAMANAIIhLAAgABQB/IAAAAIAAAAg");
	this.shape_6.setTransform(43.5,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.839)").s().p("AgZB7QgbgMgLAAQgLAAgHAFIgIAIIgFAFQgFgPgRgbQAAgMAYgFIAfgHQADgHAAgXIgBgZQgBgIgIgIQAIgJACgLIABgXQAAgIgEgGQgEgGgJgCIgegGQgQgFAAgUQAAgIAGgHQAGgGAJAAQAGAAAFAEQAFAFAAAHQAAACgIAKIALAFIA0gZQAegQAYAAQALABAKACQAJACAIAGQALAHAQARIAaAbQgIAJgKAXQgJAQgUAMQANAFAJAJQAFAIAJATQAIASAHAHQgJAGgNAWQgNAYgMAKQgKAJgOADQgNAEgSABQgSgBgagKgAgHADIAAAbQAAAQAFAGIgzAQIAjAOQAUAKAMAAQASAAANgMQANgLAAgTQAAgUgNgPQgLgMgPgBgAAAhVQgIAKgBAOQgBAgADABIAYAAQAQAAALgJQAGgFADgGQADgGAAgIQAAgOgLgKQgLgJgNAAQgPAAgGAKg");
	this.shape_7.setTransform(14.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.5,47.7);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.839)").s().p("AgBB4IgXgHQgagLgKAAQgKAAgHAFIgHAGIgEAGQgFgOgQgZQAAgLAXgFIAOgDIAOgDQADgGAAgWIAAgNIgBgHQgBgKgHgGQAIgHABgLIAAgFIAAgKIAAgLIAAgKIgBghQgCgUgJgJIBDAAQgJAMAAANIgBAiIAAAOIAAAMIABAJQAAABAAAAQAAABABAAQAAABAAAAQAAAAABABQAXgCARAEQARADAKAGQALAGAFAFIAIAHIANAXQAHAPAGAHQgIAGgMAUQgQAbgHAFQgJAIgNADQgNAEgQAAQgIAAgJgDgAgHAJIAAATQAAAOAEAFIgvAPIAgANQATAKAKAAQAJAAAHgDQAIgDAFgFQAFgFADgHQAEgIAAgIQAAgTgMgMQgKgLgOgBIgFAAIgTgBIABAHg");
	this.shape.setTransform(144.5,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.839)").s().p("AgkB6QALgOACgfIACg1QAAgNgDgIQgCgHgFgFQAFgGADgLQACgLAAgPIAAgaQgKgBgMAGQgOAIAAALQAAAHAFAOQAFAOAAAHQAAAGgFAFQgEAEgGAAQgGAAgEgDQgFgDAAgGQAAgIAFgCIAJgEQgFgPgOgXIgVglQAJAAAigLQARgGAOgDQAOgDAMAAQAKAAAOADQAOACAQAGQAnANAOACIgYAjQgOAVgGAQQAOAFAAAKQAAAFgFADQgEADgFAAQgHAAgFgEQgEgGAAgHQAAgIAGgNQAFgNAAgHQAAgMgQgGIgSgEIAAAuQgBANAJAJQgGAFgDALQgDANAAAVIABAXIAAAOQAAAWALAWg");
	this.shape_1.setTransform(122.2,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.839)").s().p("AhRB1QADgIAAgPIAAgmIAAgiIAAgXIAAgKQgBgDgDgEIgDgEIgFgFIAEgEIACgEQAGgIABgGIgBg0IAAgNIAAgHQgCgIgJgJIBDAAIgIAOQgDAFAAALIAAB1IBEhcIAAgaQAAgJgDgKQgEgJgGgCIBHAAQgGACgEAJQgEAKAAAJIAAAQIAAAyQAAAKAJAGIgGAIQgEAEABAEIAABgQABAKAMAIIhGAAQAKgIAAgKIAChnIhBBYIAAAPQgBAJAEAJQAFAJAEADIgYABQgJACgHADIgPAIIgSALg");
	this.shape_2.setTransform(101.2,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.839)").s().p("AgXBxQgZgKgLAAQgKAAgGAEIgHAHIgEAGQgFgPgQgYQAAgLAWgGIAdgFQADgHAAgWIgBgWQgCgIgGgHQAHgIACgLIABgVQAAgIgFgFQgDgFgIgDIgcgFQgPgFAAgSQAAgIAGgGQAGgGAHAAQAGAAAFAEQAEAFAAAGQAAADgHAJIAKAEIAxgXQAagPAXAAQALAAAJADQAIACAIAFQAKAGAOAQIAZAaQgIAHgJAWQgJAPgTALQANAEAIAJQAFAHAJATQAHAPAGAHQgIAFgMAVQgMAXgMAJQgIAHgNAEQgNAEgQAAQgRAAgYgLgAgGADIAAAZQABAPADAFIgvAPIAhANQARAKAMAAQARAAAMgMQAMgLAAgRQAAgTgMgOQgKgKgOgBgAAAhPQgIAJAAAOQgBAeADAAIAWAAQAPAAAKgIQAGgEACgGQADgGAAgHQAAgNgKgJQgKgJgNAAQgNAAgGAJg");
	this.shape_3.setTransform(79.5,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.839)").s().p("AhRB1QACgIAAgPIAAgmIAAgiIAAgXIAAgKQAAgDgCgEIgEgEIgFgFIADgEIADgEQAGgIAAgGIAAg0IAAgNIgBgHQgBgIgJgJIBDAAIgIAOQgEAFAAALIAAB1IBFhcIAAgaQAAgJgDgKQgFgJgFgCIBHAAQgGACgEAJQgEAKAAAJIAAAQIAAAyQAAAKAJAGIgHAIQgDAEABAEIAABgQABAKALAIIhFAAQAKgIAAgKIAChnIhBBYIAAAPQAAAJADAJQAFAJAEADIgYABQgJACgIADIgOAIIgRALg");
	this.shape_4.setTransform(57.8,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.839)").s().p("AhtBQQADgIAMgFQAKgEALAAQAGAAAbAGQADgTAAgOQAAgPgDgKQgCgIgFgDQAKgHAAgVIgCgSIgCgIIAXgOQASgLAAgCIgBgBIgLgBQgZAAgRANQgRANgGAXIgfgfIgJgJIABAAQALgDAPgOQARgRALgGQAUgLAdAAQAxABAdAWQATAQAOAhQAQAnAEAFQgDAGgMArQgKAmgRARQgNANgSAGQgSAGgXgCIgegGQgXgEgLAAQgFgBgGAIQgFAGgCAFgAADgdQAAAHAFAGIAFAIQgIADgCAKIAAAXQAAAMALAMIgTAGQgWAHgGAHQAcAKAKAAQAfAAAQggQALgXAAgjQAAg1g6gUgAgvAAIAAAAIAAAAgAgvAAg");
	this.shape_5.setTransform(35.7,21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.839)").s().p("Ag6B1QgKgFgIgIQgHgHgEgKQgEgKAAgKQAAgSAMgMQAMgMAWAAQAWAAAOAXQgQAIgHAOQgGgJgIAAQgDABgDACQgDADAAADQABAJAFAEQAFAEAHAAQAHAAAHgEQAIgEAEgHQAGgIAEgPIAIggQgJABgJgDQgKgDgJgFIgTgKIgTgOQACgFAAgHIgBgOIgEgPIgFgPIgEgOIgFgOIgIgLQgEgGgFgCIBQAAQgEADgCAFIgCALIAAALIABALQACANAEANQAEANAIAJQAFAGAEADQADADAIAAQAGAAACgEIACgHIALghIAIgYQACgLgBgIQAAgIgHgIIBHABIgGACQgDACgDAFIgGAPIgHAaIgGAWQgDAJAAAMIABAPIADANIgHAGIgJALIgJAPQgDAKgDAMIgIAUQgFAMgIAKQgKALgMAHQgHAEgJACIgTADQgMgBgKgFg");
	this.shape_6.setTransform(12.7,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.1,44.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.839)").s().p("AgBCCIgZgIQgcgLgLAAQgKAAgIAEIgHAIIgGAFQgFgPgRgbQABgMAXgFIAQgDIAQgDQACgIAAgXIAAgOIgBgIQgBgKgIgHQAJgIABgLIAAgFIAAgLIAAgMIAAgLIgBgjQgCgWgJgKIBIAAQgJANAAAOIgBAlIgBAPIABAOIAAAJIACADQAZgCATAEQASAEALAHQAMAGAFAGIAIAIIAPAYQAHARAHAHQgJAGgMAXQgRAbgJAHQgKAIgOADQgNAFgRAAQgKAAgJgDgAgIAKIAAAUQgBAPAFAGIgyAQIAiAOQAUAKAMAAQAKAAAHgDQAJgDAFgGQAGgFAEgIQADgIAAgJQAAgUgMgNQgMgMgOAAIgGgBIgVAAIABAHg");
	this.shape.setTransform(173.6,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.839)").s().p("AgnCEQAMgPADgiIABg5QAAgNgCgKQgDgHgFgGQAGgGACgMQADgMAAgQIAAgdQgLAAgNAGQgPAJAAALQAAAJAFAOQAFAPAAAHQAAAHgFAGQgEAEgHAAQgGAAgFgDQgFgDAAgGQAAgJAGgCIAKgFQgHgQgOgZIgYgoQALAAAkgMQASgGAQgDQAPgEANAAQALAAAPAEQAQACARAGQAqAOAOACIgZAmQgPAWgHASQAPAGAAAKQAAAGgFADQgEADgGAAQgIAAgFgEQgEgHAAgIQAAgHAGgOQAGgOAAgJQAAgMgSgHIgTgEIgBAyQAAAOAJAJQgFAGgEAMQgDAOAAAWIABAZIAAAPQgBAYANAYg");
	this.shape_1.setTransform(149.5,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.839)").s().p("Ah8ChIgIAAQAHgJAGgOQAHgOAAgKQAAgGgCgCIANACQAPAAAMgKQAMgLAIgWQAHgRADgTQAEgSAAgSQgBgIgGgIQAMgJAJgjQAIgfAAgVQAAgFgDgFQgDgGgFgBQAggZAjAAQAQAAAUAHQALAFAIAFQAHAFACAGIgHAHQgDAFAAAEQgBA1AKAZQAGAPAIAFQgIAMAAAHQAAAtANAhQAEALAJALIhLAAQADgDAFgHQADgHAAgFIgEgeIgFgZIg/AAIgSBDQgLAjgRAQQgWAVgpAAgAA6gIIgPhmQgDgEgHAAQgHAAgDAFQgKAngNA+IA6AAg");
	this.shape_2.setTransform(124.1,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.839)").s().p("AgnCEQANgPACgiIABg5QAAgNgDgKQgCgHgFgGQAFgGADgMQADgMAAgQIAAgdQgLAAgNAGQgPAJAAALQAAAJAFAOQAFAPAAAHQAAAHgEAGQgFAEgGAAQgHAAgFgDQgFgDAAgGQAAgJAFgCIAKgFQgGgQgPgZIgWgoQAKAAAkgMQATgGAPgDQAPgEANAAQALAAAQAEQAPACAQAGQAqAOAQACIgaAmQgQAWgGASQAPAGAAAKQAAAGgFADQgFADgFAAQgIAAgEgEQgFgHAAgIQAAgHAGgOQAGgOAAgJQAAgMgRgHIgUgEIAAAyQAAAOAJAJQgHAGgCAMQgEAOAAAWIAAAZIABAPQgBAYANAYg");
	this.shape_3.setTransform(103.6,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.839)").s().p("AgfB+QgQgGgMgOQgPgRgNgnQgNgogJgKQAFgEAFgKIAKgeQAGgVAHgNQAGgQAIgIQANgPATgHQASgIAXABQAXAAATANIAdAbQAQAQAMABIAAACQgXAOgbAUIgdAYQgKAJgBAFQAGAAAEAFQAFAFAAAFQAAAIgFAGQgGAFgIAAQgIABgHgHQgFgGAAgJQAAgIAEgFQABgIAGgHIAYgXQANgOAAgHQAAgLgNgJQgKgHgMAAQgNAAgMAHQgMAIgIAOQgOAXAAAhQAAAQAEAPQADAOAHANQAIAPAMAHQAMAIAOAAQAKAAAIgDQAJgDAHgGQAOgNgBgSIACgCIAvAhQgIAEgOARQgNARgNAIQgKAFgNAEQgOACgQAAQgTAAgRgGg");
	this.shape_4.setTransform(80.2,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.839)").s().p("AgXB/QgagHgKABQgKgBgYAMQAJgWAAgdIAAg4QABgMgDgHQgDgGgGgDQAGgIADgIQAEgIAAgKIAAgfQAAgRgEgKIgMgYQAHAFAFAAIAGAAIAHAAQAWgKATgEQATgEAPAAQARAAAcAKIAeAJQALAAAJgGIgfA5QgPgQgMgGQgOgHgUAAQgNAAgJACQgKADgEADQgHAJAAAXIAAAYIAXAAQATAAAPgCQAOgCAJgEIAAA5QgFgGgJgEQgKgEgOAAIgpAAIAAA6QAAAWAwAAQAsAAASgaIAbBAIgKgFIgKgCQgMAAgWAHQgXAHgMAAQgLAAgXgGg");
	this.shape_5.setTransform(58.2,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.839)").s().p("AhrCkIgGgBIgIAAQAHgJAGgOQAHgPAAgJQAAgFgCgEIANADQAQABALgLQAMgLAIgWQAHgRADgVQADgUAAgSQAAgIgHgJQAMgJAKgjQAFgUADggQAAgEgDgGQgEgFgEgBQARgMAQgHQASgGARAAQASAAARAGQARAHASAMQgFACgDAFQgDAFAAAFIAABAQAAAKAKAHIgIAIQgDAEABAFIAABjQAAALANAJIg6gBIgSABQALgJAAgLIAAhlIgBgGQgDgHgGgCQAFgCADgEQAEgFgBgFIAAg4QgBgDgDgCIgHgBIgIACQgDACgCADIgIAlIgVBeIgPBIQgLAjgRAQQgLAKgQAGQgQAFgUAAg");
	this.shape_6.setTransform(34.1,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.839)").s().p("Ah0CCQALgIAKgLIAKgLIA9hrQgHgNg0hLQgJgSgXgQIBbAAQgFAIACAOQAOAfANAYQACgHAMgUQALgSABgFIAAgEQAAgNgJgKIBgAAIgLAKQgLAMgHALQgMAQgPAcIgYAuIAaA0QAQAhANARIAMASQAIAKAJAFIhTAAIgBAAIACgGIABgIIgCgJIgOgdIgPgdIgDAAIgQAiIgLAWQgFAPAEALg");
	this.shape_7.setTransform(14.9,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.2,47.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.839)").s().p("AgUB6QgIgIAAgMQAAgMAIgKQAJgKALAAQALAAAIAKQAJAKAAAMQAAAMgJAIQgIAIgLAAQgLAAgJgIgAgQAyQgIgIAAgMQAAgRAUgbQAIgPAFgMQAFgMAAgJQAAgLgJgIQgHgJgLAAQgKAAgHAHQgGAHgDANIAIAXQABADgFACIgHADQgLAAgIgKQgIgKAAgLQAAgZAUgVQAKgKALgFQALgFANAAQAZAAAYARQAZATAAAbQAAAUgQAWQgGAJgYAXQgPARAAAHQAAAEAEACQAEACADAAIAAAEQAAAFgHAFQgHAFgFAAQgKAAgHgJg");
	this.shape.setTransform(192.1,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.839)").s().p("AiGCKIgBgQIgBgJIgBgIIANACIAKAAQAJAAAMgxQALgsAAgjQAAgNgCgHQAJgFAIgnIAFgeIABgXQAAgPgGgHIA6AAQgHAKAAANQAAAGALAuQAKArAEAFQAZhTAAgSQAAgIgHgOIA3AAQgGAQAAAGQAAAbAGAaQAIAgANAMIgCASQABAcAJAfQALAjAOACIAEACQgeAVgDAUQgPgMgLglQgGgVgIguQgIgsgFgPIgGARIgIAgIgGAdIgDATIAHASIAAAAQgLAFgSATIgQgLQgMgHAAgHIAIgRQAAgLgHgZIgUg/QgEBhgZA3QgRAngdASIgMAGIgOAHQAFgMAAgLg");
	this.shape_1.setTransform(170.1,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.839)").s().p("AgXB/QgagHgKABQgKgBgYAMQAJgWAAgdIAAg4QABgMgDgHQgDgGgGgDQAGgIADgIQAEgIAAgKIAAgfQAAgRgEgKIgMgYQAHAFAFAAIAGAAIAHAAQAWgKATgEQATgEAPAAQARAAAcAKIAeAJQALAAAJgGIgfA5QgPgQgMgGQgOgHgUAAQgNAAgJACQgKADgEADQgHAJAAAXIAAAYIAXAAQATAAAPgCQAOgCAJgEIAAA5QgFgGgJgEQgKgEgOAAIgpAAIAAA6QAAAWAwAAQAsAAASgaIAbBAIgKgFIgKgCQgMAAgWAHQgXAHgMAAQgLAAgXgGg");
	this.shape_2.setTransform(148.7,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.839)").s().p("Ah8ChIgIAAQAHgJAGgOQAHgOAAgKQAAgGgCgCIANACQAPAAAMgKQAMgLAJgWQAGgRADgTQADgSABgSQAAgIgIgIQAMgJAKgjQAIgfAAgVQAAgFgEgFQgCgGgGgBQAhgZAjAAQAQAAAUAHQAMAFAHAFQAHAFACAGIgHAHQgDAFAAAEQAAA1AJAZQAGAPAJAFQgJAMAAAHQAAAtAMAhQAFALAJALIhMAAQAEgDAEgHQAEgHAAgFIgEgeIgFgZIhAAAIgRBDQgLAjgRAQQgWAVgpAAgAA5gIIgNhmQgEgEgHAAQgHAAgDAFQgJAngNA+IA4AAg");
	this.shape_3.setTransform(124.4,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.839)").s().p("AgwB0QADgMAAgRIABhFQAAgRgKgJQAGgFACgFIABgMIgBgNQgCgGgHgCIAfgSQAWgLACgBIABABIgBAlIAAAkIAcAAQAIABAGgEQAGgEAEgGQAIgMAAgPQAAgXgPgLQgPgLgeAAQgPAAgOADQgNADgKAHQgUANgPAdQgFgigYgXIAMgDQAPgGAVgOQATgKALgFQARgFAZAAQAXAAAUAKQAVAJARASQAQAcAQAPQgFABgFAVQgGAcgOAMQgKALgRAGQgQAGgWAAIgLAAIgKgBIAABMQAAAFAEAGIAGALIgSAAQgSAAgIACIgZALQAHgJADgNg");
	this.shape_4.setTransform(103.3,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.839)").s().p("AgmCCIgIAAIgQAAIgVAAIgSAAQAKgLAAgOIAAhIQABgOgMgFQAOgMgCgGIAChFQgCgQgEgKQgEgLgGgGQATAIAIgEQAggRA1AAQANAAAMACQAMADAMAFIAYAJIAGAAIAGABQAGAAAGgDIgCADQgWAbgWA2QgFAKABAHIAJAEIAFADQAEADAAAHQAAAHgFAEQgGAFgGAAQgKAAgFgGQgFgFAAgLQAAgIAEgUIAEgcQAAgIgEgFQgFgGgJgDQgNgEgQAAQgOgBgJACQgJACgDAEIAABHQAAAIAKALIgDADIgEAGIgCAEIgBAFIAAAdIAAArQgBAIAFAIIAHAJg");
	this.shape_5.setTransform(80.6,23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.839)").s().p("AhYB/QADgKAAgQIAAgpIAAgkIAAgYIAAgMQAAgDgDgEIgFgGIgEgFIADgDIADgFQAHgJAAgGIAAg4IgBgPIAAgHQgCgJgJgKIBIAAIgJAQQgDAGAAAMIAAB+IBKhjIAAgcQAAgLgEgKQgEgJgGgDIBMAAQgGADgEAJQgFAKAAALIAAARIAAA2QAAAKALAGIgIAJQgEAFABAEIAABnQABALAMAJIhKAAQALgJAAgLIAChvIhHBfIAAAQQAAAKAEAKQAEAKAGADIgaABQgKABgIAEIgQAJIgTAMg");
	this.shape_6.setTransform(58.5,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.839)").s().p("AhTBfQgPgTgHgXQgHgWAAgbQAAhPA8gkIAvgYIABAAQADASAFAOQgSAFgOAJQgPAJgJANQgIAMgDAQQgFARAAAVQAAAQAFAQQAFAQAKAOQALAQAOAJQAOAIAQAAQAWAAAUgaQATgZAAgfQAAgMgDgKQgDgLgHgJQgOgTgaAAQgMAAgHAHQgJAHAAALIADAHIALgDQADAAAFAFQAFAFAAAHQAAAGgGAGQgFAGgHAAQgHAAgGgDQgGgEgEgGQgIgKAAgPQAAgNAEgLQAEgLAHgIQAGgGAZgTQAWgOAHgQIAGAPQALAUAUASQATASAGALQAFAJADAOQACANABAQQABAxghAlQgiAlgvAAQgyAAghgpg");
	this.shape_7.setTransform(35.5,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.839)").s().p("AhVByQADgIAAgSIAAhYQAAgDgDgEIgIgLIAGgIQAFgJABgGIAAg4IgBgWQgBgKgKgIICLAAIAsAAQgGAHgDAJQgEAJAAAKIAAA9IABALQADAKAHADQgFAFgEAHQgDAGAAALIAABDIAGAJQADAEAGAAIAFgBIgeApQgZABgJgcQgDgOAAghIAAg7IAAhiIg9AAIABB2IAABIQAAAKAEAKQAEAKAHACQgbAAgPADIglAMg");
	this.shape_8.setTransform(12.2,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,47.7);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_07();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,53);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_09();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,89);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_06();
	this.instance.setTransform(0,37,1,1,-89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.4,38.3);


(lib.Символ11копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_03();
	this.instance.setTransform(0,54,1,1,-87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,62.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u1_03();
	this.instance.setTransform(0,54,1,1,-87.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,62.6);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.girl();
	this.instance.setTransform(-215,-152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-152.5,430,305);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fire_00000();

	this.instance_1 = new lib.fire_00001();

	this.instance_2 = new lib.fire_00002();

	this.instance_3 = new lib.fire_00003();

	this.instance_4 = new lib.fire_00004();

	this.instance_5 = new lib.fire_00005();

	this.instance_6 = new lib.fire_00006();

	this.instance_7 = new lib.fire_00007();

	this.instance_8 = new lib.fire_00008();

	this.instance_9 = new lib.fire_00009();

	this.instance_10 = new lib.fire_00010();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,260);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ42();
	this.instance.setTransform(99.2,23.9,1,1,0,0,0,99.2,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.5,47.7);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.setTransform(79,22.1,1,1,0,0,0,79,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.1,44.2);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();
	this.instance.setTransform(94.1,23.9,1,1,0,0,0,94.1,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,scaleY:1.11},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188.2,47.7);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(60,44.5,1,1,0,0,0,60,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,89);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(101.5,23.9,1,1,0,0,0,101.5,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.13,scaleY:1.13},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,47.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(10,29.5,1,1,0,0,0,10,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:23.5},9).to({y:29.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,20,53);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(214,21.5,1,1,0,0,0,-1,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.01,scaleY:1.01,skewX:1.5,x:214.1},9,cjs.Ease.get(-1)).to({regX:-0.9,regY:-130.9,scaleX:1.02,scaleY:1,skewX:3.3,y:21.6},10,cjs.Ease.get(1)).to({regY:-131.1,scaleX:1.01,scaleY:1.01,skewX:1.5,x:214,y:21.4},10,cjs.Ease.get(-1)).to({regX:-1,regY:-131,scaleX:1,scaleY:1,skewX:0,y:21.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,430,305);


(lib.Символ16копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(-40,230.9,0.893,0.893,0,0,0,94.1,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(60,44.5,1,1,0,0,0,60,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,0,244.1,252.1);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(60,44.5,1,1,0,0,0,60,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:39},4).to({x:60},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,89);


(lib.Символ14копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.setTransform(-16.4,143.6,1,1,0,0,0,79,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(73.2,19.2,1,1,0,0,0,73.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.4,0,241.8,165.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(73.2,19.2,1,1,0,0,0,73.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.4,38.3);


(lib.Символ12копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.setTransform(-0.3,90.9,0.864,0.864,0,0,0,99.2,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ11копия();
	this.instance_1.setTransform(90.7,31.2,1,1,0,0,0,90.7,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.1,0,267.5,111.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(90.7,31.2,1,1,0,0,0,90.7,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,62.6);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fire
	this.instance = new lib.fire("synched",0);
	this.instance.setTransform(300,120,1,1,0,0,0,70,130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230,-10,140,260);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(90.7,31.2,1,1,0,0,0,90.7,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:66.7},6).to({x:90.7},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,62.6);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(73.2,19.2,1,1,0,0,0,73.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:54.2},9).to({x:73.2},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.4,38.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(101.5,23.9,1,1,0,0,0,101.5,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,47.7);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6));

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(101.5,23.9,1,1,0,0,0,101.5,23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:113.9},4).to({y:23.9},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203,47.7);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(267.5,152.5,1,1,0,0,0,215,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.svet();
	this.instance_1.setTransform(28,147.8,0.446,0.446);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(60.9,104.8,0.659,0.659,0,0,0,304.9,121.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 1
	this.instance_3 = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(60,44.5,1,1,0,0,0,60,44.5);

	this.instance_1 = new lib.Символ16копия();
	this.instance_1.setTransform(60,44.5,1.09,1.09,0,0,0,60,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,89);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();
	this.instance.setTransform(73.2,19.2,1,1,0,0,0,73.2,19.2);

	this.instance_1 = new lib.Символ14копия();
	this.instance_1.setTransform(73.2,19.2,1.15,1.15,0,0,0,73.2,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.4,38.3);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.setTransform(90.7,31.2,1,1,0,0,0,90.7,31.2);

	this.instance_1 = new lib.Символ12копия2();
	this.instance_1.setTransform(90.7,31.2,1.192,1.192,0,0,0,90.7,31.2);

	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(90.7,31.2,1.192,1.192,0,0,0,90.7,31.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AwYlTMAgyAAAIAAKnMggyAAAg");
	this.shape.setTransform(93.2,27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.839)").s().p("AwYFTIAAqlMAgxAAAIAAKlg");
	this.shape_1.setTransform(93.2,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.4,62.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,305);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		    {
			    _this.txt.gotoAndPlay(1);
		
		    }
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		
		      function fl_MouseOutHandler_2()
		    {
			    _this.txt.gotoAndPlay(5);
		
		
		    }
			
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.txt = new lib.Символ27();
	this.txt.setTransform(503.1,261.8,1,1,0,0,0,101.5,23.9);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Слой 5
	this.b1 = new lib.Символ19();
	this.b1.setTransform(608.6,59.5,1,1,0,0,0,60,44.5);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.b2 = new lib.Символ18();
	this.b2.setTransform(606.1,120,1,1,0,0,0,73.2,19.2);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b3 = new lib.Символ17();
	this.b3.setTransform(610.5,190.4,1,1,0,0,0,90.7,31.2);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Символ17(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b3},{t:this.b2},{t:this.b1}]}).wait(1));

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.setTransform(309.5,283.5,1,1,0,0,0,10,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.bb = new lib.Символ26();
	this.bb.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.bb).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,152.5,718.6,313);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
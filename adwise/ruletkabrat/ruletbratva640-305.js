(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 26,
	color: "#FFFFFF",
	manifest: [
		{src:"images/arm.png", id:"arm"},
		{src:"images/body.png", id:"body"},
		{src:"images/head.png", id:"head"},
		{src:"images/image6.png", id:"image6"},
		{src:"images/_interface.jpg", id:"_interface"},
		{src:"images/tors.png", id:"tors"},
		{src:"images/wdg.png", id:"wdg"}
	]
};



// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,139);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,555);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.image6 = function() {
	this.initialize(img.image6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,64);


(lib._interface = function() {
	this.initialize(img._interface);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,500);


(lib.tors = function() {
	this.initialize(img.tors);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.wdg = function() {
	this.initialize(img.wdg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,122);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.8,-15.9,223.7,31.9);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.7,-15.9,245.4,31.9);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000202").s().p("EgtOAGMIEMsXMBWRAAAIAAMXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-289.5,-39.7,579.1,79.4);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwdBOIgNgGIAAlGMAhVAAAIAAFNQm3CwpsAAQpsAAm5ixg");
	this.shape.setTransform(-0.8,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.6,-20.6,213.5,51.2);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AmmFjQgLgMAAgKQAAgNANgPIAAgBQAHgdARglQAQgiAhg/IAtheQAbg0AhgtQA9hVDUhaQA4gXBsgnIB0gqIAAgBQAAgCATgHQAcgLAbgRIADABIABADIARAHIAcANIAAACQhGBEiCBxIjPCxQgcAahZBBQhMA4gfAhQgOAOgjAdQghAcgNAOQgUAXgcAaQgnAlgMAAQgSAAgNgNgAmpFLIABAGIAAgBIABgJIgCAEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.4,-36.8,87,73.7);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009B0F").s().p("AsLE/IAAp9IYXAAIAAJ9gAlRAYQgJALgGAMIgFAOIgCAKQATAEAUABQAQACAUAAQAUAAATgCQASgCATgDQAFgLADgMIAEgZQAAgLgFgQIgFgLQgDgJgGgJIABgEIADgOIAAgGQAAgJgCgHIAAgBQgDgMgHgLIgBAAQgfgHgVAAIgGAAQgSAAgTACQgUADgSAFIgCABIAAADIADARIAEAHQAEANAKANIAIAJIAbgdQgEgFgEgFIgGgMQATgCAQAAIAUAAIAJAOIACAHIABAGIAAACQAAAGgDAIIgBACQgUAAgMACIgBATIAigBIAIANIAHANQADAJAAAHIgBAFQgBAIgDAHIgFANQgTACgUAAIgdgBQAFgIAJgJIAFgFIACgBIAAgBIgYgeQgKAJgLAMgAAAhlQgUABgUAEIACAUQABAfAAAhIgDBQIAAAEIAAACIAoADIAAg0IArgCIAugGIAAgBIAGgSQAEgRAAgQIAAgDQAAgNgHgWIgCgIQgEgLgGgKgACchlIgXACIgPAmQgGAfAAASQAAAQAEATQADAPAFAOIABAFIAIAQIA/AEQAYAAASgCIAZgDIAHgPIABgGQAGgPACgOQAEgSAAgQQAAgSgGgfIgNgiIgBgEIgZgCQgRgCgYAAQgWAAgTACgAiqhlQgGARgEASQgFAeAAARQAAAoASAzIA2ADQAYAAAggDIADgVQghAFgaAAIgSgBQgJgagDgWIAeABQAUAAATgBIgCgSQgSACgTAAIgfgBIgBgJQAAgSADgTQADgPAFgNIAWgBQAXAAAdAEIAJgTQghgFgcAAQgZAAghAEgACoA4IgGgOQgFgMgDgNQgCgQAAgNQAAgOAFgZQAEgPAGgNIABgDIA7AAIABADQAGANAFAPQAEAZAAAOQAAAOgDAQQgDANgEAMIgGANgAAAgMQAAgdAAgoQAVgCAXAAIABAAIABACQAGAKADALQAFALAAALIAAACQgBALgDALIgEARIgLABIgpACg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkZBaQgUgBgTgEIACgKIAFgOQAFgMAKgLQAKgMAKgJIAZAeIAAABIgCABIgFAFQgJAJgFAIIAdABQAUAAASgCIAGgNQADgHABgIIAAgFQAAgHgCgJIgHgPIgJgLIghABIABgTQAMgCATAAIABgCQADgIABgGIAAgCIgBgGIgCgHIgJgOIgUAAQgQAAgTACIAGAMQADAFAFAFIgbAdIgIgJQgKgNgFgNIgDgHIgDgRIgBgDIADgBQASgFAUgDQASgCATAAIAGAAQAVAAAfAHIABAAQAHALADAMIAAABQACAHAAAJIAAAGIgDAOIgBAEQAGAJADAJIAFAJQAFASAAALIgEAZQgEAMgFALQgSADgSACQgTACgUAAQgUAAgQgCgAgBBYIAAgCIAAgEIABhSQAAgfAAgfIgBgUQASgEATgBIBTgBQAGAKAEALIACAIQAHAWAAANIAAADQgBAQgEAPIgFAUIgBABIguAGIgqACIgDA0gAAlhDQACAoAAAbIAAAUIAogCIAMgBIAEgRQADgLAAgLIAAgCQAAgLgEgLQgDgLgGgKIgBgCIgCAAQgXAAgWACgACrBXIgHgQIgBgFQgGgOgDgPQgDgTAAgSQAAgQAGgfIAOgmIAYgCQASgCAXAAQAXAAASACIAZACIABAEIAMAiQAHAfAAAQQAAASgEASQgCAOgGAPIgCAGIgGAPIgZADQgSACgYAAgADNhBQgFANgEAPQgGAZAAAMQAAAPADAQQADANAFAMIAGAOIA7AAIAFgNQAFgMADgNQADgQAAgQQAAgMgFgZQgEgPgGgNIgBgDIg7AAgAiABWQgSgzAAgoQAAgRAFgeQADgSAGgRQAigEAZAAQAbAAAiAFIgJATQgegEgWAAIgXABQgEANgDAPQgDATAAASIAAAHIAgABQATAAASgCIACAUQgTABgUAAIgegBQADAWAJAaIASABQAaAAAggFIgCAVQggADgYAAIg2gDg");
	this.shape_1.setTransform(-3.9,-1.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-31.9,156,63.9);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaB3IAAhoQAAgdACgzIAEgsIAyAEIgFBqIBXgGIgFhiIA0gEIADAkQACAoAAAiQAAA9AEA0Ig1ADQgDgrAAg4IhXAHIAAA4IgBApgAjpB1IAEh1QAAgrgCgqIgCgbQAbgEAagCIBvgBQAHAOAGAOIADAKQAJAeAAARIAAAEQgBAWgFAVIgIAaIAAACIg+AIIg5ADQgBApgCAcgAizhbQADA2AAAlIAAAaIA1gDIAQgCIAHgWQACgQAAgPIABgCQAAgOgGgPQgEgPgIgNIgBgDIgCAAQgfAAgeADgAnxAqIgqAFIgBAAIgzAEIgHgaQgGgZgDgaQgBgNAAgQQAAgPACgWIAEgaIAAgBIA2gCIgFAbQgDAXAAAQIACAXQADAbAGAaIAwgFIgBgQQAAglADg2IABgbQAaACAbAEIgCAbQgCAqAAArIAAAgQABAxADAkIg1AEQgCgfgBgwgADVB0QgGgKgEgLIgDgHQgHgUgEgUQgEgZAAgXQAAgXAJgpIAQgvIACgFIAggCQAYgCAfgBQAfABAXACIAiADIALAcIAHAXQAIApAAAXQAAAXgEAYQgDAUgIATIgLAdIgiADQgYACggAAgAEChZQgIASgGATQgGAigBASQAAAUAFAVQAEARAFAQIAJATIBPAAIAHgSQAGgQAEgRQAFgWAAgUQAAgSgHghQgGgVgHgRIgCgEIhPAAgAHGBzQgYhEAAg3QAAgXAGgoQAEgYAJgWQAsgGAjAAQAkAAAtAGIgMAaQgogGgdAAIgfABQgGATgEATQgEAaAAAYIAAAJIAqABQAaAAAZgCIABAbQgZACgbAAIgogCQAEAdANAkIAXAAQAkAAArgGIgDAcQgrAEghAAIhHgDgAmSBzQgYhEABg3QAAgXAFgoQAFgYAIgWQAtgGAiAAQAlAAAsAGIgMAaQgogGgdAAIgfABQgFATgEATQgFAaAAAYIAAAJIArABQAaAAAZgCIABAbQgZACgbAAIgogCQADAdAOAkIAXAAQAjAAAsgGIgEAcQgrAEggAAIhIgDg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.9,-12.4,121.9,24.9);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Ap4CAIgBgZIgHgqQgHgZgYgmIgNgSIgUARIAAAGQADAzABAuIAAAOIg1gDIAAgLQAAgsgEgyIAAgSIAIhrIA0ADIgHBOIAmgjQATgTAUgZIAfADQgVAegcAcIARAXQAMASAJAQQALAXAHAXIADAOIAHBEgAi7BdIgBAAQgEgegIgpIhTAAQgGAjgHAlIgGAZQgfgCgWgEIAGgZQAHgeAGgpIAEgeQAEgYAMg1IAIggQAdgDAaAAIAQAAQAdAAAXACIAmCMQAGAfAGAnIADAaQgYAFgcACgAjOgCIgbhhIgbAAIgJAnQgHAggDAWIAAAEIBJAAgAB5ByIAAhoQAAgdADgzIADgsIA1AFIgGBrIBXgHIgFhiIA0gFIADAlQADAnAAAkQAAA7ADA0Ig1ADQgCgrgBg3IhXAHIAAA3IgBApgAoxBwIADh0QAAgsgCgqIgBgaQAagFAagCIBvgBQAIAOAFAOIAEAKQAIAeAAASIAAADQgBAWgFAVIgHAbIgBABIg+AIIg5ADQgBAqgCAbgAn7hgQACA2AAAmIAAAZIA2gDIAPgBIAHgXQADgPAAgPIAAgCQAAgPgFgPQgFgPgHgNIgCgDIgCAAQgfAAgdADgAFqBvQgGgKgEgLIgCgHQgHgTgEgVQgFgYAAgXQAAgYAJgpIAQgvIACgEIAhgDQAXgCAfAAQAfAAAYACIAhADIACAFIAQAuQAJApAAAYQAAAWgFAYQgDAUgHATIgMAdIgiAEQgYACggAAgAGXheQgIASgFAUQgHAhAAATQAAATAEAVQAEARAGAQIAIAUIBPgBIAHgRQAHgRADgRQAFgWAAgTQAAgTgHghQgFgUgIgRIgCgFIhPAAgAhWBvIgKgVIgCgHQgHgTgEgVQgFgYAAgXQAAgYAJgpIAGgXIAMgcIAhgDQAXgCAfAAIBJAEIAKAbQAHAWAFAWIg0AKQgEgVgLgeIgDgIIhAABIgCAEQgJATgEATQgHAhAAATQAAATAEAVQAEARAGAQIAIAUIBMgBIABgCQAJgUAFgXIAzANIgSA2IghAEQgYACgeAAgAJbBuQgYhEAAg3QAAgXAGgoQAFgYAIgWQAtgGAiAAQAkAAAtAGIgMAaQgogFgdAAIgfABQgGASgDAUQgFAZAAAYIAAAMIArABQAZAAAZgCIACAYQgaACgaAAIgogBQADAdANAjIAYAAQAjAAArgGIgDAcQgrAFggAAIhIgEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.8,-12.9,151.8,25.9);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhSDxIm2nhIQRAAIoVHhg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.1,-24.1,104.3,48.3);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiLGoIAAtPIEXAAIAANPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14,-42.5,28,85);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3333").s().p("AjmA3IC5hrIEUgDIi4Bvg");
	this.shape.setTransform(0.4,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.7,-5.6,46.3,11.3);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AhZlyICzhqIgBNGIiyBzg");
	this.shape.setTransform(0.1,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-47.3,18.1,95.6);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkfgMIDWjQIFpDpIiwDQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.9,-22.1,57.8,44.3);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkfgMIDWjQIFpDpIiwDQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.9,-22.1,57.8,44.3);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjpBKIEvjzICkBaIkvD5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-17,47,34);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wdg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118,122);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjpBKIEvjzICkBaIkvD5g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.5,-17,47,34);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.tors();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(16.5,1,1).p("AAAi1QBLAAA2A1QA1A2AABKQAABLg1A2Qg2A1hLAAQhKAAg2g1Qg1g2AAhLQAAhKA1g2QA2g1BKAAg");
	this.shape.setTransform(-2.5,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF3300").ss(6,1,1).p("AAAqHQEMAAC+C+QC+C+AAELQAAEMi+C+Qi+C+kMAAQkLAAi+i+Qi+i+AAkMQAAkLC+i+QC+i+ELAAg");
	this.shape_1.setTransform(-2.7,8.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.5,-59.2,135.7,135.7);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arm();
	this.instance.setTransform(-31.7,-69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-69.5,64,139);


(lib.shape7Hit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image6, null, new cjs.Matrix2D(1,0,0,1,-175,-32)).s().p("A7VE/IAAp+MA2qAAAIAAJ+g");
	this.shape.setTransform(8,-19);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-167,-51,350,64);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(0.6,-15,0.647,0.642);
	this.instance.alpha = 0.121;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ44();
	this.instance_1.setTransform(0,0,0.885,0.885);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.1,-28.3,138.1,56.6);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ47();
	this.instance.setTransform(0.3,-14.8,0.643,0.643,0,0,0,0,-0.1);
	this.instance.alpha = 0.121;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Символ40();
	this.instance_1.setTransform(-0.5,-1.9,0.646,0.646);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqyEaIAAozIVlAAIAAIzg");

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.1,-28.3,138.2,56.6);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ51();
	this.instance.setTransform(0,0,1,1,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.5},10,cjs.Ease.get(-1)).to({rotation:-3},9,cjs.Ease.get(1)).to({rotation:1.8},10,cjs.Ease.get(-1)).to({rotation:6.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.9,-36.1,143.9,72.3);


(lib.Символ48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 56
	this.instance = new lib.Символ56();
	this.instance.setTransform(126,-18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.68},34).to({alpha:1},25).wait(1));

	// Символ 55
	this.instance_1 = new lib.Символ55();
	this.instance_1.setTransform(-115.1,-18.3);
	this.instance_1.alpha = 0.68;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},34).to({alpha:0.68},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.8,-34.3,475.7,31.9);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ41();

	// Слой 2
	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(2.4,-22.8);
	this.instance_1.alpha = 0.121;
	this.instance_1.compositeOperation = "lighter";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AwsG1IAAtpMAhZAAAIAANpg");
	this.shape.setTransform(1.6,0);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-105.3,-43.7,213.9,87.6);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ40();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AwsG1IAAtpMAhZAAAIAANpg");
	this.shape.setTransform(0.8,2.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.1,-40.8,213.9,87.6);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	this.instance.setTransform(-0.4,0);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.1,-5.6,46.3,11.3);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(0,-0.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-47.8,18.1,95.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ50();
	this.instance.setTransform(-263.4,-21.8);

	this.instance_1 = new lib.Символ38();
	this.instance_1.setTransform(-264,-23.7,0.646,0.646);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	// Слой 1
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(78.4,88.1,1.035,1.355,0,-12.7,2);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ14();
	this.instance_3.setTransform(14.8,52.5,1.035,1.156,0,-12.7,2);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(-23.5,29.2,1.061,1.065,0,-3.4,-3.5);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Символ14();
	this.instance_5.setTransform(-43.2,18.3,1.066,1.07,0,-4.1,-1.4,0.1,0);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.Символ14();
	this.instance_6.setTransform(65.8,-7.1,0.999,1.107,0,-15,0);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Символ14();
	this.instance_7.setTransform(86.3,3.9,0.999,1.107,0,-15,0);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.Символ14();
	this.instance_8.setTransform(127.4,24.7,0.999,1.107,0,-15,0);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.Символ14();
	this.instance_9.setTransform(26.9,-25.9,0.992,1.004,0,-8.7,0);
	this.instance_9.compositeOperation = "lighter";

	this.instance_10 = new lib.Символ14();
	this.instance_10.setTransform(9,-34.9,0.963,0.974,0,-8.7,0);
	this.instance_10.compositeOperation = "lighter";

	this.instance_11 = new lib.Символ14();
	this.instance_11.setTransform(-26,-53.4,0.904,0.905,0,-3,0);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.Символ14();
	this.instance_12.setTransform(-43,-61.9,0.904,0.905,0,-3,0);
	this.instance_12.compositeOperation = "lighter";

	this.instance_13 = new lib.Символ14();
	this.instance_13.setTransform(81.8,44.3,1.058,1.089,0,-13.7,0);
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.Символ14();
	this.instance_14.setTransform(22.5,11,0.957,0.974,0,-10.5,0);
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.Символ14();
	this.instance_15.setTransform(-35,-19.5,0.957,0.965,0,-7,0);
	this.instance_15.compositeOperation = "lighter";

	this.instance_16 = new lib.Символ14();
	this.instance_16.setTransform(-75.8,-79.9,0.904,0.904);
	this.instance_16.compositeOperation = "lighter";

	this.instance_17 = new lib.Символ14();
	this.instance_17.setTransform(-86.5,-47.5,0.957,0.957);
	this.instance_17.compositeOperation = "lighter";

	this.instance_18 = new lib.Символ14();
	this.instance_18.setTransform(-97.5,-12.8);
	this.instance_18.compositeOperation = "lighter";

	this.instance_19 = new lib.Символ14();
	this.instance_19.setTransform(-130.5,-32.3);
	this.instance_19.compositeOperation = "lighter";

	this.instance_20 = new lib.Символ22();
	this.instance_20.setTransform(-77.1,38.7);
	this.instance_20.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-335.4,-57.9,143.9,72.3);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(0,-8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ25(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-335.4,-103.3,484,205.6);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(36.9,30.6,1,1,0,0,0,59,61);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-24, 34, 0, -74))];
	this.instance.cache(-2,-2,122,126);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-30.4,121,125);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(50,54,1,1,0,0,0,50,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.01,y:54.5},14).to({scaleX:1,scaleY:1,y:54},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,108);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(36.5,36.1,1,1,0,0,0,36.5,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:36,y:36},0).wait(1).to({rotation:0.1,y:36.1},0).wait(1).to({rotation:0.3,x:36.6,y:36.2},0).wait(1).to({rotation:0.5,y:36.4},0).wait(1).to({rotation:0.9,x:36.7,y:36.6},0).wait(1).to({rotation:1.2,x:36.8,y:36.9},0).wait(1).to({rotation:1.7,y:37.2},0).wait(1).to({rotation:2.2,x:36.9,y:37.5},0).wait(1).to({regY:36.1,rotation:2.8,x:37,y:38},0).wait(1).to({regY:36,rotation:3.4,x:37.2,y:38.3},0).wait(1).to({rotation:3.9,y:38.7},0).wait(1).to({rotation:4.4,x:37.3,y:39},0).wait(1).to({rotation:4.8,y:39.2},0).wait(1).to({rotation:5.2,x:37.4,y:39.5},0).wait(1).to({rotation:5.5,x:37.5,y:39.7},0).wait(1).to({rotation:5.7,y:39.8},0).wait(1).to({rotation:5.9,y:39.9},0).wait(1).to({rotation:6,y:40},0).wait(1).to({regY:36.1,x:37.6,y:40.1},0).wait(1).to({regY:36,x:37.5,y:40},0).wait(1).to({rotation:5.9,y:39.9},0).wait(1).to({rotation:5.7,y:39.8},0).wait(1).to({rotation:5.5,y:39.7},0).wait(1).to({rotation:5.2,x:37.4,y:39.5},0).wait(1).to({rotation:4.8,x:37.3,y:39.3},0).wait(1).to({rotation:4.4,y:39},0).wait(1).to({rotation:4,x:37.2,y:38.7},0).wait(1).to({rotation:3.4,x:37.1,y:38.3},0).wait(1).to({regY:36.1,rotation:2.8,y:38.1},0).wait(1).to({regY:36,rotation:2.3,x:36.9,y:37.6},0).wait(1).to({rotation:1.8,x:36.8,y:37.3},0).wait(1).to({rotation:1.4,y:37},0).wait(1).to({rotation:1,x:36.7,y:36.7},0).wait(1).to({rotation:0.7,x:36.6,y:36.5},0).wait(1).to({rotation:0.4,y:36.3},0).wait(1).to({rotation:0.3,y:36.2},0).wait(1).to({rotation:0.1,x:36.5,y:36.1},0).wait(1).to({rotation:0,y:36},0).wait(1).to({regY:36.1,y:36.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,72);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shape7Hit("synched",0);
	this.instance.setTransform(-8.1,3.7,0.388,0.4,0,46.1,31.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.9,-44.4,134,88.9);


(lib.Символ8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(35,35,1,1,0,0,0,35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:35.1,scaleX:0.16},13).wait(1).to({scaleX:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-30.4,121,125);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(-5.5,48,1,1,0,0,0,-5.5,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,regY:0,x:0.2,y:0},0).wait(2).to({rotation:0.1},0).wait(1).to({x:0.3},0).wait(1).to({rotation:0.2},0).wait(1).to({x:0.4},0).wait(1).to({rotation:0.3,x:0.5},0).wait(1).to({rotation:0.4,y:0.1},0).wait(1).to({rotation:0.5,x:0.6},0).wait(1).to({rotation:0.7,x:0.7},0).wait(1).to({regX:-5.5,regY:48,rotation:0.8,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:1,x:1,y:0.1},0).wait(1).to({rotation:1.1,x:1.2},0).wait(1).to({rotation:1.3,x:1.3},0).wait(1).to({rotation:1.4,x:1.4,y:0.2},0).wait(1).to({rotation:1.6,x:1.5},0).wait(1).to({rotation:1.7,x:1.6},0).wait(1).to({rotation:1.8,x:1.7},0).wait(2).to({rotation:1.9,x:1.8},0).wait(3).to({regX:-5.5,regY:48,rotation:2,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:1.9,x:1.8,y:0.2},0).wait(3).to({rotation:1.8},0).wait(1).to({x:1.7},0).wait(1).to({rotation:1.7,x:1.6},0).wait(1).to({rotation:1.6,x:1.5},0).wait(1).to({rotation:1.5},0).wait(1).to({rotation:1.4,x:1.3},0).wait(1).to({rotation:1.3,x:1.2},0).wait(1).to({rotation:1.1,x:1.1},0).wait(1).to({rotation:1,x:1},0).wait(1).to({regX:-5.5,regY:48,rotation:0.8,x:-5.5,y:48},0).wait(1).to({regX:0.2,regY:0,rotation:0.7,x:0.8,y:0.1},0).wait(1).to({rotation:0.6,x:0.7},0).wait(1).to({rotation:0.4,x:0.6},0).wait(1).to({x:0.5,y:0},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2,x:0.4},0).wait(1).to({rotation:0.1},0).wait(1).to({x:0.3},0).wait(1).to({rotation:0},0).wait(3).to({regX:-5.5,regY:48,x:-5.5,y:48},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-69.5,64,139);


(lib.Symbol9 = function() {
	this.initialize();

	// Symbol 10
	this.instance = new lib.Symbol11();
	this.instance.setTransform(62.3,-139.7);

	// Layer 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-163.2,-151.2,1,1,0,0,0,-110.3,53);

	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(18,-238.4,1,1,0,0,0,36.5,36.1);

	this.instance_3 = new lib.body();
	this.instance_3.setTransform(-92.1,-277.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.1,-277.5,188,555);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1.4},7,cjs.Ease.get(-1)).to({y:3},8,cjs.Ease.get(1)).to({y:1.5},7,cjs.Ease.get(-1)).to({y:0},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-277.5,188,555);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(-1.6,0,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5.1},15,cjs.Ease.get(-1)).to({x:14},20,cjs.Ease.get(1)).to({x:6.1},27,cjs.Ease.get(-1)).to({x:-1.6},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,-231.6,156.9,463.2);


(lib.Символ54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(0,0,1,1,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0},12,cjs.Ease.get(-1)).to({rotation:-4.7},11,cjs.Ease.get(1)).to({rotation:1},11,cjs.Ease.get(-1)).to({rotation:5.2},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,-34.4,142.8,68.8);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(-1,0,0.646,0.646,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.5},7,cjs.Ease.get(-1)).to({rotation:2.5},7,cjs.Ease.get(1)).to({rotation:-0.3},7,cjs.Ease.get(-1)).to({rotation:-3.7},6,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-32.7,141.4,65.3);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ54();
	this.instance.setTransform(-1.4,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AqxEaIAAozIVjAAIAAIzgAkqAVQgJAKgEAKIgFANIgBAJQAQADASABQAOACARAAQATAAAQgCQAQgBARgDQAEgKADgKIAEgXQgBgJgEgOIgEgKQgDgIgFgIIABgDIADgNIAAgGQAAgHgCgHIAAAAQgDgLgHgKQgcgGgSAAIgGAAQgQAAgQACQgRACgRAFIgCABIABACQAAAHACAIIADAHQAEALAJAMIAIAIIAXgaIgHgJIgGgLIAfgBIASAAIAIAMIADAHIAAAEIAAACQgBAGgDAHIAAABQgSABgKABIgBARIAdgBIAIAMIAHALQABAIAAAGIAAAEQgBAIgCAGIgFALQgQACgTAAIgZgBIANgOIAEgFIABgBIABgBIgWgaQgJAHgJALgAgjhVIABASQACAbAAAdIgDBMIAiADIABguIAmgBIAogGIAAgBIAGgPQADgPAAgPIAAgCQAAgMgFgUIgDgHQgDgJgFgJIhIAAIgiAFgACLhaIgWACIgMAiQgGAbAAAQQAAAPADAQIAIAaIABAFQACAHAEAHIA5ADIAlgBIAWgDIAHgTQAFgNADgNQACgQAAgOQABgQgGgbIgMghIgWgDIgkgBIgkABgAiXhZQgFAPgDAQQgEAaAAAQQAAAjAQAtIAvADQAVAAAdgEIACgSQgdAEgXAAIgQAAQgIgYgDgTIAbABQASAAARgBIgBgQQgRACgRAAIgcgBIAAgHQAAgRADgQQACgOAEgLIAUgBQAUAAAaADIAIgRQgdgEgZAAQgWAAgeAEgACVAyIgGgNIgGgWQgDgOAAgMQAAgMAFgWQAEgOAFgLIABgDIA0AAIACADQAEALAEAOQAFAWgBAMQAAAMgDAPQgCALgEALIgFAMgAAAgLQAAgZAAgkQASgCAVAAIABAAIABACQAFAJADAKQAEAKgBAKIAAABIgCAUIgEAOIgKABIgkACg");
	this.shape.setTransform(-1.5,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj5BQQgSgBgQgDIABgKIAFgMQAFgKAIgKQAJgLAJgIIAWAbIAAABIgBABIgFAEIgMAPIAZABQASAAAQgCIAFgLQADgHAAgHIABgEQAAgHgCgHIgHgOIgHgJIgdABIABgRQAKgCARAAIABgCQADgHAAgFIAAgCIAAgFIgDgGIgIgNIgRAAIgfACIAFAKIAIAKIgYAZIgIgIQgIgLgFgMIgCgGQgDgIAAgHIgBgDIACAAQARgFARgCQAQgDARAAIAFAAQATABAcAGQAGAKADAKIAAABQACAGAAAIIAAAGIgDAMIgBAEQAFAIADAHIAEAIQAFAQAAAKIgEAWQgDALgEAJQgQADgRABQgQACgSAAQgRAAgPgBgAgBBOIABhOQAAgbAAgcIgBgSIAhgEIBJAAQAFAIAEAKIACAHQAGAUAAALIAAACQgBAPgDANIgFASIAAABIgpAFIgmACIgCAugAAhg7QACAkAAAXIAAASIAjgCIAKgBIAEgPIADgTIAAgCQAAgKgEgKQgDgJgFgJIgBgCIgBAAQgVAAgTACgACYBNQgEgGgDgIIgBgEIgIgaQgDgRAAgQQAAgOAGgcIANghIAVgCIAkgBIAkABIAWACIAMAiQAGAbAAAOQAAAQgDAQQgDANgEANIgIASIgWADIglABgAC2g6QgFAMgEANQgFAWAAALQAAAOADANIAHAWIAFANIA0AAIAFgLQAEgLADgMQADgOAAgOQAAgLgFgVQgDgOgFgLIgCgDIg0AAgAhxBMQgQgtAAgjQAAgPAEgbQADgQAFgPQAegDAXAAQAYAAAeAEIgIARQgbgDgTAAIgVAAQgEAMgCANQgDARAAAQIAAAGIAcAAQARAAARgBIABARQgRACgSAAIgagBQACATAIAXIAQABQAYAAAcgEIgCASQgcADgWAAIgvgDg");
	this.shape_1.setTransform(-4.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// Слой 2
	this.instance_1 = new lib.Символ46();
	this.instance_1.setTransform(148.6,-173.6);
	this.instance_1.alpha = 0.59;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-35.5,142.8,68.8);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ45();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ45(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.8,-210.4,265,243.7);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ43();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.8,-35.5,142.8,68.8);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-5.2,70.7);

	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(0,-42.4);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Символ31();
	this.instance_2.setTransform(13.9,-0.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.Символ30();
	this.instance_3.setTransform(-9.1,5.6);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AiyEjIgUmWIjJCwIAAhnIgTAKIjLiZIDUhmIGZgFIgDAEIJxgEIqDI6QhXAPgsAAQgQAAgKgCg");
	this.shape.setTransform(4.9,65.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-48.1,124.5,143);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ52();
	this.instance.setTransform(-263.3,41.8);

	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(-264.4,41.8,0.646,0.646);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AqxEaIAAozIVjAAIAAIzg");
	this.shape.setTransform(-263.4,41.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(3));

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(-38.4,58.1);
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Символ16();
	this.instance_3.setTransform(57.5,71.3,1.059,1.175,0,-10,0);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ16();
	this.instance_4.setTransform(36.1,59.8,1.059,1.175,0,-10,0);
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.Символ16();
	this.instance_5.setTransform(-4.7,36.9,1.059,1.075,0,-10,0);
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.Символ16();
	this.instance_6.setTransform(103.7,51.8,1.059,1.183,0,-14.1,0);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Символ16();
	this.instance_7.setTransform(106.9,11.6,1.059,1.11,0,-17.5,0);
	this.instance_7.compositeOperation = "lighter";

	this.instance_8 = new lib.Символ16();
	this.instance_8.setTransform(46.1,-19.5,1.027,1.043,0,-10,0);
	this.instance_8.compositeOperation = "lighter";

	this.instance_9 = new lib.Символ16();
	this.instance_9.setTransform(61.9,28.8,1.078,1.094,0,-10,0);
	this.instance_9.compositeOperation = "lighter";

	this.instance_10 = new lib.Символ16();
	this.instance_10.setTransform(42.4,18.5,1.059,1.075,0,-10,0);
	this.instance_10.compositeOperation = "lighter";

	this.instance_11 = new lib.Символ16();
	this.instance_11.setTransform(-8.8,-47.3,1,1.015,0,-10,0);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.Символ16();
	this.instance_12.setTransform(-60.8,4.1,1,1.007,0,-6.7,0);
	this.instance_12.compositeOperation = "lighter";

	this.instance_13 = new lib.Символ16();
	this.instance_13.setTransform(-79.8,-5.8,1,1.007,0,-6.7,0);
	this.instance_13.compositeOperation = "lighter";

	this.instance_14 = new lib.Символ16();
	this.instance_14.setTransform(2.7,-3.3,1,1.015,0,-10,0);
	this.instance_14.compositeOperation = "lighter";

	this.instance_15 = new lib.Символ16();
	this.instance_15.setTransform(-16.3,-13.3,1,1.015,0,-10,0);
	this.instance_15.compositeOperation = "lighter";

	this.instance_16 = new lib.Символ16();
	this.instance_16.setTransform(-51.8,-32.3);
	this.instance_16.compositeOperation = "lighter";

	this.instance_17 = new lib.Символ16();
	this.instance_17.setTransform(-69.3,-41.3);
	this.instance_17.compositeOperation = "lighter";

	this.instance_18 = new lib.Символ16();
	this.instance_18.setTransform(-113.8,-25.8);
	this.instance_18.compositeOperation = "lighter";

	this.instance_19 = new lib.Символ16();
	this.instance_19.setTransform(-58.8,-73.8);
	this.instance_19.compositeOperation = "lighter";

	this.instance_20 = new lib.Символ16();
	this.instance_20.setTransform(-102.3,-59.8);
	this.instance_20.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334,9.1,141.4,65.3);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ26(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-334,-90.8,463.2,181.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8_1();
	this.instance.setTransform(-1.1,2.9,0.647,0.647,0,0,0,35.1,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:22.9,y:-9.1},29).to({x:-1.1,y:2.9},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-39.5,80,82);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ42();
	this.instance.setTransform(-225,127.4);

	this.text = new cjs.Text("Шрифт", "33px 'RB Naftalin'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 224;
	this.text.setTransform(-477.1,-343.3);

	// Слой 3
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(36.9,17.1);

	// Слой 2
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(38.4,21.9);

	// Слой 1
	this.instance_3 = new lib._interface();
	this.instance_3.setTransform(-323,-198.4,0.808,0.794);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.text,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-589.1,-343.3,912.2,541.8);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(41.8,-60.1,1,1,32.5);

	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(0.5,-4.3,0.298,0.213,0,16.3,7.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-113.9,123.3,127.9);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(-1.5,-7.3,0.314,0.314);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-27.3},4).to({y:-7.3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-22.4,39.1,44.9);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ37();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({x:-33.5,y:54.5},0).wait(16).to({x:24.5,y:56.5},0).wait(14).to({x:56,y:114},0).wait(14).to({x:146.1,y:74.5},0).wait(17).to({x:136.1,y:157},0).wait(13).to({x:43.5,y:145.5},0).wait(17).to({x:6.5,y:117.5},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-22.4,39.1,44.9);


// stage content:



(lib.ruletbratva640305 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		stage.canvas.style.cursor = "none";
		this.prik.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.prik.x = stage.mouseX;
			this.prik.y = stage.mouseY;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.prik = new lib.Символ4();
	this.prik.setTransform(864.6,161.3,1,1,0,0,0,0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.prik).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(226.3,217.2);
	this.instance.alpha = 0.73;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 11
	this.instance_1 = new lib.Символ48();
	this.instance_1.setTransform(413.8,303,0.879,0.879);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 13
	this.instance_2 = new lib.Символ49();
	this.instance_2.setTransform(459.8,301.2);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 14
	this.instance_3 = new lib.Символ57();
	this.instance_3.setTransform(519.8,212.6,1,1,0,0,0,-29.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 15
	this.instance_4 = new lib.Символ36();
	this.instance_4.setTransform(276.7,54.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 16
	this.instance_5 = new lib.Символ5();
	this.instance_5.setTransform(317,142.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.9,-48.4,1235.7,645.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
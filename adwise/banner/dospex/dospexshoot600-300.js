(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 28,
	color: "#FFFFFF",
	manifest: [
		{src:"images/darek_zabrocki_05.jpg", id:"darek_zabrocki_05"},
		{src:"images/dospexi_02.png", id:"dospexi_02"},
		{src:"images/dospexi_05.png", id:"dospexi_05"},
		{src:"images/dospexi_08.png", id:"dospexi_08"},
		{src:"images/dospexi_11.png", id:"dospexi_11"},
		{src:"images/dospexi_14.png", id:"dospexi_14"},
		{src:"images/dospexi_18.png", id:"dospexi_18"},
		{src:"images/spark.png", id:"spark"},
		{src:"images/weap.png", id:"weap"}
	]
};



// symbols:



(lib.darek_zabrocki_05 = function() {
	this.initialize(img.darek_zabrocki_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,400);


(lib.dospexi_02 = function() {
	this.initialize(img.dospexi_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,137);


(lib.dospexi_05 = function() {
	this.initialize(img.dospexi_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,70);


(lib.dospexi_08 = function() {
	this.initialize(img.dospexi_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,155);


(lib.dospexi_11 = function() {
	this.initialize(img.dospexi_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,73);


(lib.dospexi_14 = function() {
	this.initialize(img.dospexi_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,106);


(lib.dospexi_18 = function() {
	this.initialize(img.dospexi_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,74);


(lib.spark = function() {
	this.initialize(img.spark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,145);


(lib.weap = function() {
	this.initialize(img.weap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,160);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(2,1,1).p("AGP7zMCcTAAAAh33lMAAACfjEiihgbzMCZAAAAEgB3iH9MAAABoQ");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1041.2,-871.2,2082.6,1742.5);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AosCYIAAhPIiLAAIAABPIgkAAIAAhtIAHAAQAOAAAJgOQAKgOAAgWIAAiQIAkAAIAACQQAAAPgEAOQgFAMgIAJIBWAAIAAjCIAkAAIAADCIAeAAIAABtgAjlBHQgOgFgKgIQgKgKgGgNQgGgNABgQIAAidIAkAAIAACdQAAASALALQAKAKARAAQARAAAKgKQAMgLAAgSIAAg5IAjAAIAAA5QABAQgHANQgFANgKAKQgLAIgOAFQgNAFgPAAQgQAAgNgFgAmxBHQgNgFgLgJQgKgKgHgNQgFgOAAgQIAAibIAkAAIAACbQAAATALAMQAMALARgBQARABAMgLQAMgMAAgTIAAibIAkAAIAACbQAAAQgGAOQgGANgLAKQgKAJgOAFQgOAFgQAAQgQAAgOgFgAKoBJIAAjgIAjAAIAADCIASAAIAAAegAIdBJIAAgeIATAAIAAjCIAiAAIAABrIABAAIAghrIAYAAIg5DBIAAAfgAHcBJIg1jQIgBAAIgwCyIASAAIAAAeIhIAAIAAgeIATAAIA4jCIA3AAIA4DCIAUAAIAAAegACGBJIAAgeIATAAIAAjCICAAAIAAAPIhcAAIAACzIBJAAIAAheIAgAAIAAB8gAAyBJIAAjgIAjAAIAADCIATAAIAAAegAhUBJIAAgeIASAAIAAjCIAkAAIAADCIATAAIAAAeg");
	this.shape.setTransform(-1.6,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("AKdBsIAAhfIgBAAIgcBfIgYAAIA1i1IAAggIA1AAIAAAfIgSAAIAAC2gAIlBsIAAi2IgTAAIAAgfIA1AAIAADVgAGABsIAAAAIg2i2IgTAAIAAgfIAyAAIAxDDIACAAIAuikIgTAAIAAgfIBIAAIAAAfIgSAAIg2C2gACOBsIAAi2IgTAAIAAgfICgAAIAAB8IggAAIAAhdIhJAAIAACnIBcAAIAAAPgAAnBsIAAi2IhQAAIAAC2IgkAAIAAi2IgSAAIAAgfIC8AAIAAAfIgTAAIAAC2gAkdBsIAAiRQgBgQAGgOQAGgMAKgKQAKgJAOgEQANgFAQAAQAwAAAaAWIAABoIgjAAIAAhUQgPgMgYAAQgQAAgLALQgLALAAASIAACRgAl1BsIAAiPQAAgTgMgMQgMgLgRAAQgRAAgMALQgLAMAAATIAACPIgkAAIAAiPQAAgRAFgNQAHgOAKgJQALgJANgFQAOgFAQAAQAQAAAOAFQAOAFAKAJQALAJAGAOQAGANAAARIAACPgApVBsIAAi2IhFAAIAAC2IgkAAIAAi2IgTAAIAAgfICyAAIAAAfIgSAAIAAC2g");
	this.shape_1.setTransform(-0.5,-13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AuGFHIAAqNIcNAAIAAKNgAo8DEIAABPIAkAAIAAhuIgeAAIAAjBIAAi5IASAAIAAgeIiyAAIAAAeIATAAIAAC5IAACOQAAAXgKAPQgJANgPAAIgHAAIAABuIAkAAIAAhPgAj1jxQgOAEgKAKQgLAJgFAMQgGAOAAAQIAACUIAACcQAAAQAGAOQAFAMALAKQAKAIAOAGQANAEAQAAQAPAAANgEQAOgGAKgIQALgKAFgMQAGgOAAgQIAAg6IgjAAIAAA6QAAASgMAMQgLAKgQAAQgRAAgLgKQgLgMAAgSIAAicIAAiUQAAgSALgLQALgKARAAQAXAAAQALIAABXIAjAAIAAhrQgbgWgvAAQgQAAgNAFgAnBjxQgOAFgKAJQgLAKgGANQgFANAAASIAACRIAACaQAAARAFANQAGAOALAKQAKAIAOAGQAOAEAQAAQAQAAAOgEQAOgGAKgIQALgKAGgOQAGgNAAgRIAAiaIAAiRQAAgSgGgNQgGgNgLgKQgKgJgOgFQgOgFgQAAQgQAAgOAFgAKYh8IAABgIAADgIA0AAIAAgfIgSAAIAAjBIAAi5IASAAIAAgeIg0AAIAAAfIg2C4IgfBoIgBAAIAAhoIAAjXIg1AAIAAAeIATAAIAAC5IAADBIgTAAIAAAfIA1AAIAAggIA5jAIAbhggAGXgNIA1DRIAxAAIAAgfIgTAAIg4jBIA2i5IASAAIAAgeIhIAAIAAAeIATAAIguCnIgCAAIgyjFIgxAAIAAAeIATAAIA2C4IAAABIg5DBIgSAAIAAAfIBIAAIAAgfIgSAAIAwiygAB2DEICfAAIAAh+IgfAAIAABfIhJAAIAAizIBcAAIAAgOIAAgQIhcAAIAAipIBJAAIAABgIAfAAIAAh+IifAAIAAAeIATAAIAAC5IAADBIgTAAgAAhjVIAAC5IAADgIA2AAIAAgfIgSAAIAAjBIAAi5IASAAIAAgeIi8AAIAAAeIATAAIAAC5IAADBIgTAAIAAAfIBJAAIAAgfIgSAAIAAjBIAAi5gAnACdQgLgLAAgUIAAiaIAAiRQAAgUALgMQAMgLARABQARgBAMALQAMAMAAAUIAACRIAACaQAAAUgMALQgMALgRAAQgRAAgMgLgAqwClQAIgJAEgMQAFgNAAgRIAAiOIAAi5IBFAAIAAC5IAADBg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.3,-32.8,180.8,65.6);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AjuBDQAMAAAHgLQAIgLAAgTIAAh0IAcAAIAAB0QAAAPgEAMQgEAMgIAJQgHAIgKAEQgKAFgMAAgAIUBZIAAgYIAOAAIAAibIBmAAIAAANIhJAAIAACOIA6AAIAAhKIAZAAIAABigAHdBZIgyimIgTAAIAACOIAOAAIAAAYIg5AAIAAgYIAOAAIAAibIBGAAIAAABIA0CaIAOAAIAAAYgABmBZIAAgYIAPAAIAAibIAcAAIAACbIA+AAIAAibIAcAAIAACbIA+AAIAAibIAcAAIAACbIAPAAIAAAYgAAxBZIgNhcIg3AAIgLBEIAOAAIAAAYIg5AAIAAgYIAOAAIAYibIAaAAIgIA/IAzAAIgIg/IAaAAIAXCbIAPAAIAAAYgAiABZIAAizIAdAAIAACbIAOAAIAAAYgAkwBZIAAizIAbAAIAACbIAPAAIAAAYgAmeBZIAAgYIAPAAIAAibIAbAAIAABWIABAAIAZhWIATAAIgtCaIAAAZgAnhBZIAAizIAcAAIAACbIAOAAIAAAYgAo1BZIgdizIAXAAIAWCHIABAAIAYiHIAXAAIgeCzgAqRBZIAAgYIAPAAIAAibIAbAAIAACbIAPAAIAAAYg");
	this.shape.setTransform(-1.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("AIiBVIAAiQIgOAAIAAgZIB+AAIAABjIgZAAIAAhKIg6AAIAACFIBJAAIAAALgAF7BVIAAiQIgOAAIAAgZIArAAIAACeIASAAIAtiFIgOAAIAAgZIA5AAIAAAZIgPAAIgyCQgAEpBVIAAiQIgPAAIAAgZIA6AAIAAAZIgPAAIAACQgADPBVIAAiQIgPAAIAAgZIArAAIAACpgAB1BVIAAiQIgPAAIAAgZIArAAIAACpgAAaBVIgSiFIgBAAIgQCFIgaAAIAWiQIgMAAIAAgZIAzAAIAaCpgAiABVIAAiQIg3AAIAACQIgcAAIAAiQIgPAAIAAgZICNAAIAAAZIgOAAIAACQgAkwBVIAAhLIgBAAIgWBLIgTAAIAqiPIAAgaIAqAAIAAAZIgPAAIAACQgAmPBVIAAiQIgPAAIAAgZIAqAAIAACpgAnhBVIAAh1IgBAAIgTB1IgXAAIAcipIA5AAIAAAZIgOAAIAACQgApSBVIgUh1IgBAAIAAB1IgbAAIAAiQIgPAAIAAgZIA5AAIAdCpg");
	this.shape_1.setTransform(-1.1,-10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AsmEGIAAoLIZNAAIAAILgAjtijIAOAAIAACSIAABzQAAATgHALQgHALgMAAIAAAYQAMAAAKgEQAJgFAIgIQAIgJAEgMQAEgMAAgPIAAhzIAAiSIA3AAIAACSIAACyIArAAIAAgYIgOAAIAAiaIAAiSIAOAAIAAgZIiNAAgAIJChIB+AAIAAhkIgZAAIAABMIg6AAIAAiOIBJAAIAAgMIAAgLIhJAAIAAiHIA6AAIAABMIAZAAIAAhlIh+AAIAAAZIAOAAIAACSIAACaIgOAAgAGfgFIAzCmIAmAAIAAgYIgPAAIgziaIAAAAIAxiSIAQAAIAAgZIg5AAIAAAZIANAAIgsCHIgTAAIAAigIgrAAIAAAZIAPAAIAACSIAACaIgPAAIAAAYIA6AAIAAgYIgPAAIAAiOgABbChIDuAAIAAgYIgPAAIAAiaIAAiSIAPAAIAAgZIg6AAIAAAZIAPAAIAACSIAACaIg+AAIAAiaIAAirIgrAAIAAAZIAPAAIAACSIAACaIg+AAIAAiaIAAirIgrAAIAAAZIAPAAIAACSIAACaIgPAAgAAZBDIANBeIApAAIAAgYIgQAAIgWiaIgairIgzAAIAAAZIAMAAIgWCSIgYCaIgPAAIAAAYIA6AAIAAgYIgPAAIALhGgAk7hcIAABLIAACyIApAAIAAgYIgOAAIAAiaIAAiSIAOAAIAAgZIgpAAIAAAaIgrCRIgZBTIAAAAIAAhTIAAirIgqAAIAAAZIAOAAIAACSIAACaIgOAAIAAAYIAqAAIAAgZIAtiZIAWhLgAnsiIIAAB3IAACyIAqAAIAAgYIgPAAIAAiaIAAiSIAPAAIAAgZIg5AAIgdCrIgXCGIgBAAIgXiGIgcirIg5AAIAAAZIAOAAIAACSIAACaIgOAAIAAAYIA5AAIAAgYIgPAAIAAiaIAAh3IABAAIAUB3IAdCyIAiAAIAeiyIATh3gAgcArIAIg8IASiHIABAAIAQCHIAIA8g");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.7,-26.3,161.5,52.6);


(lib.Символ52 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AGWBUQAPAAAJgOQAKgOAAgYIAAiRIAkAAIAACRQAAATgGAQQgFAPgKAKQgJALgNAFQgMAGgPAAgAlnBtQgOgFgKgIQgLgKgFgMQgGgOABgQIAAidIAkAAIAACdQAAASALALQAKALARAAQARAAAKgLQAMgLAAgSIAAg5IAjAAIAAA5QAAAQgFAOQgGAMgKAKQgLAIgOAFQgNAFgPAAQgQAAgNgFgAsFBtQgOgFgLgJQgKgJgHgOQgFgNAAgRIAAibIAkAAIAACbQAAATAMAMQALALARAAQASAAALgLQAMgMAAgTIAAibIAkAAIAACbQAAARgGANQgGAOgLAJQgKAJgOAFQgOAFgQAAQgQAAgNgFgAMABvIAAjgIAjAAIAADCIASAAIAAAegAJ2BvIAAgeIATAAIAAjCIAiAAIAABrIABAAIAfhrIAYAAIg4DBIAAAfgAIhBvIAAjgIAjAAIAADCIATAAIAAAegADPBvIAAgeIASAAIAAjCICAAAIAAAPIhcAAIAACzIBJAAIAAheIAfAAIAAB8gAgEBvIAAgeIARAAIAAjCIAkAAIAAAPIAkAAQASAAAMgLIADgEIAoAAIgCAEQgGANgLAKQgJAJgOAFQgOAEgRAAIgkAAIAACVIASAAIAAAegAihBvIAAgeIATAAIAAjCIAkAAIAADCIASAAIAAAegAo9BvIAAgeIATAAIAAjCIAkAAIAADCIASAAIAAAeg");
	this.shape.setTransform(-2.4,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF66").s().p("AMABsIAAhfIgBAAIgcBfIgYAAIA1i1IAAggIA1AAIAAAfIgSAAIAAC2gAKJBsIAAi2IgTAAIAAgfIA1AAIAADVgAIhBsIAAi2IhFAAIAAC2IgkAAIAAi2IgTAAIAAgfICyAAIAAAfIgTAAIAAC2gADhBsIAAi2IgSAAIAAgfICeAAIAAB8IgfAAIAAhdIhJAAIAACnIBcAAIAAAPgAB2BsQAFgFACgHQACgHAAgHIAAhyQgBgUgLgLQgMgLgSAAIgkAAIAAC2IgkAAIAAi2IgRAAIAAgfIBZAAQARAAAOAFQAOAFAJAJQALAKAGANQAGAOABARIAAByIgBAOIgEAMgAiOBsIAAi2IgqAAIAABdIgfAAIAAh8IC2AAIAAB8IgfAAIAAhdIgqAAIAAC2gAmUBsIAAiRQgBgQAGgOQAFgMALgKQAKgJAOgEQANgFAQAAQAwAAAaAWIAABoIgjAAIAAhUQgPgMgYAAQgQAAgLALQgLALAAASIAACRgAoqBsIAAi2IgqAAIAABdIgfAAIAAh8IC2AAIAAB8IgeAAIAAhdIgrAAIAAC2gAq/BsIAAiPQAAgTgMgMQgLgLgSAAQgRAAgLALQgMAMAAATIAACPIgkAAIAAiPQAAgRAFgNQAHgOAKgJQALgJAOgFQANgFAQAAQAQAAAOAFQAOAFAKAJQALAJAGAOQAGANAAARIAACPg");
	this.shape_1.setTransform(-2.4,-12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AwMFdIAAq5MAgZAAAIAAK5gAGMjDIATAAIAAC5IAACQQAAAYgKAOQgIAOgQAAIAAAeQAPAAAMgGQAOgFAJgKQAJgLAGgPQAFgQAAgTIAAiQIAAi5IBGAAIAAC5IAADgIA2AAIAAgfIgTAAIAAjBIAAi5IATAAIAAgeIizAAgAmAjfQgNAEgKAKQgLAJgFAMQgGAOAAAQIAACUIAACcQAAAQAGAOQAFAMALAKQAKAIANAGQANAEAQAAQAQAAANgEQANgGALgIQALgKAFgMQAGgOAAgQIAAg6IgjAAIAAA6QgBASgMAMQgKAKgRAAQgQAAgLgKQgLgMAAgSIAAicIAAiUQAAgSALgLQALgKAQAAQAYAAAQALIAABXIAjAAIAAhrQgbgWgwAAQgPAAgOAFgAsejfQgOAFgLAJQgKAKgGANQgFANgBASIAACRIAACaQABARAFANQAGAOAKAJQALAJAOAGQAOAEAPAAQARAAAOgEQANgGALgJQALgJAFgOQAHgNgBgRIAAiaIAAiRQABgSgHgNQgFgNgLgKQgLgJgNgFQgOgFgRAAQgPAAgOAFgALohqIAABgIAADgIA1AAIAAgfIgSAAIAAjBIAAi5IASAAIAAgeIg1AAIAAAfIg1C4IggBoIgBAAIAAhoIAAjXIg1AAIAAAeIATAAIAAC5IAADBIgTAAIAAAfIA1AAIAAggIA5jAIAchggAC2DWICfAAIAAh+IgfAAIAABfIhKAAIAAi1IBdAAIAAgMIAAgQIhdAAIAAipIBKAAIAABgIAfAAIAAh+IifAAIAAAeIASAAIAAC5IAADBIgSAAgAgcDWIBHAAIAAgfIgSAAIAAiWIAkAAQAQAAAOgFQAOgFAKgJQALgKAGgLIACgDIADgNIABgOIAAh0QAAgRgGgOQgGgNgLgJQgKgKgOgFQgOgEgQAAIhZAAIAAAeIATAAIAAC5IAADBIgTAAgAi6DWIBJAAIAAgfIgSAAIAAjBIAAi5IAqAAIAABgIAfAAIAAh+Ii2AAIAAB+IAgAAIAAhgIApAAIAAC5IAADBIgTAAgApVDWIBJAAIAAgfIgSAAIAAjBIAAi5IAqAAIAABgIAfAAIAAh+Ii3AAIAAB+IAgAAIAAhgIAqAAIAAC5IAADBIgTAAgAsdCvQgMgLAAgUIAAiaIAAiRQAAgUAMgMQAMgLAQABQASgBAMALQAMAMgBAUIAACRIAACaQABAUgMALQgMALgSAAQgQAAgMgLgAAZACIAAgMIAAi5IAkAAQASAAALALQAMAMAAATIAAB0QAAAHgCAHQgCAHgEAGIgEADQgLAJgSAAg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.8,-34.9,207.6,69.9);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AmhGyIgMgvQgKgTgFgvIgEhQQAAg2AcifQAaiQAKgcQBhj+B3hCQAxgbBFgFQAWgCBsgBQDrAABZDPQAtBoAACKQgGBngLBjQgMB1gNAwQADAGAAAIQAAAIgZAYQgfAcgrAaQh/BJigAAQgxAAgigUQgfgRAAgWIAMggQALgeAAgbQAAgGAEgUQAFgTAAgHQAAgOAOgrQANgsAAgqQAAgPALgPQAOgTAUAAQAQAAATAVIAUAVQA1AAAlgyQAXgfAOgtQAAgDgLgBQidAMhJAPQhDAOgRAVIgJASQgGANgIAJQgcAchNAAQgZAAgGgPQgDgIgEgTQAJBHAFC4IALgHQAUgLAbgGQBEgNAAAoQAAAqhqAAQgMABgHgFIAAAQQAAARgRAhQgVAogYAAQgyAAgZhCgAgQGhQAQACAUAFQATAGAFAAQCJAABchBQAYgRAigcQAPgLAOgFQAekcAAg0QAAh+gphhQhOi4jGAAQiVABgwAUQhCAehHB4QgiA7gPAlQgVAvgHAvIgFAlIALABQAhAGAUAiIAYAkQASAbADAQQAJgFAXgYQAagbAfgQQBpg2D+AAQAdAAAJAdQAFAOgBAOQAAAKgKAcQgNAkgTAfQg7BahWAAQgQAAgMgLQgMgMgDAAIgWBmQgVBmAAAVQAAANABgGgAl1CKQgKBAAABeIgBA0QAKAHAGARQAQArADADIAGgNQAEgJAAgIQAAhfgNiUIgHhWIgOBPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-50,89.9,100);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.weap();
	this.instance.setTransform(-77,-61.6,0.77,0.77);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77,-61.6,154,123.2);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AuaU/MAAAgp9Ic1AAMAAAAp9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.4,-134.4,184.8,268.8);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dospexi_14();
	this.instance.setTransform(-45.5,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-53,91,106);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AnSELQghgkgZglQgYgjAAgKQgZjNgBgkQABgzArgrQBHhGCeAAQAVAACAAwQCAAwAWAAQAsAAAWgdQAPgSAWgvQA6heDDAAQBSAAA+BkQAvBMAKBKQATCcABBmQhBB8hnAAQg9AAhWgrQhMgrgGAAQiJARhZADIgTACQADAgABAXQAAAVgjATQgoAXhCADIiAAFQgHADgIAAQgtAAhKhSgAnRicQgwAoAAAiQAAAKAHBNIALBoQAFAvA1A/QA6BDAwAAQCcAAAlgXQAPgJAAgOQABgEgFgXQgIgjAtgPQBDgXDMAAQAOAABQAoQBPApA6AAIA0gCQABgHAPgSQARgSgBgGQABgDAIgXQAJgXAAgGQgIhXAAgMIgEgsIgFgtQAAh4iKhbQg0gig+AaQg6AagjBDQgdAdgsAkQgzAogMAAQgzAAh0grQgrgQhngrQgUgCgTAAQhNAAg0Aqg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.5,-34.9,115,69.9);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dospexi_11();
	this.instance.setTransform(-61,-36.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-36.5,122,73);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgRHnQAAgXARAAQASAAAAAXQAAAYgSAAQgRAAAAgYgAgIHnQAAARAIAAQAJAAAAgRQAAgQgJAAQgIAAAAAQgAgDGXQgFgCAAgCIABAAQAKgEAFgPQgDAEgFAAQgPAAAAgSQABgPAOAAQAQABAAAVQgBAVgPAJIgBABIgCgBgAgHFzQAAAKAHAAQAIgBAAgHQAAgLgIAAQgHAAAAAJgAgPEWQAAgLAIgEQgGgEAAgHQABgOAMAAQANAAAAAMQAAAKgFADQAHACABANQAAAPgQABQgPgBAAgPgAgIEVQABAKAHAAQAIAAAAgJQgBgLgHAAQgHACgBAIgAgFD8QABAIAFAAQAFgCAAgHQAAgHgGAAQgFAAAAAIgAgKC/QgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgKALgMQAIgMAAgJIgWAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAgAAQAAAPgLAOQgJANgBAIQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAgAgPA3QAAgYAPgKIACAAIACAAQAFADAAABIgBAAQgMAGgDAQQADgEAEAAQAQAAAAASQgBAQgPAAQgPgBAAgVgAgHA6QAAALAHAAQAIAAAAgJQAAgJgIAAQgHAAAAAHgAgOgdIAAgBIADgFIABgBIABABQADADAGABQAIgCAAgKQgBgKgJAAIgGABIgHgEIAHgUIATAAIABABIAAAEQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgNAAIgEAKIAFgBQAPAAACAQQAAATgQABQgKAAgEgFgAAFiFQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgJIgUAAIAAgEIASglIALAAIAAAiIAEAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgEAAIAAAJQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAgIiWIALAAIAAgZgAgPj4IgBgCIABgBIACgCIACgBIAAABQAEAFAHAAQAIgBAAgHQAAgJgIgBIgCAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgDQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIACAAQAHgBAAgHQAAgGgHAAQgFAAgDAEIgBABIgDgCIgBgBIABgCQAFgHAHAAQAOAAACAOQAAAHgGADQAHAEAAAJQgBAHgEAEQgEAEgIABQgLAAgEgHgAgQlkQABgMAMgFQAJgGAAgJQAAgIgGAAQgHAAAAALQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgDAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQABgRAOAAQAOAAAAANQAAANgJAFQgJAFgCADIAVAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAFQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAgAAAnQQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAggIgGALIgBABIgEgCIgCgCIALgUIAIAAIAAAsQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-51.1,3.7,102.3);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABXAVIAAgBIADgFIABgBIABABQADADAGABQAKgCAAgKQgBgIgLAAIgGABIgHgEIAHgUIAVAAIABABIAAAEQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAIgPAAIgEAKIAFgBQARAAACAOQAAATgRABQgLAAgEgFgABDAaQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIAAgJIgWAAIAAgEIAUgjIALAAIAAAgIAEAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAEQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgEAAIAAAJQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAgAA0AIIANAAIAAgWgAAEATIgBgCIABgBIACgCIACgBIAAABQAEAFAJAAQAIgBAAgHQAAgJgJgBIgDAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgCQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAEAAQAHgBAAgHQAAgGgHAAQgHAAgDAEIgBABIgDgCIgBgBIABgCQAFgHAJAAQAOAAACAOQAAAHgGADQAHACAAAJQgBAHgEAEQgEAEgIABQgNAAgEgHgAgiAVIAAgBIADgFIABgBIABABQADADAGABQAKgCAAgKQgBgIgLAAIgGABIgHgEIAHgUIAVAAIABABIAAAEQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAIgPAAIgEAKIAFgBQARAAACAOQAAATgRABQgLAAgEgFgAg2AaQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIAAgJIgWAAIAAgEIAUgjIALAAIAAAgIAEAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAEQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgEAAIAAAJQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAgAhFAIIANAAIAAgWgAh1ATIgBgCIABgBIACgCIACgBIAAABQAEAFAJAAQAIgBAAgHQAAgJgJgBIgDAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgCQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIAEAAQAHgBAAgHQAAgGgHAAQgHAAgDAEIgBABIgDgCIgBgBIABgCQAFgHAJAAQAOAAACAOQAAAHgGADQAHACAAAJQgBAHgEAEQgEAEgIABQgNAAgEgHg");
	this.shape.setTransform(-40.5,-12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABWAaIAAgCIAEgEIABgBIABAAQADAEAGAAQAKgBAAgKQgBgKgLgBIgGABIgIgCIAIgTIAUAAIABABIAAAEQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgOAAIgEAKIAFgBQAQAAADAOQgBAUgQAAQgLAAgFgEgAgfAeQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgKAKgLQALgKAAgJIgZAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAAgEQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAiAAQAAAPgMALQgLAOAAAHQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAgAg2AeQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAgJIgWAAIAAgEIAUgjIAKAAIAAAgIAFAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABIAAADQAAABgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgFAAIAAAJQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAgAhFANIANAAIAAgXgAh1AaIAAgCIAEgEIABgBIAAAAQADAEAHAAQAJgBAAgKQAAgKgLgBIgHABIgHgCIAHgTIAVAAIACABIAAAEQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAgBAAIgOAAIgEAKIAFgBQARAAABAOQAAAUgRAAQgKAAgFgEgAAtAJQgBgJAJgEQgGgEAAgHQABgOANAAQAOAAAAAMQAAAKgGADQAIACABALQAAAPgRABQgQgBAAgPgAA0AIQABAKAIAAQAJAAAAgJQgCgJgIAAQgIAAAAAIgAA3gPQABAIAHAAQAEgCAAgHQAAgHgGAAQgHAAABAIgAADADQABgWARgKIACAAIACAAQAEADABABIgBAAQgPAGgCAQQADgEAGAAQAQAAAAAQQgBAQgQAAQgRgBAAgVgAAMAGQAAALAJAAQAIAAAAgJQAAgIgJAAQgIAAAAAGg");
	this.shape_1.setTransform(-40.4,-12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABrAeQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgJIgWAAIAAgEIAUgjIALAAIAAAgIAEAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgEAAIAAAJQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAgABcANIANAAIAAgXgAAtAaIAAgCIADgEIABgBIABAAQADAEAGAAQAKgBAAgKQgBgKgLgBIgGABIgHgCIAHgTIAVAAIABABIAAAEQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgPAAIgEAKIAFgBQARAAACAOQAAAUgRAAQgLAAgEgEgAhNAXIgBgCIABgBIACgCIACAAIAAAAQAEAGAJAAQAIgCAAgHQAAgJgJgBIgDAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgDQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAEAAQAHgBAAgGQAAgHgHAAQgHABgDAEIgBAAIgDgCIgBgBIABgCQAFgGAJAAQAOAAACANQAAAHgGACQAHAEAAAJQgBAHgEAEQgEAEgIAAQgNAAgEgHgAADAJQAAgJAIgEQgGgEAAgHQABgOANAAQAOAAAAAMQAAAKgFADQAHACABALQAAAPgRABQgQgBAAgPgAAKAIQABAKAIAAQAJAAAAgJQgBgJgJAAQgHAAgBAIgAANgPQABAIAHAAQAFgCAAgHQAAgHgHAAQgGAAAAAIgAgkADQAAgWARgKIACAAIACAAQAFADAAABIgBAAQgOAGgDAQQADgEAGAAQAQAAAAAQQgBAQgQAAQgQgBAAgVgAgcAGQAAALAJAAQAIAAAAgJQAAgIgJAAQgIAAAAAGgAh3AYQABgMAMgFQALgGAAgHQAAgIgHAAQgIAAAAALQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgDAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQABgRAPAAQAPAAAAANQAAALgJAFQgLAFgCADIAXAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAAFQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_2.setTransform(-40.4,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_2}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.4,-14.6,23.8,5.3);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF66").ss(1,1,1).p("AgPAAIAfAA");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-1,5.3,2);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("ABQAAQAAAhgYAXQgXAYghAAQggAAgXgYQgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.spark();
	this.instance.setTransform(-30,-72.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-72.6,60,145);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B2216").s().p("AAaADQgWgSgOANQgQAMgLADQgLAEABgLQABgIAOgHQAPgHASABQAUACAOAIQAOAHgBAKQAAABAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgFAAgOgNg");
	this.shape.setTransform(0,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B2216").s().p("AAcAJQgVgLgPAIQgRAJgLABQgMAAABgKQABgJAOgHQAPgGASABQAUABAOAJQAOAGgBALQAAAEgEAAQgFAAgLgHg");
	this.shape_1.setTransform(0,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B2216").s().p("AgjARQgNgCABgLQABgIAOgHQAPgHASABQAUACAOAIQAOAHgBAKQgBALgSgHQgSgGgQAGQgMAEgKAAIgIgBg");
	this.shape_2.setTransform(0,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3B2216").s().p("AgiARQgOgFABgLQABgIAOgHQAPgHASABQAUACAOAIQAOAJgBAIQgBALgQAAQgQAAgRACIgMABQgLAAgJgEg");
	this.shape_3.setTransform(0,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B2216").s().p("AAAAZQgUgBgOgJQgOgIABgIQABgLAOgHQAPgGASABQAUABAOAJQAOAIgBAJQgBAKgOAHQgMAFgPAAIgGAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B2216").s().p("AgiARQgOgGABgKQABgJAOgHQAPgGASABQAUABAOAJQAOAIgBAJQgBAKgQACIghACIgJABQgNAAgKgFg");
	this.shape_5.setTransform(0,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B2216").s().p("AgjARQgNgDABgLQABgIAOgHQAPgHASABQAUACAOAIQAOAIgBAJQgBALgRgEQgSgEgQAEQgKADgJAAQgGAAgGgCg");
	this.shape_6.setTransform(0,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3B2216").s().p("AgkARQgMgBABgLQABgIAOgHQAPgHASABQAUACAOAIQAOAHgBAKQgBALgSgJQgTgKgQAIQgPAGgLAAIgEAAg");
	this.shape_7.setTransform(0,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3B2216").s().p("AAbAIQgUgNgPAJQgRAKgLABQgMABABgKQABgJAOgHQAPgGASABQAUABAOAJQAOAGgBALQAAAEgEAAQgFAAgMgIg");
	this.shape_8.setTransform(0,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-2.6,9.8,3.3);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dospexi_08();
	this.instance.setTransform(-93,-77.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93,-77.5,186,155);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dospexi_18();
	this.instance.setTransform(-93,-37);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93,-37,186,74);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.darek_zabrocki_05();
	this.instance.setTransform(-360,-200);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-360,-200,720,400);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dospexi_05();
	this.instance.setTransform(-61,-35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-35,122,70);


(lib.Символ58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:618.7},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:662.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ53();
	this.instance.setTransform(1.1,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.3},12,cjs.Ease.get(-1)).to({rotation:-2.9},12,cjs.Ease.get(1)).to({rotation:-1.5,y:1.4},12,cjs.Ease.get(-1)).to({rotation:0,y:1.3},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-25,161.5,52.6);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:598.6},68).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ52();
	this.instance.setTransform(2.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.8},14,cjs.Ease.get(-1)).to({rotation:3.7},15,cjs.Ease.get(1)).to({rotation:1.8,x:2.4,y:0.6},15,cjs.Ease.get(-1)).to({rotation:0,x:2.5,y:0.7},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.3,-34.3,207.6,69.9);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();
	this.instance.setTransform(1.6,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.3},16,cjs.Ease.get(-1)).to({rotation:2.7},18,cjs.Ease.get(1)).to({rotation:1.3},18,cjs.Ease.get(-1)).to({rotation:0},17,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-34.2,180.8,65.6);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(29, 29, 1)];
	this.instance.cache(-59,-37,119,74);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.5,-49.9,148,102);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ27();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-53,91,106);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ36();
	this.instance.setTransform(75,-2.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-64.3,154,123.2);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:2,y:3.6},15,cjs.Ease.get(-1)).to({rotation:4.2,y:7.2},15,cjs.Ease.get(1)).to({rotation:2,y:3.5},15,cjs.Ease.get(-1)).to({rotation:0,y:0},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-64.3,154,123.2);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:5,y:546.2},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-12,9.9,24);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ33();
	this.instance.setTransform(0.1,0,1.147,1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ40();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-50,89.9,100);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.69,scaleY:0.69},4).to({scaleX:1,scaleY:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(0,-721.2,0.454,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1202},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-754.2,27.3,65.9);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ13();
	this.instance.setTransform(32.9,-17,1.173,1.173);

	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(7.1,-15.8,1.255,1.255);

	// Слой 1
	this.instance_2 = new lib.dospexi_02();
	this.instance_2.setTransform(-55.5,-68.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-68.5,111,137);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(0.1,54.3);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(0.1,-54.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-105.4,3.7,210.8);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(0.1,54.3);

	this.instance_1 = new lib.Символ21();
	this.instance_1.setTransform(0.1,-54.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-105.4,3.7,210.8);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.setTransform(50.7,443.3,1,1,180);

	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(123.3,443.3,1,1,180);

	this.instance_2 = new lib.Символ35();
	this.instance_2.setTransform(192.2,443.3,1,1,180);

	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(256.1,181.6,0.363,0.363,180);
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.Символ49();
	this.instance_4.setTransform(31.9,419.4,1,1,180);

	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(100.8,419.4,1,1,180);

	this.instance_6 = new lib.Символ7();
	this.instance_6.setTransform(164.7,157.7,0.363,0.363,180);
	this.instance_6.compositeOperation = "lighter";

	this.instance_7 = new lib.Символ58();
	this.instance_7.setTransform(311.3,443.3,1,1,180);

	this.instance_8 = new lib.Символ57();
	this.instance_8.setTransform(375.1,443.3,1,1,180);

	this.instance_9 = new lib.Символ49();
	this.instance_9.setTransform(447.8,443.3,1,1,180);

	this.instance_10 = new lib.Символ35();
	this.instance_10.setTransform(516.7,443.3,1,1,180);

	this.instance_11 = new lib.Символ7();
	this.instance_11.setTransform(580.6,181.6,0.363,0.363,180);
	this.instance_11.compositeOperation = "lighter";

	this.instance_12 = new lib.Символ58();
	this.instance_12.setTransform(219.8,419.4,1,1,180);

	this.instance_13 = new lib.Символ57();
	this.instance_13.setTransform(283.7,419.4,1,1,180);

	this.instance_14 = new lib.Символ49();
	this.instance_14.setTransform(356.3,419.4,1,1,180);

	this.instance_15 = new lib.Символ35();
	this.instance_15.setTransform(425.2,419.4,1,1,180);

	this.instance_16 = new lib.Символ7();
	this.instance_16.setTransform(489.1,157.7,0.363,0.363,180);
	this.instance_16.compositeOperation = "lighter";

	// Слой 1
	this.instance_17 = new lib.Символ6();
	this.instance_17.setTransform(360,200);

	this.addChild(this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,455.3);


(lib.Символ48 = function() {
	this.initialize();

	// Символ 51
	this.instance = new lib.Символ51();
	this.instance.setTransform(371.7,57.2,0.947,0.947,-1);

	// Символ 47
	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(386.3,-0.5,0.747,0.747,-3);

	// Символ 46
	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(387.5,115.3,0.791,0.791,-2.7);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(295.8,-30.2,171.2,173.7);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ44();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.5,-49.9,148,102);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ45();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ29();
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(16, 16, 1)];
	this.instance.cache(-47,-52,94,104);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.9,-58,108,120);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ43();
	this.instance.setTransform(0.9,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ25();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-36.5,122,73);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(1.8,-108.5);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(1.8,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:1.1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-213.9,3.7,210.8);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ24();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61,-36.5,122,73);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ41();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-58,108,120);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(-0.6,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ39();

	this.instance_2 = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.6,-60.7,109,119);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgsEdIAAo5IBZAAIAAI5g");
	mask.setTransform(-0.1,-79.7);

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(-1.4,0);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,-108.2,3.7,57.1);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(45.6,73.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(41,-140.7,9,210.8);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("AocklIQ5AAIAAJLIw5AAg");
	this.shape.setTransform(1.2,-2.4);

	// Слой 5
	this.instance = new lib.Символ20();
	this.instance.setTransform(-92.3,4.1);
	this.instance.alpha = 0.488;

	// Слой 4
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(39.9,-24.8,0.874,0.874,0,0,0,-39.5,-13.1);
	this.instance_1.alpha = 0.488;

	this.instance_2 = new lib.Символ18();
	this.instance_2.setTransform(47.9,27.2,1,1,90);

	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(32,27.2,1,1,90);

	this.instance_4 = new lib.Символ18();
	this.instance_4.setTransform(40,27.2,1,1,90);

	this.instance_5 = new lib.Символ18();
	this.instance_5.setTransform(-45,27.2,1,1,90);

	this.instance_6 = new lib.Символ18();
	this.instance_6.setTransform(-36.3,27.2,1,1,90);

	this.instance_7 = new lib.Символ18();
	this.instance_7.setTransform(-26.8,27.2,1,1,90);

	this.instance_8 = new lib.Символ18();
	this.instance_8.setTransform(-18,27.2,1,1,90);

	this.instance_9 = new lib.Символ18();
	this.instance_9.setTransform(-10,27.2,1,1,90);

	this.instance_10 = new lib.Символ18();
	this.instance_10.setTransform(6.9,27.2,1,1,90);

	this.instance_11 = new lib.Символ18();
	this.instance_11.setTransform(15.6,27.2,1,1,90);

	this.instance_12 = new lib.Символ18();
	this.instance_12.setTransform(23.6,27.2,1,1,90);

	this.instance_13 = new lib.Символ18();
	this.instance_13.setTransform(-52.7,21.9);

	this.instance_14 = new lib.Символ18();
	this.instance_14.setTransform(-52.7,13.1);

	this.instance_15 = new lib.Символ18();
	this.instance_15.setTransform(-52.7,5.1);

	this.instance_16 = new lib.Символ18();
	this.instance_16.setTransform(-52.7,-11.9);

	this.instance_17 = new lib.Символ18();
	this.instance_17.setTransform(-52.7,-20.7);

	this.instance_18 = new lib.Символ18();
	this.instance_18.setTransform(-52.7,-28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66CC00").ss(1,1,1).p("AD9hzIAADsAj8h4IH5AA");
	this.shape_1.setTransform(27.6,-17.3);

	// Слой 3
	this.instance_19 = new lib.Символ16();
	this.instance_19.setTransform(-0.8,-2.9);

	// Слой 1
	this.instance_20 = new lib.Символ56();
	this.instance_20.setTransform(11.2,175.1);
	this.instance_20.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance_20.cache(-1043,-873,2087,1747);

	this.addChild(this.instance_20,this.instance_19,this.shape_1,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1031.1,-697.1,2088,1748);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:2.7},4,cjs.Ease.get(-1)).to({y:-4},5,cjs.Ease.get(1)).to({y:3},5,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-36.5,122,73);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ28();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.6,-60.7,109,119);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-18.4,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1,x:-19.4,y:17.5},10,cjs.Ease.get(-1)).to({rotation:-2.2,x:-20.3,y:19.3},9,cjs.Ease.get(1)).to({rotation:-1,x:-19.4,y:17.4},10,cjs.Ease.get(-1)).to({rotation:0,x:-18.4,y:15.6},10,cjs.Ease.get(1)).wait(1));

	// Символ 5
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-36.9,-75.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.8,x:-41.8,y:-71.9},10,cjs.Ease.get(-1)).to({rotation:-7.5,x:-46.2,y:-68.8},9,cjs.Ease.get(1)).to({rotation:-3.6,x:-41.6,y:-72.1},10,cjs.Ease.get(-1)).to({rotation:0,x:-36.9,y:-75.4},10,cjs.Ease.get(1)).wait(1));

	// Символ 2
	this.instance_2 = new lib.Символ2();
	this.instance_2.setTransform(-117,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.5,y:58.3},10,cjs.Ease.get(-1)).to({rotation:-14.4,x:-117.1,y:66.6},9,cjs.Ease.get(1)).to({rotation:-7.1,y:57.9},10,cjs.Ease.get(-1)).to({rotation:0,x:-117,y:49.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 4
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(101.6,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,rotation:12,x:101.9,y:32.8},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:23,x:102.2,y:49.7},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:11.5,x:101.9,y:31.8},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:101.6,y:14.1},10,cjs.Ease.get(1)).wait(1));

	// Символ 9
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(-16.4,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1,x:-17.5,y:13.5},10,cjs.Ease.get(-1)).to({rotation:-2.2,x:-18.5,y:15.2},9,cjs.Ease.get(1)).to({rotation:-1,x:-17.4,y:13.4},10,cjs.Ease.get(-1)).to({rotation:0,x:-16.4,y:11.6},10,cjs.Ease.get(1)).wait(1));

	// Символ 8
	this.instance_5 = new lib.Символ8();
	this.instance_5.setTransform(-18.4,108);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,skewX:1.5,x:-19,y:108.6},10,cjs.Ease.get(-1)).to({skewX:3,skewY:-0.1,x:-19.4,y:109},9,cjs.Ease.get(1)).to({skewX:1.3,skewY:0,x:-19,y:108.5},10,cjs.Ease.get(-1)).to({scaleX:1,skewX:0,x:-18.4,y:108},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.6,-143.9,333.2,289);


(lib.Символ55 = function() {
	this.initialize();

	// Слой 1
	this.pric = new lib.Символ14();
	this.pric.setTransform(0.1,2.7);

	this.addChild(this.pric);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1031,-694.4,2088,1748);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(0,-0.5,1,1,2.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-174.1,-147.9,337.4,295.1);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(-97.5,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15.5,y:-27.5},14,cjs.Ease.get(-1)).to({x:100,y:-25.5},15,cjs.Ease.get(1)).to({x:20,y:-27.5},27,cjs.Ease.get(-1)).to({x:-97.5,y:-28},27,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.1,-171.9,333.2,289);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.5},4,cjs.Ease.get(-1)).to({y:10},5,cjs.Ease.get(1)).to({y:5},5,cjs.Ease.get(-1)).to({y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.1,-147.9,337.4,295.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.4},4,cjs.Ease.get(-1)).to({y:-9.8},5,cjs.Ease.get(1)).to({y:-5},5).to({y:0},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.1,-171.9,333.2,289);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(83.9,31.2,1,1,2.2);

	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-15.4,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:164.1},6,cjs.Ease.get(-1)).to({x:237.3},7,cjs.Ease.get(1)).to({x:62.1},7,cjs.Ease.get(-1)).to({x:-7.6},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.6,-147.9,337.4,295);


// stage content:



(lib.dospexshoot600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		
		this.but1.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.girl.gotoAndPlay(2);
		
		}
		
		this.but1.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{   
			this.girl.gotoAndStop(0);
		
		}
		
		
		
		//---------------
		
		this.but2.addEventListener("mouseover", fl_Clickover2.bind(this));
		
		function fl_Clickover2()
		{
		    this.girl.gotoAndPlay(16);
		
		}
		
		this.but2.addEventListener("mouseout", fl_Clickout2.bind(this));
		
		function fl_Clickout2()
		{   
			this.girl.gotoAndStop(0);
		
		}
		
		
		//----------------
		
		this.pric.alpha=0;
		this.gun.alpha=0;
		
		this.cursor = "none";
		this.pric.mouseEnabled = false;
		this.addEventListener("tick", fl_CustomMouseCursor_2.bind(this));
		
		function fl_CustomMouseCursor_2() {
			this.pric.x = stage.mouseX;
			this.pric.y = stage.mouseY;
			this.gun.x = stage.mouseX;
		}
		
		
		
		
		
		//---------------
		
		document.addEventListener("mouseover", fl_Clickover3.bind(this));
		
		function fl_Clickover3()
		{
		
			this.pric.alpha=1;
			this.gun2.alpha=0;
			this.gun.alpha=1;
			
		
		}
		
		document.addEventListener("mouseout", fl_Clickout3.bind(this));
		
		function fl_Clickout3()
		{
		
			this.pric.alpha=0;
			this.gun2.alpha=1;
			this.gun.alpha=0;
		
		}
		
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		this.fon.x = - stage.mouseX / 10;
		this.fon.y = - stage.mouseY / 10;
		}
		
		
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.gun2 = new lib.Символ37();
	this.gun2.setTransform(436.1,261.2,0.929,0.929);

	this.gun = new lib.Символ37();
	this.gun.setTransform(750.1,261.2,0.929,0.929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gun},{t:this.gun2}]}).wait(1));

	// Слой 3
	this.pric = new lib.Символ55();
	this.pric.setTransform(-281.8,496.6);

	this.timeline.addTween(cjs.Tween.get(this.pric).wait(1));

	// Слой 2
	this.but2 = new lib.Символ34();
	this.but2.setTransform(492,160.7,1.688,1.224);
	new cjs.ButtonHelper(this.but2, 0, 1, 2, false, new lib.Символ34(), 3);

	this.but1 = new lib.Символ34();
	this.but1.setTransform(134.4,160.7,1.688,1.224);
	new cjs.ButtonHelper(this.but1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.but1},{t:this.but2}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ48();
	this.instance.setTransform(235,23.5,0.775,0.775);

	this.girl = new lib.Символ30();
	this.girl.setTransform(202.5,172.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.girl},{t:this.instance}]}).wait(1));

	// Слой 6
	this.fon = new lib.Символ50();
	this.fon.setTransform(-47,-55.4);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1012.8,-47.8,2204.1,1747);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 300,
	fps: 26,
	color: "#FFFFFF",
	manifest: [
		{src:"images/babs.png", id:"babs"},
		{src:"images/characteristics.png", id:"characteristics"},
		{src:"images/ffon.jpg", id:"ffon"},
		{src:"images/round.png", id:"round"},
		{src:"images/shok.jpg", id:"shok"}
	]
};



// symbols:



(lib.babs = function() {
	this.initialize(img.babs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,444);


(lib.characteristics = function() {
	this.initialize(img.characteristics);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,356);


(lib.ffon = function() {
	this.initialize(img.ffon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,500);


(lib.round = function() {
	this.initialize(img.round);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.shok = function() {
	this.initialize(img.shok);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.round();
	this.instance.setTransform(-83,-83);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-83,166,166);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.babs();
	this.instance.setTransform(231,-208.9,0.924,0.941,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-231,-208.9,462,417.8);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFoCvQgqgUgbgsQgagtAAhCQAAhbA0g0QA0g0BcAAQBeAAA0AzQAzAzAABcQAABAgWArQgWAqgrAYQgqAYg/AAQhBAAgpgVgAGUhRQgVAZAAA4QAAA6AVAZQAVAZAkAAQAnAAAUgZQAVgYAAg+QAAg1gVgZQgXgZglAAQgiAAgWAZgAnsCvQgqgUgagsQgagtAAhCQAAhbA0g0QA0g0BcAAQBeAAA0AzQAzAzAABcQAABAgWArQgWAqgrAYQgqAYhAAAQhAAAgqgVgAm/hRQgWAZABA4QgBA6AWAZQAVAZAlAAQAlAAAVgZQAVgYAAg+QAAg1gWgZQgWgZglAAQgjAAgVAZgA7cCvQgqgUgbgsQgagtAAhCQAAhbA0g0QA0g0BcAAQBfAAAzAzQA0AzAABcQAABAgXArQgWAqgrAYQgpAYhAAAQhAAAgqgVgA6vhRQgWAZAAA4QAAA6AWAZQAUAZAlAAQAmAAAVgZQAUgYABg+QAAg1gWgZQgWgZglAAQgjAAgVAZgAeIC9IAAl5IB1AAIAACSIA+AAQBXAAApAfQAqAcAABAQAAA1gmAcQgnAbhHAAgAf9BsIA8AAQA3AAAAgoQAAgjg3AAIg8AAgAZmC9IAAkbIh4AAIAAheIFkAAIAABeIh3AAIAAEbgAVpC9IgTg+IiFAAIgSA+Ih4AAICPl5IB/AAICPF5gAU9AtIgpiHIgpCHIBSAAgALRC9IAAl5IDcAAQA3AAAdAbQAdAbAAAoQAAAigVAYQgOAQgbAJQApAKATAWQATAYAAAkQAAAegNAXQgOAYgYAOQgPAIgdAEIg0AFgANHBsIA8AAQAfAAAMgLQAMgLAAgSQAAgRgMgKQgMgKgfAAIg8AAgANHgnIAzAAQAcAAAKgKQALgJAAgSQAAgRgLgJQgKgJgbAAIg0AAgAiCC9IAAl5IE+AAIAABNIjJAAIAABFIA9AAQBWAAAqAfQApAcAABAQABA1gmAcQgnAbhHAAgAgNBsIA6AAQA3AAAAgoQAAgjg3AAIg6AAgAu6C9IAAl5IDCAAQBAAAAgAeQAgAeAAA4QgBA6ghAeQgkAghHAAIg/AAIAACNgAtEgaIAcAAQAiAAAOgMQAOgMAAgSQgBgSgLgNQgMgMghAAIghAAgAx9C9IAAkcIiAAAIAAEcIh1AAIAAl5IFqAAIAAF5gA/vC9IAAkcIiAAAIAAEcIh1AAIAAl5IFqAAIAAF5g");
	this.shape.setTransform(0,5,0.903,0.903);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-205.6,-12.7,411.3,35.5);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.characteristics();
	this.instance.setTransform(-190.9,-141.5,0.795,0.795);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-190.9,-141.5,381.8,283.1);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().rr(-158.05,-240.05,316.1,480.1,7.5);
	this.shape.setTransform(0,0,0.886,0.903);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-140.1,-216.8,280.2,433.6);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("A7zGIQilAAAAilIAAnFQAAilClAAMA3nAAAQClAAAAClIAAHFQAAClilAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194.5,-39.2,389.1,78.5);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.shok();
	this.instance.setTransform(-21.9,-21.9,0.708,0.708);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-21.9,43.9,43.9);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3301").s().p("AAxDjIAAhLIirAAIAABLIhgAAIAAihIAiAAIBikfIBiAAIBlEfIAhAAIAAChgAAJBCIgri1IgCAAIgQBTIgdBiIBaAAgAw9CVQgcgIgVgQIgVgSQgIgKgHgMQgGgMgEgOQgDgPgBgQIAAh+QABgQADgOQAEgOAGgMQAJgQAagZQAVgQAdgHQAbgIAeAAQAdAAAcAIQAcAIAWAPQAbAZAIAQQAHAMADAOQAEAOAAAQIAAB+QAAAQgEAPQgDAOgHAMQgGAMgIAKIgVASQgVAQgcAIQgbAIgfAAQgeAAgbgIgAwuiCQgIAHgGAHQgEAJAAAJIAAB+QgBALAGAHQAFAIAJAGQARAJAYABQAZAAARgLQAJgFAFgIQAFgHAAgLIAAh+QAAgKgFgIQgGgJgJgFQgQgKgaAAQgYAAgRAKgAWbCYIAAh+IgPAAIhlB+Ih2AAIByiHQgQgHgNgIQgOgHgLgNQgLgOgFgTQgGgVAAgaQABgdAKgYQAKgWATgQQARgQAbgIQAagIAgAAICWAAIAAF1gAVCh5QgLALgBAUQABATAKALQAMANAWAAIA4AAIAAhUIg4AAQgUAAgNAKgARFCYIAAiWIAJhFIgCAAIgkBHIhaCUIhZAAIAAl1IBfAAIAACqIgIA2IACAAIAghBIBfifIBYAAIAAF1gALaCYIAAiOIhsAAIAACOIhfAAIAAl1IBfAAIAACOIBsAAIAAiOIBgAAIAAF1gAGQCYIgYhLIhkAAIgXBLIhmAAICDl1IBWAAICHF1gAFhgGIgahtIgCAAIgcBtIA4AAgAnCCYIA3h6Ih0jsIhhCtIBqC5IhvAAIhCiAIhACAIhuAAIBpi5Ihpi8IBuAAIBACAIBCiAIDKAAIAlBRIAaBFIACAAIA+iWIBqAAIiqF1gA0xCYIAAkbIhqAAIAAEbIheAAIAAl1IEoAAIAAF1g");
	this.shape.setTransform(-2,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-155.1,-22.8,306.2,45.6);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3301").s().p("AjwDhIAAhMIitAAIAABMIhhAAIAAihIAiAAIBikgIBkAAIBmEgIAgAAIAAChgAkZBAIgti2IgCAAIgQBUIgdBiIBcAAgAGgCVIAAh+IgQAAIhlB+IjGAAIgwidIgVhuIgDAAIgXBuIgrCdIhlAAIB+l1IBVAAIB8FjIBjh1QgRgGgNgIQgOgIgKgNQgLgOgGgTQgGgUAAgbQABgdAKgXQAKgXATgQQASgQAagIQAagIAhAAICVAAIAAF1gAFHh7QgMALAAATQAAATALAMQAMAMAWAAIA4AAIAAhUIg4AAQgVAAgMALg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.1,-22.5,102.3,45.1);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3301").s().p("ASQC4QgbgIgVgQQgWgQgLgYQgHgMgDgOQgEgOAAgQIAAh/QAAgQAEgOQADgOAHgMQAMgXAWgRQATgQAcgIQAagIAdAAQATAAARAEQAUAEAQAKQATAKAOAQQAQASALAYIhNAfQgKgQgSgIQgRgIgTADQgUACgMAKQgNALAAARIAAB/QAAAQANALQANALATACQATABAQgIQASgIAHgTIBTAmQgMAWgQARQgPAQgTAKQgRAKgUAFQgSAEgSAAQgcAAgagIgAufC4QgdgIgVgQIgUgSQgJgKgHgMQgGgMgEgOQgDgOAAgQIAAh/QAAgPADgPQAEgOAGgMQAJgQAagYQAWgQAdgIQAbgIAdAAQAeAAAbAIQAdAIAVAQQAcAYAIAQQAGAMAEAOQADAPAAAPIAAB/QAAAQgDAOQgEAOgGAMQgHAMgIAKIgUASQgWAQgcAIQgbAIgeAAQgeAAgbgIgAuRheQgIAGgFAHQgFAJAAAJIAAB/QAAAKAFAIQAFAHAJAGQARAKAZAAQAYAAASgLQAIgFAFgHQAFgIABgKIAAh/QgBgKgFgIQgFgIgJgGQgRgKgaAAQgXAAgSALgAOrC7IhgiGIgEAEIAACCIhfAAIAAl1IBfAAIAACLIBmiLIB2AAIiVC5ICVC8gAGwC7IAAl1IEFAAIAABZIilAAIAAA6ICYAAIAABRIiYAAIAAA4IClAAIAABZgAExC7IgvifIgWhsIgDAAIgXBsIgtCfIhlAAIB+l1IBYAAICBF1gAg4C7IAAkbIhqAAIAAEbIhfAAIAAl1IEmAAIAAF1gAmcC7IAAhsIAHhMIgEAAIgxCBIhBAAIgziBIgCAAIAGBMIAABsIhfAAIAAl1IBfAAIBPC3IBPi3IBgAAIAAF1gAyIC7IhhiGIgDAEIAACCIhgAAIAAl1IBgAAIAACLIBliLIB2AAIiUC5ICUC8g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135.7,-19.2,271.4,38.6);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3301").s().p("AA0EeIAAhLIirAAIAABLIhhAAIAAihIAiAAIBikfIBiAAIBmEfIAgAAIAAChgAAKB9Igqi1IgDAAIgQBRIgcBkIBZAAgAxJDQQgagIgVgQQgVgRgNgXQgGgMgDgOQgDgPAAgPIAAiAQAAgPADgOQADgOAGgMQAMgYAXgRQATgPAcgJQAbgIAcAAQASAAASAEQATAFARAJQASALAPAQQAQASALAYIhOAfQgIgRgTgIQgRgHgUACQgSACgNAKQgOAMAAAQIAACAQAAAQAOALQANAKASACQAUACAQgIQASgJAHgSIBSAmQgKAWgRARQgPAPgTALQgSAKgTAFQgSAEgTAAQgbAAgbgIgARIDTIAAiWIAKhFIgDAAIgjBHIhaCUIhaAAIAAl1IBfAAIAACoIgIA4IADAAIAehBIBhifIBWAAIAAF1gALdDTIAAiWIAKhFIgDAAIgkBHIhaCUIhZAAIAAl1IBfAAIAACoIgIA4IACAAIAghBIBfifIBXAAIAAF1gAF9DTIhgiGIgEAEIAACCIhfAAIAAl1IBfAAIAACKIBmiKIB2AAIiVC2ICVC/gAlBDTIgYhMIhkAAIgXBMIjFAAIgvigIgWhrIgDAAIgXBrIgsCgIhmAAIB+l1IBYAAIB+FqIB/lqIBWAAICHF1gAlwAzIgahrIgCAAIgcBrIA4AAgAPpjHQgRgGgNgMQgOgLgHgRQgIgSAAgWIBJAAQAAAJAHAGQAFAGAKAAQAKAAAGgGQAGgGABgJIBJAAQAAAWgIASQgHARgOALQgNAMgSAGQgRAGgTAAQgSAAgSgGg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.2,-28.6,238.4,57.4);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AnJC8QgRgEgRgIQgQgJgPgNQgQgNgNgQIA8g5QAOARAVAKQAUAIAUABQAUABANgHQAOgIABgOQABgIgGgGQgFgGgKgFQgRgJgbgEQgXgDgUgJQgWgKgPgOQgRgNgJgUQgJgWAAgaQAAgbALgWQALgUAUgPQASgOAZgHQAYgHAaAAIAiACQASAEAPAGQARAHAOALQAQANAOARIg9AvQgPgPgTgIQgRgIgSABQgRAAgLAJQgLAJgBAQQABANAOAIQAMAIAXAGQAdAFAUAHQAaAIAQANQAUANAJAWQAGAMACAOQACAOAAARQgBAOgEAMQgEAMgGALQgNAUgWAPQgVAOgaAHQgaAHgaAAQgRAAgRgEgAHIC7IABhsIAGhMIgEAAIgxCBIhBAAIgyiBIgDAAIAGBMIAABsIheAAIAAl1IBeAAIBPC3IBQi3IBfAAIAAF1gAAyC7IAAl1IBeAAIAAF1gAjqC7IAAl1IBfAAIAAEYICXAAIAABdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.2,-19.2,110.5,38.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AgBC4QgdgIgWgQIgTgSQgKgKgGgMQgHgMgDgOQgEgOABgQIAAh/QgBgPAEgPQADgOAHgMQAIgQAbgYQAVgQAdgIQAZgIAeAAQAeAAAbAIQAdAIAVAQQAbAYAJAQQAGAMAEAOQADAPAAAPIAAB/QAAAQgDAOQgEAOgGAMQgHAMgJAKIgTASQgWAQgdAIQgbAIgdAAQgeAAgZgIgAALheQgJAGgCAHQgGAJAAAJIAAB/QABAKAFAIQADAHAIAGQASAKAZAAQAYAAARgLQAJgFAEgHQAGgIAAgKIAAh/QAAgKgGgIQgFgIgIgGQgSgKgZAAQgYAAgRALgAq0C4QgdgIgWgQIgUgSQgJgKgGgMQgHgMgDgOQgDgOAAgQIAAh/QAAgPADgPQADgOAHgMQAJgQAagYQAVgQAdgIQAbgIAeAAQAeAAAbAIQAcAIAWAQQAbAYAIAQQAHAMADAOQAEAPAAAPIAAB/QAAAQgEAOQgDAOgHAMQgGAMgJAKIgUASQgVAQgcAIQgcAIgeAAQgdAAgbgIgAqmheQgJAGgFAHQgEAJgBAJIAAB/QAAAKAGAIQAFAHAJAGQAQAKAZAAQAZAAARgLQAJgFAEgHQAGgIAAgKIAAh/QAAgKgGgIQgFgIgIgGQgSgKgZAAQgYAAgRALgA1UC4QgbgIgUgQQgWgQgMgYQgGgMgDgOQgDgOAAgQIAAh/QAAgQADgOQADgOAGgMQAMgXAWgRQAVgQAbgIQAbgIAcAAQASAAASAEQATAEARAKQASAKAPAQQAQASALAYIhNAfQgKgQgSgIQgRgIgUADQgTACgMAKQgOALAAARIAAB/QAAAQAOALQANALASACQAUABAQgIQASgIAHgTIBSAmQgKAWgRARQgPAQgTAKQgSAKgTAFQgSAEgTAAQgcAAgagIgAStC7IAAl1IEFAAIAABZIilAAIAAA6ICYAAIAABRIiYAAIAAA4IClAAIAABZgAPEC7IAAkbIhjAAIAAhbIEnAAIAABbIhjAAIAAEbgAL5C7IgYhLIhkAAIgYBLIhlAAICCl1IBXAAICGF1gALKAcIgahsIgDAAIgcBsIA5AAgAEDC7IAAl1IBfAAIAAEYICYAAIAABdgAjsC7IhgiGIgDAEIAACCIhfAAIAAl1IBfAAIAACLIBmiLIB2AAIiUC1ICTDAgAupC7IAAiNIhsAAIAACNIhfAAIAAl1IBfAAIAACOIBsAAIAAiOIBfAAIAAF1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.9,-19.2,291.8,38.6);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3301").s().p("AgzC3QgOgOAAgUQAAgVAOgOQAOgNAUAAQASAAAOANQAOAOAAAVQAAAUgOAOQgOAOgSAAQgUAAgOgOgAg5BYIgFh3QARAHAQAAQAPABANgGQAKgGAHgLQAIgKAAgPQAAgNgLgKQgKgIgNgCQgPgCgOAHQgPAHgIAOIg2guQAMgXARgQQAPgOAUgJQASgIAVgBQARgBAUAEQATAFARAKQARAKAMAPQAOAPAHATQAHATAAAWQAAASgFARQgGARgLAPQgMANgQAJQgSALgXADIgFA+g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-19.7,23.6,39.4);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3301").s().p("AgyDjIAAhLIi3AAIAABLIhhAAIAAihQANAAALgDQALgEAHgGQAOgMAHgYQAKgdADhUIAJh9ID1AAIAAEfIAsAAIAAChgAingRQgGA7gKAYIBYAAIAAjFIhAAAgARuCVQgcgIgWgQIgUgSQgJgKgGgMQgHgMgDgOQgEgPAAgQIAAh+QAAgQAEgOQADgOAHgMQAIgQAbgZQAVgQAdgHQAbgIAeAAQAdAAAcAIQAcAIAWAPQAbAZAIAQQAHAMADAOQAEAOAAAQIAAB+QAAAQgEAPQgDAOgHAMQgGAMgJAKIgUASQgVAQgdAIQgbAIgeAAQgeAAgbgIgAR9iCQgJAHgFAHQgFAJAAAJIAAB+QAAALAGAHQAFAIAIAGQARAJAZABQAZAAARgLQAJgFAEgIQAGgHAAgLIAAh+QAAgKgGgIQgFgJgJgFQgRgKgZAAQgYAAgRAKgAIACVQgdgIgVgQIgUgSQgJgKgHgMQgGgMgEgOQgDgPAAgQIAAh+QAAgQADgOQAEgOAGgMQAJgQAagZQAWgQAcgHQAbgIAeAAQAeAAAbAIQAdAIAVAPQAbAZAJAQQAGAMAEAOQADAOAAAQIAAB+QAAAQgDAPQgEAOgGAMQgHAMgIAKIgUASQgWAQgcAIQgbAIgeAAQgeAAgbgIgAIOiCQgIAHgFAHQgFAJAAAJIAAB+QAAALAFAHQAFAIAJAGQARAJAZABQAYAAARgLQAJgFAFgIQAFgHAAgLIAAh+QAAgKgFgIQgFgJgJgFQgRgKgaAAQgYAAgRAKgAzkCVQgbgIgUgQQgWgQgMgYQgGgMgDgOQgEgPAAgPIAAh/QAAgQAEgOQADgOAGgMQAMgYAWgRQAUgPAcgIQAagIAdAAQASAAASADQATAFARAKQASAKAPAQQAQASALAYIhOAfQgJgQgSgJQgRgHgUACQgTADgMAKQgOALAAARIAAB/QAAAQAOALQANALASACQAUABAQgIQASgIAHgTIBSAmQgLAWgQARQgPAPgTALQgSAKgTAFQgSAEgTAAQgcAAgagIgAwZCYIAAhZQAOACALgEQALgCAIgHQAOgMAHgYQAJgcADhUIAJh9ID7AAIAAF1IhfAAIAAkbIhGAAIgGByQgCAhgJAeQgPApgNARQgKANgMAJQgNAKgPAHQgQAGgTADQgLABgLAAIgUgBgAMGCYIAAl1IDqAAIAABaIiLAAIAAEbgAEWCYIhgiGIgEAEIAACCIhfAAIAAl1IBfAAIAACLIBmiLIB2AAIiUC5ICUC8gAm0CYIgZhLIhkAAIgXBLIhmAAICDl1IBWAAICHF1gAnjgGIgahtIgDAAIgcBtIA5AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134.7,-22.8,269.5,45.6);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AjYC4QgdgIgWgQIgUgSQgJgKgGgMQgHgMgDgOQgEgOABgQIAAh/QgBgPAEgPQADgOAHgMQAIgQAbgYQAVgQAdgIQAbgIAeAAQAeAAAbAIQAdAIAVAQQAbAYAJAQQAGAMADAOQAEAPAAAPIAAB/QAAAQgEAOQgDAOgGAMQgHAMgJAKIgUASQgVAQgdAIQgbAIgeAAQgdAAgbgIgAjKheQgJAGgEAHQgFAJgBAJIAAB/QAAAKAGAIQAFAHAIAGQASAKAYAAQAZAAARgLQAJgFAEgHQAGgIAAgKIAAh/QAAgKgGgIQgFgIgIgGQgSgKgZAAQgYAAgRALgAB5C7IAAkbIhkAAIAAhbIEnAAIAABbIhjAAIAAEbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-19.2,63.4,38.6);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("ARSC4QgagIgVgQQgVgQgNgYQgGgMgDgOQgDgOAAgQIAAh/QAAgQADgOQADgOAGgMQAMgXAXgRQAUgQAbgIQAbgIAcAAQASAAASAEQATAEARAKQASAKAPAQQAQASALAYIhOAfQgIgQgTgIQgRgIgUADQgSACgNAKQgOALAAARIAAB/QAAAQAOALQANALASACQAUABAQgIQASgIAHgTIBSAmQgKAWgRARQgPAQgTAKQgSAKgTAFQgSAEgTAAQgbAAgbgIgAjCC8QgUgFgSgKQgSgKgOgNQgOgOgLgRIA8gvQAQARATALQAUAJARAAQAdAAAPgKQAQgKAAgUQAAgUgMgMQgOgLgWAAIg4AAIAAg/IA1AAQAVAAAMgKQAMgLAAgSQAAgRgMgJQgMgKgYAAQgRAAgWAKQgPAHgNAKIgzgxQAMgOANgKQAOgLAPgHQAPgIATgEQARgDAVAAQAeAAAZAHQAYAHARAOQAQAPAIATQAJAVAAAZQAAAUgLAUQgQAZgOAHQAOAHALAJQAKAJAGAMQAHALADANIADAZQgBAcgJAWQgLAVgTAQQgUAPgbAIQgdAHgjAAQgWAAgUgEgA3oC4QgdgIgWgQIgUgSQgJgKgGgMQgHgMgDgOQgEgOABgQIAAh/QgBgPAEgPQADgOAHgMQAIgQAbgYQAVgQAdgIQAbgIAeAAQAeAAAbAIQAdAIAVAQQAbAYAJAQQAGAMADAOQAEAPAAAPIAAB/QAAAQgEAOQgDAOgGAMQgHAMgJAKIgUASQgVAQgdAIQgbAIgeAAQgdAAgbgIgA3aheQgJAGgEAHQgFAJgBAJIAAB/QAAAKAGAIQAFAHAIAGQASAKAYAAQAZAAARgLQAJgFAEgHQAGgIAAgKIAAh/QAAgKgGgIQgFgIgIgGQgSgKgZAAQgYAAgRALgAXuC7IAAh+IgQAAIhlB+Ih2AAIByiHQgRgGgMgJQgPgJgKgNQgKgOgGgRQgGgUAAgbQABgdAKgXQAKgXASgQQATgQAZgIQAagIAiAAICUAAIAAF1gAWVhVQgNALAAATQAAATAMAMQAMAMAVAAIA5AAIAAhUIg5AAQgUAAgMALgAK2C7IAAl1IBgAAIAACAIA3AAQAmAAAbAIQAZAIARAQQAPAPAHAVQAHAVAAAbQAAAcgJAYQgJAXgRASQgSARgYAJQgZAKgfAAgAMWBoIA3AAQAMAAAJgEQAIgEAFgGQAJgMAAgVQAAgUgMgLQgKgLgVAAIg3AAgAHNC7IAAkbIhjAAIAAhbIEnAAIAABbIhkAAIAAEbgAECC7IgZhLIhjAAIgYBLIhmAAICEl1IBVAAICHF1gADTAcIgahsIgDAAIgcBsIA5AAgAmBC7IgYhLIhkAAIgXBLIjVAAIhhiGIgDAEIAACCIhfAAIAAl1IBfAAIAACLIBmiLIB2AAIiUC5ICOC1ICAluIBWAAICGF1gAmvAcIgbhsIgCAAIgcBsIA5AAgAyVC7IAAkbIhkAAIAAhbIEnAAIAABbIhjAAIAAEbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.3,-19.2,322.6,38.6);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("Aq1C4QgdgIgVgQIgUgSQgJgKgHgMQgGgMgEgOQgDgOAAgQIAAh/QAAgPADgPQAEgOAGgMQAJgQAagYQAWgQAdgIQAbgIAdAAQAeAAAbAIQAdAIAVAQQAcAYAIAQQAGAMAEAOQADAPAAAPIAAB/QAAAQgDAOQgEAOgGAMQgHAMgIAKIgUASQgWAQgcAIQgbAIgeAAQgeAAgbgIgAqnheQgIAGgFAHQgFAJAAAJIAAB/QAAAKAFAIQAFAHAJAGQARAKAZAAQAYAAASgLQAIgFAFgHQAFgIABgKIAAh/QgBgKgFgIQgFgIgJgGQgRgKgaAAQgXAAgSALgAOJC7IAAl1IBeAAIAACAIA4AAQAmAAAbAIQAZAIAQAQQAQAPAHAVQAHAVAAAbQAAAcgJAYQgJAXgRASQgRARgZAJQgZAKgeAAgAPnBoIA4AAQAMAAAJgEQAIgEAFgGQAIgMAAgVQABgUgLgLQgLgLgVAAIg4AAgAF9C7IAAl1IBfAAIAAEbIBZAAIAAkbIBfAAIAAEbIBZAAIAAkbIBgAAIAAF1gABGC7IAAl1IEFAAIAABZIimAAIAAA6ICYAAIAABRIiYAAIAAA4ICmAAIAABZgAhIC7IhXiOIgCAFIAACJIhgAAIAAiJIgDgFIhXCOIh2AAICGi8IiGi5IByAAIBeCNIAAiNIBgAAIAACNIBdiNIBxAAIiFC5ICEC8gAupC7IAAhsIAGhMIgEAAIgwCBIhCAAIgyiBIgDAAIAGBMIAABsIheAAIAAl1IBeAAIBQC3IBPi3IBfAAIAAF1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.1,-19.2,238.3,38.6);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AAwC7IAAl1IEFAAIAABZIimAAIAAA6ICZAAIAABRIiZAAIAAA4ICmAAIAABZgAhpC7IAAiOIhsAAIAACOIhfAAIAAl1IBfAAIAACOIBsAAIAAiOIBgAAIAAF1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.9,-18.7,61.9,37.5);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("ATIDjIAAhLIi3AAIAABLIhhAAIAAihQANAAALgDQALgEAHgGQAOgMAHgYQAKgdADhUIAJh9ID1AAIAAEfIAuAAIAAChgARTgRQgGA7gKAYIBYAAIAAjFIhAAAgAgPCVQgcgIgWgQIgUgSQgJgKgGgMQgHgMgDgOQgEgPAAgQIAAh+QAAgQAEgOQADgOAHgMQAIgQAbgZQAVgQAdgHQAZgIAeAAQAdAAAcAIQAcAIAWAPQAbAZAIAQQAHAMADAOQAEAOAAAQIAAB+QAAAQgEAPQgDAOgHAMQgGAMgJAKIgUASQgVAQgdAIQgbAIgeAAQgeAAgZgIgAAAiCQgJAHgFAHQgFAJAAAJIAAB+QAAALAGAHQAFAIAIAGQAPAJAZABQAZAAARgLQAJgFAEgIQAGgHAAgLIAAh+QAAgKgGgIQgFgJgJgFQgRgKgZAAQgYAAgPAKgArCCVQgcgIgWgQIgUgSQgJgKgGgMQgHgMgDgOQgEgPAAgQIAAh+QAAgQAEgOQADgOAHgMQAIgQAbgZQAVgQAdgHQAbgIAeAAQAdAAAcAIQAcAIAWAPQAbAZAIAQQAHAMADAOQAEAOAAAQIAAB+QAAAQgEAPQgDAOgHAMQgGAMgJAKIgUASQgVAQgdAIQgbAIgeAAQgeAAgbgIgAqziCQgJAHgFAHQgFAJAAAJIAAB+QAAALAGAHQAFAIAIAGQARAJAZABQAZAAARgLQAJgFAEgIQAGgHAAgLIAAh+QAAgKgGgIQgFgJgJgFQgRgKgZAAQgYAAgRAKgADhCYIAAhZQAOACALgEQALgCAIgHQAOgMAHgYQAJgcADhUIAJh9ID7AAIAAF1IhfAAIAAkbIhGAAIgGByQgCAhgJAeQgPApgNARQgKANgMAJQgNAKgPAHQgQAGgTADQgLABgLAAIgUgBgANGCYIgZhLIhkAAIgXBLIhmAAICDl1IBWAAICHF1gAMXgGIgahtIgDAAIgcBtIA5AAgAj4CYIhhiGIgDAEIAACCIhfAAIAAl1IBfAAIAACLIBmiLIB2AAIiVC5ICUC8gA0nCYIAAl1IBfAAIAAEbIBZAAIAAkbIBgAAIAAEbIBZAAIAAkbIBfAAIAAF1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132,-22.8,264.1,45.6);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AgzC3QgOgOAAgUQAAgVAOgOQAOgNAUAAQASAAAOANQAOAOAAAVQAAAUgOAOQgOAOgSAAQgUAAgOgOgAg5BYIgFh3QARAHAQAAQAPABANgGQAKgGAHgLQAIgKAAgPQAAgNgLgKQgKgIgNgCQgPgCgOAHQgPAHgIAOIg2guIAGgKQAKgRANgMQAPgOAUgJQASgIAVgBQARgBAUAEQATAFARAKQARAKAMAPQAOAPAHATQAHATAAAWQAAASgFARQgGARgLAPQgMANgQAJQgSALgXADIgFA+g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-19.7,23.6,39.4);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("ArVC4QgcgIgVgQIgUgSQgJgKgHgMQgHgMgDgOQgEgOAAgQIAAh/QAAgPAEgPQADgOAHgMQAIgQAbgYQAWgQAcgIQAbgIAeAAQAdAAAcAIQAdAIAVAQQAbAYAIAQQAHAMAEAOQADAPAAAPIAAB/QAAAQgDAOQgEAOgHAMQgGAMgIAKIgUASQgWAQgdAIQgbAIgdAAQgfAAgbgIgArGheQgIAGgGAHQgEAJAAAJIAAB/QAAAKAFAIQAFAHAIAGQARAKAaAAQAYAAARgLQAJgFAFgHQAFgIAAgKIAAh/QAAgKgFgIQgGgIgJgGQgQgKgaAAQgYAAgRALgA17C4QgcgIgWgQIgUgSQgIgKgHgMQgGgMgEgOQgDgOgBgQIAAh/QABgPADgPQAEgOAGgMQAJgQAagYQAVgQAdgIQAbgIAeAAQAdAAAcAIQAcAIAWAQQAbAYAIAQQAHAMADAOQAEAPAAAPIAAB/QAAAQgEAOQgDAOgHAMQgGAMgJAKIgUASQgVAQgcAIQgbAIgfAAQgeAAgbgIgA1sheQgJAGgFAHQgEAJAAAJIAAB/QgBAKAGAIQAFAHAJAGQAQAKAZAAQAZAAARgLQAJgFAEgHQAGgIAAgKIAAh/QAAgKgGgIQgEgIgJgGQgRgKgaAAQgYAAgRALgATAC7IAAl1IBfAAIAACAIA4AAQAlAAAbAIQAaAIAQAQQAQAPAGAVQAIAVAAAbQAAAcgKAYQgJAXgRASQgRARgZAJQgYAKgfAAgAUfBoIA4AAQAMAAAIgEQAIgEAGgGQAIgMAAgVQAAgUgLgLQgLgLgUAAIg4AAgAK0C7IAAl1IBgAAIAAEbIBYAAIAAkbIBgAAIAAEbIBZAAIAAkbIBgAAIAAF1gAF9C7IAAl1IEFAAIAABZIilAAIAAA6ICYAAIAABRIiYAAIAAA4IClAAIAABZgAD+C7IgYhLIhkAAIgXBLIjTAAIhWiOIgDAFIAACJIhfAAIAAiJIgEgFIhWCOIh2AAICGi8IiGi5IBxAAIBfCNIAAiNIBfAAIAACNIBeiNIBwAAIiEC5IB/C1ICAluIBWAAICHF1gADPAcIgahsIgCAAIgcBsIA4AAgAx0C7IAAl1IEAAAIAABPIihAAIAAA7IA3AAQAnAAAaAHQAaAHARAPQAPAOAHAUQAHAVAAAdQAAAcgKAXQgJAWgRAQQgSAQgYAJQgZAIgfAAgAwVBoIA3AAQAXAAALgMQAJgLAAgVQAAgUgLgLQgLgKgVAAIg3AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.3,-19.2,300.6,38.6);


(lib.Символ49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1324.8},391).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62.1,124.3,124.3);


(lib.Символ47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.765,0.749,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1062.4},341).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.5,-62.1,127,124.3);


(lib.Символ46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.536,0.536);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1056},161).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-44.5,89,89);


(lib.Символ45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.548,0.536,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1145.6},302).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-44.5,90.9,89);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(0,0,0.749,0.749);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-1232},189).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62.1,124.3,124.3);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2069.8},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-83.2,166,166);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ34();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-190.9,-141.5,381.8,283.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 9
	this.instance = new lib.Символ9();
	this.instance.setTransform(645.6,62.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({scaleY:1.01,skewX:-9.1,x:172},9,cjs.Ease.get(1)).to({scaleY:1,skewX:0,x:175.2},3,cjs.Ease.get(1)).wait(59).to({x:172.1,y:223.9},5,cjs.Ease.get(-1)).wait(6));

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(408.8,65.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:25.6},9,cjs.Ease.get(1)).wait(68).to({y:209.6},5,cjs.Ease.get(-1)).wait(3));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(-154.9,192.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({x:-155.2,y:61.7},9,cjs.Ease.get(1)).wait(66).to({x:-154.9,y:184.9},5,cjs.Ease.get(-1)).wait(7));

	// Символ 6
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(455.5,1.2,1.144,1.144);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:-2.1},9,cjs.Ease.get(1)).wait(74).to({x:467.5},5,cjs.Ease.get(-1)).wait(3));

	// Символ 5
	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(413.4,-65.6,1.166,1.166);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({x:43.5},9,cjs.Ease.get(1)).wait(73).to({x:45,y:-206.5},5,cjs.Ease.get(-1)).wait(8));

	// Символ 4
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(-150.5,-213.7,1.166,1.166);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-148.5,y:-65.5},9,cjs.Ease.get(1)).wait(85).to({x:-150.5,y:-232.5},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.6,-235.6,72.1,43.7);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(-18.7,220.3,1.266,1.266);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:35.2},14,cjs.Ease.get(1)).wait(60).to({rotation:28.2,x:-57.6,y:330.4},10,cjs.Ease.get(-1)).wait(7));

	// Символ 2
	this.instance_1 = new lib.Символ2();
	this.instance_1.setTransform(171.1,54.8,0.317,0.075,-88.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({scaleX:1.27,scaleY:1.27,rotation:19.5,x:175.6,y:33.4},9).to({rotation:0,x:171.1,y:31.3},5,cjs.Ease.get(1)).wait(50).to({rotation:50,x:377.9,y:58.2},10,cjs.Ease.get(-1)).wait(3));

	// Символ 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(-3.6,-192.7,1.213,1.213);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-3.5,y:-40.7},14,cjs.Ease.get(1)).wait(66).to({rotation:-22,x:-21.7,y:-246},10,cjs.Ease.get(-1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.9,-216.1,364.6,46.8);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 15
	this.instance = new lib.Символ15();
	this.instance.setTransform(394.4,43.3,0.806,0.806);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:47.2},9,cjs.Ease.get(1)).wait(153).to({y:304.1},10,cjs.Ease.get(-1)).wait(8));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(-127.7,264.4,0.806,0.806);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({x:-131.6,y:43.6},9,cjs.Ease.get(1)).wait(152).to({y:304.4},10,cjs.Ease.get(-1)).wait(13));

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(84.6,211.4,0.651,0.651);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({y:-3},9,cjs.Ease.get(1)).wait(161).to({x:337.4},10,cjs.Ease.get(-1)).wait(7));

	// Символ 12
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(-91.3,209.9,0.651,0.651);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:-4.5},9,cjs.Ease.get(1)).wait(166).to({y:256.3},10,cjs.Ease.get(-1)).wait(5));

	// Символ 11
	this.instance_4 = new lib.Символ11();
	this.instance_4.setTransform(124.1,-46,1.623,1.623);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:0.81,scaleY:0.81,alpha:1},9,cjs.Ease.get(1)).wait(172).to({y:-166},10,cjs.Ease.get(-1)).wait(3));

	// Символ 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#320001").s().p("AgDDtQgkgLgcgVIgZgWQgMgOgIgOQgIgRgFgSQgEgRgBgVIAAijQABgUAEgTQAFgRAIgQQALgVAigfQAcgVAkgKQAggKAnAAQAmAAAkAKQAkALAcAUQAiAfALAVQAIAQAFARQAFATAAAUIAACjQAAAVgFARQgFASgIARQgIAOgLAOIgaAWQgbAVglALQgiAKgnAAQgmAAgigKgAAOh5QgKAHgFAKQgGALAAAMIAACjQgBAMAIALQAEAJALAHQAWAOAgAAQAfAAAWgOQAMgHAFgJQAIgLgBgMIAAijQABgNgIgLQgGgKgMgHQgVgNghAAQgfAAgWAOgAt5DtQglgLgbgVIgagWQgMgOgIgOQgJgRgEgSQgFgRABgVIAAijQgBgUAFgTQAEgRAJgQQAKgVAjgfQAcgVAkgKQAigKAnAAQAmAAAjAKQAlALAbAUQAjAfALAVQAIAQAFARQAEATAAAUIAACjQAAAVgEARQgFASgIARQgIAOgMAOIgZAWQgcAVgkALQgjAKgmAAQgnAAgigKgAtnh5QgLAHgGAKQgGALgBAMIAACjQAAAMAHALQAHAJALAHQAWAOAgAAQAfAAAWgOQALgHAHgJQAGgLABgMIAAijQgBgNgGgLQgHgKgLgHQgWgNghAAQgfAAgWAOgA7XDtQgigLgbgVQgbgUgQgeQgJgQgDgSQgFgTABgTIAAilQgBgUAFgSQADgRAJgQQAPgeAcgWQAbgUAigLQAjgKAkAAQAYAAAWAFQAZAGAWAMQAYANASAVQAVAXAOAfIhjAoQgMgWgYgKQgWgJgZADQgZACgQANQgQAPgBAVIAAClQABAUAQAOQARAOAYACQAZACAVgKQAXgLAJgYIBpAxQgNAcgWAWQgTAUgYANQgXANgZAGQgXAGgXAAQglAAghgKgAYCDwIAAnfIFPAAIAAByIjVAAIAABLIDDAAIAABoIjDAAIAABIIDVAAIAABygATWDwIAAlsIiAAAIAAh0IF7AAIAAB0IiAAAIAAFsgAPRDwIgfhgIiAAAIgfBgIiCAAIConfIBvAAICsHfgAOVAkIghiLIgEAAIgjCLIBIAAgAFNDwIAAnfIB5AAIAAFnIDEAAIAAB4gAkvDwIh7isIgEAGIAACmIh7AAIAAnfIB7AAIAACyICCiyICYAAIi/DpIC+D2gAyzDwIAAi2IiLAAIAAC2Ih6AAIAAnfIB6AAIAAC2ICLAAIAAi2IB6AAIAAHfg");
	this.shape.setTransform(-49.7,-238);

	this.instance_5 = new lib.Символ10();
	this.instance_5.setTransform(-49.7,-46,1.185,1.185);
	this.instance_5.alpha = 0.211;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.instance_5}]},173).to({state:[{t:this.instance_5}]},10).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({scaleX:0.81,scaleY:0.81,alpha:1},8).wait(173).to({y:-166},10,cjs.Ease.get(-1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-262.7,374.6,49.5);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.setTransform(-18,-23.2);
	this.instance.alpha = 0.691;

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgU1gh3MAprAAAQAOABAMAFQAMAFAJAJQAJAKAFAMQAFAMABAOMAAABBnQgBAOgFAMQgFAMgJAKQgJAJgMAFQgMAFgOABMgprAAAQgcgBgTgTQgTgTgBgdMAAAhBnQABgOAFgMQAFgMAJgKQAJgJAMgFQAMgFAOgBg");
	mask.setTransform(-18,-23.3);

	// Слой 3
	this.instance_1 = new lib.shok();
	this.instance_1.setTransform(90,132);

	this.instance_2 = new lib.shok();
	this.instance_2.setTransform(28,132);

	this.instance_3 = new lib.shok();
	this.instance_3.setTransform(-34,132);

	this.instance_4 = new lib.shok();
	this.instance_4.setTransform(-96,132);

	this.instance_5 = new lib.shok();
	this.instance_5.setTransform(-158,132);

	this.instance_6 = new lib.shok();
	this.instance_6.setTransform(90,70);

	this.instance_7 = new lib.shok();
	this.instance_7.setTransform(28,70);

	this.instance_8 = new lib.shok();
	this.instance_8.setTransform(-34,70);

	this.instance_9 = new lib.shok();
	this.instance_9.setTransform(-96,70);

	this.instance_10 = new lib.shok();
	this.instance_10.setTransform(-158,70);

	this.instance_11 = new lib.shok();
	this.instance_11.setTransform(90,8);

	this.instance_12 = new lib.shok();
	this.instance_12.setTransform(28,8);

	this.instance_13 = new lib.shok();
	this.instance_13.setTransform(-34,8);

	this.instance_14 = new lib.shok();
	this.instance_14.setTransform(-96,8);

	this.instance_15 = new lib.shok();
	this.instance_15.setTransform(-158,8);

	this.instance_16 = new lib.shok();
	this.instance_16.setTransform(90,-54);

	this.instance_17 = new lib.shok();
	this.instance_17.setTransform(28,-54);

	this.instance_18 = new lib.shok();
	this.instance_18.setTransform(-34,-54);

	this.instance_19 = new lib.shok();
	this.instance_19.setTransform(-96,-54);

	this.instance_20 = new lib.shok();
	this.instance_20.setTransform(-158,-54);

	this.instance_21 = new lib.shok();
	this.instance_21.setTransform(90,-116);

	this.instance_22 = new lib.shok();
	this.instance_22.setTransform(28,-116);

	this.instance_23 = new lib.shok();
	this.instance_23.setTransform(-34,-116);

	this.instance_24 = new lib.shok();
	this.instance_24.setTransform(-96,-116);

	this.instance_25 = new lib.shok();
	this.instance_25.setTransform(-158,-116);

	this.instance_26 = new lib.shok();
	this.instance_26.setTransform(90,-178);

	this.instance_27 = new lib.shok();
	this.instance_27.setTransform(28,-178);

	this.instance_28 = new lib.shok();
	this.instance_28.setTransform(-34,-178);

	this.instance_29 = new lib.shok();
	this.instance_29.setTransform(-96,-178);

	this.instance_30 = new lib.shok();
	this.instance_30.setTransform(-158,-178);

	this.instance_31 = new lib.shok();
	this.instance_31.setTransform(90,-240);

	this.instance_32 = new lib.shok();
	this.instance_32.setTransform(28,-240);

	this.instance_33 = new lib.shok();
	this.instance_33.setTransform(-34,-240);

	this.instance_34 = new lib.shok();
	this.instance_34.setTransform(-96,-240);

	this.instance_35 = new lib.shok();
	this.instance_35.setTransform(-158,-240);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = mask;

	this.addChild(this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158.1,-240,280.2,433.6);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(142.1,97.1);

	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(142.1,140.5);

	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(98.2,97.1);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(54.7,97.1);

	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(98.2,140.5);

	this.instance_5 = new lib.Символ17();
	this.instance_5.setTransform(54.7,140.5);

	this.instance_6 = new lib.Символ17();
	this.instance_6.setTransform(10.8,97.1);

	this.instance_7 = new lib.Символ17();
	this.instance_7.setTransform(-32.7,97.1);

	this.instance_8 = new lib.Символ17();
	this.instance_8.setTransform(10.8,140.5);

	this.instance_9 = new lib.Символ17();
	this.instance_9.setTransform(-32.7,140.5);

	this.instance_10 = new lib.Символ17();
	this.instance_10.setTransform(-76.6,97.1);

	this.instance_11 = new lib.Символ17();
	this.instance_11.setTransform(-120.1,97.1);

	this.instance_12 = new lib.Символ17();
	this.instance_12.setTransform(-76.6,140.5);

	this.instance_13 = new lib.Символ17();
	this.instance_13.setTransform(-120.1,140.5);

	this.instance_14 = new lib.Символ17();
	this.instance_14.setTransform(-164,97.1);

	this.instance_15 = new lib.Символ17();
	this.instance_15.setTransform(-207.5,97.1);

	this.instance_16 = new lib.Символ17();
	this.instance_16.setTransform(-164,140.5);

	this.instance_17 = new lib.Символ17();
	this.instance_17.setTransform(-207.5,140.5);

	this.addChild(this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-229.5,75.2,393.5,87.3);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ19();
	this.instance.alpha = 0.52;

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7zGIQilAAAAilIAAnFQAAilClAAMA3nAAAQClAAAAClIAAHFQAAClilAAg");

	// Слой 2
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(32,-119.5);

	this.instance_1.mask = mask;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-194.5,-39.2,389.1,78.5);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-231,-208.9,462,417.8);


(lib.Анимация2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ38();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-231,-208.9,462,417.8);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-44.4,393.5,87.3);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-44.4,393.5,87.3);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ49();
	this.instance.setTransform(-532.2,652);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Символ47();
	this.instance_1.setTransform(-380.6,452.9);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Символ46();
	this.instance_2.setTransform(-542.6,428.8);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.Символ45();
	this.instance_3.setTransform(-89.9,391.1);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.Символ44();
	this.instance_4.setTransform(-178.8,71.6);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.Символ49();
	this.instance_5.setTransform(-223.4,408.8);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.Символ47();
	this.instance_6.setTransform(-71.8,209.7);
	this.instance_6.alpha = 0.102;

	this.instance_7 = new lib.Символ46();
	this.instance_7.setTransform(-233.9,185.6);
	this.instance_7.alpha = 0.102;

	this.instance_8 = new lib.Символ45();
	this.instance_8.setTransform(-413.5,227.3);
	this.instance_8.alpha = 0.102;

	this.instance_9 = new lib.Символ44();
	this.instance_9.setTransform(-610.7,151.2);
	this.instance_9.alpha = 0.102;

	this.instance_10 = new lib.Символ41();
	this.instance_10.setTransform(-617.8,-35,0.536,0.536);
	this.instance_10.alpha = 0.102;

	this.instance_11 = new lib.Символ41();
	this.instance_11.setTransform(44.6,-91.1,0.536,0.536);
	this.instance_11.alpha = 0.102;

	this.instance_12 = new lib.Символ41();
	this.instance_12.setTransform(-267.9,70,0.325,0.318,0,0,180);
	this.instance_12.alpha = 0.102;

	this.instance_13 = new lib.Символ41();
	this.instance_13.setTransform(-141.4,-177,0.325,0.318,0,0,180);
	this.instance_13.alpha = 0.102;

	this.instance_14 = new lib.Символ41();
	this.instance_14.setTransform(-362.6,-202.5,0.548,0.536,0,0,180);
	this.instance_14.alpha = 0.102;

	this.instance_15 = new lib.Символ41();
	this.instance_15.setTransform(-415.9,-52.6,0.749,0.749);
	this.instance_15.alpha = 0.102;

	this.instance_16 = new lib.Символ41();
	this.instance_16.setTransform(-574.9,-162,0.318,0.318);
	this.instance_16.alpha = 0.102;

	this.instance_17 = new lib.Символ41();
	this.instance_17.setTransform(-4.1,-196.2,0.318,0.318);
	this.instance_17.alpha = 0.102;

	this.instance_18 = new lib.Символ41();
	this.instance_18.setTransform(-212.7,-113.5,0.536,0.536);
	this.instance_18.alpha = 0.102;

	this.instance_19 = new lib.Символ41();
	this.instance_19.setTransform(-116.7,44.6,0.536,0.536);
	this.instance_19.alpha = 0.102;

	this.addChild(this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-672.9,-247.1,761.9,961.2);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ42();
	this.instance.setTransform(281.9,508.7);

	// Слой 1
	this.instance_1 = new lib.ffon();
	this.instance_1.setTransform(-327.6,-214.7,0.936,0.859);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-391,-214.7,761.9,1437.6);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(0,15);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(0,7.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Символ38();
	this.instance_2.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:7.5},14,cjs.Ease.get(-1)).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14,cjs.Ease.get(-1)).to({y:0},15,cjs.Ease.get(1)).to({y:7.5},15,cjs.Ease.get(-1)).to({_off:true,y:15,mode:"independent"},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231,-193.9,462,417.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ51();
	this.instance.setTransform(-0.8,-40,1,1,0,0,0,-0.8,-38.4);
	this.instance.alpha = 0.488;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ35();
	this.instance_1.setTransform(2.1,1.6,0.687,0.687);

	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:3.2}},{t:this.instance_1,p:{y:1.6}}]}).to({state:[{t:this.instance_2,p:{y:-1.6}},{t:this.instance_1,p:{y:-3.2}}]},1).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ50();
	this.instance_3.setTransform(-0.8,-30.8,1,1,0,0,0,-0.8,-38.4);
	this.instance_3.filters = [new cjs.ColorFilter(0.51, 0.51, 0.51, 1, 0, 0, 0, 0)];
	this.instance_3.cache(-199,-46,398,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-41.2,393.5,91.8);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.setTransform(-361.5,59.6,1,1,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,x:-45.6,y:-51.7},19,cjs.Ease.get(1)).wait(75).to({y:356.7},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-650.2,-196,568.3,539.8);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(-0.8,-38.4,1,1,0,0,0,-0.8,-38.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-197.5,-41.2,393.5,91.8);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 26
	this.instance = new lib.Символ26();
	this.instance.setTransform(-494.8,-46.9,0.92,0.92);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({_off:true},101).wait(200));

	// Символ 25
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(-496.4,-50.2,0.946,0.946);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},100).wait(300));

	// Символ 24
	this.instance_2 = new lib.Символ24();
	this.instance_2.setTransform(-493.2,-83.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-672.3,-254.6,344.9,44.3);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EAYXAypMhEsgQHQhkgXAXhlMATQhSBQAXhkBlAXMBEsAQHQBkAYgXBkMgTQBSBQgTBRhFAAQgRAAgTgEg");
	var mask_graphics_49 = new cjs.Graphics().p("EAYXAv6MhEsgQHQhkgXAXhlMAOhg93QAuAbA4ANQCPAiB9hOQAsgbAhgkQA0BOBPAoQAEALAHALQAXAjA0AAQAbAAASgSQARACASAAQAPAIAWAAQAbAAASgSIAMgDQAOAHAUAAQAZAAAWgWQAPgQADgPIAJgGQANADAPAAQAfAAAUgcQARgYAAgZQAAgLgCgKIACgCQAYgDASgVIADgEQAaALAmAAQATAAAOgJIAGAKQATAgAuAAQAcAAASgcQAGgIADgIQAcgBAcgFQAIABAKAAQAaAAATgVQAcgLAbgRQAUgMARgOIAEAAQAhAAAUgbQAQgWAAgaIAAgDIAOgYIALABQAhAAAUgcQANgSAEgWQAMAEAOAAQAgAAAUgcIAHgNQA2gOAzgfQB7hOAiiPQAiiQhOh9Qglg/g4goMAtsAKuQBkAYgXBkMgTQBSBQgTBShFAAQgRAAgTgFg");
	var mask_graphics_54 = new cjs.Graphics().p("EAYXAsTMhEsgQHQhkgXAXhlMAOhg93QAuAbA4ANQCPAiB9hOQAsgbAhgkQBOB0CJAhQAYAFAYADQARAMAbAAQAXAAARgOQBHgKBBgpQAcgRAXgUQALADAOAAQAhAAATgbQAOgVABgXIASABQAcAAASgbIACgDQAOAGASAAQAXAAATgSIADABQCQAiB8hOIAGgEQAQAHAWAAQAfAAAUgcQALgQAEgSQAOAGATAAQARAAANgHIAEAHQAUAgAtAAIABAAIAAABQgBANAIASQAPAjAqADQAKAoAZAmQAKAOALAMQABATAKAQQATAfAvAAQAHAAAGgCQAXAJAZAFQAzAKAygLQABAKAFAKQAQAhAwAAQATAAANgHIAKAQQA6BWBlATQA0AKAvgLIABABQAWAaAvAAQAbAAASgbIAFgJQAwAqBDANQBfARBSgxQAagGAYgLQApgUAfghQAPAGASAAQAiAAASgaQAPgVAAgWIgBgLQBBAbBKgOQBkgTA6hWQAZgkAKgoIANABQAgAAAUgbQAOgVAAgWQAAgNgDgLQAPgBAQgDQBlgUA5hVQA6hUgThmIgBgEQBVgXAzhLIAJgPIO6DfQBkAYgXBkMgTQBSBQgTBRhFAAQgRAAgTgEg");
	var mask_graphics_59 = new cjs.Graphics().p("EAYXAsTMhEsgQHQhkgXAXhlMAOhg93QAuAbA4ANQCPAiB9hOQAsgbAhgkQBOB0CJAhQAzALAwgCQACAIAFAKQARAmAvAAIADAAQABAKAFANQAHAQALAJQAAAqAQArQAVA7ArAnQAcAZAjASIAJAEQAZAKAaAFQA2ALA4gPIAHAOQATAfAvAAQAaAAARgXQAjAtA4AbQBdAsBhgkQATgHARgKQATAUAiAAQAYAAAUgVQAOgOAEgPQATARAgAAQAaAAAQgQQBRAbBRgeQAxgTAkgiQARAJAYAAQAaAAAUgVQATgVAAgYIAAgJQA6AJA7gVIAQgHQAtgUAgghQATALAcAAQAhAAASgbQAMgRACgSIABACQASAmAuAAQAhAAATgaIACgDQAlAXAvAJQBfARBSgxQAagGAYgLQA3gaAng0QATANAgAAQAhAAATgaQAIgMAEgMQAwALA1gKQBkgTA6hWQAcgpAKgtQAPAGAUAAQAcAAASgbQAMgSACgRQAUATAkAAQAbAAATgcQAOgWAAgUQAAgPgDgLQAfgYAXgjQA6hUgThmIgBgEQBVgXAzhLIAJgPIO6DfQBkAYgXBkMgTQBSBQgTBRhFAAQgRAAgTgEg");
	var mask_graphics_64 = new cjs.Graphics().p("EAayAodMhEsgQHQhkgYAXhkMAOhg93QAuAbA4ANQCPAiB9hOQAsgcAhgjQBNByCGAhIAFAKQAUAgAtAAIAFAAQADAQAJAPQAVAhAwACQAAARAIAPQANAaAfAGIAJAcQAVA7ArAnQAcAZAjARIAJAEQAZALAaAFQA8AMA9gUIACAEQARAmAvAAQAYAAAQgPQAjAsA3AbQBdArBhgkQAwgRAjggQASAhAsAAQAZAAAVgVQALgMAFgMIAJAFQBcArBggkIAIgDQASANAcAAIACAAQADARAJAOQATAfAvAAQAKAAAIgEIAOATIAGAHQASAUAVAPQArAgA2AKIADAHQARAoAwAAQAQAAANgHQAGBKAyA8QAuA3BAAUQACAMAHAMQAVAhAyAAQAcAAASgUQATAYAmAAQASAAANgHQACAMAFAMQAQAkAqAAQAfAAATgRQA0AlBDAEQAcADAagDIABACQAUAeAtAAQAbAAATgbIAFgGQATAVAiAAQAeAAASgVQAfALAiADIARABQBQABBCgtIASgOQAVgSAQgTQASAQAgAAQAiAAATgcQAIgMAEgNQAJACAJAAQAYAAAVgWQAJgIAEgJINYDJMgOeA9pQgTBRhFAAQgQAAgUgEg");
	var mask_graphics_69 = new cjs.Graphics().p("EAayAirMhEsgQHQhkgYAXhkMALagwlIKMC8QAtAWAhAXQgEAKAAALQAAAXANAUQAUAgAvAAQAKAAAIgCQAeAiAoATQAhARAnAHQAFACAEAAQAbAEAagCQAfgCAcgKQAQAIAVAAQAfAAAUgZQASALAcAAQAYAAAQgSQAqAdA3AKQBlASBUg9QAbgTAUgXIACAAQAhAAATgbIACgBIAGAAQAgAAAUgbIAGgKQASATAiAAQAaAAAUgVQA9gGA1gnQA0gkAag0IAPABQAaAAASgbQAPgWAAgWIAAgHQA7gHA0glIANgKQA/gzAVhNIAAgBQAKACAMAAQAbAAATgbIABgCIAJAAQAdAAATgQIABABQATAfApAAIABAAQABAOAHARQAQAmApAAQAQAAANgEIACAFQAOAiAmAEIAPAUQBCBPBnAIQAuAEAqgLQARAcAkAAQAhAAATgUQAMAUAPATQBDBPBmAHQAZADAYgCQATATAgAAQAgAAAUgbIABgCIAQABQAeAAASgXQA0AmBEAGIARABQBQABBCgtIASgOQAugnAWgzQAVAPAiAAQAdAAARgbQAHgKAEgKIOIDUMgOeA9pQgTBRhFAAQgQAAgUgEg");
	var mask_graphics_74 = new cjs.Graphics().p("EAayAhSMhEsgQHQhkgXAXhlMALagwlIKMC9QBxA4ApA6IALAQQAgAoAtAWQAhARAnAHQAFACAEAAQAbADAagCQBBgEA6gpIADgBQATAQAhAAQAXAAAQgRQAwAnBBAMQBVAOBIgoQATAaAmAAQAWAAAQgLQAQAfAlADQAEAKAFAJQAUAfAtAAIAGAAQANAPAQANQAbAYAkARQAFADAEABQAZAKAaAEQAVADAVAAQASAZApAAQAcAAASgXIADgDQASAMAcAAQAOAAAMgHQAlAwA7AbQBeApBggoIAEgBQAOAGASAAQAfAAAUgbQALgQADgQQASAaAnAAQAYAAASgRQAQAJAWAAQATAAAOgIQBDAMBCgbQApgQAfgaQALADANAAQAgAAAUgdQALADANAAQAiAAASgbQALgPADgQQAjgDAigOIAQgHQBIgiAnhGIAKgVQALgZAFgZQAMADANAAQAcAAARgbQAOgVABgWIANABQAcAAARgNQAUANAdAAQAOAAALgHQAVAGAXACIARABQBQACBCguIASgOQBGg7APhVIPnDqMgOeA9pQgTBShFAAQgQAAgUgFgAlb9DIALgDIgCAIIgJgFgAmQ9NIACABIgDABIABgCg");
	var mask_graphics_79 = new cjs.Graphics().p("EAayAhOMhEsgQHQhkgXAXhlMAItglFIMdC7IgBAAIgDAWQgMBYAyBNQAFAIAGAIQAeAqAsAXQAgASAmAJIAKACQAaAFAbgCQAxAAAtgWQASAmAuAAQAhAAATgbQAJgMADgMQAtAnA+AOQBlAVBWg6QA6glAdg5QAXAeAyAAQAhAAATgbIAFgJQBbAOBNg0QA8gmAcg8QASAHAWAAQAcAAASgbQAPgWAAgVIAAgBQAsgJAmgbIAOgKQBAgwAYhMIAGgWIACgJQAUARAgAAQAcAAARgbQAIgLADgLQBEANBFgdQA2gVAlgnIAFAJQAUAgAuAAQAcAAASgbQAFgHADgIQBfApBdgnQA+gYAngvQASALAaAAQAZAAAVgWQASgTACgVQAwABAwgTIAQgHQA/geAmg4IAIAAQAiAAASgbQAPgVAAgVQAAgJgCgIQAOgHAJgNQAPgVAAgaQAAgKgCgIQAJgHAGgKIABgCQAXATAnAAQANAAALgGQAnATAvAEIARABQBQACBCguIASgOQBGg6APhWIPnDqMgOeA9pQgTBShFAAQgQAAgUgFg");
	var mask_graphics_84 = new cjs.Graphics().p("AdNbiMhEsgQHQhkgXAXhlMAItglFIMdC7IgBAAIgDAWQgMBYAyBNQAFAIAGAIQAeAqAsAXQAgASAmAJIAKACQAaAFAbgCQA1AAAygaIABACQAQAhAsAAQAmAAAUgeIAGgJQArAjA6ANQBlAVBWg6QArgbAbgmQAUAdAsAAQAbAAATgbQAPgWAAgPIAAgEIADABQBmAWBVg5QANgIALgJQANADAPAAQAhAAAUgaIAFgHQAMADANAAQAgAAAVgeQALgQADgRIAHAAQAMAAAKgDQASAWAmAAQAeAAASgWQAMAEAPAAIANgBIAFADQApAjA2AMQACAUAKAPQAUAfAtAAQAKAAAIgDQAHBAApA3QA+BRBnAMQASADAQAAQASAhApAAQAaAAARgRIABADQARAnAwAAQALAAAJgEQA/BOBhALQBAAKA4gVQAWAdAvAAQAdAAARgaQAsAdA5AIIARABQBQAGBEgqQAKgHA5gNQA5gOBjgKQBkgKg4AMIMFC2MgJoAo/QgTBShFAAQgQAAgUgFg");
	var mask_graphics_89 = new cjs.Graphics().p("AdNbiMhEsgQHQhkgXAXhlMAItglFIMdC7IgBAAIgDAWQgMBYAyBNQAFAIAGAIQAeAqAsAXQAgASAmAJIAKACQAaAFAbgCQAvAAArgUQATAVAkAAQAgAAASgaIABAAQALADANAAQAJAAAHgCQAcAVAiAMQAOAfAkAFQACAOAFALQANAbAhAGIAAACQAAAJACALIgGAFQgWASAAAhQgBANAIATQAFALAHAIIAEAcQABAKADAJQAMAwAeAlIADADQAWAdAhAWQAEAEAEACQAWANAaAJQAOAGAOADQASAdAtAAQAMAAAKgDQADAPAIAQQAWAnAsAAQAcAAAUgXIAAAAQAZAhAkAZQBVA5BkgWQA5gLAsggQASAbAnAAQAcAAASgSIASANQBRA3BegQQAZAJAkAAQAeAAAUgbQAIgKADgKQARAJAYAAQAcAAASgbQALgRADgPQA3AQA9gMIAQgEQBNgUAzg+IAOgTQAagnALgqQAEgWABgXQAVgEAOgWQAJgMADgLQATgHARgPQAUAJAcAAQARAAAOgIQALAFAOAAQAmAAAUgbQAIgLAEgMQAUAaAqAAQAXAAARgRQAeANAjAFIARABQBQAGBEgqQAKgHA5gNQA5gOBjgKQBkgKg4AMIMFC2MgJoAo/QgTBShFAAQgQAAgUgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-44.3,y:-165}).wait(49).to({graphics:mask_graphics_49,x:-44.3,y:-147.5}).wait(5).to({graphics:mask_graphics_54,x:-44.3,y:-124.4}).wait(5).to({graphics:mask_graphics_59,x:-44.3,y:-124.4}).wait(5).to({graphics:mask_graphics_64,x:-59.8,y:-99.7}).wait(5).to({graphics:mask_graphics_69,x:-59.8,y:-62.7}).wait(5).to({graphics:mask_graphics_74,x:-59.8,y:-53.9}).wait(5).to({graphics:mask_graphics_79,x:-59.8,y:-53.5}).wait(5).to({graphics:mask_graphics_84,x:-75.3,y:-17.1}).wait(5).to({graphics:mask_graphics_89,x:-75.3,y:-17.1}).wait(11));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-28.7,-153.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.8,-393.5,310.1,434);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(44.4,361.4,0.61,0.61,24.5,0,0,14.9,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:14.8,rotation:-13.2,x:45.6,y:87.6},14,cjs.Ease.get(1)).wait(75).to({rotation:-13.2},0).to({y:342.8},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190.7,1,488.1,507.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 30
	this.instance = new lib.Символ30();
	this.instance.setTransform(-461.5,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({x:-157.5},19,cjs.Ease.get(1)).wait(134).to({x:-519.1},10,cjs.Ease.get(-1)).wait(7));

	// Символ 29
	this.instance_1 = new lib.Символ29();
	this.instance_1.setTransform(153.1,236.1,1,1,0,0,0,-0.8,-38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},30).wait(11).to({_off:false,rotation:-11.2,y:220.1},0).to({rotation:0,y:60.1},13,cjs.Ease.get(1)).wait(135).to({rotation:-12,y:218.5},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,233.2,393.5,91.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// characteristics.png
	this.instance = new lib.Символ31();
	this.instance.setTransform(-218.3,-167,1,1,0,0,0,0.7,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).wait(201));

	// Слой 1
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(-358.9,-118.9,0.733,0.733);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).to({_off:true},100).wait(201));

	// Символ 23
	this.instance_2 = new lib.Символ33();
	this.instance_2.setTransform(-339.6,-70.5,1,1,0,0,0,3.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},100).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-534,-77.4,488.1,507.8);


// stage content:



(lib.shokolateslim600300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(552.5,360.5,1,1,0,0,0,64.7,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(918.1,200.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ40();
	this.instance_2.setTransform(327.6,192);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.6,95.8,761.9,1469.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
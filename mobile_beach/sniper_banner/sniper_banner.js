(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.jpg?1464369024528", id:"bg"},
		{src:"images/enemy.png?1464369024528", id:"enemy"},
		{src:"images/fire.png?1464369024528", id:"fire"},
		{src:"images/gun.png?1464369024528", id:"gun"},
		{src:"images/water.png?1464369024528", id:"water"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1426,1024);


(lib.enemy = function() {
	this.initialize(img.enemy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,162);


(lib.fire = function() {
	this.initialize(img.fire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,68);


(lib.gun = function() {
	this.initialize(img.gun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,353);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1087,397);


(lib.Символ50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(21.5,1,1).p("AWWAAQAAJQmjGjQmjGjpQAAQpPAAmjmjQmjmjAApQQAApPGjmjQGjmjJPAAQJQAAGjGjQGjGjAAJPg");
	this.shape.setTransform(143,143);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-10.7,307.4,307.4);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AAAg+IAAB9");
	this.shape.setTransform(0,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,14.7);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAiCIAAEF");
	this.shape.setTransform(0,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,28.3);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnGAAIONAA");
	this.shape.setTransform(45.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,93.1,2);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#006600"],[0.459,1],0,0,0,0,0,152.5).s().p("AwkQlQm3m4gBptQABpsG3m4QG4m3JsgBQJtABG4G3QG4G4AAJsQAAJtm4G4Qm4G4ptAAQpsAAm4m4g");
	this.shape.setTransform(150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.2,300.2);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fire();
	this.instance.setTransform(-42.5,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-34,85,68);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AdKGDIAAqDICnAAQAfAAAWAZQAWAYAAAjIAACXQAAAQgKANQgIANgPANQAiAjgBAWIAADUQAAAhgWAaQgWAZgfAAgAe1FNIAPAAQANAAAAgNIAAj3QAAgMgNAAIgPAAgAe1AHIAPAAQANAAAAgLIAAi6QAAgMgNAAIgPAAgAZ/GDQgbAAgTgWQgVgWAAgcIAAn0QAAgdAVgVQATgVAbAAIBwAAQAaAAASAVQAUAVAAAdIAAH0QAAAdgUAVQgSAWgaAAgAanjGIAAIGQAAANANAAIADAAQAMAAAAgNIAAoGQAAgMgMAAIgDAAQgNAAAAAMgAVRGDIAAqDIDTAAIAABRIhoAAIAAIygATPGDIgHhiIg5AAIgHBiIhnAAIBHqDICHAAIBGKDgATBDQIgVknIgDAAIgVEnIAtAAgAMUGDIAAqDICnAAQAeAAAWAZQAYAYAAAjIAADnQAAAhgYAZQgWAZgdAAIg+AAIAAD1gAN+BYIAPAAQAOAAAAgNIAAkJQAAgMgOAAIgPAAgAIGGDIAAqDICnAAQAfAAAWAZQAWAYABAjIAACXQAAAQgLANQgIANgPANQAiAjAAAWIAADUQgBAhgWAaQgWAZgfAAgAJxFNIAOAAQAOAAAAgNIAAj3QAAgMgOAAIgOAAgAJxAHIAOAAQAOAAAAgLIAAi6QAAgMgOAAIgOAAgAAVGDIAAqDICoAAQAeAAAXAZQAWAYAAAjIAACXQAAAQgKANQgJANgOANQAhAjAAAWIAADUQAAAhgWAaQgXAZgeAAgACAFNIAPAAQANAAAAgNIAAj3QAAgMgNAAIgPAAgACAAHIAPAAQANAAAAgLIAAi6QAAgMgNAAIgPAAgAlSGDIAAlNIguFNIhrAAIAAqDIBrAAIAAFJIAulJIBrAAIAAKDgApyGDIAAkeIgQAAQgMABAAALIAAESIhrAAIAAkBQAAgVAhgkQgOgMgJgOQgKgPAAgPIAAi9QAAgjAXgYQAWgZAeAAICoAAIAAKDgAqOi+IAADgQAAANAOAAIAOAAIAAj5IgOAAQgOAAAAAMgAt/GDIAAoyIglAAIAAHqQABAcgWAWQgTAWgbAAIg+AAIAAhPIALAAQALAAAAgLIAAopID7AAIAAKDgA0SGDIAAqDIDSAAIAABRIhoAAIAACrIBWAAIAABPIhWAAIAADnIBoAAIAABRgA4gGDIAAqDICnAAQAfAAAWAZQAXAYAAAjIAADnQAAAhgXAZQgWAZgeAAIg9AAIAAD1gA21BYIAOAAQAOAAAAgNIAAkJQAAgMgOAAIgOAAgA7qGDIAAoyIhDAAIAAhRIDyAAIAABRIhEAAIAAIygA/sGDQgfAAgYgaQgYgaAAghIAAnZQAAgiAYgZQAYgaAfAAIBYAAQAeAAAWAaQAYAYAAAjIAACjIhsAAIAAi+QAAgMgNAAIgDAAQgMAAAAAMIAAIGQAAANAMAAIADAAQANAAAAgNIAAi1IBsAAIAACjQAAAhgYAaQgWAageAAgAmQkkQgaAAgUgXQgVgWAAgcIAAgVIBaAAIAAAcQAAALAKAAIACAAQALAAAAgLIAAgcIBZAAIAAAVQAAAcgTAWQgTAXgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-38.7,421.8,77.5);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("A7CCoIGwlPMAvVAAAImwFPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.2,-16.8,346.4,33.6);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,0,0,0.741)","rgba(255,0,0,0.02)"],[0,1],0.1,0,0,0.1,0,660).s().p("EhIJBIKUgd6gd4AAAgqSUAAAgqQAd6gd5UAd4gd6AqRAAAUAqRAAAAd5Ad6UAd6Ad5AAAAqQUAAAAqSgd6Ad4Ugd5Ad6gqRAAAUgqRAAAgd4gd6g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-653.2,-653.2,1306.5,1306.5);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVCLIgMgCQgOgEgNgGQgVgKgNgNQgLgLgJgLQgJgNgGgOQgGgOgDgPQgDgPAAgOQgBgRAGgSQADgNAJgSQAEgEAEgIQAFgJADgCIAYgUQALgKAMgGQANgFANgEIAOgCIARAAQAPAAAPACQAOAEAOAFQAOAHAMAIQAMAIALALQAQAUAIARQAFANAEAOQADAQAAAQQAAANgDAOQgDAMgEAMQgGAMgIAMQgHALgJAKQgKAKgLAHQgMAIgNAGQgNAGgOADQgOACgOAAQgKAAgJgBgAgVhCIgHABQgNAFgIALQgKAJgFAMQgEANAAAOQAAAPAFAPQAGANALAJQAHAHAMAEIAGACQALAEALAAQAOAAANgGQAMgFAJgKQAJgJAGgNQAFgNAAgNQAAgMgDgJQgFgKgJgNQgKgLgOgIQgPgFgOAAQgLAAgJADgAnzCJQgOgEgNgGQgVgKgOgNQgLgLgIgLQgJgNgGgOQgHgOgDgPQgDgPAAgOQAAgRAFgSQAEgNAJgSQADgEAFgIQAEgJADgCIAYgUQAMgKAMgGQAMgFAOgEQAOgCARAAQAQAAAQACQAPAEANAFQAOAHAMAIQALAIAKALQASAUAHARQAGANADAOQADAQAAAQQABANgDAOQgDAMgFAMQgFAMgIAMQgIALgIAKQgLAKgLAHQgMAIgMAGQgNAGgOADQgPACgPAAQgPAAgQgDgAnuhBQgNAFgJALQgJAJgFAMQgGANABAOQAAAPAFAPQAHANALAJQAHAHALAEQAPAGAPAAQAOAAAOgGQAMgFAJgKQAJgJAFgNQAGgNgBgNQABgMgEgJQgEgKgKgNQgJgLgOgIQgPgFgQAAQgOAAgNAEgAGxCFIgHAAIgPAAIgBgCIAAj9QAAgIAFABIA2gCQAJAAAAAJIAAA2QAAANAGACQASABAPACQAQACAOAGQAPAFANAJQANAKAKAOQAEAEADAHQAEANAAAQQAAASgEAOQgGAOgLAPQgJAKgKAGQgKAHgMAFQgMAEgMACQgNACgNAAgAHeAEIAABJIAEADIAIAAQAPAAAMgDQAPgFAHgKQAGgLAAgIQAAgMgEgIQgFgIgHgEQgGgFgKgCIgUgCIgIAAQgHAAAAACgACkCEQgEgDgBgKQABhSADihQABgLAHAAIA4AAQAFAAABAFIgBBMIABAVIBEAAQAJAAAAgbIAAg5IAAgOIAFgDIA9AAIADADIgDEFQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIg8AAQgGAAAAgaQAAgVADghIgDgdIgCgBIgyAAQgSgBgCACIgCACIgBBoQgDADgIAAQgdAAgbgBgAksCEQgFAAAAgJIAFj9QAAgDAMAAIAFgBIAkgBIBJABIAbABQAEAAAAAFQAAATgCAZQAAAHgGAAIhOAAIgBABQAAAxgEB0IgBAqIgCABg");
	this.shape.setTransform(-60.3,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.898)").s().p("A2zHZIAApyIE/k/MAooAAAIAAHzIkrAAIAAAiIErAAIAAA5IluAAIAAAcIFoAAIg1A0IAAgEImCAAIAAAiIFlAAIg/A+IhgAAIAAACIj9AAIAAAbIFBAAIiaCagAFIARIAKAAIAAARIAvAAQAGBeBEBEQBDBEBcAGIAJABIAAAlIAVAAIAAglIAKgBQBdgGBDhEQBFhEAFheIA4AAIAAgRIAAgFIg4AAQgBhkhJhJQhHhHhjgDIAAgcIgVAAIAAAcQhiAEhGBGQhJBJgCBkIg4AAgAKHDEIAAgEIgTAAIAAAEIAAAoQhUgEg8g8Qg5g5gGhOIgBgEIAaAAIAAgQIAAgEIgaAAIAAAAQABhWA/g/QA8g9BUgDIAAAhIATAAIAAghQBWADA9A9QA+A/ACBWIgdAAIAAAEIAAAQIAcAAIAAAEQgHBOg4A5Qg9A9hWADgAIQhXQgsAtAAA9QAAA/AsAsQAtAtA/AAQA/AAAsgtQAtgsAAg/QAAg9gtgtQgsgtg/AAQg/AAgtAtgAIdBxQgngnAAg3QAAg2AngoQAngnA4AAQA3AAAoAnQAnAoAAA2QAAA3gnAnQgoAog3AAQg4AAgngogAJZgOQgOAOAAAUQAAAUAOAPQAPAPAVAAQAUAAAPgPQAPgPAAgUQAAgUgPgOQgPgOgUAAQgVAAgPAOg");
	this.shape_1.setTransform(-28.5,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9D0000").s().p("A0MFsIAAgUMAoZAAAIgSASIACACgAMuBrQBVgDA9g9QA5g3AGhOIABAAQgGBRg6A4Qg9A+hVACgAKKAvQg6g4gFhRIABAAQAFBOA5A3QA9A9BUADIAAAEQhUgDg9g9gAMbBEIAAgFIATAAIAAAFgAPkhtIAAgFIAcAAIAAAFgAJKhtIABgFIAaAAIAAAFgAQjhuQgChmhIhJQhHhGhjgEIAAgEQBjADBHBHQBIBIACBnIA3AAIAAAEgAH4huIgKAAIAAgEIA5AAQAChnBIhIQBHhGBhgEIAAAEQhhAEhHBGQhIBJgCBmg");
	this.shape_2.setTransform(-45.2,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174.5,-44.7,292.1,96.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0.02)"],[0.004,0.498,1],-70,0,70,0).s().p("Aq7LKIAA2TIV3AAIAAWTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-71.4,140,142.9);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.enemy();
	this.instance.setTransform(-45.5,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.5,-81,91,162);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AdKGDIAAqDICnAAQAfAAAWAZQAWAYAAAjIAACXQAAAQgKANQgIANgPANQAiAjgBAWIAADUQAAAhgWAaQgWAZgfAAgAe1FNIAPAAQANAAAAgNIAAj3QAAgMgNAAIgPAAgAe1AHIAPAAQANAAAAgLIAAi6QAAgMgNAAIgPAAgAZ/GDQgbAAgTgWQgVgWAAgcIAAn0QAAgdAVgVQATgVAbAAIBwAAQAaAAASAVQAUAVAAAdIAAH0QAAAdgUAVQgSAWgaAAgAanjGIAAIGQAAANANAAIADAAQAMAAAAgNIAAoGQAAgMgMAAIgDAAQgNAAAAAMgAVRGDIAAqDIDTAAIAABRIhoAAIAAIygATPGDIgHhiIg5AAIgHBiIhnAAIBHqDICHAAIBGKDgATBDQIgVknIgDAAIgVEnIAtAAgAMUGDIAAqDICnAAQAeAAAWAZQAYAYAAAjIAADnQAAAhgYAZQgWAZgdAAIg+AAIAAD1gAN+BYIAPAAQAOAAAAgNIAAkJQAAgMgOAAIgPAAgAIGGDIAAqDICnAAQAfAAAWAZQAWAYABAjIAACXQAAAQgLANQgIANgPANQAiAjAAAWIAADUQgBAhgWAaQgWAZgfAAgAJxFNIAOAAQAOAAAAgNIAAj3QAAgMgOAAIgOAAgAJxAHIAOAAQAOAAAAgLIAAi6QAAgMgOAAIgOAAgAAVGDIAAqDICoAAQAeAAAXAZQAWAYAAAjIAACXQAAAQgKANQgJANgOANQAhAjAAAWIAADUQAAAhgWAaQgXAZgeAAgACAFNIAPAAQANAAAAgNIAAj3QAAgMgNAAIgPAAgACAAHIAPAAQANAAAAgLIAAi6QAAgMgNAAIgPAAgAlSGDIAAlNIguFNIhrAAIAAqDIBrAAIAAFJIAulJIBrAAIAAKDgApyGDIAAkeIgQAAQgMABAAALIAAESIhrAAIAAkBQAAgVAhgkQgOgMgJgOQgKgPAAgPIAAi9QAAgjAXgYQAWgZAeAAICoAAIAAKDgAqOi+IAADgQAAANAOAAIAOAAIAAj5IgOAAQgOAAAAAMgAt/GDIAAoyIglAAIAAHqQABAcgWAWQgTAWgbAAIg+AAIAAhPIALAAQALAAAAgLIAAopID7AAIAAKDgA0SGDIAAqDIDSAAIAABRIhoAAIAACrIBWAAIAABPIhWAAIAADnIBoAAIAABRgA4gGDIAAqDICnAAQAfAAAWAZQAXAYAAAjIAADnQAAAhgXAZQgWAZgeAAIg9AAIAAD1gA21BYIAOAAQAOAAAAgNIAAkJQAAgMgOAAIgOAAgA7qGDIAAoyIhDAAIAAhRIDyAAIAABRIhEAAIAAIygA/sGDQgfAAgYgaQgYgaAAghIAAnZQAAgiAYgZQAYgaAfAAIBYAAQAeAAAWAaQAYAYAAAjIAACjIhsAAIAAi+QAAgMgNAAIgDAAQgMAAAAAMIAAIGQAAANAMAAIADAAQANAAAAgNIAAi1IBsAAIAACjQAAAhgYAaQgWAageAAgAmQkkQgaAAgUgXQgVgWAAgcIAAgVIBaAAIAAAcQAAALAKAAIACAAQALAAAAgLIAAgcIBZAAIAAAVQAAAcgTAWQgTAXgZAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-38.7,421.8,77.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.water();
	this.instance.setTransform(-543.5,-198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.5,-198.5,1087,397);


(lib.gun_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gun();
	this.instance.setTransform(-288,-176.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-288,-176.5,576,353);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ37();
	this.instance.setTransform(250.7,150.3,1,1,0,0,0,0,6.4);

	this.instance_1 = new lib.Символ37();
	this.instance_1.setTransform(47.3,150.3,1,1,0,0,0,0,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ36();
	this.instance_2.setTransform(149.8,115.2,1,1,0,0,0,0,13.1);

	this.instance_3 = new lib.Символ36();
	this.instance_3.setTransform(149.8,186.1,1,1,0,0,0,0,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Слой 3
	this.instance_4 = new lib.Символ35();
	this.instance_4.setTransform(216.6,150.1,1,1,0,0,0,45.5,0);

	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(82.5,150.1,1,1,0,0,0,45.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.6)").s().p("AgPA5QgRgGgLgNQgMgOgDgRQgEgYASgVQAJgJAMgFQAMgFALACIAAgDIAAABQARAAAOAJQAPAJAHAOQAIAQgCAQQgDASgLANQgLANgRAGQgJACgIAAQgHAAgIgCg");
	this.shape.setTransform(149.8,150.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance_6 = new lib.Символ34();
	this.instance_6.setTransform(150.1,150.1,1,1,0,0,0,150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300.2,300.2);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ50();
	this.instance.setTransform(308,150,1,1,0,0,0,143,143);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ33();
	this.instance_1.setTransform(308.2,150.1,1,1,0,0,0,150.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EkNfC7fMAAAl29MIa+AAAMAAAF29gAybwbQm4G3AAJtQAAJvG4G4QG3G4JvAAQJsAAG5m4QG3m4ABpvQgBptm3m3Qm5m5psABQpvgBm3G5g");
	this.shape.setTransform(320.2,149.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1404.6,-1050.7,3449.6,2400);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-38.7,421.8,77.5);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-38.7,421.8,77.5);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.instance = new lib.Символ25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.9,-38.7,421.8,77.5);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},2).to({alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(6));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A7xEoIF+gjMApxAAAIl9AjgAzkkEIF6gkMApcAAAIl6Akg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(1.4,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},3).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("A7DCoIGwlPMAvWAAAImwFPg");
	this.shape_1.setTransform(1.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Ax9CoIGwlPIdLAAImwFPg");
	this.shape_2.setTransform(-56.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ap5CoIGwlPINCAAImwFPg");
	this.shape_3.setTransform(-108.4,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AmoCoIGulPIGjAAImuFPg");
	this.shape_4.setTransform(-129.3,0.1);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3).to({_off:false},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.8,-29.7,355.6,59.4);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(0,0,1.857,1.457,0,61.7,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.2,-83,434.4,166.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_25 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_34 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_44 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_57 = function() {
		this.parent.snip2.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(10).call(this.frame_25).wait(9).call(this.frame_34).wait(10).call(this.frame_44).wait(13).call(this.frame_57).wait(7).call(this.frame_64).wait(1));

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(0.8,-50.2,0.388,0.388);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(5).to({_off:false,scaleX:0.39,scaleY:0.39,alpha:1},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(4).to({_off:false,scaleX:0.39,scaleY:0.39,alpha:1},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(5).to({_off:false,scaleX:0.39,scaleY:0.39,alpha:1},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(17));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(91,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:45.5},7,cjs.Ease.get(-1)).to({x:0},7,cjs.Ease.get(1)).wait(36).to({x:45.5},7).to({x:91},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.5,-81,91,162);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_26 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_35 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_44 = function() {
		this.parent.parent.parent.parent.red.gotoAndPlay(1);
		this.parent.parent.parent.parent.title.hp.play();
		this.parent.parent.gotoAndPlay(1);
	}
	this.frame_58 = function() {
		this.parent.snip1.gotoAndPlay(0);
	}
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(10).call(this.frame_26).wait(9).call(this.frame_35).wait(9).call(this.frame_44).wait(14).call(this.frame_58).wait(7).call(this.frame_65).wait(1));

	// Слой 3
	this.instance = new lib.Символ27();
	this.instance.setTransform(4.8,-47,0.322,0.322);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(5).to({_off:false,scaleX:0.32,scaleY:0.32,alpha:1},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(4).to({_off:false,scaleX:0.32,scaleY:0.32,alpha:1},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(4).to({_off:false,scaleX:0.32,scaleY:0.32,alpha:1},0).to({scaleX:1,scaleY:1},1).to({alpha:0},3).to({_off:true},1).wait(18));

	// Слой 1
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(-91,0,0.977,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-45.5},7,cjs.Ease.get(-1)).to({x:0},7,cjs.Ease.get(1)).wait(37).to({x:-45.5},7,cjs.Ease.get(-1)).to({x:-91},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.4,-81,88.9,162);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(14);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(28.1,185.3,0.985,0.985);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-28.5,regY:3.6,x:0.1,y:118.4},0).wait(1).to({y:76.2},0).wait(1).to({y:48.4},0).wait(1).to({y:26.1},0).wait(1).to({y:7.6},0).wait(1).to({y:-5.9},0).wait(1).to({y:-15.6},0).wait(1).to({y:-22.5},0).wait(1).to({y:-27.8},0).wait(1).to({regX:0,regY:0,x:28.1,y:-35.5},0).to({y:-3.5},4,cjs.Ease.get(-1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.7,141.3,287.6,95.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.5,-198.5,1087,397);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.alpha = 0.641;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},37).to({alpha:0.875},13).to({alpha:0.641},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.5,-198.5,1087,397);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEFOVQgSgHiNhFIhDghQgjgUgXgWQgXgWgUghQgNgWgUgpQglhMgWgoQgjg/giguQgigvgLgaQgFgMgDgMIgMAGIALglIithKIDBAVIg6gkIAygcIhkgrIBdgyIhAhPIArghIhdgIIBAg5IhAgOIA5grIhOgHIBOgcIhOAHIAjhIIg5AAIAWg5IhBAAIBIhNIgDgCIgDgEIjmBFIBOi7QgKAAgHgEIkFBwIAni1IgBgCQgRgzAghJQAuhkBjg/QBig+BvABIACgOQFVAeEyCpQE1CpDQEPQA+BPAWA+QAQAsAFA8QADAjAABGIgDDlQgDCBgIBkQgFA2gGAgQgJAugQAjQgWAvguAtQgfAeg7AtQg8AugkAUQg5AggzAIQgRACgSAAQg9AAhIgcg");
	mask.setTransform(-400,114);

	// Слой 6
	this.snip2 = new lib.Символ9();
	this.snip2.setTransform(-390.2,134.1);

	this.snip2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.snip2).wait(1));

	// Слой 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AqatQIU1AAQjOMBAcLnIyDC5g");
	mask_1.setTransform(159.7,141.8);

	// Слой 5
	this.snip1 = new lib.Символ10();
	this.snip1.setTransform(167.2,148.6);

	this.snip1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.snip1).wait(1));

	// Слой 10 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.086,1],-48,0,48.1,0).s().p("EgH/BRPMAAAiidIP+AAMAAACidg");
	this.shape.setTransform(-672,-8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.086,1],0,72.8,0,-72.7).s().p("EhxDAMIIAA4PMDiHAAAIAAYPg");
	this.shape_1.setTransform(0.5,434.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.086,1],0,-80.2,0,80.3).s().p("EhxDANYIAA6vMDiHAAAIAAavg");
	this.shape_2.setTransform(0.5,-442.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(162.9,287.1);

	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(-713,-512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-723.2,-528,1447.4,1040.1);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.setTransform(-35.4,-105.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBClQgFAAAAgJIAAk7IABgDIBqAAQARAAAQACQAQADAOAFQAPAGAMAJQANAIAKAMQAPASAGASQAHARAAAWQAAAUgGARQgEAJgEAFQgMASgSAMQgPALgTAHQgSAGgUADQgSADgVAAQgJADAAARIAABDQAAAMgLAAgACVhhIgFAEIAABcQAAABAKAAIAJAAIAZgBQAMgDAIgFQAJgHAFgJQAFgKAAgPQAAgKgHgNQgJgMgSgHQgPgFgTAAIgKAAgAktClQgGgCAAgNQAAhmAFjJQABgOAIAAIBGAAQAHAAABAGIgBBgIABAZIBUAAQALABAAgjIAAhGIABgSIAGgEIBLAAIADAEIgDFFQAAAEgFAAIhKAAQgHAAAAggQAAgbADgpIgEgjIgCgCIg/gBQgVAAgDADIgDADIgBCAQgDAFgLAAQgjAAgigDg");
	this.shape.setTransform(-216.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 - копия
	this.hp = new lib.Символ16();
	this.hp.setTransform(-1.4,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.hp).wait(1));

	// Слой 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.427,1],-335.6,0,335.6,0).s().p("Eg0aAUTMAAAgolMBo2AAAMAAAAolg");
	this.shape_1.setTransform(55.1,-46.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280.5,-176.8,671.2,260);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmAGEQieigAAjkQAAjiCeihQCgihDgAAQDhAACfChQCgChAADiQAADkigCgQifCijhAAQjgAAigiig");
	mask.setTransform(225.6,93.5);

	// Слой 1
	this.instance = new lib.Символ13();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:52.3,y:22.4},0).wait(1).to({x:129.3,y:55.4},0).wait(1).to({x:218.2,y:93.4},0).wait(1).to({x:297.7,y:127.5},0).wait(1).to({x:353.5,y:151.3},0).wait(1).to({x:386.9,y:165.6},0).wait(1).to({x:406.8,y:174.2},0).wait(1).to({x:417.2,y:178.6},0).wait(1).to({x:422.3,y:180.8},0).wait(1).to({x:424.9,y:181.9},0).wait(1).to({x:427.1,y:182.9},0).to({_off:true},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(171.2,38.5,46,44.6);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ14();
	this.instance.setTransform(-145.6,-181.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.gun_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.8,-264.5,650.9,441.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Слой 1
	this.instance = new lib.bg_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.4},2,cjs.Ease.get(-1)).to({y:0},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-723.2,-528,1447.4,1040.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.3},10,cjs.Ease.get(-1)).to({y:29},9,cjs.Ease.get(1)).to({y:16},9,cjs.Ease.get(-1)).to({y:0},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.8,-264.5,650.9,441.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 1 - копия
	this.instance = new lib.Символ4();
	this.instance.setTransform(-24,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-747.2,-528,1447.4,1040.1);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
		this.parent.pricel.visible = true;
		this.parent.title.visible = false;
		this.parent.scene.play();
	}
	this.frame_13 = function() {
		this.gotoAndStop(12);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1).call(this.frame_13).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(-37.5,-44.1,1,1,0,0,0,-37.5,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:14.5,scaleX:1.15,scaleY:1.15,x:-105.4,y:17.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:-174.3,y:18.9},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:-217.4,y:20},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:-249.5,y:20.8},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-276.7,y:21.5},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:-296.7,y:22},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:-309.7,y:22.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:-318.4,y:22.6},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:-325,y:22.7},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:-330.5,y:22.9},0).wait(1).to({regX:-37.5,regY:-44.1,scaleX:1.46,scaleY:1.46,x:-390.3,y:-62.7},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.8,-264.5,650.9,441.1);


// stage content:



(lib.sniper_banner = function(mode,startPosition,loop) {
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
			
			_this.btn.x = windowSize.width;
			_this.btn.y = windowSize.height;
			
			_this.red.x = windowSize.width/2;
			_this.red.y = windowSize.height/2;
			
			_this.gun.x = windowSize.width;
			_this.gun.y = windowSize.height;
			
			_this.pricel.x = windowSize.width;
			_this.pricel.y = windowSize.height;
			
			_this.title.x = 0;
			_this.title.y = windowSize.height;
			
			_this.scene.x = windowSize.width/2;
			_this.scene.y = windowSize.height;
			
			if (windowSize.width < 767 && windowSize.width < windowSize.height){
				
			_this.gun.scaleX = 0.5;
			_this.gun.scaleY = 0.5;	
				
			_this.title.scaleX = 0.4;
			_this.title.scaleY = 0.4;	
				
			_this.scene.scaleX = 0.43;
			_this.scene.scaleY = 0.43;
				
			_this.title.x = 0;
			_this.title.y = windowSize.height/4;
				
			_this.pricel.scaleX = 0.5;
			_this.pricel.scaleY = 0.5;
			
			_this.btn.scaleX = 0.5;
			_this.btn.scaleY = 0.5;
			
			}
			
			if (windowSize.width < 767 && windowSize.width > windowSize.height){
				
			_this.gun.scaleX = 0.5;
			_this.gun.scaleY = 0.5;	
				
			_this.title.scaleX = 0.4;
			_this.title.scaleY = 0.4;	
				
			_this.scene.scaleX = 0.5;
			_this.scene.scaleY = 0.5;
				
			_this.pricel.scaleX = 0.5;
			_this.pricel.scaleY = 0.5;
				
			_this.btn.scaleX = 0.5;
			_this.btn.scaleY = 0.5;
			
			}
			
			if (windowSize.width < windowSize.height && windowSize.width > 767){
				
			_this.gun.scaleX = 0.8;
			_this.gun.scaleY = 0.8;	
				
			_this.title.scaleX = 0.7;
			_this.title.scaleY = 0.7;	
				
			_this.scene.scaleX = 1;
			_this.scene.scaleY = 1;
			
			}
			
			//if (windowSize.width < 569 && windowSize.width > windowSize.height ){
				
			
			//}
			
			if (windowSize.width == 600){
				
			_this.gun.scaleX = 0.5;
			_this.gun.scaleY = 0.5;	
				
			_this.title.scaleX = 0.7;
			_this.title.scaleY = 0.7;	
				
			_this.scene.scaleX = 0.8;
			_this.scene.scaleY = 0.8;
			
			_this.title.x = 0;
			_this.title.y = windowSize.height/4;
				
			_this.pricel.scaleX = 0.9;
			_this.pricel.scaleY = 0.9;
			
			_this.btn.scaleX = 0.7;
			_this.btn.scaleY = 0.7;
			
			}
			
		}
		
		window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
			
		//Actions
			
		_this.pricel.visible = false;
			
		function FireBtn(){
			var touch = event.targetTouches[0];
			var windowSize = getWindowSize();
			if(touch.pageX > windowSize.width - (windowSize.width/2) && touch.pageY > windowSize.height - (windowSize.height/5)){
				window.open("http://clickable.design/promo/", "_blank");
				document.location.reload();
				//console.log('go');
			}
		}
		
		var onTouchStart = function() {
			console.log('start');
			var touch = event.targetTouches[0];
			_this.gun.play();
			_this.pricel.x = touch.pageX;
			_this.pricel.y = touch.pageY;
			FireBtn();
			event.preventDefault(); 
		};
		
		var onTouchMove = function() {
			console.log('move');
			var touch = event.targetTouches[0];
			_this.pricel.x = touch.pageX;
			_this.pricel.y = touch.pageY;
			
			event.preventDefault(); 
		};
		
		var onTouchEnd = function() {
			console.log('end');
			var touch = event.targetTouches[0];
			_this.btn.play();
			
			event.preventDefault();
			
		};
		
		
		stage.canvas.addEventListener('touchmove', onTouchMove, false);
		stage.canvas.addEventListener('touchstart', onTouchStart, false);
		stage.canvas.addEventListener('touchend', onTouchEnd, false);
			
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.btn = new lib.Символ6();
	this.btn.setTransform(1024.2,767.1,1,1,0,0,0,187.5,90.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Слой 6
	this.pricel = new lib.Символ32();
	this.pricel.setTransform(508.6,307.2,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.pricel).wait(1));

	// Слой 3
	this.red = new lib.Символ18();
	this.red.setTransform(512.1,384.1);

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// Слой 5
	this.title = new lib.Символ21();
	this.title.setTransform(-1.4,767,1,1,0,0,0,-280.4,83);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// Слой 2
	this.gun = new lib.Символ17();
	this.gun.setTransform(1024.2,767.1,1,1,0,0,0,285.6,175.6);

	this.timeline.addTween(cjs.Tween.get(this.gun).wait(1));

	// Слой 1
	this.scene = new lib.Символ5();
	this.scene.setTransform(511.3,767.1,1,1,0,0,0,-128.7,511.1);

	this.timeline.addTween(cjs.Tween.get(this.scene).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-704,-512,3449.6,2400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
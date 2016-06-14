(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/body.png?1465895354175", id:"body"},
		{src:"images/dedcec.png?1465895354175", id:"dedcec"},
		{src:"images/faCE.png?1465895354175", id:"faCE"},
		{src:"images/fin.png?1465895354175", id:"fin"},
		{src:"images/finger.png?1465895354175", id:"finger"},
		{src:"images/frsd.png?1465895354175", id:"frsd"},
		{src:"images/hand.png?1465895354175", id:"hand"},
		{src:"images/handd.png?1465895354175", id:"handd"},
		{src:"images/head.png?1465895354175", id:"head"},
		{src:"images/iasz.png?1465895354175", id:"iasz"},
		{src:"images/sosos_misk.jpg?1465895354175", id:"sosos_misk"}
	]
};



// symbols:



(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,133);


(lib.dedcec = function() {
	this.initialize(img.dedcec);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,54);


(lib.faCE = function() {
	this.initialize(img.faCE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,400);


(lib.fin = function() {
	this.initialize(img.fin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,80);


(lib.finger = function() {
	this.initialize(img.finger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,186);


(lib.frsd = function() {
	this.initialize(img.frsd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,36);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,212);


(lib.handd = function() {
	this.initialize(img.handd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,55);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,65);


(lib.iasz = function() {
	this.initialize(img.iasz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,76);


(lib.sosos_misk = function() {
	this.initialize(img.sosos_misk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,400);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.357)").s().p("EgonAV4MAAAgrvMBRPAAAMAAAArvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260,-140,520,280);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("EghlAK8IAA13MBDLAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-70,430,140);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFC400","#833A00"],[0.004,1],85,-20,-345,-20).s().p("EghlAK8IAA13MBDLAAAIAAV3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-70,430,140);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABIBdIgPgDIgNgIIgMgJQgNgOgEgKQgHgPgCgRIgRAAIAAAtQAAAdgVAAQgUAAAAgdIAAh8QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIARAAQADgRAHgOQAEgJANgOQALgLAOgFQAJgDAVgCQASAAAPAHQAQAHALAMQALANAGASIAEASQACAKAAAJQAAAKgBAKQgCAJgDAJQgDAKgEAGQgEAIgGAHQgLAMgPAHQgQAHgSAAgABIgzQgHAEgFAHQgLAPAAAZQAAAaALAPQAFAHAHAEQAHAEAJgBQARABALgPQAKgPAAgaQAAgZgKgPQgLgPgRAAQgJAAgHAEgAjiBZQgHgFAAgLQAAgGADgDIAOgMQAEgFACgIIAZhnQACgHADgGQACgEAEgDQAEgCAFgCIA0gBQAOABAHAEQAIAFAAAJIAACEQAAAdgVAAQgKABgFgIQgFgHAAgPIAAhxIgYAAIgbByIgEAMIgHAKQgEAEgFACQgGADgHABQgKAAgHgGgAGfBbIgGgDIgEgGQgCgDAAgEQAAgFACgEIASgiIg4hgQgDgEAAgFQAAgIAGgFQAGgFAIAAQAIAAAFAFQAGAFADAHIAnBEIAghEQADgHAFgFQAFgFAIAAQAEAAAEACIAGADIACAEQAHgHAQAAIBIAAQAOABAIAEQAHAFAAAJQAAAKgHAFQgIAEgOAAIgPAAIAABxQAAAPgGAHQgFAIgKgBQgKABgFgIQgGgHAAgPIAAhxIgPAAQgRAAgHgGIhFCGQgEAHgFAFQgEAEgJAAgAE2A+IAAgtIhLAAIAAAtQAAAdgVAAQgUAAAAgdIAAh8QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIBLAAIAAgrQAAgPAFgGQAGgIAKAAQAKAAAFAIQAFAGAAAPIAAB8QAAAdgUAAQgVAAAAgdgAkdA+IAAhxIhLAAIAABxQAAAdgVAAQgUAAAAgdIAAh6QAAgOAFgHQAFgIAKAAIB1AAQAKAAAFAIQAFAHAAAOIAAB6QAAAdgUAAQgVAAAAgdgAnaA+IAAh8QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAB8QAAAdgVAAQgUAAAAgdgAKlBaIgOgBQgFgCgEgDQgDgDgBgFIgBgNIAAh9QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIAaAAQAgAAAQAOQAIAGAEAKQAEAKAAANQAAAMgEALQgEAKgIAHQgQAPggABgAKyA2IATAAQAOAAAHgFQAHgFAAgKQAAgFgCgEQgCgEgDgDQgHgEgPAAIgSAAgApTBaIgOgBQgFgCgEgDQgDgDgBgFIgBgNIAAh9QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIAaAAQAgAAAQAOQAIAGAEAKQAEAKAAANQAAAMgEALQgEAKgIAHQgQAPggABgApGA2IATAAQAOAAAHgFQAHgFAAgKQAAgFgCgEQgCgEgDgDQgHgEgPAAIgSAAgArvBaIgOgBQgFgCgEgDQgDgDgBgFIgBgNIAAh7IABgNQABgGADgDQAEgDAFgCQAGgBAIgBIAiAAQAcAAAOAMQAOANAAAUQAAANgGAJQgFAJgLAFQAJACAGAEQAHACAFAGQAFAFACAIQACAHAAAJQAAAZgQAPQgIAHgMAEQgMADgQABgAriA2IAUAAQAOAAAHgFQAHgFAAgKQAAgFgCgEQgBgEgEgDQgHgEgOAAIgUAAgArigSIARAAQAJAAAGgGQAFgEAAgIQAAgIgFgFQgGgFgJAAIgRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C5F3C").s().p("ABIBeIgPgFIgNgHIgMgJQgNgOgEgKQgHgPgCgRIgRAAIAAAtQAAAdgVAAQgUAAAAgdIAAh8QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIARAAQADgRAHgOQAEgJANgOQALgLAOgFQAJgDAVgCQASAAAPAHQAQAHALAMQALANAGASIAEASQACAKAAAJQAAAKgBAKQgCAKgDAIQgDAKgEAGQgEAIgGAHQgLAMgPAHQgQAHgSAAgABIgzQgHAEgFAHQgLAPAAAZQAAAaALAPQAFAHAHAEQAHAEAJgBQARAAALgOQAKgPAAgaQAAgZgKgPQgLgPgRAAQgJAAgHAEgAjiBZQgHgFAAgLQAAgFADgEIAOgMQAEgFACgIIAZhnQACgIADgFQACgEAEgDQAEgDAFgBIA0gBQAOABAHAEQAIAFAAAJIAACEQAAAdgVAAQgKAAgFgGQgFgIAAgPIAAhxIgYAAIgbByIgEAMIgHAKQgEAEgFACQgGAEgHAAQgKAAgHgGgAGfBbIgGgDIgEgGQgCgDAAgDQAAgGACgEIASgiIg4hgQgDgEAAgFQAAgIAGgFQAGgFAIAAQAIAAAFAFQAGAFADAHIAnBEIAghEQADgHAFgFQAFgFAIAAQAEAAAEABIAGAEIACAEQAHgHAQAAIBIAAQAOABAIAEQAHAFAAAJQAAAKgHAFQgIAEgOAAIgPAAIAABxQAAAPgGAIQgFAGgKAAQgKAAgFgGQgGgIAAgPIAAhxIgPAAQgRABgHgHIhFCGQgEAHgFAEQgEAFgJAAgAE2A+IAAgtIhLAAIAAAtQAAAdgVAAQgUAAAAgdIAAh8QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIBLAAIAAgrQAAgPAFgGQAGgIAKAAQAKAAAFAIQAFAGAAAPIAAB8QAAAdgUAAQgVAAAAgdgAkdA+IAAhxIhLAAIAABxQAAAdgVAAQgUAAAAgdIAAh6QAAgOAFgHQAFgIAKAAIB1AAQAKAAAFAIQAFAHAAAOIAAB6QAAAdgUAAQgVAAAAgdgAnaA+IAAh8QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAB8QAAAdgVAAQgUAAAAgdgAKlBZIgOgBQgFgBgEgDQgDgDgBgFIgBgNIAAh9QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIAaAAQAggBAQAPQAIAGAEAKQAEALAAAMQAAAMgEALQgEAKgIAHQgQAQgggBgAKyA2IATAAQAOAAAHgFQAHgFAAgKQAAgFgCgEQgCgEgDgDQgHgEgPAAIgSAAgApTBZIgOgBQgFgBgEgDQgDgDgBgFIgBgNIAAh9QAAgPAFgGQAFgIAKAAQALAAAFAIQAFAGAAAPIAAArIAaAAQAggBAQAPQAIAGAEAKQAEALAAAMQAAAMgEALQgEAKgIAHQgQAQgggBgApGA2IATAAQAOAAAHgFQAHgFAAgKQAAgFgCgEQgCgEgDgDQgHgEgPAAIgSAAgArvBZIgOgBQgFgBgEgDQgDgDgBgFIgBgNIAAh7IABgNQABgFADgEQAEgDAFgCQAGgBAIgBIAiAAQAcABAOALQAOAMAAAVQAAANgGAJQgFAJgLAEQAJADAGAEQAHACAFAGQAFAFACAIQACAHAAAJQAAAZgQAPQgIAHgMAEQgMADgQAAgAriA2IAUAAQAOAAAHgFQAHgFAAgKQAAgFgCgEQgBgEgEgDQgHgEgOAAIgUAAgArigSIARAAQAJAAAGgGQAFgEAAgIQAAgIgFgFQgGgFgJAAIgRAAg");
	this.shape_1.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-9.5,157.1,20.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB/CdQgdgNgVgWQgKgLgIgNQgIgOgFgPQgMggAAglQAAgSADgRQADgRAGgQQALgfAVgWQAVgWAcgNQAPgGAQgDQAQgDARAAQAkAAAcAMQAPAHAMAIQANAJAKALQAVAWALAfQAGAQADARQADARAAASQAAASgDASQgDARgFAQQgGAPgIAOQgIANgKALQgVAWgdANQgPAGgQADQgQADgSAAQgjAAgdgMgACghcQgPAHgKANQgKANgGATQgFASAAAWQAAAXAFASQAGATAKANQAKAMAPAHQAOAHARAAQASAAAOgHQAOgHALgMQAKgNAGgTQAFgSAAgXQAAgVgFgTQgGgTgKgNQgLgNgOgHQgOgGgSAAQgRAAgOAGgAq5CdQgdgNgUgWQgKgLgIgNQgIgOgGgPQgLggAAglQAAgSADgRQACgRAGgQQAMgfAVgWQAUgWAdgNQAOgGAQgDQAQgDASAAQAjAAAdAMQAOAHANAIQAMAJAKALQAVAWAMAfQAGAQADARQACARAAASQAAASgCASQgDARgGAQQgFAPgIAOQgJANgKALQgVAWgdANQgOAGgQADQgQADgSAAQgkAAgdgMgAqYhcQgOAHgKANQgLANgFATQgGASAAAWQAAAXAGASQAFATALANQAKAMAOAHQAPAHARAAQARAAAOgHQAPgHAKgMQAKgNAGgTQAGgSAAgXQAAgVgGgTQgGgTgKgNQgKgNgOgHQgPgGgRAAQgSAAgOAGgAkBCfQgMgKAAgSQAAgLAGgFIAZgXQAHgIAEgOIAsi6QADgNAFgIQAEgIAHgFQAHgFAKgCIAWgCIBFAAQAZAAANAJQANAIAAASIAADsQAAAzgkAAQgSAAgJgNQgKgNAAgaIAAjKIgqAAIgvDMQgCALgFAKQgFAJgIAIQgHAIgKAEQgJAFgMAAQgTAAgNgJgAJiCaQgIgLAAgXIAAjnQAAgaAJgNQAJgNASAAQASAAAJANQAKANAAAaIAACUICGiwQAJgMAJgGQAJgGAMAAQARAAAIANQAJAMAAAYIAADiQAAAzglAAQgkAAAAgzIAAiSIiECtQgLANgJAHQgKAGgMAAQgSAAgHgLgAPdCWQgKgNAAgaIAAjKIgaAAQg0AAAAgiQAAgiA0AAIB+AAQAaAAANAJQANAIAAARQAAARgNAIQgNAJgaAAIgbAAIAADKQAAAagJANQgJANgSAAQgSAAgJgNgAG4CWQgJgNAAgaIAAjKIgbAAQg0AAAAgiQAAgiA0AAIB/AAQAaAAANAJQANAIAAARQAAARgNAIQgNAJgaAAIgbAAIAADKQAAAagJANQgJANgTAAQgSAAgJgNgAmyBwIAAjbIACgYQACgJAGgHQAGgGAKgDQAJgDAPAAIBSAAQAaAAANAJQANAIAAARQAAARgNAIQgNAJgaAAIg7AAIAADKQAAAagJANQgJANgSAAQglAAAAgzgAwWBwIAAjbIACgYQACgJAGgHQAGgGAKgDQAJgDAPAAIBCAAQAcAAAWAIQAVAIAPAOQAPAOAIAUQAIAUAAAZQAAAygdAcQgOAOgVAHQgUAIgbAAIgxAAIAAA3QAAAzgkAAQglAAAAgzgAvNgHIAfAAQAaAAAMgLQAMgLAAgUQAAgWgMgKQgMgKgaAAIgfAAgAyXBwIAAjLIiGAAIAADLQAAAzglAAQgkAAAAgzIAAjbQAAgaAJgNQAJgNASAAIDPAAQASAAAJANQAKANAAAaIAADbQAAAzglAAQgkAAAAgzgASwCfQgPAAgJgCQgKgCgGgGQgGgFgCgJQgCgIAAgOIAAjgQAAgaAJgNQAJgNATAAQASAAAJANQAJANAAAaIAABMIAuAAQA5AAAcAaQAPALAHASQAHASAAAXQAAAWgHASQgHASgPANQgcAbg5AAgATHBhIAiAAQAZAAAMgKQANgJAAgRQAAgKgEgHQgDgGgGgFQgNgIgZAAIghAAg");
	this.shape.setTransform(-3.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#704E38").s().p("AB/CdQgdgNgVgWQgKgLgIgNQgIgOgFgPQgMggAAglQAAgSADgRQADgRAGgQQALgfAVgWQAVgWAcgNQAPgGAQgDQAQgDARAAQAkAAAcAMQAPAHAMAIQANAJAKALQAVAWALAfQAGAQADARQADARAAASQAAASgDASQgDARgFAQQgGAPgIAOQgIANgKALQgVAWgdANQgPAGgQADQgQADgSAAQgjAAgdgMgACghcQgPAHgKANQgKANgGATQgFASAAAWQAAAXAFASQAGATAKANQAKAMAPAHQAOAHARAAQASAAAOgHQAOgHALgMQAKgNAGgTQAFgSAAgXQAAgVgFgTQgGgTgKgNQgLgNgOgHQgOgGgSAAQgRAAgOAGgAq5CdQgdgNgUgWQgKgLgIgNQgIgOgGgPQgLggAAglQAAgSADgRQACgRAGgQQAMgfAVgWQAUgWAdgNQAOgGAQgDQAQgDASAAQAjAAAdAMQAOAHANAIQAMAJAKALQAVAWAMAfQAGAQADARQACARAAASQAAASgCASQgDARgGAQQgFAPgIAOQgJANgKALQgVAWgdANQgOAGgQADQgQADgSAAQgkAAgdgMgAqYhcQgOAHgKANQgLANgFATQgGASAAAWQAAAXAGASQAFATALANQAKAMAOAHQAPAHARAAQARAAAOgHQAPgHAKgMQAKgNAGgTQAGgSAAgXQAAgVgGgTQgGgTgKgNQgKgNgOgHQgPgGgRAAQgSAAgOAGgAkBCfQgMgKAAgSQAAgLAGgFIAZgXQAHgIAEgOIAsi6QADgNAFgIQAEgIAHgFQAHgFAKgCIAWgCIBFAAQAZAAANAJQANAIAAASIAADsQAAAzgkAAQgSAAgJgNQgKgNAAgaIAAjKIgqAAIgvDMQgCALgFAKQgFAJgIAIQgHAIgKAEQgJAFgMAAQgTAAgNgJgAJiCaQgIgLAAgXIAAjnQAAgaAJgNQAJgNASAAQASAAAJANQAKANAAAaIAACUICGiwQAJgMAJgGQAJgGAMAAQARAAAIANQAJAMAAAYIAADiQAAAzglAAQgkAAAAgzIAAiSIiECtQgLANgJAHQgKAGgMAAQgSAAgHgLgAPdCWQgKgNAAgaIAAjKIgaAAQg0AAAAgiQAAgiA0AAIB+AAQAaAAANAJQANAIAAARQAAARgNAIQgNAJgaAAIgbAAIAADKQAAAagJANQgJANgSAAQgSAAgJgNgAG4CWQgJgNAAgaIAAjKIgbAAQg0AAAAgiQAAgiA0AAIB/AAQAaAAANAJQANAIAAARQAAARgNAIQgNAJgaAAIgbAAIAADKQAAAagJANQgJANgTAAQgSAAgJgNgAmyBwIAAjbIACgYQACgJAGgHQAGgGAKgDQAJgDAPAAIBSAAQAaAAANAJQANAIAAARQAAARgNAIQgNAJgaAAIg7AAIAADKQAAAagJANQgJANgSAAQglAAAAgzgAwWBwIAAjbIACgYQACgJAGgHQAGgGAKgDQAJgDAPAAIBCAAQAcAAAWAIQAVAIAPAOQAPAOAIAUQAIAUAAAZQAAAygdAcQgOAOgVAHQgUAIgbAAIgxAAIAAA3QAAAzgkAAQglAAAAgzgAvNgHIAfAAQAaAAAMgLQAMgLAAgUQAAgWgMgKQgMgKgaAAIgfAAgAyXBwIAAjLIiGAAIAADLQAAAzglAAQgkAAAAgzIAAjbQAAgaAJgNQAJgNASAAIDPAAQASAAAJANQAKANAAAaIAADbQAAAzglAAQgkAAAAgzgASwCfQgPAAgJgCQgKgCgGgGQgGgFgCgJQgCgIAAgOIAAjgQAAgaAJgNQAJgNATAAQASAAAJANQAJANAAAaIAABMIAuAAQA5AAAcAaQAPALAHASQAHASAAAXQAAAWgHASQgHASgPANQgcAbg5AAgATHBhIAiAAQAZAAAMgKQANgJAAgRQAAgKgEgHQgDgGgGgFQgNgIgZAAIghAAg");
	this.shape_1.setTransform(-1.7,2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.6,-16.5,278.4,35.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.dedcec();
	this.instance.setTransform(-32,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-27,64,54);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.frsd();
	this.instance.setTransform(-27.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-18,55,36);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.handd();
	this.instance.setTransform(-26.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-27.5,53,55);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.head();
	this.instance.setTransform(-30.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-32.5,61,65);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.body();
	this.instance.setTransform(-65,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-66.5,130,133);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.iasz();
	this.instance.setTransform(-54,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-38,108,76);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#521D13").s().p("AFUCsQg7gpgBgPQAAgPAMAJIgFgEQgEAAgIgFIgWgMIgPgGQgIgFgLgEIgQgIIgEgDIgGgBIgCAAIgDAAQgDgBgGgEIgSgVQgJgJgSgKIgVgNQgOgHgKgEIgxgNQgcgHgMgGIgSgIQgLgFgJAGQgJAGgLgDQgLgDgEgGQgEgGgpgEIgeAFIgKAAQgsAsglgsIgKgBIgVAUQgWAUAKgMQAHgIgMAGQAIgFgoAEQgoAFgRgPQgRgPghAaQgkgWAIgKIAJgOIgFgEQgFAAgJgFIgKgFIgegeIgFAAIgGgEIgHgJIgHgJIgEgDIAAgBIgCgBIALgOIAHgMIAGgGIAIAIIAtApQAVASAMAGQAOAHAZACIAnAGIAbAHQAKACAUACQAVABAKACQAFACAEACIABAAQADgCAIAAIBUgCQAJAAAFgDIA8AAIAGAAQAUgBAgAGQAaAFAOAEQAPAFAZALQAvAWAQAJQAwAYAtAiIA0AaQAeAPASAGQAIADALABIADAAQAFgDAGADIAEgDQAGgFANgCQAegGAagCIAOgCQAKgFAHgCQAOgBAGgCQALgEALgSQAGgMABgEIACgMQACgKAEgLIAGgRQADgJACgFQAFgFADgBIACAmIgDAGIAAA2IAAABIgDAEQgEADAAAIIAAAJIgCgBIgBABQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQgCABgBAEIgBADQAAAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIgBgBIgCAEQgHAGAKgdIgtBJQgUAfg+AAQgXAAgbgEg");
	this.shape.setTransform(-0.2,51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.faCE();
	this.instance.setTransform(-74.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-200,149,400);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fin();
	this.instance.setTransform(-40,-50.5,1,1,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-50.5,116.7,101);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.finger();
	this.instance.setTransform(-16.6,-126.9,1,1,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.8,-126.9,251.7,253.9);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hand();
	this.instance.setTransform(-38,-158.6,1,1,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.6,-158.6,325.3,317.3);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.alpha = 0.211;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.121},5,cjs.Ease.get(-1)).to({alpha:0},7,cjs.Ease.get(1)).to({alpha:0.105},5,cjs.Ease.get(-1)).to({alpha:0.211},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260,-140,520,280);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ30();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.223},4,cjs.Ease.get(-1)).to({alpha:0},5,cjs.Ease.get(1)).to({alpha:0.199},5,cjs.Ease.get(-1)).to({alpha:0.398},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ28();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-70,430,140);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");

	// Слой 3
	this.instance = new lib.Символ29();
	this.instance.setTransform(5,10);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(1.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-19.6,317.4,42.4);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,0,1,1,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.5},6,cjs.Ease.get(-1)).to({rotation:2.7},8,cjs.Ease.get(1)).to({rotation:-0.3},8,cjs.Ease.get(-1)).to({rotation:-3.2},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-72.3,437.2,164.1);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(0,0,0.563,0.563,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().rr(-105,-20,210,40,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-20,210,40);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-1.7,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().rr(-105,-20,210,40,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-20,210,40);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8.9},8,cjs.Ease.get(-1)).to({y:-20},9,cjs.Ease.get(1)).to({y:-8.9},10).to({y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-72.3,437.2,164.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dedcec
	this.instance = new lib.Символ12();
	this.instance.setTransform(-92.5,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-13,x:-98.7,y:110.8},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-26.2,x:-105,y:104.5},7,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-12.1,x:-98.3,y:111.2},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:-92.5,y:117},7,cjs.Ease.get(1)).wait(1));

	// frsd
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(-188,-69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.01,skewX:4.3,skewY:-2.5,x:-189.2,y:-65.9},7,cjs.Ease.get(-1)).to({scaleY:1.03,skewX:8.8,skewY:-5.3,x:-190.3,y:-62.9},7,cjs.Ease.get(1)).to({scaleY:1.01,skewX:4,skewY:-2.3,x:-189,y:-66.1},8,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,skewY:0,x:-188,y:-69},7,cjs.Ease.get(1)).wait(1));

	// handd
	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(-142,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.02,skewX:8.8,x:-147.1},7,cjs.Ease.get(-1)).to({scaleY:1.05,skewX:17.6,x:-152.2},7,cjs.Ease.get(1)).to({scaleY:1.02,skewX:8.1,x:-146.7},8,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:-142},7,cjs.Ease.get(1)).wait(1));

	// head
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(-83,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:4.5,x:-93.7,y:13.5},7,cjs.Ease.get(-1)).to({rotation:9.2,x:-104.5,y:14.5},7,cjs.Ease.get(1)).to({rotation:4.3,x:-93,y:13.5},8,cjs.Ease.get(-1)).to({rotation:0,x:-83,y:12.5},7,cjs.Ease.get(1)).wait(1));

	// Слой 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgCgIgBgGIgGgEIgIgHQgFACAAgGIgNgOIgXgUQgOgKgZghQgigCgWgpQgVgqgggoIAEgDIgFgIQgSgogVglQgRgLgLgXQgYg0hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgLAogTQAmgTgFAMQBLgVAYAUIAHgFQAngcgugyQAegMAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_1 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgCgIgBgGIgGgEIgIgHQgFACAAgGIgNgOIgXgUQgOgKgZghQgigCgWgpQgVgqgggoIAEgDIgFgIQgSgogVglQgRgLgLgXQgYg0hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgLAogTQAmgTgFAMQBLgVAYAUIAHgFQAngcgugyQAegMAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_2 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_3 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_4 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_5 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_6 = new cjs.Graphics().p("AjMN3QgygHg1gaQgqgVg0gkQgtgfgcgdQgjglgPgoQgMgegEgnQgCgYABgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHgBgHIgFgEIgIgHQgGACABgGIgNgOIgYgUQgNgKgZghQgjgCgVgpQgVgpgggpIADgDIgEgIQgTgogVgkQgQgMgLgWQgYg1hyhbQCth2AiAAQAjgBAOgJQAOgKAsgLQAsgKAogUQAlgSgEAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBGgUQAngKAvgKQBCgNBVgJQAtgFBsgJIABADQCFgZCHBJQB9BEBSB9QAxBOAGA+QAEA5geBNQgRAsgjBXQgjBsAXBuQAEAWAMAuQAJAqgBAdQgBA2geA0QgdAvguAnQgmAeg5AgIhkA2QgtAZhCArIhwBHQgzAggSANQgmAbgWAcQgeAlgeBNQgOAhgJAQQgOAagUAOQgbATgpAAQgPAAgSgDg");
	var mask_graphics_7 = new cjs.Graphics().p("AjEN3QgygHg2gaQgqgVgzgkQgugfgbgdQgjglgQgoQgLgegEgnQgCgYAAgvIADjvQAChDgFglQgFg5gWgqIgKgXQgDgHgBgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgNgKgaghQgigCgVgpQgWgpgggpIAEgDIgEgIQgUgogUgkQgRgMgLgWQgXg1hzhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBMgWAXAUIAHgFQAmgcgtgxQAegNApgVQBCgjAWgKQAtgUBGgUQAmgKAwgKQBCgNBUgJQAugFBsgJIAAADQCGgZCHBJQB9BEBRB9QAyBOAFA+QAFA5gfBNQgQAsgkBXQgiBsAWBuQAFAWAMAuQAIAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggRANQgmAbgXAcQgdAlgfBNQgNAhgJAQQgPAagTAOQgcATgoAAQgQAAgRgDg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai9N3QgygHg2gaQgqgVgzgkQgtgfgbgdQgkglgQgoQgLgegEgnQgBgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgHgEIgIgHQgFACABgGIgOgOIgWgUQgOgKgZghQgjgCgVgpQgWgpgfgpIAEgDIgFgIQgTgogUgkQgSgMgKgWQgYg1hyhbQCth2AiAAQAjgBAPgJQANgKAsgLQArgKApgUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAdgNApgVQBCgjAWgKQAtgUBHgUQAlgKAwgKQBCgNBUgJQAugFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAEA+QAFA5geBNQgRAsgjBXQgjBsAWBuQAFAWAMAuQAJAqAAAdQgBA2ggA0QgcAvguAnQglAeg6AgIhkA2QgtAZhCArIhvBHQg0AggSANQglAbgYAcQgcAlgfBNQgOAhgIAQQgPAagUAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_9 = new cjs.Graphics().p("Ai4N3QgygHg2gaQgqgVgzgkQgtgfgbgdQgkglgQgoQgLgegDgnQgDgYABgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgHgEIgIgHQgFACABgGIgOgOIgWgUQgOgKgZghQgjgCgVgpQgWgpgfgpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AiAAQAjgBAPgJQAOgKArgLQArgKApgUQAlgSgEAMQBLgWAYAUIAGgFQAngcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAlgKAwgKQBDgNBTgJQAugFBsgJIABADQCFgZCHBJQB9BEBRB9QAzBOAEA+QAFA5geBNQgQAsgkBXQgjBsAWBuQAFAWAMAuQAJAqAAAdQgBA2ggA0QgcAvgvAnQglAeg4AgIhlA2QgtAZhDArIhuBHQg0AggSANQglAbgYAcQgfAlgcBNQgOAhgIAQQgPAagUAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_10 = new cjs.Graphics().p("AizN3QgygHg2gaQgqgVgzgkQgtgfgcgdQgjglgQgoQgLgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgHgEIgIgHQgFACABgGIgOgOIgWgUQgOgKgZghQgjgCgVgpQgWgpgfgpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAOgJQAPgKArgLQArgKApgUQAlgSgEAMQBLgWAYAUIAGgFQAngcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAlgKAwgKQBDgNBTgJQAugFBsgJIABADQCFgZCHBJQB9BEBRB9QAzBOAEA+QAFA5geBNQgQAsgkBXQgiBsAVBuQAFAWAMAuQAJAqgBAdQAAA2ggA0QgbAvgwAnQglAeg4AgIhkA2QguAZhDArIhuBHQg0AggSANQglAbgYAcQgfAlgcBNQgOAhgJAQQgPAagTAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_11 = new cjs.Graphics().p("AiuN3QgygHg1gaQgrgVgzgkQgtgfgcgdQgjglgQgoQgLgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHgBgHIgGgEIgIgHQgFACABgGIgOgOIgWgUQgOgKgZghQgjgCgVgpQgWgpgfgpIAEgDIgFgIQgTgogVgkQgQgMgLgWQgYg1hyhbQCth2AjAAQAigBAOgJQAPgKArgLQArgKApgUQAlgSgEAMQBLgWAYAUIAGgFQAngcgtgxQAdgNApgVQBCgjAWgKQAtgUBHgUQAlgKAwgKQBDgNBTgJQAugFBsgJIABADQCFgZCHBJQB9BEBRB9QAzBOAEA+QAFA5geBNQgQAsgkBXQgiBsAVBuQAFAWAMAuQAJAqgBAdQgBA2geA0QgdAvgvAnQglAeg4AgIhkA2QguAZhDArIhuBHQg0AggSANQgmAbgXAcQgfAlgcBNQgOAhgJAQQgPAagTAOQgbATgpAAQgPAAgSgDg");
	var mask_graphics_12 = new cjs.Graphics().p("AipN3QgygHg1gaQgqgVg0gkQgtgfgcgdQgjglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHgBgHIgGgEIgHgHQgGACABgGIgNgOIgYgUQgNgKgZghQgjgCgVgpQgWgpgfgpIADgDIgEgIQgTgogVgkQgRgMgKgWQgYg1hyhbQCth2AjAAQAigBAOgJQAOgKAsgLQArgKApgUQAlgSgEAMQBLgWAYAUIAGgFQAngcgtgxQAdgNApgVQBCgjAWgKQAtgUBGgUQAmgKAwgKQBDgNBTgJQAugFBsgJIABADQCFgZCHBJQB9BEBRB9QAzBOAEA+QAFA5geBNQgQAsgkBXQgiBsAVBuQAFAWAMAuQAJAqgBAdQgBA2geA0QgcAvgwAnQgkAeg5AgIhkA2QguAZhDArIhvBHQgzAggSANQgmAbgWAcQggAlgcBNQgOAhgJAQQgPAagTAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_13 = new cjs.Graphics().p("AinN3QgxgHg2gaQgqgVg0gkQgsgfgcgdQgkglgPgoQgLgegEgnQgCgYABgvIACjvQABhDgDglQgHg5gUgqIgLgXQgEgHAAgHIgGgEIgIgHQgFACAAgGIgNgOIgXgUQgNgKgZghQgkgCgUgpQgWgpgfgpIADgDIgEgIQgUgogUgkQgRgMgLgWQgYg1hxhbQCth2AiAAQAjgBAOgJQAOgKAsgLQArgKAogUQAmgSgEAMQBKgWAZAUIAGgFQAngcgtgxQAdgNAogVQBDgjAVgKQAugUBGgUQAmgKAwgKQBAgNBWgJQAtgFBtgJIABADQCFgZCGBJQB+BEBRB9QAyBOAFA+QAEA5gdBNQgRAsgjBXQgjBsAWBuQAEAWAMAuQAKAqgBAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QgtAZhDArIhvBHQgzAggTANQglAbgXAcQgfAlgcBNQgPAhgIAQQgPAagUAOQgbATgoAAQgQAAgSgDg");
	var mask_graphics_14 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_15 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_16 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_17 = new cjs.Graphics().p("AinN3QgxgHg2gaQgqgVg0gkQgsgfgcgdQgkglgPgoQgLgegEgnQgCgYABgvIACjvQABhDgDglQgHg5gUgqIgLgXQgEgHAAgHIgGgEIgIgHQgFACAAgGIgNgOIgXgUQgNgKgZghQgkgCgUgpQgWgpgfgpIADgDIgEgIQgUgogUgkQgRgMgLgWQgYg1hxhbQCth2AiAAQAjgBAOgJQAOgKAsgLQArgKAogUQAmgSgEAMQBKgWAZAUIAGgFQAngcgtgxQAdgNAogVQBDgjAVgKQAugUBGgUQAmgKAwgKQBAgNBWgJQAtgFBtgJIABADQCFgZCGBJQB+BEBRB9QAyBOAFA+QAEA5gdBNQgRAsgjBXQgjBsAWBuQAEAWAMAuQAKAqgBAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QgtAZhDArIhvBHQgzAggTANQglAbgXAcQgfAlgcBNQgPAhgIAQQgPAagUAOQgbATgoAAQgQAAgSgDg");
	var mask_graphics_18 = new cjs.Graphics().p("AisN3QgygHg1gaQgqgVg0gkQgsgfgcgdQgkglgPgoQgLgegEgnQgCgYABgvIACjvQABhDgDglQgHg5gUgqIgMgXQgCgHgBgHIgGgEIgIgHQgFACAAgGIgNgOIgXgUQgNgKgZghQgkgCgVgpQgVgpgfgpIADgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hxhbQCsh2AjAAQAjgBAOgJQAOgKAsgLQArgKApgUQAlgSgEAMQBKgWAZAUIAGgFQAngcgtgxQAdgNAogVQBCgjAWgKQAtgUBHgUQAmgKAvgKQBDgNBUgJQAtgFBsgJIACADQCEgZCHBJQB+BEBRB9QAyBOAFA+QAEA5gdBNQgRAsgjBXQgjBsAWBuQAEAWAMAuQAKAqgBAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QgtAZhDArIhvBHQgzAggTANQglAbgXAcQgfAlgcBNQgPAhgIAQQgPAagUAOQgbATgoAAQgQAAgSgDg");
	var mask_graphics_19 = new cjs.Graphics().p("AixN3QgygHg1gaQgqgVg0gkQgsgfgcgdQgkglgPgoQgMgegDgnQgCgYABgvIADjvQAAhDgDglQgHg5gUgqIgMgXQgDgHAAgHIgGgEIgIgHQgGACACgGIgOgOIgXgUQgOgKgYghQgjgCgWgpQgVgpgggpIAEgDIgFgIQgSgogVgkQgRgMgKgWQgZg1hxhbQCsh2AjAAQAigBAPgJQAOgKArgLQAsgKApgUQAlgSgFAMQBMgWAXAUIAHgFQAngcgugxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAvgKQBDgNBUgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAFA5gfBNQgQAsgjBXQgjBsAWBuQAEAWAMAuQAKAqgBAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QgtAZhDArIhvBHQgzAggTANQglAbgXAcQgfAlgcBNQgPAhgIAQQgPAagUAOQgbATgoAAQgQAAgSgDg");
	var mask_graphics_20 = new cjs.Graphics().p("Ai1N3QgzgHg1gaQgqgVg0gkQgtgfgbgdQgjglgQgoQgMgegDgnQgCgYAAgvIAEjvQABhDgFglQgFg5gWgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACACgGIgOgOIgXgUQgOgKgZghQgigCgWgpQgVgpgggpIAEgDIgFgIQgSgogVgkQgRgMgKgWQgYg1hzhbQCth2AjAAQAjgBAOgJQAOgKArgLQAsgKApgUQAlgSgFAMQBMgWAXAUIAHgFQAmgcgtgxQAegNAogVQBCgjAXgKQAsgUBHgUQAmgKAvgKQBDgNBUgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAFA5gfBNQgQAsgjBXQgjBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgdBNQgOAhgIAQQgPAagUAOQgbATgoAAQgQAAgRgDg");
	var mask_graphics_21 = new cjs.Graphics().p("Ai9N3QgygHg2gaQgqgVgzgkQgtgfgbgdQgkglgQgoQgLgegEgnQgBgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgHgEIgIgHQgFACABgGIgOgOIgWgUQgOgKgZghQgjgCgVgpQgWgpgfgpIAEgDIgFgIQgTgogUgkQgSgMgKgWQgYg1hyhbQCth2AiAAQAjgBAPgJQANgKAsgLQArgKApgUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAdgNApgVQBCgjAWgKQAtgUBHgUQAlgKAwgKQBCgNBUgJQAugFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAEA+QAFA5geBNQgRAsgjBXQgjBsAWBuQAFAWAMAuQAJAqAAAdQgBA2ggA0QgcAvguAnQglAeg6AgIhkA2QgtAZhCArIhvBHQg0AggSANQglAbgYAcQgcAlgfBNQgOAhgIAQQgPAagUAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_22 = new cjs.Graphics().p("AjCN3QgygHg2gaQgpgVg0gkQgtgfgbgdQgkglgQgoQgLgegEgnQgBgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgJgHQgFACABgGIgOgOIgXgUQgNgKgZghQgjgCgVgpQgVgpgggpIADgDIgEgIQgTgogUgkQgSgMgKgWQgYg1hyhbQCth2AiAAQAjgBAPgJQANgKAsgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAdgNApgVQBCgjAWgKQAtgUBGgUQAngKAvgKQBDgNBUgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAxBOAGA+QAEA5geBNQgRAsgjBXQgjBsAXBuQAEAWAMAuQAJAqAAAdQgCA2gfA0QgcAvguAnQglAeg6AgIhkA2QgtAZhCArIhwBHQgzAggSANQgmAbgXAcQgcAlgfBNQgOAhgIAQQgPAagUAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_23 = new cjs.Graphics().p("AjKN3QgxgHg2gaQgqgVgzgkQgugfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgFg5gWgqIgKgXQgDgHgBgHIgGgEIgIgHQgFACAAgGIgNgOIgXgUQgNgKgaghQgjgCgUgpQgWgpgfgpIADgDIgEgIQgUgogUgkQgRgMgLgWQgXg1hzhbQCuh2AiAAQAigBAPgJQAOgKAsgLQArgKAogUQAmgSgEAMQBKgWAZAUIAGgFQAmgcgsgxQAdgNApgVQBCgjAVgKQAugUBGgUQAmgKAwgKQBCgNBUgJQAugFBsgJIABADQCFgZCHBJQB9BEBRB9QAyBOAFA+QAFA5geBNQgRAsgkBXQgiBsAWBuQAFAWAMAuQAIAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggRANQgmAbgXAcQgdAlgfBNQgNAhgJAQQgPAagTAOQgcATgoAAQgQAAgSgDg");
	var mask_graphics_24 = new cjs.Graphics().p("AjRN3QgygHg1gaQgqgVg0gkQgtgfgcgdQgjglgPgoQgMgegEgnQgCgYABgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHgBgHIgFgEIgIgHQgGACABgGIgNgOIgYgUQgNgKgZghQgjgCgVgpQgVgpgggpIADgDIgEgIQgTgogVgkQgRgMgKgWQgYg1hyhbQCth2AjAAQAigBAOgJQAOgKAsgLQArgKApgUQAmgSgFAMQBLgWAYAUIAGgFQAngcgtgxQAdgNApgVQBCgjAWgKQAtgUBGgUQAngKAvgKQBCgNBVgJQAtgFBsgJIABADQCFgZCHBJQB9BEBRB9QAyBOAGA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqgBAdQgBA2geA0QgcAvgwAnQgkAeg6AgIhjA2QguAZhDArIhvBHQgzAggSANQgmAbgWAcQgdAlgfBNQgOAhgJAQQgPAagTAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_25 = new cjs.Graphics().p("AjWN3QgygHg1gaQgqgVg0gkQgtgfgcgdQgjglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHgBgHIgGgEIgHgHQgGACABgGIgNgOIgYgUQgNgKgZghQgjgCgVgpQgWgpgfgpIADgDIgEgIQgTgogVgkQgRgMgKgWQgYg1hyhbQCth2AjAAQAigBAOgJQAOgKAsgLQArgKApgUQAlgSgEAMQBLgWAYAUIAGgFQAngcgtgxQAdgNApgVQBCgjAWgKQAtgUBGgUQAmgKAwgKQBDgNBTgJQAugFBsgJIABADQCFgZCHBJQB9BEBRB9QAzBOAEA+QAFA5geBNQgQAsgkBXQgiBsAVBuQAFAWAMAuQAJAqgBAdQgBA2geA0QgcAvgwAnQgkAeg5AgIhkA2QguAZhDArIhvBHQgzAggSANQgmAbgWAcQgeAlgeBNQgOAhgJAQQgPAagTAOQgbATgpAAQgQAAgRgDg");
	var mask_graphics_26 = new cjs.Graphics().p("AjbN3QgygHg1gaQgrgVgzgkQgtgfgcgdQgjglgQgoQgLgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHgBgHIgGgEIgIgHQgFACABgGIgOgOIgWgUQgOgKgZghQgjgCgVgpQgWgpgfgpIAEgDIgFgIQgTgogVgkQgQgMgLgWQgYg1hyhbQCth2AjAAQAigBAOgJQAPgKArgLQArgKApgUQAlgSgEAMQBLgWAYAUIAGgFQAngcgtgxQAdgNApgVQBCgjAWgKQAtgUBHgUQAlgKAwgKQBDgNBTgJQAugFBsgJIABADQCFgZCHBJQB9BEBRB9QAzBOAEA+QAFA5geBNQgQAsgkBXQgiBsAVBuQAFAWAMAuQAJAqgBAdQgBA2geA0QgdAvgvAnQglAeg4AgIhkA2QguAZhDArIhuBHQg0AggSANQgmAbgVAcQgfAlgeBNQgOAhgJAQQgPAagTAOQgbATgpAAQgPAAgSgDg");
	var mask_graphics_27 = new cjs.Graphics().p("AjeN3QgygHg1gaQgqgVg0gkQgsgfgcgdQgkglgPgoQgMgegDgnQgCgYABgvIADjvQAAhDgDglQgHg5gUgqIgMgXQgDgHAAgHIgGgEIgIgHQgGACACgGIgOgOIgXgUQgOgKgYghQgjgCgWgpQgVgpgggpIAEgDIgFgIQgSgogVgkQgRgMgKgWQgZg1hxhbQCsh2AjAAQAigBAPgJQAOgKArgLQAsgKApgUQAlgSgFAMQBMgWAXAUIAHgFQAngcgugxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAvgKQBDgNBUgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAFA5gfBNQgQAsgjBXQgjBsAWBuQAEAWAMAuQAKAqgBAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QgtAZhDArIhvBHQgzAggTANQglAbgVAcQgfAlgeBNQgPAhgIAQQgPAagUAOQgbATgoAAQgQAAgSgDg");
	var mask_graphics_28 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgDgHAAgHIgGgEIgIgHQgGACABgGIgNgOIgXgUQgOgKgZghQgjgCgVgpQgVgpgggpIAEgDIgFgIQgTgogUgkQgRgMgLgWQgYg1hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgKAogUQAmgSgFAMQBLgWAYAUIAHgFQAmgcgtgxQAegNAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");
	var mask_graphics_29 = new cjs.Graphics().p("AhLN3QgygHg1gaQgqgVg0gkQgtgfgbgdQgkglgPgoQgMgegDgnQgCgYAAgvIADjvQABhDgEglQgGg5gVgqIgLgXQgCgIgBgGIgGgEIgIgHQgFACAAgGIgNgOIgXgUQgOgKgZghQgigCgWgpQgVgqgggoIAEgDIgFgIQgSgogVglQgRgLgLgXQgYg0hyhbQCth2AjAAQAigBAPgJQAOgKArgLQAsgLAogTQAmgTgFAMQBLgVAYAUIAHgFQAngcgugyQAegMAogVQBCgjAWgKQAtgUBHgUQAmgKAtgKQBDgNBWgJQAtgFBsgJIABADQCFgZCHBJQB+BEBRB9QAyBOAFA+QAEA5geBNQgQAsgkBXQgiBsAWBuQAEAWAMAuQAJAqAAAdQgBA2gfA0QgcAvgvAnQglAeg5AgIhkA2QguAZhCArIhvBHQg0AggSANQglAbgXAcQgfAlgfBNQgOAhgIAQQgPAagUAOQgZATgoAAQgQAAgSgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-116.7,y:35.2}).wait(1).to({graphics:mask_graphics_1,x:-116.7,y:35.2}).wait(1).to({graphics:mask_graphics_2,x:-116.2,y:35.2}).wait(1).to({graphics:mask_graphics_3,x:-115.7,y:35.2}).wait(1).to({graphics:mask_graphics_4,x:-115.2,y:35.2}).wait(1).to({graphics:mask_graphics_5,x:-113.7,y:35.2}).wait(1).to({graphics:mask_graphics_6,x:-99.2,y:35.2}).wait(1).to({graphics:mask_graphics_7,x:-98.5,y:35.2}).wait(1).to({graphics:mask_graphics_8,x:-97.7,y:35.2}).wait(1).to({graphics:mask_graphics_9,x:-97.2,y:35.2}).wait(1).to({graphics:mask_graphics_10,x:-96.7,y:35.2}).wait(1).to({graphics:mask_graphics_11,x:-96.2,y:35.2}).wait(1).to({graphics:mask_graphics_12,x:-95.7,y:35.2}).wait(1).to({graphics:mask_graphics_13,x:-95.5,y:35.2}).wait(1).to({graphics:mask_graphics_14,x:-104.2,y:35.2}).wait(1).to({graphics:mask_graphics_15,x:-104.2,y:35.2}).wait(1).to({graphics:mask_graphics_16,x:-104.2,y:35.2}).wait(1).to({graphics:mask_graphics_17,x:-95.5,y:35.2}).wait(1).to({graphics:mask_graphics_18,x:-96,y:35.2}).wait(1).to({graphics:mask_graphics_19,x:-96.5,y:35.2}).wait(1).to({graphics:mask_graphics_20,x:-97,y:35.2}).wait(1).to({graphics:mask_graphics_21,x:-97.7,y:35.2}).wait(1).to({graphics:mask_graphics_22,x:-98.2,y:35.2}).wait(1).to({graphics:mask_graphics_23,x:-99,y:35.2}).wait(1).to({graphics:mask_graphics_24,x:-99.7,y:35.2}).wait(1).to({graphics:mask_graphics_25,x:-100.2,y:35.2}).wait(1).to({graphics:mask_graphics_26,x:-100.7,y:35.2}).wait(1).to({graphics:mask_graphics_27,x:-101,y:35.2}).wait(1).to({graphics:mask_graphics_28,x:-116.2,y:35.2}).wait(1).to({graphics:mask_graphics_29,x:-116.7,y:35.2}).wait(1));

	// body
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(-138.5,36.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-148},7,cjs.Ease.get(-1)).to({x:-157.5},7,cjs.Ease.get(1)).to({x:-147.3},8,cjs.Ease.get(-1)).to({x:-138.5},7,cjs.Ease.get(1)).wait(1));

	// iasz
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(-204.5,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-198.5},7,cjs.Ease.get(-1)).to({x:-192.5},7,cjs.Ease.get(1)).to({x:-198.9},8,cjs.Ease.get(-1)).to({x:-204.5},7,cjs.Ease.get(1)).wait(1));

	// faCE
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(-207,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-203.5},7,cjs.Ease.get(-1)).to({x:-200},7,cjs.Ease.get(1)).to({x:-203.7},8,cjs.Ease.get(-1)).to({x:-207},7,cjs.Ease.get(1)).wait(1));

	// fin
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(-22.3,38);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-4.5,x:-31.8},7,cjs.Ease.get(-1)).to({rotation:-9.2,x:-41.3},7,cjs.Ease.get(1)).to({rotation:-4.3,x:-31.2},8,cjs.Ease.get(-1)).to({rotation:0,x:-22.3},7,cjs.Ease.get(1)).wait(1));

	// finger
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(18.3,151.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-2.8,x:4.9,y:153.6},7,cjs.Ease.get(-1)).to({rotation:-6,x:-8.7,y:156.1},7,cjs.Ease.get(1)).to({rotation:-2.8,x:5.6,y:153.4},8,cjs.Ease.get(-1)).to({rotation:0,x:18.3,y:151.1},7,cjs.Ease.get(1)).wait(1));

	// hand
	this.instance_9 = new lib.Символ3();
	this.instance_9.setTransform(55.8,162.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:1.3,x:42.3,y:160.8},7,cjs.Ease.get(-1)).to({rotation:2.7,x:28.8,y:159.3},7,cjs.Ease.get(1)).to({rotation:1.3,x:43.2,y:161},8,cjs.Ease.get(-1)).to({rotation:0,x:55.8,y:162.3},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.5,-200,500,521);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ32();
	this.instance.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.sosos_misk();
	this.instance_1.setTransform(-262.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-200,542.5,400);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6));

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(31.6,-60.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.28,scaleY:1.28,x:51.6,y:-76.4},5).to({scaleX:1,scaleY:1,x:31.6,y:-60.4},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-249.9,-260.4,500,521);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,10,1,1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-55.8,433.5,151.3);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();

	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(-1.7,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00C000").s().rr(-105,-20,210,40,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-20,210,40);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(0,0,0.563,0.563,0,0,0,-0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAE00").s().rr(-105,-20,210,40,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-20,210,40);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-20,210,40);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ21(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-20,210,40);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ24();
	this.instance.setTransform(0,28,0.857,0.857);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.92,scaleY:0.92},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.94,scaleY:0.94},4,cjs.Ease.get(-1)).to({scaleX:0.86,scaleY:0.86},5,cjs.Ease.get(1)).to({scaleX:0.93,scaleY:0.93},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-48,210,93.2);


// stage content:



(lib.sosos_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		document.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
			this.vss.gotoAndPlay(1);
		}
		
		
		document.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
			this.vss.gotoAndPlay(6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 15
	this.instance = new lib.Символ27();
	this.instance.setTransform(300,49);

	this.instance_1 = new lib.Символ20();
	this.instance_1.setTransform(455,149.4,1.19,1.19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// dedcec
	this.vss = new lib.Символ33();
	this.vss.setTransform(231,212.5);

	this.timeline.addTween(cjs.Tween.get(this.vss).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(282.6,125,1.247,1.275);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(255.1,20,676.8,603);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
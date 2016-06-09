(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/b1.png?1465401904507", id:"b1"},
		{src:"images/casinox.png?1465401904507", id:"casinox"},
		{src:"images/fr4.png?1465401904507", id:"fr4"},
		{src:"images/h1.png?1465401904507", id:"h1"},
		{src:"images/h2.png?1465401904507", id:"h2"},
		{src:"images/ha1.png?1465401904507", id:"ha1"},
		{src:"images/ha2.png?1465401904507", id:"ha2"},
		{src:"images/he1.png?1465401904507", id:"he1"},
		{src:"images/jp_fon.jpg?1465401904507", id:"jp_fon"},
		{src:"images/le1.png?1465401904507", id:"le1"},
		{src:"images/le2.png?1465401904507", id:"le2"},
		{src:"images/p6.png?1465401904507", id:"p6"},
		{src:"images/p78.png?1465401904507", id:"p78"},
		{src:"images/se04.png?1465401904507", id:"se04"},
		{src:"images/se1.png?1465401904507", id:"se1"},
		{src:"images/se2.png?1465401904507", id:"se2"},
		{src:"images/se3.png?1465401904507", id:"se3"},
		{src:"images/sr4.png?1465401904507", id:"sr4"},
		{src:"images/ti.png?1465401904507", id:"ti"}
	]
};



// symbols:



(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,256);


(lib.casinox = function() {
	this.initialize(img.casinox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,86);


(lib.fr4 = function() {
	this.initialize(img.fr4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,199);


(lib.h1 = function() {
	this.initialize(img.h1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,178);


(lib.h2 = function() {
	this.initialize(img.h2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,127);


(lib.ha1 = function() {
	this.initialize(img.ha1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,59);


(lib.ha2 = function() {
	this.initialize(img.ha2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,67);


(lib.he1 = function() {
	this.initialize(img.he1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,154);


(lib.jp_fon = function() {
	this.initialize(img.jp_fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,711,400);


(lib.le1 = function() {
	this.initialize(img.le1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,101);


(lib.le2 = function() {
	this.initialize(img.le2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,81);


(lib.p6 = function() {
	this.initialize(img.p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,3);


(lib.p78 = function() {
	this.initialize(img.p78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,3);


(lib.se04 = function() {
	this.initialize(img.se04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,244,111);


(lib.se1 = function() {
	this.initialize(img.se1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,451);


(lib.se2 = function() {
	this.initialize(img.se2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,154);


(lib.se3 = function() {
	this.initialize(img.se3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,176);


(lib.sr4 = function() {
	this.initialize(img.sr4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,299);


(lib.ti = function() {
	this.initialize(img.ti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,163);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().rr(-95,-25,190,50,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-25,190,50);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-95,-25,190,50,19.1);
	this.shape.setTransform(0,0,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-22.3,170.1,44.8);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.casinox();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,409,86);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.se1();
	this.instance.setTransform(-162.9,-225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,-225.5,326,451);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sr4();
	this.instance.setTransform(-122.7,-149.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-149.3,245,299);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.se2();
	this.instance.setTransform(-88.6,-77.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.6,-77.1,177,154);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.se04();
	this.instance.setTransform(-122.1,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.1,-55.5,244,111);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.se3();
	this.instance.setTransform(-53.3,-88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-88.2,107,176);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54A175").s().p("Egu/AAJIAAgRMBd/AAAIAAARg");
	this.shape.setTransform(3.6,61.1);

	this.instance = new lib.p78();
	this.instance.setTransform(23.8,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4262B").s().p("AgJANIAAgZIATAAIAAAZg");
	this.shape_1.setTransform(30.9,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA2D36").s().p("AglANIAAgYIBLAAIAAAYg");
	this.shape_2.setTransform(29,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4262B").s().p("AgHClIAAlJIAPAAIAAFJg");
	this.shape_3.setTransform(29.9,43.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA2D36").s().p("AgQClIAAlJIAhAAIAAFJg");
	this.shape_4.setTransform(29,43.2);

	this.instance_1 = new lib.p6();
	this.instance_1.setTransform(-45.6,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4262B").s().p("AgJANIAAgZIATAAIAAAZg");
	this.shape_5.setTransform(-38.4,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CA2D36").s().p("AglANIAAgYIBLAAIAAAYg");
	this.shape_6.setTransform(-40.3,26.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B4262B").s().p("AgIClIAAlJIAQAAIAAFJg");
	this.shape_7.setTransform(-39.4,43.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CA2D36").s().p("AgQClIAAlJIAhAAIAAFJg");
	this.shape_8.setTransform(-40.3,43.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4262B").s().p("AmNAOIgPgbIANAFQARAGAYABIFmABIFngBQAmgCAQgKIgPAbg");
	this.shape_9.setTransform(-5.6,7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CA2D36").s().p("AmNAhIAAhBIMbAAIAABBg");
	this.shape_10.setTransform(-5.6,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B4262B").s().p("AmQABIAAgVQGQApGRgpIAAAVQioAUjpAAQjoAAiogUg");
	this.shape_11.setTransform(-6.1,-6.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CA2D36").s().p("AmQAjIAAgYIgVgFIgmgqIgtgRQBQAVCMAMQCEALCYAAQCaAACDgLQCMgMBQgVIgtARIgmAqIgVAFIAAAYQioATjpABQjogBiogTg");
	this.shape_12.setTransform(-6.1,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#404041").s().p("AmQA9IAAgXIgVgGIgmgqIgtgRIgKg1QBKAZCQANQCIANCgAAQChAACHgNQCRgNBKgZIgKA1IgtARIgmAqIgVAGIAAAXQioAUjpAAQjoAAiogUg");
	this.shape_13.setTransform(-6.1,-12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B4262B").s().p("AgQFTIAAqlIAhAAIAAKlg");
	this.shape_14.setTransform(-32.1,25.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CA2D36").s().p("AghFTIAAqlIBEAAIAAKlg");
	this.shape_15.setTransform(-33.8,25.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B4262B").s().p("AgQFTIAAqlIAhAAIAAKlg");
	this.shape_16.setTransform(20.8,25.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CA2D36").s().p("AgiFTIAAqlIBEAAIAAKlg");
	this.shape_17.setTransform(22.6,25.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B4262B").s().p("AgVADIAAgFIArAAIAAAFg");
	this.shape_18.setTransform(220.8,-52.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6D6E70").s().p("AgMAvIAMhdIANBdg");
	this.shape_19.setTransform(220.8,-57.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B4262B").s().p("AjIAIQAbgHAggNIEcAAQAgAMAZAIQhyAGhWAAQhUAAh0gGg");
	this.shape_20.setTransform(220.9,-40.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B4262B").s().p("Ak0AJIgEgBIAcgEQAkgEAdgIIG2AAQAwAMAvAEIgFABg");
	this.shape_21.setTransform(220.9,-32.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CA2D36").s().p("Ak0BoIgEgBIAtgGQA0gKAlgRQA6gcAJgNIhZgEQA4gRA5ghQBBgoAWgmQAXAmBCAoQA4AgA3ASIhYAEIAMAKQAUAOAkARQAlARA0AKQAZAEAUACIgFABg");
	this.shape_22.setTransform(220.9,-42.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D6E70").s().p("AmeAMIAAgYIM9AAIAAAYg");
	this.shape_23.setTransform(220.2,60.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B4262B").s().p("AkLAQQg1AAg5gNQg4gLARAAQAIgBATgHQA+AQA8AAQCAgCCLACQCLgCCBACQA8AAA9gQQAUAHAIABQAQAAg3ALQg5ANg1AAQhJgBjDACQjDgChIABg");
	this.shape_24.setTransform(220.9,-20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#404041").s().p("AknAIIAAgPIJQAAIAAAPg");
	this.shape_25.setTransform(220.9,-18.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CA2D36").s().p("AkLA3Qg1AAg5gNQg4gNARAAQAWgBA/gcQBEgfASgYIHrAAQASAYBEAfQA/AcAWABQAQAAg3ANQg5ANg1AAQhJgBjDACQjDgChIABg");
	this.shape_26.setTransform(220.9,-24.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D6E70").s().p("AhbArIgGgIQgFgHABgBIANACQAigFAygYQAlgTAmgbIAIAGIAXAJQgHAJgkAWQgXANgtASIguAQIgDAAQgIAAgZgEg");
	this.shape_27.setTransform(188.3,-25.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6D6E70").s().p("AA3AvQhNgagkgVQgWgOgNgKIgIgHIAXgJIAHgGQAmAbAmATQAyAYAiAFIANgCQABABgLAPQgZAEgIAAIgEAAg");
	this.shape_28.setTransform(253.5,-25.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B4262B").s().p("AkJAQQg1AAg4gNQg6gMASAAQAIAAAUgHQA+AQA7AAQBbgBCwABQCygBBbABQA7AAA+gQQATAHAIAAQhCAZhSAAQhJgBjEACQjCgChJABg");
	this.shape_29.setTransform(220.7,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#404041").s().p("AknAJIAAgQIJQAAIAAAQg");
	this.shape_30.setTransform(220.9,2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CA2D36").s().p("AkJA3Qg1AAg4gNQg6gOASAAQAWAAA/gcQBEgfASgXIHrAAQASAXBFAfQA/AcAVAAQhCAbhSAAQhJgBjEACQjCgChJABg");
	this.shape_31.setTransform(220.7,-3.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6E70").s().p("AhbArIgGgIQgFgHABgBIAHABIAGABQAigFAygYQAkgTAngbIAIAGIAXAJQgHAJgkAWQgXAMgtASIguARIgCAAQgHAAgbgEg");
	this.shape_32.setTransform(188.3,-4.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6E70").s().p("AA3AvQhNgagkgVQgWgOgNgKIgIgHIAXgJIAHgGQAnAbAlATQAyAYAiAFIAGgBIAHgBQABABgLAPQgbAEgHAAIgDAAg");
	this.shape_33.setTransform(253.5,-4.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B4262B").s().p("AkLAPQg1ABg5gNQg4gLARgBQAHAAAUgGQA+APA8AAQBIgBDDABQDDgBBJABQA7AAA+gPQAVAGAHAAQAQABg3ALQg5ANg1gBQhbgBixACQiwgChbABg");
	this.shape_34.setTransform(220.9,22);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#404041").s().p("AknAIIAAgPIJQAAIAAAPg");
	this.shape_35.setTransform(220.9,23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CA2D36").s().p("AkLA2Qg1ABg5gNQg4gNARgBQAWgBA/gbQBEgfASgXIHrAAQASAXBEAfQA/AbAWABQAQABg3ANQg5ANg1gBQhbgBixACQiwgChbABg");
	this.shape_36.setTransform(220.9,18.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6D6E70").s().p("AhbArIgGgHQgFgIABgBIANACQAigEAygZQAlgTAmgbIAIAGIAXAJQgHAJgkAWQgXANgtASIguAQIgDAAQgIAAgZgEg");
	this.shape_37.setTransform(188.3,16.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6D6E70").s().p("AA3AvQhNgagkgVQgWgNgNgKIgIgIIAXgJIAHgGQAnAbAlATQAyAZAiAEIANgCQABABgLAPQgZAEgIAAIgEAAg");
	this.shape_38.setTransform(253.5,16.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#404041").s().p("AguBGIAAiLIBdAAIAACLg");
	this.shape_39.setTransform(221.1,52.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B4262B").s().p("AlTAPQhEABhIgNQhIgLAVgBQALAAAZgGQBQAPBLAAQBdgBD4ABQD7gBBcABQBKAABRgPQAZAGAKAAQhVAahpgCQhzgBjkACQjhgCh0ABg");
	this.shape_40.setTransform(220.7,41.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#404041").s().p("Al6AIIAAgPIL1AAIAAAPg");
	this.shape_41.setTransform(220.9,43.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B4262B").s().p("AgEBPIAAidIAIAAIAACdg");
	this.shape_42.setTransform(258.4,51.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CA2D36").s().p("AgJBPIAAidIASAAIAACdg");
	this.shape_43.setTransform(257.9,51.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B4262B").s().p("AgDBPIAAidIAIAAIAACdg");
	this.shape_44.setTransform(246.1,51.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CA2D36").s().p("AgIBPIAAidIASAAIAACdg");
	this.shape_45.setTransform(245.6,51.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B4262B").s().p("AgDBPIAAidIAHAAIAACdg");
	this.shape_46.setTransform(233.7,51.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CA2D36").s().p("AgIBPIAAidIARAAIAACdg");
	this.shape_47.setTransform(233.2,51.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B4262B").s().p("AgEBPIAAidIAIAAIAACdg");
	this.shape_48.setTransform(209.1,51.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CA2D36").s().p("AgJBPIAAidIASAAIAACdg");
	this.shape_49.setTransform(208.6,51.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B4262B").s().p("AgDBPIAAidIAHAAIAACdg");
	this.shape_50.setTransform(196.8,51.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CA2D36").s().p("AgIBPIAAidIARAAIAACdg");
	this.shape_51.setTransform(196.3,51.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B4262B").s().p("AgEBPIAAidIAIAAIAACdg");
	this.shape_52.setTransform(184.5,51.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CA2D36").s().p("AgIBPIAAidIARAAIAACdg");
	this.shape_53.setTransform(184,51.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CA2D36").s().p("AlTA2QhEABhIgNQhIgNAVgBQAcgBBRgbQBXgfAXgXIJ0AAQAXAXBXAfQBQAbAcABQhVAchpgCQhzgBjkACQjhgCh0ABg");
	this.shape_54.setTransform(220.7,37.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6D6E70").s().p("Ah1ArIgHgHQgGgIABgBIAQACQAsgEBAgZQAwgTAwgbIAKAGIAdAJQgJAJguAWQgdANg6ASIg6AQIgFAAQgKAAgggEg");
	this.shape_55.setTransform(179.3,36.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9A7374").s().p("AAVAuIAAgPIAdAAIAAAPgAgQAuIAAgPIAiAAIAAAPgAgxAuIAAgPIAdAAIAAAPgAAVAdIAAgSIAdAAIAAASgAgQAdIAAgSIAiAAIAAASgAgxAdIAAgSIAdAAIAAASgAAVAIIAAgPIAdAAIAAAPgAgQAIIAAgPIAiAAIAAAPgAgxAIIAAgPIAdAAIAAAPgAAVgKIAAgRIAdAAIAAARgAgQgKIAAgRIAiAAIAAARgAgxgKIAAgRIAdAAIAAARgAAVgeIAAgPIAdAAIAAAPgAgQgeIAAgPIAiAAIAAAPgAgxgeIAAgPIAdAAIAAAPg");
	this.shape_56.setTransform(245.9,49.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9A7374").s().p("AAVAuIAAgPIAeAAIAAAPgAgRAuIAAgPIAiAAIAAAPgAgxAuIAAgPIAeAAIAAAPgAAVAdIAAgSIAeAAIAAASgAgRAdIAAgSIAiAAIAAASgAgxAdIAAgSIAeAAIAAASgAAVAIIAAgPIAeAAIAAAPgAgRAIIAAgPIAiAAIAAAPgAgxAIIAAgPIAeAAIAAAPgAAVgKIAAgRIAeAAIAAARgAgRgKIAAgRIAiAAIAAARgAgxgKIAAgRIAeAAIAAARgAAVgeIAAgPIAeAAIAAAPgAgRgeIAAgPIAiAAIAAAPgAgxgeIAAgPIAeAAIAAAPg");
	this.shape_57.setTransform(233.9,49.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9A7374").s().p("AAUAuIAAgPIAfAAIAAAPgAgQAuIAAgPIAhAAIAAAPgAgyAuIAAgPIAfAAIAAAPgAAUAdIAAgSIAfAAIAAASgAgQAdIAAgSIAhAAIAAASgAgyAdIAAgSIAfAAIAAASgAAUAIIAAgPIAfAAIAAAPgAgQAIIAAgPIAhAAIAAAPgAgyAIIAAgPIAfAAIAAAPgAAUgKIAAgRIAfAAIAAARgAgQgKIAAgRIAhAAIAAARgAgygKIAAgRIAfAAIAAARgAAUgeIAAgPIAfAAIAAAPgAgQgeIAAgPIAhAAIAAAPgAgygeIAAgPIAfAAIAAAPg");
	this.shape_58.setTransform(208,49.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9A7374").s().p("AAUAuIAAgPIAfAAIAAAPgAgQAuIAAgPIAhAAIAAAPgAgyAuIAAgPIAfAAIAAAPgAAUAdIAAgSIAfAAIAAASgAgQAdIAAgSIAhAAIAAASgAgyAdIAAgSIAfAAIAAASgAAUAIIAAgPIAfAAIAAAPgAgQAIIAAgPIAhAAIAAAPgAgyAIIAAgPIAfAAIAAAPgAAUgKIAAgRIAfAAIAAARgAgQgKIAAgRIAhAAIAAARgAgygKIAAgRIAfAAIAAARgAAUgeIAAgPIAfAAIAAAPgAgQgeIAAgPIAhAAIAAAPgAgygeIAAgPIAfAAIAAAPg");
	this.shape_59.setTransform(195.9,49.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#682E2F").s().p("AlTB6IAAj0IKoAAIAAD0g");
	this.shape_60.setTransform(220.9,47.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6D6E70").s().p("ABIAvQhkgagugVQgcgNgRgKIgKgIIAdgJIAKgGQAxAbAwATQBAAZAsAEIAPgCQACABgOAPQggAEgKAAIgEAAg");
	this.shape_61.setTransform(262.5,36.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B4262B").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape_62.setTransform(250.2,29.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CA2D36").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_63.setTransform(249.8,29.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B4262B").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape_64.setTransform(240.6,29.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CA2D36").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_65.setTransform(240.2,29.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B4262B").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape_66.setTransform(230.9,29.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CA2D36").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_67.setTransform(230.6,29.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B4262B").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape_68.setTransform(211.7,29.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CA2D36").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_69.setTransform(211.3,29.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B4262B").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape_70.setTransform(202,29.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CA2D36").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_71.setTransform(201.6,29.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B4262B").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape_72.setTransform(192.4,29.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CA2D36").s().p("AgGA4IAAhvIANAAIAABvg");
	this.shape_73.setTransform(192,29.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B4262B").s().p("AgCC2IAAlrIAGAAIAAFrg");
	this.shape_74.setTransform(245.2,-0.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CA2D36").s().p("AgGC2IAAlrIANAAIAAFrg");
	this.shape_75.setTransform(244.8,-0.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B4262B").s().p("AgCC3IAAltIAFAAIAAFtg");
	this.shape_76.setTransform(230.9,-0.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CA2D36").s().p("AgGC3IAAltIANAAIAAFtg");
	this.shape_77.setTransform(230.6,-0.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B4262B").s().p("AgCC3IAAlsIAFAAIAAFsg");
	this.shape_78.setTransform(211.7,-0.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CA2D36").s().p("AgGC3IAAlsIANAAIAAFsg");
	this.shape_79.setTransform(211.3,-0.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B4262B").s().p("AgCC2IAAlsIAGAAIAAFsg");
	this.shape_80.setTransform(197.5,-0.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CA2D36").s().p("AgGC2IAAlsIANAAIAAFsg");
	this.shape_81.setTransform(197.1,-0.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9A7374").s().p("AAPAhIAAgLIAVAAIAAALgAgLAhIAAgLIAXAAIAAALgAgjAhIAAgLIAWAAIAAALgAAPAUIAAgMIAVAAIAAAMgAgLAUIAAgMIAXAAIAAAMgAgjAUIAAgMIAWAAIAAAMgAAPAGIAAgLIAVAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAPgHIAAgMIAVAAIAAAMgAgLgHIAAgMIAXAAIAAAMgAgjgHIAAgMIAWAAIAAAMgAAPgVIAAgLIAVAAIAAALgAgLgVIAAgLIAXAAIAAALgAgjgVIAAgLIAWAAIAAALg");
	this.shape_82.setTransform(238.9,-13.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#9A7374").s().p("AAPAhIAAgLIAVAAIAAALgAgLAhIAAgLIAYAAIAAALgAgjAhIAAgLIAVAAIAAALgAAPAUIAAgMIAVAAIAAAMgAgLAUIAAgMIAYAAIAAAMgAgjAUIAAgMIAVAAIAAAMgAAPAGIAAgLIAVAAIAAALgAgLAGIAAgLIAYAAIAAALgAgjAGIAAgLIAVAAIAAALgAAPgHIAAgMIAVAAIAAAMgAgLgHIAAgMIAYAAIAAAMgAgjgHIAAgMIAVAAIAAAMgAAPgVIAAgLIAVAAIAAALgAgLgVIAAgLIAYAAIAAALgAgjgVIAAgLIAVAAIAAALg");
	this.shape_83.setTransform(230.2,-13.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#9A7374").s().p("AAOAhIAAgLIAWAAIAAALgAgLAhIAAgLIAXAAIAAALgAgjAhIAAgLIAWAAIAAALgAAOAUIAAgMIAWAAIAAAMgAgLAUIAAgMIAXAAIAAAMgAgjAUIAAgMIAWAAIAAAMgAAOAGIAAgLIAWAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAOgHIAAgMIAWAAIAAAMgAgLgHIAAgMIAXAAIAAAMgAgjgHIAAgMIAWAAIAAAMgAAOgVIAAgLIAWAAIAAALgAgLgVIAAgLIAXAAIAAALgAgjgVIAAgLIAWAAIAAALg");
	this.shape_84.setTransform(211.6,-13.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#9A7374").s().p("AAOAhIAAgLIAWAAIAAALgAgLAhIAAgLIAXAAIAAALgAgjAhIAAgLIAWAAIAAALgAAOAUIAAgMIAWAAIAAAMgAgLAUIAAgMIAXAAIAAAMgAgjAUIAAgMIAWAAIAAAMgAAOAGIAAgLIAWAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAOgHIAAgMIAWAAIAAAMgAgLgHIAAgMIAXAAIAAAMgAgjgHIAAgMIAWAAIAAAMgAAOgVIAAgLIAWAAIAAALgAgLgVIAAgLIAXAAIAAALgAgjgVIAAgLIAWAAIAAALg");
	this.shape_85.setTransform(203,-13.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9A7374").s().p("AAPAgIAAgKIAVAAIAAAKgAgLAgIAAgKIAXAAIAAAKgAgjAgIAAgKIAWAAIAAAKgAAPAUIAAgMIAVAAIAAAMgAgLAUIAAgMIAXAAIAAAMgAgjAUIAAgMIAWAAIAAAMgAAPAGIAAgLIAVAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAPgGIAAgOIAVAAIAAAOgAgLgGIAAgOIAXAAIAAAOgAgjgGIAAgOIAWAAIAAAOgAAPgVIAAgKIAVAAIAAAKgAgLgVIAAgKIAXAAIAAAKgAgjgVIAAgKIAWAAIAAAKg");
	this.shape_86.setTransform(238.9,8.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#9A7374").s().p("AAPAgIAAgKIAVAAIAAAKgAgLAgIAAgKIAYAAIAAAKgAgjAgIAAgKIAVAAIAAAKgAAPAUIAAgMIAVAAIAAAMgAgLAUIAAgMIAYAAIAAAMgAgjAUIAAgMIAVAAIAAAMgAAPAGIAAgLIAVAAIAAALgAgLAGIAAgLIAYAAIAAALgAgjAGIAAgLIAVAAIAAALgAAPgGIAAgOIAVAAIAAAOgAgLgGIAAgOIAYAAIAAAOgAgjgGIAAgOIAVAAIAAAOgAAPgVIAAgKIAVAAIAAAKgAgLgVIAAgKIAYAAIAAAKgAgjgVIAAgKIAVAAIAAAKg");
	this.shape_87.setTransform(230.2,8.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#9A7374").s().p("AAOAgIAAgKIAWAAIAAAKgAgLAgIAAgKIAXAAIAAAKgAgjAgIAAgKIAWAAIAAAKgAAOAUIAAgMIAWAAIAAAMgAgLAUIAAgMIAXAAIAAAMgAgjAUIAAgMIAWAAIAAAMgAAOAGIAAgLIAWAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAOgGIAAgOIAWAAIAAAOgAgLgGIAAgOIAXAAIAAAOgAgjgGIAAgOIAWAAIAAAOgAAOgVIAAgKIAWAAIAAAKgAgLgVIAAgKIAXAAIAAAKgAgjgVIAAgKIAWAAIAAAKg");
	this.shape_88.setTransform(211.6,8.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9A7374").s().p("AAOAgIAAgKIAWAAIAAAKgAgLAgIAAgKIAXAAIAAAKgAgjAgIAAgKIAWAAIAAAKgAAOAUIAAgMIAWAAIAAAMgAgLAUIAAgMIAXAAIAAAMgAgjAUIAAgMIAWAAIAAAMgAAOAGIAAgLIAWAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAOgGIAAgOIAWAAIAAAOgAgLgGIAAgOIAXAAIAAAOgAgjgGIAAgOIAWAAIAAAOgAAOgVIAAgKIAWAAIAAAKgAgLgVIAAgKIAXAAIAAAKgAgjgVIAAgKIAWAAIAAAKg");
	this.shape_89.setTransform(203,8.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9A7374").s().p("AAPAgIAAgKIAVAAIAAAKgAgLAgIAAgKIAXAAIAAAKgAgjAgIAAgKIAWAAIAAAKgAAPAVIAAgOIAVAAIAAAOgAgLAVIAAgOIAXAAIAAAOgAgjAVIAAgOIAWAAIAAAOgAAPAGIAAgLIAVAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAPgGIAAgOIAVAAIAAAOgAgLgGIAAgOIAXAAIAAAOgAgjgGIAAgOIAWAAIAAAOgAAPgVIAAgKIAVAAIAAAKgAgLgVIAAgKIAXAAIAAAKgAgjgVIAAgKIAWAAIAAAKg");
	this.shape_90.setTransform(238.9,28.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#9A7374").s().p("AAPAgIAAgKIAVAAIAAAKgAgLAgIAAgKIAYAAIAAAKgAgjAgIAAgKIAVAAIAAAKgAAPAVIAAgOIAVAAIAAAOgAgLAVIAAgOIAYAAIAAAOgAgjAVIAAgOIAVAAIAAAOgAAPAGIAAgLIAVAAIAAALgAgLAGIAAgLIAYAAIAAALgAgjAGIAAgLIAVAAIAAALgAAPgGIAAgOIAVAAIAAAOgAgLgGIAAgOIAYAAIAAAOgAgjgGIAAgOIAVAAIAAAOgAAPgVIAAgKIAVAAIAAAKgAgLgVIAAgKIAYAAIAAAKgAgjgVIAAgKIAVAAIAAAKg");
	this.shape_91.setTransform(230.2,28.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#9A7374").s().p("AAOAgIAAgKIAWAAIAAAKgAgLAgIAAgKIAXAAIAAAKgAgjAgIAAgKIAWAAIAAAKgAAOAVIAAgOIAWAAIAAAOgAgLAVIAAgOIAXAAIAAAOgAgjAVIAAgOIAWAAIAAAOgAAOAGIAAgLIAWAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAOgGIAAgOIAWAAIAAAOgAgLgGIAAgOIAXAAIAAAOgAgjgGIAAgOIAWAAIAAAOgAAOgVIAAgKIAWAAIAAAKgAgLgVIAAgKIAXAAIAAAKgAgjgVIAAgKIAWAAIAAAKg");
	this.shape_92.setTransform(211.6,28.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9A7374").s().p("AAOAgIAAgKIAWAAIAAAKgAgLAgIAAgKIAXAAIAAAKgAgjAgIAAgKIAWAAIAAAKgAAOAVIAAgOIAWAAIAAAOgAgLAVIAAgOIAXAAIAAAOgAgjAVIAAgOIAWAAIAAAOgAAOAGIAAgLIAWAAIAAALgAgLAGIAAgLIAXAAIAAALgAgjAGIAAgLIAWAAIAAALgAAOgGIAAgOIAWAAIAAAOgAgLgGIAAgOIAXAAIAAAOgAgjgGIAAgOIAWAAIAAAOgAAOgVIAAgKIAWAAIAAAKgAgLgVIAAgKIAXAAIAAAKgAgjgVIAAgKIAWAAIAAAKg");
	this.shape_93.setTransform(203,28.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#682E2F").s().p("Aj1EFIAAoJIHrAAIAAIJg");
	this.shape_94.setTransform(220.9,8.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#682E2F").s().p("Aj1FOIAAqaIHrAAIAAKag");
	this.shape_95.setTransform(220.9,1.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6D6E70").s().p("AhyAeIAngGQAsgHAZgJQAmgLA/gnQARAKADgBIgZAXQgiAbggAKQggALgvADIgoACg");
	this.shape_96.setTransform(199.6,-36.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6D6E70").s().p("AA4ApQgvgDgggLQgggKgigbIgZgXIAKgDIAKgGIAlAVQAqAVAWAIQAoANBEAJIgTANIgHAAIghgCg");
	this.shape_97.setTransform(242.7,-36.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6D6E70").s().p("AA4A/QgugEgggKQghgLgigcQgYgVgCgBIAMg0QACACAHgBQA5AzAtAYQA3AgA1AHIgUANIgHABIghgCg");
	this.shape_98.setTransform(231.2,-46.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6D6E70").s().p("AhzA0QA1gIA3ggQAtgYA5gyQAHAAACgBIALAzQgJAKgRAMQghAcghALQggAKguAEIgpABgABzgMIAAAAIAAAAIAAAAg");
	this.shape_99.setTransform(210.5,-46.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8B4835").s().p("AgOCSIAKknIAABNIAUggIgTAkIgBgBIAADbQgLAAABgEg");
	this.shape_100.setTransform(139.5,46.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgNIAbAKIgVgZIAQARIABgZIACAbIAXAYIACg+IgQgdIARAYIAEhbIAAErQgLAAABgEg");
	this.shape_101.setTransform(136.1,46.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A15641").s().p("AgFCTIADiBIgUgWIgegOIAbALIgVgaIAQARIABgZIACAcIAZAXIACg9IgQgeIAQAYIADhdIAFCMIAWgVIAAgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECVQAAAEgKAAQgIAAABgEg");
	this.shape_102.setTransform(138.6,46.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F2D0E0").s().p("AhhBTIgIAAQgeAAgWgTQgWgTgGgcQAFgWARgRQAQgSAXgFQASgjAhgVQAjgWAmAAQAoAAAiAWQAhAVASAjQAWAFARASQARARAFAWQgGAcgWATQgXATgdAAIgHAAQgqApg5AAQg4AAgpgpg");
	this.shape_103.setTransform(139.6,35.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E7C3D3").s().p("AhhBhIgIABQghAAgYgYQgYgXAAgiQAAgaASgXQASgVAagHQASgjAhgVQAjgWAmAAQAoAAAiAWQAhAVASAjQAbAHARAVQASAXAAAaQgBAhgXAYQgXAYgiAAIgHgBQgqAqg5AAQg4AAgpgqg");
	this.shape_104.setTransform(139.6,37.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#8B4835").s().p("AgOCSIAKknIAABNIAUggIgTAkIgBgBIAADbQgLAAABgEg");
	this.shape_105.setTransform(85,46.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgNIAbAKIgVgZIAQARIABgZIACAbIAXAYIACg+IgQgdIARAYIAEhbIAAErQgLAAABgEg");
	this.shape_106.setTransform(81.6,46.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A15641").s().p("AgFCTIADiBIgUgWIgegOIAbALIgVgaIAQARIABgZIACAcIAZAXIACg9IgQgeIAQAYIADhdIAFCMIAWgVIAAgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECVQAAAEgKAAQgIAAABgEg");
	this.shape_107.setTransform(84.1,46.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F2D0E0").s().p("AhiBTIgGAAQgfAAgWgTQgWgTgFgcQAEgWAQgRQASgSAWgFQASgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAXAFASASQAQARAEAWQgFAcgWATQgWATgeAAIgIAAQgpApg5AAQg4AAgqgpg");
	this.shape_108.setTransform(85.1,35.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E7C3D3").s().p("AhiBhIgGABQgiAAgYgYQgXgXAAgiQAAgaARgXQARgVAbgHQASgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAbAHASAVQARAXAAAaQABAhgYAYQgYAYghAAIgIgBQgpAqg5AAQg4AAgqgqg");
	this.shape_109.setTransform(85.1,37.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#8B4835").s().p("AgPCSIAKknIAABNIAVggIgTAkIgBgBIgBAAIAADbQgKAAAAgEg");
	this.shape_110.setTransform(-285.7,45.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgNIAbAKIgVgZIARARIAAgZIACAbIAYAYIACg+IgRgdIARAYIAEhbIAAErQgLAAABgEg");
	this.shape_111.setTransform(-289.2,45.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A15641").s().p("AgFCUIADiDIgUgVIgegOIAbAKIgWgZIASARIAAgZIACAcIAZAXIACg9IgRgeIARAYIADhdIAECMIAXgVIAAgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECWQAAADgKAAQgIAAABgDg");
	this.shape_112.setTransform(-286.6,45.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F2D0E0").s().p("AhhBTIgIAAQgdAAgXgTQgWgTgFgcQAEgWARgRQAQgSAYgFQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAYAFAQASQARARAEAWQgFAcgWATQgXATgdAAIgIAAQgoApg6AAQg5AAgogpg");
	this.shape_113.setTransform(-285.7,34.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E7C3D3").s().p("AhhBhIgIABQghAAgYgYQgYgYAAghQAAgbASgWQASgVAbgHQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAbAHASAVQASAWAAAbQAAAhgYAYQgYAYghAAIgIgBQgoAqg6AAQg5AAgogqg");
	this.shape_114.setTransform(-285.7,36.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8B4835").s().p("AgPCSIAKknIAABNIAVggIgTAkIgBgBIgBAAIAADbQgKAAAAgEg");
	this.shape_115.setTransform(-216.2,45.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgNIAbAKIgVgZIARARIAAgZIACAbIAYAYIACg+IgRgdIARAYIAEhbIAAErQgLAAABgEg");
	this.shape_116.setTransform(-219.7,45.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#A15641").s().p("AgFCUIADiDIgUgVIgegOIAbAKIgWgZIARARIABgZIACAcIAZAXIACg9IgQgeIAQAYIADhdIAECMIAXgVIAAgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECWQAAADgKAAQgIAAABgDg");
	this.shape_117.setTransform(-217.1,45.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F2D0E0").s().p("AhhBTIgIAAQgdAAgXgTQgWgTgFgcQAEgWARgRQAQgSAYgFQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAYAFAQASQARARAEAWQgFAcgWATQgXATgdAAIgIAAQgoApg6AAQg5AAgogpg");
	this.shape_118.setTransform(-216.2,34.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E7C3D3").s().p("AhhBhIgIABQghAAgYgYQgYgYAAghQAAgbASgWQASgVAbgHQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAbAHASAVQASAWAAAbQAAAhgYAYQgYAYghAAIgIgBQgoAqg6AAQg5AAgogqg");
	this.shape_119.setTransform(-216.2,36.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8B4835").s().p("AgPCSIAKknIAABNIAVggIgTAkIgCgBIAADbQgKAAAAgEg");
	this.shape_120.setTransform(-101.3,45.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgNIAbAKIgVgZIAQARIABgZIACAbIAXAYIADg+IgRgdIARAYIAEhbIAAErQgLAAABgEg");
	this.shape_121.setTransform(-104.8,45.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A15641").s().p("AgFCUIADiDIgUgVIgegOIAbAKIgVgZIAQARIABgZIACAcIAZAXIACg9IgQgeIAQAYIADhdIAFCMIAWgVIAAgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECWQAAADgKAAQgIAAABgDg");
	this.shape_122.setTransform(-102.3,45.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F2D0E0").s().p("AhiBTIgHAAQgeAAgWgTQgWgTgFgcQAEgWARgRQAQgSAYgFQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAXAFARASQARARAEAWQgFAcgWATQgXATgdAAIgIAAQgoApg6AAQg4AAgqgpg");
	this.shape_123.setTransform(-101.3,34.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E7C3D3").s().p("AhiBhIgHABQghAAgYgYQgYgXAAgiQAAgbASgWQASgVAbgHQARgjAhgVQAjgWAmAAQAoAAAiAWQAhAVARAjQAbAHASAVQARAXAAAaQABAhgYAYQgYAYghAAIgIgBQgoAqg6AAQg4AAgqgqg");
	this.shape_124.setTransform(-101.3,36.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8B4835").s().p("AgPCSIAKknIAABNIAVggIgTAkIgBgBIgBAAIAADbQgKAAAAgEg");
	this.shape_125.setTransform(-35.7,45.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgNIAbAKIgVgZIARARIAAgZIACAbIAYAYIACg+IgRgdIARAYIAEhbIAAErQgLAAABgEg");
	this.shape_126.setTransform(-39.2,45.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A15641").s().p("AgGCUIAEiDIgUgVIgegOIAbAKIgVgZIARARIAAgZIACAcIAaAXIABg9IgRgeIARAYIADhdIAFCMIAVgVIABgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECWQABADgLAAQgIAAAAgDg");
	this.shape_127.setTransform(-36.6,45.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F2D0E0").s().p("AhhBTIgIAAQgdAAgXgTQgWgTgFgcQAEgWARgRQAQgSAYgFQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAYAFAQASQARARAEAWQgFAcgWATQgXATgdAAIgIAAQgoApg6AAQg5AAgogpg");
	this.shape_128.setTransform(-35.7,34.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E7C3D3").s().p("AhhBhIgIABQghAAgYgYQgYgYAAghQAAgbASgWQASgVAbgHQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAbAHASAVQASAWAAAbQAAAhgYAYQgYAYghAAIgIgBQgoAqg6AAQg5AAgogqg");
	this.shape_129.setTransform(-35.7,36.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8B4835").s().p("AgPCSIAKknIAABNIAVggIgTAkIgBgBIgBAAIAADbQgKAAAAgEg");
	this.shape_130.setTransform(24.8,46.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgNIAbAKIgVgZIARARIAAgZIACAbIAYAYIACg+IgRgdIARAYIAEhbIAAErQgLAAABgEg");
	this.shape_131.setTransform(21.3,46.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A15641").s().p("AgFCTIADiBIgUgWIgegOIAbALIgVgaIARARIAAgZIACAcIAaAXIABg9IgRgeIARAYIADhdIAECMIAXgVIAAgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECVQAAAEgKAAQgIAAABgEg");
	this.shape_132.setTransform(23.9,46.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F2D0E0").s().p("AhhBTIgIAAQgdAAgXgTQgWgTgFgcQAEgWARgRQAQgSAYgFQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAYAFAQASQARARAEAWQgFAcgWATQgXATgdAAIgIAAQgoApg6AAQg5AAgogpg");
	this.shape_133.setTransform(24.8,35.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E7C3D3").s().p("AhhBhIgIABQghAAgYgYQgYgYAAghQAAgbASgWQASgVAbgHQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVARAjQAbAHASAVQASAWAAAbQAAAhgYAYQgYAYghAAIgIgBQgoAqg6AAQg5AAgogqg");
	this.shape_134.setTransform(24.8,37.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8B4835").s().p("AgOCSIAKknIAABNIAUghIgTAkIgBAAIAADaIgEABQgHAAABgEg");
	this.shape_135.setTransform(281.5,45.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#A15641").s().p("AASCSIADiCIgUgWIgcgOIAbALIgVgaIAQARIABgZIACAcIAXAXIACg9IgQgeIARAZIAEhbIAAEqIgEABQgHAAABgEg");
	this.shape_136.setTransform(278.1,45.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A15641").s().p("AgFCTIADiBIgUgWIgegOIAbALIgVgaIAQARIABgZIACAcIAZAXIACg9IgQgeIAQAZIADheIAFCMIAWgVIAAgcIACAZIAVgVIgfAkIAbgIIgdALIgMAOIAECVQAAAEgKAAQgIAAABgEg");
	this.shape_137.setTransform(280.6,45.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F2D0E0").s().p("AhhBTIgHAAQgfAAgWgTQgWgTgGgdQAFgVAQgRQASgSAXgGQARgiAhgVQAigWAnAAQAoAAAiAWQAhAVASAiQAWAFASATQAQARAEAVQgFAdgWATQgXATgdAAIgHAAQgqApg5AAQg4AAgpgpg");
	this.shape_138.setTransform(281.6,34.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E7C3D3").s().p("AhhBhIgHAAQgiAAgYgXQgYgXABgjQAAgaARgWQASgVAbgHQARgjAhgVQAigWAnAAQAoAAAiAWQAhAVASAjQAbAHARAVQARAWAAAaQAAAigXAYQgXAXgiAAIgHAAQgqApg5AAQg4AAgpgpg");
	this.shape_139.setTransform(281.6,36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-304.4,-62.1,608.9,124.4);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.b1();
	this.instance.setTransform(-103,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-128,206,256);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ha2();
	this.instance.setTransform(-22,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-33.5,44,67);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.le2();
	this.instance.setTransform(-37.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-40.5,75,81);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.le1();
	this.instance.setTransform(-44,-50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-50.5,88,101);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ti();
	this.instance.setTransform(-72.5,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-81.5,145,163);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h2();
	this.instance.setTransform(-41,-63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-63.5,82,127);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ha1();
	this.instance.setTransform(-15.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-29.5,31,59);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADxBuQgPgDgagKQgLgDgEgHQgCgDAAgJIABgRIACgKIABgPIgBgQIgCgJQgBgFABgDQACgBAEgDIAHgFIAHgIIAPgSQAMgLAGgBIABAAIAkAAQAWAAAOAEQARAEAIAHQAJAIAEANQAEALgFALIgFAOIgDAKQgBAGgDADQgCADgHAEQgFAEgCADIgGAIQgCADgIACQgHACgOANIgOAPQgFAFgEACQgEACgIAAIgGAAgAjrBTQgRgFgKgJIgNgPIgSgIQgSgGgOgOQgNgOgHgPQgIgYAMgOQADgEAJgFQAIgGADgEQAEgKAEgDQACgCANgDQAGgBAKgFIAZgKQANgGAIgCIAWgCIA1gCIAAgCQAHACAKAAIASgCQAXgCAKAKQAEAEAFAJIAFAMIAGANQAEAMgDATIgFAfIAAAfQgCATgMAIQgEAEgIACIgNAEIgdAKQgJACgSACIghAEIgFAAQgQAAgMgDg");
	this.shape.setTransform(-4.6,11.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(41));

	// Слой 1
	this.instance = new lib.he1();
	this.instance.setTransform(-82.5,-77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.5,-77,165,154);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.h1();
	this.instance.setTransform(-31,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-89,62,178);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A0mLAIAA1/QUUFlU5llIAAV/g");
	this.shape.setTransform(0,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,-50.9,263.9,141);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("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");
	this.shape.setTransform(1.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-478.9,-33.9,960,67);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fr4();
	this.instance.setTransform(-99.5,-99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-99.5,199,199);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.jp_fon();
	this.instance.setTransform(-355.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.5,-200,711,400);


(lib.shape6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().p("AgyATQgUgIgBgLQABgKAUgIQAWgIAcAAQAdAAAWAIQAUAIAAAKQAAALgUAIQgWAIgdAAQgcAAgWgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-2.7,14.4,5.5);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.109},6,cjs.Ease.get(-1)).to({alpha:0},8,cjs.Ease.get(1)).to({alpha:0.09},7,cjs.Ease.get(-1)).to({alpha:0.359},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-25,190,50);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ29();
	this.instance.setTransform(-70.5,-29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:2.8,x:-68.6,y:-28.2},15,cjs.Ease.get(-1)).to({scaleX:1.01,skewY:6.3,x:-66.5,y:-26.4},15,cjs.Ease.get(0.99)).to({scaleX:1,skewY:3,x:-68.5,y:-28.1},15,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:-70.5,y:-29.9},19,cjs.Ease.get(0.99)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ31();
	this.instance_1.setTransform(69.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,skewY:-2.5,y:5.7},15,cjs.Ease.get(-1)).to({scaleX:1,skewY:-5.6,y:12},15,cjs.Ease.get(0.99)).to({scaleX:1,skewY:-2.8,y:6},15,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,y:0},19,cjs.Ease.get(0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.6,-149.3,384.8,299);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ33();
	this.instance.setTransform(-33.8,71.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(103));

	// Слой 2
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(173.2,100.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.01,skewX:-5.8,x:164},23,cjs.Ease.get(-1)).to({scaleY:1.02,skewX:-12.2,x:154.2},27,cjs.Ease.get(1)).to({scaleY:1.01,skewX:-6,x:163.7},27,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:173.2},25,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(28,163);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.01,skewY:4.8,y:155.5},23,cjs.Ease.get(-1)).to({scaleX:1.01,skewY:9.9,y:147.5},27,cjs.Ease.get(1)).to({scaleX:1.01,skewY:4.8,y:155.2},27,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,y:163},25,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ32();
	this.instance_3.setTransform(30.2,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-3,x:24.9,y:-4.8},23,cjs.Ease.get(-1)).to({rotation:-6.2,x:19.2,y:5.6},27,cjs.Ease.get(1)).to({regX:-0.1,regY:-0.1,rotation:-3,x:24.6,y:-4.5},27,cjs.Ease.get(-1)).to({regX:0,regY:0,rotation:0,x:30.2,y:-14.4},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-240,453.3,479.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnSCOQgKgOgSgRQAZgHArgXIAdgSQAOgLAMgMQAMgLAKgNQAKgNAIgMQAIgOAGgQQAGgPAEgQIibAAQguAAgQACIAAhDQAZADAmAAIC+AAQAAgJAEgHQADgHAFgGQAGgFAHgDQAIgDAIAAQAJAAAIADQAHADAGAGQAGAGADAHQAEAIAAAIQAAAKgEAHQgDAHgGAHQgFAFgIAEQgIACgIABIgBABIAAABIgBAFIgCAJQgGAWgHAVQgIAVgJAQQgJATgLAQQgLARgNAPQgNAPgPANQgPAOgSAMQgRANgUALIgqAUQgJgSgKgNgAj1iRQgGAGAAAIQAAAJAGAHQAHAFAIABQAJgBAGgFQAHgHAAgJQAAgIgHgGQgGgGgJAAQgIAAgHAGgAh9CDQAEgJABgWIABjTQAAgXgCgRIBKAAQgCAQgBAeIgCDDQAcgGAYgLQAXgLAVgQQAVgQARgUQALgMASggQANASAKALQALAKAQANQgcAngPAPQghAegTANQgoAVgWAIQguAOgbAFQgRADgGAEgAFiCpQADgYAAgkIAAhnQgdARgbAMQgaAMgoAOQgIgSgHgNQgHgMgOgRQAfgHAagJQAagKAYgLQAYgMAWgOQAWgOAXgSQAYgRASgTQARgRAJgOIA8AnIgPAPQgWAWgUASQgVASgXAQIAACNQAAAkADAZg");
	this.shape.setTransform(-0.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D12727").s().p("AnSCOQgKgOgSgRQAZgHArgWIAdgTQAOgLAMgMQAMgLAKgNQAKgNAIgMQAIgOAGgQQAGgPAEgQIibAAQguAAgQACIAAhDQAZADAmAAIC+AAQAAgJAEgHQADgHAGgGQAFgFAHgDQAIgDAIAAQAJAAAIADQAHADAGAGQAGAGADAHQAEAIAAAIQAAAKgEAHQgDAHgGAHQgFAFgIAEQgIACgIABIgBABIAAABIgBAFIgCAJQgGAWgHAVQgIAVgJAQQgJATgLAQQgLARgNAPQgNAPgPANQgPAOgSAMQgRANgUALIgqAUQgJgSgKgNgAj0iRQgHAGAAAIQAAAJAHAHQAGAFAIABQAJgBAGgFQAHgHAAgJQAAgIgHgGQgGgHgJABQgIgBgGAHgAh9CDQAEgJABgWIABjTQAAgXgCgRIBKAAQgCAQgBAeIgCDDQAcgGAYgLQAXgLAVgQQAVgQARgVQALgLASggQANASAKALQALAKAQANQgcAngPAPQghAegTANQgoAVgWAIQguAOgbAFQgRADgGAEgAFiCpQADgYAAgkIAAhnQgdARgbAMQgaAMgoAOQgIgSgHgNQgHgMgOgRQAfgHAagJQAagKAYgLQAYgMAWgOQAWgOAXgSQAYgRASgTQARgRAJgOIA8AnIgPAPQgWAWgUASQgVASgXAQIAACNQAAAkADAZg");
	this.shape_1.setTransform(1.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 5
	this.instance = new lib.Символ38();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF5C60").s().rr(-95,-25,190,50,19.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D12727").s().rr(-95,-25,190,50,19.1);
	this.shape_3.setTransform(0,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-27.4,190,52.4);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(150,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-170,453.3,479.9);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ35();
	this.instance.setTransform(-0.8,-3.9,0.59,0.59,0,0,0,204.4,43);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,413,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-29.3,241.5,50.8);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ10();
	this.instance.setTransform(-76.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.8,x:-65.8,y:43.1},9,cjs.Ease.get(-1)).to({rotation:-3.9,x:-53.9,y:47.2},10,cjs.Ease.get(1)).to({rotation:-1.8,x:-65.2,y:43.4},10,cjs.Ease.get(-1)).to({rotation:0,x:-76.5,y:39.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(18,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2.3,x:17.1,y:-51.6},9,cjs.Ease.get(-1)).to({rotation:-5,x:16.1,y:-50.6},10,cjs.Ease.get(1)).to({rotation:-2.3,x:17,y:-51.6},10,cjs.Ease.get(-1)).to({rotation:0,x:18,y:-52.5},10,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(50,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:0.8,y:-6.1},9,cjs.Ease.get(-1)).to({scaleY:1,skewX:2,y:-5.1},10,cjs.Ease.get(1)).to({scaleY:1,skewX:0.8,y:-6},10,cjs.Ease.get(-1)).to({skewX:0,y:-7},10,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_3 = new lib.Символ13();
	this.instance_3.setTransform(-55.5,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-7,x:-50.1,y:66.9},9,cjs.Ease.get(-1)).to({rotation:-15,x:-44.1,y:67.9},10,cjs.Ease.get(1)).to({rotation:-7.3,x:-49.8,y:67},10,cjs.Ease.get(-1)).to({rotation:0,x:-55.5,y:66},10,cjs.Ease.get(1)).wait(1));

	// Символ 14
	this.instance_4 = new lib.Символ14();
	this.instance_4.setTransform(35,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-129.5,215,259);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 10
	this.instance = new lib.Символ21();
	this.instance.setTransform(-22,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-20.8,y:-51.8},6,cjs.Ease.get(-1)).to({x:-19.1,y:-49.7},8,cjs.Ease.get(1)).to({x:-20.5,y:-51.4},7,cjs.Ease.get(-1)).to({x:-22,y:-53.5},8,cjs.Ease.get(1)).wait(1));

	// Символ 18
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(26.5,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// Символ 17
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(60.5,66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.3,x:56},6,cjs.Ease.get(-1)).to({rotation:15,x:50.1},8,cjs.Ease.get(1)).to({rotation:7.8,x:55},7,cjs.Ease.get(-1)).to({rotation:0,x:60.5},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.5,-183,259,366);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 11
	this.instance = new lib.Символ15();
	this.instance.setTransform(66,349.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.5,x:71.8,y:343.3},9,cjs.Ease.get(-1)).to({rotation:-15,x:79,y:335.5},11,cjs.Ease.get(1)).to({rotation:-7.3,x:72.5,y:342.5},9,cjs.Ease.get(-1)).to({rotation:0,x:66,y:349.5},10,cjs.Ease.get(1)).wait(1));

	// Векторный смарт-объект
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(129.5,186);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:182},9,cjs.Ease.get(-1)).to({y:177},11,cjs.Ease.get(1)).to({y:181.5},9,cjs.Ease.get(-1)).to({y:186},10,cjs.Ease.get(1)).wait(1));

	// Слой 12
	this.instance_2 = new lib.Символ16();
	this.instance_2.setTransform(145.5,359.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:6.5,x:140.2,y:355.5},9,cjs.Ease.get(-1)).to({rotation:15,x:133.5,y:350.5},11,cjs.Ease.get(1)).to({rotation:7.3,x:139.6,y:355},9,cjs.Ease.get(-1)).to({rotation:0,x:145.5,y:359.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,259,397);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},257).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-99.5,199,199);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-99.5,199,199);


(lib.sprite7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shape6("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-2.7,14.4,5.5);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ39();
	this.instance.setTransform(0,1);
	this.instance.alpha = 0.199;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ25();
	this.instance_1.setTransform(0,1.1,0.842,0.842);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.9,-22,159.9,44.1);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(-95.9,-149.2,0.741,0.741);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-86.5},19,cjs.Ease.get(-1)).to({x:-75.9},21,cjs.Ease.get(1)).to({x:-85.9},19,cjs.Ease.get(-1)).to({x:-95.9},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-147,191.9,294.2);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAzcAcFIiPhhIjIgzIogjwIuJnyIvnqrIghAWIhkgSIgygRIgRARIlJgfIi4BDIhCAzIm8DKI3mMHIjvAAIh9A1Ij8BJQhjBhg0AeQkLBCi3AGQgnAagtACIk7BlMAAAg5zMB4RAAAMgAjA87g");
	mask.setTransform(-5,-35);

	// Слой 2
	this.instance = new lib.Символ3();
	this.instance.setTransform(10.9,50.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-38.2},129).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355.5,-200,711,400);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.setTransform(-73.8,142.4);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(22.8,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-378.2,-234.5,781.1,439.1);


(lib.sprite8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite7();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:40.1},4).to({scaleX:1,scaleY:1,rotation:80.2},4).to({scaleX:1,scaleY:1,rotation:180},10).to({scaleX:1,scaleY:1,rotation:189.8},1).to({scaleX:1,scaleY:1,rotation:229.9},4).to({scaleX:1,scaleY:1,rotation:360},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-2.7,14.4,5.5);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(107.2,119,1,1,0,0,0,12.2,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283.2,-100.5,781.1,439.1);


(lib.sprite9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance = new lib.sprite8();
	this.instance.setTransform(-98,82.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1386.2,y:-361.6},153).to({x:0,y:116.4},1).to({x:-84,y:87.5},12).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_1 = new lib.sprite8();
	this.instance_1.setTransform(-168,-135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1386.2,y:-555.6},140).to({x:0,y:-77.6},1).to({x:-154,y:-130.7},25).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_2 = new lib.sprite8();
	this.instance_2.setTransform(-266,-246.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-1386.2,y:-633.2},129).to({x:0,y:-155.2},1).to({x:-252,y:-242.1},36).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_3 = new lib.sprite8();
	this.instance_3.setTransform(-378,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-1386.2,y:-381},117).to({x:0,y:97},1).to({x:-364,y:-28.5},48).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_4 = new lib.sprite8();
	this.instance_4.setTransform(-532,-319.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-1386.2,y:-613.8},98).to({x:0,y:-135.8},1).to({x:-518,y:-314.4},67).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_5 = new lib.sprite8();
	this.instance_5.setTransform(-686.1,-178.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-1386.2,y:-419.8},83).to({x:0,y:58.2},1).to({x:-672.1,y:-173.5},82).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_6 = new lib.sprite8();
	this.instance_6.setTransform(-878.9,-386.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-1425,y:-575},64).to({x:-38.8,y:-97},1).to({x:-864.9,y:-381.8},101).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_7 = new lib.sprite8();
	this.instance_7.setTransform(-1041.5,-546.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-1405.6,y:-672},42).to({x:-19.4,y:-194},1).to({x:-1027.5,y:-541.6},123).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2
	this.instance_8 = new lib.sprite8();
	this.instance_8.setTransform(-1262.3,-376.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-1444.4,y:-439.2},21).to({x:-58.2,y:38.8},1).to({x:-1248.3,y:-371.6},144).wait(1));

	// Layer 1 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия: 2 - копия
	this.instance_9 = new lib.sprite8();
	this.instance_9.setTransform(19.4,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-1366.8,y:-439.2},166).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1269.5,-549.2,1296.1,634.6);


// stage content:



(lib.casino_x_jp_240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		 this.fon.x = - stage.mouseX / 10;
		
		}
		
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		 this.sakura.x = - stage.mouseX / -3;
		
		}
		
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 6
	this.instance = new lib.Символ7();
	this.instance.setTransform(119.4,338.1,0.227,0.227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 7
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(115,372.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ34(), 3);

	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(118.1,359);
	this.instance_2.alpha = 0.531;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// FlashAICB
	this.sakura = new lib.Символ23();
	this.sakura.setTransform(260.6,151.5);

	this.timeline.addTween(cjs.Tween.get(this.sakura).wait(1));

	// лого
	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(120,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ20();
	this.instance_4.setTransform(82.1,273.8,1,1,0,0,0,0,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 9
	this.instance_5 = new lib.sprite9();
	this.instance_5.setTransform(585.6,67,0.785,0.785,0,180,0);

	this.instance_6 = new lib.sprite9();
	this.instance_6.setTransform(558.7,27.1,0.785,0.785,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// FlashAICB
	this.fon = new lib.Символ26();
	this.fon.setTransform(100.8,55.5,1,1,0,0,0,12.2,-15);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.1,160.1,1075.5,538.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
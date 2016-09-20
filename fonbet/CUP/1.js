(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#0044B3",
	opacity: 1.00,
	manifest: [
		{src:"images/ball.png?1474037858327", id:"ball"},
		{src:"images/cup1_03.png?1474037858327", id:"cup1_03"},
		{src:"images/cup1_05.png?1474037858327", id:"cup1_05"},
		{src:"images/cup1_08.png?1474037858327", id:"cup1_08"},
		{src:"images/cup1_14.png?1474037858327", id:"cup1_14"},
		{src:"images/cup1_17.png?1474037858327", id:"cup1_17"},
		{src:"images/cup1_22.png?1474037858327", id:"cup1_22"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,280);


(lib.cup1_03 = function() {
	this.initialize(img.cup1_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,61);


(lib.cup1_05 = function() {
	this.initialize(img.cup1_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,70);


(lib.cup1_08 = function() {
	this.initialize(img.cup1_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,86);


(lib.cup1_14 = function() {
	this.initialize(img.cup1_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,67);


(lib.cup1_17 = function() {
	this.initialize(img.cup1_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,207);


(lib.cup1_22 = function() {
	this.initialize(img.cup1_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,715,98);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,154);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup1_08();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.767,0.767);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup1_05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,70);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup1_22();
	this.instance.parent = this;
	this.instance.setTransform(715,0);

	this.instance_1 = new lib.cup1_22();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1430,98);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup1_17();
	this.instance.parent = this;
	this.instance.setTransform(-200,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-103.5,400,207);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup1_14();
	this.instance.parent = this;
	this.instance.setTransform(-124.2,-34.8,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.2,-34.8,248.5,69.7);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cup1_14();
	this.instance.parent = this;
	this.instance.setTransform(-124.2,-34.8,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.2,-34.8,248.5,69.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(200,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,207);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(77,77,1,1,0,0,0,77,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},78).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154,154);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.parent = this;
	this.instance.setTransform(200,103.5,1,1,0,0,0,200,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:91.5},49).to({y:103.5},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,207);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(33,33,1,1,0,0,0,33,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.parent = this;
	this.instance.setTransform(33,33,1,1,0,0,0,33,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AInFuQglAAgZgJQgZgJgOgPQgIgIgFgJQgFgJgDgKQgGgVAAgXIAAgSQAAgXAGgVQAFgUAQgQQAOgQAZgIQAZgJAlAAIAMAAQATAAAPACQAQACAMAFQANAEAKAGQAJAHAIAHQAOAQAHAUQAFAVAAAXIAAASQAAAXgFAVQgDAKgFAJQgGAJgHAIQgIAHgJAGQgKAHgNAEQgMAEgQACQgPADgTAAgAIEC3QgPAFgHAKQgGAJgCALIAAAzQACAMAGAJQAHAKAPAGQAOAFAbAAQAbAAAPgFQAPgGAGgKQAHgJABgMIAAgzQgBgLgHgJQgGgKgPgFQgYgFgSgBQggACgJAEgAgfFuQgmAAgYgJQgZgJgOgPQgIgIgFgJQgFgJgDgKQgGgVAAgXIAAgSQAAgXAGgVQAFgUAQgQQAOgQAZgIQAYgJAmAAIAMAAQATAAANACQAQACAMAFQANAEAKAGQAJAHAIAHQAOAQAHAUQAFAVAAAXIAAASQAAAXgFAVQgEAKgFAJQgFAJgHAIQgIAHgJAGQgKAHgNAEQgMAEgQACQgNADgTAAgAhCC3QgPAFgHAKQgGAJgCALIAAAzQACAMAGAJQAHAKAPAGQAOAFAbAAQAZAAAPgFQAPgGAGgKQAHgJABgMIAAgzQgBgLgHgJQgGgKgPgFQgWgFgSgBQggACgJAEgAo1FuQglAAgYgJQgYgJgOgPQgHgIgFgJQgFgJgDgKQgGgVAAgXIAAgSQAAgXAGgVQAFgUAPgQQAOgQAYgIQAYgJAlAAIAMAAQAXAAAWADQAWADAWAFIAAA4IgxgJIgqgEQgbABgOAFQgPAFgGAIQgHAKgBAMIAAA2QABANAHAIQAGAJAPAGQAOAEAbAAIAqgDIAxgJIAAA4QgWAFgWADQgWADgXAAgACXFnIAAjmICIgHIAaABQAMACAKADQASAHAMALQAMAMAEAPQAEAOAAARIAAAOQABARgFAQQgEAOgLALQgKALgSAHIgUAFIhGABQgSAAgRgDIAAA+gADVC0IAAA/IA9ACQATAAAJgCQALgCAFgFQAEgFAAgGIACgOIgCgOQAAgGgEgFQgFgEgJgCQgKgDgRAAgAj6FnIhIhWIgqAAIAABWIg/AAIAAjmIA/AAIAABZIAnAAIBLhZIA8AAIAAAOIhUBlIBUBlIAAAOgApNgUIgXgEIAAhRIAsAEQAVAAAKgFQAIgHAGgMIiXjcIAAgUIBbAAIBnCiIBbiiIBWAAIAAAUIidEMQgKASgPAMQgOANgTAIQgTAHgbAAgAFWgdIAAlQIFBAAIAABRIjmAAIAAAxIC0AAIAABQIi0AAIAAAtIDmAAIAABRgADMgdIhph+IgvAAIAAB+IhYAAIAAh+IgvAAIhoB+IhZAAIAAgUIB8iUIh8iUIAAgUIBZAAIBtCCIAqAAIAAiCIBYAAIAACCIArAAIBtiCIBYAAIAAAUIh8CUIB8CUIAAAUg");
	mask.setTransform(63.1,26.7);

	// Растровое изображение 7
	this.instance = new lib.Символ14();
	this.instance.parent = this;
	this.instance.setTransform(62,31.9,1.096,1.096,0,0,0,76.9,76.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-9.9,138.3,73.3);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cup1_08.png
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(33,33,1,1,0,0,0,33,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:310},15).to({x:33},15).wait(21).to({x:310},15).to({x:33},15).wait(1));

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1sI7IAAx1MAraAAAIAAR1g");
	var mask_graphics_19 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_20 = new cjs.Graphics().p("A1tJGIAAyLMArbAAAIAASLg");
	var mask_graphics_21 = new cjs.Graphics().p("A1sJlIAAzJMArZAAAIAATJg");
	var mask_graphics_22 = new cjs.Graphics().p("A1tKDIAA0FMArbAAAIAAUFg");
	var mask_graphics_23 = new cjs.Graphics().p("A1tKiIAA1DMArbAAAIAAVDg");
	var mask_graphics_24 = new cjs.Graphics().p("A1tLBIAA2BMArbAAAIAAWBg");
	var mask_graphics_25 = new cjs.Graphics().p("A1tLgIAA2/MArbAAAIAAW/g");
	var mask_graphics_26 = new cjs.Graphics().p("A1tL+IAA37MArbAAAIAAX7g");
	var mask_graphics_27 = new cjs.Graphics().p("A1tMdIAA45MArbAAAIAAY5g");
	var mask_graphics_28 = new cjs.Graphics().p("A1tM8IAA53MArbAAAIAAZ3g");
	var mask_graphics_29 = new cjs.Graphics().p("A1sNbIAA61MArZAAAIAAa1g");
	var mask_graphics_30 = new cjs.Graphics().p("A1tN5IAA7xMArbAAAIAAbxg");
	var mask_graphics_31 = new cjs.Graphics().p("A1tOYIAA8vMArbAAAIAAcvg");
	var mask_graphics_32 = new cjs.Graphics().p("A1tO3IAA9tMArbAAAIAAdtg");
	var mask_graphics_33 = new cjs.Graphics().p("A1tPWIAA+rMArbAAAIAAerg");
	var mask_graphics_34 = new cjs.Graphics().p("A1tJnIAAzNMArbAAAIAATNg");
	var mask_graphics_35 = new cjs.Graphics().p("A1tJUIAAynMArbAAAIAASng");
	var mask_graphics_36 = new cjs.Graphics().p("A1tJBIAAyBMArbAAAIAASBg");
	var mask_graphics_37 = new cjs.Graphics().p("A1tIuIAAxbMArbAAAIAARbg");
	var mask_graphics_38 = new cjs.Graphics().p("A1tIcIAAw3MArbAAAIAAQ3g");
	var mask_graphics_39 = new cjs.Graphics().p("A1sIJIAAwRMArZAAAIAAQRg");
	var mask_graphics_40 = new cjs.Graphics().p("A1tH3IAAvtMArbAAAIAAPtg");
	var mask_graphics_41 = new cjs.Graphics().p("A1tHkIAAvHMArbAAAIAAPHg");
	var mask_graphics_42 = new cjs.Graphics().p("A1tHRIAAuhMArbAAAIAAOhg");
	var mask_graphics_43 = new cjs.Graphics().p("A1tG+IAAt7MArbAAAIAAN7g");
	var mask_graphics_44 = new cjs.Graphics().p("A1tGsIAAtXMArbAAAIAANXg");
	var mask_graphics_45 = new cjs.Graphics().p("A1tGZIAAsxMArbAAAIAAMxg");
	var mask_graphics_46 = new cjs.Graphics().p("A1tGHIAAsNMArbAAAIAAMNg");
	var mask_graphics_47 = new cjs.Graphics().p("A1sF0IAArnMArZAAAIAALng");
	var mask_graphics_48 = new cjs.Graphics().p("A1tFhIAArBMArbAAAIAALBg");
	var mask_graphics_49 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_50 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_51 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_52 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_53 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_54 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_55 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_56 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_57 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_58 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_59 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_60 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_61 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_62 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_63 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_64 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_65 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_66 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_67 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_68 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_69 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_70 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_71 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_72 = new cjs.Graphics().p("A1sInIAAxNMArZAAAIAARNg");
	var mask_graphics_73 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_74 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_75 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_76 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_77 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_78 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_79 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_80 = new cjs.Graphics().p("A1sInIAAxNMArZAAAIAARNg");
	var mask_graphics_81 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_82 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_83 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_84 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");
	var mask_graphics_85 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_86 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_87 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_88 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_89 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_90 = new cjs.Graphics().p("A1sFPIAAqdMArZAAAIAAKdg");
	var mask_graphics_91 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_92 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_93 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_94 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_95 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_96 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_97 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_98 = new cjs.Graphics().p("A1sFPIAAqdMArZAAAIAAKdg");
	var mask_graphics_99 = new cjs.Graphics().p("A1tFPIAAqdMArbAAAIAAKdg");
	var mask_graphics_100 = new cjs.Graphics().p("A1tInIAAxNMArbAAAIAARNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:174,y:31.6}).wait(19).to({graphics:mask_graphics_19,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_20,x:192.3,y:31.6}).wait(1).to({graphics:mask_graphics_21,x:210.7,y:31.6}).wait(1).to({graphics:mask_graphics_22,x:229,y:31.6}).wait(1).to({graphics:mask_graphics_23,x:247.3,y:31.6}).wait(1).to({graphics:mask_graphics_24,x:265.7,y:31.6}).wait(1).to({graphics:mask_graphics_25,x:284,y:31.7}).wait(1).to({graphics:mask_graphics_26,x:302.3,y:31.7}).wait(1).to({graphics:mask_graphics_27,x:320.7,y:31.7}).wait(1).to({graphics:mask_graphics_28,x:339,y:31.7}).wait(1).to({graphics:mask_graphics_29,x:357.3,y:31.7}).wait(1).to({graphics:mask_graphics_30,x:375.7,y:31.7}).wait(1).to({graphics:mask_graphics_31,x:394,y:31.7}).wait(1).to({graphics:mask_graphics_32,x:412.3,y:31.8}).wait(1).to({graphics:mask_graphics_33,x:430.7,y:31.8}).wait(1).to({graphics:mask_graphics_34,x:449,y:31.5}).wait(1).to({graphics:mask_graphics_35,x:430.7,y:31.5}).wait(1).to({graphics:mask_graphics_36,x:412.3,y:31.5}).wait(1).to({graphics:mask_graphics_37,x:394,y:31.5}).wait(1).to({graphics:mask_graphics_38,x:375.7,y:31.5}).wait(1).to({graphics:mask_graphics_39,x:357.3,y:31.5}).wait(1).to({graphics:mask_graphics_40,x:339,y:31.5}).wait(1).to({graphics:mask_graphics_41,x:320.7,y:31.5}).wait(1).to({graphics:mask_graphics_42,x:302.3,y:31.5}).wait(1).to({graphics:mask_graphics_43,x:284,y:31.5}).wait(1).to({graphics:mask_graphics_44,x:265.7,y:31.5}).wait(1).to({graphics:mask_graphics_45,x:247.3,y:31.5}).wait(1).to({graphics:mask_graphics_46,x:229,y:31.5}).wait(1).to({graphics:mask_graphics_47,x:210.7,y:31.5}).wait(1).to({graphics:mask_graphics_48,x:192.3,y:31.5}).wait(1).to({graphics:mask_graphics_49,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_50,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_51,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_52,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_53,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_54,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_55,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_56,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_57,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_58,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_59,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_60,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_61,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_62,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_63,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_64,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_65,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_66,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_67,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_68,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_69,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_70,x:174,y:31.6}).wait(1).to({graphics:mask_graphics_71,x:192.3,y:31.6}).wait(1).to({graphics:mask_graphics_72,x:210.7,y:31.6}).wait(1).to({graphics:mask_graphics_73,x:229,y:31.6}).wait(1).to({graphics:mask_graphics_74,x:247.3,y:31.6}).wait(1).to({graphics:mask_graphics_75,x:265.7,y:31.6}).wait(1).to({graphics:mask_graphics_76,x:284,y:31.6}).wait(1).to({graphics:mask_graphics_77,x:302.3,y:31.6}).wait(1).to({graphics:mask_graphics_78,x:320.7,y:31.6}).wait(1).to({graphics:mask_graphics_79,x:339,y:31.6}).wait(1).to({graphics:mask_graphics_80,x:357.3,y:31.6}).wait(1).to({graphics:mask_graphics_81,x:375.7,y:31.6}).wait(1).to({graphics:mask_graphics_82,x:394,y:31.6}).wait(1).to({graphics:mask_graphics_83,x:412.3,y:31.6}).wait(1).to({graphics:mask_graphics_84,x:430.7,y:31.6}).wait(1).to({graphics:mask_graphics_85,x:449,y:31.5}).wait(1).to({graphics:mask_graphics_86,x:430.7,y:31.5}).wait(1).to({graphics:mask_graphics_87,x:412.3,y:31.5}).wait(1).to({graphics:mask_graphics_88,x:394,y:31.5}).wait(1).to({graphics:mask_graphics_89,x:375.7,y:31.5}).wait(1).to({graphics:mask_graphics_90,x:357.3,y:31.5}).wait(1).to({graphics:mask_graphics_91,x:339,y:31.5}).wait(1).to({graphics:mask_graphics_92,x:320.7,y:31.5}).wait(1).to({graphics:mask_graphics_93,x:302.3,y:31.5}).wait(1).to({graphics:mask_graphics_94,x:284,y:31.5}).wait(1).to({graphics:mask_graphics_95,x:265.7,y:31.5}).wait(1).to({graphics:mask_graphics_96,x:247.3,y:31.5}).wait(1).to({graphics:mask_graphics_97,x:229,y:31.5}).wait(1).to({graphics:mask_graphics_98,x:210.7,y:31.5}).wait(1).to({graphics:mask_graphics_99,x:192.3,y:31.5}).wait(1).to({graphics:mask_graphics_100,x:174,y:31.6}).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(181.9,33.3,1,1,0,0,0,63.6,28.3);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(50).to({_off:true},1).wait(16));

	// cup1_14.png
	this.instance_2 = new lib.cup1_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(68,0,1.04,1.04);

	this.instance_3 = new lib.Анимация3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(192.2,34.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.Анимация4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(192.2,34.8);

	this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_4}]},15).to({state:[]},1).to({state:[{t:this.instance_2}]},50).to({state:[{t:this.instance_2}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({_off:true},15).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,313,69.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(120,35,1,1,0,0,0,120,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,70);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.parent = this;
	this.instance.setTransform(120,35,1,1,0,0,0,120,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.08,scaleY:1.08,x:120.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,70);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(-380.5,51,1,1,0,0,0,357.5,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1095.5},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-738,2,1430,98);


// stage content:



(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cup1_14.png
	this.instance = new lib.Символ6();
	this.instance.parent = this;
	this.instance.setTransform(322.2,48.8,1,1,0,0,0,158.2,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cup1_05.png
	this.instance_1 = new lib.Символ4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(611.1,48.2,0.9,0.9,0,0,0,120,35.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// cup1_03.png
	this.instance_2 = new lib.cup1_03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13,23,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cup1_17.png
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19,60.5,1,1,0,0,0,200,103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// cup1_22.png
	this.instance_4 = new lib.Символ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1104.5,49,1,1,0,0,0,357.5,49);
	this.instance_4.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183,2,1620,207);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
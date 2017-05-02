(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/gnome.png", id:"gnome"},
		{src:"images/gnome_bonussuperbonus_0008.jpg", id:"gnome_bonussuperbonus_0008"},
		{src:"images/mouse.png", id:"mouse"},
		{src:"images/копияgnome_bonussuperbonus_0012.png", id:"копияgnome_bonussuperbonus_0012"},
		{src:"images/Растровоеизображение1.png", id:"Растровоеизображение1"}
	]
};



// symbols:



(lib.gnome = function() {
	this.initialize(img.gnome);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,144);


(lib.gnome_bonussuperbonus_0008 = function() {
	this.initialize(img.gnome_bonussuperbonus_0008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,448);


(lib.mouse = function() {
	this.initialize(img.mouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.копияgnome_bonussuperbonus_0012 = function() {
	this.initialize(img.копияgnome_bonussuperbonus_0012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.Растровоеизображение1 = function() {
	this.initialize(img.Растровоеизображение1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,62);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","#FFFF99","#FFFFCC"],[0.012,0.533,1],-119.6,0,119.7,0).s().p("AyrS5MANeglxIImAAMAPTAlxg");
	this.shape.setTransform(119.7,120.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239.4,241.8);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.mouse();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,58);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACtBXIAAitIAcAAIAABCIANAAQALAAAHACQAHADAGAGQAFAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgFAFQgGAGgHACQgHADgLAAgADJA+IANAAQAHAAADgDQAEgFgBgJIAAgaQABgJgEgEQgDgDgHAAIgNAAgAAYBXIAAitIAbAAIAACUIAYAAIAAiUIAbAAIAACUIAYAAIAAiUIAcAAIAACtgAgWBXIAAitIAaAAIAACtgAh3BXIAAitIAcAAIAABCIAMAAQALAAAIACQAHADAFAGQAGAFACAHQADAHAAALIAAAXQAAAKgDAIQgCAJgGAFQgFAGgHACQgIADgLAAgAhbA+IAMAAQAIAAACgDQAEgFAAgJIAAgaQAAgJgEgEQgCgDgIAAIgMAAgAilBXIAAh8IgTB8IgaAAIgVh6IAAB6IgXAAIAAitIAmAAIAUB6IATh6IAmAAIAACtg");
	this.shape.setTransform(25.6,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,17.5);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACvBjIAAgYIg7AAIAAAYIgbAAIAAgwIAMAAIAEgKIACgNIAGh+IBNAAIAACVIAMAAIAAAwgACGAcQgBAJgCAGQgBAEgDAEIAkAAIAAh8IgYAAgAEYBLIAAh5IgiB5IgcAAIAAitIAYAAIAABtIAghtIAfAAIAACtgAAEBLIAAitIBKAAIAAAZIgvAAIAAAxIAlAAIAAAYIglAAIAAAyIAvAAIAAAZgAhgBLIAAitIApAAQALAAAIADQAHACAGAFQAFAFACAIQACAHABAKIAAAHQgBANgEAJQgFAJgIAEQAFACAEAEQAEADADAFQAEAHAAAOIAAAPQAAAKgCAIQgDAHgFAGQgGAFgIADQgHACgLAAgAhEAyIAPAAQAHAAAEgEQADgEAAgJIAAgPQAAgMgDgFQgFgCgJAAIgMAAgAhEgbIAKAAQAJAAADgEQAFgEAAgKIAAgKQAAgJgEgEQgDgFgHAAIgNAAgAiIBLIgFgfIgiAAIgFAfIgYAAIAcitIAnAAIAcCtgAiRAUIgNhXIgNBXIAaAAgAj2BLIAAhLIgeAAIAABLIgcAAIAAitIAcAAIAABLIAeAAIAAhLIAdAAIAACtg");
	this.shape.setTransform(30.6,9.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.1,19.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AoSFOIAAgiIhlAAIAAAiIgnAAIAAhHIAQAAQAOgmAAgwIAAgkICFAAIAAB6IARAAIAABHgApTC2QAAAhgMAwIAyAAIAAhTIgmAAgAKJEmQgRgJgLgSQgLgTAAgbQAAgnAVgWQAXgVAmAAQAnAAAWAVQAVAVAAAmQAAAcgJASQgJASgTAJQgRAKgbAAQgaAAgSgIgAKcC6QgJALAAAYQAAAYAJAKQAJALAPAAQAPAAAKgLQAIgKAAgaQAAgXgJgKQgJgKgQAAQgOAAgJAKgAEyEmQgSgJgLgSQgLgTABgbQgBgnAWgWQAWgVAmAAQAoAAAVAVQAWAVgBAmQABAcgKASQgJASgSAJQgSAKgaAAQgbAAgRgIgAFEC6QgIALgBAYQABAYAIAKQAJALAPAAQAQAAAJgLQAJgKAAgaQgBgXgIgKQgJgKgQAAQgPAAgJAKgAg2EmQgRgJgLgSQgLgTAAgbQAAgnAVgWQAWgVAnAAQAlAAAWAVQAVAVAAAmQAAAcgJASQgJASgSAJQgSAKgYAAQgbAAgSgIgAgjC6QgJALAAAYQAAAYAJAKQAJALAQAAQAMAAAKgLQAIgKAAgaQAAgXgIgKQgKgKgNAAQgPAAgJAKgAj5EAIAvgEQAEARASAAQAKAAAFgFQAGgFgBgKQABgIgHgGQgGgFgMAAIgOAAIAAgdIALAAQAJAAAGgEQAGgFAAgJQgBgNgQAAQgQAAgDAPIgsgFQALgpA1AAQAeAAARALQAQAMAAATQAAAXgUAKQAcAHAAAcQAAAYgSAPQgSAOghAAQg3AAgOgugABPErIAAghIAIAAQAKAAADgEQAFgEAAgMIAAhpICHAAIAACfIgwAAIAAh4IgnAAIAAAxQAAAegDAOQgCAOgNAHQgLAGgaAAIgTgBgAMfEsIAAgnIAsAAIAAAngAHvEsIAAh3IgxAAIAAgoICUAAIAAAoIgxAAIAAB3gAnXEsIAAifICCAAIAAAiIhSAAIAAAZIBNAAIAAAhIhNAAIAAAfIBUAAIAAAkgAsjEsIAAifIB9AAIAAAnIhNAAIAAB4gAMmD6IgIhJIAAgkIAuAAIAAAkIgJBJgAMCARQAUgJAIgIQAHgJABgMIgkAAIAAhFIBKAAIAAA5QABAggNAQQgOASgfAOgAB2AfIAAg0IidAAIAAA0Ig+AAIAAhuIAZAAQAWg9AAhMIAAg4IDQAAIAADBIAbAAIAABugAAPjPQgBA0gPBMIBOAAIAAiDIg+AAgAs1gVIAAg0IAcACQAcAAAFgUIhUi1IBVAAIAjBnIAhhnIBPAAIhSDCQgKAXgIAMQgHALgOAIQgQAHgZAAQgOAAghgEgAKKgVIAAiKIheCKIhJAAIAAj7IBJAAIAACLIBfiLIBIAAIAAD7gAF6gVIgNgqIhYAAIgMAqIhPAAIBej7IBVAAIBeD7gAFdh1IgchaIgbBaIA3AAgAi5gVIgNgqIhYAAIgMAqIhPAAIBej7IBUAAIBfD7gAjWh1IgchaIgbBaIA3AAgApJgVIAAj7IDGAAIAAA+Ih4AAIAAC9gAI0krQgRgNgEgVIAeAAQAHAVAYAAQAZAAAHgVIAeAAQgDAVgRANQgSAOgYAAQgXAAgRgOg");
	this.shape.setTransform(59.2,45.6);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("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");
	this.shape_1.setTransform(59.6,46.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.4,9.5,176,73.3);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gnome_bonussuperbonus_0008();
	this.instance.setTransform(0,613,1,0.681,0,180,0);

	this.instance_1 = new lib.gnome_bonussuperbonus_0008();
	this.instance_1.setTransform(0,5.2,1,0.681,0,180,0);

	this.instance_2 = new lib.gnome_bonussuperbonus_0008();
	this.instance_2.setTransform(0,3,1,0.681);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-299.8,640,912.9);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.setTransform(122.7,144.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(122.7,144.3,106,62);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Растровоеизображение1();
	this.instance.setTransform(441.9,154.9,1.006,1,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(335.3,154.9,106.6,62);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.1,-19,60.3,38);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.копияgnome_bonussuperbonus_0012();
	this.instance.setTransform(-35,-35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.Анимация1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.gnome();
	this.instance.setTransform(-65,-72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65,-72,130,144);


(lib.Символ18 = function() {
	this.initialize();

	// Символ 20
	this.instance = new lib.Символ20();
	this.instance.setTransform(63,228.1,0.92,0.92,0,0,0,25.6,8.8);

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(67.6,207,0.92,0.92,0,0,0,30.6,9.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(39.5,197.9,56.2,38.2);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AA0CvQgIgFgGgGQAHgaARglQgUglgEgPQgGASgEAdQgJAtAAAiQgPgBgRAEQADgtAFgjQgJAIgKACQgEApACAPQgTAGgLAFIAAgfQAAhLAEgYQAUAAASgDQgFAJgEAnQAIgBAMgHIAJgzQAUACARgCQgCAGgDAJQAPgGAOgPQACAWAJAWIAYguQACADAJAEQAJADAHAAQgvBVgOA/QgGAAgKgGgAkBCjIACgGQAEgZAPheIA9gMQgFAQgBAMQgJABgVAFIgGAfIAAACQAOgIAFAAQAJgCAFgBQAPAAADANQACAEgBAGQAAATgNAQQgJAKgTANQgPAKgLAGQgGgGgTgKgAjaBmIgDApIAQgPQAIgJgBgFQAAgGgEgEQgEgEgFAAIgHACgACDCdQgGgNAAgOQAAgsAVgZQAJgMAHgEQAJgIALAAQAIAAAIAJQAGAHABAGQgGAEgNAOIgDgKQgCgIgDABQgLAAgJAvIgBATQAAANADAJQADAGADgBQAEAAAGgJQAHgIADgLQALAWAEACQgSAagVABQgUgBgLgSgADZCsQgNAAAAgOQAAgGAIgHQAHgGAHAAQAHAAAEADQAFAEAAAEQAAAIgHAHQgIAHgHAAgAiSCZQgKgPAAgVIAAgGQAFgkAOgUQAQgTAZgCQAigBABAxIAAAMQAAAhgOAUQgPAXgcAAQgQAAgMgRgAhjA1QgKACgIAWQgEANgCAQIgBALQgBANAGAKQAFAGADAAQAFAAAEgKQAFgKADgUIABgZQAAgcgGAAIAAAAgADpAoIAXgIQANgGAJgCIgWAxQgQAfgGATIgIABIgMADQAFgkAOgzgAAYgcQgIgFgGgGQAHgaARglQgVgngEgPQAPgHAPgPQADAWAIAVIAYgtQACADAJAEQAJACAHAAQgvBWgOA/QgHAAgJgGgAhdglQAUgZAQgpQAHgTALgqQAUgFAPgHQAEAZADAgQADAfgCAwQgEABgLAEQgLAFgIAFQANhRgGgmQgGAigIAiQgKAogHAMQgOgHgZgGgADIgbQgIgBgFgCQAFgcACgjQACgsgFgRQgGASgEAcQgJAvAAAhQgPgBgTAEQADgtAFgjQgXAegYgDIgCgHIgCgPQABgpADgRQAUAAASgEQgFALgEAnQAIgCAMgGIALg0QAUACARgCIgEAPQAVgDARgGIgFAtQgEAcABARQAKgVAJgbIAQgsQAUABAQAEIgJA2QgFAngIAkQgKgBgUACQAOg4gDgRQgVApgOAogAjriQQgHADgMgBQgKBZABAOQgTAGgKAFIAAgfQAAhLADgYIBigOQgIASgIAuQgIAvgBAhQgPgBgSAEQACgtAMhKgAi3gyQgKgQAAgTIAAgHQAFgkAOgTQAQgVAZgBQAiAAAAAwIAAAMQAAAhgNAUQgPAXgcAAQgQAAgMgRgAiIiWQgJACgJAWQgEAOgCAPIgCALQAAANAGAJQAFAIADgBQAFgBAEgIQAFgMADgTIABgZQAAgcgGAAIAAAAg");
	this.shape.setTransform(62.2,86.6);

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.setTransform(61.9,88.6);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(62.9,87.9);

	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(62.9,86.7);

	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(62.9,84.9);

	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(60.4,85.2);

	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(60.4,86.7);

	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(61.9,86.7);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30.3,65.9,62.8,41.7);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(35,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(35,35,1,1,0,0,0,35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:39.2},4).to({y:35},5).to({y:39.2},5).to({y:35},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(65,72);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130,144);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();
	this.instance.setTransform(92.1,330.8,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[92,330.7,87.8,330.3,84.7,327.3,81.3,323.9,81.3,319,81.3,314.2,84.7,310.8,86.9,308.6,89.7,307.8]}},9).to({guide:{path:[89.7,307.8,91.3,307.3,93,307.3,97.8,307.3,101.3,310.8,104.6,314.1,104.7,318.8]}},10).to({guide:{path:[104.7,318.8,104.7,319,104.7,319,104.7,323.9,101.3,327.4,97.8,330.8,93,330.8,92.5,330.8,92,330.8]}},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.1,301.8,46,58);


(lib.Символ16 = function() {
	this.initialize();

	// text
	this.instance = new lib.Символ18();
	this.instance.setTransform(61.5,48,1,1,0,0,0,39.5,28);

	// mouse
	this.instance_1 = new lib.Символ17();
	this.instance_1.setTransform(-3,47.1,0.63,0.63,0,0,0,23,29.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(26,217.9,91.7,38.2);


(lib.Анимация11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(-102.1,12.5,1.25,1.25,0,0,0,127.4,16.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-296.8,3.7,220,91.6);


(lib.Символ17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(94.4,-38.9,1,1,0,0,0,109.8,18.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.PRAVSUNDUK = new lib.Символ6();
	this.PRAVSUNDUK.setTransform(110.6,18.9,1,1,0,0,0,233.2,163.2);

	this.timeline.addTween(cjs.Tween.get(this.PRAVSUNDUK).wait(2));

	// Слой 2
	this.instance_2 = new lib.Символ22();
	this.instance_2.setTransform(57.8,-80.7,0.552,1.398,0,0,0,119.7,120.9);
	this.instance_2.alpha = 0.328;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_2.cache(-2,-2,243,246);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,62);


(lib.Символ16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(101.8,-35.6,1,1,0,0,0,109.8,18.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.LEVSUNDUK = new lib.Символ5();
	this.LEVSUNDUK.setTransform(-86.5,19.3,1,1,0,0,0,248.8,174.1);

	this.timeline.addTween(cjs.Tween.get(this.LEVSUNDUK).wait(2));

	// Слой 2
	this.instance_3 = new lib.Символ22();
	this.instance_3.setTransform(51.2,-80.1,0.552,1.398,0,0,0,119.7,120.9);
	this.instance_3.alpha = 0.488;
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(24, 24, 1)];
	this.instance_3.cache(-2,-2,243,246);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.6,62);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.setTransform(35,35,1,1,0,0,0,35,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(35,35,1,1,0,0,0,35,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация11("synched",0);
	this.instance.setTransform(127.4,21.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:14.3},9).to({y:21.3},10).wait(4).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.5,24.9,220,91.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(65,72,1,1,0,0,0,65,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({skewY:180},0).wait(10).to({skewY:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,144);


(lib.Символ1 = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.setTransform(65,72,1,1,0,0,0,65,72);

	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.setTransform(65,72,1,1,0,0,180);
	this.instance_1._off = true;

	this.instance_2 = new lib.gnome();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,skewY:180,mode:"synched",startPosition:0},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},1).to({_off:true,skewY:0,x:0,y:0},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,144);


// stage content:



(lib.gnome240400 = function(mode,startPosition,loop) {
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
		
		//------------------------
		
		
		this.sun1.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.gnom.gotoAndStop(1);
		}
		
		this.sun1.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.gnom.gotoAndStop(0);
		}
		
		
		//-------------------------
		
		
		
		this.sun2.addEventListener("mouseover", fl_mouseover1.bind(this));
		function fl_mouseover1()
		{
		this.gnom.gotoAndStop(2);
		}
		
		this.sun2.addEventListener("mouseout", fl_mouseout1.bind(this));
		
		function fl_mouseout1()
		{
		this.gnom.gotoAndStop(0);
		}
		
		
		//------------------------
		
		
		document.addEventListener("mouseover", fl_mouseover2.bind(this));
		function fl_mouseover2()
		{
		this.mouse.alpha=0;
		}
		
		document.addEventListener("mouseout", fl_mouseout2.bind(this));
		
		function fl_mouseout2()
		{
		this.mouse.alpha=1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(419.4,1.3,1,1,0,0,0,236.7,18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(63.4,142.1,1.195,1.195,0,0,0,35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// gnome
	this.gnom = new lib.Символ1();
	this.gnom.setTransform(126.5,294.1,0.839,0.839,0,0,0,73.3,81.5);

	this.timeline.addTween(cjs.Tween.get(this.gnom).wait(1));

	// Символ 16
	this.sun1 = new lib.Символ16_1();
	this.sun1.setTransform(-1.7,216.8,1.055,1.055,0,0,0,10,31.1);
	new cjs.ButtonHelper(this.sun1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.sun1).wait(1));

	// Символ 9
	this.instance_2 = new lib.Символ9();
	this.instance_2.setTransform(209.9,140.1,1.195,1.195,0,0,0,35,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 17
	this.sun2 = new lib.Символ17_1();
	this.sun2.setTransform(214.8,215.5,1.077,1.077,0,0,0,55.2,31.1);
	new cjs.ButtonHelper(this.sun2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.sun2).wait(1));

	// mouse
	this.mouse = new lib.Символ16();
	this.mouse.setTransform(2,165.1,1,1,0,0,0,23,29);

	this.timeline.addTween(cjs.Tween.get(this.mouse).wait(1));

	// Символ 8
	this.instance_3 = new lib.Символ8();
	this.instance_3.setTransform(98.8,216.8,0.682,0.682,0,0,0,320.1,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,101.9,436.5,629);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
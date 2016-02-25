(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/gerbrossii1.png", id:"gerbrossii1"},
		{src:"images/KNOPKA.png", id:"KNOPKA"},
		{src:"images/KNOPKA2.png", id:"KNOPKA2"}
	]
};



// symbols:



(lib.gerbrossii1 = function() {
	this.initialize(img.gerbrossii1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,325);


(lib.KNOPKA = function() {
	this.initialize(img.KNOPKA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,90);


(lib.KNOPKA2 = function() {
	this.initialize(img.KNOPKA2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Анимация8 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(68,68,68,0)"],[0,0.51,1],-32.7,-18.9,32.8,18.9).s().p("AztWWMAdMgylIKPF6MgdMAylg");
	this.shape.setTransform(68.3,-51);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.9,-231.8,252.5,361.7);


(lib.text2 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AllCgIAAgvIh/AAIAAkLIBGAAIAADVIAVAAIAAjVIBGAAIAADVIAOAAIAABlgAhQBwQgRgHgKgOQgLgOgCgRQgCgRAAgpIAAgsQAAgoACgRQACgRAKgOQAKgOARgIQARgHAXAAQAWAAARAHQAPAHAKAPQALANACARQACARAAApIAAAsQAAApgCAQQgCARgKAOQgKAOgPAIQgRAHgXAAQgWAAgRgHgAgxhtQgDAEAAAVIAAB8QAAAWACAGQACAGAHAAQAHgBACgFQACgHAAgXIAAh6QAAgTgCgFQgCgGgHABQgFgBgDAFgAFOBxIAAkLIBHAAQAcABAQAEQAPAEAIAJQAHAIADAMQADAMAAAaIAAAXQAAAagGAMQgFALgOAGQgOAFgXAAIgTAAIAABsgAGUgnIAFABQAKAAAEgGQADgEAAgPIAAgWQAAgOgEgEQgEgEgOgBgACVBxIAAgsIgKAAQgxAAgSgUQgLgNgEgQQgCgMAAgYIAAgFQAAgaACgMQAEgQALgNQASgUAxAAIAKAAIAAguIBGAAIAAAuIANAAQAxAAARAUQALANAEAQQACAMAAAaIAAAFQAAAYgCAMQgEAQgLANQgSAUgwAAIgNAAIAAAsgADbAbIAIAAQAIAAAFgIQAFgJAAgLIAAgjQAAgNgFgJQgFgIgIAAIgIAAgACCg6QgFAJAAANIAAAjQAAALAFAJQAGAIAIAAIAFAAIAAhdIgFAAQgIAAgGAIgAkiBxIAAkLIBGAAQAdABAPAEQAPAEAIAJQAIAIADAMQACAMAAAaIAAAXQAAAagFAMQgFALgOAGQgPAFgXAAIgSAAIAABsgAjcgnIAFABQAJAAAEgGQAEgEAAgPIAAgWQAAgOgEgEQgFgEgNgBg");
	this.shape.setTransform(48.5,16.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97.1,32.1);


(lib.text1 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(176.5,14);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,353,28);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация8("synched",0);
	this.instance.setTransform(-100.4,136);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:728.5,y:154},39).to({startPosition:0},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.4,-95.8,252.5,361.7);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(27.5,135.9,1,1,0,0,0,27.5,135.9);
	this.instance.alpha = 0.43;
	this.instance.compositeOperation = "lighter";

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-158.4,-95.8,252.5,361.7);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyVAGYQisgBh8h3Qh6h4ABioQgBinB6h4QB8h4CsAAMBkpAAAQCtAAB7B4QB8B4AACnQAACoh8B4Qh7B3itABg");
	mask.setTransform(515.5,253);

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(185.9,231.8,1,1,0,0,0,27.5,135.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(151.5,212.2,101,81.6);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-24.2,-25.5,1,1,0,0,0,126.2,180.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Слой 1
	this.instance_1 = new lib.text2();
	this.instance_1.setTransform(684.8,77.7,0.336,0.336,0,0,0,48.5,16.1);

	this.instance_2 = new lib.gerbrossii1();
	this.instance_2.setTransform(593,-57.8,0.601,0.601);

	this.instance_3 = new lib.text1();
	this.instance_3.setTransform(339.1,44.9,1.38,1.38,0,0,0,176.5,14);

	this.instance_4 = new lib.KNOPKA();
	this.instance_4.setTransform(0,1);

	this.instance_5 = new lib.text2();
	this.instance_5.setTransform(679.7,73.3,0.439,0.439,0,0,0,48.5,16.1);

	this.instance_6 = new lib.KNOPKA2();
	this.instance_6.setTransform(0,1);

	this.instance_7 = new lib.text1();
	this.instance_7.setTransform(344.3,43.6,1.405,1.405,0,0,0,176.5,14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4RgGVMBwjAAAIAAMrMhwjAAAg");
	this.shape.setTransform(363.5,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC66").s().p("Eg4RAGWIAAsrMBwjAAAIAAMrg");
	this.shape_1.setTransform(363.5,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3,p:{x:339.1}},{t:this.instance_2,p:{x:593,y:-57.8}},{t:this.instance_1,p:{x:684.8,y:77.7}}]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_3,p:{x:338.8}},{t:this.instance_2,p:{x:593.2,y:-58.6}},{t:this.instance_1,p:{x:685,y:76.9}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-206.3,923.8,361.7);


// stage content:



(lib.knopka1 = function() {
	this.initialize();

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(234,29,1,1,0,0,0,234,30);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ2(), 3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(213.6,-162.3,924,361.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
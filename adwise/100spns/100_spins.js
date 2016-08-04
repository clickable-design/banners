(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 250,
	height: 240,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/button1.png?1470315976472", id:"button1"},
		{src:"images/button2.png?1470315976472", id:"button2"},
		{src:"images/Lara_6.png?1470315976472", id:"Lara_6"},
		{src:"images/logo.png?1470315976472", id:"logo"},
		{src:"images/NetEntGameGonzosQuest2.png?1470315976472", id:"NetEntGameGonzosQuest2"},
		{src:"images/purplestarswallpaper2.jpg?1470315976472", id:"purplestarswallpaper2"},
		{src:"images/ReelStealNetent.png?1470315976472", id:"ReelStealNetent"},
		{src:"images/spins.png?1470315976472", id:"spins"},
		{src:"images/text_03.png?1470315976472", id:"text_03"},
		{src:"images/text_07.png?1470315976472", id:"text_07"},
		{src:"images/TheExterminatorkaraktär.png?1470315976472", id:"TheExterminatorkaraktär"}
	]
};



// symbols:



(lib.button1 = function() {
	this.initialize(img.button1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.button2 = function() {
	this.initialize(img.button2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Lara_6 = function() {
	this.initialize(img.Lara_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,382);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,112);


(lib.NetEntGameGonzosQuest2 = function() {
	this.initialize(img.NetEntGameGonzosQuest2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.purplestarswallpaper2 = function() {
	this.initialize(img.purplestarswallpaper2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,250);


(lib.ReelStealNetent = function() {
	this.initialize(img.ReelStealNetent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,193);


(lib.spins = function() {
	this.initialize(img.spins);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.text_03 = function() {
	this.initialize(img.text_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,53);


(lib.text_07 = function() {
	this.initialize(img.text_07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,38);


(lib.TheExterminatorkaraktär = function() {
	this.initialize(img.TheExterminatorkaraktär);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,180);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_07();
	this.instance.setTransform(0,0,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.3,34.2);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.text_03();
	this.instance.setTransform(0,0,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208.4,41.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Lara_6();
	this.instance.setTransform(0,0,0.948,0.948);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.9,362);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.TheExterminatorkaraktär();
	this.instance.setTransform(0,0,0.906,0.906);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,163,163);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ReelStealNetent();
	this.instance.setTransform(0,0,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.5,171.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.NetEntGameGonzosQuest2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,250);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.button1();
	this.instance.setTransform(-2.8,-2.2,0.789,0.789);

	this.instance_1 = new lib.button2();
	this.instance_1.setTransform(-3.1,1.4,0.788,0.788);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-2.2,157.7,157.7);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spins();
	this.instance.setTransform(-76.3,-76.3,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-76.3,152.6,152.6);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spins();
	this.instance.setTransform(-50.5,-50.5,0.506,0.506);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-50.5,101.2,101.2);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spins();
	this.instance.setTransform(-58.1,-58.1,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.1,-58.1,116.2,116.2);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spins();
	this.instance.setTransform(-77.6,-77.6,0.776,0.776);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-77.6,155.2,155.2);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.spins();
	this.instance.setTransform(-77.6,-77.6,0.776,0.776);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-77.6,155.2,155.2);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация7("synched",0);
	this.instance.setTransform(76.3,76.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.7,152.7);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.setTransform(50.6,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.2,101.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);
	this.instance.setTransform(58.1,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.2,116.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.spins_1.gotoAndPlay(0);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(76.3,76.3,1,1,0,0,0,76.3,76.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:76.4,rotation:30,x:76.4,y:407.9},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.7,152.7);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.spins_4.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(50.6,50.6,1,1,0,0,0,50.6,50.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-17.7,y:340.6},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.2,101.2);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.parent.spins_3.gotoAndPlay(1);
	}
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(46).call(this.frame_65).wait(1));

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(58.1,58.1,1,1,0,0,0,58.1,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,y:368.1},65).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.2,116.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.parent.spins_2.gotoAndPlay(1);
	}
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(45).call(this.frame_64).wait(1));

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.setTransform(77.6,77.6);

	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(77.6,515.7,1,1,49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},64).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:49.7,y:515.7},64).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155.2,155.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ8();
	this.instance.setTransform(104.2,20.8,1,1,0,0,0,104.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:103.5,y:22},19).to({scaleX:1,scaleY:1,x:104.2,y:20.8},9).wait(12));

	// Слой 2
	this.instance_1 = new lib.Символ9();
	this.instance_1.setTransform(101.7,58.6,1,1,0,0,0,96.6,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:96.5,scaleX:1.06,scaleY:1.06,x:100.7,y:61.9},19).to({regX:96.6,scaleX:1,scaleY:1,x:101.7,y:58.6},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208.4,75.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.setTransform(44.5,151,1,1,0,0,0,125,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:144.5},14,cjs.Ease.get(-1)).wait(4).to({y:151},16,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(-21.2,96.9,1,1,0,0,0,79.8,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({y:91.1},14,cjs.Ease.get(-1)).to({y:96.9},16,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(97.5,103.8,1,1,0,0,0,81.5,81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:97.3},14,cjs.Ease.get(-1)).wait(4).to({y:103.8},16,cjs.Ease.get(1)).wait(1));

	// Слой 4
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(117.5,180,1,1,0,0,0,127.5,181);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({y:173.5},14,cjs.Ease.get(-1)).to({y:180},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-1,345.9,362);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.spins_4 = new lib.Символ13();
	this.spins_4.setTransform(85.9,0,1,1,0,0,0,76.3,76.3);

	this.spins_3 = new lib.Символ12();
	this.spins_3.setTransform(-30.5,16.3,1,1,0,0,0,50.6,50.6);

	this.spins_2 = new lib.Символ11();
	this.spins_2.setTransform(23.9,1.1,1,1,0,0,0,58.1,58.1);

	this.spins_1 = new lib.Символ10();
	this.spins_1.setTransform(-87.9,-1.7,0.934,0.934,0,0,0,77.7,77.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spins_1},{t:this.spins_2},{t:this.spins_3},{t:this.spins_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-76.3,322.8,152.6);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.spins_4 = new lib.Символ13();
	this.spins_4.setTransform(84.2,0,1,1,0,0,0,76.3,76.3);
	this.spins_4.alpha = 0;

	this.spins_3 = new lib.Символ12();
	this.spins_3.setTransform(27.5,16.3,1,1,0,0,0,50.6,50.6);
	this.spins_3.alpha = 0;

	this.spins_2 = new lib.Символ11();
	this.spins_2.setTransform(-25.6,7.1,1,1,0,0,0,58.1,58.1);
	this.spins_2.alpha = 0;

	this.spins_1 = new lib.Символ10();
	this.spins_1.setTransform(-87.9,-1.7,0.934,0.934,0,0,0,77.7,77.7);
	this.spins_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spins_1},{t:this.spins_2},{t:this.spins_3},{t:this.spins_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-76.3,321.1,152.6);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(6));

	// Слой 1
	this.instance = new lib.Анимация9("synched",0);
	this.instance.setTransform(160.5,76.3);

	this.instance_1 = new lib.Анимация10("synched",0);
	this.instance_1.setTransform(160.5,76.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({alpha:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,321.1,152.7);


// stage content:



(lib._100_spins = function(mode,startPosition,loop) {
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
		
		
		stage.canvas.addEventListener("mouseover", fl_Clickover.bind(this));
		
		function fl_Clickover()
		{
		    this.spins.gotoAndPlay(1);
		   
		}
		
		stage.canvas.addEventListener("mouseout", fl_Clickout.bind(this));
		
		function fl_Clickout()
		{
		    this.spins.gotoAndPlay(20);
		   
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// button
	this.instance = new lib.Символ2();
	this.instance.setTransform(125,209.5,1,1,0,0,0,76.5,76.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// spins
	this.spins = new lib.Символ17();
	this.spins.setTransform(130,-26,1,1,0,0,0,160.5,76.3);

	this.timeline.addTween(cjs.Tween.get(this.spins).wait(1));

	// text
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(124.6,41,0.886,0.886,0,0,0,104.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// character
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(143.3,166.2,0.921,0.921,0,0,0,90.1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// fon
	this.instance_3 = new lib.logo();
	this.instance_3.setTransform(0.5,-2.8,0.314,0.314);

	this.instance_4 = new lib.purplestarswallpaper2();
	this.instance_4.setTransform(-25,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(92.3,17.7,407.7,518);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
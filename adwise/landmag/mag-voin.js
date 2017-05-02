(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/back.jpg?1469634081092", id:"back"},
		{src:"images/bird1.png?1469634081092", id:"bird1"},
		{src:"images/bird2.png?1469634081092", id:"bird2"},
		{src:"images/bli.png?1469634081092", id:"bli"},
		{src:"images/blurr.png?1469634081092", id:"blurr"},
		{src:"images/clouds.png?1469634081092", id:"clouds"},
		{src:"images/mag.png?1469634081092", id:"mag"},
		{src:"images/pla.png?1469634081092", id:"pla"},
		{src:"images/wall.png?1469634081092", id:"wall"},
		{src:"images/war.png?1469634081092", id:"war"}
	]
};



// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,931);


(lib.bird1 = function() {
	this.initialize(img.bird1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,416);


(lib.bird2 = function() {
	this.initialize(img.bird2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,416);


(lib.bli = function() {
	this.initialize(img.bli);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,315);


(lib.blurr = function() {
	this.initialize(img.blurr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1332,572);


(lib.clouds = function() {
	this.initialize(img.clouds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1248,450);


(lib.mag = function() {
	this.initialize(img.mag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,1089);


(lib.pla = function() {
	this.initialize(img.pla);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,729,450);


(lib.wall = function() {
	this.initialize(img.wall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,404);


(lib.war = function() {
	this.initialize(img.war);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,568,937);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blurr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1332,572);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,931);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bird2();
	this.instance.setTransform(952.3,158.1);

	this.instance_1 = new lib.bird1();
	this.instance_1.setTransform(952.3,158.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(952.3,158.1,500,416);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFFF","rgba(0,255,255,0)"],[0,1],0,0,0,0,0,127.2).s().p("A81TAQr8n4AArIQAArHL8n4QL9n4Q4AAQQ5AAL9H4QL8H4AALHQAALIr8H4Qr9H4w5AAQw4AAr9n4g");
	this.shape.setTransform(261.1,172.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522.1,344.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.clouds();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1248,450);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bli();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,315);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.war();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,568,937);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pla();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729,450);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 24
	this.instance = new lib.Символ24();
	this.instance.setTransform(772.2,678.3,1.345,0.44,-26.4,0,0,666.1,286.1);
	this.instance.alpha = 0.16;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:772.3,y:618.3,alpha:0.539},39).to({y:678.3,alpha:0.16},40).wait(1));

	// Символ 24
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(1188.3,656.3,1.341,0.439,-40.1,0,0,666.2,286.1);
	this.instance_1.alpha = 0.09;
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:666.1,scaleX:1.35,scaleY:0.44,x:1188.2,alpha:0.398},26).wait(1).to({alpha:0.059},39).to({regX:666.2,scaleX:1.34,x:1188.3,alpha:0.09},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-14.9,2038.5,1342.8);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ6();
	this.instance.setTransform(1508.4,-120,1,1,0,0,0,284,468.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.wall();
	this.instance_1.setTransform(0,0,1.04,1.006);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-588.5,1996.4,995.2);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ22();
	this.instance.setTransform(940,465.5,1.033,1,0,0,0,960,465.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:955.9},49,cjs.Ease.get(-1)).to({x:972},50,cjs.Ease.get(1)).to({x:956},50,cjs.Ease.get(-1)).to({x:940},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,0,1984,931);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(-411.2,87.6,0.637,0.637,0,0,0,90,71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138.5,143.1,318.8,265.2);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14();
	this.instance.setTransform(311.3,274.5,1,1,-28,0,0,261.1,172.1);
	this.instance.alpha = 0.34;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.609},19).to({alpha:0.34},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,622.5,548.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(624,225,1,1,0,0,0,624,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1248,450);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ7();
	this.instance.setTransform(290.5,935.8,0.866,0.866,43.2,0,0,140.1,157.5);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9,rotation:43.1,x:290.6},4,cjs.Ease.get(-1)).to({regX:140.2,scaleX:0.94,scaleY:0.94,rotation:43.2,y:935.9},5,cjs.Ease.get(1)).to({scaleX:0.9,scaleY:0.9,rotation:43.1},5,cjs.Ease.get(-1)).to({regX:140.1,scaleX:0.87,scaleY:0.87,rotation:43.2,x:290.5,y:935.8},5,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(257.1,815.9,0.967,0.967,71.7,0,0,140.2,157.5);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:140.1,scaleX:1,scaleY:1,rotation:71.5,y:815.7},5,cjs.Ease.get(1)).wait(1).to({regY:157.6,scaleX:0.97,scaleY:0.97,rotation:71.7,x:257},4,cjs.Ease.get(-1)).to({regY:157.5,scaleX:0.94,scaleY:0.94,rotation:71.5,x:257.1,y:815.8},5,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:0.96,rotation:71.7,x:257},4,cjs.Ease.get(-1)).wait(1));

	// Символ 7
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(264.1,531.6,1.045,1.045,80.7,0,0,140.1,157.5);
	this.instance_2.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.03,scaleY:1.03,y:531.7},2).to({scaleX:1,scaleY:1,rotation:80.5},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:80.7,x:264},4,cjs.Ease.get(-1)).to({scaleX:1.06,scaleY:1.06,rotation:80.5,x:264.1},5,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:1.05,rotation:80.7},2,cjs.Ease.get(-1)).wait(1));

	// Символ 7
	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(352,175.5,0.996,0.996,80.7,0,0,140,157.5);
	this.instance_3.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:140.1,scaleX:1,scaleY:1,rotation:80.5,x:352.1,y:175.6},1).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:80.7},4,cjs.Ease.get(-1)).to({regY:157.6,scaleX:0.93,scaleY:0.93,rotation:80.5,x:352},5,cjs.Ease.get(1)).to({regY:157.5,scaleX:0.96,scaleY:0.96,rotation:80.7,x:352.1},5,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:0.99,x:352},3,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(286.3,347.9,1.046,1.046,3.5,0,0,140.1,157.6);
	this.instance_4.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.02,scaleY:1.02,rotation:3.3,y:347.8},5,cjs.Ease.get(-1)).to({regX:140,regY:157.5,scaleX:1,scaleY:1,rotation:3.5},5,cjs.Ease.get(1)).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:3.3},4,cjs.Ease.get(-1)).to({scaleX:1.05,scaleY:1.05,y:347.9},4,cjs.Ease.get(1)).wait(1));

	// Символ 7
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(140.1,157.5,1.021,1.021,0,0,0,140,157.5);
	this.instance_5.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,x:140},3).wait(1).to({scaleX:1.04,scaleY:1.04},4,cjs.Ease.get(-1)).to({scaleX:1.09,scaleY:1.09},5,cjs.Ease.get(1)).to({regX:140.1,scaleX:1.04,scaleY:1.04,x:140.1},5,cjs.Ease.get(-1)).to({regX:140,scaleX:1.03,scaleY:1.03},1,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-3.4,532.4,1121.5);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ23();
	this.instance.setTransform(990.2,203.3,1,1,0,0,0,998.2,203.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:968},50,cjs.Ease.get(-1)).to({x:946.2},49,cjs.Ease.get(1)).to({x:968.2},50,cjs.Ease.get(-1)).to({x:990.2},50,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-588.5,1996.4,995.2);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(5193.2,237,1,1,0,0,0,624,225);

	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(3756.8,173,1,1,0,0,0,624,225);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(2044.4,237,1,1,0,0,0,624,225);

	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(608,173,1,1,0,0,0,624,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-52,5833.2,514);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(192.5,160.7,0.779,0.818,0,0,180,253,196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.4,117,248.5,216.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(530.9,134.4,1,1,0,0,0,530.9,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2903.5},59).wait(1).to({regX:202.9,regY:152.5,scaleX:1.14,skewX:16.2,skewY:-163.8,x:2593.4,y:428.6},0).to({x:138.8,y:-81.5},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.4,117,248.5,216.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();
	this.instance.setTransform(333.3,596,0.765,0.765,121.5,0,0,311.2,274.3);

	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(213.3,-66.1,0.765,0.765,89.2,0,0,311.3,274.3);

	this.instance_2 = new lib.Символ15();
	this.instance_2.setTransform(380.3,-62.1,0.765,0.765,0,0,0,311.3,274.4);

	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(311.2,274.4,1,1,0,0,0,311.2,274.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-304.6,622.5,1108.2);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(640,277,1,1,0,0,0,624,225);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3776.8},799).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5833.2,514);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(1184.3,276.1,1,1,0,0,0,869.1,482.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(141.2,162.3,1,1,0,0,0,530.9,134.4);
	this.instance_1.alpha = 0.691;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ21();
	this.instance_2.setTransform(960,465.5,1,1,0,0,0,960,465.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.3,-221.1,2623.5,1342.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 7
	this.instance = new lib.Символ9();
	this.instance.setTransform(177.5,425.6,1,1,0,0,0,140,157.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ16();
	this.instance_1.setTransform(278.7,813,1,1,0,0,0,311.2,274.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mag.png
	this.instance_2 = new lib.mag();
	this.instance_2.setTransform(0,259);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,234,622.5,1152.2);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(287,415.1,1,1,0,0,0,287,674);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:395.6},19,cjs.Ease.get(-1)).to({y:375.1},20,cjs.Ease.get(1)).to({y:395.1},20,cjs.Ease.get(-1)).to({y:415.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.5,-25,622.5,1152.2);


// stage content:



(lib.magvoin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 1
	this.instance = new lib.Символ13();
	this.instance.setTransform(542.6,591.7,1,1,0,0,0,287,563.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Символ 3
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(958.2,879.3,1,1,0,0,0,966.2,203.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Символ 5
	this.instance_2 = new lib.Символ5();
	this.instance_2.setTransform(944.2,414.1,1,1,0,0,0,364.5,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Символ 2
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(-720.2,654.2,1,1,0,0,0,2916.6,257);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Символ 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(960,465.5,1,1,0,0,0,960,465.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2676.8,318.9,5904,1376.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 600,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/AgueroSergio385x540.png", id:"AgueroSergio385x540"},
		{src:"images/AntoineGriezmannCL390x540.png", id:"AntoineGriezmannCL390x540"},
		{src:"images/CristianoRonaldo28262x540.png", id:"CristianoRonaldo28262x540"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/LionelMessi21312x540.png", id:"LionelMessi21312x540"},
		{src:"images/ma4.jpg", id:"ma4"},
		{src:"images/RobertLewandowski6390x517.png", id:"RobertLewandowski6390x517"}
	]
};



// symbols:



(lib.AgueroSergio385x540 = function() {
	this.initialize(img.AgueroSergio385x540);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,385,540);


(lib.AntoineGriezmannCL390x540 = function() {
	this.initialize(img.AntoineGriezmannCL390x540);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,540);


(lib.CristianoRonaldo28262x540 = function() {
	this.initialize(img.CristianoRonaldo28262x540);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,540);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1070);


(lib.LionelMessi21312x540 = function() {
	this.initialize(img.LionelMessi21312x540);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,312,540);


(lib.ma4 = function() {
	this.initialize(img.ma4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,478,478);


(lib.RobertLewandowski6390x517 = function() {
	this.initialize(img.RobertLewandowski6390x517);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,517);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-563.5,-300.6,0.573,0.573);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-563.5,-300.6,1099.9,613);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("A3kJAIABAGMg1qgADIAArUIeDnDMAoJAF1MBTjgDfIAsQTg");
	this.shape.setTransform(23.5,0.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-470.8,-59,988.6,119.6);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-290.1,-642.5);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("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");
	this.shape_1.setTransform(-286.8,-639.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-682,-674.6,787.2,67.5);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-317.1,-642.5);

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("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");
	this.shape_1.setTransform(-313.8,-639.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-681.6,-674.6,732.4,67.6);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aa4EuQgogRgXggQgZgggEgmQgFglAAheIAAhnQAAhcAFgmQAEgnAXgfQAXggAngRQAngQAzAAQAyAAAmAPQAoAQAXAgQAYAhAFAlQAEAmAABeIAABnQAABcgEAmQgFAmgWAgQgXAfgnARQgnASg0gBQgxAAgmgPgAb9jMQgGAJAAAwIAAEbQAAA1AEAMQAEANAQAAQAQAAAEgPQAFgNAAg2IAAkXQAAgrgFgMQgEgMgPAAQgMAAgHAKgANKEkQgtgZgPgtQgPgtAAhZIAAixQAAhCAFghQAEggAXgfQAWgfAogRQAogSAzABQBGAAAuAbQAuAbAOAnQAPApAABWIAAA6IifAAIAAhqQAAgvgFgMQgFgKgSgBQgTAAgGAOQgFAOAAAuIAAEbQAAAsAFANQAGAOASAAQARAAAHgOQAFgNAAgzIAAhMICfAAIAAAXQAABfgNAoQgOAoguAdQguAehDAAQhGAAgtgZgEgp6AEkQgtgZgOgtQgQgtAAhZIAAixQAAhCAFghQAEggAXgfQAWgfAogRQAogSA0ABQBGAAAtAbQAuAbAOAnQAPApAABWIAAA6IifAAIAAhqQAAgvgFgMQgFgKgSgBQgTAAgGAOQgFAOAAAuIAAEbQAAAsAFANQAGAOATAAQARAAAGgOQAFgNAAgzIAAhMICfAAIAAAXQAABfgNAoQgOAoguAdQgtAehDAAQhGAAgugZgEAnJAExIAAnnIheAAIAAh6IFbAAIAAB6IheAAIAAHngEAgCAExIAAphICgAAQBBAAAjAKQAjAKARATQARATAHAcQAGAbAAA5IAAA2QAAA7gMAYQgMAbggAPQghAOg0AAIgqAAIAAD2gEAihgAsIALAAQAWAAAJgKQAIgMAAghIAAgzQAAgfgKgJQgJgKgfAAgAV+ExIAAnnIgwAAIAAHnIifAAIAAphIFuAAIAAJhgAG/ExIgJhuIg4AAIgKBuIikAAIBRphIDmAAIBaJhgAGyBXQgLhmgNiZQgYCugGBRIA2AAIAAAAgAAVExIAAkBIgtAAIAAEBIifAAIAAphICfAAIAADaIAtAAIAAjaICfAAIAAJhgAoCExIAAkWIhSEWIiLAAIAAphICEAAIAAETIBZkTICFAAIAAJhgAuTExQgagYAAhBIAAh3QAAgXgNgNQgOgPgWAAIgBEDIifAAIAAphICfAAIABECQAtgCABgwIADh3QAChDAYgWICTAAQgVAWAABGIAABoQABBfhsANQBsAMgBBgIAABiQAABFAVAegA4oExIAAphICfAAQBKAAAoALQAmAMAYAkQAXAjAABQQAAA2gQAUQgRAVgyALQA4ANATAbQAUAdAAA8IAAA4QAAA+gOAdQgPAegeAMQgfAKhhABgA2JDIQAhgBAKgKQAJgJAAglIAAg5QAAgngIgIQgIgJgkgBgA2JhAIAPAAQAYAAAGgMQAHgLAAg3QAAgcgFgMQgGgMgIgDIghgDgA7lExIgJhuIg4AAIgKBuIikAAIBRphIDmAAIBaJhgA7yBXQgMhmgMiZQgYCugGBRIA2AAIAAAAgEgjSAExIAAnnIhdAAIAAh6IFaAAIAAB6IheAAIAAHng");

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("Aa4EuQgogRgXgfQgZghgEglQgFgnAAheIAAhmQAAhcAFgmQAEgnAXggQAXgfAngRQAngRAzAAQAyAAAmAQQAoAQAXAgQAYAhAFAlQAEAmAABeIAABmQAABcgEAnQgFAmgWAgQgXAfgnASQgnARg0AAQgxAAgmgQgAb9jMQgGAKAAAvIAAEbQAAA1AEANQAEAMAQAAQAQAAAEgOQAFgOAAg3IAAkWQAAgrgFgMQgEgMgPAAQgMAAgHAKgANKEkQgtgagPgsQgPgtAAhaIAAiwQAAhCAFghQAEggAXggQAWgeAogRQAogRAzgBQBGAAAuAbQAuAbAOAoQAPApAABWIAAA6IifAAIAAhrQAAgugFgLQgFgMgSAAQgTAAgGAOQgFAOAAAvIAAEZQAAAtAFANQAGAOASAAQARAAAHgOQAFgNAAgyIAAhNICfAAIAAAXQAABfgNAoQgOAnguAeQguAfhDAAQhGAAgtgagEgp6AEkQgtgagOgsQgQgtAAhaIAAiwQAAhCAFghQAEggAXggQAWgeAogRQAogRA0gBQBGAAAtAbQAuAbAOAoQAPApAABWIAAA6IifAAIAAhrQAAgugFgLQgFgMgSAAQgTAAgGAOQgFAOAAAvIAAEZQAAAtAFANQAGAOATAAQARAAAGgOQAFgNAAgyIAAhNICfAAIAAAXQAABfgNAoQgOAnguAeQgtAfhDAAQhGAAgugagEAnJAEwIAAnmIheAAIAAh6IFbAAIAAB6IheAAIAAHmgEAgCAEwIAApgICgAAQBBAAAjAKQAjALARASQARAUAHAbQAGAbAAA5IAAA2QAAA6gMAZQgMAbggAOQghAOg0ABIgqAAIAAD1gEAihgAsIALAAQAWAAAJgLQAIgKAAgjIAAgxQAAgggKgJQgJgKgfAAgAV+EwIAAnmIgwAAIAAHmIifAAIAApgIFuAAIAAJggAG/EwIgJhtIg4AAIgKBtIikAAIBRpgIDmAAIBaJggAGyBWQgLhlgNiZQgYCtgGBRIA2AAIAAAAgAAVEwIAAkAIgtAAIAAEAIifAAIAApgICfAAIAADbIAtAAIAAjbICfAAIAAJggAoCEwIAAkWIhSEWIiLAAIAApgICEAAIAAETIBZkTICFAAIAAJggAuTEwQgagWAAhDIAAh3QAAgXgNgNQgOgOgWAAIgBECIifAAIAApgICfAAIABECQAtgCABgwIADh4QAChBAYgXICTAAQgVAWAABGIAABoQABBghsAMQBsAMgBBgIAABhQAABGAVAdgA4oEwIAApgICfAAQBKAAAoAMQAmALAYAkQAXAkAABPQAAA2gQAUQgRAWgyALQA4AMATAbQAUAdAAA8IAAA4QAAA+gOAdQgPAfgeAKQgfAMhhgBgA2JDIQAhgBAKgKQAJgJAAglIAAg5QAAgngIgIQgIgIgkgCgA2JhAIAPAAQAYAAAGgLQAHgMAAg3QAAgcgFgMQgGgLgIgEIghgDgA7lEwIgJhtIg4AAIgKBtIikAAIBRpgIDmAAIBaJggA7yBWQgMhlgMiZQgYCtgGBRIA2AAIAAAAgEgjSAEwIAAnmIhdAAIAAh6IFaAAIAAB6IheAAIAAHmg");
	this.shape_1.setTransform(3,3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-275.8,-31.8,554.7,66.6);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.8)").s().p("EiQYAKdIAAyHIJYiyIYiCMIRNhQIWCD6MBHPgCkIJXiSIYiCMIRMhQIWDD6MBHRgCkIjzSng");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-924.1,-66.9,1848.4,133.9);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.LionelMessi21312x540();
	this.instance.setTransform(-95,-164.5,0.609,0.609);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95,-164.5,190.1,329);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.RobertLewandowski6390x517();
	this.instance.setTransform(-80.8,-107.1,0.415,0.415);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.8,-107.1,161.7,214.4);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.CristianoRonaldo28262x540();
	this.instance.setTransform(-124.6,-202.5,0.793,0.793,-5.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.6,-223.2,249.3,446.6);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.AgueroSergio385x540();
	this.instance.setTransform(-79.8,-111.9,0.415,0.415);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.8,-111.9,159.6,223.9);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.AntoineGriezmannCL390x540();
	this.instance.setTransform(-77.3,-93.6,0.365,0.365,-3.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.3,-102.8,154.6,205.7);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHhGIAngLIAoBLIgXhRIAjgLIA0CpIgkAKIgshPIAYBWIgjALg");
	this.shape.setTransform(-115,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcBQQgKgBgHgEQgJgFgFgHIg9g7QgQgOAAgRQAAgRARgSQARgRASAAQARAAAOAPIA8A8QAHAFAFAJQAFAJABAIQABAJgEAJQgEAJgJAKQgJAJgKAEQgHADgHAAIgEAAgAgjgnIgDACIgCADQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABIABADIAFAHIADACIAAABIAyAxIACADIAEACIADADIAEABQABAAAAAAQAAABABAAQAAAAABgBQABAAAAAAIAEgCIACgDIAAgEIgCgDIgFgHIgCgCIgBgBIgxgwIgCgCIgHgGIgCgCIgDgBIgCAAg");
	this.shape_1.setTransform(-136.2,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhaANIAWhJIAhAJIgKAmIAbAHIAKgkIAfAKIgKAhIBOAWIgLAmg");
	this.shape_2.setTransform(-149.3,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0049B1").s().p("AhKBpIgBgWQAAhlA4hWIBfBHQghA0gBBAQABALABALg");
	this.shape_3.setTransform(-129.5,34.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0049B1").s().p("AhigZQBPguBbAAIAbABIAAB2QgNgCgOAAQg3AAgwAag");
	this.shape_4.setTransform(-109.9,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0049B1").s().p("AiRCzIgBgRQAAhdAchXQAbhWAyhLIC8CJQg+BcABBwIAAARg");
	this.shape_5.setTransform(-148.8,26.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0049B1").s().p("AisgyQCShbCrAAIAcABIAADnIgcgBQhlAAhWA0g");
	this.shape_6.setTransform(-117.2,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0B0B0").s().p("AlBiDIArhCQA+hOBcg4IG+KXg");
	this.shape_7.setTransform(-132,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUDaQgQgEgJgGQgJgGgEgIQgFgIgCgJQgBgHAAgKIAAjpIgVAAIAAhEIAVAAIAAhQICBAAIAABQIAZAAIAABEIgZAAIAADRIABAIIABAFQACAEADABQADABAFAAIAKgBIAAA9QgcAHgtAAQgVAAgOgEg");
	this.shape_8.setTransform(106.8,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqDBQgSgEgNgHQgNgHgIgKQgKgMgFgKQgGgLgCgNQgEgOgBgMIgBi0QAAg1AigcQAhgcA6AAQB6AAAABtIAAAcIgBBGIiRAAIAABIIABAQIADANQACAHAFADQAFAEAGAAQAIAAAGgGQAEgEADgLQACgLAAgGIABgUQAAgWgBgCIBlAAIAAAVQAAAjgGAUQgFAYgOARQgNASgaAJQgZAJgkAAQgWAAgTgEgAgKh7QgFADgDAIIgEAPIAAA0IAtAAIAAgoQAAgqgWAAQgGAAgFAEg");
	this.shape_9.setTransform(83.7,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVC0IAAAoIhoAAIAAm8IBoAAIAABWQAXgXAfAAIAXABIANADIAOAGQAJAEAEAEQAHAHAEAGQAHAIADAKQAEAJACAOQADAQAAAOIAAC1QAAASgEASQgFASgFAIQgGAKgJAJQgJAIgIAEQgLAFgGABIgPADIgMABQgnAAgSgtgAgOhSQgHAIAAAXIAACcQAAAcAGALQAHAKAKAAQANAAAEgKQAEgKAAgdIAAibQAAgYgFgIQgFgIgLAAQgJAAgHAIg");
	this.shape_10.setTransform(54.1,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYC+IAAkXQAAgLgFgKQgFgJgMAAQgGAAgFAEQgFAEgCAEIgEAMIgCAMIAAERIhlAAIAAl3IBlAAIAAAsQAGgZAQgLQAQgMAYAAQAoAAAWAWQAWAXAAAuIAAEgg");
	this.shape_11.setTransform(23.4,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah9BMIAAiXQAAg2AiggQAiggA5AAQA5AAAjAgQAiAgAAA2IAACXQAAA8ggAdQggAdg+AAQh9AAAAh2gAgWhZIAAC4QAAAPAGAHQAHAHAJAAQAKAAAGgHQAHgHAAgPIAAi4QAAghgXAAQgWAAAAAhg");
	this.shape_12.setTransform(-5.7,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiDgIAAm/IDFAAIAABYIhjAAIAABHIBeAAIAABVIheAAIAADLg");
	this.shape_13.setTransform(-30.9,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0049B1").s().p("AxmFHIAAqNMAjNAAAIAAKNg");
	this.shape_14.setTransform(34.6,2.5);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-164.3,-30.3,311.7,75.2);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxM8QlBgXjVkCQjTkDAUlVQAWlXDxjjQDyjiFAAWQFBAXDUECQDUEDgVFVQgVFXjyDjQjcDOkeAAQgaAAgdgCg");
	mask.setTransform(2,4.7);

	// Слой 3
	this.instance = new lib.ma4();
	this.instance.setTransform(-85.5,-87.3,0.366,0.383);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.7,-78.3,155.4,166.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 3
	this.instance = new lib.Символ3();
	this.instance.setTransform(465.3,-0.7,0.554,0.518,173);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:54.4,x:271.2},14,cjs.Ease.get(1)).to({rotation:-360,x:-302.8},35,cjs.Ease.get(-1)).to({rotation:41.2,x:271.2},50,cjs.Ease.get(1)).wait(30).to({rotation:41.2},0).to({rotation:-360,x:-302.8},49,cjs.Ease.get(-1)).to({rotation:41.2,x:271.2},50,cjs.Ease.get(1)).wait(1).to({rotation:41.2},0).wait(35).to({rotation:-360,x:-302.8},50,cjs.Ease.get(-1)).wait(1).to({rotation:41.2,x:271.2},50,cjs.Ease.get(1)).wait(1).to({rotation:41.2},0).wait(35).to({rotation:-720,x:-782.9},48,cjs.Ease.get(-1)).to({_off:true},1).wait(30));

	// Слой 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_49 = new cjs.Graphics().p("EhDoAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_50 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_51 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_52 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_53 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_54 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_55 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_56 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_57 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_58 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_59 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_60 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_61 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_62 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_63 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_64 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_65 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_66 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_67 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_68 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_69 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_70 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_71 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_72 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_73 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_74 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_75 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_76 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_77 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_78 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_79 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_80 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_81 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_82 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_83 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_84 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_85 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_86 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_87 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_88 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_89 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_90 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_91 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_92 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_93 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_94 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_95 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_96 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_97 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_98 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_99 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_129 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_130 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_131 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_132 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_133 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_134 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_135 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_136 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_137 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_138 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_139 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_140 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_141 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_142 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_143 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_144 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_145 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_146 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_147 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_148 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_149 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_150 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_151 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_152 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_153 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_154 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_155 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_156 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_157 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_158 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_159 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_160 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_161 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_162 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_163 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_164 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_165 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_166 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_167 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_168 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_169 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_170 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_171 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_172 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_173 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_174 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_175 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_176 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_177 = new cjs.Graphics().p("EhDoAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_178 = new cjs.Graphics().p("EhDoAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_179 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_180 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_181 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_182 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_183 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_184 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_185 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_186 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_187 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_188 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_189 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_190 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_191 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_192 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_193 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_194 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_195 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_196 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_197 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_198 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_199 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_200 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_201 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_202 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_203 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_204 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_205 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_206 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_207 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_208 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_209 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_210 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_211 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_212 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_213 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_214 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_215 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_216 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_217 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_218 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_219 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_220 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_221 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_222 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_223 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_224 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_225 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_226 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_227 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_228 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_229 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_264 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_265 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_266 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_267 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_268 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_269 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_270 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_271 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_272 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_273 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_274 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_275 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_276 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_277 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_278 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_279 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_280 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_281 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_282 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_283 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_284 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_285 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_286 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_287 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_288 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_289 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_290 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_291 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_292 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_293 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_294 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_295 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_296 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_297 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_298 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_299 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_300 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_301 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_302 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_303 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_304 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_305 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_306 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_307 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_308 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_309 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_310 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_311 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_312 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_313 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_314 = new cjs.Graphics().p("EhDoAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_315 = new cjs.Graphics().p("EhDoAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_316 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_317 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_318 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_319 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_320 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_321 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_322 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_323 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_324 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_325 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_326 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_327 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_328 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_329 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_330 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_331 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_332 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_333 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_334 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_335 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_336 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_337 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_338 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_339 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_340 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_341 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_342 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_343 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_344 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_345 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_346 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_347 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_348 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_349 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_350 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_351 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_352 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_353 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_354 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_355 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_356 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_357 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_358 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_359 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_360 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_361 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_362 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_363 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_364 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_365 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_366 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_401 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_402 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_403 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_404 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_405 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_406 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_407 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_408 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_409 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_410 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_411 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_412 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_413 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_414 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_415 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_416 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_417 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_418 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_419 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_420 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_421 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_422 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_423 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_424 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_425 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_426 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_427 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_428 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_429 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_430 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_431 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_432 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_433 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_434 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_435 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_436 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_437 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_438 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_439 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_440 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_441 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_442 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_443 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_444 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_445 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_446 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_447 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_448 = new cjs.Graphics().p("EgsGAFtIAArZMBYNAAAIAALZg");
	var mask_graphics_449 = new cjs.Graphics().p("EhpIAFtIAArZMBYPAAAIAALZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(49).to({graphics:mask_graphics_49,x:-432.9,y:-1.2}).wait(1).to({graphics:mask_graphics_50,x:-562.4,y:-1.2}).wait(1).to({graphics:mask_graphics_51,x:-541.8,y:-1.2}).wait(1).to({graphics:mask_graphics_52,x:-521.5,y:-1.2}).wait(1).to({graphics:mask_graphics_53,x:-501.7,y:-1.2}).wait(1).to({graphics:mask_graphics_54,x:-482.3,y:-1.2}).wait(1).to({graphics:mask_graphics_55,x:-463.3,y:-1.2}).wait(1).to({graphics:mask_graphics_56,x:-444.8,y:-1.2}).wait(1).to({graphics:mask_graphics_57,x:-426.7,y:-1.2}).wait(1).to({graphics:mask_graphics_58,x:-409,y:-1.2}).wait(1).to({graphics:mask_graphics_59,x:-391.7,y:-1.2}).wait(1).to({graphics:mask_graphics_60,x:-374.9,y:-1.2}).wait(1).to({graphics:mask_graphics_61,x:-358.5,y:-1.2}).wait(1).to({graphics:mask_graphics_62,x:-342.5,y:-1.2}).wait(1).to({graphics:mask_graphics_63,x:-326.9,y:-1.2}).wait(1).to({graphics:mask_graphics_64,x:-311.8,y:-1.2}).wait(1).to({graphics:mask_graphics_65,x:-297.1,y:-1.2}).wait(1).to({graphics:mask_graphics_66,x:-282.8,y:-1.2}).wait(1).to({graphics:mask_graphics_67,x:-269,y:-1.2}).wait(1).to({graphics:mask_graphics_68,x:-255.5,y:-1.2}).wait(1).to({graphics:mask_graphics_69,x:-242.5,y:-1.2}).wait(1).to({graphics:mask_graphics_70,x:-230,y:-1.2}).wait(1).to({graphics:mask_graphics_71,x:-217.8,y:-1.2}).wait(1).to({graphics:mask_graphics_72,x:-206.1,y:-1.2}).wait(1).to({graphics:mask_graphics_73,x:-194.8,y:-1.2}).wait(1).to({graphics:mask_graphics_74,x:-183.9,y:-1.2}).wait(1).to({graphics:mask_graphics_75,x:-173.5,y:-1.2}).wait(1).to({graphics:mask_graphics_76,x:-163.5,y:-1.2}).wait(1).to({graphics:mask_graphics_77,x:-153.9,y:-1.2}).wait(1).to({graphics:mask_graphics_78,x:-144.7,y:-1.2}).wait(1).to({graphics:mask_graphics_79,x:-136,y:-1.2}).wait(1).to({graphics:mask_graphics_80,x:-127.7,y:-1.2}).wait(1).to({graphics:mask_graphics_81,x:-119.8,y:-1.2}).wait(1).to({graphics:mask_graphics_82,x:-112.3,y:-1.2}).wait(1).to({graphics:mask_graphics_83,x:-105.3,y:-1.2}).wait(1).to({graphics:mask_graphics_84,x:-98.7,y:-1.2}).wait(1).to({graphics:mask_graphics_85,x:-92.5,y:-1.2}).wait(1).to({graphics:mask_graphics_86,x:-86.7,y:-1.2}).wait(1).to({graphics:mask_graphics_87,x:-81.4,y:-1.2}).wait(1).to({graphics:mask_graphics_88,x:-76.5,y:-1.2}).wait(1).to({graphics:mask_graphics_89,x:-72,y:-1.2}).wait(1).to({graphics:mask_graphics_90,x:-68,y:-1.2}).wait(1).to({graphics:mask_graphics_91,x:-64.4,y:-1.2}).wait(1).to({graphics:mask_graphics_92,x:-61.2,y:-1.2}).wait(1).to({graphics:mask_graphics_93,x:-58.4,y:-1.2}).wait(1).to({graphics:mask_graphics_94,x:-56.1,y:-1.2}).wait(1).to({graphics:mask_graphics_95,x:-54.1,y:-1.2}).wait(1).to({graphics:mask_graphics_96,x:-52.6,y:-1.2}).wait(1).to({graphics:mask_graphics_97,x:-51.6,y:-1.2}).wait(1).to({graphics:mask_graphics_98,x:-50.9,y:-1.2}).wait(1).to({graphics:mask_graphics_99,x:-50.7,y:-1.2}).wait(30).to({graphics:mask_graphics_129,x:-50.7,y:-1.2}).wait(1).to({graphics:mask_graphics_130,x:-51,y:-1.2}).wait(1).to({graphics:mask_graphics_131,x:-51.7,y:-1.2}).wait(1).to({graphics:mask_graphics_132,x:-52.8,y:-1.2}).wait(1).to({graphics:mask_graphics_133,x:-54.4,y:-1.2}).wait(1).to({graphics:mask_graphics_134,x:-56.5,y:-1.2}).wait(1).to({graphics:mask_graphics_135,x:-59,y:-1.2}).wait(1).to({graphics:mask_graphics_136,x:-62.1,y:-1.2}).wait(1).to({graphics:mask_graphics_137,x:-65.5,y:-1.2}).wait(1).to({graphics:mask_graphics_138,x:-69.5,y:-1.2}).wait(1).to({graphics:mask_graphics_139,x:-73.8,y:-1.2}).wait(1).to({graphics:mask_graphics_140,x:-78.7,y:-1.2}).wait(1).to({graphics:mask_graphics_141,x:-84,y:-1.2}).wait(1).to({graphics:mask_graphics_142,x:-89.8,y:-1.2}).wait(1).to({graphics:mask_graphics_143,x:-96,y:-1.2}).wait(1).to({graphics:mask_graphics_144,x:-102.8,y:-1.2}).wait(1).to({graphics:mask_graphics_145,x:-109.9,y:-1.2}).wait(1).to({graphics:mask_graphics_146,x:-117.6,y:-1.2}).wait(1).to({graphics:mask_graphics_147,x:-125.6,y:-1.2}).wait(1).to({graphics:mask_graphics_148,x:-134.2,y:-1.2}).wait(1).to({graphics:mask_graphics_149,x:-143.2,y:-1.2}).wait(1).to({graphics:mask_graphics_150,x:-152.7,y:-1.2}).wait(1).to({graphics:mask_graphics_151,x:-162.6,y:-1.2}).wait(1).to({graphics:mask_graphics_152,x:-173.1,y:-1.2}).wait(1).to({graphics:mask_graphics_153,x:-183.9,y:-1.2}).wait(1).to({graphics:mask_graphics_154,x:-195.2,y:-1.2}).wait(1).to({graphics:mask_graphics_155,x:-207.1,y:-1.2}).wait(1).to({graphics:mask_graphics_156,x:-219.3,y:-1.2}).wait(1).to({graphics:mask_graphics_157,x:-232,y:-1.2}).wait(1).to({graphics:mask_graphics_158,x:-245.2,y:-1.2}).wait(1).to({graphics:mask_graphics_159,x:-258.8,y:-1.2}).wait(1).to({graphics:mask_graphics_160,x:-273,y:-1.2}).wait(1).to({graphics:mask_graphics_161,x:-287.5,y:-1.2}).wait(1).to({graphics:mask_graphics_162,x:-302.6,y:-1.2}).wait(1).to({graphics:mask_graphics_163,x:-318,y:-1.2}).wait(1).to({graphics:mask_graphics_164,x:-334,y:-1.2}).wait(1).to({graphics:mask_graphics_165,x:-350.4,y:-1.2}).wait(1).to({graphics:mask_graphics_166,x:-367.3,y:-1.2}).wait(1).to({graphics:mask_graphics_167,x:-384.7,y:-1.2}).wait(1).to({graphics:mask_graphics_168,x:-402.5,y:-1.2}).wait(1).to({graphics:mask_graphics_169,x:-420.7,y:-1.2}).wait(1).to({graphics:mask_graphics_170,x:-439.5,y:-1.2}).wait(1).to({graphics:mask_graphics_171,x:-458.6,y:-1.2}).wait(1).to({graphics:mask_graphics_172,x:-478.3,y:-1.2}).wait(1).to({graphics:mask_graphics_173,x:-498.4,y:-1.2}).wait(1).to({graphics:mask_graphics_174,x:-519,y:-1.2}).wait(1).to({graphics:mask_graphics_175,x:-540,y:-1.2}).wait(1).to({graphics:mask_graphics_176,x:-561.6,y:-1.2}).wait(1).to({graphics:mask_graphics_177,x:-432.9,y:-1.2}).wait(1).to({graphics:mask_graphics_178,x:-432.9,y:-1.2}).wait(1).to({graphics:mask_graphics_179,x:-562.4,y:-1.2}).wait(1).to({graphics:mask_graphics_180,x:-541.8,y:-1.2}).wait(1).to({graphics:mask_graphics_181,x:-521.5,y:-1.2}).wait(1).to({graphics:mask_graphics_182,x:-501.7,y:-1.2}).wait(1).to({graphics:mask_graphics_183,x:-482.3,y:-1.2}).wait(1).to({graphics:mask_graphics_184,x:-463.3,y:-1.2}).wait(1).to({graphics:mask_graphics_185,x:-444.8,y:-1.2}).wait(1).to({graphics:mask_graphics_186,x:-426.7,y:-1.2}).wait(1).to({graphics:mask_graphics_187,x:-409,y:-1.2}).wait(1).to({graphics:mask_graphics_188,x:-391.7,y:-1.2}).wait(1).to({graphics:mask_graphics_189,x:-374.9,y:-1.2}).wait(1).to({graphics:mask_graphics_190,x:-358.5,y:-1.2}).wait(1).to({graphics:mask_graphics_191,x:-342.5,y:-1.2}).wait(1).to({graphics:mask_graphics_192,x:-326.9,y:-1.2}).wait(1).to({graphics:mask_graphics_193,x:-311.8,y:-1.2}).wait(1).to({graphics:mask_graphics_194,x:-297.1,y:-1.2}).wait(1).to({graphics:mask_graphics_195,x:-282.8,y:-1.2}).wait(1).to({graphics:mask_graphics_196,x:-269,y:-1.2}).wait(1).to({graphics:mask_graphics_197,x:-255.5,y:-1.2}).wait(1).to({graphics:mask_graphics_198,x:-242.5,y:-1.2}).wait(1).to({graphics:mask_graphics_199,x:-230,y:-1.2}).wait(1).to({graphics:mask_graphics_200,x:-217.8,y:-1.2}).wait(1).to({graphics:mask_graphics_201,x:-206.1,y:-1.2}).wait(1).to({graphics:mask_graphics_202,x:-194.8,y:-1.2}).wait(1).to({graphics:mask_graphics_203,x:-183.9,y:-1.2}).wait(1).to({graphics:mask_graphics_204,x:-173.5,y:-1.2}).wait(1).to({graphics:mask_graphics_205,x:-163.5,y:-1.2}).wait(1).to({graphics:mask_graphics_206,x:-153.9,y:-1.2}).wait(1).to({graphics:mask_graphics_207,x:-144.7,y:-1.2}).wait(1).to({graphics:mask_graphics_208,x:-136,y:-1.2}).wait(1).to({graphics:mask_graphics_209,x:-127.7,y:-1.2}).wait(1).to({graphics:mask_graphics_210,x:-119.8,y:-1.2}).wait(1).to({graphics:mask_graphics_211,x:-112.3,y:-1.2}).wait(1).to({graphics:mask_graphics_212,x:-105.3,y:-1.2}).wait(1).to({graphics:mask_graphics_213,x:-98.7,y:-1.2}).wait(1).to({graphics:mask_graphics_214,x:-92.5,y:-1.2}).wait(1).to({graphics:mask_graphics_215,x:-86.7,y:-1.2}).wait(1).to({graphics:mask_graphics_216,x:-81.4,y:-1.2}).wait(1).to({graphics:mask_graphics_217,x:-76.5,y:-1.2}).wait(1).to({graphics:mask_graphics_218,x:-72,y:-1.2}).wait(1).to({graphics:mask_graphics_219,x:-68,y:-1.2}).wait(1).to({graphics:mask_graphics_220,x:-64.4,y:-1.2}).wait(1).to({graphics:mask_graphics_221,x:-61.2,y:-1.2}).wait(1).to({graphics:mask_graphics_222,x:-58.4,y:-1.2}).wait(1).to({graphics:mask_graphics_223,x:-56.1,y:-1.2}).wait(1).to({graphics:mask_graphics_224,x:-54.1,y:-1.2}).wait(1).to({graphics:mask_graphics_225,x:-52.6,y:-1.2}).wait(1).to({graphics:mask_graphics_226,x:-51.6,y:-1.2}).wait(1).to({graphics:mask_graphics_227,x:-50.9,y:-1.2}).wait(1).to({graphics:mask_graphics_228,x:-50.7,y:-1.2}).wait(1).to({graphics:mask_graphics_229,x:-50.7,y:-1.2}).wait(35).to({graphics:mask_graphics_264,x:-50.7,y:-1.2}).wait(1).to({graphics:mask_graphics_265,x:-50.9,y:-1.2}).wait(1).to({graphics:mask_graphics_266,x:-51.6,y:-1.2}).wait(1).to({graphics:mask_graphics_267,x:-52.6,y:-1.2}).wait(1).to({graphics:mask_graphics_268,x:-54.1,y:-1.2}).wait(1).to({graphics:mask_graphics_269,x:-56.1,y:-1.2}).wait(1).to({graphics:mask_graphics_270,x:-58.4,y:-1.2}).wait(1).to({graphics:mask_graphics_271,x:-61.2,y:-1.2}).wait(1).to({graphics:mask_graphics_272,x:-64.4,y:-1.2}).wait(1).to({graphics:mask_graphics_273,x:-68,y:-1.2}).wait(1).to({graphics:mask_graphics_274,x:-72,y:-1.2}).wait(1).to({graphics:mask_graphics_275,x:-76.5,y:-1.2}).wait(1).to({graphics:mask_graphics_276,x:-81.4,y:-1.2}).wait(1).to({graphics:mask_graphics_277,x:-86.7,y:-1.2}).wait(1).to({graphics:mask_graphics_278,x:-92.5,y:-1.2}).wait(1).to({graphics:mask_graphics_279,x:-98.7,y:-1.2}).wait(1).to({graphics:mask_graphics_280,x:-105.3,y:-1.2}).wait(1).to({graphics:mask_graphics_281,x:-112.3,y:-1.2}).wait(1).to({graphics:mask_graphics_282,x:-119.8,y:-1.2}).wait(1).to({graphics:mask_graphics_283,x:-127.7,y:-1.2}).wait(1).to({graphics:mask_graphics_284,x:-136,y:-1.2}).wait(1).to({graphics:mask_graphics_285,x:-144.7,y:-1.2}).wait(1).to({graphics:mask_graphics_286,x:-153.9,y:-1.2}).wait(1).to({graphics:mask_graphics_287,x:-163.5,y:-1.2}).wait(1).to({graphics:mask_graphics_288,x:-173.5,y:-1.2}).wait(1).to({graphics:mask_graphics_289,x:-183.9,y:-1.2}).wait(1).to({graphics:mask_graphics_290,x:-194.8,y:-1.2}).wait(1).to({graphics:mask_graphics_291,x:-206.1,y:-1.2}).wait(1).to({graphics:mask_graphics_292,x:-217.8,y:-1.2}).wait(1).to({graphics:mask_graphics_293,x:-230,y:-1.2}).wait(1).to({graphics:mask_graphics_294,x:-242.5,y:-1.2}).wait(1).to({graphics:mask_graphics_295,x:-255.5,y:-1.2}).wait(1).to({graphics:mask_graphics_296,x:-269,y:-1.2}).wait(1).to({graphics:mask_graphics_297,x:-282.8,y:-1.2}).wait(1).to({graphics:mask_graphics_298,x:-297.1,y:-1.2}).wait(1).to({graphics:mask_graphics_299,x:-311.8,y:-1.2}).wait(1).to({graphics:mask_graphics_300,x:-326.9,y:-1.2}).wait(1).to({graphics:mask_graphics_301,x:-342.5,y:-1.2}).wait(1).to({graphics:mask_graphics_302,x:-358.5,y:-1.2}).wait(1).to({graphics:mask_graphics_303,x:-374.9,y:-1.2}).wait(1).to({graphics:mask_graphics_304,x:-391.7,y:-1.2}).wait(1).to({graphics:mask_graphics_305,x:-409,y:-1.2}).wait(1).to({graphics:mask_graphics_306,x:-426.7,y:-1.2}).wait(1).to({graphics:mask_graphics_307,x:-444.8,y:-1.2}).wait(1).to({graphics:mask_graphics_308,x:-463.3,y:-1.2}).wait(1).to({graphics:mask_graphics_309,x:-482.3,y:-1.2}).wait(1).to({graphics:mask_graphics_310,x:-501.7,y:-1.2}).wait(1).to({graphics:mask_graphics_311,x:-521.5,y:-1.2}).wait(1).to({graphics:mask_graphics_312,x:-541.8,y:-1.2}).wait(1).to({graphics:mask_graphics_313,x:-562.4,y:-1.2}).wait(1).to({graphics:mask_graphics_314,x:-432.9,y:-1.2}).wait(1).to({graphics:mask_graphics_315,x:-432.9,y:-1.2}).wait(1).to({graphics:mask_graphics_316,x:-562.4,y:-1.2}).wait(1).to({graphics:mask_graphics_317,x:-541.8,y:-1.2}).wait(1).to({graphics:mask_graphics_318,x:-521.5,y:-1.2}).wait(1).to({graphics:mask_graphics_319,x:-501.7,y:-1.2}).wait(1).to({graphics:mask_graphics_320,x:-482.3,y:-1.2}).wait(1).to({graphics:mask_graphics_321,x:-463.3,y:-1.2}).wait(1).to({graphics:mask_graphics_322,x:-444.8,y:-1.2}).wait(1).to({graphics:mask_graphics_323,x:-426.7,y:-1.2}).wait(1).to({graphics:mask_graphics_324,x:-409,y:-1.2}).wait(1).to({graphics:mask_graphics_325,x:-391.7,y:-1.2}).wait(1).to({graphics:mask_graphics_326,x:-374.9,y:-1.2}).wait(1).to({graphics:mask_graphics_327,x:-358.5,y:-1.2}).wait(1).to({graphics:mask_graphics_328,x:-342.5,y:-1.2}).wait(1).to({graphics:mask_graphics_329,x:-326.9,y:-1.2}).wait(1).to({graphics:mask_graphics_330,x:-311.8,y:-1.2}).wait(1).to({graphics:mask_graphics_331,x:-297.1,y:-1.2}).wait(1).to({graphics:mask_graphics_332,x:-282.8,y:-1.2}).wait(1).to({graphics:mask_graphics_333,x:-269,y:-1.2}).wait(1).to({graphics:mask_graphics_334,x:-255.5,y:-1.2}).wait(1).to({graphics:mask_graphics_335,x:-242.5,y:-1.2}).wait(1).to({graphics:mask_graphics_336,x:-230,y:-1.2}).wait(1).to({graphics:mask_graphics_337,x:-217.8,y:-1.2}).wait(1).to({graphics:mask_graphics_338,x:-206.1,y:-1.2}).wait(1).to({graphics:mask_graphics_339,x:-194.8,y:-1.2}).wait(1).to({graphics:mask_graphics_340,x:-183.9,y:-1.2}).wait(1).to({graphics:mask_graphics_341,x:-173.5,y:-1.2}).wait(1).to({graphics:mask_graphics_342,x:-163.5,y:-1.2}).wait(1).to({graphics:mask_graphics_343,x:-153.9,y:-1.2}).wait(1).to({graphics:mask_graphics_344,x:-144.7,y:-1.2}).wait(1).to({graphics:mask_graphics_345,x:-136,y:-1.2}).wait(1).to({graphics:mask_graphics_346,x:-127.7,y:-1.2}).wait(1).to({graphics:mask_graphics_347,x:-119.8,y:-1.2}).wait(1).to({graphics:mask_graphics_348,x:-112.3,y:-1.2}).wait(1).to({graphics:mask_graphics_349,x:-105.3,y:-1.2}).wait(1).to({graphics:mask_graphics_350,x:-98.7,y:-1.2}).wait(1).to({graphics:mask_graphics_351,x:-92.5,y:-1.2}).wait(1).to({graphics:mask_graphics_352,x:-86.7,y:-1.2}).wait(1).to({graphics:mask_graphics_353,x:-81.4,y:-1.2}).wait(1).to({graphics:mask_graphics_354,x:-76.5,y:-1.2}).wait(1).to({graphics:mask_graphics_355,x:-72,y:-1.2}).wait(1).to({graphics:mask_graphics_356,x:-68,y:-1.2}).wait(1).to({graphics:mask_graphics_357,x:-64.4,y:-1.2}).wait(1).to({graphics:mask_graphics_358,x:-61.2,y:-1.2}).wait(1).to({graphics:mask_graphics_359,x:-58.4,y:-1.2}).wait(1).to({graphics:mask_graphics_360,x:-56.1,y:-1.2}).wait(1).to({graphics:mask_graphics_361,x:-54.1,y:-1.2}).wait(1).to({graphics:mask_graphics_362,x:-52.6,y:-1.2}).wait(1).to({graphics:mask_graphics_363,x:-51.6,y:-1.2}).wait(1).to({graphics:mask_graphics_364,x:-50.9,y:-1.2}).wait(1).to({graphics:mask_graphics_365,x:-50.7,y:-1.2}).wait(1).to({graphics:mask_graphics_366,x:-50.7,y:-1.2}).wait(35).to({graphics:mask_graphics_401,x:-50.7,y:-1.2}).wait(1).to({graphics:mask_graphics_402,x:-51.2,y:-1.2}).wait(1).to({graphics:mask_graphics_403,x:-52.5,y:-1.2}).wait(1).to({graphics:mask_graphics_404,x:-54.7,y:-1.2}).wait(1).to({graphics:mask_graphics_405,x:-57.8,y:-1.2}).wait(1).to({graphics:mask_graphics_406,x:-61.7,y:-1.2}).wait(1).to({graphics:mask_graphics_407,x:-66.5,y:-1.2}).wait(1).to({graphics:mask_graphics_408,x:-72.3,y:-1.2}).wait(1).to({graphics:mask_graphics_409,x:-78.9,y:-1.2}).wait(1).to({graphics:mask_graphics_410,x:-86.3,y:-1.2}).wait(1).to({graphics:mask_graphics_411,x:-94.7,y:-1.2}).wait(1).to({graphics:mask_graphics_412,x:-103.9,y:-1.2}).wait(1).to({graphics:mask_graphics_413,x:-114,y:-1.2}).wait(1).to({graphics:mask_graphics_414,x:-125,y:-1.2}).wait(1).to({graphics:mask_graphics_415,x:-136.9,y:-1.2}).wait(1).to({graphics:mask_graphics_416,x:-149.6,y:-1.2}).wait(1).to({graphics:mask_graphics_417,x:-163.3,y:-1.2}).wait(1).to({graphics:mask_graphics_418,x:-177.8,y:-1.2}).wait(1).to({graphics:mask_graphics_419,x:-193.1,y:-1.2}).wait(1).to({graphics:mask_graphics_420,x:-209.4,y:-1.2}).wait(1).to({graphics:mask_graphics_421,x:-226.6,y:-1.2}).wait(1).to({graphics:mask_graphics_422,x:-244.6,y:-1.2}).wait(1).to({graphics:mask_graphics_423,x:-263.5,y:-1.2}).wait(1).to({graphics:mask_graphics_424,x:-283.3,y:-1.2}).wait(1).to({graphics:mask_graphics_425,x:-303.9,y:-1.2}).wait(1).to({graphics:mask_graphics_426,x:-325.5,y:-1.2}).wait(1).to({graphics:mask_graphics_427,x:-347.9,y:-1.2}).wait(1).to({graphics:mask_graphics_428,x:-371.2,y:-1.2}).wait(1).to({graphics:mask_graphics_429,x:-395.4,y:-1.2}).wait(1).to({graphics:mask_graphics_430,x:-420.4,y:-1.2}).wait(1).to({graphics:mask_graphics_431,x:-446.3,y:-1.2}).wait(1).to({graphics:mask_graphics_432,x:-473.2,y:-1.2}).wait(1).to({graphics:mask_graphics_433,x:-500.9,y:-1.2}).wait(1).to({graphics:mask_graphics_434,x:-529.4,y:-1.2}).wait(1).to({graphics:mask_graphics_435,x:-558.9,y:-1.2}).wait(1).to({graphics:mask_graphics_436,x:-589.2,y:-1.2}).wait(1).to({graphics:mask_graphics_437,x:-620.4,y:-1.2}).wait(1).to({graphics:mask_graphics_438,x:-652.5,y:-1.2}).wait(1).to({graphics:mask_graphics_439,x:-685.5,y:-1.2}).wait(1).to({graphics:mask_graphics_440,x:-719.3,y:-1.2}).wait(1).to({graphics:mask_graphics_441,x:-754.1,y:-1.2}).wait(1).to({graphics:mask_graphics_442,x:-789.7,y:-1.2}).wait(1).to({graphics:mask_graphics_443,x:-826.1,y:-1.2}).wait(1).to({graphics:mask_graphics_444,x:-863.5,y:-1.2}).wait(1).to({graphics:mask_graphics_445,x:-901.8,y:-1.2}).wait(1).to({graphics:mask_graphics_446,x:-940.9,y:-1.2}).wait(1).to({graphics:mask_graphics_447,x:-980.9,y:-1.2}).wait(1).to({graphics:mask_graphics_448,x:-1021.8,y:-1.2}).wait(1).to({graphics:mask_graphics_449,x:-672.9,y:-1.2}).wait(1).to({graphics:null,x:0,y:0}).wait(30));

	// Символ 19
	this.instance_1 = new lib.Символ19();
	this.instance_1.setTransform(157,439,0.682,0.682);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(128).to({_off:true},1).wait(302));

	// Символ 20
	this.instance_2 = new lib.Символ20();
	this.instance_2.setTransform(146.7,439.8,0.682,0.682);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(178).to({_off:false},0).wait(51).to({_off:true},85).wait(166));

	// Символ 18
	this.instance_3 = new lib.Символ18();
	this.instance_3.setTransform(-65.6,2.2,0.716,0.716);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(315).to({_off:false},0).wait(134).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(410.2,-55.7,107.7,105.9);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2.5},49).to({y:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-470.8,-59,988.6,119.6);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(467.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-452.8},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-456.5,-66.9,1848.4,133.9);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.6,-223.2,249.3,446.6);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.gotoAndPlay(30);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// Символ 12
	this.instance = new lib.Символ12();
	this.instance.setTransform(302.5,328.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({y:18.3},9,cjs.Ease.get(0.99)).wait(6).to({y:10.2},17).to({y:1.4},20,cjs.Ease.get(1)).wait(1).to({y:10},19,cjs.Ease.get(-1)).to({y:18.9},20,cjs.Ease.get(1)).to({y:18.8},2,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Символ 14
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(175.3,371.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({y:61.2},10,cjs.Ease.get(0.99)).wait(12).to({y:56.3},7).to({y:47.6},20,cjs.Ease.get(1)).wait(1).to({y:56.1},19,cjs.Ease.get(-1)).to({y:65.1},20,cjs.Ease.get(1)).to({y:61.9},12,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Символ 13
	this.instance_2 = new lib.Символ13();
	this.instance_2.setTransform(130.8,319.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({y:9},9,cjs.Ease.get(0.99)).wait(10).to({y:1.5},18).wait(1).to({y:10},19,cjs.Ease.get(-1)).to({y:19},20,cjs.Ease.get(1)).to({y:10.2},20,cjs.Ease.get(-1)).to({y:9.4},1,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 10
	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(6.3,303.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:-6.4},10,cjs.Ease.get(1)).wait(14).to({y:-8},8).wait(1).to({y:0.6},19,cjs.Ease.get(-1)).to({y:9.5},20,cjs.Ease.get(1)).to({y:0.8},20,cjs.Ease.get(-1)).to({y:-6.2},11,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Символ 9
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(-94.5,318.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:8.1},12,cjs.Ease.get(1)).wait(17).to({y:16.6},19,cjs.Ease.get(-1)).to({y:25.6},20,cjs.Ease.get(1)).to({y:16.8},20,cjs.Ease.get(-1)).to({y:8.1},20,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.9,215.6,154.7,205.7);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ6();
	this.instance.setTransform(-602.9,7,0.766,0.766);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({x:-307.9,y:3},7,cjs.Ease.get(1)).wait(422).to({x:-682.9,y:7},6).to({_off:true},16).wait(20));

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(-7.2,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-8.2,y:-1.5},5,cjs.Ease.get(1)).wait(456).to({x:-7.2,y:139.5},8,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// Слой 4
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(-343.1,-92.6,0.651,0.651,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(458).to({y:127.4},9,cjs.Ease.get(-1)).to({_off:true},1).wait(12));

	// Слой 1
	this.instance_3 = new lib.Символ15();
	this.instance_3.setTransform(7.5,142.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:6.5,y:1.1},8,cjs.Ease.get(1)).wait(443).to({x:7.5,y:142.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Слой 3
	this.instance_4 = new lib.Символ17();
	this.instance_4.setTransform(-305.4,153.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({x:-306.4,y:12.5},5,cjs.Ease.get(1)).wait(438).to({x:-305.4,y:153.4},8,cjs.Ease.get(-1)).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-478,47.7,988.6,152.3);


// stage content:



(lib.fon_tv = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ26();
	this.instance.setTransform(583.7,754.7,1,1,0,0,0,0,196.9);

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(450,554);

	// Слой 1
	this.instance_2 = new lib.Символ25();
	this.instance_2.setTransform(450,300);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(336.5,299.4,1215.1,754.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
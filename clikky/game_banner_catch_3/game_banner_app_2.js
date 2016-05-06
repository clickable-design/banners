(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#00CCCC",
	manifest: [
		{src:"images/banner.png?1462530238169", id:"banner"},
		{src:"images/blink.png?1462530238169", id:"blink"},
		{src:"images/cactus.png?1462530238169", id:"cactus"},
		{src:"images/cloud.png?1462530238169", id:"cloud"},
		{src:"images/net.png?1462530238169", id:"net"},
		{src:"images/rock.png?1462530238169", id:"rock"},
		{src:"images/score.png?1462530238169", id:"score"},
		{src:"images/slingshot.png?1462530238169", id:"slingshot"},
		{src:"images/sqare.png?1462530238169", id:"sqare"},
		{src:"images/stars.png?1462530238169", id:"stars"},
		{src:"images/sun.png?1462530238169", id:"sun"}
	]
};



// symbols:



(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,140);


(lib.blink = function() {
	this.initialize(img.blink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,287);


(lib.cactus = function() {
	this.initialize(img.cactus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,265);


(lib.cloud = function() {
	this.initialize(img.cloud);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,112);


(lib.net = function() {
	this.initialize(img.net);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,181);


(lib.rock = function() {
	this.initialize(img.rock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,504);


(lib.score = function() {
	this.initialize(img.score);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,167);


(lib.slingshot = function() {
	this.initialize(img.slingshot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,182);


(lib.sqare = function() {
	this.initialize(img.sqare);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.stars = function() {
	this.initialize(img.stars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,227,42);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,254);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50900C").s().p("EiRpBpzMAAAjTlMEjTAAAMAAADTlg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sun();
	this.instance.setTransform(-124.5,-116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-116.5,254,254);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.banner();
	this.instance.setTransform(-319.6,-73.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#196900").s().p("EhAJAH1IJJpHInvnvQGaByGahWIAANpIBvCxQj1BNkAAAQj/AAkJhNgEAwNAH1IBvixIAAtzQHdBDGxhVIpJJHIHvHvQjgBLjpAAQjpAAjxhLg");
	this.shape.setTransform(0,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#196900").s().p("EhAJAHyQEmkYElkpQjxj5j+j2QGaByGahXIAANpIBvCyQjwBHj7AAQkEAAkQhNgEAwPAH4IBviyIAAtzQHdBIGvhSIpHJAIH3HqQjjBLjvAAQjnAAjyhGg");
	this.shape_1.setTransform(-0.2,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#196900").s().p("EhAIAHuQEmkMEmkvQjqj6kFj1QGaByGahWIAANpIBvCxQjrBDj1AAQkKAAkWhPgEAwRAH6IBvixIAAtzQHdBMGshPIpEI4IH/HmQjmBKj1AAQjmAAjyhBg");
	this.shape_2.setTransform(-0.4,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#196900").s().p("EhAIAHqQEnj/Enk2Qjjj7kMj0QGaByGahWIAANpIBvCxQjlA/jwAAQkQAAkdhRgEAwTAH8IBvixIAAtzQHdBQGqhMIpCIxIIHHhQjpBKj9AAQjjAAjyg8g");
	this.shape_3.setTransform(-0.6,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#196900").s().p("EhAIAHmQEojzEok7Qjdj9kSjyQGaByGahXIAANpIBvCyQjfA5jpAAQkXAAklhSgEAwUAH/IBwiyIAAtzQHdBVGohKIpAIrIIPHcQjtBJkEAAQjhAAjyg2g");
	this.shape_4.setTransform(-0.7,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#196900").s().p("EhAIAHjQEpjnEplCQjWj+kZjxQGaByGahWIAANpIBvCxQjYA1jjAAQkdAAkuhTgEAwWAIBIBwixIAAtzQHdBZGmhHIo+IjIIXHYQjxBIkNAAQjdAAjxgxg");
	this.shape_5.setTransform(-0.9,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#196900").s().p("EhAIAHfQEqjbEqlIQjQj/kfjwQGaByGahWIAANpIBvCxQjSAxjcAAQkjAAk3hVgEAwYAIDIBwixIAAtzQHdBeGjhFIo7IcIIgHTQj3BJkWAAQjaAAjugtg");
	this.shape_6.setTransform(-1.1,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#196900").s().p("EhAHAHbQErjOEqlOQjIkBknjuQGaByGahXIAANpIBvCyQjKArjVAAQkrAAk/hWgEAwaAIGIBwiyIAAtzQHdBjGhhCIo5IVIIoHOQj8BIkhAAQjWAAjqgng");
	this.shape_7.setTransform(-1.3,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#196900").s().p("EhAHAHXQEsjBErlVQjCkCktjtQGaByGahXIAANpIBvCyQjDAnjNAAQkyAAlJhYgEAwcAIIIBwiyIAAtzQHdBnGgg/Io4IOIIwHKQkCBHktAAQjQAAjmgig");
	this.shape_8.setTransform(-1.5,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#196900").s().p("EhAJAHTQEti1EslbQi7kEk0jrQGaByGahXIAANpIBvCyQi7AjjFAAQk6AAlThagEAwdAIKIBviyIAAtzQHdBsGdg9Io1IHII5HFQkJBHk7AAQjKAAjfgdg");
	this.shape_9.setTransform(-1.6,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#196900").s().p("EhAOAHPQEuipEtlhQi0kFk7jqQGaByGahXIAANpIBvCyQiyAfi8AAQlCAAlfhcgEAwaAIMIBviyIAAtzQHdBwGbg6IozIAIJBHAQkRBIlKAAQjDAAjXgZg");
	this.shape_10.setTransform(-1.3,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#196900").s().p("EhATAHLQEuidEvlnQiukGlBjpQGaByGahXIAANpIBvCyQipAbiyAAQlMAAlqhegEAwWAIOIBviyIAAtzQHeB1GZg4IoyH5IJKG8QkaBHldAAQi6AAjNgUg");
	this.shape_11.setTransform(-0.9,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#196900").s().p("EhAYAHHQEwiQEvluQiokIlHjnQGaByGahXIAANpIBvCyQigAXinAAQlVAAl3hggEAwTAIQIBviyIAAtzQHeB5GXg1IowHyIJSG3QklBIlxAAQivAAjBgQg");
	this.shape_12.setTransform(-0.6,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#196900").s().p("EhAdAHDQEwiEEwl0QigkJlPjmQGaByGahXIAANpIBvCyQiVATidAAQleAAmEhigEAwQAISIBviyIAAtzQHdB+GVgyIotHqIJaGyQkxBJmLAAQihAAixgMg");
	this.shape_13.setTransform(-0.3,13);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#196900").s().p("EhAiAG+QExh3Exl7QiakKlVjlQGaByGahWIAANpIBvCxQiKARiRAAQloAAmThmgEAwNAITIBvixIAAtzQHdCCGTgwIorHjIJiGuQlABKmqAAQiQAAicgJg");
	this.shape_14.setTransform(0,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#196900").s().p("EhAdAHCQEwiDEwl0QigkJlPjmQGaByGahXIAANpIBvCyQiUATicAAQlfAAmFhjgEAwQAISIBviyIAAtzQHdB+GVgyIotHqIJaGyQkxBJmMAAQihAAiwgMg");
	this.shape_15.setTransform(-0.3,13);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#196900").s().p("EhAYAHHQEviPEvlvQimkHlJjoQGaByGahWIAANpIBvCxQieAXinAAQlWAAl3hggEAwTAIQIBvixIAAtzQHdB5GXg0IovHwIJSG3QkmBIl1AAQitAAi+gQg");
	this.shape_16.setTransform(-0.6,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#196900").s().p("EhAUAHKQEviaEulpQiskGlDjpQGaByGahWIAANpIBvCxQinAbiwAAQlNAAlthfgEAwWAIOIBvixIAAtzQHdB1GZg3IoxH3IJLG7QkcBIlgAAQi4AAjLgUg");
	this.shape_17.setTransform(-0.9,13.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#196900").s().p("EhAPAHOQEuilEtljQizkFk8jqQGaByGahXIAANpIBvCyQivAdi5AAQlGAAlhhcgEAwZAINIBviyIAAtzQHdBxGbg5IozH+IJDG/QkTBHlPAAQjBAAjUgXg");
	this.shape_18.setTransform(-1.2,13.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#196900").s().p("EhAKAHSQEsixEtldQi5kEk2jrQGaByGahXIAANpIBvCyQi4AhjCAAQk8AAlXhagEAwcAILIBviyIAAtzQHdBtGdg8Io1IFII7HDQkLBHlAAAQjIAAjcgbg");
	this.shape_19.setTransform(-1.5,13.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#196900").s().p("EhAHAHWQEsi9EslXQjAkDkvjsQGaByGahXIAANpIBvCyQjAAljKAAQk1AAlNhYgEAwdAIJIBviyIAAtzQHeBpGeg+Io3ILII0HIQkEBHkyAAQjPAAjjggg");
	this.shape_20.setTransform(-1.6,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#196900").s().p("EhAHAHZQErjIErlRQjGkCkpjtQGaByGahXIAANpIBvCyQjHApjRAAQkvAAlDhXgEAwbAIHIBwiyIAAtzQHdBlGghBIo4ISIIsHMQj/BHkmAAQjTAAjpgkg");
	this.shape_21.setTransform(-1.4,14.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#196900").s().p("EhAIAHdQErjUEqlLQjMkAkjjvQGaByGahXIAANpIBvCyQjOAtjYAAQkoAAk7hVgEAwZAIFIBwiyIAAtzQHdBhGihEIo6IZIIkHQQj5BIkcAAQjYAAjsgpg");
	this.shape_22.setTransform(-1.2,14.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#196900").s().p("EhAIAHhQEqjgEplFQjSj/kdjwQGaByGahXIAANpIBvCyQjUAxjfAAQkhAAkzhTgEAwYAIDIBviyIAAtzQHdBcGlhFIo9IfIIdHVQj1BIkSAAQjcAAjugug");
	this.shape_23.setTransform(-1.1,14.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#196900").s().p("EhAIAHkQEpjrEplAQjZj9kWjyQGaByGahWIAANpIBuCxQjaA3jlAAQkbAAkrhTgEAwWAIAIBvixIAAtzQHdBYGnhIIo/IlIIWHaQjxBIkJAAQjfAAjxgzg");
	this.shape_24.setTransform(-0.9,14.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#196900").s().p("EhAIAHoQEnj3Epk6Qjfj8kQjzQGaByGahWIAANpIBuCxQjgA7jrAAQkVAAkjhRgEAwUAH+IBvixIAAtzQHdBUGphLIpBIsIIOHeQjtBJkCAAQjhAAjyg4g");
	this.shape_25.setTransform(-0.7,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#196900").s().p("EhAIAHrQEnkCEnk0Qjlj7kKj0QGaByGahXIAANqIBvCxQjmA/jxAAQkPAAkchQgEAwSAH8IBvixIAAt0QHeBQGqhNIpDIzIIGHiQjpBJj7AAQjjAAjzg8g");
	this.shape_26.setTransform(-0.5,15.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#196900").s().p("EhAIAHuQEmkNEmkuQjrj6kEj1QGaByGahXIAANpIBvCyQjrBDj2AAQkKAAkVhPgEAwQAH6IBwiyIAAtzQHdBMGshQIpEI6IH+HmQjmBKj0AAQjmAAjzhBg");
	this.shape_27.setTransform(-0.3,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#196900").s().p("EhAJAHyQEmkZElkoQjxj5j+j2QGaByGahXIAANpIBvCyQjxBHj7AAQkEAAkPhNgEAwOAH4IBwiyIAAtzQHdBHGvhSIpHJBIH2HqQjjBLjuAAQjnAAjzhGg");
	this.shape_28.setTransform(-0.1,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.6,-73.7,821.3,147.4);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#57980F").ss(4,2,0,3).p("AtnqWIX+jRIDRX+I3+DRg");
	this.shape.setTransform(-1.2,-26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-116.4,178.9,179.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cloud();
	this.instance.setTransform(-205,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-56,410,112);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF2C3B").s().p("AhrBrIgOhnIgfjbIAAgCQB+BpCDhJQAYgNAYgTIgVB+IggC8Qg5B5gzAAQgzAAgwhvg");
	this.shape.setTransform(1.7,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282B33").s().p("AoAmhIAsg6IFNLaIAfDdgACqD+QgYASgYANIFbr4IAsA6IlsMcg");
	this.shape_1.setTransform(0,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-58.3,102.7,116.7);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.slingshot();
	this.instance.setTransform(-61.5,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-91,123,182);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blink();
	this.instance.setTransform(-240.5,-143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.5,-143.5,481,287);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.net();
	this.instance.setTransform(-101,-90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-90.5,202,181);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("AgMK5IAAzbIAAgBIAeAAIAAACIAATagAA1qXIhnAAIgJAAIAAghIAUAAIAIAAIA+AAIAdAAIAAAhg");
	this.shape.setTransform(0.1,165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE241D").s().p("AgCBsQgBpUi7mzQBsA/BaBmQD4ENABF9QAAF8kKG8QgkA8jTCUQD+mlAAmLg");
	this.shape_1.setTransform(49.8,-17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2C3B").s().p("AATR6IAAgCIgeAAIAAABQg/ABhDAQIBciGIBnAAIBkCSQhBgZhGgDgAgePkIgIAAQlagTjkmoQiXkagzkFQgaiEgBiCQAAh9AahwQA2joCmi2QD3kNFcgBQFbAAD3EMQD3EOABF+QAAF7kLG7QjwGPkwAaIABACgAHugWQABGKj/GkQDTiUAlg8QEMm8gBl8QgBl9j3kNQhdhmhrg+QC7GzAAJVg");
	this.shape_2.setTransform(0,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.2,-121.8,168.5,356.5);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D29D3A","#DCA73D","#E5B140"],[0,0.255,0.6],-66.5,0,66.5,0).s().p("AAAGgImaDYIBPnJIlNlDIHMhCIDMmhIDNGhIHMBCIlNFDIBPHJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-63.3,133.1,126.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],130.2,-198.4,347.1,393).s().p("A4bVzIAAAAMgy3AAAQBoh0CwiWQUrxvZpq2QE4iEFRhrQGliFHLhfQROjjUxAAQUwAARRDjMAAAAoCg");
	this.shape.setTransform(232.3,-103);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],156,-171.3,350.3,339.5).s().p("AvwS1IAAAAMgtlAAAQBdhkCeiDQSivUW+pXUAW9gJXAggAAAQLgAAKTBLQlQBrk4CEQ5pK10rRvQiwCXhoB0MAy3AAAIAAAAg");
	this.shape_1.setTransform(-253.1,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1 - копия: 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],-338.3,-122.3,-146.4,388.3).s().p("EgkSAMCIAA37QQpgpQAC1QbsE4JkMXQBvCPA9CRg");
	this.shape_2.setTransform(-571.8,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFA500","#925500","#925500","#925500"],[0,1,1,1],-192,-140.5,-0.1,370.1).s().p("Eg8UAO4IAA08QJwjlMfiUQdnlfbqE4QbuE4JkMXQD7FFgEFIg");
	this.shape_3.setTransform(-418,-58.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой 3
	this.instance = new lib.cactus();
	this.instance.setTransform(-788.1,-381.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.rock();
	this.instance_1.setTransform(60,-672.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-804.1,-672.1,1518.4,708.7);


(lib.Символ23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.729)").s().p("As/JuIDS2tIWtDSIjSWtg");
	this.shape_29.setTransform(-1.1,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-107.8,166.5,166.5);


(lib.title_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ВАШ ПРИЗ", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 486;
	this.text.setTransform(-2,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.8,-69.5,489.8,144);


(lib.title_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ВЫ СОБРАЛИ 3 ЗВЕЗДЫ!", "bold 35px 'Arial'", "#5E6D45");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 615;
	this.text.setTransform(-2.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.8,-1.3,618.9,117.7);


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsCPIAAkdIDTAAIAAAxIiYAAIAAA/ICNAAIAAAvIiNAAIAABOICeAAIAAAwg");
	this.shape.setTransform(237.1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7CPIAAi5IhyC5Ig5AAIAAkdIA2AAIAAC9IByi9IA5AAIAAEdg");
	this.shape_1.setTransform(208.9,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4CPIAAh9IhvAAIAAB9Ig6AAIAAkdIA6AAIAABxIBvAAIAAhxIA6AAIAAEdg");
	this.shape_2.setTransform(180.1,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhsCPIAAkdIDTAAIAAAxIiYAAIAAA/ICNAAIAAAvIiNAAIAABOICdAAIAAAwg");
	this.shape_3.setTransform(152.9,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABsCQIgjhKIgDgGIgHgOQgLgUgHgGQgHgGgKAAIAAB+Ig3AAIAAh+QgKAAgHAGQgHAFgLAVIgHAOIgDAGIgjBKIhEAAIAnhPQAPgdANgRQAMgRAUgEQgQgIgGgKQgGgKgFgPQgKgcgFgJQgFgJgIgEQgJgFgSAAIgIAAIAAgrIAJABQAqAAARAMQASAMARAtQANAiAIAKQAHAJAOABIAAh6IA3AAIAAB6QAOgBAIgJQAHgKANgiQARgtASgMQASgMApAAIAJgBIAAArIgJAAQgRAAgIAFQgJAEgFAJQgFAJgKAcQgFAPgGAKQgGAKgQAIQATAEANARQANAQAPAeIAnBPg");
	this.shape_4.setTransform(121,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhkBsQglgmAAhFQAAgqANgdQAJgWARgRQARgSAUgIQAbgMAiAAQA+AAAmAoQAmAnAABEQAABFglAnQgmAng/AAQg+AAgmgngAg4hIQgWAXAAAxQAAAwAXAZQAWAZAhAAQAiAAAXgZQAWgZAAgwQAAgxgWgYQgWgZgjABQgiAAgWAZg");
	this.shape_5.setTransform(87.4,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah4COIAAgtIAMAAQATAAAGgFQAGgFAAgTIAAgxIAAiiIDGAAIAAEdIg5AAIAAjsIhUAAIAAB4QAAA1gEAVQgEAUgNAMQgOAMgdAAg");
	this.shape_6.setTransform(56.6,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA7CPIAAi5IhyC5Ig5AAIAAkdIA2AAIAAC9IByi9IA5AAIAAEdg");
	this.shape_7.setTransform(29.4,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhsCPIAAkdIBdAAQAyAAAQAFQAZAGARAWQAQAVAAAjQAAAagJASQgKAQgPAKQgOAKgQAEQgUAEgmAAIglAAIAABsgAgygMIAfAAQAgAAAMgEQAMgFAGgJQAHgKAAgNQAAgPgKgKQgJgLgOgCQgKgCgdAAIgcAAg");
	this.shape_8.setTransform(2.2,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA4CPIAAjtIhvAAIAADtIg5AAIAAkdIDhAAIAAEdg");
	this.shape_9.setTransform(-26,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7CyIAAi5IhyC5Ig5AAIAAkcIA2AAIAAC9IByi9IA5AAIAAEcgAgoiIQgRgPgCgaIAbAAQABAOAIAHQAJAHAOAAQAQAAAIgHQAJgHABgOIAbAAQgDAagQAPQgQAPgaAAQgYAAgQgPg");
	this.shape_10.setTransform(-65.9,-2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABQCPIgZhBIhwAAIgYBBIg9AAIBvkdIA7AAIBzEdgAAlAdIgmhoIgnBoIBNAAg");
	this.shape_11.setTransform(-94.7,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA3CPIAAhzQgSAHgRAEQgRAEgOAAQgrAAgdgUQgcgUAAgwIAAhhIA5AAIAABFQAAAhADALQACALAMAIQAMAIAYAAQAQAAAPgEQAOgEALgIIAAh8IA6AAIAAEdg");
	this.shape_12.setTransform(-123.4,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhWCNIAAgrIAXABQAUAAAJgHQAIgHAJgZIhqjMIBAAAIBCCUIA5iUIA8AAIhhDZQgQAigOATQgRASgZABQgaAAgPgEg");
	this.shape_13.setTransform(-149.6,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah4COIAAgtIAMAAQATAAAGgFQAGgFAAgTIAAgxIAAiiIDGAAIAAEdIg5AAIAAjsIhUAAIAAB4QAAA1gEAVQgEAUgNAMQgOAMgdAAg");
	this.shape_14.setTransform(-177.3,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhkBsQglgmAAhFQAAgqANgdQAJgWARgRQARgSAUgIQAbgMAiAAQA+AAAmAoQAmAnAABEQAABFglAnQgmAng/AAQg+AAgmgngAg4hIQgWAXAAAxQAAAwAXAZQAWAZAhAAQAiAAAXgZQAWgZAAgwQAAgxgWgYQgWgZgjABQgiAAgWAZg");
	this.shape_15.setTransform(-205.6,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA4CPIAAjtIhvAAIAADtIg5AAIAAkdIDhAAIAAEdg");
	this.shape_16.setTransform(-235.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-23.1,504.1,48.7);


(lib.title_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrCPIAAkdIA6AAIAAEdgAikCPIAAkdIA6AAIAABzIBOAAQAcAAAXAIQAVAIAPAUQAPAVAAAcQAAAdgPAVQgQAVgTAHQgSAHgiAAgAhqBfIA5AAQAbAAALgDQAKgDAHgJQAIgJAAgOQAAgTgOgKQgLgJgkAAIg7AAg");
	this.shape.setTransform(179,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABZCuIAAg+IiyAAIAAA+IgvAAIAAhvIAYAAQARgkAGgvQAFgxABhKIAAgeIDEAAIAADsIAZAAIAABvgAg0A/IBrAAIAAi8IhTAAQAACAgYA8g");
	this.shape_1.setTransform(144.7,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGCFQgagPgNgqIA1gRQAIAaAOAHQAOAIAUAAQAZAAAMgLQANgMAAgPQAAgTgOgKQgOgLgbAAIgNAAIAAgpIAHAAQAYAAAOgMQAOgMAAgTQAAgQgLgLQgMgKgTAAQgkAAgKAkIg5gOQAThFBVgBQAwAAAaAXQAaAVAAAfQAAAUgMARQgMAQgXAMQAcAJAOARQAPASAAAaQAAAmgcAXQgcAXg2AAQgsAAgagOg");
	this.shape_2.setTransform(117.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrCPIAAkdIDSAAIAAAxIiZAAIAAA/ICOAAIAAAvIiOAAIAABOICeAAIAAAwg");
	this.shape_3.setTransform(93.1,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2CPIAAkdIByAAQAgAAARADQAQADAOAJQANAJAJAPQAIAPAAASQAAAVgKAQQgLARgTAJQAaAHAOARQAOASAAAZQAAATgJATQgJASgPALQgQALgXADIhEACgAg9BfIA2AAQAdAAAJgCQAMgDAJgJQAIgJAAgPQAAgNgHgJQgGgJgMgEQgMgEglAAIgvAAgAg9gcIAmAAIAogBQAPgBAJgJQAIgIAAgOQAAgOgHgIQgIgIgOgCIgvgBIgiAAg");
	this.shape_4.setTransform(65.3,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGCFQgagPgNgqIA1gRQAIAaAOAHQAOAIAUAAQAZAAAMgLQANgMAAgPQAAgTgOgKQgOgLgbAAIgNAAIAAgpIAHAAQAYAAAOgMQAOgMAAgTQAAgQgLgLQgMgKgTAAQgkAAgKAkIg5gOQAThFBVgBQAwAAAaAXQAaAVAAAfQAAAUgMARQgMAQgXAMQAcAJAOARQAPASAAAaQAAAmgcAXQgcAXg2AAQgsAAgagOg");
	this.shape_5.setTransform(37.2,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA7CyIAAi5IhyC5Ig5AAIAAkcIA2AAIAAC9IByi9IA5AAIAAEcgAgoiIQgRgPgCgaIAbAAQABAOAIAHQAJAHAOAAQAQAAAIgHQAJgHABgOIAbAAQgDAagQAPQgQAPgaAAQgYAAgQgPg");
	this.shape_6.setTransform(-0.1,-4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABQCPIgZhBIhwAAIgYBBIg9AAIBvkdIA7AAIBzEdgAAlAdIgmhoIgnBoIBNAAg");
	this.shape_7.setTransform(-29,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhsCPIAAkdIBdAAQAyAAAQAFQAZAGARAWQAQAVAAAjQAAAagJASQgKAQgPAKQgOAKgQAEQgUAEgmAAIglAAIAABsgAgygMIAfAAQAgAAAMgEQAMgFAGgJQAHgKAAgNQAAgPgKgKQgJgLgOgCQgKgCgdAAIgcAAg");
	this.shape_8.setTransform(-56.1,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA7CPIAAi5IhyC5Ig5AAIAAkdIA2AAIAAC9IByi9IA5AAIAAEdg");
	this.shape_9.setTransform(-84.4,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah2CPIAAkdIDUAAIAAAwIibAAIAABDIBMAAQAgAAAVAIQAVAIAPATQAPAVAAAcQAAAdgPAVQgPAVgTAHQgTAIgkAAgAg9BfIA5AAQAZAAALgDQAKgDAJgJQAIgJAAgOQAAgUgOgJQgPgJgfAAIg8AAg");
	this.shape_10.setTransform(-112.5,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhkBsQglgmAAhFQAAgqANgdQAJgWARgRQARgSAUgIQAbgMAiAAQA+AAAmAoQAmAnAABEQAABFglAnQgmAng/AAQg+AAgmgngAg4hIQgWAXAAAxQAAAwAXAZQAWAZAhAAQAiAAAXgZQAWgZAAgwQAAgxgWgYQgWgZgjABQgiAAgWAZg");
	this.shape_11.setTransform(-143,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhXBsQgkgmAAhEQAAhGAlgnQAlgoA6AAQA0ABAhAfQAUASAJAiIg5AOQgFgXgQgNQgQgNgXABQgeAAgUAWQgUAXAAA0QAAA0AUAXQATAXAeAAQAXAAAQgPQARgPAHgfIA4ASQgNAvgeAXQgeAWguAAQg3AAglgng");
	this.shape_12.setTransform(-173.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.6,-24.4,401.3,48.7);


(lib.rate_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxtDSIAAmjMAjbAAAIAAGjg");

	// Слой 1 - копия
	this.instance = new lib.stars();
	this.instance.setTransform(-113.6,-20.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5,-20.6,226.9,41.7);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.sqare();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.btn_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТАНОВИТЬ", "bold 27px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 325;
	this.text.setTransform(-2.1,-44.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.7,-44.1,329.5,88.2);


(lib.app_name = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("BEST GAME", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 619;
	this.text.setTransform(-2,-39.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.4,-39.3,623,78.7);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-116.5,254,254);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// Слой 3
	this.instance = new lib.Символ15();
	this.instance.setTransform(1.9,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.37,y:-54.6},4).to({scaleY:0.49,y:-47.7},2).to({scaleY:1,y:-17.9},12).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ14();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-91,123,182);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.5,-63.3,133.1,126.6);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8F2BF","#FECD2F","#F3CE46"],[0,0.835,1],0,0,0,0,0,42.1).s().p("AAAEOIkJCMIAzkpIjYjRIEqgrICEkOICFEOIEqArIjYDRIAzEpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance = new lib.Символ9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4 - копия
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F8F2BF","#FECD2F","#F3CE46"],[0,0.424,1],0,0,0,0,0,86.4).s().p("AAAIqIoiEfIBpphIm6mtIJjhZIEQoqIERIqIJjBZIm6GtIBoJhg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5B140").s().p("AAAIqIoiEfIBpphIm6mtIJjhZIEQoqIERIqIJjBZIm6GtIBoJhg");
	this.shape_2.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-84.1,176.9,171.3);


(lib.score_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.parent.header_1.gotoAndPlay(1);
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
		this.parent.star_1.visible = false;
		this.parent.star_2.visible = false;
		this.parent.star_3.visible = false;
		this.parent.star_4.visible = false;
		this.parent.victory_mc.gotoAndPlay(1);
		this.parent.net.visible = false;
		this.parent.score.visible = false;
		this.parent.target.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(19).call(this.frame_21).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9000E").s().p("Ah1DHQgsg4AAiPQAAiNAxg+QApgzBHAAQBIAAApA0QAxA9AACNQAACOgxA+QgpAzhIAAQhIAAgtg4gAgeijQgNAKgIAdQgKAlAABXQAABYAJAhQAJAhAOALQANALAQAAQARAAANgLQAOgMAIgcQAKglAAhYQAAhXgJggQgJgigOgKQgNgMgRAAQgQAAgOAMg");
	this.shape.setTransform(-2.9,-31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9000E").s().p("AAND7IAAloQgyAxhHAYIAAhXQAlgNAsgiQAqgjAQgtIBPAAIAAH1g");
	this.shape_1.setTransform(-5.6,-31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C9000E").s().p("AinD7QAGgzAbgsQAbguBRhLQA/g7APgVQATgeAAgdQAAgggRgRQgRgSgeAAQgdAAgRASQgSASgDArIhggKQAJhPAtgjQAtgiBCAAQBKAAAqAoQArAoAAA7QAAAigMAfQgMAegbAgQgRAWguAqIg3A3IgUAbIC9AAIAABZg");
	this.shape_2.setTransform(-3.6,-31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C9000E").s().p("AhxDYQgtgngHg/IBdgLQAEAjAUATQATATAcAAQAcAAAUgXQAVgWAAgnQAAgkgUgVQgTgVgcAAQgRAAgaAHIALhMQAlABAVgSQAUgSAAgeQAAgZgPgPQgPgPgXAAQgZAAgRARQgRARgEAhIhZgPQAJguATgbQATgbAhgQQAhgPAqAAQBEAAArAtQAjAlAAAuQAABChIAnQArAKAaAeQAaAgAAAtQAABCgwAvQgwAuhGAAQhEAAgtgng");
	this.shape_3.setTransform(-2.9,-31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(19));

	// Режим изоляции
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDF59").s().p("AAABIIhXBAIAihoIhZg/IBuAAIAghoIAhBoIBvAAIhZA/IAiBog");
	this.shape_4.setTransform(-40.9,58.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDF59").s().p("ADABXIhZBAIAjhoIhag/IBuAAIAihoIAiBoIBuAAIhZA/IAjBogAi/A5IhZBAIAihoIhZg/IBuAAIAihoIAiBoIBuAAIhZA/IAiBog");
	this.shape_5.setTransform(-21.6,60.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDF59").s().p("AAABXIhXBAIAjhoIhag/IBuAAIAghoIAiBoIBuAAIhZA/IAjBogAGAA5IhZBAIAihoIhZg/IBuAAIAihoIAiBoIBuAAIhZA/IAiBogAl/A5IhZBAIAihoIhZg/IBuAAIAihoIAiBoIBuAAIhZA/IAiBog");
	this.shape_6.setTransform(-2.4,60.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(19));

	// Слой 1
	this.instance = new lib.score();
	this.instance.setTransform(-117.5,-83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

	// Слой 5
	this.instance_1 = new lib.icon();
	this.instance_1.setTransform(4.3,-111.4,0.296,0.296,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-183.8,235,267.3);


(lib.rate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.rate_in = new lib.rate_in();

	this.timeline.addTween(cjs.Tween.get(this.rate_in).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B5C0").s().p("AMUDPQgEgDgCgEQgBgEABgFIAAgGIAbh7IAAgBIAAgCQgBgEgEgDIhghPQgEgEgBgEQgBgEABgEQgBgDABgEQABgFAEgDQAEgDAEAAIB+gMQAFAAADgDQAEgCABgFIAwh0QACgFAEgCQAEgDAFAAQAEAAAEACIAEAEIACADIAyB0QACAEAEADQADACAFABIB9AJQAFAAAEADQAEADABAFQACAEgBAEIAAAHQgCAEgDAEIhfBRQgDADgCAEIAAACIAAABIAeB6QABAEgBADQABAEgCAEQgBAFgEADQgEADgFAAQgEAAgEgCIhthBQgEgCgEAAQgFAAgDACIhsBDQgEACgEAAQgFAAgEgDgAFIDPQgEgDgCgEQgBgEABgFIAAgGIAbh7IAAgBIAAgCQgBgEgEgDIhghPQgEgEgBgEQgBgEABgEQgBgDABgEQABgFAEgDQAEgDAEAAIB+gMQAFAAADgDQAEgCABgFIAwh0QACgFAEgCQAEgDAFAAQAEAAAEACQAEADACAEIAyB0QACAEAEADQADACAFABIB9AJQAFAAAEADQAEADABAFQACAEgBAEIAAAHQgCAEgDAEIhfBRQgDADgCAEIAAACIAAABIAeB6IAAAHQABAEgCAEQgBAFgEADQgEADgFAAQgEAAgEgCIhthBQgEgCgEAAQgFAAgDACIhsBDQgEACgEAAQgFAAgEgDgAiBDPQgEgDgCgEQgBgEABgFIAAgGIAbh7IAAgBIAAgCQgBgEgEgDIhghPQgEgEgBgEQgBgEABgEQgBgDABgEQABgFAEgDQAEgDAEAAIB+gMQAFAAADgDQAEgCABgFIAwh0QACgFAEgCQAEgDAEAAQADAAAEACQAEADACAEIAyB0QACAEAEADQADACAFABIB9AJQAFAAAEADQAEADABAFQACAEgBAEIAAAHQgCAEgDAEIhfBRQgDADgCAEIAAACIAAABIAeB6IAAAHQABAEgCAEQgBAFgEADQgEADgFAAQgEAAgEgCIhthBQgEgCgEAAQgDAAgDACIhsBDQgEACgEAAQgFAAgEgDgApODPQgEgDgBgEQgCgEABgFIAAgGIAch7IAAgBIgBgCQgBgEgDgDIhhhPQgDgEgCgEIAAgIIAAgHQACgFAEgDQADgDAFAAIB+gMQAEAAAEgDQADgCACgFIAwh0QACgFADgCQAEgDAFAAQAFAAAEACQAEADACAEIAyB0QACAEADADQAEACAEABIB+AJQAFAAADADQAEADACAFQABAEgBAEIAAAHQgBAEgEAEIhfBRQgDADgBAEIgBACIAAABIAeB6QABAEAAADQABAEgCAEQgCAFgDADQgEADgFAAQgFAAgEgCIhthBQgDgCgFAAQgEAAgEACIhrBDQgEACgFAAQgFAAgEgDgAwaDPQgEgDgBgEQgCgEABgFIAAgGIAch7IAAgBIgBgCQgBgEgDgDIhhhPQgDgEgCgEIAAgIIAAgHQACgFAEgDQADgDAFAAIB+gMQAEAAAEgDQADgCACgFIAwh0QACgFADgCQAEgDAFAAQAFAAAEACQAEADACAEIAyB0QACAEADADQAEACAEABIB+AJQAFAAADADQAEADACAFQABAEgBAEIAAAHQgBAEgEAEIhfBRQgDADgBAEIgBACIAAABIAeB6QABAEAAADQABAEgCAEQgCAFgDADQgEADgFAAQgFAAgEgCIhthBQgDgCgFAAQgEAAgEACIhrBDQgEACgFAAQgFAAgEgDg");
	this.shape.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,-21,227.4,42.6);


(lib.net_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Слой 2
	this.instance = new lib.Символ11();
	this.instance.setTransform(0,12.5,0.445,0.313);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:6.1,y:57.3},6).to({alpha:0},7).wait(1));

	// net.png
	this.instance_1 = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.08,y:7.2},5,cjs.Ease.get(1)).to({scaleY:0.89,y:-10},5,cjs.Ease.get(-1)).to({scaleY:1,y:0},4,cjs.Ease.get(1)).wait(1));

	// Слой 11
	this.star_4 = new lib.star();
	this.star_4.setTransform(22.9,26.5,0.565,0.565,-30,0,0,0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.star_4).to({y:39.5},5,cjs.Ease.get(1)).to({y:5},5,cjs.Ease.get(-1)).to({y:26.5},4,cjs.Ease.get(1)).wait(1));

	// Слой 10
	this.star_3 = new lib.star();
	this.star_3.setTransform(-39.4,-11.9,0.565,0.565,30,0,0,0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.star_3).to({y:1.1},5,cjs.Ease.get(1)).to({y:-33.4},5,cjs.Ease.get(-1)).to({y:-11.9},4,cjs.Ease.get(1)).wait(1));

	// Слой 9
	this.star_2 = new lib.star();
	this.star_2.setTransform(36.3,-18.6,0.565,0.565,0,0,0,0,1.5);

	this.timeline.addTween(cjs.Tween.get(this.star_2).to({y:-5.6},5,cjs.Ease.get(1)).to({y:-40.1},5,cjs.Ease.get(-1)).to({y:-18.6},4,cjs.Ease.get(1)).wait(1));

	// Слой 8
	this.star_1 = new lib.star();
	this.star_1.setTransform(-37.8,24.6,0.565,0.565,37,0,0,0,1.4);

	this.timeline.addTween(cjs.Tween.get(this.star_1).to({y:37.6},5,cjs.Ease.get(1)).to({y:3.2},5,cjs.Ease.get(-1)).to({y:24.6},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.8,-90.5,207.9,183.8);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.title_1 = new lib.title_1();
	this.title_1.setTransform(5.2,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.title_1).wait(21).to({regX:4.9,regY:-1,x:10.1,y:2.6,alpha:0.495},0).wait(1).to({y:10.4,alpha:0.278},0).wait(1).to({y:15.2,alpha:0.145},0).wait(1).to({y:18,alpha:0.069},0).wait(1).to({y:19.5,alpha:0.027},0).wait(1).to({regX:0,regY:0,x:5.2,y:21.5,alpha:0},0).wait(34).to({regX:4.9,regY:-1,x:10.1,y:2.3,alpha:0.505},0).wait(1).to({y:-5.5,alpha:0.722},0).wait(1).to({y:-10.3,alpha:0.855},0).wait(1).to({y:-13,alpha:0.931},0).wait(1).to({y:-14.5,alpha:0.973},0).wait(1).to({regX:0,regY:0,x:5.2,alpha:1},0).wait(1));

	// Слой 2
	this.title_2 = new lib.title_2();
	this.title_2.setTransform(5.2,21.5);
	this.title_2.alpha = 0;
	this.title_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_2).wait(26).to({_off:false},0).wait(1).to({regX:0.5,regY:-2.5,x:5.7,y:1.1,alpha:0.505},0).wait(1).to({y:-6.6,alpha:0.722},0).wait(1).to({y:-11.3,alpha:0.855},0).wait(1).to({y:-14,alpha:0.931},0).wait(1).to({y:-15.5,alpha:0.973},0).wait(1).to({regX:0,regY:0,x:5.2,y:-14,alpha:1},0).wait(22).to({regX:0.5,regY:-2.5,x:5.7,y:1.4,alpha:0.495},0).wait(1).to({y:9.1,alpha:0.278},0).wait(1).to({y:13.9,alpha:0.145},0).wait(1).to({y:16.6,alpha:0.069},0).wait(1).to({y:18,alpha:0.027},0).wait(1).to({regX:0,regY:0,x:5.2,y:21.5,alpha:0},0).wait(7));

	// Слой 5
	this.instance = new lib.Символ23();
	this.instance.setTransform(3.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407.5,-73.4,821.3,147.4);


(lib.cloud_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-50,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1490.4},399).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255,-56,410,112);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.btn_txt = new lib.btn_txt();
	this.btn_txt.setTransform(3.9,12.6);

	this.timeline.addTween(cjs.Tween.get(this.btn_txt).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#50900C").s().p("ABVCPQhXAAg/hGQg+hGAAhgIAAgxQAyB+B6BkQAoAgArAbg");
	this.shape.setTransform(-152.9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1 - копия: 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#50900C").s().p("ARXG3QAsgbAoghQDRirAAjxQAAjsjGipIEmAAQBZAAA/BGQA/BGAABjIAAGPQAABjg/BGQg/BGhZAAgA50ljQAngsAzgQQhqBdguByQAGhVA4g+g");
	this.shape_1.setTransform(5.7,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1 - копия
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54960E").s().p("A3qG3QhZAAg/hGQg/hGAAhjIAAmPQAAhjA/hGQA/hGBZAAMAvVAAAQBZAAA/BGQA/BGAABjIAAGPQAABjg/BGQg/BGhZAAg");
	this.shape_2.setTransform(4.2,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#196900").s().p("A3qG2QhZAAg/hGQg/hFAAhjIAAmPQAAhjA/hGQA/hFBZAAMAvVAAAQBZAAA/BFQA/BGAABjIAAGPQAABjg/BFQg/BGhZAAg");
	this.shape_3.setTransform(4.2,-15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.8,-62,346.1,118.7);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ26();
	this.instance.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-116.5,254,254);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.target_1 = new lib.Символ13();

	this.timeline.addTween(cjs.Tween.get(this.target_1).to({y:10},7,cjs.Ease.get(-1)).to({y:20},7,cjs.Ease.get(1)).to({y:10.7},7,cjs.Ease.get(-1)).to({y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-91,123,182);


(lib.victory_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Слой 14
	this.instance = new lib.Символ30();
	this.instance.setTransform(-1.9,-0.9);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ30(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(44));

	// Слой 12
	this.btn = new lib.btn();
	this.btn.setTransform(-6.1,247.7);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(33).to({_off:false},0).wait(1).to({regX:4.2,regY:-2.7,x:-1.9,y:238.8,alpha:0.316},0).wait(1).to({y:234.9,alpha:0.514},0).wait(1).to({y:232.3,alpha:0.647},0).wait(1).to({y:230.4,alpha:0.747},0).wait(1).to({y:228.9,alpha:0.822},0).wait(1).to({y:227.8,alpha:0.88},0).wait(1).to({y:226.9,alpha:0.924},0).wait(1).to({y:226.3,alpha:0.957},0).wait(1).to({y:225.8,alpha:0.982},0).wait(1).to({regX:0,regY:0,x:-6.1,y:228.2,alpha:1},0).wait(2));

	// Слой 11
	this.app_name = new lib.app_name();
	this.app_name.setTransform(-2,171.2);
	this.app_name.alpha = 0;
	this.app_name._off = true;

	this.timeline.addTween(cjs.Tween.get(this.app_name).wait(30).to({_off:false},0).wait(1).to({y:159,alpha:0.324},0).wait(1).to({y:151,alpha:0.536},0).wait(1).to({y:145.6,alpha:0.68},0).wait(1).to({y:141.5,alpha:0.79},0).wait(1).to({y:138.4,alpha:0.872},0).wait(1).to({y:136.5,alpha:0.924},0).wait(1).to({y:135.3,alpha:0.956},0).wait(1).to({y:134.4,alpha:0.98},0).wait(1).to({y:133.7,alpha:1},0).wait(6));

	// Слой 9
	this.rate = new lib.rate();
	this.rate.setTransform(-2,60.5);
	this.rate.alpha = 0;
	this.rate._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rate).wait(26).to({_off:false},0).wait(1).to({regX:0.1,regY:0.4,x:-1.9,y:51.9,alpha:0.449},0).wait(1).to({y:47.9,alpha:0.648},0).wait(1).to({y:45.4,alpha:0.773},0).wait(1).to({y:43.7,alpha:0.858},0).wait(1).to({y:42.5,alpha:0.915},0).wait(1).to({y:41.8,alpha:0.954},0).wait(1).to({y:41.2,alpha:0.981},0).wait(1).to({regX:0,regY:0,x:-2,y:40.5,alpha:1},0).wait(11));

	// Слой 6
	this.icon = new lib.icon();
	this.icon.setTransform(-2,-92.9,0.055,0.055,-15);
	this.icon._off = true;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(16).to({_off:false},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:-9.7},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-6.2},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-4.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,rotation:-2.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-1.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-1.3},0).wait(1).to({scaleX:0.33,scaleY:0.33,rotation:-0.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-0.5},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-0.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:0},0).wait(19));

	// Слой 8
	this.instance_1 = new lib.Символ22();
	this.instance_1.setTransform(-0.6,-66.7,0.192,0.192,30);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(1).to({regX:-1.2,regY:-26.8,scaleX:0.55,scaleY:0.55,rotation:16.8,x:3,y:-81},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:11.5,x:2.3,y:-85},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:8.3,x:1.5,y:-87.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:5.6,x:0.6,y:-89.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:3.7,x:-0.2,y:-90.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:2.4,x:-0.7,y:-91.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:1.4,x:-1.1,y:-92.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.8,x:-1.5,y:-93},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:0.3,x:-1.7,y:-93.3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-0.6,y:-66.7},0).wait(13));

	// Слой 7
	this.instance_2 = new lib.Символ23_1();
	this.instance_2.setTransform(-0.7,-66.8,0.304,0.304,-45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(1).to({regX:-1.2,regY:-24.6,scaleX:0.59,scaleY:0.59,rotation:-26.3,x:-7.8,y:-79.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-18.4,x:-7,y:-83.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-13.6,x:-6.1,y:-85.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-9.7,x:-5.2,y:-87.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-6.7,x:-4.3,y:-88.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-4.6,x:-3.6,y:-89.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-3,x:-3.1,y:-90.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-1.8,x:-2.6,y:-90.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-1,x:-2.3,y:-91},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.4,x:-2,y:-91.2},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-0.7,y:-66.8},0).wait(6));

	// Слой 10
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(-2.5,-95.9,0.185,0.185);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(1).to({regX:2.5,regY:10.5,scaleX:0.54,scaleY:0.54,x:-1.2,y:-90.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:-0.8,y:-88.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-0.5,y:-87.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-0.3,y:-86.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:-0.2,y:-86.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-0.1,y:-85.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:-85.6},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2.5,y:-95.9},0).wait(15));

	// Слой 13
	this.title_4 = new lib.title_4();
	this.title_4.setTransform(-1.4,-150);
	this.title_4.alpha = 0;
	this.title_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_4).wait(16).to({_off:false},0).wait(1).to({regY:2.5,y:-158.3,alpha:0.291},0).wait(1).to({y:-166,alpha:0.495},0).wait(1).to({y:-170.7,alpha:0.62},0).wait(1).to({y:-174.4,alpha:0.72},0).wait(1).to({y:-177.7,alpha:0.806},0).wait(1).to({y:-180,alpha:0.868},0).wait(1).to({y:-181.6,alpha:0.912},0).wait(1).to({y:-182.9,alpha:0.946},0).wait(1).to({y:-184,alpha:0.974},0).wait(1).to({regY:0,y:-187.5,alpha:1},0).wait(19));

	// Слой 4
	this.title_3 = new lib.title_3();
	this.title_3.setTransform(-2,-201.2);
	this.title_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_3).wait(9).to({_off:false},0).wait(1).to({regX:-0.3,regY:57.6,x:-2.3,y:-171.4},0).wait(1).to({y:-190.8},0).wait(1).to({y:-203.5},0).wait(1).to({y:-212.7},0).wait(1).to({y:-220.5},0).wait(1).to({y:-227.1},0).wait(1).to({y:-232.1},0).wait(1).to({y:-235.7},0).wait(1).to({y:-238.3},0).wait(1).to({y:-240.1},0).wait(1).to({y:-241.5},0).wait(1).to({y:-242.6},0).wait(1).to({regX:0,regY:0,x:-2,y:-301.2},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.star_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.star.visible = true;
		this.baloon.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_1.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.star.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,1660.9,1,1,120);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:0,y:-1.5},119).wait(1));

	// Слой 2
	this.baloon = new lib.Символ6();
	this.baloon.setTransform(-8.5,1449.2,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.baloon).to({x:0.4,y:-187.2},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,1350.3,236.7,429.3);


(lib.star_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.star.visible = true;
		this.baloon.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_2.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.star.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,1660.9,1,1,120);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:0,y:-1.5},119).wait(1));

	// Слой 2
	this.baloon = new lib.Символ6();
	this.baloon.setTransform(-8.5,1449.2,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.baloon).to({x:0.4,y:-187.2},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,1350.3,236.7,429.2);


(lib.star_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.star.visible = true;
		this.baloon.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_4.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.star.gotoAndPlay(1);
		this.baloon.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,1655.6,1,1,120);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:0,y:-1.5},119).wait(1));

	// Слой 2
	this.baloon = new lib.Символ6();
	this.baloon.setTransform(-8.5,1449.2,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.baloon).to({x:0.4,y:-187.2},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,1350.3,236.7,423.9);


(lib.star_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.star.visible = true;
		this.baloon.visible = true;
	}
	this.frame_30 = function() {
		this.parent.star_3.gotoAndPlay(1);
	}
	this.frame_119 = function() {
		this.stop();
		this.star.gotoAndPlay(1);
		this.baloon.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(29).call(this.frame_30).wait(89).call(this.frame_119).wait(1));

	// Слой 1
	this.star = new lib.star();
	this.star.setTransform(0,1662.2,1,1,120);

	this.timeline.addTween(cjs.Tween.get(this.star).to({rotation:0,y:-1.5},119).wait(1));

	// Слой 2
	this.baloon = new lib.Символ6();
	this.baloon.setTransform(-8.5,1449.2,0.812,0.812);

	this.timeline.addTween(cjs.Tween.get(this.baloon).to({x:0.4,y:-187.2},119).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.6,1350.3,236.7,430.6);


(lib.header_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// Слой 1
	this.header = new lib.header();
	this.header.setTransform(-3.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.header).to({y:39.8},9,cjs.Ease.get(1)).to({y:-394.3,alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.6,-73.7,821.3,147.4);


// stage content:



(lib.game_banner_app_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		createjs.Touch.enable(stage);
		var _this = this;
		var clickkyTAG = clickkyTAG;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		
		window.onmessage = function(message) {
			if(
			typeof message === 'object'
			&& typeof message.data === 'object'
			&& typeof message.data.key === 'string'
			&& message.data.key === 'clickky_banner_22429'
			) {
									
			_this.victory_mc.icon.instance.image.src = message.data.icon;
			_this.victory_mc.title_3.text.text = message.data.title_3;
			_this.victory_mc.app_name.text.text = message.data.app_name;
			_this.victory_mc.title_4.text.text = message.data.title_4;
			_this.victory_mc.btn.btn_txt.text.text = message.data.button;
			_this.header_1.header.title_1.text.text = message.data.title_1;
			_this.header_1.header.title_2.text.text = message.data.title_1;
			clickkyTAG = message.data.target_url;
			
			var rate = parseFloat(message.data.rating);
			if(rate < 0) {rate = 0;}
			if(rate > 5) {rate = 5;}
			var x = (5 - rate) * (_this.victory_mc.rate.rate_in.instance.image.width / 5) * -1;
			_this.victory_mc.rate.rate_in.instance.mask.x = x;
		
			}
		};
		
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
			
			_this.score.x = windowSize.width;
			_this.score.y = windowSize.height;
			
			_this.bg.x = 0;
			_this.bg.y = windowSize.height;
			
			_this.cloud.x = windowSize.width/2;
			_this.cloud.y = windowSize.height/3;
			
			_this.net.x = 0;
			_this.net.y = windowSize.height;
			
			_this.header_1.x = windowSize.width/2;
			_this.header_1.y = windowSize.height/6;
			
			_this.victory_mc.x = windowSize.width/2;
			_this.victory_mc.y = windowSize.height/2;
			
			_this.target.x = windowSize.width/2;
			_this.target.y = windowSize.height;
			
			_this.star_1.x = windowSize.width/4;
			_this.star_1.y = windowSize.height;
			
			_this.star_2.x = windowSize.width/4;
			_this.star_2.y = windowSize.height;
			
			_this.star_3.x = (windowSize.width/2)+(windowSize.width/4);
			_this.star_3.y = windowSize.height;
			
			_this.star_4.x = (windowSize.width/2)+(windowSize.width/4);
			_this.star_4.y = windowSize.height;
			
		
			
			
			
			//Scale
		
			_this.bg.scaleX = 1;
			_this.bg.scaleY = 1;
			
			_this.score.scaleX = 0.8;
			_this.score.scaleY = 0.8;
			
			_this.star_1.scaleX = 0.8;
			_this.star_1.scaleY = 0.8;
			
			_this.star_2.scaleX = 0.8;
			_this.star_2.scaleY = 0.8;
			
			_this.star_3.scaleX = 0.8;
			_this.star_3.scaleY = 0.8;
			
			_this.star_4.scaleX = 0.8;
			_this.star_4.scaleY = 0.8;
			
			_this.net.scaleX = 0.8;
			_this.net.scaleY = 0.8;
			
			_this.target.scaleX = 1.6;
			_this.target.scaleY = 1.6;
			
			if(windowSize.width < windowSize.height) {
				
			_this.bg.scaleX = 0.9;
			_this.bg.scaleY = 0.9;
				
			_this.header_1.scaleX = 0.9;
			_this.header_1.scaleY = 0.9;
				
			}
			
			if(windowSize.width < 767) {
				
			_this.bg.scaleX = 0.5;
			_this.bg.scaleY = 0.5;
				
			_this.header_1.scaleX = 0.45;
			_this.header_1.scaleY = 0.45;
				
			_this.net.scaleX = 0.4;
			_this.net.scaleY = 0.4;
				
			_this.cloud.scaleX = 0.5;
			_this.cloud.scaleY = 0.5;
				
			_this.victory_mc.scaleX = 0.6;
			_this.victory_mc.scaleY = 0.6;
				
			_this.star_1.scaleX = 0.5;
			_this.star_1.scaleY = 0.5;
			
			_this.star_2.scaleX = 0.5;
			_this.star_2.scaleY = 0.5;
			
			_this.star_3.scaleX = 0.5;
			_this.star_3.scaleY = 0.5;
			
			_this.star_4.scaleX = 0.5;
			_this.star_4.scaleY = 0.5;
			
			_this.score.scaleX = 0.5;
			_this.score.scaleY = 0.5;
			
			_this.target.scaleX = 0.7;
			_this.target.scaleY = 0.7;
			
			}
			
			if(windowSize.width < 767 && windowSize.width > windowSize.height) {
				
			_this.victory_mc.scaleX = 0.5;
			_this.victory_mc.scaleY = 0.5;
				
			_this.target.scaleX = 0.6;
			_this.target.scaleY = 0.6;
				
			}
			
			if(windowSize.width < 767 && windowSize.width < windowSize.height) {
				
			_this.score.scaleX = 0.45;
			_this.score.scaleY = 0.45;
				
			}
			
		
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		
		//Actions
		
		_this.net.star_1.visible = false;
		_this.net.star_2.visible = false;
		_this.net.star_3.visible = false;
		_this.net.star_4.visible = false;
		
		
		
		_this.star_1.addEventListener("mousedown", Star_1); 
		function Star_1() {
			console.log('star_1');
			_this.star_1.star.visible = false;
			_this.star_1.baloon.visible = false;
			_this.star_1.star.gotoAndPlay(1);
			_this.target.target_1.gotoAndPlay(1);
			_this.net.play();
			_this.net.star_1.visible = true;
			_this.score.play();
			event.preventDefault();
		}
		
		_this.star_2.addEventListener("mousedown", Star_2); 
		function Star_2() {
			console.log('star_2');
			_this.star_2.star.visible = false;
			_this.star_2.baloon.visible = false;
			_this.star_2.star.gotoAndPlay(1);
			_this.target.target_1.gotoAndPlay(1);
			_this.net.play();
			_this.net.star_2.visible = true;
			_this.score.play();
			event.preventDefault();
		}
		
		_this.star_3.addEventListener("mousedown", Star_3); 
		function Star_3() {
			console.log('star_3');
			_this.star_3.star.visible = false;
			_this.star_3.baloon.visible = false;
			_this.star_3.star.gotoAndPlay(1);
			_this.target.target_1.gotoAndPlay(1);
			_this.net.play();
			_this.net.star_3.visible = true;
			_this.score.play();
			event.preventDefault();
		}
		
		_this.star_4.addEventListener("mousedown", Star_4); 
		function Star_4() {
			console.log('star_1');
			_this.star_4.star.visible = false;
			_this.star_4.baloon.visible = false;
			_this.star_4.star.gotoAndPlay(1);
			_this.target.target_1.gotoAndPlay(1);
			_this.net.play();
			_this.net.star_4.visible = true;
			_this.score.play();
			event.preventDefault();
		}
		
		
		
		_this.victory_mc.addEventListener("click", onClick);
		var onClick = function(evt) {
			console.log('click')
			if(clickkyTAG){
			window.open(clickkyTAG, "_blank");
			}
		};
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 5
	this.target = new lib.Символ16();
	this.target.setTransform(512,767,1,1,0,0,0,0,62.8);

	this.timeline.addTween(cjs.Tween.get(this.target).wait(1));

	// Слой 13
	this.victory_mc = new lib.victory_mc();
	this.victory_mc.setTransform(512.1,384.2,1,1,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.victory_mc).wait(1));

	// Слой 1
	this.score = new lib.score_1();
	this.score.setTransform(1023,767.1,1,1,0,0,0,135.4,98.5);

	this.timeline.addTween(cjs.Tween.get(this.score).wait(1));

	// Режим изоляции
	this.star_4 = new lib.star_4();
	this.star_4.setTransform(655.6,767,1,1,0,0,0,-2,1304);

	this.star_3 = new lib.star_3();
	this.star_3.setTransform(889.3,767.1,1,1,-0.3,0,0,-3.9,1303.7);

	this.star_2 = new lib.star_2();
	this.star_2.setTransform(139.9,767.1,1,1,0.1,0,0,2.5,1302.5);

	this.star_1 = new lib.star_1();
	this.star_1.setTransform(364.4,767,1,1,0,0,0,2.6,1302.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star_1},{t:this.star_2},{t:this.star_3},{t:this.star_4}]}).wait(1));

	// Слой 12
	this.header_1 = new lib.header_1();
	this.header_1.setTransform(510.6,123.8);

	this.timeline.addTween(cjs.Tween.get(this.header_1).wait(1));

	// Слой 2
	this.net = new lib.net_1();
	this.net.setTransform(0.1,767,1,1,30,0,0,-29.3,96.9);

	this.timeline.addTween(cjs.Tween.get(this.net).wait(1));

	// Слой 8
	this.bg = new lib.Символ1();
	this.bg.setTransform(0.1,767.1,1,1,0,0,0,-804.1,33.4);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	// Слой 10
	this.cloud = new lib.cloud_1();
	this.cloud.setTransform(512.1,224.2,1,1,0,0,0,749.1,6);

	this.timeline.addTween(cjs.Tween.get(this.cloud).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.9,434.1,2010.4,1195.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
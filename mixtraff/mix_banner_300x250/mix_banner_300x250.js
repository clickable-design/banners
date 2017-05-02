(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/app_store.png?1469013130561", id:"app_store"},
		{src:"images/google_play.png?1469013130561", id:"google_play"},
		{src:"images/image.png?1469013130561", id:"image"},
		{src:"images/zagl.png?1469013130561", id:"zagl"}
	]
};



// symbols:



(lib.app_store = function() {
	this.initialize(img.app_store);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,55);


(lib.google_play = function() {
	this.initialize(img.google_play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,580,55);


(lib.image = function() {
	this.initialize(img.image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,23);


(lib.zagl = function() {
	this.initialize(img.zagl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.star_iOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_star_shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVgAAtBLIgMg1IApghIg2gEIgUgxIgTAxIg2AEIApAhIgMA1IAsgcIAtAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.5,24.4,23.2);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star_shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB614").s().p("AAABGIhKAtIAUhVIhCg4IBXgIIAhhQIAiBQIBXAIIhCA4IAUBVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.6,24.4,23.2);


(lib.rate_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqGBzIAAjlIUNAAIAADlg");
	mask.setTransform(-13.1,0.5);

	// image
	this.instance = new lib.image();
	this.instance.setTransform(-77.8,-11.1);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-11.1,129.5,23);


(lib.iOS_top_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_tbtn_field
	this.text = new cjs.Text("Магазин", "30px 'Roboto'", "#007FFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 41;
	this.text.setTransform(259.3,-16.7);

	this.text_1 = new cjs.Text("Отмена", "30px 'Roboto'", "#838484");
	this.text_1.lineHeight = 41;
	this.text_1.setTransform(-264.2,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.2,-16.7,527.5,39.3);


(lib.iOS_buttom_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// iOS_bbtn_field
	this.text = new cjs.Text("Установить", "30px 'Roboto'", "#007FFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.setTransform(147,-15.9);

	this.text_1 = new cjs.Text("Подробнее", "30px 'Roboto'", "#838484");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.setTransform(-150.5,-15.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("AgIG4IAAtvIASAAIAANvg");
	this.shape.setTransform(0,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("EgonAAJIAAgSMBRPAAAIAAASg");
	this.shape_1.setTransform(0.1,-44,1.115,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.7,-45,579.8,90);


(lib.ios_budge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.app_store();
	this.instance.setTransform(-290,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-27.5,580,55);


(lib.app_title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// title
	this.text = new cjs.Text("Game of Thrones", "30px 'Roboto'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 251;
	this.text.setTransform(-118,-49);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-49,255,98.1);


(lib.app_img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// img
	this.instance = new lib.zagl();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-200,400,400);


(lib.app_co = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// company
	this.text = new cjs.Text("Twitter Co.", "20px 'Roboto'", "#838484");
	this.text.lineHeight = 27;
	this.text.lineWidth = 297;
	this.text.setTransform(-150.7,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-14.5,301.4,29);


(lib.Android_top_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Android_tbtn_field
	this.text = new cjs.Text("МАГАЗИН", "26px 'Roboto'", "#679E3D");
	this.text.textAlign = "right";
	this.text.lineHeight = 36;
	this.text.setTransform(258.7,-17.7);

	this.text_1 = new cjs.Text("ОТМЕНА", "26px 'Roboto'", "#838484");
	this.text_1.lineHeight = 36;
	this.text_1.setTransform(-264.3,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.3,-17.7,527.1,34.5);


(lib.android_budge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.google_play();
	this.instance.setTransform(-290,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-27.5,580,55);


(lib.Android_bottom_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Android_bbtn_field
	this.text = new cjs.Text("УСТАНОВИТЬ", "26px 'Roboto'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.setTransform(128.2,-15.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#679E3D").s().p("AxXFuQgMAAgJgJQgJgIAAgNIAAqfQAAgNAJgIQAJgJAMAAMAivAAAQAMAAAJAJQAJAIAAANIAAKfQAAANgJAIQgJAJgMAAg");
	this.shape.setTransform(126.9,0);

	this.text_1 = new cjs.Text("ПОДРОБНЕЕ", "26px 'Roboto'", "#838484");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.setTransform(-163.5,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,-36.7,482.1,73.4);


(lib.age_limit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// age
	this.text = new cjs.Text("18+", "15px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.setTransform(0.4,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#281709").s().p("AjfCKIAAkTIG/AAIAAETgAjaCFIG1AAIAAkJIm1AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-13.9,44.9,27.8);


(lib.stars_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.star = new lib.star();
	this.star.setTransform(39.5,0);

	this.star_1 = new lib.star();
	this.star_1.setTransform(13.1,0);

	this.star_2 = new lib.star();
	this.star_2.setTransform(-13.1,0);

	this.star_3 = new lib.star();
	this.star_3.setTransform(-39.4,0);

	this.star_4 = new lib.star();
	this.star_4.setTransform(-65.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star_4},{t:this.star_3},{t:this.star_2},{t:this.star_1},{t:this.star}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-11.6,129.5,23.2);


(lib.rating_stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stars
	this.star = new lib.star_iOS();
	this.star.setTransform(39.5,0);

	this.star_1 = new lib.star_iOS();
	this.star_1.setTransform(13.2,0);

	this.star_2 = new lib.star_iOS();
	this.star_2.setTransform(-13.1,0);

	this.star_3 = new lib.star_iOS();
	this.star_3.setTransform(-39.4,0);

	this.star_4 = new lib.star_iOS();
	this.star_4.setTransform(-65.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star_4},{t:this.star_3},{t:this.star_2},{t:this.star_1},{t:this.star}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-11.5,129.5,23.2);


(lib.app_rating = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.rating_stars();
	this.instance.setTransform(-86.1,0.5,1,1,0,0,0,-13.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// rate_in
	this.rate_in = new lib.rate_in();
	this.rate_in.setTransform(-72.9,0);

	this.timeline.addTween(cjs.Tween.get(this.rate_in).wait(1));

	// Слой 8
	this.instance_1 = new lib.stars_mask();
	this.instance_1.setTransform(-86,0.5,1,1,0,0,0,-13.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// rating_q
	this.text = new cjs.Text("5", "15px 'Roboto'", "#838484");
	this.text.lineHeight = 21;
	this.text.lineWidth = 146;
	this.text.setTransform(0.2,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.8,-11.1,300.8,25.2);


(lib.app_data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// app_title
	this.app_title = new lib.app_title();
	this.app_title.setTransform(77.4,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.app_title).wait(1));

	// app_img
	this.app_img = new lib.app_img();
	this.app_img.setTransform(-162.8,4.1,0.485,0.485);

	this.timeline.addTween(cjs.Tween.get(this.app_img).wait(1));

	// age_limit
	this.age_limit = new lib.age_limit();
	this.age_limit.setTransform(238.3,-78);

	this.timeline.addTween(cjs.Tween.get(this.age_limit).wait(1));

	// app_co
	this.app_co = new lib.app_co();
	this.app_co.setTransform(110.2,45.6);

	this.timeline.addTween(cjs.Tween.get(this.app_co).wait(1));

	// app_rating
	this.app_rating = new lib.app_rating();
	this.app_rating.setTransform(110.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.app_rating).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("A3TAKIAAgTMAuoAAAIAAATg");
	this.shape.setTransform(111.3,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.8,-100.2,520.8,201.4);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// app_data
	this.app_data = new lib.app_data();
	this.app_data.setTransform(0.3,1.4,0.534,0.534,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.app_data).wait(2));

	// t_buttons
	this.iOS_top_btn = new lib.iOS_top_btn();
	this.iOS_top_btn.setTransform(0,-78.2,0.532,0.532);

	this.Android_top_btn = new lib.Android_top_btn();
	this.Android_top_btn.setTransform(0.1,-75.2,0.524,0.524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.iOS_top_btn}]}).to({state:[{t:this.Android_top_btn}]},1).wait(1));

	// b_buttons
	this.iOS_buttom_btn = new lib.iOS_buttom_btn();
	this.iOS_buttom_btn.setTransform(0,101.2,0.517,0.517);

	this.Android_bottom_btn = new lib.Android_bottom_btn();
	this.Android_bottom_btn.setTransform(10.2,95.1,0.536,0.536,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.iOS_buttom_btn}]}).to({state:[{t:this.Android_bottom_btn}]},1).wait(1));

	// store
	this.instance = new lib.ios_budge();
	this.instance.setTransform(0,-109.5,0.564,0.564);

	this.instance_1 = new lib.android_budge();
	this.instance_1.setTransform(0,-109.5,0.564,0.564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163.4,-125,326.9,250);


// stage content:
(lib.mix_banner_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		stage.scaleX = stage.scaleY = window.devicePixelRatio;
		var mixTAG = mixTAG;
		var _searchData = null;
		var ratio = 2;
		
		if(window.devicePixelRatio > 1){
			ratio = window.devicePixelRatio;
		}
		
		stage.scaleX = stage.scaleY = ratio;
		stage.canvas.width = 300 * ratio;
		stage.canvas.height = 250 * ratio;
		stage.canvas.style.width = '300px';
		stage.canvas.style.height = '250px';
		
		
		var shape = new createjs.Shape(new createjs.Graphics().beginStroke("#ebebeb").setStrokeStyle(2).drawRect(0,0,300, 250));
		this.addChild(shape);
		
		// GET
		
		function getQueryParam(paramName) {
			if (_searchData === null) {
				_searchData = {};
		
				try {
					var _ = decodeURIComponent(document.location.search).split('?')[1].split('&');
					for (var i = 0; i < _.length; i++) {
		
						var _param = _[i].split('=');
						_searchData[_param[0]] = _param.length === 2 ? _param[1] : null;
					}
				} catch (e) {}
			}
		
			if (_searchData[paramName] != undefined) {
				return _searchData[paramName];
			}
		}
		
		var appData = _this.main.app_data;
		
		appData.app_img.instance.image.src = getQueryParam('icon');
		appData.app_title.text.text = getQueryParam('title');
		appData.app_co.text.text = getQueryParam('company');
		appData.age_limit.text.text = getQueryParam('age');
		appData.app_rating.text.text = getQueryParam('rating');
		mixTAG = getQueryParam('target_url');
		
		var rate = parseFloat(getQueryParam('rating'));
		if (rate < 0) {rate = 0;}
		if (rate > 5) {rate = 5;}
		var x = (5 - rate) * (appData.app_rating.rate_in.instance.image.width / 5) * -1;
		appData.app_rating.rate_in.instance.mask.x = x;
		
		// OS Detection
		window._setOS = function() {
			var isMobile = {
				Android: function () {return navigator.userAgent.match(/Android/i);},
				iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
				};
				if (isMobile.iOS()) {_this.main.gotoAndStop(0);}
				if (isMobile.Android()) {_this.main.gotoAndStop(1);}
		}
		
		window.onresize=function(){_setOS();}
		window.onresize();
		
		
		// Redirect URL
		
		stage.canvas.addEventListener("click", RedirectUrl);
		function RedirectUrl() {
			window.open(mixTAG, "_blank");
		}
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setOS()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// main
	this.main = new lib.main();
	this.main.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(136.6,125,326.9,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		WebFontConfig = {
		    google: { families: [ 'Roboto+Condensed:700:latin,cyrillic-ext' ] }
		  };
		  (function() {
		    var wf = document.createElement('script');
		    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		    wf.type = 'text/javascript';
		    wf.async = 'true';
		    var s = document.getElementsByTagName('script')[0];
		    s.parentNode.insertBefore(wf, s);
		  })();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.text = new cjs.Text("1234567890", "bold 54px 'Roboto Condensed'", "#3399FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 65;
	this.text.lineWidth = 504;
	this.text.setTransform(277,155);

	this.text_1 = new cjs.Text("Grumpy wizards make toxic brew for the evil \nQueen and Jack.", "bold 25px 'Roboto Condensed'", "#3399FF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 504;
	this.text_1.setTransform(277,73);

	this.text_2 = new cjs.Text("В чащах юга жил бы цитрус? Да, но\nфальшивый экземпляр!", "bold 25px 'Roboto Condensed'", "#3399FF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 31;
	this.text_2.lineWidth = 504;
	this.text_2.setTransform(277,232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,273,508,475);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
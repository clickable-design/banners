(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Path_5.png?1466524935807", id:"Path_5"},
		{src:"images/green1.png?1466524935807", id:"green1"},
		{src:"images/stripe.png?1466524935807", id:"stripe"}
	]
};



// symbols:



(lib.Path_5 = function() {
	this.initialize(img.Path_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,193);


(lib.green1 = function() {
	this.initialize(img.green1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,69);


(lib.stripe = function() {
	this.initialize(img.stripe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,199);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.012,0.533,1],-50.9,0,50.9,0).beginStroke().moveTo(-77.9,197.7).lineTo(-77.9,-197.7).lineTo(77.9,-197.7).lineTo(77.9,197.7).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-197.7,155.8,395.4);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#820E00").beginStroke().moveTo(-0.6,202.1).lineTo(-0.8,202).lineTo(-0.9,201.8).lineTo(-0.8,201.6).lineTo(-0.6,201.5).lineTo(0,201.5).lineTo(5.8,201.5).lineTo(6,201.6).lineTo(6,201.8).lineTo(6,201.9).lineTo(5.8,202).lineTo(0,202.1).lineTo(-0.6,202.1).closePath().moveTo(-12.6,201.7).lineTo(-12.7,201.6).lineTo(-12.8,201.4).lineTo(-12.7,201.3).lineTo(-12.5,201.2).lineTo(-6.6,201.4).lineTo(-6.4,201.5).lineTo(-6.4,201.7).lineTo(-6.4,201.9).lineTo(-6.6,202).lineTo(-12.6,201.7).closePath().moveTo(11.6,201.7).lineTo(11.5,201.5).lineTo(11.6,201.3).lineTo(11.8,201.2).lineTo(17.7,200.9).lineTo(17.9,200.9).lineTo(18,201.1).lineTo(17.9,201.2).lineTo(17.8,201.3).lineTo(11.8,201.8).lineTo(11.6,201.7).closePath().moveTo(-18.5,201.3).lineTo(-24.4,200.7).lineTo(-24.6,200.6).lineTo(-24.7,200.4).lineTo(-24.6,200.2).lineTo(-24.4,200.2).lineTo(-18.5,200.8).lineTo(-18.3,200.9).lineTo(-18.3,201.1).lineTo(-18.4,201.2).lineTo(-18.5,201.3).lineTo(-18.5,201.3).closePath().moveTo(23.6,200.8).lineTo(23.5,200.6).lineTo(23.6,200.4).lineTo(23.7,200.3).lineTo(29.7,199.6).lineTo(29.9,199.6).lineTo(30,199.8).lineTo(30,200).lineTo(29.8,200.1).lineTo(23.8,200.8).lineTo(23.7,200.8).lineTo(23.6,200.8).closePath().moveTo(-30.3,200).lineTo(-36.3,199.1).lineTo(-36.4,199).lineTo(-36.5,198.7).lineTo(-36.4,198.6).lineTo(-36.2,198.5).lineTo(-30.3,199.4).lineTo(-30.1,199.5).lineTo(-30.1,199.7).lineTo(-30.2,199.9).lineTo(-30.3,200).lineTo(-30.3,200).closePath().moveTo(35.5,199.2).lineTo(35.4,199).lineTo(35.5,198.8).lineTo(35.6,198.7).lineTo(41.5,197.6).lineTo(41.7,197.6).lineTo(41.8,197.8).lineTo(41.8,198).lineTo(41.6,198.1).lineTo(35.7,199.2).lineTo(35.7,199.2).lineTo(35.5,199.2).closePath().moveTo(-42.1,197.9).lineTo(-48,196.7).lineTo(-48.1,196.6).lineTo(-48.2,196.4).lineTo(-48,196.3).lineTo(-47.9,196.2).lineTo(-42,197.5).lineTo(-41.9,197.6).lineTo(-41.8,197.7).lineTo(-41.9,197.9).lineTo(-42.1,198).lineTo(-42.1,197.9).closePath().moveTo(47.3,196.8).lineTo(47.2,196.6).lineTo(47.2,196.5).lineTo(47.4,196.4).lineTo(53.3,194.9).lineTo(53.4,194.9).lineTo(53.5,195.1).lineTo(53.5,195.3).lineTo(53.4,195.4).lineTo(47.5,196.8).lineTo(47.4,196.9).lineTo(47.3,196.8).closePath().moveTo(-53.7,195.3).lineTo(-59.5,193.7).lineTo(-59.6,193.6).lineTo(-59.7,193.4).lineTo(-59.5,193.2).lineTo(-59.3,193.2).lineTo(-53.6,194.8).lineTo(-53.4,194.9).lineTo(-53.4,195.1).lineTo(-53.5,195.3).lineTo(-53.6,195.3).lineTo(-53.7,195.3).closePath().moveTo(58.9,193.8).lineTo(58.8,193.6).lineTo(58.8,193.4).lineTo(59,193.3).lineTo(64.7,191.5).lineTo(64.9,191.5).lineTo(65,191.7).lineTo(65,191.9).lineTo(64.9,192).lineTo(59.1,193.8).lineTo(59.1,193.8).lineTo(58.9,193.8).closePath().moveTo(-65.1,191.9).lineTo(-70.8,189.9).lineTo(-70.9,189.7).lineTo(-70.9,189.5).lineTo(-70.8,189.4).lineTo(-70.6,189.4).lineTo(-65,191.4).lineTo(-64.8,191.5).lineTo(-64.8,191.7).lineTo(-65,191.9).lineTo(-65,191.9).lineTo(-65.1,191.9).closePath().moveTo(70.4,190).lineTo(70.2,189.8).lineTo(70.2,189.6).lineTo(70.4,189.5).lineTo(75.9,187.4).lineTo(76.1,187.4).lineTo(76.2,187.5).lineTo(76.2,187.7).lineTo(76.1,187.8).lineTo(70.6,190).lineTo(70.4,190).lineTo(70.4,190).closePath().moveTo(-76.3,187.7).lineTo(-81.9,185.4).lineTo(-82,185.2).lineTo(-82,185).lineTo(-81.9,184.9).lineTo(-81.7,184.9).lineTo(-76.1,187.3).lineTo(-76,187.4).lineTo(-76,187.6).lineTo(-76.1,187.7).lineTo(-76.2,187.7).lineTo(-76.3,187.7).closePath().moveTo(81.4,185.5).lineTo(81.2,185.4).lineTo(81.2,185.2).lineTo(81.4,185.1).lineTo(86.8,182.6).lineTo(87,182.6).lineTo(87.1,182.7).lineTo(87.1,182.9).lineTo(87,183).lineTo(81.5,185.5).lineTo(81.4,185.5).lineTo(81.4,185.5).closePath().moveTo(-87.4,182.9).lineTo(-92.7,180.2).lineTo(-92.9,180).lineTo(-92.8,179.8).lineTo(-92.7,179.7).lineTo(-92.5,179.7).lineTo(-87.1,182.4).lineTo(-87,182.6).lineTo(-87,182.8).lineTo(-87.2,182.9).lineTo(-87.3,182.9).lineTo(-87.4,182.9).closePath().moveTo(92.2,180.3).lineTo(92,180.2).lineTo(92,180).lineTo(92.1,179.9).lineTo(97.4,177.1).lineTo(97.6,177).lineTo(97.7,177.2).lineTo(97.7,177.4).lineTo(97.6,177.5).lineTo(92.4,180.3).lineTo(92.3,180.3).lineTo(92.2,180.3).closePath().moveTo(-98,177.3).lineTo(-103.1,174.3).lineTo(-103.2,174.1).lineTo(-103.2,174).lineTo(-103.1,173.9).lineTo(-102.9,173.9).lineTo(-97.7,176.9).lineTo(-97.6,177).lineTo(-97.6,177.2).lineTo(-97.8,177.4).lineTo(-97.8,177.4).lineTo(-98,177.3).closePath().moveTo(102.6,174.5).lineTo(102.4,174.4).lineTo(102.4,174.2).lineTo(102.5,174.1).lineTo(107.6,170.9).lineTo(107.8,170.8).lineTo(107.9,171).lineTo(108,171.2).lineTo(107.9,171.3).lineTo(102.8,174.5).lineTo(102.7,174.6).lineTo(102.6,174.5).closePath().moveTo(-108.2,171.1).lineTo(-113.1,167.8).lineTo(-113.2,167.7).lineTo(-113.2,167.5).lineTo(-113,167.3).lineTo(-112.9,167.4).lineTo(-107.9,170.7).lineTo(-107.8,170.8).lineTo(-107.8,171).lineTo(-108,171.2).lineTo(-108,171.2).lineTo(-108.2,171.1).closePath().moveTo(112.7,168).lineTo(112.5,167.9).lineTo(112.4,167.8).lineTo(112.6,167.6).lineTo(117.4,164.1).lineTo(117.6,164.1).lineTo(117.7,164.2).lineTo(117.8,164.3).lineTo(117.7,164.5).lineTo(112.9,168).lineTo(112.7,168.1).lineTo(112.7,168).closePath().moveTo(-118.1,164.3).lineTo(-122.8,160.7).lineTo(-122.9,160.5).lineTo(-122.9,160.4).lineTo(-122.7,160.3).lineTo(-122.5,160.3).lineTo(-117.7,163.9).lineTo(-117.6,164.1).lineTo(-117.7,164.2).lineTo(-117.8,164.3).lineTo(-117.9,164.4).lineTo(-118.1,164.3).closePath().moveTo(122.3,160.9).lineTo(122.1,160.8).lineTo(122,160.7).lineTo(122.1,160.5).lineTo(126.8,156.8).lineTo(127,156.7).lineTo(127.2,156.8).lineTo(127.2,157).lineTo(127.1,157.1).lineTo(122.5,160.9).lineTo(122.3,161).lineTo(122.3,160.9).closePath().moveTo(-127.5,156.9).lineTo(-132.1,153).lineTo(-132.1,152.8).lineTo(-132.1,152.6).lineTo(-131.9,152.6).lineTo(-131.7,152.6).lineTo(-127.2,156.5).lineTo(-127.1,156.7).lineTo(-127.2,156.9).lineTo(-127.3,157).lineTo(-127.4,157).lineTo(-127.5,156.9).closePath().moveTo(131.5,153.3).lineTo(131.3,153.2).lineTo(131.2,153).lineTo(131.3,152.8).lineTo(135.8,148.9).lineTo(136,148.8).lineTo(136.1,148.9).lineTo(136.2,149).lineTo(136.1,149.2).lineTo(131.7,153.3).lineTo(131.5,153.3).lineTo(131.5,153.3).closePath().moveTo(-136.6,148.9).lineTo(-140.9,144.8).lineTo(-141,144.6).lineTo(-140.9,144.4).lineTo(-140.8,144.4).lineTo(-140.6,144.4).lineTo(-136.3,148.5).lineTo(-136.2,148.7).lineTo(-136.3,148.9).lineTo(-136.4,148.9).lineTo(-136.6,148.9).closePath().moveTo(140.1,145.1).lineTo(140,145).lineTo(140.1,144.8).lineTo(142.4,142.5).lineTo(144.4,140.5).lineTo(144.5,140.4).lineTo(144.7,140.5).lineTo(144.8,140.7).lineTo(144.7,140.8).lineTo(142.8,142.8).lineTo(140.5,145.1).lineTo(140.3,145.2).lineTo(140.1,145.1).closePath().moveTo(-145.5,140.1).lineTo(-149.6,135.8).lineTo(-149.7,135.6).lineTo(-149.6,135.5).lineTo(-149.5,135.4).lineTo(-149.3,135.5).lineTo(-145.2,139.8).lineTo(-145.1,139.9).lineTo(-145.2,140.1).lineTo(-145.4,140.2).lineTo(-145.5,140.1).closePath().moveTo(148.5,136.5).lineTo(148.4,136.3).lineTo(148.5,136.2).lineTo(152.5,131.7).lineTo(152.7,131.7).lineTo(152.9,131.7).lineTo(152.9,131.9).lineTo(152.9,132.1).lineTo(148.8,136.5).lineTo(148.7,136.6).lineTo(148.5,136.5).closePath().moveTo(-153.4,131.5).lineTo(-153.6,131.4).lineTo(-157.4,126.8).lineTo(-157.5,126.6).lineTo(-157.4,126.4).lineTo(-157.2,126.4).lineTo(-157.1,126.5).lineTo(-153.2,131).lineTo(-153.2,131.2).lineTo(-153.2,131.4).lineTo(-153.4,131.5).lineTo(-153.4,131.5).closePath().moveTo(156.4,127.5).lineTo(156.3,127.3).lineTo(156.4,127.2).lineTo(160.2,122.4).lineTo(160.4,122.3).lineTo(160.6,122.3).lineTo(160.6,122.5).lineTo(160.6,122.7).lineTo(156.8,127.4).lineTo(156.6,127.5).lineTo(156.6,127.6).lineTo(156.4,127.5).closePath().moveTo(-161,122.2).lineTo(-161.2,122.1).lineTo(-164.8,117.4).lineTo(-164.8,117.2).lineTo(-164.7,117.1).lineTo(-164.5,117).lineTo(-164.3,117.1).lineTo(-160.7,121.9).lineTo(-160.7,122).lineTo(-160.8,122.2).lineTo(-160.9,122.3).lineTo(-161,122.2).closePath().moveTo(163.9,118).lineTo(163.8,117.8).lineTo(163.9,117.6).lineTo(167.3,112.8).lineTo(167.5,112.7).lineTo(167.7,112.8).lineTo(167.8,112.9).lineTo(167.8,113.1).lineTo(164.3,118).lineTo(164.1,118.1).lineTo(164,118.1).lineTo(163.9,118).closePath().moveTo(-168,112.7).lineTo(-168.1,112.6).lineTo(-171.5,107.6).lineTo(-171.5,107.4).lineTo(-171.4,107.3).lineTo(-171.2,107.2).lineTo(-171.1,107.3).lineTo(-167.8,112.2).lineTo(-167.7,112.4).lineTo(-167.8,112.6).lineTo(-168,112.7).lineTo(-168,112.7).closePath().moveTo(170.8,108.2).lineTo(170.6,108).lineTo(170.7,107.8).lineTo(173.9,102.8).lineTo(174.1,102.7).lineTo(174.2,102.7).lineTo(174.3,102.9).lineTo(174.3,103).lineTo(171.1,108.1).lineTo(170.9,108.2).lineTo(170.9,108.2).lineTo(170.8,108.2).closePath().moveTo(-174.4,102.7).lineTo(-174.6,102.5).lineTo(-177.6,97.4).lineTo(-177.7,97.2).lineTo(-177.5,97).lineTo(-177.3,97).lineTo(-177.2,97.1).lineTo(-174.2,102.3).lineTo(-174.2,102.4).lineTo(-174.3,102.6).lineTo(-174.4,102.7).lineTo(-174.4,102.7).closePath().moveTo(177,97.9).lineTo(176.8,97.8).lineTo(176.9,97.6).lineTo(179.8,92.3).lineTo(179.9,92.2).lineTo(180.1,92.2).lineTo(180.3,92.4).lineTo(180.2,92.6).lineTo(177.3,97.8).lineTo(177.2,97.9).lineTo(177.1,98).lineTo(177,97.9).closePath().moveTo(-180.3,92.2).lineTo(-180.5,92.1).lineTo(-183.2,86.8).lineTo(-183.2,86.6).lineTo(-183.1,86.4).lineTo(-182.9,86.4).lineTo(-182.7,86.6).lineTo(-180,91.9).lineTo(-180,92.1).lineTo(-180.1,92.2).lineTo(-180.3,92.3).lineTo(-180.3,92.2).closePath().moveTo(182.6,87.3).lineTo(182.5,87.2).lineTo(182.5,87).lineTo(185,81.5).lineTo(185.1,81.4).lineTo(185.3,81.4).lineTo(185.4,81.5).lineTo(185.4,81.7).lineTo(182.9,87.2).lineTo(182.8,87.3).lineTo(182.7,87.3).lineTo(182.6,87.3).closePath().moveTo(-185.6,81.5).lineTo(-185.7,81.4).lineTo(-188,75.9).lineTo(-188,75.7).lineTo(-187.8,75.5).lineTo(-187.7,75.5).lineTo(-187.5,75.7).lineTo(-185.2,81.2).lineTo(-185.2,81.4).lineTo(-185.3,81.5).lineTo(-185.4,81.5).lineTo(-185.6,81.5).closePath().moveTo(187.5,76.3).lineTo(187.3,76.2).lineTo(187.3,76).lineTo(189.5,70.4).lineTo(189.6,70.3).lineTo(189.8,70.3).lineTo(190,70.4).lineTo(190,70.6).lineTo(187.8,76.2).lineTo(187.6,76.3).lineTo(187.6,76.3).lineTo(187.5,76.3).closePath().moveTo(-190,70.4).lineTo(-190.1,70.3).lineTo(-192.1,64.6).lineTo(-192.1,64.4).lineTo(-191.9,64.3).lineTo(-191.8,64.3).lineTo(-191.6,64.5).lineTo(-189.6,70.1).lineTo(-189.6,70.3).lineTo(-189.7,70.4).lineTo(-189.9,70.4).lineTo(-190,70.4).closePath().moveTo(191.7,65).lineTo(191.5,64.9).lineTo(191.5,64.7).lineTo(193.3,59).lineTo(193.4,58.8).lineTo(193.6,58.8).lineTo(193.8,58.9).lineTo(193.8,59.1).lineTo(192,64.9).lineTo(191.9,65).lineTo(191.8,65).lineTo(191.7,65).closePath().moveTo(-193.8,59.1).lineTo(-193.9,58.9).lineTo(-195.5,53.2).lineTo(-195.5,53).lineTo(-195.3,52.8).lineTo(-195.1,52.9).lineTo(-195,53).lineTo(-193.4,58.8).lineTo(-193.4,59).lineTo(-193.6,59.1).lineTo(-193.6,59.1).lineTo(-193.8,59.1).closePath().moveTo(195.1,53.5).lineTo(194.9,53.4).lineTo(194.9,53.3).lineTo(196.3,47.4).lineTo(196.4,47.3).lineTo(196.6,47.2).lineTo(196.7,47.4).lineTo(196.8,47.5).lineTo(195.4,53.4).lineTo(195.3,53.5).lineTo(195.2,53.6).lineTo(195.1,53.5).closePath().moveTo(-196.8,47.5).lineTo(-196.9,47.3).lineTo(-198.2,41.5).lineTo(-198.1,41.3).lineTo(-197.9,41.2).lineTo(-197.7,41.2).lineTo(-197.6,41.4).lineTo(-196.4,47.2).lineTo(-196.5,47.4).lineTo(-196.6,47.5).lineTo(-196.6,47.6).lineTo(-196.8,47.5).closePath().moveTo(197.7,41.9).lineTo(197.6,41.8).lineTo(197.6,41.6).lineTo(198.6,35.7).lineTo(198.7,35.5).lineTo(199,35.5).lineTo(199.1,35.6).lineTo(199.2,35.8).lineTo(198.1,41.7).lineTo(197.9,41.8).lineTo(197.8,41.9).lineTo(197.7,41.9).closePath().moveTo(-199.1,35.7).lineTo(-199.2,35.6).lineTo(-200.1,29.7).lineTo(-200.1,29.5).lineTo(-199.9,29.4).lineTo(-199.7,29.4).lineTo(-199.6,29.6).lineTo(-198.7,35.5).lineTo(-198.7,35.7).lineTo(-198.9,35.8).lineTo(-198.9,35.8).lineTo(-199.1,35.7).closePath().moveTo(199.8,30.1).lineTo(199.6,30).lineTo(199.5,29.8).lineTo(200.3,23.9).lineTo(200.3,23.7).lineTo(200.5,23.7).lineTo(200.7,23.8).lineTo(200.8,23.9).lineTo(200.1,29.9).lineTo(200,30.1).lineTo(199.8,30.1).lineTo(199.8,30.1).closePath().moveTo(-200.7,23.9).lineTo(-200.8,23.7).lineTo(-201.3,17.7).lineTo(-201.3,17.5).lineTo(-201.1,17.4).lineTo(-201,17.5).lineTo(-200.9,17.6).lineTo(-200.3,23.6).lineTo(-200.3,23.8).lineTo(-200.5,23.9).lineTo(-200.6,23.9).lineTo(-200.7,23.9).closePath().moveTo(201,18.2).lineTo(200.9,18.1).lineTo(200.8,17.9).lineTo(201.2,12).lineTo(201.3,11.8).lineTo(201.5,11.7).lineTo(201.6,11.8).lineTo(201.7,12).lineTo(201.3,18).lineTo(201.2,18.2).lineTo(201.1,18.2).lineTo(201,18.2).closePath().moveTo(-201.7,11.9).lineTo(-201.8,11.7).lineTo(-202,5.7).lineTo(-201.9,5.5).lineTo(-201.8,5.5).lineTo(-201.6,5.5).lineTo(-201.5,5.7).lineTo(-201.2,11.7).lineTo(-201.3,11.9).lineTo(-201.5,12).lineTo(-201.7,11.9).closePath().moveTo(201.5,6.2).lineTo(201.4,6).lineTo(201.5,0).lineTo(201.6,-0.2).lineTo(201.8,-0.3).lineTo(202,-0.2).lineTo(202.1,0).lineTo(202,6).lineTo(201.9,6.2).lineTo(201.7,6.2).lineTo(201.5,6.2).closePath().moveTo(-202,-0.9).lineTo(-202.1,-1.1).lineTo(-202,-7).lineTo(-201.9,-7.2).lineTo(-201.7,-7.3).lineTo(-201.5,-7.2).lineTo(-201.4,-7).lineTo(-201.5,-1.1).lineTo(-201.6,-0.9).lineTo(-201.8,-0.8).lineTo(-202,-0.9).closePath().moveTo(201.6,-3.1).lineTo(201.5,-3.3).lineTo(201.3,-9.4).lineTo(201.4,-9.6).lineTo(201.6,-9.6).lineTo(201.8,-9.6).lineTo(201.9,-9.4).lineTo(202.1,-3.3).lineTo(202,-3.1).lineTo(201.8,-3.1).lineTo(201.6,-3.1).closePath().moveTo(-201.6,-12.8).lineTo(-201.7,-13).lineTo(-201.3,-19).lineTo(-201.2,-19.2).lineTo(-201,-19.2).lineTo(-200.9,-19.1).lineTo(-200.8,-18.9).lineTo(-201.2,-13).lineTo(-201.3,-12.8).lineTo(-201.4,-12.8).lineTo(-201.6,-12.8).closePath().moveTo(201.1,-15.2).lineTo(201.1,-15.4).lineTo(200.5,-21.4).lineTo(200.6,-21.6).lineTo(200.8,-21.7).lineTo(201,-21.7).lineTo(201.1,-21.5).lineTo(201.5,-15.4).lineTo(201.5,-15.2).lineTo(201.3,-15.1).lineTo(201.3,-15.1).lineTo(201.1,-15.2).closePath().moveTo(-200.5,-24.7).lineTo(-200.6,-24.8).lineTo(-200.7,-24.9).lineTo(-200,-30.8).lineTo(-199.9,-31).lineTo(-199.7,-31.1).lineTo(-199.5,-31).lineTo(-199.4,-30.8).lineTo(-200.2,-24.9).lineTo(-200.3,-24.7).lineTo(-200.4,-24.6).lineTo(-200.5,-24.7).closePath().moveTo(200,-27.3).lineTo(199.9,-27.5).lineTo(199.1,-33.5).lineTo(199.1,-33.7).lineTo(199.3,-33.8).lineTo(199.4,-33.7).lineTo(199.5,-33.5).lineTo(200.4,-27.5).lineTo(200.3,-27.4).lineTo(200.2,-27.3).lineTo(200.1,-27.2).lineTo(200,-27.3).closePath().moveTo(-198.8,-36.5).lineTo(-199,-36.5).lineTo(-199.1,-36.7).lineTo(-197.9,-42.6).lineTo(-197.8,-42.8).lineTo(-197.6,-42.8).lineTo(-197.5,-42.7).lineTo(-197.5,-42.5).lineTo(-198.5,-36.6).lineTo(-198.6,-36.5).lineTo(-198.8,-36.4).lineTo(-198.8,-36.5).closePath().moveTo(198.2,-39.2).lineTo(198.1,-39.3).lineTo(196.8,-45.3).lineTo(196.9,-45.5).lineTo(197,-45.6).lineTo(197.2,-45.5).lineTo(197.4,-45.4).lineTo(198.5,-39.4).lineTo(198.5,-39.2).lineTo(198.4,-39.2).lineTo(198.3,-39.1).lineTo(198.2,-39.2).closePath().moveTo(-196.5,-48.2).lineTo(-196.6,-48.3).lineTo(-196.7,-48.4).lineTo(-195.2,-54.2).lineTo(-195.1,-54.4).lineTo(-194.9,-54.4).lineTo(-194.7,-54.3).lineTo(-194.7,-54.1).lineTo(-196.1,-48.3).lineTo(-196.3,-48.2).lineTo(-196.4,-48.1).lineTo(-196.5,-48.2).closePath().moveTo(195.6,-51).lineTo(195.5,-51.1).lineTo(193.9,-57).lineTo(193.9,-57.2).lineTo(194,-57.3).lineTo(194.2,-57.3).lineTo(194.3,-57.1).lineTo(195.9,-51.2).lineTo(195.9,-51.1).lineTo(195.8,-50.9).lineTo(195.7,-50.9).lineTo(195.6,-51).closePath().moveTo(-193.4,-59.7).lineTo(-193.5,-59.8).lineTo(-193.6,-60).lineTo(-191.7,-65.6).lineTo(-191.6,-65.8).lineTo(-191.4,-65.8).lineTo(-191.3,-65.6).lineTo(-191.3,-65.5).lineTo(-193.1,-59.8).lineTo(-193.2,-59.7).lineTo(-193.3,-59.6).lineTo(-193.4,-59.7).closePath().moveTo(192.2,-62.6).lineTo(192.1,-62.7).lineTo(190.2,-68.4).lineTo(190.2,-68.6).lineTo(190.4,-68.7).lineTo(190.5,-68.7).lineTo(190.7,-68.6).lineTo(192.6,-62.9).lineTo(192.6,-62.7).lineTo(192.4,-62.6).lineTo(192.4,-62.5).lineTo(192.2,-62.6).closePath().moveTo(-189.6,-71).lineTo(-189.7,-71.1).lineTo(-189.7,-71.3).lineTo(-187.5,-76.9).lineTo(-187.4,-77).lineTo(-187.2,-77).lineTo(-187.1,-76.9).lineTo(-187.1,-76.7).lineTo(-189.3,-71.1).lineTo(-189.4,-71).lineTo(-189.5,-71).lineTo(-189.6,-71).closePath().moveTo(188.3,-73.9).lineTo(188.1,-74.1).lineTo(185.8,-79.6).lineTo(185.8,-79.8).lineTo(185.9,-79.9).lineTo(186.1,-79.9).lineTo(186.3,-79.8).lineTo(188.6,-74.3).lineTo(188.6,-74.1).lineTo(188.5,-73.9).lineTo(188.3,-73.9).lineTo(188.3,-73.9).closePath().moveTo(-185,-82).lineTo(-185.2,-82.2).lineTo(-185.2,-82.4).lineTo(-182.6,-87.8).lineTo(-182.5,-87.9).lineTo(-182.3,-87.9).lineTo(-182.2,-87.8).lineTo(-182.2,-87.6).lineTo(-184.7,-82.2).lineTo(-184.9,-82).lineTo(-185,-82).lineTo(-185,-82).closePath().moveTo(183.5,-84.9).lineTo(183.3,-85.1).lineTo(180.7,-90.5).lineTo(180.7,-90.7).lineTo(180.8,-90.8).lineTo(181,-90.8).lineTo(181.1,-90.7).lineTo(183.8,-85.2).lineTo(183.8,-85.1).lineTo(183.7,-84.9).lineTo(183.6,-84.9).lineTo(183.5,-84.9).closePath().moveTo(-179.8,-92.8).lineTo(-179.9,-93).lineTo(-179.9,-93.2).lineTo(-177,-98.4).lineTo(-176.9,-98.6).lineTo(-176.7,-98.5).lineTo(-176.6,-98.4).lineTo(-176.6,-98.2).lineTo(-179.5,-92.9).lineTo(-179.6,-92.8).lineTo(-179.7,-92.8).lineTo(-179.8,-92.8).closePath().moveTo(178,-95.7).lineTo(177.9,-95.8).lineTo(174.9,-101.1).lineTo(174.9,-101.3).lineTo(175,-101.4).lineTo(175.1,-101.4).lineTo(175.3,-101.3).lineTo(178.3,-96.1).lineTo(178.4,-95.9).lineTo(178.2,-95.7).lineTo(178.1,-95.7).lineTo(178,-95.7).closePath().moveTo(-173.9,-103.2).lineTo(-174.1,-103.4).lineTo(-174,-103.6).lineTo(-170.8,-108.7).lineTo(-170.6,-108.8).lineTo(-170.5,-108.7).lineTo(-170.4,-108.6).lineTo(-170.4,-108.4).lineTo(-173.6,-103.3).lineTo(-173.8,-103.2).lineTo(-173.8,-103.2).lineTo(-173.9,-103.2).closePath().moveTo(171.8,-106.1).lineTo(171.7,-106.2).lineTo(168.4,-111.2).lineTo(168.4,-111.4).lineTo(168.5,-111.5).lineTo(168.7,-111.6).lineTo(168.8,-111.5).lineTo(172.1,-106.5).lineTo(172.2,-106.3).lineTo(172,-106.1).lineTo(171.9,-106.1).lineTo(171.8,-106.1).closePath().moveTo(-167.5,-113.3).lineTo(-167.6,-113.5).lineTo(-167.5,-113.7).lineTo(-164,-118.5).lineTo(-163.8,-118.6).lineTo(-163.6,-118.5).lineTo(-163.5,-118.4).lineTo(-163.6,-118.2).lineTo(-167.1,-113.3).lineTo(-167.2,-113.2).lineTo(-167.3,-113.2).lineTo(-167.5,-113.3).closePath().moveTo(165.1,-116).lineTo(165,-116.2).lineTo(161.4,-121).lineTo(161.3,-121.2).lineTo(161.4,-121.3).lineTo(161.6,-121.4).lineTo(161.7,-121.3).lineTo(165.3,-116.5).lineTo(165.4,-116.3).lineTo(165.3,-116.1).lineTo(165.1,-116).lineTo(165.1,-116).closePath().moveTo(-160.3,-122.9).lineTo(-160.4,-123.1).lineTo(-160.4,-123.3).lineTo(-156.6,-128).lineTo(-156.4,-128.1).lineTo(-156.2,-128).lineTo(-156.2,-127.8).lineTo(-156.2,-127.6).lineTo(-159.9,-123).lineTo(-160.1,-122.9).lineTo(-160.2,-122.9).lineTo(-160.3,-122.9).closePath().moveTo(157.8,-125.6).lineTo(157.7,-125.7).lineTo(153.8,-130.3).lineTo(153.7,-130.5).lineTo(153.8,-130.7).lineTo(154,-130.7).lineTo(154.2,-130.6).lineTo(158,-126).lineTo(158.1,-125.8).lineTo(158,-125.6).lineTo(157.9,-125.6).lineTo(157.8,-125.6).closePath().moveTo(-152.7,-132.2).lineTo(-152.7,-132.3).lineTo(-152.7,-132.5).lineTo(-148.7,-136.9).lineTo(-148.5,-137).lineTo(-148.3,-136.9).lineTo(-148.2,-136.7).lineTo(-148.3,-136.6).lineTo(-152.3,-132.2).lineTo(-152.5,-132.1).lineTo(-152.7,-132.2).closePath().moveTo(149.9,-134.7).lineTo(145.8,-139.1).lineTo(145.7,-139.2).lineTo(145.8,-139.4).lineTo(146,-139.5).lineTo(146.1,-139.4).lineTo(150.2,-135.1).lineTo(150.3,-134.9).lineTo(150.2,-134.7).lineTo(150,-134.6).lineTo(149.9,-134.7).closePath().moveTo(-144.6,-140.8).lineTo(-144.7,-141).lineTo(-144.6,-141.2).lineTo(-142.9,-142.9).lineTo(-139.8,-145.9).lineTo(-139.7,-146).lineTo(-139.5,-145.9).lineTo(-139.4,-145.7).lineTo(-139.5,-145.6).lineTo(-142.6,-142.5).lineTo(-144.3,-140.8).lineTo(-144.5,-140.8).lineTo(-144.6,-140.8).closePath().moveTo(142.1,-142.8).lineTo(137.6,-147.2).lineTo(137.5,-147.3).lineTo(137.6,-147.5).lineTo(137.8,-147.6).lineTo(138,-147.5).lineTo(142.5,-143.2).lineTo(142.6,-143).lineTo(142.5,-142.8).lineTo(142.3,-142.7).lineTo(142.1,-142.8).closePath().moveTo(-135.5,-149.7).lineTo(-135.5,-149.9).lineTo(-135.5,-150).lineTo(-131,-154).lineTo(-130.8,-154.1).lineTo(-130.7,-154).lineTo(-130.6,-153.8).lineTo(-130.7,-153.6).lineTo(-135.1,-149.7).lineTo(-135.3,-149.6).lineTo(-135.5,-149.7).closePath().moveTo(133.3,-151.2).lineTo(128.7,-155.2).lineTo(128.6,-155.3).lineTo(128.6,-155.5).lineTo(128.8,-155.6).lineTo(129,-155.5).lineTo(133.6,-151.5).lineTo(133.7,-151.4).lineTo(133.6,-151.2).lineTo(133.5,-151.1).lineTo(133.3,-151.2).closePath().moveTo(-126.3,-157.4).lineTo(-126.5,-157.5).lineTo(-126.5,-157.7).lineTo(-126.5,-157.9).lineTo(-121.8,-161.6).lineTo(-121.6,-161.6).lineTo(-121.4,-161.5).lineTo(-121.4,-161.3).lineTo(-121.5,-161.2).lineTo(-126.2,-157.4).lineTo(-126.3,-157.4).lineTo(-126.3,-157.4).closePath().moveTo(124,-158.9).lineTo(119.3,-162.6).lineTo(119.2,-162.8).lineTo(119.3,-163).lineTo(119.4,-163.1).lineTo(119.6,-163.1).lineTo(124.4,-159.4).lineTo(124.5,-159.2).lineTo(124.4,-159).lineTo(124.2,-158.9).lineTo(124.2,-158.9).lineTo(124,-158.9).closePath().moveTo(-116.9,-164.7).lineTo(-117.1,-164.8).lineTo(-117.2,-165).lineTo(-117.1,-165.2).lineTo(-112.1,-168.6).lineTo(-112,-168.7).lineTo(-111.8,-168.6).lineTo(-111.8,-168.4).lineTo(-111.9,-168.2).lineTo(-116.7,-164.8).lineTo(-116.9,-164.7).lineTo(-116.9,-164.7).closePath().moveTo(114.5,-166.2).lineTo(109.4,-169.6).lineTo(109.3,-169.7).lineTo(109.4,-169.9).lineTo(109.5,-170).lineTo(109.7,-170).lineTo(114.8,-166.6).lineTo(114.8,-166.4).lineTo(114.8,-166.2).lineTo(114.7,-166.1).lineTo(114.6,-166.1).lineTo(114.5,-166.2).closePath().moveTo(-107,-171.5).lineTo(-107.2,-171.6).lineTo(-107.3,-171.7).lineTo(-107.1,-171.9).lineTo(-102,-175.1).lineTo(-101.9,-175.1).lineTo(-101.7,-175).lineTo(-101.6,-174.8).lineTo(-101.8,-174.6).lineTo(-106.9,-171.5).lineTo(-107,-171.4).lineTo(-107,-171.5).closePath().moveTo(104.4,-172.9).lineTo(99.3,-175.9).lineTo(99.2,-176.1).lineTo(99.2,-176.3).lineTo(99.3,-176.4).lineTo(99.5,-176.4).lineTo(104.7,-173.3).lineTo(104.8,-173.1).lineTo(104.8,-172.9).lineTo(104.6,-172.8).lineTo(104.6,-172.8).lineTo(104.4,-172.9).closePath().moveTo(-96.8,-177.6).lineTo(-96.9,-177.7).lineTo(-96.9,-177.9).lineTo(-96.8,-178.1).lineTo(-91.5,-180.9).lineTo(-91.3,-180.9).lineTo(-91.2,-180.8).lineTo(-91.2,-180.6).lineTo(-91.3,-180.4).lineTo(-96.6,-177.6).lineTo(-96.7,-177.6).lineTo(-96.8,-177.6).closePath().moveTo(94,-178.9).lineTo(88.6,-181.7).lineTo(88.5,-181.8).lineTo(88.5,-182).lineTo(88.6,-182.1).lineTo(88.8,-182.1).lineTo(94.2,-179.3).lineTo(94.3,-179.2).lineTo(94.3,-179).lineTo(94.2,-178.8).lineTo(94.1,-178.8).lineTo(94,-178.9).closePath().moveTo(-86.1,-183.1).lineTo(-86.3,-183.2).lineTo(-86.3,-183.4).lineTo(-86.1,-183.5).lineTo(-80.7,-186).lineTo(-80.5,-186).lineTo(-80.4,-185.9).lineTo(-80.4,-185.7).lineTo(-80.5,-185.5).lineTo(-86,-183.1).lineTo(-86,-183.1).lineTo(-86.1,-183.1).closePath().moveTo(83.2,-184.3).lineTo(77.6,-186.7).lineTo(77.5,-186.8).lineTo(77.5,-187).lineTo(77.6,-187.1).lineTo(77.8,-187.1).lineTo(83.3,-184.7).lineTo(83.5,-184.6).lineTo(83.5,-184.4).lineTo(83.3,-184.3).lineTo(83.2,-184.3).lineTo(83.2,-184.3).closePath().moveTo(-75.2,-187.8).lineTo(-75.3,-187.9).lineTo(-75.3,-188.2).lineTo(-75.2,-188.3).lineTo(-69.5,-190.4).lineTo(-69.3,-190.4).lineTo(-69.2,-190.2).lineTo(-69.2,-190.1).lineTo(-69.3,-189.9).lineTo(-75,-187.8).lineTo(-75.1,-187.8).lineTo(-75.2,-187.8).closePath().moveTo(72,-188.9).lineTo(66.4,-190.9).lineTo(66.2,-191).lineTo(66.2,-191.2).lineTo(66.3,-191.3).lineTo(66.5,-191.3).lineTo(72.2,-189.3).lineTo(72.3,-189.2).lineTo(72.3,-189).lineTo(72.2,-188.9).lineTo(72.1,-188.9).lineTo(72,-188.9).closePath().moveTo(-63.7,-191.9).lineTo(-63.9,-192).lineTo(-63.9,-192.2).lineTo(-63.7,-192.3).lineTo(-58,-194.1).lineTo(-57.8,-194.1).lineTo(-57.7,-194).lineTo(-57.7,-193.8).lineTo(-57.8,-193.7).lineTo(-63.6,-191.9).lineTo(-63.7,-191.9).lineTo(-63.7,-191.9).closePath().moveTo(60.6,-192.8).lineTo(54.8,-194.5).lineTo(54.7,-194.6).lineTo(54.6,-194.8).lineTo(54.8,-194.9).lineTo(55,-194.9).lineTo(60.8,-193.2).lineTo(60.9,-193.1).lineTo(60.9,-192.9).lineTo(60.8,-192.8).lineTo(60.7,-192.7).lineTo(60.6,-192.8).closePath().moveTo(-52.3,-195.3).lineTo(-52.4,-195.5).lineTo(-52.4,-195.6).lineTo(-52.2,-195.8).lineTo(-46.4,-197.2).lineTo(-46.2,-197.1).lineTo(-46.1,-196.9).lineTo(-46.1,-196.8).lineTo(-46.3,-196.7).lineTo(-52.1,-195.2).lineTo(-52.1,-195.2).lineTo(-52.3,-195.3).closePath().moveTo(49,-195.9).lineTo(43.2,-197.3).lineTo(43,-197.4).lineTo(43,-197.6).lineTo(43.1,-197.7).lineTo(43.3,-197.7).lineTo(49.1,-196.5).lineTo(49.3,-196.3).lineTo(49.3,-196.1).lineTo(49.2,-196).lineTo(49.1,-195.9).lineTo(49,-195.9).closePath().moveTo(-40.6,-197.9).lineTo(-40.7,-198.1).lineTo(-40.6,-198.3).lineTo(-40.4,-198.4).lineTo(-34.6,-199.4).lineTo(-34.4,-199.4).lineTo(-34.3,-199.2).lineTo(-34.3,-199).lineTo(-34.5,-198.9).lineTo(-40.3,-197.8).lineTo(-40.4,-197.8).lineTo(-40.6,-197.9).closePath().moveTo(37.3,-198.4).lineTo(31.4,-199.3).lineTo(31.2,-199.4).lineTo(31.1,-199.6).lineTo(31.2,-199.7).lineTo(31.4,-199.8).lineTo(37.4,-198.8).lineTo(37.5,-198.7).lineTo(37.6,-198.5).lineTo(37.5,-198.4).lineTo(37.3,-198.3).lineTo(37.3,-198.4).closePath().moveTo(-28.6,-199.8).lineTo(-28.7,-200).lineTo(-28.7,-200.2).lineTo(-28.5,-200.3).lineTo(-22.5,-201).lineTo(-22.3,-200.9).lineTo(-22.2,-200.7).lineTo(-22.2,-200.5).lineTo(-22.4,-200.4).lineTo(-28.5,-199.7).lineTo(-28.5,-199.7).lineTo(-28.6,-199.8).closePath().moveTo(25.4,-200.1).lineTo(19.5,-200.7).lineTo(19.3,-200.8).lineTo(19.3,-201).lineTo(19.4,-201.2).lineTo(19.5,-201.2).lineTo(25.5,-200.6).lineTo(25.6,-200.5).lineTo(25.7,-200.3).lineTo(25.6,-200.2).lineTo(25.5,-200.1).lineTo(25.4,-200.1).closePath().moveTo(-16.6,-201).lineTo(-16.7,-201.2).lineTo(-16.7,-201.4).lineTo(-16.5,-201.4).lineTo(-10.4,-201.8).lineTo(-10.2,-201.7).lineTo(-10.2,-201.5).lineTo(-10.2,-201.4).lineTo(-10.4,-201.3).lineTo(-16.4,-201).lineTo(-16.5,-200.9).lineTo(-16.6,-201).closePath().moveTo(13.5,-201.2).lineTo(7.6,-201.4).lineTo(7.4,-201.5).lineTo(7.3,-201.7).lineTo(7.4,-201.9).lineTo(7.6,-202).lineTo(13.6,-201.7).lineTo(13.8,-201.6).lineTo(13.8,-201.4).lineTo(13.7,-201.2).lineTo(13.6,-201.1).lineTo(13.5,-201.2).closePath().moveTo(-4.5,-201.6).lineTo(-4.6,-201.8).lineTo(-4.5,-201.9).lineTo(-4.3,-202).lineTo(0,-202.1).lineTo(1.6,-202.1).lineTo(1.8,-202).lineTo(1.9,-201.8).lineTo(1.8,-201.6).lineTo(1.6,-201.5).lineTo(0,-201.5).lineTo(-4.3,-201.5).lineTo(-4.5,-201.6).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.8,-202.8,405.6,405.6);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#C85E09","#5C2000"],[0,1],0,0,0,0,0,640).beginStroke().moveTo(-512,384).lineTo(-512,-384).lineTo(512,-384).lineTo(512,384).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#F7A700","#770000"],[0,1],0,0,0,0,0,640).beginStroke().moveTo(-512,384).lineTo(-512,-384).lineTo(512,-384).lineTo(512,384).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F3B500").beginStroke().moveTo(242.2,2).lineTo(237.8,2).curveTo(236.9,2,236.4,1.4).curveTo(235.8,0.8,235.8,-0).curveTo(235.8,-0.8,236.4,-1.4).curveTo(236.9,-2,237.8,-2).lineTo(242.2,-2).curveTo(243.1,-2,243.7,-1.4).curveTo(244.2,-0.8,244.2,-0).curveTo(244.2,0.8,243.7,1.4).curveTo(243.1,2,242.2,2).lineTo(242.2,2).closePath().moveTo(231.8,2).lineTo(225.8,2).curveTo(224.9,2,224.3,1.4).curveTo(223.8,0.8,223.8,-0).curveTo(223.8,-0.8,224.3,-1.4).curveTo(224.9,-2,225.8,-2).lineTo(231.8,-2).curveTo(232.6,-2,233.2,-1.4).curveTo(233.8,-0.8,233.8,-0).curveTo(233.8,0.8,233.2,1.4).curveTo(232.6,2,231.8,2).lineTo(231.8,2).closePath().moveTo(219.8,2).lineTo(213.8,2).curveTo(212.9,2,212.3,1.4).curveTo(211.8,0.8,211.8,-0).curveTo(211.8,-0.8,212.3,-1.4).curveTo(212.9,-2,213.8,-2).lineTo(219.8,-2).curveTo(220.6,-2,221.2,-1.4).curveTo(221.8,-0.8,221.8,-0).curveTo(221.8,0.8,221.2,1.4).curveTo(220.6,2,219.8,2).lineTo(219.8,2).closePath().moveTo(207.8,2).lineTo(201.8,2).curveTo(200.9,2,200.4,1.4).curveTo(199.8,0.8,199.8,-0).curveTo(199.8,-0.8,200.4,-1.4).curveTo(200.9,-2,201.8,-2).lineTo(207.8,-2).curveTo(208.6,-2,209.2,-1.4).curveTo(209.8,-0.8,209.8,-0).curveTo(209.8,0.8,209.2,1.4).curveTo(208.6,2,207.8,2).lineTo(207.8,2).closePath().moveTo(195.8,2).lineTo(189.8,2).curveTo(188.9,2,188.3,1.4).curveTo(187.8,0.8,187.8,-0).curveTo(187.8,-0.8,188.3,-1.4).curveTo(188.9,-2,189.8,-2).lineTo(195.8,-2).curveTo(196.6,-2,197.2,-1.4).curveTo(197.8,-0.8,197.8,-0).curveTo(197.8,0.8,197.2,1.4).curveTo(196.6,2,195.8,2).lineTo(195.8,2).closePath().moveTo(183.8,2).lineTo(177.8,2).curveTo(176.9,2,176.3,1.4).curveTo(175.8,0.8,175.8,-0).curveTo(175.8,-0.8,176.3,-1.4).curveTo(176.9,-2,177.8,-2).lineTo(183.8,-2).curveTo(184.6,-2,185.2,-1.4).curveTo(185.8,-0.8,185.8,-0).curveTo(185.8,0.8,185.2,1.4).curveTo(184.6,2,183.8,2).lineTo(183.8,2).closePath().moveTo(171.8,2).lineTo(165.8,2).curveTo(164.9,2,164.4,1.4).curveTo(163.8,0.8,163.8,-0).curveTo(163.8,-0.8,164.4,-1.4).curveTo(164.9,-2,165.8,-2).lineTo(171.8,-2).curveTo(172.6,-2,173.2,-1.4).curveTo(173.8,-0.8,173.8,-0).curveTo(173.8,0.8,173.2,1.4).curveTo(172.6,2,171.8,2).lineTo(171.8,2).closePath().moveTo(159.8,2).lineTo(153.8,2).curveTo(152.9,2,152.3,1.4).curveTo(151.8,0.8,151.8,-0).curveTo(151.8,-0.8,152.3,-1.4).curveTo(152.9,-2,153.8,-2).lineTo(159.8,-2).curveTo(160.6,-2,161.2,-1.4).curveTo(161.8,-0.8,161.8,-0).curveTo(161.8,0.8,161.2,1.4).curveTo(160.6,2,159.8,2).lineTo(159.8,2).closePath().moveTo(147.8,2).lineTo(141.8,2).curveTo(140.9,2,140.3,1.4).curveTo(139.8,0.8,139.8,-0).curveTo(139.8,-0.8,140.3,-1.4).curveTo(140.9,-2,141.8,-2).lineTo(147.8,-2).curveTo(148.6,-2,149.2,-1.4).curveTo(149.8,-0.8,149.8,-0).curveTo(149.8,0.8,149.2,1.4).curveTo(148.6,2,147.8,2).lineTo(147.8,2).closePath().moveTo(135.8,2).lineTo(129.8,2).curveTo(128.9,2,128.4,1.4).curveTo(127.8,0.8,127.8,-0).curveTo(127.8,-0.8,128.4,-1.4).curveTo(128.9,-2,129.8,-2).lineTo(135.8,-2).curveTo(136.6,-2,137.2,-1.4).curveTo(137.8,-0.8,137.8,-0).curveTo(137.8,0.8,137.2,1.4).curveTo(136.6,2,135.8,2).lineTo(135.8,2).closePath().moveTo(123.8,2).lineTo(117.8,2).curveTo(116.9,2,116.3,1.4).curveTo(115.8,0.8,115.8,-0).curveTo(115.8,-0.8,116.3,-1.4).curveTo(116.9,-2,117.8,-2).lineTo(123.8,-2).curveTo(124.6,-2,125.2,-1.4).curveTo(125.8,-0.8,125.8,-0).curveTo(125.8,0.8,125.2,1.4).curveTo(124.6,2,123.8,2).lineTo(123.8,2).closePath().moveTo(111.8,2).lineTo(105.8,2).curveTo(104.9,2,104.3,1.4).curveTo(103.8,0.8,103.8,-0).curveTo(103.8,-0.8,104.3,-1.4).curveTo(104.9,-2,105.8,-2).lineTo(111.8,-2).curveTo(112.6,-2,113.2,-1.4).curveTo(113.8,-0.8,113.8,-0).curveTo(113.8,0.8,113.2,1.4).curveTo(112.6,2,111.8,2).lineTo(111.8,2).closePath().moveTo(99.8,2).lineTo(93.8,2).curveTo(92.9,2,92.4,1.4).curveTo(91.8,0.8,91.8,-0).curveTo(91.8,-0.8,92.4,-1.4).curveTo(92.9,-2,93.8,-2).lineTo(99.8,-2).curveTo(100.6,-2,101.2,-1.4).curveTo(101.8,-0.8,101.8,-0).curveTo(101.8,0.8,101.2,1.4).curveTo(100.6,2,99.8,2).lineTo(99.8,2).closePath().moveTo(87.8,2).lineTo(81.8,2).curveTo(80.9,2,80.3,1.4).curveTo(79.8,0.8,79.8,-0).curveTo(79.8,-0.8,80.3,-1.4).curveTo(80.9,-2,81.8,-2).lineTo(87.8,-2).curveTo(88.6,-2,89.2,-1.4).curveTo(89.8,-0.8,89.8,-0).curveTo(89.8,0.8,89.2,1.4).curveTo(88.6,2,87.8,2).lineTo(87.8,2).closePath().moveTo(75.8,2).lineTo(69.8,2).curveTo(68.9,2,68.3,1.4).curveTo(67.8,0.8,67.8,-0).curveTo(67.8,-0.8,68.3,-1.4).curveTo(68.9,-2,69.8,-2).lineTo(75.8,-2).curveTo(76.6,-2,77.2,-1.4).curveTo(77.8,-0.8,77.8,-0).curveTo(77.8,0.8,77.2,1.4).curveTo(76.6,2,75.8,2).lineTo(75.8,2).closePath().moveTo(63.8,2).lineTo(57.8,2).curveTo(56.9,2,56.4,1.4).curveTo(55.8,0.8,55.8,-0).curveTo(55.8,-0.8,56.4,-1.4).curveTo(56.9,-2,57.8,-2).lineTo(63.8,-2).curveTo(64.6,-2,65.2,-1.4).curveTo(65.8,-0.8,65.8,-0).curveTo(65.8,0.8,65.2,1.4).curveTo(64.6,2,63.8,2).lineTo(63.8,2).closePath().moveTo(51.8,2).lineTo(45.8,2).curveTo(44.9,2,44.3,1.4).curveTo(43.8,0.8,43.8,-0).curveTo(43.8,-0.8,44.3,-1.4).curveTo(44.9,-2,45.8,-2).lineTo(51.8,-2).curveTo(52.6,-2,53.2,-1.4).curveTo(53.8,-0.8,53.8,-0).curveTo(53.8,0.8,53.2,1.4).curveTo(52.6,2,51.8,2).lineTo(51.8,2).closePath().moveTo(39.8,2).lineTo(33.8,2).curveTo(32.9,2,32.3,1.4).curveTo(31.8,0.8,31.8,-0).curveTo(31.8,-0.8,32.3,-1.4).curveTo(32.9,-2,33.8,-2).lineTo(39.8,-2).curveTo(40.6,-2,41.2,-1.4).curveTo(41.8,-0.8,41.8,-0).curveTo(41.8,0.8,41.2,1.4).curveTo(40.6,2,39.8,2).lineTo(39.8,2).closePath().moveTo(27.8,2).lineTo(21.8,2).curveTo(20.9,2,20.4,1.4).curveTo(19.8,0.8,19.8,-0).curveTo(19.8,-0.8,20.4,-1.4).curveTo(20.9,-2,21.8,-2).lineTo(27.8,-2).curveTo(28.6,-2,29.2,-1.4).curveTo(29.8,-0.8,29.8,-0).curveTo(29.8,0.8,29.2,1.4).curveTo(28.6,2,27.8,2).lineTo(27.8,2).closePath().moveTo(15.8,2).lineTo(9.8,2).curveTo(8.9,2,8.3,1.4).curveTo(7.8,0.8,7.8,-0).curveTo(7.8,-0.8,8.3,-1.4).curveTo(8.9,-2,9.8,-2).lineTo(15.8,-2).curveTo(16.6,-2,17.2,-1.4).curveTo(17.8,-0.8,17.8,-0).curveTo(17.8,0.8,17.2,1.4).curveTo(16.6,2,15.8,2).lineTo(15.8,2).closePath().moveTo(3.8,2).lineTo(-2.2,2).curveTo(-3.1,2,-3.7,1.4).curveTo(-4.2,0.8,-4.2,-0).curveTo(-4.2,-0.8,-3.7,-1.4).curveTo(-3.1,-2,-2.2,-2).lineTo(3.8,-2).curveTo(4.6,-2,5.2,-1.4).curveTo(5.8,-0.8,5.8,-0).curveTo(5.8,0.8,5.2,1.4).curveTo(4.6,2,3.8,2).lineTo(3.8,2).closePath().moveTo(-8.2,2).lineTo(-14.2,2).curveTo(-15.1,2,-15.6,1.4).curveTo(-16.2,0.8,-16.2,-0).curveTo(-16.2,-0.8,-15.6,-1.4).curveTo(-15.1,-2,-14.2,-2).lineTo(-8.2,-2).curveTo(-7.4,-2,-6.8,-1.4).curveTo(-6.2,-0.8,-6.2,-0).curveTo(-6.2,0.8,-6.8,1.4).curveTo(-7.4,2,-8.2,2).lineTo(-8.2,2).closePath().moveTo(-20.2,2).lineTo(-26.2,2).curveTo(-27.1,2,-27.7,1.4).curveTo(-28.2,0.8,-28.2,-0).curveTo(-28.2,-0.8,-27.7,-1.4).curveTo(-27.1,-2,-26.2,-2).lineTo(-20.2,-2).curveTo(-19.4,-2,-18.8,-1.4).curveTo(-18.2,-0.8,-18.2,-0).curveTo(-18.2,0.8,-18.8,1.4).curveTo(-19.4,2,-20.2,2).lineTo(-20.2,2).closePath().moveTo(-32.2,2).lineTo(-38.2,2).curveTo(-39.1,2,-39.7,1.4).curveTo(-40.2,0.8,-40.2,-0).curveTo(-40.2,-0.8,-39.7,-1.4).curveTo(-39.1,-2,-38.2,-2).lineTo(-32.2,-2).curveTo(-31.4,-2,-30.8,-1.4).curveTo(-30.2,-0.8,-30.2,-0).curveTo(-30.2,0.8,-30.8,1.4).curveTo(-31.4,2,-32.2,2).lineTo(-32.2,2).closePath().moveTo(-44.2,2).lineTo(-50.2,2).curveTo(-51.1,2,-51.6,1.4).curveTo(-52.2,0.8,-52.2,-0).curveTo(-52.2,-0.8,-51.6,-1.4).curveTo(-51.1,-2,-50.2,-2).lineTo(-44.2,-2).curveTo(-43.4,-2,-42.8,-1.4).curveTo(-42.2,-0.8,-42.2,-0).curveTo(-42.2,0.8,-42.8,1.4).curveTo(-43.4,2,-44.2,2).lineTo(-44.2,2).closePath().moveTo(-56.2,2).lineTo(-62.2,2).curveTo(-63.1,2,-63.7,1.4).curveTo(-64.2,0.8,-64.2,-0).curveTo(-64.2,-0.8,-63.7,-1.4).curveTo(-63.1,-2,-62.2,-2).lineTo(-56.2,-2).curveTo(-55.4,-2,-54.8,-1.4).curveTo(-54.2,-0.8,-54.2,-0).curveTo(-54.2,0.8,-54.8,1.4).curveTo(-55.4,2,-56.2,2).lineTo(-56.2,2).closePath().moveTo(-68.2,2).lineTo(-74.2,2).curveTo(-75.1,2,-75.7,1.4).curveTo(-76.2,0.8,-76.2,-0).curveTo(-76.2,-0.8,-75.7,-1.4).curveTo(-75.1,-2,-74.2,-2).lineTo(-68.2,-2).curveTo(-67.4,-2,-66.8,-1.4).curveTo(-66.2,-0.8,-66.2,-0).curveTo(-66.2,0.8,-66.8,1.4).curveTo(-67.4,2,-68.2,2).lineTo(-68.2,2).closePath().moveTo(-80.2,2).lineTo(-86.2,2).curveTo(-87.1,2,-87.6,1.4).curveTo(-88.2,0.8,-88.2,-0).curveTo(-88.2,-0.8,-87.6,-1.4).curveTo(-87.1,-2,-86.2,-2).lineTo(-80.2,-2).curveTo(-79.4,-2,-78.8,-1.4).curveTo(-78.2,-0.8,-78.2,-0).curveTo(-78.2,0.8,-78.8,1.4).curveTo(-79.4,2,-80.2,2).lineTo(-80.2,2).closePath().moveTo(-92.2,2).lineTo(-98.2,2).curveTo(-99.1,2,-99.7,1.4).curveTo(-100.2,0.8,-100.2,-0).curveTo(-100.2,-0.8,-99.7,-1.4).curveTo(-99.1,-2,-98.2,-2).lineTo(-92.2,-2).curveTo(-91.4,-2,-90.8,-1.4).curveTo(-90.2,-0.8,-90.2,-0).curveTo(-90.2,0.8,-90.8,1.4).curveTo(-91.4,2,-92.2,2).lineTo(-92.2,2).closePath().moveTo(-104.2,2).lineTo(-110.2,2).curveTo(-111.1,2,-111.7,1.4).curveTo(-112.2,0.8,-112.2,-0).curveTo(-112.2,-0.8,-111.7,-1.4).curveTo(-111.1,-2,-110.2,-2).lineTo(-104.2,-2).curveTo(-103.4,-2,-102.8,-1.4).curveTo(-102.2,-0.8,-102.2,-0).curveTo(-102.2,0.8,-102.8,1.4).curveTo(-103.4,2,-104.2,2).lineTo(-104.2,2).closePath().moveTo(-116.2,2).lineTo(-122.2,2).curveTo(-123.1,2,-123.6,1.4).curveTo(-124.2,0.8,-124.2,-0).curveTo(-124.2,-0.8,-123.6,-1.4).curveTo(-123.1,-2,-122.2,-2).lineTo(-116.2,-2).curveTo(-115.4,-2,-114.8,-1.4).curveTo(-114.2,-0.8,-114.2,-0).curveTo(-114.2,0.8,-114.8,1.4).curveTo(-115.4,2,-116.2,2).lineTo(-116.2,2).closePath().moveTo(-128.2,2).lineTo(-134.2,2).curveTo(-135.1,2,-135.7,1.4).curveTo(-136.2,0.8,-136.2,-0).curveTo(-136.2,-0.8,-135.7,-1.4).curveTo(-135.1,-2,-134.2,-2).lineTo(-128.2,-2).curveTo(-127.4,-2,-126.8,-1.4).curveTo(-126.2,-0.8,-126.2,-0).curveTo(-126.2,0.8,-126.8,1.4).curveTo(-127.4,2,-128.2,2).lineTo(-128.2,2).closePath().moveTo(-140.2,2).lineTo(-146.2,2).curveTo(-147.1,2,-147.7,1.4).curveTo(-148.2,0.8,-148.2,-0).curveTo(-148.2,-0.8,-147.7,-1.4).curveTo(-147.1,-2,-146.2,-2).lineTo(-140.2,-2).curveTo(-139.4,-2,-138.8,-1.4).curveTo(-138.2,-0.8,-138.2,-0).curveTo(-138.2,0.8,-138.8,1.4).curveTo(-139.4,2,-140.2,2).lineTo(-140.2,2).closePath().moveTo(-152.2,2).lineTo(-158.2,2).curveTo(-159.1,2,-159.6,1.4).curveTo(-160.2,0.8,-160.2,-0).curveTo(-160.2,-0.8,-159.6,-1.4).curveTo(-159.1,-2,-158.2,-2).lineTo(-152.2,-2).curveTo(-151.4,-2,-150.8,-1.4).curveTo(-150.2,-0.8,-150.2,-0).curveTo(-150.2,0.8,-150.8,1.4).curveTo(-151.4,2,-152.2,2).lineTo(-152.2,2).closePath().moveTo(-164.2,2).lineTo(-170.2,2).curveTo(-171.1,2,-171.7,1.4).curveTo(-172.2,0.8,-172.2,-0).curveTo(-172.2,-0.8,-171.7,-1.4).curveTo(-171.1,-2,-170.2,-2).lineTo(-164.2,-2).curveTo(-163.4,-2,-162.8,-1.4).curveTo(-162.2,-0.8,-162.2,-0).curveTo(-162.2,0.8,-162.8,1.4).curveTo(-163.4,2,-164.2,2).lineTo(-164.2,2).closePath().moveTo(-176.2,2).lineTo(-182.2,2).curveTo(-183.1,2,-183.7,1.4).curveTo(-184.2,0.8,-184.2,-0).curveTo(-184.2,-0.8,-183.7,-1.4).curveTo(-183.1,-2,-182.2,-2).lineTo(-176.2,-2).curveTo(-175.4,-2,-174.8,-1.4).curveTo(-174.2,-0.8,-174.2,-0).curveTo(-174.2,0.8,-174.8,1.4).curveTo(-175.4,2,-176.2,2).lineTo(-176.2,2).closePath().moveTo(-188.2,2).lineTo(-194.2,2).curveTo(-195.1,2,-195.6,1.4).curveTo(-196.2,0.8,-196.2,-0).curveTo(-196.2,-0.8,-195.6,-1.4).curveTo(-195.1,-2,-194.2,-2).lineTo(-188.2,-2).curveTo(-187.4,-2,-186.8,-1.4).curveTo(-186.2,-0.8,-186.2,-0).curveTo(-186.2,0.8,-186.8,1.4).curveTo(-187.4,2,-188.2,2).lineTo(-188.2,2).closePath().moveTo(-200.2,2).lineTo(-206.2,2).curveTo(-207.1,2,-207.7,1.4).curveTo(-208.2,0.8,-208.2,-0).curveTo(-208.2,-0.8,-207.7,-1.4).curveTo(-207.1,-2,-206.2,-2).lineTo(-200.2,-2).curveTo(-199.4,-2,-198.8,-1.4).curveTo(-198.2,-0.8,-198.2,-0).curveTo(-198.2,0.8,-198.8,1.4).curveTo(-199.4,2,-200.2,2).lineTo(-200.2,2).closePath().moveTo(-212.2,2).lineTo(-218.2,2).curveTo(-219.1,2,-219.7,1.4).curveTo(-220.2,0.8,-220.2,-0).curveTo(-220.2,-0.8,-219.7,-1.4).curveTo(-219.1,-2,-218.2,-2).lineTo(-212.2,-2).curveTo(-211.4,-2,-210.8,-1.4).curveTo(-210.2,-0.8,-210.2,-0).curveTo(-210.2,0.8,-210.8,1.4).curveTo(-211.4,2,-212.2,2).lineTo(-212.2,2).closePath().moveTo(-224.2,2).lineTo(-230.2,2).curveTo(-231.1,2,-231.6,1.4).curveTo(-232.2,0.8,-232.2,-0).curveTo(-232.2,-0.8,-231.6,-1.4).curveTo(-231.1,-2,-230.2,-2).lineTo(-224.2,-2).curveTo(-223.4,-2,-222.8,-1.4).curveTo(-222.2,-0.8,-222.2,-0).curveTo(-222.2,0.8,-222.8,1.4).curveTo(-223.4,2,-224.2,2).lineTo(-224.2,2).closePath().moveTo(-236.2,2).lineTo(-242.2,2).curveTo(-243.1,2,-243.7,1.4).curveTo(-244.2,0.8,-244.2,-0).curveTo(-244.2,-0.8,-243.7,-1.4).curveTo(-243.1,-2,-242.2,-2).lineTo(-236.2,-2).curveTo(-235.4,-2,-234.8,-1.4).curveTo(-234.2,-0.8,-234.2,-0).curveTo(-234.2,0.8,-234.8,1.4).curveTo(-235.4,2,-236.2,2).lineTo(-236.2,2).closePath();
	this.shape.setTransform(-1,-58.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.2,-60.8,488.5,4);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_87 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(87).call(this.frame_87).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F3B500").beginStroke().moveTo(4.4,11.6).curveTo(2.9,10,2.9,6.7).curveTo(2.9,3.2,4.4,1.6).curveTo(5.9,0,8.4,0).curveTo(11,0,12.5,1.6).curveTo(14,3.2,14,6.7).curveTo(14,10,12.5,11.6).curveTo(11,13.3,8.5,13.2).curveTo(5.9,13.3,4.4,11.6).closePath().moveTo(7.3,3.3).curveTo(6.6,4.2,6.6,6.6).curveTo(6.6,9.1,7.3,9.8).curveTo(7.7,10.5,8.4,10.5).curveTo(9.2,10.5,9.6,9.9).curveTo(10.1,9,10.2,6.6).curveTo(10.1,4.2,9.6,3.3).curveTo(9.2,2.7,8.4,2.7).curveTo(7.7,2.7,7.3,3.3).closePath().moveTo(-8.4,13.2).lineTo(4.9,-13.2).lineTo(8.4,-13.2).lineTo(-4.9,13.2).closePath().moveTo(-12.5,-1.6).curveTo(-14,-3.3,-14,-6.6).curveTo(-14,-10,-12.5,-11.6).curveTo(-11,-13.2,-8.5,-13.2).curveTo(-5.9,-13.2,-4.4,-11.6).curveTo(-2.9,-10,-2.9,-6.6).curveTo(-2.9,-3.3,-4.4,-1.6).curveTo(-5.9,0,-8.4,0).curveTo(-11,-0,-12.5,-1.6).closePath().moveTo(-9.6,-10).curveTo(-10.3,-9.1,-10.3,-6.7).curveTo(-10.3,-4.2,-9.6,-3.3).curveTo(-9.3,-2.8,-8.5,-2.8).curveTo(-7.7,-2.8,-7.3,-3.3).curveTo(-6.8,-4.2,-6.8,-6.7).curveTo(-6.8,-9.1,-7.3,-9.9).curveTo(-7.7,-10.6,-8.5,-10.5).curveTo(-9.3,-10.5,-9.6,-10).closePath();
	this.shape.setTransform(14.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F3B500").beginStroke().moveTo(0.7,12.6).lineTo(0.7,-5.5).curveTo(-1.9,-3.1,-5.5,-1.9).lineTo(-5.5,-6.2).curveTo(-3.6,-6.9,-1.4,-8.6).curveTo(0.8,-10.3,1.6,-12.6).lineTo(5.5,-12.6).lineTo(5.5,12.6).closePath();
	this.shape_1.setTransform(-21.9,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.8,10.7).curveTo(-8,8.8,-8.4,5.7).lineTo(-3.6,5.2).curveTo(-3.4,6.8,-2.4,7.8).curveTo(-1.4,8.7,-0.1,8.7).curveTo(1.4,8.7,2.4,7.5).curveTo(3.5,6.3,3.5,3.8).curveTo(3.5,1.5,2.5,0.4).curveTo(1.4,-0.8,-0.2,-0.8).curveTo(-2.3,-0.8,-3.9,1).lineTo(-7.8,0.5).lineTo(-5.4,-12.6).lineTo(7.3,-12.6).lineTo(7.3,-8.1).lineTo(-1.7,-8.1).lineTo(-2.5,-3.8).curveTo(-0.9,-4.6,0.8,-4.6).curveTo(4,-4.6,6.2,-2.3).curveTo(8.4,0,8.4,3.7).curveTo(8.4,6.8,6.6,9.2).curveTo(4.2,12.6,-0.1,12.6).curveTo(-3.6,12.6,-5.8,10.7).closePath();
	this.shape_2.setTransform(-20.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#F3B500").beginStroke().moveTo(4.4,11.6).curveTo(2.9,10,2.9,6.7).curveTo(2.9,3.2,4.4,1.6).curveTo(5.9,0,8.4,0).curveTo(11,0,12.5,1.6).curveTo(14,3.2,14,6.7).curveTo(14,10,12.5,11.6).curveTo(11,13.3,8.5,13.2).curveTo(5.9,13.3,4.4,11.6).closePath().moveTo(7.2,3.3).curveTo(6.7,4.2,6.6,6.6).curveTo(6.7,9.1,7.2,9.8).curveTo(7.6,10.5,8.4,10.5).curveTo(9.2,10.5,9.6,9.9).curveTo(10.2,9,10.1,6.6).curveTo(10.2,4.2,9.6,3.3).curveTo(9.2,2.7,8.4,2.7).curveTo(7.6,2.7,7.2,3.3).closePath().moveTo(-8.4,13.2).lineTo(4.9,-13.2).lineTo(8.4,-13.2).lineTo(-4.8,13.2).closePath().moveTo(-12.5,-1.6).curveTo(-14,-3.3,-14,-6.6).curveTo(-14,-10,-12.5,-11.6).curveTo(-11,-13.2,-8.5,-13.2).curveTo(-5.9,-13.2,-4.4,-11.6).curveTo(-2.9,-10,-2.9,-6.6).curveTo(-2.9,-3.3,-4.4,-1.6).curveTo(-5.9,0,-8.4,0).curveTo(-11,-0,-12.5,-1.6).closePath().moveTo(-9.7,-10).curveTo(-10.2,-9.1,-10.2,-6.7).curveTo(-10.2,-4.2,-9.7,-3.3).curveTo(-9.2,-2.8,-8.5,-2.8).curveTo(-7.7,-2.8,-7.3,-3.3).curveTo(-6.7,-4.2,-6.8,-6.7).curveTo(-6.7,-9.1,-7.3,-9.9).curveTo(-7.7,-10.6,-8.5,-10.5).curveTo(-9.2,-10.5,-9.7,-10).closePath();
	this.shape_3.setTransform(24.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.9,9.9).curveTo(-8.1,7.2,-8.2,-0.1).curveTo(-8.2,-7.2,-5.7,-10.2).curveTo(-3.6,-12.8,-0,-12.8).curveTo(3.7,-12.8,5.7,-10.2).curveTo(8.2,-7.2,8.2,0).curveTo(8.2,7.1,5.7,10.2).curveTo(3.7,12.8,-0,12.8).curveTo(-3.7,12.8,-5.9,9.9).closePath().moveTo(-1.5,-8.3).curveTo(-2.3,-7.7,-2.6,-6.3).curveTo(-3.1,-4.4,-3.1,0).curveTo(-3.1,4.4,-2.6,6).curveTo(-2.2,7.7,-1.5,8.2).curveTo(-0.9,8.8,-0,8.8).curveTo(0.9,8.8,1.5,8.2).curveTo(2.3,7.7,2.6,6.2).curveTo(3.1,4.4,3.1,0).curveTo(3.1,-4.4,2.6,-6).curveTo(2.3,-7.7,1.5,-8.3).curveTo(0.9,-8.8,-0,-8.8).curveTo(-0.9,-8.8,-1.5,-8.3).closePath();
	this.shape_4.setTransform(-10.8,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#F3B500").beginStroke().moveTo(-8.4,12.6).curveTo(-8.1,10,-6.8,7.8).curveTo(-5.4,5.5,-1.4,1.8).curveTo(1.9,-1.3,2.6,-2.3).curveTo(3.6,-3.8,3.6,-5.3).curveTo(3.6,-6.9,2.8,-7.7).curveTo(1.9,-8.6,0.4,-8.6).curveTo(-1.1,-8.6,-2,-7.7).curveTo(-2.9,-6.8,-3.1,-4.7).lineTo(-7.8,-5.2).curveTo(-7.4,-9.1,-5.2,-10.9).curveTo(-2.9,-12.6,0.5,-12.6).curveTo(4.2,-12.6,6.3,-10.6).curveTo(8.4,-8.6,8.4,-5.6).curveTo(8.4,-3.9,7.8,-2.4).curveTo(7.2,-0.9,5.9,0.8).curveTo(5,1.9,2.8,4).lineTo(-0.1,6.8).lineTo(-1.1,8.1).lineTo(8.4,8.1).lineTo(8.4,12.6).closePath();
	this.shape_5.setTransform(-30.6,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.7,10.8).curveTo(-8,8.8,-8.3,5.7).lineTo(-3.7,5.1).curveTo(-3.4,6.9,-2.5,7.9).curveTo(-1.5,8.8,-0.1,8.8).curveTo(1.4,8.8,2.4,7.7).curveTo(3.4,6.6,3.4,4.6).curveTo(3.4,2.8,2.4,1.7).curveTo(1.5,0.7,0.1,0.7).curveTo(-0.9,0.7,-2.1,1).lineTo(-1.6,-2.9).curveTo(0.3,-2.8,1.4,-3.7).curveTo(2.4,-4.6,2.4,-6.1).curveTo(2.4,-7.4,1.6,-8.1).curveTo(0.9,-8.9,-0.4,-8.9).curveTo(-1.6,-8.9,-2.5,-8).curveTo(-3.3,-7.2,-3.5,-5.5).lineTo(-8,-6.3).curveTo(-7.5,-8.5,-6.5,-9.9).curveTo(-5.6,-11.2,-4,-12).curveTo(-2.3,-12.8,-0.2,-12.8).curveTo(3.3,-12.8,5.4,-10.5).curveTo(7.2,-8.7,7.2,-6.4).curveTo(7.2,-3.1,3.6,-1.1).curveTo(5.8,-0.7,7.1,0.9).curveTo(8.3,2.6,8.3,4.9).curveTo(8.3,8.1,5.9,10.5).curveTo(3.5,12.8,-0.1,12.8).curveTo(-3.5,12.8,-5.7,10.8).closePath();
	this.shape_6.setTransform(-30.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#F3B500").beginStroke().moveTo(1.2,12.6).lineTo(1.2,7.5).lineTo(-9,7.5).lineTo(-9,3.3).lineTo(1.8,-12.6).lineTo(5.9,-12.6).lineTo(5.9,3.3).lineTo(9,3.3).lineTo(9,7.5).lineTo(5.9,7.5).lineTo(5.9,12.6).closePath().moveTo(-4.5,3.3).lineTo(1.2,3.3).lineTo(1.2,-5.2).closePath();
	this.shape_7.setTransform(-30.2,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.8,10.7).curveTo(-8,8.8,-8.4,5.7).lineTo(-3.6,5.2).curveTo(-3.4,6.8,-2.4,7.8).curveTo(-1.4,8.7,-0.1,8.7).curveTo(1.4,8.7,2.4,7.5).curveTo(3.5,6.3,3.5,3.8).curveTo(3.5,1.5,2.5,0.4).curveTo(1.4,-0.8,-0.2,-0.8).curveTo(-2.3,-0.8,-3.9,1).lineTo(-7.8,0.5).lineTo(-5.4,-12.6).lineTo(7.3,-12.6).lineTo(7.3,-8.1).lineTo(-1.7,-8.1).lineTo(-2.5,-3.8).curveTo(-0.9,-4.6,0.8,-4.6).curveTo(4,-4.6,6.2,-2.3).curveTo(8.4,0,8.4,3.7).curveTo(8.4,6.8,6.6,9.2).curveTo(4.2,12.6,-0.1,12.6).curveTo(-3.6,12.6,-5.8,10.7).closePath();
	this.shape_8.setTransform(-29.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.9,9.8).curveTo(-8.4,6.9,-8.3,0.1).curveTo(-8.4,-6.7,-5.8,-9.8).curveTo(-3.2,-12.8,0.8,-12.8).curveTo(3.7,-12.8,5.5,-11.2).curveTo(7.4,-9.6,7.9,-6.6).lineTo(3.3,-6).curveTo(3.1,-7.5,2.4,-8.2).curveTo(1.6,-8.8,0.5,-8.9).curveTo(-1,-8.9,-2,-7.5).curveTo(-3.1,-6.1,-3.4,-1.8).curveTo(-1.6,-3.9,1,-3.9).curveTo(4.1,-3.9,6.2,-1.7).curveTo(8.4,0.7,8.3,4.3).curveTo(8.3,8.1,6.1,10.5).curveTo(3.9,12.8,0.3,12.8).curveTo(-3.5,12.8,-5.9,9.8).closePath().moveTo(-2,0.7).curveTo(-3,1.8,-3,3.9).curveTo(-3,6.3,-1.9,7.6).curveTo(-0.9,8.8,0.6,8.8).curveTo(1.9,8.8,2.8,7.8).curveTo(3.6,6.7,3.6,4.3).curveTo(3.6,1.9,2.7,0.7).curveTo(1.7,-0.4,0.3,-0.4).curveTo(-1.1,-0.4,-2,0.7).closePath();
	this.shape_9.setTransform(-30,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#F3B500").beginStroke().moveTo(4.4,11.6).curveTo(2.9,10,2.9,6.7).curveTo(2.9,3.2,4.4,1.6).curveTo(5.9,0,8.4,0).curveTo(11,0,12.5,1.6).curveTo(14,3.2,14,6.7).curveTo(14,10,12.5,11.6).curveTo(11,13.3,8.5,13.2).curveTo(5.9,13.3,4.4,11.6).closePath().moveTo(7.2,3.3).curveTo(6.7,4.2,6.6,6.6).curveTo(6.7,9.1,7.2,9.8).curveTo(7.6,10.5,8.4,10.5).curveTo(9.2,10.5,9.6,9.9).curveTo(10.2,9,10.1,6.6).curveTo(10.2,4.2,9.6,3.3).curveTo(9.2,2.7,8.4,2.7).curveTo(7.6,2.7,7.2,3.3).closePath().moveTo(-8.4,13.2).lineTo(5,-13.2).lineTo(8.4,-13.2).lineTo(-4.8,13.2).closePath().moveTo(-12.5,-1.6).curveTo(-14,-3.3,-14,-6.6).curveTo(-14,-10,-12.5,-11.6).curveTo(-11,-13.2,-8.5,-13.2).curveTo(-5.9,-13.2,-4.4,-11.6).curveTo(-2.9,-10,-2.9,-6.6).curveTo(-2.9,-3.3,-4.4,-1.6).curveTo(-5.9,0,-8.4,0).curveTo(-11,-0,-12.5,-1.6).closePath().moveTo(-9.7,-10).curveTo(-10.2,-9.1,-10.2,-6.7).curveTo(-10.2,-4.2,-9.7,-3.3).curveTo(-9.2,-2.8,-8.5,-2.8).curveTo(-7.7,-2.8,-7.3,-3.3).curveTo(-6.7,-4.2,-6.7,-6.7).curveTo(-6.7,-9.1,-7.3,-9.9).curveTo(-7.7,-10.6,-8.5,-10.5).curveTo(-9.2,-10.5,-9.7,-10).closePath();
	this.shape_10.setTransform(19.4,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.9,9.8).curveTo(-8.4,6.9,-8.3,0.1).curveTo(-8.4,-6.7,-5.8,-9.8).curveTo(-3.3,-12.8,0.8,-12.8).curveTo(3.7,-12.8,5.5,-11.2).curveTo(7.4,-9.6,7.9,-6.6).lineTo(3.3,-6).curveTo(3.1,-7.5,2.4,-8.2).curveTo(1.6,-8.8,0.5,-8.9).curveTo(-1,-8.9,-2,-7.5).curveTo(-3.1,-6.1,-3.4,-1.8).curveTo(-1.6,-3.9,1,-3.9).curveTo(4.1,-3.9,6.2,-1.7).curveTo(8.4,0.7,8.3,4.3).curveTo(8.3,8.1,6.1,10.5).curveTo(3.9,12.8,0.3,12.8).curveTo(-3.5,12.8,-5.9,9.8).closePath().moveTo(-2,0.7).curveTo(-3,1.8,-3,3.9).curveTo(-3,6.3,-1.9,7.6).curveTo(-0.8,8.8,0.6,8.8).curveTo(1.9,8.8,2.8,7.8).curveTo(3.6,6.7,3.6,4.3).curveTo(3.6,1.9,2.7,0.7).curveTo(1.7,-0.4,0.3,-0.4).curveTo(-1,-0.4,-2,0.7).closePath();
	this.shape_11.setTransform(-25.1,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.5,11).curveTo(-8.2,8.9,-8.2,5.2).curveTo(-8.2,3.1,-7.2,1.5).curveTo(-6.2,-0.2,-4,-1.2).curveTo(-5.9,-2,-6.7,-3.3).curveTo(-7.6,-4.7,-7.6,-6.4).curveTo(-7.6,-9.2,-5.6,-11).curveTo(-3.7,-12.8,-0.1,-12.8).curveTo(3.5,-12.8,5.4,-11).curveTo(7.5,-9.2,7.4,-6.4).curveTo(7.4,-4.6,6.5,-3.2).curveTo(5.7,-1.9,4,-1.2).curveTo(6.1,-0.3,7.1,1.3).curveTo(8.3,2.9,8.2,5).curveTo(8.2,8.5,6.1,10.6).curveTo(3.8,12.8,0.1,12.8).curveTo(-3.3,12.8,-5.5,11).closePath().moveTo(-2.7,2.1).curveTo(-3.5,3.3,-3.5,4.8).curveTo(-3.5,6.7,-2.5,7.8).curveTo(-1.4,8.9,0,8.9).curveTo(1.6,9,2.5,7.9).curveTo(3.5,6.8,3.5,4.8).curveTo(3.5,3,2.5,1.9).curveTo(1.5,0.9,0,0.9).curveTo(-1.8,0.9,-2.7,2.1).closePath().moveTo(-2.2,-8.2).curveTo(-3,-7.3,-3,-6).curveTo(-3,-4.5,-2.2,-3.8).curveTo(-1.5,-2.9,-0.1,-3).curveTo(1.3,-2.9,2.1,-3.8).curveTo(3,-4.6,2.9,-6).curveTo(3,-7.3,2.1,-8.2).curveTo(1.3,-9,-0.1,-9).curveTo(-1.4,-9,-2.2,-8.2).closePath();
	this.shape_12.setTransform(-10.7,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#F3B500").beginStroke().moveTo(-5.9,9.9).curveTo(-8.1,7.2,-8.2,-0.1).curveTo(-8.2,-7.2,-5.7,-10.2).curveTo(-3.6,-12.8,0,-12.8).curveTo(3.7,-12.8,5.7,-10.2).curveTo(8.1,-7.2,8.1,0).curveTo(8.1,7.1,5.7,10.2).curveTo(3.7,12.8,0,12.8).curveTo(-3.7,12.8,-5.9,9.9).closePath().moveTo(-1.5,-8.3).curveTo(-2.3,-7.7,-2.6,-6.3).curveTo(-3.1,-4.4,-3.1,0).curveTo(-3.1,4.4,-2.7,6).curveTo(-2.2,7.7,-1.5,8.2).curveTo(-0.9,8.8,0,8.8).curveTo(0.9,8.8,1.5,8.2).curveTo(2.3,7.7,2.6,6.2).curveTo(3.1,4.4,3.1,0).curveTo(3.1,-4.4,2.6,-6).curveTo(2.3,-7.7,1.5,-8.3).curveTo(0.9,-8.8,0,-8.8).curveTo(-0.9,-8.8,-1.5,-8.3).closePath();
	this.shape_13.setTransform(-5.9,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:-21.9}},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{x:-20.2}},{t:this.shape}]},3).to({state:[{t:this.shape_1,p:{x:-31.6}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_1,p:{x:-31.6}},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_5,p:{x:-30.6}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_5,p:{x:-30.6}},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_6},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_7,p:{x:-30.2}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_7,p:{x:-30.2}},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_2,p:{x:-29.9}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_8},{t:this.shape_2,p:{x:-10.4}},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_5,p:{x:-11.1}},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_7,p:{x:-10.7}},{t:this.shape_3}]},3).to({state:[{t:this.shape_11},{t:this.shape_9,p:{x:-5.7}},{t:this.shape_10}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_12},{t:this.shape_3}]},3).to({state:[{t:this.shape_9,p:{x:-30}},{t:this.shape_7,p:{x:-10.7}},{t:this.shape_3}]},19).to({state:[{t:this.shape_11},{t:this.shape_13},{t:this.shape_10}]},7).to({state:[{t:this.shape_2,p:{x:-29.9}},{t:this.shape_12},{t:this.shape_3}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-21.5,104,43.1);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F3B500").beginStroke().moveTo(-7.4,90.1).lineTo(-6.8,80.4).curveTo(-3.5,80.7,0.1,80.6).curveTo(3.5,80.7,6.8,80.4).lineTo(7.4,90.1).closePath().moveTo(-39.9,81.2).lineTo(-35.9,72.4).curveTo(-29.8,75.5,-23.2,77.4).lineTo(-26.3,86.5).closePath().moveTo(25.8,76.8).curveTo(32.4,74.6,38.4,71.3).lineTo(42.6,79.8).lineTo(29.1,85.7).closePath().moveTo(52.1,61.8).curveTo(54.6,59.6,57.1,57.1).curveTo(59.6,54.6,61.8,52.1).lineTo(68.9,58.6).lineTo(58.6,68.9).closePath().moveTo(-68.9,58.4).lineTo(-61.6,51.9).curveTo(-59.4,54.5,-56.9,57.1).curveTo(-54.5,59.5,-51.9,61.6).lineTo(-58.6,68.8).closePath().moveTo(-85.6,29.2).lineTo(-76.4,25.8).curveTo(-74.3,32.3,-71,38.3).lineTo(-79.7,42.6).closePath().moveTo(72.5,36).curveTo(75.6,29.8,77.6,23.2).lineTo(86.4,26.2).lineTo(81.1,39.9).closePath().moveTo(80.5,6.8).curveTo(80.8,3.5,80.7,0).curveTo(80.8,-3.5,80.5,-6.8).lineTo(90.1,-7.4).lineTo(90.1,7.4).closePath().moveTo(-90.1,-7.4).lineTo(-80.2,-6.8).curveTo(-80.5,-3.5,-80.5,0).curveTo(-80.5,3.5,-80.2,6.8).lineTo(-90.1,7.4).closePath().moveTo(-86.5,-26).lineTo(-81.2,-39.8).lineTo(-72.4,-35.7).curveTo(-75.5,-29.6,-77.4,-23).closePath().moveTo(71.3,-38.4).lineTo(79.7,-42.6).lineTo(85.4,-29.2).lineTo(76.8,-25.8).curveTo(74.6,-32.4,71.3,-38.4).closePath().moveTo(-68.9,-58.4).lineTo(-58.6,-68.8).lineTo(-51.9,-61.5).curveTo(-54.5,-59.4,-56.9,-57).curveTo(-59.4,-54.5,-61.6,-51.8).closePath().moveTo(57.1,-57).curveTo(54.6,-59.5,52,-61.7).lineTo(58.6,-68.9).lineTo(68.9,-58.6).lineTo(61.8,-52).curveTo(59.6,-54.5,57.1,-57).closePath().moveTo(-42.7,-79.6).lineTo(-29.3,-85.4).lineTo(-25.9,-76.4).curveTo(-32.5,-74.3,-38.4,-71).closePath().moveTo(23.1,-77.5).lineTo(26.2,-86.5).lineTo(39.8,-81.2).lineTo(35.8,-72.5).curveTo(29.7,-75.6,23.1,-77.5).closePath().moveTo(0.1,-80.6).curveTo(-3.5,-80.6,-6.8,-80.3).lineTo(-7.4,-90.1).lineTo(7.4,-90.1).lineTo(6.8,-80.3).curveTo(3.5,-80.6,0.1,-80.6).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180.1,180.1);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF0000").beginStroke().moveTo(0,40).lineTo(-0.1,40).lineTo(-7.5,-40).lineTo(7.5,-40).lineTo(0.1,40).lineTo(0,40).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-40,14.9,80);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F9C85A").beginStroke().moveTo(-60.2,31.8).lineTo(54.7,-30).lineTo(66.4,-35.7).lineTo(66.3,-35.6).lineTo(-66.4,35.7).closePath();
	this.shape.setTransform(-55.7,28.7,1,1,167.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#E0B546").beginStroke().moveTo(-60.2,31.8).lineTo(54.7,-30).lineTo(66.4,-35.7).lineTo(58,-30.6).lineTo(-59.7,32.6).lineTo(-66.4,35.7).closePath();
	this.shape_1.setTransform(-55.7,28.7,1,1,167.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#FFFFFF","#231F20"],[0,1],4,7.3,-3.1,-5.8).beginStroke().moveTo(-61,30.9).lineTo(52.5,-33.6).lineTo(66.5,-35.8).lineTo(-66.6,35.7).closePath();
	this.shape_2.setTransform(-55.9,28.9,1,1,167.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginRadialGradientFill(["#E9C17C","#DCB575","#BC955F","#A57E4F","#946F44","#89653D","#835F39","#815D38"],[0.09,0.11,0.18,0.255,0.341,0.439,0.561,0.78],8.3,3.2,0,2.1,-2.5,8.4).beginStroke().moveTo(-0.9,0.1).lineTo(-1,-0.1).lineTo(-0.9,-0.2).lineTo(1,-0.1).lineTo(1,0.1).lineTo(0.9,0.2).closePath();
	this.shape_3.setTransform(-78.4,40.1,1,1,167.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginRadialGradientFill(["#E9C17C","#815D38"],[0.09,0.78],0,0,0,0,0,3.4).beginStroke().moveTo(-0.1,1).curveTo(-0.5,0.9,-0.7,0.6).curveTo(-1,0.3,-1,-0.1).curveTo(-0.9,-0.5,-0.6,-0.7).curveTo(-0.3,-1,0.1,-1).curveTo(0.5,-0.9,0.8,-0.6).curveTo(1,-0.3,1,0.1).curveTo(0.9,0.5,0.6,0.8).curveTo(0.4,1,0.1,1).lineTo(-0.1,1).closePath();
	this.shape_4.setTransform(-78.4,40.1,1,1,167.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginLinearGradientFill(["#D5A765","#815D38"],[0,0.78],1.8,-1,-1.3,0.8).beginStroke().moveTo(-0.1,1.3).curveTo(-0.7,1.2,-1,0.8).curveTo(-1.3,0.4,-1.2,-0.1).curveTo(-1.2,-0.6,-0.8,-1).curveTo(-0.5,-1.3,0.1,-1.3).curveTo(0.6,-1.2,0.9,-0.8).curveTo(1.3,-0.5,1.3,0.1).curveTo(1.2,0.6,0.8,1).curveTo(0.4,1.3,0,1.3).lineTo(-0.1,1.3).closePath();
	this.shape_5.setTransform(-78.4,40.1,1,1,167.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginRadialGradientFill(["#E9C17C","#DCB575","#BC955F","#A57E4F","#946F44","#89653D","#835F39","#815D38"],[0.09,0.11,0.18,0.255,0.341,0.439,0.561,0.78],-10.5,-2.4,0,-3.9,2.8,8.4).beginStroke().moveTo(-1,0.1).lineTo(-1,-0.1).lineTo(0.9,-0.1).lineTo(1,0).lineTo(0.9,0.1).closePath();
	this.shape_6.setTransform(-68.4,49.4,1,1,167.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginRadialGradientFill(["#E9C17C","#815D38"],[0.09,0.78],0,0,0,0,0,3.4).beginStroke().moveTo(-1,0).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,-0,-1).curveTo(0.4,-1,0.7,-0.7).curveTo(1,-0.4,1,0).curveTo(1,0.4,0.7,0.7).curveTo(0.4,1,-0,1).curveTo(-1,1,-1,0).closePath();
	this.shape_7.setTransform(-68.4,49.4,1,1,167.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginLinearGradientFill(["#D5A765","#815D38"],[0,0.78],-1.7,1.2,1.3,-0.8).beginStroke().moveTo(-0.9,0.9).curveTo(-1.3,0.5,-1.2,0).curveTo(-1.3,-0.5,-0.9,-0.9).curveTo(-0.5,-1.3,0,-1.2).curveTo(0.5,-1.3,0.9,-0.9).curveTo(1.2,-0.5,1.2,0).curveTo(1.2,0.5,0.9,0.9).curveTo(0.5,1.2,0,1.2).curveTo(-0.5,1.2,-0.9,0.9).closePath();
	this.shape_8.setTransform(-68.4,49.4,1,1,167.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginRadialGradientFill(["#5B5C5F","#515254","#3A393A","#282526","#231F20"],[0.153,0.243,0.486,0.706,0.894],7.1,-0.2,0,7.1,-0.2,15.3).beginStroke().moveTo(-10.2,5.6).curveTo(-10.2,0.4,-6.5,-3.3).curveTo(-2.7,-7,2.5,-7).curveTo(6.7,-7,10.2,-4.4).lineTo(-10.1,7).closePath();
	this.shape_9.setTransform(-69.3,49,1,1,167.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#231F20").beginStroke().moveTo(-9.2,9.3).curveTo(-13,5.4,-13,0).curveTo(-13,-5.4,-9.2,-9.2).curveTo(-5.4,-13.1,0,-13.1).curveTo(5.4,-13.1,9.2,-9.2).curveTo(13.1,-5.4,13.1,0).curveTo(13.1,5.4,9.2,9.3).curveTo(5.4,13.1,0,13).curveTo(-5.4,13.1,-9.2,9.3).closePath();
	this.shape_10.setTransform(-72.9,44,1,1,167.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginLinearGradientFill(["#4A4A4C","#231F20","#424243"],[0.125,0.725,0.949],-13,0,13.1,0).beginStroke().moveTo(-9.2,9.2).curveTo(-13.1,5.4,-13.1,0).curveTo(-13.1,-5.4,-9.2,-9.2).curveTo(-5.4,-13.1,-0,-13).curveTo(5.4,-13.1,9.2,-9.2).curveTo(13,-5.4,13,0).curveTo(13,5.4,9.2,9.2).curveTo(5.4,13.1,-0,13.1).curveTo(-5.4,13.1,-9.2,9.2).closePath();
	this.shape_11.setTransform(-72.9,44.9,1,1,167.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.9,-20.7,114.1,99.2);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.stripe();
	this.instance.setTransform(-3.1,-122.3,1,0.652);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-122.3,6,129.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.green1();
	this.instance.setTransform(-34,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-34.5,68,69);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#F3B500").beginStroke().moveTo(-11.5,11.5).curveTo(-16.2,6.7,-16.3,0).curveTo(-16.2,-6.7,-11.5,-11.5).curveTo(-6.7,-16.2,0,-16.3).curveTo(6.7,-16.2,11.5,-11.5).curveTo(16.2,-6.7,16.3,0).curveTo(16.2,6.7,11.5,11.5).curveTo(6.7,16.2,0,16.3).curveTo(-6.7,16.2,-11.5,11.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-16.2,32.5,32.5);


(lib.title_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ПРОТЕСТИРУЙ СВОЙ", "bold 35px 'Arial'", "#820E00");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 527;
	this.text.setTransform(-2,-103.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.5,-103.7,531.1,207.5);


(lib.title_device = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("ДЕВАЙС", "bold 35px 'Arial'", "#820E00");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 527;
	this.text.setTransform(-2,-42.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.5,-42.1,531,84.2);


(lib.title_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("УСТАНОВИТЕ ПРИЛОЖЕНИЕ\nДЛЯ УЛУЧШЕНИЯ РАБОТЫ\nВАШЕГО УСТРОЙСТВА", "bold 30px 'Arial'", "#820E00");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 596;
	this.text.setTransform(-2,-67.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-67.3,600.2,207.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#FFFFFF","#231F20"],[0,1],1,-17,0,1,-17,121.9).beginStroke().moveTo(105.3,78).curveTo(125.5,46.3,125.5,8.5).curveTo(125.5,-17.9,115.3,-42).curveTo(105.4,-65.4,87.4,-83.3).curveTo(69.5,-101.3,46.1,-111.2).curveTo(22.1,-121.4,-4.4,-121.4).curveTo(-48,-121.4,-82.7,-95.1).curveTo(-116.7,-69.4,-128.8,-28.7).curveTo(-117.3,-70.9,-82.6,-97.7).curveTo(-47.2,-125.1,-2.3,-125.1).curveTo(24.3,-125.1,48.7,-114.8).curveTo(72.3,-104.8,90.4,-86.7).curveTo(108.6,-68.5,118.6,-45).curveTo(128.9,-20.6,128.8,6.1).curveTo(128.8,45,107.7,77.5).curveTo(87.1,109.2,52.9,125.1).curveTo(85.7,108.9,105.3,78).closePath();
	this.shape.setTransform(128.9,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.7,250.2);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#95A9CB","#BFB6AD","#8A7967"],[0.082,0.6,1],-60.7,-80.2,0,-60.7,-80.2,303.2).beginStroke().moveTo(105.4,79.5).curveTo(112.8,59.2,112.8,37.2).curveTo(112.8,12.1,103.1,-10.9).curveTo(93.7,-33.1,76.5,-50.2).curveTo(59.4,-67.4,37.2,-76.8).curveTo(14.2,-86.5,-10.9,-86.5).curveTo(-54.1,-86.5,-87.8,-59.7).curveTo(-121,-33.4,-131.1,7.5).curveTo(-129.5,-17.9,-118.6,-40.7).curveTo(-108.1,-62.9,-90.1,-79.8).curveTo(-72.2,-96.7,-49.4,-106).curveTo(-25.8,-115.5,-0.1,-115.5).curveTo(26.6,-115.5,50.9,-105.2).curveTo(74.5,-95.3,92.6,-77.1).curveTo(110.8,-59,120.8,-35.4).curveTo(131.1,-11.1,131.1,15.6).curveTo(131.1,45.1,118.6,71.6).curveTo(106.5,97.1,84.9,115.5).curveTo(98.2,99.2,105.4,79.5).closePath();
	this.shape.setTransform(131.1,115.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262.2,231.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#EFEFF0","#EDECEB","#E5E1DD","#D8D0C9","#C5BBAF","#AD9F90","#91806E","#8A7967"],[0.063,0.275,0.431,0.573,0.702,0.824,0.941,0.965],-39,-58.1,0,-39,-58.1,373).beginStroke().moveTo(-47.4,102.6).curveTo(-45.4,80.5,-37.7,58.4).curveTo(-26.4,25.6,-4.8,0.3).curveTo(-14.1,6.7,-24.9,21.8).curveTo(-46.6,52.1,-54.7,95.9).curveTo(-72.8,77.8,-82.8,54.3).curveTo(-93.1,30,-93.1,3.3).curveTo(-93.1,-18.4,-86.2,-38.8).curveTo(-63.3,-25.2,-27.8,-18.2).curveTo(-10.1,-14.6,3,-13.8).curveTo(-14.2,-38.2,-24.3,-66.2).curveTo(-31.5,-86.2,-34.3,-105.9).curveTo(-18.5,-116.3,-0.6,-121.8).curveTo(18.1,-127.5,37.7,-127.5).curveTo(67,-127.5,93.1,-115.2).curveTo(68.9,-95.1,48.3,-61.9).curveTo(26.8,-27.5,13.3,14.4).curveTo(3.7,44,-0.6,73.5).curveTo(-4.7,101.8,-3.5,127.5).curveTo(-27.9,119.4,-47.4,102.6).closePath();
	this.shape.setTransform(93.1,127.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.2,255);


(lib.button_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("НАЧАТЬ ТЕСТ", "bold 35px 'Arial'", "#F3B500");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 470;
	this.text.setTransform(-2,-62.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-62.6,474.2,125.3);


(lib.button_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.text = new cjs.Text("УСТАНОВИТЬ", "bold 35px 'Arial'", "#820E00");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 295;
	this.text.setTransform(-2,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#820E00").setStrokeStyle(3,2,0,3).moveTo(-221.4,-53.5).lineTo(221.4,-53.5).lineTo(221.4,53.5).lineTo(-221.4,53.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFBE00").beginStroke().moveTo(-221.4,53.5).lineTo(-221.4,-53.5).lineTo(221.4,-53.5).lineTo(221.4,53.5).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.9,-54.9,445.8,160.6);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ30();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.9,-197.7,155.8,395.4);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(13,-174.7,0.74,1.467,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:491.1,y:97.8},39).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.8,-454.6,389.7,559.8);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ27();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202,-202,404.1,404.1);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Path();
	this.instance.setTransform(-39.2,-2.5,1,1,0,0,0,93.1,127.5);
	this.instance.alpha = 0.219;

	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#F9C85A","#F8EDB4","#FED88A"],[0,0.51,0.875],-127.6,39.8,149.4,-46.6).beginStroke().moveTo(-51,120.9).curveTo(-74.6,111,-92.7,92.7).curveTo(-111,74.6,-120.9,51.1).curveTo(-131.2,26.7,-131.2,0).curveTo(-131.2,-26.7,-120.9,-51.1).curveTo(-111,-74.6,-92.7,-92.8).curveTo(-74.6,-110.9,-51,-120.9).curveTo(-26.7,-131.2,-0,-131.2).curveTo(26.7,-131.2,51,-120.9).curveTo(74.6,-110.9,92.8,-92.8).curveTo(110.9,-74.6,120.9,-51.1).curveTo(131.2,-26.7,131.2,0).curveTo(131.2,26.7,120.9,51.1).curveTo(110.9,74.6,92.8,92.7).curveTo(74.6,111,51,120.9).curveTo(26.7,131.2,-0,131.2).curveTo(-26.7,131.2,-51,120.9).closePath().moveTo(-50.9,-120.4).curveTo(-74.3,-110.4,-92.3,-92.4).curveTo(-110.4,-74.3,-120.3,-50.8).curveTo(-130.6,-26.6,-130.6,0).curveTo(-130.6,26.6,-120.3,50.9).curveTo(-110.4,74.3,-92.3,92.4).curveTo(-74.3,110.4,-50.9,120.4).curveTo(-26.6,130.6,-0,130.6).curveTo(26.6,130.6,50.8,120.4).curveTo(74.3,110.4,92.3,92.4).curveTo(110.5,74.3,120.3,50.9).curveTo(130.6,26.6,130.6,0).curveTo(130.6,-26.6,120.3,-50.8).curveTo(110.5,-74.3,92.3,-92.4).curveTo(74.3,-110.4,50.8,-120.4).curveTo(26.6,-130.6,-0,-130.6).curveTo(-26.6,-130.6,-50.9,-120.4).closePath();
	this.shape.setTransform(-0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#815D38","#E0B546","#815D38"],[0.027,0.388,0.965],1.8,2.9,-117.8,-181.5).beginStroke().moveTo(-30.3,128.1).curveTo(-54.8,122.3,-75.7,107.7).curveTo(-97.6,92.3,-111.7,69.8).curveTo(-125.3,48.1,-129.7,22.7).curveTo(-134.2,-2.7,-128.8,-27.7).curveTo(-123.2,-53.7,-107.8,-75.6).curveTo(-99.6,-87.2,-89.6,-96.5).lineTo(-88.6,-95.3).curveTo(-98.7,-85.8,-106.5,-74.7).curveTo(-121.7,-53,-127.2,-27.4).curveTo(-132.5,-2.6,-128.1,22.4).curveTo(-123.7,47.5,-110.3,69).curveTo(-96.4,91.2,-74.7,106.4).curveTo(-53.1,121.6,-27.5,127.1).curveTo(-2.8,132.4,22.2,128.1).lineTo(22.3,128.6).curveTo(19.9,129.1,16,129.7).curveTo(8.4,130.8,1.4,130.8).lineTo(6.4,130.9).curveTo(12.5,131,17.6,130.4).curveTo(8.6,131.6,-0.3,131.6).curveTo(-15.4,131.6,-30.3,128.1).closePath().moveTo(30.1,127.4).lineTo(30.3,128).lineTo(25,129.2).curveTo(28.1,128.4,30.1,127.4).closePath().moveTo(122.6,-43.2).curveTo(108.8,-82.5,74.6,-106.4).curveTo(56.3,-119.2,35.1,-125.2).curveTo(14.5,-131,-6.9,-129.8).lineTo(-7.6,-131.4).curveTo(14.2,-132.7,35.2,-126.9).curveTo(56.9,-120.8,75.5,-107.8).curveTo(110,-83.6,124,-43.9).curveTo(137.7,-5.2,127,34.3).lineTo(125.3,34.4).curveTo(136,-4.8,122.6,-43.2).closePath();
	this.shape_1.setTransform(0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginLinearGradientFill(["#E9C17C","#815D38"],[0.027,0.965],-132.8,0,132.8,0).beginStroke().moveTo(-51.7,122.4).curveTo(-75.5,112.3,-93.9,93.9).curveTo(-112.3,75.5,-122.4,51.7).curveTo(-132.8,27,-132.8,-0).curveTo(-132.8,-27,-122.4,-51.7).curveTo(-112.3,-75.5,-93.9,-93.9).curveTo(-75.5,-112.3,-51.7,-122.4).curveTo(-27,-132.8,0,-132.8).curveTo(27,-132.8,51.7,-122.4).curveTo(75.6,-112.3,93.9,-93.9).curveTo(112.3,-75.6,122.4,-51.7).curveTo(132.8,-27,132.8,-0).curveTo(132.8,27,122.4,51.7).curveTo(112.3,75.5,93.9,93.9).curveTo(75.6,112.3,51.7,122.4).curveTo(27,132.8,0,132.8).curveTo(-27,132.8,-51.7,122.4).closePath().moveTo(-50.1,-118.7).curveTo(-73.2,-108.9,-91.1,-91.1).curveTo(-108.9,-73.3,-118.7,-50.2).curveTo(-128.8,-26.2,-128.8,-0).curveTo(-128.8,26.2,-118.7,50.1).curveTo(-108.9,73.2,-91.1,91.1).curveTo(-73.2,108.9,-50.1,118.7).curveTo(-26.2,128.8,0,128.8).curveTo(26.2,128.8,50.2,118.7).curveTo(73.3,108.9,91.1,91.1).curveTo(108.9,73.2,118.7,50.1).curveTo(128.8,26.2,128.8,-0).curveTo(128.8,-26.2,118.7,-50.2).curveTo(108.9,-73.3,91.1,-91.1).curveTo(73.3,-108.9,50.2,-118.7).curveTo(26.2,-128.8,0,-128.8).curveTo(-26.2,-128.8,-50.1,-118.7).closePath();

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#231F20").beginStroke().moveTo(-6.2,-3.6).lineTo(-4.5,-7.1).lineTo(6.2,3.6).lineTo(4.6,7.1).closePath();
	this.shape_3.setTransform(96.6,50.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(4.6,7.1).lineTo(-6.2,-3.6).lineTo(-4.5,-7.1).lineTo(6.2,3.6).closePath();
	this.shape_4.setTransform(96.6,50.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#231F20").beginStroke().moveTo(-6.2,-3.6).lineTo(-4.5,-7.1).lineTo(6.2,3.6).lineTo(4.6,7.1).closePath();
	this.shape_5.setTransform(96.6,50.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#231F20").beginStroke().moveTo(-1.6,10.4).curveTo(-2.2,9.9,-2.8,8.9).lineTo(-7.9,0.6).curveTo(-8.3,0.1,-8.2,-0.7).curveTo(-8.1,-1.3,-7.7,-1.8).lineTo(-1.2,-9.9).curveTo(0.1,-11.5,1.5,-10.4).curveTo(2.2,-9.9,2.8,-8.9).lineTo(7.9,-0.6).curveTo(8.3,0,8.2,0.7).curveTo(8.1,1.2,7.7,1.8).lineTo(1.2,9.9).curveTo(0.4,10.9,-0.4,10.9).curveTo(-1,10.9,-1.6,10.4).closePath().moveTo(-0.5,-5.4).lineTo(-3.7,-1.4).curveTo(-4.1,-0.8,-4.1,-0.4).curveTo(-4.1,-0.1,-3.8,0.4).lineTo(-0.8,5.2).lineTo(-0.5,5.5).curveTo(0.1,5.9,0.5,5.4).lineTo(3.7,1.4).curveTo(4.4,0.6,3.8,-0.4).lineTo(0.7,-5.2).lineTo(0.5,-5.5).curveTo(0.2,-5.7,-0,-5.7).curveTo(-0.3,-5.7,-0.5,-5.4).closePath();
	this.shape_6.setTransform(79.8,74.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#231F20").beginStroke().moveTo(0.1,10.5).curveTo(-0.5,10.1,-1.4,9.2).lineTo(-7.7,1.9).curveTo(-8.2,1.2,-8.2,0.5).curveTo(-8.2,0,-7.9,-0.6).lineTo(-2.8,-9.6).curveTo(-1.7,-11.4,-0.1,-10.5).curveTo(0.6,-10.2,1.4,-9.2).lineTo(7.7,-1.9).curveTo(8.2,-1.3,8.2,-0.6).curveTo(8.1,0.1,7.9,0.5).lineTo(2.8,9.5).curveTo(2,10.8,1.1,10.8).curveTo(0.6,10.8,0.1,10.5).closePath().moveTo(-1.3,-5.3).lineTo(-3.9,-0.8).curveTo(-4.2,-0.2,-4.1,0.2).curveTo(-4,0.6,-3.7,1).lineTo(0.1,5.3).lineTo(0.4,5.5).curveTo(1,5.9,1.3,5.3).lineTo(3.9,0.8).curveTo(4.4,-0.1,3.7,-1).lineTo(-0.1,-5.3).lineTo(-0.4,-5.5).lineTo(-0.8,-5.7).curveTo(-1.1,-5.7,-1.3,-5.3).closePath();
	this.shape_7.setTransform(90.5,61.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(-2.8,8.9).lineTo(-7.9,0.6).curveTo(-8.3,0.1,-8.2,-0.7).curveTo(-8.1,-1.3,-7.7,-1.8).lineTo(-1.2,-9.9).curveTo(0.1,-11.5,1.5,-10.4).curveTo(2.2,-9.9,2.8,-8.9).lineTo(7.9,-0.6).curveTo(8.3,0,8.2,0.7).curveTo(8.1,1.2,7.7,1.8).lineTo(1.2,9.9).curveTo(-0.1,11.5,-1.6,10.4).curveTo(-2.2,9.9,-2.8,8.9).closePath().moveTo(-0.8,5.2).lineTo(-0.5,5.5).curveTo(0.1,5.9,0.5,5.4).lineTo(3.7,1.4).curveTo(4.4,0.6,3.8,-0.4).lineTo(0.7,-5.2).lineTo(0.5,-5.5).curveTo(-0.1,-5.9,-0.5,-5.4).lineTo(-3.7,-1.4).curveTo(-4.1,-0.8,-4.1,-0.4).curveTo(-4.1,-0.1,-3.8,0.4).closePath();
	this.shape_8.setTransform(79.8,74.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#231F20").beginStroke().moveTo(-1.6,10.4).curveTo(-2.2,9.9,-2.8,8.9).lineTo(-7.9,0.6).curveTo(-8.3,0.1,-8.2,-0.7).curveTo(-8.1,-1.3,-7.7,-1.8).lineTo(-1.2,-9.9).curveTo(0.1,-11.5,1.5,-10.4).curveTo(2.2,-9.9,2.8,-8.9).lineTo(7.9,-0.6).curveTo(8.3,0,8.2,0.7).curveTo(8.1,1.2,7.7,1.8).lineTo(1.2,9.9).curveTo(0.4,10.9,-0.4,10.9).curveTo(-1,10.9,-1.6,10.4).closePath().moveTo(-0.5,-5.4).lineTo(-3.7,-1.4).curveTo(-4.1,-0.8,-4.1,-0.4).curveTo(-4.1,-0.1,-3.8,0.4).lineTo(-0.8,5.2).lineTo(-0.5,5.5).curveTo(0.1,5.9,0.5,5.4).lineTo(3.7,1.4).curveTo(4.4,0.6,3.8,-0.4).lineTo(0.7,-5.2).lineTo(0.5,-5.5).curveTo(0.2,-5.7,-0,-5.7).curveTo(-0.3,-5.7,-0.5,-5.4).closePath();
	this.shape_9.setTransform(79.8,74.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(0.1,5.3).lineTo(0.4,5.5).curveTo(1,5.9,1.3,5.3).lineTo(3.9,0.8).curveTo(4.4,-0.1,3.7,-1).lineTo(-0.1,-5.2).lineTo(-0.4,-5.5).curveTo(-1,-5.9,-1.3,-5.3).lineTo(-3.9,-0.7).curveTo(-4.2,-0.1,-4.1,0.3).curveTo(-4,0.6,-3.7,1).closePath().moveTo(-1.4,9.2).lineTo(-7.7,1.9).curveTo(-8.2,1.2,-8.2,0.6).curveTo(-8.2,0,-7.9,-0.5).lineTo(-2.8,-9.5).curveTo(-1.7,-11.4,-0.1,-10.5).curveTo(0.6,-10.1,1.4,-9.2).lineTo(7.7,-1.9).curveTo(8.2,-1.3,8.2,-0.6).curveTo(8.1,0.1,7.9,0.6).lineTo(2.8,9.6).curveTo(1.7,11.4,0.1,10.5).curveTo(-0.5,10.2,-1.4,9.2).closePath();
	this.shape_10.setTransform(90.5,61.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#231F20").beginStroke().moveTo(0.1,10.5).curveTo(-0.5,10.1,-1.4,9.2).lineTo(-7.7,1.9).curveTo(-8.2,1.2,-8.2,0.5).curveTo(-8.2,0,-7.9,-0.6).lineTo(-2.8,-9.6).curveTo(-1.7,-11.4,-0.1,-10.5).curveTo(0.6,-10.2,1.4,-9.2).lineTo(7.7,-1.9).curveTo(8.2,-1.3,8.2,-0.6).curveTo(8.1,0.1,7.9,0.5).lineTo(2.8,9.5).curveTo(2,10.8,1.1,10.8).curveTo(0.6,10.8,0.1,10.5).closePath().moveTo(-1.3,-5.3).lineTo(-3.9,-0.8).curveTo(-4.2,-0.2,-4.1,0.2).curveTo(-4,0.6,-3.7,1).lineTo(0.1,5.3).lineTo(0.4,5.5).curveTo(1,5.9,1.3,5.3).lineTo(3.9,0.8).curveTo(4.4,-0.1,3.7,-1).lineTo(-0.1,-5.3).lineTo(-0.4,-5.5).lineTo(-0.8,-5.7).curveTo(-1.1,-5.7,-1.3,-5.3).closePath();
	this.shape_11.setTransform(90.5,61.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#231F20").beginStroke().moveTo(3.9,9.8).curveTo(3,9.6,2.1,9.1).lineTo(-6.5,4.6).curveTo(-7.2,4.2,-7.4,3.5).curveTo(-7.6,3,-7.5,2.3).lineTo(-6,-7.9).curveTo(-5.7,-10,-3.9,-9.8).curveTo(-3.2,-9.6,-2,-9.1).lineTo(6.5,-4.5).curveTo(7.2,-4.2,7.5,-3.5).curveTo(7.6,-2.9,7.6,-2.3).lineTo(6,7.9).curveTo(5.7,9.8,4.3,9.8).lineTo(3.9,9.8).closePath().moveTo(-3.1,-4.4).lineTo(-3.9,0.7).curveTo(-4,1.3,-3.7,1.7).lineTo(-3.1,2.2).lineTo(2,4.9).lineTo(2.3,5).curveTo(3,5.1,3.2,4.5).lineTo(3.9,-0.7).curveTo(4.1,-1.7,3.1,-2.2).lineTo(-2,-4.8).lineTo(-2.3,-5).lineTo(-2.5,-5).curveTo(-3.1,-5,-3.1,-4.4).closePath();
	this.shape_12.setTransform(106.5,24.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#231F20").beginStroke().moveTo(4.2,8.7).curveTo(-0.9,7.1,-5.4,5.5).curveTo(-6.3,5.3,-6.6,4.8).curveTo(-7.1,4.3,-7.1,3.5).lineTo(-7.2,-8.9).lineTo(-3.8,-7.8).lineTo(-3.7,1).curveTo(-3.7,2.1,-2.9,2.5).lineTo(-1.7,2.8).lineTo(-1.7,-4.2).curveTo(-1.8,-5.2,-1.3,-6).curveTo(-0.7,-6.7,0.2,-6.7).lineTo(1.3,-6.5).lineTo(5.5,-5).curveTo(6.4,-4.6,6.7,-4.3).curveTo(7.1,-3.8,7.1,-3).lineTo(7.2,6.5).curveTo(7.2,7.5,6.8,8.2).curveTo(6.3,8.9,5.3,8.9).curveTo(4.8,8.9,4.2,8.7).closePath().moveTo(1.7,-1.4).lineTo(1.7,4).lineTo(3.3,4.5).curveTo(3.8,4.5,3.8,3.6).lineTo(3.8,-0.5).curveTo(3.8,-1.6,3,-1.9).lineTo(2.3,-2.3).lineTo(2.2,-2.3).curveTo(1.6,-2.3,1.7,-1.4).closePath();
	this.shape_13.setTransform(109,7.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(2.1,9.1).lineTo(-6.5,4.6).curveTo(-7.2,4.2,-7.4,3.5).curveTo(-7.6,3,-7.5,2.3).lineTo(-6,-7.9).curveTo(-5.7,-10,-3.9,-9.8).curveTo(-3.2,-9.6,-2,-9.1).lineTo(6.5,-4.5).curveTo(7.2,-4.2,7.5,-3.5).curveTo(7.6,-2.9,7.6,-2.3).lineTo(6,7.9).curveTo(5.7,10.1,3.9,9.8).curveTo(3,9.6,2.1,9.1).closePath().moveTo(2,4.9).lineTo(2.3,5).curveTo(3,5.1,3.2,4.5).lineTo(3.9,-0.7).curveTo(4.1,-1.7,3.1,-2.2).lineTo(-2,-4.8).lineTo(-2.3,-5).curveTo(-3.1,-5.1,-3.1,-4.4).lineTo(-3.9,0.7).curveTo(-4,1.3,-3.7,1.7).lineTo(-3.1,2.2).closePath();
	this.shape_14.setTransform(106.5,24.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#231F20").beginStroke().moveTo(3.9,9.8).curveTo(3,9.6,2.1,9.1).lineTo(-6.5,4.6).curveTo(-7.2,4.2,-7.4,3.5).curveTo(-7.6,3,-7.5,2.3).lineTo(-6,-7.9).curveTo(-5.7,-10,-3.9,-9.8).curveTo(-3.2,-9.6,-2,-9.1).lineTo(6.5,-4.5).curveTo(7.2,-4.2,7.5,-3.5).curveTo(7.6,-2.9,7.6,-2.3).lineTo(6,7.9).curveTo(5.7,9.8,4.3,9.8).lineTo(3.9,9.8).closePath().moveTo(-3.1,-4.4).lineTo(-3.9,0.7).curveTo(-4,1.3,-3.7,1.7).lineTo(-3.1,2.2).lineTo(2,4.9).lineTo(2.3,5).curveTo(3,5.1,3.2,4.5).lineTo(3.9,-0.7).curveTo(4.1,-1.7,3.1,-2.2).lineTo(-2,-4.8).lineTo(-2.3,-5).lineTo(-2.5,-5).curveTo(-3.1,-5,-3.1,-4.4).closePath();
	this.shape_15.setTransform(106.5,24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(5.3,9).curveTo(4.8,9,4.2,8.8).curveTo(-0.9,7.2,-5.4,5.6).curveTo(-6.3,5.4,-6.6,4.9).curveTo(-7.1,4.4,-7.1,3.6).lineTo(-7.2,-8.8).lineTo(-3.8,-7.7).lineTo(-3.7,1.1).curveTo(-3.7,2.2,-2.9,2.6).lineTo(-1.7,2.9).lineTo(-1.7,-4.1).curveTo(-1.8,-5.1,-1.3,-5.9).curveTo(-0.7,-6.6,0.2,-6.6).lineTo(1.3,-6.4).lineTo(5.5,-4.9).curveTo(6.4,-4.5,6.7,-4.2).curveTo(7.1,-3.7,7.1,-2.9).lineTo(7.2,6.6).curveTo(7.2,7.6,6.8,8.3).curveTo(6.3,9,5.3,9).closePath().moveTo(3.3,4.6).curveTo(3.8,4.6,3.8,3.7).lineTo(3.8,-0.4).curveTo(3.8,-1.5,3,-1.8).lineTo(2.3,-2.2).lineTo(2.2,-2.2).curveTo(1.6,-2.2,1.7,-1.3).lineTo(1.7,4.1).closePath();
	this.shape_16.setTransform(109,7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#231F20").beginStroke().moveTo(4.2,8.7).curveTo(-0.9,7.1,-5.4,5.5).curveTo(-6.3,5.3,-6.6,4.8).curveTo(-7.1,4.3,-7.1,3.5).lineTo(-7.2,-8.9).lineTo(-3.8,-7.8).lineTo(-3.7,1).curveTo(-3.7,2.1,-2.9,2.5).lineTo(-1.7,2.8).lineTo(-1.7,-4.2).curveTo(-1.8,-5.2,-1.3,-6).curveTo(-0.7,-6.7,0.2,-6.7).lineTo(1.3,-6.5).lineTo(5.5,-5).curveTo(6.4,-4.6,6.7,-4.3).curveTo(7.1,-3.8,7.1,-3).lineTo(7.2,6.5).curveTo(7.2,7.5,6.8,8.2).curveTo(6.3,8.9,5.3,8.9).curveTo(4.8,8.9,4.2,8.7).closePath().moveTo(1.7,-1.4).lineTo(1.7,4).lineTo(3.3,4.5).curveTo(3.8,4.5,3.8,3.6).lineTo(3.8,-0.5).curveTo(3.8,-1.6,3,-1.9).lineTo(2.3,-2.3).lineTo(2.2,-2.3).curveTo(1.6,-2.3,1.7,-1.4).closePath();
	this.shape_17.setTransform(109,7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#231F20").beginStroke().moveTo(-4.9,6.6).curveTo(-5.4,6.1,-5.6,5.6).lineTo(-9,-4.2).curveTo(-9.8,-6.1,-8,-6.8).curveTo(-7.2,-7.1,-6.1,-7.1).lineTo(-5.3,-7).lineTo(3.6,-7.1).curveTo(4.3,-7.1,4.9,-6.6).curveTo(5.4,-6.2,5.6,-5.6).lineTo(9.1,4.1).curveTo(9.7,6.1,8,6.8).curveTo(7.3,7,6.1,7).lineTo(-3.6,7.1).curveTo(-4.3,7.1,-4.9,6.6).closePath().moveTo(-4,-3.4).lineTo(-4.4,-3.3).curveTo(-5,-3.1,-4.9,-2.5).lineTo(-3.1,2.4).curveTo(-2.9,3,-2.5,3.2).curveTo(-2.2,3.4,-1.6,3.4).lineTo(4,3.3).lineTo(4.4,3.3).curveTo(5.1,3.1,4.9,2.4).lineTo(3.1,-2.5).curveTo(2.8,-3.4,1.7,-3.4).closePath();
	this.shape_18.setTransform(105.3,-28.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#231F20").beginStroke().moveTo(-5,5.6).lineTo(-9,-1.6).curveTo(-9.5,-2.5,-9.4,-3.3).curveTo(-9.3,-4.2,-8.5,-4.7).lineTo(-7.4,-5).lineTo(-4.9,-5.4).curveTo(-3.5,-5.6,-2.7,-4.7).curveTo(-2.7,-5,-2.5,-5.3).curveTo(-2.4,-5.6,-2,-5.8).lineTo(-1.5,-6).lineTo(2.7,-6.7).curveTo(3.5,-6.8,4,-6.6).curveTo(4.5,-6.5,5,-5.7).lineTo(9,1.5).curveTo(9.5,2.4,9.4,3.3).curveTo(9.2,4.2,8.4,4.6).curveTo(8,4.9,7.4,5).lineTo(4.9,5.4).curveTo(3.4,5.6,2.6,4.6).curveTo(2.7,4.9,2.5,5.3).lineTo(1.9,5.8).lineTo(1.4,6).lineTo(-2.7,6.7).lineTo(-3.2,6.7).curveTo(-4.5,6.7,-5,5.6).closePath().moveTo(-4.9,-1.5).lineTo(-5.1,-1.5).curveTo(-5.5,-1.2,-5.1,-0.4).lineTo(-3.7,2.1).curveTo(-3.1,3.2,-2.3,3).lineTo(-1.6,2.9).lineTo(-1.4,2.8).curveTo(-0.7,2.5,-1.2,1.8).lineTo(-2.6,-0.9).curveTo(-2.9,-1.5,-3.2,-1.6).lineTo(-3.8,-1.7).closePath().moveTo(2.1,-3.1).lineTo(1.2,-2.9).curveTo(0.6,-2.5,1,-1.8).lineTo(2.5,0.9).curveTo(2.8,1.4,3,1.6).curveTo(3.2,1.7,3.6,1.7).lineTo(4.7,1.5).lineTo(4.8,1.5).curveTo(5.3,1.2,4.9,0.4).lineTo(3.5,-2.2).curveTo(3,-3.1,2.2,-3.1).lineTo(2.1,-3.1).closePath();
	this.shape_19.setTransform(99.1,-45.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(4,3.3).curveTo(4.2,3.4,4.4,3.3).curveTo(5.1,3.1,4.9,2.4).lineTo(3.1,-2.5).curveTo(2.8,-3.4,1.7,-3.4).lineTo(-4,-3.4).lineTo(-4.4,-3.3).curveTo(-5,-3.1,-4.9,-2.5).lineTo(-3.1,2.4).curveTo(-2.9,3,-2.5,3.2).curveTo(-2.2,3.4,-1.6,3.4).closePath().moveTo(6.1,7).lineTo(-3.6,7.1).curveTo(-4.3,7.1,-4.9,6.6).curveTo(-5.4,6.1,-5.6,5.6).lineTo(-9,-4.2).curveTo(-9.8,-6.1,-8,-6.8).curveTo(-7.2,-7.1,-6.1,-7.1).lineTo(-5.3,-7).lineTo(3.6,-7.1).curveTo(4.3,-7.1,4.9,-6.6).curveTo(5.4,-6.2,5.6,-5.6).lineTo(9.1,4.1).curveTo(9.7,6.1,8,6.8).curveTo(7.3,7,6.1,7).closePath();
	this.shape_20.setTransform(105.3,-28.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#231F20").beginStroke().moveTo(-4.9,6.6).curveTo(-5.4,6.1,-5.6,5.6).lineTo(-9,-4.2).curveTo(-9.8,-6.1,-8,-6.8).curveTo(-7.2,-7.1,-6.1,-7.1).lineTo(-5.3,-7).lineTo(3.6,-7.1).curveTo(4.3,-7.1,4.9,-6.6).curveTo(5.4,-6.2,5.6,-5.6).lineTo(9.1,4.1).curveTo(9.7,6.1,8,6.8).curveTo(7.3,7,6.1,7).lineTo(-3.6,7.1).curveTo(-4.3,7.1,-4.9,6.6).closePath().moveTo(-4,-3.4).lineTo(-4.4,-3.3).curveTo(-5,-3.1,-4.9,-2.5).lineTo(-3.1,2.4).curveTo(-2.9,3,-2.5,3.2).curveTo(-2.2,3.4,-1.6,3.4).lineTo(4,3.3).lineTo(4.4,3.3).curveTo(5.1,3.1,4.9,2.4).lineTo(3.1,-2.5).curveTo(2.8,-3.4,1.7,-3.4).closePath();
	this.shape_21.setTransform(105.3,-28.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(7.4,5).lineTo(4.9,5.4).curveTo(3.4,5.6,2.6,4.6).curveTo(2.7,4.9,2.5,5.3).curveTo(2.3,5.5,1.9,5.8).lineTo(1.4,6).lineTo(-2.7,6.7).curveTo(-4.4,6.9,-5,5.6).lineTo(-9,-1.6).curveTo(-9.5,-2.5,-9.4,-3.3).curveTo(-9.3,-4.2,-8.5,-4.7).curveTo(-8.1,-4.8,-7.4,-5).lineTo(-4.9,-5.4).curveTo(-3.5,-5.6,-2.7,-4.7).curveTo(-2.7,-5,-2.5,-5.3).curveTo(-2.4,-5.6,-2,-5.8).curveTo(-1.7,-6,-1.5,-6).lineTo(2.7,-6.7).curveTo(3.5,-6.8,4,-6.6).curveTo(4.5,-6.5,5,-5.7).lineTo(9,1.5).curveTo(9.5,2.4,9.4,3.3).curveTo(9.2,4.2,8.4,4.6).curveTo(8,4.9,7.4,5).closePath().moveTo(4.7,1.5).lineTo(4.8,1.5).curveTo(5.3,1.2,4.9,0.4).lineTo(3.5,-2.2).curveTo(2.9,-3.1,2.1,-3.1).lineTo(1.2,-2.9).curveTo(0.6,-2.5,1,-1.8).lineTo(2.5,0.9).curveTo(2.8,1.4,3,1.6).curveTo(3.2,1.7,3.6,1.7).closePath().moveTo(-1.6,2.9).lineTo(-1.4,2.8).curveTo(-0.7,2.5,-1.2,1.8).lineTo(-2.6,-0.9).curveTo(-2.9,-1.5,-3.2,-1.6).curveTo(-3.3,-1.7,-3.8,-1.7).lineTo(-4.9,-1.5).lineTo(-5.1,-1.5).curveTo(-5.5,-1.2,-5.1,-0.4).lineTo(-3.7,2.1).curveTo(-3.1,3.2,-2.3,3).closePath();
	this.shape_22.setTransform(99.1,-45.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#231F20").beginStroke().moveTo(-5,5.6).lineTo(-9,-1.6).curveTo(-9.5,-2.5,-9.4,-3.3).curveTo(-9.3,-4.2,-8.5,-4.7).lineTo(-7.4,-5).lineTo(-4.9,-5.4).curveTo(-3.5,-5.6,-2.7,-4.7).curveTo(-2.7,-5,-2.5,-5.3).curveTo(-2.4,-5.6,-2,-5.8).lineTo(-1.5,-6).lineTo(2.7,-6.7).curveTo(3.5,-6.8,4,-6.6).curveTo(4.5,-6.5,5,-5.7).lineTo(9,1.5).curveTo(9.5,2.4,9.4,3.3).curveTo(9.2,4.2,8.4,4.6).curveTo(8,4.9,7.4,5).lineTo(4.9,5.4).curveTo(3.4,5.6,2.6,4.6).curveTo(2.7,4.9,2.5,5.3).lineTo(1.9,5.8).lineTo(1.4,6).lineTo(-2.7,6.7).lineTo(-3.2,6.7).curveTo(-4.5,6.7,-5,5.6).closePath().moveTo(-4.9,-1.5).lineTo(-5.1,-1.5).curveTo(-5.5,-1.2,-5.1,-0.4).lineTo(-3.7,2.1).curveTo(-3.1,3.2,-2.3,3).lineTo(-1.6,2.9).lineTo(-1.4,2.8).curveTo(-0.7,2.5,-1.2,1.8).lineTo(-2.6,-0.9).curveTo(-2.9,-1.5,-3.2,-1.6).lineTo(-3.8,-1.7).closePath().moveTo(2.1,-3.1).lineTo(1.2,-2.9).curveTo(0.6,-2.5,1,-1.8).lineTo(2.5,0.9).curveTo(2.8,1.4,3,1.6).curveTo(3.2,1.7,3.6,1.7).lineTo(4.7,1.5).lineTo(4.8,1.5).curveTo(5.3,1.2,4.9,0.4).lineTo(3.5,-2.2).curveTo(3,-3.1,2.2,-3.1).lineTo(2.1,-3.1).closePath();
	this.shape_23.setTransform(99.1,-45.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#231F20").beginStroke().moveTo(-1.3,8.1).curveTo(-1.8,8,-2.3,7.6).lineTo(-9.9,0.6).curveTo(-11.5,-0.9,-10.3,-2.2).curveTo(-9.7,-2.9,-8.7,-3.4).lineTo(-0.1,-8).curveTo(0.6,-8.3,1.3,-8.1).curveTo(1.8,-8,2.3,-7.6).lineTo(10,-0.6).curveTo(11.5,0.9,10.3,2.2).curveTo(9.7,2.8,8.7,3.4).lineTo(0.1,8).curveTo(-0.3,8.2,-0.8,8.2).lineTo(-1.3,8.1).closePath().moveTo(-0.1,-3.8).lineTo(-5.1,-1.1).lineTo(-5.4,-0.9).curveTo(-6,-0.3,-5.4,0.1).lineTo(-1.6,3.6).curveTo(-1.1,4,-0.7,4).lineTo(0.1,3.8).lineTo(5.1,1.1).lineTo(5.4,0.9).curveTo(5.9,0.3,5.5,-0.1).lineTo(1.6,-3.6).curveTo(1.2,-4,0.7,-4).curveTo(0.3,-4,-0.1,-3.8).closePath();
	this.shape_24.setTransform(79.8,-74.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#231F20").beginStroke().moveTo(-9.2,4).lineTo(2.3,-1).lineTo(-2.5,-4.5).lineTo(0.6,-6.6).lineTo(9.1,-0.3).lineTo(-5.7,6.5).closePath();
	this.shape_25.setTransform(68.7,-86.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(8.7,3.4).lineTo(0.1,8).curveTo(-0.5,8.3,-1.3,8.1).curveTo(-1.8,8,-2.3,7.6).lineTo(-9.9,0.6).curveTo(-11.5,-0.9,-10.3,-2.2).curveTo(-9.7,-2.9,-8.7,-3.4).lineTo(-0.1,-8).curveTo(0.6,-8.3,1.3,-8.1).curveTo(1.8,-8,2.3,-7.6).lineTo(10,-0.6).curveTo(11.5,0.9,10.3,2.2).curveTo(9.7,2.8,8.7,3.4).closePath().moveTo(5.1,1.1).lineTo(5.4,0.9).curveTo(5.9,0.3,5.5,-0.1).lineTo(1.6,-3.6).curveTo(0.9,-4.3,-0.1,-3.8).lineTo(-5.1,-1.1).lineTo(-5.4,-0.9).curveTo(-6,-0.3,-5.4,0.1).lineTo(-1.6,3.6).curveTo(-1.1,4,-0.7,4).curveTo(-0.5,4,0.1,3.8).closePath();
	this.shape_26.setTransform(79.8,-74.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#231F20").beginStroke().moveTo(-1.3,8.1).curveTo(-1.8,8,-2.3,7.6).lineTo(-9.9,0.6).curveTo(-11.5,-0.9,-10.3,-2.2).curveTo(-9.7,-2.9,-8.7,-3.4).lineTo(-0.1,-8).curveTo(0.6,-8.3,1.3,-8.1).curveTo(1.8,-8,2.3,-7.6).lineTo(10,-0.6).curveTo(11.5,0.9,10.3,2.2).curveTo(9.7,2.8,8.7,3.4).lineTo(0.1,8).curveTo(-0.3,8.2,-0.8,8.2).lineTo(-1.3,8.1).closePath().moveTo(-0.1,-3.8).lineTo(-5.1,-1.1).lineTo(-5.4,-0.9).curveTo(-6,-0.3,-5.4,0.1).lineTo(-1.6,3.6).curveTo(-1.1,4,-0.7,4).lineTo(0.1,3.8).lineTo(5.1,1.1).lineTo(5.4,0.9).curveTo(5.9,0.3,5.5,-0.1).lineTo(1.6,-3.6).curveTo(1.2,-4,0.7,-4).curveTo(0.3,-4,-0.1,-3.8).closePath();
	this.shape_27.setTransform(79.8,-74.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(9.2,-0.3).lineTo(-5.7,6.6).lineTo(-9.1,4.1).lineTo(2.3,-1).lineTo(-2.4,-4.5).lineTo(0.6,-6.5).closePath();
	this.shape_28.setTransform(68.6,-86.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#231F20").beginStroke().moveTo(-9.2,4).lineTo(2.3,-1).lineTo(-2.5,-4.5).lineTo(0.6,-6.6).lineTo(9.1,-0.3).lineTo(-5.7,6.5).closePath();
	this.shape_29.setTransform(68.7,-86.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#231F20").beginStroke().moveTo(1.2,7.8).lineTo(-8.7,4.8).curveTo(-10.8,4.2,-10.2,2.4).curveTo(-10,1.5,-9.3,0.7).lineTo(-3.5,-7.1).curveTo(-3.1,-7.7,-2.3,-7.9).curveTo(-1.8,-8,-1.2,-7.8).lineTo(8.7,-4.8).curveTo(10.8,-4.2,10.2,-2.4).curveTo(10,-1.6,9.3,-0.7).lineTo(3.5,7.1).curveTo(3.1,7.7,2.3,7.9).lineTo(1.9,7.9).lineTo(1.2,7.8).closePath().moveTo(-1.7,-3.4).lineTo(-5.1,1.2).lineTo(-5.3,1.6).curveTo(-5.5,2.3,-4.9,2.4).lineTo(0.1,4).curveTo(0.7,4.1,1.1,3.9).curveTo(1.5,3.8,1.7,3.4).lineTo(5.1,-1.2).lineTo(5.3,-1.5).curveTo(5.5,-2.3,4.9,-2.4).lineTo(-0.1,-4).lineTo(-0.5,-4).curveTo(-1.2,-4,-1.7,-3.4).closePath();
	this.shape_30.setTransform(40,-101.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#231F20").beginStroke().moveTo(1.8,7.5).lineTo(-7.5,6.3).curveTo(-8.6,6.1,-9.1,5.6).curveTo(-9.8,5,-9.7,4).lineTo(-9.4,3).lineTo(-4.8,-6.1).curveTo(-4.4,-6.9,-3.9,-7.2).curveTo(-3.5,-7.6,-2.6,-7.5).lineTo(9.8,-5.9).lineTo(8.1,-2.7).lineTo(-0.6,-3.8).curveTo(-1.7,-4,-2.1,-3.2).lineTo(-2.7,-2.1).lineTo(4.3,-1.2).curveTo(5.4,-1,6,-0.4).curveTo(6.6,0.2,6.5,1.1).lineTo(6.2,2.2).lineTo(4.1,6.2).curveTo(3.6,7,3.2,7.2).curveTo(2.8,7.5,2.2,7.5).lineTo(1.8,7.5).closePath().moveTo(-5,2.6).curveTo(-5.1,3.2,-4.2,3.3).lineTo(-0.2,3.8).curveTo(1,4,1.4,3.2).curveTo(1.7,2.5,1.8,2.6).lineTo(1.9,2.5).curveTo(2,1.9,1,1.8).lineTo(-4.4,1.1).closePath();
	this.shape_31.setTransform(21.9,-107);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(9.3,-0.7).lineTo(3.5,7.1).curveTo(3.1,7.7,2.3,7.9).curveTo(1.9,8,1.2,7.8).lineTo(-8.7,4.8).curveTo(-10.8,4.2,-10.2,2.4).curveTo(-10,1.5,-9.3,0.7).lineTo(-3.5,-7.1).curveTo(-3.1,-7.7,-2.3,-7.9).curveTo(-1.8,-8,-1.2,-7.8).lineTo(8.7,-4.8).curveTo(10.8,-4.2,10.2,-2.4).curveTo(10,-1.6,9.3,-0.7).closePath().moveTo(5.1,-1.2).lineTo(5.3,-1.5).curveTo(5.5,-2.3,4.9,-2.4).lineTo(-0.1,-4).curveTo(-1,-4.3,-1.7,-3.4).lineTo(-5.1,1.2).lineTo(-5.3,1.6).curveTo(-5.5,2.3,-4.9,2.4).lineTo(0.1,4).curveTo(0.7,4.1,1.1,3.9).curveTo(1.5,3.8,1.7,3.4).closePath();
	this.shape_32.setTransform(40,-101.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#231F20").beginStroke().moveTo(1.2,7.8).lineTo(-8.7,4.8).curveTo(-10.8,4.2,-10.2,2.4).curveTo(-10,1.5,-9.3,0.7).lineTo(-3.5,-7.1).curveTo(-3.1,-7.7,-2.3,-7.9).curveTo(-1.8,-8,-1.2,-7.8).lineTo(8.7,-4.8).curveTo(10.8,-4.2,10.2,-2.4).curveTo(10,-1.6,9.3,-0.7).lineTo(3.5,7.1).curveTo(3.1,7.7,2.3,7.9).lineTo(1.9,7.9).lineTo(1.2,7.8).closePath().moveTo(-1.7,-3.4).lineTo(-5.1,1.2).lineTo(-5.3,1.6).curveTo(-5.5,2.3,-4.9,2.4).lineTo(0.1,4).curveTo(0.7,4.1,1.1,3.9).curveTo(1.5,3.8,1.7,3.4).lineTo(5.1,-1.2).lineTo(5.3,-1.5).curveTo(5.5,-2.3,4.9,-2.4).lineTo(-0.1,-4).lineTo(-0.5,-4).curveTo(-1.2,-4,-1.7,-3.4).closePath();
	this.shape_33.setTransform(40,-101.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(9.6,-5.9).lineTo(8,-2.7).lineTo(-0.7,-3.8).curveTo(-1.9,-4,-2.3,-3.2).lineTo(-2.8,-2.1).lineTo(4.2,-1.2).curveTo(5.3,-1,5.9,-0.4).curveTo(6.5,0.2,6.4,1.1).lineTo(6,2.2).lineTo(3.9,6.2).curveTo(3.4,7,3.1,7.2).curveTo(2.5,7.6,1.7,7.5).lineTo(-7.7,6.3).curveTo(-8.7,6.1,-9.3,5.6).curveTo(-10,5,-9.9,4).curveTo(-9.8,3.8,-9.5,3).lineTo(-4.9,-6.1).curveTo(-4.6,-6.9,-4.1,-7.2).curveTo(-3.6,-7.6,-2.7,-7.5).closePath().moveTo(1.7,2.6).lineTo(1.7,2.5).curveTo(1.8,1.9,0.9,1.8).lineTo(-4.5,1.1).lineTo(-5.2,2.6).curveTo(-5.2,3.2,-4.4,3.3).lineTo(-0.3,3.8).curveTo(0.8,4,1.3,3.2).curveTo(1.6,2.5,1.7,2.6).closePath();
	this.shape_34.setTransform(22,-107);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#231F20").beginStroke().moveTo(1.8,7.5).lineTo(-7.5,6.3).curveTo(-8.6,6.1,-9.1,5.6).curveTo(-9.8,5,-9.7,4).lineTo(-9.4,3).lineTo(-4.8,-6.1).curveTo(-4.4,-6.9,-3.9,-7.2).curveTo(-3.5,-7.6,-2.6,-7.5).lineTo(9.8,-5.9).lineTo(8.1,-2.7).lineTo(-0.6,-3.8).curveTo(-1.7,-4,-2.1,-3.2).lineTo(-2.7,-2.1).lineTo(4.3,-1.2).curveTo(5.4,-1,6,-0.4).curveTo(6.6,0.2,6.5,1.1).lineTo(6.2,2.2).lineTo(4.1,6.2).curveTo(3.6,7,3.2,7.2).curveTo(2.8,7.5,2.2,7.5).lineTo(1.8,7.5).closePath().moveTo(-5,2.6).curveTo(-5.1,3.2,-4.2,3.3).lineTo(-0.2,3.8).curveTo(1,4,1.4,3.2).curveTo(1.7,2.5,1.8,2.6).lineTo(1.9,2.5).curveTo(2,1.9,1,1.8).lineTo(-4.4,1.1).closePath();
	this.shape_35.setTransform(21.9,-107);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#231F20").beginStroke().moveTo(-7.8,7.1).curveTo(-8,6.3,-7.8,5.1).lineTo(-6.6,-4.5).curveTo(-6.5,-5.1,-5.9,-5.8).curveTo(-5.4,-6.1,-4.8,-6.2).lineTo(5.3,-8.5).curveTo(7.4,-8.9,7.7,-7.1).curveTo(7.9,-6.4,7.8,-5.1).lineTo(6.5,4.5).curveTo(6.5,5.2,5.9,5.8).curveTo(5.5,6.1,4.8,6.3).lineTo(-5.3,8.5).lineTo(-6.1,8.5).curveTo(-7.4,8.5,-7.8,7.1).closePath().moveTo(3,-4.5).lineTo(-2,-3.4).curveTo(-3,-3.2,-3.2,-2.1).lineTo(-3.9,3.6).lineTo(-3.9,3.9).curveTo(-3.7,4.6,-3.1,4.5).lineTo(2,3.4).curveTo(2.7,3.3,2.9,2.9).curveTo(3,2.7,3.1,2.1).lineTo(3.8,-3.5).lineTo(3.8,-3.9).curveTo(3.7,-4.5,3.2,-4.5).lineTo(3,-4.5).closePath();
	this.shape_36.setTransform(-14.7,-108.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#231F20").beginStroke().moveTo(-5.4,6.2).lineTo(2.3,3.1).curveTo(3.5,2.7,3.5,1.8).lineTo(3.5,1.1).lineTo(3.5,0.9).curveTo(3.3,0.4,2.4,0.8).lineTo(-3.6,3.2).curveTo(-4.7,3.6,-5.4,3.4).curveTo(-6.2,3.2,-6.7,2.2).curveTo(-6.9,1.6,-6.9,1.2).lineTo(-7.2,-4.8).lineTo(5.5,-9.8).lineTo(5.6,-6.3).lineTo(-3.3,-2.7).lineTo(-3.2,-1.4).lineTo(-3.2,-1.2).curveTo(-3,-0.7,-2.2,-1).lineTo(3.8,-3.4).curveTo(4.8,-3.9,5.7,-3.6).curveTo(6.5,-3.4,6.8,-2.5).curveTo(7.1,-2.1,7.1,-1.4).lineTo(7.2,3.1).curveTo(7.2,4,7,4.4).curveTo(6.7,5,5.9,5.3).lineTo(-5.3,9.8).closePath();
	this.shape_37.setTransform(-33.3,-104);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(7.8,-5.1).lineTo(6.5,4.5).curveTo(6.5,5.1,5.9,5.8).curveTo(5.5,6.1,4.8,6.2).lineTo(-5.3,8.5).curveTo(-7.4,8.9,-7.8,7.1).curveTo(-8,6.3,-7.8,5.1).lineTo(-6.6,-4.5).curveTo(-6.5,-5.1,-5.9,-5.8).curveTo(-5.4,-6.1,-4.8,-6.2).lineTo(5.3,-8.5).curveTo(7.4,-8.9,7.7,-7.1).curveTo(7.9,-6.4,7.8,-5.1).closePath().moveTo(3.8,-3.5).curveTo(3.9,-3.8,3.8,-3.9).curveTo(3.7,-4.6,3,-4.5).lineTo(-2,-3.5).curveTo(-3,-3.2,-3.2,-2.1).lineTo(-3.9,3.5).lineTo(-3.9,3.9).curveTo(-3.7,4.6,-3.1,4.5).lineTo(2,3.4).curveTo(2.7,3.2,2.9,2.9).curveTo(3,2.7,3.1,2.1).closePath();
	this.shape_38.setTransform(-14.7,-108.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#231F20").beginStroke().moveTo(-7.8,7.1).curveTo(-8,6.3,-7.8,5.1).lineTo(-6.6,-4.5).curveTo(-6.5,-5.1,-5.9,-5.8).curveTo(-5.4,-6.1,-4.8,-6.2).lineTo(5.3,-8.5).curveTo(7.4,-8.9,7.7,-7.1).curveTo(7.9,-6.4,7.8,-5.1).lineTo(6.5,4.5).curveTo(6.5,5.2,5.9,5.8).curveTo(5.5,6.1,4.8,6.3).lineTo(-5.3,8.5).lineTo(-6.1,8.5).curveTo(-7.4,8.5,-7.8,7.1).closePath().moveTo(3,-4.5).lineTo(-2,-3.4).curveTo(-3,-3.2,-3.2,-2.1).lineTo(-3.9,3.6).lineTo(-3.9,3.9).curveTo(-3.7,4.6,-3.1,4.5).lineTo(2,3.4).curveTo(2.7,3.3,2.9,2.9).curveTo(3,2.7,3.1,2.1).lineTo(3.8,-3.5).lineTo(3.8,-3.9).curveTo(3.7,-4.5,3.2,-4.5).lineTo(3,-4.5).closePath();
	this.shape_39.setTransform(-14.7,-108.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(5.5,-9.8).lineTo(5.6,-6.3).lineTo(-3.2,-2.7).curveTo(-3.1,-1.4,-3.2,-1.4).lineTo(-3.1,-1.2).curveTo(-2.9,-0.7,-2.2,-1).lineTo(3.9,-3.4).curveTo(4.8,-3.9,5.7,-3.6).curveTo(6.5,-3.4,6.9,-2.5).curveTo(7.1,-2.1,7.1,-1.4).lineTo(7.2,3.1).curveTo(7.2,4,7,4.4).curveTo(6.8,5,5.9,5.3).lineTo(-5.3,9.8).lineTo(-5.4,6.2).lineTo(2.4,3.1).curveTo(3.5,2.7,3.5,1.8).curveTo(3.5,1.1,3.5,1.1).lineTo(3.5,0.9).curveTo(3.3,0.4,2.4,0.8).lineTo(-3.6,3.2).curveTo(-4.7,3.6,-5.4,3.4).curveTo(-6.2,3.2,-6.6,2.2).curveTo(-6.8,1.6,-6.8,1.2).lineTo(-7.2,-4.8).closePath();
	this.shape_40.setTransform(-33.4,-104);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.beginFill("#231F20").beginStroke().moveTo(-5.4,6.2).lineTo(2.3,3.1).curveTo(3.5,2.7,3.5,1.8).lineTo(3.5,1.1).lineTo(3.5,0.9).curveTo(3.3,0.4,2.4,0.8).lineTo(-3.6,3.2).curveTo(-4.7,3.6,-5.4,3.4).curveTo(-6.2,3.2,-6.7,2.2).curveTo(-6.9,1.6,-6.9,1.2).lineTo(-7.2,-4.8).lineTo(5.5,-9.8).lineTo(5.6,-6.3).lineTo(-3.3,-2.7).lineTo(-3.2,-1.4).lineTo(-3.2,-1.2).curveTo(-3,-0.7,-2.2,-1).lineTo(3.8,-3.4).curveTo(4.8,-3.9,5.7,-3.6).curveTo(6.5,-3.4,6.8,-2.5).curveTo(7.1,-2.1,7.1,-1.4).lineTo(7.2,3.1).curveTo(7.2,4,7,4.4).curveTo(6.7,5,5.9,5.3).lineTo(-5.3,9.8).closePath();
	this.shape_41.setTransform(-33.3,-104);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.beginFill("#231F20").beginStroke().moveTo(-3.5,9.9).curveTo(-4.1,9.2,-4.5,8.2).lineTo(-7.9,-0.9).curveTo(-8.2,-1.5,-7.9,-2.3).curveTo(-7.7,-2.7,-7.2,-3.3).lineTo(0.7,-9.9).curveTo(2.3,-11.3,3.5,-9.9).curveTo(4,-9.4,4.5,-8.2).lineTo(7.9,0.9).curveTo(8.2,1.6,7.9,2.3).curveTo(7.7,2.7,7.2,3.3).lineTo(-0.7,9.9).curveTo(-1.5,10.6,-2.2,10.6).curveTo(-2.9,10.6,-3.5,9.9).closePath().moveTo(0.6,-5.4).lineTo(-3.4,-2).curveTo(-4.2,-1.4,-3.7,-0.3).lineTo(-1.7,4.9).lineTo(-1.6,5.3).curveTo(-1,5.8,-0.6,5.4).lineTo(3.4,2).curveTo(3.9,1.6,3.9,1.2).curveTo(3.9,0.8,3.7,0.3).lineTo(1.8,-5).lineTo(1.6,-5.3).curveTo(1.3,-5.6,1,-5.6).curveTo(0.9,-5.6,0.9,-5.6).curveTo(0.8,-5.5,0.8,-5.5).curveTo(0.7,-5.5,0.7,-5.5).curveTo(0.6,-5.4,0.6,-5.4).closePath();
	this.shape_42.setTransform(-63.8,-88.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.beginFill("#231F20").beginStroke().moveTo(-4.9,8.6).lineTo(-5.9,7.2).lineTo(-8.8,2.3).lineTo(-6.3,-0.7).lineTo(-3.9,3.5).lineTo(-3.5,4).curveTo(-3.1,4.3,-2.6,3.8).lineTo(0.7,-0.2).curveTo(1.3,-0.9,0.8,-1.5).lineTo(-1.8,-6.1).lineTo(0.7,-9.1).lineTo(8.8,3.4).lineTo(5.8,7).lineTo(3,2.3).lineTo(-1.3,7.4).curveTo(-2.6,9.1,-3.7,9.1).curveTo(-4.3,9.1,-4.9,8.6).closePath();
	this.shape_43.setTransform(-78.9,-78.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(4.5,-8.2).lineTo(7.9,0.9).curveTo(8.2,1.6,7.9,2.3).curveTo(7.7,2.8,7.2,3.2).lineTo(-0.7,9.9).curveTo(-2.3,11.3,-3.5,9.9).curveTo(-4.1,9.2,-4.4,8.2).lineTo(-7.9,-0.9).curveTo(-8.2,-1.6,-7.9,-2.2).curveTo(-7.7,-2.8,-7.2,-3.2).lineTo(0.7,-10).curveTo(2.3,-11.3,3.5,-9.9).curveTo(4,-9.4,4.5,-8.2).closePath().moveTo(1.8,-5).curveTo(1.6,-5.2,1.6,-5.2).curveTo(1.1,-5.8,0.6,-5.4).lineTo(-3.4,-2.1).curveTo(-4.2,-1.4,-3.7,-0.4).lineTo(-1.7,4.9).lineTo(-1.5,5.3).curveTo(-1,5.8,-0.5,5.4).lineTo(3.4,2).curveTo(3.9,1.6,4,1.2).curveTo(4,0.8,3.8,0.3).closePath();
	this.shape_44.setTransform(-63.8,-88.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.beginFill("#231F20").beginStroke().moveTo(-3.5,9.9).curveTo(-4.1,9.2,-4.5,8.2).lineTo(-7.9,-0.9).curveTo(-8.2,-1.5,-7.9,-2.3).curveTo(-7.7,-2.7,-7.2,-3.3).lineTo(0.7,-9.9).curveTo(2.3,-11.3,3.5,-9.9).curveTo(4,-9.4,4.5,-8.2).lineTo(7.9,0.9).curveTo(8.2,1.6,7.9,2.3).curveTo(7.7,2.7,7.2,3.3).lineTo(-0.7,9.9).curveTo(-1.5,10.6,-2.2,10.6).curveTo(-2.9,10.6,-3.5,9.9).closePath().moveTo(0.6,-5.4).lineTo(-3.4,-2).curveTo(-4.2,-1.4,-3.7,-0.3).lineTo(-1.7,4.9).lineTo(-1.6,5.3).curveTo(-1,5.8,-0.6,5.4).lineTo(3.4,2).curveTo(3.9,1.6,3.9,1.2).curveTo(3.9,0.8,3.7,0.3).lineTo(1.8,-5).lineTo(1.6,-5.3).curveTo(1.3,-5.6,1,-5.6).curveTo(0.9,-5.6,0.9,-5.6).curveTo(0.8,-5.5,0.8,-5.5).curveTo(0.7,-5.5,0.7,-5.5).curveTo(0.6,-5.4,0.6,-5.4).closePath();
	this.shape_45.setTransform(-63.8,-88.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(0.7,-8.9).lineTo(8.8,3.6).lineTo(5.8,7.2).lineTo(3,2.5).lineTo(-1.3,7.6).curveTo(-3.3,10.1,-4.9,8.8).curveTo(-5.1,8.6,-5.9,7.4).lineTo(-8.8,2.4).lineTo(-6.3,-0.5).lineTo(-3.9,3.7).lineTo(-3.5,4.2).curveTo(-3.1,4.5,-2.6,4).lineTo(0.7,0).curveTo(1.3,-0.7,0.8,-1.3).lineTo(-1.8,-5.9).closePath();
	this.shape_46.setTransform(-78.9,-78.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.beginFill("#231F20").beginStroke().moveTo(-4.9,8.6).lineTo(-5.9,7.2).lineTo(-8.8,2.3).lineTo(-6.3,-0.7).lineTo(-3.9,3.5).lineTo(-3.5,4).curveTo(-3.1,4.3,-2.6,3.8).lineTo(0.7,-0.2).curveTo(1.3,-0.9,0.8,-1.5).lineTo(-1.8,-6.1).lineTo(0.7,-9.1).lineTo(8.8,3.4).lineTo(5.8,7).lineTo(3,2.3).lineTo(-1.3,7.4).curveTo(-2.6,9.1,-3.7,9.1).curveTo(-4.3,9.1,-4.9,8.6).closePath();
	this.shape_47.setTransform(-78.9,-78.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.beginFill("#231F20").beginStroke().moveTo(1.2,10.5).curveTo(0.6,10.2,-0.4,9.3).lineTo(-1,8.7).lineTo(-7.5,2.7).curveTo(-8,2.2,-8.1,1.5).curveTo(-8.1,0.8,-7.9,0.3).lineTo(-3.8,-9.2).curveTo(-2.9,-11.2,-1.2,-10.4).curveTo(-0.6,-10.1,0.4,-9.3).lineTo(7.5,-2.7).curveTo(8,-2.2,8.1,-1.4).curveTo(8.1,-0.9,7.9,-0.3).lineTo(3.7,9.2).curveTo(3.1,10.7,2.1,10.7).curveTo(1.7,10.7,1.2,10.5).closePath().moveTo(-1.9,-5.1).lineTo(-4,-0.3).curveTo(-4.4,0.6,-3.6,1.4).lineTo(0.6,5.2).lineTo(0.9,5.4).curveTo(1.6,5.7,1.9,5.1).lineTo(3.9,0.4).curveTo(4.2,-0.3,4,-0.6).lineTo(3.5,-1.3).lineTo(-0.7,-5.2).lineTo(-1,-5.4).lineTo(-1.4,-5.5).curveTo(-1.7,-5.5,-1.9,-5.1).closePath();
	this.shape_48.setTransform(-96.5,-51.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.beginFill("#231F20").beginStroke().moveTo(2.1,7.1).lineTo(3.6,0.9).curveTo(3.9,-0.3,3.2,-0.7).lineTo(2.7,-1.1).lineTo(2.4,-1.2).curveTo(1.8,-1.4,1.5,-0.6).lineTo(-0,5.8).lineTo(-3,3.9).lineTo(-1.4,-2.6).curveTo(-1.2,-3.2,-1.3,-3.5).curveTo(-1.4,-3.8,-1.7,-4).lineTo(-2.1,-4.3).lineTo(-2.3,-4.3).curveTo(-2.8,-4.4,-3,-3.6).lineTo(-4.6,2.8).lineTo(-7.6,0.8).lineTo(-5.6,-7.2).curveTo(-5.3,-8.3,-4.7,-8.8).curveTo(-4,-9.3,-3.1,-9.1).curveTo(-2.8,-9,-2.1,-8.6).lineTo(-0,-7.2).curveTo(1.2,-6.4,1.2,-5.2).curveTo(1.4,-5.5,1.7,-5.5).curveTo(2.2,-5.6,2.5,-5.5).lineTo(2.9,-5.3).lineTo(6.4,-3).curveTo(7.9,-2.1,7.5,-0.7).lineTo(5.1,9.1).closePath();
	this.shape_49.setTransform(-104,-33.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(0.4,-9.3).lineTo(7.5,-2.7).curveTo(8,-2.2,8.1,-1.4).curveTo(8.1,-0.9,7.9,-0.3).lineTo(3.7,9.2).curveTo(2.9,11.2,1.2,10.5).curveTo(0.6,10.2,-0.4,9.3).lineTo(-1,8.7).lineTo(-7.5,2.7).curveTo(-8,2.2,-8.1,1.5).curveTo(-8.1,0.8,-7.9,0.3).lineTo(-3.8,-9.2).curveTo(-2.9,-11.2,-1.2,-10.4).curveTo(-0.6,-10.1,0.4,-9.3).closePath().moveTo(-0.7,-5.2).curveTo(-0.7,-5.3,-1,-5.4).curveTo(-1.6,-5.7,-1.9,-5.1).lineTo(-4,-0.3).curveTo(-4.4,0.6,-3.6,1.4).lineTo(0.6,5.2).curveTo(0.7,5.3,0.9,5.4).curveTo(1.6,5.7,1.9,5.1).lineTo(3.9,0.4).curveTo(4.2,-0.3,4,-0.6).curveTo(3.8,-1,3.5,-1.3).closePath();
	this.shape_50.setTransform(-96.5,-51.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.beginFill("#231F20").beginStroke().moveTo(1.2,10.5).curveTo(0.6,10.2,-0.4,9.3).lineTo(-1,8.7).lineTo(-7.5,2.7).curveTo(-8,2.2,-8.1,1.5).curveTo(-8.1,0.8,-7.9,0.3).lineTo(-3.8,-9.2).curveTo(-2.9,-11.2,-1.2,-10.4).curveTo(-0.6,-10.1,0.4,-9.3).lineTo(7.5,-2.7).curveTo(8,-2.2,8.1,-1.4).curveTo(8.1,-0.9,7.9,-0.3).lineTo(3.7,9.2).curveTo(3.1,10.7,2.1,10.7).curveTo(1.7,10.7,1.2,10.5).closePath().moveTo(-1.9,-5.1).lineTo(-4,-0.3).curveTo(-4.4,0.6,-3.6,1.4).lineTo(0.6,5.2).lineTo(0.9,5.4).curveTo(1.6,5.7,1.9,5.1).lineTo(3.9,0.4).curveTo(4.2,-0.3,4,-0.6).lineTo(3.5,-1.3).lineTo(-0.7,-5.2).lineTo(-1,-5.4).lineTo(-1.4,-5.5).curveTo(-1.7,-5.5,-1.9,-5.1).closePath();
	this.shape_51.setTransform(-96.5,-51.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(-2,-8.8).lineTo(0,-7.4).curveTo(1.3,-6.6,1.2,-5.3).curveTo(1.4,-5.6,1.7,-5.7).curveTo(2.3,-5.8,2.5,-5.7).lineTo(3,-5.5).lineTo(6.5,-3.2).curveTo(7.9,-2.3,7.5,-0.8).lineTo(5.1,9).lineTo(2.1,7).lineTo(3.7,0.7).curveTo(4,-0.4,3.3,-0.9).lineTo(2.7,-1.3).lineTo(2.5,-1.4).curveTo(1.8,-1.5,1.6,-0.8).lineTo(0,5.6).lineTo(-2.9,3.7).lineTo(-1.3,-2.8).curveTo(-1.2,-3.3,-1.3,-3.7).curveTo(-1.4,-3.9,-1.6,-4.1).lineTo(-2.1,-4.4).lineTo(-2.2,-4.5).curveTo(-2.8,-4.6,-3,-3.7).lineTo(-4.5,2.6).lineTo(-7.5,0.7).lineTo(-5.5,-7.3).curveTo(-5.3,-8.4,-4.6,-8.9).curveTo(-4,-9.4,-3,-9.2).curveTo(-2.7,-9.2,-2,-8.8).closePath();
	this.shape_52.setTransform(-104.1,-33);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.beginFill("#231F20").beginStroke().moveTo(2.1,7.1).lineTo(3.6,0.9).curveTo(3.9,-0.3,3.2,-0.7).lineTo(2.7,-1.1).lineTo(2.4,-1.2).curveTo(1.8,-1.4,1.5,-0.6).lineTo(-0,5.8).lineTo(-3,3.9).lineTo(-1.4,-2.6).curveTo(-1.2,-3.2,-1.3,-3.5).curveTo(-1.4,-3.8,-1.7,-4).lineTo(-2.1,-4.3).lineTo(-2.3,-4.3).curveTo(-2.8,-4.4,-3,-3.6).lineTo(-4.6,2.8).lineTo(-7.6,0.8).lineTo(-5.6,-7.2).curveTo(-5.3,-8.3,-4.7,-8.8).curveTo(-4,-9.3,-3.1,-9.1).curveTo(-2.8,-9,-2.1,-8.6).lineTo(-0,-7.2).curveTo(1.2,-6.4,1.2,-5.2).curveTo(1.4,-5.5,1.7,-5.5).curveTo(2.2,-5.6,2.5,-5.5).lineTo(2.9,-5.3).lineTo(6.4,-3).curveTo(7.9,-2.1,7.5,-0.7).lineTo(5.1,9.1).closePath();
	this.shape_53.setTransform(-104,-33.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.beginFill("#231F20").beginStroke().moveTo(4.2,8.3).lineTo(3.4,8.1).lineTo(-5.2,6).curveTo(-5.9,5.8,-6.4,5.2).curveTo(-6.7,4.6,-6.8,4.1).lineTo(-7.8,-6.2).curveTo(-7.9,-8.4,-6.1,-8.5).curveTo(-5.3,-8.6,-4.2,-8.3).lineTo(5.3,-6).curveTo(6,-5.8,6.4,-5.2).curveTo(6.7,-4.8,6.8,-4.1).lineTo(7.8,6.2).curveTo(8,8.4,6.1,8.5).lineTo(5.7,8.6).curveTo(5,8.6,4.2,8.3).closePath().moveTo(-4.1,-3.6).lineTo(-3.6,1.6).curveTo(-3.5,2.7,-2.4,2.9).lineTo(3.1,4.2).lineTo(3.5,4.3).curveTo(4.2,4.2,4.1,3.6).lineTo(3.6,-1.6).curveTo(3.5,-2.3,3.2,-2.6).lineTo(2.4,-2.9).lineTo(-3.1,-4.3).lineTo(-3.4,-4.3).curveTo(-4.2,-4.2,-4.1,-3.6).closePath();
	this.shape_54.setTransform(-109.3,2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.beginFill("#231F20").beginStroke().moveTo(6.2,7.4).lineTo(1.5,7.1).curveTo(-0.2,7,-0.6,5.3).lineTo(-3,-3.5).lineTo(-4.2,-3.6).curveTo(-4.8,-3.4,-4.6,-2.6).lineTo(-2,6.9).lineTo(-5.6,6.6).lineTo(-8.7,-5.1).curveTo(-9.3,-6.9,-7.4,-7.4).lineTo(-6.4,-7.5).lineTo(-0.5,-7).lineTo(2.2,2.7).curveTo(2.4,3.5,3.2,3.5).lineTo(4.3,3.6).curveTo(4.9,3.4,4.7,2.8).lineTo(2.1,-6.9).lineTo(5.6,-6.6).lineTo(8.8,5).curveTo(9,6,8.5,6.6).curveTo(8.1,7.1,7.3,7.3).lineTo(6.5,7.5).lineTo(6.2,7.4).closePath();
	this.shape_55.setTransform(-107.3,20.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(-4.2,-8.3).lineTo(5.3,-6).curveTo(6,-5.8,6.4,-5.2).curveTo(6.7,-4.8,6.8,-4.1).lineTo(7.8,6.2).curveTo(8,8.4,6.1,8.5).curveTo(5.2,8.6,4.2,8.3).lineTo(3.4,8.1).lineTo(-5.2,6).curveTo(-5.9,5.8,-6.4,5.2).curveTo(-6.7,4.6,-6.8,4.1).lineTo(-7.8,-6.2).curveTo(-7.9,-8.4,-6.1,-8.5).curveTo(-5.3,-8.6,-4.2,-8.3).closePath().moveTo(-3.1,-4.3).lineTo(-3.4,-4.3).curveTo(-4.2,-4.2,-4.1,-3.6).lineTo(-3.6,1.6).curveTo(-3.5,2.7,-2.4,2.9).lineTo(3.1,4.2).lineTo(3.5,4.3).curveTo(4.2,4.2,4.1,3.6).lineTo(3.6,-1.6).curveTo(3.5,-2.3,3.2,-2.6).lineTo(2.4,-2.9).closePath();
	this.shape_56.setTransform(-109.3,2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.beginFill("#231F20").beginStroke().moveTo(4.2,8.3).lineTo(3.4,8.1).lineTo(-5.2,6).curveTo(-5.9,5.8,-6.4,5.2).curveTo(-6.7,4.6,-6.8,4.1).lineTo(-7.8,-6.2).curveTo(-7.9,-8.4,-6.1,-8.5).curveTo(-5.3,-8.6,-4.2,-8.3).lineTo(5.3,-6).curveTo(6,-5.8,6.4,-5.2).curveTo(6.7,-4.8,6.8,-4.1).lineTo(7.8,6.2).curveTo(8,8.4,6.1,8.5).lineTo(5.7,8.6).curveTo(5,8.6,4.2,8.3).closePath().moveTo(-4.1,-3.6).lineTo(-3.6,1.6).curveTo(-3.5,2.7,-2.4,2.9).lineTo(3.1,4.2).lineTo(3.5,4.3).curveTo(4.2,4.2,4.1,3.6).lineTo(3.6,-1.6).curveTo(3.5,-2.3,3.2,-2.6).lineTo(2.4,-2.9).lineTo(-3.1,-4.3).lineTo(-3.4,-4.3).curveTo(-4.2,-4.2,-4.1,-3.6).closePath();
	this.shape_57.setTransform(-109.3,2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(-6.4,-7.5).lineTo(-0.5,-7).lineTo(2.2,2.7).curveTo(2.4,3.5,3.2,3.5).lineTo(4.3,3.6).curveTo(4.9,3.4,4.7,2.8).lineTo(2.1,-6.9).lineTo(5.6,-6.6).lineTo(8.8,5).curveTo(9,6,8.5,6.6).curveTo(8.1,7.1,7.3,7.3).curveTo(6.7,7.5,6.2,7.4).lineTo(1.5,7.1).curveTo(-0.2,7,-0.6,5.3).lineTo(-3,-3.5).lineTo(-4.2,-3.6).curveTo(-4.8,-3.4,-4.6,-2.6).lineTo(-2,6.9).lineTo(-5.6,6.6).lineTo(-8.7,-5.1).curveTo(-9.3,-6.9,-7.4,-7.4).curveTo(-7.1,-7.5,-6.4,-7.5).closePath();
	this.shape_58.setTransform(-107.3,20.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.beginFill("#231F20").beginStroke().moveTo(6.2,7.4).lineTo(1.5,7.1).curveTo(-0.2,7,-0.6,5.3).lineTo(-3,-3.5).lineTo(-4.2,-3.6).curveTo(-4.8,-3.4,-4.6,-2.6).lineTo(-2,6.9).lineTo(-5.6,6.6).lineTo(-8.7,-5.1).curveTo(-9.3,-6.9,-7.4,-7.4).lineTo(-6.4,-7.5).lineTo(-0.5,-7).lineTo(2.2,2.7).curveTo(2.4,3.5,3.2,3.5).lineTo(4.3,3.6).curveTo(4.9,3.4,4.7,2.8).lineTo(2.1,-6.9).lineTo(5.6,-6.6).lineTo(8.8,5).curveTo(9,6,8.5,6.6).curveTo(8.1,7.1,7.3,7.3).lineTo(6.5,7.5).lineTo(6.2,7.4).closePath();
	this.shape_59.setTransform(-107.3,20.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.beginFill("#231F20").beginStroke().moveTo(-2.9,7.7).curveTo(-3.4,7.4,-3.8,6.9).lineTo(-9.8,-1.5).curveTo(-11.1,-3.1,-9.6,-4.3).curveTo(-9,-4.7,-7.8,-5.1).lineTo(1.5,-7.8).curveTo(2.2,-8,2.9,-7.7).curveTo(3.4,-7.4,3.8,-7).lineTo(9.9,1.4).curveTo(11.1,3.2,9.6,4.2).curveTo(9,4.7,7.8,5).lineTo(-1.5,7.8).lineTo(-2.1,7.9).curveTo(-2.5,7.9,-2.9,7.7).closePath().moveTo(0.7,-3.8).lineTo(-4.8,-2.1).lineTo(-5.1,-2).curveTo(-5.7,-1.5,-5.4,-1).lineTo(-2.3,3.2).curveTo(-1.7,4,-0.6,3.7).lineTo(4.8,2.1).lineTo(5.2,1.9).curveTo(5.7,1.5,5.4,1).lineTo(2.3,-3.2).curveTo(2,-3.7,1.5,-3.9).closePath();
	this.shape_60.setTransform(-93.2,57);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.beginFill("#231F20").beginStroke().moveTo(-8.3,1.3).lineTo(5.8,-4.2).lineTo(8.3,-1.3).lineTo(-5.8,4.2).closePath();
	this.shape_61.setTransform(-85.5,67.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(-7.8,-5.1).lineTo(1.5,-7.8).curveTo(2.2,-8,2.9,-7.7).curveTo(3.4,-7.4,3.8,-7).lineTo(9.9,1.4).curveTo(11.1,3.2,9.6,4.2).curveTo(9,4.7,7.8,5).lineTo(-1.5,7.8).curveTo(-2.1,8,-2.9,7.7).curveTo(-3.4,7.4,-3.8,6.9).lineTo(-9.8,-1.5).curveTo(-11.1,-3.1,-9.6,-4.3).curveTo(-9,-4.7,-7.8,-5.1).closePath().moveTo(-4.8,-2.1).lineTo(-5.1,-2).curveTo(-5.7,-1.5,-5.4,-1).lineTo(-2.3,3.2).curveTo(-1.7,4,-0.6,3.7).lineTo(4.8,2.1).lineTo(5.2,1.9).curveTo(5.7,1.5,5.4,1).lineTo(2.3,-3.2).curveTo(2,-3.7,1.5,-3.9).lineTo(0.7,-3.8).closePath();
	this.shape_62.setTransform(-93.2,57);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.beginFill("#231F20").beginStroke().moveTo(-2.9,7.7).curveTo(-3.4,7.4,-3.8,6.9).lineTo(-9.8,-1.5).curveTo(-11.1,-3.1,-9.6,-4.3).curveTo(-9,-4.7,-7.8,-5.1).lineTo(1.5,-7.8).curveTo(2.2,-8,2.9,-7.7).curveTo(3.4,-7.4,3.8,-7).lineTo(9.9,1.4).curveTo(11.1,3.2,9.6,4.2).curveTo(9,4.7,7.8,5).lineTo(-1.5,7.8).lineTo(-2.1,7.9).curveTo(-2.5,7.9,-2.9,7.7).closePath().moveTo(0.7,-3.8).lineTo(-4.8,-2.1).lineTo(-5.1,-2).curveTo(-5.7,-1.5,-5.4,-1).lineTo(-2.3,3.2).curveTo(-1.7,4,-0.6,3.7).lineTo(4.8,2.1).lineTo(5.2,1.9).curveTo(5.7,1.5,5.4,1).lineTo(2.3,-3.2).curveTo(2,-3.7,1.5,-3.9).closePath();
	this.shape_63.setTransform(-93.2,57);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.beginFill().beginStroke("#F9C85A").setStrokeStyle(0.8,0,0,4).moveTo(-8.3,1.2).lineTo(5.8,-4.2).lineTo(8.3,-1.3).lineTo(-5.8,4.2).closePath();
	this.shape_64.setTransform(-85.5,67.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.beginFill("#231F20").beginStroke().moveTo(-8.3,1.3).lineTo(5.8,-4.2).lineTo(8.3,-1.3).lineTo(-5.8,4.2).closePath();
	this.shape_65.setTransform(-85.5,67.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(-0.7,1.8).curveTo(-1.5,1.5,-1.8,0.8).curveTo(-2.2,-0,-1.9,-0.8).curveTo(-1.6,-1.5,-0.8,-1.9).curveTo(-0.1,-2.2,0.7,-1.9).curveTo(1.5,-1.6,1.8,-0.9).curveTo(2.2,-0.1,1.9,0.7).curveTo(1.6,1.5,0.8,1.8).curveTo(0,2.2,-0.7,1.8).closePath();
	this.shape_66.setTransform(84.4,33);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.beginFill("#231F20").beginStroke().moveTo(-0.7,1.8).curveTo(-1.5,1.5,-1.8,0.8).curveTo(-2.2,-0,-1.9,-0.8).curveTo(-1.6,-1.5,-0.8,-1.9).curveTo(-0.1,-2.2,0.7,-1.9).curveTo(1.5,-1.6,1.8,-0.9).curveTo(2.2,-0.1,1.9,0.7).curveTo(1.6,1.5,0.8,1.8).curveTo(0.4,2,0,2).curveTo(-0.4,2,-0.7,1.8).closePath();
	this.shape_67.setTransform(84.4,33);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(0.2,2).curveTo(-0.6,2.1,-1.3,1.6).curveTo(-1.9,1.1,-2,0.3).curveTo(-2.1,-0.6,-1.6,-1.2).curveTo(-1.1,-1.9,-0.3,-2).curveTo(0.6,-2.1,1.2,-1.6).curveTo(1.9,-1,2,-0.2).curveTo(2.1,0.6,1.5,1.3).curveTo(1,2,0.2,2).closePath();
	this.shape_68.setTransform(90.1,-10);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.beginFill("#231F20").beginStroke().moveTo(-1.3,1.6).curveTo(-1.9,1.1,-2,0.3).curveTo(-2.1,-0.6,-1.6,-1.2).curveTo(-1.1,-1.9,-0.3,-2).curveTo(0.6,-2.1,1.2,-1.6).curveTo(1.9,-1,2,-0.2).curveTo(2.1,0.6,1.5,1.3).curveTo(1,2,0.2,2).lineTo(-0,2).curveTo(-0.7,2,-1.3,1.6).closePath();
	this.shape_69.setTransform(90.1,-10);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(1.1,1.7).curveTo(0.4,2.1,-0.4,2).curveTo(-1.2,1.8,-1.7,1.1).curveTo(-2.1,0.5,-2,-0.3).curveTo(-1.8,-1.1,-1.1,-1.6).curveTo(-0.5,-2.1,0.4,-2).curveTo(1.2,-1.8,1.7,-1.1).curveTo(2.2,-0.4,2,0.4).curveTo(1.8,1.2,1.1,1.7).closePath();
	this.shape_70.setTransform(75.1,-50.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.beginFill("#231F20").beginStroke().moveTo(-0.4,2).curveTo(-1.2,1.8,-1.7,1.1).curveTo(-2.1,0.5,-2,-0.3).curveTo(-1.8,-1.1,-1.1,-1.6).curveTo(-0.5,-2.1,0.4,-2).curveTo(1.2,-1.8,1.7,-1.1).curveTo(2.2,-0.4,2,0.4).curveTo(1.8,1.2,1.1,1.7).curveTo(0.6,2,-0,2).lineTo(-0.4,2).closePath();
	this.shape_71.setTransform(75.1,-50.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(1.8,1).curveTo(1.3,1.7,0.6,1.9).curveTo(-0.2,2.1,-1,1.8).curveTo(-1.7,1.4,-1.9,0.6).curveTo(-2.1,-0.2,-1.8,-0.9).curveTo(-1.4,-1.7,-0.6,-1.9).curveTo(0.2,-2.2,0.9,-1.8).curveTo(1.7,-1.4,1.9,-0.6).curveTo(2.2,0.2,1.8,1).closePath();
	this.shape_72.setTransform(42.9,-79.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.beginFill("#231F20").beginStroke().moveTo(-1,1.8).curveTo(-1.7,1.4,-1.9,0.6).curveTo(-2.1,-0.2,-1.8,-0.9).curveTo(-1.4,-1.7,-0.6,-1.9).curveTo(0.2,-2.2,0.9,-1.8).curveTo(1.7,-1.4,1.9,-0.6).curveTo(2.2,0.2,1.8,1).curveTo(1.3,1.7,0.6,1.9).lineTo(-0,2).curveTo(-0.5,2,-1,1.8).closePath();
	this.shape_73.setTransform(42.9,-79.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(2,0.1).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,-0,2).curveTo(-0.9,2,-1.4,1.4).curveTo(-2,0.8,-2,0).curveTo(-2,-0.8,-1.4,-1.4).curveTo(-0.8,-2,0,-2).curveTo(0.9,-2,1.5,-1.4).curveTo(2,-0.8,2,0.1).closePath();
	this.shape_74.setTransform(0.9,-90.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.beginFill("#231F20").beginStroke().moveTo(-1.4,1.4).curveTo(-2,0.8,-2,0).curveTo(-2,-0.8,-1.4,-1.4).curveTo(-0.8,-2,0,-2).curveTo(0.9,-2,1.5,-1.4).curveTo(2,-0.8,2,0.1).curveTo(2,0.9,1.4,1.5).curveTo(0.8,2,-0,2).curveTo(-0.9,2,-1.4,1.4).closePath();
	this.shape_75.setTransform(0.9,-90.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(1.8,-0.9).curveTo(2.2,-0.1,1.9,0.7).curveTo(1.7,1.5,0.9,1.8).curveTo(0.2,2.2,-0.6,1.9).curveTo(-1.4,1.7,-1.8,1).curveTo(-2.2,0.2,-1.9,-0.6).curveTo(-1.6,-1.4,-0.9,-1.8).curveTo(-0.1,-2.2,0.7,-1.9).curveTo(1.5,-1.6,1.8,-0.9).closePath();
	this.shape_76.setTransform(-41.3,-80.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.beginFill("#231F20").beginStroke().moveTo(-0.6,1.9).curveTo(-1.4,1.7,-1.8,1).curveTo(-2.2,0.2,-1.9,-0.6).curveTo(-1.6,-1.4,-0.9,-1.8).curveTo(-0.1,-2.2,0.7,-1.9).curveTo(1.5,-1.6,1.8,-0.9).curveTo(2.2,-0.1,1.9,0.7).curveTo(1.7,1.5,0.9,1.8).curveTo(0.5,2,0,2).lineTo(-0.6,1.9).closePath();
	this.shape_77.setTransform(-41.3,-80.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(1.2,-1.6).curveTo(1.8,-1.1,2,-0.3).curveTo(2.1,0.5,1.7,1.2).curveTo(1.2,1.8,0.4,2).curveTo(-0.5,2.1,-1.1,1.7).curveTo(-1.8,1.2,-2,0.4).curveTo(-2.1,-0.5,-1.6,-1.2).curveTo(-1.1,-1.8,-0.3,-2).curveTo(0.5,-2.1,1.2,-1.6).closePath();
	this.shape_78.setTransform(-74.1,-52.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.beginFill("#231F20").beginStroke().moveTo(-1.1,1.7).curveTo(-1.8,1.2,-2,0.4).curveTo(-2.1,-0.5,-1.6,-1.2).curveTo(-1.1,-1.8,-0.3,-2).curveTo(0.5,-2.1,1.2,-1.6).curveTo(1.8,-1.1,2,-0.3).curveTo(2.1,0.5,1.7,1.2).curveTo(1.2,1.8,0.4,2).lineTo(-0,2).curveTo(-0.6,2,-1.1,1.7).closePath();
	this.shape_79.setTransform(-74.1,-52.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(0.3,-2).curveTo(1.1,-1.9,1.6,-1.2).curveTo(2.1,-0.5,2,0.3).curveTo(1.9,1.1,1.2,1.6).curveTo(0.5,2.1,-0.2,2).curveTo(-1.1,1.9,-1.6,1.2).curveTo(-2.1,0.6,-2,-0.3).curveTo(-1.9,-1.1,-1.2,-1.6).curveTo(-0.6,-2.1,0.3,-2).closePath();
	this.shape_80.setTransform(-89.8,-11.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.beginFill("#231F20").beginStroke().moveTo(-0.2,2).curveTo(-1.1,1.9,-1.6,1.2).curveTo(-2.1,0.6,-2,-0.3).curveTo(-1.9,-1.1,-1.2,-1.6).curveTo(-0.5,-2.1,0.3,-2).curveTo(1.1,-1.9,1.6,-1.2).curveTo(2.1,-0.5,2,0.3).curveTo(1.9,1.1,1.2,1.6).curveTo(0.7,2,0,2).lineTo(-0.2,2).closePath();
	this.shape_81.setTransform(-89.8,-11.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(-0.7,-1.9).curveTo(0.1,-2.2,0.8,-1.8).curveTo(1.6,-1.5,1.9,-0.7).curveTo(2.2,0.1,1.8,0.8).curveTo(1.5,1.6,0.7,1.9).curveTo(-0.1,2.2,-0.8,1.8).curveTo(-1.6,1.5,-1.9,0.7).curveTo(-2.2,-0.1,-1.8,-0.9).curveTo(-1.5,-1.6,-0.7,-1.9).closePath();
	this.shape_82.setTransform(-85,31.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.beginFill("#231F20").beginStroke().moveTo(-0.8,1.8).curveTo(-1.6,1.5,-1.9,0.7).curveTo(-2.2,-0.1,-1.8,-0.9).curveTo(-1.5,-1.6,-0.7,-1.9).curveTo(0.1,-2.2,0.8,-1.8).curveTo(1.6,-1.5,1.9,-0.7).curveTo(2.2,0.1,1.8,0.8).curveTo(1.5,1.6,0.7,1.9).lineTo(0,2).curveTo(-0.4,2,-0.8,1.8).closePath();
	this.shape_83.setTransform(-85,31.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(-1.5,-1.4).curveTo(-0.9,-2,-0.1,-2).curveTo(0.7,-2,1.3,-1.5).curveTo(1.9,-0.9,2,-0.1).curveTo(2,0.7,1.5,1.3).curveTo(0.9,2,0.1,2).curveTo(-0.7,2.1,-1.4,1.5).curveTo(-2,1,-2,0.1).curveTo(-2.1,-0.8,-1.5,-1.4).closePath();
	this.shape_84.setTransform(-60.8,67.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.beginFill("#231F20").beginStroke().moveTo(-1.4,1.4).curveTo(-2,1,-2,0.1).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.9,-2,-0,-2).curveTo(0.7,-2,1.3,-1.5).curveTo(2,-0.9,2,-0.2).curveTo(2,0.7,1.5,1.3).curveTo(1,1.9,0.1,2).lineTo(0,2).curveTo(-0.8,2,-1.4,1.4).closePath();
	this.shape_85.setTransform(-60.8,67.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(-1.9,-0.5).curveTo(-1.7,-1.3,-1,-1.8).curveTo(-0.3,-2.2,0.5,-2).curveTo(1.3,-1.7,1.7,-1).curveTo(2.1,-0.3,1.9,0.5).curveTo(1.8,1.3,1,1.7).curveTo(0.3,2.2,-0.5,1.9).curveTo(-1.4,1.7,-1.8,1).curveTo(-2.2,0.3,-1.9,-0.5).closePath();
	this.shape_86.setTransform(-22.6,87.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.beginFill("#231F20").beginStroke().moveTo(-0.5,1.9).curveTo(-1.4,1.7,-1.8,1).curveTo(-2.2,0.3,-1.9,-0.5).curveTo(-1.7,-1.3,-1,-1.8).curveTo(-0.3,-2.2,0.5,-2).curveTo(1.3,-1.7,1.7,-1).curveTo(2.1,-0.3,1.9,0.5).curveTo(1.8,1.3,1,1.7).curveTo(0.6,2,0.1,2).lineTo(-0.5,1.9).closePath();
	this.shape_87.setTransform(-22.6,87.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(-2,0.5).curveTo(-2.1,-0.3,-1.7,-1).curveTo(-1.3,-1.8,-0.5,-1.9).curveTo(0.3,-2.1,1.1,-1.7).curveTo(1.7,-1.3,2,-0.5).curveTo(2.2,0.4,1.7,1.1).curveTo(1.3,1.8,0.5,2).curveTo(-0.4,2.2,-1.1,1.7).curveTo(-1.8,1.2,-2,0.5).closePath();
	this.shape_88.setTransform(20.8,88.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.beginFill("#231F20").beginStroke().moveTo(-1.1,1.7).curveTo(-1.8,1.2,-2,0.5).curveTo(-2.1,-0.4,-1.7,-1.1).curveTo(-1.3,-1.7,-0.5,-2).curveTo(0.3,-2.1,1.1,-1.7).curveTo(1.7,-1.3,2,-0.5).curveTo(2.2,0.3,1.7,1.1).curveTo(1.3,1.8,0.5,2).lineTo(-0,2).curveTo(-0.6,2,-1.1,1.7).closePath();
	this.shape_89.setTransform(20.8,88.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(0.6,0,0,4).moveTo(-1.5,1.3).curveTo(-2.1,0.7,-2,-0.1).curveTo(-1.9,-1,-1.3,-1.5).curveTo(-0.6,-2,0.2,-2).curveTo(1,-1.9,1.5,-1.3).curveTo(2.1,-0.8,2,0.1).curveTo(2,1,1.3,1.5).curveTo(0.7,2.1,-0.2,2).curveTo(-1,2,-1.5,1.3).closePath();
	this.shape_90.setTransform(59.4,68.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.beginFill("#231F20").beginStroke().moveTo(-0.2,2).curveTo(-1,1.9,-1.5,1.3).curveTo(-2.1,0.6,-2,-0.1).curveTo(-1.9,-1,-1.3,-1.5).curveTo(-0.6,-2.1,0.2,-2).curveTo(1,-2,1.5,-1.4).curveTo(2.1,-0.7,2,0.1).curveTo(2,1,1.3,1.5).curveTo(0.7,2,-0.1,2).lineTo(-0.2,2).closePath();
	this.shape_91.setTransform(59.4,68.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(1.3,3.7).curveTo(-0.3,4.1,-1.7,3.4).curveTo(-3.1,2.8,-3.6,1.3).curveTo(-4.1,-0.1,-3.5,-1.5).curveTo(-2.8,-2.9,-1.4,-3.5).curveTo(0.1,-4.1,1.6,-3.5).curveTo(3.1,-2.8,3.6,-1.3).curveTo(4.2,0.3,3.5,1.7).curveTo(2.8,3.2,1.3,3.7).closePath();
	this.shape_92.setTransform(85.1,-31);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.beginFill("#231F20").beginStroke().moveTo(-1.7,3.4).curveTo(-3.1,2.8,-3.6,1.3).curveTo(-4.1,-0.1,-3.5,-1.5).curveTo(-2.8,-2.9,-1.4,-3.5).curveTo(0.1,-4.1,1.6,-3.5).curveTo(3.1,-2.8,3.6,-1.3).curveTo(4.2,0.3,3.5,1.7).curveTo(2.8,3.2,1.3,3.7).curveTo(0.6,3.8,0.1,3.8).curveTo(-0.8,3.8,-1.7,3.4).closePath();
	this.shape_93.setTransform(85.1,-31);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(2.7,2.7).curveTo(1.6,3.8,0.1,3.8).curveTo(-1.5,3.9,-2.6,2.9).curveTo(-3.7,1.8,-3.8,0.3).curveTo(-3.9,-1.3,-2.9,-2.5).curveTo(-1.9,-3.7,-0.3,-3.8).curveTo(1.3,-3.9,2.5,-2.8).curveTo(3.8,-1.7,3.8,-0).curveTo(3.9,1.5,2.7,2.7).closePath();
	this.shape_94.setTransform(61.1,-67);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.beginFill("#231F20").beginStroke().moveTo(-2.6,2.9).curveTo(-3.7,1.8,-3.8,0.3).curveTo(-3.9,-1.3,-2.9,-2.5).curveTo(-1.9,-3.7,-0.3,-3.8).curveTo(1.3,-3.9,2.5,-2.8).curveTo(3.8,-1.7,3.8,-0).curveTo(3.9,1.5,2.7,2.7).curveTo(1.6,3.8,0.1,3.8).lineTo(-0.1,3.8).curveTo(-1.5,3.8,-2.6,2.9).closePath();
	this.shape_95.setTransform(61.1,-67);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(3.7,1.1).curveTo(3.2,2.5,1.8,3.3).curveTo(0.5,4.1,-1,3.7).curveTo(-2.5,3.3,-3.2,2).curveTo(-4.1,0.7,-3.7,-0.9).curveTo(-3.4,-2.4,-2,-3.3).curveTo(-0.6,-4.1,1,-3.7).curveTo(2.6,-3.2,3.4,-1.8).curveTo(4.2,-0.5,3.7,1.1).closePath();
	this.shape_96.setTransform(22.9,-87.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.beginFill("#231F20").beginStroke().moveTo(-1,3.7).curveTo(-2.5,3.3,-3.2,2).curveTo(-4.1,0.7,-3.7,-0.9).curveTo(-3.4,-2.4,-2,-3.3).curveTo(-0.6,-4.1,1,-3.7).curveTo(2.6,-3.2,3.4,-1.8).curveTo(4.2,-0.5,3.7,1.1).curveTo(3.2,2.5,1.8,3.3).curveTo(0.9,3.8,-0,3.8).lineTo(-1,3.7).closePath();
	this.shape_97.setTransform(22.9,-87.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(3.8,-0.8).curveTo(4.1,0.8,3.2,2.1).curveTo(2.3,3.4,0.9,3.7).curveTo(-0.6,4.1,-1.9,3.3).curveTo(-3.2,2.5,-3.7,1).curveTo(-4.1,-0.6,-3.3,-2).curveTo(-2.5,-3.4,-0.8,-3.7).curveTo(0.9,-4,2.1,-3.2).curveTo(3.5,-2.4,3.8,-0.8).closePath();
	this.shape_98.setTransform(-20.5,-88.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.beginFill("#231F20").beginStroke().moveTo(-1.9,3.3).curveTo(-3.2,2.5,-3.7,1).curveTo(-4.1,-0.6,-3.3,-2).curveTo(-2.5,-3.4,-0.8,-3.7).curveTo(0.9,-4,2.1,-3.2).curveTo(3.5,-2.4,3.8,-0.8).curveTo(4.1,0.8,3.2,2.1).curveTo(2.3,3.4,0.9,3.7).lineTo(-0,3.8).curveTo(-1,3.8,-1.9,3.3).closePath();
	this.shape_99.setTransform(-20.5,-88.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(3,-2.4).curveTo(3.9,-1.2,3.8,0.4).curveTo(3.7,1.9,2.5,2.9).curveTo(1.4,3.9,-0.2,3.8).curveTo(-1.7,3.7,-2.8,2.6).curveTo(-3.9,1.4,-3.8,-0.2).curveTo(-3.7,-1.8,-2.5,-2.9).curveTo(-1.2,-4,0.4,-3.8).curveTo(2,-3.7,3,-2.4).closePath();
	this.shape_100.setTransform(-59.2,-68.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.beginFill("#231F20").beginStroke().moveTo(-0.2,3.8).curveTo(-1.7,3.7,-2.8,2.6).curveTo(-3.9,1.4,-3.8,-0.2).curveTo(-3.7,-1.8,-2.5,-2.9).curveTo(-1.2,-4,0.4,-3.8).curveTo(2,-3.7,3,-2.4).curveTo(3.9,-1.2,3.8,0.4).curveTo(3.7,1.9,2.5,2.9).curveTo(1.5,3.8,0.1,3.8).lineTo(-0.2,3.8).closePath();
	this.shape_101.setTransform(-59.2,-68.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(1.5,-3.5).curveTo(2.9,-2.9,3.5,-1.4).curveTo(4.1,-0,3.6,1.4).curveTo(3,2.8,1.6,3.5).curveTo(0.1,4.1,-1.3,3.6).curveTo(-2.9,3.1,-3.5,1.6).curveTo(-4.1,0.2,-3.5,-1.4).curveTo(-3,-2.9,-1.5,-3.6).curveTo(0,-4.2,1.5,-3.5).closePath();
	this.shape_102.setTransform(-84.3,-33.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.beginFill("#231F20").beginStroke().moveTo(-1.3,3.6).curveTo(-2.9,3.1,-3.5,1.6).curveTo(-4.1,0.2,-3.5,-1.4).curveTo(-3,-2.9,-1.5,-3.6).curveTo(0,-4.2,1.5,-3.5).curveTo(2.9,-2.9,3.5,-1.4).curveTo(4.1,-0,3.6,1.4).curveTo(3,2.8,1.6,3.5).curveTo(0.7,3.9,-0.1,3.9).curveTo(-0.7,3.9,-1.3,3.6).closePath();
	this.shape_103.setTransform(-84.3,-33.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(-0.4,-3.8).curveTo(1.2,-3.9,2.4,-2.9).curveTo(3.6,-1.9,3.8,-0.4).curveTo(4,1.1,3,2.3).curveTo(2,3.6,0.4,3.8).curveTo(-1.1,4,-2.4,3.1).curveTo(-3.6,2.1,-3.8,0.4).curveTo(-4,-1.2,-3,-2.5).curveTo(-1.9,-3.7,-0.4,-3.8).closePath();
	this.shape_104.setTransform(-90.1,9.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.beginFill("#231F20").beginStroke().moveTo(-2.4,3.1).curveTo(-3.6,2.1,-3.8,0.4).curveTo(-4,-1.2,-3,-2.5).curveTo(-1.9,-3.7,-0.4,-3.8).curveTo(1.2,-3.9,2.4,-2.9).curveTo(3.6,-1.9,3.8,-0.4).curveTo(4,1.1,3,2.3).curveTo(2,3.6,0.4,3.8).lineTo(-0.2,3.8).curveTo(-1.4,3.8,-2.4,3.1).closePath();
	this.shape_105.setTransform(-90.1,9.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(-2,-3.3).curveTo(-0.7,-4.1,0.8,-3.7).curveTo(2.4,-3.4,3.2,-2.2).curveTo(4,-0.9,3.8,0.6).curveTo(3.5,2.1,2.2,3.1).curveTo(0.9,4,-0.6,3.7).curveTo(-2.2,3.5,-3.2,2.1).curveTo(-4.1,0.7,-3.7,-0.9).curveTo(-3.4,-2.5,-2,-3.3).closePath();
	this.shape_106.setTransform(-75.3,50.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.beginFill("#231F20").beginStroke().moveTo(-0.6,3.7).curveTo(-2.2,3.5,-3.2,2.1).curveTo(-4.1,0.7,-3.7,-0.9).curveTo(-3.4,-2.5,-2,-3.3).curveTo(-0.7,-4.1,0.8,-3.7).curveTo(2.4,-3.4,3.2,-2.2).curveTo(4,-0.9,3.8,0.6).curveTo(3.5,2.1,2.2,3.1).curveTo(1.2,3.8,0.1,3.8).lineTo(-0.6,3.7).closePath();
	this.shape_107.setTransform(-75.3,50.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(-3.3,-1.9).curveTo(-2.5,-3.2,-0.9,-3.7).curveTo(0.6,-4.1,1.9,-3.4).curveTo(3.2,-2.6,3.7,-1.2).curveTo(4.1,0.3,3.4,1.8).curveTo(2.7,3.2,1.2,3.7).curveTo(-0.3,4.2,-1.8,3.4).curveTo(-3.2,2.6,-3.7,1).curveTo(-4.1,-0.5,-3.3,-1.9).closePath();
	this.shape_108.setTransform(-43.3,79.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.beginFill("#231F20").beginStroke().moveTo(-1.8,3.4).curveTo(-3.2,2.6,-3.7,1).curveTo(-4.1,-0.5,-3.3,-1.9).curveTo(-2.5,-3.2,-0.9,-3.7).curveTo(0.6,-4.1,1.9,-3.4).curveTo(3.2,-2.6,3.7,-1.2).curveTo(4.1,0.3,3.4,1.8).curveTo(2.7,3.2,1.2,3.7).curveTo(0.6,3.8,0,3.8).curveTo(-0.9,3.8,-1.8,3.4).closePath();
	this.shape_109.setTransform(-43.3,79.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(-3.8,-0.1).curveTo(-3.7,-1.7,-2.6,-2.8).curveTo(-1.5,-3.9,0.1,-3.8).curveTo(1.6,-3.8,2.7,-2.7).curveTo(3.8,-1.6,3.8,-0).curveTo(3.9,1.5,2.7,2.7).curveTo(1.6,3.9,-0.1,3.8).curveTo(-1.7,3.8,-2.8,2.6).curveTo(-3.9,1.5,-3.8,-0.1).closePath();
	this.shape_110.setTransform(-1.3,90.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.beginFill("#231F20").beginStroke().moveTo(-0.1,3.8).curveTo(-1.7,3.8,-2.8,2.6).curveTo(-3.9,1.5,-3.8,-0.1).curveTo(-3.7,-1.7,-2.6,-2.8).curveTo(-1.5,-3.9,0.1,-3.8).curveTo(1.6,-3.8,2.7,-2.7).curveTo(3.8,-1.6,3.8,-0).curveTo(3.9,1.5,2.7,2.7).curveTo(1.7,3.8,0.2,3.8).lineTo(-0.1,3.8).closePath();
	this.shape_111.setTransform(-1.3,90.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(-3.5,1.6).curveTo(-4.1,0.2,-3.6,-1.3).curveTo(-3.4,-1.9,-2.9,-2.5).curveTo(-2.5,-3,-1.8,-3.4).curveTo(-0.4,-4.1,1.1,-3.6).curveTo(2.5,-3.2,3.3,-1.8).curveTo(4.1,-0.4,3.6,1.1).curveTo(3.2,2.7,1.7,3.4).curveTo(0.9,3.8,0.2,3.9).curveTo(-0.6,3.9,-1.3,3.6).curveTo(-2.9,3.1,-3.5,1.6).closePath();
	this.shape_112.setTransform(41,80.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.beginFill("#231F20").beginStroke().moveTo(-1.3,3.6).curveTo(-2.9,3.1,-3.5,1.6).curveTo(-4.1,0.2,-3.6,-1.3).curveTo(-3.4,-1.9,-2.9,-2.5).curveTo(-2.5,-3,-1.8,-3.4).curveTo(-0.4,-4.1,1.1,-3.6).curveTo(2.5,-3.2,3.3,-1.8).curveTo(4.1,-0.4,3.6,1.1).curveTo(3.2,2.7,1.7,3.4).curveTo(0.9,3.8,0.2,3.9).curveTo(-0.6,3.9,-1.3,3.6).closePath();
	this.shape_113.setTransform(41,80.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(-2.3,3).curveTo(-3.5,2,-3.8,0.5).curveTo(-4,-1,-3.1,-2.3).curveTo(-2.3,-3.5,-0.7,-3.8).curveTo(0.9,-4.1,2.2,-3.2).curveTo(3.5,-2.4,3.8,-0.8).curveTo(4.1,0.8,3.1,2.2).curveTo(2.2,3.5,0.6,3.8).curveTo(-1,4,-2.3,3).closePath();
	this.shape_114.setTransform(73.8,52.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.beginFill("#231F20").beginStroke().moveTo(-2.3,3).curveTo(-3.5,2,-3.8,0.5).curveTo(-4,-1,-3.1,-2.3).curveTo(-2.3,-3.5,-0.7,-3.8).curveTo(0.9,-4.1,2.2,-3.2).curveTo(3.5,-2.4,3.8,-0.8).curveTo(4.1,0.8,3.1,2.2).curveTo(2.2,3.5,0.6,3.8).lineTo(-0.1,3.8).curveTo(-1.3,3.8,-2.3,3).closePath();
	this.shape_115.setTransform(73.8,52.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.beginFill().beginStroke("#231F20").setStrokeStyle(1.1,0,0,4).moveTo(-0.6,3.7).curveTo(-2.1,3.4,-3.1,2.2).curveTo(-4,0.9,-3.8,-0.6).curveTo(-3.6,-2,-2.3,-3).curveTo(-1.1,-4,0.5,-3.8).curveTo(2.1,-3.7,3,-2.4).curveTo(4,-1.2,3.8,0.5).curveTo(3.6,2.1,2.3,3.1).curveTo(1,4,-0.6,3.7).closePath();
	this.shape_116.setTransform(89.8,12.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.beginFill("#231F20").beginStroke().moveTo(-0.6,3.7).curveTo(-2.1,3.4,-3.1,2.2).curveTo(-4,0.9,-3.8,-0.6).curveTo(-3.6,-2,-2.3,-3).curveTo(-1.1,-4,0.5,-3.8).curveTo(2.1,-3.7,3,-2.4).curveTo(4,-1.2,3.8,0.5).curveTo(3.6,2.1,2.3,3.1).curveTo(1.3,3.8,0.1,3.8).lineTo(-0.6,3.7).closePath();
	this.shape_117.setTransform(89.8,12.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.beginLinearGradientFill(["#EFE9E5","#BFB6AD","#A2958A"],[0.082,0.6,1],10.8,-47.6,-10.5,121.3).beginStroke().moveTo(-18.6,105.8).curveTo(-42.2,95.9,-60.3,77.7).curveTo(-78.5,59.5,-88.4,36).curveTo(-98.8,11.6,-98.8,-15.1).curveTo(-98.7,-19.2,-98.5,-23.2).curveTo(-89.4,-60,-61.1,-85.5).curveTo(-32.6,-111.1,5.3,-116.1).curveTo(-4.5,-93.2,-6.5,-67.8).curveTo(-8.8,-41.6,-2.6,-15.5).curveTo(7.3,26,35.2,56.7).curveTo(62.3,86.6,98.8,98.1).curveTo(83.9,106.9,67.4,111.4).curveTo(50.4,116.1,32.5,116.1).curveTo(5.8,116.1,-18.6,105.8).closePath();
	this.shape_118.setTransform(-32.4,15.1);

	this.instance_1 = new lib.Path_3();
	this.instance_1.setTransform(0.2,-15.6,1,1,0,0,0,131.1,115.5);
	this.instance_1.alpha = 0.25;

	this.instance_2 = new lib.Path_4();
	this.instance_2.setTransform(2.3,-6.1,1,1,0,0,0,128.8,125);
	this.instance_2.alpha = 0.461;

	this.instance_3 = new lib.Path_5();
	this.instance_3.setTransform(-130.1,-131.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.beginRadialGradientFill(["#EFE9E5","#BFB6AD","#A2958A"],[0.082,0.6,0.875],-60.8,-91.1,0,-60.8,-91.1,324.9).beginStroke().moveTo(-51,120.9).curveTo(-74.6,110.9,-92.8,92.7).curveTo(-110.9,74.6,-120.9,51).curveTo(-131.2,26.7,-131.2,-0).curveTo(-131.2,-26.7,-120.9,-51.1).curveTo(-110.9,-74.6,-92.8,-92.8).curveTo(-74.6,-110.9,-51,-120.9).curveTo(-26.7,-131.2,0,-131.2).curveTo(26.7,-131.2,51,-120.9).curveTo(74.6,-110.9,92.7,-92.8).curveTo(111,-74.6,120.9,-51.1).curveTo(131.2,-26.7,131.2,-0).curveTo(131.2,26.7,120.9,51).curveTo(111,74.6,92.7,92.7).curveTo(74.6,110.9,51,120.9).curveTo(26.7,131.2,0,131.2).curveTo(-26.7,131.2,-51,120.9).closePath();

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.beginRadialGradientFill(["#FFFFFF","#636466","#231F20"],[0.082,0.6,1],-201.3,-211.8,0,-201.3,-211.8,570.4).beginStroke().moveTo(-55.3,130.9).curveTo(-80.7,120.1,-100.4,100.4).curveTo(-120,80.8,-130.9,55.3).curveTo(-142,28.9,-142,0).curveTo(-142,-28.9,-130.9,-55.2).curveTo(-120,-80.7,-100.4,-100.4).curveTo(-80.7,-120,-55.3,-130.9).curveTo(-28.9,-142,0,-142).curveTo(28.9,-142,55.3,-130.9).curveTo(80.8,-120,100.4,-100.4).curveTo(120.1,-80.7,130.9,-55.2).curveTo(142,-28.9,142,0).curveTo(142,28.9,130.9,55.3).curveTo(120.1,80.8,100.4,100.4).curveTo(80.8,120.1,55.3,130.9).curveTo(28.9,142,0,142).curveTo(-28.9,142,-55.3,130.9).closePath().moveTo(-54.9,-129.8).curveTo(-80.1,-119.1,-99.6,-99.6).curveTo(-119.1,-80.1,-129.8,-54.9).curveTo(-140.9,-28.6,-140.9,0).curveTo(-140.9,28.7,-129.8,54.8).curveTo(-119.1,80.1,-99.6,99.6).curveTo(-80.1,119.2,-54.9,129.9).curveTo(-28.6,140.9,0,140.9).curveTo(28.7,140.9,54.8,129.9).curveTo(80.1,119.2,99.6,99.6).curveTo(119.1,80.1,129.8,54.8).curveTo(140.8,28.7,140.9,0).curveTo(140.8,-28.6,129.8,-54.9).curveTo(119.1,-80.1,99.6,-99.6).curveTo(80.1,-119.1,54.8,-129.8).curveTo(28.7,-140.9,0,-140.8).curveTo(-28.6,-140.9,-54.9,-129.8).closePath();

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.beginLinearGradientFill(["#9D9FA2","#636466","#231F20"],[0.102,0.506,1],-150.2,-109.2,141.2,102.8).beginStroke().moveTo(-53.5,126.5).curveTo(-78.1,116.1,-97.1,97.1).curveTo(-116.2,78.1,-126.5,53.5).curveTo(-137.3,28,-137.3,0).curveTo(-137.3,-28,-126.5,-53.5).curveTo(-116.2,-78.1,-97.1,-97.1).curveTo(-78.1,-116.2,-53.5,-126.5).curveTo(-28,-137.3,0,-137.3).curveTo(28,-137.3,53.5,-126.5).curveTo(78.1,-116.2,97.1,-97.1).curveTo(116.1,-78.1,126.5,-53.5).curveTo(137.4,-28,137.4,0).curveTo(137.4,28,126.5,53.5).curveTo(116.1,78.1,97.1,97.1).curveTo(78.1,116.1,53.5,126.5).curveTo(28,137.4,0,137.4).curveTo(-28,137.4,-53.5,126.5).closePath().moveTo(-51.8,-122.8).curveTo(-75.8,-112.6,-94.2,-94.2).curveTo(-112.6,-75.7,-122.8,-51.8).curveTo(-133.2,-27.1,-133.3,0).curveTo(-133.2,27.1,-122.8,51.8).curveTo(-112.6,75.8,-94.2,94.2).curveTo(-75.8,112.7,-51.8,122.8).curveTo(-27.1,133.2,0,133.2).curveTo(27.1,133.2,51.8,122.8).curveTo(75.8,112.7,94.2,94.2).curveTo(112.7,75.8,122.8,51.8).curveTo(133.2,27.1,133.2,0).curveTo(133.2,-27.1,122.8,-51.8).curveTo(112.7,-75.7,94.2,-94.2).curveTo(75.8,-112.6,51.8,-122.8).curveTo(27.1,-133.2,0,-133.2).curveTo(-27.1,-133.2,-51.8,-122.8).closePath();

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.beginFill("#231F20").beginStroke().moveTo(-54.8,129.8).curveTo(-80.1,119.1,-99.6,99.6).curveTo(-119.1,80.1,-129.8,54.8).curveTo(-140.9,28.6,-140.9,-0).curveTo(-140.9,-28.7,-129.8,-54.9).curveTo(-119.1,-80.1,-99.6,-99.6).curveTo(-80.1,-119.1,-54.8,-129.8).curveTo(-28.6,-140.9,0,-140.9).curveTo(28.7,-140.9,54.9,-129.8).curveTo(80.1,-119.1,99.6,-99.6).curveTo(119.1,-80.1,129.8,-54.9).curveTo(140.9,-28.7,140.9,-0).curveTo(140.9,28.6,129.8,54.8).curveTo(119.1,80.1,99.6,99.6).curveTo(80.1,119.1,54.9,129.8).curveTo(28.7,140.9,0,140.9).curveTo(-28.6,140.9,-54.8,129.8).closePath().moveTo(-53.2,-125.9).curveTo(-77.7,-115.6,-96.6,-96.6).curveTo(-115.5,-77.7,-125.9,-53.2).curveTo(-136.6,-27.8,-136.6,-0).curveTo(-136.6,27.8,-125.9,53.2).curveTo(-115.5,77.7,-96.6,96.6).curveTo(-77.7,115.5,-53.2,125.9).curveTo(-27.8,136.6,0,136.6).curveTo(27.8,136.6,53.2,125.9).curveTo(77.7,115.5,96.6,96.6).curveTo(115.6,77.7,125.9,53.2).curveTo(136.7,27.8,136.7,-0).curveTo(136.7,-27.8,125.9,-53.2).curveTo(115.6,-77.7,96.6,-96.6).curveTo(77.7,-115.6,53.2,-125.9).curveTo(27.8,-136.7,0,-136.7).curveTo(-27.8,-136.7,-53.2,-125.9).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-62.6,148.3).curveTo(-91.6,136.1,-113.9,113.8).curveTo(-136.1,91.6,-148.3,62.6).curveTo(-161,32.7,-161,0).curveTo(-161,-32.7,-148.3,-62.6).curveTo(-136.1,-91.6,-113.9,-113.9).curveTo(-91.6,-136.1,-62.6,-148.3).curveTo(-32.7,-161,0,-161).curveTo(32.7,-161,62.6,-148.3).curveTo(91.6,-136.1,113.8,-113.9).curveTo(136.1,-91.6,148.3,-62.6).curveTo(161,-32.7,161,0).curveTo(161,32.7,148.3,62.6).curveTo(136.2,91.6,113.8,113.8).curveTo(91.6,136.2,62.6,148.3).curveTo(32.7,161,0,161).curveTo(-32.7,161,-62.6,148.3).closePath();

	// Слой 4
	this.instance_4 = new lib.Символ29();
	this.instance_4.setTransform(-244.4,-6.6);
	this.instance_4.alpha = 0.199;

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.beginFill("#820E00").beginStroke().moveTo(71,197.9).lineTo(70.8,197.9).lineTo(70.7,197.7).lineTo(70.8,197.5).lineTo(71,197.4).lineTo(77,197.4).lineTo(77.2,197.5).lineTo(77.2,197.7).lineTo(77.2,197.9).lineTo(77,197.9).closePath().moveTo(59,197.9).lineTo(58.8,197.9).lineTo(58.7,197.7).lineTo(58.8,197.5).lineTo(59,197.4).lineTo(65,197.4).lineTo(65.2,197.5).lineTo(65.2,197.7).lineTo(65.2,197.9).lineTo(65,197.9).closePath().moveTo(47,197.9).lineTo(46.8,197.9).lineTo(46.7,197.7).lineTo(46.8,197.5).lineTo(47,197.4).lineTo(53,197.4).lineTo(53.1,197.5).lineTo(53.2,197.7).lineTo(53.1,197.9).lineTo(53,197.9).closePath().moveTo(35,197.9).lineTo(34.8,197.9).lineTo(34.7,197.7).lineTo(34.8,197.5).lineTo(35,197.4).lineTo(41,197.4).lineTo(41.2,197.5).lineTo(41.2,197.7).lineTo(41.2,197.9).lineTo(41,197.9).closePath().moveTo(23,197.9).lineTo(22.8,197.9).lineTo(22.7,197.7).lineTo(22.8,197.5).lineTo(23,197.4).lineTo(29,197.4).lineTo(29.2,197.5).lineTo(29.2,197.7).lineTo(29.2,197.9).lineTo(29,197.9).closePath().moveTo(11,197.9).lineTo(10.8,197.9).lineTo(10.7,197.7).lineTo(10.8,197.5).lineTo(11,197.4).lineTo(17,197.4).lineTo(17.1,197.5).lineTo(17.2,197.7).lineTo(17.1,197.9).lineTo(17,197.9).closePath().moveTo(-1,197.9).lineTo(-1.2,197.9).lineTo(-1.3,197.7).lineTo(-1.2,197.5).lineTo(-1,197.4).lineTo(5,197.4).lineTo(5.2,197.5).lineTo(5.2,197.7).lineTo(5.2,197.9).lineTo(5,197.9).closePath().moveTo(-13,197.9).lineTo(-13.2,197.9).lineTo(-13.3,197.7).lineTo(-13.2,197.5).lineTo(-13,197.4).lineTo(-7,197.4).lineTo(-6.8,197.5).lineTo(-6.8,197.7).lineTo(-6.8,197.9).lineTo(-7,197.9).closePath().moveTo(-25,197.9).lineTo(-25.2,197.9).lineTo(-25.3,197.7).lineTo(-25.2,197.5).lineTo(-25,197.4).lineTo(-19,197.4).lineTo(-18.9,197.5).lineTo(-18.8,197.7).lineTo(-18.9,197.9).lineTo(-19,197.9).closePath().moveTo(-37,197.9).lineTo(-37.2,197.9).lineTo(-37.3,197.7).lineTo(-37.2,197.5).lineTo(-37,197.4).lineTo(-31,197.4).lineTo(-30.8,197.5).lineTo(-30.8,197.7).lineTo(-30.8,197.9).lineTo(-31,197.9).closePath().moveTo(-49,197.9).lineTo(-49.2,197.9).lineTo(-49.3,197.7).lineTo(-49.2,197.5).lineTo(-49,197.4).lineTo(-43,197.4).lineTo(-42.8,197.5).lineTo(-42.8,197.7).lineTo(-42.8,197.9).lineTo(-43,197.9).closePath().moveTo(-61,197.9).lineTo(-61.2,197.9).lineTo(-61.3,197.7).lineTo(-61.2,197.5).lineTo(-61,197.4).lineTo(-55,197.4).lineTo(-54.9,197.5).lineTo(-54.8,197.7).lineTo(-54.9,197.9).lineTo(-55,197.9).closePath().moveTo(-73,197.9).lineTo(-73.2,197.9).lineTo(-73.3,197.7).lineTo(-73.2,197.5).lineTo(-73,197.4).lineTo(-67,197.4).lineTo(-66.8,197.5).lineTo(-66.8,197.7).lineTo(-66.8,197.9).lineTo(-67,197.9).closePath().moveTo(-78.1,196.6).lineTo(-78.1,196.5).lineTo(-78.1,190.5).lineTo(-78.1,190.3).lineTo(-77.9,190.2).lineTo(-77.7,190.3).lineTo(-77.6,190.5).lineTo(-77.6,196.5).lineTo(-77.7,196.6).lineTo(-77.9,196.7).lineTo(-78.1,196.6).closePath().moveTo(77.7,192.7).lineTo(77.6,192.5).lineTo(77.6,186.5).lineTo(77.7,186.4).lineTo(77.9,186.3).lineTo(78.1,186.4).lineTo(78.1,186.5).lineTo(78.1,192.5).lineTo(78.1,192.7).lineTo(77.9,192.8).lineTo(77.7,192.7).closePath().moveTo(-78.1,184.6).lineTo(-78.1,184.5).lineTo(-78.1,178.5).lineTo(-78.1,178.3).lineTo(-77.9,178.2).lineTo(-77.7,178.3).lineTo(-77.6,178.5).lineTo(-77.6,184.5).lineTo(-77.7,184.6).lineTo(-77.9,184.7).lineTo(-78.1,184.6).closePath().moveTo(77.7,180.7).lineTo(77.6,180.5).lineTo(77.6,174.5).lineTo(77.7,174.4).lineTo(77.9,174.3).lineTo(78.1,174.4).lineTo(78.1,174.5).lineTo(78.1,180.5).lineTo(78.1,180.7).lineTo(77.9,180.8).lineTo(77.7,180.7).closePath().moveTo(-78.1,172.7).lineTo(-78.1,172.5).lineTo(-78.1,166.5).lineTo(-78.1,166.3).lineTo(-77.9,166.2).lineTo(-77.7,166.3).lineTo(-77.6,166.5).lineTo(-77.6,172.5).lineTo(-77.7,172.7).lineTo(-77.9,172.7).lineTo(-78.1,172.7).closePath().moveTo(77.7,168.7).lineTo(77.6,168.5).lineTo(77.6,162.5).lineTo(77.7,162.3).lineTo(77.9,162.3).lineTo(78.1,162.3).lineTo(78.1,162.5).lineTo(78.1,168.5).lineTo(78.1,168.7).lineTo(77.9,168.8).lineTo(77.7,168.7).closePath().moveTo(-78.1,160.6).lineTo(-78.1,160.5).lineTo(-78.1,154.5).lineTo(-78.1,154.3).lineTo(-77.9,154.2).lineTo(-77.7,154.3).lineTo(-77.6,154.5).lineTo(-77.6,160.5).lineTo(-77.7,160.6).lineTo(-77.9,160.7).lineTo(-78.1,160.6).closePath().moveTo(77.7,156.7).lineTo(77.6,156.5).lineTo(77.6,150.5).lineTo(77.7,150.4).lineTo(77.9,150.3).lineTo(78.1,150.4).lineTo(78.1,150.5).lineTo(78.1,156.5).lineTo(78.1,156.7).lineTo(77.9,156.8).lineTo(77.7,156.7).closePath().moveTo(-78.1,148.6).lineTo(-78.1,148.5).lineTo(-78.1,142.5).lineTo(-78.1,142.3).lineTo(-77.9,142.2).lineTo(-77.7,142.3).lineTo(-77.6,142.5).lineTo(-77.6,148.5).lineTo(-77.7,148.6).lineTo(-77.9,148.7).lineTo(-78.1,148.6).closePath().moveTo(77.7,144.7).lineTo(77.6,144.5).lineTo(77.6,138.5).lineTo(77.7,138.4).lineTo(77.9,138.3).lineTo(78.1,138.4).lineTo(78.1,138.5).lineTo(78.1,144.5).lineTo(78.1,144.7).lineTo(77.9,144.8).lineTo(77.7,144.7).closePath().moveTo(-78.1,136.7).lineTo(-78.1,136.5).lineTo(-78.1,130.5).lineTo(-78.1,130.3).lineTo(-77.9,130.2).lineTo(-77.7,130.3).lineTo(-77.6,130.5).lineTo(-77.6,136.5).lineTo(-77.7,136.7).lineTo(-77.9,136.7).lineTo(-78.1,136.7).closePath().moveTo(77.7,132.7).lineTo(77.6,132.5).lineTo(77.6,126.5).lineTo(77.7,126.3).lineTo(77.9,126.3).lineTo(78.1,126.3).lineTo(78.1,126.5).lineTo(78.1,132.5).lineTo(78.1,132.7).lineTo(77.9,132.8).lineTo(77.7,132.7).closePath().moveTo(-78.1,124.6).lineTo(-78.1,124.5).lineTo(-78.1,118.5).lineTo(-78.1,118.3).lineTo(-77.9,118.2).lineTo(-77.7,118.3).lineTo(-77.6,118.5).lineTo(-77.6,124.5).lineTo(-77.7,124.6).lineTo(-77.9,124.7).lineTo(-78.1,124.6).closePath().moveTo(77.7,120.7).lineTo(77.6,120.5).lineTo(77.6,114.5).lineTo(77.7,114.4).lineTo(77.9,114.3).lineTo(78.1,114.4).lineTo(78.1,114.5).lineTo(78.1,120.5).lineTo(78.1,120.7).lineTo(77.9,120.8).lineTo(77.7,120.7).closePath().moveTo(-78.1,112.6).lineTo(-78.1,112.5).lineTo(-78.1,106.5).lineTo(-78.1,106.3).lineTo(-77.9,106.2).lineTo(-77.7,106.3).lineTo(-77.6,106.5).lineTo(-77.6,112.5).lineTo(-77.7,112.6).lineTo(-77.9,112.7).lineTo(-78.1,112.6).closePath().moveTo(77.7,108.7).lineTo(77.6,108.5).lineTo(77.6,102.5).lineTo(77.7,102.4).lineTo(77.9,102.3).lineTo(78.1,102.4).lineTo(78.1,102.5).lineTo(78.1,108.5).lineTo(78.1,108.7).lineTo(77.9,108.8).lineTo(77.7,108.7).closePath().moveTo(-78.1,100.7).lineTo(-78.1,100.5).lineTo(-78.1,94.5).lineTo(-78.1,94.3).lineTo(-77.9,94.2).lineTo(-77.7,94.3).lineTo(-77.6,94.5).lineTo(-77.6,100.5).lineTo(-77.7,100.7).lineTo(-77.9,100.7).lineTo(-78.1,100.7).closePath().moveTo(77.7,96.7).lineTo(77.6,96.5).lineTo(77.6,90.5).lineTo(77.7,90.3).lineTo(77.9,90.3).lineTo(78.1,90.3).lineTo(78.1,90.5).lineTo(78.1,96.5).lineTo(78.1,96.7).lineTo(77.9,96.8).lineTo(77.7,96.7).closePath().moveTo(-78.1,88.6).lineTo(-78.1,88.5).lineTo(-78.1,82.5).lineTo(-78.1,82.3).lineTo(-77.9,82.2).lineTo(-77.7,82.3).lineTo(-77.6,82.5).lineTo(-77.6,88.5).lineTo(-77.7,88.6).lineTo(-77.9,88.7).lineTo(-78.1,88.6).closePath().moveTo(77.7,84.7).lineTo(77.6,84.5).lineTo(77.6,78.5).lineTo(77.7,78.4).lineTo(77.9,78.3).lineTo(78.1,78.4).lineTo(78.1,78.5).lineTo(78.1,84.5).lineTo(78.1,84.7).lineTo(77.9,84.8).lineTo(77.7,84.7).closePath().moveTo(-78.1,76.6).lineTo(-78.1,76.5).lineTo(-78.1,70.5).lineTo(-78.1,70.3).lineTo(-77.9,70.2).lineTo(-77.7,70.3).lineTo(-77.6,70.5).lineTo(-77.6,76.5).lineTo(-77.7,76.6).lineTo(-77.9,76.7).lineTo(-78.1,76.6).closePath().moveTo(77.7,72.7).lineTo(77.6,72.5).lineTo(77.6,66.5).lineTo(77.7,66.4).lineTo(77.9,66.3).lineTo(78.1,66.4).lineTo(78.1,66.5).lineTo(78.1,72.5).lineTo(78.1,72.7).lineTo(77.9,72.8).lineTo(77.7,72.7).closePath().moveTo(-78.1,64.7).lineTo(-78.1,64.5).lineTo(-78.1,58.5).lineTo(-78.1,58.3).lineTo(-77.9,58.2).lineTo(-77.7,58.3).lineTo(-77.6,58.5).lineTo(-77.6,64.5).lineTo(-77.7,64.7).lineTo(-77.9,64.7).lineTo(-78.1,64.7).closePath().moveTo(77.7,60.7).lineTo(77.6,60.5).lineTo(77.6,54.5).lineTo(77.7,54.3).lineTo(77.9,54.3).lineTo(78.1,54.3).lineTo(78.1,54.5).lineTo(78.1,60.5).lineTo(78.1,60.7).lineTo(77.9,60.8).lineTo(77.7,60.7).closePath().moveTo(-78.1,52.6).lineTo(-78.1,52.5).lineTo(-78.1,46.5).lineTo(-78.1,46.3).lineTo(-77.9,46.2).lineTo(-77.7,46.3).lineTo(-77.6,46.5).lineTo(-77.6,52.5).lineTo(-77.7,52.6).lineTo(-77.9,52.7).lineTo(-78.1,52.6).closePath().moveTo(77.7,48.7).lineTo(77.6,48.5).lineTo(77.6,42.5).lineTo(77.7,42.4).lineTo(77.9,42.3).lineTo(78.1,42.4).lineTo(78.1,42.5).lineTo(78.1,48.5).lineTo(78.1,48.7).lineTo(77.9,48.8).lineTo(77.7,48.7).closePath().moveTo(-78.1,40.6).lineTo(-78.1,40.5).lineTo(-78.1,34.5).lineTo(-78.1,34.3).lineTo(-77.9,34.2).lineTo(-77.7,34.3).lineTo(-77.6,34.5).lineTo(-77.6,40.5).lineTo(-77.7,40.6).lineTo(-77.9,40.7).lineTo(-78.1,40.6).closePath().moveTo(77.7,36.7).lineTo(77.6,36.5).lineTo(77.6,30.5).lineTo(77.7,30.4).lineTo(77.9,30.3).lineTo(78.1,30.4).lineTo(78.1,30.5).lineTo(78.1,36.5).lineTo(78.1,36.7).lineTo(77.9,36.8).lineTo(77.7,36.7).closePath().moveTo(-78.1,28.7).lineTo(-78.1,28.5).lineTo(-78.1,22.5).lineTo(-78.1,22.3).lineTo(-77.9,22.2).lineTo(-77.7,22.3).lineTo(-77.6,22.5).lineTo(-77.6,28.5).lineTo(-77.7,28.7).lineTo(-77.9,28.7).lineTo(-78.1,28.7).closePath().moveTo(77.7,24.7).lineTo(77.6,24.5).lineTo(77.6,18.5).lineTo(77.7,18.3).lineTo(77.9,18.3).lineTo(78.1,18.3).lineTo(78.1,18.5).lineTo(78.1,24.5).lineTo(78.1,24.7).lineTo(77.9,24.8).lineTo(77.7,24.7).closePath().moveTo(-78.1,16.6).lineTo(-78.1,16.5).lineTo(-78.1,10.5).lineTo(-78.1,10.3).lineTo(-77.9,10.2).lineTo(-77.7,10.3).lineTo(-77.6,10.5).lineTo(-77.6,16.5).lineTo(-77.7,16.6).lineTo(-77.9,16.7).lineTo(-78.1,16.6).closePath().moveTo(77.7,12.7).lineTo(77.6,12.5).lineTo(77.6,6.5).lineTo(77.7,6.4).lineTo(77.9,6.3).lineTo(78.1,6.4).lineTo(78.1,6.5).lineTo(78.1,12.5).lineTo(78.1,12.7).lineTo(77.9,12.8).lineTo(77.7,12.7).closePath().moveTo(-78.1,4.6).lineTo(-78.1,4.5).lineTo(-78.1,-1.5).lineTo(-78.1,-1.7).lineTo(-77.9,-1.8).lineTo(-77.7,-1.7).lineTo(-77.6,-1.5).lineTo(-77.6,4.5).lineTo(-77.7,4.6).lineTo(-77.9,4.7).lineTo(-78.1,4.6).closePath().moveTo(77.7,0.7).lineTo(77.6,0.5).lineTo(77.6,-5.5).lineTo(77.7,-5.6).lineTo(77.9,-5.7).lineTo(78.1,-5.6).lineTo(78.1,-5.5).lineTo(78.1,0.5).lineTo(78.1,0.7).lineTo(77.9,0.8).lineTo(77.7,0.7).closePath().moveTo(-78.1,-7.3).lineTo(-78.1,-7.5).lineTo(-78.1,-13.5).lineTo(-78.1,-13.7).lineTo(-77.9,-13.8).lineTo(-77.7,-13.7).lineTo(-77.6,-13.5).lineTo(-77.6,-7.5).lineTo(-77.7,-7.3).lineTo(-77.9,-7.3).lineTo(-78.1,-7.3).closePath().moveTo(77.7,-11.3).lineTo(77.6,-11.5).lineTo(77.6,-17.5).lineTo(77.7,-17.7).lineTo(77.9,-17.7).lineTo(78.1,-17.7).lineTo(78.1,-17.5).lineTo(78.1,-11.5).lineTo(78.1,-11.3).lineTo(77.9,-11.2).lineTo(77.7,-11.3).closePath().moveTo(-78.1,-19.4).lineTo(-78.1,-19.5).lineTo(-78.1,-25.5).lineTo(-78.1,-25.7).lineTo(-77.9,-25.8).lineTo(-77.7,-25.7).lineTo(-77.6,-25.5).lineTo(-77.6,-19.5).lineTo(-77.7,-19.4).lineTo(-77.9,-19.3).lineTo(-78.1,-19.4).closePath().moveTo(77.7,-23.3).lineTo(77.6,-23.5).lineTo(77.6,-29.5).lineTo(77.7,-29.6).lineTo(77.9,-29.7).lineTo(78.1,-29.6).lineTo(78.1,-29.5).lineTo(78.1,-23.5).lineTo(78.1,-23.3).lineTo(77.9,-23.2).lineTo(77.7,-23.3).closePath().moveTo(-78.1,-31.4).lineTo(-78.1,-31.5).lineTo(-78.1,-37.5).lineTo(-78.1,-37.7).lineTo(-77.9,-37.8).lineTo(-77.7,-37.7).lineTo(-77.6,-37.5).lineTo(-77.6,-31.5).lineTo(-77.7,-31.4).lineTo(-77.9,-31.3).lineTo(-78.1,-31.4).closePath().moveTo(77.7,-35.3).lineTo(77.6,-35.5).lineTo(77.6,-41.5).lineTo(77.7,-41.6).lineTo(77.9,-41.7).lineTo(78.1,-41.6).lineTo(78.1,-41.5).lineTo(78.1,-35.5).lineTo(78.1,-35.3).lineTo(77.9,-35.2).lineTo(77.7,-35.3).closePath().moveTo(-78.1,-43.3).lineTo(-78.1,-43.5).lineTo(-78.1,-49.5).lineTo(-78.1,-49.7).lineTo(-77.9,-49.8).lineTo(-77.7,-49.7).lineTo(-77.6,-49.5).lineTo(-77.6,-43.5).lineTo(-77.7,-43.3).lineTo(-77.9,-43.3).lineTo(-78.1,-43.3).closePath().moveTo(77.7,-47.3).lineTo(77.6,-47.5).lineTo(77.6,-53.5).lineTo(77.7,-53.7).lineTo(77.9,-53.7).lineTo(78.1,-53.7).lineTo(78.1,-53.5).lineTo(78.1,-47.5).lineTo(78.1,-47.3).lineTo(77.9,-47.2).lineTo(77.7,-47.3).closePath().moveTo(-78.1,-55.4).lineTo(-78.1,-55.5).lineTo(-78.1,-61.5).lineTo(-78.1,-61.7).lineTo(-77.9,-61.8).lineTo(-77.7,-61.7).lineTo(-77.6,-61.5).lineTo(-77.6,-55.5).lineTo(-77.7,-55.4).lineTo(-77.9,-55.3).lineTo(-78.1,-55.4).closePath().moveTo(77.7,-59.3).lineTo(77.6,-59.5).lineTo(77.6,-65.5).lineTo(77.7,-65.6).lineTo(77.9,-65.7).lineTo(78.1,-65.6).lineTo(78.1,-65.5).lineTo(78.1,-59.5).lineTo(78.1,-59.3).lineTo(77.9,-59.2).lineTo(77.7,-59.3).closePath().moveTo(-78.1,-67.4).lineTo(-78.1,-67.5).lineTo(-78.1,-73.5).lineTo(-78.1,-73.7).lineTo(-77.9,-73.8).lineTo(-77.7,-73.7).lineTo(-77.6,-73.5).lineTo(-77.6,-67.5).lineTo(-77.7,-67.4).lineTo(-77.9,-67.3).lineTo(-78.1,-67.4).closePath().moveTo(77.7,-71.3).lineTo(77.6,-71.5).lineTo(77.6,-77.5).lineTo(77.7,-77.6).lineTo(77.9,-77.7).lineTo(78.1,-77.6).lineTo(78.1,-77.5).lineTo(78.1,-71.5).lineTo(78.1,-71.3).lineTo(77.9,-71.2).lineTo(77.7,-71.3).closePath().moveTo(-78.1,-79.3).lineTo(-78.1,-79.5).lineTo(-78.1,-85.5).lineTo(-78.1,-85.7).lineTo(-77.9,-85.8).lineTo(-77.7,-85.7).lineTo(-77.6,-85.5).lineTo(-77.6,-79.5).lineTo(-77.7,-79.3).lineTo(-77.9,-79.3).lineTo(-78.1,-79.3).closePath().moveTo(77.7,-83.3).lineTo(77.6,-83.5).lineTo(77.6,-89.5).lineTo(77.7,-89.7).lineTo(77.9,-89.7).lineTo(78.1,-89.7).lineTo(78.1,-89.5).lineTo(78.1,-83.5).lineTo(78.1,-83.3).lineTo(77.9,-83.2).lineTo(77.7,-83.3).closePath().moveTo(-78.1,-91.4).lineTo(-78.1,-91.5).lineTo(-78.1,-97.5).lineTo(-78.1,-97.7).lineTo(-77.9,-97.8).lineTo(-77.7,-97.7).lineTo(-77.6,-97.5).lineTo(-77.6,-91.5).lineTo(-77.7,-91.4).lineTo(-77.9,-91.3).lineTo(-78.1,-91.4).closePath().moveTo(77.7,-95.3).lineTo(77.6,-95.5).lineTo(77.6,-101.5).lineTo(77.7,-101.6).lineTo(77.9,-101.7).lineTo(78.1,-101.6).lineTo(78.1,-101.5).lineTo(78.1,-95.5).lineTo(78.1,-95.3).lineTo(77.9,-95.2).lineTo(77.7,-95.3).closePath().moveTo(-78.1,-103.4).lineTo(-78.1,-103.5).lineTo(-78.1,-109.5).lineTo(-78.1,-109.7).lineTo(-77.9,-109.8).lineTo(-77.7,-109.7).lineTo(-77.6,-109.5).lineTo(-77.6,-103.5).lineTo(-77.7,-103.4).lineTo(-77.9,-103.3).lineTo(-78.1,-103.4).closePath().moveTo(77.7,-107.3).lineTo(77.6,-107.5).lineTo(77.6,-113.5).lineTo(77.7,-113.6).lineTo(77.9,-113.7).lineTo(78.1,-113.6).lineTo(78.1,-113.5).lineTo(78.1,-107.5).lineTo(78.1,-107.3).lineTo(77.9,-107.2).lineTo(77.7,-107.3).closePath().moveTo(-78.1,-115.3).lineTo(-78.1,-115.5).lineTo(-78.1,-121.5).lineTo(-78.1,-121.7).lineTo(-77.9,-121.8).lineTo(-77.7,-121.7).lineTo(-77.6,-121.5).lineTo(-77.6,-115.5).lineTo(-77.7,-115.3).lineTo(-77.9,-115.3).lineTo(-78.1,-115.3).closePath().moveTo(77.7,-119.3).lineTo(77.6,-119.5).lineTo(77.6,-125.5).lineTo(77.7,-125.7).lineTo(77.9,-125.7).lineTo(78.1,-125.7).lineTo(78.1,-125.5).lineTo(78.1,-119.5).lineTo(78.1,-119.3).lineTo(77.9,-119.2).lineTo(77.7,-119.3).closePath().moveTo(-78.1,-127.4).lineTo(-78.1,-127.5).lineTo(-78.1,-133.5).lineTo(-78.1,-133.7).lineTo(-77.9,-133.8).lineTo(-77.7,-133.7).lineTo(-77.6,-133.5).lineTo(-77.6,-127.5).lineTo(-77.7,-127.4).lineTo(-77.9,-127.3).lineTo(-78.1,-127.4).closePath().moveTo(77.7,-131.3).lineTo(77.6,-131.5).lineTo(77.6,-137.5).lineTo(77.7,-137.6).lineTo(77.9,-137.7).lineTo(78.1,-137.6).lineTo(78.1,-137.5).lineTo(78.1,-131.5).lineTo(78.1,-131.3).lineTo(77.9,-131.2).lineTo(77.7,-131.3).closePath().moveTo(-78.1,-139.4).lineTo(-78.1,-139.5).lineTo(-78.1,-145.5).lineTo(-78.1,-145.7).lineTo(-77.9,-145.8).lineTo(-77.7,-145.7).lineTo(-77.6,-145.5).lineTo(-77.6,-139.5).lineTo(-77.7,-139.4).lineTo(-77.9,-139.3).lineTo(-78.1,-139.4).closePath().moveTo(77.7,-143.3).lineTo(77.6,-143.5).lineTo(77.6,-149.5).lineTo(77.7,-149.6).lineTo(77.9,-149.7).lineTo(78.1,-149.6).lineTo(78.1,-149.5).lineTo(78.1,-143.5).lineTo(78.1,-143.3).lineTo(77.9,-143.2).lineTo(77.7,-143.3).closePath().moveTo(-78.1,-151.3).lineTo(-78.1,-151.5).lineTo(-78.1,-157.5).lineTo(-78.1,-157.7).lineTo(-77.9,-157.8).lineTo(-77.7,-157.7).lineTo(-77.6,-157.5).lineTo(-77.6,-151.5).lineTo(-77.7,-151.3).lineTo(-77.9,-151.3).lineTo(-78.1,-151.3).closePath().moveTo(77.7,-155.3).lineTo(77.6,-155.5).lineTo(77.6,-161.5).lineTo(77.7,-161.7).lineTo(77.9,-161.7).lineTo(78.1,-161.7).lineTo(78.1,-161.5).lineTo(78.1,-155.5).lineTo(78.1,-155.3).lineTo(77.9,-155.2).lineTo(77.7,-155.3).closePath().moveTo(-78.1,-163.4).lineTo(-78.1,-163.5).lineTo(-78.1,-169.5).lineTo(-78.1,-169.7).lineTo(-77.9,-169.8).lineTo(-77.7,-169.7).lineTo(-77.6,-169.5).lineTo(-77.6,-163.5).lineTo(-77.7,-163.4).lineTo(-77.9,-163.3).lineTo(-78.1,-163.4).closePath().moveTo(77.7,-167.3).lineTo(77.6,-167.5).lineTo(77.6,-173.5).lineTo(77.7,-173.6).lineTo(77.9,-173.7).lineTo(78.1,-173.6).lineTo(78.1,-173.5).lineTo(78.1,-167.5).lineTo(78.1,-167.3).lineTo(77.9,-167.2).lineTo(77.7,-167.3).closePath().moveTo(-78.1,-175.4).lineTo(-78.1,-175.5).lineTo(-78.1,-181.5).lineTo(-78.1,-181.7).lineTo(-77.9,-181.8).lineTo(-77.7,-181.7).lineTo(-77.6,-181.5).lineTo(-77.6,-175.5).lineTo(-77.7,-175.4).lineTo(-77.9,-175.3).lineTo(-78.1,-175.4).closePath().moveTo(77.7,-179.3).lineTo(77.6,-179.5).lineTo(77.6,-185.5).lineTo(77.7,-185.6).lineTo(77.9,-185.7).lineTo(78.1,-185.6).lineTo(78.1,-185.5).lineTo(78.1,-179.5).lineTo(78.1,-179.3).lineTo(77.9,-179.2).lineTo(77.7,-179.3).closePath().moveTo(-78.1,-187.3).lineTo(-78.1,-187.5).lineTo(-78.1,-193.5).lineTo(-78.1,-193.7).lineTo(-77.9,-193.8).lineTo(-77.7,-193.7).lineTo(-77.6,-193.5).lineTo(-77.6,-187.5).lineTo(-77.7,-187.3).lineTo(-77.9,-187.3).lineTo(-78.1,-187.3).closePath().moveTo(77.7,-191.3).lineTo(77.6,-191.5).lineTo(77.6,-197.5).lineTo(77.7,-197.7).lineTo(77.9,-197.7).lineTo(78.1,-197.7).lineTo(78.1,-197.5).lineTo(78.1,-191.5).lineTo(78.1,-191.3).lineTo(77.9,-191.2).lineTo(77.7,-191.3).closePath().moveTo(66.1,-197.4).lineTo(65.9,-197.5).lineTo(65.9,-197.7).lineTo(65.9,-197.9).lineTo(66.1,-197.9).lineTo(72.1,-197.9).lineTo(72.3,-197.9).lineTo(72.4,-197.7).lineTo(72.3,-197.5).lineTo(72.1,-197.4).closePath().moveTo(54.1,-197.4).lineTo(53.9,-197.5).lineTo(53.9,-197.7).lineTo(53.9,-197.9).lineTo(54.1,-197.9).lineTo(60.1,-197.9).lineTo(60.3,-197.9).lineTo(60.4,-197.7).lineTo(60.3,-197.5).lineTo(60.1,-197.4).closePath().moveTo(42.1,-197.4).lineTo(42,-197.5).lineTo(41.9,-197.7).lineTo(42,-197.9).lineTo(42.1,-197.9).lineTo(48.1,-197.9).lineTo(48.3,-197.9).lineTo(48.4,-197.7).lineTo(48.3,-197.5).lineTo(48.1,-197.4).closePath().moveTo(30.1,-197.4).lineTo(29.9,-197.5).lineTo(29.9,-197.7).lineTo(29.9,-197.9).lineTo(30.1,-197.9).lineTo(36.1,-197.9).lineTo(36.3,-197.9).lineTo(36.4,-197.7).lineTo(36.3,-197.5).lineTo(36.1,-197.4).closePath().moveTo(18.1,-197.4).lineTo(17.9,-197.5).lineTo(17.9,-197.7).lineTo(17.9,-197.9).lineTo(18.1,-197.9).lineTo(24.1,-197.9).lineTo(24.3,-197.9).lineTo(24.4,-197.7).lineTo(24.3,-197.5).lineTo(24.1,-197.4).closePath().moveTo(6.1,-197.4).lineTo(6,-197.5).lineTo(5.9,-197.7).lineTo(6,-197.9).lineTo(6.1,-197.9).lineTo(12.1,-197.9).lineTo(12.3,-197.9).lineTo(12.4,-197.7).lineTo(12.3,-197.5).lineTo(12.1,-197.4).closePath().moveTo(-5.9,-197.4).lineTo(-6.1,-197.5).lineTo(-6.1,-197.7).lineTo(-6.1,-197.9).lineTo(-5.9,-197.9).lineTo(0.1,-197.9).lineTo(0.3,-197.9).lineTo(0.4,-197.7).lineTo(0.3,-197.5).lineTo(0.1,-197.4).closePath().moveTo(-17.9,-197.4).lineTo(-18.1,-197.5).lineTo(-18.1,-197.7).lineTo(-18.1,-197.9).lineTo(-17.9,-197.9).lineTo(-11.9,-197.9).lineTo(-11.7,-197.9).lineTo(-11.6,-197.7).lineTo(-11.7,-197.5).lineTo(-11.9,-197.4).closePath().moveTo(-29.9,-197.4).lineTo(-30,-197.5).lineTo(-30.1,-197.7).lineTo(-30,-197.9).lineTo(-29.9,-197.9).lineTo(-23.9,-197.9).lineTo(-23.7,-197.9).lineTo(-23.6,-197.7).lineTo(-23.7,-197.5).lineTo(-23.9,-197.4).closePath().moveTo(-41.9,-197.4).lineTo(-42.1,-197.5).lineTo(-42.1,-197.7).lineTo(-42.1,-197.9).lineTo(-41.9,-197.9).lineTo(-35.9,-197.9).lineTo(-35.7,-197.9).lineTo(-35.6,-197.7).lineTo(-35.7,-197.5).lineTo(-35.9,-197.4).closePath().moveTo(-53.9,-197.4).lineTo(-54.1,-197.5).lineTo(-54.1,-197.7).lineTo(-54.1,-197.9).lineTo(-53.9,-197.9).lineTo(-47.9,-197.9).lineTo(-47.7,-197.9).lineTo(-47.6,-197.7).lineTo(-47.7,-197.5).lineTo(-47.9,-197.4).closePath().moveTo(-65.9,-197.4).lineTo(-66,-197.5).lineTo(-66.1,-197.7).lineTo(-66,-197.9).lineTo(-65.9,-197.9).lineTo(-59.9,-197.9).lineTo(-59.7,-197.9).lineTo(-59.6,-197.7).lineTo(-59.7,-197.5).lineTo(-59.9,-197.4).closePath().moveTo(-77.9,-197.4).lineTo(-78.1,-197.5).lineTo(-78.1,-197.7).lineTo(-78.1,-197.9).lineTo(-77.9,-197.9).lineTo(-71.9,-197.9).lineTo(-71.7,-197.9).lineTo(-71.6,-197.7).lineTo(-71.7,-197.5).lineTo(-71.9,-197.4).closePath();
	this.shape_123.setTransform(-244.4,-6.7);

	this.instance_4.mask = this.shape_123.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.instance_4}]}).wait(1));

	// Слой 2
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.beginRadialGradientFill(["#9D9FA2","#636466","#323334","#0C0D0D","#231F20"],[0.012,0.263,0.588,0.851,1],-82.5,-134.4,0,-82.5,-134.4,267.9).beginStroke().moveTo(-62.6,148.3).curveTo(-91.6,136.1,-113.8,113.9).curveTo(-136.1,91.5,-148.3,62.6).curveTo(-161,32.7,-161,0).curveTo(-161,-32.7,-148.3,-62.6).curveTo(-136.1,-91.6,-113.8,-113.8).curveTo(-91.6,-136.1,-62.6,-148.3).curveTo(-32.7,-161,0,-161).curveTo(32.7,-161,62.6,-148.3).curveTo(91.5,-136.1,113.9,-113.8).curveTo(136.1,-91.6,148.3,-62.6).curveTo(161,-32.7,161,0).curveTo(161,32.7,148.3,62.6).curveTo(136.1,91.5,113.9,113.9).curveTo(91.5,136.1,62.6,148.3).curveTo(32.7,161,0,161).curveTo(-32.7,161,-62.6,148.3).closePath();

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161,-161,322,322);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(9));

	// Слой 1 - копия
	this.instance = new lib.Символ24();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).to({alpha:0},8).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ23();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},14).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-384,1024,768);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ20();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.53,alpha:0.5},6,cjs.Ease.get(-1)).to({scaleX:0.06,alpha:0},8,cjs.Ease.get(1)).to({scaleX:0.5,alpha:0.461},7,cjs.Ease.get(-1)).to({scaleX:1,alpha:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.2,-60.8,488.5,4);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-40,14.9,80);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ15();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90,180.1,180.1);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();
	this.instance.setTransform(0,50,1,1,0,0,0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},139).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-40,14.9,80);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ28();
	this.instance.setTransform(1.4,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// FlashAICB
	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(1.5,101.8,1.194,1.194);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-507.4,-449,710.9,779.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия: 2 - копия
	this.instance = new lib.Символ4();
	this.instance.setTransform(126,0,1,0.019);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).wait(1));

	// Слой 1 - копия: 2 - копия: 2
	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(108,0,1,0.019);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// Слой 1 - копия: 2
	this.instance_2 = new lib.Символ4();
	this.instance_2.setTransform(90,0,1,0.019);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// Слой 1 - копия: 2
	this.instance_3 = new lib.Символ4();
	this.instance_3.setTransform(72,0,1,0.019);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(9));

	// Слой 1 - копия: 2
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(54,0,1,0.019);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Слой 1 - копия: 2
	this.instance_5 = new lib.Символ4();
	this.instance_5.setTransform(36,0,1,0.019);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// Слой 1 - копия
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(18,0,1,0.019);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// Слой 1
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(0,0,1,0.019);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:1},4,cjs.Ease.get(1)).to({scaleY:0.51},4,cjs.Ease.get(-1)).to({scaleY:0.02},4,cjs.Ease.get(1)).to({_off:true},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-2.3,6,2.5);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 11
	this.instance = new lib.Символ11();
	this.instance.setTransform(60.5,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({scaleX:1.26,scaleY:1.26},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(1));

	// Символ 11
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(0,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({scaleX:1.26,scaleY:1.26},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(3));

	// Символ 11
	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(-60.5,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.28,scaleY:1.28},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.7,-61.8,153.5,32.5);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.title_main = new lib.title_main();
	this.title_main.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.title_main).wait(1));

	// Слой 2
	this.title_device = new lib.title_device();
	this.title_device.setTransform(-0.5,-15.6);

	this.timeline.addTween(cjs.Tween.get(this.title_device).wait(1));

	// Слой 2 - копия
	this.instance = new lib.Символ21();
	this.instance.setTransform(0,-58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266,-119.2,531.6,225);


(lib.plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.parent.bg.gotoAndPlay(15);
	}
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(10).call(this.frame_139).wait(1));

	// Слой 7
	this.title_2 = new lib.title_2();
	this.title_2.setTransform(0,-189);
	this.title_2.alpha = 0;
	this.title_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.title_2).wait(133).to({_off:false},0).to({alpha:1},6).wait(1));

	// Слой 6
	this.instance = new lib.Символ12();
	this.instance.setTransform(0,-216,0.659,0.659);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({alpha:1},5).wait(90).to({alpha:0},6).to({_off:true},1).wait(25));

	// Слой 4
	this.title = new lib.title();
	this.title.setTransform(0,-176);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1).to({regX:-0.2,regY:-6.8,x:-0.2,y:-190.7,alpha:0.802},0).wait(1).to({y:-197.3,alpha:0.637},0).wait(1).to({y:-202.2,alpha:0.515},0).wait(1).to({y:-205.7,alpha:0.427},0).wait(1).to({y:-208.5,alpha:0.358},0).wait(1).to({y:-210.8,alpha:0.3},0).wait(1).to({y:-212.9,alpha:0.248},0).wait(1).to({y:-214.6,alpha:0.204},0).wait(1).to({y:-216.2,alpha:0.166},0).wait(1).to({y:-217.4,alpha:0.134},0).wait(1).to({y:-218.5,alpha:0.107},0).wait(1).to({y:-219.5,alpha:0.083},0).wait(1).to({y:-220.3,alpha:0.064},0).wait(1).to({y:-220.9,alpha:0.047},0).wait(1).to({y:-221.5,alpha:0.032},0).wait(1).to({y:-222,alpha:0.02},0).wait(1).to({y:-222.4,alpha:0.009},0).wait(1).to({regX:0,regY:0,x:0,y:-216,alpha:0},0).to({_off:true},1).wait(121));

	// Слой 2 - копия
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(0.4,17.3,1.38,1.38,159.7,0,0,-72.8,44.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({rotation:285.4,y:17.4},18,cjs.Ease.get(-1)).to({rotation:354.5,x:0.5,y:17.2},19,cjs.Ease.get(1)).to({rotation:352,x:0.4},3).to({rotation:355.2},3).to({rotation:352,y:17.3},3).to({rotation:354.9},3).to({rotation:351.3},3).to({rotation:353.2,x:0.3,y:17.2},3).to({regX:-72.7,rotation:350.2,x:0.5},3).to({regY:45,rotation:353.2,y:17.3},3).to({regX:-72.8,regY:44.9,rotation:350.3,x:0.4,y:17.2},3).to({rotation:353.3,x:0.3,y:17.3},3).to({regX:-72.7,regY:45,rotation:340.6,x:0.4},10,cjs.Ease.get(-1)).to({regY:44.9,rotation:327.6,x:0.3,y:17.2},10,cjs.Ease.get(1)).wait(15).to({y:46},5,cjs.Ease.get(-1)).to({y:78},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ8();
	this.instance_2.setTransform(0,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({y:-57},5,cjs.Ease.get(-1)).to({y:-26},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-507.4,-537,773,779.2);


(lib.button_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.beginRadialGradientFill(["#993C00","#FFC700","#993200"],[0.8,0.898,1],0,0,0,0,0,27).beginStroke().moveTo(-19.1,19.1).curveTo(-27,11.2,-27,-0).curveTo(-27,-11.2,-19.1,-19.1).curveTo(-11.2,-27,0,-27).curveTo(11.2,-27,19.1,-19.1).curveTo(27,-11.2,27,-0).curveTo(27,11.2,19.1,19.1).curveTo(11.2,27,0,27).curveTo(-11.2,27,-19.1,19.1).closePath().moveTo(-15.6,-15.6).curveTo(-22,-9.1,-22,-0).curveTo(-22,9.1,-15.6,15.6).curveTo(-9.1,22.1,0,22).curveTo(9.1,22.1,15.6,15.6).curveTo(22,9.1,22,-0).curveTo(22,-9.1,15.6,-15.6).curveTo(9.1,-22.1,0,-22.1).curveTo(-9.1,-22.1,-15.6,-15.6).closePath();
	this.shape.setTransform(-0.3,-0.9,2.064,2.064);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// FlashAICB
	this.instance = new lib.Символ25();
	this.instance.setTransform(-0.1,-0.3,2.206,2.206,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Режим изоляции
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(1.5,2.1);
	this.instance_1.alpha = 0.828;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},12).to({alpha:0.828},12).wait(1));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginStroke("#A84800").setStrokeStyle(1,1,1,3,true).moveTo(65.1,0).curveTo(65.1,27,46,46).curveTo(27,65.1,0,65.1).curveTo(-26.9,65.1,-46,46).curveTo(-65.1,27,-65.1,0).curveTo(-65.1,-26.9,-46,-46).curveTo(-26.9,-65.1,0,-65.1).curveTo(27,-65.1,46,-46).curveTo(65.1,-26.9,65.1,0).closePath();
	this.shape_1.setTransform(-0.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#9D623C","#8F0F0F","#300808","#0C0D0D","#231F20"],[0.012,0.263,0.588,0.851,1],0,0,0,0,0,65.6).beginStroke().moveTo(-46,46).curveTo(-65,26.9,-65.1,-0).curveTo(-65,-27,-46,-46).curveTo(-26.9,-65.1,0,-65.1).curveTo(27,-65.1,46,-46).curveTo(65.1,-27,65.1,-0).curveTo(65.1,26.9,46,46).curveTo(27,65,0,65.1).curveTo(-26.9,65,-46,46).closePath();
	this.shape_2.setTransform(-0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-66.4,132.1,132.1);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(0,0.1);

	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(0,-50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-90.2,180.1,180.4);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(139).call(this.frame_139).wait(1));

	// Слой 2
	this.button_txt = new lib.button_txt();
	this.button_txt.setTransform(0,-81.1);

	this.timeline.addTween(cjs.Tween.get(this.button_txt).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.608},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.198},0).wait(1).to({alpha:0.163},0).wait(1).to({alpha:0.134},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(120));

	// Слой 1
	this.button_in = new lib.button_in();
	this.button_in.setTransform(0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.button_in).wait(1).to({regX:-0.1,regY:-0.4,scaleX:0.82,scaleY:0.82,x:0.3,y:0.5,alpha:0.774},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.608},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:0.6,alpha:0.493},0).wait(1).to({scaleX:0.54,scaleY:0.54,alpha:0.409},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0.344},0).wait(1).to({scaleX:0.44,scaleY:0.44,alpha:0.287},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:0.7,alpha:0.238},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.198},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.163},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.134},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.109},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.087},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.068},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.052},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:0.4,alpha:0.038},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.026},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.015},0).wait(1).to({scaleX:0.22,scaleY:0.22,alpha:0.007},0).wait(1).to({regX:0,regY:0,scaleX:0.21,scaleY:0.21,y:0.8,alpha:0},0).to({_off:true},1).wait(120));

	// Слой 9
	this.button_2 = new lib.button_2();
	this.button_2.setTransform(0,99);
	this.button_2.alpha = 0;
	this.button_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(133).to({_off:false},0).wait(1).to({regY:25.3,y:76.4,alpha:0.479},0).wait(1).to({y:55.3,alpha:0.69},0).wait(1).to({y:41.3,alpha:0.83},0).wait(1).to({y:32.7,alpha:0.916},0).wait(1).to({y:27.5,alpha:0.968},0).wait(1).to({regY:0,y:-1,alpha:1},0).wait(1));

	// Слой 7
	this.instance = new lib.Символ19();
	this.instance.setTransform(-2,0.9);
	this.instance.alpha = 0.039;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({alpha:1},4).wait(99).to({regX:-0.5,regY:-0.1,x:-2.5,y:0.8,alpha:0.985},0).wait(1).to({alpha:0.965},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.558},0).wait(1).to({alpha:0.344},0).wait(1).to({regX:0,regY:0,x:-2,y:0.9,alpha:0},0).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(0,-0.1,0.267,0.267);
	this.instance_1.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.042},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.047},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.054},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.062},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.072},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.085},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.118},0).wait(1).to({scaleX:0.34,scaleY:0.34,alpha:0.14},0).wait(1).to({scaleX:0.36,scaleY:0.36,alpha:0.167},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.198},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.236},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.284},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.338},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.404},0).wait(1).to({scaleX:0.61,scaleY:0.61,alpha:0.49},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.612},0).wait(1).to({scaleX:0.84,scaleY:0.84,alpha:0.785},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).to({scaleX:1.25,scaleY:1.25},4,cjs.Ease.get(1)).to({scaleX:0.89,scaleY:0.89},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(99).to({scaleX:0.99,scaleY:0.99,alpha:0.985},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.965},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.906},0).wait(1).to({scaleX:0.9,scaleY:0.9,alpha:0.859},0).wait(1).to({scaleX:0.86,scaleY:0.86,alpha:0.793},0).wait(1).to({scaleX:0.79,scaleY:0.79,alpha:0.694},0).wait(1).to({scaleX:0.7,scaleY:0.7,alpha:0.558},0).wait(1).to({scaleX:0.55,scaleY:0.55,alpha:0.344},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237,-143.7,474.2,209.3);


// stage content:



(lib.app_2_speed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		
		function getWindowSize() {
		
			return {
				width: Math.min(document.documentElement.clientWidth, window.innerWidth || 0),
				height: Math.min(document.documentElement.clientHeight, window.innerHeight || 0)
			}
		}
		
		//Resize
		
		window._setCanvasSize = function() {
			
			var windowSize = getWindowSize();
			stage.canvas.width = windowSize.width;
			stage.canvas.height = windowSize.height;
			
			_this.bg.x = stage.canvas.width/2;
			_this.bg.y = stage.canvas.height/2;
			
			_this.shape_left.x = 0;
			_this.shape_left.y = stage.canvas.height/2;
			
			_this.shape_right.x = stage.canvas.width;
			_this.shape_right.y = stage.canvas.height/2;
			
			_this.plate.x = stage.canvas.width/2;
			_this.plate.y = stage.canvas.height/3;
			
			_this.button.x = stage.canvas.width/2;
			_this.button.y = (stage.canvas.height/2)+(stage.canvas.height/3);
			
			//Scale
		
			_this.bg.scaleX = 0.9;
			_this.bg.scaleY = 0.9;
			
			_this.shape_right.scaleX = 0.6;
			_this.shape_right.scaleY = 0.6;
			
			_this.shape_left.scaleX = 0.6;
			_this.shape_left.scaleY = 0.6;
		
			_this.plate.scaleX = 0.6;
			_this.plate.scaleY = 0.6;
			
			_this.button.scaleX = 0.6;
			_this.button.scaleY = 0.6;
			
			if(stage.canvas.width > 767){
			
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
			
			_this.shape_left.scaleX = 1.5;
			_this.shape_left.scaleY = 1.5;
				
			_this.shape_right.scaleX = 1.5;
			_this.shape_right.scaleY = 1.5;
		
			_this.plate.scaleX = 0.8;
			_this.plate.scaleY = 0.8;
				
			_this.button.scaleX = 0.8;
			_this.button.scaleY = 0.8;
			
			}
			
			if(stage.canvas.width > stage.canvas.height && stage.canvas.width < 767){
			
			_this.bg.scaleX = 1.5;
			_this.bg.scaleY = 1.5;
			
			_this.shape_left.scaleX = 1.5;
			_this.shape_left.scaleY = 1.5;
				
			_this.shape_right.scaleX = 1.5;
			_this.shape_right.scaleY = 1.5;
		
			_this.plate.scaleX = 0.5;
			_this.plate.scaleY = 0.5;
				
			_this.button.scaleX = 0.5;
			_this.button.scaleY = 0.5;
			
			_this.button.x = (stage.canvas.width/2)+(stage.canvas.width/4);
			_this.button.y = stage.canvas.height/1.8;
				
			_this.plate.x = stage.canvas.width/3.1;
			_this.plate.y = stage.canvas.height/2.8;
				
			}
		
		}
		
		
			window.onresize=function(){
				_setCanvasSize();
			}
		
			
		window.onresize();
		
		//Actions
			
		var onClick_1 = function() {
			_this.plate.gotoAndPlay(1);
			_this.button.gotoAndPlay(1);
			_this.bg.gotoAndPlay(1);
			 event.preventDefault(); 
			
			stage.canvas.removeEventListener("click", onClick_1);
			stage.canvas.addEventListener("click", onClick);
		};
		
		var onClick = function(evt) {
			console.log('click')
			window.open(mixTAG, "_blank");
		};
		
		stage.canvas.addEventListener("click", onClick_1, false);
		
		
		window.onresize();
		document.addEventListener("DOMContentLoaded", function(){ _setCanvasSize()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 3
	this.plate = new lib.plate();
	this.plate.setTransform(513,248,1,1,0,0,0,0,-105);

	this.timeline.addTween(cjs.Tween.get(this.plate).wait(1));

	// Слой 2
	this.button = new lib.button();
	this.button.setTransform(511.7,624.7);

	this.timeline.addTween(cjs.Tween.get(this.button).wait(1));

	// Слой 4
	this.shape_right = new lib.Символ5();
	this.shape_right.setTransform(1026.1,426.3,1.628,4.137,0,0,180,-67,4.9);
	this.shape_right.alpha = 0.039;

	this.shape_left = new lib.Символ5();
	this.shape_left.setTransform(-1.9,426.3,1.628,4.137,0,0,0,-70.2,4.9);
	this.shape_left.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_left},{t:this.shape_right}]}).wait(1));

	// Слой 1 - копия
	this.bg = new lib.Символ22();
	this.bg.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,200,1024,952);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
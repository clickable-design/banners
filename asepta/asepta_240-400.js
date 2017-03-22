(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.golova = function() {
	this.initialize(img.golova);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,471,223);


(lib.pasta = function() {
	this.initialize(img.pasta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,310);


(lib.rot = function() {
	this.initialize(img.rot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,329);


(lib.u67 = function() {
	this.initialize(img.u67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,70);


(lib.y5 = function() {
	this.initialize(img.y5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,104);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3FB34F").s().p("Ag8BKQgJgFgEgKQgIgOABgYIAFgmQABgYAEgNQAFgXARgCQAIgBANAGIATALQAeAQAOAJQAtAaAAAYQAAAUghAQIgwATQgTAJgKADIgKABQgLAAgKgGg");
	this.shape.setTransform(484.3,82.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3FB34F").s().p("Ag9BOQgGgHgBgOIgBgWIgEgyQAAgXACgNQAFgWANgIQARgLAeATQAQALAZAVIAaASQANAMAAAQQAAALgFAIQgIAOgVAMIgjARQgUAMgNAEQgIADgHAAQgLAAgHgIg");
	this.shape_1.setTransform(445.2,78.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3FB34F").s().p("Ag9BOQgGgHgBgOIgBgWIgEgyQAAgXACgNQAFgVANgJQARgLAeATQAQALAZAVIAaATQANALAAAQQAAALgFAIQgIAOgVAMIgjARQgUAMgNAEQgIADgGAAQgMAAgHgIg");
	this.shape_2.setTransform(411.1,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtIAQgcQAKgOAQgCQAIgBALAEQAPAGAOAUIAVAgIAUAfQAKAWgLAMQgGAGgOADIgVAEQgeAHgUACQgSADgMAAIgGAAg");
	this.shape_3.setTransform(379.8,105.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3FB34F").s().p("AASBRIglgIQgYgEgNgEQgWgIgBgRQgBgIAIgMIAMgSIAdgqQAOgTAJgIQAQgPAPACQAUACANAhQAHATAIAfIAJAeQADARgLANQgFAIgKAEQgKAFgPAAIgOgBg");
	this.shape_4.setTransform(406.1,92.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3FB34F").s().p("AgRBKQgKgBgJgGQgNgKgJgWIgNgkQgJgWgDgNQgFgYAOgJQAHgEAOAAIAWABIAzADQAXACAMAEQAVAHAHAOQAIASgWAbIgkAmIgWAYQgKAJgMAAIgGAAg");
	this.shape_5.setTransform(368.7,58.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3FB34F").s().p("AAKBMQgqgKgdgLQg2gUAvg1QAmgrArgSQARgHAOAMQAJAJAJATQAcA8ABAkQAAAIgCAFQgFAUgbAAQgNAAgigHg");
	this.shape_6.setTransform(545.1,481.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQAEgNAQgdQAUgmATgaQAhgvAnA8QAgAwAGAvQAEAegxAHQgfAFgTABIgMABQgVAAgSgFg");
	this.shape_7.setTransform(560.1,227.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQADgLARgfQAUgmATgaQAhgvAnA8QAgAxAFAuQAEAegwAIQggAFgSAAIgMABQgVAAgSgFg");
	this.shape_8.setTransform(468.8,248.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3FB34F").s().p("AgKBJQgPgGgOgTIgVghIgUgfQgKgWALgMQAGgGAOgDIAWgEQAcgHAVgCQAXgEANABQAWACAKAMQAMAQgPAhQgIAQgSAcQgJAUgHAIQgKAOgQACIgFAAQgGAAgIgDg");
	this.shape_9.setTransform(468.8,215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3FB34F").s().p("AAXBTQgggJgQgGQgbgKgSgNQgGgEgEgFQgMgRARgUQAHgJAbgXQAjgcAagQQAxgeANBGQAKA3gNAvQgFASgSADIgHABQgLAAgPgEg");
	this.shape_10.setTransform(437.8,229.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3FB34F").s().p("AAKBMQgrgKgcgLQg2gUAvg1QAmgrArgSQARgHAOAMQAJAIAJAUQANAeAGAQQAJAcABAWQAAAIgCAFQgFAUgbAAQgNAAgigHg");
	this.shape_11.setTransform(496.2,192.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQAEgMAQgeQAWgoARgYQAhgvAnA8QAgAwAFAuQAEAggwAGQghAFgRABIgMABQgWAAgRgFg");
	this.shape_12.setTransform(531,242.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3FB34F").s().p("Ag8BSQgIgBgEgDQgSgLAHgaQAEgOAQgcQAUgnATgZQAhgvAnA8QAfAwAGAuQAEAfgxAHQggAFgRABIgMABQgWAAgRgFg");
	this.shape_13.setTransform(526.6,450.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3FB34F").s().p("Ag8BSIgMgEQgSgLAHgaQAEgNAQgdQAUgmATgaQAhgvAnA8QAgAwAFAuQADATgQAJQgKAHgVADQghAFgRABIgMABQgVAAgSgFg");
	this.shape_14.setTransform(501.9,225.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3FB34F").s().p("AAXBTQgggJgQgGQgbgKgSgNQgGgEgEgFQgMgRARgUQAIgKAbgWQAfgaAdgSQAxgeANBHQAKA3gNAuQgFASgSADIgHABQgLAAgPgEg");
	this.shape_15.setTransform(327.4,222.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3FB34F").s().p("AALBMQgrgKgdgLQg2gUAvg1QAmgqAsgTQAcgMAUAtQAcA8ABAkQAAAHgBAGQgGAUgbAAQgNAAghgHg");
	this.shape_16.setTransform(397.4,227.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQAEgMAQgeQAUgmATgaQAhgvAnA8QAgAxAFAuQAEAfgwAGQgfAFgTABIgMABQgVAAgSgFg");
	this.shape_17.setTransform(414.1,252.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3FB34F").s().p("Ag8BSIgMgFQgSgKAHgaQADgMARgeQAXgqAQgWQAhgvAnA8QAgAwAFAuQADATgQAJQgKAHgVADQghAFgRABIgMABQgWAAgRgFg");
	this.shape_18.setTransform(537.9,201.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3FB34F").s().p("Ag8BSIgMgEQgSgLAHgaQAEgNAQgdQAVgnASgZQAhgvAnA8QAfAwAHAuQACATgQAJQgKAHgVADQghAFgRABIgMABQgVAAgSgFg");
	this.shape_19.setTransform(356.6,259.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgcg8gBgkQAAgHACgGQAFgUAbAAQANAAAiAIQAkAIAjAMQA2AVgvA0QgmArgrASQgHADgGAAQgJAAgJgIg");
	this.shape_20.setTransform(495.1,25.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3FB34F").s().p("Ag9AvQgcg8gBgkQAAgHABgGQAGgUAbAAQANAAAhAHQArAKAdALQA2AUgvA1QgmAqgrATQgGADgGAAQgVAAgQgkg");
	this.shape_21.setTransform(446.4,38.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAhgFARgBQAdgCAWAGIAMAFQASAKgHAbQgDALgRAeQgXAqgQAWQgPAVgPAAQgVAAgVgig");
	this.shape_22.setTransform(418.8,122.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAxgHQAegFAUgBQAcgCAWAGQAIABAEADQASALgHAaQgEAOgQAcQgSAkgVAcQgPAVgPAAQgUAAgWgig");
	this.shape_23.setTransform(392.3,27.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3FB34F").s().p("AgWBRQgUgCgNghIgOgyIgKgeQgDgSALgNQAGgIAJgEQAPgGAYADIAlAIIAlAIQAWAIABARQABAIgIAMIgMASQgSAbgLAPQgOATgJAIQgOAOgOAAIgDgBg");
	this.shape_24.setTransform(462.3,184.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3FB34F").s().p("AAGBKIgoggIgagSQgNgMAAgQQAAgKAFgJQAIgOAVgMIAjgRIAhgQQAWgHALAMQAGAHABAOIABAWIAEAyQAAAXgCANQgFAWgNAIQgGAEgIAAQgOAAgUgMg");
	this.shape_25.setTransform(383.6,197.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3FB34F").s().p("AgJBJQgPgGgPgUIgVghIgUgfQgKgVAMgNQAFgGAOgDIAWgDIAygKQAzgHAQATQAMAPgPAhQgIARgSAbQgJAUgGAIQgKAOgRACIgFABQgGAAgHgDg");
	this.shape_26.setTransform(463,145.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3FB34F").s().p("AgWBRQgUgBgNgiIgOgxQgIgVgBgKQgDgRAKgNQAHgJAIgDQAPgHAYADIAlAIIAlAIQAXAIAAARQABAIgIAMIgMASQgPAXgOATQgNATgKAIQgOAOgOAAIgDgBg");
	this.shape_27.setTransform(419.7,198.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3FB34F").s().p("Ag8BSIgMgFQgSgKAHgaQAEgNAQgdQAVgnASgZQAhgvAnA8QAfAwAHAuQACATgQAJQgKAHgVADQghAFgRABIgMABQgVAAgSgFg");
	this.shape_28.setTransform(418.8,159.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3FB34F").s().p("AASBRIglgIQgZgEgMgEQgXgIAAgRQgBgIAHgMIANgSQATgeAKgMQANgSAKgJQAPgPAQACQAUACANAhQAHATAHAfIAJAeQADARgKANQgFAIgKAEQgKAFgPAAIgOgBg");
	this.shape_29.setTransform(453.2,112.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3FB34F").s().p("Ag+BNQgFgGgBgOIgBgWQgEgeAAgUQAAgXACgNQAFgVANgJQARgLAeAUQAQAKAZAUIAaATQANAMAAAQQAAAJgFAKQgIAOgVAMIgjARIghAQQgIADgHAAQgMAAgHgJg");
	this.shape_30.setTransform(387.2,136.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3FB34F").s().p("AhPA+QgMgQAPggIAagtIAQgcQAKgOAQgCQAKAAAJADQAPAGAOAUIAVAgIAUAgQAKAVgLAMQgGAGgNADIgWAEIgyAKQgPACgLAAQgeAAgMgOg");
	this.shape_31.setTransform(348.5,184.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgXgIAAgRQgBgIAIgMIAMgSQASgcALgOQAegqAYACQAUABANAiQAHASAHAfIAJAfQADARgKANQgHAJgIADQgKAFgPAAIgOgBg");
	this.shape_32.setTransform(348.6,133.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAxgIQAfgFATAAQAcgCAWAFQAIADAEACQASALgHAaQgEANgQAdQgTAkgUAcQgPAUgPAAQgUAAgWghg");
	this.shape_33.setTransform(365.7,162.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3FB34F").s().p("AAYBKIgTgMQgdgRgOgKQgTgMgJgKQgPgOABgQQABgUAhgOQASgIAegJIAfgKQARgEANAKQAJAGAEAJQAHAOgCAYIgGAmIgHAlQgHAXgRABIgBAAQgIAAgLgGg");
	this.shape_34.setTransform(525.4,83.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtIAQgcQAKgOAQgCQAKAAAJADQAPAGAOAUIAVAgIAUAgQAKAVgLAMQgGAGgOADIgVAEIgyAKQgRACgMAAIgHAAg");
	this.shape_35.setTransform(355,87.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgNQgMgPAPghIAagsIAQgcQAKgOAQgCQAJgBAKAEQAPAGAOATIAVAhIAUAfQAKAWgLAMQgGAGgNADIgWAEIgyAJQgSADgMAAIgGAAg");
	this.shape_36.setTransform(495,157.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtIAQgcQAKgOAQgCQAKAAAJADQAPAGAOAUIAVAgIAUAgQAKAVgLAMQgGAGgOADIgVAEQgdAGgVAEQgRACgMAAIgHAAg");
	this.shape_37.setTransform(201.6,81.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3FB34F").s().p("AAcBQQgIgBgLgJIgQgOIgoghQgRgQgHgJQgNgSAEgQQAEgTAigJQATgFAggEIAfgGQASgBAMAMQAIAIACAJQAFAPgGAYIgMAkIgMAjQgKAVgQAAIgBAAg");
	this.shape_38.setTransform(547.3,107.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgRQgBgIAIgMIAMgSQAOgVAPgVQANgTAKgIQAPgPAQACQAUACANAhQAHASAHAfIAKAfQADARgLANQgFAIgKAEQgKAFgPAAIgOgBg");
	this.shape_39.setTransform(560.1,319.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgEgeAwgIQAhgFARgBQAdgCAWAGIAMAFQASAKgHAbQgDALgRAeQgVAngSAZQgPAVgPAAQgVAAgVgig");
	this.shape_40.setTransform(523.9,332);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAWgDQAggFASgBQAcgCAWAGIAMAFQASAKgHAbQgDALgRAeQgSAigVAeQgPAVgPAAQgUAAgWgig");
	this.shape_41.setTransform(345.2,39.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAhgFARgBQAdgCAWAGIAMAFQASAKgHAbQgDALgRAeQgXAqgQAWQgPAVgPAAQgVAAgVgig");
	this.shape_42.setTransform(523.4,171.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPghIAagsIAPgcQALgOAQgCQAKgBAIAEQAPAGAPATIAVAhIAUAfQAKAWgMAMQgFAGgOADIgWAEQggAHgRACQgSADgMAAIgGAAg");
	this.shape_43.setTransform(526.9,418.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3FB34F").s().p("AgqBQQgGgFgEgNIgGgVQgJgggEgSQgFgWAAgNQAAgWALgLQAPgOAhANQASAHAdAPIAdAOQAPAJADAQQACAJgEAKQgFAPgSAQIgfAYIgdAWQgLAGgJAAQgIAAgGgFg");
	this.shape_44.setTransform(560.1,173.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3FB34F").s().p("AASBRIglgIQgYgEgNgEQgWgIgBgRQgBgIAIgMIAMgSQAOgVAPgVQANgTAKgIQAPgPAQACQAUACANAhQAHASAHAfIAKAfQADARgLANQgFAIgKAEQgKAFgPAAIgOgBg");
	this.shape_45.setTransform(542.5,137.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAxgIQAfgFATAAQAcgCAWAGQAIABAEADQASALgHAaQgEANgQAdQgTAlgUAbQgPAUgPAAQgUAAgWghg");
	this.shape_46.setTransform(510.4,113.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtIAQgcQAKgOAQgCQAKAAAJADQAPAGAOAUIAVAgIAUAfQAKAWgLAMQgGAGgOADIgVAEQgdAGgVAEQgSACgMAAIgGAAg");
	this.shape_47.setTransform(526.5,376.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtIAPgcQALgOAQgCQAJgBAJAEQAPAGAPAUIAVAgIAUAfQAKAWgMAMQgFAGgOADIgWAEQgcAHgVACQgSADgMAAIgGAAg");
	this.shape_48.setTransform(563.4,383.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3FB34F").s().p("AASBRIglgIQgYgEgNgEQgXgIAAgRQgBgIAIgMIAMgSQAOgVAPgVQANgTAKgIQAPgPAQACQAUACANAhQAHASAHAfIAJAfQADARgKANQgGAIgJAEQgKAFgPAAIgOgBg");
	this.shape_49.setTransform(554.8,28.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgRQgBgIAIgMIAMgSIAdgqQAegqAYACQAUABANAiQAIASAHAfIAJAfQADARgKANQgHAIgJAEQgKAFgPAAIgOgBg");
	this.shape_50.setTransform(560.8,74.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAVgDQAigFAQgBQAdgCAWAGIAMAFQASAKgHAbQgDALgRAeQgVAngSAZQgPAVgPAAQgUAAgWgig");
	this.shape_51.setTransform(546.5,274.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3FB34F").s().p("AAKBMQgrgKgcgLQg2gUAvg1QAmgrArgSQARgHAOAMQAJAIAJAUQAcA8ABAkQAAAIgCAFQgFAUgbAAQgNAAgigHg");
	this.shape_52.setTransform(294,225.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQAEgNAQgdQAUgmATgaQAhgvAnA8QAgAwAGAvQAEAegxAHQgfAFgTABIgMABQgVAAgSgFg");
	this.shape_53.setTransform(233.2,238.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3FB34F").s().p("Ag8BSQgIgBgEgDQgSgLAHgaQAEgOAQgcQAUgmATgaQAhgvAnA8QAfAwAGAuQAEAfgxAHQggAFgRABIgMABQgWAAgRgFg");
	this.shape_54.setTransform(297.4,254.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQAEgNAQgdQATgkAUgcQAhgvAnA8QAgAwAFAvQAEAegwAHQgfAFgTABIgLABQgWAAgSgFg");
	this.shape_55.setTransform(129.4,245.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3FB34F").s().p("AgJBJQgPgGgPgUIgVggIgUgfQgKgWAMgMQAFgGAOgDIAWgEQAcgHAVgCQAXgEANABQAWACAKAMQAMAQgPAhQgIAQgSAcIgPAcQgLAOgQACIgEAAQgHAAgHgDg");
	this.shape_56.setTransform(133.5,222.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQAEgNAQgdQATgkAUgcQAhgvAnA8QAgAwAGAvQADAfgwAGQgfAFgTABIgMABQgVAAgSgFg");
	this.shape_57.setTransform(196.4,245.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3FB34F").s().p("Ag8BSIgMgFQgSgKAHgaQADgMARgeQAXgqAQgWQAhgvAnA8QAgAwAFAuQADATgQAJQgKAHgVADQghAFgRABIgMABQgVAAgSgFg");
	this.shape_58.setTransform(253,203.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3FB34F").s().p("AgJBJQgPgGgPgUIgVggQgOgTgGgMQgKgWAMgMQAFgGAOgDIAWgEQAbgGAWgEQA0gHAQATQAMAQgPAhQgIAQgSAcIgPAcQgLAOgQACIgEAAQgHAAgHgDg");
	this.shape_59.setTransform(38.2,208.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3FB34F").s().p("AhVASQARg2AggjQAVgXAkAhQAZAVAMAOQAUAVAKATQADAIABAFQADAUgZAMQgLAFgiAHQgsAJgdACIgHAAQgyAAAUhAg");
	this.shape_60.setTransform(71.4,181.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3FB34F").s().p("Ag8BSIgMgEQgSgLAHgaQAEgMAQgeQATgkAUgcQAhgvAnA8QAfAwAGAuQADATgQAJQgKAHgWADQggAFgRABIgMABQgWAAgRgFg");
	this.shape_61.setTransform(55.1,247);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3FB34F").s().p("Ag8BTIgMgFQgSgLAHgaQADgLARgfQASgiAVgeQAhgvAnA8QAfAwAGAvQADASgQAKQgKAGgWAEQgfAFgSAAIgNAAQgVAAgRgDg");
	this.shape_62.setTransform(194.5,212.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3FB34F").s().p("Ag8BSIgMgFQgSgKAHgaQADgMARgeQAXgqAQgWQAhgvAnA8QAgAwAFAuQADATgQAJQgKAHgVADQghAFgRABIgMABQgWAAgRgFg");
	this.shape_63.setTransform(19.9,242.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgcg8gBgkIABgNQAGgUAbAAQANAAAiAHQAqAKAdALQA2AUgvA1QgmArgrASQgGADgGAAQgKAAgJgIg");
	this.shape_64.setTransform(54.6,60.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgNgdgGgSQgJgagBgXQAAgIACgFQAFgUAbAAQANAAAiAHQAqAKAdALQA2AUgvA1QgmArgrASQgGADgGAAQgKAAgJgIg");
	this.shape_65.setTransform(88.1,33.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3FB34F").s().p("AgvA1QgfgwgHguQgDgfAwgHQAhgFARgBQAdgCAWAGQAHABAFADQASALgHAaQgEANgQAdQgUAmgTAaQgPAVgPAAQgUAAgWgig");
	this.shape_66.setTransform(57.4,11.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgPAPghIAagtQAKgTAGgJQAKgOAQgCQAKAAAJADQAOAGAPAUQAFAHAQAaIAUAfQAKAVgLAMQgGAGgOADIgWAEQggAHgRADQgRACgMAAIgHAAg");
	this.shape_67.setTransform(27.3,173.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgRQgBgIAIgMIAMgSQAPgXAOgTQAOgTAJgIQAQgPAPACQAUACANAhQAHATAHAfIAKAeQADASgLANQgFAGgKAGQgKAEgOAAIgPgBg");
	this.shape_68.setTransform(126.6,185.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3FB34F").s().p("AASBRQgIgBgdgHIglgIQgWgIgBgRQgBgIAIgMIAMgSQAPgXAOgTQANgTAKgIQAPgPAQACQAUABANAiQAHASAHAfIAJAfQADARgKANQgHAJgIADQgKAFgOAAIgPgBg");
	this.shape_69.setTransform(23.9,133.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3FB34F").s().p("AhPA+QgNgQAQggIAagtQAJgTAGgJQAKgOARgCQAJAAAJADQAPAGAPAUIAVAgIAUAgQAKAVgMAMQgFAGgOADIgWAEIgyAKQgOACgLAAQgeAAgMgOg");
	this.shape_70.setTransform(20.4,87.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtIAPgcQALgOAQgCQAKAAAIADQAPAGAPAUIAVAgIAUAgQAKAVgMAMQgFAGgOADIgWAEQgjAIgOACQgRACgMAAIgHAAg");
	this.shape_71.setTransform(171.4,60.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPghIAagsIAQgcQAKgOAQgCQAJgBAKAEQAPAGAOATIAVAhIAUAfQAKAWgLAMQgGAGgOADIgVAEIgyAJQgSADgMAAIgGAAg");
	this.shape_72.setTransform(235.9,22.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgXgIAAgQQgBgJAIgMIAMgSQAPgWAOgUQAOgTAJgIQAQgPAPACQAUACANAhQAHATAHAfIAJAeQADASgKANQgHAIgIAEQgKAEgOAAIgPgBg");
	this.shape_73.setTransform(156.4,94.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgQQgBgJAIgMIAMgSIAdgqQANgSAKgJQAQgPAPACQAUACANAhQAHATAIAfIAJAeQADASgLANQgGAIgJAEQgKAEgOAAIgPgBg");
	this.shape_74.setTransform(249.7,49.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3FB34F").s().p("AASBRQgIgBgdgHIglgIQgWgIgBgRQgBgIAIgMIAMgSQAPgXAOgTQANgTAKgIQAQgPAPACQAUABANAiQAHASAHAfIAKAfQADARgLANQgGAIgJAEQgKAFgPAAIgOgBg");
	this.shape_75.setTransform(206,44.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3FB34F").s().p("Ag9AvQgcg8gBgkQAAgHABgGQAGgUAbAAQANAAAhAHQArAKAdALQA2AUgvA1QgmArgsASQgGADgFAAQgVAAgQgkg");
	this.shape_76.setTransform(129.4,62);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3FB34F").s().p("Ag9AvQgcg8gBgkQAAgHABgGQAGgUAbAAQANAAAhAIQAlAIAjAMQA2AVgvA0QgmArgrASQgGADgGAAQgVAAgQgkg");
	this.shape_77.setTransform(168.8,25.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3FB34F").s().p("AgvA1QgfgwgHguQgCgTAPgJQALgHAVgDQAhgFARgBQAdgCAWAGIAMAFQASAKgHAbQgEAMgQAdQgVAngSAZQgPAVgPAAQgUAAgWgig");
	this.shape_78.setTransform(240.3,80.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAWgDQAggFASgBQAcgCAWAGQAHABAFAEQASAKgHAbQgEAMgQAdQgVAngSAZQgPAVgPAAQgUAAgWgig");
	this.shape_79.setTransform(25.3,40.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3FB34F").s().p("AhPA+QgMgPAPghIAagtIAQgcQAKgOAQgBQAJgCAKAEQAPAGAOAUIAVAhIAUAfQAKAVgLAMQgGAGgNADIgWAEIgyAKQgPACgLAAQgeAAgMgOg");
	this.shape_80.setTransform(253.3,170.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3FB34F").s().p("AgqBQQgGgFgEgNIgGgWIgNgxQgFgXAAgMQAAgWALgLQAPgOAhANQASAHAdAPIAdAOQAPAJADAQQACAKgDAJQgFAPgTAQQgGAGgZASIgdAWQgLAGgJAAQgIAAgGgFg");
	this.shape_81.setTransform(223.5,191.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAxgHQAegFATgBQAcgCAXAGQAHABAFADQASALgIAaQgDAOgQAcQgVAngTAZQgOAVgPAAQgUAAgWgig");
	this.shape_82.setTransform(284.9,192.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAxgHQAegFAUgBQAcgCAWAGQAIACAEACQASALgHAaQgEAMgQAeQgTAkgUAcQgPAVgPAAQgUAAgWgig");
	this.shape_83.setTransform(128.7,28.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3FB34F").s().p("Ag9BNQgGgGgBgOIgBgWIgEgyQAAgXACgNQAFgVANgJQARgLAfAUIAoAeIAbATQAMAMAAAQQAAAJgFAKQgIAOgVAMQgGAEgdANIghAQQgIADgHAAQgLAAgHgJg");
	this.shape_84.setTransform(309.7,99.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3FB34F").s().p("Ag+BNQgFgGgBgOIgBgWIgEgyQAAgXACgNQAFgWANgIQARgKAeASQAQALAZAUIAaATQANAMAAAQQAAALgFAIQgIAOgVAMIgjARIghAQQgIADgHAAQgMAAgHgJg");
	this.shape_85.setTransform(300,42.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgNQgMgPAPghIAagsIAQgcQAKgOAQgCQAJgBAKAEQAPAGAOATIAVAhIAUAfQAKAWgLAMQgGAGgNADIgWAEIgyAJQgSADgMAAIgGAAg");
	this.shape_86.setTransform(194.4,151.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgNQgMgPAPghIAagsIAQgcQAKgOAQgCQAJgBAKAEQAOAGAPATIAVAhIAUAfQAJAWgLAMQgFAGgOADIgWAEQgeAGgTADQgSADgMAAIgGAAg");
	this.shape_87.setTransform(280.2,149.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggQAIgRASgcIAPgcQALgOAQgCQAJgBAJAEQAPAGAPAUIAVAgIAUAfQAKAWgMAMQgFAGgOADIgWAEQgeAHgTACQgSADgMAAIgGAAg");
	this.shape_88.setTransform(362.7,14.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgQQgBgJAIgMIAMgSIAdgqQAegqAYACQAUACANAhQAIATAHAfIAJAeQADASgKANQgHAIgJAEQgKAEgOAAIgPgBg");
	this.shape_89.setTransform(208.9,113.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3FB34F").s().p("AASBQIglgHIglgIQgXgIAAgRQgBgIAIgMIAMgSQASgcALgOQAOgTAJgJQAQgOAPACQAUABANAiQAHASAHAfIAJAfQADARgKANQgHAJgIADQgKAEgNAAIgQgBg");
	this.shape_90.setTransform(255.1,113.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3FB34F").s().p("AASBRQgJgBgcgHIglgIQgWgIgBgRQgBgIAIgMIAMgSIAdgqQAegqAYACQAUABANAiQAHASAHAfIAJAfQADARgKANQgGAIgJAEQgKAFgPAAIgOgBg");
	this.shape_91.setTransform(284.6,68.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3FB34F").s().p("AASBRIglgIQgYgEgNgEQgXgIAAgRQgBgIAIgMIAMgSQAOgVAPgVQAOgTAJgIQAQgPAPACQAUACANAhQAHATAHAfIAJAeQADARgKANQgGAIgJAEQgKAFgPAAIgOgBg");
	this.shape_92.setTransform(326,64.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgNgegGgRQgJgagBgXQAAgHABgGQAFgUAcAAQANAAAhAIQAlAIAjAMQA2AVgwA0QgmArgrASQgGADgGAAQgKAAgIgIg");
	this.shape_93.setTransform(323.2,8.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgEgfAwgHQAigFAQgBQAdgCAWAGQAHABAFADQASALgHAaQgEAMgQAeQgWAogRAYQgPAVgPAAQgUAAgWgig");
	this.shape_94.setTransform(297.3,128.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAxgHQAegFAUgBQAcgCAWAGQAHABAGADQARALgHAaQgEAMgQAeQgUAmgTAaQgPAVgPAAQgUAAgWgig");
	this.shape_95.setTransform(275.9,28.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3FB34F").s().p("Ag9BOQgGgGgBgOIgBgXIgEgyQAAgXACgNQAFgVANgJQARgLAfATIAoAgIAaATQANALAAAQQAAALgFAIQgIAOgVAMIgjARIghAQQgIADgHAAQgLAAgHgIg");
	this.shape_96.setTransform(13.8,319.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3FB34F").s().p("AAgBQQgIAAgLgIIgQgOQgYgSgRgOQgSgPgIgKQgNgQADgQQADgTAjgLQASgGAggFIAfgHQARgBAMALQAIAGADAKQAFAPgEAYIgLAkIgKAlQgKAVgQAAIgBAAg");
	this.shape_97.setTransform(176.1,369.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3FB34F").s().p("AgfBQQgHgEgFgNIgIgVQgMgdgGgSQgRgxAQgTQANgPAjAIQATAFAdANIAeAKQAQAIAFAPQADAKgCAKQgDAOgRASIgcAbIgcAaQgKAIgKAAQgHAAgGgEg");
	this.shape_98.setTransform(149.9,387.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgNQgMgPAPghIAagsQAKgUAGgIQAKgOAQgCQAJgBAKAEQAPAGAOATIAVAhIAUAfQAKAWgLAMQgGAGgOADIgVAEIgyAJQgSADgMAAIgGAAg");
	this.shape_99.setTransform(22.4,282.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtQAJgTAGgJQALgOAQgCQAIgBAKAEQAPAGAPAUIAVAgIAUAfQAKAWgMAMQgFAGgOADIgWAEQgeAHgUACQgRADgMAAIgGAAg");
	this.shape_100.setTransform(62.4,383.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgXgIAAgRQgBgIAIgMIAMgSQASgcALgOQAegqAYACQAUABANAiQAHASAHAfIAJAfQADARgKANQgGAIgJAEQgKAFgPAAIgOgBg");
	this.shape_101.setTransform(121.5,361.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3FB34F").s().p("AAKBMQgqgKgdgLQg2gUAvg1QAmgrArgSQARgHAOAMQAJAJAJATQANAfAGAQQAJAbABAWQAAAIgCAFQgFAUgbAAQgNAAgigHg");
	this.shape_102.setTransform(303,554.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3FB34F").s().p("AgMBLQgJgJgUgcQgYgkgOgcQgZg0BHgHQA4gFAtARQARAHABASQABANgHAUQgKAdgIARQgNAagPARQgEAFgGAEQgGAEgHAAQgLAAgMgMg");
	this.shape_103.setTransform(268.6,553.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3FB34F").s().p("Ag8BSQgHgBgFgDQgSgLAHgaQAEgNAQgdQATgkAUgcQAhgvAnA8QAgAwAGAvQAEAegxAIQggAFgSAAIgMABQgVAAgSgFg");
	this.shape_104.setTransform(339.8,524.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3FB34F").s().p("AAgBJIgzgDQg0gFgLgWQgIgSAWgbIAkgmQAOgRAIgHQAMgLAQACQAKABAJAGQANAJAJAXIANAjIAMAkQAFAYgOAJQgHAEgOAAIgWgBg");
	this.shape_105.setTransform(334,553.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3FB34F").s().p("AAXBTQhAgQgdgWQgHgEgDgFQgMgQARgVQAIgKAagWQAlgdAYgOQAxgeANBGQAKA3gNAuQgGAVgaAAQgKAAgOgDg");
	this.shape_106.setTransform(22.7,573.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3FB34F").s().p("AgJBLQgKgIgTgcQgcgogMgXQgbg0BHgIQA4gGAtAQQASAGABASQACAMgHAVQgJAdgIASQgLAagPARQgGAHgEACQgHAFgHAAQgLAAgMgMg");
	this.shape_107.setTransform(238.2,538.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3FB34F").s().p("Ag8BSIgMgFQgSgKAHgaQAEgNAQgdQAVgnASgZQAhgvAnA8QAfAvAGAvQADATgQAJQgKAHgVADQghAFgRABIgMABQgVAAgSgFg");
	this.shape_108.setTransform(276.9,511);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3FB34F").s().p("Ag8BSQgIgBgEgDQgSgLAHgaQAEgNAQgdQATglAUgbQAhgvAnA8QAfAwAGAvQAEAegxAIQgfAFgSAAIgMABQgWAAgRgFg");
	this.shape_109.setTransform(208.9,519.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3FB34F").s().p("AARBWQg1gRgjggQgOgNAGgRQAEgLAOgQQAtgzAfgPQAGgDAHgBQAUgEALAZQAFALAHAjQAJAnACAiQACAqgjAAQgNAAgTgGg");
	this.shape_110.setTransform(192.5,471.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgOgggFgPQgJgbgBgWQAAgIACgFQAFgUAbAAQANAAAiAHQAqAKAdALQA2AUgvA1QgmArgrASQgGADgGAAQgKAAgJgIg");
	this.shape_111.setTransform(128.3,332.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3FB34F").s().p("AgvA1QgggxgFguQgEgeAwgIQAggFASAAQAdgCAWAGQAHABAFADQASALgHAaQgDALgRAfQgVAmgSAaQgPAUgPAAQgVAAgVghg");
	this.shape_112.setTransform(90.7,273.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAWgDQAggFASgBQAcgCAWAGQAIACAEADQASAKgHAbQgDALgRAeQgSAigVAeQgPAVgPAAQgUAAgWgig");
	this.shape_113.setTransform(184.3,656.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgEgfAwgHQAigFAQgBQAdgCAWAGQAHABAFADQASALgHAaQgEAMgQAeQgWAogRAYQgPAVgPAAQgUAAgWgig");
	this.shape_114.setTransform(221.7,648.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3FB34F").s().p("AARBWQg2gRgjghQgWgVAhgjQAWgZANgMQAVgUAUgKIAMgEQAVgDALAZQAGAMAGAhQAIApACAhQADAqgjAAQgOAAgSgGg");
	this.shape_115.setTransform(24,362.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3FB34F").s().p("AhYAbQAFg4AZgpQAJgQATACQAMABASALQA7AhAVAcQAFAGACAFQAIATgWAQQgLAIgfANQgmARggAJQgKADgIAAQgkAAAFg6g");
	this.shape_116.setTransform(79.8,350.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3FB34F").s().p("AhYAbQAFg4AZgpQAQgbAqAZQAdAQAOALQAYAQAOASQADAEADAHQAIASgWARQgLAHgfAOQgpASgdAIQgKADgIAAQgkAAAFg6g");
	this.shape_117.setTransform(90,313.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAxgIQAfgFATAAQAcgCAWAGQAIABAEADQASALgHAaQgEANgQAdQgTAkgUAcQgPAUgPAAQgUAAgWghg");
	this.shape_118.setTransform(117.4,293.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3FB34F").s().p("AAGBKIgpggQgSgMgIgHQgMgLAAgQQAAgKAFgJQAIgOAVgMIAjgRIAhgQQAWgIALANQAGAGABAOIABAXIAEAyQAAAXgCANQgFAVgNAJQgGAEgIAAQgOAAgUgMg");
	this.shape_119.setTransform(23.4,527.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3FB34F").s().p("AhPA+QgMgQAPggIAagtQAKgTAGgJQAKgOAQgCQAKAAAJADQAPAGAOAUIAVAgIAUAgQAKAVgLAMQgGAGgOADIgVAEIgyAKQgPACgLAAQgeAAgMgOg");
	this.shape_120.setTransform(22.8,481.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgRQgBgIAIgMIAMgSQAUgfAJgLQAfgqAXACQAUACANAhQAIASAHAfIAJAfQADARgLANQgFAIgKAEQgKAFgPAAIgOgBg");
	this.shape_121.setTransform(16.2,446.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAWgDQAggFASgBQAcgCAWAGQAFABAHADQASALgHAaQgEAMgQAeQgUAngTAZQgPAVgPAAQgUAAgWgig");
	this.shape_122.setTransform(15,664.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3FB34F").s().p("Ag9BOQgGgHgBgNIgBgXIgEgyQAAgXACgNQAFgVANgJQARgLAeATQAQALAZAVIAaATQANALAAAQQAAALgFAIQgIAOgVAMIgjARIghAQQgIADgHAAQgLAAgHgIg");
	this.shape_123.setTransform(201.6,395.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3FB34F").s().p("Ag9BOQgGgGgBgPIgBgWIgEgyQAAgXACgNQAFgVANgJQARgLAfATIAoAgIAbATQAMALAAAQQgBALgEAIQgIAOgVAMIgjARQgUAMgNAEQgIADgHAAQgLAAgHgIg");
	this.shape_124.setTransform(203,340.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtQAKgTAGgJQAKgOAQgCQAKAAAJADQAPAGAOAUIAVAgIAUAfQAKAWgLAMQgGAGgNADIgWAEQgdAGgVAEQgSACgLAAIgHAAg");
	this.shape_125.setTransform(24,402.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtQAKgTAGgJQAKgOAQgCQAIgBALAEQAOAGAPAUIAVAgIAUAfQAKAWgMAMQgFAGgOADIgWAEQgcAHgVACQgSADgMAAIgGAAg");
	this.shape_126.setTransform(103.1,383.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3FB34F").s().p("AASBRQgIgBgdgHIglgIQgWgIgBgRQgBgIAIgMIAMgSQAPgXAOgTQANgTAKgIQAPgPAQACQAUABANAiQAHASAHAfIAJAfQADARgKANQgGAIgKAEQgJAFgOAAIgPgBg");
	this.shape_127.setTransform(279.7,352.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3FB34F").s().p("AgRBKQgKgBgIgGQgNgJgKgXIgNgjIgMgkQgEgXAOgKQAHgEANAAIAWABIAzADQA0AFALAWQAJASgXAbQgMAQgYAWIgVAYQgMAJgNAAIgEAAg");
	this.shape_128.setTransform(59.6,290.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3FB34F").s().p("AhQAlQgLg3ANguQAFgSASgDQAMgCAVAFQAgAJAQAGQAbAKATANQAFAEAEAFQAMARgRAUQgIAKgaAWQgjAcgZAQQgPAJgMAAQgbAAgIgyg");
	this.shape_129.setTransform(274.2,277.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3FB34F").s().p("AAPBPQgLgGgYgYQghgfgTgXQglgsBEgXQA2gRAvAGQASACAGASQADALgCAWQgDAfgEATQgGAcgLAUQgEAHgEADQgHAIgKAAQgJAAgMgHg");
	this.shape_130.setTransform(181,287.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgEgeAxgIQAggFASgBQAcgCAWAGQAIACAEADQASAKgHAbQgEALgQAeQgTAlgUAbQgPAVgPAAQgUAAgWgig");
	this.shape_131.setTransform(277,387.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAhgFARgBQAdgCAWAGIAMAEQASALgHAaQgEANgQAdQgVAngSAZQgPAVgPAAQgVAAgVgig");
	this.shape_132.setTransform(48.1,331.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAWgDQAggFASgBQAcgCAWAGQAHABAFAEQASAKgHAbQgDALgRAeQgVAogSAYQgPAVgPAAQgUAAgWgig");
	this.shape_133.setTransform(206.4,436.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3FB34F").s().p("AgvBMQgVgCgKgMQgNgQAPghIAagsQAKgTAGgJQAKgOAQgCQAJgBAKAEQAOAGAPATIAVAhIAUAfQAKAWgMAMQgFAGgOADIgWAEQghAHgQACQgSADgMAAIgGAAg");
	this.shape_134.setTransform(280,473.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3FB34F").s().p("AgqBQQgGgFgEgOIgGgVIgOgxQgLgyASgSQAOgOAiANQASAGAcAQIAdAOQAPAIADARQACAKgDAJQgFAOgSARIgfAYIgdAWQgLAGgJAAQgIAAgGgFg");
	this.shape_135.setTransform(250.2,494.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3FB34F").s().p("AASBQIglgHIglgIQgWgIgBgRQgBgIAIgMIAMgSIAdgqQANgTAKgJQAQgOAPACQAUABANAiQAHASAIAfIAJAfQADARgLANQgGAIgJAEQgKAEgNAAIgQgBg");
	this.shape_136.setTransform(250.1,452.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAhgFARgBQAdgCAWAGQAGABAGAEQASAKgHAbQgDALgRAeQgXAqgQAWQgPAVgPAAQgVAAgVgig");
	this.shape_137.setTransform(136.4,672.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3FB34F").s().p("AgvA1QgfgwgHguQgCgTAPgJQALgHAVgDQAhgFARgBQAdgCAWAGIAMAEQASALgHAaQgEANgQAdQgUAmgTAaQgPAVgPAAQgUAAgWgig");
	this.shape_138.setTransform(150.7,304.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3FB34F").s().p("AATBXQg3gPgkgfQgNgMAFgSQADgLANgQQAVgaANgMQAVgVATgKQAGgEAGgBQAUgEAMAZQAGAKAIAiQAKAnAEAiQAEAsgmAAQgMAAgRgFg");
	this.shape_139.setTransform(239.5,268.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3FB34F").s().p("Ag9BOQgGgHgBgOIgBgWIgEgyQAAgXACgNQAFgWANgIQARgLAeATQAQALAZAVIAaASQANAMAAAQQAAALgFAIQgIAOgVAMIgjARQgUAMgNAEQgIADgHAAQgLAAgHgIg");
	this.shape_140.setTransform(334,404);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtQAKgTAGgJQAKgOAQgCQAKAAAJADQAOAGAPAUIAVAgIAUAfQAJAWgLAMQgFAGgOADIgWAEQgaAGgXAEQgSACgLAAIgHAAg");
	this.shape_141.setTransform(279.7,431.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtQAKgTAGgJQAKgOAQgCQAIgBALAEQAPAGAOAUIAVAgIAUAfQAKAWgLAMQgGAGgOADIgVAEQgeAHgUACQgSADgMAAIgGAAg");
	this.shape_142.setTransform(323.1,468.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgQQgBgJAIgLIAMgTIAdgqQANgSAKgJQAQgPAPACQAUACANAhQAHATAIAfIAJAeQADASgLANQgGAIgJAEQgKAEgOAAIgPgBg");
	this.shape_143.setTransform(250.1,415.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgWgIgBgQQgBgJAIgMIAMgSQAPgWAOgUQAOgTAJgIQAQgPAPACQAUACANAhQAHATAHAfIAKAeQADASgLANQgGAIgJAEQgKAEgOAAIgPgBg");
	this.shape_144.setTransform(302.6,406.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgXgIAAgQQgBgJAHgMIANgSIAdgqQAegqAYACQAUACANAhQAHATAHAfIAJAeQADASgKANQgGAIgJAEQgKAEgOAAIgPgBg");
	this.shape_145.setTransform(323.2,367.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgXgIAAgQQgBgJAIgMIAMgSQAUgeAJgMQAOgTAJgIQAQgPAPACQAUACANAhQAHATAHAfIAJAeQADASgKANQgHAIgIAEQgKAEgOAAIgPgBg");
	this.shape_146.setTransform(348.4,351.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgcg8gBgkQAAgHACgGQAFgUAbAAQANAAAiAIQAlAIAiAMQA2AVgvA0QgmArgrASQgHADgGAAQgJAAgJgIg");
	this.shape_147.setTransform(336.4,319.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgEgfAxgHQAggFASgBQAcgCAWAGQAGABAGADQASALgHAaQgEAMgQAeQgTAkgUAcQgPAVgPAAQgUAAgWgig");
	this.shape_148.setTransform(323.1,294.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3FB34F").s().p("AgvA1QgfgwgHguQgCgTAPgJQALgHAVgDQAhgFARgBQAdgCAWAGIAMAFQASAKgHAbQgEAMgQAdQgVAngSAZQgPAVgPAAQgUAAgWgig");
	this.shape_149.setTransform(351.1,439.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAhgFARgBQAdgCAWAGIAMAEQASALgHAaQgDAMgRAeQgXAqgQAWQgPAVgPAAQgVAAgVgig");
	this.shape_150.setTransform(302.6,331.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3FB34F").s().p("AgvA1QgggwgFgvQgEgeAwgIQAggFASAAQAdgCAWAGQAHABAFADQASALgHAaQgDALgRAfQgUAmgTAaQgPAVgPAAQgVAAgVgig");
	this.shape_151.setTransform(363.9,311);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3FB34F").s().p("AgvA1QgggxgFguQgEgeAwgIQAggFASAAQAdgCAWAGQAHABAFADQASALgHAaQgEAMgQAeQgUAmgTAaQgPAVgPAAQgVAAgVgig");
	this.shape_152.setTransform(226.9,702.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3FB34F").s().p("AAWBQIgwgSQgVgGgJgEQgPgIgFgQQgDgLACgJQAEgOARgSIAcgaIAcgZQATgOAOAJQAHAFAFANIAIAVIASAvQAHAWABANQACAWgLAMQgIAJgQAAQgKAAgOgEg");
	this.shape_153.setTransform(257.3,586.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3FB34F").s().p("AgvBMQgWgCgKgMQgMgQAPggIAagtQAJgTAGgJQALgOAQgCQAJAAAJADQAPAGAPAUIAVAgIAUAfQAKAWgMAMQgFAGgOADIgWAEQgdAHgVADQgRACgMAAIgGAAg");
	this.shape_154.setTransform(240.3,611.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3FB34F").s().p("AhQAlQgKg3ANguQAIgeAvAMQBAAQAdAWQAHAEADAFQAMAQgRAVQgIAKgaAWQgkAcgYAQQgPAJgMAAQgbAAgIgyg");
	this.shape_155.setTransform(290.9,592.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgcg8gBgkIABgNQAGgUAbAAQANAAAiAHQAqAKAdALQA2AUgvA1QgmArgrASQgGADgGAAQgKAAgJgIg");
	this.shape_156.setTransform(208.9,604.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAVgDQAigFAQgBQAdgCAWAGIAMAFQASAKgHAbQgDALgRAeQgVAngSAZQgPAVgPAAQgUAAgWgig");
	this.shape_157.setTransform(46.7,693.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAigFAQgBQAdgCAWAGIAMAEQASALgHAaQgEAMgQAeQgWAogRAYQgPAVgPAAQgVAAgVgig");
	this.shape_158.setTransform(244.1,675.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGgvQgEgeAwgHQAfgFATgBQAdgCAWAGQAHABAFADQASALgHAaQgEAMgQAeQgWAogRAYQgPAVgPAAQgUAAgWgig");
	this.shape_159.setTransform(8.6,617.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAhgFARgBQAdgCAWAGQAGABAGAEQASAKgHAbQgDALgRAeQgXAqgQAWQgPAVgPAAQgVAAgVgig");
	this.shape_160.setTransform(103.1,702.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3FB34F").s().p("AAHBNQg8gdgYgbQgEgDgEgHQgIgSAUgSQAKgIAegQQAkgUAggLQA2gUgBBHQgBA5gWAqQgHAQgSAAQgNAAgUgJg");
	this.shape_161.setTransform(153.8,693.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgEgfAwgHQAhgFARgBQAdgCAWAGIAMAEQASALgHAaQgEAMgQAeQgWAogRAYQgPAVgPAAQgVAAgVgig");
	this.shape_162.setTransform(233.2,573.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3FB34F").s().p("Ag9BOQgGgHgBgNIgBgXIgEgyQAAgXACgNQAFgVANgJQARgLAeATQAQALAZAVIAaATQANALAAAQQAAALgFAIQgIAOgVAMIgjARIghAQQgIADgHAAQgLAAgHgIg");
	this.shape_163.setTransform(334,693.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgXgIAAgRQgBgIAHgMIANgSIAdgqQAegqAYACQAUABANAiQAHASAHAfIAJAfQADARgKANQgGAIgJAEQgKAFgPAAIgOgBg");
	this.shape_164.setTransform(323.2,657.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3FB34F").s().p("AASBRIglgIIglgIQgXgIAAgRQgBgIAIgMIAMgSQASgcALgOQANgTAKgIQAPgPAQACQAUABANAiQAHASAHAfIAJAfQADARgKANQgHAJgIADQgKAFgPAAIgOgBg");
	this.shape_165.setTransform(348.4,641);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3FB34F").s().p("AgrBLQgJgIgJgUQgNgegGgRQgJgagBgXQAAgIACgFQAFgUAbAAQANAAAiAHQArAKAcALQA2AUgvA1QgmArgrASQgHADgFAAQgKAAgJgIg");
	this.shape_166.setTransform(336.4,609.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAWgDQAggFASgBQAcgCAWAGIAMAFQASAKgHAbQgDALgRAeQgSAigVAeQgPAVgPAAQgUAAgWgig");
	this.shape_167.setTransform(323.1,583.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3FB34F").s().p("AgvA1QgfgwgGguQgDgTAQgJQAKgHAWgDQAggFASgBQAcgCAWAGQAFABAHADQASALgHAaQgEAOgQAcQgUAmgTAaQgPAVgPAAQgUAAgWgig");
	this.shape_168.setTransform(271.6,641.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3FB34F").s().p("AgvA1QgggwgFguQgDgTAQgJQAKgHAVgDQAhgFARgBQAdgCAWAGIAMAEQASALgHAaQgEAMgQAeQgWAogRAYQgPAVgPAAQgVAAgVgig");
	this.shape_169.setTransform(363.9,600.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0.1,571.9,711), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJlJ4Qifgfi0i+QiVidg7iHIAEA0QACA/gEA4QgPCzhPAnQgwAYhogfQhNgWhEglQiehYhkhKIhEgzQg4grgCgIQgFgQBJAAQBIABAQALQgZgUg2gSQg0gRgpgDQgSgBALgOQASgWAigQQAjgQAXADQgogYg8gEQgLgBgCgFQgCgFAIgIQA2g2CFAhQB/AgA7BHQgSjrAdiUQAqjWCOhOQBkg3B6ANQCCAOBTBUQApAqA1BPQAvBFAmBGQArBNA7CEQBPCwAuCPQB6F+ifAAQgPAAgRgEg");
	mask.setTransform(73.5,346.1);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#1F603F","rgba(31,96,63,0.925)","rgba(31,96,63,0)"],[0,0,1],0,0,0,0,0,87.4).s().p("ArOHxQigg9hfhcQhjhggOhzQgOh1BJhzQBGhwCNhhQEqjPHCg2QHBg3FTCAQCgA9BeBcQBjBgAOB0QAOB0hJBzQhGBxiMBhQkqDOnCA2QiGARh9AAQkkAAjthag");
	this.shape.setTransform(434.5,58.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3BB6A1").s().p("AJlJ4Qifgfi0i+QiVidg7iHIAEA0QACA/gEA4QgPCzhPAnQgwAYhogfQhNgWhEglQiehYhkhKIhEgzQg4grgCgIQgFgQBJAAQBIABAQALQgZgUg2gSQg0gRgpgDQgSgBALgOQASgWAigQQAjgQAXADQgogYg8gEQgLgBgCgFQgCgFAIgIQA2g2CFAhQB/AgA7BHQgSjrAdiUQAqjWCOhOQBkg3B6ANQCCAOBTBUQApAqA1BPQAvBFAmBGQArBNA7CEQBPCwAuCPQB6F+ifAAQgPAAgRgEg");
	this.shape_1.setTransform(73.5,346.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,282.6,147.1,127.1), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgTSAkXQkSjohDmkQg2lRBTmaQAojKBFi9QBIjFByjZQAxhdBvjGQBfiqBaivQDLmhBbisQCVkcCpjIQBkh3CakIQCbkMBgh0QA4hFAtgpQA+g4A9gZQAugSBRgzQBSg0AtgTQAkgOAeAyQAcAugBAzQgDCnAqFHQArFcBNGDQDBPKEGJAQBdDNA0ENQAzEBAFESQAFERgpDxQgqD5hUCrQiREnmUB6QiLApiuAXIjqAXQjKAVi1AAQr8AAmqlpg");
	mask.setTransform(179.7,413.7);

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60C4B4").s().p("Ag4FwQj0gbiziBQjFiNhQjrQgUg8hZhCQhfg+gWgXQCDAzCeAcQCAAXCpAMQE7AWFbgOQFlgPFog4QgxEJiWCXQiYCcjnBKQimA2ipAAQg+AAg8gIg");
	this.shape.setTransform(103.7,623.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60C4B4").s().p("Am7DiQi9gThLgNQhugTiSguQgWgHAOiNQANiJALgPQBTgYBogOQBKgKBygHQE3gUEFAKQDQAIEZAkQCjAUFFAuQACBcgRDNQikAbjJAOQh9AJjyALQjFAIiLAAQi+AAiTgOg");
	this.shape_1.setTransform(106.7,567.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60C4B4").s().p("AumjXQAsgbBTgbQCkg3EJgaQFGghGNAXQBvAGC3ABQChAFCCAeQAQBHAIAsQAUB3AVCrQASCiAJB5QkKg+lpgkQmegplWAQQjOAJjHAoQi3AkhIAng");
	this.shape_2.setTransform(102.2,513.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60C4B4").s().p("AsxBLQArjDAahSQBegnA9gUQBRgaBdgSQCBgXBZgLQBugNB1gEQCwgFCdAOQCWANClAiQA+B9A9C9QAgBjAwC0Qh1gYi0gFQjHgChkgGQl0gXlBAdQk/AciSBEQAXh2Alilg");
	this.shape_3.setTransform(106.6,446.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60C4B4").s().p("AoxCPQBZjSByjEQBpgfCAgQQCMgSCRAEQBrADAqADQAwADA0AHQCLFXBQD7QgngMhbgNQhKgMhNgIQiogSi8AEQltAHj5BbIgBABQgPAABOi3g");
	this.shape_4.setTransform(109.8,382.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60C4B4").s().p("AiUhTQCBirBcAAQBYABBTCKQBMB9AsC8IiEgJQhOgDhKABQkHAGi0A+QCTj6BEhYg");
	this.shape_5.setTransform(112.7,325.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#1F603F","rgba(31,96,63,0.98)","rgba(31,96,63,0)"],[0,0.008,1],-1.8,33.7,0,-1.8,33.7,163.1).s().p("Aq6bjQjxhginjiQihjahEk2QhEk1AklgQAjlsCPlmQCNlnDgkjQDXkYEGizQEGizEJgxQEVgzDxBgQDyBgCnDiQCgDaBEE2QBEE1giFgQglFsiOFnQiOFmjgEjQjXEYkGCzQkFCzkJAxQhgAShcAAQisAAifg/g");
	this.shape_6.setTransform(142.1,134.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#1F603F","rgba(31,96,63,0.98)","rgba(31,96,63,0)"],[0,0.008,1],0,0,0,0,0,195.9).s().p("AuKXSQlRg7jzikQj9iph0kCQh1kCAoktQAmkiCxkjQCykkEhj3QEskAF6irQF5iqGFg5QF5g3FQA8QFQA6D0CkQD9CpB0ECQB1EBgoEuQgmEiixEkQiyEjkhD4QksD/l6CrQl6CrmEA4Qi1AaisAAQi6AAiugeg");
	this.shape_7.setTransform(257.6,659);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1CBAA1").s().p("EgTSAkXQkSjohDmkQg2lRBTmaQAojKBFi9QBIjFByjZQAxhdBvjGQBfiqBaivQDLmhBbisQCVkcCpjIQBkh3CakIQCbkMBgh0QA4hFAtgpQA+g4A9gZQAugSBRgzQBSg0AtgTQAkgOAeAyQAcAugBAzQgDCnAqFHQArFcBNGDQDBPKEGJAQBdDNA0ENQAzEBAFESQAFERgpDxQgqD5hUCrQiREnmUB6QiLApiuAXIjqAXQjKAVi1AAQr8AAmqlpg");
	this.shape_8.setTransform(179.7,413.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(20,144.9,319.5,537.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiVDuQh1g/hth0QglgogNgXQgHgMgJgFQgIgEgGAEIgOANQgIgOgCgVQgEgeAMgXQAJgRAUgKQATgKAPAEQgOgLgEgJQgDgFgBgMQgBgUARgWQAUgcAhACQgEgNAIgRQALgYAkgHQAqgIAjAfQATAQAOARIAcAmQAlA0AYAaQAcAdAnAbQAeAWAjAOQARAHAMACQAugYAggfQAWgWAkgwQAggrApgWQArgXAxADQAwADAhAcQAiAeAKAzQAKAvgJAxQgJAugaAsQg6BhhkBAQhnBDhqADIgLAAQhkAAhxg7g");
	mask_1.setTransform(48.1,29.7);

	// Слой 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#479D85").s().p("AiVDuQh1g/hth0QglgogNgXQgHgMgJgFQgIgEgGAEIgOANQgIgOgCgVQgEgeAMgXQAJgRAUgKQATgKAPAEQgOgLgEgJQgDgFgBgMQgBgUARgWQAUgcAhACQgEgNAIgRQALgYAkgHQAqgIAjAfQATAQAOARIAcAmQAlA0AYAaQAcAdAnAbQAeAWAjAOQARAHAMACQAugYAggfQAWgWAkgwQAggrApgWQArgXAxADQAwADAhAcQAiAeAKAzQAKAvgJAxQgJAugaAsQg6BhhkBAQhnBDhqADIgLAAQhkAAhxg7g");
	this.shape_9.setTransform(48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,96.3,59.5), null);


(lib.Символ44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHoDrIgYg5IAAAAIgYA5IgkAAIAphQIgohNIAkAAIAWA3IABAAIAXg3IAkAAIgoBNIApBQgAFuDrIgJgiIgoAAIgJAiIghAAIAuidIAgAAIAtCdgAFDCxIAbAAIgNgyIgBAAgADmDrIgfhCIgLAAIAABCIgfAAIAAidIAfAAIAABAIAJAAIAfhAIAnAAIgsBHIAvBWgAAuDrIAAidIBZAAIAAAXIg6AAIAAApIAxAAIAAAXIgxAAIAAAuIA7AAIAAAYgAgnDrIAAiGIglAAIAAgXIBpAAIAAAXIglAAIAACGgAh9DrIAAiGIg0AAIAACGIgfAAIAAidIByAAIAACdgAkADrIgJgiIgoAAIgJAiIggAAIAtidIAgAAIAuCdgAkqCxIAbAAIgOgyIAAAAgAoEDrIAAidIAuAAQAZAAAOAKQAOALAAAVQAAAMgFAIQgFAJgKAEQANADAHAKQAGAKAAANQAAAXgNALQgOAMgYAAgAnlDTIAXAAQAKAAAFgGQAFgFAAgLQAAgLgEgGQgFgHgKAAIgYAAgAnlCQIAQAAQAKAAAGgFQAFgGAAgKQAAgLgGgFQgFgGgLAAIgPAAgArPgrQgPgQAAgdIAAgoQAAgcAPgRQAPgQAYAAQAbAAAOAOQAOANgBAZIAAABIgeAAQAAgPgFgHQgGgHgNAAQgLAAgGAKQgGAJAAASIAAAoQAAATAGAJQAHAJAMAAQAMAAAFgGQAFgHAAgQIAeAAIAAABQABAZgOAOQgOANgZAAQgZAAgQgQgAKFgdIAAidIBZAAIAAAXIg6AAIAAApIAxAAIAAAXIgxAAIAAAuIA7AAIAAAYgAIvgdIAAiGIglAAIAAgXIBqAAIAAAXIgmAAIAACGgAHZgdIAAhjIAAgBIgzBkIgfAAIAAidIAfAAIAABjIABAAIAyhjIAfAAIAACdgAFYgdIgJgiIgoAAIgJAiIggAAIAtidIAgAAIAuCdgAEuhXIAbAAIgOgyIAAAAgACIgdIAAidIAuAAQAZAAAOAKQAOALAAAVQAAAMgFAIQgFAJgKAEQANADAHAKQAGAKAAANQAAAXgNALQgOAMgYAAgACng1IAXAAQAKAAAFgGQAFgFAAgLQAAgLgEgGQgFgHgKAAIgYAAgACnh4IAQAAQAKAAAGgFQAFgGAAgKQAAgLgGgFQgFgGgLAAIgPAAgABOgdIAAhjIAAgBIgzBkIgeAAIAAidIAeAAIAABjIABAAIAyhjIAfAAIAACdgAjQgdIAAidIAfAAIAACFIAsAAIAAiFIAfAAIAACFIArAAIAAiFIAfAAIAACdgAj/gdIgJgiIgoAAIgJAiIghAAIAuidIAgAAIAtCdgAkqhXIAbAAIgNgyIgBAAgAnQgdIAAidIA2AAQAYAAAOAOQAOAOAAAXQAAAXgOAOQgOAOgYAAIgXAAIAAA3gAmxhsIAXAAQALAAAFgIQAFgHAAgMQAAgMgFgIQgFgIgLAAIgXAAgAoKgdIAAiGIg0AAIAACGIgfAAIAAidIByAAIAACdgAGmjTQgJgIAAgOIAAgBIAXAAQAAAGADAEQADADAGAAQAGAAADgDQACgEAAgGIAXAAIAAABQABANgKAJQgJAJgQAAQgQAAgKgJg");
	this.shape.setTransform(115,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ44, new cjs.Rectangle(41.6,3.3,147,47), null);


(lib.Символ39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F7FB").s().p("AgBAnQgQAAgLgNQgLgMAAgPQABgQAMgLQAMgLAPAAQARABALAMQALAMgBAPQAAARgMALQgLALgPAAIgCgBg");
	this.shape.setTransform(21.9,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000208").s().p("AgDBbQglgCgagbQgZgcABglQACglAbgaQAcgZAkABQAmACAaAbQAZAcgBAlQgCAlgbAaQgbAYgjAAIgDAAg");
	this.shape_1.setTransform(20,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7FB").s().p("AgFCZQhAgDgrguQgqgvACg+QACg/AvgsQAugqA/ACQA/ACArAvQArAugCA/QgDA/guArQgsApg7AAIgGAAg");
	this.shape_2.setTransform(18.6,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000208").s().p("AidB1QgigpgGg0QgHg2AagwQAcg0AygcQA1gdA3AKQB2AUApB3QAEANAOASQALAPADAQQAFAagbAWQgiAZgOAQQg2BAhYADIgIAAQhVAAgzg/g");
	this.shape_3.setTransform(20,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ39, new cjs.Rectangle(0,0,40,36.1), null);


(lib.Символ38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F7FB").s().p("AgTAqQgRgJgHgRQgGgSAIgQQAJgRARgIQASgGAQAIQASAJAHARQAGASgIARQgJARgRAHQgIACgIAAQgJAAgKgEg");
	this.shape.setTransform(20,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000208").s().p("AgsBgQgogTgPgpQgOgoASgpQASgnAqgPQApgOAnASQAoATAOApQAPAogSAoQgSAogqAPQgSAGgSAAQgWAAgWgKg");
	this.shape_1.setTransform(23.9,20.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7F7FB").s().p("AhLCiQhDgggZhGQgZhEAghEQAfhDBFgZQBFgZBDAgQBDAgAZBFQAZBFgfBDQggBDhGAZQgeAMgeAAQgmAAglgSg");
	this.shape_2.setTransform(22.9,21.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000208").s().p("AhwCwIhEgcQglgQgEgeQgDgTAIgVQAIgaABgPQAEiSB8hAQA7geBEAOQBBANAxAvQAuAtAMBAQALA7gXA5QgkBdhmAcQgiAKghAAQg9AAg2gjg");
	this.shape_3.setTransform(22.3,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ38, new cjs.Rectangle(0,0,44.6,42.1), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.golova();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(0,0,471,223), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pasta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(0,0,220,310), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADA6QgKgCgGgDIgHgEIgJgCQgQgDgNgMQgNgNgDgRQgCgPAIgQQAIgQAQgHQAKgFAOgBIAZAAQAWAAAJACQAWAGALAYQAKAUgHAYQgCAJgEAGQgJAQgTAGQgLAEgMAAIgMgBg");
	this.shape.setTransform(69.3,14.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54).to({_off:false},0).to({_off:true},2).wait(6));

	// Слой 1
	this.instance = new lib.y5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,104);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.rot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(0,0,329,329), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#479D85").s().p("ArHP8QszhMnCk/QnolZjWo6QhEi0gfi1QgQhbgDg6QFng0HOhuQADAfAGAZQBCEjDhC/QDpDGF9BKQETA1EEgHQFagJFkhfQFThaFGihQB3g7Cxh1QD/iqAlgWQCohoCKgxQCrg+CmADQDsAFCfCNQCIB6BkD0QBbDdAKDGQAMDqhnC1Qg7Bnj6B3QjkBtldBpQlJBjllBJQlmBJkYAYQluAglFAAQkSAAj1gWg");
	this.shape.setTransform(280.1,104.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3BB6A1").s().p("AiDB0QgTgMgBgUQgEg3AdhCQAfhEAmgPQA5gWBRBDQBNBAgFAsQgDAYhkAiQhUAdguAGIgMAAQgXAAgQgKg");
	this.shape_1.setTransform(294.5,82.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3BB6A1").s().p("AAEBqQhcgsgpgfQgbgUgGgZQgGgYAOgQQAqgtBNgbQBOgcArASQBBAbAMBvQAFAugHAnQgIAogSANQgFAEgKAAQghAAhTgmg");
	this.shape_2.setTransform(130.2,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3BB6A1").s().p("AhqCDQgigCgUgSQgSgRAEgVQAJg8AwhBQAyhEAugJQBEgNBJBWQAeAjAPAkQAQAlgHAVQgJAah3ATQhXANgyAAIgPAAg");
	this.shape_3.setTransform(245.7,87.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3BB6A1").s().p("AAcB8QhkgPgwgSQghgMgNgWQgMgVAJgUQAbg2BCgwQBEgyAtAFQBFAIAtBoQASAqAEAnQAEAogNASQgJAMgpAAQghAAg1gIg");
	this.shape_4.setTransform(185.9,86.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(0,0,560.3,208.4), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3BB6A1").s().p("AlVCeQgRAAgOgLQgOgKgFgPQgIgSAIgRQAIgTAWgWQAkgjAugLQAggIAcANQAeAPABAhQAAAWgPARQgJAJgZAQQgfAUgSAJQgcAMgXAAIgEAAgAguANQgPgEgLgMQgKgMgCgPQgDgSAKgOQAMgRAYgOQAngZAsgCQAggBAXASQAZAUgGAfQgEAUgSAMQgJAHgbAKQghALgSAEQgQAEgNAAQgNAAgLgDgAECg+QgLgFgHgLQgHgLAAgMQAAgOAJgKQAMgMAVgJQAigOAjAEQAaADAPARQARATgJAXQgFAQgPAHQgIAEgXAFQgdAFgNABIgIAAQgUAAgOgGg");
	this.shape.setTransform(148.7,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#479D85").s().p("AwiMEQBiniFalgQAjgjA3iEQAyh6AxgjIAggWQEAizDFhQQEFhqEkAAQCsAAB5AbQCkAlgMBMQgIAuibAsIiOAmQhWAYg0AVQj4Bji4CqQjJC6hUDrIhWDwQg5CogbB1QlIATkKAAQhkAAhcgCg");
	this.shape_1.setTransform(105.9,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(0,0,211.8,154.9), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE63A6").s().p("AqKQCQgTgFgPgNQgSgOANgHQAzgXAfgQQA6gdA2gxQA2gxAsg1ICAieIAqgwQAYgdANgWIAmg+QATgjAHghQAJgsAAgJQABgjgcgCQgRgBgQAmQgPAigUgJQgFgCgHgIQhIhSgShtQgEgYACguQABgwgDgWQgGgygjg4QgWgjgwg6Qg1g+gTgcQgmg5gCgtQgBgPAGgGQAHgIAMAIQARALASAiIAbA0QAYAlBDBEQBBBAAYAqQAOAXAHAIQARATAPgHQAMgHgug/Ig5hJIhyiWQgpgzgTgcQghgwgIgoQgIglALgoQAKglAXghQAmg0ALAOQAXAdAQA3QAVBIAIARQASAnAeAvIA2BTQBLBuA3A2QARARAUACQBAAIgohVQgWgugrg6Qgpg2gZgnQggg0gTgxQghhUgKg7QgLg6ACgWQADgqAjgYICOhhQAJgHALgDQAPgFAGAGQAEAFgJAiIgNAsQgFAuAHA1QANBiAyBXQAKAQAHAHQANANAMgFQAPgHgEggIgJgsQgNg5gOgyQgOgxgGgbQgJgrACgjQACg1AggNQAOgGAXgCIAmgEQAhgGAmgZIAfgVQASgLAQgBQAOAAAIAJQAHAJgBAPQgEA1ArAvQAXAYBCAvQAiAYALAJQAYAUAOAUQARAWAEAXQAEAUgFAeQgPBkhOBiQgoA0hXBPQhEA9AhAVQAVAOAigcIArgtQBBhIAfgmQBPhgAgh8IADgLQACgFAHABQAQABAVAiQALATAPAeQAhA7APA1QAKAogCAcQgCAjgUAcQglA2hHA3Qg0AphPAsIiIBKQgiATgDAhQgEAhAtgFQAYgCAggNQASgIAigQQBHgfA1gqQBHg4A8hMQAKgNAKgbQALggAGgKQAQgcAOAAQAMAAgEAYIgHAjQgBAeAMAxQAPA6ACAUQAFA2gHBDQgFA0gMAnQgZBWhBA2IhKA6QgtAjgbAaIhCBLQgoAsgiAXQgdATgeAJQgxANgpgDQgygFghgdQgPgPgNgVQgNgVgGgVIgGgjQgDgWgGgNQgHgSgPgLQgSgLgSAGQgOAEgHAPQgEAJgEASQgMBAgYAoQgLAUgSAZIgfArQgIAKgOAQIgYAYQg3BBgcAjIirDXQgiArgkAbQgsAfgmAAQgJAAgKgCg");
	this.shape.setTransform(69.5,102.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(0,0,139.1,205.6), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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EgBAKQAAAEgCAEQgCAEgFACQAHAAACAEQADAFAAAFQAAAKgGAFQgGAFgLAAgAp9AYIAJAAQAFAAACgCQACgDAAgFQAAgFgCgCQgCgDgEAAIgKAAgAp9gEIAHAAQAFAAACgDQACgCAAgEQAAgFgCgCQgDgDgFAAIgGAAgAq9AiIAAhDIAnAAIAAAKIgZAAIAAASIAVAAIAAAJIgVAAIAAAUIAZAAIAAAKgArXAiIAAg5IgOAAIAAAVQAAATgGAIQgGAJgMAAIgBAAIAAgKIABAAQAGAAADgGQACgGgBgOIAAgfIApAAIAABDgAstAiIAAhDIAnAAIAAAKIgaAAIAAASIAVAAIAAAJIgVAAIAAAUIAaAAIAAAKgAtfAiIAAhDIAnAAIAAAKIgZAAIAAA5gAJIATIAAgCIAAgEIAAgDQAAgDgBgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgGAAIAAAQIgHAAIAAgmIAMAAQAHAAADADQAEADAAAGQAAADgBACIgEACQABAAAAABQABAAAAABQABAAAAABQAAAAABABQABADAAADIAAADIAAADIABADIAAAAgAI8gCIAFAAIAFgBQACgBAAgDQAAgEgBgBQgCgCgEAAIgFAAg");
	this.shape.setTransform(88.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(2.3,-0.4,172.8,7.1), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(120.4,26.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(20.5,7.4,199.9,38.8), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(119.2,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(16.9,3.9,204.6,40.3), null);


(lib.Символ13копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(120.3,21.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAUQgHgIAAgMQgBgLAIgIQAHgIAJAAQAKAAAIAIQAGAIAAALQAAAMgGAIQgIAIgKAAQgJAAgHgIgAgNgQQgGAHAAAJQAAAKAGAHQAFAHAIAAQAJAAAFgHQAGgHAAgKQAAgJgGgHQgFgHgJAAQgIAAgFAHgAAGAPIgBgCIAAgDIAAgCIgBgEIgDgBIgFAAIAAAMIgFAAIAAgfIAJAAQAFAAADADQADADAAAEIgBAEIgDACQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAIABAFIAAACIAAADIABACIAAAAgAgEgBIAEAAIAEgBQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgEAAg");
	this.shape_1.setTransform(128.8,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13копия, new cjs.Rectangle(44.8,-0.6,151.1,44.6), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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gpQgMgIABgPIAAgBIAVAAQAAAHAFAEQAEAFAHgBQAIABAGgFQAEgEAAgHQAAgJgEgEQgFgEgIAAIgNAAIAAgQIANAAQAIgBAEgDQAEgFAAgHQAAgHgFgEQgEgEgIAAQgGAAgEAEQgEAEgBAGIgVAAIAAAAQAAgNAKgJQALgIAPAAQASgBAKAJQAKAHAAAPQABAIgFAHQgEAGgIAEQAJADAEAGQAFAHAAAJQAAAPgLAIQgLAJgSAAQgPAAgLgIgAExgtQgLgLAAgUIAAgaQAAgUALgMQALgMATABQASgBALAMQALAMAAAUIAAAaQAAAUgLALQgLAMgSAAQgTAAgLgMgAFAh6QgEAHAAANIAAAaQAAAMAEAIQAFAGAKAAQAJAAAEgGQAGgIAAgMIAAgaQAAgNgGgHQgFgHgIABQgKgBgFAHgABggsQgLgLAAgUIAAgcQAAgUALgLQAKgLARAAQATAAAJAJQAKAJAAASIgBAAIgUAAQAAgKgEgFQgEgFgJAAQgHAAgFAGQgEAHAAAMIAAAdQAAANAFAGQAEAHAIgBQAJABADgFQADgEAAgMIAVAAIAAABQABARgKAKQgJAJgSAAQgSAAgKgLgAkAgtQgLgLAAgUIAAgaQAAgUALgMQAKgMATABQASgBALAMQAMAMAAAUIAAAaQAAAUgMALQgKAMgTAAQgTAAgKgMgAjxh6QgFAHAAANIAAAaQAAAMAFAIQAEAGAKAAQAJAAAFgGQAFgIAAgMIAAgaQAAgNgFgHQgFgHgJABQgKgBgEAHgAoPgpQgMgIABgPIABgBIAUAAQAAAHAEAEQAFAFAHgBQAJABAEgFQAGgEAAgHQgBgJgEgEQgFgEgIAAIgNAAIAAgQIANAAQAIgBAEgDQAEgFAAgHQAAgHgFgEQgDgEgJAAQgGAAgEAEQgFAEAAAGIgUAAIAAAAQgBgNALgJQAKgIAPAAQASgBAKAJQALAHgBAPQAAAIgEAHQgFAGgHAEQAJADAFAGQAEAHAAAJQAAAPgLAIQgLAJgSAAQgPAAgLgIgAwOgsQgKgLAAgUIAAgcQAAgUAKgLQAKgLASAAQASAAAKAJQAJAJAAASIAAAAIgVAAQABgKgEgFQgFgFgIAAQgIAAgEAGQgFAHAAAMIAAAdQAAANAFAGQAFAHAIgBQAIABAEgFQADgEAAgMIAVAAIAAABQAAARgJAKQgKAJgRAAQgSAAgLgLgAQ6gjIAAhtIA+AAIAAARIgpAAIAAAcIAiAAIAAAQIgiAAIAAAgIApAAIAAAQgAPigjIAAhtIAVAAIAAAnIAPAAQARAAAKAJQAKALgBAPQABAPgKAKQgKALgRgBgAP3gzIAPAAQAHAAAEgFQAEgGAAgIQAAgIgEgFQgEgFgHgBIgPAAgAOIgjIAAhtIAfAAQASAAAJAIQALAHAAAPQAAAHgEAHQgEAFgGAEQAJABAEAIQAEAGAAAKQABAQgKAHQgJAJgRgBgAOdgzIAQAAQAHAAADgEQAEgEAAgHQAAgIgDgFQgDgEgIAAIgQAAgAOdhiIAMAAQAGAAAEgDQAEgEAAgHQAAgIgEgEQgEgDgIAAIgKAAgALNgjIAAhtIAlAAQARAAAKAKQAJAKAAAQQAAAQgJAKQgKAKgRAAIgPAAIAAAlgALjhZIAPAAQAHAAAFgGQADgFAAgIQAAgIgDgGQgFgFgHAAIgPAAgADcgjIAAgqIgPAAIgRAqIgXAAIAUgxQgHgFgDgGQgEgHAAgJQAAgQAKgIQAJgJARAAIAhAAIAABtgADEh7QgDAFAAAIQAAAIADAFQAEAFAHAAIANAAIAAgjIgNAAQgIAAgDAEgAAbgjIAAhcIgaAAIAAgRIBKAAIAAARIgaAAIAABcgAgggjIAAhFIgBAAIgjBFIgWAAIAAhtIAWAAIAABFIABABIAjhGIAVAAIAABtgAiVgjIAAhcIgaAAIAAgRIBJAAIAAARIgaAAIAABcgAligjIAAhtIBAAAIAAARIgqAAIAAAWIAPAAQAQAAAKAJQALALgBAPQABAPgLAKQgKALgQgBgAlMgzIAPAAQAHAAAEgFQAEgGAAgIQAAgIgEgFQgEgFgHgBIgPAAgAmEgjIgGgXIgcAAIgGAXIgXAAIAghtIAWAAIAgBtgAmihLIATAAIgJgiIAAAAgAqDgjIgHgXIgcAAIgGAXIgWAAIAfhtIAXAAIAfBtgAqhhLIATAAIgJgiIgBAAgAr4gjIAAhcIgaAAIAAgRIBJAAIAAARIgaAAIAABcgAs1gjIAAhcIgkAAIAABcIgVAAIAAhtIBPAAIAABtgAu9gjIAAhtIA+AAIAAARIgpAAIAAAcIAiAAIAAAQIgiAAIAAAgIApAAIAAAQgAw4gjIgGgXIgcAAIgGAXIgXAAIAghtIAWAAIAgBtgAxWhLIATAAIgJgiIgBAAgAp0hgQgHgHAAgNQgBgLAIgIQAHgJAKAAQAKAAAHAJQAIAIgBALQABANgIAHQgHAJgKAAQgKAAgHgJgApxiEQgGAGAAAKQAAAKAGAIQAFAHAJAAQAJAAAFgHQAGgIAAgKQAAgKgGgGQgFgHgJAAQgJAAgFAHgApdhkIgBgCIAAgEIAAgCIAAgDIgEgCIgGAAIAAANIgFAAIAAggIAJAAQAGAAADADQADADAAAEIgBAEIgDACQABABAAAAQAAAAABABQAAAAAAABQABAAAAABIABAEIAAADIAAADIABACIAAAAgApoh1IAEAAIAFgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIgEAAg");
	this.shape.setTransform(119.7,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(5.3,6.1,228.8,29.3), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("AgcAzIAAhlIA5AAIAAAPIglAAIAAAaIAfAAIAAAPIgfAAIAAAeIAlAAIAAAPg");
	this.shape.setTransform(159.6,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D93A96").s().p("AgKAzIAAhWIgXAAIAAgPIBDAAIAAAPIgYAAIAABWg");
	this.shape_1.setTransform(152,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D93A96").s().p("AALAzIgUgqIgHAAIAAAqIgUAAIAAhlIAUAAIAAAqIAGAAIATgqIAZAAIgcAvIAfA2g");
	this.shape_2.setTransform(144.4,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D93A96").s().p("AgYAzIgGgCIACgOIAEABIAFAAQAEAAADgCQACgCACgGIABgEIgfhJIAVAAIARAvIAAADIAAAAIASgyIAWAAIghBSQgEAKgEAFQgHAGgJAAIgHgBg");
	this.shape_3.setTransform(135.6,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D93A96").s().p("AAZA5IAAgMIgxAAIAAAMIgVAAIAAgbIAGAAQAJAAACgKQADgKADgZIAEgpIA2AAIAABWIAJAAIAAAbgAgCgPIgEAaQgDALgEAIIAdAAIAAhHIgQAAg");
	this.shape_4.setTransform(126.8,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D93A96").s().p("AgaAqQgLgLAAgTIAAgXQAAgTALgLQAJgLARAAQARAAALALQAKALAAATIAAAXQAAATgKALQgLALgRAAQgQAAgKgLgAgMgeQgFAHABAMIAAAXQgBAMAFAHQAEAGAIAAQAJAAAEgGQAFgHAAgMIAAgXQAAgMgFgHQgEgGgJAAQgIAAgEAGg");
	this.shape_5.setTransform(117.6,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D93A96").s().p("AgiAzIAAhlIAiAAQAQAAAKAJQAJAJAAAPQAAAPgJAIQgKAKgQAAIgOAAIAAAjgAgOAAIAOAAQAHAAAEgEQAEgFAAgIQAAgHgEgFQgEgGgHAAIgOAAg");
	this.shape_6.setTransform(109,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D93A96").s().p("AARAzIAAhWIghAAIAABWIgUAAIAAhlIBJAAIAABlg");
	this.shape_7.setTransform(100,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D93A96").s().p("AgbAqQgKgLAAgTIAAgXQAAgTAKgLQALgLAQAAQARAAALALQAKALAAATIAAAXQAAATgKALQgLALgRAAQgQAAgLgLgAgMgeQgFAHABAMIAAAXQgBAMAFAHQAEAGAIAAQAJAAAFgGQAEgHAAgMIAAgXQAAgMgEgHQgFgGgJAAQgIAAgEAGg");
	this.shape_8.setTransform(87.3,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D93A96").s().p("AgcAzIAAhlIA5AAIAAAPIglAAIAAAaIAfAAIAAAPIgfAAIAAAeIAlAAIAAAPg");
	this.shape_9.setTransform(75.7,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D93A96").s().p("AgcAzIAAhlIA5AAIAAAPIglAAIAAAaIAfAAIAAAPIgfAAIAAAeIAlAAIAAAPg");
	this.shape_10.setTransform(68.3,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D93A96").s().p("AARAzIAAgqIghAAIAAAqIgUAAIAAhlIAUAAIAAAsIAhAAIAAgsIAUAAIAABlg");
	this.shape_11.setTransform(59.9,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D93A96").s().p("AghAzIAAhlIA6AAIAAAPIgmAAIAAAVIANAAQAPAAAKAJQAJAIAAAPQAAAPgJAJQgKAJgPAAgAgNAkIANAAQAHAAADgFQAEgGAAgHQAAgHgEgFQgDgGgHAAIgNAAg");
	this.shape_12.setTransform(51.3,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D93A96").s().p("AgbAqQgKgLAAgTIAAgXQAAgTAKgLQAKgLARAAQARAAAKALQALALAAATIAAAXQAAATgLALQgKALgRAAQgQAAgLgLgAgMgeQgEAHgBAMIAAAXQABAMAEAHQAFAGAHAAQAIAAAGgGQAEgHAAgMIAAgXQAAgMgEgHQgGgGgIAAQgIAAgEAGg");
	this.shape_13.setTransform(42.5,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D93A96").s().p("AghAzIAAhlIAiAAQAPAAAJAJQAJAJAAAPQAAAPgJAIQgJAKgPAAIgPAAIAAAjgAgOAAIAPAAQAGAAAEgEQAEgFgBgIQABgHgEgFQgEgGgGAAIgPAAg");
	this.shape_14.setTransform(33.9,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D93A96").s().p("AAZA5IAAgMIgxAAIAAAMIgVAAIAAgbIAGAAQAJAAACgKQADgKADgZIAEgpIA2AAIAABWIAJAAIAAAbgAgBgPIgFAaQgDALgEAIIAdAAIAAhHIgQAAg");
	this.shape_15.setTransform(24.9,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D93A96").s().p("AgbAqQgKgLAAgTIAAgXQAAgTAKgLQALgLAQAAQARAAAKALQALALAAATIAAAXQAAATgLALQgJALgSAAQgQAAgLgLgAgMgeQgFAHAAAMIAAAXQAAAMAFAHQAFAGAHAAQAJAAAFgGQAEgHAAgMIAAgXQAAgMgEgHQgFgGgJAAQgIAAgEAGg");
	this.shape_16.setTransform(15.7,11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D93A96").s().p("AARAzIAAhWIghAAIAABWIgUAAIAAhlIBJAAIAABlg");
	this.shape_17.setTransform(6.5,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,165.5,22), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxQEiIAApDMAihAAAIAAJDg");
	this.shape.setTransform(110.5,29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,221.1,58), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSArIAAhIIAMAAIABAFQAFgGAJAAQAJAAAFAHQAGAHAAANIAAABQAAALgGAHQgFAIgJAAQgIAAgGgGIAAAZgABfgOIAAAVQADAFAHAAQAKAAAAgPQAAgIgDgEQgCgEgGAAQgGAAgDAFgAE0ATQgFgFAAgJIAAgiIAOAAIAAAhQAAAIAIAAQAHAAADgFIAAgkIANAAIAAA0IgMAAIgBgGQgFAHgKAAQgIAAgEgFgAC0ATQgFgEAAgHQAAgIAGgEQAHgEALgBIAGAAIAAgDQAAgDgCgCQgBgDgEAAQgEAAgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIgOAAQAAgFADgEQACgEAGgCQAFgCAHAAQAJAAAGAFQAFAFABAJIAAAWQAAAHACAEIAAABIgOAAIgCgFQgFAGgIAAQgIAAgFgFgAC9AGIAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACADAAIAFgBQADgCABgCIAAgIIgEAAQgMAAAAAGgACPAJIAAgcIgHAAIAAgKIAHAAIAAgNIAOAAIAAANIAJAAIAAAKIgJAAIAAAaIABAEQABAAAAAAQAAABABAAQAAAAABAAQABAAABAAIAEAAIAAAKIgJACQgPAAAAgPgAAeARQgHgIAAgKIAAgCQAAgIADgGQADgGAGgEQAFgDAIAAQALAAAGAHQAGAHAAAMIAAAFIghAAQAAAFADADQAEADAFAAQAIAAAFgGIAHAIQgEAFgFACQgFADgHAAQgLAAgIgHgAApgQQgDADAAAFIATAAIAAgBQAAgFgCgCQgDgDgEAAQgEAAgDADgAgUAVQgFgCgDgEQgDgEAAgFIAOAAQAAAEADACQACACAFAAQADAAACgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAAAgBgBIgJgDQgSgDAAgMQAAgHAGgEQAFgFAKAAQAJAAAGAFQAGAEAAAIIgNAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgCgEAAQgDAAgDACQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABIAIACIAIACQALAEAAAKQAAAHgGAEQgGAFgJAAQgGAAgGgDgAhRATQgFgEAAgHQAAgIAGgEQAHgEALgBIAGAAIAAgDQAAgDgCgCQgBgDgFAAQgDAAgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIgOAAQAAgFADgEQACgEAGgCQAFgCAHAAQAJAAAGAFQAFAFABAJIAAAWQgBAHADAEIAAABIgOAAIgCgFQgFAGgIAAQgIAAgFgFgAhIAGIAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACACADAAIAGgBQACgCABgCIAAgIIgEAAQgMAAAAAGgADsAVQgCgCAAgDQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgCgCgAhxAVQgCgCAAgDQAAgEACgCQADgCADAAQAEAAACACQACACAAAEQAAADgCACQgCACgEAAQgDAAgDgCgAEJAXIAAg0IANAAIAAAGQAFgHAHAAIAEABIAAANIgFAAQgIAAgCAFIAAAigAiWAXIgKghIgKAhIgMAAIgNg0IANAAIAHAhIAJghIAKAAIAKAhIAHghIAOAAIgOA0gAjjAXIgKghIgKAhIgLAAIgOg0IAOAAIAHAhIAKghIAKAAIAKAhIAHghIANAAIgNA0gAkuAXIgKghIgKAhIgMAAIgNg0IANAAIAHAhIAJghIAKAAIAKAhIAHghIAOAAIgOA0g");
	this.shape.setTransform(37,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(2.2,5.9,69.7,8.7), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("Az0FGIAAqLMAnoAAAIAAKLg");
	this.shape.setTransform(119.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(-7.8,-1.5,253.7,65.1), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADrEYIkEovICOAAIEFIvgAk1EYIA9iBIiBAAIAzhuICBAAIA+iFICCAAIg+CFICJAAIgzBuIiKAAIg8CBg");
	this.shape.setTransform(37.8,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPARQgIgHAAgKQAAgIAIgIQAHgGAIAAQAJAAAIAGQAGAIAAAIQAAAJgGAIQgIAHgJAAQgIAAgHgHgAgNgMQgGAFABAHQgBAIAGAGQAGAFAHAAQAIAAAFgFQAGgGAAgIQAAgHgGgFQgFgHgIAAQgHAAgGAHgAAFANIgBgEIgBgFQgBgBgCAAIgDAAIAAAKIgGAAIAAgZIAJAAQALAAAAAIQgBAEgEABQAEABABAHIAAAEgAgDgBIADAAQAFAAAAgDQAAgDgFAAIgDAAg");
	this.shape_1.setTransform(121.5,69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARAdIgFgLIgXAAIgFALIgNAAIAag5IAIAAIAZA5gAgHAHIAPAAIgIgQg");
	this.shape_2.setTransform(118.6,99);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJAdIgSgYIgEAFIAAATIgNAAIAAg5IANAAIAAAXIAVgXIARAAIgZAZIAaAgg");
	this.shape_3.setTransform(111.7,99);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAdIAAgWQgGAEgHAAQgXAAAAgUIAAgTIANAAIAAAMQAAAPALAAQAGABAGgEIAAgYIANAAIAAA5g");
	this.shape_4.setTransform(104.4,99);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAdIAAg5IAMAAIAAA5gAgfAdIAAg5IANAAIAAATIAJAAQAXAAAAATQAAATgYAAgAgSARIAIAAQAKAAAAgHQABgIgKAAIgJAAg");
	this.shape_5.setTransform(96.9,99);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAZAAQAUAAAAAPQAAAHgGAFQAIADAAAKQAAARgXAAgAgKARIAKAAQAKAAAAgGQAAgGgJAAIgLAAgAgKgFIALAAQAIgBAAgEQAAgGgJAAIgKAAg");
	this.shape_6.setTransform(89.5,99);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAdIAAgiIgbAiIgLAAIAAg5IANAAIAAAiIAbgiIALAAIAAA5g");
	this.shape_7.setTransform(82.4,99);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAXAAQAYAAAAAUQAAASgYABIgKAAIAAASgAgKAAIAKAAQALAAAAgIQAAgIgLAAIgKAAg");
	this.shape_8.setTransform(75.7,99);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANAdIAAgtIgZAAIAAAtIgMAAIAAg5IAxAAIAAA5g");
	this.shape_9.setTransform(68.6,99);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAdIAAgTIgKAAIgOATIgPAAIAQgWQgMgEAAgMQAAgIAGgFQAHgGAKAAIAYAAIAAA5gAgIgJQAAAIAIAAIAOAAIAAgPIgNAAQgJAAAAAHg");
	this.shape_10.setTransform(58.6,99);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARAdIgFgLIgXAAIgFALIgNAAIAZg5IAJAAIAZA5gAgHAHIAOAAIgHgQg");
	this.shape_11.setTransform(51.7,99);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAZAAQAUAAAAAPQAAAHgGAFQAIADAAAKQAAARgXAAgAgKARIAKAAQAKAAAAgGQAAgGgJAAIgLAAgAgKgFIALAAQAIgBAAgEQAAgGgJAAIgKAAg");
	this.shape_12.setTransform(45.1,99);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgMAAgIgJgAgLgMQgEAFAAAHQAAAHAEAFQAFAFAGAAQAHAAAFgFQAEgFAAgHQAAgHgEgFQgGgFgGAAQgGAAgFAFg");
	this.shape_13.setTransform(37.9,99);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAdIAAg5IAXAAQAYAAAAAUQAAASgYABIgKAAIAAASgAgKAAIAKAAQALAAAAgIQAAgIgLAAIgKAAg");
	this.shape_14.setTransform(31,99);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAJgJALAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJgAgKgMQgFAFAAAHQAAAHAFAFQAEAFAGAAQAHAAAFgFQAEgEAAgIQAAgHgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_15.setTransform(23.8,99);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAiIAAgKIgkAAIAAAKIgLAAIAAgWIAGAAQAGgMAAgaIAAgHIApAAIAAAtIAGAAIAAAWgAgFgRQAAATgFAKIAVAAIAAghIgQAAg");
	this.shape_16.setTransform(16.5,99.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZARIAKgHQAGAIALAAQALAAAAgHQAAgGgMAAIgIAAIAAgLIAHAAQALAAAAgFQAAgGgKAAQgJAAgFAGIgKgGQAIgMAQAAQAXAAAAARQAAAHgGAEQAIACAAAKQAAAIgHAGQgHAFgKAAQgSAAgJgNg");
	this.shape_17.setTransform(9.4,99);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABABXIgRgmIhdAAIgRAmIghAAIBQitIAgAAIBRCtgAAhAVIghhHIghBHIBCAAg");
	this.shape_18.setTransform(111.7,77.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABABXIgSgnIhcAAIgRAnIgiAAIBRitIAhAAIBQCtgAAiAVIgihHIghBHIBDAAg");
	this.shape_19.setTransform(16.6,77.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhDBDQgcgcAAgnQAAgmAcgbQAcgcAnAAQAiAAAaATQAaAUAJAgIABAIIggAAIgCgFQgGgTgRgMQgRgMgWAAQgZABgUASQgSASgBAZQABAaASASQAUASAZAAQAVAAASgLQARgMAGgSIAhAAIAAACQgJAggaAUQgaATgiAAQgnAAgcgbg");
	this.shape_20.setTransform(36.9,77.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBXIAAiPIhEAAIAAgeICnAAIAAAeIhEAAIAACPg");
	this.shape_21.setTransform(96.6,77.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhPBXIAAitICfAAIAAAeIiBAAIAAApIBkAAIAAAbIhkAAIAAAtICBAAIAAAeg");
	this.shape_22.setTransform(57.8,77.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA1BXIAAiQIhpAAIAACQIgfAAIAAitICnAAIAACtg");
	this.shape_23.setTransform(77.4,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,123.8,102.8), null);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.u67();
	this.instance.parent = this;
	this.instance.setTransform(-50,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-35,100,70);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(50,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ43, new cjs.Rectangle(0,0,100,70), null);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ39();
	this.instance.parent = this;
	this.instance.setTransform(19.9,39.8,1,1,0,0,0,19.9,18.1);

	this.instance_1 = new lib.Символ38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(195.2,21.1,1,1,0,0,0,22.3,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ40, new cjs.Rectangle(0,0,217.5,57.8), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ34();
	this.instance.parent = this;
	this.instance.setTransform(105.5,155.7,0.932,0.932,0,0,0,110,155.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(3,11.2,205,288.9), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.parent = this;
	this.instance.setTransform(105.9,77.4,1,1,0,0,0,105.9,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,rotation:-7.3,x:98.5,y:80.9},19,cjs.Ease.get(-1)).to({scaleX:1.07,rotation:-15,x:90.7,y:84.5},20,cjs.Ease.get(1)).to({regX:105.8,regY:77.5,scaleX:1.04,rotation:-7.3,x:98.3,y:81.1},20,cjs.Ease.get(-1)).to({regX:105.9,regY:77.4,scaleX:1,rotation:0,x:105.9,y:77.4},20,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(280.1,230.3,1,1,0,0,0,280.1,104.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,skewY:-1.8,x:280.2,y:239.2},19,cjs.Ease.get(-1)).to({scaleX:1,skewY:-3.7,x:280.1,y:248.6},20,cjs.Ease.get(1)).to({scaleX:1,skewY:-1.8,x:280.2,y:239.4},20,cjs.Ease.get(-1)).to({scaleX:1,skewY:0,x:280.1,y:230.3},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.3,334.5);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1CBAA1").s().p("AgsKPQhvgQjggnIhbgPQg/gMgRgMQgSgLA4ggQA4gfAqAAQgvgTg/AFQg7AGgtAYQgDACgDgCQgDgCAAgEQACgjAjgoQAmgsAtgEQgYgMg1AGQglAEgqAMQgFABgEgEQgDgEACgFQAqhHBYgPQBMgNBeAfQhki0ATjVQATjRB9isQBLhmBpgvQBpgvCMAFQDNAJCWBUQCxBkAmC0QAMA6gCA9QgCA+gRA4QgbBYg4A4Qg/A9hbAMQhKAEgmADQhEAHgiAbQgiAcgMAzQgKApAGAzQACAUAiBdQAcBOgJAYQgQAqhBARQgmAKgyAAQgrAAg0gHg");
	this.shape.setTransform(204.5,451.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#479D85").s().p("ADAHLQhYhthSgjQgrgTg6gLQgrgHg/gEQhAgDgjgPQgmgPgUggQgohEAshlQAjhPBVhbQBohvB0hZQBshUBjgxIg8BxQhDB8ghA7QgvBSg3BoIAXACQAeADAgAGQBGAOAsARQAmAQA0AjQAgAVAbAiQAUAaAYAqQAOAaAGAeQAFAdgFABQgDABgVgPQgagUgZgIQATAhgBArQAAAdgHAYQgEAJgGgHQgcgbgPgNQgVgRgcgQQAKAWADAoQACAggDAaQAAAGgFAAQgEAAgEgEg");
	this.shape_1.setTransform(139.7,273.8);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(302.9,260.6,1,1,0,0,0,226,405.4);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(271.7,291.7,1,1,0,0,0,271.7,204.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#479D85").s().p("AgLCgQgagBguhmQgphWgJgvQgHggALgXQALgWAVgDQA6gKBIAYQBLAZAUAnQAdA6g+BcQg7BYguAAIgBAAg");
	this.shape_2.setTransform(382,250.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#479D85").s().p("AgsCjQgZgEgghsQgbhbgDgwQgCggAPgWQAOgTAUgBQA8gBBDAiQBHAjAOAqQAVA9hLBSQgfAighAUQgcASgUAAIgGAAg");
	this.shape_3.setTransform(368.8,208.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#479D85").s().p("AghCKQgVgDgdhbQgZhNgEgpQgCgbAMgSQALgRASgBQAygCA6AcQA9AcAMAjQATAzg9BIQg3A/glAAIgHAAg");
	this.shape_4.setTransform(358.1,165.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#479D85").s().p("AgrB6QgSgGgRhTQgPhFAAgkQABgZALgOQALgNAPACQArAEAvAgQAxAhAIAgQAMAvg7A2QgtArgfAAQgGAAgGgBg");
	this.shape_5.setTransform(340,48.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#479D85").s().p("AglCVQgXgEgdhkQgZhVgEgtQgCgdANgTQAMgRATAAQA1ABA9AjQBAAjANAmQATA5hCBJQg4A+gnAAIgKgCg");
	this.shape_6.setTransform(350.9,123.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#479D85").s().p("AgoB/QgTgGgUhVQgShJAAglQgBgZAMgPQALgOAQABQAsAEAyAgQA0AgAJAhQAOAwg7A7QgxAvggAAIgKgBg");
	this.shape_7.setTransform(342.8,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(0,-192.7,543.4,858.8), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(48.1,29.7,1,1,0,0,0,48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(0,0,96.3,59.5), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.parent = this;
	this.instance.setTransform(50,35,1,1,0,0,0,50,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:-14.8,x:50.1},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-30,x:50},2,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-14.8,x:50.1},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:50},2,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,70);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.parent = this;
	this.instance.setTransform(115,28.9,1,1,0,0,0,115,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.746},5,cjs.Ease.get(-1)).to({alpha:0.488},5,cjs.Ease.get(1)).to({alpha:0.715},4,cjs.Ease.get(-1)).to({alpha:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.6,3.3,147,47);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ13();
	this.instance.parent = this;
	this.instance.setTransform(115,19.4,0.958,0.958,0,0,0,120,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ16, new cjs.Rectangle(5.1,5.9,219.3,28.1), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ9();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.parent = this;
	this.instance.setTransform(110.6,29.1,1,1,0,0,0,84.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.5,29,1,1,0,0,0,110.5,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,221.1,58), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ18();
	this.instance.parent = this;
	this.instance.setTransform(108.1,66.8,1,1,0,0,0,88.6,6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(320).to({_off:false},0).to({y:46.8},3).wait(32).to({y:66.8},3).wait(7));

	// Слой 1 - копия
	this.instance_1 = new lib.Символ17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(109.1,23.8,1,1,0,0,0,115,28.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(278).to({_off:false},0).to({alpha:1},3).wait(39).to({y:6.8},3).wait(32).to({y:23.8,alpha:0},3).wait(7));

	// Слой 1 - копия
	this.instance_2 = new lib.Символ13копия();
	this.instance_2.parent = this;
	this.instance_2.setTransform(109.1,24.2,0.958,0.958,0,0,0,120,20.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(238).to({_off:false},0).to({alpha:1},3).wait(34).to({alpha:0},3).wait(87));

	// Слой 1 - копия
	this.instance_3 = new lib.Символ16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(109.1,24.2,1,1,0,0,0,115,19.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).to({alpha:1},3).wait(82).to({alpha:0},3).wait(127));

	// Слой 1 - копия
	this.instance_4 = new lib.Символ15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109.1,26.1,1,1,0,0,0,120,26.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({alpha:1},3).wait(89).to({alpha:0},3).wait(215));

	// Слой 1
	this.instance_5 = new lib.Символ14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(109.1,26.1,1,1,0,0,0,120,26.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({alpha:1},3).wait(47).to({alpha:0},3).wait(310));

	// Слой 7
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(108.1,25,1,1,0,0,0,120,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(319).to({scaleY:1.72,y:2.5},4).wait(32).to({scaleY:1,y:25},3).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.7,-8,253.7,65.1);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(285.9,355.6,1,1,0,0,0,285.9,355.6);
	this.instance.alpha = 0.43;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,571.9,711), null);


(lib.Символ41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AuzDRQgTgGgagQQgzgfgNgiQgOggAOgmQAJgdAbgfQAcgiAagIQAQgEAkACIAuAEQAaADATAGQAyAPAWAkQAKAQAGAcQAGAbgBARQgDAZgOAOIgQAPIgLAQQgJAMgXAMQgaANgOAEQgOADgdAAQgnAAgTgFgAMbBFQhRgdgcgzQgSggADgmQAEgkAWgSIAUgOIARgPQAOgNAigTQAWgMALgDQANgDAeABIA7ABQAeADAiAOQAaALAPANQAbAXADAdIACAYQACAJAGARQAEARgHAVQgFANgNAVQgQAcgNAKQgJAGgOAGIgYAIQgnARgVAFQgOADgQAAQgjAAgtgRgAOUhlIgDAFQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAHgDIABgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgJgCg");
	this.shape.setTransform(108.5,28.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(34).to({_off:false},0).to({_off:true},2).wait(49));

	// Слой 1
	this.instance = new lib.Символ40();
	this.instance.parent = this;
	this.instance.setTransform(108.8,28.9,1,1,0,0,0,108.8,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({scaleY:0.81,y:28.1},0).wait(2).to({scaleY:1,y:28.9},0).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.5,57.8);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ41();
	this.instance.parent = this;
	this.instance.setTransform(280.7,62.1,1,1,0,0,0,108.8,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(235.5,111.5,1,1,0,0,0,235.5,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(0,0,471,223), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ24();
	this.instance.parent = this;
	this.instance.setTransform(56.1,195,1,1,0,0,0,48.1,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.5,x:61.8,y:201.3},24,cjs.Ease.get(-1)).to({regY:29.8,rotation:-20.2,x:69.3,y:209.9},25,cjs.Ease.get(1)).to({regY:29.7,scaleX:1,scaleY:1,rotation:-11.3,x:63.5,y:203.3},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:56.1,y:195},26,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.5,102.8,1,1,0,0,0,69.5,102.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:-14.3,x:54,y:108.5},24,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-33.4,x:33.3,y:116.1},25,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-18.8,x:49.2,y:110.3},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,x:69.5,y:102.8},26,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.1,224.7);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(60.8,55.3,1,1,30,0,0,50,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:34.9,scaleX:1,scaleY:1,rotation:29.9,x:60.9,y:59.4},4,cjs.Ease.get(-1)).to({regY:35,scaleX:1,scaleY:1,rotation:30,x:60.8,y:64.6},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:29.9,x:60.9,y:60},5,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:30,x:60.8,y:55.3},5,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.3,73.3,1,1,0,0,0,54.5,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:77.4},4,cjs.Ease.get(-1)).to({y:82.6},5,cjs.Ease.get(1)).to({y:77.9},5,cjs.Ease.get(-1)).to({y:73.3},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.6,125.3);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ36();
	this.instance.parent = this;
	this.instance.setTransform(234.5,111.5,1,1,0,0,0,235.5,111.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:235.6,regY:111.6,scaleX:0.98,rotation:-1.5,x:238.4,y:117.6},19,cjs.Ease.get(-1)).to({regX:235.4,scaleX:0.95,rotation:-3.2,x:242.2,y:124.1},22,cjs.Ease.get(1)).to({regX:235.5,scaleX:0.98,rotation:-1.6,x:238.8,y:118.4},18,cjs.Ease.get(-1)).to({regY:111.5,scaleX:1,rotation:0,x:234.5,y:111.5},20,cjs.Ease.get(1)).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.5,295.5,1,1,0,0,0,164.5,164.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:164.6,scaleY:1.03,rotation:1.3,x:302.3,y:294.5},19,cjs.Ease.get(-1)).to({regY:164.6,scaleY:1.07,rotation:3,x:297.6,y:293.4},22,cjs.Ease.get(1)).to({scaleY:1.04,rotation:1.5,x:301.8,y:294.4},18,cjs.Ease.get(-1)).to({regX:164.5,regY:164.5,scaleY:1,rotation:0,x:306.5,y:295.5},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,472,460);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Режим изоляции
	this.instance = new lib.Символ28();
	this.instance.parent = this;
	this.instance.setTransform(460.9,10.2,0.442,0.442,0,0,0,69.5,112.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.8,-38.1,0.447,0.431,0,0,0,205.7,229.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Режим изоляции
	this.instance_2 = new lib.Символ27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(466.7,51.7,0.46,0.46,0,0,0,271.9,260.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Режим изоляции
	this.instance_3 = new lib.Символ29();
	this.instance_3.parent = this;
	this.instance_3.setTransform(397.2,135.9,0.38,0.38,0,0,0,280.2,167.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(284.3,-156.9,307.3,395.3), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(120,149.2,0.42,0.42,0,0,0,285.9,355.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EC549").s().p("EgtXA/IMAAAh+PMBavAAAMAAAB+Pg");
	this.shape.setTransform(120,200,0.413,0.495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,240.1,400), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D93A96").s().p("AgnDIIAAmPIBPAAIAAGPg");
	this.shape.setTransform(-134,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8));

	// Слой 4
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(120,220,1,1,0,0,0,110.5,29);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:200,alpha:1},4).to({y:220,alpha:0},4).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},4).to({alpha:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,0,378,400);


(lib.Символ42копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.parent = this;
	this.instance.setTransform(-219.3,139.8,0.867,0.867,0,0,0,31.4,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17.2,266.6,342.8);


(lib.Символ42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ22();
	this.instance.parent = this;
	this.instance.setTransform(-63.7,122.3,0.403,0.403,0,0,0,60.5,62.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({regX:60.4,regY:62.6},0).to({regX:60.3,regY:62.7,x:-25.9,y:120.2},6,cjs.Ease.get(-1)).to({regX:60.5,x:24.4,y:117.3},8,cjs.Ease.get(1)).wait(15).to({regY:62.8,rotation:-15,x:47.7,y:125.4},4).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regY:62.7,rotation:0,x:24.4,y:117.3},4).wait(7).to({regY:62.8,rotation:-15,x:90.2,y:119.8},4).to({regX:60.6,regY:63,rotation:0,y:119.9},3).to({regX:60.5,regY:62.8,rotation:-15,y:119.8},2).to({regX:60.6,regY:63,rotation:0,y:119.9},3).to({regX:60.5,regY:62.8,rotation:-15,y:119.8},2).to({regY:62.7,rotation:0,x:24.4,y:117.3},4).wait(6).to({regY:62.8,rotation:-15,x:47.7,y:125.4},4).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regX:60.6,regY:63,rotation:0,y:125.5},3).to({regX:60.5,regY:62.8,rotation:-15,y:125.4},2).to({regY:62.7,rotation:0,x:24.4,y:117.3},4).wait(88));

	// Слой 1
	this.instance_1 = new lib.Символ19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-219.3,139.8,0.867,0.867,0,0,0,31.4,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-17.2,354.7,342.8);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.Символ21();
	this.instance.parent = this;
	this.instance.setTransform(-55.3,-22.1,0.405,0.405,30,0,0,49.7,35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(233).to({_off:false},0).to({regX:49.9,regY:34.8,rotation:29.9,x:18.9,y:-5.9},7,cjs.Ease.get(-1)).to({regX:49.8,regY:34.9,rotation:30,x:114.3,y:14.8},9,cjs.Ease.get(1)).to({_off:true},1).wait(115));

	// Слой 3
	this.instance_1 = new lib.Символ33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-53.9,-14.7,0.405,0.405,0,0,0,54.3,52);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(233).to({_off:false},0).to({regY:51.8,x:20.3,y:1.4},7,cjs.Ease.get(-1)).to({regY:52.1,x:115.7,y:22.1},9,cjs.Ease.get(1)).wait(70).to({regY:52,y:2.6},5).wait(32).to({y:-2.4},0).to({regY:51.8,x:-10.7},3,cjs.Ease.get(-1)).to({regY:52,x:-179.3},5,cjs.Ease.get(1)).wait(1));

	// Слой 2
	this.instance_2 = new lib.Символ35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-132,125,1,1,0,0,0,110,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({x:158},15).wait(160).to({y:105},5).wait(32).to({x:55.2},3,cjs.Ease.get(-1)).to({x:-82},5,cjs.Ease.get(1)).wait(1));

	// Слой 5
	this.txt = new lib.Символ5();
	this.txt.parent = this;
	this.txt.setTransform(166.9,280,0.949,0.949,0,0,0,110.1,26.1);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(365));

	// Слой 1
	this.instance_3 = new lib.Символ42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(93.7,154.3,1,1,0,0,0,23.7,154.3);

	this.instance_4 = new lib.Символ42копия();
	this.instance_4.parent = this;
	this.instance_4.setTransform(323.7,154.3,1,1,0,0,0,23.7,154.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({regX:23.8,regY:154.2,scaleX:1.22,scaleY:1.22,x:83.5,y:154.4},40).wait(95).to({x:436.5},15).to({_off:true},197).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(356).to({_off:false},0).to({x:225.2},3,cjs.Ease.get(-1)).to({x:93.7},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239,-18.8,575.6,344.5);


// stage content:
(lib.asepta_240400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		document.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
		
		
		stage.canvas.addEventListener("mouseover", fl_mouseover.bind(this));
		function fl_mouseover()
		{
		this.pop_up.gotoAndPlay(1);
		}
		
		stage.canvas.addEventListener("mouseout", fl_mouseout.bind(this));
		
		function fl_mouseout()
		{
		this.pop_up.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// web
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(194.3,20.9,1,1,0,0,0,38.7,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// pop_up
	this.pop_up = new lib.Символ11();
	this.pop_up.parent = this;
	this.pop_up.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.pop_up).wait(1));

	// logo
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.8,38.9,0.551,0.551,0,0,0,62,51.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.instance_2 = new lib.Символ31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.9,244.8,1,1,0,0,0,93.7,154.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bg
	this.instance_3 = new lib.Символ12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,200,575.6,416.2);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/golova.png?1490217163548", id:"golova"},
		{src:"images/pasta.png?1490217163548", id:"pasta"},
		{src:"images/rot.png?1490217163549", id:"rot"},
		{src:"images/u67.png?1490217163549", id:"u67"},
		{src:"images/y5.png?1490217163549", id:"y5"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
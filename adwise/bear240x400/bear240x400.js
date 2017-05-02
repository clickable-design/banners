(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Background.jpg", id:"Background"},
		{src:"images/Bear.png", id:"Bear"},
		{src:"images/bg1.png", id:"bg1"},
		{src:"images/bg2.png", id:"bg2"},
		{src:"images/Cup.png", id:"Cup"},
		{src:"images/dghdfgdtg5.png", id:"dghdfgdtg5"},
		{src:"images/fghjfdgndger5.png", id:"fghjfdgndger5"},
		{src:"images/Logo.png", id:"Logo"},
		{src:"images/nmvnfhmyj6.png", id:"nmvnfhmyj6"},
		{src:"images/xbncbmh545.png", id:"xbncbmh545"}
	]
};



// symbols:



(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Bear = function() {
	this.initialize(img.Bear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,489);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,519);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,519);


(lib.Cup = function() {
	this.initialize(img.Cup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,209);


(lib.dghdfgdtg5 = function() {
	this.initialize(img.dghdfgdtg5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,200);


(lib.fghjfdgndger5 = function() {
	this.initialize(img.fghjfdgndger5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,218);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.nmvnfhmyj6 = function() {
	this.initialize(img.nmvnfhmyj6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,196);


(lib.xbncbmh545 = function() {
	this.initialize(img.xbncbmh545);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,234);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF0000","#600000"],[0,1],0,-22.7,0,22.8).s().p("AuFEOQhWgBg9g8Qg7g8AAhWIAAh9QAAhWA7g8QA9g9BWAAIcLAAQBWAAA8A9QA8A8AABWIAAB9QAABWg8A8Qg8A8hWABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.9,-27,221.8,54);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK2BcIACgVIAKACQANAAAIgUIgShlIAcAAIAKBNQAFgQAKgPIAZguIAdAAIhABvQgIAPgEAFQgFAGgGADQgGADgJAAQgJAAgLgDgAHwAsQgNgMAAgWQAAgYAQgSQAQgTAfAAQAVAAAJAJQAIAIAAALQAAAJgGAHQgFAGgMACQAKADAFAGQAEAFAAAJQAAANgLAJQgMAKgZAAQgYAAgMgMgAIDAdQAGAGAOAAQAJAAAFgDQAFgDAAgGQAAgGgGgEQgFgDgHAAIgaAAQAAAMAFAHgAIKgYQgIAGgDANIAWAAQAPAAAGgEQAFgDAAgIQAAgFgEgDQgEgDgIAAQgNAAgIAHgAF5AvQgIgIAAgNQAAgPAJgJQAJgHAYgCQAUgCAHgCIABgJQAAgFgDgDQgEgDgHAAQgHAAgFADQgEADgCAGIgbgCQAFgOALgIQAMgIATAAQAUAAAKAIQAJAIAAAMIAAAKIgGAaQgEASAAAIQAAAGACAIIgbAAIgCgLQgGAGgIAEQgIAEgJAAQgMAAgJgJgAGrAGQgVADgGAFQgFADAAAGQAAAFAEADQADAEAGAAQAGAAAGgDQAFgDADgFQADgFACgKIABgEgABfAsQgMgMAAgVQAAgPAHgPQAHgPAOgIQAPgJARAAQASAAALAKQALAJABAQIgbADQAAgJgFgEQgEgEgHAAQgIAAgHAGQgHAGgEAMQgEAKAAALQAAAJAFAFQAEAFAHAAQAHAAAGgFQAGgFAEgKIAbAFQgHASgNAJQgNAKgSAAQgTAAgMgMgAl0AvQgIgIAAgNQAAgPAJgJQAJgHAYgCQAUgCAHgCIABgJQAAgFgDgDQgEgDgHAAQgHAAgFADQgEADgCAGIgbgCQAFgOALgIQAMgIATAAQAUAAAKAIQAJAIAAAMIAAAKIgGAaQgEASAAAIQAAAGACAIIgbAAIgCgLQgGAGgIAEQgIAEgJAAQgMAAgJgJgAlCAGQgVADgGAFQgFADAAAGQAAAFAEADQADAEAGAAQAGAAAGgDQAFgDADgFQADgFACgKIABgEgAoGA1IAEgXIALABQAHAAADgFQADgEADgPIAMg3IBYAAIgWBlIgbAAIARhQIgjAAIgMA1QgDAQgIAHQgJAHgOAAQgHAAgLgDgApYArQgNgOAAgWQAAgTAMgQQAQgXAeAAQATAAALAMQAMAMAAAVQAAAIgCAIIhHAAIAAADQAAAKAGAGQAGAHAJAAQAOAAAHgPIAaAEQgIAQgMAHQgMAIgQAAQgUAAgOgNgAo9gYQgHAGgDANIAsAAIAAgDQAAgLgFgGQgFgGgJAAQgJAAgGAHgArSAsQgOgLAAgWQAAgYARgTQARgTAZAAQAJAAAHADQAHADAGAFIABgJQAAgPgHgFQgHgFgSAAIgNAAIAFgUIAJAAQAhAAALAMQALANAAAcQAAApgPAbQgQAdgiAAQgVAAgNgMgAq6gQQgKAPAAANQAAAKAGAGQAGAGAJAAQAPAAAJgQQAKgQAAgOQAAgJgFgEQgGgFgJAAQgQAAgJAOgAtaAoQgPgQAAgcQAAgYAKgVQAKgUASgLQARgKAVAAQAXAAAOAMQAPANACAVIgcADQgCgNgHgFQgHgGgLAAQgMAAgKAHQgLAIgGAQQgHAPAAAQQAAAPAJAKQAIAJAMAAQALAAAKgHQAJgIAFgOIAeAEQgJAYgRANQgSANgXAAQgaAAgPgQgAMwA1IAFgbIAcAAIgGAbgAKUA1IgIgeQgDgKgDgCQgDgCgHAAIgKAsIgbAAIAWhlIAbAAIgJAsQAIAAADgDQAEgDAFgKQALgTAHgFQAGgEAOAAIAIAAIgEATIgEAAQgEAAgCABIgFAHQgJAPgFAEQgFACgFABQAKACAFAPIAJAjgAE4A1IAQhLQAAgEgDgCQgDgDgFAAQgKAAgIALQgGAIgEASIgKAvIgcAAIAPhLQAAgEgDgCQgDgDgFAAQgEAAgFADQgFADgDAEQgEAFgDAIIgOA9IgcAAIAWhlIAaAAIgCAMQAPgPARAAQAMAAAGAFQAHAFABAIQAGgHAKgGQAKgFALAAQAMAAAHAHQAHAGAAALIgDATIgNA9gAheA1IAWhlIAcAAIgJArIAgAAQARAAAHAFQAIAFAAANQAAAQgKAKQgJAJgVAAgAg+AkIAUAAQAPAAAGgEQAGgDAAgHQAAgHgFgDQgGgDgQAAIgPAAgAiVA1IAQhLQAAgEgCgCQgDgDgFAAQgLAAgIALQgGAIgEASIgKAvIgcAAIAPhLQAAgEgCgCQgDgDgFAAQgFAAgEADQgFADgEAEQgEAFgCAIIgOA9IgcAAIAWhlIAaAAIgDAMQAQgPARAAQALAAAHAFQAGAFACAIQAFgHAKgGQAKgFALAAQANAAAHAHQAGAGAAALIgCATIgOA9gAM9ARIAPhpIAeAAIgIAkIgWBFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.4,-9.6,174.9,19.2);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.7,-21.6,127.5,43.3);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAsDMQgOgJgGgOQgFgNgBgOQAAgNAFgOQAEgTAKgNQAKgOAQgJQAQgHATgBQAbAAARARQAQARAAAbQAAAXgLAVQgKAUgTAMQgSAMgXAAQgUgBgNgIgAA9BtQgOAUAAAYQABAPAIAKQAJAKAPAAQAMAAALgIQALgIAIgQQAGgPAAgQQAAgRgJgKQgIgJgPAAQgVAAgOAUgAj7DFQgPgQAAgeQABgYAJgVQALgUARgLQASgLAUAAQAYAAAOANQAOAMADAWIgcADQgDgNgGgFQgIgGgKAAQgNAAgKAHQgLAIgGAPQgHAQABAQQgBARAJAKQAIAJANAAQAKAAAKgIQAJgHAGgOIAdAEQgIAYgSANQgSANgWAAQgbAAgPgQgAItDSIAGgbIAbAAIgFAbgAGkDSIAeiPIBqAAIgFAYIhNAAIgHAhIBKAAIgEAXIhLAAIgJAnIBUAAIgGAYgAFLDSIAZh3IgqAAIAEgYIByAAIgGAYIgpAAIgZB3gACkDSIAfiPIA6AAQAPAAAKAEQAJADAEAIQAGAJAAAMQAAALgEAKQgFAKgGAHQgFAFgHAEQgIADgLABIgaABIgTAAIgMA3gADSCEIAJAAQAYAAAIgDQAHgDAFgHQAEgGABgIQgBgFgCgDQgCgDgEgCQgFgBgOgBIgVAAgAgvDSIAZh3Ig3AAIgaB3IgdAAIAfiPIBvAAIgcCPgAl5DSIgFgfIg5AAIgRAfIgeAAIBRiPIAgAAIAXCPgAmCCaIgIg5IgjA5IArAAgAoXDSIAOhAIg3AAIgOBAIgeAAIAeiPIAeAAIgMA3IA4AAIAMg3IAdAAIgeCPgAI6CtIAPhqIAeAAIgHAkIgXBGgAhlgmQgOgJgGgOQgGgNABgOQAAgNADgOQAGgSAKgOQAKgOAPgIQAPgIAVAAQAaAAAQAQQAPARAAAbQAAAXgLAVQgJAVgRALQgTAMgXAAQgUAAgNgJgAhUiFQgOAVAAAYQAAAPAJAKQAKAKAOAAQAMAAALgJQALgIAHgPQAIgQgBgPQABgRgKgKQgJgJgOAAQgWAAgNATgAmWhAIAcgJQABAIAHAGQAHAGALAAQALAAAJgGQAJgGAAgKQAAgJgHgFQgHgEgLgBIgHABIAFgZIALABQAKAAAHgGQAIgGAAgIQAAgHgHgFQgFgDgIAAQgUAAgFARIgbgHQAGgTAOgIQAPgIARAAQAUAAAPAKQAPALAAARQAAAMgIAKQgHAJgPAEQAKAGAGAHQAEAIAAALQAAARgPANQgQANgbAAQgvAAgHgjgAJyggIAUhZIhPBZIgbAAIAeiPIAbAAIgSBZIBNhZIAcAAIgeCPgAGWggIAeiPIBqAAIgEAYIhOAAIgGAhIBKAAIgFAXIhKAAIgJAoIBTAAIgFAXgAE9ggIAZh3IgqAAIAFgYIBxAAIgFAYIgqAAIgYB3gADvggIgFgfIg5AAIgRAfIgeAAIBQiPIAhAAIAYCPgADnhXIgJg5IgiA5IArAAgAASggIAfiPIBpAAIgFAYIhMAAIgaB3gAkVggIAfiPIBnAAIgGAYIhJAAIgGAeIAXAAQAXABALAEQALADAGAKQAGAKAAANQAAAWgPANQgPANgcAAgAjyg3IAdAAQANAAAGgBQAHgDAFgFQAEgFAAgJQAAgGgDgFQgEgFgGgBQgGgBgMgBIgYAAgAnDggIgFgfIg5AAIgRAfIgeAAIBRiPIAgAAIAYCPgAnLhXIgJg5IgjA5IAsAAgAqrggIAeiPIA7AAQAPAAAJAEQAJAEAFAIQAGAJAAALQAAALgFALQgEAKgGAGQgGAGgHADQgHADgMACIgaABIgTAAIgMA2gAp9huIAJAAQAXAAAIgDQAIgDAFgGQAEgHAAgHQAAgGgDgDQgCgDgEgCQgEgBgPAAIgVAAgAJki+QgHgHgCgPIAOAAQACAIADAEQAFADAFAAQAMAAAHgPIAOAAQgEAOgKAIQgIAHgMAAQgLAAgIgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.4,-21.3,136.9,42.6);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.3,-19.7,98.7,39.6);


(lib.Символ25 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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BIAIgEIAGgHQAEgEACgGQACgEACgLIALgxIAcAAIgXBoIgaAAIAEgOQgSAQgUAAQgNAAgHgHgAAFhOQgLgNgBgWQABgVAJgRQARgWAeAAQASAAAMALQALAMAAAVQAAAKgCAJIhHAAIAAACQAAAKAHAHQAFAGAJAAQAOAAAIgOIAZAEQgHAPgNAIQgMAHgQAAQgUAAgNgNgAAfiTQgHAHgDAMIAsAAIAAgCQAAgMgEgGQgGgFgJAAQgIAAgHAGgAhyhNQgMgMAAgVQAAgaAQgTQAQgSAfAAQAVAAAIAIQAJAIAAALQAAAKgGAGQgGAHgMAEQALADAEAFQAFAGAAAIQAAANgMAKQgMAJgZAAQgXAAgNgMgAhehcQAFAHAPAAQAJAAAEgDQAFgDABgGQAAgGgGgEQgFgEgHAAIgaAAQgBANAGAGgAhYiTQgHAHgDANIAVAAQAQAAAGgEQAFgEAAgHQAAgGgEgCQgEgDgIAAQgNAAgJAGgAjihHQgLgGgGgKQgFgLgBgMQAAgdARgRQAQgRAbAAQAWAAAOAMQANANgBAVQAAAZgQATQgQASgbAAQgPAAgLgGgAjOiTQgHAGgDALQgFAKAAAJQAAALAHAHQAGAHAJAAQALAAAJgKQALgOgBgUQABgKgHgGQgFgGgJAAQgJAAgIAFgAnXhKQgKgKAAgMQAAgIAEgHQAFgGAGgDQAIgEATgFQAUgFAFgCQAEgDAAgGQAAgEgDgCQgEgCgHAAQgPAAgEALIgYgEQAIgbAfAAQAXAAAKAIQALAJgBAMQABANgKAHQgJAIgaAFQgRAFgEACQgFADAAAFQAAAFAFADQAFADAHAAQATAAAFgPIAaAEQgEAQgMAIQgNAHgWAAQgVAAgLgJgAHIhDIAWhoIAbAAIgVBogAFUhDIAWhoIAcAAIgJArIAgAAQARAAAJAGQAIAHAAANQAAAPgKAKQgMAKgUAAgAFzhVIAVAAQAPAAAGgDQAGgEAAgHQgBgHgFgCQgFgDgQAAIgPAAgAEdhDIAJgsIgnAAIgJAsIgcAAIAXhoIAcAAIgJAmIAmAAIAJgmIAbAAIgVBogACkhDIAJgsIgmAAIgKAsIgbAAIAWhoIAcAAIgIAmIAmAAIAJgmIAbAAIgWBogAkzhDIAJgsIgnAAIgKAsIgbAAIAWhoIAcAAIgIAmIAmAAIAIgmIAcAAIgWBogAoThDIAOhEIgnBEIgXAAIgKhFIgPBFIgXAAIAWhoIAiAAIALBIIAphIIAiAAIgXBogAIxi/QgGgHgDgPIAOAAQACAIAEADQADAEAHAAQALAAAIgPIAMAAQgEAOgIAHQgKAIgKAAQgMAAgIgHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78,-21.4,156.1,42.8);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHMBBQgIgHAAgNQAAgFAEgQIAMg4IAcAAIgPBJQAAAFADADQADADAFAAQAEAAAEgBIAHgEIAHgHQADgEADgGQACgEACgLIAKgvIAcAAIgWBmIgaAAIADgOQgRAQgUAAQgNAAgHgHgADyA8QgNgMAAgVQAAgaAQgRQAQgSAfAAQAVAAAJAIQAIAIAAALQAAAIgGAGQgFAHgMAEQAKADAFAFQAEAGAAAIQAAANgLAKQgMAJgZAAQgYAAgMgMgAEFAtQAGAHAOAAQAJAAAFgDQAFgDAAgGQAAgGgGgEQgFgEgHAAIgaAAQAAANAFAGgAEMgIQgIAHgDALIAWAAQAPAAAGgEQAFgEAAgFQAAgGgEgCQgEgDgIAAQgNAAgIAGgAB7BAQgIgJAAgNQAAgPAJgJQAJgJAYgBQAUgCAHgCIABgIQAAgEgDgDQgEgDgHAAQgHAAgFADQgEADgCAFIgbgCQAFgOALgIQAMgHATAAQAUAAAKAIQAJAIAAALIAAAIIgGAcQgEATAAAHQAAAHACAIIgbAAIgCgMQgGAHgIAEQgIADgJAAQgMAAgJgIgACtAXQgVACgGAFQgFAEAAAGQAAAEAEAEQADADAGAAQAGAAAGgDQAFgDADgFQADgFACgKIABgEgAidA8QgMgLAAgVQAAgRAHgNQAHgPAOgJQAPgIARAAQASAAALAJQALAKABAPIgbABQAAgGgFgFQgEgEgHAAQgIAAgHAGQgHAGgEALQgEAMAAAKQAAAJAFAFQAEAFAHAAQAHAAAGgFQAGgFAEgJIAbAEQgHASgNAKQgNAJgSAAQgTAAgMgMgAlDA7QgNgNAAgWQAAgVAMgPQAQgWAeAAQATAAALALQAMAMAAATQAAAKgCAJIhHAAIAAACQAAAKAGAHQAGAGAJAAQAOAAAHgOIAaAEQgIAPgMAIQgMAHgQAAQgUAAgOgNgAkogIQgHAHgDAKIAsAAIAAgCQAAgKgFgGQgFgFgJAAQgJAAgGAGgAGWBGIgIgfQgDgJgDgCQgDgDgHAAIgKAtIgbAAIAWhmIAbAAIgJAqQAIAAADgDQAEgCAFgIQALgUAHgEQAGgFAOAAIAIAAIgEATIgEAAQgEAAgCACIgFAHQgJANgFADQgFAEgFABQAKACAFAQIAJAjgAA6BGIAQhLQAAgEgDgDQgDgCgFAAQgKAAgIALQgGAGgEAUIgKAvIgaAAIANhLQAAgEgDgDQgDgCgFAAQgCAAgFACQgFADgDAFQgEAEgDAGIgOBAIgcAAIAWhmIAaAAIgCANQAPgPAPAAQAMAAAGAEQAHAFABAJQAGgIAKgFQAKgFALAAQAMAAAHAGQAHAHAAALIgDAQIgNBAgAmnBGIgUhmIAbAAIALBEIAohEIAeAAIg/BmgAn6BGIAWhmIAcAAIgWBmgAoxBGIAeiNIAbAAIgdCNgAnhguIAFgZIAcAAIgFAZg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.2,-7.2,112.6,14.6);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.xbncbmh545();
	this.instance.setTransform(-42.7,-41.6,0.356,0.356);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-41.6,85.5,83.3);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.nmvnfhmyj6();
	this.instance.setTransform(-35.7,-34.8,0.356,0.356);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.7,-34.8,71.6,69.8);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.dghdfgdtg5();
	this.instance.setTransform(-35.7,-35.6,0.356,0.356);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.7,-35.6,71.6,71.2);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fghjfdgndger5();
	this.instance.setTransform(-43,-38.8,0.356,0.356);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43,-38.8,86.2,77.6);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEHAuQgHgHAAgMQAAgGAEgQIALg3IAcAAIgOBJQAAAEACADQAEAEAFAAQAEAAAEgCIAHgEIAHgHQADgDACgGQACgFACgIIALgxIAcAAIgWBlIgaAAIADgOQgSARgTAAQgNAAgIgIgAAtAqQgMgMAAgWQAAgYAQgSQAQgTAfAAQAVAAAIAJQAJAIAAALQAAAJgGAHQgGAGgMADQALACAEAGQAFAFAAAJQAAANgMAJQgMAKgZAAQgXAAgNgMgABBAbQAFAGAPAAQAJAAAEgDQAFgDABgGQAAgGgGgEQgFgDgHAAIgaAAQgBAMAGAHgABHgaQgHAGgDANIAVAAQAQAAAGgEQAFgDAAgIQAAgFgEgDQgEgDgIAAQgNAAgJAHgAhHAtQgIgIgBgNQAAgPAKgJQAJgHAYgCQATgCAIgCIABgJQAAgFgEgDQgDgDgHAAQgHAAgFADQgEADgCAGIgcgCQAGgOALgIQALgIAUAAQAUAAAIAIQAJAIAAAMIAAAKIgHAaQgDASAAAIQAAAGACAIIgZAAIgCgLQgHAGgIAEQgHAEgJAAQgMAAgJgJgAgVAEQgVADgHAFQgEADAAAGQAAAFADADQAEAEAFAAQAHAAAGgDQAFgDADgFQADgFACgKIAAgEgAlhAqQgMgMAAgVQAAgPAHgPQAHgPAOgIQAPgJARAAQARAAALAKQAMAJABAQIgbADQAAgJgFgEQgFgEgGAAQgIAAgIAGQgHAGgDAMQgEAKAAALQAAAJAFAFQAEAFAGAAQAIAAAGgFQAGgFAEgKIAbAFQgHASgOAJQgNAKgRAAQgUAAgLgMgADRAzIgIgeQgCgKgDgCQgDgCgHAAIgKAsIgbAAIAWhlIAbAAIgKAsQAJAAADgDQADgDAGgKQALgTAGgFQAHgEAOAAIAHAAIgDATIgEAAQgEAAgCABIgGAHQgIAPgFAEQgFADgFABQAKABAEAPIAKAjgAiIAzIAPhLQAAgEgCgCQgDgDgFAAQgKAAgJALQgGAIgEASIgKAvIgbAAIAPhLQAAgEgDgCQgDgDgFAAQgEAAgFADQgFADgEAEQgEAFgCAIIgOA9IgcAAIAWhlIAaAAIgDAMQAQgPARAAQAMAAAGAFQAHAFABAIQAGgHAJgGQALgFALAAQAMAAAHAHQAHAGAAALIgDATIgNA9g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.6,-5.4,73.3,10.9);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkQBZIAeiNIAbAAIgDAKQAIgGAIgEQAHgCAJAAQAQgBAKALQAKAMAAAWQAAAagRATQgOARgVAAQgUAAgLgRIgLA2gAjUgdQgGAGgEALQgDALAAAHQAAAMAFAGQAGAHAIAAQAIAAAGgFQAGgGAFgLQAEgKAAgJQAAgMgFgGQgHgHgIAAQgIABgHAFgAGaAnQgNgNAAgXQAAgSAMgRQAQgXAeABQATAAALALQALAMAAAVQAAAKgBAHIhHAAIAAACQAAAKAGAHQAGAGAIAAQAOAAAIgPIAaAEQgIAQgNAIQgLAHgQAAQgVAAgNgNgAG1gcQgIAHgCAMIAsAAIAAgCQAAgMgFgGQgGgFgIgBQgJABgGAGgAgBApQgOgMAAgWQAAgYAPgSQARgUAZABQAJgBAGADQAIADAGAFIAAgJQABgPgIgEQgGgGgSAAIgNAAIACgKIA1AAIADACQALANAAAcQAAAqgQAbQgPAcgjAAQgUAAgLgLgAAUgTQgJAOAAANQAAAKAGAHQAFAFAKAAQAPAAAJgQQAJgOAAgQQAAgJgEgEQgGgFgJAAQgQAAgKAPgAhzAuQgLgGgGgLQgFgKAAgMQAAgbAQgRQARgSAaABQAXAAANAMQANANAAAVQAAAXgQATQgQASgcAAQgOAAgMgGgAhegcQgHAGgEALQgEAKAAAHQAAALAGAHQAGAGAJAAQAMAAAIgKQALgOAAgRQAAgLgGgFQgGgHgJAAQgJABgHAFgAltAsQgIgJAAgNQAAgPAJgHQAKgJAXgBQAUgCAHgDIABgJQABgEgEgEQgEgDgGAAQgIAAgFADQgEAEgBAFIgcgCQAFgOALgIQAMgHAUAAQATgBAKAJQAJAHAAAMIAAAKIgGAaQgEATAAAHQAAAHACAIIgbAAIgCgMQgGAGgIAEQgIAEgIAAQgNAAgJgIgAk6ACQgWADgGAFQgFAEAAAFQAAAFAEADQADAEAGAAQAHAAAFgDQAGgDACgFQADgFADgKIAAgEgAFTAyIAWhmIAbAAIgVBmgADfAyIAWhmIAcAAIgJArIAgAAQARAAAJAGQAIAEAAAOQAAAPgKAKQgMAKgUAAgAD+AgIAVAAQAPAAAGgEQAGgDAAgHQgBgHgFgDQgFgCgQAAIgPAAgACoAyIAJgsIgnAAIgJAsIgcAAIAXhmIAcAAIgJAmIAmAAIAJgmIAbAAIgVBmgAmtAyIAJgsIgmAAIgKAsIgbAAIAVhmIAcAAIgIAmIAnAAIAIgmIAcAAIgXBmg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.7,-8.9,99.4,17.9);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAFIADgIIAIAAQAcAAAMAIg");
	this.shape.setTransform(-14.3,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag5BSQgVgWAAgrQAAghAOgcQAOgdAZgPQAZgQAbAAQAhAAAUASQAVASAEAeIgpAEQgDgSgKgHQgJgIgQAAQgRAAgNAKQgPALgJAWQgJAWAAAVQAAAYAMAOQALANAQAAQAQAAAOgLQANgKAGgVIArAHQgNAigYASQgZASggAAQgkAAgVgXgAkGBSQgVgWAAgrQAAghAOgcQAOgdAZgPQAZgQAdAAQAhAAAUASQAVASAEAeIgpAEQgDgSgJgHQgKgIgQAAQgRAAgPAKQgPALgJAWQgJAWAAAVQAAAYAMAOQALANASAAQAQAAAOgLQANgKAHgVIAqAHQgNAigYASQgZASghAAQglAAgVgXgAnhBlIAFggIAQACQAIAAAJgDQAJgDANgWIgtiPIAvAAIAaBmIBHhmIAtAAIh8CpQgQAWgLAGQgLAHgPAAQgRAAgKgDgAHoBlIArjJICWAAIgHAiIhtAAIgJAuIBpAAIgHAgIhpAAIgNA3IB2AAIgHAigAGXBlIAbh9IhvB9IgnAAIAsjJIAnAAIgbB8IBuh8IAnAAIgrDJgADYBlIgRg/IgFgNQgGgMgSAAIgTBYIgpAAIArjJIAqAAIgTBWQAMAAAHgFQAGgFAOgXQAPgZAIgKQAIgKAKgEQAJgEAVAAIALAAIgJAeIgHAAQgIAAgEADQgEACgFAKQgRAegJALQgKALgMADQAVAEAGAeIAUBDgAqoBlIAqjJIBTAAQAWAAANAFQANAFAHAMQAIAMAAARQAAAPgGAPQgGAPgJAGQgJAJgKAFQgKAEgRACQgKACgbAAIgaAAIgQBNgApngIIANAAQAhAAALgEQALgEAGgKQAHgIAAgMQAAgHgEgFQgDgEgGgCQgGgDgUAAIgeAAg");
	this.shape_1.setTransform(0,-1.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.1,-12.4,136.4,24.9);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.setTransform(-126.7,-1038);

	this.instance_1 = new lib.bg1();
	this.instance_1.setTransform(-126.7,-519);

	this.instance_2 = new lib.bg2();
	this.instance_2.setTransform(-127.2,0);

	this.instance_3 = new lib.bg1();
	this.instance_3.setTransform(-126.7,519);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.2,-1038,254.5,2076);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.setTransform(-122.2,-1038);

	this.instance_1 = new lib.bg1();
	this.instance_1.setTransform(-126.7,-519);

	this.instance_2 = new lib.bg2();
	this.instance_2.setTransform(-127.2,0);

	this.instance_3 = new lib.bg1();
	this.instance_3.setTransform(-126.7,519);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.2,-1038,254.5,2076);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bg2();
	this.instance.setTransform(-127,-1038);

	this.instance_1 = new lib.bg1();
	this.instance_1.setTransform(-127,-519);

	this.instance_2 = new lib.bg2();
	this.instance_2.setTransform(-127,0);

	this.instance_3 = new lib.bg1();
	this.instance_3.setTransform(-127,519);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127,-1038,254,2076);


(lib.Анимация5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Bear();
	this.instance.setTransform(-110.2,-179.6,0.735,0.735);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.2,-179.6,220.4,359.2);


(lib.Анимация3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Cup();
	this.instance.setTransform(-67.5,-104.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-104.5,135,209);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ37();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.9,-27,221.8,54);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ31();
	this.instance.setTransform(0,-22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.4,-43.8,136.9,42.6);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ19();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.7,-34.8,71.6,69.8);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ21();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-41.6,85.5,83.3);


(lib.Символ20 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ25();
	this.instance.setTransform(-1.2,64.3);

	// Слой 1
	this.instance_1 = new lib.Символ24();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.3,-34.8,156.1,120.6);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ23();
	this.instance.setTransform(0.2,58.6);

	// Слой 1
	this.instance_1 = new lib.Символ17();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-35.6,112.6,101.5);


(lib.Символ16 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ33();
	this.instance.setTransform(-7.6,61.1);

	// Слой 1
	this.instance_1 = new lib.Символ15();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.4,-38.8,127.5,121.5);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 14
	this.instance = new lib.Символ14();
	this.instance.setTransform(-31.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({scaleX:0.88,scaleY:0.88,x:-27.9,y:20.8},5).to({scaleX:1,scaleY:1,x:-31.8,y:23.8},6).wait(20).to({scaleX:0.88,scaleY:0.88,x:-27.9,y:20.8},5).to({scaleX:1,scaleY:1,x:-31.8,y:23.8},6).wait(7));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-19.2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:0.88,scaleY:0.88,x:-16.9,y:4.1},5).to({scaleX:1,scaleY:1,x:-19.2,y:4.6},6).wait(26).to({scaleX:0.88,scaleY:0.88,x:-16.9,y:4.1},5).to({scaleX:1,scaleY:1,x:-19.2,y:4.6},6).wait(4));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(0.8,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.88,scaleY:0.88,x:0.7,y:-14.7},5).to({scaleX:1,scaleY:1,x:0.8,y:-16.7},6).wait(32).to({scaleX:0.88,scaleY:0.88,x:0.7,y:-14.7},5).to({scaleX:1,scaleY:1,x:0.8,y:-16.7},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-29.2,137.9,58.4);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация5("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-8},7,cjs.Ease.get(-1)).to({y:-16},7,cjs.Ease.get(1)).to({y:-8.5},7,cjs.Ease.get(-1)).to({y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.2,-179.6,220.4,359.2);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация3("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:8},7,cjs.Ease.get(-1)).to({y:16},7,cjs.Ease.get(1)).to({y:8.6},7,cjs.Ease.get(-1)).to({y:0},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-104.5,135,209);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();
	this.instance.setTransform(-26,-638);

	this.instance_1 = new lib.Символ4();
	this.instance_1.setTransform(-25.7,399.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},99).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-25.7,y:399.6},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.2,-1676,254.5,2076);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ36();
	this.instance.setTransform(0,0,0.83,0.83);

	// Слой 1
	this.instance_1 = new lib.Символ34();
	this.instance_1.setTransform(0,0,0.83,0.83);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92,-22.4,184.1,44.8);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(-41.1,-9.1,0.622,0.622);

	this.instance_1 = new lib.Символ18();
	this.instance_1.setTransform(50.4,-16.2,0.622,0.622);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.5,-38.4,171.1,80.7);


(lib.Символ26 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ22();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.7,-41.6,85.5,83.3);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(26,638);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.2,-1038,254.5,2076);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(-26,-638);

	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(-23,919);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},267).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-23,y:919},267).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.2,-1676,254.5,2076);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ28();
	this.instance.setTransform(0,68.9);

	// Слой 1
	this.instance_1 = new lib.Символ26();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.3,-41.6,98.7,130.3);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-37.5,-11.6,0.622,0.622);

	this.instance_1 = new lib.Символ27();
	this.instance_1.setTransform(56.2,-15.8,0.622,0.622);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86.9,-41.7,173.8,83.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 9
	this.instance = new lib.Символ35();
	this.instance.setTransform(157.4,39.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).to({x:-121.8},7).to({x:-109.8},3).wait(52).to({x:-93.8},3).to({x:-306.7},7).wait(4));

	// Слой 8
	this.instance_1 = new lib.Символ32();
	this.instance_1.setTransform(148.9,-17.2,1.331,1.331);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(178).to({_off:false},0).to({x:-125.8},6).to({x:-109.8},3).wait(54).to({x:-93.8},3).to({x:-413.8},6).wait(7));

	// Слой 7
	this.instance_2 = new lib.Символ30();
	this.instance_2.setTransform(184.4,20.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({x:-135.8},6).to({x:-119.8},3).wait(76).to({x:-87.8},3).to({x:-372.7},6).wait(76));

	// Слой 5
	this.instance_3 = new lib.Символ29();
	this.instance_3.setTransform(192.6,-83.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83).to({x:-126.4},7).to({x:-110.4},3).wait(76).to({x:-86.4},3).to({x:-318.6},6).to({x:-357.3},1).wait(78));

	// Bear.png
	this.instance_4 = new lib.Символ10();
	this.instance_4.setTransform(169.5,38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-67.7},9).wait(68).to({x:169.5},9).wait(171));

	// Cup.png
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(-251.9,-178.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-167.7},9).wait(68).to({x:-251.9},9).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.4,-282.9,599.1,500.9);


// stage content:



(lib.bear240x400 = function(mode,startPosition,loop) {
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ8();
	this.instance.setTransform(231.1,307.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ11();
	this.instance_1.setTransform(159.2,49.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2
	this.instance_2 = new lib.Logo();
	this.instance_2.setTransform(25.1,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ2();
	this.instance_3.setTransform(117.3,162.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Слой 1
	this.instance_4 = new lib.Background();
	this.instance_4.setTransform(0,-4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.7,-1313.4,599.1,2076);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
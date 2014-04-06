
function Priloader(elid, params) {

	this.params = params || {
		width : 36,
		height: 36
	}

	this.src = "spinner.png";

	this.elid = elid;
	this.el = document.getElementById(elid);
	this.el.style.display = "none";
	this.el.style.width = this.params.width+"px";
	this.el.style.height = this.params.height+"px";
	this.el.style.backgroundImage = "url('"+this.src+"')";
	this.el.style.backgroundRepeat = "no-repeat";
	this.el.style.backgroundPosition = "0% 0%";
	this.el.style.backgroundSize = "36px 36px";

	this.interval = 50;

	this.start = function(){
		var instance = this;
		this.el.style.display = "block";
		this.intervalID = setInterval(function(){
			instance.animate();			
		}, this.interval);
	}

	this.stop = function() {
		this.el.style.display = "none";
		clearInterval(this.intervalID);
	}

	this.deg = 0;
	this.animate = function() {
		this.deg = this.deg + 10 > 360 ? 0 : this.deg + 10;	
		this.el.style.webkitTransform = 'rotate('+this.deg+'deg)'; 
	    this.el.style.mozTransform    = 'rotate('+this.deg+'deg)'; 
    	this.el.style.msTransform     = 'rotate('+this.deg+'deg)'; 
	    this.el.style.oTransform      = 'rotate('+this.deg+'deg)'; 
    	this.el.style.transform       = 'rotate('+this.deg+'deg)'; 
	}
}

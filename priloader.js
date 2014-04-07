
function Priloader(elid, params) {

	params = params || {}
	this.params = {};

	this.params.size = params.size || 48;
	this.params.size = this.params.size > 168 ? 168 : this.params.size;
	this.params.size = this.params.size < 24 ? 24 : this.params.size;

	this.params.bgColor = params.bgColor || false;
	
	// speed goes from 1 to 5
	this.params.speed = params.speed || 3;
	this.params.speed = this.params.speed < 1 ? 1 : this.params.speed;
	this.params.speed = this.params.speed > 5 ? 5 : this.params.speed;
	
	// console.log(this.params);

	this.src = "spinner.png";
	this.interval = 80 - this.params.speed*10;

	this.elid = elid;
	this.el = document.getElementById(elid);
	this.el.style.width = this.params.size+"px";
	this.el.style.height = this.params.size+"px";

	this.container = document.createElement("div");
	this.container.setAttribute("class", "priloader-container");
	this.container.style.width = this.params.size+"px";
	this.container.style.height = this.params.size+"px";
	if(this.params.bgColor) {
		this.container.style.backgroundColor = this.params.bgColor;
	}
	this.el.appendChild(this.container);

	this.spinner = document.createElement("canvas");
	this.spinner.style.width = this.params.size+"px";
	this.spinner.style.height = this.params.size+"px";
	this.spinner.setAttribute("class","priloader-spinner");
	this.container.appendChild(this.spinner);

	this.img = new Image();
	this.img.src = this.src;
	
	var instance = this;
	this.img.onload = function() {
		var ctx=instance.spinner.getContext("2d");
			ctx.drawImage(instance.img, 0, 0);
	}
	
	/*
	this.spinner.style.backgroundImage = "url('"+this.src+"')";
	this.spinner.style.backgroundRepeat = "no-repeat";
	this.spinner.style.backgroundPosition = "0% 0%";
	this.spinner.style.backgroundSize = this.params.size+"px "+this.params.size+"px";
	this.container.appendChild(this.spinner);
	*/

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
		return;
		this.deg = this.deg + 10 > 350 ? 0 : this.deg + 10;	
		this.spinner.style.webkitTransform = 'rotate('+this.deg+'deg)'; 
	    this.spinner.style.mozTransform    = 'rotate('+this.deg+'deg)'; 
    	this.spinner.style.msTransform     = 'rotate('+this.deg+'deg)'; 
	    this.spinner.style.oTransform      = 'rotate('+this.deg+'deg)'; 
    	this.spinner.style.transform       = 'rotate('+this.deg+'deg)'; 
	}
}



function Priloader(elid, params) {

	params = params || {}
	this.params = {};
	this.params.width = params.width || 48;
	this.params.height = params.height || 48;
	this.params.bgColor = params.bgColor || false;
	console.log(this.params);
	this.src = "spinner.png";

	this.elid = elid;
	this.el = document.getElementById(elid);

	this.container = document.createElement("div");
	this.container.setAttribute("class", "priloader-container");
	this.container.style.width = this.params.width+"px";
	this.container.style.height = this.params.height+"px";
	if(this.params.bgColor) {
		this.container.style.backgroundColor = this.params.bgColor;
	}
	this.el.appendChild(this.container);

	this.spinner = document.createElement("div");
	this.spinner.setAttribute("class","priloader-spinner");
	this.spinner.style.width = this.params.width+"px";
	this.spinner.style.height = this.params.height+"px";
	this.spinner.style.backgroundImage = "url('"+this.src+"')";
	this.spinner.style.backgroundRepeat = "no-repeat";
	this.spinner.style.backgroundPosition = "0% 0%";
	this.spinner.style.backgroundSize = this.params.width+"px "+this.params.height+"px";

	this.container.appendChild(this.spinner);

	this.interval = 70;

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
		this.deg = this.deg + 10 > 350 ? 0 : this.deg + 10;	
		this.spinner.style.webkitTransform = 'rotate('+this.deg+'deg)'; 
	    this.spinner.style.mozTransform    = 'rotate('+this.deg+'deg)'; 
    	this.spinner.style.msTransform     = 'rotate('+this.deg+'deg)'; 
	    this.spinner.style.oTransform      = 'rotate('+this.deg+'deg)'; 
    	this.spinner.style.transform       = 'rotate('+this.deg+'deg)'; 
	}
}


priloader
=========

Simple javascript preloader animation, created to use on Android 2.3.x web apps because of .gif rare behavior

Usage
=====
Add the library to your html 
``` html
<script src="priloader.js"></script>
```

Create a to container the preloader
``` html
<div id="priloader2"></div>
```

Add the code
``` javascript
  var priloader = new Priloader("priloader2"); 
  // priloader.start() to start spinning
      priloader.start();
  // priloader.stop() to stop spinning
      peiloader.stop();
```

Settings & Defaults
=================
``` javascript
settings = {
  size: 48,
  bgColor: false,
  speed: 3
}

// settings are optional
var priloader = new Priloader("priloader2", settings); 
    priloader.start();
```

* `size`: width(height) of the preloader animation. Min. value: 24, Max. value: 168
* `bgColor`: background color of the preloader container. Set to false as default
* `speed`: animation speed. Min. value: 1, Max. value: 5

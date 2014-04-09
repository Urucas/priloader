priloader
=========

Simple javascript preloader animation, created to use on Android 2.3.x web apps because of .gif rare behavior

Demo
====
<a href="http://urucas.github.io/priloader/" target="_blank">http://urucas.github.io/priloader/</a>

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
  // priloader.start() to start spinning & shown
      priloader.start();
  // priloader.stop() to stop spinning & hide
      peiloader.stop();
```

Settings & Defaults
=================
``` javascript
// default settings
settings = {
  size: 48,
  bgColor: false,
  speed: 3,
  className: false,
  color: false
}

// your own settgins
settings = {
  size: 36,
  speed: 3,
  className: "myPreloader",
  color: "#fc5a17"
}

var priloader = new Priloader("priloader2", settings); 
    priloader.start();
```

* `size`: width(height) of the preloader animation. Min. value: 24, Max. value: 168
* `bgColor`: background color of the preloader container. Set to false as default
* `speed`: animation speed. Min. value: 1, Max. value: 5
* `className`: class to add in the main priloader container
* `color`: hex color for the spinner(webview must be support canvas)

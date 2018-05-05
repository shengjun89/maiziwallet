require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});
},{}],"Adapt":[function(require,module,exports){
var Adapt, Picker, base, getUrlVars, handler, isDesktop, key, makeOption, makeUrlString, readOnlyPropeties, value,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

getUrlVars = function() {
  var parts, vars;
  vars = {};
  parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    return vars[key] = value;
  });
  return vars;
};

makeUrlString = function(obj) {
  var key, string, value;
  string = "?";
  for (key in obj) {
    value = obj[key];
    string += key + "=" + value + "&";
  }
  string = string.slice(0, -1);
  return string;
};

makeOption = function(label, value) {
  var opt;
  if (value == null) {
    value = "none";
  }
  opt = document.createElement("option");
  opt.setAttribute("value", value);
  opt.innerHTML = label;
  return opt;
};

isDesktop = function() {
  if (/(tablet)|(iPad)|(Nexus 9)|(mobi)|(Android)/i.test(navigator.userAgent)) {
    return false;
  }
  return true;
};

Picker = {};

Picker._deviceList = {
  "iPad": {
    "apple-ipad-air-2-silver": "iPadAir2BaseDevice",
    "apple-ipad-air-2-gold": "iPadAir2BaseDevice",
    "apple-ipad-air-2-space-gray": "iPadAir2BaseDevice",
    "apple-ipad-mini-4-silver": "iPadMini4BaseDevice",
    "apple-ipad-mini-4-gold": "iPadMini4BaseDevice",
    "apple-ipad-mini-4-space-gray": "iPadMini4BaseDevice",
    "apple-ipad-pro-silver": "iPadProBaseDevice",
    "apple-ipad-pro-gold": "iPadProBaseDevice",
    "apple-ipad-pro-space-gray": "iPadProBaseDevice"
  },
  "iPhone": {
    "apple-iphone-7-gold": "iPhone7BaseDevice",
    "apple-iphone-7-rose-gold": "iPhone7BaseDevice",
    "apple-iphone-7-silver": "iPhone7BaseDevice",
    "apple-iphone-7-black": "iPhone7BaseDevice",
    "apple-iphone-7-jet-black": "iPhone7BaseDevice",
    "apple-iphone-7-plus-gold": "iPhone7PlusBaseDevice",
    "apple-iphone-7-plus-rose-gold": "iPhone7PlusBaseDevice",
    "apple-iphone-7-plus-silver": "iPhone7PlusBaseDevice",
    "apple-iphone-7-plus-black": "iPhone7PlusBaseDevice",
    "apple-iphone-7-plus-jet-black": "iPhone7PlusBaseDevice",
    "apple-iphone-6s-gold": "iPhone6BaseDevice",
    "apple-iphone-6s-rose-gold": "iPhone6BaseDevice",
    "apple-iphone-6s-silver": "iPhone6BaseDevice",
    "apple-iphone-6s-space-gray": "iPhone6BaseDevice",
    "apple-iphone-6s-plus-gold": "iPhone6PlusBaseDevice",
    "apple-iphone-6s-plus-rose-gold": "iPhone6PlusBaseDevice",
    "apple-iphone-6s-plus-silver": "iPhone6PlusBaseDevice",
    "apple-iphone-6s-plus-space-gray": "iPhone6PlusBaseDevice",
    "apple-iphone-5s-gold": "iPhone5BaseDevice",
    "apple-iphone-5s-silver": "iPhone5BaseDevice",
    "apple-iphone-5s-space-gray": "iPhone5BaseDevice",
    "apple-iphone-5c-blue": "iPhone5CBaseDevice",
    "apple-iphone-5c-green": "iPhone5CBaseDevice",
    "apple-iphone-5c-red": "iPhone5CBaseDevice",
    "apple-iphone-5c-white": "iPhone5CBaseDevice",
    "apple-iphone-5c-yellow": "iPhone5CBaseDevice"
  },
  "Apple Watch": {
    "apple-watch-series-2-38mm-black-steel-black": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-edition": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-rose-gold-aluminum-midnight-blue": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-silver-aluminum-cocoa": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-silver-aluminum-concrete": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-silver-aluminum-ocean-blue": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-silver-aluminum-red": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-silver-aluminum-turquoise": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-silver-aluminum-white": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-silver-aluminum-yellow": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-space-gray-aluminum-black": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-sport-aluminum-walnut": "AppleWatchSeries238Device",
    "apple-watch-series-2-38mm-steel-white": "AppleWatchSeries238Device",
    "apple-watch-series-2-42mm-edition": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-gold-aluminum-cocoa": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-rose-gold-aluminum-midnight-blue": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-concrete": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-green": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-light-pink": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-ocean-blue": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-pink-sand": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-red": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-turquoise": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-white": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-silver-aluminum-yellow": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-space-black-steel-black": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-space-gray-aluminum-black": "AppleWatchSeries242Device",
    "apple-watch-series-2-42mm-steel-white": "AppleWatchSeries242Device",
    "apple-watch-nike-plus-38mm-silver-aluminum-flat-silver-volt": "AppleWatchSeries238Device",
    "apple-watch-nike-plus-38mm-silver-aluminum-flat-silver-white": "AppleWatchSeries238Device",
    "apple-watch-nike-plus-38mm-space-gray-aluminum-black-cool-gray": "AppleWatchSeries238Device",
    "apple-watch-nike-plus-38mm-space-gray-aluminum-black-volt": "AppleWatchSeries238Device",
    "apple-watch-nike-plus-42mm-silver-aluminum-flat-silver-volt": "AppleWatchSeries242Device",
    "apple-watch-nike-plus-42mm-silver-aluminum-flat-silver-white": "AppleWatchSeries242Device",
    "apple-watch-nike-plus-42mm-space-gray-aluminum-black-cool-gray": "AppleWatchSeries242Device",
    "apple-watch-nike-plus-42mm-space-gray-aluminum-black-volt": "AppleWatchSeries242Device",
    "apple-watch-38mm-gold-black-leather-closed": "AppleWatch38BlackLeatherDevice",
    "apple-watch-38mm-rose-gold-black-leather-closed": "AppleWatch38BlackLeatherDevice",
    "apple-watch-38mm-stainless-steel-black-leather-closed": "AppleWatch38BlackLeatherDevice",
    "apple-watch-38mm-black-steel-black-closed": "AppleWatch38Device",
    "apple-watch-38mm-gold-midnight-blue-closed": "AppleWatch38Device",
    "apple-watch-38mm-rose-gold-lavender-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-blue-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-fog-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-green-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-red-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-walnut-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-white-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-gold-antique-white-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-aluminum-rose-gold-stone-closed": "AppleWatch38Device",
    "apple-watch-38mm-sport-space-gray-black-closed": "AppleWatch38Device",
    "apple-watch-42mm-black-steel-black-closed": "AppleWatch42Device",
    "apple-watch-42mm-gold-black-leather-closed": "AppleWatch42Device",
    "apple-watch-42mm-gold-midnight-blue-closed": "AppleWatch42Device",
    "apple-watch-42mm-rose-gold-black-leather-closed": "AppleWatch42Device",
    "apple-watch-42mm-rose-gold-lavender-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-blue-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-fog-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-green-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-red-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-walnut-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-white-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-gold-antique-white-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-aluminum-rose-gold-stone-closed": "AppleWatch42Device",
    "apple-watch-42mm-sport-space-gray-black-closed": "AppleWatch42Device",
    "apple-watch-42mm-stainless-steel-black-leather-closed": "AppleWatch42Device"
  },
  "Google": {
    "google-nexus-4": "Nexus4BaseDevice",
    "google-nexus-5x": "Nexus5BaseDevice",
    "google-nexus-6p": "Nexus6BaseDevice",
    "google-nexus-9": "Nexus9BaseDevice",
    "google-pixel-quite-black": "PixelBaseDevice",
    "google-pixel-really-blue": "PixelBaseDevice",
    "google-pixel-very-silver": "PixelBaseDevice"
  },
  "Misc handheld": {
    "htc-one-a9-black": "HTCa9BaseDevice",
    "htc-one-a9-white": "HTCa9BaseDevice",
    "htc-one-m8-black": "HTCm8BaseDevice",
    "htc-one-m8-gold": "HTCm8BaseDevice",
    "htc-one-m8-silver": "HTCm8BaseDevice",
    "microsoft-lumia-950-black": "MSFTLumia950BaseDevice",
    "microsoft-lumia-950-white": "MSFTLumia950BaseDevice",
    "samsung-galaxy-note-5-black": "SamsungGalaxyNote5BaseDevice",
    "samsung-galaxy-note-5-gold": "SamsungGalaxyNote5BaseDevice",
    "samsung-galaxy-note-5-pink": "SamsungGalaxyNote5BaseDevice",
    "samsung-galaxy-note-5-silver-titanium": "SamsungGalaxyNote5BaseDevice",
    "samsung-galaxy-note-5-white": "SamsungGalaxyNote5BaseDevice"
  },
  "Other": {
    "apple-macbook": "AppleMacBook",
    "apple-macbook-air": "AppleMacBookAir",
    "apple-macbook-pro": "AppleMacBookPro",
    "dell-xps": "DellXPS",
    "apple-imac": "AppleIMac",
    "sony-w85Oc": "SonyW85OC"
  }
};

Picker.exclude = function(group) {
  var key, ref, value;
  if (group == null) {
    group = "";
  }
  ref = Picker._deviceList;
  for (key in ref) {
    value = ref[key];
    if (group.toLowerCase() === key.toLowerCase()) {
      value._excludeFromList = true;
    }
  }
  return Picker.enable();
};

Picker.include = function(group) {
  var key, match, ref, value;
  if (group == null) {
    group = "";
  }
  ref = Picker._deviceList;
  for (key in ref) {
    value = ref[key];
    if (group.toLowerCase() === key.toLowerCase()) {
      match = value._excludeFromList = false;
    }
  }
  return Picker.enable();
};

Picker.enable = function() {
  var base, device, devices, group, ref, results;
  if (window.FramerStudio || !isDesktop() || Framer.Device.deviceType === "fullscreen") {
    return;
  }
  if (!Picker._controlDiv) {
    Picker._controlDiv = document.createElement("div");
    Picker._controlDiv.setAttribute("style", "position: absolute; top: 10px; right: 10px; z-index: 9999; text-align: right");
    document.body.appendChild(Picker._controlDiv);
    Picker._deviceSelector = document.createElement("select");
    Picker._deviceSelector.setAttribute("style", "display: block");
    Picker._controlDiv.appendChild(Picker._deviceSelector);
    Picker._deviceSelector.onchange = function() {
      var vars;
      if (this.value === "none") {
        return;
      }
      vars = getUrlVars(window.location.href);
      vars.deviceType = this.value;
      return window.location.href = window.location.href.split("?")[0] + makeUrlString(vars);
    };
    Picker._rotateToggle = document.createElement("button");
    Picker._rotateToggle.setAttribute("type", "button");
    Picker._rotateToggle.setAttribute("style", "background-color: white; color: #333; padding: 0.5em 1em; border-radius: 3px");
    Picker._rotateToggle.innerHTML = "Rotate";
    Picker._controlDiv.appendChild(Picker._rotateToggle);
    Picker._rotateToggle.onclick = function() {
      var vars;
      vars = getUrlVars();
      if (!vars.orientation || vars.orientation === "0") {
        vars.orientation = "90";
      } else {
        vars.orientation = "0";
      }
      return window.location.href = window.location.href.split("?")[0] + makeUrlString(vars);
    };
  }
  Picker._deviceSelector.innerHTML = "";
  Picker._deviceSelector.appendChild(makeOption("Pick device"));
  ref = Picker._deviceList;
  results = [];
  for (group in ref) {
    devices = ref[group];
    if (!(devices._excludeFromList !== true)) {
      continue;
    }
    Picker._deviceSelector.appendChild(makeOption(" "));
    Picker._deviceSelector.appendChild(makeOption("# " + group));
    Picker._deviceSelector.appendChild(makeOption(" "));
    results.push((function() {
      var results1;
      results1 = [];
      for (device in devices) {
        base = devices[device];
        if (device !== "_excludeFromList") {
          results1.push(Picker._deviceSelector.appendChild(makeOption(device, device)));
        }
      }
      return results1;
    })());
  }
  return results;
};

Picker.disable = function() {
  if (Picker._controlDiv) {
    document.body.removeChild(Picker._controlDiv);
    return Picker._controlDiv = null;
  }
};

base = {};

base.evaluator = function() {
  return null;
};

base.setBreakpoints = function(breakpoints) {
  var bpArray, name, value;
  if (breakpoints == null) {
    breakpoints = {};
  }
  bpArray = [];
  for (name in breakpoints) {
    value = breakpoints[name];
    bpArray.push({
      name: name,
      value: value
    });
  }
  bpArray.sort(function(a, b) {
    return b.value - a.value;
  });
  return base.evaluator = function() {
    var bp, i, len, result;
    result = null;
    for (i = 0, len = bpArray.length; i < len; i++) {
      bp = bpArray[i];
      if (Screen.width <= bp.value) {
        result = bp.name;
      }
    }
    return result;
  };
};

base.check = function() {
  var key;
  key = base.evaluator();
  if (!key || typeof key !== "string") {
    key = "other";
  }
  return key;
};

base.picker = Picker;

base._values = {};

base.init = function() {
  var urlVars;
  if (isDesktop()) {
    urlVars = getUrlVars();
    if (urlVars.deviceType != null) {
      Framer.Device.deviceType = urlVars.deviceType;
    }
    if (urlVars.orientation != null) {
      return Framer.Device.orientation = parseInt(urlVars.orientation);
    }
  } else {
    return Framer.Device.deviceType = "fullscreen";
  }
};

readOnlyPropeties = [];

for (key in base) {
  value = base[key];
  if (key !== "evaluator") {
    readOnlyPropeties.push(key);
  }
}

handler = {
  set: function(target, prop, value) {
    if (prop === "evaluator") {
      if (!_.isFunction(value)) {
        return console.log("Adapt.evaluator has to be a function");
      } else {
        return target[prop] = value;
      }
    } else if (indexOf.call(readOnlyPropeties, prop) >= 0) {
      return console.log("Can't overwrite Adapt." + prop);
    } else {
      return target._values[prop] = value;
    }
  },
  get: function(target, prop, receiver) {
    var ref;
    if ((ref = target._values) != null ? ref[prop] : void 0) {
      return target._values[prop][target.check()] || target._values[prop];
    } else {
      return target[prop];
    }
  }
};

Adapt = new Proxy(base, handler);

Adapt.init();

exports.Adapt = Adapt;


},{}],"AnnounceBar":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.AnnounceBar = (function(superClass) {
  var n;

  extend(AnnounceBar, superClass);

  n = Screen.width / 750;

  function AnnounceBar(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      width: Screen.width,
      height: 80 * n
    });
    this.annouceTitle = new TextLayer({
      x: 56 * n,
      height: 80 * n,
      padding: 24,
      lineHeight: 1.3 * n,
      backgroundColor: "null",
      text: "Wheat wallet goddess festival activity...",
      fontSize: 24 * n,
      color: "#2D2929",
      fontWeight: 400,
      textAlign: "center"
    });
    this.annouceButton = new TextLayer({
      width: 80 * n,
      height: 80 * n,
      x: Align.right(-16),
      fontSize: 24 * n,
      lineHeight: 3.2,
      color: "#9e9e9e",
      text: "more",
      textAlign: "center",
      backgroundColor: "#FFF"
    });
    this.annouceIcon = new Layer({
      width: 40 * n,
      height: 40 * n,
      x: Align.left(24),
      image: "images/annoucebaricon.svg"
    });
    AnnounceBar.__super__.constructor.call(this, this.options);
    this.annouceTitle.parent = this;
    this.annouceTitle.y = Align.center;
    this.annouceButton.parent = this;
    this.annouceButton.y = Align.center;
    this.annouceIcon.parent = this;
    this.annouceIcon.y = Align.center;
    this.annouceButton.onTouchStart(this.TouchStart);
    this.annouceButton.onTouchEnd(this.TouchEnd);
    this.annouceButton.onTouchMove(this.TouchEnd);
  }

  AnnounceBar.prototype.TouchStart = function() {
    return this.annouceButton.brightness = 96;
  };

  AnnounceBar.prototype.TouchEnd = function() {
    return this.annouceButton.brightness = 100;
  };

  AnnounceBar.prototype.TouchMove = function() {
    return this.annouceButton.brightness = 100;
  };

  return AnnounceBar;

})(Layer);


},{}],"Button":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Button = (function(superClass) {
  var n;

  extend(Button, superClass);

  n = Screen.width / 750;

  function Button(options) {
    var base, base1;
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    if ((base = this.options).disabled == null) {
      base.disabled = false;
    }
    this.options.backgroundColor = "#F14676";
    this.options.width = 240 * n;
    this.options.height = 80 * n;
    if (this.options.disabled === true) {
      this.options.backgroundColor = "#bdbdbd";
    }
    this.label = new TextLayer({
      fontSize: 28 * n,
      color: "#FFF",
      textAlign: "center"
    });
    if ((base1 = this.label).mySuperSexyFont == null) {
      base1.mySuperSexyFont = "'Source Sans', sans serif";
    }
    Button.__super__.constructor.call(this, this.options);
    this.label.parent = this;
    this.label.x = Align.center;
    this.label.y = Align.center;
    this.onTouchStart(this.TouchStart);
    this.onTouchMove(this.TouchMove);
    this.onTouchEnd(this.TouchEnd);
  }

  Button.define('disabled', {
    get: function() {
      return this.options.disabled;
    },
    set: function(value) {
      this.options.disabled = value;
      if (this.options.disabled === true) {
        return this.backgroundColor = "#bdbdbd";
      } else {
        return this.backgroundColor = "#F14676";
      }
    }
  });

  Button.prototype.TouchStart = function() {
    return this.brightness = 90;
  };

  Button.prototype.TouchEnd = function() {
    return this.brightness = 100;
  };

  Button.prototype.TouchMove = function() {
    return this.brightness = 100;
  };

  return Button;

})(Layer);


},{}],"IconsNavBar":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.IconsNavBar = (function(superClass) {
  var n;

  extend(IconsNavBar, superClass);

  n = Screen.width / 750;

  function IconsNavBar(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      height: 160 * n
    });
    this.navIconPic = new Layer({
      width: 64 * n,
      height: 64 * n,
      backgroundColor: "null",
      image: "images/nav_icon01.svg",
      backgroundColor: "#F5F5F5"
    });
    this.navIconName = new TextLayer({
      height: 40 * n,
      fontSize: 24 * n,
      color: "#2D2929",
      text: "iconname",
      textAlign: "center"
    });
    IconsNavBar.__super__.constructor.call(this, this.options);
    this.navIconPic.parent = this;
    this.navIconPic.x = Align.center;
    this.navIconPic.y = 32 * n;
    this.navIconName.parent = this;
    this.navIconName.y = 112 * n;
    this.navIconName.width = this.width;
    this.onTouchStart(this.TouchStart);
    this.onTouchEnd(this.TouchEnd);
    this.onTouchMove(this.TouchEnd);
  }

  IconsNavBar.prototype.TouchStart = function() {
    return this.brightness = 90;
  };

  IconsNavBar.prototype.TouchEnd = function() {
    return this.brightness = 100;
  };

  IconsNavBar.prototype.TouchMove = function() {
    return this.brightness = 100;
  };

  return IconsNavBar;

})(Layer);


},{}],"ListWithIcon":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.ListWithIcon = (function(superClass) {
  var n;

  extend(ListWithIcon, superClass);

  n = Screen.width / 750;

  function ListWithIcon(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      height: 96 * n,
      width: Screen.width
    });
    this.list_name = new TextLayer({
      width: 328,
      height: 96 * n,
      lineHeight: 3.4,
      fontSize: 28 * n,
      fontFamily: "PingFang SC",
      fontWeight: 400,
      letterSpacing: 0.0,
      textAlign: "left",
      color: "rgba(32,32,32,1)"
    });
    this.list_icon = new Layer({
      width: 40 * n,
      height: 40 * n,
      backgroundColor: null,
      image: ""
    });
    this.list_arrow = new Layer({
      width: 9.5 * n,
      height: 19 * n,
      backgroundColor: null,
      image: "images/account/arrow.svg"
    });
    ListWithIcon.__super__.constructor.call(this, this.options);
    this.list_name.parent = this;
    this.list_name.y = Align.center;
    this.list_name.x = 120 * n;
    this.list_icon.parent = this;
    this.list_icon.y = 28 * n;
    this.list_icon.x = 44 * n;
    this.list_arrow.parent = this;
    this.list_arrow.y = Align.center;
    this.list_arrow.x = Align.right(-48);
    this.onTouchStart(this.TouchStart);
    this.onTouchEnd(this.TouchEnd);
    this.onTouchMove(this.TouchMove);
  }

  ListWithIcon.prototype.TouchStart = function() {
    return this.brightness = 90;
  };

  ListWithIcon.prototype.TouchEnd = function() {
    return this.brightness = 100;
  };

  ListWithIcon.prototype.TouchMove = function() {
    return this.brightness = 100;
  };

  return ListWithIcon;

})(Layer);


},{}],"LoanCard":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.LoanCard = (function(superClass) {
  var n;

  extend(LoanCard, superClass);

  n = Screen.width / 750;

  function LoanCard(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      width: Screen.width - 64,
      backgroundColor: "#FFF",
      height: 288 * n,
      x: Align.center
    });
    this.loanCardTitle = new TextLayer({
      x: 32,
      y: 40 * n,
      fontSize: 32 * n,
      fontFamily: "PingFang TC",
      color: "#212121",
      fontWeight: 500,
      lineHeight: 1,
      textAlign: "left",
      text: "加载卡片名称..."
    });
    this.loanCardSubtitle = new TextLayer({
      x: 32,
      fontSize: 24 * n,
      fontFamily: "PingFang TC",
      fontWeight: 400,
      color: "rgba(171,162,165,1)",
      text: "加载卡片描述...",
      textAlign: "left"
    });
    this.loanCardhan01 = new TextLayer({
      x: 32,
      text: "额度范围(元)",
      fontSize: 22 * n,
      fontFamily: "PingFang TC",
      fontWeight: 400,
      color: "rgba(171,162,165,1)",
      textAlign: "left"
    });
    this.loanCardhan02 = new TextLayer({
      text: "分期范围(期)",
      fontSize: 22 * n,
      fontFamily: "PingFang TC",
      fontWeight: 400,
      color: "rgba(171,162,165,1)",
      textAlign: "right"
    });
    this.loanCardLimit = new TextLayer({
      x: 32,
      text: "--",
      fontSize: 40 * n,
      fontFamily: "PingFang TC",
      fontWeight: 500,
      color: "rgba(227,69,61,1)",
      textAlign: "left"
    });
    this.loanCardMon = new TextLayer({
      width: 200 * n,
      text: "--",
      fontSize: 32 * n,
      fontFamily: "PingFang TC",
      fontWeight: 500,
      color: "rgba(33,33,33,1)",
      textAlign: "right"
    });
    this.loanCardIcon = new Layer({
      width: 192 * n,
      height: 192 * n,
      backgroundColor: null
    });
    LoanCard.__super__.constructor.call(this, this.options);
    this.loanCardTitle.parent = this;
    this.loanCardTitle.y = 40 * n;
    this.loanCardSubtitle.parent = this;
    this.loanCardSubtitle.y = this.loanCardTitle.y + 56 * n;
    this.loanCardhan01.parent = this;
    this.loanCardhan01.y = 232 * n;
    this.loanCardhan02.parent = this;
    this.loanCardhan02.x = Align.right(-32 * n);
    this.loanCardhan02.y = this.loanCardhan01.y;
    this.loanCardLimit.parent = this;
    this.loanCardLimit.y = this.loanCardSubtitle.y + 72 * n;
    this.loanCardMon.parent = this;
    this.loanCardMon.y = this.loanCardSubtitle.y + 72 * n;
    this.loanCardMon.x = Align.right(-32 * n);
    this.loanCardIcon.parent = this;
    this.loanCardIcon.y = -24 * n;
    this.loanCardIcon.x = Align.right;
    this.onTouchStart(this.TouchStart);
    this.onTouchEnd(this.TouchEnd);
    this.onTouchMove(this.TouchMove);
  }

  LoanCard.prototype.TouchStart = function() {
    return this.brightness = 90;
  };

  LoanCard.prototype.TouchEnd = function() {
    return this.brightness = 100;
  };

  LoanCard.prototype.TouchMove = function() {
    return this.brightness = 100;
  };

  return LoanCard;

})(Layer);


},{}],"ProductList":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.ProductList = (function(superClass) {
  var n;

  extend(ProductList, superClass);

  n = Screen.width / 750;

  function ProductList(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      height: 380 * n,
      width: 328 * n
    });
    this.productPic = new Layer({
      width: 328 * n,
      height: 244 * n,
      backgroundColor: "#F5F5F5",
      image: "images/dailybestpic01.png"
    });
    this.productName = new TextLayer({
      width: 328 * n,
      height: 32 * n,
      fontSize: 28 * n,
      color: "#212121",
      text: "productNameHere",
      textAlign: "left"
    });
    this.productSub = new TextLayer({
      width: 328 * n,
      height: 24 * n,
      fontSize: 24 * n,
      color: "#616161",
      text: "productsubtitlehere",
      textAlign: "left"
    });
    this.productPrice = new TextLayer({
      width: 328 * n,
      height: 40 * n,
      fontSize: 36 * n,
      color: "#E3453D",
      text: "¥0.00",
      textAlign: "left"
    });
    ProductList.__super__.constructor.call(this, this.options);
    this.productPic.parent = this;
    this.productPic.y = 0;
    this.productName.parent = this;
    this.productName.y = 252 * n;
    this.productSub.parent = this;
    this.productSub.y = this.productName.height + this.productName.y + 8 * n;
    this.productPrice.parent = this;
    this.productPrice.y = this.productSub.y + this.productSub.height + 8 * n;
    this.onTouchStart(this.TouchStart);
    this.onTouchEnd(this.TouchEnd);
    this.onTouchMove(this.TouchMove);
  }

  ProductList.prototype.TouchStart = function() {
    return this.brightness = 90;
  };

  ProductList.prototype.TouchEnd = function() {
    return this.brightness = 100;
  };

  ProductList.prototype.TouchMove = function() {
    return this.brightness = 100;
  };

  return ProductList;

})(Layer);


},{}],"StatusBar":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.StatusBar = (function(superClass) {
  var n;

  extend(StatusBar, superClass);

  n = Screen.width / 750;

  function StatusBar(options) {
    var backgroundBlur;
    this.options = options != null ? options : {};
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      width: Screen.width,
      height: 88 * n,
      opacity: 0.96,
      image: "images/statusbarblack.png",
      z: 4
    }, backgroundBlur = 40);
    this.topbar = new Layer({
      width: Screen.width,
      height: 88 * n,
      backgroundColor: "#FFF"
    });
    this.pageTitle = new TextLayer({
      fontSize: 34 * n,
      fontWeight: 800,
      color: "#2D2929",
      backgroundColor: null,
      textAlign: "center",
      x: Align.center,
      width: Screen.width
    });
    this.topbarRightIcon01 = new Layer({
      width: 40 * n,
      height: 40 * n,
      backgroundColor: null,
      x: Align.right(-16 * n),
      image: "images/nav_icon_mess@2x.svg"
    });
    this.topbarLeftIcon01 = new Layer({
      width: 40 * n,
      height: 40 * n,
      backgroundColor: null,
      x: Align.left(16 * n),
      image: "images/nav_icon_back@2x.svg"
    });
    StatusBar.__super__.constructor.call(this, this.options);
    this.topbar.parent = this;
    this.topbar.y = 88 * n;
    this.pageTitle.parent = this.topbar;
    this.topbarRightIcon01.parent = this.topbar;
    this.topbarRightIcon01.y = Align.center();
    this.topbarLeftIcon01.parent = this.topbar;
    this.topbarLeftIcon01.y = Align.center();
    this.pageTitle.y = Align.center();
    this.pageTitle.text = "PageName";
  }

  return StatusBar;

})(Layer);


},{}],"bidirectional-cycle/Utilscycle":[function(require,module,exports){
Utils.cycle = function() {
  var args, curr;
  args = Utils.arrayFromArguments(arguments[0]);
  curr = -1;
  return function(dir) {
    if (dir == null) {
      dir = true;
    }
    if (dir) {
      curr++;
      if (curr >= args.length) {
        curr = 0;
      }
    } else {
      curr--;
      if (curr < 0) {
        curr = args.length - 1;
      }
    }
    return args[curr];
  };
};


},{}],"carouselcomponent/CarouselComponent":[function(require,module,exports){

/*
	 * USING THE CAROUSELCOMPONENT

	 * Require the module
	CarouselComponent = require "CarouselComponent"

	myCarousel = new CarouselComponent
		 * Item cells
		itemCount: <number>
		rounded: <boolean>
		itemMargin: <number>
		itemBorderRadius: <number>
		itemWidth: <number>
		itemHeight: <number>
		smallItemWidth: <number>
		smallItemHeight: <number>

		 * Labels
		title: <string>
		link: <string>
		captions: <array of strings>
		subcaptions: <array of strings>

		 * Layout
		margins: <array of numbers> ([topMargin, rightMargin, bottomMargin, leftMargin])
		wrap: <boolean>
		sideCaptions: <boolean>
		topAlignSideCaptions: <boolean>

		 * Hero-specific controls
		heroCaptionAlign: <string> ("left" | "center" | "right")
		centerheroItem: <boolean>
		sideHeroCaption: <boolean>
		topAlignHeroCaption: <boolean>

		 * Colors
		boxColor: <string> (hex or rgba)
		iconColor: <string> (hex or rgba)
		titleColor: <string> (hex or rgba)
		linkColor: <string> (hex or rgba)
		captionColor: <string> (hex or rgba)
		subcaptionColor: <string> (hex or rgba)

		 * Typography
		fontFamily: <string>
		titleFontSize: <number>
		titleFontWeight: <number>
		titleMargin: <number>
		linkFontSize: <number>
		linkFontWeight: <number>
		captionFontSize: <number>
		captionFontWeight: <number>
		captionMargin: <number>
		captionMaxHeight: <number>
		subcaptionFontSize: <number>
		subcaptionFontWeight: <number>
		subcaptionMargin: <number>
		subcaptionMaxHeight: <number>
		titleAlign: <string> ("left" | "center" | "right")
		captionAlign: <string> ("left" | "center" | "right")

		 * Icons
		icons: <boolean>
		iconBorderRadius: <number>
		iconSize: <number>
		iconMargin: <number>

		 * Image assets
		imagePrefix: <string> ("images" directory assumed)
		imageSuffix: <string>
		iconPrefix: <string> ("images" directory assumed)
		iconSuffix: <string>

		 * Actions
		itemActions: <array of actions>
		linkAction: <action>

		 * View CarouselComponent frame
		debug: <boolean>

		 * Other
		forceScrolling: <boolean>

	 * Using side captions
	Specify sideCaptions: true to vertically align captions alongside cells rather than underneath. Specify topAlignSideCaptions: true to align side captions to the tops of their adjacent cells.

	 * Using the wrap feature
	 * If you specify wrap: true, the first item in the carousel will display on its own row as a "hero" item. This item can be controlled independently of the rest of the carousel. Secondary cells will be sized according to smallItemWidth and smallItemHeight rather than itemWidth and itemHeight.

	 * Using icons
	 * Icons can be displayed under each item's cell. Specify icons: true to enable this. Enabling icons prevents the use of side captions.

	 * Using images
	 * All images are assumed to live in the images directory and be numbered with an initial index of zero. You may supply both a prefix and suffix. If your item images are located in an "items" directory within "images" and named:

	cell0.png
	cell1.png
	cell2.png

	 * then your imagePrefix would be "items/cell" and your suffix would be "png".

	 * Icon assets work the same way.

	 * Do not include the images directory in imagePrefix or iconPrefix.

	 * Assigning margins
	 * Margins are supplied in the same order as for CSS. margins: [40, 10, 15, 5] will provide a top margin of 40, a right margin of 10, a bottom margin of 15 and a left margin of 5. The first item is positioned according to the top margin; however the title and link are positioned relative to the first item using titleMargin.

	 * Scrolling
	 * The CarouselComponent will attempt to provide scrolling only when its content extends beyond the visible area. To enforce scrolling regardless, specify forceScrolling: true.

	 * Assigning actions
	 * The link button in the upper right of the carousel can be given an action, as can individual item cells. The link will only appear if you supply a string with link: <string> and the CarouselComponent includes at least two items. Item actions should be arranged in a comma-separated array, one action per line.
	linkAction: -> print "link"
	itemActions: [
		-> print "1",
		-> print "second",
		-> print "item the third"
	]

	 * Referring to parts of the CarouselComponent
	 * The CarouselComponent contains a PageComponent which can be accessed with .row. Items and their components can be accessed with the .items array. .heroItem is available when wrap is set to true.
	print myCarousel.row.currentPage
	print myCarousel.heroItem?.caption?.text
	print myCarousel.items[0].textBlock
	print myCarousel.items[0].cell
 */
var CarouselComponent, defaults, rounded,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

defaults = {
  itemCount: 3,
  debug: false,
  rounded: false,
  wrap: false,
  sideCaptions: false,
  captionAlign: "left",
  titleAlign: "left",
  topAlignSideCaptions: false,
  centerheroItem: false,
  heroCaptionAlign: "left",
  sideHeroCaption: false,
  topAlignHeroCaption: true,
  icons: false,
  clip: true,
  forceScrolling: false,
  margins: [40, 0, 0, 0],
  itemMargin: 12,
  itemBorderRadius: 10,
  itemWidth: 160,
  itemHeight: 120,
  smallItemWidth: 80,
  smallItemHeight: 60,
  titleFontSize: 20,
  titleFontWeight: 800,
  titleMargin: 4,
  linkFontSize: 16,
  linkFontWeight: 400,
  captionFontSize: 18,
  captionFontWeight: 400,
  captionMaxHeight: 100,
  subcaptionFontSize: 16,
  subcaptionFontWeight: 400,
  subcaptionMaxHeight: 100,
  iconBorderRadius: 10,
  iconSize: 40,
  iconMargin: 8,
  captionMargin: 10,
  subcaptionMargin: 0,
  backgroundColor: "clear",
  boxColor: "#F5F5F5",
  iconColor: "",
  titleColor: "#F5F5F5",
  linkColor: "",
  captionColor: "",
  subcaptionColor: "",
  fontFamily: "",
  title: "Carousel Title",
  link: "",
  imagePrefix: "",
  imageSuffix: "png",
  iconPrefix: "",
  iconSuffix: "png",
  captions: [],
  subcaptions: [],
  itemActions: [],
  linkAction: function() {}
};

rounded = {
  itemWidth: 120,
  itemHeight: 120,
  smallItemWidth: 60,
  smallItemHeight: 60
};

CarouselComponent = (function(superClass) {
  extend(CarouselComponent, superClass);

  function CarouselComponent(options) {
    var bottomMargin, createItem, heroItemContainer, i, j, leftMargin, link, margin, noop, offset, ref, ref1, ref2, ref3, rightMargin, row, title, topMargin;
    this.options = options != null ? options : {};
    this.options = _.assign({}, defaults, this.options);
    if (this.options.rounded === true) {
      this.options = _.assign({}, rounded, this.options);
    }
    CarouselComponent.__super__.constructor.call(this, this.options);
    noop = function() {};
    this.items = [];
    ref = this.options.margins, topMargin = ref[0], rightMargin = ref[1], bottomMargin = ref[2], leftMargin = ref[3];
    this.clip = this.options.clip;
    this.backgroundColor = this.options.backgroundColor;
    this.width = this.options.width || Screen.width;
    this.x = this.options.x;
    if (this.options.debug === true) {
      this.backgroundColor = "rgba(254, 163, 32, 0.25)";
    }
    if (this.options.icons === true) {
      this.options.sideCaptions = "none";
    }
    offset = this.options.wrap === true ? 1 : 0;
    margin = new Layer({
      parent: this,
      name: "margin",
      width: this.width,
      height: 1,
      visible: false
    });
    this.margin = margin;
    title = new TextLayer({
      parent: this,
      x: leftMargin,
      text: this.options.title,
      fontSize: this.options.titleFontSize,
      color: this.options.titleColor,
      textAlign: this.options.titleAlign,
      fontWeight: this.options.titleFontWeight,
      width: this.width - leftMargin - rightMargin
    });
    this.title = title;
    title.maxY = topMargin - this.options.titleMargin;
    if (this.options.fontFamily !== "") {
      title.fontFamily = this.options.fontFamily;
    }
    if (this.options.link !== "") {
      link = new TextLayer({
        parent: this,
        text: this.options.link,
        fontSize: this.options.titleFontSize,
        originX: 1,
        originY: 1,
        autoSize: true,
        autoSizeHeight: true,
        color: this.options.linkColor || this.options.captionColor || this.options.titleColor,
        textAlign: "right",
        fontWeight: this.options.linkFontWeight,
        x: Align.right(-rightMargin),
        y: title.y,
        scale: this.options.linkFontSize / this.options.titleFontSize
      });
      this.link = link;
      if (this.options.fontFamily !== "") {
        link.fontFamily = this.options.fontFamily;
      }
      if (this.options.linkAction !== noop) {
        link.onClick((function(_this) {
          return function() {
            return _this.options.linkAction();
          };
        })(this));
      }
    }
    createItem = (function(_this) {
      return function(i, parent, hero) {
        var block, caption, icon, indexOffset, item, itemHeight, itemWidth, subcaption, textBlock;
        if (i == null) {
          i = 0;
        }
        if (parent == null) {
          parent = null;
        }
        if (hero == null) {
          hero = false;
        }
        if (hero === false && _this.options.wrap === true) {
          indexOffset = 1;
          itemWidth = _this.options.smallItemWidth;
          itemHeight = _this.options.smallItemHeight;
        } else {
          indexOffset = 0;
          itemWidth = _this.options.itemWidth;
          itemHeight = _this.options.itemHeight;
        }
        item = new Layer({
          name: "item" + (i + indexOffset),
          width: itemWidth,
          height: itemHeight,
          backgroundColor: "clear",
          clip: false
        });
        if (parent instanceof PageComponent) {
          parent.addPage(item);
        } else {
          item.parent = parent;
        }
        block = new Layer({
          parent: item,
          name: "block" + (i + indexOffset),
          width: itemWidth,
          height: itemHeight,
          backgroundColor: _this.options.boxColor,
          borderRadius: _this.options.itemBorderRadius,
          image: "images/" + _this.options.imagePrefix + (i + indexOffset) + "." + _this.options.imageSuffix,
          style: {
            "background-position": "center center",
            "background-size": "cover"
          }
        });
        item.cell = block;
        if (_this.options.itemActions[i + indexOffset] !== noop && _this.options.itemActions[i + indexOffset] !== void 0) {
          item.onClick(function() {
            if (parent.parent.isDragging) {
              return;
            }
            return _this.options.itemActions[i + indexOffset]();
          });
        }
        if (_this.options.icons === true) {
          icon = new Layer({
            parent: item,
            name: "icon" + (i + indexOffset),
            width: _this.options.iconSize,
            height: _this.options.iconSize,
            backgroundColor: _this.options.iconColor || _this.options.boxColor,
            borderRadius: _this.options.iconBorderRadius,
            y: block.maxY + _this.options.iconMargin,
            image: "images/" + _this.options.iconPrefix + (i + indexOffset) + "." + _this.options.iconSuffix,
            style: {
              "background-position": "center center",
              "background-size": "cover"
            }
          });
          item.icon = icon;
        }
        textBlock = new Layer({
          parent: item,
          name: "textBlock" + (i + indexOffset),
          width: _this.options.icons === true ? itemWidth - _this.options.iconSize - _this.options.iconMargin : itemWidth,
          height: item.height,
          backgroundColor: "clear",
          x: _this.captionAlignHorizontal((_this.options.icons === true ? _this.options.iconSize : block.width), hero)
        });
        item.textBlock = textBlock;
        caption = new TextLayer({
          parent: textBlock,
          name: "caption" + (i + indexOffset),
          width: textBlock.width,
          color: _this.options.captionColor || _this.options.titleColor,
          text: _this.options.captions[i + indexOffset] || "",
          textAlign: "left",
          fontWeight: _this.options.captionFontWeight,
          fontSize: _this.options.captionFontSize
        });
        item.caption = caption;
        if (caption.height > _this.options.captionMaxHeight) {
          caption.height = _this.options.captionMaxHeight;
          caption.truncate = true;
        }
        if (_this.options.fontFamily !== "") {
          caption.fontFamily = _this.options.fontFamily;
        }
        if (_this.options.subcaptions !== []) {
          subcaption = new TextLayer({
            parent: textBlock,
            name: "subcaption" + (i + indexOffset),
            width: textBlock.width,
            color: _this.options.subcaptionColor || _this.options.captionColor || _this.options.titleColor,
            text: _this.options.subcaptions[i + indexOffset] || "",
            textAlign: "left",
            fontWeight: _this.options.subcaptionFontWeight,
            fontSize: _this.options.subcaptionFontSize,
            letterSpacing: -0.6,
            y: caption.maxY + _this.options.subcaptionMargin
          });
          item.subcaption = subcaption;
          if (subcaption.height > _this.options.subcaptionMaxHeight) {
            subcaption.height = _this.options.subcaptionMaxHeight;
            subcaption.truncate = true;
          }
          if (_this.options.fontFamily !== "") {
            subcaption.fontFamily = _this.options.fontFamily;
          }
        }
        if (_this.options.rounded === true) {
          block.borderRadius = Math.max(_this.options.itemWidth, _this.options.itemHeight) / 2;
        }
        caption.textAlign = _this.options.captionAlign;
        if (subcaption != null) {
          subcaption.textAlign = _this.options.captionAlign;
        }
        _this.items.push(item);
        textBlock.height = textBlock.contentFrame().height;
        textBlock.y = _this.captionAlignVertical(block.height, hero);
        item.height = item.contentFrame().height;
        item.width = item.contentFrame().width;
        if (_this.items.indexOf(item) > offset) {
          return item.x = item.x + _this.options.itemMargin;
        }
      };
    })(this);
    if (this.options.wrap === true) {
      heroItemContainer = new Layer({
        parent: this,
        name: "heroItemContainer",
        y: topMargin,
        x: this.options.centerheroItem === true ? Align.center : leftMargin,
        backgroundColor: "clear"
      });
      createItem(0, heroItemContainer, true);
      heroItemContainer.height = heroItemContainer.contentFrame().height;
      heroItemContainer.width = heroItemContainer.contentFrame().width;
      this.heroItem = heroItemContainer.children[0];
      this.heroItem.name = "heroItem";
      this.heroItem.caption.textAlign = this.options.heroCaptionAlign;
      if ((ref1 = this.heroItem.subcaption) != null) {
        ref1.textAlign = this.options.heroCaptionAlign;
      }
    }
    row = new PageComponent({
      parent: this,
      name: "row",
      y: this.options.wrap === true ? heroItemContainer.maxY + this.options.itemMargin : topMargin,
      scrollVertical: false,
      scrollHorizontal: true,
      velocityThreshold: 0.1,
      clip: false,
      originX: 0,
      contentInset: {
        top: 0,
        right: rightMargin,
        bottom: 0,
        left: leftMargin
      }
    });
    this.row = row;
    if (this.options.itemCount < 2) {
      row.scrollHorizontal = false;
      if (link != null) {
        link.destroy();
      }
    }
    for (i = j = 0, ref2 = this.options.itemCount - offset; 0 <= ref2 ? j < ref2 : j > ref2; i = 0 <= ref2 ? ++j : --j) {
      createItem(i, row, false);
    }
    row.onSwipeLeft((function(_this) {
      return function() {
        var maxPage;
        if (_this.options.forceScrolling !== true && _this.checkIfNeedsScrolling(row)) {
          maxPage = _this.options.itemCount - Math.floor(_this.width / (_this.options.itemWidth + _this.options.itemMargin)) - offset;
          if (row.content.maxX < _this.maxX) {
            return row.snapToPage(_this.items[maxPage]);
          }
        }
      };
    })(this));
    row.width = (ref3 = row.content.children[0]) != null ? ref3.width : void 0;
    row.content.width = row.content.contentFrame().width;
    row.content.height = row.content.contentFrame().height;
    row.height = row.contentFrame().height;
    row.content.clip = false;
    row.scrollHorizontal = this.checkIfNeedsScrolling(row);
    this.height = this.contentFrame().height + bottomMargin;
  }

  CarouselComponent.prototype.checkIfNeedsScrolling = function(layer) {
    var needsScrolling, ref;
    if (layer == null) {
      layer = null;
    }
    if (this.options.forceScrolling === true) {
      needsScrolling = true;
    } else if (((ref = layer.content) != null ? ref.contentFrame().width : void 0) > this.width) {
      needsScrolling = true;
    } else {
      needsScrolling = false;
    }
    return needsScrolling;
  };

  CarouselComponent.prototype.captionAlignVertical = function(itemHeight, hero) {
    var align;
    if (itemHeight == null) {
      itemHeight = 0;
    }
    if (hero == null) {
      hero = false;
    }
    align = itemHeight + this.options.captionMargin;
    if (this.options.icons === true) {
      align = itemHeight + this.options.iconMargin;
    } else if (hero === true) {
      if (this.options.sideHeroCaption === true) {
        if (this.options.topAlignHeroCaption === true) {
          align = Align.top;
        } else {
          align = Align.center;
        }
      }
    } else if (this.options.sideCaptions === true) {
      if (this.options.topAlignCaptions === true) {
        align = Align.top;
      } else {
        align = Align.center;
      }
    }
    return align;
  };

  CarouselComponent.prototype.captionAlignHorizontal = function(itemWidth, hero) {
    var align;
    if (itemWidth == null) {
      itemWidth = 0;
    }
    if (hero == null) {
      hero = false;
    }
    align = Align.left;
    if (this.options.icons === true) {
      align = itemWidth + this.options.iconMargin;
    } else if (hero === true) {
      if (this.options.sideHeroCaption === true) {
        align = itemWidth + this.options.captionMargin;
      }
    } else if (this.options.sideCaptions === true) {
      align = itemWidth + this.options.captionMargin;
    } else if (this.options.sideCaptions === true) {
      align = itemWidth + this.options.captionMargin;
    }
    return align;
  };

  return CarouselComponent;

})(Layer);

module.exports = CarouselComponent;


},{}],"imagefill/imageFill":[function(require,module,exports){
var currentProject, showCredit;

currentProject = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];

if (Layer.prototype.imageFill === void 0) {
  Layer.prototype.imageFill = function(q) {
    var fillImages, imageNb, oReq, project, res;
    if (!q) {
      q = "";
    }
    if (localStorage.getItem("fillImages")) {
      fillImages = JSON.parse(localStorage.getItem("fillImages"));
      project = _.findIndex(fillImages.projects, {
        name: currentProject
      });
      if (project !== -1) {
        if (this.name !== "") {
          imageNb = _.findIndex(fillImages.projects[project].imageList, {
            name: this.name
          });
          if (imageNb !== -1) {
            this.image = fillImages.projects[project].imageList[imageNb].url;
            this.imageSaved = true;
          }
        }
      }
    }
    if (!this.imageSaved) {
      if (!this.name) {
        throw "A name for the layer you want to fill is required";
        return 0;
      }
      oReq = new XMLHttpRequest();
      res = "null";
      oReq.onload = function() {
        var buffer;
        buffer = oReq.response;
        return res = JSON.parse(buffer);
      };
      oReq.open("GET", "https://api.unsplash.com/photos/random?query=" + q + "&client_id=aff8cc7683bb0054396a790d5d0e942a93de3ae93ac83b8d13f6bf89a96b3ba8", false);
      oReq.send();
      if (res.errors) {
        throw "Search term didn't give any result";
        return 0;
      }
      showCredit(res, this, q);
      return this.image = res.urls.regular;
    }
  };
} else {
  throw "Method imageFill already exists";
}

showCredit = function(photo, layer, q) {
  var changeImage, credit, creditPhoto, creditUnsplash, keepImage;
  credit = new Layer({
    name: "credit",
    y: Align.bottom(-8),
    height: 30,
    borderRadius: 8,
    width: Screen.width - 20,
    x: Align.center,
    clip: true,
    opacity: 0,
    animOptions: {
      time: 0.3,
      delay: 0.2
    }
  });
  credit.states.on = {
    opacity: 1,
    animOptions: {
      time: 0.3
    }
  };
  credit.stateCycle();
  keepImage = new TextLayer({
    name: "keep",
    parent: credit,
    text: "✔︎",
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "#69C640",
    lineHeight: 1.55,
    width: 40,
    height: 30,
    x: Align.right,
    y: 0
  });
  keepImage.states.selected = {
    backgroundColor: "#2D561C",
    animOptions: {
      time: 0.1
    }
  };
  keepImage.on(Events.Tap, function() {
    var fillImages, newProject, projectNb;
    keepImage.stateCycle();
    fillImages = {
      projects: []
    };
    if (localStorage.getItem("fillImages")) {
      fillImages = JSON.parse(localStorage.getItem("fillImages"));
    }
    projectNb = _.findIndex(fillImages.projects, {
      name: currentProject
    });
    if (projectNb < 0) {
      projectNb = fillImages.projects.length;
      newProject = {
        name: currentProject,
        imageList: []
      };
      fillImages.projects.push(newProject);
    }
    fillImages.projects[projectNb].imageList.push({
      name: layer.name,
      url: photo.urls.regular
    });
    localStorage.setItem("fillImages", JSON.stringify(fillImages));
    credit.stateCycle();
    return credit.on(Events.StateSwitchEnd, function() {
      return credit.destroy();
    });
  });
  changeImage = new TextLayer({
    name: "change",
    parent: credit,
    text: "✘",
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "#D5373C",
    width: 40,
    height: 30,
    lineHeight: 1.55,
    x: Align.right(-40),
    y: 0
  });
  changeImage.states.selected = {
    backgroundColor: "#741E21",
    animOptions: {
      time: 0.1
    }
  };
  changeImage.on(Events.Tap, function() {
    changeImage.stateCycle();
    credit.stateCycle();
    return credit.on(Events.StateSwitchEnd, function() {
      credit.destroy();
      return layer.imageFill(q);
    });
  });
  creditUnsplash = new TextLayer({
    name: "Unsplash",
    parent: credit,
    fontSize: 10,
    color: "#000000",
    textDecoration: "underline",
    text: "Image from Unsplash",
    y: Align.center,
    x: 12
  });
  creditUnsplash.on(Events.Tap, function() {
    return window.open("https://unsplash.com/?utm_source=framerImageFill&utm_medium=referral&utm_campaign=api-credit", "_blank");
  });
  creditPhoto = new TextLayer({
    name: "Photographer",
    parent: credit,
    fontSize: 10,
    color: "#000000",
    textDecoration: "underline",
    text: "Photo by " + photo.user.username,
    truncate: true,
    width: credit.width - 122 - 80,
    y: Align.center,
    x: 122
  });
  return creditPhoto.on(Events.Tap, function() {
    return window.open("https://unsplash.com/@" + photo.user.username + "?utm_source=framerImageFill&utm_medium=referral&utm_campaign=api-credit", "_blank");
  });
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"npm":[function(require,module,exports){
exports.countup = require("countup.js");


},{"countup.js":1}],"videocards/videocard":[function(require,module,exports){

/*
Video card modules
-
Filename: videocard.coffee
-
Author: Hugo Magalhães
Version: 1.0
Updated: 28-March-2018
 */

/*  ===================================================================
     1 || GLOBAL VARIABLES ||
====================================================================
 */

/*
↳ Global variables structure:
	a. Color palette
	b. Typographic settings
  c.Card sizes (Small, Medium and Large)
 */
var AspectRatio, LargeCardHeight, LargeCardPlayButton, LargeCardTest, LargeCardTextPadding, LargeCardText_header, LargeCardText_source, LargeCardWidth, MediumCardHeight, MediumCardPlayButton, MediumCardTextPadding, MediumCardText_header, MediumCardText_source, MediumCardWidth, RetinaFont, RetinaFont_Bold, RetinaFont_Medium, RetinaFont_Regular, SmallCardHeight, SmallCardPlayButton, SmallCardTextPadding, SmallCardText_header, SmallCardText_source, SmallCardWidth, VideoCard, color_black, color_grey, overlay_opacity,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

color_grey = "#979797";

color_black = "#000000";

overlay_opacity = "rgba(0,0,0,0.4)";

RetinaFont = "retina";

RetinaFont_Bold = 700;

RetinaFont_Medium = 500;

RetinaFont_Regular = 100;


/* ::::::::::::::::::::::::::::::::::::::::::::::::::
    VIDEO CARD SIZES
    * (Small, Medium and Large)
::::::::::::::::::::::::::::::::::::::::::::::::::
 */

SmallCardWidth = 216;

SmallCardHeight = 216;

SmallCardPlayButton = 50;

SmallCardTextPadding = [10, 16, 11];

SmallCardText_source = 10;

SmallCardText_header = [13, 1.5];

MediumCardWidth = 296;

MediumCardHeight = 284;

MediumCardPlayButton = 70;

MediumCardTextPadding = [16, 16, 16];

MediumCardText_source = 12;

MediumCardText_header = [16, 1.4];

LargeCardWidth = 456;

LargeCardHeight = 408;

LargeCardPlayButton = 90;

LargeCardTextPadding = [16, 16, 16];

LargeCardText_source = 13;

LargeCardText_header = [22, 1.5];

LargeCardTest = 100;

AspectRatio = function(value) {
  return Math.ceil((value / 16) * 9);
};


/*  ===================================================================
     2 || VIDEOCARD CLASS ||
====================================================================
 */

VideoCard = (function(superClass) {
  extend(VideoCard, superClass);

  function VideoCard(options) {
    this.options = options != null ? options : {};
    this.PreviewOFF = bind(this.PreviewOFF, this);
    this.PreviewON = bind(this.PreviewON, this);
    this.options.shadowY = 2;
    this.options.shadowBlur = 4;
    this.options.shadowColor = "rgba(0,0,0,0.1)";
    this.options.borderRadius = 4;
    this.options.clip = true;
    _.defaults(this.options, {
      width: SmallCardWidth,
      height: SmallCardHeight,
      backgroundColor: "white",
      format: "small"
    });

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::
        UI COMPONENTS CREATION
        * Creates the UI components within the class
    ::::::::::::::::::::::::::::::::::::::::::::::::::
     */

    /*
    ↳ Global variables structure:
        	   a. Thumbnail
          - Video
          - Overlay
          - Play button
          - Timestamp
          - Watch later
        	    b. Label
          - Source
          - header
     */
    this.thumbnail = new Layer({
      name: "thumbnail",
      clip: true,
      backgroundColor: "transparent"
    });
    this.video = new VideoLayer({
      name: "video",
      video: "http://hugomagalhaes.design/framer/videos/neymar_inGame.mp4"
    });
    this.video.player.muted = true;
    this.overlay = new Layer({
      name: "overlay",
      backgroundColor: "transparent"
    });
    this.playButton = new Layer({
      name: "playButton",
      backgroundColor: "transparent",
      image: "http://hugomagalhaes.design/framer/images/playButton_loader.gif",
      opacity: 0
    });
    this.timestamp = new TextLayer({
      name: "timestamp",
      text: this.options.timestamp || "0:08",
      backgroundColor: "rgba(0,0,0,0.9)",
      borderRadius: 2,
      padding: 5,
      fontFamily: RetinaFont,
      fontWeight: RetinaFont_Medium,
      color: "white"
    });
    this.watchLater = new SVGLayer({
      svg: "<svg viewBox=\"0 0 16 16\">\n  <path\n  d=\"M8,14.7181009 L8,16 C3.58814634,16 0,12.4118537 0,8 C0,3.58814634 3.58814634,0 8,0 C12.4118537,0 16,3.58814634 16,8 C16,12.4118537 12.4118537,16 8,16 L8,14.7181009 C11.7038803,14.7181009 14.7181009,11.7038803 14.7181009,8 C14.7181009,4.29611967 11.7038803,1.28189911 8,1.28189911 C4.29611967,1.28189911 1.28189911,4.29611967 1.28189911,8 C1.28189911,11.7038803 4.29611967,14.7181009 8,14.7181009 Z M8.27058824,7.63820091 L11.1183104,9.79034662 L10.3522369,10.8040161 L7.03329787,8.29575163 L7,8.29575163 L7,4 L8.27058824,4 L8.27058824,7.63820091\">\n          </path>\n        </svg>",
      fill: "white"
    });
    this.label = new Layer({
      name: "label",
      backgroundColor: "transparent"
    });
    this.labelInner = new Layer({
      name: "labelInner",
      backgroundColor: "transparent"
    });
    this.source = new TextLayer({
      name: "source",
      text: this.options.source || "Source",
      fontFamily: RetinaFont,
      fontWeight: RetinaFont_Bold,
      lineHeight: 1,
      letterSpacing: .5,
      textTransform: "uppercase",
      color: color_grey
    });
    this.header = new TextLayer({
      name: "header",
      text: this.options.header || "Video header",
      fontFamily: RetinaFont,
      fontWeight: RetinaFont_Medium,
      color: color_black,
      lineHeight: 1.5
    });
    VideoCard.__super__.constructor.call(this, this.options);
    this.animationOptions = {
      curve: "bezier-curve",
      curveOptions: [0.65, 0, 1.35, 1.5],
      time: .5
    };

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::
        COMPONENTS SPECIFICATION
        * After the components are created, it assigns them a particular an hierarchical structure and a set of styles
        * Default size: Small
        * Medium and large sizes are defined within a conditional statement
    ::::::::::::::::::::::::::::::::::::::::::::::::::
     */
    this.thumbnail.parent = this;
    this.thumbnail.width = this.width;
    this.thumbnail.height = AspectRatio(this.width);
    this.thumbnail.backgroundColor = "lightgrey";
    this.video.parent = this.thumbnail;
    this.video.width = this.thumbnail.width;
    this.video.y = -38;
    this.overlay.parent = this.thumbnail;
    this.overlay.width = this.thumbnail.width;
    this.overlay.height = this.thumbnail.height;
    this.playButton.parent = this.thumbnail;
    this.playButton.size = SmallCardPlayButton;
    this.playButton.point = Align.center;
    this.timestamp.parent = this.thumbnail;
    this.timestamp.fontSize = 10;
    this.timestamp.x = Align.right(-8);
    this.timestamp.y = Align.bottom(-8);
    this.watchLater.parent = this.thumbnail;
    this.watchLater.size = 16;
    this.watchLater.x = Align.right(-8);
    this.watchLater.y = 8;
    this.watchLater.opacity = 0;
    this.label.parent = this;
    this.label.width = this.width;
    this.label.height = this.height - this.thumbnail.height;
    this.label.y = Align.bottom;
    this.labelInner.parent = this.label;
    this.labelInner.width = this.label.width - (SmallCardTextPadding[1] * 2);
    this.labelInner.height = this.label.height - (SmallCardTextPadding[0] + SmallCardTextPadding[2]);
    this.labelInner.point = Align.center;
    this.source.parent = this.labelInner;
    this.source.fontSize = SmallCardText_source;
    this.source.width = this.labelInner.width;
    this.header.parent = this.labelInner;
    this.header.fontSize = SmallCardText_header[0];
    this.header.width = this.labelInner.width;
    this.header.y = this.source.maxY;
    this.header.height = this.labelInner.height - this.source.height;
    this.header.padding = {
      top: 4
    };
    this.header.textOverflow = "ellipsis";

    /* ---------------------------
    |||--> Medium video card <--||||
    ----------------------------
     */
    if (this.options.format === "medium") {
      this.width = MediumCardWidth;
      this.height = MediumCardHeight;
      this.thumbnail.width = MediumCardWidth;
      this.thumbnail.height = AspectRatio(this.width);
      this.video.width = this.thumbnail.width;
      this.video.y = -16;
      this.overlay.width = this.thumbnail.width;
      this.overlay.height = this.thumbnail.height;
      this.playButton.size = MediumCardPlayButton;
      this.playButton.point = Align.center;
      this.timestamp.x = Align.right(-8);
      this.timestamp.y = Align.bottom(-8);
      this.watchLater.x = Align.right(-8);
      this.watchLater.y = 8;
      this.label.width = this.width;
      this.label.height = this.height - this.thumbnail.height;
      this.label.y = Align.bottom;
      this.labelInner.width = this.label.width - (MediumCardTextPadding[1] * 2);
      this.labelInner.height = this.label.height - (MediumCardTextPadding[0] + MediumCardTextPadding[2]);
      this.labelInner.point = Align.center;
      this.source.fontSize = MediumCardText_source;
      this.source.width = this.labelInner.width;
      this.header.fontSize = MediumCardText_header[0];
      this.header.lineHeight = MediumCardText_header[1];
      this.header.width = this.labelInner.width;
      this.header.y = this.source.maxY;
      this.header.height = this.labelInner.height - this.source.height;
      this.header.padding = {
        top: 4
      };
      this.header.textOverflow = "ellipsis";
    }

    /* ---------------------------
    |||--> Large video card <--||||
    ----------------------------
     */
    if (this.options.format === "large") {
      this.width = LargeCardWidth;
      this.height = LargeCardHeight;
      this.thumbnail.width = LargeCardWidth;
      this.thumbnail.height = AspectRatio(this.width);
      this.video.width = this.thumbnail.width;
      this.video.height = this.thumbnail.height;
      this.video.y = 0;
      this.overlay.width = this.thumbnail.width;
      this.overlay.height = this.thumbnail.height;
      this.playButton.size = LargeCardPlayButton;
      this.playButton.point = Align.center;
      this.timestamp.x = Align.right(-8);
      this.timestamp.y = Align.bottom(-8);
      this.watchLater.size = 24;
      this.watchLater.x = Align.right(-8);
      this.watchLater.y = 8;
      this.label.width = this.width;
      this.label.height = this.height - this.thumbnail.height;
      this.label.y = Align.bottom;
      this.labelInner.width = this.label.width - (LargeCardTextPadding[1] * 2);
      this.labelInner.height = this.label.height - (LargeCardTextPadding[0] + LargeCardTextPadding[2]);
      this.labelInner.point = Align.center;
      this.source.fontSize = LargeCardText_source;
      this.source.width = this.labelInner.width;
      this.header.fontSize = LargeCardText_header[0];
      this.header.lineHeight = LargeCardText_header[1];
      this.header.width = this.labelInner.width;
      this.header.y = this.source.maxY;
      this.header.height = this.labelInner.height - this.source.height;
      this.header.padding = {
        top: 4
      };
      this.header.textOverflow = "ellipsis";
    }

    /* ::::::::::::::::::::::::::::::::::::::::::::::::::
        EVENTS
    ::::::::::::::::::::::::::::::::::::::::::::::::::
     */
    this.onMouseOver(this.PreviewON);
    this.onMouseOut(this.PreviewOFF);
  }


  /*
  ↳ Getters & setter:
  	a. Format
  	b. Sub-item 2
   */

  VideoCard.define('format', {
    get: function() {
      return this.options.format;
    },
    set: function(value) {
      this.options.format = value;
      if (this.options.format === "small") {
        this.width = SmallCardWidth;
        this.height = SmallCardHeight;
      }
      if (this.options.format === "medium") {
        this.width = MediumCardWidth;
        return this.height = MediumCardHeight;
      } else if (this.options.format === "large") {
        this.width = LargeCardWidth;
        return this.height = LargeCardHeight;
      }
    }
  });

  VideoCard.prototype.PreviewON = function() {
    this.animate({
      y: this.y - 10,
      shadowY: 7,
      shadowBlur: 10,
      shadowSpread: 3
    });
    this.video.animate({
      scale: 1.05
    });
    this.overlay.animate({
      backgroundColor: overlay_opacity
    });
    this.playButton.animate({
      opacity: 1
    });
    this.watchLater.animate({
      opacity: 1,
      options: {
        delay: .25
      }
    });
    return Utils.delay(.1, (function(_this) {
      return function() {
        _this.video.player.play();
        return _this.video.player.loop = true;
      };
    })(this));
  };

  VideoCard.prototype.PreviewOFF = function() {
    this.animate({
      y: this.y + 10,
      shadowY: 2,
      shadowBlur: 4,
      shadowSpread: 0
    });
    this.video.animate({
      scale: 1
    });
    this.overlay.animate({
      backgroundColor: "transparent"
    });
    this.playButton.animate({
      opacity: 0
    });
    this.watchLater.animate({
      opacity: 0
    });
    this.video.player.pause();
    this.video.player.loop = false;
    return Utils.delay(.25, (function(_this) {
      return function() {
        _this.video.player.currentTime = 0;
        return _this.playButton.image = "http://hugomagalhaes.design//framer/videos/playButton_loader.gif" + "?a=" + Math.random();
      };
    })(this));
  };

  return VideoCard;

})(Layer);

module.exports = VideoCard;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL3ZpZGVvY2FyZHMvdmlkZW9jYXJkLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL25wbS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9pbWFnZWZpbGwvaW1hZ2VGaWxsLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL2Nhcm91c2VsY29tcG9uZW50L0Nhcm91c2VsQ29tcG9uZW50LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL2JpZGlyZWN0aW9uYWwtY3ljbGUvVXRpbHNjeWNsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9TdGF0dXNCYXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvYWQvRGVza3RvcC9mcmFtZXIvbWFpeml3YWxsZXQuZnJhbWVyL21vZHVsZXMvUHJvZHVjdExpc3QuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvYWQvRGVza3RvcC9mcmFtZXIvbWFpeml3YWxsZXQuZnJhbWVyL21vZHVsZXMvTG9hbkNhcmQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvYWQvRGVza3RvcC9mcmFtZXIvbWFpeml3YWxsZXQuZnJhbWVyL21vZHVsZXMvTGlzdFdpdGhJY29uLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL0ljb25zTmF2QmFyLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL0J1dHRvbi5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9Bbm5vdW5jZUJhci5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9BZGFwdC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvY291bnR1cC5qcy9kaXN0L2NvdW50VXAubWluLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcblZpZGVvIGNhcmQgbW9kdWxlc1xuLVxuRmlsZW5hbWU6IHZpZGVvY2FyZC5jb2ZmZWVcbi1cbkF1dGhvcjogSHVnbyBNYWdhbGjDo2VzXG5WZXJzaW9uOiAxLjBcblVwZGF0ZWQ6IDI4LU1hcmNoLTIwMThcbiMjI1xuXG5cbiMjIyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAxIHx8IEdMT0JBTCBWQVJJQUJMRVMgfHxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICMjI1xuXG4jIyNcbuKGsyBHbG9iYWwgdmFyaWFibGVzIHN0cnVjdHVyZTpcblx0YS4gQ29sb3IgcGFsZXR0ZVxuXHRiLiBUeXBvZ3JhcGhpYyBzZXR0aW5nc1xuICBjLkNhcmQgc2l6ZXMgKFNtYWxsLCBNZWRpdW0gYW5kIExhcmdlKVxuIyMjXG5cblxuIy0tPiBDb2xvciBQYWxldHRlXG5jb2xvcl9ncmV5ID0gXCIjOTc5Nzk3XCJcbmNvbG9yX2JsYWNrID0gXCIjMDAwMDAwXCJcbm92ZXJsYXlfb3BhY2l0eSA9IFwicmdiYSgwLDAsMCwwLjQpXCJcblxuXG4jLS0+IFR5cG9ncmFwaGljIHNldHRpbmdzXG5SZXRpbmFGb250ID0gXCJyZXRpbmFcIlxuUmV0aW5hRm9udF9Cb2xkID0gNzAwXG5SZXRpbmFGb250X01lZGl1bSA9IDUwMFxuUmV0aW5hRm9udF9SZWd1bGFyID0gMTAwXG5cblxuIyMjIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgVklERU8gQ0FSRCBTSVpFU1xuICAgICogKFNtYWxsLCBNZWRpdW0gYW5kIExhcmdlKVxuOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjogIyMjXG5cbiMtLT4gU21hbGwgY2FyZCBzaXplXG5TbWFsbENhcmRXaWR0aCA9IDIxNlxuU21hbGxDYXJkSGVpZ2h0ID0gMjE2XG5TbWFsbENhcmRQbGF5QnV0dG9uID0gNTBcblxuU21hbGxDYXJkVGV4dFBhZGRpbmcgPSBbMTAsIDE2LCAxMV0gIyBQYWRkaW5nIC0+IChUb3AsIFJpZ2h0L0xlZnQsIEJvdHRvbSlcblNtYWxsQ2FyZFRleHRfc291cmNlID0gMTAgIyBUZXh0IChGb250LXNpemUsIExpbmUtSGVpZ2h0KVxuU21hbGxDYXJkVGV4dF9oZWFkZXIgPSBbMTMsIDEuNV1cblxuXG4jLS0+IE1lZGl1bSBjYXJkIHNpemVcbk1lZGl1bUNhcmRXaWR0aCA9IDI5NlxuTWVkaXVtQ2FyZEhlaWdodCA9IDI4NFxuTWVkaXVtQ2FyZFBsYXlCdXR0b24gPSA3MFxuXG5NZWRpdW1DYXJkVGV4dFBhZGRpbmcgPSBbMTYsIDE2LCAxNl1cbk1lZGl1bUNhcmRUZXh0X3NvdXJjZSA9IDEyXG5NZWRpdW1DYXJkVGV4dF9oZWFkZXIgPSBbMTYsIDEuNF1cblxuXG4jLS0+IExhcmdlIGNhcmQgc2l6ZVxuTGFyZ2VDYXJkV2lkdGggPSA0NTZcbkxhcmdlQ2FyZEhlaWdodCA9IDQwOFxuTGFyZ2VDYXJkUGxheUJ1dHRvbiA9IDkwXG5cbkxhcmdlQ2FyZFRleHRQYWRkaW5nID0gWzE2LCAxNiwgMTZdXG5MYXJnZUNhcmRUZXh0X3NvdXJjZSA9IDEzXG5MYXJnZUNhcmRUZXh0X2hlYWRlciA9IFsyMiwgMS41XVxuXG5MYXJnZUNhcmRUZXN0ID0gMTAwXG5cblxuIy0tPiBBdXRvbWF0aWNhbGx5IGFzc2lnbnMgYSBoZWlnaHQgYmFzZWQgb24gYSBBc3BlY3RSYXRpbyBvZiBhIGNvbXBvbmVudFxuQXNwZWN0UmF0aW8gPSAodmFsdWUpIC0+XG4gIE1hdGguY2VpbCggKHZhbHVlIC8gMTYpICogOSApXG5cblxuIyMjICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIDIgfHwgVklERU9DQVJEIENMQVNTIHx8XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAjIyNcblxuY2xhc3MgVmlkZW9DYXJkIGV4dGVuZHMgTGF5ZXJcbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cbiAgICAgICMtLT4gSW1tdXRhYmxlIGRlZmF1bHRzXG4gICAgICBAb3B0aW9ucy5zaGFkb3dZID0gMlxuICAgICAgQG9wdGlvbnMuc2hhZG93Qmx1ciA9IDRcbiAgICAgIEBvcHRpb25zLnNoYWRvd0NvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMSlcIlxuICAgICAgQG9wdGlvbnMuYm9yZGVyUmFkaXVzID0gNFxuICAgICAgQG9wdGlvbnMuY2xpcCA9IHRydWVcblxuICAgICAgIy0tPiBDdXN0b20gZGVmYXVsdHNcbiAgICAgIF8uZGVmYXVsdHMgQG9wdGlvbnMsXG4gICAgICAgIHdpZHRoOiBTbWFsbENhcmRXaWR0aFxuICAgICAgICBoZWlnaHQ6IFNtYWxsQ2FyZEhlaWdodFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxuICAgICAgICBmb3JtYXQ6IFwic21hbGxcIlxuXG4gICAgICAjIyMgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgICBVSSBDT01QT05FTlRTIENSRUFUSU9OXG4gICAgICAgICAgKiBDcmVhdGVzIHRoZSBVSSBjb21wb25lbnRzIHdpdGhpbiB0aGUgY2xhc3NcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6ICMjI1xuXG4gICAgICAjIyNcbiAgICAgIOKGsyBHbG9iYWwgdmFyaWFibGVzIHN0cnVjdHVyZTpcbiAgICBcdCAgIGEuIFRodW1ibmFpbFxuICAgICAgICAgICAgLSBWaWRlb1xuICAgICAgICAgICAgLSBPdmVybGF5XG4gICAgICAgICAgICAtIFBsYXkgYnV0dG9uXG4gICAgICAgICAgICAtIFRpbWVzdGFtcFxuICAgICAgICAgICAgLSBXYXRjaCBsYXRlclxuICAgIFx0ICAgIGIuIExhYmVsXG4gICAgICAgICAgICAtIFNvdXJjZVxuICAgICAgICAgICAgLSBoZWFkZXJcbiAgICAgICAgIyMjXG5cbiAgICAgIEB0aHVtYm5haWwgPSBuZXcgTGF5ZXJcbiAgICAgICAgbmFtZTogXCJ0aHVtYm5haWxcIlxuICAgICAgICBjbGlwOiB0cnVlXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cbiAgICAgIEB2aWRlbyA9IG5ldyBWaWRlb0xheWVyXG4gICAgICAgIG5hbWU6IFwidmlkZW9cIlxuICAgICAgICB2aWRlbzogXCJodHRwOi8vaHVnb21hZ2FsaGFlcy5kZXNpZ24vZnJhbWVyL3ZpZGVvcy9uZXltYXJfaW5HYW1lLm1wNFwiXG4gICAgICBAdmlkZW8ucGxheWVyLm11dGVkID0gdHJ1ZVxuXG4gICAgICBAb3ZlcmxheSA9IG5ldyBMYXllclxuICAgICAgICBuYW1lOiBcIm92ZXJsYXlcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXG4gICAgICBAcGxheUJ1dHRvbiA9IG5ldyBMYXllclxuICAgICAgICBuYW1lOiBcInBsYXlCdXR0b25cIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICBpbWFnZTogXCJodHRwOi8vaHVnb21hZ2FsaGFlcy5kZXNpZ24vZnJhbWVyL2ltYWdlcy9wbGF5QnV0dG9uX2xvYWRlci5naWZcIlxuICAgICAgICBvcGFjaXR5OiAwXG5cbiAgICAgIEB0aW1lc3RhbXAgPSBuZXcgVGV4dExheWVyXG4gICAgICAgIG5hbWU6IFwidGltZXN0YW1wXCJcbiAgICAgICAgdGV4dDogQG9wdGlvbnMudGltZXN0YW1wIHx8IFwiMDowOFwiXG5cbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC45KVwiXG4gICAgICAgIGJvcmRlclJhZGl1czogMlxuICAgICAgICBwYWRkaW5nOiA1XG5cbiAgICAgICAgZm9udEZhbWlseTogUmV0aW5hRm9udFxuICAgICAgICBmb250V2VpZ2h0OiBSZXRpbmFGb250X01lZGl1bVxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiXG5cbiAgICAgIEB3YXRjaExhdGVyID0gbmV3IFNWR0xheWVyXG4gICAgICBcdHN2ZzpcbiAgICAgICAgXCJcIlwiXG4gICAgICBcdDxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgXHQgIDxwYXRoXG4gICAgICBcdCAgZD1cIk04LDE0LjcxODEwMDkgTDgsMTYgQzMuNTg4MTQ2MzQsMTYgMCwxMi40MTE4NTM3IDAsOCBDMCwzLjU4ODE0NjM0IDMuNTg4MTQ2MzQsMCA4LDAgQzEyLjQxMTg1MzcsMCAxNiwzLjU4ODE0NjM0IDE2LDggQzE2LDEyLjQxMTg1MzcgMTIuNDExODUzNywxNiA4LDE2IEw4LDE0LjcxODEwMDkgQzExLjcwMzg4MDMsMTQuNzE4MTAwOSAxNC43MTgxMDA5LDExLjcwMzg4MDMgMTQuNzE4MTAwOSw4IEMxNC43MTgxMDA5LDQuMjk2MTE5NjcgMTEuNzAzODgwMywxLjI4MTg5OTExIDgsMS4yODE4OTkxMSBDNC4yOTYxMTk2NywxLjI4MTg5OTExIDEuMjgxODk5MTEsNC4yOTYxMTk2NyAxLjI4MTg5OTExLDggQzEuMjgxODk5MTEsMTEuNzAzODgwMyA0LjI5NjExOTY3LDE0LjcxODEwMDkgOCwxNC43MTgxMDA5IFogTTguMjcwNTg4MjQsNy42MzgyMDA5MSBMMTEuMTE4MzEwNCw5Ljc5MDM0NjYyIEwxMC4zNTIyMzY5LDEwLjgwNDAxNjEgTDcuMDMzMjk3ODcsOC4yOTU3NTE2MyBMNyw4LjI5NTc1MTYzIEw3LDQgTDguMjcwNTg4MjQsNCBMOC4yNzA1ODgyNCw3LjYzODIwMDkxXCI+XG4gICAgICAgICAgPC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgXCJcIlwiXG4gICAgICBcdGZpbGw6IFwid2hpdGVcIlxuXG4gICAgICBAbGFiZWwgPSBuZXcgTGF5ZXJcbiAgICAgICAgbmFtZTogXCJsYWJlbFwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cbiAgICAgIEBsYWJlbElubmVyID0gbmV3IExheWVyXG4gICAgICAgIG5hbWU6IFwibGFiZWxJbm5lclwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cbiAgICAgIEBzb3VyY2UgPSBuZXcgVGV4dExheWVyXG4gICAgICAgIG5hbWU6IFwic291cmNlXCJcbiAgICAgICAgdGV4dDogQG9wdGlvbnMuc291cmNlIHx8IFwiU291cmNlXCJcblxuICAgICAgICBmb250RmFtaWx5OiBSZXRpbmFGb250XG4gICAgICAgIGZvbnRXZWlnaHQ6IFJldGluYUZvbnRfQm9sZFxuICAgICAgICBsaW5lSGVpZ2h0OiAxXG4gICAgICAgIGxldHRlclNwYWNpbmc6IC41XG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbiAgICAgICAgY29sb3I6IGNvbG9yX2dyZXlcblxuICAgICAgQGhlYWRlciA9IG5ldyBUZXh0TGF5ZXJcbiAgICAgICAgbmFtZTogXCJoZWFkZXJcIlxuICAgICAgICB0ZXh0OiBAb3B0aW9ucy5oZWFkZXIgfHwgXCJWaWRlbyBoZWFkZXJcIlxuXG4gICAgICAgIGZvbnRGYW1pbHk6IFJldGluYUZvbnRcbiAgICAgICAgZm9udFdlaWdodDogUmV0aW5hRm9udF9NZWRpdW1cbiAgICAgICAgY29sb3I6IGNvbG9yX2JsYWNrXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNVxuXG4gICAgICAjIEluaXRpYXRlcyBjb21wb25lbnRcbiAgICAgIHN1cGVyIEBvcHRpb25zXG5cblxuICAgICAgIy0tPiBBbmltYXRpb24gZGVmYXVsdHNcbiAgICAgIEBhbmltYXRpb25PcHRpb25zID1cbiAgICAgICAgY3VydmU6IFwiYmV6aWVyLWN1cnZlXCJcbiAgICAgICAgY3VydmVPcHRpb25zOiBbMC42NSwgMCwgMS4zNSwgMS41XVxuICAgICAgICB0aW1lOiAuNVxuXG4gICAgICAjIyMgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgICBDT01QT05FTlRTIFNQRUNJRklDQVRJT05cbiAgICAgICAgICAqIEFmdGVyIHRoZSBjb21wb25lbnRzIGFyZSBjcmVhdGVkLCBpdCBhc3NpZ25zIHRoZW0gYSBwYXJ0aWN1bGFyIGFuIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmUgYW5kIGEgc2V0IG9mIHN0eWxlc1xuICAgICAgICAgICogRGVmYXVsdCBzaXplOiBTbWFsbFxuICAgICAgICAgICogTWVkaXVtIGFuZCBsYXJnZSBzaXplcyBhcmUgZGVmaW5lZCB3aXRoaW4gYSBjb25kaXRpb25hbCBzdGF0ZW1lbnRcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6ICMjI1xuXG4gICAgICAjLS0+IFRodW1ibmFpbCB8IFNtYWxsXG4gICAgICBAdGh1bWJuYWlsLnBhcmVudCA9IEBcbiAgICAgIEB0aHVtYm5haWwud2lkdGggPSBAd2lkdGhcbiAgICAgIEB0aHVtYm5haWwuaGVpZ2h0ID0gQXNwZWN0UmF0aW8oQHdpZHRoKVxuICAgICAgQHRodW1ibmFpbC5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JleVwiXG5cbiAgICAgICMtLT4gVmlkZW8gfCBTbWFsbFxuICAgICAgQHZpZGVvLnBhcmVudCA9IEAudGh1bWJuYWlsXG4gICAgICBAdmlkZW8ud2lkdGggPSBALnRodW1ibmFpbC53aWR0aFxuICAgICAgQHZpZGVvLnkgPSAtMzhcblxuICAgICAgIy0tPiBPdmVybGF5IHwgU21hbGxcbiAgICAgIEBvdmVybGF5LnBhcmVudCA9IEAudGh1bWJuYWlsXG4gICAgICBAb3ZlcmxheS53aWR0aCA9IEAudGh1bWJuYWlsLndpZHRoXG4gICAgICBAb3ZlcmxheS5oZWlnaHQgPSBALnRodW1ibmFpbC5oZWlnaHRcblxuICAgICAgIy0tPiBQbGF5IEJ1dHRvbiB8IFNtYWxsXG4gICAgICBAcGxheUJ1dHRvbi5wYXJlbnQgPSBALnRodW1ibmFpbFxuICAgICAgQHBsYXlCdXR0b24uc2l6ZSA9IFNtYWxsQ2FyZFBsYXlCdXR0b25cbiAgICAgIEBwbGF5QnV0dG9uLnBvaW50ID0gQWxpZ24uY2VudGVyXG5cbiAgICAgICMtLT4gVGltZXN0YW1wIHwgU21hbGxcbiAgICAgIEB0aW1lc3RhbXAucGFyZW50ID0gQC50aHVtYm5haWxcbiAgICAgIEB0aW1lc3RhbXAuZm9udFNpemUgPSAxMFxuICAgICAgQHRpbWVzdGFtcC54ID0gQWxpZ24ucmlnaHQoLTgpXG4gICAgICBAdGltZXN0YW1wLnkgPSBBbGlnbi5ib3R0b20oLTgpXG5cbiAgICAgICMtLT4gV2F0Y2ggbGF0ZXIgfCBTbWFsbFxuICAgICAgQHdhdGNoTGF0ZXIucGFyZW50ID0gQC50aHVtYm5haWxcbiAgICAgIEB3YXRjaExhdGVyLnNpemUgPSAxNlxuICAgICAgQHdhdGNoTGF0ZXIueCA9IEFsaWduLnJpZ2h0KC04KVxuICAgICAgQHdhdGNoTGF0ZXIueSA9IDhcbiAgICAgIEB3YXRjaExhdGVyLm9wYWNpdHkgPSAwXG5cbiAgICAgICMtLT4gTGFiZWwgfCBTbWFsbFxuICAgICAgQGxhYmVsLnBhcmVudCA9IEBcbiAgICAgIEBsYWJlbC53aWR0aCA9IEB3aWR0aFxuICAgICAgQGxhYmVsLmhlaWdodCA9IEBoZWlnaHQgLSBALnRodW1ibmFpbC5oZWlnaHRcbiAgICAgIEBsYWJlbC55ID0gQWxpZ24uYm90dG9tXG5cbiAgICAgICMtLT4gTGFiZWxJbm5lciB8IFNtYWxsXG4gICAgICBAbGFiZWxJbm5lci5wYXJlbnQgPSBALmxhYmVsXG4gICAgICBAbGFiZWxJbm5lci53aWR0aCA9IEAubGFiZWwud2lkdGggLSAoU21hbGxDYXJkVGV4dFBhZGRpbmdbMV0gKiAyKVxuICAgICAgQGxhYmVsSW5uZXIuaGVpZ2h0ID0gQC5sYWJlbC5oZWlnaHQgLSAoU21hbGxDYXJkVGV4dFBhZGRpbmdbMF0gKyBTbWFsbENhcmRUZXh0UGFkZGluZ1syXSlcbiAgICAgIEBsYWJlbElubmVyLnBvaW50ID0gQWxpZ24uY2VudGVyXG5cbiAgICAgICMgVW5jb21tZW50IGxpbmUgdG8gc2VlIHRoZSBsYWJlbCBpbm5lciBwYWRkaW5nXG4gICAgICAjIEBsYWJlbElubmVyLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSg0MywxMTQsMjU1LC4yNSlcIlxuXG4gICAgICAjLS0+IFNvdXJjZSB8IFNtYWxsXG4gICAgICBAc291cmNlLnBhcmVudCA9IEAubGFiZWxJbm5lclxuICAgICAgQHNvdXJjZS5mb250U2l6ZSA9IFNtYWxsQ2FyZFRleHRfc291cmNlXG4gICAgICBAc291cmNlLndpZHRoID0gQC5sYWJlbElubmVyLndpZHRoXG5cbiAgICAgICMtLT4gSGVhZGVyIHwgU21hbGxcbiAgICAgIEBoZWFkZXIucGFyZW50ID0gQC5sYWJlbElubmVyXG4gICAgICBAaGVhZGVyLmZvbnRTaXplID0gU21hbGxDYXJkVGV4dF9oZWFkZXJbMF1cbiAgICAgIEBoZWFkZXIud2lkdGggPSBALmxhYmVsSW5uZXIud2lkdGhcbiAgICAgIEBoZWFkZXIueSA9IEAuc291cmNlLm1heFlcbiAgICAgIEBoZWFkZXIuaGVpZ2h0ID0gQC5sYWJlbElubmVyLmhlaWdodCAtIEAuc291cmNlLmhlaWdodFxuICAgICAgQGhlYWRlci5wYWRkaW5nID1cbiAgICAgICAgdG9wOiA0XG4gICAgICBAaGVhZGVyLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIlxuXG4gICAgICAjIyMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICB8fHwtLT4gTWVkaXVtIHZpZGVvIGNhcmQgPC0tfHx8fFxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAjIyNcbiAgICAgIGlmIEBvcHRpb25zLmZvcm1hdCBpcyBcIm1lZGl1bVwiXG4gICAgICAgIEAud2lkdGggPSBNZWRpdW1DYXJkV2lkdGhcbiAgICAgICAgQC5oZWlnaHQgPSBNZWRpdW1DYXJkSGVpZ2h0XG5cbiAgICAgICAgIy0tPiBUaHVtYm5haWwgfCBNZWRpdW1cbiAgICAgICAgQC50aHVtYm5haWwud2lkdGggPSBNZWRpdW1DYXJkV2lkdGhcbiAgICAgICAgQC50aHVtYm5haWwuaGVpZ2h0ID0gQXNwZWN0UmF0aW8oQHdpZHRoKVxuXG4gICAgICAgICMtLT4gVmlkZW8gfCBNZWRpdW1cbiAgICAgICAgQHZpZGVvLndpZHRoID0gQC50aHVtYm5haWwud2lkdGhcbiAgICAgICAgQHZpZGVvLnkgPSAtMTZcblxuICAgICAgICAjLS0+IE92ZXJsYXkgfCBNZWRpdW1cbiAgICAgICAgQG92ZXJsYXkud2lkdGggPSBALnRodW1ibmFpbC53aWR0aFxuICAgICAgICBAb3ZlcmxheS5oZWlnaHQgPSBALnRodW1ibmFpbC5oZWlnaHRcblxuICAgICAgICAjLS0+IFBsYXkgQnV0dG9uIHwgTWVkaXVtXG4gICAgICAgIEBwbGF5QnV0dG9uLnNpemUgPSBNZWRpdW1DYXJkUGxheUJ1dHRvblxuICAgICAgICBAcGxheUJ1dHRvbi5wb2ludCA9IEFsaWduLmNlbnRlclxuXG4gICAgICAgICMtLT4gVGltZXN0YW1wIHwgTWVkaXVtXG4gICAgICAgIEB0aW1lc3RhbXAueCA9IEFsaWduLnJpZ2h0KC04KVxuICAgICAgICBAdGltZXN0YW1wLnkgPSBBbGlnbi5ib3R0b20oLTgpXG5cbiAgICAgICAgIy0tPiBXYXRjaCBsYXRlciB8IE1lZGl1bVxuICAgICAgICBAd2F0Y2hMYXRlci54ID0gQWxpZ24ucmlnaHQoLTgpXG4gICAgICAgIEB3YXRjaExhdGVyLnkgPSA4XG5cbiAgICAgICAgIy0tPiBMYWJlbCB8IE1lZGl1bVxuICAgICAgICBAbGFiZWwud2lkdGggPSBAd2lkdGhcbiAgICAgICAgQGxhYmVsLmhlaWdodCA9IEBoZWlnaHQgLSBALnRodW1ibmFpbC5oZWlnaHRcbiAgICAgICAgQGxhYmVsLnkgPSBBbGlnbi5ib3R0b21cblxuICAgICAgICAjLS0+IExhYmVsSW5uZXIgfCBNZWRpdW1cbiAgICAgICAgQGxhYmVsSW5uZXIud2lkdGggPSBALmxhYmVsLndpZHRoIC0gKE1lZGl1bUNhcmRUZXh0UGFkZGluZ1sxXSAqIDIpXG4gICAgICAgIEBsYWJlbElubmVyLmhlaWdodCA9IEAubGFiZWwuaGVpZ2h0IC0gKE1lZGl1bUNhcmRUZXh0UGFkZGluZ1swXSArIE1lZGl1bUNhcmRUZXh0UGFkZGluZ1syXSlcbiAgICAgICAgQGxhYmVsSW5uZXIucG9pbnQgPSBBbGlnbi5jZW50ZXJcblxuICAgICAgICAjLS0+IFNvdXJjZSB8IE1lZGl1bVxuICAgICAgICBAc291cmNlLmZvbnRTaXplID0gTWVkaXVtQ2FyZFRleHRfc291cmNlXG4gICAgICAgIEBzb3VyY2Uud2lkdGggPSBALmxhYmVsSW5uZXIud2lkdGhcblxuICAgICAgICAjLS0+IEhlYWRlciB8IE1lZGl1bVxuICAgICAgICBAaGVhZGVyLmZvbnRTaXplID0gTWVkaXVtQ2FyZFRleHRfaGVhZGVyWzBdXG4gICAgICAgIEBoZWFkZXIubGluZUhlaWdodCA9IE1lZGl1bUNhcmRUZXh0X2hlYWRlclsxXVxuICAgICAgICBAaGVhZGVyLndpZHRoID0gQC5sYWJlbElubmVyLndpZHRoXG4gICAgICAgIEBoZWFkZXIueSA9IEAuc291cmNlLm1heFlcbiAgICAgICAgQGhlYWRlci5oZWlnaHQgPSBALmxhYmVsSW5uZXIuaGVpZ2h0IC0gQC5zb3VyY2UuaGVpZ2h0XG4gICAgICAgIEBoZWFkZXIucGFkZGluZyA9XG4gICAgICAgICAgdG9wOiA0XG4gICAgICAgIEBoZWFkZXIudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiXG5cblxuICAgICAgIyMjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgfHx8LS0+IExhcmdlIHZpZGVvIGNhcmQgPC0tfHx8fFxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAjIyNcblxuICAgICAgaWYgQG9wdGlvbnMuZm9ybWF0IGlzIFwibGFyZ2VcIlxuICAgICAgICBALndpZHRoID0gTGFyZ2VDYXJkV2lkdGhcbiAgICAgICAgQC5oZWlnaHQgPSBMYXJnZUNhcmRIZWlnaHRcblxuICAgICAgICAjLS0+IFRodW1ibmFpbCB8IExhcmdlXG4gICAgICAgIEAudGh1bWJuYWlsLndpZHRoID0gTGFyZ2VDYXJkV2lkdGhcbiAgICAgICAgQC50aHVtYm5haWwuaGVpZ2h0ID0gQXNwZWN0UmF0aW8oQHdpZHRoKVxuXG4gICAgICAgICMtLT4gVmlkZW8gfCBNZWRpdW1cbiAgICAgICAgQHZpZGVvLndpZHRoID0gQC50aHVtYm5haWwud2lkdGhcbiAgICAgICAgQHZpZGVvLmhlaWdodCA9IEAudGh1bWJuYWlsLmhlaWdodFxuICAgICAgICBAdmlkZW8ueSA9IDBcblxuICAgICAgICAjLS0+IE92ZXJsYXkgfCBNZWRpdW1cbiAgICAgICAgQG92ZXJsYXkud2lkdGggPSBALnRodW1ibmFpbC53aWR0aFxuICAgICAgICBAb3ZlcmxheS5oZWlnaHQgPSBALnRodW1ibmFpbC5oZWlnaHRcblxuICAgICAgICAjLS0+IFBsYXkgQnV0dG9uIHwgTGFyZ2VcbiAgICAgICAgQHBsYXlCdXR0b24uc2l6ZSA9IExhcmdlQ2FyZFBsYXlCdXR0b25cbiAgICAgICAgQHBsYXlCdXR0b24ucG9pbnQgPSBBbGlnbi5jZW50ZXJcblxuICAgICAgICAjLS0+IFRpbWVzdGFtcCB8IExhcmdlXG4gICAgICAgIEB0aW1lc3RhbXAueCA9IEFsaWduLnJpZ2h0KC04KVxuICAgICAgICBAdGltZXN0YW1wLnkgPSBBbGlnbi5ib3R0b20oLTgpXG5cbiAgICAgICAgIy0tPiBXYXRjaCBsYXRlciB8IExhcmdlXG4gICAgICAgIEB3YXRjaExhdGVyLnNpemUgPSAyNFxuICAgICAgICBAd2F0Y2hMYXRlci54ID0gQWxpZ24ucmlnaHQoLTgpXG4gICAgICAgIEB3YXRjaExhdGVyLnkgPSA4XG5cbiAgICAgICAgIy0tPiBMYWJlbCB8IExhcmdlXG4gICAgICAgIEBsYWJlbC53aWR0aCA9IEB3aWR0aFxuICAgICAgICBAbGFiZWwuaGVpZ2h0ID0gQGhlaWdodCAtIEAudGh1bWJuYWlsLmhlaWdodFxuICAgICAgICBAbGFiZWwueSA9IEFsaWduLmJvdHRvbVxuXG4gICAgICAgICMtLT4gTGFiZWxJbm5lciB8IExhcmdlXG4gICAgICAgIEBsYWJlbElubmVyLndpZHRoID0gQC5sYWJlbC53aWR0aCAtIChMYXJnZUNhcmRUZXh0UGFkZGluZ1sxXSAqIDIpXG4gICAgICAgIEBsYWJlbElubmVyLmhlaWdodCA9IEAubGFiZWwuaGVpZ2h0IC0gKExhcmdlQ2FyZFRleHRQYWRkaW5nWzBdICsgTGFyZ2VDYXJkVGV4dFBhZGRpbmdbMl0pXG4gICAgICAgIEBsYWJlbElubmVyLnBvaW50ID0gQWxpZ24uY2VudGVyXG5cbiAgICAgICAgIy0tPiBTb3VyY2UgfCBMYXJnZVxuICAgICAgICBAc291cmNlLmZvbnRTaXplID0gTGFyZ2VDYXJkVGV4dF9zb3VyY2VcbiAgICAgICAgQHNvdXJjZS53aWR0aCA9IEAubGFiZWxJbm5lci53aWR0aFxuXG4gICAgICAgICMtLT4gSGVhZGVyIHwgTGFyZ2VcbiAgICAgICAgQGhlYWRlci5mb250U2l6ZSA9IExhcmdlQ2FyZFRleHRfaGVhZGVyWzBdXG4gICAgICAgIEBoZWFkZXIubGluZUhlaWdodCA9IExhcmdlQ2FyZFRleHRfaGVhZGVyWzFdXG4gICAgICAgIEBoZWFkZXIud2lkdGggPSBALmxhYmVsSW5uZXIud2lkdGhcbiAgICAgICAgQGhlYWRlci55ID0gQC5zb3VyY2UubWF4WVxuICAgICAgICBAaGVhZGVyLmhlaWdodCA9IEAubGFiZWxJbm5lci5oZWlnaHQgLSBALnNvdXJjZS5oZWlnaHRcbiAgICAgICAgQGhlYWRlci5wYWRkaW5nID1cbiAgICAgICAgICB0b3A6IDRcbiAgICAgICAgQGhlYWRlci50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCJcblxuXG4gICAgICAjIyMgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgICBFVkVOVFNcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6ICMjI1xuXG4gICAgICBALm9uTW91c2VPdmVyIEBQcmV2aWV3T05cbiAgICAgIEAub25Nb3VzZU91dCBAUHJldmlld09GRlxuXG4gICAgIyMjXG4gICAg4oazIEdldHRlcnMgJiBzZXR0ZXI6XG4gICAgXHRhLiBGb3JtYXRcbiAgICBcdGIuIFN1Yi1pdGVtIDJcbiAgICAjIyNcbiAgICBAZGVmaW5lICdmb3JtYXQnLFxuICAgICAgZ2V0OiAtPlxuICAgICAgICBAb3B0aW9ucy5mb3JtYXRcbiAgICAgIHNldDogKHZhbHVlKSAtPlxuICAgICAgICBAb3B0aW9ucy5mb3JtYXQgPSB2YWx1ZVxuXG4gICAgICAgIGlmIEBvcHRpb25zLmZvcm1hdCBpcyBcInNtYWxsXCJcbiAgICAgICAgICBALndpZHRoID0gU21hbGxDYXJkV2lkdGhcbiAgICAgICAgICBALmhlaWdodCA9IFNtYWxsQ2FyZEhlaWdodFxuXG4gICAgICAgIGlmIEBvcHRpb25zLmZvcm1hdCBpcyBcIm1lZGl1bVwiXG4gICAgICAgICAgQC53aWR0aCA9IE1lZGl1bUNhcmRXaWR0aFxuICAgICAgICAgIEAuaGVpZ2h0ID0gTWVkaXVtQ2FyZEhlaWdodFxuXG4gICAgICAgIGVsc2UgaWYgQG9wdGlvbnMuZm9ybWF0IGlzIFwibGFyZ2VcIlxuICAgICAgICAgIEAud2lkdGggPSBMYXJnZUNhcmRXaWR0aFxuICAgICAgICAgIEAuaGVpZ2h0ID0gTGFyZ2VDYXJkSGVpZ2h0XG5cblxuICAgICMtLT4gRXZlbnQgZnVuY3Rpb25zXG4gICAgUHJldmlld09OOiA9PlxuICAgICAgICBAYW5pbWF0ZVxuICAgICAgICAgIHk6IEB5IC0gMTBcbiAgICAgICAgICBzaGFkb3dZOiA3XG4gICAgICAgICAgc2hhZG93Qmx1cjogMTBcbiAgICAgICAgICBzaGFkb3dTcHJlYWQ6IDNcblxuICAgICAgICBAdmlkZW8uYW5pbWF0ZVxuICAgICAgICAgIHNjYWxlOiAxLjA1XG5cbiAgICAgICAgQG92ZXJsYXkuYW5pbWF0ZVxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogb3ZlcmxheV9vcGFjaXR5XG5cbiAgICAgICAgQHBsYXlCdXR0b24uYW5pbWF0ZVxuICAgICAgICAgIG9wYWNpdHk6IDFcblxuICAgICAgICBAd2F0Y2hMYXRlci5hbmltYXRlXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIG9wdGlvbnM6XG4gICAgICAgICAgICBkZWxheTogLjI1XG5cbiAgICAgICAgVXRpbHMuZGVsYXkgLjEsICA9PlxuICAgICAgICAgIEAudmlkZW8ucGxheWVyLnBsYXkoKVxuICAgICAgICAgIEAudmlkZW8ucGxheWVyLmxvb3AgPSB0cnVlXG5cbiAgICBQcmV2aWV3T0ZGOiA9PlxuICAgICAgQGFuaW1hdGVcbiAgICAgICAgeTogQHkgKyAxMFxuICAgICAgICBzaGFkb3dZOiAyXG4gICAgICAgIHNoYWRvd0JsdXI6IDRcbiAgICAgICAgc2hhZG93U3ByZWFkOiAwXG5cbiAgICAgIEB2aWRlby5hbmltYXRlXG4gICAgICAgIHNjYWxlOiAxXG5cbiAgICAgIEBvdmVybGF5LmFuaW1hdGVcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblxuICAgICAgQHBsYXlCdXR0b24uYW5pbWF0ZVxuICAgICAgICBvcGFjaXR5OiAwXG5cbiAgICAgIEB3YXRjaExhdGVyLmFuaW1hdGVcbiAgICAgICAgb3BhY2l0eTogMFxuXG4gICAgICBALnZpZGVvLnBsYXllci5wYXVzZSgpXG4gICAgICBALnZpZGVvLnBsYXllci5sb29wID0gZmFsc2VcblxuICAgICAgVXRpbHMuZGVsYXkgLjI1LCA9PlxuICAgICAgICBALnZpZGVvLnBsYXllci5jdXJyZW50VGltZSA9IDBcblxuICAgICAgICAjICMjIy0tPiBBc3NpZ25zIGEgcmFuZG9tIG51bWJlciBhbmQgdHJpY2tzIHRoZSBwYWdlXG4gICAgXHRcdCMgIyBpbnRvIHJlbG9hZGluZyB0aGUgc2FtZSBjb21wb25lbnQgZWFjaCB0aW1lIGl0IHBsYXlzICMjI1xuICAgICAgICBALnBsYXlCdXR0b24uaW1hZ2UgPSBcImh0dHA6Ly9odWdvbWFnYWxoYWVzLmRlc2lnbi8vZnJhbWVyL3ZpZGVvcy9wbGF5QnV0dG9uX2xvYWRlci5naWZcIiArIFwiP2E9XCIgKyBNYXRoLnJhbmRvbSgpXG5cbiMgRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gVmlkZW9DYXJkXG4iLCIjIEZpbGU6IG1vZHVsZXMvbnBtLmNvZmZlZVxuXG5leHBvcnRzLmNvdW50dXAgPSByZXF1aXJlIFwiY291bnR1cC5qc1wiXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiY3VycmVudFByb2plY3QgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoLTJdXG5cbmlmIExheWVyLnByb3RvdHlwZS5pbWFnZUZpbGwgPT0gdW5kZWZpbmVkXG5cdExheWVyLnByb3RvdHlwZS5pbWFnZUZpbGwgPSAocSkgLT5cblx0XHRpZiAhcVxuXHRcdFx0cT1cIlwiXG5cdFx0aWYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWxsSW1hZ2VzXCIpXG5cdFx0XHRmaWxsSW1hZ2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpbGxJbWFnZXNcIikpXG5cdFx0XHRwcm9qZWN0ID0gXy5maW5kSW5kZXgoZmlsbEltYWdlcy5wcm9qZWN0cywge25hbWUgOiBjdXJyZW50UHJvamVjdH0pXG5cdFx0XHRpZiBwcm9qZWN0ICE9IC0xXG5cdFx0XHRcdGlmIEBuYW1lICE9IFwiXCJcblx0XHRcdFx0XHRpbWFnZU5iID0gXy5maW5kSW5kZXgoZmlsbEltYWdlcy5wcm9qZWN0c1twcm9qZWN0XS5pbWFnZUxpc3QsIHtuYW1lIDogQG5hbWV9KVxuXHRcdFx0XHRcdGlmKGltYWdlTmIgIT0gLTEpXG5cdFx0XHRcdFx0XHRAaW1hZ2UgPSBmaWxsSW1hZ2VzLnByb2plY3RzW3Byb2plY3RdLmltYWdlTGlzdFtpbWFnZU5iXS51cmxcblx0XHRcdFx0XHRcdEBpbWFnZVNhdmVkID0gdHJ1ZVxuXG5cdFx0aWYgIUBpbWFnZVNhdmVkXG5cdFx0XHRpZiAhQG5hbWVcblx0XHRcdFx0dGhyb3cgXCJBIG5hbWUgZm9yIHRoZSBsYXllciB5b3Ugd2FudCB0byBmaWxsIGlzIHJlcXVpcmVkXCJcblx0XHRcdFx0cmV0dXJuIDBcblx0XHRcdG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXHRcdFx0cmVzID0gXCJudWxsXCJcblx0XHRcdG9SZXEub25sb2FkID0gLT5cblx0XHRcdFx0YnVmZmVyID0gb1JlcS5yZXNwb25zZVxuXHRcdFx0XHRyZXMgPSBKU09OLnBhcnNlKGJ1ZmZlcilcblx0XHRcdG9SZXEub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP3F1ZXJ5PSN7cX0mY2xpZW50X2lkPWFmZjhjYzc2ODNiYjAwNTQzOTZhNzkwZDVkMGU5NDJhOTNkZTNhZTkzYWM4M2I4ZDEzZjZiZjg5YTk2YjNiYThcIiwgZmFsc2UpXG5cdFx0XHRvUmVxLnNlbmQoKVxuXHRcdFx0aWYgcmVzLmVycm9yc1xuXHRcdFx0XHR0aHJvdyBcIlNlYXJjaCB0ZXJtIGRpZG4ndCBnaXZlIGFueSByZXN1bHRcIlxuXHRcdFx0XHRyZXR1cm4gMFxuXHRcdFx0c2hvd0NyZWRpdChyZXMsIHRoaXMsIHEpXG5cdFx0XHRAaW1hZ2UgPSByZXMudXJscy5yZWd1bGFyXG5lbHNlXG5cdHRocm93IFwiTWV0aG9kIGltYWdlRmlsbCBhbHJlYWR5IGV4aXN0c1wiXG5cbnNob3dDcmVkaXQgPSAocGhvdG8sIGxheWVyLCBxKSAtPlxuXHRjcmVkaXQgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOiBcImNyZWRpdFwiXG5cdFx0eTogQWxpZ24uYm90dG9tKC04KVxuXHRcdGhlaWdodDogMzBcblx0XHRib3JkZXJSYWRpdXM6IDhcblx0XHR3aWR0aDogU2NyZWVuLndpZHRoIC0gMjBcblx0XHR4OiBBbGlnbi5jZW50ZXJcblx0XHRjbGlwOiB0cnVlXG5cdFx0b3BhY2l0eTogMFxuXHRcdGFuaW1PcHRpb25zOlxuXHRcdFx0dGltZTogMC4zXG5cdFx0XHRkZWxheTogMC4yXG5cblx0Y3JlZGl0LnN0YXRlcy5vbiA9XG5cdFx0b3BhY2l0eTogMVxuXHRcdGFuaW1PcHRpb25zOlxuXHRcdFx0dGltZTogMC4zXG5cdGNyZWRpdC5zdGF0ZUN5Y2xlKClcblxuXHRrZWVwSW1hZ2UgPSBuZXcgVGV4dExheWVyXG5cdFx0bmFtZTogXCJrZWVwXCJcblx0XHRwYXJlbnQ6IGNyZWRpdFxuXHRcdHRleHQ6IFwi4pyU77iOXCJcblx0XHRmb250U2l6ZTogMjBcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRjb2xvcjogXCIjZmZmZmZmXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzY5QzY0MFwiXG5cdFx0bGluZUhlaWdodDogMS41NVxuXHRcdHdpZHRoOiA0MFxuXHRcdGhlaWdodDogMzBcblx0XHR4OiBBbGlnbi5yaWdodFxuXHRcdHk6IDBcblxuXHRrZWVwSW1hZ2Uuc3RhdGVzLnNlbGVjdGVkID1cblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJENTYxQ1wiXG5cdFx0YW5pbU9wdGlvbnM6XG5cdFx0XHR0aW1lOiAwLjFcblxuXHRrZWVwSW1hZ2Uub24gRXZlbnRzLlRhcCwgLT5cblx0XHRrZWVwSW1hZ2Uuc3RhdGVDeWNsZSgpXG5cdFx0ZmlsbEltYWdlcyA9IHtwcm9qZWN0czogW119XG5cdFx0aWYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWxsSW1hZ2VzXCIpXG5cdFx0XHRmaWxsSW1hZ2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpbGxJbWFnZXNcIikpXG5cdFx0cHJvamVjdE5iID0gXy5maW5kSW5kZXgoZmlsbEltYWdlcy5wcm9qZWN0cywge25hbWUgOiBjdXJyZW50UHJvamVjdH0pXG5cdFx0aWYgcHJvamVjdE5iIDwgMFxuXHRcdFx0cHJvamVjdE5iID0gZmlsbEltYWdlcy5wcm9qZWN0cy5sZW5ndGhcblx0XHRcdG5ld1Byb2plY3QgPSB7bmFtZTogY3VycmVudFByb2plY3QsIGltYWdlTGlzdDogW119XG5cdFx0XHRmaWxsSW1hZ2VzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcblx0XHRmaWxsSW1hZ2VzLnByb2plY3RzW3Byb2plY3ROYl0uaW1hZ2VMaXN0LnB1c2goe25hbWU6IGxheWVyLm5hbWUsIHVybCA6IHBob3RvLnVybHMucmVndWxhcn0pXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaWxsSW1hZ2VzXCIsIEpTT04uc3RyaW5naWZ5KGZpbGxJbWFnZXMpKVxuXHRcdGNyZWRpdC5zdGF0ZUN5Y2xlKClcblx0XHRjcmVkaXQub24gRXZlbnRzLlN0YXRlU3dpdGNoRW5kLCAtPlxuXHRcdFx0Y3JlZGl0LmRlc3Ryb3koKVxuXG5cdGNoYW5nZUltYWdlID0gbmV3IFRleHRMYXllclxuXHRcdG5hbWU6IFwiY2hhbmdlXCJcblx0XHRwYXJlbnQ6IGNyZWRpdFxuXHRcdHRleHQ6IFwi4pyYXCJcblx0XHRmb250U2l6ZTogMjBcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRjb2xvcjogXCIjZmZmZmZmXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0Q1MzczQ1wiXG5cdFx0d2lkdGg6IDQwXG5cdFx0aGVpZ2h0OiAzMFxuXHRcdGxpbmVIZWlnaHQ6IDEuNTVcblx0XHR4OiBBbGlnbi5yaWdodCgtNDApXG5cdFx0eTogMFxuXG5cdGNoYW5nZUltYWdlLnN0YXRlcy5zZWxlY3RlZCA9XG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiM3NDFFMjFcIlxuXHRcdGFuaW1PcHRpb25zOlxuXHRcdFx0dGltZTogMC4xXG5cblx0Y2hhbmdlSW1hZ2Uub24gRXZlbnRzLlRhcCwgLT5cblx0XHRjaGFuZ2VJbWFnZS5zdGF0ZUN5Y2xlKClcblx0XHRjcmVkaXQuc3RhdGVDeWNsZSgpXG5cdFx0Y3JlZGl0Lm9uIEV2ZW50cy5TdGF0ZVN3aXRjaEVuZCwgLT5cblx0XHRcdGNyZWRpdC5kZXN0cm95KClcblx0XHRcdGxheWVyLmltYWdlRmlsbChxKVxuXG5cdGNyZWRpdFVuc3BsYXNoID0gbmV3IFRleHRMYXllclxuXHRcdG5hbWU6IFwiVW5zcGxhc2hcIlxuXHRcdHBhcmVudDogY3JlZGl0XG5cdFx0Zm9udFNpemU6IDEwXG5cdFx0Y29sb3I6IFwiIzAwMDAwMFwiXG5cdFx0dGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJcblx0XHR0ZXh0OiBcIkltYWdlIGZyb20gVW5zcGxhc2hcIlxuXHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdHg6IDEyXG5cdGNyZWRpdFVuc3BsYXNoLm9uIEV2ZW50cy5UYXAsIC0+XG5cdFx0d2luZG93Lm9wZW4oXCJodHRwczovL3Vuc3BsYXNoLmNvbS8/dXRtX3NvdXJjZT1mcmFtZXJJbWFnZUZpbGwmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY2FtcGFpZ249YXBpLWNyZWRpdFwiLCBcIl9ibGFua1wiKVxuXG5cdGNyZWRpdFBob3RvID0gbmV3IFRleHRMYXllclxuXHRcdG5hbWU6IFwiUGhvdG9ncmFwaGVyXCJcblx0XHRwYXJlbnQ6IGNyZWRpdFxuXHRcdGZvbnRTaXplOiAxMFxuXHRcdGNvbG9yOiBcIiMwMDAwMDBcIlxuXHRcdHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG5cdFx0dGV4dDogXCJQaG90byBieSAje3Bob3RvLnVzZXIudXNlcm5hbWV9XCJcblx0XHR0cnVuY2F0ZTogdHJ1ZVxuXHRcdHdpZHRoOiBjcmVkaXQud2lkdGggLSAxMjIgLSA4MFxuXHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdHg6IDEyMlxuXG5cdGNyZWRpdFBob3RvLm9uIEV2ZW50cy5UYXAsIC0+XG5cdFx0d2luZG93Lm9wZW4oXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AI3twaG90by51c2VyLnVzZXJuYW1lfT91dG1fc291cmNlPWZyYW1lckltYWdlRmlsbCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jYW1wYWlnbj1hcGktY3JlZGl0XCIsIFwiX2JsYW5rXCIpXG4iLCIjIyNcblx0IyBVU0lORyBUSEUgQ0FST1VTRUxDT01QT05FTlRcblxuXHQjIFJlcXVpcmUgdGhlIG1vZHVsZVxuXHRDYXJvdXNlbENvbXBvbmVudCA9IHJlcXVpcmUgXCJDYXJvdXNlbENvbXBvbmVudFwiXG5cblx0bXlDYXJvdXNlbCA9IG5ldyBDYXJvdXNlbENvbXBvbmVudFxuXHRcdCMgSXRlbSBjZWxsc1xuXHRcdGl0ZW1Db3VudDogPG51bWJlcj5cblx0XHRyb3VuZGVkOiA8Ym9vbGVhbj5cblx0XHRpdGVtTWFyZ2luOiA8bnVtYmVyPlxuXHRcdGl0ZW1Cb3JkZXJSYWRpdXM6IDxudW1iZXI+XG5cdFx0aXRlbVdpZHRoOiA8bnVtYmVyPlxuXHRcdGl0ZW1IZWlnaHQ6IDxudW1iZXI+XG5cdFx0c21hbGxJdGVtV2lkdGg6IDxudW1iZXI+XG5cdFx0c21hbGxJdGVtSGVpZ2h0OiA8bnVtYmVyPlxuXG5cdFx0IyBMYWJlbHNcblx0XHR0aXRsZTogPHN0cmluZz5cblx0XHRsaW5rOiA8c3RyaW5nPlxuXHRcdGNhcHRpb25zOiA8YXJyYXkgb2Ygc3RyaW5ncz5cblx0XHRzdWJjYXB0aW9uczogPGFycmF5IG9mIHN0cmluZ3M+XG5cblx0XHQjIExheW91dFxuXHRcdG1hcmdpbnM6IDxhcnJheSBvZiBudW1iZXJzPiAoW3RvcE1hcmdpbiwgcmlnaHRNYXJnaW4sIGJvdHRvbU1hcmdpbiwgbGVmdE1hcmdpbl0pXG5cdFx0d3JhcDogPGJvb2xlYW4+XG5cdFx0c2lkZUNhcHRpb25zOiA8Ym9vbGVhbj5cblx0XHR0b3BBbGlnblNpZGVDYXB0aW9uczogPGJvb2xlYW4+XG5cblx0XHQjIEhlcm8tc3BlY2lmaWMgY29udHJvbHNcblx0XHRoZXJvQ2FwdGlvbkFsaWduOiA8c3RyaW5nPiAoXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiKVxuXHRcdGNlbnRlcmhlcm9JdGVtOiA8Ym9vbGVhbj5cblx0XHRzaWRlSGVyb0NhcHRpb246IDxib29sZWFuPlxuXHRcdHRvcEFsaWduSGVyb0NhcHRpb246IDxib29sZWFuPlxuXG5cdFx0IyBDb2xvcnNcblx0XHRib3hDb2xvcjogPHN0cmluZz4gKGhleCBvciByZ2JhKVxuXHRcdGljb25Db2xvcjogPHN0cmluZz4gKGhleCBvciByZ2JhKVxuXHRcdHRpdGxlQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblx0XHRsaW5rQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblx0XHRjYXB0aW9uQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblx0XHRzdWJjYXB0aW9uQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblxuXHRcdCMgVHlwb2dyYXBoeVxuXHRcdGZvbnRGYW1pbHk6IDxzdHJpbmc+XG5cdFx0dGl0bGVGb250U2l6ZTogPG51bWJlcj5cblx0XHR0aXRsZUZvbnRXZWlnaHQ6IDxudW1iZXI+XG5cdFx0dGl0bGVNYXJnaW46IDxudW1iZXI+XG5cdFx0bGlua0ZvbnRTaXplOiA8bnVtYmVyPlxuXHRcdGxpbmtGb250V2VpZ2h0OiA8bnVtYmVyPlxuXHRcdGNhcHRpb25Gb250U2l6ZTogPG51bWJlcj5cblx0XHRjYXB0aW9uRm9udFdlaWdodDogPG51bWJlcj5cblx0XHRjYXB0aW9uTWFyZ2luOiA8bnVtYmVyPlxuXHRcdGNhcHRpb25NYXhIZWlnaHQ6IDxudW1iZXI+XG5cdFx0c3ViY2FwdGlvbkZvbnRTaXplOiA8bnVtYmVyPlxuXHRcdHN1YmNhcHRpb25Gb250V2VpZ2h0OiA8bnVtYmVyPlxuXHRcdHN1YmNhcHRpb25NYXJnaW46IDxudW1iZXI+XG5cdFx0c3ViY2FwdGlvbk1heEhlaWdodDogPG51bWJlcj5cblx0XHR0aXRsZUFsaWduOiA8c3RyaW5nPiAoXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiKVxuXHRcdGNhcHRpb25BbGlnbjogPHN0cmluZz4gKFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIilcblxuXHRcdCMgSWNvbnNcblx0XHRpY29uczogPGJvb2xlYW4+XG5cdFx0aWNvbkJvcmRlclJhZGl1czogPG51bWJlcj5cblx0XHRpY29uU2l6ZTogPG51bWJlcj5cblx0XHRpY29uTWFyZ2luOiA8bnVtYmVyPlxuXG5cdFx0IyBJbWFnZSBhc3NldHNcblx0XHRpbWFnZVByZWZpeDogPHN0cmluZz4gKFwiaW1hZ2VzXCIgZGlyZWN0b3J5IGFzc3VtZWQpXG5cdFx0aW1hZ2VTdWZmaXg6IDxzdHJpbmc+XG5cdFx0aWNvblByZWZpeDogPHN0cmluZz4gKFwiaW1hZ2VzXCIgZGlyZWN0b3J5IGFzc3VtZWQpXG5cdFx0aWNvblN1ZmZpeDogPHN0cmluZz5cblxuXHRcdCMgQWN0aW9uc1xuXHRcdGl0ZW1BY3Rpb25zOiA8YXJyYXkgb2YgYWN0aW9ucz5cblx0XHRsaW5rQWN0aW9uOiA8YWN0aW9uPlxuXG5cdFx0IyBWaWV3IENhcm91c2VsQ29tcG9uZW50IGZyYW1lXG5cdFx0ZGVidWc6IDxib29sZWFuPlxuXG5cdFx0IyBPdGhlclxuXHRcdGZvcmNlU2Nyb2xsaW5nOiA8Ym9vbGVhbj5cblxuXHQjIFVzaW5nIHNpZGUgY2FwdGlvbnNcblx0U3BlY2lmeSBzaWRlQ2FwdGlvbnM6IHRydWUgdG8gdmVydGljYWxseSBhbGlnbiBjYXB0aW9ucyBhbG9uZ3NpZGUgY2VsbHMgcmF0aGVyIHRoYW4gdW5kZXJuZWF0aC4gU3BlY2lmeSB0b3BBbGlnblNpZGVDYXB0aW9uczogdHJ1ZSB0byBhbGlnbiBzaWRlIGNhcHRpb25zIHRvIHRoZSB0b3BzIG9mIHRoZWlyIGFkamFjZW50IGNlbGxzLlxuXG5cdCMgVXNpbmcgdGhlIHdyYXAgZmVhdHVyZVxuXHQjIElmIHlvdSBzcGVjaWZ5IHdyYXA6IHRydWUsIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBjYXJvdXNlbCB3aWxsIGRpc3BsYXkgb24gaXRzIG93biByb3cgYXMgYSBcImhlcm9cIiBpdGVtLiBUaGlzIGl0ZW0gY2FuIGJlIGNvbnRyb2xsZWQgaW5kZXBlbmRlbnRseSBvZiB0aGUgcmVzdCBvZiB0aGUgY2Fyb3VzZWwuIFNlY29uZGFyeSBjZWxscyB3aWxsIGJlIHNpemVkIGFjY29yZGluZyB0byBzbWFsbEl0ZW1XaWR0aCBhbmQgc21hbGxJdGVtSGVpZ2h0IHJhdGhlciB0aGFuIGl0ZW1XaWR0aCBhbmQgaXRlbUhlaWdodC5cblxuXHQjIFVzaW5nIGljb25zXG5cdCMgSWNvbnMgY2FuIGJlIGRpc3BsYXllZCB1bmRlciBlYWNoIGl0ZW0ncyBjZWxsLiBTcGVjaWZ5IGljb25zOiB0cnVlIHRvIGVuYWJsZSB0aGlzLiBFbmFibGluZyBpY29ucyBwcmV2ZW50cyB0aGUgdXNlIG9mIHNpZGUgY2FwdGlvbnMuXG5cblx0IyBVc2luZyBpbWFnZXNcblx0IyBBbGwgaW1hZ2VzIGFyZSBhc3N1bWVkIHRvIGxpdmUgaW4gdGhlIGltYWdlcyBkaXJlY3RvcnkgYW5kIGJlIG51bWJlcmVkIHdpdGggYW4gaW5pdGlhbCBpbmRleCBvZiB6ZXJvLiBZb3UgbWF5IHN1cHBseSBib3RoIGEgcHJlZml4IGFuZCBzdWZmaXguIElmIHlvdXIgaXRlbSBpbWFnZXMgYXJlIGxvY2F0ZWQgaW4gYW4gXCJpdGVtc1wiIGRpcmVjdG9yeSB3aXRoaW4gXCJpbWFnZXNcIiBhbmQgbmFtZWQ6XG5cblx0Y2VsbDAucG5nXG5cdGNlbGwxLnBuZ1xuXHRjZWxsMi5wbmdcblxuXHQjIHRoZW4geW91ciBpbWFnZVByZWZpeCB3b3VsZCBiZSBcIml0ZW1zL2NlbGxcIiBhbmQgeW91ciBzdWZmaXggd291bGQgYmUgXCJwbmdcIi5cblxuXHQjIEljb24gYXNzZXRzIHdvcmsgdGhlIHNhbWUgd2F5LlxuXG5cdCMgRG8gbm90IGluY2x1ZGUgdGhlIGltYWdlcyBkaXJlY3RvcnkgaW4gaW1hZ2VQcmVmaXggb3IgaWNvblByZWZpeC5cblxuXHQjIEFzc2lnbmluZyBtYXJnaW5zXG5cdCMgTWFyZ2lucyBhcmUgc3VwcGxpZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgZm9yIENTUy4gbWFyZ2luczogWzQwLCAxMCwgMTUsIDVdIHdpbGwgcHJvdmlkZSBhIHRvcCBtYXJnaW4gb2YgNDAsIGEgcmlnaHQgbWFyZ2luIG9mIDEwLCBhIGJvdHRvbSBtYXJnaW4gb2YgMTUgYW5kIGEgbGVmdCBtYXJnaW4gb2YgNS4gVGhlIGZpcnN0IGl0ZW0gaXMgcG9zaXRpb25lZCBhY2NvcmRpbmcgdG8gdGhlIHRvcCBtYXJnaW47IGhvd2V2ZXIgdGhlIHRpdGxlIGFuZCBsaW5rIGFyZSBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSBmaXJzdCBpdGVtIHVzaW5nIHRpdGxlTWFyZ2luLlxuXG5cdCMgU2Nyb2xsaW5nXG5cdCMgVGhlIENhcm91c2VsQ29tcG9uZW50IHdpbGwgYXR0ZW1wdCB0byBwcm92aWRlIHNjcm9sbGluZyBvbmx5IHdoZW4gaXRzIGNvbnRlbnQgZXh0ZW5kcyBiZXlvbmQgdGhlIHZpc2libGUgYXJlYS4gVG8gZW5mb3JjZSBzY3JvbGxpbmcgcmVnYXJkbGVzcywgc3BlY2lmeSBmb3JjZVNjcm9sbGluZzogdHJ1ZS5cblxuXHQjIEFzc2lnbmluZyBhY3Rpb25zXG5cdCMgVGhlIGxpbmsgYnV0dG9uIGluIHRoZSB1cHBlciByaWdodCBvZiB0aGUgY2Fyb3VzZWwgY2FuIGJlIGdpdmVuIGFuIGFjdGlvbiwgYXMgY2FuIGluZGl2aWR1YWwgaXRlbSBjZWxscy4gVGhlIGxpbmsgd2lsbCBvbmx5IGFwcGVhciBpZiB5b3Ugc3VwcGx5IGEgc3RyaW5nIHdpdGggbGluazogPHN0cmluZz4gYW5kIHRoZSBDYXJvdXNlbENvbXBvbmVudCBpbmNsdWRlcyBhdCBsZWFzdCB0d28gaXRlbXMuIEl0ZW0gYWN0aW9ucyBzaG91bGQgYmUgYXJyYW5nZWQgaW4gYSBjb21tYS1zZXBhcmF0ZWQgYXJyYXksIG9uZSBhY3Rpb24gcGVyIGxpbmUuXG5cdGxpbmtBY3Rpb246IC0+IHByaW50IFwibGlua1wiXG5cdGl0ZW1BY3Rpb25zOiBbXG5cdFx0LT4gcHJpbnQgXCIxXCIsXG5cdFx0LT4gcHJpbnQgXCJzZWNvbmRcIixcblx0XHQtPiBwcmludCBcIml0ZW0gdGhlIHRoaXJkXCJcblx0XVxuXG5cdCMgUmVmZXJyaW5nIHRvIHBhcnRzIG9mIHRoZSBDYXJvdXNlbENvbXBvbmVudFxuXHQjIFRoZSBDYXJvdXNlbENvbXBvbmVudCBjb250YWlucyBhIFBhZ2VDb21wb25lbnQgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHdpdGggLnJvdy4gSXRlbXMgYW5kIHRoZWlyIGNvbXBvbmVudHMgY2FuIGJlIGFjY2Vzc2VkIHdpdGggdGhlIC5pdGVtcyBhcnJheS4gLmhlcm9JdGVtIGlzIGF2YWlsYWJsZSB3aGVuIHdyYXAgaXMgc2V0IHRvIHRydWUuXG5cdHByaW50IG15Q2Fyb3VzZWwucm93LmN1cnJlbnRQYWdlXG5cdHByaW50IG15Q2Fyb3VzZWwuaGVyb0l0ZW0/LmNhcHRpb24/LnRleHRcblx0cHJpbnQgbXlDYXJvdXNlbC5pdGVtc1swXS50ZXh0QmxvY2tcblx0cHJpbnQgbXlDYXJvdXNlbC5pdGVtc1swXS5jZWxsXG4jIyNcblxuZGVmYXVsdHMgPVxuXHRpdGVtQ291bnQ6IDNcblxuXHRkZWJ1ZzogZmFsc2Vcblx0cm91bmRlZDogZmFsc2Vcblx0d3JhcDogZmFsc2Vcblx0c2lkZUNhcHRpb25zOiBmYWxzZVxuXHRjYXB0aW9uQWxpZ246IFwibGVmdFwiXG5cdHRpdGxlQWxpZ246IFwibGVmdFwiXG5cdHRvcEFsaWduU2lkZUNhcHRpb25zOiBmYWxzZVxuXHRjZW50ZXJoZXJvSXRlbTogZmFsc2Vcblx0aGVyb0NhcHRpb25BbGlnbjogXCJsZWZ0XCJcblx0c2lkZUhlcm9DYXB0aW9uOiBmYWxzZVxuXHR0b3BBbGlnbkhlcm9DYXB0aW9uOiB0cnVlXG5cdGljb25zOiBmYWxzZVxuXHRjbGlwOiB0cnVlXG5cdGZvcmNlU2Nyb2xsaW5nOiBmYWxzZVxuXHRtYXJnaW5zOiBbNDAsMCwwLDBdXG5cdGl0ZW1NYXJnaW46IDEyXG5cdGl0ZW1Cb3JkZXJSYWRpdXM6IDEwXG5cdGl0ZW1XaWR0aDogMTYwXG5cdGl0ZW1IZWlnaHQ6IDEyMFxuXHRzbWFsbEl0ZW1XaWR0aDogODBcblx0c21hbGxJdGVtSGVpZ2h0OiA2MFxuXHR0aXRsZUZvbnRTaXplOiAyMFxuXHR0aXRsZUZvbnRXZWlnaHQ6IDgwMFxuXHR0aXRsZU1hcmdpbjogNFxuXHRsaW5rRm9udFNpemU6IDE2XG5cdGxpbmtGb250V2VpZ2h0OiA0MDBcblx0Y2FwdGlvbkZvbnRTaXplOiAxOFxuXHRjYXB0aW9uRm9udFdlaWdodDogNDAwXG5cdGNhcHRpb25NYXhIZWlnaHQ6IDEwMFxuXHRzdWJjYXB0aW9uRm9udFNpemU6IDE2XG5cdHN1YmNhcHRpb25Gb250V2VpZ2h0OiA0MDBcblx0c3ViY2FwdGlvbk1heEhlaWdodDogMTAwXG5cblx0aWNvbkJvcmRlclJhZGl1czogMTBcblx0aWNvblNpemU6IDQwXG5cdGljb25NYXJnaW46IDhcblxuXHRjYXB0aW9uTWFyZ2luOiAxMFxuXHRzdWJjYXB0aW9uTWFyZ2luOiAwXG5cblx0YmFja2dyb3VuZENvbG9yOiBcImNsZWFyXCJcblx0Ym94Q29sb3I6IFwiI0Y1RjVGNVwiXG5cdGljb25Db2xvcjogXCJcIlxuXHR0aXRsZUNvbG9yOiBcIiNGNUY1RjVcIlxuXHRsaW5rQ29sb3I6IFwiXCJcblx0Y2FwdGlvbkNvbG9yOiBcIlwiXG5cdHN1YmNhcHRpb25Db2xvcjogXCJcIlxuXG5cdGZvbnRGYW1pbHk6IFwiXCJcblx0dGl0bGU6IFwiQ2Fyb3VzZWwgVGl0bGVcIlxuXHRsaW5rOiBcIlwiXG5cdGltYWdlUHJlZml4OiBcIlwiXG5cdGltYWdlU3VmZml4OiBcInBuZ1wiXG5cdGljb25QcmVmaXg6IFwiXCJcblx0aWNvblN1ZmZpeDogXCJwbmdcIlxuXHRjYXB0aW9uczogW11cblx0c3ViY2FwdGlvbnM6IFtdXG5cdGl0ZW1BY3Rpb25zOiBbXVxuXHRsaW5rQWN0aW9uOiAoKSAtPlxuXG5yb3VuZGVkID1cblx0aXRlbVdpZHRoOiAxMjBcblx0aXRlbUhlaWdodDogMTIwXG5cdHNtYWxsSXRlbVdpZHRoOiA2MFxuXHRzbWFsbEl0ZW1IZWlnaHQ6IDYwXG5cbiMgQ2Fyb3VzZWxDb21wb25lbnQgY2xhc3NcbmNsYXNzIENhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRAb3B0aW9ucyA9IF8uYXNzaWduKHt9LCBkZWZhdWx0cywgQG9wdGlvbnMpXG5cdFx0aWYgQG9wdGlvbnMucm91bmRlZCA9PSB0cnVlXG5cdFx0XHRAb3B0aW9ucyA9IF8uYXNzaWduKHt9LCByb3VuZGVkLCBAb3B0aW9ucylcblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0bm9vcCA9ICgpIC0+XG5cdFx0QC5pdGVtcyA9IFtdXG5cblx0XHQjIGJyZWFrIG91dCBtYXJnaW5zXG5cdFx0W3RvcE1hcmdpbiwgcmlnaHRNYXJnaW4sIGJvdHRvbU1hcmdpbiwgbGVmdE1hcmdpbl0gPSBAb3B0aW9ucy5tYXJnaW5zXG5cblx0XHQjIGNvbnRhaW5lciB2aWV3XG5cdFx0QC5jbGlwID0gQG9wdGlvbnMuY2xpcFxuXHRcdEAuYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG5cdFx0QC53aWR0aCA9IEBvcHRpb25zLndpZHRoIG9yIFNjcmVlbi53aWR0aFxuXHRcdEAueCA9IEBvcHRpb25zLnhcblx0XHRpZiBAb3B0aW9ucy5kZWJ1ZyA9PSB0cnVlXG5cdFx0XHRALmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTQsIDE2MywgMzIsIDAuMjUpXCJcblxuXHRcdCMgaWNvbiBzZXR0aW5nIGluY29tcGF0aWJpbGUgd2l0aCBzaWRlIGNhcHRpb25zIGZvciBub3dcblx0XHRpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlXG5cdFx0XHRAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPSBcIm5vbmVcIlxuXG5cdFx0IyBvZmZzZXQgaXMgdXNlZCB0byBwYXNzIG92ZXIgMXN0IGNlbGwgaW4gYSB3cmFwcGluZyBzaXR1YXRpb25cblx0XHRvZmZzZXQgPSBpZiBAb3B0aW9ucy53cmFwID09IHRydWUgdGhlbiAxIGVsc2UgMFxuXG5cdFx0IyBoaWRkZW4gbWFyZ2luIGhlbHBzIGNvbnRlbnRGcmFtZSgpIHBlcmZvcm0gY29ycmVjdGx5XG5cdFx0bWFyZ2luID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdG5hbWU6IFwibWFyZ2luXCJcblx0XHRcdHdpZHRoOiBALndpZHRoXG5cdFx0XHRoZWlnaHQ6IDFcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cblx0XHRALm1hcmdpbiA9IG1hcmdpblxuXG5cdFx0IyBjYXJvdXNlbCB0aXRsZVxuXHRcdHRpdGxlID0gbmV3IFRleHRMYXllclxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHR4OiBsZWZ0TWFyZ2luXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy50aXRsZVxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLnRpdGxlRm9udFNpemVcblx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aXRsZUNvbG9yXG5cdFx0XHR0ZXh0QWxpZ246IEBvcHRpb25zLnRpdGxlQWxpZ25cblx0XHRcdGZvbnRXZWlnaHQ6IEBvcHRpb25zLnRpdGxlRm9udFdlaWdodFxuXHRcdFx0d2lkdGg6IEAud2lkdGggLSBsZWZ0TWFyZ2luIC0gcmlnaHRNYXJnaW5cblxuXHRcdEAudGl0bGUgPSB0aXRsZVxuXG5cdFx0dGl0bGUubWF4WSA9IHRvcE1hcmdpbiAtIEBvcHRpb25zLnRpdGxlTWFyZ2luXG5cdFx0aWYgQG9wdGlvbnMuZm9udEZhbWlseSAhPSBcIlwiIHRoZW4gdGl0bGUuZm9udEZhbWlseSA9IEBvcHRpb25zLmZvbnRGYW1pbHlcblxuXHRcdCMgY2Fyb3VzZWwgbGlua1xuXHRcdGlmIEBvcHRpb25zLmxpbmsgIT0gXCJcIlxuXHRcdFx0bGluayA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdFx0cGFyZW50OiBAXG5cdFx0XHRcdHRleHQ6IEBvcHRpb25zLmxpbmtcblx0XHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLnRpdGxlRm9udFNpemVcblx0XHRcdFx0b3JpZ2luWDogMVxuXHRcdFx0XHRvcmlnaW5ZOiAxXG5cdFx0XHRcdGF1dG9TaXplOiB0cnVlXG5cdFx0XHRcdGF1dG9TaXplSGVpZ2h0OiB0cnVlXG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy5saW5rQ29sb3Igb3IgQG9wdGlvbnMuY2FwdGlvbkNvbG9yIG9yIEBvcHRpb25zLnRpdGxlQ29sb3Jcblx0XHRcdFx0dGV4dEFsaWduOiBcInJpZ2h0XCJcblx0XHRcdFx0Zm9udFdlaWdodDogQG9wdGlvbnMubGlua0ZvbnRXZWlnaHRcblx0XHRcdFx0eDogQWxpZ24ucmlnaHQoLXJpZ2h0TWFyZ2luKVxuXHRcdFx0XHR5OiB0aXRsZS55XG5cdFx0XHRcdHNjYWxlOiBAb3B0aW9ucy5saW5rRm9udFNpemUvQG9wdGlvbnMudGl0bGVGb250U2l6ZVxuXG5cdFx0XHRALmxpbmsgPSBsaW5rXG5cblx0XHRcdGlmIEBvcHRpb25zLmZvbnRGYW1pbHkgIT0gXCJcIiB0aGVuIGxpbmsuZm9udEZhbWlseSA9IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGlmIEBvcHRpb25zLmxpbmtBY3Rpb24gIT0gbm9vcFxuXHRcdFx0XHRsaW5rLm9uQ2xpY2sgPT5cblx0XHRcdFx0XHRAb3B0aW9ucy5saW5rQWN0aW9uKClcblxuXHRcdCMgaXRlbSBjcmVhdGlvblxuXHRcdGNyZWF0ZUl0ZW0gPSAoaSA9IDAsIHBhcmVudCA9IG51bGwsIGhlcm8gPSBmYWxzZSkgPT5cblx0XHRcdGlmIGhlcm8gPT0gZmFsc2UgYW5kIEBvcHRpb25zLndyYXAgPT0gdHJ1ZVxuXHRcdFx0XHRpbmRleE9mZnNldCA9IDFcblx0XHRcdFx0aXRlbVdpZHRoID0gQG9wdGlvbnMuc21hbGxJdGVtV2lkdGhcblx0XHRcdFx0aXRlbUhlaWdodCA9IEBvcHRpb25zLnNtYWxsSXRlbUhlaWdodFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpbmRleE9mZnNldCA9IDBcblx0XHRcdFx0aXRlbVdpZHRoID0gQG9wdGlvbnMuaXRlbVdpZHRoXG5cdFx0XHRcdGl0ZW1IZWlnaHQgPSBAb3B0aW9ucy5pdGVtSGVpZ2h0XG5cdFx0XHRpdGVtID0gbmV3IExheWVyXG5cdFx0XHRcdG5hbWU6IFwiaXRlbVwiICsgKGkgKyBpbmRleE9mZnNldClcblx0XHRcdFx0d2lkdGg6IGl0ZW1XaWR0aFxuXHRcdFx0XHRoZWlnaHQ6IGl0ZW1IZWlnaHRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImNsZWFyXCJcblx0XHRcdFx0Y2xpcDogZmFsc2Vcblx0XHRcdGlmIHBhcmVudCBpbnN0YW5jZW9mIFBhZ2VDb21wb25lbnRcblx0XHRcdFx0cGFyZW50LmFkZFBhZ2UoaXRlbSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0aXRlbS5wYXJlbnQgPSBwYXJlbnRcblxuXHRcdFx0IyBpdGVtIGNlbGxcblx0XHRcdGJsb2NrID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogaXRlbVxuXHRcdFx0XHRuYW1lOiBcImJsb2NrXCIgKyAoaSArIGluZGV4T2Zmc2V0KVxuXHRcdFx0XHR3aWR0aDogaXRlbVdpZHRoXG5cdFx0XHRcdGhlaWdodDogaXRlbUhlaWdodFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLmJveENvbG9yXG5cdFx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuaXRlbUJvcmRlclJhZGl1c1xuXHRcdFx0XHRpbWFnZTogXCJpbWFnZXMvXCIgKyBAb3B0aW9ucy5pbWFnZVByZWZpeCArIChpICsgaW5kZXhPZmZzZXQpICsgXCIuXCIgKyBAb3B0aW9ucy5pbWFnZVN1ZmZpeFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRcImJhY2tncm91bmQtcG9zaXRpb25cIiA6IFwiY2VudGVyIGNlbnRlclwiXG5cdFx0XHRcdFx0XCJiYWNrZ3JvdW5kLXNpemVcIiA6IFwiY292ZXJcIlxuXG5cdFx0XHRpdGVtLmNlbGwgPSBibG9ja1xuXG5cdFx0XHQjIGFzc2lnbiBpdGVtIGFjdGlvblxuXHRcdFx0aWYgQG9wdGlvbnMuaXRlbUFjdGlvbnNbaSArIGluZGV4T2Zmc2V0XSAhPSBub29wIGFuZCBAb3B0aW9ucy5pdGVtQWN0aW9uc1tpICsgaW5kZXhPZmZzZXRdICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRpdGVtLm9uQ2xpY2sgPT5cblx0XHRcdFx0XHRyZXR1cm4gaWYgcGFyZW50LnBhcmVudC5pc0RyYWdnaW5nXG5cdFx0XHRcdFx0QG9wdGlvbnMuaXRlbUFjdGlvbnNbaSArIGluZGV4T2Zmc2V0XSgpXG5cblx0XHRcdCMgaXRlbSBpY29uXG5cdFx0XHRpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlXG5cdFx0XHRcdGljb24gPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRwYXJlbnQ6IGl0ZW1cblx0XHRcdFx0XHRuYW1lOiBcImljb25cIiArIChpICsgaW5kZXhPZmZzZXQpXG5cdFx0XHRcdFx0d2lkdGg6IEBvcHRpb25zLmljb25TaXplXG5cdFx0XHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5pY29uU2l6ZVxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMuaWNvbkNvbG9yIG9yIEBvcHRpb25zLmJveENvbG9yXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5pY29uQm9yZGVyUmFkaXVzXG5cdFx0XHRcdFx0eTogYmxvY2subWF4WSArIEBvcHRpb25zLmljb25NYXJnaW5cblx0XHRcdFx0XHRpbWFnZTogXCJpbWFnZXMvXCIgKyBAb3B0aW9ucy5pY29uUHJlZml4ICsgKGkgKyBpbmRleE9mZnNldCkgKyBcIi5cIiArIEBvcHRpb25zLmljb25TdWZmaXhcblx0XHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZC1wb3NpdGlvblwiIDogXCJjZW50ZXIgY2VudGVyXCJcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZC1zaXplXCIgOiBcImNvdmVyXCJcblxuXHRcdFx0XHRpdGVtLmljb24gPSBpY29uXG5cblx0XHRcdCMgaXRlbSB0ZXh0IGNvbnRhaW5lciwgZW5hYmxlcyB2ZXJ0aWNhbCBhbGlnbm1lbnRcblx0XHRcdHRleHRCbG9jayA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IGl0ZW1cblx0XHRcdFx0bmFtZTogXCJ0ZXh0QmxvY2tcIiArIChpICsgaW5kZXhPZmZzZXQpXG5cdFx0XHRcdHdpZHRoOiBpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlIHRoZW4gaXRlbVdpZHRoIC0gQG9wdGlvbnMuaWNvblNpemUgLSBAb3B0aW9ucy5pY29uTWFyZ2luIGVsc2UgaXRlbVdpZHRoXG5cdFx0XHRcdGhlaWdodDogaXRlbS5oZWlnaHRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImNsZWFyXCJcblx0XHRcdFx0eDogQGNhcHRpb25BbGlnbkhvcml6b250YWwoKGlmIEBvcHRpb25zLmljb25zID09IHRydWUgdGhlbiBAb3B0aW9ucy5pY29uU2l6ZSBlbHNlIGJsb2NrLndpZHRoKSwgaGVybylcblxuXHRcdFx0aXRlbS50ZXh0QmxvY2sgPSB0ZXh0QmxvY2tcblxuXHRcdFx0IyBpdGVtIGNhcHRpb25cblx0XHRcdGNhcHRpb24gPSBuZXcgVGV4dExheWVyXG5cdFx0XHRcdHBhcmVudDogdGV4dEJsb2NrXG5cdFx0XHRcdG5hbWU6IFwiY2FwdGlvblwiICsgKGkgKyBpbmRleE9mZnNldClcblx0XHRcdFx0d2lkdGg6IHRleHRCbG9jay53aWR0aFxuXHRcdFx0XHRjb2xvcjogQG9wdGlvbnMuY2FwdGlvbkNvbG9yIG9yIEBvcHRpb25zLnRpdGxlQ29sb3Jcblx0XHRcdFx0dGV4dDogQG9wdGlvbnMuY2FwdGlvbnNbKGkgKyBpbmRleE9mZnNldCldIG9yIFwiXCJcblx0XHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRcdFx0XHRmb250V2VpZ2h0OiBAb3B0aW9ucy5jYXB0aW9uRm9udFdlaWdodFxuXHRcdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuY2FwdGlvbkZvbnRTaXplXG5cblx0XHRcdGl0ZW0uY2FwdGlvbiA9IGNhcHRpb25cblxuXHRcdFx0aWYgY2FwdGlvbi5oZWlnaHQgPiBAb3B0aW9ucy5jYXB0aW9uTWF4SGVpZ2h0XG5cdFx0XHRcdGNhcHRpb24uaGVpZ2h0ID0gQG9wdGlvbnMuY2FwdGlvbk1heEhlaWdodFxuXHRcdFx0XHRjYXB0aW9uLnRydW5jYXRlID0gdHJ1ZVxuXG5cdFx0XHRpZiBAb3B0aW9ucy5mb250RmFtaWx5ICE9IFwiXCIgdGhlbiBjYXB0aW9uLmZvbnRGYW1pbHkgPSBAb3B0aW9ucy5mb250RmFtaWx5XG5cblx0XHRcdCMgaXRlbSBzdWJjYXB0aW9uXG5cdFx0XHRpZiBAb3B0aW9ucy5zdWJjYXB0aW9ucyAhPSBbXVxuXHRcdFx0XHRzdWJjYXB0aW9uID0gbmV3IFRleHRMYXllclxuXHRcdFx0XHRcdHBhcmVudDogdGV4dEJsb2NrXG5cdFx0XHRcdFx0bmFtZTogXCJzdWJjYXB0aW9uXCIgKyAoaSArIGluZGV4T2Zmc2V0KVxuXHRcdFx0XHRcdHdpZHRoOiB0ZXh0QmxvY2sud2lkdGhcblx0XHRcdFx0XHRjb2xvcjogQG9wdGlvbnMuc3ViY2FwdGlvbkNvbG9yIG9yIEBvcHRpb25zLmNhcHRpb25Db2xvciBvciBAb3B0aW9ucy50aXRsZUNvbG9yXG5cdFx0XHRcdFx0dGV4dDogQG9wdGlvbnMuc3ViY2FwdGlvbnNbKGkgKyBpbmRleE9mZnNldCldIG9yIFwiXCJcblx0XHRcdFx0XHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdFx0XHRcdFx0Zm9udFdlaWdodDogQG9wdGlvbnMuc3ViY2FwdGlvbkZvbnRXZWlnaHRcblx0XHRcdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuc3ViY2FwdGlvbkZvbnRTaXplXG5cdFx0XHRcdFx0bGV0dGVyU3BhY2luZzogLTAuNlxuXHRcdFx0XHRcdHk6IGNhcHRpb24ubWF4WSArIEBvcHRpb25zLnN1YmNhcHRpb25NYXJnaW5cblxuXHRcdFx0XHRpdGVtLnN1YmNhcHRpb24gPSBzdWJjYXB0aW9uXG5cblx0XHRcdFx0aWYgc3ViY2FwdGlvbi5oZWlnaHQgPiBAb3B0aW9ucy5zdWJjYXB0aW9uTWF4SGVpZ2h0XG5cdFx0XHRcdFx0c3ViY2FwdGlvbi5oZWlnaHQgPSBAb3B0aW9ucy5zdWJjYXB0aW9uTWF4SGVpZ2h0XG5cdFx0XHRcdFx0c3ViY2FwdGlvbi50cnVuY2F0ZSA9IHRydWVcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5mb250RmFtaWx5ICE9IFwiXCIgdGhlbiBzdWJjYXB0aW9uLmZvbnRGYW1pbHkgPSBAb3B0aW9ucy5mb250RmFtaWx5XG5cblx0XHRcdCMgcm91bmQgaXRlbSBibG9jayBpZiBzcGVjaWZpZWRcblx0XHRcdGlmIEBvcHRpb25zLnJvdW5kZWQgPT0gdHJ1ZVxuXHRcdFx0XHRibG9jay5ib3JkZXJSYWRpdXMgPSBNYXRoLm1heChAb3B0aW9ucy5pdGVtV2lkdGgsIEBvcHRpb25zLml0ZW1IZWlnaHQpLzJcblxuXHRcdFx0IyB0ZXh0IGFsaWdubWVudFxuXHRcdFx0Y2FwdGlvbi50ZXh0QWxpZ24gPSBAb3B0aW9ucy5jYXB0aW9uQWxpZ25cblx0XHRcdHN1YmNhcHRpb24/LnRleHRBbGlnbiA9IEBvcHRpb25zLmNhcHRpb25BbGlnblxuXG5cdFx0XHQjIGFkZCB0byBhcnJheVxuXHRcdFx0QC5pdGVtcy5wdXNoKGl0ZW0pXG5cblx0XHRcdCMgc2l6ZSB0ZXh0IGJsb2NrIGhlaWdodCB0byBtYXRjaCBjb250ZW50XG5cdFx0XHR0ZXh0QmxvY2suaGVpZ2h0ID0gdGV4dEJsb2NrLmNvbnRlbnRGcmFtZSgpLmhlaWdodFxuXHRcdFx0dGV4dEJsb2NrLnkgPSBAY2FwdGlvbkFsaWduVmVydGljYWwoYmxvY2suaGVpZ2h0LCBoZXJvKVxuXG5cdFx0XHQjIHNpemUgaXRlbSBoZWlnaHQgdG8gbWF0Y2ggY29udGVudFxuXHRcdFx0aXRlbS5oZWlnaHQgPSBpdGVtLmNvbnRlbnRGcmFtZSgpLmhlaWdodFxuXHRcdFx0aXRlbS53aWR0aCA9IGl0ZW0uY29udGVudEZyYW1lKCkud2lkdGhcblxuXHRcdFx0IyBjYXJvdXNlbCBtYXJpZ25zIGFyZSBhcHBsaWVkIGFmdGVyIHBhZ2UgaXMgaW4gcGxhY2Vcblx0XHRcdGlmIEAuaXRlbXMuaW5kZXhPZihpdGVtKSA+IG9mZnNldFxuXHRcdFx0XHRpdGVtLnggPSBpdGVtLnggKyBAb3B0aW9ucy5pdGVtTWFyZ2luXG5cblx0XHQjIGNyZWF0ZSBoZXJvIGNlbGxcblx0XHRpZiBAb3B0aW9ucy53cmFwID09IHRydWVcblx0XHRcdGhlcm9JdGVtQ29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogQFxuXHRcdFx0XHRuYW1lOiBcImhlcm9JdGVtQ29udGFpbmVyXCJcblx0XHRcdFx0eTogdG9wTWFyZ2luXG5cdFx0XHRcdHg6IGlmIEBvcHRpb25zLmNlbnRlcmhlcm9JdGVtID09IHRydWUgdGhlbiBBbGlnbi5jZW50ZXIgZWxzZSBsZWZ0TWFyZ2luXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJjbGVhclwiXG5cdFx0XHRjcmVhdGVJdGVtKDAsIGhlcm9JdGVtQ29udGFpbmVyLCB0cnVlKVxuXHRcdFx0aGVyb0l0ZW1Db250YWluZXIuaGVpZ2h0ID0gaGVyb0l0ZW1Db250YWluZXIuY29udGVudEZyYW1lKCkuaGVpZ2h0XG5cdFx0XHRoZXJvSXRlbUNvbnRhaW5lci53aWR0aCA9IGhlcm9JdGVtQ29udGFpbmVyLmNvbnRlbnRGcmFtZSgpLndpZHRoXG5cblx0XHRcdEAuaGVyb0l0ZW0gPSBoZXJvSXRlbUNvbnRhaW5lci5jaGlsZHJlblswXVxuXHRcdFx0QC5oZXJvSXRlbS5uYW1lID0gXCJoZXJvSXRlbVwiXG5cblx0XHRcdCMgaGVybyB0ZXh0IGFsaWdubWVudFxuXHRcdFx0QC5oZXJvSXRlbS5jYXB0aW9uLnRleHRBbGlnbiA9IEBvcHRpb25zLmhlcm9DYXB0aW9uQWxpZ25cblx0XHRcdEAuaGVyb0l0ZW0uc3ViY2FwdGlvbj8udGV4dEFsaWduID0gQG9wdGlvbnMuaGVyb0NhcHRpb25BbGlnblxuXG5cdFx0IyBjcmVhdGUgdGhlIGNhcm91c2VsXG5cdFx0cm93ID0gbmV3IFBhZ2VDb21wb25lbnRcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0bmFtZTogXCJyb3dcIlxuXHRcdFx0eTogaWYgQG9wdGlvbnMud3JhcCA9PSB0cnVlIHRoZW4gaGVyb0l0ZW1Db250YWluZXIubWF4WSArIEBvcHRpb25zLml0ZW1NYXJnaW4gZWxzZSB0b3BNYXJnaW5cblx0XHRcdHNjcm9sbFZlcnRpY2FsOiBmYWxzZVxuXHRcdFx0c2Nyb2xsSG9yaXpvbnRhbDogdHJ1ZVxuXHRcdFx0dmVsb2NpdHlUaHJlc2hvbGQ6IDAuMVxuXHRcdFx0Y2xpcDogZmFsc2Vcblx0XHRcdG9yaWdpblg6IDBcblx0XHRcdGNvbnRlbnRJbnNldDpcblx0XHRcdFx0dG9wOiAwXG5cdFx0XHRcdHJpZ2h0OiByaWdodE1hcmdpblxuXHRcdFx0XHRib3R0b206IDBcblx0XHRcdFx0bGVmdDogbGVmdE1hcmdpblxuXG5cdFx0QC5yb3cgPSByb3dcblxuXHRcdCMgYWNjb3VudCBmb3IgYSBcInNob3J0XCIgY2Fyb3VzZWxcblx0XHRpZiBAb3B0aW9ucy5pdGVtQ291bnQgPCAyXG5cdFx0XHRyb3cuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0XHRsaW5rPy5kZXN0cm95KClcblxuXHRcdCMgYWN0dWFsbHkgcG9wdWxhdGUgdGhlIGNhcm91c2VsIHJvdyB3aXRoIGl0cyBpdGVtc1xuXHRcdGZvciBpIGluIFswLi4uQG9wdGlvbnMuaXRlbUNvdW50IC0gb2Zmc2V0XVxuXHRcdFx0Y3JlYXRlSXRlbShpLCByb3csIGZhbHNlKVxuXG5cdFx0IyBwcmV2ZW50IG92ZXJzY3JvbGxcblx0XHRyb3cub25Td2lwZUxlZnQgPT5cblx0XHRcdGlmIEBvcHRpb25zLmZvcmNlU2Nyb2xsaW5nICE9IHRydWUgYW5kIEBjaGVja0lmTmVlZHNTY3JvbGxpbmcocm93KVxuXHRcdFx0XHRtYXhQYWdlID0gQG9wdGlvbnMuaXRlbUNvdW50IC0gTWF0aC5mbG9vcihALndpZHRoIC8gKEBvcHRpb25zLml0ZW1XaWR0aCArIEBvcHRpb25zLml0ZW1NYXJnaW4pKSAtIG9mZnNldFxuXHRcdFx0XHRpZiByb3cuY29udGVudC5tYXhYIDwgQC5tYXhYXG5cdFx0XHRcdFx0cm93LnNuYXBUb1BhZ2UoQC5pdGVtc1ttYXhQYWdlXSlcblxuXHRcdCMgYWRqdXN0IGNhcm91c2VsIHRvIG1hdGNoIGNvbnRlbnRcblx0XHRyb3cud2lkdGggPSByb3cuY29udGVudC5jaGlsZHJlblswXT8ud2lkdGhcblx0XHRyb3cuY29udGVudC53aWR0aCA9IHJvdy5jb250ZW50LmNvbnRlbnRGcmFtZSgpLndpZHRoXG5cdFx0cm93LmNvbnRlbnQuaGVpZ2h0ID0gcm93LmNvbnRlbnQuY29udGVudEZyYW1lKCkuaGVpZ2h0XG5cdFx0cm93LmhlaWdodCA9IHJvdy5jb250ZW50RnJhbWUoKS5oZWlnaHRcblx0XHRyb3cuY29udGVudC5jbGlwID0gZmFsc2Vcblx0XHRyb3cuc2Nyb2xsSG9yaXpvbnRhbCA9IEBjaGVja0lmTmVlZHNTY3JvbGxpbmcocm93KVxuXHRcdEAuaGVpZ2h0ID0gQC5jb250ZW50RnJhbWUoKS5oZWlnaHQgKyBib3R0b21NYXJnaW5cblxuXHRjaGVja0lmTmVlZHNTY3JvbGxpbmc6IChsYXllciA9IG51bGwpIC0+XG5cdFx0aWYgQG9wdGlvbnMuZm9yY2VTY3JvbGxpbmcgPT0gdHJ1ZVxuXHRcdFx0bmVlZHNTY3JvbGxpbmcgPSB0cnVlXG5cdFx0ZWxzZSBpZiBsYXllci5jb250ZW50Py5jb250ZW50RnJhbWUoKS53aWR0aCA+IEAud2lkdGhcblx0XHRcdG5lZWRzU2Nyb2xsaW5nID0gdHJ1ZVxuXHRcdGVsc2Vcblx0XHRcdG5lZWRzU2Nyb2xsaW5nID0gZmFsc2Vcblx0XHRyZXR1cm4gbmVlZHNTY3JvbGxpbmdcblxuXHRjYXB0aW9uQWxpZ25WZXJ0aWNhbDogKGl0ZW1IZWlnaHQgPSAwLCBoZXJvID0gZmFsc2UpIC0+XG5cdFx0YWxpZ24gPSBpdGVtSGVpZ2h0ICsgQG9wdGlvbnMuY2FwdGlvbk1hcmdpblxuXHRcdGlmIEBvcHRpb25zLmljb25zID09IHRydWVcblx0XHRcdGFsaWduID0gaXRlbUhlaWdodCArIEBvcHRpb25zLmljb25NYXJnaW5cblx0XHRlbHNlIGlmIGhlcm8gPT0gdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMuc2lkZUhlcm9DYXB0aW9uID09IHRydWVcblx0XHRcdFx0aWYgQG9wdGlvbnMudG9wQWxpZ25IZXJvQ2FwdGlvbiA9PSB0cnVlXG5cdFx0XHRcdFx0YWxpZ24gPSBBbGlnbi50b3Bcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGFsaWduID0gQWxpZ24uY2VudGVyXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPT0gdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMudG9wQWxpZ25DYXB0aW9ucyA9PSB0cnVlXG5cdFx0XHRcdGFsaWduID0gQWxpZ24udG9wXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGFsaWduID0gQWxpZ24uY2VudGVyXG5cdFx0cmV0dXJuIGFsaWduXG5cblx0Y2FwdGlvbkFsaWduSG9yaXpvbnRhbDogKGl0ZW1XaWR0aCA9IDAsIGhlcm8gPSBmYWxzZSkgLT5cblx0XHRhbGlnbiA9IEFsaWduLmxlZnRcblx0XHRpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlXG5cdFx0XHRhbGlnbiA9IGl0ZW1XaWR0aCArIEBvcHRpb25zLmljb25NYXJnaW5cblx0XHRlbHNlIGlmIGhlcm8gPT0gdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMuc2lkZUhlcm9DYXB0aW9uID09IHRydWVcblx0XHRcdFx0YWxpZ24gPSBpdGVtV2lkdGggKyBAb3B0aW9ucy5jYXB0aW9uTWFyZ2luXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPT0gdHJ1ZVxuXHRcdFx0YWxpZ24gPSBpdGVtV2lkdGggKyBAb3B0aW9ucy5jYXB0aW9uTWFyZ2luXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPT0gdHJ1ZVxuXHRcdFx0YWxpZ24gPSBpdGVtV2lkdGggKyBAb3B0aW9ucy5jYXB0aW9uTWFyZ2luXG5cdFx0cmV0dXJuIGFsaWduXG5tb2R1bGUuZXhwb3J0cyA9IENhcm91c2VsQ29tcG9uZW50XG4iLCJVdGlscy5jeWNsZSA9IC0+XG5cdGFyZ3MgPSBVdGlscy5hcnJheUZyb21Bcmd1bWVudHMgYXJndW1lbnRzWzBdXG5cdGN1cnIgPSAtMVxuXG5cdHJldHVybiAoZGlyID0gdHJ1ZSkgLT5cblx0XHRpZiBkaXJcblx0XHRcdGN1cnIrK1xuXHRcdFx0Y3VyciA9IDAgaWYgY3VyciA+PSBhcmdzLmxlbmd0aFxuXHRcdGVsc2Vcblx0XHRcdGN1cnItLVxuXHRcdFx0Y3VyciA9IChhcmdzLmxlbmd0aC0xKSBpZiBjdXJyIDwgMFxuXHRcdHJldHVybiBhcmdzW2N1cnJdXG4iLCJjbGFzcyBleHBvcnRzLlN0YXR1c0JhciBleHRlbmRzIExheWVyXG5cdG4gPSBTY3JlZW4ud2lkdGgvNzUwXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjRkZGXCJcblx0XHRcdHdpZHRoOiBTY3JlZW4ud2lkdGhcblx0XHRcdGhlaWdodDogODgqblxuXHRcdFx0b3BhY2l0eTogMC45NlxuXHRcdFx0aW1hZ2U6IFwiaW1hZ2VzL3N0YXR1c2JhcmJsYWNrLnBuZ1wiXG5cdFx0XHR6OjRcblx0XHRcdGJhY2tncm91bmRCbHVyID0gNDBcblx0XHRAdG9wYmFyID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogU2NyZWVuLndpZHRoXG5cdFx0XHRoZWlnaHQ6IDg4Km5cblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjRkZGXCJcblx0XG5cdFx0QHBhZ2VUaXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdGZvbnRTaXplOjM0Km5cblx0XHRcdGZvbnRXZWlnaHQ6ODAwXG5cdFx0XHRjb2xvcjpcIiMyRDI5MjlcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdHg6QWxpZ24uY2VudGVyXG5cdFx0XHR3aWR0aDpTY3JlZW4ud2lkdGhcblxuXHRcdEB0b3BiYXJSaWdodEljb24wMSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDQwKm5cblx0XHRcdGhlaWdodDo0MCpuXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHg6IEFsaWduLnJpZ2h0KC0xNipuKVxuXHRcdFx0aW1hZ2U6IFwiaW1hZ2VzL25hdl9pY29uX21lc3NAMnguc3ZnXCJcblx0XHRcdFxuXHRcdEB0b3BiYXJMZWZ0SWNvbjAxID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogNDAqblxuXHRcdFx0aGVpZ2h0OjQwKm5cblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0eDogQWxpZ24ubGVmdCgxNipuKVxuXHRcdFx0aW1hZ2U6IFwiaW1hZ2VzL25hdl9pY29uX2JhY2tAMnguc3ZnXCJcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QHRvcGJhci5wYXJlbnQgPSBAXG5cdFx0QHRvcGJhci55ID0gODgqblxuXHRcdEBwYWdlVGl0bGUucGFyZW50ID0gQHRvcGJhclxuXHRcdEB0b3BiYXJSaWdodEljb24wMS5wYXJlbnQgPSBAdG9wYmFyXG5cdFx0QHRvcGJhclJpZ2h0SWNvbjAxLnkgPSBBbGlnbi5jZW50ZXIoKVxuXHRcdEB0b3BiYXJMZWZ0SWNvbjAxLnBhcmVudCA9IEB0b3BiYXJcblx0XHRAdG9wYmFyTGVmdEljb24wMS55ID0gQWxpZ24uY2VudGVyKClcblx0XHRAcGFnZVRpdGxlLnkgPSBBbGlnbi5jZW50ZXIoKVxuXHRcdEBwYWdlVGl0bGUudGV4dCA9IFwiUGFnZU5hbWVcIlxuXHRcdFxuXHRcbiIsImNsYXNzIGV4cG9ydHMuUHJvZHVjdExpc3QgZXh0ZW5kcyBMYXllclxuXHRuID0gU2NyZWVuLndpZHRoLzc1MFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRcdGhlaWdodDogMzgwKm5cblx0XHRcdHdpZHRoOjMyOCpuXG5cdFx0XG5cdFx0QHByb2R1Y3RQaWMgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOjMyOCpuXG5cdFx0XHRoZWlnaHQ6MjQ0Km5cblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIiNGNUY1RjVcIlxuXHRcdFx0aW1hZ2U6XCJpbWFnZXMvZGFpbHliZXN0cGljMDEucG5nXCJcblx0XHRcblx0XHRAcHJvZHVjdE5hbWUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR3aWR0aDozMjgqblxuXHRcdFx0aGVpZ2h0OjMyKm5cblx0XHRcdGZvbnRTaXplOjI4Km5cblx0XHRcdGNvbG9yOlwiIzIxMjEyMVwiXG5cdFx0XHR0ZXh0OlwicHJvZHVjdE5hbWVIZXJlXCJcblx0XHRcdHRleHRBbGlnbjpcImxlZnRcIlxuXG5cdFx0QHByb2R1Y3RTdWIgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR3aWR0aDozMjgqblxuXHRcdFx0aGVpZ2h0OjI0Km5cblx0XHRcdGZvbnRTaXplOjI0Km5cblx0XHRcdGNvbG9yOlwiIzYxNjE2MVwiXG5cdFx0XHR0ZXh0OlwicHJvZHVjdHN1YnRpdGxlaGVyZVwiXG5cdFx0XHR0ZXh0QWxpZ246XCJsZWZ0XCJcblxuXHRcdEBwcm9kdWN0UHJpY2UgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR3aWR0aDozMjgqblxuXHRcdFx0aGVpZ2h0OjQwKm5cblx0XHRcdGZvbnRTaXplOjM2Km5cblx0XHRcdGNvbG9yOlwiI0UzNDUzRFwiXG5cdFx0XHR0ZXh0OlwiwqUwLjAwXCJcblx0XHRcdHRleHRBbGlnbjpcImxlZnRcIlxuXHRcdFx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHRAcHJvZHVjdFBpYy5wYXJlbnQgPSBAXG5cdFx0QHByb2R1Y3RQaWMueSA9IDBcblx0XHRAcHJvZHVjdE5hbWUucGFyZW50ID0gQFxuXHRcdEBwcm9kdWN0TmFtZS55ID0gMjUyKm5cblx0XHRAcHJvZHVjdFN1Yi5wYXJlbnQgPSBAXG5cdFx0QHByb2R1Y3RTdWIueSA9IEBwcm9kdWN0TmFtZS5oZWlnaHQrQHByb2R1Y3ROYW1lLnkrOCpuXG5cdFx0QHByb2R1Y3RQcmljZS5wYXJlbnQgPSBAXG5cdFx0QHByb2R1Y3RQcmljZS55ID0gQHByb2R1Y3RTdWIueStAcHJvZHVjdFN1Yi5oZWlnaHQrOCpuXG5cdFx0QC5vblRvdWNoU3RhcnQgQFRvdWNoU3RhcnRcblx0XHRALm9uVG91Y2hFbmQgQFRvdWNoRW5kXG5cdFx0QC5vblRvdWNoTW92ZSBAVG91Y2hNb3ZlXG5cblx0VG91Y2hTdGFydDogPT5cblx0XHRALmJyaWdodG5lc3MgPSA5MFxuXHRUb3VjaEVuZDogPT5cblx0XHRALmJyaWdodG5lc3MgPSAxMDBcblx0VG91Y2hNb3ZlOiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMCIsImNsYXNzIGV4cG9ydHMuTG9hbkNhcmQgZXh0ZW5kcyBMYXllclxuXHRuID0gU2NyZWVuLndpZHRoLzc1MFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHR3aWR0aDpTY3JlZW4ud2lkdGgtNjRcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIiNGRkZcIlxuXHRcdFx0aGVpZ2h0OiAyODgqblxuXHRcdFx0eDpBbGlnbi5jZW50ZXJcblx0XHRcblx0XHRAbG9hbkNhcmRUaXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6MzJcblx0XHRcdHk6NDAqblxuXHRcdFx0Zm9udFNpemU6IDMyKm5cblx0XHRcdGZvbnRGYW1pbHk6IFwiUGluZ0ZhbmcgVENcIlxuXHRcdFx0Y29sb3I6XCIjMjEyMTIxXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMFxuXHRcdFx0bGluZUhlaWdodDogMVxuXHRcdFx0dGV4dEFsaWduOlwibGVmdFwiXG5cdFx0XHR0ZXh0OiBcIuWKoOi9veWNoeeJh+WQjeensC4uLlwiXG5cdFx0XG5cdFx0QGxvYW5DYXJkU3VidGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR4OjMyXG5cdFx0XHRmb250U2l6ZToyNCpuXG5cdFx0XHRmb250RmFtaWx5OiBcIlBpbmdGYW5nIFRDXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDQwMFxuXHRcdFx0Y29sb3I6XCJyZ2JhKDE3MSwxNjIsMTY1LDEpXCJcblx0XHRcdHRleHQ6XCLliqDovb3ljaHniYfmj4/ov7AuLi5cIlxuXHRcdFx0dGV4dEFsaWduOlwibGVmdFwiXG5cblx0XHRAbG9hbkNhcmRoYW4wMSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6MzJcblx0XHRcdHRleHQ6XCLpop3luqbojIPlm7Qo5YWDKVwiXG5cdFx0XHRmb250U2l6ZToyMipuXG5cdFx0XHRmb250RmFtaWx5OiBcIlBpbmdGYW5nIFRDXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDQwMFxuXHRcdFx0Y29sb3I6XCJyZ2JhKDE3MSwxNjIsMTY1LDEpXCJcblx0XHRcdHRleHRBbGlnbjpcImxlZnRcIlxuXG5cdFx0QGxvYW5DYXJkaGFuMDIgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR0ZXh0Olwi5YiG5pyf6IyD5Zu0KOacnylcIlxuXHRcdFx0Zm9udFNpemU6MjIqblxuXHRcdFx0Zm9udEZhbWlseTogXCJQaW5nRmFuZyBUQ1wiXG5cdFx0XHRmb250V2VpZ2h0OiA0MDBcblx0XHRcdGNvbG9yOlwicmdiYSgxNzEsMTYyLDE2NSwxKVwiXG5cdFx0XHR0ZXh0QWxpZ246XCJyaWdodFwiXG5cblx0XHRAbG9hbkNhcmRMaW1pdCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6MzJcblx0XHRcdHRleHQ6XCItLVwiXG5cdFx0XHRmb250U2l6ZTo0MCpuXG5cdFx0XHRmb250RmFtaWx5OiBcIlBpbmdGYW5nIFRDXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMFxuXHRcdFx0Y29sb3I6XCJyZ2JhKDIyNyw2OSw2MSwxKVwiXG5cdFx0XHR0ZXh0QWxpZ246XCJsZWZ0XCJcblxuXHRcdEBsb2FuQ2FyZE1vbiA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjIwMCpuXG5cdFx0XHR0ZXh0OlwiLS1cIlxuXHRcdFx0Zm9udFNpemU6MzIqblxuXHRcdFx0Zm9udEZhbWlseTogXCJQaW5nRmFuZyBUQ1wiXG5cdFx0XHRmb250V2VpZ2h0OiA1MDBcblx0XHRcdGNvbG9yOlwicmdiYSgzMywzMywzMywxKVwiXG5cdFx0XHR0ZXh0QWxpZ246XCJyaWdodFwiXG5cblx0XHRAbG9hbkNhcmRJY29uID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDoxOTIqblxuXHRcdFx0aGVpZ2h0OjE5MipuXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6bnVsbFxuXHRcdFx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHRAbG9hbkNhcmRUaXRsZS5wYXJlbnQgPSBAXG5cdFx0QGxvYW5DYXJkVGl0bGUueSA9IDQwKm5cblx0XHRAbG9hbkNhcmRTdWJ0aXRsZS5wYXJlbnQgPSBAXG5cdFx0QGxvYW5DYXJkU3VidGl0bGUueSA9IEBsb2FuQ2FyZFRpdGxlLnkrNTYqblxuXHRcdEBsb2FuQ2FyZGhhbjAxLnBhcmVudCA9IEBcblx0XHRAbG9hbkNhcmRoYW4wMS55ID0gMjMyKm5cblx0XHRAbG9hbkNhcmRoYW4wMi5wYXJlbnQgPSBAXG5cdFx0QGxvYW5DYXJkaGFuMDIueCA9IEFsaWduLnJpZ2h0KC0zMipuKVxuXHRcdEBsb2FuQ2FyZGhhbjAyLnkgPSBAbG9hbkNhcmRoYW4wMS55XG5cdFx0QGxvYW5DYXJkTGltaXQucGFyZW50ID0gQFxuXHRcdEBsb2FuQ2FyZExpbWl0LnkgPSBAbG9hbkNhcmRTdWJ0aXRsZS55KzcyKm5cblx0XHRAbG9hbkNhcmRNb24ucGFyZW50ID0gQFxuXHRcdEBsb2FuQ2FyZE1vbi55ID0gQGxvYW5DYXJkU3VidGl0bGUueSs3MipuXG5cdFx0QGxvYW5DYXJkTW9uLnggPSBBbGlnbi5yaWdodCgtMzIqbilcblx0XHRAbG9hbkNhcmRJY29uLnBhcmVudCA9IEBcblx0XHRAbG9hbkNhcmRJY29uLnkgPSAtMjQqblxuXHRcdEBsb2FuQ2FyZEljb24ueCA9IEFsaWduLnJpZ2h0XG5cblx0XHRALm9uVG91Y2hTdGFydCBAVG91Y2hTdGFydFxuXHRcdEAub25Ub3VjaEVuZCBAVG91Y2hFbmRcblx0XHRALm9uVG91Y2hNb3ZlIEBUb3VjaE1vdmVcblxuXHRUb3VjaFN0YXJ0OiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDkwXG5cdFRvdWNoRW5kOiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMFxuXHRUb3VjaE1vdmU6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gMTAwIiwiY2xhc3MgZXhwb3J0cy5MaXN0V2l0aEljb24gZXh0ZW5kcyBMYXllclxuXHRuID0gU2NyZWVuLndpZHRoLzc1MFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRcdGhlaWdodDogOTYqblxuXHRcdFx0d2lkdGg6U2NyZWVuLndpZHRoXG5cdFx0XG5cdFx0QGxpc3RfbmFtZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjMyOFxuXHRcdFx0aGVpZ2h0Ojk2Km5cblx0XHRcdGxpbmVIZWlnaHQ6My40XG5cdFx0XHRmb250U2l6ZTogMjgqblxuXHRcdFx0Zm9udEZhbWlseTogXCJQaW5nRmFuZyBTQ1wiXG5cdFx0XHRmb250V2VpZ2h0OiA0MDBcblx0XHRcdGxldHRlclNwYWNpbmc6IDAuMFxuXHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRcdFx0Y29sb3I6IFwicmdiYSgzMiwzMiwzMiwxKVwiXG5cdFx0XHRcblx0XHRcblx0XHRAbGlzdF9pY29uID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDo0MCpuXG5cdFx0XHRoZWlnaHQ6NDAqblxuXHRcdFx0YmFja2dyb3VuZENvbG9yOm51bGxcblx0XHRcdGltYWdlOlwiXCJcblxuXHRcdEBsaXN0X2Fycm93ID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDo5LjUqblxuXHRcdFx0aGVpZ2h0OjE5Km5cblx0XHRcdGJhY2tncm91bmRDb2xvcjpudWxsXG5cdFx0XHRpbWFnZTpcImltYWdlcy9hY2NvdW50L2Fycm93LnN2Z1wiXG5cdFx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdFxuXHRcdEBsaXN0X25hbWUucGFyZW50ID0gQFxuXHRcdEBsaXN0X25hbWUueSA9IEFsaWduLmNlbnRlclxuXHRcdEBsaXN0X25hbWUueCA9IDEyMCpuXG5cdFx0QGxpc3RfaWNvbi5wYXJlbnQgPSBAXG5cdFx0QGxpc3RfaWNvbi55ID0gMjgqblxuXHRcdEBsaXN0X2ljb24ueCA9IDQ0Km5cblx0XHRAbGlzdF9hcnJvdy5wYXJlbnQgPSBAXG5cdFx0QGxpc3RfYXJyb3cueSA9IEFsaWduLmNlbnRlclxuXHRcdEBsaXN0X2Fycm93LnggPSBBbGlnbi5yaWdodCgtNDgpXG5cdFx0QC5vblRvdWNoU3RhcnQgQFRvdWNoU3RhcnRcblx0XHRALm9uVG91Y2hFbmQgQFRvdWNoRW5kXG5cdFx0QC5vblRvdWNoTW92ZSBAVG91Y2hNb3ZlXG5cblx0VG91Y2hTdGFydDogPT5cblx0XHRALmJyaWdodG5lc3MgPSA5MFxuXHRUb3VjaEVuZDogPT5cblx0XHRALmJyaWdodG5lc3MgPSAxMDBcblx0VG91Y2hNb3ZlOiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMCIsImNsYXNzIGV4cG9ydHMuSWNvbnNOYXZCYXIgZXh0ZW5kcyBMYXllclxuXHRuID0gU2NyZWVuLndpZHRoLzc1MFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRcdGhlaWdodDogMTYwKm5cblx0XHRcblx0XHRAbmF2SWNvblBpYyA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6NjQqblxuXHRcdFx0aGVpZ2h0OjY0Km5cblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIm51bGxcIlxuXHRcdFx0aW1hZ2U6XCJpbWFnZXMvbmF2X2ljb24wMS5zdmdcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXG5cdFx0XG5cdFx0QG5hdkljb25OYW1lID0gbmV3IFRleHRMYXllclxuXHRcdFx0aGVpZ2h0OjQwKm5cblx0XHRcdGZvbnRTaXplOjI0Km5cblx0XHRcdGNvbG9yOlwiIzJEMjkyOVwiXG5cdFx0XHR0ZXh0OlwiaWNvbm5hbWVcIlxuXHRcdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QG5hdkljb25QaWMucGFyZW50ID0gQFxuXHRcdEBuYXZJY29uUGljLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAbmF2SWNvblBpYy55ID0gMzIqblxuXHRcdEBuYXZJY29uTmFtZS5wYXJlbnQgPSBAXG5cdFx0QG5hdkljb25OYW1lLnkgPSAxMTIqblxuXHRcdEBuYXZJY29uTmFtZS53aWR0aCA9IEAud2lkdGhcblx0XHRALm9uVG91Y2hTdGFydCBAVG91Y2hTdGFydFxuXHRcdEAub25Ub3VjaEVuZCBAVG91Y2hFbmRcblx0XHRALm9uVG91Y2hNb3ZlIEBUb3VjaEVuZFxuXG5cdFRvdWNoU3RhcnQ6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gOTBcblx0VG91Y2hFbmQ6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gMTAwXG5cdFRvdWNoTW92ZTogPT5cblx0XHRALmJyaWdodG5lc3MgPSAxMDAiLCJjbGFzcyBleHBvcnRzLkJ1dHRvbiBleHRlbmRzIExheWVyXG5cdG4gPSBTY3JlZW4ud2lkdGgvNzUwXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0QG9wdGlvbnMuZGlzYWJsZWQgPz0gZmFsc2Vcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNGMTQ2NzZcIlxuXHRcdEBvcHRpb25zLndpZHRoID0gMjQwKm5cblx0XHRAb3B0aW9ucy5oZWlnaHQgPSA4MCpuXG5cdFx0XG5cdFx0aWYgQG9wdGlvbnMuZGlzYWJsZWQgaXMgdHJ1ZVxuXHRcdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID1cIiNiZGJkYmRcIlxuXHRcdFxuXHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdGZvbnRTaXplOjI4Km5cblx0XHRcdGNvbG9yOlwiI0ZGRlwiXG5cdFx0XHR0ZXh0QWxpZ246XCJjZW50ZXJcIlxuXHRcdEBsYWJlbC5teVN1cGVyU2V4eUZvbnQgPz0gXCInU291cmNlIFNhbnMnLCBzYW5zIHNlcmlmXCJcblx0XHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGxhYmVsLnBhcmVudCA9IEBcblx0XHRAbGFiZWwueCA9IEFsaWduLmNlbnRlclxuXHRcdEBsYWJlbC55ID0gQWxpZ24uY2VudGVyXG5cblx0XHQjRXZlbnRzXG5cdFx0QC5vblRvdWNoU3RhcnQgQFRvdWNoU3RhcnRcblx0XHRALm9uVG91Y2hNb3ZlIEBUb3VjaE1vdmVcblx0XHRALm9uVG91Y2hFbmQgQFRvdWNoRW5kXG5cdFxuXHRcblx0QGRlZmluZSAnZGlzYWJsZWQnLFxuXHRcdGdldDogLT5cblx0XHRcdEBvcHRpb25zLmRpc2FibGVkXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAb3B0aW9ucy5kaXNhYmxlZCA9IHZhbHVlXG5cdFx0XHRpZiBAb3B0aW9ucy5kaXNhYmxlZCBpcyB0cnVlXG5cdFx0XHRcdEBiYWNrZ3JvdW5kQ29sb3IgPSBcIiNiZGJkYmRcIlxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAYmFja2dyb3VuZENvbG9yID0gXCIjRjE0Njc2XCJcdFxuXHRcdFxuXHQjRnVuY3Rpb25zXG5cdFRvdWNoU3RhcnQ6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gOTBcblx0VG91Y2hFbmQ6ID0+XHRcblx0XHRALmJyaWdodG5lc3MgPSAxMDBcblx0VG91Y2hNb3ZlOiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMCIsImNsYXNzIGV4cG9ydHMuQW5ub3VuY2VCYXIgZXh0ZW5kcyBMYXllclxuXHRuID0gU2NyZWVuLndpZHRoLzc1MFxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRcdHdpZHRoOiBTY3JlZW4ud2lkdGhcblx0XHRcdGhlaWdodDogODAqblxuXHRcdFxuXHRcdEBhbm5vdWNlVGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR4OiA1NipuXG5cdFx0XHRoZWlnaHQ6ODAqblxuXHRcdFx0cGFkZGluZzoyNFxuXHRcdFx0bGluZUhlaWdodDoxLjMqblxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwibnVsbFwiXG5cdFx0XHR0ZXh0OiBcIldoZWF0IHdhbGxldCBnb2RkZXNzIGZlc3RpdmFsIGFjdGl2aXR5Li4uXCJcblx0XHRcdGZvbnRTaXplOjI0Km5cblx0XHRcdGNvbG9yOlwiIzJEMjkyOVwiXG5cdFx0XHRmb250V2VpZ2h0OjQwMFxuXHRcdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRcblx0XHRAYW5ub3VjZUJ1dHRvbiA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjgwKm5cblx0XHRcdGhlaWdodDo4MCpuXG5cdFx0XHR4OkFsaWduLnJpZ2h0KC0xNilcblx0XHRcdGZvbnRTaXplOjI0Km5cblx0XHRcdGxpbmVIZWlnaHQ6My4yXG5cdFx0XHRjb2xvcjpcIiM5ZTllOWVcIlxuXHRcdFx0dGV4dDpcIm1vcmVcIlxuXHRcdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIiNGRkZcIlxuXHRcdFxuXHRcdEBhbm5vdWNlSWNvbiA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6NDAqblxuXHRcdFx0aGVpZ2h0OjQwKm5cblx0XHRcdHg6QWxpZ24ubGVmdCgyNClcblx0XHRcdGltYWdlOlwiaW1hZ2VzL2Fubm91Y2ViYXJpY29uLnN2Z1wiXG5cdFx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdFxuXHRcdEBhbm5vdWNlVGl0bGUucGFyZW50ID0gQFxuXHRcdEBhbm5vdWNlVGl0bGUueSA9IEFsaWduLmNlbnRlclxuXHRcdEBhbm5vdWNlQnV0dG9uLnBhcmVudCA9IEBcblx0XHRAYW5ub3VjZUJ1dHRvbi55ID0gQWxpZ24uY2VudGVyXG5cdFx0QGFubm91Y2VJY29uLnBhcmVudCA9IEBcblx0XHRAYW5ub3VjZUljb24ueSA9IEFsaWduLmNlbnRlclxuXHRcdEBhbm5vdWNlQnV0dG9uLm9uVG91Y2hTdGFydCBAVG91Y2hTdGFydFxuXHRcdEBhbm5vdWNlQnV0dG9uLm9uVG91Y2hFbmQgQFRvdWNoRW5kXG5cdFx0QGFubm91Y2VCdXR0b24ub25Ub3VjaE1vdmUgQFRvdWNoRW5kXG5cblx0VG91Y2hTdGFydDogPT5cblx0XHRAYW5ub3VjZUJ1dHRvbi5icmlnaHRuZXNzID0gOTZcblx0VG91Y2hFbmQ6ID0+XG5cdFx0QGFubm91Y2VCdXR0b24uYnJpZ2h0bmVzcyA9IDEwMFxuXHRUb3VjaE1vdmU6ID0+XG5cdFx0QGFubm91Y2VCdXR0b24uYnJpZ2h0bmVzcyA9IDEwMCIsIiMgSGVscGVyc1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4jIEdldCB0aGUgVVJMIHZhcmlhYmxlcyBhcyBhbiBvYmplY3RcbmdldFVybFZhcnMgPSAoKSAtPlxuXG5cdHZhcnMgPSB7fVxuXG5cdHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSAvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLCAobSwga2V5LCB2YWx1ZSkgLT5cblx0XHR2YXJzW2tleV0gPSB2YWx1ZVxuXG5cdHJldHVybiB2YXJzXG5cblxuIyBNYWtlIHBhcmFtZXRlciBzdHJpbmcgZnJvbSBvYmplY3Rcbm1ha2VVcmxTdHJpbmcgPSAob2JqKSAtPlxuXG5cdHN0cmluZyA9IFwiP1wiXG5cblx0Zm9yIGtleSwgdmFsdWUgb2Ygb2JqXG5cdFx0c3RyaW5nICs9IGtleSArIFwiPVwiICsgdmFsdWUgKyBcIiZcIlxuXG5cdHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCAtMSlcblxuXHRyZXR1cm4gc3RyaW5nXG5cblxuIyBNYWtlIG9wdGlvbiBlbGVtZW50XG5tYWtlT3B0aW9uID0gKGxhYmVsLCB2YWx1ZSA9IFwibm9uZVwiKSAtPlxuXG5cdG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJvcHRpb25cIlxuXHRvcHQuc2V0QXR0cmlidXRlIFwidmFsdWVcIiwgdmFsdWVcblx0b3B0LmlubmVySFRNTCA9IGxhYmVsXG5cblx0cmV0dXJuIG9wdFxuXG5cbiMgU2luY2UgVXRpbHMuaXNEZXNrdG9wKCkgZG9lc24ndCBzZWVtIHRvIHBpY2sgdXAgZXZlcnl0aGluZyAobm90YWJseSBzb21lIEFuZHJvaWQgZGV2aWNlcylcbmlzRGVza3RvcCA9IC0+XG5cblx0aWYgLyh0YWJsZXQpfChpUGFkKXwoTmV4dXMgOSl8KG1vYmkpfChBbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcblx0XHRyZXR1cm4gZmFsc2VcblxuXHRyZXR1cm4gdHJ1ZVxuXG5cbiMgRGV2aWNlIHBpY2tlclxuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblBpY2tlciA9IHt9XG5cblxuIyBFdmVyeSBkZXZpY2UgZnJvbSBGcmFtZXIncyBEZXZpY2VDb21wb25lbnQsIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyBiYXNlIGNsYXNzXG5QaWNrZXIuX2RldmljZUxpc3QgPVxuXG5cdFwiaVBhZFwiOlxuXG5cdFx0IyBpUGFkIEFpclxuXHRcdFwiYXBwbGUtaXBhZC1haXItMi1zaWx2ZXJcIjogXCJpUGFkQWlyMkJhc2VEZXZpY2VcIlxuXHRcdFwiYXBwbGUtaXBhZC1haXItMi1nb2xkXCI6IFwiaVBhZEFpcjJCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwYWQtYWlyLTItc3BhY2UtZ3JheVwiOiBcImlQYWRBaXIyQmFzZURldmljZVwiXG5cblx0XHQjIGlQYWQgTWluaVxuXHRcdFwiYXBwbGUtaXBhZC1taW5pLTQtc2lsdmVyXCI6IFwiaVBhZE1pbmk0QmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGFkLW1pbmktNC1nb2xkXCI6IFwiaVBhZE1pbmk0QmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGFkLW1pbmktNC1zcGFjZS1ncmF5XCI6IFwiaVBhZE1pbmk0QmFzZURldmljZVwiXG5cblx0XHQjIGlQYWQgUHJvXG5cdFx0XCJhcHBsZS1pcGFkLXByby1zaWx2ZXJcIjogXCJpUGFkUHJvQmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGFkLXByby1nb2xkXCI6IFwiaVBhZFByb0Jhc2VEZXZpY2VcIlxuXHRcdFwiYXBwbGUtaXBhZC1wcm8tc3BhY2UtZ3JheVwiOiBcImlQYWRQcm9CYXNlRGV2aWNlXCJcblxuXHRcImlQaG9uZVwiOlxuXHRcdFxuXHRcdCMgaVBob25lIDdcblx0XHRcImFwcGxlLWlwaG9uZS03LWdvbGRcIjogXCJpUGhvbmU3QmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNy1yb3NlLWdvbGRcIjogXCJpUGhvbmU3QmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNy1zaWx2ZXJcIjogXCJpUGhvbmU3QmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNy1ibGFja1wiOiBcImlQaG9uZTdCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwaG9uZS03LWpldC1ibGFja1wiOiBcImlQaG9uZTdCYXNlRGV2aWNlXCJcblxuXHRcdCMgaVBob25lIDcgUGx1c1xuXHRcdFwiYXBwbGUtaXBob25lLTctcGx1cy1nb2xkXCI6IFwiaVBob25lN1BsdXNCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwaG9uZS03LXBsdXMtcm9zZS1nb2xkXCI6IFwiaVBob25lN1BsdXNCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwaG9uZS03LXBsdXMtc2lsdmVyXCI6IFwiaVBob25lN1BsdXNCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwaG9uZS03LXBsdXMtYmxhY2tcIjogXCJpUGhvbmU3UGx1c0Jhc2VEZXZpY2VcIlxuXHRcdFwiYXBwbGUtaXBob25lLTctcGx1cy1qZXQtYmxhY2tcIjogXCJpUGhvbmU3UGx1c0Jhc2VEZXZpY2VcIlxuXG5cdFx0IyBpUGhvbmUgNnNcblx0XHRcImFwcGxlLWlwaG9uZS02cy1nb2xkXCI6IFwiaVBob25lNkJhc2VEZXZpY2VcIlxuXHRcdFwiYXBwbGUtaXBob25lLTZzLXJvc2UtZ29sZFwiOiBcImlQaG9uZTZCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwaG9uZS02cy1zaWx2ZXJcIjogXCJpUGhvbmU2QmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNnMtc3BhY2UtZ3JheVwiOiBcImlQaG9uZTZCYXNlRGV2aWNlXCJcblxuXHRcdCMgaVBob25lIDZzIFBsdXNcblx0XHRcImFwcGxlLWlwaG9uZS02cy1wbHVzLWdvbGRcIjogXCJpUGhvbmU2UGx1c0Jhc2VEZXZpY2VcIlxuXHRcdFwiYXBwbGUtaXBob25lLTZzLXBsdXMtcm9zZS1nb2xkXCI6IFwiaVBob25lNlBsdXNCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwaG9uZS02cy1wbHVzLXNpbHZlclwiOiBcImlQaG9uZTZQbHVzQmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNnMtcGx1cy1zcGFjZS1ncmF5XCI6IFwiaVBob25lNlBsdXNCYXNlRGV2aWNlXCJcblxuXHRcdCMgaVBob25lIDVTXG5cdFx0XCJhcHBsZS1pcGhvbmUtNXMtZ29sZFwiOiBcImlQaG9uZTVCYXNlRGV2aWNlXCJcblx0XHRcImFwcGxlLWlwaG9uZS01cy1zaWx2ZXJcIjogXCJpUGhvbmU1QmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNXMtc3BhY2UtZ3JheVwiOiBcImlQaG9uZTVCYXNlRGV2aWNlXCJcblxuXHRcdCMgaVBob25lIDVDXG5cdFx0XCJhcHBsZS1pcGhvbmUtNWMtYmx1ZVwiOiBcImlQaG9uZTVDQmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNWMtZ3JlZW5cIjogXCJpUGhvbmU1Q0Jhc2VEZXZpY2VcIlxuXHRcdFwiYXBwbGUtaXBob25lLTVjLXJlZFwiOiBcImlQaG9uZTVDQmFzZURldmljZVwiXG5cdFx0XCJhcHBsZS1pcGhvbmUtNWMtd2hpdGVcIjogXCJpUGhvbmU1Q0Jhc2VEZXZpY2VcIlxuXHRcdFwiYXBwbGUtaXBob25lLTVjLXllbGxvd1wiOiBcImlQaG9uZTVDQmFzZURldmljZVwiXG5cblx0XCJBcHBsZSBXYXRjaFwiOlxuXHRcdFxuXHRcdCMgQXBwbGUgV2F0Y2ggU2VyaWVzIDIgMzhtbVxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItMzhtbS1ibGFjay1zdGVlbC1ibGFja1wiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItMzhtbS1lZGl0aW9uXCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi0zOG1tLXJvc2UtZ29sZC1hbHVtaW51bS1taWRuaWdodC1ibHVlXCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi0zOG1tLXNpbHZlci1hbHVtaW51bS1jb2NvYVwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItMzhtbS1zaWx2ZXItYWx1bWludW0tY29uY3JldGVcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjM4RGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTM4bW0tc2lsdmVyLWFsdW1pbnVtLW9jZWFuLWJsdWVcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjM4RGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTM4bW0tc2lsdmVyLWFsdW1pbnVtLXJlZFwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItMzhtbS1zaWx2ZXItYWx1bWludW0tdHVycXVvaXNlXCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi0zOG1tLXNpbHZlci1hbHVtaW51bS13aGl0ZVwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItMzhtbS1zaWx2ZXItYWx1bWludW0teWVsbG93XCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi0zOG1tLXNwYWNlLWdyYXktYWx1bWludW0tYmxhY2tcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjM4RGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTM4bW0tc3BvcnQtYWx1bWludW0td2FsbnV0XCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi0zOG1tLXN0ZWVsLXdoaXRlXCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cblx0XHQjIEFwcGxlIFdhdGNoIFNlcmllcyAyIDQybW1cblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTQybW0tZWRpdGlvblwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItNDJtbS1nb2xkLWFsdW1pbnVtLWNvY29hXCI6IFwiQXBwbGVXYXRjaFNlcmllczI0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi00Mm1tLXJvc2UtZ29sZC1hbHVtaW51bS1taWRuaWdodC1ibHVlXCI6IFwiQXBwbGVXYXRjaFNlcmllczI0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi00Mm1tLXNpbHZlci1hbHVtaW51bS1jb25jcmV0ZVwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItNDJtbS1zaWx2ZXItYWx1bWludW0tZ3JlZW5cIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTQybW0tc2lsdmVyLWFsdW1pbnVtLWxpZ2h0LXBpbmtcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTQybW0tc2lsdmVyLWFsdW1pbnVtLW9jZWFuLWJsdWVcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTQybW0tc2lsdmVyLWFsdW1pbnVtLXBpbmstc2FuZFwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItNDJtbS1zaWx2ZXItYWx1bWludW0tcmVkXCI6IFwiQXBwbGVXYXRjaFNlcmllczI0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi00Mm1tLXNpbHZlci1hbHVtaW51bS10dXJxdW9pc2VcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTQybW0tc2lsdmVyLWFsdW1pbnVtLXdoaXRlXCI6IFwiQXBwbGVXYXRjaFNlcmllczI0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1zZXJpZXMtMi00Mm1tLXNpbHZlci1hbHVtaW51bS15ZWxsb3dcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTQybW0tc3BhY2UtYmxhY2stc3RlZWwtYmxhY2tcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLXNlcmllcy0yLTQybW0tc3BhY2UtZ3JheS1hbHVtaW51bS1ibGFja1wiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtc2VyaWVzLTItNDJtbS1zdGVlbC13aGl0ZVwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyNDJEZXZpY2VcIlxuXG5cdFx0IyBBcHBsZSBXYXRjaCBOaWtlKyAzOG1tXG5cdFx0XCJhcHBsZS13YXRjaC1uaWtlLXBsdXMtMzhtbS1zaWx2ZXItYWx1bWludW0tZmxhdC1zaWx2ZXItdm9sdFwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtbmlrZS1wbHVzLTM4bW0tc2lsdmVyLWFsdW1pbnVtLWZsYXQtc2lsdmVyLXdoaXRlXCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1uaWtlLXBsdXMtMzhtbS1zcGFjZS1ncmF5LWFsdW1pbnVtLWJsYWNrLWNvb2wtZ3JheVwiOiBcIkFwcGxlV2F0Y2hTZXJpZXMyMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtbmlrZS1wbHVzLTM4bW0tc3BhY2UtZ3JheS1hbHVtaW51bS1ibGFjay12b2x0XCI6IFwiQXBwbGVXYXRjaFNlcmllczIzOERldmljZVwiXG5cblx0XHQjIEFwcGxlIFdhdGNoIE5pa2UrIDQybW1cblx0XHRcImFwcGxlLXdhdGNoLW5pa2UtcGx1cy00Mm1tLXNpbHZlci1hbHVtaW51bS1mbGF0LXNpbHZlci12b2x0XCI6IFwiQXBwbGVXYXRjaFNlcmllczI0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1uaWtlLXBsdXMtNDJtbS1zaWx2ZXItYWx1bWludW0tZmxhdC1zaWx2ZXItd2hpdGVcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLW5pa2UtcGx1cy00Mm1tLXNwYWNlLWdyYXktYWx1bWludW0tYmxhY2stY29vbC1ncmF5XCI6IFwiQXBwbGVXYXRjaFNlcmllczI0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC1uaWtlLXBsdXMtNDJtbS1zcGFjZS1ncmF5LWFsdW1pbnVtLWJsYWNrLXZvbHRcIjogXCJBcHBsZVdhdGNoU2VyaWVzMjQyRGV2aWNlXCJcblxuXHRcdCMgQXBwbGUgV2F0Y2ggMzhtbVxuXG5cdFx0XCJhcHBsZS13YXRjaC0zOG1tLWdvbGQtYmxhY2stbGVhdGhlci1jbG9zZWRcIjogXCJBcHBsZVdhdGNoMzhCbGFja0xlYXRoZXJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtMzhtbS1yb3NlLWdvbGQtYmxhY2stbGVhdGhlci1jbG9zZWRcIjogXCJBcHBsZVdhdGNoMzhCbGFja0xlYXRoZXJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtMzhtbS1zdGFpbmxlc3Mtc3RlZWwtYmxhY2stbGVhdGhlci1jbG9zZWRcIjogXCJBcHBsZVdhdGNoMzhCbGFja0xlYXRoZXJEZXZpY2VcIlxuXG5cdFx0XCJhcHBsZS13YXRjaC0zOG1tLWJsYWNrLXN0ZWVsLWJsYWNrLWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2gzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC0zOG1tLWdvbGQtbWlkbmlnaHQtYmx1ZS1jbG9zZWRcIjogXCJBcHBsZVdhdGNoMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtMzhtbS1yb3NlLWdvbGQtbGF2ZW5kZXItY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDM4RGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLTM4bW0tc3BvcnQtYWx1bWludW0tYmx1ZS1jbG9zZWRcIjogXCJBcHBsZVdhdGNoMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtMzhtbS1zcG9ydC1hbHVtaW51bS1mb2ctY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDM4RGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLTM4bW0tc3BvcnQtYWx1bWludW0tZ3JlZW4tY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDM4RGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLTM4bW0tc3BvcnQtYWx1bWludW0tcmVkLWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2gzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC0zOG1tLXNwb3J0LWFsdW1pbnVtLXdhbG51dC1jbG9zZWRcIjogXCJBcHBsZVdhdGNoMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtMzhtbS1zcG9ydC1hbHVtaW51bS13aGl0ZS1jbG9zZWRcIjogXCJBcHBsZVdhdGNoMzhEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtMzhtbS1zcG9ydC1hbHVtaW51bS1nb2xkLWFudGlxdWUtd2hpdGUtY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDM4RGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLTM4bW0tc3BvcnQtYWx1bWludW0tcm9zZS1nb2xkLXN0b25lLWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2gzOERldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC0zOG1tLXNwb3J0LXNwYWNlLWdyYXktYmxhY2stY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDM4RGV2aWNlXCJcblxuXHRcdCMgQXBwbGUgV2F0Y2ggNDJtbVxuXHRcdFwiYXBwbGUtd2F0Y2gtNDJtbS1ibGFjay1zdGVlbC1ibGFjay1jbG9zZWRcIjogXCJBcHBsZVdhdGNoNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtNDJtbS1nb2xkLWJsYWNrLWxlYXRoZXItY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLTQybW0tZ29sZC1taWRuaWdodC1ibHVlLWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2g0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC00Mm1tLXJvc2UtZ29sZC1ibGFjay1sZWF0aGVyLWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2g0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC00Mm1tLXJvc2UtZ29sZC1sYXZlbmRlci1jbG9zZWRcIjogXCJBcHBsZVdhdGNoNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtNDJtbS1zcG9ydC1hbHVtaW51bS1ibHVlLWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2g0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC00Mm1tLXNwb3J0LWFsdW1pbnVtLWZvZy1jbG9zZWRcIjogXCJBcHBsZVdhdGNoNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtNDJtbS1zcG9ydC1hbHVtaW51bS1ncmVlbi1jbG9zZWRcIjogXCJBcHBsZVdhdGNoNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtNDJtbS1zcG9ydC1hbHVtaW51bS1yZWQtY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLTQybW0tc3BvcnQtYWx1bWludW0td2FsbnV0LWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2g0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC00Mm1tLXNwb3J0LWFsdW1pbnVtLXdoaXRlLWNsb3NlZFwiOiBcIkFwcGxlV2F0Y2g0MkRldmljZVwiXG5cdFx0XCJhcHBsZS13YXRjaC00Mm1tLXNwb3J0LWFsdW1pbnVtLWdvbGQtYW50aXF1ZS13aGl0ZS1jbG9zZWRcIjogXCJBcHBsZVdhdGNoNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtNDJtbS1zcG9ydC1hbHVtaW51bS1yb3NlLWdvbGQtc3RvbmUtY2xvc2VkXCI6IFwiQXBwbGVXYXRjaDQyRGV2aWNlXCJcblx0XHRcImFwcGxlLXdhdGNoLTQybW0tc3BvcnQtc3BhY2UtZ3JheS1ibGFjay1jbG9zZWRcIjogXCJBcHBsZVdhdGNoNDJEZXZpY2VcIlxuXHRcdFwiYXBwbGUtd2F0Y2gtNDJtbS1zdGFpbmxlc3Mtc3RlZWwtYmxhY2stbGVhdGhlci1jbG9zZWRcIjogXCJBcHBsZVdhdGNoNDJEZXZpY2VcIlxuXG5cdFwiR29vZ2xlXCI6XG5cdFx0XG5cdFx0IyBORVhVU1xuXHRcdFwiZ29vZ2xlLW5leHVzLTRcIjogXCJOZXh1czRCYXNlRGV2aWNlXCJcblx0XHRcImdvb2dsZS1uZXh1cy01eFwiOiBcIk5leHVzNUJhc2VEZXZpY2VcIlxuXHRcdFwiZ29vZ2xlLW5leHVzLTZwXCI6IFwiTmV4dXM2QmFzZURldmljZVwiXG5cdFx0XCJnb29nbGUtbmV4dXMtOVwiOiBcIk5leHVzOUJhc2VEZXZpY2VcIlxuXG5cdFx0IyBQaXhlbFxuXHRcdFwiZ29vZ2xlLXBpeGVsLXF1aXRlLWJsYWNrXCI6IFwiUGl4ZWxCYXNlRGV2aWNlXCJcblx0XHRcImdvb2dsZS1waXhlbC1yZWFsbHktYmx1ZVwiOiBcIlBpeGVsQmFzZURldmljZVwiXG5cdFx0XCJnb29nbGUtcGl4ZWwtdmVyeS1zaWx2ZXJcIjogXCJQaXhlbEJhc2VEZXZpY2VcIlxuXHRcblx0XCJNaXNjIGhhbmRoZWxkXCI6XG5cblx0XHQjIEhUQyBPTkUgQTlcblx0XHRcImh0Yy1vbmUtYTktYmxhY2tcIjogXCJIVENhOUJhc2VEZXZpY2VcIlxuXHRcdFwiaHRjLW9uZS1hOS13aGl0ZVwiOiBcIkhUQ2E5QmFzZURldmljZVwiXG5cblx0XHQjIEhUQyBPTkUgTThcblx0XHRcImh0Yy1vbmUtbTgtYmxhY2tcIjogXCJIVENtOEJhc2VEZXZpY2VcIlxuXHRcdFwiaHRjLW9uZS1tOC1nb2xkXCI6IFwiSFRDbThCYXNlRGV2aWNlXCJcblx0XHRcImh0Yy1vbmUtbTgtc2lsdmVyXCI6IFwiSFRDbThCYXNlRGV2aWNlXCJcblxuXHRcdCMgTUlDUk9TT0ZUIExVTUlBIDk1MFxuXHRcdFwibWljcm9zb2Z0LWx1bWlhLTk1MC1ibGFja1wiOiBcIk1TRlRMdW1pYTk1MEJhc2VEZXZpY2VcIlxuXHRcdFwibWljcm9zb2Z0LWx1bWlhLTk1MC13aGl0ZVwiOiBcIk1TRlRMdW1pYTk1MEJhc2VEZXZpY2VcIlxuXG5cdFx0IyBTQU1TVU5HIE5PVEUgNVxuXHRcdFwic2Ftc3VuZy1nYWxheHktbm90ZS01LWJsYWNrXCI6IFwiU2Ftc3VuZ0dhbGF4eU5vdGU1QmFzZURldmljZVwiXG5cdFx0XCJzYW1zdW5nLWdhbGF4eS1ub3RlLTUtZ29sZFwiOiBcIlNhbXN1bmdHYWxheHlOb3RlNUJhc2VEZXZpY2VcIlxuXHRcdFwic2Ftc3VuZy1nYWxheHktbm90ZS01LXBpbmtcIjogXCJTYW1zdW5nR2FsYXh5Tm90ZTVCYXNlRGV2aWNlXCJcblx0XHRcInNhbXN1bmctZ2FsYXh5LW5vdGUtNS1zaWx2ZXItdGl0YW5pdW1cIjogXCJTYW1zdW5nR2FsYXh5Tm90ZTVCYXNlRGV2aWNlXCJcblx0XHRcInNhbXN1bmctZ2FsYXh5LW5vdGUtNS13aGl0ZVwiOiBcIlNhbXN1bmdHYWxheHlOb3RlNUJhc2VEZXZpY2VcIlxuXHRcblx0XCJPdGhlclwiOlxuXG5cdFx0IyBOb3RlYm9va3Ncblx0XHRcImFwcGxlLW1hY2Jvb2tcIjogXCJBcHBsZU1hY0Jvb2tcIlxuXHRcdFwiYXBwbGUtbWFjYm9vay1haXJcIjogXCJBcHBsZU1hY0Jvb2tBaXJcIlxuXHRcdFwiYXBwbGUtbWFjYm9vay1wcm9cIjogXCJBcHBsZU1hY0Jvb2tQcm9cIlxuXHRcdFwiZGVsbC14cHNcIjogXCJEZWxsWFBTXCJcblxuXHRcdCMgRGVza3RvcHNcblx0XHRcImFwcGxlLWltYWNcIjogXCJBcHBsZUlNYWNcIlxuXG5cdFx0IyBUVlxuXHRcdFwic29ueS13ODVPY1wiOiBcIlNvbnlXODVPQ1wiXG5cblx0XHQjIEZ1bGxzY3JlZW5cblx0XHQjIFwiZnVsbHNjcmVlblwiOiB0cnVlXG5cblxuXG4jIEV4Y2x1ZGUgZGV2aWNlIGdyb3VwIGZyb20gbGlzdFxuUGlja2VyLmV4Y2x1ZGUgPSAoZ3JvdXAgPSBcIlwiKSAtPlxuXG5cdGZvciBrZXksIHZhbHVlIG9mIFBpY2tlci5fZGV2aWNlTGlzdFxuXG5cdFx0aWYgZ3JvdXAudG9Mb3dlckNhc2UoKSBpcyBrZXkudG9Mb3dlckNhc2UoKVxuXG5cdFx0XHR2YWx1ZS5fZXhjbHVkZUZyb21MaXN0ID0gdHJ1ZVxuXG5cdFBpY2tlci5lbmFibGUoKVxuXG5cblxuIyBSZWluY2x1ZGUgYW4gZXhjbHVkZWQgZGV2aWNlIGdyb3VwIGluIGxpc3RcblBpY2tlci5pbmNsdWRlID0gKGdyb3VwID0gXCJcIikgLT5cblxuXHRmb3Iga2V5LCB2YWx1ZSBvZiBQaWNrZXIuX2RldmljZUxpc3RcblxuXHRcdGlmIGdyb3VwLnRvTG93ZXJDYXNlKCkgaXMga2V5LnRvTG93ZXJDYXNlKClcblxuXHRcdFx0bWF0Y2ggPSB2YWx1ZS5fZXhjbHVkZUZyb21MaXN0ID0gZmFsc2VcblxuXHRQaWNrZXIuZW5hYmxlKClcblxuXG5cbiMgQWRkIGRyb3Bkb3duIGZvciBzZWxlY3RpbmcgYSBkaWZmZXJlbnQgZGV2aWNlXG5QaWNrZXIuZW5hYmxlID0gLT5cblxuXHRyZXR1cm4gaWYgd2luZG93LkZyYW1lclN0dWRpbyBvciBub3QgaXNEZXNrdG9wKCkgb3IgRnJhbWVyLkRldmljZS5kZXZpY2VUeXBlIGlzIFwiZnVsbHNjcmVlblwiXG5cblx0aWYgbm90IFBpY2tlci5fY29udHJvbERpdlxuXG5cdFx0IyBESVYgdG8gY29udGFpbiB0aGUgZGV2aWNlIGNvbnRyb2xzXG5cdFx0UGlja2VyLl9jb250cm9sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImRpdlwiXG5cdFx0UGlja2VyLl9jb250cm9sRGl2LnNldEF0dHJpYnV0ZSBcInN0eWxlXCIsIFwicG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwcHg7IHJpZ2h0OiAxMHB4OyB6LWluZGV4OiA5OTk5OyB0ZXh0LWFsaWduOiByaWdodFwiXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCBQaWNrZXIuX2NvbnRyb2xEaXZcblxuXHRcdCMgRGV2aWNlIGxpc3QgZHJvcGRvd25cblx0XHRQaWNrZXIuX2RldmljZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcInNlbGVjdFwiXG5cdFx0UGlja2VyLl9kZXZpY2VTZWxlY3Rvci5zZXRBdHRyaWJ1dGUgXCJzdHlsZVwiLCBcImRpc3BsYXk6IGJsb2NrXCJcblx0XHRQaWNrZXIuX2NvbnRyb2xEaXYuYXBwZW5kQ2hpbGQgUGlja2VyLl9kZXZpY2VTZWxlY3RvclxuXG5cdFx0UGlja2VyLl9kZXZpY2VTZWxlY3Rvci5vbmNoYW5nZSA9IC0+XG5cblx0XHRcdHJldHVybiBpZiBAdmFsdWUgaXMgXCJub25lXCJcblxuXHRcdFx0dmFycyA9IGdldFVybFZhcnMod2luZG93LmxvY2F0aW9uLmhyZWYpXG5cdFx0XHR2YXJzLmRldmljZVR5cGUgPSBAdmFsdWVcblxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF0gKyBtYWtlVXJsU3RyaW5nKHZhcnMpXG5cblx0XHQjIERldmljZSByb3RhdGlvbiB0b2dnbGVcblx0XHRQaWNrZXIuX3JvdGF0ZVRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJidXR0b25cIlxuXHRcdFBpY2tlci5fcm90YXRlVG9nZ2xlLnNldEF0dHJpYnV0ZSBcInR5cGVcIiwgXCJidXR0b25cIlxuXHRcdFBpY2tlci5fcm90YXRlVG9nZ2xlLnNldEF0dHJpYnV0ZSBcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiAjMzMzOyBwYWRkaW5nOiAwLjVlbSAxZW07IGJvcmRlci1yYWRpdXM6IDNweFwiXG5cdFx0UGlja2VyLl9yb3RhdGVUb2dnbGUuaW5uZXJIVE1MID0gXCJSb3RhdGVcIlxuXHRcdFBpY2tlci5fY29udHJvbERpdi5hcHBlbmRDaGlsZCBQaWNrZXIuX3JvdGF0ZVRvZ2dsZVxuXG5cdFx0UGlja2VyLl9yb3RhdGVUb2dnbGUub25jbGljayA9IC0+XG5cblx0XHRcdHZhcnMgPSBnZXRVcmxWYXJzKClcblxuXHRcdFx0aWYgIXZhcnMub3JpZW50YXRpb24gb3IgdmFycy5vcmllbnRhdGlvbiBpcyBcIjBcIlxuXHRcdFx0XHR2YXJzLm9yaWVudGF0aW9uID0gXCI5MFwiXG5cblx0XHRcdGVsc2Vcblx0XHRcdFx0dmFycy5vcmllbnRhdGlvbiA9IFwiMFwiXG5cblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdICsgbWFrZVVybFN0cmluZyh2YXJzKVxuXG5cblx0IyBDbGVhciBkZXZpY2UgbGlzdCBiZWZvcmUgcG9wdWxhdGluZyBpbiBjYXNlIGl0IGFscmVhZHkgZXhpc3RzXG5cdFBpY2tlci5fZGV2aWNlU2VsZWN0b3IuaW5uZXJIVE1MID0gXCJcIlxuXG5cdCMgTGlzdCBoZWFkZXJcblx0UGlja2VyLl9kZXZpY2VTZWxlY3Rvci5hcHBlbmRDaGlsZCBtYWtlT3B0aW9uKFwiUGljayBkZXZpY2VcIilcblxuXHQjIEdlbmVyYXRlIGxpc3Rcblx0Zm9yIGdyb3VwLCBkZXZpY2VzIG9mIFBpY2tlci5fZGV2aWNlTGlzdCB3aGVuIGRldmljZXMuX2V4Y2x1ZGVGcm9tTGlzdCBpc250IHRydWVcblxuXHRcdFBpY2tlci5fZGV2aWNlU2VsZWN0b3IuYXBwZW5kQ2hpbGQgbWFrZU9wdGlvbihcIiBcIilcblx0XHRQaWNrZXIuX2RldmljZVNlbGVjdG9yLmFwcGVuZENoaWxkIG1ha2VPcHRpb24oXCIjIFwiICsgZ3JvdXApXG5cdFx0UGlja2VyLl9kZXZpY2VTZWxlY3Rvci5hcHBlbmRDaGlsZCBtYWtlT3B0aW9uKFwiIFwiKVxuXG5cdFx0Zm9yIGRldmljZSwgYmFzZSBvZiBkZXZpY2VzIHdoZW4gZGV2aWNlIGlzbnQgXCJfZXhjbHVkZUZyb21MaXN0XCJcblx0XHRcdFBpY2tlci5fZGV2aWNlU2VsZWN0b3IuYXBwZW5kQ2hpbGQgbWFrZU9wdGlvbihkZXZpY2UsIGRldmljZSlcblxuXG5cbiMgRHN0cm95IGRyb3Bkb3duIGlmIGl0IGV4aXN0c1xuUGlja2VyLmRpc2FibGUgPSAtPlxuXG5cdGlmIFBpY2tlci5fY29udHJvbERpdlxuXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCBQaWNrZXIuX2NvbnRyb2xEaXZcblxuXHRcdFBpY2tlci5fY29udHJvbERpdiA9IG51bGxcblxuXG5cbiMgQmFzZSBvYmplY3Qgd2hpY2ggQWRhcHQgcHJveGllc1xuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuYmFzZSA9IHt9XG5cblxuXG5cbiMgVGhpcyBpcyB0aGUgZXZhbHVhdG9yIGZ1bmN0aW9uIHVzZWQgYnkgQWRhcHQuY2hlY2soKSB0byBzZWUgd2hpY2ggYnJlYWtwb2ludFxuIyB0byBhcHBseS4gSWYgaXQgZG9lc24ndCByZXR1cm4gYSBzdHJpbmcsIEFkYXB0LmNoZWNrKCkgd2lsbCByZXR1cm4gXCJvdGhlclwiLlxuI1xuIyBBZGFwdC5zZXRCcmVha3BvaW50cygpIG92ZXJ3cml0ZXMgdGhpcyB0byByZXR1cm4gYSBicmVha3BvaW50IGJhc2VkIG9uXG4jIFNjcmVlbi53aWR0aC5cbiNcbiMgWW91IGNhbiBvdmVyd3JpdGUgaXQgd2l0aCB5b3VyIG93biBldmFsdWF0b3IgZnVuY3Rpb24gd2l0aCB5b3VyIG93biBjdXN0b21cbiMgY3JpdGVyaWEgaWYgeW91IGxpa2UuXG4jXG5iYXNlLmV2YWx1YXRvciA9IC0+XG5cdHJldHVybiBudWxsXG5cblxuXG4jIFNldCBicmVha3BvaW50cyBiYXNlZCBvbiBtYXggc2NyZWVuIHdpZHRoOlxuI1xuIyBBZGFwdC5zZXRCcmVha3BvaW50c1xuI1x0c21hbGw6IDQwMFxuI1x0bWVkaXVtOiA2MDBcbiNcdGxhcmdlOiAxMDAwXG4jXG4jIFlvdSBjYW4gbm93IHNhdmUgYW55IHZhcmlhYmxlIHlvdSB3YW50IGFzIGEgc2V0IG9mIHZhbHVlcywgb25lIHBlciBicmVha3BvaW50OlxuI1xuIyBBZGFwdC5jb2x1bW5zID1cbiNcdHNtYWxsOiAxXG4jXHRtZWRpdW06IDJcbiNcdGxhcmdlOiA0XG4jXHRvdGhlcjogNVxuI1xuIyBOb3cgd2hlbiB5b3UgdXNlIEFkYXB0LmNvbHVtbnMgaW4geW91ciBwcm90b3R5cGUsIGl0IHdpbGwgb25seSByZXR1cm4gdGhlXG4jIGNvcnJlY3QgdmFsdWUgYmFzZWQgb24gdGhlIHNjcmVlbiB3aWR0aDpcbiNcbiMgcHJpbnQgQWRhcHQuY29sdW1uc1xuI1xuIyBUaGlzIHByaW50cyBcIjFcIiBvbiBhbiBpUGhvbmUgNywgZm9yIGV4YW1wbGVcbiMgXG5iYXNlLnNldEJyZWFrcG9pbnRzID0gKGJyZWFrcG9pbnRzID0ge30pIC0+XG5cdFxuXHRicEFycmF5ID0gW11cblx0XG5cdGZvciBuYW1lLCB2YWx1ZSBvZiBicmVha3BvaW50c1xuXHRcblx0XHRicEFycmF5LnB1c2hcblx0XHRcdG5hbWU6IG5hbWVcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcblx0IyBTb3J0IGluIGRlc2NlbmRpbmcgb3JkZXJcblx0YnBBcnJheS5zb3J0IChhLCBiKSAtPiBiLnZhbHVlIC0gYS52YWx1ZVxuXHRcblx0IyBXcml0ZSBhIGZ1bmN0aW9uIGZvciBBZGFwdC5ldmFsdWF0b3IoKSB0aGF0IGNoZWNrcyBhZ2FpbnN0IFNjcmVlbi53aWR0aFxuXHRiYXNlLmV2YWx1YXRvciA9IC0+XG5cdFx0XG5cdFx0cmVzdWx0ID0gbnVsbFxuXHRcdFxuXHRcdGZvciBicCBpbiBicEFycmF5XG5cdFx0XG5cdFx0XHRpZiBTY3JlZW4ud2lkdGggPD0gYnAudmFsdWVcblx0XHRcdFx0cmVzdWx0ID0gYnAubmFtZVxuXHRcdFxuXHRcdHJldHVybiByZXN1bHRcblx0XHRcblxuXHRcdFxuIyBUaGlzIHJldHVybnMgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCwgb3IgXCJvdGhlclwiIGlmIHRoZSBldmFsdWF0b3JcbiMgZG9lc24ndCByZXR1cm4gYSBicmVha3BvaW50IG5hbWUuXG4jXG5iYXNlLmNoZWNrID0gLT5cblx0XG5cdGtleSA9IGJhc2UuZXZhbHVhdG9yKClcblx0XG5cdGlmIG5vdCBrZXkgb3IgdHlwZW9mIGtleSBpc250IFwic3RyaW5nXCJcblx0XHRrZXkgPSBcIm90aGVyXCJcblx0XG5cdHJldHVybiBrZXlcblxuXG5cbiMgQWRkIGRldmljZSBwaWNrZXJcbiNcbmJhc2UucGlja2VyID0gUGlja2VyXG5cblxuXG4jIFByb3BlcnR5IHRvIGhvbGQgYWxsIHVzZXIgZGVmaW5lZCB2YWx1ZXNcbmJhc2UuX3ZhbHVlcyA9IHt9XG5cblxuXG4jIEluaXQgZnVuY3Rpb25cbiNcbmJhc2UuaW5pdCA9IC0+XG5cblx0aWYgaXNEZXNrdG9wKClcblxuXHRcdHVybFZhcnMgPSBnZXRVcmxWYXJzKClcblxuXHRcdGlmIHVybFZhcnMuZGV2aWNlVHlwZT9cblx0XHRcdEZyYW1lci5EZXZpY2UuZGV2aWNlVHlwZSA9IHVybFZhcnMuZGV2aWNlVHlwZVxuXG5cdFx0aWYgdXJsVmFycy5vcmllbnRhdGlvbj9cblx0XHRcdEZyYW1lci5EZXZpY2Uub3JpZW50YXRpb24gPSBwYXJzZUludCh1cmxWYXJzLm9yaWVudGF0aW9uKVxuXG5cblx0ZWxzZVxuXG5cdFx0RnJhbWVyLkRldmljZS5kZXZpY2VUeXBlID0gXCJmdWxsc2NyZWVuXCJcblxuXG5cblxuIyBDcmVhdGUgQWRhcHQgcHJveHlcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbiMgU3RvcmUgYWxsIGV4aXN0aW5nIHByb3BlcnR5IGtleXMgb2YgYmFzZSBvYmplY3QsIHRvIGNhdGNoIHRoZW0gaW4gdGhlIHNldHRlci5cbiMgRXhjZXB0IHRoZSBldmFsdWF0b3IgZnVuY3Rpb24sIGFzIHlvdSBtYXkgb3ZlcndyaXRlIGl0XG4jXG5yZWFkT25seVByb3BldGllcyA9IFtdXG5cbmZvciBrZXksIHZhbHVlIG9mIGJhc2Ugd2hlbiBrZXkgaXNudCBcImV2YWx1YXRvclwiXG5cdHJlYWRPbmx5UHJvcGV0aWVzLnB1c2gga2V5XG5cblxuXG4jIFByb3h5IGhhbmRsZXIgb2JqZWN0XG5cbmhhbmRsZXIgPVxuXHRcblx0c2V0OiAodGFyZ2V0LCBwcm9wLCB2YWx1ZSkgLT5cblxuXHRcdCMgVGhlIGV2YWx1YXRvciBpcyB0aGUgb25seSBleGlzdGluZyBwcm9wZXJ0eSB5b3UgY2FuIG92ZXJ3cml0ZVxuXHRcdGlmIHByb3AgaXMgXCJldmFsdWF0b3JcIlxuXG5cdFx0XHQjIC4uLmJ1dCBvbmx5IHdpdGggYW5vdGhlciBmdW5jdGlvblxuXHRcdFx0aWYgbm90IF8uaXNGdW5jdGlvbih2YWx1ZSlcblx0XHRcdFx0Y29uc29sZS5sb2cgXCJBZGFwdC5ldmFsdWF0b3IgaGFzIHRvIGJlIGEgZnVuY3Rpb25cIlxuXG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRhcmdldFtwcm9wXSA9IHZhbHVlXG5cblxuXHRcdCMgUmVhZC1vbmx5IHByb3BlcnRpZXNcblx0XHRlbHNlIGlmIHByb3AgaW4gcmVhZE9ubHlQcm9wZXRpZXNcblx0XHRcdGNvbnNvbGUubG9nIFwiQ2FuJ3Qgb3ZlcndyaXRlIEFkYXB0LlwiICsgcHJvcFxuXG5cdFx0ZWxzZVxuXG5cdFx0XHR0YXJnZXQuX3ZhbHVlc1twcm9wXSA9IHZhbHVlXG5cblx0XG5cdGdldDogKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIC0+XG5cdFx0XG5cdFx0aWYgdGFyZ2V0Ll92YWx1ZXM/W3Byb3BdXG5cblx0XHRcdHJldHVybiB0YXJnZXQuX3ZhbHVlc1twcm9wXVt0YXJnZXQuY2hlY2soKV0gb3IgdGFyZ2V0Ll92YWx1ZXNbcHJvcF1cblx0XHRcblx0XHRlbHNlXG5cdFx0XHRcblx0XHRcdHJldHVybiB0YXJnZXRbcHJvcF1cblxuXG5cbiMgQ3JlYXRlIHByb3h5XG5BZGFwdCA9IG5ldyBQcm94eShiYXNlLCBoYW5kbGVyKVxuXG5cblxuIyBJbml0aWFsaXplXG5BZGFwdC5pbml0KClcblxuXG5leHBvcnRzLkFkYXB0ID0gQWRhcHQiLCIhZnVuY3Rpb24oYSxuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZSxleHBvcnRzLG1vZHVsZSk6YS5Db3VudFVwPW4oKX0odGhpcyxmdW5jdGlvbihhLG4sdCl7dmFyIGU9ZnVuY3Rpb24oYSxuLHQsZSxpLHIpe2Z1bmN0aW9uIG8oYSl7dmFyIG4sdCxlLGkscixvLHM9YTwwO2lmKGE9TWF0aC5hYnMoYSkudG9GaXhlZChsLmRlY2ltYWxzKSxhKz1cIlwiLG49YS5zcGxpdChcIi5cIiksdD1uWzBdLGU9bi5sZW5ndGg+MT9sLm9wdGlvbnMuZGVjaW1hbCtuWzFdOlwiXCIsbC5vcHRpb25zLnVzZUdyb3VwaW5nKXtmb3IoaT1cIlwiLHI9MCxvPXQubGVuZ3RoO3I8bzsrK3IpMCE9PXImJnIlMz09PTAmJihpPWwub3B0aW9ucy5zZXBhcmF0b3IraSksaT10W28tci0xXStpO3Q9aX1yZXR1cm4gbC5vcHRpb25zLm51bWVyYWxzLmxlbmd0aCYmKHQ9dC5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBsLm9wdGlvbnMubnVtZXJhbHNbK2FdfSksZT1lLnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIGwub3B0aW9ucy5udW1lcmFsc1srYV19KSksKHM/XCItXCI6XCJcIikrbC5vcHRpb25zLnByZWZpeCt0K2UrbC5vcHRpb25zLnN1ZmZpeH1mdW5jdGlvbiBzKGEsbix0LGUpe3JldHVybiB0KigtTWF0aC5wb3coMiwtMTAqYS9lKSsxKSoxMDI0LzEwMjMrbn1mdW5jdGlvbiB1KGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYhaXNOYU4oYSl9dmFyIGw9dGhpcztpZihsLnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cIjEuOS4zXCJ9LGwub3B0aW9ucz17dXNlRWFzaW5nOiEwLHVzZUdyb3VwaW5nOiEwLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVhc2luZ0ZuOnMsZm9ybWF0dGluZ0ZuOm8scHJlZml4OlwiXCIsc3VmZml4OlwiXCIsbnVtZXJhbHM6W119LHImJlwib2JqZWN0XCI9PXR5cGVvZiByKWZvcih2YXIgbSBpbiBsLm9wdGlvbnMpci5oYXNPd25Qcm9wZXJ0eShtKSYmbnVsbCE9PXJbbV0mJihsLm9wdGlvbnNbbV09clttXSk7XCJcIj09PWwub3B0aW9ucy5zZXBhcmF0b3I/bC5vcHRpb25zLnVzZUdyb3VwaW5nPSExOmwub3B0aW9ucy5zZXBhcmF0b3I9XCJcIitsLm9wdGlvbnMuc2VwYXJhdG9yO2Zvcih2YXIgZD0wLGM9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLGY9MDtmPGMubGVuZ3RoJiYhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsrK2Ypd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT13aW5kb3dbY1tmXStcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9d2luZG93W2NbZl0rXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXXx8d2luZG93W2NbZl0rXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSxuKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxlPU1hdGgubWF4KDAsMTYtKHQtZCkpLGk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthKHQrZSl9LGUpO3JldHVybiBkPXQrZSxpfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChhKX0pLGwuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3JldHVybiEhbC5pbml0aWFsaXplZHx8KGwuZXJyb3I9XCJcIixsLmQ9XCJzdHJpbmdcIj09dHlwZW9mIGE/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk6YSxsLmQ/KGwuc3RhcnRWYWw9TnVtYmVyKG4pLGwuZW5kVmFsPU51bWJlcih0KSx1KGwuc3RhcnRWYWwpJiZ1KGwuZW5kVmFsKT8obC5kZWNpbWFscz1NYXRoLm1heCgwLGV8fDApLGwuZGVjPU1hdGgucG93KDEwLGwuZGVjaW1hbHMpLGwuZHVyYXRpb249MWUzKk51bWJlcihpKXx8MmUzLGwuY291bnREb3duPWwuc3RhcnRWYWw+bC5lbmRWYWwsbC5mcmFtZVZhbD1sLnN0YXJ0VmFsLGwuaW5pdGlhbGl6ZWQ9ITAsITApOihsLmVycm9yPVwiW0NvdW50VXBdIHN0YXJ0VmFsIChcIituK1wiKSBvciBlbmRWYWwgKFwiK3QrXCIpIGlzIG5vdCBhIG51bWJlclwiLCExKSk6KGwuZXJyb3I9XCJbQ291bnRVcF0gdGFyZ2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkXCIsITEpKX0sbC5wcmludFZhbHVlPWZ1bmN0aW9uKGEpe3ZhciBuPWwub3B0aW9ucy5mb3JtYXR0aW5nRm4oYSk7XCJJTlBVVFwiPT09bC5kLnRhZ05hbWU/dGhpcy5kLnZhbHVlPW46XCJ0ZXh0XCI9PT1sLmQudGFnTmFtZXx8XCJ0c3BhblwiPT09bC5kLnRhZ05hbWU/dGhpcy5kLnRleHRDb250ZW50PW46dGhpcy5kLmlubmVySFRNTD1ufSxsLmNvdW50PWZ1bmN0aW9uKGEpe2wuc3RhcnRUaW1lfHwobC5zdGFydFRpbWU9YSksbC50aW1lc3RhbXA9YTt2YXIgbj1hLWwuc3RhcnRUaW1lO2wucmVtYWluaW5nPWwuZHVyYXRpb24tbixsLm9wdGlvbnMudXNlRWFzaW5nP2wuY291bnREb3duP2wuZnJhbWVWYWw9bC5zdGFydFZhbC1sLm9wdGlvbnMuZWFzaW5nRm4obiwwLGwuc3RhcnRWYWwtbC5lbmRWYWwsbC5kdXJhdGlvbik6bC5mcmFtZVZhbD1sLm9wdGlvbnMuZWFzaW5nRm4obixsLnN0YXJ0VmFsLGwuZW5kVmFsLWwuc3RhcnRWYWwsbC5kdXJhdGlvbik6bC5jb3VudERvd24/bC5mcmFtZVZhbD1sLnN0YXJ0VmFsLShsLnN0YXJ0VmFsLWwuZW5kVmFsKSoobi9sLmR1cmF0aW9uKTpsLmZyYW1lVmFsPWwuc3RhcnRWYWwrKGwuZW5kVmFsLWwuc3RhcnRWYWwpKihuL2wuZHVyYXRpb24pLGwuY291bnREb3duP2wuZnJhbWVWYWw9bC5mcmFtZVZhbDxsLmVuZFZhbD9sLmVuZFZhbDpsLmZyYW1lVmFsOmwuZnJhbWVWYWw9bC5mcmFtZVZhbD5sLmVuZFZhbD9sLmVuZFZhbDpsLmZyYW1lVmFsLGwuZnJhbWVWYWw9TWF0aC5yb3VuZChsLmZyYW1lVmFsKmwuZGVjKS9sLmRlYyxsLnByaW50VmFsdWUobC5mcmFtZVZhbCksbjxsLmR1cmF0aW9uP2wuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZShsLmNvdW50KTpsLmNhbGxiYWNrJiZsLmNhbGxiYWNrKCl9LGwuc3RhcnQ9ZnVuY3Rpb24oYSl7bC5pbml0aWFsaXplKCkmJihsLmNhbGxiYWNrPWEsbC5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGwuY291bnQpKX0sbC5wYXVzZVJlc3VtZT1mdW5jdGlvbigpe2wucGF1c2VkPyhsLnBhdXNlZD0hMSxkZWxldGUgbC5zdGFydFRpbWUsbC5kdXJhdGlvbj1sLnJlbWFpbmluZyxsLnN0YXJ0VmFsPWwuZnJhbWVWYWwscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGwuY291bnQpKToobC5wYXVzZWQ9ITAsY2FuY2VsQW5pbWF0aW9uRnJhbWUobC5yQUYpKX0sbC5yZXNldD1mdW5jdGlvbigpe2wucGF1c2VkPSExLGRlbGV0ZSBsLnN0YXJ0VGltZSxsLmluaXRpYWxpemVkPSExLGwuaW5pdGlhbGl6ZSgpJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUobC5yQUYpLGwucHJpbnRWYWx1ZShsLnN0YXJ0VmFsKSl9LGwudXBkYXRlPWZ1bmN0aW9uKGEpe2lmKGwuaW5pdGlhbGl6ZSgpKXtpZihhPU51bWJlcihhKSwhdShhKSlyZXR1cm4gdm9pZChsLmVycm9yPVwiW0NvdW50VXBdIHVwZGF0ZSgpIC0gbmV3IGVuZFZhbCBpcyBub3QgYSBudW1iZXI6IFwiK2EpO2wuZXJyb3I9XCJcIixhIT09bC5mcmFtZVZhbCYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKGwuckFGKSxsLnBhdXNlZD0hMSxkZWxldGUgbC5zdGFydFRpbWUsbC5zdGFydFZhbD1sLmZyYW1lVmFsLGwuZW5kVmFsPWEsbC5jb3VudERvd249bC5zdGFydFZhbD5sLmVuZFZhbCxsLnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobC5jb3VudCkpfX0sbC5pbml0aWFsaXplKCkmJmwucHJpbnRWYWx1ZShsLnN0YXJ0VmFsKX07cmV0dXJuIGV9KTsiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQWVBQTtBREFBOztBRElBLElBQUEsNkdBQUE7RUFBQTs7QUFBQSxVQUFBLEdBQWEsU0FBQTtBQUVaLE1BQUE7RUFBQSxJQUFBLEdBQU87RUFFUCxLQUFBLEdBQVEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBckIsQ0FBNkIseUJBQTdCLEVBQXdELFNBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxLQUFUO1dBQy9ELElBQUssQ0FBQSxHQUFBLENBQUwsR0FBWTtFQURtRCxDQUF4RDtBQUdSLFNBQU87QUFQSzs7QUFXYixhQUFBLEdBQWdCLFNBQUMsR0FBRDtBQUVmLE1BQUE7RUFBQSxNQUFBLEdBQVM7QUFFVCxPQUFBLFVBQUE7O0lBQ0MsTUFBQSxJQUFVLEdBQUEsR0FBTSxHQUFOLEdBQVksS0FBWixHQUFvQjtBQUQvQjtFQUdBLE1BQUEsR0FBUyxNQUFNLENBQUMsS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBQyxDQUFqQjtBQUVULFNBQU87QUFUUTs7QUFhaEIsVUFBQSxHQUFhLFNBQUMsS0FBRCxFQUFRLEtBQVI7QUFFWixNQUFBOztJQUZvQixRQUFROztFQUU1QixHQUFBLEdBQU0sUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7RUFDTixHQUFHLENBQUMsWUFBSixD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

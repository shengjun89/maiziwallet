require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});
},{}],"AnnounceBar":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.AnnounceBar = (function(superClass) {
  extend(AnnounceBar, superClass);

  function AnnounceBar(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      width: Screen.width,
      height: 80
    });
    this.annouceTitle = new TextLayer({
      x: 56,
      height: 80,
      padding: 24,
      backgroundColor: "null",
      text: "Wheat wallet goddess festival activity...",
      fontSize: 24,
      color: "#2D2929",
      fontWeight: 400,
      textAlign: "center"
    });
    this.annouceButton = new TextLayer({
      width: 80,
      height: 80,
      x: Align.right(-16),
      fontSize: 24,
      lineHeight: 3.2,
      color: "#9e9e9e",
      text: "more",
      textAlign: "center",
      backgroundColor: "#FFF"
    });
    this.annouceIcon = new Layer({
      width: 40,
      height: 40,
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
  extend(Button, superClass);

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
    this.options.width = 240;
    this.options.height = 80;
    if (this.options.disabled === true) {
      this.options.backgroundColor = "#bdbdbd";
    }
    this.label = new TextLayer({
      fontSize: 28,
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
  extend(IconsNavBar, superClass);

  function IconsNavBar(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      height: 160
    });
    this.navIconPic = new Layer({
      width: 64,
      height: 64,
      backgroundColor: "null",
      image: "images/nav_icon01.svg",
      backgroundColor: "#F5F5F5"
    });
    this.navIconName = new TextLayer({
      height: 40,
      fontSize: 24,
      color: "#2D2929",
      text: "iconname",
      textAlign: "center"
    });
    IconsNavBar.__super__.constructor.call(this, this.options);
    this.navIconPic.parent = this;
    this.navIconPic.x = Align.center;
    this.navIconPic.y = 32;
    this.navIconName.parent = this;
    this.navIconName.y = 112;
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
  extend(ListWithIcon, superClass);

  function ListWithIcon(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      height: 96,
      width: Screen.width
    });
    this.list_name = new TextLayer({
      width: 328,
      height: 96,
      lineHeight: 3.4,
      fontSize: 28,
      fontFamily: "PingFang SC",
      fontWeight: 400,
      letterSpacing: 0.0,
      textAlign: "left",
      color: "rgba(32,32,32,1)"
    });
    this.list_icon = new Layer({
      width: 40,
      height: 40,
      backgroundColor: null,
      image: ""
    });
    this.list_arrow = new Layer({
      width: 9.5,
      height: 19,
      backgroundColor: null,
      image: "images/account/arrow.svg"
    });
    ListWithIcon.__super__.constructor.call(this, this.options);
    this.list_name.parent = this;
    this.list_name.y = Align.center;
    this.list_name.x = 120;
    this.list_icon.parent = this;
    this.list_icon.y = 28;
    this.list_icon.x = 44;
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
  extend(LoanCard, superClass);

  function LoanCard(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      width: Screen.width - 64,
      backgroundColor: "#FFF",
      height: 288,
      x: Align.center
    });
    this.loanCardTitle = new TextLayer({
      x: 32,
      y: 40,
      fontSize: 32,
      fontFamily: "PingFang TC",
      color: "#212121",
      fontWeight: 500,
      lineHeight: 1,
      textAlign: "left",
      text: "加载卡片名称..."
    });
    this.loanCardSubtitle = new TextLayer({
      x: 32,
      fontSize: 24,
      fontFamily: "PingFang TC",
      fontWeight: 400,
      color: "rgba(171,162,165,1)",
      text: "加载卡片描述...",
      textAlign: "left"
    });
    this.loanCardhan01 = new TextLayer({
      x: 32,
      text: "额度范围(元)",
      fontSize: 22,
      fontFamily: "PingFang TC",
      fontWeight: 400,
      color: "rgba(171,162,165,1)",
      textAlign: "left"
    });
    this.loanCardhan02 = new TextLayer({
      text: "分期范围(期)",
      fontSize: 22,
      fontFamily: "PingFang TC",
      fontWeight: 400,
      color: "rgba(171,162,165,1)",
      textAlign: "right"
    });
    this.loanCardLimit = new TextLayer({
      x: 32,
      text: "--",
      fontSize: 40,
      fontFamily: "PingFang TC",
      fontWeight: 500,
      color: "rgba(227,69,61,1)",
      textAlign: "left"
    });
    this.loanCardMon = new TextLayer({
      width: 200,
      text: "--",
      fontSize: 32,
      fontFamily: "PingFang TC",
      fontWeight: 500,
      color: "rgba(33,33,33,1)",
      textAlign: "right"
    });
    this.loanCardIcon = new Layer({
      width: 192,
      height: 192,
      backgroundColor: null
    });
    LoanCard.__super__.constructor.call(this, this.options);
    this.loanCardTitle.parent = this;
    this.loanCardTitle.y = 40;
    this.loanCardSubtitle.parent = this;
    this.loanCardSubtitle.y = this.loanCardTitle.y + 56;
    this.loanCardhan01.parent = this;
    this.loanCardhan01.y = 232;
    this.loanCardhan02.parent = this;
    this.loanCardhan02.x = Align.right(-32);
    this.loanCardhan02.y = this.loanCardhan01.y;
    this.loanCardLimit.parent = this;
    this.loanCardLimit.y = this.loanCardSubtitle.y + 72;
    this.loanCardMon.parent = this;
    this.loanCardMon.y = this.loanCardSubtitle.y + 72;
    this.loanCardMon.x = Align.right(-32);
    this.loanCardIcon.parent = this;
    this.loanCardIcon.y = -24;
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
  extend(ProductList, superClass);

  function ProductList(options) {
    this.options = options != null ? options : {};
    this.TouchMove = bind(this.TouchMove, this);
    this.TouchEnd = bind(this.TouchEnd, this);
    this.TouchStart = bind(this.TouchStart, this);
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      height: 380,
      width: 328
    });
    this.productPic = new Layer({
      width: 328,
      height: 244,
      backgroundColor: "#F5F5F5",
      image: "images/dailybestpic01.png"
    });
    this.productName = new TextLayer({
      width: 328,
      height: 32,
      fontSize: 28,
      color: "#212121",
      text: "productNameHere",
      textAlign: "left"
    });
    this.productSub = new TextLayer({
      width: 328,
      height: 24,
      fontSize: 24,
      color: "#616161",
      text: "productsubtitlehere",
      textAlign: "left"
    });
    this.productPrice = new TextLayer({
      width: 328,
      height: 40,
      fontSize: 36,
      color: "#E3453D",
      text: "¥0.00",
      textAlign: "left"
    });
    ProductList.__super__.constructor.call(this, this.options);
    this.productPic.parent = this;
    this.productPic.y = 0;
    this.productName.parent = this;
    this.productName.y = 252;
    this.productSub.parent = this;
    this.productSub.y = this.productName.height + this.productName.y + 8;
    this.productPrice.parent = this;
    this.productPrice.y = this.productSub.y + this.productSub.height + 8;
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
  extend(StatusBar, superClass);

  function StatusBar(options) {
    var backgroundBlur;
    this.options = options != null ? options : {};
    _.defaults(this.options, {
      backgroundColor: "#FFF",
      width: Screen.width,
      height: 88,
      opacity: 0.96,
      image: "images/statusbarblack.png",
      z: 4
    }, backgroundBlur = 40);
    this.topbar = new Layer({
      width: Screen.width,
      height: 88,
      backgroundColor: "#FFF"
    });
    this.pageTitle = new TextLayer({
      fontSize: 34,
      fontWeight: 800,
      color: "#2D2929",
      backgroundColor: null,
      textAlign: "center",
      x: Align.center,
      width: Screen.width
    });
    this.topbarRightIcon01 = new Layer({
      width: 40,
      height: 40,
      backgroundColor: null,
      x: Align.right(-16),
      image: "images/nav_icon_mess@2x.svg"
    });
    this.topbarLeftIcon01 = new Layer({
      width: 40,
      height: 40,
      backgroundColor: null,
      x: Align.left(16),
      image: "images/nav_icon_back@2x.svg"
    });
    StatusBar.__super__.constructor.call(this, this.options);
    this.topbar.parent = this;
    this.topbar.y = 88;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL3ZpZGVvY2FyZHMvdmlkZW9jYXJkLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL25wbS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9pbWFnZWZpbGwvaW1hZ2VGaWxsLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL2Nhcm91c2VsY29tcG9uZW50L0Nhcm91c2VsQ29tcG9uZW50LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL2JpZGlyZWN0aW9uYWwtY3ljbGUvVXRpbHNjeWNsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9TdGF0dXNCYXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvYWQvRGVza3RvcC9mcmFtZXIvbWFpeml3YWxsZXQuZnJhbWVyL21vZHVsZXMvUHJvZHVjdExpc3QuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvYWQvRGVza3RvcC9mcmFtZXIvbWFpeml3YWxsZXQuZnJhbWVyL21vZHVsZXMvTG9hbkNhcmQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvYWQvRGVza3RvcC9mcmFtZXIvbWFpeml3YWxsZXQuZnJhbWVyL21vZHVsZXMvTGlzdFdpdGhJY29uLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL0ljb25zTmF2QmFyLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2FkL0Rlc2t0b3AvZnJhbWVyL21haXppd2FsbGV0LmZyYW1lci9tb2R1bGVzL0J1dHRvbi5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvbW9kdWxlcy9Bbm5vdW5jZUJhci5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9hZC9EZXNrdG9wL2ZyYW1lci9tYWl6aXdhbGxldC5mcmFtZXIvY291bnR1cC5qcy9kaXN0L2NvdW50VXAubWluLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcblZpZGVvIGNhcmQgbW9kdWxlc1xuLVxuRmlsZW5hbWU6IHZpZGVvY2FyZC5jb2ZmZWVcbi1cbkF1dGhvcjogSHVnbyBNYWdhbGjDo2VzXG5WZXJzaW9uOiAxLjBcblVwZGF0ZWQ6IDI4LU1hcmNoLTIwMThcbiMjI1xuXG5cbiMjIyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAxIHx8IEdMT0JBTCBWQVJJQUJMRVMgfHxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICMjI1xuXG4jIyNcbuKGsyBHbG9iYWwgdmFyaWFibGVzIHN0cnVjdHVyZTpcblx0YS4gQ29sb3IgcGFsZXR0ZVxuXHRiLiBUeXBvZ3JhcGhpYyBzZXR0aW5nc1xuICBjLkNhcmQgc2l6ZXMgKFNtYWxsLCBNZWRpdW0gYW5kIExhcmdlKVxuIyMjXG5cblxuIy0tPiBDb2xvciBQYWxldHRlXG5jb2xvcl9ncmV5ID0gXCIjOTc5Nzk3XCJcbmNvbG9yX2JsYWNrID0gXCIjMDAwMDAwXCJcbm92ZXJsYXlfb3BhY2l0eSA9IFwicmdiYSgwLDAsMCwwLjQpXCJcblxuXG4jLS0+IFR5cG9ncmFwaGljIHNldHRpbmdzXG5SZXRpbmFGb250ID0gXCJyZXRpbmFcIlxuUmV0aW5hRm9udF9Cb2xkID0gNzAwXG5SZXRpbmFGb250X01lZGl1bSA9IDUwMFxuUmV0aW5hRm9udF9SZWd1bGFyID0gMTAwXG5cblxuIyMjIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6XG4gICAgVklERU8gQ0FSRCBTSVpFU1xuICAgICogKFNtYWxsLCBNZWRpdW0gYW5kIExhcmdlKVxuOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjogIyMjXG5cbiMtLT4gU21hbGwgY2FyZCBzaXplXG5TbWFsbENhcmRXaWR0aCA9IDIxNlxuU21hbGxDYXJkSGVpZ2h0ID0gMjE2XG5TbWFsbENhcmRQbGF5QnV0dG9uID0gNTBcblxuU21hbGxDYXJkVGV4dFBhZGRpbmcgPSBbMTAsIDE2LCAxMV0gIyBQYWRkaW5nIC0+IChUb3AsIFJpZ2h0L0xlZnQsIEJvdHRvbSlcblNtYWxsQ2FyZFRleHRfc291cmNlID0gMTAgIyBUZXh0IChGb250LXNpemUsIExpbmUtSGVpZ2h0KVxuU21hbGxDYXJkVGV4dF9oZWFkZXIgPSBbMTMsIDEuNV1cblxuXG4jLS0+IE1lZGl1bSBjYXJkIHNpemVcbk1lZGl1bUNhcmRXaWR0aCA9IDI5NlxuTWVkaXVtQ2FyZEhlaWdodCA9IDI4NFxuTWVkaXVtQ2FyZFBsYXlCdXR0b24gPSA3MFxuXG5NZWRpdW1DYXJkVGV4dFBhZGRpbmcgPSBbMTYsIDE2LCAxNl1cbk1lZGl1bUNhcmRUZXh0X3NvdXJjZSA9IDEyXG5NZWRpdW1DYXJkVGV4dF9oZWFkZXIgPSBbMTYsIDEuNF1cblxuXG4jLS0+IExhcmdlIGNhcmQgc2l6ZVxuTGFyZ2VDYXJkV2lkdGggPSA0NTZcbkxhcmdlQ2FyZEhlaWdodCA9IDQwOFxuTGFyZ2VDYXJkUGxheUJ1dHRvbiA9IDkwXG5cbkxhcmdlQ2FyZFRleHRQYWRkaW5nID0gWzE2LCAxNiwgMTZdXG5MYXJnZUNhcmRUZXh0X3NvdXJjZSA9IDEzXG5MYXJnZUNhcmRUZXh0X2hlYWRlciA9IFsyMiwgMS41XVxuXG5MYXJnZUNhcmRUZXN0ID0gMTAwXG5cblxuIy0tPiBBdXRvbWF0aWNhbGx5IGFzc2lnbnMgYSBoZWlnaHQgYmFzZWQgb24gYSBBc3BlY3RSYXRpbyBvZiBhIGNvbXBvbmVudFxuQXNwZWN0UmF0aW8gPSAodmFsdWUpIC0+XG4gIE1hdGguY2VpbCggKHZhbHVlIC8gMTYpICogOSApXG5cblxuIyMjICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIDIgfHwgVklERU9DQVJEIENMQVNTIHx8XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAjIyNcblxuY2xhc3MgVmlkZW9DYXJkIGV4dGVuZHMgTGF5ZXJcbiAgICBjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cbiAgICAgICMtLT4gSW1tdXRhYmxlIGRlZmF1bHRzXG4gICAgICBAb3B0aW9ucy5zaGFkb3dZID0gMlxuICAgICAgQG9wdGlvbnMuc2hhZG93Qmx1ciA9IDRcbiAgICAgIEBvcHRpb25zLnNoYWRvd0NvbG9yID0gXCJyZ2JhKDAsMCwwLDAuMSlcIlxuICAgICAgQG9wdGlvbnMuYm9yZGVyUmFkaXVzID0gNFxuICAgICAgQG9wdGlvbnMuY2xpcCA9IHRydWVcblxuICAgICAgIy0tPiBDdXN0b20gZGVmYXVsdHNcbiAgICAgIF8uZGVmYXVsdHMgQG9wdGlvbnMsXG4gICAgICAgIHdpZHRoOiBTbWFsbENhcmRXaWR0aFxuICAgICAgICBoZWlnaHQ6IFNtYWxsQ2FyZEhlaWdodFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIlxuICAgICAgICBmb3JtYXQ6IFwic21hbGxcIlxuXG4gICAgICAjIyMgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgICBVSSBDT01QT05FTlRTIENSRUFUSU9OXG4gICAgICAgICAgKiBDcmVhdGVzIHRoZSBVSSBjb21wb25lbnRzIHdpdGhpbiB0aGUgY2xhc3NcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6ICMjI1xuXG4gICAgICAjIyNcbiAgICAgIOKGsyBHbG9iYWwgdmFyaWFibGVzIHN0cnVjdHVyZTpcbiAgICBcdCAgIGEuIFRodW1ibmFpbFxuICAgICAgICAgICAgLSBWaWRlb1xuICAgICAgICAgICAgLSBPdmVybGF5XG4gICAgICAgICAgICAtIFBsYXkgYnV0dG9uXG4gICAgICAgICAgICAtIFRpbWVzdGFtcFxuICAgICAgICAgICAgLSBXYXRjaCBsYXRlclxuICAgIFx0ICAgIGIuIExhYmVsXG4gICAgICAgICAgICAtIFNvdXJjZVxuICAgICAgICAgICAgLSBoZWFkZXJcbiAgICAgICAgIyMjXG5cbiAgICAgIEB0aHVtYm5haWwgPSBuZXcgTGF5ZXJcbiAgICAgICAgbmFtZTogXCJ0aHVtYm5haWxcIlxuICAgICAgICBjbGlwOiB0cnVlXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cbiAgICAgIEB2aWRlbyA9IG5ldyBWaWRlb0xheWVyXG4gICAgICAgIG5hbWU6IFwidmlkZW9cIlxuICAgICAgICB2aWRlbzogXCJodHRwOi8vaHVnb21hZ2FsaGFlcy5kZXNpZ24vZnJhbWVyL3ZpZGVvcy9uZXltYXJfaW5HYW1lLm1wNFwiXG4gICAgICBAdmlkZW8ucGxheWVyLm11dGVkID0gdHJ1ZVxuXG4gICAgICBAb3ZlcmxheSA9IG5ldyBMYXllclxuICAgICAgICBuYW1lOiBcIm92ZXJsYXlcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXG4gICAgICBAcGxheUJ1dHRvbiA9IG5ldyBMYXllclxuICAgICAgICBuYW1lOiBcInBsYXlCdXR0b25cIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICAgICAgICBpbWFnZTogXCJodHRwOi8vaHVnb21hZ2FsaGFlcy5kZXNpZ24vZnJhbWVyL2ltYWdlcy9wbGF5QnV0dG9uX2xvYWRlci5naWZcIlxuICAgICAgICBvcGFjaXR5OiAwXG5cbiAgICAgIEB0aW1lc3RhbXAgPSBuZXcgVGV4dExheWVyXG4gICAgICAgIG5hbWU6IFwidGltZXN0YW1wXCJcbiAgICAgICAgdGV4dDogQG9wdGlvbnMudGltZXN0YW1wIHx8IFwiMDowOFwiXG5cbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC45KVwiXG4gICAgICAgIGJvcmRlclJhZGl1czogMlxuICAgICAgICBwYWRkaW5nOiA1XG5cbiAgICAgICAgZm9udEZhbWlseTogUmV0aW5hRm9udFxuICAgICAgICBmb250V2VpZ2h0OiBSZXRpbmFGb250X01lZGl1bVxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiXG5cbiAgICAgIEB3YXRjaExhdGVyID0gbmV3IFNWR0xheWVyXG4gICAgICBcdHN2ZzpcbiAgICAgICAgXCJcIlwiXG4gICAgICBcdDxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgXHQgIDxwYXRoXG4gICAgICBcdCAgZD1cIk04LDE0LjcxODEwMDkgTDgsMTYgQzMuNTg4MTQ2MzQsMTYgMCwxMi40MTE4NTM3IDAsOCBDMCwzLjU4ODE0NjM0IDMuNTg4MTQ2MzQsMCA4LDAgQzEyLjQxMTg1MzcsMCAxNiwzLjU4ODE0NjM0IDE2LDggQzE2LDEyLjQxMTg1MzcgMTIuNDExODUzNywxNiA4LDE2IEw4LDE0LjcxODEwMDkgQzExLjcwMzg4MDMsMTQuNzE4MTAwOSAxNC43MTgxMDA5LDExLjcwMzg4MDMgMTQuNzE4MTAwOSw4IEMxNC43MTgxMDA5LDQuMjk2MTE5NjcgMTEuNzAzODgwMywxLjI4MTg5OTExIDgsMS4yODE4OTkxMSBDNC4yOTYxMTk2NywxLjI4MTg5OTExIDEuMjgxODk5MTEsNC4yOTYxMTk2NyAxLjI4MTg5OTExLDggQzEuMjgxODk5MTEsMTEuNzAzODgwMyA0LjI5NjExOTY3LDE0LjcxODEwMDkgOCwxNC43MTgxMDA5IFogTTguMjcwNTg4MjQsNy42MzgyMDA5MSBMMTEuMTE4MzEwNCw5Ljc5MDM0NjYyIEwxMC4zNTIyMzY5LDEwLjgwNDAxNjEgTDcuMDMzMjk3ODcsOC4yOTU3NTE2MyBMNyw4LjI5NTc1MTYzIEw3LDQgTDguMjcwNTg4MjQsNCBMOC4yNzA1ODgyNCw3LjYzODIwMDkxXCI+XG4gICAgICAgICAgPC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgXCJcIlwiXG4gICAgICBcdGZpbGw6IFwid2hpdGVcIlxuXG4gICAgICBAbGFiZWwgPSBuZXcgTGF5ZXJcbiAgICAgICAgbmFtZTogXCJsYWJlbFwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cbiAgICAgIEBsYWJlbElubmVyID0gbmV3IExheWVyXG4gICAgICAgIG5hbWU6IFwibGFiZWxJbm5lclwiXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cbiAgICAgIEBzb3VyY2UgPSBuZXcgVGV4dExheWVyXG4gICAgICAgIG5hbWU6IFwic291cmNlXCJcbiAgICAgICAgdGV4dDogQG9wdGlvbnMuc291cmNlIHx8IFwiU291cmNlXCJcblxuICAgICAgICBmb250RmFtaWx5OiBSZXRpbmFGb250XG4gICAgICAgIGZvbnRXZWlnaHQ6IFJldGluYUZvbnRfQm9sZFxuICAgICAgICBsaW5lSGVpZ2h0OiAxXG4gICAgICAgIGxldHRlclNwYWNpbmc6IC41XG4gICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJcbiAgICAgICAgY29sb3I6IGNvbG9yX2dyZXlcblxuICAgICAgQGhlYWRlciA9IG5ldyBUZXh0TGF5ZXJcbiAgICAgICAgbmFtZTogXCJoZWFkZXJcIlxuICAgICAgICB0ZXh0OiBAb3B0aW9ucy5oZWFkZXIgfHwgXCJWaWRlbyBoZWFkZXJcIlxuXG4gICAgICAgIGZvbnRGYW1pbHk6IFJldGluYUZvbnRcbiAgICAgICAgZm9udFdlaWdodDogUmV0aW5hRm9udF9NZWRpdW1cbiAgICAgICAgY29sb3I6IGNvbG9yX2JsYWNrXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNVxuXG4gICAgICAjIEluaXRpYXRlcyBjb21wb25lbnRcbiAgICAgIHN1cGVyIEBvcHRpb25zXG5cblxuICAgICAgIy0tPiBBbmltYXRpb24gZGVmYXVsdHNcbiAgICAgIEBhbmltYXRpb25PcHRpb25zID1cbiAgICAgICAgY3VydmU6IFwiYmV6aWVyLWN1cnZlXCJcbiAgICAgICAgY3VydmVPcHRpb25zOiBbMC42NSwgMCwgMS4zNSwgMS41XVxuICAgICAgICB0aW1lOiAuNVxuXG4gICAgICAjIyMgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgICBDT01QT05FTlRTIFNQRUNJRklDQVRJT05cbiAgICAgICAgICAqIEFmdGVyIHRoZSBjb21wb25lbnRzIGFyZSBjcmVhdGVkLCBpdCBhc3NpZ25zIHRoZW0gYSBwYXJ0aWN1bGFyIGFuIGhpZXJhcmNoaWNhbCBzdHJ1Y3R1cmUgYW5kIGEgc2V0IG9mIHN0eWxlc1xuICAgICAgICAgICogRGVmYXVsdCBzaXplOiBTbWFsbFxuICAgICAgICAgICogTWVkaXVtIGFuZCBsYXJnZSBzaXplcyBhcmUgZGVmaW5lZCB3aXRoaW4gYSBjb25kaXRpb25hbCBzdGF0ZW1lbnRcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6ICMjI1xuXG4gICAgICAjLS0+IFRodW1ibmFpbCB8IFNtYWxsXG4gICAgICBAdGh1bWJuYWlsLnBhcmVudCA9IEBcbiAgICAgIEB0aHVtYm5haWwud2lkdGggPSBAd2lkdGhcbiAgICAgIEB0aHVtYm5haWwuaGVpZ2h0ID0gQXNwZWN0UmF0aW8oQHdpZHRoKVxuICAgICAgQHRodW1ibmFpbC5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JleVwiXG5cbiAgICAgICMtLT4gVmlkZW8gfCBTbWFsbFxuICAgICAgQHZpZGVvLnBhcmVudCA9IEAudGh1bWJuYWlsXG4gICAgICBAdmlkZW8ud2lkdGggPSBALnRodW1ibmFpbC53aWR0aFxuICAgICAgQHZpZGVvLnkgPSAtMzhcblxuICAgICAgIy0tPiBPdmVybGF5IHwgU21hbGxcbiAgICAgIEBvdmVybGF5LnBhcmVudCA9IEAudGh1bWJuYWlsXG4gICAgICBAb3ZlcmxheS53aWR0aCA9IEAudGh1bWJuYWlsLndpZHRoXG4gICAgICBAb3ZlcmxheS5oZWlnaHQgPSBALnRodW1ibmFpbC5oZWlnaHRcblxuICAgICAgIy0tPiBQbGF5IEJ1dHRvbiB8IFNtYWxsXG4gICAgICBAcGxheUJ1dHRvbi5wYXJlbnQgPSBALnRodW1ibmFpbFxuICAgICAgQHBsYXlCdXR0b24uc2l6ZSA9IFNtYWxsQ2FyZFBsYXlCdXR0b25cbiAgICAgIEBwbGF5QnV0dG9uLnBvaW50ID0gQWxpZ24uY2VudGVyXG5cbiAgICAgICMtLT4gVGltZXN0YW1wIHwgU21hbGxcbiAgICAgIEB0aW1lc3RhbXAucGFyZW50ID0gQC50aHVtYm5haWxcbiAgICAgIEB0aW1lc3RhbXAuZm9udFNpemUgPSAxMFxuICAgICAgQHRpbWVzdGFtcC54ID0gQWxpZ24ucmlnaHQoLTgpXG4gICAgICBAdGltZXN0YW1wLnkgPSBBbGlnbi5ib3R0b20oLTgpXG5cbiAgICAgICMtLT4gV2F0Y2ggbGF0ZXIgfCBTbWFsbFxuICAgICAgQHdhdGNoTGF0ZXIucGFyZW50ID0gQC50aHVtYm5haWxcbiAgICAgIEB3YXRjaExhdGVyLnNpemUgPSAxNlxuICAgICAgQHdhdGNoTGF0ZXIueCA9IEFsaWduLnJpZ2h0KC04KVxuICAgICAgQHdhdGNoTGF0ZXIueSA9IDhcbiAgICAgIEB3YXRjaExhdGVyLm9wYWNpdHkgPSAwXG5cbiAgICAgICMtLT4gTGFiZWwgfCBTbWFsbFxuICAgICAgQGxhYmVsLnBhcmVudCA9IEBcbiAgICAgIEBsYWJlbC53aWR0aCA9IEB3aWR0aFxuICAgICAgQGxhYmVsLmhlaWdodCA9IEBoZWlnaHQgLSBALnRodW1ibmFpbC5oZWlnaHRcbiAgICAgIEBsYWJlbC55ID0gQWxpZ24uYm90dG9tXG5cbiAgICAgICMtLT4gTGFiZWxJbm5lciB8IFNtYWxsXG4gICAgICBAbGFiZWxJbm5lci5wYXJlbnQgPSBALmxhYmVsXG4gICAgICBAbGFiZWxJbm5lci53aWR0aCA9IEAubGFiZWwud2lkdGggLSAoU21hbGxDYXJkVGV4dFBhZGRpbmdbMV0gKiAyKVxuICAgICAgQGxhYmVsSW5uZXIuaGVpZ2h0ID0gQC5sYWJlbC5oZWlnaHQgLSAoU21hbGxDYXJkVGV4dFBhZGRpbmdbMF0gKyBTbWFsbENhcmRUZXh0UGFkZGluZ1syXSlcbiAgICAgIEBsYWJlbElubmVyLnBvaW50ID0gQWxpZ24uY2VudGVyXG5cbiAgICAgICMgVW5jb21tZW50IGxpbmUgdG8gc2VlIHRoZSBsYWJlbCBpbm5lciBwYWRkaW5nXG4gICAgICAjIEBsYWJlbElubmVyLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSg0MywxMTQsMjU1LC4yNSlcIlxuXG4gICAgICAjLS0+IFNvdXJjZSB8IFNtYWxsXG4gICAgICBAc291cmNlLnBhcmVudCA9IEAubGFiZWxJbm5lclxuICAgICAgQHNvdXJjZS5mb250U2l6ZSA9IFNtYWxsQ2FyZFRleHRfc291cmNlXG4gICAgICBAc291cmNlLndpZHRoID0gQC5sYWJlbElubmVyLndpZHRoXG5cbiAgICAgICMtLT4gSGVhZGVyIHwgU21hbGxcbiAgICAgIEBoZWFkZXIucGFyZW50ID0gQC5sYWJlbElubmVyXG4gICAgICBAaGVhZGVyLmZvbnRTaXplID0gU21hbGxDYXJkVGV4dF9oZWFkZXJbMF1cbiAgICAgIEBoZWFkZXIud2lkdGggPSBALmxhYmVsSW5uZXIud2lkdGhcbiAgICAgIEBoZWFkZXIueSA9IEAuc291cmNlLm1heFlcbiAgICAgIEBoZWFkZXIuaGVpZ2h0ID0gQC5sYWJlbElubmVyLmhlaWdodCAtIEAuc291cmNlLmhlaWdodFxuICAgICAgQGhlYWRlci5wYWRkaW5nID1cbiAgICAgICAgdG9wOiA0XG4gICAgICBAaGVhZGVyLnRleHRPdmVyZmxvdyA9IFwiZWxsaXBzaXNcIlxuXG4gICAgICAjIyMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICB8fHwtLT4gTWVkaXVtIHZpZGVvIGNhcmQgPC0tfHx8fFxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAjIyNcbiAgICAgIGlmIEBvcHRpb25zLmZvcm1hdCBpcyBcIm1lZGl1bVwiXG4gICAgICAgIEAud2lkdGggPSBNZWRpdW1DYXJkV2lkdGhcbiAgICAgICAgQC5oZWlnaHQgPSBNZWRpdW1DYXJkSGVpZ2h0XG5cbiAgICAgICAgIy0tPiBUaHVtYm5haWwgfCBNZWRpdW1cbiAgICAgICAgQC50aHVtYm5haWwud2lkdGggPSBNZWRpdW1DYXJkV2lkdGhcbiAgICAgICAgQC50aHVtYm5haWwuaGVpZ2h0ID0gQXNwZWN0UmF0aW8oQHdpZHRoKVxuXG4gICAgICAgICMtLT4gVmlkZW8gfCBNZWRpdW1cbiAgICAgICAgQHZpZGVvLndpZHRoID0gQC50aHVtYm5haWwud2lkdGhcbiAgICAgICAgQHZpZGVvLnkgPSAtMTZcblxuICAgICAgICAjLS0+IE92ZXJsYXkgfCBNZWRpdW1cbiAgICAgICAgQG92ZXJsYXkud2lkdGggPSBALnRodW1ibmFpbC53aWR0aFxuICAgICAgICBAb3ZlcmxheS5oZWlnaHQgPSBALnRodW1ibmFpbC5oZWlnaHRcblxuICAgICAgICAjLS0+IFBsYXkgQnV0dG9uIHwgTWVkaXVtXG4gICAgICAgIEBwbGF5QnV0dG9uLnNpemUgPSBNZWRpdW1DYXJkUGxheUJ1dHRvblxuICAgICAgICBAcGxheUJ1dHRvbi5wb2ludCA9IEFsaWduLmNlbnRlclxuXG4gICAgICAgICMtLT4gVGltZXN0YW1wIHwgTWVkaXVtXG4gICAgICAgIEB0aW1lc3RhbXAueCA9IEFsaWduLnJpZ2h0KC04KVxuICAgICAgICBAdGltZXN0YW1wLnkgPSBBbGlnbi5ib3R0b20oLTgpXG5cbiAgICAgICAgIy0tPiBXYXRjaCBsYXRlciB8IE1lZGl1bVxuICAgICAgICBAd2F0Y2hMYXRlci54ID0gQWxpZ24ucmlnaHQoLTgpXG4gICAgICAgIEB3YXRjaExhdGVyLnkgPSA4XG5cbiAgICAgICAgIy0tPiBMYWJlbCB8IE1lZGl1bVxuICAgICAgICBAbGFiZWwud2lkdGggPSBAd2lkdGhcbiAgICAgICAgQGxhYmVsLmhlaWdodCA9IEBoZWlnaHQgLSBALnRodW1ibmFpbC5oZWlnaHRcbiAgICAgICAgQGxhYmVsLnkgPSBBbGlnbi5ib3R0b21cblxuICAgICAgICAjLS0+IExhYmVsSW5uZXIgfCBNZWRpdW1cbiAgICAgICAgQGxhYmVsSW5uZXIud2lkdGggPSBALmxhYmVsLndpZHRoIC0gKE1lZGl1bUNhcmRUZXh0UGFkZGluZ1sxXSAqIDIpXG4gICAgICAgIEBsYWJlbElubmVyLmhlaWdodCA9IEAubGFiZWwuaGVpZ2h0IC0gKE1lZGl1bUNhcmRUZXh0UGFkZGluZ1swXSArIE1lZGl1bUNhcmRUZXh0UGFkZGluZ1syXSlcbiAgICAgICAgQGxhYmVsSW5uZXIucG9pbnQgPSBBbGlnbi5jZW50ZXJcblxuICAgICAgICAjLS0+IFNvdXJjZSB8IE1lZGl1bVxuICAgICAgICBAc291cmNlLmZvbnRTaXplID0gTWVkaXVtQ2FyZFRleHRfc291cmNlXG4gICAgICAgIEBzb3VyY2Uud2lkdGggPSBALmxhYmVsSW5uZXIud2lkdGhcblxuICAgICAgICAjLS0+IEhlYWRlciB8IE1lZGl1bVxuICAgICAgICBAaGVhZGVyLmZvbnRTaXplID0gTWVkaXVtQ2FyZFRleHRfaGVhZGVyWzBdXG4gICAgICAgIEBoZWFkZXIubGluZUhlaWdodCA9IE1lZGl1bUNhcmRUZXh0X2hlYWRlclsxXVxuICAgICAgICBAaGVhZGVyLndpZHRoID0gQC5sYWJlbElubmVyLndpZHRoXG4gICAgICAgIEBoZWFkZXIueSA9IEAuc291cmNlLm1heFlcbiAgICAgICAgQGhlYWRlci5oZWlnaHQgPSBALmxhYmVsSW5uZXIuaGVpZ2h0IC0gQC5zb3VyY2UuaGVpZ2h0XG4gICAgICAgIEBoZWFkZXIucGFkZGluZyA9XG4gICAgICAgICAgdG9wOiA0XG4gICAgICAgIEBoZWFkZXIudGV4dE92ZXJmbG93ID0gXCJlbGxpcHNpc1wiXG5cblxuICAgICAgIyMjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgfHx8LS0+IExhcmdlIHZpZGVvIGNhcmQgPC0tfHx8fFxuICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAjIyNcblxuICAgICAgaWYgQG9wdGlvbnMuZm9ybWF0IGlzIFwibGFyZ2VcIlxuICAgICAgICBALndpZHRoID0gTGFyZ2VDYXJkV2lkdGhcbiAgICAgICAgQC5oZWlnaHQgPSBMYXJnZUNhcmRIZWlnaHRcblxuICAgICAgICAjLS0+IFRodW1ibmFpbCB8IExhcmdlXG4gICAgICAgIEAudGh1bWJuYWlsLndpZHRoID0gTGFyZ2VDYXJkV2lkdGhcbiAgICAgICAgQC50aHVtYm5haWwuaGVpZ2h0ID0gQXNwZWN0UmF0aW8oQHdpZHRoKVxuXG4gICAgICAgICMtLT4gVmlkZW8gfCBNZWRpdW1cbiAgICAgICAgQHZpZGVvLndpZHRoID0gQC50aHVtYm5haWwud2lkdGhcbiAgICAgICAgQHZpZGVvLmhlaWdodCA9IEAudGh1bWJuYWlsLmhlaWdodFxuICAgICAgICBAdmlkZW8ueSA9IDBcblxuICAgICAgICAjLS0+IE92ZXJsYXkgfCBNZWRpdW1cbiAgICAgICAgQG92ZXJsYXkud2lkdGggPSBALnRodW1ibmFpbC53aWR0aFxuICAgICAgICBAb3ZlcmxheS5oZWlnaHQgPSBALnRodW1ibmFpbC5oZWlnaHRcblxuICAgICAgICAjLS0+IFBsYXkgQnV0dG9uIHwgTGFyZ2VcbiAgICAgICAgQHBsYXlCdXR0b24uc2l6ZSA9IExhcmdlQ2FyZFBsYXlCdXR0b25cbiAgICAgICAgQHBsYXlCdXR0b24ucG9pbnQgPSBBbGlnbi5jZW50ZXJcblxuICAgICAgICAjLS0+IFRpbWVzdGFtcCB8IExhcmdlXG4gICAgICAgIEB0aW1lc3RhbXAueCA9IEFsaWduLnJpZ2h0KC04KVxuICAgICAgICBAdGltZXN0YW1wLnkgPSBBbGlnbi5ib3R0b20oLTgpXG5cbiAgICAgICAgIy0tPiBXYXRjaCBsYXRlciB8IExhcmdlXG4gICAgICAgIEB3YXRjaExhdGVyLnNpemUgPSAyNFxuICAgICAgICBAd2F0Y2hMYXRlci54ID0gQWxpZ24ucmlnaHQoLTgpXG4gICAgICAgIEB3YXRjaExhdGVyLnkgPSA4XG5cbiAgICAgICAgIy0tPiBMYWJlbCB8IExhcmdlXG4gICAgICAgIEBsYWJlbC53aWR0aCA9IEB3aWR0aFxuICAgICAgICBAbGFiZWwuaGVpZ2h0ID0gQGhlaWdodCAtIEAudGh1bWJuYWlsLmhlaWdodFxuICAgICAgICBAbGFiZWwueSA9IEFsaWduLmJvdHRvbVxuXG4gICAgICAgICMtLT4gTGFiZWxJbm5lciB8IExhcmdlXG4gICAgICAgIEBsYWJlbElubmVyLndpZHRoID0gQC5sYWJlbC53aWR0aCAtIChMYXJnZUNhcmRUZXh0UGFkZGluZ1sxXSAqIDIpXG4gICAgICAgIEBsYWJlbElubmVyLmhlaWdodCA9IEAubGFiZWwuaGVpZ2h0IC0gKExhcmdlQ2FyZFRleHRQYWRkaW5nWzBdICsgTGFyZ2VDYXJkVGV4dFBhZGRpbmdbMl0pXG4gICAgICAgIEBsYWJlbElubmVyLnBvaW50ID0gQWxpZ24uY2VudGVyXG5cbiAgICAgICAgIy0tPiBTb3VyY2UgfCBMYXJnZVxuICAgICAgICBAc291cmNlLmZvbnRTaXplID0gTGFyZ2VDYXJkVGV4dF9zb3VyY2VcbiAgICAgICAgQHNvdXJjZS53aWR0aCA9IEAubGFiZWxJbm5lci53aWR0aFxuXG4gICAgICAgICMtLT4gSGVhZGVyIHwgTGFyZ2VcbiAgICAgICAgQGhlYWRlci5mb250U2l6ZSA9IExhcmdlQ2FyZFRleHRfaGVhZGVyWzBdXG4gICAgICAgIEBoZWFkZXIubGluZUhlaWdodCA9IExhcmdlQ2FyZFRleHRfaGVhZGVyWzFdXG4gICAgICAgIEBoZWFkZXIud2lkdGggPSBALmxhYmVsSW5uZXIud2lkdGhcbiAgICAgICAgQGhlYWRlci55ID0gQC5zb3VyY2UubWF4WVxuICAgICAgICBAaGVhZGVyLmhlaWdodCA9IEAubGFiZWxJbm5lci5oZWlnaHQgLSBALnNvdXJjZS5oZWlnaHRcbiAgICAgICAgQGhlYWRlci5wYWRkaW5nID1cbiAgICAgICAgICB0b3A6IDRcbiAgICAgICAgQGhlYWRlci50ZXh0T3ZlcmZsb3cgPSBcImVsbGlwc2lzXCJcblxuXG4gICAgICAjIyMgOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjpcbiAgICAgICAgICBFVkVOVFNcbiAgICAgIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6ICMjI1xuXG4gICAgICBALm9uTW91c2VPdmVyIEBQcmV2aWV3T05cbiAgICAgIEAub25Nb3VzZU91dCBAUHJldmlld09GRlxuXG4gICAgIyMjXG4gICAg4oazIEdldHRlcnMgJiBzZXR0ZXI6XG4gICAgXHRhLiBGb3JtYXRcbiAgICBcdGIuIFN1Yi1pdGVtIDJcbiAgICAjIyNcbiAgICBAZGVmaW5lICdmb3JtYXQnLFxuICAgICAgZ2V0OiAtPlxuICAgICAgICBAb3B0aW9ucy5mb3JtYXRcbiAgICAgIHNldDogKHZhbHVlKSAtPlxuICAgICAgICBAb3B0aW9ucy5mb3JtYXQgPSB2YWx1ZVxuXG4gICAgICAgIGlmIEBvcHRpb25zLmZvcm1hdCBpcyBcInNtYWxsXCJcbiAgICAgICAgICBALndpZHRoID0gU21hbGxDYXJkV2lkdGhcbiAgICAgICAgICBALmhlaWdodCA9IFNtYWxsQ2FyZEhlaWdodFxuXG4gICAgICAgIGlmIEBvcHRpb25zLmZvcm1hdCBpcyBcIm1lZGl1bVwiXG4gICAgICAgICAgQC53aWR0aCA9IE1lZGl1bUNhcmRXaWR0aFxuICAgICAgICAgIEAuaGVpZ2h0ID0gTWVkaXVtQ2FyZEhlaWdodFxuXG4gICAgICAgIGVsc2UgaWYgQG9wdGlvbnMuZm9ybWF0IGlzIFwibGFyZ2VcIlxuICAgICAgICAgIEAud2lkdGggPSBMYXJnZUNhcmRXaWR0aFxuICAgICAgICAgIEAuaGVpZ2h0ID0gTGFyZ2VDYXJkSGVpZ2h0XG5cblxuICAgICMtLT4gRXZlbnQgZnVuY3Rpb25zXG4gICAgUHJldmlld09OOiA9PlxuICAgICAgICBAYW5pbWF0ZVxuICAgICAgICAgIHk6IEB5IC0gMTBcbiAgICAgICAgICBzaGFkb3dZOiA3XG4gICAgICAgICAgc2hhZG93Qmx1cjogMTBcbiAgICAgICAgICBzaGFkb3dTcHJlYWQ6IDNcblxuICAgICAgICBAdmlkZW8uYW5pbWF0ZVxuICAgICAgICAgIHNjYWxlOiAxLjA1XG5cbiAgICAgICAgQG92ZXJsYXkuYW5pbWF0ZVxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogb3ZlcmxheV9vcGFjaXR5XG5cbiAgICAgICAgQHBsYXlCdXR0b24uYW5pbWF0ZVxuICAgICAgICAgIG9wYWNpdHk6IDFcblxuICAgICAgICBAd2F0Y2hMYXRlci5hbmltYXRlXG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIG9wdGlvbnM6XG4gICAgICAgICAgICBkZWxheTogLjI1XG5cbiAgICAgICAgVXRpbHMuZGVsYXkgLjEsICA9PlxuICAgICAgICAgIEAudmlkZW8ucGxheWVyLnBsYXkoKVxuICAgICAgICAgIEAudmlkZW8ucGxheWVyLmxvb3AgPSB0cnVlXG5cbiAgICBQcmV2aWV3T0ZGOiA9PlxuICAgICAgQGFuaW1hdGVcbiAgICAgICAgeTogQHkgKyAxMFxuICAgICAgICBzaGFkb3dZOiAyXG4gICAgICAgIHNoYWRvd0JsdXI6IDRcbiAgICAgICAgc2hhZG93U3ByZWFkOiAwXG5cbiAgICAgIEB2aWRlby5hbmltYXRlXG4gICAgICAgIHNjYWxlOiAxXG5cbiAgICAgIEBvdmVybGF5LmFuaW1hdGVcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblxuICAgICAgQHBsYXlCdXR0b24uYW5pbWF0ZVxuICAgICAgICBvcGFjaXR5OiAwXG5cbiAgICAgIEB3YXRjaExhdGVyLmFuaW1hdGVcbiAgICAgICAgb3BhY2l0eTogMFxuXG4gICAgICBALnZpZGVvLnBsYXllci5wYXVzZSgpXG4gICAgICBALnZpZGVvLnBsYXllci5sb29wID0gZmFsc2VcblxuICAgICAgVXRpbHMuZGVsYXkgLjI1LCA9PlxuICAgICAgICBALnZpZGVvLnBsYXllci5jdXJyZW50VGltZSA9IDBcblxuICAgICAgICAjICMjIy0tPiBBc3NpZ25zIGEgcmFuZG9tIG51bWJlciBhbmQgdHJpY2tzIHRoZSBwYWdlXG4gICAgXHRcdCMgIyBpbnRvIHJlbG9hZGluZyB0aGUgc2FtZSBjb21wb25lbnQgZWFjaCB0aW1lIGl0IHBsYXlzICMjI1xuICAgICAgICBALnBsYXlCdXR0b24uaW1hZ2UgPSBcImh0dHA6Ly9odWdvbWFnYWxoYWVzLmRlc2lnbi8vZnJhbWVyL3ZpZGVvcy9wbGF5QnV0dG9uX2xvYWRlci5naWZcIiArIFwiP2E9XCIgKyBNYXRoLnJhbmRvbSgpXG5cbiMgRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gVmlkZW9DYXJkXG4iLCIjIEZpbGU6IG1vZHVsZXMvbnBtLmNvZmZlZVxuXG5leHBvcnRzLmNvdW50dXAgPSByZXF1aXJlIFwiY291bnR1cC5qc1wiXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIiwiY3VycmVudFByb2plY3QgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpW3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikubGVuZ3RoLTJdXG5cbmlmIExheWVyLnByb3RvdHlwZS5pbWFnZUZpbGwgPT0gdW5kZWZpbmVkXG5cdExheWVyLnByb3RvdHlwZS5pbWFnZUZpbGwgPSAocSkgLT5cblx0XHRpZiAhcVxuXHRcdFx0cT1cIlwiXG5cdFx0aWYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWxsSW1hZ2VzXCIpXG5cdFx0XHRmaWxsSW1hZ2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpbGxJbWFnZXNcIikpXG5cdFx0XHRwcm9qZWN0ID0gXy5maW5kSW5kZXgoZmlsbEltYWdlcy5wcm9qZWN0cywge25hbWUgOiBjdXJyZW50UHJvamVjdH0pXG5cdFx0XHRpZiBwcm9qZWN0ICE9IC0xXG5cdFx0XHRcdGlmIEBuYW1lICE9IFwiXCJcblx0XHRcdFx0XHRpbWFnZU5iID0gXy5maW5kSW5kZXgoZmlsbEltYWdlcy5wcm9qZWN0c1twcm9qZWN0XS5pbWFnZUxpc3QsIHtuYW1lIDogQG5hbWV9KVxuXHRcdFx0XHRcdGlmKGltYWdlTmIgIT0gLTEpXG5cdFx0XHRcdFx0XHRAaW1hZ2UgPSBmaWxsSW1hZ2VzLnByb2plY3RzW3Byb2plY3RdLmltYWdlTGlzdFtpbWFnZU5iXS51cmxcblx0XHRcdFx0XHRcdEBpbWFnZVNhdmVkID0gdHJ1ZVxuXG5cdFx0aWYgIUBpbWFnZVNhdmVkXG5cdFx0XHRpZiAhQG5hbWVcblx0XHRcdFx0dGhyb3cgXCJBIG5hbWUgZm9yIHRoZSBsYXllciB5b3Ugd2FudCB0byBmaWxsIGlzIHJlcXVpcmVkXCJcblx0XHRcdFx0cmV0dXJuIDBcblx0XHRcdG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXHRcdFx0cmVzID0gXCJudWxsXCJcblx0XHRcdG9SZXEub25sb2FkID0gLT5cblx0XHRcdFx0YnVmZmVyID0gb1JlcS5yZXNwb25zZVxuXHRcdFx0XHRyZXMgPSBKU09OLnBhcnNlKGJ1ZmZlcilcblx0XHRcdG9SZXEub3BlbihcIkdFVFwiLCBcImh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP3F1ZXJ5PSN7cX0mY2xpZW50X2lkPWFmZjhjYzc2ODNiYjAwNTQzOTZhNzkwZDVkMGU5NDJhOTNkZTNhZTkzYWM4M2I4ZDEzZjZiZjg5YTk2YjNiYThcIiwgZmFsc2UpXG5cdFx0XHRvUmVxLnNlbmQoKVxuXHRcdFx0aWYgcmVzLmVycm9yc1xuXHRcdFx0XHR0aHJvdyBcIlNlYXJjaCB0ZXJtIGRpZG4ndCBnaXZlIGFueSByZXN1bHRcIlxuXHRcdFx0XHRyZXR1cm4gMFxuXHRcdFx0c2hvd0NyZWRpdChyZXMsIHRoaXMsIHEpXG5cdFx0XHRAaW1hZ2UgPSByZXMudXJscy5yZWd1bGFyXG5lbHNlXG5cdHRocm93IFwiTWV0aG9kIGltYWdlRmlsbCBhbHJlYWR5IGV4aXN0c1wiXG5cbnNob3dDcmVkaXQgPSAocGhvdG8sIGxheWVyLCBxKSAtPlxuXHRjcmVkaXQgPSBuZXcgTGF5ZXJcblx0XHRuYW1lOiBcImNyZWRpdFwiXG5cdFx0eTogQWxpZ24uYm90dG9tKC04KVxuXHRcdGhlaWdodDogMzBcblx0XHRib3JkZXJSYWRpdXM6IDhcblx0XHR3aWR0aDogU2NyZWVuLndpZHRoIC0gMjBcblx0XHR4OiBBbGlnbi5jZW50ZXJcblx0XHRjbGlwOiB0cnVlXG5cdFx0b3BhY2l0eTogMFxuXHRcdGFuaW1PcHRpb25zOlxuXHRcdFx0dGltZTogMC4zXG5cdFx0XHRkZWxheTogMC4yXG5cblx0Y3JlZGl0LnN0YXRlcy5vbiA9XG5cdFx0b3BhY2l0eTogMVxuXHRcdGFuaW1PcHRpb25zOlxuXHRcdFx0dGltZTogMC4zXG5cdGNyZWRpdC5zdGF0ZUN5Y2xlKClcblxuXHRrZWVwSW1hZ2UgPSBuZXcgVGV4dExheWVyXG5cdFx0bmFtZTogXCJrZWVwXCJcblx0XHRwYXJlbnQ6IGNyZWRpdFxuXHRcdHRleHQ6IFwi4pyU77iOXCJcblx0XHRmb250U2l6ZTogMjBcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRjb2xvcjogXCIjZmZmZmZmXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzY5QzY0MFwiXG5cdFx0bGluZUhlaWdodDogMS41NVxuXHRcdHdpZHRoOiA0MFxuXHRcdGhlaWdodDogMzBcblx0XHR4OiBBbGlnbi5yaWdodFxuXHRcdHk6IDBcblxuXHRrZWVwSW1hZ2Uuc3RhdGVzLnNlbGVjdGVkID1cblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJENTYxQ1wiXG5cdFx0YW5pbU9wdGlvbnM6XG5cdFx0XHR0aW1lOiAwLjFcblxuXHRrZWVwSW1hZ2Uub24gRXZlbnRzLlRhcCwgLT5cblx0XHRrZWVwSW1hZ2Uuc3RhdGVDeWNsZSgpXG5cdFx0ZmlsbEltYWdlcyA9IHtwcm9qZWN0czogW119XG5cdFx0aWYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaWxsSW1hZ2VzXCIpXG5cdFx0XHRmaWxsSW1hZ2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpbGxJbWFnZXNcIikpXG5cdFx0cHJvamVjdE5iID0gXy5maW5kSW5kZXgoZmlsbEltYWdlcy5wcm9qZWN0cywge25hbWUgOiBjdXJyZW50UHJvamVjdH0pXG5cdFx0aWYgcHJvamVjdE5iIDwgMFxuXHRcdFx0cHJvamVjdE5iID0gZmlsbEltYWdlcy5wcm9qZWN0cy5sZW5ndGhcblx0XHRcdG5ld1Byb2plY3QgPSB7bmFtZTogY3VycmVudFByb2plY3QsIGltYWdlTGlzdDogW119XG5cdFx0XHRmaWxsSW1hZ2VzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdClcblx0XHRmaWxsSW1hZ2VzLnByb2plY3RzW3Byb2plY3ROYl0uaW1hZ2VMaXN0LnB1c2goe25hbWU6IGxheWVyLm5hbWUsIHVybCA6IHBob3RvLnVybHMucmVndWxhcn0pXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaWxsSW1hZ2VzXCIsIEpTT04uc3RyaW5naWZ5KGZpbGxJbWFnZXMpKVxuXHRcdGNyZWRpdC5zdGF0ZUN5Y2xlKClcblx0XHRjcmVkaXQub24gRXZlbnRzLlN0YXRlU3dpdGNoRW5kLCAtPlxuXHRcdFx0Y3JlZGl0LmRlc3Ryb3koKVxuXG5cdGNoYW5nZUltYWdlID0gbmV3IFRleHRMYXllclxuXHRcdG5hbWU6IFwiY2hhbmdlXCJcblx0XHRwYXJlbnQ6IGNyZWRpdFxuXHRcdHRleHQ6IFwi4pyYXCJcblx0XHRmb250U2l6ZTogMjBcblx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRjb2xvcjogXCIjZmZmZmZmXCJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI0Q1MzczQ1wiXG5cdFx0d2lkdGg6IDQwXG5cdFx0aGVpZ2h0OiAzMFxuXHRcdGxpbmVIZWlnaHQ6IDEuNTVcblx0XHR4OiBBbGlnbi5yaWdodCgtNDApXG5cdFx0eTogMFxuXG5cdGNoYW5nZUltYWdlLnN0YXRlcy5zZWxlY3RlZCA9XG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiM3NDFFMjFcIlxuXHRcdGFuaW1PcHRpb25zOlxuXHRcdFx0dGltZTogMC4xXG5cblx0Y2hhbmdlSW1hZ2Uub24gRXZlbnRzLlRhcCwgLT5cblx0XHRjaGFuZ2VJbWFnZS5zdGF0ZUN5Y2xlKClcblx0XHRjcmVkaXQuc3RhdGVDeWNsZSgpXG5cdFx0Y3JlZGl0Lm9uIEV2ZW50cy5TdGF0ZVN3aXRjaEVuZCwgLT5cblx0XHRcdGNyZWRpdC5kZXN0cm95KClcblx0XHRcdGxheWVyLmltYWdlRmlsbChxKVxuXG5cdGNyZWRpdFVuc3BsYXNoID0gbmV3IFRleHRMYXllclxuXHRcdG5hbWU6IFwiVW5zcGxhc2hcIlxuXHRcdHBhcmVudDogY3JlZGl0XG5cdFx0Zm9udFNpemU6IDEwXG5cdFx0Y29sb3I6IFwiIzAwMDAwMFwiXG5cdFx0dGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCJcblx0XHR0ZXh0OiBcIkltYWdlIGZyb20gVW5zcGxhc2hcIlxuXHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdHg6IDEyXG5cdGNyZWRpdFVuc3BsYXNoLm9uIEV2ZW50cy5UYXAsIC0+XG5cdFx0d2luZG93Lm9wZW4oXCJodHRwczovL3Vuc3BsYXNoLmNvbS8/dXRtX3NvdXJjZT1mcmFtZXJJbWFnZUZpbGwmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY2FtcGFpZ249YXBpLWNyZWRpdFwiLCBcIl9ibGFua1wiKVxuXG5cdGNyZWRpdFBob3RvID0gbmV3IFRleHRMYXllclxuXHRcdG5hbWU6IFwiUGhvdG9ncmFwaGVyXCJcblx0XHRwYXJlbnQ6IGNyZWRpdFxuXHRcdGZvbnRTaXplOiAxMFxuXHRcdGNvbG9yOiBcIiMwMDAwMDBcIlxuXHRcdHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiXG5cdFx0dGV4dDogXCJQaG90byBieSAje3Bob3RvLnVzZXIudXNlcm5hbWV9XCJcblx0XHR0cnVuY2F0ZTogdHJ1ZVxuXHRcdHdpZHRoOiBjcmVkaXQud2lkdGggLSAxMjIgLSA4MFxuXHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdHg6IDEyMlxuXG5cdGNyZWRpdFBob3RvLm9uIEV2ZW50cy5UYXAsIC0+XG5cdFx0d2luZG93Lm9wZW4oXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AI3twaG90by51c2VyLnVzZXJuYW1lfT91dG1fc291cmNlPWZyYW1lckltYWdlRmlsbCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jYW1wYWlnbj1hcGktY3JlZGl0XCIsIFwiX2JsYW5rXCIpXG4iLCIjIyNcblx0IyBVU0lORyBUSEUgQ0FST1VTRUxDT01QT05FTlRcblxuXHQjIFJlcXVpcmUgdGhlIG1vZHVsZVxuXHRDYXJvdXNlbENvbXBvbmVudCA9IHJlcXVpcmUgXCJDYXJvdXNlbENvbXBvbmVudFwiXG5cblx0bXlDYXJvdXNlbCA9IG5ldyBDYXJvdXNlbENvbXBvbmVudFxuXHRcdCMgSXRlbSBjZWxsc1xuXHRcdGl0ZW1Db3VudDogPG51bWJlcj5cblx0XHRyb3VuZGVkOiA8Ym9vbGVhbj5cblx0XHRpdGVtTWFyZ2luOiA8bnVtYmVyPlxuXHRcdGl0ZW1Cb3JkZXJSYWRpdXM6IDxudW1iZXI+XG5cdFx0aXRlbVdpZHRoOiA8bnVtYmVyPlxuXHRcdGl0ZW1IZWlnaHQ6IDxudW1iZXI+XG5cdFx0c21hbGxJdGVtV2lkdGg6IDxudW1iZXI+XG5cdFx0c21hbGxJdGVtSGVpZ2h0OiA8bnVtYmVyPlxuXG5cdFx0IyBMYWJlbHNcblx0XHR0aXRsZTogPHN0cmluZz5cblx0XHRsaW5rOiA8c3RyaW5nPlxuXHRcdGNhcHRpb25zOiA8YXJyYXkgb2Ygc3RyaW5ncz5cblx0XHRzdWJjYXB0aW9uczogPGFycmF5IG9mIHN0cmluZ3M+XG5cblx0XHQjIExheW91dFxuXHRcdG1hcmdpbnM6IDxhcnJheSBvZiBudW1iZXJzPiAoW3RvcE1hcmdpbiwgcmlnaHRNYXJnaW4sIGJvdHRvbU1hcmdpbiwgbGVmdE1hcmdpbl0pXG5cdFx0d3JhcDogPGJvb2xlYW4+XG5cdFx0c2lkZUNhcHRpb25zOiA8Ym9vbGVhbj5cblx0XHR0b3BBbGlnblNpZGVDYXB0aW9uczogPGJvb2xlYW4+XG5cblx0XHQjIEhlcm8tc3BlY2lmaWMgY29udHJvbHNcblx0XHRoZXJvQ2FwdGlvbkFsaWduOiA8c3RyaW5nPiAoXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiKVxuXHRcdGNlbnRlcmhlcm9JdGVtOiA8Ym9vbGVhbj5cblx0XHRzaWRlSGVyb0NhcHRpb246IDxib29sZWFuPlxuXHRcdHRvcEFsaWduSGVyb0NhcHRpb246IDxib29sZWFuPlxuXG5cdFx0IyBDb2xvcnNcblx0XHRib3hDb2xvcjogPHN0cmluZz4gKGhleCBvciByZ2JhKVxuXHRcdGljb25Db2xvcjogPHN0cmluZz4gKGhleCBvciByZ2JhKVxuXHRcdHRpdGxlQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblx0XHRsaW5rQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblx0XHRjYXB0aW9uQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblx0XHRzdWJjYXB0aW9uQ29sb3I6IDxzdHJpbmc+IChoZXggb3IgcmdiYSlcblxuXHRcdCMgVHlwb2dyYXBoeVxuXHRcdGZvbnRGYW1pbHk6IDxzdHJpbmc+XG5cdFx0dGl0bGVGb250U2l6ZTogPG51bWJlcj5cblx0XHR0aXRsZUZvbnRXZWlnaHQ6IDxudW1iZXI+XG5cdFx0dGl0bGVNYXJnaW46IDxudW1iZXI+XG5cdFx0bGlua0ZvbnRTaXplOiA8bnVtYmVyPlxuXHRcdGxpbmtGb250V2VpZ2h0OiA8bnVtYmVyPlxuXHRcdGNhcHRpb25Gb250U2l6ZTogPG51bWJlcj5cblx0XHRjYXB0aW9uRm9udFdlaWdodDogPG51bWJlcj5cblx0XHRjYXB0aW9uTWFyZ2luOiA8bnVtYmVyPlxuXHRcdGNhcHRpb25NYXhIZWlnaHQ6IDxudW1iZXI+XG5cdFx0c3ViY2FwdGlvbkZvbnRTaXplOiA8bnVtYmVyPlxuXHRcdHN1YmNhcHRpb25Gb250V2VpZ2h0OiA8bnVtYmVyPlxuXHRcdHN1YmNhcHRpb25NYXJnaW46IDxudW1iZXI+XG5cdFx0c3ViY2FwdGlvbk1heEhlaWdodDogPG51bWJlcj5cblx0XHR0aXRsZUFsaWduOiA8c3RyaW5nPiAoXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiKVxuXHRcdGNhcHRpb25BbGlnbjogPHN0cmluZz4gKFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIilcblxuXHRcdCMgSWNvbnNcblx0XHRpY29uczogPGJvb2xlYW4+XG5cdFx0aWNvbkJvcmRlclJhZGl1czogPG51bWJlcj5cblx0XHRpY29uU2l6ZTogPG51bWJlcj5cblx0XHRpY29uTWFyZ2luOiA8bnVtYmVyPlxuXG5cdFx0IyBJbWFnZSBhc3NldHNcblx0XHRpbWFnZVByZWZpeDogPHN0cmluZz4gKFwiaW1hZ2VzXCIgZGlyZWN0b3J5IGFzc3VtZWQpXG5cdFx0aW1hZ2VTdWZmaXg6IDxzdHJpbmc+XG5cdFx0aWNvblByZWZpeDogPHN0cmluZz4gKFwiaW1hZ2VzXCIgZGlyZWN0b3J5IGFzc3VtZWQpXG5cdFx0aWNvblN1ZmZpeDogPHN0cmluZz5cblxuXHRcdCMgQWN0aW9uc1xuXHRcdGl0ZW1BY3Rpb25zOiA8YXJyYXkgb2YgYWN0aW9ucz5cblx0XHRsaW5rQWN0aW9uOiA8YWN0aW9uPlxuXG5cdFx0IyBWaWV3IENhcm91c2VsQ29tcG9uZW50IGZyYW1lXG5cdFx0ZGVidWc6IDxib29sZWFuPlxuXG5cdFx0IyBPdGhlclxuXHRcdGZvcmNlU2Nyb2xsaW5nOiA8Ym9vbGVhbj5cblxuXHQjIFVzaW5nIHNpZGUgY2FwdGlvbnNcblx0U3BlY2lmeSBzaWRlQ2FwdGlvbnM6IHRydWUgdG8gdmVydGljYWxseSBhbGlnbiBjYXB0aW9ucyBhbG9uZ3NpZGUgY2VsbHMgcmF0aGVyIHRoYW4gdW5kZXJuZWF0aC4gU3BlY2lmeSB0b3BBbGlnblNpZGVDYXB0aW9uczogdHJ1ZSB0byBhbGlnbiBzaWRlIGNhcHRpb25zIHRvIHRoZSB0b3BzIG9mIHRoZWlyIGFkamFjZW50IGNlbGxzLlxuXG5cdCMgVXNpbmcgdGhlIHdyYXAgZmVhdHVyZVxuXHQjIElmIHlvdSBzcGVjaWZ5IHdyYXA6IHRydWUsIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBjYXJvdXNlbCB3aWxsIGRpc3BsYXkgb24gaXRzIG93biByb3cgYXMgYSBcImhlcm9cIiBpdGVtLiBUaGlzIGl0ZW0gY2FuIGJlIGNvbnRyb2xsZWQgaW5kZXBlbmRlbnRseSBvZiB0aGUgcmVzdCBvZiB0aGUgY2Fyb3VzZWwuIFNlY29uZGFyeSBjZWxscyB3aWxsIGJlIHNpemVkIGFjY29yZGluZyB0byBzbWFsbEl0ZW1XaWR0aCBhbmQgc21hbGxJdGVtSGVpZ2h0IHJhdGhlciB0aGFuIGl0ZW1XaWR0aCBhbmQgaXRlbUhlaWdodC5cblxuXHQjIFVzaW5nIGljb25zXG5cdCMgSWNvbnMgY2FuIGJlIGRpc3BsYXllZCB1bmRlciBlYWNoIGl0ZW0ncyBjZWxsLiBTcGVjaWZ5IGljb25zOiB0cnVlIHRvIGVuYWJsZSB0aGlzLiBFbmFibGluZyBpY29ucyBwcmV2ZW50cyB0aGUgdXNlIG9mIHNpZGUgY2FwdGlvbnMuXG5cblx0IyBVc2luZyBpbWFnZXNcblx0IyBBbGwgaW1hZ2VzIGFyZSBhc3N1bWVkIHRvIGxpdmUgaW4gdGhlIGltYWdlcyBkaXJlY3RvcnkgYW5kIGJlIG51bWJlcmVkIHdpdGggYW4gaW5pdGlhbCBpbmRleCBvZiB6ZXJvLiBZb3UgbWF5IHN1cHBseSBib3RoIGEgcHJlZml4IGFuZCBzdWZmaXguIElmIHlvdXIgaXRlbSBpbWFnZXMgYXJlIGxvY2F0ZWQgaW4gYW4gXCJpdGVtc1wiIGRpcmVjdG9yeSB3aXRoaW4gXCJpbWFnZXNcIiBhbmQgbmFtZWQ6XG5cblx0Y2VsbDAucG5nXG5cdGNlbGwxLnBuZ1xuXHRjZWxsMi5wbmdcblxuXHQjIHRoZW4geW91ciBpbWFnZVByZWZpeCB3b3VsZCBiZSBcIml0ZW1zL2NlbGxcIiBhbmQgeW91ciBzdWZmaXggd291bGQgYmUgXCJwbmdcIi5cblxuXHQjIEljb24gYXNzZXRzIHdvcmsgdGhlIHNhbWUgd2F5LlxuXG5cdCMgRG8gbm90IGluY2x1ZGUgdGhlIGltYWdlcyBkaXJlY3RvcnkgaW4gaW1hZ2VQcmVmaXggb3IgaWNvblByZWZpeC5cblxuXHQjIEFzc2lnbmluZyBtYXJnaW5zXG5cdCMgTWFyZ2lucyBhcmUgc3VwcGxpZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgZm9yIENTUy4gbWFyZ2luczogWzQwLCAxMCwgMTUsIDVdIHdpbGwgcHJvdmlkZSBhIHRvcCBtYXJnaW4gb2YgNDAsIGEgcmlnaHQgbWFyZ2luIG9mIDEwLCBhIGJvdHRvbSBtYXJnaW4gb2YgMTUgYW5kIGEgbGVmdCBtYXJnaW4gb2YgNS4gVGhlIGZpcnN0IGl0ZW0gaXMgcG9zaXRpb25lZCBhY2NvcmRpbmcgdG8gdGhlIHRvcCBtYXJnaW47IGhvd2V2ZXIgdGhlIHRpdGxlIGFuZCBsaW5rIGFyZSBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSBmaXJzdCBpdGVtIHVzaW5nIHRpdGxlTWFyZ2luLlxuXG5cdCMgU2Nyb2xsaW5nXG5cdCMgVGhlIENhcm91c2VsQ29tcG9uZW50IHdpbGwgYXR0ZW1wdCB0byBwcm92aWRlIHNjcm9sbGluZyBvbmx5IHdoZW4gaXRzIGNvbnRlbnQgZXh0ZW5kcyBiZXlvbmQgdGhlIHZpc2libGUgYXJlYS4gVG8gZW5mb3JjZSBzY3JvbGxpbmcgcmVnYXJkbGVzcywgc3BlY2lmeSBmb3JjZVNjcm9sbGluZzogdHJ1ZS5cblxuXHQjIEFzc2lnbmluZyBhY3Rpb25zXG5cdCMgVGhlIGxpbmsgYnV0dG9uIGluIHRoZSB1cHBlciByaWdodCBvZiB0aGUgY2Fyb3VzZWwgY2FuIGJlIGdpdmVuIGFuIGFjdGlvbiwgYXMgY2FuIGluZGl2aWR1YWwgaXRlbSBjZWxscy4gVGhlIGxpbmsgd2lsbCBvbmx5IGFwcGVhciBpZiB5b3Ugc3VwcGx5IGEgc3RyaW5nIHdpdGggbGluazogPHN0cmluZz4gYW5kIHRoZSBDYXJvdXNlbENvbXBvbmVudCBpbmNsdWRlcyBhdCBsZWFzdCB0d28gaXRlbXMuIEl0ZW0gYWN0aW9ucyBzaG91bGQgYmUgYXJyYW5nZWQgaW4gYSBjb21tYS1zZXBhcmF0ZWQgYXJyYXksIG9uZSBhY3Rpb24gcGVyIGxpbmUuXG5cdGxpbmtBY3Rpb246IC0+IHByaW50IFwibGlua1wiXG5cdGl0ZW1BY3Rpb25zOiBbXG5cdFx0LT4gcHJpbnQgXCIxXCIsXG5cdFx0LT4gcHJpbnQgXCJzZWNvbmRcIixcblx0XHQtPiBwcmludCBcIml0ZW0gdGhlIHRoaXJkXCJcblx0XVxuXG5cdCMgUmVmZXJyaW5nIHRvIHBhcnRzIG9mIHRoZSBDYXJvdXNlbENvbXBvbmVudFxuXHQjIFRoZSBDYXJvdXNlbENvbXBvbmVudCBjb250YWlucyBhIFBhZ2VDb21wb25lbnQgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHdpdGggLnJvdy4gSXRlbXMgYW5kIHRoZWlyIGNvbXBvbmVudHMgY2FuIGJlIGFjY2Vzc2VkIHdpdGggdGhlIC5pdGVtcyBhcnJheS4gLmhlcm9JdGVtIGlzIGF2YWlsYWJsZSB3aGVuIHdyYXAgaXMgc2V0IHRvIHRydWUuXG5cdHByaW50IG15Q2Fyb3VzZWwucm93LmN1cnJlbnRQYWdlXG5cdHByaW50IG15Q2Fyb3VzZWwuaGVyb0l0ZW0/LmNhcHRpb24/LnRleHRcblx0cHJpbnQgbXlDYXJvdXNlbC5pdGVtc1swXS50ZXh0QmxvY2tcblx0cHJpbnQgbXlDYXJvdXNlbC5pdGVtc1swXS5jZWxsXG4jIyNcblxuZGVmYXVsdHMgPVxuXHRpdGVtQ291bnQ6IDNcblxuXHRkZWJ1ZzogZmFsc2Vcblx0cm91bmRlZDogZmFsc2Vcblx0d3JhcDogZmFsc2Vcblx0c2lkZUNhcHRpb25zOiBmYWxzZVxuXHRjYXB0aW9uQWxpZ246IFwibGVmdFwiXG5cdHRpdGxlQWxpZ246IFwibGVmdFwiXG5cdHRvcEFsaWduU2lkZUNhcHRpb25zOiBmYWxzZVxuXHRjZW50ZXJoZXJvSXRlbTogZmFsc2Vcblx0aGVyb0NhcHRpb25BbGlnbjogXCJsZWZ0XCJcblx0c2lkZUhlcm9DYXB0aW9uOiBmYWxzZVxuXHR0b3BBbGlnbkhlcm9DYXB0aW9uOiB0cnVlXG5cdGljb25zOiBmYWxzZVxuXHRjbGlwOiB0cnVlXG5cdGZvcmNlU2Nyb2xsaW5nOiBmYWxzZVxuXHRtYXJnaW5zOiBbNDAsMCwwLDBdXG5cdGl0ZW1NYXJnaW46IDEyXG5cdGl0ZW1Cb3JkZXJSYWRpdXM6IDEwXG5cdGl0ZW1XaWR0aDogMTYwXG5cdGl0ZW1IZWlnaHQ6IDEyMFxuXHRzbWFsbEl0ZW1XaWR0aDogODBcblx0c21hbGxJdGVtSGVpZ2h0OiA2MFxuXHR0aXRsZUZvbnRTaXplOiAyMFxuXHR0aXRsZUZvbnRXZWlnaHQ6IDgwMFxuXHR0aXRsZU1hcmdpbjogNFxuXHRsaW5rRm9udFNpemU6IDE2XG5cdGxpbmtGb250V2VpZ2h0OiA0MDBcblx0Y2FwdGlvbkZvbnRTaXplOiAxOFxuXHRjYXB0aW9uRm9udFdlaWdodDogNDAwXG5cdGNhcHRpb25NYXhIZWlnaHQ6IDEwMFxuXHRzdWJjYXB0aW9uRm9udFNpemU6IDE2XG5cdHN1YmNhcHRpb25Gb250V2VpZ2h0OiA0MDBcblx0c3ViY2FwdGlvbk1heEhlaWdodDogMTAwXG5cblx0aWNvbkJvcmRlclJhZGl1czogMTBcblx0aWNvblNpemU6IDQwXG5cdGljb25NYXJnaW46IDhcblxuXHRjYXB0aW9uTWFyZ2luOiAxMFxuXHRzdWJjYXB0aW9uTWFyZ2luOiAwXG5cblx0YmFja2dyb3VuZENvbG9yOiBcImNsZWFyXCJcblx0Ym94Q29sb3I6IFwiI0Y1RjVGNVwiXG5cdGljb25Db2xvcjogXCJcIlxuXHR0aXRsZUNvbG9yOiBcIiNGNUY1RjVcIlxuXHRsaW5rQ29sb3I6IFwiXCJcblx0Y2FwdGlvbkNvbG9yOiBcIlwiXG5cdHN1YmNhcHRpb25Db2xvcjogXCJcIlxuXG5cdGZvbnRGYW1pbHk6IFwiXCJcblx0dGl0bGU6IFwiQ2Fyb3VzZWwgVGl0bGVcIlxuXHRsaW5rOiBcIlwiXG5cdGltYWdlUHJlZml4OiBcIlwiXG5cdGltYWdlU3VmZml4OiBcInBuZ1wiXG5cdGljb25QcmVmaXg6IFwiXCJcblx0aWNvblN1ZmZpeDogXCJwbmdcIlxuXHRjYXB0aW9uczogW11cblx0c3ViY2FwdGlvbnM6IFtdXG5cdGl0ZW1BY3Rpb25zOiBbXVxuXHRsaW5rQWN0aW9uOiAoKSAtPlxuXG5yb3VuZGVkID1cblx0aXRlbVdpZHRoOiAxMjBcblx0aXRlbUhlaWdodDogMTIwXG5cdHNtYWxsSXRlbVdpZHRoOiA2MFxuXHRzbWFsbEl0ZW1IZWlnaHQ6IDYwXG5cbiMgQ2Fyb3VzZWxDb21wb25lbnQgY2xhc3NcbmNsYXNzIENhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRAb3B0aW9ucyA9IF8uYXNzaWduKHt9LCBkZWZhdWx0cywgQG9wdGlvbnMpXG5cdFx0aWYgQG9wdGlvbnMucm91bmRlZCA9PSB0cnVlXG5cdFx0XHRAb3B0aW9ucyA9IF8uYXNzaWduKHt9LCByb3VuZGVkLCBAb3B0aW9ucylcblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0bm9vcCA9ICgpIC0+XG5cdFx0QC5pdGVtcyA9IFtdXG5cblx0XHQjIGJyZWFrIG91dCBtYXJnaW5zXG5cdFx0W3RvcE1hcmdpbiwgcmlnaHRNYXJnaW4sIGJvdHRvbU1hcmdpbiwgbGVmdE1hcmdpbl0gPSBAb3B0aW9ucy5tYXJnaW5zXG5cblx0XHQjIGNvbnRhaW5lciB2aWV3XG5cdFx0QC5jbGlwID0gQG9wdGlvbnMuY2xpcFxuXHRcdEAuYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG5cdFx0QC53aWR0aCA9IEBvcHRpb25zLndpZHRoIG9yIFNjcmVlbi53aWR0aFxuXHRcdEAueCA9IEBvcHRpb25zLnhcblx0XHRpZiBAb3B0aW9ucy5kZWJ1ZyA9PSB0cnVlXG5cdFx0XHRALmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTQsIDE2MywgMzIsIDAuMjUpXCJcblxuXHRcdCMgaWNvbiBzZXR0aW5nIGluY29tcGF0aWJpbGUgd2l0aCBzaWRlIGNhcHRpb25zIGZvciBub3dcblx0XHRpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlXG5cdFx0XHRAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPSBcIm5vbmVcIlxuXG5cdFx0IyBvZmZzZXQgaXMgdXNlZCB0byBwYXNzIG92ZXIgMXN0IGNlbGwgaW4gYSB3cmFwcGluZyBzaXR1YXRpb25cblx0XHRvZmZzZXQgPSBpZiBAb3B0aW9ucy53cmFwID09IHRydWUgdGhlbiAxIGVsc2UgMFxuXG5cdFx0IyBoaWRkZW4gbWFyZ2luIGhlbHBzIGNvbnRlbnRGcmFtZSgpIHBlcmZvcm0gY29ycmVjdGx5XG5cdFx0bWFyZ2luID0gbmV3IExheWVyXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdG5hbWU6IFwibWFyZ2luXCJcblx0XHRcdHdpZHRoOiBALndpZHRoXG5cdFx0XHRoZWlnaHQ6IDFcblx0XHRcdHZpc2libGU6IGZhbHNlXG5cblx0XHRALm1hcmdpbiA9IG1hcmdpblxuXG5cdFx0IyBjYXJvdXNlbCB0aXRsZVxuXHRcdHRpdGxlID0gbmV3IFRleHRMYXllclxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHR4OiBsZWZ0TWFyZ2luXG5cdFx0XHR0ZXh0OiBAb3B0aW9ucy50aXRsZVxuXHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLnRpdGxlRm9udFNpemVcblx0XHRcdGNvbG9yOiBAb3B0aW9ucy50aXRsZUNvbG9yXG5cdFx0XHR0ZXh0QWxpZ246IEBvcHRpb25zLnRpdGxlQWxpZ25cblx0XHRcdGZvbnRXZWlnaHQ6IEBvcHRpb25zLnRpdGxlRm9udFdlaWdodFxuXHRcdFx0d2lkdGg6IEAud2lkdGggLSBsZWZ0TWFyZ2luIC0gcmlnaHRNYXJnaW5cblxuXHRcdEAudGl0bGUgPSB0aXRsZVxuXG5cdFx0dGl0bGUubWF4WSA9IHRvcE1hcmdpbiAtIEBvcHRpb25zLnRpdGxlTWFyZ2luXG5cdFx0aWYgQG9wdGlvbnMuZm9udEZhbWlseSAhPSBcIlwiIHRoZW4gdGl0bGUuZm9udEZhbWlseSA9IEBvcHRpb25zLmZvbnRGYW1pbHlcblxuXHRcdCMgY2Fyb3VzZWwgbGlua1xuXHRcdGlmIEBvcHRpb25zLmxpbmsgIT0gXCJcIlxuXHRcdFx0bGluayA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdFx0cGFyZW50OiBAXG5cdFx0XHRcdHRleHQ6IEBvcHRpb25zLmxpbmtcblx0XHRcdFx0Zm9udFNpemU6IEBvcHRpb25zLnRpdGxlRm9udFNpemVcblx0XHRcdFx0b3JpZ2luWDogMVxuXHRcdFx0XHRvcmlnaW5ZOiAxXG5cdFx0XHRcdGF1dG9TaXplOiB0cnVlXG5cdFx0XHRcdGF1dG9TaXplSGVpZ2h0OiB0cnVlXG5cdFx0XHRcdGNvbG9yOiBAb3B0aW9ucy5saW5rQ29sb3Igb3IgQG9wdGlvbnMuY2FwdGlvbkNvbG9yIG9yIEBvcHRpb25zLnRpdGxlQ29sb3Jcblx0XHRcdFx0dGV4dEFsaWduOiBcInJpZ2h0XCJcblx0XHRcdFx0Zm9udFdlaWdodDogQG9wdGlvbnMubGlua0ZvbnRXZWlnaHRcblx0XHRcdFx0eDogQWxpZ24ucmlnaHQoLXJpZ2h0TWFyZ2luKVxuXHRcdFx0XHR5OiB0aXRsZS55XG5cdFx0XHRcdHNjYWxlOiBAb3B0aW9ucy5saW5rRm9udFNpemUvQG9wdGlvbnMudGl0bGVGb250U2l6ZVxuXG5cdFx0XHRALmxpbmsgPSBsaW5rXG5cblx0XHRcdGlmIEBvcHRpb25zLmZvbnRGYW1pbHkgIT0gXCJcIiB0aGVuIGxpbmsuZm9udEZhbWlseSA9IEBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRcdGlmIEBvcHRpb25zLmxpbmtBY3Rpb24gIT0gbm9vcFxuXHRcdFx0XHRsaW5rLm9uQ2xpY2sgPT5cblx0XHRcdFx0XHRAb3B0aW9ucy5saW5rQWN0aW9uKClcblxuXHRcdCMgaXRlbSBjcmVhdGlvblxuXHRcdGNyZWF0ZUl0ZW0gPSAoaSA9IDAsIHBhcmVudCA9IG51bGwsIGhlcm8gPSBmYWxzZSkgPT5cblx0XHRcdGlmIGhlcm8gPT0gZmFsc2UgYW5kIEBvcHRpb25zLndyYXAgPT0gdHJ1ZVxuXHRcdFx0XHRpbmRleE9mZnNldCA9IDFcblx0XHRcdFx0aXRlbVdpZHRoID0gQG9wdGlvbnMuc21hbGxJdGVtV2lkdGhcblx0XHRcdFx0aXRlbUhlaWdodCA9IEBvcHRpb25zLnNtYWxsSXRlbUhlaWdodFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRpbmRleE9mZnNldCA9IDBcblx0XHRcdFx0aXRlbVdpZHRoID0gQG9wdGlvbnMuaXRlbVdpZHRoXG5cdFx0XHRcdGl0ZW1IZWlnaHQgPSBAb3B0aW9ucy5pdGVtSGVpZ2h0XG5cdFx0XHRpdGVtID0gbmV3IExheWVyXG5cdFx0XHRcdG5hbWU6IFwiaXRlbVwiICsgKGkgKyBpbmRleE9mZnNldClcblx0XHRcdFx0d2lkdGg6IGl0ZW1XaWR0aFxuXHRcdFx0XHRoZWlnaHQ6IGl0ZW1IZWlnaHRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImNsZWFyXCJcblx0XHRcdFx0Y2xpcDogZmFsc2Vcblx0XHRcdGlmIHBhcmVudCBpbnN0YW5jZW9mIFBhZ2VDb21wb25lbnRcblx0XHRcdFx0cGFyZW50LmFkZFBhZ2UoaXRlbSlcblx0XHRcdGVsc2Vcblx0XHRcdFx0aXRlbS5wYXJlbnQgPSBwYXJlbnRcblxuXHRcdFx0IyBpdGVtIGNlbGxcblx0XHRcdGJsb2NrID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogaXRlbVxuXHRcdFx0XHRuYW1lOiBcImJsb2NrXCIgKyAoaSArIGluZGV4T2Zmc2V0KVxuXHRcdFx0XHR3aWR0aDogaXRlbVdpZHRoXG5cdFx0XHRcdGhlaWdodDogaXRlbUhlaWdodFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IEBvcHRpb25zLmJveENvbG9yXG5cdFx0XHRcdGJvcmRlclJhZGl1czogQG9wdGlvbnMuaXRlbUJvcmRlclJhZGl1c1xuXHRcdFx0XHRpbWFnZTogXCJpbWFnZXMvXCIgKyBAb3B0aW9ucy5pbWFnZVByZWZpeCArIChpICsgaW5kZXhPZmZzZXQpICsgXCIuXCIgKyBAb3B0aW9ucy5pbWFnZVN1ZmZpeFxuXHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRcImJhY2tncm91bmQtcG9zaXRpb25cIiA6IFwiY2VudGVyIGNlbnRlclwiXG5cdFx0XHRcdFx0XCJiYWNrZ3JvdW5kLXNpemVcIiA6IFwiY292ZXJcIlxuXG5cdFx0XHRpdGVtLmNlbGwgPSBibG9ja1xuXG5cdFx0XHQjIGFzc2lnbiBpdGVtIGFjdGlvblxuXHRcdFx0aWYgQG9wdGlvbnMuaXRlbUFjdGlvbnNbaSArIGluZGV4T2Zmc2V0XSAhPSBub29wIGFuZCBAb3B0aW9ucy5pdGVtQWN0aW9uc1tpICsgaW5kZXhPZmZzZXRdICE9IHVuZGVmaW5lZFxuXHRcdFx0XHRpdGVtLm9uQ2xpY2sgPT5cblx0XHRcdFx0XHRyZXR1cm4gaWYgcGFyZW50LnBhcmVudC5pc0RyYWdnaW5nXG5cdFx0XHRcdFx0QG9wdGlvbnMuaXRlbUFjdGlvbnNbaSArIGluZGV4T2Zmc2V0XSgpXG5cblx0XHRcdCMgaXRlbSBpY29uXG5cdFx0XHRpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlXG5cdFx0XHRcdGljb24gPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRwYXJlbnQ6IGl0ZW1cblx0XHRcdFx0XHRuYW1lOiBcImljb25cIiArIChpICsgaW5kZXhPZmZzZXQpXG5cdFx0XHRcdFx0d2lkdGg6IEBvcHRpb25zLmljb25TaXplXG5cdFx0XHRcdFx0aGVpZ2h0OiBAb3B0aW9ucy5pY29uU2l6ZVxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQG9wdGlvbnMuaWNvbkNvbG9yIG9yIEBvcHRpb25zLmJveENvbG9yXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBAb3B0aW9ucy5pY29uQm9yZGVyUmFkaXVzXG5cdFx0XHRcdFx0eTogYmxvY2subWF4WSArIEBvcHRpb25zLmljb25NYXJnaW5cblx0XHRcdFx0XHRpbWFnZTogXCJpbWFnZXMvXCIgKyBAb3B0aW9ucy5pY29uUHJlZml4ICsgKGkgKyBpbmRleE9mZnNldCkgKyBcIi5cIiArIEBvcHRpb25zLmljb25TdWZmaXhcblx0XHRcdFx0XHRzdHlsZTpcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZC1wb3NpdGlvblwiIDogXCJjZW50ZXIgY2VudGVyXCJcblx0XHRcdFx0XHRcdFwiYmFja2dyb3VuZC1zaXplXCIgOiBcImNvdmVyXCJcblxuXHRcdFx0XHRpdGVtLmljb24gPSBpY29uXG5cblx0XHRcdCMgaXRlbSB0ZXh0IGNvbnRhaW5lciwgZW5hYmxlcyB2ZXJ0aWNhbCBhbGlnbm1lbnRcblx0XHRcdHRleHRCbG9jayA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IGl0ZW1cblx0XHRcdFx0bmFtZTogXCJ0ZXh0QmxvY2tcIiArIChpICsgaW5kZXhPZmZzZXQpXG5cdFx0XHRcdHdpZHRoOiBpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlIHRoZW4gaXRlbVdpZHRoIC0gQG9wdGlvbnMuaWNvblNpemUgLSBAb3B0aW9ucy5pY29uTWFyZ2luIGVsc2UgaXRlbVdpZHRoXG5cdFx0XHRcdGhlaWdodDogaXRlbS5oZWlnaHRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcImNsZWFyXCJcblx0XHRcdFx0eDogQGNhcHRpb25BbGlnbkhvcml6b250YWwoKGlmIEBvcHRpb25zLmljb25zID09IHRydWUgdGhlbiBAb3B0aW9ucy5pY29uU2l6ZSBlbHNlIGJsb2NrLndpZHRoKSwgaGVybylcblxuXHRcdFx0aXRlbS50ZXh0QmxvY2sgPSB0ZXh0QmxvY2tcblxuXHRcdFx0IyBpdGVtIGNhcHRpb25cblx0XHRcdGNhcHRpb24gPSBuZXcgVGV4dExheWVyXG5cdFx0XHRcdHBhcmVudDogdGV4dEJsb2NrXG5cdFx0XHRcdG5hbWU6IFwiY2FwdGlvblwiICsgKGkgKyBpbmRleE9mZnNldClcblx0XHRcdFx0d2lkdGg6IHRleHRCbG9jay53aWR0aFxuXHRcdFx0XHRjb2xvcjogQG9wdGlvbnMuY2FwdGlvbkNvbG9yIG9yIEBvcHRpb25zLnRpdGxlQ29sb3Jcblx0XHRcdFx0dGV4dDogQG9wdGlvbnMuY2FwdGlvbnNbKGkgKyBpbmRleE9mZnNldCldIG9yIFwiXCJcblx0XHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRcdFx0XHRmb250V2VpZ2h0OiBAb3B0aW9ucy5jYXB0aW9uRm9udFdlaWdodFxuXHRcdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuY2FwdGlvbkZvbnRTaXplXG5cblx0XHRcdGl0ZW0uY2FwdGlvbiA9IGNhcHRpb25cblxuXHRcdFx0aWYgY2FwdGlvbi5oZWlnaHQgPiBAb3B0aW9ucy5jYXB0aW9uTWF4SGVpZ2h0XG5cdFx0XHRcdGNhcHRpb24uaGVpZ2h0ID0gQG9wdGlvbnMuY2FwdGlvbk1heEhlaWdodFxuXHRcdFx0XHRjYXB0aW9uLnRydW5jYXRlID0gdHJ1ZVxuXG5cdFx0XHRpZiBAb3B0aW9ucy5mb250RmFtaWx5ICE9IFwiXCIgdGhlbiBjYXB0aW9uLmZvbnRGYW1pbHkgPSBAb3B0aW9ucy5mb250RmFtaWx5XG5cblx0XHRcdCMgaXRlbSBzdWJjYXB0aW9uXG5cdFx0XHRpZiBAb3B0aW9ucy5zdWJjYXB0aW9ucyAhPSBbXVxuXHRcdFx0XHRzdWJjYXB0aW9uID0gbmV3IFRleHRMYXllclxuXHRcdFx0XHRcdHBhcmVudDogdGV4dEJsb2NrXG5cdFx0XHRcdFx0bmFtZTogXCJzdWJjYXB0aW9uXCIgKyAoaSArIGluZGV4T2Zmc2V0KVxuXHRcdFx0XHRcdHdpZHRoOiB0ZXh0QmxvY2sud2lkdGhcblx0XHRcdFx0XHRjb2xvcjogQG9wdGlvbnMuc3ViY2FwdGlvbkNvbG9yIG9yIEBvcHRpb25zLmNhcHRpb25Db2xvciBvciBAb3B0aW9ucy50aXRsZUNvbG9yXG5cdFx0XHRcdFx0dGV4dDogQG9wdGlvbnMuc3ViY2FwdGlvbnNbKGkgKyBpbmRleE9mZnNldCldIG9yIFwiXCJcblx0XHRcdFx0XHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdFx0XHRcdFx0Zm9udFdlaWdodDogQG9wdGlvbnMuc3ViY2FwdGlvbkZvbnRXZWlnaHRcblx0XHRcdFx0XHRmb250U2l6ZTogQG9wdGlvbnMuc3ViY2FwdGlvbkZvbnRTaXplXG5cdFx0XHRcdFx0bGV0dGVyU3BhY2luZzogLTAuNlxuXHRcdFx0XHRcdHk6IGNhcHRpb24ubWF4WSArIEBvcHRpb25zLnN1YmNhcHRpb25NYXJnaW5cblxuXHRcdFx0XHRpdGVtLnN1YmNhcHRpb24gPSBzdWJjYXB0aW9uXG5cblx0XHRcdFx0aWYgc3ViY2FwdGlvbi5oZWlnaHQgPiBAb3B0aW9ucy5zdWJjYXB0aW9uTWF4SGVpZ2h0XG5cdFx0XHRcdFx0c3ViY2FwdGlvbi5oZWlnaHQgPSBAb3B0aW9ucy5zdWJjYXB0aW9uTWF4SGVpZ2h0XG5cdFx0XHRcdFx0c3ViY2FwdGlvbi50cnVuY2F0ZSA9IHRydWVcblxuXHRcdFx0XHRpZiBAb3B0aW9ucy5mb250RmFtaWx5ICE9IFwiXCIgdGhlbiBzdWJjYXB0aW9uLmZvbnRGYW1pbHkgPSBAb3B0aW9ucy5mb250RmFtaWx5XG5cblx0XHRcdCMgcm91bmQgaXRlbSBibG9jayBpZiBzcGVjaWZpZWRcblx0XHRcdGlmIEBvcHRpb25zLnJvdW5kZWQgPT0gdHJ1ZVxuXHRcdFx0XHRibG9jay5ib3JkZXJSYWRpdXMgPSBNYXRoLm1heChAb3B0aW9ucy5pdGVtV2lkdGgsIEBvcHRpb25zLml0ZW1IZWlnaHQpLzJcblxuXHRcdFx0IyB0ZXh0IGFsaWdubWVudFxuXHRcdFx0Y2FwdGlvbi50ZXh0QWxpZ24gPSBAb3B0aW9ucy5jYXB0aW9uQWxpZ25cblx0XHRcdHN1YmNhcHRpb24/LnRleHRBbGlnbiA9IEBvcHRpb25zLmNhcHRpb25BbGlnblxuXG5cdFx0XHQjIGFkZCB0byBhcnJheVxuXHRcdFx0QC5pdGVtcy5wdXNoKGl0ZW0pXG5cblx0XHRcdCMgc2l6ZSB0ZXh0IGJsb2NrIGhlaWdodCB0byBtYXRjaCBjb250ZW50XG5cdFx0XHR0ZXh0QmxvY2suaGVpZ2h0ID0gdGV4dEJsb2NrLmNvbnRlbnRGcmFtZSgpLmhlaWdodFxuXHRcdFx0dGV4dEJsb2NrLnkgPSBAY2FwdGlvbkFsaWduVmVydGljYWwoYmxvY2suaGVpZ2h0LCBoZXJvKVxuXG5cdFx0XHQjIHNpemUgaXRlbSBoZWlnaHQgdG8gbWF0Y2ggY29udGVudFxuXHRcdFx0aXRlbS5oZWlnaHQgPSBpdGVtLmNvbnRlbnRGcmFtZSgpLmhlaWdodFxuXHRcdFx0aXRlbS53aWR0aCA9IGl0ZW0uY29udGVudEZyYW1lKCkud2lkdGhcblxuXHRcdFx0IyBjYXJvdXNlbCBtYXJpZ25zIGFyZSBhcHBsaWVkIGFmdGVyIHBhZ2UgaXMgaW4gcGxhY2Vcblx0XHRcdGlmIEAuaXRlbXMuaW5kZXhPZihpdGVtKSA+IG9mZnNldFxuXHRcdFx0XHRpdGVtLnggPSBpdGVtLnggKyBAb3B0aW9ucy5pdGVtTWFyZ2luXG5cblx0XHQjIGNyZWF0ZSBoZXJvIGNlbGxcblx0XHRpZiBAb3B0aW9ucy53cmFwID09IHRydWVcblx0XHRcdGhlcm9JdGVtQ29udGFpbmVyID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogQFxuXHRcdFx0XHRuYW1lOiBcImhlcm9JdGVtQ29udGFpbmVyXCJcblx0XHRcdFx0eTogdG9wTWFyZ2luXG5cdFx0XHRcdHg6IGlmIEBvcHRpb25zLmNlbnRlcmhlcm9JdGVtID09IHRydWUgdGhlbiBBbGlnbi5jZW50ZXIgZWxzZSBsZWZ0TWFyZ2luXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJjbGVhclwiXG5cdFx0XHRjcmVhdGVJdGVtKDAsIGhlcm9JdGVtQ29udGFpbmVyLCB0cnVlKVxuXHRcdFx0aGVyb0l0ZW1Db250YWluZXIuaGVpZ2h0ID0gaGVyb0l0ZW1Db250YWluZXIuY29udGVudEZyYW1lKCkuaGVpZ2h0XG5cdFx0XHRoZXJvSXRlbUNvbnRhaW5lci53aWR0aCA9IGhlcm9JdGVtQ29udGFpbmVyLmNvbnRlbnRGcmFtZSgpLndpZHRoXG5cblx0XHRcdEAuaGVyb0l0ZW0gPSBoZXJvSXRlbUNvbnRhaW5lci5jaGlsZHJlblswXVxuXHRcdFx0QC5oZXJvSXRlbS5uYW1lID0gXCJoZXJvSXRlbVwiXG5cblx0XHRcdCMgaGVybyB0ZXh0IGFsaWdubWVudFxuXHRcdFx0QC5oZXJvSXRlbS5jYXB0aW9uLnRleHRBbGlnbiA9IEBvcHRpb25zLmhlcm9DYXB0aW9uQWxpZ25cblx0XHRcdEAuaGVyb0l0ZW0uc3ViY2FwdGlvbj8udGV4dEFsaWduID0gQG9wdGlvbnMuaGVyb0NhcHRpb25BbGlnblxuXG5cdFx0IyBjcmVhdGUgdGhlIGNhcm91c2VsXG5cdFx0cm93ID0gbmV3IFBhZ2VDb21wb25lbnRcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0bmFtZTogXCJyb3dcIlxuXHRcdFx0eTogaWYgQG9wdGlvbnMud3JhcCA9PSB0cnVlIHRoZW4gaGVyb0l0ZW1Db250YWluZXIubWF4WSArIEBvcHRpb25zLml0ZW1NYXJnaW4gZWxzZSB0b3BNYXJnaW5cblx0XHRcdHNjcm9sbFZlcnRpY2FsOiBmYWxzZVxuXHRcdFx0c2Nyb2xsSG9yaXpvbnRhbDogdHJ1ZVxuXHRcdFx0dmVsb2NpdHlUaHJlc2hvbGQ6IDAuMVxuXHRcdFx0Y2xpcDogZmFsc2Vcblx0XHRcdG9yaWdpblg6IDBcblx0XHRcdGNvbnRlbnRJbnNldDpcblx0XHRcdFx0dG9wOiAwXG5cdFx0XHRcdHJpZ2h0OiByaWdodE1hcmdpblxuXHRcdFx0XHRib3R0b206IDBcblx0XHRcdFx0bGVmdDogbGVmdE1hcmdpblxuXG5cdFx0QC5yb3cgPSByb3dcblxuXHRcdCMgYWNjb3VudCBmb3IgYSBcInNob3J0XCIgY2Fyb3VzZWxcblx0XHRpZiBAb3B0aW9ucy5pdGVtQ291bnQgPCAyXG5cdFx0XHRyb3cuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0XHRsaW5rPy5kZXN0cm95KClcblxuXHRcdCMgYWN0dWFsbHkgcG9wdWxhdGUgdGhlIGNhcm91c2VsIHJvdyB3aXRoIGl0cyBpdGVtc1xuXHRcdGZvciBpIGluIFswLi4uQG9wdGlvbnMuaXRlbUNvdW50IC0gb2Zmc2V0XVxuXHRcdFx0Y3JlYXRlSXRlbShpLCByb3csIGZhbHNlKVxuXG5cdFx0IyBwcmV2ZW50IG92ZXJzY3JvbGxcblx0XHRyb3cub25Td2lwZUxlZnQgPT5cblx0XHRcdGlmIEBvcHRpb25zLmZvcmNlU2Nyb2xsaW5nICE9IHRydWUgYW5kIEBjaGVja0lmTmVlZHNTY3JvbGxpbmcocm93KVxuXHRcdFx0XHRtYXhQYWdlID0gQG9wdGlvbnMuaXRlbUNvdW50IC0gTWF0aC5mbG9vcihALndpZHRoIC8gKEBvcHRpb25zLml0ZW1XaWR0aCArIEBvcHRpb25zLml0ZW1NYXJnaW4pKSAtIG9mZnNldFxuXHRcdFx0XHRpZiByb3cuY29udGVudC5tYXhYIDwgQC5tYXhYXG5cdFx0XHRcdFx0cm93LnNuYXBUb1BhZ2UoQC5pdGVtc1ttYXhQYWdlXSlcblxuXHRcdCMgYWRqdXN0IGNhcm91c2VsIHRvIG1hdGNoIGNvbnRlbnRcblx0XHRyb3cud2lkdGggPSByb3cuY29udGVudC5jaGlsZHJlblswXT8ud2lkdGhcblx0XHRyb3cuY29udGVudC53aWR0aCA9IHJvdy5jb250ZW50LmNvbnRlbnRGcmFtZSgpLndpZHRoXG5cdFx0cm93LmNvbnRlbnQuaGVpZ2h0ID0gcm93LmNvbnRlbnQuY29udGVudEZyYW1lKCkuaGVpZ2h0XG5cdFx0cm93LmhlaWdodCA9IHJvdy5jb250ZW50RnJhbWUoKS5oZWlnaHRcblx0XHRyb3cuY29udGVudC5jbGlwID0gZmFsc2Vcblx0XHRyb3cuc2Nyb2xsSG9yaXpvbnRhbCA9IEBjaGVja0lmTmVlZHNTY3JvbGxpbmcocm93KVxuXHRcdEAuaGVpZ2h0ID0gQC5jb250ZW50RnJhbWUoKS5oZWlnaHQgKyBib3R0b21NYXJnaW5cblxuXHRjaGVja0lmTmVlZHNTY3JvbGxpbmc6IChsYXllciA9IG51bGwpIC0+XG5cdFx0aWYgQG9wdGlvbnMuZm9yY2VTY3JvbGxpbmcgPT0gdHJ1ZVxuXHRcdFx0bmVlZHNTY3JvbGxpbmcgPSB0cnVlXG5cdFx0ZWxzZSBpZiBsYXllci5jb250ZW50Py5jb250ZW50RnJhbWUoKS53aWR0aCA+IEAud2lkdGhcblx0XHRcdG5lZWRzU2Nyb2xsaW5nID0gdHJ1ZVxuXHRcdGVsc2Vcblx0XHRcdG5lZWRzU2Nyb2xsaW5nID0gZmFsc2Vcblx0XHRyZXR1cm4gbmVlZHNTY3JvbGxpbmdcblxuXHRjYXB0aW9uQWxpZ25WZXJ0aWNhbDogKGl0ZW1IZWlnaHQgPSAwLCBoZXJvID0gZmFsc2UpIC0+XG5cdFx0YWxpZ24gPSBpdGVtSGVpZ2h0ICsgQG9wdGlvbnMuY2FwdGlvbk1hcmdpblxuXHRcdGlmIEBvcHRpb25zLmljb25zID09IHRydWVcblx0XHRcdGFsaWduID0gaXRlbUhlaWdodCArIEBvcHRpb25zLmljb25NYXJnaW5cblx0XHRlbHNlIGlmIGhlcm8gPT0gdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMuc2lkZUhlcm9DYXB0aW9uID09IHRydWVcblx0XHRcdFx0aWYgQG9wdGlvbnMudG9wQWxpZ25IZXJvQ2FwdGlvbiA9PSB0cnVlXG5cdFx0XHRcdFx0YWxpZ24gPSBBbGlnbi50b3Bcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGFsaWduID0gQWxpZ24uY2VudGVyXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPT0gdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMudG9wQWxpZ25DYXB0aW9ucyA9PSB0cnVlXG5cdFx0XHRcdGFsaWduID0gQWxpZ24udG9wXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGFsaWduID0gQWxpZ24uY2VudGVyXG5cdFx0cmV0dXJuIGFsaWduXG5cblx0Y2FwdGlvbkFsaWduSG9yaXpvbnRhbDogKGl0ZW1XaWR0aCA9IDAsIGhlcm8gPSBmYWxzZSkgLT5cblx0XHRhbGlnbiA9IEFsaWduLmxlZnRcblx0XHRpZiBAb3B0aW9ucy5pY29ucyA9PSB0cnVlXG5cdFx0XHRhbGlnbiA9IGl0ZW1XaWR0aCArIEBvcHRpb25zLmljb25NYXJnaW5cblx0XHRlbHNlIGlmIGhlcm8gPT0gdHJ1ZVxuXHRcdFx0aWYgQG9wdGlvbnMuc2lkZUhlcm9DYXB0aW9uID09IHRydWVcblx0XHRcdFx0YWxpZ24gPSBpdGVtV2lkdGggKyBAb3B0aW9ucy5jYXB0aW9uTWFyZ2luXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPT0gdHJ1ZVxuXHRcdFx0YWxpZ24gPSBpdGVtV2lkdGggKyBAb3B0aW9ucy5jYXB0aW9uTWFyZ2luXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5zaWRlQ2FwdGlvbnMgPT0gdHJ1ZVxuXHRcdFx0YWxpZ24gPSBpdGVtV2lkdGggKyBAb3B0aW9ucy5jYXB0aW9uTWFyZ2luXG5cdFx0cmV0dXJuIGFsaWduXG5tb2R1bGUuZXhwb3J0cyA9IENhcm91c2VsQ29tcG9uZW50XG4iLCJVdGlscy5jeWNsZSA9IC0+XG5cdGFyZ3MgPSBVdGlscy5hcnJheUZyb21Bcmd1bWVudHMgYXJndW1lbnRzWzBdXG5cdGN1cnIgPSAtMVxuXG5cdHJldHVybiAoZGlyID0gdHJ1ZSkgLT5cblx0XHRpZiBkaXJcblx0XHRcdGN1cnIrK1xuXHRcdFx0Y3VyciA9IDAgaWYgY3VyciA+PSBhcmdzLmxlbmd0aFxuXHRcdGVsc2Vcblx0XHRcdGN1cnItLVxuXHRcdFx0Y3VyciA9IChhcmdzLmxlbmd0aC0xKSBpZiBjdXJyIDwgMFxuXHRcdHJldHVybiBhcmdzW2N1cnJdXG4iLCJjbGFzcyBleHBvcnRzLlN0YXR1c0JhciBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjRkZGXCJcblx0XHRcdHdpZHRoOiBTY3JlZW4ud2lkdGhcblx0XHRcdGhlaWdodDogODhcblx0XHRcdG9wYWNpdHk6IDAuOTZcblx0XHRcdGltYWdlOiBcImltYWdlcy9zdGF0dXNiYXJibGFjay5wbmdcIlxuXHRcdFx0ejo0XG5cdFx0XHRiYWNrZ3JvdW5kQmx1ciA9IDQwXG5cdFx0QHRvcGJhciA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IFNjcmVlbi53aWR0aFxuXHRcdFx0aGVpZ2h0OiA4OFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiNGRkZcIlxuXHRcblx0XHRAcGFnZVRpdGxlID0gbmV3IFRleHRMYXllclxuXHRcdFx0Zm9udFNpemU6MzRcblx0XHRcdGZvbnRXZWlnaHQ6ODAwXG5cdFx0XHRjb2xvcjpcIiMyRDI5MjlcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0XHRcdHg6QWxpZ24uY2VudGVyXG5cdFx0XHR3aWR0aDpTY3JlZW4ud2lkdGhcblxuXHRcdEB0b3BiYXJSaWdodEljb24wMSA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6IDQwXG5cdFx0XHRoZWlnaHQ6NDBcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0eDogQWxpZ24ucmlnaHQoLTE2KVxuXHRcdFx0aW1hZ2U6IFwiaW1hZ2VzL25hdl9pY29uX21lc3NAMnguc3ZnXCJcblx0XHRcdFxuXHRcdEB0b3BiYXJMZWZ0SWNvbjAxID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDogNDBcblx0XHRcdGhlaWdodDo0MFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHR4OiBBbGlnbi5sZWZ0KDE2KVxuXHRcdFx0aW1hZ2U6IFwiaW1hZ2VzL25hdl9pY29uX2JhY2tAMnguc3ZnXCJcblxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QHRvcGJhci5wYXJlbnQgPSBAXG5cdFx0QHRvcGJhci55ID0gODhcblx0XHRAcGFnZVRpdGxlLnBhcmVudCA9IEB0b3BiYXJcblx0XHRAdG9wYmFyUmlnaHRJY29uMDEucGFyZW50ID0gQHRvcGJhclxuXHRcdEB0b3BiYXJSaWdodEljb24wMS55ID0gQWxpZ24uY2VudGVyKClcblx0XHRAdG9wYmFyTGVmdEljb24wMS5wYXJlbnQgPSBAdG9wYmFyXG5cdFx0QHRvcGJhckxlZnRJY29uMDEueSA9IEFsaWduLmNlbnRlcigpXG5cdFx0QHBhZ2VUaXRsZS55ID0gQWxpZ24uY2VudGVyKClcblx0XHRAcGFnZVRpdGxlLnRleHQgPSBcIlBhZ2VOYW1lXCJcblx0XHRcblx0XG4iLCJjbGFzcyBleHBvcnRzLlByb2R1Y3RMaXN0IGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwiI0ZGRlwiXG5cdFx0XHRoZWlnaHQ6IDM4MFxuXHRcdFx0d2lkdGg6MzI4XG5cdFx0XG5cdFx0QHByb2R1Y3RQaWMgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOjMyOFxuXHRcdFx0aGVpZ2h0OjI0NFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwiI0Y1RjVGNVwiXG5cdFx0XHRpbWFnZTpcImltYWdlcy9kYWlseWJlc3RwaWMwMS5wbmdcIlxuXHRcdFxuXHRcdEBwcm9kdWN0TmFtZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjMyOFxuXHRcdFx0aGVpZ2h0OjMyXG5cdFx0XHRmb250U2l6ZToyOFxuXHRcdFx0Y29sb3I6XCIjMjEyMTIxXCJcblx0XHRcdHRleHQ6XCJwcm9kdWN0TmFtZUhlcmVcIlxuXHRcdFx0dGV4dEFsaWduOlwibGVmdFwiXG5cblx0XHRAcHJvZHVjdFN1YiA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjMyOFxuXHRcdFx0aGVpZ2h0OjI0XG5cdFx0XHRmb250U2l6ZToyNFxuXHRcdFx0Y29sb3I6XCIjNjE2MTYxXCJcblx0XHRcdHRleHQ6XCJwcm9kdWN0c3VidGl0bGVoZXJlXCJcblx0XHRcdHRleHRBbGlnbjpcImxlZnRcIlxuXG5cdFx0QHByb2R1Y3RQcmljZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjMyOFxuXHRcdFx0aGVpZ2h0OjQwXG5cdFx0XHRmb250U2l6ZTozNlxuXHRcdFx0Y29sb3I6XCIjRTM0NTNEXCJcblx0XHRcdHRleHQ6XCLCpTAuMDBcIlxuXHRcdFx0dGV4dEFsaWduOlwibGVmdFwiXG5cdFx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXHRcdFxuXHRcdEBwcm9kdWN0UGljLnBhcmVudCA9IEBcblx0XHRAcHJvZHVjdFBpYy55ID0gMFxuXHRcdEBwcm9kdWN0TmFtZS5wYXJlbnQgPSBAXG5cdFx0QHByb2R1Y3ROYW1lLnkgPSAyNTJcblx0XHRAcHJvZHVjdFN1Yi5wYXJlbnQgPSBAXG5cdFx0QHByb2R1Y3RTdWIueSA9IEBwcm9kdWN0TmFtZS5oZWlnaHQrQHByb2R1Y3ROYW1lLnkrOFxuXHRcdEBwcm9kdWN0UHJpY2UucGFyZW50ID0gQFxuXHRcdEBwcm9kdWN0UHJpY2UueSA9IEBwcm9kdWN0U3ViLnkrQHByb2R1Y3RTdWIuaGVpZ2h0Kzhcblx0XHRALm9uVG91Y2hTdGFydCBAVG91Y2hTdGFydFxuXHRcdEAub25Ub3VjaEVuZCBAVG91Y2hFbmRcblx0XHRALm9uVG91Y2hNb3ZlIEBUb3VjaE1vdmVcblxuXHRUb3VjaFN0YXJ0OiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDkwXG5cdFRvdWNoRW5kOiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMFxuXHRUb3VjaE1vdmU6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gMTAwIiwiY2xhc3MgZXhwb3J0cy5Mb2FuQ2FyZCBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdHdpZHRoOlNjcmVlbi53aWR0aC02NFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwiI0ZGRlwiXG5cdFx0XHRoZWlnaHQ6IDI4OFxuXHRcdFx0eDpBbGlnbi5jZW50ZXJcblx0XHRcblx0XHRAbG9hbkNhcmRUaXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6MzJcblx0XHRcdHk6NDBcblx0XHRcdGZvbnRTaXplOiAzMlxuXHRcdFx0Zm9udEZhbWlseTogXCJQaW5nRmFuZyBUQ1wiXG5cdFx0XHRjb2xvcjpcIiMyMTIxMjFcIlxuXHRcdFx0Zm9udFdlaWdodDogNTAwXG5cdFx0XHRsaW5lSGVpZ2h0OiAxXG5cdFx0XHR0ZXh0QWxpZ246XCJsZWZ0XCJcblx0XHRcdHRleHQ6IFwi5Yqg6L295Y2h54mH5ZCN56ewLi4uXCJcblx0XHRcblx0XHRAbG9hbkNhcmRTdWJ0aXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6MzJcblx0XHRcdGZvbnRTaXplOjI0XG5cdFx0XHRmb250RmFtaWx5OiBcIlBpbmdGYW5nIFRDXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDQwMFxuXHRcdFx0Y29sb3I6XCJyZ2JhKDE3MSwxNjIsMTY1LDEpXCJcblx0XHRcdHRleHQ6XCLliqDovb3ljaHniYfmj4/ov7AuLi5cIlxuXHRcdFx0dGV4dEFsaWduOlwibGVmdFwiXG5cblx0XHRAbG9hbkNhcmRoYW4wMSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHg6MzJcblx0XHRcdHRleHQ6XCLpop3luqbojIPlm7Qo5YWDKVwiXG5cdFx0XHRmb250U2l6ZToyMlxuXHRcdFx0Zm9udEZhbWlseTogXCJQaW5nRmFuZyBUQ1wiXG5cdFx0XHRmb250V2VpZ2h0OiA0MDBcblx0XHRcdGNvbG9yOlwicmdiYSgxNzEsMTYyLDE2NSwxKVwiXG5cdFx0XHR0ZXh0QWxpZ246XCJsZWZ0XCJcblxuXHRcdEBsb2FuQ2FyZGhhbjAyID0gbmV3IFRleHRMYXllclxuXHRcdFx0dGV4dDpcIuWIhuacn+iMg+WbtCjmnJ8pXCJcblx0XHRcdGZvbnRTaXplOjIyXG5cdFx0XHRmb250RmFtaWx5OiBcIlBpbmdGYW5nIFRDXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDQwMFxuXHRcdFx0Y29sb3I6XCJyZ2JhKDE3MSwxNjIsMTY1LDEpXCJcblx0XHRcdHRleHRBbGlnbjpcInJpZ2h0XCJcblxuXHRcdEBsb2FuQ2FyZExpbWl0ID0gbmV3IFRleHRMYXllclxuXHRcdFx0eDozMlxuXHRcdFx0dGV4dDpcIi0tXCJcblx0XHRcdGZvbnRTaXplOjQwXG5cdFx0XHRmb250RmFtaWx5OiBcIlBpbmdGYW5nIFRDXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMFxuXHRcdFx0Y29sb3I6XCJyZ2JhKDIyNyw2OSw2MSwxKVwiXG5cdFx0XHR0ZXh0QWxpZ246XCJsZWZ0XCJcblxuXHRcdEBsb2FuQ2FyZE1vbiA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjIwMFxuXHRcdFx0dGV4dDpcIi0tXCJcblx0XHRcdGZvbnRTaXplOjMyXG5cdFx0XHRmb250RmFtaWx5OiBcIlBpbmdGYW5nIFRDXCJcblx0XHRcdGZvbnRXZWlnaHQ6IDUwMFxuXHRcdFx0Y29sb3I6XCJyZ2JhKDMzLDMzLDMzLDEpXCJcblx0XHRcdHRleHRBbGlnbjpcInJpZ2h0XCJcblxuXHRcdEBsb2FuQ2FyZEljb24gPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOjE5MlxuXHRcdFx0aGVpZ2h0OjE5MlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOm51bGxcblx0XHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGxvYW5DYXJkVGl0bGUucGFyZW50ID0gQFxuXHRcdEBsb2FuQ2FyZFRpdGxlLnkgPSA0MFxuXHRcdEBsb2FuQ2FyZFN1YnRpdGxlLnBhcmVudCA9IEBcblx0XHRAbG9hbkNhcmRTdWJ0aXRsZS55ID0gQGxvYW5DYXJkVGl0bGUueSs1NlxuXHRcdEBsb2FuQ2FyZGhhbjAxLnBhcmVudCA9IEBcblx0XHRAbG9hbkNhcmRoYW4wMS55ID0gMjMyXG5cdFx0QGxvYW5DYXJkaGFuMDIucGFyZW50ID0gQFxuXHRcdEBsb2FuQ2FyZGhhbjAyLnggPSBBbGlnbi5yaWdodCgtMzIpXG5cdFx0QGxvYW5DYXJkaGFuMDIueSA9IEBsb2FuQ2FyZGhhbjAxLnlcblx0XHRAbG9hbkNhcmRMaW1pdC5wYXJlbnQgPSBAXG5cdFx0QGxvYW5DYXJkTGltaXQueSA9IEBsb2FuQ2FyZFN1YnRpdGxlLnkrNzJcblx0XHRAbG9hbkNhcmRNb24ucGFyZW50ID0gQFxuXHRcdEBsb2FuQ2FyZE1vbi55ID0gQGxvYW5DYXJkU3VidGl0bGUueSs3MlxuXHRcdEBsb2FuQ2FyZE1vbi54ID0gQWxpZ24ucmlnaHQoLTMyKVxuXHRcdEBsb2FuQ2FyZEljb24ucGFyZW50ID0gQFxuXHRcdEBsb2FuQ2FyZEljb24ueSA9IC0yNFxuXHRcdEBsb2FuQ2FyZEljb24ueCA9IEFsaWduLnJpZ2h0XG5cblx0XHRALm9uVG91Y2hTdGFydCBAVG91Y2hTdGFydFxuXHRcdEAub25Ub3VjaEVuZCBAVG91Y2hFbmRcblx0XHRALm9uVG91Y2hNb3ZlIEBUb3VjaE1vdmVcblxuXHRUb3VjaFN0YXJ0OiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDkwXG5cdFRvdWNoRW5kOiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMFxuXHRUb3VjaE1vdmU6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gMTAwIiwiY2xhc3MgZXhwb3J0cy5MaXN0V2l0aEljb24gZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCIjRkZGXCJcblx0XHRcdGhlaWdodDogOTZcblx0XHRcdHdpZHRoOlNjcmVlbi53aWR0aFxuXHRcdFxuXHRcdEBsaXN0X25hbWUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR3aWR0aDozMjhcblx0XHRcdGhlaWdodDo5NlxuXHRcdFx0bGluZUhlaWdodDozLjRcblx0XHRcdGZvbnRTaXplOiAyOFxuXHRcdFx0Zm9udEZhbWlseTogXCJQaW5nRmFuZyBTQ1wiXG5cdFx0XHRmb250V2VpZ2h0OiA0MDBcblx0XHRcdGxldHRlclNwYWNpbmc6IDAuMFxuXHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRcdFx0Y29sb3I6IFwicmdiYSgzMiwzMiwzMiwxKVwiXG5cdFx0XHRcblx0XHRcblx0XHRAbGlzdF9pY29uID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDo0MFxuXHRcdFx0aGVpZ2h0OjQwXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6bnVsbFxuXHRcdFx0aW1hZ2U6XCJcIlxuXG5cdFx0QGxpc3RfYXJyb3cgPSBuZXcgTGF5ZXJcblx0XHRcdHdpZHRoOjkuNVxuXHRcdFx0aGVpZ2h0OjE5XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6bnVsbFxuXHRcdFx0aW1hZ2U6XCJpbWFnZXMvYWNjb3VudC9hcnJvdy5zdmdcIlxuXHRcdFx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHRAbGlzdF9uYW1lLnBhcmVudCA9IEBcblx0XHRAbGlzdF9uYW1lLnkgPSBBbGlnbi5jZW50ZXJcblx0XHRAbGlzdF9uYW1lLnggPSAxMjBcblx0XHRAbGlzdF9pY29uLnBhcmVudCA9IEBcblx0XHRAbGlzdF9pY29uLnkgPSAyOFxuXHRcdEBsaXN0X2ljb24ueCA9IDQ0XG5cdFx0QGxpc3RfYXJyb3cucGFyZW50ID0gQFxuXHRcdEBsaXN0X2Fycm93LnkgPSBBbGlnbi5jZW50ZXJcblx0XHRAbGlzdF9hcnJvdy54ID0gQWxpZ24ucmlnaHQoLTQ4KVxuXHRcdEAub25Ub3VjaFN0YXJ0IEBUb3VjaFN0YXJ0XG5cdFx0QC5vblRvdWNoRW5kIEBUb3VjaEVuZFxuXHRcdEAub25Ub3VjaE1vdmUgQFRvdWNoTW92ZVxuXG5cdFRvdWNoU3RhcnQ6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gOTBcblx0VG91Y2hFbmQ6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gMTAwXG5cdFRvdWNoTW92ZTogPT5cblx0XHRALmJyaWdodG5lc3MgPSAxMDAiLCJjbGFzcyBleHBvcnRzLkljb25zTmF2QmFyIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRfLmRlZmF1bHRzIEBvcHRpb25zLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOlwiI0ZGRlwiXG5cdFx0XHRoZWlnaHQ6IDE2MFxuXHRcdFxuXHRcdEBuYXZJY29uUGljID0gbmV3IExheWVyXG5cdFx0XHR3aWR0aDo2NFxuXHRcdFx0aGVpZ2h0OjY0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJudWxsXCJcblx0XHRcdGltYWdlOlwiaW1hZ2VzL25hdl9pY29uMDEuc3ZnXCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIiNGNUY1RjVcIlxuXHRcdFxuXHRcdEBuYXZJY29uTmFtZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdGhlaWdodDo0MFxuXHRcdFx0Zm9udFNpemU6MjRcblx0XHRcdGNvbG9yOlwiIzJEMjkyOVwiXG5cdFx0XHR0ZXh0OlwiaWNvbm5hbWVcIlxuXHRcdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QG5hdkljb25QaWMucGFyZW50ID0gQFxuXHRcdEBuYXZJY29uUGljLnggPSBBbGlnbi5jZW50ZXJcblx0XHRAbmF2SWNvblBpYy55ID0gMzJcblx0XHRAbmF2SWNvbk5hbWUucGFyZW50ID0gQFxuXHRcdEBuYXZJY29uTmFtZS55ID0gMTEyXG5cdFx0QG5hdkljb25OYW1lLndpZHRoID0gQC53aWR0aFxuXHRcdEAub25Ub3VjaFN0YXJ0IEBUb3VjaFN0YXJ0XG5cdFx0QC5vblRvdWNoRW5kIEBUb3VjaEVuZFxuXHRcdEAub25Ub3VjaE1vdmUgQFRvdWNoRW5kXG5cblx0VG91Y2hTdGFydDogPT5cblx0XHRALmJyaWdodG5lc3MgPSA5MFxuXHRUb3VjaEVuZDogPT5cblx0XHRALmJyaWdodG5lc3MgPSAxMDBcblx0VG91Y2hNb3ZlOiA9PlxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMCIsImNsYXNzIGV4cG9ydHMuQnV0dG9uIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHRAb3B0aW9ucy5kaXNhYmxlZCA/PSBmYWxzZVxuXHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IFwiI0YxNDY3NlwiXG5cdFx0QG9wdGlvbnMud2lkdGggPSAyNDBcblx0XHRAb3B0aW9ucy5oZWlnaHQgPSA4MFxuXHRcdFxuXHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIHRydWVcblx0XHRcdEBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9XCIjYmRiZGJkXCJcblx0XHRcblx0XHRAbGFiZWwgPSBuZXcgVGV4dExheWVyXG5cdFx0XHRmb250U2l6ZToyOFxuXHRcdFx0Y29sb3I6XCIjRkZGXCJcblx0XHRcdHRleHRBbGlnbjpcImNlbnRlclwiXG5cdFx0QGxhYmVsLm15U3VwZXJTZXh5Rm9udCA/PSBcIidTb3VyY2UgU2FucycsIHNhbnMgc2VyaWZcIlxuXHRcdFx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHRAbGFiZWwucGFyZW50ID0gQFxuXHRcdEBsYWJlbC54ID0gQWxpZ24uY2VudGVyXG5cdFx0QGxhYmVsLnkgPSBBbGlnbi5jZW50ZXJcblxuXHRcdCNFdmVudHNcblx0XHRALm9uVG91Y2hTdGFydCBAVG91Y2hTdGFydFxuXHRcdEAub25Ub3VjaE1vdmUgQFRvdWNoTW92ZVxuXHRcdEAub25Ub3VjaEVuZCBAVG91Y2hFbmRcblx0XG5cdFxuXHRAZGVmaW5lICdkaXNhYmxlZCcsXG5cdFx0Z2V0OiAtPlxuXHRcdFx0QG9wdGlvbnMuZGlzYWJsZWRcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBvcHRpb25zLmRpc2FibGVkID0gdmFsdWVcblx0XHRcdGlmIEBvcHRpb25zLmRpc2FibGVkIGlzIHRydWVcblx0XHRcdFx0QGJhY2tncm91bmRDb2xvciA9IFwiI2JkYmRiZFwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBiYWNrZ3JvdW5kQ29sb3IgPSBcIiNGMTQ2NzZcIlx0XG5cdFx0XG5cdCNGdW5jdGlvbnNcblx0VG91Y2hTdGFydDogPT5cblx0XHRALmJyaWdodG5lc3MgPSA5MFxuXHRUb3VjaEVuZDogPT5cdFxuXHRcdEAuYnJpZ2h0bmVzcyA9IDEwMFxuXHRUb3VjaE1vdmU6ID0+XG5cdFx0QC5icmlnaHRuZXNzID0gMTAwIiwiY2xhc3MgZXhwb3J0cy5Bbm5vdW5jZUJhciBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIiNGRkZcIlxuXHRcdFx0d2lkdGg6IFNjcmVlbi53aWR0aFxuXHRcdFx0aGVpZ2h0OiA4MFxuXHRcdFxuXHRcdEBhbm5vdWNlVGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdFx0XHR4OiA1NlxuXHRcdFx0aGVpZ2h0OjgwXG5cdFx0XHRwYWRkaW5nOjI0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJudWxsXCJcblx0XHRcdHRleHQ6IFwiV2hlYXQgd2FsbGV0IGdvZGRlc3MgZmVzdGl2YWwgYWN0aXZpdHkuLi5cIlxuXHRcdFx0Zm9udFNpemU6MjRcblx0XHRcdGNvbG9yOlwiIzJEMjkyOVwiXG5cdFx0XHRmb250V2VpZ2h0OjQwMFxuXHRcdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRcblx0XHRAYW5ub3VjZUJ1dHRvbiA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdHdpZHRoOjgwXG5cdFx0XHRoZWlnaHQ6ODBcblx0XHRcdHg6QWxpZ24ucmlnaHQoLTE2KVxuXHRcdFx0Zm9udFNpemU6MjRcblx0XHRcdGxpbmVIZWlnaHQ6My4yXG5cdFx0XHRjb2xvcjpcIiM5ZTllOWVcIlxuXHRcdFx0dGV4dDpcIm1vcmVcIlxuXHRcdFx0dGV4dEFsaWduOlwiY2VudGVyXCJcblx0XHRcdGJhY2tncm91bmRDb2xvcjpcIiNGRkZcIlxuXHRcdFxuXHRcdEBhbm5vdWNlSWNvbiA9IG5ldyBMYXllclxuXHRcdFx0d2lkdGg6NDBcblx0XHRcdGhlaWdodDo0MFxuXHRcdFx0eDpBbGlnbi5sZWZ0KDI0KVxuXHRcdFx0aW1hZ2U6XCJpbWFnZXMvYW5ub3VjZWJhcmljb24uc3ZnXCJcblx0XHRcdFxuXHRcdHN1cGVyIEBvcHRpb25zXG5cdFx0XG5cdFx0QGFubm91Y2VUaXRsZS5wYXJlbnQgPSBAXG5cdFx0QGFubm91Y2VUaXRsZS55ID0gQWxpZ24uY2VudGVyXG5cdFx0QGFubm91Y2VCdXR0b24ucGFyZW50ID0gQFxuXHRcdEBhbm5vdWNlQnV0dG9uLnkgPSBBbGlnbi5jZW50ZXJcblx0XHRAYW5ub3VjZUljb24ucGFyZW50ID0gQFxuXHRcdEBhbm5vdWNlSWNvbi55ID0gQWxpZ24uY2VudGVyXG5cdFx0QGFubm91Y2VCdXR0b24ub25Ub3VjaFN0YXJ0IEBUb3VjaFN0YXJ0XG5cdFx0QGFubm91Y2VCdXR0b24ub25Ub3VjaEVuZCBAVG91Y2hFbmRcblx0XHRAYW5ub3VjZUJ1dHRvbi5vblRvdWNoTW92ZSBAVG91Y2hFbmRcblxuXHRUb3VjaFN0YXJ0OiA9PlxuXHRcdEBhbm5vdWNlQnV0dG9uLmJyaWdodG5lc3MgPSA5NlxuXHRUb3VjaEVuZDogPT5cblx0XHRAYW5ub3VjZUJ1dHRvbi5icmlnaHRuZXNzID0gMTAwXG5cdFRvdWNoTW92ZTogPT5cblx0XHRAYW5ub3VjZUJ1dHRvbi5icmlnaHRuZXNzID0gMTAwIiwiIWZ1bmN0aW9uKGEsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpOmEuQ291bnRVcD1uKCl9KHRoaXMsZnVuY3Rpb24oYSxuLHQpe3ZhciBlPWZ1bmN0aW9uKGEsbix0LGUsaSxyKXtmdW5jdGlvbiBvKGEpe3ZhciBuLHQsZSxpLHIsbyxzPWE8MDtpZihhPU1hdGguYWJzKGEpLnRvRml4ZWQobC5kZWNpbWFscyksYSs9XCJcIixuPWEuc3BsaXQoXCIuXCIpLHQ9blswXSxlPW4ubGVuZ3RoPjE/bC5vcHRpb25zLmRlY2ltYWwrblsxXTpcIlwiLGwub3B0aW9ucy51c2VHcm91cGluZyl7Zm9yKGk9XCJcIixyPTAsbz10Lmxlbmd0aDtyPG87KytyKTAhPT1yJiZyJTM9PT0wJiYoaT1sLm9wdGlvbnMuc2VwYXJhdG9yK2kpLGk9dFtvLXItMV0raTt0PWl9cmV0dXJuIGwub3B0aW9ucy5udW1lcmFscy5sZW5ndGgmJih0PXQucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gbC5vcHRpb25zLm51bWVyYWxzWythXX0pLGU9ZS5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBsLm9wdGlvbnMubnVtZXJhbHNbK2FdfSkpLChzP1wiLVwiOlwiXCIpK2wub3B0aW9ucy5wcmVmaXgrdCtlK2wub3B0aW9ucy5zdWZmaXh9ZnVuY3Rpb24gcyhhLG4sdCxlKXtyZXR1cm4gdCooLU1hdGgucG93KDIsLTEwKmEvZSkrMSkqMTAyNC8xMDIzK259ZnVuY3Rpb24gdShhKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgYSYmIWlzTmFOKGEpfXZhciBsPXRoaXM7aWYobC52ZXJzaW9uPWZ1bmN0aW9uKCl7cmV0dXJuXCIxLjkuM1wifSxsLm9wdGlvbnM9e3VzZUVhc2luZzohMCx1c2VHcm91cGluZzohMCxzZXBhcmF0b3I6XCIsXCIsZGVjaW1hbDpcIi5cIixlYXNpbmdGbjpzLGZvcm1hdHRpbmdGbjpvLHByZWZpeDpcIlwiLHN1ZmZpeDpcIlwiLG51bWVyYWxzOltdfSxyJiZcIm9iamVjdFwiPT10eXBlb2Ygcilmb3IodmFyIG0gaW4gbC5vcHRpb25zKXIuaGFzT3duUHJvcGVydHkobSkmJm51bGwhPT1yW21dJiYobC5vcHRpb25zW21dPXJbbV0pO1wiXCI9PT1sLm9wdGlvbnMuc2VwYXJhdG9yP2wub3B0aW9ucy51c2VHcm91cGluZz0hMTpsLm9wdGlvbnMuc2VwYXJhdG9yPVwiXCIrbC5vcHRpb25zLnNlcGFyYXRvcjtmb3IodmFyIGQ9MCxjPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxmPTA7ZjxjLmxlbmd0aCYmIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7KytmKXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93W2NbZl0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tjW2ZdK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fHdpbmRvd1tjW2ZdK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEsbil7dmFyIHQ9KG5ldyBEYXRlKS5nZXRUaW1lKCksZT1NYXRoLm1heCgwLDE2LSh0LWQpKSxpPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YSh0K2UpfSxlKTtyZXR1cm4gZD10K2UsaX0pLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoYSl9KSxsLmluaXRpYWxpemU9ZnVuY3Rpb24oKXtyZXR1cm4hIWwuaW5pdGlhbGl6ZWR8fChsLmVycm9yPVwiXCIsbC5kPVwic3RyaW5nXCI9PXR5cGVvZiBhP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpOmEsbC5kPyhsLnN0YXJ0VmFsPU51bWJlcihuKSxsLmVuZFZhbD1OdW1iZXIodCksdShsLnN0YXJ0VmFsKSYmdShsLmVuZFZhbCk/KGwuZGVjaW1hbHM9TWF0aC5tYXgoMCxlfHwwKSxsLmRlYz1NYXRoLnBvdygxMCxsLmRlY2ltYWxzKSxsLmR1cmF0aW9uPTFlMypOdW1iZXIoaSl8fDJlMyxsLmNvdW50RG93bj1sLnN0YXJ0VmFsPmwuZW5kVmFsLGwuZnJhbWVWYWw9bC5zdGFydFZhbCxsLmluaXRpYWxpemVkPSEwLCEwKToobC5lcnJvcj1cIltDb3VudFVwXSBzdGFydFZhbCAoXCIrbitcIikgb3IgZW5kVmFsIChcIit0K1wiKSBpcyBub3QgYSBudW1iZXJcIiwhMSkpOihsLmVycm9yPVwiW0NvdW50VXBdIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiLCExKSl9LGwucHJpbnRWYWx1ZT1mdW5jdGlvbihhKXt2YXIgbj1sLm9wdGlvbnMuZm9ybWF0dGluZ0ZuKGEpO1wiSU5QVVRcIj09PWwuZC50YWdOYW1lP3RoaXMuZC52YWx1ZT1uOlwidGV4dFwiPT09bC5kLnRhZ05hbWV8fFwidHNwYW5cIj09PWwuZC50YWdOYW1lP3RoaXMuZC50ZXh0Q29udGVudD1uOnRoaXMuZC5pbm5lckhUTUw9bn0sbC5jb3VudD1mdW5jdGlvbihhKXtsLnN0YXJ0VGltZXx8KGwuc3RhcnRUaW1lPWEpLGwudGltZXN0YW1wPWE7dmFyIG49YS1sLnN0YXJ0VGltZTtsLnJlbWFpbmluZz1sLmR1cmF0aW9uLW4sbC5vcHRpb25zLnVzZUVhc2luZz9sLmNvdW50RG93bj9sLmZyYW1lVmFsPWwuc3RhcnRWYWwtbC5vcHRpb25zLmVhc2luZ0ZuKG4sMCxsLnN0YXJ0VmFsLWwuZW5kVmFsLGwuZHVyYXRpb24pOmwuZnJhbWVWYWw9bC5vcHRpb25zLmVhc2luZ0ZuKG4sbC5zdGFydFZhbCxsLmVuZFZhbC1sLnN0YXJ0VmFsLGwuZHVyYXRpb24pOmwuY291bnREb3duP2wuZnJhbWVWYWw9bC5zdGFydFZhbC0obC5zdGFydFZhbC1sLmVuZFZhbCkqKG4vbC5kdXJhdGlvbik6bC5mcmFtZVZhbD1sLnN0YXJ0VmFsKyhsLmVuZFZhbC1sLnN0YXJ0VmFsKSoobi9sLmR1cmF0aW9uKSxsLmNvdW50RG93bj9sLmZyYW1lVmFsPWwuZnJhbWVWYWw8bC5lbmRWYWw/bC5lbmRWYWw6bC5mcmFtZVZhbDpsLmZyYW1lVmFsPWwuZnJhbWVWYWw+bC5lbmRWYWw/bC5lbmRWYWw6bC5mcmFtZVZhbCxsLmZyYW1lVmFsPU1hdGgucm91bmQobC5mcmFtZVZhbCpsLmRlYykvbC5kZWMsbC5wcmludFZhbHVlKGwuZnJhbWVWYWwpLG48bC5kdXJhdGlvbj9sLnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobC5jb3VudCk6bC5jYWxsYmFjayYmbC5jYWxsYmFjaygpfSxsLnN0YXJ0PWZ1bmN0aW9uKGEpe2wuaW5pdGlhbGl6ZSgpJiYobC5jYWxsYmFjaz1hLGwuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZShsLmNvdW50KSl9LGwucGF1c2VSZXN1bWU9ZnVuY3Rpb24oKXtsLnBhdXNlZD8obC5wYXVzZWQ9ITEsZGVsZXRlIGwuc3RhcnRUaW1lLGwuZHVyYXRpb249bC5yZW1haW5pbmcsbC5zdGFydFZhbD1sLmZyYW1lVmFsLHJlcXVlc3RBbmltYXRpb25GcmFtZShsLmNvdW50KSk6KGwucGF1c2VkPSEwLGNhbmNlbEFuaW1hdGlvbkZyYW1lKGwuckFGKSl9LGwucmVzZXQ9ZnVuY3Rpb24oKXtsLnBhdXNlZD0hMSxkZWxldGUgbC5zdGFydFRpbWUsbC5pbml0aWFsaXplZD0hMSxsLmluaXRpYWxpemUoKSYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKGwuckFGKSxsLnByaW50VmFsdWUobC5zdGFydFZhbCkpfSxsLnVwZGF0ZT1mdW5jdGlvbihhKXtpZihsLmluaXRpYWxpemUoKSl7aWYoYT1OdW1iZXIoYSksIXUoYSkpcmV0dXJuIHZvaWQobC5lcnJvcj1cIltDb3VudFVwXSB1cGRhdGUoKSAtIG5ldyBlbmRWYWwgaXMgbm90IGEgbnVtYmVyOiBcIithKTtsLmVycm9yPVwiXCIsYSE9PWwuZnJhbWVWYWwmJihjYW5jZWxBbmltYXRpb25GcmFtZShsLnJBRiksbC5wYXVzZWQ9ITEsZGVsZXRlIGwuc3RhcnRUaW1lLGwuc3RhcnRWYWw9bC5mcmFtZVZhbCxsLmVuZFZhbD1hLGwuY291bnREb3duPWwuc3RhcnRWYWw+bC5lbmRWYWwsbC5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGwuY291bnQpKX19LGwuaW5pdGlhbGl6ZSgpJiZsLnByaW50VmFsdWUobC5zdGFydFZhbCl9O3JldHVybiBlfSk7IiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFjQUE7QURBQTs7QURBQSxJQUFBOzs7O0FBQU0sT0FBTyxDQUFDOzs7RUFDQSxxQkFBQyxPQUFEO0lBQUMsSUFBQyxDQUFBLDRCQUFELFVBQVM7Ozs7SUFDdEIsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFDLENBQUEsT0FBWixFQUNDO01BQUEsZUFBQSxFQUFnQixNQUFoQjtNQUNBLEtBQUEsRUFBTyxNQUFNLENBQUMsS0FEZDtNQUVBLE1BQUEsRUFBUSxFQUZSO0tBREQ7SUFLQSxJQUFDLENBQUEsWUFBRCxHQUFvQixJQUFBLFNBQUEsQ0FDbkI7TUFBQSxDQUFBLEVBQUcsRUFBSDtNQUNBLE1BQUEsRUFBTyxFQURQO01BRUEsT0FBQSxFQUFRLEVBRlI7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

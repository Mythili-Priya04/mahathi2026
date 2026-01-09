require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({2:[function(require,module,exports){
"use strict";

var _core = require("@popperjs/core");

var _jquery = _interopRequireDefault(require("jquery"));

require("jquery-match-height");

require("slick-carousel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function callAlert() {
  console.log("ct_equaliser.js");
}

(0, _jquery["default"])(document).ready(function () {
  run();

  if (typeof cms_edit_mode_active !== "undefined") {
    CMS.$(window).on('cms-content-refresh', function () {
      run();
      callAlert();
    });
  }
});

function run() {
  /* All code must go here - workaround for djangocms edit mode not refreshing js files. */
  var bannerCarousels = (0, _jquery["default"])('.banner-carousel-container');
  (0, _jquery["default"])('.banner-carousel-container').on('init', function (event, slick) {
    (0, _jquery["default"])(this).closest('#page-block-banner-carousel').addClass('active');
    var carouselParent = (0, _jquery["default"])(this).parent();
    var dots = carouselParent.find('.dots');
    var dotsLength = dots.find('li').length;
    var dotsWidth = 100 / dotsLength;
    dots.find('li').css('width', dotsWidth + '%');
    dots.addClass('active');
  });
  bannerCarousels.each(function () {
    var $this = (0, _jquery["default"])(this);

    if ($this.children().length > 1) {
      $this.slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="23.767" height="43.292" viewBox="0 0 23.767 43.292"><path id="Path_47" data-name="Path 47" d="M1556.5,3474.336l20.585,20.586-20.585,20.585" transform="translate(-1555.439 -3473.276)" fill="none" stroke="#ff5e01" stroke-width="3"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="23.767" height="43.292" viewBox="0 0 23.767 43.292"><path id="Path_47" data-name="Path 47" d="M1556.5,3474.336l20.585,20.586-20.585,20.585" transform="translate(-1555.439 -3473.276)" fill="none" stroke="#ff5e01" stroke-width="3"/></svg></button>',
        appendDots: $this.parent().find('.dots .dots-inner'),
        appendArrows: $this.parent().find('.arrows')
      });
    } else {
      $this.closest('#page-block-banner-carousel').addClass('active');
    }
  });
}

},{"@popperjs/core":19,"jquery":97,"jquery-match-height":96,"slick-carousel":101}]},{},[2]);

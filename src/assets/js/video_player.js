require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({18:[function(require,module,exports){
"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

require("jquery-match-height");

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
  (0, _jquery["default"])(function () {
    var video = document.getElementById("videoBanner");

    if (video != null) {
      //Every 500ms, check if the video element has loaded
      var interval = setInterval(function () {
        if (video.readyState >= 3) {
          //stop checking every half second
          clearInterval(interval);
          (0, _jquery["default"])('.video-poster').remove();
        }
      }, 500);
      (0, _jquery["default"])('#mute').on('click', function (event) {
        event.preventDefault();
        var video = (0, _jquery["default"])('#videoBanner');
        var videoElement = video.get(0);
        (0, _jquery["default"])('.mute').toggleClass('hideIcon');

        if (video.prop('muted')) {
          video.prop('muted', false);
        } else {
          video.prop('muted', true);
          (0, _jquery["default"])('.unmute');
        }
      });
      (0, _jquery["default"])('#playVideo').on('click', function (event) {
        event.preventDefault();
        var video = (0, _jquery["default"])('#videoBanner');
        var videoElement = video.get(0);

        if (!videoElement.paused) {
          videoElement.pause();
          (0, _jquery["default"])(this).removeClass('hideIcon');
        } else {
          videoElement.play();
          (0, _jquery["default"])(this).addClass('hideIcon');
        }
      });
    }
  });
}

},{"jquery":97,"jquery-match-height":96}]},{},[18]);

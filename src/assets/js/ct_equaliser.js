require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({6:[function(require,module,exports){
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
  if (typeof cms_edit_mode_active === "undefined") {
    // Can be removed for go-live
    var equalise = [];
    var i = 1;
    (0, _jquery["default"])('.equaliser').each(function () {
      (0, _jquery["default"])(this).find('.row').each(function () {
        (0, _jquery["default"])(this).find('.col').each(function () {
          var j = 1;
          (0, _jquery["default"])(this).children().each(function () {
            (0, _jquery["default"])(this).addClass('equalise-' + i + '-' + j);
            equalise.push('equalise-' + i + '-' + j);
            j++;
          });
        });
      });
      i++;
    });

    _jquery["default"].uniqueSort(equalise);

    for (var k = 0; k < equalise.length; k++) {
      (0, _jquery["default"])('.' + equalise[k]).matchHeight();
    }
  }
}

},{"jquery":97,"jquery-match-height":96}]},{},[6]);

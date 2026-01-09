require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({5:[function(require,module,exports){
"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function callAlert() {
  console.log("contact_form.js");
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
  // Sticky Button 
  (0, _jquery["default"])(function () {
    var button = (0, _jquery["default"])('.is-sticky');
    var buttonHeight = button.height();

    var makeSticky = function makeSticky() {
      try {
        var buttonOffset = button.closest('#page-block-contact-form').offset().top;
        var footerOffset = (0, _jquery["default"])('footer').offset().top;
        var footerHeight = (0, _jquery["default"])('footer').height();
        var documentHeight = (0, _jquery["default"])(document).height();
        var windowHeight = (0, _jquery["default"])(window).height();
        var windowScroll = (0, _jquery["default"])(window).scrollTop();
        var modifier = 500; // Mobile devices

        if ((0, _jquery["default"])(window).width() < 768) {
          button.css({
            'position': 'relative'
          });
        } // Adjust the position for smaller screen desktops where the banner is taking most of the space


        if (windowHeight < 550 + button.height() * 2 && windowScroll <= buttonHeight * 1.5 && (0, _jquery["default"])('.banner_wrapper_animated').length >= 1) {
          button.css({
            'position': 'relative',
            'bottom': '0px'
          });
          return; // Everything else
        }

        if ((0, _jquery["default"])('.form-inner').hasClass('is-sticky') && buttonOffset >= windowScroll + windowHeight - buttonHeight / 2) {
          button.css({
            'position': 'fixed',
            'bottom': '0px'
          });
        } else {
          button.css({
            'position': 'relative'
          });
        }
      } catch (error) {
        /* error */
      }
    };

    (0, _jquery["default"])(document).ready(function () {
      setTimeout(function () {
        makeSticky();
        (0, _jquery["default"])(window).on('scroll', makeSticky);
      }, 500);
    });
    var height = (0, _jquery["default"])(window).height();
    (0, _jquery["default"])(window).on('resize', function (event) {
      if ((0, _jquery["default"])(this).height() == height) makeSticky(); // else alert('k')
      // makeStikcy()
    });
  }); // Form Recaptcha

  // grecaptcha.ready(function () {
  //   (0, _jquery["default"])('#contactform').on('submit', function (e) {
  //     e.preventDefault();
  //     var form = (0, _jquery["default"])(this);
  //     var submitButton = form.find('button[type="submit"]');
  //     var recaptcha = (0, _jquery["default"])('#recaptcha_key').val();
  //     var url = form.attr('action');
  //     var business_area = (0, _jquery["default"])(form).find('#contact_business_area').find(":selected").text();
  //     var data = {};
  //     submitButton.attr('disabled', 'disabled');
  //     grecaptcha.execute(recaptcha, {
  //       action: 'contactform'
  //     }).then(function (token) {
  //       console.log(form.find('.g-recaptcha-response'));
  //       form.find('input[name="g-recaptcha-response"]').val(token);

  //       _jquery["default"].each((0, _jquery["default"])(form).serializeArray(), function (_, kv) {
  //         data[kv.name] = kv.value;
  //       });

  //       var form_data = JSON.stringify(data);

  //       _jquery["default"].ajax({
  //         type: "POST",
  //         url: url,
  //         data: {
  //           'form_data': form_data
  //         },
  //         success: function (_success) {
  //           function success(_x) {
  //             return _success.apply(this, arguments);
  //           }

  //           success.toString = function () {
  //             return _success.toString();
  //           };

  //           return success;
  //         }(function (data) {
  //           var alert = (0, _jquery["default"])('.form-alert').first();
  //           var message = alert.find('.message');
  //           var success_message = typeof success != "undefined" ? success : 'Thanks for getting in touch. The form has been successfully submitted to the department administrators who will be in contact with you soon.';

  //           if (data.success == "false") {
  //             alert.removeClass('d-none');
  //             alert.addClass('show alert-danger');
  //             message.html('There was a problem submitting the form, please try again.');
  //           }

  //           if (data.success == "true") {
  //             (0, _jquery["default"])([document.documentElement, document.body]).animate({
  //               scrollTop: (0, _jquery["default"])("#page-block-contact-form").offset().top
  //             }, 500);
  //             clearForm(form);
  //             (0, _jquery["default"])('#contact-form-modal').modal('toggle');
  //             alert.removeClass('d-none');
  //             alert.addClass('show alert-success');
  //             message.html(success_message);
  //             dataLayer.push({
  //               'label': 'Contact Form Submit - ' + business_area,
  //               'category': 'Contact us Form',
  //               'action': 'Submit',
  //               'event': 'contact-form'
  //             });
  //           }

  //           if (data.success == "missing") {
  //             alert.removeClass('d-none');
  //             alert.addClass('show alert-danger');
  //             message.html('Some fields are missing, please check and ensure all required fields are correctly filled in, and try again.');
  //           }

  //           submitButton.attr('disabled', false);
  //         })
  //       });
  //     });
  //   });
  // });
  (0, _jquery["default"])(document).on('click', '.alert .close', function () {
    var alert = (0, _jquery["default"])(this).closest('.alert');
    var message = alert.find('.message');
    alert.addClass('d-none');
    alert.removeClass('show');
    alert.removeClass(function (index, className) {
      return (className.match(/(^|\s)alert-\S+/g) || []).join(' ');
    });
    message.empty();
  });

  function clearForm($form) {
    $form.find(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $form.find(':checkbox, :radio').prop('checked', false);
  }
}

},{"jquery":97}]},{},[5]);

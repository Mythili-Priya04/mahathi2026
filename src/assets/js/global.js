(function ($) {


    function handleFirstTab(e) {
        var key = e.key || e.keyCode;
        if (key === 'Tab' || key === '9') {
            $('body').removeClass('no-outline');

            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    }

    function handleMouseDownOnce() {
        $('body').addClass('no-outline');

        window.removeEventListener('mousedown', handleMouseDownOnce);
        window.addEventListener('keydown', handleFirstTab);
    }

    window.addEventListener('keydown', handleFirstTab);

    // Fit slide video background to video holder
    function resizeVideo() {
        var $holder = $('.videoHolder');
        $holder.each(function () {
            var $that = $(this);
            var ratio = $that.data('ratio') ? $that.data('ratio') : '16:9',
                width = parseFloat(ratio.split(':')[0]),
                height = parseFloat(ratio.split(':')[1]);
            $that.find('.video').each(function () {
                if ($that.width() / width > $that.height() / height) {
                    $(this).css({
                        'width': '100%',
                        'height': 'auto'
                    });
                } else {
                    $(this).css({
                        'width': $that.height() * width / height,
                        'height': '100%'
                    });
                }
            });
        });
    }

    function solutionMarkers() {
        var marker = '.dg-solutions-map__marker',
            markerDesc = '.dg-solutions-map__description';
        $(markerDesc).each(function () {
            $(this).addClass('hide');
        });
        $(document).on('click', marker, function () {
            var index = $(this).attr('data-index');
            $(markerDesc).each(function () {
                $(this).addClass('hide');
                $(this).removeClass('show');
                if ($(this).attr('data-index') == index) {
                    $(this).removeClass('hide');
                    $(this).addClass('show');
                }
            })
        })

    }


    function footerHeight() {

        if ($(window).width() >= 840) {
            window.setTimeout(function () {
            }, 1000);
            $('.page-wrapper').css('padding-bottom', $('.footer').height() + 133 + 'px');
        } else {
            $('.page-wrapper').css('padding-bottom', 0);
        }
    }

    function technologySlider() {

        var $technologySlider = $('[technologySlider]'),
            $sliderBtn = $('[technology-arrow]');
        $technologySlider
            .slick({
                prevArrow: $('[technology-arrow-left]'),
                nextArrow: $('[technology-arrow-right]'),
                cssEase: 'linear',
                speed: 500,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: true,
                swipeToSlide: true,
                slidesToShow: 1
            })
            .on('beforeChange', function () {

            })
        $sliderBtn.on('mouseenter', function () {
            $technologySlider.slick('pause');
        });
        $sliderBtn.on('mouseleave', function () {
            $technologySlider.slick('slickPlay');
        });
        $sliderBtn.on('click', function () {
            $technologySlider.slick('slickPlay');
        });
        $('[technologySlider]').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.dg-tech-background-slider').slick('slickGoTo', nextSlide);

        });
    };

    function testimonialsSlider() {
        var $testimonialsSlider = $('[testimonialsSlider]');
        $testimonialsSlider.slick({
            prevArrow: $('.dg-about-testimonial__arrow--left'),
            nextArrow: $('.dg-about-testimonial__arrow--right'),
            infinite: true
        });


    }

    $.fn.isInViewport = function () {
        var halfviewportHeight = ($(window).height()) / 2;
        var elementTop = $(this).offset().top;
        var elementTopWithOffset = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTopWithOffset < viewportBottom;
    };
    $.fn.isInCenter = function () {
    };

    function arrowAnimation() {
        var windowHeight = $(window).height(),
            scrollTop = $(window).scrollTop(),
            mid = scrollTop + Math.floor(windowHeight / 2);

        if ($(window).width() > 640) {
            if ($('.dg-about-testimonial__wrapper').length && $('.dg-about-testimonial__wrapper').isInViewport()) {
                $('.dg-about-testimonial__arrow--right').addClass('active');
            }
            if ($('.tv-archive-fresh__wrapper').length && $('.tv-archive-fresh__wrapper').isInViewport()) {
                $('.tv-archive-fresh__next').addClass('active');
            }
        }
    }

    // function whyUsSticky() {
    //     if ($(window).width() > 1024) {
    //         var controller = new ScrollMagic.Controller();

    //         // build scene
    //         var scene = new ScrollMagic.Scene({
    //             triggerElement: "#trigger1",
    //             duration: "75%",
    //             triggerHook: 0
    //         })
    //             .setPin("#pin1")
    //             // .addIndicators({name: "pin section (duration: 75%)"}) // add indicators (requires plugin)
    //             .addTo(controller);

    //         var sceneFade1 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger2",
    //             duration: "250%"
    //         })
    //             .setClassToggle(".content1", "activeHidden") // add class toggle
    //             // .addIndicators({name: "deactivate first section (duration: 250%)"}) // add indicators (requires plugin)
    //             .addTo(controller);
    //         var sceneFade1 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger2",
    //             duration: "250%"
    //         })
    //             .setClassToggle(".imageTrigger1", "activeHiddenImage") // add class toggle
    //             // .addIndicators({name: "deactivate first section image (duration: 250%)"}) // add indicators (requires plugin)
    //             .addTo(controller);


    //         var sceneFade2 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger2",
    //             duration: "25%"
    //         })
    //             .setClassToggle(".content2", "active") // add class toggle
    //             // .addIndicators({name: "activate section 2 (duration: 25%)"}) // add indicators (requires plugin)
    //             .addTo(controller);
    //         var sceneimage2 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger2",
    //             duration: "25%"
    //         })
    //             .setClassToggle(".imageTrigger2", "activeImage") // add class toggle
    //             // .addIndicators({name: "activate section 2 image (duration: 25%)"}) // add indicators (requires plugin)
    //             .addTo(controller);

    //         var sceneFade3 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger3",
    //             duration: "25%"
    //         })
    //             .setClassToggle(".content3", "active") // add class toggle
    //             // .addIndicators({name: "activate section 3 (duration: 25%)"}) // add indicators (requires plugin)
    //             .addTo(controller);
    //         var sceneimage3 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger3",
    //             duration: "25%"
    //         })
    //             .setClassToggle(".imageTrigger3", "activeImage") // add class toggle
    //             // .addIndicators({name: "activate section 3 image (duration: 25%)"}) // add indicators (requires plugin)
    //             .addTo(controller);

    //         var sceneFade4 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger4",
    //             duration: "150%"
    //         })
    //             .setClassToggle(".content4", "active") // add class toggle
    //             // .addIndicators({name: "activate section 4 (duration: 150%)"}) // add indicators (requires plugin)
    //             .addTo(controller);
    //         var sceneimage4 = new ScrollMagic.Scene({
    //             triggerElement: "#trigger4",
    //             duration: "150%"
    //         })
    //             .setClassToggle(".imageTrigger4", "activeImage") // add class toggle
    //             // .addIndicators({name: "activate section 4 image (duration: 150%)"}) // add indicators (requires plugin)
    //             .addTo(controller);

    //     }
    //     ;
    // };

    function technologyHubHero() {

        var $btn = $('[data-button-count]'),
            $changeItem = $('[data-item-count]'),
            className = 'active',
            $rightScreen = $('.dg-technology-hero__right'),
            anchor = location.hash,
            itemList = [];

        $changeItem.each(function () {
            itemList.push($(this));
            $(this).remove();
        });
        if (anchor) {
            $btn.each(function () {
                if ('#' + $(this).attr('data-button-count') === anchor) {
                    $(this).addClass(className);
                }
            });
            $changeItem.each(function () {
                if ('#' + $(this).attr('data-item-count') === anchor) {
                    var $newItem = itemList[$changeItem.index($(this))];
                    $rightScreen.children().append($newItem);
                    if ($(window).width() > 1024) {
                        $('.dg-technology-hero').height($newItem.outerHeight() + 32);
                    }
                }
            });
            $rightScreen.addClass(className);
        } else {
            $('.dg-technology-hero').addClass('empty');
        }

        $btn.on('click', function () {
            if ($(this).hasClass('active')) {
                event.preventDefault();
            } else {
                location.hash = $(this).attr('data-button-count');
                var techBgImage = $(this).attr('data-tech-bg-image');
                document.getElementById('techBgChange').style.backgroundImage = 'url("' + techBgImage + '")';
                $('.dg-technology-hero__bg').addClass(className);
                if ($rightScreen.hasClass(className)) {
                } else {
                    $rightScreen.addClass(className);
                }
                if ($(window).width() < 1024) {
                    $('html, body').animate({
                        scrollTop: $('.dg-technology-hero__right').offset().top - 150,
                    }, 500);
                }
                // $('.dg-technology-hero__right').not('.dg-technology-hero__right.active').add(className);
                var counter = $(this).attr('data-button-count'),
                    tl = new TimelineMax();
                $(this).addClass(className);
                $btn.not($(this)).removeClass(className);
                $changeItem.each(function () {
                    if (counter === $(this).attr('data-item-count')) {
                        var $newItem = itemList[$changeItem.index($(this))],
                            $currentItem = $rightScreen.children().children();
                        // $(this).addClass(className);
                        tl
                            .call(function () {
                                $rightScreen.children().append($newItem);
                                if ($(window).width() > 1024) {
                                    $('.dg-technology-hero').height($newItem.outerHeight() + 32);
                                }
                            })
                            .to($currentItem, .5, {
                                left: '-100%'
                            })
                            .fromTo($(this), .5, {
                                left: '100%'
                            },
                                {
                                    left: '0%'
                                },
                                '-=.5'
                            )
                            .eventCallback('onComplete', function () {
                                $currentItem.remove();
                            })
                            .call(function () {
                            })
                    } else {
                        // $(this).removeClass(className)
                    }

                })
            }
        })
    }


    // On single solutions and motor engineering templates
    function solutionsTab() {
        var $tabBtn = $('.dg-tab-section__list-button'),
            $tabItem = $('.dg-tab-section__tab'),
            btnClass = 'dg-tab-section__list-button--active',
            tabClass = 'dg-tab-section__tab--active';
        $tabBtn.on('click', function () {
            var number = $(this).attr('data-button');
            $tabBtn.not($(this)).removeClass(btnClass);
            $(this).addClass(btnClass);
            $tabItem.addClass(tabClass);
            $tabItem.not('[data-tab=' + number + ']').removeClass(tabClass);
            // if ($tabItem.attr('data-tab') == number){
            //     $(this).addClass(tabClass)
            // }
            location.hash = $(this).attr('data-button-url');
        })
    }

    function solutionsMap(btnIndex, markerIndex) {
        var $tabBtn = $('.dg-tab-section__list-button'),
            $markersGroup = $('.dg-solutions-map__markers'),
            $descriptionsList = $('.dg-solutions-map__list'),
            $descriptionWrapper = $('.dg-solutions-map__right'),
            $markerWrapper = $('.dg-solutions-map__wrapper'),
            $marker = $('.dg-solutions-map__marker'),
            $description = $('.dg-solutions-map__description'),
            $title = $('.dg-solutions-map__title'),
            anchor = location.hash;
        btnIndex = 0;
        mapArray = [];
        $tabBtn.each(function (i) {
            mapArray[i] = [$(this), [$markersGroup[i], $descriptionsList[i]], $title[i]];
            if (i != 0) {

                $('.dg-solutions-map__markers').eq(i).addClass('hide');
                $('.dg-solutions-map__list').eq(i).addClass('hide');
                $('.dg-solutions-map__title').eq(i).addClass('hide');
            }
        });

        $tabBtn.on('click', function () {
            btnIndex = $tabBtn.index($(this));
            $('.dg-solutions-map__markers').addClass('hide');
            $('.dg-solutions-map__list').addClass('hide');
            $('.dg-solutions-map__title').addClass('hide');
            $('.dg-solutions-map__list').removeClass('showList');
            $('.dg-solutions-map__markers').eq(btnIndex).removeClass('hide');
            $('.dg-solutions-map__list').eq(btnIndex).removeClass('hide');
            $('.dg-solutions-map__title').eq(btnIndex).removeClass('hide');
            $('.dg-solutions-map__list').eq(btnIndex).addClass('showList');
            $('.showList li:nth-child(1)').addClass('show');
            if (1025 > $(window).width()) {
                solutionMarkers();
            }
            return btnIndex
        });
        $(document).on('click', '.dg-solutions-map__marker', function () {
            markerIndex = $(mapArray[btnIndex][1][0]).find($marker).index($(this));
            $(mapArray[btnIndex][1][1]).find($description)[markerIndex];
        });


        if (anchor) {
            $tabBtn.each(function () {
                if ('#' + $(this).attr('data-button-url') === anchor) {
                    $(this).trigger('click');
                    $('html, body').animate({
                        scrollTop: $('.dg-tab-section').offset().top - 180,
                    }, 500);
                }
            });

        }
    };

    function videoAjax($videoPlayerWrapper) {
        $('[dg-data-play]').on('click', function () {

            var postID = $(this).attr('dg-data-play');
            // $videoPlayerWrapper = $('.dg-home-tv__player');

            if ($videoPlayerWrapper.find('.video-player').length) {
                TweenLite.to($videoPlayerWrapper.find('.video-player'), .5, {
                    right: '200%'
                });

            }
            window.setTimeout(function () {
                $.get(flow.ajax_url, {
                    action: 'video',
                    postID: postID
                }).success(function (response) {
                    $videoPlayerWrapper.empty();
                    $videoPlayerWrapper.append(response);
                    $('html, body').animate({
                        scrollTop: $videoPlayerWrapper.offset().top - 150,
                    }, 500);

                    var tl = new TimelineMax();

                    TweenLite.to($videoPlayerWrapper.find('.video-player'), 1, {
                        right: '0%',
                        onComplete: function () {
                            $videoPlayerWrapper.find('.dg-video__player').trigger('play');
                        }
                    })

                });
            }, 600);

        });
    }

    // Scripts which runs after DOM load

    // Scripts which runs after all elements load


    $(document).on('ready', function () {

        // Init LazyLoad
        var lazyLoadInstance = new LazyLoad({
            elements_selector: 'img[data-lazy-src], .pre-lazyload',
            data_src: "lazy-src",
            data_srcset: "lazy-srcset",
            data_sizes: "lazy-sizes",
            skip_invisible: false,
            class_loading: "lazyloading",
            class_loaded: "lazyloaded",
        });
        // Add tracking on adding any new nodes to body to update lazyload for the new images (AJAX for example)
        window.addEventListener('LazyLoad::Initialized', function (e) {
            // Get the instance and puts it in the lazyLoadInstance variable
            if (window.MutationObserver) {
                var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        mutation.addedNodes.forEach(function (node) {
                            if (typeof node.getElementsByTagName !== 'function') {
                                return;
                            }
                            imgs = node.getElementsByTagName('img');
                            if (0 === imgs.length) {
                                return;
                            }
                            lazyLoadInstance.update();
                        });
                    });
                });
                var b = document.getElementsByTagName("body")[0];
                var config = {
                    childList: true,
                    subtree: true
                };
                observer.observe(b, config);
            }
        }, false);

        // Update LazyLoad images before Slide change
        $('.slick-slider').on('beforeChange', function () {
            lazyLoadInstance.update();
        });

        

        // Detect element appearance in viewport
        // var scrollOut = ScrollOut({
        //     threshold: 0.3,
        //     once: true,
        //     onShown: function (element) {
        //         if ($(element).is('.ease-order')) {
        //             $(element).find('.ease-order__item').each(function (i) {
        //                 var $this = $(this);
        //                 $(this).attr('data-scroll', '');
        //                 window.setTimeout(function () {
        //                     $this.attr('data-scroll', 'in');
        //                 }, 300 * i);
        //             });
        //         }
        //     }
        // });


        // Init parallax
        /*$('.jarallax').jarallax({
            speed: 0.5,
        });*/

        // IE Object-fit cover polyfill
        if ($('.of-cover').length) {
            objectFitImages('.of-cover');
        }

        //Remove placeholder on click
        $('input,textarea').each(function () {
            $(this).data('holder', $(this).attr('placeholder'));

            $(this).on('focusin', function () {
                $(this).attr('placeholder', '');
            });

            $(this).on('focusout', function () {
                $(this).attr('placeholder', $(this).data('holder'));
            });
        });

        //Make elements equal height
        // $('.matchHeight').matchHeight();


        // Add fancybox to images
        // $('.gallery-item').find('a[href$="jpg"], a[href$="png"], a[href$="gif"]').attr('rel', 'gallery').attr('data-fancybox', 'gallery');
        // $('a[rel*="album"], .fancybox, a[href$="jpg"], a[href$="png"], a[href$="gif"]').fancybox({
        //     minHeight: 0,
        //     helpers: {
        //         overlay: {
        //             locked: false
        //         }
        //     }
        // });

        /**
         * Scroll to Gravity Form confirmation message after form submit
         */
        $(document).on('gform_confirmation_loaded', function (event, formId) {
            var $target = $('#gform_confirmation_wrapper_' + formId);
            if ($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - 50,
                }, 500);
                return false;
            }
        });

        /**
         * Hide gravity forms required field message on data input
         */
        $('body').on('change keyup', '.gfield input, .gfield textarea', function () {
            var $field = $(this).closest('.gfield');
            if ($field.hasClass('gfield_error') && $(this).val().length) {
                $field.find('.validation_message').hide();
            } else if ($field.hasClass('gfield_error') && !$(this).val().length) {
                $field.find('.validation_message').show();
            }
        });

        /**
         * Add `is-active` class to menu-icon button on Responsive menu toggle
         * And remove it on breakpoint change
         */
        $(window).on('toggled.zf.responsiveToggle', function () {
            $('.menu-icon').toggleClass('is-active');
        }).on('changed.zf.mediaquery', function (e, value) {
            $('.menu-icon').removeClass('is-active');
        });

        /**
         * Close responsive menu on orientation change
         */
        $(window).on('orientationchange', function () {
            setTimeout(function () {
                if ($('.menu-icon').hasClass('is-active') && window.innerWidth < 641) {
                    $('[data-responsive-toggle="main-menu"]').foundation('toggleMenu')
                }
            }, 200);
        });

        resizeVideo();


        // Contact Form Radiobuttons

        $('.dg-subscribe__form [type="email"]').on('keydown', function () {
            $('.dg-subscribe__form .form-footer').addClass('active');
            if ($('.dg-subscribe__form .wpcf7-mail-sent-ok').length) {
                $('.dg-subscribe__form .wpcf7-mail-sent-ok').css({
                    'z-index': '-1',
                })
            }
            ;
        });
        $('.dg-subscribe__form  [type="email"]').on("keyup", function () {
            var checkFormIsNotEmpty = $('.dg-subscribe__form  [type="email"]').val().length;
            if (checkFormIsNotEmpty < 1) {
                $('.dg-subscribe__form  .form-footer').removeClass('active');
            }
        });
        function ValidateEmail(email) {
            var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            return expr.test(email);
        };



        $('.dg-subscribe__form .radiobuttons input:checked').next('.wpcf7-list-item-label').toggleClass('checked');
        $('.dg-subscribe__form .wpcf7-list-item-label').on('click', function () {
            $(this).toggleClass('checked');
            var checkboxTest = $(this).prev('input');
            var checkboxAll = $('.wpcf7-list-item.last label input');
            if (checkboxTest[0].checked === true) {
                checkboxTest[0].checked = false;
            } else {
                checkboxTest[0].checked = true;
            }
            $(":checkbox[value='" + $(this).prev('input').val() + "']").click();
            if (checkboxTest[0].value === 'All') {
                $('.wpcf7-list-item-label').removeClass('checked');
                $('.dg-subscribe__form [type="checkbox"][value="All"]').next('span').addClass('checked');
                var checkBoxes = $('.wpcf7-list-item-label').prev('input');
                for (let i = 0; i < (checkBoxes.length - 1); i++) {
                    checkBoxes[i].checked = false;
                }
            } else {
                checkboxAll[0].checked = false;
                $('.dg-subscribe__form [type="checkbox"][value="All"]').next('span').removeClass('checked');
            }
        })

        document.addEventListener('wpcf7submit', function (event) {
            $('.dg-subscribe__form .form-footer').removeClass('active');
            window.setTimeout(function () {
                $('.dg-subscribe__form .wpcf7-mail-sent-ok').css({
                    'margin-top': '4%',
                    'position': 'relative',
                    'z-index': '1',
                    'transition': 'margin-top .3s ease-in'
                })
            }, 4000);
        }, false);

        technologySlider();


        //dario sticky header

        window.prevOffset = 0;
        var smartScrollThrottle = 0;
        var smartScrollHeader = document.getElementById('header-wrap');

        var smartScroll = function () {

            if (new Date().getTime() - smartScrollThrottle < 200) {
                return false;
            }
            // reset throttle after minimum of 200ms, allows smartScroll only 5 times per second
            smartScrollThrottle = (new Date()).getTime();

            var tempOffset = window.pageYOffset;

            if (tempOffset > (window.prevOffset + 25) || tempOffset < 100) {
                // hide 75 pixels from the total 80 px
                smartScrollHeader.style.top = '-190px';
                $(smartScrollHeader).removeClass('scroll');
            }
            if (tempOffset < (window.prevOffset - 25) || tempOffset < 75) {
                // show all 80 pixels
                smartScrollHeader.style.top = '0px';
                $(smartScrollHeader).addClass('scroll');
            }
            if ($(document).scrollTop() < 85) {
                smartScrollHeader.style.top = '0px';
                $(smartScrollHeader).removeClass('scroll');
                $(smartScrollHeader).removeClass('hideBurgerDesktop');
            } else {
                $(smartScrollHeader).addClass('hideBurgerDesktop');
            }

            // update the prevOffset value for the next scroll event
            window.prevOffset = window.pageYOffset;

            // reuse tempOffset value but now for the progress-bar as percentage
            // tempOffset = (tempOffset) / (document.documentElement.scrollHeight - (window.innerHeight || document.documentElement.clientHeight));
            // if (tempOffset < 0) { tempOffset = 0; }
            // if (tempOffset > 1) { tempOffset = 1; }
            // smartProgressBar.style.width = Math.round(tempOffset * 100) + "%";

            // Chrome and Firefox do not send more scroll events when the pages reached the bottom, so we fix it
            setTimeout(smartScroll, 333); // trigger one more smartScroll event after 333ms when no more event come in

        } // end of smartScroll
        var isBreakPointScroll = function (bp) {
            var bps = [0, 640, 2560],
                w = $(window).width(),
                min, max;
            for (var i = 0, l = bps.length; i < l; i++) {
                if (bps[i] === bp) {
                    min = bps[i - 1] || 0;
                    max = bps[i];
                    break
                }
            }
            return w > min && w <= max
        };
        if (isBreakPointScroll(2560)) {
            // window.addEventListener('scroll', smartScroll);
            // smartScroll();
        }
        else {

        }
        // init the progress bar on page refresh
        //-------- END Sticky Header with Progress Bar --------------------------



        $('.dg-team-section__item--team').click(function () {
            var target = $(event.target);
            if (target.is(".bio-close")) {
                $('.dg-team-section__item--team').removeClass('bio-banner-show');
            } else if (target.is('.dg-team-section__email')) {

            } else {
                var bioIndex = $(this).index();
                // $('.dg-team-section__item--team').css('margin-top', )
                $('.dg-team-section__item--team').removeClass('bio-banner-show');
                $('.dg-team-section__item--team').eq(bioIndex).addClass('bio-banner-show');
            }
        });



        // whyUsSticky();
        technologyHubHero();
        testimonialsSlider();


        // HERO VIDEO ON DAVIES-TV
        $(document).ready(function () {

            if ($('#vimeoBannerPlayer[src]').length) {
                $idPlayer = new Vimeo.Player('vimeoBannerPlayer');
                $soundBtn = $('.dg-about-hero__sound');
                $heroVideo = $('.dg-about-hero__video');
                $heroDescription = $('.tv-archive-hero__wrapper');
                $heroSection = $('.tv-archive-hero');
                var clickCount = 0;
                $idPlayer.setVolume(0);
                // TweenLite.to($heroDescription, 1, {
                //     right: '150%'
                // })
                //$('.dg-sound-video-stop').show();
                $heroSection.addClass('active');
                $soundBtn.addClass('overlay');

                $soundBtn.on('click', function () {
                    $(this).toggleClass('active');
                    if ($(this).hasClass('active')) {

                        $idPlayer.setVolume(0);
                        TweenLite.to($heroDescription, 1, {
                            right: '150%',
                            onComplete: function () {

                                $idPlayer.play();
                                $idPlayer.setMuted(true);


                                $heroSection.addClass('active overlay');
                                $soundBtn.addClass('active overlay');
                                clickCount = clickCount + 1;
                                $("button.tv-archive-hero__sound").fadeIn(0);
                                $('.dg-sound-video-stop').show();
                            }
                        });
                    } else {
                        $idPlayer.pause();
                        $idPlayer.setMuted(true);
                        clickCount = clickCount + 1;
                    }

                });

                $('.dg-sound-video-stop').click(function () {

                    $('.dg-sound-video-stop').hide();
                    $soundBtn.toggleClass('active');
                    $idPlayer.pause();
                    $idPlayer.setVolume(0);

                    clickCount = clickCount + 1;
                    $("button.tv-archive-hero__sound").fadeOut(0);

                    if ($heroSection.hasClass('overlay')) {
                        $heroSection.removeClass('overlay');
                        TweenLite.to($heroDescription, 1, {
                            right: '50%'
                        })
                    }
                })
            }
        });


        $('.tv-archive-hero__sound').on('click', function () {
            var $idPlayer = new Vimeo.Player('vimeoBannerPlayer');

            if ($('#vimeoBannerPlayer').length) {
                var $idPlayer = new Vimeo.Player('vimeoBannerPlayer');
                var $heroDescription = $('.tv-archive-hero__wrapper');
                TweenLite.to($heroDescription, 1, {
                    right: '150%'
                })


                $idPlayer.getMuted().then(function (muted) {
                    if (muted == false) {
                        $idPlayer.setMuted(true);
                        $idPlayer.setVolume(0);
                    } else if (muted == true) {
                        $idPlayer.setMuted(false);
                        $idPlayer.setVolume(1);
                    }
                });
            }

            $('#sound-button-on').toggle('');
            $('#sound-button-off').toggle('');
            $(this).find('span').toggle();
        });
        solutionsTab();

        if ($('.dg-solution-single-hero').length) {
            solutionsMap();
        }
        if ($('.dg-home-tv__player').length) {
            videoAjax($('.dg-home-tv__player'));
        }
        if ($('.media-video__player').length) {
            videoAjax($('.media-video__player'));
        }

        ajaxFilter();

        // function ajaxFilter(postType, rowPerPage, searchField, categoryOne, categoryTwo, suggestion, postsWrapper, loadMore, resetButton) {
        function ajaxFilter(foundedPosts, termIDOne, termIDTwo, termIDTree, taxonomyOne, taxonomyTwo, taxonomyTree, suggestionsList, graduateJobs, selectedTerms) {
            var postsWrapper = '[data-posts-wrapper]',
                postType = $(postsWrapper).attr('data-posts-wrapper'),
                loadMore = '[data-filter-load-more]',
                postCounter = $(loadMore).find('.post-counter'),
                filteredPosts = $(postsWrapper).children().children(),
                rowList = [],
                pagination = $(loadMore).parent().find('.dg-pagination'),
                rowPerPage = 4,
                columnPerPage = 0,
                itemsPerPage = 0,
                totalPostCount = filteredPosts.length
            pageIndex = 1;

            if (postType == 'podcasts') {
                filteredPosts = $(postsWrapper).children();
            }

            switch (postType) {
                case 'davies-tv':
                case 'knowledge':
                    rowPerPage = 3;
                    break;
                case 'careers':
                    rowPerPage = 5;
                    break;
                case 'cx-case-study':
                case 'cx-whitepaper':
                case 'cx-blog':
                case 'cx-news':
                    rowPerPage = 2;
                    break;
                default:
                    rowPerPage = 4;
                    break;
            }
            updateRows();

            if (rowList.length) {
                columnPerPage = rowList[0].children().length;
                itemsPerPage = columnPerPage * rowPerPage;
            }

            $(pagination).find('.post-counter').text(pageIndex);

            if (postType != 'faq') {
                $(pagination).find('.found-posts').text(Math.ceil(totalPostCount / itemsPerPage));
            }

            function updateRows() {
                var postList = [],
                    postsRow = $(postsWrapper).children();
                rowList = [];
                rowsStart = rowPerPage;
                rowsEnd = rowPerPage * 2;
                $(filteredPosts).each(function () {
                    postList.push($(this))
                }
                );
                $(postsRow).each(function (i) {
                    rowList.push($(this));
                    if (i > (rowPerPage - 1)) {
                        $(this).remove();
                    }
                });
                return rowList;
            }

            function filterRequest() {
                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'post_filter',
                        postType: postType,
                        termIDOne: termIDOne,
                        termIDTwo: termIDTwo,
                        termIDTree: termIDTree,
                        taxonomyTree: taxonomyTree,
                        taxonomyOne: taxonomyOne,
                        taxonomyTwo: taxonomyTwo,
                        suggestionsList: suggestionsList,
                        graduateJobs: graduateJobs,
                        selectedTerms: selectedTerms,
                        selectedTax: selectedTax,
                        searchTerm: searchTerm
                    },
                    // data: filterData,
                    success: function (response) {
                        filterSuccess(response);
                    },
                });
            }

            if (window.location.pathname === "/davies-tv/") {
                const queryString = window.location.search;
                if (queryString !== '') {
                    const urlParams = new URLSearchParams(queryString);
                    const filter_type = urlParams.get('filter')
                    var buttonClickTarget = '#linked-' + filter_type;
                    $(buttonClickTarget).toggleClass('active');
                    termIDOne = $(buttonClickTarget).attr('data-category-1');
                    taxonomyOne = $(buttonClickTarget).attr('data-taxonomy-1');
                    filterRequest();
                    // var newURL = location.href.split("?")[0];
                    // window.history.pushState('object', document.title, newURL);
                }
            }

            $('[data-category-1]').on('click', function () {

                $('[data-category-1]').not(this).removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    termIDOne = $(this).attr('data-category-1');
                    taxonomyOne = $(this).attr('data-taxonomy-1');
                } else {
                    termIDOne = null;
                    taxonomyOne = null;
                }
                filterRequest();
            });


            $('[data-category-2]').on('click', function () {
                $('[data-category-2]').not(this).removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    termIDTwo = $(this).attr('data-category-2');
                    taxonomyTwo = $(this).attr('data-taxonomy-2');
                } else {
                    termIDTwo = null;
                    taxonomyTwo = null;
                }
                filterRequest();
            });

            $('[data-category-3]').on('click', function () {
                $('[data-category-3]').not(this).removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    termIDTree = $(this).attr('data-category-3');
                    taxonomyTree = $(this).attr('data-taxonomy-3');
                } else {
                    termIDTree = null;
                    termIDTree = null;
                }
                filterRequest();
            });

            $('[data-suggestion]').on('click', function () {
                $(this).toggleClass('active');
                suggestionsList = [];
                $('[data-suggestion]').each(function () {
                    if ($(this).hasClass('active')) {
                        suggestionsList.push($(this).attr('data-suggestion'));
                    }
                });
                filterRequest();
            });

            $('[data-search-field]').on('change', function () {
                var $currentOption = $(this).children('option:selected'),
                    searchType = $currentOption.attr('data-filter');
                switch (searchType) {
                    case 'article':
                        suggestionsList = [$currentOption.attr('data-suggestion')];
                        window.location.href = $currentOption.attr('data-suggestion');
                        filterRequest();
                        break;
                    case 'category-1':
                        termIDOne = $currentOption.attr('data-category-1');
                        taxonomyOne = $currentOption.attr('data-taxonomy-1');
                        filterRequest();
                        break;
                    case 'category-2':
                        termIDTwo = $(this).attr('data-category-2');
                        taxonomyTwo = $(this).attr('data-taxonomy-2');
                        filterRequest();
                        break;
                    case 'category-3':

                        break;
                    default:
                        break;
                }
            });

            var selectedID;
            var selectedTax;
            var searchTerm = "";

            let cats = [];
            let taxs = [];

            $('[data-reset-button]').on('click', function () {
                cats = [];
                taxs = [];
                $('.case-archive__category-button').removeClass('active');

                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'post_filter',
                        postType: postType,
                        selectedTax: selectedTax,
                        reset: true
                    },
                    success: function (response) {
                        filterSuccess(response);
                        if (12 >= response.foundedPosts) {
                            $(loadMore).hide();
                        } else {
                            $(loadMore).show();
                        }
                    }
                });
                $(this).removeClass('active');

            });

            $('[data-reset-button-knowledge]').on('click', function () {
                // filterRequest();
                cats = [];
                taxs = [];

                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'post_filter',
                        postType: postType,
                        selectedTax: selectedTax,
                        reset: true
                    },
                    success: function (response) {
                        filterSuccess(response);
                        if (12 >= response.foundedPosts) {
                            $(loadMore).hide();
                        } else {
                            $(loadMore).show();
                        }
                    }
                });
                $(this).removeClass('active');
                $('.knowledge-archive__category-button').removeClass('active');
                $('.knowledge-archive__type-button').removeClass('active');

            });

            $('.cx-button[data-cx-category-1]').on('click', function (e) {
                e.preventDefault();

                $('.cx-button[data-cx-category-1]').not(this).removeClass('active');
                $(this).toggleClass('active');

                if ($(this).hasClass('active')) {
                    selectedID = $(this).attr('data-cx-category-1');
                    selectedTax = $(this).attr('data-cx-taxonomy-1');
                } else {
                    selectedID = null;
                    selectedTax = null;
                }

                // Check if value is in array
                if (cats.indexOf(selectedID) === -1) {
                    cats.push(selectedID); // If not, push to array
                }

                // Create list for selection
                if (taxs.indexOf(($(this)[0].innerText)) === -1) {
                    taxs.push(($(this)[0].innerText)); // If not, push to array
                }

                // taxs.push($(this)[0].innerText);
                let list = "<li>" + taxs.join("</li><li>") + "</li>";
                document.querySelector(".filter-selections").innerHTML = list;

                // // Prepare array to send to ajax
                selectedTerms = JSON.stringify(cats);

                filterRequest();
            });

            $('.cx-event-button[data-cx-category-1]').on('click', function () {

                $('[data-cx-category-1]').not(this).removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    termIDOne = $(this).attr('data-cx-category-1');
                    taxonomyOne = $(this).attr('data-cx-taxonomy-1');
                } else {
                    termIDOne = null;
                    taxonomyOne = null;
                }


                // Create list for selection
                if (taxs.indexOf(($(this)[0].innerText)) === -1) {
                    taxs.push(($(this)[0].innerText)); // If not, push to array
                }

                // taxs.push($(this)[0].innerText);
                let list = "<li>" + taxs.join("</li><li>") + "</li>";
                document.querySelector(".filter-selections").innerHTML = list;
                jQuery('.filter-selections').show();

                filterRequest();
            });


            $('.cx-event-button[data-cx-category-2]').on('click', function () {
                $('[data-cx-category-2]').not(this).removeClass('active');
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    termIDTwo = $(this).attr('data-cx-category-2');
                    taxonomyTwo = $(this).attr('data-cx-taxonomy-2');
                } else {
                    termIDTwo = null;
                    taxonomyTwo = null;
                }


                // Create list for selection
                if (taxs.indexOf(($(this)[0].innerText)) === -1) {
                    taxs.push(($(this)[0].innerText)); // If not, push to array
                }

                // taxs.push($(this)[0].innerText);
                let list = "<li>" + taxs.join("</li><li>") + "</li>";
                document.querySelector(".filter-selections").innerHTML = list;
                jQuery('.filter-selections').show();

                filterRequest();
            });

            $('.cx-event-button[data-year]').on('click', function () {
                var year,
                    month,
                    dateFilterText = "",
                    monthText;

                year = $(this).attr('data-year');
                month = $(this).attr('data-month');

                if (month != undefined) {
                    monthText = $(this)[0].innerText;
                }

                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'post_filter',
                        postType: postType,
                        year: year,
                        month: month,
                        termIDOne: termIDOne,
                        termIDTwo: termIDTwo,
                        termIDTree: termIDTree,
                        taxonomyTree: taxonomyTree,
                        taxonomyOne: taxonomyOne,
                        taxonomyTwo: taxonomyTwo,
                        suggestionsList: suggestionsList
                    },
                    success: function (response) {
                        filterSuccess(response);

                        if (month != undefined) {
                            dateFilterText += monthText + " ";
                        }
                        dateFilterText += year;

                        if (taxs.indexOf(dateFilterText) === -1) {
                            taxs.push(dateFilterText); // If not, push to array
                        }
                        let list = "<li>" + taxs.join("</li><li>") + "</li>";
                        document.querySelector(".filter-selections").innerHTML = list;
                        jQuery('.filter-selections').show();
                    }
                });
            });

            $('button.cx-event-button.previous-event__view-all-button').on('click', function () {
                $('.previous-event__video-list .dg-home-tv__list').css('display', 'flex');
            });


            dateFilter();

            function dateFilter() {

                var $monthBtn = $('.event-archive__month-button'),
                    $yearBtn = $('.event-archive__year-button'),
                    year,
                    month;
                $yearBtn.on('click', function () {
                    $yearBtn.not($(this)).removeClass('active');
                    $(this).toggleClass('active');

                    year = $(this).attr('data-year');
                    return year;
                });
                $monthBtn.on('click', function () {
                    $monthBtn.not($(this)).removeClass('active');
                    $(this).toggleClass('active');
                    month = $(this).attr('data-month');
                    if (month != undefined && year != undefined) {
                        $.ajax({
                            url: flow.ajax_url,
                            type: 'GET',
                            data: {
                                action: 'post_filter',
                                postType: postType,
                                year: year,
                                month: month,
                                suggestionsList: suggestionsList
                            },
                            success: function (response) {
                                filterSuccess(response);
                            }
                        })
                    }
                })
            }

            $('[careers-filter-2]').on('click', function () {
                $(this).toggleClass('blue');
                $(this).toggleClass('grey');
                $('[careers-filter-1]').removeClass('grey');
                $('[careers-filter-1]').addClass('blue');

                graduateJobs = true;
                $('html, body').animate({
                    scrollTop: $('[data-search-field]').offset().top - 210,
                }, 500);
                filterRequest()
            });

            $('[careers-filter-1]').on('click', function () {
                $(this).removeClass('blue');
                $(this).addClass('grey');
                $('[careers-filter-2]').removeClass('grey');
                $('[careers-filter-2]').addClass('blue');
                $('html, body').animate({
                    scrollTop: $('[data-search-field]').offset().top - 210,
                }, 500);
                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'post_filter',
                        postType: postType,
                        reset: true
                    },
                    success: function (response) {
                        filterSuccess(response);
                        if (12 >= response.foundedPosts) {
                            $(loadMore).hide();
                        } else {
                            $(loadMore).show();
                        }
                    }
                });
            });

            $('[data-podcast-topic]').on('click', function () {
                $(this).toggleClass('active');
                if ($(this).hasClass('active')) {
                    selectedID = $(this).data('podcast-topic');
                    selectedTax = $(this).data('podcast-taxonomy');

                    // Check if value is in array
                    if (cats.indexOf(selectedID) === -1) {
                        cats.push(selectedID); // If not, push to array
                    }
                    // Create list for selection
                    if (taxs.indexOf(($(this)[0].innerText)) === -1) {
                        taxs.push(($(this)[0].innerText)); // If not, push to array
                    }
                }
                else {
                    selectedID = null;
                    selectedTax = null;

                    var catIndex = cats.indexOf($(this).data('podcast-topic'));
                    if (catIndex > -1) {
                        cats.splice(catIndex, 1);
                    }
                    var taxIndex = taxs.indexOf($(this)[0].innerText);
                    if (taxIndex > -1) {
                        taxs.splice(taxIndex, 1);
                    }
                }


                // taxs.push($(this)[0].innerText);
                let list = "<li>" + taxs.join("</li><li>") + "</li>";
                if (searchTerm.length > 0) {
                    list += '<li class="searchTerm">' + searchTerm + "</li>";
                }
                if (taxs.length > 0) {
                    $(".filter-selections")[0].innerHTML = list;
                }
                else {
                    $(".filter-selections")[0].innerHTML = "";
                }
                $('[data-podcast-reset-button]').addClass('active');

                // // Prepare array to send to ajax
                selectedTerms = JSON.stringify(cats);
                filterRequest();
                $(document).on('filterSuccess_complete', function () {
                    sortPodcasts($('select[name="podcast-order-filter"]').val());
                });
            });

            $('input.podcast-search-input').on('change', function () {
                var searchInput = $(this).val();
                if (searchInput.length > 0) {
                    var filterSelections = $(".filter-selections");
                    var filterSearchTermLabel = $(filterSelections).find('li.searchTerm')[0];
                    if (filterSearchTermLabel) {
                        filterSearchTermLabel.innerHTML = searchInput;
                    }
                    else {
                        $(filterSelections).append('<li class="searchTerm">' + searchInput + '</li>');
                    }
                    searchTerm = searchInput;
                    $('[data-podcast-reset-button]').addClass('active');
                }
                else {
                    searchTerm = "";
                    $(".filter-selections").find('li.searchTerm')[0].remove();
                }
                selectedTerms = JSON.stringify(cats);
                filterRequest();

                $(document).on('filterSuccess_complete', function () {
                    sortPodcasts($('select[name="podcast-order-filter"]').val());
                });
            });

            $('select[name="podcast-order-filter"]').on('change', function () {
                sortPodcasts($(this).val());
            });

            function sortPodcasts(sortType) {

                var sortTypeText = "";
                switch (sortType) {
                    case 'date-asc':
                        rowList.sort(podcastDateCompare);
                        rowList.reverse();
                        sortTypeText = "Date (Ascending)";
                        break;
                    case 'date-desc':
                        rowList.sort(podcastDateCompare);
                        sortTypeText = "Date (Descending)";
                        break;
                    case 'length-asc':
                        rowList.sort(podcastLengthCompare);
                        rowList.reverse();
                        sortTypeText = "Length (Ascending)";
                        break;

                    case 'length-desc':
                        rowList.sort(podcastLengthCompare);
                        sortTypeText = "Length (Descending)";
                        break;
                    default:
                        return;
                }
                postsRow = $(postsWrapper).children();
                $(postsRow).remove();
                $(postsWrapper).append(rowList);
                updateRows();

                if (rowList.length > 4) {
                    $(loadMore).show();
                }

                var filterSelections = $(".filter-selections");
                var filterSortOrderLabel = $(filterSelections).find('li.sortOrder')[0];
                if (filterSortOrderLabel) {
                    filterSortOrderLabel.innerHTML = sortTypeText;
                }
                else {
                    $(filterSelections).append('<li class="sortOrder">' + sortTypeText + '</li>');
                }
            }

            function podcastDateCompare(a, b) {
                var aDate = $(a).find('input.podcast_date').val(),
                    bDate = $(b).find('input.podcast_date').val();

                if (aDate > bDate) {
                    return -1;
                }
                if (aDate < bDate) {
                    return 1;
                }
                return 0;
            }

            function podcastLengthCompare(a, b) {
                var aLength = $(a).find('input.podcast_length').val(),
                    bLength = $(b).find('input.podcast_length').val();

                if (aLength > bLength) {
                    return -1;
                }
                if (aLength < bLength) {
                    return 1;
                }
                return 0;
            }

            $('[data-podcast-reset-button]').on('click', function () {
                cats = [];
                taxs = [];
                searchTerm = "";
                $(this).removeClass('active');
                $('[data-podcast-topic]').removeClass('active');
                $('input.podcast-search-input').val("");
                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'post_filter',
                        postType: postType,
                        selectedTax: selectedTax,
                        reset: true
                    },
                    success: function (response) {
                        filterSuccess(response);
                        $(".filter-selections")[0].innerHTML = "";
                        if (12 >= response.foundedPosts) {
                            $(loadMore).hide();
                        } else {
                            $(loadMore).show();
                        }
                    }
                });


            });


            function filterSuccess(response) {

                $('html, body').animate({
                    scrollTop: $(postsWrapper).offset().top - 300,
                }, 500);
                var tl = new TimelineLite;
                tl.to($(postsWrapper).children(), 1,
                    {
                        right: '150%', ease: Power4.easeOut
                    }, 0.2)
                    .call(function () {
                        $(postsWrapper).empty();
                        $(postsWrapper).append(response.html);
                        $(postCounter).find('.post-counter').empty();
                        $(postCounter).find('.found-posts').empty();
                        pageIndex = 1; // Should this always reset back to page

                        args = response.args;
                        foundedPosts = response.foundedPosts;
                        updateRows();

                        var currentPosts;
                        if (postType == 'podcasts') {
                            currentPosts = $(postsWrapper).children().length;
                        } else {
                            currentPosts = $(postsWrapper).children().children().length;
                        }
                        if (currentPosts >= foundedPosts) {
                            $(loadMore).hide();
                        } else {
                            $(loadMore).show();
                        }

                    })
                    .eventCallback('onComplete', function () {
                        var tl = new TimelineLite;
                        tl.to($(postsWrapper).children(), 0.5, {
                                right: '0', ease: Power4.easeOut
                            }, 0.2);
                        $(pagination).find('.post-counter').text(pageIndex);

                        if((foundedPosts / itemsPerPage) <= 1 ){
                            $(pagination).find('.found-posts').text("1");
                            $('[data-filter-go-back]').hide();
                        }else{
                            $(pagination).find('.found-posts').text( Math.ceil(response.foundedPosts / itemsPerPage));
                            $('[data-filter-go-back]').hide();
                        }
                        foundedPosts = response.foundedPosts;
                        termIDOne = response.termIDOne;
                        termIDTwo = response.termIDTwo;
                        taxonomyOne = response.taxonomyOne;
                        taxonomyTwo = response.taxonomyTwo;
                        suggestionsList = response.suggestions_list;
                        selectedTerms = response.selectedTerms;
                        selectedTax = response.selectedTax;
                        $('[data-reset-button]').addClass('active');
                        $(document).trigger('filterSuccess_complete');
                    });
            }

            var postsCount = $(postsWrapper).find($(filteredPosts)).length,
                postsRow = $(postsWrapper).children();

            $(loadMore).on('click', function () {
                if (postType != 'event' && postType != 'podcasts') {
                    filterAnimation();
                    if (postType != 'careers') {
                        $('html, body').animate({
                            scrollTop: $(postsWrapper).offset().top - 150,
                        }, 500);
                    }
                }
                else if (postType == 'podcasts') {
                    var currentRows = $(postsWrapper).children();
                    if (rowList.length > currentRows.length) {
                        $newRows = rowList.slice(currentRows.length, currentRows.length + 4);
                        $(postsWrapper).append($newRows);
                        currentRows = $(postsWrapper).children();
                        if (rowList.length == currentRows.length) {
                            $(loadMore).hide();
                        }
                    }
                }
                else {
                    if (rowList.length > rowsStart) {
                        var $currentRows = $(postsWrapper).children(),
                            $newRows = rowList.slice(rowsStart);
                        $(postsWrapper).append($newRows);
                        var tl = new TimelineLite();
                        tl
                            .fromTo($newRows, 1,
                                {
                                    right: '-150%'
                                },
                                {
                                    right: '0', ease: Power4.easeOut
                                }, 0.2)
                            .call(function () {
                                $(loadMore).hide();
                            });
                    } else {
                        return false;
                    }
                }
            });
            $('[data-filter-go-back]').on('click', function () {
                filterAnimationBack();
                if (postType != 'careers') {
                    $('html, body').animate({
                        scrollTop: $(postsWrapper).offset().top - 150,
                    }, 500);
                }
            });
            function filterAnimationBack() {
                var rowPreviousStart = rowsStart - (rowPerPage * 2);
                var rowPreviousEnd = rowPreviousStart + rowPerPage;
                var $currentRows = $(postsWrapper).children(),
                    $newRows = rowList.slice(rowPreviousStart, rowPreviousEnd);
                var tl = new TimelineLite();
                tl.to($currentRows, 0.5, {
                    right: '150%',
                }, 0.2)
                    .call(function () {
                        $currentRows.remove();
                        $(postsWrapper).append($newRows);
                    })
                    .fromTo($newRows, 1, { right: '-150%' }, { right: '0', ease: Power4.easeOut }, 0.2)
                    .call(function () {
                        rowsStart -= rowPerPage;
                        rowsEnd -= rowPerPage;

                        var totalPosts = 0;
                        $.each($currentRows, function (index, value) {
                            totalPosts += value.children.length;
                        });

                        postsCount -= totalPosts; //(rowPerPage * (rowPreviousEnd - rowPreviousStart));
                        pageIndex -= 1;
                        $(pagination).find('.post-counter').text(pageIndex);

                        handlePaginationButtonDisplay();
                    });
            }

            function handlePaginationButtonDisplay() {
                let foundPosts = $(pagination).find('.found-posts')[0].innerText;
                if (pageIndex >= foundPosts) {
                    $(loadMore).hide();
                } else {
                    $(loadMore).show();
                }
                if ((pageIndex <= 1 && foundPosts === "1") || pageIndex <= 1) {
                    $('[data-filter-go-back]').hide();
                } else {
                    $('[data-filter-go-back]').show();
                }
            }
            function filterAnimation() {
                if (rowList.length > rowsStart) {
                    var $currentRows = $(postsWrapper).children(),
                        $newRows = rowList.slice(rowsStart, rowsEnd);
                    var tl = new TimelineLite();
                    if (postType === 'careers') {
                        tl
                            .call(function () {
                                $(postsWrapper).append($newRows)
                            })
                            .fromTo($newRows, 1, {
                                right: '-150%'
                            },
                                {
                                    right: 0, ease: Power4.easeOut
                                }, .2)
                            .call(function () {
                                rowsStart += rowPerPage;
                                rowsEnd += rowPerPage;
                                postsCount = $(postsWrapper).children().length;
                                $(pagination).find('.post-counter').text(postsCount);
                                if ($(postsWrapper).children().children().length >= $(pagination).find('.found-posts')[0].innerText) {
                                    $(loadMore).hide();
                                } else {
                                    $(loadMore).show();
                                }
                            });
                    } else {

                        tl
                            .to($currentRows, 0.5, {
                                right: '150%',
                            }, 0.2)
                            .call(function () {
                                $currentRows.remove();
                                $(postsWrapper).append($newRows);
                            })
                            .fromTo($newRows, 1, { right: '-150%' }, { right: '0', ease: Power4.easeOut }, 0.2)
                            .call(function () {
                                rowsStart += rowPerPage;
                                rowsEnd += rowPerPage;
                                postsCount += $(postsWrapper).children().children().length;
                                pageIndex += 1
                                $(pagination).find('.post-counter').text(pageIndex);

                                let foundPostsPagination = $(pagination).find('.found-posts'),
                                    pagePostCount = 0;

                                if(postType == "case-study" || postType == "dle-case-study" || postType == "knowledge"){
                                    if(!isNaN(foundedPosts)){
                                        pagePostCount = Math.ceil(foundedPosts / itemsPerPage);
                                    }else{
                                        pagePostCount = foundPostsPagination.innerText;
                                    }
                                }else if(foundedPosts < foundPostsPagination){
                                    pagePostCount = Math.ceil(foundedPosts ?? totalPostCount / itemsPerPage);
                                }else{
                                    pagePostCount = foundPostsPagination.innerText;
                                }

                                foundPostsPagination.text(pagePostCount);

                                handlePaginationButtonDisplay();
                            });

                    }
                } else {
                    return false;
                }
            }

        }

       /*var checkTypedTitle = document.getElementById('typed-title');
        var typedTitleData = $('#typed-title').data('title');
        if (checkTypedTitle) {
            var optionsTypedTitle = {
                strings: [typedTitleData],
                typeSpeed: 40,
                showCursor: true,
                cursorChar: '|',
                autoInsertCss: true,
            };
            new Typed('#typed-title', optionsTypedTitle);
        }*/


        function locationsAnimationOllie() {
            $(document).on('click', '.legalLocationsIcon', function () {
                var $currentCard = $(this).parent().parent();
                if ($(this).hasClass('activeIcon')) {
                    $(this).removeClass('activeIcon')
                    $($currentCard).removeClass('activeLocation');
                    $('.legalLocationsCell').height(190);
                } else {
                    $('.legalLocationsCell').removeClass('activeLocation');
                    $('.legalLocationsIcon').removeClass('activeIcon');
                    $('.legalLocationsCell').height(190);
                    $(this).addClass('activeIcon')
                    $($currentCard).addClass('activeLocation');
                    var heightCustom = ($('.activeLocation .details').outerHeight()) + 70;
                    $('.activeLocation').height(heightCustom);
                }


            });
        }
        locationsAnimationOllie()
        function locationsAnimation() {
            $(document).on('click', '.ls-locations__icon', function () {
                var $currentCard = $(this).parent().parent(),
                    postsIndex;
                $('.ls-locations__icon').removeClass('activeState');
                $currentCard.find('.loc-details').removeClass('display')
                if ($(window).width() > 1024) {
                    postsIndex = $('.ls-locations__wrapper').index($currentCard) + 3;
                }
                if ($(window).width() > 640 && 1025 > $(window).width()) {
                    postsIndex = $('.ls-locations__wrapper').index($currentCard) + 1;
                }
                if (641 > $(window).width()) {
                    postsIndex = $('.ls-locations__wrapper').index($currentCard) + 1;
                }
                $('.ls-locations__wrapper').each(function (i) {
                    $(this).css('top', '0');
                });
                $('.loc-details').removeClass('display');
                $('.loc-details').css({
                    'max-height': '130px',
                    'top': '0%',
                    'opacity': '1'
                });
                if ($(this).hasClass('active')) {
                    $('.loc-details').css({
                        'max-height': '130px',
                        'top': '0%',
                        'opacity': '1'
                    });
                    $('.ls-locations__wrapper').each(function (i) {
                        if (i === $currentCard.index() + postsIndex) {
                            $(this).css('top', '0');
                            if ($(window).width() > 1024) {
                                postsIndex += 3;
                            }
                            if ($(window).width() > 640 && 1025 > $(window).width()) {
                                postsIndex += 1;
                            }
                            if (641 > $(window).width()) {
                                postsIndex += 1;
                            }
                        }
                    });
                    $('.ls-locations__icon').removeClass('active');
                    $(this).removeClass('active');
                    $(this).removeClass('activeState');
                    // $('.ls-locations__post-list').animate({height:currentHeight}, 300);
                    $('.ls-locations__post-list').height(currentHeight);
                } else {
                    var top = $currentCard.find('.loc-details')[0].scrollHeight;
                    $currentCard.find('.loc-details').addClass('display')
                    $currentCard.find('.loc-details').css({
                        'max-height': top + 20,
                        'top': '92%',
                        'opacity': '1'
                    });
                    $('.ls-locations__wrapper').each(function (i) {
                        if (i === $currentCard.index() + postsIndex) {
                            $(this).css('top', top + 20);
                            if ($(window).width() > 1024) {
                                postsIndex += 3;
                            }
                            if ($(window).width() > 640 && 1025 > $(window).width()) {
                                postsIndex += 1;
                            }
                            if (641 > $(window).width()) {
                                postsIndex += 1;
                            }
                        } else {
                            $(this).css('top', '0');
                        }
                    });
                    $('.ls-locations__icon').removeClass('active');
                    $(this).addClass('active');
                    $(this).addClass('activeState');
                    var newHeight = currentHeight + 400;
                    // $('.ls-locations__post-list').animate({height:newHeight},300);
                    $('.ls-locations__post-list').height(newHeight);
                }
            })
        }
        // locationsAnimation();
        !function (e) { var t = e(".accordion > dd").hide(), a = e(".accordion > dt"), s = e(".accordion > dt span"); e(".accordion > dt > a").click(function (c) { c.preventDefault(); let i = e(this).parent()[0]; return console.log(i.className, "active" === i.className), "active" === i.className ? (t.slideUp(), a.removeClass("active"), s.text("+")) : (t.slideUp(), a.removeClass("active"), s.text("+"), e(this).parent().next().slideDown(), e(this).parent().addClass("active"), e(this).children("span").first().text("-")), !1 }) }(jQuery); (jQuery);


        function faqPostAnimation() {
            $(document).on('click', '.faq-post__icon', function () {
                var $currentCard = $(this).parent().parent(),
                    postsIndex;
                $('.faq-post__icon').removeClass('activeState');
                if ($(window).width() > 1024) {
                    postsIndex = $('.faq-post__wrapper').index($currentCard) + 4;
                }
                if ($(window).width() > 640 && 1025 > $(window).width()) {
                    postsIndex = $('.faq-post__wrapper').index($currentCard) + 2;
                }
                if (641 > $(window).width()) {
                    postsIndex = $('.faq-post__wrapper').index($currentCard) + 1;
                }
                if ($(this).hasClass('active')) {
                    $currentCard.find('.faq-post__description').css({
                        'max-height': '0',
                        'top': '0%',
                        'opacity': '0'
                    });
                    $('.faq-archive__post-list .faq-post__title').each(function (i) {
                        if (i === $currentCard.index() + postsIndex) {
                            $(this).css('top', '0');

                            if ($(window).width() > 1024) {
                                postsIndex += 4;
                            }
                            if ($(window).width() > 640 && 1025 > $(window).width()) {
                                postsIndex += 2;
                            }
                            if (641 > $(window).width()) {
                                postsIndex += 1;
                            }

                        }
                    });
                    $('.faq-archive__post-list .faq-post__description').each(function (i) {
                        if (i === $currentCard.index() + postsIndex) {
                            $(this).css('top', '0');
                            if ($(window).width() > 1024) {
                                postsIndex += 4;
                            }
                            if ($(window).width() > 640 && 1025 > $(window).width()) {
                                postsIndex += 2;
                            }
                            if (641 > $(window).width()) {
                                postsIndex += 1;
                            }
                        }
                    });
                    $('.faq-archive__footer').css('margin-top', '0');
                    $(this).removeClass('active');
                    $(this).removeClass('activeState');
                } else {
                    var top = $currentCard.find('.faq-post__description')[0].scrollHeight;
                    $currentCard.find('.faq-post__description').css({
                        'max-height': top + 20,
                        'top': '99%',
                        'opacity': '1'
                    });

                    $('.faq-archive__post-list .faq-post__title').each(function (i) {
                        if (i === $currentCard.index() + postsIndex) {
                            $(this).css('top', top + 20);
                            if ($(window).width() > 1024) {
                                postsIndex += 4;
                            }
                            if ($(window).width() > 640 && 1025 > $(window).width()) {
                                postsIndex += 2;
                            }
                            if (641 > $(window).width()) {
                                postsIndex += 1;
                            }
                        } else {
                            $(this).css('top', '0');
                        }
                    });
                    $('.faq-archive__post-list .faq-post__description').each(function (i) {
                        if (i === $currentCard.index() + postsIndex) {
                            $(this).css('top', 'calc(100% + ' + top);
                            if ($(window).width() > 1024) {
                                postsIndex += 4;
                            }
                            if ($(window).width() > 640 && 1025 > $(window).width()) {
                                postsIndex += 2;
                            }
                            if (641 > $(window).width()) {
                                postsIndex += 1;
                            }
                        } else {
                            $(this).not($currentCard.find('.faq-post__description')).css({
                                'top': '0',
                                'max-height': '0',
                                'opacity': '0'
                            });
                        }
                    });
                    $('.faq-archive__footer').css('margin-top', top + 32);
                    $(this).addClass('active');
                    $(this).addClass('activeState');
                }
            })
        }

        faqPostAnimation();

        function nonCaseSensitiveMatchCustom(params, data) {
            if ($.trim(params.term) === '') {
                return data;
            }
            if (typeof data.text === 'undefined') {
                return null;
            }

            if (data.element.value.toLowerCase().indexOf(params.term.toLowerCase().replace(' ', '_')) > -1) {
                var modifiedData = $.extend({}, data, true);
                modifiedData.text += ' (matched)';

                return modifiedData;
            }

            // Return `null` if the term should not be displayed
            return null;
        }

        function matchCustom(params, data) {
            if ($.trim(params.term) === '') {
                return data;
            }
            if (typeof data.text === 'undefined') {
                return null;
            }

            if (data.element.value.indexOf(params.term.replace(' ', '_')) > -1) {
                var modifiedData = $.extend({}, data, true);
                modifiedData.text += ' (matched)';

                return modifiedData;
            }

            // Return `null` if the term should not be displayed
            return null;
        }

        $('.dg-select-2').select2({
            minimumInputLength: 1,
            matcher: matchCustom
        }
        );

        $('.dg-select-2-non-case-sensitive').select2({
            minimumInputLength: 1,
            matcher: nonCaseSensitiveMatchCustom
        });

        daviesTvSlider();

        function daviesTvSlider() {
            var options = {
                effect: 'coverflow',
                loop: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                initialSlide: 0,
                keyboardControl: true,
                mousewheelControl: true,
                lazyLoading: true,
                preventClicks: false,
                preventClicksPropagation: false,
                lazyLoadingInPrevNext: true,
                navigation: {
                    nextEl: '.tv-archive-fresh__next',
                    prevEl: '.tv-archive-fresh__prev',
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 650,
                    depth: 290,
                    modifier: 1,
                    slideShadows: false,
                },
                on: {
                    slideChangeTransitionEnd: function () {
                        var currentIndex = this.activeIndex,
                            video;

                        if (video = $(this.slides[this.activeIndex - 1]).find('video')) {
                            video.remove();
                            $(this.slides[this.activeIndex - 1]).find('button').show();
                            $(this.slides[this.activeIndex - 1]).find('.video-placeholder').show();
                        }
                    }
                }
            },
                sliderContainer = '.swiper-container';

            if ($(sliderContainer).length) {
                var mySwiper = new Swiper(sliderContainer, options);

            }
        };
        videoArchivePlay('.tv-archive__play');
        videoArchiveSolutionsPlay('.tv-archive__play__new');
        videoArchiveSolutionsBanner('.tv-archive__play__banner');
        videoArchivePlay('.tv-archive-fresh__post button');

        function videoArchivePlay(playBtn) {
            $(document).on('click', playBtn, function () {
                var $currentPost = $(this).parent().parent().parent(),
                    postId = $(this).attr('data-play'),
                    $videoWrapper = $(this).parent();
                $('.tv-archive__post-row').not($currentPost).removeClass('active');
                $currentPost.addClass('active');
                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'archive_video',
                        postID: postId,
                    },
                    success: function (response) {
                        $videoWrapper.find('.video-placeholder').hide();
                        $videoWrapper.find('button').hide();
                        $videoWrapper.append(response);
                        $videoWrapper.find('video').trigger('play');
                        if (playBtn == '.tv-archive__play') {
                            var $otherPosts = $('.tv-archive__post-header').not($videoWrapper);
                            $otherPosts.find('iframe').remove();
                            $otherPosts.find('.video-placeholder').show();
                            $otherPosts.find('button').show();

                        }
                    }
                });
            })
        }
        function videoArchiveSolutionsPlay(playBtn) {
            $(document).on('click', playBtn, function () {
                var $currentPost = $(this).parent().parent().parent(),
                    postId = $(this).attr('data-play'),
                    $videoWrapper = $(this).parent();
                $('.tv-archive__post-row').not($currentPost).removeClass('active');
                $currentPost.addClass('active');
                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'archive_video_solution',
                        postID: postId,
                    },
                    success: function (response) {
                        $videoWrapper.find('.video-placeholder').hide();
                        $videoWrapper.find('button').hide();
                        $videoWrapper.append(response);
                        $videoWrapper.find('video').trigger('play');
                        if (playBtn == '.tv-archive__play') {
                            var $otherPosts = $('.tv-archive__post-header').not($videoWrapper);
                            $otherPosts.find('iframe').remove();
                            $otherPosts.find('.video-placeholder').show();
                            $otherPosts.find('button').show();

                        }
                    }
                });
            })
        }
        function videoArchiveSolutionsBanner(playBtn) {
            $(document).on('click', playBtn, function () {
                var postId = $(this).attr('data-play'),
                    $videoWrapper = $(this).parent();
                $.ajax({
                    url: flow.ajax_url,
                    type: 'GET',
                    data: {
                        action: 'archive_video_solution',
                        postID: postId,
                    },
                    success: function (response) {
                        $videoWrapper.find('.video-placeholder').hide();
                        $videoWrapper.find('button').hide();
                        $videoWrapper.append(response);
                    }
                });
            })
        }
        caseArchive();

        function caseArchive() {
            var $resetBtn = $('.case-archive__reset'),
                $categoryLabel = $('.case-archive__breadcrumbs .category'),
                $breadCrumbs = $('.case-archive__breadcrumbs'),
                $title = $('.case-archive__list-title h3');

            $('.case-archive__category-button').on('click', function () {

                $resetBtn.addClass('active');
                $title.hide();
                $breadCrumbs.show();
                $categoryLabel.empty();
                $categoryLabel.append($(this)[0].innerText);
            });

            $('.case-archive__search').on('change', function () {
                $resetBtn.addClass('active');
            });

            $resetBtn.on('click', function () {
                $(this).removeClass('active');
                selections = [];
                $title.show();
                $breadCrumbs.hide();
            })
        }


        eventForm();

        function eventForm() {
            var index = 2,
                attendeeList = '';
            $('.event-form__add').on('click', function () {
                var field = '<span class="wpcf7-form-control-wrap name-attendee-' + index + '"><input type="text" name="name-attendee-' + index + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required attendee-name" aria-required="true" aria-invalid="false" placeholder="Name Attendee ' + index + '*" /></span><br >';
                $(this).before(field);
                index++;
            });

            $('.event-form__button').on('click', function () {

                $('.event-form__form').find('.wpcf7-submit').trigger('submit');
            });
        }

        $(document).on('wpcf7:invalid', function () {
            if ($('.event-form').length) {
                $('html, body').animate({
                    scrollTop: $('.event-form').offset().top - 150,
                }, 500);
            }
        });
        $('.event-archive-description__button').on('click', function () {
            $('html, body').animate({
                scrollTop: $('.event-form').offset().top - 150,
            }, 500);
        });
        if ($('.careers-form').length) {

            $('.careers-form .job-position input').val('Job Position:' + $('.careers-single-hero__title')[0].innerText);

        }
        $('.careers-form__form .form__wrapper').on('change', function () {
            var input = $(this).find('input'),
                inputEmpty;

            input.each(function () {
                if ($(this).val() === '') {
                    return inputEmpty = false;
                } else {
                    return inputEmpty = true;
                }
            });
            if (inputEmpty === true && $(this).find('textarea').val() !== '') {
                $('.careers-form__submit').removeClass('learn-more--grey');
            }

        });
        $('.careers-form__submit').on('click', function () {
            $('.careers-form').find('.wpcf7-submit').trigger('click')
        });
        $('.careers-form__file').on('click', function () {
            $('.careers-form').find('.wpcf7-form-control').trigger('click')
        });
        $('.careers-single-main__load-more').on('click', function () {
            if ($(window).width() > 768) {
                $('.careers-form').show();
                $('html, body').animate({
                    scrollTop: $('.careers-form').offset().top - 150,
                }, 500);
            }
            ;
        });
        caseProgressAn();

        function caseProgressAn() {
            $('.case-hero__item svg').each(function () {
                var percentageComplete = $(this).attr('data-percent') / 100,
                    progressCirlse = $(this).find('.js-countdown__progress');

                var tl = new TimelineLite({ paused: true });
                tl.fromTo(progressCirlse, 1, { drawSVG: "0%", visibility: "visible" }, {
                    drawSVG: "100%",
                    ease: Linear.easeNone
                });
                TweenLite.to(tl, 1, { progress: percentageComplete, delay: 1 });
            });

        }

        $('[data-tab-scroll]').on('click', function () {
            if (1025 > $(window).width()) {
                $('html, body').animate({
                    scrollTop: $('.tabs-content').offset().top + 150,
                }, 500);
            }
        });
        // contactTab();

        // function contactTab() {
        //     var $catBtn = $('.contact__category-item button'),
        //         $tabBody = $('.contact__tab-body'),
        //         $tabWrap = $('.contact__tab-wrap'),
        //         $subcatBtn = $('.contact__subcat-item button');


        //     $('.contact__form .email-target input').val('');
        //     if (flow.subject) {
        //         $('.subject input').val(flow.subject);
        //     }
        //     if (flow.category) {
        //         var index;
        //         $tabWrap.addClass('active');
        //         $catBtn.each(function () {
        //             if ($(this)[0].innerText == flow.category) {
        //                 $(this).addClass('active');
        //                 index = $catBtn.index($(this));
        //             }
        //         });
        //         $($tabBody[index]).show();
        //         $subcatBtn.each(function () {
        //             if ($(this)[0].innerText == flow.subject) {
        //                 $(this).addClass('active');
        //                 $('.contact__form .email-target input').val($(this).attr('data-recipient-email'))
        //             }
        //         })
        //     }
        //     $catBtn.on('click', function () {
        //         var currentIndex = $catBtn.index($(this));
        //         $catBtn.not(this).removeClass('active');
        //         $(this).addClass('active');
        //         if (!$tabWrap.hasClass('active')) {
        //             $tabWrap.addClass('active');
        //         }
        //         $tabBody.hide();
        //         if (currentIndex == 5) {
        //             var emailFind = $('.contact__tab-body:last-child select option:last-child').attr('data-recipient-email');
        //             var subjectFind = $('.contact__tab-body:last-child select option:last-child').val();
        //             $('input[name=email-target]').val(emailFind);
        //             $('.subject input').val(subjectFind);
        //         } else {
        //             $($tabBody[currentIndex]).show();
        //         }

        //         $($($tabBody[currentIndex]).find($subcatBtn)[0]).addClass('active');
        //     });

        //     $subcatBtn.on('click', function () {
        //         $subcatBtn.not(this).removeClass('active');
        //         $(this).addClass('active');
        //         $('.subject input').val($(this)[0].innerText);
        //         updateEmail();
        //     });

        //     function updateEmail() {
        //         var email;
        //         $subcatBtn.each(function () {
        //             if ($(this).hasClass('active')) {
        //                 email = $(this).attr('data-recipient-email')
        //             }
        //         });
        //         $('.contact__form .email-target input').val(email);
        //     }

        // }

        $('[data-form-submit]').on('click', function () {
            $('.contact__form').find('.wpcf7-submit').trigger('click')
        });
        $('.contact .contact__form').on('change', function () {
            var input = $(this).find('input'),
                inputEmpty;

            input.each(function () {
                if ($(this).val() === '') {
                    return inputEmpty = false;
                } else {
                    return inputEmpty = true;
                }
            });
            if (inputEmpty === true && $(this).find('textarea').val() !== '') {
                $('.contact__submit').removeClass('learn-more--grey');
            }

        });

        // menuDesktop();

        $('.dg-tab-section__button').on('click', function () {
            $('html, body').animate({
                scrollTop: $('.dg-team-section').offset().top - 100,
            }, 500);
        })
        $('.view-locations-button').on('click', function () {
            $('html, body').animate({
                scrollTop: $('.dg-solutions-map').offset().top - 25,
            }, 500);
        })

        if (1025 > $(window).width()) {
            solutionMarkers();
        }

        locationMarkers();

        function locationMarkers() {
            var $marker = $('.js-map-marker'),
                $description = $('.js-map-text');
            $marker.on('click', function () {
                $('.js-map-marker').removeClass('activePin');
                $('.js-map-text').removeClass('show');
                var index = $(this).attr('data-index');
                $(this).addClass('activePin');
                setTimeout(function () {
                    $description.each(function () {
                        // $description.removeClass('show');
                        if ($(this).attr('data-index') === index) {
                            $(this).addClass('show');
                        }
                    })
                }, 500);
            })
        }

        if ($('.location__container').length) {
            mainOffice($('.js-map-marker.main-office'));

        }

        function mainOffice($marker) {
            var id = $marker.data('index');
            $('#' + id).addClass('is-active');
            //var marker = document.getElementById('marker' + id);
            //var marker_desc = document.getElementById('desc' + id);
            // dynamicPath(marker, marker_desc);
        }

        $(document).on('change.zf.tabs', function () {
            $('.tabs-panel').each(function () {

                if ($(this).hasClass('is-active')) {
                    $(this).find('.location__container').addClass('active');
                    var $marker = $(this).find($('.js-map-marker.main-office')),
                        $desc = $('.location__description');
                    $desc.each(function () {
                        if ($(this).hasClass('main_office')) {
                            $(this).addClass('show');
                        } else {
                            $(this).removeClass('show');
                        }

                    });
                    mainOffice($marker);

                } else {
                    $(this).find('.location__container').removeClass('active');
                }
            })
        });
        $('[data-tab-anchore]').on('click', function () {
            var $anchore = $(this);
            $('html, body').animate({
                scrollTop: $('.location').offset().top - 100,
            }, 500);

            $('.tabs-title a').each(function () {
                if ($('.tabs-title a').index($(this)) == $anchore.attr('data-tab-anchore')) {
                    $(this).trigger('click')
                }
            })
        })

        footerHeight();

        // if (Foundation.MediaQuery.current == 'small') {
        //     $('.sticky').removeAttr('data-sticky');
        // }
        // $(document).foundation();
        // $('.dg-technology-hero__right-list').on("click", ".dg-technology-hero__play", function () {
        //     $(this).parent().find('video').get(0).play();
        //     $(this).hide();
        // });
    });


    $('.cta-button-legal-view-all').click(function () {
        $('.action__buttons__legal__archive').slideDown();
        $('.cta-button-legal-view-all').hide();
    });

    $('.legalViewProfile').click(function () {

        if ($('.legalViewProfile').hasClass('activeProfile')) {
            $('.legalViewProfile').removeClass('activeProfile');
            $('.profileText').slideUp();
            $('.legalViewProfile').html('View Profile');
        } else {
            $('.legalViewProfile').addClass('activeProfile');
            $('.profileText').slideDown();
            $('.legalViewProfile').html('Close Profile');
        }
    });

    $('#selSector').select2();
    $('#selExpertise').select2();
    $("#solutions-select").select2();
    heroCheck();
    $(window).resize(function () {
        heroCheck()
    });

    function heroCheck() {
        // if (document.body.clientWidth > 640) {
        //     $('#hero-for-mobile').hide();
        //     $('#hero-for-desktop').show();
        //     $('.knowledge-single-hero').css('height', $('#hero-image').height());
        // } else {
        //     $('#hero-for-mobile').show();
        //     $('#hero-for-desktop').hide();
        // }
    }


    //accordions

    $('.toggle-learning-accordion').click(function () {
        var elem = $(this).closest('.learning-accordion');
        if ($(this).hasClass('active')) {
            $(elem).find('.accordion-content-learning').slideUp('fast');
            $(this).removeClass('active');
        } else {
            $('.toggle-learning-accordion').removeClass('active');
            $('.accordion-content-learning').slideUp('fast');
            $(this).addClass('active');
            $(elem).find('.accordion-content-learning').slideDown('fast');
        }

    })

    // individual course form



    // learning solutions slider
    $('.learning-clients-slick').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.learning-archive-media-list').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    var learningTvSlick = $('.dg-learning-tv-slick .dg-video').length;
    if (learningTvSlick >= 3) {
        $('.dg-learning-tv-slick').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            autoplay: false,
            infinite: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

    }


    //new home slider

    $('.image-carosel').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
    });

    $('.dg-tech-background-slider').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        infinite: true,
    });
    function changeImageHome(bgUrl) {
        document.getElementById('slideBgChangeHome').style.backgroundImage = 'url("' + bgUrl + '")';
    };

    function solutionSlider() {

        var $solutionSlider = $('.slick-track-container'),
            $sliderBtn = $('[solution-arrow]');
        $solutionSlider
            .slick({
                prevArrow: $('[solution-arrow-left]'),
                nextArrow: $('[solution-arrow-right]'),
                cssEase: 'linear',
                // speed: 1000,
                autoplay: false,
                // autoplaySpeed: 5000,
                // pauseOnHover: true,
                swipeToSlide: true,
                infinite: true,
                slidesToShow: 1
            })
            .on('beforeChange', function () {

            })
        if ($('.slide-indexer').length < 5) {
            $('.test-overlay-div-desktop').eq(0).addClass('activeSlideTab');
            $('.service-promotion-title').text('OUR SOLUTIONS');
        } else {
            $('.service-promotion-title').text('OUR SOLUTIONS');
        }
        $('.slick-track-container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.test-overlay-div').removeClass('activeSlideTab');
            $('.slide-indexer').eq(nextSlide).addClass('activeSlideTab');
            $('.slide-link-indexer').eq(nextSlide).addClass('activeSlideTab');
            $('.image-carosel').slick('slickGoTo', nextSlide);

        });
        $('.slick-track-container').on('afterChange', function (event, slick, currentSlide) {
            if ($('.slide-content.slick-active').hasClass('our-solutions-slide')) {
                $('.service-promotion-title').text('OUR SOLUTIONS');
            } else {
                $('.service-promotion-title').text('OUR SOLUTIONS');
            }
        });
        $('.slide-indexer').click(function () {
            var indexSlide = $(this).index('.slide-indexer');
            $('.slick-track-container').slick('slickGoTo', indexSlide);
        })
    };

    solutionSlider();

    // solutions title change
    if ($('.dg-tab-section__title')) {
        var initialTitle = $('.dg-tab-section__title').text();
    }

    $('.dg-tab-section__item button').click(function () {
        var newTitle = $(this).text();
        $('.dg-tab-section__title').text(initialTitle + ' - ' + newTitle);
    });

    //ie fixes

    $('.dg-home-tv__post .dg-video__preview .dg-video__play').click(function () {
        $('.dg-home-tv__player').removeClass('hideIe');
    })
    // Scripts which runs at window resize

    $(window).on('resize', function () {

        //jQuery code goes here

        resizeVideo();
        footerHeight();

        if ($(window).width() > 640) {
        }
        // menuAnimation();

    });

    // Scripts which runs on scrolling


}
    (jQuery)
);
/*
 * Title:   Diamond - Business & Corporate - HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]

 1. backToTop
 2. toggleMainMenu
 3. revolutionSlider
 4. counterNumber
 5. mixitupImages
 6. owlCarousel
 7. hoverdirMaster
 8. mobileMenu
 9. childMobileMenu
 10. animatedCountBar
 11. subContentQuestion
 12. setMargin
 13. intMap
 14. filterPrice
 15. slickImages
 16. qtyProduct
 17. raTing
 18. countDown
 19. formValidation

 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; // Start of use strict

function backToTop() {
    if ($('.diamond-backtotop').length) {
        var scrollTrigger = 700,
        backTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.diamond-backtotop').addClass('show-backtotop');
            } else {
                $('.diamond-backtotop').removeClass('show-backtotop');
            }
        };
        $(window).on('scroll', function () {
            backTop();
        });
    }
}

function toggleMainMenu() {
    if($('.bars-desktop').length) {
        $('.bars-desktop').on('click', function() {
            $(this).toggleClass('open');
            $('.header .main-menu .primary-menu').toggle(500);
            return false;
        });
    }
}

function revolutionSlider() {
    if($('#slider_v1').length) {
        jQuery("#slider_v1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on",
                arrows: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 751,
                    hide_over: 9999,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 40,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 40,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 1100,
                    style: "hermes",
                    hide_onleave: false,
                    direction: "horizontal",
                    container: "layergrid",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 28,
                    space: 14,
                    tmp: ''
                }
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [639, 539, 469, 339, 339],
            minHeight: 200
        });
    }

    if($('#slider_v2').length) {
        jQuery("#slider_v2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on",
                arrows: {
                    style: "",
                    enable: true,
                    hide_onmobile: true,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 751,
                    hide_over: 9999,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 40,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 40,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [780, 680, 580, 480, 380],
            minHeight: 250
        });
    }

    if($('#slider_v3').length) {
        jQuery("#slider_v3").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [530, 530, 430, 430, 530]
        });
    }

    if($('#slider_v4').length) {
        jQuery("#slider_v4").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 600000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [700, 600, 500, 400, 500]
        });
    }

    if($('#slider_v5').length) {
        jQuery("#slider_v5").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [950, 850, 750, 550, 650]
        });
    }
}

function counterNumber() {
    if($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
}

function mixitupImages() {
    if($('.mixitup-our-project').length) {
        $('#mix_wrapper').mixItUp();
    }
}
function mixitupImages2() {
    if($('.mexcla_imagenes').length) {
        $('#mix_wrapper2').mixItUp();
    }
}

function owlCarousel() {
    if($('.loop-one').length) {
        $('.loop-one').owlCarousel({
            center: false,
            items: 1,
            nav: false,
            loop: true,
            margin: 0,
            autoplay: true
        });
    }

    if($('.loop-two').length) {
        $('.loop-two').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if($('.loop-three').length) {
        $('.loop-three').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 0,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 2
                },
                1219: {
                    items: 3
                }
            }
        });
    }

    if($('.loop-four').length) {
        $('.loop-four').owlCarousel({
            center: false,
            items: 2,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }

    if($('.loop-five').length) {
        $('.loop-five').owlCarousel({
            center: false,
            items: 1,
            nav: false,
            loop: true,
            margin: 0,
            autoplay: true
        });
    }

    if($('.loop-six').length) {
        $('.loop-six').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }
}

function hoverdirMaster() {
    if($('#da-thumbs').length) {
        $('#da-thumbs .diamond-box-img-full').hoverdir();
    }
}

function mobileMenu() {
    if ($('.bars-mobile').length) {
        $('.bars-mobile').on('click', function () {
            $('.mobile-menu').slideToggle(300, 'linear');
            $('.bars-mobile').toggleClass('open');
            return false;
        });
    }
}

function childMobileMenu() {
    if ($('.nav-holder').length) {
        $('.nav-holder li.has-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><span class="fa fa-chevron-down"></span></button>';
        });

        $('.nav-holder .dropdown-expander').on('click', function () {
            if($(this).parent().parent().hasClass('uk-active')) {
                $(this).parent().parent().children('.submenu').slideToggle();
                $(this).find('span').toggleClass('fa-chevron-down fa-chevron-up');
                $(this).parent('a').parent('li').toggleClass('uk-active');
            }
            else {
                $('.nav-holder li.has-submenu .submenu').slideUp();
                $('.nav-holder li.has-submenu').removeClass('uk-active');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').removeClass('fa-chevron-up');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').addClass('fa-chevron-down');
                $(this).parent().parent().addClass('uk-active');
                $(this).find('span').removeClass('fa-chevron-down');
                $(this).find('span').addClass('fa-chevron-up');
                $(this).parent().parent().children('.submenu').slideDown();
            }
            return false;
        });
    }
}

function animatedCountBar() {
    if($('.animated-count-bar').length) {
        $('.animated-count-bar').waypoint(function() {
            $('.bars').each(function() {
                $(this).find('.count-bar').animate({
                    width:$(this).attr('data-percent')
                },1500);

                $(this).find('.count').animate({
                    left:$(this).attr('data-percent')
                },1500);
            });
	},
        {
            offset: '35%'
	});
    }
}

function subContentQuestion() {
    if ($('.holder-question').length) {
        if($('.holder-question li').hasClass('uk-active')) {
            $(this).children('.sub-content').slideDown();
            $(this).children('a').children('span').attr('class', 'fa fa-minus');
        }
        $('.holder-question .has-title a').on('click', function () {
            if($(this).parent().hasClass('uk-active')) {
                $(this).siblings('.sub-content').slideToggle();
                $(this).children('span').toggleClass('fa-plus fa-minus');
                $(this).parent('li').toggleClass('uk-active');
            }
            else {
                $('.holder-question .has-title .sub-content').slideUp();
                $('.holder-question .has-title').removeClass('uk-active');
                $('.holder-question .has-title a').find('span').removeClass('fa-minus');
                $('.holder-question .has-title a').find('span').addClass('fa-plus');
                $(this).parent().addClass('uk-active');
                $(this).find('span').removeClass('fa-plus');
                $(this).find('span').addClass('fa-minus');
                $(this).siblings('.sub-content').slideDown();
            }
            return false;
        });
    }
}

function setMargin() {
    if($('#rsp_set_margin').length) {
        var w_window = $(window).width();
        var w_container = $('#rsp_set_margin').siblings('.recent-project').children('.uk-container').width();
        var w_margin = (w_window - w_container) / 2;
        var w_margin_dots = w_margin + 130;
        $('#rsp_set_margin .rsp-set-margin').css('margin-left', w_margin + 'px');
        $('#rsp_set_margin .owl-dots').css('margin-left', w_margin_dots + 'px');

        $(window).resize(function() {
            setMargin();
        });
    }
}

function initMap() {
    if ($('.google-map').length) {
        var locations = [
            ['QTC Media <br> Diamond - Business & Corporate - HTML Template', 40.712784, -74.005941, 1]
        ];

        var map = new google.maps.Map(document.getElementById('gmap_contact'), {
            zoom: 16,
            center: new google.maps.LatLng(40.714700, -74.005901),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
               {
                  featureType: 'all',
                  stylers: [
                     {saturation: -80}
                  ]
               }, {
                  featureType: 'road.arterial',
                  elementType: 'geometry',
                  stylers: [
                     {hue: '#00ffee'},
                     {saturation: 50}
                  ]
               }, {
                  featureType: 'poi.business',
                  elementType: 'labels',
                  stylers: [
                     {visibility: 'off'}
                  ]
               }
            ]
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            var iconPath = new google.maps.MarkerImage('images/map-maker.png');
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: iconPath
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    };
}

function filterPrice() {
    if ($('#price_filter').length) {
        $("#price_filter").slider({
            range: true,
            min: 100,
            max: 5000,
            values: [0, 2000],
            slide: function (event, ui) {
                $("#max").val("$" + ui.values[ 1 ]);
            }
        });
        $("#min").val("$" + $("#price_filter").slider("values", 0));
        $("#max").val("$" + $("#price_filter").slider("values", 1));
    }
}

function slickImages() {
    if($('.slick-images-product').length) {
        if($('.slick-big-images').length) {
            $('.slick-big-images').slick({
                dots: false,
                variableWidth: false,
                arrows: false,
                fade: true,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.slick-thumbnail-images'
            });
        }

        if($('.slick-thumbnail-images').length) {
            $('.slick-thumbnail-images').slick({
                dots: false,
                variableWidth: false,
                arrows: false,
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slick-big-images',
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    }
}

function qtyProduct() {
    if($('.box-qty').length) {
        $('.box-qty .qty-plus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            $button.parent().find('.qty-number').val(parseInt(intValue, 10) + 1);
            return false;
        });

        $('.box-qty .qty-minus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            if (parseInt(intValue, 10) > 1) {
                $button.parent().find('.qty-number').val(parseInt(intValue, 10) - 1);
            }
            return false;
        });

        $('.qty-number').on('blur', function () {
            var $button = $(this);
            if ($button.parent().find('.qty-number').val() === "" || parseInt($button.parent().find('.qty-number').val(), 10) === 0) {
                $button.parent().find('.qty-number').val("1");
            }
        });
        $('.qty-number').on('keypress', function (evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
    }
}

function raTing() {
    if ($('#rateYo').length) {
        $("#rateYo").rateYo({
            rating: 3,
            halfStar: true,
            ratedFill: "#f5e246"
        });
    }
}

function countDown() {
    if($('.count-down').length) {
        $('.count-down').countdown({
            date: '2018-05-25',
            offset: -8
        });
    }
}

function formValidation() {
    if ($('#contact_form').length) {
        $('#contact_form').validate({
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
					$(form).find('.response').append(response).css('display', 'block');
                    $(form).find('input[type="text"]').val('');
					$(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
}

// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        toggleMainMenu();
        revolutionSlider();
        counterNumber();
        mixitupImages();
        mixitupImages2();
        owlCarousel();
        hoverdirMaster();
        mobileMenu();
        childMobileMenu();
        animatedCountBar();
        subContentQuestion();
        filterPrice();
        slickImages();
        qtyProduct();
        raTing();
        countDown();
        formValidation();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {
    (function ($) {
        backToTop();
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function () {
    (function ($) {
        setMargin();
    })(jQuery);
});

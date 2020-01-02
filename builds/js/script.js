$(document).ready(function () {

    $.fn.exists = function () {
        return this.length !== 0;
    };

    var isMobile = false;
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    // console.log("Mobile = " + isMobile);
    //--------------------------------- navbar dropdown --------------------------------------//
    if (isMobile) {

        //detecting document width and height
        var screenWidth = $(document).width();
        var screenHeight = $(window).height();
        // console.log(screenWidth, screenHeight);




        if (screenWidth < 992) {
            //set the height of the navbar collapse equal to the height of the document
            $('#navbarNavCollapse').css({
                height: screenHeight - 61
            });
            //adding slide animation up/down when clicking on dropdown toggle

            //close navbar collapse when clicking the underlying layer
            $('.navbar-collapse').click(function (e) {
                // console.log(e.target.className);
                if (e.target.id == "navbarNavCollapse") {
                    $('#navbarNavCollapse').collapse('hide');
                }
            });

            //dropdown does not close when you click outside links
            $(document).on('click', '.collapse .dropdown-menu', function (e) {
                e.stopPropagation();
            });

            //accordion like animation on navbar-dropdown items
            $('nav .dropdown').on('show.bs.dropdown', function () {
                // console.log('dropdown show');
                $(this).children('.dropdown-menu').animate({
                    height: 'toggle'
                }, 400);
            });
            $('nav .dropdown').on('hide.bs.dropdown', function () {
                // console.log('dropdown hide');
                $(this).children('.dropdown-menu').animate({
                    height: 'toggle'
                }, 400);
            });
        }


        //stop the auto height detect by preventing default navbar collapse event
        // animate the slide of the navbar collapse right and left
        $('#navbarNavCollapse').on('show.bs.collapse', function (e) {
            e.preventDefault();
            $(this).addClass('show');
            //stop scrolling on body when collapse is open
            $('body').addClass('modal-open');

            function run(v) {

                $(v[0]).animate(v[1], {
                    duration: 500,
                    step: function (val) {
                        //Adding the transform to your element
                        $('#navbarNavCollapse').css({
                            "transform": `translateX(${val}px)`,
                            "opacity": `${ 1 - (((val/5)*(-1))/100)}`
                        });
                    }
                });
            }

            run([{
                y: -500
            }, {
                y: 0
            }]);
        });

        $('#navbarNavCollapse').on('hide.bs.collapse', function (e) {
            e.preventDefault();
            //remove stop scrolling on body when collapse is open
            $('body').removeClass('modal-open');

            function run(v) {

                $(v[0]).animate(v[1], {
                    duration: 500,
                    step: function (val) {
                        //Adding the transform to your element
                        $('#navbarNavCollapse').css({
                            "transform": `translateX(${val}px)`,
                            "opacity": `${ 1 - (((val/5)*(-1))/100)}`
                        });
                    },
                    done: function () {
                        $('#navbarNavCollapse').removeClass('show');
                    }
                });
            }

            run([{
                y: 0
            }, {
                y: -500
            }]);
        });

    } else {
        //open and close navbar dropdown on hover istead of clicks
        $('.navbar-nav .dropdown').hover(function () {
            $(".navbar-nav .dropdown").children('[data-toggle="dropdown"]').dropdown('hide');
            $(this).children('[data-toggle="dropdown"]').dropdown('show');
            $(this).children('[data-toggle="dropdown"]').attr('aria-expanded', 'true');
        }, function () {
            $(this).children('[data-toggle="dropdown"]').dropdown('hide');
            $(this).children('[data-toggle="dropdown"]').attr('aria-expanded', 'false');
        });
    }
    //--------------------------------- navbar right collapse Search --------------------------------------//
    $('#navbarSearch .close').click(function () {
        $('#innerSearch').animate({
            height: "0%"
        }, 400, function () {
            $('#navbarSearch').collapse('hide');
        });

    });
    $('[href="#navbarSearch"]').click(function () {
        $('#navbarSearch').collapse('show').children().children()
            .animate({
                height: "100%"
            }, 400, function () {
                $('#navbarSearch input').focus();
            });
    });
    //--------------------------------- navbar right collapse Profile --------------------------------------//
    $('#navbarProfile .close').click(function (e) {
        $('#navbarProfile').collapse('hide');
    });
    //--------------------------------- Carousel ------------------------------------------------------------//
    if ($('.carousel').length > 0) {
        $('.carousel').carousel({
            interval: false
        });
        //--------------------------------- carousel-0 badge -------------------------------------//
        if (!(isMobile)) {
            // first carousel badge move on the oppsite direction of mouse move
            //the motion stops after 1 second of mouse not moving
            var mouseX = 0,
                mouseXnew = 0,
                flag,
                distance = 0,
                loop,
                hangerBadge = $("#hanger-front"),
                hangerX,
                timer,
                screenWidth = $(document).width();


            $("#carousel-0.active").mousemove(function (event) {
                clearInterval(timer);
                mouseXnew = event.pageX;
                //detect mouse motion to left or right and determine motion distance
                if (mouseXnew > mouseX) {
                    distance = mouseXnew - mouseX;
                    flag = 0;
                    mouseX = mouseXnew;
                } else if (mouseXnew < mouseX) {
                    flag = 1;
                    distance = mouseX - mouseXnew;
                    mouseX = mouseXnew;
                }
                timer = setTimeout(function () {
                    flag = 10;
                }, 1000);
            });

            $("#carousel-0.active").mouseleave(function () {
                clearInterval(loop);
            });
            //set up the badge postion on mouseener
            $("#carousel-0.active").mouseenter(function (e) {
                mouseX = e.pageX;
                hangerX = $('#hanger-front').position().left;
                loop = setInterval(function () {
                    // console.log("position",hangerX,"distance",distance,"mouseX",mouseX,"mouseXnew",mouseXnew);

                    //move the badge on the opposite direction of mouse motion
                    if (flag === 1) {
                        hangerX += distance / 60;
                        if (hangerX > screenWidth / 1.8) {
                            hangerX = screenWidth / 1.8;
                        }
                        hangerBadge.css({
                            left: hangerX
                        });
                    } else if (flag === 0) {
                        hangerX -= distance / 60;
                        if (hangerX < screenWidth / 9) {
                            hangerX = screenWidth / 9;
                        }
                        hangerBadge.css({
                            left: hangerX
                        });
                    }

                }, 1);

            });
        }

        //determine the next and previous slide thumbnail for contorls---------------------------------------------
        function determineThumbnail() {
            switch (currentIndex) {
                case 0:
                    // console.log("0");
                    var bgprev = $('#carousel-5').css("background-image");
                    $('.carousel-control-prev .thumbnail').css('background-image', bgprev);
                    // console.log(bgprev);
                    var bgnext = $('#carousel-1').css("background-image");
                    $('.carousel-control-next .thumbnail').css('background-image', bgnext);
                    // console.log(bgnext);
                    break;
                case 1:
                    // console.log(1);
                    var bgprev = $('#carousel-0').css("background-image");
                    $('.carousel-control-prev .thumbnail').css('background-image', bgprev);
                    // console.log(bgprev);
                    var bgnext = $('#carousel-2').css("background-image");
                    $('.carousel-control-next .thumbnail').css('background-image', bgnext);
                    break;
                case 2:
                    // console.log(2);
                    var bgprev = $('#carousel-1').css("background-image");
                    $('.carousel-control-prev .thumbnail').css('background-image', bgprev);
                    // console.log(bgprev);
                    var bgnext = $('#carousel-3').css("background-image");
                    $('.carousel-control-next .thumbnail').css('background-image', bgnext);
                    break;
                case 3:
                    // console.log(3);
                    var bgprev = $('#carousel-2').css("background-image");
                    $('.carousel-control-prev .thumbnail').css('background-image', bgprev);
                    // console.log(bgprev);
                    var bgnext = $('#carousel-4').css("background-image");
                    $('.carousel-control-next .thumbnail').css('background-image', bgnext);
                    break;
                case 4:
                    // console.log(4);
                    var bgprev = $('#carousel-3').css("background-image");
                    $('.carousel-control-prev .thumbnail').css('background-image', bgprev);
                    // console.log(bgprev);
                    var bgnext = $('#carousel-5').css("background-image");
                    $('.carousel-control-next .thumbnail').css('background-image', bgnext);
                    break;
                case 5:
                    // console.log(5);
                    var bgprev = $('#carousel-4').css("background-image");
                    $('.carousel-control-prev .thumbnail').css('background-image', bgprev);
                    // console.log(bgprev);
                    var bgnext = $('#carousel-0').css("background-image");
                    $('.carousel-control-next .thumbnail').css('background-image', bgnext);
                    break;
                default:
                    console.log('wrong');
            }
        }
        var currentIndex = 0;
        // console.log($('.carousel-control-prev').css('width'),$('.carousel-control-prev').css('height'));

        //detemrmine the width and height of thumbnail depending on the width and height of the carousel controls
        $('.carousel-control-prev .thumbnail').css('width', $('.carousel-control-prev').css('width'));
        $('.carousel-control-prev .thumbnail').css('height', $('.carousel-control-prev').css('height'));
        $('.carousel-control-next .thumbnail').css('width', $('.carousel-control-next').css('width'));
        $('.carousel-control-next .thumbnail').css('height', $('.carousel-control-next').css('height'));

        //determine initial thumbnails on widnow ready
        determineThumbnail();
        //determine thumbnails on carousel slide
        $('#carouselheader').on('slide.bs.carousel', function (ev) {
            currentIndex = ev.to;
            determineThumbnail();
            //clear the tick intervak and restart progress bar
            moved();
        });
        //------------------------------------progress bar---------------------------------------------------//

        var time = 10; // time in seconds
        var $progressBar,
            isPause,
            tick,
            percentTime = 0;
        $progressBar = $('.carousel-progress-bar');

        //Init progressBar
        function start() {
            //reset timer
            percentTime = 0;
            isPause = false;
            //run interval every 0.01 second
            tick = setInterval(interval, 10);
        }
        //restart progress bar
        function restart() {
            $progressBar.css({
                width: "0%",
                opacity: 0
            });
            //reset timer
            percentTime = 0;
            //run interval every 0.01 second
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (isPause === false) {
                percentTime += 1 / time;
                $progressBar.css({
                    width: percentTime + "%",
                    opacity: 1
                });
                //if percentTime is equal or greater than 100
                if (percentTime >= 99.99) {
                    //slide to next item 
                    $('#carouselheader').carousel('next');
                }
            }
        }

        //moved callback
        function moved() {
            //clear interval
            clearTimeout(tick);
            //start again
            restart();
        }

        if (!(isMobile)) {
            //pause on mouseover 
            $('#carouselheader')
                .hover(function () {
                    isPause = true;
                }, function () {
                    isPause = false;
                });
            //pasuse on hover on carousel controls
            $('#carouselheader .carousel-control-prev, #carouselheader .carousel-control-next').hover(function () {
                isPause = true;
            });
        }
        //start the progress bar on document load
        start();

    }

    //-----------------------------------------Scroll events--------------------------------------------------
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    var scrollTopVal = 0;

    function check_if_in_view() {

        // console.log('check_if_in_view',$window.scrollTop());

        //navbar animation on scroll
        if (isMobile) {
            //show or hide navbar on scroll if scrollTop > 100
            if ($window.scrollTop() > scrollTopVal) {
                if ($window.scrollTop() > 100) {
                    scrollTopVal = $window.scrollTop();
                    if ($('.navbar-collapse.show').exists()) {
                        // console.log('exist');
                    } else {
                        $('nav.navbar').removeClass('navbar-show');
                        $('nav.navbar').addClass('navbar-hide');
                    }

                }
            } else {
                scrollTopVal = $window.scrollTop();
                if ($('.navbar-collapse.show').exists()) {
                    // console.log('exist');
                } else {
                    $('nav.navbar').removeClass('navbar-hide');
                    $('nav.navbar').addClass('navbar-show');
                }
            }
        } else {
            //add colors (=white) to navbar in index page if scroll top > 100
            if ($window.scrollTop() > 100) {
                $('nav.navbar').addClass('navbar-colored');
            } else {
                $('nav.navbar').removeClass('navbar-colored');
            }
        }

        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                //uncomment if you want animation every time the element in view
                //now it has animation only the first time the page loads
                // $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    //---------------------------------------Women Coats Carousel------------------------------------------
    if ($(".owl-carousel").length > 0) {
        $(".owl-carousel").owlCarousel({
            margin: 10,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dots: true,
            dotsEach: true,
            slideTransition: 'linear',
            rewind: true,
            autoHeight: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                768: {
                    items: 3
                },
                993: {
                    items: 2
                },
                1400: {
                    items: 3
                }

            }
        });
    }
    //---------------------------------------footer scrollTop link------------------------------------------
    $('#pageTop').click(function (e) {
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: 0
        }, 1000, 'swing');
    });
    //---------------------------------------shop noUiSlider------------------------------------------------
    if ($('#slider').exists()) {
        var slider = document.getElementById('slider');
        //initiate the slider
        noUiSlider.create(slider, {
            start: [600, 7000],
            connect: true,
            step: 10,
            range: {
                'min': 600,
                'max': 8000
            },
        });
        //display the values on the input field skip value
        var skipValues = [
            document.getElementById('skip-value-lower'),
            document.getElementById('skip-value-upper')
        ];

        slider.noUiSlider.on('update', function (values, handle) {
            skipValues[handle].value = values[handle];
        });

        $('#skip-value-lower,#skip-value-upper').on('change', function () {
            //stop skip valuse from exceeding the upper and lower limits
            // console.log(this.value);
            if (this.value > 8000) {
                this.value = 8000;
            } else if (this.value < 600) {
                this.value = 600;
            }
        });
    }

    if ($('#slider-clone').exists()) {
        var sliderClone = document.getElementById('slider-clone');

        noUiSlider.create(sliderClone, {
            start: [600, 7000],
            connect: true,
            step: 10,
            range: {
                'min': 600,
                'max': 8000
            },
            // pips: {
            //     mode: 'range',
            //     density: 3
            // }
        });

        var skipValuesClone = [
            document.getElementById('skip-value-lower-clone'),
            document.getElementById('skip-value-upper-clone')
        ];

        sliderClone.noUiSlider.on('update', function (values, handle) {
            skipValuesClone[handle].value = values[handle];
        });

        $('#skip-value-lower-clone,#skip-value-upper-clone').on('change', function () {
            // console.log(this.value);
            if (this.value > 8000) {
                this.value = 8000;
            } else if (this.value < 600) {
                this.value = 600;
            }
        });
    }
    //---------------------------------------filters accordion------------------------------------------------
    if ($('.accordion').length > 0) {
        $('.accordion').find('.accordion-toggle').click(function () {
            //close accordion if open
            if ($(this).hasClass('open')) {
                $(this).next().slideUp('fast');
                $(this).removeClass('open');
            } else {
                //open the accordion if closed
                $(this).next().slideDown('fast');
                $(this).addClass('open');
                //close every other element in accordion
                $(".accordion-content").not($(this).next()).slideUp('fast');
                $(".accordion-toggle").not($(this)).removeClass('open');
            }
        });
        //filters in mobile mode collase
        $('#filters-collapse-btn').click(function () {
            if ($('#filters-collapse').css('display') == "none") {
                // console.log('has');
                $('#filters-collapse-btn').attr('aria-expanded', true);
                $('#filters-collapse').slideDown('fast');
            } else if ($('#filters-collapse').css('display') == "block") {
                $('#filters-collapse-btn').attr('aria-expanded', false);
                $('#filters-collapse').slideUp('fast');
            }

        });
    }
    //--------------------------------zoom library----------------------------------------------------
    if ($('.zoom').exists()) {
        if (!isMobile) {
            //initiate zoom library on desktop
            $('.zoomItem').zoom();
        } else {
            //use zoom with scale on click on mobile devices
            $('.zoomItem').click(function (e) {

                var parentOffset = $(this).parent().offset();
                //or $(this).offset(); if you really just want the current element's offset
                //get relative X or Y of clicks on the zoomItem
                var relX = e.pageX - parentOffset.left;
                var relY = e.pageY - parentOffset.top;
                //remove the px from the string to make it a number
                var relXprecentage = relX / $(this).children('img').css('width').slice(0, -2);
                var relYprecentage = relY / $(this).children('img').css('height').slice(0, -2);
                //make the positions whole numbers
                relXprecentage = Math.round(relXprecentage * 100);
                relYprecentage = Math.round(relYprecentage * 100);
                //zoom out if it's already zoomed in
                if ($(this).children('img').css('transform') == "matrix(2, 0, 0, 2, 0, 0)") {
                    // console.log('scale 2');
                    $(this).children('img').css('transform', "matrix(1, 0, 0, 1, 0, 0)");
                    //zoom in if it's zoomed out
                } else if ($(this).children('img').css('transform') == "matrix(1, 0, 0, 1, 0, 0)" ||
                    $(this).children('img').css('transform') == "none") {
                    // console.log('scale 1');
                    $(this).children('img').css({
                        'transform': 'scale(' + 2 + ')',
                        'transform-origin': relXprecentage + '% ' + relYprecentage + '%'
                    });
                }
            });
        }
        //change the image on zoomItem on clicking thumbnails
        $('.thumbnails li').click(function () {
            $(this).siblings().removeClass('zoom-active');
            $(this).addClass('zoom-active');
            $(this).parent().next().children('.zoomItem').children('img').attr('src', $(this).children('span').data('standard'));
        });
        //modal full screen on clicking expand button on product
        $('.prod-expand').click(function () {
            //set the expand img src = img zoom 
            $(this).parent().next().children().children().last().children('img').attr('src',
                $(this).prev().attr('src'));
            //show the prod fullscreen div
            $(this).parent().next().removeClass('d-none');
        });
        //close full screen product
        $('.prod-fullScreen button').click(function () {
            $(this).parent().parent().parent().addClass('d-none');
        });
    }
    //-------------------------------------colors in product page------------------------------------------
    if ($('.prod-colors').exists()) {
        //initail color value
        spanText = "Vintage Camel";
        //show color value on click in a span
        $('.prod-colors input[type="radio"]').click(function () {
            //show the color value on span, and save it to be used on hover
            spanText = $(this).data('val');
            $('.prod-color').html($(this).data('val'));
            //cache the path to thumbnails of this product
            var $thumbnails = $(this).parents('.prod-info').prev('.thumbnails-parent').children()
                .children('.thumbnails');

            $thumbnails.children().addClass('d-none');

            //show thumbnails corresponding to the value of radio color
            $thumbnails.children('.' + $(this).val()).removeClass('d-none');

            //show the first thumbnail photo on the zoom img
            $thumbnails.parent().children('.zoom-parent').children('.zoomItem').children('img')
                .attr('src', $thumbnails.children('.' + $(this).val()).first().children().data('standard'));

            //click the first element to add the zoom-active class
            $thumbnails.children('.' + $(this).val()).first().trigger('click');

        });

        //change primary image of product on hover
        $('.prod-colors').children('div').hover(function () {

            var $zoomImg = $(this).parent().parent().prev().children().children().children('.zoomItem').children('img');
            var $thumbnails = $(this).parent().parent().prev().children().children().first();

            //change the color value on span
            $(this).parent().prev().children('.prod-color').html($(this).children('input').data('val'));

            if ($thumbnails.children('.' + $(this).children().val() + '.zoom-active').length > 0) {
                //change zoom image to the active img of thumbnails of the hovered over color
                $zoomImg.attr('src',
                $thumbnails.children('.' + $(this).children().val() + '.zoom-active').children().data('standard'));
            } else {
                //change zoom image to the first img of thumbnails of the hovered over color
                $zoomImg.attr('src',
                    $thumbnails.children('.' + $(this).children('input').val()).first().children().data('standard'));
            }

        }, function () {

            var $zoomImg = $(this).parent().parent().prev().children().children().children('.zoomItem').children('img');
            var $thumbnails = $(this).parent().parent().prev().children().children().first();

            //change the color value back to checked color radio value
            $(this).parent().prev().children('.prod-color').html(spanText);
            //change img back to the active thumbnail img of the checked radio color collection
            $zoomImg.attr('src',
                $thumbnails.children('li.zoom-active').children().data('standard'));
        });
    }
    //-------------------------------------Sizes in product page-------------------------------------------
    if ($('.prod-sizes').exists()) {

        $('.prod-sizes label.option').hover(function () {
        
            $(this).parents('.prod-sizes').prev().children('span').html(
                $(this).children('.option__label').children().html()
            );

        }, function () {
            if ( $(this).parents('.prod-sizes').find('input:checked').exists() ) {

                $colorId = $(this).parents('.prod-sizes').find('input:checked').attr('id');

                $(this).parents('.prod-sizes').prev().children('span').html(
                    $(this).parents('.prod-sizes').find('label[for='+$colorId+']').children('.option__label').children().html()
                );

            } else {
                $(this).parents('.prod-sizes').prev().children('span').html(
                    'Select a Size'
                );
            }

        });
    }

    //-------------------------------------product details accordion in product page-------------------------------------------
    if ($('.prod-details span').css('display') == "block") {
        //add the accordion functionality in mobile screens
        $('.prod-details .border-top div').removeClass('open');
        $('.prod-details .border-top').children('ul, p').slideUp('fast');
        $('.prod-details .border-top div span').children().removeClass('fa-minus');
        $('.prod-details .border-top div span').children().addClass('fa-plus');

        //accordion click functionality
        $('.prod-details .border-top div').click(function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).children('span').children().removeClass('fa-minus');
                $(this).children('span').children().addClass('fa-plus');
                $(this).parent().children('ul, p').slideUp('fast');
            } else {
                $(this).addClass('open');
                $(this).children('span').children().addClass('fa-minus');
                $(this).children('span').children().removeClass('fa-plus');
                $(this).parent().children('ul, p').slideDown('fast');
            }

        });
    }
    //------------------------------------contact us map-------------------------------------------------------------
    if ($('#map').exists()) {
        // Initialize and add the map
        function initMap() {
            // The location of Uluru
            var uluru = {
                lat: 30.0570515,
                lng: 31.3306219
            };
            // The map, centered at Uluru
            var map = new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 10,
                    center: uluru
                });
            // The marker, positioned at Uluru
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
        }
        initMap();
    }
    //------------------------------------whishlist close button-------------------------------------------------------------
    if ($('.wishlist').exists()) {
        $('.wishlist .close').click(function () {
            //remove the wishlist entry on clicking cross
            $(this).parent().parent().fadeOut(300, function () {
                $(this).remove();
                //if the item is the last remove the table and add a paragraph indicating no products on the wishlist
                if ($('.wishlist tr').length == 1) {
                    $('.wishlist tr').remove();
                    $('.wishlist>div').append(
                        $('<p>No products were added to the wishlist</p>').addClass('border px-2 py-3 bg-light')
                    );
                }
            });
        });

    }
    //------------------------------------sign in fields account page-------------------------------------------------------------
    if ($('.login,.signUp,.forgot-password').exists()) {
        //hasValue prevents the input field name from returning back to the center of the input field
        $('.login input[type="email"], .login input[type="password"],.signUp input[type="email"], .signUp input[type="password"], .forgot-password input[type="email"]').blur(function () {
            if ($(this).val() !== "") {
                $(this).addClass('hasValue');
            } else {
                $(this).removeClass('hasValue');
            }
        });

        //show password tooltip
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });

        //show/hide password, and change the show password icon on click
        $('.login a[data-toggle="tooltip"], .signUp a[data-toggle="tooltip"]').click(function () {
            if ($(this).children().hasClass('fa-eye')) {
                $(this).children().removeClass('fa-eye').addClass('fa-eye-slash');
                $(this).prev().prev().attr('type', 'text');
            } else {
                $(this).children().removeClass('fa-eye-slash').addClass('fa-eye');
                $(this).prev().prev().attr('type', 'password');
            }

        });

        $('button[type="submit"]').click(function (e) {
            e.preventDefault();

            var emailCheck = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

            if ($('input[type="email"]').val() == "" || emailCheck.test($('input[type="email"]').val()) == false) {
                $('input[type="email"]').css('border', '1px solid #D0021B');
                $('input[type="email"]').parent().next().removeClass('d-none');
            } else {
                $('input[type="email"]').css('border', '1px solid #ced4da');
                $('input[type="email"]').parent().next().addClass('d-none');
            }

            var passwordCheck = new RegExp(/^(?=.*\d)(?=.*[a-z])|(?=.*[A-Z])[0-9a-zA-Z]{6,}$/);

            if ($('.password-input').val() == "") {
                $('.password-input').css('border', '1px solid #D0021B');
                $('#password-empty').removeClass('d-none');
                $('#password-error').addClass('d-none');
            } else if (!(passwordCheck.test($('.password-input').val()))) {
                $('.password-input').css('border', '1px solid #D0021B');
                $('#password-error').removeClass('d-none');
                $('#password-empty').addClass('d-none');
            } else {
                $('.password-input').css('border', '1px solid #ced4da');
                $('#password-empty').addClass('d-none');
                $('#password-error').addClass('d-none');
            }
        });
    }

    //------------------------------------checkout promo card-------------------------------------------------------------
    if ($('.cart-sidebar .promo-code,.checkout-sidebar .promo-code').exists()) {
        $('.promo-code div:first-child').click(function () {
            $(this).next().toggleClass('d-none').find('input').focus();
        });

        $('.promo-code div:last-child button').click(function () {
            if ($(this).prev().prev().val() == "" || $(this).prev().prev().val().length < 6) {
                $(this).prev().prev().css('border', '1px solid #D0021B');
                $(this).prev().css({
                    'color': 'rgb(255, 23, 50)',
                    'font-weight': 'bold',
                    'margin-bottom': '0'
                }).removeClass('d-none')
            } else {
                $(this).prev().prev().css('border', '1px solid #ced4da');
                $(this).prev().addClass('d-none');
            }
        });
    }
    //------------------------------------checkout address info checks-------------------------------------------------------------
    if ($('.checkout form').exists()) {
        $('.checkout form #first-name,.checkout form #last-name,.checkout form #inputCity').blur(function () {
            if ($(this).val() == "") {
                $(this).css('border', '1px solid #D0021B');
                $(this).next().css({
                    'color': 'rgb(255, 23, 50)',
                    'font-weight': 'bold',
                    'margin-bottom': '0'
                }).removeClass('d-none');
            } else {
                $(this).css('border', '1px solid #ced4da');
                $(this).next().addClass('d-none');
            }
        });

        $('.checkout form #inputAddress').blur(function () {
            if ($(this).val() == "") {
                $(this).css('border', '1px solid #D0021B');
                $(this).next().next().css({
                    'color': 'rgb(255, 23, 50)',
                    'font-weight': 'bold',
                    'margin-bottom': '0'
                }).removeClass('d-none');
            } else {
                $(this).css('border', '1px solid #ced4da');
                $(this).next().next().addClass('d-none');
            }
        });

        $('.checkout form #inputNumber').val("+2");

        var phoneNumber = new RegExp('(201)[0-9]{9}');
        $('.checkout form #inputNumber').blur(function () {
            if (phoneNumber.test($(this).val())) {
                $(this).css('border', '1px solid #ced4da');
                $(this).next().addClass('d-none');
            } else {
                $(this).css('border', '1px solid #D0021B');
                $(this).next().css({
                    'color': 'rgb(255, 23, 50)',
                    'font-weight': 'bold',
                    'margin-bottom': '0'
                }).removeClass('d-none');
            }
        });

        $('.step1-continue').click(function (e) {
            if ($('.checkout form #first-name').val() == "" ||
                $('.checkout form #last-name').val() == "" ||
                $(".checkout form #inputCity").val() == "" ||
                $('.checkout form #inputAddress').val() == "" ||
                !(phoneNumber.test($(".checkout form #inputNumber").val()))) {
                e.preventDefault();
                $('.checkout form input').trigger('blur');
            } else {
                $("#shipping-form").trigger('submit');
            }
        });

    }



});
//-----------------------------------------document ready--------------------------------------------------

$(window).on('load', function () {
    $('.preloader').animate({
        opacity: 0
    }, 750, function () {
        $(this).css('display', 'none');
    });

});
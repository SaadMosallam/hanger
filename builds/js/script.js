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
    console.log(isMobile);
    //--------------------------------- navbar dropdown --------------------------------------//
    if (isMobile) {

        //detecting document width and height
        var screenWidth = $(document).width();
        var screenHeight = $(window).height();
        // console.log(screenWidth, screenHeight);




        if (screenWidth < 992) {
            //set the height of the navbar collapse equal to the height of the document
            $('#navbarNavCollapse').css({
                height: screenHeight - $('nav').outerHeight()
            });
            //adding slide animation up/down when clicking on dropdown toggle
            $('.navbar-collapse').click(function (e) {
                // e.stopPropagation();
            });
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

            function run(v) {

                $(v[0]).animate(v[1], {
                    duration: 500,
                    step: function (val) {
                        //Adding the transform to your element
                        $('#navbarNavCollapse').css("transform", `translateX(${val}px)`);
                    }
                });
            }

            run([{
                y: -500
            }, {
                y: 0
            }]);
            //close the collapse when clicking on the main or footer content
            $('main').on("click", function () {
                // console.log(this);
                $('#navbarNavCollapse').collapse('hide');
            });
            $('footer').on("click", function () {
                // console.log(this);
                $('#navbarNavCollapse').collapse('hide');
            });
        });

        $('#navbarNavCollapse').on('hide.bs.collapse', function (e) {
            e.preventDefault();

            function run(v) {

                $(v[0]).animate(v[1], {
                    duration: 500,
                    step: function (val) {
                        //Adding the transform to your element
                        $('#navbarNavCollapse').css("transform", `translateX(${val}px)`);
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
            //remove the listeners on closing the collapse
            $("main").off("click");
            $("footer").off("click");
        });




    } else {
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
    $('#navbarProfile').on('show.bs.collapse', function () {
        $(this).children().animate({
            height: "100%"
        }, 300);
    });
    $('#navbarProfile .close').click(function () {
        $('#innerProfile').animate({
            height: "0%"
        }, 300, function () {
            $('#navbarProfile').collapse('hide');
        });
    });
    //--------------------------------- Carousel ------------------------------------------------------------//
    $('.carousel').carousel({
        interval: false
    });
    //--------------------------------- carousel-0 badge -------------------------------------//
    if (!(isMobile)) {

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
        $("#carousel-0.active").mouseenter(function (e) {
            mouseX = e.pageX;
            hangerX = $('#hanger-front').position().left;
            loop = setInterval(function () {
                // console.log("position",hangerX,"distance",distance,"mouseX",mouseX,"mouseXnew",mouseXnew);
                // change 12 to alter damping higher is slower
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

    $('.carousel-control-prev .thumbnail').css('width', $('.carousel-control-prev').css('width'));
    $('.carousel-control-prev .thumbnail').css('height', $('.carousel-control-prev').css('height'));
    $('.carousel-control-next .thumbnail').css('width', $('.carousel-control-next').css('width'));
    $('.carousel-control-next .thumbnail').css('height', $('.carousel-control-next').css('height'));

    determineThumbnail();

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

        $('#carouselheader .carousel-control-prev, #carouselheader .carousel-control-next').hover(function () {
            isPause = true;
        });
    }
    //start the progress bar on document load
    start();

    //-----------------------------------------Scroll events--------------------------------------------------
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    var scrollTopVal = 0;

    function check_if_in_view() {

        // console.log('check_if_in_view',$window.scrollTop());

        //navbar animation on scroll
        if (isMobile) {
            if ($window.scrollTop() > scrollTopVal) {

                scrollTopVal = $window.scrollTop();
                if ($('.navbar-collapse.show').exists()) {
                    // console.log('exist');
                } else {
                    $('nav.navbar').removeClass('navbar-show');
                    $('nav.navbar').addClass('navbar-hide');
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
            if ($window.scrollTop() > 50) {
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
                // $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    //---------------------------------------Women Coats Carousel------------------------------------------
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
                items:3
            },
            993: {
              items: 2
            },
            1400: {
              items: 3
            }
            
        }
    });
    //---------------------------------------footer scrollTop link------------------------------------------
    $('#pageTop').click(function(e){
        e.preventDefault();
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 1000, 'swing');
    });

    // $('.img-container img').hover(function () {
    //     // console.log($('.img-container img').attr('src')) ;
    //     var primarySrc = $(this).attr('src');
    //     // console.log(primarySrc.slice(0,-12) +"secondary.jpeg") ;
    //     var secondarySrc = primarySrc.slice(0, -12) + "secondary.jpeg";
    //     $(this).attr('src', secondarySrc);
    // }, function () {
    //     // console.log($('.img-container img').attr('src')) ;
    //     var secondarySrc = $(this).attr('src');
    //     // console.log(secondarySrc.slice(0,-14) +"primary.jpeg") ;
    //     var primarySrc = secondarySrc.slice(0, -14) + "primary.jpeg";
    //     $(this).attr('src', primarySrc);
    // });
});
//-----------------------------------------document ready--------------------------------------------------
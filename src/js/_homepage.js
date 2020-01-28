import $ from "jquery";

$(window).on("load", function() {
    maintainSliderImage();

    $(window).resize(function() {
        maintainSliderImage();
    })

    $(".homepage-page-slider .image-side .owl-carousel").owlCarousel({
        loop: true,
        margin:10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: true,
        navText: ['<i class="fas fa-arrow-circle-left fa-2x"></i>','<i class="fas fa-arrow-circle-right fa-2x"></i>'],
        dots: false,
        autoplayHoverPause:true,
        responsive:{
            1000:{
                items: 1
            }
        }
    });
})

function maintainSliderImage() {
    let contactBtnWidth = $("header.site-hader .main-header .menu-section ul li:last-child").width();
    $(".homepage-page-slider .image-side").css("padding-right", contactBtnWidth);
    $(".service-page-slider .image-side").css("padding-right", contactBtnWidth);
}

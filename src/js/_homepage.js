import $ from "jquery";

$(window).on("load", function() {
    maintainSliderImage();

    $(window).resize(function() {
        maintainSliderImage();
    })
})

function maintainSliderImage() {
    let contactBtnWidth = $("header.site-hader .main-header .menu-section ul li:last-child").width();
    $(".homepage-page-slider .image-side").css("padding-right", contactBtnWidth);
}

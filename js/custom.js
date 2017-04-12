$(document).ready(function(){
    $('.slide').height($(window).height());

    $(window).resize(function(){
        $('.slide').height($(window).height());
    });

    $('.bxslider').bxSlider({
        startSlide : 0,
        pager : false,
        preloadImages : 'all',
        nextSelector : '.next-wrapper'
    });

});
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true
    });
    
    $('.burger').click(function(){
        $('.menu').toggleClass('active');
    });
});

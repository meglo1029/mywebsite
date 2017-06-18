// ANIMATE ABOUT ME POINTS-------------

var animatePoints = function() {
    var revealPoint = function() {
             $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
    }
 $.each($('.point'), revealPoint);
};


 $(window).load(function() {
     if ($(window).height() > 950) {
         animatePoints();
     }
     var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
     window.innerHeight + 200;
     $(window).scroll(function(event) {
         if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();  
         }
     });
 });
 // END ANIMATE ABOUT ME---------------->

 // SMOOOOOOTH SCROLLINING--------------->
 
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// END SMOOTH SCROLLING -------


// HEY! WATCH WHERE YOURE GOING...

$(".mynametext").click(function(){

    alert("Ow! Watch where you're going...");

});






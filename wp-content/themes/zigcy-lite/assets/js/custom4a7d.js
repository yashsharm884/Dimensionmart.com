(function ($) { 
'use strict';


/* Browse Category Menu  Toggle */ 
$(".browse-category-wrap").click(function () {
   $(".categorylist").toggleClass('sm-cat-menu-active');
});

//for slider

$('.store-mart-lite-banner').owlCarousel({
    dots:true,
    items:1
   
});

/**
* Back to top button
*/
$('.sml-scrollup').hide();
var offset = 250;
var duration = 1000;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.sml-scrollup').fadeIn(duration);
    } else {
        $('.sml-scrollup').fadeOut(duration);
    }
});

$('body').on('click', '.sml-scrollup', function () {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
})

//Header Search toggle
$('body').on('click','.sml-search-icon-wrap .sml-search-icon',function(){
$('.sml-search-icon-wrap .search-form-wrap').toggleClass('search-active');

});
//search close
$('body').on('click','.sml-search-icon-wrap .btn-hide', function(){
$('.sml-search-icon-wrap .search-form-wrap').removeClass('search-active');

});

//for client slider

$('.store-mart-lite-logo-wrapper').owlCarousel({
    //loop:true,
    nav:true,
    items:5,
    //margin:120,
    responsive:{
        0:{
            items:1,
     
        },
        400:{
            items:2,
        },
        600:{
            items:3,
        },
         700:{
            items:4,
        },
        1000:{
            items:5,
        }
    }

   
});

//product slider
$('.smlwbs-wrap > .sml-products').each(function () {
    var $smwbs = $(this);
    $smwbs.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    });
});

/**
  * Mobile navigation toggles
  * 
  */
/* Toggle mobile menu on click toggle icon */
$('body').on('click touchstart','.mob-nav-wrapper .mob-hiriz-wrapp .menu-toggle', function(){
  $('.mob-side-nav-wrapp').addClass('active');
})

/* close mobile menu on click toggle icon */
$('body').on('click touchstart','.mob-nav-wrapper .mob-nav-close', function(){
  $('.mob-side-nav-wrapp').removeClass('active');
})

/**
* Zigcy Mobile sub-menu
*
*/
$('.mob-nav-wrapper .menu-primary-menu-container ul li ul').slideUp();

$('<div class="sub-toggle"></div>').insertBefore('.mob-nav-wrapper .menu-item-has-children ul');
$('<div class="sub-toggle-children"></div>').insertBefore('.mob-nav-wrapper .page_item_has_children ul');



$('body').on('vclick touchstart','.mob-nav-wrapper .sub-toggle', function()  {
  
  $(this).next('ul.sub-menu').slideToggle(400);
  $(this).parent('li').toggleClass('mob-menu-toggle');
});

$('body').on('vclick touchstart','.mob-nav-wrapper .sub-toggle-children',function() {
  $(this).next('ul.sub-menu').slideToggle(400);
    
});

} )( jQuery );



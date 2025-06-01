/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/* 		CLIENTS LOGO SLIDE
/*-----------------------------------------------------------------------------------*/
$(".client-slide").owlCarousel({ 
	autoplay:true,
	autoplayHoverPause:true,
	singleItem	: true,
	navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	lazyLoad:true,
	nav: false,
	loop:true,
	margin:30,
	animateOut: 'fadeOut',	
	responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:3
        },
        1200:{
            items:5
        }}	
});
/*-----------------------------------------------------------------------------------*/
/* Pretty Photo
/*-----------------------------------------------------------------------------------*/
jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
    theme: "light_square"
});
/*-----------------------------------------------------------------------------------*/
/* 		Parallax
/*-----------------------------------------------------------------------------------*/
jQuery.stellar({
   horizontalScrolling: false,
   scrollProperty: 'scroll',
   positionProperty: 'position'
});
});

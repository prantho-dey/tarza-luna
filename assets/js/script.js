(function ($) {

	'use strict';
	
	// Hide Show 
	$("#hideshow").click(function(){
		$(".toogle-slid").slideToggle(100);
	});

	// $("#hideshow").on('click',function () {
	// 	$('.mean-nav').toggleClass('open');
	// });

	/*------------------------------------
		Mobile Menu
	--------------------------------------*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-area',
		meanScreenWidth: "768",
		meanRevealPosition: "left",
		meanMenuOpen: "<svg class='menu-icon' xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n" +
			"<path d=\"M1 5H15M1 1H19M1 9H19M1 13H15\" stroke=\"#A02206\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
			"</svg>",
		meanMenuClose: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
			"    <line x1=\"1\" y1=\"24\" x2=\"24\" y2=\"1\" stroke=\"#A02206\" stroke-width=\"2\" />\n" +
			"    <line x1=\"1\" y1=\"1\" x2=\"24\" y2=\"24\" stroke=\"#A02206\" stroke-width=\"2\" />\n" +
			"</svg>",
	});

	/*-------------------------------------------
	    Sticky Header
	--------------------------------------------- */

	let win = $(window);
	let sticky_id = $(".header-menu");
	win.on('scroll', function () {
		let scroll = win.scrollTop();
		if (scroll < 245) {
			sticky_id.removeClass("sticky-header");
		} else {
			sticky_id.addClass("sticky-header");
		}
	});

	if (jQuery(".slider-area").length > 0) {

		let carousel_slider = $(".slider-area");
		carousel_slider.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			autoplayTimeout: 10000,
		});
	
		carousel_slider.on('translate.owl.carousel', function () {
			let slideLayer = $("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).removeClass('animated ' + anim_name).css('opacity', '0');
			});
		});
	
		carousel_slider.on('translated.owl.carousel', function () {
			let slideLayer = carousel_slider.find('.owl-item.active').find("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).addClass('animated ' + anim_name).css('opacity', '1');
			});
		});
	
		$("[data-delay]").each(function () {
			let anim_del = $(this).data('delay');
			$(this).css('animation-delay', anim_del);
		});
	
		$("[data-duration]").each(function () {
			let anim_dur = $(this).data('duration');
			$(this).css('animation-duration', anim_dur);
		});
	};

	// Animation 
	new WOW().init();

	// About Popup Video
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// Recipe Isotop gallery
	 var $grid = $('.recipe-gallery').isotope({
	  itemSelector: '.recipe-item',
	  percentPosition: true,
	  masonry: {
	    columnWidth: 1
	  }
	})

	  $('.isotope-button').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	  // change is-checked class on buttons
	$('.isotope-button').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.recipe-active').removeClass('recipe-active');
	    $( this ).addClass('recipe-active');
	  });
	});
	

	// Gallery Slider
	if (jQuery(".gallery-slider").length > 0) {

		let carousel_slider = $(".gallery-slider");
		carousel_slider.owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			autoplayTimeout: 10000,
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:3,
				},
				1000:{
					items:2,
				}
			}
		});
	
		carousel_slider.on('translate.owl.carousel', function () {
			let slideLayer = $("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).removeClass('animated ' + anim_name).css('opacity', '0');
			});
		});
	
		carousel_slider.on('translated.owl.carousel', function () {
			let slideLayer = carousel_slider.find('.owl-item.active').find("[data-animation]");
			slideLayer.each(function () {
				let anim_name = $(this).data('animation');
				$(this).addClass('animated ' + anim_name).css('opacity', '1');
			});
		});
	
		$("[data-delay]").each(function () {
			let anim_del = $(this).data('delay');
			$(this).css('animation-delay', anim_del);
		});
	
		$("[data-duration]").each(function () {
			let anim_dur = $(this).data('duration');
			$(this).css('animation-duration', anim_dur);
		});
	};


	// Blog Slider
	if (jQuery(".blog-slider").length > 0) {

		$(".blog-slider").owlCarousel({
			items: 3,
			loop: true,
			nav: true,
			navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
			dots: false,
			responsive: {
				0: {
					items: 1,
					center: false,
				},
				768: {
					items: 2,
					center: false,
				},
				1024: {
					items: 2,
				},
				1200: {
					items: 3
				},
				1589: {
					items: 3
				}
			}
		});
	}


	// Testimonial Slider
	if (jQuery(".testimonial-slider").length > 0) {

		$(".testimonial-slider").owlCarousel({
			items: 3,
			loop: true,
			nav: true,
			navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
			dots: false,
			responsive: {
				0: {
					items: 1,
					center: false,
				},
				768: {
					items: 2,
					center: false,
				},
				1024: {
					items: 2,
				},
				1200: {
					items: 3
				},
				1589: {
					items: 3
				}
			}
		});
	}

	// Scroll-top-button
	$('.scroll-top-button').click(function(){
		$('html').animate({'scrollTop':'0px'},4000) ;
	});

	$(window).scroll(function(){

		var scroll = jQuery(window).scrollTop();

		if (scroll > 300) {
			$('.scroll-top-button').show();
		}else{
			$('.scroll-top-button').hide();
		}
	})

	// Gallery 
	$('.popup-img').magnificPopup({
		type: 'image',
	});


})(jQuery);

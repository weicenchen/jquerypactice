jQuery(document).ready(function($) {

	$(".jq_dropdown").click(function(event) {
		event.preventDefault();
		$(".jq_dropdown").toggleClass('active');
		$(".jq_dropdown_open").slideToggle();
	});

	$(".top a").click(function() {
		event.preventDefault();
		$("html,body").animate({
		  scrollTop:0
		}, 700);
	});

	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		'positionFromTop':320,
	  });

	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 2000,
	  },


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });

});
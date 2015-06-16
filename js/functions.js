;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		// Testimonial Slider
		$('.slider-testimoinals .slides').bxSlider({
			controls: false,
			auto: true,
			pause: 3000
		});


		// Navigation Scroll Animation
		$('.nav a').on('click', function(event) {
			event.preventDefault();
			var href = $(this).attr('href');
			var offsetTop = $(href).offset().top;

			$('html, body').animate({ scrollTop : offsetTop }, {
				queue: false,
				duration: 800
			});
		});
		
		var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');
		//hide or show the "back to top" link
		$(window).scroll(function(){
			
			( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.addClass('cd-fade-out');
			}
		});
		//www.sucaijiayuan.com
		//smooth scroll to top
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
				}, scroll_top_duration
			);
		});



	});
})(jQuery, window, document);

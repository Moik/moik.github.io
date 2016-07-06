$(function() {

	//Side menu - Open
	$('.side-menu-open').click(function(e){
		var sideWidth = $('.side-menu-open').outerWidth();
		var sideWidthClose = '-' + sideWidth + 'px';
		$('.side-menu-open').animate({'left': sideWidthClose}, 300, 'easeOutCubic');
		$('.side-menu').animate({'left': '0px'}, 600, 'easeOutCubic');
		e.preventDefault();
	});

	//Side menu - Close
	$('#side-menu-close').click(function(e){
		var sideWidth = $('.side-menu').outerWidth();
		var sideWidthClose = '-' + sideWidth + 'px';
		$('.side-menu').animate({'left': sideWidthClose}, 600, 'easeOutCubic');
		$('.side-menu-open').animate({'left': '0px'}, 600, 'easeOutCubic');
		e.preventDefault();
	});

	//Bootstrap Scroll Spy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	});

	smoothScroll(800, 'easeInOutExpo');

	$('.portfolio-items').bxSlider({
		slideWidth: 200,
		minSlides: 1,
		maxSlides: 4,
		moveSlides: 1,
		slideMargin: 20,
		auto: false,
		mode: 'horizontal',
		useCSS: true,
		speed: 500,
		infiniteLoop: false,
		hideControlOnEnd: true,
		easing: 'easeOutElastic',
		pager: false,
		prevText: '<i class="fa fa-chevron-left"></i>',
		nextText: '<i class="fa fa-chevron-right"></i>'
	});

	formSubmit("#contact-form");
	formSubmit("#message-form");

	$('.popup').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	$('.modal-wrap').click(function(){
		$('.modal-wrap').fadeOut(300);
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function(){

	$('#page-loader').fadeOut(200, function(){});

	$('.content-wrap').addClass('fadeInUp');

});

function formSubmit(id) {
	$(id).validate({
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "https://formspree.io/turangr@gmail.com",
				data: {
					"name": $(form).find("input[name='name']").val(),
					"email": $(form).find("input[name='email']").val(),
					"subject": $(form).find("input[name='subject']").val(),
					"message": $(form).find("textarea[name='message']").val(),
					"form": $(form).data("form")
				},
				dataType: "json",
				success: function (data) {
					if (data.success) {
						$.magnificPopup.close();
						$("#contactSuccess").fadeIn(300);
						$("#contactError").addClass("hidden");

						$(form).find(".form-control").val("").blur();
						$(form).find(".form-control").next().hide();
					} else {
						$("#contactError").fadeIn(300);
						$("#contactSuccess").addClass("hidden");
					}
				}

			});
		}
	});
}

function smoothScroll(duration, easing) {
	$('.side-menu-nav a[href^="#"]').click(function(event) {
		var target = $( $(this).attr('href') );

		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration, easing);
		}
	});
}
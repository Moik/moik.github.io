$(document).ready(function() {
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".count-wrap").countdown({
		until: new Date(2016, 8-1, 10),
		format: 'dHM'
	});
});

function heightDetect() {
	$(".sea").css("height", $(window).height() - 477);
};
$(document).ready(function(){
	
	$('#tabs').easytabs();
	
	$('#slider').nivoSlider( {
		effect:'fade'
	});

	
	$("#top").hide();
	

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#top').fadeIn();
		} else {
			$('#top').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('#top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});

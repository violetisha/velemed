$(document).ready(function(){
	// tabs
	$("#tabs").easytabs();

	//top
	$("#top").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$("#top").fadeIn();
		} else {
			$("#top").fadeOut();
		}
	});
	$("#top a").click(function () {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//lightbox
	$(".fancybox-media").fancybox({
		arrows : false,
		helpers : {
			media : {}
		}
	});

	//slider
	$('#slider').slidesjs({
        width: 940,
        height: 528,
        navigation: {
        	active: "false",
        	effect: "fade"
        },
        pagination: {
        	active: "false",
        	effect: "fade"
        },
        effect: {
        	fade: {
            	speed: 400
        	}
        },
        play: {
	        active: true,
	        auto: true,
	        pauseOnHover: false,
	        effect: "fade",
	        interval: 3000
	    }
      });
});
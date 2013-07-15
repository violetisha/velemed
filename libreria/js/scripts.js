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
	var fotos = []
	$("#slider > div").each(function (i, e) {
		fotos.push($(e).css("background-image"));
	});

	fotos.sort(function() {return 0.5 - Math.random()})
	
	$("#slider > div").each(function (i, e) {
		$(this).css("background-image", fotos[i]);
	});

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

	//mostrar TOS
	$('#mostrar-aviso').click(function() {
		if($('#aviso-privacidad').hasClass("abierto")) {
			$('#aviso-privacidad').slideUp('slow');
			$('#aviso-privacidad').removeClass('abierto');
		} else {
			$('#aviso-privacidad').slideDown('slow');
		$('#aviso-privacidad').addClass('abierto');
		}
	});
});


// validacion de formulario
(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $(".form").validate({
                rules: {
                    nombre: "required",
                    empresa: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    agree: "required"
                },
                messages: {
                    nombre: "Por favor, escriba su nombre.",
                    empresa: "Por favor, escriba su empresa.",
                    email: "Por favor, ingrese una direccion de correo válida",
                    agree: "Por favor, acepte nuestro Aviso de Privacidad"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);
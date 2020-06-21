$(".menu").addClass("fechado");
	$(".menu").after("<a id=\"menu-id\" class=\"menu-toggle\">Menu</a>");
	
	$(".menu-toggle").click(function() {
		var altura = $(".menu ul").height();
		if($(".menu").hasClass("fechado")) {
			$(".menu").animate({height:altura},{queue:false, duration:200}).removeClass("fechado");
		}
		else {
			$(".menu").animate({height:"0px"},{queue:false, duration:200}).addClass("fechado");
		}
	});
	
	$(window).resize(function() {
		var tamanhoViewport = $(window).width();
		if (tamanhoViewport > 600) {
			$(".menu").css("height","auto").addClass("fechado");
		} else {
			$(".menu").css("height","0px").addClass("fechado");
		}
	});

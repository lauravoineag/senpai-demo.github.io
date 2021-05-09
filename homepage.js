$(document).ready(function() {
	var windowPosition = $(window).scrollTop();
	
	
	$("#About-us-menu").click(function(){
		$("html,body").animate({ scrollTop:
			$(".background_dragon_fly").offset().top
		},1000)
	}),

	$("#Senpai-Kohai-menu").click(function(){
		$("html,body").animate({ scrollTop:
			$(".background_parrot").offset().top
		},1000)
	}),

	$("#Contact-us-menu").click(function(){
		$("html,body").animate({ scrollTop:
			$(".form_div").offset().top
		},1000)
	})
})
	
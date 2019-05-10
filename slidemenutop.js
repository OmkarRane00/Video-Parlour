$(document).ready(function(){
	// alert()
	$(".topmenu a:first").css({
			"font-weight" : "bold"
		})

	flagformenu = 1

	$(".topmenu a").click(function(){
		// alert()
		if(flagformenu == 1)
		{	
			$(".topmenu a:not(this)").css({
				"font-weight" : "normal"
			})
			$(this).css({
			"font-weight" : "bold"
			})
		}
	})
})
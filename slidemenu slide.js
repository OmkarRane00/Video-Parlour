$(document).ready(function(){
	// alert()
	menubuttonanimation = 1
	$("#menubutton").click(function(){
		// alert()
		if(menubuttonanimation == 1)
		{
			$("#menubuttonstyle").animate({
			"height" : "35px",
			"width" : "35px",
			"margin-left" : "10px"
			})
			$("#slidemenu").animate({
			"left" : "0"
			})
			$("#wrapper").animate({
				"width" : "73%"
			})
			$(".onclickdiv").animate({
				"margin-left" : "17.5%",
				"width" : "80%"
			})
			$("#blackbox").animate({
				"left" : "280px"
			})
			menubuttonanimation = 0
		}	
		else
		{
			$("#menubuttonstyle").animate({
			"height" : "0px",
			"width" : "0px",
			"margin-left" : "0px"
			})
			$("#slidemenu").animate({
			"left" : "-300px"
			})
			$("#wrapper").animate({
				"width" : "90%"
			})
			$(".onclickdiv").animate({
				"margin-left" : "0",
				"width" : "100%"
			})
			$("#blackbox").animate({
				"left" : "65px"
			})
			menubuttonanimation = 1
		}
	})
})
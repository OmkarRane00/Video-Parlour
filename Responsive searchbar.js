$(document).ready(function(){
	// alert()

	$(".responsiveimg").click(function(){
		// alert()
		$(".img2").css({
			"display" : "none"
		})

		$("#menubutton,#youtubeicon,#youtubeicontext,#signin,.responsiveimg").css({
			"display" : "none"
		})

		$("#searchbox,.searchimg,.backbutton").css({
			"display" : "block"
		})
	})

	$(".backbutton").click(function(){
		// alert()
		$("#menubutton,#youtubeicon,#youtubeicontext,#signin,.responsiveimg").css({
			"display" : "block"
		})

		$("#searchbox,.searchimg,.backbutton").css({
			"display" : "none"
		})
	})
})
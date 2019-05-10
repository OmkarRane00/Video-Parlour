$(document).ready(function(){
	// alert()
	$(".searchimg img").mouseover(function(){
		// alert()
		$(".searchimg").hide()
		$(".img2").show()
		$(".img2 img").show()

			$(".searchimg").mouseleave(function(){
				// alert()
				$(".searchimg").show()
				$(".img2").hide()
				$(".img2 img").hide()
			})
	})
})
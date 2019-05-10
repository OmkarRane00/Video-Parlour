$(document).ready(function(){
	// alert()
	$(".videotemplate").click(function(){
		// alert()
		$(window).scrollTop(0)
		$(".onclickdiv").animate({
			"height" : "100%",
			"width" : "100%",
			"margin-top" : "75px"
		}, 1000)	
		$("#wrapper").hide(800)
		$(".onclickdiv img,.onclickdiv p").appendTo(".videotxt p")
		$(this).clone().appendTo(".onclickdiv")
		$("#mainsuggest").clone().appendTo(".onclickdiv")
		$("#mainsuggest").css({
			"display" : "block"
		})

		$(".videotxt").css({
			"border-bottom" : "1px solid #ccc",
			"margin-bottom" : "5px"
		})
		
		$(".imgbig").css({
			"position" : "relative"
		})
		$(".imgshort").css({
			"position" : "absolute",
			"height" : "50px",
			"width" : "50px",
			"margin-top" : "-200px",
			"display" : "block"
		})

		$(".discriptiondiscription", this).clone().appendTo("#blackbox")
		flagdiscription = 1

		$(".imgshort").click(function(){
			// alert()
			if(flagdiscription == 1)
			{
				$("#blackbox").animate({
					"width" : "610px"
				})
				$(".discriptiondiscription").css("display" , "block")
				$(".imgshort").css("z-index" , "50")
				flagdiscription = 0
			}
			else
			{
				$("#blackbox").animate({
					"width" : "0px"
				})
				$(".discriptiondiscription").css("display" , "none")
				$(".imgshort").css("z-index" , "0")
				flagdiscription = 1
			}
		})

		$(".likeimg2").click(function(){
			// alert()
			$(".likeimg2").attr('src', 'images/liked.png')
		})

		$(".likeimg3").click(function(){
			// alert()
			$(".likeimg3").attr('src', 'images/disliked.png')
		})



		$(".videotemplate").css({
			"float" : "left",
			"width" : "50%",
			"margin-top" : "1%",
			"margin-left" : "4%"
		})
		$(".onclickdiv img, .onclickdiv p").css({
			"display" : "block"
		})
		$(".videotxt").css({
			"margin-top" : "5px"
		})
		
		$(".youtubeicon").fadeOut(300)
		$(".onclickback").slideDown(1000)

		// $(this).animate({
		// 	"position" : "fixed",
		// 	"transition" : "transform2s"
		// })	
		$("video img").attr("src", "charli.mp4")
	})


	$(".onclickback img").click(function(){
		// alert()

		$(".onclickdiv").animate({
			"height" : "0",
			"width" : "0",
			"margin-top" : "575px"
		}, 1000)
		// $(".onclickdiv").appendTo("#wrapper")
		$(".videotemplate").css({
			"float" : "right",
			"width" : "17%",
			"margin-top" : "0",
			"margin-left" : "2.7%"
		})
		$(".videotxt").css({
			"margin-top" : "0px"
		})
		$(".videotxt").css({
			"border-bottom" : "none",
			"margin-bottom" : "0px"
		})
		$(".discriptiondiscription").css("display" , "none")
		$(".imgshort").css("display" , "none")
		$(".onclickback").fadeOut(300)
		$(".youtubeicon").slideDown(1000)

		$("#wrapper").show(1000)
		$(".onclickdiv").empty()
	})

})//Atul kale
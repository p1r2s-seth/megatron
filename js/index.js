	$(document).ready(function(){
		$(".cont").mouseover(function(){
			$(".main").show("700");
		});
		$(".main").mouseleave(function(){
			$(".main").toggle("700");
		});

		$("#home").click(function(){
			$('html,body').animate({
				scrollTop: $(window).height()/100
			},700);
		});
		$("#prod").click(function(){
			$('html,body').animate({
				scrollTop: $(window).height()*1.1
			},700);
		});
		$("#specs").click(function(){
			$('html,body').animate({
				scrollTop: $(window).height()*2.49	
			},700);
		});
		$("#book").click(function(){
			$('html,body').animate({
				scrollTop: $(window).height()*4
			},700);
		});
	});
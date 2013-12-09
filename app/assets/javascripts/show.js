//show js
$(document).ready(function(){
	$(".desc-cont").niceScroll();
	$("a.close").click(function(){
		$('#ascrail2000').css('display', 'none');
		var wsize = $(".desc").outerWidth();
		$(".desc").animate({left: '-'+[wsize]+'px'}, 600, 'swing', function(){$("a.open").animate({left: 0}, 300, 'swing');});
	});
	$("a.open").click(function(){
		$("a.open").animate({left: '-50px'}, 300, 'swing', function(){$(".desc").animate({left: 0}, 600, 'swing');$('#ascrail2000').css('display', 'block');});
	});

})



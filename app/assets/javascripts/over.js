$(function(){
	$('.span2').hover(function(){
	    $('.span2').find('.over_cross').css({'top': '100%'})
	    $(this).find('.over').stop().hide().fadeIn(500);
	    $(this).find('.over_cross').stop().hide().css('display', 'block').animate({"top": 0},{duration:200, easing:'swing'});
	}, function(){
    	$(this).find('.over').fadeOut(100);
    	$(this).find('.over_cross').fadeOut(100);
  	})
  	$('#proyectos a').click(function(){
      var pathname = $(location).attr('href');
      if(pathname.indexOf('works') > -1){
  		  window.open('http://localhost:3000/', '_self')
      }else{
        $('#filter').slideToggle();
      }
  	});
});
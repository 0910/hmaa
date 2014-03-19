//Slider
$(document).ready(function(){
	//img sizes
	$('.slide').each(function(){
		getimg = $(this).css('background-image');
		getimg = getimg.replace('url(','');
		getimg = getimg.replace(')','');
		var img = new Image();
		img.onload = function(){
            var imgn = img.src;
            imgn = imgn.split('/');
            var imgid = imgn[imgn.length-1].replace('.jpg','');
            imgid = imgid.replace('.png','');
            imgid = imgid.replace('.gif','');
		    var imgw = img.width;
		    var imgh = img.height;
         	if(imgw > imgh){
         		$('#'+imgid).css('background-size', 'cover');
         	}else{
         		$('#'+imgid).css('background-size', 'contain');
         	}
		};
		img.src = getimg; 
	});

	itCant = $('.slide').length;
	currImg = 1;
	sldTot = itCant;
	totalW = 100*itCant;
	slWidth = 100/itCant;
	$('.slide-cont-abs').css({'width': [totalW]+'%', 'height': '100%'});
	$('.slide').css({'width': [slWidth]+'%', 'height': '100%'});
	timer();
});
cambia = function(){
	$('.bar').css('width', '0');
	if(currImg != sldTot){
		currImg = (currImg + 1);
		$('.slide-cont-abs').animate({left: '-=100%'}, 1000, 'easeOutQuad', function(){timer();});
	}else{
		currImg = 1;
		$('.slide-cont-abs').animate({left: '0'}, 1000, 'easeOutQuad', function(){timer();});
	};
};
timer = function(){
	$('.bar').animate({'width': '100%'},4400, 'linear');
	return cuenta = setTimeout('cambia()',5500);
};
(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);

$(function() {		
	var $filterType = $('#filter a[name="type"]');

	// get the first collection
	var $applications = $('#workcontainer');

	// clone applications to get a second collection
	var $data = $applications.clone();	

	$filterType.click(function(e) {
		e.preventDefault();
		var sort_by = $(this).attr('value');
		if (sort_by == 'all') {
		  var $filteredData = $data.find('li');
		} else {
		  var $filteredData = $data.find('li[data-type='+sort_by+']');
		}
		// if sorted by name
		var $sortedData = $filteredData.sorted({
			by: function(v) {
		    return $(v).find('strong').text().toLowerCase();
		    }
		});  
		    
		$applications.quicksand($sortedData, {
		  duration: 800,
		  easing: 'easeInOutQuad',
		  adjustHeight: 'dynamic'},
		  function(){
		  	$("img.lazy").lazyload();

		  	$('.span2').hover(function(){
				$('.span2').find('.over_cross').css({'top': '100%'})
			    $(this).find('.over').stop().hide().fadeIn(500);
			    $(this).find('.over_cross').stop().hide().css('display', 'block').animate({"top": 0},{duration:200, easing:'swing'});
			}, function(){
				$(this).find('.over').fadeOut(100);
			    $(this).find('.over_cross').fadeOut(100);
			});
		  }
		);
	});
});
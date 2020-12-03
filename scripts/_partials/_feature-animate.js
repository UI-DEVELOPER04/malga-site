if($('.feature-showcase').length > 0)
{
	$(function(){
		var features = $('.feature-showcase');
		body.on('scrolld',function(){
			features.each(function(){
				var scrollThreshold = 0.7;
				if($(this).offset().top < scrolld + scrollThreshold * winH){
					$(this).addClass('active');
				}
			});
		});
	});
}


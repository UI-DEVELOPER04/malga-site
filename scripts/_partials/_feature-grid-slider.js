$(function(){
	$('.feature-grid.slider-enabled').each(function(){
		var $prev = $('<button>',{class:'slider-prev'}),
			$next = $('<button>',{class:'slider-next'}),
			$slider = $(this).flickity({
				wrapAround: true,
				autoPlay: false,
				adaptiveHeight: false,
				imagesLoaded: true,
				contain: true,
				freeScroll: false,
				responsive: true,
				pageDots:false,
				cellAlign: 'left',
				prevNextButtons: false
			});
		$prev.add($next).appendTo($(this));
		$prev.click(function(){
			$slider.flickity('previous');
		});
		$next.click(function(){
			$slider.flickity('next');
		});
	});
});
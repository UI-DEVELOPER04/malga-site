$(window).bind('load',function(){
	$('.feature-list-tabbed').each(function(){
		var scope = $(this),
			items = $(this).find('.feature-list-feature'),
			nav = false;
		if(items.length > 1){
			nav = $('<nav>',{class:'flt-nav'});
			scope.prepend(nav);
			items.hide().first().show();
		}
		items.each(function(i){
			var name = $(this).attr('data-tab-name'),
				tab = $('<button>',{class:'flt-tab'});
			tab.text(name).appendTo(nav);
			if(i == 0){
				tab.addClass('selected');
			}
			tab.click(function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				items.hide().find('.feature-showcase').removeClass('active');
				items.eq(i).fadeIn().find('.feature-showcase').addClass('active');;
			});
		});
		if(nav){
			var navSlider = nav.flickity({
				wrapAround: false,
				autoPlay: false,
				adaptiveHeight: false,
				imagesLoaded: true,
				contain: true,
				freeScroll: true,
				responsive: true,
				pageDots:false,
				cellAlign: 'center',
				prevNextButtons: false
			});
		}
	});	
});
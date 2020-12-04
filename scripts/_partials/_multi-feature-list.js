$(function(){
	$('.multi-feature-list-feature').each(function(){
		var nav = $(this).find('.mfn-item'),
			media = $(this).find('.mfm-item');
		media.hide().first().show();
		nav.first().addClass('active');
		nav.click(function(){
			if(!$(this).hasClass('active')){
				nav.removeClass('active');
				$(this).addClass('active');
				media.hide().find('.feature-showcase').removeClass('active');
				media.eq($(this).index()).fadeIn().find('.feature-showcase').addClass('active');
			}
		});
	});
});
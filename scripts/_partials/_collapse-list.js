$(function(){
	$('dl.collapse-list').each(function(){
		var dt = $(this).find('dt'),
			dd = $(this).find('dd');
		dd.hide();
		dt.click(function(){
			if($(this).hasClass('open')){
				dd.slideUp();
				dt.removeClass('open');
			} else{
				dd.slideUp();
				dt.removeClass('open');
				$(this).addClass('open').next('dd').slideDown();
			}
		});					
	})
});
$(function(){     
    
    // MOBILE HEADER MENU
    var $menuNav = $('.siteHeader #mainNav').clone(); 
    $menuNav.attr( 'class', 'mobile-nav' );

    // Add New mmenu script full width
    $menuNav.mmenu({
        extensions : [ "shadow-panels", "fx-panels-slide-100", "border-none", "theme-black", "fullscreen" ],        
        offCanvas   : {
        position    : "right"
        },    
        navbars: {
            content : [ "prev", "title", "next", "close"],
            height  : 1,
        },                
        setSelected: true,
        searchfield: {
            resultsPanel: true
        }
    });
    
    $('.mm-panel').append( $('#subNav ul.l0').clone().addClass('sub-menu') );

	var API = $('.mobile-nav').data( "mmenu" );

	$(".toggle").click(function() {
		API.open();
	});	    
});







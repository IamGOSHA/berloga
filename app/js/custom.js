$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};gulp
	$('body').removeClass('loaded');
	$('.tabs .filter__butt').click(function(){
		$(this).parents('.tab-wrapp').find('.tab-cont').addClass('hide');
		$('.filter__butt').removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).addClass('active');
		return false
	});
$('.count').each(function(){
	$(this).prop('Counter',0).animate({
		Counter:$(this).text(){

	}
	})
});
	/* CLICKER*/

	$('.filter__butt').each(function(i){
		lastElem = i;
		return lastElem++
	});
	
	$('.onext').click(function(){
	 function cutNext(){
		 if(currentTabId.substr(3) < lastElem){
			 return currentTabId.substr(3);
		 }else if(currentTabId.substr(3) >= lastElem){
			 return 0;
		 }	
	 }
	 var currentTab = $(".active");
	 var currentTabId = currentTab.attr('href');
	 var currentCut = cutNext();
	 var nextTabId = "id" + ++currentCut;
	 
	 $(currentTabId).addClass('hide');
	 $(currentTab).removeClass('active');
	 $("#"+nextTabId).removeClass('hide');
	 $("a[href='#"+ nextTabId +"']").addClass('active');
	 });
	 $('.oprev').click(function(){
		 function cutPrev(){
			 if(currentTabId.substr(3) > 1){
				 return currentTabId.substr(3);
			 }else if(currentTabId.substr(3) <= 1){
				 return lastElem + 1;
			 }	
		 }
		 var currentTab = $(".active");
		 var currentTabId = currentTab.attr('href');
		 var currentCut = cutPrev();
		 var prevTabId = "id" + --currentCut;
		 $(currentTabId).addClass('hide');
		 $(currentTab).removeClass('active');
		 $("#"+ prevTabId).removeClass('hide');
		 $("a[href='#"+ prevTabId +"']").addClass('active');
		 });
	
	



	$('.slick-slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 1,
				autoplay: true,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			
		]
	});


	if($('#updates-slick').length) {
		$('#updates-slick').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			variableWidth: true,
			arrows: true,
			prevArrow: '<button type="button" class="prev"></button>',
			nextArrow: '<button type="button" class="next"></button>',
			responsive: [
		
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					variableWidth: false,
					infinite: true,
					arrows: true,
					dots: false,
				  }
				},
				{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					variableWidth: false,
					infinite: true,
					arrows: true,
					dots: false,
				  }
				},
				{
				  breakpoint: 769,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
					infinite: true,
					arrows: true,
					dots: false,
				  }
				},
				{
				  breakpoint: 500,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					infinite: true,
					arrows: true,
					dots: false,
				  }
				},
		
			]
		});
	};
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){

	/*Search*/
	$(".btn").click(function(){
		$(".input").toggleClass("act").focus;
		$(this).toggleClass("animate");
		$(".input").val("");
	});

	$('.tab-cont').slick({
		settings: 'unslick',
		responsive: [
			{breakpoint: 1900,
				settings: "unslick"

			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				autoplay: true,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
				prevArrow: '<button type="button" class="prev"></button>',
				nextArrow: '<button type="button" class="next"></button>',
				dots: false
				}
			},
			
		]
	});
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.toggleBtn,.cansel').click(function(){
		$(this).toggleClass('active'), 
		$('.main__wrapp__hidden').toggleClass('main__wrapp__active'); 
		return false;
	});
	
	/* components */
	
	/*
	
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	*/




	// if($('.content-block').length) {
	// 	$('.content-block').slick({
	// 		dots: false,
	// 		infinite: true,
	// 		speed: 300,
	// 		slidesToShow: 4,
	// 		slidesToScroll: 1,
	// 		variableWidth: true,
	// 		arrows: false,
	// 	 	prevArrow: '<button type="button" class="prev"></button>',
	// 		nextArrow: '<button type="button" class="next"></button>',
	// 		unset: slick,
	// 		responsive: [
	// 			{
	// 			  breakpoint: 1024,
	// 			  settings: {
	// 				slidesToShow: 4,
	// 				slidesToScroll: 1,
	// 				infinite: true,
	// 				dots: false,
	// 				arrows: false,
	// 			  }
	// 			},
	// 			{
	// 			  breakpoint: 600,
	// 			}				
	// 		]
	// 	});
	// };
	
	/*
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
// $('.mix').pagination({
// 	items: 5,
// 	itemOnPage: 3,
// 	currentPage: 1,
// 	cssStyle: '',
// 	onInit: function () {
// 			// fire first page loading
// 	},
// 	onPageClick: function (page, evt) {
// 			// some code
// 	}
// });
	
// var mixer = mixitup('#content-slick');
});

var handler = function(){
	if (viewport_wid <= 600) {

	}
	// if($(window).width()<767){
	// 	if( slickS.hasClass('slick-initialized')){
	// 			slickS.slick('unslick');
	// 	} 
	// 	return
	// }
	// if(!slickS.hasClass('slick-initialized')){
	// 	return slickS.slick(settings);
	// }

	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;


	if (viewport_wid <= 500) {

	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




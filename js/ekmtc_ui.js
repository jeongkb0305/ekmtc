
$(function(){	
	
  //quick_menu		
  $('.quick_open').click(function(){ 
	  $('.quick_box').animate({right:0});	 
  });
  $('.quick_close').click(function(){ 
	  $('.quick_box').animate({right:-362}); 
  });
  
  
  //layer_popup
  $('.layer_open').click(function(){
	 $('.popup_dim').fadeIn(); 
	 $('body,html').css('overflow','hidden');return false;
  });

  $('.layer_close').click(function(){
 	 $('.popup_dim').fadeOut();
	 $('body,html').removeAttr('style');return false;
  }); 



   //lang
	$('.lang').hover(function(){//오버했을때
		$('.lang>a').attr('class','on');
		$('.lang>ul').stop().slideDown(300);			
	},function(){//아웃했을때
		$('.lang>a').attr('class','');
		$('.lang>ul').stop().slideUp(300);
	});


	
	
});

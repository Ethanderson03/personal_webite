  $(function() {
  	
  	var myLazyLoad = new LazyLoad({
  		elements_selector: ".lazyload"
  	});
    if( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     $(".projectImg").click(function(){
      if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked"); 
        $(this).css("cursor", "zoom-in"); 
      }else{
        $(this).addClass("clicked");
        $(this).css("cursor", "zoom-out");  
      }
    });
   }
   
  	//add green on mouse over
  	$(".letter2").mouseover(function(){
  		$(".letter1").addClass("ertyColor");
  		$(".letter2").addClass("ertyColor");
  		$(".star1").addClass("ertyColor");
  	});
  	$(".letter2").mouseout(function(){
  		$(".letter1").removeClass("ertyColor");
  		$(".letter2").removeClass("ertyColor");
  		$(".star1").removeClass("ertyColor");
  	});

  	$(".letter4").mouseover(function(){
  		$(".letter1").addClass("ertyColor");
  		$(".letter2").addClass("ertyColor");
  		$(".letter3").addClass("ertyColor");
  		$(".letter4").addClass("ertyColor");
  		$(".star2").addClass("ertyColor");
  	});
  	$(".letter4").mouseout(function(){
  		$(".letter1").removeClass("ertyColor");
  		$(".letter2").removeClass("ertyColor");
  		$(".letter3").removeClass("ertyColor");
  		$(".letter4").removeClass("ertyColor");
  		$(".star2").removeClass("ertyColor");
  	});

  	$(".letter6").mouseover(function(){
  		$(".letter1").addClass("ertyColor");
  		$(".letter2").addClass("ertyColor");
  		$(".letter3").addClass("ertyColor");
  		$(".letter4").addClass("ertyColor");
  		$(".letter5").addClass("ertyColor");
  		$(".letter6").addClass("ertyColor");
  		$(".star3").addClass("ertyColor");
  	});
  	$(".letter6").mouseout(function(){
  		$(".letter1").removeClass("ertyColor");
  		$(".letter2").removeClass("ertyColor");
  		$(".letter3").removeClass("ertyColor");
  		$(".letter4").removeClass("ertyColor");
  		$(".letter5").removeClass("ertyColor");
  		$(".letter6").removeClass("ertyColor");
  		$(".star3").removeClass("ertyColor");
  	});

  	var iScrollPos = 0;

  	$(window).scroll(function () {
  		var iCurScrollPos = $(this).scrollTop();
  		if (iCurScrollPos > iScrollPos) {
  			$(".header").hide();
  		} else {
  			$(".header").fadeIn(200);
  		}
  		iScrollPos = iCurScrollPos;
  	});
  });
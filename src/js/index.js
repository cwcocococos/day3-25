$(function(){
	//吸顶效果
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		if(sTop > 100){
			$('#topNav').show(1000).css({"position":"fixed","top":"0"});
			$('#leftNav').show(1000).css({"position":"fixed","top":"50%"});
		}else{
			$('#topNav').css("display","none");
			$('#leftNav').css("display","none");
		}
	})
	
	//轮播
	var timer = setInterval(auto,1500);
	var index = 0;
	function auto(){
		index++;
		if( index == $("ol li").size() ){
			index = 0;
		}
		$("ol li").eq(index).addClass("current").siblings().removeClass("current");
		$(".pic li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	
	//鼠标 操作
	$("ol li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		auto();
	})
	$("ol li").mouseout(function(){
		timer = setInterval(auto,1500);
	})

})

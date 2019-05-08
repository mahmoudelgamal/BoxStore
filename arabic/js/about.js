$(document).ready(function(){
	$('.tabs li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".content-list >div").hide();
		$($(this).data('content')).fadeIn()
	})
})
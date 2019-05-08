$(document).ready(function () {
	//dynamic select color
	$(".color-box").on('click', function () {
		$(this).toggleClass('selectBorder').siblings().removeClass("selectBorder")
	});
	//dynamic selct number of pieces
	var total = parseInt($('.number input').val());
	$('.plus').on('click', function () {
		total += 1;
		console.log(total)
		$('.number input').val(total)
	});
	$('.number input').on(' keyup', function () {
			total =	parseInt($('.number input').val())

	});
	
	$('.mins').on('click keyup', function () {
		if (total > 0) {
			total -= 1;
			console.log(total)
			$('.number input').val(total)
		};
	});
	//dynamic tabs
	$('.info-describe li').on('click',(function(){
		$(this).addClass('active').siblings().removeClass('active');
//		console.log($(this).data('content'))
		$('.content-list >div').hide();
		$($(this).data('content')).fadeIn()
	}));
	//gallery
	var gallery = $('.gallery a').simpleLightbox();

});

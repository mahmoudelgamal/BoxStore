$(document).ready(function () {
	//dynamic select size
	$(".size ").on('click', function () {
		$(this).toggleClass('selectBorder').siblings().addClass("selectSiblings")
	});
	//dynamic select color
	$(".color-box").on('click', function () {
		$(this).toggleClass('selectBorder').siblings().removeClass("selectBorder")
	});
	//dynamic selct number of pieces
	var total = 1;
	$('.select-number .plus').on('click', function () {
		total += 1;
		console.log(total)
		$('.select-number .number').text(total)
	});
	$('.select-number .mins').on('click', function () {
		if (total > 0) {
			total -= 1;
			console.log(total)
			$('.select-number .number').text(total)
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

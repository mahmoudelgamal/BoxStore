$(document).ready(function () {
			//dynamic selct number of pieces
			var total = 1;
			$('.plus').on('click', function () {
				total += 1;
				console.log(total)
				$('.number').text(total)
			});
			$('.mins').on('click', function () {
				if (total > 0) {
					total -= 1;
					console.log(total)
					$('.number').text(total)
				};
			});
	
			$('.fa-times').on('click', function (e) {
				var product = e.target.firstElementChild.id;
				console.log(product)
				$("#product1").remove()
			})

			});

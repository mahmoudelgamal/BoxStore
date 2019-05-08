$(document).ready(function () {
			$('.fa-times').on('click', function (e) {
				var product = e.target.firstElementChild.id;
				console.log(product)
				$("#product1").remove()
			})

			});

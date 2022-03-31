//const { on } = require('gulp');

//!tini-slider
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	responsive: {
		200: {
			nav: true,
			//navPosition: 'bottom',
		},
		575: {},
		767: {},
		990: {
			nav: false,
		},
	},
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});

//!tabs

$(document).ready(function () {
	$('ul.catalog__tabs').on(
		'click',
		'li:not(.catalog__tab_active)',
		function () {
			$(this)
				.addClass('catalog__tab_active')
				.siblings()
				.removeClass('catalog__tab_active')
				.closest('div.container')
				.find('div.catalog__content')
				.removeClass('catalog__content_active')
				.eq($(this).index())
				.addClass('catalog__content_active');
		}
	);

	function toggleSlaid(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content')
					.eq(i)
					.toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}
	toggleSlaid('.catalog-item__link');
	toggleSlaid('.catalog-item__back');

	//modal
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('fast');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('fast');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('fast');
		});
	});
});

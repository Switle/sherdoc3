function burger() {
	const menu = document.querySelector('.mobile-menu');
	const burger = document.querySelector('.burger');
	const mask = document.querySelector('.mask');
	const body = document.querySelector('body');

	burger.addEventListener('click', () => {
		menu.classList.toggle('active');
		burger.classList.toggle('active');
		mask.classList.toggle('active');
		body.classList.toggle('noscroll');
	});

	window.addEventListener('resize', () => {
		menu.classList.remove('active');
		burger.classList.remove('active');
		mask.classList.remove('active');
		body.classList.remove('noscroll');
	});
}

burger();



//# sourceMappingURL=script.js.map

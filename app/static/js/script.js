window.addEventListener('load', function() {

	const heroBtns = document.querySelectorAll('.hero__btn');
	const heroModal = document.querySelector('.hero-modal');
	const heroModalClose = document.querySelector('.hero-modal__close');
	const heroModalCards = document.querySelector('.hero-modal-cards');
	const modalCardForm = document.querySelector('.modal-card-form');
	
	modalCardForm.addEventListener('click', e => {
		if(e.target.classList.contains('modal-card-form__btn')) {
			const input = modalCardForm.querySelector('.modal-card-form__input');
			if(input.value !== '') {
				const card = modalCardForm.closest('.hero-modal__card');
				const submit = card.querySelector('.modal-card__submit');
				submit.classList.toggle('active');
			}
			else {
				e.preventDefault();
			}
		}
	});

	heroModalCards.addEventListener('click', e => {
		const target = e.target;
		if(target.classList.contains('modal-card__btn')) {
			const card = target.closest('.hero-modal__card');
			const submit = card.querySelector('.modal-card__submit');
			submit.classList.toggle('active');
		}

	});

	const toggleHeroModal = () => {
		heroModal.classList.toggle('active');
	}

	heroBtns.forEach(btn => {
		btn.addEventListener('click', toggleHeroModal);
	});

	heroModalClose.addEventListener('click', toggleHeroModal);

});
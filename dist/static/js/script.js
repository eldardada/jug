"use strict";

window.addEventListener('load', function () {
  var heroBtns = document.querySelectorAll('.hero__btn');
  var heroModal = document.querySelector('.hero-modal');
  var heroModalClose = document.querySelector('.hero-modal__close');
  var heroModalCards = document.querySelector('.hero-modal-cards');
  var modalCardForm = document.querySelector('.modal-card-form');
  modalCardForm.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-card-form__btn')) {
      var input = modalCardForm.querySelector('.modal-card-form__input');

      if (input.value !== '') {
        var card = modalCardForm.closest('.hero-modal__card');
        var submit = card.querySelector('.modal-card__submit');
        submit.classList.toggle('active');
      } else {
        e.preventDefault();
      }
    }
  });
  heroModalCards.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('modal-card__btn')) {
      var card = target.closest('.hero-modal__card');
      var submit = card.querySelector('.modal-card__submit');
      submit.classList.toggle('active');
    }
  });

  var toggleHeroModal = function toggleHeroModal() {
    heroModal.classList.toggle('active');
  };

  heroBtns.forEach(function (btn) {
    btn.addEventListener('click', toggleHeroModal);
  });
  heroModalClose.addEventListener('click', toggleHeroModal);
});
import cardsMenu from '../templates/menu-cards.hbs';
import elMarkup from '../menu.json';

// Делаем разметку========================================
const cardMenuEl = document.querySelector('.js-menu');

function createGallery(cards) {
  return cards.map(cardsMenu).join('');
}

const cardMarkup = createGallery(elMarkup);
cardMenuEl.insertAdjacentHTML('beforeend', cardMarkup);
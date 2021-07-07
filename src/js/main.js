import cardsMenu from '../templates/menu-cards.hbs';
import elMarkup from '../menu.json';


const cardMenuEl = document.querySelector('.js-menu');

function createGallery(cards) {
  return cards.map(cardsMenu).join('');
}

const cardMarkup = createGallery(elMarkup);
cardMenuEl.insertAdjacentHTML('beforeend', cardMarkup);
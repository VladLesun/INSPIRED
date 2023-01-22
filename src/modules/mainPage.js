import { renderNavigation } from './render/renderNavigation';
import { renderHero } from './render/renderHero';
import { renderProducts } from './render/renderProducts';

export const mainPage = (gender = 'women') => {
	renderNavigation(gender);
	renderHero(gender);
	renderProducts('Новинки', { gender });
};

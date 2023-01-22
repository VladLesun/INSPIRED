import './index.html';
import './index.scss';

import { mainPage } from './modules/mainPage';
import { renderHeader } from './modules/render/renderHeader';
import { renderFooter } from './modules/render/renderFooter';
import { router } from './modules/router';
import { getData } from './modules/getData';
import { API_URL, DATA } from './modules/const';
import { createCssColors } from './modules/createCssColors';
import { createElement } from './modules/createElement';
import { categoryPage } from './modules/categoryPage';

const init = async () => {
	try {
		router.on('*', () => {
			renderHeader();
			renderFooter();
		});

		DATA.navigation = await getData(`${API_URL}/api/categories`);
		DATA.colors = await getData(`${API_URL}/api/colors`);

		createCssColors(DATA.colors);

		router.on('/', () => {
			mainPage();
		});

		router.on('women', () => {
			mainPage('women');
		});

		router.on('men', () => {
			mainPage('men');
		});

		router.on('/:gender/:category', categoryPage);

		router.on('search', (data) => {
			console.log(data.params.value);
		});

		// setTimeout(() => {
		//     router.navigate('men');
		// }, 3000);

		// setTimeout(() => {
		//     router.navigate('women');
		// }, 6000)
	} catch (e) {
		console.warn(e);
		createElement(
			'h2',
			{
				className: 'main__error-title',
				textContent: 'Что-то пошло не так, попробуйте позже...',
			},
			{
				parent: document.querySelector('.main'),
			}
		);
	} finally {
		router.resolve();
	}
};

init();

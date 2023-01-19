import { createElement } from './createElement';

export const createCssColors = (colors) => {
	let style = createElement('style');

	colors.forEach((color) => {
		style.textContent += `
            .color_${color.title}:after {
                background-color: ${color.code};
                ${color.title === 'white' ? 'border: .4px solid $gray;' : ''};
            }
        `;
	});

	document.head.append(style);
};

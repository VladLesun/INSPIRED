import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero";
import { renderGoods } from "../render/renderGoods";

export const mainPage = (gender = 'women') => {
    console.log('gender: ', gender);

    renderNavigation(gender);
    renderHero(gender);
    renderGoods();
}
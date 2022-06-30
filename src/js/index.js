import * as functions from './core/utils/functions.js';
import * as forms from './core/forms/forms.js';
import './core/forms/select.js';
import '../scss/style.scss';

export const popup = {
	open (selector) {
		document.querySelector(selector).classList.add('_open');
	},
	close (e, selector) {
		e.target.closest(selector).closest('.popup').classList.remove('_open');
	}
};

const documentClick = (e) => {
	const targetElement = e.target;

	if(targetElement.closest('.popup__close')) {
		popup.close(e, '.popup__close');
	}
	if(targetElement.closest('.popup') && !targetElement.closest('.popup__content')) {
		popup.close(e, '.popup');
	}
};

const init = () => {
	const $html = document.documentElement;
	$html.classList.add('loaded');

	forms.formFieldsInit();
	forms.formSubmit(true);
	forms.formViewpass();
	functions.setPhoneMask();

	document.addEventListener('click', documentClick);
};

window.addEventListener('load', init);


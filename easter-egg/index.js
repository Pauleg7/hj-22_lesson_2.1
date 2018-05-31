'use strict';

function getNav (event) {
	if (event.altKey && event.ctrlKey) {
		if (event.code === 'KeyT') {
			document.getElementsByTagName('nav')[0].classList.toggle('visible');
		}
	}
}

document.addEventListener('keydown',getNav);


const needCode = [
	'KeyY',
	'KeyT',
	'KeyN',
	'KeyJ',
	'KeyK',
	'KeyJ',
	'KeyU',
	'KeyB',
	'KeyZ'
];

let userCode = [];

function getWord (event) {
	userCode.push(event.code)
	for (let i = 0; i < userCode.length; i++) {
		if (needCode[i] !== userCode[i]) {
			userCode = [];
		}
	}
	if (needCode.length === userCode.length) {
		document.getElementsByClassName('secret')[0].classList.add('visible');
	}
}
document.addEventListener('keydown',getWord);
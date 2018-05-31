'use strict';

const generalImg = document.getElementsByClassName('gallery-view')[0];
const images = document.getElementsByTagName('a');

function imgFocus(event) {
	for (let img of images) {
		img.classList.remove('gallery-current');
	}
	this.classList.add('gallery-current');
	generalImg.src = this.href;
	event.preventDefault();
}

for(let i of images) {
	i.addEventListener('click', imgFocus);
}
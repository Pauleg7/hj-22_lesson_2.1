'use strict';

const sounds = {
	middle : [
	'sounds/middle/first.mp3',
  'sounds/middle/second.mp3',
  'sounds/middle/third.mp3',
  'sounds/middle/fourth.mp3',
  'sounds/middle/fifth.mp3'
  ],
  lower : [
	'sounds/lower/first.mp3',
  'sounds/lower/second.mp3',
  'sounds/lower/third.mp3',
  'sounds/lower/fourth.mp3',
  'sounds/lower/fifth.mp3'
  ],
  higher : [
	'sounds/higher/first.mp3',
  'sounds/higher/second.mp3',
  'sounds/higher/third.mp3',
  'sounds/higher/fourth.mp3',
  'sounds/higher/fifth.mp3'
  ]
}
  
const set = document.getElementsByClassName('set')[0];
const notes = set.getElementsByTagName('li');
const audio = set.getElementsByTagName('audio');

for (let i = 0;  i < audio.length; i++) {
	audio[i].src = sounds.middle[i];
}

function chengeTone (event) {
	if (!event.repeat) {
		return;
	}

	if (event.shiftKey) {
		set.classList.remove('middle', 'higher');
		set.classList.add('lower');
		for (let i = 0;  i < audio.length; i++) {
			audio[i].src = sounds.lower[i];
 		}
 	} else if (event.altKey) {
 		set.classList.remove('middle', 'lower');
		set.classList.add('higher');
		for (let i = 0;  i < audio.length; i++) {
			audio[i].src = sounds.higher[i];
 		}
 	}
}

function clearTone() {
 	set.classList.remove('higher', 'lower');
	set.classList.add('middle');
	for (let i = 0;  i < audio.length; i++) {
		audio[i].src = sounds.middle[i];
	}
}

document.addEventListener('keydown', chengeTone);
document.addEventListener('keyup', clearTone);

function clickNote (event) {		
	this.getElementsByTagName('audio')[0].play();
}

for (let note of notes) {
	note.addEventListener('click', clickNote);
}
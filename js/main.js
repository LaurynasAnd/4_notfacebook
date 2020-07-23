'use strict';
import posts from './data.js';
import renderFeed from './renderFeed.js';


console.log('pradinis js failas');
console.log(posts);

//generating content
renderFeed(posts, '#feed');

// finding existing 'read more' and watching for click

function toggleVisibility(event) {
    console.log('read more...');
    event.target.closest('.post-content').querySelector('.short-text').classList.toggle('hidden');
    event.target.closest('.post-content').querySelector('.full-text').classList.toggle('hidden');
}

const readMoreList = document.querySelectorAll('span.read-more');
const readLessList = document.querySelectorAll('span.read-less');
for(let i = 0; i < readMoreList.length; i++){
    readMoreList[i].addEventListener('click', toggleVisibility);
    readLessList[i].addEventListener('click', toggleVisibility);
}
'use strict';
import posts from './data.js';
import renderFeed from './renderFeed.js';


console.log('pradinis js failas');
console.log(posts);

renderFeed(posts, '#feed');
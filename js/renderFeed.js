import renderPost from './renderPost.js';

function renderFeed(data, selector) {
    console.log(data);
    const size = data.length
    let HTML = '';
    for (let i=0; i<size; i++) {
        HTML += renderPost(data[i]);
    }

    return document.querySelector(selector).innerHTML += HTML;
}
export default renderFeed;
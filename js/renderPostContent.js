import renderText from './renderText.js'
import renderTextWithBackground from './renderTextWithBackground.js'
import renderPhotos from './renderPhotos.js'


function renderPostContent (data) {
    
    let HTML = '';
    if (data.postText) {
        if (!data.postPhotos & data.postBackground) {
            HTML += renderTextWithBackground(data.postText, data.postBackground);
        } else{
            HTML += renderText(data.postText);
        }
    }
    if (data.postPhotos) {
        HTML += renderPhotos(data.postPhotos);
    }

    return `<div class="post-content">
                ${HTML}
            </div>`;
}

export default renderPostContent;
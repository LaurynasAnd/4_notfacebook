import renderPostHeader from './renderPostHeader.js';
import renderPostContent from './renderPostContent.js';
import renderPostFooter from './renderPostFooter.js';

function renderPost(data) {
    return       `<div class="post">
                    ${renderPostHeader(data.author, data.postTimeStamp)}
                    ${renderPostContent(data.content)}
                    ${renderPostFooter(data)}
                </div>`;
}

export default renderPost;
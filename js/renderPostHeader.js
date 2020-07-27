import timestampToTimeAgo from './timestampToTimeAgo.js'

function renderPostHeader (user, timeStamp) {
    return `<div class="post-header">
                <a href="${user.authorLink}" class="user-profile-photo">
                    <img src="./img/users/${user.authorPhoto}" alt="User photo">
                </a>
                <div class="user-details">
                    <div class="author">
                        <a href="${user.authorLink}" class="link">${user.authorName} ${user.authorSurname}</a>
                    </div>
                    <div class="time">${timestampToTimeAgo(timeStamp)}</div>
                </div>
                <div class="post-actions">...</div>
            </div>`;
}

export default renderPostHeader;
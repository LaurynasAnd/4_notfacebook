function renderPhotos(photos) {
    let HTML = '';
    const maxPhotosPerGallery = 4
    const size = photos.length > maxPhotosPerGallery ? 4 : photos.length
    let extra = '';
    for (let i = 0; i <size; i++){
        HTML += `<img src="./img/posts/${photos[i]}" alt="User post photos">`;
    }
    if (photos.length > maxPhotosPerGallery) {
        extra = `<div class="extra">+${photos.length-maxPhotosPerGallery}</div>`;
    }
    return `<div class="gallery gallery-${size}">
                ${HTML}${extra}
            </div>`
}
export default renderPhotos;
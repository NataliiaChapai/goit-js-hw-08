import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
const itemMakrup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemMakrup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>`
    })
        .join('');
}

let lightbox = new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250, });
lightbox.on('show.simplelightbox', function () { });
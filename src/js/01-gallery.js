import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
const ref = document.querySelector(".gallery");

const PictureMarkup = createPictureMarkup(galleryItems);
ref.insertAdjacentHTML("beforeend", PictureMarkup);

function createPictureMarkup(items) {
   return items
   .map(({ preview, original, description }) => {
      return ` 
      <a class="gallery__item" href="${original}" uk-lightbox>
         <img class="gallery__image" 
         src="${preview}" 
         alt="${description}" />
      </a>`;
   })
   .join("");
}

let lightbox = new SimpleLightbox('.gallery a', {
   captions: true,
   captionsData: 'alt',
   captionDelay: 250
});
lightbox.on('show.simplelightbox');
console.log(galleryItems);

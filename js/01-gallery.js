
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgList = galleryItems

    .map(({ preview, original, description }) =>
    
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )

    .join("");


gallery.insertAdjacentHTML("beforeend", imgList);
    
gallery.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(event) {
    
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;

    } else {

        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
        instance.show()

     if (instance.visible()) {
    window.addEventListener("keydown", onPressKeyESC);
  }
      
        function onPressKeyEsc(event) {
            if (event.code === "Escape") {
                window.removeEventListener("keydown", onPressKeyEsc);
                instance.close();
            }       
        }
    }
}
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import getRefs from './refs';
const refs = getRefs();

refs.galleryList.addEventListener('click', onLargeImg);

function onLargeImg(e) {
  e.preventDefault();
const largePhoto= e.target.dataset.large;
    
      const instance = basicLightbox.create(
          `<img  src="${largePhoto}"  /> `
        );
          instance.show();
 
}
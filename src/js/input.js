import {success ,error, defaultModules } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});
import photoCardTpl from '../templates/photoCard.hbs';
import * as basicLightbox from 'basiclightbox'
import NewApiService from "./apiService";
import getRefs from './refs';
const refs = getRefs();
const newApiService = new NewApiService;
const instance = basicLightbox.create(
  document.querySelector('.js-gallery')
  )
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.loadMoreBtn.style.display= "none";

function onSearch(e) {
  e.preventDefault();
   newApiService.searchQuery =  e.currentTarget.elements.query.value;
  newApiService.resetPage();
  instance.show();
  newApiService.fetchApiServise().then(photoCard => {
    clearGalleryList();
    photoCardsMarkup(photoCard);

    if(!photoCard.length )  {
      return  error({ text: 'Error! Please enter a more  query!' });
    }
    if (photoCard.length > 1 && photoCard.length <= 11) {
      instance.show();
      
      return success({ text: 'Hooray! We found images for you!' });
    }
    if (photoCard.length >= 12 )
    {
      refs.loadMoreBtn.style.display= "";
      return success({ text: 'Hooray! We found images for you!' }); 
    }
   }
  )
}
function onLoadMore() {
  newApiService.fetchApiServise(newApiService).then(photoCard => {
    photoCardsMarkup(photoCard);
  })
}
function photoCardsMarkup(photoCard) {
  refs.galleryList.insertAdjacentHTML('beforeend', photoCardTpl(photoCard))
}
function clearGalleryList() {
  refs.galleryList.innerHTML = '';
}

//const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
 //   behavior: 'smooth',
 //   block: 'end',
 // });
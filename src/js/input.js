// import { error, defaultModules } from "@pnotify/core/dist/PNotify.js";
// import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// defaultModules.set(PNotifyMobile, {});
//  const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'end',
  // });
  
  import photoCardTpl from '../templates/photoCard.hbs';
  import NewApiService from "./apiService";
  import getRefs from './refs';
  const refs = getRefs();
  const newApiService = new NewApiService;
console.log(refs.searchForm);
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  newApiService.searchQuery = e.currenttarget.elements.searchQuery.value;
  
  newApiService.resetPage();
  newApiService.fetchApiServise(newApiService).then(photoCard => {
    clearGalleryList();
    photocardsMarkup(photoCard)
  });
}
function onLoadMore() {
  newApiService.fetchApiServise(newApiService).then(photocardsMarkup);
}
function photocardsMarkup(photoCard) {
  refs.galleryList.insertAdjacentHTML('beforeend', photoCardTpl(photoCard))
}
function clearGalleryList() {
  refs.galleryList.innerHTML = '';
}
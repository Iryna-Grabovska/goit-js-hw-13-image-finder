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

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  console.log(onSearch);
  console.log(e)
  e.preventDefault();
  newApiService.query = e.currenttarget.elements.query.value;
  
  newApiService.resetPage();
    newApiService.fetchApiServise(newApiService).then(photocardsMarkup)
}
function onLoadMore() {
  newApiService.fetchApiServise();
}
function photocardsMarkup(photoCard) {
  refs.btnSearch.insertAdjacentHTML('beforeend', photoCardTpl(photoCard))
}
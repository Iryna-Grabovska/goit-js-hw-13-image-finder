//import fotosTpl from "../templates"
//import debounce from "lodash.debounce";
// import { alert, error, defaultModules } from "@pnotify/core/dist/PNotify.js";
// import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// defaultModules.set(PNotifyMobile, {});
// refs.searchForm.addEventListener('input', debounce(onSearch, 500));
//  const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'end',
  // });
  import NewApiService from "./apiService";
  import getRefs from './refs';
  const refs = getRefs();
  const newApiService = new NewApiService;

refs.searchForm.addEventListener('submit', onSearch);
console.log(refs.searchForm)
refs.loadMoreBtn.addEventListener('click', onLoadMore);
function onSearch(e) {
  e.preventDefault();
  newApiService.query = e.currentTarget.elements.query.value;
  
    newApiService.fetchApiServise(newApiService)

}
function onLoadMore() {
  newApiService.fetchApiServise(newApiService)
}
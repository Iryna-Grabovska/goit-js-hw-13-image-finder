import {success ,error, defaultModules } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

import photoCardTpl from '../templates/photoCard.hbs';

import NewApiService from "./apiService";
const newApiService = new NewApiService;

import getRefs from './refs';
const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.loadMoreBtn.style.display= "none";


function onSearch(e) {
  e.preventDefault();
  newApiService.searchQuery =  e.currentTarget.elements.query.value;
  newApiService.resetPage();
  newApiService.fetchApiServise().then(photoCard => {
    clearGalleryList();
    photoCardsMarkup(photoCard);
        
      if (!photoCard.length) {
        refs.loadMoreBtn.style.display= "none";
        
        return  error({ text: 'Error! Please enter a more  query!' });
      }
      if (photoCard.length > 1 && photoCard.length <= 11) {      
        return success({ text: 'Hooray! We found images for you!' });
      }
      if (photoCard.length >= 12 )
      {
        refs.loadMoreBtn.style.display= "";
        return success({ text: 'Hooray! We found images for you!' }); 
      }
    }
    ).catch(searchError)
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
  function searchError(err) {
  if (err.message === '404') {
    error({ text: 'Please enter a more specific query!' });
  }
  
}


const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23459982-aeff0c389b47d03a141af0a17';
  export default class NewApiService {
    constructor() {
      
 this.searchQuery = '';
      this.page = 1;
    }
    fetchApiServise() {
      const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;

      return fetch(url)
        .then(response => response.json())
        .then(data =>
      {
          this.incrementPage();
          return data.photo;
      })
    };
    incrementPage() {
      this.page += 1;
    }
    resetPage() {
      this.page = 1;
    }
// get query(){
//  return searchQuery;
//     };
// set query(newQuery){
//  this.searchQuery = newQuery;
//     };
}
  

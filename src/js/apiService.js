
  export default class NewApiService{
    
    constructor() {
      
      this.searchQuery = '';
      this.page = 1;
    };
    fetchApiServise(){
      const options = {
        
        headers: {
          Autorization: '23459982-aeff0c389b47d03a141af0a17'
        }
      };
  const url = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12';
  fetch (url, options)
    .then(response => response.json())
    .then(data =>
      console.log(data)
      (this.page += 1))
    
    };
get query(){
 return searchQuery;
    };
set query(newQuery){
 this.searchQuery = newQuery;
    };
}
  

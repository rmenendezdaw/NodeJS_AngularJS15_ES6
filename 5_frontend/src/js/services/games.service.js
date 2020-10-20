export default class Games {
    constructor(AppConstants, $http, $q) {
      "ngInject";
  
      this._AppConstants = AppConstants;
      this._$http = $http;

      this._$q = $q;
    }


    getGames() {
        return this._$http({
            url: this._AppConstants.api + "/games/",
            method: "GET"
        }).then(res => {
            // console.log(res.data.games)
            return res.data.games;
        });
    }
    // query() { //se usa en el games-list component para obtener todos los juegos
    //     // Create the $http object for this request
    //     let request = {
    //       url: this._AppConstants.api + '/games/',
    //       method: 'GET',
    //     };

    //     return this._$http(request).then((res) => res.data); 
    //     //nos devuelve el array de los games
    // }
    query(config) {
      // Create the $http object for this request
      let request = {
        url: this._AppConstants.api + '/games' + ((config.type === 'feed') ? '/feed' : ''),
        method: 'GET',
        params: config.filters ? config.filters : null
      };
      return this._$http(request).then((res) => res.data);
    }
    //Get the categories of the games
    getCategories() {
    return this._$http({
      url: this._AppConstants.api + "/games/category",
      method: "GET"
    }).then(res => res.data.category);
  }
  //Get games in a category
    getCategory(category){
      return this._$http({
        url: this._AppConstants.api + "/games/filter/" + category,
        method: "GET"
      }).then(res => res.data.games);
    }
    getGame(slug) { // get 1 game
    return this._$http({
        url: this._AppConstants.api + "/games/" + slug,
        method: "GET"
    }) .then( res => res.data.game);
    }
    favorite(slug) {
        return this._$http({
        url: this._AppConstants.api + "/games/" + slug + "/favorite",
        method: "POST"
        });
    }
    
    unfavorite(slug) {
        return this._$http({
        url: this._AppConstants.api + "/games/" + slug + "/favorite",
        method: "DELETE"
        });
    }
}


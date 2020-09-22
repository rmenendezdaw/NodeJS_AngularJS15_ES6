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
    query() { //se usa en el games-list component para obtener todos los juegos
        // Create the $http object for this request
        let request = {
          url: this._AppConstants.api + '/games/',
          method: 'GET',
        };

        return this._$http(request).then((res) => res.data); 
        //nos devuelve el array de los games
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


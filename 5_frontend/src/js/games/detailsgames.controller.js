console.log("cargamos")
class DetailsGamesCtrl {
    constructor(game, $scope) {
        "ngInject";
        console.log("controller details")
        this.game=game;
    }
      
}

export default DetailsGamesCtrl;
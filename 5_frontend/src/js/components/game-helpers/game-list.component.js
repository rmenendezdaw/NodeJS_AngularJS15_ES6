class GameListCtrl {

    constructor($scope, $state){
      "ngInject";
  
      this._$scope = $scope;
    }
  }
   let GameList = {
    bindings: {
      games: '='
    },
    controller: GameListCtrl,
    templateUrl: 'components/game-helpers/game-list.html'
  };

  export default GameList;
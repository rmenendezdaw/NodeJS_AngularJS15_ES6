class GamesListCtrl {

    constructor($scope, $state){
      "ngInject";
      
      this._$scope = $scope;
    }
  }
   let GamesList = {
    bindings: {
      games: '='
    },
    controller: GamesListCtrl,
    templateUrl: 'components/games-helpers/games-list.html'
  };

  export default GamesList;
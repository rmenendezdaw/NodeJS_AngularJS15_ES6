class GamesCtrl {
    constructor(games, $state, $scope, $stateParams) {
        "ngInject";

        this._$scope = $scope;
        this.games = games;
        this.filter = $stateParams.filter;
        $scope.games = this.games;

        // var gamesFiltered = new Array();
        // this.games.forEach(game => {
        //   if (game.category == this.filter) {
        //     gamesFiltered.push(game);
        //   }
        //   console.log(gamesFiltered);
        // });
        // $scope.gamesFiltered = gamesFiltered;
        //   console.log(game)
    }
}
export default GamesCtrl;
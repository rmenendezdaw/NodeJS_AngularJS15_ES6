class GamesCtrl {
    constructor(games, $state, $scope, $stateParams) {
        "ngInject";

        this._$scope = $scope;

        this.games = games;
        this.filter = $stateParams.filter;

        var gamesFiltered = new Array();
        this.games.forEach(game => {
          if (game.category == this.filter) {
            gamesFiltered.push(game);
          }
          console.log(gamesFiltered);
        });
        $scope.gamesFiltered = gamesFiltered;

        this._$scope.openDetails = function () {

            $state.go("app.detailsGames", { slug: this.game["slug"] });
        };
    }
}
export default GamesCtrl;
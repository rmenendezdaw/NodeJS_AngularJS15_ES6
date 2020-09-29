class GamesCtrl {
    constructor(games, $state, $stateParams) {
        "ngInject";

        this.games = games;
        this.filter = $stateParams.filter;
        $scope.games = this.games;
        console.log(this.filter);
        var gamesFiltered = new Array();
        this.games.forEach(game => {
          if (game.category == this.filter) {
            gamesFiltered.push(game);
          }
        });
        this.game= game;
    }
}
export default GamesCtrl;
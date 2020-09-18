class DetailsGamesCtrl {
    constructor(game, $scope) {
        //llama desde games.config(resolve)
    
        "ngInject";
        this._$scope = $scope;
        $scope.game = game;

        this._$scope.back = function() {
            $state.go("app.games", { filter: this.game.price });
        };

    }
}
export default DetailsGamesCtrl;
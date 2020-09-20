class DetailsGamesCtrl {
    constructor(game,$state, $scope) {
        console.log(game)

        //llama desde games.config(resolve)
    
        "ngInject";
        this._$scope = $scope;
        $scope.game = game;

        this._$scope.back = function() {
            console.log(this.game.price)
            $state.go("app.games");
        };

    }
}
export default DetailsGamesCtrl;
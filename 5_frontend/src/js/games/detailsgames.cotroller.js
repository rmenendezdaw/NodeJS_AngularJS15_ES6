class DetailsHotelsCtrl {
    constructor(game, $scope) {
        //llama desde hotels.config(resolve)
    
        "ngInject";
        this._$scope = $scope;
        $scope.game = game;

        this._$scope.back = function() {
            $state.go("app.hotels", { filter: this.game.price });
        };

    }
}
export default DetailsGamesCtl;
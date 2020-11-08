function GamesConfig($stateProvider) {
    "ngInject";
    $stateProvider
        .state("app.games", {
            url:"/games/:filter",
            controller: "GamesCtrl",
            controllerAs: "$ctrl",
            templateUrl: "games/games.html",
            title: "Games",
        })
};
// console.log(GamesConfig)

export default GamesConfig;
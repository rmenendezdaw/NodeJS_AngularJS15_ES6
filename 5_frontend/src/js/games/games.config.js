function GamesConfig($stateProvider) {
    "ngInject";
    $stateProvider
        .state("app.games", {
            url:"/games/:filter",
            controller: "GamesCtrl",
            controllerAs: "$ctrl",
            templateUrl: "games/games.html",
            title: "Games",
            resolve: {
                games: function(Games) {
                    // console.log(Games.getGames().then(games => games))
                    return Games.getGames().then(games => games);
                }
            }
        })
};
// console.log(GamesConfig)

export default GamesConfig;
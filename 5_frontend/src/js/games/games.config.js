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
                    return Games.getGames().then(games => games);
                }
            }
        })
        .state("app.detailsGames", {
            url: "/games/:slug",
            controller: "DetailsGamesCtrl",
            controllerAs: "$ctrl",
            templateUrl: "games/detailsgames.html",
            title: "Details Games",
            resolve: {
                game: function(Games, $stateParams){
                    // console.log("games.config.js", $stateParams.slug);
                    return Games.getGame($stateParams.slug).then(game => game);
                }
            }
        })
};
// console.log(GamesConfig)

export default GamesConfig;
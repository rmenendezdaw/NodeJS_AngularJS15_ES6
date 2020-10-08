function DetailsGameConfig($stateProvider) {
    "ngInject";
    $stateProvider

        .state("app.detailsgame", {
            url: "/game/:slug",
            controller: "DetailsGameCtrl",
            controllerAs: "$ctrl",
            templateUrl: "game/detailsgame.html",
            title: "Details Game",
            resolve: {
                game: function(Games, $stateParams){
                    // console.log("games.config.js", $stateParams.slug);
                    return Games.getGame($stateParams.slug).then(game => game);
                }
            }
        })
};
// console.log(GamesConfig)

export default DetailsGameConfig;
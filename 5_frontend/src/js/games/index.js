import angular from 'angular';

let gamesModule = angular.module("app.games", []);

import GamesConfig from "./games.config";
gamesModule.config(GamesConfig);

import GamesCtrl from "./games.controller";
gamesModule.controller("GamesCtrl", GamesCtrl);

import DetailsGamesCtrl from "./games.controller";
gamesModule.controller("DetailsGamesCtrl", DetailsGamesCtrl);

import ListGamesCtrl from "./games.controller";
gamesModule.controller("ListGamesCtrl", ListGamesCtrl);

export default gamesModule;





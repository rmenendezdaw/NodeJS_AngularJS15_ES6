import angular from 'angular';

let gamesModule = angular.module("app.games", []);

import GamesConfig from "./games.config";
gamesModule.config(GamesConfig);

import GamesCtrl from "./games.controller";
gamesModule.controller("GamesCtrl", GamesCtrl);


export default gamesModule;





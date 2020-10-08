import angular from 'angular';

let detailsgameModule = angular.module("app.detailsgame", []);

import DetailsGameConfig from "./detailsgame.config";
detailsgameModule.config(DetailsGameConfig);


import DetailsGameCtrl from "./detailsgame.controller";
detailsgameModule.controller("DetailsGameCtrl", DetailsGameCtrl);

// import Comment from './comment.component';
// gamesModule.component('comment', Comment);

export default detailsgameModule;





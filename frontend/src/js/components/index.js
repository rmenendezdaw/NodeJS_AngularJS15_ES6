import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

import FavoriteBtn from './buttons/favorite-btn.component';
componentsModule.component('favoriteBtn', FavoriteBtn);

import GamesList from './games-helpers/games-list.component';
componentsModule.component('gamesList', GamesList);

import GamesPreview from './games-helpers/games-preview.component';
componentsModule.component('gamesPreview', GamesPreview);

import Comment from './game-helpers/comment.component';
componentsModule.component('comment', Comment);

import GameActions from './game-helpers/game-actions.component';
componentsModule.component('gameActions', GameActions);

import ListPagination from './games-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);

import CompaniesList from './companies-helpers/companies-list.component';
componentsModule.component('companiesList', CompaniesList);

import CompaniesPreview from './companies-helpers/companies-preview.component';
componentsModule.component('companiesPreview', CompaniesPreview);

export default componentsModule;

import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

// import ArticleMeta from './article-helpers/article-meta.component';
// componentsModule.component('articleMeta', ArticleMeta);

import FavoriteBtn from './buttons/favorite-btn.component';
componentsModule.component('favoriteBtn', FavoriteBtn);

// import ArticlePreview from './article-helpers/article-preview.component';
// componentsModule.component('articlePreview', ArticlePreview);

// import ArticleList from './article-helpers/article-list.component';
// componentsModule.component('articleList', ArticleList);

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

export default componentsModule;

function EditorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.editor', {
    url: '/editor/:slug',
    controller: 'EditorCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'editor/editor.html',
    title: 'Editor',
    resolve:{
      auth: function(User) {
        return User.ensureAuthIs(true);
      },
      game: function(Games, User, $state, $stateParams) {

        if ($stateParams.slug) {

          return Games.get($stateParams.slug).then(
            (game) => {
              if (User.current.username === game.author.username) {
                return game;
              } else {
                $state.go('app.home');
              }
            },
            (err) => $state.go('app.home')
          )

        } else {
          return null;
        }

      }
    }
  });

};

export default EditorConfig;

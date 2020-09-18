class HomeCtrl {
  constructor(User, Games, Tags, $scope) {
    'ngInject';

    this._$scope = $scope;

    // // Get list of all tags
    Tags
      .getAll()
      .then(
        (tags) => {
          this.tagsLoaded = true;
          this.tags = tags
        }
      );
      Games
      .getGames()
      .then(
        (games) => {
          this.games = games
        }
      );

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;

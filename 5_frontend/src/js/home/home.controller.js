class HomeCtrl {
  constructor(AppConstants, games, Tags, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this.games = games;
  }

}

export default HomeCtrl;

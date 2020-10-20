class HomeCtrl {
  constructor(AppConstants, Tags, categories, User, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.categories = categories;
    this._$scope = $scope;
    // console.log(categories)
    Tags
      .getAll()
      .then(
        (tags) => {
          this.tagsLoaded = true;
          this.tags = tags
        }
      );

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };
  
  }
  changeList(newList) {
    console.log(newList)
    this._$scope.$broadcast('setListTo', newList);
  }
}

export default HomeCtrl;

class GamesCtrl {
    constructor($stateParams, Tags, $scope) {
        "ngInject";
        this._$scope = $scope;

        this.listConfig = {
          type: 'all',
        }
        if ($stateParams.filter) this.listConfig.filters =  {category: $stateParams.filter}
console.log(Tags)

      Tags
      .getAll()
      .then(
        (tags) => {
          // console.log(tags)
          this.tagsLoaded = true;
          this.tags = tags
        }
      );

    }
    changeList(newList) {
      this._$scope.$broadcast('setListTo', newList);
    }
}
export default GamesCtrl;
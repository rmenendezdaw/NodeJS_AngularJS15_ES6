class HomeCtrl {
  constructor(AppConstants, games, Tags, categories) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.games = games;
    this.categories = categories;
    console.log(categories)
  }

}

export default HomeCtrl;

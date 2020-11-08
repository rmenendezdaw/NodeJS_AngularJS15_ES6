function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      categories: function(Games) {
        return Games.getCategories().then((games) => games);
      }
  }
  });

};

export default HomeConfig;

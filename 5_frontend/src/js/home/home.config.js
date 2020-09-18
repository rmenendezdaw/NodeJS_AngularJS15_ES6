function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    // resolve: {
    //   category: function(Games) {
    //     return Games.getPrice().then(
    //       (price) => price
    //     )
    //   }
    // }

  });

};

export default HomeConfig;

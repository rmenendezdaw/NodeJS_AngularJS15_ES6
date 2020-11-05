class GamesListCtrl {

  constructor($scope, Games){
    "ngInject";
    this.$onInit = () =>{
    this._Games = Games;
    this.setListTo(this.listConfig);

    }
  }
  
  runQuery() {
  // Run the query
  this._Games
    .query()
    .then(
      (res) => {
        console.log(res)
        this.loading = false;

        // Update list and total pages
        this.list = res.games;

        this.listConfig.totalPages = Math.ceil(res.gamesCount / this.limit);
      }
    );
  }
}
  export default GamesListCtrl;
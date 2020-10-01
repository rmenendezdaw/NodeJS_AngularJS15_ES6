class GamesCtrl {
    constructor(games, $stateParams) {
        "ngInject";

        this.games = [];

        this.filter = $stateParams.filter;
        // console.log(this.games);
        if(this.filter){
          for(let game in games){
            if (games[game].category === this.filter) {
                if(this.games)
                this.games.push(games[game]);
                // console.log(this.games);
            }
          }
        }else{
          this.games=games;
        }
        
    }
}
export default GamesCtrl;
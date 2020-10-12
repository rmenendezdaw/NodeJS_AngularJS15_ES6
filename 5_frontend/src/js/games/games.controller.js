class GamesCtrl {
    constructor(games, $stateParams) {
        "ngInject";

        this.games = [];

        this.filter = $stateParams.filter;
        if(this.filter){
          for(let game in games){
            if (games[game].category === this.filter) {
                if(this.games)
                this.games.push(games[game]);
                // console.log("games controller",this.games);

            }
          }
        }else{
          // console.log(this.games);
          this.games=games;
        }
        
    }
}
export default GamesCtrl;
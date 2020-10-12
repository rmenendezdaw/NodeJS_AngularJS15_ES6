class GameActionsCtrl {
    constructor(Games, User, $state) {
      'ngInject';
  
      this._Games = Games;
      this._$state = $state;
  
      this.$onInit = () => {
        if (User.current) {
            this.canModify = (User.current.username === this.game.author.username);
        } else {
            this.canModify = false;
        }
    
    }
}
    deleteGame() {
      this.isDeleting = true;
      this._Games.destroy(this.game.slug).then(
        (success) => this._$state.go('app.home'),
        (err) => this._$state.go('app.home')
      )
    }
  }
  
  let GameActions = {
    bindings: {
      game: '='
    },
    controller: GameActionsCtrl,
    templateUrl: 'components/game-helpers/game-actions.html'
  };
  
  export default GameActions;
  
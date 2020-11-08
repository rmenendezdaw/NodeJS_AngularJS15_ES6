class FavoriteBtnCtrl {
  constructor(User, Games, $state) {
    'ngInject';

    this._User = User;
    this._Games = Games;
    this._$state = $state;

  }

  submit() {
    this.isSubmitting = true;

    if (!this._User.current) {
      this._$state.go('app.login');
      return;
    }

    if (this.game.favorited) {
      this._Games.unfavorite(this.game.slug).then(
        () => {
          this.isSubmitting = false;
          this.game.favorited = false;
          this.game.favoritesCount--;
        }
      )

    } else {
      this._Games.favorite(this.game.slug).then(
        () => {
          this.isSubmitting = false;
          this.game.favorited = true;
          this.game.favoritesCount++;
        }
      )
    }

  }

}

let FavoriteBtn= {
  bindings: {
    game: '='
  },
  transclude: true,
  controller: FavoriteBtnCtrl,
  templateUrl: 'components/buttons/favorite-btn.html'
};

export default FavoriteBtn;

class DetailsGameCtrl {
    constructor(game, User, Comments, $rootScope) {
        "ngInject";
        this.game=game;
        // console.log("controller details",this.game)
        this._Comments = Comments;

        this.currentUser = User.current;

        $rootScope.setPageTitle(this.game.title);

        Comments.getAll(this.game.slug).then(
            (comments) => this.comments = comments
          );

        this.resetCommentForm();
    }
    resetCommentForm() {
        this.commentForm = {
          isSubmitting: false,
          body: '',
          errors: []
        }
      }
    addComment(){
    this.commentForm.isSubmitting = true;

    this._Comments.add(this.game.slug, this.commentForm.body).then(
        (comment) => {
        this.comments.unshift(comment);
        this.resetCommentForm();
        },
        (err) => {
        this.commentForm.isSubmitting = false;
        this.commentForm.errors = err.data.errors;
        }
    )
    }    

    deleteComment(commentId, index) {
        console.log(commentId)
        this._Comments.destroy(commentId, this.game.slug).then(
          (success) => {
            this.comments.splice(index, 1);
          }
        )
    }
    
}


export default DetailsGameCtrl;
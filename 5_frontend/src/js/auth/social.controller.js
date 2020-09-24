class SocialCtrl {
    constructor(User, $state, $scope) {
      'ngInject';
  
      this._User = User;
      this._$state = $state;
      this._$scope = $scope;
    //   this._toaster = Toastr;
  
      this.title = $state.current.title;
      this.authType = $state.current.name.replace('app.', '');
  
      this._User.attemptAuth(this.authType, null).then(
        (res) => {
            this._$state.go('app.home');
        },
        (err) => {
          this._toaster.showToastr('error','Error trying to login');
          this._$state.go('app.home');
        }
      )
    }
  }
  export default SocialCtrl;
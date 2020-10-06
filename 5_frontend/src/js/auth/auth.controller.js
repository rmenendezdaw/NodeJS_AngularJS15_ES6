class AuthCtrl {
  constructor(User, $state, Toastr) {
    'ngInject';

    this._User = User;
    this._$state = $state;
    this._toaster = Toastr;
    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  }
  submit() {
    this._User.attemptAuth(this.authType, this.formData).then(
          (res) => {
            this._toaster.showToastr('success','Successfully Logged In');
            this._$state.go('app.home');
          },
          (err) => {
            this._toaster.showToastr('error','Error trying to login');
            this.isSubmitting = false;
            this.errors = err.data.errors;
          }
        )
  }
}

export default AuthCtrl;

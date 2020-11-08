class CompaniesListCtrl {
    constructor($scope, Companies){
      "ngInject";
      this.$onInit = () =>{
      this._Companies = Companies;
      this.setListTo(this.listConfig);
  
      $scope.$on('setListTo', (ev, newList) => {
        this.setListTo(newList);
      });
      }
    }
    setListTo(newList) {
      // Set the current list to an empty array
      this.list = [];
      // Set listConfig to the new list's config
      this.listConfig = newList;
  
      this.runQuery();
    }
    runQuery() {
      this.loading = true;
      this.listConfig = this.listConfig || {};

    // Run the query
    this._Companies
      .getAll()
      .then(
        (res) => {
          // console.log("------------------------------------result")
          // console.log(res)
          this.loading = false;
          // Update list and total pages
          this.list = res.companies;
          }


      );
    }
  }
    let CompaniesList = {
      bindings: {
        company: '=',
        listConfigCompanies: '='
      },
      controller: CompaniesListCtrl,
      templateUrl: 'components/companies-helpers/companies-list.html'
    };
  
    export default CompaniesList;
export default class Company {
    constructor(AppConstants, $http, $q, GraphQLClient) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$q = $q;
      this._GQL = GraphQLClient;
  
    }
  
    query(config) {
      console.log(config);
      // Create the $http object for this request
      let request = {
        url: this._AppConstants.api + '/companies/',
        method: 'GET',
        params: config.filters ? config.filters : null
      };
      return this._$http(request).then((res) => res.data);
    }
    //graphql request to get all companies
    getAll() {
      let query = `{
        companies {
          slug 
          title 
          platform
          description 
      }`;
      return this._GQL.get(query);
    }
  

  }
  
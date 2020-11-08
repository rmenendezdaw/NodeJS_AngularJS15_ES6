export default class Companies {
    constructor(AppConstants, $http, $q, GraphQLClient) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$q = $q;
      this._GQL = GraphQLClient;
  
    }
    //graphql request to get all companies
    
    getAll() {
      let query = `
      query{
        companies{
          slug
          title
          platform
          description
        }
    }
      `;
      return this._GQL.get(query);
    }
  

  }
  
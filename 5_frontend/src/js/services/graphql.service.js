 import { ApolloClient } from 'apollo-client'
 import { createHttpLink } from 'apollo-link-http'
 import { InMemoryCache } from 'apollo-cache-inmemory'
 import { setContext } from 'apollo-link-context';
 import gql from 'graphql-tag'
 
 export default class GraphQLClient {
     constructor(AppConstants, $q, JWT) {
         'ngInject';
 
         this._AppConstants = AppConstants;
         this._$q = $q;
         this._clients = new Map([[this._AppConstants.gql, this.createClient()]]);
         this._JWT = JWT;
     }
 
     createClient(server = this._AppConstants.gql) {
         return new ApolloClient({
             link: createHttpLink({ uri: server + '/graphql/'}),
             cache: new InMemoryCache()
         });
     }
     get(query, server = this._AppConstants.gql) {
         let deferred = this._$q.defer();
         if (!this._clients.has(server)) {
             this._clients.set(server, this.createClient(server));
         }
         this._clients.get(server).query({
             query: gql(query)
         }).then(
             (res) => deferred.resolve(res.data),
             (err) => deferred.reject(err)
         );
         return deferred.promise;
     }
 };
 
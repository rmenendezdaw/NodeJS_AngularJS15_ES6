import { merge } from 'lodash';

// .exec() is used at the end of the GET mongoose queries so it doesn't run twice

const QueryResolvers = {
  Query: {
      message: () => 'Hello World!'
  }
}

import CompanyRes from "./company/company.resolver";

const resolvers = merge(
  QueryResolvers,
  CompanyRes
);

export default resolvers;
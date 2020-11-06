const mongoose = require('mongoose');
const Company = mongoose.model('Company');

const resolvers = {
  Query: {
    company: (root, {slug}) => {
      return Company.findOne({slug: slug}).exec();
    },
    companies: () =>  {
      console.log('test')
      return Company.find().exec();
    }
  },
  Mutation: {
    createCompany: (root, {input}) => {
      // console.log("----------------------------------------")
      // console.log(input)
        const company = new Company(input);
        // no .exec();
        company.save();
        return company;
    }
},
};


export default resolvers;
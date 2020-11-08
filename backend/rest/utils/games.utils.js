const axios = require('axios');

exports.requestCompany = async function (slug) {
    console.log("_------------------------axios")

    let company = await axios({
        url: "http://localhost:3002/api/graphql",
        method: 'post',
        data: {
            query: `
            query {
                company(slug: "${slug}") {
                    id
                }
            }
        `
        }
    });
    console.log("_------------------------axios")
    console.log(company.data.data.company)
    return company.data.data.company;
}
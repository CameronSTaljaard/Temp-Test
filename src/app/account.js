import { PluginAdapter } from '@coyoapp/plugin-adapter';
const axios = require('axios');

export class AccountPlugin {
  constructor() {
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      this.accountExists(email);
    });
  }

  async accountExists(email) {
    let data = await this.lookupAccounts(email);
    data.then( function (res) {
      console.log(res);
    }, function (err) {
      console.log(err);
    })
  }

  lookupAccounts(userEmail) {
    return new Promise((resolve, reject) => {
      axios.post('https://api.staffomaticapp.com/v3/accounts?email=cameronstaljaard@gmail.com&lookup_token=MF7FXPqcrBQENtmQoUnE',{
        //headers: {
        //  'Access-Control-Allow-Origin': '*',
        //},
        //data: {
        //    email: "CameronSTaljaard@gmail.com",
        //    lookup_token: 'MF7FXPqcrBQENtmQoUnE'
        //}
      })
      .then(function (response) {
        console.log("Resolve");
        resolve(response);
      })
      .catch(function (error) {
        console.log("Reject");
        reject(error);
      });
    });
  }
}
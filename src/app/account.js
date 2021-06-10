import { PluginAdapter } from '@coyoapp/plugin-adapter';
const request = require('request');


export class AccountPlugin {
  constructor() {
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      this.accountExists(email);
    });
  }

  async accountExists(email) {
    var data = await this.lookupAccounts(email);
    data.then(
      console.log("Made post.")
    )
  }

  lookupAccounts(userEmail) {
    return new Promise((resolve, reject) => {
      axios.post('https://api.staffomaticapp.com/v3/accounts', {
        email: userEmail,
        lookup_token: 'MF7FXPqcrBQENtmQoUnE'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    });
  }
}
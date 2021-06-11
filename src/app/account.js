import { PluginAdapter } from '@coyoapp/plugin-adapter';
const axios = require('axios');

export class AccountPlugin {
  constructor() {
    console.log("entered account constructor");
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      this.lookupAccounts(email);
    });
  }

  lookupAccounts(userEmail) {
    console.log("entered poster");
    axios({
      method: 'post',
      url: 'https://api.staffomaticapp.com/v3/accounts',
      data: {
        email: userEmail,
        lookup_token: 'MF7FXPqcrBQENtmQoUnE'
      }
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
}
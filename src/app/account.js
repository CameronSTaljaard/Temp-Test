import { PluginAdapter } from '@coyoapp/plugin-adapter';
//const request = require('request');


export class AccountPlugin {
  constructor() {
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      //this.accountExists(email);
    });
  }

  lookupAccounts(userEmail) {
    return new Promise((resolve, reject) => {
      request.post("https://api.staffomaticapp.com/v3/accounts", {
        form: {
          email: userEmail,
          lookup_token: "MF7FXPqcrBQENtmQoUnE"
        }
      }, function optionalCallback(err, httpResponse, body) {
        if (err) {
          console.error('upload failed:', err);
          reject(res.status(500));
        } else {
          resolve(httpResponse);
        }
      });
    });
  }
}
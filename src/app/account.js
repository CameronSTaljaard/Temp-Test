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
    let data = await this.lookupAccounts(email);
    data.then(function (res) {
      console.log(res);
    }, function (err) {
      console.log(err);
    })
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
        //
        // TODO: Check if the HTTP status code fits your expectations:
        //
        // if (httpResponse.status !== 201) {
        //     return res.status(500);
        // }
        //
      });
    });
  }
}
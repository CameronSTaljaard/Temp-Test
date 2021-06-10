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
          email: email,
          lookup_token: "MF7FXPqcrBQENtmQoUnE"
        }
      }, (error, response, body) => {
        console.log({ error: error })
        if (error) reject(error);
        console.log({ statusCode: response.statusCode })
        console.log({ body: body })
        if (response.statusCode != 200) {
          reject(response);
        }
        resolve(JSON.parse(body));
      });
    });
  }
}
import { PluginAdapter } from '@coyoapp/plugin-adapter';


export class account {
  constructor() {
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      this.lookupAccounts(email);
    });
  }

  lookupAccounts(email) {
    //return new Promise((resolve, reject) => {
      // request.post("", {
      request.post("https://api.staffomaticapp.com/v3/accounts", {
        form: {
          email: email,
          lookup_token: "MF7FXPqcrBQENtmQoUnE"
        }
      }, (error, response, body) => {
        console.log({ error: error })
        if (error)
          reject(error);
        console.log({ statusCode: response.statusCode })
        console.log({ body: body })
        if (response.statusCode != 200) {
          reject(response);
        }
        resolve(JSON.parse(body));
      });
    //});
  }
}
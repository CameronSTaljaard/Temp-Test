import { PluginAdapter } from '@coyoapp/plugin-adapter';

export class AccountPlugin {
  constructor() {
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      this.lookupAccounts(email);
    });
  }

  lookupAccounts (email) {
    return fetch("https://api.staffomaticapp.com/v3/accounts", {
        headers: {'Content-Type': 'application/json'},
        json: true,
        method: 'post',
        body: JSON.stringify({email: email})
      })
  };
}
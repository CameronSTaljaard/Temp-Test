import { PluginAdapter } from '@coyoapp/plugin-adapter';
const axios = require('axios');

export class AccountPlugin {
  constructor() {
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      this.lookupAccounts(email);
    });
  }

  
}
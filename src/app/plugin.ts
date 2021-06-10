import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            this.updateVariables(name, email);
            this.accountLookup(email);
        });
    }

    updateVariables(userName, userEmail) {
        const nameElem = document.getElementById('userName');
        nameElem.innerText = userName;
        const emailElem = document.getElementById('userEmail');
        emailElem.innerText = userEmail;
    }

    accountLookup(userEmail) {
      let url = "cameronstaljaard@gmail.com";
      let lookup = "MF7FXPqcrBQENtmQoUnE"
      (async () => {
        const rawResponse = await fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({lookup_token: lookup, email: userEmail})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
    }
}

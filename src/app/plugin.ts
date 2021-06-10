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

    accountLookup(email) {
      let url = "cameronstaljaard@gmail.com";
      let lookup = "MF7FXPqcrBQENtmQoUnE";
      (async () => {
        const rawResponse = await fetch(url, {
          method: 'POST',
          headers: {
            'email': email,
            'lookup_token': lookup,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
}

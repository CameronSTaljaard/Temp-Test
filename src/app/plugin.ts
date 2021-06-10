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
      const url = "https://api.staffomaticapp.com/v3/accounts";
      const params = {
        email: userEmail,
        lookup_token: "MF7FXPqcrBQENtmQoUnE"
      };
      const options = {
        method: 'POST',
        body: JSON.stringify( params )
      };
      fetch( url, options )
        .then( response => response.json() )
        .then( response => {
          console.log(response);
         });
    }
}

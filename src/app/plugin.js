import {PluginAdapter} from '@coyoapp/plugin-adapter';


export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            this.updateVariables(name, email);
            this.lookupAccounts();
        });
    }

    updateVariables(userName, userEmail) {
        const nameElem = document.getElementById('userName');
        nameElem.innerText = userName;
        const emailElem = document.getElementById('userEmail');
        emailElem.innerText = userEmail;
    }

    lookupAccounts() {
      axios({
        method: 'post',
        url: 'https://api.staffomaticapp.com/v3/accounts',
        data: {
          email: 'CameronSTaljaard@Gmail.com',
          lookup_token: 'MF7FXPqcrBQENtmQoUnE'
        }
      }).then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }
}

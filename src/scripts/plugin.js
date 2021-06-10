import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            this.updateVariables(name, email);
        });
    }

    updateVariables(userName) {
        const nameElem = document.getElementById('userName');
        nameElem.innerText = userName;
    }

    accountLookup(userEmail) {
      let xhr = new XMLHttpRequest();
      let url = "https://api.staffomaticapp.com/v3/accounts";
      xhr.open("POST", url, true);
      let email = userEmail;
      let lookup_token = "MF7FXPqcrBQENtmQoUnE";
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            console.log(json.email + ", " + json.lookup_token);
            console.log(xhr.responseText);
        }
      };
      let data = JSON.stringify({"email": email, "lookup_token": lookup_token});
      xhr.send(data);
    }
}

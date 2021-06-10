import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            this.updateVariables(name);
            this.accountLookup(email);
        });
    }

    updateVariables(userName) {
        const nameElem = document.getElementById('userName');
        nameElem.innerText = userName;
    }

    accountLookup(email) {
      let staffomatic_url = "https://api.staffomaticapp.com/v3/accounts";
      let token = "MF7FXPqcrBQENtmQoUnE";
      $.ajax({
        type: "POST",
        url: staffomatic_url,
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify({ lookup_token: token, userEmail: email}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){console.log(data);},
        error: function(e) {
            console.log(e);
        }
    });
    }
}

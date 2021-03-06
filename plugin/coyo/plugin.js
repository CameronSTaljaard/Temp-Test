import {PluginAdapter} from '@coyoapp/plugin-adapter';


export class CoyoPlugin {
    constructor() {
      console.log("entered plugin constructor");
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            this.updateVariables(name, email);
        });
    }

    updateVariables(userName, userEmail) {
        const nameElem = document.getElementById('userName');
        nameElem.innerText = userName;
        const emailElem = document.getElementById('userEmail');
        emailElem.innerText = userEmail;
        emailElem.innerText = "I definitely work";
    }
}

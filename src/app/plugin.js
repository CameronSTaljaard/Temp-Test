import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            console.log(data['ctx.userName']);
            console.log(data['ctx.userEmail']);
            console.log(data['userName']);
            console.log(data['userEmail']);
            this.updateVariables(name, email);
        });
    }

    updateVariables(userName, userEmail) {
        const nameElem = document.getElementById('userName');
        nameElem.innerText = userName;
        const emailElem = document.getElementById('userEmail');
        emailElem.innerText = userEmail;
    }
}

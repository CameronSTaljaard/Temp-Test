import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            this.changeName(name);
            this.changeEmail(email);
        });
    }

    private changeName(userName: string) {
        const nameElem = document.getElementById('userName')!;
        nameElem.innerText = userName;
    }

    private changeEmail(userEmail: string) {
        const emailElem = document.getElementById('userEmail')!;
        emailElem.innerText = userEmail;
    }
}

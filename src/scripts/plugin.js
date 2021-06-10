import {PluginAdapter} from '@coyoapp/plugin-adapter';

export class DemoPlugin {
    constructor() {
        new PluginAdapter().init().then(data => {
            const name = data['ctx.userName'];
            const email = data['ctx.userEmail'];
            this.updateVariables(name, email);
            //this.accountLookup(email);
        });
    }

    updateVariables(userName, userEmail) {
        const nameElem = document.getElementById('userName');
        nameElem.innerText = userName;
        const emailElem = document.getElementById('userEmail');
        emailElem.innerText = userEmail;
    }

    accountLookup(email) {
      console.log("Doing lookup with email: " + email);
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

    renderAccountsList (response) {
      console.log(response)
      var ul = document.getElementById("account-list");
      toggleElement("account-list-wrapper")
  
      for (const element of response) {
        var li = document.createElement("li");
        li.setAttribute('id', element.id);
  
        // build link
        var linkText = document.createTextNode(element.name)
        var accountLink = document.createElement('a');
        accountLink.appendChild(linkText);
        accountLink.title = element.name;
        if(element.app_version == "v3"){
          accountLink.href = "https://" + element.account_subdomain + ".easypepapp.com";
        }else{
          accountLink.href = "https://" + element.account_subdomain + ".staffomatic.app";
        }
        //accountLink.target = "_blank"
        li.appendChild(accountLink);
        ul.appendChild(li);
      }
    }

    handleAccountLookupResponse (data) {
      console.log(data.length)
      if(data.length > 0){
        renderAccountsList(data)
      }else if(!!data['error']){
        console.error(data)
        renderEmptyAccountsList()
      }else{
        renderEmptyAccountsList(data)
      }
    }
}

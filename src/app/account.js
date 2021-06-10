import { PluginAdapter } from '@coyoapp/plugin-adapter';
const https = require('https')
const request = require('request')
const axios = require('axios');

export class AccountPlugin {
  constructor() {
    new PluginAdapter().init().then(data => {
      const email = data['ctx.userEmail'];
      this.accountExists(email);
    });
  }

  async accountExists(email) {
    let data = await this.lookupAccounts(email);
    data.then(function (res) {
      console.log(res);
    }, function (err) {
      console.log(err);
    })
  }

  lookupAccounts(userEmail) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({
        lookup_token: 'MF7FXPqcrBQENtmQoUnE',
        email: "cameronstaljaard@gmail.com"
      })
      const options = {
        hostname: 'api.staffomaticapp.com',
        port: 80,
        path: '/v3/accounts',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
        },
      }

      const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`)
      
        res.on('data', (d) => {
          console.log(d);
          resolve(d);
        })
      })
      
      req.on('error', (error) => {
        console.log(error)
        reject(error);
      })
      
      req.write(data)
      req.end()
    })
      .then(function (response) {
        console.log("Resolve");
        resolve(response);
      })
      .catch(function (error) {
        console.log("Reject");
        reject(error);
      });
  }
}
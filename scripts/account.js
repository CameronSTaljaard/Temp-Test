function lookupAccount() {
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  var params = {
      "email":"CameronSTaljaard@Gmail.com",
      "lookup_token":"MF7FXPqcrBQENtmQoUnE",
  };
  xhr.send(JSON.stringify(params));
}

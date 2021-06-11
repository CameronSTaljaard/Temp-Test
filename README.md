# Staffomatic COYO Widget

Project Page: https://staffomatic.atlassian.net/wiki/spaces/WIKI/pages/1872363521/Coyo+Add-on

Deploy with:

```
 $ npx shipit production deploy
```

# How to use the widget:

## Building and serving:
  Once the project is deployed, it can do one of two things:
  - run ```$ npm run build```
  or
  - run ```$ npm start```

    npm start will do as expected and simply deliver the content with node and its routing.

    npm run build will build the entire project into a ./dist folder. Compiling the entire node project into static files, removing the need of a noder server for the widget, while still maintaining all of the functionality of node.
    This method can only be used if the index.html can be made into an entrypoint without starting a node instance to route it.

## Local testing.
  - Install node version 14.x.

  Install dependencies:
    - run ```npm install``` 
  Start the server:
    - run ```$ npm start```

  The content will now all be presented on localhost:5000
  Build the static files from your node project.
    - run ```$ npm run build```

  Once the build is complete, simply launch the index.html file in ./dist
  The node project and all of its modules will have been rebuilt as static files, allowing you to run this without a node server.

## Testing on Heroku
  If you have a Heroku account, simply follow these steps:
  
  - Log in to your heroku account via terminal.
    - run ```$ heroku login```
  - Create your heroku repository.
    - ```$ heroku create```
  - Add, and commit all content in the repository.
  - Push your project to heroku
    - run ```$ git push heroku HEAD:main```

  Your work will now be hosted on heroku and fully viewable through the browser.
  Simply open the heroku project to view how it is running.
    - run ```$ heroku open``` 

## TODO:

- [ ] Confirm posting to the backend.
- [ ] Change main page content based on post response to backend.
- [ ] Add custom logic for if the user has an account or not.
  - [ ] Display all accounts, if they exist.
  - [ ] Bring the user to a registration page if they have not yet signed up.
  - [ ] Bring the user to a login page for their account is they have only one account.
- [ ] Style the main widget page to be visually appealing and match the Staffomatic style.
- [ ] Add npm testing and lint.
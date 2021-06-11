# Staffomatic COYO Widget

Project Page: https://staffomatic.atlassian.net/wiki/spaces/WIKI/pages/1872363521/Coyo+Add-on

Deploy with:

```
 $ npx shipit production deploy
```

# How to use the widget:

## Building and serving:
  Once the project is deployed, it should run:
  - run ```$ npm run build```

    This will build the node project, with all of its packages into static files in ./dist
    Outside of git, Node and npm are not needed. The ./dist folder that is built is what should be delivered and has an index file at its root.

    After being built, ./dist/index.html needs to be the default landing page and is entirely static.

## Local testing.
  - Install node version 14.x.

  Install dependencies:
    - run ```npm install``` 
  Build the static files from your node project.
    - run ```npm run build```

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
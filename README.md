# JobylonJobsList Project

POC done for Jobylon test :

The use-case is very simple:
    1. User types a URL in the browser
    2. User is presented with a list of jobs
    3. The user can interact with the jobs in the list and follow a link to the actual ads.

The site in question where you should get the jobs from is one of the following:
XML - https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/
JSON - https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json

Non functional requirements:
    * You can use any open source libraries
    * It should work in a modern browser (Chrome or Firefox)
    * Either the app has to be hosted somewhere online or you have to write some instructions on how to get it up an running on Linux (do this in the README file)
    * The code should be hosted in a code repository (Bitbucket, GitHub, GitLab or other)

BONUS:
If you want to impress, feel free to put a special touch on the UI.

View the result of the website at https://jbsaouzanet.github.io/jobylon-jobs-list/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Install on linux

1. Install Node.js

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

2. Update NPM

sudo npm install npm@latest -g

3. Install the Angular CLI

sudo npm install -g @angular/cli

4. Clone the https://github.com/jbsaouzanet/jobylon-jobs-list/tree/develop branch
/!\ The main branch is made for the release on GitHub page

5. Run The app 

ng serve --open

6. Build The app
ng build --prod

'use strict';

// build sass
require('./scss/main.scss');

// require node modules
const path = require('path'); 

// require npm modules
const angular = require('angular');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');

// require angualr modules
const ngTouch = require('angular-touch');
const ngAnimate = require('angular-animate');
const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');

// create angular module
const app = angular.module(camelcase(__TITLE__), [ngTouch, ngAnimate, uiRouter, uiBootstrap]);

// set up $rootScope globals
app.run(['$rootScope', function($rootScope){
  $rootScope.title = __TITLE__;
}]);

// load configuration
let context = require.context('./config/', true, /.js$/);
context.keys().forEach( path => {
  app.config(context(path));
});

// load services 
context = require.context('./service/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key); 
  app.service(name, module);
});

// load view controllers
context = require.context('./view/', true, /.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js')); 
  let module = context(key); 
  app.controller(name, module);
});

// load components 
context = require.context('./component/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key); 
  app.component(name, module);
});

// load directives 
context = require.context('./directive/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key); 
  app.directive(name, module);
});

// load filters
context = require.context('./filter/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key); 
  app.filter(name, module);
});

// after everything is loaded in to the app 
// load bootstrap onto the page
angular.bootstrap(document, [camelcase(__TITLE__)]);

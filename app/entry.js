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
const demoApp = angular.module('demoApp', [ngTouch, ngAnimate, uiRouter, uiBootstrap]);

// load config
let context = require.context('./config/', true, /.js$/);
context.keys().forEach( path => {
  demoApp.config(context(path));
});

// load view controllers
context = require.context('./view/', true, /.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js')); // name controller based on file name
  let module = context(key); // value of module.exports
  demoApp.controller(name, module);
});

// load services 
context = require.context('./service/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key); // value of module.exports
  demoApp.service(name, module);
});

// load components 
context = require.context('./component/', true, /.js$/);
context.keys().forEach( key => {
  let name = camelcase(path.basename(key, '.js'));
  let module = context(key); // value of module.exports
  demoApp.component(name, module);
});

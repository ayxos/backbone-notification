require.config({
  waitSeconds: 0,
  baseUrl: 'js',
  paths: {
    // Libraries
    jquery      : "../libs/vendors/jquery/jquery",
    backbone    : '../libs/vendors/backbone-1.1.2/backbone',
    handlebars  : "../libs/vendors/handlebars/handlebars",
    underscore  : "../libs/vendors/underscore/underscore",
    jade        : '../libs/vendors/jade/runtime',
    bootstrap   : '../libs/vendors/bootstrap-3/bootstrap',
    not         : '../backbone-notification.min'

  },

  shim: {
    jquery: {
      exports: '$'
    },
    backbone:{
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    handlebars: {
      deps: ['backbone'],
      exports: 'Handlebars'
    },
    bootstrap:{
      deps: ['jquery']
    },
    not:{
      deps:['underscore', 'bootstrap', 'backbone']
    }
  }
});

define(function(require) {
  'use strict';

  var Backbone = require('backbone')
  , AppRouter = require('apps/router')
  ;

  new AppRouter({});

  Backbone.history.start();

});

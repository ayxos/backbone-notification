/*!
 * Backbone-notification v1.0.0 (http://http://ayxos.com/backbone-notification/)
 * Copyright 2014 Marco Antonio Pajares Silva.
 * Licensed under MIT
 */

define(function(require) {
  'use strict';

  // require('bootstrap_3');

  var Backbone;
  if(require){
    Backbone = require('backbone');
  }
  else{
    console.log('you need load Backbone using require');
  }
  // templates
  var template = '<div class="notification alert fade in <%= alert_type %>"><a class="close" href="#" data-dismiss="alert"> × </a> <%= message %></div>';

  return Backbone.View.extend({

    el: $('body'),

    events: {
      'click [data-dismiss="alert"]': 'close'
    },

    initialize: function(arg) {
      this.model = {
        message: arg.msg,
        alert_type: 'alert-' + arg.type
      };
      console.log('init notification base view', this.model, 'args', arg);
      this.render();
    },

    render: function() {
      console.log('asociando al div alert');
      $(this.el).append( _.template(template,this.model) );
      this.$el.find('.alert').alert();
      return this.$el;
    }

  });

});
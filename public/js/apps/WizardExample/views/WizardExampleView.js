define(function(require) {
  'use strict';

  /**
  * Module wizard Base init view
  * path: apps/wizard/views/wizard
  * @class wizard
  */

  require('bootstrap_3');

  var Backbone = require('backbone')

  // templates
  , template = require('tpl/apps/WizardExample/templates/exampleTpl')
  
  //Notification
  , Notification = require('common/backbone-notification')

  ;

  return Backbone.View.extend({

    events:{
      'click [data-launch="notification"]':'Notification'
    },


    /**
    * Add initialize init
    * @name class.initialize
    * @class DictionariesBaseView
    * @constructor
    */

    initialize:function () {
      this.template = template;
      console.log('init BaseView' );
    },

    render:function () {
      console.log('rendering....' );
      $(this.el).html(this.template() );

      return this;
    },

    Notification: function(event){
      var not_type = $(event.target).attr('data-type');
      // SHOW NOTIIFICATION
      new Notification({
        // type could be: info/danger/success/warning
        type: not_type,
        message: 'menu loaded'
      });

    }

  });

});

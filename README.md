Backbone-notification
===================

live version = http://ayxos.com/backbone-notification/

A tool for create simple bootstrap notification alerts using Backbone

using:
- bower (to get deps)
- Grunt (generate index.html/Css files and jade-js converter)
- require
- underscore (as template engine)
- jquery
- Backbone

![ScreenShot](http://oi61.tinypic.com/122nepx.jpg)

Install using bower
====================
```
bower install backbone-notification
```

- *need RequireJs and bootstrap


How-to use it
====================

On your View just define type and message and init Notification

```

  //Notification
  , Notification = require('common/backbone-notification')


  // SHOW NOTIIFICATION
  new Notification({
    // type could be: info/danger/success/warning
    type: not_type,
    msg: 'menu loaded'
  });
  
  
```
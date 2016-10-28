define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="container"><section id="typeahead"><div class="page-header"><h1>A simple Notification lib for Backbone<small style="margin:1%;">notification-wizard.js</small></h1></div><div class="row"><h2>Live demo</h2><div style="margin-bottom: 4%; border: solid 1px rgb(219, 219, 219); padding:3%;" class="col-md-12"><button data-launch="notification" data-type="info" style="margin:1%" class="btn btn-info">info</button><button data-launch="notification" data-type="danger" style="margin:1%" class="btn btn-danger">danger</button><button data-launch="notification" data-type="warning" style="margin:1%" class="btn btn-warning">warning</button><button data-launch="notification" data-type="success" style="margin:1%" class="btn btn-success">success</button></div><div class="col-md-3"><h3>Author</h3><p>Marco Antonio Pajares</p><a href="http://ayxos.com/backbone-wizard/">http://ayxos.com/</a><br/><a href="https://github.com/cybermarkus1/backbone-notification">github code</a><h3>About</h3><p>Create a custom backbone-notification.</p><ul><li>must be used as a requireJS component with Backbone and bootstrap as deps.</li></ul><p><a href="public/js/common/backbone-notification.js" target="_blank" class="btn btn-primary">Download</a></p><p><a href="public/backbone-notification.min.js" target="_blank" class="btn btn-primary">Download minified</a></p><h3>Change log</h3><dl><dt>v@1.1.0</dt><dt>1/09/2014</dt><dd>adding friendly recommendations from</dd><a href="https://twitter.com/RubenGLB">RubenGLB</a></dl><dl><dt>v@1.0.0</dt><dt>13/08/2014</dt><dd>uglify js in a single file.</dd></dl></div><div class="col-md-9"><hr/><h2>RequireJs Config file</h2><pre class="prettyprint linenums">...\n\nnotification-lib          : \'path/to/notification/lib\'\n\n...\n\nshim: {\n    \'notification-lib\':{\n      deps:[\'underscore\', \'bootstrap\', \'backbone\']\n    }\n}\n\n...\n</pre><pre class="prettyprint linenums">//Notification\n, Notification = require(\'notification-lib\')\n\n.\n.\n.\n\n// SHOW NOTIIFICATION\nnew Notification({\n  // type could be: info/danger/success/warning\n  type: not_type,\n  message: \'menu loaded\'\n});\n\n.\n.\n.</pre><hr/><h2>Style code Css</h2><pre class="prettyprint linenums">.notification {\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0;\n  right: 0;\n  top: 2%;\n  z-index: 9999;\n  &amp;.alert-info, &amp;.alert-success, &amp;.alert-warning, &amp;.alert-danger {\n    width: 30%;\n    margin: auto auto;\n    margin-top: 1%;\n  }\n}</pre><hr/><h2>Get backbone-notification.js</h2><p>Get the backbone-notification via bower:</p><pre class="prettyprint linenums">bower install backbone-notification</pre><h3>Options</h3><table class="table table-bordered table-striped"><thead><tr><th style="width: 100px;">Name</th><th style="width: 50px;">type</th><th style="width: 100px;">example</th><th>description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>\'info\'/\'danger\'/\'success\'/\'warning\'</td><td>notification type.</td></tr><tr><td>message</td><td>String</td><td>\'Hi this is a notification\'</td><td>Display message.</td></tr></tbody></table><h3>License</h3><h4>MIT LICENSE</h4><p>The MIT License (MIT)</p><pre class="prettyprint linenums">Copyright (c) 2014 marco\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the &quot;Software&quot;), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.</pre></div></div></section></div>');
}
return buf.join("");
};
});
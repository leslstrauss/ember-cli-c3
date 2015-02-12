/* jshint ignore:start */

define('cli-ya/config/environment', ['ember'], function(Ember) {
  var prefix = 'cli-ya';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("cli-ya/tests/test-helper");
} else {
  require("cli-ya/app")["default"].create({"name":"cli-ya","version":"0.0.0.49d361b4"});
}

/* jshint ignore:end */

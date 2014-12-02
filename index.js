/**
 * An isomorphic Bunyan stream focused around development-time use cases.
 *
 * See README for more information.
 */
var colors = require('colors/safe');
var LEVEL_NAMES = {
  10: 'trace',
  20: 'debug',
  30: 'info',
  40: 'warn',
  50: 'error',
  60: 'fatal'
};
var LEVEL_COLORS = {
  10: 'grey',
  20: 'blue',
  30: 'green',
  40: 'yellow',
  50: 'red',
  60: 'red'
};

/**
 * Creates a new instance of IsoBunyanStream with the provided `options`.
 *
 * @param {Object} options
 */
function IsoBunyanStream(options) {
  if (!(this instanceof IsoBunyanStream)) {
    return new IsoBunyanStream(options);
  }

  options = options || {};
}

/**
 * Writes a Bunyan record to an environmentally-appropriate location.
 *
 * See README for more information.
 */
IsoBunyanStream.prototype.write = function write(record) {
  var levelName = LEVEL_NAMES[record.level];
  var levelColor = LEVEL_COLORS[record.level];

  console.log(
    '%s %s| %s: %s',
    colors.grey(record.name),
    colors.grey(record.time.toLocaleTimeString()),
    colors[levelColor](levelName),
    record.msg
  );
};

/*!
 * Export `IsoBunyanStream`.
 */
module.exports = IsoBunyanStream;

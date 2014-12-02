# Isomorphic Bunyan Stream

Just what it says on the label: a simple, isomorphic Bunyan stream for use in
Node and the browser. It's intended to be used _only for development_, so all
context gets stripped out: only the message, level, logger name, and a simple
timestamp are displayed.

## Why is this useful?

Isomorphic applications, as much or moreso than client-only, single-page
web applications, are a distributed computing problem. Good logs provide a
simple, sane way to reason about the flow of information through such a
distributed system, but we need a way to reason about _all_ actors involved,
including the browser. As such, we're well-served by a consistent stream shared
between both types of actor: the client (browsers) and the server (Node).

## Installation

As always, it's just an NPM module:

```
npm install --save iso-bunyan-stream
```

## Usage

The stream _requires_ being added in raw mode:

```javascript
var bunyan = require('bunyan');
var logger = bunyan.createLogger({
  name: 'SomeApp',
  streams: [{
    level: 'info',
    type: 'raw',
    stream: {
      write: function (record) {
        console.log('%s %s| %s: %s', colors.grey(record.name), colors.grey(record.time.toLocaleTimeString()), colors[LEVEL_COLORS[record.level]](LEVEL_NAMES[record.level]), record.msg);
      }
    }
  }]
});
```

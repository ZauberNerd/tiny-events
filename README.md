# tiny-events [![Build Status][0]][1] [![Coverage Status][2]][3]
[![Sauce Test Status][4]][5]

A very tiny (*400b*) EventEmitter implementation for client- and server-side code.


## installation
`npm install --save tiny-events`


## usage
instantiate the object directly..

```javascript
// import the module
var EventEmitter = require('tiny-events').EventEmitter;

// instantiate the object
var events = new EventEmitter();

// listen to 'foo' events
events.on('foo', function (data) {
    console.log('foo occured!');
});

// emit a 'foo' event
events.emit('foo');

// emit a 'foo' event with some data
events.emit('foo', 'hello world');

// remove all foo event listeners
events.off('foo');
```

... or subclass it.
```javascript
var utils = require('utils');
var EventEmitter = require('tiny-events').EventEmitter;

function MyClass() {
    EventEmitter.call(this);
}

util.inherits(MyClass, EventEmitter);
```


## API

- `on(type: string, listener: Function): EventEmitter`
- `once(type: string, listener: Function): EventEmitter`
- `off(type: string, listener?: Function): EventEmitter`
- `emit(type: string, ...args: any[]): EventEmitter`

[0]: https://img.shields.io/travis/ZauberNerd/tiny-events.svg
[1]: https://travis-ci.org/ZauberNerd/tiny-events
[2]: https://img.shields.io/coveralls/ZauberNerd/tiny-events.svg
[3]: https://coveralls.io/r/ZauberNerd/tiny-events?branch=master
[4]: https://saucelabs.com/browser-matrix/dom2wg-eventemitter.svg
[5]: https://saucelabs.com/u/dom2wg-eventemitter

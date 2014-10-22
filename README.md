# small-eventemitter [![Build Status][0]][1] [![Coverage Status][2]][3]

A very small (*400b*) EventEmitter implementation for client- and server-side code.


## installation
`npm install --save small-eventemitter`


## usage
instantiate the object directly..

```javascript
// import the module
var EventEmitter = require('small-eventemitter').EventEmitter;

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
var EventEmitter = require('small-eventemitter').EventEmitter;

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

[0]: https://img.shields.io/travis/ZauberNerd/small-eventemitter.svg
[1]: https://travis-ci.org/ZauberNerd/small-eventemitter
[2]: https://img.shields.io/coveralls/ZauberNerd/small-eventemitter.svg
[3]: https://coveralls.io/r/ZauberNerd/small-eventemitter?branch=master

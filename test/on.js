var test = require('tape');
var events = require('../');


test('registers one listener', function (assert) {
    assert.plan(3);

    var emitter = new events.EventEmitter();
    var callback = function () {};

    emitter.on('foo', callback);

    assert.equal(Object.keys(emitter._listeners).length, 1, 'registers only one event');
    assert.equal(emitter._listeners['foo'].length, 1, 'registers only one listener');
    assert.equal(emitter._listeners['foo'][0], callback, 'registered listener is the same as passed to .on() method');

    assert.end();
});


test('registers multiple listners', function (assert) {
    assert.plan(4);

    var emitter = new events.EventEmitter();
    var callback1 = function () {};
    var callback2 = function () {};

    emitter.on('foo', callback1);
    emitter.on('foo', callback2);

    assert.equal(Object.keys(emitter._listeners).length, 1, 'registers only one event');
    assert.equal(emitter._listeners['foo'].length, 2, 'registers two listeners for event');
    assert.equal(emitter._listeners['foo'][0], callback1, 'callback1 is the same');
    assert.equal(emitter._listeners['foo'][1], callback2, 'callback2 is the same');

    assert.end();
});


test('registers multiple events', function (assert) {
    assert.plan(3);

    var emitter = new events.EventEmitter();
    var callback1 = function () {};
    var callback2 = function () {};

    emitter.on('foo', callback1);
    emitter.on('bar', callback2);

    assert.equal(Object.keys(emitter._listeners).length, 2, 'registers two events');
    assert.equal(emitter._listeners['foo'][0], callback1, 'callback1 is correctly registered for foo events');
    assert.equal(emitter._listeners['bar'][0], callback2, 'callback2 is correctly registered for bar events');

    assert.end();
});

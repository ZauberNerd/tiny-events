var test = require('tape');
var events = require('../');


test('remove one event listener', function (assert) {
    assert.plan(1);

    var emitter = new events.EventEmitter();
    var callback = function () {};

    emitter.on('foo', callback);
    emitter.off('foo', callback);

    assert.equals(emitter._listeners['foo'].length, 0, 'removed callback from events array');

    assert.end();
});


test('removing an event listener does not affect others', function (assert) {
    assert.plan(2);

    var emitter = new events.EventEmitter();
    var callback1 = function () {};
    var callback2 = function () {};

    emitter.on('foo', callback1);
    emitter.on('foo', callback2);
    emitter.off('foo', callback1);

    assert.equals(emitter._listeners['foo'].length, 1, 'removed callback1 from events array');
    assert.equals(emitter._listeners['foo'][0], callback2, 'callback2 is still in events array');

    assert.end();
});


test('remove all event listeners for event', function (assert) {
    assert.plan(1);

    var emitter = new events.EventEmitter();
    var callback1 = function () {};
    var callback2 = function () {};

    emitter.on('foo', callback1);
    emitter.on('foo', callback2);
    emitter.off('foo');

    assert.equals(emitter._listeners['foo'].length, 0, 'all callbacks are removed from events array');

    assert.end();
});

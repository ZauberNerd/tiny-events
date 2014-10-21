var test = require('tape');
var events = require('../');


test('emit an event with one listener', function (assert) {
    assert.plan(1);

    var emitter = new events.EventEmitter();
    var callback = function () {
        assert.pass('callback should get executed');
    };

    emitter.on('foo', callback);
    emitter.emit('foo', 1, 2, 3);

    assert.end();
});


test('emit an event with multiple listeners', function (assert) {
    assert.plan(2);

    var emitter = new events.EventEmitter();
    var callback1 = function () {
        assert.pass('callback should get executed');
    };
    var callback2 = function () {
        assert.pass('callback should get executed');
    };

    emitter.on('foo', callback1);
    emitter.on('foo', callback2);
    emitter.emit('foo', 1, 2, 3);

    assert.end();
});

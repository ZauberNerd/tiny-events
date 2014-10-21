var test = require('tape');
var events = require('../');


test('execute callback just once', function (assert) {
    assert.plan(1);

    var emitter = new events.EventEmitter();
    var callback = function () { assert.pass('should execute callback'); };

    emitter.once('foo', callback);
    emitter.emit('foo', 1, 2, 3);
    emitter.emit('foo', 1, 2, 3);

    assert.end();
});


test('does not execute callback when removed', function (assert) {
    assert.plan(1);

    var emitter = new events.EventEmitter();
    var callback1 = function () { assert.fail('should not execute'); };
    var callback2 = function () { assert.pass('should execute callback'); };

    emitter.once('foo', callback1);
    emitter.once('foo', callback2);
    emitter.off('foo', callback1);
    emitter.emit('foo', 1, 2, 3);

    assert.end();
});

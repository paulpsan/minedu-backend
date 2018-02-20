/**
 * Reserva model events
 */

'use strict';

import {EventEmitter} from 'events';
var Reserva = require('../../sqldb').Reserva;
var ReservaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ReservaEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Reserva.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    ReservaEvents.emit(event + ':' + doc._id, doc);
    ReservaEvents.emit(event, doc);
    done(null);
  }
}

export default ReservaEvents;

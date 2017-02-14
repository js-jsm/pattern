describe('Conference.checkInRecorder', function() {
  'use strict';

  var attendee, checkInRecorder;
  beforeEach(function() {
    attendee = Conference.attendee('일용', '이');
    attendee.setId(777);
    checkInRecorder = Conference.checkInRecorder();
  })
})

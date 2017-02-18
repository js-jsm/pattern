var Conference = Conference || {};

Conference.checkInService = function(checkInRecorder) {
  'use strict';

  var recorder = checkInRecorder;

  return {
    checkIn: function(attendee) {
      attendee.checkIn();
      recorder.recordCheckIn(attendee).then(
        attendee.setCheckInNumber,
        attendee.undoCheckIn);
    }
  };
};

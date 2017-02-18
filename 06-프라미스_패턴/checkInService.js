var Conference = Conference || {};

Conference.checkInService = function(checkInRecoder) {
  'use strict';
  var recorder = checkInRecoder;

  return {
    checkIn: function(attendee) {
      attendee.checkIn();
      recorder.recordCheckIn(attendee).then(
       attendee.setCheckInNumber,
       attendee.undoCheckIn);
    }
 };
};

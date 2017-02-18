var Conference = Conference || {};

Conference.checkInService = function(checkInRecorder) {
  'use strict';

  var recorder = checkInRecorder;

  return {
    checkIn: function(attendee) {
      return new Promise( function checkInPromise(resolve, reject) {
        attendee.checkIn();
        recorder.recordCheckIn(attendee).then(
          function onRecordCheckInSucceeded(checkInNumber) {
            attendee.setCheckInNumber(checkInNumber);
            resolve(checkInNumber);
          },
          function onRecordCheckInFailed(reason) {
            attendee.undoCheckIn();
            reject(reason);
          });
      });
    }
  };
};

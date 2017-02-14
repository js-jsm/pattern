var Conference = Conference || {};

Conference.checkInRecorder = function() {
  'use strict';

  var messages = {
    mustBeCheckedIn: '참가자는 체크인된 것으로 표시되어야 한다'
  };

  return {
    getMessages: function() {
      return messages;
    },

    recordCheckIn: function(attendee) {
      return new Promise( function(resolve, reject) {
        if (attendee.isCheckedIn()) {
          resolve(4444);
        } else {
          reject(new Error(messages.mustBeCheckedIn))
        }
      });
    }
  };
};

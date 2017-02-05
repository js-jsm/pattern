var Conference = Conference || {};
Conference.attendee = function(firstName, lastName) {
  "use strict";

  var checkedIn = false,
    first = firstName || 'None',
    last = lastName || 'None';

  return {
    getFullName: function() {
      return first + ' ' + last;
    },

    isCheckedIn: function() {
      return checkedIn;
    },

    checkIn: function() {
      checkedIn = true;
    }
  };
<<<<<<< HEAD
};
=======
};
>>>>>>> 9e669668fc2371a42548266297da60444611cedb

describe('Conference.checkInService', function() {
    'use strict';
    var checkInService,
        checkInRecorder,
        attendee;

    beforeEach(function() {
        checkInRecorder = Conference.checkInRecorder();
        checkInService = Conference.checkInService(checkInRecorder);
        attendee = Conference.attendee('형철', '서')
    });

    describe('checkInService.checkIn(attendee)', function() {

        describe('checkInRecorder 성공 시', function() {
            var checkInNumber = 1234;
            beforeEach(function() {

                spyOn(checkInNumber, 'recordCheckIn').and.callFake(function() {
                    return Promise.resolve(checkInNumber);
                });
            });

            it('참가자를 체크한 것으로 표시한다', function() {
                checkInService.checkIn(attendee);
                expect(attendee.isCheckedIn()).toBe(true);
            });
            it('체크인을 등록한다', function() {
                checkInService.checkIn(attendee);
                expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
            });

            it('참가자의 checkInNumber를 지정한다', function() {
                checkInService.checkIn(attendee);
                expect(attendee.getCheckInNumber()).toBe(checkInNumber);
            });
        });
    });
});

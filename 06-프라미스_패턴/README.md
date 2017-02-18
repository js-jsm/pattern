# CH 6. 프라미스 패턴

비동기 작업과 그결과를 갖고 해야 할 일을 캡슐화 한 객체
작업완료시 이 객체에 캡슐화한 콜백을 호출 콜백은 성공과 실패콜백으로 나뉜다.

1. 단위 테스트는 checkInServce.checkIn 을 호출 한다.

2. 이 메서드는 recorder.recordCheckIn 을 호출 한다.

3 .recordCheckIn을 감시 중인 스파이는 recordCheckIn이 checkInNumber 값을 지닌 프라미스를 반환하도록 조작한다.

4. 이어서 recordCheckIn(attendee).then 의 성공 콜백이 실행된다.

5. 성공 콜백 attendee.setCheckInNumber는 checkInNumber 를 파라미터로 받는다.

6. 결국 단위 테스트 마지막 줄의 기대식을 맞아 떨어진다.!!

프로미스는 비동기적이고 멀티 쓰레딩을 모방했지만 싱글 스레드 방식으로 움직인다.

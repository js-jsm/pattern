describe("04 - createReservationAjax(passenger, flight, saver)", () => {
  let testPassenger = null,
      testFlight    = null;

  beforeEach(() => {
    testPassenger = {
      firstName: "윤지",
      lastName : "김"
    };
    testFlight = {
      number     : "3443",
      carrier    : "대한항공",
      destination: "울산"
    };
  });

  it('예약 정보를 저장한다', () => {
    const saver = new ReservationSaver();
    const reservation = createReservationAjax(testPassenger, testFlight, saver);
    // saver.saveReservation()이 정말 호출되었는지 어떻게 알 수 있을까
  });
});
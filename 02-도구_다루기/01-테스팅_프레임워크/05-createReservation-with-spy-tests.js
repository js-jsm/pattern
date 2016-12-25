describe("05 - createReservationAjax(passenger, flight, saver) with spy", () => {
  let testPassenger   = null,
      testFlight      = null,
      testReservation = null,
      testSaver       = null;

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
    testSaver = new ReservationSaver();
    spyOn(testSaver, "saveReservation");
    testReservation = createReservationAjax(testPassenger, testFlight, testSaver);
  });

  it("주어진 passenger를 passengerInformation 프로퍼티에 할당한다", () => {
    expect(testReservation.passengerInformation).toBe(testPassenger);
  });
  it("주어진 flight를 flightInformation 프로퍼티에 할당한다", () => {
    expect(testReservation.flightInformation).toBe(testFlight);
  });
  it("예약 정보를 저장한다", () => {
    expect(testSaver.saveReservation).toHaveBeenCalled();
  })
});
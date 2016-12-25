describe("01 - createReservation(passenger, flight)", () => {
  it("주어진 passenger를 passengerInfo 프로퍼티에 할당한다", () => {
    const testPassenger = {
      firstName: "윤지",
      lastName : "김"
    };
    const testFlight = {
      number     : "3443",
      carrier    : "대한항공",
      destination: "울산"
    };
    const reservation = createReservation(testPassenger, testFlight);
    expect(reservation.passengerInfo).toBe(testPassenger);
  });

  it("주어진 flight를 flightInfo 프로퍼티에 할당한다", () => {
    const testPassenger = {
      firstName: "윤지",
      lastName : "김"
    };
    const testFlight = {
      number     : "3443",
      carrier    : "대한항공",
      destination: "울산"
    };
    const reservation = createReservation(testPassenger, testFlight);
    expect(reservation.flightInfo).toBe(testFlight);
  });
});
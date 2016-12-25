describe("02 - createReservationSpec(passenger, flight)", () => {
  it("주어진 passenger를 passengerInformation 프로퍼티에 할당한다", () => {
    const testPassenger = {
      firstName: "윤지",
      lastName : "김"
    };
    const testFlight = {
      number     : "3443",
      carrier    : "대한항공",
      destination: "울산"
    };
    const reservation = createReservationSpec(testPassenger, testFlight);
    expect(reservation.passengerInformation).toBe(testPassenger);
  });

  it("주어진 flight를 flightInformation 프로퍼티에 할당한다", () => {
    const testPassenger = {
      firstName: "윤지",
      lastName : "김"
    };
    const testFlight = {
      number     : "3443",
      carrier    : "대한항공",
      destination: "울산"
    };
    const reservation = createReservationSpec(testPassenger, testFlight);
    expect(reservation.flightInformation).toBe(testFlight);
  });
});
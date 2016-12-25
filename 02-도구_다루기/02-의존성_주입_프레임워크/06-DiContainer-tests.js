describe("06 - DiContainer", () => {
  let container;

  beforeEach(() => {
    container = new DiContainer6();
  });

  describe("get(name)", () => {
    it("등록된 함수에 의존성을 제공한다", () => {
      const main = "main",
            dep1 = "dep1",
            dep2 = "dep2";
      let mainFunc;

      container.register(main, [dep1, dep2], (dep1Func, dep2Func) => (
        () => dep1Func() + dep2Func()
      ));

      container.register(dep1, [], () => (
        () => 1
      ));

      container.register(dep2, [], () => (
        () => 2
      ));

      mainFunc = container.get(main);
      expect(mainFunc()).toBe(3);
    });
  });
});

// 광고 정보를 가져온다.
TravelService.getSuggestedTicket(attendee.homeAirport);
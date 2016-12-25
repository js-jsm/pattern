describe("01 - DiContainer", () => {
  let container;

  beforeEach(() => {
    container = new DiContainer();
  });

  describe("register(name, dependencies, func)", () => {
    it("인자가 하나라도 빠졌거나 타입이 잘못되면 예외를 던진다", () => {
      const badArgs = [
        [], // 인자가 아예 없는 경우
        ["Name"], // Name만 있는 경우
        ["Name", ["Dependency1", "Dependency2"]], // func가 빠진 경우
        ["Name", () => {}], // dependencies가 빠진 경우
        [1, ['a', 'b'], () => {}] // 타입이 잘못된 경우
      ];
      badArgs.forEach(args => {
        expect(() => {
          container.register.apply(container, args);
        }).toThrow();
      });
    });
  });
});
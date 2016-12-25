describe("05 - DiContainer", () => {
  let container;

  beforeEach(() => {
    container = new DiContainer5();
  });

  describe("get(name)", () => {
    it("성명이 등록되어 있지 않으면 undefined를 반환한다", () => {
      expect(container.get('notDefined')).toBeUndefined();
    });

    it("등록된 함수를 실행한 결과를 반환한다", () => {
      const name                         = "MyName",
            returnFromRegisteredFunction = "something";
      container.register(name, [], () =>
        returnFromRegisteredFunction
      );
      expect(container.get(name)).toBe(returnFromRegisteredFunction);
    });
  });
});
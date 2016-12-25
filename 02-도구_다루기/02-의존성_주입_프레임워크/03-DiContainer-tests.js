describe("03 - DiContainer", () => {
  let container;

  beforeEach(() => {
    container = new DiContainer3();
  });

  describe("get(name)", () => {
    it("성명이 등록되어 있지 않으면 undefined를 반환한다", () => {
      expect(container.get('notDefined')).toBeUndefined();
    });
  });
});
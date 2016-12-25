describe("03 - Aop", () => {
  let targetObj,
      executionPoints,  // 실행 이벤트가 담긴 배열
      argPassingAdvice, // 타깃에 인자를 전달할 어드바이스
      argsToTarget;     // targetObj.targetFn에 전달할 인자들

  beforeEach(() => {
    targetObj = {
      targetFn() {
        executionPoints.push("targetFn");
        argsToTarget = [...arguments];
      }
    };
    executionPoints = [];
    argPassingAdvice = function(targetInfo) {
      targetInfo.fn.apply(this, targetInfo.args);
    };
    argsToTarget = [];
  });

  describe("Aop3.around(fnName, advice, targetObj)", () => {
    it("어드바이스에서 타깃으로 일반 인자를 넘길 수 있다", () => {
      Aop3.around("targetFn", argPassingAdvice, targetObj);
      targetObj.targetFn("a", "b");
      expect(argsToTarget).toEqual(["a", "b"]);
    });
  });
});
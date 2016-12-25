describe("04 - Aop", () => {
  let targetObj,
      executionPoints,  // 실행 이벤트가 담긴 배열
      argPassingAdvice, // 타깃에 인자를 전달할 어드바이스
      argsToTarget,     // targetObj.targetFn에 전달할 인자들
      targetFnReturn = 123;

  beforeEach(() => {
    targetObj = {
      targetFn() {
        executionPoints.push("targetFn");
        argsToTarget = [...arguments];
        return targetFnReturn;
      }
    };
    executionPoints = [];
    argPassingAdvice = function(targetInfo) {
      return targetInfo.fn.apply(this, targetInfo.args);
    };
    argsToTarget = [];
  });

  describe("Aop4.around(fnName, advice, targetObj)", () => {
    it("타깃의 반환값도 어드바이스에서 참조할 수 있다", () => {
      Aop4.around("targetFn", argPassingAdvice, targetObj);
      const returnedValue = targetObj.targetFn();
      expect(returnedValue).toBe(targetFnReturn);
    });
  });
});
describe("05 - Aop", () => {
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

  describe("Aop5.around(fnName, advice, targetObj)", () => {
    it("타깃 함수를 해당 객체의 콘텍스트에서 실행한다", () => {
      class Target {
        constructor() {
          const self = this;
          this.targetFn = function() {
            expect(this).toBe(self);
          }
        };
      }
      const targetInstance = new Target(),
            spyOnInstance  = spyOn(targetInstance, "targetFn").and.callThrough();
      Aop5.around("targetFn", argPassingAdvice, targetInstance);
      targetInstance.targetFn();
      expect(spyOnInstance).toHaveBeenCalled();
    });

    it("어드바이스를 타깃의 콘텍스트에서 실행한다", () => {
      const advice = function() {
        expect(this).toBe(targetObj);
      };
      Aop5.around("targetFn", advice, targetObj);
      targetObj.targetFn();
    });
  });
});
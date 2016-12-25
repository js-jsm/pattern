describe("05 - Aop", () => {
  let targetObj,
      executionPoints,  // 실행 이벤트가 담긴 배열
      argPassingAdvice, // 타깃에 인자를 전달할 어드바이스
      argsToTarget,     // targetObj.targetFn에 전달할 인자들
      targetFnReturn = 123;
  class Target {
    constructor() {
      const self = this;
      this.targetFn = function() {
        expect(this).toBe(self);
      }
    };
  }

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

  describe("Aop6.next(context, targetInfo)", () => {
    const advice = function(targetInfo) {
      return Aop6.next.call(this, targetInfo);
    };

    beforeEach(() => {
      const originalFn = targetObj.targetFn;
      Aop6.around("targetFn", advice, targetObj);
    });

    it("targetInfo.fn에 있는 함수를 호출한다", () => {
      targetObj.targetFn();
      expect(executionPoints).toEqual(["targetFn"]);
    });

    it("targetInfo.args에 인자를 전달한다", () => {
      targetObj.targetFn("a", "b");
      expect(argsToTarget).toEqual(["a", "b"]);
    });

    it("targetInfo에서 받은 값을 반환한다", () => {
      const ret = targetObj.targetFn();
      expect(ret).toEqual(targetFnReturn);
    });

    it("주어진 콘텍스트에서 타깃 함수를 실행한다", () => {
      const targetInstance = new Target(),
            spyOnInstacne  = spyOn(targetInstance, "targetFn").and.callThrough();
      Aop6.around("targetFn", advice, targetInstance);
      targetInstance.targetFn();
      expect(spyOnInstacne).toHaveBeenCalled();
    });
  });
});
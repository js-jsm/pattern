describe("02 - Aop", () => {
  let targetObj,
      executionPoints; // 실행 이벤트가 담긴 배열

  beforeEach(() => {
    targetObj = {
      targetFn() {
        executionPoints.push("targetFn");
      }
    };
    executionPoints = [];
  });

  describe("Aop2.around(fnName, advice, targetObj)", () => {
    it("어드바이스가 타깃 호출을 래핑한다", () => {
      const wrappingAdvice = targetInfo => {
        executionPoints.push("wrappingAdvice - 처음");
        targetInfo.fn();
        executionPoints.push("wrappingAdvice - 끝");
      };
      Aop2.around("targetFn", wrappingAdvice, targetObj);
      targetObj.targetFn();
      expect(executionPoints).toEqual(
        ["wrappingAdvice - 처음", "targetFn", "wrappingAdvice - 끝"]
      );
    });

    it("마지막 어드바이스가 기존 어드바이스에 대해 실행되는 방식으로 체이닝할 수 있다", () => {
      const adviceFactory = adviceId => (
        targetInfo => {
          executionPoints.push("wrappingAdvice - 처음 " + adviceId);
          targetInfo.fn();
          executionPoints.push("wrappingAdvice - 끝 " + adviceId);
        }
      );
      Aop2.around("targetFn", adviceFactory("안쪽"), targetObj);
      Aop2.around("targetFn", adviceFactory("바깥쪽"), targetObj);
      targetObj.targetFn();
      expect(executionPoints).toEqual([
        "wrappingAdvice - 처음 바깥쪽",
        "wrappingAdvice - 처음 안쪽",
        "targetFn",
        "wrappingAdvice - 끝 안쪽",
        "wrappingAdvice - 끝 바깥쪽"
      ])
    });
  });
});